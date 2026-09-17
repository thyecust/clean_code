// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { kGe } from "./chunk-3wfaaze4.js";
import { LATEST_PROTOCOL_VERSION as WQ } from "../MCP客户端/chunk-tv3jbp8f.js";
import { PP, PQ } from "../../01-核心基础设施/共享小工具-未细化/chunk-p3e024j6.js";
import { Mke, s, Nke, T, O, tB, v, c, it, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var d = Nke()
    .superRefine((e, t) => {
      if (!URL.canParse(e))
        return (
          t.addIssue({
            code: PP.custom,
            message: "URL must be parseable",
            fatal: !0,
          }),
          Mke
        );
    })
    .refine(
      (e) => {
        let t = new URL(e);
        return (
          t.protocol !== "javascript:" &&
          t.protocol !== "data:" &&
          t.protocol !== "vbscript:"
        );
      },
      { message: "URL cannot use javascript:, data:, or vbscript: scheme" },
    ),
  Z = it({
    resource: s().url(),
    authorization_servers: v(d).optional(),
    jwks_uri: s().url().optional(),
    scopes_supported: v(s()).optional(),
    bearer_methods_supported: v(s()).optional(),
    resource_signing_alg_values_supported: v(s()).optional(),
    resource_name: s().optional(),
    resource_documentation: s().optional(),
    resource_policy_uri: s().url().optional(),
    resource_tos_uri: s().url().optional(),
    tls_client_certificate_bound_access_tokens: O().optional(),
    authorization_details_types_supported: v(s()).optional(),
    dpop_signing_alg_values_supported: v(s()).optional(),
    dpop_bound_access_tokens_required: O().optional(),
  }),
  but = it({
    issuer: s(),
    authorization_endpoint: d,
    token_endpoint: d,
    registration_endpoint: d.optional(),
    scopes_supported: v(s()).optional(),
    response_types_supported: v(s()),
    response_modes_supported: v(s()).optional(),
    grant_types_supported: v(s()).optional(),
    token_endpoint_auth_methods_supported: v(s()).optional(),
    token_endpoint_auth_signing_alg_values_supported: v(s()).optional(),
    service_documentation: d.optional(),
    revocation_endpoint: d.optional(),
    revocation_endpoint_auth_methods_supported: v(s()).optional(),
    revocation_endpoint_auth_signing_alg_values_supported: v(s()).optional(),
    introspection_endpoint: s().optional(),
    introspection_endpoint_auth_methods_supported: v(s()).optional(),
    introspection_endpoint_auth_signing_alg_values_supported: v(s()).optional(),
    code_challenge_methods_supported: v(s()).optional(),
    client_id_metadata_document_supported: O().optional(),
  }),
  ne = it({
    issuer: s(),
    authorization_endpoint: d,
    token_endpoint: d,
    userinfo_endpoint: d.optional(),
    jwks_uri: d,
    registration_endpoint: d.optional(),
    scopes_supported: v(s()).optional(),
    response_types_supported: v(s()),
    response_modes_supported: v(s()).optional(),
    grant_types_supported: v(s()).optional(),
    acr_values_supported: v(s()).optional(),
    subject_types_supported: v(s()),
    id_token_signing_alg_values_supported: v(s()),
    id_token_encryption_alg_values_supported: v(s()).optional(),
    id_token_encryption_enc_values_supported: v(s()).optional(),
    userinfo_signing_alg_values_supported: v(s()).optional(),
    userinfo_encryption_alg_values_supported: v(s()).optional(),
    userinfo_encryption_enc_values_supported: v(s()).optional(),
    request_object_signing_alg_values_supported: v(s()).optional(),
    request_object_encryption_alg_values_supported: v(s()).optional(),
    request_object_encryption_enc_values_supported: v(s()).optional(),
    token_endpoint_auth_methods_supported: v(s()).optional(),
    token_endpoint_auth_signing_alg_values_supported: v(s()).optional(),
    display_values_supported: v(s()).optional(),
    claim_types_supported: v(s()).optional(),
    claims_supported: v(s()).optional(),
    service_documentation: s().optional(),
    claims_locales_supported: v(s()).optional(),
    ui_locales_supported: v(s()).optional(),
    claims_parameter_supported: O().optional(),
    request_parameter_supported: O().optional(),
    request_uri_parameter_supported: O().optional(),
    require_request_uri_registration: O().optional(),
    op_policy_uri: d.optional(),
    op_tos_uri: d.optional(),
    client_id_metadata_document_supported: O().optional(),
  }),
  uNt = c({
    ...ne.shape,
    ...but.pick({ code_challenge_methods_supported: !0 }).shape,
  }),
  dNt = c({
    access_token: s(),
    id_token: s().optional(),
    token_type: s(),
    expires_in: PQ().optional(),
    scope: s().optional(),
    refresh_token: s().optional(),
  }).strip(),
  pNt = c({
    error: s(),
    error_description: s().optional(),
    error_uri: s().optional(),
  }),
  F = d.optional().or(
    k("").transform(() => {
      return;
    }),
  ),
  ae = c({
    redirect_uris: v(d),
    token_endpoint_auth_method: s().optional(),
    grant_types: v(s()).optional(),
    response_types: v(s()).optional(),
    client_name: s().optional(),
    client_uri: d.optional(),
    logo_uri: F,
    scope: s().optional(),
    contacts: v(s()).optional(),
    tos_uri: F,
    policy_uri: s().optional(),
    jwks_uri: d.optional(),
    jwks: tB().optional(),
    software_id: s().optional(),
    software_version: s().optional(),
    software_statement: s().optional(),
  }).strip(),
  se = c({
    client_id: s(),
    client_secret: s().optional(),
    client_id_issued_at: T().optional(),
    client_secret_expires_at: T().optional(),
  }).strip(),
  J = ae.merge(se),
  Ce = c({ error: s(), error_description: s().optional() }).strip(),
  ke = c({ token: s(), token_type_hint: s().optional() }).strip();
class LS extends Error {
  constructor(e, t) {
    super(e);
    ((this.errorUri = t), (this.name = this.constructor.name));
  }
  toResponseObject() {
    let e = { error: this.errorCode, error_description: this.message };
    if (this.errorUri) e.error_uri = this.errorUri;
    return e;
  }
  get errorCode() {
    return this.constructor.errorCode;
  }
}
class x extends LS {}
x.errorCode = "invalid_request";
class g extends LS {}
g.errorCode = "invalid_client";
class VSe extends LS {}
VSe.errorCode = "invalid_grant";
class w extends LS {}
w.errorCode = "unauthorized_client";
class U extends LS {}
U.errorCode = "unsupported_grant_type";
class R extends LS {}
R.errorCode = "invalid_scope";
class C extends LS {}
C.errorCode = "access_denied";
class Oee extends LS {}
Oee.errorCode = "server_error";
class CGe extends LS {}
CGe.errorCode = "temporarily_unavailable";
class b extends LS {}
b.errorCode = "unsupported_response_type";
class S extends LS {}
S.errorCode = "unsupported_token_type";
class L extends LS {}
L.errorCode = "invalid_token";
class P extends LS {}
P.errorCode = "method_not_allowed";
class vGe extends LS {}
vGe.errorCode = "too_many_requests";
class z extends LS {}
z.errorCode = "invalid_client_metadata";
class A extends LS {}
A.errorCode = "insufficient_scope";
class M extends LS {}
M.errorCode = "invalid_target";
var E = {
  [x.errorCode]: x,
  [g.errorCode]: g,
  [VSe.errorCode]: VSe,
  [w.errorCode]: w,
  [U.errorCode]: U,
  [R.errorCode]: R,
  [C.errorCode]: C,
  [Oee.errorCode]: Oee,
  [CGe.errorCode]: CGe,
  [b.errorCode]: b,
  [S.errorCode]: S,
  [L.errorCode]: L,
  [P.errorCode]: P,
  [vGe.errorCode]: vGe,
  [z.errorCode]: z,
  [A.errorCode]: A,
  [M.errorCode]: M,
};
function Y(e) {
  let t = typeof e === "string" ? new URL(e) : new URL(e.href);
  return ((t.hash = ""), t);
}
function K({ requestedResource: e, configuredResource: t }) {
  let r = typeof e === "string" ? new URL(e) : new URL(e.href),
    o = typeof t === "string" ? new URL(t) : new URL(t.href);
  if (r.origin !== o.origin) return !1;
  if (r.pathname.length < o.pathname.length) return !1;
  let n = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/",
    i = o.pathname.endsWith("/") ? o.pathname : o.pathname + "/";
  return n.startsWith(i);
}
class XA extends Error {
  constructor(e) {
    super(e ?? "Unauthorized");
  }
}
function ie(e) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(e);
}
var j = "code",
  W = "S256";
