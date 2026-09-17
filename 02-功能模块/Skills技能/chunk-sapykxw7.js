// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, bi, K, jc, ke, m_e, V1 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { Za } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Hr } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { getSettingsForSource, parentManagedTierParticipates, getSettings_DEPRECATED, getPolicySettingsLoadErrors, filterFatalPolicyErrors } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { resetSettingsCacheWithBackendRead } from "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import { Bo } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
function isRestrictedToPluginOnly(t) {
  let o = getSettingsForSource("policySettings")?.strictPluginOnlyCustomization;
  if (o === !0) return !0;
  if (Array.isArray(o)) return o.includes(t);
  return !1;
}
var k = new Set(["plugin", "policySettings", "built-in", "builtin", "bundled"]);
function isSourceAdminTrusted(t) {
  return t !== void 0 && k.has(t);
}
var c = "cli";
class f {
  snapshotKey = () => c;
  snapshotsBySessionId = new Map();
  setSnapshotKey(t) {
    this.snapshotKey = t;
  }
  current() {
    let t = this.snapshotKey(),
      o = this.snapshotsBySessionId.get(t);
    if (!o)
      ((o = { initialHooksConfig: null }), this.snapshotsBySessionId.set(t, o));
    return o;
  }
  store(t) {
    this.current().initialHooksConfig = t;
  }
  evict(t) {
    if (t === c) return;
    this.snapshotsBySessionId.delete(t);
  }
}
var h = new j(() => new f());
function a() {
  return bi(h);
}
function l() {
  let t = getSettingsForSource("policySettings");
  if (t?.disableAllHooks === !0) return {};
  if (t?.allowManagedHooksOnly === !0 || Hr()) return t?.hooks ?? {};
  if (isRestrictedToPluginOnly("hooks")) return t?.hooks ?? {};
  let o = getSettings_DEPRECATED();
  if (o.disableAllHooks === !0) return t?.hooks ?? {};
  return o.hooks ?? {};
}
function shouldAllowManagedHooksOnly() {
  return Hr() || shouldAllowManagedHooksOnlyByPolicy();
}
function shouldAllowManagedHooksOnlyByPolicy() {
  let t = getSettingsForSource("policySettings");
  if (t?.allowManagedHooksOnly === !0) return !0;
  if (getSettings_DEPRECATED().disableAllHooks === !0 && t?.disableAllHooks !== !0) return !0;
  return !1;
}
function shouldHoldGuardHooksByAdmin() {
  return Hr() || getSettingsForSource("policySettings")?.allowManagedHooksOnly === !0;
}
function shouldHoldDeviceHooksByPolicy() {
  return shouldHoldGuardHooksByAdmin() || policySettingsUnreadable();
}
function policySettingsUnreadable() {
  return filterFatalPolicyErrors(getPolicySettingsLoadErrors()).length > 0 || (m_e() && parentManagedTierParticipates());
}
function areDeviceHooksStoodDown() {
  return shouldHoldDeviceHooksByPolicy() || isRestrictedToPluginOnly("hooks");
}
function shouldDisableAllHooksIncludingManaged() {
  return getSettingsForSource("policySettings")?.disableAllHooks === !0;
}
function shouldSkipSessionHooksByPolicy() {
  return shouldDisableAllHooksIncludingManaged() || shouldAllowManagedHooksOnlyByPolicy();
}
function captureHooksConfigSnapshot() {
  (Za(), a().store(l()), V1());
}
function updateHooksConfigSnapshot(t) {
  (Za(t), a().store(l()), V1());
}
async function updateHooksConfigSnapshotThroughBackend(t) {
  let o = await resetSettingsCacheWithBackendRead(t);
  try {
    (a().store(l()), V1());
  } finally {
    o?.();
  }
}
function* listProcessHooksConfigSnapshots() {
  for (let t of a().snapshotsBySessionId.values())
    if (t.initialHooksConfig !== null) yield t.initialHooksConfig;
}
function getHooksConfigFromSnapshot() {
  let t = a().current();
  if (t.initialHooksConfig === null) (Za(), (t.initialHooksConfig = l()), V1());
  return t.initialHooksConfig;
}
function Q$(t, o) {
  logEvent("tengu_goal_cleared", {
    reason: fromEnum(o),
    iterations: t.iterations,
    durationMs: Date.now() - t.setAt,
    origin: fromEnumOpt(t.origin),
  });
}
import { randomUUID } from "crypto";
var m$e = 4000,
  A = new Set(["clear", "stop", "off", "reset", "none", "cancel"]);
