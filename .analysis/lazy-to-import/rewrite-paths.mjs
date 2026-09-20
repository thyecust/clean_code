// 解决 asset 的路径问题：编译产物里**所有模块的 dirname 都是 `/$bunfs/root/`**，
// 而调用点的 specifier 是「相对各自源码目录」的，所以带 `../` 的一律失效：
//
//   import.meta.require("../../02-功能模块/工具Bash-Shell/x.js")
//     源码里 → 相对调用方目录 ✓
//     产物里 → /$bunfs/root/../../02-功能模块/... = /02-... （越出 bunfs）✗
//
// 做法：把 specifier 降成 `./<basename>`，并在**调用方目录**放一个转发文件。
//
//   源码侧： ./x.js  →  转发文件 `export * from "<原 specifier>"`  →  真模块（同一实例）
//   产物侧： ./x.js  →  /$bunfs/root/x.js  = gen-assets 嵌入的**真文件副本**
//
// 两侧互不干扰：转发文件只服务于 `bun run`，asset 只服务于编译产物。
// 而且这些目标都**没有静态入边**（apply.mjs 的判据保证），所以副本是唯一实例，
// 不存在模块状态分裂。
//
// 用法：node rewrite-paths.mjs [--dry]
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, resolve, relative, basename, join } from "node:path";
import { parseFile } from "../rename/lib.mjs";
import { ROOT, walk } from "../rename/paths.mjs";

const dry = process.argv.includes("--dry");
const HUB = join(ROOT, "01-核心基础设施/内嵌资源与模块互操作");
const idx = new Set(walk(ROOT));

const plan = []; // { file, abs, edits:[{start,end,text}], forward:{path,body} }
const globalUsed = new Set(); // 转发文件的 basename 要全局唯一（索引按文件名建键）

for (const f of walk(ROOT)) {
  const src = readFileSync(f, "utf8");
  let ast;
  try { ast = parseFile(src); } catch { continue; }
  const edits = [];
  const forwards = new Map(); // basename -> 原 specifier
  const visit = (n) => {
    if (!n || typeof n.type !== "string") return;
    if (n.type === "CallExpression" && n.callee) {
      const c = n.callee;
      const isHub = c.type === "Identifier" && c.name === "importMetaRequire";
      const isMeta = c.type === "MemberExpression" && !c.computed &&
        c.property.name === "require" && c.object.type === "MetaProperty";
      const a = n.arguments?.[0];
      if ((isHub || isMeta) && a?.type === "Literal" && typeof a.value === "string" && a.value.startsWith(".")) {
        const abs = resolve(isHub ? HUB : dirname(f), a.value);
        if (!idx.has(abs)) return;                       // 树外/非模块，不处理
        if (/^\.\/[^/]+$/.test(a.value)) return;         // 已是 ./<basename>，平铺 asset 直接命中
        // 转发文件的命名要满足三处一致：文件名 = specifier 的 basename =
        // asset 落在 /$bunfs/root/ 下的名字。
        //
        // 而且必须**全局唯一**：`_index/file-map.json` 按**文件名**建键，而
        // 同一个真模块会在多个调用方目录各留一个转发文件 —— 只加 `_lazy_` 前缀
        // 不够，它们彼此同名（实测 add-index 报「键 _lazy_X 已存在」）。
        // 所以冲突时挂一个全局序号。
        // 转发文件**刻意与真文件同名**（不加前缀）：gen-assets 会按 basename 把它们
        // 归并成一份，只打包一次；加前缀让名字全局唯一反而会让同一个真模块被打包
        // 好几十份，实测直接把编译撑到 OOM（exit=137）。
        // 同名带来的索引键冲突已经由 move/lib.mjs 的 shouldHaveIndex 解决。
        const base = basename(abs);
        forwards.set(base, a.value);
        edits.push({ start: a.start, end: a.end, text: JSON.stringify("./" + base) });
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
  if (!edits.length) continue;

  // 一个文件一条计划：edits 是整份的，forwards 可能有多个（各指向不同目标）。
  // 别把 edits 塞进每个 forward 的条目里 —— 那样统计和落盘都会重复计数。
  plan.push({
    file: relative(ROOT, f),
    edits,
    forwards: [...forwards].map(([base, spec]) => {
      const p = join(dirname(f), base);
      const body = `export * from ${JSON.stringify(spec)};\n`;
      if (existsSync(p)) {
        // 幂等：上一次跑留下的转发文件内容一致就跳过。否则中途 exit(1) 会让
        // **后面的 specifier 一个都改不到** —— 实测重放时就是这样漏掉
        // 认证-OAuth登录.419zdfz3.js 那处的。
        if (readFileSync(p, "utf8") === body) return { path: p, body, skip: true };
        console.error(`❌ 转发文件会撞已有文件：${relative(ROOT, p)}`);
        process.exit(1);
      }
      return { path: p, body };
    }),
  });
}

const totalEdits = plan.reduce((n, p) => n + p.edits.length, 0);
const totalFwd = plan.reduce((n, p) => n + p.forwards.length, 0);
console.log(`${dry ? "【预览】" : "【落盘】"}`);
console.log(`  改写 ${totalEdits} 处 specifier，新增 ${totalFwd} 个转发文件\n`);
const byDir = new Map();
for (const p of plan) {
  const d = dirname(p.file);
  if (!byDir.has(d)) byDir.set(d, []);
  for (const fw of p.forwards) byDir.get(d).push(basename(fw.path));
}
for (const [d, bs] of [...byDir].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`  ${d}/`);
  for (const b of bs) console.log(`      + ${b}`);
}

if (dry) process.exit(0);

for (const p of plan) {
  const abs = join(ROOT, p.file);
  let src = readFileSync(abs, "utf8");
  for (const e of [...p.edits].sort((a, b) => b.start - a.start)) {
    src = src.slice(0, e.start) + e.text + src.slice(e.end);
  }
  writeFileSync(abs, src);
  for (const fw of p.forwards) if (!fw.skip) writeFileSync(fw.path, fw.body);
}
console.log(`\n✅ 改写 ${totalEdits} 处，新增 ${totalFwd} 个转发文件`);
console.log(`   转发文件是新增的 .js，记得补索引：bun .analysis/move/add-index.mjs <路径>…`);
