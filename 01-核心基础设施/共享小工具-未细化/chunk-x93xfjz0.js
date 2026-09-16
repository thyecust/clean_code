// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { r } from "../../00-第三方库/react/react.kwtapczy.js";
function Gc(R) {
  let u = _(7),
    { children: d, color: e, textColor: k, padded: x, bold: l, wrap: s } = R,
    o = x ? " " : "";
  const m = k ?? (e ? "inverseText" : void 0);
  let h;
  if (
    u[0] !== l ||
    u[1] !== d ||
    u[2] !== e ||
    u[3] !== o ||
    u[4] !== m ||
    u[5] !== s
  )
    ((h = r(t, {
      backgroundColor: e,
      color: m,
      bold: l,
      wrap: s,
      children: [o, d, o],
    })),
      (u[0] = l),
      (u[1] = d),
      (u[2] = e),
      (u[3] = o),
      (u[4] = m),
      (u[5] = s),
      (u[6] = h));
  else h = u[6];
  return h;
}
export { Gc };
