// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { GXt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { GA, Stn, btn, d4 } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { ga } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { hte, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function le(xe) {
  return xe + 1;
}
function X(O) {
  let c = _(28),
    D,
    H,
    z,
    i,
    f;
  if (c[0] !== O)
    (({ children: D, ref: z, stickyScroll: i, followGrowth: H, ...f } = O),
      (c[0] = O),
      (c[1] = D),
      (c[2] = H),
      (c[3] = z),
      (c[4] = i),
      (c[5] = f));
  else ((D = c[1]), (H = c[2]), (z = c[3]), (i = c[4]), (f = c[5]));
  let n = C(null),
    [, ae] = d(0),
    I;
  if (c[6] === p) ((I = new Set()), (c[6] = I));
  else I = c[6];
  let A = C(I),
    P = C(!1),
    J;
  if (c[7] === p)
    ((J = () => {
      for (const fe of A.current) fe();
    }),
      (c[7] = J));
  else J = c[7];
  let K = J,
    L;
  if (c[8] === p)
    ((L = function h(j) {
      if ((GXt(), GA(j), btn(j), K(), P.current)) {
        return;
      }
      ((P.current = !0),
        queueMicrotask(() => {
          ((P.current = !1), Stn(j));
        }));
    }),
      (c[8] = L));
  else L = c[8];
  let h = L,
    U,
    Z;
  if (c[9] !== i)
    ((U = () => ({
      scrollTo(pe, me) {
        let m = n.current;
        if (!m) {
          return;
        }
        if (((m.stickyScroll = !1), !me?.preserveHwm))
          m.scrollHeightHwm = void 0;
        ((m.pendingScrollDelta = void 0),
          (m.scrollAnchor = void 0),
          (m.scrollTop = Math.max(0, Math.floor(pe))),
          h(m));
      },
      scrollToElement(he, g, ge) {
        let be = g === void 0 ? 0 : g;
        let b = n.current;
        if (!b) {
          return;
        }
        ((b.stickyScroll = !1),
          (b.scrollHeightHwm = void 0),
          (b.pendingScrollDelta = void 0),
          (b.scrollAnchor = {
            el: he,
            offset: be,
            nearest: ge?.block === "nearest",
          }),
          h(b));
      },
      scrollBy(Se) {
        let s = n.current;
        if (!s) {
          return;
        }
        ((s.stickyScroll = !1),
          (s.scrollHeightHwm = void 0),
          (s.scrollTop = d4(s)),
          (s.scrollAnchor = void 0),
          (s.pendingScrollDelta = (s.pendingScrollDelta ?? 0) + Math.floor(Se)),
          h(s));
      },
      scrollToBottom() {
        let u = n.current;
        if (!u) {
          return;
        }
        if (((u.pendingScrollDelta = void 0), i === !1)) {
          ((u.scrollAnchor = void 0),
            (u.scrollTop = Math.max(
              0,
              (u.scrollHeight ?? 0) - (u.scrollViewportHeight ?? 0),
            )),
            h(u));
          return;
        }
        ((u.stickyScroll = !0), GA(u), K(), ae(le));
      },
      getScrollTop() {
        return n.current?.scrollTop ?? 0;
      },
      getPendingDelta() {
        return n.current?.pendingScrollDelta ?? 0;
      },
      getScrollHeight() {
        return n.current?.scrollHeight ?? 0;
      },
      getFreshScrollHeight() {
        return (
          n.current?.childNodes[0]?.yogaNode?.getComputedHeight() ??
          n.current?.scrollHeight ??
          0
        );
      },
      getViewportHeight() {
        return n.current?.scrollViewportHeight ?? 0;
      },
      getViewportTop() {
        return n.current?.scrollViewportTop ?? 0;
      },
      isSticky() {
        let W = n.current;
        if (!W) {
          return !1;
        }
        return W.stickyScroll ?? Boolean(W.attributes.stickyScroll);
      },
      subscribe(ee) {
        return (A.current.add(ee), () => A.current.delete(ee));
      },
      setClampBounds(re, oe) {
        let S = n.current;
        if (!S) {
          return;
        }
        if (S.scrollClampMin === re && S.scrollClampMax === oe) {
          return;
        }
        ((S.scrollClampMin = re), (S.scrollClampMax = oe), GA(S));
      },
      getDomElement() {
        return n.current;
      },
    })),
      (Z = [i]),
      (c[9] = i),
      (c[10] = U),
      (c[11] = Z));
  else ((U = c[10]), (Z = c[11]));
  hte(z, U, Z);
  const g = f.flexDirection ?? "row",
    G = f.flexGrow ?? 0,
    N = f.flexShrink ?? 1;
  let M;
  if (c[12] !== f || c[13] !== g || c[14] !== G || c[15] !== N)
    ((M = {
      flexWrap: "nowrap",
      flexDirection: g,
      flexGrow: G,
      flexShrink: N,
      selectionScope: !0,
      ...f,
      overflowX: "scroll",
      overflowY: "scroll",
    }),
      (c[12] = f),
      (c[13] = g),
      (c[14] = G),
      (c[15] = N),
      (c[16] = M));
  else M = c[16];
  let B;
  if (c[17] !== i)
    ((B = i !== void 0 && { stickyScroll: i }), (c[17] = i), (c[18] = B));
  else B = c[18];
  let E;
  if (c[19] !== H)
    ((E = H !== void 0 && { followGrowth: H }), (c[19] = H), (c[20] = E));
  else E = c[20];
  let k;
  if (c[21] !== D)
    ((k = e(ga, {
      flexDirection: "column",
      flexGrow: 1,
      flexShrink: 0,
      width: "100%",
      children: D,
    })),
      (c[21] = D),
      (c[22] = k));
  else k = c[22];
  let te;
  if (c[23] !== B || c[24] !== E || c[25] !== k || c[26] !== M)
    ((te = e("ink-box", { ref: n, style: M, ...B, ...E, children: k })),
      (c[23] = B),
      (c[24] = E),
      (c[25] = k),
      (c[26] = M),
      (c[27] = te));
  else te = c[27];
  return te;
}
var IS = X;
export { IS };
