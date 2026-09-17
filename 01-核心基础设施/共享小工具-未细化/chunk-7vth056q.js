// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { McpError } from "../../02-功能模块/MCP客户端/chunk-tv3jbp8f.js";
import { XA } from "../../02-功能模块/认证-OAuth登录/chunk-j990pwax.js";
function nce(r) {
  return (
    r instanceof Error && "code" in r && r.code === "CLAUDEAI_BEARER_REJECTED"
  );
}
function rct(r) {
  if (r instanceof XA) return !0;
  if (nce(r)) return !1;
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
export { nce, rct };
