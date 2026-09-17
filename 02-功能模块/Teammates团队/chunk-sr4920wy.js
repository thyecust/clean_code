// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { _U, uf, ZQe, qCt, yr, jD, tZe, eRn } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getPeerBridgeIdentity } from "../权限系统/chunk-1y2g140m.js";
import { pK } from "../../01-核心基础设施/共享小工具-未细化/chunk-f1stkzph.js";
import { cp } from "./chunk-enjekn9t.js";
var tdt =
    "target is this session itself \u2014 there is no one else to send to",
  u = `address the main conversation as "${cp}"`;
function bPe(e) {
  let { ownMessagingSocket: s } = import.meta.require("../跨会话消息(UDS)/chunk-ddtmwhn7.js"),
    n = s();
  return n !== void 0 && ZQe(e, n);
}
function Uee(e) {
  let { ownMessagingSocket: s } = import.meta.require("../跨会话消息(UDS)/chunk-ddtmwhn7.js"),
    n = s();
  return n !== void 0 && qCt(e, n);
}
function d(e) {
  let { ownMessagingSocket: s } = import.meta.require("../跨会话消息(UDS)/chunk-ddtmwhn7.js"),
    n = s(),
    t = jD(e);
  return n !== void 0 && t !== null && eRn(t.ref, "session", n);
}
function qGe(e, s) {
  return d(e) && !bPe(s);
}
function zGe(e) {
  return `'${e}' is the name-and-ref token this session advertises for ITSELF, yet a different session record on this machine claims it \u2014 not sent. A record impersonating this session is suspicious: ask the user. (If you meant yourself, there is no one to send to.)`;
}
function Kjn(e) {
  return `Not sent \u2014 '${e}' is this session's own name and ref, but another session record on this machine claims it.`;
}
function Ace(e) {
  return `'${e}' is this session's own address \u2014 a message or file sent there would only come back to this conversation; there is no one else at that address to send to.`;
}
function f2(e) {
  let s = sessionIdBody(e);
  return [getPeerBridgeIdentity()?.bridgeSessionId, pK()].some(
    (n) => typeof n === "string" && sessionIdBody(n) === s,
  );
}
function Yb(e) {
  return (
    e.teammateContext !== void 0 ||
    (e.agentContext !== void 0 && _U(e.agentContext))
  );
}
function obe(e) {
  return `Not sent \u2014 '${e}' is this session's own name.`;
}
function wPe(e, s, n = u) {
  let { getRegisteredSessionName: t } = import.meta.require(
      "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js",
    ),
    o = tZe(t()?.name),
    i = o === null ? "this session" : `this session ("${o}")`;
  return s
    ? `
('${e}' also addresses ${i} \u2014 this process's main session; to reach the main conversation from inside it, ${n}.)`
    : `
('${e}' also addresses ${i} itself \u2014 if you meant yourself, there is no one to send to.)`;
}
function TPe(e) {
  return (
    !e.cloudUnavailable &&
    !e.bridgeUnavailable &&
    !e.localUnavailable &&
    !e.searchTruncated &&
    !e.pinnedIdentityClaimedLocally
  );
}
function EPe(e) {
  let { getRegisteredSessionName: s, getHeldSessionNames: n } =
      import.meta.require("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
    { ownMessagingSocket: t } = import.meta.require("../跨会话消息(UDS)/chunk-ddtmwhn7.js"),
    o = s(),
    i = t();
  if (o === void 0 || i === void 0 || uf(e).scheme !== "other") return "no";
  let r = jD(e);
  if (r !== null) {
    let a = yr(r.name);
    if (!eRn(r.ref, "session", i)) return "no";
    if (a !== yr(o.name)) {
      let c = n().get(a);
      if (c === void 0) return "no";
      return c === "derived" ? "categorical" : "note";
    }
  } else if (yr(e) !== yr(o.name)) return "no";
  let { getSessionNamingState: l } = import.meta.require("../跨会话消息(UDS)/chunk-9kzxq41e.js");
  return o.source === "derived" ||
    ((o.source === "user" || o.source === "collision") &&
      l().userTypedName === o.name)
    ? "categorical"
    : "note";
}
function SF(e, s, n = u) {
  let { getRegisteredSessionName: t } = import.meta.require(
      "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js",
    ),
    o = tZe(t()?.name);
  if (s) {
    let i = o !== null ? ` ("${o}" is the name OTHER sessions use for it)` : "";
    return `'${e}' is this process's own main session${i} \u2014 from inside it, ${n} instead.`;
  }
  return o !== null
    ? `'${e}' is this session itself \u2014 "${o}" is the name other sessions use to message YOU; there is no one else by that name to send to.`
    : `'${e}' is this session itself \u2014 there is no one else at that address to send to.`;
}
export { tdt, bPe, Uee, qGe, zGe, Kjn, Ace, f2, Yb, obe, wPe, TPe, EPe, SF };
