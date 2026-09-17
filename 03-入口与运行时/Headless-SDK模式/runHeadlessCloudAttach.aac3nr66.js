// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 236 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { identity as _m, Xn, Vur, $p, he, pje, kz } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { sleep, withDeadline } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { toCompatSessionId, toInfraSessionId, sessionIdBody } from "../../02-功能模块/权限系统/chunk-ynkf3yy4.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { Ve, zi, yt, Iu, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { registerCleanup, jsonStringify, setHasFormattedOutput, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodeUnits, firstLine } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { isEssentialTrafficOnly, logError } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { printCliError } from "../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js";
import { logEvent, logEventAsync } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad, logFeatureBadAsync } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  getMainLoopModel,
  getDefaultOpusModel,
  hashForTelemetry,
  initializeRequestSchema,
  userDialogResponseSchema,
  prepareApiRequest,
  fetchSession,
  updateSessionTitle,
  markSessionRead,
  getAccessTokenWithCcrFallback,
  archiveRemoteSession,
  SDK_OAUTH_REFRESH_ENTRYPOINTS,
  handleOAuth401Error,
  getStoredOauthAccountInfo,
  getAccountInformation,
  validateForceLoginOrg,
  isWorkspacePersistedTrusted,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { formatDisplayText } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { findGitRoot, getBranch } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { truncateToWidth } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { sanitizeAnalyticsId } from "../CLI入口-Commander/startup-profiler.js";
