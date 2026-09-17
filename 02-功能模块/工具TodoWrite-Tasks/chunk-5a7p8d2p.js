// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Nn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { useStoreSelector } from "../../01-核心基础设施/共享小工具-未细化/use-store-selector.js";
import { U } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { l, A, Bp, Kd } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { We, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { isTeamLead } from "../Teammates团队/chunk-811z9z0t.js";
import { EZn, AZn, zE, VE, Wk, CZn, RC } from "../Teammates团队/chunk-g6nvp9mm.js";
import { Qt, re, De, E, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { h3 } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
F();
import { watch } from "fs";
var g = 5000,
  T = 50,
  f = 5000;
class UOt {
  #c = void 0;
  #d = !1;
  #n = null;
  #f = null;
  #i = !1;
  #o = null;
  #p = !1;
  #l = null;
  #t = null;
  #b = null;
  #y = Le();
  #g = 0;
  #a = !1;
  #r;
  #s;
  #e = { phase: "idle" };
  #R = 0;
  #S = 0;
  #m = 0;
  #E;
  constructor(e, s = globalThis, t = () => {}) {
    ((this.#r = isHoverRestEnabled() && e !== void 0 ? e : void 0),
      (this.#s = s),
      (this.#E = t));
  }
  #w(e) {
    let s = this.#d;
    if (((this.#d = e), e && !s)) this.#E();
  }
  getSnapshot = () => (this.#d ? void 0 : this.#c);
  subscribe = (e) => {
    let s = this.#y.subscribe(e);
    if ((this.#g++, !this.#a))
      ((this.#a = !0), (this.#b = EZn(this.#h)), this.#v());
    let t = !1;
    return () => {
      if (t) return;
      if (((t = !0), s(), this.#g--, this.#g === 0)) this.#L();
    };
  };
  #V() {
    this.#y.emit();
  }
  #F(e) {
    if (this.#r) {
      this.#T(this.#r, e, !1);
      return;
    }
    let s = Wk(e);
    if (s === this.#f && this.#n !== null) return;
    (this.#n?.close(), (this.#n = null), (this.#f = s));
    try {
      let t = watch(s, this.#h);
      (t.on("error", (i) => {
        if (
          (n(`Task list watcher error: ${l(i)}`, { level: "warn" }),
          this.#n === t)
        ) {
          if (((this.#f = null), (this.#i = !0), this.#t === null))
            ((this.#t = this.#s.setTimeout(this.#h, f)), this.#t.unref());
        }
      }),
        t.unref(),
        (this.#n = t),
        (this.#i = !1));
    } catch {}
  }
  #T(e, s, t) {
    let i = this.#e;
    if (i.phase !== "idle" && i.listId === s && !t) return;
    if (i.phase === "live") i.subscription.unsubscribe();
    let r = ++this.#m;
    ((this.#e = {
      phase: "subscribing",
      listId: s,
      generation: r,
      endedEarly: !1,
    }),
      (this.#i = !0),
      this.#u());
    let u = (o, p) => {
        if (r !== this.#m) {
          o?.unsubscribe();
          return;
        }
        let d = this.#e;
        if (o && d.phase === "subscribing" && d.endedEarly) {
          if ((o.unsubscribe(), t)) this.#k(s);
          else this.#T(e, s, !0);
          return;
        }
        if (o) {
          ((this.#e = {
            phase: "live",
            listId: s,
            generation: r,
            subscription: o,
            onRetry: t,
          }),
            (this.#i = !1),
            this.#h());
          return;
        }
        if (
          (n(`Task list subscription unavailable: ${p}`, { level: "warn" }), t)
        ) {
          this.#k(s);
          return;
        }
        ((this.#e = { phase: "idle" }), (this.#i = !0), this.#u());
      },
      a;
    try {
      a = e.subscribe(
        { target: "scope", scope: { namespace: "task", listId: VE(s) } },
        (o) => this.#x(o, r),
      );
    } catch (o) {
      u(null, l(o));
      return;
    }
    a.then(
      (o) => (o.ok ? u(o.value) : u(null, We(o.error))),
      (o) => u(null, l(o)),
    );
  }
  #x(e, s) {
    let t = this.#e;
    if (t.phase === "subscribing" && t.generation === s && !e.ok) {
      t.endedEarly = !0;
      return;
    }
    if (!this.#a || t.phase !== "live" || t.generation !== s) return;
    if (e.ok) {
      ((t.onRetry = !1), this.#h());
      return;
    }
    if (
      (n(`Task list subscription ended: ${We(e.error)}`, { level: "warn" }),
      t.onRetry || !this.#r)
    ) {
      (t.subscription.unsubscribe(), this.#k(t.listId));
      return;
    }
    this.#T(this.#r, t.listId, !0);
  }
  #k(e) {
    (this.#m++,
      (this.#e = { phase: "givenUp", listId: e }),
      (this.#i = !0),
      this.#h());
  }
  #u() {
    if (!this.#a) return;
    if (this.#t) this.#s.clearTimeout(this.#t);
    ((this.#t = this.#s.setTimeout(this.#h, f)), this.#t.unref());
  }
  #h = () => {
    if (this.#l) this.#s.clearTimeout(this.#l);
    ((this.#l = this.#s.setTimeout(() => void this.#v(), T)), this.#l.unref());
  };
  refetch = () => this.#v();
  #v = async () => {
    let e = ++this.#R,
      s = zE();
    this.#F(s);
    let t;
    try {
      t = await CZn(s, this.#r);
    } catch (a) {
      (n(`Task list read failed: ${l(a)}`, { level: "warn" }), (t = null));
    }
    if (this.#r && e < this.#S) return;
    if (((this.#S = e), t === null)) {
      if (this.#a) ((this.#i = !0), this.#u());
      return;
    }
    if (this.#e.phase === "live") this.#i = !1;
    let i = t.filter((a) => !a.metadata?._internal);
    if (!this.#a) return;
    let r = i.some((a) => a.status !== "completed"),
      u = !v(this.#c, i);
    if (u) this.#c = i;
    if (r || i.length === 0) (this.#w(i.length === 0), this.#C());
    else if (this.#o === null && !this.#d)
      if (this.#p)
        n(
          "Task list reset still in flight; not arming another hide until it settles",
          { level: "verbose" },
        );
      else
        ((this.#o = this.#s.setTimeout(this.#B.bind(this, s), g)),
          this.#o.unref());
    if (u) this.#V();
    if (this.#t) (this.#s.clearTimeout(this.#t), (this.#t = null));
    if (r || this.#i) {
      if (this.#e.phase === "live") return;
      this.#u();
    }
  };
  #B(e) {
    this.#o = null;
    let s = zE();
    if (s !== e) return;
    ((this.#p = !0),
      RC(s, this.#r)
        .then(async (t) => {
          if (
            t.length > 0 &&
            t.every((r) => r.status === "completed") &&
            (await AZn(s, this.#r))
          )
            ((this.#c = []), this.#w(!0));
          this.#V();
        })
        .catch((t) => {
          if (this.#r) this.#u();
          if (A(t) === "ELOCKED") {
            n(
              "Task list lock is busy (another session or process sharing this task list, or an in-flight task write, holds it); completed tasks stay visible and the reset is retried on the next refresh",
            );
            return;
          }
          if (Kd(t) || Bp(t)) {
            n(
              `Task list reset failed on the tasks directory and will be retried on the next refresh: ${l(t)}`,
              { level: "warn" },
            );
            return;
          }
          logError(t);
        })
        .finally(() => {
          this.#p = !1;
        }));
  }
  #C() {
    if (this.#o) (this.#s.clearTimeout(this.#o), (this.#o = null));
  }
  #L() {
    if ((this.#n?.close(), (this.#n = null), this.#e.phase === "live"))
      this.#e.subscription.unsubscribe();
    if (
      ((this.#e = { phase: "idle" }),
      this.#m++,
      (this.#f = null),
      this.#b?.(),
      (this.#b = null),
      this.#C(),
      this.#l)
    )
      this.#s.clearTimeout(this.#l);
    if (this.#t) this.#s.clearTimeout(this.#t);
    ((this.#l = null), (this.#t = null), (this.#i = !1), (this.#a = !1));
  }
}
var BOt = Qt(null),
  k = () => {};
function c() {
  let e = De(BOt),
    s = U((i) => i.teamContext);
  if (!(h3() && !Nn() && (!s || isTeamLead(s)))) return null;
  if (!e)
    throw ReferenceError(
      "useTasksV2 cannot be called outside of a TasksV2StoreContext provider (mounted by <AppStateProvider />)",
    );
  return e;
}
function Ale() {
  return useStoreSelector(c());
}
function atn() {
  let e = c();
  return re(() => e?.getSnapshot(), [e]);
}
function ltn() {
  let e = c();
  E(() => {
    if (!e) return;
    return e.subscribe(k);
  }, [e]);
}
function qUn() {
  return useStoreSelector(c(), y) ?? !1;
}
function v(e, s) {
  if (e === void 0 || e.length !== s.length) return !1;
  for (let t = 0; t < s.length; t++) {
    let i = e[t],
      r = s[t];
    if (
      i.id !== r.id ||
      i.status !== r.status ||
      i.subject !== r.subject ||
      i.activeForm !== r.activeForm ||
      i.owner !== r.owner ||
      i.description !== r.description ||
      !m(i.blockedBy, r.blockedBy) ||
      !m(i.blocks, r.blocks)
    )
      return !1;
  }
  return !0;
}
function m(e, s) {
  if (e.length !== s.length) return !1;
  for (let t = 0; t < e.length; t++) if (e[t] !== s[t]) return !1;
  return !0;
}
function y(e) {
  return e !== void 0 && e.length > 0;
}
export { UOt, BOt, Ale, atn, ltn, qUn };
