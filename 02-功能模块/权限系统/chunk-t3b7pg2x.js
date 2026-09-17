// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  canUsePerTurnControl,
  isActiveCatalogFromServer,
  getModelEffortLevels,
  getModelDefaultEffort,
  getApplicableOrgDefaultModel,
  getOrgDefaultModelUpdatedAt,
  isModelAllowed,
  isUnservedFamilySpelling,
  isPinnedFableModel,
  stepDownRestrictedFamilyAliasPick,
  getBootstrapOrgDefaultEffect,
  getOrgLockedDefaultModel,
  isWindowSilentDefaultPick,
  getDefaultMainLoopModel,
  getCanonicalName,
  parseUserSpecifiedModel,
  strip1mTag as n0,
  getModelCapabilityOverride,
  hashForTelemetry,
  isBgSession,
  getModelAccessCache,
  getOrgModelDefaultCache,
  isProSubscriber,
  getFeatureValueWithSource_CACHED_MAY_BE_STALE,
  getFeatureValue_CACHED_MAY_BE_STALE,
  saveGlobalConfig,
  getGlobalConfig,
  getCachedClientDataStrict,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { MXt, Xxt, jc, drt, ke, gae, bHt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { getRemoteTransport, hasRemoteControlChannel } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { getEnabledSettingsSources, isSettingsSourceEnabled } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { isTopLevelCoworkSession, isVsCodeExtensionSession } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { getPolicyHelperAppendSystemPrompt, getSettingsForSource, getInitialSettings, getEffectiveSettingSource, updateSettingsForSource, hasVouchedSkipDangerousModePermissionPrompt } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { normalizePermissionModeAlias, parsePermissionMode, clampPermissionMode, parsePermissionModeOrDefault } from "./chunk-e4pfvp7x.js";
import { strip1mSuffix, getCatalogEntryById, modelHasCapability, getAPIProvider, getProviderForModel, hasFirstPartyCapabilities } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { areWorkflowsEnabled } from "../../01-核心基础设施/共享小工具-未细化/workflow-feature-gates.js";
function resolvePermissionModeForProactivityLevel(e, t, o) {
  switch (e) {
    case "ask":
      return t.isAutoModeAvailable ? "auto" : "default";
    case "default": {
      if (t.isAutoModeAvailable) return "auto";
      let r = o ?? "default";
      if (
        r === "auto" ||
        (r === "bypassPermissions" && !t.isBypassPermissionsModeAvailable)
      )
        return "default";
      return r;
    }
    case "proactive":
      if (t.isBypassPermissionsModeAvailable) return "bypassPermissions";
      return t.isAutoModeAvailable ? "auto" : "acceptEdits";
  }
}
function hasFable5Mitigations(e, t) {
  if (modelHasCapability(e, "fable_5_mitigations", t) || e === "claude-mythos-5") return !0;
  return !1;
}
function hasFable51PromptBundle(e) {
  return !isTopLevelCoworkSession() && modelHasCapability(e, "fable_5_1_prompt_bundle") === !0;
}
function isFableFamilyModel(e) {
  return e.startsWith("claude-fable-");
}
function isMythosFamilyModel(e) {
  return e.startsWith("claude-mythos-");
}
function o4t(e) {
  return !1;
}
var EFFORT_LEVELS = ["low", "medium", "high", "xhigh", "max"],
  XHIGH_CAPABLE_MODELS_LABEL = "Fable 5, Opus 4.7+, Sonnet 5",
  MAX_CAPABLE_MODELS_LABEL = "Fable 5, Opus 4.6+, Sonnet 4.6+",
  MAX_EFFORT_WARNING =
    "May use excessive tokens resulting in long response times or overthinking. Use sparingly for the hardest tasks.";
function modelSupportsEffort(e) {
  if (bHt(e)) return !1;
  let t = getModelCapabilityOverride(e, "effort");
  if (t !== void 0) return t;
  let o = getCanonicalName(e),
    r = getModelEffortLevels(e, o);
  if (r !== void 0) return r.length > 0;
  if (
    o.includes("claude-3-") ||
    o === "claude-opus-4-0" ||
    o === "claude-opus-4-1" ||
    o === "claude-sonnet-4-0" ||
    o === "claude-sonnet-4-5" ||
    o === "claude-haiku-4-5"
  )
    return !1;
  if (a.CLAUDE_CODE_ALWAYS_ENABLE_EFFORT) return !0;
  if (modelHasCapability(o, "effort", e) || o === "claude-mythos-5") return !0;
  return hasFirstPartyCapabilities(getProviderForModel(e));
}
function modelSupportsMaxEffort(e) {
  if (bHt(e)) return !1;
  let t = getModelCapabilityOverride(e, "max_effort");
  if (t !== void 0) return t;
  let o = getCanonicalName(e),
    r = getModelEffortLevels(e, o);
  if (r !== void 0) return r.includes("max");
  if (
    o.includes("claude-3-") ||
    o === "claude-opus-4-0" ||
    o === "claude-opus-4-1" ||
    o === "claude-opus-4-5" ||
    o === "claude-sonnet-4-0" ||
    o === "claude-sonnet-4-5" ||
    o === "claude-haiku-4-5"
  )
    return !1;
  if (modelHasCapability(o, "max_effort", e) || o === "claude-mythos-5") return !0;
  return hasFirstPartyCapabilities(getProviderForModel(e));
}
function modelSupportsXHighEffort(e) {
  if (bHt(e)) return !1;
  let t = getModelCapabilityOverride(e, "xhigh_effort");
  if (t !== void 0) return t;
  let o = getCanonicalName(e),
    r = getModelEffortLevels(e, o);
  if (r !== void 0) return r.includes("xhigh");
  if (
    o.includes("claude-3-") ||
    o === "claude-opus-4-0" ||
    o === "claude-opus-4-1" ||
    o === "claude-opus-4-5" ||
    o === "claude-opus-4-6" ||
    o === "claude-sonnet-4-0" ||
    o === "claude-sonnet-4-5" ||
    o === "claude-sonnet-4-6" ||
    o === "claude-haiku-4-5"
  )
    return !1;
  if (modelHasCapability(o, "xhigh_effort", e) || o === "claude-mythos-5") return !0;
  return hasFirstPartyCapabilities(getProviderForModel(e));
}
function modelSupportsUltracode(e) {
  return areWorkflowsEnabled() && (e === void 0 || (modelSupportsXHighEffort(e) && isEffortAllowedByOrg("xhigh", e)));
}
function getUltracodeFallbackEffort(e) {
  return clampEffortToOrgLimit(modelSupportsMaxEffort(e) && isEffortAllowedByOrg("max", e) ? "max" : "high", e);
}
function isUltracodeActive(e, t, o) {
  return o === !0 && areWorkflowsEnabled() && resolveModelEffortLevel(e, t) === "xhigh";
}
function isValidEffortLevel(e) {
  return EFFORT_LEVELS.includes(e);
}
function M(e) {
  return EFFORT_LEVELS.indexOf(e);
}
var HIGH_EFFORT_LEVEL = "high";
function isAboveHighEffort(e) {
  return isValidEffortLevel(e) && M(e) > M(HIGH_EFFORT_LEVEL);
}
function modelCapsEffortWhenThinkingDisabled(e) {
  let t = getCanonicalName(e);
  return t === "claude-opus-5" || modelHasCapability(t, "thinking_disabled_effort_cap") === !0;
}
function getOrgMaxEffortLevelForModel(e) {
  let t = getAPIProvider();
  if (t !== "firstParty" && t !== "gateway") return null;
  let o = getCanonicalName(n0(e.trim().toLowerCase()), { identity: !0 }),
    r = getModelAccessCache().find(
      (u) => getCanonicalName(n0(u.apiName.trim().toLowerCase()), { identity: !0 }) === o,
    )?.maxEffortLevel;
  return r != null && isValidEffortLevel(r) ? r : null;
}
function getOrgDefaultEffortLevelForModel(e) {
  if (getAPIProvider() !== "firstParty") return null;
  let t = getOrgModelDefaultCache();
  if (t === null) return null;
  let o = t.default_effort_level;
  if (o == null || !isValidEffortLevel(o)) return null;
  let r = getCanonicalName(n0(e.trim().toLowerCase()), { identity: !0 });
  return getCanonicalName(n0(t.name.trim().toLowerCase()), { identity: !0 }) === r ? o : null;
}
function isEffortAllowedByOrg(e, t) {
  let o = getOrgMaxEffortLevelForModel(t);
  return o === null || M(e) <= M(o);
}
function getAllowedEffortLevels(e) {
  return EFFORT_LEVELS.filter((t) => isEffortAllowedByOrg(t, e));
}
function clampEffortToOrgLimit(e, t) {
  let o = getOrgMaxEffortLevelForModel(t);
  return o !== null && M(e) > M(o) ? o : e;
}
function G(e, t) {
  if (t === "xhigh") return modelSupportsXHighEffort(e);
  if (t === "max") return modelSupportsMaxEffort(e);
  return !0;
}
function isEffortCappedByOrg(e) {
  let t = getOrgMaxEffortLevelForModel(e);
  return t !== null && EFFORT_LEVELS.some((o) => M(o) > M(t) && G(e, o));
}
function getOrgEffortCapWarning(e, t) {
  if (typeof e !== "string" || !isValidEffortLevel(e)) return null;
  let o = getOrgMaxEffortLevelForModel(t);
  if (o === null || M(e) <= M(o)) return null;
  let r = resolveModelEffortLevel(t, e) ?? o;
  return `Effort '${e}' exceeds your organization's limit for ${t}; using '${r}'.`;
}
var B = { med: "medium" },
  U = { ultracode: "xhigh" };
function normalizeUltracodeAlias(e) {
  if (typeof e !== "string") return;
  let t = e.trim().toLowerCase();
  return Object.hasOwn(U, t) ? t : void 0;
}
function resolveUltracodeEffortLevel(e) {
  let t = normalizeUltracodeAlias(e);
  return t === void 0 ? void 0 : U[t];
}
function formatEffortLevel(e) {
  return String(e);
}
function parseEffortLevelAlias(e) {
  let t = e.trim().toLowerCase(),
    o = B[t] ?? t;
  return isValidEffortLevel(o) ? o : void 0;
}
function parseEffortArgValue(e) {
  let t = parseEffortLevelAlias(e);
  if (t !== void 0) return { level: t, warning: void 0 };
  let o = normalizeUltracodeAlias(e);
  if (o !== void 0) return { level: o, warning: void 0 };
  return {
    level: void 0,
    warning: `Unknown --effort value '${e}' \u2014 ignoring it and using the default effort. Valid values: ${EFFORT_LEVELS.join(", ")}.`,
  };
}
function coerceEffortLevelValue(e) {
  if (e === void 0 || e === null || e === "") return;
  if (typeof e === "number" && V(e)) return e;
  let t = String(e).toLowerCase(),
    o = B[t] ?? t;
  if (isValidEffortLevel(o)) return o;
  let r = parseInt(t, 10);
  if (!isNaN(r) && V(r)) return r;
  return;
}
function toPersistableEffortLevel(e) {
  if (e === "low" || e === "medium" || e === "high" || e === "xhigh") return e;
  return;
}
function isUltracodeRequestedAtStartup(e) {
  let t = getInitialSettings().ultracode === !0 || normalizeUltracodeAlias(e) === "ultracode";
  if (t) Xxt();
  return t;
}
function getEnvEffortLevelOverride() {
  let e = a.CLAUDE_CODE_EFFORT_LEVEL;
  return e?.toLowerCase() === "unset" || e?.toLowerCase() === "auto"
    ? null
    : coerceEffortLevelValue(e);
}
function isLaunchEffortPinned(e) {
  if (MXt()) return !1;
  let t = getCanonicalName(e);
  if (t.includes("opus-4-7")) return !getGlobalConfig().unpinOpus47LaunchEffort;
  if (t.includes("opus-4-8")) return !getGlobalConfig().unpinOpus48LaunchEffort;
  if (strip1mSuffix(t) === "claude-fable-5" || (isPinnedFableModel(e) && !isFableFamilyModel(t)))
    return !getGlobalConfig().unpinFable5LaunchEffort;
  return !1;
}
function W() {
  let e = getGlobalConfig();
  return Boolean(
    e.unpinOpus47LaunchEffort &&
    e.unpinOpus48LaunchEffort &&
    e.unpinFable5LaunchEffort,
  );
}
var N = Object.freeze({ kind: "inherit" }),
  K = Object.freeze({ kind: "default" });
function createEffortLevel(e) {
  return { kind: "level", value: e };
}
function createEffortLevelOrDefault(e) {
  return e === void 0 ? K : createEffortLevel(e);
}
function z(e) {
  return e === void 0 ? N : createEffortLevel(e);
}
function isSameEffortSelection(e, t) {
  return (
    e === t ||
    (e.kind === t.kind &&
      (e.kind !== "level" || (t.kind === "level" && e.value === t.value)))
  );
}
function X() {
  let e = getInitialSettings(),
    t = I({ cli: { effort: void 0 }, env: process.env, settings: e });
  if (e.ultracode === !0) return { default: t, byModel: {} };
  let o = getEnabledSettingsSources()
      .map((s) => getSettingsForSource(s))
      .filter((s) => s !== void 0 && s !== null)
      .reverse(),
    r = o.map((s) => {
      let l = new Map();
      for (let [p, E] of Object.entries(s.modelSettings ?? {})) {
        let v = E?.effortLevel;
        if (v === void 0) continue;
        let g = getModelSettingsKey(p);
        if (p === g || !l.has(g)) l.set(g, v);
      }
      return l;
    }),
    u = new Set();
  for (let s of r) for (let l of s.keys()) u.add(l);
  let d = {};
  for (let s of u)
    for (let l = 0; l < o.length; l++) {
      let p = r[l].get(s);
      if (p !== void 0) {
        d[s] = toPersistableEffortLevel(p);
        break;
      }
      if (o[l].effortLevel !== void 0) {
        d[s] = toPersistableEffortLevel(o[l].effortLevel);
        break;
      }
    }
  return { default: t, byModel: d };
}
function q(e, t) {
  if (t === void 0 || t === null) return e.default;
  let o = getModelSettingsKey(t);
  return Object.hasOwn(e.byModel, o) ? e.byModel[o] : e.default;
}
function Q(e) {
  for (let t in e.byModel) return !0;
  return !1;
}
function getModelSettingsKey(e) {
  return strip1mSuffix(getCanonicalName(parseUserSpecifiedModel(e), { deterministic: !0, identity: !0 }));
}
function Z(e, t) {
  let o = getModelSettingsKey(e);
  return Object.hasOwn(Object.prototype, o)
    ? { effortLevel: t }
    : { modelSettings: { [o]: { effortLevel: t } } };
}
function getSessionEffortLevel(e, t) {
  let o = e.sessionEffort ?? N;
  switch (o.kind) {
    case "level":
      return o.value;
    case "default":
      return;
    case "inherit":
      if (e.settingsEffortTable === void 0) return;
      if (!Q(e.settingsEffortTable)) return e.settingsEffortTable.default;
      return q(
        e.settingsEffortTable,
        t ?? e.mainLoopModelForSession ?? e.mainLoopModel ?? getDefaultMainLoopModel(),
      );
  }
}
function getCarriableEffortLevel(e) {
  return e.kind === "level" && typeof e.value === "string" && (W() || MXt())
    ? e.value
    : void 0;
}
function unpinLaunchEffortLevels(e) {
  saveGlobalConfig(
    (t) =>
      t.unpinOpus47LaunchEffort &&
      t.unpinOpus48LaunchEffort &&
      t.unpinFable5LaunchEffort
        ? t
        : {
            ...t,
            unpinOpus47LaunchEffort: !0,
            unpinOpus48LaunchEffort: !0,
            unpinFable5LaunchEffort: !0,
          },
    e,
  );
}
function releaseLaunchEffortPins(e, t) {
  if (e) unpinLaunchEffortLevels(t);
  else if (!ke()) Xxt();
}
function resolveModelEffortLevel(e, t, { honorLaunchPin: o = !0 } = {}) {
  if (!modelSupportsEffort(e)) return;
  let r = o && isLaunchEffortPinned(e),
    u = D(e),
    d = getEnvEffortLevelOverride();
  if (d === null && !r) return;
  return P(d ?? (r ? u : void 0) ?? t ?? u, e);
}
function resolveEffortLevelForRemoteSession(e, t) {
  if (!modelSupportsEffort(e) || getEnvEffortLevelOverride() !== void 0) return;
  let o = isLaunchEffortPinned(e);
  if (typeof t === "string" && !o) return t;
  if ((t === void 0 || o) && getOrgDefaultEffortLevelForModel(e)) return getDefaultEffortLevelForModel(e);
  return;
}
function P(e, t) {
  let o = e;
  if (typeof o === "string" && isValidEffortLevel(o)) o = clampEffortToOrgLimit(o, t);
  if (o === "max" && !modelSupportsMaxEffort(t)) o = "high";
  if (o === "xhigh" && !modelSupportsXHighEffort(t)) o = "high";
  return o;
}
function getDefaultEffortLevelForModel(e) {
  return sanitizeEffortLevel(P(D(e), e));
}
function shouldConfirmEffortChangeOnWarmCache(e, t, o, r, u) {
  if (!u) return !1;
  let d = jc();
  if (d === 0 || d === r) return !1;
  if (!modelSupportsEffort(o)) return !1;
  if (
    typeof resolveModelEffortLevel(o, e) !== "number" &&
    typeof resolveModelEffortLevel(o, t) !== "number" &&
    canUsePerTurnControl(o, getCanonicalName(o))
  )
    return !1;
  if (isLaunchEffortPinned(o)) {
    if (e === void 0 || P(e, o) === P(D(o), o)) return !1;
  } else if (resolveModelEffortLevel(o, e) === resolveModelEffortLevel(o, t)) return !1;
  if (
    hasRemoteControlChannel() &&
    e !== void 0 &&
    toPersistableEffortLevel(typeof e === "string" ? clampEffortToOrgLimit(e, o) : e) === void 0
  )
    return !1;
  return !0;
}
async function saveEffortLevelForModel(e, t, o) {
  return updateSettingsForSource("userSettings", Z(t, e), void 0, o);
}
async function applyEffortLevelChange(e, t, o = !0, r) {
  let u = e !== void 0 ? toPersistableEffortLevel(e) : void 0;
  if (o && (e === void 0 || u !== void 0) && !getRemoteTransport()) {
    let d = await saveEffortLevelForModel(u, t, r);
    if (d.error) return d.error;
  }
  releaseLaunchEffortPins(o, r);
  return;
}
function buildInitialEffortState(e) {
  let t = A(e);
  if (t !== void 0) Xxt();
  let o = { sessionEffort: z(t), settingsEffortTable: X() };
  return (drt(o), o);
}
function getModelEffortLevelOrDefault(e, t) {
  let o = resolveModelEffortLevel(e, t) ?? "high";
  return sanitizeEffortLevel(o);
}
function getModelEffortLevelIfSupported(e, t) {
  return modelSupportsEffort(e) ? getModelEffortLevelOrDefault(e, t) : void 0;
}
function formatEffortSuffix(e, t) {
  if (t === void 0) return "";
  let o = resolveModelEffortLevel(e, t);
  if (o === void 0) return "";
  return ` with ${formatEffortLevel(sanitizeEffortLevel(o))} effort`;
}
function V(e) {
  return Number.isInteger(e);
}
function sanitizeEffortLevel(e) {
  if (typeof e === "string") return isValidEffortLevel(e) ? e : "high";
  return "high";
}
function te(e) {
  switch (e) {
    case "low":
      return "Quick, straightforward implementation with minimal overhead";
    case "medium":
      return "Balanced approach with standard implementation and testing";
    case "high":
      return "Comprehensive implementation with extensive testing and documentation";
    case "xhigh":
      return `Deeper reasoning than high, just below maximum (${XHIGH_CAPABLE_MODELS_LABEL})`;
    case "max":
      return `Maximum capability with deepest reasoning. ${MAX_EFFORT_WARNING}`;
  }
}
function getEffortLevelDescription(e) {
  if (typeof e === "string") {
    let t = te(e);
    if (e === "high" && isProSubscriber() && getFeatureValue_CACHED_MAY_BE_STALE("tengu_slate_finch", !1))
      return `${t} \xB7 burns fastest \u2014 medium handles most tasks`;
    return t;
  }
  return "Balanced approach with standard implementation and testing";
}
function D(e) {
  return getOrgDefaultEffortLevelForModel(e) ?? ne(e) ?? oe(e);
}
function ne(e) {
  let t = getModelDefaultEffort(e, getCanonicalName(e));
  return t !== void 0 && isValidEffortLevel(t) ? t : void 0;
}
function oe(e) {
  return getCatalogEntryById(getCanonicalName(e))?.default_effort ?? "high";
}
function A(e) {
  return coerceEffortLevelValue(e) ?? resolveUltracodeEffortLevel(e);
}
function I(e) {
  let t = A(e.cli.effort);
  if (t !== void 0) return t;
  if (e.settings.ultracode === !0) return "xhigh";
  return toPersistableEffortLevel(e.settings.effortLevel);
}
function Y() {
  let { value: e, source: t } = getFeatureValueWithSource_CACHED_MAY_BE_STALE("tengu_auto_mode_config", {});
  if (e?.enabled !== "disabled") return !1;
  return t === "override" || t === "payload";
}
function resolvePermissionModeFromInputs(e) {
  let { cli: t, env: o, settings: r, agentFrontmatter: u } = e,
    d = normalizePermissionModeAlias(t.permissionMode),
    s = normalizePermissionModeAlias(t.inheritPermissionMode),
    l = t.dangerouslySkipPermissions,
    p = u?.permissionMode,
    E = Boolean(l || d || p);
  if (Ie(o.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) {
    let f =
        l ||
        (d && d !== "default") ||
        (s && s !== "default") ||
        (p && p !== "default"),
      L =
        "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " +
        "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    return {
      mode: "default",
      notification: f ? L : void 0,
      fromAutoFallback: !1,
      baselineMode: "default",
      decidedByProactivityLevel: !1,
      modeSuppliedOnInvocation: !0,
    };
  }
  let v = r.permissions?.disableBypassPermissionsMode === "disable",
    g = Y(),
    m = !g && !J(r),
    c = [],
    y,
    _ = s
      ? j(
          s,
          g,
          "inherited auto mode dropped \u2014 auto mode killswitch active (override- or payload-served)",
        )
      : void 0,
    b = s ? (_?.mode ?? parsePermissionModeOrDefault(s)) : void 0;
  if (l)
    if (O("bypassPermissions")) ((y = x), c.push("default"));
    else c.push("bypassPermissions");
  if (d) {
    let f = j(
      d,
      g,
      "auto mode killswitch active (override- or payload-served) \u2014 falling back to default",
    );
    if (f) {
      if (f.unconsented) y = x;
      c.push(f.mode);
    }
  }
  if (p)
    if (p === "auto" && g)
      logForDebugging(
        "agent frontmatter requested auto mode but circuit breaker active \u2014 falling through",
        { level: "warn" },
      );
    else if (b && clampPermissionMode(p, b) === void 0)
      (logForDebugging(
        `agent frontmatter permissionMode "${p}" ignored \u2014 it would widen the agent view's inherited mode (effective "${b}"), and the dispatched agent name is repo-controllable (settings \`agent\`)`,
        { level: "warn" },
      ),
        logEvent("tengu_agent_frontmatter_mode_widening_carry_ignored", {}));
    else c.push(p);
  if (isVsCodeExtensionSession()) {
    let f = !isAutoDefaultLaunchEnabled()
      ? void 0
      : T()
          .map((L) => normalizePermissionModeAlias(getSettingsForSource(L)?.permissions?.defaultMode))
          .find((L) => L != null);
    if (f != null && Ie(o.CLAUDE_CODE_REMOTE) && !w(f)) {
      if (
        (logForDebugging(
          `settings defaultMode "${f}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`,
          { level: "warn" },
        ),
        c.length === 0)
      )
        (logEvent("tengu_ccr_unsupported_default_mode_ignored", { mode_hash: hashForTelemetry(f) }),
          c.push("default"));
    } else if (f === "bypassPermissions") {
      if (l || t.allowDangerouslySkipPermissions) c.push(f);
      else if (c.length === 0)
        ((y =
          'Permission mode bypassPermissions from settings was ignored \u2014 enable the "Claude Code: Allow Dangerously Skip Permissions" setting in VS Code to consent to it'),
          logForDebugging(
            'settings defaultMode "bypassPermissions" ignored for a VS Code-owned session without the allow-bypass setting',
            { level: "warn" },
          ),
          logEvent("tengu_settings_bypass_unconsented_noninteractive_ignored", {}),
          process.stderr.write(`\u26A0 ${y}
`),
          c.push("default"));
    } else if (f === "auto")
      if (!g) c.push(f);
      else
        logForDebugging(
          'settings defaultMode "auto" ignored for the IDE session \u2014 auto-mode circuit breaker is active',
          { level: "warn" },
        );
    else if (f != null) c.push(f);
  } else if (r.permissions?.defaultMode) {
    let f = normalizePermissionModeAlias(r.permissions.defaultMode);
    if (Ie(o.CLAUDE_CODE_REMOTE) && !w(f))
      (logForDebugging(
        `settings defaultMode "${f}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`,
        { level: "warn" },
      ),
        logEvent("tengu_ccr_unsupported_default_mode_ignored", { mode_hash: hashForTelemetry(f) }));
    else if (f === "bypassPermissions")
      if (!C("bypassPermissions")) {
        if (
          (logForDebugging(
            'settings defaultMode "bypassPermissions" ignored \u2014 only policy/user/flag settings may grant bypass mode (projectSettings and localSettings are repo-controllable)',
            { level: "warn" },
          ),
          logEvent("tengu_settings_bypass_mode_untrusted_source_ignored", {}),
          !s)
        )
          c.push("default");
      } else if (O("bypassPermissions")) {
        if (c.length === 0) y = x;
        c.push("default");
      } else c.push(f);
    else if (f !== "auto")
      if (b && !C(f) && clampPermissionMode(f, b) === void 0)
        (logForDebugging(
          `settings defaultMode "${f}" ignored \u2014 it would widen the agent view's inherited mode (effective "${b}"), and only policy/user/flag settings may do that (projectSettings and localSettings are repo-controllable)`,
          { level: "warn" },
        ),
          logEvent("tengu_settings_mode_widening_carry_ignored", {}));
      else c.push(f);
    else if (!C("auto"))
      (logForDebugging(
        'settings defaultMode "auto" ignored \u2014 only policy/user/flag settings may grant auto mode (projectSettings and localSettings are repo-controllable)',
        { level: "warn" },
      ),
        logEvent("tengu_settings_auto_mode_untrusted_source_ignored", {}));
    else if (g)
      logForDebugging(
        "auto mode killswitch active (override- or payload-served) \u2014 falling back to default",
        { level: "warn" },
      );
    else c.push("auto");
  }
  if (s) {
    let f = _;
    if (f) {
      if (f.unconsented && c.length === 0) y = x;
      c.push(f.mode);
    }
  }
  let S;
  for (let f of c) {
    if (f === "bypassPermissions" && v) {
      (logForDebugging("bypassPermissions mode is disabled by settings", { level: "warn" }),
        (y = "Bypass permissions mode was disabled by settings"));
      continue;
    }
    S = { mode: f, notification: y };
    break;
  }
  let h = !1;
  if (!S) {
    let f = "default";
    if (
      m &&
      isAutoDefaultLaunchEnabled() &&
      (!t.isNonInteractiveSession || isVsCodeExtensionSession() || getFeatureValue_CACHED_MAY_BE_STALE("tengu_moss_anchor", !1))
    )
      ((f = "auto"), (h = !0));
    S = { mode: f, notification: y };
  }
  let F = S.mode,
    R = !1;
  return {
    mode: S.mode,
    notification: S.notification,
    fromAutoFallback: h,
    baselineMode: F,
    decidedByProactivityLevel: R,
    modeSuppliedOnInvocation: E,
  };
}
function resolveFallbackModels(e) {
  let t =
    e.cli.fallbackModel?.split(",") ??
    (Array.isArray(e.settings.fallbackModel)
      ? e.settings.fallbackModel
      : void 0);
  if (t === void 0) return;
  let o = new Set(),
    r = [];
  for (let u of t) {
    let d = typeof u === "string" ? u.trim() : "";
    if (d === "") continue;
    let s = parseUserSpecifiedModel(d === "default" ? getDefaultMainLoopModel() : d);
    if (o.has(s)) continue;
    if (!isModelAllowed(s)) continue;
    if ((o.add(s), r.push(s), r.length === ie)) break;
  }
  return r.length > 0 ? r : void 0;
}
var ie = 3;
function se(e) {
  switch (e) {
    case "userSettings":
      return "user_settings";
    case "projectSettings":
      return "project_settings";
    case "localSettings":
      return "local_settings";
    case "flagSettings":
      return "flag_settings";
    case "policySettings":
      return "policy_settings";
    case null:
      return "settings";
  }
}
function fe(e, t, o) {
  if (isActiveCatalogFromServer()) {
    let g = getOrgDefaultModelUpdatedAt();
    if (
      g !== null &&
      !t &&
      gae().includes("userSettings") &&
      new Date(g).getTime() >
        new Date(getGlobalConfig().lastSeenOrgDefaultUpdatedAt ?? 0).getTime()
    )
      saveGlobalConfig(
        (c) =>
          c.lastSeenOrgDefaultUpdatedAt === g
            ? c
            : { ...c, lastSeenOrgDefaultUpdatedAt: g },
        o,
      );
    if (getOrgLockedDefaultModel() === null) return e;
    let m = e ? getEffectiveSettingSource("model") : null;
    if (m === "policySettings" || m === "flagSettings") return e;
    return;
  }
  let r = getApplicableOrgDefaultModel();
  if (!r || getBootstrapOrgDefaultEffect() === null) return e;
  let u = e ? getEffectiveSettingSource("model") : null;
  if (u === "policySettings" || u === "flagSettings") return e;
  let d = gae().includes("userSettings"),
    s = getGlobalConfig().lastSeenOrgDefaultUpdatedAt,
    l = new Date(r.updated_at).getTime() > new Date(s ?? 0).getTime(),
    p = l && !t && d,
    E = () =>
      saveGlobalConfig(
        (g) =>
          g.lastSeenOrgDefaultUpdatedAt === r.updated_at
            ? g
            : { ...g, lastSeenOrgDefaultUpdatedAt: r.updated_at },
        o,
      );
  if (r.override_user_selection) {
    if (p) E();
    return;
  }
  if (t) return e;
  let v = d ? getSettingsForSource("userSettings")?.model : void 0;
  if (l && v) {
    if (
      (updateSettingsForSource("userSettings", { model: void 0 }, void 0, o).then((g) => {
        if (!g.error) E();
      }),
      u === "userSettings")
    )
      return;
  } else if (p) E();
  return e;
}
function resolveInitialModelSelection(e, t) {
  let { cli: o, env: r, settings: u, agentFrontmatter: d } = e,
    s = o.model === "default" ? getDefaultMainLoopModel() : o.model,
    l = s,
    p = null;
  if (s) p = o.model === "default" ? "cli_default" : "cli";
  let E = d?.model,
    v;
  if (!s && E && E !== "inherit")
    ((v = E),
      (s = parseUserSpecifiedModel(E)),
      (l = E),
      (p =
        d?.modelSource === "routine"
          ? "routine_frontmatter"
          : "agent_frontmatter"));
  let g = !1,
    m = s;
  if (m === void 0) {
    if (r.ANTHROPIC_MODEL) ((m = r.ANTHROPIC_MODEL), (p = "env"));
    else if (
      ((m =
        fe(u.model || void 0, o.isNonInteractiveSession === !0, t) || void 0),
      m !== void 0)
    )
      p = se(getEffectiveSettingSource("model"));
    l = m;
  }
  let c;
  if (m && !isModelAllowed(m)) {
    let S = v !== void 0 && !g ? v : m,
      h = g ? null : stepDownRestrictedFamilyAliasPick(S);
    if (h !== null) {
      if (((c = S), (m = h), s !== void 0)) s = h;
    } else {
      if (!(S.trim().toLowerCase() === "default" || isWindowSilentDefaultPick(S)) && !g) c = S;
      ((m = void 0), (l = void 0), (p = null), (s = void 0));
    }
  }
  let y;
  if (m && isUnservedFamilySpelling(m))
    ((y = m), (m = void 0), (l = void 0), (p = null), (s = void 0));
  let _ = m || null,
    b = parseUserSpecifiedModel(_ ?? getDefaultMainLoopModel());
  return {
    effectiveModel: s,
    initialMainLoopModel: _,
    resolvedInitialModel: b,
    rawModelRequest: l || null,
    restrictedModel: c,
    unservedFamilySpelling: y,
    settingLayer: p,
  };
}
function resolveEffectiveSystemPrompts(e) {
  let t = e.cli.systemPrompt,
    o = e.cli.appendSystemPrompt,
    r = getPolicyHelperAppendSystemPrompt();
  if (r)
    o = o
      ? `${o}

${r}`
      : r;
  return { systemPrompt: t, appendSystemPrompt: o };
}
function isAutoDefaultLaunchEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_harbor_willow", !1) || getCachedClientDataStrict()?.meadow_lantern === !0;
}
var de = ["policySettings", "flagSettings", "userSettings"],
  ae = ["acceptEdits", "plan", "default", "auto"];
