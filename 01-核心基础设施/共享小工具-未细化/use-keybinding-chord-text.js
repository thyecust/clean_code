// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { useKeybindingContext } from "../../02-功能模块/键位绑定(Keybindings)/keybinding-context.js";
import { Ej, v3t, IAe } from "../../02-功能模块/键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import { E, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
function useKeybindingChordText(e, i, t) {
  let o = useKeybindingContext(),
    n = o ? v3t(e, i, o.bindings) : void 0,
    r = n === void 0,
    f = o ? "action_not_found" : "no_context",
    d = C(!1);
  if (
    (E(() => {
      if (r && !d.current) ((d.current = !0), IAe(e, i, t, f));
    }, [r, e, i, t, f]),
    n === void 0)
  )
    return t;
  return n === null ? "" : Ej(n);
}
export { useKeybindingChordText };
