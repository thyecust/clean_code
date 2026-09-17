// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { oo, CW } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { sleep } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { gbt } from "../../00-第三方库/zod/chunk-6421ybjb.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { emitTaskNotification, bytesPerTokenForModel, runWithAgentContext, getAgentDepth } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { SYSTEM_PROMPT_DYNAMIC_BOUNDARY } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { API_REQUEST_ABORTED_MESSAGE } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { runWithTeammateContext } from "./teammate-context.js";
import {
  unregisterPerfettoAgent,
  createClassifierApprovalsUpdater,
  estimateContextTokens,
  stripWholeToolGrantsForAsk,
  withoutGrantsForRemoteScope,
  hasPermissionsToUseToolWithSink,
  MAX_TRANSCRIPT_MESSAGES,
  appendTranscriptMessage,
  replaceTranscriptMessage,
  TASK_EVICT_GRACE_MS,
  hasOtherActiveAgentTask,
  createTaskProgressState,
  updateTaskProgressFromMessage,
  applyStreamTokenEstimate,
  snapshotTaskProgress,
  createActivityDescriptionResolver,
  asSystemPrompt,
  createMemoryRelevanceState,
  getAutoCompactThreshold,
  COMPACTION_BLOCKED_BY_HOOK_MESSAGE,
  compactionResultToMessages,
  compactConversation,
  restorePreservedMessages,
  E6t,
  hasRunningTasksForAgent,
  runAgent,
  resolvePlanApprovalResponse,
  PERMISSION_DENIED_MESSAGE,
  PERMISSION_DENIED_PREFIX,
  getLastApiError,
  createApiErrorMessage,
  createUserMessage,
  isLoggableMessage,
  buildDefaultSystemPrompt,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { readPrimedAgentMemory, persistPermissionUpdates } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { cloneFileStateCache } from "../MCP客户端/chunk-3kmsshb6.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { createAbortController } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { TASK_CREATE_TOOL_NAME, TASK_GET_TOOL_NAME, TASK_UPDATE_TOOL_NAME } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import {
  updateTask,
  readAllTasks,
  claimTask,
  readMailbox,
  writeToMailbox,
  markSingleMessageAsRead,
  MARK_READ_FAILURE_CAP,
  messageIdentityKey,
  markMessagesAsRead,
  formatTeammateMessage,
  formatTeammateMessages,
  UNKNOWN_SENDER,
  sanitizeReceivedStructuredFrame,
  createIdleNotification,
  logIdleResultDeliveryOutcome,
  isPermissionResponse,
  isShutdownRequest,
  isPlanApprovalResponse,
  isModeSetRequest,
  isStructuredProtocolMessage,
  planApprovalResumeText,
  withShutdownReplyInstructions,
} from "./chunk-g6nvp9mm.js";
import { evictTaskOutput } from "../后台任务-Shell管理/task-output.js";
import { removeMemberByAgentId } from "./team-file-store.js";
import { createContentReplacementState } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { runCoordinatorAutomatedPermissionCheck, createPermissionDecisionContext, requestToolPermission, getIdleNotificationResult, tryBuildIdleNotification, permissionContextSetterStore } from "../权限系统/chunk-jsd70b22.js";
import { TEAMMATE_SYSTEM_PROMPT_ADDENDUM } from "./chunk-5nnwwahg.js";
import { buildLocalDisplayOnlyDenialResult } from "../../01-核心基础设施/核心工具-未归类/local-display-only-denial.js";
import { registerSwarmPermissionCallback, unregisterSwarmPermissionCallback, processMailboxPermissionResponse } from "../权限系统/swarm-permission-poller.js";
import { appendMessageToTaskTranscript } from "./teammate-task-messages.js";
import { TASK_LIST_TOOL_NAME } from "./chunk-z2t8b9yc.js";
import { createToolCallInputFingerprint, createPermissionRequest, sendPermissionRequestToLeader } from "./permission-sync-mailbox.js";
import { SEND_MESSAGE_TOOL_NAME } from "../../01-核心基础设施/核心工具-未归类/send-message-constants.js";
import { TEAM_LEAD_AGENT_NAME } from "./chunk-enjekn9t.js";
import { countMatching, dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
var je = 500,
  be = 500;
function Ge(s, e, t, _) {
  return async (o, m, T, d, M, C) => {
    let w = C ?? (await hasPermissionsToUseToolWithSink(o, m, T, d, M, void 0, _));
    if (w.behavior !== "ask") return w;
    let p = w.updatedInput ?? m;
    if (e.signal.aborted) return { behavior: "ask", message: PERMISSION_DENIED_MESSAGE };
    let A = getToolPermissionContext(T),
      I = () =>
        o.description(p, {
          isNonInteractiveSession: T.options.isNonInteractiveSession,
          toolPermissionContext: A,
          tools: T.options.tools,
        });
    if (T.requestDialog !== void 0) {
      let l = permissionContextSetterStore.of(T.session).permissionContextSetter,
        ee = createPermissionDecisionContext(o, m, T, d, M, _, (D) => {
          l?.(D, { preserveMode: !0 });
        }),
        j = await runCoordinatorAutomatedPermissionCheck({
          ctx: ee,
          updatedInput: w.updatedInput,
          suggestions: w.suggestions,
          permissionMode: A.mode,
        });
      if (j) return j;
      if (e.signal.aborted) return { behavior: "ask", message: PERMISSION_DENIED_MESSAGE };
      let R = await I();
      if (e.signal.aborted) return { behavior: "ask", message: PERMISSION_DENIED_MESSAGE };
      let a = Date.now();
      try {
        return await new Promise((D, F) => {
          requestToolPermission(
            {
              ctx: ee,
              description: R,
              result: w,
              awaitAutomatedChecksBeforeDialog: !0,
            },
            D,
          ).catch(F);
        });
      } finally {
        t(Date.now() - a);
      }
    }
    if (w.localDisplayOnly || w.forcedByCaller === !0)
      return buildLocalDisplayOnlyDenialResult(o.name, "the teammate mailbox (a static-description wire)");
    let E = await I();
    if (e.signal.aborted) return { behavior: "ask", message: PERMISSION_DENIED_MESSAGE };
    return new Promise((l) => {
      let k = createPermissionRequest({
        toolName: o.name,
        toolUseId: M,
        input: p,
        description: E,
        permissionSuggestions: w.suggestions,
        workerId: s.agentId,
        workerName: s.agentName,
        workerColor: s.color,
        teamName: s.teamName,
      });
      (registerSwarmPermissionCallback({
        requestId: k.id,
        toolUseId: M,
        toolName: k.toolName,
        inputDigest: createToolCallInputFingerprint(k.toolName, p),
        onAllow(a, D, F, B) {
          R();
          let z =
            o.suppressesAllPermissionUpdates?.(p) === !0
              ? withoutGrantsForRemoteScope(D)
              : o.suppressesAlwaysAllowRule?.(p) === !0 ||
                  w.suppressAlwaysAllowRule === !0
                ? stripWholeToolGrantsForAsk(D, o, getToolPermissionContext(T))
                : D;
          persistPermissionUpdates(z, T.storageV5).catch(logError);
          let X = a && Object.keys(a).length > 0 ? a : p;
          l({
            behavior: "allow",
            updatedInput: X,
            userModified: !1,
            ...(B && B.length > 0 && { contentBlocks: B }),
          });
        },
        onReject(a, D) {
          R();
          let F = a ? `${PERMISSION_DENIED_PREFIX}${a}` : PERMISSION_DENIED_MESSAGE;
          l({ behavior: "ask", message: F, contentBlocks: D });
        },
        onRefuse(a) {
          (R(), l({ behavior: "ask", message: a }));
        },
        onUnboundVerdict() {},
      }),
        sendPermissionRequestToLeader(k, T.storageV5).then((a) => {
          if (!a)
            (R(),
              l({
                behavior: "ask",
                message:
                  "The permission request could not be delivered to the team lead (mailbox write failed). Retry the tool call.",
              }));
        }));
      let ee = setInterval(
          async (a, D, F, B, z, X) => {
            if (a.signal.aborted) {
              (D(), F({ behavior: "ask", message: PERMISSION_DENIED_MESSAGE }));
              return;
            }
            let ie = await readMailbox(B.agentName, B.teamName, X);
            for (let K of ie)
              if (K && !K.read) {
                let O = isPermissionResponse(K.text);
                if (O && O.request_id === z.id) {
                  if (
                    (await markSingleMessageAsRead(B.agentName, B.teamName, K, X), K.from !== TEAM_LEAD_AGENT_NAME)
                  ) {
                    logForDebugging(
                      `[InProcessRunner] Ignoring permission response from non-team-lead: ${K.from}`,
                      { level: "warn" },
                    );
                    continue;
                  }
                  if (O.subtype === "success")
                    processMailboxPermissionResponse({
                      requestId: O.request_id,
                      toolUseId: O.tool_use_id,
                      approvedRequest: O.approved_request,
                      decision: "approved",
                      updatedInput: O.response?.updated_input,
                      permissionUpdates: O.response?.permission_updates,
                    });
                  else
                    processMailboxPermissionResponse({
                      requestId: O.request_id,
                      toolUseId: O.tool_use_id,
                      approvedRequest: O.approved_request,
                      decision: "rejected",
                      feedback: O.error,
                    });
                  return;
                }
              }
          },
          je,
          e,
          R,
          l,
          s,
          k,
          T.storageV5,
        ),
        j = () => {
          (R(), l({ behavior: "ask", message: PERMISSION_DENIED_MESSAGE }));
        };
      e.signal.addEventListener("abort", j, { once: !0 });
      function R() {
        (clearInterval(ee),
          unregisterSwarmPermissionCallback(k.id),
          e.signal.removeEventListener("abort", j));
      }
    });
  };
}
function L(s, e, t) {
  t.update(s, (_) => (_.type === "in_process_teammate" ? e(_) : _));
}
async function Ke(s, e, t, _, o) {
  return writeToMailbox(
    TEAM_LEAD_AGENT_NAME,
    { from: s, text: e, timestamp: new Date().toISOString(), color: t },
    _,
    o,
  );
}
async function Ae(s, e, t, _, o) {
  let m = createIdleNotification(s, _),
    T;
  try {
    T = await Ke(s, jsonStringify(m), e, t, o);
  } finally {
    logIdleResultDeliveryOutcome(m, _?.result, T);
  }
  return T !== void 0;
}
function He(s) {
  let e = new Set(s.filter((t) => t.status !== "completed").map((t) => t.id));
  return s.find((t) => {
    if (t.status !== "pending") return !1;
    if (t.owner) return !1;
    return t.blockedBy.every((_) => !e.has(_));
  });
}
function Ve(s) {
  let e = `Complete all open tasks. Start with task #${s.id}: 

 ${s.subject}`;
  if (s.description)
    e += `

${s.description}`;
  return e;
}
async function De(s, e, t, _) {
  if (!t) return;
  try {
    let o = await readAllTasks(s, _),
      m = He(o);
    if (!m) return;
    let T = await claimTask(s, m.id, e, void 0, _);
    if (!T.success) {
      logForDebugging(`[inProcessRunner] Failed to claim task #${m.id}: ${T.reason}`);
      return;
    }
    return (
      await updateTask(s, m.id, { status: "in_progress" }, _),
      logForDebugging(`[inProcessRunner] Claimed task #${m.id}: ${m.subject}`),
      Ve(m)
    );
  } catch (o) {
    logForDebugging(`[inProcessRunner] Error checking task list: ${o}`);
    return;
  }
}
async function Se(s, e, t, _, o) {
  let m;
  try {
    ((m = await readMailbox(s.agentName, s.teamName, _, {
      throwOnUnknownReadError: !0,
    })),
      (o.readFailures = 0));
  } catch (p) {
    return (
      o.readFailures++,
      logForDebugging(
        `[inProcessRunner] ${s.agentName} could not read mailbox (${o.readFailures} consecutive): ${p}`,
        { level: "warn" },
      ),
      null
    );
  }
  let T = -1,
    d = null;
  for (let p = 0; p < m.length; p++) {
    let A = m[p];
    if (A && !A.read) {
      let I = isShutdownRequest(A.text);
      if (I) {
        ((T = p), (d = I));
        break;
      }
    }
  }
  if (T !== -1) {
    if (o.count > 0) {
      let I = m.filter(
        (E, l) =>
          !E.read && l !== T && !isStructuredProtocolMessage(E.text) && !o.deliveredUnmarked.has(messageIdentityKey(E)),
      );
      if (I.length > 0) {
        for (let l of I) o.deliveredUnmarked.add(messageIdentityKey(l));
        let E = await markMessagesAsRead(s.agentName, s.teamName, I, _);
        if (E) ((o.count = 0), (o.reported = !1), o.deliveredUnmarked.clear());
        else if (!o.reported)
          ((o.reported = !0),
            logFeatureSad("swarm_inbox_poll", "worker_mark_read_failed_streak"));
        return (
          logForDebugging(
            `[inProcessRunner] ${s.agentName} delivering ${I.length} held message(s) ahead of a shutdown_request${E ? "" : " (mark still not landed)"}`,
            { level: E ? "debug" : "warn" },
          ),
          { type: "new_messages", messages: I }
        );
      }
    }
    let p = m[T],
      A = countMatching(m.slice(0, T), (I) => !I.read);
    return (
      logForDebugging(
        `[inProcessRunner] ${s.agentName} received shutdown request from ${d?.from} (prioritized over ${A} unread messages)`,
      ),
      await markSingleMessageAsRead(s.agentName, s.teamName, p, _),
      {
        type: "shutdown_request",
        request: d,
        originalMessage: p.text,
        entryFrom: p.from,
      }
    );
  }
  let M = [],
    C = [];
  for (let p of m) {
    if (!p || p.read) continue;
    if (isStructuredProtocolMessage(p.text)) M.push(p);
    else C.push(p);
  }
  let w = null;
  if (M.length > 0) {
    for (let A of M) {
      let I = isPlanApprovalResponse(A.text);
      if (I && A.from === TEAM_LEAD_AGENT_NAME) {
        let E = resolvePlanApprovalResponse(e, I, t, _);
        if (E)
          (logForDebugging(
            `[inProcessRunner] ${s.agentName} applied lead plan_approval_response: approved=${E.approved}`,
          ),
            (w = planApprovalResumeText(E)));
        else
          logForDebugging(
            `[inProcessRunner] ${s.agentName} ignoring stale plan_approval_response (not awaiting approval)`,
          );
        continue;
      }
      if (isModeSetRequest(A.text)) {
        logForDebugging(
          `[inProcessRunner] ${s.agentName} dropping mode_set_request message: permission mode changes are never accepted from the inbox`,
          { level: "warn" },
        );
        continue;
      }
      logForDebugging(
        `[inProcessRunner] ${s.agentName} dropping protocol frame from ${A.from}: ${A.text.substring(0, 80)}`,
        { level: "warn" },
      );
    }
    if (!(await markMessagesAsRead(s.agentName, s.teamName, M, _)))
      logForDebugging(
        `[inProcessRunner] ${s.agentName} could not mark ${M.length} protocol frame(s) read; retrying next poll`,
        { level: "warn" },
      );
  }
  if (w) return { type: "new_message", message: w, from: TEAM_LEAD_AGENT_NAME };
  if (C.length > 0) {
    if (await markMessagesAsRead(s.agentName, s.teamName, C, _))
      ((o.count = 0), (o.reported = !1), o.deliveredUnmarked.clear());
    else {
      let A = ++o.count;
      if (A < MARK_READ_FAILURE_CAP)
        return (
          logForDebugging(
            `[inProcessRunner] ${s.agentName} could not mark ${C.length} message(s) read (${A}/${MARK_READ_FAILURE_CAP}); delivery retried next poll`,
            { level: "warn" },
          ),
          null
        );
      if (
        (logForDebugging(
          `[inProcessRunner] ${s.agentName} could not mark ${C.length} message(s) read for ${A} poll(s); delivering the batch unmarked`,
          { level: "warn" },
        ),
        !o.reported)
      )
        ((o.reported = !0),
          logFeatureSad("swarm_inbox_poll", "worker_mark_read_failed_streak"));
      for (let I of C) o.deliveredUnmarked.add(messageIdentityKey(I));
    }
    return (
      logForDebugging(
        `[inProcessRunner] ${s.agentName} draining ${C.length} message(s) from ${dedupe(C.map((A) => A.from)).join(", ")}`,
      ),
      { type: "new_messages", messages: C }
    );
  }
  if (o.count > 0)
    ((o.count = 0), (o.reported = !1), o.deliveredUnmarked.clear());
  return null;
}
async function Ye(s, e, t, _, o, m, T, d, M, C = !1, w) {
  logForDebugging(
    `[inProcessRunner] ${s.agentName} starting poll loop (abort=${e.signal.aborted})`,
  );
  let p = Date.now(),
    A = !1,
    I = 0;
  while (!e.signal.aborted) {
    if (I > 0) await sleep(be);
    I++;
    let E = _(),
      l = E.tasks[t];
    if (
      l &&
      l.type === "in_process_teammate" &&
      l.pendingUserMessages.length > 0
    ) {
      let R = l.pendingUserMessages[0];
      return (
        L(
          t,
          (a) => ({
            ...a,
            pendingUserMessages: a.pendingUserMessages.slice(1),
          }),
          o,
        ),
        logForDebugging(
          `[inProcessRunner] ${s.agentName} found pending user message (poll #${I})`,
        ),
        { type: "new_message", message: R.text, origin: R.origin, from: "user" }
      );
    }
    let k = s.resumableAgentId !== void 0 && hasRunningTasksForAgent(s.resumableAgentId, o);
    if (
      C ||
      (l?.type === "in_process_teammate" && l.awaitingPlanApproval) ||
      E.viewingAgentTaskId === t ||
      hasOtherActiveAgentTask(E.tasks, t) ||
      k
    )
      p = Date.now();
    if (C && l?.type === "in_process_teammate" && l.evictAfter !== void 0)
      L(t, (R) => ({ ...R, evictAfter: void 0 }), o);
    if (
      l?.type === "in_process_teammate" &&
      l.evictAfter !== void 0 &&
      ((k && l.evictAfter <= Date.now() + be) || (A && !k))
    )
      L(t, (R) => ({ ...R, evictAfter: Date.now() + TASK_EVICT_GRACE_MS }), o);
    if (((A = k), e.signal.aborted))
      return (
        logForDebugging(
          `[inProcessRunner] ${s.agentName} aborted while waiting (poll #${I})`,
        ),
        { type: "aborted" }
      );
    if (T) continue;
    logForDebugging(`[inProcessRunner] ${s.agentName} poll #${I}: checking mailbox`);
    try {
      let R = await Se(s, t, o, w, M);
      if (R) return R;
      if (M.count > 0 && M.readFailures < MARK_READ_FAILURE_CAP) {
        p = Date.now();
        let a = _().tasks[t];
        if (a?.type === "in_process_teammate" && a.evictAfter !== void 0)
          L(t, (D) => ({ ...D, evictAfter: Date.now() + TASK_EVICT_GRACE_MS }), o);
        continue;
      }
    } catch (R) {
      logForDebugging(`[inProcessRunner] ${s.agentName} poll error: ${R}`);
    }
    let j = await De(m, s.agentName, d, w);
    if (j) return { type: "new_message", message: j, from: "task-list" };
  }
  return (
    logForDebugging(
      `[inProcessRunner] ${s.agentName} exiting poll loop (abort=${e.signal.aborted}, polls=${I})`,
    ),
    { type: "aborted" }
  );
}
async function Je(s) {
  let {
      identity: e,
      taskId: t,
      prompt: _,
      description: o,
      agentDefinition: m,
      teammateContext: T,
      toolUseContext: d,
      abortController: M,
      model: C,
      systemPrompt: w,
      systemPromptMode: p,
      allowedTools: A,
      allowPermissionPrompts: I,
      invokingRequestId: E,
      standalone: l = !1,
      resumeMessages: k,
      resumeReplacementState: ee,
      initialFrom: j,
    } = s,
    { setAppState: R, taskRegistry: a } = d,
    D = gbt(t),
    F = {
      count: 0,
      reported: !1,
      deliveredUnmarked: new Set(),
      readFailures: 0,
    };
  logForDebugging(`[inProcessRunner] Starting agent loop for ${e.agentId}`);
  let B = {
      agentId: e.agentId,
      parentAgentId: d.agentId,
      depth: getAgentDepth(d.agentContext),
      parentSessionId: e.parentSessionId,
      agentName: e.agentName,
      teamName: e.teamName,
      agentColor: e.color,
      planModeRequired: e.planModeRequired,
      isTeamLead: !1,
      agentType: "teammate",
      invokingRequestId: E,
      invocationKind: "spawn",
      invocationEmitted: !1,
      isBackgroundAgent: !0,
    },
    { tools: z, mainLoopModel: X } = d.rootToolSurface,
    ie;
  if (p === "replace" && w) ie = w;
  else {
    let H = [
      ...(await buildDefaultSystemPrompt(z, X, void 0, { teammate: !0 })).filter((W) => W !== SYSTEM_PROMPT_DYNAMIC_BOUNDARY),
      TEAMMATE_SYSTEM_PROMPT_ADDENDUM,
    ];
    if (m) {
      let W = m.getSystemPrompt({
        toolUseContext: d,
        primedAgentMemory: await readPrimedAgentMemory(m, d.storageV5),
      });
      if (W)
        H.push(`
# Custom Agent Instructions
${W}`);
      if (m.memory)
        logEvent("tengu_agent_memory_loaded", {
          ...!1,
          scope: fromEnum(m.memory),
          source: S("in-process-teammate"),
        });
    }
    if (p === "append" && w) H.push(w);
    ie = H.join(`
`);
  }
  let K = T.hasTaskListTools,
    O = {
      agentType: e.agentName,
      whenToUse: `In-process teammate: ${e.agentName}`,
      getSystemPrompt: () => ie,
      tools: m?.tools
        ? dedupe([...m.tools, SEND_MESSAGE_TOOL_NAME, ...(K ? [TASK_CREATE_TOOL_NAME, TASK_GET_TOOL_NAME, TASK_LIST_TOOL_NAME, TASK_UPDATE_TOOL_NAME] : [])])
        : ["*"],
      source: "projectSettings",
      permissionMode: "default",
      ...(m?.model && { model: m.model }),
    },
    U = k ? [...k] : [],
    he = new Set(k?.map((P) => P.uuid)),
    xe = {
      taskKind: "in_process_teammate",
      teamName: e.teamName,
      color: e.color,
      planModeRequired: e.planModeRequired,
      ...(m && { customAgentType: m.agentType }),
      ...(C && { model: C }),
    },
    ve = formatTeammateMessage({ from: j ?? TEAM_LEAD_AGENT_NAME, text: _, summary: o }),
    V = ve,
    me = void 0,
    pe = !1,
    re = !1,
    Me = (k?.length ?? 0) > 0,
    we = !1,
    ge = k ? tryBuildIdleNotification(k).result : void 0,
    fe = !1,
    ke = async (P) => {
      switch (((re = !1), P.type)) {
        case "shutdown_request":
          (logForDebugging(
            `[inProcessRunner] ${e.agentId} received shutdown request - passing to model`,
          ),
            (V = formatTeammateMessage({
              from:
                typeof P.entryFrom === "string" && P.entryFrom !== ""
                  ? P.entryFrom
                  : UNKNOWN_SENDER,
              text: withShutdownReplyInstructions(
                sanitizeReceivedStructuredFrame(P.originalMessage, P.entryFrom) ?? P.originalMessage,
                P.entryFrom,
              ),
            })),
            (me = void 0),
            appendMessageToTaskTranscript(t, createUserMessage({ content: V }), a));
          break;
        case "new_message":
          if (
            (logForDebugging(
              `[inProcessRunner] ${e.agentId} received new message from ${P.from}`,
            ),
            P.from === "user")
          )
            ((V = P.message), (me = P.origin));
          else
            ((V = formatTeammateMessage({
              from: P.from,
              text: P.message,
              color: P.color,
              summary: P.summary,
            })),
              (me = void 0),
              appendMessageToTaskTranscript(t, createUserMessage({ content: V }), a));
          break;
        case "new_messages":
          (logForDebugging(
            `[inProcessRunner] ${e.agentId} received ${P.messages.length} drained message(s)`,
          ),
            (V = formatTeammateMessages(P.messages, { recipientIsLead: !1 })),
            (me = void 0),
            appendMessageToTaskTranscript(t, createUserMessage({ content: V }), a));
          break;
        case "aborted":
          (logForDebugging(`[inProcessRunner] ${e.agentId} aborted while waiting`),
            (pe = !0));
          break;
        case "idle_timeout":
          if (
            (logForDebugging(
              `[inProcessRunner] ${e.agentId} idle timeout \u2014 exiting loop`,
            ),
            !l)
          )
            (d.agentLifecycle.setTeammate(e.agentId, void 0),
              await removeMemberByAgentId(
                e.teamName,
                e.agentId,
                { onlyIfJoinedBefore: Date.now() },
                d.storageV5,
              ));
          pe = !0;
          break;
      }
    };
  if (!l) await De(e.parentSessionId, e.agentName, K, d.storageV5);
  try {
    a.updateTranscript(t, (v) => {
      let J = v.messages;
      if (k) for (let ye of k.slice(-MAX_TRANSCRIPT_MESSAGES)) J = appendTranscriptMessage(J, ye);
      return { ...v, messages: appendTranscriptMessage(J, createUserMessage({ content: ve })) };
    });
    let P = d.contentReplacementState ? (ee ?? createContentReplacementState()) : void 0,
      H = CW(),
      W = Le();
    while (!M.signal.aborted && !pe) {
      logForDebugging(
        `[inProcessRunner] ${e.agentId} processing prompt: ${V.substring(0, 50)}...`,
      );
      let v = createAbortController();
      (v.signal.addEventListener("abort", () => {
        fe = !0;
      }),
        L(
          t,
          (r) => ({ ...r, currentWorkAbortController: v, retryWake: W }),
          a,
        ));
      let J = createUserMessage({ content: V, origin: me }),
        ye = [J],
        de = U,
        Ee = estimateContextTokens(U, bytesPerTokenForModel(X));
      if (Ee > getAutoCompactThreshold(X, E6t(d.options.autoCompactWindow))) {
        logForDebugging(`[inProcessRunner] ${e.agentId} compacting history (${Ee} tokens)`);
        let r = {
          ...d,
          abortController: M,
          agentId: oo(e.agentId),
          readFileState: cloneFileStateCache(d.readFileState, { stripSeededFromContext: !0 }),
          memorySelector: createMemoryRelevanceState(),
          loadedNestedMemoryPaths: {},
          onCompactEvent: void 0,
          onRetryStatus: D.setRetryStatus,
        };
        try {
          let c = await compactConversation(
            U,
            r,
            {
              systemPrompt: asSystemPrompt([]),
              userContext: {},
              systemContext: {},
              toolUseContext: r,
              forkContextMessages: U,
              advisorModel: r.getAppState().advisorModel,
            },
            !0,
            { isAutoCompact: !0 },
          );
          if (((de = compactionResultToMessages(c)), P)) P = createContentReplacementState();
          ((U.length = 0),
            U.push(...de),
            he.clear(),
            a.updateTranscript(t, (N) => ({ ...N, messages: [...de, J] })));
        } catch (c) {
          if (c instanceof Error && c.message.startsWith(COMPACTION_BLOCKED_BY_HOOK_MESSAGE))
            (logForDebugging(
              `[inProcessRunner] ${e.agentId} compaction blocked by PreCompact hook; continuing uncompacted`,
            ),
              (we = !0));
          else if (
            M.signal.aborted ||
            (c instanceof Error && c.message === API_REQUEST_ABORTED_MESSAGE)
          ) {
            (logForDebugging(`[inProcessRunner] ${e.agentId} aborted during compaction`),
              (pe = !0));
            break;
          } else throw c;
        }
      }
      let Ue = de.length > 0 ? [...de] : void 0;
      (U.push(J), (ge = void 0), (fe = v.signal.aborted));
      let le = createTaskProgressState(),
        Te = a.get(t);
      if (Te !== void 0 && "progress" in Te && Te.progress !== void 0)
        le.latestInputTokens = Te.progress.tokenCount;
      let Oe = createActivityDescriptionResolver(z),
        ue = [],
        Pe = d.getAppState().tasks[t],
        Ne =
          Pe && Pe.type === "in_process_teammate"
            ? Pe.permissionMode
            : "default",
        qe = { ...O, permissionMode: Ne },
        $e = !1,
        te = null;
      if (
        (await runWithTeammateContext(T, async () =>
          runWithAgentContext(B, async () => {
            (L(
              t,
              (r) => ({
                ...r,
                status: "running",
                isIdle: !1,
                evictAfter: void 0,
                evictAfterHeldBySibling: void 0,
              }),
              a,
            ),
              a.updateTranscript(t, (r) => ({
                ...r,
                turnStartTime: Date.now(),
              })),
              D.setMode("responding"));
            for await (let r of runAgent({
              agentDefinition: qe,
              promptMessages: ye,
              toolUseContext: d,
              canUseTool: Ge(
                e,
                v,
                (c) => {
                  L(
                    t,
                    (N) => ({
                      ...N,
                      totalPausedMs: (N.totalPausedMs ?? 0) + c,
                    }),
                    a,
                  );
                },
                createClassifierApprovalsUpdater(R),
              ),
              isAsync: !0,
              canShowPermissionPrompts: I ?? !0,
              forkContextMessages: Ue,
              querySource: "agent:custom",
              override: {
                abortController: v,
                agentContext: B,
                onRetryStatus: D.setRetryStatus,
                subscribeRetryWake: W.subscribe,
                ...(e.resumableAgentId && { agentId: e.resumableAgentId }),
              },
              ...(e.resumableAgentId && {
                recordedUuids: he,
                name: e.agentName,
                description: o,
                extraMetadata: { ...xe, permissionMode: Ne },
              }),
              onStreamTokenEstimate: (c) => {
                applyStreamTokenEstimate(le, c);
                let N = snapshotTaskProgress(le);
                L(
                  t,
                  (q) =>
                    q.progress?.tokenCount === N.tokenCount
                      ? q
                      : { ...q, progress: N },
                  a,
                );
              },
              model: C,
              preserveToolUseResults: !0,
              availableTools: z,
              allowedTools: A,
              contentReplacementState: P,
              stickyBetas: H,
              isTeammate: !0,
              teammateContext: T,
            })) {
              if (M.signal.aborted) {
                logForDebugging(`[inProcessRunner] ${e.agentId} lifecycle aborted`);
                break;
              }
              if (v.signal.aborted) {
                if (
                  (logForDebugging(
                    `[inProcessRunner] ${e.agentId} current work aborted (Escape pressed)`,
                  ),
                  r.type === "assistant" ||
                    r.type === "user" ||
                    (r.type === "attachment" && isLoggableMessage(r)))
                )
                  (ue.push(r), U.push(r), (te = restorePreservedMessages(U, r, te)));
                $e = !0;
                break;
              }
              if (r.type === "spinner_mode") {
                D.setMode(r.mode);
                continue;
              }
              if (r.type === "api_metrics") continue;
              if (r.type === "query_model_change") continue;
              if (r.type === "set_in_progress_tool_use_ids") {
                if (r.op.action !== "remove") continue;
                let N = r.op.ids;
                a.updateTranscript(t, (q) => {
                  let Q = new Set(q.inProgressToolUseIDs),
                    ne = !1;
                  for (let _e of N) if (Q.delete(_e)) ne = !0;
                  return ne ? { ...q, inProgressToolUseIDs: Q } : q;
                });
                continue;
              }
              if (r.type === "system" && r.subtype === "api_error") continue;
              (ue.push(r), U.push(r), (te = restorePreservedMessages(U, r, te)), updateTaskProgressFromMessage(le, r, Oe, z));
              let c = snapshotTaskProgress(le);
              (L(t, (N) => ({ ...N, progress: c }), a),
                a.updateTranscript(t, (N) => {
                  let q = N.inProgressToolUseIDs;
                  if (r.type === "assistant") {
                    for (let Q of r.message.content)
                      if (Q.type === "tool_use") q = new Set([...q, Q.id]);
                  } else if (r.type === "user") {
                    let Q = r.message.content;
                    if (Array.isArray(Q)) {
                      for (let ne of Q)
                        if (
                          typeof ne === "object" &&
                          "type" in ne &&
                          ne.type === "tool_result"
                        ) {
                          let _e = new Set(q);
                          (_e.delete(ne.tool_use_id), (q = _e));
                        }
                    }
                  }
                  return {
                    ...N,
                    messages: replaceTranscriptMessage(N.messages, r),
                    inProgressToolUseIDs: q,
                  };
                }));
            }
            return { success: !0, messages: ue };
          }),
        ).finally(() => {
          if (te) (U.push(...te.preserved), (te = null));
        }),
        L(t, (r) => ({ ...r, currentWorkAbortController: void 0 }), a),
        M.signal.aborted)
      )
        break;
      let ae = $e || v.signal.aborted;
      if (ae) {
        ((fe = !0),
          logForDebugging(
            `[inProcessRunner] ${e.agentId} work interrupted, returning to idle`,
          ));
        let r = createApiErrorMessage({ content: API_REQUEST_ABORTED_MESSAGE });
        a.updateTranscript(t, (c) => ({ ...c, messages: appendTranscriptMessage(c.messages, r) }));
      }
      Me ||= ue.some(
        (r) =>
          (r.type === "assistant" && !r.isApiErrorMessage) ||
          (r.type === "user" && !r.isMeta),
      );
      let se = !ae ? getLastApiError(ue) : void 0;
      if (((re = se?.isTransient === !0 && !l && Me), !l && !ae)) {
        let r = null;
        try {
          r = await Se(e, t, a, d.storageV5, F);
          while (
            r === null &&
            F.count > 0 &&
            F.readFailures < MARK_READ_FAILURE_CAP &&
            !M.signal.aborted
          )
            (await sleep(be), (r = await Se(e, t, a, d.storageV5, F)));
        } catch (c) {
          logForDebugging(
            `[inProcessRunner] ${e.agentName} turn-end mailbox check failed: ${c}`,
          );
        }
        if (r) {
          try {
            let { result: c, summary: N } = tryBuildIdleNotification(U, { emitTelemetry: !0 });
            if (c !== void 0 || se !== void 0) {
              if (
                (await Ae(
                  e.agentName,
                  e.color,
                  e.teamName,
                  {
                    idleReason: se !== void 0 ? "failed" : void 0,
                    summary: N,
                    failureReason: se?.reason,
                    result: c,
                    senderReachable: !0,
                  },
                  d.storageV5,
                )) &&
                c !== void 0
              )
                ge = c;
            }
          } catch (c) {
            logForDebugging(
              `[inProcessRunner] ${e.agentName} turn-end result delivery failed: ${c}`,
            );
          }
          await ke(r);
          continue;
        }
      }
      if (se?.isTransient)
        logEvent("tengu_teammate_transient_turn_failure", {
          error_kind: fromEnum(se.errorKind ?? "unknown"),
          hold_evict: re,
        });
      let Ce = d.getAppState().tasks[t],
        Fe = Ce?.type === "in_process_teammate" && Ce.isIdle;
      L(
        t,
        (r) => (
          r.onIdleCallbacks?.forEach((c) => c()),
          {
            ...r,
            isIdle: !0,
            evictAfter: re ? void 0 : Date.now() + TASK_EVICT_GRACE_MS,
            onIdleCallbacks: [],
          }
        ),
        a,
      );
      let Ie = se?.reason;
      if (!Fe && !l) {
        let r = tryBuildIdleNotification(U, { emitTelemetry: !ae }),
          c = ae ? void 0 : r.result,
          N = await Ae(
            e.agentName,
            e.color,
            e.teamName,
            {
              idleReason: ae
                ? "interrupted"
                : Ie !== void 0
                  ? "failed"
                  : "available",
              summary: r.summary,
              failureReason: Ie,
              result: c,
              senderReachable: Ie === void 0 || re,
            },
            d.storageV5,
          );
        if (c !== void 0 && N) ge = c;
      } else
        logForDebugging(
          `[inProcessRunner] Skipping duplicate idle notification for ${e.agentName}`,
        );
      logForDebugging(`[inProcessRunner] ${e.agentId} finished prompt, waiting for next`);
      let Be = await Ye(
        e,
        M,
        t,
        d.getAppState,
        a,
        e.parentSessionId,
        l,
        K,
        F,
        re,
        d.storageV5,
      );
      await ke(Be);
    }
    let oe = !1,
      x;
    if (
      (L(
        t,
        (v) => {
          if (v.status !== "running") return ((oe = !0), v);
          return (
            (x = v.toolUseId),
            v.onIdleCallbacks?.forEach((J) => J()),
            {
              ...v,
              status: "completed",
              notified: !0,
              endTime: Date.now(),
              pendingUserMessages: [],
              abortController: void 0,
              currentWorkAbortController: void 0,
              retryWake: void 0,
              onIdleCallbacks: [],
            }
          );
        },
        a,
      ),
      !oe)
    )
      a.updateTranscript(t, (v) => ({
        ...v,
        messages: v.messages.length ? [v.messages.at(-1)] : [],
        inProgressToolUseIDs: new Set(),
      }));
    if ((evictTaskOutput(t), a.evictTerminal(t), !oe))
      emitTaskNotification(t, "completed", { toolUseId: x, summary: e.agentId });
    if ((unregisterPerfettoAgent(e.agentId), we))
      logFeatureSad("swarm_in_process_run", "compact_blocked_by_hook");
    else logFeatureOk("swarm_in_process_run");
    return { success: !0, messages: U };
  } catch (P) {
    let H = P instanceof Error ? P.message : "Unknown error";
    logForDebugging(`[inProcessRunner] Agent ${e.agentId} failed: ${H}`);
    let W = !1,
      oe;
    if (
      (L(
        t,
        (x) => {
          if (x.status !== "running") return ((W = !0), x);
          return (
            (oe = x.toolUseId),
            x.onIdleCallbacks?.forEach((v) => v()),
            {
              ...x,
              status: "failed",
              notified: !0,
              error: H,
              isIdle: !0,
              endTime: Date.now(),
              onIdleCallbacks: [],
              pendingUserMessages: [],
              abortController: void 0,
              currentWorkAbortController: void 0,
              retryWake: void 0,
            }
          );
        },
        a,
      ),
      !W)
    )
      a.updateTranscript(t, (x) => ({
        ...x,
        messages: x.messages.length ? [x.messages.at(-1)] : [],
        inProgressToolUseIDs: new Set(),
      }));
    if ((evictTaskOutput(t), a.evictTerminal(t), !W))
      emitTaskNotification(t, "failed", { toolUseId: oe, summary: e.agentId });
    if (!l) {
      let x;
      try {
        x = fe ? void 0 : getIdleNotificationResult(U);
      } catch (v) {
        logForDebugging(
          `[inProcessRunner] ${e.agentName} failed to extract partial result: ${v}`,
        );
      }
      if (x !== void 0 && x === ge) x = void 0;
      await Ae(
        e.agentName,
        e.color,
        e.teamName,
        {
          idleReason: "failed",
          completedStatus: "failed",
          failureReason: H,
          result: x,
        },
        d.storageV5,
      );
    }
    return (
      unregisterPerfettoAgent(e.agentId),
      logFeatureBad("swarm_in_process_run", "agent_loop_failed"),
      { success: !1, error: H, messages: U }
    );
  }
}
function startInProcessTeammate(s) {
  let e = s.identity.agentId;
  Je(s).catch((t) => {
    logForDebugging(`[inProcessRunner] Unhandled error in ${e}: ${t}`);
  });
}
export { startInProcessTeammate };
