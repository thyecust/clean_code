// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { useTerminalSize } from "./use-terminal-size.js";
import { Box, Text, NoSelect, useTerminalViewport, measureElement } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, De, dn, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
function ReserveHeightBox(ee) {
  let p = _(10),
    { children: v, lock: Y } = ee,
    te = Y === void 0 ? "always" : Y,
    [D, re] = useTerminalViewport(),
    { isVisible: oe } = re,
    { rows: M } = useTerminalSize(),
    k = C(null),
    E = C(0),
    [ne, ie] = d(0),
    q;
  if (p[0] !== D)
    ((q = (ce) => {
      D(ce);
    }),
      (p[0] = D),
      (p[1] = q));
  else q = p[1];
  let H = q,
    fe = te === "always" || !oe,
    z;
  if (p[2] !== M)
    ((z = () => {
      if (!k.current) {
        return;
      }
      let { height: A } = measureElement(k.current);
      if (A > E.current) ((E.current = Math.min(A, M)), ie(E.current));
    }),
      (p[2] = M),
      (p[3] = z));
  else z = p[3];
  dn(z);
  const O = fe ? ne : void 0;
  let R;
  if (p[4] !== v)
    ((R = e(Box, { ref: k, flexDirection: "column", children: v })),
      (p[4] = v),
      (p[5] = R));
  else R = p[5];
  let I;
  if (p[6] !== H || p[7] !== O || p[8] !== R)
    ((I = e(Box, { minHeight: O, ref: H, children: R })),
      (p[6] = H),
      (p[7] = O),
      (p[8] = R),
      (p[9] = I));
  else I = p[9];
  return I;
}
F();
F();
function ToolResultRow(Re) {
  let w = _(11),
    { children: h, height: g, screenReaderLabel: x } = Re;
  if (De(i)) {
    return h;
  }
  const S = x === void 0;
  let y;
  if (w[0] !== x || w[1] !== S)
    ((y = e(NoSelect, {
      fromLeftEdge: !0,
      flexShrink: 0,
      children: r(Text, {
        "aria-hidden": S,
        "aria-label": x,
        dimColor: !0,
        children: ["  ", "\u23BF \xA0"],
      }),
    })),
      (w[0] = x),
      (w[1] = S),
      (w[2] = y));
  else y = w[2];
  let N;
  if (w[3] !== h)
    ((N = e(Box, { flexShrink: 1, flexGrow: 1, children: h })),
      (w[3] = h),
      (w[4] = N));
  else N = w[4];
  let J;
  if (w[5] !== g || w[6] !== y || w[7] !== N)
    ((J = e(b, {
      children: r(Box, {
        flexDirection: "row",
        height: g,
        overflowY: "hidden",
        children: [y, N],
      }),
    })),
      (w[5] = g),
      (w[6] = y),
      (w[7] = N),
      (w[8] = J));
  else J = w[8];
  let P = J;
  if (g !== void 0) {
    return P;
  }
  let K;
  if (w[9] !== P)
    ((K = e(ReserveHeightBox, { lock: "offscreen", children: P })), (w[9] = P), (w[10] = K));
  else K = w[10];
  return K;
}
var i = Qt(!1);
function useIsInsideToolResultRow() {
  return De(i);
}
function b(he) {
  let ge = _(2),
    { children: B } = he,
    Q;
  if (ge[0] !== B)
    ((Q = e(i.Provider, { value: !0, children: B })), (ge[0] = B), (ge[1] = Q));
  else Q = ge[1];
  return Q;
}
export { ReserveHeightBox, ToolResultRow, useIsInsideToolResultRow };
