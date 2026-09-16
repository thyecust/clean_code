// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Me } from "./chunk-0dh9gct8.js";
import { Qt, De, V, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { NEt } from "./chunk-jzy6p47z.js";
F();
var rO = Qt(null),
  qOt = Qt(null),
  zOt = Qt(null);
function b9e() {
  let e = De(zOt);
  if (!e)
    throw ReferenceError(
      "useMcpConnections cannot be called outside of an <AppStateProvider />",
    );
  return e;
}
var VOt = Qt(null);
function l4() {
  let e = De(VOt);
  if (!e)
    throw ReferenceError(
      "useActivePlugins cannot be called outside of an <AppStateProvider />",
    );
  return e;
}
function d_() {
  let e = De(qOt);
  if (!e)
    throw ReferenceError(
      "useAppStateSession cannot be called outside of an <AppStateProvider />",
    );
  return e;
}
function t() {
  let e = De(rO);
  if (!e)
    throw ReferenceError(
      "useAppState/useSetAppState cannot be called outside of an <AppStateProvider />",
    );
  return e;
}
function U(e) {
  let n = t();
  return Me(n, e);
}
function It() {
  return t().setState;
}
function gtn() {
  let e = t();
  return V(() => NEt(e.setState), [e]);
}
function Yn() {
  return t();
}
function Os(e) {
  return Me(De(rO), e);
}
export { rO, qOt, zOt, b9e, VOt, l4, d_, U, It, gtn, Yn, Os };
