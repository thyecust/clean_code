// 按一份计划，从 **git 里的原始内容**重算搬家后应有的内容。
//
//   node repair-paths.mjs <plan.json>
//
// 为什么有它：`move.mjs` 原先的边重写条件是「**目标**搬了才重写」，漏了
// 「来源搬了、目标没搬」—— 这时相对基准变了，说明符同样必须重算。
// 阶段 2（整目录改名）全是同深度改名，说明符恰好不变，所以这个 bug 被掩盖；
// 阶段 3 跨深度搬文件就暴露成 162 条悬空依赖 + 起不来。
// `move.mjs` 已改成 `fileMap.has(from) || fileMap.has(to)`；这个脚本用来把已经
// 落盘的错误结果修正过来 —— 以 HEAD 的原文为唯一事实来源，重算一遍，因此与
// 当前盘上的（可能只改了一半的）内容无关。
//
// 只重写 import / export-from / import() / import.meta.require 这四类说明符；
// 普通相对字面量（随行资源、`require("./_source/…")`）不碰 —— 它们不是 import 说明符。

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname, normalize, relative } from "node:path";
import { ROOT, short } from "./lib.mjs";
import { relativeSpec } from "./rename-engine.mjs";

const plan = JSON.parse(readFileSync(process.argv[2], "utf8"));

// 旧绝对路径 -> 新绝对路径（只含计划里的移动）
const fileMap = new Map();
for (const mv of plan.moves) fileMap.set(normalize(join(ROOT, mv.from)), normalize(join(ROOT, mv.to)));
const newPath = (p) => fileMap.get(p) ?? p;

const SPECS = [
  /(?:\bfrom\s*|^[ \t]*import\s*)["'](\.[^"'\n]*)["']/gm,       // 静态 + 再导出
  /import\s*\(\s*["'](\.[^"'\n]*)["']\s*\)/g,                    // 动态 import()
  /import\.meta\.require\(\s*["'](\.[^"'\n]*)["']\s*\)/g,        // 字面懒加载
];

let fixed = 0, edits = 0;
for (const mv of plan.moves) {
  if (!mv.to.endsWith(".js")) continue;
  let original;
  try {
    original = execFileSync("git", ["show", `HEAD:${mv.from}`], { cwd: ROOT, maxBuffer: 1 << 28 }).toString("utf8");
  } catch {
    console.log(`  note: git 里没有 ${mv.from}，跳过`);
    continue;
  }
  const oldAbs = normalize(join(ROOT, mv.from));
  const newAbs = normalize(join(ROOT, mv.to));

  const found = [];
  for (const re of SPECS) {
    re.lastIndex = 0;
    for (const m of original.matchAll(re)) {
      const spec = m[1];
      if (!/^\.[^\s()"'`]*$/.test(spec)) continue;
      const at = m.index + m[0].indexOf(spec);
      const targetOld = normalize(join(dirname(oldAbs), spec));
      const targetNew = newPath(targetOld);
      const next = relativeSpec(newAbs, targetNew);
      if (next !== spec) found.push({ start: at, end: at + spec.length, text: next });
    }
  }
  let out = original;
  for (const e of [...found].sort((a, b) => b.start - a.start)) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }
  const cur = readFileSync(newAbs, "utf8");
  if (cur !== out) { writeFileSync(newAbs, out); fixed++; edits += found.length; }
}

console.log(`重算 ${fixed} 个文件（${edits} 处说明符）`);
