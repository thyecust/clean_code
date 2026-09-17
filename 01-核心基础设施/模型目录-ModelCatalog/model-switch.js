// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { jc, Cz } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { ALLOWED_OAUTH_BASE_URLS } from "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { Lt, xu, xae, Hae, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { chalk } from "../ANSI-样式-布局原语/chalk-ansi.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  getProviderState,
  getEffectiveModelStrings,
  isFastModeEnabled,
  modelSupportsFastMode,
  resolveFastModeForModel,
  logFastModeToggled,
  clearFastModeCooldown,
  collectUnentitledModelNames,
  isModelDenied,
  getModelEntitlementDenySet,
  isModelAllowed,
  isOpus1mContextAvailable,
  isSonnet1mContextAvailable,
  formatUnrecognizedModelNotice,
  isPinnedFableModel,
  isFableFamilyOrPinnedModel,
  getModelUnavailabilityReason,
  getDefaultOpusModel,
  isModeDependentModelSetting,
  stepDownRestrictedFamilyAliasPick,
  getDefaultMainLoopModelSetting,
  getOrgLockedDefaultModel,
  getDefaultMainLoopModel,
  getCanonicalName,
  renderDefaultModelSetting,
  isOpus1mMergeEnabled,
  renderModelSetting,
  getCuratedModelPicker,
  parseUserSpecifiedModel,
  hasLongContextSuffix,
  modelHasNative1MContext,
  isClaudeAISubscriber,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getRelativeSettingsFilePathForSource } from "../设置-配置/设置-配置.aqbb35ee.js";
