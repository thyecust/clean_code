// 把懒加载调用改写成静态 import —— 目标是让 `bun build --compile` 能产出可用二进制。
//
// ## 背景
//
// 树里有两族懒加载，**基准不同、别混**：
//   `importMetaRequire("./x")`     基准 = hub 目录（chunk-2c9tjhwd.js 捕获的自己的 require）
//   `import.meta.require("./x")`   基准 = 调用方目录
// 相对路径调用共 455 处，其中 `import.meta.require` 的 375 处全是 `.js`。
//
// `import.meta.require` 不是打包器的一条边，所以那些目标**一个都不会进包**，
// 编译产物启动即 `Cannot find module ... from '/$bunfs/root/<bin>'`。
//
// ## 为什么是 `import * as` 而不是 `import x`
//
// 实测（/tmp/lazy-shape.mjs）：对 .md / .txt / .js，
//   `import.meta.require(p)` 与 `import * as ns from p` 的**键集合完全一致**，
//   `.md`/`.txt` 的 `default` 相等，`.js` 的命名导出是**同一个对象**。
// 用 `import x from p` 则只拿 default —— 对只有命名导出的 .js 会得到 undefined。
//
// ## 附带好处
//
// 改成静态 import 后 .md / .txt / .mjs 由 bun 在**构建期**用对应 loader 内联，
// 于是不需要任何 asset 嵌入机制。只有 `.node` 例外（Node-API 模块不能 import：
// `TypeError: To load Node-API modules, use require() or process.dlopen instead of import.`），
// 那 5 处保留原样。
//
// 用法：node apply.mjs [--dry]
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve, relative, basename, join, sep, extname } from "node:path";
import { parseFile } from "../rename/lib.mjs";
import { ROOT, walk } from "../rename/paths.mjs";

const dry = process.argv.includes("--dry");
const HUB = join(ROOT, "01-核心基础设施/内嵌资源与模块互操作");

// Node-API 模块不能被 import（实测），保留 require。
const KEEP_REQUIRE = new Set([".node"]);

const stats = { files: 0, sites: 0, imports: 0, skipped: [], nonLiteral: [], bare: new Map() };
const plan = []; // { file, src, out }

function collect(ast, onCall) {
  const visit = (n) => {
    if (!n || typeof n.type !== "string") return;
    if (n.type === "CallExpression" && n.callee) {
      const c = n.callee;
      const isHub = c.type === "Identifier" && c.name === "importMetaRequire";
      const isMeta = c.type === "MemberExpression" && !c.computed &&
        c.property.name === "require" && c.object.type === "MetaProperty";
      if ((isHub || isMeta) && n.arguments.length === 1) {
        const a = n.arguments[0];
        if (a.type === "Literal" && typeof a.value === "string") {
          if (a.value.startsWith(".")) onCall({ node: n, spec: a.value, hubBase: isHub });
          // 裸 specifier（`importMetaRequire("stream")` / `("net")` 这类 Node 内置）：
          // 在编译产物里照常可用，**不需要**处理。别把这类误报成「非字面量」。
          else stats.bare.set(a.value, (stats.bare.get(a.value) ?? 0) + 1);
        } else {
          stats.nonLiteral.push(`${relative(ROOT, currentFile)}: ${currentSrc.slice(a.start, a.end).slice(0, 80)}`);
        }
      }
    }
    for (const k of Object.keys(n)) {
      if (k === "type" || k === "range" || k === "start" || k === "end") continue;
      const v = n[k];
      if (Array.isArray(v)) { for (const x of v) if (x && typeof x.type === "string") visit(x); }
      else if (v && typeof v.type === "string") visit(v);
    }
  };
  visit(ast);
}

let currentFile = "", currentSrc = "";
for (const f of walk(ROOT)) {
  currentFile = f;
  const rel = relative(ROOT, f);
  const src = readFileSync(f, "utf8");
  currentSrc = src;
  let ast;
  try { ast = parseFile(src); } catch { continue; }

  const byAbs = new Map(); // abs -> 绑定名
  const used = new Set();
  const edits = []; // { start, end, text }
  let sites = 0;

  collect(ast, ({ node, spec, hubBase }) => {
    const base = hubBase ? HUB : dirname(f);
    const abs = resolve(base, spec);
    const ext = extname(abs);
    if (KEEP_REQUIRE.has(ext)) { stats.skipped.push({ file: rel, spec, why: `${ext} 不能 import` }); return; }

    let name = byAbs.get(abs);
    if (!name) {
      const stem = basename(abs).replace(/\.[^.]*$/, "").replace(/[^A-Za-z0-9_$]/g, "_");
      name = `lazy_${stem}`;
      let k = 2;
      while (used.has(name)) name = `lazy_${stem}_${k++}`;
      used.add(name);
      byAbs.set(abs, name);
    }
    edits.push({ start: node.start, end: node.end, text: name });
    sites++;
  });

  if (!edits.length) continue;

  // import 语句插在最后一个顶层 import 之后；没有 import 就放文件最前。
  let insertAt = 0;
  for (const n of ast.body) if (n.type === "ImportDeclaration") insertAt = n.end;
  const lines = [...byAbs].map(([abs, name]) => {
    let spec = relative(dirname(f), abs).split(sep).join("/");
    if (!spec.startsWith(".")) spec = "./" + spec;
    return `import * as ${name} from ${JSON.stringify(spec)};`;
  });
  const importBlock = (insertAt ? "\n" : "") + lines.join("\n") + "\n";

  // 从后往前改，避免偏移
  let out = src;
  for (const e of [...edits].sort((a, b) => b.start - a.start)) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }
  out = out.slice(0, insertAt) + importBlock + out.slice(insertAt);

  stats.files++;
  stats.sites += sites;
  stats.imports += lines.length;
  plan.push({ file: rel, out });
}

console.log(`${dry ? "【预览】" : "【落盘】"}`);
console.log(`  改写 ${stats.sites} 处调用 · ${stats.imports} 条新 import · ${stats.files} 个文件`);
if (stats.skipped.length) {
  console.log(`\n  保留 require（${stats.skipped.length} 处）：`);
  for (const s of stats.skipped) console.log(`    ${s.file}: ${s.spec}  —— ${s.why}`);
}
if (stats.bare.size) {
  const top = [...stats.bare].sort((a, b) => b[1] - a[1]);
  console.log(`\n  裸 specifier ${stats.bare.size} 种 / ${top.reduce((n, [, c]) => n + c, 0)} 处（Node 内置与包，编译产物里照常可用，不处理）：`);
  console.log(`    ${top.slice(0, 10).map(([s, c]) => `${s}×${c}`).join("  ")}${top.length > 10 ? " …" : ""}`);
}
if (stats.nonLiteral.length) {
  console.log(`\n  ⚠️ 非字面量参数（**静态判不了，必须人工看**，${stats.nonLiteral.length} 处）：`);
  for (const s of stats.nonLiteral) console.log(`    ${s}`);
}

// 抽查前两个文件的实际改写效果
for (const p of plan.slice(0, 2)) {
  const first = p.out.split("\n").findIndex((l) => l.startsWith("import * as lazy_"));
  console.log(`\n  ── ${p.file} ──`);
  console.log(p.out.split("\n").slice(Math.max(0, first), first + 3).map((l) => "  " + l).join("\n"));
}

if (dry) process.exit(stats.nonLiteral.length ? 1 : 0);
for (const p of plan) writeFileSync(join(ROOT, p.file), p.out);
console.log(`\n✅ 已改写 ${plan.length} 个文件`);
process.exit(stats.nonLiteral.length ? 1 : 0);
