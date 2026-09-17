// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { gce, BSe, jSe } from "../MCP客户端/chunk-5wa92x7d.js";
import { l2, aI, RSe, ILt, WIe, PLt, GIe, OLt, $rn } from "../MCP客户端/chunk-78r8f7dw.js";
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { MCP_CLIENT_METADATA_URL } from "./chunk-9g2q4bjq.js";
import { yt, R, l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum, fromEnumOpt, fromNumberOpt, fromEnumArr, mcpNameForAnalytics_GATE_EVALUATED } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { b, z, ae } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logMCPDebug } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Cs } from "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import { getProxyFetchOptions } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { SECURE_STORAGE_READ_FAILED_SENTINEL, getSecureStorage } from "./secure-storage.js";
import { getSecureStorageDir, invalidateKeychainCache } from "../../01-核心基础设施/共享小工具-未细化/keychain-access.js";
import { Tn, SP, yU, cq, la, oy, H } from "./认证-OAuth登录.419zdfz3.js";
import { sanitizeAnalyticsId } from "../../03-入口与运行时/CLI入口-Commander/startup-profiler.js";
import { jt } from "./chunk-wk0e3dz4.js";
import { SR, UH, tf } from "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import { authLostEmitter } from "../../01-核心基础设施/共享小工具-未细化/lazy-event-emitters.js";
import { Pu, FIe, gE } from "../MCP客户端/chunk-g4gdwpa0.js";
import { Rde, QTe, Fg } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { renderOAuthCallbackPage, getFirstParamValue, buildOAuthCallbackUrl, pickOAuthCallbackPort } from "../../01-核心基础设施/共享小工具-未细化/oauth-callback.js";
import { redactHeaders, redactSearchParams, redactParamValue, redactUrl, formatMcpSdkError, rethrowFetchError } from "./url-and-error-redaction.js";
import { getCachedIdpIdToken, clearIdpIdToken, getIdpClientSecret, discoverOidc, acquireIdpIdToken } from "./xaa-idp-login.js";
import { isHeadlessEnvironment, tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import { createCoercedZodNumber } from "../../01-核心基础设施/共享小工具-未细化/chunk-p3e024j6.js";
import { s, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { randomBytes, randomUUID } from "crypto";
import { createServer } from "http";
import { join as et } from "path";
import { parse } from "url";
var He = 30000,
  Xe = "urn:ietf:params:oauth:grant-type:token-exchange",
  Ue = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  Ce = "urn:ietf:params:oauth:token-type:id-jag",
  je = "urn:ietf:params:oauth:token-type:id_token";
function Oe(e) {
  return (t, n) => {
    let r = AbortSignal.timeout(He),
      d = e ? AbortSignal.any([r, e]) : r;
    return fetch(t, { ...n, ...getProxyFetchOptions({ url: String(t) }), signal: d }).catch((p) =>
      rethrowFetchError(p, t),
    );
  };
}
var de = Oe();
function ce(e) {
  try {
    return new URL(e).href.replace(/\/$/, "");
  } catch {
    return e.replace(/\/$/, "");
  }
}
class q extends Error {
  shouldClearIdToken;
  constructor(e, t) {
    super(e);
    ((this.name = "XaaTokenExchangeError"), (this.shouldClearIdToken = t));
  }
}
var Be =
  /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
function se(e) {
  return (typeof e === "string" ? e : b(e)).replace(
    Be,
    (n, r) => `"${r}":"[REDACTED]"`,
  );
}
var Ke = createLazyValue(() =>
    c({
      access_token: s().optional(),
      issued_token_type: s().optional(),
      expires_in: createCoercedZodNumber().optional(),
      scope: s().optional(),
    }),
  ),
  We = createLazyValue(() =>
    c({
      access_token: s().min(1),
      token_type: s().default("Bearer"),
      expires_in: createCoercedZodNumber().optional(),
      scope: s().optional(),
      refresh_token: s().optional(),
    }),
  );
async function Ve(e, t) {
  let n;
  try {
    n = await PLt(e, void 0, t?.fetchFn ?? de);
  } catch (r) {
    if (yt(r)) throw r;
    let d = r instanceof Error ? /^HTTP (\d{3}) /.exec(r.message)?.[1] : void 0;
    throw Error(
      `XAA: PRM discovery failed for ${redactUrl(e)} (${d ? `HTTP ${d}` : r instanceof Error ? r.name : typeof r})`,
    );
  }
  if (!n.resource || !n.authorization_servers?.[0])
    throw Error(
      "XAA: PRM discovery failed: PRM missing resource or authorization_servers",
    );
  if (ce(n.resource) !== ce(e))
    throw Error(
      `XAA: PRM discovery failed: PRM resource mismatch: expected ${redactUrl(e)}, got ${redactUrl(n.resource)}`,
    );
  return {
    resource: n.resource,
    authorization_servers: n.authorization_servers,
  };
}
async function qe(e, t) {
  let n;
  try {
    n = await GIe(e, { fetchFn: t?.fetchFn ?? de, skipIssuerValidation: !0 });
  } catch (r) {
    if (yt(r)) throw r;
    let d = r instanceof Error ? /^HTTP (\d{3}) /.exec(r.message)?.[1] : void 0;
    throw new R(
      `XAA: AS metadata discovery failed (${d ? `HTTP ${d}` : r instanceof Error ? r.name : typeof r})`,
      "XAA: AS metadata discovery failed",
    );
  }
  if (!n?.issuer || !n.token_endpoint)
    throw Error(
      `XAA: AS metadata discovery failed: no valid metadata at ${redactUrl(e)}`,
    );
  if (ce(n.issuer) !== ce(e))
    throw Error(
      `XAA: AS metadata discovery failed: issuer mismatch: expected ${redactUrl(e)}, got ${redactUrl(n.issuer)}`,
    );
  if (
    !URL.canParse(n.token_endpoint) ||
    new URL(n.token_endpoint).protocol !== "https:"
  )
    throw Error(
      `XAA: refusing non-HTTPS token endpoint: ${redactUrl(n.token_endpoint)}`,
    );
  return {
    issuer: n.issuer,
    token_endpoint: n.token_endpoint,
    grant_types_supported: n.grant_types_supported,
    token_endpoint_auth_methods_supported:
      n.token_endpoint_auth_methods_supported,
  };
}
async function Ge(e) {
  let t = e.fetchFn ?? de,
    n = new URLSearchParams({
      grant_type: Xe,
      requested_token_type: Ce,
      audience: e.audience,
      resource: e.resource,
      subject_token: e.idToken,
      subject_token_type: je,
      client_id: e.clientId,
    });
  if (e.clientSecret) n.set("client_secret", e.clientSecret);
  if (e.scope) n.set("scope", e.scope);
  let r = await t(e.tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: n,
  });
  if (!r.ok) {
    let _ = se(await r.text()).slice(0, 200),
      h = r.status < 500;
    throw new q(`XAA: token exchange failed: HTTP ${r.status}: ${_}`, h);
  }
  let d;
  try {
    d = await r.json();
  } catch {
    throw new q(
      `XAA: token exchange returned non-JSON (captive portal?) at ${redactUrl(e.tokenEndpoint)}`,
      !1,
    );
  }
  let p = Ke().safeParse(d);
  if (!p.success)
    throw new q(
      `XAA: token exchange response did not match expected shape: ${se(d)}`,
      !0,
    );
  let o = p.data;
  if (!o.access_token)
    throw new q(
      `XAA: token exchange response missing access_token: ${se(o)}`,
      !0,
    );
  if (o.issued_token_type !== Ce)
    throw new q(
      `XAA: token exchange returned unexpected issued_token_type: ${o.issued_token_type}`,
      !0,
    );
  return {
    jwtAuthGrant: o.access_token,
    expiresIn: o.expires_in,
    scope: o.scope,
  };
}
async function Je(e) {
  let t = e.fetchFn ?? de,
    n = e.authMethod ?? "client_secret_basic",
    r = new URLSearchParams({ grant_type: Ue, assertion: e.assertion });
  if (e.scope) r.set("scope", e.scope);
  let d = { "Content-Type": "application/x-www-form-urlencoded" };
  if (n === "client_secret_basic") {
    let h = Buffer.from(
      `${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`,
    ).toString("base64");
    ((d.Authorization = `Basic ${h}`), Pu().record(h));
  } else
    (r.set("client_id", e.clientId), r.set("client_secret", e.clientSecret));
  (Pu().record(e.clientSecret), Pu().record(e.assertion));
  let p = await t(e.tokenEndpoint, { method: "POST", headers: d, body: r });
  if (!p.ok) {
    let h = se(await p.text()).slice(0, 200);
    throw Error(`XAA: jwt-bearer grant failed: HTTP ${p.status}: ${h}`);
  }
  let o;
  try {
    o = await p.json();
  } catch {
    throw Error(
      `XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${redactUrl(e.tokenEndpoint)}`,
    );
  }
  let _ = We().safeParse(o);
  if (!_.success)
    throw Error(
      `XAA: jwt-bearer response did not match expected shape: ${se(o)}`,
    );
  return _.data;
}
async function me(e, t, n = "xaa", r) {
  let d = Oe(r);
  logMCPDebug(n, `XAA: discovering PRM for ${redactUrl(e)}`);
  let p = await Ve(e, { fetchFn: d });
  logMCPDebug(
    n,
    `XAA: discovered resource=${redactUrl(p.resource)} ASes=[${p.authorization_servers.map(redactUrl).join(", ")}]`,
  );
  let o,
    _ = [];
  for (let E of p.authorization_servers) {
    let M;
    try {
      M = await qe(E, { fetchFn: d });
    } catch (D) {
      if (r?.aborted) throw D;
      _.push(`${redactUrl(E)}: ${D instanceof Error ? D.message : String(D)}`);
      continue;
    }
    if (M.grant_types_supported && !M.grant_types_supported.includes(Ue)) {
      _.push(
        `${redactUrl(E)}: does not advertise jwt-bearer grant (supported: ${M.grant_types_supported.join(", ")})`,
      );
      continue;
    }
    o = M;
    break;
  }
  if (!o)
    throw new R(
      `XAA: no authorization server supports jwt-bearer. Tried: ${_.join("; ")}`,
      `XAA: no authorization server supports jwt-bearer (tried ${p.authorization_servers.length})`,
    );
  let h = o.token_endpoint_auth_methods_supported,
    v =
      h &&
      !h.includes("client_secret_basic") &&
      h.includes("client_secret_post")
        ? "client_secret_post"
        : "client_secret_basic";
  (logMCPDebug(
    n,
    `XAA: AS issuer=${redactUrl(o.issuer)} token_endpoint=${redactUrl(o.token_endpoint)} auth_method=${v}`,
  ),
    logMCPDebug(n, "XAA: exchanging id_token for ID-JAG at IdP"));
  let k = await Ge({
    tokenEndpoint: t.idpTokenEndpoint,
    audience: o.issuer,
    resource: p.resource,
    idToken: t.idpIdToken,
    clientId: t.idpClientId,
    clientSecret: t.idpClientSecret,
    fetchFn: d,
  });
  (logMCPDebug(n, "XAA: ID-JAG obtained"),
    logMCPDebug(n, "XAA: exchanging ID-JAG for access_token at AS"));
  let w = await Je({
    tokenEndpoint: o.token_endpoint,
    assertion: k.jwtAuthGrant,
    clientId: t.clientId,
    clientSecret: t.clientSecret,
    authMethod: v,
    fetchFn: d,
  });
  return (
    logMCPDebug(n, "XAA: access_token obtained"),
    { ...w, authorizationServerUrl: o.issuer }
  );
}
var rt = 30000,
  st = 500,
  Re = 600000,
  nt = new Set([...UH, ...SR, "ETIMEDOUT"]);
function it(e) {
  if (yt(e)) return !0;
  if (e instanceof Error && e.name === "TimeoutError") return !0;
  let t = tf(e);
  return t !== null && nt.has(t.code);
}
function ve(e) {
  let t = e;
  return (
    (t?.name === "ZodError" || t?.name === "$ZodError") &&
    Array.isArray(t?.issues)
  );
}
var ot = new Set(Object.values(l2)),
  ct = ["authorization_pending", "expired_token", "slow_down"],
  dt = [...Object.values(l2), ...ct];
function spr(e) {
  let t = dt.find((n) => n === e);
  return fromEnumOpt(t) ?? S("other");
}
function ipr(e, t) {
  let n =
    t instanceof Error
      ? `${e}
${t.message}`
      : e;
  if (t instanceof iI) return "issuer_echo_denied";
  if (t instanceof RSe)
    return t.kind === "metadata"
      ? "issuer_echo_mismatch"
      : "issuer_response_mismatch";
  if (t instanceof ILt) return "dcr_rejected";
  if (
    n.includes("dynamic client registration") ||
    (t instanceof aI && t.code === "invalid_client_metadata")
  )
    return "dcr_failed";
  if (
    (n.includes("trying to load") && n.includes("metadata")) ||
    n.includes("Incompatible auth server")
  )
    return "discovery_failed";
  if (t instanceof aI) return "dcr_rejected";
  if (n.includes("Issuer mismatch in authorization server metadata"))
    return "issuer_echo_mismatch";
  if (n.includes("Issuer mismatch in authorization response"))
    return "issuer_response_mismatch";
  let r = A(t) ?? A(t instanceof Error ? t.cause : void 0);
  if (r && QTe.has(r)) return "network_failed";
  return "sdk_auth_failed";
}
var ge = 5;
function F2n(e) {
  return redactUrl(e.origin + e.pathname) + redactSearchParams(e);
}
var ut = new Set([
  "invalid_refresh_token",
  "expired_refresh_token",
  "token_expired",
]);
async function $2n(e) {
  if (!e.ok) return e;
  let t = await e.text(),
    n;
  try {
    n = z(t);
  } catch {
    return new Response(t, e);
  }
  if (BSe.safeParse(n).success) return new Response(t, e);
  let r = jSe.safeParse(n);
  if (!r.success) return new Response(t, e);
  let d = ut.has(r.data.error)
    ? {
        error: "invalid_grant",
        error_description:
          r.data.error_description ??
          `Server returned non-standard error code: ${r.data.error}`,
      }
    : r.data;
  return new Response(b(d), {
    status: 400,
    statusText: "Bad Request",
    headers: e.headers,
  });
}
function bLt() {
  return async (e, t) => {
    try {
      return await Me(e, t);
    } catch (n) {
      if (t?.signal?.aborted || !it(n)) throw n;
      return (await sleep(st, t?.signal ?? void 0), await Me(e, t));
    }
  };
}
async function Me(e, t) {
  let n = AbortSignal.timeout(rt),
    r = t?.method?.toUpperCase() === "POST",
    d = getProxyFetchOptions({ url: String(e) });
  if (!t?.signal) {
    let h;
    try {
      h = await fetch(e, { ...t, ...d, signal: n });
    } catch (v) {
      rethrowFetchError(v, e);
    }
    return r ? $2n(h) : h;
  }
  let p = new AbortController(),
    o = () => p.abort();
  (t.signal.addEventListener("abort", o), n.addEventListener("abort", o));
  let _ = () => {
    (t.signal?.removeEventListener("abort", o),
      n.removeEventListener("abort", o));
  };
  if (t.signal.aborted) p.abort();
  try {
    let h = await fetch(e, { ...t, ...d, signal: p.signal });
    return (_(), r ? $2n(h) : h);
  } catch (h) {
    (_(), rethrowFetchError(h, e));
  }
}
async function he(e, t, n) {
  let {
      configuredMetadataUrl: r,
      fetchFn: d,
      resourceMetadataUrl: p,
      serverConfigForAnalytics: o,
    } = n ?? {},
    _ = d ?? bLt();
  if (r) {
    if (!r.startsWith("https://"))
      throw Error(`authServerMetadataUrl must use https:// (got: ${redactUrl(r)})`);
    let v = await _(r, { headers: { Accept: "application/json" } });
    if (v.ok) {
      let k;
      try {
        k = await v.json();
      } catch {
        throw Error(
          `Configured auth server metadata at ${redactUrl(r)} is not valid JSON`,
        );
      }
      return gce.parse(k);
    }
    throw Error(
      `HTTP ${v.status} fetching configured auth server metadata from ${redactUrl(r)}`,
    );
  }
  try {
    let { authorizationServerUrl: v, authorizationServerMetadata: k } =
      await OLt(t, {
        fetchFn: _,
        ...(p && { resourceMetadataUrl: p }),
        skipIssuerMetadataValidation: !0,
      });
    if (k)
      return (
        _ct({
          serverName: e,
          site: "rfc9728_chain",
          expectedIssuer: v,
          receivedIssuer: k.issuer,
          serverConfig: o,
        }),
        k
      );
  } catch (v) {
    if (v instanceof iI) throw v;
    logMCPDebug(e, `RFC 9728 discovery failed, falling back: ${formatMcpSdkError(v, t)}`);
  }
  let h = new URL(t);
  if (h.pathname === "/") return;
  try {
    let v = await GIe(h, { fetchFn: _, skipIssuerValidation: !0 });
    if (v)
      _ct({
        serverName: e,
        site: "legacy_path_fallback",
        expectedIssuer: h.href,
        receivedIssuer: v.issuer,
        serverConfig: o,
      });
    return v;
  } catch (v) {
    if (v instanceof iI) throw v;
    logMCPDebug(e, `Path-aware auth server discovery failed: ${formatMcpSdkError(v, t)}`);
    return;
  }
}
class iI extends R {
  expected;
  received;
  constructor(e, t) {
    super(
      `Issuer echo cross-origin mismatch (RFC 8414 \xA73.3): expected ${b(e)}, received ${b(t)}`,
      "issuer echo cross-origin mismatch (RFC 8414 \xA73.3)",
      "issuer_echo_denied",
    );
    this.expected = e;
    this.received = t;
    this.name = "IssuerEchoCrossOriginError";
  }
}
function ue() {
  try {
    return H("tengu_mcp_issuer_strict_echo", !1) === !0;
  } catch {
    return !1;
  }
}
function ht(e, t) {
  return t === e || (e.endsWith("/") && t === e.slice(0, -1));
}
function le(e) {
  try {
    let t = new URL(e);
    if (
      (t.protocol === "https:" || t.protocol === "http:") &&
      t.origin !== "null"
    )
      return t;
  } catch {}
  return;
}
function lt(e, t) {
  let n = le(e),
    r = le(t);
  if (!n || !r) return "unparseable";
  if (
    n.username !== "" ||
    n.password !== "" ||
    r.username !== "" ||
    r.password !== "" ||
    r.search !== "" ||
    r.hash !== ""
  )
    return "cross_origin";
  return n.origin === r.origin ? "same_origin" : "cross_origin";
}
function ft(e, t) {
  let n = le(e),
    r = le(t);
  if (!n || !r) return [];
  let d = [];
  if (n.protocol !== r.protocol) d.push("scheme");
  if (n.username !== r.username || n.password !== r.password)
    d.push("userinfo");
  if (n.hostname !== r.hostname) d.push("host");
  if (n.port !== r.port) d.push("port");
  if (n.pathname !== r.pathname) d.push("path");
  if (n.search !== r.search) d.push("query");
  if (n.hash !== r.hash) d.push("fragment");
  if (d.length === 0) d.push("normalization_only");
  return d;
}
function _ct({
  serverName: e,
  site: t,
  expectedIssuer: n,
  receivedIssuer: r,
  serverConfig: d,
}) {
  if (n === void 0) return;
  if (r !== void 0 && ht(n, r)) return;
  let p = r === void 0 ? "unparseable" : lt(n, r),
    o = ue() ? "enforce" : "observe",
    _ = o === "enforce" && p !== "same_origin";
  try {
    let h = r === void 0 ? ["issuer_missing"] : ft(n, r),
      v = d ? Fg(d) : void 0,
      k = d ? mcpNameForAnalytics_GATE_EVALUATED(e, oy(e, d)) : void 0;
    logEvent("tengu_mcp_oauth_issuer_echo_mismatch", {
      site: fromEnum(t),
      mode: fromEnum(o),
      originRelation: fromEnum(p),
      outcome: _ ? S("denied") : S("proceeded"),
      ...(h.length > 0 && { mismatchFacets: fromEnumArr(h) }),
      expectedIssuerHash: Tn(n),
      ...(r !== void 0 && { receivedIssuerHash: Tn(r) }),
      ...(v && { mcpServerBaseUrl: v }),
      ...(k && { mcpServerName: k }),
    });
  } catch (h) {
    try {
      logMCPDebug(e, `issuer-echo telemetry failed: ${l(h)}`);
    } catch {}
  }
  if (_) throw new iI(n, r);
}
class q3e extends Error {
  constructor() {
    super("Authentication was cancelled");
    this.name = "AuthenticationCancelledError";
  }
}
function Se(e) {
  try {
    let t = new URL(e);
    return `${t.protocol}//${t.hostname}`;
  } catch {
    return e;
  }
}
function Pe(e) {
  let t = Se(e);
  return t === "http://127.0.0.1" || t === "http://localhost";
}
function xe() {
  return a.MCP_OAUTH_CLIENT_METADATA_URL || MCP_CLIENT_METADATA_URL;
}
function be(e) {
  if (!Pe(e)) return !1;
  try {
    return new URL(e).pathname === "/callback";
  } catch {
    return !1;
  }
}
function pt(e) {
  return e !== void 0 && (e === MCP_CLIENT_METADATA_URL || e === xe());
}
function nhr(e) {
  return jt().oauthCallbackSubmitters.get(e);
}
function rhr(e, t) {
  let n = jt().activeOAuthFlows;
  (n.set(e, t),
    t
      .finally(() => {
        if (n.get(e) === t) n.delete(e);
      })
      .catch(() => {}));
}
function ohr(e) {
  return jt().activeOAuthFlows.get(e);
}
async function wLt(e, t) {
  let n = la(e, t),
    r = (await getSecureStorage().readAsync())?.mcpOAuth?.[n];
  if (!r || r.accessToken || r.refreshToken) return;
  try {
    await getSecureStorage().mutate((d) => {
      let p = d.mcpOAuth?.[n];
      if (!p || p.accessToken || p.refreshToken) return d;
      let o = { ...d.mcpOAuth };
      return (delete o[n], { ...d, mcpOAuth: o });
    });
  } catch (d) {
    logMCPDebug(e, `clear tokenless stub failed: ${l(d)}`);
  }
}
async function Ie({
  serverName: e,
  endpoint: t,
  token: n,
  tokenTypeHint: r,
  clientId: d,
  clientSecret: p,
  accessToken: o,
  authMethod: _ = "client_secret_basic",
}) {
  let h = new URLSearchParams();
  (h.set("token", n), h.set("token_type_hint", r));
  let v = { "Content-Type": "application/x-www-form-urlencoded" };
  if (d && p)
    if (_ === "client_secret_post")
      (h.set("client_id", d), h.set("client_secret", p));
    else {
      let k = Buffer.from(
        `${encodeURIComponent(d)}:${encodeURIComponent(p)}`,
      ).toString("base64");
      ((v.Authorization = `Basic ${k}`), Pu().record(k));
    }
  else if (d) h.set("client_id", d);
  else logMCPDebug(e, `No client_id available for ${r} revocation - server may reject`);
  try {
    (await at.post(t, h, { headers: v }), logMCPDebug(e, `Successfully revoked ${r}`));
  } catch (k) {
    if (at.isAxiosError(k) && k.response?.status === 401 && o)
      (logMCPDebug(e, `Got 401, retrying ${r} revocation with Bearer auth`),
        h.delete("client_id"),
        h.delete("client_secret"),
        await at.post(t, h, {
          headers: { ...v, Authorization: `Bearer ${o}` },
        }),
        logMCPDebug(e, `Successfully revoked ${r} with Bearer auth`));
    else throw k;
  }
}
async function shr(e, t) {
  let r = (await getSecureStorage().readAsync())?.mcpOAuth?.[la(e, t)];
  if (!r?.accessToken && !r?.refreshToken) return;
  return {
    accessToken: r.accessToken || void 0,
    refreshToken: r.refreshToken,
    clientId: r.clientId,
    clientSecret: r.clientSecret,
    ...(r.discoveryState && {
      discoveryState: {
        authorizationServerUrl: r.discoveryState.authorizationServerUrl,
      },
    }),
  };
}
async function $e(e, t, n) {
  let r = Pu();
  (r.record(n.accessToken), r.record(n.refreshToken), r.record(n.clientSecret));
  let d;
  try {
    let p = n.discoveryState?.authorizationServerUrl ?? t.url,
      o = await he(e, p, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        serverConfigForAnalytics: t,
      });
    if (!o) (logMCPDebug(e, "No OAuth metadata found"), (d = "no_metadata"));
    else {
      let _ = "revocation_endpoint" in o ? o.revocation_endpoint : null;
      if (!_)
        (logMCPDebug(e, "Server does not support token revocation"),
          (d = "no_revocation_endpoint"));
      else {
        let h = String(_),
          v =
            ("revocation_endpoint_auth_methods_supported" in o
              ? o.revocation_endpoint_auth_methods_supported
              : void 0) ??
            ("token_endpoint_auth_methods_supported" in o
              ? o.token_endpoint_auth_methods_supported
              : void 0),
          k =
            v &&
            !v.includes("client_secret_basic") &&
            v.includes("client_secret_post")
              ? "client_secret_post"
              : "client_secret_basic";
        if ((logMCPDebug(e, `Revoking tokens via ${redactUrl(h)} (${k})`), n.refreshToken))
          try {
            await Ie({
              serverName: e,
              endpoint: h,
              token: n.refreshToken,
              tokenTypeHint: "refresh_token",
              clientId: n.clientId,
              clientSecret: n.clientSecret,
              accessToken: n.accessToken,
              authMethod: k,
            });
          } catch (w) {
            (logMCPDebug(e, `Failed to revoke refresh token: ${l(w)}`),
              (d = "server_revoke_failed"));
          }
        if (n.accessToken)
          try {
            await Ie({
              serverName: e,
              endpoint: h,
              token: n.accessToken,
              tokenTypeHint: "access_token",
              clientId: n.clientId,
              clientSecret: n.clientSecret,
              accessToken: n.accessToken,
              authMethod: k,
            });
          } catch (w) {
            (logMCPDebug(e, `Failed to revoke access token: ${l(w)}`),
              (d = "server_revoke_failed"));
          }
      }
    }
  } catch (p) {
    (logMCPDebug(e, `Failed to revoke tokens: ${l(p)}`),
      (d = p instanceof iI ? "issuer_echo_denied" : "server_revoke_failed"));
  }
  return d;
}
async function ihr(e, t, n) {
  let r;
  try {
    let d = (await getSecureStorage().readAsync())?.mcpOAuth?.[la(e, t)],
      p = {
        ...n,
        accessToken:
          n.accessToken && n.accessToken !== d?.accessToken
            ? n.accessToken
            : void 0,
        refreshToken:
          n.refreshToken && n.refreshToken !== d?.refreshToken
            ? n.refreshToken
            : void 0,
      };
    if (!p.accessToken && !p.refreshToken) {
      (logMCPDebug(e, "No replaced tokens to revoke"), logFeatureOk("mcp_oauth_revoke"));
      return;
    }
    r = await $e(e, t, p);
  } catch (d) {
    (logMCPDebug(e, `Failed to revoke replaced tokens: ${l(d)}`),
      (r = "server_revoke_failed"));
  }
  if (r) logFeatureSad("mcp_oauth_revoke", r);
  else logFeatureOk("mcp_oauth_revoke");
}
async function ahr(e, t, { preserveStepUpState: n = !1 } = {}) {
  let r = getSecureStorage(),
    d = await r.readAsync();
  if (!d?.mcpOAuth) {
    logFeatureOk("mcp_oauth_revoke");
    return;
  }
  let p = la(e, t),
    o = d.mcpOAuth[p],
    _;
  if (o?.accessToken || o?.refreshToken)
    _ = await $e(e, t, {
      accessToken: o.accessToken || void 0,
      refreshToken: o.refreshToken,
      clientId: o.clientId,
      clientSecret: o.clientSecret,
      ...(o.discoveryState && {
        discoveryState: {
          authorizationServerUrl: o.discoveryState.authorizationServerUrl,
        },
      }),
    });
  else logMCPDebug(e, "No tokens to revoke");
  try {
    if (n && o && (o.stepUpScope || o.discoveryState || o.clientId))
      (await r.mutate((h) => {
        let v = h.mcpOAuth?.[p];
        if (v?.accessToken !== o.accessToken || v?.clientId !== o.clientId)
          return h;
        return {
          ...h,
          mcpOAuth: {
            ...h.mcpOAuth,
            [p]: {
              serverName: e,
              serverUrl: t.url,
              accessToken: "",
              refreshToken: void 0,
              expiresAt: void 0,
              ...(o.clientId && {
                clientId: o.clientId,
                ...(o.redirectUri && { redirectUri: o.redirectUri }),
                ...(o.clientSecret !== void 0 && {
                  clientSecret: o.clientSecret,
                }),
              }),
              ...(o.stepUpScope && { stepUpScope: o.stepUpScope }),
              ...(o.discoveryState && {
                discoveryState: {
                  authorizationServerUrl:
                    o.discoveryState.authorizationServerUrl,
                  resourceMetadataUrl: o.discoveryState.resourceMetadataUrl,
                  oauthMetadataFound: o.discoveryState.oauthMetadataFound,
                },
              }),
            },
          },
        };
      }),
        logMCPDebug(e, "Preserved step-up auth state across revocation"));
    else await U2n(e, t);
  } catch (h) {
    (logMCPDebug(e, `clear local tokens failed: ${l(h)}`), (_ ??= "local_clear_failed"));
  }
  if ((gE(e), _)) logFeatureSad("mcp_oauth_revoke", _);
  else logFeatureOk("mcp_oauth_revoke");
}
async function U2n(e, t, n) {
  let r = la(e, t),
    d;
  if (
    (await getSecureStorage().mutate((p) => {
      let o = p.mcpOAuth?.[r];
      if (!o) return p;
      let _ = { ...p.mcpOAuth };
      if (n?.preserveClientRegistration && o.clientId) {
        if (!o.accessToken && !o.refreshToken) return p;
        ((_[r] = {
          ...o,
          accessToken: "",
          refreshToken: void 0,
          expiresAt: 0,
          scope: void 0,
        }),
          (d = "tokens"));
      } else (delete _[r], (d = "all"));
      return { ...p, mcpOAuth: _ };
    }),
    d)
  )
    logMCPDebug(
      e,
      d === "tokens"
        ? "Cleared stored tokens (preserved client registration)"
        : "Cleared stored tokens",
    );
}
function De(e, t, n, r) {
  if (n?.success) return;
  let d = r ? "mutate_rejected" : "storage_write_failed",
    p = r ? l(r) : (n?.warning ?? "storage write failed");
  logMCPDebug(e, `Token persist failed: ${p}`);
  let o = Fg(t);
  logEvent("tengu_mcp_oauth_token_persist_failed", {
    transportType: fromEnum(t.type),
    ...(o && { mcpServerBaseUrl: o }),
    reason: fromEnum(d),
  });
}
async function _t(e, t, n, r, d) {
  if (!t.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let p = yU();
  if (!p)
    throw Error(
      "XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.",
    );
  let o = t.oauth?.clientId;
  if (!o)
    throw Error(
      `XAA: server '${e}' needs an AS client_id. Re-add with --client-id.`,
    );
  let h = (await B2n(e, t))?.clientSecret;
  if (!h) {
    let E = la(e, t),
      M = Object.keys((await getSecureStorage().readAsync())?.mcpOAuthClientConfig ?? {}),
      D = redactHeaders(t.headers ?? {});
    throw (
      logMCPDebug(
        e,
        `XAA: secret lookup miss. wanted=${E} have=[${M.join(", ")}] configHeaders=${b(D)}`,
      ),
      Error(
        `XAA: AS client secret not found for '${e}'. Re-add with --client-secret.`,
      )
    );
  }
  logMCPDebug(e, "XAA: starting cross-app access flow");
  let v = await getIdpClientSecret(p.issuer),
    k = (await getCachedIdpIdToken(p.issuer)) !== void 0,
    w = "idp_login";
  try {
    let E;
    try {
      E = await acquireIdpIdToken({
        idpIssuer: p.issuer,
        idpClientId: p.clientId,
        idpClientSecret: v,
        callbackPort: p.callbackPort,
        onAuthorizationUrl: n,
        skipBrowserOpen: d,
        abortSignal: r,
      });
    } catch (U) {
      if (r?.aborted) throw new q3e();
      throw U;
    }
    w = "discovery";
    let M = await discoverOidc(p.issuer);
    ((w = "token_exchange"), Pu().record(h));
    let D;
    try {
      D = await me(
        t.url,
        {
          clientId: o,
          clientSecret: h,
          idpClientId: p.clientId,
          idpClientSecret: v,
          idpIdToken: E,
          idpTokenEndpoint: M.token_endpoint,
        },
        e,
        r,
      );
    } catch (U) {
      if (r?.aborted) throw new q3e();
      let O = l(U);
      if (U instanceof q) {
        if (U.shouldClearIdToken)
          (await clearIdpIdToken(p.issuer),
            logMCPDebug(e, "XAA: cleared cached id_token after token-exchange failure"));
      } else if (
        O.includes("PRM discovery failed") ||
        O.includes("AS metadata discovery failed") ||
        O.includes("no authorization server supports jwt-bearer")
      )
        w = "discovery";
      else if (O.includes("jwt-bearer")) w = "jwt_bearer";
      throw U;
    }
    let C = la(e, t),
      T = Pu();
    (T.record(D.access_token), T.record(D.refresh_token));
    let I, K;
    try {
      I = await getSecureStorage().mutate((U) => {
        let O = U.mcpOAuth?.[C];
        return {
          ...U,
          mcpOAuth: {
            ...U.mcpOAuth,
            [C]: {
              ...O,
              serverName: e,
              serverUrl: t.url,
              accessToken: D.access_token,
              refreshToken: D.refresh_token ?? O?.refreshToken,
              expiresAt:
                D.expires_in != null
                  ? Date.now() + D.expires_in * 1000
                  : void 0,
              scope: D.scope,
              clientId: o,
              clientSecret: h,
              discoveryState: {
                authorizationServerUrl: D.authorizationServerUrl,
              },
            },
          },
        };
      });
    } catch (U) {
      K = U;
    }
    if (I?.success) logMCPDebug(e, "XAA: tokens saved");
    else De(e, t, I, K);
    (logEvent("tengu_mcp_oauth_flow_success", {
      authMethod: S("xaa"),
      idTokenCacheHit: k,
    }),
      logFeatureOk("mcp_oauth_flow"));
  } catch (E) {
    if (E instanceof q3e) throw E;
    throw (
      logFeatureBad("mcp_oauth_flow", "mcp_oauth_xaa_failed"),
      logEvent("tengu_mcp_oauth_flow_failure", {
        authMethod: S("xaa"),
        xaaFailureStage: fromEnum(w),
        idTokenCacheHit: k,
      }),
      E
    );
  }
}
async function lhr(e, t, n, r, d) {
  if (t.oauth?.xaa) {
    if (!SP())
      throw Error(
        `XAA is not enabled (set CLAUDE_CODE_ENABLE_XAA=1). Remove 'oauth.xaa' from server '${e}' to use the standard consent flow.`,
      );
    (logEvent("tengu_mcp_oauth_flow_start", {
      isOAuthFlow: !0,
      authMethod: S("xaa"),
      transportType: fromEnum(t.type),
      ...(Fg(t) && { mcpServerBaseUrl: Fg(t) }),
    }),
      await _t(e, t, n, r, d?.skipBrowserOpen));
    return;
  }
  let p = getSecureStorage(),
    o = la(e, t),
    _ = (await p.readAsync())?.mcpOAuth?.[o],
    h = _?.stepUpScope,
    v = _?.discoveryState?.resourceMetadataUrl,
    k =
      _?.clientId && _.redirectUri && Pe(_.redirectUri)
        ? Number(new URL(_.redirectUri).port) || void 0
        : void 0,
    w;
  if (v)
    try {
      w = new URL(v);
    } catch {
      logMCPDebug(e, `Invalid cached resourceMetadataUrl: ${redactUrl(v)}`);
    }
  let E = { scope: h, resourceMetadataUrl: w },
    M = randomUUID();
  logEvent("tengu_mcp_oauth_flow_start", {
    flowAttemptId: sanitizeAnalyticsId(M),
    isOAuthFlow: !0,
    transportType: fromEnum(t.type),
    ...(Fg(t) && { mcpServerBaseUrl: Fg(t) }),
  });
  let D = !1;
  try {
    let C = t.oauth?.callbackPort,
      T = !!d?.redirectUri,
      I = T ? 0 : (C ?? (await pickOAuthCallbackPort(k))),
      K = d?.redirectUri ?? buildOAuthCallbackUrl(I);
    logMCPDebug(
      e,
      T
        ? `Using custom redirectUri: ${redactUrl(K)} (no localhost listener)`
        : `Using redirect port: ${I}${C ? " (from config)" : k && I === k ? " (reusing registered port)" : ""}`,
    );
    let U = !_?.clientId || I === k || _.redirectUri === K;
    try {
      await U2n(e, t, { preserveClientRegistration: U });
    } catch (L) {
      logMCPDebug(e, `clear stored credentials failed: ${l(L)}`);
    }
    let O = jt(),
      G = new AbortController();
    if (!T)
      (O.oauthCallbackListeners.get(I)?.abort(),
        O.oauthCallbackListeners.set(I, G));
    let W = new z3e(e, t, K, !0, n, d?.skipBrowserOpen),
      ne = Boolean(t.oauth?.scopes || t.oauth?.authServerMetadataUrl);
    if (E.scope && !ne) W.markStepUpPending(E.scope);
    try {
      let L = await he(e, t.url, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        resourceMetadataUrl: E.resourceMetadataUrl,
        serverConfigForAnalytics: t,
      });
      if (L)
        (W.setMetadata(L),
          logMCPDebug(
            e,
            `Fetched OAuth metadata with scope: ${redactParamValue("scope", Ne(L) ?? "") || "NONE"}`,
          ));
    } catch (L) {
      if (L instanceof iI) throw L;
      logMCPDebug(e, `Failed to fetch OAuth metadata: ${formatMcpSdkError(L, t.url)}`);
    }
    let B = await W.state(),
      x = null,
      X = null,
      Y = null,
      ke = null,
      V = () => {
        if (x)
          (x.removeAllListeners(),
            x.on("error", () => {}),
            x.close(),
            (x = null));
        if (X) (clearTimeout(X), (X = null));
        if (Y)
          (r?.removeEventListener("abort", Y),
            G.signal.removeEventListener("abort", Y),
            (Y = null));
        if (O.oauthCallbackListeners.get(I) === G)
          O.oauthCallbackListeners.delete(I);
        if (O.oauthCallbackSubmitters.get(e) === ke)
          O.oauthCallbackSubmitters.delete(e);
        logMCPDebug(e, "MCP OAuth server cleaned up");
      },
      { code: Ae, iss: Fe } = await new Promise((L, ze) => {
        let ie = !1,
          ye = (N, F) => {
            if (ie) return;
            ((ie = !0), L({ code: N, iss: F }));
          },
          Q = (N) => {
            if (ie) return;
            ((ie = !0), ze(N));
          };
        if (
          ((Y = () => {
            (V(), Q(new q3e()));
          }),
          r?.aborted || G.signal.aborted)
        ) {
          Y();
          return;
        }
        (r?.addEventListener("abort", Y),
          G.signal.addEventListener("abort", Y));
        {
          let N = (F) => {
            try {
              let j = new URL(F),
                te = j.searchParams.get("code"),
                pe = j.searchParams.get("state"),
                ee = j.searchParams.get("error"),
                re = getFirstParamValue(j.searchParams.get("iss"));
              if (!te && !ee) return !1;
              if (pe !== B)
                return (
                  V(),
                  Q(Error("OAuth state mismatch - possible CSRF attack")),
                  !0
                );
              if (ee) {
                let oe = j.searchParams.get("error_description") || "";
                return (V(), Q(Error(`OAuth error: ${ee} - ${oe}`)), !0);
              }
              if (!te) return !1;
              return (
                logMCPDebug(e, "Received auth code via manual callback URL"),
                V(),
                ye(te, re),
                !0
              );
            } catch {
              return !1;
            }
          };
          ((ke = N),
            O.oauthCallbackSubmitters.set(e, N),
            d?.onWaitingForCallback?.(N, I, B));
        }
        let Te = async () => {
          try {
            (logMCPDebug(e, "Starting SDK auth"), logMCPDebug(e, `Server URL: ${redactUrl(t.url)}`));
            let N = await WIe(W, {
              serverUrl: t.url,
              scope: E.scope,
              resourceMetadataUrl: E.resourceMetadataUrl,
              fetchFn: bLt(),
              skipIssuerMetadataValidation: !0,
            });
            if ((logMCPDebug(e, `Initial auth result: ${N}`), N !== "REDIRECT"))
              logMCPDebug(e, `Unexpected auth result, expected REDIRECT: ${N}`);
          } catch (N) {
            (logMCPDebug(e, `SDK auth error: ${formatMcpSdkError(N, t.url)}`),
              V(),
              Q(
                Object.assign(
                  new R(`SDK auth failed: ${formatMcpSdkError(N, t.url)}`, "SDK auth failed"),
                  { cause: N },
                ),
              ));
          }
        };
        if (T) Te();
        else
          ((x = createServer((N, F) => {
            let j = parse(N.url || "", !0);
            if (j.pathname === "/callback") {
              let te = j.query.code,
                pe = j.query.state,
                ee = j.query.error,
                re = j.query.error_description,
                oe = j.query.error_uri,
                Le = getFirstParamValue(j.query.iss);
              if (pe !== B) {
                (F.writeHead(400, { "Content-Type": "text/html" }),
                  F.end(
                    renderOAuthCallbackPage({
                      ok: !1,
                      heading: "Authentication failed",
                      message:
                        "Invalid state parameter. Close this tab and try again from Claude Code.",
                    }),
                  ));
                return;
              }
              if (ee) {
                (F.writeHead(200, { "Content-Type": "text/html" }),
                  F.end(
                    renderOAuthCallbackPage({
                      ok: !1,
                      heading: "Authentication failed",
                      message: "Close this tab and try again from Claude Code.",
                      detail: `${String(ee)}: ${re ?? ""}`,
                    }),
                  ),
                  V());
                let _e = `OAuth error: ${ee}`;
                if (re) _e += ` - ${re}`;
                if (oe) _e += ` (See: ${oe})`;
                Q(Error(_e));
                return;
              }
              if (te)
                (F.writeHead(200, { "Content-Type": "text/html" }),
                  F.end(
                    renderOAuthCallbackPage({
                      ok: !0,
                      heading: "Authentication successful",
                      message:
                        "You can close this tab and return to Claude Code.",
                    }),
                  ),
                  V(),
                  ye(te, Le));
            } else
              (F.writeHead(404, { "Content-Type": "text/html" }),
                F.end(
                  renderOAuthCallbackPage({
                    ok: !1,
                    heading: "Not found",
                    message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${redactUrl(K)}.`,
                  }),
                ));
          })),
            x.on("error", (N) => {
              if ((V(), N.code === "EADDRINUSE")) {
                let F =
                  getCurrentPlatform() === "windows"
                    ? `netstat -ano | findstr :${I}`
                    : `lsof -ti:${I} -sTCP:LISTEN`;
                Q(
                  new R(
                    `OAuth callback port ${I} is already in use \u2014 another process may be holding it. ` +
                      `Run \`${F}\` to find it.`,
                    "OAuth callback port already in use",
                  ),
                );
              } else
                Q(
                  new R(
                    `OAuth callback server failed: ${N.message}`,
                    "OAuth callback server failed",
                  ),
                );
            }),
            x.listen(I, "127.0.0.1", () => void Te()),
            x.unref());
        ((X = setTimeout(
          (N, F) => {
            (N(), F(new R("Authentication timeout", "Authentication timeout")));
          },
          300000,
          V,
          Q,
        )),
          X.unref());
      });
    ((D = !0),
      logMCPDebug(e, "Completing auth flow with authorization code"),
      Pu().record(Ae));
    let fe = await WIe(W, {
      serverUrl: t.url,
      authorizationCode: Ae,
      iss: Fe,
      resourceMetadataUrl: E.resourceMetadataUrl,
      fetchFn: bLt(),
      skipIssuerMetadataValidation: !0,
    });
    if ((logMCPDebug(e, `Auth result: ${fe}`), fe === "AUTHORIZED")) {
      let L = await W.tokens().catch(() => {
        return;
      });
      if ((logMCPDebug(e, `Tokens after auth: ${L ? "Present" : "Missing"}`), L))
        logMCPDebug(e, `Token expires_in: ${L.expires_in}`);
      (logEvent("tengu_mcp_oauth_flow_success", {
        flowAttemptId: sanitizeAnalyticsId(M),
        transportType: fromEnum(t.type),
        ...(Fg(t) && { mcpServerBaseUrl: Fg(t) }),
      }),
        logFeatureOk("mcp_oauth_flow"));
    } else
      throw new R("Unexpected auth result: " + fe, "Unexpected auth result");
  } catch (C) {
    logMCPDebug(e, `Error during auth completion: ${formatMcpSdkError(C, t.url)}`);
    let T = "unknown",
      I,
      K,
      U = l(C),
      O = C instanceof Error ? C.cause : void 0;
    if (C instanceof q3e) T = "cancelled";
    else if (C instanceof iI || O instanceof iI) T = "issuer_echo_denied";
    else if (C instanceof RSe || O instanceof RSe)
      T =
        [C, O].find((x) => x instanceof RSe)?.kind === "metadata"
          ? "issuer_echo_mismatch"
          : "issuer_response_mismatch";
    else if (/AADSTS\d/.test(U)) T = "entra_specific";
    else if (/redirect[_ ]uri/i.test(U)) T = "redirect_uri_mismatch";
    else if (D && (ve(C) || ve(O))) T = "token_response_schema_rejected";
    else if (D) T = "token_exchange_failed";
    else if (U.includes("Authentication timeout")) T = "timeout";
    else if (U.includes("OAuth state mismatch")) T = "state_mismatch";
    else if (U.includes("OAuth error:")) T = "provider_denied";
    else if (
      U.includes("already in use") ||
      U.includes("EADDRINUSE") ||
      U.includes("callback server failed") ||
      U.includes("No available port")
    )
      T = "port_unavailable";
    else if (U.includes("SDK auth failed")) T = ipr(U, O);
    let G = [O, C].find((B) => B instanceof ILt),
      W = (
        O instanceof Error ? O : C instanceof Error ? C : null
      )?.message.match(/^HTTP (\d{3})\b/);
    if (G) K = G.status;
    else if (W) K = Number(W[1]);
    if (O instanceof aI) I = O.code;
    if (C instanceof aI) {
      if (
        ((I = C.code),
        C.code === "invalid_client" || C.code === "unauthorized_client")
      ) {
        let B = la(e, t);
        try {
          await getSecureStorage().mutate((x) => {
            let X = x.mcpOAuth?.[B];
            if (!X) return x;
            return {
              ...x,
              mcpOAuth: {
                ...x.mcpOAuth,
                [B]: { ...X, clientId: void 0, clientSecret: void 0 },
              },
            };
          });
        } catch (x) {
          logMCPDebug(e, `clear clientId failed: ${l(x)}`);
        }
      }
    }
    if (T === "timeout" || U.includes("OAuth error:")) {
      let B = la(e, t);
      await getSecureStorage()
        .mutate((x) => {
          let X = x.mcpOAuth?.[B];
          if (
            !X?.clientId ||
            X.accessToken ||
            X.refreshToken ||
            X.clientId !== _?.clientId
          )
            return x;
          return {
            ...x,
            mcpOAuth: {
              ...x.mcpOAuth,
              [B]: { ...X, clientId: void 0, clientSecret: void 0 },
            },
          };
        })
        .catch((x) => logMCPDebug(e, `drop clientId failed: ${l(x)}`));
    }
    if (T !== "cancelled") logFeatureBad("mcp_oauth_flow", "mcp_oauth_flow_failed");
    logEvent("tengu_mcp_oauth_flow_error", {
      flowAttemptId: sanitizeAnalyticsId(M),
      reason: fromEnum(T),
      error_code: I === void 0 ? void 0 : spr(I),
      http_status: fromNumberOpt(K),
      transportType: fromEnum(t.type),
      ...(Fg(t) && { mcpServerBaseUrl: Fg(t) }),
    });
    let ne = formatMcpSdkError(C, t.url);
    throw ne === l(C) ? C : Error(ne, { cause: C });
  }
}
function yct(e, t) {
  return async (n, r) => {
    let d = await e(n, r);
    if (d.status === 401 || d.status === 403) t.sawAuthChallenge = !0;
    if (d.status === 403) {
      let p = d.headers.get("WWW-Authenticate");
      if (p?.includes("insufficient_scope")) {
        let o = p.match(/scope=(?:"([^"]+)"|([^\s,]+))/),
          _ = o?.[1] ?? o?.[2];
        if (_) t.markStepUpPending(_);
      }
    }
    return d;
  };
}
class z3e {
  serverName;
  serverConfig;
  redirectUri;
  handleRedirection;
  _codeVerifier;
  _flowDiscoveryState;
  _flowDiscoveryStateAt = 0;
  _metadataEchoMode;
  _authorizationUrl;
  _state;
  _scopes;
  _metadata;
  _refreshInProgress;
  _pendingStepUpScope;
  _lastServedClientId;
  _lastServedAccessToken;
  _lastServedRefreshToken;
  _presented;
  onAuthorizationUrlCallback;
  skipBrowserOpen;
  constructor(e, t, n = buildOAuthCallbackUrl(), r = !1, d, p) {
    ((this.serverName = e),
      (this.serverConfig = t),
      (this.redirectUri = n),
      (this.handleRedirection = r),
      (this.onAuthorizationUrlCallback = d),
      (this.skipBrowserOpen = p ?? !1),
      (this._presented = Pu()));
  }
  get redirectUrl() {
    return this.redirectUri;
  }
  get authorizationUrl() {
    return this._authorizationUrl;
  }
  get clientMetadata() {
    let e = {
        client_name: `Claude Code (${this.serverName})`,
        redirect_uris: [this.redirectUri],
        grant_types: ["authorization_code", "refresh_token"],
        response_types: ["code"],
        token_endpoint_auth_method: "none",
      },
      t = this.getCuratedMetadataScope();
    if (t)
      ((e.scope = t),
        logMCPDebug(
          this.serverName,
          `Using scope from metadata: ${redactParamValue("scope", e.scope)}`,
        ));
    return e;
  }
  get clientMetadataUrl() {
    if (!be(this.redirectUri)) {
      logMCPDebug(
        this.serverName,
        `redirectUri ${redactUrl(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`,
      );
      return;
    }
    let e = xe();
    if (e !== MCP_CLIENT_METADATA_URL) logMCPDebug(this.serverName, `Using CIMD URL from env: ${e}`);
    return e;
  }
  setMetadata(e) {
    ((this._metadata = e),
      (this._metadataEchoMode = ue() ? "enforce" : "observe"));
  }
  getCuratedMetadataScope() {
    let e = Ne(this._metadata);
    if (e !== void 0) return e;
    if (
      this.serverConfig.oauth?.authServerMetadataUrl &&
      Array.isArray(this._metadata?.scopes_supported)
    )
      return this._metadata.scopes_supported.join(" ");
    return;
  }
  markStepUpPending(e) {
    ((this._pendingStepUpScope = e),
      logMCPDebug(this.serverName, `Marked step-up pending: ${redactParamValue("scope", e)}`));
  }
  sawAuthChallenge = !1;
  async readCredentialStore() {
    let e = await cq();
    if (e === SECURE_STORAGE_READ_FAILED_SENTINEL)
      throw (
        logMCPDebug(
          this.serverName,
          "Credential store read failed; not reporting credentials as absent",
        ),
        new Rde(this.serverName)
      );
    return e;
  }
  async state() {
    if (!this._state)
      ((this._state = randomBytes(32).toString("base64url")),
        logMCPDebug(this.serverName, "Generated new OAuth state"));
    return this._state;
  }
  async clientInformation() {
    let e = await this.resolveClientInformation();
    return (
      this._presented.record(e?.client_secret),
      this._presented.record(FIe(e?.client_id, e?.client_secret)),
      e
    );
  }
  async resolveClientInformation() {
    let e = await this.readCredentialStore(),
      t = la(this.serverName, this.serverConfig),
      n = e?.mcpOAuthClientConfig?.[t]?.clientSecret,
      r = this.serverConfig.oauth?.clientId,
      d = e?.mcpOAuth?.[t],
      p = this.handleRedirection && pt(d?.clientId) && !be(this.redirectUri);
    if (p) {
      if (
        (logMCPDebug(
          this.serverName,
          `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${redactUrl(this.redirectUri)} \u2014 ${r ? "serving the configured client" : "registering via DCR"} instead`,
        ),
        r)
      )
        await this.patchStoredClientEntry(
          t,
          { clientId: r, clientSecret: void 0, redirectUri: this.redirectUri },
          "stale CIMD client_id repair",
        );
    }
    if (d?.clientId && !p) {
      let o = d.redirectUri;
      if (
        this.handleRedirection &&
        (o
          ? Se(o) !== Se(this.redirectUri)
          : !this.redirectUri.startsWith("http://localhost"))
      ) {
        let _ = o ? redactUrl(o) : "localhost";
        if (!r) {
          logMCPDebug(
            this.serverName,
            `Cached client_id was registered for ${_}; current redirectUri is ${redactUrl(this.redirectUri)} \u2014 forcing re-DCR`,
          );
          return;
        }
        if (d.clientId !== r)
          return (
            logMCPDebug(
              this.serverName,
              `Stored client_id is stale and its redirectUri ${_} predates ${redactUrl(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`,
            ),
            await this.patchStoredClientEntry(
              t,
              {
                clientId: r,
                clientSecret: void 0,
                redirectUri: this.redirectUri,
              },
              "stale client_id repair",
            ),
            (this._lastServedClientId = r),
            { client_id: r, issuer: d.issuer, client_secret: n }
          );
        (logMCPDebug(
          this.serverName,
          `Stored redirectUri ${_} predates ${redactUrl(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`,
        ),
          await this.patchStoredClientEntry(
            t,
            { redirectUri: this.redirectUri },
            "stored redirectUri convergence",
          ));
      }
      return (
        logMCPDebug(this.serverName, "Found client info"),
        (this._lastServedClientId = d.clientId),
        {
          client_id: d.clientId,
          issuer: d.issuer,
          client_secret: d.clientSecret ?? (d.clientId === r ? n : void 0),
        }
      );
    }
    if (r)
      return (
        logMCPDebug(this.serverName, "Using pre-configured client ID"),
        (this._lastServedClientId = r),
        { client_id: r, client_secret: n }
      );
    logMCPDebug(this.serverName, "No client info found");
    return;
  }
  async patchStoredClientEntry(e, t, n) {
    try {
      if (
        !(
          await getSecureStorage().mutate((d) => {
            let p = d.mcpOAuth?.[e];
            if (!p) return d;
            return { ...d, mcpOAuth: { ...d.mcpOAuth, [e]: { ...p, ...t } } };
          })
        )?.success
      )
        logMCPDebug(this.serverName, `${n} resolved unsuccessful`);
    } catch (r) {
      logMCPDebug(this.serverName, `${n} failed: ${l(r)}`);
    }
  }
  async saveClientInformation(e) {
    (this._presented.record(e.client_secret),
      this._presented.record(FIe(e.client_id, e.client_secret)));
    let t = la(this.serverName, this.serverConfig);
    try {
      if (
        (
          await getSecureStorage().mutate((r) => ({
            ...r,
            mcpOAuth: {
              ...r.mcpOAuth,
              [t]: {
                ...r.mcpOAuth?.[t],
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                clientId: e.client_id,
                clientSecret:
                  e.issuer !== void 0 &&
                  e.client_id === r.mcpOAuth?.[t]?.clientId &&
                  r.mcpOAuth?.[t]?.clientSecret === void 0 &&
                  e.client_id === this.serverConfig.oauth?.clientId
                    ? void 0
                    : e.client_secret,
                issuer: e.issuer ?? r.mcpOAuth?.[t]?.issuer,
                redirectUri:
                  !this.handleRedirection &&
                  e.client_id === r.mcpOAuth?.[t]?.clientId
                    ? r.mcpOAuth?.[t]?.redirectUri
                    : this.redirectUri,
                accessToken: r.mcpOAuth?.[t]?.accessToken || "",
                expiresAt: r.mcpOAuth?.[t]?.expiresAt,
              },
            },
          }))
        )?.success
      )
        this._lastServedClientId = e.client_id;
      else
        logMCPDebug(
          this.serverName,
          "saveClientInformation persist resolved unsuccessful",
        );
    } catch (n) {
      logMCPDebug(this.serverName, `saveClientInformation persist failed: ${l(n)}`);
    }
  }
  async tokens() {
    let e = await this.readCredentialStore(),
      t = la(this.serverName, this.serverConfig),
      n = e?.mcpOAuth?.[t];
    if (
      SP() &&
      this.serverConfig.oauth?.xaa &&
      !n?.refreshToken &&
      (!n?.accessToken ||
        (n.expiresAt != null && (n.expiresAt - Date.now()) / 1000 <= 300))
    ) {
      if (!this._refreshInProgress)
        (logMCPDebug(
          this.serverName,
          n
            ? "XAA: access_token expiring, attempting silent exchange"
            : "XAA: no access_token yet, attempting silent exchange",
        ),
          (this._refreshInProgress = this.xaaRefresh().finally(() => {
            this._refreshInProgress = void 0;
          })));
      try {
        let _ = await this._refreshInProgress;
        if (_)
          return (
            (this._lastServedAccessToken = _.access_token),
            this._presented.record(_.access_token),
            this._presented.record(_.refresh_token),
            (this._lastServedRefreshToken =
              _.refresh_token ?? this._lastServedRefreshToken),
            { ..._, issuer: n?.issuer }
          );
      } catch (_) {
        logMCPDebug(this.serverName, `XAA silent exchange failed: ${l(_)}`);
      }
    }
    if (!n) {
      logMCPDebug(this.serverName, "No token data found");
      return;
    }
    if (!n.accessToken) {
      logMCPDebug(this.serverName, "No access token in storage");
      return;
    }
    ((this._lastServedAccessToken = n.accessToken),
      this._presented.record(n.accessToken),
      this._presented.record(n.refreshToken),
      (this._lastServedRefreshToken = n.refreshToken));
    let r = n.expiresAt != null ? (n.expiresAt - Date.now()) / 1000 : void 0,
      d = this._pendingStepUpScope,
      p = d !== void 0;
    if (p)
      logMCPDebug(
        this.serverName,
        `Step-up pending (${redactParamValue("scope", d)}), omitting refresh_token`,
      );
    if (r != null && r <= 0 && !n.refreshToken) {
      logMCPDebug(this.serverName, "Token expired without refresh token");
      return;
    }
    if (r != null && r <= 300 && n.refreshToken && !p) {
      if (!this._refreshInProgress)
        (logMCPDebug(
          this.serverName,
          `Token expires in ${Math.floor(r)}s, attempting proactive refresh`,
        ),
          (this._refreshInProgress = this.refreshAuthorization(
            n.refreshToken,
          ).finally(() => {
            this._refreshInProgress = void 0;
          })));
      else
        logMCPDebug(
          this.serverName,
          "Token refresh already in progress, reusing existing promise",
        );
      try {
        let _ = await this._refreshInProgress;
        if (_)
          return (
            logMCPDebug(this.serverName, "Token refreshed successfully"),
            (this._lastServedAccessToken = _.access_token),
            this._presented.record(_.access_token),
            this._presented.record(_.refresh_token),
            (this._lastServedRefreshToken =
              _.refresh_token ?? this._lastServedRefreshToken),
            { ..._, issuer: n?.issuer }
          );
        logMCPDebug(this.serverName, "Token refresh failed, returning current tokens");
      } catch (_) {
        logMCPDebug(
          this.serverName,
          `Token refresh error: ${formatMcpSdkError(_, this.serverConfig.url)}`,
        );
      }
    }
    let o = {
      access_token: n.accessToken,
      refresh_token: p ? void 0 : n.refreshToken,
      expires_in: r,
      scope: n.scope,
      token_type: "Bearer",
      issuer: n.issuer,
    };
    return (
      logMCPDebug(this.serverName, "Returning tokens"),
      logMCPDebug(this.serverName, `Has refresh token: ${!!o.refresh_token}`),
      logMCPDebug(
        this.serverName,
        r != null ? `Expires in: ${Math.floor(r)}s` : "No expiration specified",
      ),
      o
    );
  }
  async saveTokens(e) {
    (this._presented.record(e.access_token),
      this._presented.record(e.refresh_token));
    let t = e.access_token !== this._lastServedAccessToken,
      n = this._flowDiscoveryStateAt;
    if (t) this._pendingStepUpScope = void 0;
    let r = la(this.serverName, this.serverConfig);
    (logMCPDebug(this.serverName, "Saving tokens"),
      logMCPDebug(this.serverName, `Token expires in: ${e.expires_in}`),
      logMCPDebug(this.serverName, `Has refresh token: ${!!e.refresh_token}`));
    let d, p;
    try {
      d = await getSecureStorage().mutate((o) => ({
        ...o,
        mcpOAuth: {
          ...o.mcpOAuth,
          [r]: {
            ...o.mcpOAuth?.[r],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: e.access_token,
            refreshToken: e.refresh_token ?? o.mcpOAuth?.[r]?.refreshToken,
            expiresAt:
              e.expires_in != null ? Date.now() + e.expires_in * 1000 : void 0,
            scope: e.scope,
            issuer: e.issuer ?? o.mcpOAuth?.[r]?.issuer,
          },
        },
      }));
    } catch (o) {
      p = o;
    }
    if (d?.success)
      ((this._lastServedAccessToken = e.access_token),
        (this._lastServedRefreshToken =
          e.refresh_token ?? this._lastServedRefreshToken));
    if (
      (this.logTokenPersistFailed(d, p), t && this._flowDiscoveryStateAt === n)
    )
      ((this._flowDiscoveryState = void 0), (this._flowDiscoveryStateAt = 0));
  }
  logTokenPersistFailed(e, t) {
    De(this.serverName, this.serverConfig, e, t);
  }
  async xaaRefresh() {
    let e = yU();
    if (!e) return;
    let t = await getCachedIdpIdToken(e.issuer);
    if (!t) {
      logMCPDebug(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return;
    }
    let n = this.serverConfig.oauth?.clientId,
      r = await B2n(this.serverName, this.serverConfig);
    if (!n || !r?.clientSecret) {
      logMCPDebug(
        this.serverName,
        "XAA: missing clientId or clientSecret in config \u2014 skipping silent refresh",
      );
      return;
    }
    let d = await getIdpClientSecret(e.issuer),
      p;
    try {
      p = await discoverOidc(e.issuer);
    } catch (o) {
      logMCPDebug(
        this.serverName,
        `XAA: OIDC discovery failed in silent refresh: ${l(o)}`,
      );
      return;
    }
    this._presented.record(r.clientSecret);
    try {
      let o = await me(
          this.serverConfig.url,
          {
            clientId: n,
            clientSecret: r.clientSecret,
            idpClientId: e.clientId,
            idpClientSecret: d,
            idpIdToken: t,
            idpTokenEndpoint: p.token_endpoint,
          },
          this.serverName,
        ),
        _ = la(this.serverName, this.serverConfig),
        h,
        v;
      try {
        h = await getSecureStorage().mutate((k) => {
          let w = k.mcpOAuth?.[_];
          return {
            ...k,
            mcpOAuth: {
              ...k.mcpOAuth,
              [_]: {
                ...w,
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                accessToken: o.access_token,
                refreshToken: o.refresh_token ?? w?.refreshToken,
                expiresAt:
                  o.expires_in != null
                    ? Date.now() + o.expires_in * 1000
                    : void 0,
                scope: o.scope,
                clientId: n,
                clientSecret: r.clientSecret,
                discoveryState: {
                  authorizationServerUrl: o.authorizationServerUrl,
                },
              },
            },
          };
        });
      } catch (k) {
        v = k;
      }
      return (
        this.logTokenPersistFailed(h, v),
        {
          access_token: o.access_token,
          token_type: "Bearer",
          expires_in: o.expires_in,
          scope: o.scope,
          refresh_token: o.refresh_token,
        }
      );
    } catch (o) {
      if (o instanceof q && o.shouldClearIdToken)
        (await clearIdpIdToken(e.issuer),
          logMCPDebug(this.serverName, "XAA: cleared id_token after exchange failure"));
      throw o;
    }
  }
  async redirectToAuthorization(e) {
    let t = this._pendingStepUpScope
        ? void 0
        : this.serverConfig.oauth?.scopes ||
          (this.serverConfig.oauth?.authServerMetadataUrl
            ? this.getCuratedMetadataScope()
            : void 0),
      n = e.searchParams.get("scope"),
      r = t ?? n;
    if (r !== n)
      logMCPDebug(
        this.serverName,
        `Overrode authorization scope from ${n ? redactParamValue("scope", n) : "NONE"} to configured: ${r ? redactParamValue("scope", r) : "NONE"}`,
      );
    let d = r === null ? null : apr(r, this._metadata);
    if (d !== null && d !== n) {
      if ((e.searchParams.set("scope", d), d !== t))
        logMCPDebug(this.serverName, "Appended offline_access to authorization scope");
    }
    let p = lpr(e),
      o = e.searchParams.getAll("prompt"),
      _ = p ? o.filter((M) => M !== "consent") : o;
    if (_.length !== o.length || _.length > 1) {
      if ((e.searchParams.delete("prompt"), _.length > 0))
        e.searchParams.set(
          "prompt",
          _.includes("consent") ? "consent" : _.at(-1),
        );
    }
    this._authorizationUrl = e.toString();
    let h = e.searchParams.get("scope");
    if (
      (logMCPDebug(this.serverName, `Authorization URL: ${F2n(e)}`),
      logMCPDebug(this.serverName, `Scopes in URL: ${h ? redactParamValue("scope", h) : "NOT FOUND"}`),
      h)
    )
      ((this._scopes = h),
        logMCPDebug(
          this.serverName,
          `Captured scopes from authorization URL: ${redactParamValue("scope", h)}`,
        ));
    else {
      let M = this.getCuratedMetadataScope();
      if (M)
        ((this._scopes = M),
          logMCPDebug(this.serverName, `Using scopes from metadata: ${redactParamValue("scope", M)}`));
      else logMCPDebug(this.serverName, "No scopes available from URL or metadata");
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let M = la(this.serverName, this.serverConfig),
        D = this._scopes,
        C = !1;
      try {
        await getSecureStorage().mutate((T) => {
          let I = T.mcpOAuth?.[M];
          if (!I) return T;
          return (
            (C = !0),
            { ...T, mcpOAuth: { ...T.mcpOAuth, [M]: { ...I, stepUpScope: D } } }
          );
        });
      } catch (T) {
        logMCPDebug(this.serverName, `step-up scope persist failed: ${l(T)}`);
      }
      if (C) logMCPDebug(this.serverName, `Persisted step-up scope: ${redactParamValue("scope", D)}`);
    }
    if (!this.handleRedirection) {
      logMCPDebug(this.serverName, "Redirection handling is disabled, skipping redirect");
      return;
    }
    let v = e.toString();
    if (!v.startsWith("http://") && !v.startsWith("https://"))
      throw Error(
        "Invalid authorization URL: must use http:// or https:// scheme",
      );
    logMCPDebug(this.serverName, "Redirecting to authorization URL");
    let k = F2n(e);
    if (
      (logMCPDebug(this.serverName, `Authorization URL: ${k}`),
      this.onAuthorizationUrlCallback)
    )
      this.onAuthorizationUrlCallback(v);
    if (this.skipBrowserOpen) {
      logMCPDebug(
        this.serverName,
        `Skipping browser open (skipBrowserOpen=true). URL: ${k}`,
      );
      return;
    }
    let w = isHeadlessEnvironment();
    if (w)
      logMCPDebug(
        this.serverName,
        `Skipping browser open (headless environment). URL: ${k}`,
      );
    else logMCPDebug(this.serverName, `Opening authorization URL: ${k}`);
    let E = w ? !1 : await tryOpenUrlInBrowser(v);
    if (
      (logEvent("tengu_mcp_oauth_browser_open", {
        success: E,
        headless: w,
        platform: fromEnum(getCurrentPlatform()),
      }),
      !w && !E)
    )
      logMCPDebug(
        this.serverName,
        "Browser didn't open automatically. URL is shown in UI.",
      );
  }
  async saveCodeVerifier(e) {
    (logMCPDebug(this.serverName, "Saving code verifier"), (this._codeVerifier = e));
  }
  async codeVerifier() {
    if (!this._codeVerifier)
      throw (
        logMCPDebug(this.serverName, "No code verifier saved"),
        Error("No code verifier saved")
      );
    return (
      logMCPDebug(this.serverName, "Returning code verifier"),
      this._presented.record(this._codeVerifier),
      this._codeVerifier
    );
  }
  async invalidateCredentials(e) {
    if (e === "verifier") {
      ((this._codeVerifier = void 0),
        logMCPDebug(this.serverName, "Invalidated credentials (scope: verifier)"));
      return;
    }
    let t = e,
      n = la(this.serverName, this.serverConfig),
      r = !1;
    try {
      let d = this._lastServedClientId,
        p = this._lastServedAccessToken,
        o = this._lastServedRefreshToken;
      await getSecureStorage().mutate((_) => {
        let h = _.mcpOAuth?.[n];
        if (!h) return _;
        let v = { ..._.mcpOAuth };
        switch (t) {
          case "all": {
            let k = p != null && !!h.accessToken && h.accessToken !== p,
              w = d != null && h.clientId != null && h.clientId !== d;
            if (k || w)
              return (
                logMCPDebug(
                  this.serverName,
                  `invalidateCredentials('all') preserved: ${k ? "foreign token" : "concurrent re-registration"}`,
                ),
                _
              );
            if (!h.clientId && !h.refreshToken && h.accessToken === "")
              return _;
            v[n] = {
              serverName: h.serverName,
              serverUrl: h.serverUrl,
              accessToken: "",
              ...(h.discoveryState && { discoveryState: h.discoveryState }),
              ...(h.stepUpScope && { stepUpScope: h.stepUpScope }),
            };
            break;
          }
          case "client":
            v[n] = { ...h, clientId: void 0, clientSecret: void 0 };
            break;
          case "tokens": {
            if (
              (o != null && h.refreshToken && h.refreshToken !== o) ||
              (p != null && !!h.accessToken && h.accessToken !== p)
            )
              return (
                logMCPDebug(
                  this.serverName,
                  "invalidateCredentials('tokens') preserved: concurrent rotation",
                ),
                _
              );
            v[n] = {
              ...h,
              accessToken: "",
              refreshToken: void 0,
              expiresAt: 0,
            };
            break;
          }
          case "discovery": {
            if (!h.discoveryState?.authorizationServerMetadata)
              return (
                logMCPDebug(
                  this.serverName,
                  "invalidateCredentials('discovery') preserved: concurrent URL-only re-save",
                ),
                _
              );
            v[n] = { ...h, discoveryState: void 0 };
            break;
          }
        }
        return ((r = !0), { ..._, mcpOAuth: v });
      });
    } catch (d) {
      logMCPDebug(this.serverName, `invalidateCredentials persist failed: ${l(d)}`);
    }
    if (r) logMCPDebug(this.serverName, `Invalidated credentials (scope: ${e})`);
  }
  async saveDiscoveryState(e) {
    if (e.authorizationServerMetadata)
      _ct({
        serverName: this.serverName,
        site: "sdk_auth",
        expectedIssuer: e.authorizationServerUrl,
        receivedIssuer: e.authorizationServerMetadata.issuer,
        serverConfig: this.serverConfig,
      });
    ((this._flowDiscoveryState = e), (this._flowDiscoveryStateAt = Date.now()));
    let t = la(this.serverName, this.serverConfig);
    logMCPDebug(
      this.serverName,
      `Saving discovery state (authServer: ${redactUrl(e.authorizationServerUrl)})`,
    );
    try {
      await getSecureStorage().mutate((n) => ({
        ...n,
        mcpOAuth: {
          ...n.mcpOAuth,
          [t]: {
            ...n.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: n.mcpOAuth?.[t]?.accessToken || "",
            expiresAt: n.mcpOAuth?.[t]?.expiresAt,
            discoveryState: {
              authorizationServerUrl: e.authorizationServerUrl,
              resourceMetadataUrl: e.resourceMetadataUrl,
              oauthMetadataFound: !!e.authorizationServerMetadata,
            },
          },
        },
      }));
    } catch (n) {
      logMCPDebug(this.serverName, `saveDiscoveryState persist failed: ${l(n)}`);
    }
  }
  servePolicyCheckedDiscoveryState(e) {
    if (e?.authorizationServerMetadata && e.authorizationServerUrl)
      try {
        _ct({
          serverName: this.serverName,
          site: "persisted_state",
          expectedIssuer: e.authorizationServerUrl,
          receivedIssuer: e.authorizationServerMetadata.issuer,
          serverConfig: this.serverConfig,
        });
      } catch (t) {
        if (t instanceof iI && this._flowDiscoveryState === e)
          ((this._flowDiscoveryState = void 0),
            (this._flowDiscoveryStateAt = 0));
        throw t;
      }
    return e;
  }
  async discoveryState() {
    let e = this.serverConfig.oauth?.authServerMetadataUrl;
    if (e) {
      logMCPDebug(this.serverName, `Fetching metadata from configured URL: ${redactUrl(e)}`);
      try {
        let o = await he(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: e,
        });
        if (o) {
          let _ = {
            authorizationServerUrl: o.issuer,
            authorizationServerMetadata: o,
          };
          return (
            (this._flowDiscoveryState = _),
            this.servePolicyCheckedDiscoveryState(_)
          );
        }
      } catch (o) {
        logMCPDebug(
          this.serverName,
          `Failed to fetch from configured metadata URL: ${formatMcpSdkError(o, this.serverConfig.url)}`,
        );
      }
      return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    }
    if (
      this._flowDiscoveryState &&
      Date.now() - this._flowDiscoveryStateAt < Re
    )
      return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    let t = this._flowDiscoveryStateAt,
      r = await getSecureStorage().readAsync();
    if (
      this._flowDiscoveryState &&
      this._flowDiscoveryStateAt !== t &&
      Date.now() - this._flowDiscoveryStateAt < Re
    )
      return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    let d = la(this.serverName, this.serverConfig),
      p = r?.mcpOAuth?.[d]?.discoveryState;
    if (p?.authorizationServerUrl) {
      logMCPDebug(
        this.serverName,
        `Returning cached discovery state (authServer: ${redactUrl(p.authorizationServerUrl)})`,
      );
      let o = {
        authorizationServerUrl: p.authorizationServerUrl,
        resourceMetadataUrl: p.resourceMetadataUrl,
        resourceMetadata: p.resourceMetadata,
        authorizationServerMetadata: p.authorizationServerMetadata,
      };
      try {
        this.servePolicyCheckedDiscoveryState(o);
      } catch (_) {
        if (_ instanceof iI) {
          if (
            (await this.invalidateCredentials("discovery").catch(() => {}),
            this._flowDiscoveryStateAt === t)
          )
            ((this._flowDiscoveryState = void 0),
              (this._flowDiscoveryStateAt = 0));
        }
        throw _;
      }
      return (this._flowDiscoveryState = o);
    }
    return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
  }
  async refreshAuthorization(e) {
    let t = la(this.serverName, this.serverConfig),
      n = getSecureStorageDir();
    await ae().mkdir(n);
    let r = t.replace(/[^a-zA-Z0-9]/g, "_"),
      d = et(n, `mcp-refresh-${r}.lock`),
      p;
    for (let o = 0; o < ge; o++)
      try {
        (logMCPDebug(this.serverName, `Acquiring refresh lock (attempt ${o + 1})`),
          (p = await Cs(d, {
            realpath: !1,
            stale: 60000,
            update: 5000,
            onCompromised: () => {
              logMCPDebug(this.serverName, "Refresh lock was compromised");
            },
          })),
          logMCPDebug(this.serverName, "Acquired refresh lock"));
        break;
      } catch (_) {
        let h = A(_);
        if (h === "ELOCKED") {
          (logMCPDebug(
            this.serverName,
            `Refresh lock held by another process, waiting (attempt ${o + 1}/${ge})`,
          ),
            await sleep(1000 + Math.random() * 1000));
          continue;
        }
        logMCPDebug(
          this.serverName,
          `Failed to acquire refresh lock: ${h}; skipping refresh`,
        );
        return;
      }
    if (!p) {
      logMCPDebug(
        this.serverName,
        `Could not acquire refresh lock after ${ge} retries; skipping refresh`,
      );
      return;
    }
    try {
      invalidateKeychainCache();
      let h = (await getSecureStorage().readAsync())?.mcpOAuth?.[t];
      if (h) {
        let v =
          h.expiresAt != null ? (h.expiresAt - Date.now()) / 1000 : void 0;
        if (h.accessToken && (v == null || v > 300))
          return (
            logMCPDebug(
              this.serverName,
              v != null
                ? `Another process already refreshed tokens (expires in ${Math.floor(v)}s)`
                : "Another process already refreshed tokens (no expiration)",
            ),
            {
              access_token: h.accessToken,
              refresh_token: h.refreshToken,
              expires_in: v,
              scope: h.scope,
              token_type: "Bearer",
            }
          );
        if (h.refreshToken)
          ((e = h.refreshToken),
            (this._lastServedRefreshToken = h.refreshToken),
            this._presented.record(h.refreshToken));
      }
      return await this._doRefresh(e);
    } finally {
      if (p)
        try {
          (await p(), logMCPDebug(this.serverName, "Released refresh lock"));
        } catch {
          logMCPDebug(this.serverName, "Failed to release refresh lock");
        }
    }
  }
  async readConcurrentRefreshWinner() {
    invalidateKeychainCache();
    let t = (await getSecureStorage().readAsync())?.mcpOAuth?.[
        la(this.serverName, this.serverConfig)
      ],
      n = t?.expiresAt != null ? (t.expiresAt - Date.now()) / 1000 : void 0;
    if (t?.accessToken && (n == null || n > 300)) {
      logMCPDebug(this.serverName, "Another process landed fresh tokens; using those");
      let r = {
        access_token: t.accessToken,
        refresh_token: t.refreshToken,
        expires_in: n,
        scope: t.scope,
        token_type: "Bearer",
      };
      return { tokenData: t, freshTokens: r };
    }
    return { tokenData: t, freshTokens: void 0 };
  }
  async _doRefresh(e) {
    this._presented.record(e);
    let t = 3,
      n = Fg(this.serverConfig),
      r = (d, p) => {
        logEvent(
          d === "success"
            ? "tengu_mcp_oauth_refresh_success"
            : "tengu_mcp_oauth_refresh_failure",
          {
            transportType: fromEnum(this.serverConfig.type),
            ...(n && { mcpServerBaseUrl: n }),
            ...(p && { reason: fromEnum(p) }),
          },
        );
      };
    for (let d = 1; d <= t; d++) {
      let p;
      try {
        logMCPDebug(this.serverName, "Starting token refresh");
        let o = bLt(),
          _ = ue() ? "enforce" : "observe",
          h = this._metadataEchoMode === _ ? this._metadata : void 0;
        if (!h) {
          let k = await this.discoveryState();
          if (k?.authorizationServerMetadata) h = k.authorizationServerMetadata;
          else if (k?.authorizationServerUrl) {
            logMCPDebug(
              this.serverName,
              `Re-discovering metadata from persisted auth server URL: ${redactUrl(k.authorizationServerUrl)}`,
            );
            let w = k.authorizationServerUrl;
            if (
              ((h = await GIe(w, { fetchFn: o, skipIssuerValidation: !0 })), h)
            )
              _ct({
                serverName: this.serverName,
                site: "refresh_rediscovery",
                expectedIssuer: w,
                receivedIssuer: h.issuer,
                serverConfig: this.serverConfig,
              });
          }
        }
        if (!h)
          h = await he(this.serverName, this.serverConfig.url, {
            configuredMetadataUrl:
              this.serverConfig.oauth?.authServerMetadataUrl,
            fetchFn: o,
            serverConfigForAnalytics: this.serverConfig,
          });
        if (!h) {
          (logMCPDebug(this.serverName, "Failed to discover OAuth metadata"),
            r("failure", "metadata_discovery_failed"),
            logFeatureBad("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed"));
          return;
        }
        if (
          ((this._metadata = h),
          (this._metadataEchoMode = ue() ? "enforce" : "observe"),
          (p = await this.clientInformation()),
          !p)
        ) {
          (logMCPDebug(this.serverName, "No client information available"),
            r("failure", "no_client_info"),
            logFeatureBad("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info"));
          return;
        }
        let v = await $rn(new URL(this.serverConfig.url), {
          metadata: h,
          clientInformation: p,
          refreshToken: e,
          resource: new URL(this.serverConfig.url),
          fetchFn: o,
        });
        if (v)
          return (
            logMCPDebug(this.serverName, "Token refresh successful"),
            await this.saveTokens(v),
            r("success"),
            logFeatureOk("mcp_oauth_refresh"),
            v
          );
        (logMCPDebug(this.serverName, "Token refresh returned no tokens"),
          r("failure", "no_tokens_returned"),
          logFeatureBad("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens"));
        return;
      } catch (o) {
        if (o instanceof iI) {
          (logMCPDebug(
            this.serverName,
            `Token refresh denied by issuer-echo policy: ${l(o)}`,
          ),
            r("failure", "issuer_echo_denied"),
            logFeatureBad("mcp_oauth_refresh", "mcp_oauth_refresh_issuer_echo_denied"));
          return;
        }
        if (o instanceof aI && o.code === l2.InvalidGrant) {
          logMCPDebug(
            this.serverName,
            `Token refresh failed with invalid_grant: ${o.message}`,
          );
          let { freshTokens: E } = await this.readConcurrentRefreshWinner();
          if (E)
            return (
              logFeatureSad("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"),
              E
            );
          (logMCPDebug(
            this.serverName,
            "No valid tokens in storage, clearing stored tokens",
          ),
            r("failure", "invalid_grant"),
            logFeatureBad("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"),
            await this.invalidateCredentials("tokens"),
            authLostEmitter.emit(this.serverName));
          return;
        }
        if (
          o instanceof aI &&
          (o.code === "invalid_client" || o.code === "unauthorized_client")
        ) {
          logMCPDebug(
            this.serverName,
            "Token refresh failed: DCR client expired or invalid; clearing stored client registration",
          );
          let { tokenData: E, freshTokens: M } =
            await this.readConcurrentRefreshWinner();
          if (M)
            return (
              logFeatureSad("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"),
              M
            );
          if (E?.clientId && p && E.clientId !== p.client_id) {
            (logMCPDebug(
              this.serverName,
              "Another process re-registered client; preserving",
            ),
              r("failure", "concurrent_reregister"),
              logFeatureSad(
                "mcp_oauth_refresh",
                "mcp_oauth_refresh_concurrent_reregister",
              ));
            return;
          }
          (r(
            "failure",
            o.code === "unauthorized_client"
              ? "unauthorized_client"
              : "invalid_client",
          ),
            logFeatureBad(
              "mcp_oauth_refresh",
              o.code === "unauthorized_client"
                ? "mcp_oauth_refresh_unauthorized_client"
                : "mcp_oauth_refresh_invalid_client",
            ),
            await this.invalidateCredentials("all"),
            authLostEmitter.emit(this.serverName));
          return;
        }
        if (ve(o)) {
          (logMCPDebug(
            this.serverName,
            `Token refresh failed: token response rejected by SDK schema: ${l(o)}`,
          ),
            r("failure", "token_response_schema_rejected"),
            logFeatureBad(
              "mcp_oauth_refresh",
              "mcp_oauth_refresh_token_response_schema_rejected",
            ));
          return;
        }
        let _ = o instanceof Rde,
          h =
            o instanceof Error &&
            /timeout|timed out|etimedout|econnreset/i.test(o.message),
          v =
            o instanceof aI &&
            (o.code === l2.ServerError ||
              o.code === l2.TemporarilyUnavailable ||
              o.code === l2.TooManyRequests ||
              !ot.has(o.code)),
          k = h || v || _;
        if (!k || d >= t) {
          (logMCPDebug(
            this.serverName,
            `Token refresh failed: ${formatMcpSdkError(o, this.serverConfig.url)}`,
          ),
            r("failure", k ? "transient_retries_exhausted" : "request_failed"),
            logFeatureBad("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed"));
          return;
        }
        let w = 1000 * Math.pow(2, d - 1);
        (logMCPDebug(
          this.serverName,
          `Token refresh failed, retrying in ${w}ms (attempt ${d}/${t})`,
        ),
          await sleep(w));
      }
    }
    return;
  }
}
async function chr() {
  let e = process.env.MCP_CLIENT_SECRET;
  if (e) return e;
  if (!process.stdin.isTTY)
    throw Error(
      "No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead.",
    );
  return new Promise((t, n) => {
    (process.stderr.write("Enter OAuth client secret: "),
      process.stdin.setRawMode?.(!0));
    let r = "",
      d = (p) => {
        let o = p.toString();
        if (
          o ===
            `
` ||
          o === "\r"
        )
          (process.stdin.setRawMode?.(!1),
            process.stdin.removeListener("data", d),
            process.stderr.write(`
`),
            t(r));
        else if (o === "\x03")
          (process.stdin.setRawMode?.(!1),
            process.stdin.removeListener("data", d),
            n(Error("Cancelled")));
        else if (o === "\x7F" || o === "\b") r = r.slice(0, -1);
        else r += o;
      };
    process.stdin.on("data", d);
  });
}
async function uhr(e, t, n) {
  let r = la(e, t);
  try {
    return await getSecureStorage().mutate((d) => ({
      ...d,
      mcpOAuthClientConfig: {
        ...d.mcpOAuthClientConfig,
        [r]: { clientSecret: n },
      },
    }));
  } catch (d) {
    return { success: !1, warning: l(d) };
  }
}
async function dhr(e, t) {
  let n = la(e, t);
  await getSecureStorage().mutate((r) => {
    if (!r.mcpOAuthClientConfig?.[n]) return r;
    let d = { ...r.mcpOAuthClientConfig };
    return (delete d[n], { ...r, mcpOAuthClientConfig: d });
  });
}
async function B2n(e, t) {
  let r = await getSecureStorage().readAsync(),
    d = la(e, t);
  return r?.mcpOAuthClientConfig?.[d];
}
function Ne(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string")
    return e.default_scope;
  return;
}
function apr(e, t) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!t?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`;
}
var mt = [
    "login.microsoftonline.com",
    "login.microsoftonline.us",
    "login.partner.microsoftonline.cn",
    "login.chinacloudapi.cn",
  ],
  gt = [".b2clogin.com", ".ciamlogin.com"];
function lpr(e) {
  try {
    let t = (typeof e === "string" ? new URL(e) : e).hostname;
    return mt.includes(t) || gt.some((n) => t.endsWith(n));
  } catch {
    return !1;
  }
}
export {
  spr,
  ipr,
  F2n,
  $2n,
  bLt,
  iI,
  _ct,
  q3e,
  nhr,
  rhr,
  ohr,
  wLt,
  shr,
  ihr,
  ahr,
  U2n,
  lhr,
  yct,
  z3e,
  chr,
  uhr,
  dhr,
  B2n,
  apr,
  lpr,
};
