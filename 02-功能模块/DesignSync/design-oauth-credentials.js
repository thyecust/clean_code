// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Nn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { DESIGN_OAUTH_SCOPES, getOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { getFsSurface, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { refreshOAuthToken, revokeOAuthToken, isOAuthTokenExpired, isInvalidGrantError } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getSecureStorage } from "../认证-OAuth登录/secure-storage.js";
import { Cs } from "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import { getSecureStorageDir } from "../../01-核心基础设施/共享小工具-未细化/keychain-access.js";
import { OAuthLoginFlow } from "../认证-OAuth登录/oauth-login-flow.js";
import { join as O } from "path";
async function readDesignOauthTokens(r) {
  try {
    return (await getSecureStorage().readAsync(r))?.designOauth ?? null;
  } catch (t) {
    return (
      logForDebugging(`Failed to read design OAuth tokens: ${l(t)}`, { level: "error" }),
      null
    );
  }
}
async function saveDesignOauthTokens(r, t) {
  try {
    let o = !1,
      s = await getSecureStorage().mutate((e) => {
        if (t?.onlyIf && !t.onlyIf(e.designOauth)) return ((o = !0), e);
        return { ...e, designOauth: r };
      });
    return o ? { ...s, raced: !0 } : s;
  } catch (o) {
    return (
      logForDebugging(`Failed to save design OAuth tokens: ${l(o)}`, { level: "error" }),
      { success: !1, warning: "Failed to save design OAuth tokens" }
    );
  }
}
async function k(r) {
  try {
    await getSecureStorage().mutate((t) => {
      if (!t.designOauth) return t;
      if (!r(t.designOauth)) return t;
      let o = { ...t };
      return (delete o.designOauth, o);
    });
  } catch (t) {
    logForDebugging(`Failed to clear design OAuth tokens: ${l(t)}`, { level: "error" });
  }
}
var D = ".design_oauth_refresh.lock",
  w = 5;
