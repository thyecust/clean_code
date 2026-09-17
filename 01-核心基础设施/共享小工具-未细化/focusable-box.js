// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
function FocusableBox(D) {
  let K = _(7),
    {
      onKeyDown: t,
      flexDirection: f,
      gap: n,
      tabIndex: s,
      autoFocus: v,
      children: r,
    } = D,
    a = f === void 0 ? "column" : f,
    c = s === void 0 ? 0 : s,
    p = v === void 0 ? !0 : v,
    l;
  if (
    K[0] !== p ||
    K[1] !== r ||
    K[2] !== a ||
    K[3] !== n ||
    K[4] !== t ||
    K[5] !== c
  )
    ((l = e(o, {
      flexDirection: a,
      gap: n,
      tabIndex: c,
      autoFocus: p,
      onKeyDown: t,
      children: r,
    })),
      (K[0] = p),
      (K[1] = r),
      (K[2] = a),
      (K[3] = n),
      (K[4] = t),
      (K[5] = c),
      (K[6] = l));
  else l = K[6];
  return l;
}
export { FocusableBox };
