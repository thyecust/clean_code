// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Lt, uot, GW } from "./sdk.h4f48kbj.js";
import { lit, fromSanitizer_SANITIZER_OUTPUT_ONLY } from "../../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { isValidRequestId } from "../../../01-核心基础设施/共享小工具-未细化/request-id.js";
var Aer = 600000;
function Bqt(e) {
  return e.escalated ? e.retryWindowMs : e.firstWindowMs;
}
class pTt extends Error {
  deadline;
  sleptMs;
  code = "StreamNoResponse";
  constructor(e, t) {
    super("No response from API within the first-byte window");
    this.deadline = e;
    this.sleptMs = t;
    this.name = "StreamNoResponseError";
  }
}
function bYe(e) {
  let t = GW(e, (r) => r instanceof pTt);
  return t instanceof pTt ? t : void 0;
}
var Bl = "API Error";
function CJ(e) {
  return (
    e instanceof Lt &&
    e.status === 403 &&
    (e.message?.includes("OAuth token has been revoked") ?? !1)
  );
}
function AD(e) {
  if (!(e instanceof Lt)) return !1;
  return (
    e.status === 529 || (e.message?.includes('"type":"overloaded_error"') ?? !1)
  );
}
function f(e) {
  if (!(e instanceof Lt)) return !1;
  return (
    e.status === 429 || (e.message?.includes('"type":"rate_limit_error"') ?? !1)
  );
}
var koe = "dlp_request_denied";
function Mfe(e) {
  return _(e) === koe;
}
var wYe = "claude_code_version_too_old";
function ETn(e) {
  return _(e) === wYe;
}
function _(e) {
  if (!(e instanceof Lt) || !c(e)) return;
  return e.error?.error?.details?.error_code;
}
function ATn(e) {
  if (typeof e.status === "number") return e.status;
  if (AD(e)) return 529;
  if (f(e)) return 429;
  return;
}
var bFe = new Set([
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "CERT_SIGNATURE_FAILURE",
    "CERT_NOT_YET_VALID",
    "CERT_HAS_EXPIRED",
    "CERT_REVOKED",
    "CERT_REJECTED",
    "CERT_UNTRUSTED",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "CERT_CHAIN_TOO_LONG",
    "PATH_LENGTH_EXCEEDED",
    "ERR_TLS_CERT_ALTNAME_INVALID",
    "HOSTNAME_MISMATCH",
  ]),
  R = new Set([
    ...bFe,
    "ERR_TLS_HANDSHAKE_TIMEOUT",
    "ERR_SSL_WRONG_VERSION_NUMBER",
    "ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC",
  ]),
  SR = new Set([
    "ECONNREFUSED",
    "ConnectionRefused",
    "ENOTFOUND",
    "ENETUNREACH",
    "ENETDOWN",
    "EHOSTUNREACH",
    "EHOSTDOWN",
    "EAI_AGAIN",
    "FailedToOpenSocket",
    "ERR_PROXY_TUNNEL",
  ]),
  UH = new Set([
    "ECONNRESET",
    "EPIPE",
    "ConnectionClosed",
    "UND_ERR_SOCKET",
    "ETIMEDOUT",
    "ECONNABORTED",
    "ERR_SOCKET_CLOSED",
    "StreamSuspended",
  ]);
