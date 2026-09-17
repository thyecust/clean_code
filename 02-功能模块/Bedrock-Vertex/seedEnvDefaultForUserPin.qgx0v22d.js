// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 69 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { fromEnum, fromNumber } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { Iz } from "./chunk-5ndhfaq9.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import {
  cA,
  RAt,
  Hme,
  hse,
  mQe,
  bt,
  DEFAULT_3P_SONNET_KEY,
  DEFAULT_BEDROCK_OPUS_KEY,
  getMarketingNameForModel,
  DR,
  Im,
  VC,
  Rw,
  nRe,
  isHostManagedProviderAuth,
  hostManagedAwsSdkCredentials,
  refreshAndGetAwsCredentials,
  getDefaultAwsProviderChain,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getInitialSettings } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { to, getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { tierConfig, collectStalePins, seedEnvDefaultForUserPin, collectUnpinnedTiers, predecessorsInTier } from "../../01-核心基础设施/共享小工具-未细化/chunk-nzt97y14.js";
var y = tierConfig(DEFAULT_BEDROCK_OPUS_KEY);
async function findBedrockUpgradeCandidates() {
  if (getAPIProvider() !== "bedrock") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let o = collectStalePins(y, (e) => e.includes("application-inference-profile"));
  if (o.length === 0) return [];
  i("tengu_bedrock_upgrade_check", { stale_tiers: fromNumber(o.length) });
  let s;
  try {
    s = await RAt();
  } catch {
    return [];
  }
  let t = mQe(await cA()),
    c = [];
  for (let e of o) {
    let p = to[e.defaultKey].firstParty,
      r = Hme(s, p, t);
    if (!r) continue;
    let d = getMarketingNameForModel(to[e.pinnedKey].firstParty),
      l = getMarketingNameForModel(to[e.defaultKey].firstParty);
    if (!d || !l) continue;
    c.push({
      tier: e.tier,
      envVar: e.envVar,
      fromKey: e.pinnedKey,
      fromMarketingName: d,
      toKey: e.defaultKey,
      toMarketingName: l,
      toBedrockId: r,
    });
  }
  let f = (
    await Promise.all(
      c.map(async (e) => {
        let p = await _(e.toBedrockId, e.tier);
        return (
          i("tengu_bedrock_probe_result", {
            tier: fromEnum(e.tier),
            model_id: bt(e.toBedrockId),
            accessible: p,
          }),
          p ? e : null
        );
      }),
    )
  ).filter((e) => e !== null);
  return (
    n(`[bedrock-upgrade] tiersWithPin=${o.length} candidates=${f.length}`),
    f
  );
}
function U(o) {
  return seedEnvDefaultForUserPin(o, y);
}
async function checkBedrockDefaultAvailability() {
  if (getAPIProvider() !== "bedrock") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let o = getInitialSettings().modelOverrides,
    s = collectUnpinnedTiers(y, o);
  if (s.length === 0) return [];
  i("tengu_bedrock_default_check", { unpinned_tiers: fromNumber(s.length) });
  let t;
  try {
    t = await RAt();
  } catch {
    t = [];
  }
  let c = mQe(await cA()),
    g = await Promise.all(
      s.map(async (e) => {
        let p = to[e.defaultKey],
          r = h(e.defaultKey, t, c);
        if (!r) return null;
        let d = await _(r, e.tier);
        if (
          (i("tengu_bedrock_probe_result", {
            tier: fromEnum(e.tier),
            model_id: bt(r),
            accessible: d,
          }),
          d)
        )
          return null;
        let l = await A(e.defaultKey, e.tier, t, c, o);
        if (!l) return null;
        let m = getMarketingNameForModel(p.firstParty),
          k = getMarketingNameForModel(to[l.key].firstParty);
        if (!m || !k) return null;
        return {
          tier: e.tier,
          envVar: e.envVar,
          defaultKey: e.defaultKey,
          defaultName: m,
          fallbackKey: l.key,
          fallbackName: k,
          fallbackBedrockId: l.regionalId,
          ...(l.crossTier && { crossTier: !0 }),
        };
      }),
    ),
    f = [];
  for (let e of g) if (e !== null) f.push(e);
  return (
    n(`[bedrock-fallback] unpinnedTiers=${s.length} fallbacks=${f.length}`),
    f
  );
}
function h(o, s, t) {
  let c = to[o],
    g = Hme(s, c.firstParty, t);
  if (g) return g;
  if (!c.bedrock) return null;
  return hse(c.bedrock, t);
}
async function A(o, s, t, c, g) {
  async function f(r, d) {
    let l = h(r, t, c);
    if (!l) return null;
    return (await _(l, d)) ? l : null;
  }
  let e = predecessorsInTier(o, s).filter((r) => !g?.[to[r].firstParty]),
    p = await Promise.all(e.map((r) => f(r, s)));
  for (let [r, d] of p.entries()) if (d) return { key: e[r], regionalId: d };
  if (s === "opus") {
    let r = await f(DEFAULT_3P_SONNET_KEY, "sonnet");
    if (r) return { key: DEFAULT_3P_SONNET_KEY, regionalId: r, crossTier: !0 };
  }
  return null;
}
async function _(o, s) {
  try {
    let [{ AnthropicBedrock: t }, { getProxyFetchOptions: c }] =
        await Promise.all([
          import("./AnthropicBedrockMantle.wb95xgtr.js"),
          import("../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js"),
        ]),
      g =
        (s === "haiku" && Iz(a.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION)) ||
        (await cA()),
      f = {
        awsRegion: g,
        maxRetries: 0,
        timeout: 8000,
        fetchOptions: c({
          url:
            a.ANTHROPIC_BEDROCK_BASE_URL ||
            `https://bedrock-runtime.${g}.amazonaws.com`,
        }),
      },
      e,
      p = a.AWS_BEARER_TOKEN_BEDROCK;
    if (p)
      e = new t({
        ...f,
        apiKey: p,
        defaultHeaders: {
          ...Im(),
          ...VC(),
          Authorization: `Bearer ${p}`,
          ...(!DR() && { "X-Api-Key": null }),
        },
      });
    else {
      let r = a.CLAUDE_CODE_SKIP_BEDROCK_AUTH,
        d = isHostManagedProviderAuth(),
        l = {
          authToken: null,
          defaultHeaders: {
            ...Im(),
            ...VC(),
            Authorization: null,
            ...(!DR() && { "X-Api-Key": null }),
          },
          ...Rw,
        },
        m = r ? nRe() : void 0,
        k = r || d ? null : await refreshAndGetAwsCredentials();
      e = k
        ? new t({
            ...f,
            ...l,
            awsAccessKey: k.accessKeyId,
            awsSecretKey: k.secretAccessKey,
            awsSessionToken: k.sessionToken,
          })
        : new t({
            ...f,
            ...(r &&
              !m && {
                skipAuth: !0,
                authToken: null,
                defaultHeaders: { ...VC() },
                ...Rw,
              }),
            ...(r &&
              m && {
                apiKey: m.match(/^Bearer (.+)$/i)?.[1] ?? m,
                defaultHeaders: { ...VC(), Authorization: m },
              }),
            ...(!r && l),
            ...(!r &&
              d && {
                providerChainResolver: hostManagedAwsSdkCredentials("Bedrock").providerChainResolver,
              }),
            ...(!r &&
              !d &&
              !a.CLAUDE_CODE_SKIP_AWS_CRED_CACHE && {
                providerChainResolver: () => getDefaultAwsProviderChain(g),
              }),
          });
    }
    return (
      await e.messages.create({
        model: o,
        max_tokens: 1,
        messages: [{ role: "user", content: "." }],
      }),
      !0
    );
  } catch (t) {
    if (t?.status === 429) return !0;
    return !1;
  }
}
export {
  checkBedrockDefaultAvailability,
  findBedrockUpgradeCandidates,
  U as seedEnvDefaultForUserPin,
};
