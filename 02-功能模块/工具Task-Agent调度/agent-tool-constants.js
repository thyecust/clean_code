// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
var AGENT_TOOL_NAME = "Agent",
  AGENT_TOOL_DESCRIPTION = "Launch a new agent to handle complex, multi-step tasks",
  AGENT_PROMPT_PARAM_DESCRIPTION = "The task for the agent to perform",
  AGENT_DESCRIPTION_PARAM_DESCRIPTION = "A short (3-5 word) description of the task",
  FORK_AGENT_TYPE = "fork",
  FORK_BUILTIN_AGENT_ID = "agent:builtin:fork",
  TASK_TOOL_NAME = "Task",
  l4t = 1e5,
  c4t = new Set(["Explore", "Plan"]),
  AGENT_STOPPED_NOTE_PREFIX = "NOTE: this agent stopped at its ",
  u4t =
    "subagent_type is required: the general-purpose agent is not available in this session";
export { AGENT_TOOL_NAME, AGENT_TOOL_DESCRIPTION, AGENT_PROMPT_PARAM_DESCRIPTION, AGENT_DESCRIPTION_PARAM_DESCRIPTION, FORK_AGENT_TYPE, FORK_BUILTIN_AGENT_ID, TASK_TOOL_NAME, l4t, c4t, AGENT_STOPPED_NOTE_PREFIX, u4t };
