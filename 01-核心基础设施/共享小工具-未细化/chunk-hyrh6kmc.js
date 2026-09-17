// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ze, ld, Nn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isBgSession, isClaudeAISubscriber, getOauthAccountInfo, getSubscriptionType, getRateLimitTier } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isFirstPartyApiBackend } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { BS } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { iLt } from "../../02-功能模块/AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import { randomUUID } from "crypto";
var o =
  "You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";
function rnn() {
  return (
    isClaudeAISubscriber() &&
    getOauthAccountInfo()?.billingType !== "usage_based" &&
    isFirstPartyApiBackend() &&
    ld() &&
    !Nn() &&
    !isBgSession()
  );
}
function Mle(e) {
  return rnn() && iLt(e) && e.rateLimitType === "five_hour";
}
function rlt() {
  switch (getSubscriptionType()) {
    case "pro":
      return "pro";
    case "max":
      switch (getRateLimitTier()) {
        case "default_claude_max_5x":
          return "max_5x";
        case "default_claude_max_20x":
          return "max_20x";
        default:
          return "max_other";
      }
    default:
      return "other";
  }
}
function V9e() {
  BS({
    agentId: ze(),
    mode: "prompt",
    priority: "later",
    value: o,
    uuid: randomUUID(),
    origin: { kind: "auto-continuation" },
    isMeta: !0,
    skipSlashCommands: !0,
  });
}
export { rnn, Mle, rlt, V9e };
