// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { su, oE, vW, l8, c8, jw } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { l, cc } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { gt, lp, vn, qn } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import {
  Azn,
  Ymt,
  VF,
  lpn,
  iVe,
  rne,
  kO,
  Rzn,
  gpn,
  RM,
  hpn,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Ble, a3e } from "../成本-Token统计/chunk-3nwwgatc.js";
function r3e(e) {
  let i = RM();
  if (!i.five_hour && !i.seven_day) {
    let o = gpn(e);
    return o
      ? {
          utilization: o.utilization,
          source: "persisted",
          fetchedAtMs: o.fetchedAtMs,
        }
      : null;
  }
  let s = (o) =>
      o
        ? {
            utilization: o.utilization * 100,
            resets_at: new Date(o.resets_at * 1000).toISOString(),
          }
        : void 0,
    t = g(hpn().seven_day_overage_included, e);
  return {
    utilization: {
      five_hour: s(i.five_hour),
      seven_day: s(i.seven_day),
      ...(t && { limits: [t] }),
    },
    source: "headers",
  };
}
function g(e, i) {
  if (!e) return;
  let s = VF();
  if (!s[0]) return;
  let t = rne(gpn(i)?.utilization.limits, s),
    o = t.length === 1 ? t[0].displayName : s[0];
  return {
    kind: "weekly_scoped",
    group: "weekly",
    percent: e.utilization * 100,
    resets_at: new Date(e.resets_at * 1000).toISOString(),
    scope: { model: { display_name: o } },
  };
}
function p(e, i) {
  return {
    status: "seeded",
    utilization: e.utilization,
    rateLimitedVia: i,
    seedSource: e.source,
    seedFetchedAtMs: e.fetchedAtMs,
  };
}
var m = 200;
function f(e) {
  if (e.length <= m) return e;
  return `${e.slice(0, m).replace(/[\uD800-\uDBFF]$/, "")}\u2026`;
}
async function plt(e, i) {
  let s = await y(e, i);
  if (s.status !== "ok" && s.status !== "seeded") return s;
  let t =
    s.status === "seeded" && s.seedSource === "headers"
      ? hpn().seven_day_overage_included
      : void 0;
  if (t) {
    await lpn();
    let o = g(t, e),
      { limits: r, ...d } = s.utilization;
    return { ...s, utilization: o ? { ...d, limits: [o] } : d };
  }
  if (iVe(s.utilization.limits)) await lpn();
  return s;
}
async function y(e, i) {
  let s = vn()?.accountUuid;
  try {
    let t = await kO(i);
    if (!t) return { status: "empty_response" };
    let o = gt() && lp(),
      r = Azn(t),
      d = Ymt(t);
    if (!r || (o && !d)) {
      n("Usage fetch returned a fieldless or non-object body (in-band error)", {
        level: "error",
      });
      let u = r && "error" in t ? t.error : void 0,
        a =
          typeof u === "object" &&
          u !== null &&
          "type" in u &&
          u.type === "rate_limit_error"
            ? "envelope"
            : null,
        c = r3e(e);
      if (c) return p(c, a);
      return {
        status: "unavailable",
        rateLimitedVia: a,
        responseBody: f(b(t)),
      };
    }
    if (d) Rzn(t, s, e);
    return { status: "ok", utilization: t };
  } catch (t) {
    if (cc(t)) n(`Failed to load usage data: ${l(t)}`, { level: "error" });
    else h(t);
    let o = t,
      r = o.response?.status === 429 ? "http_429" : null,
      d = r3e(e);
    if (d) return p(d, r);
    return {
      status: "unavailable",
      rateLimitedVia: r,
      responseBody: o.response?.data ? f(b(o.response.data)) : void 0,
    };
  }
}
var IDt = 10;
function _(e) {
  return {
    request_count: e.requestCount,
    session_count: e.sessionCount,
    behaviors: e.behaviors
      .filter((i) => e.totalCost > 0 && (i.cost / e.totalCost) * 100 >= IDt)
      .map((i) => ({
        key: i.key,
        pct: Math.round((i.cost / e.totalCost) * 100),
        count: i.count,
      })),
    agents: e.agents,
    skills: e.skills,
    plugins: e.plugins,
    mcp_servers: e.mcpServers,
  };
}
async function o3e({ includeBehaviors: e = !0, storageV5: i, credentials: s }) {
  let t = gt(),
    o = t && lp(),
    [r, d] = await Promise.all([
      o
        ? plt(i, s).then((a) =>
            a.status === "ok" || a.status === "seeded" ? a.utilization : null,
          )
        : Promise.resolve(null),
      e && t && Ble().allowed
        ? a3e(i).then(
            (a) => ({ day: _(a.day), week: _(a.week) }),
            (a) => (h(a), null),
          )
        : Promise.resolve(null),
    ]),
    u;
  if (r !== null)
    try {
      u = rne(r.limits, VF()).map((a) => ({
        display_name: a.displayName,
        utilization: a.limit.utilization ?? null,
        resets_at:
          typeof a.limit.resets_at === "number"
            ? new Date(a.limit.resets_at * 1000).toISOString()
            : (a.limit.resets_at ?? null),
      }));
    } catch (a) {
      n(`model_scoped projection failed: ${l(a)}`, { level: "error" });
    }
  return {
    session: {
      total_cost_usd: su(),
      total_api_duration_ms: oE(),
      total_duration_ms: vW(),
      total_lines_added: l8(),
      total_lines_removed: c8(),
      model_usage: jw(),
    },
    subscription_type: qn(),
    rate_limits_available: o,
    rate_limits:
      r === null
        ? null
        : u !== void 0 && u.length > 0
          ? { ...r, model_scoped: u }
          : r,
    behaviors: d,
  };
}
export { r3e, plt, IDt, o3e };
