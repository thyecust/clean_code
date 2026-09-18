// 收敛驱动器：规划 → 落盘 → 校验（失败则逐组回退重试）。
//
//   node .analysis/stdlib/run.mjs                 # 全树 dry-run 报告
//   node .analysis/stdlib/run.mjs --dry --only 文件子串
//   node .analysis/stdlib/run.mjs --write --only 文件子串
//   node .analysis/stdlib/run.mjs --write --only-list list.txt
//
// 落盘时备份到 .analysis/stdlib/.work/backup/<相对路径 __ 化>，并写一份兼容
// `.analysis/rename/verify.mjs` / `restore.mjs` 的 manifest。
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { ROOT, walk } from "../rename/paths.mjs";
import { plan } from "./plan.mjs";
import { check, applyEdits, roundTrip } from "./verify.mjs";
import { buildGraph, planUnused, checkUnused } from "./unused.mjs";
import { planMerge, checkMerge } from "./merge.mjs";
import { splice } from "../rename/engine.mjs";

export const HERE = dirname(fileURLToPath(import.meta.url));
export const WORK = process.env.STD_WORK || join(HERE, ".work");
export const BACKUP = join(WORK, "backup");
mkdirSync(WORK, { recursive: true });
export const short = (f) => (f.startsWith(ROOT) ? f.slice(ROOT.length + 1) : f);

/** 规划 + 校验，失败时逐条回退重试。两种模式（aliases / unused）共用。 */
export function planVerified(f, src, { mode = "aliases", graph = null, maxRounds = 6 } = {}) {
  const exclude = new Set();
  const rolled = [];
  const doPlan = (ex) =>
    mode === "unused"
      ? planUnused(src, { file: f, graph, exclude: ex })
      : mode === "merge"
        ? planMerge(src, { file: f, exclude: ex })
        : plan(src, { file: short(f), exclude: ex });
  // 三种模式都要把 **applyEdits 之后**（带 `was`）的编辑集交给校验：往返检查靠 `was` 还原原文
  const doCheck = (nx, p, edits) =>
    mode === "unused"
      ? checkUnused(src, nx, { ...p, edits }, { roundTrip })
      : mode === "merge"
        ? checkMerge(src, nx, { ...p, edits }, { roundTrip })
        : check(src, nx, { edits, groups: p.groups });

  for (let round = 0; round <= maxRounds; round++) {
    const p = doPlan(exclude);
    if (!p.edits.length) return { ...p, rolled };
    const { next, edits } = applyEdits(src, p.edits);
    const errs = doCheck(next, p, edits);
    if (!errs.length) return { ...p, edits, next, rolled };
    if (round === maxRounds) return { ...p, fatal: errs, rolled };
    // 从失败信息里点名变量，映射回条目；点名不出来就砍掉最大的那条
    const named = new Set();
    for (const e of errs) {
      for (const r of p.records) {
        const names = mode === "unused" ? r.removed : r.bindings ?? [r.imported, ...r.aliases];
        if (names.some((n) => new RegExp(`(^|[^\\w$])${n}([^\\w$]|$)`).test(e)))
          named.add(r.key ?? (mode === "unused" ? r.removed.join(",") : r.source + "\0" + r.imported));
      }
    }
    if (!named.size) {
      const size = (r) => r.bindings?.length ?? r.aliases?.length ?? r.removed?.length ?? 0;
      const big = [...(p.records ?? [])].sort((a, b) => size(b) - size(a))[0];
      if (!big) return { ...p, fatal: errs, rolled };
      named.add(big.key ?? (mode === "unused" ? big.removed.join(",") : big.source + "\0" + big.imported));
    }
    for (const k of named) {
      if (exclude.has(k)) continue;
      exclude.add(k);
      rolled.push({ key: k, errs });
    }
  }
}

