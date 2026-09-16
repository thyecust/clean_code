// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Pre, $I, V3 } from "./chunk-k2rb4dgd.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, De, E, d, At, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
var Ev = 16;
F();
F();
var l = Qt({ isTerminalFocused: !0, terminalFocusState: "unknown" });
l.displayName = "TerminalFocusContext";
function xtn(H) {
  let w = _(6),
    { children: T } = H,
    b = At(V3, Pre),
    x = At(V3, $I),
    N;
  if (w[0] !== b || w[1] !== x)
    ((N = { isTerminalFocused: b, terminalFocusState: x }),
      (w[0] = b),
      (w[1] = x),
      (w[2] = N));
  else N = w[2];
  let C = N,
    P;
  if (w[3] !== T || w[4] !== C)
    ((P = e(l.Provider, { value: C, children: T })),
      (w[3] = T),
      (w[4] = C),
      (w[5] = P));
  else P = w[5];
  return P;
}
var m = l;
function Va() {
  let { isTerminalFocused: n } = De(m);
  return n;
}
function vle() {
  let { terminalFocusState: n } = De(m);
  return n;
}
F();
function U() {
  return S(Ev);
}
var cF = (n, r) => {
    let t = setTimeout(n, r);
    return () => clearTimeout(t);
  },
  Rle = () => () => {},
  sDt = () => null;
function S(n) {
  let r = new Map(),
    t = null,
    c = n,
    v = performance.now(),
    a = 0;
  function R() {
    a = performance.now() - v;
    for (let o of r.keys()) o();
  }
  function s() {
    if ([...r.values()].some(Boolean)) {
      if (t) (clearInterval(t), (t = null));
      t = setInterval(R, c);
    } else if (t) (clearInterval(t), (t = null));
  }
  function f(o, u) {
    return (
      r.set(o, u),
      s(),
      () => {
        (r.delete(o), s());
      }
    );
  }
  return {
    subscribeKeepAlive(o) {
      return f(o, !0);
    },
    subscribeFollower(o) {
      return f(o, !1);
    },
    now() {
      if (t && a) return a;
      return performance.now() - v;
    },
    setTickInterval(o) {
      if (o === c) return;
      ((c = o), s());
    },
    setTimeout(o, u) {
      let I = setTimeout(o, u);
      return () => clearTimeout(I);
    },
  };
}
var ok = Qt(null),
  y = Ev * 2;
function Htn(Y) {
  let A = _(7),
    { children: k } = Y,
    [i] = d(U),
    p = Va(),
    h,
    K;
  if (A[0] !== i || A[1] !== p)
    ((h = () => {
      i.setTickInterval(p ? Ev : y);
    }),
      (K = [i, p]),
      (A[0] = i),
      (A[1] = p),
      (A[2] = h),
      (A[3] = K));
  else ((h = A[2]), (K = A[3]));
  E(h, K);
  let O;
  if (A[4] !== k || A[5] !== i)
    ((O = e(ok.Provider, { value: i, children: k })),
      (A[4] = k),
      (A[5] = i),
      (A[6] = O));
  else O = A[6];
  return O;
}
export { Ev, xtn, Va, vle, cF, Rle, sDt, ok, Htn };
