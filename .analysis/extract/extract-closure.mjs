import { readFileSync, writeFileSync } from "node:fs";
import { analyze } from "/Users/game-netease/clean_code/.analysis/rename/lib.mjs";
const D = "/Users/game-netease/clean_code/03-入口与运行时/核心应用-Agent循环/";
const CH = "核心应用-Agent循环.wmzgeczq.js";
const OUT = process.env.OUT || "execution-core.js";
const SEEDS = (process.env.SEEDS || "dge").split(",");
const APPLY = process.argv.includes("--apply");
const DUMP = process.argv.includes("--dump");
const GLOBALS = new Set(["Set","Map","Error","String","Promise","Array","Object","Math","Boolean","RegExp","Date","Buffer","Number","JSON","Symbol","WeakMap","Intl","Uint8Array","Uint16Array","Uint32Array","Float64Array","DataView","ArrayBuffer","encodeURIComponent","decodeURIComponent","parseInt","parseFloat","isNaN","console","process","globalThis","setTimeout","setInterval","clearInterval","clearTimeout","setImmediate","structuredClone","URL","URLSearchParams","AbortController","AbortSignal","TextEncoder","TextDecoder","performance","queueMicrotask","MutationObserver","jQuery","localStorage","navigator","document","window","self","global","escape","unescape","Worker","QuotaExceededError","AsyncIterator","__values","BigInt","NaN","Infinity","DOMException","TypeError","RangeError","SyntaxError","ReferenceError","AggregateError","WeakRef","btoa","atob","Request","Response","Headers","FormData","fetch","Blob","File","crypto","TextDecoderStream","ReadableStream","WritableStream","TransformStream"]);

const src = readFileSync(D + CH, "utf8");
const { sm, moduleScope } = analyze(src);
const defs = new Map(), imports = new Map();
const declBound = new Map();   // VariableDeclarator 节点 -> 它绑定的名字数组（解构时不止一个）
for (const v of moduleScope.variables) {
  const d = v.defs[0]; if (!d) continue;
  if (d.type === "ImportBinding") { imports.set(v.name, { spec: d.parent?.source?.value, imported: d.node.imported?.name ?? v.name }); continue; }
  const stmt = d.type === "Variable" ? d.parent : d.node;
  if (!stmt || stmt.start === undefined) continue;
  defs.set(v.name, { stmt, declarator: d.type === "Variable" ? d.node : null, start: stmt.start, end: stmt.end });
  if (d.type === "Variable" && d.node) {
    if (!declBound.has(d.node)) declBound.set(d.node, []);
    declBound.get(d.node).push(v.name);
  }
}
const origFree = new Set([...sm.globalScope.through].map((r) => r.identifier.name));

const spans = [...defs].map(([n, d]) => ({ n, ...d })).sort((a, b) => a.start - b.start);
const find = (p) => { let lo = 0, hi = spans.length - 1, best = null; while (lo <= hi) { const m = (lo + hi) >> 1; if (spans[m].start <= p) { best = spans[m]; lo = m + 1; } else hi = m - 1; } return best && p <= best.end ? best.n : null; };
const refs = new Map();
for (const sc of sm.scopes) for (const r of sc.references) {
  if (!r.resolved || r.resolved.scope !== moduleScope) continue;
  const from = find(r.identifier.start); if (!from) continue;
  const to = r.resolved.name;
  if (imports.has(to) || from === to) continue;
  if (!refs.has(from)) refs.set(from, new Set());
  refs.get(from).add(to);
}
const missing = SEEDS.filter((s) => !defs.has(s));
if (missing.length) console.log("!! 种子不在 chunk 里:", missing.join(", "));
const closure = new Set();
// 扩张闭包：加名字 → 加其依赖 → 解构声明符整条搬（它的所有绑定名一起进来），循环到稳定
const expand = (names) => {
  const q = [...names];
  while (q.length) { const v = q.pop(); if (closure.has(v) || !defs.has(v)) continue; closure.add(v); for (const w of refs.get(v) ?? []) if (!closure.has(w)) q.push(w); }
  for (let r = 0; r < 30; r++) {
    const grow = [];
    for (const [decl, ns] of declBound) {
      if (!decl.id || decl.id.type === "Identifier") continue;
      if (ns.some((n) => closure.has(n))) grow.push(...ns);
    }
    const q2 = grow.filter((n) => defs.has(n) && !closure.has(n));
    if (!q2.length) break;
    while (q2.length) { const v = q2.pop(); if (closure.has(v)) continue; closure.add(v); for (const w of refs.get(v) ?? []) if (!closure.has(w)) q2.push(w); }
  }
};
expand(SEEDS.filter((s) => defs.has(s)));

// 不动点：如果搬走的代码里出现「chunk 定义但不在闭包内」的名字，把它补进闭包再重算
for (let iter = 0; iter < 8; iter++) {
  const joined = [...closure].map((n) => src.slice(defs.get(n).start, defs.get(n).end + 1)).join("\n;\n");
  let free;
  try { free = [...analyze(joined + "\n").sm.globalScope.through].map((r) => r.identifier.name); } catch { break; }
  const need = [...new Set(free)].filter((n) => defs.has(n) && !closure.has(n));
  if (!need.length) break;
  console.log(`  [不动点 ${iter + 1}] 补进闭包 ${need.length} 个: ${need.slice(0, 8).join(", ")}`);
  expand(need);
}

