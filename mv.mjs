#!/usr/bin/env bun
// 项目内的 mv —— 一条命令完成「搬文件/目录 + 重写全树引用 + 同步索引 + 验证」。
//
//   bun mv <源> <目标> [<源> <目标> ...] [选项]
//
// 选项：
//   --dry               只校验 + 预演，不落盘
//   --full              追加运行时闸门（默认只跑静态闸门）
//   --module <名>       目标目录的索引模块名（默认沿用文件原来的 module）
//   --tier <n>          目标目录的索引层级（0–3，默认沿用原来的 tier）
//   --revert            撤销最近一次搬家
//   --manifest <路径>   配合 --revert 指定撤销哪一次；缺省用最近一次
//
// **本脚本不实现任何路径重写逻辑** —— 它只是 `.analysis/move/move.mjs` 的前端：
// 把路径对拼成 plan.json，再按序跑既有的 move → verify → 三道闸门。
// 三条解析基准（相对引用方 / 相对 hub / 随行资源）的判定继续只有一份实现；
// 重写逻辑一旦有第二份，就是 bug 农场。
//
// 落盘前由 move.mjs 自己再校验一遍，所以这里的前置检查只为了让报错更早、更直白。

import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const MOVE_DIR = join(ROOT, ".analysis/move");
const WORK = join(MOVE_DIR, ".work/mv");

/** 与 `.analysis/move/lib.mjs:21` 的 SKIP 保持一致：这些目录不是被改造的树的一部分。 */
const SKIP = new Set(["node_modules", "_source", ".git", ".analysis"]);

/** 解释器按仓库既有约定分两层（见 README 的命令表与 CI）。 */
const NODE = "node"; // move.mjs / verify.mjs：只用到 node:fs/node:path
const BUN = "bun";   // 三道闸门：check-imports.mjs 硬依赖 Bun.Transpiler

// ---------------------------------------------------------------- 参数

const USAGE = `用法:
  bun mv <源> <目标> [<源> <目标> ...] [选项]
  bun mv --revert [--manifest <路径>]

选项:
  --dry               只校验 + 预演，不落盘
  --full              追加运行时闸门（默认只跑静态闸门）
  --module <名>       目标目录的索引模块名
  --tier <n>          目标目录的索引层级（0–3）
  --revert            撤销最近一次搬家
  --manifest <路径>   配合 --revert 指定撤销哪一次；缺省用最近一次
                      （撤销过的不会自动再撤销一次 —— 那要显式指到它的 manifest）

例子:
  bun mv "02-功能模块/自托管Runner/SELF_HOSTED_RUNNER_TOOLS.54hpaec5.js" \\
         "04-tools/SelfHostedRunnerTools.js"`;

function die(msg) {
  console.error(`mv: ${msg}`);
  process.exit(2);
}

const opts = { dry: false, full: false, revert: false, manifest: null, module: null, tier: undefined };
const args = [];
{
  const av = process.argv.slice(2);
  for (let i = 0; i < av.length; i++) {
    const a = av[i];
    if (a === "--dry") opts.dry = true;
    else if (a === "--full") opts.full = true;
    else if (a === "--revert") opts.revert = true;
    else if (a === "--module") { opts.module = av[++i]; if (!opts.module) die("--module 后面要跟模块名"); }
    else if (a === "--tier") {
      opts.tier = Number(av[++i]);
      if (!Number.isInteger(opts.tier) || opts.tier < 0 || opts.tier > 3) die("--tier 需要是 0–3 的整数");
    } else if (a === "--manifest") { opts.manifest = av[++i]; if (!opts.manifest) die("--manifest 后面要跟路径"); }
    else if (a === "-h" || a === "--help") { console.log(USAGE); process.exit(0); }
    else if (a.startsWith("-") && a !== "-") die(`未知选项: ${a}\n\n${USAGE}`);
    else args.push(a);
  }
}

// ---------------------------------------------------------------- 路径

/** 转成 plan 里的相对路径（正斜杠）；越界或被 SKIP 的目录一律拒绝。 */
function toRel(p) {
  const abs = resolve(process.cwd(), p);
  if (abs !== ROOT && !abs.startsWith(ROOT + sep)) die(`路径不在项目内: ${p}\n  项目根是 ${ROOT}`);
  const rel = relative(ROOT, abs);
  const segs = rel.split(sep);
  if (segs.some((s) => SKIP.has(s))) die(`路径落在被排除的目录里（${[...SKIP].join(" / ")}）: ${rel}`);
  return segs.join("/");
}

