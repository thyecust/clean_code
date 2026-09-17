// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ln } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { dp } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { pt } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { OffscreenFrozenContent, ElapsedTimeoutText } from "../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { formatFileSize } from "../../01-核心基础设施/共享小工具-未细化/chunk-7axvc6rn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var M = 5,
  U = 5;
function zZ(ee) {
  let i = _(27),
    {
      output: y,
      fullOutput: S,
      elapsedTimeSeconds: h,
      totalLines: j,
      totalBytes: P,
      timeoutMs: R,
      verbose: z,
    } = ee,
    { columns: A } = useTerminalSize(),
    F;
  if (i[0] !== A || i[1] !== y || i[2] !== z)
    ((F = z ? null : O(y, A)), (i[0] = A), (i[1] = y), (i[2] = z), (i[3] = F));
  else F = i[3];
  let T = F,
    G;
  if (i[4] !== S || i[5] !== T)
    ((G = T ? T.text : pt(S.trim())), (i[4] = S), (i[5] = T), (i[6] = G));
  else G = i[6];
  let k = G;
  if (!k) {
    let a;
    if (i[7] === MEMO_CACHE_SENTINEL)
      ((a = e(t, { dimColor: !0, children: "Running\u2026 " })), (i[7] = a));
    else a = i[7];
    let g;
    if (i[8] !== h || i[9] !== R)
      ((g = e(ToolResultRow, {
        children: r(OffscreenFrozenContent, {
          children: [a, e(ElapsedTimeoutText, { elapsedTimeSeconds: h, timeoutMs: R })],
        }),
      })),
        (i[8] = h),
        (i[9] = R),
        (i[10] = g));
    else g = i[10];
    return g;
  }
  let te = T
      ? M
      : ln(
          S,
          `
`,
        ) + 1,
    H = (j ? Math.max(0, j - te) : 0) + (T?.dropped ?? 0),
    w = "";
  if (P && j) w = `~${j} lines`;
  else if (H > 0) w = `+${H} lines`;
  let a;
  if (i[11] !== k)
    ((a = e(t, { dimColor: !0, children: k })), (i[11] = k), (i[12] = a));
  else a = i[12];
  let g;
  if (i[13] !== w)
    ((g = w ? e(t, { dimColor: !0, children: w }) : null),
      (i[13] = w),
      (i[14] = g));
  else g = i[14];
  let D;
  if (i[15] !== h || i[16] !== R)
    ((D = e(ElapsedTimeoutText, { elapsedTimeSeconds: h, timeoutMs: R })),
      (i[15] = h),
      (i[16] = R),
      (i[17] = D));
  else D = i[17];
  let I;
  if (i[18] !== P)
    ((I = P ? e(t, { dimColor: !0, children: formatFileSize(P) }) : null),
      (i[18] = P),
      (i[19] = I));
  else I = i[19];
  let L;
  if (i[20] !== g || i[21] !== D || i[22] !== I)
    ((L = r(o, { flexDirection: "row", gap: 1, children: [g, D, I] })),
      (i[20] = g),
      (i[21] = D),
      (i[22] = I),
      (i[23] = L));
  else L = i[23];
  let N;
  if (i[24] !== a || i[25] !== L)
    ((N = e(ToolResultRow, {
      children: e(OffscreenFrozenContent, {
        children: r(o, { flexDirection: "column", children: [a, L] }),
      }),
    })),
      (i[24] = a),
      (i[25] = L),
      (i[26] = N));
  else N = i[26];
  return N;
}
function vZt({ output: x, fullOutput: u, totalLines: c }, n) {
  if (!u.trim()) return !1;
  return (c ?? 0) > M || O(x, n).clipped;
}
function O(x, u) {
  let c = Math.max(1, u - U),
    n = pt(x.trim())
      .replace(
        /\r\n?/g,
        `
`,
      )
      .split(
        `
`,
      )
      .filter((d) => d),
    s = [],
    f = 0,
    m = n.length;
  while (m > 0 && f < M) {
    let d = n[--m],
      l = dp(d, c, { hard: !0, trim: !1 }).split(`
`),
      b = M - f;
    if (l.length > b)
      return (
        s.unshift(l.slice(-b).join("").replace(/^ /, "")),
        {
          text: s.join(`
`),
          clipped: !0,
          dropped: m,
        }
      );
    (s.unshift(d), (f += l.length));
  }
  return {
    text: s.join(`
`),
    clipped: m > 0,
    dropped: m,
  };
}
export { zZ, vZt };
