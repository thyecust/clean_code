// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { useTerminalSize } from "./use-terminal-size.js";
import { jsonStringify, jsonParse } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Vye } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { useTheme } from "../../02-功能模块/状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Text, Ansi } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ToolResultRow } from "./tool-result-row.js";
import { VirtualScrollViewportContext } from "./virtual-scroll-viewport-context.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { formatHyperlink } from "./format-hyperlink.js";
import { Qt, De, V, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { formatToolResultPreview } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
F();
F();
F();
var c = Qt(!1);
function VerboseToolResultProvider(U) {
  let K = _(2),
    { children: h } = U,
    E;
  if (K[0] !== h)
    ((E = e(c.Provider, { value: !0, children: h })), (K[0] = h), (K[1] = E));
  else E = K[1];
  return E;
}
function f() {
  return De(c);
}
function C(r) {
  try {
    let i = jsonParse(r),
      s = jsonStringify(i),
      o = r.replaceAll("\\/", "/").replace(/\s+/g, ""),
      m = s.replace(/\s+/g, "");
    if (o !== m) return r;
    return jsonStringify(i, null, 2);
  } catch {
    return r;
  }
}
var H = 1e4;
function M(r) {
  if (r.length > H) return r;
  return r
    .split(
      `
`,
    )
    .map(C).join(`
`);
}
var X = /https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,
  k = 1e5;
function linkifyUrls(r, i) {
  if (r.length > k) return r;
  let s = (o) => o.replace(X, (m) => formatHyperlink(m, void 0, { themeName: i }));
  if (!r.includes(Vye)) return s(r);
  return r
    .split(
      `
`,
    )
    .map((o) => (o.includes(Vye) ? o : s(o))).join(`
`);
}
function ToolResultContent(mr) {
  let p = _(14),
    { content: N, verbose: ar, isError: cr, isWarning: fr } = mr,
    { columns: x } = useTerminalSize(),
    [T] = useTheme(),
    pr = f(),
    y = De(VirtualScrollViewportContext),
    ur = ar || pr,
    I;
  if (p[0] !== N || p[1] !== T)
    ((I = linkifyUrls(M(N), T)), (p[0] = N), (p[1] = T), (p[2] = I));
  else I = p[2];
  let a = I,
    L;
  bb0: {
    if (ur) {
      let n;
      if (p[3] !== a) ((n = u(a)), (p[3] = a), (p[4] = n));
      else n = p[4];
      L = n;
      break bb0;
    }
    let n;
    if (p[5] !== x || p[6] !== a || p[7] !== y)
      ((n = u(formatToolResultPreview(a, x, y))), (p[5] = x), (p[6] = a), (p[7] = y), (p[8] = n));
    else n = p[8];
    L = n;
  }
  let O = L,
    S = cr ? "error" : fr ? "warning" : void 0,
    n;
  if (p[9] !== O) ((n = e(Ansi, { children: O })), (p[9] = O), (p[10] = n));
  else n = p[10];
  let j;
  if (p[11] !== S || p[12] !== n)
    ((j = e(ToolResultRow, { children: e(Text, { color: S, children: n }) })),
      (p[11] = S),
      (p[12] = n),
      (p[13] = j));
  else j = p[13];
  return j;
}
function u(r) {
  return r.replace(
    /\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,
    "",
  );
}
export { VerboseToolResultProvider, linkifyUrls, ToolResultContent };
