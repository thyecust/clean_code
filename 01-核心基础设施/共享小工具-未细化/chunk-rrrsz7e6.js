// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
function xNe(e, n) {
  return { ...e, endedByModel: n };
}
function Ire(e) {
  return e?.endedByModel;
}
function WSt() {
  return !1;
}
function Dyn() {
  return "";
}
function Mk(e) {
  let n = Dyn();
  return n === "" ? e : `${e} ${n}`;
}
export { xNe, Ire, WSt, Dyn, Mk };
