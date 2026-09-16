// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
var Wjn = "attached:",
  Tce = "created:";
function SPe(t) {
  return t.startsWith("created:");
}
var $ee = "opened:";
function nbe(t) {
  return (
    t.startsWith("attached:") || t.startsWith("created:") || t.startsWith($ee)
  );
}
function Dv(t) {
  return Object.entries(t).filter(([e]) => !e.startsWith($ee));
}
export { Wjn, Tce, SPe, $ee, nbe, Dv };
