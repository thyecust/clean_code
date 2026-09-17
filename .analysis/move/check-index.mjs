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
import { ROOT, SKIP, walkAll, short } from "./lib.mjs";

const fm = JSON.parse(readFileSync(join(ROOT, "_index/file-map.json"), "utf8"));

let fail = 0;
const bad = (m) => { console.log("  ✗ " + m); fail++; };

const byPath = new Map();
for (const [key, v] of Object.entries(fm)) {
  if (byPath.has(v.path)) bad(`两条记录指向同一路径: ${v.path}（键 ${byPath.get(v.path)} 与 ${key}）`);
  byPath.set(v.path, key);
  if (!existsSync(join(ROOT, v.path))) bad(`路径不存在: ${v.path}（键 ${key}）`);
}

// 索引只覆盖四个主分区：`cli.js`（真入口）与 `src/plugins/functionHooks/hooks-worker/`
// （自带依赖的独立 bundle）本来就不在其中。
const MAIN_TREES = ["00-第三方库", "01-核心基础设施", "02-功能模块", "03-入口与运行时"];
const disk = walkAll(ROOT).filter(
  (p) => p.endsWith(".js") && !p.endsWith(".original.js") &&
    MAIN_TREES.some((t) => p.startsWith(join(ROOT, t) + "/")),
);
let missing = 0;
for (const p of disk) {
  const rel = relative(ROOT, p);
  if (!byPath.has(rel)) { bad(`磁盘上有、索引里没有: ${rel}`); missing++; }
}

const stale = Object.entries(fm).filter(([k, v]) => v.path.split("/").pop() !== k).length;
console.log(`索引 ${Object.keys(fm).length} 条 · 磁盘 ${disk.length} 个 .js · 缺记录 ${missing} 条 · 键非文件名（正常）${stale} 条`);
console.log(fail ? `\n失败 ${fail} 项` : "\n索引与磁盘一致");
process.exit(fail ? 1 : 0);