/** 目标目录：源是目录时目标本身就是目录，源是文件时取目标的父目录。 */
const destDirOf = (fromAbs, toRel) => (statSync(fromAbs).isDirectory() ? toRel : dirname(toRel));

// ---------------------------------------------------------------- 跑外部脚本

const results = [];
function step(label, cmd, cmdArgs) {
  const r = spawnSync(cmd, cmdArgs, {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  const ok = r.status === 0 && !r.error;
  const out = ((r.stdout ?? "") + (r.stderr ?? "")).trimEnd();
  results.push({ label, ok, out });
  console.log(`\n── ${ok ? "✓" : "✗"} ${label}`);
  if (r.error) console.log(`   ${r.error.message}`);
  if (out) console.log(out.split("\n").map((l) => "   " + l).join("\n"));
  return ok;
}

/** 缺解释器时给一句人话，而不是 spawn ENOENT。 */
function requireBin(cmd) {
  const r = spawnSync(cmd, ["--version"], { encoding: "utf8" });
  if (r.error) die(`找不到 ${cmd}（${r.error.message}）`);
}

// ---------------------------------------------------------------- 运行时探针
//
// 两道运行时闸门都做**前后 A/B**，不跟硬编码的期望值比 —— mv 不该改变 CLI 的
// 可观测行为，所以「搬之前」就是这次搬家的正确参照。硬编码 md5 会在任何一次
// 有意的内容改动后误报，那种假警报最后只会让人忽略这道闸门。

function cleanEnv() {
  const e = { ...process.env };
  delete e.AI_AGENT; // 设成 claude-code_* 会让 ensureClientAgentEnv() 短路，掩盖这条路径上的 bug
  return e;
}

/** `bun cli.js --help`：行数与 md5。 */
function helpProbe() {
  const r = spawnSync(BUN, ["cli.js", "--help"], { cwd: ROOT, encoding: "utf8", env: cleanEnv(), maxBuffer: 64 * 1024 * 1024 });
  if (r.error) return { ok: false, why: r.error.message };
  if (r.status !== 0) return { ok: false, why: `退出码 ${r.status}` };
  const out = r.stdout ?? "";
  return {
    ok: true,
    lines: out.split("\n").length - (out.endsWith("\n") ? 1 : 0),
    md5: createHash("md5").update(out).digest("hex"),
  };
}

/**
 * 退出路径：沙箱 HOME、无 API key、stdin 为空。
 * 期望退出码 1 且 stderr 是「Input must be provided … when using --print」——
 * **那条错误就是预期输出，不是失败**（见 README 的运行时验证一节）。
 * 这道检查是唯一能抓「自引用 import 死锁」的：--help/--version 走不到 shutdown。
 */
function exitProbe() {
  const home = mkdtempSync(join(tmpdir(), "mv-home-"));
  const r = spawnSync(BUN, ["cli.js"], {
    cwd: ROOT,
    encoding: "utf8",
    input: "",
    env: { PATH: process.env.PATH, HOME: home },
    timeout: 120_000,
    maxBuffer: 64 * 1024 * 1024,
  });
  if (r.error) return { ok: false, why: r.error.message };
  const err = r.stderr ?? "";
  const ok = r.status === 1 && /Input must be provided/.test(err);
  return { ok, why: ok ? `exit=1 · ${err.trim().split("\n")[0]}` : `exit=${r.status} · ${err.trim().split("\n")[0] || "(stderr 为空)"}` };
}

// ---------------------------------------------------------------- plan

/**
 * 最近一次**还没撤销过**的搬家 manifest。
 *
 * 撤销本身也是一次搬家（走的是同一条链），同样会留下 manifest，所以两种都要跳过：
 *   · `mvRevert`   —— 这份 manifest 是一次撤销留下的
 *   · `mvReverted` —— 这份 manifest 记录的搬家已经被撤销掉了
 * 不跳过的后果分别是：连按两次 `--revert` 会把搬走的东西又装回去；或者第二次去撤销
 * 一份早已撤销的记录，报出一句莫名其妙的「源不存在」。想撤销某次撤销，请显式
 * `--manifest` 指到它 —— 显式指定不受这个过滤影响。
 */
function latestManifest() {
  if (!existsSync(WORK)) return null;
  const all = readdirSync(WORK).filter((f) => f.endsWith("-manifest.json")).sort().reverse();
  for (const f of all) {
    const p = join(WORK, f);
    try {
      const m = JSON.parse(readFileSync(p, "utf8"));
      if (m.mvRevert || m.mvReverted) continue;
    } catch {
      continue; // 读不动/半截的 manifest 不当候选
    }
    return p;
  }
  return null;
}

/** 给 manifest 打个标记。标不上不影响搬家本身。 */
function markManifest(p, field) {
  try {
    const m = JSON.parse(readFileSync(p, "utf8"));
    m[field] = true;
    writeFileSync(p, JSON.stringify(m, null, 1));
  } catch { /* 忽略 */ }
}

/** `--revert`：把 manifest 的 fileMap 反转 —— 不另写撤销逻辑，回到同一条链。 */
function revertPlan() {
  const mf = opts.manifest ? resolve(process.cwd(), opts.manifest) : latestManifest();
  if (!mf || !existsSync(mf)) {
    die("找不到可撤销的搬家（.work/mv/ 下没有可用的 *-manifest.json，也不存在你给的 --manifest 路径）"
      + "\n  撤销过的不会自动再撤销一次 —— 要撤销某次撤销，请显式 --manifest 指到它");
  }
  const m = JSON.parse(readFileSync(mf, "utf8"));
  if (!m.fileMap?.length) die(`manifest 里没有 fileMap: ${mf}`);
  console.log(`撤销 ${mf}`);
  console.log(`  共 ${m.fileMap.length} 个文件`);
  // fileMap 是 [[旧, 新], …]（仓库相对路径），反转即搬回
  return { plan: { moves: m.fileMap.map(([from, to]) => ({ from: to, to: from })) }, source: mf };
}

function forwardPlan() {
  if (args.length === 0) die(`没有给出源和目标\n\n${USAGE}`);
  if (args.length % 2) die(`源和目标要成对出现，现在给了 ${args.length} 个路径\n\n${USAGE}`);

  const pairs = [];
  for (let i = 0; i < args.length; i += 2) {
    const from = toRel(args[i]);
    const to = toRel(args[i + 1]);
    const fromAbs = join(ROOT, from);
    if (!existsSync(fromAbs)) die(`源不存在: ${from}`);
    if (from === to) die(`源与目标相同: ${from}`);
    if (from.toLowerCase() === to.toLowerCase()) die(`源与目标只差大小写（macOS 上等于原地改名）: ${from} -> ${to}`);
    if (existsSync(join(ROOT, to))) die(`目标已存在: ${to}`);
    pairs.push({ from, to, fromAbs });
  }

  const plan = { moves: pairs.map(({ from, to }) => ({ from, to })) };

  // 索引归属：缺省**不写 modules**，让 move.mjs 走兜底（目标目录有索引条目就按多数票，
  // 没有就沿用文件自己原来的 module/tier）。给了 --module/--tier 才覆盖 ——
  // 覆盖作用于本次所有目标目录。
  if (opts.module || opts.tier !== undefined) {
    plan.modules = {};
    for (const { fromAbs, to } of pairs) {
      const d = destDirOf(fromAbs, to);
      plan.modules[d] = {};
      if (opts.module) plan.modules[d].module = opts.module;
      if (opts.tier !== undefined) plan.modules[d].tier = opts.tier;
    }
    for (const [d, spec] of Object.entries(plan.modules)) {
      console.log(`索引归属覆盖: ${d} -> ${JSON.stringify(spec)}`);
    }
  }
  return { plan, source: null };
}

// ---------------------------------------------------------------- 主流程

requireBin(NODE);
requireBin(BUN);
mkdirSync(WORK, { recursive: true });

if (opts.revert && args.length) die("--revert 不接受源/目标参数");
const built = opts.revert ? revertPlan() : forwardPlan();

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const planPath = join(WORK, `${stamp}-plan.json`);
const manifestPath = join(WORK, `${stamp}-manifest.json`);
writeFileSync(planPath, JSON.stringify(built.plan, null, 1));

const nFiles = built.plan.moves.length;
console.log(`${opts.revert ? "撤销" : "搬家"}: ${nFiles} 条计划 · plan -> ${relative(ROOT, planPath)}`);

// 预演：move.mjs 的 --dry 走完全部校验后才打印，且不落盘
if (opts.dry) {
  const ok = step("预演（move.mjs --dry）", NODE, [join(MOVE_DIR, "move.mjs"), planPath, manifestPath, "--dry"]);
  console.log(ok ? "\n预演结束 —— 什么都没写。" : "\n预演失败。");
  process.exit(ok ? 0 : 1);
}

// 运行时闸门的前置探针（搬之前 = 这次搬家的正确参照）
let before = null;
if (opts.full) {
  process.stdout.write("\n采集搬前基线（--help / 退出路径）…");
  const h = helpProbe();
  const e = exitProbe();
  before = { help: h, exit: e };
  console.log(h.ok && e.ok ? " 完成" : " 有探针本身就没跑起来");
  if (!h.ok || !e.ok) die(`搬前基线就取不到，先修树再搬：--help ${h.why ?? ""} · 退出路径 ${e.why ?? ""}`);
  console.log(`   --help  ${h.lines} 行 · md5 ${h.md5}`);
  console.log(`   退出路径 ${e.why}`);
}

// 1) 搬 —— 三类基准重写 + 索引同步 + 随行资源
if (!step("搬家（move.mjs）", NODE, [join(MOVE_DIR, "move.mjs"), planPath, manifestPath])) {
  console.log("\n搬家失败 —— move.mjs 在落盘前就退出了，树没有动。");
  process.exit(1);
}
if (opts.revert) {
  markManifest(manifestPath, "mvRevert");      // 这份是撤销留下的
  if (built.source) markManifest(built.source, "mvReverted"); // 它撤掉的那份别再被自动选中
}

// 2) 一致性证明（往返 / 文件集合 / 导出面 / 自由标识符 / 字节核算）
let ok = step("一致性验证（verify.mjs）", NODE, [join(MOVE_DIR, "verify.mjs"), manifestPath]);

// 3) 三道静态闸门 —— 判定独立于改造代码
ok = step("解析 / 依赖边 / 导出面（静态）", BUN, [join(ROOT, ".analysis/check-imports.mjs")]) && ok;
ok = step("索引与磁盘一致", BUN, [join(MOVE_DIR, "check-index.mjs")]) && ok;
ok = step("两类懒加载解析基准", BUN, [join(MOVE_DIR, "check-lazy-base.mjs")]) && ok;

// 4) 运行时闸门（--full）：真跑一次树，并跟搬前基线比
if (opts.full) {
  ok = step("hooks worker 单独入口加载", BUN, [join(ROOT, ".analysis/check-imports.mjs"), "--runtime"]) && ok;

  const h = helpProbe();
  const same = h.ok && h.lines === before.help.lines && h.md5 === before.help.md5;
  console.log(`\n── ${same ? "✓" : "✗"} --help 与搬前逐字节一致`);
  console.log(`   搬前 ${before.help.lines} 行 / ${before.help.md5}`);
  console.log(`   搬后 ${h.ok ? `${h.lines} 行 / ${h.md5}` : `探针失败: ${h.why}`}`);
  ok = same && ok;

  const e = exitProbe();
  console.log(`\n── ${e.ok ? "✓" : "✗"} 退出路径`);
  console.log(`   ${e.why}`);
  ok = e.ok && ok;
}

// ---------------------------------------------------------------- 汇总

const failed = results.filter((r) => !r.ok);
if (!ok) {
  console.log(`\n✗ ${failed.length} 道闸门没通过：${failed.map((f) => f.label).join(" · ")}`);
  console.log("  树**已经搬动**了。原样撤销：");
  console.log(`    bun mv --revert --manifest ${relative(ROOT, manifestPath)}`);
  process.exit(1);
}

console.log(`\n✓ 全部通过（${results.length} 项）· 搬家计划与 manifest 在 ${relative(ROOT, WORK)}/`);
if (!opts.revert) {
  console.log(`  撤销：bun mv --revert --manifest ${relative(ROOT, manifestPath)}`);
  console.log("  提交前自己 review 一下：git status / git diff");
} else {
  console.log("  已回到搬家前的位置。");
}
