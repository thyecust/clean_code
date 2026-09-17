// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { oYt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
var AGENT_COLOR_THEME_KEYS = {
    red: "red_FOR_SUBAGENTS_ONLY",
    blue: "blue_FOR_SUBAGENTS_ONLY",
    green: "green_FOR_SUBAGENTS_ONLY",
    yellow: "yellow_FOR_SUBAGENTS_ONLY",
    purple: "purple_FOR_SUBAGENTS_ONLY",
    orange: "orange_FOR_SUBAGENTS_ONLY",
    pink: "pink_FOR_SUBAGENTS_ONLY",
    cyan: "cyan_FOR_SUBAGENTS_ONLY",
  },
  AGENT_COLOR_NAMES = Object.keys(AGENT_COLOR_THEME_KEYS);
function isAgentColorName(e) {
  return e !== void 0 && AGENT_COLOR_NAMES.includes(e);
}
function resolveAgentColorName(e) {
  return e.userOverride ?? e.agentDefinitionColor;
}
function getAgentTypeColorThemeKey(e) {
  if (e === "general-purpose") return;
  let n = oYt().get(e);
  if (n && AGENT_COLOR_NAMES.includes(n)) return AGENT_COLOR_THEME_KEYS[n];
  return;
}
function setAgentTypeColorOverride(e, o) {
  let n = oYt();
  if (!o) {
    n.delete(e);
    return;
  }
  if (AGENT_COLOR_NAMES.includes(o)) n.set(e, o);
}
export { AGENT_COLOR_THEME_KEYS, AGENT_COLOR_NAMES, isAgentColorName, resolveAgentColorName, getAgentTypeColorThemeKey, setAgentTypeColorOverride };
