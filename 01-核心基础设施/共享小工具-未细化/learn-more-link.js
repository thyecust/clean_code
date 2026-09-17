// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Text, Link } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
function LearnMoreLink(n) {
  let s = _(2),
    { url: o } = n,
    a;
  if (s[0] !== o)
    ((a = r(Text, {
      dimColor: !0,
      children: ["Learn more: ", e(Link, { url: o })],
    })),
      (s[0] = o),
      (s[1] = a));
  else a = s[1];
  return a;
}
export { LearnMoreLink };
