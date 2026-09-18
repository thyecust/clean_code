import { readFileSync, writeFileSync } from "node:fs";
import { analyze } from "/Users/game-netease/clean_code/.analysis/rename/lib.mjs";
const D = "/Users/game-netease/clean_code/03-入口与运行时/核心应用-Agent循环/";
const CH = "核心应用-Agent循环.wmzgeczq.js";
const SRC = process.env.SRC || CH;
const OUT = process.env.OUT || "execution-core.js";
const SEEDS = (process.env.SEEDS || "dge").split(",");
const APPLY = process.argv.includes("--apply");
const DUMP = process.argv.includes("--dump");
const GLOBALS = new Set(["Set","Map","Error","String","Promise","Array","Object","Math","Boolean","RegExp","Date","Buffer","Number","JSON","Symbol","WeakMap","Intl","Uint8Array","Uint16Array","Uint32Array","Float64Array","DataView","ArrayBuffer","encodeURIComponent","decodeURIComponent","parseInt","parseFloat","isNaN","console","process","globalThis","setTimeout","setInterval","clearInterval","clearTimeout","setImmediate","structuredClone","URL","URLSearchParams","AbortController","AbortSignal","TextEncoder","TextDecoder","performance","queueMicrotask","MutationObserver","jQuery","localStorage","navigator","document","window","self","global","escape","unescape","Worker","QuotaExceededError","AsyncIterator","__values","BigInt","NaN","Infinity","DOMException","TypeError","RangeError","SyntaxError","ReferenceError","AggregateError","WeakRef","btoa","atob","Request","Response","Headers","FormData","fetch","Blob","File","crypto","TextDecoderStream","ReadableStream","WritableStream","TransformStream"]);

const src = readFileSync(D + SRC, "utf8");
const { sm, moduleScope } = analyze(src);
const defs = new Map(), imports = new Map(), declBound = new Map();
for (const v of moduleScope.variables) {
  const d = v.defs[0]; if (!d) continue;
  if (d.type === "ImportBinding") {
    const k = d.node?.type === "ImportNamespaceSpecifier" ? "ns" : d.node?.type === "ImportDefaultSpecifier" ? "def" : "named";
    imports.set(v.name, { kind: k, spec: d.parent?.source?.value, imported: d.node.imported?.name ?? v.name });
    continue;
  }
  const stmt = d.type === "Variable" ? d.parent : d.node;
  if (!stmt || stmt.start === undefined) continue;
  defs.set(v.name, { stmt, start: stmt.start, end: stmt.end });
  if (d.type === "Variable" && d.node) { if (!declBound.has(d.node)) declBound.set(d.node, []); declBound.get(d.node).push(v.name); }
}
const origFree = new Set([...sm.globalScope.through].map((r) => r.identifier.name));
const spans = [...defs].map(([n, d]) => ({ n, ...d })).sort((a, b) => a.start - b.start);
const find = (p) => { let lo = 0, hi = spans.length - 1, best = null; while (lo <= hi) { const m = (lo + hi) >> 1; if (spans[m].start <= p) { best = spans[m]; lo = m + 1; } else hi = m - 1; } return best && p <= best.end ? best.n : null; };
const writes = new Map();   // 模块级绑定 -> 它被赋值的地方（不含自己的声明）
const refs = new Map();
for (const sc of sm.scopes) for (const r of sc.references) {
  if (!r.resolved || r.resolved.scope !== moduleScope) continue;
  const from = find(r.identifier.start); if (!from) continue;
  const to = r.resolved.name;
  if (imports.has(to) || from === to) continue;
  if (!refs.has(from)) refs.set(from, new Set());
  refs.get(from).add(to);
  if (r.isWrite && r.isWrite()) {
    if (!writes.has(to)) writes.set(to, new Set());
    writes.get(to).add(from);          // from = 赋值所在的顶层声明（可能是 null）
  }
}
const freeOf = (t) => { try { return [...analyze(t + "\n").sm.globalScope.through].map((r) => r.identifier.name); } catch { return null; } };