function ce(e, t) {
  let r = e.client_secret !== void 0;
  if (
    "token_endpoint_auth_method" in e &&
    e.token_endpoint_auth_method &&
    ie(e.token_endpoint_auth_method) &&
    (t.length === 0 || t.includes(e.token_endpoint_auth_method))
  )
    return e.token_endpoint_auth_method;
  if (t.length === 0) return r ? "client_secret_basic" : "none";
  if (r && t.includes("client_secret_basic")) return "client_secret_basic";
  if (r && t.includes("client_secret_post")) return "client_secret_post";
  if (t.includes("none")) return "none";
  return r ? "client_secret_post" : "none";
}
function ue(e, t, r, o) {
  let { client_id: n, client_secret: i } = t;
  switch (e) {
    case "client_secret_basic":
      le(n, i, r);
      return;
    case "client_secret_post":
      pe(n, i, o);
      return;
    case "none":
      de(n, o);
      return;
    default:
      throw Error(`Unsupported client authentication method: ${e}`);
  }
}
function le(e, t, r) {
  if (!t)
    throw Error("client_secret_basic authentication requires a client_secret");
  let o = btoa(`${e}:${t}`);
  r.set("Authorization", `Basic ${o}`);
}
function pe(e, t, r) {
  if ((r.set("client_id", e), t)) r.set("client_secret", t);
}
function de(e, t) {
  t.set("client_id", e);
}
async function X(e) {
  let t = e instanceof Response ? e.status : void 0,
    r = e instanceof Response ? await e.text() : e;
  try {
    let o = pNt.parse(JSON.parse(r)),
      { error: n, error_description: i, error_uri: u } = o;
    return new (E[n] || Oee)(i || "", u);
  } catch (o) {
    let n = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${o}. Raw body: ${r}`;
    return new Oee(n);
  }
}
async function u2(e, t) {
  try {
    return await H(e, t);
  } catch (r) {
    if (r instanceof g || r instanceof w)
      return (await e.invalidateCredentials?.("all"), await H(e, t));
    else if (r instanceof VSe)
      return (await e.invalidateCredentials?.("tokens"), await H(e, t));
    throw r;
  }
}
async function H(
  e,
  {
    serverUrl: t,
    authorizationCode: r,
    scope: o,
    resourceMetadataUrl: n,
    fetchFn: i,
  },
) {
  let u = await e.discoveryState?.(),
    a,
    l,
    p,
    h = n;
  if (!h && u?.resourceMetadataUrl) h = new URL(u.resourceMetadataUrl);
  if (u?.authorizationServerUrl) {
    if (
      ((l = u.authorizationServerUrl),
      (a = u.resourceMetadata),
      (p = u.authorizationServerMetadata ?? (await lPe(l, { fetchFn: i }))),
      !a)
    )
      try {
        a = await fNt(t, { resourceMetadataUrl: h }, i);
      } catch {}
    if (p !== u.authorizationServerMetadata || a !== u.resourceMetadata)
      await e.saveDiscoveryState?.({
        authorizationServerUrl: String(l),
        resourceMetadataUrl: h?.toString(),
        resourceMetadata: a,
        authorizationServerMetadata: p,
      });
  } else {
    let _ = await mon(t, { resourceMetadataUrl: h, fetchFn: i });
    ((l = _.authorizationServerUrl),
      (p = _.authorizationServerMetadata),
      (a = _.resourceMetadata),
      await e.saveDiscoveryState?.({
        authorizationServerUrl: String(l),
        resourceMetadataUrl: h?.toString(),
        resourceMetadata: a,
        authorizationServerMetadata: p,
      }));
  }
  let m = await he(t, e, a),
    V = o || a?.scopes_supported?.join(" ") || e.clientMetadata.scope,
    f = await Promise.resolve(e.clientInformation());
  if (!f) {
    if (r !== void 0)
      throw Error(
        "Existing OAuth client information is required when exchanging an authorization code",
      );
    let _ = p?.client_id_metadata_document_supported === !0,
      y = e.clientMetadataUrl;
    if (y && !_e(y))
      throw new z(
        `clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${y}`,
      );
    if (_ && y) ((f = { client_id: y }), await e.saveClientInformation?.(f));
    else {
      if (!e.saveClientInformation)
        throw Error(
          "OAuth client information must be saveable for dynamic registration",
        );
      let B = await ye(l, {
        metadata: p,
        clientMetadata: e.clientMetadata,
        scope: V,
        fetchFn: i,
      });
      (await e.saveClientInformation(B), (f = B));
    }
  }
  let ee = !e.redirectUrl;
  if (r !== void 0 || ee) {
    let _ = await me(e, l, {
      metadata: p,
      resource: m,
      authorizationCode: r,
      fetchFn: i,
    });
    return (await e.saveTokens(_), "AUTHORIZED");
  }
  let N = await e.tokens();
  if (N?.refresh_token)
    try {
      let _ = await hon(l, {
        metadata: p,
        clientInformation: f,
        refreshToken: N.refresh_token,
        resource: m,
        addClientAuthentication: e.addClientAuthentication,
        fetchFn: i,
      });
      return (await e.saveTokens(_), "AUTHORIZED");
    } catch (_) {
      if (!(_ instanceof LS) || _ instanceof Oee);
      else throw _;
    }
  let te = e.state ? await e.state() : void 0,
    { authorizationUrl: re, codeVerifier: oe } = await gon(l, {
      metadata: p,
      clientInformation: f,
      state: te,
      redirectUrl: e.redirectUrl,
      scope: V,
      resource: m,
    });
  return (
    await e.saveCodeVerifier(oe),
    await e.redirectToAuthorization(re),
    "REDIRECT"
  );
}
function _e(e) {
  if (!e) return !1;
  try {
    let t = new URL(e);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return !1;
  }
}
async function he(e, t, r) {
  let o = Y(e);
  if (t.validateResourceURL) return await t.validateResourceURL(o, r?.resource);
  if (!r) return;
  if (!K({ requestedResource: o, configuredResource: r.resource }))
    throw Error(
      `Protected resource ${r.resource} does not match expected ${o} (or origin)`,
    );
  return new URL(r.resource);
}
function aPe(e) {
  let t = e.headers.get("WWW-Authenticate");
  if (!t) return {};
  let [r, o] = t.split(" ");
  if (r.toLowerCase() !== "bearer" || !o) return {};
  let n = q(e, "resource_metadata") || void 0,
    i;
  if (n)
    try {
      i = new URL(n);
    } catch {}
  let u = q(e, "scope") || void 0,
    a = q(e, "error") || void 0;
  return { resourceMetadataUrl: i, scope: u, error: a };
}
function q(e, t) {
  let r = e.headers.get("WWW-Authenticate");
  if (!r) return null;
  let o = new RegExp(`${t}=(?:"([^"]+)"|([^\\s,]+))`),
    n = r.match(o);
  if (n) return n[1] || n[2];
  return null;
}
async function fNt(e, t, r = fetch) {
  let o = await we(e, "oauth-protected-resource", r, {
    protocolVersion: t?.protocolVersion,
    metadataUrl: t?.resourceMetadataUrl,
  });
  if (!o || o.status === 404)
    throw (
      await o?.body?.cancel(),
      Error(
        "Resource server does not implement OAuth 2.0 Protected Resource Metadata.",
      )
    );
  if (!o.ok)
    throw (
      await o.body?.cancel(),
      Error(
        `HTTP ${o.status} trying to load well-known OAuth protected resource metadata.`,
      )
    );
  return Z.parse(await o.json());
}
async function I(e, t, r = fetch) {
  try {
    return await r(e, { headers: t });
  } catch (o) {
    if (o instanceof TypeError)
      if (t) return I(e, void 0, r);
      else return;
    throw o;
  }
}
function fe(e, t = "", r = {}) {
  if (t.endsWith("/")) t = t.slice(0, -1);
  return r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
}
async function Q(e, t, r = fetch) {
  return await I(e, { "MCP-Protocol-Version": t }, r);
}
function ge(e, t) {
  return !e || (e.status >= 400 && e.status < 500 && t !== "/");
}
async function we(e, t, r, o) {
  let n = new URL(e),
    i = o?.protocolVersion ?? WQ,
    u;
  if (o?.metadataUrl) u = new URL(o.metadataUrl);
  else {
    let l = fe(t, n.pathname);
    ((u = new URL(l, o?.metadataServerUrl ?? n)), (u.search = n.search));
  }
  let a = await Q(u, i, r);
  if (!o?.metadataUrl && ge(a, n.pathname)) {
    let l = new URL(`/.well-known/${t}`, n);
    a = await Q(l, i, r);
  }
  return a;
}
function ze(e) {
  let t = typeof e === "string" ? new URL(e) : e,
    r = t.pathname !== "/",
    o = [];
  if (!r)
    return (
      o.push({
        url: new URL("/.well-known/oauth-authorization-server", t.origin),
        type: "oauth",
      }),
      o.push({
        url: new URL("/.well-known/openid-configuration", t.origin),
        type: "oidc",
      }),
      o
    );
  let n = t.pathname;
  if (n.endsWith("/")) n = n.slice(0, -1);
  return (
    o.push({
      url: new URL(`/.well-known/oauth-authorization-server${n}`, t.origin),
      type: "oauth",
    }),
    o.push({
      url: new URL(`/.well-known/openid-configuration${n}`, t.origin),
      type: "oidc",
    }),
    o.push({
      url: new URL(`${n}/.well-known/openid-configuration`, t.origin),
      type: "oidc",
    }),
    o
  );
}
async function lPe(e, { fetchFn: t = fetch, protocolVersion: r = WQ } = {}) {
  let o = { "MCP-Protocol-Version": r, Accept: "application/json" },
    n = ze(e);
  for (let { url: i, type: u } of n) {
    let a = await I(i, o, t);
    if (!a) continue;
    if (!a.ok) {
      if ((await a.body?.cancel(), a.status >= 400 && a.status < 500)) continue;
      throw Error(
        `HTTP ${a.status} trying to load ${u === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${i}`,
      );
    }
    if (u === "oauth") return but.parse(await a.json());
    else return uNt.parse(await a.json());
  }
  return;
}
async function mon(e, t) {
  let r, o;
  try {
    if (
      ((r = await fNt(
        e,
        { resourceMetadataUrl: t?.resourceMetadataUrl },
        t?.fetchFn,
      )),
      r.authorization_servers && r.authorization_servers.length > 0)
    )
      o = r.authorization_servers[0];
  } catch {}
  if (!o) o = String(new URL("/", e));
  let n = await lPe(o, { fetchFn: t?.fetchFn });
  return {
    authorizationServerUrl: o,
    authorizationServerMetadata: n,
    resourceMetadata: r,
  };
}
async function gon(
  e,
  {
    metadata: t,
    clientInformation: r,
    redirectUrl: o,
    scope: n,
    state: i,
    resource: u,
  },
) {
  let a;
  if (t) {
    if (
      ((a = new URL(t.authorization_endpoint)),
      !t.response_types_supported.includes(j))
    )
      throw Error(
        `Incompatible auth server: does not support response type ${j}`,
      );
    if (
      t.code_challenge_methods_supported &&
      !t.code_challenge_methods_supported.includes(W)
    )
      throw Error(
        `Incompatible auth server: does not support code challenge method ${W}`,
      );
  } else a = new URL("/authorize", e);
  let l = await kGe(),
    { code_verifier: p, code_challenge: h } = l;
  if (
    (a.searchParams.set("response_type", j),
    a.searchParams.set("client_id", r.client_id),
    a.searchParams.set("code_challenge", h),
    a.searchParams.set("code_challenge_method", W),
    a.searchParams.set("redirect_uri", String(o)),
    i)
  )
    a.searchParams.set("state", i);
  if (n) a.searchParams.set("scope", n);
  if (n?.includes("offline_access")) a.searchParams.append("prompt", "consent");
  if (u) a.searchParams.set("resource", u.href);
  return { authorizationUrl: a, codeVerifier: p };
}
function G(e, t, r) {
  return new URLSearchParams({
    grant_type: "authorization_code",
    code: e,
    code_verifier: t,
    redirect_uri: String(r),
  });
}
async function D(
  e,
  {
    metadata: t,
    tokenRequestParams: r,
    clientInformation: o,
    addClientAuthentication: n,
    resource: i,
    fetchFn: u,
  },
) {
  let a = t?.token_endpoint ? new URL(t.token_endpoint) : new URL("/token", e),
    l = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    });
  if (i) r.set("resource", i.href);
  if (n) await n(l, r, a, t);
  else if (o) {
    let h = t?.token_endpoint_auth_methods_supported ?? [],
      m = ce(o, h);
    ue(m, o, l, r);
  }
  let p = await (u ?? fetch)(a, { method: "POST", headers: l, body: r });
  if (!p.ok) throw await X(p);
  return dNt.parse(await p.json());
}
async function ijn(
  e,
  {
    metadata: t,
    clientInformation: r,
    authorizationCode: o,
    codeVerifier: n,
    redirectUri: i,
    resource: u,
    addClientAuthentication: a,
    fetchFn: l,
  },
) {
  let p = G(o, n, i);
  return D(e, {
    metadata: t,
    tokenRequestParams: p,
    clientInformation: r,
    addClientAuthentication: a,
    resource: u,
    fetchFn: l,
  });
}
async function hon(
  e,
  {
    metadata: t,
    clientInformation: r,
    refreshToken: o,
    resource: n,
    addClientAuthentication: i,
    fetchFn: u,
  },
) {
  let a = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: o,
    }),
    l = await D(e, {
      metadata: t,
      tokenRequestParams: a,
      clientInformation: r,
      addClientAuthentication: i,
      resource: n,
      fetchFn: u,
    });
  return { refresh_token: o, ...l };
}
async function me(
  e,
  t,
  { metadata: r, resource: o, authorizationCode: n, fetchFn: i } = {},
) {
  let u = e.clientMetadata.scope,
    a;
  if (e.prepareTokenRequest) a = await e.prepareTokenRequest(u);
  if (!a) {
    if (!n)
      throw Error(
        "Either provider.prepareTokenRequest() or authorizationCode is required",
      );
    if (!e.redirectUrl)
      throw Error("redirectUrl is required for authorization_code flow");
    let p = await e.codeVerifier();
    a = G(n, p, e.redirectUrl);
  }
  let l = await e.clientInformation();
  return D(t, {
    metadata: r,
    tokenRequestParams: a,
    clientInformation: l ?? void 0,
    addClientAuthentication: e.addClientAuthentication,
    resource: o,
    fetchFn: i,
  });
}
async function ye(e, { metadata: t, clientMetadata: r, scope: o, fetchFn: n }) {
  let i;
  if (t) {
    if (!t.registration_endpoint)
      throw Error(
        "Incompatible auth server: does not support dynamic client registration",
      );
    i = new URL(t.registration_endpoint);
  } else i = new URL("/register", e);
  let u = await (n ?? fetch)(i, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...r, ...(o !== void 0 ? { scope: o } : {}) }),
  });
  if (!u.ok) throw await X(u);
  return J.parse(await u.json());
}
export {
  but,
  uNt,
  dNt,
  pNt,
  LS,
  VSe,
  Oee,
  CGe,
  vGe,
  XA,
  u2,
  aPe,
  fNt,
  lPe,
  mon,
  gon,
  ijn,
  hon,
};
