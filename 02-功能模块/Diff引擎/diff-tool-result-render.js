// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { TranscriptExpandHint, OverflowHint } from "../../03-入口与运行时/会话UI(REPL)/tool-result-display.js";
import { CodeBlock } from "../语法高亮-Markdown渲染/code-block.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { DiffHunks } from "../../01-核心基础设施/共享小工具-未细化/diff-hunks.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
import { relative } from "path";
var T = 10;
function RejectedToolUseDiff(Dt) {
  let i = _(38),
    {
      file_path: f,
      operation: z,
      patch: A,
      firstLine: E,
      fileContent: tt,
      content: M,
      style: St,
      verbose: m,
    } = Dt,
    { columns: lt } = useTerminalSize(),
    F;
  if (i[0] !== z)
    ((F = r(t, { color: "subtle", children: ["User rejected ", z, " to "] })),
      (i[0] = z),
      (i[1] = F));
  else F = i[1];
  let J;
  if (i[2] !== f || i[3] !== m)
    ((J = m ? f : relative(getCwd(), f)), (i[2] = f), (i[3] = m), (i[4] = J));
  else J = i[4];
  let K;
  if (i[5] !== J)
    ((K = e(t, { bold: !0, color: "subtle", children: J })),
      (i[5] = J),
      (i[6] = K));
  else K = i[6];
  let ft;
  if (i[7] !== F || i[8] !== K)
    ((ft = r(o, { flexDirection: "row", children: [F, K] })),
      (i[7] = F),
      (i[8] = K),
      (i[9] = ft));
  else ft = i[9];
  let s = ft;
  if (St === "condensed" && !m) {
    let l;
    if (i[10] !== s) ((l = e(ToolResultRow, { children: s })), (i[10] = s), (i[11] = l));
    else l = i[11];
    return l;
  }
  if (z === "write" && M !== void 0) {
    let V, l;
    if (i[12] !== M || i[13] !== m) {
      let mt = M.split(`
`);
      V = mt.length - T;
      l = m
        ? M
        : mt.slice(0, T).join(`
`);
      ((i[12] = M), (i[13] = m), (i[14] = V), (i[15] = l));
    } else ((V = i[14]), (l = i[15]));
    let Bt = l;
    const g = Bt || "(No content)";
    const b = lt - 12;
    let Y;
    if (i[16] !== f || i[17] !== g || i[18] !== b)
      ((Y = e(CodeBlock, { code: g, filePath: f, width: b, dim: !0 })),
        (i[16] = f),
        (i[17] = g),
        (i[18] = b),
        (i[19] = Y));
    else Y = i[19];
    let Z;
    if (i[20] !== V || i[21] !== m)
      ((Z = !m && e(OverflowHint, { count: V })), (i[20] = V), (i[21] = m), (i[22] = Z));
    else Z = i[22];
    let ct;
    if (i[23] !== Y || i[24] !== Z || i[25] !== s)
      ((ct = e(ToolResultRow, {
        children: r(o, { flexDirection: "column", children: [s, Y, Z] }),
      })),
        (i[23] = Y),
        (i[24] = Z),
        (i[25] = s),
        (i[26] = ct));
    else ct = i[26];
    return ct;
  }
  if (!A || A.length === 0) {
    let l;
    if (i[27] !== s) ((l = e(ToolResultRow, { children: s })), (i[27] = s), (i[28] = l));
    else l = i[28];
    return l;
  }
  const l = lt - 12;
  let g;
  if (i[29] !== tt || i[30] !== f || i[31] !== E || i[32] !== A || i[33] !== l)
    ((g = e(DiffHunks, {
      hunks: A,
      dim: !0,
      width: l,
      filePath: f,
      firstLine: E,
      fileContent: tt,
    })),
      (i[29] = tt),
      (i[30] = f),
      (i[31] = E),
      (i[32] = A),
      (i[33] = l),
      (i[34] = g));
  else g = i[34];
  let b;
  if (i[35] !== g || i[36] !== s)
    ((b = e(ToolResultRow, {
      children: r(o, { flexDirection: "column", children: [s, g] }),
    })),
      (i[35] = g),
      (i[36] = s),
      (i[37] = b));
  else b = i[37];
  return b;
}
function gt(Kt) {
  return Kt.startsWith("+");
}
function at(Qt, Vt) {
  return Qt + countMatching(Vt.lines, gt);
}
function Pt(Yt) {
  return Yt.startsWith("-");
}
function ht(Zt, $t) {
  return Zt + countMatching($t.lines, Pt);
}
function wWe(Ft) {
  let a = _(25),
    {
      filePath: ot,
      structuredPatch: U,
      firstLine: nt,
      fileContent: rt,
      style: dt,
      verbose: it,
      previewHint: v,
      collapsed: Gt,
    } = Ft,
    { columns: Jt } = useTerminalSize(),
    c = U.reduce(at, 0),
    y = U.reduce(ht, 0),
    I;
  if (a[0] !== c)
    ((I =
      c > 0
        ? r(N, {
            children: [
              "Added ",
              e(t, { bold: !0, children: c }),
              " ",
              c > 1 ? "lines" : "line",
            ],
          })
        : null),
      (a[0] = c),
      (a[1] = I));
  else I = a[1];
  const st = c > 0 && y > 0 ? ", " : null;
  let O;
  if (a[2] !== c || a[3] !== y)
    ((O =
      y > 0
        ? r(N, {
            children: [
              c === 0 ? "R" : "r",
              "emoved ",
              e(t, { bold: !0, children: y }),
              " ",
              y > 1 ? "lines" : "line",
            ],
          })
        : null),
      (a[2] = c),
      (a[3] = y),
      (a[4] = O));
  else O = a[4];
  let ut;
  if (a[5] !== I || a[6] !== st || a[7] !== O)
    ((ut = r(t, { children: [I, st, O] })),
      (a[5] = I),
      (a[6] = st),
      (a[7] = O),
      (a[8] = ut));
  else ut = a[8];
  let k = ut;
  if (v) {
    if (dt !== "condensed" && !it) {
      let d;
      if (a[9] !== v)
        ((d = e(ToolResultRow, { children: e(t, { dimColor: !0, children: v }) })),
          (a[9] = v),
          (a[10] = d));
      else d = a[10];
      return d;
    }
  } else if (dt === "condensed" && !it) {
    return k;
  } else if (Gt && !it && c + y > 0) {
    let d;
    if (a[11] === MEMO_CACHE_SENTINEL) ((d = e(TranscriptExpandHint, {})), (a[11] = d));
    else d = a[11];
    let H;
    if (a[12] !== k)
      ((H = e(ToolResultRow, { children: r(t, { children: [k, " ", d] }) })),
        (a[12] = k),
        (a[13] = H));
    else H = a[13];
    return H;
  }
  let d;
  if (a[14] !== k) ((d = e(t, { children: k })), (a[14] = k), (a[15] = d));
  else d = a[15];
  const H = Jt - 12;
  let X;
  if (
    a[16] !== rt ||
    a[17] !== ot ||
    a[18] !== nt ||
    a[19] !== U ||
    a[20] !== H
  )
    ((X = e(DiffHunks, {
      hunks: U,
      dim: !1,
      width: H,
      filePath: ot,
      firstLine: nt,
      fileContent: rt,
    })),
      (a[16] = rt),
      (a[17] = ot),
      (a[18] = nt),
      (a[19] = U),
      (a[20] = H),
      (a[21] = X));
  else X = a[21];
  let pt;
  if (a[22] !== d || a[23] !== X)
    ((pt = e(ToolResultRow, {
      children: r(o, { flexDirection: "column", children: [d, X] }),
    })),
      (a[22] = d),
      (a[23] = X),
      (a[24] = pt));
  else pt = a[24];
  return pt;
}
export { RejectedToolUseDiff, wWe };
