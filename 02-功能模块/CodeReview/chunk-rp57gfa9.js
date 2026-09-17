// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ht, H, Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { Zt, Io, nt } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { fromEnum as u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { logFeatureOk as y, logFeatureSad as g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { isPolicyAllowed as Mt } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { ZA } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { gD } from "../../01-核心基础设施/共享小工具-未细化/chunk-c822xsqz.js";
var f = m(() =>
  nt({
    reviews_used: Zt(),
    reviews_limit: Zt(),
    reviews_remaining: Zt(),
    is_overage: Io(),
  }),
);
async function v(e) {
  let r = a.CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE;
  if (r)
    try {
      let t = f().safeParse(z(r));
      return t.success ? t.data : null;
    } catch (t) {
      return (n(`fetchUltrareviewQuota fixture parse failed: ${t}`), null);
    }
  try {
    let t = await ht.get("/v1/ultrareview/quota", {
      auth: "teleport-org",
      timeout: 3000,
      credentials: e,
    });
    if (!t.ok) return (g("api_ultrareview_quota", "request_failed"), null);
    let o = f().safeParse(t.data);
    if (!o.success)
      return (
        n(`fetchUltrareviewQuota schema mismatch: ${o.error.message}`),
        g("api_ultrareview_quota", "schema_mismatch"),
        null
      );
    return (y("api_ultrareview_quota"), o.data);
  } catch (t) {
    return (
      n(`fetchUltrareviewQuota failed: ${t}`),
      g("api_ultrareview_quota", "request_failed"),
      null
    );
  }
}
class c {
  quota = void 0;
  fetch = void 0;
}
var S = new j(() => new c());
function p() {
  return S.of(B().host);
}
async function gnn(e) {
  let r = p();
  ((r.fetch ??= v(e)), (r.quota = await r.fetch));
}
function dlt(e) {
  let r = p();
  if (r.quota === void 0) return (gnn(e), null);
  return r.quota;
}
function n3e(e, r) {
  let t = ee().numStartups;
  Te((o) => {
    let l = o.tipsHistory ?? {};
    if (l[e] === t) return o;
    let s = o.tipLifetimeShownCounts ?? {};
    return {
      ...o,
      tipsHistory: { ...l, [e]: t },
      tipLifetimeShownCounts: { ...s, [e]: (s[e] ?? 0) + 1 },
    };
  }, r);
}
function gee(e) {
  return ee().tipLifetimeShownCounts?.[e] ?? 0;
}
function IBn(e) {
  return ee().pluginSuggestionShownCounts?.[e] ?? 0;
}
function l9(e) {
  let r = ee(),
    t = r.tipsHistory?.[e];
  if (!t) return 1 / 0;
  return r.numStartups - t;
}
function PBn(e) {
  return ee().pluginSuggestionDiscoverShownCounts?.[e] ?? 0;
}
function OBn(e, r) {
  if (e.length === 0) return;
  Te((t) => {
    let o = t.pluginSuggestionDiscoverShownCounts ?? {};
    if (e.every((s) => (o[s] ?? 0) > 0)) return t;
    let l = { ...o };
    for (let s of e) l[s] = (l[s] ?? 0) + 1;
    return { ...t, pluginSuggestionDiscoverShownCounts: l };
  }, r);
}
var h = "tengu_ultrareview_awareness";
function _() {
  return H(h, null) ?? {};
}
function HDt(e) {
  if (!ZA()) return !1;
  if (!Mt("allow_remote_sessions")) return !1;
  return _()[e] === !0;
}
function hnn() {
  return ee().hasRunUltrareview === !0;
}
function DBn(e) {
  Te((r) => (r.hasRunUltrareview ? r : { ...r, hasRunUltrareview: !0 }), e);
}
function C(e) {
  i("tengu_ultrareview_awareness_shown", { surface: u(e) });
}
function _nn(e) {
  return `${e} free ${e === 1 ? "review" : "reviews"} left`;
}
function LBn(e) {
  if (e !== "ultrareview" && e !== gD) return "";
  if (!HDt("slash_menu")) return "";
  let r = dlt();
  if (r === null || r.reviews_remaining <= 0) return "";
  let t = r.reviews_remaining;
  return e === "ultrareview"
    ? `${t} free left \xB7 `
    : `${t} free /ultrareview \xB7 `;
}
var R = "ultrareview-prose-pointer",
  U = "ultrareview-post-commit",
  b = 5;
function w(e, r, t, o, l) {
  if (!HDt(e)) return null;
  if (hnn()) return null;
  if (gee(r) >= b) return null;
  if (l9(r) === 0) return null;
  (n3e(r, o), C(e));
  let s = dlt(l),
    d =
      s !== null && s.reviews_remaining > 0
        ? ` \u2014 ${_nn(s.reviews_remaining)}`
        : "";
  return t(d);
}
function MBn(e, r) {
  return w(
    "prose_pointer",
    R,
    (t) =>
      `Tip: For a deeper cloud-based review, try /ultrareview next time${t}.`,
    e,
    r,
  );
}
function NBn(e) {
  return w(
    "post_commit",
    U,
    (r) =>
      `Tip: Run /ultrareview before you push to catch bugs with a cloud-based multi-agent review${r}.`,
    e,
    void 0,
  );
}
export {
  gnn,
  dlt,
  n3e,
  gee,
  IBn,
  l9,
  PBn,
  OBn,
  HDt,
  hnn,
  DBn,
  _nn,
  LBn,
  MBn,
  NBn,
};
