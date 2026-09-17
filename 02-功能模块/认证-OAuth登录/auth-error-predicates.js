// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { McpError } from "../MCP客户端/chunk-tv3jbp8f.js";
import { UnauthorizedError } from "./oauth-client.js";
function isClaudeAiBearerRejectedError(r) {
  return (
    r instanceof Error && "code" in r && r.code === "CLAUDEAI_BEARER_REJECTED"
  );
}
function isListAuthError(r) {
  if (r instanceof UnauthorizedError) return !0;
  if (isClaudeAiBearerRejectedError(r)) return !1;
  if (r instanceof Error && !(r instanceof McpError) && "code" in r) {
    if (r.code === 403)
      return !r.message.includes("Server returned 403 after trying upscoping");
    if (r.code === 401)
      return !r.message.includes(
        "Server returned 401 after successful authentication",
      );
  }
  return !1;
}
export { isClaudeAiBearerRejectedError, isListAuthError };
