// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { SEND_MESSAGE_TOOL_NAME } from "../../01-核心基础设施/核心工具-未归类/send-message-constants.js";
var LIST_AGENTS_TOOL_NAME = "ListAgents",
  LIST_AGENTS_TOOL_ALIAS = "ListPeers";
function e() {
  return "";
}
var s = `Lists agents you can ${SEND_MESSAGE_TOOL_NAME} to \u2014 in-process subagents you spawned, the teammates on your team, other local Claude sessions on this machine, your Claude sessions running in the cloud (when this session has cloud access; a cloud session receives your message but cannot message any session back yet \u2014 do not ask it to reply, read its answer in its own transcript), and (when Remote Control is connected here) your account's other sessions \u2014 Remote Control sessions on other machines and cloud sessions, each row labeled by kind. Names are the address: send with \`${SEND_MESSAGE_TOOL_NAME}({to: "<name>", message: "..."})\`, copying the name exactly as a row prints it. Append a row's \` [ref]\` only when the bare name is not enough \u2014 two rows share it, or an error asks you to disambiguate.`;
function getListAgentsToolDescription() {
  return s + e();
}
export { LIST_AGENTS_TOOL_NAME, LIST_AGENTS_TOOL_ALIAS, getListAgentsToolDescription };