const closure = new Set();
// 被源文件写、闭包内只读的模块级可变槽：留在源文件，新文件 import 读（ESM live binding 是实时的）
const evicted = new Set();
const expand = (names) => {
  const q = [...names];
  while (q.length) { const v = q.pop(); if (closure.has(v) || evicted.has(v) || !defs.has(v)) continue; closure.add(v); for (const w of refs.get(v) ?? []) if (!closure.has(w) && !evicted.has(w)) q.push(w); }
  for (let r = 0; r < 30; r++) {
    const grow = [];
    for (const [decl, ns] of declBound) { if (!decl.id || decl.id.type === "Identifier") continue; if (ns.some((n) => closure.has(n))) grow.push(...ns); }
    const q2 = grow.filter((n) => defs.has(n) && !closure.has(n) && !evicted.has(n));
    if (!q2.length) break;
    while (q2.length) { const v = q2.pop(); if (closure.has(v) || evicted.has(v)) continue; closure.add(v); for (const w of refs.get(v) ?? []) if (!closure.has(w) && !evicted.has(w)) q2.push(w); }
  }
};
expand(SEEDS.filter((s) => defs.has(s)));

// 按语句归并；多声明符按声明符拆分（声明符范围含尾部分隔符，剥掉）
const build = () => {
  const byStmt = new Map();
  for (const n of closure) { const d = defs.get(n); if (!byStmt.has(d.start)) byStmt.set(d.start, { stmt: d.stmt, names: [] }); byStmt.get(d.start).names.push(n); }
  const moveTexts = [], chunkEdits = []; let split = 0;
  for (const { stmt, names } of [...byStmt.values()].sort((a, b) => a.stmt.start - b.stmt.start)) {
    const all = stmt.declarations ?? [];
    const inSet = new Set(names);
    const binds = (d) => declBound.get(d) ?? (d.id && d.id.type === "Identifier" ? [d.id.name] : []);
    const isIn = (d) => { const b = binds(d); return b.length > 0 && b.every((n) => inSet.has(n)); };
    const text = (n) => src.slice(n.start, n.end + 1).replace(/[\s,;]+$/, "");
    if (all.length <= 1 || all.every(isIn)) { moveTexts.push(src.slice(stmt.start, stmt.end + 1)); chunkEdits.push({ start: stmt.start, end: stmt.end, text: "" }); continue; }
    for (const d of all) { const b = binds(d); if (b.some((n) => inSet.has(n)) && !isIn(d)) { console.log("!! 解构声明符被劈开:", b.join(",")); process.exit(1); } }
    const kept = all.filter((d) => !isIn(d));
    if (!kept.length) { console.log("!! kept 为空"); process.exit(1); }
    split++;
    moveTexts.push(`${stmt.kind} ${all.filter(isIn).map(text).join(", ")};`);
    chunkEdits.push({ start: stmt.start, end: stmt.end, text: `${stmt.kind} ${kept.map(text).join(", ")};` });
  }
  return { moveTexts, chunkEdits, split, stmts: byStmt.size };
};

// 模块级可变槽的方向判据。
// 源文件写它、闭包内只读 -> **剔除**它（留在源文件，新文件 import 读，ESM live binding 是实时的）。
// 两边都写 -> 真正的双向共享可变状态，静态拆不开，直接失败。
// 注意：把 setter 拉进闭包是**反的**，setter 往往是主干函数，一拉就雪崩（实测 840 -> 10204）。
const evictWritten = () => {
  const add = [];
  for (const n of closure) {
    if (evicted.has(n)) continue;
    const ws = writes.get(n);
    if (!ws) continue;
    const outW = [...ws].filter((f) => f !== null && !closure.has(f));
    if (!outW.length) continue;
    const inW = [...ws].filter((f) => closure.has(f));
    if (inW.length) { console.log(`!! 可变槽 ${n} 两边都写：闭包内 ${inW.join(",")} / 源文件 ${outW.join(",")}`); process.exit(1); }
    add.push(n);
  }
  return add;
};
// 剔除后闭包要重算（只服务被剔除者的成员应随之退出）
const rebuild = () => {
  closure.clear();
  for (const n of evicted) closure.delete(n);
  expand(SEEDS.filter((s) => defs.has(s)));
  for (const n of evicted) closure.delete(n);
};

