// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Gt, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { E, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
F();
var AUTO_CONTINUE_PREFILL_TEXT = "continue";
function stripAutoContinuePrefill(t, e, n) {
  if (n && e === AUTO_CONTINUE_PREFILL_TEXT && t === AUTO_CONTINUE_PREFILL_TEXT + "/") return "/";
  if (
    e.startsWith("/") &&
    t.length === AUTO_CONTINUE_PREFILL_TEXT.length + e.length + 1 &&
    t.startsWith(AUTO_CONTINUE_PREFILL_TEXT + e)
  )
    return t.slice(AUTO_CONTINUE_PREFILL_TEXT.length);
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
function publishRateLimitCheckpointResult(t) {
  let e = i();
  e.lastResult = t;
  for (let n of e.listeners) n(t);
}
function getInFlightRateLimitCheckpoint() {
  return i().inFlight;
}
function setInFlightRateLimitCheckpoint(t) {
  i().inFlight = t;
}
function resetRateLimitCheckpoint() {
  (publishRateLimitCheckpointResult(null), (i().inFlight = null));
}
function useRateLimitCheckpointResult() {
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
export { AUTO_CONTINUE_PREFILL_TEXT, stripAutoContinuePrefill, publishRateLimitCheckpointResult, getInFlightRateLimitCheckpoint, setInFlightRateLimitCheckpoint, resetRateLimitCheckpoint, useRateLimitCheckpointResult };
