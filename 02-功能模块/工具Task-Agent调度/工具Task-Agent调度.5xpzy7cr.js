// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { oo, ze, he, sn, ke, p_e, TB, EB } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { my, li, $m, Xo } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getSessionStateStore, runWithAgentContext, getAgentDepth, getWorkflowRunMetadata, getCurrentWorktreeSession, wasAgentSpawnedInWorktree, wasAgentWorktreeRemovedCleanly } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Ve, yt, l, A, Rt, FA, CB } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { hasNetworkPathSpelling, resolveSymlinkAncestrySync, fsSurface, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { runWithCwdOrDefault, getCwd } from "../../01-核心基础设施/核心工具-未归类/cwd-context.js";
import { clampPermissionMode } from "../权限系统/chunk-e4pfvp7x.js";
import { splitToolRuleList } from "../工具Bash-Shell/permission-rule-parsing.js";
import { getParentSessionId } from "../Teammates团队/teammate-context.js";
import { createCommandRulesGetAppState, getToolPermissionContext, getMainLoopModel } from "../权限系统/chunk-fjrcf22x.js";
import { matchesToolName, buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import {
  isAgentStopPending,
  isTaskLoopSettled,
  resolveExploreAgentModel,
  GENERAL_PURPOSE_AGENT,
  isWebFetchAgentType,
  isBuiltInWebFetchAgent,
  WEB_FETCH_AGENT,
  isBuiltInAgent,
  isPluginAgent,
  filterOfferedAgents,
  enqueueCommand,
  isMcpTool,
  isForkSubagentEnabled,
  FORK_AGENT,
  degradeRestoredHostContexts,
  isAgentToolPoolDenied,
  agentToolPoolDeniedMessage,
  mergeSkillCommands,
  isSkillsSyncVetoed,
  formatAgentQuerySource,
  formatErrorWithCode,
  createAgentMetadataReadFallback,
  findArmedObserverPairing,
  rearmObserverForResume,
  createAgentResumedNotification,
  createInitialWebFetchSavedFiles,
  TASK_EVICT_GRACE_MS,
  isLocalAgentTask,
  getUserStopCount,
  getKeepaliveReasons,
  addKeepaliveReason,
  IDLE_WINDOW_KEEPALIVE_REASON,
  getNonMainAgentTaskId,
  releaseSettledKeepalives,
  appendTaskPendingMessage,
  appendTaskTranscriptMessage,
  resolveNotificationTargetAgentId,
  notifyAgentReparented,
  markTaskNotified,
  registerBackgroundAgentTask,
  getSkillsPersistencePrompt,
  resolveSubagentModel,
  getMainThreadSystemPrompt,
  dropApiInvalidAssistantBlocks,
  getSkillVerificationCommand,
  getSpawnProvenance,
  evaluateWorktreePin,
  comparePathIdentity,
  resolveGitRootCandidates,
  createModelRestrictedSystemMessageHandler,
  isTransientFileSystemErrorCode,
  readAgentForkedSkillScoping,
  readForkedSkillProvenanceName,
  runAgent,
  resolveAgentTools,
  runAsyncAgent,
  initialRealCwd,
  buildSessionTools,
  createUserMessage,
  dropUnresolvedToolUseMessages,
  isExternalMessageOrigin,
  filterWhitespaceOnlyAssistantMessages,
  filterOrphanedThinkingMessages,
  formatMessageForOrigin,
  updateAgentMetadata,
  readAgentMetadata,
  AgentTranscriptFetchError,
  getAgentTranscript,
  getCommands,
  attributionSkillName,
  buildDefaultSystemPrompt,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getTaskOutputPath } from "../后台任务-Shell管理/task-output.js";
import { areBackgroundTasksDisabled } from "../../01-核心基础设施/核心工具-未归类/host-capability-state.js";
import { isCoordinatorMode } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { scrubRestoredTranscriptMetadata } from "../通道集成-Slack/通道集成-Slack.wnn25q3j.js";
import { WORKFLOW_TOOL_NAME } from "../编排-Workflow/chunk-7fcxwgtq.js";
import { CRON_CREATE_TOOL_NAME } from "../定时任务-Cron/chunk-mk3zm4ew.js";
import { restoreContentReplacementState } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { excludeCoordinatorCommsMcpTools } from "../../01-核心基础设施/核心工具-未归类/chunk-qg9n8r78.js";
import { stripAbortedTurnMessages, hasPendingUserTurn } from "../后台任务-Shell管理/chunk-531ast3t.js";
import { isTerminalTaskStatus } from "../Teammates团队/chunk-mrfx53ye.js";
import { parsePluginIdIgnoringReservedMarketplace } from "../插件系统/chunk-33bdfgmx.js";
import { SCHEDULE_WAKEUP_TOOL_NAME, TASK_STOP_TOOL_NAME } from "../Teammates团队/chunk-z2t8b9yc.js";
import { SEND_MESSAGE_TOOL_NAME } from "../../01-核心基础设施/核心工具-未归类/send-message-constants.js";
import { MONITOR_TOOL_NAME } from "../../01-核心基础设施/核心工具-未归类/monitor-tool-name.js";
import { AGENT_TOOL_NAME, TASK_TOOL_NAME } from "./agent-tool-constants.js";
import { formatAgentMessage } from "../Teammates团队/chunk-enjekn9t.js";
import { s, Qe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
var re = "ObserverReport";
var Ge =
    "Send a report to your report target \u2014 the agent you observe, or the coordinating agent that spawned the worker you observe. The target is resolved from your observer pairing \u2014 there is no recipient to name. Use this only when you have something genuinely useful: a mistake about to compound, a missed constraint, prior art the observed agent should see. The expected steady state is silence \u2014 if nothing warrants action, end your turn without calling this.",
  xe =
    "Send a report to your report target \u2014 the agent you observe, or the coordinating agent that spawned the worker you observe. The target is resolved from your observer pairing \u2014 there is no recipient to name. Use this only when you have something genuinely useful: a mistake about to compound, a missed constraint, prior art the observed agent should see. The expected steady state is silence \u2014 if nothing warrants action, end your turn without calling this.";
var bt = createLazyValue(() =>
    Qe({
      report: s()
        .min(1)
        .describe(
          "The report to deliver to your report target. Be concise and specific.",
        ),
    }),
  ),
  qe = buildTool({
    name: re,
    maxResultSizeChars: 1000,
    async description() {
      return Ge;
    },
    async prompt() {
      return xe;
    },
    get inputSchema() {
      return bt();
    },
    isReadOnly() {
      return !1;
    },
    isEnabled() {
      return !0;
    },
    create(e) {
      return {
        async checkPermissions(p) {
          return { behavior: "allow", updatedInput: p };
        },
        async call(p) {
          let c = e.agentId;
          if (c === void 0)
            return {
              data: {
                success: !1,
                message:
                  "ObserverReport is only available to an observer agent; the main session does not have an observed pairing.",
              },
            };
          let w = findArmedObserverPairing(e.session, c);
          if (!w)
            return {
              data: {
                success: !1,
                message:
                  "Your observer pairing is not armed (stopped, retired, or never installed). The report was not delivered.",
              },
            };
          let {
            reportTargetTaskId: k,
            reportTargetName: r,
            viaWorkerName: R,
          } = w;
          if (k !== void 0) {
            let E = e.taskRegistry.get(k);
            if (!(
              isLocalAgentTask(E) &&
              (E.status === "running" ||
                (E.status === "completed" &&
                  [...getKeepaliveReasons(E)].some((ne) => ne !== IDLE_WINDOW_KEEPALIVE_REASON)))
            ))
              return {
                data: {
                  success: !1,
                  message: `The report target (${r}) is not running. The report was not delivered.`,
                },
              };
          }
          let H = `observer:${w.observerAgentType}`,
            se =
              w.observedTaskId === void 0
                ? `"${R}"`
                : `"${R}" [${w.observedTaskId}]`,
            F = formatAgentMessage(
              H,
              R === void 0
                ? p.report
                : `(observing worker ${se})
${p.report}`,
            ),
            G = { kind: "observer", from: H, senderTaskId: c };
          if (k === void 0)
            enqueueCommand({
              mode: "prompt",
              agentId: ze(),
              value: F,
              priority: "next",
              origin: G,
              skipSlashCommands: !0,
              isMeta: !0,
              skipAttachments: !0,
            });
          else appendTaskPendingMessage(k, F, e.taskRegistry, { origin: G, isMeta: !0 });
          return {
            data: {
              success: !0,
              message: `Report queued for ${k === void 0 ? "the main conversation" : r}.`,
            },
          };
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, p) {
      return {
        type: "tool_result",
        tool_use_id: p,
        content: e.message,
        is_error: !e.success,
      };
    },
    renderToolUseMessage(e) {
      return `report: ${e.report}`;
    },
  });
var At = [SEND_MESSAGE_TOOL_NAME, re, AGENT_TOOL_NAME, WORKFLOW_TOOL_NAME, SCHEDULE_WAKEUP_TOOL_NAME, MONITOR_TOOL_NAME, CRON_CREATE_TOOL_NAME];
function buildObserverAgentTools(e) {
  return [...e.filter((p) => At.every((c) => !matchesToolName(p, c))), qe];
}
import { promises } from "fs";
function isWebFetchAgentToolUse(e) {
  return (
    (e.name === AGENT_TOOL_NAME || e.name === TASK_TOOL_NAME) &&
    typeof e.input === "object" &&
    e.input !== null &&
    "subagent_type" in e.input &&
    isWebFetchAgentType(e.input.subagent_type)
  );
}
function Ke(e, p) {
  let c = new Set();
  for (let w of e)
    if (w.type === "assistant") {
      let k = w.message.content;
      if (!Array.isArray(k)) continue;
      for (let r of k) if (r.type === "tool_use" && isWebFetchAgentToolUse(r)) c.add(r.id);
    } else if (w.type === "user" && c.size > 0) {
      let k = w.toolUseResult,
        r = w.message.content;
      if (
        typeof k !== "object" ||
        k === null ||
        !("agentId" in k) ||
        k.agentId !== p ||
        !Array.isArray(r)
      )
        continue;
      if (r.some((R) => R.type === "tool_result" && c.has(R.tool_use_id)))
        return !0;
    }
  return !1;
}
var ge = "resumedInline";
function isResumedInlineError(e) {
  return e instanceof Error && ge in e && e[ge] === !0;
}
class ResumeAgentStateError extends Error {
  transcriptMissing;
  constructor(e, p) {
    super(e);
    ((this.name = "ResumeAgentStateError"),
      (this.transcriptMissing = p?.transcriptMissing === !0));
  }
}
var fe = "git_worktree_create";
class AgentResumeTransientError extends ResumeAgentStateError {
  constructor(e) {
    super(e);
    this.name = "AgentResumeTransientError";
  }
}
class AgentResumePermanentlyRefusedError extends ResumeAgentStateError {
  constructor(e) {
    super(e);
    this.name = "AgentResumePermanentlyRefusedError";
  }
}
class AgentStoppedByUserError extends ResumeAgentStateError {
  constructor(e) {
    super(e);
    this.name = "AgentStoppedByUserError";
  }
}
class AgentResumeInProgressError extends ResumeAgentStateError {
  constructor(e) {
    super(e);
    this.name = "AgentResumeInProgressError";
  }
}
class AgentStillStoppingError extends ResumeAgentStateError {
  constructor(e) {
    super(e);
    this.name = "AgentStillStoppingError";
  }
}
function resumeAgentWithNotification(e) {
  return ye(e, "notification");
}
function resumeAgentInline(e) {
  return ye(e, "inline");
}
function Ye(e, p = fsSurface) {
  return typeof e === "string" &&
    e !== "" &&
    !my(e) &&
    !Xo(e) &&
    !li(e) &&
    !$m(e) &&
    resolveSymlinkAncestrySync(p, e, { surfaceNetworkRaw: !0, unreadableAncestry: "unverified" }) ===
      void 0
    ? e
    : void 0;
}
function resumeAgentReply(e) {
  return ye(e, "reply");
}
async function ye(e, p) {
  let { agentId: c } = e,
    { resumesInFlight: w } = getSessionStateStore();
  if (w.has(c)) throw new AgentResumeInProgressError(`Agent ${c} is already running or being resumed`);
  w.add(c);
  let k = !0,
    r = () => {
      if (k) ((k = !1), w.delete(c));
    };
  try {
    return await _t(e, p, r);
  } finally {
    r();
  }
}
async function _t(
  {
    agentId: e,
    prompt: p,
    promptOrigin: c,
    promptIsMeta: w,
    continueInterruptedTurn: k,
    toolUseContext: r,
    canUseTool: R,
    invokingRequestId: H,
    parentPromptId: se,
    userInitiated: F,
    suppressOwnerNotification: G,
    workerPermissionMode: E,
    onDeliveryCommitted: we,
    isWebFetchLaunch: ne,
  },
  oe,
  Je,
) {
  let Xe = Date.now(),
    ie = r.getAppState(),
    x = getToolPermissionContext(r),
    { taskRegistry: d } = r,
    z = x.mode,
    be = r.agentId;
  if (be !== void 0 && isAgentStopPending(be))
    throw new AgentStillStoppingError(
      "This agent has been stopped and its stop is still completing; it cannot resume other agents.",
    );
  if (isAgentStopPending(e) || (!isTaskLoopSettled(e) && isTerminalTaskStatus(d.get(e)?.status ?? "running")))
    throw new AgentStillStoppingError(
      `Agent ${e} is still stopping \u2014 its previous run was stopped but has not exited. Re-run ${TASK_STOP_TOOL_NAME} on it or wait for it to exit before resuming.`,
    );
  let O = d.get(e),
    q = 0;
  if (isLocalAgentTask(O)) {
    let t = !1;
    if (
      (d.update(e, (i) => {
        if (i.status === "running" || i.resuming) return i;
        return ((t = !0), (q = i.userStopCount ?? 0), { ...i, resuming: !0 });
      }),
      !t)
    )
      throw new AgentResumeInProgressError(`Agent ${e} is already running or being resumed`);
  }
  let u = () => {
      (d.update(e, (t) => (t.resuming ? { ...t, resuming: !1 } : t)), releaseSettledKeepalives(e, d));
    },
    [Ze, o] = await Promise.all([
      getAgentTranscript(oo(e), r.storageV5, { signal: r.abortController.signal }),
      readAgentMetadata(oo(e), r.storageV5),
    ]).catch((t) => {
      if (yt(t)) throw (u(), t);
      if (
        (logFeatureBad("subagent_launch", "subagent_resume_setup_read_failed"),
        u(),
        t instanceof ResumeAgentStateError)
      )
        throw t;
      throw t instanceof AgentTranscriptFetchError || isTransientFileSystemErrorCode(A(t) ?? CB(t))
        ? new AgentResumeTransientError(l(t))
        : new ResumeAgentStateError(l(t));
    });
  if (r.abortController.signal.aborted) throw (u(), new Ve());
  if (o?.stoppedByUser && c?.kind !== "observer-activity") {
    if (!F)
      throw (
        u(),
        new AgentStoppedByUserError(
          `Agent ${e} was stopped by the user and won't be resumed. Treat its work as cancelled; only launch a new agent if the user explicitly asks.`,
        )
      );
  }
  let S = await readAgentForkedSkillScoping(oo(e), r.storageV5),
    ae = "transientRead" in S && S.transientRead ? AgentResumeTransientError : ResumeAgentStateError;
  if (S.status === "malformed")
    throw (
      logFeatureBad("subagent_launch", "forked_skill_resume_scoping_invalid"),
      u(),
      new ae(
        `Agent ${e} has a malformed forked-skill scoping record; refusing to resume it without the skill's permission scoping.`,
      )
    );
  if (
    (S.status === "absent" || S.status === "absent-but-marked") &&
    isLocalAgentTask(O) &&
    O.forkedSkillName !== void 0
  )
    throw (
      logFeatureBad("subagent_launch", "forked_skill_resume_scoping_missing"),
      u(),
      new ae(
        `Agent ${e} ran as a forked skill but its scoping record is missing; refusing to resume it without the skill's permission scoping.`,
      )
    );
  if (S.status === "absent-but-marked")
    throw (
      logFeatureBad("subagent_launch", "forked_skill_resume_scoping_missing_cold"),
      u(),
      new ae(
        `Agent ${e} carries a forked-skill provenance marker but its scoping record is missing; refusing to resume it without the skill's permission scoping.`,
      )
    );
  if (S.status === "valid" && isLocalAgentTask(O)) {
    if (O.forkedSkillName !== S.scoping.skillName)
      throw (
        logFeatureBad("subagent_launch", "forked_skill_resume_scoping_mismatch"),
        u(),
        new ResumeAgentStateError(
          `Agent ${e} has a forked-skill scoping record that does not match its task record; refusing to resume it.`,
        )
      );
  } else if (S.status === "valid") {
    if ((await readForkedSkillProvenanceName(oo(e), r.storageV5)) !== S.scoping.skillName)
      throw (
        logFeatureBad("subagent_launch", "forked_skill_resume_cold_witness_mismatch"),
        u(),
        new ResumeAgentStateError(
          `Agent ${e} has a forked-skill scoping record with no matching provenance-marker witness; refusing to resume it on a cold path without a corroborated fork identity.`,
        )
      );
  }
  let T = S.status === "valid" ? S.scoping : void 0,
    K = [],
    J = [],
    de;
  if (T) {
    let t = await getCommands(sn(), r.storageV5).catch(() => []),
      i = r
        .getAppState()
        .mcp.commands.filter(
          (_) => _.type === "prompt" && _.loadedFrom === "mcp",
        ),
      a = [...mergeSkillCommands(t, r.getAppState().mcp.commands), ...i].find(
        (_) => _.name === T.skillName && _.type === "prompt",
      );
    if (
      a?.type !== "prompt" ||
      (a.context !== "fork" && a.getContext === void 0)
    )
      throw (
        logFeatureBad("subagent_launch", "forked_skill_resume_skill_unresolved"),
        u(),
        new ResumeAgentStateError(
          `Agent ${e} ran as forked skill ${T.skillName}, which no longer resolves to a fork-capable skill; refusing to resume it without its permission scoping.`,
        )
      );
    if (a.loadedFrom === "syncedSkills" && isSkillsSyncVetoed())
      throw (
        logFeatureBad("subagent_launch", "forked_skill_resume_sync_vetoed"),
        u(),
        new ResumeAgentStateError(
          `Agent ${e} ran as forked skill ${T.skillName}, an account-synced skill that is currently disabled (skills sync turned off or denied by policy); refusing to resume it.`,
        )
      );
    ((K = splitToolRuleList(
      (await a.getAllowedTools?.()?.catch((_) => {
        throw (
          logFeatureBad("subagent_launch", "forked_skill_resume_allowed_tools_failed"),
          u(),
          _ instanceof ResumeAgentStateError ? _ : new ResumeAgentStateError(l(_))
        );
      })) ??
        a.allowedTools ??
        [],
    )),
      (J = splitToolRuleList(a.disallowedTools ?? [])),
      (de = attributionSkillName(a)));
  }
  let Ue = T
      ? (T.frozenCommandDenies ??
        r.getAppState().toolPermissionContext.alwaysDenyRules.command ??
        [])
      : void 0,
    Te = T
      ? [
          ...(K.length === 0
            ? []
            : [{ kind: "allowed_tools", allowedTools: K }]),
          ...(J.length === 0
            ? []
            : [{ kind: "disallowed_tools", disallowedTools: J }]),
        ]
      : [],
    Ae = getSpawnProvenance(e),
    _e =
      Ae !== void 0
        ? { ...r, ...Ae }
        : o?.pluginSteered === !0
          ? { ...r, pluginSteered: !0 }
          : r,
    et = T
      ? {
          ..._e,
          getAppState: createCommandRulesGetAppState(r.getAppState, K, J, {
            replaceCommandRules: !0,
            frozenCommandDenies: Ue,
          }),
          permissionLayers:
            Te.length > 0
              ? [...(r.permissionLayers ?? []), ...Te]
              : r.permissionLayers,
        }
      : _e,
    v = d.get(e),
    le = isLocalAgentTask(v) ? v.result : void 0,
    tt = le?.modelsUsed ?? (le?.resolvedModel ? [le.resolvedModel] : void 0),
    X = (isLocalAgentTask(v) ? v.spawnDepth : o?.spawnDepth) ?? getAgentDepth(r.agentContext) + 1,
    rt = isLocalAgentTask(v) ? v.startTime : Xe,
    P = Ze;
  if (!P) {
    let t = d.getTranscript(e)?.messages;
    if (t && t.length > 0)
      (logForDebugging(
        `[resumeAgentBackground ${e}] disk transcript missing; using ${t.length} in-memory messages mirrored during the run`,
      ),
        (P = { messages: t, contentReplacements: [] }));
  }
  if (!P)
    throw (
      logFeatureBad("subagent_launch", "subagent_resume_transcript_missing"),
      u(),
      new ResumeAgentStateError(`No transcript found for agent ID: ${e}`, {
        transcriptMissing: !0,
      })
    );
  (degradeRestoredHostContexts(P.messages), scrubRestoredTranscriptMetadata(P.messages));
  let st = k ? [...stripAbortedTurnMessages(P.messages)] : P.messages,
    I = filterWhitespaceOnlyAssistantMessages(filterOrphanedThinkingMessages(dropUnresolvedToolUseMessages(dropApiInvalidAssistantBlocks(st, { site: "agent_resume" }))));
  if (k && I.length > 0 && !hasPendingUserTurn(I))
    return (
      d.update(e, (t) => ({
        ...t,
        resuming: !1,
        notified: !0,
        evictAfter: Date.now() + TASK_EVICT_GRACE_MS,
      })),
      logFeatureOk("subagent_launch"),
      {
        agentId: e,
        description: o?.description ?? "(resumed)",
        outputFile: getTaskOutputPath(e),
        alreadyCompleted: !0,
      }
    );
  let nt = restoreContentReplacementState(r.contentReplacementState, I, P.contentReplacements),
    ot =
      !o &&
      ((isLocalAgentTask(v) &&
        (v.agentType === WEB_FETCH_AGENT.agentType || v.webFetchSavedFiles !== void 0)) ||
        ne === !0 ||
        Ke(r.messages, e)),
    ue = o?.agentType ?? (ot ? WEB_FETCH_AGENT.agentType : void 0),
    M =
      o?.isFork === !0
        ? void 0
        : ue
          ? r.options.agentDefinitions.activeAgents.find(
              (t) => t.agentType === ue,
            )
          : void 0,
    N =
      o?.isFork === !0 ||
      (!M && o?.isFork === void 0 && o?.agentType === FORK_AGENT.agentType),
    D =
      ue === WEB_FETCH_AGENT.agentType && o?.isBuiltIn !== !1
        ? M && isBuiltInAgent(M)
          ? M
          : WEB_FETCH_AGENT
        : o?.isBuiltIn === !1
          ? M && !isBuiltInAgent(M)
            ? M
            : GENERAL_PURPOSE_AGENT
          : (M ?? (N ? FORK_AGENT : GENERAL_PURPOSE_AGENT));
  if (isAgentToolPoolDenied(D, x))
    throw (
      logFeatureBad("subagent_launch", "subagent_resume_tools_denied"),
      u(),
      new ResumeAgentStateError(agentToolPoolDeniedMessage(D.agentType))
    );
  if ((await filterOfferedAgents([D])).length !== 1)
    throw (
      logFeatureBad("subagent_launch", "subagent_resume_not_offered"),
      u(),
      new ResumeAgentStateError(`Agent type '${D.agentType}' is not offered in this session.`)
    );
  let Z = oe === "inline" || (oe === "reply" && (areBackgroundTasksDisabled() || isBuiltInWebFetchAgent(D))),
    U = (t, i) => {
      let a = getCurrentWorktreeSession(),
        _ = o?.cwd && !hasNetworkPathSpelling(o.cwd) ? o.cwd : getCwd(),
        je = resolveGitRootCandidates(_),
        ft =
          a !== null &&
          je.length > 0 &&
          (() => {
            let ht = [
              a.worktreePath,
              ...resolveGitRootCandidates(a.originalCwd),
              ...(a.liveLaunchAnchor
                ? [a.liveLaunchAnchor, ...resolveGitRootCandidates(a.liveLaunchAnchor)]
                : []),
              initialRealCwd,
              ...resolveGitRootCandidates(initialRealCwd),
            ];
            return je.every((kt) => ht.some((wt) => comparePathIdentity(kt, wt) === "same"));
          })(),
        He = i?.telemetryCode ?? "git_worktree_resume_worktree_gone",
        gt = o?.worktreePath ?? `agent ${e}`;
      if (ft) {
        (logFeatureSad(fe, He),
          logForDebugging(
            `Resumed worktree ${gt} ${t}; falling back to ${_} under the session worktree's fences`,
            { level: "error" },
          ));
        return;
      }
      if (i?.terminalOnUncovered === !1)
        throw (
          u(),
          new AgentResumeTransientError(
            `Cannot resume this agent right now: its worktree ${t}, and the fallback directory is not covered by the session's isolation fences. Re-run from a session whose fences cover the agent's directory.`,
          )
        );
      throw (
        logFeatureBad(fe, He),
        u(),
        new AgentResumePermanentlyRefusedError(
          `This agent cannot be resumed: its worktree ${t}, and the fallback directory is not covered by the session's isolation fences.`,
        )
      );
    },
    it = Ye(o?.worktreePath),
    at = Ye(o?.inheritedWorktreePath),
    ee = it ?? at,
    B = ee
      ? await promises.stat(ee).then(
          (t) => (t.isDirectory() ? ee : U("exists but is not a directory")),
          (t) => {
            let i = A(t);
            if (i === "ENOENT" || i === "ENOTDIR") return U("no longer exists");
            throw (
              u(),
              new AgentResumeTransientError(
                `Cannot resume this agent: its worktree could not be examined (${String(i ?? "unknown error")}). Re-run once the directory is accessible.`,
              )
            );
          },
        )
      : void 0;
  if (
    ee === void 0 &&
    !wasAgentWorktreeRemovedCleanly(e) &&
    ((o !== null &&
      o.spawnedWithWorktree === !0 &&
      o.worktreeCleanlyRemoved !== !0 &&
      !(
        o.inheritedWorktreePath !== void 0 &&
        o.parentAgentId !== void 0 &&
        (
          await readAgentMetadata(oo(o.parentAgentId), r.storageV5).catch(
            createAgentMetadataReadFallback("resumeAgentBackground (parent)"),
          )
        )?.worktreeCleanlyRemoved === !0
      )) ||
      wasAgentSpawnedInWorktree(e))
  )
    U("is not recorded for this isolated agent", {
      telemetryCode: "git_worktree_resume_binding_missing",
      terminalOnUncovered: wasAgentSpawnedInWorktree(e),
    });
  let L = B;
  if (B) {
    let t = he(),
      i = await promises.realpath(t).catch(() => t),
      a = await evaluateWorktreePin(B, resolveGitRootCandidates(t), dedupe([i, initialRealCwd, ...resolveGitRootCandidates(initialRealCwd)]), {
        requireWitnessForSelfOwningPins: !0,
        declineSelfOwningPinUnderLiveRoot: !0,
      });
    if (!a.ok) {
      if (
        (u(),
        a.reason !== "unverifiable" && a.reason !== "pin-is-own-launch-tree")
      )
        throw (
          logFeatureBad(fe, "git_worktree_create_root_rejected"),
          logForDebugging(
            `[worktree] refusing to resume parked agent into ${B} (${a.reason}): ${a.message}`,
            { level: "error" },
          ),
          new AgentResumePermanentlyRefusedError(
            `This agent cannot be resumed: its worktree was refused (${a.reason}). ${a.message}`,
          )
        );
      throw (
        logForDebugging(
          `[worktree] could not verify parked agent worktree ${B} this attempt; the resume will retry: ${a.message}`,
        ),
        new AgentResumeTransientError(
          `Cannot resume this agent right now: its worktree could not be verified (${a.reason}). Re-run once git can answer.`,
        )
      );
    }
  }
  if (L) {
    let t = new Date();
    try {
      await promises.utimes(L, t, t);
    } catch (i) {
      let a = A(i);
      if (a === "ENOENT" || a === "ENOTDIR")
        L = U("vanished between verification and the resume");
      else
        throw (
          u(),
          new AgentResumeTransientError(
            `Cannot resume this agent: its worktree could not be touched (${String(a ?? "unknown error")}). Re-run once the directory is accessible.`,
          )
        );
    }
  }
  let ve = o?.cwd && !hasNetworkPathSpelling(o.cwd) ? o.cwd : L,
    Se = r.session.withProject({ cwd: ve ?? getCwd() }),
    b = T?.effort !== void 0 ? { ...D, effort: T.effort } : D,
    j = o?.description ?? "(resumed)",
    te;
  if (N) {
    if (r.renderedSystemPrompt) te = r.renderedSystemPrompt;
    else
      try {
        let t = ie.agent
            ? ie.agentDefinitions.activeAgents.find(
                (_) => _.agentType === ie.agent,
              )
            : void 0,
          i = Array.from(x.additionalWorkingDirectories.keys()),
          a = await buildDefaultSystemPrompt(r.options.tools, r.options.mainLoopModel, i);
        te = getMainThreadSystemPrompt({
          mainThreadAgentDefinition: t,
          toolUseContext: r,
          customSystemPrompt: r.options.customSystemPrompt,
          defaultSystemPrompt: a,
          appendSystemPrompt: r.options.appendSystemPrompt,
          skillsPersistencePrompt: getSkillsPersistencePrompt(r.options.tools),
        });
      } catch (t) {
        throw (
          logFeatureBad(
            "subagent_launch",
            "subagent_resume_fork_prompt_reconstruct_failed",
          ),
          u(),
          t instanceof ResumeAgentStateError ? t : new ResumeAgentStateError(l(t))
        );
      }
    if (!te)
      throw (
        logFeatureBad("subagent_launch", "subagent_resume_fork_prompt_missing"),
        u(),
        new ResumeAgentStateError(
          "Cannot resume fork agent: unable to reconstruct parent system prompt",
        )
      );
  }
  let Oe = getMainLoopModel(r),
    Pe = resolveSubagentModel(
      resolveExploreAgentModel(b, Oe),
      Oe,
      o?.isObserver ? void 0 : N ? "inherit" : o?.model,
      z,
    );
  if (c?.kind === "observer-activity" && o?.isObserver !== !0)
    throw (
      logFeatureBad("subagent_launch", "observer_resume_sidecar_unconfirmed"),
      u(),
      new ResumeAgentStateError(
        `Observer sidecar for ${e} missing or did not confirm isObserver; refusing delivery`,
      )
    );
  let Me = o?.isObserver ? (clampPermissionMode(E, z) ?? z) : void 0,
    Ne = { ...x, mode: Me ?? E ?? o?.spawnMode ?? b.permissionMode ?? z },
    Fe = r.options.tools.filter(isMcpTool),
    Ee = r.getAppState(),
    dt = N
      ? excludeCoordinatorCommsMcpTools(r.options.tools)
      : buildSessionTools(Ne, excludeCoordinatorCommsMcpTools(Ee.mcp.tools.concat(Fe)), {
          skipReplFilter: !0,
          skillTools: Ee.skillTools,
        }),
    lt = o?.isObserver
      ? buildObserverAgentTools(
          resolveAgentTools(b, buildSessionTools(Ne, excludeCoordinatorCommsMcpTools(Fe), { skipReplFilter: !0 }), !0, !1, !1, X)
            .resolvedTools,
        )
      : dt,
    De = c
      ? createUserMessage({ content: formatMessageForOrigin(p, c), origin: c, isMeta: !0 })
      : createUserMessage({
          content: w ? formatMessageForOrigin(p, void 0, { isMeta: !0 }) : p,
          ...(w && { isMeta: !0 }),
        }),
    me = isLocalAgentTask(v) ? v.webFetchSavedFiles : void 0,
    Le = isBuiltInWebFetchAgent(b)
      ? me
        ? { dirs: [...me.dirs], paths: [...me.paths] }
        : createInitialWebFetchSavedFiles()
      : void 0,
    $e = {
      agentDefinition: b,
      promptMessages: k ? I : [...I, De],
      toolUseContext: et,
      canUseTool: R,
      isAsync: !0,
      preserveToolUseResults: !ke(),
      persistedToolResultFiles: Le,
      querySource: formatAgentQuerySource(b.agentType, isBuiltInAgent(b)),
      spawnedBySkill: de,
      ...(T !== void 0 && { spawnedByForkedSkill: !0 }),
      model: o?.isObserver ? void 0 : N ? "inherit" : o?.model,
      onModelRestricted: o?.isObserver
        ? void 0
        : createModelRestrictedSystemMessageHandler(de ?? b.agentType, r.appendSystemMessage),
      override: N ? { systemPrompt: te } : void 0,
      availableTools: lt,
      forkContextMessages: void 0,
      recordedUuids: new Set(I.map((t) => t.uuid)),
      ...((N || o?.isObserver) && { useExactTools: !0 }),
      worktreePath: L,
      worktreeBranch: o?.worktreeBranch,
      cwd: o?.cwd,
      spawnMode: Me ?? o?.spawnMode,
      description: o?.description,
      name: o?.name,
      toolUseId: o?.toolUseId,
      contentReplacementState: nt,
    },
    W = d.get(e);
  if (isLocalAgentTask(W) && W.stoppedByUser && (!F || (W.userStopCount ?? 0) !== q))
    throw (
      u(),
      new AgentStoppedByUserError(
        `Agent ${e} was stopped by the user and won't be resumed. Treat its work as cancelled; only launch a new agent if the user explicitly asks.`,
      )
    );
  if (!w && !k) appendTaskTranscriptMessage(e, isExternalMessageOrigin(c) ? De : createUserMessage({ content: p, origin: c }), d);
  we?.();
  let V = registerBackgroundAgentTask({
    agentId: e,
    ownerAgentId: ze(),
    parentAgentId: o?.parentAgentId,
    parentAbortController: Z ? r.abortController : void 0,
    spawnDepth: X,
    description: j,
    prompt: p,
    model: Pe,
    selectedAgent: b,
    taskRegistry: d,
    toolUseId: r.toolUseId,
    cwd: ve,
    forkedSkillName: T?.skillName,
    ...(c?.kind === "observer-activity" && { isObserver: !0 }),
    sessionScratch: r.session.sessionScratch,
  });
  Je();
  let C = c?.kind === "observer-activity" ? void 0 : getNonMainAgentTaskId(r.agentId, d),
    ct = !isLocalAgentTask(W) || (W.notified && W.quietlyParked !== !0),
    Ce = !1;
  if (C !== void 0) {
    let t = new Set(),
      i = C;
    while (i !== void 0 && !t.has(i)) {
      t.add(i);
      let a = d.get(i);
      if (((i = isLocalAgentTask(a) ? a.ownerAgentId : void 0), i === e)) {
        Ce = !0;
        break;
      }
    }
  }
  if (C !== void 0 && C !== e && ct && !Ce) {
    let t;
    if (
      (d.update(e, (i) => {
        if (i.ownerAgentId === C) return i;
        return ((t = i.ownerAgentId), { ...i, ownerAgentId: C });
      }),
      !ke())
    )
      addKeepaliveReason(C, `agent:${e}`, d);
    if (t !== void 0) notifyAgentReparented(e, t, d);
  }
  let Ie = F && (o?.stoppedByUser === !0 || (isLocalAgentTask(O) && O.stoppedByUser === !0));
  if (Ie || (F && isLocalAgentTask(O) && O.status === "killed")) {
    let t = d.get(e);
    r.messageQueue.enqueuePendingNotification(
      createAgentResumedNotification({
        agentId: e,
        description: j,
        to: resolveNotificationTargetAgentId({
          ownerAgentId: isLocalAgentTask(t) ? t.ownerAgentId : void 0,
          keepaliveReason: `agent:${e}`,
          delivering: !0,
          taskRegistry: d,
        }),
      }),
    );
  }
  if (Ie)
    try {
      if (getUserStopCount(d.get(e)) === q) {
        if (
          (await updateAgentMetadata(oo(e), { stoppedByUser: !1 }, r.storageV5),
          getUserStopCount(d.get(e)) !== q)
        )
          await updateAgentMetadata(oo(e), { stoppedByUser: !0 }, r.storageV5);
      }
    } catch (t) {
      if (Rt(t) || FA(CB(t)))
        logForDebugging(`failed to clear stop marker for ${e}: ${formatErrorWithCode(t)}`, { level: "warn" });
      else logError(t);
    }
  if (G) markTaskNotified(V.agentId, d);
  if (
    (await rearmObserverForResume({
      observedTaskId: e,
      observedDefinition: b,
      observedName: o?.name ?? b.agentType,
      observedMeta: o
        ? {
            observerTaskId: o.observerTaskId,
            armingPermissionMode: o.armingPermissionMode,
          }
        : null,
      toolUseContext: r,
      canUseTool: R,
    }),
    releaseSettledKeepalives(e, d),
    o?.name && r.getAppState().agentNameRegistry.get(o.name) === void 0)
  )
    r.agentLifecycle.registerName(o.name, oo(e));
  let ut = {
      prompt: p,
      resolvedAgentModel: Pe,
      modelsUsed: tt,
      isBuiltInAgent: isBuiltInAgent(b),
      startTime: rt,
      agentType: b.agentType,
      isAsync: !0,
      agentDepth: X,
      source: b.source,
      pluginId: isPluginAgent(b) ? parsePluginIdIgnoringReservedMarketplace(b.plugin) : void 0,
      persistedToolResultFiles: Le,
      spawnedSubagent: isLocalAgentTask(v) ? v.spawnedSubagent : void 0,
    },
    We = {
      agentId: e,
      parentAgentId: r.agentId,
      depth: X,
      parentSessionId: getParentSessionId(),
      agentType: "subagent",
      subagentName: b.agentType,
      displayName: o?.name,
      isAsync: !0,
      isBuiltIn: isBuiltInAgent(b),
      invokingRequestId: H,
      invocationKind: "resume",
      invocationEmitted: !1,
      parentPromptId: se,
      isBackgroundAgent: !0,
      ...getWorkflowRunMetadata(r.agentContext),
    },
    pt = c?.kind === "observer-activity" ? () => {} : d.takeConcurrencySlot(),
    Be = runWithAgentContext(We, () =>
      runWithCwdOrDefault(Se.project.cwd, () =>
        runAsyncAgent({
          taskId: V.agentId,
          abortController: V.abortController,
          makeStream: (t, i, a) =>
            runAgent({
              ...$e,
              session: Se,
              override: {
                ...$e.override,
                agentId: oo(V.agentId),
                agentContext: We,
                abortController: V.abortController,
                replHydration: { kind: "resume" },
              },
              onCacheSafeParams: t,
              onQueryProgress: i,
              onStreamTokenEstimate: a,
            }),
          metadata: ut,
          description: j,
          toolUseContext: r,
          taskRegistry: d,
          agentIdForCleanup: e,
          enableSummarization: p_e() || ((isCoordinatorMode() || N || isForkSubagentEnabled()) && !ke()),
          getWorktreeResult: async () =>
            L
              ? {
                  worktreePath: L,
                  ...(o?.worktreeBranch && {
                    worktreeBranch: o.worktreeBranch,
                  }),
                }
              : {},
          shouldNotifyOwner: Z ? () => !1 : void 0,
          reviewInlineHandoff: oe === "reply" && Z,
          onTerminalSuccess: T
            ? () => {
                let t = T.skillName,
                  i = `:${t}`;
                if (EB().has(i)) return;
                TB(t, t, "", null);
                let a = getSkillVerificationCommand(t);
                if (a)
                  r.applyAttributionOp({
                    kind: "recordVerification",
                    method: a,
                  });
              }
            : void 0,
          onRunSettled: pt,
        }),
      ),
    );
  if ((logFeatureOk("subagent_launch"), Z))
    try {
      await Be;
      let t = d.get(e),
        i = isLocalAgentTask(t) ? t.result : void 0;
      return {
        agentId: e,
        description: j,
        outputFile: getTaskOutputPath(e),
        inlineHandback: {
          content: i?.content ?? [],
          harnessNoteCount: i?.harnessNoteCount,
          harnessTailCount: i?.harnessTailCount,
          harnessSectionHash: i?.harnessSectionHash,
        },
      };
    } catch (t) {
      if (t instanceof Error) Object.defineProperty(t, ge, { value: !0 });
      throw t;
    } finally {
      d.update(e, (t) => ({ ...t, notified: !0, evictAfter: Date.now() + TASK_EVICT_GRACE_MS }));
    }
  return { agentId: e, description: j, outputFile: getTaskOutputPath(e) };
}
export { buildObserverAgentTools, isWebFetchAgentToolUse, isResumedInlineError, ResumeAgentStateError, AgentResumeTransientError, AgentResumePermanentlyRefusedError, AgentStoppedByUserError, AgentResumeInProgressError, AgentStillStoppingError, resumeAgentWithNotification, resumeAgentInline, resumeAgentReply };
