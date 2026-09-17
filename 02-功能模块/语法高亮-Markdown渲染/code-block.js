// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { countOccurrences } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { hashPairWithBun } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { useTheme } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { expandLeadingTabs } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { stripAnsi } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { isFullscreen, useRenderCaches, Box, Text, Ansi, NoSelect, measureElement } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { sliceAnsi } from "../../01-核心基础设施/ANSI-样式-布局原语/ansi-text-primitives.js";
import { highlightLanguageRegistry } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getSyntaxHighlightAdapter } from "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import { MAX_CODE_LINE_CHARS, truncateCodeLine, formatTruncationNotice, getCodeBlockRenderer } from "./syntax-highlight-renderer.js";
import { useSettings } from "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Yl, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
import { extname } from "path";
var Qt = 500;
function K(s, i, m, f) {
  let u = hashPairWithBun(`${f}\x00${highlightLanguageRegistry.pluginGrammarGeneration}`, m),
    l = s.get(u);
  if (l !== void 0) return (s.delete(u), s.set(u, l), l);
  let c = i.highlight(m, { language: f });
  if (s.size >= Qt) {
    let g = s.keys().next().value;
    if (g !== void 0) s.delete(g);
  }
  return (s.set(u, c), c);
}
function Q(s) {
  let i = new Map();
  if (s.length <= MAX_CODE_LINE_CHARS) return { text: s, markers: i };
  return {
    text: s
      .split(
        `
`,
      )
      .map((u, l) => {
        let { code: c, truncatedChars: g } = truncateCodeLine(u);
        if (g > 0) return (i.set(l, formatTruncationNotice(g)), c);
        return u;
      }).join(`
`),
    markers: i,
  };
}
function x(s, i) {
  if (i.size === 0) return s;
  return s
    .split(
      `
`,
    )
    .map((m, f) => {
      let u = i.get(f);
      return u ? m + chalk.dim(u) : m;
    }).join(`
`);
}
function Y(xr) {
  let j = _(16),
    { code: xt, filePath: yt, dim: Ut, skipColoring: jt } = xr,
    R = Ut === void 0 ? !1 : Ut,
    Rt = jt === void 0 ? !1 : jt,
    q,
    Et;
  if (j[0] !== xt || j[1] !== R || j[2] !== Rt) {
    Et = EARLY_RETURN_SENTINEL;
    bb0: {
      q = expandLeadingTabs(xt);
      if (Rt) {
        let { text: yr, markers: Rr } = Q(q);
        const A = e(Ansi, { children: x(yr, Rr) });
        let D;
        if (j[5] !== R || j[6] !== A)
          ((D = e(Text, { dimColor: R, children: A })),
            (j[5] = R),
            (j[6] = A),
            (j[7] = D));
        else D = j[7];
        Et = D;
        break bb0;
      }
    }
    ((j[0] = xt), (j[1] = R), (j[2] = Rt), (j[3] = q), (j[4] = Et));
  } else ((q = j[3]), (Et = j[4]));
  if (Et !== EARLY_RETURN_SENTINEL) return Et;
  let A;
  if (j[8] !== yt) ((A = extname(yt).slice(1)), (j[8] = yt), (j[9] = A));
  else A = j[9];
  let wt = A,
    D;
  if (j[10] !== q || j[11] !== wt)
    ((D = e(mt, { codeWithSpaces: q, language: wt })),
      (j[10] = q),
      (j[11] = wt),
      (j[12] = D));
  else D = j[12];
  let qt;
  if (j[13] !== R || j[14] !== D)
    ((qt = e(Text, { dimColor: R, children: D })),
      (j[13] = R),
      (j[14] = D),
      (j[15] = qt));
  else qt = j[15];
  return qt;
}
function mt(Er) {
  let Mt = _(7),
    { codeWithSpaces: Ct, language: I } = Er,
    Jt;
  if (Mt[0] === MEMO_CACHE_SENTINEL) ((Jt = getSyntaxHighlightAdapter()), (Mt[0] = Jt));
  else Jt = Mt[0];
  let St = Jt,
    { highlightedCode: it } = useRenderCaches(),
    grammarGeneration = highlightLanguageRegistry.pluginGrammarGeneration,
    J;
  if (Mt[1] !== Ct || Mt[2] !== it || Mt[3] !== I) {
    bb0: {
      let { text: Dt, markers: Wt } = Q(Ct);
      let Kt = "markdown";
      if (I) {
        if (St.supportsLanguage(I)) Kt = I;
        else
          logForDebugging(
            `Language not supported while highlighting code, falling back to markdown: ${I}`,
          );
      }
      try {
        J = x(K(it, St, Dt, Kt), Wt);
      } catch (st) {
        let Gt = st;
        if (Gt instanceof Error && Gt.message.includes("Unknown language")) {
          J =
            (logForDebugging(
              `Language not supported while highlighting code, falling back to markdown: ${Gt}`,
            ),
            x(K(it, St, Dt, "markdown"), Wt));
          break bb0;
        }
        J = x(Dt, Wt);
      }
    }
    ((Mt[1] = Ct), (Mt[2] = it), (Mt[3] = I), (Mt[4] = J));
  } else J = Mt[4];
  let Ht = J,
    st;
  if (Mt[5] !== Ht)
    ((st = e(Ansi, { children: Ht })), (Mt[5] = Ht), (Mt[6] = st));
  else st = Mt[6];
  return st;
}
var Ft = 80,
  CodeBlock = Yl(function (Tr) {
    let W = _(32),
      { code: b, filePath: T, width: Z, dim: Vt, startLine: Yt } = Tr,
      z = Vt === void 0 ? !1 : Vt,
      k = Yt === void 0 ? 1 : Yt,
      Pt = C(null),
      [_t, zr] = d(Z || Ft),
      [$t] = useTheme(),
      O = useSettings().syntaxHighlightingDisabled ?? !1,
      L;
    if (W[0] !== b || W[1] !== T || W[2] !== O) {
      bb0: {
        if (O) {
          L = null;
          break bb0;
        }
        let Zt = getCodeBlockRenderer();
        if (!Zt) {
          L = null;
          break bb0;
        }
        L = new Zt(expandLeadingTabs(b), T);
      }
      ((W[0] = b), (W[1] = T), (W[2] = O), (W[3] = L));
    } else L = W[3];
    let ut = L,
      Lt,
      tr;
    if (W[4] !== Z)
      ((Lt = () => {
        if (!Z && Pt.current) {
          let { width: rr } = measureElement(Pt.current);
          if (rr > 0) zr(rr - 2);
        }
      }),
        (tr = [Z]),
        (W[4] = Z),
        (W[5] = Lt),
        (W[6] = tr));
    else ((Lt = W[5]), (tr = W[6]));
    E(Lt, tr);
    let At;
    bb1: {
      if (k === 1) {
        At = null;
        break bb1;
      }
      let nr = nt(b);
      let lt = String(k + nr - 1).length;
      const G = Math.max(0, lt - String(nr).length);
      let y;
      if (W[7] !== lt || W[8] !== G)
        ((y = { digits: lt, extraCols: G }),
          (W[7] = lt),
          (W[8] = G),
          (W[9] = y));
      else y = W[9];
      At = y;
    }
    let tt = At,
      G;
    bb2: {
      if (ut === null) {
        G = null;
        break bb2;
      }
      let y;
      if (
        W[10] !== ut ||
        W[11] !== z ||
        W[12] !== tt?.extraCols ||
        W[13] !== _t ||
        W[14] !== $t
      )
        ((y = ut.render($t, _t - (tt?.extraCols ?? 0), z)),
          (W[10] = ut),
          (W[11] = z),
          (W[12] = tt?.extraCols),
          (W[13] = _t),
          (W[14] = $t),
          (W[15] = y));
      else y = W[15];
      G = y;
    }
    let w = G,
      Fr = isFullscreen(),
      y;
    bb3: {
      if (!Fr && k === 1) {
        y = 0;
        break bb3;
      }
      let X;
      if (W[16] !== b) ((X = nt(b)), (W[16] = b), (W[17] = X));
      else X = W[17];
      y = String(X).length + 2;
    }
    let M = y,
      X;
    bb4: {
      if (tt === null || M === 0 || w === null) {
        X = null;
        break bb4;
      }
      let { digits: ft } = tt;
      let rt;
      if (W[18] !== ft || W[19] !== M || W[20] !== w || W[21] !== k) {
        let ct = k;
        rt = w.map((Or) => {
          if (stripAnsi(sliceAnsi(Or, 0, M)).trim() === "") {
            return " ".repeat(ft + 2);
          }
          let Xr = ct;
          return ((ct = ct + 1), ct, ` ${String(Xr).padStart(ft)} `);
        });
        ((W[18] = ft), (W[19] = M), (W[20] = w), (W[21] = k), (W[22] = rt));
      } else rt = W[22];
      X = rt;
    }
    let It = X,
      rt;
    if (
      W[23] !== b ||
      W[24] !== z ||
      W[25] !== It ||
      W[26] !== T ||
      W[27] !== M ||
      W[28] !== w ||
      W[29] !== k ||
      W[30] !== O
    )
      ((rt = e(Box, {
        ref: Pt,
        children: w
          ? e(Box, {
              flexDirection: "column",
              children: w.map((er, Tt) =>
                M > 0
                  ? e(
                      bt,
                      { line: er, gutterWidth: M, displayGutter: It?.[Tt] },
                      Tt,
                    )
                  : e(Text, { children: e(Ansi, { children: er }) }, Tt),
              ),
            })
          : r(Box, {
              flexDirection: "column",
              children: [
                k !== 1 &&
                  r(Text, { dimColor: !0, children: ["\u2026 from line ", k] }),
                e(Y, { code: b, filePath: T, dim: z, skipColoring: O }),
              ],
            }),
      })),
        (W[23] = b),
        (W[24] = z),
        (W[25] = It),
        (W[26] = T),
        (W[27] = M),
        (W[28] = w),
        (W[29] = k),
        (W[30] = O),
        (W[31] = rt));
    else rt = W[31];
    return rt;
  });