import { getSettingsForSource, getInitialSettings } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { stripAnsi } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { PERMISSION_MODE_MANUAL_ALIAS, parsePermissionMode, CAN_USE_TOOL_INVALID_RESULT_REASON, CAN_USE_TOOL_REQUEST_FAILED_REASON, getExternalPermissionMode } from "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import { getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { buildClaudeAiSessionUrl } from "../../02-功能模块/工具结果持久化/工具结果持久化.jj43r39n.js";
import { isAutoModeSeedable, isTrustedPlanModeDisplaced, buildPermissionModeSeed } from "../../02-功能模块/权限系统/chunk-t3b7pg2x.js";
import { DEVICE_FIELD_NAME, isValidMachineName, hasRequestedMachine } from "../../02-功能模块/记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { isScrubEnabled } from "../../01-核心基础设施/核心工具-进程与信号/subprocess-env-scrub.js";
import {
  gracefulShutdown,
  settingsChangeDetector,
  pickAllowedToolInputProps,
  isSessionChannelDisabled,
  isRemoteToolServingSwitchOn,
  isRemoteToolServingMuted,
  onServingMuteRecheck,
  remoteToolServingOffReason,
  remoteToolServingPolicyName,
  CLOUD_SESSION_CONSENT_MESSAGES,
  NO_SYNC_HANDLE_MESSAGE,
  rootLaptopDirSyncRegistry,
  takeLaptopDirSyncSession,
  getCurrentRemoteFileMode,
  getGitRootRemoteFileMode,
  getDirSyncPromptRoot,
  setRemoteFileMode,
  getDirSyncRoot,
  SEED_INTERRUPTED_MESSAGE,
  SEED_CUT_AT_EXIT_MESSAGE,
  takePendingDirSyncSeed,
  formatCreatedUnboundNotice,
  describeUnboundReason,
  getStoredRemoteHomeSettingsMode,
  teleportToRemote,
  readConsentFromStore,
  createConsentStore,
  ControlRequestTimeoutError,
  classifyRemoteControlError,
  resolveStandingLapse,
  deviceHooksProcessMemories,
} from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isViolinWoodEnabled, isViolinWoodEnabledCached, isSettingsToCloudEnabled, isCloudPluginForwardingFlagOn } from "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import {
  routeCloudControlRequest,
  getOptionRetentionKind,
  validateCloudInitializeOptions,
  buildInitializeSuccessFields,
  buildReplayUserMessage,
  buildInformationalSystemMessage,
  TRUNCATE_MAX_LENGTH,
  truncateSanitizedTextShort,
  truncateSanitizedTextLong,
  sanitizeAndTruncateText,
  normalizeDisconnectReason,
  formatDisconnectMessage,
} from "../../02-功能模块/权限系统/chunk-z0pt04s8.js";
import { isUnattendedServingEnabled, UNATTENDED_SERVING_CONSENT_VERSION, UNATTENDED_SERVING_CONSENT_TERMS, unattendedServingMachineName, readUnattendedServingConsent, writeUnattendedServingConsent, managedSettingsForbidUnattendedServing, primeUnattendedServingConsent } from "../../02-功能模块/自动模式-AutoMode/unattended-serving-consent.js";
import {
  cloudPluginsForwarderMemories,
  setUnrefTimer,
  isHookForwardingEnabled,
  createConsentReachJudge,
  reachMemories,
  createDeviceHooksServingRuntime,
  UNVERIFIED_SENDER_REASON,
  openServedChannel,
  CLOUD_SYNC_OFFLINE_DIALOG,
  buildSyncOfflineDialogPayload,
  pushCreatePermissionMode,
  CLOUD_SESSION_UNRESPONSIVE_MESSAGE,
  getResponseTimeoutMs,
} from "../../02-功能模块/Hooks钩子/device-hooks-serving.js";
import { DEFAULT_REMOTE_TOOL_LIMITS, WITHDRAWN_FEEDBACK, parseToolCallResult } from "../../02-功能模块/远程工具执行/remote-tool-protocol.js";
import { normalizeDeclaredDialogKinds } from "../../02-功能模块/远程控制-Bridge/chunk-5ne99rq3.js";
import {
  getWorkerEpoch,
  hasMachineGeneratedContent,
  hasNonTextContentBlocks,
  aQt,
  lQt,
  SEND_REASON_CANCELLED,
  SEND_REASON_WITHDRAWN,
  describeUndeliveredSend,
  RemoteSessionManager,
  getSessionRequestTarget,
  fetchLatestSessionEvents,
} from "../../02-功能模块/远程控制-Bridge/chunk-x379yyxb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rds75sre.js";
import { startDeviceRegistration } from "../../02-功能模块/远程控制-Bridge/device-bridge-registration.js";
import "../../01-核心基础设施/共享小工具-未细化/device-passthrough-meta.js";
import { resolveAttachDeviceBinding, pullsBackToThisMachine, registerAttachedDevice } from "../../02-功能模块/认证-OAuth登录/attach-device-binding.js";
import {
  createCloudPluginsConsentStorage,
  resolveCloudPluginsConsent,
  CLOUD_PLUGINS_READ_TIMEOUT_MS,
  getForwardingNoticeReason,
  SYSTEM_CLOCK,
  createCloudPluginsForwarder,
  createConsentStoreTrustProbe,
  formatCloudSessionSyncLine,
  isProjectFilesSyncPending,
  getUploadOriginFacts,
  describeCloudSessionSync,
} from "../../02-功能模块/远程控制-Bridge/chunk-sc8n0cp3.js";
import { waitForPolicyLimitsToLoad } from "../../02-功能模块/策略限制-PolicyLimits/policy-limits-client.js";
import {
  getCloudSessionsUnavailableReason,
  isStaleBootstrapFrame,
  isBootstrapStepId,
  createRemoteBootstrapState,
  parseBootstrapStepMeta,
  reduceRemoteBootstrapState,
  formatBootstrapStepLabel,
  formatRemoteSessionSummary,
  getBranchMode,
  checkCloudSessionCliOptions,
  getSelectablePermissionMode,
  formatSessionIdForDisplay,
  formatSessionBindFailedMessage,
  formatSessionSetupFailedMessage,
  formatSessionArchivedMessage,
  formatSessionNotCreatedMessage,
  createCloudSessionRecord,
  FORWARDED_SYSTEM_PROMPT_OPTION_KEYS,
  mergeForwardedSystemPromptOptions,
  isInternalModel,
  getRepositoryModelSource,
  resolveInitialPermissionMode,
} from "../../02-功能模块/输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { localBindIdentity } from "../../02-功能模块/远程控制-Bridge/device-bind.js";
import { deviceEventSignerFor } from "../../02-功能模块/认证-OAuth登录/device-event-signer.js";
import { permissionResultSchema, StructuredIO } from "./structured-io.js";
import "../../01-核心基础设施/安全文件系统-FS加固/hardened-fs-primitives.js";
import "../../02-功能模块/文件同步-Sync/sync-journal.js";
import "../../01-核心基础设施/共享小工具-未细化/sync-state-schema.js";
import { runProbeGit } from "../../02-功能模块/工作树-Git/local-divergence-probe.js";
import "../../02-功能模块/工作树-Git/dir-sync-git-repository.js";
import { forecastKeyOf, decideSyncOffer } from "../../02-功能模块/文件同步-Sync/sync-offer-probe.js";
import { buildControlSuccessResponse, buildControlErrorResponse, buildErrorResultMessage } from "./headless-sdk-messages.js";
import "../../01-核心基础设施/共享小工具-未细化/private-host-detection.js";
import { parseThinClientReply } from "../../01-核心基础设施/共享小工具-未细化/parse-thin-client-reply.js";
import "../../01-核心基础设施/共享小工具-未细化/request-delivery-errors.js";
import "../../01-核心基础设施/共享小工具-未细化/remote-tools-logger.js";
import "./chunk-yb7jadvp.js";
import { buildDefaultDeviceDisplayName } from "../../02-功能模块/设备注册-Cowork/设备注册-Cowork.9r92qaht.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-d4kaq0ds.js";
import "../../02-功能模块/云会话-Teleport/overlay-bundle.js";
import { truncateWithEllipsis } from "../../01-核心基础设施/共享小工具-未细化/truncate-with-ellipsis.js";
import "../../01-核心基础设施/共享小工具-未细化/to-integer.js";
import { createStatusFeed } from "../../01-核心基础设施/共享小工具-未细化/status-feed.js";
import { createLinkedAbortSignal } from "../../01-核心基础设施/共享小工具-未细化/linked-abort-signal.js";
import { defineDialog } from "../../02-功能模块/对话框-确认UI/对话框-确认UI.4ggnfbtb.js";
import { AA, s, T, v, c, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { countMatching, dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function J(e) {
  if (yt(e)) {
    logForDebugging("[headlessFeatures] a feature hook was aborted");
    return;
  }
  logError(e);
}
var pe = ["settings", "hooks", "plugins", "tools"];
async function Ce(e, t) {
  return (
    await Promise.all(
      e.map((r) =>
        Promise.resolve()
          .then(() => r(t))
          .catch((d) => {
            (logForDebugging(
              `[headlessFeatures] a feature did not attach (${t.trigger}): ${l(d)}`,
            ),
              J(d));
            return;
          }),
      ),
    )
  ).flatMap((r) => (r === void 0 ? [] : [r]));
}
function tn(e, t) {
  return t.reduce(
    (r, d) =>
      Object.entries(d).reduce((p, [_, w]) => {
        if (typeof w !== "function") return p;
        let C = p[_];
        return (
          (p[_] =
            C === void 0
              ? w
              : (...k) => {
                  let D = C(...k);
                  return (ce(() => w(...k)), D);
                }),
          p
        );
      }, r),
    { ...e },
  );
}
class ne {
  attached = [];
  replied = !1;
  adopt(e) {
    this.attached = [...this.attached, ...e];
  }
  handles() {
    return this.attached;
  }
  homeSeed() {
    return this.attached.find((e) => e.homeSeed !== void 0)?.homeSeed;
  }
  statusFeeds() {
    return this.attached.flatMap((e) =>
      e.status === void 0 ? [] : [e.status],
    );
  }
  callbacks(e) {
    return tn(
      e,
      this.attached.flatMap((t) =>
        t.sessionCallbacks === void 0 ? [] : [t.sessionCallbacks],
      ),
    );
  }
  reports() {
    return Object.fromEntries(
      this.attached.flatMap((e) => {
        if (e.report === void 0) return [];
        try {
          return [[e.feature, e.report()]];
        } catch (t) {
          return (J(t), []);
        }
      }),
    );
  }
  noteSession(e) {
    this.each((t) => t.onSession?.(e));
  }
  noteStreamConnected() {
    this.each((e) => e.onStreamConnected?.());
  }
  noteWorkerLive() {
    this.each((e) => e.onWorkerLive?.());
  }
  noteWorkerInit(e) {
    this.each((t) => t.onWorkerInit?.(e));
  }
  noteWorkerUp(e) {
    this.each((t) => t.onWorkerUp?.(e));
  }
  noteTurnInFlight() {
    this.each((e) => e.onTurnInFlight?.());
  }
  noteTurnEnded() {
    this.each((e) => e.onTurnEnded?.());
  }
  sendWait() {
    let e = this.attached.filter((t) => t.beforeSend !== void 0);
    if (e.length === 0) return null;
    return async () => {
      await Promise.all(
        e.map((t) =>
          Promise.resolve()
            .then(() => t.beforeSend?.())
            .catch((o) => J(o)),
        ),
      );
    };
  }
  noteSessionCleared(e) {
    this.each((t) => t.onSessionCleared?.(e));
  }
  noteMessageSent(e) {
    this.each((t) => t.onMessageSent?.(e));
  }
  noteReply(e) {
    if (this.replied) return;
    ((this.replied = !0), this.each((t) => t.afterFirstReply?.(e)));
  }
  async dispose() {
    let e = this.attached;
    ((this.attached = []),
      await Promise.all(
        e.map((t) =>
          Promise.resolve()
            .then(() => t.dispose?.())
            .catch((o) => J(o)),
        ),
      ));
  }
  each(e) {
    this.attached.forEach((t) => ce(() => e(t)));
  }
  onEachSettled(e) {
    this.each((t) => t.onSettled?.(() => ce(e)));
  }
  onEachReportChanged(e) {
    this.each((t) => t.onReportChanged?.(() => ce(e)));
  }
}
function ce(e) {
  try {
    let t = e();
    if (t instanceof Promise) t.catch((o) => J(o));
  } catch (t) {
    J(t);
  }
}
var nn = 20,
  sn = 64;
function st(e) {
  let t = new Map(),
    o = new WeakSet(),
    r = [],
    d = !1,
    p = Le(),
    _ = (C, k, D, E) => {
      (t.delete(C),
        (r = [
          ...r,
          {
            call_id: C,
            tool: k,
            ended: D,
            ...(E !== void 0 && { code: E }),
            at: e.now(),
          },
        ].slice(-nn)));
    },
    w = (C, k) => {
      if (k === void 0 || C.ask_id === k) return { ...C, state: "asked" };
      let D = e.now();
      return {
        ...C,
        state: "asked",
        since: D,
        ask_id: k,
        lapses_at: D + (e.maxAskMs() ?? DEFAULT_REMOTE_TOOL_LIMITS.max_ask_ms),
      };
    };
  return {
    legStarted: (C) => {
      if (!C.request.ok || C.request.kind !== "call") return;
      let k = C.tool_use_id,
        D = t.get(k),
        E = C.request.value.approval;
      if (E === void 0 ? D !== void 0 : E.decision === "deny") return;
      if (D === void 0) {
        if (t.size >= sn) return;
        o.add(C);
      }
      (t.set(k, {
        ...(D ?? {
          call_id: k,
          tool: C.name,
          ...(E !== void 0 && { ask_id: E.ask_id }),
        }),
        state: "running",
        since: e.now(),
      }),
        p.emit());
    },
    legAnswered: (C, k) => {
      if (!C.request.ok) return;
      let D = C.tool_use_id,
        E = t.get(D),
        I = o.delete(C),
        O = k === void 0 ? void 0 : parseToolCallResult(k).envelope,
        A = O?.status === "present" ? O.envelope : void 0,
        R = C.request.kind === "call" ? C.request.value.approval : void 0,
        F = C.request.kind === "outcome_query" || (R === void 0 && !I);
      if (
        A === void 0 ||
        (ot(A) &&
          (I || (A.outcome === "refused" && A.code === "duplicate_call"))) ||
        (F && (E === void 0 || on(A)))
      ) {
        if (I && E !== void 0) (t.delete(D), p.emit());
        return;
      }
      let H = E?.tool ?? C.name;
      switch (A.outcome) {
        case "needs_approval":
          if (E === void 0) return;
          t.set(D, w(E, A.ask_id));
          break;
        case "in_progress":
          if (E === void 0) return;
          t.set(
            D,
            A.state === "awaiting_approval"
              ? w(E, void 0)
              : { ...E, state: "running" },
          );
          break;
        case "acknowledged":
          _(D, H, R?.feedback === WITHDRAWN_FEEDBACK ? "withdrawn" : "denied");
          break;
        case "completed":
          _(
            D,
            H,
            "completed",
            A.disposition === void 0 || A.disposition === "ran"
              ? void 0
              : A.disposition,
          );
          break;
        case "refused":
          if (
            R !== void 0 &&
            A.reason === void 0 &&
            A.code !== "withdrawn" &&
            A.code !== "unknown_call"
          ) {
            if (E === void 0) return;
            if (I) {
              (t.delete(D), p.emit());
              return;
            }
            if (E.ask_id === void 0) return;
            t.set(D, w(E, void 0));
            break;
          }
          _(D, H, "refused", A.code);
          break;
        case "failed":
          _(D, H, "failed", A.code);
          break;
      }
      ((d = !0), p.emit());
    },
    workerGone: () => {
      let C = [...t.values()].filter((k) => k.state === "asked");
      if (C.length === 0) return;
      (C.forEach((k) => t.delete(k.call_id)), p.emit());
    },
    clear: () => {
      if (t.size === 0) return;
      (t.clear(), p.emit());
    },
    report: () =>
      d || t.size > 0 ? { live: [...t.values()], recent: r } : void 0,
    onChanged: (C) => p.subscribe(C),
  };
}
function ot(e) {
  return "replayed" in e && e.replayed === !0;
}
function on(e) {
  return (
    (e.outcome === "failed" ||
      (e.outcome === "refused" && e.code !== "unknown_call")) &&
    !ot(e)
  );
}
function at(e) {
  return (t) => {
    if (!t.bound) return it("not_bound");
    if (t.servedTools === void 0) return it(t.servedToolsUnavailable);
    let o = null,
      r = !1,
      d = { at: "pending" },
      p,
      _ = Le(),
      w = Le(),
      C = st({
        now: Date.now,
        maxAskMs: () => F.servedHost()?.limits.max_ask_ms,
      });
    C.onChanged(() => w.emit());
    let k = (M) => {
        if (((d = M), M.at !== "on")) C.clear();
        _.emit();
      },
      D = remoteToolServingPolicyName(),
      E = createStatusFeed(),
      { onAnnounceOutcome: I, onRevoked: O, onNotice: A, ...R } = t.servedTools,
      F = e.openChannel({
        ...R,
        onAnnounceOutcome: (M, U) => {
          if (M.kind === "announced")
            k({ at: M.status === "announced" ? "on" : "withdrawn" });
          else if (M.kind === "refused")
            k({ at: M.reason === UNVERIFIED_SENDER_REASON ? "unverified" : "refused" });
          else if (M.kind === "unsupported") k({ at: "refused" });
          I?.(M, U);
        },
        onRevoked: (M) =>
          O((U) => {
            (k({ at: "revoked", reason: U }), M(U));
          }),
        onNotice: (M, U) => {
          ((p = U), E.publish(U, "warning"), A?.(M, U), w.emit());
        },
        onServedCall: C,
        sessionId: t.sessionId,
        manager: () => o,
      });
    return {
      feature: "tools",
      status: E,
      onSettled: (M) => {
        if ((_.subscribe(M), d.at !== "pending")) M();
      },
      onReportChanged: (M) => {
        w.subscribe(M);
      },
      sessionCallbacks: {
        ...F.callbacks,
        onWorkerGone: () => {
          (F.callbacks.onWorkerGone?.(), C.workerGone());
        },
      },
      onSession: (M) => {
        o = M.manager;
      },
      onWorkerLive: () => F.requestAnnounce("attached"),
      onStreamConnected: () => {
        if (r) F.requestAnnounce("reconnected");
        r = !0;
      },
      onWorkerInit: (M) =>
        F.requestAnnounce("worker_init", { workerEpoch: M.workerEpoch }),
      report: () => {
        let M = F.servedHost(),
          U = C.report();
        return {
          ...(d.at === "on"
            ? { state: "forwarded", source: "default" }
            : {
                state: "off",
                reason: d.at === "withdrawn" ? "serving_off" : "not_announced",
              }),
          ...(p !== void 0 && { message: an(p) }),
          facts: {
            ...(M !== void 0 && {
              host: {
                handle: M.name,
                working_dir: M.working_dir,
                platform: M.platform,
                ...(M.claude_code_version !== void 0 && {
                  cli_version: M.claude_code_version,
                }),
              },
            }),
            serving: { ...rn(d), policy: D, channel: "session" },
            ...(U !== void 0 && { calls: U }),
          },
        };
      },
      dispose: () => F.close(),
    };
  };
}
function rn(e) {
  switch (e.at) {
    case "pending":
      return { state: "pending" };
    case "on":
      return { state: "on" };
    case "withdrawn": {
      let t = remoteToolServingOffReason();
      return { state: "off", ...(t !== void 0 && { reason: t }) };
    }
    case "refused":
      return { state: "off", reason: "announce_refused" };
    case "unverified":
      return { state: "off", reason: "announce_unverified" };
    case "revoked":
      return { state: "revoked", reason: e.reason };
  }
}
function an(e) {
  if (truncateToCodeUnits(e, TRUNCATE_MAX_LENGTH) === e) return e;
  let t = truncateToCodeUnits(e, TRUNCATE_MAX_LENGTH),
    o = Math.max(
      t.lastIndexOf(" \u2014 "),
      t.lastIndexOf("; "),
      t.lastIndexOf(". "),
    ),
    r = o > 0 ? o : t.lastIndexOf(" ");
  return (r > 0 ? t.slice(0, r) : t).trimEnd();
}
function it(e) {
  logForDebugging(`[servedTools] not served over the session channel: ${e ?? "not_served"}`);
  let t = {
    state: "off",
    reason: e === "not_bound" ? "not_bound" : "not_served",
    facts: {
      serving: {
        state: "off",
        ...(e !== void 0 && { reason: e }),
        policy: remoteToolServingPolicyName(),
        channel: isSessionChannelDisabled() ? "bridge_only" : "session",
      },
    },
  };
  return { feature: "tools", report: () => t };
}
var dn = 5000;
function dt(e) {
  let t = e.enabled ?? isHookForwardingEnabled,
    o = e.setTimer ?? setUnrefTimer,
    r = e.now ?? Date.now;
  return async (d) => {
    if (!t()) return;
    let p = d.trigger === "attach";
    if (!d.bound) return se("not_bound", p);
    let _ = e.memory,
      w = e.consentDeps ?? createConsentStore(d.storageV5);
    switch (await pn(_.consentPin, w, d.signal, o)) {
      case "declined":
        return se("declined", p, "stored");
      case "aborted":
        return se("detached", p);
      case "unreadable":
        return (
          logFeatureBad("device_hooks_client_register", "consent_unreadable"),
          se("unreadable", p)
        );
      case "unset":
        return se("no_consent", p, "default");
      case "accepted":
        break;
    }
    let k = (e.launchDir ?? he)(),
      D = createStatusFeed(),
      E,
      I,
      O = null,
      A = !1,
      R = createDeviceHooksServingRuntime({
        launchDir: k,
        cloudSessionId: d.sessionId,
        memory: _,
        getTools: e.getTools,
        storageV5: d.storageV5,
        manager: () => O,
        syncRoot: () => {
          let H = d.dirSync;
          if (!H) return null;
          let { state: M } = H.sync.state();
          return M === "armed" || M === "seeding" ? H.gitRoot : null;
        },
        onLine: ({ line: H, level: M }) => {
          if (((E = H), M === "warning")) I = H;
          D.publish(H, M);
        },
        registerCleanup: e.attach?.registerCleanup ?? registerCleanup,
        subscribeSettingsChanges:
          e.attach?.subscribeSettingsChanges ?? ((H) => settingsChangeDetector.subscribe(H)),
        trustAccepted: e.attach?.trustAccepted ?? (() => isWorkspacePersistedTrusted(k)),
        ...(e.attach?.createSession && {
          createSession: e.attach.createSession,
        }),
        ...(e.attach?.createSender && { createSender: e.attach.createSender }),
        ...(e.attach?.subscribeConsent && {
          subscribeConsent: e.attach.subscribeConsent,
        }),
      });
    return {
      feature: "hooks",
      status: D,
      sessionCallbacks: R.callbacks,
      onSession(H) {
        O = H.manager;
      },
      onStreamConnected: () => R.onStreamConnected(),
      onWorkerInit: () => R.onWorkerInit(),
      onWorkerUp: () => R.onWorkerUp(),
      onTurnInFlight: () => R.onTurnInFlight(),
      onTurnEnded: () => R.onTurnEnded(),
      beforeSend: () => R.beforeSend(),
      report: () => {
        let H = R.snapshot();
        if (H.lastOutcome === "registered") I = void 0;
        return ln(H, _.senderFor(k), { line: E, warning: I }, r());
      },
      async dispose() {
        if (A) return;
        ((A = !0), R.dispose());
      },
    };
  };
}
function ln(e, t, o, r) {
  let d = cn(e, t.standing);
  if (d !== null) {
    let _ = o.warning ?? o.line;
    return {
      state: "off",
      reason: d,
      ...(d === "declined" && { source: "stored" }),
      ...(_ !== void 0 && { message: truncateToCodeUnits(_, 200) }),
    };
  }
  let p = resolveStandingLapse(t, r);
  if (p !== null)
    return { state: "idle", source: "stored", reason: p, message: un[p] };
  return {
    state: "forwarded",
    source: "stored",
    ...(o.line !== void 0 && { message: truncateToCodeUnits(o.line, 200) }),
  };
}
var un = {
  dormant:
    "Hooks from this machine are idle for this cloud session: nothing has used it for a while, so their registration was allowed to lapse; it is made again when the session is next used.",
  not_registered:
    "Hooks from this machine are not registered with this cloud session yet: it has not answered (it may be asleep); they are registered when it is next used.",
};
function cn(e, t) {
  if (e.phase === "stopped") return e.stoppedReason ?? "stopped";
  switch (e.lastOutcome) {
    case "no_consent":
    case "consent_distrusted":
    case "disabled":
    case "unsupported":
    case "invalid":
    case "nothing_to_offer":
      return e.lastOutcome;
    case "muted":
      return e.phase === "registering" ? null : "muted";
    case "unregistered":
      return t.kind === "kept_none" ? "kept_none" : "nothing_to_offer";
    case "not_ready":
    case "stale_epoch":
      return t.kind === "paused" && e.phase !== "registering" ? "paused" : null;
    case "failed":
      if (
        e.phase === "registering" ||
        e.phase === "registered" ||
        t.kind === "dormant"
      )
        return null;
      return t.kind === "paused" ? "paused" : "failed";
    case null:
    case "registered":
    case "superseded":
    case "dormant":
      return null;
  }
}
function pn(e, t, o, r) {
  if (o.aborted) return Promise.resolve("aborted");
  let d = () => {},
    p = new Promise((_) => {
      let w = () => _("unreadable"),
        C = () => _("aborted"),
        k = r(w, dn);
      (o.addEventListener("abort", C, { once: !0 }),
        (d = () => {
          (k.clear(), o.removeEventListener("abort", C));
        }),
        (e.current?.origin === "given" ? e.current.value : readConsentFromStore(t)).then(_, w));
    });
  return (p.then(() => d()), p);
}
function se(e, t, o) {
  return (
    logEvent("tengu_device_hooks_headless_off", { reason: fromEnum(e), reattach: t }),
    {
      feature: "hooks",
      report: () => ({
        state: "off",
        reason: e,
        ...(o && { source: o }),
        ...(e === "no_consent" && { message: hn }),
      }),
    }
  );
}
var hn =
  "Hooks from this machine are not used in cloud sessions yet: run /hooks in claude on this machine to decide.";
import { randomUUID as _t } from "crypto";
import { randomUUID as mn } from "crypto";
var fn = new Set([
  "answered",
  "failed_host_error",
  "failed_invalid_reply",
  "answer_failed",
]);
function lt(e) {
  return sanitizeAndTruncateText(truncateToCodeUnits(e, 64));
}
class be {
  ports;
  inFlight = new Map();
  askedOfHost = new Set();
  reaskGeneration = new Map();
  derivedIds = new Set();
  retiredIds = new Set();
  settledTotal = 0;
  tearingDown = !1;
  constructor(e) {
    this.ports = e;
  }
  get pendingCount() {
    return this.inFlight.size;
  }
  get settledCount() {
    return this.settledTotal;
  }
  passPermissionRequest(e, t, o) {
    this.pass({
      subtype: "can_use_tool",
      requestId: o,
      ask: (r, d) =>
        this.ports.io.passControlRequestToHost(t, {
          requestId: d,
          schema: permissionResultSchema(),
          signal: r,
        }),
      answer: (r) => e.respondToPermissionRequest(o, gn(r, t)),
      answerOnError: (r) =>
        e.respondToPermissionRequest(o, {
          behavior: "deny",
          message: r ? CAN_USE_TOOL_INVALID_RESULT_REASON : CAN_USE_TOOL_REQUEST_FAILED_REASON,
          toolUseID: t.tool_use_id,
        }),
    });
  }
  passUserDialogRequest(e, t, o) {
    this.pass({
      subtype: "request_user_dialog",
      requestId: o,
      ask: (r, d) =>
        this.ports.io.passControlRequestToHost(t, {
          requestId: d,
          schema: userDialogResponseSchema(),
          signal: r,
        }),
      answer: (r) => e.respondToUserDialogRequest(o, r),
      answerOnError: () =>
        e.respondToUserDialogRequest(o, { behavior: "cancelled" }),
    });
  }
  cancel(e) {
    (this.retiredIds.add(e), this.inFlight.get(e)?.abort());
  }
  reinstate(e) {
    if (
      (this.retiredIds.delete(e), this.inFlight.get(e)?.signal.aborted === !0)
    )
      this.inFlight.delete(e);
    if (this.askedOfHost.has(e))
      this.reaskGeneration.set(e, (this.reaskGeneration.get(e) ?? 0) + 1);
  }
  cancelAll() {
    this.tearingDown = !0;
    for (let e of this.inFlight.values()) e.abort();
  }
  pass({ subtype: e, requestId: t, ask: o, answer: r, answerOnError: d }) {
    if (this.tearingDown) {
      this.log(e, "teardown", this.ports.clock.now());
      return;
    }
    if (this.inFlight.has(t)) {
      this.log(e, "duplicate_ignored", this.ports.clock.now());
      return;
    }
    if (this.retiredIds.has(t) || this.derivedIds.has(t)) {
      (logForDebugging(
        `[headlessCloudClient] agent ${e} reuses finished request_id ${lt(t)}; not passed to the host again`,
        { level: "warn" },
      ),
        this.log(e, "reused_id_ignored", this.ports.clock.now()));
      return;
    }
    let p = new AbortController();
    this.inFlight.set(t, p);
    let _ = this.reaskGeneration.get(t),
      w = _ === void 0 ? t : `${t}-reask-${_}-${mn()}`;
    if (_ === void 0) this.askedOfHost.add(t);
    else this.derivedIds.add(w);
    let C = () => this.inFlight.get(t) === p && this.inFlight.delete(t),
      k = this.ports.clock.now(),
      D = !1,
      E = (I) => {
        if (((D = !0), (this.settledTotal += 1), fn.has(I)))
          this.retiredIds.add(t);
        this.log(e, I, k, _ !== void 0);
      };
    this.ports.track(
      o(p.signal, w)
        .then(
          (I) => {
            if (!C() || p.signal.aborted) {
              E("dropped");
              return;
            }
            (r(I), E("answered"));
          },
          (I) => {
            let O = C();
            if (I instanceof zi) {
              E("stream_closed");
              return;
            }
            if (I instanceof Ve) {
              E(
                !p.signal.aborted
                  ? "dropped"
                  : this.tearingDown
                    ? "teardown"
                    : "cancelled",
              );
              return;
            }
            if (!O || p.signal.aborted) {
              E("dropped");
              return;
            }
            let A = !(I instanceof Error) || I instanceof AA,
              R = A ? truncateToCodeUnits(l(I), 2000) : truncateToCodeUnits(firstLine(l(I)), 200);
            (logForDebugging(
              `[headlessCloudClient] host could not answer ${e} ${lt(t)}: ${R}`,
              { level: "error" },
            ),
              d(A),
              E(A ? "failed_invalid_reply" : "failed_host_error"));
          },
        )
        .catch((I) => {
          if ((logError(I), !D)) E("answer_failed");
        }),
    );
  }
  log(e, t, o, r = !1) {
    logEvent("tengu_remote_headless_client_agent_request", {
      subtype: fromEnum(e),
      outcome: fromEnum(t),
      latency_ms: this.ports.clock.now() - o,
      reasked: r,
    });
  }
}
function gn(e, t) {
  if (e.behavior !== "allow" || !yn(t.input)) return e;
  let o = e.updatedInput !== void 0 && Object.keys(e.updatedInput).length > 0;
  if (o && e.toolUseID !== void 0) return e;
  return (
    logForDebugging(
      `[headlessCloudClient] completing a served call's allow from the request: ${o ? "" : "updatedInput "}${e.toolUseID === void 0 ? "toolUseID" : ""}`.trimEnd(),
    ),
    {
      ...e,
      updatedInput: o ? e.updatedInput : pickAllowedToolInputProps(t.tool_name, t.input),
      toolUseID: e.toolUseID ?? t.tool_use_id,
    }
  );
}
function yn(e) {
  if (hasRequestedMachine(e)) return !0;
  if (typeof e !== "object" || e === null) return !1;
  let t = e[DEVICE_FIELD_NAME];
  return typeof t === "string" && isValidMachineName(t);
}
var ie = defineDialog({
    kind: "cloud_sync_consent",
    payload: createLazyValue(() =>
      c({
        folder: s(),
        launchFolder: s().optional(),
        title: s(),
        body: s(),
        detail: s().optional(),
        fileCount: T().int().nonnegative().optional(),
        totalBytes: T().int().nonnegative().optional(),
      }),
    ),
    result: createLazyValue(() => X(["sync", "device_tools", "not_now"])),
    default: "not_now",
    hideWhile: [],
  }),
  Sn = 1024;
function me(e) {
  return (
    e.length > 0 &&
    e.length <= Sn &&
    !/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]/u.test(
      e.replace(/[\u200C\u200D\uFE0E\uFE0F]/gu, ""),
    )
  );
}
function Re({ folder: e, launchFolder: t, upload: o }) {
  if (!me(e) || (t !== e && !me(t))) return null;
  return {
    folder: e,
    ...(t !== e && { launchFolder: t }),
    title: CLOUD_SESSION_CONSENT_MESSAGES["consent.sync.title"],
    body: CLOUD_SESSION_CONSENT_MESSAGES["consent.sync.body"],
    detail: CLOUD_SESSION_CONSENT_MESSAGES["consent.sync.detail"],
    ...(o !== void 0 && { fileCount: o.fileCount }),
    ...(o?.totalBytes !== void 0 && { totalBytes: o.totalBytes }),
  };
}
var re = defineDialog({
  kind: "unattended_serving_consent",
  payload: createLazyValue(() =>
    c({
      machineName: s(),
      title: s(),
      body: s(),
      detail: s(),
      terms: s(),
      version: T().int().nonnegative(),
    }),
  ),
  result: createLazyValue(() => X(["accept", "decline", "not_now"])),
  default: "not_now",
  hideWhile: [],
});
function ut(e) {
  return {
    machineName: e,
    title: CLOUD_SESSION_CONSENT_MESSAGES["consent.unattended.title"],
    body: CLOUD_SESSION_CONSENT_MESSAGES["consent.unattended.body.host"],
    detail: CLOUD_SESSION_CONSENT_MESSAGES["consent.unattended.detail"],
    terms: UNATTENDED_SERVING_CONSENT_TERMS,
    version: UNATTENDED_SERVING_CONSENT_VERSION,
  };
}
function Ie(e) {
  return e === ie.kind || e === CLOUD_SYNC_OFFLINE_DIALOG.kind || e === re.kind;
}
function ct({ io: e, declaredKinds: t, clock: o }) {
  return async function (d, p, _) {
    let w = o.now(),
      C = (O) => {
        logEvent("tengu_remote_headless_client_host_dialog", {
          dialog_kind: hashForTelemetry(d.kind),
          outcome: fromEnum(O),
          latency_ms: o.now() - w,
        });
      },
      k = { answer: d.default, answered: !1 };
    if (!t.has(d.kind)) return (C("undeclared"), k);
    let D = d.payload().safeParse(p);
    if (!D.success) return (C("invalid_payload"), k);
    let E;
    try {
      E = await e.requestUserDialog(d.kind, D.data, { signal: _?.signal });
    } catch (O) {
      (logForDebugging(`[headlessCloudClient] host dialog ${d.kind} failed: ${l(O)}`),
        (E = { behavior: "cancelled" }));
    }
    if (E.behavior === "cancelled") return (C("cancelled"), k);
    let I = d.result().safeParse(E.result);
    if (!I.success) return (C("invalid_result"), k);
    return (C("answered"), { answer: I.data, answered: !0 });
  };
}
import { randomUUID as _n } from "crypto";
var vn = 250,
  Cn = 1000,
  kn = 1000,
  bn = 200,
  ht = 30000,
  Rn = 200000,
  En = 2048,
  mt = {
    assistant: !0,
    user: !0,
    result: !0,
    system: !0,
    stream_event: !0,
    tool_progress: !0,
    tool_use_summary: !0,
    rate_limit_event: !0,
    prompt_suggestion: !0,
    conversation_reset: !0,
    command_lifecycle: !0,
    transcript_mirror: !1,
    auth_status: !1,
    active_goal: !1,
    autocompact_state: !1,
    keep_alive: !1,
    control_request: !1,
    control_response: !1,
    control_cancel_request: !1,
  };
function In(e) {
  return Object.hasOwn(mt, e) ? mt[e] : void 0;
}
var Dn = new Set([
  "synced_file_changed",
  "mcp_auth_required",
  "tunnel_stream_interrupted",
  "composer_notice",
  "composer_notice_dismissed",
  "workflow_launch",
  "queued_notification",
  "heartbeat_probe",
]);
function De(e) {
  return (
    e.type === "stream_event" ||
    (e.type === "system" && e.subtype === "thinking_tokens")
  );
}
class Fe {
  ceiling;
  uuids = new Set();
  constructor(e) {
    this.ceiling = e;
  }
  add(e) {
    if (this.uuids.has(e)) return;
    if (this.uuids.size >= this.ceiling) {
      let t = this.uuids.values().next().value;
      if (t !== void 0) this.uuids.delete(t);
    }
    this.uuids.add(e);
  }
  has(e) {
    return this.uuids.has(e);
  }
}
class Ae {
  ports;
  workerReady;
  holdingForInit;
  closed = !1;
  heldForInit = [];
  peerHeldForInit = 0;
  peerFramesDroppedBeforeInitCount = 0;
  maxHeldForInit = 0;
  bootstrap = null;
  emittedUuids = new Fe(Rn);
  emittedPeerUuids = new Fe(En);
  narrateAfterReady;
  stamped;
  turnCount = 0;
  initCount = 0;
  summaryWritten = !1;
  workerUps = 0;
  lastWorkerUpAt = null;
  initSinceWorkerUp = !0;
  bootCountedByFrameAt = null;
  entry;
  sessionIdChangeCount = 0;
  peerContentOmittedCount = 0;
  peerToolUseOmitted = !1;
  cloudSessionKeysDroppedCount = 0;
  serviceEventsDroppedCount = 0;
  unknownFramesDroppedCount = 0;
  synthesizedHeld = new Set();
  lastBlock = null;
  deltaSeq = 0;
  pendingDelta = null;
  connectEpoch;
  constructor(e, { entry: t, initialSessionId: o, connectEpoch: r }) {
    this.ports = e;
    ((this.entry = t),
      (this.workerReady = t === "attach"),
      (this.holdingForInit = !0),
      (this.narrateAfterReady = t === "create"),
      (this.stamped = o),
      (this.connectEpoch = r));
  }
  get stampedSessionId() {
    return this.stamped;
  }
  get turns() {
    return this.turnCount;
  }
  get maxHeld() {
    return this.maxHeldForInit;
  }
  get counts() {
    return {
      sessionIdChanges: this.sessionIdChangeCount,
      peerContentOmitted: this.peerContentOmittedCount,
      peerToolUseOmitted: this.peerToolUseOmitted,
      cloudSessionKeysDropped: this.cloudSessionKeysDroppedCount,
      serviceEventsDropped: this.serviceEventsDroppedCount,
      unknownFramesDropped: this.unknownFramesDroppedCount,
      peerFramesDroppedBeforeInit: this.peerFramesDroppedBeforeInitCount,
    };
  }
  handle(e, t) {
    if (e.type === "system" && e.subtype === "cloud_session_delta")
      return (this.cloudSessionKeysDroppedCount++, !0);
    let o = qn(e);
    if (o !== e)
      (this.cloudSessionKeysDroppedCount++,
        logForDebugging(
          `[headlessCloudClient] dropped a cloud_session key on a ${sanitizeAndTruncateText(truncateToCodeUnits(o.type, 40))} frame from source=${sanitizeAndTruncateText(truncateToCodeUnits(t.source ?? "unknown", 40))}`,
          { level: "warn" },
        ));
    if (o.type === "env_manager_log") return (this.reduceBootstrap(o), !0);
    let r = In(o.type);
    if (r === void 0) return (this.noteUnknownFrame(o.type, t.source), !1);
    if (o.type !== "user" && !De(o) && t.source === "worker") {
      if (
        (this.adoptWorkerSessionId(o),
        this.entry === "attach" &&
          this.holdingForInit &&
          (o.type === "assistant" || o.type === "result"))
      )
        this.releaseHeld();
      if (this.entry === "create" && this.workerUps === 0) {
        let d = this.ports.clock.now();
        ((this.lastWorkerUpAt = d),
          (this.initSinceWorkerUp = !1),
          (this.bootCountedByFrameAt = d),
          this.noteWorkerUp(this.bootstrap?.sessionMode ?? void 0));
      }
      this.signalWorkerReady("worker_frame");
    }
    if (
      o.type === "assistant" ||
      o.type === "stream_event" ||
      o.type === "tool_progress" ||
      (o.type === "system" &&
        o.subtype === "status" &&
        o.status === "requesting")
    )
      this.ports.onTurnInFlight?.();
    switch (o.type) {
      case "system":
        if (o.subtype === "init") {
          ((this.initCount += 1), (this.initSinceWorkerUp = !0));
          let d = getWorkerEpoch(o);
          return (
            this.ports.onWorkerInit?.({
              ordinal: this.initCount,
              sessionId: this.stamped,
              ...(d !== void 0 && { workerEpoch: d }),
            }),
            this.emitInit(o),
            !0
          );
        }
        break;
      case "result":
        if (
          ((this.turnCount += 1),
          this.ports.onTurnEnded?.(),
          (this.narrateAfterReady = !1),
          r)
        )
          this.emitAfterInit(Ln(o));
        if (
          this.entry === "attach" &&
          this.initCount === 0 &&
          t.source === "worker" &&
          !this.closed
        )
          this.holdingForInit = !0;
        return !0;
      case "user":
        return (this.handleUserFrame(o, t.source), !0);
      case "stream_event":
        if (!this.ports.includePartialMessages) return !0;
        break;
      default:
        break;
    }
    if (r) this.emitAfterInit(o);
    return !0;
  }
  noteUnknownFrame(e, t) {
    let o = Dn.has(e);
    if (o) this.serviceEventsDroppedCount++;
    else this.unknownFramesDroppedCount++;
    logForDebugging(
      `[headlessCloudClient] dropped a ${sanitizeAndTruncateText(truncateToCodeUnits(e, 40))} ${o ? "service event" : "frame this build does not write"}, from source=${sanitizeAndTruncateText(truncateToCodeUnits(t ?? "unknown", 40))}`,
      o ? void 0 : { level: "warn" },
    );
  }
  handleUserFrame(e, t) {
    let o =
      typeof e.uuid === "string"
        ? this.ports.outbound.streamEcho(e.uuid, e.message?.content)
        : { verdict: "not_own" };
    switch (o.verdict) {
      case "claim":
        this.emitAfterInit(
          o.sent === void 0
            ? { ...e, isReplay: !0, session_id: this.stamped }
            : buildReplayUserMessage(this.stamped, e.uuid, o.sent),
          { synthesized: !0, ownEcho: !0 },
        );
        return;
      case "consume":
        (this.emittedUuids.add(e.uuid.toLowerCase()),
          logForDebugging(
            `[headlessCloudClient] consumed our own echo of ${String(e.uuid)}`,
          ));
        return;
      case "peer":
        this.emitAfterInit(this.projectPeer(e, { keepUuid: !1 }), {
          peer: !0,
          synthesized: !0,
        });
        return;
      case "not_own":
        break;
    }
    if (t === "worker" || hasMachineGeneratedContent(e)) {
      this.emitAfterInit(e);
      return;
    }
    let r = typeof e.uuid === "string" ? e.uuid.toLowerCase() : "",
      d =
        r !== "" &&
        (this.emittedUuids.has(r) ||
          this.emittedPeerUuids.has(r) ||
          this.ports.outbound.wasTaken(r)),
      p = this.projectPeer(e, { keepUuid: !d });
    if ("uuid" in p && typeof p.uuid === "string")
      this.emittedPeerUuids.add(p.uuid.toLowerCase());
    this.emitAfterInit(p, { peer: !0, synthesized: !0 });
  }
  projectPeer(e, { keepUuid: t }) {
    let {
      prompt: o,
      omitted: r,
      omittedToolUse: d,
    } = Pn(e, { keepUuid: t, sessionId: this.stamped });
    return (
      (this.peerContentOmittedCount += r),
      (this.peerToolUseOmitted = this.peerToolUseOmitted || d),
      o
    );
  }
  writeOwnEcho(e, { duplicate: t = !1 } = {}) {
    this.emitAfterInit(e, { synthesized: !0, ownEcho: !0, sessionPast: t });
  }
  rememberEmittedUuid(e) {
    if (!De(e) && "uuid" in e && typeof e.uuid === "string")
      this.emittedUuids.add(e.uuid.toLowerCase());
  }
  close() {
    if (this.pendingDelta !== null)
      (this.cancelPendingDelta(), this.writeDelta());
    ((this.closed = !0), this.releaseHeld());
  }
  releaseHeld() {
    this.holdingForInit = !1;
    let e = this.heldForInit;
    ((this.heldForInit = []),
      (this.peerHeldForInit = 0),
      e.forEach((t) =>
        this.ports.emit(
          t.type === "user" && this.synthesizedHeld.has(t)
            ? { ...t, session_id: this.stamped }
            : t,
        ),
      ),
      this.synthesizedHeld.clear());
  }
  startCcCountsAsWorkerUp(e) {
    return (
      this.lastWorkerUpAt === null ||
      this.initSinceWorkerUp ||
      e - this.lastWorkerUpAt >= ht
    );
  }
  noteWorkerUp(e) {
    ((this.workerUps += 1),
      this.ports.onWorkerUp?.({
        generation: this.workerUps,
        ...(e !== void 0 && { sessionMode: e }),
      }));
  }
  signalWorkerReady(e) {
    if (this.workerReady) return;
    ((this.workerReady = !0), this.ports.onWorkerReady(e));
  }
  emitAfterInit(
    e,
    {
      peer: t = !1,
      synthesized: o = !1,
      ownEcho: r = !1,
      sessionPast: d = !1,
    } = {},
  ) {
    if (!t) this.rememberEmittedUuid(e);
    let p =
      (e.type === "system" && e.subtype === "informational") ||
      (this.entry === "attach" && (!r || d));
    if (!this.holdingForInit || p) {
      this.ports.emit(e);
      return;
    }
    if (De(e)) return;
    if (t) {
      if (this.peerHeldForInit >= bn) {
        this.peerFramesDroppedBeforeInitCount += 1;
        return;
      }
      this.peerHeldForInit += 1;
    } else if (this.heldForInit.length - this.peerHeldForInit >= kn) {
      (this.releaseHeld(), this.ports.emit(e));
      return;
    }
    if ((this.heldForInit.push(e), o)) this.synthesizedHeld.add(e);
    this.maxHeldForInit = Math.max(
      this.maxHeldForInit,
      this.heldForInit.length,
    );
  }
  emitInit(e) {
    let t = this.ports.cloudSession(),
      o = t === void 0 ? void 0 : Me(t);
    if ((this.rememberEmittedUuid(e), this.cancelPendingDelta(), o !== void 0))
      this.lastBlock = gt(o);
    if (
      (this.ports.emit({ ...e, cloud_session: o }),
      this.writeSummaryFrom(o),
      this.holdingForInit)
    )
      this.releaseHeld();
  }
  noteCloudSessionChanged() {
    if (this.closed || this.initCount === 0) return;
    let e = this.ports.clock.now(),
      t = this.pendingDelta?.since ?? e;
    this.pendingDelta?.cancel();
    let o = Math.max(0, Math.min(vn, t + Cn - e));
    this.pendingDelta = {
      since: t,
      cancel: this.ports.clock.setTimeout(() => {
        ((this.pendingDelta = null), this.writeDelta());
      }, o),
    };
  }
  cancelPendingDelta() {
    (this.pendingDelta?.cancel(), (this.pendingDelta = null));
  }
  writeDelta() {
    let e = this.ports.cloudSession();
    if (e === void 0 || this.lastBlock === null) return;
    let t = Me(e),
      o = gt(t),
      r = this.lastBlock,
      d = dedupe([...r.keys(), ...o.keys()]).filter((p) => r.get(p) !== o.get(p));
    if (d.length === 0) return;
    ((this.lastBlock = o),
      (this.deltaSeq += 1),
      this.ports.emit({
        type: "system",
        subtype: "cloud_session_delta",
        seq: this.deltaSeq,
        changed: d,
        cloud_session: t,
        uuid: _n(),
        session_id: this.stamped,
      }));
  }
  offerSummary() {
    if (this.summaryWritten || this.initCount === 0) return;
    let e = this.ports.cloudSession();
    if (e !== void 0) this.writeSummaryFrom(Me(e));
  }
  writeSummaryFrom(e) {
    if (this.summaryWritten || e === void 0) return;
    let t = this.ports.summaryLine?.(e);
    if (t !== void 0 && t !== "")
      ((this.summaryWritten = !0),
        this.ports.emit(buildInformationalSystemMessage(this.stamped, "notice", t)));
  }
  adoptWorkerSessionId(e) {
    if (e.type === "user" || !("session_id" in e)) return;
    let t = Xn(e.session_id) === null ? null : e.session_id.toLowerCase();
    if (t === null || t === this.stamped.toLowerCase()) return;
    ((this.sessionIdChangeCount += 1),
      (this.stamped = t),
      this.ports.onWorkerSessionId(t));
  }
  reduceBootstrap(e) {
    let t = this.ports.clock.now(),
      o = parseBootstrapStepMeta(e);
    if (o.stepId === "start_cc" && o.stepStatus === "completed" && !isStaleBootstrapFrame(e, t)) {
      let k =
        this.bootCountedByFrameAt !== null &&
        t - this.bootCountedByFrameAt < ht;
      if (
        ((this.bootCountedByFrameAt = null),
        !k && this.startCcCountsAsWorkerUp(t))
      )
        ((this.lastWorkerUpAt = t),
          (this.initSinceWorkerUp = !1),
          this.noteWorkerUp(this.bootstrap?.sessionMode ?? void 0));
    }
    if (
      this.entry === "attach" &&
      this.holdingForInit &&
      o.stepId !== null &&
      o.stepStatus === "failed"
    )
      this.releaseHeld();
    if (this.workerReady && !this.narrateAfterReady) return;
    let r =
      this.bootstrap !== null &&
      this.bootstrap.hasStructuredSteps &&
      !this.bootstrap.terminal;
    if (this.workerReady && !r && isStaleBootstrapFrame(e, t)) return;
    let d = this.bootstrap !== null,
      p = this.bootstrap ?? createRemoteBootstrapState(this.connectEpoch),
      _ = reduceRemoteBootstrapState(p, e, "", t, this.connectEpoch);
    if (
      ((this.bootstrap = _),
      this.ports.onProvisioning?.(_, d ? p : null),
      _.terminal || _.steps.some((k) => k.status === "failed"))
    )
      this.narrateAfterReady = !1;
    if (this.workerReady) return;
    let { stepId: w, stepStatus: C } = parseBootstrapStepMeta(e);
    if (w !== null && C === "failed") {
      (this.releaseHeld(),
        this.ports.outbound.failQueued(
          "the cloud container failed to start",
          "step_failed",
        ),
        this.signalWorkerReady("step_failed"));
      return;
    }
    if (w === "start_cc" && C === "completed")
      this.signalWorkerReady("start_cc");
  }
}
function Pn(e, { keepUuid: t, sessionId: o }) {
  let r = t && typeof e.uuid === "string" ? Xn(e.uuid) : null,
    { content: d, omitted: p, omittedToolUse: _ } = Mn(e.message?.content);
  return {
    prompt: {
      type: "user",
      ...(r !== null && { uuid: r }),
      session_id: o,
      message: { role: "user", content: d },
      parent_tool_use_id: null,
      ...(Hn(e.timestamp) && { timestamp: e.timestamp }),
    },
    omitted: p,
    omittedToolUse: _,
  };
}
var Oe = "[unsupported content from another client omitted]",
  On = ["image/jpeg", "image/png", "image/gif", "image/webp"];
function Mn(e) {
  if (typeof e === "string")
    return { content: e, omitted: 0, omittedToolUse: !1 };
  if (!Array.isArray(e))
    return {
      content: [{ type: "text", text: Oe }],
      omitted: 1,
      omittedToolUse: ft(e),
    };
  let t = e,
    o = t.some(ft);
  if (Fn(t))
    return {
      content: [{ type: "text", text: Oe }],
      omitted: t.length,
      omittedToolUse: o,
    };
  let r = t.flatMap((p) => {
      if (typeof p !== "object" || p === null || !("type" in p)) return [];
      if (p.type === "text" && "text" in p && typeof p.text === "string")
        return [{ type: "text", text: p.text }];
      let _ = p.type === "image" ? An(p) : null;
      return _ === null ? [] : [{ type: "image", source: _ }];
    }),
    d = t.length - r.length;
  return {
    content: d > 0 ? [...r, { type: "text", text: Oe }] : r,
    omitted: d,
    omittedToolUse: o,
  };
}
function ft(e) {
  return (
    typeof e === "object" && e !== null && "type" in e && e.type === "tool_use"
  );
}
function Fn(e) {
  let t = e.flatMap((o) =>
    typeof o === "object" &&
    o !== null &&
    "type" in o &&
    o.type === "text" &&
    "text" in o &&
    typeof o.text === "string"
      ? [o.text]
      : [],
  );
  return (
    t.length > 1 &&
    [
      "",
      `
`,
      " ",
    ].some((o) => hasMachineGeneratedContent({ message: { content: t.join(o) } }))
  );
}
function An(e) {
  let t = "source" in e ? e.source : void 0;
  if (
    typeof t !== "object" ||
    t === null ||
    !("type" in t) ||
    t.type !== "base64" ||
    !("data" in t) ||
    typeof t.data !== "string"
  )
    return null;
  let o = On.find((r) => "media_type" in t && t.media_type === r);
  return o === void 0 ? null : { type: "base64", media_type: o, data: t.data };
}
function Hn(e) {
  return (
    typeof e === "string" &&
    e.length <= 40 &&
    /^\d{4}-\d{2}-\d{2}T[\d:.]+(Z|[+-]\d{2}:?\d{2})?$/.test(e) &&
    !Number.isNaN(Date.parse(e))
  );
}
function qn(e) {
  if (!Object.hasOwn(e, "cloud_session")) return e;
  let { cloud_session: t, ...o } = e;
  return o;
}
function gt(e) {
  return new Map(
    Object.entries(e).flatMap(([t, o]) => (o === void 0 ? [] : [[t, jsonStringify(o)]])),
  );
}
function Me(e) {
  let t = e.id.startsWith("cse_") ? `session_${sessionIdBody(e.id)}` : e.id,
    o = e.directory_sync;
  return {
    ...e,
    id: t,
    device:
      e.device.status === "unbound"
        ? {
            ...e.device,
            reason: truncateSanitizedTextShort(e.device.reason),
            message: truncateSanitizedTextShort(e.device.message),
          }
        : {
            ...e.device,
            ...(e.device.display_name !== void 0 && {
              display_name: truncateSanitizedTextShort(e.device.display_name),
            }),
          },
    directory_sync: {
      state: o.state,
      ...(o.reason !== void 0 && { reason: truncateSanitizedTextShort(o.reason) }),
      ...(o.message !== void 0 && { message: truncateSanitizedTextShort(o.message) }),
      ...(o.first_upload !== void 0 && { first_upload: o.first_upload }),
      ...(o.synced_files !== void 0 && { synced_files: o.synced_files }),
      ...(o.other_window !== void 0 && { other_window: o.other_window }),
      ...(o.started_from_upload !== void 0 && {
        started_from_upload: o.started_from_upload,
      }),
      ...(o.direction !== void 0 && { direction: o.direction }),
      file_mode: o.file_mode,
      file_mode_source: o.file_mode_source,
    },
    ...(e.host !== void 0 && {
      host: {
        handle: truncateSanitizedTextShort(e.host.handle),
        working_dir: truncateSanitizedTextShort(e.host.working_dir),
        platform: truncateSanitizedTextShort(e.host.platform),
        ...(e.host.cli_version !== void 0 && {
          cli_version: truncateSanitizedTextShort(e.host.cli_version),
        }),
      },
    }),
    ...(e.serving !== void 0 && {
      serving: {
        state: e.serving.state,
        ...(e.serving.reason !== void 0 && { reason: e.serving.reason }),
        policy: e.serving.policy,
        channel: e.serving.channel,
      },
    }),
    ...(e.calls !== void 0 && {
      calls: {
        live: e.calls.live.map((r) => ({
          call_id: r.call_id,
          tool: truncateSanitizedTextShort(r.tool),
          state: r.state,
          since: r.since,
          ...(r.ask_id !== void 0 && { ask_id: r.ask_id }),
          ...(r.lapses_at !== void 0 && { lapses_at: r.lapses_at }),
        })),
        recent: e.calls.recent.map((r) => ({
          call_id: r.call_id,
          tool: truncateSanitizedTextShort(r.tool),
          ended: r.ended,
          ...(r.code !== void 0 && { code: truncateSanitizedTextShort(r.code) }),
          at: r.at,
        })),
      },
    }),
    ...Un(e),
  };
}
function Un(e) {
  let t = e;
  return Object.fromEntries(
    pe.flatMap((o) => {
      let r = t[o];
      if (typeof r !== "object" || r === null) return [];
      let { state: d, source: p, reason: _, message: w } = r;
      return [
        [
          o,
          {
            ...(typeof d === "string" && { state: truncateSanitizedTextShort(d) }),
            ...(typeof p === "string" && { source: truncateSanitizedTextShort(p) }),
            ...(typeof _ === "string" && { reason: truncateSanitizedTextShort(_) }),
            ...(typeof w === "string" && { message: truncateSanitizedTextShort(w) }),
          },
        ],
      ];
    }),
  );
}
function Ln(e) {
  if (e.type !== "result" || !("errors" in e)) return e;
  let t = e.errors;
  if (!Array.isArray(t)) return e;
  let o = t.filter(
    (r) => !(typeof r === "string" && r.startsWith("[ede_diagnostic]")),
  );
  return o.length === t.length ? e : { ...e, errors: o };
}
var Nn = 60000,
  Bn = 1000,
  Wn = 75,
  jn = 2048;
class Te {
  ports;
  options;
  cancelWatchdog = null;
  cancelStall = null;
  unsubscribeStatus = [];
  compacting = !1;
  workerReady = !1;
  title = "none";
  titleSet = Promise.resolve();
  stopped = !1;
  lastLine = null;
  lastProvisioningLine = "";
  watchdogFires = 0;
  linesWritten = 0;
  linesSuppressed = 0;
  constructor(e, t) {
    this.ports = e;
    this.options = t;
  }
  get stats() {
    return {
      watchdog_fires: this.watchdogFires,
      title: this.options.titleFromFirstMessage ? this.title : "not_applicable",
      lines_written: this.linesWritten,
      lines_suppressed: this.linesSuppressed,
    };
  }
  armStallWarning() {
    (this.cancelStall?.(),
      (this.cancelStall = this.ports.clock.setTimeout(() => {
        if (((this.cancelStall = null), this.workerReady || this.stopped))
          return;
        let e = this.ports.queuedSendCount();
        if (e === 0) {
          this.armStallWarning();
          return;
        }
        (logEvent("tengu_remote_headless_client_bootstrap_stalled", { queued: e }),
          this.line(
            "warning",
            "Still waiting for the cloud session to start; what you sent will be delivered when it is ready.",
          ));
      }, Nn)));
  }
  noteWorkerReady() {
    ((this.workerReady = !0), this.cancelStall?.(), (this.cancelStall = null));
  }
  attachStatusFeeds(e, t) {
    let o = ({ line: r, level: d }) => {
      switch (d) {
        case "debug":
        case "progress":
          logForDebugging(`[headlessCloudClient] ${d}: ${r}`);
          return;
        case "info":
          this.line("notice", r);
          return;
        case "warning":
          this.line("warning", r);
          return;
        default:
      }
    };
    for (let r of e) {
      if (r === void 0) continue;
      ((this.unsubscribeStatus = [
        ...this.unsubscribeStatus,
        r.subscribe((d) => {
          (o(d), t?.());
        }),
      ]),
        r.takeBacklog().forEach(o));
    }
  }
  noteProvisioning(e, t) {
    let o = e.steps.findLast(
      (p) =>
        p.status === "running" &&
        isBootstrapStepId(p.id) &&
        t?.steps.find((_) => _.id === p.id)?.status !== "running",
    );
    if (o !== void 0) {
      let p = formatBootstrapStepLabel(o, e.sessionMode);
      if (p !== this.lastProvisioningLine)
        ((this.lastProvisioningLine = p), this.line("notice", `${p}\u2026`));
    }
    let r = e.steps.some((p) => p.status === "failed"),
      d = t?.steps.some((p) => p.status === "failed") ?? !1;
    if (r && !d) {
      if (!this.workerReady)
        (this.cancelStall?.(),
          (this.cancelStall = null),
          this.line("warning", "The cloud session failed to start."));
      return;
    }
    if (e.terminal && !(t?.terminal ?? !1))
      ((this.lastProvisioningLine = ""), this.line("notice", formatRemoteSessionSummary(e)));
  }
  noteDelivered(e) {
    this.maybeTitle(e);
  }
  noteSendOk({ afterStop: e }) {
    if (!this.workerReady || this.stopped || !e) return;
    this.armWatchdog();
  }
  noteInbound(e) {
    if ((this.clearWatchdog(), e.type === "system" && e.subtype === "status"))
      this.compacting = e.status === "compacting";
    else if (
      e.type === "result" ||
      (e.type === "system" && e.subtype === "compact_boundary")
    )
      this.compacting = !1;
  }
  noteInterrupt() {
    this.clearWatchdog();
  }
  halt() {
    (this.clearWatchdog(), this.cancelStall?.(), (this.cancelStall = null));
  }
  async stop() {
    if (this.stopped) return;
    ((this.stopped = !0),
      this.clearWatchdog(),
      this.cancelStall?.(),
      (this.cancelStall = null),
      this.unsubscribeStatus.forEach((r) => r()),
      (this.unsubscribeStatus = []));
    let { sessionId: e, api: t, essentialTrafficOnly: o } = this.ports;
    await Promise.allSettled([
      ...(o ? [] : [t.markSessionRead(e)]),
      this.titleSet,
    ]);
  }
  armWatchdog() {
    this.clearWatchdog();
    let e = getResponseTimeoutMs(this.compacting);
    this.cancelWatchdog = this.ports.clock.setTimeout(() => {
      if (((this.cancelWatchdog = null), this.stopped)) return;
      ((this.watchdogFires += 1),
        logEvent("tengu_remote_headless_client_watchdog_fired", {
          timeout: fromEnum(this.compacting ? "compacting" : "response"),
        }),
        logForDebugging("[headlessCloudClient] response timeout; reconnecting"),
        this.line("warning", CLOUD_SESSION_UNRESPONSIVE_MESSAGE),
        this.ports.reconnect());
    }, e);
  }
  clearWatchdog() {
    (this.cancelWatchdog?.(), (this.cancelWatchdog = null));
  }
  maybeTitle(e) {
    if (
      this.stopped ||
      !this.options.titleFromFirstMessage ||
      this.title !== "none"
    )
      return;
    if (this.ports.essentialTrafficOnly) {
      this.title = "skipped";
      return;
    }
    let t =
        typeof e === "string"
          ? e
          : e
              .flatMap((r) =>
                typeof r === "object" &&
                r !== null &&
                r.type === "text" &&
                typeof r.text === "string"
                  ? [r.text]
                  : [],
              )
              .join(" "),
      o = truncateToWidth(sanitizeAndTruncateText(truncateToCodeUnits(t, jn)), Wn);
    if (o === "") {
      this.title = "skipped";
      return;
    }
    ((this.title = "set"),
      (this.titleSet = this.ports.api
        .updateSessionTitle(this.ports.sessionId, o)
        .catch(() => !1)
        .then((r) => {
          if (!r) this.title = "failed";
        })));
  }
  line(e, t) {
    if (this.stopped) return;
    let o = sanitizeAndTruncateText(t);
    if (o === "") return;
    let r = this.ports.clock.now();
    if (
      this.lastLine !== null &&
      this.lastLine.level === e &&
      this.lastLine.text === o &&
      r - this.lastLine.at < Bn
    ) {
      this.linesSuppressed += 1;
      return;
    }
    ((this.lastLine = { level: e, text: o, at: r }),
      (this.linesWritten += 1),
      this.ports.emit(buildInformationalSystemMessage(this.ports.stampedSessionId(), e, o)));
  }
}
import { randomUUID as zn } from "crypto";
function W(e, t, o) {
  return withDeadline(t, o, (r, d) => e.setTimeout(r, d));
}
var Kn = 3000,
  $n = 256,
  Qn = createLazyValue(() =>
    c({
      cancelled: v(s())
        .optional()
        .catch(void 0),
    }),
  );
class He {
  ports;
  pendingInterrupt = null;
  announcedCancelled = new Set();
  issued = Promise.resolve();
  lastReceipt = Promise.resolve();
  constructor(e) {
    this.ports = e;
  }
  get interruptIssued() {
    return this.issued;
  }
  handleControlRequest(e) {
    let t = "request_id" in e ? e.request_id : void 0,
      o = "request" in e ? e.request : void 0;
    if (typeof t !== "string" || typeof o !== "object" || o === null)
      return (
        logForDebugging(
          "[headlessCloudClient] dropping control_request without request_id or request",
        ),
        "dropped"
      );
    let r = o,
      { route: d, telemetrySubtype: p } = routeCloudControlRequest(r, {
        strict: this.ports.initializePolicy === "strict",
      });
    switch (d.kind) {
      case "reject":
        return (
          this.ports.emit(buildControlErrorResponse(t, d.error)),
          this.log(p, "rejected"),
          "rejected"
        );
      case "forward": {
        let _ = this.ports.outbound.submit({
          kind: "control",
          request: r,
          hostRequestId: t,
          holdsLaterSends: d.holdsLaterSends,
          telemetrySubtype: p,
        });
        return (
          this.ports.requestOpen(null),
          _ === "refused" ? "rejected" : "forwarded"
        );
      }
      case "local":
        switch (d.handler) {
          case "initialize":
            return (this.handleInitialize(t, r), "local");
          case "interrupt":
            return (
              this.handleInterrupt(t, r),
              this.ports.requestOpen(null),
              "local"
            );
          case "end_session":
            return (
              this.ports.emit(buildControlSuccessResponse(t, {})),
              this.ports.end({ reason: "end_session" }),
              this.log("end_session", "local"),
              "local"
            );
          case "cancel_async_message":
            return (
              this.handleCancelAsyncMessage(t, r),
              this.ports.requestOpen(null),
              "local"
            );
        }
    }
  }
  handleCancelRequest(e) {
    this.ports.outbound.cancelForward(
      "request_id" in e ? e.request_id : void 0,
    );
  }
  handleInitialize(e, t) {
    let o = !this.ports.openRequested(),
      { hooks: r, sdkMcpServers: d, sdkMcpServerConfigs: p, ..._ } = t,
      w = initializeRequestSchema().safeParse(_),
      C = validateCloudInitializeOptions(
        t,
        this.ports.initializePolicy,
        o && w.success ? this.ports.openingInitializeHonours : void 0,
      );
    if (
      C.outcome !== "reject" &&
      o &&
      !w.success &&
      this.ports.initializePolicy === "strict"
    ) {
      (this.ports.emit(
        buildControlErrorResponse(
          e,
          "the initialize request could not be read (it does not match the control schema), so its options cannot be applied to a cloud session; nothing was started",
        ),
      ),
        this.ports.end({
          reason: "rejected_options",
          message:
            "the initialize request could not be read (it does not match the control schema), so its options cannot be applied to a cloud session; nothing was started",
        }),
        this.log("initialize", "rejected"));
      return;
    }
    if (C.outcome === "reject") {
      if ((this.ports.emit(buildControlErrorResponse(e, C.error)), o))
        this.ports.end({ reason: "rejected_options", message: C.error });
      this.log("initialize", "rejected");
      return;
    }
    if (
      (this.ports.emit(
        buildControlSuccessResponse(e, {
          ...buildInitializeSuccessFields(this.ports.account()),
          ...(C.ignored.includes("hooks") && { hooks_applied: !1 }),
          ...(C.ignored.includes("plugins") && { plugins_applied: !1 }),
        }),
      ),
      !w.success)
    )
      logForDebugging(
        "[headlessCloudClient] initialize did not match its schema; opening the session without host options",
      );
    (this.ports.requestOpen(w.success ? w.data : null),
      logEvent("tengu_remote_headless_client_host_request", {
        subtype: fromEnum("initialize"),
        outcome: fromEnum("local"),
        ignored_count: C.ignored.length + this.ports.ignoredOptionsCount,
      }));
  }
  handleInterrupt(e, t) {
    let o = "cancel_queued" in t && t.cancel_queued === !0,
      r = this.ports.pendingSeededPromptUuid(),
      d = o ? this.ports.outbound.withdrawQueuedSends() : [],
      p = [
        ...(r === void 0 ? [] : [r]),
        ...this.ports.outbound.sendUuidsInFlight(),
        ...(o ? [] : this.ports.outbound.queuedSendUuids()),
      ];
    (this.ports.onInterrupt?.(),
      this.ports.emit(
        buildControlSuccessResponse(e, o ? { still_queued: p, cancelled: d } : { still_queued: p }),
      ));
    let _ = this.ports.liveSession();
    if (_ === null) {
      ((this.pendingInterrupt = Yn(this.pendingInterrupt, t)),
        this.log("interrupt", "queued"));
      return;
    }
    (this.dispatchInterrupt(_.manager, t), this.log("interrupt", "forwarded"));
  }
  async sendPendingInterrupt(e) {
    let t = this.takePendingInterrupt();
    if (t === null) return;
    this.dispatchInterrupt(e, t);
    let o = W(this.ports.clock, this.lastReceiptAfterIssue().catch(Gn), Kn);
    (this.ports.outbound.holdLaterSendsBehind(o), await o);
  }
  async issuePendingInterrupt(e) {
    let t = this.takePendingInterrupt();
    if (t === null) return;
    (this.dispatchInterrupt(e, t), await this.issued);
  }
  takePendingInterrupt() {
    let e = this.pendingInterrupt;
    if (
      ((this.pendingInterrupt = null),
      e !== null && !this.ports.interruptMattersBeforeLive())
    )
      return (
        logEvent("tengu_remote_headless_client_interrupt_receipt", {
          outcome: fromEnum("nothing_to_stop"),
        }),
        null
      );
    return e;
  }
  async lastReceiptAfterIssue() {
    (await this.issued, await this.lastReceipt);
  }
  dispatchInterrupt(e, t) {
    let o = this.ports.clock.now(),
      r = !("cancel_queued" in t && t.cancel_queued === !0);
    ((this.issued = this.ports.track(
      e.releaseHeldSends(void 0, { keepWithheld: r }).then(
        () => {
          this.lastReceipt = e.sendControlRequest(t).then(
            (d) => {
              this.logInterruptReceipt("ok", o, this.announceSweptByWorker(d));
            },
            (d) => {
              let p = classifyRemoteControlError(d) === "not_connected";
              this.logInterruptReceipt(p ? "not_sent" : "error", o);
            },
          );
        },
        (d) => {
          (logForDebugging(`[headlessCloudClient] interrupt not dispatched: ${l(d)}`),
            this.logInterruptReceipt("not_sent", o));
        },
      ),
    )),
      this.ports.outbound.holdLaterSendsBehind(this.issued));
  }
  logInterruptReceipt(e, t, o) {
    logEvent("tengu_remote_headless_client_interrupt_receipt", {
      outcome: fromEnum(e),
      latency_ms: this.ports.clock.now() - t,
      ...(o !== void 0 && { swept_announced: o }),
    });
  }
  announceSweptByWorker(e) {
    let t = parseThinClientReply("interrupt", Qn(), e ?? {})?.cancelled ?? [],
      o = dedupe(t)
        .filter((r) => Xn(r) !== null && !this.announcedCancelled.has(r))
        .slice(0, $n);
    return (
      o.forEach((r) => {
        this.announcedCancelled.add(r);
        try {
          this.ports.emit({
            type: "command_lifecycle",
            command_uuid: r,
            state: "cancelled",
            uuid: zn(),
            session_id: this.ports.stampedSessionId(),
          });
        } catch (d) {
          logForDebugging(
            `[headlessCloudClient] could not announce a swept command: ${l(d)}`,
          );
        }
      }),
      o.length
    );
  }
  handleCancelAsyncMessage(e, t) {
    let o =
        t.subtype === "cancel_async_message" &&
        typeof t.message_uuid === "string"
          ? { ...t, message_uuid: t.message_uuid.toLowerCase() }
          : t,
      r = "message_uuid" in o ? o.message_uuid : void 0;
    if (this.ports.outbound.withdrawQueuedSend(r)) {
      (this.ports.emit(buildControlSuccessResponse(e, { cancelled: !0 })),
        this.log("cancel_async_message", "local"));
      return;
    }
    this.ports.outbound.submit({
      kind: "control",
      request: o,
      hostRequestId: e,
      holdsLaterSends: !1,
      telemetrySubtype: "cancel_async_message",
    });
  }
  log(e, t) {
    logEvent("tengu_remote_headless_client_host_request", {
      subtype: fromEnum(e),
      outcome: fromEnum(t),
    });
  }
}
function Gn() {}
function Yn(e, t) {
  return e !== null &&
    "cancel_queued" in e &&
    e.cancel_queued === !0 &&
    t.subtype === "interrupt"
    ? { ...t, cancel_queued: !0 }
    : t;
}
import { isDeepStrictEqual } from "util";
class qe {
  cap;
  replay;
  entries = new Map();
  constructor(e, t) {
    this.cap = e;
    this.replay = t;
  }
  get size() {
    return this.entries.size;
  }
  phaseOf(e) {
    return this.entries.get(e)?.phase;
  }
  wasTaken(e) {
    let t = this.phaseOf(e);
    return (
      t === "queued" || t === "posting" || t === "delivered" || t === "seeded"
    );
  }
  seed(e, t, o) {
    let r = this.entries.get(e),
      d =
        r !== void 0 && r.owed > 0 && r.content !== void 0
          ? [{ uuid: e, content: r.content }]
          : [],
      p = o && t !== void 0;
    return [
      ...this.set(e, {
        kind: "message",
        phase: "seeded",
        content: t ?? r?.content,
        stored: p ? t : void 0,
        owed: this.replay && !p ? 1 : 0,
        pendingEchoes: p ? 0 : 1,
        delivered: !0,
        echoMayBeLost: !1,
        hadBefore: !1,
      }),
      ...d,
      ...(p && this.replay ? [{ uuid: e, content: t }] : []),
    ];
  }
  accept(e, t, o) {
    let r = this.entries.get(e),
      d = this.replay && t === "message" ? 1 : 0;
    return (
      this.entries.delete(e),
      this.set(e, {
        kind: t,
        phase: "queued",
        content: o,
        stored: void 0,
        owed: (r?.owed ?? 0) + d,
        pendingEchoes: r?.pendingEchoes ?? 0,
        delivered: !1,
        echoMayBeLost: r?.echoMayBeLost ?? !1,
        hadBefore: !1,
      })
    );
  }
  withdraw(e) {
    let t = this.entries.get(e);
    if (t === void 0) return;
    if (t.phase === "posting") {
      if (((t.pendingEchoes = Math.max(0, t.pendingEchoes - 1)), t.delivered)) {
        t.phase = "delivered";
        return;
      }
    }
    ((t.phase = "withdrawn"), (t.owed = Math.max(0, t.owed - 1)));
  }
  giveUp(e) {
    let t = this.entries.get(e);
    if (t === void 0) return { echo: !1 };
    return ((t.phase = "given_up"), { echo: this.takeOwed(t) });
  }
  postStart(e) {
    let t = this.entries.get(e);
    if (t === void 0) return;
    if (((t.phase = "posting"), t.kind === "message")) t.pendingEchoes += 1;
  }
  hadBefore(e) {
    return this.entries.get(e)?.hadBefore ?? !1;
  }
  postOk(e, t) {
    let o = this.entries.get(e);
    if (o === void 0) return { echo: !1 };
    if (((o.phase = "delivered"), (o.delivered = !0), t === "duplicate"))
      o.hadBefore = !0;
    if (t === "never") o.pendingEchoes = 0;
    if (t !== "streams") o.stored ??= o.content;
    return t !== "streams" || o.echoMayBeLost
      ? { echo: this.takeOwed(o) }
      : { echo: !1 };
  }
  postFail(e, t) {
    let o = this.entries.get(e);
    if (o === void 0) return { echo: !1, error: !0 };
    if (o.delivered) return ((o.phase = "delivered"), { echo: !1, error: !1 });
    if (((o.phase = "failed"), !t))
      o.pendingEchoes = Math.max(0, o.pendingEchoes - 1);
    return { echo: this.takeOwed(o), error: !0 };
  }
  streamEcho(e, t) {
    let o = this.entries.get(e);
    if (o === void 0 || o.kind !== "message")
      return { verdict: "not_own", dequeue: !1 };
    if (o.pendingEchoes > 0) {
      ((o.pendingEchoes = 0), (o.echoMayBeLost = !1), (o.stored = t));
      let d = o.phase === "queued";
      if (((o.delivered = !0), o.phase !== "posting" && o.phase !== "seeded"))
        o.phase = "delivered";
      if (o.owed > 0)
        return (
          (o.owed -= 1),
          { verdict: "claim", sent: o.content, dequeue: d }
        );
      return { verdict: "consume", dequeue: d };
    }
    return {
      verdict:
        o.delivered && o.owed === 0 && o.stored !== void 0 && isDeepStrictEqual(t, o.stored)
          ? "consume"
          : "peer",
      dequeue: !1,
    };
  }
  settleOwed() {
    return [...this.entries].flatMap(([e, t]) => {
      if (
        (t.phase !== "delivered" && t.phase !== "seeded") ||
        t.owed === 0 ||
        t.content === void 0
      )
        return [];
      return ((t.owed -= 1), [{ uuid: e, content: t.content }]);
    });
  }
  truncation() {
    return [...this.entries].flatMap(([e, t]) => {
      if (t.pendingEchoes === 0) return [];
      if (((t.echoMayBeLost = !0), t.owed === 0 || t.content === void 0))
        return [];
      return ((t.owed -= 1), [{ uuid: e, content: t.content }]);
    });
  }
  takeOwed(e) {
    if (e.owed === 0) return !1;
    return ((e.owed -= 1), !0);
  }
  set(e, t) {
    let o =
      !this.entries.has(e) && this.entries.size >= this.cap
        ? this.evictOne()
        : [];
    return (this.entries.set(e, t), o);
  }
  evictOne() {
    let e = (w) => w.phase === "queued" || w.phase === "posting",
      t = (w) => !e(w) && w.owed === 0 && w.pendingEchoes === 0,
      o = (w) => !e(w) && w.owed === 0,
      r = (w) => !e(w),
      d = this.oldestWhere(t) ?? this.oldestWhere(o) ?? this.oldestWhere(r);
    if (d === null) return [];
    let [p, _] = d;
    return (
      this.entries.delete(p),
      _.owed > 0 && _.content !== void 0
        ? [{ uuid: p, content: _.content }]
        : []
    );
  }
  oldestWhere(e) {
    return [...this.entries].find(([, t]) => e(t)) ?? null;
  }
}
var Jn = "Your message was not delivered to the cloud session",
  es = 60000,
  de = "the cloud client closed before this request completed",
  Ue =
    "every content block must be an object, and a text block must carry string text",
  xe = "the cloud client closed before the send was confirmed";
class Ne {
  ports;
  queueCap;
  queue = [];
  flushing = !1;
  closedWhy = null;
  closedCause = null;
  laterSendsHold = Promise.resolve();
  ledger;
  postsInFlight = new Set();
  forwardsInFlight = new Map();
  sendOutstanding = !1;
  outstandingSend = Promise.resolve();
  forwardsWaiting = new Map();
  renewalParked = new Set();
  sendCount = 0;
  forwardCount = 0;
  maxQueued = 0;
  constructor(e, t) {
    this.ports = e;
    this.queueCap = t;
    this.ledger = new qe(t * 4 + 8, e.replayUserMessages);
  }
  get queuedCount() {
    return this.queue.length + this.forwardsWaiting.size;
  }
  get isFlushing() {
    return this.flushing;
  }
  get stats() {
    return {
      sends: this.sendCount,
      forwards: this.forwardCount,
      maxQueued: this.maxQueued,
    };
  }
  noteOwnUuid(e, t) {
    ((this.queue = this.queue.filter(
      (o) => o.kind === "control" || o.uuid !== e,
    )),
      this.payOwed(
        this.ledger.seed(
          e,
          t,
          t !== void 0 && lQt({ message: { content: t } }),
        ),
      ));
  }
  streamEcho(e, t) {
    let o = this.ledger.streamEcho(e, t);
    if (o.dequeue)
      this.queue = this.queue.filter(
        (r) => r.kind === "control" || r.uuid !== e,
      );
    return o.verdict === "claim"
      ? { verdict: "claim", sent: o.sent }
      : { verdict: o.verdict };
  }
  settleOwedEchoes() {
    this.payOwed(this.ledger.settleOwed());
  }
  payOwed(e) {
    let t = this.ports.stampedSessionId();
    e.forEach(({ uuid: o, content: r }) =>
      this.contained(() => this.writeEcho(buildReplayUserMessage(t, o, r))),
    );
  }
  wasTaken(e) {
    return this.ledger.wasTaken(e);
  }
  synthesizeMissedEchoes() {
    let e = this.ledger.truncation();
    return (this.payOwed(e), e.length);
  }
  writeEcho(e, t = !1) {
    if (this.ports.emitEcho) {
      this.ports.emitEcho(e, { duplicate: t });
      return;
    }
    this.ports.emit(e);
  }
  contained(e) {
    try {
      e();
    } catch (t) {
      logError(t);
    }
  }
  abandonPostsInFlight(e) {
    let t = [...this.postsInFlight];
    return (
      this.postsInFlight.clear(),
      this.renewalParked.clear(),
      t.forEach((o) => this.failItem(o, e, { posted: !0, unconfirmed: !0 })),
      this.settleOwedEchoes(),
      t.length
    );
  }
  submit(e) {
    if (e.kind !== "control") {
      if (this.ledger.wasTaken(e.uuid)) {
        if (e.kind === "message" && this.ports.replayUserMessages)
          this.writeEcho(
            buildReplayUserMessage(this.ports.stampedSessionId(), e.uuid, e.content),
            this.ledger.hadBefore(e.uuid),
          );
        return "redelivered";
      }
      this.payOwed(
        this.ledger.accept(
          e.uuid,
          e.kind,
          e.kind === "message" ? e.content : void 0,
        ),
      );
    }
    if (this.closedWhy !== null) {
      if (
        (this.failItem(e, this.closedWhy, {
          composedHere: this.closedCause === "open_failed",
        }),
        e.kind !== "control")
      )
        this.logSend(e.kind, "closed");
      return "refused";
    }
    if (e.kind === "message" && hasNonTextContentBlocks({ message: { content: e.content } }))
      return (
        this.failItem(e, Ue),
        this.logSend(e.kind, "malformed"),
        "refused"
      );
    if (
      e.kind === "control" &&
      this.sendOutstanding &&
      this.ports.liveSession() !== null
    )
      return (this.forwardOutOfBand(e), "new");
    if (this.queue.length >= this.queueCap)
      return (
        this.failItem(
          e,
          "too many messages are waiting for the cloud session",
          { outcome: "overflow" },
        ),
        logEvent("tengu_remote_headless_client_queue_overflow", { kind: fromEnum(e.kind) }),
        "refused"
      );
    if (
      (this.queue.push(e),
      (this.maxQueued = Math.max(this.maxQueued, this.queue.length)),
      this.ports.liveSession() !== null)
    )
      this.ports.track(this.flush().catch(logError));
    return "new";
  }
  async untilNoHold() {
    let e = null;
    while (e !== this.laterSendsHold) ((e = this.laterSendsHold), await e);
  }
  holdLaterSendsBehind(e) {
    this.laterSendsHold = this.laterSendsHold.then(() => e.then(ae, ae));
  }
  close(e, t) {
    if (this.closedWhy === null) ((this.closedWhy = e), (this.closedCause = t));
    (this.failQueued(this.closedWhy, t), this.settleOwedEchoes());
  }
  async flush() {
    if (this.flushing) return;
    this.flushing = !0;
    try {
      while (this.ports.liveSession() !== null) {
        let e = this.queue[0];
        if (e !== void 0 && e.kind !== "control") {
          if ((await this.untilNoHold(), this.ports.liveSession() === null))
            break;
        }
        let t = this.queue.shift();
        if (t === void 0) break;
        try {
          if (t.kind === "control") this.forwardOutOfBand(t);
          else {
            this.sendOutstanding = !0;
            try {
              let o = this.post(t);
              ((this.outstandingSend = o.then(ae, ae)),
                this.contained(() => this.releaseQueuedForwards()),
                await o);
            } finally {
              this.sendOutstanding = !1;
            }
          }
        } catch (o) {
          this.failAfterInternalError(t, o);
        }
      }
    } finally {
      this.flushing = !1;
    }
  }
  releaseQueuedForwards() {
    let e = this.queue.filter((t) => t.kind === "control");
    if (e.length === 0) return;
    ((this.queue = this.queue.filter((t) => t.kind !== "control")),
      e.forEach((t) => this.forwardOutOfBand(t)));
  }
  forwardOutOfBand(e) {
    let t = new AbortController(),
      o =
        e.request.subtype === "cancel_async_message"
          ? Promise.all([this.laterSendsHold, this.outstandingSend]).then(ae)
          : this.laterSendsHold;
    this.forwardsWaiting.set(t, e);
    let r = this.ports.track(
      o
        .then(() => {
          if (!this.forwardsWaiting.delete(t)) return;
          return this.forward(e, t);
        })
        .catch((d) => this.failAfterInternalError(e, d, t)),
    );
    if (e.holdsLaterSends) this.holdLaterSendsBehind(r);
  }
  failQueued(e, t) {
    let o = [...this.queue, ...this.forwardsWaiting.values()];
    ((this.queue = []), this.forwardsWaiting.clear());
    let r = t === "open_failed";
    if (
      (o.forEach((d) => this.failItem(d, e, { composedHere: r })), o.length > 0)
    )
      logEvent("tengu_remote_headless_client_queue_dropped", {
        count: o.length,
        cause: fromEnum(t),
      });
    return o.length;
  }
  answerForwardsInFlight(e) {
    let t = sanitizeAndTruncateText(e);
    for (let o of [...this.forwardsInFlight.keys()])
      (this.contained(() => this.ports.emit(buildControlErrorResponse(o, t))),
        this.forwardsInFlight.delete(o));
  }
  queuedSendUuids() {
    return [
      ...this.queue.flatMap((e) => (e.kind === "control" ? [] : [e.uuid])),
      ...[...this.renewalParked].map((e) => e.uuid),
    ];
  }
  sendUuidsInFlight() {
    return [...this.postsInFlight].flatMap((e) =>
      this.renewalParked.has(e) ? [] : [e.uuid],
    );
  }
  heldMessages() {
    let e = this.ports.liveSession();
    if (e === null) return [];
    let t = new Set(e.manager.heldSendUuids());
    return [...this.postsInFlight].filter(
      (o) =>
        o.kind === "message" && !this.renewalParked.has(o) && t.has(o.uuid),
    );
  }
  queuedMessages() {
    return [...this.queue, ...this.renewalParked].filter(
      (e) => e.kind === "message",
    );
  }
  withdrawQueuedSends() {
    let e = this.withdrawHeldSends(),
      t = [...this.queuedSendUuids(), ...e];
    return (
      (this.queue = this.queue.filter((o) => o.kind === "control")),
      this.renewalParked.forEach((o) => this.postsInFlight.delete(o)),
      this.renewalParked.clear(),
      t.forEach((o) => this.ledger.withdraw(o)),
      t
    );
  }
  withdrawHeldSends() {
    let e = this.ports.liveSession();
    if (e === null) return [];
    return e.manager.heldSendUuids().filter((t) => this.withdrawHeld(t));
  }
  withdrawHeld(e) {
    let t = this.ports.liveSession(),
      o = [...this.postsInFlight].find(
        (r) => r.uuid === e && !this.renewalParked.has(r),
      );
    if (t === null || o === void 0) return !1;
    if (!t.manager.withdrawHeldSend(e)) return !1;
    return (this.postsInFlight.delete(o), !0);
  }
  withdrawQueuedSend(e) {
    if (typeof e !== "string") return !1;
    let t = this.queue.findIndex((r) => r.kind !== "control" && r.uuid === e),
      o = [...this.renewalParked].find((r) => r.uuid === e);
    if (t === -1 && o === void 0) {
      if (!this.withdrawHeld(e)) return !1;
      return (this.ledger.withdraw(e), !0);
    }
    if (t !== -1) this.queue.splice(t, 1);
    if (o !== void 0)
      (this.renewalParked.delete(o), this.postsInFlight.delete(o));
    return (this.ledger.withdraw(e), !0);
  }
  cancelForward(e) {
    let t = (d) => d.kind === "control" && d.hostRequestId === e,
      o = [...this.forwardsWaiting].filter(([, d]) => t(d)),
      r = [...this.queue.filter(t), ...o.map(([, d]) => d)];
    if (
      ((this.queue = this.queue.filter((d) => !t(d))),
      o.forEach(([d]) => this.forwardsWaiting.delete(d)),
      typeof e === "string")
    )
      this.forwardsInFlight.get(e)?.abort();
    r.forEach((d) =>
      logEvent("tengu_remote_headless_client_host_request", {
        subtype: fromEnum(d.telemetrySubtype),
        outcome: fromEnum("cancelled"),
      }),
    );
  }
  failAfterInternalError(e, t, o) {
    logError(t);
    let r = "an internal error occurred while sending it";
    if (e.kind === "control") {
      if (o !== void 0 && this.forwardsInFlight.get(e.hostRequestId) === o)
        (this.forwardsInFlight.delete(e.hostRequestId),
          this.failItem(e, r, { outcome: "error" }));
      return;
    }
    if (this.postsInFlight.delete(e)) {
      (this.failItem(e, r, { posted: !0, unconfirmed: !0 }),
        this.logSend(e.kind, "error"));
      return;
    }
    switch (this.ledger.phaseOf(e.uuid)) {
      case "queued":
        (this.failItem(e, r), this.logSend(e.kind, "error"));
        return;
      case "posting":
        this.failItem(e, r, { posted: !0, unconfirmed: !0 });
        return;
      default:
        return;
    }
  }
  failItem(
    e,
    t,
    {
      posted: o = !1,
      unconfirmed: r = !1,
      outcome: d = "closed",
      composedHere: p = !1,
    } = {},
  ) {
    let _ = p ? truncateSanitizedTextLong(t) : sanitizeAndTruncateText(t),
      w = this.ports.stampedSessionId();
    switch (e.kind) {
      case "message": {
        let { echo: C, error: k } = o
          ? this.ledger.postFail(e.uuid, r)
          : { ...this.ledger.giveUp(e.uuid), error: !0 };
        if (!k) {
          logForDebugging(
            `[headlessCloudClient] POST for ${e.uuid} failed after its echo; treating it as delivered`,
          );
          return;
        }
        if (C) this.contained(() => this.ports.emit(buildReplayUserMessage(w, e.uuid, e.content)));
        this.contained(() => this.ports.emit(buildErrorResultMessage(w, [`${Jn}: ${_}`], e.uuid)));
        return;
      }
      case "bash":
        if (o) this.ledger.postFail(e.uuid, r);
        else this.ledger.giveUp(e.uuid);
        this.contained(() =>
          this.ports.emit(
            buildErrorResultMessage(w, [
              r
                ? `bash_command may not have run: ${_}`
                : `bash_command was not run: ${_}`,
            ]),
          ),
        );
        return;
      case "control":
        (this.contained(() =>
          this.ports.emit(
            buildControlErrorResponse(e.hostRequestId, `${e.request.subtype} was not sent: ${_}`),
          ),
        ),
          this.contained(() =>
            logEvent("tengu_remote_headless_client_host_request", {
              subtype: fromEnum(e.telemetrySubtype),
              outcome: fromEnum(d),
            }),
          ));
        return;
    }
  }
  async post(e) {
    let t = this.ports.liveSession();
    if (t === null) {
      (this.failItem(e, de), this.logSend(e.kind, "closed"));
      return;
    }
    (this.ledger.postStart(e.uuid), this.postsInFlight.add(e));
    let o = this.ports.clock.now(),
      r = t.opened.getAccessToken(),
      d = await this.postOnce(t.manager, e),
      p = !1,
      _ = !1;
    if (
      !d.ok &&
      d.status === 401 &&
      t.opened.onAuth401 &&
      this.postsInFlight.has(e)
    ) {
      this.renewalParked.add(e);
      try {
        if (
          ((p =
            (await W(
              this.ports.clock,
              t.opened.onAuth401(r).catch(() => !1),
              es,
            )) ?? !1),
          p && this.postsInFlight.has(e))
        )
          await this.untilNoHold();
      } finally {
        this.renewalParked.delete(e);
      }
      if (p && this.postsInFlight.has(e)) {
        this.ports.onRepost?.(e);
        let w = this.ports.liveSession();
        ((_ = w === null),
          (d =
            w === null
              ? {
                  ok: !1,
                  reason: this.closedWhy ?? "the cloud session disconnected",
                }
              : await this.postOnce(w.manager, e)));
      }
    }
    if (!this.postsInFlight.delete(e)) {
      let w = !d.ok && d.withheld === !0 && d.reason === SEND_REASON_WITHDRAWN;
      this.contained(() =>
        this.logSend(e.kind, w ? "withdrawn_held" : "abandoned", {
          renewed: p,
        }),
      );
      return;
    }
    if (d.ok) {
      let { echo: w } = this.ledger.postOk(
        e.uuid,
        d.duplicate === !0 ? "duplicate" : ts(e),
      );
      if (w && e.kind === "message")
        this.contained(() =>
          this.writeEcho(
            buildReplayUserMessage(this.ports.stampedSessionId(), e.uuid, e.content),
            d.duplicate === !0,
          ),
        );
      this.ports.onSent?.(e, { duplicate: d.duplicate === !0 });
    } else if (d.withheld === !0)
      this.failItem(
        e,
        d.reason === SEND_REASON_CANCELLED || d.reason === SEND_REASON_WITHDRAWN
          ? "it was still waiting for the cloud session to take your local changes or this machine's settings when it was let go (Stop, or the session ended)"
          : d.reason,
        { posted: !0, unconfirmed: !1 },
      );
    else
      this.failItem(e, d.reason, {
        posted: !0,
        unconfirmed: d.status === void 0 && !_,
      });
    ((this.sendCount += 1),
      this.logSend(
        e.kind,
        d.ok ? "ok" : d.withheld === !0 ? "withheld" : "failed",
        {
          status: d.ok ? void 0 : d.status,
          renewed: p,
          latency_ms: this.ports.clock.now() - o,
        },
      ));
  }
  logSend(e, t, o = {}) {
    logEvent("tengu_remote_headless_client_send", { kind: fromEnum(e), outcome: fromEnum(t), ...o });
  }
  postOnce(e, t) {
    return t.kind === "message"
      ? e.sendMessage(t.content, {
          uuid: t.uuid,
          ...(t.priority && { priority: t.priority }),
        })
      : e.sendBashCommand(
          { command: t.command, ...(t.cwd !== void 0 && { cwd: t.cwd }) },
          { uuid: t.uuid },
        );
  }
  async forward(e, t) {
    let { telemetrySubtype: o } = e,
      r = this.ports.liveSession();
    if (r === null || this.forwardsInFlight.has(e.hostRequestId)) {
      this.failItem(
        e,
        r === null ? de : "a request with this request_id is already in flight",
        { outcome: r === null ? "closed" : "duplicate" },
      );
      return;
    }
    this.forwardsInFlight.set(e.hostRequestId, t);
    let d = this.ports.clock.now(),
      _ = await r.manager
        .sendControlRequest(e.request, { signal: t.signal })
        .then(
          (w) => {
            if (this.forwardsInFlight.get(e.hostRequestId) !== t)
              return "closed";
            return (
              this.ports.emit(buildControlSuccessResponse(e.hostRequestId, w ?? {})),
              this.forwardsInFlight.delete(e.hostRequestId),
              "forwarded"
            );
          },
          (w) => {
            if (this.forwardsInFlight.get(e.hostRequestId) !== t)
              return "closed";
            if (w instanceof Ve)
              return (
                this.forwardsInFlight.delete(e.hostRequestId),
                "cancelled"
              );
            return (
              this.ports.emit(buildControlErrorResponse(e.hostRequestId, ns(w))),
              this.forwardsInFlight.delete(e.hostRequestId),
              "error"
            );
          },
        );
    ((this.forwardCount += 1),
      logEvent("tengu_remote_headless_client_host_request", {
        subtype: fromEnum(o),
        outcome: fromEnum(_),
        latency_ms: this.ports.clock.now() - d,
      }));
  }
}
function ae() {}
function ts(e) {
  if (e.kind === "bash") return "streams";
  let t = { message: { content: e.content } };
  return aQt(t) ? "never" : lQt(t) ? "unreliable" : "streams";
}
function ns(e) {
  if (e instanceof ControlRequestTimeoutError)
    return `the cloud session did not answer ${e.subtype} in time; it may still apply it`;
  let t = l(e);
  if (t.startsWith("[RemoteSessionManager]"))
    return (
      logForDebugging(`[headlessCloudClient] forward failed: ${t}`),
      "the cloud session is not connected"
    );
  return sanitizeAndTruncateText(t);
}
var vt = 100,
  ss = 120000,
  os = 300000,
  is = [400, 1200],
  rs = 5000,
  as = 5000,
  Ct = 1000,
  ds = 500,
  wt = 5000,
  ls = wt - 250,
  bt = 850,
  us = bt - 100,
  cs = 1000,
  ps = "the cloud client is closing",
  hs = {
    now: () => Date.now(),
    setTimeout: (e, t) => {
      let o = setTimeout(e, t);
      return () => clearTimeout(o);
    },
  };
class Be extends Error {}
function Rt(e) {
  return { done: new It(e).done };
}
class It {
  config;
  done;
  resolveDone = () => {};
  phase = "pre_session";
  clock;
  io;
  outbound;
  agentRequests;
  hostRequests;
  drained;
  inflight = new Set();
  unregisterCleanup;
  startedAt;
  workerReadyIdleMs;
  session = null;
  opened = null;
  openRequested = !1;
  inputClosed = !1;
  outputOpen = !0;
  oauthBridgeInstalled = !1;
  undeliveredKindsTold = new Set();
  frames = null;
  liveness = null;
  features = null;
  featureAbort = new AbortController();
  connectEpoch = 0;
  cancelIdleDeadline = null;
  inputClosedAt = null;
  containerStartFailed = !1;
  hostDialogKinds = new Set();
  dialogsNotDeclaredCount = 0;
  dialogsReservedCount = 0;
  endLogged = !1;
  requestedModeChecked = !1;
  hostSentPermissionMode = !1;
  everConnected = !1;
  reconnectingTold = !1;
  connection = "connecting";
  cancelReconnectNotice = null;
  workerInitializeReason = null;
  workerModesSeen = new Set();
  lastWorkerMode = void 0;
  inputFailed = !1;
  signalled = !1;
  transportClosed = null;
  sinceStop = new WeakSet();
  stoppedWhileLive = !1;
  endingWith = null;
  preSessionEchoes = [];
  constructor(e) {
    this.config = e;
    ((this.clock = e.clock ?? hs),
      (this.workerReadyIdleMs = e.workerReadyIdleMs ?? ss),
      (this.startedAt = this.clock.now()),
      (this.done = new Promise((p) => {
        this.resolveDone = p;
      })));
    let t = ms(e.input, () => {
      this.inputFailed = !0;
    });
    ((this.io = e.createIO
      ? e.createIO(t, e.replayUserMessages)
      : new StructuredIO(t, e.replayUserMessages)),
      this.io.setUnexpectedResponseCallback(async (p) => {
        logForDebugging(
          `[headlessCloudClient] dropped control_response for unknown request ${sanitizeAndTruncateText(truncateToCodeUnits(String(p.response?.request_id), 64))}`,
        );
      }));
    let o = (p) => this.track(p),
      r = (p) => this.emit(p),
      d = () => (this.phase === "live" ? this.session : null);
    ((this.outbound = new Ne(
      {
        clock: this.clock,
        replayUserMessages: e.replayUserMessages,
        emit: r,
        emitEcho: (p, { duplicate: _ }) => this.writeOwnEcho(p, _),
        track: o,
        liveSession: d,
        stampedSessionId: () => this.stampedSessionId,
        onSent: (p, { duplicate: _ }) => {
          if (p.kind !== "message") return;
          if (
            (this.liveness?.noteDelivered(p.content),
            this.features?.noteMessageSent({ uuid: p.uuid, duplicate: _ }),
            !_)
          )
            this.liveness?.noteSendOk({
              afterStop: !this.stoppedWhileLive || this.sinceStop.has(p),
            });
        },
        onRepost: (p) => {
          if (p.kind === "message") this.sinceStop.add(p);
        },
      },
      e.queueCap ?? vt,
    )),
      (this.agentRequests = new be({
        clock: this.clock,
        io: this.io,
        track: o,
      })),
      (this.hostRequests = new He({
        clock: this.clock,
        initializePolicy: e.initializePolicy,
        ignoredOptionsCount: e.ignoredOptions.length,
        openingInitializeHonours: new Set([
          ...(e.openingInitializeHonours ?? []),
          "supportedDialogKinds",
        ]),
        outbound: this.outbound,
        emit: r,
        track: o,
        account: () => {
          let p = getAccountInformation();
          return {
            email: p?.email,
            organization: p?.organization,
            subscriptionType: p?.subscription,
            tokenSource: p?.tokenSource,
            apiKeySource: p?.apiKeySource,
            apiProvider: getAPIProvider(),
          };
        },
        openRequested: () => this.openRequested,
        requestOpen: (p) => this.requestOpen(p),
        liveSession: d,
        pendingSeededPromptUuid: () =>
          this.phase === "awaiting_worker" &&
          this.session?.opened.entry === "create"
            ? this.session.opened.initialPrompt?.uuid
            : void 0,
        interruptMattersBeforeLive: () => {
          let p = this.opened;
          return (
            p !== null && (p.entry === "attach" || p.initialPrompt !== void 0)
          );
        },
        end: (p) =>
          void this.end(
            p.reason,
            p.reason === "rejected_options" ? p.message : void 0,
          ),
        stampedSessionId: () => this.stampedSessionId,
        onInterrupt: () => {
          if (this.phase === "live")
            ((this.stoppedWhileLive = !0),
              (this.sinceStop = new WeakSet([
                ...this.outbound.queuedMessages(),
                ...this.outbound.heldMessages(),
              ])));
          this.liveness?.noteInterrupt();
        },
      })),
      this.installOAuthBridge(),
      (this.drained = this.drainOutbound()),
      this.readInput(),
      (this.unregisterCleanup = registerCleanup(() => this.closeFromSignal())));
  }
  async closeFromSignal() {
    ((this.signalled = !0),
      this.logEnded(
        "signal",
        this.endingWith?.exitCode ?? 0,
        this.phase,
        this.endingWith?.disconnectCode,
      ),
      await this.tearDown(de, "closed"),
      await W(this.clock, this.settleOpener(us, "signal"), bt),
      this.outbound.abandonPostsInFlight(xe),
      this.outbound.settleOwedEchoes());
  }
  settleOpener(e, t) {
    return (this.opened?.settle?.(e) ?? Promise.resolve(void 0)).then(
      (o) => {
        if (!o) return;
        (logEvent("tengu_remote_headless_client_seed_cut_short", { at: fromEnum(t) }),
          this.emit(buildInformationalSystemMessage(this.stampedSessionId, o.level, truncateSanitizedTextLong(o.text))));
      },
      (o) => {
        logForDebugging(`[headlessCloudClient] settling the opener's work failed: ${l(o)}`);
      },
    );
  }
  initializeWorker(e, t) {
    let o = [...this.hostDialogKinds].filter((C) => !Ie(C)),
      r = fs(e, o);
    if (((this.workerInitializeReason = r), r === null)) return;
    let d = {
        subtype: "initialize",
        ...(o.length > 0 && { supportedDialogKinds: o }),
      },
      p = (C, k) => {
        logEvent("tengu_remote_headless_client_worker_initialize", {
          reason: fromEnum(r),
          outcome: fromEnum(C.outcome),
          ...("cause" in C && { cause: fromEnum(C.cause) }),
          ...("status" in C && { status: C.status }),
          attempt: k,
          n_dialog_kinds: o.length,
        });
      },
      _ = this.clock.now(),
      w = async (C) => {
        let k = new AbortController(),
          D = t.postControlRequest(d, {
            answerExpected: !1,
            background: !0,
            timeoutMs: os,
            signal: k.signal,
          });
        D.response.then(
          () =>
            logForDebugging(
              `[headlessCloudClient] the worker took this client's initialize (${r})`,
            ),
          (O) =>
            logForDebugging(
              `[headlessCloudClient] this client's initialize (${r}) was not answered: ${sanitizeAndTruncateText(truncateToCodeUnits(l(O), 200))}`,
            ),
        );
        let E = await D.posted;
        if ((p(E, C), E.outcome === "accepted")) return;
        k.abort();
        let I = is[C - 1];
        if (I !== void 0 && gs(E) && this.clock.now() - _ < rs) {
          if (
            (await new Promise((O) => this.clock.setTimeout(O, I)),
            !this.closing)
          )
            return w(C + 1);
        }
      };
    this.outbound.holdLaterSendsBehind(w(1));
  }
  async applyOpeningRequests(e, t) {
    for (let { request: o, required: r, describe: d } of e)
      try {
        (await t.sendControlRequest(o),
          logEvent("tengu_remote_headless_client_opening_request", {
            subtype: fromEnum(o.subtype),
            outcome: fromEnum("applied"),
          }));
      } catch (p) {
        if (
          (logForDebugging(
            `[headlessCloudClient] opening request ${o.subtype} failed: ${sanitizeAndTruncateText(truncateToCodeUnits(l(p), 200))}`,
          ),
          logEvent("tengu_remote_headless_client_opening_request", {
            subtype: fromEnum(o.subtype),
            outcome: fromEnum(r ? "refused_required" : "refused_optional"),
          }),
          r)
        )
          throw new Be(
            `Error: the cloud session did not accept ${d}, so this attach was stopped rather than continue without it.`,
          );
        this.emit(
          buildInformationalSystemMessage(
            this.stampedSessionId,
            "warning",
            `The cloud session did not accept ${d}; it keeps its own.`,
          ),
        );
      }
  }
  installOAuthBridge() {
    if (
      a.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH &&
      SDK_OAUTH_REFRESH_ENTRYPOINTS.has(a.CLAUDE_CODE_ENTRYPOINT ?? "")
    )
      (pje(() => this.io.requestOAuthTokenRefresh()),
        (this.oauthBridgeInstalled = !0));
  }
  async drainOutbound() {
    for await (let e of this.io.outbound)
      try {
        await this.io.write(e);
      } catch (t) {
        (logError(t), this.end("output_failed", `failed to write to stdout: ${l(t)}`));
        return;
      }
  }
  emit(e) {
    if (!this.outputOpen) {
      logForDebugging(`[headlessCloudClient] dropped ${e.type} frame after stdout closed`);
      return;
    }
    this.io.outbound.enqueue(e);
  }
  track(e) {
    this.inflight.add(e);
    let t = () => {
      (this.inflight.delete(e), this.detachIfDrained());
    };
    return (
      e.then(t, (o) => {
        (logError(o), t());
      }),
      e
    );
  }
  async readInput() {
    try {
      for await (let e of this.io.structuredInput)
        try {
          this.handleHostFrame(e);
        } catch (t) {
          if (t instanceof Ve)
            logForDebugging("[headlessCloudClient] host frame handling aborted");
          else logError(t);
        }
    } catch (e) {
      if (e instanceof Ve) logForDebugging("[headlessCloudClient] stdin reading aborted");
      else logError(e);
      this.inputFailed = !0;
    }
    if (this.inputFailed) this.agentRequests.cancelAll();
    if (
      ((this.inputClosed = !0),
      (this.inputClosedAt = this.clock.now()),
      logForDebugging("[headlessCloudClient] stdin closed"),
      !this.openRequested && this.phase === "pre_session")
    ) {
      this.end(
        "stdin_eof",
        "no cloud session was created: the input closed with nothing to send to one",
      );
      return;
    }
    this.detachIfDrained();
  }
  get closing() {
    return this.phase === "ending" || this.phase === "ended" || this.signalled;
  }
  handleHostFrame(e) {
    if (this.closing) {
      this.refuseWhileClosing(e);
      return;
    }
    switch (e.type) {
      case "user":
        if (this.submitUserMessage(e)) this.requestOpen(null);
        return;
      case "bash_command":
        if (this.submitBashCommand(e)) this.requestOpen(null);
        return;
      case "control_request": {
        let t = Ss(e) === "set_permission_mode";
        if (t) this.requestedModeChecked = !0;
        if (this.hostRequests.handleControlRequest(e) === "forwarded" && t)
          this.hostSentPermissionMode = !0;
        return;
      }
      case "control_cancel_request":
        this.hostRequests.handleCancelRequest(e);
        return;
      default:
        logForDebugging(`[headlessCloudClient] ignoring host ${e.type} frame`);
    }
  }
  refuseWhileClosing(e) {
    switch (e.type) {
      case "user":
        this.submitUserMessage(e);
        return;
      case "bash_command":
        this.submitBashCommand(e);
        return;
      case "control_request": {
        let t = "request_id" in e ? e.request_id : void 0;
        if (typeof t === "string") this.emit(buildControlErrorResponse(t, ps));
        return;
      }
      default:
        logForDebugging(`[headlessCloudClient] ignoring ${e.type} frame while closing`);
    }
  }
  hostFrameUuid(e) {
    if (!("uuid" in e) || e.uuid === void 0 || e.uuid === null) return;
    let t = Xn(e.uuid);
    return t === null ? "invalid" : t.toLowerCase();
  }
  submitUserMessage(e) {
    let t = this.hostFrameUuid(e),
      o = "message" in e ? e.message : void 0,
      r =
        typeof o === "object" && o !== null && "content" in o
          ? o.content
          : void 0;
    if (t === "invalid")
      return (
        this.emit(
          buildErrorResultMessage(this.stampedSessionId, [
            "Your message was not delivered to the cloud session: its uuid must be a UUID",
          ]),
        ),
        !1
      );
    if (typeof r !== "string" && !Array.isArray(r))
      return (
        this.emit(
          buildErrorResultMessage(
            this.stampedSessionId,
            [
              "Your message was not delivered to the cloud session: its content must be a string or content blocks",
            ],
            t,
          ),
        ),
        !1
      );
    if (Array.isArray(r) && hasNonTextContentBlocks({ message: { content: r } }))
      return (
        this.emit(
          buildErrorResultMessage(
            this.stampedSessionId,
            [`Your message was not delivered to the cloud session: ${Ue}`],
            t,
          ),
        ),
        !1
      );
    let d = "priority" in e ? e.priority : void 0,
      p = {
        kind: "message",
        content: r,
        uuid: t ?? _t(),
        ...((d === "now" || d === "next" || d === "later") && { priority: d }),
      };
    if (this.outbound.submit(p) === "new" && !this.closing)
      this.sinceStop.add(p);
    return !0;
  }
  submitBashCommand(e) {
    let t = this.hostFrameUuid(e),
      o = "command" in e ? e.command : void 0,
      r = "cwd" in e ? e.cwd : void 0,
      d = (p) => (this.emit(buildErrorResultMessage(this.stampedSessionId, [p])), !1);
    if (t === "invalid")
      return d("bash_command was not run: its uuid must be a UUID");
    if (typeof o !== "string")
      return d("bash_command was not run: it needs a string command");
    if (r !== void 0 && typeof r !== "string")
      return d("bash_command was not run: its cwd must be a string");
    return (
      this.outbound.submit({
        kind: "bash",
        command: o,
        ...(r !== void 0 && { cwd: r }),
        uuid: t ?? _t(),
      }),
      !0
    );
  }
  writeOwnEcho(e, t = !1) {
    if (this.frames) this.frames.writeOwnEcho(e, { duplicate: t });
    else if (
      this.phase === "pre_session" &&
      this.preSessionEchoes.length < (this.config.queueCap ?? vt)
    )
      this.preSessionEchoes.push(e);
    else this.emit(e);
  }
  releasePreSessionEchoes(e) {
    this.preSessionEchoes.splice(0).forEach((o) => {
      let r = { ...o, session_id: this.stampedSessionId };
      if (e) e.writeOwnEcho(r);
      else this.emit(r);
    });
  }
  requestOpen(e) {
    if (this.openRequested || this.phase !== "pre_session" || this.signalled)
      return;
    ((this.openRequested = !0),
      (this.hostDialogKinds = new Set(normalizeDeclaredDialogKinds(e?.supportedDialogKinds))),
      this.track(this.openSession(e)));
  }
  async openSession(e) {
    let t;
    try {
      t = await this.config.openSession({
        initialize: e,
        signal: this.featureAbort.signal,
        dialogs: {
          kinds: this.hostDialogKinds,
          request: ct({
            io: this.io,
            declaredKinds: this.hostDialogKinds,
            clock: this.clock,
          }),
        },
      });
    } catch (o) {
      (logError(o), (t = { kind: "failed", message: l(o) }));
    }
    if (this.phase !== "pre_session" || this.signalled) {
      if (
        (logForDebugging(
          "[headlessCloudClient] session opened after the client ended; not attaching",
        ),
        t.kind === "opened")
      ) {
        if (
          (logEvent("tengu_remote_headless_client_open_discarded", {
            entry: fromEnum(t.session.entry),
          }),
          t.session.entry === "attach")
        )
          t.session.preflightCheck?.catch(() => {});
        await t.session.dispose?.().catch((o) => {
          logForDebugging(`[headlessCloudClient] discarded session not released: ${l(o)}`);
        });
      }
      return;
    }
    if (t.kind === "failed") {
      this.failOpen(t.message);
      return;
    }
    try {
      this.attach(t.session);
    } catch (o) {
      if ((logError(o), t.session.entry === "attach"))
        t.session.preflightCheck?.catch(() => {});
      (this.featureAbort.abort(),
        (this.features = null),
        t.session.dispose?.().catch(() => {}),
        this.failOpen(l(o)));
    }
  }
  failOpen(e) {
    (this.releasePreSessionEchoes(this.frames),
      this.frames?.close(),
      this.outbound.close(e, "open_failed"),
      this.end("open_failed", e));
  }
  attach(e) {
    if (
      e.entry === "create" &&
      e.initialPrompt !== void 0 &&
      e.initialPrompt.uuid !== e.initialPrompt.uuid.toLowerCase()
    )
      logForDebugging(
        "[headlessCloudClient] the seeded prompt uuid is not canonical lowercase; host redeliveries of it will not be recognised and will be sent again",
        { level: "warn" },
      );
    this.connectEpoch = this.clock.now();
    let t = new Ae(
      {
        clock: this.clock,
        includePartialMessages: this.config.includePartialMessages,
        emit: (R) => this.emit(R),
        outbound: this.outbound,
        cloudSession: () => this.readCloudSession(),
        summaryLine: (R) => {
          let F = describeCloudSessionSync(R);
          return F.projectFiles.mark === "pending" ||
            isProjectFilesSyncPending(R) ||
            Object.values(this.features?.reports() ?? {}).some((H) => H.pending)
            ? ""
            : formatCloudSessionSyncLine(F);
        },
        onWorkerReady: (R) => this.markWorkerReady(R),
        onWorkerInit: (R) => this.features?.noteWorkerInit(R),
        onTurnInFlight: () => this.features?.noteTurnInFlight(),
        onTurnEnded: () => this.features?.noteTurnEnded(),
        onWorkerUp: (R) => {
          (this.features?.noteWorkerUp(R),
            logEvent("tengu_remote_headless_client_worker_up", {
              generation: R.generation,
              session_mode: fromEnumOpt(R.sessionMode),
            }));
        },
        onWorkerSessionId: (R) => {
          (e.onWorkerSessionId?.(R), this.features?.noteSessionCleared(R));
        },
        onProvisioning: (R, F) => this.liveness?.noteProvisioning(R, F),
      },
      {
        entry: e.entry,
        initialSessionId: Vur(toInfraSessionId(e.sessionId)),
        connectEpoch: this.connectEpoch,
      },
    );
    ((this.frames = t),
      this.guarded(() => e.onWorkerSessionId?.(t.stampedSessionId)),
      e.notices?.forEach((R) =>
        this.emit(buildInformationalSystemMessage(this.stampedSessionId, R.level, truncateSanitizedTextLong(R.text))),
      ),
      this.releasePreSessionEchoes(t));
    let o = new Te(
      {
        clock: this.clock,
        emit: (R) => this.emit(R),
        stampedSessionId: () => this.stampedSessionId,
        reconnect: () => this.session?.manager.reconnect(),
        queuedSendCount: () => this.outbound.queuedSendUuids().length,
        sessionId: e.sessionId,
        essentialTrafficOnly: isEssentialTrafficOnly(),
        api: { markSessionRead: markSessionRead, updateSessionTitle: updateSessionTitle },
      },
      { titleFromFirstMessage: e.entry === "create" && !e.hasTitle },
    );
    this.liveness = o;
    let r = new ne();
    ((this.features = r),
      r.adopt(e.featureHandles ?? []),
      r.onEachSettled(() => {
        if (!this.closing) (t.offerSummary(), t.noteCloudSessionChanged());
      }),
      r.onEachReportChanged(() => {
        if (!this.closing) t.noteCloudSessionChanged();
      }));
    let d = r.callbacks({
        onMessage: (R, F = {}) =>
          this.guarded(() => this.handleSessionFrame(t, R, F)),
        onPermissionRequest: (R, F, H) =>
          this.guarded(() => {
            if (this.session !== null && this.phase !== "ending") {
              if (H?.reinstated === !0) this.agentRequests.reinstate(F);
              this.agentRequests.passPermissionRequest(
                this.session.manager,
                R,
                F,
              );
            }
          }),
        onPermissionCancelled: (R) => this.agentRequests.cancel(R),
        onUserDialogRequest: (R, F, H) =>
          this.guarded(() => {
            if (this.session === null || this.phase === "ending") return;
            if (Ie(R.dialog_kind)) {
              (this.dialogsReservedCount++,
                logForDebugging(
                  `[headlessCloudClient] not passing a ${sanitizeAndTruncateText(truncateToCodeUnits(String(R.dialog_kind), 64))} dialog to the host: that kind is this client's own question, never the cloud session's`,
                ));
              return;
            }
            if (!this.hostDialogKinds.has(R.dialog_kind)) {
              this.dialogsNotDeclaredCount++;
              let M = sanitizeAndTruncateText(truncateToCodeUnits(String(R.dialog_kind), 64));
              (logForDebugging(
                `[headlessCloudClient] not passing a ${M} dialog to the host: its initialize did not declare the kind`,
              ),
                this.emit(
                  buildInformationalSystemMessage(
                    this.stampedSessionId,
                    "notice",
                    `The cloud session is waiting on a ${M} dialog this host did not declare it can show; it continues when another client answers it or the session's dialog timeout passes.`,
                  ),
                ));
              return;
            }
            if (H?.reinstated === !0) this.agentRequests.reinstate(F);
            this.agentRequests.passUserDialogRequest(
              this.session.manager,
              R,
              F,
            );
          }),
        onUserDialogCancelled: (R) => this.agentRequests.cancel(R),
        onConnected: () =>
          this.guarded(() => {
            if (
              (this.logStream("connected"),
              (this.connection = "live"),
              t.noteCloudSessionChanged(),
              this.features?.noteStreamConnected(),
              (this.everConnected = !0),
              this.cancelReconnectNotice?.(),
              (this.cancelReconnectNotice = null),
              this.reconnectingTold)
            )
              ((this.reconnectingTold = !1),
                this.emit(buildInformationalSystemMessage(this.stampedSessionId, "notice", "Reconnected.")));
          }),
        onReconnecting: () =>
          this.guarded(() => {
            if (
              (this.logStream("reconnecting"),
              (this.connection = "reconnecting"),
              t.noteCloudSessionChanged(),
              this.closing ||
                !this.everConnected ||
                this.reconnectingTold ||
                this.cancelReconnectNotice !== null)
            )
              return;
            this.cancelReconnectNotice = this.clock.setTimeout(() => {
              ((this.cancelReconnectNotice = null),
                (this.reconnectingTold = !0),
                this.emit(
                  buildInformationalSystemMessage(
                    this.stampedSessionId,
                    "notice",
                    "Lost the connection to the cloud session \u2014 reconnecting\u2026",
                  ),
                ));
            }, as);
          }),
        onCatchUpTruncated: () =>
          this.guarded(() => {
            (t.releaseHeld(), (this.requestedModeChecked = !0));
            let R = this.outbound.synthesizeMissedEchoes();
            (this.logStream("catch_up_truncated", { missed_echoes: R }),
              this.emit(
                buildInformationalSystemMessage(
                  this.stampedSessionId,
                  "warning",
                  "Some earlier messages from this session could not be loaded after reconnecting.",
                ),
              ));
          }),
        onDisconnected: (R) => {
          let F = normalizeDisconnectReason(R);
          this.end("disconnected", formatDisconnectMessage(F), F);
        },
        onResponseUndelivered: (R, F, H) =>
          this.guarded(() => {
            if (this.undeliveredKindsTold.has(F)) return;
            if (this.undeliveredKindsTold.size === 0)
              queueMicrotask(() => this.undeliveredKindsTold.clear());
            (this.undeliveredKindsTold.add(F),
              this.emit(buildInformationalSystemMessage(this.stampedSessionId, "warning", describeUndeliveredSend(F, H))));
          }),
        onError: (R) => logForDebugging(`[headlessCloudClient] stream error: ${R.message}`),
      }),
      p = r.homeSeed(),
      _ = {
        sessionId: e.sessionId,
        getAccessToken: e.getAccessToken,
        onAuth401: e.onAuth401,
        orgUuid: e.orgUuid,
        dirSync: e.dirSync,
        ...(e.eventSigner && { eventSigner: e.eventSigner }),
        ...(p && { homeSeed: p, homeSeedHoldsFirstSend: e.entry === "create" }),
        trackSendsInFlight: !0,
        keepUndeliveredResponses: !0,
        nameToolOnPermissionAllow: !0,
        rearmRedeliveredPermissionRequests: !0,
        ignoreErrorShapedDialogReplies: !0,
        keepOwnModelSwitchBreadcrumb: !0,
        keepStreamRedialling: e.cloudSession().device.status === "bound",
        ...(e.entry === "create"
          ? { initialPromptUuid: e.initialPrompt?.uuid }
          : {
              isAttachToExisting: !0,
              initialSequenceNum: e.initialSequenceNum ?? void 0,
              preflightCheck: e.preflightCheck,
            }),
      },
      w = e.createManager ? e.createManager(_, d) : new RemoteSessionManager(_, d),
      C = r.sendWait();
    if (C !== null)
      w.addSendGate(
        (R) => Promise.race([C(), R.released, R.withdrawn, R.decided]),
        { onRelease: "send" },
      );
    let k = e.dirSync?.sync.seedGate?.bind(e.dirSync.sync);
    if (k !== void 0) w.addSendGate((R) => k(R), { onRelease: "withhold" });
    if (
      ((this.session = { manager: w, opened: e }),
      (this.opened = e),
      r.noteSession({ sessionId: e.sessionId, manager: w }),
      e.entry === "create" && e.initialPrompt)
    )
      this.outbound.noteOwnUuid(e.initialPrompt.uuid, e.initialPrompt.content);
    let D =
      e.entry === "attach" &&
      (e.preflightCheck !== void 0 || (e.openingRequests?.length ?? 0) > 0);
    ((this.phase = e.entry === "create" || D ? "awaiting_worker" : "live"),
      w.connect());
    let E = e.entry === "create" ? e.requestedPermissionMode : void 0;
    if (E !== void 0)
      this.outbound.holdLaterSendsBehind(
        pushCreatePermissionMode({
          manager: w,
          mode: E,
          surface: "headless",
          sessionId: e.sessionId,
          superseded: () =>
            this.session?.manager !== w || this.hostSentPermissionMode,
          observedMode: () => this.lastWorkerMode,
          seededModeReported: () => this.workerModesSeen.has(E),
          onRefused: (R) => this.outbound.holdLaterSendsBehind(R),
          onGaveUp: (R) => this.emit(buildInformationalSystemMessage(this.stampedSessionId, "warning", R)),
        }),
      );
    this.initializeWorker(e, w);
    let I = D
      ? (e.preflightCheck ?? Promise.resolve()).then(() =>
          this.applyOpeningRequests(e.openingRequests ?? [], w),
        )
      : void 0;
    if (
      (o.attachStatusFeeds([e.dirSync?.status, ...r.statusFeeds()], () => {
        if (!this.closing) (t.offerSummary(), t.noteCloudSessionChanged());
      }),
      e.entry === "create")
    )
      o.armStallWarning();
    if (this.phase === "live") o.noteWorkerReady();
    I?.then(
      () => this.markWorkerReady("preflight"),
      (R) => {
        (logForDebugging(
          `[headlessCloudClient] attach preflight failed: ${sanitizeAndTruncateText(truncateToCodeUnits(l(R), 200))}`,
        ),
          this.end(
            "disconnected",
            R instanceof Be ? R.message : formatDisconnectMessage("attach_rejected"),
            "attach_rejected",
          ));
      },
    );
    let O = this.readCloudSession(),
      A = r.reports();
    if (
      (logEvent("tengu_remote_headless_client_started", {
        entry: fromEnum(e.entry),
        device_status: fromEnumOpt(O?.device.status),
        sync_state: fromEnumOpt(O?.directory_sync.state),
        sync_reason: Cs(O?.directory_sync.reason),
        ignored_count: this.config.ignoredOptions.length,
        ..._s(O?.not_applied ?? []),
        replay_user_messages: this.config.replayUserMessages,
        include_partial_messages: this.config.includePartialMessages,
        initialize_policy: fromEnum(this.config.initializePolicy),
        has_dir_sync: e.dirSync !== void 0,
        has_home_seed: p !== void 0,
        worker_initialize: fromEnum(this.workerInitializeReason ?? "none"),
        machine_features: r.handles().length,
        ...Object.fromEntries(pe.map((R) => [`feature_${R}`, fromEnumOpt(A[R]?.state)])),
        serving_state: fromEnumOpt(O?.serving?.state),
        serving_reason: fromEnumOpt(O?.serving?.reason),
        oauth_bridge: this.oauthBridgeInstalled,
      }),
      this.phase === "live")
    )
      this.goLive(w);
    else if (e.entry === "create") this.armIdleDeadline();
  }
  goLive(e) {
    (this.track(
      this.hostRequests
        .sendPendingInterrupt(e)
        .then(() => this.outbound.flush()),
    ),
      this.features?.noteWorkerLive());
  }
  guarded(e) {
    try {
      e();
    } catch (t) {
      if (t instanceof Ve)
        logForDebugging("[headlessCloudClient] session frame handling aborted");
      else logError(t);
    }
  }
  handleSessionFrame(e, t, o) {
    if ((this.liveness?.noteInbound(t), t.type === "result")) {
      if ((this.features?.noteReply(this.featureAbort.signal), !this.closing))
        e.offerSummary();
    }
    if (
      e.handle(t, o) &&
      this.phase === "awaiting_worker" &&
      this.opened?.entry === "create"
    )
      this.armIdleDeadline();
    if (t.type === "system" && t.subtype === "init")
      this.checkRequestedPermissionMode(t.permissionMode);
    if (t.type === "system" && "permissionMode" in t) {
      let d = parsePermissionMode(t.permissionMode);
      if (d !== void 0)
        ((this.lastWorkerMode = d), this.workerModesSeen.add(d));
    }
  }
  checkRequestedPermissionMode(e) {
    if (this.requestedModeChecked) return;
    this.requestedModeChecked = !0;
    let t =
      this.opened?.entry === "create"
        ? this.opened.requestedPermissionMode
        : void 0;
    if (t === void 0 || typeof e !== "string") return;
    let o = parsePermissionMode(e),
      r = o === void 0 ? void 0 : getExternalPermissionMode(o);
    if (r === t) return;
    logEvent("tengu_remote_headless_client_mode_not_applied", {
      requested: fromEnum(t),
      actual: fromEnumOpt(r),
    });
    let d = `The cloud session did not apply the ${t} permission mode requested when it was created; it is in ${r ?? sanitizeAndTruncateText(truncateToCodeUnits(e, 24))} mode.`;
    (logForDebugging(`[headlessCloudClient] ${d}`, { level: "warn" }),
      this.emit(buildInformationalSystemMessage(this.stampedSessionId, "warning", d)));
  }
  readCloudSession() {
    try {
      let e = this.opened?.cloudSession(),
        t = this.features?.reports() ?? {};
      return e === void 0
        ? e
        : Object.assign(
            {},
            t,
            ...Object.values(t).map((o) => o.facts),
            { connection: this.connection },
            e,
          );
    } catch (e) {
      if (e instanceof Ve)
        logForDebugging("[headlessCloudClient] cloud_session snapshot aborted");
      else logError(e);
      return;
    }
  }
  get stampedSessionId() {
    return this.frames?.stampedSessionId ?? "";
  }
  markWorkerReady(e) {
    if (
      ((this.containerStartFailed ||= e === "step_failed"),
      this.phase !== "awaiting_worker" || this.session === null)
    )
      return;
    ((this.phase = "live"),
      this.cancelIdleDeadline?.(),
      (this.cancelIdleDeadline = null),
      this.liveness?.noteWorkerReady());
    let t = this.outbound.queuedCount;
    (this.goLive(this.session.manager),
      logEvent("tengu_remote_headless_client_worker_ready", {
        via: fromEnum(e),
        wait_ms: this.clock.now() - this.connectEpoch,
        queued: t,
      }));
  }
  armIdleDeadline() {
    if ((this.cancelIdleDeadline?.(), this.signalled)) {
      this.cancelIdleDeadline = null;
      return;
    }
    this.cancelIdleDeadline = this.clock.setTimeout(() => {
      ((this.cancelIdleDeadline = null), this.markWorkerReady("idle_deadline"));
    }, this.workerReadyIdleMs);
  }
  logStream(e, t = {}) {
    logEvent("tengu_remote_headless_client_stream", { transition: fromEnum(e), ...t });
  }
  detachIfDrained() {
    if (
      !this.inputClosed ||
      this.phase === "pre_session" ||
      this.phase === "ending" ||
      this.phase === "ended" ||
      this.outbound.queuedCount > 0 ||
      this.outbound.isFlushing ||
      this.inflight.size > 0
    )
      return;
    this.end("stdin_eof");
  }
  closeTransport() {
    if (this.transportClosed !== null) return this.transportClosed;
    let e = this.session;
    if (e === null)
      return (
        (this.transportClosed = W(
          this.clock,
          this.liveness?.stop() ?? Promise.resolve(),
          Ct,
        ).then(() => {})),
        this.transportClosed
      );
    return (
      (this.session = null),
      (this.transportClosed = (async () => {
        (await this.hostRequests
          .issuePendingInterrupt(e.manager)
          .catch(() => {}),
          await this.hostRequests.interruptIssued.catch(() => {}));
        let t = W(this.clock, this.liveness?.stop() ?? Promise.resolve(), Ct);
        (await e.manager
          .releaseHeldSends(void 0, { exiting: !0, final: !0 })
          .catch(() => {}),
          await e.manager.flushSends(cs).catch(() => {}),
          e.manager.disconnect(),
          await t);
      })()),
      this.transportClosed
    );
  }
  async tearDown(e, t) {
    if (
      (this.liveness?.halt(),
      this.cancelIdleDeadline?.(),
      (this.cancelIdleDeadline = null),
      this.cancelReconnectNotice?.(),
      (this.cancelReconnectNotice = null),
      this.featureAbort.abort(),
      this.releasePreSessionEchoes(this.frames),
      this.frames?.close(),
      this.outbound.close(e, t),
      this.outbound.answerForwardsInFlight(e),
      this.agentRequests.cancelAll(),
      await W(this.clock, this.features?.dispose() ?? Promise.resolve(), ds),
      await this.closeTransport().catch((o) => {
        logForDebugging(`[headlessCloudClient] transport close failed: ${l(o)}`);
      }),
      this.oauthBridgeInstalled)
    )
      pje(null);
  }
  logEnded(e, t, o, r) {
    if (this.endLogged) return;
    this.endLogged = !0;
    let d = this.outbound.stats,
      p = this.liveness?.stats;
    if (
      (logEvent("tengu_remote_headless_client_ended", {
        reason: fromEnum(e),
        exit_code: t,
        ended_from: fromEnum(o),
        entry: fromEnumOpt(this.opened?.entry),
        disconnect_code: fromEnumOpt(r),
        container_start_failed: this.containerStartFailed,
        duration_ms: this.clock.now() - this.startedAt,
        turns: this.frames?.turns ?? 0,
        sends: d.sends,
        forwarded: d.forwards,
        passed_through: this.agentRequests.settledCount,
        dialogs_not_declared: this.dialogsNotDeclaredCount,
        dialogs_reserved_dropped: this.dialogsReservedCount,
        max_queue: d.maxQueued,
        max_held_for_init: this.frames?.maxHeld ?? 0,
        session_id_changes: this.frames?.counts.sessionIdChanges ?? 0,
        peer_content_omitted: this.frames?.counts.peerContentOmitted ?? 0,
        peer_tool_use_omitted: this.frames?.counts.peerToolUseOmitted ?? !1,
        cloud_session_keys_dropped:
          this.frames?.counts.cloudSessionKeysDropped ?? 0,
        service_events_dropped: this.frames?.counts.serviceEventsDropped ?? 0,
        unknown_frames_dropped: this.frames?.counts.unknownFramesDropped ?? 0,
        peer_frames_dropped_before_init:
          this.frames?.counts.peerFramesDroppedBeforeInit ?? 0,
        input_failed: this.inputFailed,
        watchdog_fires: p?.watchdog_fires ?? 0,
        title: fromEnum(p?.title ?? "not_applicable"),
        lines_written: p?.lines_written ?? 0,
        lines_suppressed: p?.lines_suppressed ?? 0,
        eof_to_end_ms:
          this.inputClosedAt === null
            ? void 0
            : this.clock.now() - this.inputClosedAt,
      }),
      this.containerStartFailed)
    )
      logFeatureBad("remote_headless_client", "container_start_failed");
    else if (t !== 0) logFeatureBad("remote_headless_client", e);
    else if (this.inputFailed) logFeatureSad("remote_headless_client", "input_failed");
    else logFeatureOk("remote_headless_client");
  }
  async end(e, t, o) {
    if (this.phase === "ending" || this.phase === "ended") return;
    let r = e === "disconnected" ? (o ?? normalizeDisconnectReason(void 0)) : void 0,
      d = ys(e, t, r),
      p = d.exitCode,
      _ = this.phase;
    ((this.phase = "ending"),
      (this.endingWith = { exitCode: p, disconnectCode: r }));
    try {
      (await this.tearDown(
        e === "disconnected" ? "the cloud session disconnected" : de,
        e === "disconnected" ? "disconnected" : "closed",
      ),
        await W(
          this.clock,
          Promise.allSettled([...this.inflight, this.settleOpener(ls, "end")]),
          wt,
        ),
        this.outbound.abandonPostsInFlight(xe),
        this.outbound.settleOwedEchoes());
    } catch (w) {
      if (w instanceof Ve) logForDebugging("[headlessCloudClient] teardown aborted");
      else logError(w);
      await this.closeTransport().catch(() => {});
    }
    (this.logEnded(e, p, _, r),
      (this.outputOpen = !1),
      this.io.outbound.done(),
      await this.drained,
      (this.phase = "ended"),
      this.unregisterCleanup(),
      this.resolveDone(d));
  }
}
async function* ms(e, t) {
  try {
    for await (let o of e) yield o;
  } catch (o) {
    if (!(o instanceof Ve)) logError(o);
    t();
  }
}
function fs(e, t) {
  if (e.entry === "create")
    return e.initialPrompt === void 0 && t.length > 0
      ? "declare_dialog_kinds"
      : null;
  return e.workerAwaitsAnswer === !0 ? "rearm_parked_prompt" : null;
}
function gs(e) {
  return (
    e.outcome === "failed" &&
    e.cause === "http" &&
    (e.status >= 500 || e.status === 429 || e.status === 408)
  );
}
function ys(e, t, o) {
  let r = o ?? normalizeDisconnectReason(void 0);
  switch (e) {
    case "stdin_eof":
    case "end_session":
      return t === void 0
        ? { exitCode: 0, reason: e }
        : { exitCode: 0, reason: e, message: t };
    case "disconnected":
      return {
        exitCode: 1,
        reason: e,
        disconnectCode: r,
        message: sanitizeAndTruncateText(t ?? formatDisconnectMessage(r)),
      };
    case "rejected_options":
    case "open_failed":
      return { exitCode: 1, reason: e, message: truncateSanitizedTextLong(t ?? e) };
    case "output_failed":
      return { exitCode: 1, reason: e, message: sanitizeAndTruncateText(t ?? e) };
  }
}
function Ss(e) {
  let t = "request" in e ? e.request : void 0;
  return typeof t === "object" && t !== null && "subtype" in t
    ? t.subtype
    : void 0;
}
function _s(e) {
  return {
    not_applied_lost: countMatching(e, ({ kind: t }) => t === "lost"),
    not_applied_kept: countMatching(e, ({ kind: t }) => t === "kept"),
    not_applied_preference: countMatching(e, ({ kind: t }) => t === "preference"),
  };
}
var vs = [
  "not_seeded",
  "not_opted_in",
  "lookup_failed",
  "seeded_elsewhere",
  "engine_declined",
  "engine_unavailable",
];
function Cs(e) {
  if (e === void 0) return;
  return fromEnumOpt(vs.find((t) => t === e)) ?? S("engine");
}
async function Dt(e, { folder: t, attempts: o, lastError: r, signal: d }) {
  let p = (_) => {
    if (
      (logEvent("tengu_dir_sync_offline_told", {
        via: fromEnum(_),
        attempts: o,
        surface: S("sdk_host"),
      }),
      _ === "dialog")
    )
      logFeatureOk("remote_sync_offline_dialog");
    else logFeatureSad("remote_sync_offline_dialog", _);
  };
  try {
    if (e === void 0 || !e.kinds.has(CLOUD_SYNC_OFFLINE_DIALOG.kind) || !me(t))
      return (p("not_shown"), { acknowledged: !1 });
    let { answer: _, answered: w } = await e.request(
        CLOUD_SYNC_OFFLINE_DIALOG,
        buildSyncOfflineDialogPayload({
          folder: t,
          attempts: o,
          ...(r !== void 0 && { lastError: ws(r) }),
        }),
        { signal: d },
      ),
      C = w && _ === "continue";
    return (p(C ? "dialog" : "dialog_unanswered"), { acknowledged: C });
  } catch (_) {
    return (
      logForDebugging(
        `[headlessCloud] could not ask the host about file sync going offline: ${l(_)}`,
        { level: "warn" },
      ),
      p("failed"),
      { acknowledged: !1 }
    );
  }
}
function ws(e) {
  let t = stripAnsi(e)
    .replace(
      /[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\s]+/gu,
      " ",
    )
    .trim();
  return truncateWithEllipsis(t);
}
var ks = 3000;
function bs(e) {
  return [
    ...e.matchAll(/(?:^|\0)100(?:644|755) blob [0-9a-f]{40,64} +(\d+)\t/g),
  ].reduce(
    (t, [, o]) => ({
      fileCount: t.fileCount + 1,
      totalBytes: t.totalBytes + Number(o),
    }),
    { fileCount: 0, totalBytes: 0 },
  );
}
async function Rs(e, t, o) {
  if (t.reason === "folder") return { fileCount: t.files };
  let r = findGitRoot(e);
  if (r === null) return;
  let d = await runProbeGit({ gitRoot: r, signal: o, timeoutMs: ks }, [
    "ls-tree",
    "-r",
    "-z",
    "--long",
    "HEAD",
  ]).catch(() => ({ exitCode: void 0, stdout: "" }));
  if (d.exitCode !== 0) return;
  let p = bs(d.stdout);
  return {
    fileCount: p.fileCount + t.untracked.eligibleCount,
    totalBytes: p.totalBytes + t.untracked.seedBytes,
  };
}
async function Pt({
  dialogs: e,
  explicitRef: t,
  storageV5: o,
  signal: r,
  seams: d = {},
}) {
  let p = S("sdk_host");
  try {
    if (e === void 0 || !(await (d.flagOn ?? isViolinWoodEnabled)().catch(() => !1))) return [];
    if (!e.kinds.has(ie.kind))
      return (
        logEvent("tengu_dir_sync_mode_prompt_skipped", {
          reason: S("host_undeclared"),
          surface: p,
        }),
        []
      );
    let _ = (d.promptRoot ?? getDirSyncPromptRoot)({ staysAttached: !0, surface: "sdk_host" });
    if (_ === null) return [];
    let w = (d.launchDirectory ?? he)();
    if (Re({ folder: _, launchFolder: w, upload: void 0 }) === null)
      return (
        logEvent("tengu_dir_sync_mode_prompt_skipped", {
          reason: S("unsendable_path"),
          surface: p,
        }),
        []
      );
    let C = await (d.syncOffer ?? decideSyncOffer)({
      explicitRef: t,
      poolId: void 0,
      signal: r,
    });
    if (!C.offer)
      return (
        logEvent("tengu_dir_sync_mode_prompt_skipped", {
          reason: fromEnum(C.reason),
          surface: p,
        }),
        C.line !== null && forecastKeyOf(C) === "not_offered"
          ? [{ level: "notice", text: C.line }]
          : []
      );
    let k = Re({
      folder: _,
      launchFolder: w,
      upload: await (d.measureUpload ?? Rs)(w, C, r),
    });
    if (k === null || r.aborted) return [];
    logEvent("tengu_dir_sync_mode_prompt_shown", { surface: p });
    let { answer: D, answered: E } = await e.request(ie, k, { signal: r });
    if (!E) return (logFeatureSad("ccr_dir_sync_mode_prompt", "cancelled"), []);
    let I = D === "sync" ? "container_sync" : D;
    if (
      (logEvent("tengu_dir_sync_mode_prompt", { choice: fromEnum(I), surface: p }),
      I === "not_now")
    )
      return (logFeatureSad("ccr_dir_sync_mode_prompt", "dismissed"), []);
    if (!(await (d.setRemoteFileMode ?? setRemoteFileMode)(I, o)))
      logFeatureBad("ccr_dir_sync_mode_prompt", "not_written");
    else if (I === "container_sync") logFeatureOk("ccr_dir_sync_mode_prompt");
    else logFeatureSad("ccr_dir_sync_mode_prompt", "declined");
    return [];
  } catch (_) {
    if (yt(_)) logForDebugging(`[headlessCloud] sync question abandoned: ${l(_)}`);
    else logError(_);
    return [];
  }
}
async function Ot({ dialogs: e, permissionMode: t, signal: o, seams: r = {} }) {
  let d = S("desktop"),
    p = (_) => {
      logEvent("tengu_served_unattended_consent", { action: fromEnum(_), surface: d });
    };
  try {
    if (
      ((r.prime ?? primeUnattendedServingConsent)(),
      e === void 0 ||
        (t !== "auto" && t !== "bypassPermissions") ||
        !(r.servingOn ?? isRemoteToolServingSwitchOn)() ||
        !(await (r.gateOn ?? isUnattendedServingEnabled)().catch(() => !1)) ||
        (r.forbiddenBySettings ?? managedSettingsForbidUnattendedServing)())
    )
      return;
    if ((await (r.readConsent ?? readUnattendedServingConsent)()) !== "unset") return;
    if (!e.kinds.has(re.kind)) {
      p("unsupported_surface");
      return;
    }
    p("shown");
    let { answer: _, answered: w } = await e.request(
      re,
      ut((r.machineName ?? unattendedServingMachineName)()),
      { signal: o },
    );
    if (!w || _ === "not_now") {
      p("not_now");
      return;
    }
    let C = _ === "accept" ? "accepted" : "declined";
    if ((p(C), !(await (r.writeConsent ?? writeUnattendedServingConsent)(C))))
      logForDebugging(
        "[headlessCloud] unattended-serving answer not saved; asked again next launch",
        { level: "warn" },
      );
  } catch (_) {
    if (yt(_))
      logForDebugging(`[headlessCloud] unattended-serving question abandoned: ${l(_)}`);
    else logError(_);
  }
}
function Ft(e) {
  let t = e.flagsOn ?? isCloudPluginForwardingFlagOn,
    o = e.optedOut ?? (() => Boolean(a.CLAUDE_CODE_DISABLE_PLUGIN_FORWARDING)),
    r = e.clock ?? SYSTEM_CLOCK,
    d = e.muted ?? isRemoteToolServingMuted,
    p = e.onMuteRecheck ?? onServingMuteRecheck;
  return async (_) => {
    if (o() || !(await t())) return;
    let w = _.trigger === "attach";
    if (!_.bound) return le("not_bound", "no_consent", "not_bound", w);
    let C = e.memory,
      k = e.consentDeps ?? createCloudPluginsConsentStorage(_.storageV5),
      D = (e.launchDir ?? he)(),
      E = {
        launchDir: D,
        syncRoot: () => getDirSyncRoot(_.dirSync),
        syncElsewhere: w ? (_.dirSyncElsewhere ?? "unknown") : !1,
      },
      I = e.reach?.(E) ?? createConsentReachJudge({ ...E, memory: e.reachMemory.reachFor(D) }),
      O = createConsentStoreTrustProbe(I),
      A = await Es(C.consentPin, k, O, _.signal, r);
    if (A === "declined")
      return le("declined", "opted_out", "stored", w, "stored");
    if (A === "aborted") return le("unreadable", "no_consent", "detached", w);
    if (A === "unreadable")
      return (
        logFeatureBad("ccr_cloud_plugins_forward", "read_failed"),
        le("unreadable", "no_consent", "read_failed", w)
      );
    if (A !== "accepted") {
      let P = O.withheld();
      return le(
        "no_consent",
        "no_consent",
        P !== null ? "untrusted_store" : "undecided",
        w,
        "default",
        P !== null ? Ds(P) : Ps,
      );
    }
    let R = createStatusFeed(),
      F = null,
      H = [],
      M = !1,
      U = (P) => {
        if (P && !M) H.forEach((B) => B());
        M = P;
      },
      Q = !1,
      L,
      N = !1;
    return {
      feature: "plugins",
      status: R,
      onSettled: (P) => {
        if ((H.push(P), M)) P();
      },
      sessionCallbacks: {
        onMessage: (P) => {
          if (P.type === "system" && P.subtype === "plugin_install")
            F?.pluginInstallFrame();
        },
      },
      onSession({ sessionId: P, manager: B }) {
        if (
          ((F = createCloudPluginsForwarder({
            sessionId: P,
            reattach: w,
            manager: B,
            memory: C,
            storageV5: _.storageV5,
            say: ({ line: K, level: V }) => {
              if (!N || V === "warning") L = K;
              if (!N)
                ((N = !0),
                  queueMicrotask(() => {
                    N = !1;
                  }));
              R.publish(K, Is(V));
            },
            bound: _.bound,
            reach: I,
            distrust: O,
            consentDeps: k,
            clock: r,
            muted: d,
            onMuteRecheck: p,
            ...(e.readChoices && { readChoices: e.readChoices }),
            onChange: () => {
              let K = F?.state();
              U(K !== void 0 && Mt(K));
            },
          })),
          w)
        )
          F.workerKnownUp();
        if (Q) F.messageSent();
      },
      onWorkerUp() {
        F?.workerCameUp();
      },
      onMessageSent() {
        if (F === null) {
          Q = !0;
          return;
        }
        F.messageSent();
      },
      report: () => {
        let P = F?.state();
        if (P?.muted)
          return { state: "off", source: "stored", reason: "muted" };
        let B =
          P !== void 0 && P.settled && P.admission === "admitted"
            ? getForwardingNoticeReason(P.notice)
            : void 0;
        if (B !== void 0) return { state: "off", source: "stored", reason: B };
        if (P?.gaveUp !== void 0 && P.notice === void 0)
          return {
            state: "off",
            source: "stored",
            reason:
              P.gaveUp === "read_failed" ? "unreadable" : "could_not_send",
          };
        if (P !== void 0 && P.settled && P.admission !== "admitted")
          return {
            state: "off",
            reason:
              P.admission === "opted_out"
                ? "declined"
                : P.source === "read_failed"
                  ? "unreadable"
                  : P.source === "internal_error"
                    ? "could_not_send"
                    : "unavailable",
          };
        return {
          state: "forwarded",
          source: "stored",
          ...(L !== void 0 && { message: truncateToCodeUnits(L, 200) }),
          ...(!(P !== void 0 && Mt(P)) && { pending: !0 }),
        };
      },
      async dispose() {
        (F?.teardown(), (F = null));
      },
    };
  };
}
function Es(e, t, o, r, d) {
  if (r.aborted) return Promise.resolve("aborted");
  return new Promise((p) => {
    let _ = () => p("unreadable"),
      w = () => p("aborted"),
      C = d.setTimeout(_, CLOUD_PLUGINS_READ_TIMEOUT_MS);
    (r.addEventListener("abort", w, { once: !0 }),
      resolveCloudPluginsConsent(e, t, o)
        .then(p, _)
        .finally(() => {
          (C(), r.removeEventListener("abort", w));
        }));
  });
}
function Mt(e) {
  return e.settled && !e.answerPending;
}
function Is(e) {
  switch (e) {
    case "warning":
      return "warning";
    case "notice":
      return "info";
    case "debug":
      return "debug";
    default:
      return e;
  }
}
function le(e, t, o, r, d, p) {
  return (
    logEvent("tengu_cloud_plugins_admission", {
      admission: fromEnum(t),
      source: fromEnum(o),
      reattach: r,
    }),
    {
      feature: "plugins",
      report: () => ({
        state: "off",
        reason: e,
        ...(d && { source: d }),
        ...(p !== void 0 && { message: truncateToCodeUnits(p, 200) }),
      }),
    }
  );
}
function Ds(e) {
  switch (e) {
    case "in_launch_dir":
      return "Your plugins are not used in this cloud session: the folder or repository it runs in holds your Claude settings, where that choice is saved, so it could change it. Start it from a folder outside them.";
    case "in_sync_root":
      return "Your plugins are not used in this cloud session: the folder it syncs contains your Claude settings, where that choice is saved, so the session could change it. Sync a folder that does not hold them.";
    case "in_other_root":
      return "Your plugins are not used in this cloud session: a folder it may write on this machine (an added directory or a settings write grant) holds your Claude settings, so it could change that choice.";
    case "unknown":
      return "Your plugins are not used in this cloud session: this machine could not check whether the session is able to change that saved choice from its folder, so the choice is not relied on here.";
  }
}
var Ps =
  "Your plugins are not used in cloud sessions from this machine yet: run /cloud-plugins in claude on this machine to decide.";
function Os(e, t) {
  return {
    feature: "settings",
    status: e.status,
    homeSeed: e,
    report: () => Fs(e.outcome(), t),
    onSettled: (o) => {
      e.completion.then(() => o());
    },
  };
}
function ee(e, t) {
  return {
    feature: "settings",
    report: () => ({ state: "off", reason: e, ...(t && { source: t }) }),
  };
}
function At({ forwardHomeSettings: e, consentMode: t }) {
  return async (o) => {
    if (o.homeSeed !== void 0)
      return Os(o.homeSeed, t === void 0 ? "stored" : "host");
    if (!e) return ee("launch_flag");
    if (o.settingsToCloud !== !0) return ee("flag_off");
    let r = t ?? getStoredRemoteHomeSettingsMode(),
      d = t !== void 0 ? "host" : r === void 0 ? "default" : "stored";
    if (r !== "forward")
      return ee(r === "keep_local" ? "declined" : "no_consent", d);
    if (!o.bound) return ee("unbound", d);
    if (o.trigger === "create") return ee("not_seeded", d);
    return ee("flag_off", d);
  };
}
function Ms(e) {
  switch (e) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
      return !0;
    case "raced":
    case "not_forwarded_at_create":
    case "no_standing_pack":
    case "lane_full":
    case "unavailable":
    case "unauthorized":
    case "deadline":
    case "failed":
    case "aborted":
      return !1;
  }
}
function Fs(e, t) {
  let o = { state: "forwarded", source: t };
  if (e === void 0) return { ...o, pending: !0 };
  if (e.kind === "uploaded")
    return !Ms(e.outcome)
      ? { state: "off", source: t, reason: e.outcome }
      : e.settingsRefused !== void 0
        ? { state: "off", source: t, reason: e.settingsRefused }
        : o;
  switch (e.reason) {
    case "nothing_to_send":
      return { state: "off", source: t, reason: "nothing_to_forward" };
    case "failed":
      return { state: "off", source: t, reason: "plan_failed" };
    default:
      return { state: "off", source: t, reason: e.reason };
  }
}
function Ht(e, t = {}) {
  let o = (t.takeDirSync ?? takeLaptopDirSyncSession)(e);
  return o === void 0
    ? Promise.resolve(void 0)
    : o.catch((r) => {
        logForDebugging(`[headlessCloud] directory-sync handle unavailable: ${l(r)}`);
        return;
      });
}
async function qt(e, t = {}) {
  try {
    let o = await e;
    if (o === void 0) return;
    await (t.releaseDirSync ?? As)(o.sessionId);
  } catch (o) {
    logForDebugging(`[headlessCloud] directory-sync handle not released: ${l(o)}`);
  }
}
async function As(e) {
  rootLaptopDirSyncRegistry().retire(e);
}
async function We(e) {
  return (e === void 0 ? getCurrentRemoteFileMode() : getGitRootRemoteFileMode(e)).catch(() => "unspecified");
}
function Ut(
  {
    sessionId: e,
    orgUuid: t,
    deviceId: o,
    getAccessToken: r,
    storageV5: d,
    dirSync: p,
    servedSettingsChanged: _,
  },
  w = {},
) {
  return (w.startRegistration ?? startDeviceRegistration)({
    sessionId: e,
    orgUuid: t,
    getAccessToken: r,
    getDeviceId: () => o,
    storageV5: d,
    dirSync: p,
    ...(_ && { servedSettingsChanged: _ }),
    onNotice: (C, k) => logForDebugging(`[remote-tools] ${C}: ${k}`, { level: "warn" }),
  });
}
var Tt = { level: "warning", text: SEED_INTERRUPTED_MESSAGE };
async function xt(e, t, o = {}) {
  let r = (o.takePendingSeed ?? takePendingDirSyncSeed)();
  if (r === null) return;
  let d = r.state();
  if (d !== "started" && d !== "done") e.abort();
  let p = await withDeadline(
    r.completion.then(() => !0),
    t,
  );
  switch (r.state()) {
    case "started":
      if (!p)
        logForDebugging(
          `[headlessCloud] the directory-sync seed was still uploading after ${t}ms; cancelling it`,
        );
      return (
        e.abort(),
        r.cutShortLine === void 0
          ? Tt
          : { level: "warning", text: r.cutShortLine }
      );
    case "cut":
      return (logFeatureSad("ccr_dir_sync_seed", "cut_at_exit"), Tt);
    case "done":
      return;
    default:
      if (d !== "arming") return;
      return (
        logFeatureSad("ccr_dir_sync_seed", "cut_at_exit"),
        { level: "warning", text: SEED_CUT_AT_EXIT_MESSAGE }
      );
  }
}
function Lt({ dirSync: e, fileMode: t }) {
  if (e !== void 0) return e.sync.state();
  return t === "container_sync"
    ? { state: "off", reason: "not_seeded", message: NO_SYNC_HANDLE_MESSAGE }
    : { state: "off", reason: "not_opted_in" };
}
function Nt({ dirSync: e, fileMode: t }) {
  let o = Lt({ dirSync: e, fileMode: t });
  return {
    state: o.state,
    ...("reason" in o && o.reason !== void 0 && { reason: o.reason }),
    ...("message" in o && o.message !== void 0 && { message: o.message }),
    ...je(o),
    ...(getUploadOriginFacts(e?.createFacts?.origin).fromUpload && { started_from_upload: !0 }),
    file_mode: t,
    file_mode_source: "stored",
  };
}
function je(e) {
  if (e.state !== "armed") return {};
  return {
    ...(e.firstUpload !== null && { first_upload: e.firstUpload }),
    ...(e.syncedFiles !== null && { synced_files: e.syncedFiles }),
    ...(e.writerElsewhere && { other_window: !0 }),
    ...(e.direction !== "pending" && { direction: e.direction }),
  };
}
function Bt({ dirSync: e, fileMode: t }) {
  let o = Lt({ dirSync: e, fileMode: t });
  logEvent("tengu_remote_headless_laptop_linked", {
    sync_state: fromEnum(o.state),
    sync_reason: fromEnumOpt("reason" in o ? o.reason : void 0),
    file_mode: fromEnum(t),
    has_dir_sync: e !== void 0,
  });
}
var Ts = 5000,
  Hs =
    "Error: headless --cloud reads the SDK host messages from stdin as stream-json; stdin is a terminal here.";
