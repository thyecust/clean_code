// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { isSubagentSession, parsePeerAddress, isDefinitelySamePath, isPossiblySamePath, slugify, parseAgentDisplayName, normalizeUsableRecipientName, isEntityRefPrefix } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getPeerBridgeIdentity } from "../权限系统/chunk-1y2g140m.js";
import { getRemoteSessionCompatId } from "../../01-核心基础设施/共享小工具-未细化/remote-session-compat-id.js";
import { MAIN_CONVERSATION_NAME } from "./chunk-enjekn9t.js";
var SELF_TARGET_REASON =
    "target is this session itself \u2014 there is no one else to send to",
  u = `address the main conversation as "${MAIN_CONVERSATION_NAME}"`;
function isOwnMessagingSocket(e) {
  let { ownMessagingSocket: s } = import.meta.require("../跨会话消息(UDS)/chunk-ddtmwhn7.js"),
    n = s();
  return n !== void 0 && isDefinitelySamePath(e, n);
}
function isLikelyOwnMessagingSocket(e) {
  let { ownMessagingSocket: s } = import.meta.require("../跨会话消息(UDS)/chunk-ddtmwhn7.js"),
    n = s();
  return n !== void 0 && isPossiblySamePath(e, n);
}
function d(e) {
  let { ownMessagingSocket: s } = import.meta.require("../跨会话消息(UDS)/chunk-ddtmwhn7.js"),
    n = s(),
    t = parseAgentDisplayName(e);
  return n !== void 0 && t !== null && isEntityRefPrefix(t.ref, "session", n);
}
function isImpersonatedTarget(e, s) {
  return d(e) && !isOwnMessagingSocket(s);
}
function formatImpersonationMessage(e) {
  return `'${e}' is the name-and-ref token this session advertises for ITSELF, yet a different session record on this machine claims it \u2014 not sent. A record impersonating this session is suspicious: ask the user. (If you meant yourself, there is no one to send to.)`;
}
function formatImpersonationDisplayMessage(e) {
  return `Not sent \u2014 '${e}' is this session's own name and ref, but another session record on this machine claims it.`;
}
function formatOwnAddressMessage(e) {
  return `'${e}' is this session's own address \u2014 a message or file sent there would only come back to this conversation; there is no one else at that address to send to.`;
}
function isOwnSessionId(e) {
  let s = sessionIdBody(e);
  return [getPeerBridgeIdentity()?.bridgeSessionId, getRemoteSessionCompatId()].some(
    (n) => typeof n === "string" && sessionIdBody(n) === s,
  );
}
function isTeammateContext(e) {
  return (
    e.teammateContext !== void 0 ||
    (e.agentContext !== void 0 && isSubagentSession(e.agentContext))
  );
}
function formatOwnNameDisplayMessage(e) {
  return `Not sent \u2014 '${e}' is this session's own name.`;
}
function formatMainSessionNotice(e, s, n = u) {
  let { getRegisteredSessionName: t } = import.meta.require(
      "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js",
    ),
    o = normalizeUsableRecipientName(t()?.name),
    i = o === null ? "this session" : `this session ("${o}")`;
  return s
    ? `
('${e}' also addresses ${i} \u2014 this process's main session; to reach the main conversation from inside it, ${n}.)`
    : `
('${e}' also addresses ${i} itself \u2014 if you meant yourself, there is no one to send to.)`;
}
function hasCompleteTargetLookup(e) {
  return (
    !e.cloudUnavailable &&
    !e.bridgeUnavailable &&
    !e.localUnavailable &&
    !e.searchTruncated &&
    !e.pinnedIdentityClaimedLocally
  );
}
function classifySelfNameMatch(e) {
  let { getRegisteredSessionName: s, getHeldSessionNames: n } =
      import.meta.require("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
    { ownMessagingSocket: t } = import.meta.require("../跨会话消息(UDS)/chunk-ddtmwhn7.js"),
    o = s(),
    i = t();
  if (o === void 0 || i === void 0 || parsePeerAddress(e).scheme !== "other") return "no";
  let r = parseAgentDisplayName(e);
  if (r !== null) {
    let a = slugify(r.name);
    if (!isEntityRefPrefix(r.ref, "session", i)) return "no";
    if (a !== slugify(o.name)) {
      let c = n().get(a);
      if (c === void 0) return "no";
      return c === "derived" ? "categorical" : "note";
    }
  } else if (slugify(e) !== slugify(o.name)) return "no";
  let { getSessionNamingState: l } = import.meta.require("../跨会话消息(UDS)/chunk-9kzxq41e.js");
  return o.source === "derived" ||
    ((o.source === "user" || o.source === "collision") &&
      l().userTypedName === o.name)
    ? "categorical"
    : "note";
}
function formatOwnSessionMessage(e, s, n = u) {
  let { getRegisteredSessionName: t } = import.meta.require(
      "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js",
    ),
    o = normalizeUsableRecipientName(t()?.name);
  if (s) {
    let i = o !== null ? ` ("${o}" is the name OTHER sessions use for it)` : "";
    return `'${e}' is this process's own main session${i} \u2014 from inside it, ${n} instead.`;
  }
  return o !== null
    ? `'${e}' is this session itself \u2014 "${o}" is the name other sessions use to message YOU; there is no one else by that name to send to.`
    : `'${e}' is this session itself \u2014 there is no one else at that address to send to.`;
}
export { SELF_TARGET_REASON, isOwnMessagingSocket, isLikelyOwnMessagingSocket, isImpersonatedTarget, formatImpersonationMessage, formatImpersonationDisplayMessage, formatOwnAddressMessage, isOwnSessionId, isTeammateContext, formatOwnNameDisplayMessage, formatMainSessionNotice, hasCompleteTargetLookup, classifySelfNameMatch, formatOwnSessionMessage };