function w(e) {
  return ae.includes(e);
}
function T() {
  return de.filter(isSettingsSourceEnabled);
}
function C(e) {
  return T().some((t) => getSettingsForSource(t)?.permissions?.defaultMode === e);
}
function J(e) {
  return (
    e.permissions?.disableAutoMode === "disable" ||
    e.disableAutoMode === "disable"
  );
}
function isAutoModeSeedable(e) {
  return !J(e) && !Y();
}
function isTrustedPlanModeDisplaced(e) {
  return (
    T()
      .map((o) => normalizePermissionModeAlias(getSettingsForSource(o)?.permissions?.defaultMode))
      .find((o) => o != null) === "plan" &&
    normalizePermissionModeAlias(e.permissions?.defaultMode) !== "plan"
  );
}
function ue(e) {
  let t = normalizePermissionModeAlias(e.permissions?.defaultMode);
  if (t == null || !w(t)) return;
  if (t !== "auto") return t;
  return C("auto") && isAutoModeSeedable(e) ? "auto" : void 0;
}
function buildPermissionModeSeed({
  gateOn: e,
  permissionModeTyped: t,
  dangerouslySkipPermissions: o,
  scrubbed: r,
  settings: u,
  effort: d,
}) {
  let s = !t && !o && !r,
    l = s ? ue(u) : void 0;
  return {
    considered: e && s,
    settingsDefaultModePresent: u.permissions?.defaultMode != null,
    settingsDefault: l,
    permissionMode: e ? l : void 0,
    effort: e ? d : void 0,
  };
}
function resolveSessionStartPermissionMode({ sentMode: e, repositorySettings: t }) {
  if (e === "auto") return;
  if (e !== void 0) return e;
  let o = k(t?.permissions?.defaultMode);
  return o !== void 0 && o !== "auto" && w(o) ? o : "default";
}
function buildSettingsKeptNotice({ seed: e, settingsMode: t, sentMode: o, startsIn: r }) {
  if (
    !e.considered ||
    !e.settingsDefaultModePresent ||
    e.permissionMode !== void 0 ||
    t === void 0 ||
    (o !== void 0 && k(t) === o)
  )
    return null;
  let u =
    k(t) === "auto"
      ? "auto mode could not be requested from this machine (it is off here, or only the repository asked for it)"
      : "not a mode a cloud session can start in";
  return {
    text: `Settings kept on this machine: the default permission mode in your settings (${t}) \u2014 ${u}${r !== void 0 ? `; the session starts in ${r} mode` : ""}`,
    level: "info",
  };
}
function k(e) {
  return e === void 0 ? void 0 : parsePermissionMode(e);
}
var x =
  "Permission mode downgraded to default \u2014 bypass requires accepting the disclaimer interactively first";
