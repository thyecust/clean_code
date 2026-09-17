// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { useKeybindingContext } from "../../02-功能模块/键位绑定-Keybindings/keybinding-context.js";
import { logKeybindingFallbackUsed } from "../../02-功能模块/键位绑定-Keybindings/键位绑定-Keybindings.sanfja6a.js";
import { E, C, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
F();
function useKeybindingDisplayText(n, e, t) {
  let r = useKeybindingContext(),
    i = r?.getDisplayText(n, e),
    o = i === void 0,
    s = r ? "action_not_found" : "no_context",
    u = C(!1);
  if (
    (E(() => {
      if (o && !u.current) ((u.current = !0), logKeybindingFallbackUsed(n, e, t, s));
    }, [o, n, e, t, s]),
    o)
  )
    return t;
  return i === null ? "" : i;
}
export { useKeybindingDisplayText };
