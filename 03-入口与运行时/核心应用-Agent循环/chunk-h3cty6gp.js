// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { setMaxListeners as c } from "events";
var l = 50;
function hr(e = l) {
  let r = new AbortController();
  return (c(e, r.signal), r);
}
function b(e) {
  let r = this.deref();
  e.deref()?.abort(r?.signal.reason);
}
function d(e) {
  let r = this.deref(),
    t = e.deref();
  if (r && t) r.signal.removeEventListener("abort", t);
}
var f = new FinalizationRegistry(({ parentSignalRef: e, handler: r }) => {
  e.deref()?.removeEventListener("abort", r);
});
function s(e, r, t) {
  let o = new WeakRef(r),
    n = new WeakRef(e);
  if (e.signal.aborted) {
    t.call(n, o);
    return;
  }
  let a = t.bind(n, o);
  (e.signal.addEventListener("abort", a, { once: !0 }),
    f.register(r, { parentSignalRef: new WeakRef(e.signal), handler: a }),
    r.signal.addEventListener("abort", d.bind(n, new WeakRef(a)), {
      once: !0,
    }));
}
function qh(e, r) {
  let t = hr(r);
  return (s(e, t, b), t);
}
class vEt extends AbortController {
  turnController;
  constructor(e) {
    super();
    this.turnController = e;
    (c(l, this.signal), s(e, this, b));
  }
}
function FJ(e) {
  return e instanceof vEt ? e.turnController : e;
}
function _Je(e, r) {
  if (e.signal.aborted) return (r.abort(e.signal.reason), () => {});
  let t = () => r.abort(e.signal.reason);
  return (
    e.signal.addEventListener("abort", t, { once: !0 }),
    () => e.signal.removeEventListener("abort", t)
  );
}
var p = {
  "user-cancel": new DOMException("user-cancel", "AbortError"),
  "remote-cancel": new DOMException("remote-cancel", "AbortError"),
  shutdown: new DOMException("shutdown", "AbortError"),
  interrupt: new DOMException("interrupt", "AbortError"),
  "turn-abort": new DOMException("turn-abort", "AbortError"),
  background: new DOMException("background", "AbortError"),
  "refusal-fallback-edit": new DOMException(
    "refusal-fallback-edit",
    "AbortError",
  ),
  "recovery-timeout": new DOMException("recovery-timeout", "AbortError"),
};
function yu(e) {
  return p[e];
}
function Ua(e) {
  return e instanceof DOMException && e.name === "AbortError" ? e.message : e;
}
var R = new Set([
  "user-cancel",
  "remote-cancel",
  "shutdown",
  "interrupt",
  "turn-abort",
]);
function l$e(e) {
  return R.has(Ua(e));
}
var E = new Set(["interrupt", "turn-abort", "refusal-fallback-edit"]);
function qK(e) {
  return E.has(Ua(e));
}
function ob(e) {
  return Ua(e.reason) === "shutdown" ? !0 : void 0;
}
var i = "server-fallback-tombstone";
function UG(e) {
  return e.aborted && Ua(e.reason) === i;
}
var k = new DOMException(i, "AbortError");
function yJe() {
  return k;
}
var A = "subagent-park",
  x = new DOMException(A, "AbortError");
function c$e(e) {
  switch (Ua(e)) {
    case "user-cancel":
      return "user_cancel";
    case "remote-cancel":
      return "remote_cancel";
    case "shutdown":
      return "shutdown";
    case "interrupt":
      return "interrupt";
    case "turn-abort":
      return "interrupt";
    case "background":
      return "background";
    case "recovery-timeout":
      return "recovery_timeout";
    case i:
      return "server_fallback_tombstone";
    case A:
      return "subagent_park";
    default:
      return "turn_teardown";
  }
}
function qEn(e) {
  switch (e) {
    case "user_cancel":
    case "remote_cancel":
    case "shutdown":
    case "interrupt":
    case "background":
    case "subagent_park":
      return !0;
    case "turn_teardown":
    case "recovery_timeout":
    case "server_fallback_tombstone":
      return !1;
  }
}
function w(e) {
  let r = this.deref();
  if (!r || !l$e(r.signal.reason)) return;
  e.deref()?.abort(r.signal.reason);
}
var u = 600000;
function zEn(e) {
  if (Number.isNaN(e)) return u;
  return Math.min(3600000, Math.max(u, Math.round(e * 1.5)));
}
function _(e) {
  e.deref()?.abort(yu("recovery-timeout"));
}
function VEn(e, r) {
  let t = hr();
  if ((s(e, t, w), t.signal.aborted)) return t;
  let o = setTimeout(_, r, new WeakRef(t));
  return (
    o.unref(),
    t.signal.addEventListener("abort", clearTimeout.bind(void 0, o), {
      once: !0,
    }),
    t
  );
}
export {
  hr,
  qh,
  vEt,
  FJ,
  _Je,
  yu,
  Ua,
  l$e,
  qK,
  ob,
  UG,
  yJe,
  c$e,
  qEn,
  zEn,
  VEn,
};
