// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getMcpClientState } from "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
var s = null;
function registerDesignAuthResolver(e) {
  let n = s;
  return ((s = e), n);
}
function getDesignAuthResolver() {
  return s;
}
var r = null;
function registerFirstPartyDesignAuthChecker(e) {
  let n = r;
  return ((r = e), n);
}
async function hasFirstPartyDesignAuth(e) {
  return (await r?.(e)) ?? !1;
}
class FirstPartyDesignNeedsConsentError extends Error {
  consent;
  constructor(e) {
    super("first-party design MCP server requires consent");
    this.consent = e;
    this.name = "FirstPartyDesignNeedsConsentError";
  }
}
var t = null;
function registerDesignConsentProvider(e) {
  let n = t;
  return ((t = e), n);
}
function getDesignConsentProvider() {
  return t;
}
function setPendingScopeExpansionNotice(e) {
  let n = getMcpClientState();
  if (n.scopeExpansionDisclosed) return;
  ((n.scopeExpansionDisclosed = !0), (n.pendingScopeExpansionNotice = e));
}
function takePendingScopeExpansionNotice() {
  let e = getMcpClientState(),
    n = e.pendingScopeExpansionNotice;
  return ((e.pendingScopeExpansionNotice = void 0), n);
}
function flushPendingScopeExpansionNotice() {
  let e = takePendingScopeExpansionNotice();
  if (e)
    process.stderr.write(`${e}
`);
}
export { registerDesignAuthResolver, getDesignAuthResolver, registerFirstPartyDesignAuthChecker, hasFirstPartyDesignAuth, FirstPartyDesignNeedsConsentError, registerDesignConsentProvider, getDesignConsentProvider, setPendingScopeExpansionNotice, takePendingScopeExpansionNotice, flushPendingScopeExpansionNotice };
