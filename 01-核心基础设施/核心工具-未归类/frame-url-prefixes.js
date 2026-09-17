// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
var ATTACHED_FRAME_URL_PREFIX = "attached:",
  CREATED_FRAME_URL_PREFIX = "created:";
function isCreatedFrameKey(t) {
  return t.startsWith("created:");
}
var OPENED_FRAME_URL_PREFIX = "opened:";
function hasFrameUrlPrefix(t) {
  return (
    t.startsWith("attached:") || t.startsWith("created:") || t.startsWith(OPENED_FRAME_URL_PREFIX)
  );
}
function getNonOpenedFrameUrlEntries(t) {
  return Object.entries(t).filter(([e]) => !e.startsWith(OPENED_FRAME_URL_PREFIX));
}
export { ATTACHED_FRAME_URL_PREFIX, CREATED_FRAME_URL_PREFIX, isCreatedFrameKey, OPENED_FRAME_URL_PREFIX, hasFrameUrlPrefix, getNonOpenedFrameUrlEntries };
