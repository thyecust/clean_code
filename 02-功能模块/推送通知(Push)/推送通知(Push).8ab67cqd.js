// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { ht, isClaudeAISubscriber, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/共享小工具-未细化/diagnostics-log.js";
import { getInitialSettings, updateSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { createStore } from "../../01-核心基础设施/共享小工具-未细化/state-store.js";
import { s, T, O, v, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var _ = createLazyValue(() => {
  let e = c({ enable_email: O().nullish(), enable_push: O().nullish() }),
    t = c({ bogosort: e.nullish(), code_requires_action: e.nullish() }),
    r = c({
      has_active_channel: O(),
      platforms: v(s())
        .nullish()
        .transform((n) => n ?? []),
      most_recent_token_refresh: s().nullish(),
    });
  return c({
    account_id: T().nullish(),
    organization_id: T().nullish(),
    preferences: c({ feature_preference: t.nullish() }).nullish(),
    push_reachability: r.nullish(),
  });
});
var b = 1e4,
  S = new j(() => ({ reachability: createStore(void 0), hydrated: Le() }));
function o() {
  return S.of(B().host);
}
function getPushReachability() {
  return o().reachability.getState();
}
function subscribePushReachability(e) {
  return o().reachability.subscribe(e);
}
function subscribePushPreferencesHydrated(e) {
  return o().hydrated.subscribe(e);
}
function P() {
  let e = getInitialSettings(),
    t = ee();
  return {
    agentPushNotifEnabled: e.agentPushNotifEnabled ?? t.agentPushNotifEnabled,
    inputNeededNotifEnabled:
      e.inputNeededNotifEnabled ?? t.inputNeededNotifEnabled,
  };
}
var N = "/api/claude_code/notification/preferences";
function h() {
  return isClaudeAISubscriber();
}
async function E() {
  if (!h()) return { ok: !1, reason: "no_auth" };
  try {
    let e = await ht.get(N, { timeout: b });
    if (!e.ok) return { ok: !1, reason: "fetch_failed" };
    let t = _().safeParse(e.data);
    if (!t.success)
      return (
        writeDiagnosticsEvent("warn", "notif_prefs_fetch_parse_failed", {
          issues: t.error.issues.map((r) => r.path.join(".")).join(","),
        }),
        { ok: !1, reason: "parse_failed" }
      );
    return { ok: !0, prefs: t.data };
  } catch (e) {
    let { kind: t } = Ps(e);
    return (
      writeDiagnosticsEvent("warn", "notif_prefs_fetch_failed", { kind: t }),
      { ok: !1, reason: "fetch_failed" }
    );
  }
}
async function k(e) {
  if (!h()) return;
  try {
    if (!(await ht.patch(N, e, { timeout: b })).ok) {
      logFeatureSad("notif_prefs_patch", "no_auth");
      return;
    }
    (writeDiagnosticsEvent("info", "notif_prefs_patch_ok", {}), logFeatureOk("notif_prefs_patch"));
  } catch (t) {
    let { kind: r } = Ps(t);
    (writeDiagnosticsEvent("warn", "notif_prefs_patch_failed", { kind: r }),
      logFeatureBad("notif_prefs_patch", "http_error"));
  }
}
function syncPushPreferencesToServer() {
  let e = P(),
    t = {};
  if (typeof e.agentPushNotifEnabled === "boolean")
    t.bogosort = { enable_push: e.agentPushNotifEnabled };
  if (typeof e.inputNeededNotifEnabled === "boolean")
    t.code_requires_action = { enable_push: e.inputNeededNotifEnabled };
  if (Object.keys(t).length === 0) return;
  k({ preferences: { feature_preference: t } });
}
async function hydratePushNotificationPreferences(e) {
  if (!h()) {
    (logFeatureSad("notif_prefs_hydrate", "no_auth"),
      o().reachability.setState(() => null),
      writeDiagnosticsEvent("info", "notif_prefs_hydrate_skipped", { reason: "no_auth" }));
    return;
  }
  let t = await E();
  if (!t.ok) {
    (logFeatureBad("notif_prefs_hydrate", t.reason),
      o().reachability.setState(() => null),
      writeDiagnosticsEvent("info", "notif_prefs_hydrate_skipped", { reason: t.reason }));
    return;
  }
  let r = t.prefs,
    n = r.push_reachability ?? null;
  if ((o().reachability.setState(() => n), n))
    logEvent("tengu_push_reachability", {
      has_active_channel: n.has_active_channel,
      platform_count: n.platforms.length,
    });
  let p = r.preferences?.feature_preference,
    u = p?.bogosort?.enable_push,
    l = p?.code_requires_action?.enable_push,
    d = P(),
    a = {};
  if (d.agentPushNotifEnabled === void 0 && typeof u === "boolean")
    a.agentPushNotifEnabled = u;
  if (d.inputNeededNotifEnabled === void 0 && typeof l === "boolean")
    a.inputNeededNotifEnabled = l;
  if (
    (writeDiagnosticsEvent("info", "notif_prefs_hydrate_result", {
      has_active_channel: n?.has_active_channel,
      server_bogosort: u,
      server_code_requires_action: l,
      seeded: Object.keys(a).length > 0,
    }),
    Object.keys(a).length === 0)
  ) {
    logFeatureOk("notif_prefs_hydrate");
    return;
  }
  (await updateSettingsForSource("userSettings", a, void 0, e),
    o().hydrated.emit(),
    logFeatureOk("notif_prefs_hydrate"));
}
export { getPushReachability, subscribePushReachability, subscribePushPreferencesHydrated, syncPushPreferencesToServer, hydratePushNotificationPreferences };
