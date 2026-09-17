// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 75 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { COMPUTER_USE_MCP_SERVER_NAME, DEFAULT_COMPUTER_USE_CAPABILITIES } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { buildMcpToolName } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { buildComputerUseToolDefinitions } from "./computer-use-tool-definitions.js";
import { getFrozenCoordinateMode } from "./computer-use-config.js";
function setupComputerUseMCP() {
  let o = buildComputerUseToolDefinitions(DEFAULT_COMPUTER_USE_CAPABILITIES, getFrozenCoordinateMode()).map((e) => buildMcpToolName(COMPUTER_USE_MCP_SERVER_NAME, e.name));
  return {
    mcpConfig: {
      [COMPUTER_USE_MCP_SERVER_NAME]: {
        type: "stdio",
        command: process.execPath,
        args: ["--computer-use-mcp"],
        scope: "dynamic",
      },
    },
    allowedTools: o,
  };
}
export { setupComputerUseMCP };
