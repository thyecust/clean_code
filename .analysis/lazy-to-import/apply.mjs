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

const stats = { files: 0, sites: 0, imports: 0, skipped: [], nonLiteral: [], bare: new Map(), cyclic: [] };
const plan = []; // { file, src, out }

function collect(ast, onCall, quiet = false) {
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
          else if (!quiet) stats.bare.set(a.value, (stats.bare.get(a.value) ?? 0) + 1);
        } else {
          if (!quiet) stats.nonLiteral.push(`${relative(ROOT, currentFile)}: ${currentSrc.slice(a.start, a.end).slice(0, 80)}`);
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

// ── 预扫：哪些懒加载边一旦变成静态边就会成环 ────────────────────────────────
//
// 成环的边在上游是**故意**用懒加载打破的（`to` 本来就间接依赖 `from`）。
// 静态化会改变求值顺序：某个模块可能在对方还没求值完时就去顶层读它的导出。
// 实测症状是一个 `var` 导出读成 undefined（`Object.entries(undefined)`）。
// 这类边保留 `import.meta.require`，交给构建期做资源嵌入。
//
// 判据：在**只含现有静态边**的图上，若 `to` 能到达 `from`，则 from→to 成环。
const _files = walk(ROOT);
const _idx = new Map(_files.map((f, i) => [f, i]));
const _orig = new Map();
const _lazy = [];
for (const f of _files) {
  currentFile = f;
  let ast;
  try { ast = parseFile(readFileSync(f, "utf8")); } catch { _orig.set(f, []); continue; }
  const outs = new Set();
  for (const n of ast.body) {
    if (n.type !== "ImportDeclaration" || !n.source || !n.source.value.startsWith(".")) continue;
    const a = resolve(dirname(f), n.source.value);
    if (_idx.has(a)) outs.add(_idx.get(a));
  }
  _orig.set(f, [...outs]);
  collect(ast, ({ spec, hubBase }) => _lazy.push({ file: f, spec, hubBase }), true);
}
const _reach = (start) => {
  const seen = new Set([start]), st = [start];
  while (st.length) {
    const n = st.pop();
    for (const m of _orig.get(_files[n]) ?? []) if (!seen.has(m)) { seen.add(m); st.push(m); }
  }
  return seen;
};
// 每个文件在原图里的静态入度 —— 决定成环边能不能改用 asset 兜底。
// from 是否**已经**静态 import 了 to。这种情况新增 import 不改变图（边已存在），
// 环不是新形成的，可以安全静态化。实测 5 条「目标有静态入边」的成环边里，
// 有 3 条的环路径长度是 1 —— 两边本来就互相静态 import，加不加这条边图都一样。
const _already = new Map();
for (const [f, outs] of _orig) _already.set(f, new Set(outs.map((j) => _files[j])));

const _inDeg = new Map();
for (const [, outs] of _orig) for (const j of outs) _inDeg.set(j, (_inDeg.get(j) ?? 0) + 1);

const _cyclic = new Set();
for (const e of _lazy) {
  const abs = resolve(e.hubBase ? HUB : dirname(e.file), e.spec);
  if (!_idx.has(abs)) continue;
  if (_reach(_idx.get(abs)).has(_idx.get(e.file))) _cyclic.add(`${e.file}|${e.spec}|${e.hubBase}`);
}

// ── 「必须保留 require」的**目标**集合 ──────────────────────────────────────
//
// 判据必须是**目标级**而不是边级。同一个目标可能同时被两类边指着：一条不成环
// （会被静态化）一条成环（要保留 require）。若按边级判断，那个目标就会既被静态
// import 又被 asset 嵌入 —— bun 会把该路径当 asset 处理，静态 import 那侧就找不到
// 导出了。实测：`WorkflowTool.b1s7beta.js` 明确有 `export { WorkflowTool }`（2991 行），
// 打包却报 `Import "WorkflowTool" will always be undefined`。
//
// 所以：一条成环边就把该目标整体划入「保留 require」，指向它的**所有**边都不动。
const _keepTargets = new Set();
for (const e of _lazy) {
  const abs = resolve(e.hubBase ? HUB : dirname(e.file), e.spec);
  if (!_idx.has(abs)) continue;
  if (!_cyclic.has(`${e.file}|${e.spec}|${e.hubBase}`)) continue;   // 不成环 → 可静态化
  if (_already.get(e.file)?.has(abs)) continue;                     // 边已存在 → 不改图 → 可静态化
  if ((_inDeg.get(_idx.get(abs)) ?? 0) > 0) continue;               // 已被内联 → 不能作 asset
  _keepTargets.add(abs);
}

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
    // 成环边：目标**无静态入边**时保留 require（它没被内联，可以安全作为
    // `with { type: "file" }` 的 asset 嵌进产物，require 到的是唯一实例）。
    // 目标**有静态入边**时目标已被内联，再嵌 asset 会让 bun 把该路径当 asset 处理、
    // 同一路径的静态 import 就找不到导出了（实测：MonitorTool.js 的 wsEgressDenyReason，
    // 那个导出其实就在 657 行）—— 所以这种照常静态化，环的风险另测。
    const _abs = resolve(hubBase ? HUB : dirname(f), spec);
    if (_keepTargets.has(_abs)) {
      stats.cyclic.push({ file: rel, spec });
      return;
    }

    let name = byAbs.get(abs);
    if (!name) {
      // 保留 Unicode 字母：树里很多文件名是中文（`核心工具-常量与消息.602x2b1z.js`），
      // 全替换成 `_` 会得到 `lazy____________602x2b1z` 这种零辨识度的名字。
      // JS 标识符本来就允许中文。顺带把连续下划线压成一个。
      const stem = basename(abs)
        .replace(/\.[^.]*$/, "")
        .replace(/[^\p{L}\p{N}_$]/gu, "_")
        .replace(/_+/g, "_")
        .replace(/^_+|_+$/g, "");
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

  // import 插入也当成一个 edit，和替换**一起**从后往前应用。
  // 不能先替换完再用原始的 insertAt 插入 —— 替换改变了字符串长度，偏移会错位。
  // 第一次跑就是这么错的：import 被插进了函数体，整棵树语法错误起不来
  // （`Expected ";" but found "lazy_mcpClientModule_4cyej0np"`）。
  edits.push({ start: insertAt, end: insertAt, text: importBlock });
  let out = src;
  for (const e of [...edits].sort((a, b) => b.start - a.start || b.end - a.end)) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }

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
if (stats.cyclic.length) {
  console.log(`\n  保留 require · 成环（静态化会改变求值顺序，${stats.cyclic.length} 处）：`);
  const g = new Map();
  for (const c of stats.cyclic) { if (!g.has(c.file)) g.set(c.file, []); g.get(c.file).push(c.spec); }
  for (const [f, ss] of g) console.log(`    ${f}  ← ${ss.length} 条`);
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
