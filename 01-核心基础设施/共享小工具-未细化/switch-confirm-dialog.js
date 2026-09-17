// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { jc } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Us } from "../../02-功能模块/策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { $N } from "../../02-功能模块/权限系统/chunk-t3b7pg2x.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useSetAppState } from "./app-state-context.js";
import { useTerminalSize } from "./use-terminal-size.js";
import { truncateLinesWithOverflow } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { ConfirmPrompt } from "./confirm-prompt.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Zg } from "../模型目录-ModelCatalog/chunk-qgx6a5a0.js";
function j(to) {
  return { ...to, cacheMissAckedAtOutputTokens: jc() };
}
var P = 6;
function ModelOrEffortSwitchDialog(oo) {
  let f = _(25),
    {
      kind: eo,
      model: v,
      effort: d,
      hookReason: n,
      onConfirm: x,
      onCancel: i,
    } = oo,
    { columns: y } = useTerminalSize(),
    C = useSetAppState(),
    m = eo === "model",
    k = m ? "Switch model?" : "Change effort level?",
    A = m ? "model" : "effort level",
    I;
  if (f[0] !== d || f[1] !== m || f[2] !== v)
    ((I = m ? Zg(v) : d !== void 0 ? $N(d) : "auto"),
      (f[0] = d),
      (f[1] = m),
      (f[2] = v),
      (f[3] = I));
  else I = f[3];
  let a = I,
    O;
  if (f[4] !== n || f[5] !== x || f[6] !== C)
    ((O = function c() {
      if (n === void 0) C(j);
      x();
    }),
      (f[4] = n),
      (f[5] = x),
      (f[6] = C),
      (f[7] = O));
  else O = f[7];
  let c = O;
  const S =
    n !== void 0
      ? "A PreModelSwitch hook asked you to confirm"
      : "Your next response will be slower and use more tokens";
  let u;
  if (f[8] !== y || f[9] !== n || f[10] !== a || f[11] !== A)
    ((u =
      n !== void 0
        ? e(t, { children: truncateLinesWithOverflow(Us(n).text, y, P + 1) })
        : r(t, {
            children: [
              "This conversation is cached for the current ",
              A,
              ". Switching to",
              " ",
              e(t, { bold: !0, children: a }),
              " means the full history gets re-read on your next message.",
            ],
          })),
      (f[8] = y),
      (f[9] = n),
      (f[10] = a),
      (f[11] = A),
      (f[12] = u));
  else u = f[12];
  const M = `Yes, switch to ${a}`;
  let p;
  if (f[13] !== c || f[14] !== i || f[15] !== M)
    ((p = e(ConfirmPrompt, {
      confirmLabel: M,
      cancelLabel: "No, go back",
      onConfirm: c,
      onCancel: i,
    })),
      (f[13] = c),
      (f[14] = i),
      (f[15] = M),
      (f[16] = p));
  else p = f[16];
  let h;
  if (f[17] !== u || f[18] !== p)
    ((h = r(o, {
      flexDirection: "column",
      gap: 1,
      marginBottom: 1,
      children: [u, p],
    })),
      (f[17] = u),
      (f[18] = p),
      (f[19] = h));
  else h = f[19];
  let R;
  if (f[20] !== i || f[21] !== S || f[22] !== h || f[23] !== k)
    ((R = e(de, {
      title: k,
      subtitle: S,
      color: "warning",
      onCancel: i,
      hideInputGuide: !0,
      children: h,
    })),
      (f[20] = i),
      (f[21] = S),
      (f[22] = h),
      (f[23] = k),
      (f[24] = R));
  else R = f[24];
  return R;
}
export { ModelOrEffortSwitchDialog };
