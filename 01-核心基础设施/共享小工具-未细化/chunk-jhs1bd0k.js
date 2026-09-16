// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { jt } from "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
var s = null;
function D6n(e) {
  let n = s;
  return ((s = e), n);
}
function Cdt() {
  return s;
}
var r = null;
function L6n(e) {
  let n = r;
  return ((r = e), n);
}
async function TF(e) {
  return (await r?.(e)) ?? !1;
}
class Qee extends Error {
  consent;
  constructor(e) {
    super("first-party design MCP server requires consent");
    this.consent = e;
    this.name = "FirstPartyDesignNeedsConsentError";
  }
}
var t = null;
function M6n(e) {
  let n = t;
  return ((t = e), n);
}
function Pce() {
  return t;
}
function vdt(e) {
  let n = jt();
  if (n.scopeExpansionDisclosed) return;
  ((n.scopeExpansionDisclosed = !0), (n.pendingScopeExpansionNotice = e));
}
function Usn() {
  let e = jt(),
    n = e.pendingScopeExpansionNotice;
  return ((e.pendingScopeExpansionNotice = void 0), n);
}
function N6n() {
  let e = Usn();
  if (e)
    process.stderr.write(`${e}
`);
}
export { D6n, Cdt, L6n, TF, Qee, M6n, Pce, vdt, Usn, N6n };
