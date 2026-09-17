// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { uNt, gon, ijn } from "./chunk-j990pwax.js";
import { R, ge, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { z } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logMCPDebug } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { redactUrl, rethrowFetchError } from "./url-and-error-redaction.js";
import { getProxyFetchOptions } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { getSecureStorage } from "./secure-storage.js";
import { renderOAuthCallbackPage, pickOAuthCallbackPort } from "../../01-核心基础设施/共享小工具-未细化/oauth-callback.js";
import { tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { randomBytes } from "crypto";
import { createServer } from "http";
import { parse } from "url";
var E = 300000,
  T = 30000,
  v = 60;
function issuerKey(r) {
  try {
    let t = new URL(r);
    return (
      (t.pathname = t.pathname.replace(/\/+$/, "")),
      (t.host = t.host.toLowerCase()),
      t.toString()
    );
  } catch {
    return r.replace(/\/+$/, "");
  }
}
async function getCachedIdpIdToken(r) {
  let n = (await getSecureStorage().readAsync())?.mcpXaaIdp?.[issuerKey(r)];
  if (!n) return;
  if (n.expiresAt - Date.now() <= v * 1000) return;
  return n.idToken;
}
async function k(r, t, e) {
  await getSecureStorage().mutate((n) => ({
    ...n,
    mcpXaaIdp: { ...n.mcpXaaIdp, [issuerKey(r)]: { idToken: t, expiresAt: e } },
  }));
}
async function saveIdpIdTokenFromJwt(r, t) {
  let e = S(t),
    n = e ? e * 1000 : Date.now() + 3600000;
  return (await k(r, t, n), n);
}
async function vLt(r) {
  let t = issuerKey(r);
  try {
    await getSecureStorage().mutate((e) => {
      if (!e.mcpXaaIdp?.[t]) return e;
      let n = { ...e.mcpXaaIdp };
      return (delete n[t], { ...e, mcpXaaIdp: n });
    });
  } catch (e) {
    logMCPDebug("xaa", `clearIdpIdToken(${redactUrl(t)}) failed: ${l(e)}`);
  }
}
async function saveIdpClientSecret(r, t) {
  try {
    return await getSecureStorage().mutate((e) => ({
      ...e,
      mcpXaaIdpConfig: { ...e.mcpXaaIdpConfig, [issuerKey(r)]: { clientSecret: t } },
    }));
  } catch (e) {
    return { success: !1, warning: l(e) };
  }
}
async function getIdpClientSecret(r) {
  return (await getSecureStorage().readAsync())?.mcpXaaIdpConfig?.[issuerKey(r)]?.clientSecret;
}
async function clearIdpClientSecret(r) {
  let t = issuerKey(r);
  try {
    await getSecureStorage().mutate((e) => {
      if (!e.mcpXaaIdpConfig?.[t]) return e;
      let n = { ...e.mcpXaaIdpConfig };
      return (delete n[t], { ...e, mcpXaaIdpConfig: n });
    });
  } catch (e) {
    logMCPDebug("xaa", `clearIdpClientSecret(${redactUrl(t)}) failed: ${l(e)}`);
  }
}
function A(r, t) {
  return fetch(r, {
    ...t,
    ...getProxyFetchOptions({ url: String(r) }),
    signal: AbortSignal.timeout(T),
  }).catch((e) => rethrowFetchError(e, r));
}
async function discoverOidc(r) {
  let t = r.endsWith("/") ? r : r + "/";
  if (!URL.canParse(".well-known/openid-configuration", t))
    throw new R(
      `XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${redactUrl(r)}`,
      "XAA IdP: OIDC discovery failed: issuer is not a valid URL",
    );
  let e = new URL(".well-known/openid-configuration", t),
    n = await A(e, { headers: { Accept: "application/json" } });
  if (!n.ok)
    throw Error(
      `XAA IdP: OIDC discovery failed: HTTP ${n.status} at ${redactUrl(e.href)}`,
    );
  let o;
  try {
    o = await n.json();
  } catch {
    throw Error(
      `XAA IdP: OIDC discovery returned non-JSON at ${redactUrl(e.href)} (captive portal or proxy?)`,
    );
  }
  let i = uNt.safeParse(o);
  if (!i.success)
    throw Error(`XAA IdP: invalid OIDC metadata: ${i.error.message}`);
  if (
    !URL.canParse(i.data.token_endpoint) ||
    new URL(i.data.token_endpoint).protocol !== "https:"
  )
    throw Error(
      `XAA IdP: refusing non-HTTPS token endpoint: ${redactUrl(i.data.token_endpoint)}`,
    );
  return i.data;
}
function S(r) {
  let t = r.split(".");
  if (t.length !== 3) return;
  try {
    let e = z(Buffer.from(t[1], "base64url").toString("utf-8"));
    return typeof e.exp === "number" ? e.exp : void 0;
  } catch {
    return;
  }
}
function O(r, t, e, n) {
  let o = null,
    i = null,
    c = null,
    m = () => {
      if (
        (o?.removeAllListeners(),
        o?.on("error", () => {}),
        o?.close(),
        (o = null),
        i)
      )
        (clearTimeout(i), (i = null));
      if (e && c) (e.removeEventListener("abort", c), (c = null));
    };
  return new Promise((f, g) => {
    let p = !1,
      h = (a) => {
        if (p) return;
        ((p = !0), m(), f(a));
      },
      d = (a) => {
        if (p) return;
        ((p = !0), m(), g(a));
      };
    if (e) {
      if (((c = () => d(Error("XAA IdP: login cancelled"))), e.aborted)) {
        c();
        return;
      }
      e.addEventListener("abort", c, { once: !0 });
    }
    ((o = createServer((a, s) => {
      let u = parse(a.url || "", !0);
      if (u.pathname !== "/callback") {
        (s.writeHead(404), s.end());
        return;
      }
      let y = u.query.code,
        C = u.query.state,
        I = u.query.error;
      if (I) {
        let w = u.query.error_description;
        (s.writeHead(400, { "Content-Type": "text/html" }),
          s.end(
            renderOAuthCallbackPage({
              ok: !1,
              heading: "Sign-in failed",
              message: "Close this tab and try again from Claude Code.",
              detail: `${I}: ${w ?? ""}`,
            }),
          ),
          d(Error(`XAA IdP: ${I}${w ? ` \u2014 ${w}` : ""}`)));
        return;
      }
      if (C !== t) {
        (s.writeHead(400, { "Content-Type": "text/html" }),
          s.end(
            renderOAuthCallbackPage({
              ok: !1,
              heading: "Sign-in failed",
              message: "State mismatch. Close this tab and try again.",
            }),
          ),
          d(Error("XAA IdP: state mismatch (possible CSRF)")));
        return;
      }
      if (!y) {
        (s.writeHead(400, { "Content-Type": "text/html" }),
          s.end(
            renderOAuthCallbackPage({
              ok: !1,
              heading: "Sign-in failed",
              message:
                "No authorization code received. Close this tab and try again.",
            }),
          ),
          d(Error("XAA IdP: callback missing code")));
        return;
      }
      (s.writeHead(200, { "Content-Type": "text/html" }),
        s.end(
          renderOAuthCallbackPage({
            ok: !0,
            heading: "Sign-in complete",
            message: "You can close this tab and return to Claude Code.",
          }),
        ),
        h(y));
    })),
      o.on("error", (a) => {
        if (a.code === "EADDRINUSE") {
          let s =
            getCurrentPlatform() === "windows"
              ? `netstat -ano | findstr :${r}`
              : `lsof -ti:${r} -sTCP:LISTEN`;
          d(
            Error(
              `XAA IdP: callback port ${r} is already in use. Run \`${s}\` to find the holder.`,
            ),
          );
        } else d(Error(`XAA IdP: callback server failed: ${a.message}`));
      }),
      o.listen(r, "127.0.0.1", () => {
        try {
          n();
        } catch (a) {
          d(ge(a));
        }
      }),
      o.unref(),
      (i = setTimeout((a) => a(Error("XAA IdP: login timed out")), E, d)),
      i.unref());
  });
}
async function acquireIdpIdToken(r) {
  return withFeatureTelemetry("mcp_xaa_idp_login", async () => {
    let { idpIssuer: t, idpClientId: e } = r,
      n = await getCachedIdpIdToken(t);
    if (n) return (logMCPDebug("xaa", `Using cached id_token for ${redactUrl(t)}`), n);
    logMCPDebug("xaa", `No cached id_token for ${redactUrl(t)}; starting OIDC login`);
    let o = await discoverOidc(t),
      i = r.callbackPort ?? (await pickOAuthCallbackPort()),
      c = `http://localhost:${i}/callback`,
      m = randomBytes(32).toString("base64url"),
      f = {
        client_id: e,
        ...(r.idpClientSecret && { client_secret: r.idpClientSecret }),
      },
      { authorizationUrl: g, codeVerifier: p } = await gon(t, {
        metadata: o,
        clientInformation: f,
        redirectUrl: c,
        scope: "openid",
        state: m,
      }),
      h = await O(i, m, r.abortSignal, () => {
        if ((r.onAuthorizationUrl(g.toString()), !r.skipBrowserOpen))
          (logMCPDebug("xaa", "Opening browser to IdP authorization endpoint"),
            tryOpenUrlInBrowser(g.toString()));
      }),
      d = await ijn(t, {
        metadata: o,
        clientInformation: f,
        authorizationCode: h,
        codeVerifier: p,
        redirectUri: c,
        fetchFn: A,
      });
    if (!d.id_token)
      throw Error(
        "XAA IdP: token response missing id_token (check scope=openid)",
      );
    let a = S(d.id_token),
      s = a ? a * 1000 : Date.now() + (d.expires_in ?? 3600) * 1000;
    try {
      (await k(t, d.id_token, s),
        logMCPDebug(
          "xaa",
          `Cached id_token for ${redactUrl(t)} (expires ${new Date(s).toISOString()})`,
        ));
    } catch (u) {
      logMCPDebug("xaa", `id_token cache write failed: ${l(u)}`);
    }
    return d.id_token;
  });
}
export { issuerKey, getCachedIdpIdToken, saveIdpIdTokenFromJwt, vLt, saveIdpClientSecret, getIdpClientSecret, clearIdpClientSecret, discoverOidc, acquireIdpIdToken };
