#!/usr/bin/env bun
// 全树 import 检查（独立脚本，不复用树的改造代码 —— 见 README「验证」一节的约定）。
//
//   bun .analysis/check-imports.mjs            静态检查
//   bun .analysis/check-imports.mjs --runtime  额外单独拉起 hooks worker
//
// 三类静态检查，都是「改动前 0 失败、改动后也必须是 0」的性质：
//
//   1 解析      每个 .js 过一遍 Bun 的解析器。重复声明、括号不配等在这里就暴露，
//               不必等到运行时——运行时只会给一句 `Claude Code could not start: BuildMessage`。
//   2 依赖边    所有相对说明符（静态 import / 动态 import() / import.meta.require 字面量）
//               都落得到真实文件。缺文件时 Bun 抛的是 `ResolveMessage`。
//   3 导出面    具名 import 的每个名字，确实出现在被导入模块的导出里。
//               这一条抓的是「改名改了一半」：定义侧改了名、某个引用方没跟上。
// 第 2 类里的懒加载（import.meta.require）目标单独计数：全树 37% 的文件只靠懒加载
// 入边被引用，是搬动文件时最容易断的一类，报告里把它单列出来。
//
// 加 --runtime 时再多一类（真跑一次，见 ENTRIES）。
//
// 为什么要有这个脚本：这几类都是静态可判的，却只在运行时以一句无信息量的
// `BuildMessage` / `ResolveMessage` 出现，还要先卡 10 秒看门狗才报出来。
// CI 里跑一遍几秒钟，而且不执行树里的任何代码。
//
// 参数：
//   --runtime   额外把单独拉起的入口（见 ENTRIES）真跑一次 Worker，确认能加载。
//               这条依赖运行时环境，CI 里若偶发不稳可以直接去掉。

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, normalize, relative } from "node:path";

const ROOT = normalize(join(import.meta.dir, ".."));
// _source/ 是第三方库的原始源码（README：树外目标），且部分文件不可读，不参与检查。
const SKIP_DIRS = new Set(["node_modules", "_source", ".git"]);

// 单独拉起、不是从 cli.js 静态可达的入口。搬动文件时要保证它们旁边的依赖齐全。
const ENTRIES = ["src/plugins/functionHooks/hooks-worker/hooks-worker.js"];

const withRuntime = process.argv.includes("--runtime");

// ---------- 遍历 ----------

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".js")) out.push(p);
  }
  return out;
}

/** 匹配处所在行号（1 起），用来把问题报到 file:line。 */
const lineOf = (src, index) => src.slice(0, index).split("\n").length;

// ---------- 2 依赖边 ----------

const STATIC_SPEC =
  /(?:\bfrom\s*|^[ \t]*import\s*)["'](\.[^"']*)["']/gm;
const DYNAMIC_SPEC = /import\s*\(\s*["'](\.[^"']*)["']\s*\)/g;
const LAZY_SPEC = /import\.meta\.require\(\s*["'](\.[^"']*)["']\s*\)/g;

// 说明符得长得像个路径。`from '.command()'` 这种是第三方报错文案里的字符串，
// 不是 import —— 只靠 `from` 关键字会在压缩代码上误判。
const looksLikePath = (s) => /^\.[^\s()"'`]*$/.test(s);

// ---------- 3 导出面 ----------

const EXPORT_BLOCK = /^[ \t]*export\s*\{([^}]*)\}/gm;
const EXPORT_DECL =
  /^[ \t]*export\s+(?:async\s+)?(?:function\s*\*?|class|const|let|var)\s+([A-Za-z_$][\w$]*)/gm;
const EXPORT_DEFAULT = /^[ \t]*export\s+default\b/m;
// 兜底扫描：不锚行首，只求「这个文件里到底出现过哪些导出名」。
// 用途单一 —— 降低误报。宁可漏报一个坏边，也不要让 CI 因为漏认一条导出而变红。
const LOOSE_EXPORT_BLOCK = /export\s*\{([^}]*)\}/g;

const NAMED_IMPORT =
  /^[ \t]*import\s*\{([^}]*)\}\s*from\s*["']([^"']+)["']/gm;
const DEFAULT_IMPORT =
  /^[ \t]*import\s+([A-Za-z_$][\w$]*)\s*(?:,\s*\{[^}]*\})?\s*from\s*["']([^"']+)["']/gm;

/** `export { a, b as c }` 的每一段：导出名是 `as` 右侧（没有 `as` 就是它自己）。 */
function namesFromExportBlock(body, into) {
  for (const raw of body.split(",")) {
    const part = raw.trim();
    if (!part) continue;
    const as = part.split(/\s+as\s+/);
    into.add((as.length > 1 ? as[as.length - 1] : as[0]).trim());
  }
}

// ---------- 跑 ----------

const files = walk(ROOT);
const parseFailures = [];
const unresolved = [];
const notExported = [];
let edgeCount = 0;
let lazyCount = 0;

// 第一遍：导出面。
const exportsOf = new Map();
const looseExportsOf = new Map();
for (const f of files) {
  const src = readFileSync(f, "utf8");
  const names = new Set();
  const loose = new Set();
  for (const m of src.matchAll(EXPORT_BLOCK)) namesFromExportBlock(m[1], names);
  for (const m of src.matchAll(EXPORT_DECL)) names.add(m[1]);
  if (EXPORT_DEFAULT.test(src)) names.add("default");
  for (const m of src.matchAll(LOOSE_EXPORT_BLOCK)) namesFromExportBlock(m[1], loose);
  for (const m of src.matchAll(EXPORT_DECL)) loose.add(m[1]);
  if (EXPORT_DEFAULT.test(src)) loose.add("default");
  exportsOf.set(f, names);
  looseExportsOf.set(f, new Set([...names, ...loose]));
}