// 不动点：对**实际搬走的文本**找自由名（不是整条语句 —— 那会漏掉留在 chunk 的兄弟声明符）
const forceExt = new Set();   // 不动点直接看到、但「按引用方归属」没收到的 import
let built = build();
for (let iter = 0; iter < 24; iter++) {
  const free = freeOf(built.moveTexts.join("\n;\n"));
  if (free === null) { console.log("!! 搬移文本解析失败"); process.exit(1); }
  const need = [...new Set(free)].filter((n) => defs.has(n) && !closure.has(n) && !evicted.has(n));
  const needExt = [...new Set(free)].filter((n) => imports.has(n) && !forceExt.has(n));
  if (needExt.length) { console.log(`  [不动点 ${iter + 1}] 补进 import ${needExt.length} 个: ${needExt.slice(0, 8).join(", ")}`); needExt.forEach((n) => forceExt.add(n)); }
  const ev = evictWritten();
  if (ev.length) { console.log(`  [不动点 ${iter + 1}] 剔除被源文件写的可变槽 ${ev.length} 个: ${ev.slice(0, 8).join(", ")}`); ev.forEach((n) => evicted.add(n)); rebuild(); built = build(); continue; }
  if (!need.length) break;
  console.log(`  [不动点 ${iter + 1}] 补进闭包 ${need.length} 个: ${need.slice(0, 8).join(", ")}`);
  expand(need);
  built = build();
}
const { moveTexts, chunkEdits, split, stmts } = built;

const ext = new Map();
for (const sc of sm.scopes) for (const r of sc.references) {
  if (!r.resolved || r.resolved.scope !== moduleScope) continue;
  const from = find(r.identifier.start);
  if (!from || !closure.has(from)) continue;
  const im = imports.get(r.resolved.name);
  if (im) ext.set(r.resolved.name, im);
}
const back = new Set();
for (const sc of sm.scopes) for (const r of sc.references) {
  if (!r.resolved || r.resolved.scope !== moduleScope) continue;
  const to = r.resolved.name;
  if (!closure.has(to) || imports.has(to)) continue;
  const from = find(r.identifier.start);
  if (from && closure.has(from)) continue;
  back.add(to);
}
const expBlock = src.slice(src.lastIndexOf("export {"));
for (const n of closure) if (new RegExp(`^\\s*${n},?$`, "m").test(expBlock)) back.add(n);

for (const n of forceExt) ext.set(n, imports.get(n));
const bySpec = new Map(), nsLines = [], defLines = [];
for (const [ln, im] of ext) {
  if (!im) continue;
  if (im.kind === "ns") { nsLines.push(`import * as ${ln} from "${im.spec}";`); continue; }
  if (im.kind === "def") { defLines.push(`import ${ln} from "${im.spec}";`); continue; }
  if (!bySpec.has(im.spec)) bySpec.set(im.spec, []);
  bySpec.get(im.spec).push(im.imported === ln ? ln : `${im.imported} as ${ln}`);
}
const importLines = [...nsLines.sort(), ...defLines.sort(), ...[...bySpec].map(([spec, names]) => `import { ${names.sort().join(", ")} } from "${spec}";`)];
// 被剔除的可变槽：新文件从源文件 import（live binding，源文件那边的赋值会实时反映过来）
if (evicted.size) importLines.push(`import { ${[...evicted].sort().join(", ")} } from "./${SRC}";`);
const header = [
  "// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.",
  "// By using Claude Code, you agree that all code acceptance or rejection decisions you make,",
  "// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,",
  "// and may be used to improve Anthropic's products, including training models.",
  "// You are responsible for reviewing any code suggestions before use.",
  "",
  "// (c) Anthropic PBC. All rights reserved. Use is subject to Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.",
  "",
  "// Version: 2.1.263",
];
const backSorted = [...back].sort();
const newFile = [...header, ...importLines, "", ...moveTexts, "", `export { ${backSorted.join(", ")} };`, ""].join("\n\n");

