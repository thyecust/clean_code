// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 76 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { qn } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
var t =
    "Auto mode lets Claude handle permission prompts automatically \u2014 Claude checks each tool call for risky actions and prompt injection before executing. Actions Claude identifies as safe are executed, while actions Claude identifies as risky are blocked and Claude may try a different approach. Ideal for long-running tasks.",
  n = "Sessions are slightly more expensive.",
  o =
    "Claude can make mistakes that allow harmful commands to run, it's recommended to only use in isolated environments. Shift+Tab to change mode.",
  a = `${t} ${n} ${o}`,
  s = `${t} ${o}`;
function r() {
  let e = qn();
  return e === "pro" || e === "max" || e === "team" ? s : a;
}
export { r as getAutoModeDescription };
