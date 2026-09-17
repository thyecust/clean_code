// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 229 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Po } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize, firstLine } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { formatPathForDisplay } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { E9e, A9e } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { computeStructuredPatchFromEdits, openLocalFileForRead, readWholeFileIfSmall, extractTagContent } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isScratchpadDisplayPath, isWorkshopDisplayPath } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { getPlansDirectory } from "../计划模式-Plan/计划模式-Plan.e5mh1avy.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import { TranscriptExpandHint, OverflowHint, ToolErrorMessage } from "../../03-入口与运行时/会话UI-REPL/tool-result-display.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../语法高亮-Markdown渲染/syntax-highlight-renderer.js";
import "../差异引擎-Diff/structured-diff.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import { CodeBlock } from "../语法高亮-Markdown渲染/code-block.js";
import { TruncatedFilePath } from "../../03-入口与运行时/会话UI-REPL/chunk-vpp75aza.js";
import { RejectedToolUseDiff, ToolUseDiff } from "../差异引擎-Diff/diff-tool-result-render.js";
import "../../01-核心基础设施/共享小工具-未细化/diff-hunks.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Dn, kn, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
import { isAbsolute, relative, resolve } from "path";
function Re(i, a, s = 1 / 0) {
  let l = a <= 0 || !Number.isFinite(a),
    f = 0,
    c = 0;
  while (c <= i.length) {
    let u = i.indexOf(
        `
`,
        c,
      ),
      k = u === -1 ? i.substring(c) : i.substring(c, u);
    if (l) f++;
    else {
      let w = E9e(k);
      f += w === 0 ? 1 : Math.ceil(w / a);
    }
    if (f > s) return f;
    if (u === -1) break;
    c = u + 1;
  }
  return f;
}
function re(i, a, s) {
  return Re(i, a, s) > s;
}
var b = 10,
  R = `
`;
function O(i) {
  let a = i.split(R);
  return i.endsWith(R) ? a.length - 1 : a.length;
}
function me(i, a) {
  let s = A9e(i, a).height;
  return i.endsWith(R) ? s - 1 : s;
}
function N() {
  let mt = _(1),
    Te;
  if (mt[0] === MEMO_CACHE_SENTINEL)
    ((Te = e(Text, {
      dimColor: !0,
      children: " \u2014 previous content replaced (no diff shown)",
    })),
      (mt[0] = Te));
  else Te = mt[0];
  return Te;
}
function he(gt) {
  let g = _(37),
    { filePath: D, content: Y, verbose: m, replacedUndiffedContent: Fe } = gt,
    oe = Fe === void 0 ? !1 : Fe,
    { columns: ht } = useTerminalSize(),
    v = Math.max(1, ht - 12),
    U = Y || "(No content)",
    ke;
  if (g[0] !== Y) ((ke = O(Y)), (g[0] = Y), (g[1] = ke));
  else ke = g[1];
  let M = ke,
    we;
  if (g[2] !== U || g[3] !== v || g[4] !== m)
    ((we = m
      ? U
      : U.split(R)
          .slice(0, b)
          .join(R)
          .slice(0, b * (v + 1))),
      (g[2] = U),
      (g[3] = v),
      (g[4] = m),
      (g[5] = we));
  else we = g[5];
  let ne = we,
    ie = m ? 0 : me(U, v) - b,
    q;
  if (g[6] !== M)
    ((q = e(Text, { bold: !0, children: M })), (g[6] = M), (g[7] = q));
  else q = g[7];
  let z;
  if (g[8] !== M) ((z = pluralize(M, "line")), (g[8] = M), (g[9] = z));
  else z = g[9];
  let A;
  if (g[10] !== D || g[11] !== m)
    ((A = m ? D : relative(getCwd(), D)), (g[10] = D), (g[11] = m), (g[12] = A));
  else A = g[12];
  let G;
  if (g[13] !== A)
    ((G = e(Text, { bold: !0, children: A })), (g[13] = A), (g[14] = G));
  else G = g[14];
  let J;
  if (g[15] !== oe) ((J = oe && e(N, {})), (g[15] = oe), (g[16] = J));
  else J = g[16];
  let K;
  if (g[17] !== q || g[18] !== z || g[19] !== G || g[20] !== J)
    ((K = r(Text, { children: ["Wrote ", q, " ", z, " to", " ", G, J] })),
      (g[17] = q),
      (g[18] = z),
      (g[19] = G),
      (g[20] = J),
      (g[21] = K));
  else K = g[21];
  const se = m ? void 0 : "hidden",
    ae = m ? void 0 : b;
  let Z;
  if (g[22] !== ne || g[23] !== D || g[24] !== v)
    ((Z = e(CodeBlock, { code: ne, filePath: D, width: v })),
      (g[22] = ne),
      (g[23] = D),
      (g[24] = v),
      (g[25] = Z));
  else Z = g[25];
  let E;
  if (g[26] !== se || g[27] !== ae || g[28] !== Z)
    ((E = e(Box, {
      flexDirection: "column",
      overflowY: se,
      maxHeight: ae,
      children: Z,
    })),
      (g[26] = se),
      (g[27] = ae),
      (g[28] = Z),
      (g[29] = E));
  else E = g[29];
  let I;
  if (g[30] !== ie || g[31] !== m)
    ((I = !m && e(OverflowHint, { count: ie, expandable: !0 })),
      (g[30] = ie),
      (g[31] = m),
      (g[32] = I));
  else I = g[32];
  let De;
  if (g[33] !== E || g[34] !== I || g[35] !== K)
    ((De = e(ToolResultRow, {
      children: r(Box, { flexDirection: "column", children: [K, E, I] }),
    })),
      (g[33] = E),
      (g[34] = I),
      (g[35] = K),
      (g[36] = De));
  else De = g[36];
  return De;
}
function be({ type: i, content: a, structuredPatch: s, originalFile: l }) {
  return (
    i === "update" &&
    Array.isArray(s) &&
    s.length === 0 &&
    l === null &&
    typeof a === "string" &&
    a !== ""
  );
}
function isResultTruncated(i, { columns: a }) {
  let { type: s, content: l } = i;
  if (s !== "create" && !be(i)) return !1;
  if (typeof l !== "string") return !1;
  let f = l.endsWith(R) ? b + 1 : b;
  return re(l, Math.max(1, a - 12), f);
}
function renderToolUseMessage(i, { verbose: a }) {
  if (!i.file_path) return null;
  if (i.file_path.startsWith(getPlansDirectory())) return "";
  return e(TruncatedFilePath, {
    filePath: i.file_path,
    children: a ? i.file_path : formatPathForDisplay(i.file_path),
  });
}
function renderToolUseRejectedMessage({ file_path: i, content: a }, { style: s, verbose: l }) {
  return e(ye, { filePath: i, content: a, style: s, verbose: l });
}
function ye(bt) {
  let H = _(20),
    { filePath: y, content: P, style: le, verbose: W } = bt,
    ve;
  if (H[0] !== P || H[1] !== y)
    ((ve = () => ge(y, P)), (H[0] = P), (H[1] = y), (H[2] = ve));
  else ve = H[2];
  let [ce] = d(ve),
    Ce;
  if (H[3] !== P) ((Ce = firstLine(P)), (H[3] = P), (H[4] = Ce));
  else Ce = H[4];
  let L = Ce,
    Me;
  if (H[5] !== P || H[6] !== y || H[7] !== L || H[8] !== W)
    ((Me = e(RejectedToolUseDiff, {
      file_path: y,
      operation: "write",
      content: P,
      firstLine: L,
      verbose: W,
    })),
      (H[5] = P),
      (H[6] = y),
      (H[7] = L),
      (H[8] = W),
      (H[9] = Me));
  else Me = H[9];
  let j = Me,
    X;
  if (
    H[10] !== j ||
    H[11] !== ce ||
    H[12] !== y ||
    H[13] !== L ||
    H[14] !== le ||
    H[15] !== W
  )
    ((X = e(te, {
      promise: ce,
      filePath: y,
      firstLine: L,
      createFallback: j,
      style: le,
      verbose: W,
    })),
      (H[10] = j),
      (H[11] = ce),
      (H[12] = y),
      (H[13] = L),
      (H[14] = le),
      (H[15] = W),
      (H[16] = X));
  else X = H[16];
  let We;
  if (H[17] !== j || H[18] !== X)
    ((We = e(Dn, { fallback: j, children: X })),
      (H[17] = j),
      (H[18] = X),
      (H[19] = We));
  else We = H[19];
  return We;
}
function te(yt) {
  let Le = _(8),
    {
      promise: xt,
      filePath: fe,
      firstLine: pe,
      createFallback: Pt,
      style: ue,
      verbose: de,
    } = yt,
    T = kn(xt);
  if (T.type === "create") {
    return Pt;
  }
  if (T.type === "error") {
    let S;
    if (Le[0] === MEMO_CACHE_SENTINEL)
      ((S = e(ToolResultRow, { children: e(Text, { children: "(No changes)" }) })),
        (Le[0] = S));
    else S = Le[0];
    return S;
  }
  let S;
  if (
    Le[1] !== T.oldContent ||
    Le[2] !== T.patch ||
    Le[3] !== fe ||
    Le[4] !== pe ||
    Le[5] !== ue ||
    Le[6] !== de
  )
    ((S = e(RejectedToolUseDiff, {
      file_path: fe,
      operation: "update",
      patch: T.patch,
      firstLine: pe,
      fileContent: T.oldContent,
      style: ue,
      verbose: de,
    })),
      (Le[1] = T.oldContent),
      (Le[2] = T.patch),
      (Le[3] = fe),
      (Le[4] = pe),
      (Le[5] = ue),
      (Le[6] = de),
      (Le[7] = S));
  else S = Le[7];
  return S;
}
async function ge(i, a) {
  try {
    let s = isAbsolute(i) ? i : resolve(getCwd(), i),
      l = await openLocalFileForRead(s);
    if (l === null) return { type: "create" };
    let f;
    try {
      f = await readWholeFileIfSmall(l);
    } finally {
      await l.close();
    }
    if (f === null) return { type: "create" };
    return {
      type: "update",
      patch: computeStructuredPatchFromEdits({
        filePath: i,
        fileContents: f,
        edits: [{ old_string: f, new_string: a, replace_all: !1 }],
      }),
      oldContent: f,
    };
  } catch (s) {
    if (Po(s))
      logForDebugging(`Failed to load rejection diff for ${i}: ${s.message}`, {
        level: "error",
      });
    else logError(s);
    return { type: "error" };
  }
}
function renderToolUseErrorMessage(i, { verbose: a }) {
  if (!a && typeof i === "string" && extractTagContent(i, "tool_use_error"))
    return e(ToolResultRow, {
      children: e(Text, { color: "error", children: "Error writing file" }),
    });
  return e(ToolErrorMessage, { result: i, verbose: a });
}
function renderToolResultMessage(i, a, { style: s, verbose: l }) {
  return Pe(i, a, { style: s, verbose: l });
}
function Pe(i, a, { style: s, verbose: l, replacedUndiffedContent: f = !1 }) {
  let {
    filePath: c = "",
    content: u,
    structuredPatch: k,
    type: w,
    originalFile: B,
  } = i;
  if (!c) return null;
  switch (w) {
    case "create": {
      if (c.startsWith(getPlansDirectory()) && !l) {
        if (s !== "condensed")
          return e(ToolResultRow, {
            children: e(Text, { dimColor: !0, children: "/plan to preview" }),
          });
      } else if (s === "condensed" && !l) {
        let C = O(u);
        return r(Text, {
          children: [
            "Wrote ",
            e(Text, { bold: !0, children: C }),
            " ",
            pluralize(C, "line"),
            " to",
            " ",
            e(Text, { bold: !0, children: relative(getCwd(), c) }),
            f && e(N, {}),
          ],
        });
      } else if (!l && (isScratchpadDisplayPath(c) || isWorkshopDisplayPath(c))) {
        let C = O(u);
        return e(ToolResultRow, {
          children: r(Text, {
            children: [
              "Wrote ",
              e(Text, { bold: !0, children: C }),
              " ",
              pluralize(C, "line"),
              f && e(N, {}),
              " ",
              e(TranscriptExpandHint, {}),
            ],
          }),
        });
      }
      return e(he, {
        filePath: c,
        content: u,
        verbose: l,
        replacedUndiffedContent: f,
      });
    }
    case "update": {
      if (be(i))
        return Pe({ ...i, type: "create" }, a, {
          style: s,
          verbose: l,
          replacedUndiffedContent: !0,
        });
      let V = c.startsWith(getPlansDirectory());
      return e(ToolUseDiff, {
        filePath: c,
        structuredPatch: k,
        firstLine: firstLine(u),
        fileContent: B ?? void 0,
        style: s,
        verbose: l,
        previewHint: V ? "/plan to preview" : void 0,
        collapsed: !V && (isScratchpadDisplayPath(c) || isWorkshopDisplayPath(c)),
      });
    }
  }
}
export {
  isResultTruncated,
  renderToolResultMessage,
  renderToolUseErrorMessage,
  renderToolUseMessage,
  renderToolUseRejectedMessage,
};