function nt(s) {
  let i =
    countOccurrences(
      s,
      `
`,
    ) + 1;
  return s.endsWith(`
`)
    ? i - 1
    : i;
}
function bt(vr) {
  let at = _(12),
    { line: v, gutterWidth: B, displayGutter: gt } = vr,
    or;
  if (at[0] !== B || at[1] !== v)
    ((or = sliceAnsi(v, B)), (at[0] = B), (at[1] = v), (at[2] = or));
  else or = at[2];
  let zt = or,
    dt;
  if (at[3] !== gt || at[4] !== B || at[5] !== v)
    ((dt = e(NoSelect, {
      fromLeftEdge: !0,
      children:
        gt === void 0
          ? e(Text, { children: e(Ansi, { children: sliceAnsi(v, 0, B) }) })
          : e(Text, { dimColor: !0, children: gt }),
    })),
      (at[3] = gt),
      (at[4] = B),
      (at[5] = v),
      (at[6] = dt));
  else dt = at[6];
  let ht;
  if (at[7] !== zt)
    ((ht = e(Text, { children: e(Ansi, { children: zt }) })),
      (at[7] = zt),
      (at[8] = ht));
  else ht = at[8];
  let ir;
  if (at[9] !== dt || at[10] !== ht)
    ((ir = r(Box, { flexDirection: "row", children: [dt, ht] })),
      (at[9] = dt),
      (at[10] = ht),
      (at[11] = ir));
  else ir = at[11];
  return ir;
}
export { CodeBlock };
