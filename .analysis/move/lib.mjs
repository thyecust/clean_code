// 搬家工具链的公共部分。底座全部复用 `.analysis/rename/`（那边已经把
// 解析 / 作用域 / 引用边索引 / 快照写好了），这里只加「搬家」特有的东西。

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, normalize, relative, basename } from "node:path";
import { mkdirSync } from "node:fs";

export { ROOT, HERE } from "../rename/paths.mjs";
export { shortPath, walk, loadTree } from "../rename/paths.mjs";
export { buildEdges, buildIndex } from "../rename/index.mjs";
export { splice, relativeSpec } from "../rename/engine.mjs";
export { snap, exportNames } from "../rename/snapshot.mjs";

import { ROOT, shortPath } from "../rename/paths.mjs";

/** 中间产物（计划 / 备份 / 前像 / 验证报告）。 */
export const WORK = process.env.MOVE_WORK || join(ROOT, ".analysis/move/.work");
mkdirSync(WORK, { recursive: true });

/** `.analysis` 与依赖目录都不是被改造的树的一部分。 */
export const SKIP = new Set(["node_modules", "_source", ".git", ".analysis"]);

/** 索引覆盖的五个主分区（`04-tools` 于 2026-09-18 成为独立工具分区时加入）。 */
export const MAIN_TREES = ["00-第三方库", "01-核心基础设施", "02-功能模块", "03-入口与运行时", "04-tools"];

/**
 * 该不该有索引条目：主树下的 `.js`，`*.original.js` 除外（REPLACED.md 记录的原件）。
 * `cli.js`（真入口）与 `src/plugins/functionHooks/hooks-worker/`（自带依赖的独立
 * bundle，故意重复主树的 basename）本来就不在索引里。
 *
 * `check-index.mjs`（判定磁盘有、索引无）与 `add-index.mjs`（补录）必须用**同一个**
 * 判据 —— 两份各写一遍就会出现「补录了但闸门仍说缺」这种自相矛盾的状态。
 */
export function shouldHaveIndex(absPath, root = ROOT) {
  return absPath.endsWith(".js") && !absPath.endsWith(".original.js") &&
    MAIN_TREES.some((t) => absPath.startsWith(join(root, t) + "/"));
}

/** 全树遍历：**所有**文件，不只 .js —— 搬家要连随行资源一起搬。 */
export function walkAll(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walkAll(p, out);
    else out.push(p);
  }
  return out;
}

export const isJs = (p) => p.endsWith(".js");
export const short = shortPath;

/**
 * 捕获 `import.meta.require` 的模块 —— 它的所在目录是 `importMetaRequire("./x")`
 * 的解析基准（不是调用方目录）。见 README「三条解析约束」。
 */
export const HUB_BASENAME = "chunk-2c9tjhwd.js";

export function findHubs(files) {
  return files.filter((f) => basename(f) === HUB_BASENAME);
}

export function hubDirs(files) {
  return [...new Set(findHubs(files).map((f) => dirname(f)))];
}

/** 相对路径字面量 `"./x"`（随行资源用），解析到存在的文件则返回绝对路径。 */
export function resolveLiteral(fromFile, lit) {
  if (!lit.startsWith("./") && !lit.startsWith("../")) return null;
  const t = normalize(join(dirname(fromFile), lit));
  return existsSync(t) ? t : null;
}

export function sizeOf(p) {
  try { return statSync(p).size; } catch { return 0; }
}

export function readJson(p) {
  return JSON.parse(readFileSync(p, "utf8"));
}

/**
 * 目录名 → 模块显示名：`-` → ` / `，并在拉丁词与中文之间补空格。
 * 两处细节：拉丁词内部连字符不拆（`目录同步-dir-sync` → `目录同步 / dir-sync`）；
 * `会话UI` → `会话 UI`。
 */
export function displayName(leaf) {
  return leaf
    .split(/(?<![A-Za-z0-9])-(?![A-Za-z0-9])|(?<=[A-Za-z0-9])-(?=[\u4e00-\u9fff])|(?<=[\u4e00-\u9fff])-(?=[A-Za-z0-9])/)
    .map((seg) => seg.replace(/(?<=[\u4e00-\u9fff])(?=[A-Za-z])/g, " ").replace(/(?<=[A-Za-z0-9.])(?=[\u4e00-\u9fff])/g, " "))
    .join(" / ");
}
