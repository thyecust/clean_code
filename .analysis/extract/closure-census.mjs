// 普查：两个巨模块里**每个顶层定义**的「个人闭包」有多大。
//
// 目的：判断「自下而上提取」这条路现实与否。
// `shell-utils.js` 能成功，是因为它的闭包天然就小（只碰叶子模块）。如果这类
// 「闭包小的定义」有几百个，那就值得一个个提；如果只有个位数，说明整个模块
// 是一块铁板，这条路也不通。
//
// 算法：Tarjan 求 SCC 缩点 → 在 DAG 上按拓扑序记忆化算可达绑定数。
// 直接对 10k 个节点各跑一次 DFS 是 O(N·(N+E))，跑不动。
import { readFileSync } from "node:fs";
import { analyze } from "/Users/game-netease/clean_code/.analysis/rename/lib.mjs";

const DIR = "/Users/game-netease/clean_code/03-入口与运行时/核心应用-Agent循环";
const CHUNKS = ["execution-core.js", "核心应用-Agent循环.wmzgeczq.js"];
const THRESHOLDS = [1, 5, 10, 25, 50, 100, 250, 500, 1000];

function survey(chunk) {
  const src = readFileSync(`${DIR}/${chunk}`, "utf8");
  const { sm, moduleScope } = analyze(src);
  const lineOf = (p) => src.slice(0, p).split("\n").length;

  // ── 顶层绑定 ──
  const decl = new Map();
  for (const v of moduleScope.variables) {
    const d = v.defs[0]; if (!d) continue;
    if (d.type === "ImportBinding") continue;           // 只普查本地定义
    const stmt = d.type === "Variable" ? d.parent : d.node;
    if (!stmt || stmt.start === undefined) continue;
    decl.set(v.name, { start: stmt.start, end: stmt.end, line: lineOf(stmt.start), kind: d.type });
  }
  const names = [...decl.keys()];
  const spans = names.map((n) => ({ n, ...decl.get(n) })).sort((a, b) => a.start - b.start);
  const find = (p) => {
    let lo = 0, hi = spans.length - 1, best = null;
    while (lo <= hi) { const m = (lo + hi) >> 1; if (spans[m].start <= p) { best = spans[m]; lo = m + 1; } else hi = m - 1; }
    return best && p <= best.end ? best.n : null;
  };

  // ── 绑定级出边 ──
  const out = new Map(names.map((n) => [n, new Set()]));
  for (const sc of sm.scopes) for (const r of sc.references) {
    if (!r.resolved || r.resolved.scope !== moduleScope) continue;
    const from = find(r.identifier.start); if (!from) continue;
    const to = r.resolved.name;
    if (!decl.has(to) || from === to) continue;
    out.get(from).add(to);
  }

  // ── Tarjan ──
  let idx = 0;
  const I = new Map(), L = new Map(), on = new Set(), st = [], sccs = [];
  const strong = (v) => {
    I.set(v, idx); L.set(v, idx); idx++; st.push(v); on.add(v);
    for (const w of out.get(v) ?? []) {
      if (!I.has(w)) { strong(w); L.set(v, Math.min(L.get(v), L.get(w))); }
      else if (on.has(w)) L.set(v, Math.min(L.get(v), I.get(w)));
    }
    if (L.get(v) === I.get(v)) { const c = []; let w; do { w = st.pop(); on.delete(w); c.push(w); } while (w !== v); sccs.push(c); }
  };
  for (const v of names) if (!I.has(v)) strong(v);

  const comp = new Map();               // 绑定 -> SCC 号
  sccs.forEach((c, i) => c.forEach((v) => comp.set(v, i)));
  const cOut = sccs.map(() => new Set());   // SCC DAG 出边
  for (const v of names) for (const w of out.get(v) ?? []) {
    const a = comp.get(v), b = comp.get(w);
    if (a !== b) cOut[a].add(b);
  }

  // ── DAG 上记忆化算可达绑定数（含自身） ──
  const memo = new Array(sccs.length).fill(-1);
  const size = sccs.map((c) => c.length);
  const reach = (c) => {
    if (memo[c] >= 0) return memo[c];
    memo[c] = size[c];                  // 先占位，防环（DAG 上不会真环）
    let n = size[c];
    const seen = new Set();
    for (const d of cOut[c]) {
      n += reach(d);
      seen.add(d);
    }
    // reach(d) 之间可能重叠 —— 用并集重算一次保证准确
    const all = new Set();
    const stack = [...cOut[c]];
    while (stack.length) {
      const x = stack.pop();
      if (all.has(x)) continue;
      all.add(x);
      for (const y of cOut[x]) if (!all.has(y)) stack.push(y);
    }
    let total = size[c];
    for (const x of all) total += size[x];
    memo[c] = total;
    return total;
  };
  // 每个定义**自身**外部 import 了多少个模块（不含它闭包内其它成员的）——
  // 「闭包小」只说明不碰核，能不能提取得看它拖了几个外部模块。
  const extOf = new Map(names.map((n) => [n, new Set()]));
  for (const sc of sm.scopes) for (const r of sc.references) {
    if (!r.resolved || r.resolved.scope !== moduleScope) continue;
    const from = find(r.identifier.start); if (!from) continue;
    const d = r.resolved.defs[0];
    if (d?.type === "ImportBinding" && d.parent?.source?.value) extOf.get(from).add(d.parent.source.value);
  }
  const per = names.map((n) => ({ n, line: decl.get(n).line, kind: decl.get(n).kind, size: reach(comp.get(n)), ext: extOf.get(n).size }));

  // ── 报告 ──
  per.sort((a, b) => a.size - b.size);
  console.log(`\n${"=".repeat(72)}\n${chunk}：顶层定义 ${names.length} 个，SCC ${sccs.length} 个（其中环 ${sccs.filter((c) => c.length > 1).length} 个）\n`);
  console.log("闭包大小分布：");
  for (const t of THRESHOLDS) {
    const lo = t, hi = THRESHOLDS[THRESHOLDS.indexOf(t) + 1] ?? Infinity;
    const c = per.filter((p) => p.size >= lo && p.size < hi).length;
    if (c) console.log(`   ${String(lo).padStart(5)}–${hi === Infinity ? "  ∞" : String(hi).padStart(5)}  ${String(c).padStart(5)} 个`);
  }
  // 可提取候选 = 闭包小（不碰核）且外部模块少（不拖依赖）
  console.log("可提取候选（闭包上限 × 外部模块上限）：");
  console.log("   闭包≤  外部≤   个数");
  for (const [cs, es] of [[1,0],[1,2],[1,5],[10,0],[10,2],[10,5],[25,3],[50,5],[100,10]]) {
    const c = per.filter((p) => p.size <= cs && p.ext <= es).length;
    console.log(`   ${String(cs).padStart(5)}  ${String(es).padStart(5)}  ${String(c).padStart(6)}`);
  }
  const best = per.filter((p) => p.size <= 10 && p.ext <= 2);
  console.log(`\n最干净的一档（闭包≤10 且外部模块≤2）：${best.length} 个，前 30：`);
  for (const p of best.slice(0, 30)) console.log(`   闭包${String(p.size).padStart(3)} 外部${String(p.ext).padStart(2)}  ${p.n}  (行 ${p.line})`);
  return per;
}

