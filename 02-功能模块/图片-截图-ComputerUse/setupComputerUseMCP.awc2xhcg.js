// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 75 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { s0, UCt } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { rc } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { WSe } from "./chunk-6842b6x1.js";
import { GSe } from "../../01-核心基础设施/共享小工具-未细化/chunk-4p4f6hsz.js";
function c() {
  let o = WSe(UCt, GSe()).map((e) => rc(s0, e.name));
  return {
    mcpConfig: {
      [s0]: {
        type: "stdio",
        command: process.execPath,
        args: ["--computer-use-mcp"],
        scope: "dynamic",
      },
    },
    allowedTools: o,
  };
}
export { c as setupComputerUseMCP };