const esc = (n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
let chunkText = src;   // 源文件（去掉搬走的部分后）
for (const e of [...chunkEdits].sort((a, b) => b.start - a.start)) chunkText = chunkText.slice(0, e.start) + e.text + chunkText.slice(e.end + 1);
// 被剔除的可变槽留在源文件里，源文件必须 export 它们（新文件 import 读 live binding）
if (evicted.size) {
  const i = chunkText.lastIndexOf("export {");
  const j = chunkText.indexOf("}", i);
  const cur = chunkText.slice(i, j);
  const miss = [...evicted].filter((n) => !new RegExp(`(^|[\\s,{])${esc(n)}([\\s,}]|$)`).test(cur));
  if (miss.length) {
    console.log(`  源文件 export 块补 ${miss.length} 个被剔除的可变槽: ${miss.join(", ")}`);
    chunkText = chunkText.slice(0, j) + (cur.trimEnd().endsWith("{") ? " " : ", ") + miss.join(", ") + chunkText.slice(j);
  }
}
const at = chunkEdits.reduce((m, e) => Math.min(m, e.start), Infinity);
chunkText = chunkText.slice(0, at) + `\nimport { ${backSorted.join(", ")} } from "./${OUT}";\n` + chunkText.slice(at);

console.log(`\n闭包 ${closure.size} 个绑定 → ${moveTexts.join("").length / 1048576 >= 1 ? (moveTexts.join("").length / 1048576).toFixed(2) + " MB" : (moveTexts.join("").length / 1024).toFixed(0) + " KB"} / ${stmts} 条语句（拆分 ${split}）`);
console.log(`外部 import ${ext.size} · 回引 ${back.size} · 新文件 ${(newFile.length / 1048576).toFixed(2)} MB · chunk ${(chunkText.length / 1048576).toFixed(2)} MB`);
if (DUMP) { writeFileSync("/tmp/new-piece.js", newFile); writeFileSync("/tmp/new-src.js", chunkText); console.log("dry → /tmp/new-piece.js, /tmp/new-src.js"); }
let fatal = false;
// 专查：chunk 里不许出现「给 import 赋值」（ESM 硬错误，运行到才炸）
{
  const assigned = new Set();
  const { sm: sm2, moduleScope: ms2 } = analyze(chunkText);
  const sp = [], seen2 = new Set();
  for (const v of ms2.variables) { const d = v.defs[0]; if (!d) continue; if (d.type === "ImportBinding") { seen2.add(v.name); continue; } const st = d.type === "Variable" ? d.parent : d.node; if (st && st.start !== undefined) sp.push({ n: v.name, start: st.start, end: st.end }); }
  for (const sc of sm2.scopes) for (const r of sc.references) if (r.isWrite && r.isWrite() && r.resolved && r.resolved.scope === ms2) assigned.add(r.resolved.name);
  const bad = [...assigned].filter((n) => seen2.has(n));
  if (bad.length) { console.log(`  !! chunk 里有 ${bad.length} 个「给 import 赋值」: ${bad.slice(0, 8).join(", ")}`); fatal = true; }
  else console.log(`  chunk 没有「给 import 赋值」✓`);
}
for (const [tag, text] of [[OUT, newFile], ["余下 chunk", chunkText]]) {
  const free = freeOf(text);
  if (free === null) { console.log(`解析 ${tag}: **失败**`); fatal = true; continue; }
  const bad = [...new Set(free)].filter((n) => !GLOBALS.has(n) && !origFree.has(n));
  if (bad.length) { console.log(`  !! ${tag} 新增自由标识符 ${bad.length} 个: ${bad.slice(0, 12).join(", ")}`); fatal = true; }
  else console.log(`解析 ${tag}: 通过，无新增自由标识符 ✓`);
}
// 专查：新文件顶层急切读被剔除的可变槽 —— 新文件先于源文件求值，那时 var 还是 undefined
if (evicted.size) {
  try {
    const joined = moveTexts.join("\n;\n") + "\n";
    const eager = new Set();
    const { sm: smJ } = analyze(joined);
    for (const sc of smJ.scopes) for (const r of sc.references) {
      if (!r.resolved || !evicted.has(r.resolved.name)) continue;
      if (r.from.type === "module" || r.from.type === "global") eager.add(r.resolved.name);
    }
    if (eager.size) { console.log(`  !! 新文件顶层急切读被剔除的可变槽 ${eager.size} 个: ${[...eager].slice(0, 10).join(", ")}`); fatal = true; }
    else console.log(`  新文件顶层没有急切读被剔除的 ${evicted.size} 个可变槽 ✓`);
  } catch (e) { console.log("  !! 急切性自检失败:", e.message.split("\n")[0].slice(0, 80)); fatal = true; }
}
if (fatal) { console.log("\n**自检未通过，不落盘**"); process.exit(1); }
if (APPLY) { writeFileSync(D + OUT, newFile); writeFileSync(D + SRC, chunkText); console.log("已落盘"); }
