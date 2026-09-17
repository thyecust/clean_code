#!/usr/bin/env bun
// 懒加载解析基准检查 —— 补上 check-imports.mjs 的两个盲区。
//
//   node .analysis/move/check-lazy-base.mjs
//
// [1] `importMetaRequire("./x")` 的基准不是调用方，而是**捕获 import.meta.require
//     的那个模块所在的目录**。`01-…/共享小工具-未细化/chunk-2c9tjhwd.js` 里
//     `importMetaRequire = import.meta.require`，导出后全树 80 处相对调用都按**它**的目录解析。
//     实证：`SKILL-nrz66j7x.md` 只存在于收容所，却被 `02-功能模块/Skills技能/isEnabled.hgqvdvbe.js`
//     用 `importMetaRequire("./SKILL-nrz66j7x.md")` 引用。
//     check-imports 看不见：它的懒加载正则是 `import\.meta\.require\(`，匹配不到 `importMetaRequire(`。
//
// [2] `readEmbeddedAssetSync("./x", import.meta.dirname)` 的基准是调用方自己，
//     而 `"./x"` 是**普通字符串字面量**（通常先赋给变量再传进去），不是 import 说明符，
//     所以任何基于 import 的检查都覆盖不到。
//
// 搬动文件时这两类漏改都不会报错，只会在那条代码路径上抛 ResolveMessage 或拿到 undefined。

import { readFileSync, existsSync } from "node:fs";
import { join, dirname, normalize, relative } from "node:path";
import { ROOT, walkAll, short } from "./lib.mjs";

let fail = 0;
const bad = (m) => { console.log("  ✗ " + m); fail++; };

const files = walkAll(ROOT).filter((p) => p.endsWith(".js"));
const srcOf = new Map(files.map((p) => [p, readFileSync(p, "utf8")]));

// ---------- [1] importMetaRequire 的基准 ----------

// 捕获 import.meta.require 是 `X = import.meta.require;`（**没有**调用括号）。
// 带括号的是「用捕获到的 require 去加载」，两者不能混为一谈。
const CAPTURE_RE = /[A-Za-z0-9_$]+\s*=\s*import\.meta\.require\s*[;,)]/;
const HUB_RE = /from\s*["']([^"']*chunk-2c9tjhwd\.js)["']/;
const CALL_RE = /importMetaRequire\(\s*["'](\.[^"']*)["']\s*\)/g;

const hubs = [];
for (const [p, s] of srcOf) if (CAPTURE_RE.test(s)) hubs.push(p);
const mainHubs = hubs.filter((p) => p.includes("01-核心基础设施"));
if (mainHubs.length !== 1) console.log(`  note: 主树里捕获 import.meta.require 的模块有 ${mainHubs.length} 个：${mainHubs.map(short).join(", ")}`);
const defaultHubDir = mainHubs.length ? dirname(mainHubs[0]) : null;
console.log(`    捕获者：${hubs.map(short).join(" · ")}`);

let lazyChecked = 0;
for (const [p, s] of srcOf) {
  if (!s.includes("importMetaRequire(")) continue;
  const h = s.match(HUB_RE);
  const hubDir = h ? dirname(normalize(join(dirname(p), h[1]))) : defaultHubDir;
  if (!hubDir) { bad(`${short(p)} 用了 importMetaRequire 但找不到它来自哪个 hub`); continue; }
  for (const m of s.matchAll(CALL_RE)) {
    lazyChecked++;
    const spec = m[1];
    const target = normalize(join(hubDir, spec));
    if (!existsSync(target)) {
      const line = s.slice(0, m.index).split("\n").length;
      bad(`${short(p)}:${line} importMetaRequire("${spec}") 按 hub 目录 ${short(hubDir)} 解析不到 ${short(target)}`);
    }
  }
}
console.log(`[1] importMetaRequire 相对调用 ${lazyChecked} 处，基准 = 捕获 import.meta.require 的模块目录`);

// ---------- [2] 随行资源字面量的基准 ----------

// 形态：`var J = "./asset.zst";` 之后 `readEmbeddedAssetSync(J, import.meta.dirname)`
const ASSIGN_RE = /(?:var|let|const)\s+([A-Za-z0-9_$]+)\s*=\s*["']([^"'\n]+)["']/g;
const ASSET_CALL_RE = /readEmbeddedAsset(?:Sync)?\(\s*([A-Za-z0-9_$]+|["'][^"'\n]*["'])\s*,/g;

// 这几个资源**在本仓库里从未存在**（git 里没有新增记录，只有加载器引用它们）：
// 打包产物把它们留在了外部。别把它们当成「搬坏了」。
// 目录改名时这里要跟着改路径（如 `Artifact发布-渲染` → `制品发布-Artifact`）。
const KNOWN_MISSING = new Set([
  "02-功能模块/Skills技能/payload.template.html.asset",
  "02-功能模块/制品发布-Artifact/hljsBundle.generated.min.js",
  "02-功能模块/图表-Mermaid/chart.umd.min.js",
  "02-功能模块/图表-Mermaid/mermaid.min.js",
]);

let assetChecked = 0;
const unresolvedAssets = new Set();
for (const [p, s] of srcOf) {
  if (!/readEmbeddedAsset/.test(s)) continue;
  const literals = new Map();
  for (const m of s.matchAll(ASSIGN_RE)) literals.set(m[1], m[2]);
  for (const m of s.matchAll(ASSET_CALL_RE)) {
    const arg = m[1];
    const lit = arg.startsWith('"') || arg.startsWith("'") ? arg.slice(1, -1) : literals.get(arg);
    if (lit === undefined) continue;
    if (!lit.startsWith("./") && !lit.startsWith("../")) continue;
    assetChecked++;
    const target = normalize(join(dirname(p), lit));
    if (!existsSync(target)) unresolvedAssets.add(short(target));
  }
}
console.log(`[2] 随行资源字面量 ${assetChecked} 处，基准 = 引用方所在目录`);

const unexpected = [...unresolvedAssets].filter((p) => !KNOWN_MISSING.has(p));
for (const p of unexpected) bad(`随行资源解析不到（不在已知缺失清单里）: ${p}`);
for (const p of KNOWN_MISSING) if (!unresolvedAssets.has(p)) console.log(`  note: 已知缺失的资源现在解析到了，可以从清单里去掉: ${p}`);
console.log(`    已知缺失 ${KNOWN_MISSING.size} 个（dump 里本就没有，非本次改动所致）`);

console.log(fail ? `\n失败 ${fail} 项` : "\n两类懒加载基准都成立");
process.exit(fail ? 1 : 0);
