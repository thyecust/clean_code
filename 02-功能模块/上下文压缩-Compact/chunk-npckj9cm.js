// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { Qs, ns, p8, xW } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { le, Zt, Io, Xu, cr, nt, hm } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { OAUTH_BETA_HEADER, getOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { cc } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isEssentialTrafficOnly, logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  withOAuth401Retry,
  formatModelCostPerMtok,
  isNonCustomFableModel,
  getMainLoopModel,
  firstPartyNameToCanonical,
  getMarketingNameForModel,
  resetBetaCaches,
  refreshGatewayCredentialIfNeeded,
  invalidateToolDefinitionCache,
  shouldUseWIFAuth,
  getAnthropicApiKeySafe,
  getClaudeAIOAuthTokens,
  isClaudeAISubscriber,
  hasProfileScope,
  buildClientDataCacheKey,
  CLIENT_DATA_SLOT_STALE_AFTER_MS,
  isClientDataCacheEntry,
  upsertClientDataCacheSlot,
  saveGlobalConfig,
  getGlobalConfig,
  setClientDataCacheKeyGetter,
  setClientDataReadGate,
  setClientDataStrictReadGate,
  setClientDataStaleMatchGetter,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getEnvEntrypoint } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { formatLabelText, formatDescriptionText } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { stripLongContextTags, findModelConfigByProviderId, getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { getWIFCredentials, getWIFTokenCache } from "../认证-OAuth登录/wif-credentials.js";
import { parseCustomHeadersFromEnv } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getClientUserAgent } from "../../01-核心基础设施/HTTP-网络层/user-agent.js";
var X = createLazyValue(() =>
  nt({
    client_data: hm(Xu()).nullish(),
    additional_model_options: cr(
      nt({
        model: le(),
        name: le(),
        description: le(),
        disabled_reason: le().nullish(),
      }).transform(
        ({ model: t, name: e, description: u, disabled_reason: l }) => {
          let d = findModelConfigByProviderId(stripLongContextTags(t)),
            c = d ? getMarketingNameForModel(t) : null,
            _ = u;
          if (d && c && l == null) {
            let s = u ? (u.startsWith(c) ? u : `${c} \xB7 ${u}`) : c,
              o = formatModelCostPerMtok(t);
            _ = o && !isClaudeAISubscriber() && !s.includes("per Mtok") ? `${s} \xB7 ${o}` : s;
          }
          return {
            value: t,
            label: l != null ? `${e} (disabled)` : e,
            description: l ? (_ ? `${_} \xB7 ${l}` : l) : _,
            ...(l != null && { disabled: !0 }),
          };
        },
      ),
    ).nullish(),
    additional_model_costs: hm(
      nt({
        input_tokens: Zt(),
        output_tokens: Zt(),
        prompt_cache_write_tokens: Zt(),
        prompt_cache_write_1h_tokens: Zt().nullish(),
        prompt_cache_read_tokens: Zt(),
        web_search_requests: Zt().nullish(),
      }).transform((t) => ({
        inputTokens: t.input_tokens,
        outputTokens: t.output_tokens,
        promptCacheWriteTokens: t.prompt_cache_write_tokens,
        ...(t.prompt_cache_write_1h_tokens != null && {
          promptCacheWrite1hTokens: t.prompt_cache_write_1h_tokens,
        }),
        promptCacheReadTokens: t.prompt_cache_read_tokens,
        webSearchRequests: t.web_search_requests ?? 0.01,
      })),
    ).nullish(),
    model_access: cr(
      nt({
        api_name: le(),
        entitled: Io(),
        max_effort_level: le().nullish(),
      }).transform(({ api_name: t, entitled: e, max_effort_level: u }) => ({
        apiName: t,
        entitled: e,
        ...(u != null && { maxEffortLevel: u }),
      })),
    ).nullish(),
    org_model_default: nt({
      name: le(),
      updated_at: le(),
      data_source: le(),
      override_user_selection: Io(),
      default_effort_level: le().nullish(),
    }).nullish(),
    oauth_account: nt({
      account_uuid: le().nullish(),
      account_email: le().nullish(),
      organization_uuid: le().nullish(),
      organization_name: le().nullish(),
      organization_type: le().nullish(),
      organization_rate_limit_tier: le().nullish(),
      user_rate_limit_tier: le().nullish(),
      seat_tier: le().nullish(),
    })
      .passthrough()
      .nullish(),
    auto_compact_windows: hm(le(), Xu()).nullish(),
    narrowed: Io().nullish(),
  }),
);
function O() {
  return {
    entrypoint: getEnvEntrypoint(),
    model: stripLongContextTags(getMainLoopModel()),
    ccVersion: {
      ISSUES_EXPLAINER:
        "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.263",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-06T01:08:56Z",
      GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
      HOOKS_WORKER_URL:
        "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "darwin",
    }.VERSION,
    organizationUuid: getGlobalConfig().oauthAccount?.organizationUuid ?? null,
  };
}
function J() {
  setClientDataCacheKeyGetter(() => {
    try {
      return buildClientDataCacheKey(O());
    } catch (t) {
      return (logError(t), "bi1-key-unavailable");
    }
  });
}
J();
function E() {
  let t = getAPIProvider();
  return (
    t === "firstParty" ||
    (t === "anthropicAws" && a.ANTHROPIC_AWS_BASE_URL === void 0)
  );
}
function registerClientDataGetters() {
  try {
    (setClientDataReadGate(() => {
      try {
        return E();
      } catch (t) {
        return (logError(t), !0);
      }
    }),
      setClientDataStrictReadGate(() => {
        try {
          return E();
        } catch (t) {
          return (logError(t), !1);
        }
      }),
      setClientDataStaleMatchGetter(() => {
        try {
          if (!E()) return null;
          let t = O();
          return {
            entrypoint: t.entrypoint ?? null,
            model: t.model,
            org: t.organizationUuid,
          };
        } catch (t) {
          return (logError(t), null);
        }
      }));
  } catch (t) {
    logError(t);
  }
}
function Q(t) {
  return {
    params: { entrypoint: t.entrypoint, model: t.model },
    userAgent: `claude-code/${t.ccVersion}`,
  };
}
function H(t, e) {
  if (!t || !e) return t;
  if (e.account_uuid != null && e.account_uuid !== t.accountUuid) return t;
  let u = {
    organizationType: e.organization_type ?? null,
    organizationRateLimitTier: e.organization_rate_limit_tier ?? null,
    userRateLimitTier: e.user_rate_limit_tier ?? null,
    seatTier: e.seat_tier ?? null,
  };
  if (e.account_email != null) u.emailAddress = e.account_email;
  if (e.organization_uuid != null) u.organizationUuid = e.organization_uuid;
  if (e.organization_name != null) u.organizationName = e.organization_name;
  return { ...t, ...u };
}
function Z(t) {
  if (!t?.account_uuid) return;
  p8({
    accountUuid: t.account_uuid,
    emailAddress: t.account_email ?? void 0,
    organizationUuid: t.organization_uuid ?? void 0,
  });
}
async function tt(t, e) {
  if (getAPIProvider() === "gateway") {
    if (!a.CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY)
      return (
        logForDebugging(
          "[Bootstrap] Skipped gateway /v1/models (CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY not set)",
        ),
        { response: { additional_model_options: [] }, viaScopelessOAuth: !1 }
      );
    let o = await ot(e);
    return o && { response: o, viaScopelessOAuth: !1 };
  }
  if (isEssentialTrafficOnly())
    return (logForDebugging("[Bootstrap] Skipped: Nonessential traffic disabled"), null);
  if (getAPIProvider() !== "firstParty")
    return (logForDebugging("[Bootstrap] Skipped: 3P provider"), null);
  let { params: u, userAgent: l } = Q(t),
    d = async (o, r) => {
      logForDebugging("[Bootstrap] Fetching");
      let p = await at.get(`${o}/api/claude_cli/bootstrap`, {
          headers: {
            "Content-Type": "application/json",
            "User-Agent": l,
            ...parseCustomHeadersFromEnv(),
            ...r,
          },
          params: u,
          timeout: 5000,
        }),
        A = X().safeParse(p.data);
      if (!A.success)
        return (
          logForDebugging(`[Bootstrap] Response failed validation: ${A.error.message}`),
          logFeatureSad("api_bootstrap_fetch", "parse_failed"),
          null
        );
      return (logForDebugging("[Bootstrap] Fetch ok"), A.data);
    },
    c = getAnthropicApiKeySafe();
  if (!c && shouldUseWIFAuth())
    try {
      let [o, r] = await Promise.all([getWIFTokenCache(), getWIFCredentials()]);
      if (o !== null) {
        let p = await d(
          a.ANTHROPIC_BASE_URL || r?.baseURL || getOauthConfig().BASE_API_URL,
          {
            ...r?.extraHeaders,
            Authorization: `Bearer ${await o.getToken()}`,
            "anthropic-beta": OAUTH_BETA_HEADER,
          },
        );
        return p && { response: p, viaScopelessOAuth: !1 };
      }
    } catch (o) {
      return (
        logForDebugging(
          `[Bootstrap] WIF fetch failed: ${at.isAxiosError(o) ? (o.response?.status ?? o.code) : o instanceof Error ? o.constructor.name : "unknown"}`,
        ),
        logFeatureSad("api_bootstrap_fetch", "wif_unavailable"),
        null
      );
    }
  if (!getClaudeAIOAuthTokens()?.accessToken && !c)
    return (logForDebugging("[Bootstrap] Skipped: no usable OAuth, WIF, or API key"), null);
  if (a.ANTHROPIC_UNIX_SOCKET)
    return (
      logForDebugging("[Bootstrap] Skipped: unix-socket-proxied session"),
      logFeatureSad("api_bootstrap_fetch", "unix_socket_skip"),
      null
    );
  let s = !1;
  try {
    let o = await withOAuth401Retry(
      async () => {
        let r = getClaudeAIOAuthTokens()?.accessToken,
          p = hasProfileScope(),
          A;
        if (r && (p || !c))
          ((s = !p && !c),
            (A = { Authorization: `Bearer ${r}`, "anthropic-beta": OAUTH_BETA_HEADER }));
        else if (c) ((s = !1), (A = { "x-api-key": c }));
        else
          return (logForDebugging("[Bootstrap] No auth available on retry, aborting"), null);
        return d(getOauthConfig().BASE_API_URL, A);
      },
      { credentials: e },
    );
    return o && { response: o, viaScopelessOAuth: s };
  } catch (o) {
    let r = at.isAxiosError(o) ? o.response?.status : void 0;
    if (s && r === 403)
      return (
        logForDebugging("[Bootstrap] Skipped: 403 for OAuth token without profile scope"),
        logFeatureSad("api_bootstrap_fetch", "no_profile_scope_403"),
        null
      );
    throw (
      logForDebugging(
        `[Bootstrap] Fetch failed: ${at.isAxiosError(o) ? (o.response?.status ?? o.code) : "unknown"}`,
      ),
      logFeatureBad("api_bootstrap_fetch", "request_failed"),
      o
    );
  }
}
function bootstrapFetchCanConvergeSlot() {
  if (a.ANTHROPIC_UNIX_SOCKET) return !1;
  return Boolean(getAnthropicApiKeySafe()) || (Boolean(getClaudeAIOAuthTokens()?.accessToken) && hasProfileScope());
}
async function fetchBootstrapData(t, e) {
  await refreshBootstrapData(t, e);
}
async function refreshBootstrapData(t, e, { keepRenderCaches: u = !1 } = {}) {
  registerClientDataGetters();
  try {
    let l = getAPIProvider() === "firstParty";
    if (!l) (resetBetaCaches(), invalidateToolDefinitionCache());
    let d = O(),
      c = xW(),
      _ = await tt(d, e);
    if (!_) return !1;
    let { response: s, viaScopelessOAuth: o } = _;
    if (c !== xW())
      return (
        logForDebugging(
          "[Bootstrap] Discarding response fetched under a superseded credential",
        ),
        logFeatureSad("api_bootstrap_fetch", "superseded_credential"),
        !1
      );
    logFeatureOk("api_bootstrap_fetch");
    let r = getGlobalConfig(),
      p = s.narrowed ?? o,
      A = p && s.additional_model_options == null,
      D = p && s.additional_model_costs == null,
      R = p && s.model_access == null,
      v = p && s.org_model_default == null,
      z = p && s.auto_compact_windows == null,
      T = s.client_data ?? null,
      S = A
        ? (r.additionalModelOptionsCache ?? [])
        : (s.additional_model_options ?? []),
      M = D
        ? (r.additionalModelCostsCache ?? {})
        : (s.additional_model_costs ?? {}),
      U = R ? (r.modelAccessCache ?? []) : (s.model_access ?? []),
      I = z
        ? (r.autoCompactWindowsCache ?? null)
        : (s.auto_compact_windows ?? null);
    Z(s.oauth_account);
    let j = xW(),
      k = H(r.oauthAccount, s.oauth_account),
      P = s.org_model_default
        ? {
            ...s.org_model_default,
            ...(k?.organizationUuid && { orgUuid: k.organizationUuid }),
          }
        : v
          ? (r.orgModelDefaultCache ?? null)
          : null,
      K = buildClientDataCacheKey({
        ...d,
        organizationUuid: k?.organizationUuid ?? d.organizationUuid,
      }),
      F = r.clientDataCacheSlots?.[K],
      w = isClientDataCacheEntry(F) ? F : void 0,
      x = w !== void 0,
      q = Qs(k, r.oauthAccount),
      N = l && w !== void 0 && Date.now() - w.at > CLIENT_DATA_SLOT_STALE_AFTER_MS,
      b = l && (w === void 0 || !Qs(w.data ?? null, T));
    logEvent("tengu_client_data_cache_key", {
      slot_hit: x,
      slot_changed: b,
      legacy_fallback: !x && r.clientDataCache != null,
      slot_stale: N,
    });
    let W = l,
      L = typeof r.additionalModelOptionsAnsweredAt === "number",
      V =
        A ||
        (W
          ? Array.isArray(r.additionalModelOptionsCache) &&
            L &&
            Qs(r.additionalModelOptionsCache, S)
          : !L && Qs(r.additionalModelOptionsCache ?? [], S));
    if (
      !b &&
      !N &&
      V &&
      Qs(r.additionalModelCostsCache ?? {}, M) &&
      Qs(r.modelAccessCache ?? [], U) &&
      Qs(r.orgModelDefaultCache ?? null, P) &&
      (!l || Qs(r.autoCompactWindowsCache ?? null, I)) &&
      q
    )
      return (logForDebugging("[Bootstrap] Cache unchanged, skipping write"), !0);
    logForDebugging("[Bootstrap] Cache updated, persisting to disk");
    let G = !1;
    if (
      (await saveGlobalConfig((C) => {
        if (j !== xW()) return ((G = !0), C);
        let B = H(C.oauthAccount, s.oauth_account),
          Y = buildClientDataCacheKey({ ...d, organizationUuid: B?.organizationUuid ?? null });
        return {
          ...C,
          clientDataCacheSlots: l
            ? upsertClientDataCacheSlot(C.clientDataCacheSlots, Y, {
                data: T,
                at: Date.now(),
                entrypoint: d.entrypoint ?? null,
                model: d.model,
                org: B?.organizationUuid ?? null,
              })
            : C.clientDataCacheSlots,
          ...(A
            ? {}
            : {
                additionalModelOptionsCache: S,
                additionalModelOptionsAnsweredAt: W ? Date.now() : void 0,
              }),
          ...(D ? {} : { additionalModelCostsCache: M }),
          ...(R ? {} : { modelAccessCache: U }),
          ...(v ? {} : { orgModelDefaultCache: P }),
          autoCompactWindowsCache:
            l && !z ? I : (C.autoCompactWindowsCache ?? null),
          oauthAccount: B,
        };
      }, t),
      G)
    )
      return !1;
    if (b && !u) (resetBetaCaches(), invalidateToolDefinitionCache());
    return !0;
  } catch (l) {
    if (cc(l))
      logForDebugging(`[Bootstrap] fetchBootstrapData failed: ${l}`, { level: "error" });
    else logError(l);
    return !1;
  }
}
var et = createLazyValue(() =>
  nt({
    data: cr(
      nt({
        id: le(),
        display_name: le().nullish(),
        description: le().nullish(),
      }),
    ),
  }),
);
async function ot(t) {
  await refreshGatewayCredentialIfNeeded(t);
  let e = ns();
  if (!e) return null;
  try {
    let u = await at.get(`${e.url}/v1/models`, {
        headers: {
          Authorization: `Bearer ${e.jwt}`,
          "anthropic-version": "2023-06-01",
          "User-Agent": getClientUserAgent(),
        },
        params: { limit: 1000 },
        timeout: 5000,
      }),
      l = et().safeParse(u.data);
    if (!l.success)
      return (
        logForDebugging(
          `[Bootstrap] Gateway /v1/models failed validation: ${l.error.message}`,
        ),
        null
      );
    let d = l.data.data
      .filter((c) => /(claude|anthropic)/i.test(c.id))
      .filter((c) => {
        let _ = findModelConfigByProviderId(c.id);
        return _ === null || isNonCustomFableModel(firstPartyNameToCanonical(_.firstParty));
      })
      .map((c) => ({
        value: c.id,
        label: formatLabelText(c.display_name ?? "") || formatLabelText(c.id),
        description: formatDescriptionText(c.description ?? ""),
      }));
    return (
      logForDebugging(`[Bootstrap] Gateway /v1/models \u2192 ${d.length} custom options`),
      { additional_model_options: d }
    );
  } catch (u) {
    return (
      logForDebugging(
        `[Bootstrap] Gateway /v1/models fetch failed: ${at.isAxiosError(u) ? (u.response?.status ?? u.code) : "unknown"}`,
      ),
      null
    );
  }
}
export { registerClientDataGetters, bootstrapFetchCanConvergeSlot, fetchBootstrapData, refreshBootstrapData };
