// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 69 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { fromEnum as u, fromNumber as Yr } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { Mxe, mZ } from "./chunk-5ndhfaq9.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { bt, DEFAULT_3P_SONNET_KEY as e0, DEFAULT_VERTEX_OPUS_KEY as xQe, getMarketingNameForModel as bu, Rw, nRe, isHostManagedProviderAuth as Fc, getConfiguredVertexProjectId as $Ue, refreshGcpCredentialsIfNeeded as yRe } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getInitialSettings as Ge } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { to, getAPIProvider as Pe } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { tierConfig as g3e, collectStalePins as h3e, seedEnvDefaultForUserPin as _3e, collectUnpinnedTiers as y3e, predecessorsInTier as S3e } from "../../01-核心基础设施/共享小工具-未细化/chunk-nzt97y14.js";
import { buildVertexGoogleAuth as aDe, suppressVertexAuthRejection as sX, vertexResidualCredentialPins as iX } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
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
          import("../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js"),
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