function fTt(e) {
  return UH.has(e) || SR.has(e) ? fromSanitizer_SANITIZER_OUTPUT_ONLY(e) : lit("other");
}
function mTt(e) {
  return SR.has(e) || UH.has(e) || bFe.has(e) ? fromSanitizer_SANITIZER_OUTPUT_ONLY(e) : void 0;
}
function CTn(e) {
  return e.status !== void 0 || e.error !== void 0;
}
var p = new Set([
  "OAuth access token has expired. Re-authenticate to continue.",
  "OAuth access token has been revoked.",
  "OAuth access token is invalid.",
  "API key is invalid.",
  "Request exceeds the maximum size",
  "Request not allowed",
]);
function Cer(e, t) {
  if (!CTn(e)) return !1;
  let r = e.error,
    n =
      typeof r === "object" && r !== null && "request_id" in r
        ? r.request_id
        : void 0,
    o = [t, e.requestID, n].some(isValidRequestId),
    i = (c(e) ? e : void 0)?.error?.error?.message,
    E = typeof i === "string" && i !== "",
    l = E && p.has(i);
  return !(o && E) && !l;
}
function Nfe(e, t) {
  let r = /^[a-z][a-z0-9_]{0,63}$/.test(e) ? e : "unknown";
  return fromSanitizer_SANITIZER_OUTPUT_ONLY(
    `API error: type=${r} status=${typeof t === "number" ? t : "none"}`,
  );
}
var u = "Failed to resolve AWS credentials from the credential provider chain.",
  jqt = "Failed to acquire Google OAuth credentials.";
