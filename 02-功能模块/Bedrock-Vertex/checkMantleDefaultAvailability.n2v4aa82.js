// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 70 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import {
  resolveAwsRegion,
  getUserSpecifiedModelSetting,
  DEFAULT_MANTLE_OPUS_KEY,
  getMarketingNameForModel,
  toProviderWireModelId,
  hasCustomApiKeyHeader,
  getAuthorizationHeaderPin,
  getAnthropicBetaHeaderPin,
  authState,
  getEnvAuthorizationHeader,
  isHostManagedProviderAuth,
  hostManagedAwsSdkCredentials,
  refreshAndGetAwsCredentials,
  getDefaultAwsProviderChain,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getInitialSettings } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { MODEL_CONFIGS_BY_KEY, getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { isProbeWrittenTierDefault } from "./apply-3p-default-fallbacks.js";
var M = Object.keys(MODEL_CONFIGS_BY_KEY).filter((e) => MODEL_CONFIGS_BY_KEY[e].mantle !== null);
async function checkMantleDefaultAvailability(e = DEFAULT_MANTLE_OPUS_KEY, s) {
  if (getAPIProvider() !== "mantle") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let r = getInitialSettings().modelOverrides;
  if (r?.[MODEL_CONFIGS_BY_KEY[e].firstParty]) return [];
  let c = s?.userPinned ?? getUserSpecifiedModelSetting() != null,
    m = a.ANTHROPIC_DEFAULT_OPUS_MODEL,
    o;
  if (m !== void 0 && !isProbeWrittenTierDefault("opus")) {
    if (c) return [];
    let t = await E(toProviderWireModelId(m));
    if (
      (logEvent("tengu_mantle_probe_result", {
        model_key: S("admin_pin"),
        accessible: S(
          t === "refuted" ? "false" : t === "accessible" ? "true" : "unknown",
        ),
      }),
      t !== "refuted")
    )
      return [{ kind: "adminPin", tier: "opus", adminMantleId: m }];
    o = m;
  }
  let d = MODEL_CONFIGS_BY_KEY[e].mantle;
  if (!d) return [];
  logEvent("tengu_mantle_default_check", {});
  let l = await h(d);
  if (
    (logEvent("tengu_mantle_probe_result", {
      model_key: fromEnum(e),
      accessible: S(l ? "true" : "false"),
    }),
    l)
  ) {
    if (o !== void 0)
      return [
        {
          kind: "pinRefuted",
          tier: "opus",
          refutedValue: o,
          workingKey: e,
          workingName: getMarketingNameForModel(MODEL_CONFIGS_BY_KEY[e].firstParty) ?? d,
          workingMantleId: d,
          defaultKey: e,
        },
      ];
    return [];
  }
  let f = getMarketingNameForModel(MODEL_CONFIGS_BY_KEY[e].firstParty) ?? d,
    g = M.indexOf(e),
    p = M.slice(0, g)
      .reverse()
      .filter((t) => t.startsWith("opus") && !r?.[MODEL_CONFIGS_BY_KEY[t].firstParty]),
    k = await Promise.all(
      p.map(async (t) => {
        let A = MODEL_CONFIGS_BY_KEY[t].mantle,
          _ = await h(A);
        logEvent("tengu_mantle_probe_result", {
          model_key: fromEnum(t),
          accessible: S(_ ? "true" : "false"),
        });
        let w = getMarketingNameForModel(MODEL_CONFIGS_BY_KEY[t].firstParty) ?? A;
        return { key: t, mantleId: A, name: w, ok: _ };
      }),
    );
  for (let t of k)
    if (t.ok) {
      if ((logForDebugging(`[mantle-fallback] default=${e} fallback=${t.key}`), o !== void 0))
        return [
          {
            kind: "pinRefuted",
            tier: "opus",
            refutedValue: o,
            workingKey: t.key,
            workingName: t.name,
            workingMantleId: t.mantleId,
            defaultKey: e,
          },
        ];
      return [
        {
          kind: "fallback",
          tier: "opus",
          envVar: "ANTHROPIC_DEFAULT_OPUS_MODEL",
          defaultKey: e,
          defaultName: f,
          fallbackKey: t.key,
          fallbackName: t.name,
          fallbackMantleId: t.mantleId,
        },
      ];
    }
  let b = [
    ...(o !== void 0 ? [`the admin-configured model (${o})`] : []),
    f,
    ...k.map((t) => t.name),
  ];
  return (
    logForDebugging(`[mantle-fallback] default=${e} exhausted \u2014 no working Opus`),
    [{ kind: "exhausted", tier: "opus", defaultName: f, triedNames: b }]
  );
}
var P = [
  "UnrecognizedClientException",
  "ExpiredTokenException",
  "InvalidSignatureException",
  "RequestTimeTooSkewed",
  "TokenRefreshRequired",
  "CredentialsProviderError",
];
function y(e) {
  let s = String(e?.name ?? ""),
    r = String(e?.message ?? "");
  return P.some((c) => s.includes(c) || r.includes(c));
}
async function E(e) {
  try {
    return (await O(e), "accessible");
  } catch (s) {
    let r = s?.status;
    if (r === 429) return "accessible";
    if (r === 400 || r === 403 || r === 404) {
      if (y(s)) return "unknown";
      return "refuted";
    }
    return "unknown";
  }
}
async function h(e) {
  return (await E(e)) === "accessible";
}
async function O(e) {
  let [{ AnthropicBedrockMantle: s }, { getProxyFetchOptions: r }] =
      await Promise.all([
        import("./AnthropicBedrockMantle.wb95xgtr.js"),
        import("../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js"),
      ]),
    c = await resolveAwsRegion(),
    m = {
      awsRegion: c,
      maxRetries: 0,
      timeout: 8000,
      fetchOptions: r({
        url:
          a.ANTHROPIC_BEDROCK_MANTLE_BASE_URL ||
          `https://bedrock-mantle.${c}.api.aws`,
      }),
    },
    o,
    d = a.AWS_BEARER_TOKEN_BEDROCK;
  if (d)
    o = new s({
      ...m,
      apiKey: d,
      defaultHeaders: {
        ...getAuthorizationHeaderPin(),
        ...getAnthropicBetaHeaderPin(),
        Authorization: `Bearer ${d}`,
        ...(!hasCustomApiKeyHeader() && { "X-Api-Key": null }),
      },
    });
  else {
    let l = a.CLAUDE_CODE_SKIP_MANTLE_AUTH,
      f = isHostManagedProviderAuth(),
      g = {
        authToken: null,
        defaultHeaders: {
          ...getAuthorizationHeaderPin(),
          ...getAnthropicBetaHeaderPin(),
          Authorization: null,
          ...(!hasCustomApiKeyHeader() && { "X-Api-Key": null }),
        },
        ...authState,
      },
      p = l ? getEnvAuthorizationHeader() : void 0,
      k = l || f ? null : await refreshAndGetAwsCredentials();
    o = k
      ? new s({
          ...m,
          ...g,
          awsAccessKey: k.accessKeyId,
          awsSecretAccessKey: k.secretAccessKey,
          awsSessionToken: k.sessionToken,
        })
      : new s({
          ...m,
          ...(l &&
            !p && {
              skipAuth: !0,
              authToken: null,
              defaultHeaders: { ...getAnthropicBetaHeaderPin() },
              ...authState,
            }),
          ...(l &&
            p && {
              apiKey: p.match(/^Bearer (.+)$/i)?.[1] ?? p,
              defaultHeaders: { ...getAnthropicBetaHeaderPin(), Authorization: p },
            }),
          ...(!l && g),
          ...(!l &&
            f && { providerChainResolver: hostManagedAwsSdkCredentials("Mantle").providerChainResolver }),
          ...(!l &&
            !f &&
            !a.CLAUDE_CODE_SKIP_AWS_CRED_CACHE && {
              providerChainResolver: () => getDefaultAwsProviderChain(c),
            }),
        });
  }
  await o.messages.create({
    model: e,
    max_tokens: 1,
    messages: [{ role: "user", content: "." }],
  });
}
export { checkMantleDefaultAvailability };