// 第二遍：解析 + 依赖边 + 导出面。
const transpiler = new Bun.Transpiler({ loader: "js" });
for (const f of files) {
  const src = readFileSync(f, "utf8");

  try {
    transpiler.transformSync(src);
  } catch (err) {
    parseFailures.push([f, String(err?.message ?? err).split("\n")[0]]);
    continue; // 解析都不过，后面的边不值得再报
  }

  const rel = relative(ROOT, f);
  const resolve = (spec) => normalize(join(dirname(f), spec));

  for (const m of src.matchAll(STATIC_SPEC)) {
    edgeCount++;
    const spec = m[1];
    if (!looksLikePath(spec)) continue;
    const target = resolve(spec);
    if (!existsSync(target)) {
      unresolved.push([rel, lineOf(src, m.index), spec]);
    }
  }
  for (const m of src.matchAll(DYNAMIC_SPEC)) {
    edgeCount++;
    const spec = m[1];
    if (!looksLikePath(spec)) continue;
    if (!existsSync(resolve(spec))) unresolved.push([rel, lineOf(src, m.index), spec]);
  }
  for (const m of src.matchAll(LAZY_SPEC)) {
    edgeCount++;
    lazyCount++;
    const spec = m[1];
    if (!looksLikePath(spec)) continue;
    if (!existsSync(resolve(spec))) unresolved.push([rel, lineOf(src, m.index), spec]);
  }

  const check = (spec, names, where) => {
    if (!spec.startsWith(".") || !looksLikePath(spec)) return;
    const target = resolve(spec);
    if (!existsSync(target)) return; // 已由依赖边检查报过
    // 目标不在这棵被检查的树里（如 `_source/` 下的第三方源码），没有导出面可比。
    if (!exportsOf.has(target)) return;
    const exported = exportsOf.get(target);
    const loose = looseExportsOf.get(target);
    for (const nm of names) {
      if (!nm) continue;
      if (exported.has(nm) || loose.has(nm)) continue;
      notExported.push([rel, where, nm, relative(ROOT, target)]);
    }
  };

  for (const m of src.matchAll(NAMED_IMPORT)) {
    const names = m[1]
      .split(",")
      .map((s) => s.trim().replace(/^type\s+/, "").split(/\s+as\s+/)[0].trim())
      .filter(Boolean);
    check(m[2], names, lineOf(src, m.index));
  }
  for (const m of src.matchAll(DEFAULT_IMPORT)) {
    check(m[2], ["default"], lineOf(src, m.index));
  }
}

// ---------- 可选的运行时入口加载 ----------

async function loadEntry(rel) {
  const path = join(ROOT, rel);
  if (!existsSync(path)) return `入口不存在：${rel}`;
  const { Worker } = await import("node:worker_threads");
  return await new Promise((done) => {
    let settled = false;
    const finish = (msg) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      w.terminate();
      done(msg);
    };
    const w = new Worker(path);
    const timer = setTimeout(() => finish(`30s 内既没有 online 也没有 error：${rel}`), 30_000);
    w.on("online", () => finish(null));
    w.on("error", (e) => finish(`${rel} 加载失败：${e?.name ?? ""} ${e?.message ?? e}`));
  });
}

const runtimeFailures = [];
if (withRuntime) {
  for (const e of ENTRIES) {
    const err = await loadEntry(e);
    if (err) runtimeFailures.push(err);
  }
}

// ---------- 报告 ----------

const say = (s = "") => process.stdout.write(s + "\n");
const stat = (f) => statSync(f).size;

say(`根目录 ${relative(process.cwd(), ROOT) || "."}`);
say(
  `文件 ${files.length} 个 · ${(files.reduce((n, f) => n + stat(f), 0) / 1e6).toFixed(1)} MB` +
    ` · 依赖边 ${edgeCount} 条（其中懒加载 ${lazyCount} 条）`,
);

let failed = false;

if (parseFailures.length) {
  failed = true;
  say(`\n[1] 解析失败 ${parseFailures.length} 个：`);
  for (const [f, msg] of parseFailures) say(`    ${relative(ROOT, f)}\n        ${msg}`);
} else say("[1] 解析        通过");

if (unresolved.length) {
  failed = true;
  say(`\n[2] 相对依赖边落不到文件 ${unresolved.length} 条：`);
  for (const [f, line, spec] of unresolved) say(`    ${f}:${line}  ->  ${spec}`);
} else say("[2] 依赖边        通过（含懒加载目标）");

if (notExported.length) {
  failed = true;
  say(`\n[3] 具名 import 在被导入模块里没有对应导出 ${notExported.length} 条：`);
  for (const [f, line, nm, tgt] of notExported) say(`    ${f}:${line}  ${nm}  <-  ${tgt}`);
} else say("[3] 导出面        通过");

if (withRuntime) {
  if (runtimeFailures.length) {
    failed = true;
    say(`\n[4] 单独入口加载失败：`);
    for (const m of runtimeFailures) say(`    ${m}`);
  } else say("[4] 单独入口      通过（hooks worker 已加载）");
}

say(failed ? "\n有问题。" : "\n全部通过。");
process.exit(failed ? 1 : 0);
