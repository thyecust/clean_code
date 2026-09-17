// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
function t() {
  return process.argv.includes("--agent-teams");
}
function isAgentSwarmsEnabled() {
  if (!a.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS && !t()) return !1;
  if (!H("tengu_amber_flint", !0)) return !1;
  return !0;
}
async function captureTeammateModeSnapshotIfEnabled() {
  if (!isAgentSwarmsEnabled()) return;
  let { captureTeammateModeSnapshot: e } = await import("./chunk-88ybhavr.js");
  e();
}
export { isAgentSwarmsEnabled, captureTeammateModeSnapshotIfEnabled };
