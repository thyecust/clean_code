// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getCanonicalHostname, isGitHubHost, hasBackslashInUrlAuthority } from "./git-host-utils.js";
function stripPort(r) {
  return r.replace(/:\d+$/, "");
}
var i = "gitlab.com",
  e = "bitbucket.org",
  o = {
    "ssh.github.com": "github",
    "altssh.gitlab.com": "gitlab",
    "altssh.bitbucket.org": "bitbucket",
  };
function getGitProvider(r) {
  if (((r = stripPort(r)), isGitHubHost(r))) return "github";
  let t = getCanonicalHostname(r),
    n = o[t];
  if (n) return n;
  if (t === i) return "gitlab";
  if (t === e) return "bitbucket";
  return "other";
}
function parseRemoteHostname(r) {
  let t = r.trim();
  if (hasBackslashInUrlAuthority(t)) return null;
  if (t.includes("://"))
    try {
      return new URL(t).hostname || null;
    } catch {
      return null;
    }
  return /^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1] ?? null;
}
function parseScpRemoteUrl(r) {
  let t = /^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);
  return t ? { user: t[1], host: t[2], path: t[3] } : null;
}
export { stripPort, getGitProvider, parseRemoteHostname, parseScpRemoteUrl };
