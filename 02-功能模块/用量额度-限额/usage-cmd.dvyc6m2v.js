// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 202 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { mayHaveRemoteClient } from "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import { isClaudeAISubscriber, hasProfileScope, getSubscriptionType, getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { formatResetTime, formatResetText } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { stripAnsi } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { isUsageBasedBilling, formatCostBreakdown, formatCostSummary, getOverageIncludedModels, getModelWeeklyLimitRows, getCurrentLimits, getUnifiedRateLimitWindows } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getUsagePatternsAccess } from "../成本-Token统计/usage-transcript-scan.js";
import { MIN_BEHAVIOR_PCT, collectUsageData } from "../MCP客户端/usage-rate-limits.js";
function formatRateLimits(t) {
  let { rate_limits: e, subscription_type: n } = t;
  if (!e) return null;
  let i = n === "max" || n === "team" || n === null,
    s = [
      { title: "Current session", limit: e.five_hour },
      { title: "Current week (all models)", limit: e.seven_day },
      ...(i
        ? [{ title: "Current week (Sonnet only)", limit: e.seven_day_sonnet }]
        : []),
      ...getModelWeeklyLimitRows(e.limits, getOverageIncludedModels()),
    ],
    r = [];
  for (let { title: o, limit: a } of s) {
    if (!a || a.utilization === null) continue;
    let l = a.resets_at ? ` \xB7 resets ${formatResetText(a.resets_at, !0, !0, !0)}` : "";
    r.push(`${o}: ${Math.floor(a.utilization)}% used${l}`);
  }
  return r.length > 0
    ? r.join(`
`)
    : null;
}
function formatBehaviors(t) {
  let { behaviors: e } = t;
  if (!e) return null;
  let n = [f("Last 24h", e.day), f("Last 7d", e.week)].filter(
    (i) => i !== null,
  );
  if (n.length === 0) return null;
  return [
    g,
    "Approximate, based on local sessions on this machine \u2014 does not include other devices or claude.ai. Behaviors are independent characteristics, not a breakdown.",
    "",
    n.join(`

`),
  ].join(`
`);
}
var g = "What's contributing to your limits usage?",
  O = async (t, e) => {
    let n = getSubscriptionType() !== null || hasProfileScope();
    if (isClaudeAISubscriber() && n && !isUsageBasedBilling()) {
      let s;
      if (getCurrentLimits().isUsingOverage)
        s =
          "You are currently using your overages to power your Claude Code usage. We will automatically switch you back to your subscription rate limits when they reset";
      else
        s =
          "You are currently using your subscription to power your Claude Code usage";
      let r = ke(),
        o = getUsagePatternsAccess(),
        a = await collectUsageData({
          includeBehaviors: r && !mayHaveRemoteClient(e.session) && o.allowed,
          storageV5: e.storageV5,
          credentials: e.credentials,
        }),
        l = formatRateLimits(a);
      if (l)
        s += `

${l}`;
      let c = a.behaviors && !mayHaveRemoteClient(e.session) ? formatBehaviors(a) : null;
      if (c)
        s += `

${c}`;
      else if (r && !mayHaveRemoteClient(e.session) && !o.allowed && isClaudeAISubscriber())
        s += `

${g}
${o.reason}`;
      if (getFeatureValue_CACHED_MAY_BE_STALE("tengu_amber_lark", !1)) {
        let m = formatCostBreakdown();
        if (m)
          s += `

${chalk.dim(m)}`;
      }
      return { type: "text", value: s };
    }
    let i = stripAnsi(formatCostSummary());
    if (getAPIProvider() === "gateway") {
      let s = getUnifiedRateLimitWindows().overage;
      if (s)
        i += `

Spend limit: ${Math.round(s.utilization * 100)}% used \xB7 resets ${formatResetTime(s.resets_at, !0, !0, !0)}`;
    }
    return { type: "text", value: i };
  },
  p = 8,
  y = {
    cache_miss: (t) => `${t}% of your usage hit a >100k-token cache miss`,
    long_context: (t) => `${t}% of your usage was at >150k context`,
    subagent_heavy: (t) =>
      `${t}% of your usage came from subagent-heavy sessions`,
    high_parallel: (t) =>
      `${t}% of your usage was while 4+ sessions ran in parallel`,
    cron: (t) => `${t}% of your usage came from sessions active for 8+ hours`,
  };
function f(t, e) {
  let n = e.behaviors.filter((o) => o.pct >= MIN_BEHAVIOR_PCT),
    i = [
      u("Top skills", e.skills, (o) => `/${o}`),
      u("Top subagents", e.agents),
      u("Top plugins", e.plugins),
      u("Top MCP servers", e.mcp_servers),
    ].filter((o) => o !== null);
  if (n.length === 0 && i.length === 0) return null;
  let s = `${e.request_count} ${pluralize(e.request_count, "request")}`,
    r = `${e.session_count} ${pluralize(e.session_count, "session")}`;
  return [
    `${t} \xB7 ${s} \xB7 ${r}`,
    ...n.map((o) => `  ${y[o.key](o.pct)}`),
    ...i.map((o) => `  ${o}`),
  ].join(`
`);
}
function u(t, e, n) {
  if (e.length === 0) return null;
  let i = e
      .slice(0, p)
      .map((r) => `${n ? n(r.name) : r.name} ${r.pct}%`)
      .join(", "),
    s = e.length - p;
  return `${t}: ${i}${s > 0 ? `, +${s} more` : ""}`;
}
export { O as call, formatBehaviors, formatRateLimits };