function main() {
  const argv = process.argv.slice(2);
  const write = argv.includes("--write");
  const modeArg = argv.find((a) => a.startsWith("--mode="));
  const mode = modeArg ? modeArg.slice(7) : "aliases";
  const onlyIdx = argv.indexOf("--only");
  const only = onlyIdx >= 0 ? argv[onlyIdx + 1] : null;
  const listIdx = argv.indexOf("--only-list");
  let onlyList = null;
  if (listIdx >= 0) onlyList = new Set(readFileSync(argv[listIdx + 1], "utf8").split("\n").map((s) => s.trim()).filter(Boolean));

  // 求值顺序判据要整棵树的急切图；建立在**改动前**源码上（备份∪当前树），
  // 所以分批落盘时每一批拿到的都是同一张图。
  const graph = mode === "unused" ? buildGraph(BACKUP) : null;
  if (!["aliases", "unused", "merge"].includes(mode)) { console.error(`未知 --mode=${mode}`); process.exit(1); }

  let files = walk(ROOT);
  if (only) files = files.filter((f) => short(f).includes(only));
  if (onlyList) files = files.filter((f) => onlyList.has(short(f)));

  const report = [];
  const byFile = new Map();
  let nEdits = 0;
  let nFiles = 0;
  let nFatal = 0;
  let nRemoved = 0;
  const statusCount = new Map();
  const editsOut = [];

  for (const f of files) {
    const src = readFileSync(f, "utf8");
    let p;
    try {
      p = planVerified(f, src, { mode, graph });
    } catch (e) {
      report.push({ file: short(f), error: e.message });
      continue;
    }
    for (const r of p.records ?? []) {
      const k = mode === "aliases" ? r.status : r.mode ?? r.status;
      statusCount.set(k, (statusCount.get(k) ?? 0) + 1);
      if (mode === "unused") nRemoved += r.removed.length;
    }
    if (p.fatal) {
      nFatal++;
      report.push({ file: short(f), fatal: p.fatal.slice(0, 6) });
      continue;
    }
    if (!p.edits?.length) continue;
    nFiles++;
    nEdits += p.edits.length;
    byFile.set(short(f), { edits: p.edits.length, groups: p.records.length, rolled: p.rolled.length });
    editsOut.push({ path: short(f), edits: p.edits });
    if (write) {
      const backup = join(BACKUP, short(f).split("/").join("__"));
      if (!existsSync(backup)) {
        mkdirSync(dirname(backup), { recursive: true });
        writeFileSync(backup, src);
      }
      writeFileSync(f, p.next);
    }
    if (mode === "unused") report.push({ file: short(f), records: p.records });
  }

  // 报告
  const sorted = [...byFile].sort((a, b) => b[1].edits - a[1].edits);
  console.log(`${write ? "已落盘" : "dry-run"} [${mode}]：${files.length} 个文件里 ${nFiles} 个有改动，共 ${nEdits} 处编辑`);
  if (mode === "unused") console.log(`删除的 import specifier：${nRemoved} 个`);
  console.log("分布：", [...statusCount].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}=${v}`).join(" · "));
  if (nFatal) console.log(`⚠ 校验彻底失败的文件：${nFatal}`);
  console.log("\n改动最重的 15 个文件：");
  for (const [f, m] of sorted.slice(0, 15)) console.log(`  ${String(m.edits).padStart(6)} 编辑 / ${String(m.groups).padStart(4)} 条  ${f}`);

  writeFileSync(join(WORK, write ? `report.after.${mode}.json` : `report.dry.${mode}.json`), JSON.stringify({ mode, nFiles, nEdits, nRemoved, byFile: Object.fromEntries(sorted), statusCount: Object.fromEntries(statusCount), report }, null, 1));

  if (write) {
    // manifest 累加：分批落盘时，restore.mjs 需要一份覆盖全部批次的完整记录
    const mpath = join(WORK, "manifest.json");
    let prev = { edits: [], files: [] };
    if (existsSync(mpath)) {
      try {
        prev = JSON.parse(readFileSync(mpath, "utf8"));
      } catch {}
    }
    const seen = new Set(editsOut.map((e) => e.path));
    const merged = [...prev.edits.filter((e) => !seen.has(e.path)), ...editsOut.map((e) => ({ path: e.path, edits: e.edits.map((x) => ({ start: x.start, end: x.end, text: x.text, was: x.was })) }))];
    const manifest = {
      // `allPlans`/`plans` 故意留空。verify.mjs 对「本模块的导出名」会做
      // `plan.renames[n] ?? n`，而 renames 是 `{}` 时那个查表会撞上
      // `Object.prototype` —— lodash 恰好导出 `toString`，于是 `want` 里混进一个函数，
      // JSON 化成 null，报出假失败。本次不改任何模块的导出名，留空即让那一步退化成
      // 「改前导出面 === 改后导出面」，正是我们要的语义。
      plans: [],
      allPlans: [],
      fileRenames: [],
      edits: merged,
      beforeSnapshot: join(WORK, "snapshot.before.json"),
      files: merged.map((e) => ({ path: e.path, edits: e.edits.length })),
    };
    writeFileSync(mpath, JSON.stringify(manifest, null, 1));
    console.log(`\nmanifest → ${mpath}（累计 ${merged.length} 个文件）`);
  }
}

if (process.argv[1] && process.argv[1].endsWith("run.mjs")) main();
