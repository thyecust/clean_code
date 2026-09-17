// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ao, So, Cy, Ki, zA } from "../../02-功能模块/MCP客户端/chunk-78r8f7dw.js";
function isClaudeAiBearerRejectedError(r) {
  return (
    r instanceof Error && "code" in r && r.code === "CLAUDEAI_BEARER_REJECTED"
  );
}
function isListAuthError(r) {
  if (r instanceof zA) return !0;
  if (isClaudeAiBearerRejectedError(r)) return !1;
  if (r instanceof Cy && (r.status === 403 || r.status === 401))
    return (
      r.code !== ao.ClientHttpAuthentication &&
      r.code !== ao.ClientHttpForbidden
    );
  if (
    r instanceof Error &&
    !(r instanceof Ki) &&
    !(r instanceof So) &&
    "code" in r &&
    (r.code === 403 || r.code === 401)
  )
    return !0;
  return !1;
}
export { isClaudeAiBearerRejectedError, isListAuthError };
