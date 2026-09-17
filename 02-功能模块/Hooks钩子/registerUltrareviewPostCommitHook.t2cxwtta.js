// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 78 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ke, wB } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { BASH_TOOL_NAME, POWERSHELL_TOOL_NAME } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getUltrareviewPostCommitTip } from "../代码审查/ultrareview-tips.js";
import { isGitCommitCommand, looksLikeGitCommitOutput } from "../../01-核心基础设施/共享小工具-未细化/git-commit-detection.js";
async function m(o, a, l, u, s) {
  if (o.hook_event_name !== "PostToolUse") return {};
  if (ke() || o.agent_id !== void 0) return {};
  let e = o.tool_input?.command;
  if (typeof e !== "string" || !isGitCommitCommand(e)) return {};
  let t = o.tool_response,
    r = typeof t?.stdout === "string" ? t.stdout : "",
    i = typeof t?.stderr === "string" ? t.stderr : "";
  if (!looksLikeGitCommitOutput(r, i, void 0)) return {};
  let n = getUltrareviewPostCommitTip(s?.storageV5);
  return n !== null ? { systemMessage: n } : {};
}
function registerUltrareviewPostCommitHook() {
  let o = { type: "callback", callback: m, timeout: 1, internal: !0 };
  wB({ PostToolUse: [{ matcher: `${BASH_TOOL_NAME}|${POWERSHELL_TOOL_NAME}`, hooks: [o] }] });
}
export { registerUltrareviewPostCommitHook };