function cve(t) {
  return A.has(t.toLowerCase());
}
function nAn(t) {
  for (let o = t.length - 1; o >= 0; o--) {
    let s = t[o];
    if (s?.type !== "attachment" || s.attachment.type !== "goal_status")
      continue;
    let e = s.attachment;
    if (!e.met || e.sentinel) continue;
    return {
      condition: e.condition,
      iterations: e.iterations,
      durationMs: e.durationMs,
      tokens: e.tokens,
    };
  }
  return null;
}
var BEt = (t) =>
  `A session-scoped Stop hook is now active with condition: "${t}". Briefly acknowledge the goal, then immediately start (or continue) working toward it \u2014 treat the condition itself as your directive and do not pause to ask the user what to do. The hook will block stopping until the condition holds. It auto-clears once the condition is met \u2014 do not tell the user to run \`/goal clear\` after success; that's only for clearing a goal early.`;
function Joe(t, o) {
  let s = [];
  for (let e of t.get(o, "Stop").get("Stop") ?? []) {
    if (e.matcher !== "" || e.skillRoot !== void 0) continue;
    for (let n of e.hooks) if (n.type === "prompt") s.push(n);
  }
  return s;
}
var O =
    "/goal is only available in trusted workspaces. Restart, accept the trust dialog, and try again.",
  C =
    "/goal can't run while hooks are restricted (disableAllHooks or allowManagedHooksOnly is set in settings or by policy).";
function AJe() {
  if (shouldSkipSessionHooksByPolicy()) return { message: C, code: "hooks_gate" };
  if (!ke() && !Bo()) return { message: O, code: "trust_gate" };
  return null;
}
function dnr(t, o, s) {
  t((e) => ({ ...e, queuedGoalOrigin: { condition: o, origin: s } }));
}
function v(t, o) {
  let s = o.getAppState().queuedGoalOrigin;
  if (s === void 0 || s.condition !== t) return "user";
  return (o.setAppState((e) => ({ ...e, queuedGoalOrigin: void 0 })), s.origin);
}
function uve(t, o, s) {
  let e = s ?? v(t, o),
    n = AJe();
  if (n !== null) return (logFeatureSad("goal_set", n.code, { origin: fromEnum(e) }), n.message);
  let r = K(),
    d = o.getAppState().activeGoal;
  if (d !== void 0) Q$(d, "superseded");
  for (let p of Joe(o.sessionHooksRegistry, r))
    o.sessionHooksRegistry.remove(r, "Stop", p);
  o.sessionHooksRegistry.add(r, "Stop", "", { type: "prompt", prompt: t });
  let m = {
    condition: t,
    iterations: 0,
    setAt: Date.now(),
    origin: e,
    tokensAtStart: jc(),
  };
  return (
    o.setAppState((p) => ({ ...p, activeGoal: m })),
    o.applyMessageOp({ type: "append", messages: [Jzt(!1, t)] }),
    logEvent("tengu_stop_hook_added", {
      promptLength: t.length,
      via: S("goal"),
      origin: fromEnum(e),
    }),
    logFeatureOk("goal_set"),
    null
  );
}
function dve(t) {
  let o = K(),
    s = Joe(t.sessionHooksRegistry, o);
  if (s.length === 0) return null;
  let e = s[0].prompt;
  for (let r of s) t.sessionHooksRegistry.remove(o, "Stop", r);
  let n = t.getAppState().activeGoal;
  if (n !== void 0) Q$(n, "user_clear");
  return (
    t.setAppState((r) =>
      r.activeGoal === void 0 ? r : { ...r, activeGoal: void 0 },
    ),
    t.applyMessageOp({ type: "append", messages: [Jzt(!0, e)] }),
    logEvent("tengu_stop_hook_removed", { via: S("goal") }),
    e
  );
}
function Jzt(t, o) {
  return {
    type: "attachment",
    uuid: randomUUID(),
    timestamp: new Date().toISOString(),
    attachment: { type: "goal_status", met: t, sentinel: !0, condition: o },
  };
}
export {
  isRestrictedToPluginOnly,
  isSourceAdminTrusted,
  shouldAllowManagedHooksOnly,
  shouldAllowManagedHooksOnlyByPolicy,
  shouldHoldGuardHooksByAdmin,
  shouldHoldDeviceHooksByPolicy,
  policySettingsUnreadable,
  areDeviceHooksStoodDown,
  shouldDisableAllHooksIncludingManaged,
  shouldSkipSessionHooksByPolicy,
  captureHooksConfigSnapshot,
  updateHooksConfigSnapshot,
  updateHooksConfigSnapshotThroughBackend,
  listProcessHooksConfigSnapshots,
  getHooksConfigFromSnapshot,
  Q$,
  m$e,
  cve,
  nAn,
  BEt,
  Joe,
  AJe,
  dnr,
  uve,
  dve,
  Jzt,
};
