// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 236 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { getTaskIdFromOutputPath, extractTagContent } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { formatPathForDisplay, CWD_NOTE_PREFIX } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { sanitizeUntrustedText, replaceLineBreaks } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import { ToolErrorMessage } from "../../03-入口与运行时/会话UI(REPL)/tool-result-display.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { TruncatedFilePath } from "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { formatFileSize } from "../../01-核心基础设施/共享小工具-未细化/chunk-7axvc6rn.js";
import { basename } from "path";
function renderToolUseMessage({ file_path: o, offset: n, limit: s, pages: l }, { verbose: c }) {
  if (!o) return null;
  if (getTaskIdFromOutputPath(o)) return "";
  let i = c ? o : formatPathForDisplay(o);
  if (l)
    return r(N, {
      children: [
        e(TruncatedFilePath, { filePath: o, children: i }),
        ` \xB7 pages ${replaceLineBreaks(sanitizeUntrustedText(`${l}`))}`,
      ],
    });
  if (c && (n || s)) {
    let a = n ?? 1,
      f = s ? `lines ${a}-${a + s - 1}` : `from line ${a}`;
    return r(N, {
      children: [e(TruncatedFilePath, { filePath: o, children: i }), ` \xB7 ${f}`],
    });
  }
  return e(TruncatedFilePath, { filePath: o, children: i });
}
function renderToolUseTag({ file_path: o }) {
  let n = o ? getTaskIdFromOutputPath(o) : null;
  if (!n) return null;
  return r(Text, { dimColor: !0, children: [" ", n] });
}
function renderToolResultMessage(o) {
  switch (o.type) {
    case "image": {
      let { originalSize: n } = o.file,
        s = formatFileSize(n);
      return e(ToolResultRow, {
        height: 1,
        children: r(Text, { children: ["Read image (", s, ")"] }),
      });
    }
    case "notebook": {
      let { cells: n } = o.file;
      if (!n || n.length < 1)
        return e(Text, { color: "error", children: "No cells found in notebook" });
      return e(ToolResultRow, {
        height: 1,
        children: r(Text, {
          children: ["Read ", e(Text, { bold: !0, children: n.length }), " cells"],
        }),
      });
    }
    case "pdf": {
      let { originalSize: n } = o.file,
        s = formatFileSize(n);
      return e(ToolResultRow, {
        height: 1,
        children: r(Text, { children: ["Read PDF (", s, ")"] }),
      });
    }
    case "parts":
      return e(ToolResultRow, {
        height: 1,
        children: r(Text, {
          children: [
            "Read ",
            e(Text, { bold: !0, children: o.file.count }),
            " ",
            o.file.count === 1 ? "page" : "pages",
            " (",
            formatFileSize(o.file.originalSize),
            ")",
          ],
        }),
      });
    case "text": {
      let { numLines: n } = o.file;
      return e(ToolResultRow, {
        height: 1,
        children: r(Text, {
          children: [
            "Read ",
            e(Text, { bold: !0, children: n }),
            " ",
            n === 1 ? "line" : "lines",
          ],
        }),
      });
    }
    case "file_unchanged":
      return e(ToolResultRow, {
        height: 1,
        children: e(Text, {
          dimColor: !0,
          children:
            o.source === "seeded"
              ? `Already in context (${replaceLineBreaks(sanitizeUntrustedText(basename(o.file.filePath)))})`
              : "Unchanged since last read",
        }),
      });
  }
}
function renderToolUseErrorMessage(o, { verbose: n }) {
  if (!n && typeof o === "string") {
    if (o.includes(CWD_NOTE_PREFIX))
      return e(ToolResultRow, {
        children: e(Text, { color: "error", children: "File not found" }),
      });
    if (extractTagContent(o, "tool_use_error"))
      return e(ToolResultRow, {
        children: e(Text, { color: "error", children: "Error reading file" }),
      });
  }
  return e(ToolErrorMessage, { result: o, verbose: n });
}
export {
  renderToolResultMessage,
  renderToolUseErrorMessage,
  renderToolUseMessage,
  renderToolUseTag,
};
