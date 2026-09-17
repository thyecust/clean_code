// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { he, Bw, s_e } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { zn } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { AsyncLocalStorage } from "async_hooks";
var e = new AsyncLocalStorage();
function runWithCwd(t, r) {
  return e.run({ cwd: zn(t) }, r);
}
function runWithCwdOrDefault(t, r) {
  return runWithCwd(t ?? getCwd(), r);
}
function hasCwdContext() {
  return e.getStore() !== void 0;
}
function setContextCwd(t) {
  let r = e.getStore();
  if (r) r.cwd = zn(t);
  else s_e(t);
}
function getContextCwd() {
  return e.getStore()?.cwd ?? Bw();
}
function getCwd() {
  try {
    return getContextCwd();
  } catch {
    return he();
  }
}
export { runWithCwd, runWithCwdOrDefault, hasCwdContext, setContextCwd, getContextCwd, getCwd };