class T extends Error {
  constructor() {
    super(
      "Design OAuth lock contention: another process is holding the refresh lock",
    );
    this.name = "DesignOauthLockContendedError";
  }
}
async function y(r) {
  let t = getSecureStorageDir();
  await getFsSurface().mkdir(t);
  let o = O(t, D),
    s = !1,
    e,
    c = 0;
  while (!e) {
    c++;
    try {
      e = await Cs(o, {
        lockfilePath: o,
        realpath: !1,
        stale: 60000,
        update: 5000,
        onCompromised: (i) => {
          ((s = !0),
            logForDebugging(`Design OAuth refresh lock compromised: ${i.message}`, {
              level: "error",
            }));
        },
      });
    } catch (i) {
      if (i.code === "ELOCKED") {
        if (c < w) {
          await sleep(1000 + Math.random() * 1000);
          continue;
        }
        throw new T();
      }
      throw i;
    }
  }
  let u = { isCompromised: () => s };
  try {
    return await r(u);
  } finally {
    try {
      await e();
    } catch (i) {
      logForDebugging(`Design OAuth refresh lock release failed: ${l(i)}`, {
        level: "error",
      });
    }
  }
}
async function p() {
  let r = getSecureStorage();
  return (r.invalidateCache?.(), (await r.readAsync())?.designOauth ?? null);
}
async function ensureDesignAccessToken(r) {
  let t = await readDesignOauthTokens(r);
  if (!t?.accessToken) return { ok: !1, reason: "needs_design_login" };
  if (!isOAuthTokenExpired(t.expiresAt)) return { ok: !0, accessToken: t.accessToken };
  try {
    return await y(async (o) => {
      let s = await p();
      if (!s?.accessToken) return { ok: !1, reason: "needs_design_login" };
      if (!isOAuthTokenExpired(s.expiresAt)) return { ok: !0, accessToken: s.accessToken };
      if (!s.refreshToken) {
        let e = s.refreshToken;
        return (
          await k((c) => c.refreshToken === e),
          { ok: !1, reason: "needs_design_login" }
        );
      }
      if (!Array.isArray(s.scopes) || s.scopes.length === 0) {
        let e = s.refreshToken;
        return (
          await k((c) => c.refreshToken === e),
          { ok: !1, reason: "needs_design_login" }
        );
      }
      if (o.isCompromised())
        return (
          logFeatureSad("oauth_token_refresh", "design_oauth_refresh_lock_compromised"),
          {
            ok: !1,
            reason: "design_refresh_failed",
            detail: "another process is refreshing the design token",
          }
        );
      try {
        let e = await refreshOAuthToken(s.refreshToken, {
          clientId: s.clientId,
          scopes: s.scopes,
          skipProfileFetch: !0,
        });
        if (!e.refreshToken || !e.expiresAt) {
          if (e.refreshToken && e.refreshToken !== s.refreshToken)
            await revokeOAuthToken(e.refreshToken, s.clientId);
          return {
            ok: !1,
            reason: "design_refresh_failed",
            detail: "refresh response missing refresh_token or expiry",
          };
        }
        if (!DESIGN_OAUTH_SCOPES.every((i) => e.scopes.includes(i))) {
          if (e.refreshToken) await revokeOAuthToken(e.refreshToken, s.clientId);
          let i = s.refreshToken;
          return (
            await k((d) => d.refreshToken === i),
            {
              ok: !1,
              reason: "needs_design_login",
              detail: "refresh response missing design scopes",
            }
          );
        }
        let c = s.refreshToken,
          u = await saveDesignOauthTokens(
            {
              accessToken: e.accessToken,
              refreshToken: e.refreshToken,
              expiresAt: e.expiresAt,
              scopes: e.scopes.filter((i) => DESIGN_OAUTH_SCOPES.some((d) => d === i)),
              clientId: s.clientId,
            },
            { onlyIf: (i) => i?.refreshToken === c },
          );
        if (u.raced) {
          await revokeOAuthToken(e.refreshToken, s.clientId);
          let i = await p();
          return i?.accessToken && !isOAuthTokenExpired(i.expiresAt)
            ? { ok: !0, accessToken: i.accessToken }
            : { ok: !1, reason: "needs_design_login" };
        }
        if (!u.success)
          logForDebugging(
            "Design OAuth refresh succeeded but persist failed; continuing with in-memory token.",
            { level: "error" },
          );
        return { ok: !0, accessToken: e.accessToken };
      } catch (e) {
        if (o.isCompromised()) {
          let c = await p();
          if (c?.accessToken && !isOAuthTokenExpired(c.expiresAt))
            return { ok: !0, accessToken: c.accessToken };
          if (!isInvalidGrantError(e))
            logFeatureSad("oauth_token_refresh", "design_oauth_refresh_lock_compromised");
          return {
            ok: !1,
            reason: "design_refresh_failed",
            detail: "another process is refreshing the design token",
          };
        }
        if (isInvalidGrantError(e)) {
          let c = s.refreshToken;
          return (
            await k((u) => u.refreshToken === c),
            {
              ok: !1,
              reason: "needs_design_login",
              detail: "design authorization expired",
            }
          );
        }
        return { ok: !1, reason: "design_refresh_failed", detail: l(e) };
      }
    });
  } catch (o) {
    if (o instanceof T)
      logFeatureSad("oauth_token_refresh", "design_oauth_refresh_lock_contention");
    else (logError(o), logFeatureBad("oauth_token_refresh", "design_oauth_refresh_lock_error"));
    return { ok: !1, reason: "design_refresh_failed", detail: l(o) };
  }
}
function getDesignOauthClientId() {
  return a.CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID ?? getOauthConfig().DESIGN_CLIENT_ID;
}
function isDesignOauthClientConfigured() {
  return !getDesignOauthClientId().startsWith("00000000-");
}
async function validateDesignOauthResponse(r, t) {
  let o = DESIGN_OAUTH_SCOPES.filter((s) => !r.scopes.includes(s));
  if (o.length > 0) {
    if (r.refreshToken) await revokeOAuthToken(r.refreshToken, t);
    return {
      ok: !1,
      message: `The authorization server did not grant the design scopes (missing: ${o.join(", ")}) \u2014 the Claude Design app registration may be incomplete or out of date.`,
    };
  }
  if (!r.refreshToken || !r.expiresAt) {
    if (r.refreshToken) await revokeOAuthToken(r.refreshToken, t);
    return {
      ok: !1,
      message:
        "The token response was missing a refresh token or expiry \u2014 cannot store a usable design credential.",
    };
  }
  return {
    ok: !0,
    slot: {
      accessToken: r.accessToken,
      refreshToken: r.refreshToken,
      expiresAt: r.expiresAt,
      scopes: r.scopes.filter((s) => DESIGN_OAUTH_SCOPES.some((e) => e === s)),
      clientId: t,
    },
  };
}
function isRemoteSession() {
  return a.isSSH() || a.CLAUDE_CODE_REMOTE === !0 || Nn();
}
var A = 300000;
async function startDesignBrowserLogin(r) {
  if (r?.aborted) return { ok: !1, message: "Design login was interrupted." };
  if (!isDesignOauthClientConfigured())
    return {
      ok: !1,
      message:
        "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client.",
    };
  if (isRemoteSession())
    return {
      ok: !1,
      message:
        "This session is remote, so the browser can't reach the local sign-in listener. Run /design-login instead \u2014 it supports pasting the authorization code manually.",
    };
  let t = getDesignOauthClientId(),
    o = new OAuthLoginFlow(),
    s = !1,
    e = !1,
    c;
  try {
    let u = o.startOAuthFlow(async () => {}, {
      loginWithClaudeAi: !0,
      oauthClient: { clientId: t, scopes: DESIGN_OAUTH_SCOPES },
      skipProfileFetch: !0,
      successRedirectUrl: getOauthConfig().CLAUDEAI_SUCCESS_URL,
    });
    u.then((m) => {
      if (e && m.refreshToken) revokeOAuthToken(m.refreshToken, t);
    }).catch(() => {});
    let i = await Promise.race([
        u,
        new Promise((m, _) => {
          ((c = setTimeout(() => {
            ((s = !0), (e = !0), _(Error("design login timed out")));
          }, A)),
            r?.addEventListener(
              "abort",
              () => {
                ((e = !0), _(Error("design login interrupted")));
              },
              { once: !0 },
            ));
        }),
      ]),
      d = await validateDesignOauthResponse(i, t);
    if (!d.ok) return { ok: !1, message: d.message };
    if (!(await saveDesignOauthTokens(d.slot)).success)
      return (
        await revokeOAuthToken(d.slot.refreshToken, d.slot.clientId),
        {
          ok: !1,
          message:
            "Could not save the design credential to secure storage. Retry, or run /design-login.",
        }
      );
    return { ok: !0, accessToken: d.slot.accessToken };
  } catch (u) {
    if (((e = !0), r?.aborted))
      return { ok: !1, message: "Design login was interrupted." };
    if (s)
      return {
        ok: !1,
        message:
          "The browser authorization timed out after 5 minutes. Retry, or run /design-login for the manual flow.",
      };
    return {
      ok: !1,
      message: `The browser authorization failed (${l(u)}). Run /design-login to retry with the manual flow.`,
    };
  } finally {
    if (c !== void 0) clearTimeout(c);
    o.cleanup();
  }
}
export { readDesignOauthTokens, saveDesignOauthTokens, ensureDesignAccessToken, getDesignOauthClientId, isDesignOauthClientConfigured, validateDesignOauthResponse, isRemoteSession, startDesignBrowserLogin };
