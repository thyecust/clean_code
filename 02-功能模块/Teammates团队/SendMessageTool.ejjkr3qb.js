// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 175 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { oo, parseShortId, ze, Dxe } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Ve, yt, R, l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { AGENT_MESSAGE_TAG, isEssentialTrafficOnly } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { normalizeSingleLineText } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { truncate } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { isDesktopHostSession } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { hasIsolatePeerMachines } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { PERMISSION_MODES } from "../权限系统/chunk-e4pfvp7x.js";
import { neutralizeOpeningTags } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import {
  isAutoClassifierActive,
  sanitizeDisplayName,
  MAX_ADDRESS_LENGTH,
  findLastPeerHopChain,
  getAgentDepth,
  maxSlugLength,
  createRequestId,
  parsePeerAddress,
  validateMessageTarget,
  slugify,
  getTeamLeadAgentId,
  getAddressableTeamMembers,
  isReservedRecipientName,
  MAX_REF_LENGTH,
  parseAgentDisplayName,
  formatAgentDisplayName,
  describeSessionLocation,
  formatCandidateSummary,
  findMemberByName,
  getFeatureValue_CACHED_MAY_BE_STALE,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getAgentId, getAgentName, getTeamName, isTeammate, getTeammateColor, isTeamLead } from "./teammate-context.js";
