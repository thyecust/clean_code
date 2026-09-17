// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
function buildDraftText(t, r) {
  switch (r) {
    case "bash":
      return `!${t}`;
    default:
      return t;
  }
}
function getDraftMode(t) {
  if (t.startsWith("!")) return "bash";
  return "prompt";
}
function getDraftValue(t) {
  if (getDraftMode(t) === "prompt") return t;
  return t.slice(1);
}
function isBashModeShortcut(t) {
  return t === "!";
}
export { buildDraftText, getDraftMode, getDraftValue, isBashModeShortcut };
