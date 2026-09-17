// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 232 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { firstLine } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { formatPathForDisplay, CWD_NOTE_PREFIX } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import { ToolErrorMessage } from "../../03-入口与运行时/会话UI(REPL)/tool-result-display.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import { DIFF_CONTEXT_LINES, offsetHunkLineNumbers, findActualOldString, matchOldStringQuoteStyle, applyEditToFileContents, readFileContextAroundString, extractTagContent } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import "../语法高亮-Markdown渲染/code-block.js";
import "../语法高亮-Markdown渲染/syntax-highlight-renderer.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../Diff引擎/structured-diff.js";
import { isScratchpadDisplayPath, isWorkshopDisplayPath } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { getPlansDirectory } from "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import { TruncatedFilePath } from "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import { RejectedToolUseDiff, ToolUseDiff } from "../Diff引擎/diff-tool-result-render.js";
import "../../01-核心基础设施/共享小工具-未细化/diff-hunks.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { Dn, kn, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
function renderToolUseMessage({ file_path: r }, { verbose: s }) {
  if (!r) return null;
  if (r.startsWith(getPlansDirectory())) return "";
  return e(TruncatedFilePath, { filePath: r, children: s ? r : formatPathForDisplay(r) });
}
function renderToolResultMessage(
  { filePath: r = "", structuredPatch: s, originalFile: i },
  a,
  { style: o, verbose: l },
) {
  if (!r) return null;
  let c = r.startsWith(getPlansDirectory());
  return e(ToolUseDiff, {
    filePath: r,
    structuredPatch: s,
    firstLine: i ? firstLine(i) : null,
    fileContent: i || void 0,
    style: o,
    verbose: l,
    previewHint: c ? "/plan to preview" : void 0,
    collapsed: !c && (isScratchpadDisplayPath(r) || isWorkshopDisplayPath(r)),
  });
}
function renderToolUseRejectedMessage(r, s) {
  let { style: i, verbose: a } = s,
    o = r.file_path,
    l = r.old_string ?? "",
    c = r.new_string ?? "",
    m = r.replace_all ?? !1;
  if ("edits" in r && r.edits != null)
    return e(RejectedToolUseDiff, {
      file_path: o,
      operation: "update",
      firstLine: null,
      verbose: a,
    });
  if (l === "")
    return e(RejectedToolUseDiff, {
      file_path: o,
      operation: "write",
      content: c,
      firstLine: firstLine(c),
      verbose: a,
    });
  return e(O, {
    filePath: o,
    oldString: l,
    newString: c,
    replaceAll: m,
    style: i,
    verbose: a,
  });
}
function renderToolUseErrorMessage(r, s) {
  let { verbose: i } = s;
  if (!i && typeof r === "string" && extractTagContent(r, "tool_use_error")) {
    let a = extractTagContent(r, "tool_use_error");
    if (a?.includes("File has not been read yet"))
      return e(ToolResultRow, {
        children: e(Text, { dimColor: !0, children: "File must be read first" }),
      });
    if (a?.includes(CWD_NOTE_PREFIX))
      return e(ToolResultRow, {
        children: e(Text, { color: "error", children: "File not found" }),
      });
    return e(ToolResultRow, {
      children: e(Text, { color: "error", children: "Error editing file" }),
    });
  }
  return e(ToolErrorMessage, { result: r, verbose: i });
}
function O(le) {
  let u = _(16),
    {
      filePath: f,
      oldString: R,
      newString: T,
      replaceAll: v,
      style: P,
      verbose: p,
    } = le,
    S;
  if (u[0] !== f || u[1] !== T || u[2] !== R || u[3] !== v)
    ((S = () => x(f, R, T, v)),
      (u[0] = f),
      (u[1] = T),
      (u[2] = R),
      (u[3] = v),
      (u[4] = S));
  else S = u[4];
  let [L] = d(S),
    g;
  if (u[5] !== f || u[6] !== p)
    ((g = e(RejectedToolUseDiff, {
      file_path: f,
      operation: "update",
      firstLine: null,
      verbose: p,
    })),
      (u[5] = f),
      (u[6] = p),
      (u[7] = g));
  else g = u[7];
  let b;
  if (u[8] !== L || u[9] !== f || u[10] !== P || u[11] !== p)
    ((b = e(y, { promise: L, filePath: f, style: P, verbose: p })),
      (u[8] = L),
      (u[9] = f),
      (u[10] = P),
      (u[11] = p),
      (u[12] = b));
  else b = u[12];
  let j;
  if (u[13] !== g || u[14] !== b)
    ((j = e(Dn, { fallback: g, children: b })),
      (u[13] = g),
      (u[14] = b),
      (u[15] = j));
  else j = u[15];
  return j;
}
function y(ce) {
  let pe = _(7),
    { promise: fe, filePath: N, style: w, verbose: C } = ce,
    { patch: D, firstLine: E, fileContent: k } = kn(fe),
    U;
  if (
    pe[0] !== k ||
    pe[1] !== N ||
    pe[2] !== E ||
    pe[3] !== D ||
    pe[4] !== w ||
    pe[5] !== C
  )
    ((U = e(RejectedToolUseDiff, {
      file_path: N,
      operation: "update",
      patch: D,
      firstLine: E,
      fileContent: k,
      style: w,
      verbose: C,
    })),
      (pe[0] = k),
      (pe[1] = N),
      (pe[2] = E),
      (pe[3] = D),
      (pe[4] = w),
      (pe[5] = C),
      (pe[6] = U));
  else U = pe[6];
  return U;
}
async function x(r, s, i, a) {
  try {
    let o = await readFileContextAroundString(r, s, DIFF_CONTEXT_LINES);
    if (o === null || o.truncated || o.content === "") {
      let { patch: M } = applyEditToFileContents({
        filePath: r,
        fileContents: s,
        oldString: s,
        newString: i,
      });
      return { patch: M, firstLine: null, fileContent: void 0 };
    }
    let l = findActualOldString(o.content, s) || s,
      c = matchOldStringQuoteStyle(s, l, i),
      { patch: m } = applyEditToFileContents({
        filePath: r,
        fileContents: o.content,
        oldString: l,
        newString: c,
        replaceAll: a,
      });
    return {
      patch: offsetHunkLineNumbers(m, o.lineOffset - 1),
      firstLine: o.lineOffset === 1 ? firstLine(o.content) : null,
      fileContent: o.content,
    };
  } catch (o) {
    if (Rt(o))
      logForDebugging(`Failed to load rejection diff for ${r}: ${o.message}`, {
        level: "error",
      });
    else logError(o);
    return { patch: [], firstLine: null, fileContent: void 0 };
  }
}
export {
  renderToolResultMessage,
  renderToolUseErrorMessage,
  renderToolUseMessage,
  renderToolUseRejectedMessage,
};
