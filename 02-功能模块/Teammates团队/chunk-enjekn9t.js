// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { AGENT_MESSAGE_TAG } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { go, HU } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
var MAIN_CONVERSATION_NAME = "main";
function formatAgentMessage(t, r) {
  return `<${AGENT_MESSAGE_TAG} from="${go(t)}">
${HU(AGENT_MESSAGE_TAG, r)}
</${AGENT_MESSAGE_TAG}>`;
}
var TEAM_LEAD_AGENT_NAME = "team-lead",
  TEAMMATE_NAME_PATTERN = /^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/,
  SWARM_TMUX_SESSION_NAME = "claude-swarm",
  SWARM_TMUX_WINDOW_NAME = "swarm-view",
  TMUX_BINARY = "tmux",
  PANE_PLACEHOLDER_COMMAND = "cat";
function getSwarmTmuxSocketName() {
  return `claude-swarm-${process.pid}`;
}
var TEAMMATE_COMMAND_ENV_VAR = "CLAUDE_CODE_TEAMMATE_COMMAND";
export { MAIN_CONVERSATION_NAME, formatAgentMessage, TEAM_LEAD_AGENT_NAME, TEAMMATE_NAME_PATTERN, SWARM_TMUX_SESSION_NAME, SWARM_TMUX_WINDOW_NAME, TMUX_BINARY, PANE_PLACEHOLDER_COMMAND, getSwarmTmuxSocketName, TEAMMATE_COMMAND_ENV_VAR };