// 按语句归并；多声明符按声明符拆分
const byStmt = new Map();
for (const n of closure) { const d = defs.get(n); if (!byStmt.has(d.start)) byStmt.set(d.start, { stmt: d.stmt, names: [] }); byStmt.get(d.start).names.push(n); }
const moveTexts = [], chunkEdits = [];
let split = 0;
for (const { stmt, names } of [...byStmt.values()].sort((a, b) => a.stmt.start - b.stmt.start)) {
  const all = stmt.declarations ?? [];
  const inSet = new Set(names);
  const binds = (d) => declBound.get(d) ?? (d.id && d.id.type === "Identifier" ? [d.id.name] : []);
  const isIn = (d) => { const b = binds(d); return b.length > 0 && b.every((n) => inSet.has(n)); };
  // 判据按「声明符」而不是「绑定名」——解构声明符绑多个名字但只是一个声明符
  if (all.length <= 1 || all.every(isIn)) {
    moveTexts.push(src.slice(stmt.start, stmt.end + 1));
    chunkEdits.push({ start: stmt.start, end: stmt.end, text: "" });
    continue;
  }
  for (const d of all) { const b = binds(d); const some = b.some((n) => inSet.has(n));
    if (some && !isIn(d)) { console.log("!! 声明符被劈开（解构），放弃:", b.join(",")); process.exit(1); } }
  const kept = all.filter((d) => !isIn(d));
  if (!kept.length) { console.log("!! kept 为空，放弃"); process.exit(1); }
  split++;
  // 这个解析器给的声明符范围含尾部分隔符（"," / ";"），必须剥掉
  const text = (n) => src.slice(n.start, n.end + 1).replace(/[\s,;]+$/, "");
  moveTexts.push(`${stmt.kind} ${all.filter(isIn).map(text).join(", ")};`);
  chunkEdits.push({ start: stmt.start, end: stmt.end, text: `${stmt.kind} ${kept.map(text).join(", ")};` });
}

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
  if (from && closure.has(from)) continue;      // 引用方跟着搬走了，不需要回引
  back.add(to);
}
const expBlock = src.slice(src.lastIndexOf("export {"));
for (const n of closure) if (new RegExp(`^\\s*${n},?$`, "m").test(expBlock)) back.add(n);

const bySpec = new Map();
for (const [ln, im] of ext) { if (!im) continue; if (!bySpec.has(im.spec)) bySpec.set(im.spec, []); bySpec.get(im.spec).push(im.imported === ln ? ln : `${im.imported} as ${ln}`); }
const importLines = [...bySpec].map(([spec, names]) => `import { ${names.sort().join(", ")} } from "${spec}";`);
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

let chunkText = src;
for (const e of [...chunkEdits].sort((a, b) => b.start - a.start)) chunkText = chunkText.slice(0, e.start) + e.text + chunkText.slice(e.end + 1);
const at = chunkEdits.reduce((m, e) => Math.min(m, e.start), Infinity);
const importStmt = `\nimport { ${backSorted.join(", ")} } from "./${OUT}";\n`;
chunkText = chunkText.slice(0, at) + importStmt + chunkText.slice(at);

const freeOf = (t) => { try { return [...analyze(t + "\n").sm.globalScope.through].map((r) => r.identifier.name); } catch (e) { console.log("  !! 解析失败:", e.message.split("\n")[0].slice(0, 80)); return null; } };
console.log(`种子 ${SEEDS.length} → 闭包 ${closure.size} 个绑定 / ${(moveTexts.join("").length / 1048576).toFixed(2)} MB`);
console.log(`语句 ${byStmt.size} 条（拆分 ${split} 条）· 外部 import ${ext.size} · 回引 ${back.size}`);
console.log(`新文件 ${(newFile.length / 1024 / 1024).toFixed(2)} MB / ${newFile.split("\n").length} 行；chunk ${(src.length / 1024 / 1024).toFixed(2)} → ${(chunkText.length / 1024 / 1024).toFixed(2)} MB / ${chunkText.split("\n").length} 行`);

if (DUMP) { writeFileSync("/tmp/new-piece.js", newFile); writeFileSync("/tmp/new-chunk.js", chunkText); console.log("dry → /tmp/new-piece.js, /tmp/new-chunk.js"); }
let fatal = false;
for (const [tag, text] of [[OUT, newFile], ["余下 chunk", chunkText]]) {
  const free = freeOf(text);
  if (free === null) { fatal = true; continue; }
  console.log(`解析 ${tag}: 通过`);
  const bad = free.filter((n) => !GLOBALS.has(n) && !origFree.has(n));
  if (bad.length) { console.log(`  !! ${tag} 新增自由标识符 ${bad.length} 个: ${bad.slice(0, 15).join(", ")}`); fatal = true; }
  else console.log(`   无新增自由标识符 ✓`);
}
if (fatal) { console.log("\n**自检未通过，不落盘**"); process.exit(1); }
if (APPLY) { writeFileSync(D + OUT, newFile); writeFileSync(D + CH, chunkText); console.log("已落盘"); }