for (const c of CHUNKS) survey(c);

// ── 关键问题：要断环，得把「to 依赖的那部分」提出来。那部分里有多少是叶子？ ──
// 如果核里 85% 都是叶子，那「先提叶子把核掏空、再提核」就是可行的两阶段。
import { resolve } from "node:path";
if (process.env.SEEDS_FILE) {
  const chunk = "核心应用-Agent循环.wmzgeczq.js";
  const seeds = readFileSync(process.env.SEEDS_FILE, "utf8").trim().split(/\s+/);
  const saved = console.log; console.log = () => {};
  const per = survey(chunk);
  console.log = saved;
  const byName = new Map(per.map((p) => [p.n, p]));
  // 重算一次种子闭包成员
  const src = readFileSync(`${DIR}/${chunk}`, "utf8");
  const { sm, moduleScope } = analyze(src);
  const lineOf = (p) => src.slice(0, p).split("\n").length;
  const decl = new Map();
  for (const v of moduleScope.variables) {
    const d = v.defs[0]; if (!d || d.type === "ImportBinding") continue;
    const stmt = d.type === "Variable" ? d.parent : d.node;
    if (!stmt || stmt.start === undefined) continue;
    decl.set(v.name, { start: stmt.start, end: stmt.end, line: lineOf(stmt.start) });
  }
  const names = [...decl.keys()];
  const spans = names.map((n) => ({ n, ...decl.get(n) })).sort((a, b) => a.start - b.start);
  const find = (p) => { let lo = 0, hi = spans.length - 1, best = null;
    while (lo <= hi) { const m = (lo + hi) >> 1; if (spans[m].start <= p) { best = spans[m]; lo = m + 1; } else hi = m - 1; }
    return best && p <= best.end ? best.n : null; };
  const out = new Map(names.map((n) => [n, new Set()]));
  for (const sc of sm.scopes) for (const r of sc.references) {
    if (!r.resolved || r.resolved.scope !== moduleScope) continue;
    const from = find(r.identifier.start); if (!from) continue;
    if (!decl.has(r.resolved.name) || from === r.resolved.name) continue;
    out.get(from).add(r.resolved.name);
  }
  const cl = new Set(); const q = seeds.filter((s) => decl.has(s));
  while (q.length) { const v = q.pop(); if (cl.has(v)) continue; cl.add(v); for (const w of out.get(v) ?? []) if (!cl.has(w)) q.push(w); }
  const members = [...cl].map((n) => byName.get(n)).filter(Boolean);
  const leaves = members.filter((m) => m.size <= 10);
  const core = members.filter((m) => m.size > 1000);
  console.log(`\n${"=".repeat(72)}`);
  console.log(`种子（${process.env.SEEDS_FILE}）→ 闭包 ${cl.size} 个绑定`);
  console.log(`   其中「叶子」（个人闭包 ≤ 10）：${leaves.length}   ← 先提这批，核就掏空了`);
  console.log(`   其中「核」（个人闭包 > 1000）：${core.length}   ← 两阶段里要提的第二批`);
  console.log(`   其余：${members.length - leaves.length - core.length}`);
  console.log(`\n掏空后核的规模 ≈ ${members.length - leaves.length} 个绑定`);
}
