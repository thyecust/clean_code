// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { Qs, ns, p8, xW } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { le, Zt, Io, Xu, cr, nt, hm } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { OAUTH_BETA_HEADER as Bc, getOauthConfig as Vt } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { cc } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { St, logError as h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { logFeatureOk as y, logFeatureBad as f, logFeatureSad as g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  withOAuth401Retry as T_,
  Orr,
  isNonCustomFableModel as Ase,
  getMainLoopModel as rt,
  firstPartyNameToCanonical as Yh,
  getMarketingNameForModel as bu,
  gU,
  C6,
  T5,
  shouldUseWIFAuth as Zc,
  getAnthropicApiKeySafe as gb,
  getClaudeAIOAuthTokens as Yt,
  isClaudeAISubscriber as gt,
  hasProfileScope as lp,
  s5t,
  Bsr,
  _vt,
  jsr,
  Te,
  ee,
  ZRn,
  ekn,
  tkn,
  rkn,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Vd } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { xb, eB } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { er, BR, getAPIProvider as Pe } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { getWIFCredentials as m2e, getWIFTokenCache as BQ } from "../认证-OAuth登录/chunk-x3rm9w4b.js";
import { lDe } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { va } from "../../01-核心基础设施/共享小工具-未细化/chunk-qdhvxsk2.js";
var X = m(() =>
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
          let d = BR(er(t)),
            c = d ? bu(t) : null,
            _ = u;
          if (d && c && l == null) {
            let s = u ? (u.startsWith(c) ? u : `${c} \xB7 ${u}`) : c,
              o = Orr(t);
            _ = o && !gt() && !s.includes("per Mtok") ? `${s} \xB7 ${o}` : s;
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
    entrypoint: Vd(),
    model: er(rt()),
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
    organizationUuid: ee().oauthAccount?.organizationUuid ?? null,
  };
}
function J() {
  ZRn(() => {
    try {
      return s5t(O());
    } catch (t) {
      return (h(t), "bi1-key-unavailable");
    }
  });
}
J();
function E() {
  let t = Pe();
  return (
    t === "firstParty" ||
    (t === "anthropicAws" && a.ANTHROPIC_AWS_BASE_URL === void 0)
  );
}
function registerClientDataGetters() {
  try {
    (ekn(() => {
      try {
        return E();
      } catch (t) {
        return (h(t), !0);
      }
    }),
      tkn(() => {
        try {
          return E();
        } catch (t) {
          return (h(t), !1);
        }
      }),
      rkn(() => {
        try {
          if (!E()) return null;
          let t = O();
          return {
            entrypoint: t.entrypoint ?? null,
            model: t.model,
            org: t.organizationUuid,
          };
        } catch (t) {
          return (h(t), null);
        }
      }));
  } catch (t) {
    h(t);
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
  if (Pe() === "gateway") {
    if (!a.CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY)
      return (
        n(
          "[Bootstrap] Skipped gateway /v1/models (CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY not set)",
        ),
        { response: { additional_model_options: [] }, viaScopelessOAuth: !1 }
      );
    let o = await ot(e);
    return o && { response: o, viaScopelessOAuth: !1 };
  }
  if (St())
    return (n("[Bootstrap] Skipped: Nonessential traffic disabled"), null);
  if (Pe() !== "firstParty")
    return (n("[Bootstrap] Skipped: 3P provider"), null);
  let { params: u, userAgent: l } = Q(t),
    d = async (o, r) => {
      n("[Bootstrap] Fetching");
      let p = await at.get(`${o}/api/claude_cli/bootstrap`, {
          headers: {
            "Content-Type": "application/json",
            "User-Agent": l,
            ...lDe(),
            ...r,
          },
          params: u,
          timeout: 5000,
        }),
        A = X().safeParse(p.data);
      if (!A.success)
        return (
          n(`[Bootstrap] Response failed validation: ${A.error.message}`),
          g("api_bootstrap_fetch", "parse_failed"),
          null
        );
      return (n("[Bootstrap] Fetch ok"), A.data);
    },
    c = gb();
  if (!c && Zc())
    try {
      let [o, r] = await Promise.all([BQ(), m2e()]);
      if (o !== null) {
        let p = await d(
          a.ANTHROPIC_BASE_URL || r?.baseURL || Vt().BASE_API_URL,
          {
            ...r?.extraHeaders,
            Authorization: `Bearer ${await o.getToken()}`,
            "anthropic-beta": Bc,
          },
        );
        return p && { response: p, viaScopelessOAuth: !1 };
      }
    } catch (o) {
      return (
        n(
          `[Bootstrap] WIF fetch failed: ${at.isAxiosError(o) ? (o.response?.status ?? o.code) : o instanceof Error ? o.constructor.name : "unknown"}`,
        ),
        g("api_bootstrap_fetch", "wif_unavailable"),
        null
      );
    }
  if (!Yt()?.accessToken && !c)
    return (n("[Bootstrap] Skipped: no usable OAuth, WIF, or API key"), null);
  if (a.ANTHROPIC_UNIX_SOCKET)
    return (
      n("[Bootstrap] Skipped: unix-socket-proxied session"),
      g("api_bootstrap_fetch", "unix_socket_skip"),
      null
    );
  let s = !1;
  try {
    let o = await T_(
      async () => {
        let r = Yt()?.accessToken,
          p = lp(),
          A;
        if (r && (p || !c))
          ((s = !p && !c),
            (A = { Authorization: `Bearer ${r}`, "anthropic-beta": Bc }));
        else if (c) ((s = !1), (A = { "x-api-key": c }));
        else
          return (n("[Bootstrap] No auth available on retry, aborting"), null);
        return d(Vt().BASE_API_URL, A);
      },
      { credentials: e },
    );
    return o && { response: o, viaScopelessOAuth: s };
  } catch (o) {
    let r = at.isAxiosError(o) ? o.response?.status : void 0;
    if (s && r === 403)
      return (
        n("[Bootstrap] Skipped: 403 for OAuth token without profile scope"),
        g("api_bootstrap_fetch", "no_profile_scope_403"),
        null
      );
    throw (
      n(
        `[Bootstrap] Fetch failed: ${at.isAxiosError(o) ? (o.response?.status ?? o.code) : "unknown"}`,
      ),
      f("api_bootstrap_fetch", "request_failed"),
      o
    );
  }
}
function bootstrapFetchCanConvergeSlot() {
  if (a.ANTHROPIC_UNIX_SOCKET) return !1;
  return Boolean(gb()) || (Boolean(Yt()?.accessToken) && lp());
}
async function fetchBootstrapData(t, e) {
  await refreshBootstrapData(t, e);
}
async function refreshBootstrapData(t, e, { keepRenderCaches: u = !1 } = {}) {
  registerClientDataGetters();
  try {
    let l = Pe() === "firstParty";
    if (!l) (gU(), T5());
    let d = O(),
      c = xW(),
      _ = await tt(d, e);
    if (!_) return !1;
    let { response: s, viaScopelessOAuth: o } = _;
    if (c !== xW())
      return (
        n(
          "[Bootstrap] Discarding response fetched under a superseded credential",
        ),
        g("api_bootstrap_fetch", "superseded_credential"),
        !1
      );
    y("api_bootstrap_fetch");
    let r = ee(),
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
      K = s5t({
        ...d,
        organizationUuid: k?.organizationUuid ?? d.organizationUuid,
      }),
      F = r.clientDataCacheSlots?.[K],
      w = _vt(F) ? F : void 0,
      x = w !== void 0,
      q = Qs(k, r.oauthAccount),
      N = l && w !== void 0 && Date.now() - w.at > Bsr,
      b = l && (w === void 0 || !Qs(w.data ?? null, T));
    i("tengu_client_data_cache_key", {
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
      return (n("[Bootstrap] Cache unchanged, skipping write"), !0);
    n("[Bootstrap] Cache updated, persisting to disk");
    let G = !1;
    if (
      (await Te((C) => {
        if (j !== xW()) return ((G = !0), C);
        let B = H(C.oauthAccount, s.oauth_account),
          Y = s5t({ ...d, organizationUuid: B?.organizationUuid ?? null });
        return {
          ...C,
          clientDataCacheSlots: l
            ? jsr(C.clientDataCacheSlots, Y, {
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
    if (b && !u) (gU(), T5());
    return !0;
  } catch (l) {
    if (cc(l))
      n(`[Bootstrap] fetchBootstrapData failed: ${l}`, { level: "error" });
    else h(l);
    return !1;
  }
}
var et = m(() =>
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
  await C6(t);
  let e = ns();
  if (!e) return null;
  try {
    let u = await at.get(`${e.url}/v1/models`, {
        headers: {
          Authorization: `Bearer ${e.jwt}`,
          "anthropic-version": "2023-06-01",
          "User-Agent": va(),
        },
        params: { limit: 1000 },
        timeout: 5000,
      }),
      l = et().safeParse(u.data);
    if (!l.success)
      return (
        n(
          `[Bootstrap] Gateway /v1/models failed validation: ${l.error.message}`,
        ),
        null
      );
    let d = l.data.data
      .filter((c) => /(claude|anthropic)/i.test(c.id))
      .filter((c) => {
        let _ = BR(c.id);
        return _ === null || Ase(Yh(_.firstParty));
      })
      .map((c) => ({
        value: c.id,
        label: xb(c.display_name ?? "") || xb(c.id),
        description: eB(c.description ?? ""),
      }));
    return (
      n(`[Bootstrap] Gateway /v1/models \u2192 ${d.length} custom options`),
      { additional_model_options: d }
    );
  } catch (u) {
    return (
      n(
        `[Bootstrap] Gateway /v1/models fetch failed: ${at.isAxiosError(u) ? (u.response?.status ?? u.code) : "unknown"}`,
      ),
      null
    );
  }
}
export { registerClientDataGetters, bootstrapFetchCanConvergeSlot, fetchBootstrapData, refreshBootstrapData };
