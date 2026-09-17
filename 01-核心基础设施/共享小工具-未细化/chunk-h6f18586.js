// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { normalizeMcpName } from "./mcp-name-normalization.js";
var CLAUDE_IN_CHROME_MCP_SERVER_NAME = "claude-in-chrome",
  f5t = "javascript_tool";
function isClaudeInChromeMCPServer(e) {
  return normalizeMcpName(e) === CLAUDE_IN_CHROME_MCP_SERVER_NAME;
}
var t = "--claude-in-chrome-mcp";
function isClaudeInChromeMcpLaunch(e) {
  if (e.type !== void 0 && e.type !== "stdio") return !1;
  return (
    (e.command?.includes(t) ?? !1) || (e.args?.some((r) => r.includes(t)) ?? !1)
  );
}
var eir = ["file_upload", "browser_batch"],
  tir = [
    f5t,
    "read_page",
    "find",
    "form_input",
    "computer",
    "browser_batch",
    "navigate",
    "resize_window",
    "gif_creator",
    "upload_image",
    "get_page_text",
    "tabs_context_mcp",
    "tabs_create_mcp",
    "tabs_close_mcp",
    "read_console_messages",
    "read_network_requests",
    "shortcuts_list",
    "shortcuts_execute",
    "file_upload",
    "switch_browser",
    "list_connected_browsers",
    "select_browser",
  ];
export { CLAUDE_IN_CHROME_MCP_SERVER_NAME, f5t, isClaudeInChromeMCPServer, isClaudeInChromeMcpLaunch, eir, tir };
