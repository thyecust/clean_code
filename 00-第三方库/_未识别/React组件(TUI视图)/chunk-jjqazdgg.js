// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { TREE_CONNECTOR_GLYPHS } from "../../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import { _ } from "../../react/react.zhnvc798.js";
import { o, t, pd } from "../../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e, r } from "../../react/react.kwtapczy.js";
import { ew, Qt, L_, De, F } from "../React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function ie(ue, fe) {
  return e(
    o,
    { width: 2, children: e(t, { dimColor: !0, children: U[ue] }) },
    fe,
  );
}
var U = { branch: TREE_CONNECTOR_GLYPHS.branch, last: TREE_CONNECTOR_GLYPHS.last, pipe: TREE_CONNECTOR_GLYPHS.pipe, space: "" };
function Oye(Re) {
  let L = _(7),
    { connectors: h, children: G } = Re,
    m;
  if (L[0] !== h)
    ((m =
      h.length > 0 &&
      e(pd, {
        "aria-hidden": !0,
        fromLeftEdge: !0,
        flexShrink: 0,
        flexDirection: "row",
        children: h.map(ie),
      })),
      (L[0] = h),
      (L[1] = m));
  else m = L[1];
  let v;
  if (L[2] !== G)
    ((v = e(o, { flexGrow: 1, flexShrink: 1, children: G })),
      (L[2] = G),
      (L[3] = v));
  else v = L[3];
  let ee;
  if (L[4] !== m || L[5] !== v)
    ((ee = r(o, { flexDirection: "row", children: [m, v] })),
      (L[4] = m),
      (L[5] = v),
      (L[6] = ee));
  else ee = L[6];
  return ee;
}
var s = Qt({ variant: "outline", ancestors: [] }),
  u = Qt(!0);
function l(n, c = !0) {
  let a = ew.toArray(n);
  return a.map((d, i) =>
    e(u.Provider, { value: c && i === a.length - 1, children: d }, i),
  );
}
function W(xe) {
  let f = _(10),
    { children: O, variant: oe } = xe,
    j = oe === void 0 ? "outline" : oe,
    te;
  if (f[0] === MEMO_CACHE_SENTINEL) ((te = []), (f[0] = te));
  else te = f[0];
  let C;
  if (f[1] !== j) ((C = { variant: j, ancestors: te }), (f[1] = j), (f[2] = C));
  else C = f[2];
  let y;
  if (f[3] !== O) ((y = l(O)), (f[3] = O), (f[4] = y));
  else y = f[4];
  let b;
  if (f[5] !== y)
    ((b = e(o, { flexDirection: "column", children: y })),
      (f[5] = y),
      (f[6] = b));
  else b = f[6];
  let re;
  if (f[7] !== C || f[8] !== b)
    ((re = e(s.Provider, { value: C, children: b })),
      (f[7] = C),
      (f[8] = b),
      (f[9] = re));
  else re = f[9];
  return re;
}
function X(Ne) {
  let P = _(19),
    { label: q, children: g, dimColor: z, color: H } = Ne,
    { variant: x, ancestors: R } = De(s),
    ne = De(u),
    J = x === "outline" ? "last" : ne ? "last" : "branch",
    K = x === "outline" ? "space" : ne ? "space" : "pipe",
    V = q != null && q !== !1,
    N = V ? q : g,
    k;
  if (P[0] !== R || P[1] !== J)
    ((k = [...R, J]), (P[0] = R), (P[1] = J), (P[2] = k));
  else k = P[2];
  let D;
  if (P[3] !== H || P[4] !== z || P[5] !== N)
    ((D = L_(N) ? N : e(t, { dimColor: z, color: H, children: N })),
      (P[3] = H),
      (P[4] = z),
      (P[5] = N),
      (P[6] = D));
  else D = P[6];
  let w;
  if (P[7] !== k || P[8] !== D)
    ((w = e(Oye, { connectors: k, children: D })),
      (P[7] = k),
      (P[8] = D),
      (P[9] = w));
  else w = P[9];
  let E;
  if (P[10] !== R || P[11] !== g || P[12] !== K || P[13] !== V || P[14] !== x)
    ((E =
      V &&
      e(s.Provider, {
        value: { variant: x, ancestors: [...R, K] },
        children: l(g),
      })),
      (P[10] = R),
      (P[11] = g),
      (P[12] = K),
      (P[13] = V),
      (P[14] = x),
      (P[15] = E));
  else E = P[15];
  let ce;
  if (P[16] !== w || P[17] !== E)
    ((ce = r(o, { flexDirection: "column", children: [w, E] })),
      (P[16] = w),
      (P[17] = E),
      (P[18] = ce));
  else ce = P[18];
  return ce;
}
function Y(Pe) {
  let Te = _(3),
    { children: M } = Pe,
    Q = De(u),
    ae;
  if (Te[0] !== M || Te[1] !== Q)
    ((ae = l(M, Q)), (Te[0] = M), (Te[1] = Q), (Te[2] = ae));
  else ae = Te[2];
  return ae;
}
var fl = Object.assign(W, { Node: X, Group: Y });
export { Oye, fl };