function tf(e) {
  if (!e || typeof e !== "object") return null;
  let t = e,
    r = 5,
    n = 0;
  while (t && n < r) {
    if (t instanceof Error) {
      if ("code" in t && typeof t.code === "string") {
        let o = t.code,
          s = R.has(o);
        return { code: o, message: t.message, isSSLError: s };
      }
      if (t.message.startsWith(uot))
        return { code: "ConnectionClosed", message: t.message, isSSLError: !1 };
    }
    if (t instanceof Error && "cause" in t && t.cause !== t)
      ((t = t.cause), n++);
    else break;
  }
  return null;
}
function A(e) {
  let t = tf(e);
  return t !== null && SR.has(t.code);
}
function kG(e) {
  let t = tf(e);
  if (!t?.isSSLError) return null;
  return `SSL certificate error (${t.code}). If you are behind a corporate proxy or TLS-intercepting firewall, set NODE_EXTRA_CA_CERTS to your CA bundle path, or ask IT to allowlist *.anthropic.com. Run \`claude doctor\` for details.`;
}
function a(e) {
  if (e.includes("<!DOCTYPE html") || e.includes("<html")) {
    let t = e.match(/<title>([^<]+)<\/title>/);
    if (t && t[1]) return t[1].trim();
    return "";
  }
  return e;
}
function T(e) {
  let t = e.message;
  if (!t) return "";
  return a(t);
}
function c(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "error" in e &&
    typeof e.error === "object" &&
    e.error !== null
  );
}
function d(e) {
  if (!c(e)) return null;
  let r = e.error,
    n = r?.error?.message;
  if (typeof n === "string" && n.length > 0) {
    let s = a(n);
    if (s.length > 0) return s;
  }
  let o = r?.message;
  if (typeof o === "string" && o.length > 0) {
    let s = a(o);
    if (s.length > 0) return s;
  }
  return null;
}
function Ffe(e) {
  let t = tf(e);
  if (t) {
    let { code: n, isSSLError: o } = t;
    if (n === "StreamSuspended")
      return "Connection lost while your computer was asleep";
    if (n === "StreamNoResponse") return "No response from API";
    if (n === "BedrockUnexpectedContentType") return t.message;
    if (n === "ETIMEDOUT")
      return "Request timed out. Check your internet connection and proxy settings";
    if (o)
      switch (n) {
        case "UNABLE_TO_VERIFY_LEAF_SIGNATURE":
        case "UNABLE_TO_GET_ISSUER_CERT":
        case "UNABLE_TO_GET_ISSUER_CERT_LOCALLY":
          return "Unable to connect to API: SSL certificate verification failed. Check your proxy or corporate SSL certificates";
        case "CERT_HAS_EXPIRED":
          return "Unable to connect to API: SSL certificate has expired";
        case "CERT_REVOKED":
          return "Unable to connect to API: SSL certificate has been revoked";
        case "DEPTH_ZERO_SELF_SIGNED_CERT":
        case "SELF_SIGNED_CERT_IN_CHAIN":
          return "Unable to connect to API: Self-signed certificate detected. Check your proxy or corporate SSL certificates";
        case "ERR_TLS_CERT_ALTNAME_INVALID":
        case "HOSTNAME_MISMATCH":
          return "Unable to connect to API: SSL certificate hostname mismatch";
        case "CERT_NOT_YET_VALID":
          return "Unable to connect to API: SSL certificate is not yet valid";
        default:
          return `Unable to connect to API: SSL error (${n})`;
      }
  }
  if (e.message === u || e.message === jqt) {
    let n = GW(
      e.cause,
      (o) =>
        o.message.trim().length > 0 && o.message !== u && o.message !== jqt,
    );
    if (n) {
      let o = a(n.message.trim());
      if (o.length > 0) return o;
    }
  }
  if (e.message === "Connection error.") {
    let n = t?.code;
    if (n === void 0)
      return "Unable to connect to API. Check your internet connection";
    switch (n) {
      case "ECONNRESET":
      case "EPIPE":
      case "ECONNABORTED":
      case "ConnectionClosed":
      case "ERR_SOCKET_CLOSED":
      case "UND_ERR_SOCKET":
        return `Connection dropped (${n})`;
      case "ECONNREFUSED":
      case "ConnectionRefused":
        return `Connection refused \u2014 a firewall or proxy may be blocking it (${n})`;
      case "ENOTFOUND":
      case "EAI_AGAIN":
      case "FailedToOpenSocket":
        return `Can't reach the API server \u2014 check your internet or DNS (${n})`;
      case "ENETUNREACH":
      case "ENETDOWN":
      case "EHOSTUNREACH":
      case "EHOSTDOWN":
        return `No internet route \u2014 check your connection or VPN (${n})`;
      case "ERR_PROXY_TUNNEL":
        return `Couldn't connect through your proxy (${n})`;
      default:
        return `Unable to connect to API (${n})`;
    }
  }
  if (!e.message) return d(e) ?? `API error (status ${e.status ?? "unknown"})`;
  if (e.message.includes('{"')) {
    let n = d(e);
    if (n) return e.status ? `${e.status} ${n}` : n;
  }
  let r = T(e);
  return r !== e.message && r.length > 0 ? r : e.message;
}
function gTt(e) {
  let t = (i) => e.headers?.get?.(i) ?? void 0,
    r = t("anthropic-ratelimit-unified-representative-claim"),
    n = t("anthropic-ratelimit-unified-reset"),
    o = t("anthropic-ratelimit-unified-overage-status"),
    s = bYe(e);
  return {
    message: e.message,
    status: e.status,
    requestId: e.requestID ?? void 0,
    formatted: Ffe(e),
    connection: tf(e),
    isNetworkDown: A(e),
    rateLimits:
      r || o
        ? {
            ...(r && { rateLimitType: r }),
            ...(n && { resetsAt: Math.round(Number(n)) }),
          }
        : null,
    noResponse: s
      ? { waitedMs: Bqt(s.deadline), retryWaitMs: s.deadline.retryWindowMs }
      : null,
  };
}
class Wqt extends Error {
  constructor() {
    super("Stream ended without receiving any events");
    this.name = "StreamNoEventsError";
  }
}
function ver({
  connDetails: e,
  isStaleConnection: t,
  isContextHintSse: r,
  streamIdleAborted: n,
  noEvents: o,
}) {
  if (e?.code === "StreamSuspended") return "stream_suspended";
  if (t) return "stale_connection";
  if (r) return "context_hint_sse";
  if (n) return "watchdog";
  if (o) return "no_events";
  return "other";
}
export {
  Aer,
  Bqt,
  pTt,
  bYe,
  Bl,
  CJ,
  AD,
  koe,
  Mfe,
  wYe,
  ETn,
  ATn,
  bFe,
  SR,
  UH,
  fTt,
  mTt,
  CTn,
  Cer,
  Nfe,
  jqt,
  tf,
  kG,
  Ffe,
  gTt,
  Wqt,
  ver,
};
