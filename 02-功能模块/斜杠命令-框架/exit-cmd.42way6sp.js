// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 211 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { isBgSession } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { IF, due } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { handlePromptInputExit } from "../../01-核心基础设施/核心工具-进程与信号/session-relaunch.js";
async function a(t, e) {
  if (isBgSession())
    return {
      type: "text",
      value: "Session keeps running. Use /stop to end it.",
    };
  return (
    await handlePromptInputExit(IF(e), { responseStreaming: due(e) }, e.storageV5),
    { type: "skip" }
  );
}
export { a as call };
