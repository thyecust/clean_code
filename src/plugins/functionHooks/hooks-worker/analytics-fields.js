// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
function r(n) {
  return n;
}
function fromLiteral(n) {
  return r(n);
}
function fromEnum(n) {
  return r(n);
}
function fromEnumOpt(n) {
  return n == null ? void 0 : r(n);
}
function fromNumber(n) {
  return r(String(n));
}
function fromNumberOpt(n) {
  return n == null ? void 0 : r(String(n));
}
function concatSafe(...n) {
  return r(n.join(""));
}
function fromNumberArr(n) {
  return r(n.join(","));
}
function fromEnumArr(n) {
  return r([...n].sort().join(","));
}
function joinSafe(n, t) {
  return r(n.join(t ?? ","));
}
function fromSanitizer(n) {
  return r(n);
}
function mcpNameForAnalytics(n, t) {
  return t ? fromSanitizer(n) : void 0;
}
function agentTypeForAnalytics(n, t) {
  return t ? fromSanitizer(n) : fromLiteral("custom");
}
function pluginIdForAnalytics(n, t) {
  return t ? fromSanitizer(n) : fromLiteral("third-party");
}
export { fromLiteral, fromEnum, fromEnumOpt, fromNumber, fromNumberOpt, concatSafe, fromNumberArr, fromEnumArr, joinSafe, fromSanitizer, mcpNameForAnalytics, agentTypeForAnalytics, pluginIdForAnalytics };
