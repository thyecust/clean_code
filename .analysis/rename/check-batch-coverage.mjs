// 批次覆盖率报告：每个模块「仍混淆的导出名」有多少进了计划、有多少被跳过。
//
//   node check-batch-coverage.mjs <plans-dir> <batches-dir>
//
// 与 check-coverage.mjs 的分工：那个是给大 chunk 的切片 dossier 用的（认 "## 本切片内的
// 仍混淆导出名" 那个分节），普通批次它直接跳过。这个补上普通批次这一层。
//
// **未覆盖不等于错。** agent 明确跳过（证据不足）的名字本来就不该出现在计划里，
// 而计划里没有「我跳过了哪些」这个字段，所以跳过的和漏读的在这里长得一样。
// 这个报告的作用是把跳过率摆出来让人过一眼：一个模块改名率 2/50 需要解释，
// 50/50 才正常。**要逐个人工确认是「跳过」还是「漏读」。**
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const plansDir = process.argv[2];
const batchesDir = process.argv[3];
if (!plansDir || !batchesDir) {
  console.error("用法: node check-batch-coverage.mjs <plans-dir> <batches-dir>");
  process.exit(2);
}

const { WORK } = await import("./paths.mjs");
const cands = JSON.parse(readFileSync(join(WORK, "candidates.json"), "utf8"));
const byPath = new Map(cands.map((c) => [c.path, c]));

const idOf = (f) => (f.match(/batch-(\d+)/) || [])[1];
const plansById = new Map();
for (const f of readdirSync(plansDir).filter((x) => x.endsWith(".json"))) {
  const id = idOf(f);
  if (id) plansById.set(id, JSON.parse(readFileSync(join(plansDir, f), "utf8")));
}

let totMangled = 0, totRenamed = 0, quiet = 0;
const rows = [];
for (const f of readdirSync(batchesDir).filter((x) => x.endsWith(".json")).sort()) {
  const id = idOf(f);
  const paths = JSON.parse(readFileSync(join(batchesDir, f), "utf8"));
  const plans = plansById.get(id);
  const planned = new Map((plans ?? []).map((p) => [p.module, p]));

  for (const p of paths) {
    const c = byPath.get(p);
    if (!c) continue;
    const plan = planned.get(p);
    const renamed = plan ? Object.keys(plan.renames) : [];
    const missed = c.mangled.filter((n) => !renamed.includes(n));
    totMangled += c.mangled.length;
    totRenamed += renamed.length;
    if (!plan) quiet++;
    rows.push({ id, path: p, mangled: c.mangled.length, renamed: renamed.length, missed, hadPlan: !!plan });
  }
}

rows.sort((a, b) => (a.renamed / (a.mangled || 1)) - (b.renamed / (b.mangled || 1)));
for (const r of rows) {
  const pct = ((r.renamed / (r.mangled || 1)) * 100).toFixed(0);
  const flag = !r.hadPlan ? "无计划" : pct < 50 ? "偏低" : "";
  console.log(`${r.id}  ${String(r.renamed).padStart(3)}/${String(r.mangled).padStart(3)} (${pct.padStart(3)}%)  ${flag.padEnd(4)} ${r.path}`);
}

console.log(`\n合计 ${rows.length} 模块 · 混淆导出名 ${totMangled} · 已计划 ${totRenamed} · 未计划 ${totMangled - totRenamed}`);
console.log(`整批没有计划的模块：${quiet}`);
console.log("未计划里混着「agent 明确跳过」和「漏读」两种，跳过率异常低的模块要人工看一眼。");
