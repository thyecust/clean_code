// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useKeybindingChordText } from "./use-keybinding-chord-text.js";
import { KeybindingHint } from "../../02-功能模块/键位绑定(Keybindings)/keybinding-display.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
function ActionKeybindingHint(l) {
  let R = _(5),
    {
      action: K,
      context: x,
      fallback: N,
      description: o,
      parens: n,
      bold: t,
    } = l,
    i = useKeybindingChordText(K, x, N),
    y;
  if (R[0] !== t || R[1] !== i || R[2] !== o || R[3] !== n)
    ((y = e(KeybindingHint, { chord: i, action: o, parens: n, bold: t })),
      (R[0] = t),
      (R[1] = i),
      (R[2] = o),
      (R[3] = n),
      (R[4] = y));
  else y = R[4];
  return y;
}
export { ActionKeybindingHint };
