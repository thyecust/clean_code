// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 184 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Gt, K, sc, fy, he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { R, l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { We, b, t8, z, Is, Ru, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodeUnits, countOccurrences, stripInvisibleCharacters } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { kd } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { te, formatOverflowHint } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { READ_ONLY_AUTO_ALLOW_REASON, LOG_BULLET_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { rU } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { areWorkflowsDisabledBySettings, areWorkflowsEnabled, isJadeCompassEnabled } from "../../01-核心基础设施/共享小工具-未细化/workflow-feature-gates.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { isAgentStopPending, isTaskLoopSettled, truncateMiddleWithMarker, formatErrorSummary, getParentPromptId } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Uh, NTt, ah } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { isServerFallbackDiscard } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { getProjectKeyFromDir, getProjectDir } from "../Teammates团队/transcript-paths.js";
import { S8, bZ, Y1, NA, vae } from "./chunk-0t0sve49.js";
import { WORKFLOW_TOOL_NAME } from "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import {
  min,
  Ndt,
  Aqe,
  E1t,
  hin,
  v9,
  _in,
  yin,
  Sin,
  bin,
  Cqe,
  A1t,
  vqe,
  Fdt,
  $dt,
  Rqe,
} from "./chunk-bkcg0nbj.js";
import { usesNondeterministicApi } from "../../01-核心基础设施/共享小工具-未细化/nondeterminism-check.js";
import { parseWorkflowScript } from "./workflow-script.js";
import { fin } from "./chunk-w0pgmfvw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kaxe7rw8.js";
import { isWorkflowAuthoringSkillAvailable } from "../../01-核心基础设施/共享小工具-未细化/is-workflow-authoring-skill-available.js";
import "../../01-核心基础设施/共享小工具-未细化/structured-output-retry-errors.js";
import "../../01-核心基础设施/共享小工具-未细化/summarize-tool-input.js";
import "../../01-核心基础设施/共享小工具-未细化/fd-real-path.js";
import { getWorkflowTranscriptDir } from "./workflow-snapshots.js";
import { WORKFLOW_NAME_ONLY_ENV, isWorkflowNameOnlyEnabled, getAllWorkflows, getWorkflowByName } from "./workflow-registry.js";
import { getBundledWorkflows } from "../../01-核心基础设施/共享小工具-未细化/bundled-workflows.js";
import { generateTaskId, getWorkflowSizeGuidelinePromptText } from "../Teammates团队/chunk-mrfx53ye.js";
import { WORKFLOW_AUTHORING_SKILL_NAME } from "../../01-核心基础设施/共享小工具-未细化/bundled-skill-names.js";
import { TASK_STOP_TOOL_NAME } from "../Teammates团队/chunk-z2t8b9yc.js";
import {
  s,
  T,
  vx,
  O,
  Uf,
  se,
  v,
  c,
  Qe,
  it,
  $e,
  Ko,
  fe,
  X,
  k,
  Hb,
} from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { isRecord } from "../../01-核心基础设施/共享小工具-未细化/is-record.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { randomUUID } from "crypto";
import { basename as st, resolve } from "path";
var yt = [
  "autopilot",
  "bugfix",
  "dashboard",
  "deep-research",
  "docs",
  "investigate",
];
function Cr(e) {
  return yt.find((r) => r === e);
}
function xr(e, { apply: r }) {
  if (!isRecord(e)) return null;
  let t = e.args;
  if (typeof t !== "string") return null;
  let o = t.trimStart()[0];
  if (o !== "{" && o !== "[") return null;
  let a;
  try {
    a = z(t);
  } catch {
    return null;
  }
  if (a === null || typeof a !== "object") return null;
  let p = typeof e.name === "string" ? "_named" : "",
    w = Array.isArray(a)
      ? "args_json_string_to_array"
      : "args_json_string_to_object";
  if (!r) return { input: e, shapeClass: `${w}${p}_detect_only` };
  return { input: { ...e, args: a }, shapeClass: `${w}${p}` };
}
var Ar = ["live", "pending", "done", "failed", "retracted"];
var L = -1;
function Fr(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    !Array.isArray(e) &&
    typeof e.$var === "string"
  );
}
function er(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    !Array.isArray(e) &&
    typeof e.$atleast === "number"
  );
}
function xe(e) {
  let r = Wt().safeParse(e);
  if (!r.success || er(r.data))
    throw new R(
      'a pattern must be a JSON object (nested objects as subsets, arrays exact, v("x") binds)',
      "world: not a pattern",
    );
  return r.data;
}
function zr(e) {
  if (er(e)) {
    let r = e.$atleast;
    if (!Number.isSafeInteger(r) || r < 0)
      throw new R(
        "atleast(N, pattern): N must be a non-negative integer",
        "world: bad threshold count",
      );
    return { $atleast: r, of: xe(e.of) };
  }
  return xe(e);
}
var Lr = new Set(["addr", "by", "status", "at", "in"]),
  Rt = new Set(["live", "done"]),
  vt = 1e5,
  St = 20000,
  Er = 32;
function Dr(e) {
  return Array.isArray(e);
}
function $r(e) {
  return Array.isArray(e);
}
function _t(e, r) {
  return Object.is(e, r) || b(e) === b(r);
}
function rr(e, r, t = {}) {
  if (e === null || typeof e !== "object") return Object.is(e, r) ? t : void 0;
  if (Fr(e)) {
    if (r === void 0) return;
    if (Object.hasOwn(t, e.$var)) return _t(t[e.$var], r) ? t : void 0;
    return { ...t, [e.$var]: r };
  }
  if (Dr(e)) {
    if (!Array.isArray(r) || r.length !== e.length) return;
    let a = t;
    for (let p = 0; p < e.length && a; p++) a = rr(e[p], r[p], a);
    return a;
  }
  if (r === null || typeof r !== "object" || Array.isArray(r)) return;
  let d = e,
    o = t;
  for (let a of Object.keys(d)) {
    if (a === "__proto__") continue;
    let p = Object.hasOwn(r, a) ? r[a] : void 0;
    if (((o = rr(d[a], p, o)), !o)) return;
  }
  return o;
}
function Nr(e) {
  return {
    ...e.fact,
    addr: e.addr,
    by: e.by,
    in: e.in,
    status: e.status,
    ...(e.kind === "eval" && { value: e.value, error: e.error }),
  };
}
function dr(e) {
  if (e === null || typeof e !== "object") return !1;
  if (Fr(e)) return !0;
  if (Dr(e)) return e.some(dr);
  return Object.values(e).some(dr);
}
function It(e, r) {
  return rr(e, Nr(r)) !== void 0;
}
function Pt(e) {
  return Object.prototype.hasOwnProperty.call(e, "status");
}
function Ot(e, r) {
  return ur(e, r) !== void 0;
}
function ur(e, r) {
  if (!Pt(e) && !Rt.has(r.status)) return;
  return rr(e, Nr(r));
}
var fr = createLazyValue(() =>
    it({ topic: s().min(1) }).refine(
      (e) => !Object.keys(e).some((r) => Lr.has(r)),
      { message: "a fact may not carry a reserved key" },
    ),
  ),
  Wt = createLazyValue(() => {
    let e = Hb(() => $e([s(), T(), O(), Uf(), v(e), fe(s(), e)]));
    return fe(s(), e);
  });
