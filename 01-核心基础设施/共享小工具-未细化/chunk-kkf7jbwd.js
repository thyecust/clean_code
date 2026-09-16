// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Dnt, Do, Jie } from "./chunk-z5tdbda7.js";
function Fke(r) {
  return r.replace(/:\d+$/, "");
}
var i = "gitlab.com",
  e = "bitbucket.org",
  o = {
    "ssh.github.com": "github",
    "altssh.gitlab.com": "gitlab",
    "altssh.bitbucket.org": "bitbucket",
  };
function av(r) {
  if (((r = Fke(r)), Do(r))) return "github";
  let t = Dnt(r),
    n = o[t];
  if (n) return n;
  if (t === i) return "gitlab";
  if (t === e) return "bitbucket";
  return "other";
}
function $ke(r) {
  let t = r.trim();
  if (Jie(t)) return null;
  if (t.includes("://"))
    try {
      return new URL(t).hostname || null;
    } catch {
      return null;
    }
  return /^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1] ?? null;
}
function RIn(r) {
  let t = /^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);
  return t ? { user: t[1], host: t[2], path: t[3] } : null;
}
export { Fke, av, $ke, RIn };
