// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { KE, LH } from "./chunk-sda3j0p4.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Pvn, UQe } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { o, t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { dc } from "./chunk-sdk55p8n.js";
import { D } from "../../02-功能模块/键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { V, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { L } from "../../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
import { p } from "./chunk-2c9tjhwd.js";
var h = "cyan_FOR_SUBAGENTS_ONLY";
function Bb(n) {
  if (!n) return h;
  if (LH(n)) return KE[n];
  return `ansi:${n}`;
}
F();
var N = { keyCase: "lower" };
function NB(K) {
  let i = _(18),
    { displayName: O, count: y, addMargin: G, fallbackLabel: x, body: a } = K,
    k = y === void 0 ? 1 : y,
    Q = G === void 0 ? !0 : G,
    C = dc("app:toggleTranscript", "Global", "ctrl+o"),
    S;
  if (i[0] !== O || i[1] !== x)
    ((S = UQe(O) || x), (i[0] = O), (i[1] = x), (i[2] = S));
  else S = i[2];
  let E = S,
    B;
  if (i[3] !== a) ((B = a ? Pvn(a) : ""), (i[3] = a), (i[4] = B));
  else B = i[4];
  let m = B;
  const u = Q ? 1 : 0;
  let H;
  if (i[5] === p)
    ((H = r(t, { "aria-hidden": !0, children: [L.pointerSmall, " "] })),
      (i[5] = H));
  else H = i[5];
  const R = k === 1 ? "Message" : `${k} messages`;
  let f;
  if (i[6] !== m)
    ((f = m ? r(t, { italic: !0, children: [": ", m] }) : ""),
      (i[6] = m),
      (i[7] = f));
  else f = i[7];
  let c;
  if (i[8] !== C)
    ((c = e(D, { chord: C, action: "expand", parens: !0, format: N })),
      (i[8] = C),
      (i[9] = c));
  else c = i[9];
  let T;
  if (i[10] !== E || i[11] !== R || i[12] !== f || i[13] !== c)
    ((T = r(t, { dimColor: !0, children: [H, R, " from @", E, f, " ", c] })),
      (i[10] = E),
      (i[11] = R),
      (i[12] = f),
      (i[13] = c),
      (i[14] = T));
  else T = i[14];
  let U;
  if (i[15] !== T || i[16] !== u)
    ((U = e(o, { marginTop: u, children: T })),
      (i[15] = T),
      (i[16] = u),
      (i[17] = U));
  else U = i[17];
  return U;
}
export { Bb, NB };
