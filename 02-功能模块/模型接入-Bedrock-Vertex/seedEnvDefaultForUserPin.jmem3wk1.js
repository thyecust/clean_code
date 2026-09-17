// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 69 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { fromEnum, fromNumber } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { buildVertexBaseUrl, getVertexRegionForModel } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getModelForAnalytics, DEFAULT_3P_SONNET_KEY, DEFAULT_VERTEX_OPUS_KEY, getMarketingNameForModel, authState, getEnvAuthorizationHeader, isHostManagedProviderAuth, getConfiguredVertexProjectId, refreshGcpCredentialsIfNeeded } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getInitialSettings } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { MODEL_CONFIGS_BY_KEY, getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { tierConfig, collectStalePins, seedEnvDefaultForUserPin, collectUnpinnedTiers, predecessorsInTier } from "../../01-核心基础设施/模型目录-ModelCatalog/chunk-nzt97y14.js";
import { buildVertexGoogleAuth, suppressVertexAuthRejection, vertexResidualCredentialPins } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
var g = tierConfig(DEFAULT_VERTEX_OPUS_KEY);
async function findVertexUpgradeCandidates() {
  if (getAPIProvider() !== "vertex") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let o = collectStalePins(g);
  if (o.length === 0) return [];
  logEvent("tengu_vertex_upgrade_check", { stale_tiers: fromNumber(o.length) });
  let c = (
    await Promise.all(
      o.map(async (e) => {
        let r = MODEL_CONFIGS_BY_KEY[e.defaultKey].vertex;
        if (r === null) return null;
        let t = await d(r);
        if (
          (logEvent("tengu_vertex_probe_result", {
            tier: fromEnum(e.tier),
            model_id: getModelForAnalytics(r),
            accessible: t,
          }),
          !t)
        )
          return null;
        let l = getMarketingNameForModel(MODEL_CONFIGS_BY_KEY[e.pinnedKey].firstParty),
          f = getMarketingNameForModel(MODEL_CONFIGS_BY_KEY[e.defaultKey].firstParty);
        if (!l || !f) return null;
        return {
          tier: e.tier,
          envVar: e.envVar,
          fromKey: e.pinnedKey,
          fromMarketingName: l,
          toKey: e.defaultKey,
          toMarketingName: f,
          toVertexId: r,
        };
      }),
    )
  ).filter((e) => e !== null);
  return (
    logForDebugging(`[vertex-upgrade] tiersWithPin=${o.length} candidates=${c.length}`),
    c
  );
}
function C(o) {
  return seedEnvDefaultForUserPin(o, g);
}
async function checkVertexDefaultAvailability() {
  if (getAPIProvider() !== "vertex") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let o = getInitialSettings().modelOverrides,
    s = collectUnpinnedTiers(g, o);
  if (s.length === 0) return [];
  logEvent("tengu_vertex_default_check", { unpinned_tiers: fromNumber(s.length) });
  let c = await Promise.all(
      s.map(async (r) => {
        let t = MODEL_CONFIGS_BY_KEY[r.defaultKey],
          l = await d(t.vertex);
        if (
          (logEvent("tengu_vertex_probe_result", {
            tier: fromEnum(r.tier),
            model_id: getModelForAnalytics(t.vertex),
            accessible: l,
          }),
          l)
        )
          return null;
        let f = await y(r.defaultKey, r.tier, o);
        if (!f) return null;
        let m = getMarketingNameForModel(t.firstParty),
          p = getMarketingNameForModel(MODEL_CONFIGS_BY_KEY[f.key].firstParty);
        if (!m || !p) return null;
        return {
          tier: r.tier,
          envVar: r.envVar,
          defaultKey: r.defaultKey,
          defaultName: m,
          fallbackKey: f.key,
          fallbackName: p,
          fallbackVertexId: MODEL_CONFIGS_BY_KEY[f.key].vertex,
          ...(f.crossTier && { crossTier: !0 }),
        };
      }),
    ),
    e = [];
  for (let r of c) if (r !== null) e.push(r);
  return (
    logForDebugging(`[vertex-fallback] unpinnedTiers=${s.length} fallbacks=${e.length}`),
    e
  );
}
async function y(o, s, c) {
  let e = predecessorsInTier(o, s).filter((t) => !c?.[MODEL_CONFIGS_BY_KEY[t].firstParty]),
    r = await Promise.all(e.map((t) => d(MODEL_CONFIGS_BY_KEY[t].vertex)));
  for (let [t, l] of r.entries()) if (l) return { key: e[t] };
  if (s === "opus") {
    let t = DEFAULT_3P_SONNET_KEY;
    if (await d(MODEL_CONFIGS_BY_KEY[t].vertex)) return { key: t, crossTier: !0 };
  }
  return null;
}
async function d(o) {
  if (o === null) return !1;
  try {
    let [{ AnthropicVertex: s }, { getProxyFetchOptions: c }] =
        await Promise.all([
          import("./AnthropicVertex.1thfsdgf.js"),
          import("../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js"),
        ]),
      e = a.CLAUDE_CODE_SKIP_VERTEX_AUTH,
      r = isHostManagedProviderAuth();
    if (!e && !r) await refreshGcpCredentialsIfNeeded();
    let t = await buildVertexGoogleAuth(e ? { kind: "skip" } : { kind: "default" }, getConfiguredVertexProjectId()),
      l = getVertexRegionForModel(o),
      f = e ? getEnvAuthorizationHeader() : void 0;
    return (
      await suppressVertexAuthRejection(
        new s({
          region: l,
          googleAuth: t,
          maxRetries: 0,
          defaultHeaders: vertexResidualCredentialPins(e ? { wireAuthorization: f } : !1),
          ...authState,
          timeout: 8000,
          fetchOptions: c({ url: a.ANTHROPIC_VERTEX_BASE_URL || buildVertexBaseUrl(l) }),
        }),
      ).messages.create({
        model: o,
        max_tokens: 1,
        messages: [{ role: "user", content: "." }],
      }),
      !0
    );
  } catch (s) {
    if (s?.status === 429) return !0;
    return !1;
  }
}
export {
  checkVertexDefaultAvailability,
  findVertexUpgradeCandidates,
  C as seedEnvDefaultForUserPin,
};
