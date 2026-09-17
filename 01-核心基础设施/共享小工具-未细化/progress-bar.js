// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { CT } from "../../02-功能模块/状态栏-主题/chunk-jz6b76hr.js";
import { os } from "../核心工具-字符串与文本/chunk-1wezmyx2.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { EARLY_RETURN_SENTINEL } from "./chunk-2c9tjhwd.js";
var p = [
    " ",
    "\u258F",
    "\u258E",
    "\u258D",
    "\u258C",
    "\u258B",
    "\u258A",
    "\u2589",
    "\u2588",
  ],
  x = { fill: "\u25B0", empty: "\u25B1" },
  A = { fill: "\u2588", empty: "\u2591" },
  S = () => (CT.hasGeometricShapesInkBleedBug() ? A : x),
  T = (a) => Math.min(1, Math.max(0, a)),
  B = (a, o) => {
    let n = Math.floor(a * o),
      s = [os(p.at(-1), n)];
    if (n < o) {
      let f = a * o - n,
        m = Math.floor(f * (p.length - 1));
      s.push(p[m]);
      let l = o - n - 1;
      if (l > 0) s.push(p[0].repeat(l));
    }
    return s.join("");
  };
function ProgressBar(q) {
  let E = _(17),
    { ratio: g, width: c, fillColor: L, emptyColor: i, variant: I } = q,
    k = I === void 0 ? "block" : I,
    u,
    h,
    P,
    y,
    b,
    C;
  if (E[0] !== i || E[1] !== L || E[2] !== g || E[3] !== k || E[4] !== c) {
    C = EARLY_RETURN_SENTINEL;
    bb0: {
      let M = T(g);
      if (k === "pill") {
        let { fill: v, empty: K } = S();
        let H = Math.round(M * c);
        C = r(t, {
          children: [
            e(t, { color: L, children: os(v, H) }),
            e(t, { color: i, dimColor: i === void 0, children: os(K, c - H) }),
          ],
        });
        break bb0;
      }
      u = t;
      h = L;
      P = i;
      y = `${Math.round(M * 100)}%`;
      b = B(M, c);
    }
    ((E[0] = i),
      (E[1] = L),
      (E[2] = g),
      (E[3] = k),
      (E[4] = c),
      (E[5] = u),
      (E[6] = h),
      (E[7] = P),
      (E[8] = y),
      (E[9] = b),
      (E[10] = C));
  } else
    ((u = E[5]), (h = E[6]), (P = E[7]), (y = E[8]), (b = E[9]), (C = E[10]));
  if (C !== EARLY_RETURN_SENTINEL) return C;
  let Y;
  if (E[11] !== u || E[12] !== h || E[13] !== P || E[14] !== y || E[15] !== b)
    ((Y = e(u, { color: h, backgroundColor: P, "aria-label": y, children: b })),
      (E[11] = u),
      (E[12] = h),
      (E[13] = P),
      (E[14] = y),
      (E[15] = b),
      (E[16] = Y));
  else Y = E[16];
  return Y;
}
export { ProgressBar };
