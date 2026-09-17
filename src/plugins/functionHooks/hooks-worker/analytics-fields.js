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
function S(n) {
  return r(n);
}
function u(n) {
  return r(n);
}
function we(n) {
  return n == null ? void 0 : r(n);
}
function Yr(n) {
  return r(String(n));
}
function KP(n) {
  return n == null ? void 0 : r(String(n));
}
function _y(...n) {
  return r(n.join(""));
}
function jHt(n) {
  return r(n.join(","));
}
function Ga(n) {
  return r([...n].sort().join(","));
}
function W0(n, t) {
  return r(n.join(t ?? ","));
}
function Ln(n) {
  return r(n);
}
function Gf(n, t) {
  return t ? Ln(n) : void 0;
}
function Mz(n, t) {
  return t ? Ln(n) : S("custom");
}
function WYt(n, t) {
  return t ? Ln(n) : S("third-party");
}
export { S, u, we, Yr, KP, _y, jHt, Ga, W0, Ln, Gf, Mz, WYt };
