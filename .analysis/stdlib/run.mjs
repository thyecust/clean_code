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
import { check, applyEdits } from "./verify.mjs";
import { splice } from "../rename/engine.mjs";

export const HERE = dirname(fileURLToPath(import.meta.url));
export const WORK = process.env.STD_WORK || join(HERE, ".work");
export const short = (f) => (f.startsWith(ROOT) ? f.slice(ROOT.length + 1) : f);

/** 规划 + 校验，失败时逐组回退重试。返回最终方案与重试记录。 */
export function planVerified(f, src, maxRounds = 6) {
  const exclude = new Set();
  const rolled = [];
  for (let round = 0; round <= maxRounds; round++) {
    const p = plan(src, { file: short(f), exclude });
    if (!p.edits.length) return { ...p, rolled };
    const { next, edits } = applyEdits(src, p.edits);
    const errs = check(src, next, { edits, groups: p.groups });
    if (!errs.length) return { ...p, edits, next, rolled };
    if (round === maxRounds) return { ...p, fatal: errs, rolled };
    // 从失败信息里点名变量，映射回组；点名不出来就砍掉最大的那个组
    const named = new Set();
    for (const e of errs) {
      for (const g of p.groups) {
        const names = [g.name, ...g.items.map((it) => it.sp.local.name)];
        if (names.some((n) => new RegExp(`(^|[^\\w$])${n}([^\\w$]|$)`).test(e))) named.add(g.norm + "\0" + g.name);
      }
    }
    if (!named.size) {
      const big = [...p.groups].sort((a, b) => b.items.length - a.items.length)[0];
      if (!big) return { ...p, fatal: errs, rolled };
      named.add(big.norm + "\0" + big.name);
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
  const onlyIdx = argv.indexOf("--only");
  const only = onlyIdx >= 0 ? argv[onlyIdx + 1] : null;
  const listIdx = argv.indexOf("--only-list");
  let onlyList = null;
  if (listIdx >= 0) onlyList = new Set(readFileSync(argv[listIdx + 1], "utf8").split("\n").map((s) => s.trim()).filter(Boolean));

  let files = walk(ROOT);
  if (only) files = files.filter((f) => short(f).includes(only));
  if (onlyList) files = files.filter((f) => onlyList.has(short(f)));

  const report = [];
  const byFile = new Map();
  let nEdits = 0;
  let nFiles = 0;
  let nFatal = 0;
  const statusCount = new Map();
  const editsOut = [];

  for (const f of files) {
    const src = readFileSync(f, "utf8");
    let p;
    try {
      p = planVerified(f, src);
    } catch (e) {
      report.push({ file: short(f), error: e.message });
      continue;
    }
    for (const r of p.records ?? []) statusCount.set(r.status, (statusCount.get(r.status) ?? 0) + 1);
    if (p.fatal) {
      nFatal++;
      report.push({ file: short(f), fatal: p.fatal.slice(0, 6) });
      continue;
    }
    if (!p.edits?.length) continue;
    nFiles++;
    nEdits += p.edits.length;
    byFile.set(short(f), { edits: p.edits.length, groups: p.groups.length, rolled: p.rolled.length });
    editsOut.push({ path: short(f), edits: p.edits });
    if (write) {
      const backup = join(WORK, "backup", short(f).split("/").join("__"));
      if (!existsSync(backup)) {
        mkdirSync(dirname(backup), { recursive: true });
        writeFileSync(backup, src);
      }
      writeFileSync(f, p.next);
    }
  }

  // 报告
  const sorted = [...byFile].sort((a, b) => b[1].edits - a[1].edits);
  console.log(`${write ? "已落盘" : "dry-run"}：${files.length} 个文件里 ${nFiles} 个有改动，共 ${nEdits} 处编辑`);
  console.log("组状态分布：", [...statusCount].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}=${v}`).join(" · "));
  if (nFatal) console.log(`⚠ 校验彻底失败的文件：${nFatal}`);
  console.log("\n改动最重的 15 个文件：");
  for (const [f, m] of sorted.slice(0, 15)) console.log(`  ${String(m.edits).padStart(6)} 编辑 / ${String(m.groups).padStart(4)} 组  ${f}`);

  writeFileSync(join(WORK, write ? "report.after.json" : "report.dry.json"), JSON.stringify({ nFiles, nEdits, byFile: Object.fromEntries(sorted), statusCount: Object.fromEntries(statusCount), report }, null, 1));

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