function Wt(e, t) {
  return {
    sessionId: t,
    orgUuid: e.orgUUID,
    getAccessToken: () => getAccessTokenWithCcrFallback() ?? e.accessToken,
    onAuth401: handleOAuth401Error,
    onWorkerSessionId: (o) => {
      $p(_m(o), "remote_attach");
    },
  };
}
async function Us() {
  let e = await localBindIdentity({ accountUuid: jt() });
  return e.ok ? void 0 : e.error;
}
function jt() {
  return getStoredOauthAccountInfo()?.accountUuid;
}
function xs(e) {
  let t = getSelectablePermissionMode(e);
  return t === void 0 || (t === "default" && e !== PERMISSION_MODE_MANUAL_ALIAS)
    ? []
    : [
        {
          request: { subtype: "set_permission_mode", mode: t },
          required: t === "plan" || t === "dontAsk",
          describe: `--permission-mode ${t}`,
        },
      ];
}
var Ls = new AbortController().signal;
function zt({
  signal: e,
  credentials: t,
  dirSync: o,
  homeSeed: r,
  servedTools: d,
  servedToolsUnavailable: p,
  ..._
}) {
  return {
    ..._,
    bound: _.binding === "bound",
    signal: e ?? Ls,
    ...(t && { credentials: t }),
    ...(o && { dirSync: o }),
    ...(r && { homeSeed: r }),
    ...(d && { servedTools: d }),
    ...(p && { servedToolsUnavailable: p }),
  };
}
async function Kt(e, t, o) {
  return { servedToolsUnavailable: "external_build" };
}
function $t(e) {
  let t = new ne();
  return (t.adopt(e), t.dispose());
}
async function Qt(e, t, { entry: o, opener: r, features: d = [] }) {
  let p = await js(e, t, o);
  if (p.kind === "refused") {
    (await logFeatureBadAsync("remote_headless_session", p.code), printCliError(p.message), await gracefulShutdown(1));
    return;
  }
  let { input: _, policy: w } = p;
  (w.notices.forEach(Ye), setHasFormattedOutput(!0), kz(!0));
  let k = await Rt({
    input: _,
    replayUserMessages: e.effectiveReplayUserMessages,
    includePartialMessages: e.effectiveIncludePartialMessages,
    initializePolicy: "strict",
    ignoredOptions:
      o === "create"
        ? w.ignored
        : dedupe([
            ...w.ignored,
            ...$s(w.forwarded, e, e.effectiveModel ?? a.ANTHROPIC_MODEL),
          ]),
    openingInitializeHonours: o === "create" ? FORWARDED_SYSTEM_PROMPT_OPTION_KEYS : [],
    openSession: async (D) => {
      let E;
      try {
        E = await prepareApiRequest();
      } catch (I) {
        return (
          await logFeatureBadAsync("remote_headless_session", "auth"),
          {
            kind: "failed",
            message: `Error: ${formatDisplayText(l(I), Qe) || "Failed to authenticate"}`,
          }
        );
      }
      try {
        let I = await r({
          apiCreds: E,
          host: D,
          forwarded: o === "create" ? mergeForwardedSystemPromptOptions(w.forwarded, D.initialize) : {},
          features: d,
          storageV5: e.storageV5,
          credentials: e.credentials,
        });
        return Ws(I, Bs(w.notApplied, D.initialize, o));
      } catch (I) {
        return (
          await logFeatureBadAsync("remote_headless_session", "open_threw"),
          {
            kind: "failed",
            message: `Error: ${formatDisplayText(l(I), Qe) || "Unable to open the cloud session"}`,
          }
        );
      }
    },
  }).done;
  if (k.message && k.exitCode === 0) Ye(k.message);
  else if (k.message) printCliError(k.message);
  await gracefulShutdown(k.exitCode);
}
var ze = 12,
  Qe = 2000,
  Ns = 40;