function Ee(e) {
  let r = fr().safeParse(e);
  if (r.success) return r.data;
  let t =
    e !== null && typeof e === "object"
      ? Object.keys(e).find((d) => Lr.has(d))
      : void 0;
  if (t !== void 0)
    throw new R(
      `a fact may not carry \`${t}\` \u2014 the host sets it on the row`,
      "world: fact carries a reserved key",
    );
  throw new R(
    "a fact must be an object with a non-empty string `topic`",
    "world: not a fact",
  );
}
function jr(e) {
  try {
    return truncateMiddleWithMarker(l(e));
  } catch {
    return "non-stringifiable error";
  }
}
class pr {
  rows = [];
  rules = new Map();
  fired = new Set();
  evalControllers = new Map();
  firingsInFlight = new Map();
  childrenOf = new Map();
  pendingIn = new Map();
  rowsUnder = new Map();
  idleWaiters = new Map();
  listeners = new Set();
  maxRows;
  maxRowsPerScope;
  schedule;
  constructor(e = {}) {
    ((this.maxRows = e.maxRows ?? vt),
      (this.maxRowsPerScope = e.maxRowsPerScope ?? St),
      (this.schedule = e.schedule ?? ((r) => this.yieldingSchedule(r))));
  }
  sinceYield = 0;
  yieldWatch = !1;
  backlog;
  yieldingSchedule(e) {
    if (this.backlog !== void 0) {
      this.backlog.push(e);
      return;
    }
    if (!this.yieldWatch)
      ((this.yieldWatch = !0),
        setImmediate(() => {
          ((this.yieldWatch = !1), (this.sinceYield = 0));
        }));
    if (++this.sinceYield < Er) {
      queueMicrotask(e);
      return;
    }
    ((this.backlog = [e]), setImmediate(() => this.drainBacklog()));
  }
  drainBacklog() {
    let e = this.backlog;
    if (e === void 0) return;
    let r = e.splice(0, Er);
    if (((this.sinceYield = r.length), !this.yieldWatch))
      ((this.yieldWatch = !0),
        setImmediate(() => {
          ((this.yieldWatch = !1), (this.sinceYield = 0));
        }));
    if (e.length === 0) this.backlog = void 0;
    else setImmediate(() => this.drainBacklog());
    for (let t of r) t();
  }
  subscribe(e) {
    return (
      this.listeners.add(e),
      () => {
        this.listeners.delete(e);
      }
    );
  }
  get isFull() {
    return this.rows.length >= this.maxRows;
  }
  pending(e = L) {
    return this.pendingIn.get(e) ?? 0;
  }
  isIdle(e = L) {
    return this.pending(e) === 0;
  }
  within(e, r) {
    if (r === L) return !0;
    let t = e;
    while (t !== L) {
      if (t === r) return !0;
      t = this.rows[t]?.in ?? L;
    }
    return !1;
  }
  restore(e) {
    if (this.rows.length > 0)
      throw new R(
        "restore() on a non-empty world",
        "world: restore on a non-empty world",
      );
    for (let r of e) {
      if (r.addr !== this.rows.length)
        throw new R(
          `restore(): row ${r.addr} out of order`,
          "world: restore out of order",
        );
      (this.rows.push(r),
        this.topOf.push(r.in === L ? r.addr : this.topOf[r.in]));
      let t = this.childrenOf.get(r.in);
      if (t) t.push(r.addr);
      else this.childrenOf.set(r.in, [r.addr]);
      let d = this.topScopeOf(r.in);
      if (d !== L) this.rowsUnder.set(d, (this.rowsUnder.get(d) ?? 0) + 1);
    }
  }
  put(e, r, t = {}) {
    return this.append(e, r, "live", "put", this.writeScopeOf(t)).addr;
  }
  read(e, r = {}) {
    let t = this.scopeOf(r);
    return this.rows.filter((d) => this.within(d.addr, t) && Ot(e, d));
  }
  on(e, r, t, d = {}) {
    let o = this.writeScopeOf(d),
      a = this.append({ topic: "sub", pattern: e }, t, "live", "sub", o);
    if (a.status === "retracted") return a.addr;
    let p = { addr: a.addr, pattern: e, in: o, fn: r };
    if ((this.rules.set(a.addr, p), er(e)))
      return (this.maybeFireThreshold(p, e), a.addr);
    let w = this.rows.length;
    for (let _ = 0; _ < w; _++) {
      if (!this.rules.has(p.addr)) break;
      this.maybeFire(p, this.rows[_]);
    }
    return a.addr;
  }
  retract(e) {
    let r = this.rows[e];
    if (!r || r.status === "retracted") return !1;
    let t = [],
      d = [],
      o = [{ at: e, underEval: !1 }];
    while (o.length > 0) {
      let { at: a, underEval: p } = o.pop(),
        w = this.rows[a],
        _ = p ? this.firingsInFlight.get(a) : void 0,
        I = !1;
      if (_) {
        for (let U of _) {
          if (U.heldAt !== void 0) {
            let j = this.rows[U.heldAt];
            if (j !== void 0 && !this.isRetractedScope(j.in)) continue;
          }
          ((U.released = !0), _.delete(U), (I = !0), this.adjustPending(a, -1));
        }
        if (_.size === 0) this.firingsInFlight.delete(a);
      }
      if (w.status === "retracted") {
        if (p) {
          if (I) d.push(a);
          for (let U of this.childrenOf.get(a) ?? [])
            o.push({ at: U, underEval: !0 });
        }
        continue;
      }
      ((w.status = "retracted"), this.rules.delete(a));
      let x = this.evalControllers.get(a),
        F = x !== void 0;
      if (x)
        (this.evalControllers.delete(a), x.abort(), this.adjustPending(a, -1));
      ((F ||= I || (_?.size ?? 0) > 0), t.push({ row: w, wasInFlight: F }));
      let B = p || w.kind === "eval";
      for (let U of this.childrenOf.get(a) ?? [])
        o.push({ at: U, underEval: B });
    }
    for (let a = t.length - 1; a >= 0; a--) {
      let { row: p, wasInFlight: w } = t[a];
      if ((this.emit({ kind: "retracted", row: p }), this.deliver(p), w))
        d.push(p.addr);
    }
    for (let a of d) this.wakeIdle(a);
    return !0;
  }
  eval(e, r, t, d = {}) {
    let o = this.append(e, t, "pending", "eval", this.writeScopeOf(d));
    if (o.status !== "pending") return o.addr;
    let a = new AbortController();
    (this.evalControllers.set(o.addr, a), this.adjustPending(o.addr, 1));
    let p;
    try {
      p = Promise.resolve(r(a.signal));
    } catch (w) {
      p = Promise.reject(w);
    }
    return (
      p.then(
        (w) => this.settle(o, { value: w }),
        (w) => this.settle(o, { error: jr(w) }),
      ),
      o.addr
    );
  }
  settled(e) {
    let r = this.rows[e];
    if (!r)
      return Promise.reject(
        new R(`no row at ${e}`, "world: settled() on a missing row"),
      );
    if (r.status !== "pending") return Promise.resolve(r);
    return new Promise((t) => {
      let d = this.subscribe((o) => {
        if (
          (o.kind === "settled" || o.kind === "retracted") &&
          o.row.addr === e
        )
          (d(), t(o.row));
      });
    });
  }
  whenIdle(e = L) {
    if (this.isIdle(e)) return Promise.resolve();
    return new Promise((r) => {
      let t = this.idleWaiters.get(e);
      if (t) t.push(r);
      else this.idleWaiters.set(e, [r]);
    });
  }
  scopeOf(e) {
    let r = e.in ?? L;
    if (r !== L && !this.rows[r])
      throw new R(
        `no row at ${r} to place in`,
        "world: placement names a missing row",
      );
    return r;
  }
  writeScopeOf(e) {
    let r = this.scopeOf(e);
    if (this.isRetractedScope(r))
      throw new R(
        `row ${r} is retracted; nothing can be placed inside it`,
        "world: placement inside a retracted scope",
      );
    return r;
  }
  isRetractedScope(e) {
    let r = e;
    while (r !== L) {
      let t = this.rows[r];
      if (!t) return !1;
      if (t.status === "retracted") return !0;
      r = t.in;
    }
    return !1;
  }
  append(e, r, t, d, o) {
    if (this.rows.length >= this.maxRows)
      throw new R(
        `world full (${this.maxRows} rows) \u2014 a rule is probably putting the fact it fires on`,
        "world: full",
      );
    let a = {
      addr: this.rows.length,
      kind: d,
      fact: e,
      by: r,
      in: o,
      at: Date.now(),
      status: t,
    };
    (this.rows.push(a), this.topOf.push(o === L ? a.addr : this.topOf[o]));
    let p = this.childrenOf.get(o);
    if (p) p.push(a.addr);
    else this.childrenOf.set(o, [a.addr]);
    this.emit({ kind: "put", row: a });
    let w = this.topScopeOf(o);
    if (w !== L) {
      let _ = (this.rowsUnder.get(w) ?? 0) + 1;
      if ((this.rowsUnder.set(w, _), _ > this.maxRowsPerScope)) {
        if (
          (n(
            `world: scope ${w} exceeded ${this.maxRowsPerScope} rows \u2014 a rule is probably putting the fact it fires on; retracting it`,
            { level: "warn" },
          ),
          this.emit({ kind: "runaway", scope: w }),
          this.rows[w].status !== "retracted")
        )
          this.retract(w);
      }
    }
    return (this.deliver(a), a);
  }
  topOf = [];
  topScopeOf(e) {
    return e === L ? L : this.topOf[e];
  }
  settle(e, r) {
    if (e.status !== "pending") return;
    if ((this.evalControllers.delete(e.addr), "error" in r))
      ((e.status = "failed"), (e.error = r.error));
    else ((e.status = "done"), (e.value = r.value));
    (this.adjustPending(e.addr, -1),
      this.emit({ kind: "settled", row: e }),
      this.deliver(e),
      this.wakeIdle(e.addr));
  }
  deliver(e) {
    for (let r of Array.from(this.rules.values()))
      if (this.rules.has(r.addr)) this.maybeFire(r, e);
  }
  maybeFire(e, r) {
    if (er(e.pattern)) {
      if (this.within(r.addr, e.in) && It(e.pattern.of, r))
        this.maybeFireThreshold(e, e.pattern);
      return;
    }
    if (!this.within(r.addr, e.in)) return;
    let t = ur(e.pattern, r);
    if (!t) return;
    let d = `${e.addr}:${r.addr}:${r.status}`;
    if (this.fired.has(d)) return;
    (this.fired.add(d), this.fire(e, r, t, r.addr));
  }
  maybeFireThreshold(e, r) {
    let t = new Map();
    for (let d of this.rows) {
      if (!this.within(d.addr, e.in)) continue;
      let o = ur(r.of, d);
      if (!o) continue;
      let a = b(o) ?? "",
        p = t.get(a);
      if (p) p.rows.push(d);
      else t.set(a, { bindings: o, rows: [d] });
    }
    if (t.size === 0 && !dr(r.of)) t.set("{}", { bindings: {}, rows: [] });
    for (let [d, o] of t) {
      if (o.rows.length < r.$atleast) continue;
      let a = `${e.addr}:group:${d}`;
      if (this.fired.has(a)) continue;
      (this.fired.add(a),
        this.fire(e, o.rows, o.bindings, o.rows[0]?.addr ?? -1));
    }
  }
  supportOf(e, r) {
    let t = $r(r) ? r : [r];
    if (t.length === 0) return e.in;
    let d = new Set();
    for (let p = t[0].addr; p !== e.in && p !== L; p = this.rows[p].in)
      d.add(p);
    d.add(e.in);
    let o = t[0].addr;
    for (let p = 1; p < t.length; p++) {
      let w = t[p].addr;
      while (!d.has(w)) w = this.rows[w].in;
      for (let _ = o; _ !== w; _ = this.rows[_].in) d.delete(_);
      o = w;
    }
    let a = o;
    while (a !== e.in && this.rows[a].status === "retracted")
      a = this.rows[a].in;
    return a;
  }
  fire(e, r, t, d) {
    this.adjustPending(e.addr, 1);
    let o = { released: !1, heldAt: void 0 },
      a = {
        keep: (I) => {
          o.heldAt = I;
        },
      },
      p = this.firingsInFlight.get(e.addr);
    if (p) p.add(o);
    else this.firingsInFlight.set(e.addr, new Set([o]));
    let w = $r(r) ? void 0 : r,
      _ = w?.status;
    new Promise((I) => this.schedule(I))
      .then(() => {
        if (w !== void 0 && w.status !== _) return;
        return e.fn(r, t, this.supportOf(e, r), a);
      })
      .catch((I) => {
        let x = jr(I);
        if (
          (n(`world rule ${e.addr} threw on row ${d}: ${x}`, { level: "warn" }),
          !this.isRetractedScope(e.in))
        )
          try {
            this.append(
              { topic: "error", kind: "rule", rule: e.addr, on: d, message: x },
              "host",
              "live",
              "put",
              e.in,
            );
          } catch {}
      })
      .finally(() => {
        if (o.released) return;
        o.released = !0;
        let I = this.firingsInFlight.get(e.addr);
        if (I) {
          if ((I.delete(o), I.size === 0)) this.firingsInFlight.delete(e.addr);
        }
        (this.adjustPending(e.addr, -1), this.wakeIdle(e.addr));
      });
  }
  adjustPending(e, r) {
    let t = e;
    for (;;) {
      if ((this.pendingIn.set(t, (this.pendingIn.get(t) ?? 0) + r), t === L))
        return;
      t = this.rows[t]?.in ?? L;
    }
  }
  wakeIdle(e) {
    let r = e;
    for (;;) {
      if (this.isIdle(r)) {
        let t = this.idleWaiters.get(r);
        if (t) {
          this.idleWaiters.delete(r);
          for (let d of t) d();
        }
      }
      if (r === L) return;
      r = this.rows[r]?.in ?? L;
    }
  }
  emit(e) {
    for (let r of this.listeners)
      try {
        r(e);
      } catch (t) {
        n(`world listener threw: ${l(t)}`, { level: "warn" });
      }
  }
}
var tr = ["user", "model", "stop", "runaway", "pause"];
import * as Mr from "vm";
async function nr(e, r) {
  let t;
  try {
    let a = e.runInContext(r.vmContext, S8(Aqe));
    t = await r.settle(a);
  } catch (a) {
    let p = r.errorInfo(a);
    if (p.stack)
      n(
        `Workflow v2 script error stack:
${p.stack}`,
        { level: "error" },
      );
    return { error: formatErrorSummary(p), thrown: p };
  }
  let d = t.v;
  if (typeof d === "function")
    return { error: "workflow result cannot be a function" };
  if (d === null || typeof d !== "object") {
    if (typeof d === "bigint" || typeof d === "symbol")
      return {
        error: `workflow result is not JSON-serializable (a ${typeof d})`,
      };
    return { value: d };
  }
  let o = r.sanitize(d);
  try {
    let a;
    try {
      a = Ru(o);
    } catch {
      a = z(b(o) ?? "null");
    }
    return (b(a), { value: a });
  } catch {
    return {
      error: "workflow result is not JSON-serializable (a circular reference?)",
    };
  }
}
function wr(e, r, t) {
  let d = e.rows[r]?.in ?? L;
  while (d !== L && d !== t) {
    let o = e.rows[d];
    if (!o) return !1;
    if (o.kind === "eval" && o.fact.topic === "workflow" && o.fact.child === !0)
      return !0;
    d = o.in;
  }
  return !1;
}
function mr(e, r, t) {
  let { addr: d, by: o } = r;
  for (;;) {
    if (!o.startsWith("rule:")) return d;
    let a = Number(o.slice(5));
    if (!Number.isSafeInteger(a) || a < 0 || a >= d || !e.within(a, t)) return;
    let p = e.rows[a];
    if (!p) return;
    ((d = a), (o = p.by));
  }
}
function hr(e, r, t) {
  return !wr(e, r.addr, t) && mr(e, r, t) !== void 0;
}
function Vr(e) {
  let { ctx: r, world: t, killSignal: d } = e,
    o = r.childWorkflow,
    { clone: a } = r.vmBoundary,
    p = bin(),
    w = new Map(),
    _ = new Map();
  function I() {
    return new R(
      "Workflow aborted",
      "workflow v2: child workflow retracted by kill",
    );
  }
  function x(j) {
    return t.settled(j).then(async (J) => {
      let N = w.get(j);
      switch ((w.delete(j), J.status)) {
        case "done": {
          if ((await t.whenIdle(j), d.aborted)) throw I();
          if (t.rows[j]?.status === "retracted") return null;
          let ne = t
            .read({ topic: "result" }, { in: j })
            .filter((q) => hr(t, q, j))
            .map((q) => q.fact);
          return ne.length > 0 ? a(ne) : a(J.value);
        }
        case "failed": {
          if (N) throw Y1(N.message, N.name, N.rendered);
          throw new R(
            J.error ?? "child workflow failed",
            "workflow v2: awaited child workflow failed",
          );
        }
        case "retracted":
          if (d.aborted) throw I();
          return null;
        default:
          return null;
      }
    });
  }
  function F(j, J) {
    if (j instanceof Error) return { name: j.name, message: j.message };
    let N = (J ?? e.errorInfo)(j);
    return { name: N.name, message: N.message };
  }
  function B(j) {
    let J = _.get(j);
    if (J) {
      J.cutRequested = !0;
      return;
    }
    t.retract(j);
  }
  async function U(j, J, N) {
    if (o.abortSignal?.aborted) return new Promise(() => {});
    let ne = { in: j.in },
      q = j.by;
    if (t.isRetractedScope(ne.in)) {
      if (d.aborted) throw I();
      return null;
    }
    let Y, be;
    try {
      Y = o.intakeClone(J);
    } catch (le) {
      be = { error: le };
    }
    let we = Ee({
        topic: "workflow",
        ...(typeof Y === "string"
          ? { name: Y }
          : Y !== null &&
              typeof Y === "object" &&
              "scriptPath" in Y &&
              typeof Y.scriptPath === "string"
            ? { scriptPath: Y.scriptPath }
            : {}),
        founding: !0,
        child: !0,
      }),
      ie = new AbortController(),
      D = t.rows.length,
      E = t.subscribe((le) => {
        if (le.kind === "retracted" && le.row.addr === D)
          (E(), _.delete(D), ie.abort());
      });
    _.set(D, { cutRequested: !1 });
    async function pe() {
      let le, de, ye, Ne, H;
      try {
        if (be) throw be.error;
        let Oe = await _in(o, Y);
        if (ie.signal.aborted) return;
        let Re = v9(Oe.scriptBody);
        if (!Re.ok) {
          let Me = `workflow('${Oe.childName}'): ${Re.error}`;
          throw Error(Me);
        }
        ((de = Oe.childName), (Ne = Re.vmScript), (ye = p(de)));
        let _e = E1t(
          o.abortSignal
            ? AbortSignal.any([o.abortSignal, ie.signal])
            : ie.signal,
        );
        (e.registerTimers(_e),
          (H = yin(o, de, ye, _e)),
          (le = H.errorInfo),
          _e.bindVMInvoke(Mr.runInContext("(fn => { fn() })", H.childCtx)));
        for (let [Me, Ae] of [
          ["parallel", o.hooks.parallel],
          ["pipeline", o.hooks.pipeline],
        ]) {
          let Fe = Ae,
            Ge = (...Ve) =>
              ie.signal.aborted ? new Promise(() => {}) : Fe(...Ve);
          Object.defineProperty(H.childCtx, Me, {
            value: H.asyncWrap(vae(Ge)),
            writable: !0,
            enumerable: !0,
            configurable: !0,
          });
        }
        Object.defineProperty(H.childCtx, "args", {
          value: N === void 0 ? void 0 : H.clone(N),
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
        let Ie = _.get(D)?.cutRequested === !0;
        if ((_.delete(D), Ie)) {
          t.retract(D);
          return;
        }
        (o.hooks.reservePhase(ye, "child"),
          o.hooks.log(`${LOG_BULLET_GLYPH} running dynamic workflow ${de}`));
        let Ye = {
          vmContext: H.childCtx,
          hooks: { ...o.hooks, agent: H.agent },
          childSpawnMemoRef: {},
          vmToStr: H.toStr,
          vmOwnString: H.ownString,
          vmStringify: H.stringify,
          timers: _e,
          vmBoundary: {
            clone: H.clone,
            call: H.call,
            settle: H.settle,
            sanitize: H.sanitize,
            asyncWrap: H.asyncWrap,
          },
          childWorkflow: o,
        };
        e.installWords(Ye, D, ie.signal, j.spawnMemo);
      } catch (Oe) {
        (_.delete(D), ie.abort());
        let { name: Re, message: _e } = F(Oe, le),
          Ie = truncateMiddleWithMarker(_e);
        throw (
          w.set(D, { name: Re, message: Ie, rendered: `${Re}: ${Ie}` }),
          o.hooks.log(`${LOG_BULLET_GLYPH} workflow() failed to start: ${Ie}`),
          new R(Ie, "workflow v2: child workflow failed to start")
        );
      }
      let ue = await nr(Ne, {
        vmContext: H.childCtx,
        settle: H.settle,
        sanitize: H.sanitize,
        errorInfo: H.errorInfo,
      });
      if (ie.signal.aborted) return;
      if (ue.thrown)
        throw (
          w.set(D, {
            name: ue.thrown.name,
            message: truncateMiddleWithMarker(ue.thrown.message),
            rendered: ue.error,
          }),
          o.hooks.log(`${LOG_BULLET_GLYPH} ${de} failed: ${ue.error}`),
          new R(ue.error, "workflow v2: child workflow script failed")
        );
      if (ue.error !== void 0)
        throw (
          o.hooks.log(`${LOG_BULLET_GLYPH} ${de} failed: ${ue.error}`),
          new R(ue.error, "workflow v2: child workflow result refused")
        );
      return (o.hooks.log(`${LOG_BULLET_GLYPH} ${de} done`), ue.value);
    }
    let ge;
    try {
      ge = t.eval(
        we,
        (le) => (
          le.addEventListener("abort", () => ie.abort(), { once: !0 }),
          pe()
        ),
        q,
        ne,
      );
    } catch (le) {
      if ((E(), _.delete(D), !t.isRetractedScope(ne.in))) {
        let { message: de } = F(le, void 0),
          ye =
            typeof we.name === "string"
              ? we.name
              : typeof we.scriptPath === "string"
                ? `workflow(${we.scriptPath})`
                : "workflow()";
        (o.hooks.recordFailure(`${LOG_BULLET_GLYPH} ${ye}: ${truncateMiddleWithMarker(de)}`),
          o.hooks.log(`${LOG_BULLET_GLYPH} workflow() failed to start: ${truncateMiddleWithMarker(de)}`));
      }
      throw le;
    }
    if (ge !== D)
      throw (
        E(),
        _.delete(D),
        new R(
          `child workflow row landed at ${ge}, expected ${D}`,
          "workflow v2: child founding address mismatch",
        )
      );
    return x(ge);
  }
  return { workflow: U, cut: B };
}
import * as Ke from "vm";
function Ct(e) {
  return Array.isArray(e);
}
function He(e) {
  return {
    addr: e.addr,
    by: e.by,
    status: e.status,
    value: e.value,
    error: e.error,
    fact: e.fact,
  };
}
function xt(e) {
  if (e === void 0 || e === null) return !1;
  if (typeof e !== "object" || Array.isArray(e))
    throw TypeError(
      "placement options must be an object: {top: true} or nothing",
    );
  let r = e;
  if (Object.keys(r).some((t) => t !== "top"))
    throw TypeError(
      "unknown placement option \u2014 the only one is top (a boolean)",
    );
  if (r.top !== void 0 && typeof r.top !== "boolean")
    throw TypeError("placement option top must be a boolean");
  return r.top === !0;
}
function gr(e, r, t, d, { scopeSignal: o, inheritedSpawnMemo: a } = {}) {
  let {
      clone: p,
      call: w,
      settle: _,
      sanitize: I,
      asyncWrap: x,
    } = e.vmBoundary,
    { vmContext: F, hooks: B } = e,
    U = bZ(F),
    j = Ke.runInContext("(p => { p.then(undefined, () => {}) })", F),
    J = { by: "script", in: t, memo: "chain" },
    N = J;
  function ne(P, C) {
    let A = N;
    N = P;
    try {
      return C();
    } finally {
      N = A;
    }
  }
  let q = { in: t },
    Y = (P, C) => (xt(C) ? q : { in: P.in }),
    be = Ke.runInContext(
      "(() => { const freeze = Object.freeze; return (put, read, on, retract, agent, workflow) => freeze({ put, read, on, retract, agent, workflow }) })()",
      F,
    );
  function we(P) {
    let C;
    try {
      C = _(P());
    } catch (A) {
      return Promise.reject(ie(A));
    }
    return C.then(
      (A) => E(A.v),
      (A) => {
        throw ie(A);
      },
    );
  }
  function ie(P) {
    return D(U(P));
  }
  function D(P) {
    return new R(
      P.message ? `${P.name}: ${P.message}` : P.name,
      "workflow v2: VM code threw",
    );
  }
  function E(P) {
    let C = I(P);
    if (C === null || typeof C !== "object") return C;
    let A = b(C);
    return A === void 0 ? void 0 : z(A);
  }
  function pe(P, C) {
    if (typeof P !== "function")
      throw new R(C, "workflow v2: word expected a function");
  }
  let ge = () => d.aborted || o?.aborted === !0,
    le = (P) => P.memo === "chain" && r.rows[t]?.status !== "pending",
    de = NA((P) => {
      if (ge()) return p([]);
      let C = xe(E(P) ?? {});
      return p(r.read(C, q).map(He));
    });
  function ye(P) {
    return ge() || (r.isRetractedScope(P.in) && !Re(P));
  }
  function Ne(P) {
    return NA((C, A) => {
      let V = P();
      if (ye(V)) return -1;
      let ae = Y(V, E(A));
      if (r.isRetractedScope(ae.in)) return -1;
      return r.put(Ee(E(C)), V.by, ae);
    });
  }
  function H(P) {
    return NA((C, A, V) => {
      let ae = P();
      if (ye(ae)) return -1;
      let re = zr(E(C) ?? {});
      pe(A, "on() expects a function");
      let ve = Y(ae, E(V));
      if (r.isRetractedScope(ve.in)) return -1;
      let Se = -1;
      return (
        (Se = r.on(
          re,
          (Te, ar, Xe, Ze) => {
            let lr = Ct(Te) ? Te.map(He) : He(Te),
              ze = { by: `rule:${Se}`, in: Xe, memo: "none" };
            Oe.set(ze, Ze);
            let Pe = Pr(ze);
            return ne(ze, () => we(() => w(A, p(lr), p(ar), Pe)));
          },
          ae.by,
          ve,
        )),
        Se
      );
    });
  }
  let ue = new WeakMap(),
    Oe = new WeakMap();
  function Re(P) {
    let C = ue.get(P);
    if (C === void 0) return !1;
    let A = r.rows[C];
    return A !== void 0 && !r.isRetractedScope(A.in);
  }
  function _e(P) {
    return NA((C) => {
      if (typeof C !== "number" || !Number.isSafeInteger(C))
        throw TypeError("retract() expects an address (a number)");
      if (ge() || C === t || !r.within(C, t)) return !1;
      let A = P();
      if (!Re(A) && r.isRetractedScope(A.in)) return !1;
      let V = r.within(A.in, C),
        ae = V ? Oe.get(A) : void 0,
        re = V ? ue.get(A) : void 0;
      ae?.keep(C);
      let ve = r.retract(C);
      if (V && ve) {
        if (re === void 0 || r.within(re, C)) ue.set(A, C);
        ae?.keep(ue.get(A));
      } else if (V) ae?.keep(re);
      return ve;
    });
  }
  let Ie = new Set(),
    Ye = new Map();
  function Me(P) {
    return r.settled(P).then((C) => {
      switch (C.status) {
        case "done":
          return p(C.value);
        case "failed": {
          if (Ie.has(P)) return null;
          let A = Ye.get(P);
          if (A) throw Y1(A.message, A.name);
          throw new R(
            C.error ?? "agent failed",
            "workflow v2: awaited agent failed",
          );
        }
        case "retracted":
          if (d.aborted)
            throw new R(
              "Workflow aborted",
              "workflow v2: awaited agent retracted by kill",
            );
          if (o?.aborted) return new Promise(() => {});
          return null;
        default:
          return null;
      }
    });
  }
  let Ae = vae(async (P) => P),
    Fe = Ke.runInContext(
      "(() => { const P = Promise; return () => new P(() => {}) })()",
      F,
    );
  function Ge(P) {
    return NA((C, A) => {
      if (ge()) return w(Fe);
      let V = P();
      if (le(V)) return w(Fe);
      if (!Re(V) && r.isRetractedScope(V.in)) {
        let Pe = w(x(Ae), null);
        return (j(Pe), Pe);
      }
      let ae = E(A),
        re =
          ae !== null && typeof ae === "object" && !Array.isArray(ae) ? ae : {},
        ve = e.vmToStr(C),
        Se =
          typeof re.label === "string"
            ? re.label
            : truncateToCodeUnits(ve, 60).replace(/\s+/g, " ").trim(),
        Te =
          re.fact !== null &&
          typeof re.fact === "object" &&
          !Array.isArray(re.fact)
            ? re.fact
            : {},
        ar = Ee({
          ...Te,
          topic: "agent",
          label: Se,
          ...(typeof re.phase === "string" && { phase: re.phase }),
        }),
        Xe = Y(V, re.top === void 0 ? void 0 : { top: re.top });
      if (r.isRetractedScope(Xe.in)) {
        let Pe = w(x(Ae), null);
        return (j(Pe), Pe);
      }
      let Ze = r.rows.length,
        lr = r.eval(
          ar,
          (Pe) =>
            B.agent(C, A, Pe, Ve(V), o).then(
              (Ue) => {
                if (Ue === null || Ue === void 0)
                  throw (
                    Ie.add(Ze),
                    new R(
                      "agent produced no result (skipped, blocked, or gave up after retries)",
                      "workflow v2: agent resolved without a result",
                    )
                  );
                return E(Ue);
              },
              (Ue) => {
                let Tr = U(Ue);
                throw (Ye.set(Ze, Tr), D(Tr));
              },
            ),
          V.by,
          Xe,
        ),
        ze = w(x(Ae), Me(lr));
      return (j(ze), ze);
    });
  }
  function Ve(P) {
    if (P.memo === "none") return new Cqe();
    if (a !== void 0) return a;
    let C = r.rows[t];
    return C === void 0 || C.status === "pending" ? void 0 : new Cqe();
  }
  let Be = () => N;
  e.childSpawnMemoRef.get = () => Ve(N);
  let ft = Ne(Be),
    pt = H(Be),
    wt = _e(Be),
    mt = Ge(Be);
  function Pr(P) {
    let C = () => (N === J ? P : N);
    return be(Ne(C), de, H(C), _e(C), Ge(C), Wr(C));
  }
  let ht = NA((P) => {
      if (typeof P !== "string" || P === "")
        throw new R(
          "v(name) expects a non-empty string",
          "workflow v2: v() expects a name",
        );
      return p({ $var: P });
    }),
    gt = NA((P, C) => {
      let A = xe(E(C) ?? {});
      if (typeof P !== "number" || !Number.isSafeInteger(P) || P < 0)
        throw new R(
          "atleast(N, pattern) expects a non-negative integer",
          "workflow v2: atleast() expects a count",
        );
      return p({ $atleast: P, of: A });
    });
  for (let [P, C] of [
    ["put", ft],
    ["read", de],
    ["on", pt],
    ["retract", wt],
    ["agent", mt],
    ["v", ht],
    ["atleast", gt],
    [hin, NA(() => Pr(N))],
  ])
    Object.defineProperty(F, P, {
      value: C,
      writable: !1,
      enumerable: !0,
      configurable: !1,
    });
  let Or = new Set(),
    { workflow: kt, cut: bt } = o
      ? { workflow: () => Sin(), cut: () => {} }
      : Vr({
          ctx: e,
          world: r,
          killSignal: d,
          installWords: (P, C, A, V) => {
            gr(P, r, C, d, { scopeSignal: A, inheritedSpawnMemo: V });
          },
          registerTimers: (P) => {
            Or.add(P);
          },
          errorInfo: U,
        });
  function Wr(P) {
    return NA((C, A) => {
      if (ge()) return w(Fe);
      let V = P();
      if (le(V)) return w(Fe);
      if (ye(V)) {
        let Se = w(x(Ae), null);
        return (j(Se), Se);
      }
      let ae = { in: V.in, by: V.by, spawnMemo: Ve(V) },
        re = x(vae((Se, Te) => kt(ae, Se, Te))),
        ve = w(re, C, A);
      return (j(ve), ve);
    });
  }
  return (
    Object.defineProperty(F, "workflow", {
      value: Wr(Be),
      writable: !1,
      enumerable: !0,
      configurable: !1,
    }),
    Ke.runInContext("delete globalThis.eval", F),
    {
      as(P, C) {
        return ne({ by: P, in: t, memo: "none" }, C);
      },
      clearChildTimers() {
        for (let P of Or) P.clear();
      },
      cutChild: bt,
    }
  );
}
var Et = 1000,
  $t = 5000,
  or = "model",
  Br =
    "killed (runaway): the run exceeded the per-run row cap \u2014 usually a rule putting the fact it fires on. Its facts are readable with read {status:'retracted'}; fix the rule (or split a genuinely larger workload) before launching again.";
function jt(e) {
  return tr.find((r) => r === e) ?? "unknown";
}
class sr {
  runId;
  vmScript;
  world;
  controller = new AbortController();
  ctx;
  words;
  vmErrorInfo;
  logs = [];
  log(e) {
    if (this.logs.length < Et) this.logs.push(truncateMiddleWithMarker(e));
  }
  sink;
  killed = !1;
  killedSize;
  scope = -1;
  priorScopes = [];
  retractPriorLives() {
    for (let e of this.priorScopes) this.world.retract(e);
  }
  reportedRows = 0;
  reportedLogs = 0;
  reportedFailures = 0;
  reopen;
  onUnfounded;
  constructor(e, r, t) {
    this.runId = e;
    this.vmScript = r;
    this.world = t;
  }
  static lost(e, r, t, d = []) {
    let o = new sr(e, void 0, r);
    ((o.scope = t),
      (o.priorScopes = d),
      o.retractPriorLives(),
      (o.lostOnResume = !0));
    let a = o.killRecord();
    if (a !== void 0 || r.isRetractedScope(t)) {
      if ((o.kill("stop"), a !== void 0)) o.killedSize = a;
    }
    return o;
  }
  lostOnResume = !1;
  get isLost() {
    return this.lostOnResume;
  }
  get founded() {
    return this.scope >= 0;
  }
  get isKilled() {
    return this.killed;
  }
  get isActive() {
    return this.scope >= 0 && !this.world.isIdle(this.scope);
  }
  state() {
    if (this.killed) return "killed";
    if (this.lostOnResume) return "lost";
    return this.isActive ? "open" : "settled";
  }
  get wasSteered() {
    return this.steered;
  }
  steered = !1;
  afterKillReported = !1;
  noteCallAfterKill(e) {
    if (
      !this.killed ||
      this.lostOnResume ||
      this.afterKillReported ||
      this.killedSize === void 0
    )
      return;
    ((this.afterKillReported = !0),
      logFeatureOk("workflow_after_kill", {
        next_action: fromEnum(e),
        seconds_since_kill: Math.round(
          (Date.now() - this.killedSize.at) / 1000,
        ),
      }));
  }
  msSinceLaunch() {
    let e = this.world.rows[this.scope];
    return e ? Date.now() - e.at : 0;
  }
  get pending() {
    return this.scope < 0 ? 0 : this.world.pending(this.scope);
  }
  status() {
    if (this.scope < 0) return { rows: 0, pending: 0 };
    return {
      rows: this.world.read({}, { in: this.scope }).length,
      pending: this.pending,
    };
  }
  kill(e) {
    if (
      ((this.killed = !0),
      this.controller.abort(),
      this.scope >= 0 && !this.world.isRetractedScope(this.scope))
    ) {
      let r = this.status();
      if (
        ((this.killedSize = {
          at: Date.now(),
          reason: e,
          ...r,
          rules: countMatching(
            this.world.read({ topic: "sub" }, { in: this.scope }),
            (o) => o.kind === "sub",
          ),
          agents: this.ctx?.hooks.getAgentCount() ?? 0,
        }),
        !this.lostOnResume)
      )
        logFeatureOk("workflow_kill", {
          reason: fromEnum(e),
          rows: r.rows,
          agents: this.killedSize.agents,
          ms_since_launch: this.msSinceLaunch(),
        });
      this.world.retract(this.scope);
      let { at: t, ...d } = this.killedSize;
      try {
        if (this.killRecord() === void 0)
          this.world.put(
            { topic: "run", runId: this.runId, killed: !0, ...d },
            "host",
            { in: L },
          );
      } catch (o) {
        if (this.world.isFull)
          n(
            `workflow v2: kill record for ${this.runId} skipped \u2014 the world is full`,
          );
        else logError(o);
      }
    }
    ((this.ctx = void 0), (this.words = void 0));
  }
  killRecord() {
    let e = this.killRecordRow();
    if (!e) return;
    return {
      at: Je(e.at),
      reason: jt(e.fact.reason),
      rows: Je(e.fact.rows),
      pending: Je(e.fact.pending),
      rules: Je(e.fact.rules),
      agents: Je(e.fact.agents),
    };
  }
  cutUnawaitedScriptChildren() {
    let e = this.words;
    if (!e) return;
    for (let r of this.world.rows) {
      if (
        r.status === "retracted" ||
        r.by !== "script" ||
        r.in !== this.scope ||
        r.kind !== "eval" ||
        r.fact.topic !== "workflow" ||
        r.fact.child !== !0
      )
        continue;
      if (r.status === "pending" || this.childHasOwnWork(r.addr))
        e.cutChild(r.addr);
    }
  }
  childHasOwnWork(e) {
    if (this.world.isIdle(e)) return !1;
    let r = this.world.rows;
    for (let t = e + 1; t < r.length; t++) {
      let d = r[t];
      if (
        !(
          d.status === "pending" ||
          (d.kind === "sub" && !this.world.isIdle(d.addr))
        ) ||
        !this.world.within(d.addr, e) ||
        !hr(this.world, d, e)
      )
        continue;
      return !0;
    }
    return !1;
  }
  killRecordRow() {
    return this.world
      .read({ topic: "run", runId: this.runId, killed: !0 }, { in: L })
      .find((e) => e.in === L && e.kind === "put" && e.by === "host");
  }
  async run(e, r, t, d) {
    this.sink = t;
    let o = Date.now();
    if (this.scope < 0)
      try {
        let E;
        try {
          E = d.journal ? await d.journal.load() : void 0;
        } catch (pe) {
          throw (
            logFeatureBad("workflow_run", "journal_load_failed", {
              duration_ms: Date.now() - o,
            }),
            pe
          );
        }
        if (this.killed) {
          let pe = Date.now() - o;
          return (
            logFeatureSad("workflow_run", "killed", {
              agents: 0,
              rows: 0,
              duration_ms: pe,
              reopened: !1,
              error_results: 0,
            }),
            {
              result: [],
              agentCount: 0,
              logs: [],
              failures: [],
              durationMs: pe,
            }
          );
        }
        try {
          this.found(e, r, d, E);
        } catch (pe) {
          throw (
            (this.scope = -1),
            (this.priorScopes = []),
            (this.ctx = void 0),
            (this.words = void 0),
            logFeatureBad("workflow_run", "founding_failed", {
              duration_ms: Date.now() - o,
            }),
            pe
          );
        }
      } finally {
        if (this.scope < 0) this.onUnfounded?.();
        this.onUnfounded = void 0;
      }
    (await Promise.race([this.world.whenIdle(this.scope), this.aborted()]),
      this.ctx?.timers.clear(),
      this.words?.clearChildTimers());
    let a = this.reportedRows;
    this.reportedRows = this.world.rows.length;
    let p = this.world.rows[this.scope],
      w =
        p?.status === "failed" && this.scope >= a
          ? p.error
          : this.killedSize?.reason === "runaway" && !this.reportedRunaway
            ? Br
            : void 0,
      _ = w === Br;
    if (_) this.reportedRunaway = !0;
    let I = { in: this.scope },
      x = (E) => E.addr >= a && this.ownRow(E),
      F = this.logs.slice(this.reportedLogs);
    this.reportedLogs = this.logs.length;
    let B = this.ctx?.hooks.getFailures() ?? [],
      U = this.world
        .read({ topic: "script", status: "failed" }, I)
        .filter((E) => x(E) && E.addr !== this.scope),
      j = [
        ...this.world.read({ topic: "workflow", status: "failed" }, I),
        ...this.world.read({ topic: "workflow", status: "retracted" }, I),
      ]
        .filter(
          (E) =>
            E.addr >= a &&
            E.kind === "eval" &&
            E.fact.child === !0 &&
            E.error !== void 0,
        )
        .sort((E, pe) => E.addr - pe.addr),
      J = [
        ...B.slice(this.reportedFailures),
        ...this.world
          .read({ topic: "error" }, I)
          .filter(x)
          .map((E) => truncateMiddleWithMarker(`error: ${b(E.fact)}`)),
        ...U.map((E) => truncateMiddleWithMarker(`script error: ${E.error ?? ""}`)),
        ...j.map((E) =>
          truncateMiddleWithMarker(
            `${LOG_BULLET_GLYPH} ${typeof E.fact.name === "string" ? E.fact.name : typeof E.fact.scriptPath === "string" ? `workflow(${E.fact.scriptPath})` : "workflow()"}: ${E.error ?? ""}`,
          ),
        ),
      ];
    this.reportedFailures = B.length;
    let N = this.world
        .read({ topic: "result" }, I)
        .filter(x)
        .map((E) => E.fact),
      ne = N.length === 0 && p?.status === "done" && this.scope >= a,
      q = ne ? p.value : void 0,
      Y = ne ? q : N.length === 0 && w !== void 0 ? null : N,
      be = ne
        ? Array.isArray(q)
          ? q
          : q === void 0 || q === null
            ? []
            : [q]
        : N,
      we = ne && Array.isArray(q) && q.length === 0 ? 1 : be.length,
      ie = this.killedSize?.agents ?? this.ctx?.hooks.getAgentCount() ?? 0,
      D = Date.now() - o;
    return (
      this.logSettlement({
        result: we,
        errorResults: countMatching(be, At),
        scriptError: w === void 0 ? void 0 : _ ? "runaway" : "script_failed",
        errors:
          countMatching(this.world.read({ topic: "error" }, I), x) + U.length + j.length,
        agentCount: ie,
        durationMs: D,
      }),
      {
        result: Y,
        agentCount: ie,
        logs: F,
        failures: J,
        durationMs: D,
        ...(w !== void 0 && { error: w }),
      }
    );
  }
  logSettlement(e) {
    let r = {
      agents: e.agentCount,
      rows:
        this.killedSize?.rows ?? this.world.read({}, { in: this.scope }).length,
      duration_ms: e.durationMs,
      reopened: this.settlements > 0,
      error_results: e.errorResults,
    };
    if ((this.settlements++, e.scriptError !== void 0)) {
      logFeatureBad("workflow_run", e.scriptError, r);
      return;
    }
    if (this.killed) {
      logFeatureSad("workflow_run", "killed", r);
      return;
    }
    if (e.result > e.errorResults) {
      logFeatureOk("workflow_run", { ...r, rule_errors: e.errors });
      return;
    }
    if (e.errorResults > 0) {
      logFeatureBad("workflow_run", "error_result", r);
      return;
    }
    logFeatureSad("workflow_run", e.errors > 0 ? "rule_error" : "no_result", r);
  }
  settlements = 0;
  reportedRunaway = !1;
  requireOp(e) {
    try {
      (this.requireOpen(), this.requireFounded());
    } catch (r) {
      throw (
        logFeatureBad(
          "workflow_steer",
          this.killed
            ? "killed"
            : this.lostOnResume
              ? "lost_on_resume"
              : "not_founded",
          { verb: fromEnum(e) },
        ),
        r
      );
    }
  }
  put(e) {
    this.requireOp("put");
    let r = this.world.put(Ee(e), or, { in: this.scope });
    return ((this.steered = !0), r);
  }
  retract(e) {
    if (
      (this.requireOp("retract"),
      e === this.scope || !this.world.within(e, this.scope))
    )
      return !1;
    let r = this.world.retract(e);
    if (r) this.steered = !0;
    return r;
  }
  read(e) {
    if (this.scope < 0) return [];
    let r = xe(e ?? {});
    return [...this.priorScopes, this.scope].flatMap((t) =>
      this.world.read(r, { in: t }).map(He),
    );
  }
  markSteer() {
    let e = {
      rows: this.world.rows.length,
      retracted: 0,
      pendingAgents: new Set(),
    };
    for (let r of this.rowsInRun())
      if (r.status === "retracted") e.retracted++;
      else if (r.status === "pending" && Ur(r)) e.pendingAgents.add(r.addr);
    return e;
  }
  reportSteer(e, r) {
    if (this.scope < 0) return;
    let t = 0,
      d = 0,
      o = 0,
      a = 0;
    for (let p of this.rowsInRun()) {
      let w = p.addr >= r.rows;
      if (w && p.kind === "put") t++;
      if (p.status === "retracted") d++;
      if (!Ur(p)) continue;
      if (w) o++;
      if (p.status === "retracted" && (w || r.pendingAgents.has(p.addr))) a++;
    }
    logFeatureOk("workflow_steer", {
      verb: fromEnum(e),
      rows_put: t,
      rows_retracted: d - r.retracted,
      agents_spawned: o,
      agents_aborted: a,
      ms_since_launch: this.msSinceLaunch(),
      run_state: fromEnum(this.state()),
    });
  }
  ownRow(e) {
    if (e.by === "host" && e.fact.topic === "error" && e.fact.kind === "rule")
      return !0;
    if (!this.inChildWorkflow(e.addr)) return !0;
    let r = mr(this.world, e, this.scope);
    return r !== void 0 && !this.inChildWorkflow(r);
  }
  inChildWorkflow(e) {
    return wr(this.world, e, this.scope);
  }
  rowsInRun() {
    if (this.scope < 0) return [];
    return this.world.rows.filter((e) => this.world.within(e.addr, this.scope));
  }
  beginScript(e) {
    if ((this.requireOp("script"), !this.ctx || !this.words))
      return (
        logFeatureBad("workflow_steer", "no_context", { verb: S("script") }),
        { error: "run has no context yet" }
      );
    let r = v9(e, { bindWords: !0 });
    if (!r.ok)
      return (
        logFeatureBad("workflow_steer", "compile_failed", { verb: S("script") }),
        { error: r.error }
      );
    let t = this.evalScript(
      r.vmScript,
      { topic: "script", via: or },
      or,
      { in: this.scope },
      or,
    );
    return ((this.steered = !0), { addr: t });
  }
  async awaitScript(e) {
    await Promise.race([this.world.settled(e), sleep($t)]);
    let r = this.world.rows[e];
    return r.status === "failed" ? { error: r.error } : {};
  }
  async script(e) {
    let r = this.beginScript(e);
    if ("error" in r) return { error: r.error };
    let t = await this.awaitScript(r.addr);
    return { addr: r.addr, ...t };
  }
  killReason() {
    return this.killedSize?.reason ?? this.killRecord()?.reason ?? "unknown";
  }
  requireOpen() {
    if (this.killed)
      throw new R(
        `workflow run ${this.runId} was killed`,
        "workflow v2: run op on a killed run",
      );
  }
  requireFounded() {
    if (this.scope < 0)
      throw new R(
        `workflow run ${this.runId} is not founded`,
        "workflow v2: run-op on an unfounded run",
      );
    if (this.lostOnResume)
      throw new R(
        `workflow run ${this.runId} was restored from the journal on resume; its rules and work are gone \u2014 read its facts, or launch again`,
        "workflow v2: run op on a lost run",
      );
  }
  aborted() {
    let e = this.controller.signal;
    if (e.aborted) return Promise.resolve();
    return new Promise((r) => {
      e.addEventListener("abort", () => r(), { once: !0 });
    });
  }
  found(e, r, t, d) {
    let o = { ...e, abortController: this.controller },
      a = A1t(
        o,
        r,
        (w) => {
          if (w.type === "progress" && w.data.type === "workflow_log")
            this.log(w.data.message);
          this.sink?.onProgress(w);
        },
        this.runId,
        (w, _) => this.sink?.onAgentController(w, _),
        t.args,
        t.seedPhaseTitles,
        t.tokenBudget,
        t.journal,
        d,
        t.workflowName,
        t.invokingRequestId,
        t.parentPromptId,
      );
    ((this.ctx = a),
      (this.vmErrorInfo = bZ(a.vmContext)),
      (this.priorScopes = this.world.rows
        .filter((w) => kr(w) && w.fact.runId === this.runId)
        .map((w) => w.addr)),
      (this.scope = this.world.rows.length));
    let p = this.world.subscribe((w) => {
      if (w.kind === "runaway" && w.scope === this.scope)
        (p(), this.kill("runaway"));
    });
    this.controller.signal.addEventListener("abort", p, { once: !0 });
    try {
      if (
        ((this.words = gr(a, this.world, this.scope, this.controller.signal)),
        !this.vmScript)
      )
        throw new R(
          "a run restored from the journal cannot be founded",
          "workflow v2: found() on a lost run",
        );
      let w = this.evalScript(
        this.vmScript,
        { topic: "script", founding: !0, runId: this.runId },
        "host",
        { in: L },
      );
      if (w !== this.scope)
        throw new R(
          `founding row landed at ${w}, expected ${this.scope}`,
          "workflow v2: founding address mismatch",
        );
      this.retractPriorLives();
      let _ = this.killRecordRow();
      if (_ !== void 0) this.world.retract(_.addr);
      this.world.settled(this.scope).then((I) => {
        if (I.status === "retracted" || this.controller.signal.aborted) return;
        this.cutUnawaitedScriptChildren();
      });
    } catch (w) {
      throw (p(), w);
    }
  }
  evalScript(e, r, t, d, o) {
    let a = this.ctx,
      p = this.words,
      w = {
        vmContext: a.vmContext,
        settle: a.vmBoundary.settle,
        sanitize: a.vmBoundary.sanitize,
        errorInfo: this.vmErrorInfo,
      },
      _ = () => nr(e, w);
    return this.world.eval(
      r,
      () =>
        (o === void 0 ? _() : p.as(o, _)).then((I) => {
          if (I.error) throw new R(I.error, "workflow v2: script failed");
          return I.value;
        }),
      t,
      d,
    );
  }
}
function kr(e) {
  return (
    e.in === L &&
    e.kind === "eval" &&
    e.by === "host" &&
    e.fact.topic === "script" &&
    e.fact.founding === !0
  );
}
function Ur(e) {
  return e.kind === "eval" && e.fact.topic === "agent";
}
function At(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    !Array.isArray(e) &&
    e.error !== void 0
  );
}
function Je(e) {
  return typeof e === "number" && Number.isFinite(e) ? e : 0;
}
class je {
  byId = new Map();
}
function Kr(e, r) {
  let t = new Map();
  for (let o of e.rows) {
    if (!kr(o) || o.status === "pending" || typeof o.fact.runId !== "string")
      continue;
    let a = t.get(o.fact.runId);
    if (a) a.push(o);
    else t.set(o.fact.runId, [o]);
  }
  let d = 0;
  for (let [o, a] of t) {
    if (r.byId.has(o)) continue;
    let p = a.at(-1);
    (r.byId.set(
      o,
      sr.lost(
        o,
        e,
        p.addr,
        a.slice(0, -1).map((w) => w.addr),
      ),
    ),
      d++);
  }
  return d;
}
var Ft = 600000;
class Hr {
  byName = new Map();
}
function Jr({
  toolState: e,
  taskRegistry: r,
  name: t,
  runId: d,
  now: o = Date.now(),
}) {
  if (t === void 0) return;
  let a = e.get(Hr).byName,
    p = a.get(t);
  if ((a.set(t, { runId: d, at: o }), !p || o - p.at > Ft)) return;
  let w = e.get(je).byId.get(p.runId);
  logFeatureOk("workflow_relaunch_soon", {
    name: fromEnum(t),
    seconds_since_prev: Math.round((o - p.at) / 1000),
    prev_state: fromEnum(w ? w.state() : zt(r, p.runId)),
    prev_was_steered: w?.wasSteered ?? !1,
  });
}
function zt(e, r) {
  for (let t of Object.values(e.all())) {
    if (t.type !== "local_workflow" || t.workflowRunId !== r) continue;
    switch (t.status) {
      case "pending":
      case "running":
        return "open";
      case "killed":
        return "killed";
      case "completed":
      case "failed":
      case "paused":
        return "settled";
    }
  }
  return "unknown";
}
function qe(e) {
  if (typeof e.runId !== "string") return;
  let r =
    e.put !== void 0 || typeof e.retract === "number" || e.read !== void 0;
  return {
    runId: e.runId,
    ...(e.put !== void 0 && { put: e.put }),
    ...(typeof e.retract === "number" && { retract: e.retract }),
    ...(e.read !== void 0 && { read: e.read }),
    ...(!r &&
      typeof e.script === "string" &&
      e.script !== "" && { script: e.script }),
  };
}
var Ao = createLazyValue(() =>
  c({
    verb: X(["put", "retract", "read", "script"]),
    addr: T().optional(),
    retracted: O().optional(),
    rows: v(se()).optional(),
    rowsTotal: T().optional(),
    error: s().optional(),
    reopened: O(),
    status: c({ pending: T() }),
    killed: c({
      at: T(),
      reason: X([...tr, "unknown"]).catch("unknown"),
      rows: T(),
      pending: T(),
      rules: T(),
      agents: T(),
    }).optional(),
  }),
);
function br(e) {
  let r = [];
  if (e.put !== void 0) r.push("put");
  if (e.retract !== void 0) r.push("retract");
  if (e.read !== void 0) r.push("read");
  if (e.script !== void 0) r.push("script");
  return r.length === 1 ? r[0] : void 0;
}
import { appendFile, mkdir, readFile } from "fs/promises";
import { basename as qr, dirname, join as Vt } from "path";
var Bt = createLazyValue(() => {
    let e = vx().nonnegative();
    return Ko("k", [
      c({
        k: k("put"),
        addr: e,
        kind: X(["put", "eval", "sub"]),
        fact: fr(),
        by: s(),
        in: vx().min(L),
        at: T().finite(),
        status: X(Ar),
      }).refine((r) => r.in < r.addr, {
        message: "`in` must be ROOT or an earlier address",
      }),
      c({
        k: k("settled"),
        addr: e,
        status: X(["done", "failed"]),
        value: se().optional(),
        error: s().optional(),
      }),
      c({ k: k("retracted"), addr: e }),
    ]);
  }),
  Gr = "world.jsonl",
  Ut = 4194304;
function Xr() {
  let e = fy() ?? getProjectDir(he());
  return Vt(e, K(), Gr);
}
function Zr(e) {
  let r = dirname(e),
    t = getProjectKeyFromDir(dirname(r));
  if (t === void 0 || qr(e) !== Gr) return;
  let d = STORAGE_KEYS.sessionJournal(t, qr(r), "world");
  return kd(d) === void 0 ? d : void 0;
}
function Qr(e, r, t) {
  let d = Zr(r),
    o = !1,
    a = !1,
    p = Promise.resolve(),
    w = (I) => {
      p = p
        .then(async () => {
          if (a) return;
          if (isHoverRestEnabled() && t !== void 0 && d !== void 0) {
            let x = await t.append(d, [{ data: t8(I) }]);
            if (!x.ok)
              throw (
                n(`world journal append failed: ${We(x.error)}`, {
                  level: "warn",
                }),
                Error("world journal append failed", { cause: x.error })
              );
            return;
          }
          if (!o) (await mkdir(dirname(r), { recursive: !0 }), (o = !0));
          await appendFile(r, t8(I));
        })
        .catch((x) => {
          ((a = !0),
            _(),
            logFeatureSad("workflow_journal", "append_failed"),
            n(
              `world journal append failed; the writer detaches and this session's later rows stay in memory only: ${x}`,
              { level: "warn" },
            ));
        });
    },
    _ = e.subscribe((I) => {
      switch (I.kind) {
        case "put": {
          let { addr: x, kind: F, fact: B, by: U, at: j, status: J } = I.row;
          w({
            k: "put",
            addr: x,
            kind: F,
            fact: B,
            by: U,
            in: I.row.in,
            at: j,
            status: J,
          });
          return;
        }
        case "settled": {
          let { addr: x, status: F, value: B, error: U } = I.row;
          if (F === "done") w({ k: "settled", addr: x, status: F, value: B });
          else if (F === "failed")
            w({ k: "settled", addr: x, status: F, error: U });
          return;
        }
        case "retracted":
          w({ k: "retracted", addr: I.row.addr });
          return;
        case "runaway":
          return;
      }
    });
  return () => (_(), p);
}
async function et(e, r) {
  let t = Zr(e);
  if (isHoverRestEnabled() && r !== void 0 && t !== void 0) {
    let w = await Kt(r, t);
    if (w === void 0) return { lines: [], skipped: 0 };
    let _ = Yr(w),
      I = await r.statMeta(t);
    if (!I.ok)
      throw (
        n(`world journal stat failed: ${We(I.error)}`, { level: "warn" }),
        Error("world journal stat failed", { cause: I.error })
      );
    return (I.value.storedBytes ?? I.value.size) > I.value.size
      ? { lines: _.lines, skipped: _.skipped + 1 }
      : _;
  }
  let d;
  try {
    d = await readFile(e, "utf8");
  } catch (w) {
    if (W(w)) return { lines: [], skipped: 0 };
    throw w;
  }
  let o = d.split(`
`),
    a =
      d.length > 0 &&
      !d.endsWith(`
`);
  if (a) o.pop();
  let p = Yr(o);
  return a ? { lines: p.lines, skipped: p.skipped + 1 } : p;
}
function Yr(e) {
  let r = [],
    t = new Set(),
    d = 0;
  for (let o of e) {
    if (!o) continue;
    let a;
    try {
      a = Is(o);
    } catch {
      d++;
      continue;
    }
    let p = Bt().safeParse(a);
    if (!p.success) {
      d++;
      continue;
    }
    if (p.data.k === "put") {
      if (t.has(p.data.addr)) {
        d++;
        continue;
      }
      t.add(p.data.addr);
    }
    r.push(p.data);
  }
  if (d > 0)
    n(`world journal: skipped ${d} malformed or invalid line(s)`, {
      level: "warn",
    });
  return { lines: r, skipped: d };
}
function rt(e) {
  let r = 0;
  for (let t of e) if (t.addr >= r) r = t.addr + 1;
  return r;
}
async function Kt(e, r) {
  let t = new TextDecoder("utf-8", { ignoreBOM: !0 }),
    d = [],
    o;
  for (;;) {
    let a = await e.readRecords(r, {
      ...(o !== void 0 && { fromSeq: o }),
      maxBytes: Ut,
    });
    if (!a.ok) {
      if (a.error.code === "NotFound") return;
      throw (
        n(`world journal read failed: ${We(a.error)}`, { level: "warn" }),
        Error("world journal read failed", { cause: a.error })
      );
    }
    for (let w of a.value.items) {
      let _ = t.decode(w.data);
      d.push(
        _.endsWith(`
`)
          ? _.slice(0, -1)
          : _,
      );
    }
    let p = a.value.nextSeq;
    if (p === void 0) return d;
    if (o !== void 0 && p <= o)
      throw Error("world journal read cursor failed to advance");
    o = p;
  }
}
function tt(e, r) {
  if (e.rows.length > 0)
    throw Error("replayWorldJournal: the world is not empty");
  let t = new Map(),
    d = new Map(),
    o = new Set();
  for (let p of r)
    switch (p.k) {
      case "put":
        t.set(p.addr, p);
        break;
      case "settled":
        d.set(p.addr, p);
        break;
      case "retracted":
        o.add(p.addr);
        break;
    }
  let a = [];
  for (let p = 0; p < t.size; p++) {
    let w = t.get(p);
    if (!w) break;
    let _ = {
        addr: p,
        kind: w.kind,
        fact: w.fact,
        by: w.by,
        in: w.in,
        at: w.at,
        status: w.status,
      },
      I = d.get(p);
    if (I)
      if (((_.status = I.status), I.status === "done")) _.value = I.value;
      else _.error = I.error;
    if (o.has(p)) _.status = "retracted";
    else if (_.kind === "sub" && _.status === "live") _.status = "retracted";
    else if (_.status === "pending")
      ((_.status = "failed"), (_.error = "lost on resume"));
    a.push(_);
  }
  return (e.restore(a), a.length);
}
var nt = new Gt(() => new pr());
function vr(e) {
  return nt.of(e);
}
class ot {
  opened;
  unsubscribe;
}
var Rr = new Gt(() => new ot()),
  Ht = new Gt(() => new Map());
function Sr(e, r) {
  let t = Rr.of(e);
  if (t.opened) return t.opened;
  if (t.unsubscribe === void 0) {
    let d = K();
    t.unsubscribe = sc((o, a) => {
      if (a === "cd" || a === "hydrate" || o === d) return;
      (t.unsubscribe?.(), Rr.drop(e), nt.drop(e));
    });
  }
  return (
    (t.opened = (async () => {
      let d = vr(e),
        o = Xr(),
        a = Ht.of(e),
        p = a.get(o);
      if (p !== void 0) {
        if (
          (logFeatureSad("workflow_journal", "writer_reclaimed"),
          n(
            `world journal at ${o} had a writer from before a session switch; the re-entered session reclaims the file and the pre-switch world stops journaling`,
            { level: "warn" },
          ),
          await p(),
          a.get(o) === p)
        )
          a.delete(o);
      }
      let w = 0,
        _ = !1,
        I = !1;
      try {
        let { lines: x, skipped: F } = await et(o, r);
        if (x.length > 0 && d.rows.length === 0) w = tt(d, x);
        _ = F === 0 && w === rt(x) && d.rows.length === w;
      } catch (x) {
        ((I = !0), n(`world journal replay failed: ${x}`, { level: "warn" }));
      }
      if (Rr.peek(e) !== t) return Sr(e, r);
      if (!_) {
        if (
          (logFeatureSad("workflow_journal", I ? "replay_failed" : "not_whole"),
          n(
            `world journal at ${o} is not whole after replay (${w} rows restored); the world stays in memory for this session`,
            { level: "warn" },
          ),
          I)
        )
          t.opened = void 0;
        return { restored: w, attached: !1 };
      }
      return (
        a.set(o, Qr(d, o, r)),
        logFeatureOk("workflow_journal"),
        { restored: w, attached: !0 }
      );
    })()),
    t.opened
  );
}
var _r = 80;
async function at(e) {
  (await Sr(e.session, e.storageV5), Kr(vr(e.session), e.toolState.get(je)));
}
function ke() {
  return;
}
function Ir(e, r) {
  return e.name === void 0 &&
    (e.script !== void 0 || e.scriptPath !== void 0) &&
    isWorkflowAuthoringSkillAvailable(r)
    ? `
Load the \`${WORKFLOW_AUTHORING_SKILL_NAME}\` skill for the script reference if you have not, fix the script, and retry.`
    : "";
}
function lt() {
  return "";
}
var Yt =
    "script contains control characters that would be hidden in the approval dialog",
  Xt = createLazyValue(() =>
    Qe({
      script: s()
        .max(Uh)
        .refine(rU, Yt)
        .optional()
        .describe(
          "Self-contained workflow script. Must begin with `export const meta = { name, description, phases }` (pure literal, no computed values) followed by the script body using agent()/parallel()/pipeline()/phase()." +
            (ke()?.SCRIPT_DESCRIPTION_V2 ?? ""),
        ),
      name: s()
        .refine(
          (e) => stripInvisibleCharacters(e) === e,
          "contains control or invisible format characters",
        )
        .optional()
        .describe(
          "Name of a predefined workflow (built-in or from .claude/workflows/). Resolves to a self-contained script.",
        ),
      description: s()
        .optional()
        .describe(
          "Ignored \u2014 set the workflow description in the script's `meta` block.",
        ),
      title: s()
        .optional()
        .describe(
          "Ignored \u2014 set the workflow title in the script's `meta` block.",
        ),
      args: se()
        .optional()
        .describe(
          "Optional input value exposed to the script as the global `args`, verbatim. Pass arrays/objects as actual JSON values, NOT as a " +
            "JSON-encoded string \u2014 a stringified list breaks `args.filter`/" +
            "`args.map` in the script. Use for parameterized named workflows (e.g. a research question).",
        ),
      scriptPath: s()
        .refine(
          (e) => stripInvisibleCharacters(e) === e,
          "contains control or invisible format characters",
        )
        .optional()
        .describe(
          "Path to a workflow script file on disk. Every Workflow invocation persists its script under the session directory and returns the path in the tool result. To iterate, edit that file with Write/Edit and re-invoke Workflow with the same `scriptPath` instead of re-sending the full script. Takes precedence over `script` and `name`.",
        ),
      resumeFromRunId: s()
        .regex(/^wf_[a-z0-9-]{6,}$/)
        .optional()
        .describe(
          `Run ID of a prior Workflow invocation to resume from. Completed agent() calls with unchanged (prompt, opts) return their cached results instantly; only edited or new calls re-run. Same-session only. Stop the prior run first (${TASK_STOP_TOOL_NAME}) before resuming.`,
        ),
      ...(ke()?.runOpFields() ?? {}),
      ...!1,
    }).refine((e) => e.script || e.name || e.scriptPath || e.runId, {
      message: "Must provide script, name, scriptPath, or runId",
    }),
  ),
  Zt = createLazyValue(() =>
    c({
      status: X([
        "async_launched",
        "remote_launched",
        ...(ke() ? [ke().RUN_OP_STATUS] : []),
      ]),
      taskId: s(),
      taskType: X(["local_workflow", "remote_agent"])
        .optional()
        .describe(
          "TaskType of the registered background task \u2014 'local_workflow' for in-process runs, 'remote_agent' when remote:true dispatches to CCR. Set on all new writes; absent only on transcripts written before this field existed.",
        ),
      workflowName: s()
        .optional()
        .describe(
          "meta.name from the workflow script \u2014 same value as task_started.workflow_name. Set on all new writes; absent only on transcripts written before this field existed.",
        ),
      runId: s()
        .optional()
        .describe(
          "Local workflow run identifier for resumeFromRunId. Absent for remote_launched (the CCR session URL is the resume handle there) and on transcripts written before this field existed.",
        ),
      summary: s().optional(),
      transcriptDir: s()
        .optional()
        .describe(
          "Directory where subagent transcripts are written during execution",
        ),
      scriptPath: s()
        .optional()
        .describe(
          "Path to the persisted workflow script for this invocation. Editable via Write/Edit; pass back as `scriptPath` to re-run without resending the script.",
        ),
      sessionUrl: s()
        .optional()
        .describe("CCR session URL when status is remote_launched"),
      warning: s()
        .optional()
        .describe(
          "Non-blocking heads-up (e.g. local git state diverges from the pushed branch the cloud session will clone)",
        ),
      error: s().optional().describe("Set if syntax check failed"),
      ...(ke()?.runOpOutputFields() ?? {}),
    }),
  );
class De extends Error {
  constructor(e) {
    super(e);
    this.name = "WorkflowInputError";
  }
}
async function dt(e, r, t) {
  if (e.scriptPath) {
    let d, o;
    if (e.script) ((d = e.script), (o = resolve(getCwd(), e.scriptPath)));
    else {
      let a = await Ndt(e.scriptPath, r);
      if ("error" in a) return a;
      ((d = a.script), (o = a.path));
    }
    if (getBundledWorkflows().some((a) => a.script === d || a.v2Script === d))
      return {
        script: d,
        resolvedScriptPath: o,
        source: "built-in",
        scriptMatchesDefinition: !0,
      };
    return { script: d, resolvedScriptPath: o };
  }
  if (e.name) {
    let d = await getWorkflowByName(e.name, getCwd(), t);
    if (!d) {
      let o = (await getAllWorkflows(getCwd(), t)).map((a) => a.name).join(", ");
      return {
        error: `Workflow "${e.name}" not found. Available: ${o || "(none)"}`,
      };
    }
    return {
      script: e.script ?? d.script,
      source: d.source,
      scriptMatchesDefinition: e.script === void 0 || e.script === d.script,
    };
  }
  if (e.script) return { script: e.script };
  return { error: "Must provide script, name, or scriptPath" };
}
var ut = {
    result: !1,
    message:
      "Tool dispatch was retracted by a server fallback; the input may be truncated.",
    errorCode: 7,
  },
  WorkflowTool = buildTool({
    name: WORKFLOW_TOOL_NAME,
    aliases: ["RunWorkflow"],
    searchHint: "orchestrate subagents with deterministic JavaScript workflow",
    enablesCodeExecution: !0,
    maxResultSizeChars: 1e5,
    isEnabled: () => areWorkflowsEnabled(),
    async prompt(e) {
      return fin(isWorkflowAuthoringSkillAvailable(e?.tools)) + getWorkflowSizeGuidelinePromptText(ee().workflowSizeGuideline) + lt();
    },
    async description(e, r) {
      return fin(isWorkflowAuthoringSkillAvailable(r?.tools)) + getWorkflowSizeGuidelinePromptText(ee().workflowSizeGuideline) + lt();
    },
    get inputSchema() {
      return Xt();
    },
    get outputSchema() {
      return Zt();
    },
    coerceInput: (e) => xr(e, { apply: isJadeCompassEnabled() }),
    toAutoClassifierInput(e) {
      let r = ke();
      if (r && typeof e.runId === "string") return r.runOpClassifierInput(e);
      if (e.script && e.scriptPath)
        return `${e.script}

scriptPath: ${e.scriptPath}`;
      if (e.script && e.name)
        return `${e.script}

name: ${e.name}`;
      return e.script || e.scriptPath || e.name || "";
    },
    async validateInput(e, r) {
      if (isServerFallbackDiscard(r.abortController.signal)) return ut;
      if (areWorkflowsDisabledBySettings())
        return {
          result: !1,
          message:
            "Dynamic workflows are disabled by managed settings (`disableWorkflows`).",
          errorCode: 5,
        };
      if (!areWorkflowsEnabled())
        return {
          result: !1,
          message:
            'Dynamic workflows are not enabled for this session (org policy, launch gate, or the "Dynamic workflows" setting in /config).',
          errorCode: 6,
        };
      if (typeof e.runId === "string") {
        let o = ke();
        if (!o)
          return {
            result: !1,
            message: "runId is not a field of this tool here.",
            errorCode: 9,
          };
        await at(r);
        let a = await o.validateRunOp(e, r);
        if (a) return a;
      }
      if (isWorkflowNameOnlyEnabled()) {
        let o = [
          e.script && "script",
          e.scriptPath && "scriptPath",
          e.resumeFromRunId && "resumeFromRunId",
          e.remote && "remote",
        ].filter((a) => Boolean(a));
        if (o.length > 0)
          return {
            result: !1,
            message: `This session restricts the Workflow tool to named workflows (${WORKFLOW_NAME_ONLY_ENV} is set). Not allowed here: ${o.join(", ")}. Invoke as {name, args} only.`,
            errorCode: 8,
          };
      }
      if (e.scriptPath) {
        let o = min(e.scriptPath, r);
        if (o !== null) return { result: !1, message: o, errorCode: 15 };
      }
      let t = await dt(e, r, r.storageV5);
      if (isServerFallbackDiscard(r.abortController.signal)) return ut;
      if ("error" in t) {
        if (e.name && !e.scriptPath) logFeatureBad("workflow_resolve", "not_found");
        return { result: !1, message: t.error, errorCode: 1 };
      }
      if (e.name && !e.scriptPath) logFeatureOk("workflow_resolve");
      let d = parseWorkflowScript(t.script);
      if ("error" in d)
        return {
          result: !1,
          message: `Invalid workflow script: ${d.error}${Ir(e, r.options.tools)}`,
          errorCode: 2,
        };
      if (e.script && usesNondeterministicApi(d.scriptBody))
        return {
          result: !1,
          message: `Workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.${Ir(e, r.options.tools)}`,
          errorCode: 4,
        };
      if (e.resumeFromRunId) {
        let o = ct(e.resumeFromRunId, r);
        if (o) return { result: !1, message: o, errorCode: 3 };
      }
      return { result: !0 };
    },
    async checkPermissions(e, r) {
      let t = getToolPermissionContext(r),
        d = qe(e) !== void 0,
        o = e.scriptPath || d ? void 0 : e.name,
        a = (B) => (o ? ah(t, WORKFLOW_TOOL_NAME, B).get(o) : void 0),
        p = a("deny");
      if (p)
        return {
          behavior: "deny",
          message: `Workflow ${o} blocked by permission rules`,
          decisionReason: { type: "rule", rule: p },
        };
      let w = d ? qe(e) : void 0;
      if (w && br(w) === "read")
        return {
          behavior: "allow",
          updatedInput: e,
          decisionReason: { type: "other", reason: READ_ONLY_AUTO_ALLOW_REASON },
        };
      let _ = e;
      if (d);
      else if (e.scriptPath) {
        let B = await Ndt(e.scriptPath, r);
        if ("error" in B)
          return {
            behavior: "deny",
            message: B.error,
            decisionReason: {
              type: "other",
              reason: "workflow scriptPath outside the readable set",
            },
          };
        _ = { ...e, script: B.script };
      } else if (e.name) {
        let B = await getWorkflowByName(e.name, getCwd(), r.storageV5);
        _ = { ...e, script: B?.script };
      }
      let I =
          (d && ke()?.RUN_OP_CONSENT_MESSAGE) ||
          "Review dynamic workflow before running",
        x = a("ask");
      if (x)
        return {
          behavior: "ask",
          message: I,
          updatedInput: _,
          decisionReason: { type: "rule", rule: x },
        };
      let F = a("allow");
      if (F)
        return {
          behavior: "allow",
          updatedInput: _,
          decisionReason: { type: "rule", rule: F },
        };
      return {
        behavior: "ask",
        message: I,
        updatedInput: _,
        ...(o && {
          suggestions: [
            {
              type: "addRules",
              rules: [{ toolName: WORKFLOW_TOOL_NAME, ruleContent: o }],
              behavior: "allow",
              destination: "localSettings",
            },
          ],
        }),
      };
    },
    userFacingName() {
      return "Workflow";
    },
    getToolUseSummary(e) {
      let r = e ? qe(e) : void 0;
      if (r && ke()) return `workflow ${r.runId} \xB7 ${br(r) ?? "?"}`;
      if (e?.scriptPath) {
        let t = st(stripInvisibleCharacters(e.scriptPath));
        return e.script ? `${t} \xB7 ${Le(e.script)}` : t;
      }
      if (e?.name)
        return e.script
          ? `dynamic workflow: ${stripInvisibleCharacters(e.name)} \xB7 ${Le(e.script)}`
          : `dynamic workflow: ${stripInvisibleCharacters(e.name)}`;
      if (!e?.script) return null;
      return Le(e.script);
    },
    async call(e, r, t, d, o) {
      if (r.agentId !== void 0 && isAgentStopPending(r.agentId))
        throw (
          logFeatureBad("subagent_launch", "workflow_spawner_stop_pending"),
          new De(
            "This agent has been stopped and its stop is still completing; it cannot launch workflows or act on existing runs.",
          )
        );
      if (typeof e.runId === "string") {
        let D = ke();
        if (!D) throw new De("runId is not a field of this tool here.");
        await at(r);
        let E = await D.callRunOp(e, r);
        if (E)
          return {
            data: {
              status: D.RUN_OP_STATUS,
              taskId: "",
              runId: E.runId,
              runOp: E.runOp,
            },
          };
      }
      let a = await dt(e, r, r.storageV5);
      if ("error" in a) throw new De(a.error);
      let { script: p, source: w, resolvedScriptPath: _ } = a,
        I = w === "built-in" && a.scriptMatchesDefinition === !0,
        x = parseWorkflowScript(p);
      if ("error" in x) throw new De(`Invalid workflow script: ${x.error}`);
      let F = e.resumeFromRunId ?? `wf_${randomUUID().slice(0, 12)}`,
        B = generateTaskId("local_workflow"),
        U = x.meta.description,
        j = x.meta.name,
        J = v9(x.scriptBody);
      if (!J.ok)
        return (
          logFeatureBad("task_local_workflow", "compile_failed"),
          {
            data: {
              status: "async_launched",
              taskId: B,
              taskType: "local_workflow",
              workflowName: j,
              runId: F,
              summary: U,
              error: `${J.error}${Ir(e, r.options.tools)}`,
            },
          }
        );
      let N = getWorkflowTranscriptDir(F),
        ne = _ ?? NTt(j, F, p, r.storageV5),
        q = e.scriptPath ? void 0 : w,
        Y = e.scriptPath ? "scriptPath" : (w ?? "inline"),
        be = Fdt(j, q, I),
        we = $dt(x.meta.description, q, I);
      if (
        (logEvent("tengu_workflow_launched", {
          invocation_mode: S(
            e.scriptPath ? "scriptPath" : e.name ? "named" : "inline",
          ),
          workflow_source: fromEnum(Y),
          workflow_name: be,
          workflow_description: we,
          phase_count: x.meta.phases?.length ?? 0,
          launched_from_subagent: r.agentId != null,
          has_args: e.args != null,
          is_resume: e.resumeFromRunId != null,
          script_size_chars: p.length,
        }),
        e.resumeFromRunId == null)
      )
        Jr({
          toolState: r.toolState,
          taskRegistry: r.taskRegistry,
          name: vqe(q, I) ? Cr(j) : void 0,
          runId: F,
        });
      let ie = {
        workflowRunId: F,
        script: p,
        scriptPath: ne,
        args: e.args,
        meta: x.meta,
        vmScript: J.vmScript,
        toolUseContext: r,
        canUseTool: t,
        toolUseId: r.toolUseId,
        transcriptDir: N,
        telemetry: {
          source: Y,
          name: be,
          description: we,
          scriptIsVerbatimBuiltIn: I,
        },
        invokingRequestId: d?.requestId,
        parentPromptId: getParentPromptId(r.messages, r.agentContext),
      };
      if (e.resumeFromRunId) {
        let D = ct(e.resumeFromRunId, r);
        if (D) throw (logFeatureBad("task_local_workflow", "resume_collision"), new De(D));
      }
      return (
        Rqe({ ...ie, taskId: B, isResume: e.resumeFromRunId != null }),
        {
          data: {
            status: "async_launched",
            taskId: B,
            taskType: "local_workflow",
            workflowName: j,
            runId: F,
            summary: U,
            transcriptDir: N,
            scriptPath: ne,
          },
        }
      );
    },
    renderToolUseMessage(e, { verbose: r }) {
      let t = qe(e),
        d = ke();
      if (t && d) return d.renderRunOp(t, r);
      if (e.scriptPath) {
        let o = stripInvisibleCharacters(e.scriptPath),
          a = r ? o : st(o);
        if (!e.script) return a;
        return r
          ? `${o}
${e.script}`
          : `${a} \xB7 ${Le(e.script)}`;
      }
      if (e.name) {
        let o = stripInvisibleCharacters(e.name);
        if (!e.script) return `dynamic workflow: ${o}`;
        return r
          ? `dynamic workflow: ${o}
${e.script}`
          : `dynamic workflow: ${o} \xB7 ${Le(e.script)}`;
      }
      if (!e.script) return null;
      return r ? e.script : Le(e.script);
    },
    mapToolResultToToolResultBlockParam(e, r) {
      if (e.error)
        return {
          tool_use_id: r,
          type: "tool_result",
          content: `Workflow script has a syntax error and was not launched:
${e.error}`,
          is_error: !0,
        };
      let t = ke()?.runOpToolResultText(e.runId, e.runOp);
      if (t)
        return {
          tool_use_id: r,
          type: "tool_result",
          content: t.content,
          is_error: t.isError,
        };
      if (e.status === "remote_launched")
        return {
          tool_use_id: r,
          type: "tool_result",
          content:
            `Workflow launched in a remote CCR session. Task ID: ${e.taskId}
Session: ${e.sessionUrl}
` +
            (e.summary
              ? `Summary: ${e.summary}
`
              : "") +
            (e.warning
              ? `Warning: ${e.warning}
`
              : "") +
            `
The workflow runs against a fresh clone of the pushed branch; phase progress is visible at the session URL, not in /workflows. You will be notified when it completes.`,
          is_error: !1,
        };
      let d = e.summary
          ? `
Summary: ${e.summary}`
          : "",
        o = e.transcriptDir
          ? `
Transcript dir: ${e.transcriptDir}`
          : "",
        a = e.scriptPath
          ? `
Script file: ${e.scriptPath}
(Edit this file with Write/Edit and re-invoke Workflow with {scriptPath: "${e.scriptPath}"} to iterate without resending the script.)`
          : "",
        p =
          e.runId && e.scriptPath
            ? `
Run ID: ${e.runId}
To resume after editing the script: Workflow({scriptPath: "${e.scriptPath}", resumeFromRunId: "${e.runId}"}) \u2014 completed agents return cached results (cached results may themselves be empty \u2014 inspect journal.jsonl before assuming there is something to recover).`
            : "",
        w = (e.runId, ""),
        _ = `Workflow launched in background. Task ID: ${e.taskId}${d}${o}${a}${p}${w}

You will be notified when it completes. Use /workflows to watch live progress.`;
      return { tool_use_id: r, type: "tool_result", content: _, is_error: !1 };
    },
  });
function Le(e) {
  let r = parseWorkflowScript(e);
  if (!("error" in r)) return stripInvisibleCharacters(r.meta.description);
  let t =
      e
        .split(
          `
`,
        )
        .find((w) => w.trim()) ?? truncateToCodeUnits(e, 40),
    d = te(t) > _r || t.length > _r ? truncateToCodeUnits(t, _r - 1) + "\u2026" : t,
    o =
      countOccurrences(
        e,
        `
`,
      ) + 1,
    a = formatOverflowHint(o - 1),
    p = stripInvisibleCharacters(d);
  return a ? `${p} ${a}` : p;
}
function ct(e, r) {
  for (let [d, o] of Object.entries(r.taskRegistry?.all() ?? {})) {
    if (o.type !== "local_workflow" || o.workflowRunId !== e) continue;
    if (o.status === "running")
      return `Workflow ${e} is still running (task ${d}). Stop it first with ${TASK_STOP_TOOL_NAME}({taskId: "${d}"}) before resuming.`;
    if (!isTaskLoopSettled(d))
      return o.status === "paused"
        ? `Workflow ${e} is paused but its run has not exited yet (task ${d}); its agents are being stopped. Resuming now would run two copies of its agents against the same journal \u2014 wait for it to exit.`
        : `Workflow ${e} is not running but its run has not exited yet (task ${d}). Resuming now would run two copies of its agents against the same journal. Run ${TASK_STOP_TOOL_NAME}({taskId: "${d}"}) on it or wait for it to exit.`;
  }
  let t = r.toolState.get(je).byId.get(e);
  if (t !== void 0 && !t.isKilled && t.isActive)
    return `Workflow ${e} is still running. Wait for it to settle, or stop it first with ${TASK_STOP_TOOL_NAME}, before resuming.`;
  return;
}
export { WorkflowTool };
