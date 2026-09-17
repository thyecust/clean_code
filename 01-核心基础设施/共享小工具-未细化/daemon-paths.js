// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getClaudeConfigDir } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { join as o } from "path";
function getDaemonJsonPath() {
  return o(getClaudeConfigDir(), "daemon.json");
}
function getDaemonLogPath() {
  return o(getClaudeConfigDir(), "daemon.log");
}
export { getDaemonJsonPath, getDaemonLogPath };
