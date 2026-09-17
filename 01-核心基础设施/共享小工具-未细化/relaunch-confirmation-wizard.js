// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { logEvent } from "./analytics-event-queue.js";
import { Box, Text, useApp } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybinding } from "./keybinding-hooks.js";
import { useAppState } from "./app-state-context.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "./chunk-2c9tjhwd.js";
F();
function RelaunchConfirmationWizard(k) {
  let n = _(17),
    { Wizard: u, cancelledEvent: v, onDone: C } = k,
    g = useApp(),
    x = useAppState(),
    [a, A] = d(null),
    E;
  if (n[0] !== g || n[1] !== x)
    ((E = () => {
      g.exit();
      let { proactivityLevel: B, toolPermissionContext: j } = x.getState();
      import("../../02-功能模块/认证-OAuth登录/execRelaunch.ewkdrr0a.js").then((q) =>
        q.execRelaunch({
          proactivity: { proactivityLevel: B, toolPermissionContext: j },
        }),
      );
    }),
      (n[0] = g),
      (n[1] = x),
      (n[2] = E));
  else E = n[2];
  const y = a !== null;
  let J;
  if (n[3] !== y)
    ((J = { context: "Confirmation", isActive: y }), (n[3] = y), (n[4] = J));
  else J = n[4];
  if ((useKeybinding("confirm:yes", E, J), a !== null)) {
    let s;
    if (n[5] !== a)
      ((s = e(Text, { color: "success", children: a })), (n[5] = a), (n[6] = s));
    else s = n[6];
    let c;
    if (n[7] === MEMO_CACHE_SENTINEL)
      ((c = r(Text, {
        dimColor: !0,
        children: [
          "Press ",
          e(Text, { bold: !0, children: "Enter" }),
          " to restart Claude Code.",
        ],
      })),
        (n[7] = c));
    else c = n[7];
    let l;
    if (n[8] !== s)
      ((l = r(Box, {
        flexDirection: "column",
        gap: 1,
        marginTop: 1,
        children: [s, c],
      })),
        (n[8] = s),
        (n[9] = l));
    else l = n[9];
    return l;
  }
  let s;
  if (n[10] === MEMO_CACHE_SENTINEL) ((s = (G) => A(G)), (n[10] = s));
  else s = n[10];
  let c;
  if (n[11] !== v || n[12] !== C)
    ((c = () => {
      (logEvent(v, {}), C());
    }),
      (n[11] = v),
      (n[12] = C),
      (n[13] = c));
  else c = n[13];
  let l;
  if (n[14] !== u || n[15] !== c)
    ((l = e(u, { onComplete: s, onCancel: c })),
      (n[14] = u),
      (n[15] = c),
      (n[16] = l));
  else l = n[16];
  return l;
}
export { RelaunchConfirmationWizard };