function Bs(e, t, o) {
  let r = new Set(o === "attach" ? FORWARDED_SYSTEM_PROMPT_OPTION_KEYS : []),
    d =
      t === null
        ? []
        : validateCloudInitializeOptions(
            t,
            "strict",
            new Set([...(o === "create" ? FORWARDED_SYSTEM_PROMPT_OPTION_KEYS : []), "supportedDialogKinds"]),
          ).ignored.map((O) => ({
            kind: r.has(O) ? "kept" : getOptionRetentionKind(O),
            name: `initialize.${O}`,
          })),
    p = { lost: 0, kept: 1, preference: 2 },
    _ = [...e, ...d].sort((O, A) => p[O.kind] - p[A.kind]),
    w = (O) => _.filter((A) => A.kind === O),
    C = w("lost"),
    k = w("kept"),
    D = w("preference"),
    E = (O) =>
      O.kind === "lost" && O.why !== void 0 ? `${O.name} (${O.why})` : O.name,
    I = [
      ...(k.length > 0
        ? [
            `An existing cloud session keeps the configuration it was created with; not applied: ${Ke(k.map(E))}.`,
          ]
        : []),
      ...(D.length > 0
        ? [
            `Host options not applied to this cloud session (it runs with the cloud container's own configuration): ${Ke(D.map(E))}.`,
          ]
        : []),
    ].join(" ");
  return {
    notices: [
      ...(C.length > 0
        ? [
            {
              level: "warning",
              text: `Not applied to this cloud session, where the agent runs with the cloud container's own configuration: ${Ke(C.map(E))}.`,
            },
          ]
        : []),
      ...(I ? [{ level: "notice", text: I }] : []),
    ],
    entries: _.slice(0, Ns),
  };
}
function Ke(e) {
  return e.length > ze
    ? `${e.slice(0, ze).join(", ")} (and ${e.length - ze} more)`
    : e.join(", ");
}
function Ws(e, t) {
  if (e.kind !== "opened" || t.entries.length === 0) return e;
  let { session: o } = e;
  return {
    ...e,
    session: {
      ...o,
      notices: [...(o.notices ?? []), ...t.notices],
      cloudSession: () => ({
        ...o.cloudSession(),
        not_applied: t.entries.map(({ kind: r, name: d }) => ({
          name: d,
          kind: r,
        })),
      }),
    },
  };
}
function Ye(e) {
  if ((logForDebugging(`[headlessCloud] ${e}`), process.stderr.isTTY))
    process.stderr.write(`${e}
`);
}
async function js(e, t, o) {
  let r = await validateForceLoginOrg();
  if (!r.valid) return { kind: "refused", code: "org_pin", message: r.message };
  await waitForPolicyLimitsToLoad();
  let d = getCloudSessionsUnavailableReason();
  if (d)
    return { kind: "refused", code: "unavailable", message: `Error: ${d}` };
  let p = e.inputPrompt;
  if (typeof p === "string")
    return { kind: "refused", code: "no_stream_input", message: Hs };
  let _ = checkCloudSessionCliOptions(t, {
    entry: o,
    mcpConfigFlagServers: e.mcpConfigFlagServers,
    flagSettings: getSettingsForSource("flagSettings"),
    systemPrompt: e.systemPromptCli,
    appendSystemPrompt: e.appendSystemPromptCli,
    selectedAgentDefinition: e.mainThreadAgentDefinition ?? null,
  });
  return _.kind === "rejected"
    ? {
        kind: "refused",
        code:
          _.reason === "tool_restriction"
            ? "rejected_tool_restriction"
            : _.reason === "unsupported"
              ? "rejected_unsupported"
              : "rejected_argv",
        message: _.message,
      }
    : { kind: "ready", input: p, policy: _ };
}
function runHeadlessCloudCreate(e, t, o) {
  return Qt(e, t, {
    entry: "create",
    opener: (r) => zs(e, { ...r, sessionHost: o }),
    features: Gt(e, o),
  });
}
function Gt(e, t) {
  return [
    At({
      forwardHomeSettings: e.forwardHomeSettings,
      ...(e.homeSettingsConsent && { consentMode: e.homeSettingsConsent }),
    }),
    Ft({ memory: cloudPluginsForwarderMemories.of(t), reachMemory: reachMemories.of(t) }),
    dt({ getTools: () => e.tools, memory: deviceHooksProcessMemories.of(t) }),
    at({ openChannel: openServedChannel }),
  ];
}
async function zs(
  e,
  {
    apiCreds: t,
    forwarded: o,
    host: r = { initialize: null },
    features: d = [],
    storageV5: p,
    credentials: _,
    sessionHost: w,
  },
  C = {},
) {
  let k = C.teleport ?? teleportToRemote,
    D = getBranchMode(e.poolOnBranch, e.poolRef),
    E = await (C.bindPreflight ?? Us)();
  if (E !== void 0)
    return (
      await logFeatureBadAsync("remote_headless_session", "bind_unavailable", { reason: fromEnum(E) }),
      { kind: "failed", message: formatSessionNotCreatedMessage(E) }
    );
  let I = new AbortController(),
    O = registerCleanup(() => I.abort()),
    A = createLinkedAbortSignal(I.signal, { signalB: r.signal }),
    R = await Pt({
      dialogs: r.dialogs,
      explicitRef: e.poolOnBranch
        ? { revision: e.poolOnBranch, flag: "--on-branch" }
        : e.poolRef
          ? { revision: e.poolRef, flag: "--ref" }
          : void 0,
      storageV5: p,
      signal: A.signal,
      seams: C.syncConsent,
    }),
    F = A.signal.aborted;
  if ((A.cleanup(), F))
    return (
      O(),
      { kind: "failed", message: "Error: Unable to create cloud session" }
    );
  let H = await (C.settingsToCloudEnabled ?? isSettingsToCloudEnabled)().catch(() => !1),
    M = getInitialSettings(),
    U =
      H &&
      e.forwardHomeSettings !== !1 &&
      (e.homeSettingsConsent ?? getStoredRemoteHomeSettingsMode()) === "forward",
    Q = buildPermissionModeSeed({
      gateOn: U,
      permissionModeTyped: e.permissionModeCli !== void 0,
      dangerouslySkipPermissions: !1,
      scrubbed: isScrubEnabled(),
      settings: M,
      effort: void 0,
    }),
    L = getMainLoopModel(),
    N = (C.internalModel ?? isInternalModel)(L),
    z = getSelectablePermissionMode(e.permissionModeCli),
    P = resolveInitialPermissionMode({
      model: L,
      internal: N,
      explicitMode: z,
      droppedMode: e.permissionModeCli !== void 0 && z === void 0,
      pinnedDefault: e.permissionModeCli !== PERMISSION_MODE_MANUAL_ALIAS,
      settingsMode: Q.settingsDefault,
      settingsModeForwardable: U,
      autoSeedable: isAutoModeSeedable(M) && !isScrubEnabled(),
      publicModel: getDefaultOpusModel(),
      repositoryModel: N
        ? (C.repositoryModel ?? getRepositoryModelSource)({
            model: L,
            modelCli: e.modelCli,
            agent: e.mainThreadAgentDefinition,
            agentSelectedByCli: e.agentCli !== void 0,
            agents: e.agentDefinitions.allAgents,
            effectiveModel: e.effectiveModel,
            initialMainLoopModel: e.initialMainLoopModel,
            restrictedModel: e.restrictedModel,
          })
        : void 0,
      trustedPlanDisplaced: isTrustedPlanModeDisplaced(M),
    });
  if (P.notice !== void 0) Ye(P.notice.text);
  if (P.action !== "none")
    logEvent("tengu_remote_model_gate_hint", {
      entry_point: S("cloud_headless"),
      permission_mode: fromEnumOpt(z) ?? S("unset"),
      action: fromEnum(P.action),
      ...(P.repositoryModel && { repository_model: fromEnum(P.repositoryModel) }),
    });
  logEvent("tengu_remote_create_session", {
    has_initial_prompt: S("false"),
    forwarded_count: Object.keys(o).length,
    entry_point: fromEnum("cloud_headless"),
    branch_mode: D,
  });
  let B = createLinkedAbortSignal(I.signal, { signalB: r.signal });
  await Ot({
    dialogs: r.dialogs,
    permissionMode: P.permissionMode,
    signal: B.signal,
    seams: C.unattendedConsent,
  });
  let K = B.signal.aborted;
  if ((B.cleanup(), K))
    return (
      O(),
      { kind: "failed", message: "Error: Unable to create cloud session" }
    );
  let V = { status: "unbound", reason: void 0 },
    Xt = () => V,
    Zt = {
      orgUuid: t.orgUUID,
      accountUuid: jt(),
      onBound: (q) => {
        V = { status: "bound", deviceId: q };
      },
      onUnbound: (q) => {
        V = { status: "unbound", reason: q };
      },
    },
    fe,
    Jt = e.poolOnBranch ?? e.poolRef ?? (await (C.currentBranch ?? getBranch)()),
    x = await k({
      initialMessage: null,
      signal: I.signal,
      source: "remote",
      branchName: Jt || void 0,
      title: e.sessionNameArg || void 0,
      description: e.remote || void 0,
      reuseOutcomeBranch: e.poolOnBranch ?? void 0,
      explicitRef: e.poolOnBranch ?? e.poolRef ?? void 0,
      deviceBinding: Zt,
      model: L,
      permissionMode: P.permissionMode,
      proactivityLevel: o.proactivityLevel,
      appendSystemPrompt: o.appendSystemPrompt,
      customSystemPrompt: o.customSystemPrompt,
      appendSubagentSystemPrompt: o.appendSubagentSystemPrompt,
      effort: o.effort,
      fallbackModel: o.fallbackModel,
      maxBudgetUsd: o.maxBudgetUsd,
      allowedTools: o.allowedTools,
      thinking: o.thinking,
      storageV5: p,
      credentials: _,
      allowBundle: !0,
      seedDirSync: !0,
      seedSignal: I.signal,
      staysAttached: !0,
      forwardHomeSettings: e.forwardHomeSettings,
      ...(e.homeSettingsConsent && {
        homeSettingsConsent: e.homeSettingsConsent,
      }),
      onBundleFail: (q, ve) => {
        fe = {
          message: q,
          reason: ve === "env_create" ? "env_create_failed" : "bundle_failed",
          detail: void 0,
        };
      },
      onCreateFail: (q, ve, en) => {
        fe = { message: q, reason: ve, detail: en };
      },
    }).finally(O);
  if (x === null) {
    let q = fe;
    if (
      (await logEventAsync("tengu_remote_create_session_error", {
        error: I.signal.aborted ? S("aborted") : q ? fromEnum(q.reason) : S("unknown"),
        entry_point: fromEnum("cloud_headless"),
        branch_mode: D,
        ...(q?.detail?.endpoint && { create_endpoint: fromEnum(q.detail.endpoint) }),
        ...(q?.detail?.serverReason && {
          server_reason: fromEnum(q.detail.serverReason),
        }),
        ...(q?.detail?.preflightTransient !== void 0 && {
          deny_transient: S(q.detail.preflightTransient ? "true" : "false"),
        }),
      }),
      !I.signal.aborted)
    )
      await logFeatureBadAsync("remote_headless_session", "create_failed");
    return {
      kind: "failed",
      message: q
        ? `Error: ${formatDisplayText(q.message, Qe)}`
        : "Error: Unable to create cloud session",
    };
  }
  let Ze = Ht(x.id, C.laptop),
    ge = async () => {
      (I.abort(), await qt(Ze, C.laptop));
    },
    j = Xt();
  if (j.status === "unbound") await ge();
  await logEventAsync("tengu_remote_create_session_success", {
    session_id: hashForTelemetry(x.id),
    entry_point: fromEnum("cloud_headless"),
    branch_mode: D,
    home_seed_started: x.homeSeed !== void 0,
    ...(e.homeSettingsConsent && {
      home_settings_host_consent: fromEnum(e.homeSettingsConsent),
    }),
  });
  let Se = buildClaudeAiSessionUrl(x.id, void 0, { from: "cli", m: "0" }),
    Je = () => (C.archiveSession ?? archiveRemoteSession)(x.id, Ts).catch(() => !1);
  if (j.status === "unbound") {
    let q = await Je();
    return (
      await logFeatureBadAsync("remote_headless_session", "unbound", {
        reason: fromEnumOpt(j.reason) ?? S("unknown"),
        archived: q,
      }),
      { kind: "failed", message: formatSessionBindFailedMessage(x.id, j.reason, Se, q) }
    );
  }
  let et = Wt(t, x.id),
    te = await Ze;
  Yt(te, r.dialogs);
  let _e = await Ks({
    sessionId: x.id,
    orgUuid: t.orgUUID,
    deviceId: j.deviceId,
    getAccessToken: et.getAccessToken,
    dirSync: te,
    storageV5: p,
    servedSettingsChanged: Vt(w),
    seams: C,
  }).then(
    (q) => ({ link: q }),
    async (q) => (await ge(), logError(q), { error: l(q) }),
  );
  if ("error" in _e) {
    let q = await Je();
    return (
      await logFeatureBadAsync("remote_headless_session", "link_failed", { archived: q }),
      { kind: "failed", message: formatSessionSetupFailedMessage(x.id, _e.error, Se, q) }
    );
  }
  let { link: ue } = _e,
    tt = await Ce(
      d,
      zt({
        sessionId: x.id,
        binding: "bound",
        trigger: "create",
        storageV5: p,
        credentials: _,
        settingsToCloud: H,
        dirSync: te,
        homeSeed: x.homeSeed,
        ...(await Kt(x.id, j.deviceId, ue.bridge)),
        signal: r.signal,
      }),
    );
  logFeatureOk("remote_headless_session");
  let nt = [...R, ...(P.notice !== void 0 ? [P.notice] : [])];
  return {
    kind: "opened",
    session: {
      entry: "create",
      ...et,
      ...(j.status === "bound" && { eventSigner: deviceEventSignerFor(j.deviceId, _) }),
      featureHandles: tt,
      hasTitle: Boolean(e.sessionNameArg || e.remote),
      ...(nt.length > 0 && { notices: nt }),
      ...(P.permissionMode !== void 0 && {
        requestedPermissionMode: P.permissionMode,
      }),
      dirSync: te,
      settle: (q) => xt(I, q, C.laptop),
      dispose: async () => {
        (await ge(), await ue.bridge.stop(), await $t(tt));
      },
      cloudSession: () =>
        createCloudSessionRecord({
          sessionId: x.id,
          viewUrl: Se,
          device: {
            status: "bound",
            device_id: j.deviceId,
            display_name: ue.displayName,
          },
          directorySync: Nt({ dirSync: te, fileMode: ue.fileMode }),
        }),
    },
  };
}
async function Ks({
  sessionId: e,
  orgUuid: t,
  deviceId: o,
  getAccessToken: r,
  dirSync: d,
  storageV5: p,
  servedSettingsChanged: _,
  seams: w,
}) {
  let C = await (w.remoteFileMode ?? We)(d?.gitRoot),
    k = (w.deviceDisplayName ?? buildDefaultDeviceDisplayName)(),
    D = Ut(
      {
        sessionId: e,
        orgUuid: t,
        deviceId: o,
        getAccessToken: r,
        storageV5: p,
        dirSync: d !== void 0,
        servedSettingsChanged: _,
      },
      w.laptop,
    );
  return (
    D.started.then((E) => {
      if (!E)
        logForDebugging(
          "[headlessCloud] the device bridge did not start (gate off or account not fully configured); the session stays bound without laptop tools",
        );
    }),
    Bt({ dirSync: d, fileMode: C }),
    { fileMode: C, displayName: k, bridge: D }
  );
}
function runHeadlessCloudAttach(e, t, o, r) {
  return Qt(e, t, {
    entry: "attach",
    opener: (d) =>
      Qs({ ...d, openingRequests: xs(e.permissionModeCli), sessionHost: r }, o),
    features: Gt(e, r),
  });
}
function Vt(e) {
  return e === void 0 ? void 0 : deviceHooksProcessMemories.of(e).servedSettingsChanged;
}
function Yt(e, t) {
  e?.sync.onOffline?.((o) => Dt(t, o));
}
function $s(e, t, o) {
  return [
    ["appendSystemPrompt", e.appendSystemPrompt],
    ["systemPrompt", e.customSystemPrompt],
    ["appendSubagentSystemPrompt", e.appendSubagentSystemPrompt],
    ["effort", e.effort],
    ["fallbackModel", e.fallbackModel],
    ["maxBudgetUsd", e.maxBudgetUsd],
    ["allowedTools", e.allowedTools?.length],
    ["thinking", e.thinking],
    ["proactivity", e.proactivityLevel],
    ["model", o],
    ["name", t.sessionNameArg],
  ]
    .filter(([, d]) => Boolean(d))
    .map(([d]) => d);
}
async function Qs(
  {
    apiCreds: e,
    host: t = { initialize: null },
    features: o = [],
    storageV5: r,
    credentials: d,
    sessionHost: p,
    openingRequests: _ = [],
  },
  w,
  C = {},
) {
  let k = toCompatSessionId(w);
  logEvent("tengu_remote_attach_session", {
    session_id: sanitizeAnalyticsId(k),
    entry_point: fromEnum("cloud_headless"),
  });
  let D = buildClaudeAiSessionUrl(k, void 0, { from: "cli", m: "0" }),
    E = Wt(e, k),
    I = (C.fetchSession ?? fetchSession)(k, e),
    O = await I.then(
      (P) => ({
        archived: P.session_status === "archived",
        awaitsAnswer: P.session_status === "requires_action",
        unreadable: !1,
      }),
      (P) => {
        if (P instanceof Iu) return { refused: P.formattedMessage || l(P) };
        return (
          logForDebugging(
            `[headlessCloud] attach preflight failed (continuing via the stream): ${l(P)}`,
          ),
          { archived: !1, awaitsAnswer: !1, unreadable: !0 }
        );
      },
    );
  if ("refused" in O)
    return (
      await logFeatureBadAsync("remote_headless_session", "attach_refused"),
      { kind: "failed", message: `Error: ${formatDisplayText(O.refused ?? "", 300)}` }
    );
  if (O.archived)
    return (
      logEvent("tengu_remote_attach_session_rejected", {
        reason: S("archived"),
        entry_point: fromEnum("cloud_headless"),
      }),
      await logFeatureBadAsync("remote_headless_session", "attach_archived"),
      { kind: "failed", message: formatSessionArchivedMessage(k, D) }
    );
  let A = await to(k, C).then(
    (P) => ({ position: P }),
    (P) => ({ error: l(P) }),
  );
  if ("error" in A)
    return (
      await logFeatureBadAsync("remote_headless_session", "attach_stream_position"),
      {
        kind: "failed",
        message: `Error: could not read where cloud session ${formatSessionIdForDisplay(k)}'s stream stands (${formatDisplayText(A.error, 200)}).`,
      }
    );
  let R = (C.resolveBinding ?? resolveAttachDeviceBinding)({
      sessionId: k,
      storageV5: r,
      session: I.then((P) => ({
        archived: P.session_status === "archived",
        boundDeviceId: P.bound_device_uuid,
      })),
    }),
    F = (C.attachDirSync ?? eo)(k, pullsBackToThisMachine(R), d, r, p),
    H = (C.registerDevice ?? registerAttachedDevice)({
      sessionId: k,
      getAccessToken: E.getAccessToken,
      orgUuid: e.orgUUID,
      binding: R,
      storageV5: r,
      dirSync: F.then(
        (P) => P.handle !== void 0,
        () => !1,
      ),
      servedSettingsChanged: Vt(p),
    });
  registerCleanup(() => H.stop());
  let [M, U, Q] = await Promise.all([
      R,
      F,
      (C.settingsToCloudEnabled ?? isSettingsToCloudEnabled)().catch(() => !1),
    ]),
    L = U.handle;
  Yt(L, t.dialogs);
  let N = await (C.remoteFileMode ?? We)(L?.gitRoot);
  if (O.unreadable) logFeatureSad("remote_headless_session", "attach_session_unreadable");
  else if (U.handle === void 0 && U.why === "lookup_failed")
    logFeatureSad("remote_headless_session", "attach_dir_sync_lookup_failed");
  else if (U.handle === void 0 && U.why === "elsewhere_unknown")
    logFeatureSad("remote_headless_session", "attach_dir_sync_elsewhere_unknown");
  else logFeatureOk("remote_headless_session");
  let z = await Ce(
    o,
    zt({
      sessionId: k,
      binding: Zs(M),
      trigger: "attach",
      storageV5: r,
      credentials: d,
      settingsToCloud: Q,
      dirSync: L,
      ...(!(U.handle === void 0 && U.why === "not_looked") && {
        dirSyncElsewhere: U.handle === void 0 && U.why !== "not_armed_here",
      }),
      ...(M.status === "bound" && { ...(await Kt(k, M.deviceId, H)) }),
      signal: t.signal,
    }),
  );
  return {
    kind: "opened",
    session: {
      entry: "attach",
      ...E,
      ...(M.status === "bound" && { eventSigner: deviceEventSignerFor(M.deviceId, d) }),
      initialSequenceNum: A.position,
      ...(_.length > 0 && { openingRequests: _ }),
      ...(O.awaitsAnswer && { workerAwaitsAnswer: !0 }),
      ...(U.handle === void 0 &&
        U.why === "elsewhere" && {
          notices: [{ level: "warning", text: U.line }],
        }),
      dirSync: L,
      featureHandles: z,
      dispose: () => $t(z),
      cloudSession: () =>
        createCloudSessionRecord({
          sessionId: k,
          viewUrl: D,
          device: Js(M),
          directorySync: {
            ...Xs(U, N),
            file_mode: N,
            file_mode_source: "stored",
          },
        }),
    },
  };
}
var Gs =
    "File sync is not on for this session from this directory: the session was not seeded and armed here.",
  Vs =
    "File sync is not on for this session here: this machine could not check whether it set the session's sync up.",
  Ys =
    "File sync for this session was set up from another directory on this machine: edits here are not uploaded, and Claude's changes are not written here.";
