// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Gt, K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { R, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { getFileStorage } from "../../01-核心基础设施/共享小工具-未细化/file-storage.js";
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { Et, b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { getComputerUseSession } from "./computer-use-session.js";
import { defineStoreField } from "../../01-核心基础设施/共享小工具-未细化/state-store.js";
var w = ["ELOOP", "ENXIO", "EISDIR"],
  NON_REGULAR_PATH_ERRNOS = new Set(w);
function isNonRegularPathErrno(e) {
  return e !== void 0 && NON_REGULAR_PATH_ERRNOS.has(e);
}
function isStorageFallbackFailure(e) {
  return e.code === "Failed" && isNonRegularPathErrno(e.telemetryCode);
}
import {
  lstat,
  readFile,
  unlink,
  writeFile,
} from "fs/promises";
import { join as U } from "path";
var I = "computer-use.lock",
  l = { kind: "acquired", fresh: !0 },
  p = { kind: "acquired", fresh: !1 };
function S(e) {
  if (typeof e !== "object" || e === null) return !1;
  return (
    "sessionId" in e &&
    typeof e.sessionId === "string" &&
    "pid" in e &&
    typeof e.pid === "number"
  );
}
function i() {
  return U(getClaudeConfigDir(), I);
}
function u() {
  return STORAGE_KEYS.state("computer-use-lock");
}
async function s(e) {
  if (e) {
    let r = await e.read([u()]);
    if (!r.ok) return;
    let t = r.value.items[0];
    if (!t.found) return;
    try {
      let o = z(Buffer.from(t.value).toString("utf8"));
      return S(o) ? o : void 0;
    } catch {
      return;
    }
  }
  try {
    let r = await readFile(i(), "utf8"),
      t = z(r);
    return S(t) ? t : void 0;
  } catch {
    return;
  }
}
function C(e) {
  try {
    return (process.kill(e, 0), !0);
  } catch {
    return !1;
  }
}
async function x() {
  try {
    return !(await lstat(i())).isFile();
  } catch (e) {
    return A(e) === "ENOENT";
  }
}
async function m(e, r) {
  if (isHoverRestEnabled() && r !== void 0) {
    let t = await r.write(u(), b(e), {
      precondition: { type: "ifAbsent" },
      mode: 438 & ~process.umask(),
    });
    if (t.ok) return !0;
    if (
      t.error.code === "AlreadyExists" ||
      (t.error.code === "Failed" &&
        isNonRegularPathErrno("telemetryCode" in t.error ? t.error.telemetryCode : void 0) &&
        (await x()))
    )
      return !1;
    throw new R(
      `failed to create computer-use lock: ${t.error.code}`,
      "computer-use lock v5 create failed",
    );
  }
  try {
    return (await writeFile(i(), b(e), { flag: "wx" }), !0);
  } catch (t) {
    if (A(t) === "EEXIST") return !1;
    throw t;
  }
}
function k(e) {
  let r = getComputerUseSession();
  (r.unregisterLockCleanup?.(),
    (r.unregisterLockCleanup = Et(async () => {
      await F(e);
    })));
}
async function checkComputerUseLock(e) {
  let r = await s(e);
  if (!r) return { kind: "free" };
  if (a()) return { kind: "held_by_self" };
  if (r.sessionId === K()) return { kind: "held_by_self" };
  if (C(r.pid)) return { kind: "blocked", by: r.sessionId };
  if (
    (n(
      `Recovering stale computer-use lock from session ${r.sessionId} (PID ${r.pid})`,
    ),
    e)
  )
    await e.delete(u());
  else await unlink(i()).catch(() => {});
  return { kind: "free" };
}
function a() {
  return getComputerUseSession().unregisterLockCleanup !== void 0;
}
async function acquireComputerUseLock(e) {
  let r = K(),
    t = { sessionId: r, pid: process.pid, acquiredAt: Date.now() };
  if (!e) await getFileStorage().mkdir(getClaudeConfigDir());
  if (e && a()) {
    if ((await s(e)) && a()) return (logFeatureOk("computeruse_lock_acquire"), p);
  }
  if (await m(t, e)) return (k(e), logFeatureOk("computeruse_lock_acquire"), l);
  let o = await s(e);
  if (!o) {
    if (e) await e.delete(u());
    else await unlink(i()).catch(() => {});
    if (await m(t, e))
      return (k(e), logFeatureSad("computeruse_lock_acquire", "stale_recovered"), l);
    return (
      logFeatureBad("computeruse_lock_acquire", "lock_held"),
      { kind: "blocked", by: (await s(e))?.sessionId ?? "unknown" }
    );
  }
  if (a()) return (logFeatureOk("computeruse_lock_acquire"), p);
  if (o.sessionId === r) return (logFeatureOk("computeruse_lock_acquire"), p);
  if (C(o.pid))
    return (
      logFeatureBad("computeruse_lock_acquire", "lock_held"),
      { kind: "blocked", by: o.sessionId }
    );
  if (
    (n(
      `Recovering stale computer-use lock from session ${o.sessionId} (PID ${o.pid})`,
    ),
    e)
  )
    await e.delete(u());
  else await unlink(i()).catch(() => {});
  if (await m(t, e))
    return (k(e), logFeatureSad("computeruse_lock_acquire", "stale_recovered"), l);
  return (
    logFeatureBad("computeruse_lock_acquire", "lock_held"),
    { kind: "blocked", by: (await s(e))?.sessionId ?? "unknown" }
  );
}
async function F(e) {
  let r = a(),
    t = getComputerUseSession();
  (t.unregisterLockCleanup?.(), (t.unregisterLockCleanup = void 0));
  let o = await s(e);
  if (!o || (!r && o.sessionId !== K())) return !1;
  if (e) {
    let d = await e.delete(u());
    if (d.ok && d.value.existed) return (n("Released computer-use lock"), !0);
    return !1;
  }
  try {
    return (await unlink(i()), n("Released computer-use lock"), !0);
  } catch {
    return !1;
  }
}
function isComputerUseActiveThisTurn() {
  return getComputerUseSession().activeThisTurn;
}
function markComputerUseActiveThisTurn() {
  if (getComputerUseSession().activeThisTurn) return !1;
  return ((getComputerUseSession().activeThisTurn = !0), !0);
}
function clearComputerUseActiveThisTurn() {
  getComputerUseSession().activeThisTurn = !1;
}
var T = defineStoreField("computerUseMcpState", void 0);
class ComputerUseMcpStateStore {
  #e;
  constructor(e) {
    this.#e = e;
  }
  static over(e) {
    return new ComputerUseMcpStateStore(T(e.getState, e.setState));
  }
  get() {
    return this.#e.get();
  }
  update(e) {
    this.#e.set(e);
  }
}
class _ {
  owner = void 0;
  acquire(e) {
    if (this.owner) return () => {};
    return (
      (this.owner = e),
      () => {
        if (this.owner === e) this.owner = void 0;
      }
    );
  }
}
var ComputerUseLockOwnerContext = new Gt(() => new _());
function getComputerUseLockOwner(e) {
  return ComputerUseLockOwnerContext.of(e).owner;
}
export { NON_REGULAR_PATH_ERRNOS, isNonRegularPathErrno, isStorageFallbackFailure, checkComputerUseLock, acquireComputerUseLock, isComputerUseActiveThisTurn, markComputerUseActiveThisTurn, clearComputerUseActiveThisTurn, ComputerUseMcpStateStore, ComputerUseLockOwnerContext, getComputerUseLockOwner };
