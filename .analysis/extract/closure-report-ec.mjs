import { readFileSync } from "node:fs";
import { analyze } from "/Users/game-netease/clean_code/.analysis/rename/lib.mjs";
const DIR = "/Users/game-netease/clean_code/03-入口与运行时/核心应用-Agent循环";
const CH = process.env.CHUNK || "execution-core.js";
// 默认种子：核心应用-Agent循环 从本 chunk import 的全部原名
let seeds = process.argv.slice(2);
if (!seeds.length && process.env.SEEDS_FROM) {
  const src2 = readFileSync(`${DIR}/${process.env.SEEDS_FROM}`, "utf8");
  const { ast: ast2 } = analyze(src2);
  seeds = [];
  for (const n of ast2.body) {
    if (n.type !== "ImportDeclaration" || !n.source || !n.source.value.startsWith(".")) continue;
    if (!n.source.value.endsWith(CH)) continue;
    for (const sp of n.specifiers) seeds.push(sp.imported?.name ?? sp.local.name);
  }
  console.log(`种子来自 ${process.env.SEEDS_FROM} 对 ${CH} 的 import：${seeds.length} 个`);
}
const src = readFileSync(`${DIR}/${CH}`, "utf8");
const { sm, moduleScope } = analyze(src);
const lineOf = (p) => src.slice(0, p).split("\n").length;

const decl = new Map();
for (const v of moduleScope.variables) {
  const d = v.defs[0]; if (!d) continue;
  if (d.type === "ImportBinding") { decl.set(v.name, { kind: "import", spec: d.parent?.source?.value, imported: d.node.imported?.name ?? v.name }); continue; }
  const stmt = d.type === "Variable" ? d.parent : d.node;
  if (!stmt || stmt.start === undefined) continue;
  decl.set(v.name, { kind: d.type, start: stmt.start, end: stmt.end, line: lineOf(stmt.start) });
}
const local = [...decl.keys()].filter((n) => decl.get(n).kind !== "import");
const spans = local.map((n) => ({ n, ...decl.get(n) })).sort((a, b) => a.start - b.start);
const find = (p) => { let lo = 0, hi = spans.length - 1, best = null; while (lo <= hi) { const m = (lo + hi) >> 1; if (spans[m].start <= p) { best = spans[m]; lo = m + 1; } else hi = m - 1; } return best && p <= best.end ? best.n : null; };
const refs = new Map(), rev = new Map();
for (const sc of sm.scopes) for (const r of sc.references) {
  if (!r.resolved || r.resolved.scope !== moduleScope) continue;
  const from = find(r.identifier.start); if (!from) continue;
  const to = r.resolved.name;
  if (decl.get(to)?.kind === "import" || from === to) continue;
  if (!refs.has(from)) refs.set(from, new Set());
  refs.get(from).add(to);
  if (!rev.has(to)) rev.set(to, new Set());
  rev.get(to).add(from);
}
const missing = seeds.filter((s) => !decl.has(s));
if (missing.length) { console.log("!! chunk 里没有这些名字:", missing.join(", ")); }
const seedSet = seeds.filter((s) => decl.has(s));
const closure = new Set(); const q = [...seedSet];
while (q.length) { const v = q.pop(); if (closure.has(v)) continue; closure.add(v); for (const w of refs.get(v) ?? []) if (!closure.has(w)) q.push(w); }

// SCC（整体图）
let idx = 0; const I = new Map(), L = new Map(), on = new Set(), st = [], sccs = [];
const strong = (v) => {
  I.set(v, idx); L.set(v, idx); idx++; st.push(v); on.add(v);
  for (const w of refs.get(v) ?? []) { if (!I.has(w)) { strong(w); L.set(v, Math.min(L.get(v), L.get(w))); } else if (on.has(w)) L.set(v, Math.min(L.get(v), I.get(w))); }
  if (L.get(v) === I.get(v)) { const c = []; let w; do { w = st.pop(); on.delete(w); c.push(w); } while (w !== v); sccs.push(c); }
};
for (const v of refs.keys()) if (!I.has(v)) strong(v);
const SC = new Map(); sccs.forEach((c, i) => c.forEach((v) => SC.set(v, i)));
const bigSCC = sccs.filter((c) => c.length > 1).sort((a, b) => b.length - a.length);

const bytes = [...closure].reduce((a, n) => a + (decl.get(n).end - decl.get(n).start + 1), 0);
const ls = [...closure].map((n) => decl.get(n).line).sort((a, b) => a - b);
console.log(`种子 ${seedSet.length} 个 → 闭包 ${closure.size} 个绑定 / ${(bytes / 1024).toFixed(1)} KB`);
console.log(`闭包跨度：行 ${ls[0]}–${ls[ls.length - 1]}（${ls[ls.length - 1] - ls[0]} 行）`);
const inSCC = [...closure].filter((n) => (SC.has(n) ? sccs[SC.get(n)].length > 1 : false));
console.log(`闭包中处于环里的: ${inSCC.length} 个`);
const comps = new Map();
for (const n of inSCC) { const c = SC.get(n); if (!comps.has(c)) comps.set(c, sccs[c]); }
[...comps.values()].sort((a, b) => b.length - a.length).slice(0, 5).forEach((c) => console.log(`   环 ${c.length} 个: ${c.slice(0, 8).join(", ")}${c.length > 8 ? " …" : ""}`));

// 外部 import
const ext = new Map();
for (const sc of sm.scopes) for (const r of sc.references) {
  if (!r.resolved || r.resolved.scope !== moduleScope) continue;
  const from = find(r.identifier.start);
  if (!from || !closure.has(from)) continue;
  const d = decl.get(r.resolved.name);
  if (d?.kind === "import") ext.set(r.resolved.name, d);
}
console.log(`\n需要的外部 import: ${ext.size} 个绑定 / ${new Set([...ext.values()].map((v) => v.spec)).size} 个模块`);
if (process.env.SHOW_EXT) {
  const specs = [...new Set([...ext.values()].map((v) => v.spec))].sort();
  console.log("外部模块清单:");
  for (const s of specs) console.log("   " + s);
}
// 反向
const back = new Set();
for (const [from, tos] of refs) { if (closure.has(from)) continue; for (const t of tos) if (closure.has(t)) back.add(t); }
const expBlock = src.slice(src.lastIndexOf("export {"));
for (const n of closure) if (new RegExp(`^\\s*${n},?$`, "m").test(expBlock)) back.add(n);
console.log(`chunk 需要回引: ${back.size} 个 ${[...back].sort().join(", ")}`);
console.log(`\n闭包里最大的 12 个：`);
[...closure].filter((n) => decl.get(n).kind !== "import").sort((a, b) => (decl.get(b).end - decl.get(b).start) - (decl.get(a).end - decl.get(a).start)).slice(0, 12)
  .forEach((n) => console.log(`   ${String(Math.round((decl.get(n).end - decl.get(n).start + 1) / 1024)).padStart(4)} KB  ${n}  (行 ${decl.get(n).line})`));
console.log(`\n被闭包外部引用的闭包成员（= chunk 必须回引的）：${back.size}`);
if (process.env.SHOW_SEEDS) console.log("种子:", seedSet.join(", "));
