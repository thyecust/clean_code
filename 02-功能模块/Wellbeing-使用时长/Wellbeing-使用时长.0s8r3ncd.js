// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, wDn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { qt } from "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { We, b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { Eo } from "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import { join as S } from "path";
var A = "active-time.json";
var y = 31536000000,
  Yit = 10;
function d() {
  return { version: 1, windows: [] };
}
function v() {
  return S(be(), A);
}
function f() {
  return Ce.state("active-time-ledger");
}
async function w(t) {
  let e;
  if (M() && t !== void 0) {
    let i = await t.readText([f()]);
    if (!i.ok)
      throw (
        n(`Failed to read active-time ledger: ${We(i.error)}`),
        Error("active-time ledger read failed")
      );
    let r = i.value.items[0];
    if (!r.found) return d();
    e = r.value;
  } else
    try {
      e = await qt().read(v());
    } catch (i) {
      if (W(i)) return d();
      throw (n(`Failed to read active-time ledger: ${l(i)}`), i);
    }
  try {
    let i = z(e);
    if (i.version !== 1 || !Array.isArray(i.windows)) return d();
    return {
      version: 1,
      windows: i.windows.filter(
        (s) =>
          typeof s?.start === "number" &&
          typeof s?.end === "number" &&
          typeof s?.userSeconds === "number" &&
          s.end >= s.start,
      ),
    };
  } catch {
    return d();
  }
}
class g {
  pendingSeconds = 0;
  activeStretch = null;
  cachedBreakThresholdMs = Yit * 60000;
  flushTimer = null;
  cleanupHandle = null;
  flushInFlight = null;
  #t = void 0;
  noteUserActivity(t, e) {
    if (t <= 0) return;
    if (
      this.activeStretch === null ||
      e - this.activeStretch.lastActivityMs >= this.cachedBreakThresholdMs
    )
      this.activeStretch = { windowStartMs: e - t * 1000, lastActivityMs: e };
    else this.activeStretch.lastActivityMs = e;
    ((this.pendingSeconds += t), this.ensureFlushTimer());
  }
  getCurrentContinuousUse(t) {
    if (this.activeStretch === null) return null;
    if (t - this.activeStretch.lastActivityMs >= this.cachedBreakThresholdMs)
      return null;
    return {
      startMs: this.activeStretch.windowStartMs,
      durationMs: Math.max(0, t - this.activeStretch.windowStartMs),
    };
  }
  armStorage(t) {
    this.#t ??= t;
  }
  flush(t, e) {
    if (this.flushInFlight) return this.flushInFlight;
    return (
      (this.flushInFlight = this.doFlush(t, e).finally(() => {
        this.flushInFlight = null;
      })),
      this.flushInFlight
    );
  }
  async doFlush(t, e) {
    let i = Eo("breakReminder", { enabled: !1 }).value;
    if (
      ((this.cachedBreakThresholdMs = (i.breakThresholdMinutes ?? Yit) * 60000),
      this.pendingSeconds <= 0)
    )
      return;
    let r = this.pendingSeconds;
    try {
      let s = await w(e),
        o = s.windows.at(-1);
      if (o && t - o.end < this.cachedBreakThresholdMs) {
        if (
          ((o.end = Math.max(o.end, t)),
          (o.userSeconds = Math.min(
            o.userSeconds + r,
            (o.end - o.start) / 1000,
          )),
          this.activeStretch)
        )
          this.activeStretch.windowStartMs = o.start;
      } else {
        let a = this.activeStretch?.windowStartMs ?? t - r * 1000,
          u = o ? Math.max(a, o.end) : a,
          h = Math.max(u, t);
        if (
          (s.windows.push({
            start: u,
            end: h,
            userSeconds: Math.min(r, (h - u) / 1000),
          }),
          this.activeStretch)
        )
          this.activeStretch.windowStartMs = u;
      }
      let T = t - y;
      if (
        ((s.windows = s.windows.filter((a) => a.end >= T)), M() && e !== void 0)
      ) {
        let a = await e.write(f(), b(s), { mode: 384 });
        if (!a.ok) {
          n(`Failed to flush active-time ledger: ${We(a.error)}`);
          return;
        }
      } else {
        let a = be();
        (await qt().mkdir(a), await qt().atomicWrite(v(), b(s), 384));
      }
      this.pendingSeconds -= r;
    } catch (s) {
      n(`Failed to flush active-time ledger: ${l(s)}`);
    }
  }
  ensureFlushTimer() {
    if (this.flushTimer) return;
  }
  reset() {
    if (
      ((this.pendingSeconds = 0),
      (this.activeStretch = null),
      (this.cachedBreakThresholdMs = Yit * 60000),
      this.flushTimer)
    )
      (clearInterval(this.flushTimer), (this.flushTimer = null));
    (this.cleanupHandle?.(),
      (this.cleanupHandle = null),
      (this.flushInFlight = null),
      (this.#t = void 0));
  }
}
var K = new j(() => new g());
class c {
  activeOperations = new Set();
  lastUserActivityTime = 0;
  lastCLIRecordedTime;
  isCLIActive = !1;
  USER_ACTIVITY_TIMEOUT_MS = 5000;
  getNow;
  getActiveTimeCounter;
  constructor(t) {
    ((this.getNow = t?.getNow ?? (() => Date.now())),
      (this.getActiveTimeCounter = t?.getActiveTimeCounter ?? wDn),
      (this.lastCLIRecordedTime = this.getNow()));
  }
  static getInstance() {
    let t = m();
    return ((t.current ??= new c()), t.current);
  }
  static resetInstance() {
    m().current = null;
  }
  static createInstance(t) {
    let e = new c(t);
    return ((m().current = e), e);
  }
  recordUserActivity() {
    if (!this.isCLIActive && this.lastUserActivityTime !== 0) {
      let e = (this.getNow() - this.lastUserActivityTime) / 1000;
      if (e > 0) {
        let i = this.USER_ACTIVITY_TIMEOUT_MS / 1000;
        if (e < i) {
          let r = this.getActiveTimeCounter();
          if (r) r.add(e, { type: "user" });
        }
      }
    }
    this.lastUserActivityTime = this.getNow();
  }
  startCLIActivity(t) {
    if (this.activeOperations.has(t)) this.endCLIActivity(t);
    let e = this.activeOperations.size === 0;
    if ((this.activeOperations.add(t), e))
      ((this.isCLIActive = !0), (this.lastCLIRecordedTime = this.getNow()));
  }
  endCLIActivity(t) {
    if ((this.activeOperations.delete(t), this.activeOperations.size === 0)) {
      let e = this.getNow(),
        i = (e - this.lastCLIRecordedTime) / 1000;
      if (i > 0) {
        let r = this.getActiveTimeCounter();
        if (r) r.add(i, { type: "cli" });
      }
      ((this.lastCLIRecordedTime = e), (this.isCLIActive = !1));
    }
  }
  async trackOperation(t, e) {
    this.startCLIActivity(t);
    try {
      return await e();
    } finally {
      this.endCLIActivity(t);
    }
  }
  getLastUserActivityTime() {
    return this.lastUserActivityTime;
  }
  getActivityStates() {
    return {
      isUserActive:
        (this.getNow() - this.lastUserActivityTime) / 1000 <
        this.USER_ACTIVITY_TIMEOUT_MS / 1000,
      isCLIActive: this.isCLIActive,
      activeOperationCount: this.activeOperations.size,
    };
  }
}
class p {
  current = null;
}
var I = new j(() => new p());
function m() {
  return I.of(B().host);
}
var X0 = {
  recordUserActivity: () => c.getInstance().recordUserActivity(),
  startCLIActivity: (t) => c.getInstance().startCLIActivity(t),
  endCLIActivity: (t) => c.getInstance().endCLIActivity(t),
};
export { Yit, X0 };
