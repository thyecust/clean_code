// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 234 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { splitIntoSanitizedLines, formatMemoryWriteSummary } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { replaceControlChars } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../01-核心基础设施/UI组件-TUI/virtual-scroll-viewport-context.js";
import { MAX_ERROR_MESSAGE_LINES, ToolErrorMessage } from "../../03-入口与运行时/会话UI-REPL/tool-result-display.js";
import { ToolResultRow } from "../../01-核心基础设施/UI组件-TUI/tool-result-row.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
function B(v) {
  return v === "" ? " " : v;
}
var C = 10,
  E = 200,
  M = "<tool_use_error>",
  T = "</tool_use_error>";
function w(n) {
  return n.startsWith(M) && n.endsWith(T) ? n.slice(M.length, -T.length) : n;
}
function O(n) {
  return n.length > E ? `${truncateToCodeUnits(n, E)}\u2026` : n;
}
function h(K) {
  let u = _(12),
    { lines: m, verbose: b, maxLines: L, color: g } = K,
    k;
  if (u[0] !== m || u[1] !== L || u[2] !== b)
    ((k = b ? m : m.slice(0, L).map(O)),
      (u[0] = m),
      (u[1] = L),
      (u[2] = b),
      (u[3] = k));
  else k = u[3];
  let R = k,
    f = m.length - R.length,
    p;
  if (u[4] !== g || u[5] !== R)
    ((p =
      R.length > 0
        ? e(Text, {
            color: g,
            dimColor: g === void 0,
            children: R.map(B).join(`
`),
          })
        : null),
      (u[4] = g),
      (u[5] = R),
      (u[6] = p));
  else p = u[6];
  let d;
  if (u[7] !== f)
    ((d =
      f > 0
        ? r(Text, { dimColor: !0, children: ["\u2026 +", f, " more lines"] })
        : null),
      (u[7] = f),
      (u[8] = d));
  else d = u[8];
  let y;
  if (u[9] !== p || u[10] !== d)
    ((y = r(N, { children: [p, d] })), (u[9] = p), (u[10] = d), (u[11] = y));
  else y = u[11];
  return y;
}
function isResultTruncated(n) {
  if (n?.outcome !== "ok" || typeof n.content !== "string") return !1;
  let i = splitIntoSanitizedLines(n.content);
  return i.length > C || i.some((s) => s.length > E);
}
function renderToolResultMessage(n, i, { verbose: s }) {
  if (n.outcome !== "ok") return null;
  return e(ToolResultRow, {
    children: r(Box, {
      flexDirection: "column",
      children: [
        e(Text, { children: formatMemoryWriteSummary(n) }),
        e(h, { lines: splitIntoSanitizedLines(n.content ?? ""), verbose: s, maxLines: C }),
      ],
    }),
  });
}
function renderToolUseErrorMessage(n, { verbose: i }) {
  if (typeof n !== "string") return e(ToolErrorMessage, { result: n, verbose: i });
  let s = w(n),
    l = s.indexOf(`
`),
    c = replaceControlChars(l === -1 ? s : s.slice(0, l)),
    a = l === -1 ? [] : splitIntoSanitizedLines(s.slice(l + 1));
  return e(ToolResultRow, {
    children: r(Box, {
      flexDirection: "column",
      children: [
        e(Text, { color: "error", children: c }),
        e(h, { lines: a, verbose: i, maxLines: MAX_ERROR_MESSAGE_LINES - 1, color: "error" }),
      ],
    }),
  });
}
export {
  isResultTruncated,
  renderToolResultMessage,
  renderToolUseErrorMessage,
};