function Xs(e, t) {
  if (e.handle === void 0)
    switch (e.why) {
      case "lookup_failed":
        return { state: "off", reason: "lookup_failed", message: Vs };
      case "elsewhere":
        return { state: "off", reason: "seeded_elsewhere", message: Ys };
      case "not_armed_here":
      case "elsewhere_unknown":
      case "not_looked":
        return t === "container_sync"
          ? { state: "off", reason: "not_seeded", message: Gs }
          : { state: "off", reason: "not_opted_in" };
    }
  let o = e.handle.sync.state();
  return {
    state: o.state,
    ...("reason" in o && { reason: o.reason }),
    ...("message" in o && { message: o.message }),
    ...je(o),
  };
}
function Zs(e) {
  switch (e.status) {
    case "bound":
      return "bound";
    case "not_applicable":
    case "created_unbound":
      return "none";
    case "unbound":
      return e.reason === "session_unreadable" ? "unknown" : "elsewhere";
    case "disabled":
      return "unknown";
  }
}
function Js(e) {
  switch (e.status) {
    case "bound":
      return { status: "bound", device_id: e.deviceId };
    case "unbound":
      return $e(e.reason);
    case "created_unbound":
      return {
        status: "unbound",
        reason: "session_unbound",
        message: formatCreatedUnboundNotice(e.reason),
      };
    case "not_applicable":
      return $e("session_unbound");
    case "disabled":
      return $e("device_tools_off");
  }
}
function $e(e) {
  return { status: "unbound", reason: e, message: describeUnboundReason(e) };
}
async function eo(e, t, o, r, d) {
  if (!isViolinWoodEnabledCached() || d === void 0) return { handle: void 0, why: "not_looked" };
  return import("../../02-功能模块/文件同步-Sync/createLaptopDirSyncSession.ga37sg6g.js")
    .then(
      async ({
        attachLaptopDirSyncSession: p,
        dirSyncElsewhereLine: _,
        dirSyncElsewhereLookup: w,
      }) => {
        let C = await p(e, {
          boundToThisMachine: t,
          credentials: o,
          host: d,
          storageV5: r,
        });
        if (C !== void 0) return { handle: C };
        switch ((await w(e, r)).kind) {
          case "elsewhere":
            return { handle: void 0, why: "elsewhere", line: _() };
          case "unknown":
            return { handle: void 0, why: "elsewhere_unknown" };
          case "nowhere":
            return { handle: void 0, why: "not_armed_here" };
        }
      },
    )
    .catch(
      (p) => (
        logForDebugging(`[headlessCloud] directory-sync lookup failed: ${l(p)}`, {
          level: "warn",
        }),
        { handle: void 0, why: "lookup_failed" }
      ),
    );
}
async function to(e, t) {
  let o = t.latestSequenceNum,
    r = o === void 0 ? await getSessionRequestTarget(e, void 0).then((d) => () => no(d)) : o;
  return r().catch(
    async (d) => (
      logForDebugging(`[headlessCloud] stream position unreadable, retrying once: ${l(d)}`),
      await sleep(t.positionRetryMs ?? so),
      r()
    ),
  );
}
async function no(e) {
  let t = await fetchLatestSessionEvents(e, 1, { reportFeatureHealth: !1 });
  if (t === null) throw Error("the session history could not be read");
  let o = t.newestSequenceNum ?? t.events.at(-1)?.sequenceNum;
  if (o) return o;
  if (t.events.length > 0 || t.hasMore || (t.droppedRows ?? 0) > 0)
    throw Error("the newest event could not be read");
  return 0;
}
var so = 500;
export { runHeadlessCloudAttach, runHeadlessCloudCreate };
