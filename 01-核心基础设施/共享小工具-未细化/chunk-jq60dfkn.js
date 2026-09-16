// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { m } from "./chunk-78nzsrc6.js";
import { Kr } from "../../02-功能模块/对话框-确认UI/对话框-确认UI.4ggnfbtb.js";
import { X, qd } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var a2 = Kr({
    kind: "mcp_elicitation",
    payload: m(() =>
      qd(
        (t) =>
          typeof t === "object" &&
          t !== null &&
          "serverName" in t &&
          "params" in t,
      ),
    ),
    result: m(() => qd((t) => typeof t === "object" && t !== null)),
    default: { action: "cancel" },
    holdsTop: !0,
  }),
  h9 = Kr({
    kind: "mcp_elicitation_waiting",
    payload: m(() =>
      qd(
        (t) =>
          typeof t === "object" &&
          t !== null &&
          "serverName" in t &&
          "params" in t,
      ),
    ),
    result: m(() => X(["dismiss", "retry", "cancel", "cancelled"])),
    default: "cancelled",
  });
function Lrn(t) {
  return t === a2.kind || t === h9.kind;
}
export { a2, h9, Lrn };
