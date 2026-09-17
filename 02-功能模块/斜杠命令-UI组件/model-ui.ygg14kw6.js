// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 249 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Cz, xW } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { ge, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { HELP_FLAGS, isInfoSubcommandAlias, isEssentialTrafficOnly, logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  getAuthenticatedAccountKey,
  getFableEntitlementProbe,
  getProviderState,
  getModelForAnalytics,
  isFastModeEnabled,
  isFastModeAvailable,
  modelSupportsFastMode,
  resolveFastModeForModel,
  logFastModeToggled,
  clearFastModeCooldown,
  formatLegacyModelRemapWarning,
  isActiveCatalogFromServer,
  isModelAllowed,
  isFableModelValue,
  bootstrapHasAnswered,
  getModelUnavailabilityReason,
  getDefaultFableModel,
  getDefaultMainLoopModelSetting,
  renderFableModelName,
  parseUserSpecifiedModel,
  hashForTelemetry,
  getAdditionalModelOptionsCache,
  getFeatureValue_CACHED_MAY_BE_STALE,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getRemoteTransport, isRemoteActive, hasRemoteControlChannel, hasRemoteCapability } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { strip1mSuffix, getAPIProvider, isFirstPartyAnthropicBaseUrl } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import {
  toModelPickerOption,
  isPromptCacheWarm,
  getEffectiveSessionModel,
  getActiveModelForState,
  recordModelSwitchIfChanged,
  enqueueSessionTask,
  formatInlineCode,
  SET_MODEL_PREFIX,
  KEPT_MODEL_PREFIX,
  CLOUD_SWITCH_NO_RESPONSE_PREFIX,
  CLOUD_SWITCH_FAILED_PREFIX,
  ControlRequestTimeoutError,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getEnvEffortLevelOverride, createEffortLevel, getSessionEffortLevel, releaseLaunchEffortPins, shouldConfirmEffortChangeOnWarmCache, applyEffortLevelChange } from "../权限系统/chunk-t3b7pg2x.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useTimeout } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useAppStateSelector, useSetAppState, useAppState } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { ModelPicker, CancellableStatusMessage, ExtraUsageDialog } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { useNotificationQueue } from "../../03-入口与运行时/会话UI(REPL)/notification-queue.js";
