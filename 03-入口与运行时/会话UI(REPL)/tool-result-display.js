// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { countOccurrences } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { formatOverflowHint } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { stripAnsi } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybindingChordText } from "../../01-核心基础设施/共享小工具-未细化/use-keybinding-chord-text.js";
import { KeybindingHint } from "../../02-功能模块/键位绑定(Keybindings)/keybinding-display.js";
import { VirtualScrollViewportContext } from "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import { IEe, Lr } from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, De, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
var u = Qt(!1);
function ExpandedTranscriptProvider(no) {
  let io = _(2),
    { children: O } = no,
    w;
  if (io[0] !== O)
    ((w = e(u.Provider, { value: !0, children: O })), (io[0] = O), (io[1] = w));
  else w = io[1];
  return w;
}
function TranscriptExpandHint() {
  let V = _(3),
    ao = De(u),
    so = De(VirtualScrollViewportContext),
    S = useKeybindingChordText("app:toggleTranscript", "Global", "ctrl+o");
  if (ao || so) {
    return null;
  }
  let W;
  if (V[0] === MEMO_CACHE_SENTINEL) ((W = { keyCase: "lower" }), (V[0] = W));
  else W = V[0];
  let G;
  if (V[1] !== S)
    ((G = e(t, {
      dimColor: !0,
      children: e(KeybindingHint, { chord: S, action: "expand", parens: !0, format: W }),
    })),
      (V[1] = S),
      (V[2] = G));
  else G = V[2];
  return G;
}
function OverflowHint(Eo) {
  let v = _(8),
    { count: x, unit: j, expandable: q } = Eo,
    K = j === void 0 ? "line" : j,
    X = q === void 0 ? !1 : q;
  if (x <= 0) {
    return null;
  }
  let g;
  if (v[0] !== x || v[1] !== K)
    ((g = formatOverflowHint(x, K)), (v[0] = x), (v[1] = K), (v[2] = g));
  else g = v[2];
  let A;
  if (v[3] !== X)
    ((A = X && r(N, { children: [" ", e(TranscriptExpandHint, {})] })), (v[3] = X), (v[4] = A));
  else A = v[4];
  let z;
  if (v[5] !== g || v[6] !== A)
    ((z = r(t, { dimColor: !0, children: [g, A] })),
      (v[5] = g),
      (v[6] = A),
      (v[7] = z));
  else z = v[7];
  return z;
}
var MAX_ERROR_MESSAGE_LINES = 10;
function isToolResultTruncated(n) {
  if (typeof n === "string") return H(n, 9);
  if (!Array.isArray(n)) return !1;
  let i = 0;
  for (let a of n) {
    if (((i += 1), i > 10)) return !0;
    if (a.type !== "text") continue;
    let s = a.text,
      l = 0;
    while (i <= 10) {
      if (
        ((l = s.indexOf(
          `
`,
          l,
        )),
        l === -1)
      )
        break;
      (l++, i++);
    }
    if (i > 10) return !0;
  }
  return !1;
}
function H(n, i) {
  let a = 0;
  for (let s = 0; s <= i; s++) {
    if (
      ((a = n.indexOf(
        `
`,
        a,
      )),
      a === -1)
    )
      return !1;
    a++;
  }
  return !0;
}
function ToolErrorMessage(Bo) {
  let d = _(25),
    { result: R, verbose: f, verbatim: J } = Bo,
    L = J === void 0 ? !1 : J,
    y,
    b,
    T,
    h,
    P,
    k,
    B;
  if (d[0] !== R || d[1] !== L || d[2] !== f) {
    let m;
    if (typeof R !== "string") m = "Tool execution failed";
    else {
      let E = (
        L
          ? stripAnsi(R)
          : IEe(stripAnsi(Lr(R, "tool_use_error") ?? R)).replace(/<\/?error>/g, "")
      ).trim();
      if (!f && !L && E.includes("InputValidationError: "))
        m = "Invalid tool parameters";
      else if (E.startsWith("Error: ") || E.startsWith("Cancelled: ")) m = E;
      else m = `Error: ${E}`;
    }
    h =
      countOccurrences(
        m,
        `
`,
      ) +
      1 -
      MAX_ERROR_MESSAGE_LINES;
    T = ToolResultRow;
    b = o;
    B = "column";
    y = t;
    P = "error";
    k = f
      ? m
      : m
          .split(
            `
`,
          )
          .slice(0, MAX_ERROR_MESSAGE_LINES).join(`
`);
    ((d[0] = R),
      (d[1] = L),
      (d[2] = f),
      (d[3] = y),
      (d[4] = b),
      (d[5] = T),
      (d[6] = h),
      (d[7] = P),
      (d[8] = k),
      (d[9] = B));
  } else
    ((y = d[3]),
      (b = d[4]),
      (T = d[5]),
      (h = d[6]),
      (P = d[7]),
      (k = d[8]),
      (B = d[9]));
  let C;
  if (d[10] !== y || d[11] !== P || d[12] !== k)
    ((C = e(y, { color: P, children: k })),
      (d[10] = y),
      (d[11] = P),
      (d[12] = k),
      (d[13] = C));
  else C = d[13];
  let I;
  if (d[14] !== h || d[15] !== f)
    ((I = !f && e(OverflowHint, { count: h, expandable: !0 })),
      (d[14] = h),
      (d[15] = f),
      (d[16] = I));
  else I = d[16];
  let M;
  if (d[17] !== b || d[18] !== B || d[19] !== C || d[20] !== I)
    ((M = r(b, { flexDirection: B, children: [C, I] })),
      (d[17] = b),
      (d[18] = B),
      (d[19] = C),
      (d[20] = I),
      (d[21] = M));
  else M = d[21];
  let Q;
  if (d[22] !== T || d[23] !== M)
    ((Q = e(T, { children: M })), (d[22] = T), (d[23] = M), (d[24] = Q));
  else Q = d[24];
  return Q;
}
export { ExpandedTranscriptProvider, TranscriptExpandHint, OverflowHint, MAX_ERROR_MESSAGE_LINES, isToolResultTruncated, ToolErrorMessage };
