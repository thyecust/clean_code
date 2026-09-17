// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import {
  hashForTelemetry,
  recordCredentialInvalidation,
  clearCredentialInvalidation,
  elicitationResponseSchema,
  userDialogResponseSchema,
  workSecretResponseSchema,
  oauthTokenRefreshResponseSchema,
  hostAuthTokenRefreshResponseSchema,
  stdoutMessageSchema,
  isPluginSteeredAgent,
  getForegroundSubagentId,
  BASH_TOOL_NAME,
  POWERSHELL_TOOL_NAME,
  clearOAuthTokenCache,
  getFeatureValue_CACHED_MAY_BE_STALE,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Xn, K, he, sn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { withTimeout } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { Ve, zi, yt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { jsonStringify, jsonParse, redactSecretsFromText, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { writeToStdout, drainStdoutBeforeExit } from "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logError } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { writeDiagnosticsEvent, flushDiagnostics } from "../../01-核心基础设施/共享小工具-未细化/diagnostics-log.js";
import { truncate } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { cs } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { drainRegisteredWriteQueues } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { stripAnsi, formatSingleLineText } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { HOOK_REWRITE_HEADLESS_DENY_REASON, CAN_USE_TOOL_STREAM_CLOSED_DENY_REASON, CAN_USE_TOOL_INVALID_RESULT_DENY_REASON, CAN_USE_TOOL_REQUEST_FAILED_DENY_REASON, CAN_USE_TOOL_ABORTED_DENY_REASON } from "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import { TOOL_USE_SUMMARY_MAX_CHARS } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { sanitizeTextForDisplay } from "../../02-功能模块/策略限制-PolicyLimits/chunk-8sw91yn5.js";
import { getToolPermissionContext } from "../../02-功能模块/权限系统/chunk-fjrcf22x.js";
import { applyPermissionUpdates, isPersistableSettingsSource, persistPermissionUpdates } from "../../02-功能模块/记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { turnAbortControllerOf } from "../核心应用-Agent循环/chunk-h3cty6gp.js";
import { EXIT_PLAN_MODE_TOOL_NAME_ALIAS } from "../../02-功能模块/计划模式-Plan/计划模式-Plan.e5mh1avy.js";
import {
  getUserDialogTimeoutMs,
  getDecisionReasonText,
  isMisleadingConsentHost,
  consentHostEntry,
  SandboxManager,
  buildCommandRuleSuggestions,
  pickAllowedToolInputProps,
  SANDBOX_NETWORK_ACCESS_TOOL_NAME,
  stripWholeToolGrantsForAsk,
  withoutGrantsForRemoteScope,
  guardHookUpdatedInput,
  hasPermissionsToUseTool,
  hookUpdatedInputSatisfiesInteraction,
  checkRuleBasedPermissions,
  findSafetyCheckReason,
  NOTIFICATION_DELAY_MS,
  executePermissionRequestHooks,
  logPermissionRequestShown,
  logPermissionDecisionFromHostAnswer,
  permissionUpdateSchema,
  isBridgeToolNameMismatch,
  formatToolDisplayName,
  hookOutputSchema,
  stringifyJsonSafe,
  executeNotificationHooks,
} from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isExiting, getNeverResolvingPromise } from "../../01-核心基础设施/共享小工具-未细化/exit-commit-state.js";
import { ASK_USER_QUESTION_TOOL_NAME } from "../../02-功能模块/工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import { WEB_FETCH_TOOL_NAME } from "../../02-功能模块/制品发布-Artifact/chunk-01ymf0ar.js";
import { CONNECT_GITHUB_TOOL_NAME } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { normalizeRequestIdFields, recordOutboundRequestId, markPromptRequestResolved } from "../../02-功能模块/远程控制-Bridge/chunk-5ne99rq3.js";
import { SessionStateStore } from "../../02-功能模块/远程控制-Bridge/chunk-1yq098a7.js";
import { AsyncQueue } from "../../02-功能模块/会话-历史-恢复/chunk-m1xj4s02.js";
import { ServingInstanceGoneError, RequestDeliveryUnknownError, RequestWithdrawnUnsentError, RequestNotDeliveredError } from "../../01-核心基础设施/共享小工具-未细化/request-delivery-errors.js";
import { isJsonRpcRequest } from "../../01-核心基础设施/共享小工具-未细化/sdk-mcp-transports.js";
import { buildPendingActionDetail, markUserInteraction, isUserDrivenInbound, isHumanInputRequest } from "./chunk-yb7jadvp.js";
import { createLinkedAbortSignal } from "../../01-核心基础设施/共享小工具-未细化/linked-abort-signal.js";
import { AA, s, O, tB, se, v, c, $e, fe, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var Je = createLazyValue(() =>
    c({
      tool_name: s().describe("The name of the tool requesting permission"),
      input: fe(s(), se()).describe("The input for the tool"),
      tool_use_id: s().optional().describe("The unique tool use request ID"),
    }),
  ),
  te = createLazyValue(() =>
    X(["user_temporary", "user_permanent", "user_reject"])
      .optional()
      .catch(void 0),
  ),
  me = createLazyValue(() =>
    c({
      behavior: k("allow"),
      updatedInput: fe(s(), se()).optional(),
      updatedPermissions: v(permissionUpdateSchema())
        .optional()
        .catch((t) => {
          logForDebugging(
            `Malformed updatedPermissions from SDK host ignored: ${t.error.issues[0]?.message ?? "unknown"}`,
            { level: "warn" },
          );
          return;
        }),
      toolUseID: s().optional(),
      decisionClassification: te(),
    }),
  ),
  ge = createLazyValue(() =>
    c({
      behavior: k("deny"),
      message: s(),
      interrupt: O().optional(),
      toolUseID: s().optional(),
      decisionClassification: te(),
    }),
  ),
  permissionResultSchema = createLazyValue(() => $e([me(), ge()])),
  PERMISSION_RESULT_SHAPE_HINT =
    "Expected {behavior: 'allow', updatedInput?: object} or {behavior: 'deny', message: string}.";
function F(t, e, r, o, l) {
  if (o.forRemoteExecution === !0 || isPluginSteeredAgent(o)) return;
  if (t && e.suppressesAllPermissionUpdates?.(r) === !0) {
    let d = withoutGrantsForRemoteScope(t);
    return d.length > 0 ? d : void 0;
  }
  return t && (e.suppressesAlwaysAllowRule?.(r) === !0 || l)
    ? stripWholeToolGrantsForAsk(t, e, getToolPermissionContext(o))
    : t;
}
function finalizePermissionPromptToolResult(t, e, r, o, l = e, d = !1) {
  let p = {
    type: "permissionPromptTool",
    permissionPromptToolName: e.name,
    toolResult: t,
  };
  if (t.behavior === "allow") {
    let f = F(t.updatedPermissions, l, r, o, d);
    if (f?.length)
      (o.setSessionToolPermissionContext((_) => applyPermissionUpdates(_, f)),
        persistPermissionUpdates(f, o.storageV5).catch(logError));
    let g =
      t.updatedInput && Object.keys(t.updatedInput).length > 0
        ? t.updatedInput
        : pickAllowedToolInputProps(l.name, r);
    return { ...t, updatedInput: g, decisionReason: p };
  } else if (t.behavior === "deny" && t.interrupt)
    (logForDebugging(
      `SDK permission prompt deny+interrupt: tool=${e.name} message=${t.message}`,
    ),
      turnAbortControllerOf(o.abortController).abort());
  return { ...t, decisionReason: p, decideLocation: "ask-path" };
}
import { randomUUID as M } from "crypto";
var _e = "tengu_cinder_swift";
function j() {
  return getFeatureValue_CACHED_MAY_BE_STALE(_e, "off") === "interrupt";
}
function x(t, e, r) {
  if (a.CLAUDE_CODE_DISABLE_PERMISSION_PROMPT_NOTIFY_HOOKS) return () => {};
  let o = setTimeout(
    (l, d, p) => {
      executeNotificationHooks(
        { id: K(), project: { originalCwd: he(), projectRoot: sn() } },
        {
          message: `Claude needs your permission to use ${l}`,
          notificationType: "permission_prompt",
        },
        { storageV5: d, credentials: p },
      ).catch(() => {});
    },
    NOTIFICATION_DELAY_MS,
    t,
    e,
    r,
  );
  return (o.unref(), () => clearTimeout(o));
}
import { randomUUID as Re } from "crypto";
function B(t, e) {
  try {
    return t.getToolUseSummary?.(e) ?? t.getActivityDescription?.(e) ?? "";
  } catch (r) {
    return (logForDebugging(`describeToolUseForPush failed: ${r}`, { level: "error" }), "");
  }
}
function ye(t, e) {
  if (!t.requiresUserInteraction?.()) return;
  switch (t.name) {
    case ASK_USER_QUESTION_TOOL_NAME: {
      let r = Array.isArray(e?.questions) ? e.questions : [],
        o = r[0],
        l = o?.header || o?.question,
        d = r.length > 1 ? ` (+${r.length - 1} more)` : "";
      return { label: "Question", body: l ? l + d : "Tap to answer" };
    }
    case EXIT_PLAN_MODE_TOOL_NAME_ALIAS:
      return { label: "Plan", body: "Plan ready for review" };
    case CONNECT_GITHUB_TOOL_NAME:
      return { label: formatToolDisplayName(t.name), body: "" };
    default:
      return { label: formatToolDisplayName(t.name), body: "" };
  }
}
function ne(t, e, r, o, l) {
  let d = ye(t, e);
  if (d)
    return {
      tool_name: t.name,
      display_tool_name: d.label,
      action_description: d.body,
      raw_command: void 0,
      tool_use_id: r,
      request_id: "",
      ...(o && { suppressed_request_id: o }),
      input: e,
    };
  let p =
      (t.name === BASH_TOOL_NAME || t.name === POWERSHELL_TOOL_NAME) && typeof e.command === "string"
        ? redactSecretsFromText(e.command)
        : void 0,
    f =
      p !== void 0
        ? typeof e.description === "string" && e.description
          ? redactSecretsFromText(e.description)
          : truncate(p, TOOL_USE_SUMMARY_MAX_CHARS)
        : redactSecretsFromText(B(t, e));
  return {
    tool_name: t.name,
    display_tool_name: formatToolDisplayName(t.name),
    action_description: f,
    raw_command: p,
    tool_use_id: r,
    request_id: l?.localDisplayOnly === !0 ? "" : o,
    ...(l?.localDisplayOnly === !0 && o && { suppressed_request_id: o }),
    input: e,
  };
}
function re(t) {
  return async (e, r, o, l, d, p) => {
    let f = p ?? (await hasPermissionsToUseTool(e, r, o, l, d));
    if (f.behavior === "allow") return f;
    if (f.behavior === "deny") {
      if (isExiting() && !o.abortController.signal.aborted) return getNeverResolvingPromise();
      return (t.emitPermissionDenied(e.name, d, o.agentId, f), f);
    }
    if (isExiting()) {
      if (o.abortController.signal.aborted)
        return {
          behavior: "deny",
          message: "Tool permission request aborted",
          toolUseID: d,
          decisionReason: CAN_USE_TOOL_ABORTED_DENY_REASON,
          decideLocation: "ask-path",
        };
      return getNeverResolvingPromise();
    }
    let g = f.updatedInput ?? r,
      _ = f.suggestions;
    if (
      e.name === BASH_TOOL_NAME &&
      typeof g.command === "string" &&
      _?.length &&
      !_.some((w) => w.destination !== "session")
    )
      _ = [...buildCommandRuleSuggestions(g.command), ..._];
    let y = new AbortController(),
      R = o.abortController.signal,
      E = R.aborted && !isExiting(),
      I = () => {
        if (!isExiting()) E = !0;
        y.abort();
      };
    R.addEventListener("abort", I, { once: !0 });
    let U = Re(),
      W = getForegroundSubagentId(o.agentContext),
      J,
      D;
    try {
      let w = be(e, d, g, o, _).then((P) => ({ source: "hook", outcome: P }));
      if ((w.catch(() => {}), t.promptShown)) {
        let P = ne(e, g, d, U, { localDisplayOnly: f.localDisplayOnly === !0 });
        ((J = W), t.promptShown(U, P, W));
      }
      let A = f.decisionReason,
        T = findSafetyCheckReason(A),
        pe = e.name === BASH_TOOL_NAME || e.name === POWERSHELL_TOOL_NAME,
        G =
          (f.metadata && "command" in f.metadata
            ? f.metadata.command.description
            : void 0) ||
          (pe && typeof g.command === "string"
            ? typeof g.description === "string" && g.description
              ? redactSecretsFromText(g.description)
              : truncate(redactSecretsFromText(g.command), TOOL_USE_SUMMARY_MAX_CHARS)
            : B(e, g)) ||
          void 0,
        Q =
          getDecisionReasonText(A) ??
          (A?.type === "subcommandResults" && T
            ? (findSafetyCheckReason(
                A,
                (P) =>
                  !P.classifierApprovable &&
                  P.circuitBreaker !== "outsideReadsBlocked",
              )?.reason ??
              (T.circuitBreaker === "outsideReadsBlocked" ? void 0 : T.reason))
            : void 0),
        V = f.localDisplayOnly ? sanitizeTextForDisplay(stripAnsi(Q ?? "")) || G : G,
        Y = x(formatToolDisplayName(e.name), o.storageV5, o.credentials),
        N = t
          .request(
            {
              subtype: "can_use_tool",
              tool_name: e.name,
              display_name: formatToolDisplayName(e.name),
              input: g,
              ...(V && { description: V }),
              permission_suggestions: _,
              blocked_path: f.blockedPath,
              decision_reason: Q,
              decision_reason_type: A?.type,
              ...(f.matchedAskRule && {
                matched_ask_rule: {
                  source: f.matchedAskRule.source,
                  tool_name: f.matchedAskRule.ruleValue.toolName,
                  ...(f.matchedAskRule.ruleValue.ruleContent !== void 0 && {
                    rule_content: f.matchedAskRule.ruleValue.ruleContent,
                  }),
                },
              }),
              classifier_approvable: T
                ? !findSafetyCheckReason(A, (P) => !P.classifierApprovable)
                : void 0,
              tool_use_id: d,
              agent_id: o.agentId,
              suppress_always_allow_rule: f.suppressAlwaysAllowRule || void 0,
              default_to_no: f.defaultToNo || void 0,
              requires_user_interaction:
                e.requiresUserInteraction?.() || f.localDisplayOnly || void 0,
            },
            y.signal,
            U,
          )
          .then((P) => ({ source: "sdk", result: P }));
      if ((N.catch(() => {}), t.isPending(U)))
        ((D = {
          logContext: {
            tool: e,
            input: g,
            messageId: l.message.id,
            toolUseID: d,
            permissionMode: getToolPermissionContext(o).mode,
            agentContext: o.agentContext,
            appliedAllowUpdates: (P) =>
              F(P, e, g, o, f.suppressAlwaysAllowRule === !0),
          },
          shownAtMs: Date.now(),
        }),
          logPermissionRequestShown(D.logContext, A?.type));
      N.then(Y, Y);
      let C = await Promise.race([w, N]);
      if (C.source === "hook") {
        if (C.outcome) {
          if (isExiting() && !E) await getNeverResolvingPromise();
          if ((y.abort(), D))
            logPermissionDecisionFromHostAnswer(
              D.logContext,
              {
                kind: "hook",
                behavior:
                  C.outcome.decision.behavior === "allow" ? "allow" : "deny",
                permanent: C.outcome.permanent,
              },
              D.shownAtMs,
            );
          if (C.outcome.interrupt)
            (logForDebugging(
              `Hook interrupt: tool=${e.name} hookMessage=${C.outcome.decision.message}`,
            ),
              turnAbortControllerOf(o.abortController).abort());
          return C.outcome.decision;
        }
      }
      let Z = C.source === "hook" ? (await N).result : C.result;
      if (D) logPermissionDecisionFromHostAnswer(D.logContext, { kind: "host_answer", answer: Z }, D.shownAtMs);
      return finalizePermissionPromptToolResult(Z, e, g, o, e, f.suppressAlwaysAllowRule === !0);
    } catch (w) {
      if (isExiting() && t.isPending(U)) await getNeverResolvingPromise();
      if (t.interruptedAtStreamClose(U) && j()) {
        try {
          (logEvent("tengu_auq_park_interrupted_at_stream_close", {
            stream_closed: w instanceof zi,
          }),
            logForDebugging(
              `Interrupting parked AskUserQuestion toolUseID=${d} at stream close (deny skipped; turn aborts as shutdown)`,
            ));
        } catch {}
        throw w;
      }
      let A = `Tool permission request failed: ${w}`,
        T = CAN_USE_TOOL_REQUEST_FAILED_DENY_REASON;
      if (w instanceof AA)
        (logForDebugging(
          `canUseTool returned a schema-invalid permission result for ${e.name}: ${w.message.slice(0, 2000)}`,
          { level: "error" },
        ),
          (A = `The canUseTool callback returned an invalid permission result. ${PERMISSION_RESULT_SHAPE_HINT}`),
          (T = CAN_USE_TOOL_INVALID_RESULT_DENY_REASON));
      else if (w instanceof zi) T = CAN_USE_TOOL_STREAM_CLOSED_DENY_REASON;
      else if (yt(w) && R.aborted) {
        if (((A = "Tool permission request aborted"), (T = CAN_USE_TOOL_ABORTED_DENY_REASON), D))
          logPermissionDecisionFromHostAnswer(D.logContext, { kind: "turn_aborted" }, D.shownAtMs);
      }
      return {
        behavior: "deny",
        message: A,
        toolUseID: d,
        decisionReason: T,
        decideLocation: "ask-path",
      };
    } finally {
      (t.promptSettled(U, J), R.removeEventListener("abort", I));
    }
  };
}
async function be(t, e, r, o, l) {
  let d = getToolPermissionContext(o).mode,
    p = executePermissionRequestHooks(t.name, e, r, o, d, l, o.abortController.signal);
  for await (let f of p)
    if (
      f.permissionRequestResult &&
      (f.permissionRequestResult.behavior === "allow" ||
        f.permissionRequestResult.behavior === "deny")
    ) {
      let g = f.permissionRequestResult;
      if (g.behavior === "allow") {
        let _ = g.updatedInput || r;
        if (g.updatedInput) {
          let R = guardHookUpdatedInput(
            await checkRuleBasedPermissions(
              t,
              _,
              { ...o, toolUseId: e },
              { hookUpdatedInput: g.updatedInput },
            ),
            t.name,
          );
          if (R)
            return {
              decision:
                R.behavior === "ask"
                  ? {
                      behavior: "deny",
                      message: R.message,
                      decisionReason: R.decisionReason ?? HOOK_REWRITE_HEADLESS_DENY_REASON,
                      decideLocation: "ask-path",
                    }
                  : { ...R, decideLocation: "ask-path" },
              interrupt: !1,
              permanent: !1,
            };
        }
        if (!hookUpdatedInputSatisfiesInteraction(t, g.updatedInput) && t.requiresUserInteraction?.()) return;
        let y =
          t.suppressesAllPermissionUpdates?.(r) === !0
            ? withoutGrantsForRemoteScope(g.updatedPermissions ?? [])
            : (g.updatedPermissions ?? []);
        if (y.length > 0)
          (o.setSessionToolPermissionContext((R) => applyPermissionUpdates(R, y)),
            await persistPermissionUpdates(y, o.storageV5));
        return {
          decision: {
            behavior: "allow",
            updatedInput: _,
            userModified: !1,
            decisionReason: { type: "hook", hookName: "PermissionRequest" },
          },
          interrupt: !1,
          permanent: y.some((R) => isPersistableSettingsSource(R.destination)),
        };
      } else
        return {
          decision: {
            behavior: "deny",
            message: g.message || "Permission denied by PermissionRequest hook",
            decisionReason: { type: "hook", hookName: "PermissionRequest" },
            decideLocation: "ask-path",
          },
          interrupt: g.interrupt === !0,
          permanent: !1,
        };
    }
  return;
}
var Se = 30000,
  ve = 30000,
  ke = 45000,
  we = new Set(["CLAUDE_CODE_SESSION_ACCESS_TOKEN", "CLAUDE_CODE_OAUTH_TOKEN"]),
  Pe = 300000,
  De = 70000,
  Ae = 0.01,
  Te = 268435456;
function ie(t) {
  return `Error: stream-json input carried over ${Math.round(t / 1024 / 1024)}M characters with no newline. Each stream-json message must be a single newline-terminated JSON line: either the producer is not newline-terminating its messages, or one message exceeded this budget.`;
}
var ae = 512;
function ue(t) {
  let e = hookOutputSchema().safeParse(t);
  if (!e.success) return null;
  return (typeof t === "object" && t !== null ? Object.keys(t).length : 0) >
    0 && Object.keys(e.data).length === 0
    ? null
    : e.data;
}
function le(t) {
  let e = formatSingleLineText(truncateToCodeUnits(t, 4096), { maxCodeUnits: 512 });
  return t.length > 512 ? `${e}\u2026 [${t.length} chars total]` : e;
}
function de(t) {
  return typeof t === "string"
    ? formatSingleLineText(truncateToCodeUnits(t, 4096), { maxCodeUnits: 200 })
    : "a non-string error field";
}
function Ce(t, e) {
  if (t === "delivered" || e === "accepted") return "delivered";
  if (t === "indeterminate" || e === "indeterminate") return "indeterminate";
  return e === "sending" ? "sending" : "queued";
}
function Oe(t) {
  switch (t) {
    case "delivered":
      return "delivered";
    case "queued":
      return "queued";
    case "sending":
      return "in_flight";
    case "indeterminate":
      return "indeterminate";
  }
}
class StructuredIO {
  input;
  replayUserMessages;
  maxLineChars;
  isRemoteTransport() {
    return !1;
  }
  structuredInput;
  pendingRequests = new Map();
  sdkHostHookGeneration = 0;
  retiredHostHookAnswer;
  deviceRequests = new Map();
  publishedPendingActionDetails = new Map();
  streamCloseInterruptRequestIds = new Set();
  timedOutUserDialogs = new Map();
  restoredWorkerState = Promise.resolve(null);
  rereadWorkerState() {
    return Promise.resolve(null);
  }
  readProjectsBinding() {
    return Promise.resolve({ read: !0, assertion: void 0 });
  }
  hydratePrefetch = Promise.resolve(null);
  inputClosed = !1;
  tracksRequestDelivery = !1;
  unexpectedResponseCallback;
  resolvedToolUseIds = new Set();
  prependedLines = [];
  locallyPrependedMessages = new WeakSet();
  prependWaker = null;
  stallTimer;
  stallFired = !1;
  createdAt = Date.now();
  onControlRequestSent;
  onControlRequestResolved;
  onStreamClosedWithParkedQuestion;
  onUserDialogParked;
  hostAnswersElicitations = !0;
  onCommandLifecycle;
  commandLifecycleForwarderInstalled = !1;
  hostOwnsStdinOrigin = !0;
  persistsOutboundFrames = !1;
  sessionState;
  outbound = new AsyncQueue();
  constructor(t, e, r, o = Te) {
    this.input = t;
    this.replayUserMessages = e;
    this.maxLineChars = o;
    ((this.input = t),
      (this.sessionState = r ?? new SessionStateStore()),
      (this.sessionState.getPendingActionDetails = (l) => {
        let d = [];
        for (let [p, f] of this.publishedPendingActionDetails)
          if (this.pendingRequests.has(p) || p === l) d.push(f);
        return d;
      }),
      (this.structuredInput = this.read()));
  }
  trackResolvedToolUseId(t) {
    if (t.request.subtype === "can_use_tool")
      this.resolvedToolUseIds.add(t.request.tool_use_id);
    if (isHumanInputRequest(t)) markPromptRequestResolved(t.request_id);
  }
  flushInternalEvents() {
    return Promise.resolve();
  }
  withdrawQueuedRequest(t) {
    return !1;
  }
  flushDeliveryAcks() {
    return Promise.resolve();
  }
  flushClientEvents() {
    return Promise.resolve(!0);
  }
  flushInternalEventsConfirmed() {
    return Promise.resolve(!0);
  }
  flushSessionState() {
    return Promise.resolve(!0);
  }
  get internalEventsPending() {
    return 0;
  }
  repliesLeftForNextProcess = 0;
  prependUserMessage(t) {
    (this.prependedLines.push(
      jsonStringify({
        type: "user",
        session_id: "",
        message: { role: "user", content: t },
        parent_tool_use_id: null,
      }),
    ),
      this.prependWaker?.());
  }
  isLocallyPrependedMessage(t) {
    return this.locallyPrependedMessages.has(t);
  }
  async *read() {
    let t = "",
      e = [],
      r = 0,
      o = !1,
      l = async function* () {
        for (;;) {
          while (this.prependedLines.length > 0) {
            let E = this.prependedLines.shift(),
              I = await this.processLine(E);
            if (I)
              (this.locallyPrependedMessages.add(I),
                writeDiagnosticsEvent("info", "cli_stdin_message_parsed", { type: I.type }),
                yield I);
          }
          let _ = t.indexOf(`
`);
          if (_ === -1) break;
          let y = t.slice(0, _);
          t = t.slice(_ + 1);
          let R = await this.processLine(y);
          if (R)
            (writeDiagnosticsEvent("info", "cli_stdin_message_parsed", { type: R.type }), yield R);
        }
      }.bind(this),
      d = this.input[Symbol.asyncIterator](),
      p = null,
      f = !1;
    try {
      for (;;) {
        if (o || this.prependedLines.length > 0) {
          if (e.length > 0) ((t += e.join("")), (e = []));
          if ((yield* l(), (r = t.length), r > this.maxLineChars))
            (writeDiagnosticsEvent("warn", "cli_stream_json_line_budget", { at: "tail" }),
              await L(ie(this.maxLineChars)));
          o = !1;
        }
        p ??= d.next();
        let _ = await Promise.race([
          p.then(() => !1),
          new Promise((E) => {
            this.prependWaker = () => E(!0);
          }),
        ]);
        if (((this.prependWaker = null), _)) continue;
        let y = await p;
        if (((p = null), y.done)) {
          f = !0;
          break;
        }
        r += y.value.length;
        let R = y.value.includes(`
`);
        if (!R && r > this.maxLineChars)
          (writeDiagnosticsEvent("warn", "cli_stream_json_line_budget", { at: "block" }),
            await L(ie(this.maxLineChars)));
        if ((e.push(y.value), R)) o = !0;
      }
    } finally {
      if (((this.prependWaker = null), !f)) await d.return?.();
    }
    if (e.length > 0) ((t += e.join("")), (e = []));
    if (t) {
      let _ = await this.processLine(t);
      if (_) yield _;
    }
    this.inputClosed = !0;
    let g = isExiting();
    if (!g && j()) {
      for (let [_, y] of this.pendingRequests.entries())
        if (
          !y.forwarded &&
          y.request.request.subtype === "can_use_tool" &&
          y.request.request.tool_name === ASK_USER_QUESTION_TOOL_NAME
        )
          this.streamCloseInterruptRequestIds.add(_);
      if (this.streamCloseInterruptRequestIds.size > 0)
        this.onStreamClosedWithParkedQuestion?.();
    }
    for (let _ of this.pendingRequests.values()) {
      if (g && this.asksOurHuman(_)) continue;
      _.reject(
        new zi("Tool permission stream closed before response received"),
      );
    }
  }
  getPendingPermissionRequests() {
    return Array.from(this.pendingRequests.values())
      .map((t) => t.request)
      .filter((t) => t.request.subtype === "can_use_tool");
  }
  getPendingUserDialogRequests() {
    return Array.from(this.pendingRequests.values())
      .map((t) => t.request)
      .filter((t) => t.request.subtype === "request_user_dialog");
  }
  retireSdkHostHookCallbacks(t) {
    (this.sdkHostHookGeneration++, (this.retiredHostHookAnswer = t));
    let e = 0;
    for (let [r, o] of Array.from(this.pendingRequests)) {
      let l = o.request.request;
      if (l.subtype !== "hook_callback") continue;
      let d = t(l.input),
        p = o.schema ? o.schema.parse(d) : d;
      (this.pendingRequests.delete(r),
        this.outbound.enqueue({
          type: "control_cancel_request",
          request_id: r,
        }),
        o.resolve(p),
        e++);
    }
    return e;
  }
  republishSurvivingPendingAction() {
    let t;
    for (let [e, r] of this.publishedPendingActionDetails)
      if (this.pendingRequests.has(e)) t = r;
    if (!t) return;
    (this.sessionState.republishPendingAction(t),
      logEvent("tengu_pending_action_republished", {
        survivor_kind: fromEnum(
          t.tool_name.startsWith("dialog:") ? "dialog" : "permission",
        ),
        pending_permission_requests: this.getPendingPermissionRequests().length,
        pending_dialog_requests: this.getPendingUserDialogRequests().length,
      }));
  }
  cancelPendingUserDialogs(t, e) {
    let r = 0;
    for (let { request: o } of Array.from(this.pendingRequests.values())) {
      if (
        o.request.subtype !== "request_user_dialog" ||
        o.request.dialog_kind !== t
      )
        continue;
      if (!this.cancelDialogByMachine(o.request_id)) continue;
      (logEvent("tengu_request_user_dialog_implicit_cancel", {
        dialog_kind: hashForTelemetry(t),
        reason: fromEnum(e),
      }),
        (r += 1));
    }
    return r;
  }
  cancelDialogByMachine(t) {
    if (!this.pendingRequests.has(t) || isExiting()) return !1;
    return this.injectControlResponse({
      type: "control_response",
      response: {
        subtype: "success",
        request_id: t,
        response: { behavior: "cancelled" },
      },
    });
  }
  setUnexpectedResponseCallback(t) {
    this.unexpectedResponseCallback = t;
  }
  setMainLoopLiveness(t) {
    this.mainLoopLiveness = t;
  }
  mainLoopLiveness;
  ignoresErrorShapedDialogResponse(t, e) {
    if (
      e.subtype !== "error" ||
      t.request.request.subtype !== "request_user_dialog" ||
      t.forwarded
    )
      return !1;
    return (
      logEvent("tengu_request_user_dialog_response_ignored", {
        shape: fromEnum("error"),
        dialog_kind: hashForTelemetry(t.request.request.dialog_kind),
      }),
      logForDebugging(
        `Ignoring error-shaped control_response for parked request_user_dialog request_id=${e.request_id} \u2014 not a human choice; dialog stays parked (error: ${de(e.error)})`,
      ),
      !0
    );
  }
  asksOurHuman(t) {
    return !t.forwarded && isHumanInputRequest(t.request);
  }
  get pendingHumanRequestCount() {
    let t = 0;
    for (let e of this.pendingRequests.values()) if (this.asksOurHuman(e)) t++;
    return t;
  }
  ignoresResponseAtShutdown(t, e) {
    if (!this.asksOurHuman(t) || !isExiting()) return !1;
    return (
      logForDebugging(
        `Leaving control_response for request_id=${e.request_id} to the next process \u2014 this one is shutting down and settles no question`,
      ),
      this.repliesLeftForNextProcess++,
      !0
    );
  }
  ignoresUnsettlingDeviceResponse(t, e) {
    let r = this.deviceRequests.get(e.request_id);
    if (!r) return !1;
    let o = t.request.request.subtype;
    if (e.subtype === "error")
      return (
        (r.errorRepliesIgnored += 1),
        logForDebugging(
          `Ignoring error-shaped control_response for device ${o} request_id=${e.request_id} \u2014 not the device's answer; still waiting (error: ${de(e.error)})`,
        ),
        !0
      );
    if (!r.accepts(e.response))
      return (
        (r.malformedRepliesIgnored += 1),
        logForDebugging(
          `Ignoring malformed control_response for device ${o} request_id=${e.request_id} \u2014 not an answer to it; still waiting`,
        ),
        !0
      );
    return !1;
  }
  hasCanUseToolNameMismatch(t, e) {
    let r = t.request.request;
    if (r.subtype !== "can_use_tool" || e.subtype !== "success") return !1;
    return isBridgeToolNameMismatch(e.response?.toolName, r.tool_name, e.request_id);
  }
  injectControlResponse(t) {
    let e = t.response?.request_id;
    if (!e) return !1;
    let r = this.pendingRequests.get(e);
    if (!r)
      return (
        logEvent("tengu_inject_control_response_unknown_id", {
          pending_control_requests: this.pendingRequests.size,
        }),
        !1
      );
    if (this.ignoresErrorShapedDialogResponse(r, t.response)) return !1;
    if (this.ignoresResponseAtShutdown(r, t.response)) return !1;
    if (this.ignoresUnsettlingDeviceResponse(r, t.response)) return !1;
    if (this.hasCanUseToolNameMismatch(r, t.response)) return !1;
    if (
      (this.trackResolvedToolUseId(r.request),
      this.pendingRequests.delete(e),
      this.write({ type: "control_cancel_request", request_id: e }),
      t.response.subtype === "error")
    )
      r.reject(Error(t.response.error));
    else {
      let o = t.response.response;
      if (r.schema)
        try {
          r.resolve(r.schema.parse(o));
        } catch (l) {
          r.reject(l);
        }
      else r.resolve({});
    }
    return !0;
  }
  setOnControlRequestSent(t) {
    this.onControlRequestSent = t;
  }
  setOnControlRequestResolved(t) {
    this.onControlRequestResolved = t;
  }
  setOnStreamClosedWithParkedQuestion(t) {
    this.onStreamClosedWithParkedQuestion = t;
  }
  async processLine(t) {
    if (!t.trim()) return;
    t = cs(t);
    try {
      let e = normalizeRequestIdFields(jsonParse(t));
      if (e.type === "keep_alive") return;
      if (e.type === "update_environment_variables") {
        let r = e.variables;
        if (
          typeof r !== "object" ||
          r === null ||
          Array.isArray(r) ||
          Object.values(r).some((d) => typeof d !== "string")
        ) {
          if (
            (logForDebugging(
              "[structuredIO] dropped update_environment_variables: variables must be an object of string values",
            ),
            typeof e.request_id === "string" && e.request_id)
          )
            this.writeActivityLine(
              jsonStringify({
                type: "control_response",
                response: {
                  subtype: "error",
                  request_id: e.request_id,
                  error:
                    "update_environment_variables: variables must be an object of string values",
                },
              }) +
                `
`,
            );
          return;
        }
        let o = [],
          l = [];
        for (let [d, p] of Object.entries(e.variables)) {
          if (!we.has(d)) {
            l.push(d);
            continue;
          }
          ((process.env[d] = p), o.push(d));
        }
        if (l.length > 0)
          logForDebugging(
            `[structuredIO] refused update_environment_variables for non-allowlisted keys: ${l.join(", ")}`,
          );
        if (o.includes("CLAUDE_CODE_OAUTH_TOKEN")) clearOAuthTokenCache();
        if (
          (logForDebugging(
            `[structuredIO] applied update_environment_variables: ${o.join(", ")}`,
          ),
          typeof e.request_id === "string" && e.request_id)
        )
          this.writeActivityLine(
            jsonStringify({
              type: "control_response",
              response: { subtype: "success", request_id: e.request_id },
            }) +
              `
`,
          );
        return;
      }
      if (e.type === "control_response") {
        let r = "uuid" in e && typeof e.uuid === "string" ? e.uuid : void 0,
          o = e.response;
        if (typeof o !== "object" || o === null || Array.isArray(o)) {
          if (r) this.onCommandLifecycle?.(r, "completed");
          logForDebugging(
            "[structuredIO] dropped control_response with malformed response payload",
          );
          return;
        }
        let l = this.pendingRequests.get(e.response.request_id);
        if (isExiting() && (!l || this.asksOurHuman(l))) {
          if (
            (logForDebugging(
              `Leaving control_response for request_id=${e.response.request_id} to the next process \u2014 this one is shutting down and settles no question`,
            ),
            l)
          )
            this.repliesLeftForNextProcess++;
          return;
        }
        if (r) this.onCommandLifecycle?.(r, "completed");
        if (!l) {
          let p = this.timedOutUserDialogs.get(e.response.request_id);
          if (p) {
            this.timedOutUserDialogs.delete(e.response.request_id);
            let _ =
                e.response.subtype === "success"
                  ? e.response.response?.behavior
                  : void 0,
              y = e.response.subtype;
            (logEvent("tengu_request_user_dialog_late_answer", {
              dialog_kind: hashForTelemetry(p.dialogKind),
              lateness_ms: Date.now() - p.timedOutAt,
              response_subtype: fromEnum(
                y === "success" || y === "error" ? y : "other",
              ),
              behavior: fromEnum(
                _ === "completed" || _ === "cancelled"
                  ? _
                  : _ === void 0
                    ? "absent"
                    : "other",
              ),
            }),
              logForDebugging(
                `Ignoring late request_user_dialog answer for request_id=${e.response.request_id}: the park deadline already settled this dialog as cancelled ${Date.now() - p.timedOutAt}ms ago`,
              ));
            return;
          }
          let g = (
            e.response.subtype === "success" ? e.response.response : void 0
          )?.toolUseID;
          if (typeof g === "string" && this.resolvedToolUseIds.has(g)) {
            logForDebugging(
              `Ignoring duplicate control_response for already-resolved toolUseID=${g} request_id=${e.response.request_id}`,
            );
            return;
          }
          if (this.unexpectedResponseCallback)
            await this.unexpectedResponseCallback(e);
          return;
        }
        if (this.ignoresErrorShapedDialogResponse(l, e.response)) return;
        if (this.ignoresUnsettlingDeviceResponse(l, e.response)) return;
        if (this.hasCanUseToolNameMismatch(l, e.response)) return;
        if (
          (this.trackResolvedToolUseId(l.request),
          this.pendingRequests.delete(e.response.request_id),
          l.request.request.subtype === "can_use_tool" &&
            this.onControlRequestResolved)
        )
          this.onControlRequestResolved(e.response.request_id);
        if (isHumanInputRequest(l.request) && !(l.forwarded && e.response.subtype === "error"))
          this.recordUserDrivenInbound(e);
        if (e.response.subtype === "error") {
          l.reject(Error(e.response.error));
          return;
        }
        let d = e.response.response;
        if (l.schema)
          try {
            l.resolve(l.schema.parse(d));
          } catch (p) {
            l.reject(p);
          }
        else l.resolve({});
        if (this.replayUserMessages) return e;
        return;
      }
      if (
        e.type !== "workflow_launch" &&
        e.type !== "user" &&
        isUserDrivenInbound(e, { hostOwnsOrigin: this.hostOwnsStdinOrigin })
      )
        this.recordUserDrivenInbound(e);
      if (
        e.type !== "user" &&
        e.type !== "bash_command" &&
        e.type !== "control_request" &&
        e.type !== "control_cancel_request" &&
        e.type !== "assistant" &&
        e.type !== "system" &&
        e.type !== "queued_notification" &&
        e.type !== "session_notice" &&
        e.type !== "workflow_launch"
      ) {
        let r = e.type;
        (logForDebugging(
          `Ignoring unknown message type: ${typeof r === "string" ? le(r) : `(a value of JSON type ${typeof r})`}`,
          { level: "warn" },
        ),
          this.retireDroppedFrame(
            typeof e === "object" && e !== null && "uuid" in e
              ? e.uuid
              : void 0,
          ));
        return;
      }
      if (e.type === "workflow_launch") return e;
      if (e.type === "control_request") {
        if (this.isRemoteTransport()) {
          let r = e.request,
            o = typeof r !== "object" || r === null || Array.isArray(r);
          if (o || !("subtype" in r) || typeof r.subtype !== "string") {
            (logEvent("tengu_sdk_malformed_input", {
              message_type: S("control_request"),
              reason: fromEnum(o ? "missing_request" : "subtype_not_string"),
              transport: S("remote"),
              outcome: S("dropped"),
              has_event_uuid: "uuid" in e && Xn(e.uuid) !== null,
            }),
              logForDebugging(
                "Dropping control_request: missing request object or non-string subtype",
                { level: "warn" },
              ),
              this.retireDroppedFrame("uuid" in e ? e.uuid : void 0));
            return;
          }
        } else if (!e.request)
          return L("Error: Missing request on control_request");
        return e;
      }
      if (e.type === "control_cancel_request")
        return typeof e.request_id === "string" ? e : void 0;
      if (e.type === "assistant" || e.type === "system") return e;
      if (e.type === "bash_command") return e;
      if (e.type === "queued_notification") return e;
      if (e.type === "session_notice") return e;
      if (e.message?.role !== "user") {
        if (!this.isRemoteTransport())
          return L(
            `Error: Expected message role 'user', got '${le(String(e.message?.role))}'`,
          );
        let r = He(e.message),
          o =
            r === void 0
              ? "dropped"
              : !r.plain
                ? "unwrap_refused"
                : a.CLAUDE_CODE_DISABLE_NESTED_USER_REPAIR
                  ? "repair_disabled"
                  : "repaired",
          l = Ue(e.message),
          d = Xn(e.uuid) !== null;
        if (
          (logEvent("tengu_sdk_malformed_input", {
            message_type: S("user"),
            reason: S("invalid_message_role"),
            transport: S("remote"),
            outcome: fromEnum(o),
            wire_shape: fromEnum(l),
            has_event_uuid: d,
          }),
          writeDiagnosticsEvent("warn", "cli_malformed_user_message", {
            outcome: o,
            wire_shape: l,
            has_event_uuid: d,
          }),
          r === void 0 || o !== "repaired")
        ) {
          (logForDebugging(
            `Dropping malformed user message (${o}, ${l}, event uuid ${d ? "present" : "absent"}): expected message role 'user'`,
            { level: "warn" },
          ),
            this.retireDroppedFrame(e.uuid));
          return;
        }
        let p = e;
        ((p.message = r.inner),
          logForDebugging("Repaired a nested user message (one level)"));
      }
      if (isUserDrivenInbound(e, { hostOwnsOrigin: this.hostOwnsStdinOrigin }))
        this.recordUserDrivenInbound(e);
      return e;
    } catch (e) {
      let r = /"type"\s*:\s*"([\w-]{1,40})"/.exec(t)?.[1] ?? "unknown";
      return L(
        `Error parsing streaming input line (type=${r}, ${t.length} chars): ${e instanceof Error ? e.name : typeof e}`,
      );
    }
  }
  resetStallWatchdog() {
    this.stallFired = !1;
  }
  recordUserDrivenInbound(t) {
    markUserInteraction();
  }
  retireDroppedFrame(t) {
    let e = Xn(t);
    if (e) this.onCommandLifecycle?.(e, "completed");
  }
  trackWrite(t) {
    if (this.stallTimer) clearTimeout(this.stallTimer);
    if (t.type !== "result" && !this.stallFired)
      ((this.stallTimer = setTimeout(
        (e) => {
          if (this.sessionState.getState() !== "running") return;
          ((this.stallFired = !0),
            logEvent("tengu_sdk_stall", {
              session_age_ms: Date.now() - this.createdAt,
              session_state: fromEnum(this.sessionState.getState()),
              last_message_type: fromEnum(e),
              pending_control_requests: this.pendingRequests.size,
            }));
        },
        Pe,
        t.type,
      )),
        this.stallTimer.unref());
    if (t.type !== "system" && Math.random() < Ae) {
      let e = stdoutMessageSchema().safeParse(t);
      if (!e.success)
        logEvent("tengu_sdk_schema_violation", {
          message_type: fromEnum(t.type),
          error_path: e.error.issues[0]?.path.join(".") ?? "",
        });
    }
  }
  writeActivityLine(t) {
    writeToStdout(t);
  }
  async write(t) {
    (this.trackWrite(t),
      writeToStdout(
        stringifyJsonSafe(t) +
          `
`,
      ));
  }
  passControlRequestToHost(t, { requestId: e, schema: r, signal: o }) {
    if (this.pendingRequests.has(e))
      return Promise.reject(
        new Ve("a control request with this request_id is already pending"),
      );
    return this.sendRequest(t, r, o, { requestId: e, forwarded: !0 });
  }
  async sendRequest(
    t,
    e,
    r,
    { requestId: o = M(), forwarded: l = !1, deviceHook: d = !1 } = {},
  ) {
    let p = { type: "control_request", request_id: o, request: t },
      f = !l && isHumanInputRequest(p);
    if (f && isExiting() && !r?.aborted) return getNeverResolvingPromise();
    if (!l && !d) recordOutboundRequestId(o, { automated: !f });
    if (this.inputClosed) throw new zi("Stream closed");
    if (r?.aborted) throw new Ve("Request aborted");
    if (
      (this.outbound.enqueue(p),
      t.subtype === "can_use_tool" && this.onControlRequestSent)
    )
      this.onControlRequestSent(p);
    if (f) this.sessionState.beginUserDecision();
    let g = () => {
      if (f && isExiting()) return;
      this.outbound.enqueue({ type: "control_cancel_request", request_id: o });
      let y = this.pendingRequests.get(o);
      if (y) {
        if (
          (this.trackResolvedToolUseId(y.request),
          y.request.request.subtype === "can_use_tool" &&
            this.onControlRequestResolved)
        )
          this.onControlRequestResolved(o);
        (this.pendingRequests.delete(o), y.reject(new Ve()));
      }
    };
    if (r) r.addEventListener("abort", g, { once: !0 });
    let _;
    try {
      return await new Promise((y, R) => {
        ((_ = {
          request: { type: "control_request", request_id: o, request: t },
          resolve: (E) => {
            y(E);
          },
          reject: R,
          schema: e,
          ...(l && { forwarded: l }),
        }),
          this.pendingRequests.set(o, _));
      });
    } finally {
      if (r) r.removeEventListener("abort", g);
      if (this.pendingRequests.get(o) === _) this.pendingRequests.delete(o);
      if (f) this.sessionState.endUserDecision();
    }
  }
  emitPermissionDenied(t, e, r, o) {
    let l = o.decisionReason;
    this.outbound.enqueue({
      type: "system",
      subtype: "permission_denied",
      tool_name: t,
      tool_use_id: e,
      agent_id: r,
      decision_reason_type: l?.type,
      decision_reason: getDecisionReasonText(l),
      message: o.message,
      uuid: M(),
      session_id: K(),
    });
  }
  createCanUseTool(t) {
    return re(this.permissionPromptHost(t));
  }
  permissionPromptHost(t) {
    return {
      request: (e, r, o) => this.sendRequest(e, permissionResultSchema(), r, { requestId: o }),
      isPending: (e) => this.pendingRequests.has(e),
      interruptedAtStreamClose: (e) =>
        this.streamCloseInterruptRequestIds.has(e),
      emitPermissionDenied: (e, r, o, l) =>
        this.emitPermissionDenied(e, r, o, l),
      promptShown:
        t &&
        ((e, r, o) => {
          if ((this.publishedPendingActionDetails.set(e, r), o !== void 0))
            this.sessionState.notifyNestedPromptBlocking(o);
          t(r);
        }),
      promptSettled: (e, r) => this.settlePermissionPrompt(e, r),
    };
  }
  settlePermissionPrompt(t, e) {
    if (e !== void 0) this.sessionState.notifyNestedPromptUnblocking(e);
    if (
      (this.publishedPendingActionDetails.delete(t),
      this.getPendingPermissionRequests().length === 0 &&
        this.getPendingUserDialogRequests().length === 0)
    ) {
      if (!isExiting())
        this.sessionState.notifyStateChanged(
          this.mainLoopLiveness?.() === !1 ? "idle" : "running",
        );
    } else
      (this.sessionState.reteeWaitingOnUser(),
        this.republishSurvivingPendingAction());
  }
  createHookCallback(t, e) {
    let r = this.sdkHostHookGeneration;
    return {
      type: "callback",
      timeout: e,
      callback: async (o, l, d) => {
        if (r !== this.sdkHostHookGeneration && this.retiredHostHookAnswer)
          return this.retiredHostHookAnswer(o);
        try {
          return await this.sendRequest(
            {
              subtype: "hook_callback",
              callback_id: t,
              input: o,
              tool_use_id: l || void 0,
            },
            hookOutputSchema(),
            d,
          );
        } catch (p) {
          if (yt(p)) throw p;
          return (console.error(`Error in hook callback ${t}:`, p), {});
        }
      },
    };
  }
  sendDeviceHookCallback(t) {
    let e = M(),
      r = this.trackDeviceRequest(e, "hook", (p) => ue(p) !== null),
      o = new AbortController(),
      l = t.signal ? AbortSignal.any([t.signal, o.signal]) : o.signal,
      d = this.sendRequest(
        {
          subtype: "hook_callback",
          callback_id: t.callbackId,
          input: t.input,
          tool_use_id: t.toolUseID || void 0,
          issued_at: Math.trunc(t.issuedAt),
          deadline_ms: Math.max(1, Math.ceil(t.deadlineMs)),
        },
        se(),
        l,
        { requestId: e, deviceHook: !0 },
      )
        .then(
          (p) => {
            let f = ue(p);
            return f === null ? { malformed: !0 } : { answer: f };
          },
          (p) => {
            if (yt(p)) throw p;
            return (
              logForDebugging(
                `Device hook_callback request_id=${e} settled with a non-answer; treating as no opinion`,
                { level: "warn" },
              ),
              { malformed: !0 }
            );
          },
        )
        .finally(() => {
          this.deviceRequests.delete(e);
        });
    return {
      requestId: e,
      reply: d,
      cancel: () => o.abort(),
      errorRepliesIgnored: () => r.errorRepliesIgnored,
      malformedRepliesIgnored: () => r.malformedRepliesIgnored,
    };
  }
  trackDeviceRequest(t, e, r, o) {
    if (this.deviceRequests.size >= ae)
      logForDebugging(
        `Device request bookkeeping past its expected ceiling (${ae} live requests); keeping all of them`,
        { level: "warn" },
      );
    let l = {
      kind: e,
      errorRepliesIgnored: 0,
      malformedRepliesIgnored: 0,
      delivery: "queued",
      instanceId: o,
      accepts: r,
    };
    return (this.deviceRequests.set(t, l), l);
  }
  liveDeviceRequestKind(t) {
    return this.deviceRequests.get(t)?.kind;
  }
  abandonServedCalls(t, e) {
    let r = 0;
    for (let [o, l] of this.deviceRequests) {
      if (l.kind !== "served_call" || l.instanceId !== t) continue;
      let d = this.pendingRequests.get(o);
      if (!d) continue;
      (this.outbound.enqueue({ type: "control_cancel_request", request_id: o }),
        this.pendingRequests.delete(o),
        d.reject(new ServingInstanceGoneError(e)),
        r++);
    }
    return r;
  }
  noteRequestsUpload(t, e) {
    let r = 0;
    for (let o of t) {
      let l = this.deviceRequests.get(o);
      if (l === void 0) continue;
      let d = Ce(l.delivery, e);
      if (d !== l.delivery) ((l.delivery = d), r++);
    }
    return r;
  }
  rejectUndeliveredRequests(t, e) {
    let r = 0;
    for (let o of t) {
      let l = this.deviceRequests.get(o);
      if (l?.kind !== "served_call") continue;
      let d = this.pendingRequests.get(o);
      if (!d) continue;
      (this.pendingRequests.delete(o),
        d.reject(
          this.tracksRequestDelivery && l.delivery === "queued"
            ? new RequestNotDeliveredError(e)
            : new RequestDeliveryUnknownError(e),
        ),
        r++);
    }
    return r;
  }
  sendServedCallRequest(t) {
    let e = M();
    if (this.inputClosed) {
      let p = Promise.reject(new zi("Stream closed"));
      return (
        p.catch(() => {}),
        {
          requestId: e,
          sent: !1,
          delivery: () => "queued",
          withdraw: () => !1,
          reply: p,
          cancel: () => {},
          errorRepliesIgnored: () => 0,
        }
      );
    }
    let r = this.trackDeviceRequest(
        e,
        "served_call",
        t.accepts,
        t.request.instance_id,
      ),
      o = new AbortController(),
      l = t.signal ? AbortSignal.any([t.signal, o.signal]) : o.signal,
      d = this.sendRequest(t.request, se(), l, {
        requestId: e,
        deviceHook: !0,
      }).finally(() => {
        this.deviceRequests.delete(e);
      });
    return {
      requestId: e,
      sent: !0,
      delivery: () =>
        this.tracksRequestDelivery ? Oe(r.delivery) : "untracked",
      withdraw: () => this.withdrawUnsentServedCall(e),
      reply: d,
      cancel: () => {
        if (this.pendingRequests.has(e)) {
          o.abort();
          return;
        }
        this.outbound.enqueue({
          type: "control_cancel_request",
          request_id: e,
        });
      },
      errorRepliesIgnored: () => r.errorRepliesIgnored,
    };
  }
  withdrawUnsentServedCall(t) {
    let e = this.deviceRequests.get(t),
      r = this.pendingRequests.get(t);
    if (
      !this.tracksRequestDelivery ||
      r === void 0 ||
      e?.kind !== "served_call" ||
      e.delivery !== "queued"
    )
      return !1;
    if (!this.withdrawQueuedRequest(t)) return !1;
    return (this.pendingRequests.delete(t), r.reject(new RequestWithdrawnUnsentError()), !0);
  }
  async handleElicitation(t, e, r, o, l, d, p, f) {
    if (!this.hostAnswersElicitations) return { action: "cancel" };
    try {
      return await this.sendRequest(
        {
          subtype: "elicitation",
          mcp_server_name: t,
          message: e,
          mode: l,
          url: d,
          elicitation_id: p,
          requested_schema: r,
          title: f?.title,
          display_name: f?.displayName,
          description: f?.description,
        },
        elicitationResponseSchema(),
        o,
      );
    } catch {
      return { action: "cancel" };
    }
  }
  async requestUserDialog(t, e, r) {
    if (isExiting()) {
      if (r?.signal?.aborted) return { behavior: "cancelled" };
      return getNeverResolvingPromise();
    }
    let o = M(),
      l = buildPendingActionDetail(t, e, o, r?.toolUseId);
    (this.publishedPendingActionDetails.set(o, l),
      this.sessionState.notifyStateChanged("requires_action", l),
      this.onUserDialogParked?.(l),
      logEvent("tengu_request_user_dialog_requires_action", { dialog_kind: hashForTelemetry(t) }));
    let d = getUserDialogTimeoutMs(),
      p;
    if (d > 0)
      ((p = setTimeout(
        (f, g, _) => {
          if (
            (this.timedOutUserDialogs.set(f, {
              dialogKind: g,
              timedOutAt: Date.now(),
            }),
            !this.cancelDialogByMachine(f))
          ) {
            this.timedOutUserDialogs.delete(f);
            return;
          }
          logEvent("tengu_request_user_dialog_timeout", {
            dialog_kind: hashForTelemetry(g),
            timeout_ms: _,
          });
        },
        d,
        o,
        t,
        d,
      )),
        p.unref());
    try {
      return await this.sendRequest(
        {
          subtype: "request_user_dialog",
          dialog_kind: t,
          payload: e,
          tool_use_id: r?.toolUseId,
        },
        userDialogResponseSchema(),
        r?.signal,
        { requestId: o },
      );
    } catch {
      return { behavior: "cancelled" };
    } finally {
      if (p !== void 0) clearTimeout(p);
      if (
        (this.publishedPendingActionDetails.delete(o),
        this.getPendingUserDialogRequests().length === 0 &&
          this.getPendingPermissionRequests().length === 0)
      ) {
        if (!isExiting())
          this.sessionState.notifyStateChanged(
            this.mainLoopLiveness?.() === !1 ? "idle" : "running",
          );
      } else {
        if (!this.timedOutUserDialogs.has(o))
          this.sessionState.reteeWaitingOnUser();
        this.republishSurvivingPendingAction();
      }
    }
  }
  createSandboxAskCallback(t, e, r) {
    let o = new Map(),
      l = async (d) => {
        if (isMisleadingConsentHost(d))
          return (
            logForDebugging(
              `[StructuredIO] Refusing a sandbox network ask for a host srt would re-spell: ${jsonStringify(d)}`,
              { level: "warn" },
            ),
            !1
          );
        try {
          let p = {
              type: "addRules",
              rules: [{ toolName: WEB_FETCH_TOOL_NAME, ruleContent: `domain:${consentHostEntry(d)}` }],
              behavior: "allow",
              destination: "localSettings",
            },
            f = x(formatToolDisplayName(SANDBOX_NETWORK_ACCESS_TOOL_NAME), e, r),
            g;
          try {
            g = await this.sendRequest(
              {
                subtype: "can_use_tool",
                tool_name: SANDBOX_NETWORK_ACCESS_TOOL_NAME,
                display_name: formatToolDisplayName(SANDBOX_NETWORK_ACCESS_TOOL_NAME),
                input: { host: d },
                permission_suggestions: [p],
                tool_use_id: M(),
                description: `Allow network connection to ${d}?`,
              },
              permissionResultSchema(),
            );
          } finally {
            f();
          }
          if (g.behavior !== "allow") return !1;
          let _ = g.updatedPermissions;
          if (_ && _.length > 0) (t?.((y) => applyPermissionUpdates(y, _)), await persistPermissionUpdates(_, e));
          return (SandboxManager.addSessionAllowedHost(d), !0);
        } catch {
          return !1;
        }
      };
    return (d) => {
      let p = d.host,
        f = o.get(p);
      if (f) return f;
      let g = l(p).finally(() => {
        o.delete(p);
      });
      return (o.set(p, g), g);
    };
  }
  async sendMcpMessage(t, e, r = De) {
    let l = isJsonRpcRequest(e) ? void 0 : createLinkedAbortSignal(void 0, { timeoutMs: r, refTimer: !0 });
    try {
      return (
        await this.sendRequest(
          { subtype: "mcp_message", server_name: t, message: e },
          c({ mcp_response: tB().optional() }),
          l?.signal,
        )
      ).mcp_response;
    } finally {
      l?.cleanup();
    }
  }
  async requestOAuthTokenRefresh() {
    let t = Date.now(),
      e;
    try {
      e = await this.sendRequest(
        { subtype: "oauth_token_refresh" },
        oauthTokenRefreshResponseSchema(),
        AbortSignal.timeout(Se),
      );
    } catch (o) {
      throw (
        logEvent("tengu_sdk_oauth_refresh_unfulfilled", {
          outcome: fromEnum(
            o instanceof zi
              ? "stream_closed"
              : yt(o)
                ? "timeout"
                : o instanceof AA
                  ? "invalid_response"
                  : "error",
          ),
          reason: fromEnum("none"),
          duration_ms: Date.now() - t,
        }),
        o
      );
    }
    if (typeof e.accessToken === "string" && e.accessToken)
      return (clearCredentialInvalidation(), e.accessToken);
    let r = e.reason;
    if (r !== void 0) recordCredentialInvalidation(r);
    return (
      logEvent("tengu_sdk_oauth_refresh_unfulfilled", {
        outcome: fromEnum(r !== void 0 ? "declined" : "null"),
        reason: fromEnum(r ?? "none"),
        duration_ms: Date.now() - t,
      }),
      null
    );
  }
  async requestRemoteControlWorkSecret(t) {
    try {
      return (
        (
          await this.sendRequest(
            { subtype: "remote_control_work_secret", session_id: t },
            workSecretResponseSchema(),
            AbortSignal.timeout(ke),
          )
        ).work_secret || null
      );
    } catch (e) {
      return (
        logForDebugging(
          `[bridge:work-secret] host work-secret request failed (${e instanceof Error ? e.name : "unknown"})`,
          { level: "warn" },
        ),
        null
      );
    }
  }
  async requestHostAuthTokenRefresh(t = ve) {
    return this.sendRequest(
      { subtype: "host_auth_token_refresh" },
      hostAuthTokenRefreshResponseSchema(),
      AbortSignal.timeout(t),
    );
  }
}
async function L(t) {
  console.error(t);
  let e = Date.now() + 2000;
  (await withTimeout(drainRegisteredWriteQueues(), 2000, "write queue drain timeout (exit)").catch(() => {}),
    await withTimeout(
      flushDiagnostics(),
      Math.max(0, e - Date.now()),
      "diagnostic log flush timeout (exit)",
    ).catch(() => {}),
    await drainStdoutBeforeExit(Math.max(0, e - Date.now()), { scaleBudgetToQueue: !1 }),
    process.exit(1));
}
var Ee = new Set([
  "type",
  "message",
  "uuid",
  "session_id",
  "parent_tool_use_id",
  "timestamp",
]);
function Ie([t, e]) {
  return (
    Ee.has(t) ||
    (t === "isSynthetic" && e === !1) ||
    (t === "shouldQuery" && e === !0)
  );
}
function Ue(t) {
  if (t === void 0 || t === null) return "no_message";
  if (typeof t !== "object" || Array.isArray(t)) return "non_object_message";
  if (!("role" in t)) return "no_role";
  let e = t.role;
  if (e === void 0) return "no_role";
  if (e === null) return "role_null";
  if (Array.isArray(e)) return "role_array";
  switch (typeof e) {
    case "object":
      return "role_object";
    case "string":
      return "role_string";
    default:
      return "role_other";
  }
}
function He(t) {
  if (typeof t !== "object" || t === null || !("message" in t)) return;
  let e = t.message;
  if (
    typeof e !== "object" ||
    e === null ||
    !("role" in e) ||
    e.role !== "user" ||
    !("content" in e) ||
    (typeof e.content !== "string" && !Array.isArray(e.content))
  )
    return;
  return {
    inner: e,
    plain: (!("type" in t) || t.type === "user") && Object.entries(t).every(Ie),
  };
}
export { permissionResultSchema, PERMISSION_RESULT_SHAPE_HINT, finalizePermissionPromptToolResult, StructuredIO };
