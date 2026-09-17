// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  OAuthMetadataSchema,
  OAuthTokensSchema,
  OAuthErrorResponseSchema,
  OAuthError,
  InvalidGrantError,
  ServerError,
  TemporarilyUnavailableError,
  TooManyRequestsError,
  auth,
  discoverOAuthProtectedResourceMetadata,
  discoverAuthorizationServerMetadata,
  discoverOAuthServerInfo,
  refreshAuthorization,
} from "./oauth-client.js";
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { sleep } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { MCP_CLIENT_METADATA_URL } from "./chunk-9g2q4bjq.js";
import { yt, R, l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum, fromNumberOpt } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { jsonStringify, jsonParse, getFsSurface } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logMCPDebug } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Cs } from "../../00-第三方库/graceful-fs/chunk-8fpdwg2e.js";
import { getProxyFetchOptions } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { SECURE_STORAGE_READ_FAILED_SENTINEL, getSecureStorage } from "./secure-storage.js";
import { getSecureStorageDir, invalidateKeychainCache } from "./keychain-access.js";
import { SR, UH, tf } from "../../00-第三方库/@anthropic-ai/sdk/chunk-k58dgrhz.js";
import { getMcpClientState } from "./chunk-wk0e3dz4.js";
import { authLostEmitter } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-event-emitters.js";
import { sanitizeAnalyticsId } from "../../03-入口与运行时/CLI入口-Commander/startup-profiler.js";
import { isXaaEnabled, getXaaIdpConfig, readSecureStorageResilient, getMcpOAuthCredentialKey } from "./认证-OAuth登录.419zdfz3.js";
import { getPresentedCredentialLog, encodeBasicAuth, evictMemoizedDiscoveryCachePaths } from "../MCP客户端/mcp-discovery-cache.js";
import { McpCredentialStoreUnavailableError, MCP_DOWNSTREAM_UNREACHABLE_CODES, getMcpServerBaseUrl } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { renderOAuthCallbackPage, buildOAuthCallbackUrl, pickOAuthCallbackPort } from "./oauth-callback.js";
import { redactHeaders, redactSearchParams, redactParamValue, redactUrl, formatMcpSdkError, rethrowFetchError } from "./url-and-error-redaction.js";
import { getCachedIdpIdToken, clearIdpIdToken, getIdpClientSecret, discoverOidc, acquireIdpIdToken } from "./xaa-idp-auth.js";
import { isHeadlessEnvironment, tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import { createCoercedZodNumber } from "../../01-核心基础设施/核心工具-类型与数值/zod-helpers.js";
import { s, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { randomBytes, randomUUID } from "crypto";
import { createServer } from "http";
import { join as Ge } from "path";
import { parse } from "url";
var $e = 30000,
  xe = "urn:ietf:params:oauth:grant-type:token-exchange",
  we = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  Ae = "urn:ietf:params:oauth:token-type:id-jag",
  Ne = "urn:ietf:params:oauth:token-type:id_token";
function ye(e) {
  return (t, r) => {
    let n = AbortSignal.timeout($e),
      d = e ? AbortSignal.any([n, e]) : n;
    return fetch(t, { ...r, ...getProxyFetchOptions({ url: String(t) }), signal: d }).catch((p) =>
      rethrowFetchError(p, t),
    );
  };
}
var oe = ye();
function se(e) {
  try {
    return new URL(e).href.replace(/\/$/, "");
  } catch {
    return e.replace(/\/$/, "");
  }
}
class W extends Error {
  shouldClearIdToken;
  constructor(e, t) {
    super(e);
    ((this.name = "XaaTokenExchangeError"), (this.shouldClearIdToken = t));
  }
}
var Fe =
  /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
function ne(e) {
  return (typeof e === "string" ? e : jsonStringify(e)).replace(
    Fe,
    (r, n) => `"${n}":"[REDACTED]"`,
  );
}
var Le = createLazyValue(() =>
    c({
      access_token: s().optional(),
      issued_token_type: s().optional(),
      expires_in: createCoercedZodNumber().optional(),
      scope: s().optional(),
    }),
  ),
  ze = createLazyValue(() =>
    c({
      access_token: s().min(1),
      token_type: s().default("Bearer"),
      expires_in: createCoercedZodNumber().optional(),
      scope: s().optional(),
      refresh_token: s().optional(),
    }),
  );
async function De(e, t) {
  let r;
  try {
    r = await discoverOAuthProtectedResourceMetadata(e, void 0, t?.fetchFn ?? oe);
  } catch (n) {
    if (yt(n)) throw n;
    let d = n instanceof Error ? /^HTTP (\d{3}) /.exec(n.message)?.[1] : void 0;
    throw Error(
      `XAA: PRM discovery failed for ${redactUrl(e)} (${d ? `HTTP ${d}` : n instanceof Error ? n.name : typeof n})`,
    );
  }
  if (!r.resource || !r.authorization_servers?.[0])
    throw Error(
      "XAA: PRM discovery failed: PRM missing resource or authorization_servers",
    );
  if (se(r.resource) !== se(e))
    throw Error(
      `XAA: PRM discovery failed: PRM resource mismatch: expected ${redactUrl(e)}, got ${redactUrl(r.resource)}`,
    );
  return {
    resource: r.resource,
    authorization_servers: r.authorization_servers,
  };
}
async function Xe(e, t) {
  let r;
  try {
    r = await discoverAuthorizationServerMetadata(e, { fetchFn: t?.fetchFn ?? oe });
  } catch (n) {
    if (yt(n)) throw n;
    let d = n instanceof Error ? /^HTTP (\d{3}) /.exec(n.message)?.[1] : void 0;
    throw new R(
      `XAA: AS metadata discovery failed (${d ? `HTTP ${d}` : n instanceof Error ? n.name : typeof n})`,
      "XAA: AS metadata discovery failed",
    );
  }
  if (!r?.issuer || !r.token_endpoint)
    throw Error(
      `XAA: AS metadata discovery failed: no valid metadata at ${redactUrl(e)}`,
    );
  if (se(r.issuer) !== se(e))
    throw Error(
      `XAA: AS metadata discovery failed: issuer mismatch: expected ${redactUrl(e)}, got ${redactUrl(r.issuer)}`,
    );
  if (
    !URL.canParse(r.token_endpoint) ||
    new URL(r.token_endpoint).protocol !== "https:"
  )
    throw Error(
      `XAA: refusing non-HTTPS token endpoint: ${redactUrl(r.token_endpoint)}`,
    );
  return {
    issuer: r.issuer,
    token_endpoint: r.token_endpoint,
    grant_types_supported: r.grant_types_supported,
    token_endpoint_auth_methods_supported:
      r.token_endpoint_auth_methods_supported,
  };
}
async function He(e) {
  let t = e.fetchFn ?? oe,
    r = new URLSearchParams({
      grant_type: xe,
      requested_token_type: Ae,
      audience: e.audience,
      resource: e.resource,
      subject_token: e.idToken,
      subject_token_type: Ne,
      client_id: e.clientId,
    });
  if (e.clientSecret) r.set("client_secret", e.clientSecret);
  if (e.scope) r.set("scope", e.scope);
  let n = await t(e.tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: r,
  });
  if (!n.ok) {
    let _ = ne(await n.text()).slice(0, 200),
      h = n.status < 500;
    throw new W(`XAA: token exchange failed: HTTP ${n.status}: ${_}`, h);
  }
  let d;
  try {
    d = await n.json();
  } catch {
    throw new W(
      `XAA: token exchange returned non-JSON (captive portal?) at ${redactUrl(e.tokenEndpoint)}`,
      !1,
    );
  }
  let p = Le().safeParse(d);
  if (!p.success)
    throw new W(
      `XAA: token exchange response did not match expected shape: ${ne(d)}`,
      !0,
    );
  let o = p.data;
  if (!o.access_token)
    throw new W(
      `XAA: token exchange response missing access_token: ${ne(o)}`,
      !0,
    );
  if (o.issued_token_type !== Ae)
    throw new W(
      `XAA: token exchange returned unexpected issued_token_type: ${o.issued_token_type}`,
      !0,
    );
  return {
    jwtAuthGrant: o.access_token,
    expiresIn: o.expires_in,
    scope: o.scope,
  };
}
async function je(e) {
  let t = e.fetchFn ?? oe,
    r = e.authMethod ?? "client_secret_basic",
    n = new URLSearchParams({ grant_type: we, assertion: e.assertion });
  if (e.scope) n.set("scope", e.scope);
  let d = { "Content-Type": "application/x-www-form-urlencoded" };
  if (r === "client_secret_basic") {
    let h = Buffer.from(
      `${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`,
    ).toString("base64");
    ((d.Authorization = `Basic ${h}`), getPresentedCredentialLog().record(h));
  } else
    (n.set("client_id", e.clientId), n.set("client_secret", e.clientSecret));
  (getPresentedCredentialLog().record(e.clientSecret), getPresentedCredentialLog().record(e.assertion));
  let p = await t(e.tokenEndpoint, { method: "POST", headers: d, body: n });
  if (!p.ok) {
    let h = ne(await p.text()).slice(0, 200);
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
  let _ = ze().safeParse(o);
  if (!_.success)
    throw Error(
      `XAA: jwt-bearer response did not match expected shape: ${ne(o)}`,
    );
  return _.data;
}
async function he(e, t, r = "xaa", n) {
  let d = ye(n);
  logMCPDebug(r, `XAA: discovering PRM for ${redactUrl(e)}`);
  let p = await De(e, { fetchFn: d });
  logMCPDebug(
    r,
    `XAA: discovered resource=${redactUrl(p.resource)} ASes=[${p.authorization_servers.map(redactUrl).join(", ")}]`,
  );
  let o,
    _ = [];
  for (let w of p.authorization_servers) {
    let E;
    try {
      E = await Xe(w, { fetchFn: d });
    } catch (M) {
      if (n?.aborted) throw M;
      _.push(`${redactUrl(w)}: ${M instanceof Error ? M.message : String(M)}`);
      continue;
    }
    if (E.grant_types_supported && !E.grant_types_supported.includes(we)) {
      _.push(
        `${redactUrl(w)}: does not advertise jwt-bearer grant (supported: ${E.grant_types_supported.join(", ")})`,
      );
      continue;
    }
    o = E;
    break;
  }
  if (!o)
    throw new R(
      `XAA: no authorization server supports jwt-bearer. Tried: ${_.join("; ")}`,
      `XAA: no authorization server supports jwt-bearer (tried ${p.authorization_servers.length})`,
    );
  let h = o.token_endpoint_auth_methods_supported,
    k =
      h &&
      !h.includes("client_secret_basic") &&
      h.includes("client_secret_post")
        ? "client_secret_post"
        : "client_secret_basic";
  (logMCPDebug(
    r,
    `XAA: AS issuer=${redactUrl(o.issuer)} token_endpoint=${redactUrl(o.token_endpoint)} auth_method=${k}`,
  ),
    logMCPDebug(r, "XAA: exchanging id_token for ID-JAG at IdP"));
  let v = await He({
    tokenEndpoint: t.idpTokenEndpoint,
    audience: o.issuer,
    resource: p.resource,
    idToken: t.idpIdToken,
    clientId: t.idpClientId,
    clientSecret: t.idpClientSecret,
    fetchFn: d,
  });
  (logMCPDebug(r, "XAA: ID-JAG obtained"),
    logMCPDebug(r, "XAA: exchanging ID-JAG for access_token at AS"));
  let C = await je({
    tokenEndpoint: o.token_endpoint,
    assertion: v.jwtAuthGrant,
    clientId: t.clientId,
    clientSecret: t.clientSecret,
    authMethod: k,
    fetchFn: d,
  });
  return (
    logMCPDebug(r, "XAA: access_token obtained"),
    { ...C, authorizationServerUrl: o.issuer }
  );
}
var Je = 30000,
  Ve = 500,
  Ye = new Set([...UH, ...SR, "ETIMEDOUT"]);
function Ze(e) {
  if (yt(e)) return !0;
  if (e instanceof Error && e.name === "TimeoutError") return !0;
  let t = tf(e);
  return t !== null && Ye.has(t.code);
}
function pe(e) {
  let t = e;
  return (
    (t?.name === "ZodError" || t?.name === "$ZodError") &&
    Array.isArray(t?.issues)
  );
}
function classifySdkAuthFailure(e, t) {
  let r =
    t instanceof Error
      ? `${e}
${t.message}`
      : e;
  if (
    r.includes("dynamic client registration") ||
    (t instanceof OAuthError && t.errorCode === "invalid_client_metadata")
  )
    return "dcr_failed";
  if (
    (r.includes("trying to load") && r.includes("metadata")) ||
    r.includes("Incompatible auth server")
  )
    return "discovery_failed";
  if (t instanceof OAuthError) return "dcr_rejected";
  let n = A(t) ?? A(t instanceof Error ? t.cause : void 0);
  if (n && MCP_DOWNSTREAM_UNREACHABLE_CODES.has(n)) return "network_failed";
  return "sdk_auth_failed";
}
var fe = 5;
function authorizationUrlForDebugLog(e) {
  return redactUrl(e.origin + e.pathname) + redactSearchParams(e);
}
var Qe = new Set([
  "invalid_refresh_token",
  "expired_refresh_token",
  "token_expired",
]);
async function normalizeOAuthErrorBody(e) {
  if (!e.ok) return e;
  let t = await e.text(),
    r;
  try {
    r = jsonParse(t);
  } catch {
    return new Response(t, e);
  }
  if (OAuthTokensSchema.safeParse(r).success) return new Response(t, e);
  let n = OAuthErrorResponseSchema.safeParse(r);
  if (!n.success) return new Response(t, e);
  let d = Qe.has(n.data.error)
    ? {
        error: "invalid_grant",
        error_description:
          n.data.error_description ??
          `Server returned non-standard error code: ${n.data.error}`,
      }
    : n.data;
  return new Response(jsonStringify(d), {
    status: 400,
    statusText: "Bad Request",
    headers: e.headers,
  });
}
function createAuthFetch() {
  return async (e, t) => {
    try {
      return await Te(e, t);
    } catch (r) {
      if (t?.signal?.aborted || !Ze(r)) throw r;
      return (await sleep(Ve, t?.signal ?? void 0), await Te(e, t));
    }
  };
}
async function Te(e, t) {
  let r = AbortSignal.timeout(Je),
    n = t?.method?.toUpperCase() === "POST",
    d = getProxyFetchOptions({ url: String(e) });
  if (!t?.signal) {
    let h;
    try {
      h = await fetch(e, { ...t, ...d, signal: r });
    } catch (k) {
      rethrowFetchError(k, e);
    }
    return n ? normalizeOAuthErrorBody(h) : h;
  }
  let p = new AbortController(),
    o = () => p.abort();
  (t.signal.addEventListener("abort", o), r.addEventListener("abort", o));
  let _ = () => {
    (t.signal?.removeEventListener("abort", o),
      r.removeEventListener("abort", o));
  };
  if (t.signal.aborted) p.abort();
  try {
    let h = await fetch(e, { ...t, ...d, signal: p.signal });
    return (_(), n ? normalizeOAuthErrorBody(h) : h);
  } catch (h) {
    (_(), rethrowFetchError(h, e));
  }
}
async function ce(e, t, r) {
  let {
      configuredMetadataUrl: n,
      fetchFn: d,
      resourceMetadataUrl: p,
    } = r ?? {},
    o = d ?? createAuthFetch();
  if (n) {
    if (!n.startsWith("https://"))
      throw Error(`authServerMetadataUrl must use https:// (got: ${redactUrl(n)})`);
    let h = await o(n, { headers: { Accept: "application/json" } });
    if (h.ok) {
      let k;
      try {
        k = await h.json();
      } catch {
        throw Error(
          `Configured auth server metadata at ${redactUrl(n)} is not valid JSON`,
        );
      }
      return OAuthMetadataSchema.parse(k);
    }
    throw Error(
      `HTTP ${h.status} fetching configured auth server metadata from ${redactUrl(n)}`,
    );
  }
  try {
    let { authorizationServerMetadata: h } = await discoverOAuthServerInfo(t, {
      fetchFn: o,
      ...(p && { resourceMetadataUrl: p }),
    });
    if (h) return h;
  } catch (h) {
    logMCPDebug(e, `RFC 9728 discovery failed, falling back: ${formatMcpSdkError(h, t)}`);
  }
  let _ = new URL(t);
  if (_.pathname === "/") return;
  try {
    return await discoverAuthorizationServerMetadata(_, { fetchFn: o });
  } catch (h) {
    logMCPDebug(e, `Path-aware auth server discovery failed: ${formatMcpSdkError(h, t)}`);
    return;
  }
}
class AuthenticationCancelledError extends Error {
  constructor() {
    super("Authentication was cancelled");
    this.name = "AuthenticationCancelledError";
  }
}
function _e(e) {
  try {
    let t = new URL(e);
    return `${t.protocol}//${t.hostname}`;
  } catch {
    return e;
  }
}
function Oe(e) {
  let t = _e(e);
  return t === "http://127.0.0.1" || t === "http://localhost";
}
function Re() {
  return a.MCP_OAUTH_CLIENT_METADATA_URL || MCP_CLIENT_METADATA_URL;
}
function Ce(e) {
  if (!Oe(e)) return !1;
  try {
    return new URL(e).pathname === "/callback";
  } catch {
    return !1;
  }
}
function et(e) {
  return e !== void 0 && (e === MCP_CLIENT_METADATA_URL || e === Re());
}
function getOAuthCallbackSubmitter(e) {
  return getMcpClientState().oauthCallbackSubmitters.get(e);
}
function setActiveOAuthPromise(e, t) {
  let r = getMcpClientState().activeOAuthFlows;
  (r.set(e, t),
    t
      .finally(() => {
        if (r.get(e) === t) r.delete(e);
      })
      .catch(() => {}));
}
function getActiveOAuthPromise(e) {
  return getMcpClientState().activeOAuthFlows.get(e);
}
async function clearMcpOAuthStubIfTokenless(e, t) {
  let r = getMcpOAuthCredentialKey(e, t),
    n = (await getSecureStorage().readAsync())?.mcpOAuth?.[r];
  if (!n || n.accessToken || n.refreshToken) return;
  try {
    await getSecureStorage().mutate((d) => {
      let p = d.mcpOAuth?.[r];
      if (!p || p.accessToken || p.refreshToken) return d;
      let o = { ...d.mcpOAuth };
      return (delete o[r], { ...d, mcpOAuth: o });
    });
  } catch (d) {
    logMCPDebug(e, `clear tokenless stub failed: ${l(d)}`);
  }
}
async function Ue({
  serverName: e,
  endpoint: t,
  token: r,
  tokenTypeHint: n,
  clientId: d,
  clientSecret: p,
  accessToken: o,
  authMethod: _ = "client_secret_basic",
}) {
  let h = new URLSearchParams();
  (h.set("token", r), h.set("token_type_hint", n));
  let k = { "Content-Type": "application/x-www-form-urlencoded" };
  if (d && p)
    if (_ === "client_secret_post")
      (h.set("client_id", d), h.set("client_secret", p));
    else {
      let v = Buffer.from(
        `${encodeURIComponent(d)}:${encodeURIComponent(p)}`,
      ).toString("base64");
      ((k.Authorization = `Basic ${v}`), getPresentedCredentialLog().record(v));
    }
  else if (d) h.set("client_id", d);
  else logMCPDebug(e, `No client_id available for ${n} revocation - server may reject`);
  try {
    (await at.post(t, h, { headers: k }), logMCPDebug(e, `Successfully revoked ${n}`));
  } catch (v) {
    if (at.isAxiosError(v) && v.response?.status === 401 && o)
      (logMCPDebug(e, `Got 401, retrying ${n} revocation with Bearer auth`),
        h.delete("client_id"),
        h.delete("client_secret"),
        await at.post(t, h, {
          headers: { ...k, Authorization: `Bearer ${o}` },
        }),
        logMCPDebug(e, `Successfully revoked ${n} with Bearer auth`));
    else throw v;
  }
}
async function snapshotServerTokens(e, t) {
  let n = (await getSecureStorage().readAsync())?.mcpOAuth?.[getMcpOAuthCredentialKey(e, t)];
  if (!n?.accessToken && !n?.refreshToken) return;
  return {
    accessToken: n.accessToken || void 0,
    refreshToken: n.refreshToken,
    clientId: n.clientId,
    clientSecret: n.clientSecret,
    ...(n.discoveryState && {
      discoveryState: {
        authorizationServerUrl: n.discoveryState.authorizationServerUrl,
      },
    }),
  };
}
async function Ie(e, t, r) {
  let n = getPresentedCredentialLog();
  (n.record(r.accessToken), n.record(r.refreshToken), n.record(r.clientSecret));
  let d;
  try {
    let p = r.discoveryState?.authorizationServerUrl ?? t.url,
      o = await ce(e, p, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
      });
    if (!o) (logMCPDebug(e, "No OAuth metadata found"), (d = "no_metadata"));
    else {
      let _ = "revocation_endpoint" in o ? o.revocation_endpoint : null;
      if (!_)
        (logMCPDebug(e, "Server does not support token revocation"),
          (d = "no_revocation_endpoint"));
      else {
        let h = String(_),
          k =
            ("revocation_endpoint_auth_methods_supported" in o
              ? o.revocation_endpoint_auth_methods_supported
              : void 0) ??
            ("token_endpoint_auth_methods_supported" in o
              ? o.token_endpoint_auth_methods_supported
              : void 0),
          v =
            k &&
            !k.includes("client_secret_basic") &&
            k.includes("client_secret_post")
              ? "client_secret_post"
              : "client_secret_basic";
        if ((logMCPDebug(e, `Revoking tokens via ${redactUrl(h)} (${v})`), r.refreshToken))
          try {
            await Ue({
              serverName: e,
              endpoint: h,
              token: r.refreshToken,
              tokenTypeHint: "refresh_token",
              clientId: r.clientId,
              clientSecret: r.clientSecret,
              accessToken: r.accessToken,
              authMethod: v,
            });
          } catch (C) {
            (logMCPDebug(e, `Failed to revoke refresh token: ${l(C)}`),
              (d = "server_revoke_failed"));
          }
        if (r.accessToken)
          try {
            await Ue({
              serverName: e,
              endpoint: h,
              token: r.accessToken,
              tokenTypeHint: "access_token",
              clientId: r.clientId,
              clientSecret: r.clientSecret,
              accessToken: r.accessToken,
              authMethod: v,
            });
          } catch (C) {
            (logMCPDebug(e, `Failed to revoke access token: ${l(C)}`),
              (d = "server_revoke_failed"));
          }
      }
    }
  } catch (p) {
    (logMCPDebug(e, `Failed to revoke tokens: ${l(p)}`), (d = "server_revoke_failed"));
  }
  return d;
}
async function revokeReplacedServerTokens(e, t, r) {
  let n;
  try {
    let d = (await getSecureStorage().readAsync())?.mcpOAuth?.[getMcpOAuthCredentialKey(e, t)],
      p = {
        ...r,
        accessToken:
          r.accessToken && r.accessToken !== d?.accessToken
            ? r.accessToken
            : void 0,
        refreshToken:
          r.refreshToken && r.refreshToken !== d?.refreshToken
            ? r.refreshToken
            : void 0,
      };
    if (!p.accessToken && !p.refreshToken) {
      (logMCPDebug(e, "No replaced tokens to revoke"), logFeatureOk("mcp_oauth_revoke"));
      return;
    }
    n = await Ie(e, t, p);
  } catch (d) {
    (logMCPDebug(e, `Failed to revoke replaced tokens: ${l(d)}`),
      (n = "server_revoke_failed"));
  }
  if (n) logFeatureSad("mcp_oauth_revoke", n);
  else logFeatureOk("mcp_oauth_revoke");
}
async function revokeServerTokens(e, t, { preserveStepUpState: r = !1 } = {}) {
  let n = getSecureStorage(),
    d = await n.readAsync();
  if (!d?.mcpOAuth) {
    logFeatureOk("mcp_oauth_revoke");
    return;
  }
  let p = getMcpOAuthCredentialKey(e, t),
    o = d.mcpOAuth[p],
    _;
  if (o?.accessToken || o?.refreshToken)
    _ = await Ie(e, t, {
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
    if (r && o && (o.stepUpScope || o.discoveryState || o.clientId))
      (await n.mutate((h) => {
        let k = h.mcpOAuth?.[p];
        if (k?.accessToken !== o.accessToken || k?.clientId !== o.clientId)
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
    else await clearServerTokensFromLocalStorage(e, t);
  } catch (h) {
    (logMCPDebug(e, `clear local tokens failed: ${l(h)}`), (_ ??= "local_clear_failed"));
  }
  if ((evictMemoizedDiscoveryCachePaths(e), _)) logFeatureSad("mcp_oauth_revoke", _);
  else logFeatureOk("mcp_oauth_revoke");
}
async function clearServerTokensFromLocalStorage(e, t, r) {
  let n = getMcpOAuthCredentialKey(e, t),
    d;
  if (
    (await getSecureStorage().mutate((p) => {
      let o = p.mcpOAuth?.[n];
      if (!o) return p;
      let _ = { ...p.mcpOAuth };
      if (r?.preserveClientRegistration && o.clientId) {
        if (!o.accessToken && !o.refreshToken) return p;
        ((_[n] = {
          ...o,
          accessToken: "",
          refreshToken: void 0,
          expiresAt: 0,
          scope: void 0,
        }),
          (d = "tokens"));
      } else (delete _[n], (d = "all"));
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
function be(e, t, r, n) {
  if (r?.success) return;
  let d = n ? "mutate_rejected" : "storage_write_failed",
    p = n ? l(n) : (r?.warning ?? "storage write failed");
  logMCPDebug(e, `Token persist failed: ${p}`);
  let o = getMcpServerBaseUrl(t);
  logEvent("tengu_mcp_oauth_token_persist_failed", {
    transportType: fromEnum(t.type),
    ...(o && { mcpServerBaseUrl: o }),
    reason: fromEnum(d),
  });
}
async function tt(e, t, r, n, d) {
  if (!t.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let p = getXaaIdpConfig();
  if (!p)
    throw Error(
      "XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.",
    );
  let o = t.oauth?.clientId;
  if (!o)
    throw Error(
      `XAA: server '${e}' needs an AS client_id. Re-add with --client-id.`,
    );
  let h = (await getMcpClientConfig(e, t))?.clientSecret;
  if (!h) {
    let w = getMcpOAuthCredentialKey(e, t),
      E = Object.keys((await getSecureStorage().readAsync())?.mcpOAuthClientConfig ?? {}),
      M = redactHeaders(t.headers ?? {});
    throw (
      logMCPDebug(
        e,
        `XAA: secret lookup miss. wanted=${w} have=[${E.join(", ")}] configHeaders=${jsonStringify(M)}`,
      ),
      Error(
        `XAA: AS client secret not found for '${e}'. Re-add with --client-secret.`,
      )
    );
  }
  logMCPDebug(e, "XAA: starting cross-app access flow");
  let k = await getIdpClientSecret(p.issuer),
    v = (await getCachedIdpIdToken(p.issuer)) !== void 0,
    C = "idp_login";
  try {
    let w;
    try {
      w = await acquireIdpIdToken({
        idpIssuer: p.issuer,
        idpClientId: p.clientId,
        idpClientSecret: k,
        callbackPort: p.callbackPort,
        onAuthorizationUrl: r,
        skipBrowserOpen: d,
        abortSignal: n,
      });
    } catch (U) {
      if (n?.aborted) throw new AuthenticationCancelledError();
      throw U;
    }
    C = "discovery";
    let E = await discoverOidc(p.issuer);
    ((C = "token_exchange"), getPresentedCredentialLog().record(h));
    let M;
    try {
      M = await he(
        t.url,
        {
          clientId: o,
          clientSecret: h,
          idpClientId: p.clientId,
          idpClientSecret: k,
          idpIdToken: w,
          idpTokenEndpoint: E.token_endpoint,
        },
        e,
        n,
      );
    } catch (U) {
      if (n?.aborted) throw new AuthenticationCancelledError();
      let x = l(U);
      if (U instanceof W) {
        if (U.shouldClearIdToken)
          (await clearIdpIdToken(p.issuer),
            logMCPDebug(e, "XAA: cleared cached id_token after token-exchange failure"));
      } else if (
        x.includes("PRM discovery failed") ||
        x.includes("AS metadata discovery failed") ||
        x.includes("no authorization server supports jwt-bearer")
      )
        C = "discovery";
      else if (x.includes("jwt-bearer")) C = "jwt_bearer";
      throw U;
    }
    let O = getMcpOAuthCredentialKey(e, t),
      T = getPresentedCredentialLog();
    (T.record(M.access_token), T.record(M.refresh_token));
    let I, j;
    try {
      I = await getSecureStorage().mutate((U) => {
        let x = U.mcpOAuth?.[O];
        return {
          ...U,
          mcpOAuth: {
            ...U.mcpOAuth,
            [O]: {
              ...x,
              serverName: e,
              serverUrl: t.url,
              accessToken: M.access_token,
              refreshToken: M.refresh_token ?? x?.refreshToken,
              expiresAt:
                M.expires_in != null
                  ? Date.now() + M.expires_in * 1000
                  : void 0,
              scope: M.scope,
              clientId: o,
              clientSecret: h,
              discoveryState: {
                authorizationServerUrl: M.authorizationServerUrl,
              },
            },
          },
        };
      });
    } catch (U) {
      j = U;
    }
    if (I?.success) logMCPDebug(e, "XAA: tokens saved");
    else be(e, t, I, j);
    (logEvent("tengu_mcp_oauth_flow_success", {
      authMethod: S("xaa"),
      idTokenCacheHit: v,
    }),
      logFeatureOk("mcp_oauth_flow"));
  } catch (w) {
    if (w instanceof AuthenticationCancelledError) throw w;
    throw (
      logFeatureBad("mcp_oauth_flow", "mcp_oauth_xaa_failed"),
      logEvent("tengu_mcp_oauth_flow_failure", {
        authMethod: S("xaa"),
        xaaFailureStage: fromEnum(C),
        idTokenCacheHit: v,
      }),
      w
    );
  }
}
async function performMCPOAuthFlow(e, t, r, n, d) {
  if (t.oauth?.xaa) {
    if (!isXaaEnabled())
      throw Error(
        `XAA is not enabled (set CLAUDE_CODE_ENABLE_XAA=1). Remove 'oauth.xaa' from server '${e}' to use the standard consent flow.`,
      );
    (logEvent("tengu_mcp_oauth_flow_start", {
      isOAuthFlow: !0,
      authMethod: S("xaa"),
      transportType: fromEnum(t.type),
      ...(getMcpServerBaseUrl(t) && { mcpServerBaseUrl: getMcpServerBaseUrl(t) }),
    }),
      await tt(e, t, r, n, d?.skipBrowserOpen));
    return;
  }
  let p = getSecureStorage(),
    o = getMcpOAuthCredentialKey(e, t),
    _ = (await p.readAsync())?.mcpOAuth?.[o],
    h = _?.stepUpScope,
    k = _?.discoveryState?.resourceMetadataUrl,
    v =
      _?.clientId && _.redirectUri && Oe(_.redirectUri)
        ? Number(new URL(_.redirectUri).port) || void 0
        : void 0,
    C;
  if (k)
    try {
      C = new URL(k);
    } catch {
      logMCPDebug(e, `Invalid cached resourceMetadataUrl: ${redactUrl(k)}`);
    }
  let w = { scope: h, resourceMetadataUrl: C },
    E = randomUUID();
  logEvent("tengu_mcp_oauth_flow_start", {
    flowAttemptId: sanitizeAnalyticsId(E),
    isOAuthFlow: !0,
    transportType: fromEnum(t.type),
    ...(getMcpServerBaseUrl(t) && { mcpServerBaseUrl: getMcpServerBaseUrl(t) }),
  });
  let M = !1;
  try {
    let O = t.oauth?.callbackPort,
      T = !!d?.redirectUri,
      I = T ? 0 : (O ?? (await pickOAuthCallbackPort(v))),
      j = d?.redirectUri ?? buildOAuthCallbackUrl(I);
    logMCPDebug(
      e,
      T
        ? `Using custom redirectUri: ${redactUrl(j)} (no localhost listener)`
        : `Using redirect port: ${I}${O ? " (from config)" : v && I === v ? " (reusing registered port)" : ""}`,
    );
    let U = !_?.clientId || I === v || _.redirectUri === j;
    try {
      await clearServerTokensFromLocalStorage(e, t, { preserveClientRegistration: U });
    } catch (X) {
      logMCPDebug(e, `clear stored credentials failed: ${l(X)}`);
    }
    let x = getMcpClientState(),
      G = new AbortController();
    if (!T)
      (x.oauthCallbackListeners.get(I)?.abort(),
        x.oauthCallbackListeners.set(I, G));
    let B = new ClaudeAuthProvider(e, t, j, !0, r, d?.skipBrowserOpen),
      Y = Boolean(t.oauth?.scopes || t.oauth?.authServerMetadataUrl);
    if (w.scope && !Y) B.markStepUpPending(w.scope);
    try {
      let X = await ce(e, t.url, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        resourceMetadataUrl: w.resourceMetadataUrl,
      });
      if (X)
        (B.setMetadata(X),
          logMCPDebug(
            e,
            `Fetched OAuth metadata with scope: ${redactParamValue("scope", Me(X) ?? "") || "NONE"}`,
          ));
    } catch (X) {
      logMCPDebug(e, `Failed to fetch OAuth metadata: ${formatMcpSdkError(X, t.url)}`);
    }
    let L = await B.state(),
      F = null,
      te = null,
      q = null,
      me = null,
      K = () => {
        if (F)
          (F.removeAllListeners(),
            F.on("error", () => {}),
            F.close(),
            (F = null));
        if (te) (clearTimeout(te), (te = null));
        if (q)
          (n?.removeEventListener("abort", q),
            G.signal.removeEventListener("abort", q),
            (q = null));
        if (x.oauthCallbackListeners.get(I) === G)
          x.oauthCallbackListeners.delete(I);
        if (x.oauthCallbackSubmitters.get(e) === me)
          x.oauthCallbackSubmitters.delete(e);
        logMCPDebug(e, "MCP OAuth server cleaned up");
      },
      ge = await new Promise((X, Pe) => {
        let ie = !1,
          ke = (N) => {
            if (ie) return;
            ((ie = !0), X(N));
          },
          V = (N) => {
            if (ie) return;
            ((ie = !0), Pe(N));
          };
        if (
          ((q = () => {
            (K(), V(new AuthenticationCancelledError()));
          }),
          n?.aborted || G.signal.aborted)
        ) {
          q();
          return;
        }
        (n?.addEventListener("abort", q),
          G.signal.addEventListener("abort", q));
        {
          let N = (D) => {
            try {
              let H = new URL(D),
                ee = H.searchParams.get("code"),
                ue = H.searchParams.get("state"),
                Q = H.searchParams.get("error");
              if (!ee && !Q) return !1;
              if (ue !== L)
                return (
                  K(),
                  V(Error("OAuth state mismatch - possible CSRF attack")),
                  !0
                );
              if (Q) {
                let re = H.searchParams.get("error_description") || "";
                return (K(), V(Error(`OAuth error: ${Q} - ${re}`)), !0);
              }
              if (!ee) return !1;
              return (
                logMCPDebug(e, "Received auth code via manual callback URL"),
                K(),
                ke(ee),
                !0
              );
            } catch {
              return !1;
            }
          };
          ((me = N),
            x.oauthCallbackSubmitters.set(e, N),
            d?.onWaitingForCallback?.(N, I, L));
        }
        let ve = async () => {
          try {
            (logMCPDebug(e, "Starting SDK auth"), logMCPDebug(e, `Server URL: ${redactUrl(t.url)}`));
            let N = await auth(B, {
              serverUrl: t.url,
              scope: w.scope,
              resourceMetadataUrl: w.resourceMetadataUrl,
              fetchFn: createAuthFetch(),
            });
            if ((logMCPDebug(e, `Initial auth result: ${N}`), N !== "REDIRECT"))
              logMCPDebug(e, `Unexpected auth result, expected REDIRECT: ${N}`);
          } catch (N) {
            (logMCPDebug(e, `SDK auth error: ${formatMcpSdkError(N, t.url)}`),
              K(),
              V(
                Object.assign(
                  new R(`SDK auth failed: ${formatMcpSdkError(N, t.url)}`, "SDK auth failed"),
                  { cause: N },
                ),
              ));
          }
        };
        if (T) ve();
        else
          ((F = createServer((N, D) => {
            let H = parse(N.url || "", !0);
            if (H.pathname === "/callback") {
              let ee = H.query.code,
                ue = H.query.state,
                Q = H.query.error,
                re = H.query.error_description,
                Se = H.query.error_uri;
              if (ue !== L) {
                (D.writeHead(400, { "Content-Type": "text/html" }),
                  D.end(
                    renderOAuthCallbackPage({
                      ok: !1,
                      heading: "Authentication failed",
                      message:
                        "Invalid state parameter. Close this tab and try again from Claude Code.",
                    }),
                  ));
                return;
              }
              if (Q) {
                (D.writeHead(200, { "Content-Type": "text/html" }),
                  D.end(
                    renderOAuthCallbackPage({
                      ok: !1,
                      heading: "Authentication failed",
                      message: "Close this tab and try again from Claude Code.",
                      detail: `${String(Q)}: ${re ?? ""}`,
                    }),
                  ),
                  K());
                let le = `OAuth error: ${Q}`;
                if (re) le += ` - ${re}`;
                if (Se) le += ` (See: ${Se})`;
                V(Error(le));
                return;
              }
              if (ee)
                (D.writeHead(200, { "Content-Type": "text/html" }),
                  D.end(
                    renderOAuthCallbackPage({
                      ok: !0,
                      heading: "Authentication successful",
                      message:
                        "You can close this tab and return to Claude Code.",
                    }),
                  ),
                  K(),
                  ke(ee));
            } else
              (D.writeHead(404, { "Content-Type": "text/html" }),
                D.end(
                  renderOAuthCallbackPage({
                    ok: !1,
                    heading: "Not found",
                    message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${redactUrl(j)}.`,
                  }),
                ));
          })),
            F.on("error", (N) => {
              if ((K(), N.code === "EADDRINUSE")) {
                let D =
                  getCurrentPlatform() === "windows"
                    ? `netstat -ano | findstr :${I}`
                    : `lsof -ti:${I} -sTCP:LISTEN`;
                V(
                  new R(
                    `OAuth callback port ${I} is already in use \u2014 another process may be holding it. ` +
                      `Run \`${D}\` to find it.`,
                    "OAuth callback port already in use",
                  ),
                );
              } else
                V(
                  new R(
                    `OAuth callback server failed: ${N.message}`,
                    "OAuth callback server failed",
                  ),
                );
            }),
            F.listen(I, "127.0.0.1", () => void ve()),
            F.unref());
        ((te = setTimeout(
          (N, D) => {
            (N(), D(new R("Authentication timeout", "Authentication timeout")));
          },
          300000,
          K,
          V,
        )),
          te.unref());
      });
    ((M = !0),
      logMCPDebug(e, "Completing auth flow with authorization code"),
      getPresentedCredentialLog().record(ge));
    let de = await auth(B, {
      serverUrl: t.url,
      authorizationCode: ge,
      resourceMetadataUrl: w.resourceMetadataUrl,
      fetchFn: createAuthFetch(),
    });
    if ((logMCPDebug(e, `Auth result: ${de}`), de === "AUTHORIZED")) {
      let X = await B.tokens().catch(() => {
        return;
      });
      if ((logMCPDebug(e, `Tokens after auth: ${X ? "Present" : "Missing"}`), X))
        logMCPDebug(e, `Token expires_in: ${X.expires_in}`);
      (logEvent("tengu_mcp_oauth_flow_success", {
        flowAttemptId: sanitizeAnalyticsId(E),
        transportType: fromEnum(t.type),
        ...(getMcpServerBaseUrl(t) && { mcpServerBaseUrl: getMcpServerBaseUrl(t) }),
      }),
        logFeatureOk("mcp_oauth_flow"));
    } else
      throw new R("Unexpected auth result: " + de, "Unexpected auth result");
  } catch (O) {
    logMCPDebug(e, `Error during auth completion: ${formatMcpSdkError(O, t.url)}`);
    let T = "unknown",
      I,
      j,
      U = l(O),
      x = O instanceof Error ? O.cause : void 0;
    if (O instanceof AuthenticationCancelledError) T = "cancelled";
    else if (/AADSTS\d/.test(U)) T = "entra_specific";
    else if (/redirect[_ ]uri/i.test(U)) T = "redirect_uri_mismatch";
    else if (M && (pe(O) || pe(x))) T = "token_response_schema_rejected";
    else if (M) T = "token_exchange_failed";
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
    else if (U.includes("SDK auth failed")) T = classifySdkAuthFailure(U, x);
    let G = (
      x instanceof Error ? x : O instanceof Error ? O : null
    )?.message.match(/^HTTP (\d{3})\b/);
    if (G) j = Number(G[1]);
    if (x instanceof OAuthError) I = x.errorCode;
    if (O instanceof OAuthError) {
      if (
        ((I = O.errorCode),
        O.errorCode === "invalid_client" ||
          O.errorCode === "unauthorized_client")
      ) {
        let Y = getMcpOAuthCredentialKey(e, t);
        try {
          await getSecureStorage().mutate((L) => {
            let F = L.mcpOAuth?.[Y];
            if (!F) return L;
            return {
              ...L,
              mcpOAuth: {
                ...L.mcpOAuth,
                [Y]: { ...F, clientId: void 0, clientSecret: void 0 },
              },
            };
          });
        } catch (L) {
          logMCPDebug(e, `clear clientId failed: ${l(L)}`);
        }
      }
    }
    if (T === "timeout" || U.includes("OAuth error:")) {
      let Y = getMcpOAuthCredentialKey(e, t);
      await getSecureStorage()
        .mutate((L) => {
          let F = L.mcpOAuth?.[Y];
          if (
            !F?.clientId ||
            F.accessToken ||
            F.refreshToken ||
            F.clientId !== _?.clientId
          )
            return L;
          return {
            ...L,
            mcpOAuth: {
              ...L.mcpOAuth,
              [Y]: { ...F, clientId: void 0, clientSecret: void 0 },
            },
          };
        })
        .catch((L) => logMCPDebug(e, `drop clientId failed: ${l(L)}`));
    }
    if (T !== "cancelled") logFeatureBad("mcp_oauth_flow", "mcp_oauth_flow_failed");
    logEvent("tengu_mcp_oauth_flow_error", {
      flowAttemptId: sanitizeAnalyticsId(E),
      reason: fromEnum(T),
      error_code: I,
      http_status: fromNumberOpt(j),
      transportType: fromEnum(t.type),
      ...(getMcpServerBaseUrl(t) && { mcpServerBaseUrl: getMcpServerBaseUrl(t) }),
    });
    let B = formatMcpSdkError(O, t.url);
    throw B === l(O) ? O : Error(B, { cause: O });
  }
}
function wrapFetchWithStepUpDetection(e, t) {
  return async (r, n) => {
    let d = await e(r, n);
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
class ClaudeAuthProvider {
  serverName;
  serverConfig;
  redirectUri;
  handleRedirection;
  _codeVerifier;
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
  constructor(e, t, r = buildOAuthCallbackUrl(), n = !1, d, p) {
    ((this.serverName = e),
      (this.serverConfig = t),
      (this.redirectUri = r),
      (this.handleRedirection = n),
      (this.onAuthorizationUrlCallback = d),
      (this.skipBrowserOpen = p ?? !1),
      (this._presented = getPresentedCredentialLog()));
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
    if (!Ce(this.redirectUri)) {
      logMCPDebug(
        this.serverName,
        `redirectUri ${redactUrl(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`,
      );
      return;
    }
    let e = Re();
    if (e !== MCP_CLIENT_METADATA_URL) logMCPDebug(this.serverName, `Using CIMD URL from env: ${e}`);
    return e;
  }
  setMetadata(e) {
    this._metadata = e;
  }
  getCuratedMetadataScope() {
    let e = Me(this._metadata);
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
    let e = await readSecureStorageResilient();
    if (e === SECURE_STORAGE_READ_FAILED_SENTINEL)
      throw (
        logMCPDebug(
          this.serverName,
          "Credential store read failed; not reporting credentials as absent",
        ),
        new McpCredentialStoreUnavailableError(this.serverName)
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
      this._presented.record(encodeBasicAuth(e?.client_id, e?.client_secret)),
      e
    );
  }
  async resolveClientInformation() {
    let e = await this.readCredentialStore(),
      t = getMcpOAuthCredentialKey(this.serverName, this.serverConfig),
      r = e?.mcpOAuthClientConfig?.[t]?.clientSecret,
      n = this.serverConfig.oauth?.clientId,
      d = e?.mcpOAuth?.[t],
      p = this.handleRedirection && et(d?.clientId) && !Ce(this.redirectUri);
    if (p) {
      if (
        (logMCPDebug(
          this.serverName,
          `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${redactUrl(this.redirectUri)} \u2014 ${n ? "serving the configured client" : "registering via DCR"} instead`,
        ),
        n)
      )
        await this.patchStoredClientEntry(
          t,
          { clientId: n, clientSecret: void 0, redirectUri: this.redirectUri },
          "stale CIMD client_id repair",
        );
    }
    if (d?.clientId && !p) {
      let o = d.redirectUri;
      if (
        this.handleRedirection &&
        (o
          ? _e(o) !== _e(this.redirectUri)
          : !this.redirectUri.startsWith("http://localhost"))
      ) {
        let _ = o ? redactUrl(o) : "localhost";
        if (!n) {
          logMCPDebug(
            this.serverName,
            `Cached client_id was registered for ${_}; current redirectUri is ${redactUrl(this.redirectUri)} \u2014 forcing re-DCR`,
          );
          return;
        }
        if (d.clientId !== n)
          return (
            logMCPDebug(
              this.serverName,
              `Stored client_id is stale and its redirectUri ${_} predates ${redactUrl(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`,
            ),
            await this.patchStoredClientEntry(
              t,
              {
                clientId: n,
                clientSecret: void 0,
                redirectUri: this.redirectUri,
              },
              "stale client_id repair",
            ),
            (this._lastServedClientId = n),
            { client_id: n, client_secret: r }
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
          client_secret: d.clientSecret ?? (d.clientId === n ? r : void 0),
        }
      );
    }
    if (n)
      return (
        logMCPDebug(this.serverName, "Using pre-configured client ID"),
        (this._lastServedClientId = n),
        { client_id: n, client_secret: r }
      );
    logMCPDebug(this.serverName, "No client info found");
    return;
  }
  async patchStoredClientEntry(e, t, r) {
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
        logMCPDebug(this.serverName, `${r} resolved unsuccessful`);
    } catch (n) {
      logMCPDebug(this.serverName, `${r} failed: ${l(n)}`);
    }
  }
  async saveClientInformation(e) {
    (this._presented.record(e.client_secret),
      this._presented.record(encodeBasicAuth(e.client_id, e.client_secret)));
    let t = getMcpOAuthCredentialKey(this.serverName, this.serverConfig);
    try {
      if (
        (
          await getSecureStorage().mutate((n) => ({
            ...n,
            mcpOAuth: {
              ...n.mcpOAuth,
              [t]: {
                ...n.mcpOAuth?.[t],
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                clientId: e.client_id,
                clientSecret: e.client_secret,
                redirectUri: this.redirectUri,
                accessToken: n.mcpOAuth?.[t]?.accessToken || "",
                expiresAt: n.mcpOAuth?.[t]?.expiresAt,
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
    } catch (r) {
      logMCPDebug(this.serverName, `saveClientInformation persist failed: ${l(r)}`);
    }
  }
  async tokens() {
    let e = await this.readCredentialStore(),
      t = getMcpOAuthCredentialKey(this.serverName, this.serverConfig),
      r = e?.mcpOAuth?.[t];
    if (
      isXaaEnabled() &&
      this.serverConfig.oauth?.xaa &&
      !r?.refreshToken &&
      (!r?.accessToken ||
        (r.expiresAt != null && (r.expiresAt - Date.now()) / 1000 <= 300))
    ) {
      if (!this._refreshInProgress)
        (logMCPDebug(
          this.serverName,
          r
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
            _
          );
      } catch (_) {
        logMCPDebug(this.serverName, `XAA silent exchange failed: ${l(_)}`);
      }
    }
    if (!r) {
      logMCPDebug(this.serverName, "No token data found");
      return;
    }
    if (!r.accessToken) {
      logMCPDebug(this.serverName, "No access token in storage");
      return;
    }
    ((this._lastServedAccessToken = r.accessToken),
      this._presented.record(r.accessToken),
      this._presented.record(r.refreshToken),
      (this._lastServedRefreshToken = r.refreshToken));
    let n = r.expiresAt != null ? (r.expiresAt - Date.now()) / 1000 : void 0,
      d = this._pendingStepUpScope,
      p = d !== void 0;
    if (p)
      logMCPDebug(
        this.serverName,
        `Step-up pending (${redactParamValue("scope", d)}), omitting refresh_token`,
      );
    if (n != null && n <= 0 && !r.refreshToken) {
      logMCPDebug(this.serverName, "Token expired without refresh token");
      return;
    }
    if (n != null && n <= 300 && r.refreshToken && !p) {
      if (!this._refreshInProgress)
        (logMCPDebug(
          this.serverName,
          `Token expires in ${Math.floor(n)}s, attempting proactive refresh`,
        ),
          (this._refreshInProgress = this.refreshAuthorization(
            r.refreshToken,
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
            _
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
      access_token: r.accessToken,
      refresh_token: p ? void 0 : r.refreshToken,
      expires_in: n,
      scope: r.scope,
      token_type: "Bearer",
    };
    return (
      logMCPDebug(this.serverName, "Returning tokens"),
      logMCPDebug(this.serverName, `Has refresh token: ${!!o.refresh_token}`),
      logMCPDebug(
        this.serverName,
        n != null ? `Expires in: ${Math.floor(n)}s` : "No expiration specified",
      ),
      o
    );
  }
  async saveTokens(e) {
    (this._presented.record(e.access_token),
      this._presented.record(e.refresh_token),
      (this._pendingStepUpScope = void 0));
    let t = getMcpOAuthCredentialKey(this.serverName, this.serverConfig);
    (logMCPDebug(this.serverName, "Saving tokens"),
      logMCPDebug(this.serverName, `Token expires in: ${e.expires_in}`),
      logMCPDebug(this.serverName, `Has refresh token: ${!!e.refresh_token}`));
    let r, n;
    try {
      r = await getSecureStorage().mutate((d) => ({
        ...d,
        mcpOAuth: {
          ...d.mcpOAuth,
          [t]: {
            ...d.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: e.access_token,
            refreshToken: e.refresh_token ?? d.mcpOAuth?.[t]?.refreshToken,
            expiresAt:
              e.expires_in != null ? Date.now() + e.expires_in * 1000 : void 0,
            scope: e.scope,
          },
        },
      }));
    } catch (d) {
      n = d;
    }
    if (r?.success)
      ((this._lastServedAccessToken = e.access_token),
        (this._lastServedRefreshToken =
          e.refresh_token ?? this._lastServedRefreshToken));
    this.logTokenPersistFailed(r, n);
  }
  logTokenPersistFailed(e, t) {
    be(this.serverName, this.serverConfig, e, t);
  }
  async xaaRefresh() {
    let e = getXaaIdpConfig();
    if (!e) return;
    let t = await getCachedIdpIdToken(e.issuer);
    if (!t) {
      logMCPDebug(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return;
    }
    let r = this.serverConfig.oauth?.clientId,
      n = await getMcpClientConfig(this.serverName, this.serverConfig);
    if (!r || !n?.clientSecret) {
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
    this._presented.record(n.clientSecret);
    try {
      let o = await he(
          this.serverConfig.url,
          {
            clientId: r,
            clientSecret: n.clientSecret,
            idpClientId: e.clientId,
            idpClientSecret: d,
            idpIdToken: t,
            idpTokenEndpoint: p.token_endpoint,
          },
          this.serverName,
        ),
        _ = getMcpOAuthCredentialKey(this.serverName, this.serverConfig),
        h,
        k;
      try {
        h = await getSecureStorage().mutate((v) => {
          let C = v.mcpOAuth?.[_];
          return {
            ...v,
            mcpOAuth: {
              ...v.mcpOAuth,
              [_]: {
                ...C,
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                accessToken: o.access_token,
                refreshToken: o.refresh_token ?? C?.refreshToken,
                expiresAt:
                  o.expires_in != null
                    ? Date.now() + o.expires_in * 1000
                    : void 0,
                scope: o.scope,
                clientId: r,
                clientSecret: n.clientSecret,
                discoveryState: {
                  authorizationServerUrl: o.authorizationServerUrl,
                },
              },
            },
          };
        });
      } catch (v) {
        k = v;
      }
      return (
        this.logTokenPersistFailed(h, k),
        {
          access_token: o.access_token,
          token_type: "Bearer",
          expires_in: o.expires_in,
          scope: o.scope,
          refresh_token: o.refresh_token,
        }
      );
    } catch (o) {
      if (o instanceof W && o.shouldClearIdToken)
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
      r = e.searchParams.get("scope"),
      n = t ?? r;
    if (n !== r)
      logMCPDebug(
        this.serverName,
        `Overrode authorization scope from ${r ? redactParamValue("scope", r) : "NONE"} to configured: ${n ? redactParamValue("scope", n) : "NONE"}`,
      );
    let d = n === null ? null : maybeAppendOfflineAccess(n, this._metadata);
    if (d !== null && d !== r) {
      if ((e.searchParams.set("scope", d), d !== t))
        logMCPDebug(this.serverName, "Appended offline_access to authorization scope");
    }
    let p = isEntraLoginUrl(e),
      o = e.searchParams.getAll("prompt"),
      _ = p ? o.filter((E) => E !== "consent") : o;
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
      (logMCPDebug(this.serverName, `Authorization URL: ${authorizationUrlForDebugLog(e)}`),
      logMCPDebug(this.serverName, `Scopes in URL: ${h ? redactParamValue("scope", h) : "NOT FOUND"}`),
      h)
    )
      ((this._scopes = h),
        logMCPDebug(
          this.serverName,
          `Captured scopes from authorization URL: ${redactParamValue("scope", h)}`,
        ));
    else {
      let E = this.getCuratedMetadataScope();
      if (E)
        ((this._scopes = E),
          logMCPDebug(this.serverName, `Using scopes from metadata: ${redactParamValue("scope", E)}`));
      else logMCPDebug(this.serverName, "No scopes available from URL or metadata");
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let E = getMcpOAuthCredentialKey(this.serverName, this.serverConfig),
        M = this._scopes,
        O = !1;
      try {
        await getSecureStorage().mutate((T) => {
          let I = T.mcpOAuth?.[E];
          if (!I) return T;
          return (
            (O = !0),
            { ...T, mcpOAuth: { ...T.mcpOAuth, [E]: { ...I, stepUpScope: M } } }
          );
        });
      } catch (T) {
        logMCPDebug(this.serverName, `step-up scope persist failed: ${l(T)}`);
      }
      if (O) logMCPDebug(this.serverName, `Persisted step-up scope: ${redactParamValue("scope", M)}`);
    }
    if (!this.handleRedirection) {
      logMCPDebug(this.serverName, "Redirection handling is disabled, skipping redirect");
      return;
    }
    let k = e.toString();
    if (!k.startsWith("http://") && !k.startsWith("https://"))
      throw Error(
        "Invalid authorization URL: must use http:// or https:// scheme",
      );
    logMCPDebug(this.serverName, "Redirecting to authorization URL");
    let v = authorizationUrlForDebugLog(e);
    if (
      (logMCPDebug(this.serverName, `Authorization URL: ${v}`),
      this.onAuthorizationUrlCallback)
    )
      this.onAuthorizationUrlCallback(k);
    if (this.skipBrowserOpen) {
      logMCPDebug(
        this.serverName,
        `Skipping browser open (skipBrowserOpen=true). URL: ${v}`,
      );
      return;
    }
    let C = isHeadlessEnvironment();
    if (C)
      logMCPDebug(
        this.serverName,
        `Skipping browser open (headless environment). URL: ${v}`,
      );
    else logMCPDebug(this.serverName, `Opening authorization URL: ${v}`);
    let w = C ? !1 : await tryOpenUrlInBrowser(k);
    if (
      (logEvent("tengu_mcp_oauth_browser_open", {
        success: w,
        headless: C,
        platform: fromEnum(getCurrentPlatform()),
      }),
      !C && !w)
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
      r = getMcpOAuthCredentialKey(this.serverName, this.serverConfig),
      n = !1;
    try {
      let d = this._lastServedClientId,
        p = this._lastServedAccessToken,
        o = this._lastServedRefreshToken;
      await getSecureStorage().mutate((_) => {
        let h = _.mcpOAuth?.[r];
        if (!h) return _;
        let k = { ..._.mcpOAuth };
        switch (t) {
          case "all": {
            let v = p != null && !!h.accessToken && h.accessToken !== p,
              C = d != null && h.clientId != null && h.clientId !== d;
            if (v || C)
              return (
                logMCPDebug(
                  this.serverName,
                  `invalidateCredentials('all') preserved: ${v ? "foreign token" : "concurrent re-registration"}`,
                ),
                _
              );
            if (!h.clientId && !h.refreshToken && h.accessToken === "")
              return _;
            k[r] = {
              serverName: h.serverName,
              serverUrl: h.serverUrl,
              accessToken: "",
              ...(h.discoveryState && { discoveryState: h.discoveryState }),
              ...(h.stepUpScope && { stepUpScope: h.stepUpScope }),
            };
            break;
          }
          case "client":
            k[r] = { ...h, clientId: void 0, clientSecret: void 0 };
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
            k[r] = {
              ...h,
              accessToken: "",
              refreshToken: void 0,
              expiresAt: 0,
            };
            break;
          }
          case "discovery":
            k[r] = { ...h, discoveryState: void 0, stepUpScope: void 0 };
            break;
        }
        return ((n = !0), { ..._, mcpOAuth: k });
      });
    } catch (d) {
      logMCPDebug(this.serverName, `invalidateCredentials persist failed: ${l(d)}`);
    }
    if (n) logMCPDebug(this.serverName, `Invalidated credentials (scope: ${e})`);
  }
  async saveDiscoveryState(e) {
    let t = getMcpOAuthCredentialKey(this.serverName, this.serverConfig);
    logMCPDebug(
      this.serverName,
      `Saving discovery state (authServer: ${redactUrl(e.authorizationServerUrl)})`,
    );
    try {
      await getSecureStorage().mutate((r) => ({
        ...r,
        mcpOAuth: {
          ...r.mcpOAuth,
          [t]: {
            ...r.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: r.mcpOAuth?.[t]?.accessToken || "",
            expiresAt: r.mcpOAuth?.[t]?.expiresAt,
            discoveryState: {
              authorizationServerUrl: e.authorizationServerUrl,
              resourceMetadataUrl: e.resourceMetadataUrl,
              oauthMetadataFound: !!e.authorizationServerMetadata,
            },
          },
        },
      }));
    } catch (r) {
      logMCPDebug(this.serverName, `saveDiscoveryState persist failed: ${l(r)}`);
    }
  }
  async discoveryState() {
    let e = this.serverConfig.oauth?.authServerMetadataUrl;
    if (e) {
      logMCPDebug(this.serverName, `Fetching metadata from configured URL: ${redactUrl(e)}`);
      try {
        let p = await ce(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: e,
        });
        if (p)
          return {
            authorizationServerUrl: p.issuer,
            authorizationServerMetadata: p,
          };
      } catch (p) {
        logMCPDebug(
          this.serverName,
          `Failed to fetch from configured metadata URL: ${formatMcpSdkError(p, this.serverConfig.url)}`,
        );
      }
      return;
    }
    let r = await getSecureStorage().readAsync(),
      n = getMcpOAuthCredentialKey(this.serverName, this.serverConfig),
      d = r?.mcpOAuth?.[n]?.discoveryState;
    if (d?.authorizationServerUrl)
      return (
        logMCPDebug(
          this.serverName,
          `Returning cached discovery state (authServer: ${redactUrl(d.authorizationServerUrl)})`,
        ),
        {
          authorizationServerUrl: d.authorizationServerUrl,
          resourceMetadataUrl: d.resourceMetadataUrl,
          resourceMetadata: d.resourceMetadata,
          authorizationServerMetadata: d.authorizationServerMetadata,
        }
      );
    return;
  }
  async refreshAuthorization(e) {
    let t = getMcpOAuthCredentialKey(this.serverName, this.serverConfig),
      r = getSecureStorageDir();
    await getFsSurface().mkdir(r);
    let n = t.replace(/[^a-zA-Z0-9]/g, "_"),
      d = Ge(r, `mcp-refresh-${n}.lock`),
      p;
    for (let o = 0; o < fe; o++)
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
            `Refresh lock held by another process, waiting (attempt ${o + 1}/${fe})`,
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
        `Could not acquire refresh lock after ${fe} retries; skipping refresh`,
      );
      return;
    }
    try {
      invalidateKeychainCache();
      let h = (await getSecureStorage().readAsync())?.mcpOAuth?.[t];
      if (h) {
        let k =
          h.expiresAt != null ? (h.expiresAt - Date.now()) / 1000 : void 0;
        if (h.accessToken && (k == null || k > 300))
          return (
            logMCPDebug(
              this.serverName,
              k != null
                ? `Another process already refreshed tokens (expires in ${Math.floor(k)}s)`
                : "Another process already refreshed tokens (no expiration)",
            ),
            {
              access_token: h.accessToken,
              refresh_token: h.refreshToken,
              expires_in: k,
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
        getMcpOAuthCredentialKey(this.serverName, this.serverConfig)
      ],
      r = t?.expiresAt != null ? (t.expiresAt - Date.now()) / 1000 : void 0;
    if (t?.accessToken && (r == null || r > 300)) {
      logMCPDebug(this.serverName, "Another process landed fresh tokens; using those");
      let n = {
        access_token: t.accessToken,
        refresh_token: t.refreshToken,
        expires_in: r,
        scope: t.scope,
        token_type: "Bearer",
      };
      return { tokenData: t, freshTokens: n };
    }
    return { tokenData: t, freshTokens: void 0 };
  }
  async _doRefresh(e) {
    this._presented.record(e);
    let t = 3,
      r = getMcpServerBaseUrl(this.serverConfig),
      n = (d, p) => {
        logEvent(
          d === "success"
            ? "tengu_mcp_oauth_refresh_success"
            : "tengu_mcp_oauth_refresh_failure",
          {
            transportType: fromEnum(this.serverConfig.type),
            ...(r && { mcpServerBaseUrl: r }),
            ...(p && { reason: fromEnum(p) }),
          },
        );
      };
    for (let d = 1; d <= t; d++) {
      let p;
      try {
        logMCPDebug(this.serverName, "Starting token refresh");
        let o = createAuthFetch(),
          _ = this._metadata;
        if (!_) {
          let k = await this.discoveryState();
          if (k?.authorizationServerMetadata) _ = k.authorizationServerMetadata;
          else if (k?.authorizationServerUrl)
            (logMCPDebug(
              this.serverName,
              `Re-discovering metadata from persisted auth server URL: ${redactUrl(k.authorizationServerUrl)}`,
            ),
              (_ = await discoverAuthorizationServerMetadata(k.authorizationServerUrl, { fetchFn: o })));
        }
        if (!_)
          _ = await ce(this.serverName, this.serverConfig.url, {
            configuredMetadataUrl:
              this.serverConfig.oauth?.authServerMetadataUrl,
            fetchFn: o,
          });
        if (!_) {
          (logMCPDebug(this.serverName, "Failed to discover OAuth metadata"),
            n("failure", "metadata_discovery_failed"),
            logFeatureBad("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed"));
          return;
        }
        if (((this._metadata = _), (p = await this.clientInformation()), !p)) {
          (logMCPDebug(this.serverName, "No client information available"),
            n("failure", "no_client_info"),
            logFeatureBad("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info"));
          return;
        }
        let h = await refreshAuthorization(new URL(this.serverConfig.url), {
          metadata: _,
          clientInformation: p,
          refreshToken: e,
          resource: new URL(this.serverConfig.url),
          fetchFn: o,
        });
        if (h)
          return (
            logMCPDebug(this.serverName, "Token refresh successful"),
            await this.saveTokens(h),
            n("success"),
            logFeatureOk("mcp_oauth_refresh"),
            h
          );
        (logMCPDebug(this.serverName, "Token refresh returned no tokens"),
          n("failure", "no_tokens_returned"),
          logFeatureBad("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens"));
        return;
      } catch (o) {
        if (o instanceof InvalidGrantError) {
          logMCPDebug(
            this.serverName,
            `Token refresh failed with invalid_grant: ${o.message}`,
          );
          let { freshTokens: w } = await this.readConcurrentRefreshWinner();
          if (w)
            return (
              logFeatureSad("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"),
              w
            );
          (logMCPDebug(
            this.serverName,
            "No valid tokens in storage, clearing stored tokens",
          ),
            n("failure", "invalid_grant"),
            logFeatureBad("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"),
            await this.invalidateCredentials("tokens"),
            authLostEmitter.emit(this.serverName));
          return;
        }
        if (
          o instanceof OAuthError &&
          (o.errorCode === "invalid_client" ||
            o.errorCode === "unauthorized_client")
        ) {
          logMCPDebug(
            this.serverName,
            "Token refresh failed: DCR client expired or invalid; clearing stored client registration",
          );
          let { tokenData: w, freshTokens: E } =
            await this.readConcurrentRefreshWinner();
          if (E)
            return (
              logFeatureSad("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"),
              E
            );
          if (w?.clientId && p && w.clientId !== p.client_id) {
            (logMCPDebug(
              this.serverName,
              "Another process re-registered client; preserving",
            ),
              n("failure", "concurrent_reregister"),
              logFeatureSad(
                "mcp_oauth_refresh",
                "mcp_oauth_refresh_concurrent_reregister",
              ));
            return;
          }
          (n(
            "failure",
            o.errorCode === "unauthorized_client"
              ? "unauthorized_client"
              : "invalid_client",
          ),
            logFeatureBad(
              "mcp_oauth_refresh",
              o.errorCode === "unauthorized_client"
                ? "mcp_oauth_refresh_unauthorized_client"
                : "mcp_oauth_refresh_invalid_client",
            ),
            await this.invalidateCredentials("all"),
            authLostEmitter.emit(this.serverName));
          return;
        }
        if (pe(o)) {
          (logMCPDebug(
            this.serverName,
            `Token refresh failed: token response rejected by SDK schema: ${l(o)}`,
          ),
            n("failure", "token_response_schema_rejected"),
            logFeatureBad(
              "mcp_oauth_refresh",
              "mcp_oauth_refresh_token_response_schema_rejected",
            ));
          return;
        }
        let _ = o instanceof McpCredentialStoreUnavailableError,
          h =
            o instanceof Error &&
            /timeout|timed out|etimedout|econnreset/i.test(o.message),
          k = o instanceof ServerError || o instanceof TemporarilyUnavailableError || o instanceof TooManyRequestsError,
          v = h || k || _;
        if (!v || d >= t) {
          (logMCPDebug(
            this.serverName,
            `Token refresh failed: ${formatMcpSdkError(o, this.serverConfig.url)}`,
          ),
            n("failure", v ? "transient_retries_exhausted" : "request_failed"),
            logFeatureBad("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed"));
          return;
        }
        let C = 1000 * Math.pow(2, d - 1);
        (logMCPDebug(
          this.serverName,
          `Token refresh failed, retrying in ${C}ms (attempt ${d}/${t})`,
        ),
          await sleep(C));
      }
    }
    return;
  }
}
async function readClientSecret() {
  let e = process.env.MCP_CLIENT_SECRET;
  if (e) return e;
  if (!process.stdin.isTTY)
    throw Error(
      "No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead.",
    );
  return new Promise((t, r) => {
    (process.stderr.write("Enter OAuth client secret: "),
      process.stdin.setRawMode?.(!0));
    let n = "",
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
            t(n));
        else if (o === "\x03")
          (process.stdin.setRawMode?.(!1),
            process.stdin.removeListener("data", d),
            r(Error("Cancelled")));
        else if (o === "\x7F" || o === "\b") n = n.slice(0, -1);
        else n += o;
      };
    process.stdin.on("data", d);
  });
}
async function saveMcpClientSecret(e, t, r) {
  let n = getMcpOAuthCredentialKey(e, t);
  try {
    return await getSecureStorage().mutate((d) => ({
      ...d,
      mcpOAuthClientConfig: {
        ...d.mcpOAuthClientConfig,
        [n]: { clientSecret: r },
      },
    }));
  } catch (d) {
    return { success: !1, warning: l(d) };
  }
}
async function clearMcpClientConfig(e, t) {
  let r = getMcpOAuthCredentialKey(e, t);
  await getSecureStorage().mutate((n) => {
    if (!n.mcpOAuthClientConfig?.[r]) return n;
    let d = { ...n.mcpOAuthClientConfig };
    return (delete d[r], { ...n, mcpOAuthClientConfig: d });
  });
}
async function getMcpClientConfig(e, t) {
  let n = await getSecureStorage().readAsync(),
    d = getMcpOAuthCredentialKey(e, t);
  return n?.mcpOAuthClientConfig?.[d];
}
function Me(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string")
    return e.default_scope;
  return;
}
function maybeAppendOfflineAccess(e, t) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!t?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`;
}
var rt = [
    "login.microsoftonline.com",
    "login.microsoftonline.us",
    "login.partner.microsoftonline.cn",
    "login.chinacloudapi.cn",
  ],
  nt = [".b2clogin.com", ".ciamlogin.com"];
function isEntraLoginUrl(e) {
  try {
    let t = (typeof e === "string" ? new URL(e) : e).hostname;
    return rt.includes(t) || nt.some((r) => t.endsWith(r));
  } catch {
    return !1;
  }
}
export {
  classifySdkAuthFailure,
  authorizationUrlForDebugLog,
  normalizeOAuthErrorBody,
  createAuthFetch,
  AuthenticationCancelledError,
  getOAuthCallbackSubmitter,
  setActiveOAuthPromise,
  getActiveOAuthPromise,
  clearMcpOAuthStubIfTokenless,
  snapshotServerTokens,
  revokeReplacedServerTokens,
  revokeServerTokens,
  clearServerTokensFromLocalStorage,
  performMCPOAuthFlow,
  wrapFetchWithStepUpDetection,
  ClaudeAuthProvider,
  readClientSecret,
  saveMcpClientSecret,
  clearMcpClientConfig,
  getMcpClientConfig,
  maybeAppendOfflineAccess,
  isEntraLoginUrl,
};
