// 覆盖检查：每片 dossier 列出的名字，是否都被计划处理过。
//
//   node check-coverage.mjs <dossier-dir> <plans-dir> [dossier 文件名后缀]
//
// lint-plans.mjs 只校验「计划里的名字合法」，管不了「该改的名字漏了没改」。
// 两者是不同的失败：漏掉的名字会静静地留在混淆状态，谁也不会报错。
// 实际用过一次就抓到一片漏读了 3 个名字（agent 自己数错了列表长度，报的是「已全覆盖」）。
//
// 退出码非 0 表示有未覆盖项 —— 但**不一定是错**：agent 明确跳过（证据不足）的名字
// 也会出现在这里。所以要人工看一眼每个未覆盖的名字是「跳过了」还是「漏读了」。
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const dossierDir = process.argv[2];
const plansDir = process.argv[3];
if (!dossierDir || !plansDir) {
  console.error("用法: node check-coverage.mjs <dossier-dir> <plans-dir>");
  process.exit(2);
}

const dossierFiles = readdirSync(dossierDir).filter((f) => f.endsWith(".md"));
const planFiles = readdirSync(plansDir).filter((f) => f.endsWith(".json") && !f.includes("wave"));

// 把计划按「片号」索引：dossier 与计划靠文件名里的 slice-NN 对齐
const sliceId = (f) => (f.match(/slice-(\d+)/) || [])[1];

const byId = new Map();
for (const f of planFiles) {
  const id = sliceId(f);
  if (!id) continue;
  for (const plan of JSON.parse(readFileSync(join(plansDir, f), "utf8"))) {
    if (!byId.has(id)) byId.set(id, new Set());
    for (const k of Object.keys(plan.renames)) byId.get(id).add(k);
  }
}

let uncovered = 0, checked = 0;
for (const f of dossierFiles) {
  const id = sliceId(f);
  if (!id) continue;
  const md = readFileSync(join(dossierDir, f), "utf8");
  const marker = "## 本切片内的仍混淆导出名";
  if (!md.includes(marker)) continue; // 普通模块 dossier，没有这个分节
  const sec = md.split(marker)[1].split("## 本切片源码")[0];
  const listed = [...sec.matchAll(/^- `([^`]+)`/gm)].map((m) => m[1]);
  if (!listed.length) continue;
  checked++;

  const done = byId.get(id);
  // 整片没有计划 = 这一片还没做，不是「漏了名字」——不计入未覆盖
  if (!done) continue;
  const miss = listed.filter((x) => !done.has(x));
  const extra = [...done].filter((x) => !listed.includes(x));
  if (miss.length) {
    console.log(`  slice-${id}: 列出 ${listed.length} · 计划 ${done.size} · **未覆盖 ${miss.length}** -> ${miss.join(", ")}`);
    uncovered += miss.length;
  }
  if (extra.length) console.log(`      （计划里有 ${extra.length} 个不在列出清单里：${extra.slice(0, 5).join(", ")}）`);
}

console.log(`\n检查 ${checked} 片 · 未覆盖 ${uncovered} 个名字`);
console.log("未覆盖不一定是错 —— agent 明确跳过（证据不足）的也在其中，逐个人工确认是「跳过」还是「漏读」。");
process.exit(uncovered ? 1 : 0);
