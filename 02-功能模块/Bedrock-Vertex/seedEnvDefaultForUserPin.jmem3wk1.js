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
import { Mxe, mZ } from "./chunk-5ndhfaq9.js";
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
import { bt, e0, xQe, bu, Rw, nRe, Fc, $Ue, yRe } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
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
import { aDe, sX, iX } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "./chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
var g = g3e(xQe);
async function M() {
  if (Pe() !== "vertex") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let o = h3e(g);
  if (o.length === 0) return [];
  i("tengu_vertex_upgrade_check", { stale_tiers: Yr(o.length) });
  let c = (
    await Promise.all(
      o.map(async (e) => {
        let r = to[e.defaultKey].vertex;
        if (r === null) return null;
        let t = await d(r);
        if (
          (i("tengu_vertex_probe_result", {
            tier: u(e.tier),
            model_id: bt(r),
            accessible: t,
          }),
          !t)
        )
          return null;
        let l = bu(to[e.pinnedKey].firstParty),
          f = bu(to[e.defaultKey].firstParty);
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
    n(`[vertex-upgrade] tiersWithPin=${o.length} candidates=${c.length}`),
    c
  );
}
function C(o) {
  return _3e(o, g);
}
async function U() {
  if (Pe() !== "vertex") return [];
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let o = Ge().modelOverrides,
    s = y3e(g, o);
  if (s.length === 0) return [];
  i("tengu_vertex_default_check", { unpinned_tiers: Yr(s.length) });
  let c = await Promise.all(
      s.map(async (r) => {
        let t = to[r.defaultKey],
          l = await d(t.vertex);
        if (
          (i("tengu_vertex_probe_result", {
            tier: u(r.tier),
            model_id: bt(t.vertex),
            accessible: l,
          }),
          l)
        )
          return null;
        let f = await y(r.defaultKey, r.tier, o);
        if (!f) return null;
        let m = bu(t.firstParty),
          p = bu(to[f.key].firstParty);
        if (!m || !p) return null;
        return {
          tier: r.tier,
          envVar: r.envVar,
          defaultKey: r.defaultKey,
          defaultName: m,
          fallbackKey: f.key,
          fallbackName: p,
          fallbackVertexId: to[f.key].vertex,
          ...(f.crossTier && { crossTier: !0 }),
        };
      }),
    ),
    e = [];
  for (let r of c) if (r !== null) e.push(r);
  return (
    n(`[vertex-fallback] unpinnedTiers=${s.length} fallbacks=${e.length}`),
    e
  );
}
async function y(o, s, c) {
  let e = S3e(o, s).filter((t) => !c?.[to[t].firstParty]),
    r = await Promise.all(e.map((t) => d(to[t].vertex)));
  for (let [t, l] of r.entries()) if (l) return { key: e[t] };
  if (s === "opus") {
    let t = e0;
    if (await d(to[t].vertex)) return { key: t, crossTier: !0 };
  }
  return null;
}
async function d(o) {
  if (o === null) return !1;
  try {
    let [{ AnthropicVertex: s }, { getProxyFetchOptions: c }] =
        await Promise.all([
          import("./AnthropicVertex.1thfsdgf.js"),
          import("../../01-核心基础设施/共享小工具-未细化/getAWSProxyRequestHandler.e8dr34fc.js"),
        ]),
      e = a.CLAUDE_CODE_SKIP_VERTEX_AUTH,
      r = Fc();
    if (!e && !r) await yRe();
    let t = await aDe(e ? { kind: "skip" } : { kind: "default" }, $Ue()),
      l = mZ(o),
      f = e ? nRe() : void 0;
    return (
      await sX(
        new s({
          region: l,
          googleAuth: t,
          maxRetries: 0,
          defaultHeaders: iX(e ? { wireAuthorization: f } : !1),
          ...Rw,
          timeout: 8000,
          fetchOptions: c({ url: a.ANTHROPIC_VERTEX_BASE_URL || Mxe(l) }),
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
  U as checkVertexDefaultAvailability,
  M as findVertexUpgradeCandidates,
  C as seedEnvDefaultForUserPin,
};
