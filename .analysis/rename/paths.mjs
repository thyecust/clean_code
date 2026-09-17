// 全树路径与工作目录。脚本位于 <repo>/.analysis/rename/，仓库根是上两级。
import { readdirSync, readFileSync, mkdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const HERE = dirname(fileURLToPath(import.meta.url));

/** 仓库根。换一棵树跑时用 TREE_ROOT 覆盖。 */
export const ROOT = process.env.TREE_ROOT || resolve(HERE, "../..");

/**
 * 中间产物（候选表 / 批次 / 计划 / 备份 / 快照）都落在这里，不写进仓库正文。
 * 用 RENAME_WORK 覆盖，可以按轮次分开。
 */
export const WORK = process.env.RENAME_WORK || join(HERE, ".work");
mkdirSync(WORK, { recursive: true });

// `.analysis` 也要跳过 —— 否则工具链自己的文件会被当成被改造的树的一部分
const SKIP = new Set(["node_modules", "_source", ".git", ".analysis"]);

export const shortPath = (f) => (f.startsWith(ROOT) ? f.slice(ROOT.length + 1) : f);

export function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".js")) out.push(p);
  }
  return out;
}

export function loadTree() {
  const files = walk(ROOT);
  const src = new Map();
  for (const f of files) src.set(f, readFileSync(f, "utf8"));
  return { files, src };
}
