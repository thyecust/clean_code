// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, De, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
F();
F();
var o = Qt(!1);
function ExpandedContentProvider(d) {
  let i = _(2),
    { children: t } = d,
    c;
  if (i[0] !== t)
    ((c = e(o.Provider, { value: !0, children: t })), (i[0] = t), (i[1] = c));
  else c = i[1];
  return c;
}
function useForcedExpandedContent() {
  return De(o);
}
function shouldExpandContent(u, b) {
  let p = De(o);
  return Boolean(u || b || p);
}
export { ExpandedContentProvider, useForcedExpandedContent, shouldExpandContent };
