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
import { u, Yr } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { Iz } from "./chunk-5ndhfaq9.js";
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
  RAt,
  Hme,
  hse,
  mQe,
  bt,
  e0,
  kQe,
  bu,
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
import { g3e, h3e, _3e, y3e, S3e } from "../../01-核心基础设施/共享小工具-未细化/chunk-nzt97y14.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "./chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
var y = g3e(kQe);
async function N() {
  if (Pe() !== "bedrock") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let o = h3e(y, (e) => e.includes("application-inference-profile"));
  if (o.length === 0) return [];
  i("tengu_bedrock_upgrade_check", { stale_tiers: Yr(o.length) });
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
    let d = bu(to[e.pinnedKey].firstParty),
      l = bu(to[e.defaultKey].firstParty);
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
            tier: u(e.tier),
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
  return _3e(o, y);
}
async function F() {
  if (Pe() !== "bedrock") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let o = Ge().modelOverrides,
    s = y3e(y, o);
  if (s.length === 0) return [];
  i("tengu_bedrock_default_check", { unpinned_tiers: Yr(s.length) });
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
            tier: u(e.tier),
            model_id: bt(r),
            accessible: d,
          }),
          d)
        )
          return null;
        let l = await A(e.defaultKey, e.tier, t, c, o);
        if (!l) return null;
        let m = bu(p.firstParty),
          k = bu(to[l.key].firstParty);
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
  let e = S3e(o, s).filter((r) => !g?.[to[r].firstParty]),
    p = await Promise.all(e.map((r) => f(r, s)));
  for (let [r, d] of p.entries()) if (d) return { key: e[r], regionalId: d };
  if (s === "opus") {
    let r = await f(e0, "sonnet");
    if (r) return { key: e0, regionalId: r, crossTier: !0 };
  }
  return null;
}
async function _(o, s) {
  try {
    let [{ AnthropicBedrock: t }, { getProxyFetchOptions: c }] =
        await Promise.all([
          import("./AnthropicBedrockMantle.wb95xgtr.js"),
          import("../../01-核心基础设施/共享小工具-未细化/getAWSProxyRequestHandler.e8dr34fc.js"),
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
        d = Fc(),
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
        k = r || d ? null : await AU();
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
                providerChainResolver: v6("Bedrock").providerChainResolver,
              }),
            ...(!r &&
              !d &&
              !a.CLAUDE_CODE_SKIP_AWS_CRED_CACHE && {
                providerChainResolver: () => p0(g),
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
  F as checkBedrockDefaultAvailability,
  N as findBedrockUpgradeCandidates,
  U as seedEnvDefaultForUserPin,
};
