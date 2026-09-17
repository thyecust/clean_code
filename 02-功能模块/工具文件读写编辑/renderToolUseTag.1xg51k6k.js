// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 236 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { gMe, Lr } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Ao, yx } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { _i, Oo } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import { Yd } from "../../03-入口与运行时/会话UI(REPL)/chunk-sn6am10p.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { Pg } from "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { formatFileSize } from "../../01-核心基础设施/共享小工具-未细化/chunk-7axvc6rn.js";
import { basename } from "path";
function renderToolUseMessage({ file_path: o, offset: n, limit: s, pages: l }, { verbose: c }) {
  if (!o) return null;
  if (gMe(o)) return "";
  let i = c ? o : Ao(o);
  if (l)
    return r(N, {
      children: [
        e(Pg, { filePath: o, children: i }),
        ` \xB7 pages ${Oo(_i(`${l}`))}`,
      ],
    });
  if (c && (n || s)) {
    let a = n ?? 1,
      f = s ? `lines ${a}-${a + s - 1}` : `from line ${a}`;
    return r(N, {
      children: [e(Pg, { filePath: o, children: i }), ` \xB7 ${f}`],
    });
  }
  return e(Pg, { filePath: o, children: i });
}
function renderToolUseTag({ file_path: o }) {
  let n = o ? gMe(o) : null;
  if (!n) return null;
  return r(t, { dimColor: !0, children: [" ", n] });
}
function renderToolResultMessage(o) {
  switch (o.type) {
    case "image": {
      let { originalSize: n } = o.file,
        s = formatFileSize(n);
      return e(ToolResultRow, {
        height: 1,
        children: r(t, { children: ["Read image (", s, ")"] }),
      });
    }
    case "notebook": {
      let { cells: n } = o.file;
      if (!n || n.length < 1)
        return e(t, { color: "error", children: "No cells found in notebook" });
      return e(ToolResultRow, {
        height: 1,
        children: r(t, {
          children: ["Read ", e(t, { bold: !0, children: n.length }), " cells"],
        }),
      });
    }
    case "pdf": {
      let { originalSize: n } = o.file,
        s = formatFileSize(n);
      return e(ToolResultRow, {
        height: 1,
        children: r(t, { children: ["Read PDF (", s, ")"] }),
      });
    }
    case "parts":
      return e(ToolResultRow, {
        height: 1,
        children: r(t, {
          children: [
            "Read ",
            e(t, { bold: !0, children: o.file.count }),
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
        children: r(t, {
          children: [
            "Read ",
            e(t, { bold: !0, children: n }),
            " ",
            n === 1 ? "line" : "lines",
          ],
        }),
      });
    }
    case "file_unchanged":
      return e(ToolResultRow, {
        height: 1,
        children: e(t, {
          dimColor: !0,
          children:
            o.source === "seeded"
              ? `Already in context (${Oo(_i(basename(o.file.filePath)))})`
              : "Unchanged since last read",
        }),
      });
  }
}
function renderToolUseErrorMessage(o, { verbose: n }) {
  if (!n && typeof o === "string") {
    if (o.includes(yx))
      return e(ToolResultRow, {
        children: e(t, { color: "error", children: "File not found" }),
      });
    if (Lr(o, "tool_use_error"))
      return e(ToolResultRow, {
        children: e(t, { color: "error", children: "Error reading file" }),
      });
  }
  return e(Yd, { result: o, verbose: n });
}
export {
  renderToolResultMessage,
  renderToolUseErrorMessage,
  renderToolUseMessage,
  renderToolUseTag,
};
