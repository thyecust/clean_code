// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "../共享小工具-未细化/async-timeout-utils.js";
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { getFsSurface } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Rxt } from "../设置-配置/chunk-zqr5ctyf.js";
import { execSyncWithDefaults_BLOCKS_EVENT_LOOP_WILL_FREEZE_UI_MAKE_SURE_YOU_KNOW_WHAT_YOU_ARE_DOING, execFileNoThrowWithCwd } from "../../02-功能模块/Git-Worktree/git-exec-hardening.js";
import { getProcStartTime, getProcState, isExitedProcessState } from "../共享小工具-未细化/linux-proc-stat.js";
import { getCurrentPlatform } from "../核心工具-路径与平台/platform-detection.js";
function getEnvVarCaseInsensitive(e, t) {
  if (t in e) return e[t];
  if (getCurrentPlatform() !== "windows") return;
  let n = Object.keys(e).find((r) => r.toUpperCase() === t.toUpperCase());
  return n === void 0 ? void 0 : e[n];
}
class l {
  #e = !1;
  get forcedUnavailable() {
    return this.#e;
  }
  forceUnavailable(e) {
    this.#e = e;
  }
}
var N = new l();
function u() {
  return !1;
}
async function readLinuxProcState(e) {
  if (getCurrentPlatform() !== "linux" && getCurrentPlatform() !== "wsl") return;
  if (!p(e)) return;
  try {
    let t = await getFsSurface().readFile(`/proc/${e}/stat`, { encoding: "utf8" });
    return getProcState(t);
  } catch {
    return;
  }
}
async function isExitedProcessAsync(e) {
  return isExitedProcessState(await readLinuxProcState(e));
}
var S = 2147483647;
function p(e) {
  return Number.isInteger(e) && e > 1 && e <= S;
}
function isProcessProvablyGone(e) {
  if (!p(e)) return !1;
  try {
    return (process.kill(e, 0), !1);
  } catch (t) {
    return A(t) === "ESRCH";
  }
}
var w = 16;
async function looksLikeFullHostProcessTable() {
  let e = getCurrentPlatform();
  if (e !== "linux" && e !== "wsl") return !0;
  let t = getFsSurface(),
    n = await t.readlink("/proc/self").catch(() => null);
  if (n === null || n !== String(process.pid)) return !1;
  let r = await t.readdir("/proc").catch(() => null);
  if (!r) return !1;
  return r.filter((i) => /^\d+$/.test(i.name)).length >= w;
}
function sigtermThenKill(e, t) {
  let n = e.filter((r) => Math.abs(r) > 1);
  for (let r of n) {
    try {
      process.kill(r, "SIGTERM");
    } catch {
      continue;
    }
    return (
      setTimeout(
        (o, i, s) => {
          if (!isSameProcess(i, s)) return;
          try {
            process.kill(o, "SIGKILL");
          } catch {}
        },
        5000,
        r,
        Math.abs(n[0]),
        t,
      ).unref(),
      !0
    );
  }
  return !1;
}
async function reapDetachedRepl(e, t, n = "SIGTERM") {
  if (!e || e <= 1 || t === void 0) return !1;
  if ((await f(e, t)) === "other") return !1;
  try {
    process.kill(-e, n);
  } catch {
    return !1;
  }
  if (n !== "SIGKILL")
    setTimeout(
      (r, o) => {
        f(r, o).then((i) => {
          if (i === "other") return;
          try {
            process.kill(-r, "SIGKILL");
          } catch {}
        });
      },
      5000,
      e,
      t,
    ).unref();
  return !0;
}
async function f(e, t) {
  let n = await captureProcessStartTimeAsync(e);
  if (n !== void 0) return startTokensEqualOrCrossFormat(t, n) ? "same" : "other";
  try {
    return (process.kill(e, 0), "other");
  } catch (r) {
    return A(r) === "ESRCH" ? "gone" : "other";
  }
}
function getProcessStartTokenLinuxSync(e) {
  return;
}
function getAncestorPidsLinuxSync(e, t = 12) {
  return [];
}
async function getAncestorPidsAsync(e, t = 10) {
  return (await getAncestorPidsCheckedAsync(e, t)).ancestors;
}
async function getAncestorPidsCheckedAsync(e, t = 10) {
  let n = `pid=${String(e)}; for i in $(seq 1 ${t}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ]; then echo FAIL; exit 0; fi; if [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then echo END; exit 0; fi; echo $ppid; pid=$ppid; done`,
    r = await execFileNoThrowWithCwd("sh", ["-c", n], { timeout: 3000 }),
    o = (r.stdout ?? "")
      .trim()
      .split(
        `
`,
      )
      .filter(Boolean);
  return {
    ancestors: o
      .filter((i) => i !== "END" && i !== "FAIL")
      .map((i) => parseInt(i, 10))
      .filter((i) => !isNaN(i)),
    readFailed: r.code !== 0 || o.at(-1) === "FAIL",
    truncated: r.code === 0 && o.at(-1) !== "END" && o.at(-1) !== "FAIL",
  };
}
function getProcessCommand(e) {
  try {
    let n = `ps -o command= -p ${String(e)}`,
      r = execSyncWithDefaults_BLOCKS_EVENT_LOOP_WILL_FREEZE_UI_MAKE_SURE_YOU_KNOW_WHAT_YOU_ARE_DOING(n, { timeout: 1000 });
    return r ? r.trim() : null;
  } catch {
    return null;
  }
}
function getProcessStartTime(e) {
  try {
    let t = execSyncWithDefaults_BLOCKS_EVENT_LOOP_WILL_FREEZE_UI_MAKE_SURE_YOU_KNOW_WHAT_YOU_ARE_DOING(`LC_ALL=C TZ=UTC ps -o lstart= -p ${e}`, { timeout: 1000 });
    return t ? t.trim() : void 0;
  } catch {
    return;
  }
}
function isSameProcess(e, t) {
  if (t === void 0) return !0;
  return b(t, getProcessStartTime(e));
}
function startTokensEqualOrCrossFormat(e, t) {
  if (t === e) return !0;
  return !1;
}
function b(e, t) {
  return t === void 0 || t === e || y(e, t);
}
function y(e, t) {
  if (!u()) return !1;
  let n = Number(e),
    r = Number(t);
  return (
    Number.isFinite(n) &&
    Number.isFinite(r) &&
    n > 300000000000000000 !== r > 300000000000000000
  );
}
async function isSameProcessAsync(e, t) {
  if (t === void 0) return !0;
  return b(t, await getProcessStartTimeAsync(e));
}
async function provenSameProcessAsync(e, t) {
  let n = await getProcessStartTimeAsync(e, { skipCache: !0 });
  return n === void 0 ? void 0 : startTokensEqualOrCrossFormat(t, n);
}
class g {
  #e = void 0;
  get token() {
    return this.#e;
  }
  set(e) {
    return ((this.#e = e), e);
  }
  reset() {
    this.#e = void 0;
  }
}
var ownProcStartMemo = new g();
class h {
  #e = new Map();
  get(e) {
    return this.#e.get(e);
  }
  set(e, t) {
    this.#e.set(e, t);
  }
}
var T = new j(() => new h());
function ownProcStart() {
  return ownProcStartMemo.token ?? ownProcStartMemo.set(getProcessStartTime(process.pid));
}
async function ownProcStartAsync() {
  return ownProcStartMemo.token ?? ownProcStartMemo.set(await getProcessStartTimeAsync(process.pid));
}
function procIdentityOf(e) {
  if (u()) return e.procStart !== void 0 ? void 0 : e.procStartFt;
  return e.procStart;
}
function procIdentityFields(e) {
  return u()
    ? { procStart: void 0, procStartFt: e }
    : { procStart: e, procStartFt: void 0 };
}
var x = 60000,
  C = 5000;
async function getProcessStartTimeAsync(e, t) {
  let n = Date.now(),
    r = T.of(B().host);
  if (t?.env !== void 0) return m(e, t.env);
  if (!t?.skipCache) {
    let a = r.get(e),
      c = a?.miss ? C : x;
    if (a && n - a.at < c) return a.p;
  }
  let o = m(e),
    i = { at: n, p: o };
  r.set(e, i);
  let s = await o;
  if (s === void 0 && r.get(e) === i) i.miss = !0;
  return s;
}
var d = 250;
async function captureProcessStartTimeAsync(e) {
  let t = await getProcessStartTimeAsync(e, { skipCache: !0 });
  if (t !== void 0) return t;
  return (await sleep(d + Math.floor(Math.random() * d)), getProcessStartTimeAsync(e, { skipCache: !0 }));
}
async function m(e, t) {
  let n = t === void 0 ? {} : { env: t, extendEnv: !1 };
  try {
    let r = t === void 0 ? "ps" : Rxt("ps", getEnvVarCaseInsensitive(t, "PATH") ?? "");
    if (r === null) return;
    let o = await execFileNoThrowWithCwd(r, ["-o", "lstart=", "-p", String(e)], {
      timeout: 1000,
      ...n,
      env: { ...(t ?? process.env), LC_ALL: "C", TZ: "UTC" },
    });
    return o.code === 0 && o.stdout ? o.stdout.trim() : void 0;
  } catch {
    return;
  }
}
async function getProcessCreationTimeMsAsync(e) {
  try {
    let t = await execFileNoThrowWithCwd("ps", ["-o", "lstart=", "-p", String(e)], {
      timeout: 1000,
      env: { ...process.env, LC_ALL: "C", TZ: "UTC" },
    });
    if (t.code !== 0 || !t.stdout?.trim()) return null;
    let n = Date.parse(`${t.stdout.trim()} UTC`);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}
export {
  getEnvVarCaseInsensitive,
  readLinuxProcState,
  isExitedProcessAsync,
  isProcessProvablyGone,
  looksLikeFullHostProcessTable,
  sigtermThenKill,
  reapDetachedRepl,
  getProcessStartTokenLinuxSync,
  getAncestorPidsLinuxSync,
  getAncestorPidsAsync,
  getAncestorPidsCheckedAsync,
  getProcessCommand,
  getProcessStartTime,
  isSameProcess,
  startTokensEqualOrCrossFormat,
  isSameProcessAsync,
  provenSameProcessAsync,
  ownProcStartMemo,
  ownProcStart,
  ownProcStartAsync,
  procIdentityOf,
  procIdentityFields,
  getProcessStartTimeAsync,
  captureProcessStartTimeAsync,
  getProcessCreationTimeMsAsync,
};
