// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { AGENT_COLOR_THEME_KEYS, isAgentColorName } from "./agent-color-palette.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { buildMessagePreview, slugifyDisplayName } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Box, Text } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybindingChordText } from "./use-keybinding-chord-text.js";
import { KeybindingHint } from "../../02-功能模块/键位绑定-Keybindings/keybinding-display.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { V, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "./chunk-2c9tjhwd.js";
var h = "cyan_FOR_SUBAGENTS_ONLY";
function resolveAgentColor(n) {
  if (!n) return h;
  if (isAgentColorName(n)) return AGENT_COLOR_THEME_KEYS[n];
  return `ansi:${n}`;
}
F();
var N = { keyCase: "lower" };
function CollapsedMessagesHint(K) {
  let i = _(18),
    { displayName: O, count: y, addMargin: G, fallbackLabel: x, body: a } = K,
    k = y === void 0 ? 1 : y,
    Q = G === void 0 ? !0 : G,
    C = useKeybindingChordText("app:toggleTranscript", "Global", "ctrl+o"),
    S;
  if (i[0] !== O || i[1] !== x)
    ((S = slugifyDisplayName(O) || x), (i[0] = O), (i[1] = x), (i[2] = S));
  else S = i[2];
  let E = S,
    B;
  if (i[3] !== a) ((B = a ? buildMessagePreview(a) : ""), (i[3] = a), (i[4] = B));
  else B = i[4];
  let m = B;
  const u = Q ? 1 : 0;
  let H;
  if (i[5] === MEMO_CACHE_SENTINEL)
    ((H = r(Text, { "aria-hidden": !0, children: [figures.pointerSmall, " "] })),
      (i[5] = H));
  else H = i[5];
  const R = k === 1 ? "Message" : `${k} messages`;
  let f;
  if (i[6] !== m)
    ((f = m ? r(Text, { italic: !0, children: [": ", m] }) : ""),
      (i[6] = m),
      (i[7] = f));
  else f = i[7];
  let c;
  if (i[8] !== C)
    ((c = e(KeybindingHint, { chord: C, action: "expand", parens: !0, format: N })),
      (i[8] = C),
      (i[9] = c));
  else c = i[9];
  let T;
  if (i[10] !== E || i[11] !== R || i[12] !== f || i[13] !== c)
    ((T = r(Text, { dimColor: !0, children: [H, R, " from @", E, f, " ", c] })),
      (i[10] = E),
      (i[11] = R),
      (i[12] = f),
      (i[13] = c),
      (i[14] = T));
  else T = i[14];
  let U;
  if (i[15] !== T || i[16] !== u)
    ((U = e(Box, { marginTop: u, children: T })),
      (i[15] = T),
      (i[16] = u),
      (i[17] = U));
  else U = i[17];
  return U;
}
export { resolveAgentColor, CollapsedMessagesHint };