import { getSettingsForSource, getEffectiveSettingSource, updateSettingsForSource } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { MODEL_ALIASES, isModelAlias, stripLongContextTags, kP, getCatalogEntryById, MODEL_KEY_BY_FIRST_PARTY_ID, getAPIProvider, usesFirstPartyModelIds, isFirstPartyAnthropicBaseUrl } from "./模型目录-ModelCatalog.3msq3jt8.js";
import {
  isFableUsageCreditsRequired,
  isUsageCreditsExempt,
  isCreditsOnlyTierSubscription,
  isFableBlockedByUsageCredits,
  isFableBlockedByCreditsOrOverage,
  isModelUsableInPicker,
  getLatchedFallbackModelInfo,
  formatAutoSwitchedModelNote,
  getSessionModelOverride,
  getEffectiveSessionModel,
  resolveModelForPermissionMode,
  getConfiguredSessionModel,
  getActiveModelForState,
  runPreModelSwitchHooks,
  recordModelSwitchIfChanged,
  formatInlineCode,
  SET_MODEL_PREFIX,
  CURRENT_MODEL_PREFIX,
  sideQuery,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { sanitizeUntrustedText, truncateToTextLimit, replaceLineBreaks } from "../../02-功能模块/策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { modelSupportsUltracode, getUltracodeFallbackEffort, getSessionEffortLevel } from "../../02-功能模块/权限系统/chunk-t3b7pg2x.js";
import { fetchBootstrapData } from "../../02-功能模块/上下文压缩-Compact/chunk-npckj9cm.js";
function b(e, t, n) {
  if (!isClaudeAISubscriber()) return !1;
  let o = e !== null ? parseUserSpecifiedModel(e) : getDefaultMainLoopModel(),
    r = o.toLowerCase(),
    i = r.includes("opus") || r.includes("fable"),
    s = r.includes("opus-4-6"),
    u = r.includes("sonnet-4-6");
  if (t && modelSupportsFastMode(e)) return !0;
  if ((r.includes("fable") || isPinnedFableModel(o)) && !isUsageCreditsExempt() && (isFableUsageCreditsRequired() || isCreditsOnlyTierSubscription())) return !0;
  if (!hasLongContextSuffix(r)) return !1;
  if (i && n) return !1;
  return s || u;
}
function formatFastModeChangeNote(e, t, n, o) {
  let r = isFastModeEnabled(),
    i = r && t && (!e || o?.announceKeptOn === !0),
    s = r && !!e && !t;
  return (
    (i ? " \xB7 Fast mode ON" : "") +
    (b(n, t, isOpus1mMergeEnabled()) ? " \xB7 Draws from usage credits" : "") +
    (s ? " \xB7 Fast mode OFF" : "")
  );
}
function formatFastModeToggledNote(e, t, n) {
  if (!!e === t) return null;
  return t
    ? `Fast mode ON${b(n, !0, isOpus1mMergeEnabled()) ? " \xB7 Draws from usage credits" : ""}`
    : "Fast mode OFF";
}
function k() {
  return getProviderState().providerCache.validatedModels;
}
async function validateModelAvailability(e, t) {
  let n = e.trim();
  if (!n) return { valid: !1, error: "Model name cannot be empty" };
  if (
    !isModelAllowed(
      n,
      t.skipEntitlementDenyOverlay
        ? { skipEntitlementDenyOverlay: !0 }
        : void 0,
    )
  )
    return {
      valid: !1,
      error: `Model '${n}' is not in the list of available models`,
    };
  if (!t.forceServerProbe) {
    let d = n.toLowerCase();
    if (MODEL_ALIASES.includes(d)) return { valid: !0 };
    if (n === a.ANTHROPIC_CUSTOM_MODEL_OPTION) return { valid: !0 };
    if (isModelUsableInPicker(n) && getCuratedModelPicker()?.picker.options.some((c) => c.model.trim() === n))
      return { valid: !0 };
    if (k().has(n)) return { valid: !0 };
  }
  let o = getAPIProvider(),
    r = a.ANTHROPIC_BASE_URL,
    i = r && URL.canParse(r) ? new URL(r).hostname : void 0,
    s =
      isFirstPartyAnthropicBaseUrl() ||
      (i !== void 0 &&
        (i === "anthropic.com" ||
          i.endsWith(".anthropic.com") ||
          ALLOWED_OAUTH_BASE_URLS.some((d) => new URL(d).hostname === i)));
  if (
    !(o === "gateway" || (o === "firstParty" && !s)) &&
    /[\s\p{Cc}\p{Cf}]/u.test(n)
  )
    return { valid: !1, error: `Model '${n}' not found`, notFound: !0 };
  try {
    return (
      await sideQuery({
        model: n,
        max_tokens: 1,
        maxRetries: 0,
        querySource: "model_validation",
        credentials: t.credentials,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Hi",
                cache_control: { type: "ephemeral" },
              },
            ],
          },
        ],
      }),
      k().add(n),
      { valid: !0 }
    );
  } catch (d) {
    return O(d, n);
  }
}
function O(e, t) {
  if (e instanceof Hae) {
    let o = P(t),
      r = o ? `. Try '${o}' instead` : "";
    return { valid: !1, error: `Model '${t}' not found${r}`, notFound: !0 };
  }
  if (e instanceof Lt) {
    if (e instanceof xae)
      return {
        valid: !1,
        error: "Authentication failed. Please check your API credentials.",
      };
    if (e instanceof xu)
      return {
        valid: !1,
        error: "Network error. Please check your internet connection.",
      };
    let o = e.error;
    if (
      o &&
      typeof o === "object" &&
      "type" in o &&
      o.type === "not_found_error" &&
      "message" in o &&
      typeof o.message === "string" &&
      o.message.includes("model:")
    )
      return { valid: !1, error: `Model '${t}' not found`, notFound: !0 };
    return { valid: !1, error: `API error: ${e.message}` };
  }
  return {
    valid: !1,
    error: `Unable to validate model: ${e instanceof Error ? e.message : String(e)}`,
  };
}
var w = ["fable", "opus", "sonnet"];
function C(e, t) {
  let n = e.split("-").map(Number),
    o = t.split("-").map(Number);
  for (let r = 0; r < Math.max(n.length, o.length); r++) {
    let i = (o[r] ?? -1) - (n[r] ?? -1);
    if (i !== 0) return i;
  }
  return 0;
}
function E() {
  return kP()
    .models.filter((e) => e.fallback_3p !== void 0)
    .sort((e, t) => {
      let n = (r) => {
          let i = w.indexOf(r);
          return i === -1 ? w.length : i;
        },
        o = (r, i) =>
          r
            .replace(/^claude-/, "")
            .replace(i, "")
            .replace(/^-|-$/g, "");
      return (
        n(e.family) - n(t.family) ||
        (e.family < t.family ? -1 : e.family > t.family ? 1 : 0) ||
        C(o(e.id, e.family), o(t.id, t.family))
      );
    })
    .map((e) => {
      let t = e.id.replace(/^claude-/, "");
      return {
        needle: t,
        needleUnderscore: t.replace(/-/g, "_"),
        fallbackId: e.fallback_3p,
        family: e.family,
      };
    });
}
function F(e) {
  let t = getCatalogEntryById(e)?.provider_ids.first_party,
    n = t !== void 0 ? MODEL_KEY_BY_FIRST_PARTY_ID[t] : void 0;
  return n !== void 0 ? getEffectiveModelStrings()[n] : void 0;
}
function P(e) {
  if (usesFirstPartyModelIds()) return;
  let t = e.toLowerCase(),
    n = E().find((o) => t.includes(o.needle) || t.includes(o.needleUnderscore));
  if (n === void 0) return;
  if (n.family === "fable" && getCatalogEntryById(n.fallbackId)?.family === "opus")
    return a.ANTHROPIC_DEFAULT_OPUS_MODEL ?? F(n.fallbackId);
  return F(n.fallbackId);
}
async function x(e, t) {
  let { saveGlobalConfig: n } = await import("../设置-配置/getCurrentProjectConfig.s8843fs9.js");
  await n((o) => {
    let r = o.modelAccessCache;
    if (!r?.length) return o;
    let i = r.filter((s) => {
      if (
        s == null ||
        typeof s !== "object" ||
        typeof s.apiName !== "string" ||
        typeof s.entitled !== "boolean"
      )
        return !0;
      return s.entitled || !isModelDenied(e, collectUnentitledModelNames([s]));
    });
    return i.length === r.length ? o : { ...o, modelAccessCache: i };
  }, t);
}
async function resolveModelSwitchTarget(e, t, n) {
  let o = e === "default" ? null : e,
    r;
  if (o && isModelDenied(o, getModelEntitlementDenySet())) {
    let i = stepDownRestrictedFamilyAliasPick(o);
    if (i === null) {
      if (!isModelAllowed(o, { skipEntitlementDenyOverlay: !0 }))
        return (
          logFeatureBad("model_switch", "denied_by_entitlement"),
          {
            ok: !1,
            message: `Model '${o}' is restricted by your organization's settings. Run /model to choose a different model.`,
          }
        );
      let s = await validateModelAvailability(v(o) ? parseUserSpecifiedModel(o) : o, {
        forceServerProbe: !0,
        skipEntitlementDenyOverlay: !0,
        credentials: n,
      });
      if (!s.valid)
        return (
          logFeatureBad(
            "model_switch",
            s.notFound ? "denied_by_entitlement" : "entitlement_probe_failed",
          ),
          {
            ok: !1,
            message: `Model '${o}' is restricted by your organization's settings. Run /model to choose a different model.`,
          }
        );
      (await x(o, t), fetchBootstrapData(t, n));
    } else ((r = o), (o = i));
  } else if (o && !isModelAllowed(o)) {
    let i = stepDownRestrictedFamilyAliasPick(o);
    if (i === null)
      return (
        logFeatureBad("model_switch", "not_allowed"),
        {
          ok: !1,
          message: `Model '${o}' is not available. Your organization restricts model selection.`,
        }
      );
    ((r = o), (o = i));
  }
  if (o && isOpus1mModelUnavailable(o))
    return (
      logFeatureBad("model_switch", "opus_1m_unavailable"),
      {
        ok: !1,
        message:
          "Opus with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
      }
    );
  if (o && isSonnet1mModelUnavailable(o))
    return (
      logFeatureBad("model_switch", "sonnet_1m_unavailable"),
      {
        ok: !1,
        message:
          "Sonnet with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
      }
    );
  if (o) {
    let i = getModelUnavailabilityReason(o);
    if (i)
      switch (i.reason) {
        case "disabled":
          if (i.notOffered)
            return (
              logFeatureBad("model_switch", "not_offered"),
              { ok: !1, message: formatUnrecognizedModelNotice(o) }
            );
          return (
            logFeatureBad("model_switch", "disabled_by_org"),
            {
              ok: !1,
              message: `Model '${o}' is not currently available for your account${i.description ? `. ${i.description}` : "."}`,
            }
          );
        case "absent": {
          let s = await validateModelAvailability(v(o) ? parseUserSpecifiedModel(o) : o, {
            forceServerProbe: !0,
            credentials: n,
          });
          if (!s.valid)
            return (
              logFeatureBad(
                "model_switch",
                s.notFound ? "fable_unavailable" : "fable_probe_failed",
              ),
              {
                ok: !1,
                message: s.notFound
                  ? `${i.displayName} isn't available for your account yet. Run /model to pick another model.`
                  : s.error,
              }
            );
          return (
            fetchBootstrapData(t, n),
            { ok: !0, model: o, ...(r !== void 0 && { substitutedFrom: r }) }
          );
        }
      }
  }
  if (!o || v(o)) return { ok: !0, model: o };
  try {
    let i = await validateModelAvailability(o, { credentials: n });
    if (!i.valid)
      return (logFeatureBad("model_switch", "invalid_model"), { ok: !1, message: i.error });
    return { ok: !0, model: o, ...(r !== void 0 && { substitutedFrom: r }) };
  } catch (i) {
    return (
      logFeatureBad("model_switch", "validate_exception"),
      { ok: !1, message: `Failed to validate model: ${l(i)}` }
    );
  }
}
async function resolvePreModelSwitchDecision(e, t, n, o, r = {}) {
  let i = t(),
    s = getActiveModelForState(i),
    u = L(i, n);
  if (u.length === 0)
    return { decision: "proceed", skipConfirm: !1, messages: [] };
  let d = [],
    c,
    m = !1,
    p = !0;
  for (let S of u) {
    let M = await runPreModelSwitchHooks(
      e,
      { ...S, requestedModel: n, source: o },
      { signal: r.signal },
    );
    if ((d.push(...M.messages), M.decision === "block"))
      return { decision: "block", reason: M.reason, messages: d };
    if (M.decision === "ask") ((m = !0), (c ??= M.reason));
    else p = p && M.skipConfirm;
  }
  if (getActiveModelForState(t()) !== s) {
    if (r.revalidating)
      return {
        decision: "block",
        reason:
          "the session model changed while a PreModelSwitch hook was running; pick again",
        messages: d,
      };
    let S = await resolvePreModelSwitchDecision(e, t, n, o, { ...r, revalidating: !0 });
    return { ...S, messages: [...d, ...S.messages] };
  }
  return m
    ? { decision: "ask", reason: c, messages: d }
    : { decision: "proceed", skipConfirm: p, messages: d };
}
function L(e, t) {
  let n = getConfiguredSessionModel(e),
    o = e.toolPermissionContext.mode,
    r = [o, o === "plan" ? "default" : "plan"],
    i = new Set(),
    s = [];
  for (let u of r) {
    let d = resolveModelForPermissionMode(n, u),
      c = resolveModelForPermissionMode(t, u),
      m = `${d}\x00${c}`;
    if (d !== c && !i.has(m)) (i.add(m), s.push({ fromModel: d, toModel: c }));
  }
  return s;
}
function formatModelSwitchBlockedNotice(e) {
  return [
    `Model switch blocked by a PreModelSwitch hook${e.reason !== void 0 ? `: ${toSingleLineDisplayText(e.reason)}` : e.decision === "ask" ? ": confirmation required, and this session cannot ask" : ""}`,
    ...e.messages.map(toSingleLineDisplayText),
  ].join(`
`);
}
function toSingleLineDisplayText(e) {
  return replaceLineBreaks(sanitizeUntrustedText(truncateToTextLimit(e.trimEnd())));
}
function formatModelSwitchBlockedError(e, t, n) {
  return [
    `Model switch to ${formatModelDisplayName(e)} was blocked by a PreModelSwitch hook${t ? `: ${toSingleLineDisplayText(t)}` : ""}`,
    ...n.map(toSingleLineDisplayText),
  ].join(`
`);
}
function applyModelSwitch(e, t, n, o, r, i, s, u) {
  let d = n().fastMode;
  if (
    (Cz(),
    recordModelSwitchIfChanged(e, n(), t, i),
    o((p) => ({ ...p, mainLoopModel: t, mainLoopModelForSession: null })),
    r)
  )
    saveModelAsUserDefault(t, u);
  if (s !== void 0) logFeatureSad("model_switch", "family_alias_stepped_down");
  else logFeatureOk("model_switch");
  let c = `${SET_MODEL_PREFIX}${formatInlineCode(formatModelDisplayName(t))}${r ? " and saved as your default for new sessions" : " for this session only"}`,
    m = isFastModeEnabled() ? resolveFastModeForModel(t, d) : !!d;
  if (isFastModeEnabled()) {
    if ((clearFastModeCooldown(), m !== !!d)) (o((p) => ({ ...p, fastMode: m })), logFastModeToggled(d, m));
  }
  return ((c += formatFastModeChangeNote(d, m, t, { announceKeptOn: !0 })), (c += formatPinnedModelSettingNote(t)), c);
}
function saveModelAsUserDefault(e, t) {
  (updateSettingsForSource("userSettings", { model: e ?? void 0 }, void 0, t),
    logFeatureOk("model_set_default"));
}
function formatPinnedModelSettingNote(e) {
  let t = getEffectiveSettingSource("model");
  if (
    t !== "projectSettings" &&
    t !== "localSettings" &&
    t !== "policySettings"
  ) {
    let r = getOrgLockedDefaultModel();
    if (
      r !== null &&
      e !== null &&
      t !== "flagSettings" &&
      !a.ANTHROPIC_MODEL
    ) {
      let i = parseUserSpecifiedModel(e),
        s = parseUserSpecifiedModel(r.model),
        u = getCanonicalName(s, { identity: !0 }),
        d = getCanonicalName(i, { identity: !0 }),
        c = /\[1m\]$/i.test(i) !== /\[1m\]$/i.test(s);
      if (isModeDependentModelSetting(e) || d !== u || c) return _(r);
    }
    return "";
  }
  if (t !== "policySettings") {
    let r = getOrgLockedDefaultModel();
    if (r !== null && !a.ANTHROPIC_MODEL) {
      if (e === null) return "";
      let i = parseUserSpecifiedModel(e),
        s = parseUserSpecifiedModel(r.model),
        u = getCanonicalName(s, { identity: !0 }),
        d = getCanonicalName(i, { identity: !0 }),
        c = /\[1m\]$/i.test(i) !== /\[1m\]$/i.test(s);
      if (isModeDependentModelSetting(e) || d !== u || c) return _(r);
      return "";
    }
  }
  let n = getSettingsForSource(t)?.model;
  if (n === void 0 || e === n) return "";
  let o = t === "policySettings" ? "Managed settings" : getRelativeSettingsFilePathForSource(t);
  return h(`${o} pins `, renderModelSetting(n), " \u2014 that applies on restart");
}
function h(e, t, n) {
  return `${chalk.dim(`
     ${e}`)}${formatInlineCode(t)}${chalk.dim(n)}`;
}
function _(e) {
  let t = renderModelSetting(e.model);
  switch (e.kind) {
    case "org":
      return h("Your organization's default (", t, ") applies on restart");
    case "standard":
      return h(
        "Your organization's default model isn't available in this build, so the standard default (",
        t,
        ") applies on restart",
      );
  }
}
function v(e) {
  let t = e.toLowerCase().trim();
  return isModelAlias(t);
}
function isOpus1mModelUnavailable(e) {
  let t = e.toLowerCase();
  if (!(t.includes("opus") && t.includes("[1m]"))) return !1;
  if ((t.includes("opusplan") ? [getDefaultOpusModel(), parseUserSpecifiedModel(e)] : [parseUserSpecifiedModel(e)]).every((o) => modelHasNative1MContext(o)))
    return !1;
  return !isOpus1mContextAvailable() && !isOpus1mMergeEnabled();
}
function isSonnet1mModelUnavailable(e) {
  let t = e.toLowerCase();
  if (!(
    t.includes("sonnet[1m]") ||
    t.includes("sonnet-4-6[1m]") ||
    t.includes("sonnet-5[1m]")
  ))
    return !1;
  if (modelHasNative1MContext(parseUserSpecifiedModel(e))) return !1;
  return !isSonnet1mContextAvailable();
}
function formatModelDisplayName(e) {
  let t = renderDefaultModelSetting(e ?? getDefaultMainLoopModelSetting());
  return e === null ? `${t} (default)` : t;
}
function parseModelOrDefault(e) {
  return parseUserSpecifiedModel(e ?? getDefaultMainLoopModelSetting());
}
function shouldConfirmModelChangeForPromptCache(e, t, n, o, r) {
  if (!r) return !1;
  let i = jc();
  if (i === 0 || i === o) return !1;
  return (
    stripLongContextTags(parseModelOrDefault(e)) !== stripLongContextTags(parseModelOrDefault(getEffectiveSessionModel({ mainLoopModel: t, mainLoopModelForSession: n })))
  );
}
function formatCurrentModelStatus(e) {
  let t = formatInlineCode(formatModelDisplayName(e.mainLoopModel)),
    n = getSessionEffortLevel(e),
    o = n !== void 0 ? ` (effort: ${n})` : "",
    r = getSessionModelOverride(e.mainLoopModelForSession, e.mainLoopModel);
  if (r !== null)
    return `${CURRENT_MODEL_PREFIX}${formatInlineCode(formatModelDisplayName(r))} (this session only)${o}
Base model: ${t}`;
  let i = "";
  {
    let s = getLatchedFallbackModelInfo();
    if (s !== void 0) i = ` (${formatAutoSwitchedModelNote(formatInlineCode(formatModelDisplayName(s.previousModel)))})`;
  }
  return `${CURRENT_MODEL_PREFIX}${t}${i}${o}`;
}
function isFableModelBlockedByCreditsOrOverage(e) {
  let t = e ?? getDefaultMainLoopModelSetting();
  if (!isFableFamilyOrPinnedModel(parseUserSpecifiedModel(t))) return !1;
  return isFableBlockedByCreditsOrOverage();
}
function isFableModelBlockedByUsageCredits(e) {
  if (e === null) return !1;
  return isFableFamilyOrPinnedModel(parseUserSpecifiedModel(e)) && isFableBlockedByUsageCredits();
}
function resolveEffortLevelForModel(e, t) {
  if (t === void 0) return;
  if (t !== "ultracode") return { level: t, fromUltracode: !1, ultracode: !1 };
  return modelSupportsUltracode(parseModelOrDefault(e))
    ? { level: "xhigh", fromUltracode: !0, ultracode: !0 }
    : { level: getUltracodeFallbackEffort(parseModelOrDefault(e)), fromUltracode: !0, ultracode: !1 };
}
export {
  formatFastModeChangeNote,
  formatFastModeToggledNote,
  validateModelAvailability,
  resolveModelSwitchTarget,
  resolvePreModelSwitchDecision,
  formatModelSwitchBlockedNotice,
  toSingleLineDisplayText,
  formatModelSwitchBlockedError,
  applyModelSwitch,
  saveModelAsUserDefault,
  formatPinnedModelSettingNote,
  isOpus1mModelUnavailable,
  isSonnet1mModelUnavailable,
  formatModelDisplayName,
  parseModelOrDefault,
  shouldConfirmModelChangeForPromptCache,
  formatCurrentModelStatus,
  isFableModelBlockedByCreditsOrOverage,
  isFableModelBlockedByUsageCredits,
  resolveEffortLevelForModel,
};
