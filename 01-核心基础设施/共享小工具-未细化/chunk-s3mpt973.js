// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { m } from "./chunk-78nzsrc6.js";
import { Tt } from "../../02-功能模块/权限系统/chunk-qdy0h5k2.js";
import { _k } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { gLt } from "./chunk-pvfkaage.js";
import { P4 } from "./chunk-xvyb4e66.js";
import { s, Jq, v, c, $e } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var n = "",
  u = "",
  fLt = "mcp";
var p = m(() => c({}).passthrough()),
  Crn = m(() =>
    $e([s(), v(c({ type: s() }).passthrough()), Jq()]).describe(
      "MCP tool execution result",
    ),
  ),
  H4 = Tt({
    isMcp: !0,
    isOpenWorld() {
      return !1;
    },
    name: "mcp",
    uiTableKey: fLt,
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
      return Crn();
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
      return gLt(e, { verbose: t });
    },
    userFacingName: () => "mcp",
    isResultTruncated(e, t) {
      let o = t?.columns;
      if (typeof e === "string") return _k(e, o);
      if (Array.isArray(e))
        return e.some((r) => r.type === "text" && _k(r.text, o));
      return !1;
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return { tool_use_id: t, type: "tool_result", content: P4(e) };
    },
  });
export { fLt, Crn, H4 };
