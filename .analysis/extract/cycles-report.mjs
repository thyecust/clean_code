import { readFileSync, writeFileSync } from "node:fs";
import { analyze } from "/Users/game-netease/clean_code/.analysis/rename/lib.mjs";
const D = "/Users/game-netease/clean_code/03-入口与运行时/核心应用-Agent循环/";
const SRC = process.env.SRC || "execution-core.js";
const OUT = process.env.REPORT || `/Users/game-netease/clean_code/.analysis/cycles-${SRC.replace(/\.js$/, "")}.md`;
const src = readFileSync(D + SRC, "utf8");
const lines = src.split("\n");
const { sm, moduleScope } = analyze(src);
const lineOf = (p) => src.slice(0, p).split("\n").length;
const SEP = "";

const decl = new Map(), imports = new Set();
for (const v of moduleScope.variables) {
  const d = v.defs[0]; if (!d) continue;
  if (d.type === "ImportBinding") { imports.add(v.name); continue; }
  const stmt = d.type === "Variable" ? d.parent : d.node;
  if (!stmt || stmt.start === undefined) continue;
  decl.set(v.name, { kind: d.type, start: stmt.start, end: stmt.end, line: lineOf(stmt.start) });
}
const spans = [...decl].map(([n, d]) => ({ n, ...d })).sort((a, b) => a.start - b.start);
const find = (p) => { let lo = 0, hi = spans.length - 1, best = null; while (lo <= hi) { const m = (lo + hi) >> 1; if (spans[m].start <= p) { best = spans[m]; lo = m + 1; } else hi = m - 1; } return best && p <= best.end ? best.n : null; };
const refs = new Map(), edges = new Map();
for (const sc of sm.scopes) for (const r of sc.references) {
  if (!r.resolved || r.resolved.scope !== moduleScope) continue;
  const from = find(r.identifier.start); if (!from) continue;
  const to = r.resolved.name;
  if (imports.has(to) || from === to) continue;
  if (!refs.has(from)) refs.set(from, new Set());
  refs.get(from).add(to);
  const k = from + SEP + to;
  if (!edges.has(k)) edges.set(k, []);
  edges.get(k).push({ line: lineOf(r.identifier.start), eager: r.from.type === "module" || r.from.type === "global" });
}
const stmtBytes = new Map();
for (const [n, d] of decl) if (!stmtBytes.has(d.start)) stmtBytes.set(d.start, d.end - d.start + 1);
const bytesOf = (set) => { const st = new Set(); for (const n of set) { const d = decl.get(n); if (d) st.add(d.start); } let b = 0; for (const s of st) b += stmtBytes.get(s); return b; };
const fmt = (b) => b >= 1048576 ? (b / 1048576).toFixed(2) + " MB" : (b / 1024).toFixed(0) + " KB";
const inEdgesOf = new Map();
for (const [k] of edges) { const [a, b] = k.split(SEP); if (!inEdgesOf.has(b)) inEdgesOf.set(b, new Set()); inEdgesOf.get(b).add(a); }

// —— 全图 SCC
let idx = 0; const I = new Map(), L = new Map(), on = new Set(), st = [], sccs = [];
const strong = (v, sub) => {
  I.set(v, idx); L.set(v, idx); idx++; st.push(v); on.add(v);
  for (const w of refs.get(v) ?? []) { if (sub && !sub.has(w)) continue; if (!I.has(w)) { strong(w, sub); L.set(v, Math.min(L.get(v), L.get(w))); } else if (on.has(w)) L.set(v, Math.min(L.get(v), I.get(w))); }
  if (L.get(v) === I.get(v)) { const c = []; let w; do { w = st.pop(); on.delete(w); c.push(w); } while (w !== v); sccs.push(c); }
};
for (const v of refs.keys()) if (!I.has(v)) strong(v, null);
const big = sccs.filter((c) => c.length > 1).sort((a, b) => b.length - a.length);
const sccOf = new Map(); big.forEach((c, i) => c.forEach((n) => sccOf.set(n, i)));

