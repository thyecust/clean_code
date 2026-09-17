// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 209 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { truncateToWidth } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { trackClaudeInChromeTabId } from "./chunk-hnp84hf6.js";
import "../图片-截图-ComputerUse/chunk-mk8kjx9c.js";
import "./chunk-317fgfn3.js";
import "../图片-截图-ComputerUse/chunk-csvzwhzk.js";
import { uon } from "./chunk-v8138qz5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kdfkgcfn.js";
function c(e, o, s) {
  let a = e.tabId;
  if (typeof a === "number") trackClaudeInChromeTabId(a);
  let r = [];
  switch (o) {
    case "navigate":
      if (typeof e.url === "string")
        try {
          let t = new URL(e.url);
          r.push(t.hostname);
        } catch {
          r.push(truncateToWidth(e.url, 30));
        }
      break;
    case "find":
      if (typeof e.query === "string") r.push(`pattern: ${truncateToWidth(e.query, 30)}`);
      break;
    case "computer":
      if (typeof e.action === "string") {
        let t = e.action;
        if (
          t === "left_click" ||
          t === "right_click" ||
          t === "double_click" ||
          t === "middle_click"
        )
          if (typeof e.ref === "string") r.push(`${t} on ${e.ref}`);
          else if (Array.isArray(e.coordinate))
            r.push(`${t} at (${e.coordinate.join(", ")})`);
          else r.push(t);
        else if (t === "type" && typeof e.text === "string")
          r.push(`type "${truncateToWidth(e.text, 15)}"`);
        else if (t === "key" && typeof e.text === "string")
          r.push(`key ${e.text}`);
        else if (t === "scroll" && typeof e.scroll_direction === "string")
          r.push(`scroll ${e.scroll_direction}`);
        else if (t === "wait" && typeof e.duration === "number")
          r.push(`wait ${e.duration}s`);
        else if (t === "left_click_drag") r.push("drag");
        else r.push(t);
      }
      break;
    case "gif_creator":
      if (typeof e.action === "string") r.push(`${e.action}`);
      break;
    case "resize_window":
      if (typeof e.width === "number" && typeof e.height === "number")
        r.push(`${e.width}x${e.height}`);
      break;
    case "read_console_messages":
      if (typeof e.pattern === "string")
        r.push(`pattern: ${truncateToWidth(e.pattern, 20)}`);
      if (e.onlyErrors === !0) r.push("errors only");
      break;
    case "read_network_requests":
      if (typeof e.urlPattern === "string")
        r.push(`pattern: ${truncateToWidth(e.urlPattern, 20)}`);
      break;
    case "shortcuts_execute":
      if (typeof e.shortcutId === "string")
        r.push(`shortcut_id: ${e.shortcutId}`);
      break;
    case "javascript_tool":
      if (s && typeof e.text === "string") return e.text;
      return "";
    case "tabs_create_mcp":
    case "tabs_context_mcp":
    case "form_input":
    case "shortcuts_list":
    case "read_page":
    case "upload_image":
    case "get_page_text":
    case "update_plan":
      return "";
  }
  return r.join(", ") || null;
}
function getClaudeInChromeMCPToolOverrides(e) {
  return {
    userFacingName(o) {
      return `Claude in Chrome[${e.replace(/_mcp$/, "")}]`;
    },
    renderToolUseMessage(o, { verbose: s }) {
      return c(o, e, s);
    },
    ...uon(e),
  };
}
export { getClaudeInChromeMCPToolOverrides };