function O(e) {
  if (!isBgSession()) return !1;
  if (e === "bypassPermissions")
    return !hasVouchedSkipDangerousModePermissionPrompt() && !getGlobalConfig().bypassPermissionsModeAccepted;
  return !1;
}
function j(e, t, o) {
  let r = parsePermissionModeOrDefault(e);
  if (O(r)) return { mode: "default", unconsented: !0 };
  if (r === "auto" && t) {
    logForDebugging(o, { level: "warn" });
    return;
  }
  return { mode: r };
}
export {
  hasFable5Mitigations,
  hasFable51PromptBundle,
  isFableFamilyModel,
  isMythosFamilyModel,
  o4t,
  resolvePermissionModeForProactivityLevel,
  resolvePermissionModeFromInputs,
  resolveFallbackModels,
  resolveInitialModelSelection,
  resolveEffectiveSystemPrompts,
  isAutoDefaultLaunchEnabled,
  isAutoModeSeedable,
  isTrustedPlanModeDisplaced,
  buildPermissionModeSeed,
  resolveSessionStartPermissionMode,
  buildSettingsKeptNotice,
  EFFORT_LEVELS,
  XHIGH_CAPABLE_MODELS_LABEL,
  MAX_CAPABLE_MODELS_LABEL,
  MAX_EFFORT_WARNING,
  modelSupportsEffort,
  modelSupportsMaxEffort,
  modelSupportsXHighEffort,
  modelSupportsUltracode,
  getUltracodeFallbackEffort,
  isUltracodeActive,
  isValidEffortLevel,
  HIGH_EFFORT_LEVEL,
  isAboveHighEffort,
  modelCapsEffortWhenThinkingDisabled,
  getOrgMaxEffortLevelForModel,
  getOrgDefaultEffortLevelForModel,
  isEffortAllowedByOrg,
  getAllowedEffortLevels,
  clampEffortToOrgLimit,
  isEffortCappedByOrg,
  getOrgEffortCapWarning,
  normalizeUltracodeAlias,
  resolveUltracodeEffortLevel,
  formatEffortLevel,
  parseEffortLevelAlias,
  parseEffortArgValue,
  coerceEffortLevelValue,
  toPersistableEffortLevel,
  isUltracodeRequestedAtStartup,
  getEnvEffortLevelOverride,
  isLaunchEffortPinned,
  createEffortLevel,
  createEffortLevelOrDefault,
  isSameEffortSelection,
  getModelSettingsKey,
  getSessionEffortLevel,
  getCarriableEffortLevel,
  unpinLaunchEffortLevels,
  releaseLaunchEffortPins,
  resolveModelEffortLevel,
  resolveEffortLevelForRemoteSession,
  getDefaultEffortLevelForModel,
  shouldConfirmEffortChangeOnWarmCache,
  saveEffortLevelForModel,
  applyEffortLevelChange,
  buildInitialEffortState,
  getModelEffortLevelOrDefault,
  getModelEffortLevelIfSupported,
  formatEffortSuffix,
  sanitizeEffortLevel,
  getEffortLevelDescription,
};
