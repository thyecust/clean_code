// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Xa } from "./chunk-jzy6p47z.js";
import { Gt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
function o() {
  return Xa({
    value: "",
    active: !1,
    launchWarning: null,
    vimMode: "INSERT",
    stash: null,
  });
}
var r = new Gt(() => o());
function _M(n) {
  return r.of(n);
}
function x3n(n) {
  return _M(n).getState().value;
}
function tue(n, e) {
  n.setState((t) => {
    if (t.value === e) return t;
    if (t.launchWarning !== null && t.value !== "" && e === "")
      return { ...t, value: e, launchWarning: null };
    return { ...t, value: e };
  });
}
function mln(n, e) {
  n.setState((t) => (t.stash === e ? t : { ...t, stash: e }));
}
function ift(n, e) {
  n.setState((t) => (t.active === e ? t : { ...t, active: e }));
}
function MFt(n, e) {
  ift(_M(n), e);
}
function Oze(n, e) {
  _M(n).setState((t) => (t.vimMode === e ? t : { ...t, vimMode: e }));
}
function gln(n, e) {
  n.setState((t) =>
    t.launchWarning?.type === e.type &&
    t.launchWarning.prefillLength === e.prefillLength
      ? t
      : { ...t, launchWarning: e },
  );
}
function hln(n, e) {
  gln(_M(n), e);
}
export { _M, x3n, tue, mln, ift, MFt, Oze, gln, hln };