import "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import "../成本-Token统计/chunk-adrc9xt1.js";
import "../../01-核心基础设施/共享小工具-未细化/use-answer-refusal-state.js";
import "../../01-核心基础设施/共享小工具-未细化/feature-flag-version.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import { useMainLoopModelOverride } from "../../01-核心基础设施/共享小工具-未细化/main-loop-model.js";
import "../../03-入口与运行时/会话UI(REPL)/clawd-mascot.js";
import { ModelOrEffortSwitchDialog } from "../../01-核心基础设施/共享小工具-未细化/switch-confirm-dialog.js";
import "../../01-核心基础设施/共享小工具-未细化/focusable-box.js";
import "../../01-核心基础设施/共享小工具-未细化/learn-more-link.js";
import "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import "../../01-核心基础设施/共享小工具-未细化/input-guide.js";
import "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/remote-control-ui-strings.js";
import "../成本-Token统计/usage-credits-flow.js";
import {
  formatFastModeChangeNote,
  validateModelAvailability,
  resolveModelSwitchTarget,
  resolvePreModelSwitchDecision,
  toSingleLineDisplayText,
  formatModelSwitchBlockedError,
  applyModelSwitch,
  saveModelAsUserDefault,
  formatPinnedModelSettingNote,
  formatModelDisplayName,
  parseModelOrDefault,
  shouldConfirmModelChangeForPromptCache,
  formatCurrentModelStatus,
  isFableModelBlockedByCreditsOrOverage,
  isFableModelBlockedByUsageCredits,
  resolveEffortLevelForModel,
} from "../../01-核心基础设施/模型目录-ModelCatalog/model-switch.js";
import { re, E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { formatModelRestrictedMessage } from "../Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
var Ot = "tengu_swift_garden",
  et = 2,
  ze = 15000;
function tt() {
  return getProviderState().providerCache.fableEntitlementProbeInFlight;
}
function Ye() {
  let r = getProviderState().providerCache;
  if (r.fableEntitlementProbeInFlight === void 0) return ze;
  return Math.max(0, ze - (Date.now() - r.fableEntitlementProbeStartedAt));
}
function Ue() {
  if (!getFeatureValue_CACHED_MAY_BE_STALE(Ot, !0)) return !1;
  let r = getProviderState().providerCache;
  if (r.fableEntitlementProbeInFlight !== void 0) return Ye() > 0;
  if (getFableEntitlementProbe() !== void 0 || r.fableEntitlementProbeAttempts >= et || ot(r))
    return !1;
  if (getAPIProvider() !== "firstParty" || !isFirstPartyAnthropicBaseUrl()) return !1;
  if (isActiveCatalogFromServer()) return !1;
  if (isEssentialTrafficOnly() || !bootstrapHasAnswered()) return !1;
  if (getAdditionalModelOptionsCache().some((o) => typeof o.value === "string" && isFableModelValue(o.value))) return !1;
  let t = getDefaultFableModel();
  return isModelAllowed(t) && getModelUnavailabilityReason(t)?.reason === "absent";
}
function ot(r) {
  return (
    r.fableEntitlementProbeAccount !== void 0 &&
    r.fableEntitlementProbeAccount !== null &&
    getAuthenticatedAccountKey() === null
  );
}
function nt({ credentials: r }) {
  let t = getProviderState().providerCache;
  if (t.fableEntitlementProbeInFlight !== void 0)
    return t.fableEntitlementProbeInFlight;
  let o = getFableEntitlementProbe();
  if (o !== void 0) return Promise.resolve(o);
  if (t.fableEntitlementProbeAttempts >= et || ot(t))
    return Promise.resolve("failed");
  let O = getAuthenticatedAccountKey(),
    T = getDefaultFableModel();
  ((t.fableEntitlementProbeAttempts += 1),
    (t.fableEntitlementProbeAccount = O),
    (t.fableEntitlementProbeEpoch = xW()),
    (t.fableEntitlementProbeStartedAt = Date.now()),
    (t.fableEntitlementProbeModel = T));
  let c = Tt(t, T, O, r).finally(() => {
    if (t.fableEntitlementProbeInFlight === c)
      t.fableEntitlementProbeInFlight = void 0;
  });
  return ((t.fableEntitlementProbeInFlight = c), c);
}
async function Tt(r, t, o, O) {
  let T = r.fableEntitlementProbeGeneration;
  try {
    let c = await validateModelAvailability(t, { forceServerProbe: !0, credentials: O }),
      M = getAuthenticatedAccountKey(),
      q = getProviderState().providerCache;
    if (
      q !== r ||
      r.fableEntitlementProbeGeneration !== T ||
      (o !== null && M !== null && M !== o)
    )
      return (
        q.validatedModels.delete(t),
        r.validatedModels.delete(t),
        logForDebugging(
          "[model picker] Fable entitlement probe answered under a superseded credential; discarded",
        ),
        logFeatureSad("model_picker_fable_probe", "superseded_credential"),
        "failed"
      );
    if (c.valid)
      return (
        (r.fableEntitlementProbe = "accepted"),
        logFeatureOk("model_picker_fable_probe", { accepted: !0 }),
        "accepted"
      );
    if (c.notFound)
      return (
        (r.fableEntitlementProbe = "refused"),
        logFeatureOk("model_picker_fable_probe", { accepted: !1 }),
        "refused"
      );
    return (
      logForDebugging(`[model picker] Fable entitlement probe failed: ${c.error}`),
      logFeatureSad("model_picker_fable_probe", "failed"),
      "failed"
    );
  } catch (c) {
    return (
      logForDebugging(`[model picker] Fable entitlement probe threw: ${c}`),
      logFeatureSad("model_picker_fable_probe", "failed"),
      "failed"
    );
  }
}
function lo(En) {
  return En.mainLoopModel;
}
function ao() {
  return new AbortController();
}
function co(vn) {
  return vn !== null;
}
function mo() {
  return getRemoteTransport() !== null && hasRemoteControlChannel();
}
function uo(Gn) {
  return Gn.mainLoopModel;
}
function po(Kn) {
  return Kn.mainLoopModelForSession;
}
function go(xn) {
  return xn.sessionEffort;
}
function bo(Jn) {
  return Jn.settingsEffortTable;
}
var Qe =
    "Model picker shows local options in cloud sessions \u2014 pass a model name, e.g. /model sonnet",
  Ft =
    "Couldn\u2019t load the model list from the cloud session \u2014 pass a model name, e.g. /model sonnet",
  Ct =
    "Stopped waiting for the cloud session\u2019s model list \u2014 run /model again, or pass a model name, e.g. /model sonnet",
  Et = 15000,
  je = (r) => strip1mSuffix(r) !== r,
  vt = (r) =>
    r.reduce(
      (t, o) =>
        t === null || (o.value?.length ?? 0) > (t.value?.length ?? 0) ? o : t,
      null,
    )?.value ?? null;
function io({
  getMessages: r,
  onDone: t,
  storageV5: o,
  credentials: O,
  session: T,
}) {
  let c = useAppState(),
    M = useAppStateSelector((s) => s.mainLoopModel),
    q = useAppStateSelector((s) => s.mainLoopModelForSession),
    x = useMainLoopModelOverride() ?? M,
    X = useAppStateSelector((s) => s.fastMode),
    ee = useSetAppState(),
    { addNotification: de } = useNotificationQueue(),
    [D, k] = d(null),
    Q = C([]),
    [te, fe] = d(null),
    oe = C(!1),
    ce = C(!1),
    _e = C(0),
    [$e, Z] = d(!1),
    Ee = C(null),
    [Me, ke] = d(() => Ue()),
    [P] = d(() => Ye());
  (useTimeout(() => ke(!1), Me ? P : null),
    E(() => {
      if (!Me) return;
      if (!Ue()) {
        ke(!1);
        return;
      }
      let s = !0;
      return (
        (tt() ?? nt({ credentials: O })).finally(() => {
          if (s) ke(!1);
        }),
        () => {
          s = !1;
        }
      );
    }, [Me, O]));
  function A() {
    logEvent("tengu_model_command_menu", { action: S("cancel") });
    let s = formatModelDisplayName(x);
    t(`${KEPT_MODEL_PREFIX}${formatInlineCode(s)}`, { display: "system" });
  }
  function v(s, w, ne = !1) {
    if (!ne && isFableModelBlockedByCreditsOrOverage(s)) {
      ((ce.current = !1), (_e.current += 1), fe({ model: s, effort: w }));
      return;
    }
    let Y = resolveEffortLevelForModel(s, w),
      N = oe.current;
    oe.current = !1;
    let se = new AbortController();
    ((Ee.current = se),
      Z(!0),
      enqueueSessionTask(T, () => resolvePreModelSwitchDecision(T, c.getState, s, "picker", { signal: se.signal }))
        .then((L) => {
          if ((Z(!1), se.signal.aborted)) return;
          if (((Q.current = L.messages), L.decision === "block")) {
            (logFeatureSad("model_switch", "blocked_by_hook"),
              t(formatModelSwitchBlockedError(s, L.reason, L.messages), { display: "system" }));
            return;
          }
          if (L.decision === "ask") {
            k({
              model: s,
              pick: Y,
              kind: "model",
              hookReason: L.reason ?? "Confirm switching the model",
              vettedFrom: getActiveModelForState(c.getState()),
              saveAsDefault: N,
            });
            return;
          }
          m(s, Y, L.skipConfirm, N);
        })
        .catch((L) => {
          if ((Z(!1), se.signal.aborted)) return;
          (logError(ge(L)),
            t(`Model switch failed: ${toSingleLineDisplayText(l(L))}`, { display: "system" }));
        }));
  }
  function m(s, w, ne, Y) {
    let N = c.getState();
    if (
      !ne &&
      shouldConfirmModelChangeForPromptCache(
        s,
        N.mainLoopModel,
        N.mainLoopModelForSession,
        N.cacheMissAckedAtOutputTokens,
        isPromptCacheWarm(r()),
      )
    ) {
      k({
        model: s,
        pick: w,
        kind: "model",
        vettedFrom: getActiveModelForState(c.getState()),
        saveAsDefault: Y,
      });
      return;
    }
    if (
      w !== void 0 &&
      shouldConfirmEffortChangeOnWarmCache(w.level, getSessionEffortLevel(N), parseModelOrDefault(s), N.cacheMissAckedAtOutputTokens, isPromptCacheWarm(r()))
    ) {
      k({
        model: s,
        pick: w,
        kind: "effort",
        vettedFrom: getActiveModelForState(c.getState()),
        saveAsDefault: Y,
      });
      return;
    }
    B(s, w, Y);
  }
  function B(s, w, ne) {
    if (
      (logEvent("tengu_model_command_menu", {
        action: getModelForAnalytics(s),
        from_model: getModelForAnalytics(M),
        to_model: getModelForAnalytics(s),
      }),
      w?.fromUltracode)
    )
      releaseLaunchEffortPins(ne, o);
    else if (w !== void 0) applyEffortLevelChange(w.level, parseModelOrDefault(s), ne, o);
    Cz();
    let Y = !1,
      N = !1;
    if (isFastModeEnabled()) clearFastModeCooldown();
    (recordModelSwitchIfChanged(T, c.getState(), s, "picker"),
      ee(
        (ve) => (
          (Y = !!ve.fastMode),
          (N = isFastModeEnabled() ? resolveFastModeForModel(s, ve.fastMode) : Y),
          {
            ...ve,
            mainLoopModel: s,
            mainLoopModelForSession: null,
            ...(w !== void 0 && {
              sessionEffort: createEffortLevel(w.level),
              ultracode: w.ultracode,
            }),
            ...(N !== Y && { fastMode: N }),
          }
        ),
      ),
      logFastModeToggled(Y, N));
    let se = ne;
    if (se) saveModelAsUserDefault(s, o);
    (logFeatureOk("model_switch"), Ze(s, de));
    let L = `${SET_MODEL_PREFIX}${formatInlineCode(formatModelDisplayName(s))}${se ? " and saved as your default for new sessions" : " for this session only"}`;
    if (w !== void 0) {
      let ve = w.ultracode ? "ultracode" : w.level;
      if (((L += ` with ${formatInlineCode(ve)} effort`), w.fromUltracode && se))
        L += w.ultracode
          ? " (ultracode applies to this session only)"
          : " (the effort applies to this session only)";
      let Ne = w.fromUltracode ? getEnvEffortLevelOverride() : void 0;
      if (Ne !== void 0 && Ne !== "xhigh") {
        let Lt =
          Ne === null ? a.CLAUDE_CODE_EFFORT_LEVEL?.toLowerCase() : String(Ne);
        L += ` \u2014 CLAUDE_CODE_EFFORT_LEVEL=${Lt} overrides effort this session; clear it and ${ve} takes over`;
      }
    }
    if (((L += formatFastModeChangeNote(Y, N, s, { announceKeptOn: !0 })), se)) L += formatPinnedModelSettingNote(s);
    if (Q.current.length > 0)
      ((L += `
${Q.current.map(toSingleLineDisplayText).join(`
`)}`),
        (Q.current = []));
    t(L);
  }
  if (Me)
    return e(CancellableStatusMessage, { message: "Checking model availability\u2026", onCancel: A });
  if (te) {
    let { model: s, effort: w } = te,
      ne = _e.current;
    return e(ExtraUsageDialog, {
      variant: "picker",
      modelName: renderFableModelName(parseUserSpecifiedModel(s ?? getDefaultMainLoopModelSetting())),
      onDone: (Y, N) => {
        if (ne !== _e.current) return !1;
        if (ce.current) return !1;
        if (((ce.current = !0), fe(null), Y === "consent")) {
          v(s, w, !0);
          return;
        }
        ((oe.current = !1),
          t(N ?? `${KEPT_MODEL_PREFIX}${formatInlineCode(formatModelDisplayName(x))}`, { display: "system" }));
      },
    });
  }
  if ($e)
    return e(CancellableStatusMessage, {
      message: "Running PreModelSwitch hooks\u2026",
      onCancel: () => {
        (Ee.current?.abort(),
          Z(!1),
          t("Model switch cancelled", { display: "system" }));
      },
    });
  if (D)
    return e(ModelOrEffortSwitchDialog, {
      kind: D.kind,
      model: D.model,
      effort: D.pick?.level,
      hookReason: D.hookReason,
      onConfirm: () => {
        if (D.vettedFrom !== void 0 && getActiveModelForState(c.getState()) !== D.vettedFrom) {
          (k(null),
            t("The model changed while you were confirming; pick again", {
              display: "system",
            }));
          return;
        }
        B(D.model, D.pick, D.saveAsDefault);
      },
      onCancel: () => {
        (k(null), (oe.current = !1));
      },
    });
  return e(ModelPicker, {
    initial: M,
    sessionModel: q,
    onSelect: v,
    onSetDefault: (s) => {
      oe.current = !0;
    },
    onCancel: A,
    isStandaloneCommand: !0,
    skipSettingsWrite: !0,
    showFastModeNotice: isFastModeEnabled() && X && modelSupportsFastMode(x) && isFastModeAvailable(),
  });
}
function Rt(yn) {
  let pe = _(31),
    {
      getMessages: rt,
      onDone: V,
      storageV5: st,
      credentials: it,
      session: lt,
    } = yn,
    G = useAppStateSelector(lo),
    [ie, _n] = d(null),
    [We, Mn] = d(null),
    [ue] = d(ao),
    Nt,
    Bt;
  if (pe[0] !== ue || pe[1] !== V)
    ((Nt = () => {
      let jt = getRemoteTransport();
      if (!jt) {
        V(Qe, { display: "system" });
        return;
      }
      let at = !1;
      return (
        jt
          .sendControlRequest(
            { subtype: "list_models" },
            { signal: ue.signal, timeoutMs: Et },
          )
          .then((kn) => {
            if (at || ue.signal.aborted) {
              return;
            }
            let Dt = kn.models.map(toModelPickerOption).filter(co);
            (logEvent("tengu_remote_model_picker", {
              outcome: S("opened"),
              model_count: Dt.length,
            }),
              _n(Dt));
          })
          .catch((An) => {
            if (at || ue.signal.aborted) {
              return;
            }
            (logEvent("tengu_remote_model_picker", {
              outcome: S(An instanceof ControlRequestTimeoutError ? "timeout" : "fallback"),
            }),
              V(Ft, { display: "system" }));
          }),
        () => {
          at = !0;
        }
      );
    }),
      (Bt = [V, ue]),
      (pe[0] = ue),
      (pe[1] = V),
      (pe[2] = Nt),
      (pe[3] = Bt));
  else ((Nt = pe[2]), (Bt = pe[3]));
  if ((E(Nt, Bt), We !== null)) {
    let Ae;
    if (
      pe[4] !== it ||
      pe[5] !== rt ||
      pe[6] !== V ||
      pe[7] !== We ||
      pe[8] !== lt ||
      pe[9] !== st
    )
      ((Ae = e(De, {
        args: We,
        getMessages: rt,
        onDone: V,
        storageV5: st,
        credentials: it,
        session: lt,
      })),
        (pe[4] = it),
        (pe[5] = rt),
        (pe[6] = V),
        (pe[7] = We),
        (pe[8] = lt),
        (pe[9] = st),
        (pe[10] = Ae));
    else Ae = pe[10];
    return Ae;
  }
  if (ie === null) {
    let Ae;
    if (pe[11] !== ue || pe[12] !== V)
      ((Ae = e(CancellableStatusMessage, {
        message: "Loading models from the cloud session\u2026",
        onCancel: () => {
          (ue.abort(),
            logEvent("tengu_remote_model_picker", { outcome: S("cancelled") }),
            V(Ct, { display: "system" }));
        },
      })),
        (pe[11] = ue),
        (pe[12] = V),
        (pe[13] = Ae));
    else Ae = pe[13];
    return Ae;
  }
  let Ae;
  if (pe[14] !== G || pe[15] !== ie) {
    let Ie;
    if (pe[17] !== G)
      ((Ie = (Fn) => Fn.value === G), (pe[17] = G), (pe[18] = Ie));
    else Ie = pe[18];
    Ae = ie.find(Ie);
    ((pe[14] = G), (pe[15] = ie), (pe[16] = Ae));
  } else Ae = pe[16];
  let He = Ae,
    Ie;
  if (pe[19] !== He || pe[20] !== G || pe[21] !== ie)
    ((Ie = He
      ? He.value
      : vt(
          G === null
            ? []
            : ie.filter(
                (dt) =>
                  dt.value !== null &&
                  strip1mSuffix(G).includes(strip1mSuffix(dt.value)) &&
                  je(G) === je(dt.value),
              ),
        )),
      (pe[19] = He),
      (pe[20] = G),
      (pe[21] = ie),
      (pe[22] = Ie));
  else Ie = pe[22];
  let ft = Ie,
    Yt;
  if (pe[23] === MEMO_CACHE_SENTINEL) ((Yt = (Cn) => Mn(Cn ?? "default")), (pe[23] = Yt));
  else Yt = pe[23];
  let Ve;
  if (pe[24] !== G || pe[25] !== V)
    ((Ve = () => {
      (logEvent("tengu_model_command_menu", { action: S("cancel") }),
        V(
          G === null
            ? "Kept the workspace\u2019s current model"
            : `${KEPT_MODEL_PREFIX}${formatInlineCode(formatModelDisplayName(G))}`,
          { display: "system" },
        ));
    }),
      (pe[24] = G),
      (pe[25] = V),
      (pe[26] = Ve));
  else Ve = pe[26];
  let Ut;
  if (pe[27] !== ft || pe[28] !== ie || pe[29] !== Ve)
    ((Ut = e(ModelPicker, {
      initial: ft,
      options: ie,
      headerText:
        "Models reported by the cloud session. Your pick applies to that session.",
      onSelect: Yt,
      onCancel: Ve,
      isStandaloneCommand: !0,
      skipSettingsWrite: !0,
    })),
      (pe[27] = ft),
      (pe[28] = ie),
      (pe[29] = Ve),
      (pe[30] = Ut));
  else Ut = pe[30];
  return Ut;
}
function De(wn) {
  let W = _(67),
    {
      args: J,
      getMessages: ct,
      onDone: b,
      storageV5: le,
      credentials: we,
      session: ae,
    } = wn,
    R = useAppState(),
    be = useSetAppState(),
    { addNotification: Fe } = useNotificationQueue(),
    [I, Wt] = d(null),
    Ht;
  if (W[0] === MEMO_CACHE_SENTINEL) ((Ht = []), (W[0] = Ht));
  else Ht = W[0];
  let mt = C(Ht),
    [Pn, Ge] = d(!1),
    Vt = C(null),
    [Gt, Kt] = d(null),
    [Sn] = d(mo),
    Ke = C(!1),
    ut = C(!1),
    pt = C(0),
    Le = C(!1),
    xt;
  if (
    W[1] !== Fe ||
    W[2] !== b ||
    W[3] !== ae ||
    W[4] !== be ||
    W[5] !== le ||
    W[6] !== R
  )
    ((xt = (Be, gt) => {
      let Rn = !isRemoteActive();
      let Jt = applyModelSwitch(ae, Be, () => R.getState(), be, Rn, "command", gt, le);
      if (gt !== void 0 && Be !== null)
        Fe({
          key: `model-restricted-${Be}`,
          kind: "warning",
          text: formatModelRestrictedMessage(gt, Be),
          priority: "immediate",
        });
      Ze(Be, Fe);
      let qt = mt.current;
      ((mt.current = []),
        b(
          qt.length > 0
            ? `${Jt}
${qt.map(toSingleLineDisplayText).join(`
`)}`
            : Jt,
        ));
    }),
      (W[1] = Fe),
      (W[2] = b),
      (W[3] = ae),
      (W[4] = be),
      (W[5] = le),
      (W[6] = R),
      (W[7] = xt));
  else xt = W[7];
  let Oe = xt,
    Qt;
  if (W[8] !== Oe || W[9] !== ct || W[10] !== R)
    ((Qt = (ht, Zt, $n) => {
      let yt = R.getState();
      if (
        !$n &&
        shouldConfirmModelChangeForPromptCache(
          ht,
          yt.mainLoopModel,
          yt.mainLoopModelForSession,
          yt.cacheMissAckedAtOutputTokens,
          isPromptCacheWarm(ct()),
        )
      ) {
        Wt({ model: ht, substitutedFrom: Zt, vettedFrom: getActiveModelForState(R.getState()) });
        return;
      }
      Oe(ht, Zt);
    }),
      (W[8] = Oe),
      (W[9] = ct),
      (W[10] = R),
      (W[11] = Qt));
  else Qt = W[11];
  let _t = Qt,
    zt;
  if (W[12] !== _t || W[13] !== b || W[14] !== ae || W[15] !== R)
    ((zt = (xe, eo) => {
      let Je = new AbortController();
      ((Vt.current = Je),
        Ge(!0),
        enqueueSessionTask(ae, () => resolvePreModelSwitchDecision(ae, R.getState, xe, "command", { signal: Je.signal }))
          .then((Se) => {
            if ((Ge(!1), Je.signal.aborted)) {
              return;
            }
            if (((mt.current = Se.messages), Se.decision === "block")) {
              (logFeatureSad("model_switch", "blocked_by_hook"),
                b(formatModelSwitchBlockedError(xe, Se.reason, Se.messages), { display: "system" }));
              return;
            }
            if (Se.decision === "ask") {
              Wt({
                model: xe,
                substitutedFrom: eo,
                hookReason: Se.reason ?? "Confirm switching the model",
                vettedFrom: getActiveModelForState(R.getState()),
              });
              return;
            }
            _t(xe, eo, Se.skipConfirm);
          })
          .catch((to) => {
            if ((Ge(!1), Je.signal.aborted)) {
              return;
            }
            (logError(ge(to)),
              b(`Model switch failed: ${toSingleLineDisplayText(l(to))}`, { display: "system" }));
          }));
    }),
      (W[12] = _t),
      (W[13] = b),
      (W[14] = ae),
      (W[15] = R),
      (W[16] = zt));
  else zt = W[16];
  let he = zt,
    oo;
  if (
    W[17] !== Fe ||
    W[18] !== J ||
    W[19] !== we ||
    W[20] !== b ||
    W[21] !== he ||
    W[22] !== ae ||
    W[23] !== be ||
    W[24] !== le
  )
    ((oo = () => {
      let no = getRemoteTransport();
      if (no && hasRemoteControlChannel()) {
        resolveModelSwitchTarget(J, le, we).then((ye) => {
          if (Ke.current) {
            return;
          }
          if (!ye.ok) {
            ((Le.current = !0), b(ye.message, { display: "system" }));
            return;
          }
          if (ye.model !== null && isFableModelBlockedByUsageCredits(ye.model)) {
            (logFeatureSad("model_fable_consent", "remote_thin_client_blocked"),
              (Le.current = !0),
              b(
                `${renderFableModelName(parseUserSpecifiedModel(ye.model))} uses usage credits, and this cloud session can\u2019t show the consent prompt yet \xB7 switch models from the workspace, or consent once in a local session first`,
                { display: "system" },
              ));
            return;
          }
          let z = ye.model;
          return no
            .sendControlRequest({ subtype: "set_model", model: z ?? void 0 })
            .then(() => {
              let Mt = !1;
              if (
                (be(
                  (qe) => (
                    (Mt = isFastModeEnabled() && !!qe.fastMode && !resolveFastModeForModel(z, qe.fastMode)),
                    recordModelSwitchIfChanged(ae, qe, z, "command"),
                    {
                      ...qe,
                      mainLoopModel: z,
                      mainLoopModelForSession: null,
                      ...(Mt && { fastMode: !1 }),
                    }
                  ),
                ),
                Mt)
              )
                logFastModeToggled(!0, !1);
              if (Ke.current) {
                Fe({
                  key: `remote-model-switch-landed-${z ?? "default"}`,
                  kind: "event",
                  text:
                    z === null
                      ? "The cloud session reset its model to the workspace default"
                      : `The cloud session switched to ${formatModelDisplayName(z)}`,
                  priority: "high",
                });
                return;
              }
              if (ye.substitutedFrom !== void 0 && z !== null)
                Fe({
                  key: `model-restricted-${z}`,
                  kind: "warning",
                  text: formatModelRestrictedMessage(ye.substitutedFrom, z),
                  priority: "immediate",
                });
              if (ye.substitutedFrom !== void 0)
                logFeatureSad("model_switch", "family_alias_stepped_down");
              else logFeatureOk("model_switch");
              ((Le.current = !0),
                b(
                  z === null
                    ? "Reset model to the workspace default"
                    : `${SET_MODEL_PREFIX}${formatInlineCode(formatModelDisplayName(z))}`,
                ));
            })
            .catch((kt) => {
              if ((logForDebugging(`[remote] set_model rejected: ${l(kt)}`), Ke.current)) {
                return;
              }
              let ro = kt instanceof ControlRequestTimeoutError;
              (logFeatureBad("model_switch", ro ? "timeout" : "remote_rejected"),
                (Le.current = !0),
                b(
                  ro
                    ? `${CLOUD_SWITCH_NO_RESPONSE_PREFIX}${formatInlineCode(J)} may still have been applied`
                    : `${CLOUD_SWITCH_FAILED_PREFIX}${formatInlineCode(J)}: ${toSingleLineDisplayText(l(kt))}`,
                  { display: "system" },
                ));
            });
        });
        return;
      }
      resolveModelSwitchTarget(J, le, we).then((Re) => {
        if (!Re.ok) {
          b(Re.message, { display: "system" });
          return;
        }
        if (isFableModelBlockedByCreditsOrOverage(Re.model)) {
          ((ut.current = !1),
            (pt.current = pt.current + 1),
            Kt({ model: Re.model, substitutedFrom: Re.substitutedFrom }));
          return;
        }
        he(Re.model, Re.substitutedFrom);
      });
    }),
      (W[17] = Fe),
      (W[18] = J),
      (W[19] = we),
      (W[20] = b),
      (W[21] = he),
      (W[22] = ae),
      (W[23] = be),
      (W[24] = le),
      (W[25] = oo));
  else oo = W[25];
  let so;
  if (
    W[26] !== J ||
    W[27] !== we ||
    W[28] !== b ||
    W[29] !== he ||
    W[30] !== be ||
    W[31] !== le
  )
    ((so = [J, b, be, he, le, we]),
      (W[26] = J),
      (W[27] = we),
      (W[28] = b),
      (W[29] = he),
      (W[30] = be),
      (W[31] = le),
      (W[32] = so));
  else so = W[32];
  if ((E(oo, so), Sn)) {
    const j = `Switching the cloud session to ${J}\u2026`;
    let K;
    if (W[33] !== J || W[34] !== b)
      ((K = () => {
        if (Le.current) {
          return;
        }
        ((Le.current = !0),
          (Ke.current = !0),
          logFeatureSad("model_switch", "remote_wait_cancelled"),
          b(
            `Stopped waiting for the cloud session \u2014 you\u2019ll get a notice if the switch to ${J} still lands`,
            { display: "system" },
          ));
      }),
        (W[33] = J),
        (W[34] = b),
        (W[35] = K));
    else K = W[35];
    let Ce;
    if (W[36] !== j || W[37] !== K)
      ((Ce = e(CancellableStatusMessage, { message: j, onCancel: K })),
        (W[36] = j),
        (W[37] = K),
        (W[38] = Ce));
    else Ce = W[38];
    return Ce;
  }
  if (Gt) {
    let { model: Te, substitutedFrom: At } = Gt;
    let Ln = pt.current;
    let j;
    if (W[39] !== Te) ((j = renderFableModelName(parseUserSpecifiedModel(Te ?? getDefaultMainLoopModelSetting()))), (W[39] = Te), (W[40] = j));
    else j = W[40];
    let K;
    if (
      W[41] !== Te ||
      W[42] !== b ||
      W[43] !== he ||
      W[44] !== R ||
      W[45] !== At
    )
      ((K = (On, Nn) => {
        if (Ln !== pt.current) {
          return !1;
        }
        if (ut.current) {
          return !1;
        }
        if (((ut.current = !0), Kt(null), On === "consent")) {
          he(Te, At);
          return;
        }
        b(Nn ?? `${KEPT_MODEL_PREFIX}${formatInlineCode(formatModelDisplayName(getEffectiveSessionModel(R.getState())))}`, { display: "system" });
      }),
        (W[41] = Te),
        (W[42] = b),
        (W[43] = he),
        (W[44] = R),
        (W[45] = At),
        (W[46] = K));
    else K = W[46];
    let Ce;
    if (W[47] !== j || W[48] !== K)
      ((Ce = e(ExtraUsageDialog, { variant: "picker", modelName: j, onDone: K })),
        (W[47] = j),
        (W[48] = K),
        (W[49] = Ce));
    else Ce = W[49];
    return Ce;
  }
  if (I) {
    let j;
    if (
      W[50] !== Oe ||
      W[51] !== b ||
      W[52] !== I.model ||
      W[53] !== I.substitutedFrom ||
      W[54] !== I.vettedFrom ||
      W[55] !== R
    )
      ((j = () => {
        if (I.vettedFrom !== void 0 && getActiveModelForState(R.getState()) !== I.vettedFrom) {
          b("The model changed while you were confirming; pick again", {
            display: "system",
          });
          return;
        }
        Oe(I.model, I.substitutedFrom);
      }),
        (W[50] = Oe),
        (W[51] = b),
        (W[52] = I.model),
        (W[53] = I.substitutedFrom),
        (W[54] = I.vettedFrom),
        (W[55] = R),
        (W[56] = j));
    else j = W[56];
    let K;
    if (W[57] !== b || W[58] !== R)
      ((K = () =>
        b(`${KEPT_MODEL_PREFIX}${formatInlineCode(formatModelDisplayName(getEffectiveSessionModel(R.getState())))}`, { display: "system" })),
        (W[57] = b),
        (W[58] = R),
        (W[59] = K));
    else K = W[59];
    let Ce;
    if (
      W[60] !== I.hookReason ||
      W[61] !== I.model ||
      W[62] !== j ||
      W[63] !== K
    )
      ((Ce = e(ModelOrEffortSwitchDialog, {
        kind: "model",
        model: I.model,
        effort: void 0,
        hookReason: I.hookReason,
        onConfirm: j,
        onCancel: K,
      })),
        (W[60] = I.hookReason),
        (W[61] = I.model),
        (W[62] = j),
        (W[63] = K),
        (W[64] = Ce));
    else Ce = W[64];
    return Ce;
  }
  if (Pn) {
    let j;
    if (W[65] !== b)
      ((j = e(CancellableStatusMessage, {
        message: "Running PreModelSwitch hooks\u2026",
        onCancel: () => {
          (Vt.current?.abort(),
            Ge(!1),
            b("Model switch cancelled", { display: "system" }));
        },
      })),
        (W[65] = b),
        (W[66] = j));
    else j = W[66];
    return j;
  }
  return null;
}
function Ze(r, t) {
  let o = formatLegacyModelRemapWarning(r);
  if (!o) return;
  t({
    key: "model-deprecation-warning",
    kind: "warning",
    text: o,
    color: "warning",
    priority: "immediate",
    invalidates: ["model-deprecation-warning"],
  });
}
function $t(In) {
  let { onDone: Bn } = In,
    Dn = useAppStateSelector(uo),
    Wn = useAppStateSelector(po),
    Hn = useAppStateSelector(go),
    Vn = useAppStateSelector(bo);
  return (
    Bn(
      formatCurrentModelStatus({
        mainLoopModel: Dn,
        mainLoopModelForSession: Wn,
        sessionEffort: Hn,
        settingsEffortTable: Vn,
      }),
    ),
    null
  );
}
var bn = async (r, t, o) => {
  if (((o = o?.trim() || ""), isInfoSubcommandAlias(o)))
    return (
      logEvent("tengu_model_command_inline_help", { args: fromEnum(o) }),
      e($t, { onDone: r })
    );
  if (HELP_FLAGS.includes(o)) {
    r(
      "Run /model to open the model selection menu, or /model [modelName] to set the model.",
      { display: "system" },
    );
    return;
  }
  if (o)
    return (
      logEvent("tengu_model_command_inline", {
        args_hash: hashForTelemetry(o),
        args_length: o.length,
      }),
      e(De, {
        args: o,
        getMessages: () => t.getMessages?.() ?? t.messages,
        onDone: r,
        storageV5: t.storageV5,
        credentials: t.credentials,
        session: t.session,
      })
    );
  if (getRemoteTransport()) {
    if (hasRemoteCapability("modelCatalog") && hasRemoteControlChannel())
      return e(Rt, {
        getMessages: () => t.getMessages?.() ?? t.messages,
        onDone: r,
        storageV5: t.storageV5,
        credentials: t.credentials,
        session: t.session,
      });
    r(Qe, { display: "system" });
    return;
  }
  return e(io, {
    onDone: r,
    getMessages: () => t.getMessages?.() ?? t.messages,
    storageV5: t.storageV5,
    credentials: t.credentials,
    session: t.session,
  });
};
export { bn as call };
