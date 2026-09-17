// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
var MCP_SKILLS_EXTENSION_ID = "io.modelcontextprotocol/skills";
function isMcpSkillsEnabled() {
  return H("tengu_mcp_skills", !1);
}
function isMcpSkillsCapable(e) {
  return isMcpSkillsEnabled() && !!e?.resources && declaresMcpSkillsExtension(e);
}
function declaresMcpSkillsExtension(e) {
  return e?.extensions?.[MCP_SKILLS_EXTENSION_ID] !== void 0;
}
export { MCP_SKILLS_EXTENSION_ID, isMcpSkillsEnabled, isMcpSkillsCapable, declaresMcpSkillsExtension };
