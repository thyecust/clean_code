// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { S, u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "./chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "./chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  cA,
  Mf,
  Yve,
  bu,
  PR,
  DR,
  Im,
  VC,
  Rw,
  nRe,
  Fc,
  v6,
  AU,
  p0,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { Ge } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { to, Pe } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import { d7 } from "./chunk-bnft4099.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "./chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
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
        import("../../01-核心基础设施/共享小工具-未细化/getAWSProxyRequestHandler.e8dr34fc.js"),
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
