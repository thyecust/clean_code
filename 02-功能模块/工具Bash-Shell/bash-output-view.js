// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { ToolResultContent } from "../../01-核心基础设施/共享小工具-未细化/tool-result-content.js";
import { SHELL_CWD_RESET_NOTICE_PATTERN, stripSandboxViolations } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ElapsedTimeoutText } from "../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function V(n) {
  if (!n.match(/<sandbox_violations>([\s\S]*?)<\/sandbox_violations>/))
    return { cleanedStderr: n };
  return { cleanedStderr: stripSandboxViolations(n).trim() };
}
function k(n) {
  let s = n.match(SHELL_CWD_RESET_NOTICE_PATTERN);
  if (!s) return { cleanedStderr: n, cwdResetWarning: null };
  let u = s[1] ?? null;
  return { cleanedStderr: n.replace(SHELL_CWD_RESET_NOTICE_PATTERN, "").trim(), cwdResetWarning: u };
}
function BashToolOutputView(Y) {
  let c = _(34),
    { content: Z, verbose: d, timeoutMs: S } = Y,
    {
      stdout: L,
      stderr: j,
      isImage: w,
      returnCodeInterpretation: B,
      noOutputExpected: M,
      backgroundTaskId: y,
    } = Z,
    i = L === void 0 ? "" : L,
    O = j === void 0 ? "" : j,
    R,
    a,
    m,
    b,
    f,
    v,
    P;
  if (c[0] !== w || c[1] !== O || c[2] !== i || c[3] !== d) {
    P = EARLY_RETURN_SENTINEL;
    bb0: {
      let { cleanedStderr: tt } = V(O);
      ({ cleanedStderr: m, cwdResetWarning: a } = k(tt));
      if (w) {
        let l;
        if (c[11] === MEMO_CACHE_SENTINEL)
          ((l = e(ToolResultRow, {
            height: 1,
            children: e(Text, {
              dimColor: !0,
              children: "[Image data detected and sent to Claude]",
            }),
          })),
            (c[11] = l));
        else l = c[11];
        P = l;
        break bb0;
      }
      R = Box;
      b = "column";
      if (c[12] !== i || c[13] !== d)
        ((f = i !== "" ? e(ToolResultContent, { content: i, verbose: d }) : null),
          (c[12] = i),
          (c[13] = d),
          (c[14] = f));
      else f = c[14];
      v =
        m.trim() !== "" ? e(ToolResultContent, { content: m, verbose: d, isError: !0 }) : null;
    }
    ((c[0] = w),
      (c[1] = O),
      (c[2] = i),
      (c[3] = d),
      (c[4] = R),
      (c[5] = a),
      (c[6] = m),
      (c[7] = b),
      (c[8] = f),
      (c[9] = v),
      (c[10] = P));
  } else
    ((R = c[4]),
      (a = c[5]),
      (m = c[6]),
      (b = c[7]),
      (f = c[8]),
      (v = c[9]),
      (P = c[10]));
  if (P !== EARLY_RETURN_SENTINEL) return P;
  let l;
  if (c[15] !== a)
    ((l = a ? e(ToolResultRow, { children: e(Text, { dimColor: !0, children: a }) }) : null),
      (c[15] = a),
      (c[16] = l));
  else l = c[16];
  let x;
  if (
    c[17] !== y ||
    c[18] !== a ||
    c[19] !== M ||
    c[20] !== B ||
    c[21] !== m ||
    c[22] !== i
  )
    ((x =
      i === "" && m.trim() === "" && !a
        ? e(ToolResultRow, {
            height: 1,
            children: e(Text, {
              dimColor: !0,
              children: y
                ? r(N, {
                    children: [
                      "Running in the background",
                      " ",
                      e(KeybindingHint, { chord: "down", action: "manage", parens: !0 }),
                    ],
                  })
                : B || (M ? "Done" : "(No output)"),
            }),
          })
        : null),
      (c[17] = y),
      (c[18] = a),
      (c[19] = M),
      (c[20] = B),
      (c[21] = m),
      (c[22] = i),
      (c[23] = x));
  else x = c[23];
  let T;
  if (c[24] !== S)
    ((T = S && e(ToolResultRow, { children: e(ElapsedTimeoutText, { timeoutMs: S }) })),
      (c[24] = S),
      (c[25] = T));
  else T = c[25];
  let q;
  if (
    c[26] !== R ||
    c[27] !== T ||
    c[28] !== b ||
    c[29] !== f ||
    c[30] !== v ||
    c[31] !== l ||
    c[32] !== x
  )
    ((q = r(R, { flexDirection: b, children: [f, v, l, x, T] })),
      (c[26] = R),
      (c[27] = T),
      (c[28] = b),
      (c[29] = f),
      (c[30] = v),
      (c[31] = l),
      (c[32] = x),
      (c[33] = q));
  else q = c[33];
  return q;
}
export { BashToolOutputView };