// 子图里还有没有环（删掉某些节点后）
const compsOf = (ms) => {
  const i2 = new Map(), l2 = new Map(), on2 = new Set(), st2 = [];
  let k = 0; const res = [];
  const go = (v) => {
    i2.set(v, k); l2.set(v, k); k++; st2.push(v); on2.add(v);
    for (const w of refs.get(v) ?? []) {
      if (!ms.has(w)) continue;
      if (!i2.has(w)) { go(w); l2.set(v, Math.min(l2.get(v), l2.get(w))); }
      else if (on2.has(w)) l2.set(v, Math.min(l2.get(v), i2.get(w)));
    }
    if (l2.get(v) === i2.get(v)) { const c = []; let w; do { w = st2.pop(); on2.delete(w); c.push(w); } while (w !== v); res.push(c); }
  };
  for (const v of ms) if (!i2.has(v)) go(v);
  return res.filter((c) => c.length > 1);
};
const hasCycle = (members, drop) => {
  const ms = new Set(members); if (drop) ms.delete(drop);
  return compsOf(ms).length > 0;
};
// 贪心最小反馈点集：每步选「删掉后剩下的环最小」的那个节点
const greedyCuts = (members) => {
  let ms = new Set(members);
  const cuts = [];
  for (let guard = 0; guard < 60; guard++) {
    const cyc = compsOf(ms);
    if (!cyc.length) break;
    const cand = cyc.flat();
    let best = null, bestMax = Infinity;
    for (const v of cand) {
      const t = new Set(ms); t.delete(v);
      const rest = compsOf(t);
      const maxSize = rest.length ? Math.max(...rest.map((c) => c.length)) : 0;
      if (maxSize < bestMax) { bestMax = maxSize; best = v; }
    }
    if (best === null) break;
    cuts.push(best); ms.delete(best);
  }
  return cuts;
};

const snippet = (line) => (lines[line - 1] ?? "").trim().slice(0, 96);
const shortestCycle = (members) => {
  const ms = new Set(members);
  let best = null;
  for (const start of members) {
    const prev = new Map([[start, null]]); const q = [start];
    while (q.length) {
      const v = q.shift();
      for (const w of refs.get(v) ?? []) {
        if (!ms.has(w)) continue;
        if (w === start) {
          const path = []; let cur = v;
          while (cur !== null) { path.unshift(cur); cur = prev.get(cur); }
          path.push(start);
          if (!best || path.length < best.length) best = path;
          continue;
        }
        if (!prev.has(w)) { prev.set(w, v); q.push(w); }
      }
    }
    if (best && best.length === 3) break;   // 2 步环已是最短
  }
  return best;
};

