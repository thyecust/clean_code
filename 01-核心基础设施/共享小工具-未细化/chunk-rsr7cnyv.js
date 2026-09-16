// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { he, Bw, s_e } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { zn } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { AsyncLocalStorage as n } from "async_hooks";
var e = new n();
function yW(t, r) {
  return e.run({ cwd: zn(t) }, r);
}
function Q5(t, r) {
  return yW(t ?? Q(), r);
}
function Qke() {
  return e.getStore() !== void 0;
}
function _Pn(t) {
  let r = e.getStore();
  if (r) r.cwd = zn(t);
  else s_e(t);
}
function yPn() {
  return e.getStore()?.cwd ?? Bw();
}
function Q() {
  try {
    return yPn();
  } catch {
    return he();
  }
}
export { yW, Q5, Qke, _Pn, yPn, Q };
