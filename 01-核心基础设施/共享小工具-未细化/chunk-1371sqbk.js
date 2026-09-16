// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t, tn } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
function _s(g) {
  let y = _(10),
    { children: f, color: d, title: m } = g,
    s = tn();
  const i = s ? void 0 : "round",
    R = s ? 0 : 1,
    h = m ? 1 : 0;
  let p;
  if (y[0] !== d || y[1] !== m)
    ((p = m && e(t, { bold: !0, color: d, children: m })),
      (y[0] = d),
      (y[1] = m),
      (y[2] = p));
  else p = y[2];
  let T;
  if (
    y[3] !== f ||
    y[4] !== d ||
    y[5] !== i ||
    y[6] !== R ||
    y[7] !== h ||
    y[8] !== p
  )
    ((T = r(o, {
      borderStyle: i,
      borderColor: d,
      flexDirection: "column",
      paddingX: R,
      gap: h,
      children: [p, f],
    })),
      (y[3] = f),
      (y[4] = d),
      (y[5] = i),
      (y[6] = R),
      (y[7] = h),
      (y[8] = p),
      (y[9] = T));
  else T = y[9];
  return T;
}
export { _s };
