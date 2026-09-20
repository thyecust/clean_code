// 把仍留在 `import.meta.require(...)` 上的调用改成动态 `import()`。
//
// ## 为什么这条路能通
//
// `await import(x)` **不是 ESM 边** —— 它不进模块图、不参与求值顺序，所以那些
// 「目标间接依赖回源」的环不会形成（静态 import 和顶层 TLA 都会命中那个环，
// 见 /tmp/evalorder 的复现）。而在 `bun build --compile` 里它是**打包器的一条边**，
// 目标会被打进产物 —— 不需要任何 asset 嵌入。
//
// 连转发文件也不再有路径问题：转发文件的 `export * from "../../02-..."` 是
// **构建期**被 bun 解析的（源码路径有效），产物里它已经内联，不存在运行时路径。
//
// ## 按求值位置分派
//
//   模块顶层 / async 函数内  →  直接 `(await import(spec))`
//   sync 函数内             →  提升到模块顶层预加载：
//                                const __lazy_x = await import(spec);   // 模块顶层
//                                function f() { return __lazy_x.Foo; }  // 同步使用
//
// 代价是失去「真懒加载」的时机（变成模块加载期就取），但换来的是可编译。
//
// 用法：node to-dynamic.mjs [--dry]
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, resolve, relative, basename, join } from "node:path";
import { parseFile } from "../rename/lib.mjs";
import { ROOT, walk } from "../rename/paths.mjs";

const dry = process.argv.includes("--dry");
const HUB = join(ROOT, "01-核心基础设施/内嵌资源与模块互操作");
const KEEP_REQUIRE = new Set([".node"]); // Node-API 模块不能 import
const idx = new Set(walk(ROOT));

const stats = { direct: 0, hoisted: 0, files: 0, skipped: [] };
const plans = [];

for (const f of walk(ROOT)) {
  const src = readFileSync(f, "utf8");
  let ast;
  try { ast = parseFile(src); } catch { continue; }
  const edits = [];
  const hoists = new Map(); // spec -> 变量名
  const used = new Set();

  const nameFor = (spec) => {
    if (hoists.has(spec)) return hoists.get(spec);
    const stem = basename(spec).replace(/\.[^.]*$/, "").replace(/[^\p{L}\p{N}_$]/gu, "_").replace(/_+/g, "_").replace(/^_+|_+$/g, "");
    let n = `lazy_${stem}`;
    let k = 2;
    while (used.has(n)) n = `lazy_${stem}_${k++}`;
    used.add(n);
    hoists.set(spec, n);
    return n;
  };

  const visit = (node, ctx) => {
    if (!node || typeof node.type !== "string") return;
    let next = ctx;
    if (/Function(Declaration|Expression)$/.test(node.type) || node.type === "ArrowFunctionExpression") {
      next = { inFn: true, async: !!node.async };
    }
    if (node.type === "CallExpression" && node.callee) {
      const c = node.callee;
      const isHub = c.type === "Identifier" && c.name === "importMetaRequire";
      const isMeta = c.type === "MemberExpression" && !c.computed &&
        c.property.name === "require" && c.object.type === "MetaProperty";
      const a = node.arguments?.[0];
      if ((isHub || isMeta) && a?.type === "Literal" && typeof a.value === "string" && a.value.startsWith(".")) {
        const abs = resolve(isHub ? HUB : dirname(f), a.value);
        // `.node` 的检查必须排在 `idx.has` **前面**：`walk()` 只收 `.js`，
        // 非 .js 的目标根本不在 idx 里，放后面会被提前 return 掉、连跳过的机会都没有。
        if (KEEP_REQUIRE.has(abs.slice(abs.lastIndexOf(".")))) {
          stats.skipped.push({ file: relative(ROOT, f), spec: a.value });
          return;
        }
        if (!existsSync(abs)) return;
        if (!ctx.inFn || ctx.async) {
          edits.push({ start: node.start, end: node.end, text: `(await import(${JSON.stringify(a.value)}))` });
          stats.direct++;
        } else {
          // sync 函数内**不能**提升到模块顶层：那会让该模块变成 async（TLA），
          // 实测在环上直接死锁（`bun cli.js --help` 20 秒无输出、无报错）。
          // 保留 require，交给资源嵌入。
          stats.skipped.push({ file: relative(ROOT, f), spec: a.value, why: "sync 函数内，TLA 会死锁" });
        }
      }
    }
    for (const k of Object.keys(node)) {
      if (k === "type" || k === "range" || k === "start" || k === "end") continue;
      const v = node[k];
      if (Array.isArray(v)) { for (const x of v) if (x && typeof x.type === "string") visit(x, next); }
      else if (v && typeof v.type === "string") visit(v, next);
    }
  };
  visit(ast, { inFn: false, async: false });

  if (!edits.length) continue;
  if (hoists.size) {
    let insertAt = 0;
    for (const n of ast.body) if (n.type === "ImportDeclaration") insertAt = n.end;
    const block = "\n" + [...hoists].map(([spec, n]) => `const ${n} = await import(${JSON.stringify(spec)});`).join("\n") + "\n";
    // 插入点也当成一个 edit，和替换一起从后往前应用 —— 否则偏移会错位。
    edits.push({ start: insertAt, end: insertAt, text: block });
  }
  plans.push({ file: relative(ROOT, f), edits });
  stats.files++;
}

console.log(`${dry ? "【预览】" : "【落盘】"}`);
console.log(`  ${stats.direct} 处直接 await import() · ${stats.hoisted} 处提升到模块顶层 · ${stats.files} 个文件`);
if (stats.skipped.length) {
  console.log(`\n  仍保留 require（${stats.skipped.length} 处，需要 asset）：`);
  for (const s of stats.skipped) console.log(`    ${s.file}: ${s.spec}`);
}
if (dry) process.exit(0);

for (const p of plans) {
  const abs = join(ROOT, p.file);
  let src = readFileSync(abs, "utf8");
  for (const e of [...p.edits].sort((a, b) => b.start - a.start || b.end - a.end)) {
    src = src.slice(0, e.start) + e.text + src.slice(e.end);
  }
  writeFileSync(abs, src);
}
console.log(`\n✅ 已改写 ${stats.files} 个文件`);
