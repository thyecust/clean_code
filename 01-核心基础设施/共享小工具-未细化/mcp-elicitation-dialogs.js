// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "./lazy-value.js";
import { defineDialog } from "../../02-功能模块/对话框-确认UI/对话框-确认UI.4ggnfbtb.js";
import { X, qd } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var MCP_ELICITATION_DIALOG = defineDialog({
    kind: "mcp_elicitation",
    payload: createLazyValue(() =>
      qd(
        (t) =>
          typeof t === "object" &&
          t !== null &&
          "serverName" in t &&
          "params" in t,
      ),
    ),
    result: createLazyValue(() => qd((t) => typeof t === "object" && t !== null)),
    default: { action: "cancel" },
    holdsTop: !0,
  }),
  MCP_ELICITATION_WAITING_DIALOG = defineDialog({
    kind: "mcp_elicitation_waiting",
    payload: createLazyValue(() =>
      qd(
        (t) =>
          typeof t === "object" &&
          t !== null &&
          "serverName" in t &&
          "params" in t,
      ),
    ),
    result: createLazyValue(() => X(["dismiss", "retry", "cancel", "cancelled"])),
    default: "cancelled",
  });
function isMcpElicitationDialogKind(t) {
  return t === MCP_ELICITATION_DIALOG.kind || t === MCP_ELICITATION_WAITING_DIALOG.kind;
}
export { MCP_ELICITATION_DIALOG, MCP_ELICITATION_WAITING_DIALOG, isMcpElicitationDialogKind };
