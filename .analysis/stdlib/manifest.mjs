// 从备份目录重建 `manifest.json`。
//
// 为什么不是「落盘时顺手记一份」：分批落盘时 manifest 要跨批次累加，而一旦某批的
// 记录写歪了（例如编辑没排序），后面所有批次都跟着歪。备份里存的是**改动前**的原文，
// 而 plan() 是确定性的，所以「拿备份重新规划一遍」能重建出与首次落盘完全相同的编辑集。
//
// 重建时逐文件断言 **备份 + 编辑 == 当前文件**：这是重建正确性的自证，也顺带证明
// 备份没被覆盖、当前文件没被别的东西改过。
//
//   node .analysis/stdlib/manifest.mjs
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../rename/paths.mjs";
import { plan } from "./plan.mjs";
import { buildGraph, planUnused } from "./unused.mjs";
import { planMerge } from "./merge.mjs";
import { applyEdits } from "./verify.mjs";
import { WORK, BACKUP } from "./run.mjs";

const backupDir = BACKUP;
if (!existsSync(backupDir)) {
  console.error("没有备份目录，无法重建");
  process.exit(1);
}

// 求值顺序判据需要改动前的图 —— 从备份重建，与 run.mjs 同一招
const graph = buildGraph(backupDir);

const entries = [];
const bad = [];
for (const name of readdirSync(backupDir).sort()) {
  const rel = name.replace(/__/g, "/");
  const before = readFileSync(join(backupDir, name), "utf8");
  const curPath = join(ROOT, rel);
  if (!existsSync(curPath)) {
    bad.push(`${rel}: 当前树里不存在`);
    continue;
  }
  const cur = readFileSync(curPath, "utf8");
  // 两轮（别名收敛 / 未使用清理）的编辑都可能落在同一个备份上，所以两种规划都试一遍，
  // 谁能让「备份 + 编辑 == 当前文件」成立就用谁。都不成立才是真问题。
  let picked = null;
  for (const [mode, p] of [
    ["aliases", plan(before, { file: rel })],
    ["unused", planUnused(before, { file: join(ROOT, rel), graph })],
    ["merge", planMerge(before, { file: join(ROOT, rel) })],
  ]) {
    if (!p.edits.length) continue;
    const { next, edits } = applyEdits(before, p.edits);
    if (next === cur) {
      picked = { mode, edits };
      break;
    }
  }
  if (!picked) {
    bad.push(`${rel}: 备份 + 编辑 ≠ 当前文件（两种规划都对不上）`);
    continue;
  }
  entries.push({ path: rel, edits: picked.edits.map((e) => ({ start: e.start, end: e.end, text: e.text, was: e.was })) });
}

if (bad.length) {
  console.error("重建失败：");
  for (const b of bad.slice(0, 10)) console.error("  ✗ " + b);
  process.exit(1);
}

const mpath = join(WORK, "manifest.json");
writeFileSync(
  mpath,
  JSON.stringify(
    {
      // allPlans/plans 留空，理由见 run.mjs 里的注释（`renames[n]` 会撞 Object.prototype）
      plans: [],
      allPlans: [],
      fileRenames: [],
      edits: entries,
      beforeSnapshot: join(WORK, "snapshot.before.json"),
      files: entries.map((e) => ({ path: e.path, edits: e.edits.length })),
    },
    null,
    1,
  ),
);
console.log(`manifest 重建完成 → ${mpath}（${entries.length} 个文件 / ${entries.reduce((n, e) => n + e.edits.length, 0)} 处编辑，逐文件断言通过）`);

