// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  emitTaskNotification,
  getFastModeUnavailableReason,
  getFastModeStatus,
  isModelAllowed,
  getMainLoopModel,
  stepDownRestrictedFamilyAliasPick,
  isDeploymentVouchedModel,
  isModelAllowedUnderActiveEnforcement,
  isExemptDefaultResolvingPick,
  getDefaultMainLoopModel,
  getCanonicalName,
  parseUserSpecifiedModel,
  hasLongContextSuffix,
  isAbortTerminalReason,
  sanitizeDisplayName as FT,
  isBgSession,
  isActingAsBgJob,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getDynamicConfig_CACHED_MAY_BE_STALE,
  getGlobalConfig,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { parseShortId, Qs, j, K, ze, he, Rg, bB, kg, m8 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { le, Zt, Io, cr, nt } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { R, ge, l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { describeStorageError, jsonStringify, jsonParse, getFsSurface, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { COMMAND_NAME_TAG, COMMAND_ARGS_TAG, FORK_SOURCE_TAG, TASK_NOTIFICATION_TAG, TASK_ID_TAG, STATUS_TAG, SUMMARY_TAG, logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { GIT_HARDENED_ARGS } from "../Git-Worktree/git-exec-hardening.js";
import { findCanonicalGitRoot } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { writeFileAtomic } from "../../01-核心基础设施/安全文件系统(FS加固)/atomic-file-write.js";
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { isLocalMarketplaceSource, CLAUDE_AI_MARKETPLACE_NAME_PREFIX } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { pathExists } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { isDesktopHostSession, isVsCodeExtensionSession, isClaudecodeEnv } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { sanitizeAnalyticsId } from "../../03-入口与运行时/CLI入口-Commander/startup-profiler.js";
import { getSessionRuntimeState } from "../权限系统/chunk-ynkf3yy4.js";
import { escapeHtmlText, unescapeHtmlText } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { MODEL_ALIASES, isModelAlias, strip1mSuffix, stripLongContextTags, kP, getCatalogIdByProviderId, getCatalogEntryById, getAPIProvider, isFirstPartyAnthropicBaseUrl } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { BRIEF_TOOL_NAME } from "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import { getArtifactEnvironment, ARTIFACT_TOOL_NAME, ARTIFACT_SLUG_RE, parseArtifactUrl, artifactViewerUrlFor } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { provenSameProcessAsync } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { getSessionAnnouncementState } from "../../01-核心基础设施/共享小工具-未细化/session-announcement-state.js";
import { getPluginRegistryFileScope, getPluginsDir, isReservedClaudeAiMarketplaceName, getPluginRegistryState } from "../插件系统/plugin-system-core.js";
import { stripMemoryTags, getMemoryTagStats, collectMemoryCitationMetrics, stripMemoryTagsFromContentBlocks } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import {
  getCommandName,
  dropShadowedSyncedSkills,
  getMemoryCitationTracker,
  getPolicyPluginNames,
  parseForkedSkillLaunches,
  isUsageBasedBilling,
  buildModelOptions,
  uniqBy,
  buildPluginTelemetryFieldsFromId,
  classifyPluginError,
  collectHookHandlers,
  getCommandQueueSnapshot,
  enqueuePendingNotification,
  isValidUtilizationWindow,
  getCurrentLimits,
  getUnifiedRateLimitWindows,
  haveLimitsBeenObserved,
  getActiveLimitGrace,
  sessionEvents,
  turnEvents,
  mergeSkillCommands,
  createAgentMetadataReadFallback,
  buildTaskNotification,
  isCompletedWithKeepalive,
  isBackgroundedSubagentTask,
  parseForkSourceKey,
  pluginModuleLoadNotifier,
  bindTurnAbortController,
  releaseTurnAbortController,
  sessionStartPromise,
  recordModelSwitchIfChanged,
  toRateLimitMirrorInfo,
  createRateLimitEventMessage,
  findNearNameMatches,
  getDeclaredMarketplaces,
  getKnownMarketplaces,
  getKnownMarketplacesOrEmpty,
  addMarketplace,
  loadMarketplace,
  syncDeclaredAutoUpdateToJson,
  getInstalledPlugins,
  getInstalledPluginsViaStorage,
  resolvePluginRenameChain,
  MODEL_SWITCH_STDOUT_PREFIX,
  extractTagContent,
  normalizeMessageBlocks,
  hasToolResultBlock,
  getUserMessageText,
  joinTextBlocks,
  getMessageContentText,
  createSystemInfoMessage,
  isCompactBoundaryMessage,
  upsertMessageByUuid,
  getPluginDisplayName,
  toSingleLineText,
  getTranscriptPathForSession,
  readAgentMetadata,
  canFetchAgentTranscriptsOnDemand,
  loadTranscriptFromFile,
  mergeArtifactCommentMonitorEntries,
  executeMessageDisplayHooks,
  hasHookForEvent,
  bridgeAdvertisedCommands,
  toBridgeSlashCommands,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getAgentTranscriptPath } from "../Teammates团队/transcript-paths.js";
import { SKILL_TOOL_NAME } from "../权限系统/chunk-fjrcf22x.js";
import { matchesToolName } from "../权限系统/chunk-qdy0h5k2.js";
import { isCrossSessionMessagingEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { findLivePeerBySessionId } from "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import { derivePublishContextFrom, mainObservedArtifactVersion, isArtifactReadOnlySurface } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { applyHearthRelayFields } from "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import { SYNTHETIC_MODEL_NAME, MAX_DECLARED_DIALOG_KINDS, isPlainUserMessage } from "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import { isBridgeRateLimitEventEnabled } from "../Bridge-RemoteControl/chunk-9estzwf5.js";
import { LIST_AGENTS_TOOL_NAME } from "../Teammates团队/list-agents-tool-constants.js";
import { computeOneShotTaskFireTime } from "./scheduled-tasks.js";
import { CRON_CREATE_TOOL_NAME, CRON_DELETE_TOOL_NAME, isKairosCronEnabled } from "../Cron-定时任务/chunk-mk3zm4ew.js";
import { MAX_ARTIFACT_WATCHES, MAX_WATCH_HANDOFF_ENTRIES, getArtifactState } from "../Artifact发布-渲染/chunk-rr78st95.js";
import { getSdkHostedBridgeHandle, getReplBridgeHandle } from "../权限系统/chunk-1y2g140m.js";
import { syncLiveInFlightSnapshot } from "./chunk-7wsy8vxb.js";
import { getCronJitterConfig } from "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import { parseArtifactCommentMonitorIntent, readArtifactCommentMonitorRecords, getTornArtifactCommentMonitorStops, applyArtifactCommentMonitorStops } from "../Artifact发布-渲染/artifact-comment-monitor-intent.js";
import { isArtifactCommentsAvailable, resolveLiveSessionHolder, buildHolderDescriptor, describeHolderWithOthers, getHolderTelemetryFields, stripGoneJobHolderFields, isArtifactAutoReactEnabled } from "../Artifact发布-渲染/chunk-p1dkvpxj.js";
import { onArmSettled, slugRepliesWiredHere, maybeSubscribeFrameLive, isSocketHoldingPublishContext } from "../Artifact发布-渲染/chunk-kshc4v5t.js";
import { relinkAdoptedAgentSymlinks } from "./chunk-c7mzes79.js";
import { collectMinimalAmbientContext, buildSystemInitMessage } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { isVerifiedSlackHumanTurn } from "../Bridge-RemoteControl/bridge-inbound-origin.js";
import { uninstallPlugin } from "../插件系统/chunk-q8w2zntw.js";
import { summarizeBackgroundTasks } from "./background-task-inventory.js";
import { resolvePreModelSwitchDecision, formatModelSwitchBlockedNotice, toSingleLineDisplayText } from "../../01-核心基础设施/模型目录-ModelCatalog/model-switch.js";
import { isWebFetchAgentToolUse } from "../工具Task-Agent调度/工具Task-Agent调度.5xpzy7cr.js";
import { getNonOpenedFrameUrlEntries } from "../../01-核心基础设施/共享小工具-未细化/frame-url-prefixes.js";
import { getEffectiveEffortLevel } from "../Bridge-RemoteControl/bridge-effort-sync.js";
import { isUserPresent, addUnattendedReplies, takeUnattendedReplies, buildUnattendedRepliesNotice } from "../../01-核心基础设施/共享小工具-未细化/auto-react-state.js";
import { sanitizeDisplayName, formatModelRestrictedMessage } from "../Teammates团队/chunk-mrfx53ye.js";
import { resolveSubagentTranscriptLocator } from "../../01-核心基础设施/共享小工具-未细化/hover-rest-transcript.js";
import { isOfficialMarketplace } from "../插件系统/chunk-33bdfgmx.js";
import { SEND_MESSAGE_TOOL_NAME } from "../../01-核心基础设施/共享小工具-未细化/send-message-constants.js";
import { AGENT_TOOL_NAME, TASK_TOOL_NAME } from "../工具Task-Agent调度/agent-tool-constants.js";
import { isProcessRunning } from "../../01-核心基础设施/共享小工具-未细化/process-record.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { defineExportGetters } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var Gn = createLazyValue(() =>
    cr(
      nt({
        id: le(),
        title: le().optional(),
        text: le(),
        footer: le().optional(),
        priority: Zt().default(0),
        maxImpressions: Zt().default(3),
        accentBar: Io().default(!0),
        requiresModel: le().optional(),
      }),
    ).default([]),
  ),
  Lt = [];
function Dt() {
  let e = getDynamicConfig_CACHED_MAY_BE_STALE("tengu_startup_announcements", Lt),
    t = Gn().safeParse(e);
  return t.success ? t.data : Lt;
}
function Ut(e) {
  return e.requiresModel === void 0 || isModelAllowed(e.requiresModel);
}
function pickStartupAnnouncement(e) {
  let t = getSessionAnnouncementState();
  if (t.startupAnnouncementPick !== void 0) return t.startupAnnouncementPick;
  let o = getGlobalConfig().announcementImpressions ?? {},
    r = Dt()
      .filter((s) => (o[s.id] ?? 0) < s.maxImpressions && Ut(s))
      .sort((s, d) => d.priority - s.priority)[0];
  if (e && r !== void 0) t.startupAnnouncementPick = r;
  return r;
}
function serializeStartupAnnouncement() {
  let e = Dt()
    .filter(Ut)
    .sort((t, o) => o.priority - t.priority)[0];
  if (e === void 0) return !1;
  return JSON.stringify({
    id: e.id,
    title: e.title,
    text: e.text,
    footer: e.footer,
  });
}
function mergeSyncedSkillsWithCommands(e, t, o) {
  let r = dropShadowedSyncedSkills(e, [...t, ...o]);
  if (t.length === 0) return r;
  let s = new Set(r.map((p) => p.name)),
    d = new Set(r.map(getCommandName)),
    c = uniqBy(t, "name")
      .filter((p) => !s.has(p.name))
      .map((p) => (p.isMcp && d.has(getCommandName(p)) ? { ...p, isHidden: !0 } : p));
  return [...r, ...c];
}
function Bt(e, t) {
  for (let o of e) t.add(o);
}
function Gt(e, t, o) {
  for (let r of e) {
    if (t.has(r)) continue;
    if ((t.add(r), !r.events.has("session.start"))) continue;
    (logForDebugging(`session.start: raised for ${r.name} (loaded later)`),
      Promise.resolve()
        .then(() => sessionEvents({ only: r.name }).session.start({ cwd: getCwd(), ...o }))
        .catch((s) => {
          logForDebugging(`session.start: failed for ${r.name}: ${l(s)}`, { level: "error" });
        }));
  }
}
async function jt({ loaded: e, surface: t, interactive: o }) {
  (await Promise.resolve(e).catch(() => {
    return;
  }),
    logForDebugging(
      `session.start: raised (surface ${t ?? "none"}, ${o ? "interactive" : "not interactive"})`,
    ));
  let r = new WeakSet(getPluginRegistryState().loadedModules);
  pluginModuleLoadNotifier.set((s, d) => (d ? Gt(s, r, { surface: t, interactive: o }) : Bt(s, r)));
  try {
    await sessionEvents().session.start({ cwd: getCwd(), surface: t, interactive: o });
  } catch (s) {
    logForDebugging(`session.start: failed: ${l(s)}`, { level: "error" });
  }
}
function raiseSessionStartOnce(e) {
  let t = sessionStartPromise.get();
  if (t !== void 0) return t;
  let o = jt(e);
  return (sessionStartPromise.set(o), o);
}
import { open as zt } from "fs/promises";
var qn = 8388608,
  Yn = '"artifact-comment-monitor"';
async function getTranscriptFileInfo(e) {
  let t = getTranscriptPathForSession(e),
    o = await Xn(t);
  return o === void 0 ? void 0 : { path: t, size: o };
}
async function Xn(e) {
  try {
    let t = await zt(e, "r");
    try {
      return (await t.stat()).size;
    } finally {
      await t.close();
    }
  } catch {
    return;
  }
}
async function Vt(e) {
  let { path: t, sessionId: o, fromByte: r, baseline: s } = e,
    d = e.maxAppendedBytes ?? qn,
    c;
  try {
    let I = await zt(t, "r");
    try {
      let { size: E } = await I.stat();
      if (E < r || E - r > d) return null;
      let w = r > 0 ? 1 : 0,
        v = Buffer.alloc(E - r + w),
        { bytesRead: T } = await I.read(v, 0, v.length, r - w);
      if (T !== v.length) return null;
      c = v.toString("utf8");
    } finally {
      await I.close();
    }
  } catch {
    return null;
  }
  if (r > 0) {
    if (
      !c.startsWith(`
`)
    )
      return null;
    c = c.slice(1);
  }
  let p = {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: o,
      artifacts: Object.fromEntries(s),
    },
    _ = c.split(`
`);
  if (_.pop() !== "") return null;
  for (let I of _) {
    if (!I.includes(Yn)) continue;
    let E;
    try {
      E = JSON.parse(I);
    } catch {
      return null;
    }
    if (Qn(o, E)) p = mergeArtifactCommentMonitorEntries(p, E);
  }
  return parseArtifactCommentMonitorIntent(p);
}
function Qn(e, t) {
  return (
    typeof t === "object" &&
    t !== null &&
    "type" in t &&
    t.type === "artifact-comment-monitor" &&
    "sessionId" in t &&
    t.sessionId === e
  );
}
function lt(
  e,
  t,
  { backgroundSession: o, liveHolder: r, jobStamped: s = !1, ui: d = "repl" },
) {
  let c = o
    ? "Open this session and ask Claude to watch it again"
    : "Ask Claude to watch it again";
  switch (t) {
    case "auto_replies_disabled":
      return `Artifact comment monitor for ${e} didn't resume: automatic replies are turned off in this session.`;
    case "stop_latched":
      return `Artifact comment monitor for ${e} is still off \u2014 watching this Artifact was stopped earlier in this session. ${c}; automatic replies resume with the next publish after that.`;
    case "stale_handoff":
      return st(e, "this session was in the background too long", o);
    case "comments_unavailable":
      return st(e, "comments aren't available in this session", o);
    case "recorded_stop":
      return `Automatic replies for ${e} are still off \u2014 they were stopped last time. ${c}; replies come back with the next publish after that.`;
    case "record_incomplete":
      return `Automatic replies for ${e} were not resumed: this conversation's saved watch state was incomplete. ${c}; replies come back with the next publish after that.`;
    case "not_editor":
      return `Artifact comment monitor for ${e} didn't resume: only a publisher's earlier decision carries across a resume or a handoff, and this account can't publish to that Artifact, so it cannot reply to its comments automatically from here.`;
    case "holder_unknown":
      return `Artifact comment monitor for ${e} didn't resume its automatic replies: this session couldn't confirm that no other session of this conversation is already replying for it. If no other session is running, ${o ? "open this session and publish the Artifact again" : "publish the Artifact again here"} to turn them back on.`;
    case "arm_in_flight":
      return d === "host"
        ? `Automatic replies for ${e} are still starting up; ask Claude for that artifact's status to see whether they came back.`
        : `Automatic replies for ${e} are still starting up; /tasks will show whether they came back.`;
    case "held_by_live_session":
      return d === "host"
        ? `Artifact comment monitor for ${e} didn't resume its automatic replies here: this conversation is also open in ${qt(r)}, which may already be replying to this artifact's comments. ${Yt(r, s, d)}`
        : `Artifact comment monitor for ${e} didn't resume its automatic replies here: this conversation is also open in ${qt(r)}, which may already be replying to this Artifact's comments. ${Yt(r, s, d)}`;
    case "held_by_job":
      return d === "host"
        ? `Artifact comment monitor for ${e} didn't resume its automatic replies here: they were last turned on from a background agent of this conversation, which keeps them while it runs. If that agent has ended, publish the artifact again here to turn them back on.`
        : `Artifact comment monitor for ${e} didn't resume its automatic replies here: they were last turned on from a background agent of this conversation, which keeps them while it runs (see \`claude agents\`). If that agent has ended, publish the Artifact again here to turn them back on.`;
    case "other_org": {
      let p = o
        ? "open this session and publish it again"
        : "publish it again here";
      return d === "host"
        ? `Artifact comment monitor for ${e} didn't resume: this artifact is in another of your organizations. Sign in to that organization, then ${p} to turn automatic replies back on.`
        : `Artifact comment monitor for ${e} didn't resume: this Artifact is in another of your organizations. Run /login and sign in to that organization, then ${p} to turn automatic replies back on.`;
    }
    case "watch_cap":
    case "watch_cap_reconnect":
      return `Artifact comment monitor for ${e} didn't resume: this session can watch at most ${MAX_ARTIFACT_WATCHES} Artifacts at once. ${o ? "Open this session, ask Claude to stop watching one, then publish the Artifact again" : "Ask Claude to stop watching one, then publish the Artifact again"} to turn automatic replies back on.`;
    default:
      return st(e, "it couldn't restart in this session", o);
  }
}
function qt(e) {
  return e !== void 0 ? describeHolderWithOthers(e) : "another session on this machine";
}
function Yt(e, t, o) {
  let r = e?.others ?? 0,
    s = o === "host" ? "artifact" : "Artifact";
  if (e?.surface === "background") {
    let p = r > 0 ? ` and close the other ${pluralize(r, "session")}` : "";
    return `${o === "host" ? "Stop that agent" : "Stop it with `claude agents`"}${p}, then publish the ${s} again here to turn them back on.`;
  }
  let d = r > 0 ? "Close those sessions" : "Close that session",
    c = r > 0 ? "keep using them there" : "keep using it there";
  return t
    ? `${d}, then publish the ${s} again here to move the replies.`
    : `${d} and resume again here to move the replies, or ${c}.`;
}
function st(e, t, o) {
  return `Artifact comment monitor for ${e} didn't resume: ${t}. ${o ? "Open this session and publish the Artifact again" : "Publish the Artifact again"} to turn automatic replies back on.`;
}
function Qt(e) {
  return {
    countsAsLoss: e.some((t) => t.stale !== !0),
    warnings: e
      .slice(0, MAX_WATCH_HANDOFF_ENTRIES)
      .map((t) => ({
        slug: t.slug,
        reason: t.stale === !0 ? "stale_handoff" : "unavailable",
      })),
  };
}
function Ie(e, t) {
  let o = e.artifactRefs?.[0]?.slug;
  if (o === void 0 || o === t) return null;
  let r = e.artifactReadVersions?.[o];
  if (r === void 0 || r === "") return null;
  for (let [, s] of getNonOpenedFrameUrlEntries(e.frameUrls ?? {})) {
    let d = parseArtifactUrl(s.url);
    if (d !== null && d.slug === o) return { slug: o, url: artifactViewerUrlFor(d), version: r };
  }
  return null;
}
function Re(e) {
  let t = e.slice(0, 2),
    o = e.length - t.length;
  return `Automatic replies were not resumed for ${t.join(", ")}${o > 0 ? ` and ${o} more` : ""}`;
}
function dt(e, t = "unprovable") {
  return t === "watch_cap"
    ? `${Re(e)}: this session can watch at most ${MAX_ARTIFACT_WATCHES} Artifacts at once. Ask Claude to stop watching one, then publish one of these again, to turn its replies back on.`
    : `${Re(e)}. Ask Claude to watch one of these, or publish it again, to turn its replies back on.`;
}
function formatConversationSwitchNotice(e) {
  return `${Re(e)} \u2014 switching conversations inside a session doesn't bring comment monitors back. Publish the Artifact again, or ask Claude to watch it, to turn its replies back on.`;
}
function formatIncompleteWatchStateNotice(e) {
  return `${Re(e)}: this conversation's saved watch state was incomplete. Ask Claude to watch one of these; replies come back with the next publish after that.`;
}
function formatHeldByLiveSessionNotice(e, t, o = "repl") {
  let r = t?.others ?? 0,
    s =
      t !== void 0
        ? `it is also open in ${describeHolderWithOthers(t)}`
        : "another live session of it is running",
    d =
      r > 0
        ? "If one of those sessions holds these monitors, replies continue there, and publishing again here while it does would make two sessions reply"
        : "If that session holds these monitors, replies continue there, and publishing again here while it does would make both sessions reply",
    c = r > 0 ? ` and close the other ${pluralize(r, "session")}` : "",
    p =
      t?.surface === "background"
        ? `stop that agent${o === "host" ? "" : " with `claude agents`"}${c}`
        : r > 0
          ? "close those sessions"
          : "close that session";
  return `${Re(e)} in this conversation \u2014 ${s}. ${d}; ${p} first, then publish the ${o === "host" ? "artifact" : "Artifact"} again here to move them.`;
}
function Jt(e, t) {
  return en(e, t) ?? (t === "unknown" ? "holder_unknown" : "unavailable");
}
function logArtifactLiveSubscribeSad(e, t) {
  let o =
    e === "held_by_live_session"
      ? "resume_held_live"
      : e === "held_by_job"
        ? "resume_held_job"
        : e === "holder_unknown"
          ? "resume_holder_unknown"
          : null;
  if (o === null) return;
  logFeatureSad("artifact_live_subscribe", o, {
    path: fromEnum(t.path),
    probed: t.probed,
    armed_monitor_count: t.monitors,
    job_stamped: t.jobStamped,
    takeover: fromEnum(t.takeover),
    job_holder: fromEnum(t.jobHolder),
    ...(t.surface !== void 0 && { surface: t.surface }),
    holder_count: t.liveHolder !== void 0 ? 1 + t.otherHolders : 0,
    ...(t.liveHolder !== void 0 && getHolderTelemetryFields(t.liveHolder, t.now)),
  });
}
function en(e, t) {
  if (t === "live") return "held_by_live_session";
  return e === "bg" ? "held_by_job" : null;
}
function tn(e, t, o, r = "repl") {
  return t === "live" ? formatHeldByLiveSessionNotice(e, o, r) : dt(e);
}
function getArmedSlugsNotMatching(e, t) {
  return He(e, {}).filter((o) => !t(o));
}
function at(e) {
  if (e.tool === void 0 || e.commentVerbsInSchema !== !0)
    return "comments_unavailable";
  if (e.autoReactEnabled === !1) return "auto_replies_disabled";
  return null;
}
function nn(e) {
  return e === "stop_latched" || e === "recorded_stop" || e === "arm_in_flight"
    ? "notice"
    : "warning";
}
function on(e, t, o) {
  let r = Ie(e, t) ?? rn(e, t, o);
  if (r === null) return null;
  let s = o?.get(r.slug);
  return s?.state === "armed"
    ? {
        slug: r.slug,
        url: r.url,
        ...(s.holder !== void 0 && { holder: s.holder }),
      }
    : null;
}
function He(e, t) {
  return [...e]
    .filter(
      ([o, r]) =>
        r.state === "armed" &&
        r.holder === void 0 &&
        o !== t.targetSlug &&
        o !== t.excludeSlug &&
        !(t.named?.has(o) ?? !1),
    )
    .sort(([, o], [, r]) => r.writtenAtMs - o.writtenAtMs)
    .map(([o]) => o);
}
function rn(e, t, o) {
  if (o === void 0) return null;
  if (t !== void 0 && e.artifactRefs?.[0]?.slug === t) return null;
  let r;
  for (let [s, d] of o)
    if (
      d.state === "armed" &&
      d.holder === void 0 &&
      s !== t &&
      ARTIFACT_SLUG_RE.test(s) &&
      (r === void 0 || d.writtenAtMs > r[1].writtenAtMs)
    )
      r = [s, d];
  return r === void 0
    ? null
    : { slug: r[0], url: artifactViewerUrlFor({ slug: r[0], env: getArtifactEnvironment() }) };
}
function Jn(e) {
  let { slug: t, url: o, record: r } = e;
  (e.arm ?? maybeSubscribeFrameLive)({
    slug: t,
    url: o,
    publishContext: e.publishContext,
    getKnownVer: () => e.getKnownVer(t),
    sessionResume: !0,
    ...(e.seedFromBoot && { seedKnownVerFromBoot: !0 }),
    tool: e.tool,
    commentVerbsInSchema: !0,
    ...(r?.title !== void 0 && { title: r.title }),
    resumedPublishConsent: !0,
    onOpen: () => {},
    onGiveUp: () => e.onCarriedSkip?.(t, "ws_open_error"),
    context: e.context,
  }).then(
    (d) => {
      if (d.outcome === "skipped" && d.reason === "cancelled")
        e.onNotArmed?.(t);
      else if (d.outcome === "skipped") e.onCarriedSkip?.(t, d.reason);
      else if (d.outcome === "armed" && d.degraded === "not_editor")
        e.onCarriedSkip?.(t, "not_editor");
      else if (
        d.outcome === "already_watching" &&
        d.taskId !== void 0 &&
        getArtifactState().live.supervisors.get(t)?.autoReactWiring !== void 0
      );
      else if (d.outcome === "already_watching" && d.taskId === void 0)
        e.onCarriedSkip?.(t, "arm_in_flight");
      else if (d.outcome === "already_watching") e.onNotArmed?.(t);
    },
    () => {
      e.onNotArmed?.(t);
    },
  );
}
function sn(e) {
  let {
      state: t,
      excludeSlug: o,
      getKnownVer: r,
      context: s,
      publishContext: d,
    } = e,
    c = e.arm ?? maybeSubscribeFrameLive,
    p = isSocketHoldingPublishContext(d) ? e.resumedIntent : void 0,
    _ = Ie(t, o),
    I = _ ?? rn(t, o, p),
    E = _ === null && I !== null,
    w = I === null ? void 0 : p?.get(I.slug),
    v = new Set(),
    T = (q) =>
      e.tornStops?.has(q) === !0 ? "record_incomplete" : "recorded_stop",
    k = new Set(),
    C = o === void 0 ? MAX_ARTIFACT_WATCHES : MAX_ARTIFACT_WATCHES - 1,
    L = 0;
  if (e.carried !== void 0 && e.carried.length > 0) {
    let q = getArtifactEnvironment(),
      Y = [];
    for (let F of e.carried.slice(0, MAX_WATCH_HANDOFF_ENTRIES)) {
      let de = artifactViewerUrlFor({ slug: F.slug, env: q });
      if (parseArtifactUrl(de)?.slug !== F.slug) continue;
      if (F.slug === o) continue;
      if (F.stale === !0) {
        if (e.resumedIntent?.get(F.slug)?.state === "stopped")
          (e.onCarriedSkip?.(F.slug, T(F.slug)), k.add(F.slug));
        else if (p?.get(F.slug)?.state !== "armed")
          (e.onCarriedSkip?.(F.slug, "stale_handoff"), k.add(F.slug));
        continue;
      }
      k.add(F.slug);
      let te = at(e);
      if (te !== null) {
        e.onCarriedSkip?.(F.slug, te);
        continue;
      }
      if (v.has(F.slug)) continue;
      if ((v.add(F.slug), Y.length >= C)) {
        e.onCarriedSkip?.(F.slug, "watch_cap");
        continue;
      }
      Y.push({ entry: F, url: de });
    }
    if (((L = Y.length), Y.length > 0))
      e.parkInFlight?.park(Y.map((F) => F.entry));
    for (let { entry: F, url: de } of Y)
      c({
        slug: F.slug,
        url: de,
        publishContext: d,
        getKnownVer: () => r(F.slug),
        ...(e.tool !== void 0 && { tool: e.tool }),
        ...(e.commentVerbsInSchema !== void 0 && {
          commentVerbsInSchema: e.commentVerbsInSchema,
        }),
        ...(F.title !== void 0 && { title: F.title }),
        carriedPublishConsent: !0,
        sessionResume: !0,
        context: s,
      }).then(
        (te) => {
          if ((e.parkInFlight?.release(F.slug), te.outcome === "skipped")) {
            if (te.reason !== "cancelled") e.onCarriedSkip?.(F.slug, te.reason);
          } else if (te.outcome === "armed" && te.degraded === "not_editor")
            e.onCarriedSkip?.(F.slug, "not_editor");
          else e.onCarriedArmed?.(F.slug);
        },
        () => {},
      );
  }
  let B = e.holderProbe ?? "unknown",
    J = B === "live" ? (e.freedSlugs ?? new Set()) : void 0,
    Z = (q) => (J?.has(q) === !0 ? "none" : B),
    ce = en(w?.holder, I !== null ? Z(I.slug) : B),
    O = (q) => {
      if (p === void 0) return;
      for (let ie of e.tornStops ?? [])
        if (
          ie !== I?.slug &&
          ie !== o &&
          !k.has(ie) &&
          p.get(ie)?.state === "stopped"
        )
          e.onCarriedSkip?.(ie, "record_incomplete");
      if (B === "live" && (J === void 0 || J.size === 0)) return;
      let Y = He(p, {
          ...(I !== null && { targetSlug: I.slug }),
          ...(o !== void 0 && { excludeSlug: o }),
          named: k,
        }).filter((ie) => ARTIFACT_SLUG_RE.test(ie) && (J === void 0 || J.has(ie))),
        F = (B === "none" || J !== void 0) && at(e) === null ? e.tool : void 0,
        de = F !== void 0 ? Math.max(0, C - L - (q ? 1 : 0)) : 0,
        te = Y.slice(0, de);
      if (Y.length > te.length)
        e.onRecordedNotResumed?.(
          Y.slice(te.length),
          F !== void 0 ? "watch_cap" : "unprovable",
        );
      if (F !== void 0)
        for (let ie of te)
          re(F, ie, artifactViewerUrlFor({ slug: ie, env: getArtifactEnvironment() }), p.get(ie), r(ie) === void 0);
    };
  if (I === null || v.has(I.slug)) {
    O(!1);
    return;
  }
  if (w?.state === "stopped") {
    if (!k.has(I.slug)) e.onCarriedSkip?.(I.slug, T(I.slug));
    O(!1);
    return;
  }
  let W = !1;
  if (w?.state === "armed" && k.has(I.slug));
  else if (w?.state === "armed" && ce !== null) e.onCarriedSkip?.(I.slug, ce);
  else if (w?.state === "armed")
    if (B === "unknown") e.onCarriedSkip?.(I.slug, "holder_unknown");
    else {
      let q = at(e);
      if (q !== null) e.onCarriedSkip?.(I.slug, q);
      else W = !0;
    }
  function re(q, Y, F, de, te) {
    Jn({
      slug: Y,
      url: F,
      record: de,
      seedFromBoot: te,
      tool: q,
      context: s,
      publishContext: d,
      getKnownVer: r,
      ...(e.onCarriedSkip !== void 0 && { onCarriedSkip: e.onCarriedSkip }),
      ...(e.onNotArmed !== void 0 && { onNotArmed: e.onNotArmed }),
      arm: c,
    });
  }
  if (L >= C) {
    if (W) e.onCarriedSkip?.(I.slug, "watch_cap");
    O(!1);
    return;
  }
  if (W && e.tool !== void 0) re(e.tool, I.slug, I.url, w, E);
  else
    c({
      slug: I.slug,
      url: I.url,
      publishContext: d,
      getKnownVer: () => r(I.slug),
      sessionResume: !0,
      ...(E && { seedKnownVerFromBoot: !0 }),
      context: s,
    }).catch(() => {});
  O(!0);
}
function runArtifactLiveRearmPrelude(e, t, o) {
  try {
    Zn(e, t, o);
  } catch (r) {
    (logForDebugging(`[frame-live] resume re-arm prelude failed: ${l(r)}`, {
      level: "error",
    }),
      logError(r));
  }
}
function Zn(e, t, o) {
  let { initialMessages: r, startupWatchSlug: s, storageV5: d } = e,
    { emit: c } = t,
    p = t.carried,
    _ = fromEnum(t.publishContext === "bg_session" ? "bg_session" : t.ui),
    I = "unknown",
    E = !1,
    w,
    v = [],
    T = !1,
    k,
    C = "not_attempted",
    L = (V) => (w !== void 0 ? buildHolderDescriptor(w, v.length, V) : void 0),
    B = 0,
    J = new Set(),
    Z = new Set(),
    ce = !1,
    O = !1,
    W = new Map(),
    re = !1,
    q = !1,
    Y = [],
    F = new Map(),
    de = (V, D, X, U) => {
      if (
        O ||
        ce ||
        (V !== "held_by_live_session" &&
          V !== "held_by_job" &&
          V !== "holder_unknown")
      )
        return;
      ((O = !0),
        logArtifactLiveSubscribeSad(V, {
          path: D,
          probed: E,
          liveHolder: w,
          otherHolders: v.length,
          monitors: Math.max(1, B),
          jobStamped:
            X !== void 0 ? J.has(X) || F.has(X) : J.size > 0 || F.size > 0,
          jobHolder: X !== void 0 ? (F.get(X) ?? "none") : "none",
          takeover: C,
          surface: _,
          now: U,
        }));
    },
    te = (V, D = new Set()) => {
      let X = countMatching([...Z], (se) => !D.has(se)),
        U = [...J].filter((se) => !D.has(se));
      if (I !== "none" && X > 0)
        de(
          I === "live" ? "held_by_live_session" : "holder_unknown",
          V,
          void 0,
          Date.now(),
        );
      else if (U.length > 0) de("held_by_job", V, U[0], Date.now());
    },
    ie = (V, D, X) => {
      let U = W.get(V);
      if (re && U !== void 0 && (U !== "held_by_live_session" || X === U))
        return;
      W.set(V, X);
      let se = Date.now();
      de(X, "rearm", V, se);
      let ye = takeUnattendedReplies(V);
      (X === "held_by_live_session" && q
        ? (ke) => {
            Y.push({ slug: V, messages: ke });
          }
        : c)([
        ...(ye > 0 ? [buildUnattendedRepliesNotice(ye, { where: ` on ${D}`, stop: "" })] : []),
        createSystemInfoMessage(
          lt(D, X, {
            backgroundSession: isBgSession(),
            ui: t.ui,
            liveHolder: L(se),
            jobStamped: J.has(V),
          }),
          nn(X),
        ),
      ]);
    },
    Oe = (V) => {
      let D = Qt(V);
      if (D.countsAsLoss)
        logFeatureSad("artifact_live_subscribe", "carried_consent_dropped", { surface: _ });
      let X = getArtifactEnvironment();
      for (let U of D.warnings) {
        let se = artifactViewerUrlFor({ slug: U.slug, env: X });
        if (parseArtifactUrl(se)?.slug !== U.slug) continue;
        ie(U.slug, se, U.reason);
      }
    },
    Ye = (o?.readRecords ?? readArtifactCommentMonitorRecords)({
      ...(s !== void 0 && { excludeSlug: s }),
      ...(d !== void 0 && { storageV5: d }),
    }),
    me = K(),
    $e = (V) => {
      q = !1;
      let D = Y.splice(0);
      if (K() !== me) return;
      let X = D.flatMap((U) => U.messages.slice(0, -1));
      if (X.length > 0) c(X);
      for (let U of D) {
        if (V === "drop" || slugRepliesWiredHere(U.slug)) continue;
        if (V === "say") c(U.messages.slice(-1));
        else ie(U.slug, artifactViewerUrlFor({ slug: U.slug, env: getArtifactEnvironment() }), V);
      }
    },
    Ae = () => $e("say");
  if ((!r || r.length === 0) && Ye.size === 0) return;
  if (p === void 0 && Ye.size === 0 && Ie(t.readFrameState(), s) === null)
    return;
  let ue = isActingAsBgJob() ? void 0 : Ye,
    Mt = () => {
      let V = [...(ue ?? new Map()).entries()].filter(
        ([, D]) => D.state === "armed",
      );
      ((B = V.length),
        (J = new Set(V.filter(([, D]) => D.holder === "bg").map(([D]) => D))),
        (Z = new Set(V.filter(([, D]) => D.holder !== "bg").map(([D]) => D))));
    };
  Mt();
  let Xe = () => on(t.readFrameState(), s, ue),
    vt = (V = []) => {
      let D = Xe(),
        X = new Set(V.map((fe) => fe.slug)),
        U = [];
      if (D !== null && !X.has(D.slug)) {
        let fe = Jt(D.holder, I),
          ke = Date.now();
        (de(fe, "cannot_run", D.slug, ke),
          U.push(
            lt(D.url, fe, {
              backgroundSession: isBgSession(),
              ui: t.ui,
              liveHolder: L(ke),
              jobStamped: D.holder === "bg",
            }),
          ));
      }
      let se = getArtifactEnvironment(),
        ye =
          ue === void 0
            ? []
            : He(ue, {
                ...(D !== null && { targetSlug: D.slug }),
                ...(s !== void 0 && { excludeSlug: s }),
                named: X,
              }).map((fe) => artifactViewerUrlFor({ slug: fe, env: se }));
      if (ye.length > 0) te("cannot_run");
      if (U.length > 0 || ye.length > 0)
        c([
          ...U.map((fe) => createSystemInfoMessage(fe, "warning")),
          ...(ye.length > 0
            ? [createSystemInfoMessage(tn(ye, I, L(Date.now()), t.ui), "notice")]
            : []),
        ]);
    },
    Qe = !1,
    Se;
  t.gate()
    .then(async ({ toolUseContext: V, allowed: D }) => {
      let X = await p?.adopted,
        U = X?.entries ?? [],
        se = X?.park,
        ye = U.length > 0 && se !== void 0 ? se.take() : [];
      if (U.length > 0 && se !== void 0 && ye.length === 0) return;
      Se = U;
      for (let P of U.slice(0, MAX_WATCH_HANDOFF_ENTRIES))
        if (P.unattendedReplies !== void 0) addUnattendedReplies(P.slug, P.unattendedReplies);
      let fe = U.some((P) => P.stale !== !0);
      if (D && ue !== void 0 && J.size > 0 && t.jobHolderVerdicts !== void 0)
        try {
          ((F = await t.jobHolderVerdicts(ue, d, Date.now())),
            (ue = stripGoneJobHolderFields(ue, F)),
            Mt());
          let P = countMatching([...F.values()], (N) => N === "gone");
          if (P > 0)
            logFeatureOk("artifact_live_subscribe", { job_holder_gone: P, surface: _ });
        } catch {
          logFeatureSad("artifact_live_subscribe", "job_holder_probe_failed", {
            surface: _,
          });
        }
      let ke = [...(ue ?? new Map()).values()].filter(
          (P) => P.state === "armed",
        ),
        Nn = ke.length > 0,
        Rt = ke.some((P) => P.holder !== "bg"),
        It = async () =>
          resolveLiveSessionHolder({
            records: await (
              o?.listSessionRecords ??
              (await import("../跨会话消息(UDS)/chunk-ddtmwhn7.js")).listRegisteredSessionRecords
            )(),
            sessionId: me,
            selfPid: process.pid,
            isRunning: o?.isRunning ?? isProcessRunning,
            isSameProcess: o?.isSameProcess ?? provenSameProcessAsync,
          });
      if (D && (Xe() !== null || Nn))
        try {
          let P = await It();
          ((E = !0),
            (I = P.verdict),
            (w = P.holder),
            (v = P.otherHolders ?? []),
            (T = P.verdict === "live" && P.unproven === !0));
        } catch {
          ((ce = !0),
            logFeatureSad("artifact_live_subscribe", "holder_probe_failed", {
              surface: _,
            }));
        }
      let Me = Ie(t.readFrameState(), s),
        Tt =
          ue === void 0
            ? []
            : [...ue.entries()]
                .filter(
                  ([P, N]) =>
                    N.state === "armed" &&
                    N.holder !== "bg" &&
                    P !== s &&
                    !U.some((oe) => oe.slug === P),
                )
                .sort(
                  ([P, N], [oe, pe]) =>
                    Number(oe === Me?.slug) - Number(P === Me?.slug) ||
                    pe.writtenAtMs - N.writtenAtMs,
                )
                .map(([P]) => P)
                .slice(
                  0,
                  Math.max(
                    0,
                    MAX_ARTIFACT_WATCHES -
                      (s !== void 0 ? 1 : 0) -
                      U.length -
                      (Me !== null &&
                      ue?.get(Me.slug) === void 0 &&
                      !U.some((P) => P.slug === Me.slug)
                        ? 1
                        : 0),
                  ),
                ),
        Je = o?.isAutoReactEnabled ?? isArtifactAutoReactEnabled;
      if (
        I === "live" &&
        w !== void 0 &&
        Tt.length > 0 &&
        K() === me &&
        !isBgSession() &&
        t.mayRequestTakeover()
      )
        if (
          V.options.tools.some((N) => matchesToolName(N, ARTIFACT_TOOL_NAME)) &&
          t.commentsGateOpen() &&
          Je()
        ) {
          let N = await (
            o?.requestReplyTakeover ??
            (await import("../Artifact发布-渲染/chunk-54kz7amv.js")).requestReplyTakeover
          )({
            holders: [w, ...v],
            holdersIncomplete: T,
            conversationId: me,
            slugs: Tt,
            reason: "resume",
          });
          if (((C = N.kind), N.armable.size > 0)) k = N;
        } else C = "cannot_arm";
      let ve = k?.armable ?? new Set(),
        Le = (P) => {
          let N = [...P].filter((oe) => ve.has(oe) && !slugRepliesWiredHere(oe));
          if (N.length > 0) k?.undo(new Set(N));
        };
      if (K() !== me) k?.undo();
      let De = Xe(),
        xt =
          D &&
          (fe ||
            (((De !== null && De.holder !== "bg") || Rt) && I === "none") ||
            ve.size > 0),
        Hn = xt ? t.commentsGateOpen : void 0,
        Ze;
      if (xt) Ze = Je();
      let et = V.options.tools.find((P) => matchesToolName(P, ARTIFACT_TOOL_NAME)),
        Et = Hn?.() ?? !1;
      if (U.length > 0 && isUserPresent())
        p?.discloseUnattended({ willRearm: Ze === !0 && et !== void 0 && Et });
      if (!D) {
        if ((Oe(U), K() === me)) vt(U);
        return;
      }
      if (K() !== me) {
        if (((Qe = !0), Se !== void 0)) Oe(Se);
        return;
      }
      Qe = !0;
      let Pt = (P) =>
          sn({
            state: t.readFrameState(),
            ...(s !== void 0 && { excludeSlug: s }),
            getKnownVer: t.getKnownVer,
            context: V,
            publishContext: t.publishContext,
            carried: P.carried,
            ...(P.intent !== void 0 && {
              resumedIntent: P.intent,
              tornStops: getTornArtifactCommentMonitorStops(),
            }),
            holderProbe: P.holderProbe,
            ...(P.freedSlugs.size > 0 && { freedSlugs: P.freedSlugs }),
            ...(P.autoReactEnabled !== void 0 && {
              autoReactEnabled: P.autoReactEnabled,
            }),
            tool: et,
            commentVerbsInSchema: P.commentVerbsInSchema,
            onNotArmed: (N) => {
              Le([N]);
            },
            onRecordedNotResumed: (N, oe) => {
              Le(N);
              let pe = getArtifactEnvironment();
              c([
                createSystemInfoMessage(
                  dt(
                    N.map((be) => artifactViewerUrlFor({ slug: be, env: pe })),
                    oe,
                  ),
                  "notice",
                ),
              ]);
            },
            onCarriedSkip: (N, oe) => {
              if ((ie(N, artifactViewerUrlFor({ slug: N, env: getArtifactEnvironment() }), oe), !ve.has(N))) return;
              if (
                oe === "arm_in_flight" &&
                getArtifactState().live.inFlightWiredIntent.has(N)
              ) {
                onArmSettled(N, () => Le([N]));
                return;
              }
              Le([N]);
            },
            ...(p !== void 0 && { onCarriedArmed: p.onCarriedArmed }),
            parkInFlight: {
              park: (N) => {
                if (se === void 0) return;
                let oe = new Set(N.map((pe) => pe.slug));
                se.repark(
                  ye
                    .filter((pe) => oe.has(pe.slug))
                    .map(({ unattendedReplies: pe, ...be }) => be),
                );
              },
              release: (N) => {
                if (se !== void 0) se.release(N);
              },
            },
            ...(o?.arm !== void 0 && { arm: o.arm }),
          }),
        Ft =
          t.reprobeHeldAfterMs !== void 0 &&
          I === "live" &&
          ve.size === 0 &&
          Rt &&
          et !== void 0;
      ((q = Ft),
        Pt({
          holderProbe: I,
          carried: U,
          freedSlugs: ve,
          autoReactEnabled: Ze,
          commentVerbsInSchema: Et,
          intent: ue,
        }));
      let Un = async () => {
        let P =
          o?.isShuttingDown ??
          (await import("../../01-核心基础设施/核心工具-进程与信号/flushAnalyticsSinks.tbwzvw9n.js")).isShuttingDown;
        if (De !== null) await new Promise((be) => onArmSettled(De.slug, be));
        if (K() !== me || P()) {
          Ae();
          return;
        }
        let N = () =>
            It().then(
              (be) => be.verdict,
              () => {
                return;
              },
            ),
          oe = await N();
        if (oe === void 0) {
          (logFeatureSad("artifact_live_subscribe", "holder_reprobe_failed", {
            surface: _,
          }),
            Ae());
          return;
        }
        if (
          (logFeatureOk("artifact_live_subscribe", {
            holder_gone_on_reprobe: oe === "none",
            reprobe_verdict: fromEnum(oe),
            surface: _,
          }),
          oe !== "none" || K() !== me || P())
        ) {
          Ae();
          return;
        }
        let pe = ue;
        if (t.rereadRecords !== void 0 && ue !== void 0) {
          let be = await t.rereadRecords(ue).catch(() => null);
          if (be === null) {
            (logFeatureSad("artifact_live_subscribe", "records_reread_failed", {
              surface: _,
            }),
              $e("record_incomplete"));
            return;
          }
          let tt = new Map(),
            Ot = new Map();
          for (let [it, Bn] of ue) {
            let Ne = be.get(it);
            if (Ne === void 0) continue;
            if (Ne.state === "stopped" && Bn.state === "armed")
              tt.set(it, Ne.writtenAtMs);
            Ot.set(it, Ne);
          }
          if (tt.size > 0) applyArtifactCommentMonitorStops(tt, { storageV5: d });
          pe = Ot;
          let ot = await N();
          if (ot !== "none" || K() !== me || P()) {
            if (ot === void 0)
              logFeatureSad("artifact_live_subscribe", "holder_reprobe_failed", {
                surface: _,
              });
            $e(ot === "live" ? "say" : "holder_unknown");
            return;
          }
        }
        ((I = "none"),
          (w = void 0),
          (v = []),
          $e("drop"),
          (re = !0),
          Pt({
            holderProbe: "none",
            carried: [],
            freedSlugs: new Set(),
            autoReactEnabled: Je(),
            commentVerbsInSchema: t.commentsGateOpen(),
            intent: pe,
          }));
      };
      if (Ft && t.reprobeHeldAfterMs !== void 0)
        (
          o?.schedule ??
          ((N, oe) => {
            setTimeout(N, oe).unref();
          })
        )(() => {
          Un().catch((N) => {
            (Ae(),
              logForDebugging(`[frame-live] resume re-probe failed: ${l(N)}`, {
                level: "error",
              }));
          });
        }, t.reprobeHeldAfterMs);
      te("rearm", new Set(U.map((P) => P.slug)));
    })
    .catch((V) => {
      if (
        (logForDebugging(`[frame-live] resume re-arm failed: ${l(V)}`, { level: "error" }),
        Ae(),
        Qe)
      )
        return;
      if ((k?.undo(), K() === me)) vt(Se);
      if (Se !== void 0) {
        if (isUserPresent()) p?.discloseUnattended({ willRearm: !1 });
        Oe(Se);
        return;
      }
      p?.adopted?.then((D) => {
        if (D === void 0 || D.entries.length === 0) return;
        if (D.park !== void 0 && D.park.take().length === 0) return;
        for (let X of D.entries.slice(0, MAX_WATCH_HANDOFF_ENTRIES))
          if (X.unattendedReplies !== void 0) addUnattendedReplies(X.slug, X.unattendedReplies);
        if (isUserPresent()) p?.discloseUnattended({ willRearm: !1 });
        Oe(D.entries);
      });
    });
}
function rearmArtifactLiveInHeadlessHost(e) {
  {
    let { hostInitialized: t, getAppState: o, deps: r } = e,
      s;
    try {
      if (
        ((s =
          r?.publishContext ??
          derivePublishContextFrom({ agentId: void 0, isNonInteractiveSession: !0 }).publishContext),
        s !== "interactive")
      )
        return;
      if (!(r?.hostOwned ?? (() => (isDesktopHostSession() && !isClaudecodeEnv() && !isArtifactReadOnlySurface()) || isVsCodeExtensionSession()))())
        return;
    } catch (w) {
      (logForDebugging(`[frame-live] headless resume re-arm gate failed: ${l(w)}`, {
        level: "error",
      }),
        logError(w));
      return;
    }
    let d =
        r?.warmFlags ??
        (async () => {
          let { initializeGrowthBook: w } = await import("../../01-核心基础设施/共享小工具-未细化/ATIS_REQUEST_HEADER.9bwp2jqb.js");
          return w();
        }),
      c =
        r?.egressAllowed ??
        (async (w, v) => {
          let { isArtifactFetchEnabled: T } =
            await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js");
          return T(w, v, { promptless: !0 });
        }),
      p = () => {
        let w = o();
        return {
          artifactRefs: w.artifactRefs,
          artifactReadVersions: w.artifactReadVersions,
          frameUrls: w.frameUrls,
        };
      },
      _ = e.transcriptAnchor,
      I = isHoverRestEnabled() && e.storageV5 !== void 0,
      E = async (w) => {
        if (_ === void 0) return null;
        if (I) {
          let v = await loadTranscriptFromFile(_.path, e.storageV5);
          if (v.artifactCommentMonitor === void 0) return new Map(w);
          let T = !1,
            k = parseArtifactCommentMonitorIntent(v.artifactCommentMonitor, {
              onTornStop: () => {
                T = !0;
              },
            });
          return T ? null : k;
        }
        return Vt({
          path: _.path,
          sessionId: K(),
          fromByte: _.size,
          baseline: w,
        });
      };
    runArtifactLiveRearmPrelude(
      { initialMessages: e.initialMessages, storageV5: e.storageV5 },
      {
        publishContext: s,
        ui: "host",
        emit: e.emit,
        reprobeHeldAfterMs: r?.reprobeHeldAfterMs ?? 1e4,
        gate: async () => {
          (await d().catch(() => null), await t);
          let w = e.buildContext(),
            v = await c(w.options.tools, o().toolPermissionContext);
          return { toolUseContext: w, allowed: v };
        },
        readFrameState: p,
        getKnownVer: (w) => mainObservedArtifactVersion(o(), w),
        commentsGateOpen: r?.commentsGateOpen ?? isArtifactCommentsAvailable,
        mayRequestTakeover: () => !1,
        rereadRecords: r?.rereadRecords ?? E,
      },
      r?.orchestration,
    );
  }
}
import { stat as oo } from "fs/promises";
import { basename } from "path";
async function ln(e, t, o) {
  if (isCrossSessionMessagingEnabled()) {
    let r = `<${FORK_SOURCE_TAG}>`;
    if (e.some((w) => to(w, r)) || an(r)) return;
    let s = Date.parse(o);
    if (Number.isNaN(s)) return;
    let d = new Date(s).toISOString(),
      c = await findLivePeerBySessionId(t);
    if (c === null) {
      logFeatureSad("fork_source_note", "parent_gone");
      return;
    }
    let p = FT(c.name || basename(c.cwd)),
      _ = p && p !== "?" ? p : null,
      I = _
        ? `a session whose self-reported name is '${escapeHtmlText(_)}'`
        : "a session that was untitled when this note was written",
      E = _
        ? `find it in the ${LIST_AGENTS_TOOL_NAME} listing under that name (it may have been renamed since)`
        : `find it in the ${LIST_AGENTS_TOOL_NAME} listing`;
    if (an(r)) return;
    (logFeatureOk("fork_source_note"),
      enqueuePendingNotification({
        value: buildTaskNotification({
          body: `
<${FORK_SOURCE_TAG}>
This session began as a fork (copy) of another session that is still running: ${I}. The conversation up to ${d} is shared history with it; the two sessions have since diverged, and neither sees the other's new activity. To coordinate with it \u2014 hand results back, ask what it has done since, avoid duplicating its work \u2014 ${E} and message it with ${SEND_MESSAGE_TOOL_NAME}.
</${FORK_SOURCE_TAG}>`,
        }),
        agentId: ze(),
        mode: "task-notification",
        skipAttachments: !0,
        priority: "next",
        shouldQuery: !1,
      }));
  }
}
function to(e, t) {
  if (e.type === "attachment") {
    let o = e.attachment;
    return (
      o.type === "queued_command" &&
      typeof o.prompt === "string" &&
      o.prompt.includes(t)
    );
  }
  return getUserMessageText(e)?.includes(t) ?? !1;
}
function an(e) {
  return getCommandQueueSnapshot().some((t) => typeof t.value === "string" && t.value.includes(e));
}
async function restoreTaskRegistryFromTranscript(e, t, o, r, s) {
  if (isHoverRestEnabled() && s !== void 0) await relinkAdoptedAgentSymlinks({ storageV5: s });
  let d = parseForkSourceKey(a.CLAUDE_CODE_RESUME_SOURCE_ALIVE),
    c = e;
  if (d !== null) {
    if (d.parentSessionId !== void 0 && d.parentSessionId === K()) return;
    if (d.sessionId === void 0 || d.sessionId === K()) {
      let p = /^\d{4}-\d{2}-\d{2}T/.test(d.boundaryAt)
        ? Date.parse(d.boundaryAt)
        : Number.NaN;
      if (Number.isNaN(p)) return;
      if (
        ((c = e.filter((_) => Date.parse(_.timestamp) > p)),
        isCrossSessionMessagingEnabled() && d.sessionId !== void 0 && d.parentSessionId !== void 0)
      )
        ln(c, d.parentSessionId, d.boundaryAt).catch(logError);
    }
  }
  try {
    let p = uo(c);
    (bo(p), await po(p, t, o, r, s), ho(p, t), yo(p, t), syncLiveInFlightSnapshot(summarizeBackgroundTasks(t.all()), s));
  } catch (p) {
    logError(p);
  }
}
var ro = new RegExp(`<${TASK_ID_TAG}>([^<]+)</${TASK_ID_TAG}>`, "g"),
  io = `<${TASK_NOTIFICATION_TAG}>`,
  ao = `<${STATUS_TAG}>`,
  Be = 20,
  lo = 172800000,
  Ge = "__orphan_summary",
  ut = `${Ge}__:`,
  ct = `${Ge}_live__:`;
function Te(e) {
  return e.startsWith(Ge);
}
var gt =
  "Orphaned by a previous Claude Code process exit and reported in an aggregate summary.";
function uo(e) {
  let t = [],
    o = new Map(),
    r = new Set(),
    s = new Map(),
    d = new Map(),
    c = new Map(),
    p = new Set(),
    _ = new Set(),
    I = new Set(),
    E = new Set(),
    w = new Set(),
    v = (T) => {
      for (let k of T.summarizedKinds) {
        let C = k === "agent" ? s : k === "shell" ? d : c;
        for (let L of C.keys()) if (!T.liveExclusions.has(L)) p.add(L);
      }
    };
  for (let T of e)
    if (T.type === "assistant") {
      let k = T.message.content;
      if (!Array.isArray(k)) continue;
      let C = Date.parse(T.timestamp);
      for (let L of k) {
        if (L.type !== "tool_use") continue;
        let B = ft(L.input) ? L.input : {};
        if (L.name === AGENT_TOOL_NAME || L.name === TASK_TOOL_NAME) {
          if ((I.add(L.id), isWebFetchAgentToolUse(L))) E.add(L.id);
        } else if (L.name === SKILL_TOOL_NAME) w.add(L.id);
        else if (L.name === CRON_CREATE_TOOL_NAME)
          t.push({ toolUseId: L.id, input: B, createdAt: C });
        else if (L.name === CRON_DELETE_TOOL_NAME) {
          if (typeof B.id === "string") r.add(B.id);
        }
      }
    } else if (T.type === "user") {
      v(dn(co(T.message.content), p));
      let k = T.message.content;
      if (!Array.isArray(k)) continue;
      let C = T.toolUseResult;
      if (!ft(C)) continue;
      let L = !1,
        B = !1,
        J = !1;
      for (let Z of k)
        if (Z.type === "tool_result" && !Z.is_error) {
          if ((o.set(Z.tool_use_id, C), I.has(Z.tool_use_id)))
            ((L = !0), (B ||= E.has(Z.tool_use_id)));
          if (w.has(Z.tool_use_id)) J = !0;
          if (
            C.success === !0 &&
            typeof C.message === "string" &&
            typeof C.resumedAgentId === "string" &&
            parseShortId(C.resumedAgentId) !== null
          ) {
            p.delete(C.resumedAgentId);
            let O = s.get(C.resumedAgentId);
            if (O) O.redispatched = !0;
            else
              s.set(C.resumedAgentId, {
                agentId: C.resumedAgentId,
                description: C.message,
                isWebFetchLaunch: !1,
                redispatched: !0,
              });
          }
          let ce =
            typeof C.backgroundTaskId === "string" &&
            typeof C.stdout === "string"
              ? C.backgroundTaskId
              : typeof C.taskId === "string" && typeof C.timeoutMs === "number"
                ? C.taskId
                : void 0;
          if (ce !== void 0 && !Te(ce))
            d.set(ce, { taskId: ce, toolUseId: Z.tool_use_id });
          if (typeof C.task_id === "string" && typeof C.task_type === "string")
            _.add(C.task_id);
          if (
            C.status === "async_launched" &&
            C.taskType === "local_workflow" &&
            typeof C.taskId === "string" &&
            !Te(C.taskId) &&
            typeof C.error !== "string"
          )
            c.set(C.taskId, {
              taskId: C.taskId,
              toolUseId: Z.tool_use_id,
              workflowName:
                typeof C.workflowName === "string" ? C.workflowName : void 0,
              runId: typeof C.runId === "string" ? C.runId : void 0,
            });
        }
      if (
        C.status === "async_launched" &&
        typeof C.agentId === "string" &&
        !Te(C.agentId) &&
        typeof C.description === "string"
      )
        s.set(C.agentId, {
          agentId: C.agentId,
          description: C.description,
          outputFile: typeof C.outputFile === "string" ? C.outputFile : void 0,
          isWebFetchLaunch: B,
          launchedByAgentTool: L,
        });
      if (
        C.status === "forked" &&
        C.background === !0 &&
        typeof C.agentId === "string" &&
        !Te(C.agentId) &&
        !s.has(C.agentId)
      )
        s.set(C.agentId, {
          agentId: C.agentId,
          description:
            typeof C.commandName === "string" ? C.commandName : C.agentId,
          isWebFetchLaunch: !1,
          launchedByForkedSkill: J,
        });
    } else if (
      T.type === "system" &&
      T.subtype === "local_command" &&
      typeof T.content === "string"
    ) {
      for (let k of parseForkedSkillLaunches(T.content))
        if (!Te(k.agentId) && !s.has(k.agentId))
          s.set(k.agentId, {
            agentId: k.agentId,
            description: k.description,
            isWebFetchLaunch: !1,
            launchedByForkedSkill: !0,
          });
    } else if (
      T.type === "attachment" &&
      T.attachment.type === "queued_command" &&
      typeof T.attachment.prompt === "string"
    )
      v(dn(T.attachment.prompt, p));
  return {
    calls: t,
    results: o,
    deletedCronIds: r,
    asyncAgents: s,
    bgShells: d,
    workflows: c,
    notifiedTaskIds: p,
    stoppedTaskIds: _,
  };
}
function dn(e, t) {
  let o = { summarizedKinds: new Set(), liveExclusions: new Set() };
  if (!e.includes(io) || !e.includes(ao)) return o;
  for (let r of e.matchAll(ro)) {
    if (!r[1]) continue;
    let s = unescapeHtmlText(r[1]);
    if (s.startsWith(ct)) {
      o.liveExclusions.add(s.slice(ct.length));
      continue;
    }
    if ((t.add(s), s.startsWith(ut))) {
      let d = s.slice(ut.length);
      if (d === "agent" || d === "shell" || d === "workflow")
        o.summarizedKinds.add(d);
    }
  }
  return o;
}
function co(e) {
  if (typeof e === "string") return e;
  return e.map((t) => (ft(t) && typeof t.text === "string" ? t.text : ""))
    .join(`
`);
}
async function mo(e, t) {
  let o = getAgentTranscriptPath(e);
  if (isHoverRestEnabled() && t !== void 0)
    try {
      let s = resolveSubagentTranscriptLocator(o, t);
      if (s !== void 0) {
        let d = await s.backend.statMeta(s.key);
        if (d.ok && d.value.size > 0) return d.value.mtimeMs;
      }
    } catch {}
  let r = await oo(o);
  return r.size > 0 ? r.mtimeMs : null;
}
async function po({ asyncAgents: e, notifiedTaskIds: t }, o, r, s, d) {
  let c = [],
    p = [];
  for (let v of e.values()) {
    if (t.has(v.agentId)) continue;
    if (s?.has(v.agentId)) continue;
    if (o.get(v.agentId)) {
      p.push(v.agentId);
      continue;
    }
    c.push(v);
  }
  if (c.length === 0) return;
  if (
    (logFeatureSad("task_local_agent", "orphaned_on_resume"),
    logForDebugging(
      `resume: ${c.length} background agent(s) orphaned by previous process exit`,
    ),
    c.length > Be)
  ) {
    for (let v of c)
      emitTaskNotification(v.agentId, "failed", { summary: gt, outputFile: pt(v) });
    ht("failed", "agent", "agent", c, (v) => escapeHtmlText(v.agentId), p);
    return;
  }
  let _ = await Promise.all(
      c.map(async (v) => {
        let T = v.redispatched ? null : parseShortId(v.agentId);
        if (T === null) return { mtimeMs: null, hasMeta: !1, fetchable: !1 };
        let k;
        try {
          k = await mo(T, d);
        } catch {
          k = null;
        }
        let C =
          r !== void 0 &&
          (v.launchedByAgentTool === !0 || v.launchedByForkedSkill === !0) &&
          k !== null &&
          (await readAgentMetadata(T, d).catch(createAgentMetadataReadFallback("resume orphan probe"))) !== null;
        return { mtimeMs: k, hasMeta: C, fetchable: k === null && canFetchAgentTranscriptsOnDemand() };
      }),
    ),
    I = [],
    E = { stopped: [], failed: [] },
    w = Date.now();
  for (let [v, T] of c.entries()) {
    let {
      mtimeMs: k,
      hasMeta: C,
      fetchable: L,
    } = _[v] ?? { mtimeMs: null, hasMeta: !1, fetchable: !1 };
    if (
      r !== void 0 &&
      (T.launchedByAgentTool === !0 || T.launchedByForkedSkill === !0) &&
      C &&
      k !== null &&
      w - k < lo
    ) {
      I.push({
        agentId: T.agentId,
        description: T.description,
        outputFile: T.outputFile,
        isWebFetchLaunch: T.isWebFetchLaunch,
      });
      continue;
    }
    let B = k !== null || L,
      J = T.redispatched || B ? "stopped" : "failed",
      Z = T.redispatched
        ? `No completion record was found for background agent "${escapeHtmlText(T.description)}" after it was re-dispatched via SendMessage in the previous session. It may have been stopped (via the UI, an SDK interrupt, or agent teardown \u2014 these leave no transcript marker), or it may have been running when the previous Claude Code process exited. ${T.isWebFetchLaunch ? "Send it another message with SendMessage to resume it and get its report before assuming the fetch landed." : "Check its worktree/output for partial work before assuming the task landed."}`
        : B
          ? `No completion record was found for background agent "${escapeHtmlText(T.description)}" from the previous session. It may have been stopped, or it may have been running when the previous Claude Code process exited \u2014 either way its transcript is saved, so its progress is not lost. ${T.isWebFetchLaunch ? "Resume it by sending it a message with SendMessage to get its report." : "Resume it by sending it a message with SendMessage, or check its worktree/output for partial work before assuming the task landed."}`
          : `Background agent "${escapeHtmlText(T.description)}" was running when the previous Claude Code process exited and did not complete. Its in-process state was lost. ${T.isWebFetchLaunch ? "Launch it again if its report is still needed." : "Check its worktree/output for partial work before assuming the task landed."}`;
    if (T.redispatched) xe(T, J, Z);
    else E[J].push({ agent: T, summary: Z });
    emitTaskNotification(T.agentId, J, { summary: unescapeHtmlText(Z), outputFile: pt(T) });
  }
  for (let v of ["stopped", "failed"]) {
    let T = E[v],
      k = T[0];
    if (T.length === 1 && k) xe(k.agent, v, k.summary);
    else if (T.length > 1)
      go(
        v,
        T.map((C) => C.agent),
      );
  }
  if (I.length > 0 && r !== void 0)
    (logForDebugging(
      `resume: handing ${I.length} disk-resumable orphaned agent(s) to the bg auto-resume path`,
    ),
      r(I));
}
function notifyOrphanedAgentAutoResumed(e) {
  xe(
    e,
    void 0,
    `Background agent "${escapeHtmlText(e.description)}" had no completion record after the previous Claude Code process exited, and was automatically restarted from its saved transcript. It is running in the background again; its result will arrive as a separate task notification.`,
  );
}
function notifyOrphanedAgentAlreadyCompleted(e, t) {
  let o = t.get(e.agentId),
    r =
      e.isWebFetchLaunch ||
      (o?.type === "local_agent" && o.webFetchSavedFiles !== void 0);
  xe(
    r ? { ...e, isWebFetchLaunch: !0 } : e,
    "completed",
    `Background agent "${escapeHtmlText(e.description)}" had already completed before the previous Claude Code process exited \u2014 only its completion notification was lost, so it was not restarted and no further task notification will arrive. ${r ? "Send it a message with SendMessage to get its report." : "Read its output file (and check its worktree, if any) for the result."}`,
  );
}
function notifyOrphanedAgentResumeFailed(e, t) {
  xe(
    e,
    "stopped",
    `Background agent "${escapeHtmlText(e.description)}" from the previous session could not be automatically restarted: ${escapeHtmlText(t)}. Its transcript may still be resumable by sending it a message with SendMessage${e.isWebFetchLaunch ? ", which is the only way to get its report." : "; check its worktree/output for partial work before assuming the task landed."}`,
  );
}
function xe(e, t, o) {
  let r = pt(e);
  enqueuePendingNotification({
    value: buildTaskNotification({
      taskId: escapeHtmlText(e.agentId),
      outputFile: r ? escapeHtmlText(r) : void 0,
      status: t,
      summary: o,
    }),
    agentId: ze(),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    shouldQuery: !1,
  });
}
function go(e, t) {
  let o = t.map((w) => `<${TASK_ID_TAG}>${escapeHtmlText(w.agentId)}</${TASK_ID_TAG}>`).join(`
`),
    r = t.map((w) => `"${escapeHtmlText(w.description)}" (${escapeHtmlText(w.agentId)})`).join(", "),
    s = t.filter((w) => w.isWebFetchLaunch).map((w) => escapeHtmlText(w.agentId)),
    d = s.length === t.length,
    c =
      s.length === 1
        ? `${s[0]} fetched web content and has`
        : `${s.join(", ")} fetched web content and have`,
    p = s.length === 1 ? "it" : "them",
    _ = d
      ? "Resume any of them by sending a message to its id with SendMessage to get its report."
      : `Resume any of them by sending a message to its id with SendMessage, or check its worktree/output for partial work before assuming the task landed.${s.length > 0 ? ` ${c} no worktree or output to check \u2014 resume ${p} with SendMessage only.` : ""}`,
    I = d
      ? "Launch them again if their reports are still needed."
      : `Check each agent's worktree/output for partial work before assuming the tasks landed.${s.length > 0 ? ` ${c} nothing to check \u2014 launch ${p} again if still needed.` : ""}`,
    E =
      e === "stopped"
        ? `No completion record was found for ${t.length} background agents from the previous session: ${r}. They may have been stopped, or they may have been running when the previous Claude Code process exited \u2014 either way their transcripts are saved, so their progress is not lost. ${_}`
        : `${t.length} background agents were running when the previous Claude Code process exited and did not complete: ${r}. Their in-process state was lost. ${I}`;
  enqueuePendingNotification({
    value: `<${TASK_NOTIFICATION_TAG}>
${o}
<${STATUS_TAG}>${e}</${STATUS_TAG}>
<${SUMMARY_TAG}>${E}</${SUMMARY_TAG}>
</${TASK_NOTIFICATION_TAG}>`,
    agentId: ze(),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    shouldQuery: !1,
  });
}
function ho({ bgShells: e, notifiedTaskIds: t, stoppedTaskIds: o }, r) {
  let s = [],
    d = [];
  for (let c of e.values()) {
    if (t.has(c.taskId) || o.has(c.taskId)) continue;
    if (r.get(c.taskId)) {
      d.push(c.taskId);
      continue;
    }
    s.push(c);
  }
  if (s.length === 0) return;
  if (
    (logFeatureSad("task_local_shell", "orphaned_on_resume"),
    logForDebugging(
      `resume: ${s.length} background shell command(s) orphaned by previous process exit`,
    ),
    s.length > 1)
  ) {
    for (let c of s)
      emitTaskNotification(c.taskId, "stopped", { toolUseId: c.toolUseId, summary: gt });
    ht("stopped", "shell", "shell command", s, (c) => escapeHtmlText(c.taskId), d);
    return;
  }
  for (let c of s)
    (enqueuePendingNotification({
      value: buildTaskNotification({
        taskId: escapeHtmlText(c.taskId),
        toolUseId: escapeHtmlText(c.toolUseId),
        status: "stopped",
        summary:
          "No completion record was found for this background shell command from the previous session. It may have been stopped (via the UI, Monitor timeout, or agent teardown \u2014 these leave no transcript marker), or it may have been running when the previous Claude Code process exited. Check the output file for partial results before assuming it completed.",
      }),
      agentId: ze(),
      mode: "task-notification",
      skipAttachments: !0,
      priority: "next",
      shouldQuery: !1,
    }),
      emitTaskNotification(c.taskId, "stopped", {
        toolUseId: c.toolUseId,
        summary:
          "No completion record was found for this background shell command from the previous session. It may have been stopped (via the UI, Monitor timeout, or agent teardown \u2014 these leave no transcript marker), or it may have been running when the previous Claude Code process exited. Check the output file for partial results before assuming it completed.",
      }));
}
function yo({ workflows: e, notifiedTaskIds: t, stoppedTaskIds: o }, r) {
  let s = [],
    d = [];
  for (let c of e.values()) {
    if (t.has(c.taskId) || o.has(c.taskId)) continue;
    if (r.get(c.taskId)) {
      d.push(c.taskId);
      continue;
    }
    s.push(c);
  }
  if (s.length === 0) return;
  if (
    (logFeatureSad("task_local_workflow", "orphaned_on_resume"),
    logForDebugging(
      `resume: ${s.length} background workflow(s) orphaned by previous process exit`,
    ),
    s.length > Be)
  ) {
    for (let c of s)
      emitTaskNotification(c.taskId, "stopped", { toolUseId: c.toolUseId, summary: gt });
    ht("stopped", "workflow", "workflow", s, (c) => escapeHtmlText(c.taskId), d);
    return;
  }
  for (let c of s) {
    let p = c.workflowName ? ` "${c.workflowName}"` : "",
      _ = !c.runId
        ? ""
        : ` To pick up where it left off, relaunch with Workflow({scriptPath, resumeFromRunId: "${c.runId}"}) \u2014 completed agent() calls return cached.`,
      I = (c.runId, ""),
      E = `No completion record was found for background workflow${p} from the previous session. It may have been stopped (via the UI or TaskStop \u2014 these leave no transcript marker), or it may have been running when the previous Claude Code process exited.${_}${I}`;
    (enqueuePendingNotification({
      value: buildTaskNotification({
        taskId: escapeHtmlText(c.taskId),
        toolUseId: escapeHtmlText(c.toolUseId),
        status: "stopped",
        summary: escapeHtmlText(E),
      }),
      agentId: ze(),
      mode: "task-notification",
      skipAttachments: !0,
      priority: "next",
      shouldQuery: !1,
    }),
      emitTaskNotification(c.taskId, "stopped", { toolUseId: c.toolUseId, summary: E }));
  }
}
function ht(e, t, o, r, s, d) {
  let c = r.slice(0, Be).map(s),
    p = [...c, `${ut}${t}`, ...d.map((E) => `${ct}${escapeHtmlText(E)}`)].map(
      (E) => `<${TASK_ID_TAG}>${E}</${TASK_ID_TAG}>`,
    ).join(`
`),
    _ =
      e === "failed"
        ? "They were running when the previous Claude Code process exited and did not complete; their in-process state was lost. Check each worktree/output for partial work before assuming a task landed."
        : "They may have been stopped (via the UI, Monitor timeout, or agent teardown \u2014 these leave no transcript marker), or they may have been running when the previous Claude Code process exited.",
    I =
      c.length === r.length
        ? `Task ids: ${c.join(", ")}.`
        : `First ${Be} task ids: ${c.join(", ")}.`;
  enqueuePendingNotification({
    value: `<${TASK_NOTIFICATION_TAG}>
${p}
<${STATUS_TAG}>${e}</${STATUS_TAG}>
<${SUMMARY_TAG}>${r.length} background ${o} task(s) from the previous session have no completion record. ${_} They have been marked ${e}. ${I} Task ids in this notification beginning with "${Ge}" are internal scan markers, not tasks.</${SUMMARY_TAG}>
</${TASK_NOTIFICATION_TAG}>`,
    agentId: ze(),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    shouldQuery: !1,
  });
}
function bo({ calls: e, results: t, deletedCronIds: o }) {
  if (!isKairosCronEnabled()) return;
  let r = Date.now(),
    s = getCronJitterConfig(),
    d = new Set(kg().map((p) => p.id)),
    c = 0;
  for (let p of e) {
    let _ = t.get(p.toolUseId);
    if (!_ || typeof _.id !== "string") continue;
    if (_.durable === !0) continue;
    if (o.has(_.id) || d.has(_.id)) continue;
    let I = p.input.cron,
      E = p.input.prompt;
    if (typeof I !== "string" || typeof E !== "string") continue;
    let w = _.recurring !== !1;
    if (w) {
      if (s.recurringMaxAgeMs !== 0 && r - p.createdAt >= s.recurringMaxAgeMs)
        continue;
    } else {
      let v = computeOneShotTaskFireTime(I, p.createdAt, _.id, s);
      if (v === null || v < r) continue;
    }
    (m8({ id: _.id, cron: I, prompt: E, createdAt: p.createdAt, recurring: w }),
      c++);
  }
  if (c > 0) (bB(!0), logForDebugging(`resume: resurrected ${c} session cron task(s)`));
}
function ft(e) {
  return typeof e === "object" && e !== null;
}
function pt(e) {
  return e.isWebFetchLaunch ? void 0 : e.outputFile;
}
function waitForStoreCondition(e, t, o) {
  let r = () => {
    try {
      return t(e.getState());
    } catch {
      return !1;
    }
  };
  if (r()) return Promise.resolve(!0);
  return new Promise((s) => {
    let d = setTimeout(() => {
        (c(), s(!1));
      }, o.timeoutMs),
      c = e.subscribe(() => {
        if (r()) (clearTimeout(d), c(), s(!0));
      });
  });
}
function collectPendingAgentNotifications(e, t) {
  if (!t || e.length === 0) return [];
  let o = new Map(),
    r = new Map();
  for (let s of e) {
    if (!s.agentId || s.mode !== "task-notification") continue;
    let d = o.get(s.agentId);
    if (!d) {
      let p = t[s.agentId];
      if (!isBackgroundedSubagentTask(p) || !isCompletedWithKeepalive(p) || p.finalizing || p.resuming) continue;
      ((d = p), o.set(s.agentId, d));
    }
    let c = r.get(s.agentId) ?? [];
    (c.push(s), r.set(s.agentId, c));
  }
  return Array.from(r, ([s, d]) => ({
    agentId: s,
    prompt: d
      .map((c) => (typeof c.value === "string" ? c.value : ""))
      .filter(Boolean).join(`

`),
    consumedCommands: d,
  }));
}
function isDisplayableAssistantMessage(e) {
  return (
    e.type === "assistant" &&
    e.message.model !== SYNTHETIC_MODEL_NAME &&
    e.isMeta !== !0 &&
    e.isVirtual !== !0
  );
}
function messageSupersedes(e, t) {
  let o = e.supersedesUuids;
  if (o === void 0 || o.length === 0) return !1;
  if (o.includes(t.uuid)) return !0;
  return normalizeMessageBlocks([t]).some((r) => o.includes(r.uuid));
}
function createTurnEventTail(e) {
  let t = Promise.resolve(),
    o = 0,
    r = 0,
    s = -1;
  return {
    enqueue(d, c) {
      let p = o,
        _ = r;
      t = t
        .then(() => {
          if (_ <= s)
            return (
              logForDebugging(
                `${d}: not dispatched, the tail was severed while it waited behind an event that never settled`,
              ),
              []
            );
          return c();
        })
        .then((I) => {
          if (I.length === 0) return;
          if (p !== o) {
            logForDebugging(
              `${d}: ${I.length} note(s) dropped, the conversation was reset while it ran (${p} to ${o})`,
            );
            return;
          }
          e(I);
        })
        .catch((I) => logForDebugging(`${d} failed: ${l(I)}`));
    },
    reset: () => {
      o += 1;
    },
    settled: () => t,
    sever: () => {
      ((o += 1), (s = r), (r += 1), (t = Promise.resolve()));
    },
  };
}
var turnEventTailModule = {};
defineExportGetters(turnEventTailModule, { createTurnEventTail: () => createTurnEventTail, default: () => turnEventTailModule });
var Fe = (e, t) => ({
  turnId: e,
  messageId: null,
  index: t,
  texts: [],
  toolUses: [],
  last: null,
});
function yt(e) {
  let t = e.last,
    o = t?.type === "assistant";
  return {
    turnId: e.turnId,
    index: e.index,
    answer: e.texts
      .join(
        `
`,
      )
      .trim(),
    toolUses: e.toolUses,
    stopReason:
      (o ? t.message.stop_reason : null) ??
      (e.toolUses.length > 0 ? "tool_use" : "end_turn"),
  };
}
function createTurnStep(e) {
  let t = Fe("", 0);
  function o() {
    if (t.messageId === null) return;
    let r = yt(t);
    ((t = Fe(t.turnId, t.index + 1)), e(r));
  }
  return {
    read: (r) => {
      (o(), (t = Fe(r, 0)));
    },
    note: (r) => {
      if (r.type === "assistant") {
        if (r.isApiErrorMessage) return;
        if (t.messageId !== null && t.messageId !== r.message.id) o();
        ((t.messageId = r.message.id), (t.last = r));
        for (let s of r.message.content)
          if (s.type === "text") t.texts = [...t.texts, s.text];
          else if (s.type === "tool_use")
            t.toolUses = [...t.toolUses, { name: s.name, input: s.input }];
      } else if (r.type === "user" && hasToolResultBlock(r)) o();
    },
    flush: (r) => {
      if (t.turnId === r) o();
    },
  };
}
var turnStepModule = {};
defineExportGetters(turnStepModule, {
  createTurnStep: () => createTurnStep,
  default: () => turnStepModule,
  emptyStep: () => Fe,
  turnStepInputOf: () => yt,
});
function bt(e, t = Date.now()) {
  return (
    e.status === "rejected" && e.resetsAt !== void 0 && e.resetsAt * 1000 <= t
  );
}
function Ao(e) {
  let t = isValidUtilizationWindow(e.five_hour) ? e.five_hour : void 0,
    o = isValidUtilizationWindow(e.seven_day) ? e.seven_day : void 0,
    r = isValidUtilizationWindow(e.seven_day_overage_included)
      ? e.seven_day_overage_included
      : void 0;
  if (!t && !o && !r) return;
  return {
    ...(t && {
      five_hour: { utilization: t.utilization, resetsAt: t.resets_at },
    }),
    ...(o && {
      seven_day: { utilization: o.utilization, resetsAt: o.resets_at },
    }),
    ...(r && {
      seven_day_overage_included: {
        utilization: r.utilization,
        resetsAt: r.resets_at,
      },
    }),
  };
}
function buildRateLimitEventMessage(e) {
  let t = e.rateLimitGraceActive === !0 ? getActiveLimitGrace() : null;
  return createRateLimitEventMessage(
    {
      ...e,
      rateLimitGraceActive: t !== null,
      ...(t?.extraUsageStatus !== void 0 &&
        e.status !== "rejected" &&
        e.overageStatus === void 0 && { overageStatus: t.extraUsageStatus }),
    },
    K(),
    { includeOverageInUse: !isUsageBasedBilling(), unifiedWindows: Ao(getUnifiedRateLimitWindows()) },
  );
}
var vo = 30000;
function createRateLimitReemitThrottle({ minimumIntervalMs: e = vo, now: t = Date.now } = {}) {
  let o = new Map();
  return function (s) {
    if (getAPIProvider() === "gateway") return !1;
    let d = t(),
      c = s.resetsAt ?? 0;
    if (!Qs(getCurrentLimits(), s)) return (o.set(c, d), !1);
    if (bt(s, d)) return !1;
    for (let [_] of o) if (_ !== 0 && _ * 1000 <= d) o.delete(_);
    let p = o.get(c);
    if (p !== void 0 && d - p < e) return !1;
    return (o.set(c, d), !0);
  };
}
function Ro() {
  getSessionRuntimeState().lastRateLimitMirror = void 0;
}
function un(e, t) {
  let o = getSessionRuntimeState(),
    r = o.lastRateLimitMirror;
  if (r && r.target.deref() === e && Qs(r.info, t)) return;
  return (
    (o.lastRateLimitMirror = { target: new WeakRef(e), info: t }),
    { rate_limit_info: t }
  );
}
function buildRateLimitMirrorMetadata(e, t) {
  if (!isBridgeRateLimitEventEnabled()) return;
  return un(e, toRateLimitMirrorInfo(t.rate_limit_info));
}
function forwardRateLimitEventToBridge(e, t) {
  if (!isBridgeRateLimitEventEnabled()) return !1;
  try {
    e.writeSdkMessages([t]);
  } catch (o) {
    return (
      logForDebugging(`[bridge] rate_limit_event forward failed: ${l(o)}`, {
        level: "error",
      }),
      !1
    );
  }
  try {
    let o = buildRateLimitMirrorMetadata(e, t);
    if (o) e.reportMetadata(o);
  } catch (o) {
    logForDebugging(`[bridge] rate_limit_info metadata mirror failed: ${l(o)}`, {
      level: "error",
    });
  }
  return !0;
}
function handleBridgeTransportRebuilt() {
  if (!isBridgeRateLimitEventEnabled() || !haveLimitsBeenObserved()) return;
  let e = getReplBridgeHandle() ?? getSdkHostedBridgeHandle();
  if (!e) return;
  Ro();
  let t = getCurrentLimits();
  if (bt(t)) {
    cn(e);
    return;
  }
  let o = buildRateLimitEventMessage(t),
    r = o && buildRateLimitMirrorMetadata(e, o);
  if (r) e.reportMetadata(r);
}
function cn(e) {
  if (!isBridgeRateLimitEventEnabled()) return;
  let t = un(e, null);
  if (t) e.reportMetadata(t);
}
function forwardCurrentRateLimitsToBridge(e) {
  if (!haveLimitsBeenObserved()) return;
  let t = getCurrentLimits();
  if (bt(t)) {
    cn(e);
    return;
  }
  let o = buildRateLimitEventMessage(t);
  if (o && forwardRateLimitEventToBridge(e, o)) logFeatureOk("bridge_rate_limit_forward");
}
function buildSdkInitMessage({
  model: e,
  permissionMode: t,
  commands: o,
  agents: r,
  loadedSkills: s,
  mcpCommands: d,
  fastMode: c,
  effortValue: p,
}) {
  return buildSystemInitMessage({
    ...collectMinimalAmbientContext(),
    tools: [],
    mcpClients: [],
    model: e,
    permissionMode: t,
    commands: Rg() ? [] : bridgeAdvertisedCommands(o),
    agents: r,
    skills: mergeSkillCommands(s, d),
    plugins: [],
    pluginErrors: [],
    pluginWarnings: [],
    mcpServerErrors: [],
    fastModeState: getFastModeStatus(e, c),
    fastModeDisabledReason: getFastModeUnavailableReason(e) ?? void 0,
    effort: getEffectiveEffortLevel(e, p),
  });
}
function isSlashCommandInput(e) {
  if (typeof e === "string") return e.trim().startsWith("/");
  for (let t of e) if (t.type === "text") return t.text.trim().startsWith("/");
  return !1;
}
function resolveCommandPriority(e, t, o) {
  if (isSlashCommandInput(t)) return "later";
  if (e === "now") return "now";
  if (o) return "later";
  if (e !== void 0) return e;
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_pencil_farmer", !1) ? "next" : "later";
}
function mn(e) {
  return e.verifiedSlackHumanTurn === !0 && e.priority === "later";
}
function hasPendingDeferredSlackTurn(e) {
  return e.peek(mn) !== void 0 || e.someInFlightDrainCommand(mn);
}
function hasPendingVerifiedSlackTurn(e) {
  return e.peek(isVerifiedSlackHumanTurn) !== void 0 || e.someInFlightDrainCommand(isVerifiedSlackHumanTurn);
}
function peekCommandPreferringSlackTurn(e, t) {
  let o = e.peek(t);
  if (!o || o.priority === "now") return o;
  return e.peek((r) => t(r) && isVerifiedSlackHumanTurn(r)) ?? o;
}
function dequeueCommandPreferringSlackTurn(e, t) {
  let o = peekCommandPreferringSlackTurn(e, t);
  if (o === void 0) return;
  return e.dequeue((r) => r === o);
}
function getBridgeInitializeCommands(e) {
  if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_initialize_commands", !1)) return [];
  if (Rg()) return [];
  let t = toBridgeSlashCommands(e);
  return (logFeatureOk("bridge_initialize_commands"), t);
}
function recordDeclaredDialogKinds(e, t, o, r) {
  let s = e.size;
  for (let d of t) {
    if (e.size >= MAX_DECLARED_DIALOG_KINDS) break;
    e.add(d);
  }
  if (o === "restored" || e.size === s) return;
  (logEvent("tengu_repl_bridge_dialog_kinds_declared", {
    kind_count: e.size,
    has_refusal_fallback: e.has("refusal_fallback_prompt"),
  }),
    r());
}
function St(e) {
  let t = e.trim();
  if (!t) return { recognized: !1, shape: "empty" };
  if (getAPIProvider() !== "firstParty" || !isFirstPartyAnthropicBaseUrl()) return { recognized: !0 };
  let o = t.toLowerCase(),
    r = strip1mSuffix(o).trim();
  if (isModelAlias(o) || isModelAlias(r)) return { recognized: !0 };
  if (getCatalogEntryById(r) || getCatalogIdByProviderId(r)) return { recognized: !0 };
  if (isDeploymentVouchedModel(t)) return { recognized: !0 };
  if (buildModelOptions().some((s) => s.value === t)) return { recognized: !0 };
  if (/^claude-\S+$/.test(o)) return { recognized: !0 };
  return { recognized: !1, ...To(t) };
}
function To(e) {
  let t = e.replace(/^\[(.+)\]$/s, "$1").trim(),
    o = kP().models.find(
      (r) => r.display_name.toLowerCase() === t.toLowerCase(),
    );
  if (o) return { shape: "display_name", suggestion: o.id };
  if (/^\d+$/.test(e)) return { shape: "numeric" };
  if (e.startsWith("[")) return { shape: "bracketed", ...kt(t) };
  if (/\s/.test(e)) return { shape: "whitespace", ...kt(e) };
  return { shape: "other", ...kt(e) };
}
function kt(e) {
  let t = [...MODEL_ALIASES, ...kP().models.map((r) => r.id)],
    [o] = findNearNameMatches(e.toLowerCase(), t, 1);
  return o ? { suggestion: o } : {};
}
function Ct(e, t) {
  let o =
    t !== void 0
      ? ` Did you mean '${t}'?`
      : " Run /model to see available models.";
  return `Model "${e}" is not a recognized model id.${o}`;
}
function parseAllowedUserModel(e) {
  return e !== void 0 && (isExemptDefaultResolvingPick(e) || isModelAllowed(e)) ? parseUserSpecifiedModel(e) : void 0;
}
function getConversationModel({ messages: e, queriedInProcess: t, activeModel: o }) {
  if (t && e.some((r) => isPlainUserMessage(r) || pn(r) !== void 0)) return o;
  for (let r = e.length - 1; r >= 0; r--) {
    let s = e[r];
    if (isCompactBoundaryMessage(s)) return;
    if (gn(s)?.startsWith(MODEL_SWITCH_STDOUT_PREFIX)) {
      let c = e[r - 1],
        p = c === void 0 ? null : gn(c),
        _ =
          p !== null && extractTagContent(p, COMMAND_NAME_TAG)?.trim() === "/model"
            ? extractTagContent(p, COMMAND_ARGS_TAG)?.trim()
            : void 0;
      return _ ? xo(_) : void 0;
    }
    let d = pn(s);
    if (d !== void 0) return d;
  }
  return;
}
function shouldInjectModelSwitchMessages({ appliedModel: e, previousModel: t, conversationModel: o }) {
  if (o === void 0) return !1;
  let r = parseUserSpecifiedModel(e),
    s = At(r);
  if (At(parseUserSpecifiedModel(o)) !== s) return !0;
  let d = parseUserSpecifiedModel(t);
  return At(d) === s && hasLongContextSuffix(d) !== hasLongContextSuffix(r);
}
function hn(e) {
  if (e.trim().toLowerCase() === "default") return { kind: "default" };
  let t = St(e);
  if (!t.recognized)
    return { kind: "unrecognized", shape: t.shape, suggestion: t.suggestion };
  if (isExemptDefaultResolvingPick(e) || (isModelAllowedUnderActiveEnforcement(e) ?? isModelAllowed(e))) return { kind: "allowed", model: e };
  let o = stepDownRestrictedFamilyAliasPick(e);
  return o === null ? { kind: "blocked" } : { kind: "steppedDown", model: o };
}
function rejectUnrecognizedModel(e, t) {
  let o = St(e);
  if (o.recognized) return;
  return (
    logEvent("tengu_set_model_unrecognized", {
      shape: fromEnum(o.shape),
      had_suggestion: o.suggestion !== void 0,
      surface: t,
    }),
    logFeatureBad("model_switch", "unrecognized_model"),
    { ok: !1, error: Ct(sanitizeDisplayName(e), o.suggestion) }
  );
}
async function handleSetModelRequest(e, t) {
  let o = e.model;
  if (o != null && typeof o !== "string") {
    if ((logFeatureBad("model_switch", "invalid_model_type"), e.system_prompt !== void 0))
      logFeatureBad("system_prompt_switch", "model_switch_rejected");
    return { ok: !1, error: "set_model: model must be a string" };
  }
  let r = e.system_prompt;
  if (r !== void 0 && (typeof r !== "string" || r === ""))
    return (
      logFeatureBad(
        "system_prompt_switch",
        typeof r !== "string" ? "invalid_type" : "empty",
      ),
      {
        ok: !1,
        error:
          "set_model: system_prompt must be a non-empty string when present",
      }
    );
  let s = o ?? "default",
    d = hn(s),
    c,
    p;
  switch (d.kind) {
    case "unrecognized":
      if (
        (logEvent("tengu_set_model_unrecognized", {
          shape: fromEnum(d.shape),
          had_suggestion: d.suggestion !== void 0,
          surface: t.surface,
        }),
        logFeatureBad("model_switch", "unrecognized_model"),
        typeof r === "string")
      )
        logFeatureBad("system_prompt_switch", "model_switch_rejected");
      return { ok: !1, error: Ct(sanitizeDisplayName(s), d.suggestion) };
    case "blocked": {
      let C = parseAllowedUserModel(t.getActiveModel());
      if (
        (t.noticeRestrictedModel(s, C),
        logFeatureBad("model_switch", "not_allowed"),
        typeof r === "string")
      )
        logFeatureBad("system_prompt_switch", "model_switch_rejected");
      return { ok: !1, error: formatModelRestrictedMessage(s, C ?? getMainLoopModel()) };
    }
    case "default":
      ((c = getDefaultMainLoopModel()), (p = null));
      break;
    case "allowed":
      ((c = d.model), (p = null));
      break;
    case "steppedDown":
      ((c = d.model), (p = d.model));
      break;
  }
  let _ = () => {
      let C = t.readAppState();
      return {
        mainLoopModel: C.mainLoopModel ?? t.getActiveModel() ?? getMainLoopModel(),
        mainLoopModelForSession: C.mainLoopModelForSession,
        toolPermissionContext: C.toolPermissionContext,
      };
    },
    I = d.kind === "default" ? null : c,
    E = await resolvePreModelSwitchDecision(t.session, _, I, "sdk");
  if (E.decision !== "proceed") {
    if ((logFeatureSad("model_switch", "blocked_by_hook"), typeof r === "string"))
      logFeatureBad("system_prompt_switch", "model_switch_rejected");
    return { ok: !1, error: formatModelSwitchBlockedNotice(E) };
  }
  let w = getMainLoopModel(),
    v = t.getActiveModel(),
    T = t.getConversationModel();
  if (
    (recordModelSwitchIfChanged(t.session, _(), I, "sdk"),
    t.applyModel(c),
    (getMainLoopModel() !== w || parseUserSpecifiedModel(c) !== parseUserSpecifiedModel(v ?? w)) &&
      shouldInjectModelSwitchMessages({ appliedModel: c, previousModel: v ?? w, conversationModel: T }))
  )
    t.injectModelSwitchBreadcrumbs(s, c);
  if ((t.recordAllowedModelApplied(), p !== null))
    (t.noticeRestrictedModel(s, p),
      logFeatureSad("model_switch", "family_alias_stepped_down"));
  else logFeatureOk("model_switch");
  if (typeof r === "string") (t.setSystemPrompt(r), logFeatureOk("system_prompt_switch"));
  return E.messages.length > 0
    ? { ok: !0, notices: E.messages.map(toSingleLineDisplayText) }
    : { ok: !0 };
}
function pn(e) {
  if (e.type !== "assistant") return;
  let t = e.message?.model;
  return typeof t === "string" && t !== SYNTHETIC_MODEL_NAME ? t : void 0;
}
function gn(e) {
  return e.type === "user" ? getMessageContentText(e.message?.content) : null;
}
function At(e) {
  return getCanonicalName(stripLongContextTags(e));
}
function xo(e) {
  let t = hn(e);
  switch (t.kind) {
    case "default":
      return getDefaultMainLoopModel();
    case "allowed":
    case "steppedDown":
      return t.model;
    case "unrecognized":
    case "blocked":
      return;
  }
}
function consumeRecentTimestamp(e, t, o = Date.now()) {
  let r = e.get(t);
  return (e.delete(t), r !== void 0 && o - r <= 120000);
}
var Oo = "security-guidance",
  dd = `${Oo}@claude-code-marketplace`;
var cu = [...GIT_HARDENED_ARGS, "-c", "safe.bareRepository=explicit"];
var yn = String.raw`'([^']*)'(?:(=)(?:'([^']*)')?)?`,
  mu = new RegExp(String.raw`^(?:${yn}(?:[ \t\r\n]+${yn})*)?[ \t\r\n]*$`);
function Bo() {
  return {
    fileContentCache: new Map(),
    turnBaselines: new Map(),
    dirtyAttributions: new Map(),
    gitStatusInFlight: new Map(),
    hooksRegistered: !1,
    commitVerifyGateBlockCounts: new Map(),
  };
}
var kc = Bo();
class bn {
  probe = null;
  setProbe(e) {
    this.probe = e;
  }
}
var Sc = new j(() => new bn());
function getTranscriptWatermark(e) {
  return {
    messageCount: countMatching(e, (t) => t.type !== "progress"),
    lastMessageUuid: e.findLast((t) => t.type !== "progress")?.uuid,
  };
}
class SandboxClassifierVerdictCache {
  verdicts = new Map();
  getOrClassify(e, t, o, r) {
    let s = `${e}:${t ?? "*"}`,
      d = this.verdicts.get(s);
    if (
      d &&
      (d.reuse === "always" ||
        (d.watermark.messageCount === o.messageCount &&
          d.watermark.lastMessageUuid === o.lastMessageUuid))
    )
      return d.promise;
    let c = r(),
      p = { promise: c.then((_) => _.allow), watermark: o, reuse: void 0 };
    return (
      this.verdicts.set(s, p),
      c.then(
        (_) => {
          if (_.unavailable && !_.transcriptTooLong) {
            if (this.verdicts.get(s) === p) this.verdicts.delete(s);
            return;
          }
          p.reuse =
            _.allow || _.transcriptTooLong ? "same-transcript" : "always";
        },
        () => {
          if (this.verdicts.get(s) === p) this.verdicts.delete(s);
        },
      ),
      p.promise
    );
  }
  clear() {
    this.verdicts.clear();
  }
}
import { isAbsolute, resolve } from "path";
function diffDeclaredMarketplaces(e, t, o) {
  let r = [],
    s = [],
    d = [];
  for (let [c, p] of Object.entries(e)) {
    let _ = t[c],
      I = kn(p.source, o?.projectRoot);
    if (!_) r.push(c);
    else if (p.sourceIsFallback) d.push(c);
    else if (!Qs(I, _.source))
      s.push({ name: c, declaredSource: I, materializedSource: _.source });
    else d.push(c);
  }
  return { missing: r, sourceChanged: s, upToDate: d };
}
async function reconcileDeclaredMarketplaces(e) {
  let t = getDeclaredMarketplaces();
  if (Object.keys(t).length === 0)
    return {
      installed: [],
      updated: [],
      failed: [],
      upToDate: [],
      skipped: [],
    };
  let o = e?.storageV5,
    r;
  try {
    r = await getKnownMarketplaces(o);
  } catch (w) {
    (logForDebugging(
      `reconciler: failed to load known_marketplaces.json, treating as empty: ${l(w)}`,
      { level: "error" },
    ),
      (r = {}));
  }
  let s = diffDeclaredMarketplaces(t, r, { projectRoot: he() }),
    d = [
      ...s.missing.map((w) => ({
        name: w,
        source: kn(t[w].source),
        action: "install",
      })),
      ...s.sourceChanged.map(({ name: w, declaredSource: v }) => ({
        name: w,
        source: v,
        action: "update",
      })),
    ],
    c = [],
    p = [],
    _ = [];
  for (let w of d) {
    if (e?.skip?.(w.name, w.source)) {
      c.push(w.name);
      continue;
    }
    if (isReservedClaudeAiMarketplaceName(w.name)) {
      let v = `not materialized: names starting with "${CLAUDE_AI_MARKETPLACE_NAME_PREFIX}" are reserved for marketplaces hosted on claude.ai \u2014 rename the declaration`;
      (logForDebugging(`[reconcile] '${w.name}' ${v}`, { level: "warn" }),
        _.push({ name: w.name, error: v }),
        e?.onProgress?.({ type: "failed", name: w.name, error: v }));
      continue;
    }
    if (w.action === "update" && isLocalMarketplaceSource(w.source) && !(await pathExists(w.source.path))) {
      (logForDebugging(
        `[reconcile] '${w.name}' declared path does not exist; keeping materialized entry`,
      ),
        c.push(w.name));
      continue;
    }
    p.push(w);
  }
  let I = [],
    E = [];
  if (p.length > 0) {
    logForDebugging(
      `[reconcile] ${p.length} marketplace(s): ${p.map((w) => `${w.name}(${w.action})`).join(", ")}`,
    );
    for (let w = 0; w < p.length; w++) {
      let { name: v, source: T, action: k } = p[w];
      e?.onProgress?.({
        type: "installing",
        name: v,
        action: k,
        index: w + 1,
        total: p.length,
      });
      try {
        let C = await addMarketplace(T, void 0, o, v);
        if (k === "install") I.push(v);
        else E.push(v);
        e?.onProgress?.({
          type: "installed",
          name: v,
          alreadyMaterialized: C.alreadyMaterialized,
        });
      } catch (C) {
        let L = l(C);
        (_.push({ name: v, error: L }),
          e?.onProgress?.({ type: "failed", name: v, error: L }),
          logForDebugging(`[reconcile] failed to ${k} marketplace '${v}': ${L}`, {
            level: "error",
          }));
      }
    }
  }
  return (
    await syncDeclaredAutoUpdateToJson(o),
    { installed: I, updated: E, failed: _, upToDate: s.upToDate, skipped: c }
  );
}
function kn(e, t) {
  if ((e.source === "directory" || e.source === "file") && !isAbsolute(e.path)) {
    let o = t ?? he(),
      r = findCanonicalGitRoot(o);
    return { ...e, path: resolve(r ?? o, e.path) };
  }
  return e;
}
import { readFile } from "fs/promises";
import { join as Wo } from "path";
var Ko = "flagged-plugins.json",
  Yo = 172800000;
function _n() {
  return Wo(getPluginsDir(), Ko);
}
function Sn(e) {
  let t = jsonParse(e);
  if (
    typeof t !== "object" ||
    t === null ||
    !("plugins" in t) ||
    typeof t.plugins !== "object" ||
    t.plugins === null
  )
    return {};
  let o = t.plugins,
    r = {};
  for (let [s, d] of Object.entries(o))
    if (
      d &&
      typeof d === "object" &&
      "flaggedAt" in d &&
      typeof d.flaggedAt === "string"
    ) {
      let c = { flaggedAt: d.flaggedAt };
      if ("seenAt" in d && typeof d.seenAt === "string") c.seenAt = d.seenAt;
      r[s] = c;
    }
  return r;
}
var wn = new Set(["ENOSPC", "EROFS", "EACCES", "ENOENT", "ENOTDIR"]),
  Xo = new Set([...wn, "EEXIST", "EISDIR", "AbsentParent", "UnexpectedAbsent"]);
function Cn(e) {
  return isHoverRestEnabled() && e !== void 0 && getPluginRegistryFileScope("flagged", getPluginsDir()) !== null ? e : void 0;
}
async function je(e) {
  let t = _n(),
    o = Cn(e);
  if (o) {
    let r = await o.read([STORAGE_KEYS.pluginRegistry("flagged")]),
      s = r.ok ? r.value.items[0] : void 0;
    if (!s?.found) return {};
    let d = s.value;
    try {
      return Sn(
        Buffer.from(d.buffer, d.byteOffset, d.byteLength).toString("utf-8"),
      );
    } catch {
      return {};
    }
  }
  try {
    let r = await readFile(t, { encoding: "utf-8" });
    return Sn(r);
  } catch {
    return {};
  }
}
async function Ve(e, t) {
  let o = _n(),
    r = Cn(t);
  if (r) {
    let s = await r.write(
      STORAGE_KEYS.pluginRegistry("flagged"),
      jsonStringify({ plugins: e }, null, 2),
    );
    if (s.ok) {
      getPluginRegistryState().flaggedPlugins = e;
      return;
    }
    let d = "telemetryCode" in s.error ? s.error.telemetryCode : void 0;
    if (d !== void 0 && Xo.has(d))
      logForDebugging(`Failed to persist flagged plugins: ${describeStorageError(s.error)}`, {
        level: "error",
      });
    else
      logError(
        new R(
          `Failed to persist flagged plugins: ${s.error.code}${d === void 0 ? "" : ` ${d}`}`,
          "flagged plugins v5 write failed",
        ),
      );
    return;
  }
  try {
    await getFsSurface().mkdir(getPluginsDir());
    let s = jsonStringify({ plugins: e }, null, 2);
    (await writeFileAtomic(o, s, 384), (getPluginRegistryState().flaggedPlugins = e));
  } catch (s) {
    let d = A(s);
    if (d !== void 0 && wn.has(d))
      logForDebugging(`Failed to persist flagged plugins: ${s}`, { level: "error" });
    else logError(s);
  }
}
async function An(e) {
  let t = await je(e),
    o = Date.now(),
    r = !1;
  for (let [s, d] of Object.entries(t))
    if (d.seenAt && o - new Date(d.seenAt).getTime() >= Yo)
      (delete t[s], (r = !0));
  if (((getPluginRegistryState().flaggedPlugins = t), r)) await Ve(t, e);
}
function getFlaggedPlugins() {
  return getPluginRegistryState().flaggedPlugins ?? {};
}
async function Mn(e, t) {
  let o = getPluginRegistryState();
  if (o.flaggedPlugins === null) o.flaggedPlugins = await je(t);
  let r = { ...o.flaggedPlugins, [e]: { flaggedAt: new Date().toISOString() } };
  (await Ve(r, t), logForDebugging(`Flagged plugin: ${e}`));
}
async function markFlaggedPluginsSeen(e, t) {
  let o = getPluginRegistryState();
  if (o.flaggedPlugins === null) o.flaggedPlugins = await je(t);
  let r = new Date().toISOString(),
    s = !1,
    d = { ...o.flaggedPlugins };
  for (let c of e) {
    let p = d[c];
    if (p && !p.seenAt) ((d[c] = { ...p, seenAt: r }), (s = !0));
  }
  if (s) await Ve(d, t);
}
async function clearFlaggedPlugin(e, t) {
  let o = getPluginRegistryState();
  if (o.flaggedPlugins === null) o.flaggedPlugins = await je(t);
  if (!(e in o.flaggedPlugins)) return;
  let { [e]: r, ...s } = o.flaggedPlugins;
  ((o.flaggedPlugins = s), await Ve(s, t));
}
function Qo(e, t, o) {
  let r = new Set(t.plugins.map((c) => c.name)),
    s = `@${o}`,
    d = [];
  for (let c of Object.keys(e.plugins)) {
    if (!c.endsWith(s)) continue;
    let p = c.slice(0, -s.length),
      _ = t.renames && resolvePluginRenameChain(p, t.renames, r)?.kind === "renamed";
    if (!r.has(p) && !_) d.push(c);
  }
  return d;
}
async function enforceDelistedPlugins(e) {
  await An(e);
  let t = isHoverRestEnabled() && e !== void 0 ? await getInstalledPluginsViaStorage(e) : getInstalledPlugins(),
    o = getFlaggedPlugins(),
    r = await getKnownMarketplacesOrEmpty(e),
    s = [];
  for (let d of Object.keys(r))
    try {
      let c = await loadMarketplace(d, e);
      if (!c.forceRemoveDeletedPlugins) continue;
      let p = Qo(t, c, d);
      for (let _ of p) {
        if (_ in o) continue;
        let I = t.plugins[_] ?? [];
        if (
          !I.some(
            (w) =>
              w.scope === "user" ||
              w.scope === "project" ||
              w.scope === "local",
          )
        )
          continue;
        for (let w of I) {
          let { scope: v } = w;
          if (v !== "user" && v !== "project" && v !== "local") continue;
          try {
            let T = await uninstallPlugin(_, v, !0, e);
            logEvent("tengu_plugin_delisted_enforcement", {
              outcome: T.success ? S("uninstalled") : S("uninstall-failed"),
              scope: fromEnum(v),
              ...(!T.success && { error_kind: fromEnum(classifyPluginError(T.message)) }),
              ...buildPluginTelemetryFieldsFromId(_, getPolicyPluginNames()),
            });
          } catch (T) {
            (logForDebugging(
              `Failed to auto-uninstall delisted plugin ${_} from ${v}: ${l(T)}`,
              { level: "error" },
            ),
              logEvent("tengu_plugin_delisted_enforcement", {
                outcome: S("uninstall-failed"),
                scope: fromEnum(v),
                error_kind: fromEnum(classifyPluginError(T)),
                ...buildPluginTelemetryFieldsFromId(_, getPolicyPluginNames()),
              }));
          }
        }
        (await Mn(_, e), s.push(_));
      }
    } catch (c) {
      (logForDebugging(`Failed to check for delisted plugins in "${d}": ${l(c)}`, {
        level: "warn",
      }),
        logEvent("tengu_plugin_delisted_enforcement", {
          outcome: S("scan-failed"),
          error_kind: fromEnum(classifyPluginError(c)),
          _PROTO_marketplace_name: d,
          is_official_marketplace: isOfficialMarketplace(d),
        }));
    }
  return s;
}
import { randomUUID as Ke } from "crypto";
var Zo = 10,
  vn = 1000 / Zo,
  Rn = 3,
  In = 1e4;
function createDisplayTransformQueue({
  session: e,
  sessionHooks: t,
  onStreamingDisplay: o,
  onMessageDisplay: r,
  storageV5: s,
  credentials: d,
}) {
  let c = Ke(),
    p = null;
  function _(k) {
    if (k.abandoned) return;
    if (k.done) r(k.apiMessageId, k.output);
    else o(k.output);
  }
  function I(k, C, L, B) {
    k.inFlight++;
    let J = Date.now(),
      Z = (async () => {
        let ce = B;
        try {
          for await (let O of executeMessageDisplayHooks(
            e,
            {
              turnId: k.turnId,
              messageId: k.messageId,
              index: C,
              final: L,
              delta: B,
            },
            t,
            k.abortController.signal,
            In,
            s,
            d,
          )) {
            if (
              O.message?.type === "attachment" &&
              (O.message.attachment.type === "hook_non_blocking_error" ||
                O.message.attachment.type === "hook_cancelled")
            )
              k.stats.errorCount++;
            if (O.displayContent !== void 0) ce = O.displayContent;
          }
        } catch (O) {
          (k.stats.errorCount++,
            logForDebugging(
              `MessageDisplay hook flush ${C} failed; displaying original delta: ${O instanceof Error ? O.message : String(O)}`,
              { level: "error" },
            ));
        } finally {
          let O = Date.now() - J;
          ((k.stats.totalDurationMs += O),
            (k.stats.maxDurationMs = Math.max(k.stats.maxDurationMs, O)),
            k.inFlight--,
            E(k));
        }
        return ce;
      })();
    k.appendChain = k.appendChain.then(async () => {
      ((k.output += await Z), _(k));
    });
  }
  function E(k) {
    if (k.abandoned) return;
    if (k.finalized) {
      if (!k.finalDispatched) w(k, !0);
      else if (k.inFlight === 0 && !k.stats.summaryEmitted)
        ((k.stats.summaryEmitted = !0),
          logEvent("tengu_message_display_hooks", {
            flushCount: k.index,
            errorCount: k.stats.errorCount,
            totalDurationMs: k.stats.totalDurationMs,
            maxDurationMs: k.stats.maxDurationMs,
          }));
      return;
    }
    v(k);
  }
  function w(k, C) {
    if (k.flushTimer !== null)
      (clearTimeout(k.flushTimer), (k.flushTimer = null));
    if (k.inFlight >= Rn) return;
    let L = C
        ? k.raw.length
        : k.raw.lastIndexOf(`
`) + 1,
      B = k.raw.slice(k.flushedOffset, L);
    if (!C && B === "") return;
    if (C) k.finalDispatched = !0;
    ((k.flushedOffset = L), (k.lastFlushAt = Date.now()));
    let J = k.index;
    (k.index++, I(k, J, C, stripMemoryTags(B)));
  }
  function v(k) {
    if (k.flushTimer !== null) return;
    if (k.inFlight >= Rn) return;
    if (
      k.raw.lastIndexOf(`
`) +
        1 <=
      k.flushedOffset
    )
      return;
    let L = Date.now() - k.lastFlushAt;
    if (L >= vn) {
      w(k, !1);
      return;
    }
    k.flushTimer = setTimeout(
      (B, J) => {
        if (((B.flushTimer = null), !B.finalized && !B.abandoned)) J(B, !1);
      },
      vn - L,
      k,
      w,
    );
  }
  function T(k) {
    if (((k.abandoned = !0), k.flushTimer !== null))
      (clearTimeout(k.flushTimer), (k.flushTimer = null));
    k.abortController.abort();
  }
  return {
    newTurn() {
      if (p && !p.finalized) T(p);
      ((p = null), (c = Ke()));
    },
    begin(k) {
      if (p && !p.finalized) T(p);
      if (!hasHookForEvent("MessageDisplay", t, e.id)) {
        ((p = null), o(null));
        return;
      }
      ((p = {
        apiMessageId: k,
        messageId: Ke(),
        turnId: c,
        raw: "",
        flushedOffset: 0,
        index: 0,
        output: "",
        appendChain: Promise.resolve(),
        lastFlushAt: 0,
        flushTimer: null,
        inFlight: 0,
        abortController: new AbortController(),
        finalized: !1,
        finalDispatched: !1,
        done: !1,
        abandoned: !1,
        stats: {
          totalDurationMs: 0,
          maxDurationMs: 0,
          errorCount: 0,
          summaryEmitted: !1,
        },
      }),
        o(""));
    },
    delta(k) {
      if (p === null || p.finalized) return;
      ((p.raw += k), v(p));
    },
    entryLanded(k) {
      Tn(getMemoryCitationTracker.of(e), k, "repl");
      let C = p;
      if (C === null || C.apiMessageId !== k.message.id) return;
      if (C.raw === "" || !k.message.content.some((L) => L.type === "text"))
        return;
      ((C.done = !0), _(C), o(""));
    },
    finalize() {
      let k = p;
      if (k === null) return;
      if (
        ((k.finalized = !0), (p = null), o(null), k.raw === "" && k.index === 0)
      )
        return;
      ((k.done = !0), w(k, !0), _(k));
    },
  };
}
function Tn(e, t, o) {
  for (let r of t.message.content) {
    let s =
      r.type === "text"
        ? { name: "text", source: r.text }
        : r.type === "thinking"
          ? { name: "thinking", source: r.thinking }
          : null;
    if (s === null) continue;
    let d = getMemoryTagStats(s.source);
    if (d.openTagCount === 0 && d.closeTagCount === 0) continue;
    let c = collectMemoryCitationMetrics(s.source, (p) => e.citedStatus(p));
    logEvent("tengu_cc_memory_tag_stripped", {
      surface: fromEnum(s.name),
      seam: fromEnum(o),
      open_tag_count: d.openTagCount,
      close_tag_count: d.closeTagCount,
      tagged_content_chars: d.taggedContentChars,
      block_chars: s.source.length,
      memory_file_count: d.memoryFileCount,
      missing_filenames_attr: d.missingFilenamesAttr,
      open_tag_chars_bucket: d.openTagCharsBucket,
      cited_resolved_count: c.resolved,
      cited_unknown_count: c.unknown,
      cited_read_count: c.read,
      cited_written_count: c.written,
      cited_injected_body_count: c.injectedBody,
      cited_surfaced_count: c.surfaced,
      cited_listed_count: c.listed,
      request_id: sanitizeAnalyticsId(t.requestId),
      messageID: sanitizeAnalyticsId(t.message.id),
    });
  }
}
function pruneDisplayedMessageContent(e, t) {
  if (Object.keys(e.displayedMessageContent).length === 0) return e;
  let o = new Set();
  for (let d of t) if (d.type === "assistant") o.add(d.message.id);
  let r = {},
    s = !1;
  for (let [d, c] of Object.entries(e.displayedMessageContent))
    if (o.has(d)) r[d] = c;
    else s = !0;
  if (!s) return e;
  return { ...e, displayedMessageContent: r };
}
async function applyMessageDisplayHooks(e, t, o, r, s, d, c) {
  Tn(getMemoryCitationTracker.of(e), t, "sdk");
  let p = stripMemoryTagsFromContentBlocks(t.message.content),
    _ =
      p === t.message.content
        ? t
        : { ...t, message: { ...t.message, content: p } };
  if (!hasHookForEvent("MessageDisplay", r, e.id)) return _;
  let I = _.message.content
    .map((v) => (v.type === "text" ? v.text : ""))
    .join("");
  if (I === "") return _;
  let E;
  try {
    for await (let v of executeMessageDisplayHooks(
      e,
      { turnId: o, messageId: Ke(), index: 0, final: !0, delta: I },
      r,
      s,
      In,
      d,
      c,
    ))
      if (v.displayContent !== void 0) E = v.displayContent;
  } catch (v) {
    return (
      logForDebugging(
        `MessageDisplay hook failed for completed message; emitting original text: ${v instanceof Error ? v.message : String(v)}`,
        { level: "error" },
      ),
      _
    );
  }
  if (E === void 0) return _;
  let w = !0;
  return {
    ..._,
    message: {
      ..._.message,
      content: _.message.content.map((v) => {
        if (v.type !== "text") return v;
        let T = w ? E : "";
        return ((w = !1), { ...v, text: T });
      }),
    },
  };
}
var FOLLOWUP_ASK_FEATURE_FLAG = "tengu_juniper_vale",
  DEFAULT_FEEDBACK_SURVEY_CONFIG = {
    minTimeBeforeFeedbackMs: 600000,
    minTimeBetweenFeedbackMs: 3600000,
    minTimeBetweenGlobalFeedbackMs: 1e8,
    minUserTurnsBeforeFeedback: 5,
    minUserTurnsBetweenFeedback: 10,
    hideThanksAfterMs: 5000,
    onForModels: ["*"],
    probability: 0.005,
  },
  DEFAULT_SURVEY_TRANSCRIPT_ASK_CONFIG = { probability: 0 },
  DEFAULT_FOLLOWUP_ASK_CONFIG = { enabled: !1, maxChars: 500, autoDismissAfterMs: 30000 };
import { randomUUID as tr } from "crypto";
var nr = 7200000,
  TEXT_TOOL_NAMES = new Set([BRIEF_TOOL_NAME]);
function qe(e) {
  return /\S/.test(e);
}
function isNonBlankTextDelta(e) {
  return (
    e.type === "content_block_delta" &&
    e.delta.type === "text_delta" &&
    qe(e.delta.text)
  );
}
function xn(e) {
  return !e.isApiErrorMessage && e.message.model !== SYNTHETIC_MODEL_NAME;
}
function hasRenderableAssistantText(e, t) {
  if (!xn(e)) return !1;
  let { content: o } = e.message;
  if (typeof o === "string") return qe(o);
  return o.some(
    (r) =>
      (r.type === "text" && qe(r.text)) ||
      (r.type === "tool_use" && t?.has(r.name) === !0),
  );
}
function or(e) {
  return e === "tool_use" || e === "server_tool_use" || e === "mcp_tool_use";
}
function createTurnFirstTextTracker({
  queryChainId: e,
  observesUserWait: t,
  promptTiming: o,
  textToolNames: r,
  now: s = () => performance.now(),
  schedule: d = (c, p) => {
    let _ = setTimeout(c, p);
    return (_.unref?.(), () => clearTimeout(_));
  },
}) {
  let c = s(),
    p,
    _ = !1,
    I,
    E = new Map(),
    w = 0,
    v = 0,
    T,
    k = !1,
    C = [],
    L = d(() => Z("cap", void 0), nr);
  function B(O, W) {
    try {
      W();
    } catch (re) {
      logForDebugging(`tengu_turn_first_text: ${O} failed: ${l(re)}`, { level: "error" });
    }
  }
  function J(O, W) {
    let re = 0,
      q = 0;
    for (let Y of C) {
      let F = Math.min(Y.toMs ?? W, W) - Math.max(Y.fromMs, O);
      if (F > 0) ((re += F), (q += 1));
    }
    return { ms: re, count: q };
  }
  function Z(O, W) {
    if (k) return;
    ((k = !0), L());
    let re = p ?? c,
      q = T?.atMs ?? s(),
      Y = Math.max(0, Math.round(q - re)),
      F = J(re, q),
      de = T && E.get(T.messageId),
      te = de?.toolCallsBefore ?? T?.toolCallsBefore ?? 0;
    try {
      logEvent("tengu_turn_first_text", {
        first_text_wait_end: fromEnum(T ? "painted" : O),
        ...(T && {
          ttfvt_first_text_paint_ms: Y,
          first_text_path: fromEnum(te > 0 ? "after_tool_use" : "direct"),
          requests_before_first_text: de?.order ?? T.order,
          tool_calls_before_first_text: te,
          first_text_assistant_message_id: sanitizeAnalyticsId(T.messageId),
          first_text_request_id: sanitizeAnalyticsId(de?.requestId),
          first_text_render_path: fromEnum(T.renderPath),
        }),
        ...(t && {
          user_wait_before_first_text_ms: Math.min(Math.round(F.ms), Y),
          user_waits_before_first_text: F.count,
        }),
        queryChainId: sanitizeAnalyticsId(e),
        terminal_reason: fromEnumOpt(T ? void 0 : W),
        ...(o &&
          _ &&
          p !== void 0 && {
            prompt_submit_to_send_ms: Math.max(
              0,
              Math.round(p - o.submittedAtMs),
            ),
            prompt_queued_ms: Math.max(
              0,
              Math.round(o.dequeuedAtMs - o.submittedAtMs),
            ),
          }),
      });
    } catch (ie) {
      logForDebugging(
        `tengu_turn_first_text: analytics sink threw, event dropped: ${l(ie)}`,
        { level: "error" },
      );
    }
  }
  function ce(O) {
    if (k || !xn(O)) return;
    let { message: W, requestId: re } = O,
      q = E.get(W.id) ?? {};
    if (
      (E.set(W.id, q),
      (q.requestId ??= re ?? void 0),
      q.order === void 0 &&
        (typeof W.content === "string" ||
          W.content.some(
            (Y) => Y.type !== "thinking" && Y.type !== "redacted_thinking",
          )))
    )
      ((w += 1), (q.order = w));
    if (typeof W.content === "string") q.toolCallsBefore ??= v;
    else
      for (let Y of W.content)
        if (
          (Y.type === "text" && qe(Y.text)) ||
          (Y.type === "tool_use" && r?.has(Y.name) === !0)
        )
          q.toolCallsBefore ??= v;
        else if (or(Y.type)) v += 1;
    if (T !== void 0 && T.messageId === W.id) Z("painted", void 0);
  }
  return {
    onStreamEvent({ event: O, requestSentAtMs: W }) {
      B("stream event", () => {
        if (k || O.type !== "message_start") return;
        if (p === void 0) ((p = W ?? c), (_ = W !== void 0));
        if (T !== void 0 && T.messageId !== O.message.id) {
          Z("painted", void 0);
          return;
        }
        I = O.message.id;
      });
    },
    onAssistantMessage(O) {
      B("assistant message", () => ce(O));
    },
    setUserWaiting(O) {
      B("user wait", () => {
        if (k) return;
        let W = C.at(-1);
        if (O && (W === void 0 || W.toMs !== void 0))
          C.push({ fromMs: s(), toMs: void 0 });
        else if (!O && W !== void 0 && W.toMs === void 0) W.toMs = s();
      });
    },
    markFirstTextPainted(O, W) {
      B("paint stamp", () => {
        if (k || T) return;
        let re = W ?? I;
        if (re === void 0) return;
        let q = E.get(re);
        if (
          ((T = {
            atMs: s(),
            messageId: re,
            order: q?.order ?? w + 1,
            toolCallsBefore: q?.toolCallsBefore ?? v,
            renderPath: O,
          }),
          q)
        )
          Z("painted", void 0);
      });
    },
    end(O, W = isAbortTerminalReason(O)) {
      B("settle", () => Z(W ? "interrupted" : "no_text", O));
    },
  };
}
function createTurnFirstTextObserver({ toolUseContext: e, sessionState: t }) {
  let o = tr();
  e.queryTracking = { chainId: o, depth: -1 };
  let r = createTurnFirstTextTracker({
    queryChainId: o,
    observesUserWait: t !== void 0,
    textToolNames: TEXT_TOOL_NAMES,
  });
  r.setUserWaiting(t?.userDecisionPending ?? !1);
  let s = t?.userDecisionPendingChanged.subscribe((d) => r.setUserWaiting(d));
  return {
    ...r,
    dispose() {
      s?.();
    },
  };
}
import { randomUUID as rr } from "crypto";
function markVerifiedSlackHumanTurn(e, t) {
  applyHearthRelayFields(e, t, { verifiedSlackHumanTurn: !0 });
}
function resolveMessageUuid(e, t) {
  return e || (t ? rr() : void 0);
}
function _e(e, t) {
  let o = (s) => (s === void 0 ? -1 : e.findIndex((d) => d.uuid === s)),
    r = t.next ? o(t.next.before) : e.length;
  return e.slice(o(t.before) + 1, r + 1);
}
function En(e, t) {
  try {
    let o = _e(e.getSnapshot(), t).findLast(
      (s) => s.type === "assistant" && !s.isApiErrorMessage && !s.isVirtual,
    );
    return o?.type === "assistant"
      ? joinTextBlocks(
          o.message.content,
          `
`,
        ).trim()
      : "";
  } catch (o) {
    return (
      logForDebugging("turn.complete: could not read the final message: " + ge(o).message),
      ""
    );
  }
}
function Pn(e, t) {
  let o = _e(e.getSnapshot(), t).findLast(
    (r) => r.type === "assistant" && !r.isVirtual,
  );
  return o?.type === "assistant" && o.isApiErrorMessage === !0;
}
var Fn = (e) =>
  createSystemInfoMessage(
    `${collectHookHandlers("turn.complete")
      .map((t) => getPluginDisplayName(t.name))
      .join("+")}: ${toSingleLineText(e)}`,
    "notice",
  );
var $n = (e, t, o) =>
  e
    ? { reason: "aborted" }
    : t
      ? { reason: "refusal", refusal: t }
      : { reason: o ? "error" : "answer" };
function Ln(e) {
  if (e.type === "system")
    return e.subtype === "model_refusal_no_fallback"
      ? {
          category: e.apiRefusalCategory ?? null,
          explanation: e.apiRefusalExplanation ?? null,
        }
      : void 0;
  return e.type === "assistant" &&
    e.isApiErrorMessage === !0 &&
    e.message.stop_reason === "refusal"
    ? {
        category: e.message.stop_details?.category ?? null,
        explanation: e.message.stop_details?.explanation ?? null,
      }
    : void 0;
}
function Dn(e, t) {
  try {
    return _e(e.getSnapshot(), t)
      .flatMap((o) => {
        let r = Ln(o);
        return r ? [r] : [];
      })
      .at(-1);
  } catch (o) {
    logForDebugging("turn.complete: could not read the refusal: " + ge(o).message);
    return;
  }
}
function completeTurn(e) {
  let { turnId: t, transcript: o, span: r, durationMs: s, aborted: d } = e;
  (releaseTurnAbortController(t), e.turnEvents.flushStep(t));
  let c = En(o, r),
    p = $n(d, Dn(o, r), Pn(o, r)),
    _ = turnEvents();
  e.turnEvents.enqueue("turn.complete", () =>
    _.turn
      .complete({ answer: c, durationMs: s, aborted: d, turnId: t, ...p })
      .then((I) => (I.text !== c && I.text.trim() !== "" ? [Fn(I.text)] : [])),
  );
}
import { randomUUID as gr } from "crypto";
function createTurnEventHub(e, t) {
  let o = createTurnEventTail(e),
    r = createTurnStep((s) => {
      let d = turnEvents({ signal: t() });
      o.enqueue("turn.step", () => d.turn.step(s).then(() => []));
    });
  return {
    begin: gr,
    read: r.read,
    note: r.note,
    enqueue: o.enqueue,
    flushStep: r.flush,
    settled: o.settled,
    sever: o.sever,
  };
}
function beginTurn(e) {
  let { newMessages: t, input: o, signal: r, abort: s } = e,
    d = e.turnEvents.begin();
  bindTurnAbortController({ turnId: d, abort: s });
  let c = t.findLast((E) => E.type === "user" && !E.isMeta),
    _ = (c && c.type === "user" ? getMessageContentText(c.message.content) : null) ?? o ?? "",
    I = turnEvents({ signal: r });
  return (
    e.turnEvents.enqueue("turn.start", () =>
      I.turn.start({ text: _, turnId: d }).then(() => []),
    ),
    d
  );
}
var vr = 200;
function applyMessageOp(e, t) {
  switch (t.type) {
    case "append":
      return t.messages.length === 0 ? e : [...e, ...t.messages];
    case "replace-all":
      return t.messages;
    case "remove-by-uuid": {
      let o = e.findIndex((s) => s.uuid === t.uuid);
      if (o === -1) return e;
      let r = e.slice();
      return (r.splice(o, 1), r);
    }
    case "replace-by-uuid": {
      let o = e.findIndex((r) => r.uuid === t.uuid);
      return o === -1 ? [...e, t.message] : e.with(o, t.message);
    }
    case "insert-after-uuid": {
      let o = e.findIndex((s) => s.uuid === t.uuid);
      if (o === -1 || t.messages.length === 0) return e;
      let r = e.slice();
      return (r.splice(o + 1, 0, ...t.messages), r);
    }
    case "replace-last-ephemeral-progress": {
      let o = Math.max(0, e.length - vr);
      for (let r = e.length - 1; r >= o; r--) {
        let s = e[r];
        if (s?.type !== "progress") break;
        if (
          s.parentToolUseID === t.message.parentToolUseID &&
          s.data.type === t.message.data.type
        )
          return e.with(r, t.message);
      }
      return [...e, t.message];
    }
    case "append-or-move-by-uuid":
      return upsertMessageByUuid(e, t.message);
    case "remove-uuids-and-append":
      return [...e.filter((o) => !t.excludeUuids.has(o.uuid)), t.message];
    case "update":
      return t.updater(e);
  }
}
export {
  pickStartupAnnouncement,
  serializeStartupAnnouncement,
  getFlaggedPlugins,
  markFlaggedPluginsSeen,
  clearFlaggedPlugin,
  mergeSyncedSkillsWithCommands,
  getTranscriptWatermark,
  SandboxClassifierVerdictCache,
  diffDeclaredMarketplaces,
  reconcileDeclaredMarketplaces,
  enforceDelistedPlugins,
  raiseSessionStartOnce,
  formatConversationSwitchNotice,
  formatIncompleteWatchStateNotice,
  formatHeldByLiveSessionNotice,
  logArtifactLiveSubscribeSad,
  getArmedSlugsNotMatching,
  getTranscriptFileInfo,
  runArtifactLiveRearmPrelude,
  rearmArtifactLiveInHeadlessHost,
  createDisplayTransformQueue,
  pruneDisplayedMessageContent,
  applyMessageDisplayHooks,
  restoreTaskRegistryFromTranscript,
  notifyOrphanedAgentAutoResumed,
  notifyOrphanedAgentAlreadyCompleted,
  notifyOrphanedAgentResumeFailed,
  waitForStoreCondition,
  collectPendingAgentNotifications,
  FOLLOWUP_ASK_FEATURE_FLAG,
  DEFAULT_FEEDBACK_SURVEY_CONFIG,
  DEFAULT_SURVEY_TRANSCRIPT_ASK_CONFIG,
  DEFAULT_FOLLOWUP_ASK_CONFIG,
  isDisplayableAssistantMessage,
  messageSupersedes,
  TEXT_TOOL_NAMES,
  isNonBlankTextDelta,
  hasRenderableAssistantText,
  createTurnFirstTextTracker,
  createTurnFirstTextObserver,
  markVerifiedSlackHumanTurn,
  resolveMessageUuid,
  completeTurn,
  createTurnEventTail,
  turnEventTailModule,
  createTurnStep,
  turnStepModule,
  createTurnEventHub,
  beginTurn,
  buildRateLimitEventMessage,
  createRateLimitReemitThrottle,
  buildRateLimitMirrorMetadata,
  forwardRateLimitEventToBridge,
  handleBridgeTransportRebuilt,
  forwardCurrentRateLimitsToBridge,
  buildSdkInitMessage,
  isSlashCommandInput,
  resolveCommandPriority,
  hasPendingDeferredSlackTurn,
  hasPendingVerifiedSlackTurn,
  peekCommandPreferringSlackTurn,
  dequeueCommandPreferringSlackTurn,
  getBridgeInitializeCommands,
  recordDeclaredDialogKinds,
  parseAllowedUserModel,
  getConversationModel,
  shouldInjectModelSwitchMessages,
  rejectUnrecognizedModel,
  handleSetModelRequest,
  consumeRecentTimestamp,
  applyMessageOp,
};
