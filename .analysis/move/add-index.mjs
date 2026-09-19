#!/usr/bin/env bun
// 给**新出现**的文件补 `_index/` 条目 —— 拆 chunk、新写文件之后的那一步。
//
//   bun .analysis/move/add-index.mjs <路径...> [--module <名>] [--tier <n>]
//                                    [--confidence <c>] [--dry]
//
// 为什么单独有这么一个脚本：`sync-index.mjs` 只按 plan 的 moves 改**已有**条目的
// path（它用 `keyOfPath.get(mv.from)` 反查，查不到就 `skipped++`），整条链上原先
// **没有「新增条目」的入口**。2026-09-18 从 `execution-core.js` 抠出 `shell-utils.js`
// / `utils.js` 时就漏了这两条 —— 工具链一声不吭，直到 CI 的 `check-index.mjs`
// 判定 [2] 拦下「磁盘上有、索引里没有」。
//
// 归属（与 move.mjs §4 同规则）：
//   1 `--module` / `--tier` 显式给出
//   2 该目录在索引里已有条目 → 取占多数的那个
//   3 都没有 → **报错**，要求显式指定。新目录无从推断，而猜错的归属会被
//     后续 move.mjs 的「目录多数票」反复复制，把整个目录带偏（见 tree-gotchas）。
//
// 键取文件名：那批拆分产物（`execution-core.js` / `hook-helper.js` …）都是这么建的；
// dumper 留下的 `chunk-xxxx.js` 键是「稳定 chunk id」，新文件没有这段历史。
// 报错时一律**什么都不写** —— 不留「盘上一半、索引一半」的中间态。

import { readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, relative, basename, resolve } from "node:path";
import { ROOT, shouldHaveIndex } from "./lib.mjs";
import { readFileMap, addEntry, specForDir, writeModulesMd, checkModulesMdRoundTrips } from "./index-io.mjs";

const USAGE = `用法：bun .analysis/move/add-index.mjs <路径...> [--module <名>] [--tier <n>] [--confidence <c>] [--dry]

  给拆 chunk / 新增产生的文件补索引条目（相对路径按当前目录解析）。
  --dry         只预览，不写盘
  --module/--tier/--confidence   覆盖从目标目录多数票推出来的归属`;

const argv = process.argv.slice(2);
const dry = argv.includes("--dry");
const VALUED = new Set(["--module", "--tier", "--confidence"]);
const takeFlag = (name) => {
  const i = argv.indexOf(name);
  if (i < 0) return null;
  if (i + 1 >= argv.length) { console.log(`${name} 后面缺值`); process.exit(1); }
  return argv[i + 1];
};
const targets = argv.filter((a, i) => !a.startsWith("--") && !(i > 0 && VALUED.has(argv[i - 1])));

if (!targets.length) { console.log(USAGE); process.exit(1); }

const modOverride = takeFlag("--module");
const rawTier = takeFlag("--tier");
const tierOverride = rawTier === null ? null : Number(rawTier);
if (rawTier !== null && Number.isNaN(tierOverride)) { console.log(`--tier 要是数字，收到 ${rawTier}`); process.exit(1); }
const confOverride = takeFlag("--confidence");

const fm = readFileMap();
const keyOfRelPath = new Map(Object.entries(fm).map(([k, v]) => [v.path, k]));
let text = readFileSync(join(ROOT, "_index/file-map.json"), "utf8");

const added = [], notes = [], errors = [];

for (const t of targets) {
  const abs = resolve(process.cwd(), t);
  if (!abs.startsWith(ROOT + "/")) { errors.push(`${t}: 不在仓库内（${ROOT}）`); continue; }
  const rel = relative(ROOT, abs);

  if (!existsSync(abs)) { errors.push(`${rel}: 文件不存在`); continue; }
  if (!shouldHaveIndex(abs, ROOT)) {
    errors.push(`${rel}: 不在索引覆盖范围内（主树的 .js，且非 *.original.js）`);
    continue;
  }
  if (keyOfRelPath.has(rel)) { notes.push(`${rel}: 已有条目（键 ${keyOfRelPath.get(rel)}），跳过`); continue; }

  const key = basename(rel);
  if (fm[key]) { errors.push(`${rel}: 键 ${key} 已被占用（指向 ${fm[key].path}）`); continue; }

  const ballot = specForDir(fm, dirname(rel));
  const module = modOverride ?? ballot?.module;
  const tier = tierOverride ?? ballot?.tier;
  if (!module || tier === undefined) {
    errors.push(`${rel}: 目录 ${dirname(rel)} 在索引里没有条目，推断不出归属 —— 请显式给 --module 与 --tier`);
    continue;
  }

  const kb = Number((statSync(abs).size / 1024).toFixed(1));
  const confidence = confOverride ?? "high";
  const r = addEntry(text, key, { path: rel, module, tier, kb, confidence });
  if (!r.ok) { errors.push(`${rel}: ${r.why}`); continue; }
  text = r.text;
  added.push({ key, rel, module, tier, kb, confidence });
}

for (const n of notes) console.log(`  note: ${n}`);

if (errors.length) {
  console.log("有问题的目标 —— 什么都没写：");
  for (const e of errors) console.log("  ✗ " + e);
  process.exit(1);
}
if (!added.length) { console.log("没有要补的条目。"); process.exit(0); }

console.log(`${dry ? "将补录" : "补录"} ${added.length} 条：`);
for (const a of added) {
  console.log(`  + ${a.key}  →  ${a.rel}`);
  console.log(`      ${a.module} · tier ${a.tier} · ${a.kb} KB · ${a.confidence}`);
}
if (dry) { console.log("（--dry，未写盘）"); process.exit(0); }

writeFileSync(join(ROOT, "_index/file-map.json"), text);
writeModulesMd(readFileMap());
const rt = checkModulesMdRoundTrips();
console.log(`索引 ${Object.keys(readFileMap()).length} 条 · modules.md 自检 ${rt ? "✗ @" + rt.at : "✓ 零 diff"}`);
