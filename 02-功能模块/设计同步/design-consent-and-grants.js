// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { R, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isEssentialTrafficOnly } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { httpClient, getClaudeAIOAuthTokens, getClaudeAIOAuthTokensAsync, checkAndRefreshOAuthTokenIfNeeded } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isFirstPartyProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { clearPlans, clearApprovedPlans, addVerifiedProjectGrant, shouldRecardProject, markAllProjectsForRecard, markProjectGrantIneligible } from "../记忆-CLAUDE.md/chunk-9b6sc1gb.js";
import { readDesignOauthTokens, ensureDesignAccessToken } from "./design-oauth-credentials.js";
import { registerDesignAuthResolver, registerFirstPartyDesignAuthChecker, registerDesignConsentProvider } from "./chunk-jhs1bd0k.js";
var u = ["agent_design_projects"];
function isDesignConsentBit(e) {
  return typeof e === "string" && u.includes(e);
}
function getDesignConsentPrompt(e) {
  switch (e) {
    case "agent_design_projects":
      return "Connect to Claude Design? Claude can read and edit your Design projects from this tool. Change anytime at claude.ai/design/settings or with /design revoke.";
  }
}
function invalidateDesignConsentCache(e) {
  ((e.consentCache = null),
    (e.consentFetch = null),
    e.consentCacheGeneration++);
}
async function c(e) {
  await checkAndRefreshOAuthTokenIfNeeded({ credentials: e });
  let t;
  if (isHoverRestEnabled() && e !== void 0) t = await getClaudeAIOAuthTokensAsync(e);
  else t = getClaudeAIOAuthTokens();
  let s =
    t?.refreshToken && t.scopes?.includes("user:design:read")
      ? t.accessToken
      : null;
  if (!s) {
    let r = await ensureDesignAccessToken(e);
    s = r.ok ? r.accessToken : (t?.accessToken ?? null);
  }
  return {
    auth: "none",
    ...(s && { headers: { Authorization: `Bearer ${s}` } }),
  };
}
async function _(e) {
  try {
    let t = await httpClient.get("/v1/design/consent", {
      ...(await c(e)),
      validateStatus: (r) => r < 500,
    });
    if (!t.ok || t.status !== 200) return {};
    let s = {};
    for (let r of u) {
      let o = t.data?.[r];
      if (typeof o === "boolean") s[r] = o;
    }
    return s;
  } catch (t) {
    return (
      logForDebugging(
        `Design consent pre-flight GET failed (${l(t)}); falling back to 403-seeded cache.`,
      ),
      {}
    );
  }
}
function seedDesignConsentBit(e, t, s) {
  if (t === "agent_design_projects" && s === !1) (clearApprovedPlans(e), markAllProjectsForRecard(e), clearPlans(e));
  e.consentCache = { ...(e.consentCache ?? {}), [t]: s };
}
async function hasDesignCredential(e) {
  return !!(await readDesignOauthTokens(e))?.accessToken;
}
async function h(e) {
  if (!isFirstPartyProvider()) return { ok: !1, reason: "wrong_provider" };
  if (isEssentialTrafficOnly()) return { ok: !1, reason: "essential_traffic_only" };
  await checkAndRefreshOAuthTokenIfNeeded({ credentials: e });
  let t;
  if (isHoverRestEnabled() && e !== void 0) t = await getClaudeAIOAuthTokensAsync(e);
  else t = getClaudeAIOAuthTokens();
  if (
    t?.accessToken &&
    t.refreshToken &&
    t.scopes?.includes("user:design:read")
  )
    return {
      ok: !0,
      accessToken: t.accessToken,
      bearer: "design_scoped_login",
    };
  let s = await ensureDesignAccessToken(e);
  if (s.ok)
    return { ok: !0, accessToken: s.accessToken, bearer: "design_credential" };
  if (t?.accessToken)
    return {
      ok: !0,
      accessToken: t.accessToken,
      bearer: t.scopes?.includes("user:design:read")
        ? "design_scoped_login"
        : "login",
    };
  return { ok: !1, reason: s.reason, detail: s.detail };
}
async function resolveDesignAuth(e) {
  return h(e);
}
async function wouldNeedDesignConsent(e, t) {
  if (!isFirstPartyProvider() || isEssentialTrafficOnly()) return null;
  if (e.consentCache === null) {
    let s = (e.consentFetch ??= _(t)),
      r = e.consentCacheGeneration,
      o = await s;
    if (e.consentCache === null && e.consentCacheGeneration === r) {
      e.consentCache = {};
      for (let a of u) {
        let i = o[a];
        if (typeof i === "boolean") seedDesignConsentBit(e, a, i);
      }
    }
    if (e.consentFetch === s) e.consentFetch = null;
  }
  return e.consentCache?.agent_design_projects === !1
    ? "agent_design_projects"
    : null;
}
async function needsDesignAuthorization(e) {
  if (!isFirstPartyProvider() || isEssentialTrafficOnly()) return !1;
  let t;
  if (isHoverRestEnabled() && e !== void 0) t = (await getClaudeAIOAuthTokensAsync(e))?.accessToken;
  else t = getClaudeAIOAuthTokens()?.accessToken;
  if (t) return !1;
  return !(await readDesignOauthTokens(e))?.accessToken;
}
async function postDesignConsent(e, t, s) {
  try {
    let r = await httpClient.post(
      "/v1/design/consent",
      { consent: t },
      { ...(await c(s)), validateStatus: (o) => o < 300 },
    );
    if (!r.ok)
      throw new R(
        `Couldn't record Design consent (${r.reason === "no-auth" ? r.detail : r.reason}).`,
        "design consent POST blocked by policy gate",
      );
  } catch (r) {
    throw (logFeatureBad("design_consent", "post_failed"), r);
  }
  (seedDesignConsentBit(e, t, !0), logFeatureOk("design_consent"));
}
async function revokeDesignConsent(e, t, s) {
  try {
    let r = await httpClient.delete(
      "/v1/design/consent",
      { consent: t },
      { ...(await c(s)), validateStatus: (o) => o < 300 || o === 404 },
    );
    if (!r.ok)
      throw new R(
        `Couldn't revoke Design consent (${r.reason === "no-auth" ? r.detail : r.reason}).`,
        "design consent DELETE blocked by policy gate",
      );
  } catch (r) {
    throw (logFeatureBad("design_consent", "delete_failed"), r);
  }
  (seedDesignConsentBit(e, t, !1), logFeatureOk("design_consent"));
}
async function k(e) {
  try {
    let t = await httpClient.get("/v1/design/grants", {
      ...(await c(e)),
      validateStatus: (o) => o < 500,
    });
    if (!t.ok || t.status !== 200) {
      let o = t.ok ? t.status : 0;
      return (
        logFeatureSad(
          "design_project_grant",
          o === 404 ? "probe_404_old_server" : "probe_http_error",
          { status: o },
        ),
        null
      );
    }
    let s = t.data?.grants;
    if (!Array.isArray(s))
      return (logFeatureSad("design_project_grant", "probe_shape"), null);
    let r = new Set();
    for (let o of s) {
      let a = o?.project_id;
      if (typeof a === "string" && a.length > 0) r.add(a);
    }
    return r;
  } catch (t) {
    return (
      logForDebugging(
        `Design project-grant probe failed (${l(t)}); falling back to the per-batch plan flow.`,
      ),
      logFeatureSad("design_project_grant", "probe_network"),
      null
    );
  }
}
async function checkDesignProjectGrant(e, t, s) {
  let r = (e.grantsFetch ??= k(s));
  try {
    let o = await r;
    if (o === null) return "unavailable";
    return o.has(t) ? "granted" : "notGranted";
  } finally {
    if (e.grantsFetch === r) e.grantsFetch = null;
  }
}
async function recordDesignProjectGrant(e, t, s) {
  let r;
  try {
    let o = await httpClient.post(
      "/v1/design/grants",
      { project_id: t },
      { ...(await c(s)), validateStatus: (a) => a < 300 || a === 404 },
    );
    if (!o.ok)
      throw new R(
        `Couldn't record the Design project write grant (${o.reason === "no-auth" ? o.detail : o.reason}).`,
        "design project grant POST blocked by policy gate",
      );
    r = o.status;
  } catch (o) {
    throw (logFeatureBad("design_project_grant", "post_failed"), o);
  }
  if (r === 404)
    throw (
      markProjectGrantIneligible(e, t),
      logFeatureBad("design_project_grant", "mint_refused_404"),
      new R(
        "This project cannot hold a durable write grant for this account (it may be shared from another organization, or not viewable) \u2014 use finalize_plan with writes/deletes and pass the returned plan_token for writes to this project.",
        "design project grant mint refused for this project",
      )
    );
  (addVerifiedProjectGrant(e, t), logFeatureOk("design_project_grant"));
}
function createDesignGrantWatcher(e, t, s) {
  let r = null;
  async function o() {
    let a;
    try {
      let i = await httpClient.get("/v1/design/grants", {
        ...(await c(s)),
        validateStatus: (d) => d < 500,
      });
      if (!i.ok || i.status !== 200) return null;
      a = i.data?.grants;
    } catch (i) {
      return (
        logForDebugging(`Server-approval watcher poll failed (${l(i)}); will poll again.`),
        null
      );
    }
    if (!Array.isArray(a)) return null;
    for (let i of a) {
      let d = i;
      if (d?.project_id !== t) continue;
      let p = typeof d.created_at === "string" ? Date.parse(d.created_at) : NaN;
      if (Number.isNaN(p)) return null;
      return { present: !0, createdAtMs: p };
    }
    return { present: !1 };
  }
  return {
    async poll() {
      let a = await o();
      if (a === null) return !1;
      if (r === null)
        return ((r = { createdAtMs: a.present ? a.createdAtMs : null }), !1);
      if (!a.present) return !1;
      if (!(r.createdAtMs === null || a.createdAtMs > r.createdAtMs)) return !1;
      if (shouldRecardProject(e, t)) return !1;
      return (addVerifiedProjectGrant(e, t), !0);
    },
  };
}
registerDesignAuthResolver(h);
registerFirstPartyDesignAuthChecker(async (e) => !!(await readDesignOauthTokens(e)));
registerDesignConsentProvider({
  wouldNeedDesignConsent: wouldNeedDesignConsent,
  consentPromptFor: getDesignConsentPrompt,
  postDesignConsent: postDesignConsent,
  seedDesignConsentBit: seedDesignConsentBit,
  isConsentBit: isDesignConsentBit,
});
export { isDesignConsentBit, getDesignConsentPrompt, invalidateDesignConsentCache, seedDesignConsentBit, hasDesignCredential, resolveDesignAuth, wouldNeedDesignConsent, needsDesignAuthorization, postDesignConsent, revokeDesignConsent, checkDesignProjectGrant, recordDesignProjectGrant, createDesignGrantWatcher };
