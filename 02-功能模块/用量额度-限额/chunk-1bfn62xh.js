// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { beforeFirst } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { le, Io, cr, nt, ru } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { ht, isClaudeAISubscriber, getOauthAccountInfo, getSubscriptionType, isConsumerSubscriber, Qh, Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { mue, Km } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function parseReplacementMetadata(e) {
  if (
    typeof e === "object" &&
    e !== null &&
    "replacement" in e &&
    typeof e.replacement === "string" &&
    "partial" in e &&
    typeof e.partial === "boolean"
  )
    return { replacement: e.replacement, partial: e.partial };
  return null;
}
function listServerPromptTemplates(e, t) {
  let r = [],
    a = `${t}:`;
  for (let i of e) {
    if (i.type !== "prompt" || !i.urlTemplate) continue;
    if (!i.name.startsWith(a)) continue;
    r.push({
      uriTemplate: i.urlTemplate,
      name: i.name,
      description: i.description,
      server: t,
    });
  }
  return r;
}
function stripUriTemplateVariables(e) {
  let t = e.indexOf("{");
  return t === -1 ? e : e.slice(0, t);
}
function resolvePromptCommandFromUri(e, t) {
  let r = e.indexOf(":");
  if (r <= 0) return null;
  let a = e.slice(0, r),
    i = e.slice(r + 1);
  if (!i.includes("://")) return null;
  for (let l of t)
    if (
      l.type === "prompt" &&
      l.urlTemplate &&
      l.name.startsWith(`${a}:`) &&
      T(i, l.urlTemplate)
    )
      return { commandName: l.name, args: i };
  return null;
}
function T(e, t) {
  let r = b(t),
    a = 0;
  for (let i = 0; i < r.length; i++) {
    let l = r[i];
    if (l.type === "literal") {
      if (!e.startsWith(l.value, a)) return !1;
      a += l.value.length;
    } else {
      let o = i + 1;
      while (r[o]?.type === "variable") o++;
      let s = r[o];
      if (s?.type === "literal") {
        let u =
          o === r.length - 1 ? e.lastIndexOf(s.value) : e.indexOf(s.value, a);
        if (u <= a) return !1;
        ((a = u), (i = o - 1));
      } else return e.length > a;
    }
  }
  return a === e.length;
}
function isTemplateCompletionPartial(e) {
  let t = b(e.template.uriTemplate),
    r = Object.keys(e.resolvedArgs).length,
    a = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i].type !== "variable") continue;
    if (a === r)
      return t[i + 1]?.type === "literal" && t[i + 2]?.type === "variable";
    a++;
  }
  return !1;
}
function b(e) {
  let t = [],
    r = 0,
    a = 0;
  while (r < e.length)
    if (e[r] === "{") {
      if (r > a) t.push({ type: "literal", value: e.slice(a, r) });
      let i = e.indexOf("}", r);
      if (i === -1) return (t.push({ type: "literal", value: e.slice(r) }), t);
      let l = e.slice(r + 1, i);
      ((l = l.replace(/^[+#./;?&]/, "").replace(/\*$|:\d+$/, "")),
        (l = beforeFirst(l, ",")),
        t.push({ type: "variable", name: l }),
        (r = i + 1),
        (a = r));
    } else r++;
  if (a < e.length) t.push({ type: "literal", value: e.slice(a) });
  return t;
}
function M(e, t) {
  let r = b(e.uriTemplate),
    a = {},
    i = 0;
  for (let l = 0; l < r.length; l++) {
    let o = r[l];
    if (o.type === "literal") {
      let s = t.slice(i);
      if (s.length < o.value.length) return null;
      if (!s.startsWith(o.value)) return null;
      i += o.value.length;
    } else {
      let s = r[l + 1],
        c = s?.type === "literal" ? s.value : null,
        u = t.slice(i);
      if (c) {
        let d = u.indexOf(c);
        if (d === -1)
          return {
            template: e,
            argName: o.name,
            argValue: u,
            resolvedArgs: a,
            valueStartIndex: i,
          };
        ((a[o.name] = u.slice(0, d)), (i += d));
      } else
        return {
          template: e,
          argName: o.name,
          argValue: u,
          resolvedArgs: a,
          valueStartIndex: i,
        };
    }
  }
  return null;
}
function findBestUriTemplateMatch(e, t) {
  let r = null,
    a = [-1, -1, -1];
  for (let i of t) {
    let l = M(i, e);
    if (!l) continue;
    let o = [
      Object.keys(l.resolvedArgs).length,
      l.valueStartIndex,
      (i.uriTemplate.match(/\{/g) ?? []).length,
    ];
    if (
      !r ||
      o[0] > a[0] ||
      (o[0] === a[0] && o[1] > a[1]) ||
      (o[0] === a[0] && o[1] === a[1] && o[2] > a[2])
    )
      ((r = l), (a = o));
  }
  return r;
}
function buildUriTemplateReplacement(e, t, r) {
  let a = e.slice(0, t.valueStartIndex),
    i = b(t.template.uriTemplate),
    l = -1,
    o = 0;
  for (let d = 0; d < i.length; d++)
    if (i[d].type === "variable") {
      if (o === Object.keys(t.resolvedArgs).length) {
        l = d;
        break;
      }
      o++;
    }
  let s = l + 1;
  while (i[s]?.type === "variable") s++;
  let c = l >= 0 ? i[s] : void 0,
    u = c?.type === "literal" ? c.value : "";
  return a + r + u;
}
function setAlwaysDenyCommands(e, t, r = "replace") {
  e((a) => {
    let i = a.alwaysDenyRules.command,
      l = r === "union" ? dedupe([...(i ?? []), ...t]) : [...t];
    if ((i?.length ?? 0) === l.length && (i ?? []).every((s, c) => s === l[c]))
      return a;
    return {
      ...a,
      alwaysDenyRules: {
        ...a.alwaysDenyRules,
        command: l.length > 0 ? l : void 0,
      },
    };
  });
}
function parseSlashCommandInput(e) {
  let t = e.trim();
  if (!t.startsWith("/")) return null;
  let { name: r, args: a } = mue(t);
  if (!r) return null;
  let i = "(MCP)";
  if (a === i) return { commandName: `${r} ${i}`, args: "", isMcp: !0 };
  if (a.startsWith(i) && /\s/.test(a.charAt(i.length)))
    return {
      commandName: `${r} ${i}`,
      args: a.slice(i.length).trimStart(),
      isMcp: !0,
    };
  return { commandName: r, args: a, isMcp: !1 };
}
function resolveSubcommandTarget(e, t) {
  if (!e.subcommands) return;
  let r = t.trimStart(),
    a = r.search(/\s/),
    i = a === -1 ? r : r.slice(0, a),
    l = i ? e.subcommands[i.toLowerCase()] : void 0;
  if (l === void 0) return;
  let o = a === -1 ? "" : r.slice(a + 1).trim();
  if (e.subcommandsBareOnly && o !== "") return;
  return { targetName: l, consumedToken: i, remainingArgs: o };
}
var I = "tengu_lilac_loom",
  v = "feature_of_the_week",
  x = 86400000,
  w = () =>
    le().refine(
      (e) => !Number.isNaN(Date.parse(e)) && /(z|[+-]\d{2}:?\d{2})$/i.test(e),
      "must be ISO 8601 with timezone, e.g. 2026-06-04T16:00:00Z",
    ),
  h = () =>
    le()
      .optional()
      .transform((e) => (e === "" ? void 0 : e)),
  P = createLazyValue(() =>
    nt({
      feature: le().min(1),
      command: le()
        .optional()
        .transform((e) => (e === "" ? void 0 : e)),
      startsAt: w(),
      endsAt: w(),
      hideCommandChip: Io().optional(),
      creditless: Io().optional(),
      titleLabel: h(),
      commandBlurb: h(),
      tipBlurb: h(),
      isTopPriorityAnnouncement: Io().optional(),
      announcementLines: cr(
        nt({ text: le(), style: ru(["bold", "dim"]).optional() }),
      )
        .optional()
        .transform((e) => {
          let t = e?.filter((r) => r.text !== "");
          return t?.length ? t : void 0;
        })
        .catch(void 0),
      tips: cr(le())
        .optional()
        .transform((e) => {
          let t = e?.filter(Boolean);
          return t?.length ? t : void 0;
        })
        .catch(void 0),
      redeemBy: h(),
    }),
  );
class _ {
  parsedCampaign = null;
  inFlightEligibilityRefresh = null;
}
var R = new j(() => new _());
function A() {
  return R.of(B().host);
}
function getActiveFotwCampaign() {
  let e = Qh(I, null);
  if (e === null || e === void 0) return null;
  let t = A();
  if (t.parsedCampaign === null || t.parsedCampaign.raw !== e) {
    let a = P().safeParse(e);
    if (!a.success)
      n(`Promo campaign payload failed validation: ${a.error.message}`, {
        level: "warn",
      });
    t.parsedCampaign = a.success
      ? {
          raw: e,
          campaign: a.data,
          startsAtMs: Date.parse(a.data.startsAt),
          endsAtMs: Date.parse(a.data.endsAt),
        }
      : { raw: e, campaign: null, startsAtMs: 0, endsAtMs: 0 };
  }
  if (t.parsedCampaign.campaign === null) return null;
  let r = Date.now();
  if (r < t.parsedCampaign.startsAtMs) return null;
  if (r > t.parsedCampaign.endsAtMs) return null;
  return t.parsedCampaign.campaign;
}
function getFotwCommand() {
  return getActiveFotwCampaign()?.command ?? null;
}
function E(e) {
  if (!isClaudeAISubscriber()) return "excluded";
  let t = getSubscriptionType();
  if (!t) return "excluded";
  if (e.creditless) return "viewer";
  if (isConsumerSubscriber()) return "claimant";
  if (t === "team") {
    if (!getOauthAccountInfo()?.organizationRole) return "excluded";
    return Km() ? "claimant" : "viewer";
  }
  return "excluded";
}
function p() {
  let e = getActiveFotwCampaign();
  if (!e) return null;
  let t = getOauthAccountInfo()?.organizationUuid;
  if (!t) return null;
  let r = E(e);
  if (r === "excluded") return null;
  if (r === "claimant" && D(t, e.feature)) return null;
  return { campaign: e, orgId: t, audience: r };
}
function isFotwCommand(e) {
  let t = getFotwCommand();
  return t !== null && e === t;
}
function isClaimableFotwCommand(e) {
  return isFotwCommand(e) && hasClaimableFotwCredit();
}
function hasClaimableFotwCredit() {
  let e = p();
  if (!e || e.audience !== "claimant") return !1;
  if (!e.campaign.command) return !1;
  let t = C(e.orgId, e.campaign.feature);
  return t !== null && t.eligible && t.available;
}
function isFotwUpsellPending() {
  let e = p();
  if (!e || e.audience !== "viewer") return !1;
  if (!e.campaign.command) return !1;
  return !N(e.orgId, e.campaign.feature);
}
function getFotwCreditAmount() {
  let e = getActiveFotwCampaign(),
    t = getOauthAccountInfo()?.organizationUuid;
  if (!e || !t) return null;
  let r = C(t, e.feature);
  if (!r || r.amount_minor_units === null || !r.currency) return null;
  return { amountMinorUnits: r.amount_minor_units, currency: r.currency };
}
function refreshFotwEligibility(e) {
  let t = A();
  return (
    (t.inFlightEligibilityRefresh ??= O(e)
      .catch(
        (r) => (
          n(`FotW eligibility refresh failed: ${r}`, { level: "warn" }),
          null
        ),
      )
      .finally(() => {
        t.inFlightEligibilityRefresh = null;
      })),
    t.inFlightEligibilityRefresh
  );
}
async function O(e) {
  let t = p();
  if (!t || t.audience !== "claimant") return null;
  let { campaign: r, orgId: a } = t;
  if (C(a, r.feature) !== null) return null;
  let i;
  try {
    i = await ht.get(
      `/api/oauth/organizations/:orgUUID/overage_credit_grant?campaign=${v}`,
      {
        auth: "teleport-org",
        timeout: 1e4,
        validateStatus: (l) => l < 500,
        credentials: e,
      },
    );
  } catch (l) {
    return (
      logFeatureSad("api_fotw_eligibility_fetch", "request_failed"),
      n(`FotW eligibility fetch failed: ${l}`, { level: "warn" }),
      null
    );
  }
  if (!i.ok || i.status >= 400)
    return (logFeatureSad("api_fotw_eligibility_fetch", "unavailable"), null);
  if ((logFeatureOk("api_fotw_eligibility_fetch"), i.data.granted)) F(a, r.feature);
  if (i.data.eligible && i.data.needs_payment_setup === !0) {
    if (i.data.amount_minor_units == null || !i.data.currency) return null;
    return {
      amountMinorUnits: i.data.amount_minor_units,
      currency: i.data.currency,
    };
  }
  if (C(a, r.feature) !== null) return null;
  return (
    S(
      a,
      r.feature,
      {
        available: i.data.available,
        eligible: i.data.eligible,
        granted: i.data.granted,
        amount_minor_units: i.data.amount_minor_units ?? null,
        currency: i.data.currency ?? null,
      },
      { onlyIfAbsent: !0 },
    ),
    null
  );
}
function C(e, t) {
  let a = ee().fotwEligibilityCache?.[e]?.[t];
  if (!a) return null;
  if (Date.now() - a.timestamp > x) return null;
  return a.info;
}
async function claimFotwCredit(e, t) {
  if (!isClaimableFotwCommand(e)) return { outcome: "skipped" };
  let r = p();
  if (!r) return { outcome: "skipped" };
  let { campaign: a, orgId: i } = r,
    l = getFotwCreditAmount(),
    o;
  try {
    o = await ht.post(
      "/api/oauth/organizations/:orgUUID/overage_credit_grant",
      { campaign: v, feature: a.feature, enable_overages: !0 },
      {
        auth: "teleport-org",
        timeout: 60000,
        validateStatus: (s) => s < 500,
        credentials: t,
      },
    );
  } catch (s) {
    return (
      logFeatureBad("api_fotw_claim", "request_failed"),
      n(`FotW claim failed: ${s}`, { level: "warn" }),
      { outcome: "failed" }
    );
  }
  if (!o.ok) return { outcome: "failed" };
  if (o.status >= 400) {
    if (U(o.data) === "Failed to grant credit")
      return (logFeatureBad("api_fotw_claim", "grant_failed"), { outcome: "failed" });
    return (
      logFeatureSad("api_fotw_claim", "not_available"),
      S(i, a.feature, {
        available: !1,
        eligible: !1,
        granted: !1,
        amount_minor_units: null,
        currency: null,
      }),
      { outcome: "not_available" }
    );
  }
  if (!o.data.success)
    return (logFeatureBad("api_fotw_claim", "grant_failed"), { outcome: "failed" });
  return (
    logFeatureOk("api_fotw_claim"),
    F(i, a.feature),
    {
      outcome: "granted",
      amountMinorUnits: o.data.amount_minor_units ?? l?.amountMinorUnits ?? 0,
      currency: o.data.currency ?? l?.currency ?? "USD",
      expiresAt: o.data.expires_at ?? null,
    }
  );
}
var k = createLazyValue(() => nt({ error: nt({ message: le() }) }));
function U(e) {
  let t = k().safeParse(e);
  return t.success ? t.data.error.message : void 0;
}
function D(e, t) {
  let r = ee().fotwClaimedFeatures;
  return Boolean(r?.[e]?.includes(t));
}
function F(e, t) {
  Te((r) => {
    let a = r.fotwClaimedFeatures?.[e] ?? [];
    if (a.includes(t)) return r;
    return {
      ...r,
      fotwClaimedFeatures: { ...r.fotwClaimedFeatures, [e]: [...a, t] },
    };
  });
}
function N(e, t) {
  let r = ee().fotwUpsellFulfilled;
  return Boolean(r?.[e]?.includes(t));
}
function markFotwUpsellFulfilled(e) {
  let t = p();
  if (!t || t.audience !== "viewer" || !isFotwCommand(e)) return;
  let { orgId: r, campaign: a } = t;
  Te((i) => {
    let l = i.fotwUpsellFulfilled?.[r] ?? [];
    if (l.includes(a.feature)) return i;
    return {
      ...i,
      fotwUpsellFulfilled: { ...i.fotwUpsellFulfilled, [r]: [...l, a.feature] },
    };
  });
}
function S(e, t, r, { onlyIfAbsent: a = !1 } = {}) {
  Te((i) => {
    let l = i.fotwEligibilityCache?.[e]?.[t],
      o = l && Date.now() - l.timestamp <= x;
    if (a && o) return i;
    if (
      l &&
      l.info.available === r.available &&
      l.info.eligible === r.eligible &&
      l.info.granted === r.granted &&
      l.info.amount_minor_units === r.amount_minor_units &&
      l.info.currency === r.currency &&
      o
    )
      return i;
    return {
      ...i,
      fotwEligibilityCache: {
        ...i.fotwEligibilityCache,
        [e]: {
          ...i.fotwEligibilityCache?.[e],
          [t]: { info: r, timestamp: Date.now() },
        },
      },
    };
  });
}
export {
  parseReplacementMetadata,
  listServerPromptTemplates,
  stripUriTemplateVariables,
  resolvePromptCommandFromUri,
  isTemplateCompletionPartial,
  findBestUriTemplateMatch,
  buildUriTemplateReplacement,
  setAlwaysDenyCommands,
  parseSlashCommandInput,
  resolveSubcommandTarget,
  getActiveFotwCampaign,
  getFotwCommand,
  isFotwCommand,
  isClaimableFotwCommand,
  hasClaimableFotwCredit,
  isFotwUpsellPending,
  getFotwCreditAmount,
  refreshFotwEligibility,
  claimFotwCredit,
  markFotwUpsellFulfilled,
};
