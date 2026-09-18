// 收敛后的路径闸门。逐条打印，任一不过退出码 1。
//
//   node .analysis/stdlib/gate.mjs           # 静态 + 运行时
//   node .analysis/stdlib/gate.mjs --static  # 只跑静态（秒级）
//
// 两道运行时闸门都跟**改动前的基线** A/B，不跟硬编码值比：
//   --help 的行数与 md5 必须逐字节不变（本次不碰任何字符串字面量，这是最强的等价性证据）；
//   退出路径探针是唯一能抓「自引用 import 死锁」的一道 —— --help/--version 走不到 shutdown。
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, readFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ROOT } from "../rename/paths.mjs";
import { WORK } from "./run.mjs";

const BUN = process.env.BUN || "bun";
const cleanEnv = () => {
  const e = { ...process.env };
  delete e.AI_AGENT; // 设成 claude-code_* 会让 ensureClientAgentEnv() 短路，掩盖这条路径上的 bug
  return e;
};

let failures = 0;
const check = (label, ok, detail) => {
  console.log(`${ok ? "✓" : "✗"} ${label}${detail ? " —— " + detail : ""}`);
  if (!ok) failures++;
};

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { cwd: ROOT, encoding: "utf8", env: cleanEnv(), maxBuffer: 64 * 1024 * 1024, ...opts });
  return { status: r.status, stdout: r.stdout ?? "", stderr: r.stderr ?? "", error: r.error };
}

// ---------------------------------------------------------------- 静态闸门
const staticGates = [
  [BUN, [".analysis/check-imports.mjs"], /(\d+) 个文件/],
  [BUN, [".analysis/move/check-index.mjs"], null],
  [BUN, [".analysis/move/check-lazy-base.mjs"], null],
];
for (const [cmd, args, re] of staticGates) {
  const r = run(cmd, args);
  const first = (r.stdout + r.stderr).trim().split("\n").filter((l) => l.trim());
  const bad = /失败 [1-9]|✗|FAIL|error/i.test(r.stdout + r.stderr);
  check(args[0].split("/").pop(), r.status === 0 && !bad, first.slice(-2).join(" · ").slice(0, 160));
  const m = re && (r.stdout + r.stderr).match(re);
  if (m) console.log(`    文件数基准：${m[1]}（应保持 1435）`);
}

// 兼容 manifest 的四项校验（往返 / 解析 / 导出面 / 未定义标识符）。
// 快照先重建：备份里是「改动前」原文，所以「有备份的用备份、其余用当前树」
// 随时都能还原出改动前的全树快照，跨批次累加也成立。
const mpath = join(WORK, "manifest.json");
if (existsSync(mpath)) {
  run("node", [".analysis/stdlib/manifest.mjs"]);
  run("node", [".analysis/stdlib/snapshot.mjs"]);
  const r = run("node", [".analysis/rename/verify.mjs", mpath, join(WORK, "backup")]);
  const tail = (r.stdout + r.stderr).trim().split("\n");
  const fails = tail.filter((l) => l.trim().startsWith("✗"));
  check("rename/verify.mjs（往返·解析·导出面·未定义标识符）", r.status === 0 && !fails.length, fails[0]?.slice(0, 140) ?? "五项全过");
} else {
  console.log("· 跳过 rename/verify.mjs（还没有 manifest）");
}

if (process.argv.includes("--static")) {
  console.log(failures ? `\n✗ ${failures} 项未过` : "\n✓ 静态闸门全过");
  process.exit(failures ? 1 : 0);
}

// ---------------------------------------------------------------- 运行时闸门
const helpNow = run(BUN, ["cli.js", "--help"]);
const out = helpNow.stdout;
const lines = out.split("\n").length - (out.endsWith("\n") ? 1 : 0);
const md5 = createHash("md5").update(out).digest("hex");
const baseFile = join(WORK, "help.before.txt");
let baseOk = true;
let detail = `${lines} 行 · ${md5}`;
if (existsSync(baseFile)) {
  const base = readFileSync(baseFile, "utf8");
  baseOk = base === out;
  detail += baseOk ? "（与基线逐字节相同）" : "（与基线不一致！）";
}
check("bun cli.js --help", helpNow.status === 0 && lines === 258 && md5 === "9b491334c31a426dd7e35393f0a9aaaa" && baseOk, detail);

const ver = run(BUN, ["cli.js", "--version"]);
check("bun cli.js --version", ver.status === 0 && /2\.1\.263 \(Claude Code\)/.test(ver.stdout), ver.stdout.trim().slice(0, 60));

const bogus = run(BUN, ["cli.js", "--nonexistent-flag-xyz"]);
check("未知参数 exit=1", bogus.status === 1, `exit=${bogus.status}`);

const home = mkdtempSync(join(tmpdir(), "stdlib-home-"));
const ex = spawnSync(BUN, ["cli.js"], {
  cwd: ROOT,
  encoding: "utf8",
  input: "",
  env: { PATH: process.env.PATH, HOME: home },
  timeout: 180_000,
  maxBuffer: 64 * 1024 * 1024,
});
const err = ex.stderr ?? "";
check("退出路径（自引用死锁探针）", ex.status === 1 && /Input must be provided/.test(err), `exit=${ex.status} · ${err.trim().split("\n")[0]?.slice(0, 90) || "(stderr 空)"}`);

console.log(failures ? `\n✗ ${failures} 项未过` : "\n✓ 闸门全过");
process.exit(failures ? 1 : 0);
