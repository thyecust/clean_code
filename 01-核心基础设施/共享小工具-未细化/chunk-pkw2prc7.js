// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Gt, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
var U7 = "continue";
function P3n(t, e, n) {
  if (n && e === U7 && t === U7 + "/") return "/";
  if (
    e.startsWith("/") &&
    t.length === U7.length + e.length + 1 &&
    t.startsWith(U7 + e)
  )
    return t.slice(U7.length);
  return t;
}
class o {
  lastResult = null;
  listeners = new Set();
  inFlight = null;
}
var l = new Gt(() => new o());
function i() {
  return l.of(B());
}
function BFt(t) {
  let e = i();
  e.lastResult = t;
  for (let n of e.listeners) n(t);
}
function O3n() {
  return i().inFlight;
}
function Tln(t) {
  i().inFlight = t;
}
function D3n() {
  (BFt(null), (i().inFlight = null));
}
function Eln() {
  let [t, e] = d(() => i().lastResult);
  return (
    E(() => {
      let n = i();
      return (
        e(n.lastResult),
        n.listeners.add(e),
        () => {
          n.listeners.delete(e);
        }
      );
    }, []),
    t
  );
}
export { U7, P3n, BFt, O3n, Tln, D3n, Eln };
