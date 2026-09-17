// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getInitialSettings } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { isPowerShellToolEnabled, isBashToolAvailable } from "../提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
function getDefaultShell() {
  let e = getInitialSettings().defaultShell;
  if (e === "bash" && !isBashToolAvailable()) return "powershell";
  if (e === "powershell" && !isPowerShellToolEnabled()) return "bash";
  return e ?? (isBashToolAvailable() ? "bash" : "powershell");
}
export { getDefaultShell };
