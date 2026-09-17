// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "./lazy-value.js";
import { xr } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { s, se, v, c, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var RESUMED_AGENT_REPORT_OMITTED_MESSAGE = "Resumed agent. Its final report is not in this message.",
  RESUMED_AGENT_REPORT_FOLLOWS_JSON_MESSAGE =
    "Resumed agent. Its final report follows this JSON, framed by the harness.";
function formatResumedAgentResult({ displayName: e, content: n }) {
  return `Resumed agent ${e}. Result:

${
  xr(
    n,
    `
`,
  ) || "(no text output)"
}`;
}
var getHandbackPayloadSchema = createLazyValue(() =>
  c({
    message: s().optional(),
    display: s().optional(),
    inlineHandback: c({
      displayName: s(),
      content: v(c({ type: k("text"), text: s() })),
    })
      .optional()
      .catch(void 0),
    routing: se().optional(),
    request_id: se().optional(),
    target: se().optional(),
  }),
);
function getHandbackDisplayText(e) {
  if (e.routing) return;
  if (e.request_id !== void 0 && e.target !== void 0) return;
  return e.display ?? (e.inlineHandback ? formatResumedAgentResult(e.inlineHandback) : e.message);
}
function parseHandbackDisplayText(e) {
  let n = getHandbackPayloadSchema().safeParse(e);
  return n.success ? (getHandbackDisplayText(n.data) ?? "") : "";
}
export { RESUMED_AGENT_REPORT_OMITTED_MESSAGE, RESUMED_AGENT_REPORT_FOLLOWS_JSON_MESSAGE, formatResumedAgentResult, getHandbackPayloadSchema, getHandbackDisplayText, parseHandbackDisplayText };
