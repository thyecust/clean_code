#!/usr/bin/env bun
// 第 7 类检查：悬空的自由标识符 —— 引用了既没在本文件定义、也没 import 进来的名字。
//
//   bun .analysis/check-undef.mjs [--list]
//
// 为什么单独有这么一个检查：这棵树是「去混淆 + 重组 + 改名」的产物，最容易坏的形状
// 是**改名只改了一半**。既有那几道闸门全都看不见它 ——
// `check-imports.mjs` 查的是解析 / 依赖边 / 导出面（引用**关系**），`check-index.mjs`
// 查的是索引与磁盘（文件**存在性**），没有一个在看「这个标识符有没有定义」。
//
// 已经实测炸过两次，都是运行时报错才发现：
//   · `shell-utils.js` 的 `WZt` —— 拆分时定义留在了 `execution-core.js`，
//     单独 import 它就 `WZt is not defined`
//   · `execution-core.js` 的 `yr` —— 某轮改名 `yr` → `slugify` 只改了一半，
//     同一个文件里两种写法混用（918 行 import 了 slugify，146503 行却写 `yr(...)`）
//
// 判据：跑 oxlint 的 `no-undef`，全树，然后扣掉两边：
//   · GLOBALS —— Node / Bun / 浏览器的内建全局，本来就没有定义处
//   · KNOWN   —— 已经记账的既存悬空引用（见下方注释，那是**债务清单不是许可清单**）
// 扣完还剩的，每一处都是**这次改动新引入**的 —— 那才让检查失败。
//
// 固定 oxlint 版本：规则对「什么算未定义」的判定随版本变，结果要可复现。

import { spawnSync } from "node:child_process";

const OXLINT = "oxlint@1.83.0";   // 与 CI 里 `bun x` 的版本一致

// Node / Bun / 浏览器内建。这些没有定义处是天经地义的。
const GLOBALS = new Set([
  // Bun / Node
  "Bun", "Buffer", "process", "global", "console", "__dirname", "__filename",
  "module", "exports", "require", "setTimeout", "clearTimeout", "setInterval",
  "clearInterval", "setImmediate", "clearImmediate", "queueMicrotask",
  "structuredClone", "reportError", "performance", "crypto", "navigator",
  "fetch", "Deno", "EdgeRuntime",
  // 浏览器 / Web API
  "window", "self", "document", "localStorage", "atob", "btoa", "URL",
  "URLSearchParams", "Headers", "Request", "Response", "FormData", "Blob",
  "File", "FileReader", "WebSocket", "XMLHttpRequest", "Event", "EventTarget",
  "ErrorEvent", "MessageEvent", "MessageChannel", "MutationObserver",
  "Worker", "WorkerGlobalScope", "AbortController", "AbortSignal",
  "ReadableStream", "TextEncoder", "TextDecoder", "TextDecoderStream",
  "TransformStream", "DOMException", "QuotaExceededError", "WebAssembly",
  "AsyncIterator", "Reflect", "define", "jQuery", "__REACT_DEVTOOLS_GLOBAL_HOOK__",
]);

// 既存债务：每一条都**不是**「允许这样写」，而是「已经这样了、还没修」。
// 修好一条就删一条 —— 这个 Map 应该在收敛过程中变短，不该变长。
//
// 三类：
//   A 会抛 ReferenceError：定义处被改名，调用处没跟上（跟 `yr` 同源）
//   B 静默行为差异：`typeof X == "object" && X && !X.nodeType` 这种 freeExports
//     探测，`typeof` 对未声明变量不抛错，于是探测恒为假 —— 不崩，但行为不对
//   C bundle 固有：tslib 的 helper 之类，用 `typeof` 守卫着，是编译输出的常态
const KNOWN = new Map(Object.entries({
  // A —— 会抛
  "extractCommandSegments": ["03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"],
  "Mb": ["03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"],
  "vLt": ["03-入口与运行时/核心应用-Agent循环/execution-core.js"],
  "joo": ["03-入口与运行时/核心应用-Agent循环/execution-core.js"],
  "lkr": ["03-入口与运行时/核心应用-Agent循环/execution-core.js"],
  "nmo": ["03-入口与运行时/核心应用-Agent循环/execution-core.js"],
  "fmt": ["03-入口与运行时/会话UI-REPL/会话UI-REPL.qs63rzfp.js"],
  "y": ["01-核心基础设施/UI组件-TUI/React组件(TUI视图).ym1wn9mq.js"],
  "T": ["01-核心基础设施/UI组件-TUI/React组件(TUI视图).ym1wn9mq.js"],
  "a": ["01-核心基础设施/遥测-OpenTelemetry/chunk-p7jm635c.js"],
  "t": ["02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js"],
  "r": ["02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js"],
  "va": ["02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js"],
  // B —— 静默失效
  "U": ["00-第三方库/lodash/lodash.2x3q7cfh.js"],
  "H": ["00-第三方库/lodash/lodash.2x3q7cfh.js"],
  "Ut": ["01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js"],
  // C —— bundle 固有
  "__values": ["03-入口与运行时/核心应用-Agent循环/bundled-cjs-libraries.js"],
}));

const list = process.argv.includes("--list");

const r = spawnSync(
  "bun",
  ["x", OXLINT, "-A", "all", "-D", "no-undef", "-f", "json",
   "--ignore-pattern=**/_source/**", "--ignore-pattern=**/node_modules/**", "."],
  { encoding: "utf8", maxBuffer: 256 * 1024 * 1024 },
);
if (r.error) { console.log(`跑不动 oxlint：${r.error.message}`); process.exit(1); }

let diags;
try { diags = JSON.parse(r.stdout).diagnostics; }
catch { console.log("oxlint 没吐出可解析的 JSON：\n" + (r.stdout || r.stderr).slice(0, 2000)); process.exit(1); }

const identOf = (m) => m.match(/^'([^']+)' is not defined/)?.[1] ?? null;

const globalsHit = new Set(), knownHit = new Set(), fresh = [];
for (const g of diags) {
  const id = identOf(g.message);
  if (!id) continue;
  if (GLOBALS.has(id)) { globalsHit.add(id); continue; }
  const allowed = KNOWN.get(id);
  if (allowed?.includes(g.filename)) { knownHit.add(`${id}\0${g.filename}`); continue; }
  fresh.push({ id, file: g.filename, line: g.labels?.[0]?.span?.line ?? "?" });
}

console.log(`标准全局 ${globalsHit.size} 个标识符 · 已记账的悬空引用 ${knownHit.size} 处 · 新引入 ${fresh.length} 处`);

if (list) {
  console.log("\n已记账的悬空引用（债务清单，修好一条删一条）：");
  for (const [id, files] of KNOWN) for (const f of files) console.log(`  ${id}  @  ${f}`);
}

if (fresh.length) {
  console.log("\n新引入的悬空引用（引用了没定义、也没 import 的名字）：");
  for (const f of fresh) console.log(`  ✗ ${f.file}:${f.line}  '${f.id}'`);
  console.log("\n要么补上定义 / import，要么——如果它确实改过名——把改名补完。");
  console.log("确实是既存债务的话，加进 check-undef.mjs 的 KNOWN，并在那里注明性质。");
  process.exit(1);
}
console.log("\n没有新引入的悬空引用。");
