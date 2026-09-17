// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { sanitizeSingleLineDisplayText } from "../键位绑定-Keybindings/键位绑定-Keybindings.sanfja6a.js";
import { generateTaskId, createPendingTask } from "../Teammates团队/chunk-mrfx53ye.js";
function formatMcpServerToolLabel(t, r) {
  return `${sanitizeSingleLineDisplayText(t) ?? ""}/${sanitizeSingleLineDisplayText(r) ?? ""}`;
}
function createMcpTaskRecord({
  serverName: t,
  toolName: r,
  mcpTaskId: s,
  toolUseId: o,
  pollIntervalMs: n,
  abortController: a,
  protocol: i,
  driveAbortController: p,
  ttlExpiresAt: l,
}) {
  let e = generateTaskId("mcp_task");
  return {
    ...createPendingTask(e, "mcp_task", formatMcpServerToolLabel(t, r), o),
    type: "mcp_task",
    status: "running",
    serverName: t,
    toolName: r,
    mcpTaskId: s ?? e,
    mcpStatus: "working",
    pollIntervalMs: n,
    abortController: a,
    protocol: i,
    driveAbortController: p,
    ttlExpiresAt: l,
  };
}
export { formatMcpServerToolLabel, createMcpTaskRecord };