const out = [];
const P = (s) => out.push(s);
P(`# ${SRC} 里的环`);
P("");
P(`顶层绑定 ${decl.size} 个 / ${fmt(bytesOf(decl.keys()))}；**非平凡强连通分量 ${big.length} 个**，合计 ${new Set(big.flat()).size} 个绑定 / ${fmt(bytesOf(new Set(big.flat())))}。`);
P("");
P("## 怎么读");
P("");
P("- `A → B` 表示 **A 引用 B**，行号是引用点所在行。");
P("- **[急切]** = 引用发生在模块顶层（求值时就要求值，是硬约束）；**[延迟]** = 在函数体内，运行时才求值。");
P("- 「删掉它环就散」= 把该绑定移出这个环后，剩余成员之间不再成环。这是拆环的首选下手点。");
P("- 一个强连通分量里通常有很多条环，「最短环」是最容易人工看懂的那条代表。");
P("");
P("## 一览");
P("");
P("| # | 绑定 | 大小 | 行号范围 | 内部边 | 其中急切 | 最短环 | 能单点解体 | 最少断点 |");
P("|---|---:|---:|---|---:|---:|---:|---:|---:|");
const detail = [];
for (let i = 0; i < big.length; i++) {
  const c = big[i], cs = new Set(c);
  const inner = [...edges.keys()].filter((k) => { const [a, b] = k.split(SEP); return cs.has(a) && cs.has(b); });
  const eager = inner.filter((k) => edges.get(k).some((e) => e.eager));
  const ls = c.map((n) => decl.get(n)?.line ?? 0);
  const cyc = shortestCycle(c);
  // 单点解体
  const cuts = [];
  for (const n of c) if (!hasCycle(c, n)) cuts.push(n);
  const gcuts = c.length > 120 ? [] : greedyCuts(c);
  P(`| ${i + 1} | ${c.length} | ${fmt(bytesOf(c))} | ${Math.min(...ls)}–${Math.max(...ls)} | ${inner.length} | ${eager.length} | ${cyc ? cyc.length - 1 : "?"} 步 | ${cuts.length} | ${gcuts.length} |`);
  detail.push({ i, c, cs, inner, eager, cyc, cuts, gcuts });
}
P("");
P("## 逐个环");
for (const { i, c, cs, inner, eager, cyc, cuts, gcuts } of detail) {
  const ls = c.map((n) => decl.get(n)?.line ?? 0);
  P("");
  P(`### #${i + 1} — ${c.length} 个绑定 / ${fmt(bytesOf(c))} · 行 ${Math.min(...ls)}–${Math.max(...ls)}`);
  P("");
  if (cyc) {
    P(`**最短环（${cyc.length - 1} 步）**`);
    P("");
    P("```");
    for (let k = 0; k + 1 < cyc.length; k++) {
      const a = cyc[k], b = cyc[k + 1];
      const es = edges.get(a + SEP + b) ?? [];
      const e = es[0];
      P(`${a} → ${b}   第 ${e?.line} 行 [${e?.eager ? "急切" : "延迟"}]${es.length > 1 ? `（另有 ${es.length - 1} 处引用）` : ""}`);
      P(`    ${snippet(e?.line)}`);
    }
    P("```");
    P("");
  }
  if (eager.length) {
    P(`**内部急切边（${eager.length} 条，硬约束）**`);
    P("");
    P("```");
    for (const k of eager) { const [a, b] = k.split(SEP); const e = edges.get(k)[0];
      P(`${a} → ${b}   第 ${e.line} 行`); P(`    ${snippet(e.line)}`); }
    P("```");
    P("");
  }
  if (cuts.length) {
    P(`**删掉它环就散（${cuts.length} 个）**：${cuts.slice(0, 40).join(", ")}${cuts.length > 40 ? " …" : ""}`);
    P("");
  }
  if (gcuts.length) {
    P(`**贪心最小反馈点集（${gcuts.length} 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：`);
    P("");
    P("```");
    for (const n of gcuts) P(`${n.padEnd(34)} 第 ${String(decl.get(n)?.line).padStart(6)} 行  ${snippet(decl.get(n)?.line)}`);
    P("```");
    P("");
  }
  // 枢纽
  const deg = c.map((n) => ({ n, out: (refs.get(n) ?? new Set()).size, in: (inEdgesOf.get(n) ?? new Set()).size }))
    .sort((a, b) => (b.out + b.in) - (a.out + a.in)).slice(0, 8);
  P(`**枢纽（度数最高的 8 个）**`);
  P("");
  P("```");
  for (const d of deg) P(`${d.n.padEnd(34)} 出 ${String(d.out).padStart(3)} / 入 ${String(d.in).padStart(3)}   第 ${decl.get(d.n)?.line} 行  ${snippet(decl.get(d.n)?.line)}`);
  P("```");
  P("");
  P(`<details><summary>全部 ${c.length} 个成员</summary>`);
  P("");
  P("```");
  for (const n of c.slice().sort((a, b) => (decl.get(a)?.line ?? 0) - (decl.get(b)?.line ?? 0)))
    P(`第 ${String(decl.get(n)?.line).padStart(6)} 行  ${String(decl.get(n)?.kind).padEnd(12)} ${n}`);
  P("```");
  P("</details>");
}
// 凝聚图
P("");
P("## 环与环之间的依赖（凝聚图）");
P("");
P("解开一个环可能要先把另一个环解开，所以这里给出环与环之间谁依赖谁。");
P("");
{
  const cg = new Map();
  for (const [k] of edges) {
    const [a, b] = k.split(SEP);
    const ia = sccOf.get(a), ib = sccOf.get(b);
    if (ia === undefined || ib === undefined || ia === ib) continue;
    if (!cg.has(ia)) cg.set(ia, new Set());
    cg.get(ia).add(ib);
  }
  P("```");
  for (const [a, set] of [...cg].sort((x, y) => x[0] - y[0]))
    P(`#${a + 1}  →  ${[...set].sort((x, y) => x - y).map((x) => "#" + (x + 1)).join(", ")}`);
  P("```");
  const noOut = big.map((_, i) => i).filter((i) => !cg.has(i));
  P("");
  P(`没有出边（不依赖别的环）的：${noOut.map((i) => "#" + (i + 1)).join(", ") || "（无）"}`);
}

writeFileSync(OUT, out.join("\n") + "\n");
console.log(`报告 → ${OUT}（${(out.join("\n").length / 1024).toFixed(0)} KB）`);
console.log(`环 ${big.length} 个 / ${new Set(big.flat()).size} 个绑定 / ${fmt(bytesOf(new Set(big.flat())))}`);
const totEager = detail.reduce((a, d) => a + d.eager.length, 0);
console.log(`内部急切边合计 ${totEager} 条`);
const totCuts = detail.reduce((a, d) => a + d.cuts.length, 0);
console.log(`「删掉就散」的候选节点合计 ${totCuts} 个`);
