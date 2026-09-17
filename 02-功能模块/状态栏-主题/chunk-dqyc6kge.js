// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { mp } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { uo, Hr } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
var t = {
    claudeMd: !0,
    skills: !0,
    workflows: !1,
    plugins: !0,
    pluginMonitors: !1,
    themes: !1,
    hljsLanguages: !0,
    hooks: !0,
    statusLine: !1,
    fileSuggestion: !1,
    mcpAutoDiscovered: !1,
    mcpClaudeAi: !1,
    mcpAgentFrontmatter: !0,
    agents: !0,
    outputStyles: !1,
    lspServers: !0,
    keybindings: !1,
  },
  l = {
    claudeMd: !1,
    skills: !1,
    workflows: !1,
    plugins: !1,
    pluginMonitors: !1,
    themes: !1,
    hljsLanguages: !1,
    hooks: !0,
    statusLine: !0,
    fileSuggestion: !0,
    mcpAutoDiscovered: !1,
    mcpClaudeAi: !1,
    mcpAgentFrontmatter: !1,
    agents: !1,
    outputStyles: !1,
    lspServers: !1,
    keybindings: !1,
  };
function isCustomizationDisabled(e, s) {
  if (Hr() && !l[e]) return !0;
  if (uo() && !s?.explicitlyRequested) return t[e];
  return !1;
}
function isClaudeMdLoadingDisabled() {
  return Boolean(
    a.CLAUDE_CODE_DISABLE_CLAUDE_MDS ||
    isCustomizationDisabled("claudeMd", { explicitlyRequested: mp().length > 0 }),
  );
}
export { isCustomizationDisabled, isClaudeMdLoadingDisabled };
