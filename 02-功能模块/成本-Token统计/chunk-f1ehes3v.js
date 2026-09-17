// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { Aw, ht, isBgSession, isExtraUsageAllowed, getSubscriptionType, H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { l, cc } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { St, logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Km, Xmt, kO } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
async function d(t, r) {
  return withFeatureTelemetry("api_admin_request_create", async () => {
    let e = await ht.post(
      "/api/oauth/organizations/:orgUUID/admin_requests",
      t,
      { auth: "teleport-org", credentials: r },
    );
    if (!e.ok)
      throw Error(
        e.reason === "no-auth" ? e.detail : `admin_requests: ${e.reason}`,
      );
    return e.data;
  });
}
async function m(t, r, e) {
  return withFeatureTelemetry("api_admin_request_list", async () => {
    let i = new URLSearchParams({ request_type: t });
    for (let a of r) i.append("statuses", a);
    let o = await ht.get(
      `/api/oauth/organizations/:orgUUID/admin_requests/me?${i}`,
      { auth: "teleport-org", credentials: e },
    );
    if (!o.ok)
      throw Error(
        o.reason === "no-auth" ? o.detail : `admin_requests/me: ${o.reason}`,
      );
    return o.data;
  });
}
async function p(t, r) {
  return withFeatureTelemetry("api_admin_request_eligibility", async () => {
    let e = await ht.get(
      `/api/oauth/organizations/:orgUUID/admin_requests/eligibility?request_type=${t}`,
      { auth: "teleport-org", credentials: r },
    );
    if (!e.ok)
      throw Error(
        e.reason === "no-auth"
          ? e.detail
          : `admin_requests/eligibility: ${e.reason}`,
      );
    return e.data;
  });
}
function c(t) {
  if (!at.isAxiosError(t)) return null;
  let r = t.response?.status;
  if (typeof r !== "number" || r >= 500) return null;
  let e = t.response?.data;
  if (!e || typeof e !== "object") return null;
  let i = e,
    o = i.error;
  if (o && typeof o === "object") {
    let a = o.message;
    if (typeof a === "string" && a.length > 0) return a;
  }
  for (let a of ["message", "detail"]) {
    let s = i[a];
    if (typeof s === "string" && s.length > 0) return s;
  }
  return null;
}
var iSe =
  "Requesting usage credits notifies your organization admins. To review and send the request, run /usage-credits in an interactive Claude Code session.";
async function enn(t, r) {
  try {
    return (
      await d({ request_type: "limit_increase", details: null }, r),
      {
        type: "message",
        filed: !0,
        value:
          t == null
            ? "Request sent to your admin for usage credits."
            : t.is_enabled
              ? "Request sent to your admin to increase your usage credit limit."
              : "Request sent to your admin to turn on usage credits.",
      }
    );
  } catch (e) {
    let i = c(e);
    if (cc(e, (o) => c(o) !== null))
      n(`Admin request rejected: ${i ?? l(e)}`, { level: "error" });
    else logError(e);
    if (i) return { type: "message", value: i, filed: !1 };
  }
  return {
    type: "message",
    filed: !1,
    value: "Contact your admin to manage usage credit settings.",
  };
}
function U9e() {
  {
    if (isBgSession()) return !1;
    let t = getSubscriptionType(),
      r = Aw() !== null,
      e = H("tengu_ember_latch", !1) || r,
      i = isExtraUsageAllowed() && (r || ((t === "pro" || t === "max") && !St()));
    return e && i;
  }
  return !1;
}
async function aSe(t, r) {
  let e = getSubscriptionType(),
    i = e === "team" || e === "enterprise";
  if (!Km() && i) {
    let s;
    try {
      s = (await kO(r))?.extra_usage;
    } catch (u) {
      n(
        `extra-usage: fetchUtilization failed, falling through to ask user: ${u}`,
        { level: "error" },
      );
    }
    switch (s?.disabled_reason) {
      case "out_of_credits":
        return {
          type: "message",
          value:
            "Your organization is out of usage credits. Contact your admin to add more.",
        };
      case "org_level_disabled_until":
      case "org_spend_cap_reached":
        if (
          s.disabled_reason === "org_level_disabled_until" &&
          s.spend_limit_reached === !1
        )
          break;
        return {
          type: "message",
          value:
            "Your organization's usage credit cap is reached for this period. Contact your admin to raise it.",
        };
      default:
    }
    if (s?.is_enabled && s.monthly_limit === null)
      return {
        type: "message",
        value:
          "Your organization already has unlimited usage credits. No request needed.",
      };
    try {
      if ((await p("limit_increase", r))?.is_allowed === !1)
        return {
          type: "message",
          value: "Contact your admin to manage usage credit settings.",
        };
    } catch (u) {
      n(`Extra usage eligibility check failed: ${u}`, { level: "error" });
    }
    try {
      let u = await m("limit_increase", ["pending"], r);
      if (u && u.length > 0)
        return {
          type: "message",
          value: "You've already sent a usage credit request to your admin.",
        };
    } catch (u) {
      n(`Failed to fetch pending admin requests: ${u}`, { level: "error" });
    }
    return { type: "confirm-admin-request", extraUsage: s };
  }
  let a = i ? "https://claude.ai/admin-settings/usage" : Xmt;
  if (!t.openInBrowser || isBgSession())
    return { type: "browser-opened", url: a, opened: !1 };
  try {
    let s = await tryOpenUrlInBrowser(a);
    return { type: "browser-opened", url: a, opened: s };
  } catch (s) {
    return (
      n(`Failed to open browser for ${a}: ${s}`, { level: "error" }),
      {
        type: "message",
        value: `Couldn't open your browser. Visit ${a} to manage usage credits.`,
      }
    );
  }
}
export { iSe, enn, U9e, aSe };