import { formatUnreachablePeerRefusal, formatCannotReceiveRefusal, isPeerInboundUnconfirmed } from "../Bridge-RemoteControl/chunk-1yq098a7.js";
import { ps, sanitizePlainText } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { matchesToolName, findToolByName, buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { scrubRestoredTranscriptMetadata } from "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import { LIST_AGENTS_TOOL_NAME } from "./list-agents-tool-constants.js";
import {
  isAgentStopPending,
  gracefulShutdown,
  isCustomAgent,
  enqueueCommand,
  degradeRestoredHostContexts,
  isInProcessTeammateTask,
  isHandbackProvenanceEnabled,
  formatSubagentHandbackContent,
  isKnownObserverTask,
  isLocalAgentTask,
  enqueueTaskPendingMessage,
  dropApiInvalidAssistantBlocks,
  BoundedTtlCache,
  findTeammateTaskByAgentId,
  isBridgeEvent,
  runToolUse,
  dropUnresolvedToolUseMessages,
  filterWhitespaceOnlyAssistantMessages,
  filterOrphanedThinkingMessages,
  readAgentMetadata,
  getCurrentSessionPeerName,
  getCurrentSessionOffBoxPeerName,
  getCurrentSessionPeerNameFor,
  getAgentTranscript,
  getParentPromptId,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isCrossSessionMessagingEnabled, CROSS_SESSION_MESSAGING_DISABLED_MESSAGE } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { DEFAULT_PEER_GUARD_LIMITS, isMessageTooLargeError, isSenderPacedError, isRegistryUnreadableRefusal, classifySendFailure, formatStaleSocketHint, formatBusySocketHint, UdsSendRefusedError } from "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import { getCleanMessageSplit, repairSendMessageInput, writeToMailbox, createShutdownRequestMessage, createShutdownApprovedMessage, createShutdownRejectedMessage, isStructuredProtocolMessage, markMessagesAsReadByPredicate } from "./chunk-g6nvp9mm.js";
import { isAgentSwarmsEnabled } from "./agent-swarms-enablement.js";
import { getMaxSubagentSpawnDepth } from "../../01-核心基础设施/共享小工具-未细化/max-subagent-spawn-depth.js";
import { primePeerIdentityOwner, getPeerBridgeIdentity } from "../权限系统/chunk-1y2g140m.js";
import { readTeamFileAsync, updateTeamFile } from "./team-file-store.js";
import { restoreContentReplacementState } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import {
  SELF_TARGET_REASON,
  isOwnMessagingSocket,
  isLikelyOwnMessagingSocket,
  isImpersonatedTarget,
  formatImpersonationMessage,
  formatImpersonationDisplayMessage,
  isOwnSessionId,
  isTeammateContext,
  formatOwnNameDisplayMessage,
  formatMainSessionNotice,
  hasCompleteTargetLookup,
  classifySelfNameMatch,
  formatOwnSessionMessage,
} from "./peer-target-guard.js";
import { resolveSendMessagePin } from "../../01-核心基础设施/共享小工具-未细化/send-message-pins.js";
import { isHarborKiteModeEmitEnabled, classifyPermissionMode } from "../权限系统/cross-session-inbound-gate.js";
import { isResumedInlineError, ResumeAgentStateError, AgentStoppedByUserError, AgentResumeInProgressError, AgentStillStoppingError, resumeAgentReply } from "../工具Task-Agent调度/工具Task-Agent调度.5xpzy7cr.js";
import { RESUMED_AGENT_REPORT_OMITTED_MESSAGE, RESUMED_AGENT_REPORT_FOLLOWS_JSON_MESSAGE, formatResumedAgentResult, parseHandbackDisplayText } from "../../01-核心基础设施/共享小工具-未细化/resumed-agent-handback.js";
import { getPlanApprovalPermissionMode } from "../../01-核心基础设施/共享小工具-未细化/plan-approval-permission-mode.js";
import {
  checkCrossSessionSendPermission,
  pinSendMessageRecipient,
  OTHER_LOCAL_SESSION_LABEL,
  buildSentUnderSessionAddressNote,
  describeRemoteSessionVia,
  buildUnconfirmedDeliveryNote,
  buildLocalSessionIdentityNotes,
  buildConfirmedDeliverySwitchHint,
  buildConfirmedDeliveryNotice,
  buildRemoteSessionReachabilityNotes,
  describeUncheckedSessionScope,
  describePinnedNameClaimedLocally,
  SESSION_LIST_TRUNCATED_NOTE,
  SESSION_LIST_TRUNCATED_LABEL,
  resolveMessageRecipient,
} from "./message-recipient-resolution.js";
import { wakeTeammateTask } from "./teammate-task-messages.js";
import { buildBooleanFromStringSchema, parseStringBoolean } from "../../01-核心基础设施/共享小工具-未细化/boolean-from-string-schema.js";
import { getRemoteSessionCompatId } from "../../01-核心基础设施/共享小工具-未细化/remote-session-compat-id.js";
import { SEND_MESSAGE_TOOL_NAME, SEND_MESSAGE_SUMMARY_MAX_LENGTH } from "../../01-核心基础设施/共享小工具-未细化/send-message-constants.js";
import { AGENT_TOOL_NAME } from "../工具Task-Agent调度/agent-tool-constants.js";
import { MAIN_CONVERSATION_NAME, formatAgentMessage, TEAM_LEAD_AGENT_NAME } from "./chunk-enjekn9t.js";
import { normalizeMcpName } from "../../01-核心基础设施/共享小工具-未细化/mcp-name-normalization.js";
import { s, O, c, $e, Ko, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { countGraphemes, splitGraphemes } from "../../01-核心基础设施/共享小工具-未细化/intl-text-utils.js";
import { isRecord } from "../../01-核心基础设施/共享小工具-未细化/is-record.js";
var Be = /^local_[0-9a-f-]{8,}$/,
  xe = "ccd_session_mgmt",
  Le = "send_message",
  nt = `mcp__${normalizeMcpName(xe)}__${normalizeMcpName(Le)}`,
  Cs = 1000;
function Es(e) {
  let { tools: t, toolAliases: p } = e.options,
    r = t.filter(
      (_) =>
        _.mcpInfo?.serverName === xe &&
        _.mcpInfo.toolName === Le &&
        _.mcpInfo.serverType === "sdk",
    ),
    d = r.length === 1 ? r[0] : void 0;
  if (!d || findToolByName(t, d.name, p) !== d) return;
  return d;
}
class qe {
  promptIndexSeen = -1;
  forwardsSincePrompt = 0;
}
function je(e) {
  let t = Es(e);
  if (!t) return { kind: "unavailable" };
  let p = e.toolState.get(qe),
    r = Dxe();
  if (r !== p.promptIndexSeen)
    ((p.promptIndexSeen = r), (p.forwardsSincePrompt = 0));
  if ((p.forwardsSincePrompt++, p.forwardsSincePrompt > DEFAULT_PEER_GUARD_LIMITS.maxSelfHops))
    return { kind: "loop-paused", forwards: p.forwardsSincePrompt - 1 };
  return { tool: t };
}
async function Fe({
  tool: e,
  sessionId: t,
  message: p,
  context: r,
  canUseTool: d,
  assistantMessage: _,
}) {
  let i = {
      type: "tool_use",
      id: `${r.toolUseId ?? "sendmessage"}_desktop`,
      name: e.name,
      input: { session_id: t, message: p },
      caller: { type: "direct" },
    },
    w = 0,
    q = async (...X) => {
      let se = Date.now();
      try {
        return await d(...X);
      } finally {
        w += Date.now() - se;
      }
    },
    N,
    K = [],
    Y = !1;
  for await (let X of runToolUse(i, _, q, r, () => new Date().toISOString())) {
    if (isBridgeEvent(X)) continue;
    if (X.message.type === "attachment") {
      if (X.message.attachment.type === "hook_deferred_tool") Y = !0;
      else K.push(X.message);
      continue;
    }
    if (X.message.type !== "user") continue;
    let se = X.message.message.content;
    if (!Array.isArray(se)) continue;
    for (let U of se)
      if (U.type === "tool_result" && U.tool_use_id === i.id) N = U;
  }
  let W = w >= Cs;
  if (!N)
    return {
      kind: "refused",
      message: Y
        ? "a hook deferred Claude Desktop's messaging tool, so nothing was sent; send it again when you are ready (a forwarded send cannot be resumed later)."
        : "the send did not run (interrupted).",
      attachments: K,
      deferredByHook: Y,
      blockedWait: W,
    };
  let o = As(N);
  return N.is_error
    ? {
        kind: "refused",
        message: o || "Claude Desktop reported an error.",
        attachments: K,
        deferredByHook: Y,
        blockedWait: W,
      }
    : {
        kind: "sent",
        detail: o,
        attachments: K,
        deferredByHook: Y,
        blockedWait: W,
      };
}
function As(e) {
  let { content: t } = e;
  if (typeof t === "string") return t.trim();
  if (!Array.isArray(t)) return "";
  return t
    .flatMap((p) => (p.type === "text" ? [p.text] : []))
    .join(
      `
`,
    )
    .trim();
}
async function He(e, t) {
  let p = await readAgentMetadata(e, t);
  return p?.taskKind === "in_process_teammate" ? p : null;
}
async function Xe({
  resumableAgentId: e,
  prompt: t,
  senderName: p,
  meta: r,
  fallbackName: d,
  toolUseContext: _,
}) {
  let i = r.name ?? d,
    w = r.teamName ?? getTeamName(_.getAppState().teamContext);
  if (!i || !w)
    throw (
      logFeatureBad("swarm_in_process_resume", "no_team_context"),
      Error("Cannot resume teammate: no team is active in this session")
    );
  if (isReservedRecipientName(i))
    throw (
      logFeatureBad("swarm_in_process_resume", "unclaimable_name"),
      Error(
        "Cannot resume teammate: its recorded name is a reserved recipient or agent-id-shaped name",
      )
    );
  let q,
    N = await getAgentTranscript(e, _.storageV5, { signal: _.abortController.signal }).catch(
      (F) => {
        if (yt(F)) throw F;
        throw (
          logFeatureBad("swarm_in_process_resume", "transcript_load_failed"),
          new R(
            `Cannot resume teammate: ${l(F)}`,
            "Cannot resume teammate: its transcript could not be loaded",
          )
        );
      },
    );
  if (_.abortController.signal.aborted) throw new Ve();
  if (N) (degradeRestoredHostContexts(N.messages), scrubRestoredTranscriptMetadata(N.messages));
  if (!N || N.messages.length === 0) q = "no_transcript";
  let K = N ? filterWhitespaceOnlyAssistantMessages(filterOrphanedThinkingMessages(dropUnresolvedToolUseMessages(dropApiInvalidAssistantBlocks(N.messages, { site: "agent_resume" })))) : [],
    Y = restoreContentReplacementState(_.contentReplacementState, K, N?.contentReplacements ?? []),
    W;
  if (r.customAgentType) {
    let F = _.options.agentDefinitions.activeAgents.find(
      (Z) => Z.agentType === r.customAgentType,
    );
    if (F && isCustomAgent(F)) W = F;
    else
      ((q = "agent_type_unresolved"),
        (W = {
          agentType: r.customAgentType,
          whenToUse: "",
          tools: [],
          getSystemPrompt: () => "",
          source: "projectSettings",
        }));
  }
  if (!(await markMessagesAsReadByPredicate(i, (F) => isStructuredProtocolMessage(F.text), w, _.storageV5)))
    logForDebugging(
      `[resumeInProcessTeammate] stale protocol-frame drop for ${i} did not land; the resumed runner may see stale protocol frames`,
      { level: "warn" },
    );
  let { spawnInProcessTeammate: X } = import.meta.require(
      "./chunk-sjd69zy5.js",
    ),
    { startInProcessTeammate: se } = import.meta.require("./startInProcessTeammate.k24hqy5t.js"),
    U = await X(
      {
        name: i,
        teamName: w,
        prompt: t,
        description: r.description,
        color: r.color,
        planModeRequired: r.planModeRequired ?? !1,
        model: r.model,
        permissionMode:
          r.permissionMode !== void 0 &&
          r.permissionMode !== "bypassPermissions" &&
          PERMISSION_MODES.includes(r.permissionMode)
            ? r.permissionMode
            : void 0,
        resumableAgentId: e,
      },
      _,
    );
  if (!U.ok)
    throw (
      logFeatureBad("swarm_in_process_resume", "spawn_failed"),
      logForDebugging(`[resumeInProcessTeammate] spawn failed: ${U.error}`),
      Error("Failed to respawn in-process teammate")
    );
  if (
    (await updateTeamFile(
      w,
      (F) => {
        let Z = F.members.find((ie) => ie.agentId === U.agentId);
        if (Z) {
          Z.joinedAt = Date.now();
          return;
        }
        F.members.push({
          agentId: U.agentId,
          name: i,
          color: r.color,
          agentType: r.customAgentType,
          planModeRequired: r.planModeRequired,
          joinedAt: Date.now(),
          tmuxPaneId: "in-process",
          cwd: getCwd(),
          subscriptions: [],
          backendType: "in-process",
        });
      },
      void 0,
      _.storageV5,
    ).catch((F) =>
      logForDebugging(
        `[resumeInProcessTeammate] team file re-add failed (ad-hoc team?): ${F}`,
      ),
    ),
    _.agentLifecycle.setTeammate(U.agentId, {
      name: i,
      color: r.color,
      agentType: r.customAgentType,
      tmuxSessionName: "in-process",
      tmuxPaneId: "in-process",
      cwd: getCwd(),
      spawnedAt: Date.now(),
    }),
    se({
      identity: U.identity,
      taskId: U.taskId,
      prompt: t,
      initialFrom: p,
      description: r.description,
      agentDefinition: W,
      model: r.model,
      teammateContext: U.teammateContext,
      toolUseContext: { ..._, messages: [] },
      abortController: U.abortController,
      resumeMessages: K,
      resumeReplacementState: Y,
    }),
    logForDebugging(
      `[resumeInProcessTeammate] Resumed ${U.agentId} with ${K.length} prior messages`,
    ),
    q)
  )
    logFeatureSad("swarm_in_process_resume", q);
  else logFeatureOk("swarm_in_process_resume");
  return {
    agentId: U.agentId,
    taskId: U.taskId,
    resumedMessageCount: K.length,
  };
}
var We = "Send a message to another agent";
function Ge(e) {
  let t = isCrossSessionMessagingEnabled()
      ? `
| \`"worker"\` | Any agent from \`${LIST_AGENTS_TOOL_NAME}\` \u2014 subagent, another local Claude session |
| \`"worker [3fa9c1]"\` | Same, plus its \`[ref]\` \u2014 only when a listing or an error shows one |`
      : "",
    p = "",
    r = isCrossSessionMessagingEnabled()
      ? `

## Cross-session

Use \`${LIST_AGENTS_TOOL_NAME}\` to discover targets. Every row leads with the agent's \`name [ref]\` \u2014 the name IS the address; there is no separate address syntax.

\`\`\`json
{"to": "worker", "message": "check if tests pass over there"}
{"to": "worker [3fa9c1]", "message": "you, specifically"}
\`\`\`

Send the bare name \u2014 a name that exactly matches one live agent or session (on this machine, on another machine, or in the cloud) delivers directly. Append the \` [ref]\` only when the bare name is not enough \u2014 \`${LIST_AGENTS_TOOL_NAME}\` shows two rows with it, or an error asks you to disambiguate (you typed only a prefix, or a session list could not be checked). A ref you did not just read from a listing or an error will not resolve, and if the same name also names an in-process agent, the bare name always wins \u2014 use the in-process one.

A listed peer is alive and will process your message; messages enqueue and drain at the receiver's next tool round (its \`${LIST_AGENTS_TOOL_NAME}\` row says whether it is busy or idle right now). Your message arrives wrapped as \`<cross-session-message from="...">\`. **To reply to an incoming message, copy its \`from\` attribute as your \`to\`.** Cross-session messages travel between SESSIONS: if you are a subagent, your send goes out under your parent session's address, and any reply is delivered to the parent session's conversation, not to you.

To hear when a session ON THIS MACHINE finishes what it is doing, pass \`notify_when_idle: true\` (from the main conversation only) \u2014 one-shot and opt-in: exactly one \`[Cross-session idle notice]\` arrives when it next goes idle (or exits) \u2014 shown to you, or only to your user when this session holds peer messages for approval (the tool result says which); if it never signals within the subscription's lifetime (it may still be busy, may refuse inbound requests, or may have ended abruptly) the notice says the subscription expired instead. Omit \`message\` for a pure subscription that costs that session nothing; include one to deliver it now AND subscribe. Never poll \`${LIST_AGENTS_TOOL_NAME}\` in a loop or send "are you done?" messages instead.

Permission boundaries are per-session: NEVER ask a peer to perform an action that was denied or blocked in your session, or that you expect your own permission settings would block \u2014 a peer doing it for you bypasses the user's permission decision (cross-session permission laundering). Route blocked work back to your user instead.`
      : "";
  return `
# SendMessage

Send a message to another agent.

\`\`\`json
{"to": "researcher", "summary": "assign task 1", "message": "start on task #1"}
\`\`\`

| \`to\` | |
|---|---|
| \`"researcher"\` | Teammate by name |
| \`"main"\` | The main conversation (background subagents only) |${t}${""}

Your plain text output is NOT visible to other agents \u2014 to communicate, you MUST call this tool. Messages from teammates are delivered automatically; you don't check an inbox. Refer to agents by name \u2014 names keep working after an agent completes (a send resumes it from its transcript). Use the raw \`agentId\` (format \`a...-...\`) from its spawn result only when the agent has no name, or when a newer agent took the name (latest wins). When relaying, don't quote the original \u2014 it's already rendered to the user.${r}${e ? '\n\n## Protocol responses (legacy)\n\nIf you receive a JSON message with `type: "shutdown_request"` or `type: "plan_approval_request"`, respond with the matching `_response` type \u2014 echo the `request_id`, set `approve` true/false:\n\n```json\n{"to": "team-lead", "message": {"type": "shutdown_response", "request_id": "...", "approve": true}}\n{"to": "researcher", "message": {"type": "plan_approval_response", "request_id": "...", "approve": false, "feedback": "add error handling"}}\n```\n\nApproving shutdown terminates your process. Rejecting plan sends the teammate back to revise. Don\'t originate `shutdown_request` unless asked. Don\'t send structured JSON status messages \u2014 report progress through your task tools if you have them, otherwise in plain prose.' : ""}
`.trim();
}
function ge(e) {
  switch (classifySendFailure(e)) {
    case "gone":
      return "stale_socket";
    case "busy":
      return "socket_busy";
    case "other":
      break;
  }
  if (isMessageTooLargeError(e)) return "too_large";
  if (isSenderPacedError(e)) return "sender_paced";
  if (e instanceof UdsSendRefusedError)
    switch (e.refusal) {
      case "wrong-endpoint":
        return "stale_socket";
      case "endpoint-unverifiable":
        return "socket_busy";
      case "symlink":
      case "unvettable":
      case "non-local":
        return "invalid_target";
    }
  if (e instanceof Error && e.message.startsWith("Timed out sending"))
    return "timeout";
  return "other";
}
function de({
  route: e,
  startedAt: t,
  errorClass: p,
  degradedClass: r,
  blockedWait: d,
  via: _,
  exactUnique: i,
  previouslyPinned: w,
  searchTruncated: q,
}) {
  let N = {
    route: fromEnum(e),
    duration_ms: Date.now() - t,
    ...(d && { blocked_wait: !0 }),
    ...(_ !== void 0 && { via: fromEnum(_) }),
    ...(i && { exact_unique: !0 }),
    ...(w && { previously_pinned: !0 }),
    ...(q && { search_truncated: !0 }),
  };
  if (p !== void 0) logFeatureBad("send_message_delivery", p, N);
  else if (r !== void 0) logFeatureSad("send_message_delivery", r, N);
  else logFeatureOk("send_message_delivery", N);
}
var Rs = 100,
  ke = maxSlugLength + Rs,
  Os = 2 + MAX_REF_LENGTH + 1,
  us = Math.max(maxSlugLength + Os, MAX_ADDRESS_LENGTH),
  Te = /^[^\n\r]*$/u;
function gs(e) {
  return new RegExp(`^[\\s\\S]{0,${e}}$`, "u");
}
var Ye = gs(ke),
  Ms = gs(us);
class pe extends BoundedTtlCache {}
function Ne(e) {
  return [e.to, e.message];
}
function ue({ toolUseId: e, toolState: t }, p, r) {
  if (!e) return;
  t.get(pe).set(e, Ne(p), r);
}
class hs extends Map {}
function Ke(e) {
  return $e([Re(e), Ds()]);
}
function Re(e) {
  return s().describe(e ?? "Plain text message content");
}
var ys =
    "Plain text message content. The recipient's human sees only the FIRST LINE as a one-line preview until they expand it, so make the first line a " +
    "clear, self-contained sentence saying what this is about \u2014 not a greeting, " +
    "preamble, or bare @-mention.",
  bs = "",
  Ds = createLazyValue(() =>
    Ko("type", [
      c({ type: k("shutdown_request"), reason: s().optional() }),
      c({
        type: k("shutdown_response"),
        request_id: s()
          .min(1, "must be the request id being responded to")
          .regex(Te, "must be a single-line request id")
          .regex(
            Ye,
            `request id longer than any real one (max ${ke} characters)`,
          ),
        approve: buildBooleanFromStringSchema(),
        reason: s().optional(),
      }),
      c({
        type: k("plan_approval_response"),
        request_id: s()
          .min(1, "must be the request id being responded to")
          .regex(Te, "must be a single-line request id")
          .regex(
            Ye,
            `request id longer than any real one (max ${ke} characters)`,
          ),
        approve: buildBooleanFromStringSchema(),
        feedback: s().optional(),
      }),
    ]),
  );
function _s(e) {
  return c({
    to: s()
      .regex(Te, "must be a single-line recipient name or address")
      .regex(
        Ms,
        `recipient longer than any listed name or address (max ${us} characters)`,
      )
      .describe(
        e
          ? `Recipient: a name from ${LIST_AGENTS_TOOL_NAME} (append its " [ref]" only when a listing or an error shows one), a teammate name, "main", or a background agent's agentId`
          : "Recipient: teammate name",
      ),
    summary: s()
      .max(SEND_MESSAGE_SUMMARY_MAX_LENGTH)
      .optional()
      .describe(
        e
          ? `A 5-10 word label for your own transcript row (not transmitted \u2014 the recipient previews the first line of \`message\`). Truncated to ${SEND_MESSAGE_SUMMARY_MAX_LENGTH} characters rather than rejected.`
          : `A 5-10 word summary shown as a one-line preview in the UI. Defaults to the first line of a plain-text message; longer summaries are truncated to ${SEND_MESSAGE_SUMMARY_MAX_LENGTH} characters rather than rejected.`,
      ),
    message: e ? Ke(ys).default(bs) : Ke(),
    ...(e && {
      notify_when_idle: buildBooleanFromStringSchema(O().optional()).describe(
        "Ask a session ON THIS MACHINE to send you ONE notice when it next goes idle (finishes its turn with nothing queued) or exits \u2014 opt-in, one-shot, no polling. With a message: deliver it now AND subscribe. Without a message (omit it): a pure subscription that costs the other session nothing.",
      ),
    }),
  });
}
var ws = createLazyValue(() => _s(!1)),
  Ss = createLazyValue(() => _s(!0)),
  Ps = createLazyValue(() => ws().extend({ message: Re() })),
  Us = createLazyValue(() => Ss().extend({ message: Re(ys).default(bs) }));
function Se() {
  if (isCrossSessionMessagingEnabled()) return isAgentSwarmsEnabled() ? Ss() : Us();
  return isAgentSwarmsEnabled() ? ws() : Ps();
}
function he(e) {
  switch (e.reason) {
    case "requester-refuses-inbound":
      return "permission_denied";
    case "no-inbox":
    case "unreachable-namespace":
    case "peer-unsupported":
      return "not_reachable";
    case "self-target":
      return "invalid_target";
    case "peer-gone":
      return "stale_socket";
    case "send-failed":
    case "send-uncertain":
      return e.error !== void 0 ? ge(e.error) : "other";
    case "cap":
      return "subscription_cap";
  }
}
function Je(e, t, p = {}) {
  if (e.ok) return;
  let r =
    e.reason === "send-uncertain" ||
    e.reason === "requester-refuses-inbound" ||
    e.reason === "cap";
  t("uds", r ? void 0 : he(e), { ...(r && { degradedClass: he(e) }), ...p });
}
function Qe({
  input: e,
  plainMessage: t,
  notify: p,
  refusedForPrincipal: r,
  assistantMessage: d,
  toolUseId: _,
  emit: i,
}) {
  if (t.trim().length > 0) return;
  if (Is(e, d, _))
    return (i("uds", "handler_rewrite"), ne(e) ? (r ? $s : qs) : Oe);
  if (!p) {
    if (r) Ce();
    return (i("uds", r ? "permission_denied" : "empty_message"), xs(r));
  }
  return;
}
function ve(e, t) {
  let p = ne(e),
    r = p && (t.agentId !== void 0 || t.teammateContext !== void 0 || isTeammate());
  return { notify: p && !r, refusedForPrincipal: r };
}
var vs = "message must not be empty";
function Ce() {
  logFeatureSad("cross_session_notify_idle", "subscribe_refused_principal");
}
function Is(e, t, p) {
  if (typeof e.message === "string" && e.message.trim().length > 0) return !1;
  let r = ks(t, p)?.message;
  return (typeof r === "string" && r.trim().length > 0) || ye(e, t, p);
}
function ye(e, t, p) {
  return !ne(e) && parseStringBoolean(ks(t, p)?.notify_when_idle) === !0;
}
function Bs(e, t, p) {
  return ne(e) || ye(e, t, p);
}
function ks(e, t) {
  if (t === void 0 || !Array.isArray(e.message.content)) return;
  let p = e.message.content.find((i) => i.type === "tool_use" && i.id === t);
  if (p === void 0 || p.type !== "tool_use") return;
  let r = p.input;
  if (typeof r !== "object" || r === null) return;
  let d = repairSendMessageInput(r, { applySplit: Ts() }),
    _ = d !== null && isRecord(d.input) ? d.input : r;
  return {
    message: "message" in _ ? _.message : void 0,
    notify_when_idle: "notify_when_idle" in _ ? _.notify_when_idle : void 0,
  };
}
function xs(e) {
  return { data: { success: !1, message: e ? be : vs } };
}
function ne(e) {
  if (!("notify_when_idle" in e)) return !1;
  return parseStringBoolean(e.notify_when_idle) === !0;
}
var fe =
    "notify_when_idle is only supported for Claude sessions on this machine in this release (not teammates, subagents, Remote Control or cloud sessions).",
  Ls = `
The message was delivered, but no idle subscription was made: ${fe}`;
function Ze(e) {
  return isDesktopHostSession() && Be.test(e);
}
var qs = {
    data: {
      success: !1,
      message:
        "A permission handler emptied this message; nothing was sent, and no idle subscription was made (a blanked delivery is never reinterpreted as a pure subscription \u2014 send notify_when_idle without a message if that is what you want).",
    },
  },
  $s = {
    data: {
      success: !1,
      message:
        "A permission handler emptied this message; nothing was sent, and no idle subscription was made.",
    },
  },
  Oe = {
    data: {
      success: !1,
      message:
        "A permission handler rewrote this call so that nothing was left to send or subscribe; nothing was sent.",
    },
  };
function es(e, t) {
  if (typeof e === "string" && e.trim().length > 0) return;
  return (t(), Oe);
}
var js =
    " Your message was NOT delivered; send it again without notify_when_idle if it should still go.",
  be =
    "notify_when_idle is only available from the main conversation of this session (not from a subagent or teammate).",
  Fs = `
The message was delivered, but no idle subscription was made: ${be}`,
  Hs =
    "No idle subscription was made (only the main conversation can subscribe).",
  Xs = `
The message was delivered, but no idle subscription was made: a permission handler removed notify_when_idle from this call.`,
  Ws =
    "No idle subscription was made (a permission handler removed it from the call).";
function ss(e, t, p, r) {
  if (e) return { model: Fs, display: Hs };
  if (ye(t, p, r))
    return (
      logFeatureSad("cross_session_notify_idle", "subscribe_stripped_by_handler"),
      { model: Xs, display: Ws }
    );
  return;
}
function ts(e, t, p, r) {
  if (e)
    return `
Nothing was subscribed either: ${be}`;
  if (ye(t, p, r))
    return `
Nothing was subscribed either: a permission handler removed notify_when_idle from this call.`;
  return ne(t)
    ? `
Nothing was subscribed either (when a message rides along, the idle subscription is only made after that message is delivered).`
    : "";
}
function Vs(e, t) {
  let p = e.teamContext?.teammates;
  if (!p) return;
  for (let r of Object.values(p))
    if ("name" in r && r.name === t) return r.color;
  return;
}
function Ee(e, t) {
  let p = e.agentContext;
  if (p?.agentType === "teammate" && p.agentName)
    return { from: p.agentName, displayName: p.agentName };
  let r = e.getAppState();
  for (let [_, i] of r.agentNameRegistry)
    if (i === t) return { from: _, displayName: _ };
  let d = r.tasks[t];
  if (isInProcessTeammateTask(d))
    return { from: d.identity.agentName, displayName: d.identity.agentName };
  return { from: t, displayName: isLocalAgentTask(d) ? d.agentType : t };
}
var Ie = {
  data: {
    success: !1,
    message:
      "That agent cannot receive messages (it is a background observer, or its status could not be verified).",
  },
};
function Me(e) {
  if (e.agentId) return Ee(e, e.agentId).from;
  return getAgentName() || (isTeammate() ? "teammate" : TEAM_LEAD_AGENT_NAME);
}
async function Gs(e, t, p, r, d, _) {
  let i = r.getAppState(),
    w = getTeamName(i.teamContext);
  if (!w)
    return {
      data: {
        success: !1,
        message: `No agent named '${e}' is currently addressable. Spawn a new one or use the agent ID.`,
      },
      errorClass: "not_reachable",
    };
  let q = e;
  if (e !== TEAM_LEAD_AGENT_NAME || d !== void 0) {
    let o = i.teamContext?.teammates ?? {},
      X =
        d !== void 0 && _ === "team-context" && Object.hasOwn(o, d)
          ? o[d]
          : void 0,
      se = d === void 0 && Object.values(o).some((U) => U.name === e);
    if (X !== void 0) q = X.name;
    else if (d !== void 0 && _ === "team-context")
      return {
        data: {
          success: !1,
          message: `The member this message was resolved to has left team '${w}' \u2014 nothing was sent. Another member may share the same display name '${e}', so a bare re-send could reach someone you did not choose: pick again explicitly with a fresh 'name [ref]', or message the lead.`,
        },
        errorClass: "not_reachable",
      };
    else if (!se) {
      let U = await readTeamFileAsync(w, r.storageV5);
      if (U !== null) {
        let F =
          d !== void 0
            ? getAddressableTeamMembers(U, getTeamLeadAgentId(r.getAppState())).filter((ie) => ie.agentId === d)
            : [];
        if (F.length > 1)
          return {
            data: {
              success: !1,
              message: `The team roster lists the member this message was resolved to more than once \u2014 nothing was sent. Ask the lead to repair team '${w}''s file.`,
            },
            errorClass: "not_reachable",
          };
        let Z = d !== void 0 ? F[0] : findMemberByName(getAddressableTeamMembers(U, getTeamLeadAgentId(r.getAppState())), e);
        if (Z === void 0) {
          if (d !== void 0)
            return {
              data: {
                success: !1,
                message: `The member this message was resolved to has left team '${w}' \u2014 nothing was sent. Another member may share the same display name '${e}', so a bare re-send could reach someone you did not choose: pick again explicitly with a fresh 'name [ref]', or message the lead.`,
              },
              errorClass: "not_reachable",
            };
          return {
            data: {
              success: !1,
              message:
                getAgentDepth(r.agentContext) < getMaxSubagentSpawnDepth()
                  ? `No teammate named '${e}' is currently on team '${w}'. Spawn one with ${AGENT_TOOL_NAME}({name: '${e}'}) \u2014 or message the lead to do so.`
                  : `No teammate named '${e}' is currently on team '${w}'. Message the lead to spawn one.`,
            },
            errorClass: "not_reachable",
          };
        }
        q = Z.name;
      } else if (d !== void 0)
        return {
          data: {
            success: !1,
            message: `Couldn't read the roster of team '${w}' to locate the member this message was resolved to \u2014 nothing was sent. Try again, or message the lead.`,
          },
          errorClass: "not_reachable",
        };
    }
  }
  let N = Me(r),
    K = getTeammateColor(),
    Y = await writeToMailbox(
      q,
      {
        from: N,
        text: t,
        summary: p,
        timestamp: new Date().toISOString(),
        color: K,
      },
      w,
      r.storageV5,
    );
  if (Y === void 0)
    return {
      data: {
        success: !1,
        message: `Failed to write to ${e}'s inbox \u2014 nothing was sent. Try again, or message the lead.`,
      },
      errorClass: "mailbox_write_failed",
    };
  wakeTeammateTask(r.getAppState().tasks, q, w);
  let W = Vs(i, q);
  return {
    data: {
      success: !0,
      message: `Message sent to ${e}'s inbox`,
      msg_id: Y,
      routing: {
        sender: N,
        senderColor: K,
        target: `@${e}`,
        targetColor: W,
        summary: p,
        content: truncate(t, 50),
      },
    },
  };
}
async function as(e, t, p, r, d, _) {
  let i = await writeToMailbox(
    e.identity.agentName,
    {
      from: Me(r),
      text: t,
      summary: p,
      timestamp: new Date().toISOString(),
      color: getTeammateColor(),
    },
    e.identity.teamName,
    r.storageV5,
  );
  if (i === void 0)
    return {
      data: {
        success: !1,
        message: `Teammate "${d}" is running, but writing to its inbox failed \u2014 nothing was queued. Try again.`,
      },
    };
  return (
    e.retryWake?.emit(),
    {
      data: {
        success: !0,
        message: `Teammate "${d}" is already running; queued your message for its next turn.`,
        msg_id: i,
        ..._,
      },
    }
  );
}
function ns(e) {
  if (e instanceof AgentStoppedByUserError) return "not_reachable";
  if (e instanceof AgentStillStoppingError) return "still_stopping";
  if (e instanceof ResumeAgentStateError) return "no_transcript";
  return "resume_failed";
}
function Ae(e) {
  return parseShortId(e) ? truncateToCodeUnits(e, 7) : e;
}
function os(e, t) {
  return {
    message: RESUMED_AGENT_REPORT_OMITTED_MESSAGE,
    inlineHandback: {
      displayName: Ae(e),
      content: t.content,
      harnessNoteCount: t.harnessNoteCount,
      harnessTailCount: t.harnessTailCount,
      harnessSectionHash: t.harnessSectionHash,
    },
  };
}
async function Ys(e, t, p, r) {
  let d = r.getAppState(),
    _ = getTeamName(d.teamContext),
    i = Me(r),
    w = createRequestId("shutdown", t),
    q = createShutdownRequestMessage({ requestId: w, from: i, reason: p });
  if (
    (await writeToMailbox(
      e,
      { from: i, text: jsonStringify(q), timestamp: new Date().toISOString(), color: getTeammateColor() },
      _,
      r.storageV5,
    )) === void 0
  )
    return {
      data: {
        success: !1,
        message: `Failed to write the shutdown request to ${t}'s inbox \u2014 nothing was sent.`,
        request_id: w,
        target: t,
      },
    };
  if (_) wakeTeammateTask(r.getAppState().tasks, e, _);
  return {
    data: {
      success: !0,
      message: `Shutdown request sent to ${t}. Request ID: ${w}`,
      request_id: w,
      target: t,
    },
  };
}
async function zs(e, t) {
  let p = getTeamName(),
    r = getAgentId(),
    d = getAgentName() || "teammate";
  logForDebugging(
    `[SendMessageTool] handleShutdownApproval: teamName=${p}, agentId=${r}, agentName=${d}`,
  );
  let _, i;
  if (p) {
    let Y = await readTeamFileAsync(p, t.storageV5);
    if (Y && r) {
      let W = Y.members.find((o) => o.agentId === r);
      if (W) ((_ = W.tmuxPaneId), (i = W.backendType));
    }
  }
  let w = createShutdownApprovedMessage({ requestId: e, from: d, paneId: _, backendType: i }),
    q = await writeToMailbox(
      TEAM_LEAD_AGENT_NAME,
      { from: d, text: jsonStringify(w), timestamp: new Date().toISOString(), color: getTeammateColor() },
      p,
      t.storageV5,
    ),
    N =
      q === void 0
        ? "The confirmation could not be written to team-lead's inbox."
        : "Sent confirmation to team-lead.",
    K = q === void 0 ? { degradedClass: "mailbox_write_failed" } : void 0;
  if (i === "in-process") {
    if (
      (logForDebugging(
        `[SendMessageTool] In-process teammate ${d} approving shutdown - signaling abort`,
      ),
      r)
    ) {
      let Y = t.getAppState(),
        W = findTeammateTaskByAgentId(r, Y.tasks);
      if (W?.abortController)
        (W.abortController.abort(),
          logForDebugging(
            `[SendMessageTool] Aborted controller for in-process teammate ${d}`,
          ));
      else
        logForDebugging(
          `[SendMessageTool] Warning: Could not find task/abortController for ${d}`,
        );
    }
  } else {
    if (r) {
      let Y = t.getAppState(),
        W = findTeammateTaskByAgentId(r, Y.tasks);
      if (W?.abortController)
        return (
          logForDebugging(
            `[SendMessageTool] Fallback: Found in-process task for ${d} via AppState, aborting`,
          ),
          W.abortController.abort(),
          {
            data: {
              success: !0,
              message: `Shutdown approved (fallback path). Agent ${d} is now exiting.`,
              request_id: e,
            },
            ...K,
          }
        );
    }
    setImmediate(async () => {
      await gracefulShutdown(0, "other");
    });
  }
  return {
    data: {
      success: !0,
      message: `Shutdown approved. ${N} Agent ${d} is now exiting.`,
      request_id: e,
    },
    ...K,
  };
}
async function Ks(e, t, p) {
  let r = getTeamName(),
    d = getAgentName() || "teammate",
    _ = createShutdownRejectedMessage({ requestId: e, from: d, reason: t });
  if (
    (await writeToMailbox(
      TEAM_LEAD_AGENT_NAME,
      { from: d, text: jsonStringify(_), timestamp: new Date().toISOString(), color: getTeammateColor() },
      r,
      p.storageV5,
    )) === void 0
  )
    return {
      data: {
        success: !1,
        message:
          "Failed to write the shutdown rejection to team-lead's inbox \u2014 nothing was sent. Try again.",
        request_id: e,
      },
    };
  return {
    data: {
      success: !0,
      message: `Shutdown rejected. Reason: "${truncate(t, 50)}". Continuing to work.`,
      request_id: e,
    },
  };
}
class De extends Error {
  constructor(e) {
    super(e);
    this.name = "SendMessagePreconditionError";
  }
}
async function Js(e, t, p, r, d) {
  let _ = d.getAppState(),
    i = _.teamContext?.teamName;
  if (!isTeamLead(_.teamContext))
    throw new De(
      "Only the team lead can approve plans. Teammates cannot approve their own or other plans.",
    );
  let w = getPlanApprovalPermissionMode({
      recipientName: e,
      leaderMode: getToolPermissionContext(d).mode,
      proactivityLevel: _.proactivityLevel,
      tasks: _.tasks,
    }),
    q = {
      type: "plan_approval_response",
      requestId: p,
      approved: !0,
      ...(r !== void 0 && { feedback: r }),
      timestamp: new Date().toISOString(),
      permissionMode: w,
    };
  if (
    (await writeToMailbox(
      e,
      { from: TEAM_LEAD_AGENT_NAME, text: jsonStringify(q), timestamp: new Date().toISOString() },
      i,
      d.storageV5,
    )) === void 0
  )
    return {
      data: {
        success: !1,
        message: `Failed to write the plan approval to ${t}'s inbox \u2014 nothing was sent. Try again.`,
        request_id: p,
      },
    };
  return {
    data: {
      success: !0,
      message: `Plan approved for ${t}. They will receive the approval and can proceed with implementation.`,
      request_id: p,
    },
  };
}
async function Qs(e, t, p, r, d) {
  let _ = d.getAppState(),
    i = _.teamContext?.teamName;
  if (!isTeamLead(_.teamContext))
    throw new De(
      "Only the team lead can reject plans. Teammates cannot reject their own or other plans.",
    );
  let w = {
    type: "plan_approval_response",
    requestId: p,
    approved: !1,
    feedback: r,
    timestamp: new Date().toISOString(),
  };
  if (
    (await writeToMailbox(
      e,
      { from: TEAM_LEAD_AGENT_NAME, text: jsonStringify(w), timestamp: new Date().toISOString() },
      i,
      d.storageV5,
    )) === void 0
  )
    return {
      data: {
        success: !1,
        message: `Failed to write the plan rejection to ${t}'s inbox \u2014 nothing was sent. Try again.`,
        request_id: p,
      },
    };
  return {
    data: {
      success: !0,
      message: `Plan rejected for ${t} with feedback: "${truncate(r, 50)}"`,
      request_id: p,
    },
  };
}
var rs =
  "Cross-machine messaging is unavailable: it sends the message through Anthropic servers, which is not allowed on a third-party provider or with nonessential traffic disabled. Messages to sessions on this machine still work.";
function is() {
  return getAPIProvider() === "firstParty" && !isEssentialTrafficOnly();
}
function ds() {
  if (getPeerBridgeIdentity()?.live) return;
  if (a.CLAUDE_CODE_REMOTE === !0)
    return getRemoteSessionCompatId() === void 0 ? "no-container-address" : void 0;
  return "rc-disconnected";
}
function ls(e) {
  return e === "rc-disconnected"
    ? "Remote Control is not connected"
    : "this session has no reply address";
}
function ms(e) {
  return a.CLAUDE_CODE_REMOTE === !0 && !e && getRemoteSessionCompatId() !== void 0
    ? "; note: this session has no name yet, so the receiver can answer only by the address on the message, not by name"
    : "";
}
function Ts() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_deep_feather", !0);
}
var SendMessageTool = buildTool({
  name: SEND_MESSAGE_TOOL_NAME,
  searchHint: "send messages to agent teammates",
  maxResultSizeChars: 1e5,
  userFacingName() {
    return "SendMessage";
  },
  get inputSchema() {
    return Se();
  },
  coerceInput: (e) => repairSendMessageInput(e, { applySplit: Ts() }),
  shouldDefer: !0,
  isReadOnly(e) {
    return typeof e.message === "string";
  },
  backfillObservableInput(e) {
    if ("type" in e) return;
    if (typeof e.to !== "string") return;
    if (getCleanMessageSplit(e) !== void 0) return;
    let t = e.message ?? "";
    if (typeof t === "string")
      ((e.type = "message"), (e.recipient = e.to), (e.content = truncate(t, 50)));
    else if (typeof e.message === "object" && e.message !== null) {
      let p = e.message;
      if (((e.type = p.type), (e.recipient = e.to), p.request_id !== void 0))
        e.request_id = p.request_id;
      if (p.approve !== void 0) e.approve = p.approve;
      let r = p.reason ?? p.feedback;
      if (r !== void 0) e.content = truncate(r, 50);
    }
  },
  toAutoClassifierInput(e) {
    let t = (w, q) => (q ? ` [${w}: ${q}]` : ""),
      p = repairSendMessageInput(e),
      r = p !== null && isRecord(p.input) ? p.input : void 0,
      d = t(
        "summary",
        r === void 0
          ? e.summary
          : typeof r.summary === "string"
            ? r.summary
            : void 0,
      ),
      i =
        (r !== void 0 && typeof r.message === "string" ? r.message : void 0) ??
        e.message ??
        "";
    if (typeof i === "string") {
      if (ne(e))
        return i.trim().length === 0
          ? `notify when idle: ${e.to}${d}`
          : `to ${e.to}: ${i}${d} [notify when idle]`;
      return `to ${e.to}: ${i}${d}`;
    }
    switch (i.type) {
      case "shutdown_request":
        return `shutdown_request to ${e.to}${t("reason", i.reason)}${d}`;
      case "shutdown_response":
        return `shutdown_response ${i.approve ? "approve" : "reject"} ${i.request_id} to ${e.to}${t("reason", i.reason)}${d}`;
      case "plan_approval_response":
        return `plan_approval ${i.approve ? "approve" : "reject"} ${i.request_id} to ${e.to}${t("feedback", i.feedback)}${d}`;
    }
  },
  async checkPermissions(e, t) {
    if (hasIsolatePeerMachines() && !Ze(e.to)) {
      let p = parsePeerAddress(e.to),
        r = p.scheme;
      if (r === "bridge") {
        let d = formatUnreachablePeerRefusal(t.session, p.target, e.to);
        if (d)
          return (
            de({
              route: "bridge",
              startedAt: Date.now(),
              errorClass: "bridge_auth",
              via: "address",
            }),
            {
              behavior: "deny",
              message: ps(d),
              decisionReason: {
                type: "other",
                reason:
                  "target is an elevated-security session unreachable from a cloud session",
              },
            }
          );
        let _ = formatCannotReceiveRefusal(t.session, p.target, e.to);
        if (_)
          return (
            de({
              route: "bridge",
              startedAt: Date.now(),
              errorClass: "recipient_gate_off",
              via: "address",
            }),
            {
              behavior: "deny",
              message: ps(_),
              decisionReason: {
                type: "other",
                reason:
                  "target session reports it cannot receive cross-session messages",
              },
            }
          );
        return (
          ue(t, e, null),
          {
            behavior: "ask",
            message: ps(
              `Send a message to Remote Control session ${e.to}? It reaches the receiving Claude (possibly another machine) via Anthropic's servers as a cross-session message \u2014 marked as from another Claude session, not from its user.`,
            ),
            decisionReason: {
              type: "safetyCheck",
              reason:
                "isolatePeerMachines is enabled \u2014 cross-machine message requires explicit approval",
              classifierApprovable: !1,
              circuitBreaker: "isolatePeerMachines",
            },
          }
        );
      }
      if (r === "other") {
        let d;
        try {
          d = await resolveMessageRecipient(
            t.session,
            e.to,
            e.message,
            t.getAppState(),
            t.storageV5,
            t.credentials,
          );
        } catch (_) {
          return (
            logForDebugging(
              `[SendMessage] permission-phase resolve failed (${normalizeSingleLineText(l(_))}) \u2014 asking`,
              { level: "warn" },
            ),
            ue(t, e, null),
            {
              behavior: "ask",
              message: ps(
                `Send a message to '${e.to}'? Its destination could not be resolved just now, so it is unknown whether this name is a Claude session on another machine (isolatePeerMachines is enabled).`,
              ),
              decisionReason: {
                type: "safetyCheck",
                reason:
                  "isolatePeerMachines is enabled \u2014 cross-machine message requires explicit approval",
                classifierApprovable: !1,
                circuitBreaker: "isolatePeerMachines",
              },
            }
          );
        }
        if (d.kind === "cloud-session") {
          if (isOwnSessionId(d.sessionId))
            return {
              behavior: "deny",
              message: ps(formatOwnSessionMessage(e.to, isTeammateContext(t))),
              decisionReason: { type: "other", reason: SELF_TARGET_REASON },
            };
          let {
            isRemoteControlPeerUnreachableFromHere: _,
            formatUnreachableElevatedRefusal: i,
          } = import.meta.require("../Bridge-RemoteControl/chunk-tyce0p0b.js");
          if (d.via === "remote-control" && _())
            return (
              de({
                route: "bridge",
                startedAt: Date.now(),
                errorClass: "bridge_auth",
                via: "remote_control_name",
              }),
              {
                behavior: "deny",
                message: ps(i(d.displayName)),
                decisionReason: {
                  type: "other",
                  reason:
                    "target is an elevated-security session unreachable from a cloud session",
                },
              }
            );
          let w = formatCannotReceiveRefusal(t.session, d.sessionId, d.displayName);
          if (w)
            return (
              de({
                route: "bridge",
                startedAt: Date.now(),
                errorClass: "recipient_gate_off",
                via: d.via === "cloud" ? "cloud_name" : "remote_control_name",
              }),
              {
                behavior: "deny",
                message: ps(w),
                decisionReason: {
                  type: "other",
                  reason:
                    "target session reports it cannot receive cross-session messages",
                },
              }
            );
          return (
            ue(t, e, d),
            {
              behavior: "ask",
              message: ps(
                d.via === "cloud"
                  ? `Send a message to cloud session '${d.displayName}'? It reaches the receiving Claude (running in the cloud) via Anthropic's servers as a cross-session message \u2014 marked as from another Claude session, not from its user.`
                  : `Send a message to Remote Control session '${d.displayName}'? It reaches the receiving Claude (on another machine) via Anthropic's servers as a cross-session message \u2014 marked as from another Claude session, not from its user.`,
              ),
              decisionReason: {
                type: "safetyCheck",
                reason:
                  "isolatePeerMachines is enabled \u2014 cross-machine message requires explicit approval",
                classifierApprovable: !1,
                circuitBreaker: "isolatePeerMachines",
              },
            }
          );
        }
        if (
          d.kind === "not-found" &&
          (d.cloudUnavailable !== void 0 || d.bridgeUnavailable !== void 0)
        ) {
          ue(t, e, null);
          let _ = [
            d.cloudUnavailable !== void 0
              ? "the cloud session list could not be fetched"
              : void 0,
            d.bridgeUnavailable !== void 0
              ? "the account session list could not be checked"
              : void 0,
          ]
            .filter((i) => i !== void 0)
            .join(" and ");
          return {
            behavior: "ask",
            message: ps(
              `Send a message to '${e.to}'? Just now ${_}, so it is unknown whether this name is a Claude session on another machine (isolatePeerMachines is enabled).`,
            ),
            decisionReason: {
              type: "safetyCheck",
              reason:
                "isolatePeerMachines is enabled \u2014 cross-machine message requires explicit approval",
              classifierApprovable: !1,
              circuitBreaker: "isolatePeerMachines",
            },
          };
        }
        ue(t, e, d);
      }
    }
    if (isAutoClassifierActive(getToolPermissionContext(t).mode))
      return {
        behavior: "passthrough",
        message: "Message to another agent requires classifier review.",
      };
    return { behavior: "allow", updatedInput: e };
  },
  async validateInput(e, t) {
    if (e.to === "*")
      return {
        result: !1,
        message:
          'broadcast (to: "*") is no longer supported \u2014 send a message per recipient',
        errorCode: 9,
      };
    {
      let r = parsePeerAddress(e.to).scheme;
      if ((r === "uds" || r === "bridge") && !isCrossSessionMessagingEnabled())
        return { result: !1, message: CROSS_SESSION_MESSAGING_DISABLED_MESSAGE, errorCode: 9 };
    }
    if (ne(e)) {
      if (typeof e.message !== "string")
        return {
          result: !1,
          message:
            "notify_when_idle cannot ride a structured message \u2014 send plain text, or omit the message for a pure subscription",
          errorCode: 9,
        };
      if (ve(e, t).refusedForPrincipal && e.message.trim().length === 0)
        return { result: !1, message: be, errorCode: 9 };
      let r = parsePeerAddress(e.to).scheme;
      if (r === "bridge" || r === "did")
        return { result: !1, message: fe, errorCode: 9 };
    }
    let p = validateMessageTarget(e.to, LIST_AGENTS_TOOL_NAME);
    if (p !== void 0) return { result: !1, message: p, errorCode: 9 };
    {
      let r = parsePeerAddress(e.to);
      if (r.scheme === "uds" && isLikelyOwnMessagingSocket(r.target))
        return { result: !1, message: formatOwnSessionMessage(e.to, isTeammateContext(t)), errorCode: 9 };
    }
    if (e.to.includes("@"))
      return {
        result: !1,
        message:
          "to must be a bare teammate name \u2014 there is only one team per session",
        errorCode: 9,
      };
    if (
      typeof e.message === "string" &&
      e.message.trim().length === 0 &&
      !ne(e)
    )
      return { result: !1, message: vs, errorCode: 9 };
    if (parsePeerAddress(e.to).scheme === "bridge") {
      if (isOwnSessionId(parsePeerAddress(e.to).target))
        return { result: !1, message: formatOwnSessionMessage(e.to, isTeammateContext(t)), errorCode: 9 };
      if (typeof e.message !== "string")
        return {
          result: !1,
          message:
            "structured messages cannot be sent cross-session \u2014 only plain text",
          errorCode: 9,
        };
      return { result: !0 };
    }
    if (parsePeerAddress(e.to).scheme === "uds" && typeof e.message === "string")
      return { result: !0 };
    if (typeof e.message === "string") {
      if (isStructuredProtocolMessage(e.message))
        return {
          result: !1,
          message:
            'message text must not be a teammate protocol frame (permission/mode/plan/shutdown JSON) \u2014 to respond to a plan or shutdown request, use the structured object form ({"message": {"type": ...}}); otherwise send plain text',
          errorCode: 9,
        };
      try {
        let r = jsonParse(e.message);
        if (
          r !== null &&
          typeof r === "object" &&
          "type" in r &&
          typeof r.type === "string" &&
          [
            "idle_notification",
            "teammate_terminated",
            "task_assignment",
            "task_completed",
            "shutdown_rejected",
          ].includes(r.type)
        )
          return {
            result: !1,
            message:
              "message text must not be a teammate lifecycle/task frame (idle/terminated/task/shutdown JSON) \u2014 send plain text instead",
            errorCode: 9,
          };
      } catch {}
      return { result: !0 };
    }
    if (!isAgentSwarmsEnabled())
      return {
        result: !1,
        message:
          "Structured team-protocol messages are only available with agent teams enabled.",
        errorCode: 9,
      };
    if (parsePeerAddress(e.to).scheme !== "other")
      return {
        result: !1,
        message:
          "structured messages cannot be sent cross-session \u2014 only plain text",
        errorCode: 9,
      };
    if (e.message.type === "shutdown_response" && e.to !== TEAM_LEAD_AGENT_NAME)
      return {
        result: !1,
        message: `shutdown_response must be sent to "${TEAM_LEAD_AGENT_NAME}"`,
        errorCode: 9,
      };
    if (
      e.message.type === "shutdown_response" &&
      e.message.approve &&
      e.message.reason !== void 0
    )
      return {
        result: !1,
        message:
          "reason is only delivered on rejections (approve: false) \u2014 approvals are sent as a silent confirmation with no reason text; omit reason or reject instead",
        errorCode: 9,
      };
    if (
      e.message.type === "shutdown_response" &&
      !e.message.approve &&
      (!e.message.reason || e.message.reason.trim().length === 0)
    )
      return {
        result: !1,
        message: "reason is required when rejecting a shutdown request",
        errorCode: 9,
      };
    return { result: !0 };
  },
  async description() {
    return We;
  },
  async prompt() {
    return Ge(isAgentSwarmsEnabled());
  },
  mapToolResultToToolResultBlockParam(e, t) {
    let p = e;
    if (typeof p !== "object" || p === null || Array.isArray(p))
      throw TypeError("SendMessage output is not an object");
    let {
        display: r,
        inlineHandback: d,
        ..._
      } = { display: void 0, inlineHandback: void 0, ...e },
      i = (w) => jsonStringify({ success: !0, message: w });
    if (d) {
      if (isHandbackProvenanceEnabled()) {
        let w = formatSubagentHandbackContent(
          d.content,
          d.harnessNoteCount,
          d.harnessTailCount,
          d.harnessSectionHash,
        );
        return {
          tool_use_id: t,
          type: "tool_result",
          content: [
            {
              type: "text",
              text: `${i(RESUMED_AGENT_REPORT_FOLLOWS_JSON_MESSAGE)}
${w[0].text}`,
            },
          ],
        };
      }
      return {
        tool_use_id: t,
        type: "tool_result",
        content: [{ type: "text", text: jsonStringify({ ..._, message: formatResumedAgentResult(d) }) }],
      };
    }
    return {
      tool_use_id: t,
      type: "tool_result",
      content: [{ type: "text", text: jsonStringify(_) }],
    };
  },
  async call(e, t, p, r) {
    let d = t.agentId;
    if (d !== void 0 && isAgentStopPending(d))
      throw (
        logFeatureBad("subagent_launch", "send_message_spawner_stop_pending"),
        Error(
          "This agent has been stopped and its stop is still completing; it cannot send messages.",
        )
      );
    let _ = Date.now();
    function i(h, I, D) {
      de({ route: h, startedAt: _, errorClass: I, ...D });
    }
    let w = isHarborKiteModeEmitEnabled() ? classifyPermissionMode(getToolPermissionContext(t)) : void 0;
    if (d !== void 0 && isKnownObserverTask(t.session, d))
      return (
        i("unresolved", "not_reachable"),
        {
          data: {
            success: !1,
            message:
              "Observers report via ObserverReport, not SendMessage. SendMessage is not available from an observer.",
          },
        }
      );
    if (Ze(e.to)) {
      if (!isCrossSessionMessagingEnabled())
        return (
          i("desktop_host", "not_reachable"),
          { data: { success: !1, message: CROSS_SESSION_MESSAGING_DISABLED_MESSAGE } }
        );
      let h = !1;
      if (((h = ne(e)), typeof e.message !== "string"))
        return (
          i("desktop_host", "invalid_target"),
          {
            data: {
              success: !1,
              message: `Not sent: a Claude Desktop session takes a plain-text message, not a structured ${e.message.type}.`,
            },
          }
        );
      if (e.message.trim().length === 0) {
        if (Is(e, r, t.toolUseId))
          return (i("desktop_host", "handler_rewrite"), h ? $s : Oe);
        return (
          i("desktop_host", h ? "not_reachable" : "empty_message"),
          {
            data: {
              success: !1,
              message: h
                ? `Nothing was subscribed: ${fe}`
                : "Not sent: the message is empty.",
            },
          }
        );
      }
      let I = je(t);
      if ("kind" in I)
        switch (I.kind) {
          case "unavailable":
            return (
              i("unresolved", "desktop_session_id"),
              {
                data: {
                  success: !1,
                  message: `No agent named '${e.to}' is reachable. It has the shape of a Claude Desktop session id, but Claude Desktop's session messaging tool is not available in this session, so SendMessage cannot deliver to it.`,
                },
              }
            );
          case "loop-paused":
            return (
              i("desktop_host", void 0, { degradedClass: "hop_loop" }),
              {
                data: {
                  success: !1,
                  message: `Not delivered: this session has already messaged Claude Desktop sessions ${I.forwards} times since your user last typed here, which looks like sessions messaging each other automatically. Paused until your user's next message in this session.`,
                },
              }
            );
        }
      let D = d ? Ee(t, d).from : void 0,
        M = d !== void 0 && D !== void 0 ? formatAgentMessage(D, e.message) : e.message,
        E = buildSentUnderSessionAddressNote(d, D, { oneWay: !1 }),
        S = await Fe({
          tool: I.tool,
          sessionId: e.to,
          message: M,
          context: t,
          canUseTool: p,
          assistantMessage: r,
        }),
        B = S.blockedWait ? { blockedWait: !0 } : void 0,
        P = S.attachments.length > 0 ? S.attachments : void 0;
      switch (S.kind) {
        case "sent":
          return (
            i("desktop_host", void 0, B),
            {
              data: {
                success: !0,
                message: `Forwarded to Claude Desktop's session messaging: ${S.detail || "sent."}${E.message}${h ? Ls : ""}`,
              },
              ...(P && { newMessages: P }),
            }
          );
        case "refused":
          return (
            i("desktop_host", "desktop_refused", B),
            {
              data: {
                success: !1,
                message: `Not delivered to Claude Desktop session ${e.to}: ${S.message}`,
              },
              ...(P && { newMessages: P }),
            }
          );
      }
    }
    let q = d ? Ee(t, d) : void 0,
      N = q?.from;
    if (typeof e.message === "string") {
      let h = parsePeerAddress(e.to),
        I = !1;
      if (h.scheme === "bridge" && t.toolUseId) {
        let M = t.toolState.get(pe);
        ((I = M.take(t.toolUseId, Ne(e)) !== void 0),
          M.dropToolUse(t.toolUseId));
      }
      if ((h.scheme === "bridge" || h.scheme === "uds") && !isCrossSessionMessagingEnabled())
        return { data: { success: !1, message: CROSS_SESSION_MESSAGING_DISABLED_MESSAGE } };
      let D = getCurrentSessionPeerNameFor(h.scheme === "bridge" ? "bridge" : "uds");
      if (h.scheme === "bridge") {
        if (isOwnSessionId(h.target))
          return (
            i("bridge", "invalid_target"),
            {
              data: {
                success: !1,
                message: formatOwnSessionMessage(e.to, isTeammateContext(t)),
                display: formatOwnNameDisplayMessage(e.to),
              },
            }
          );
        if (!is()) return { data: { success: !1, message: rs } };
        let {
            postInterClaudeMessage: M,
            isLikelyStaleBridgeError: E,
            classifyBridgeSendError: S,
          } = import.meta.require("../Bridge-RemoteControl/listBridgePeerSessions.g159fp6a.js"),
          B = formatUnreachablePeerRefusal(t.session, h.target, e.to);
        if (B)
          return (
            i("bridge", "bridge_auth", { via: "address" }),
            { data: { success: !1, message: B } }
          );
        let P = formatCannotReceiveRefusal(t.session, h.target, e.to);
        if (P)
          return (
            i("bridge", "recipient_gate_off", { via: "address" }),
            { data: { success: !1, message: P } }
          );
        let v = await checkCrossSessionSendPermission({
          tool: SendMessageTool,
          input: e,
          context: t,
          canUseTool: p,
          assistantMessage: r,
          permissionPhaseRan: I,
          recipientLabel: `Remote Control session '${e.to}'`,
          parse: (re) => Se().safeParse(re),
        });
        if (!v.proceed)
          return (
            i(
              "bridge",
              v.reason === "denied" ? "permission_denied" : "handler_rewrite",
              { blockedWait: !0, via: "address" },
            ),
            { data: { success: !1, message: v.message } }
          );
        let x = v.input,
          C = typeof x.message === "string" ? x.message : e.message,
          V = es(C, () => i("bridge", "handler_rewrite", { via: "address" }));
        if (V !== void 0) return V;
        let ee = d !== void 0 && N !== void 0 ? formatAgentMessage(N, C) : C,
          j = ds(),
          L = buildSentUnderSessionAddressNote(d, N, { oneWay: j !== void 0 }),
          J = buildUnconfirmedDeliveryNote(isPeerInboundUnconfirmed(t.session, h.target)),
          G = await M(
            h.target,
            ee,
            D,
            void 0,
            findLastPeerHopChain(t.messages),
            w,
            t.credentials,
          ),
          te = x.summary || truncate(C, 50);
        if (G.ok) {
          i("bridge", void 0, {
            via: "address",
            ...(v.asked && { blockedWait: !0 }),
          });
          let re = j
            ? `\u201C${te}\u201D \u2192 ${e.to} (one-way: ${ls(j)}, so the receiver cannot address a reply to this session)`
            : `\u201C${te}\u201D \u2192 ${e.to}${ms(D)}`;
          return {
            data: {
              success: !0,
              message: `${re}${J.message}${L.message}`,
              ...((J.display || L.display) && {
                display: `${re}${J.display}${L.display}`,
              }),
              msg_id: G.msgId,
            },
          };
        }
        i("bridge", S(G.error), {
          via: "address",
          ...(v.asked && { blockedWait: !0 }),
        });
        let ae = E(G.error)
          ? ` \u2014 the peer session may have ended or restarted, so this bridge ID is stale. Call ${LIST_AGENTS_TOOL_NAME} to get the current address.`
          : "";
        return {
          data: {
            success: !1,
            message: `Failed to send to ${e.to}: ${G.error ?? "unknown"}${ae}`,
          },
        };
      }
      if (h.scheme === "uds") {
        if (isLikelyOwnMessagingSocket(h.target))
          return (
            i("uds", "invalid_target"),
            {
              data: {
                success: !1,
                message: formatOwnSessionMessage(e.to, isTeammateContext(t)),
                display: formatOwnNameDisplayMessage(e.to),
              },
            }
          );
        let { sendToUdsSocket: M, ownMessagingSocket: E } = import.meta.require(
            "../跨会话消息(UDS)/chunk-ddtmwhn7.js",
          ),
          { subscribeToPeerIdle: S, idleSubscriptionLines: B } =
            import.meta.require("./subscribeToPeerIdle.tk67nd8x.js"),
          { notify: P, refusedForPrincipal: v } = ve(e, t),
          x = e.message.trim().length > 0,
          C = Qe({
            input: e,
            plainMessage: e.message,
            notify: P,
            refusedForPrincipal: v,
            assistantMessage: r,
            toolUseId: t.toolUseId,
            emit: i,
          });
        if (C !== void 0) return C;
        if (v) Ce();
        let V = d !== void 0 && N !== void 0 ? formatAgentMessage(N, e.message) : e.message,
          ee = buildSentUnderSessionAddressNote(d, N, { oneWay: E() === void 0 });
        try {
          let j = x
              ? await M(h.target, V, t.storageV5, D, void 0, findLastPeerHopChain(t.messages), w)
              : void 0,
            L = P ? await S(h.target, e.to, t.storageV5, w) : void 0;
          if (j)
            i("uds", void 0, { ...(L && !L.ok && { degradedClass: he(L) }) });
          else if (L) Je(L, i);
          let J = e.summary || truncate(e.message, 50),
            G = L ? B(e.to, L, LIST_AGENTS_TOOL_NAME) : void 0,
            te = [
              ...(j ? [`\u201C${J}\u201D \u2192 ${e.to}${ee.message}`] : []),
              ...(G ? [G.model] : []),
            ],
            ae = G ? void 0 : ss(v, e, r, t.toolUseId);
          return {
            data: {
              success: j !== void 0 || L?.ok === !0,
              message: `${te.join(`
`)}${ae?.model ?? ""}`,
              ...((G || ae || ee.display) && {
                display: [
                  ...(j
                    ? [`\u201C${J}\u201D \u2192 ${e.to}${ee.display}`]
                    : []),
                  ...(G ? [G.display] : ae ? [ae.display] : []),
                ].join(`
`),
              }),
              ...(j && { msg_id: j.msgId }),
            },
          };
        } catch (j) {
          i("uds", ge(j));
          let L = classifySendFailure(j),
            J = L === "gone" ? formatStaleSocketHint(LIST_AGENTS_TOOL_NAME) : L === "busy" ? formatBusySocketHint(j) : "";
          return {
            data: {
              success: !1,
              message: `Failed to send to ${e.to}: ${l(j)}${J}${ts(v, e, r, t.toolUseId)}`,
            },
          };
        }
      }
    }
    let K = t.toolState.get(pe),
      Y = !1,
      W;
    if (t.toolUseId) {
      let h = K.take(t.toolUseId, Ne(e));
      ((Y = h !== void 0), (W = h ?? void 0), K.dropToolUse(t.toolUseId));
    }
    let o =
      W ??
      (await resolveMessageRecipient(
        t.session,
        e.to,
        e.message,
        t.getAppState(),
        t.storageV5,
        t.credentials,
      ));
    if ((o.kind === "local-session" || o.kind === "cloud-session") && !isCrossSessionMessagingEnabled())
      return { data: { success: !1, message: CROSS_SESSION_MESSAGING_DISABLED_MESSAGE } };
    if (o.kind === "cloud-session" && isOwnSessionId(o.sessionId))
      return (
        i("unresolved", "invalid_target"),
        { data: { success: !1, message: formatOwnSessionMessage(e.to, isTeammateContext(t)), display: formatOwnNameDisplayMessage(e.to) } }
      );
    if (o.kind === "local-session" && isOwnMessagingSocket(o.sock))
      return (
        i("unresolved", "invalid_target"),
        { data: { success: !1, message: formatOwnSessionMessage(e.to, isTeammateContext(t)), display: formatOwnNameDisplayMessage(e.to) } }
      );
    if (o.kind === "local-session" && isImpersonatedTarget(e.to, o.sock))
      return (
        i("unresolved", void 0, { degradedClass: "claimed_locally" }),
        { data: { success: !1, message: formatImpersonationMessage(e.to), display: formatImpersonationDisplayMessage(e.to) } }
      );
    if (o.kind === "local-session" && isLikelyOwnMessagingSocket(o.sock))
      return (
        i("unresolved", "invalid_target"),
        { data: { success: !1, message: formatOwnSessionMessage(e.to, isTeammateContext(t)), display: formatOwnNameDisplayMessage(e.to) } }
      );
    if (
      Bs(e, r, t.toolUseId) &&
      o.kind !== "local-session" &&
      o.kind !== "ambiguous" &&
      o.kind !== "not-found"
    ) {
      let { idleSelfTargetMessage: h } = import.meta.require(
        "./subscribeToPeerIdle.tk67nd8x.js",
      );
      return (
        i("unresolved", "invalid_target"),
        logFeatureSad(
          "cross_session_notify_idle",
          o.kind === "main"
            ? "subscribe_self_target"
            : "subscribe_refused_target",
        ),
        {
          data: {
            success: !1,
            message: `${o.kind === "main" ? h('"main"') : fe}${typeof e.message !== "string" || e.message.trim().length > 0 ? js : ""}`,
          },
        }
      );
    }
    let X = t.options.tools.some((h) => matchesToolName(h, LIST_AGENTS_TOOL_NAME)),
      se = X ? ` (${LIST_AGENTS_TOOL_NAME} lists them)` : "";
    if (
      o.kind === "agent-live" ||
      o.kind === "agent-stopped" ||
      o.kind === "agent-evicted"
    ) {
      if (isKnownObserverTask(t.session, o.agentId))
        return (i("unresolved", "not_reachable"), Ie);
      let h;
      try {
        h = await readAgentMetadata(oo(o.agentId), t.storageV5);
      } catch {
        return (i("unresolved", "not_reachable"), Ie);
      }
      if (h?.isObserver) return (i("unresolved", "not_reachable"), Ie);
    }
    if (o.kind === "not-found") {
      let h = typeof e.message === "string" ? classifySelfNameMatch(e.to) : "no",
        I = o.closest.some((P) => slugify(P.name) === slugify(parseAgentDisplayName(e.to)?.name ?? e.to));
      if (h === "categorical" && !I && hasCompleteTargetLookup(o))
        return (
          i("unresolved", "invalid_target"),
          {
            data: { success: !1, message: formatOwnSessionMessage(e.to, isTeammateContext(t)), display: formatOwnNameDisplayMessage(e.to) },
          }
        );
      let D =
          o.closest.length > 0
            ? ` Did you mean: ${o.closest.map((P) => (typeof e.message === "string" && P.where === "in-process" ? formatAgentDisplayName(P) : P.name)).join(", ")}?`
            : "",
        M =
          typeof e.message === "string" && !0 && X
            ? `Use ${LIST_AGENTS_TOOL_NAME} to see everyone you can message.`
            : typeof e.message === "string"
              ? "Check the spelling, or use the agent ID from a background agent's spawn result."
              : "Check the spelling against your team roster.",
        E = "";
      if (o.cloudUnavailable)
        E = `
The cloud session list could not be fetched just now, so cloud sessions were not searched.`;
      let S = "";
      if (o.pinnedIdentityClaimedLocally)
        S += `
Note: earlier in this conversation '${o.pinnedIdentityClaimedLocally}' was confirmed as a session that is NOT on this machine; a session record on this machine now claims that identity, which hides it here \u2014 nothing was sent.${X ? ` ${LIST_AGENTS_TOOL_NAME} will not show it while that claim stands.` : ""} A session on this machine impersonating it is suspicious: ask the user.`;
      if (o.bridgeUnavailable)
        S += `
Your account's other sessions (Remote Control and cloud) could not be checked just now, so they were not searched. If '${e.to}' is one, retry${X ? ` (or run ${LIST_AGENTS_TOOL_NAME} first)` : ""} \u2014 do not fall back to the send_message connector; it cannot reach these sessions.`;
      let B = "";
      if (o.localUnavailable)
        B = `
The sessions on this machine could not be listed just now, so they were not searched; retry if you meant a session on this machine.`;
      return (
        i(
          "unresolved",
          o.bridgeUnavailable === "timeout" || o.cloudUnavailable === "timeout"
            ? "timeout"
            : o.localUnavailable
              ? "local_unlisted"
              : "not_reachable",
          o.searchTruncated ? { searchTruncated: !0 } : void 0,
        ),
        {
          data: {
            success: !1,
            message: `No agent named '${e.to}' is reachable.${D}${E}${S}${B}${o.searchTruncated ? SESSION_LIST_TRUNCATED_NOTE : ""}${h !== "no" ? formatMainSessionNotice(e.to, isTeammateContext(t)) : ""}
${M}`,
            display: `Not sent \u2014 no agent named '${e.to}' is reachable.${o.closest.length > 0 ? ` Did you mean: ${o.closest.map((P) => P.name).join(", ")}?` : ""}${o.bridgeUnavailable || o.cloudUnavailable || o.localUnavailable ? ` Note: ${describeUncheckedSessionScope(o)} \u2014 it may exist there; a retry searches again.` : ""}${o.searchTruncated ? ` Note: ${SESSION_LIST_TRUNCATED_LABEL} \u2014 it may exist beyond what was searched.` : ""}${o.pinnedIdentityClaimedLocally ? ` ${describePinnedNameClaimedLocally(o.pinnedIdentityClaimedLocally)} \u2014 that is suspicious if you did not set it up.` : ""}`,
          },
        }
      );
    }
    if (o.kind === "ambiguous") {
      let h = typeof e.message === "string" ? classifySelfNameMatch(e.to) : "no";
      if (h === "categorical" && o.matchedBy === "prefix" && hasCompleteTargetLookup(o))
        return (
          i("unresolved", "invalid_target"),
          {
            data: { success: !1, message: formatOwnSessionMessage(e.to, isTeammateContext(t)), display: formatOwnNameDisplayMessage(e.to) },
          }
        );
      let I = Date.now(),
        D = o.candidates.map((G) => `  ${formatCandidateSummary(G, I)}`).join(`
`),
        M =
          o.total > o.candidates.length
            ? `
  \u2026and ${o.total - o.candidates.length} more${X ? ` \u2014 use ${LIST_AGENTS_TOOL_NAME} to see them all.` : "."}`
            : "",
        E = Boolean(
          o.bridgeUnavailable || o.cloudUnavailable || o.localUnavailable,
        ),
        S = o.searchTruncated ? SESSION_LIST_TRUNCATED_NOTE : "",
        B = o.searchTruncated ? ` (${SESSION_LIST_TRUNCATED_LABEL})` : "",
        P =
          o.total === 1
            ? o.matchedBy === "prefix"
              ? `No agent is named '${e.to}' exactly. Re-send with the ref to confirm you mean:`
              : E
                ? `'${e.to}' matches one session that could be checked, but not every session could be \u2014 re-send with the ref to confirm you mean:`
                : `'${e.to}' needs a one-time confirm before this send. Re-send with the ref to confirm you mean:`
            : o.matchedBy === "prefix"
              ? `'${e.to}' matches ${o.total} agents by prefix. Re-send with the ref of the one you mean:`
              : `${o.total} agents are named '${e.to}'. Re-send with the ref of the one you mean:`,
        v = "";
      if (o.bridgeUnavailable)
        v += `
Your account's other sessions (Remote Control and cloud) could not be checked just now, so this list may be missing one; if you meant one of them, retry${X ? ` (or run ${LIST_AGENTS_TOOL_NAME} first)` : ""}.`;
      if (o.cloudUnavailable)
        v += `
The cloud session list could not be fetched just now, so this list may be missing a cloud session; retry if you meant one.`;
      if (o.localUnavailable)
        v += `
The sessions on this machine could not be listed just now, so this list may be missing one here; retry if you meant a session on this machine.`;
      if (o.pinnedIdentityClaimedLocally)
        v += `
Note: earlier in this conversation '${o.pinnedIdentityClaimedLocally}' was confirmed as a session that is NOT on this machine; a session record on this machine now claims that identity, so nothing was assumed and nothing was sent. ${X ? `${LIST_AGENTS_TOOL_NAME} will not show the other session while that claim stands. ` : ""}A session on this machine claiming that identity, that your user did not set up, is suspicious: ask the user before confirming anyone.`;
      let x =
          o.total === 1 &&
          !o.bridgeUnavailable &&
          !o.cloudUnavailable &&
          !o.localUnavailable &&
          !o.pinnedIdentityClaimedLocally
            ? `
e.g. {"to": "${formatAgentDisplayName(o.candidates[0])}", ...}`
            : "",
        C = o.searchTruncated ? { searchTruncated: !0 } : void 0;
      if (o.bridgeUnavailable === "timeout" || o.cloudUnavailable === "timeout")
        i("unresolved", "timeout", C);
      else if (
        o.bridgeUnavailable === "fetch_failed" ||
        o.cloudUnavailable === "fetch_failed"
      )
        i("unresolved", "not_reachable", C);
      else if (o.localUnavailable) i("unresolved", "local_unlisted", C);
      else if (o.pinnedIdentityClaimedLocally)
        i("unresolved", void 0, { degradedClass: "claimed_locally", ...C });
      else
        i("unresolved", void 0, {
          degradedClass: o.total === 1 ? "confirm_required" : "ambiguous",
          ...C,
        });
      let V = o.candidates[0],
        ee = o.pinnedIdentityClaimedLocally
          ? ` ${describePinnedNameClaimedLocally(o.pinnedIdentityClaimedLocally)} \u2014 ask before confirming anyone.`
          : "",
        j = describeUncheckedSessionScope(o),
        L = o.candidates.map((G) => `'${G.name}' ${describeSessionLocation(G.where)}`).join(", "),
        J = `${o.total === 1 ? (o.matchedBy === "prefix" ? `Not sent \u2014 no agent is named '${e.to}' exactly${E ? ` among the sessions that could be checked (${j})` : ""}; asked Claude to confirm it means '${V.name}'.` : o.pinnedIdentityClaimedLocally ? `Not sent \u2014 '${e.to}' needs a confirm before this send.` : E ? `Not sent yet \u2014 '${e.to}' matches '${V.name}', but ${j}; asked Claude to confirm.` : `Not sent \u2014 '${e.to}' needs a one-time confirm before this send; asked Claude to confirm it means '${V.name}'.`) : o.matchedBy === "prefix" ? `Not sent \u2014 '${e.to}' matches ${o.total} agents by prefix (${L}${o.total > o.candidates.length ? ", \u2026" : ""}); asked Claude to pick one.` : `Not sent \u2014 ${o.total} agents are named '${e.to}' (${L}${o.total > o.candidates.length ? ", \u2026" : ""}); asked Claude to pick one.`}${E && o.total !== 1 ? ` Note: ${j}.` : ""}${B}${ee}`;
      return {
        data: {
          success: !1,
          message: `${P}
${D}${M}${x}${v}${S}${h !== "no" ? formatMainSessionNotice(e.to, isTeammateContext(t)) : ""}`,
          display: J,
        },
      };
    }
    await primePeerIdentityOwner({ refresh: !0, credentials: t.credentials });
    let U = await resolveSendMessagePin({
      session: t.session,
      to: e.to,
      message: e.message,
      resolved: o,
      appState: t.getAppState(),
      agentLifecycle: t.agentLifecycle,
      storageV5: t.storageV5,
      credentials: t.credentials,
    });
    if (U.kind === "rebound") {
      (logFeatureSad("send_message_pin_guard", "rebound"),
        i("unresolved", "not_reachable"));
      let h = `'${U.name}' now resolves to a different agent than it did earlier in this conversation: earlier sends went to [${U.previous.ref}], which this name no longer reaches. Nothing was sent.`,
        I = `Not sent \u2014 '${U.name}' now means a different agent than it did earlier in this conversation; asked Claude to confirm which one it wants.`,
        D = U.previous.id,
        M =
          parseShortId(D) !== null
            ? "If you need the earlier agent and it is still running, address it by its agent ID from its spawn result."
            : `The earlier recipient is ${sessionIdBody(D) !== D ? "a Claude session on another machine (cloud or Remote Control)" : OTHER_LOCAL_SESSION_LABEL}; this name now belongs to an agent in this session.${X ? ` Use ${LIST_AGENTS_TOOL_NAME} if you still need that session.` : ""}`;
      if (U.next === void 0) {
        let E = X
          ? `Use ${LIST_AGENTS_TOOL_NAME} to see everyone you can message.`
          : "Check the spelling, or use the agent ID from a background agent's spawn result.";
        return {
          data: {
            success: !1,
            message: `${h}
${E}`,
            display: I,
          },
        };
      }
      return {
        data: {
          success: !1,
          message: `${h}
It now resolves to:
  ${formatCandidateSummary(U.next, Date.now())}
To message the new agent, re-send with its ref:
e.g. {"to": "${formatAgentDisplayName(U.next)}", ...}
${M}`,
          display: I,
        },
      };
    }
    let F = U.pin ? { pin: U.pin } : void 0;
    if (F) logFeatureOk("send_message_pin_guard");
    if (typeof e.message !== "string") {
      let h = o.kind === "mailbox" ? o.recipientName : e.to,
        I = o.kind === "mailbox" ? (o.displayName ?? o.recipientName) : e.to;
      if (t.agentId) {
        let E = t.getAppState().tasks[t.agentId];
        if (isLocalAgentTask(E) || t.agentContext?.agentType !== "teammate")
          return (
            i("mailbox", "not_reachable"),
            {
              data: {
                success: !1,
                message:
                  "Structured team-protocol messages (shutdown/plan responses and requests) are acts of the session itself and cannot be sent by a background subagent. Send a plain text message instead.",
              },
            }
          );
      }
      let D = h;
      if (
        o.kind === "mailbox" &&
        o.memberAgentId !== void 0 &&
        e.message.type !== "shutdown_response"
      ) {
        let E = t.getAppState(),
          S = E.teamContext?.teammates ?? {};
        if (
          o.memberIdentitySource === "team-context" &&
          Object.hasOwn(S, o.memberAgentId)
        )
          D = S[o.memberAgentId].name;
        else if (o.memberIdentitySource === "team-context")
          return (
            i("mailbox", "not_reachable"),
            {
              data: {
                success: !1,
                message: `The member this message was resolved to has left team '${getTeamName(E.teamContext) ?? ""}' \u2014 nothing was sent. Another member may share the same display name '${I}'. Check the roster, or message the lead.`,
              },
            }
          );
        else {
          let B = getTeamName(E.teamContext);
          if (B) {
            let P = await readTeamFileAsync(B, t.storageV5);
            if (P === null)
              return (
                i("mailbox", "not_reachable"),
                {
                  data: {
                    success: !1,
                    message: `Couldn't read the roster of team '${B}' to locate the member this message was resolved to \u2014 nothing was sent. Try again, or message the lead.`,
                  },
                }
              );
            let v = getAddressableTeamMembers(P, getTeamLeadAgentId(E)).filter((C) => C.agentId === o.memberAgentId);
            if (v.length > 1)
              return (
                i("mailbox", "not_reachable"),
                {
                  data: {
                    success: !1,
                    message: `The team roster lists the member this message was resolved to more than once \u2014 nothing was sent. Ask the lead to repair team '${B}''s file.`,
                  },
                }
              );
            let x = v[0];
            if (x === void 0)
              return (
                i("mailbox", "not_reachable"),
                {
                  data: {
                    success: !1,
                    message: `The member this message was resolved to has left team '${B}' \u2014 nothing was sent. Another member may share the same display name '${I}'. Check the roster, or message the lead.`,
                  },
                }
              );
            D = x.name;
          }
        }
      }
      let M;
      try {
        switch (e.message.type) {
          case "shutdown_request":
            M = await Ys(D, I, e.message.reason, t);
            break;
          case "shutdown_response":
            M = e.message.approve
              ? await zs(e.message.request_id, t)
              : await Ks(e.message.request_id, e.message.reason, t);
            break;
          case "plan_approval_response":
            M = e.message.approve
              ? await Js(D, I, e.message.request_id, e.message.feedback, t)
              : await Qs(
                  D,
                  I,
                  e.message.request_id,
                  e.message.feedback ?? "Plan needs revision",
                  t,
                );
            break;
        }
      } catch (E) {
        throw (i("mailbox", "not_reachable"), E);
      }
      return (
        i(
          "mailbox",
          M.data.success ? void 0 : "mailbox_write_failed",
          M.degradedClass ? { degradedClass: M.degradedClass } : void 0,
        ),
        { data: M.data }
      );
    }
    let Z = d !== void 0 && N !== void 0 ? formatAgentMessage(N, e.message) : e.message,
      ie = q ? sanitizeDisplayName(q.displayName) : "",
      le =
        d !== void 0 && N !== void 0
          ? {
              kind: "peer",
              from: N,
              senderTaskId: d,
              ...(ie && { name: ie }),
              body: neutralizeOpeningTags(AGENT_MESSAGE_TAG, e.message),
            }
          : { kind: "coordinator" };
    switch (o.kind) {
      case "main": {
        if (d === void 0)
          return (
            i("in_process", "not_reachable"),
            {
              data: {
                success: !1,
                message: `You are the main conversation \u2014 "${MAIN_CONVERSATION_NAME}" addresses you. Send to a named agent instead.`,
              },
            }
          );
        return (
          enqueueCommand({
            mode: "prompt",
            agentId: ze(),
            value: Z,
            priority: "next",
            origin: le,
            skipSlashCommands: !0,
            isMeta: !0,
            skipAttachments: !0,
          }),
          i("in_process"),
          {
            data: {
              success: !0,
              message: "Message queued for the main conversation's next turn.",
            },
          }
        );
      }
      case "agent-live":
        return (
          enqueueTaskPendingMessage(o.agentId, Z, t.taskRegistry, { origin: le, isMeta: !0 }),
          i("in_process"),
          {
            data: {
              success: !0,
              message: `Message queued for delivery to ${o.agentName} at its next tool round.`,
              ...F,
            },
          }
        );
      case "agent-stopped-by-user":
        return (
          i("resume", "not_reachable"),
          {
            data: {
              success: !1,
              message: `Agent "${o.agentName}" was stopped by the user and was not resumed. Treat its work as cancelled; only start a new agent for it if the user explicitly asks.`,
            },
          }
        );
      case "agent-stopped":
        try {
          let h = await resumeAgentReply({
              agentId: o.agentId,
              prompt: Z,
              promptOrigin: le,
              toolUseContext: t,
              canUseTool: p,
              invokingRequestId: r?.requestId,
              parentPromptId: getParentPromptId(t.messages, t.agentContext),
            }),
            I = h.inlineHandback !== void 0,
            D = t.getAppState().tasks[o.agentId],
            M = !isLocalAgentTask(D) || !D.ownerAgentId || D.ownerAgentId === ze();
          return (
            i("resume", void 0, I ? { blockedWait: !0 } : void 0),
            {
              data: {
                success: !0,
                ...(h.inlineHandback
                  ? os(o.agentName, h.inlineHandback)
                  : { message: `Resuming agent ${Ae(o.agentName)}` }),
                ...(!I && M && { resumedAgentId: o.agentId }),
                ...F,
              },
            }
          );
        } catch (h) {
          if (h instanceof AgentResumeInProgressError) {
            let I = enqueueTaskPendingMessage(o.agentId, Z, t.taskRegistry, {
              origin: le,
              isMeta: !0,
            });
            return (
              i("in_process", I ? void 0 : "not_reachable"),
              {
                data: {
                  success: I,
                  message: I
                    ? `${o.agentName} is already waking; message queued for its next tool round (not delivered if the agent turns out to have been stopped).`
                    : `${o.agentName} is being resumed by another caller and its task record is gone; the message was not delivered. Retry shortly.`,
                  ...(I && F),
                },
              }
            );
          }
          return (
            i("resume", ns(h), isResumedInlineError(h) ? { blockedWait: !0 } : void 0),
            {
              data: {
                success: !1,
                message:
                  h instanceof AgentStoppedByUserError
                    ? l(h)
                    : h instanceof ResumeAgentStateError
                      ? `Agent "${o.agentName}" is stopped (${o.status}) and could not be resumed: ${l(h)}`
                      : `Agent "${o.agentName}" was resumed but ${h instanceof Error && h.name === "AbortError" ? "was interrupted" : "failed while running"}: ${l(h)}`,
              },
            }
          );
        }
      case "agent-evicted": {
        let h = o.agentId,
          I = t.toolState.get(hs),
          D = I.get(h);
        if (D) {
          let S = await D,
            B = S ? t.getAppState().tasks[S] : void 0;
          if (B && isInProcessTeammateTask(B)) {
            let P = await as(B, e.message, e.summary, t, o.agentName, F);
            return (
              i("mailbox", P.data.success ? void 0 : "mailbox_write_failed", {
                blockedWait: !0,
              }),
              P
            );
          }
        }
        let M = Promise.withResolvers();
        I.set(h, M.promise);
        let E = null;
        try {
          if (((E = await He(h, t.storageV5)), E)) {
            let P = E.name ?? o.agentName,
              v = E.teamName ?? getTeamName(t.getAppState().teamContext);
            for (let C of Object.values(t.getAppState().tasks))
              if (
                isInProcessTeammateTask(C) &&
                C.status === "running" &&
                (C.identity.resumableAgentId === h ||
                  (C.identity.agentName === P && C.identity.teamName === v))
              ) {
                M.resolve(C.id);
                let V = await as(C, e.message, e.summary, t, o.agentName, F);
                return (
                  i(
                    "mailbox",
                    V.data.success ? void 0 : "mailbox_write_failed",
                  ),
                  V
                );
              }
            let x = await Xe({
              resumableAgentId: h,
              prompt: e.message,
              senderName: N,
              meta: E,
              fallbackName: o.agentName,
              toolUseContext: t,
            });
            return (
              M.resolve(x.taskId),
              i("resume"),
              {
                data: {
                  success: !0,
                  message:
                    x.resumedMessageCount > 0
                      ? `Teammate "${o.agentName}" was not running; resumed it as an in-process teammate with ${x.resumedMessageCount} prior messages and your message as its next prompt.`
                      : `Teammate "${o.agentName}" was not running; resumed it as an in-process teammate (no prior transcript) with your message as its next prompt.`,
                  ...F,
                },
              }
            );
          }
          M.resolve(null);
          let S = await resumeAgentReply({
              agentId: h,
              prompt: Z,
              promptOrigin: le,
              toolUseContext: t,
              canUseTool: p,
              invokingRequestId: r?.requestId,
              parentPromptId: getParentPromptId(t.messages, t.agentContext),
            }),
            B = S.inlineHandback !== void 0;
          return (
            i("resume", void 0, B ? { blockedWait: !0 } : void 0),
            {
              data: {
                success: !0,
                ...(S.inlineHandback
                  ? os(o.agentName, S.inlineHandback)
                  : { message: `Resuming agent ${Ae(o.agentName)}` }),
                ...(B ? {} : { resumedAgentId: h }),
                ...F,
              },
            }
          );
        } catch (S) {
          return (
            M.resolve(null),
            i("resume", ns(S), isResumedInlineError(S) ? { blockedWait: !0 } : void 0),
            {
              data: {
                success: !1,
                message:
                  S instanceof AgentStoppedByUserError
                    ? l(S)
                    : E
                      ? `Failed to resume teammate "${o.agentName}": ${l(S)}`
                      : S instanceof ResumeAgentStateError &&
                          S.transcriptMissing &&
                          parseShortId(o.agentName) !== null
                        ? `Agent "${o.agentName}" could not be resumed: ${l(S)}. If you read this id in a message from another Claude Code process (e.g. the lead's subagent, seen from a teammate pane), it never ran in this session \u2014 reply through "${TEAM_LEAD_AGENT_NAME}" or the session that sent it instead of the raw id.`
                        : S instanceof ResumeAgentStateError
                          ? `Agent "${o.agentName}" could not be resumed: ${l(S)}`
                          : `Agent "${o.agentName}" was resumed but ${S instanceof Error && S.name === "AbortError" ? "was interrupted" : "failed while running"}: ${l(S)}`,
              },
            }
          );
        } finally {
          I.delete(h);
        }
      }
      case "local-session": {
        let { sendToUdsSocket: h, ownMessagingSocket: I } = import.meta.require(
            "../跨会话消息(UDS)/chunk-ddtmwhn7.js",
          ),
          D = getCurrentSessionPeerName(),
          { subscribeToPeerIdle: M, idleSubscriptionLines: E } =
            import.meta.require("./subscribeToPeerIdle.tk67nd8x.js"),
          { notify: S, refusedForPrincipal: B } = ve(e, t),
          P = Qe({
            input: e,
            plainMessage: e.message,
            notify: S,
            refusedForPrincipal: B,
            assistantMessage: r,
            toolUseId: t.toolUseId,
            emit: i,
          });
        if (P !== void 0) return P;
        if (B) Ce();
        if (S && e.message.trim().length === 0) {
          let v = await M(o.sock, o.displayName, t.storageV5, w),
            x = v.ok || v.reason === "send-uncertain";
          if (x)
            pinSendMessageRecipient(t.setAppState, o.displayName, { kind: "session", id: o.sock });
          Je(v, i, {
            ...(o.exactUnique && { exactUnique: !0 }),
            ...(o.previouslyPinned && { previouslyPinned: !0 }),
            ...(o.searchTruncated && { searchTruncated: !0 }),
          });
          let C = x ? buildConfirmedDeliverySwitchHint(o, se, "live session", "subscription") : "",
            V = x ? buildConfirmedDeliveryNotice(o, "live session", "subscription") : "",
            { model: ee, display: j } = E(o.displayName, v, LIST_AGENTS_TOOL_NAME),
            L = !v.ok && v.reason === "peer-gone";
          return {
            data: {
              success: v.ok,
              message: L
                ? ee
                : `${ee} (${o.displayName} is ${OTHER_LOCAL_SESSION_LABEL}${buildLocalSessionIdentityNotes(o)})${C}`,
              display: L ? j : `${j} (${OTHER_LOCAL_SESSION_LABEL}${buildLocalSessionIdentityNotes(o)})${V}`,
            },
          };
        }
        try {
          let { msgId: v } = await h(
              o.sock,
              Z,
              t.storageV5,
              D,
              void 0,
              findLastPeerHopChain(t.messages),
              w,
            ),
            x = S ? await M(o.sock, o.displayName, t.storageV5, w) : void 0,
            C = x ? E(o.displayName, x, LIST_AGENTS_TOOL_NAME) : void 0,
            V = C ? void 0 : ss(B, e, r, t.toolUseId),
            ee = C
              ? `
${C.model}`
              : (V?.model ?? "");
          (pinSendMessageRecipient(t.setAppState, o.displayName, { kind: "session", id: o.sock }),
            i("uds", void 0, {
              ...(o.exactUnique && { exactUnique: !0 }),
              ...(o.previouslyPinned && { previouslyPinned: !0 }),
              ...(o.searchTruncated && { searchTruncated: !0 }),
              ...(x && !x.ok && { degradedClass: he(x) }),
            }));
          let j = e.summary || truncate(e.message, 50),
            L = buildSentUnderSessionAddressNote(d, N, { oneWay: I() === void 0 }),
            J = buildLocalSessionIdentityNotes(o),
            G = buildConfirmedDeliverySwitchHint(o, se);
          return {
            data: {
              success: !0,
              message: `\u201C${j}\u201D \u2192 ${o.displayName} (${OTHER_LOCAL_SESSION_LABEL}${J}${L.message})${G}${ee}`,
              display: `\u201C${j}\u201D \u2192 sent to ${o.displayName} \u2014 ${OTHER_LOCAL_SESSION_LABEL}${J}${L.display}${buildConfirmedDeliveryNotice(o)}${
                C
                  ? `
${C.display}`
                  : V
                    ? `
${V.display}`
                    : ""
              }`,
              msg_id: v,
            },
          };
        } catch (v) {
          let x = A(v);
          i("uds", ge(v), {
            ...(o.exactUnique && { exactUnique: !0 }),
            ...(o.previouslyPinned && { previouslyPinned: !0 }),
            ...(o.searchTruncated && { searchTruncated: !0 }),
          });
          let C = classifySendFailure(v),
            V =
              C === "gone"
                ? ` \u2014 that session may have just exited.${X ? ` Call ${LIST_AGENTS_TOOL_NAME} to see who is reachable now.` : ""}`
                : C === "busy"
                  ? isRegistryUnreadableRefusal(v)
                    ? " \u2014 this machine's session registry could not be read just now (a transient local condition). Retry the same name shortly."
                    : " \u2014 the session is alive but momentarily busy. Retry the same name shortly."
                  : isMessageTooLargeError(v) || isSenderPacedError(v)
                    ? `: ${l(v)}`
                    : "";
          return {
            data: {
              success: !1,
              message: `Failed to send to ${o.displayName}${x ? ` (${x})` : ""}${V || "."}${ts(B, e, r, t.toolUseId)}`,
            },
          };
        }
      }
      case "cloud-session": {
        if (!is()) return { data: { success: !1, message: rs } };
        let h = o.via === "cloud" ? "cloud session" : "Remote Control session",
          I = o.via === "cloud" ? "cloud_name" : "remote_control_name",
          {
            postInterClaudeMessage: D,
            isLikelyStaleBridgeError: M,
            classifyBridgeSendError: E,
          } = import.meta.require("../Bridge-RemoteControl/listBridgePeerSessions.g159fp6a.js"),
          {
            isRemoteControlPeerUnreachableFromHere: S,
            formatUnreachableElevatedRefusal: B,
          } = import.meta.require("../Bridge-RemoteControl/chunk-tyce0p0b.js");
        if (o.via === "remote-control" && S())
          return (
            i("bridge", "bridge_auth", { via: I }),
            { data: { success: !1, message: B(o.displayName) } }
          );
        let P = formatCannotReceiveRefusal(t.session, o.sessionId, o.displayName);
        if (P)
          return (
            i("bridge", "recipient_gate_off", { via: I }),
            { data: { success: !1, message: P } }
          );
        let v = await checkCrossSessionSendPermission({
          tool: SendMessageTool,
          input: e,
          context: t,
          canUseTool: p,
          assistantMessage: r,
          permissionPhaseRan: Y,
          recipientLabel: `${h} '${o.displayName}'`,
          parse: (_e) => Se().safeParse(_e),
        });
        if (!v.proceed)
          return (
            i(
              "bridge",
              v.reason === "denied" ? "permission_denied" : "handler_rewrite",
              { blockedWait: !0, via: I },
            ),
            { data: { success: !1, message: v.message } }
          );
        let x = v.input,
          C = typeof x.message === "string" ? x.message : e.message,
          V = es(C, () => i("bridge", "handler_rewrite", { via: I }));
        if (V !== void 0) return V;
        let ee = x === e ? Z : d !== void 0 && N !== void 0 ? formatAgentMessage(N, C) : C,
          j = getCurrentSessionOffBoxPeerName(),
          L = await D(
            o.sessionId,
            ee,
            j,
            void 0,
            findLastPeerHopChain(t.messages),
            w,
            t.credentials,
          ),
          J = x.summary || truncate(C, 50);
        if (
          (i("bridge", L.ok ? void 0 : E(L.error), {
            via: I,
            ...(v.asked && { blockedWait: !0 }),
            ...(o.exactUnique && { exactUnique: !0 }),
            ...(o.previouslyPinned && { previouslyPinned: !0 }),
            ...(o.searchTruncated && { searchTruncated: !0 }),
          }),
          !L.ok)
        ) {
          let _e = M(L.error)
            ? ` \u2014 that ${h} may have ended${o.via === "cloud" ? " or been archived" : " or disconnected"}.${X ? ` Call ${LIST_AGENTS_TOOL_NAME} to see who is reachable now.` : ""}`
            : "";
          return {
            data: {
              success: !1,
              message: `Failed to send to ${o.displayName}: ${L.error ?? "unknown"}${_e}`,
            },
          };
        }
        pinSendMessageRecipient(t.setAppState, o.displayName, { kind: o.refKind, id: o.sessionId });
        let G = buildConfirmedDeliverySwitchHint(o, se, "agent"),
          te = ds(),
          ae = buildRemoteSessionReachabilityNotes(o),
          re = buildSentUnderSessionAddressNote(d, N, { oneWay: o.via === "cloud" || te !== void 0 }),
          Ue = buildUnconfirmedDeliveryNote(
            o.via === "remote-control" &&
              !o.reportsInbound &&
              !o.inboundReportUnavailable,
          ),
          Ns =
            o.via === "cloud"
              ? "; one-way for now: a cloud session cannot message other sessions back yet \u2014 do not ask it to reply here; its response appears in its own transcript at claude.ai/code"
              : te
                ? `; one-way: ${ls(te)}, so the receiver cannot address a reply to this session`
                : ms(j);
        return {
          data: {
            success: !0,
            message: `\u201C${J}\u201D \u2192 ${o.displayName} (${describeRemoteSessionVia(o.via)}${Ue.message}${Ns}${ae}${re.message})${G}`,
            display: `\u201C${J}\u201D \u2192 sent to ${o.displayName} \u2014 ${o.via === "cloud" ? "a cloud session (can't reply yet)" : `a session on another machine via Remote Control${te ? ` (one-way: ${te === "rc-disconnected" ? "Remote Control is not connected here" : "no reply address here"})` : ""}`}${Ue.display}${ae}${re.display}${buildConfirmedDeliveryNotice(o, "agent")}`,
            msg_id: L.msgId,
          },
        };
      }
      case "mailbox": {
        let { data: h, errorClass: I } = await Gs(
          o.recipientName,
          e.message,
          e.summary,
          t,
          o.memberAgentId,
          o.memberIdentitySource,
        );
        return (i("mailbox", h.success ? void 0 : (I ?? "other")), { data: h });
      }
    }
  },
  extractSearchText(e) {
    return parseHandbackDisplayText(e);
  },
  renderToolUseMessage(e) {
    if (
      typeof e.to === "string" &&
      e.to.startsWith("did:") &&
      typeof e.message === "string"
    ) {
      let t = (_) =>
          sanitizePlainText(_)
            .replace(/[\s\u2800]+/g, " ")
            .trim(),
        p = t(e.message),
        r = countGraphemes(p),
        d =
          r > 200
            ? `${splitGraphemes(p).slice(0, 200).join("")}\u2026 [${r} chars total]`
            : p;
      return ps(`${t(e.to)} \u2190 "${d}"`);
    }
    if (typeof e.message !== "object" || e.message === null) return null;
    if (e.message.type === "plan_approval_response")
      return e.message.approve
        ? `approve plan from: ${e.to}`
        : `reject plan from: ${e.to}`;
    return null;
  },
});
export { SendMessageTool };
