// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t, tn } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var x = {
    default: {
      r1L: " \u2590",
      r1E: "\u259B\u2588\u2588\u2588\u259B\u2588",
      r1R: "",
      r2L: "\u259D\u259C",
      r2R: "\u2588\u2580",
    },
    "look-left": {
      r1L: " \u2590",
      r1E: "\u259F\u2588\u2588\u2588\u259F\u2588",
      r1R: "",
      r2L: "\u259D\u259C",
      r2R: "\u2588\u2580",
    },
    "look-right": {
      r1L: " \u2590",
      r1E: "\u2588\u259F\u2588\u2588\u2588\u259F",
      r1R: "",
      r2L: "\u259D\u259C",
      r2R: "\u2588\u2580",
    },
    "arms-up": {
      r1L: "\u2597\u259F",
      r1E: "\u259B\u2588\u2588\u2588\u259B\u2588",
      r1R: "\u2584",
      r2L: " \u259C",
      r2R: "\u2588\u2598",
    },
  },
  E = {
    default: " \u2597   \u2596 ",
    "look-left": " \u2598   \u2598 ",
    "look-right": " \u259D   \u259D ",
    "arms-up": " \u2597   \u2596 ",
  };
function ClawdMascot(u) {
  let c = _(26),
    S;
  if (c[0] !== u) ((S = u === void 0 ? {} : u), (c[0] = u), (c[1] = S));
  else S = c[1];
  let { pose: D } = S,
    R = D === void 0 ? "default" : D;
  if (tn()) {
    return null;
  }
  if (a.terminal === "Apple_Terminal") {
    let d;
    if (c[2] !== R) ((d = e(C, { pose: R })), (c[2] = R), (c[3] = d));
    else d = c[3];
    return d;
  }
  let l = x[R],
    d;
  if (c[4] !== l.r1L)
    ((d = e(t, { color: "clawd_body", children: l.r1L })),
      (c[4] = l.r1L),
      (c[5] = d));
  else d = c[5];
  let g;
  if (c[6] !== l.r1E)
    ((g = e(t, {
      color: "clawd_body",
      backgroundColor: "clawd_background",
      children: l.r1E,
    })),
      (c[6] = l.r1E),
      (c[7] = g));
  else g = c[7];
  let b;
  if (c[8] !== l.r1R)
    ((b = e(t, { color: "clawd_body", children: l.r1R })),
      (c[8] = l.r1R),
      (c[9] = b));
  else b = c[9];
  let w;
  if (c[10] !== d || c[11] !== g || c[12] !== b)
    ((w = r(t, { children: [d, g, b] })),
      (c[10] = d),
      (c[11] = g),
      (c[12] = b),
      (c[13] = w));
  else w = c[13];
  let f;
  if (c[14] !== l.r2L)
    ((f = e(t, { color: "clawd_body", children: l.r2L })),
      (c[14] = l.r2L),
      (c[15] = f));
  else f = c[15];
  let N;
  if (c[16] === MEMO_CACHE_SENTINEL)
    ((N = e(t, {
      color: "clawd_body",
      backgroundColor: "clawd_background",
      children: "\u2588\u2588\u2588\u2588\u2588",
    })),
      (c[16] = N));
  else N = c[16];
  let y;
  if (c[17] !== l.r2R)
    ((y = e(t, { color: "clawd_body", children: l.r2R })),
      (c[17] = l.r2R),
      (c[18] = y));
  else y = c[18];
  let k;
  if (c[19] !== f || c[20] !== y)
    ((k = r(t, { children: [f, N, y] })),
      (c[19] = f),
      (c[20] = y),
      (c[21] = k));
  else k = c[21];
  let B;
  if (c[22] === MEMO_CACHE_SENTINEL)
    ((B = r(t, {
      color: "clawd_body",
      children: ["  ", "\u259D\u259D \u259D\u259D", "  "],
    })),
      (c[22] = B));
  else B = c[22];
  let I;
  if (c[23] !== k || c[24] !== w)
    ((I = r(o, {
      flexDirection: "column",
      flexShrink: 0,
      children: [w, k, B],
    })),
      (c[23] = k),
      (c[24] = w),
      (c[25] = I));
  else I = c[25];
  return I;
}
function C(J) {
  let s = _(10),
    { pose: K } = J,
    T;
  if (s[0] === MEMO_CACHE_SENTINEL)
    ((T = e(t, { color: "clawd_body", children: "\u2597" })), (s[0] = T));
  else T = s[0];
  const P = E[K];
  let m;
  if (s[1] !== P)
    ((m = e(t, {
      color: "clawd_background",
      backgroundColor: "clawd_body",
      children: P,
    })),
      (s[1] = P),
      (s[2] = m));
  else m = s[2];
  let q;
  if (s[3] === MEMO_CACHE_SENTINEL)
    ((q = e(t, { color: "clawd_body", children: "\u2596" })), (s[3] = q));
  else q = s[3];
  let L;
  if (s[4] !== m) ((L = r(t, { children: [T, m, q] })), (s[4] = m), (s[5] = L));
  else L = s[5];
  let v, z;
  if (s[6] === MEMO_CACHE_SENTINEL)
    ((v = e(t, { backgroundColor: "clawd_body", children: " ".repeat(7) })),
      (z = e(t, {
        color: "clawd_body",
        children: "\u2598\u2598 \u259D\u259D",
      })),
      (s[6] = v),
      (s[7] = z));
  else ((v = s[6]), (z = s[7]));
  let A;
  if (s[8] !== L)
    ((A = r(o, {
      flexDirection: "column",
      alignItems: "center",
      children: [L, v, z],
    })),
      (s[8] = L),
      (s[9] = A));
  else A = s[9];
  return A;
}
export { ClawdMascot };
