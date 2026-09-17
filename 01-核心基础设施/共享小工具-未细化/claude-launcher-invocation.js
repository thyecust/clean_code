// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { isBunStandaloneExecutable } from "../设置-配置/chunk-zqr5ctyf.js";
import { getLauncherArgv } from "../核心工具-进程与信号/process-wrapper-launcher.js";
import { getClaudeVersionsDir, getLocalBinDir } from "./user-directories.js";
import { pg } from "../../00-第三方库/semver/chunk-jm5cswvd.js";
import { toESM } from "./chunk-2c9tjhwd.js";
var o = toESM(pg(), 1);
import { readdir, stat as p } from "fs/promises";
import { join as a, sep as f } from "path";
function isRunningInstalledBinary() {
  if (!isBunStandaloneExecutable()) return !1;
  let r = getClaudeVersionsDir() + f;
  return process.execPath.startsWith(r);
}
function resolveWrappedClaudeInvocation(r = {}) {
  return applyProcessWrapper(resolveClaudeInvocation(r));
}
function resolveClaudeInvocation(r = {}) {
  if (!r.pinToCurrentBinary && isRunningInstalledBinary()) {
    let t = getInstalledClaudePath();
    return { cmd: t, prefixArgs: [], target: t };
  }
  if (isBunStandaloneExecutable())
    return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  let e = process.argv[1];
  if (!e)
    return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  return { cmd: process.execPath, prefixArgs: [e], target: e };
}
function getInstalledClaudePath() {
  return a(getLocalBinDir(), "claude");
}
function applyProcessWrapper(r) {
  let e = getLauncherArgv();
  if (e.length === 0 || r.cmd === e[0]) return r;
  return {
    cmd: e[0],
    prefixArgs: [...e.slice(1), r.cmd, ...r.prefixArgs],
    target: r.target,
  };
}
async function findInstalledVersionBinary() {
  let r = getClaudeVersionsDir(),
    e;
  try {
    e = await readdir(r);
  } catch {
    return null;
  }
  let t = e
    .filter((n) => !/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n) && o.valid(n))
    .sort(o.rcompare);
  for (let n of t) {
    let i = a(r, n);
    try {
      let s = await p(i);
      if (s.isFile() && s.size > 0) return i;
    } catch {}
  }
  return null;
}
export { isRunningInstalledBinary, resolveWrappedClaudeInvocation, resolveClaudeInvocation, getInstalledClaudePath, applyProcessWrapper, findInstalledVersionBinary };
