// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { isToolResultTruncated } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { formatToolInputMessage } from "../通道集成-Slack/slack-send-tool.js";
import { stripTextBlockMeta } from "./mcp-output-truncation.js";
import { s, Jq, v, c, $e } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var n = "",
  u = "",
  MCP_TOOL_UI_TABLE_KEY = "mcp";
var p = createLazyValue(() => c({}).passthrough()),
  MCP_TOOL_OUTPUT_SCHEMA = createLazyValue(() =>
    $e([s(), v(c({ type: s() }).passthrough()), Jq()]).describe(
      "MCP tool execution result",
    ),
  ),
  MCP_TOOL_BASE = buildTool({
    isMcp: !0,
    isOpenWorld() {
      return !1;
    },
    name: "mcp",
    uiTableKey: MCP_TOOL_UI_TABLE_KEY,
    maxResultSizeChars: 1e5,
    async description() {
      return u;
    },
    async prompt() {
      return n;
    },
    get inputSchema() {
      return p();
    },
    get outputSchema() {
      return MCP_TOOL_OUTPUT_SCHEMA();
    },
    async call() {
      return { data: "" };
    },
    async checkPermissions() {
      return {
        behavior: "passthrough",
        message: "MCPTool requires permission.",
      };
    },
    renderToolUseMessage(e, { verbose: t }) {
      return formatToolInputMessage(e, { verbose: t });
    },
    userFacingName: () => "mcp",
    isResultTruncated(e, t) {
      let o = t?.columns;
      if (typeof e === "string") return isToolResultTruncated(e, o);
      if (Array.isArray(e))
        return e.some((r) => r.type === "text" && isToolResultTruncated(r.text, o));
      return !1;
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return { tool_use_id: t, type: "tool_result", content: stripTextBlockMeta(e) };
    },
  });
export { MCP_TOOL_UI_TABLE_KEY, MCP_TOOL_OUTPUT_SCHEMA, MCP_TOOL_BASE };
