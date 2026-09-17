// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { isNonRegularPathErrno } from "../图片-截图-ComputerUse/computer-use-lock.js";
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { R, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { writeNewFileExclusive, writeNewFileAfterAbsenceCheck } from "../../01-核心基础设施/安全文件系统(FS加固)/atomic-file-write.js";
import { getClaudeConfigDir } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { provenSameProcessAsync, procIdentityOf, getProcessStartTimeAsync } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import {
  lstat,
  readFile,
  rename,
  rm as p,
  unlink,
} from "fs/promises";
import { uptime } from "os";
import { join as w } from "path";
async function terminateProcessGracefully(e, r = {}) {
  try {
    process.kill(e, "SIGTERM");
  } catch (o) {
    if (A(o) === "EPERM") return "eperm";
    return "exited";
  }
  let t = Date.now() + (r.gracefulMs ?? 2000);
  while (Date.now() < t) {
    try {
      process.kill(e, 0);
    } catch {
      return "exited";
    }
    await sleep(50);
  }
  return "timed-out";
}
var L = "daemon.lock";
function getDaemonLockPath() {
  return w(getClaudeConfigDir(), L);
}
function getDaemonLockStateKey() {
  return STORAGE_KEYS.state("daemon-lock");
}
function h(e) {
  return e === "EISDIR" || e === "ENXIO";
}
class k {
  logged = !1;
  markLogged() {
    if (this.logged) return !1;
    return ((this.logged = !0), !0);
  }
}
var D = new j(() => new k());
function E() {
  return D.of(B().host);
}
async function S() {
  let e = await lstat(getDaemonLockPath()).catch(() => {
    return;
  });
  return e !== void 0 && e.isSymbolicLink();
}
async function y(e) {
  let r = getDaemonLockPath(),
    t = await lstat(r).catch(() => {
      return;
    });
  if (t === void 0 || t.isFile()) return;
  let o = t.isDirectory()
    ? "directory"
    : t.isFIFO()
      ? "fifo"
      : t.isSocket()
        ? "socket"
        : t.isSymbolicLink()
          ? "symlink"
          : "other non-regular node";
  if (E().markLogged())
    logForDebugging(
      `[DaemonLock] ${o} at the lock path (${e}) \u2014 removing it as the legacy path does`,
      { level: "warn" },
    );
  await p(r, { recursive: !0, force: !0 }).catch(() => {});
}
var I = 65536;
async function acquireDaemonLock(e, r) {
  if (isHoverRestEnabled() && r !== void 0) {
    let t = () =>
        r.write(getDaemonLockStateKey(), jsonStringify(e, null, 2), {
          precondition: { type: "ifAbsent" },
          mode: 438 & ~process.umask(),
        }),
      o = await t();
    for (let i of [0, 1]) {
      if (o.ok) return !0;
      if (o.error.code === "AlreadyExists") return !1;
      let a = "telemetryCode" in o.error ? o.error.telemetryCode : void 0;
      if (o.error.code !== "Failed" || !isNonRegularPathErrno(a)) break;
      if (a === "ELOOP") {
        if (await S()) return !1;
        break;
      }
      if (i === 1) break;
      (await y(a), (o = await t()));
    }
    if (o.ok) return !0;
    throw new R(
      `[DaemonLock] Failed to acquire daemon lock: ${o.error.code}${"telemetryCode" in o.error && o.error.telemetryCode ? ` (${o.error.telemetryCode})` : ""}`,
      "[DaemonLock] v5 acquire write failed",
    );
  }
  try {
    return (await writeNewFileAfterAbsenceCheck(getDaemonLockPath(), jsonStringify(e, null, 2)), !0);
  } catch (t) {
    if (A(t) === "EEXIST") return !1;
    throw t;
  }
}
async function markDaemonLockBgDisabled(e, r) {
  let t = await readDaemonLock(r);
  if (!t || t.pid !== e.pid || t.startedAt !== e.startedAt) return;
  await replaceDaemonLock({ ...t, bgDisabled: !0 }, r);
}
async function readDaemonLock(e) {
  let r;
  if (e) {
    let o = await e.read([getDaemonLockStateKey()]);
    if (!o.ok) {
      if (!(
        o.error.code === "Failed" &&
        (o.error.telemetryCode === "ENXIO" ||
          o.error.telemetryCode === "EFBIG" ||
          o.error.telemetryCode === "ELOOP" ||
          o.error.telemetryCode === "ENAMETOOLONG")
      ))
        throw new R(
          `[DaemonLock] Failed to read daemon lock: ${o.error.code}${"telemetryCode" in o.error && o.error.telemetryCode ? ` (${o.error.telemetryCode})` : ""}`,
          "[DaemonLock] v5 lock read failed",
        );
      let c = await e.delete(getDaemonLockStateKey());
      if (!c.ok && c.error.code === "Failed") {
        let u = "telemetryCode" in c.error ? c.error.telemetryCode : void 0;
        if (h(u)) await y(u);
      }
      return null;
    }
    let i = o.value.items[0];
    if (!i.found) return null;
    if (i.totalBytes > I) return (await e.delete(getDaemonLockStateKey()), null);
    r = Buffer.from(i.value).toString("utf8");
    let a = xt(r, !1);
    if (a && typeof a === "object") {
      let s = a;
      if (typeof s.pid === "number" && typeof s.version === "string") return a;
    }
    return null;
  }
  try {
    let o = await lstat(getDaemonLockPath());
    if (!o.isFile() || o.size > 65536)
      return (
        await p(getDaemonLockPath(), { recursive: !0, force: !0 }).catch(() => {}),
        null
      );
    r = await readFile(getDaemonLockPath(), "utf8");
  } catch (o) {
    if (W(o)) return null;
    throw o;
  }
  let t = xt(r, !1);
  if (t && typeof t === "object") {
    let o = t;
    if (typeof o.pid === "number" && typeof o.version === "string") return t;
  }
  return null;
}
async function replaceDaemonLock(e, r) {
  if (r) {
    let i = await r.write(getDaemonLockStateKey(), jsonStringify(e, null, 2), {
      mode: 438 & ~process.umask(),
    });
    if (!i.ok) {
      let s = "telemetryCode" in i.error ? i.error.telemetryCode : void 0;
      if (s === "LockContended" || s === "LockSuspect") {
        let c = await readDaemonLock(r);
        if (c?.pid !== e.pid || c?.startedAt !== e.startedAt) return !1;
        i = await r.write(getDaemonLockStateKey(), jsonStringify(e, null, 2), {
          mode: 438 & ~process.umask(),
        });
      }
      if (!i.ok)
        throw new R(
          `[DaemonLock] Failed to replace daemon lock: ${i.error.code}${"telemetryCode" in i.error && i.error.telemetryCode ? ` (${i.error.telemetryCode})` : ""}`,
          "[DaemonLock] v5 replace write failed",
        );
    }
    let a = await readDaemonLock(r);
    return a?.pid === e.pid && a?.startedAt === e.startedAt;
  }
  let t = await writeNewFileExclusive(getDaemonLockPath(), jsonStringify(e, null, 2));
  try {
    await rename(t, getDaemonLockPath());
  } catch (i) {
    let a = A(i);
    if (a === "EEXIST" || a === "EPERM") {
      await unlink(getDaemonLockPath()).catch(() => {});
      try {
        await rename(t, getDaemonLockPath());
      } catch (s) {
        await unlink(t).catch(() => {});
        let c = A(s);
        if (c === "EEXIST" || c === "EPERM") return !1;
        throw s;
      }
    } else throw (await unlink(t).catch(() => {}), i);
  }
  let o = await readDaemonLock(r);
  return o?.pid === e.pid && o?.startedAt === e.startedAt;
}
async function removeDaemonLock(e) {
  if (e) {
    let r = await e.delete(getDaemonLockStateKey());
    if (!r.ok)
      throw new R(
        `[DaemonLock] Failed to remove daemon lock: ${r.error.code}${"telemetryCode" in r.error && r.error.telemetryCode ? ` (${r.error.telemetryCode})` : ""}`,
        "[DaemonLock] v5 lock delete failed",
      );
    return;
  }
  try {
    await unlink(getDaemonLockPath());
  } catch (r) {
    if (!W(r)) throw r;
  }
}
async function isDaemonProcess(e) {
  let r;
  try {
    r = await readFile(`/proc/${e}/cmdline`, "utf8");
  } catch {
    return !0;
  }
  let t = r.split("\x00");
  return t[0] === "claude daemon" || t.slice(1, 4).includes("daemon");
}
var LOCK_VERIFY_ATTEMPTS = 2,
  LOCK_VERIFY_RETRY_MS = 250;
async function verifyProcessStartTime(e, r, t) {
  if (r === void 0) return !0;
  for (let o = 0; o < t; o++) {
    if (o > 0) await sleep(LOCK_VERIFY_RETRY_MS);
    let i = await getProcessStartTimeAsync(e, { skipCache: o > 0 });
    if (i !== void 0) return i === r;
  }
  return !1;
}
var C = 120000;
function v(e, r = Date.now(), t = uptime()) {
  return e.startedAt < r - t * 1000 - C;
}
async function classifyDaemonLockStaleness(e) {
  let r = procIdentityOf(e);
  if (r !== void 0) {
    let t = await provenSameProcessAsync(e.pid, r);
    if (t === !0) return null;
    if (t === !1) return "pid_recycled";
  }
  return v(e) ? "predates_boot" : null;
}
function isProcessIdentityKnown(e) {
  return procIdentityOf(e) !== void 0;
}
function getUnverifiedLockHint() {
  return `Stop it with \`claude daemon stop --any\` (a graceful, socket-based stop); if nothing is running at that pid, delete ${getDaemonLockPath()}`;
}
async function getVerifiedDaemonLock(e = 1, r) {
  let t = await readDaemonLock(r);
  if (!t) return null;
  try {
    process.kill(t.pid, 0);
  } catch {
    return null;
  }
  if (!(await isDaemonProcess(t.pid))) return null;
  if (!(await verifyProcessStartTime(t.pid, procIdentityOf(t), e))) return null;
  return t;
}
async function stopDaemonLockHolder(e) {
  let r = await getVerifiedDaemonLock(1, e).catch(() => null);
  if (!r) return { kind: "none" };
  switch (r.origin) {
    case "service":
      return { kind: "service", lock: r };
    case "foreground":
      return { kind: "foreground", lock: r };
    case "transient":
    case void 0: {
      if (!isProcessIdentityKnown(r))
        return { kind: "not-stopped", pid: r.pid, outcome: "unverified" };
      let t = await terminateProcessGracefully(r.pid);
      return t === "exited"
        ? { kind: "stopped", pid: r.pid }
        : { kind: "not-stopped", pid: r.pid, outcome: t };
    }
    default:
      return (r.origin, { kind: "unknown-origin", lock: r });
  }
}
function describeStopFailure(e) {
  switch (e.outcome) {
    case "eperm":
      return `the daemon holding the lock (pid ${e.pid}) is owned by another user and cannot be signalled from this session`;
    case "unverified":
      return `pid ${e.pid} is holding the daemon lock but could not be verified as the daemon, so it was not signalled`;
    case "timed-out":
      return `the daemon holding the lock (pid ${e.pid}) was asked to stop but has not exited yet`;
  }
}
function describeUnknownOriginLock(e) {
  return `a background daemon with an unrecognized origin (pid ${e}) holds the daemon lock \u2014 it may have been started by a newer Claude Code, so it was left untouched`;
}
async function isDaemonVersionMismatch(e, r) {
  let t = await getVerifiedDaemonLock(1, r).catch(() => null);
  return !!t && t.version !== e;
}
export {
  terminateProcessGracefully,
  getDaemonLockPath,
  getDaemonLockStateKey,
  acquireDaemonLock,
  markDaemonLockBgDisabled,
  readDaemonLock,
  replaceDaemonLock,
  removeDaemonLock,
  isDaemonProcess,
  LOCK_VERIFY_ATTEMPTS,
  LOCK_VERIFY_RETRY_MS,
  verifyProcessStartTime,
  classifyDaemonLockStaleness,
  isProcessIdentityKnown,
  getUnverifiedLockHint,
  getVerifiedDaemonLock,
  stopDaemonLockHolder,
  describeStopFailure,
  describeUnknownOriginLock,
  isDaemonVersionMismatch,
};
