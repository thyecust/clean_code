// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { USe } from "../MCP客户端/chunk-5wa92x7d.js";
import { Frn, V2n } from "../MCP客户端/chunk-78r8f7dw.js";
import { R, ge, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { z } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { J } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { Sr } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Gn, yE } from "./chunk-7jz937t3.js";
import { As } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { yn } from "./chunk-y7b7kf5n.js";
import { hE, eGe, b7 } from "../../01-核心基础设施/共享小工具-未细化/chunk-nw3qvjhe.js";
import { Gr } from "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { randomBytes as x } from "crypto";
import { createServer as _ } from "http";
import { parse as E } from "url";
var T = 300000,
  v = 30000,
  O = 60;
function V3e(n) {
  try {
    let t = new URL(n);
    return (
      (t.pathname = t.pathname.replace(/\/+$/, "")),
      (t.host = t.host.toLowerCase()),
      t.toString()
    );
  } catch {
    return n.replace(/\/+$/, "");
  }
}
async function Sct(n) {
  let r = (await yn().readAsync())?.mcpXaaIdp?.[V3e(n)];
  if (!r) return;
  if (r.expiresAt - Date.now() <= O * 1000) return;
  return r.idToken;
}
async function k(n, t, e) {
  await yn().mutate((r) => ({
    ...r,
    mcpXaaIdp: { ...r.mcpXaaIdp, [V3e(n)]: { idToken: t, expiresAt: e } },
  }));
}
async function phr(n, t) {
  let e = C(t),
    r = e ? e * 1000 : Date.now() + 3600000;
  return (await k(n, t, r), r);
}
async function TLt(n) {
  let t = V3e(n);
  try {
    await yn().mutate((e) => {
      if (!e.mcpXaaIdp?.[t]) return e;
      let r = { ...e.mcpXaaIdp };
      return (delete r[t], { ...e, mcpXaaIdp: r });
    });
  } catch (e) {
    J("xaa", `clearIdpIdToken(${Gn(t)}) failed: ${l(e)}`);
  }
}
async function fhr(n, t) {
  try {
    return await yn().mutate((e) => ({
      ...e,
      mcpXaaIdpConfig: { ...e.mcpXaaIdpConfig, [V3e(n)]: { clientSecret: t } },
    }));
  } catch (e) {
    return { success: !1, warning: l(e) };
  }
}
async function ELt(n) {
  return (await yn().readAsync())?.mcpXaaIdpConfig?.[V3e(n)]?.clientSecret;
}
async function mhr(n) {
  let t = V3e(n);
  try {
    await yn().mutate((e) => {
      if (!e.mcpXaaIdpConfig?.[t]) return e;
      let r = { ...e.mcpXaaIdpConfig };
      return (delete r[t], { ...e, mcpXaaIdpConfig: r });
    });
  } catch (e) {
    J("xaa", `clearIdpClientSecret(${Gn(t)}) failed: ${l(e)}`);
  }
}
function A(n, t) {
  return fetch(n, {
    ...t,
    ...As({ url: String(n) }),
    signal: AbortSignal.timeout(v),
  }).catch((e) => yE(e, n));
}
async function bct(n) {
  let t = n.endsWith("/") ? n : n + "/";
  if (!URL.canParse(".well-known/openid-configuration", t))
    throw new R(
      `XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${Gn(n)}`,
      "XAA IdP: OIDC discovery failed: issuer is not a valid URL",
    );
  let e = new URL(".well-known/openid-configuration", t),
    r = await A(e, { headers: { Accept: "application/json" } });
  if (!r.ok)
    throw Error(
      `XAA IdP: OIDC discovery failed: HTTP ${r.status} at ${Gn(e.href)}`,
    );
  let i;
  try {
    i = await r.json();
  } catch {
    throw Error(
      `XAA IdP: OIDC discovery returned non-JSON at ${Gn(e.href)} (captive portal or proxy?)`,
    );
  }
  let a = USe.safeParse(i);
  if (!a.success)
    throw Error(`XAA IdP: invalid OIDC metadata: ${a.error.message}`);
  if (
    !URL.canParse(a.data.token_endpoint) ||
    new URL(a.data.token_endpoint).protocol !== "https:"
  )
    throw Error(
      `XAA IdP: refusing non-HTTPS token endpoint: ${Gn(a.data.token_endpoint)}`,
    );
  return a.data;
}
function C(n) {
  let t = n.split(".");
  if (t.length !== 3) return;
  try {
    let e = z(Buffer.from(t[1], "base64url").toString("utf-8"));
    return typeof e.exp === "number" ? e.exp : void 0;
  } catch {
    return;
  }
}
function X(n, t, e, r) {
  let i = null,
    a = null,
    c = null,
    f = () => {
      if (
        (i?.removeAllListeners(),
        i?.on("error", () => {}),
        i?.close(),
        (i = null),
        a)
      )
        (clearTimeout(a), (a = null));
      if (e && c) (e.removeEventListener("abort", c), (c = null));
    };
  return new Promise((m, g) => {
    let p = !1,
      I = (s, o) => {
        if (p) return;
        ((p = !0), f(), m({ code: s, iss: o }));
      },
      d = (s) => {
        if (p) return;
        ((p = !0), f(), g(s));
      };
    if (e) {
      if (((c = () => d(Error("XAA IdP: login cancelled"))), e.aborted)) {
        c();
        return;
      }
      e.addEventListener("abort", c, { once: !0 });
    }
    ((i = _((s, o) => {
      let u = E(s.url || "", !0);
      if (u.pathname !== "/callback") {
        (o.writeHead(404), o.end());
        return;
      }
      let y = u.query.code,
        S = u.query.state,
        h = u.query.error,
        b = eGe(u.query.iss);
      if (h) {
        let w = u.query.error_description;
        (o.writeHead(400, { "Content-Type": "text/html" }),
          o.end(
            hE({
              ok: !1,
              heading: "Sign-in failed",
              message: "Close this tab and try again from Claude Code.",
              detail: `${h}: ${w ?? ""}`,
            }),
          ),
          d(Error(`XAA IdP: ${h}${w ? ` \u2014 ${w}` : ""}`)));
        return;
      }
      if (S !== t) {
        (o.writeHead(400, { "Content-Type": "text/html" }),
          o.end(
            hE({
              ok: !1,
              heading: "Sign-in failed",
              message: "State mismatch. Close this tab and try again.",
            }),
          ),
          d(Error("XAA IdP: state mismatch (possible CSRF)")));
        return;
      }
      if (!y) {
        (o.writeHead(400, { "Content-Type": "text/html" }),
          o.end(
            hE({
              ok: !1,
              heading: "Sign-in failed",
              message:
                "No authorization code received. Close this tab and try again.",
            }),
          ),
          d(Error("XAA IdP: callback missing code")));
        return;
      }
      (o.writeHead(200, { "Content-Type": "text/html" }),
        o.end(
          hE({
            ok: !0,
            heading: "Sign-in complete",
            message: "You can close this tab and return to Claude Code.",
          }),
        ),
        I(y, b));
    })),
      i.on("error", (s) => {
        if (s.code === "EADDRINUSE") {
          let o =
            P() === "windows"
              ? `netstat -ano | findstr :${n}`
              : `lsof -ti:${n} -sTCP:LISTEN`;
          d(
            Error(
              `XAA IdP: callback port ${n} is already in use. Run \`${o}\` to find the holder.`,
            ),
          );
        } else d(Error(`XAA IdP: callback server failed: ${s.message}`));
      }),
      i.listen(n, "127.0.0.1", () => {
        try {
          r();
        } catch (s) {
          d(ge(s));
        }
      }),
      i.unref(),
      (a = setTimeout((s) => s(Error("XAA IdP: login timed out")), T, d)),
      a.unref());
  });
}
async function Prn(n) {
  return Sr("mcp_xaa_idp_login", async () => {
    let { idpIssuer: t, idpClientId: e } = n,
      r = await Sct(t);
    if (r) return (J("xaa", `Using cached id_token for ${Gn(t)}`), r);
    J("xaa", `No cached id_token for ${Gn(t)}; starting OIDC login`);
    let i = await bct(t),
      a = n.callbackPort ?? (await b7()),
      c = `http://localhost:${a}/callback`,
      f = x(32).toString("base64url"),
      m = {
        client_id: e,
        ...(n.idpClientSecret && { client_secret: n.idpClientSecret }),
      },
      { authorizationUrl: g, codeVerifier: p } = await Frn(t, {
        metadata: i,
        clientInformation: m,
        redirectUrl: c,
        scope: "openid",
        state: f,
      }),
      I = await X(a, f, n.abortSignal, () => {
        if ((n.onAuthorizationUrl(g.toString()), !n.skipBrowserOpen))
          (J("xaa", "Opening browser to IdP authorization endpoint"),
            Gr(g.toString()));
      }),
      d = await V2n(t, {
        metadata: i,
        clientInformation: m,
        authorizationCode: I.code,
        iss: I.iss,
        codeVerifier: p,
        redirectUri: c,
        fetchFn: A,
      });
    if (!d.id_token)
      throw Error(
        "XAA IdP: token response missing id_token (check scope=openid)",
      );
    let s = C(d.id_token),
      o = s ? s * 1000 : Date.now() + (d.expires_in ?? 3600) * 1000;
    try {
      (await k(t, d.id_token, o),
        J(
          "xaa",
          `Cached id_token for ${Gn(t)} (expires ${new Date(o).toISOString()})`,
        ));
    } catch (u) {
      J("xaa", `id_token cache write failed: ${l(u)}`);
    }
    return d.id_token;
  });
}
export { V3e, Sct, phr, TLt, fhr, ELt, mhr, bct, Prn };
