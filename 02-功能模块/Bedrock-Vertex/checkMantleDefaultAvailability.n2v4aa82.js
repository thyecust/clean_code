// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 70 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { lit as S, fromEnum as u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import {
  cA,
  getUserSpecifiedModelSetting as Mf,
  DEFAULT_MANTLE_OPUS_KEY as Yve,
  getMarketingNameForModel as bu,
  toProviderWireModelId as PR,
  DR,
  Im,
  VC,
  Rw,
  nRe,
  isHostManagedProviderAuth as Fc,
  hostManagedAwsSdkCredentials as v6,
  refreshAndGetAwsCredentials as AU,
  getDefaultAwsProviderChain as p0,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getInitialSettings as Ge } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { to, getAPIProvider as Pe } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { d7 } from "./chunk-bnft4099.js";
var M = Object.keys(to).filter((e) => to[e].mantle !== null);
async function B(e = Yve, s) {
  if (Pe() !== "mantle") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let r = Ge().modelOverrides;
  if (r?.[to[e].firstParty]) return [];
  let c = s?.userPinned ?? Mf() != null,
    m = a.ANTHROPIC_DEFAULT_OPUS_MODEL,
    o;
  if (m !== void 0 && !d7("opus")) {
    if (c) return [];
    let t = await E(PR(m));
    if (
      (i("tengu_mantle_probe_result", {
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
  let d = to[e].mantle;
  if (!d) return [];
  i("tengu_mantle_default_check", {});
  let l = await h(d);
  if (
    (i("tengu_mantle_probe_result", {
      model_key: u(e),
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
          workingName: bu(to[e].firstParty) ?? d,
          workingMantleId: d,
          defaultKey: e,
        },
      ];
    return [];
  }
  let f = bu(to[e].firstParty) ?? d,
    g = M.indexOf(e),
    p = M.slice(0, g)
      .reverse()
      .filter((t) => t.startsWith("opus") && !r?.[to[t].firstParty]),
    k = await Promise.all(
      p.map(async (t) => {
        let A = to[t].mantle,
          _ = await h(A);
        i("tengu_mantle_probe_result", {
          model_key: u(t),
          accessible: S(_ ? "true" : "false"),
        });
        let w = bu(to[t].firstParty) ?? A;
        return { key: t, mantleId: A, name: w, ok: _ };
      }),
    );
  for (let t of k)
    if (t.ok) {
      if ((n(`[mantle-fallback] default=${e} fallback=${t.key}`), o !== void 0))
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
    n(`[mantle-fallback] default=${e} exhausted \u2014 no working Opus`),
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
    c = await cA(),
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
        ...Im(),
        ...VC(),
        Authorization: `Bearer ${d}`,
        ...(!DR() && { "X-Api-Key": null }),
      },
    });
  else {
    let l = a.CLAUDE_CODE_SKIP_MANTLE_AUTH,
      f = Fc(),
      g = {
        authToken: null,
        defaultHeaders: {
          ...Im(),
          ...VC(),
          Authorization: null,
          ...(!DR() && { "X-Api-Key": null }),
        },
        ...Rw,
      },
      p = l ? nRe() : void 0,
      k = l || f ? null : await AU();
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
              defaultHeaders: { ...VC() },
              ...Rw,
            }),
          ...(l &&
            p && {
              apiKey: p.match(/^Bearer (.+)$/i)?.[1] ?? p,
              defaultHeaders: { ...VC(), Authorization: p },
            }),
          ...(!l && g),
          ...(!l &&
            f && { providerChainResolver: v6("Mantle").providerChainResolver }),
          ...(!l &&
            !f &&
            !a.CLAUDE_CODE_SKIP_AWS_CRED_CACHE && {
              providerChainResolver: () => p0(c),
            }),
        });
  }
  await o.messages.create({
    model: e,
    max_tokens: 1,
    messages: [{ role: "user", content: "." }],
  });
}
export { B as checkMantleDefaultAvailability };
