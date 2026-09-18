#!/usr/bin/env bun
// 索引一致性闸门：`_index/file-map.json` 必须与磁盘对得上。
//
//   node .analysis/move/check-index.mjs
//
// 为什么需要 —— 这个漂移已经在树里躺了很久而没人发现：
// 索引里有 `chunk-ezxdt3dm.js` 指向一个**不存在**的文件（它早已改名成 `request-id.js`，
// 但那次改名没同步 path），而改名后的文件在索引里没有记录。
// 另有三道既有检查（解析 / 依赖边 / 导出面）都看不到这一种 —— 它们只看 .js 之间的引用。
//
// 判定：
//   [1] 每条记录的 path 在磁盘上存在
//   [2] 主树每个 .js 都有记录（`*.original.js` 除外：REPLACED.md 记录的原件，不入索引）
//   [3] 记录之间 path 不重复
// 键与文件名不一致**不算错**：键是稳定的 chunk id（见 index-io.mjs 的说明）。

import { readFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { ROOT, walkAll, shouldHaveIndex } from "./lib.mjs";

const fm = JSON.parse(readFileSync(join(ROOT, "_index/file-map.json"), "utf8"));

let fail = 0;
const bad = (m) => { console.log("  ✗ " + m); fail++; };

const byPath = new Map();
const ghosts = [];   // 索引里有、磁盘上没有 —— 与 missing 的修法完全不同
for (const [key, v] of Object.entries(fm)) {
  if (byPath.has(v.path)) bad(`两条记录指向同一路径: ${v.path}（键 ${byPath.get(v.path)} 与 ${key}）`);
  byPath.set(v.path, key);
  if (!existsSync(join(ROOT, v.path))) { bad(`路径不存在: ${v.path}（键 ${key}）`); ghosts.push({ key, path: v.path }); }
}

// 索引覆盖五个主分区（`04-tools` 于 2026-09-18 成为独立工具分区时加入）：`cli.js`（真入口）
// 与 `src/plugins/functionHooks/hooks-worker/`（自带依赖的独立 bundle）本来就不在其中。
const disk = walkAll(ROOT).filter((p) => shouldHaveIndex(p, ROOT));
const missing = [];
for (const p of disk) {
  const rel = relative(ROOT, p);
  if (!byPath.has(rel)) { bad(`磁盘上有、索引里没有: ${rel}`); missing.push(rel); }
}

const stale = Object.entries(fm).filter(([k, v]) => v.path.split("/").pop() !== k).length;
console.log(`索引 ${Object.keys(fm).length} 条 · 磁盘 ${disk.length} 个 .js · 缺记录 ${missing.length} 条 · 键非文件名（正常）${stale} 条`);
console.log(fail ? `\n失败 ${fail} 项` : "\n索引与磁盘一致");

// 失败时给出**能直接照做**的下一步。两类漂移的修法相反，混在一起提示等于没提示：
// 漏记录要「补录」，幽灵记录要「改 path」，照错的那条做只会把索引改得更烂。
if (missing.length) {
  console.log(`\n磁盘上这 ${missing.length} 个 .js 没有索引记录。若是拆 chunk / 新写的文件，补录：`);
  console.log(`  bun .analysis/move/add-index.mjs ${missing.map((m) => `"${m}"`).join(" ")}`);
  console.log(`若它们本就不该有索引（*.original.js、独立 bundle），那是 shouldHaveIndex 的判据该改。`);
}
if (ghosts.length) {
  console.log(`\n索引里有 ${ghosts.length} 条 path 在磁盘上找不到 —— 改名 / 搬家只做了一半（判定 [1]）：`);
  console.log(`  · 文件还在、只是换了名：用 index-io.mjs 的 patchEntry 改 path，**别**用 JSON.stringify 整体重写`);
  console.log(`  · 整个目录搬过：改用仓库根的 \`bun mv <源> <目标>\` 重做，它会把索引一起同步`);
}

process.exit(fail ? 1 : 0);
