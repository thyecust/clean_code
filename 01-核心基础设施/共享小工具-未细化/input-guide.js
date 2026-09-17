// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Text } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useGlobalExitKeybinding } from "./exit-keybinding-hooks.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
function InputGuide(R) {
  let P = _(2),
    { children: l, exitActive: c, onInterrupt: u } = R,
    x = c === void 0 ? !0 : c,
    { pending: y, keyName: N } = useGlobalExitKeybinding(void 0, u, x);
  const o = y ? `Press ${N} again to exit` : l;
  let d;
  if (P[0] !== o)
    ((d = e(Text, { dimColor: !0, children: o })), (P[0] = o), (P[1] = d));
  else d = P[1];
  return d;
}
export { InputGuide };
