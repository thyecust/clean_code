// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { cz } from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";
import { B, he, AOn, HOn, Nm, pv } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le, my, jf, Xo, Ju } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { sleep } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { AppRoot } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import { useStoreSelector } from "../../01-核心基础设施/核心工具-未归类/use-store-selector.js";
import { useAppStateSelector } from "../../01-核心基础设施/核心工具-未归类/app-state-context.js";
import { isTerminalFocused } from "../../01-核心基础设施/终端与时钟/terminal-focus-state.js";
import { useTerminalFocus, setTimeoutWithCancel } from "../../01-核心基础设施/终端与时钟/clock-and-terminal-focus.js";
import { useClock } from "../../01-核心基础设施/终端与时钟/use-clock.js";
import { useNotificationQueue } from "../../03-入口与运行时/会话UI-REPL/notification-queue.js";
import { useStorageV5Context } from "../../01-核心基础设施/核心工具-未归类/storage-v5-context.js";
import { registerCleanup, registerPreExitFlush, jsonParse, resolveSymlinkAncestry, fsSurface, readTailBytes, redactSecretsFromText, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import {
  getMainLoopModel,
  renderModelSetting,
  PEER_PROTOCOL,
  isBgSession,
  touchFleetViewHeartbeat,
  clearFleetViewHeartbeat,
  getAuthTokenSource,
  isScreenReaderModeEnabled,
  getScreenReaderEnvOverrides,
  getFeatureValue_CACHED_MAY_BE_STALE,
  saveGlobalConfig,
  getGlobalConfig,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { l, w8, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { isSafeMode } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { repeatString, pluralize, beforeFirst, firstLine, countOccurrences, CONTROL_CHARS_REGEX, ANY_CONTROL_CHAR_REGEX, normalizeWhitespace } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { getLogDisplayTitle, logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getCwd } from "../../01-核心基础设施/核心工具-未归类/cwd-context.js";
import { formatPathWithTilde } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { getProjectDir, canonicalizePath } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { isRemoteActive, findCanonicalGitRoot } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { getStringWidth, truncateToWidth, truncateStartToWidth, truncate, formatDuration, formatTokens } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { sanitizeAnalyticsId } from "../../03-入口与运行时/CLI入口-Commander/startup-profiler.js";
import { getInitialSettings, hasSkipDangerousModePermissionPrompt } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { stripAnsi } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { BULLET_OPERATOR_GLYPH, ARTIFACT_MARKER_GLYPH, parsePermissionModeOrDefault, getPermissionModeIndicator, getPermissionModeSymbol, getPermissionModeColor } from "../权限系统/chunk-e4pfvp7x.js";
import { getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { stripTrailingPunctuation } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { isGitLabMergeRequestUrl } from "../工作树-Git/git-repository-detection.js";
import { remoteRowId, sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { oa, iee, oDt } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { getEraseScreenSequence, eraseViewportInPlace, cDt, Nat, uF, qA } from "../../00-第三方库/_未识别/chunk-hm8z9h7j.js";
import { useStdin } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { isFullscreenEnabled } from "../终端环境探测-TUI-tmux/终端环境探测-TUI-tmux.5pkb0sjc.js";
import { Box, Text, Link, useAnimationFrame, useInterval, startClockInterval, useSelection, useTerminalTitle, useTimeout, createRoot } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { formatOscSequence, OSC_CODES } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { getInkInstanceRegistry } from "../多会话视图-Fleet/ink-instance-registry.js";
import { useKeybindingContext } from "../键位绑定-Keybindings/keybinding-context.js";
import { DEFAULT_KEYBINDINGS, formatKeybindingChordForPlatform, expandKeybindingBlocks, getKeybindingPlatform, findActionForKeyAcrossContexts, normalizeKeyEvent } from "../键位绑定-Keybindings/键位绑定-Keybindings.sanfja6a.js";
import { ASK_USER_QUESTION_TOOL_NAME } from "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import {
  isCommandEnabled,
  findCommand,
  countLineBreaks,
  formatPastedTextPlaceholder,
  formatImagePlaceholder,
  parsePastedPlaceholders,
  expandPastedContents,
  MAX_PASTED_TEXT_CHARS,
  findLatestPasteExpansion,
  listGitWorktrees,
  getEnabledModelOptions,
  buildSkillNameInfo,
  registerPasteIdCarrier,
  mintPastedContentId,
  isSkillOff,
  getPullRequestDisplayStatus,
  fetchPrStatusByUrl,
  formatPrUrlWithTemplate,
  fetchPrStatusBatch,
  persistPrStatusCache,
  loadPrStatusCache,
  shouldAutoConnectIde,
  discoverIde,
  cancelIdeSearch,
  getImageLimitsForModel,
  formatAskUserQuestionNeeds,
  formatNeedsText,
  listRepoWorktrees,
  awaitPolicyColdStart,
  isMcpServerBlockedAtConnectTime,
  loadSameRepoMessageLogs,
  EXIT_COMMAND_NAMES,
  builtInCommandNames,
  getBuiltinCommands,
  meetsAvailabilityRequirement,
  getCommands,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { parseEffortArgValue } from "../权限系统/chunk-t3b7pg2x.js";
import { EXIT_PLAN_MODE_TOOL_NAME_ALIAS } from "../计划模式-Plan/计划模式-Plan.e5mh1avy.js";
import { isCrossSessionMessagingEnabled } from "../跨会话消息-UDS/chunk-rfb3s38d.js";
import { sendControlToUdsSocket, listAllLiveSessions } from "../跨会话消息-UDS/chunk-ddtmwhn7.js";
import { AGENT_COLOR_THEME_KEYS, isAgentColorName } from "../多会话视图-Fleet/agent-color-palette.js";
import { isAgentSwarmsEnabled } from "../Teammates团队/agent-swarms-enablement.js";
import {
  UNGROUPED,
  EARLIER,
  isReservedGroupName,
  sanitizeGroupName,
  getJobDir,
  watchJobDirOnce,
  writeStateAtomic,
  readJobState,
  syncJobName,
  writeSortOrder,
  writeStateSortOrder,
  writeJobGroup,
  withSortOrderLock,
  writeJobPinned,
  listJobs,
  markCrashed,
  SEED_DETAIL,
  IDLE_NEEDS,
  IDLE_DETAIL,
  makeInitialState,
  adoptRosterOrphans,
  terminalOutcome,
  isSettled,
  isExecLaunch,
  isLocalDaemonAgent,
  spawnOrigin,
  jobMatchesCwd,
  isLoopJob,
  isSelfDriving,
  clipWithEllipsis,
} from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import { isPastSessionsExperimentEnabled, AGENT_VIEW_RELAUNCH_ENV_KEY } from "../多会话视图-Fleet/agent-view-feature-gates.js";
import { useVoiceSelector, useVoiceGetState } from "../语音-音频/voice-state-provider.js";
import { openDaemonLease } from "../守护服务-Daemon/chunk-9fpz6abc.js";
import { showScreen } from "../../00-第三方库/_未识别/chunk-cq8x5zt4.js";
import {
  claimAttachBeacon,
  releaseAttachBeacon,
  formatUnpushedCommitsSummary,
  formatUnpushedCommitsDetail,
  killJob,
  listAliveDaemonJobs,
  applyReplyPatch,
  REPLY_ENOJOB_MSG,
  REPLY_PEER_NO_SOCK_MSG,
  isReplyDaemonRestartingMsg,
  replyToJob,
  attachJob,
  formatKeptWorktreeLabel,
  deleteJob,
  CLAUDE_AGENT_TEMPLATE,
  resolveAgentTemplate,
  listCustomAgents,
  findChildRepos,
  materializePastedImages,
  setDispatchExtraArgs,
  getDispatchExtraArgs,
  dispatchAgentJob,
  isAgentViewBashModeEnabled,
  dispatchExecJob,
  areDefaultsEqual,
  getSpareJob,
  markSpareJobReady,
  ensureSpareJob,
  claimSpareJob,
  discardSpareJob,
  respawnJob,
  preSeedReplBgJob,
  spawnBgSession,
} from "../后台任务-Shell管理/chunk-xmxjyg29.js";
import { relaunchClaudeCode } from "../../01-核心基础设施/核心工具-进程与信号/session-relaunch.js";
import { saveJobDraft, writeJobDraft, writeJobDraftSync, deleteJobDraft, readJobDraft, sweepStaleJobDrafts } from "../后台任务-Shell管理/job-drafts.js";
import { CCR_LIST_TARGET_VISIBLE } from "../会话-历史-恢复/chunk-ds47w88s.js";
import { registerBuiltinPlugins, registerAllBundledSkills } from "../Skills技能/Skills技能.dpy2ket5.js";
import { getBaseRenderOptions } from "../../01-核心基础设施/UI组件-TUI/base-render-options.js";
import { hasTeammateModeSnapshot, captureTeammateModeSnapshot } from "../Teammates团队/chunk-88ybhavr.js";
import { createFleetViewHost, useAttachFleetOwners } from "../多会话视图-Fleet/chunk-6nr84z8c.js";
import { DotSeparatedList, useDoublePressConfirm } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import { FleetViewScreen } from "../多会话视图-Fleet/fleet-view-screen.js";
import { useFocusTrap, getSpinnerFrames, getSpinnerPingPongFrames, usePasteHandler } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { useTerminalSize } from "../../01-核心基础设施/UI组件-TUI/use-terminal-size.js";
import {
  SuggestionList,
  useVimModeInput,
  SearchInput,
  createSelectionKeyDownHandler,
  useSelectionClearKeybinding,
  buildSelectionCopiedNotification,
  useCopyOnSelect,
  useSelectionBackgroundColor,
  truncatePathSegments,
  getFooterInfo,
  useIdeAtMentionNotification,
  formatAtMention,
  useVoiceAvailable,
  useVoiceComposer,
  useVoiceKeybindings,
  VoiceStatusIndicator,
  VoiceCursorChar,
  VoiceWarmupHint,
  AutoUpdaterWrapper,
  CurrentNotification,
} from "../Vim模式/Vim模式.nnewe0gf.js";
import { ScrollBox } from "../../03-入口与运行时/会话UI-REPL/scroll-box.js";
import { DiffStatLabel, PullRequestBadge } from "../GitHub集成/chunk-bfz9rjjm.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { shouldReduceMotion } from "../../01-核心基础设施/UI组件-TUI/chunk-dsg6bce8.js";
import { editTextInExternalEditor } from "../../03-入口与运行时/会话UI-REPL/external-editor.js";
import { resolveLauncher } from "../Teammates团队/update-command.js";
import { ClawdMascot } from "../../03-入口与运行时/会话UI-REPL/clawd-mascot.js";
import { SESSION_LIVE_ELSEWHERE_MESSAGE } from "../../01-核心基础设施/核心工具-未归类/session-live-elsewhere.js";
import { BackgroundText } from "../../01-核心基础设施/UI组件-TUI/background-text.js";
import { showNotification } from "../通知-Notifications/通知-Notifications.g4xng0pg.js";
import { LinkifiedText } from "../../01-核心基础设施/UI组件-TUI/linkified-text.js";
import { toLocalFileUrl } from "../../01-核心基础设施/核心工具-路径与平台/to-local-file-url.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { trySetRawMode } from "../终端环境探测-TUI-tmux/try-set-raw-mode.js";
import { openHyperlink } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import { fromJobState } from "../守护服务-Daemon/chunk-tpraq69b.js";
import { buildDraftText, getDraftMode, getDraftValue, isBashModeShortcut } from "../../01-核心基础设施/核心工具-未归类/bash-mode-draft-text.js";
import { Nl, re, E, dn, V, pk, C, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { createHoverRestOptions, resolveTranscriptLocator } from "../../01-核心基础设施/核心工具-未归类/hover-rest-transcript.js";
import { LARGE_PASTE_CHAR_THRESHOLD, readClipboardImage } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { isBypassPermissionsModeDisabled } from "../权限系统/bypass-permissions-mode-policy.js";
import { getGraphemeSegmenter, countGraphemes, splitGraphemes } from "../../01-核心基础设施/核心工具-日期与本地化/intl-text-utils.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { countMatching, dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
import { randomUUID as pu } from "crypto";
import { resolve } from "path";
function qu() {
  return !1;
}
async function zu() {
  return [];
}
function Yu(s) {
  let { state: c, tempo: m } = Eh(s.worker_status),
    b = s.config?.sources?.find((R) => R.type === "git_repository")?.url,
    k = s.title ?? "",
    w =
      s.worker_status === "requires_action"
        ? s.external_metadata?.pending_action
        : void 0,
    v =
      s.worker_status === "requires_action"
        ? w?.tool_name === ASK_USER_QUESTION_TOOL_NAME
          ? formatAskUserQuestionNeeds(w.input).text
          : w?.tool_name === EXIT_PLAN_MODE_TOOL_NAME_ALIAS
            ? "approve plan"
            : typeof w?.tool_name === "string" &&
                typeof w.action_description === "string" &&
                w.action_description !== ""
              ? formatNeedsText(
                  `approve ${typeof w.display_tool_name === "string" && w.display_tool_name !== "" ? w.display_tool_name : w.tool_name}: ${w.action_description}`,
                )
              : "awaiting input"
        : void 0;
  return {
    state: c,
    detail: k,
    tempo: m,
    needs: v,
    output: null,
    children: null,
    linkScanOffset: 0,
    template: "remote",
    respawnFlags: [],
    name: k || void 0,
    intent: k || s.id,
    sessionId: s.id,
    cwd: b ?? "remote",
    originCwd: b ?? "remote",
    createdAt: s.created_at,
    updatedAt: s.last_event_at ?? s.created_at,
    firstTerminalAt: null,
    backend: "remote",
  };
}
function Qu(s, c) {
  let m = new Set(c.map((w) => sessionIdBody(w.state.sessionId))),
    b = s.filter(
      (w) =>
        w.id.startsWith("remote-pending-") && !m.has(sessionIdBody(w.state.sessionId)),
    ),
    k = [...c, ...b];
  return s.length === k.length &&
    s.every(
      (w, v) =>
        w.id === k[v].id &&
        w.activity === k[v].activity &&
        Ch(w.state, k[v].state),
    )
    ? s
    : k;
}
function Ch(s, c) {
  let m = Object.keys(s);
  if (m.length !== Object.keys(c).length) return !1;
  return m.every((b) => {
    let k = s[b],
      w = c[b];
    if (k === w) return !0;
    return (
      typeof k === "object" &&
      typeof w === "object" &&
      k !== null &&
      w !== null &&
      Bun.deepEquals(k, w)
    );
  });
}
function Eh(s) {
  switch (s) {
    case "requires_action":
      return { state: "blocked", tempo: "blocked" };
    case "idle":
      return { state: "done", tempo: "idle" };
    default:
      return { state: "working", tempo: "active" };
  }
}
var xh = 200;
function Ei() {
  return { notified: new Map() };
}
function Xu(s, c, m) {
  return {
    attach_kind: !c
      ? S("no_origin")
      : s === c
        ? S("origin_return")
        : S("other"),
    is_first_attach_of_visit: m === 0,
  };
}
function Zu(s, c, m, b) {
  let k = s.notified.get(c);
  if (k?.kind === m) return !1;
  if (!k && s.notified.size >= xh) {
    let w = s.notified.keys().next().value;
    if (w !== void 0) s.notified.delete(w);
  }
  return (s.notified.set(c, { kind: m, at: b }), !0);
}
function xi(s, c, m) {
  let b = s.notified.get(c);
  if (!b) return;
  return (
    s.notified.delete(c),
    { ms_since_notification: Math.max(0, m - b.at), notified_kind: fromEnum(b.kind) }
  );
}
function ec(s) {
  let c = s?.agent ?? getInitialSettings().agent;
  if (!s && !c) return;
  let m = s?.permissionMode ? parsePermissionModeOrDefault(s.permissionMode) : void 0,
    b = !isBypassPermissionsModeDisabled() && (hasSkipDangerousModePermissionPrompt() || Boolean(getGlobalConfig().bypassPermissionsModeAccepted)),
    k = m === "bypassPermissions" && !b ? void 0 : m,
    w = s?.allowBypass && b ? !0 : void 0,
    v = s?.effort ? parseEffortArgValue(s.effort).level : void 0;
  if (!k && !s?.model && !v && !c && !w) return;
  return {
    permissionMode: k,
    permissionModeInherited: k ? s?.permissionModeInherited : void 0,
    model: s?.model,
    effort: v,
    agent: c,
    allowBypass: w,
  };
}
function wa(s) {
  return (
    (!!s.permissionMode && s.permissionMode !== "default") ||
    !!s.model ||
    !!s.effort ||
    !!s.agent ||
    !!s.allowBypass
  );
}
function Fi(vS) {
  let Sr = _(17),
    { defaults: RS } = vS,
    {
      permissionMode: Mn,
      model: Ii,
      effort: Pi,
      agent: Ai,
      allowBypass: _S,
    } = RS,
    Oi = !!Mn && Mn !== "default",
    pa = _S && !Oi;
  if (!Oi && !Ii && !Pi && !Ai && !pa) {
    return null;
  }
  let fa;
  if (Sr[0] !== Mn || Sr[1] !== Oi)
    ((fa = Oi && r(Text, { color: getPermissionModeColor(Mn), children: [getPermissionModeSymbol(Mn), " ", getPermissionModeIndicator(Mn)] })),
      (Sr[0] = Mn),
      (Sr[1] = Oi),
      (Sr[2] = fa));
  else fa = Sr[2];
  let ma;
  if (Sr[3] !== pa)
    ((ma =
      pa &&
      r(Text, {
        color: getPermissionModeColor("bypassPermissions"),
        children: [getPermissionModeSymbol("bypassPermissions"), " bypass available"],
      })),
      (Sr[3] = pa),
      (Sr[4] = ma));
  else ma = Sr[4];
  let ga;
  if (Sr[5] !== Ai)
    ((ga = Ai && r(Text, { dimColor: !0, children: ["@", Ai] })),
      (Sr[5] = Ai),
      (Sr[6] = ga));
  else ga = Sr[6];
  let ha;
  if (Sr[7] !== Ii)
    ((ha = Ii && e(Text, { dimColor: !0, children: Ii })),
      (Sr[7] = Ii),
      (Sr[8] = ha));
  else ha = Sr[8];
  let ba;
  if (Sr[9] !== Pi)
    ((ba = Pi && e(Text, { dimColor: !0, children: Pi })),
      (Sr[9] = Pi),
      (Sr[10] = ba));
  else ba = Sr[10];
  let Ih;
  if (
    Sr[11] !== fa ||
    Sr[12] !== ma ||
    Sr[13] !== ga ||
    Sr[14] !== ha ||
    Sr[15] !== ba
  )
    ((Ih = r(DotSeparatedList, { children: [fa, ma, ga, ha, ba] })),
      (Sr[11] = fa),
      (Sr[12] = ma),
      (Sr[13] = ga),
      (Sr[14] = ha),
      (Sr[15] = ba),
      (Sr[16] = Ih));
  else Ih = Sr[16];
  return Ih;
}
function tc(s, c) {
  return isLocalDaemonAgent(s.state) && s.id !== c;
}
function oc(s, c) {
  let m = c ?? "unknown";
  ((s.entryChannel = fromEnum(m)), (s.openFinished = null));
}
function nc(s, c, m = logEvent) {
  let b = c.now ?? Date.now();
  if (s.openFinished === null)
    s.openFinished = new Set(c.allFinished.map((w) => w.id));
  let k = s.openFinished;
  for (let w of c.visibleFinished) {
    if (s.emitted.has(w.id)) continue;
    s.emitted.add(w.id);
    let v = Ln(w.state.firstTerminalAt),
      R = v ?? Ln(w.state.updatedAt) ?? b;
    m("tengu_bg_result_seen", {
      trigger: k.has(w.id) ? S("list_open") : S("render"),
      outcome: fromEnumOpt(terminalOutcome(w.state.state)),
      overlap: Ph(w, c.allCandidates, b),
      entry_channel: s.entryChannel,
      seen_latency_ms: Math.max(0, b - R),
      terminal_at_missing: v === null,
      jobSessionId: sanitizeAnalyticsId(w.state.sessionId),
    });
  }
}
function Ln(s) {
  if (!s) return null;
  let c = Date.parse(s);
  return Number.isNaN(c) ? null : c;
}
function Ph(s, c, m) {
  let b = Ln(s.state.createdAt);
  if (b === null) return !1;
  let k = Ln(s.state.firstTerminalAt) ?? m;
  return c.some((w) => {
    if (w.id === s.id) return !1;
    let v = Ln(w.state.createdAt);
    if (v === null) return !1;
    let R = Ln(w.state.firstTerminalAt) ?? m;
    return b < R && v < k;
  });
}
function rc(s) {
  let c = new Date(s.startedAt).toISOString(),
    m = new Date(s.updatedAt ?? s.startedAt).toISOString();
  return {
    state: s.state ?? s.status ?? "running",
    detail: s.detail ?? s.waitingFor ?? "",
    tempo:
      s.tempo ??
      (s.status === "busy"
        ? "active"
        : s.status === "waiting"
          ? "blocked"
          : "idle"),
    needs: s.needs,
    output: null,
    children: null,
    linkScanOffset: 0,
    template: s.agent ?? s.entrypoint ?? "interactive",
    respawnFlags: [],
    name: s.name,
    intent: s.name ?? "",
    sessionId: s.sessionId ?? "",
    cwd: s.cwd,
    originCwd: s.cwd,
    createdAt: c,
    updatedAt: m,
    firstTerminalAt: null,
    backend: "peer",
    sock: s.sock,
    pid: s.pid,
  };
}
function ic(s, c) {
  if (s) {
    if (c < 30000) return 15000;
    if (c < 300000) return 60000;
    return 180000;
  }
  if (c < 30000) return 60000;
  if (c < 600000) return 300000;
  if (c < 3600000) return 900000;
  return 1800000;
}
import { stat as Ah } from "fs/promises";
async function Mi(s, c) {
  let m = resolveTranscriptLocator(s, c);
  if (m !== void 0) {
    let k = await m.backend.statMeta(m.key);
    if (k.ok) return { kind: "present", mtimeMs: k.value.mtimeMs };
    let w = k.error;
    if (w.code === "NotFound") return { kind: "absent" };
    let v = "telemetryCode" in w ? w.telemetryCode : void 0;
    return v === "ELOOP" || v === "ENXIO"
      ? { kind: "refused" }
      : { kind: "unreadable", code: w.code };
  }
  return { kind: "present", mtimeMs: (await Ah(s)).mtimeMs };
}
async function sc(s, c, m) {
  let b = resolveTranscriptLocator(s, m);
  if (b !== void 0) {
    let k = await b.backend.read([{ key: b.key, tail: c }]);
    if (!k.ok)
      throw Error("fleet view transcript tail read failed", { cause: k.error });
    let w = k.value.items[0];
    if (!w.found) throw Error("fleet view transcript tail: stream not found");
    return {
      content: Buffer.from(w.value).toString("utf8"),
      bytesRead: w.value.byteLength,
      bytesTotal: w.totalBytes,
    };
  }
  return readTailBytes(s, c);
}
import { open as Th } from "fs/promises";
var Dh = 7,
  Fh = 1048576,
  ya = 16,
  Mh = '"subtype":"scheduled_task_fire"',
  Lh = /"timestamp":"([^"]+)"/;
function ac() {
  return { scanStates: new Map(), inFlightScans: new Set() };
}
async function lc(s, c) {
  let { scanStates: m, inFlightScans: b } = s;
  if (b.has(c)) return null;
  b.add(c);
  try {
    let k = await Th(c, "r");
    try {
      let { size: w, ino: v } = await k.stat(),
        R = m.get(c);
      if (R && (R.ino !== v || R.offset > w)) R = void 0;
      if (R && R.tail.length > 0) {
        let K = Buffer.alloc(R.tail.length),
          { bytesRead: J } = await k.read(K, 0, K.length, R.offset - K.length);
        if (J !== K.length || !K.equals(R.tail)) R = void 0;
      }
      if (!R)
        ((R = {
          ino: v,
          offset: 0,
          tail: Buffer.alloc(0),
          count: 0,
          recent: [],
        }),
          m.set(c, R));
      if (w > R.offset) {
        let K = R.count,
          J = R.recent.slice(),
          j = Buffer.alloc(Math.min(Fh, w - R.offset)),
          ne = null,
          se = R.offset,
          oe = R.offset,
          X = R.tail;
        while (se < w) {
          let { bytesRead: de } = await k.read(
            j,
            0,
            Math.min(j.length, w - se),
            se,
          );
          if (de <= 0) break;
          let ce = j.subarray(0, de),
            Ie = ne ? ne.length : 0,
            ge = ne ? Buffer.concat([ne, ce]) : ce,
            ke = 0,
            Ce = ge.indexOf(10, Ie);
          while (Ce !== -1) {
            let be = ge.toString("utf-8", ke, Ce);
            if (be.includes(Mh)) {
              let le = be.match(Lh),
                Fe = le ? Date.parse(le[1]) : NaN;
              if (Number.isFinite(Fe)) {
                if ((K++, J.push(Fe), J.length > Dh)) J.shift();
              }
            }
            ((ke = Ce + 1), (Ce = ge.indexOf(10, ke)));
          }
          if (((oe += ke), (se += de), ke >= ya))
            X = Buffer.from(ge.subarray(ke - ya, ke));
          else if (ke > 0) {
            let be = Buffer.concat([X, ge.subarray(0, ke)]);
            X = be.subarray(Math.max(0, be.length - ya));
          }
          ne = ke < ge.length ? Buffer.from(ge.subarray(ke)) : null;
        }
        if (oe > R.offset)
          ((R.offset = oe), (R.count = K), (R.recent = J), (R.tail = X));
      }
      let { count: O, recent: W } = R;
      if (W.length < 2) return { count: O, nextAt: null };
      let A = [];
      for (let K = 1; K < W.length; K++) A.push(W[K] - W[K - 1]);
      A.sort((K, J) => K - J);
      let I = A[Math.floor(A.length / 2)],
        q = W.at(-1) + I;
      return { count: O, nextAt: q > Date.now() ? q : null };
    } finally {
      await k.close();
    }
  } finally {
    b.delete(c);
  }
}
function dc(s, c) {
  for (let m of s.scanStates.keys()) if (!c.has(m)) s.scanStates.delete(m);
}
import { join as Jh } from "path";
function Bh(s) {
  try {
    let c = jsonParse(s);
    if (c.type === "assistant") {
      let b = (c.message?.content ?? []).find((k) => k.type === "text")?.text;
      if (b) return b;
    }
    if (c.type === "user") {
      let m = c.message?.content,
        b = typeof m === "string" ? m : m?.find((w) => w.type === "text")?.text,
        k = b
          ? uc(b)
              .split(
                `
`,
              )
              .find((w) => w.trim())
              ?.trim()
          : void 0;
      if (k) return `> ${k}`;
      if (Array.isArray(m)) {
        let w = m.find((v) => v.type === "tool_result" && v.is_error);
        if (w) {
          let v =
            typeof w.content === "string"
              ? w.content
              : w.content?.find((R) => R.type === "text")?.text;
          if (v) return `\u2717 ${firstLine(v)}`;
        }
      }
    }
  } catch {}
  return null;
}
function uc(s) {
  return s.replace(
    /<(system-reminder|task-notification)>[\s\S]*?(<\/\1>|$)/g,
    " ",
  );
}
function vr(s) {
  return s === SEED_DETAIL || s === IDLE_DETAIL;
}
function Nt(s) {
  return uc(stripAnsi(s))
    .replace(/<\/?[\w-]+>/g, " ")
    .replace(CONTROL_CHARS_REGEX, "")
    .replace(/\s+/g, " ")
    .trim();
}
function Li(s) {
  return Jh(getProjectDir(s.cwd), `${s.sessionId}.jsonl`);
}
async function cc(s, c) {
  try {
    let { content: m } = await sc(Li(s.state), 16384, c),
      b = m
        .split(
          `
`,
        )
        .map(Bh)
        .filter((w) => w !== null);
    return (b.filter((w, v) => w !== b[v - 1]).at(-1) ?? "").trim();
  } catch {
    return "";
  }
}
function Ji(s, c) {
  let m;
  for (let b of s.keys()) if (!c.has(b)) (m ??= new Map(s)).delete(b);
  return m ?? s;
}
function Uo(s) {
  return s?.filter((c) => !ANY_CONTROL_CHAR_REGEX.test(c.href)) ?? [];
}
function Co(s, c) {
  let m = terminalOutcome(s.state);
  if (m && s.tempo !== "active" && !(m === "success" && isSelfDriving(s))) return m;
  let b = Uo(s.children).filter((v) => v.kind !== "frame");
  if (
    c &&
    s.tempo !== "active" &&
    s.template === CLAUDE_AGENT_TEMPLATE.name &&
    b.length &&
    b.every((v) => c.get(v.href)?.state === "MERGED")
  )
    return "success";
  let k = s.tempo === "active" ? 1 : 5,
    w = Date.now() - Date.parse(s.updatedAt);
  if (w < k * 3 * 60000) return "flowing";
  if (w < k * 15 * 60000) return "slowing";
  return "stuck";
}
function lo(s, c) {
  if (c === "busy") return "active";
  if (isSettled(s) && !(terminalOutcome(s.state) === "success" && isSelfDriving(s))) return "completed";
  if (s.tempo === "blocked" || c === "waiting") return "blocked";
  return "active";
}
var hn = ["review", "blocked", "working", "done"],
  uo = {
    review: "Ready for review",
    blocked: "Needs input",
    working: "Working",
    done: "Completed",
  },
  Sa = {
    review: "",
    blocked: "Sessions that have a question or need your decision land here",
    working:
      "Sessions Claude is actively working on \u2014 they keep running even if you close the terminal",
    done: "Finished sessions wait here for you to review",
  };
function pc(s) {
  return s > 0 ? `${s} awaiting input \xB7 claude agents` : "claude agents";
}
function Bi(s, c, m) {
  if (m === "busy") return "working";
  if (s.activity === "failure") return "done";
  if (s.activity === "stopped") return "done";
  if (m === "waiting") return "blocked";
  if (
    !isSelfDriving(s.state) &&
    Uo(s.state.children).some((k) => {
      let w = c?.get(k.href);
      if (w?.state !== "OPEN") return !1;
      let v = getPullRequestDisplayStatus(w);
      return v === "error" || (v === "warning" && w.review !== "APPROVED");
    })
  )
    return "review";
  if (s.activity === "success") return "done";
  if (s.state.tempo === "blocked") return "blocked";
  return "working";
}
function Ni(s) {
  let c = terminalOutcome(s.state);
  return (c === "failure" || c === "stopped") && isSettled(s) && !isExecLaunch(s);
}
function Rr(s) {
  return `job:${s}`;
}
function fc(s, c) {
  return s.get(c.state.resumeSessionId ?? c.state.sessionId) ?? s.get(Rr(c.id));
}
function mc(s, c, m) {
  let {
      byState: b,
      byGroup: k,
      onRemoteTab: w,
      launcherGroup: v,
      scopedFallbackOrigin: R,
      doneFoldAt: O,
      emptyBucketHint: W,
      earlier: A = [],
    } = m,
    I = [];
  if (b && W) {
    let X = 0,
      de = 0,
      ce = b && !w ? A : [];
    for (let ge of hn) {
      let ke = s.filter((Ce) => c.get(Ce.id) === ge);
      if (ge === "review" && ke.length === 0) continue;
      I.push({ kind: "header", origin: R, group: ge });
      for (let Ce of ke) {
        if (ge === "done") {
          while (de < ce.length && ce[de].modified.getTime() > ka(Ce.state)) {
            if (X++ < O)
              I.push({
                kind: "earlier",
                entry: ce[de],
                origin: R,
                group: "done",
              });
            de++;
          }
          if (X++ >= O) continue;
        }
        I.push({ kind: "job", job: Ce, origin: spawnOrigin(Ce.state), group: ge });
      }
      if (ge === "done")
        while (de < ce.length) {
          if (X++ < O)
            I.push({
              kind: "earlier",
              entry: ce[de],
              origin: R,
              group: "done",
            });
          de++;
        }
    }
    let Ie = Math.max(0, X - O);
    if (Ie > 0) I.push({ kind: "fold", origin: R, group: "done", hidden: Ie });
    return { rows: I, doneCount: X, doneFoldHidden: Ie, foldGroup: "done" };
  }
  let q = !b && !k && !w && !s.some((X) => c.get(X.id) === v),
    K = 0,
    J = b && !w ? A : [],
    j = 0,
    ne = (X) => {
      if (K++ >= O) return;
      I.push(X);
    };
  for (let X = 0; X < s.length; X++) {
    let de = s[X],
      ce = c.get(de.id),
      Ie = spawnOrigin(de.state);
    if (X === 0 || ce !== c.get(s[X - 1].id)) {
      if (q && ce !== "pinned")
        (I.push({ kind: "header", origin: R, group: v }), (q = !1));
      let ge = b || k || ce === "pinned" || ce === v ? R : Ie;
      I.push({ kind: "header", origin: ge, group: ce });
    }
    if (ce === "done") {
      while (j < J.length && J[j].modified.getTime() > ka(de.state))
        (ne({ kind: "earlier", entry: J[j], origin: R, group: "done" }), j++);
      ne({ kind: "job", job: de, origin: Ie, group: ce });
      continue;
    }
    I.push({ kind: "job", job: de, origin: Ie, group: ce });
  }
  if (j < J.length) {
    if (K === 0) I.push({ kind: "header", origin: R, group: "done" });
    while (j < J.length)
      (ne({ kind: "earlier", entry: J[j], origin: R, group: "done" }), j++);
  }
  if (q && s.length > 0) I.push({ kind: "header", origin: R, group: v });
  let se = !b && !w ? A : [];
  if (se.length > 0) {
    I.push({ kind: "header", origin: R, group: EARLIER });
    let X = Math.max(0, Math.min(O, se.length));
    for (let ce of se.slice(0, X))
      I.push({ kind: "earlier", entry: ce, origin: R, group: EARLIER });
    let de = se.length - X;
    if (de > 0) I.push({ kind: "fold", origin: R, group: EARLIER, hidden: de });
    return { rows: I, doneCount: se.length, doneFoldHidden: de, foldGroup: EARLIER };
  }
  let oe = K > O ? K - O : 0;
  if (oe > 0) I.push({ kind: "fold", origin: R, group: "done", hidden: oe });
  return { rows: I, doneCount: K, doneFoldHidden: oe, foldGroup: "done" };
}
function gc(s, c) {
  let m = s[1];
  if (m?.kind === "job" && m.origin === c) return 1;
  if (m?.kind === "earlier") return 1;
  let b = s.findIndex((k) => k.kind === "earlier");
  return b !== -1 && !s.some((k) => k.kind === "job") ? b : 0;
}
var va = 3,
  Hi = 3,
  Nh = 60000,
  Hh = 8,
  Ra = 4,
  Gh = 2;
function Vi(s, c) {
  let m = (k) => s - Hh - k - c,
    b = m(Ra);
  if (b >= va) return { doneCap: b, compactHeader: !1 };
  return { doneCap: Math.max(0, m(Gh)), compactHeader: !0 };
}
function Ui(s) {
  if (s.backend === "remote") return spawnOrigin(s);
  let c = spawnOrigin(s);
  return findCanonicalGitRoot(c) ?? c;
}
function _a(s) {
  return formatPathWithTilde(s);
}
function Gi(s) {
  return s.sortOrder ?? Date.parse(s.createdAt);
}
function Jn(s, c) {
  return (
    s.stateSortOrder ??
    Date.parse(
      c === "done"
        ? (s.lastTerminalAt ?? s.firstTerminalAt ?? s.updatedAt)
        : s.updatedAt,
    )
  );
}
function ka(s) {
  for (let c of [s.lastTerminalAt, s.firstTerminalAt, s.updatedAt, s.createdAt])
    if (c) {
      let m = Date.parse(c);
      if (Number.isFinite(m)) return m;
    }
  return 0;
}
function hc({
  done: s,
  earlier: c,
  doneCap: m,
  initialJobId: b,
  linkMatchId: k,
}) {
  let w = s.length + c.length;
  if (w < m + Hi) return 1 / 0;
  let v = (J) => Jn(J.state, "done"),
    R = Math.min(m, s.length);
  if (R > 0) {
    let J = v(s[R - 1]);
    while (R < s.length && J - v(s[R]) < Nh) R++;
  }
  let O = s.map((J) => ka(J.state)),
    W = c.map((J) => {
      let j = J.modified.getTime();
      return O.findIndex((ne) => j > ne);
    }),
    A = (J) => countMatching(W, (j) => j !== -1 && j <= J),
    I = Math.max(R, m),
    q = Math.max(
      s.findIndex((J) => J.id === b),
      s.findIndex((J) => J.id === k),
    ),
    K = q < 0 ? -1 : q + A(q);
  if (w - I < Hi || K >= I) return 1 / 0;
  return I;
}
function bn(s) {
  return [...s].sort((c, m) => Gi(c.state) - Gi(m.state));
}
var wc = 120000,
  yc = 2000,
  Vh = 500,
  Uh = 30000;
var Sc = 30000;
function Kh() {
  return {
    listJobs: (s) => listJobs(void 0, s),
    listAliveDaemonJobs: (s) => listAliveDaemonJobs(s),
    adoptRosterOrphans: (s, c, m) => adoptRosterOrphans(s, c, m),
    listAllLiveSessions: (s) => listAllLiveSessions(s),
    listRemoteSessions: () => zu(),
    interruptRemoteSession: (s) =>
      import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js").then((c) => c.interruptRemoteSession(s)),
    archiveRemoteSession: (s) =>
      import("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js").then((c) => c.archiveRemoteSession(s)),
    readLogTail: (s, c) => cc(s, c),
    probeFleetTranscript: (s, c) => Mi(s, c),
    scanLoopTranscript: (s, c) => lc(s, c),
    fetchPrStatusBatch: (s) => fetchPrStatusBatch(s),
    fetchPrStatusByUrl: (s) => fetchPrStatusByUrl(s),
    loadPrStatusCache: (s) => loadPrStatusCache(s),
    persistPrStatusCache: (s, c) => persistPrStatusCache(s, c),
    touchFleetViewHeartbeat: (s) => touchFleetViewHeartbeat(s),
    clearFleetViewHeartbeat: (s) => clearFleetViewHeartbeat(s),
    watchJobDirOnce: (s, c) => watchJobDirOnce(s, c),
  };
}
function $h() {
  return {
    jobs: null,
    adoptedPeers: [],
    remoteJobs: [],
    remoteListLoaded: !1,
    pendings: [],
    statuses: new Map(),
    terminalHolders: new Map(),
    prStatuses: new Map(),
    loopKicks: new Map(),
    logTails: {},
    deleteRefusals: new Map(),
    overlaidLoadLanded: !1,
  };
}
class kc {
  #n;
  #e;
  #a = Le();
  #t = $h();
  #i = null;
  #r = 0;
  #d = !1;
  #s = [];
  #o = null;
  #f = 0;
  #u = 0;
  #m = new Set();
  #l = new Map();
  #g = new Set();
  #c = new Map();
  #y = 0;
  #R = 0;
  #v = 0;
  #w = new Map();
  #S = new Map();
  #h = new Set();
  #b = new Map();
  #_ = ac();
  #k = null;
  constructor(s) {
    ((this.#n = s?.storageV5), (this.#e = { ...Kh(), ...s?.client }));
  }
  getSnapshot = () => this.#t;
  usesStorage(s) {
    return this.#n === s;
  }
  subscribe = (s) => this.#a.subscribe(s);
  #p(s, c) {
    let m = this.#t[s],
      b = c(m);
    if (Object.is(b, m)) return;
    ((this.#t = { ...this.#t, [s]: b }), this.#a.emit());
  }
  #E(s, c) {
    return (this.#i?.setTimeout ?? setTimeoutWithCancel)(s, c);
  }
  attachView(s) {
    if ((this.#r++, this.#r === 1)) this.#I(s);
    let c = !1;
    return () => {
      if (c) return;
      if (((c = !0), this.#r--, this.#r === 0)) this.#P();
    };
  }
  setRemoteWanted(s) {
    if (s === this.#d) return;
    if (((this.#d = s), this.#r === 0)) return;
    if (s) this.#x();
    else (this.#o?.(), (this.#o = null));
  }
  #I(s) {
    if (((this.#i = s), (this.#y = 0), this.#t.prStatuses.size === 0))
      this.#e.loadPrStatusCache(this.#n).then((c) => {
        if (c.size) this.#C((m) => (m.size ? new Map([...c, ...m]) : c));
      });
    if (
      (this.load(),
      this.#s.push(
        startClockInterval(s, () => void this.load(), yc),
        startClockInterval(s, this.#A, Vh),
        startClockInterval(
          s,
          () => {
            this.#d;
          },
          yc,
        ),
      ),
      this.#d)
    )
      this.#x();
  }
  #x() {
    if (!this.#i) return;
    (this.#p("remoteJobs", (s) => {
      let c = s.map((m) => {
        let b = Co(m.state);
        return b === m.activity ? m : { ...m, activity: b };
      });
      return c.every((m, b) => m === s[b]) ? s : c;
    }),
      this.loadRemote(),
      this.#o?.(),
      (this.#o = startClockInterval(this.#i, this.loadRemote, Uh)));
  }
  #P() {
    for (let m of this.#s) m();
    ((this.#s = []),
      this.#o?.(),
      (this.#o = null),
      this.#k?.(),
      (this.#k = null),
      this.#e.clearFleetViewHeartbeat(this.#n),
      (this.#i = null),
      this.#h.clear(),
      this.#b.clear());
    let s = this.#t,
      c = s.remoteJobs.some((m) => m.id.startsWith("remote-pending-"))
        ? s.remoteJobs.filter((m) => !m.id.startsWith("remote-pending-"))
        : s.remoteJobs;
    if (
      s.pendings.length > 0 ||
      c !== s.remoteJobs ||
      s.remoteListLoaded ||
      s.overlaidLoadLanded
    )
      ((this.#t = {
        ...s,
        pendings: s.pendings.length > 0 ? [] : s.pendings,
        remoteJobs: c,
        remoteListLoaded: !1,
        overlaidLoadLanded: !1,
      }),
        this.#a.emit());
  }
  get jobs() {
    return this.#t.jobs;
  }
  isDeleting(s) {
    return this.#m.has(s);
  }
  deleteRefusalOf = (s) => this.#t.deleteRefusals.get(s);
  isDeletingSession(s) {
    return this.#g.has(s);
  }
  isHolding(s) {
    return this.#c.has(s);
  }
  isArchiving(s) {
    return this.#w.has(s);
  }
  liveStatus(s) {
    let { sessionId: c, resumeSessionId: m } = s.state;
    if (isExecLaunch(s.state)) return s.state.tempo === "active" ? "busy" : void 0;
    if (s.state.backend === "remote")
      return s.state.tempo === "active"
        ? "busy"
        : s.state.tempo === "blocked"
          ? "waiting"
          : void 0;
    if (this.#b.has(m ?? c)) return "busy";
    if (this.#t.pendings.some((k) => k.state.sessionId === c)) return "busy";
    let b =
      this.terminalHolderOf(s) !== void 0
        ? this.#t.statuses.get(Rr(s.id))
        : fc(this.#t.statuses, s);
    if (b) return b;
    if (this.#h.has(c)) return "busy";
    return;
  }
  terminalHolderOf(s) {
    if (s.state.backend === "peer" || s.state.backend === "remote") return;
    return this.#t.terminalHolders.get(
      s.state.resumeSessionId ?? s.state.sessionId,
    );
  }
  bumpGen() {
    this.#u = ++this.#f;
  }
  resetPrFetchGate() {
    this.#y = 0;
  }
  holdJob = (s) => (
    (this.#u = ++this.#f),
    this.#c.set(s, (this.#c.get(s) ?? 0) + 1),
    () => {
      this.#u = ++this.#f;
      let c = (this.#c.get(s) ?? 1) - 1;
      if (c <= 0) this.#c.delete(s);
      else this.#c.set(s, c);
    }
  );
  optimistic = (s, c, m) => {
    if (((this.#u = ++this.#f), c)) {
      this.#m.add(c);
      let k = this.#t.jobs?.find((w) => w.id === c);
      if (k) {
        let w = [k.state.sessionId, k.state.resumeSessionId].filter((v) =>
          Boolean(v),
        );
        this.#l.set(c, w);
        for (let v of w) this.#g.add(v);
      }
    }
    let b = m ? this.holdJob(m) : void 0;
    return (
      this.updateJobs((k) => (k ? s(k) : k)),
      c || b
        ? () => {
            if (c) {
              ((this.#u = ++this.#f), this.#m.delete(c));
              for (let k of this.#l.get(c) ?? []) this.#g.delete(k);
              this.#l.delete(c);
            }
            b?.();
          }
        : void 0
    );
  };
  noteDeleteRefusal = (s, c) => {
    this.#p("deleteRefusals", (m) => {
      if (c === null && !m.has(s)) return m;
      let b = new Map(m);
      if (c === null) b.delete(s);
      else b.set(s, c);
      return b;
    });
  };
  updateJobs(s) {
    this.#p("jobs", s);
  }
  updateAdoptedPeers(s) {
    this.#p("adoptedPeers", s);
  }
  updateRemoteJobs(s) {
    this.#p("remoteJobs", s);
  }
  updatePendings(s) {
    this.#p("pendings", s);
  }
  #C(s) {
    let c = this.#t.prStatuses;
    if ((this.#p("prStatuses", s), this.#t.prStatuses !== c))
      this.#e.persistPrStatusCache(this.#t.prStatuses, this.#n);
  }
  seedJobs(s) {
    this.updateJobs((c) => {
      let m = s
          .filter((k) => !this.#m.has(k.id))
          .map((k) => ({ ...k, activity: Co(k.state) })),
        b =
          c && this.#c.size > 0
            ? new Map(c.filter((k) => this.#c.has(k.id)).map((k) => [k.id, k]))
            : null;
      return bn(b ? m.map((k) => b.get(k.id) ?? k) : m);
    });
  }
  settleLandedPendings(s) {
    let c = new Set(s.map((m) => m.id));
    for (let m of s) {
      let b = m.state.sessionId;
      (this.#h.add(b), this.#E(() => this.#h.delete(b), Sc));
    }
    this.updatePendings((m) => m.filter((b) => !c.has(b.id)));
  }
  kick(s, c) {
    let m = { kickedAt: Date.now(), jobId: c };
    return (
      this.#b.set(s, m),
      this.#E(() => {
        if (this.#b.get(s) === m)
          (this.#b.delete(s), this.#p("statuses", (b) => new Map(b)));
      }, Sc),
      () => {
        if (this.#b.get(s) === m) this.#b.delete(s);
      }
    );
  }
  watchPendingJobDir(s) {
    (this.#k?.(),
      (this.#k = this.#e.watchJobDirOnce(s, () => void this.load())));
  }
  reload = () => {
    this.load();
  };
  load = async () => {
    if (isCrossSessionMessagingEnabled() && getFeatureValue_CACHED_MAY_BE_STALE("tengu_fleetview_peers", !1))
      this.#e.touchFleetViewHeartbeat(this.#n);
    let s = ++this.#f,
      [c, m] = await Promise.all([
        this.#e.listJobs(this.#n),
        this.#e.listAliveDaemonJobs(this.#n),
      ]),
      b = markCrashed(await this.#e.adoptRosterOrphans(c, m.records, this.#n), m.shorts)
        .filter((I) => !this.#m.has(I.id))
        .map((I) => ({ ...I, activity: Co(I.state, this.#t.prStatuses) }));
    if (s <= this.#u) return;
    if (((this.#u = s), this.#r > 0)) this.#p("overlaidLoadLanded", () => !0);
    this.updateJobs((I) => {
      let q =
          I && this.#c.size > 0
            ? new Map(I.filter((J) => this.#c.has(J.id)).map((J) => [J.id, J]))
            : null,
        K = bn(q ? b.map((J) => q.get(J.id) ?? J) : b);
      if (
        I &&
        I.length === K.length &&
        I.every(
          (J, j) =>
            J.id === K[j].id &&
            J.state.updatedAt === K[j].state.updatedAt &&
            J.state.state === K[j].state.state &&
            J.state.pinned === K[j].state.pinned &&
            J.state.group === K[j].state.group &&
            J.state.stateSortOrder === K[j].state.stateSortOrder &&
            J.activity === K[j].activity,
        )
      )
        return I;
      return K;
    });
    let k = b.filter((I) => lo(I.state) !== "completed"),
      w = await Promise.all(
        k.map(async (I) => [I.id, await this.#e.readLogTail(I, this.#n)]),
      );
    this.#p("logTails", (I) => {
      let q = Object.fromEntries(w),
        K = Object.keys(I);
      if (K.length === w.length && K.every((J) => I[J] === q[J])) return I;
      return q;
    });
    let v = b.filter((I) => isLoopJob(I.state));
    if (v.length > 0) {
      let q = (
        await Promise.all(
          v.map(async (K) => {
            let J = Li(K.state);
            try {
              let j = await this.#e.probeFleetTranscript(J, this.#n);
              return j.kind === "present"
                ? [K.state.sessionId, j.mtimeMs, J]
                : null;
            } catch {
              return null;
            }
          }),
        )
      )
        .filter((K) => K !== null)
        .filter(([K, J]) => {
          let j = this.#t.loopKicks.get(K);
          return !j || j.mtimeMs !== J;
        });
      if (q.length > 0) {
        let K = await Promise.all(
          q.map(async ([J, j, ne]) => {
            try {
              let se = await this.#e.scanLoopTranscript(this.#_, ne);
              return se ? [J, { mtimeMs: j, ...se }] : null;
            } catch {
              return null;
            }
          }),
        );
        this.#p("loopKicks", (J) => {
          let j = !1,
            ne = new Map(J);
          for (let se of K) if (se) (ne.set(se[0], se[1]), (j = !0));
          return j ? ne : J;
        });
      }
    }
    let R = dedupe(
        b.flatMap((I) =>
          Uo(I.state.children)
            .filter((q) => q.kind !== "frame")
            .map((q) => q.href),
        ),
      ),
      O = R.filter((I) => {
        let q = this.#t.prStatuses.get(I)?.state;
        return q !== "MERGED" && q !== "CLOSED";
      }),
      W = Date.now(),
      A = W - this.#y >= ic(isTerminalFocused(), W - Nm());
    if (O.length > 0 && A) {
      this.#y = W;
      let I = getFeatureValue_CACHED_MAY_BE_STALE("tengu_fleetview_pr_batch", !0);
      (async () => {
        let q;
        if (I) {
          let K = await this.#e.fetchPrStatusBatch(O);
          ((q = K.statuses),
            await Promise.all(
              K.unbatched.map(async (J) =>
                q.set(J, await this.#e.fetchPrStatusByUrl(J)),
              ),
            ));
        } else
          q = new Map(
            await Promise.all(
              O.map(async (K) => [K, await this.#e.fetchPrStatusByUrl(K)]),
            ),
          );
        this.#C((K) => {
          let J = !1;
          for (let [ne, se] of q) {
            let oe = K.get(ne);
            if (
              oe?.state !== se?.state ||
              oe?.title !== se?.title ||
              oe?.review !== se?.review ||
              oe?.checks.passed !== se?.checks.passed ||
              oe?.checks.failed !== se?.checks.failed ||
              oe?.checks.pending !== se?.checks.pending ||
              oe?.additions !== se?.additions ||
              oe?.deletions !== se?.deletions
            ) {
              J = !0;
              break;
            }
          }
          if (!J) return K;
          let j = new Map(K);
          for (let [ne, se] of q) if (se !== null || !K.has(ne)) j.set(ne, se);
          return j;
        });
      })();
    }
    if (this.#u === s) {
      let I = new Set(b.map((K) => K.state.sessionId)),
        q = new Set(R);
      if (
        (this.#p("loopKicks", (K) => Ji(K, I)),
        this.#C((K) => Ji(K, q)),
        b.length > 0)
      )
        this.#p("deleteRefusals", (K) =>
          Ji(K, new Set([...b.map((J) => J.id), ...this.#m])),
        );
      dc(this.#_, new Set(b.map((K) => Li(K.state))));
    }
  };
  #A = () => {
    this.#e
      .listAllLiveSessions(this.#n)
      .then((s) => {
        let c = new Map(),
          m = new Map();
        for (let w of s) {
          if (
            w.kind === "interactive" &&
            w.pid !== process.pid &&
            w.sessionId &&
            w.parkedJobId === void 0
          )
            m.set(w.sessionId, w.pid);
          if (!w.status) continue;
          if (w.sessionId) c.set(w.sessionId, w.status);
          if (w.jobId) c.set(Rr(w.jobId), w.status);
        }
        for (let w of c.keys()) this.#h.delete(w);
        let b = getSpareJob();
        if (b && s.some((w) => w.sessionId === b.sessionId)) markSpareJobReady(b.sessionId);
        let k = !1;
        for (let [w, v] of this.#b) {
          let R = s.find((O) => O.sessionId === w || O.jobId === v.jobId);
          if (
            c.get(w) === "busy" ||
            c.get(Rr(v.jobId)) === "busy" ||
            (R !== void 0 &&
              (R.statusUpdatedAt ?? 0) > v.kickedAt &&
              R.startedAt <= v.kickedAt)
          )
            (this.#b.delete(w), (k = !0));
        }
        if (
          (this.#p("statuses", (w) =>
            !k && w.size === c.size && [...c].every(([v, R]) => w.get(v) === R)
              ? w
              : c,
          ),
          this.#p("terminalHolders", (w) =>
            w.size === m.size && [...m].every(([v, R]) => w.get(v) === R)
              ? w
              : m,
          ),
          isCrossSessionMessagingEnabled() && getFeatureValue_CACHED_MAY_BE_STALE("tengu_fleetview_peers", !1))
        ) {
          let w = new Set((this.#t.jobs ?? []).map((O) => O.state.sessionId)),
            v = Date.now(),
            R = s
              .filter(
                (O) =>
                  O.kind === "interactive" &&
                  O.pid !== process.pid &&
                  O.sessionId &&
                  !w.has(O.sessionId) &&
                  (O.peerProtocol ?? 0) >= PEER_PROTOCOL &&
                  v - (O.updatedAt ?? O.startedAt) < 86400000,
              )
              .map((O) => {
                let W = rc(O);
                return { id: `peer-${O.pid}`, state: W, activity: Co(W) };
              });
          this.updateAdoptedPeers((O) => {
            let W = new Map(O.map((I) => [I.id, I])),
              A = R.map((I) => {
                let q = W.get(I.id);
                return q &&
                  q.state.name !== I.state.name &&
                  (q.state.updatedAt ?? "") >= (I.state.updatedAt ?? "")
                  ? {
                      ...I,
                      state: {
                        ...I.state,
                        name: q.state.name,
                        intent: q.state.intent,
                        updatedAt: q.state.updatedAt,
                      },
                    }
                  : I;
              });
            return O.length === A.length &&
              O.every(
                (I, q) =>
                  I.id === A[q].id &&
                  I.state.updatedAt === A[q].state.updatedAt &&
                  I.state.name === A[q].state.name &&
                  I.activity === A[q].activity,
              )
              ? O
              : A;
          });
        }
      })
      .catch(() => {});
  };
  loadRemote = () => {
    this.#R = Date.now();
    let s = ++this.#v;
    this.#e
      .listRemoteSessions()
      .then((c) => {
        if (s !== this.#v) return;
        let m = c
          .map((b) => {
            let k = remoteRowId(b.id),
              w = Yu(b),
              v = this.#S.get(k);
            if (v !== void 0)
              if (isSettled(w) || Date.now() > v) this.#S.delete(k);
              else w = { ...w, state: "stopped", tempo: "idle", needs: void 0 };
            return { id: k, state: w, activity: Co(w) };
          })
          .filter((b) => {
            let k = this.#w.get(b.id);
            if (k === void 0) return !0;
            if (Date.now() > k) return (this.#w.delete(b.id), !0);
            return !1;
          });
        if ((this.updateRemoteJobs((b) => Qu(b, m)), this.#r > 0))
          this.#p("remoteListLoaded", () => !0);
      })
      .catch((c) => {
        if (
          (logForDebugging(`[fleet:remote] poll mapper threw: ${l(c)}`),
          s === this.#v && this.#r > 0)
        )
          this.#p("remoteListLoaded", () => !0);
      });
  };
  async stopRemote(s) {
    let c = s.state.sessionId;
    (this.#S.set(s.id, Date.now() + wc),
      this.updateRemoteJobs((m) =>
        m.map((b) =>
          b.id === s.id && !isSettled(b.state)
            ? {
                ...b,
                state: {
                  ...b.state,
                  state: "stopped",
                  tempo: "idle",
                  needs: void 0,
                },
                activity: "stopped",
              }
            : b,
        ),
      ));
    try {
      if (!(await this.#e.interruptRemoteSession(c)))
        throw Error("interrupt rejected");
      (logFeatureOk("fleet_view_stop_session"),
        logEvent("tengu_bg_agent_action", {
          action: S("stop"),
          source: S("fleet"),
          jobSessionId: sanitizeAnalyticsId(c),
        }));
    } catch (m) {
      throw (
        logFeatureBad("fleet_view_stop_session", "interrupt_failed"),
        logForDebugging(`[fleet:remote] interrupt ${c} failed: ${l(m)}`),
        this.#S.delete(s.id),
        this.loadRemote(),
        m
      );
    }
  }
  async archiveRemote(s) {
    let c = s.state.sessionId;
    (this.#w.set(s.id, Date.now() + wc),
      this.updateRemoteJobs((m) => m.filter((b) => b.id !== s.id)));
    try {
      if (!(await this.#e.archiveRemoteSession(c)))
        throw Error("archive rejected");
      (logFeatureOk("fleet_view_archive_session"),
        logEvent("tengu_bg_agent_action", {
          action: S("archive"),
          source: S("fleet"),
          jobSessionId: sanitizeAnalyticsId(c),
        }));
    } catch (m) {
      throw (
        logFeatureBad("fleet_view_archive_session", "archive_failed"),
        logForDebugging(`[fleet:remote] archive ${c} failed: ${l(m)}`),
        this.#w.delete(s.id),
        this.loadRemote(),
        m
      );
    }
  }
}
function _r(s, c) {
  if (s.roster) {
    if (!s.roster.usesStorage(c))
      logError(
        Error(
          "[fleet:roster] ensureFleetRoster called with a different storageV5 than the visit was created with; keeping the original",
        ),
      );
    return s.roster;
  }
  return (s.roster = new kc({ storageV5: c }));
}
var jh = 100,
  Rc = new Set();
function vc(s) {
  return { focusedIdx: 0, hoverFocusIdx: null, collapsed: s, capExpanded: Rc };
}
function qh(s) {
  let c = hn;
  return new Set(
    s.map((m) =>
      m === "pinned" || /^(state|directory|group):/.test(m)
        ? m
        : `${c.includes(m) ? "state" : "directory"}:${m}`,
    ),
  );
}
class _c {
  #n;
  #e;
  #a = Le();
  #t;
  #i = 0;
  #r = null;
  #d = null;
  #s = null;
  #o = null;
  #f = [];
  #u = !1;
  #m = new Map();
  #l = new Map();
  #g = null;
  #c = [];
  #y = 0;
  #R = null;
  #v = null;
  #w = null;
  #S = !1;
  constructor(s) {
    ((this.#n = s.roster),
      (this.#e = s.storageV5),
      (this.#t = vc(
        s.collapsed && s.collapsed.length > 0 ? qh(s.collapsed) : Rc,
      )));
  }
  getSnapshot = () => this.#t;
  subscribe = (s) => this.#a.subscribe(s);
  #h(s) {
    let c = this.#t,
      m = { ...c, ...s };
    if (
      m.focusedIdx === c.focusedIdx &&
      m.hoverFocusIdx === c.hoverFocusIdx &&
      m.collapsed === c.collapsed &&
      m.capExpanded === c.capExpanded
    )
      return;
    ((this.#t = m), this.#a.emit());
  }
  attachView(s) {
    (this.#i++, (this.#r = s.clock), (this.#d = s.onError));
    let c = !1;
    return () => {
      if (c) return;
      if (((c = !0), this.#i--, this.#i === 0)) this.#b();
    };
  }
  #b() {
    (this.#g?.(), (this.#g = null));
    let s = this.#c;
    ((this.#c = []),
      this.#p().finally(() => {
        for (let c of s) c();
      }),
      (this.#r = null),
      (this.#d = null),
      (this.#s = null),
      (this.#o = null),
      (this.#f = []),
      (this.#u = !1),
      (this.#y = 0),
      (this.#R = null),
      (this.#v = null),
      (this.#w = null),
      (this.#S = !1),
      (this.#t = vc(this.#t.collapsed)));
  }
  focus(s) {
    this.#h({ focusedIdx: s });
  }
  navigateTo(s, c) {
    (this.#_(c), this.#h({ focusedIdx: s, hoverFocusIdx: null }));
  }
  hoverTo(s, c) {
    (this.#_(c), this.#h({ focusedIdx: s, hoverFocusIdx: s }));
  }
  #_(s) {
    if (s?.kind === "job") ((this.#s = s.job.id), (this.#o = null));
    else if (s?.kind === "header") ((this.#s = null), (this.#o = s.group));
    else ((this.#s = null), (this.#o = null));
  }
  get followId() {
    return this.#s;
  }
  set followId(s) {
    this.#s = s;
  }
  get followOrigin() {
    return this.#o;
  }
  set followOrigin(s) {
    this.#o = s;
  }
  setHoverFocusIdx(s) {
    this.#h({ hoverFocusIdx: s });
  }
  clampFocus(s) {
    this.#h({ focusedIdx: oa(this.#t.focusedIdx, 0, Math.max(0, s - 1)) });
  }
  syncRows(s) {
    ((this.#f = s), (this.#u = !1));
    let { focusedIdx: c } = this.#t;
    if (this.#o) {
      let k = s.findIndex((w) => w.kind === "header" && w.group === this.#o);
      if (k >= 0 && k !== c) this.#k(k);
      if (k < 0) this.#o = null;
      return;
    }
    if (!this.#s) return;
    let m = this.#s,
      b = s.findIndex((k) => k.kind === "job" && k.job.id === m);
    if (b < 0) {
      this.#s = null;
      return;
    }
    if (b !== c)
      (logForDebugging(
        `[FV-poll] follow re-pin moved focus: was=${c} now=${b} followId=${m}`,
      ),
        this.#k(b));
  }
  #k(s) {
    let { focusedIdx: c, hoverFocusIdx: m } = this.#t;
    this.#h({ focusedIdx: s, hoverFocusIdx: m === c ? s : m });
  }
  focusedRow() {
    return this.#f[this.#t.focusedIdx];
  }
  get reorderIssued() {
    return this.#u;
  }
  beginReorder(s, c) {
    ((this.#s = s), (this.#u = !0), this.#k(c));
  }
  queueOrderWrites(s, c) {
    let m = c === "state" ? this.#l : this.#m;
    for (let [k, w] of s) (m.set(k, w), this.#c.push(this.#n.holdJob(k)));
    this.#g?.();
    let b = this.#r?.setTimeout ?? setTimeoutWithCancel;
    this.#g = b(() => {
      ((this.#g = null), this.#n.bumpGen());
      let k = this.#c;
      ((this.#c = []),
        this.#p().finally(() => {
          for (let w of k) w();
          if (this.#i > 0) this.#n.reload();
        }));
    }, jh);
  }
  #p() {
    let s = Array.from(this.#m),
      c = Array.from(this.#l);
    if ((this.#m.clear(), this.#l.clear(), s.length === 0 && c.length === 0))
      return Promise.resolve();
    let m = this.#e;
    return withSortOrderLock(() =>
      Promise.all([
        ...s.map(([b, k]) => writeSortOrder(getJobDir(b), k, m)),
        ...c.map(([b, k]) => writeStateSortOrder(getJobDir(b), k, m)),
      ]),
    )
      .then(() => {
        logFeatureOk("fleet_view_reorder_job");
      })
      .catch((b) => {
        (logError(b),
          this.#d?.(`Couldn't save order \u2014 ${l(b)}`),
          logFeatureBad("fleet_view_reorder_job", "write_sort_order_failed"));
      });
  }
  toggleCollapsed(s, c) {
    let m = new Set(this.#t.collapsed);
    if (m.has(s)) {
      (m.delete(s), this.#h({ collapsed: m }));
      return;
    }
    m.add(s);
    let b = this.#t.capExpanded;
    this.#h({
      collapsed: m,
      capExpanded:
        c !== null && b.has(c) ? new Set([...b].filter((k) => k !== c)) : b,
    });
  }
  uncollapse(...s) {
    let c = this.#t.collapsed;
    if (!s.some((b) => c.has(b))) return;
    let m = new Set(c);
    for (let b of s) m.delete(b);
    this.#h({ collapsed: m });
  }
  renameCollapsedKey(s, c) {
    let m = this.#t.collapsed;
    if (!m.has(s)) return;
    let b = new Set(m);
    (b.delete(s), b.add(c), this.#h({ collapsed: b }));
  }
  expandCap(s) {
    if (this.#t.capExpanded.has(s)) return;
    this.#h({ capExpanded: new Set(this.#t.capExpanded).add(s) });
  }
  get restoreAttempts() {
    return this.#y;
  }
  set restoreAttempts(s) {
    this.#y = s;
  }
  get restoreCountedJobs() {
    return this.#R;
  }
  set restoreCountedJobs(s) {
    this.#R = s;
  }
  get savedFocusJobId() {
    return this.#v;
  }
  set savedFocusJobId(s) {
    this.#v = s;
  }
  get linkMatchFollow() {
    return this.#w;
  }
  set linkMatchFollow(s) {
    this.#w = s;
  }
  isFirstQueryOfLook() {
    if (this.#S) return !1;
    return ((this.#S = !0), !0);
  }
}
function Wi(s, c, m, b) {
  return (s.selection ??= new _c({ roster: c, storageV5: m, collapsed: b }));
}
var Cc = new Set();
function Ec() {
  return { attachingJobId: null, newSessionOpening: !1, autoOpened: !1 };
}
class xc {
  #n = Le();
  #e = { ...Ec(), warmingJobIds: Cc };
  #a = 0;
  #t = new Map();
  #i = null;
  #r = 0;
  #d = 0;
  #s = null;
  #o = null;
  #f = null;
  #u = 0;
  #m = null;
  #l = new Set();
  getSnapshot = () => this.#e;
  subscribe = (s) => this.#n.subscribe(s);
  #g(s) {
    let c = this.#e,
      m = { ...c, ...s };
    if (
      m.attachingJobId === c.attachingJobId &&
      m.newSessionOpening === c.newSessionOpening &&
      m.warmingJobIds === c.warmingJobIds &&
      m.autoOpened === c.autoOpened
    )
      return;
    ((this.#e = m), this.#n.emit());
  }
  attachView() {
    this.#a++;
    let s = !1;
    return () => {
      if (s) return;
      if (((s = !0), this.#a--, this.#a === 0))
        ((this.#i = null),
          this.#r++,
          this.#d++,
          (this.#s = null),
          (this.#o = null),
          (this.#f = null),
          (this.#m = null),
          this.#l.clear(),
          (this.#e = { ...this.#e, ...Ec() }));
    };
  }
  arm(s, c) {
    ((this.#i = c), this.#g({ attachingJobId: s }));
  }
  disarm() {
    let s = this.#i;
    return ((this.#i = null), this.#g({ attachingJobId: null }), s);
  }
  nextRespawnAttempt() {
    return ++this.#r;
  }
  isCurrentRespawnAttempt(s) {
    return this.#r === s;
  }
  abandonRespawnAttempt() {
    this.#r++;
  }
  getWarming(s) {
    return this.#t.get(s);
  }
  trackWarming(s, c) {
    (this.#t.set(s, c),
      this.#c(),
      c.then(() => {
        if (this.#t.get(s) === c) (this.#t.delete(s), this.#c());
      }));
  }
  dropWarming(s) {
    if (this.#t.delete(s)) this.#c();
  }
  #c() {
    this.#g({
      warmingJobIds: this.#t.size === 0 ? Cc : new Set(this.#t.keys()),
    });
  }
  get forkRefusedJobId() {
    return this.#s;
  }
  set forkRefusedJobId(s) {
    this.#s = s;
  }
  get restartOfferedJobId() {
    return this.#o;
  }
  set restartOfferedJobId(s) {
    this.#o = s;
  }
  get deadEpochOfferedJobId() {
    return this.#f;
  }
  set deadEpochOfferedJobId(s) {
    ((this.#f = s), (this.#u = s === null ? 0 : Date.now()));
  }
  deadEpochOfferAgeMs() {
    return this.#f === null ? 1 / 0 : Date.now() - this.#u;
  }
  get deadEpochGoneJobId() {
    return this.#m;
  }
  set deadEpochGoneJobId(s) {
    this.#m = s;
  }
  isPromoting(s) {
    return this.#l.has(s);
  }
  beginPromote(s) {
    this.#l.add(s);
  }
  endPromote(s) {
    this.#l.delete(s);
  }
  releasePromoted(s) {
    for (let c of this.#l) if (s.has(c)) this.#l.delete(c);
  }
  beginNewSession() {
    return (this.#g({ newSessionOpening: !0 }), ++this.#d);
  }
  isCurrentNewSessionAttempt(s) {
    return this.#d === s;
  }
  endNewSession() {
    this.#g({ newSessionOpening: !1 });
  }
  abandonNewSession() {
    (this.#d++, this.#g({ newSessionOpening: !1 }));
  }
  markAutoOpened() {
    this.#g({ autoOpened: !0 });
  }
}
function Ki(s) {
  return (s.attach ??= new xc());
}
function Ic(s, c, { pruneTextPastes: m = !1 } = {}) {
  let b = Object.values(s);
  function k(v) {
    return m || v.type === "image" || v.type === "audio";
  }
  if (!b.some(k)) return;
  let w = new Set();
  for (let v of c) for (let R of parsePastedPlaceholders(v)) w.add(R.id);
  for (let v of b) if (k(v) && !w.has(v.id)) delete s[v.id];
}
function $i(s, c, { onMinted: m } = {}) {
  return (b, k) => {
    let w = s(),
      v = mintPastedContentId(void 0, w);
    (m?.(v),
      (w[v] = {
        id: v,
        type: "image",
        content: b,
        mediaType: k?.mediaType ?? "image/png",
        filename: k?.filename,
        dimensions: k?.dimensions,
        sourcePath: k?.sourcePath,
      }),
      c(new iee(`${formatImagePlaceholder(v)} `)));
  };
}
var zh = 90000,
  Yh = 45000;
function Pc({
  drafts: s,
  observedAbsenceMs: c,
  isGuarded: m,
  now: b,
  lastSweepAt: k,
}) {
  let w = b - k,
    v = w < 0 || w > Yh ? 0 : w,
    R = !1;
  for (let O of s.keys()) {
    if (m(O)) {
      c.delete(O);
      continue;
    }
    let W = c.get(O);
    if (W === void 0) c.set(O, 0);
    else if (W + v >= zh) (s.delete(O), c.delete(O), (R = !0));
    else c.set(O, W + v);
  }
  for (let O of c.keys()) if (!s.has(O)) c.delete(O);
  return R;
}
function Ac(
  s,
  c,
  { jobs: m, pendings: b, adoptedPeers: k, remoteJobs: w, remoteListLoaded: v },
) {
  if (!m || !s.hasReplyDrafts()) {
    s.sweepReplyDrafts({ now: Date.now(), isGuarded: null });
    return;
  }
  let R = new Set();
  for (let A of [m, b, k, w]) for (let I of A) R.add(I.id);
  let O = countMatching(w, (A) => !A.id.startsWith("remote-pending-")),
    W = !v || O === 0 || O >= CCR_LIST_TARGET_VISIBLE;
  s.sweepReplyDrafts({
    now: Date.now(),
    isGuarded: (A) =>
      R.has(A) ||
      c.isDeleting(A) ||
      c.isHolding(A) ||
      c.isArchiving(A) ||
      (A.startsWith("remote-")
        ? W
        : A.startsWith("peer-")
          ? k.length === 0
          : m.length === 0),
  });
}
var Qh = 30000,
  Xh = [
    "query",
    "cursorOffset",
    "mode",
    "sessionModel",
    "error",
    "hint",
    "replyError",
    "expandHintPasteId",
  ];
function Zh(s, c) {
  return Math.max(0, Math.min(s.length, c));
}
class Oc {
  #n = Le();
  #e;
  #a = 0;
  #t = null;
  #i = !1;
  #r = {};
  #d = null;
  #s = null;
  #o = new Map();
  #f = new Map();
  #u = Date.now();
  #m = new Map();
  constructor(s = {}) {
    let c = s.query ?? "",
      m = isAgentViewBashModeEnabled() && c.startsWith("!"),
      b = m ? c.slice(1) : c;
    this.#e = {
      query: b,
      cursorOffset: b.length,
      mode: m ? "bash" : "prompt",
      sessionModel: s.sessionModel,
      error: null,
      hint: null,
      replyError: null,
      expandHintPasteId: null,
    };
  }
  getSnapshot = () => this.#e;
  subscribe = (s) => this.#n.subscribe(s);
  #l(s) {
    let c = this.#e,
      m = { ...c, ...s };
    if (Xh.every((b) => Object.is(m[b], c[b]))) return;
    ((this.#e = m), this.#n.emit());
  }
  attachView() {
    if (this.#a++ === 0)
      ((this.#t = registerPasteIdCarrier(() => [this.#e.query, ...this.#o.values()])),
        (this.#i = !1),
        (this.#u = Date.now()),
        this.#f.clear());
    let s = !1;
    return () => {
      if (s) return;
      if (((s = !0), this.#a--, this.#a === 0))
        (this.#t?.(),
          (this.#t = null),
          (this.#i = !1),
          (this.#s = null),
          this.#m.clear(),
          (this.#e = {
            ...this.#e,
            cursorOffset: this.#e.query.length,
            error: null,
            hint: null,
            replyError: null,
            expandHintPasteId: null,
          }));
    };
  }
  setQuery(s) {
    this.#l({ query: s, cursorOffset: s.length });
  }
  setQueryAndCursor(s, c) {
    this.#l({ query: s, cursorOffset: Zh(s, c) });
  }
  insertText(s) {
    let { query: c, cursorOffset: m } = this.#e;
    this.#l({
      query: c.slice(0, m) + s + c.slice(m),
      cursorOffset: m + s.length,
    });
  }
  setMode(s) {
    this.#l({ mode: s });
  }
  dropDraft() {
    (this.setQuery(""),
      this.setMode("prompt"),
      this.pruneOrphanedPastes({ pruneTextPastes: !0 }));
  }
  draftForDisk() {
    let { query: s, mode: c } = this.#e;
    return c === "bash" ? `!${s}` : s;
  }
  beginProgrammaticChange() {
    this.#i = !0;
  }
  takeProgrammaticChange() {
    let s = this.#i;
    return ((this.#i = !1), s);
  }
  setSessionModel(s) {
    this.#l({ sessionModel: s });
  }
  setError = (s) => {
    this.#l({ error: s });
  };
  setHint = (s) => {
    this.#l({ hint: s });
  };
  setReplyError(s, c) {
    this.#l({ replyError: c === null ? null : { jobId: s, error: c } });
  }
  setExpandHintPasteId(s) {
    this.#l({ expandHintPasteId: s });
  }
  get pastes() {
    return this.#r;
  }
  replacePastes(s) {
    this.#r = s;
  }
  mergeRestoredPastes(s) {
    this.#r = { ...s, ...this.#r };
  }
  get lastMintedPasteId() {
    return this.#d;
  }
  noteMintedPaste = (s) => {
    this.#d = s;
  };
  mintTextPaste(s) {
    let c = mintPastedContentId(this.#e.query, this.#r);
    return (
      (this.#d = c),
      (this.#r[c] = { id: c, type: "text", content: s }),
      c
    );
  }
  registerLivePeekQuery(s) {
    return (
      (this.#s = s),
      () => {
        if (this.#s === s) this.#s = null;
      }
    );
  }
  pruneOrphanedPastes = (s) => {
    Ic(this.#r, [this.#e.query, this.#s?.() ?? "", ...this.#o.values()], s);
  };
  replyDraft(s) {
    return this.#o.get(s);
  }
  saveReplyDraft(s, c) {
    if (c) this.#o.set(s, c);
    else this.#o.delete(s);
  }
  deleteReplyDraft(s) {
    this.#o.delete(s);
  }
  releaseReplyDraft(s) {
    if (this.#o.delete(s)) this.pruneOrphanedPastes();
  }
  hasReplyDrafts() {
    return this.#o.size > 0;
  }
  sweepReplyDrafts({ now: s, isGuarded: c }) {
    let m = this.#u;
    if (((this.#u = s), c === null || this.#o.size === 0)) {
      this.#f.clear();
      return;
    }
    if (
      Pc({
        drafts: this.#o,
        observedAbsenceMs: this.#f,
        now: s,
        lastSweepAt: m,
        isGuarded: c,
      })
    )
      this.pruneOrphanedPastes();
  }
  isRetryOfRecentReplyFailure(s, c) {
    let m = this.#m.get(s);
    return m !== void 0 && c - m < Qh;
  }
  noteReplyFailure(s, c) {
    this.#m.set(s, c);
  }
  clearReplyFailure(s) {
    this.#m.delete(s);
  }
}
function ji(s, c) {
  return (s.editor ??= new Oc(c));
}
import { randomUUID as Vb } from "crypto";
import { stat as Ub } from "fs/promises";
import { isAbsolute as Wb } from "path";
import { randomUUID as nb } from "crypto";
import { basename as rb } from "path";
var eb = 200;
function qi() {
  return Ca() && isPastSessionsExperimentEnabled();
}
function Ca() {
  return !isSafeMode() && !AOn();
}
async function zi(s, c, m) {
  try {
    let b = he(),
      k = await listGitWorktrees(b);
    return (await loadSameRepoMessageLogs(k, void 0, c ? eb : void 0, m)).flatMap((R) => {
      if (!R.sessionId || !R.fullPath) return [];
      if (s.has(R.sessionId)) return [];
      if (!c && R.sessionKind === "bg") return [];
      return [
        {
          sessionId: R.sessionId,
          fullPath: R.fullPath,
          title: normalizeWhitespace(stripAnsi(getLogDisplayTitle(R))) || R.sessionId.slice(0, 8),
          modified: R.modified,
          cwd: R.relocatedCwd ?? R.projectPath ?? b,
        },
      ];
    });
  } catch (b) {
    if (Rt(b))
      logForDebugging(`[fleetview] past-session enumeration failed: ${l(b)}`, {
        level: "error",
      });
    else logError(b);
    return null;
  }
}
import { isAbsolute as tb } from "path";
function Yi(s, c, m = {}, b = []) {
  let k = s.trim();
  if (isAgentViewBashModeEnabled() && k.startsWith("!")) {
    let J = k.slice(1).trim();
    return { template: CLAUDE_AGENT_TEMPLATE, intent: "", matched: !!J, exec: J };
  }
  let w = k.toLowerCase();
  if (w.startsWith("a:") || w.startsWith("s:") || w.startsWith("o:"))
    return null;
  let v,
    R,
    O,
    W = Object.keys(m),
    A = k
      .replace(/(?:^|\s)@(\S+)/g, (J, j) => {
        let ne = j.toLowerCase(),
          se = c.find((de) => de.name.toLowerCase() === ne);
        if (se) return ((v ??= se), "");
        let oe = b.find((de) => de.name.toLowerCase() === ne);
        if (oe) return ((O ??= oe.name), "");
        let X = W.find((de) => de.toLowerCase() === ne);
        if (X) return ((R ??= m[X]), "");
        return J;
      })
      .trim(),
    I = A.search(/\s/),
    q = (I < 0 ? A : A.slice(0, I)).toLowerCase(),
    K = v ? void 0 : c.find((J) => J.name.toLowerCase() === q);
  if (K)
    return {
      template: K,
      intent: I < 0 ? "" : A.slice(I + 1).trim(),
      matched: !0,
      cwd: R,
      routine: O,
    };
  if (v) return { template: v, intent: A, matched: !0, cwd: R, routine: O };
  return { template: CLAUDE_AGENT_TEMPLATE, intent: A, matched: !1, cwd: R, routine: O };
}
function xa(s) {
  let c = s.trim();
  if (/\s/.test(c)) return null;
  if (/^https?:\/\//.test(c)) return ANY_CONTROL_CHAR_REGEX.test(c) ? null : c;
  let m = Ju(c);
  return tb(m) ? toLocalFileUrl(m) : null;
}
function Fc(s) {
  let c = [];
  for (let m of s.matchAll(/(?:^|\s)[aso]:/gi)) {
    let b = m.index + m[0].length;
    c.push([b - 2, b]);
  }
  return c;
}
function Mc(s, c) {
  let m = [];
  for (let b of s.matchAll(/(?:^|\s)@(\S+)/g)) {
    if (!c.has(b[1].toLowerCase())) continue;
    let k = b.index + b[0].length;
    m.push([k - b[1].length - 1, k]);
  }
  return m;
}
function Lc(s, c, m) {
  return s.replace(/[@/]\S*$/, () => `${c}${m} `);
}
function Ia(s, c, m = [], b = []) {
  let k = new Set([...m, ...b].map((v) => v.name.toLowerCase())),
    w = Object.keys(c);
  for (let v of s.matchAll(/(?:^|\s)@(\S+)/g)) {
    let R = v[1].toLowerCase();
    if (k.has(R)) continue;
    let O = w.find((W) => W.toLowerCase() === R);
    if (O) return c[O];
  }
  return;
}
var Jc = {
    agent: "background",
    repo: "repo",
    worktree: "worktree",
    skill: "skill",
    command: "command",
    workflow: "workflow",
    routine: "routine",
    model: "model",
  },
  Pa = {
    agent: "@",
    repo: "@",
    worktree: "@",
    routine: "@",
    skill: "/",
    command: "/",
    workflow: "/",
    model: "/",
  },
  ob = {
    kind: "model",
    name: "model",
    description: "Set model for this FleetView session (not persisted)",
  };
function Bc() {
  return [
    ...getEnabledModelOptions()
      .filter((s) => s.value)
      .map((s) => ({
        kind: "model",
        name: String(s.value),
        description: firstLine(s.description),
      })),
    {
      kind: "model",
      name: "default",
      description: "Reset to configured default",
    },
  ];
}
var Aa = [],
  Qi = [];
function Ea(s) {
  return { kind: "agent", name: s.name, description: firstLine(s.description) };
}
function Nc(s, c) {
  if (s === c || c.length === 0) return s;
  let m = new Set(s.map((b) => b.name.toLowerCase()));
  return [...s, ...c.filter((b) => !m.has(b.name.toLowerCase()))];
}
function Tc(s) {
  let c = getGlobalConfig().agentLastUsed ?? {};
  return s.slice().sort((m, b) => {
    let k = c[m.name] ?? 0,
      w = c[b.name] ?? 0;
    if (k !== w) return w - k;
    return m.name.localeCompare(b.name);
  });
}
function Dc(s, c, m) {
  let b = m[s];
  return b === void 0
    ? { kind: "repo", name: s, description: c[s] }
    : { kind: "worktree", name: s, description: b || c[s] };
}
function Hc(
  s,
  {
    templates: c = [],
    routines: m = [],
    repos: b = {},
    worktreeBranches: k = {},
    skills: w = [],
    models: v = [],
    dispatch: R,
    showAllAgents: O = !1,
  },
) {
  let W = beforeFirst(s, " ").toLowerCase(),
    A = W.startsWith("/"),
    I = s.match(/(?:^|\s)@(\S*)$/),
    q = I?.[1]?.toLowerCase(),
    K = I && Ia(s.slice(0, -I[0].length), b, c, m) !== void 0,
    J = new Set(c.map((be) => be.name.toLowerCase())),
    j = new Set([...J, ...m.map((be) => be.name.toLowerCase())]),
    ne = Object.keys(b).filter(
      (be) => !j.has(be.toLowerCase()) && !/\s/.test(be),
    ),
    se =
      q === void 0
        ? []
        : [
            ...Tc(c)
              .filter((be) => be.name.toLowerCase().startsWith(q))
              .map(Ea),
            ...m
              .filter((be) => be.name.toLowerCase().startsWith(q))
              .sort((be, le) => be.name.localeCompare(le.name)),
            ...(K
              ? []
              : ne
                  .filter((be) => be.toLowerCase().startsWith(q))
                  .sort((be, le) => be.localeCompare(le))
                  .map((be) => Dc(be, b, k))),
          ],
    oe = s.match(/(?:^|\s)\/(\S*)$/),
    X = oe?.[1]?.toLowerCase(),
    de =
      X === void 0
        ? []
        : [...(A ? [ob] : []), ...w]
            .filter((be) => be.name.toLowerCase().includes(X))
            .sort((be, le) => {
              let Fe = be.name.toLowerCase().startsWith(X),
                pe = le.name.toLowerCase().startsWith(X);
              return Fe !== pe ? (Fe ? -1 : 1) : be.name.localeCompare(le.name);
            }),
    ce = s.match(/^\s*\/model\s+(\S*)$/i),
    Ie = ce?.[1]?.toLowerCase(),
    ge =
      Ie === void 0
        ? []
        : v.filter((be) => be.name.toLowerCase().startsWith(Ie)),
    ke = A
      ? []
      : [
          ...c
            .filter((be) => be.name.toLowerCase().startsWith(W))
            .sort((be, le) => be.name.localeCompare(le.name))
            .map(Ea),
          ...m
            .filter((be) => be.name.toLowerCase().startsWith(W))
            .sort((be, le) => be.name.localeCompare(le.name)),
          ...ne
            .filter((be) => be.toLowerCase().startsWith(W))
            .sort((be, le) => be.localeCompare(le))
            .map((be) => Dc(be, b, k)),
          ...w
            .filter((be) => be.name.toLowerCase().startsWith(W))
            .sort((be, le) => be.name.localeCompare(le.name)),
        ],
    Ce =
      !R || R.exec !== void 0
        ? []
        : ce
          ? ge
          : I
            ? se
            : oe
              ? de
              : O && !s
                ? Tc(c).map(Ea)
                : !R.matched && W && !s.includes(" ")
                  ? ke
                  : [];
  return {
    firstWord: W,
    isSlashQuery: A,
    atMatch: I !== null,
    slashMatch: oe !== null,
    modelArgMatch: ce !== null,
    templateNames: J,
    repoNames: ne,
    suggestions: Ce,
  };
}
function Xi(s) {
  if (s.key !== "v") return !1;
  let c = getCurrentPlatform();
  if (s.ctrl && !s.meta) return c !== "windows";
  if (s.meta && !s.ctrl) return c === "windows" || c === "wsl";
  return !1;
}
function Zi(s, c) {
  readClipboardImage(getImageLimitsForModel(getMainLoopModel()))
    .then((m) => {
      if (m) s(m);
      else
        (logFeatureBad("input_image_paste", "not_found"), c("No image found in clipboard"));
    })
    .catch((m) => {
      (logFeatureBad("input_image_paste", "clipboard_read_failed"),
        logError(m),
        c("Couldn't read an image from the clipboard"));
    });
}
async function Vc(s) {
  let c = await listJobs(void 0, s).catch(() => []),
    m = !1;
  return (
    saveGlobalConfig((b) => {
      let k = b.agentLastUsed ?? {},
        w = { ...k };
      for (let v of c) {
        if (v.state.template === CLAUDE_AGENT_TEMPLATE.name) continue;
        if (k[v.state.template] !== void 0) continue;
        let R = Date.parse(v.state.createdAt);
        if (Number.isNaN(R)) continue;
        if (R > (w[v.state.template] ?? 0))
          ((w[v.state.template] = R), (m = !0));
      }
      if (!m) return b;
      return { ...b, agentLastUsed: w };
    }, s),
    m
  );
}
var ib = 4,
  Cr = "Still starting \u2014 try again in a moment",
  sb = new Set(["EPIPE", "ECONNRESET", "ECONNREFUSED", "ENOTCONN"]);
function wn(...s) {
  return respawnJob(...s).catch((c) => ({
    ok: !1,
    error: `Couldn't respawn \u2014 ${l(c)}`,
    alive: !1,
  }));
}
function Uc(s, c) {
  let {
      editor: m,
      roster: b,
      selection: k,
      view: w,
      attach: v,
      storageV5: R,
      credentials: O,
      onAction: W,
      exit: A,
      relaunchForUpdate: I,
      searchKeyDown: q,
      willInsertNewline: K,
      canonicalLauncherCwd: J,
      launcherCwd: j,
      effectiveCwd: ne,
      scopedFallbackOrigin: se,
      cwdFilter: oe,
      dispatchDefaults: X,
      query: de,
      dispatch: ce,
      templates: Ie,
      allRepos: ge,
      routines: ke,
      templateCache: Ce,
      suggestions: be,
      skills: le,
      modelArgMatch: Fe,
      modelSuggestions: pe,
      pickSuggestion: je,
      applySuggestion: We,
      closeAgentBrowse: yt,
      jobSessionIds: qe,
      builtRows: ve,
      bumpSuggGen: xe,
      mountAt: nt,
      focusedRow: tt,
      focused: ye,
      isOnboarding: $e,
      toggleCollapse: ot,
      openEarlier: Ue,
      openNewSessionRow: ze,
      openOrRespawn: Ht,
    } = s,
    bt = () => {
      (c.preventDefault(), c.stopImmediatePropagation());
    },
    xt = (Ve) => {
      (m.beginProgrammaticChange(), m.setQuery(Ve), w.setHelpOpen(!1));
    },
    Ut = c.ctrl;
  if (!Ut && K(c)) {
    q(c);
    return;
  }
  bt();
  let He =
      m.getSnapshot().mode === "bash"
        ? "!"
        : m.getSnapshot().query.trim().toLowerCase(),
    Tt = () => {
      (m.beginProgrammaticChange(),
        m.setQuery(""),
        saveJobDraft(J, { q: "", collapsed: [...k.getSnapshot().collapsed] }, R));
    };
  if (EXIT_COMMAND_NAMES.includes(He)) {
    (Tt(), A());
    return;
  }
  if (He.startsWith("/")) {
    let [Ve = "", Ye = ""] = m
        .getSnapshot()
        .query.trim()
        .slice(1)
        .split(/\s+(.*)/, 2),
      lt = findCommand(Ve.toLowerCase(), getBuiltinCommands());
    if (lt && isCommandEnabled(lt) && meetsAvailabilityRequirement(lt)) {
      if (lt.fleetHostCall) {
        (Tt(),
          lt
            .fleetHostCall(
              {
                exit: A,
                relaunch: () => I("manual"),
                login: () => W({ type: "login" }),
                setError: m.setError,
                setInfo: m.setHint,
                storageV5: R,
              },
              Ye,
            )
            .catch((dt) => {
              (logError(dt), m.setError(l(dt)));
            }));
        return;
      }
      if (lt.type !== "prompt" && lt.name !== "model") {
        let dt = Ve.toLowerCase(),
          Dt = je();
        if (
          !le.some(
            (Lt) =>
              Lt.kind !== "command" &&
              (Lt.name === dt || Lt.aliases?.includes(dt)),
          ) &&
          (!Dt || Dt.name === lt.name)
        ) {
          if (
            lt.name === "resume" &&
            !Ye.trim() &&
            w.getSnapshot().activeTab !== "remote" &&
            !oe &&
            Ca()
          ) {
            (Tt(), m.setError(null), m.setHint(null));
            let Gt = w.openResumePicker(),
              at = new Set(qe);
            if (qi()) {
              for (let jt of ve)
                if (jt.kind === "earlier") at.add(jt.entry.sessionId);
            }
            zi(at, !0, R).then((jt) => {
              if (Gt !== w.resumePickerGen) return;
              if (jt === null) {
                (logFeatureBad("fleet_view_resume_picker", "load_failed"),
                  w.setResumePicker({ entries: [], failed: !0 }));
                return;
              }
              let Jt = jt.filter(
                (st) =>
                  !b.isDeleting(st.sessionId.slice(0, 8)) &&
                  !b.isDeletingSession(st.sessionId),
              );
              (logFeatureOk("fleet_view_resume_picker", { count: Jt.length }),
                w.setResumePicker({ entries: Jt, failed: !1 }));
            });
            return;
          }
          m.setError(null);
          let { sanitizedName: Lt, skillNameHash: mt } = buildSkillNameInfo({
            rawName: lt.name,
            canonicalName: lt.name,
            isMcp: !1,
            isBuiltIn: builtInCommandNames().has(lt.name),
            isBundled: !1,
            isOfficial: !1,
          });
          (logEvent("tengu_slash_command_unavailable", {
            command_name: Lt,
            ...mt,
            surface:
              w.getSnapshot().activeTab === "remote"
                ? S("fleet-cloud")
                : S("fleet-local"),
            reason: S("unavailable_in_agent_view"),
          }),
            m.setHint(
              `/${lt.name} isn't available in agent view \u2014 attach to a session to run it`,
            ));
          return;
        }
      }
    }
  }
  if (He === "/model" || He.startsWith("/model ")) {
    let Ve = je();
    if (!Fe && Ve && Ve.kind !== "model");
    else {
      let Ye = m.getSnapshot().query.trim().slice(6).trim(),
        lt = Ye.toLowerCase(),
        dt = pe.map((Gt) => Gt.name),
        Dt = dt.find((Gt) => Gt.toLowerCase() === lt),
        ut = dt.filter((Gt) => Gt.toLowerCase().startsWith(lt)),
        Lt = Fe ? Ve?.name : void 0,
        mt = Dt ?? (ut.length === 1 ? ut[0] : void 0) ?? Lt;
      if (mt === "default")
        (Tt(),
          m.setSessionModel(void 0),
          m.setHint("Model reset to default for this session"));
      else if (mt)
        (Tt(),
          m.setSessionModel(mt),
          m.setHint(`Model set to ${mt} (session-scoped, not persisted)`));
      else if (!Ye)
        m.setHint("Usage: /model <name> \u2014 session-scoped, not persisted");
      else
        m.setHint(`Unknown model '${Ye}' \u2014 type /model  to see options`);
      return;
    }
  }
  if (be.length > 0) {
    (We(je()), yt());
    return;
  }
  let zt = m.getSnapshot().query,
    Wt = m.getSnapshot().mode === "bash",
    Je = zt === de && !Wt ? ce : Yi(Wt ? `!${zt}` : zt, Ie, ge, ke);
  if (Je?.intent || Je?.routine || Je?.matched) {
    let Ve = expandPastedContents(Je.intent, m.pastes);
    if (!Je.routine && !Je.matched && Ve.trim().length < ib) {
      (m.setError(null), m.setHint("Too short \u2014 describe the task"));
      return;
    }
    let Ye = Je.cwd ?? ne,
      lt = Ce.get(Ye);
    if (
      Je.matched &&
      !Je.exec &&
      !(Je.template.name.includes(":") && Ye !== ne)
    ) {
      if (
        lt &&
        !lt.some(
          (fe) =>
            fe.name === Je.template.name ||
            fe.name.endsWith(`:${Je.template.name}`),
        )
      ) {
        m.setError(`@${Je.template.name} isn't available in ${rb(Ye)}`);
        return;
      }
    }
    let dt = m.getSnapshot().sessionModel,
      Dt = getSpareJob(),
      Lt =
        !parsePastedPlaceholders(Ve).some((fe) => m.pastes[fe.id]?.type === "image") &&
        Ve.length <= LARGE_PASTE_CHAR_THRESHOLD &&
        !Ve.includes(`
`),
      mt =
        !!Dt &&
        Dt.ready &&
        !Je.matched &&
        !Je.routine &&
        !dt &&
        Ye === Dt.cwd &&
        areDefaultsEqual(Dt.defaults, X) &&
        Lt,
      Gt = mt ? Dt.sessionId : nb(),
      at = Gt.slice(0, 8);
    ((k.followId = at), m.beginProgrammaticChange());
    let Xt = Je.matched && !Je.exec ? Je.template.name : null,
      jt = Je.matched ? Je.template : resolveAgentTemplate(X, lt),
      Jt = m.pastes,
      st = Je.exec ? expandPastedContents(Je.exec, Jt) : void 0,
      Qt = {
        id: at,
        state: makeInitialState({
          template: st
            ? { name: "exec", description: "" }
            : Je.routine
              ? { name: Je.routine, description: "" }
              : jt,
          intent: st ?? Ve,
          sessionId: Gt,
          cwd: Ye,
          originCwd: Ye,
        }),
        activity: "flowing",
      };
    b.updatePendings((fe) => [...fe, Qt]);
    let St = zt,
      Qe = m.getSnapshot().mode,
      { savedFocusJobId: mo, followOrigin: no } = k;
    ((k.savedFocusJobId = null),
      (k.followOrigin = null),
      m.setQuery(""),
      m.setMode("prompt"),
      saveJobDraft(J, { q: "", collapsed: [...k.getSnapshot().collapsed] }, R),
      m.replacePastes({ ...m.pastes }),
      m.pruneOrphanedPastes({ pruneTextPastes: !0 }));
    let Ft = (fe) => {
      (b.updatePendings((Ae) => {
        let Be = Ae.filter((et) => et.id !== at);
        if (!m.getSnapshot().query && Be.length === 0)
          (m.mergeRestoredPastes(Jt),
            (k.savedFocusJobId = mo),
            (k.followOrigin = no),
            m.setMode(Qe),
            xt(St));
        return Be;
      }),
        m.setError(fe));
    };
    (async () => {
      let fe =
        st || Je.matched || lt || !X?.agent
          ? jt
          : resolveAgentTemplate(X, await listCustomAgents(Ye, R).catch(() => []));
      return st
        ? dispatchExecJob(st, Gt, Ye, R)
        : mt
          ? claimSpareJob(Ve, fe, R)
          : materializePastedImages(Ve, Jt, at, R).then((Ae) =>
              dispatchAgentJob(
                fe,
                Ae,
                {
                  sessionId: Gt,
                  targetCwd: Ye,
                  routine: Je.routine,
                  defaults: dt ? { ...X, model: dt } : X,
                  displayIntent: Ae !== Ve ? Ve : void 0,
                },
                R,
              ),
            );
    })().then(
      (fe) => {
        if (mt) ensureSpareJob(se, !1, X, Ce.get(se), R);
        if (!fe.ok) return Ft(fe.error);
        if (mt && fe.jobId !== at)
          ((k.followId = fe.jobId),
            (Qt = {
              ...Qt,
              id: fe.jobId,
              state: { ...Qt.state, sessionId: fe.sessionId },
            }),
            b.updatePendings((Ae) => Ae.map((Be) => (Be.id === at ? Qt : Be))));
        if (mt) b.kick(fe.sessionId, fe.jobId);
        if (Xt) {
          let Ae = !1;
          if (
            (saveGlobalConfig((Be) => {
              let et = Date.now(),
                ae = Be.agentLastUsed?.[Xt];
              if (ae !== void 0 && et - ae < 60000) return Be;
              return (
                (Ae = !0),
                {
                  ...Be,
                  agentLastUsed: { ...(Be.agentLastUsed ?? {}), [Xt]: et },
                }
              );
            }, R),
            Ae)
          )
            xe();
        }
        if (Ut)
          (v.arm(Qt.id, null), W({ type: "open", job: Qt, freshDispatch: !0 }));
        else if ((b.reload(), !mt)) b.watchPendingJobDir(at);
      },
      (fe) => {
        if (mt) ensureSpareJob(se, !1, X, Ce.get(se), R);
        Ft(l(fe));
      },
    );
  } else if (!Je?.cwd && Je?.exec === void 0)
    if (tt?.kind === "fold")
      ((k.followOrigin = null),
        (k.followId = null),
        k.expandCap(tt.group),
        logEvent("tengu_fleetview_fold_expand", {
          hidden_count: tt.hidden,
          ms_since_mount: Date.now() - nt,
        }));
    else if (tt?.kind === "header") {
      if ($e) return;
      ((k.followOrigin = tt.group), (k.followId = null), ot(tt.group));
    } else if (tt?.kind === "earlier") Ue(tt.entry, "section");
    else if (tt?.kind === "newsession") ze(tt.origin);
    else Ht(ye);
}
function Wc(s, c) {
  let { editor: m, dispatchInputActive: b, insertAtCursor: k } = s,
    w = c.replace(
      /\r\n|\r/g,
      `
`,
    ),
    v = m.lastMintedPasteId ?? -1,
    R = m.pastes[v];
  if (b && R?.type === "text" && R.content === w) {
    let W = findLatestPasteExpansion(m.getSnapshot().query, m.pastes);
    if (W?.id === v) {
      (delete m.pastes[v],
        m.setQueryAndCursor(W.expanded, W.cursorOffset),
        m.setExpandHintPasteId(null));
      return;
    }
  }
  let O = countLineBreaks(w);
  if (b && (w.length > LARGE_PASTE_CHAR_THRESHOLD || O > 2)) {
    let W = m.mintTextPaste(w);
    if ((k(formatPastedTextPlaceholder(W, O)), w.length <= MAX_PASTED_TEXT_CHARS)) m.setExpandHintPasteId(W);
    return;
  }
  k(w);
}
async function Oa(s, c, m) {
  let { editor: b, roster: k, attach: w, awayLoop: v, storageV5: R } = s;
  if (c.id.startsWith("remote-pending-")) return Cr;
  let O = k.holdJob(c.id),
    W = c.state.resumeSessionId ?? c.state.sessionId,
    A = k.kick(W, c.id);
  k.updateJobs((ne) => {
    if (!ne?.some((se) => se.id === c.id)) return ne;
    return ne.map((se) => {
      if (se.id !== c.id) return se;
      let oe = applyReplyPatch(se.state, m);
      return { ...se, state: oe, activity: Co(oe) };
    });
  });
  let I,
    q,
    K = !1,
    J = !1,
    j = !1;
  try {
    let ne = () => xi(v, c.state.sessionId, Date.now()),
      se = await replyToJob(c.id, m, c.state, void 0, ne, R);
    if (((I = se?.err ?? null), (q = se?.code), I === REPLY_ENOJOB_MSG)) {
      let oe = w.getWarming(c.id);
      if (oe) {
        await oe;
        let X = await replyToJob(c.id, m, c.state, void 0, ne, R);
        ((I = X?.err ?? null), (q = X?.code));
      }
    }
    if (I === REPLY_ENOJOB_MSG && getDraftMode(m) === "prompt") {
      let oe = await wn(c.id, { knownState: c.state, initialPrompt: m }, R);
      if (!oe.ok && oe.alive) {
        let X = await replyToJob(c.id, m, c.state, void 0, ne, R);
        ((I = X?.err ?? null), (q = X?.code));
      } else
        ((K = !oe.ok),
          (J = !oe.ok && oe.queued === !0),
          (j =
            !oe.ok &&
            "errorCode" in oe &&
            oe.errorCode === "dead_epoch_transcript_gone"),
          (I = oe.ok
            ? null
            : J
              ? "Reply queued \u2014 will be sent when this session restarts"
              : oe.error));
      if (oe.ok) ne();
    }
    if (I) A();
  } finally {
    O();
  }
  if (I === null) (logFeatureOk("fleet_view_reply"), b.clearReplyFailure(W));
  else if (I === REPLY_PEER_NO_SOCK_MSG) (logFeatureOk("fleet_view_reply"), b.clearReplyFailure(W));
  else {
    if (K) logForDebugging(`[fleetview] peek-reply respawn failed: ${I}`);
    let ne = Date.now();
    if (b.isRetryOfRecentReplyFailure(W, ne))
      logFeatureSad("fleet_view_reply", "retry_of_recent_failure");
    else if (I === REPLY_ENOJOB_MSG) logFeatureSad("fleet_view_reply", "not_running_no_respawn");
    else if (K && J) logFeatureSad("fleet_view_reply", "queued_for_later");
    else if (j) logFeatureSad("fleet_view_reply", "dead_epoch_transcript_gone");
    else if (K) logFeatureBad("fleet_view_reply", "respawn_failed");
    else if (isReplyDaemonRestartingMsg(I)) logFeatureSad("fleet_view_reply", "daemon_restarting");
    else {
      let se = I,
        oe = [...se.matchAll(/\bE[A-Z]{2,14}\b/g)].find(
          (ce) => !"/\\".includes(se[ce.index - 1] ?? "."),
        )?.[0];
      logForDebugging(`[fleetview] peek-reply send failed: ${se}`);
      let X = !1;
      if (!q && oe !== void 0 && sb.has(oe) && getDraftMode(m) === "prompt")
        X = await writeStateAtomic(
          getJobDir(c.id),
          { ...c.state, queuedPrompt: m, updatedAt: new Date().toISOString() },
          R,
        ).then(
          () => !0,
          (ce) => (
            logForDebugging(`[fleetview] queue-to-disk write failed: ${l(ce)}`, {
              level: "error",
            }),
            !1
          ),
        );
      let de = { errno: w8(q ?? oe) ?? S("unknown") };
      if (X)
        ((I = "Reply queued \u2014 will be sent when this session restarts"),
          logFeatureSad("fleet_view_reply", "queued_for_later", de));
      else logFeatureBad("fleet_view_reply", "send_failed", de);
    }
    b.noteReplyFailure(W, ne);
  }
  return (k.reload(), I);
}
function Kc(s) {
  let c,
    m,
    b,
    k,
    w,
    v = [];
  for (let R of s.trim().split(/\s+/)) {
    let O = R.toLowerCase();
    if (O.startsWith("a:")) c = O.slice(2) || void 0;
    else if (O.startsWith("s:")) m = O.slice(2) || void 0;
    else if (O.startsWith("o:")) b = O.slice(2);
    else if (Bn(R)) k = Bn(R);
    else if (es(R)) w = es(R);
    else v.push(R);
  }
  return {
    template: c,
    state: m,
    output: b,
    pr: k,
    url: w,
    text: v.join(" ").toLowerCase(),
  };
}
function Bn(s) {
  let c = s.trim();
  if (/\s/.test(c)) return null;
  return (
    (/^#(\d+)$/.exec(c) ??
      /\/pull\/(\d+)(?!\d)/.exec(c) ??
      /\/-\/merge_requests\/(\d+)(?!\d)/.exec(c))?.[1] ?? null
  );
}
function ts(s) {
  return new RegExp(`\\/(?:pull|-\\/merge_requests)\\/${s}(?!\\d)`);
}
function Ta(s, c, m = ts(c)) {
  return (
    Uo(s.children).some((b) => b.id === c || m.test(b.href)) ||
    Object.values(s.output ?? {}).some((b) => m.test(b))
  );
}
function es(s) {
  let c = s.trim();
  return !/\s/.test(c) && /^https?:\/\//i.test(c) ? c : null;
}
function Da(s, c) {
  return s.intent.includes(c) || !!s.initialPrompt?.includes(c);
}
F();
F();
function xb(is, WR) {
  let gb = is.match(/^(?:\*\*|\+\+|`)(.+?)(?:\*\*|\+\+|`)$/);
  if (gb) {
    return e(Text, { bold: !0, children: gb[1] }, WR);
  }
  if (ep.test(is)) {
    let Yc = stripTrailingPunctuation(is);
    return r(N, {
      children: [e(Link, { url: Yc, children: Yc }), is.slice(Yc.length)],
    });
  }
  return is;
}
var wb = 3;
function yb(s) {
  let c = s.state,
    m =
      isSettled(c) && !(terminalOutcome(c.state) === "success" && isSelfDriving(c))
        ? Date.parse(c.firstTerminalAt ?? c.updatedAt)
        : Date.now();
  return formatDuration(Math.max(0, m - Date.parse(c.createdAt)), {
    mostSignificantOnly: !0,
  });
}
function Hn(s, c) {
  let m = Date.now();
  if (c != null && c > m) return `in ${formatDuration(c - m, { mostSignificantOnly: !0 })}`;
  return yb(s);
}
function So(s, c = !1, m = !1) {
  if (s.name) return redactSecretsFromText(normalizeWhitespace(s.name));
  let b = 25,
    k = redactSecretsFromText(normalizeWhitespace(s.displayIntent ?? s.intent))
      .split(" ")
      .filter(Boolean);
  if (k.length === 0) {
    if (c) return m ? "session you came from" : "current session";
    if (
      (s.template === "bg" || s.template === CLAUDE_AGENT_TEMPLATE.name) &&
      s.state === "working"
    )
      return m ? "untitled session" : "new session";
    if (m && (s.template === "bg" || s.template === CLAUDE_AGENT_TEMPLATE.name))
      return "untitled session";
    return normalizeWhitespace(s.template);
  }
  let w = k.length > 3 ? `${k.slice(0, 3).join(" ")}\u2026` : k.join(" ");
  if (getStringWidth(w) <= b) return w;
  let v = "",
    R = 0;
  for (let O of splitGraphemes(w)) {
    let W = getStringWidth(O);
    if (R + W > b - 1) break;
    ((v += O), (R += W));
  }
  return `${v}\u2026`;
}
function ss(yo, yn) {
  let $c = _(12),
    ns = useClock(),
    ab;
  if ($c[0] !== yo || $c[1] !== yn)
    ((ab = { label: yo, hasName: yn, fired: !1 }),
      ($c[0] = yo),
      ($c[1] = yn),
      ($c[2] = ab));
  else ab = $c[2];
  let Er = C(ab),
    [Nn, Fa] = d(null),
    lb,
    db;
  if ($c[3] !== ns || $c[4] !== yo || $c[5] !== yn)
    ((lb = () => {
      if (Er.current.fired || Er.current.hasName || !yn) {
        Er.current = { label: yo, hasName: yn, fired: Er.current.fired };
        return;
      }
      let jc = Er.current.label;
      Er.current = { label: yo, hasName: !0, fired: !0 };
      let qc = Math.max(countGraphemes(jc), countGraphemes(yo));
      if (qc === 0) {
        return;
      }
      Fa({ old: jc, n: 1 });
      let rs = 1;
      let ub = Math.max(16, Math.floor(360 / qc));
      let Ma = null;
      let cb = () => {
        if (((rs = rs + 1), rs, rs >= qc)) (Fa(null), (Ma = null));
        else (Fa({ old: jc, n: rs }), (Ma = ns.setTimeout(cb, ub)));
      };
      return (
        (Ma = ns.setTimeout(cb, ub)),
        () => {
          (Ma?.(), Fa(null));
        }
      );
    }),
      (db = [ns, yo, yn]),
      ($c[3] = ns),
      ($c[4] = yo),
      ($c[5] = yn),
      ($c[6] = lb),
      ($c[7] = db));
  else ((lb = $c[6]), (db = $c[7]));
  if ((dn(lb, db), !Nn)) {
    return null;
  }
  let pb;
  if ($c[8] !== Nn.n || $c[9] !== Nn.old || $c[10] !== yo)
    ((pb = Qc(Nn.old, yo, Nn.n)),
      ($c[8] = Nn.n),
      ($c[9] = Nn.old),
      ($c[10] = yo),
      ($c[11] = pb));
  else pb = $c[11];
  return pb;
}
function Qc(s, c, m) {
  let b = splitGraphemes(s),
    k = splitGraphemes(c),
    w = k.slice(0, Math.min(m, k.length)).join(""),
    v = Math.max(getStringWidth(s), getStringWidth(c)),
    R = getStringWidth(w),
    O = "";
  for (let W of b.slice(m)) {
    let A = getStringWidth(W);
    if (R + A > v) break;
    ((O += W), (R += A));
  }
  return { display: w + O + repeatString(" ", v - R), newLen: w.length };
}
function Sb(s) {
  let c = Uo(s.children);
  if (!c.length) return 0;
  let m = c.filter((b) => b.kind !== "frame");
  if (m.length > 1) return getStringWidth(`${m.length} PRs`);
  if (m.length === 1) {
    let b = ip(m[0]);
    return getStringWidth(b !== void 0 ? `#${b}` : "PR");
  }
  return getStringWidth(c.length > 1 ? `${c.length} ${ARTIFACT_MARKER_GLYPH}` : ARTIFACT_MARKER_GLYPH);
}
function op(s, c, m, b) {
  let k = Math.max(wb, ...s.map((O) => getStringWidth(Hn(O, c(O))))),
    w = Math.min(
      Math.max(40, Math.floor(b / 3)),
      Math.max(12, ...s.map((O) => getStringWidth(So(O.state, O.id === m)))),
    ),
    v = Math.max(0, ...s.map((O) => Sb(O.state))),
    R = Math.max(8, b - (w + 2) - 2 - (v + 2) - (k + 2) - 2);
  return { age: k, label: w, artifact: v, detail: R };
}
function np() {
  return getSpinnerFrames();
}
function Xc() {
  return getSpinnerPingPongFrames();
}
function kb() {
  return np()[4];
}
function vb() {
  return np()[1];
}
function Sn(s, c, m, b) {
  if (s === "success" && b) return { word: "Done", color: "success", dim: !1 };
  if (s === "failure" && b) return { word: "Failed", color: "error", dim: !1 };
  if (s === "stopped" && b)
    return { word: "Stopped", color: "inactive", dim: !1 };
  if (m === "busy" || m === "shell")
    return { word: uo.working, color: void 0, dim: !1 };
  if (c === "blocked" || m === "waiting")
    return { word: uo.blocked, color: "warning", dim: !1 };
  return { word: "Idle", color: void 0, dim: !0 };
}
function rp(s, c, m) {
  let { color: b, dim: k } = Sn(c, s.tempo, m, terminalOutcome(s.state));
  return { color: b, dim: k };
}
var Zc = { error: 2, warning: 1 };
function Na(s, c) {
  let m = s,
    b = s ? (Zc[s] ?? 0) : 0;
  for (let k of c) {
    if (k.color === void 0 || Wo(k)) continue;
    let w = Zc[k.color] ?? 0;
    if (w > b) ((m = k.color), (b = w));
  }
  return m;
}
function Wo(s) {
  return s.row.kind === "frame";
}
function xr(s) {
  return isGitLabMergeRequestUrl(s.href) ? "mr" : "pr";
}
function ip(s) {
  let c = Bn(s.href);
  if (c !== null) return Number(c);
  return /^\d+$/.test(s.id) ? Number(s.id) : void 0;
}
function sp(s) {
  let c = getPullRequestDisplayStatus(s);
  return c === "error" ? "warning" : c;
}
var Rb = { error: 3, warning: 2, success: 1 };
function _b(s) {
  return [...s].sort((c, m) => m.sortRank - c.sortRank);
}
function Cb(s) {
  if (s.state === "MERGED") return [{ text: "merged", color: "merged" }];
  if (s.state === "CLOSED") return [{ text: "closed", color: "inactive" }];
  let c = [],
    { failed: m, pending: b, passed: k } = s.checks,
    w = m + b + k;
  if (m > 0) c.push({ text: `${figures.cross} ${m}/${w}`, color: "error" });
  else if (b > 0) c.push({ text: `${k}/${w}`, color: "warning" });
  else if (w > 0) c.push({ text: figures.tick, color: "success" });
  switch (s.review) {
    case "APPROVED":
      c.push({ text: "approved", color: "success" });
      break;
    case "CHANGES_REQUESTED":
      c.push({ text: figures.cross, color: "error" });
      break;
    case "REVIEW_REQUIRED":
      c.push({ text: "needs review", color: void 0 });
      break;
    case null:
      break;
  }
  if (c.length === 0 && s.state !== "DRAFT")
    c.push({ text: s.state.toLowerCase(), color: sp(s) });
  return c;
}
function Gn(s, c) {
  return _b(
    Uo(s).map((m) => {
      if (m.kind === "frame")
        return {
          row: m,
          prNumber: void 0,
          label: normalizeWhitespace(m.title ?? "") || normalizeWhitespace(m.id),
          status: [],
          diffStat: void 0,
          isDraft: !1,
          color: "claude",
          sortRank: 0,
        };
      let b = c.get(m.href),
        k = b ? getPullRequestDisplayStatus(b) : void 0;
      return {
        row: m,
        prNumber: b?.number ?? ip(m),
        label: b?.title ? normalizeWhitespace(b.title) : "",
        status: b ? Cb(b) : [],
        diffStat:
          b && b.state !== "MERGED" && b.state !== "CLOSED"
            ? { additions: b.additions, deletions: b.deletions }
            : void 0,
        isDraft: b?.state === "DRAFT",
        color: b ? sp(b) : void 0,
        sortRank: b?.state === "OPEN" && k ? (Rb[k] ?? 0) : 0,
      };
    }),
  );
}
var ep = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/;
function as(VR) {
  let fb = _(8),
    { value: zc } = VR,
    La,
    Ja,
    Ba;
  if (fb[0] !== zc) {
    let UR = zc.split(
      /(\*\*.+?\*\*|\+\+.+?\+\+|`[^`]+`|https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+)/g,
    );
    La = Text;
    Ja = !0;
    Ba = UR.map(xb);
    ((fb[0] = zc), (fb[1] = La), (fb[2] = Ja), (fb[3] = Ba));
  } else ((La = fb[1]), (Ja = fb[2]), (Ba = fb[3]));
  let mb;
  if (fb[4] !== La || fb[5] !== Ja || fb[6] !== Ba)
    ((mb = e(La, { dimColor: Ja, children: Ba })),
      (fb[4] = La),
      (fb[5] = Ja),
      (fb[6] = Ba),
      (fb[7] = mb));
  else mb = fb[7];
  return mb;
}
function Vn(s, c, m, b, k, w = !1) {
  let v = k ? "selected, " : "",
    R = w ? "pinned, " : "",
    { word: O } = Sn(s, c, m, b);
  return `${v}${R}${O.toLowerCase()}:`;
}
function Wn(s, c, m) {
  if (c && s.tempo !== "active" && m === void 0) return BULLET_OPERATOR_GLYPH;
  if (m === "busy" || m === "shell") return null;
  if (isLoopJob(s)) return vb();
  return kb();
}
function kn() {
  let $R = _(1),
    [, KR] = useAnimationFrame(120),
    hb;
  if ($R[0] === MEMO_CACHE_SENTINEL) ((hb = Xc()), ($R[0] = hb));
  else hb = $R[0];
  let bb = hb;
  return bb[Math.floor(KR / 120) % bb.length];
}
var Ib = 172800000,
  Pb = 3,
  Ab = 3,
  Tb = 2,
  Db = 2,
  Fb = 4,
  Mb = 1,
  Lb = "simple:new-session",
  $n = "simple:pinned",
  Zo = "simple:finished",
  Kn = { needs: "simple:needs", live: "simple:live", done: "simple:done" };
function jn(s, c) {
  if (c === "busy") return "live";
  if (isSettled(s) && !(terminalOutcome(s.state) === "success" && isSelfDriving(s))) return "done";
  if (c === "waiting") return "needs";
  if (s.tempo === "blocked" && s.needs && s.needs !== IDLE_NEEDS) return "needs";
  return "live";
}
function Ha(s) {
  for (let c of [s.lastTerminalAt, s.firstTerminalAt, s.updatedAt, s.createdAt])
    if (c) {
      let m = Date.parse(c);
      if (Number.isFinite(m)) return m;
    }
  return 0;
}
function Pr(s, c) {
  if (s === void 0) return !1;
  return !(ap(s) === Kn.done && ap(c) === Kn.done);
}
function ap(s) {
  return s.group === Zo ? Kn.done : s.group;
}
function Jb(s, c) {
  return Math.max(0, s - Pb - Ra - c);
}
function lp(
  s,
  {
    statusFor: c,
    now: m,
    fallbackOrigin: b,
    showFinishedEarlier: k,
    terminalRows: w,
  },
) {
  let v = [],
    R = [],
    O = [],
    W = [],
    A = 0,
    I = 0,
    q = 0;
  for (let ge of s) {
    let ke = c(ge),
      Ce = jn(ge.state, ke);
    if (Ce === "needs") A++;
    else if (Ce === "live") {
      if ((I++, ke === "busy" || ke === "shell")) q++;
    }
    if (ge.state.pinned) {
      v.push(ge);
      continue;
    }
    switch (Ce) {
      case "needs":
        R.push(ge);
        break;
      case "live":
        O.push(ge);
        break;
      case "done":
        W.push(ge);
        break;
    }
  }
  W.sort((ge, ke) => Ha(ke.state) - Ha(ge.state));
  let K = [{ kind: "newsession", origin: b, group: Lb }],
    J = (ge, ke) => {
      for (let Ce of ke)
        K.push({ kind: "job", job: Ce, origin: spawnOrigin(Ce.state), group: ge });
    };
  (J($n, v), J(Kn.needs, R), J(Kn.live, O));
  let ne =
      1 +
      (O.length * Tb + (v.length + R.length) * Ab) +
      (A + I === 0 ? Fb : 0) +
      (W.length > 0 ? 1 + Mb : 0),
    se = Jb(w, ne),
    oe = countMatching(W, (ge) => m - Ha(ge.state) > Ib),
    X = Math.max(0, W.length - oe - se),
    de = k ? 0 : oe + X,
    ce = de >= Db ? de : 0,
    Ie = countMatching(W.slice(W.length - ce), (ge) => terminalOutcome(ge.state.state) === "failure");
  if ((J(Kn.done, W.slice(0, W.length - ce)), ce > 0))
    K.push({ kind: "fold", origin: b, group: Zo, hidden: ce });
  return {
    rows: K,
    doneCount: W.length,
    doneFoldHidden: ce,
    doneFoldHiddenFailed: Ie,
    doneCap: se,
    foldGroup: Zo,
    runningCount: A + I,
    needsCount: A,
    workingCount: q,
    liveCount: I,
  };
}
function Bb(s) {
  let c = s.fan ?? [],
    m = c.filter((k) => k.kind === "todo");
  if (m.length > 0) return `${countMatching(m, (k) => k.doneAt !== void 0)}/${m.length}`;
  let b = c.filter((k) => k.kind === "agent" || k.kind === "workflow");
  if (b.length > 0)
    return `${countMatching(b, (k) => k.doneAt !== void 0)}/${b.length} agents`;
  return;
}
function Nb(s, c) {
  if (s === void 0 || s <= 0) return;
  let m = `${formatTokens(s)} tokens`;
  return c ? `${figures.arrowDown} ${m}` : m;
}
function Ga(s, c) {
  let m = c(s),
    b = Sn(s.activity, s.state.tempo, m, terminalOutcome(s.state.state));
  if (b.word === uo.working) return { ...b, color: void 0, dim: !0 };
  if (b.word !== uo.blocked) return b;
  return jn(s.state, m) === "needs"
    ? { ...b, word: "Needs you" }
    : { word: "Idle", color: void 0, dim: !0 };
}
function Ua(s, c, m) {
  return Hn(s, c.has(s.id) ? m.get(s.state.sessionId)?.nextAt : void 0);
}
function Wa(s, c) {
  return Nb(s.state.tokens, c.word === uo.working);
}
function $a(s, c, m, b) {
  let k = isScreenReaderModeEnabled() ? 1 / 0 : Math.max(24, Math.min(72, Math.floor(b * 0.55))),
    w = (A) => (k === 1 / 0 ? A : truncateToWidth(A, k));
  if (jn(s.state, m) === "done") return;
  let R = s.state.needs && s.state.needs !== IDLE_NEEDS ? s.state.needs : void 0;
  if (R) return w(Nt(R));
  if (!s.state.pinned && c.word !== uo.working) return;
  let O = Bb(s.state);
  if (O) return O;
  let W = s.state.detail;
  return W && !vr(W) ? w(Nt(W)) : void 0;
}
function Ko(s, c) {
  return c === "pinned" ? "pinned" : `${s}:${c}`;
}
function ls(s, c, m, b) {
  let k = c === "bash" ? null : Bn(s),
    w = k ? ts(k) : void 0,
    v = c === "bash" || k ? null : es(s),
    R = (W) => !b || jobMatchesCwd(W.state, b),
    O = k ? (W) => Ta(W, k, w) : v ? (W) => Da(W, v) : null;
  return O ? (m ?? []).find((W) => R(W) && O(W.state))?.id : void 0;
}
function ds(s, c, m, b) {
  return m
    ? null
    : Yi(c === "bash" ? `!${s}` : s, b.templates, b.allRepos, b.routines);
}
function Hb(s) {
  return !!(s?.intent || s?.routine || s?.matched);
}
function Gb(s) {
  return !!(
    s &&
    (s.intent ||
      s.routine ||
      s.matched ||
      s.cwd !== void 0 ||
      s.exec !== void 0)
  );
}
function dp({
  jobs: s,
  adoptedPeers: c,
  remoteJobs: m,
  pendings: b,
  prStatuses: k,
  liveStatus: w,
  heldInTerminal: v,
  loopJobIds: R,
  loopKicks: O,
  focusedIdx: W,
  hoverFocusIdx: A,
  collapsed: I,
  capExpanded: q,
  groupMode: K,
  activeTab: J,
  query: j,
  mode: ne,
  dispatch: se,
  linkMatchId: oe,
  dispatchRepoCwd: X,
  pendingDelete: de,
  earlierEntries: ce,
  cwdFilter: Ie,
  initialJobId: ge,
  simpleView: ke,
  simpleWantsRemote: Ce,
  peersEnabled: be,
  showRemoteTabs: le,
  launcherCwd: Fe,
  launcherGroup: pe,
  scopedFallbackOrigin: je,
  termRows: We,
  columns: yt,
  now: qe,
}) {
  let ve = (me) => Ko(K, me),
    xe = ne === "bash" || se?.exec !== void 0,
    nt = Hb(se),
    tt = Gb(se),
    {
      template: ye,
      state: $e,
      output: ot,
      pr: Ue,
      url: ze,
      text: Ht,
    } = Kc(se ? "" : j),
    bt = Ue ? ts(Ue) : void 0,
    xt = [...(s ?? []), ...(be ? c : [])],
    Ut = Ie ? xt.filter((me) => jobMatchesCwd(me.state, Ie)) : xt,
    He = le ? (J === "remote" ? m : Ut) : Ce ? [...Ut, ...m] : Ut,
    Tt = He.filter((me) => {
      if (ye && !me.state.template.toLowerCase().startsWith(ye)) return !1;
      if (Ue && !Ta(me.state, Ue, bt)) return !1;
      if (ze && !Da(me.state, ze)) return !1;
      if (
        ot !== void 0 &&
        !Object.values(me.state.output ?? {}).some((ht) =>
          ht.toLowerCase().includes(ot),
        )
      )
        return !1;
      if (
        $e &&
        !me.state.state.toLowerCase().startsWith($e) &&
        !lo(me.state).startsWith($e) &&
        !uo[Bi(me, k, w(me))].toLowerCase().startsWith($e)
      )
        return !1;
      if (Ht) {
        if (
          ![
            me.state.name,
            me.state.intent,
            me.state.detail,
            ...Object.values(me.state.output ?? {}),
          ]
            .join(" ")
            .toLowerCase()
            .includes(Ht)
        )
          return !1;
      }
      return !0;
    }),
    zt = b.filter((me) => !Tt.some((ht) => ht.id === me.id)),
    Wt = zt.length > 0 ? bn([...zt, ...Tt]) : Tt,
    Je = K === "state",
    Ve = K === "group",
    Ye = new Map(
      Wt.map((me) => [
        me.id,
        me.state.pinned
          ? "pinned"
          : de?.id === me.id && de.group
            ? de.group
            : Je
              ? Bi(me, k, w(me))
              : Ve
                ? (me.state.group ?? UNGROUPED)
                : Ui(me.state),
      ]),
    ),
    lt = (me) => (me === "pinned" ? -1 : me === UNGROUPED ? 1 : 0),
    dt = [...Wt].sort((me, ht) => {
      let Ct = Ye.get(me.id),
        $t = Ye.get(ht.id);
      if (Ct === "pinned" || $t === "pinned")
        return (Ct === "pinned" ? 0 : 1) - ($t === "pinned" ? 0 : 1);
      if (Ve) {
        let Vt = (Ne) =>
          de?.id === Ne.id && de.sortKey !== void 0
            ? de.sortKey
            : Date.parse(Ne.state.updatedAt);
        return lt(Ct) - lt($t) || Ct.localeCompare($t) || Vt(ht) - Vt(me);
      }
      if (Je) {
        let Vt = hn.indexOf(Ct) - hn.indexOf($t),
          Ne = (No) =>
            de?.id === No.id && de.sortKey !== void 0
              ? de.sortKey
              : Jn(No.state, Ct);
        return Vt !== 0
          ? Vt
          : Ne(ht) - Ne(me) ||
              ht.state.createdAt.localeCompare(me.state.createdAt);
      }
      if (Ct === pe && $t !== pe) return -1;
      if ($t === pe && Ct !== pe) return 1;
      return Ct.localeCompare($t);
    }),
    Dt = 1 / 0,
    ut = va,
    Lt = !1,
    mt = new Set();
  for (let me of [...(s ?? []), ...b, ...(be ? c : [])]) {
    if (me.state.sessionId) mt.add(me.state.sessionId);
    if (me.state.resumeSessionId) mt.add(me.state.resumeSessionId);
  }
  let at =
    Boolean(ye || Ue || ze || $e) ||
    ot !== void 0 ||
    ce.length === 0 ||
    J === "remote" ||
    Boolean(Ie)
      ? []
      : ce.filter(
          (me) =>
            !mt.has(me.sessionId) &&
            (!Ht || me.title.toLowerCase().includes(Ht)),
        );
  if (Je && !ke) {
    let me = dt.filter((Vt) => Ye.get(Vt.id) === "done"),
      ht = new Set(dt.map((Vt) => Ye.get(Vt.id))).size,
      Ct = dt.reduce((Vt, Ne) => {
        let No = Ye.get(Ne.id);
        return No !== "done" && !I.has(ve(No)) ? Vt + 1 : Vt;
      }, 0),
      $t = Vi(We, Ct + Math.max(0, ht * 2 - 1));
    if (((ut = $t.doneCap), (Lt = $t.compactHeader), !q.has("done")))
      Dt = hc({
        done: me,
        earlier: at,
        doneCap: ut,
        initialJobId: ge,
        linkMatchId: oe,
      });
  } else if (!ke && J !== "remote" && at.length > 0) {
    let me = new Set(dt.map((Ct) => Ye.get(Ct.id))).size,
      ht = Vi(We, dt.length + Math.max(0, me * 2 - 1));
    if (((ut = ht.doneCap), (Lt = ht.compactHeader), !q.has(EARLIER)))
      Dt = at.length >= ut + Hi ? ut : 1 / 0;
  }
  let Xt = {
      blocked: countMatching(He, (me) => lo(me.state, w(me)) === "blocked"),
      active: countMatching(He, (me) => lo(me.state, w(me)) === "active"),
      completed: countMatching(He, (me) => lo(me.state, w(me)) === "completed"),
    },
    jt = dt.every((me) => me.id === ge),
    Jt = !ke && Je && !j && jt && !dt[0]?.state.pinned,
    st = ke
      ? lp(Wt, {
          statusFor: w,
          now: qe,
          fallbackOrigin: je,
          showFinishedEarlier: q.has(Zo),
          terminalRows: We,
        })
      : null;
  if (st !== null) {
    let me = 1 + st.needsCount + st.liveCount;
    Lt = Vi(We, me).compactHeader;
  }
  let Qt =
      st ??
      mc(dt, Ye, {
        byState: Je,
        byGroup: Ve,
        onRemoteTab: J === "remote",
        launcherGroup: pe,
        scopedFallbackOrigin: je,
        doneFoldAt: Dt,
        emptyBucketHint: Jt,
        earlier: at,
      }),
    St = Qt.rows,
    Qe = new Map();
  for (let me of dt) {
    let ht = Ye.get(me.id);
    Qe.set(ht, (Qe.get(ht) ?? 0) + 1);
  }
  if (at.length > 0 && J !== "remote") {
    let me = Je ? "done" : EARLIER;
    Qe.set(me, (Qe.get(me) ?? 0) + at.length);
  }
  if (I.size > 0)
    St = St.filter((me) => me.kind === "header" || !I.has(ve(me.group)));
  let mo = ke ? 0 : gc(St, Fe),
    no =
      new Set(St.filter((me) => me.kind === "header").map((me) => me.group))
        .size > 1,
    Ft = St[W],
    fe = Ft?.kind === "job" ? Ft.job : void 0,
    Ae =
      Ft?.kind === "job" && Ft.job.state.backend !== "daemon"
        ? je
        : (Ft?.origin ?? je),
    Be = Ft?.group ?? pe,
    et = Je && !ke ? je : Ae,
    ae = W === A,
    gt = op(
      dt,
      (me) => (R.has(me.id) ? O.get(me.state.sessionId)?.nextAt : null),
      ge,
      yt,
    ),
    It = (() => {
      if (!tt || oe) return null;
      if (Je) return "working";
      if (X)
        return (
          St.find(
            (Ct) =>
              Ct.kind === "header" && Ct.origin === X && Ct.group !== "pinned",
          )?.group ?? null
        );
      let me = St[W];
      if (me?.kind === "job") {
        if (me.group === "pinned")
          return (
            St.find(
              (Ct) =>
                Ct.kind === "header" &&
                Ct.origin === me.origin &&
                Ct.group !== "pinned",
            )?.group ?? null
          );
        return me.group;
      }
      if (me?.kind === "header") return me.group === "pinned" ? null : me.group;
      return null;
    })(),
    Zt = !nt && se?.cwd !== void 0,
    Re = !!fe && b.some((me) => me.id === fe.id),
    kt = !!fe && fe.id === ge,
    Ke = countMatching(Ce ? [...xt, ...m] : xt, (me) => {
      let ht = Bi(me, k, w(me));
      return ht === "blocked" || ht === "working";
    }),
    oo = nt
      ? "create"
      : kt
        ? "return"
        : fe && Ni(fe.state) && !v(fe)
          ? "resume"
          : "open",
    Bo =
      Ft?.kind === "header"
        ? dt.filter((me) => Ye.get(me.id) === Ft.group)
        : [];
  return {
    byState: Je,
    byGroup: Ve,
    hasDispatch: nt,
    hasComposedDispatch: tt,
    isBashDispatch: xe,
    enterIsNoop: Zt,
    queryIsFilter: se === null,
    loopJobIds: R,
    localJobs: xt,
    scopedLocalJobs: Ut,
    scopedJobs: He,
    filtered: dt,
    groupOf: Ye,
    jobSessionIds: mt,
    earlierVisible: at,
    doneCap: ut,
    compactHeader: Lt,
    simpleBuilt: st,
    built: Qt,
    rows: St,
    homeIdx: mo,
    hasMultipleOrigins: no,
    groupCounts: Qe,
    bandCounts: Xt,
    onlyOrigin: jt,
    isOnboarding: Jt,
    focusedRow: Ft,
    focused: fe,
    focusedOrigin: Ae,
    focusedGroup: Be,
    dispatchOrigin: et,
    focusIsFromHover: ae,
    cols: gt,
    dispatchTargetGroup: It,
    headerJobs: Bo,
    runningCount: Ke,
    enterLabel: oo,
    focusedIsPending: Re,
    focusedIsOrigin: kt,
  };
}
function Kb(s) {
  return Wb(s) && !my(s) && !Xo(s) && !jf(s);
}
var ja =
    "Press enter again to restart this session fresh \u2014 it has no saved " +
    "transcript (stopped before its first response; any conversation it was backgrounded from is untouched).",
  Ya =
    "Press enter again to restart this session \u2014 it isn't responding (its conversation is saved and resumes).",
  qa =
    "Press enter to try the restart again \u2014 couldn't stop the unresponsive session yet (the background service may be restarting).",
  za =
    "Press enter again to resume this session (it ended while the background service was off), or ctrl+x to delete it.",
  $b = 700,
  up =
    "This session's saved conversation is no longer on disk (old transcripts are cleaned up), so there is nothing to resume. ctrl+x deletes the row.",
  pp =
    "This command's session isn't responding \u2014 ctrl+x stops it; a shell command is never run again for you",
  jb = 5000;
function Ar(s, c) {
  ((s.forkRefusedJobId = null),
    (s.restartOfferedJobId = null),
    (s.deadEpochOfferedJobId = null));
  let m = c.getSnapshot().error;
  if (m === ja || m === Ya || m === qa || m === za) c.setError(null);
}
function fp(s, c, m) {
  ((s.forkRefusedJobId = null),
    (s.deadEpochOfferedJobId = null),
    (s.restartOfferedJobId = m),
    c.setError(Ya));
}
function us(s, c, m, b) {
  let k = c.getSnapshot();
  return (
    s.getSnapshot().error === b &&
    !k.previewOpen &&
    !k.helpOpen &&
    !k.debugOpen &&
    !k.exitPending &&
    k.renaming === null &&
    k.groupEdit === null &&
    m.pending === null
  );
}
function cp(s) {
  let { query: c, mode: m } = s.editor.getSnapshot();
  return ds(c, m, ls(c, m, s.roster.jobs, s.cwdFilter), s.parseScope) !== null;
}
async function mp(s, c, m) {
  let {
      editor: b,
      roster: k,
      selection: w,
      view: v,
      attach: R,
      storageV5: O,
      mountAt: W,
      canonicalLauncherCwd: A,
    } = s,
    I = b.setError;
  if (R.getSnapshot().attachingJobId !== null || R.isPromoting(c.sessionId))
    return;
  let q = v.resumePromoteSessionId;
  if (q !== null && c.sessionId !== q && R.isPromoting(q)) return;
  (R.beginPromote(c.sessionId),
    v.closeResumePicker(),
    logEvent("tengu_fleetview_earlier_open", {
      ms_since_mount: Date.now() - W,
      via: fromEnum(m),
    }));
  let K = c.sessionId.slice(0, 8),
    J = (se, oe, X) => {
      if ((R.endPromote(c.sessionId), v.resumePromoteSessionId === c.sessionId))
        v.resumePromoteSessionId = null;
      if (m === "resume_picker")
        if (se === "bad") logFeatureBad("fleet_view_resume_picker", oe);
        else logFeatureSad("fleet_view_resume_picker", oe);
      I(X);
    },
    j;
  try {
    if ((await listAllLiveSessions(O)).some((ce) => ce.sessionId === c.sessionId)) {
      J("sad", "session_live_elsewhere", SESSION_LIVE_ELSEWHERE_MESSAGE);
      return;
    }
    if (k.isDeleting(K) || k.isDeletingSession(c.sessionId)) {
      J(
        "sad",
        "deleting_in_flight",
        "This session is being deleted \u2014 reopen /resume once it finishes",
      );
      return;
    }
    if ((await readJobState(getJobDir(K), O)) !== null) {
      J(
        "sad",
        "already_in_list",
        "This session is already in the list \u2014 press enter on its row",
      );
      return;
    }
    if (
      (await listJobs(void 0, O)).some(
        (ce) =>
          ce.state.sessionId === c.sessionId ||
          ce.state.resumeSessionId === c.sessionId,
      )
    ) {
      J(
        "sad",
        "already_in_list",
        "This session is already in the list \u2014 press enter on its row",
      );
      return;
    }
    let X;
    try {
      X = await Mi(c.fullPath, O);
    } catch {
      X = { kind: "absent" };
    }
    if (X.kind === "absent") {
      J(
        "bad",
        "transcript_gone",
        "This conversation's file is no longer on disk \u2014 it may have been cleaned up",
      );
      return;
    }
    if (X.kind === "refused") {
      J(
        "bad",
        "transcript_refused",
        "This conversation's file is a symbolic link or not a regular file, so it can't be opened from here \u2014 if it's a link, resume from the directory that holds the real file",
      );
      return;
    }
    if (X.kind === "unreadable") {
      J(
        "sad",
        "transcript_unverified",
        "Couldn't read this conversation's file just now \u2014 try again",
      );
      return;
    }
    let de = c.cwd;
    if (
      !Kb(c.cwd) ||
      (await resolveSymlinkAncestry(fsSurface, c.cwd, {
        surfaceNetworkRaw: !0,
        unreadableAncestry: "unverified",
      })) !== void 0
    )
      de = A;
    else
      try {
        if (!(await Ub(c.cwd)).isDirectory()) de = A;
      } catch {
        de = A;
      }
    if (de !== c.cwd && m === "resume_picker")
      logFeatureSad("fleet_view_resume_picker", "cwd_fallback");
    ({ state: j } = await preSeedReplBgJob(
      c.sessionId,
      {
        intent: c.title,
        name: c.title,
        cwd: de,
        inFlight: { tasks: 0, queued: 0, kinds: [] },
        linkScanPath: c.fullPath,
      },
      O,
    ));
  } catch (se) {
    if (Rt(se))
      logForDebugging(`[fleetview] past-session seed write failed: ${l(se)}`, {
        level: "error",
      });
    else logError(se);
    J("bad", "promote_failed", `Couldn't open ${c.title} \u2014 ${l(se)}`);
    return;
  }
  let ne = { id: K, state: j, activity: Co(j) };
  ((w.followId = K), k.updatePendings((se) => [...se, ne]), cs(s, ne));
}
function cs(s, c) {
  let {
      editor: m,
      roster: b,
      view: k,
      attach: w,
      deleteConfirm: v,
      storageV5: R,
      onAction: O,
      pendings: W,
    } = s,
    A = m.setError,
    I = performance.now();
  if (!c || w.getSnapshot().attachingJobId !== null) return;
  let q = k.resumePromoteSessionId;
  if (q !== null && c.state.sessionId !== q && w.isPromoting(q)) return;
  if ((k.closeResumePicker(), W.some((oe) => oe.id === c.id))) return;
  if (c.state.backend === "peer") {
    (A("Can't attach \u2014 this session is running in another terminal"),
      logFeatureOk("fleet_view_open"));
    return;
  }
  if (c.state.backend === "remote") {
    if (c.id.startsWith("remote-pending-")) {
      (A(Cr), logFeatureOk("fleet_view_open"));
      return;
    }
    O({
      type: "open",
      job: c,
      ...(cp(s) && { keepQuery: !0 }),
      respawnResult: { ok: !0, short: c.id, state: c.state },
      gestureT0: I,
    });
    return;
  }
  if (b.terminalHolderOf(c) !== void 0) {
    (A(SESSION_LIVE_ELSEWHERE_MESSAGE), logFeatureOk("fleet_view_open"));
    return;
  }
  if (
    c.state.deadEpochReapedAt !== void 0 &&
    isSettled(c.state) &&
    !isExecLaunch(c.state) &&
    w.forkRefusedJobId !== c.id
  ) {
    if (w.deadEpochGoneJobId === c.id) {
      (A(up), logFeatureOk("fleet_view_open"));
      return;
    }
    let oe = w.deadEpochOfferedJobId === c.id && us(m, k, v, za);
    if (oe && w.deadEpochOfferAgeMs() < $b) {
      w.deadEpochOfferedJobId = c.id;
      return;
    }
    if (!oe) {
      ((w.forkRefusedJobId = null),
        (w.restartOfferedJobId = null),
        (w.deadEpochOfferedJobId = c.id),
        A(za),
        logEvent("tengu_fleetview_dead_epoch_offer", {}),
        logFeatureOk("fleet_view_open"));
      return;
    }
    w.deadEpochOfferedJobId = null;
  } else if (w.deadEpochOfferedJobId === c.id) w.deadEpochOfferedJobId = null;
  let K = us(m, k, v, ja) && w.forkRefusedJobId === c.id;
  if (K) w.forkRefusedJobId = null;
  let J =
    (us(m, k, v, Ya) || us(m, k, v, qa)) &&
    w.restartOfferedJobId === c.id &&
    !isExecLaunch(c.state);
  if (w.restartOfferedJobId === c.id) w.restartOfferedJobId = null;
  let j = Vb();
  (claimAttachBeacon(j, "fleet", R).catch(() => {}), w.arm(c.id, j), A(null));
  let ne = w.nextRespawnAttempt(),
    se = w.getWarming(c.id);
  if (!se)
    ((se = wn(
      c.id,
      {
        knownState: c.state,
        ...(K && { forceRefusalRetry: !0 }),
        ...(J && {
          forceUnresponsive: !0,
          replyOnResume: c.state.tempo === "active",
        }),
      },
      R,
    )),
      w.trackWarming(c.id, se));
  se.then((oe) => {
    if (!w.isCurrentRespawnAttempt(ne)) {
      releaseAttachBeacon(j, R).catch(() => {});
      return;
    }
    if ((w.disarm(), !oe.ok && oe.errorCode === "kill_unconfirmed")) {
      (logFeatureSad("fleet_view_open", "restart_stop_unconfirmed"),
        logForDebugging(
          `[FV-attach] confirmed restart of ${c.id} could not stop the worker: ${oe.error}`,
          { level: "warn" },
        ),
        releaseAttachBeacon(j, R).catch(() => {}),
        (w.restartOfferedJobId = c.id),
        A(qa));
      return;
    }
    if (oe.ok || oe.alive)
      O({
        type: "open",
        job: c,
        ...(cp(s) && { keepQuery: !0 }),
        respawnResult: oe,
        gestureT0: I,
        gestureId: j,
      });
    else if (oe.errorCode === "fork_transcript_never_materialized")
      (releaseAttachBeacon(j, R).catch(() => {}),
        logFeatureSad("fleet_view_open", "fork_transcript_never_materialized"),
        (w.forkRefusedJobId = c.id),
        A(ja));
    else if (oe.errorCode === "resume_session_live_elsewhere")
      (releaseAttachBeacon(j, R).catch(() => {}),
        logFeatureSad("fleet_view_open", "resume_session_live_elsewhere"),
        A(oe.error));
    else if (oe.errorCode === "dead_epoch_transcript_gone")
      (releaseAttachBeacon(j, R).catch(() => {}),
        logFeatureSad("fleet_view_open", "dead_epoch_transcript_gone"),
        (w.deadEpochGoneJobId = c.id),
        A(up));
    else
      (logFeatureBad("fleet_view_open", "respawn_failed"),
        A(oe.error),
        releaseAttachBeacon(j, R).catch(() => {}));
  });
}
function gp(s, c) {
  let { editor: m, roster: b, attach: k, storageV5: w } = s,
    v = m.setError,
    R = k.getSnapshot();
  if (R.newSessionOpening || R.attachingJobId !== null) return;
  let O = k.beginNewSession();
  v(null);
  let W = () => k.isCurrentNewSessionAttempt(O);
  spawnBgSession(
    pv() ? ["--restricted"] : [],
    void 0,
    "shell",
    c,
    void 0,
    void 0,
    void 0,
    w,
  ).then(
    async (A) => {
      try {
        if (!A.ok) {
          if (!W()) return;
          (k.endNewSession(),
            logFeatureBad("fleet_view_new_session", A.reason ?? "spawn_failed"),
            v(A.error));
          return;
        }
        b.reload();
        let I = Date.now() + jb,
          q = b.jobs?.find((K) => K.id === A.short);
        while (!q && Date.now() < I && W())
          (await sleep(100), (q = b.jobs?.find((K) => K.id === A.short)));
        if (!W()) return;
        if ((k.endNewSession(), !q)) {
          (logFeatureSad("fleet_view_new_session", "row_pending"),
            v("Still starting \u2014 open the new session once it appears"));
          return;
        }
        (logFeatureOk("fleet_view_new_session"), cs(s, q));
      } catch (I) {
        if (!W()) return;
        (k.endNewSession(),
          logError(I),
          logFeatureBad("fleet_view_new_session", "threw"),
          v(`Couldn't start a new session \u2014 ${l(I)}`));
      }
    },
    (A) => {
      if (!W()) return;
      (k.endNewSession(),
        logError(A),
        logFeatureBad("fleet_view_new_session", "threw"),
        v(`Couldn't start a new session \u2014 ${l(A)}`));
    },
  );
}
function Tr(s, c, m) {
  logEvent("tengu_bg_agent_action", {
    action: fromEnum(s),
    source: S("fleet"),
    jobSessionId: sanitizeAnalyticsId(c.sessionId),
    agent: c.template,
    jobState: fromJobState(c.state),
    tempo: fromEnum(c.tempo),
    ...m,
    ...!1,
  });
}
class Or extends Error {
  constructor(s) {
    super(s);
    this.name = "FleetActionUnconfirmedError";
  }
}
function hp(s, c, m, b, k, w) {
  return [
    {
      key: "x",
      label: "stop",
      bands: ["active", "blocked"],
      run: async (v) => {
        c(v.id);
        let R = new Date().toISOString(),
          O = m(
            (W) =>
              W.map((A) =>
                A.id === v.id && !isSettled(A.state)
                  ? {
                      ...A,
                      state: {
                        ...A.state,
                        state: "stopped",
                        detail: "stopped",
                        tempo: "idle",
                        updatedAt: R,
                        firstTerminalAt: A.state.firstTerminalAt ?? R,
                        lastTerminalAt: R,
                      },
                      activity: "stopped",
                    }
                  : A,
              ),
            void 0,
            v.id,
          );
        try {
          let W = await killJob(v.id, v.state, void 0, w);
          if (!W.confirmed)
            throw (
              logFeatureBad("fleet_view_stop_job", "kill_unconfirmed"),
              new Or(W.error ?? "worker may still be running")
            );
          (logEvent("tengu_bg_agent_action", {
            action: S("stop"),
            source: S("fleet"),
            jobSessionId: sanitizeAnalyticsId(v.state.sessionId),
          }),
            logFeatureOk("fleet_view_stop_job"));
          let A = getJobDir(v.id),
            I = await readJobState(A, w);
          if (I && !isSettled(I))
            await writeStateAtomic(
              A,
              {
                ...I,
                state: "stopped",
                detail: "stopped",
                tempo: "idle",
                updatedAt: R,
                firstTerminalAt: I.firstTerminalAt ?? R,
              },
              w,
            );
        } finally {
          (O?.(), s());
        }
      },
    },
    {
      key: "x",
      label: "delete",
      bands: ["completed"],
      run: async (v, { bulk: R }) => {
        let O;
        if (!R) ((O = k(v.id)?.discardOffer), b(v.id, null));
        let W = m((I) => I.filter((q) => q.id !== v.id), v.id),
          A;
        try {
          if (
            ((A = await deleteJob(
              v.id,
              O === void 0
                ? { force: !0 }
                : { force: !0, discardUnpushed: O.pin },
              w,
            )),
            !A.removed && !A.keptWorktree)
          )
            throw (
              logFeatureBad("fleet_view_delete_job", A.errorCode ?? "delete_unconfirmed"),
              b(v.id, { notice: A.error ?? "worker may still be running" }),
              new Or(A.error ?? "worker may still be running")
            );
        } finally {
          (W?.(), s());
        }
        if (!A.removed) {
          let {
              keptWorktree: I,
              keptErrorSummary: q,
              keptUnpushed: K,
              discardUnpushed: J,
            } = A,
            j = A.keptReason ?? "remove_failed";
          if (
            (logFeatureSad("fleet_view_delete_job", `worktree_kept_${j}`),
            K && I !== void 0)
          ) {
            let se = pluralize(K.count, "it", "them");
            if (J === void 0)
              return (
                b(v.id, {
                  notice: `${formatUnpushedCommitsSummary(K)} \u2014 push ${se} first; another session also records this worktree`,
                }),
                `${formatUnpushedCommitsDetail(K)} \u2014 push ${se} first; another finished session also records this worktree. Worktree: ${I}`
              );
            return (
              b(v.id, {
                notice: `${formatUnpushedCommitsSummary(K)} \u2014 delete again to discard`,
                discardOffer: { pin: J, worktree: I },
              }),
              `${formatUnpushedCommitsDetail(K)} \u2014 push ${se}, or delete again to discard. Worktree: ${I}`
            );
          }
          let ne = formatKeptWorktreeLabel(j, q);
          return (
            b(v.id, { notice: `worktree ${ne}` }),
            `Worktree kept at ${I} \u2014 ${ne}; the session was not deleted`
          );
        }
        if (A.leftWorktreeDir)
          logFeatureSad("fleet_view_delete_job", "worktree_left_in_place");
        else logFeatureOk("fleet_view_delete_job");
        if (v.state.pinned) writeJobPinned(v.id, !1, w).catch(() => {});
        if (
          (logEvent("tengu_bg_agent_action", {
            action: S("delete"),
            source: S("fleet"),
            jobSessionId: sanitizeAnalyticsId(v.state.sessionId),
          }),
          A.leftWorktreeDir)
        )
          return `Worktree directory left at ${A.leftWorktreeDir} \u2014 git no longer recognized it; the session was deleted`;
        if (O !== void 0)
          return A.discardConfirmed
            ? `Session deleted and its worktree removed: ${O.worktree}`
            : "Session deleted";
      },
    },
  ];
}
F();
import { basename as jy } from "path";
F();
function bp(s) {
  let [c, m] = d([]);
  (E(() => {
    if (isRemoteActive() || isBgSession()) return;
    if (!shouldAutoConnectIde()) return;
    let b = !1;
    return (
      discoverIde().then(async (k) => {
        if (b || !k) return;
        let w = {
          type: k.url.startsWith("ws:") ? "ws-ide" : "sse-ide",
          url: k.url,
          ideName: k.name,
          authToken: k.authToken,
          ideRunningInWindows: k.ideRunningInWindows,
          scope: "dynamic",
        };
        if ((await awaitPolicyColdStart(), b || isMcpServerBlockedAtConnectTime("ide", w))) return;
        let { clearServerCache: v, connectToServer: R } = import.meta
            .require("../MCP客户端/mcpClientModule.4cyej0np.js")
            .mcpClientModule(),
          O = await R("ide", w);
        if (b) return;
        if (O.type !== "connected") v("ide", w).catch(() => {});
        m([O]);
      }),
      () => {
        ((b = !0), cancelIdeSearch());
      }
    );
  }, []),
    useIdeAtMentionNotification(c, s));
}
function Zb(vC) {
  return vC.sessionModel;
}
function rl(yC) {
  let vn = _(35),
    {
      editor: SC,
      layout: kC,
      simpleView: Qa,
      dispatchDefaults: wp,
      targetCwd: ps,
      launcherCwd: yp,
      canonicalLauncherCwd: Sp,
      originJobId: kp,
    } = yC,
    { columns: Dr } = useTerminalSize(),
    Xa = useStoreSelector(SC, Zb),
    {
      compactHeader: Fr,
      simpleBuilt: vo,
      bandCounts: fs,
      earlierVisible: vp,
    } = kC,
    Mr,
    Rn,
    zb,
    ms;
  if (
    vn[0] !== Sp ||
    vn[1] !== Dr ||
    vn[2] !== wp?.model ||
    vn[3] !== yp ||
    vn[4] !== Xa ||
    vn[5] !== ps
  ) {
    let { version: Lr, cwd: Yb } = getFooterInfo();
    ms = Lr;
    Rn = Xa ? `${renderModelSetting(Xa)} (session)` : renderModelSetting(wp?.model ?? getMainLoopModel());
    Mr = !!Yb && ps !== yp && ps !== Sp;
    zb = truncatePathSegments(Mr ? formatPathWithTilde(ps) : Yb, Math.max(Dr - 11 - (Rn ? getStringWidth(Rn) + 3 : 0), 10));
    ((vn[0] = Sp),
      (vn[1] = Dr),
      (vn[2] = wp?.model),
      (vn[3] = yp),
      (vn[4] = Xa),
      (vn[5] = ps),
      (vn[6] = Mr),
      (vn[7] = Rn),
      (vn[8] = zb),
      (vn[9] = ms));
  } else ((Mr = vn[6]), (Rn = vn[7]), (zb = vn[8]), (ms = vn[9]));
  let Jr = zb,
    Lr;
  if (vn[10] !== Dr || vn[11] !== Fr)
    ((Lr = !Fr && Dr >= 70 && e(ClawdMascot, {})),
      (vn[10] = Dr),
      (vn[11] = Fr),
      (vn[12] = Lr));
  else Lr = vn[12];
  let Za;
  if (
    vn[13] !== Fr ||
    vn[14] !== Jr ||
    vn[15] !== Mr ||
    vn[16] !== Rn ||
    vn[17] !== Qa ||
    vn[18] !== ms
  )
    ((Za =
      !Fr &&
      r(N, {
        children: [
          Qa
            ? r(Text, {
                wrap: "truncate",
                children: [
                  e(Text, { bold: !0, children: "Claude Code" }),
                  " ",
                  r(Text, { dimColor: !0, children: ["v", ms] }),
                ],
              })
            : r(Text, {
                children: [
                  e(Text, { bold: !0, children: "Claude Code" }),
                  " ",
                  r(Text, { dimColor: !0, children: ["v", ms] }),
                ],
              }),
          Qa
            ? r(Text, {
                dimColor: !0,
                wrap: "truncate",
                children: [
                  Rn,
                  Rn && Jr ? " \xB7 " : "",
                  Jr &&
                    e(Text, {
                      color: Mr ? "suggestion" : void 0,
                      dimColor: !Mr,
                      children: Jr,
                    }),
                ],
              })
            : e(Text, {
                dimColor: !0,
                children: [Rn, Jr].filter(Boolean).join(" \xB7 "),
              }),
        ],
      })),
      (vn[13] = Fr),
      (vn[14] = Jr),
      (vn[15] = Mr),
      (vn[16] = Rn),
      (vn[17] = Qa),
      (vn[18] = ms),
      (vn[19] = Za));
  else Za = vn[19];
  let el;
  if (vn[20] !== fs || vn[21] !== vp || vn[22] !== vo)
    ((el = vo
      ? e(Text, {
          dimColor: !0,
          wrap: "truncate",
          children: r(DotSeparatedList, {
            children: [
              vo.needsCount > 0 && `${vo.needsCount} needs you`,
              vo.workingCount > 0 && `${vo.workingCount} working`,
              vo.liveCount - vo.workingCount > 0 &&
                `${vo.liveCount - vo.workingCount} idle`,
              vo.runningCount === 0 && "nothing running",
            ],
          }),
        })
      : e(Text, {
          dimColor: !0,
          children: r(DotSeparatedList, {
            children: [
              `${fs.blocked} awaiting input`,
              `${fs.active} working`,
              `${fs.completed + vp.length} completed`,
            ],
          }),
        })),
      (vn[20] = fs),
      (vn[21] = vp),
      (vn[22] = vo),
      (vn[23] = el));
  else el = vn[23];
  let tl;
  if (vn[24] !== Za || vn[25] !== el)
    ((tl = r(Box, { flexDirection: "column", children: [Za, el] })),
      (vn[24] = Za),
      (vn[25] = el),
      (vn[26] = tl));
  else tl = vn[26];
  let ol;
  if (vn[27] !== Lr || vn[28] !== tl)
    ((ol = r(Box, { gap: 2, marginBottom: 1, children: [Lr, tl] })),
      (vn[27] = Lr),
      (vn[28] = tl),
      (vn[29] = ol));
  else ol = vn[29];
  let nl;
  if (vn[30] !== kp)
    ((nl =
      kp !== void 0 &&
      e(Box, {
        marginBottom: 1,
        children: e(Text, {
          dimColor: !0,
          children:
            "Your conversation moved to the background \u2014 enter opens it \xB7 esc returns to it \xB7 ctrl+c twice quits",
        }),
      })),
      (vn[30] = kp),
      (vn[31] = nl));
  else nl = vn[31];
  let Xb;
  if (vn[32] !== ol || vn[33] !== nl)
    ((Xb = r(N, { children: [ol, nl] })),
      (vn[32] = ol),
      (vn[33] = nl),
      (vn[34] = Xb));
  else Xb = vn[34];
  return Xb;
}
F();
F();
import { basename as Hp } from "path";
function iw(jC) {
  return !Wo(jC);
}
function sw(qC) {
  return qC.color !== void 0;
}
var Ss = getStringWidth(" (reserved name)");
function Io(s, c, m, b = !1) {
  if (b && s) {
    let W = truncateStartToWidth(s, Math.max(m - 1, 1));
    return r(N, {
      children: [
        e(Text, { inverse: !0, children: W }),
        e(Text, { inverse: !0, children: " " }),
      ],
    });
  }
  let { length: k, length: w } = s;
  for (let { segment: W, index: A } of getGraphemeSegmenter().segment(s))
    if (A + W.length > c) {
      ((k = A), (w = A + W.length));
      break;
    }
  let v = s.slice(k, w) || " ",
    R = s.slice(w),
    O = truncateStartToWidth(s.slice(0, k), m - getStringWidth(v) - (R ? 1 : 0));
  return r(N, {
    children: [
      e(Text, { children: O }),
      e(Text, { inverse: !0, children: v }),
      e(Text, { children: R }),
    ],
  });
}
function ks(HC) {
  let ro = _(66),
    {
      job: wt,
      isFocused: co,
      focusFg: il,
      isOrigin: po,
      logTail: GC,
      status: ll,
      cols: Eo,
      showVerb: Rp,
      loopKickCount: dl,
      age: _p,
      childRows: Cp,
      renaming: Br,
      groupEditing: fo,
      deleteArmed: xo,
      deleteRefused: VC,
      attaching: $o,
      heldInTerminal: Nr,
    } = HC,
    qn = terminalOutcome(wt.state.state),
    zn = qn && wt.state.tempo !== "active" ? VC : void 0,
    ul = Eo.detail - getStringWidth("group: ") - Ss >= 24,
    Gr = Sn(wt.activity, wt.state.tempo, ll, qn),
    { color: cl, dim: UC } = Gr,
    Vr = ll === "busy" ? cl : Na(cl, Cp),
    WC = Vr === cl && UC,
    Ep =
      $o === "armed"
        ? void 0
        : xo?.justKilled
          ? BULLET_OPERATOR_GLYPH
          : $o
            ? void 0
            : Wn(wt.state, qn, ll),
    gs = wt.state.output?.result,
    ew;
  if (ro[0] !== gs) ((ew = gs ? xa(gs) : null), (ro[0] = gs), (ro[1] = ew));
  else ew = ro[1];
  let Yn = ew,
    KC = Yn ? void 0 : gs,
    $C = qn !== "success" ? GC || void 0 : void 0,
    xp =
      po && co
        ? wt.state.tempo === "blocked"
          ? wt.state.needs
          : qn === "failure"
            ? wt.state.detail
            : void 0
        : void 0,
    tw;
  if (ro[2] !== wt.state.detail)
    ((tw = vr(wt.state.detail)), (ro[2] = wt.state.detail), (ro[3] = tw));
  else tw = ro[3];
  let ow = tw,
    Ip =
      po &&
      wt.state.tempo === "blocked" &&
      wt.state.needs === IDLE_NEEDS &&
      wt.state.detail &&
      !ow
        ? wt.state.detail
        : void 0,
    hs =
      po && co
        ? xp
          ? xp === IDLE_NEEDS
            ? Ip
              ? Nt(Ip)
              : Hp(wt.state.cwd) || wt.state.cwd
            : Nt(xp)
          : Nt(wt.state.detail ?? "")
        : qn === "success"
          ? Nt(KC || wt.state.detail)
          : Nt(
              Ip ||
                (!po &&
                  co &&
                  wt.state.tempo === "blocked" &&
                  wt.state.needs === IDLE_NEEDS &&
                  "space to send it a prompt") ||
                (wt.state.tempo === "blocked" && wt.state.needs) ||
                (!ow && wt.state.detail) ||
                "",
            ) ||
            (wt.state.tempo === "active" && Nt($C ?? "")) ||
            Nt(wt.state.detail),
    nw;
  if (ro[4] !== po || ro[5] !== wt.state)
    ((nw = So(wt.state, po)), (ro[4] = po), (ro[5] = wt.state), (ro[6] = nw));
  else nw = ro[6];
  let Qn = nw,
    pl = isAgentColorName(wt.state.color) ? AGENT_COLOR_THEME_KEYS[wt.state.color] : void 0,
    Xn = ss(Qn, !!wt.state.name),
    Pp = Cp.filter(Wo),
    ys = Cp.filter(iw),
    en = ys.find(sw) ?? ys.at(-1) ?? Pp.at(-1),
    Ap = co ? "selected, " : "",
    Op = $o
      ? `${Ap}opening:`
      : xo?.justKilled
        ? `${Ap}stopped:`
        : Vr !== cl
          ? `${Ap}needs attention:`
          : Vn(wt.activity, wt.state.tempo, ll, qn, co);
  const Tp = Box,
    Dp = Eo.label + 2,
    Fp = !co && !po,
    Lp = WC || (Vr === void 0 && !co);
  let fl;
  if (ro[7] !== Ep) ((fl = Ep ?? e(kn, {})), (ro[7] = Ep), (ro[8] = fl));
  else fl = ro[8];
  let ml;
  if (ro[9] !== Vr || ro[10] !== Op || ro[11] !== Lp || ro[12] !== fl)
    ((ml = e(Text, { "aria-label": Op, color: Vr, dimColor: Lp, children: fl })),
      (ro[9] = Vr),
      (ro[10] = Op),
      (ro[11] = Lp),
      (ro[12] = fl),
      (ro[13] = ml));
  else ml = ro[13];
  let gl;
  if (
    ro[14] !== Eo.label ||
    ro[15] !== Yn ||
    ro[16] !== co ||
    ro[17] !== po ||
    ro[18] !== Qn ||
    ro[19] !== Br ||
    ro[20] !== Xn ||
    ro[21] !== pl
  )
    ((gl =
      pl && !Br
        ? e(BackgroundText, {
            color: pl,
            bold: co,
            children: Yn ? e(Link, { url: Yn, children: Qn }) : Qn,
          })
        : Br
          ? Io(Br.draft, Br.cursor, Eo.label)
          : Xn
            ? r(N, {
                children: [
                  e(Text, {
                    dimColor: !co && !po,
                    children: Xn.display.slice(0, Xn.newLen),
                  }),
                  e(Text, { dimColor: !0, children: Xn.display.slice(Xn.newLen) }),
                ],
              })
            : Yn
              ? e(Link, { url: Yn, children: Qn })
              : Qn),
      (ro[14] = Eo.label),
      (ro[15] = Yn),
      (ro[16] = co),
      (ro[17] = po),
      (ro[18] = Qn),
      (ro[19] = Br),
      (ro[20] = Xn),
      (ro[21] = pl),
      (ro[22] = gl));
  else gl = ro[22];
  let hl;
  if (ro[23] !== po || ro[24] !== gl)
    ((hl = e(Text, { bold: po, children: gl })),
      (ro[23] = po),
      (ro[24] = gl),
      (ro[25] = hl));
  else hl = ro[25];
  let bl;
  if (ro[26] !== il || ro[27] !== hl || ro[28] !== Fp || ro[29] !== ml)
    ((bl = r(Text, {
      color: il,
      dimColor: Fp,
      wrap: "truncate",
      children: [ml, " ", hl],
    })),
      (ro[26] = il),
      (ro[27] = hl),
      (ro[28] = Fp),
      (ro[29] = ml),
      (ro[30] = bl));
  else bl = ro[30];
  let wl;
  if (ro[31] !== bl || ro[32] !== Dp)
    ((wl = e(Box, { width: Dp, flexShrink: 0, children: bl })),
      (ro[31] = bl),
      (ro[32] = Dp),
      (ro[33] = wl));
  else wl = ro[33];
  let yl;
  if (
    ro[34] !== $o ||
    ro[35] !== Eo.detail ||
    ro[36] !== xo ||
    ro[37] !== zn ||
    ro[38] !== fo ||
    ro[39] !== ul ||
    ro[40] !== Nr ||
    ro[41] !== hs ||
    ro[42] !== Rp ||
    ro[43] !== Gr
  )
    ((yl = fo
      ? r(Text, {
          wrap: "truncate",
          children: [
            e(Text, { dimColor: !0, children: "group: " }),
            Io(
              fo.draft,
              fo.cursor,
              Math.max(Eo.detail - getStringWidth("group: ") - (ul ? Ss : 0), 8),
              fo.selected,
            ),
            fo.reserved
              ? e(Text, { color: "error", children: " (reserved name)" })
              : !ul
                ? null
                : fo.isNew
                  ? e(Text, { dimColor: !0, children: " (new group)" })
                  : fo.ungroup
                    ? e(Text, { dimColor: !0, children: " (ungroup)" })
                    : fo.addTo
                      ? r(Text, {
                          dimColor: !0,
                          children: [" (add to ", fo.addTo, ")"],
                        })
                      : null,
          ],
        })
      : $o === "armed"
        ? e(Text, {
            dimColor: !0,
            wrap: "truncate",
            children: "opening\u2026 \xB7 esc to cancel",
          })
        : xo
          ? e(Text, {
              color: xo.ungroup ? "warning" : "error",
              wrap: "truncate",
              children: xo.ungroup
                ? "ctrl+x again to ungroup"
                : xo.justKilled
                  ? "stopped \xB7 ctrl+x again to delete"
                  : "ctrl+x again to delete",
            })
          : zn
            ? r(Text, {
                wrap: "truncate",
                children: [
                  e(Text, { color: "error", children: "not deleted" }),
                  r(Text, { dimColor: !0, children: [" \xB7 ", zn] }),
                ],
              })
            : $o
              ? e(Text, {
                  dimColor: !0,
                  wrap: "truncate",
                  children: "opening\u2026",
                })
              : Nr
                ? e(Text, {
                    wrap: "truncate",
                    children: r(DotSeparatedList, {
                      children: [
                        e(Text, {
                          color: "suggestion",
                          children: "Open in a terminal",
                        }),
                        e(Text, { dimColor: !0, children: "continue it there" }),
                      ],
                    }),
                  })
                : Rp
                  ? e(Text, {
                      wrap: "truncate",
                      children: r(DotSeparatedList, {
                        children: [
                          e(Text, {
                            color: Gr.color,
                            dimColor: Gr.dim,
                            children: Gr.word,
                          }),
                          hs && e(Text, { dimColor: !0, children: hs }),
                        ],
                      }),
                    })
                  : e(Text, { dimColor: !0, wrap: "truncate", children: hs })),
      (ro[34] = $o),
      (ro[35] = Eo.detail),
      (ro[36] = xo),
      (ro[37] = zn),
      (ro[38] = fo),
      (ro[39] = ul),
      (ro[40] = Nr),
      (ro[41] = hs),
      (ro[42] = Rp),
      (ro[43] = Gr),
      (ro[44] = yl));
  else yl = ro[44];
  let Sl;
  if (
    ro[45] !== $o ||
    ro[46] !== xo ||
    ro[47] !== zn ||
    ro[48] !== fo ||
    ro[49] !== Nr ||
    ro[50] !== dl
  )
    ((Sl =
      dl && !fo && !xo && !zn && !$o && !Nr
        ? e(Box, {
            flexShrink: 0,
            paddingLeft: 1,
            children: r(Text, { dimColor: !0, children: ["\xD7", dl] }),
          })
        : null),
      (ro[45] = $o),
      (ro[46] = xo),
      (ro[47] = zn),
      (ro[48] = fo),
      (ro[49] = Nr),
      (ro[50] = dl),
      (ro[51] = Sl));
  else Sl = ro[51];
  let kl;
  if (ro[52] !== yl || ro[53] !== Sl)
    ((kl = r(Box, { flexGrow: 1, width: 0, paddingLeft: 2, children: [yl, Sl] })),
      (ro[52] = yl),
      (ro[53] = Sl),
      (ro[54] = kl));
  else kl = ro[54];
  const Bp =
      Eo.artifact > 0
        ? e(Box, {
            width: Eo.artifact + 2,
            flexShrink: 0,
            paddingLeft: 2,
            justifyContent: "flex-end",
            children:
              ys.length > 1
                ? r(Text, {
                    color: en?.color,
                    dimColor: !co || !en?.color,
                    children: [ys.length, " PRs"],
                  })
                : ys.length === 1
                  ? en?.prNumber !== void 0
                    ? e(PullRequestBadge, {
                        number: en.prNumber,
                        url: en.row.href,
                        kind: xr(en.row),
                        color: en.color,
                        dimColor: !co,
                        underline: !1,
                        hidePrefix: !0,
                      })
                    : e(Text, { color: il, dimColor: !co, children: "PR" })
                  : en
                    ? e(Link, {
                        url: en.row.href,
                        children: r(Text, {
                          color: "claude",
                          children: [Pp.length > 1 && `${Pp.length} `, ARTIFACT_MARKER_GLYPH],
                        }),
                      })
                    : null,
          })
        : null,
    Np = Eo.age + 2;
  let vl;
  if (ro[55] !== _p)
    ((vl = e(Text, { dimColor: !0, children: _p })), (ro[55] = _p), (ro[56] = vl));
  else vl = ro[56];
  let Rl;
  if (ro[57] !== Np || ro[58] !== vl)
    ((Rl = e(Box, {
      width: Np,
      flexShrink: 0,
      paddingLeft: 2,
      justifyContent: "flex-end",
      children: vl,
    })),
      (ro[57] = Np),
      (ro[58] = vl),
      (ro[59] = Rl));
  else Rl = ro[59];
  let rw;
  if (
    ro[60] !== Tp ||
    ro[61] !== wl ||
    ro[62] !== kl ||
    ro[63] !== Bp ||
    ro[64] !== Rl
  )
    ((rw = r(Tp, { children: [wl, kl, Bp, Rl] })),
      (ro[60] = Tp),
      (ro[61] = wl),
      (ro[62] = kl),
      (ro[63] = Bp),
      (ro[64] = Rl),
      (ro[65] = rw));
  else rw = ro[65];
  return rw;
}
var jo = 3;
function xs(tE) {
  let Cs = _(27),
    {
      icon: Gp,
      iconColor: _l,
      iconDim: oE,
      label: Vp,
      isOrigin: Cl,
      isFocused: vs,
      focusFg: Up,
      focusBg: Wp,
      age: Kp,
      tokens: $p,
      state: El,
      extra: xl,
      expanded: qp,
      refusal: Rs,
      renaming: _s,
      renameWidth: Yp,
      srLabel: Qp,
    } = tE;
  const Xp = oE || (_l === void 0 && !vs),
    Zp = vs ? "\u276F" : " ";
  let Il;
  if (
    Cs[0] !== Wp ||
    Cs[1] !== Gp ||
    Cs[2] !== _l ||
    Cs[3] !== Qp ||
    Cs[4] !== Xp ||
    Cs[5] !== Zp
  )
    ((Il = r(Text, {
      "aria-label": Qp,
      color: _l,
      dimColor: Xp,
      backgroundColor: Wp,
      children: [Zp, Gp, "  "],
    })),
      (Cs[0] = Wp),
      (Cs[1] = Gp),
      (Cs[2] = _l),
      (Cs[3] = Qp),
      (Cs[4] = Xp),
      (Cs[5] = Zp),
      (Cs[6] = Il));
  else Il = Cs[6];
  let Pl;
  if (
    Cs[7] !== Up ||
    Cs[8] !== vs ||
    Cs[9] !== Cl ||
    Cs[10] !== Vp ||
    Cs[11] !== Yp ||
    Cs[12] !== _s
  )
    ((Pl = _s
      ? e(Text, { children: Io(_s.draft, _s.cursor, Yp) })
      : e(Text, {
          color: Up,
          dimColor: !vs && !Cl,
          bold: Cl,
          wrap: "truncate",
          children: Vp,
        })),
      (Cs[7] = Up),
      (Cs[8] = vs),
      (Cs[9] = Cl),
      (Cs[10] = Vp),
      (Cs[11] = Yp),
      (Cs[12] = _s),
      (Cs[13] = Pl));
  else Pl = Cs[13];
  let Al;
  if (Cs[14] !== Il || Cs[15] !== Pl)
    ((Al = r(Box, { children: [Il, Pl] })),
      (Cs[14] = Il),
      (Cs[15] = Pl),
      (Cs[16] = Al));
  else Al = Cs[16];
  let Ol;
  if (
    Cs[17] !== Kp ||
    Cs[18] !== qp ||
    Cs[19] !== xl ||
    Cs[20] !== Rs ||
    Cs[21] !== El ||
    Cs[22] !== $p
  )
    ((Ol =
      (qp || Rs) &&
      e(Box, {
        paddingLeft: jo,
        children: e(Text, {
          dimColor: !0,
          wrap: "truncate",
          children: r(DotSeparatedList, {
            children: [
              Kp,
              $p,
              Rs
                ? e(Text, { color: "error", wrap: "truncate", children: Rs })
                : xl &&
                  e(Text, {
                    color: El.color,
                    dimColor: El.dim,
                    wrap: "truncate",
                    children: xl,
                  }),
            ],
          }),
        }),
      })),
      (Cs[17] = Kp),
      (Cs[18] = qp),
      (Cs[19] = xl),
      (Cs[20] = Rs),
      (Cs[21] = El),
      (Cs[22] = $p),
      (Cs[23] = Ol));
  else Ol = Cs[23];
  let aw;
  if (Cs[24] !== Al || Cs[25] !== Ol)
    ((aw = r(Box, { flexDirection: "column", children: [Al, Ol] })),
      (Cs[24] = Al),
      (Cs[25] = Ol),
      (Cs[26] = aw));
  else aw = Cs[26];
  return aw;
}
function xw(YE) {
  return YE.query;
}
function Iw(QE) {
  return QE.loading;
}
function Pw(XE) {
  return XE.kind === "job";
}
function od(CE) {
  let ho = _(106),
    {
      owners: EE,
      layout: xE,
      scrollRef: qo,
      header: ef,
      renameInput: IE,
      groupInput: AE,
      initialJobId: Tl,
      cwdFilter: Ur,
      simpleView: _n,
      hasCredentials: tf,
      mountAt: of,
      actions: OE,
    } = CE,
    {
      roster: er,
      selection: tn,
      view: TE,
      attach: DE,
      editor: lw,
      deleteConfirm: FE,
      earlier: ME,
    } = EE,
    { columns: Cn, rows: nf } = useTerminalSize(),
    { focusedIdx: Po, hoverFocusIdx: rf, collapsed: sf } = useStoreSelector(tn),
    {
      groupMode: Wr,
      activeTab: Kr,
      groupEdit: En,
      groupPickIdx: go,
      groupPristine: on,
      renaming: LE,
      previewOpen: nn,
    } = useStoreSelector(TE),
    { attachingJobId: af, warmingJobIds: lf, newSessionOpening: df } = useStoreSelector(DE),
    {
      prStatuses: uf,
      loopKicks: Is,
      logTails: cf,
      deleteRefusals: Dl,
    } = useStoreSelector(er),
    Ao = useStoreSelector(lw, xw),
    { pending: tr } = useStoreSelector(FE),
    jr = useStoreSelector(ME, Iw),
    {
      rows: Oo,
      filtered: pf,
      byState: xn,
      byGroup: Fl,
      isOnboarding: Yr,
      hasComposedDispatch: Qr,
      dispatchTargetGroup: ff,
      hasMultipleOrigins: mf,
      focusedGroup: gf,
      groupCounts: hf,
      earlierVisible: bf,
      simpleBuilt: nr,
      cols: Xr,
      loopJobIds: Ps,
      focusIsFromHover: Zr,
      queryIsFilter: wf,
    } = xE,
    { draft: Ml, cursor: Ll } = IE,
    {
      draft: ei,
      cursor: Jl,
      suggestions: Do,
      reserved: Bl,
      isNew: Hl,
      matchesExisting: Ul,
      panelOpen: rn,
    } = AE,
    {
      toggleCollapse: yf,
      openOrRespawn: Wl,
      openEarlier: Sf,
      openNewSessionRow: vf,
    } = OE,
    Kl = LE?.jobId ?? null,
    dw;
  if (ho[0] !== er)
    ((dw = (JE) => er.liveStatus(JE)), (ho[0] = er), (ho[1] = dw));
  else dw = ho[1];
  let As = dw,
    Rf = lw.setError,
    uw;
  if (ho[2] !== Wr) ((uw = (BE) => Ko(Wr, BE)), (ho[2] = Wr), (ho[3] = uw));
  else uw = ho[3];
  let _f = uw,
    cw;
  if (ho[4] !== Wr)
    ((cw = (NE) => `header:${Wr}:${NE}`), (ho[4] = Wr), (ho[5] = cw));
  else cw = ho[5];
  let $l = cw,
    Ro = Cn >= 120 ? 1 : 0,
    In = C(null),
    Cf = C(null),
    pw;
  if (ho[6] !== Do)
    ((pw = Do.join(`
`)),
      (ho[6] = Do),
      (ho[7] = pw));
  else pw = ho[7];
  let Ef = pw,
    fw;
  if (ho[8] !== Zr || ho[9] !== Po || ho[10] !== Oo || ho[11] !== qo)
    ((fw = () => {
      if (!In.current || Zr) {
        return;
      }
      if (Po === 0) {
        qo.current?.scrollTo(0);
        return;
      }
      let HE = Oo[Po]?.kind === "header" ? -1 : 0;
      qo.current?.scrollToElement(In.current, HE, { block: "nearest" });
    }),
      (ho[8] = Zr),
      (ho[9] = Po),
      (ho[10] = Oo),
      (ho[11] = qo),
      (ho[12] = fw));
  else fw = ho[12];
  let mw;
  if (ho[13] !== Zr || ho[14] !== Po || ho[15] !== nf)
    ((mw = [Po, Zr, nf]),
      (ho[13] = Zr),
      (ho[14] = Po),
      (ho[15] = nf),
      (ho[16] = mw));
  else mw = ho[16];
  dn(fw, mw);
  let gw;
  if (ho[17] !== rn || ho[18] !== qo)
    ((gw = () => {
      if (rn && Cf.current)
        qo.current?.scrollToElement(Cf.current, 0, { block: "nearest" });
    }),
      (ho[17] = rn),
      (ho[18] = qo),
      (ho[19] = gw));
  else gw = ho[19];
  let hw;
  if (ho[20] !== rn || ho[21] !== go || ho[22] !== Ef)
    ((hw = [rn, Ef, go]),
      (ho[20] = rn),
      (ho[21] = go),
      (ho[22] = Ef),
      (ho[23] = hw));
  else hw = ho[23];
  dn(gw, hw);
  let bw;
  if (
    ho[24] !== Xr ||
    ho[25] !== rn ||
    ho[26] !== go ||
    ho[27] !== Do ||
    ho[28] !== Ro
  )
    ((bw = rn
      ? (() => {
          let ti = Math.max(0, Math.min(go - 1, Do.length - 4));
          let ww = Do.slice(ti, ti + 4);
          let yw = Do.length - ti - ww.length;
          let GE = Ro + Xr.label + 4 + 7 - 2;
          return r(Box, {
            ref: Cf,
            flexDirection: "column",
            paddingLeft: GE,
            children: [
              ti > 0 &&
                r(Text, {
                  dimColor: !0,
                  children: ["  ", "\u2026 ", ti, " above"],
                }),
              ww.map((Sw, VE) => {
                let Pf = ti + VE === go;
                return r(
                  Text,
                  {
                    color: Pf ? "suggestion" : void 0,
                    dimColor: !Pf,
                    wrap: "truncate",
                    children: [Pf ? figures.pointer : " ", " ", Sw],
                  },
                  Sw,
                );
              }),
              yw > 0 &&
                r(Text, {
                  dimColor: !0,
                  children: ["  ", "\u2026 ", yw, " more"],
                }),
            ],
          });
        })()
      : null),
      (ho[24] = Xr),
      (ho[25] = rn),
      (ho[26] = go),
      (ho[27] = Do),
      (ho[28] = Ro),
      (ho[29] = bw));
  else bw = ho[29];
  let Af = bw,
    jl;
  if (
    ho[30] !== Kr ||
    ho[31] !== af ||
    ho[32] !== Fl ||
    ho[33] !== xn ||
    ho[34] !== _f ||
    ho[35] !== sf ||
    ho[36] !== Xr ||
    ho[37] !== Cn ||
    ho[38] !== Ur ||
    ho[39] !== Dl ||
    ho[40] !== ff ||
    ho[41] !== jr ||
    ho[42] !== bf ||
    ho[43] !== gf ||
    ho[44] !== Po ||
    ho[45] !== hf ||
    ho[46] !== Jl ||
    ho[47] !== ei ||
    ho[48] !== Hl ||
    ho[49] !== Ul ||
    ho[50] !== Bl ||
    ho[51] !== En ||
    ho[52] !== go ||
    ho[53] !== on ||
    ho[54] !== Af ||
    ho[55] !== Do ||
    ho[56] !== Qr ||
    ho[57] !== tf ||
    ho[58] !== mf ||
    ho[59] !== $l ||
    ho[60] !== rf ||
    ho[61] !== Tl ||
    ho[62] !== Yr ||
    ho[63] !== As ||
    ho[64] !== cf ||
    ho[65] !== Ps ||
    ho[66] !== Is ||
    ho[67] !== of ||
    ho[68] !== df ||
    ho[69] !== Sf ||
    ho[70] !== vf ||
    ho[71] !== Wl ||
    ho[72] !== tr ||
    ho[73] !== uf ||
    ho[74] !== nn ||
    ho[75] !== Ao ||
    ho[76] !== Ll ||
    ho[77] !== Ml ||
    ho[78] !== Kl ||
    ho[79] !== er ||
    ho[80] !== Ro ||
    ho[81] !== Oo ||
    ho[82] !== tn ||
    ho[83] !== Rf ||
    ho[84] !== nr ||
    ho[85] !== _n ||
    ho[86] !== yf ||
    ho[87] !== lf
  )
    ((jl = Oo.map((Ze, An) => {
      let eo = An === Po;
      let kw = Yr && Ze.kind === "header";
      let ql =
        Ze.kind === "header" ? (Qr ? Ze.group === ff : eo && !kw) : !Qr && eo;
      let On = !Qr && eo && An !== rf && !kw ? "userMessageBackground" : void 0;
      let oi = On && "text";
      let Rw = (vw) => {
        if (nn && Ze.kind !== "job") {
          return;
        }
        if (An === Po) {
          if (!vw) tn.setHoverFocusIdx(null);
          return;
        }
        if ((Rf(null), vw)) tn.hoverTo(An, Ze);
        else tn.navigateTo(An, Ze);
      };
      let ni = () => Rw(!0);
      let ri = () => Rw(!1);
      if (Ze.kind === "header") {
        let UE = !Qr && mf && Ze.group === gf;
        let WE = hf.get(Ze.group) ?? 0;
        let $E = sf.has(_f(Ze.group));
        return r(
          Box,
          {
            ref: eo ? In : void 0,
            marginTop: An > 0 ? 1 : 0,
            flexDirection: "column",
            backgroundColor: On,
            onMouseEnter: Ao || nn || Yr ? void 0 : ni,
            onClick: Yr
              ? void 0
              : () => {
                  (ri(),
                    (tn.followOrigin = Ze.group),
                    (tn.followId = null),
                    yf(Ze.group));
                },
            children: [
              En?.kind === "rename" && En.from === Ze.group
                ? r(Text, {
                    wrap: "truncate",
                    children: [
                      Io(ei, Jl, Math.max(Cn - 4, 10), on),
                      on
                        ? null
                        : Bl
                          ? e(Text, {
                              color: "error",
                              children: " (reserved name)",
                            })
                          : Ul
                            ? e(Text, {
                                color: "error",
                                children: " (name taken)",
                              })
                            : Hl
                              ? e(Text, {
                                  dimColor: !0,
                                  children: " (rename group)",
                                })
                              : null,
                    ],
                  })
                : r(Text, {
                    bold: UE || ql,
                    color: oi,
                    dimColor: !ql,
                    children: [
                      Ze.group === "pinned"
                        ? "Pinned"
                        : Ze.group === EARLIER
                          ? "Past"
                          : xn
                            ? uo[Ze.group]
                            : Fl
                              ? Ze.group === UNGROUPED
                                ? "Ungrouped"
                                : truncate(Ze.group, Math.max(Cn - 10, 10))
                              : truncatePathSegments(_a(Ze.group), Math.max(Cn - 10, 10)),
                      $E &&
                        r(N, {
                          children: [" ", e(Text, { dimColor: !0, children: WE })],
                        }),
                      (xn ? Ze.group === "done" : Ze.group === EARLIER) &&
                        jr &&
                        Kr !== "remote" &&
                        !Ur &&
                        r(N, {
                          children: [
                            " ",
                            e(Text, {
                              dimColor: !0,
                              children: "\xB7 looking for past sessions\u2026",
                            }),
                          ],
                        }),
                    ],
                  }),
              Yr &&
                !(Ze.group === "done" && bf.length > 0) &&
                e(Box, {
                  paddingLeft: 1,
                  children: e(Text, { dimColor: !0, children: Sa[Ze.group] }),
                }),
            ],
          },
          `h:${Ze.group}`,
        );
      }
      if (Ze.kind === "fold") {
        return e(
          Box,
          {
            ref: eo ? In : void 0,
            marginTop: _n && Pr(Oo[An - 1], Ze) ? 1 : 0,
            paddingLeft: Ro,
            backgroundColor: On,
            onMouseEnter: Ao || nn ? void 0 : ni,
            onClick: () => {
              (ri(),
                tn.expandCap(Ze.group),
                logEvent("tengu_fleetview_fold_expand", {
                  hidden_count: Ze.hidden,
                  ms_since_mount: Date.now() - of,
                  via_click: !0,
                }));
            },
            children: r(Text, {
              color: oi,
              dimColor: !ql,
              "aria-label": `${eo ? "selected, " : ""}${Ze.hidden} more finished sessions folded:`,
              children: [
                _n ? (eo ? "\u276F" : " ") + repeatString(" ", jo - 1) : "",
                Ze.group === Zo
                  ? `\u2026 show all (${Ze.hidden} more${nr !== null && nr.doneFoldHiddenFailed > 0 ? ` \xB7 ${nr.doneFoldHiddenFailed} failed` : ""})`
                  : `\u2026 ${Ze.hidden} more`,
              ],
            }),
          },
          `f:${Ze.group}`,
        );
      }
      if (Ze.kind === "newsession") {
        return r(
          Box,
          {
            flexDirection: "column",
            children: [
              r(Box, {
                ref: eo ? In : void 0,
                paddingLeft: Ro,
                backgroundColor: On,
                onMouseEnter: Ao || nn ? void 0 : ni,
                onClick: () => {
                  (ri(), vf(Ze.origin));
                },
                children: [
                  r(Text, {
                    color: oi ?? "suggestion",
                    "aria-label": eo ? "selected, new session:" : void 0,
                    children: [
                      eo ? "\u276F" : " ",
                      "+  ",
                      e(Text, { underline: eo, children: "new session" }),
                    ],
                  }),
                  df &&
                    r(Text, {
                      dimColor: !0,
                      wrap: "truncate",
                      children: ["  ", "opening\u2026 \xB7 esc to cancel"],
                    }),
                ],
              }),
              nr !== null &&
                !nr.rows.some(Pw) &&
                r(Box, {
                  paddingLeft: Ro + jo,
                  marginTop: 1,
                  flexDirection: "column",
                  children: [
                    e(Text, {
                      bold: !0,
                      children: "Nothing running in the background.",
                    }),
                    e(Text, {
                      dimColor: !0,
                      children:
                        "Hand off a task and it keeps working while you do something else \u2014 even if you close this terminal.",
                    }),
                    !tf &&
                      r(Text, {
                        color: "warning",
                        wrap: "truncate",
                        children: [
                          "You are not logged in. Run",
                          " ",
                          e(Text, { bold: !0, children: "claude /login" }),
                          " first, or press",
                          " ",
                          e(Text, { bold: !0, children: "l" }),
                          " to log in.",
                        ],
                      }),
                    r(Box, {
                      marginTop: 1,
                      flexDirection: "column",
                      children: [
                        r(Text, {
                          dimColor: !0,
                          children: [
                            "Start one with",
                            " ",
                            e(Text, {
                              color: "suggestion",
                              children: "+ new session",
                            }),
                            " above,",
                          ],
                        }),
                        r(Text, {
                          dimColor: !0,
                          children: [
                            "or run",
                            " ",
                            e(Text, {
                              color: "suggestion",
                              children: 'claude --bg "task"',
                            }),
                            " from any terminal,",
                          ],
                        }),
                        r(Text, {
                          dimColor: !0,
                          children: [
                            "or ",
                            e(Text, { color: "suggestion", children: "/fork" }),
                            " a session you're already in.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          },
          "newsession",
        );
      }
      if (Ze.kind === "earlier") {
        let zl = Ze.entry;
        return r(
          Box,
          {
            ref: eo ? In : void 0,
            width: "100%",
            paddingLeft: Ro,
            backgroundColor: On,
            onMouseEnter: Ao || nn ? void 0 : ni,
            onClick: () => {
              (ri(), Sf(zl, "section"));
            },
            children: [
              e(Box, {
                flexGrow: 1,
                flexShrink: 1,
                overflow: "hidden",
                children: r(Text, {
                  color: oi,
                  dimColor: !ql,
                  wrap: "truncate",
                  children: ["\xB7 ", zl.title],
                }),
              }),
              e(Box, {
                flexShrink: 0,
                marginLeft: 1,
                children: e(Text, {
                  dimColor: !0,
                  children: formatDuration(
                    Math.max(0, Date.now() - zl.modified.getTime()),
                    { mostSignificantOnly: !0 },
                  ),
                }),
              }),
            ],
          },
          `e:${zl.sessionId}`,
        );
      }
      let it = Ze.job;
      if (_n) {
        let Yl = terminalOutcome(it.state.state);
        let Ql = As(it);
        let Os = Ga(it, As);
        let jE =
          (Yl === "stopped" ? "\u23F9" : Yl === "failure" ? "\u2717" : null) ??
          Wn(it.state, Yl, Ql);
        let _w = it.id === Tl;
        return e(
          Box,
          {
            ref: eo ? In : void 0,
            flexDirection: "column",
            width: "100%",
            paddingLeft: Ro,
            marginTop: Pr(Oo[An - 1], Ze) ? 1 : 0,
            backgroundColor: On,
            onMouseEnter: Ao || nn ? void 0 : ni,
            onClick: (Xl) => {
              if (Xl.hyperlinkUrl) {
                return Xl.allowDefault();
              }
              if (Xl.isWindowActivation) {
                return Xl.dropAsStray();
              }
              (ri(), Wl(it));
            },
            children: e(xs, {
              icon: jE ?? e(kn, {}),
              iconColor: Os.color,
              iconDim: Os.dim,
              label: So(it.state, _w, !0),
              renameWidth: Math.max(12, Cn - Ro - jo),
              renaming: Kl === it.id ? { draft: Ml, cursor: Ll } : void 0,
              isOrigin: _w,
              isFocused: eo,
              focusFg: oi,
              focusBg: On,
              age: Ua(it, Ps, Is),
              tokens: Wa(it, Os),
              state: Os,
              extra: $a(it, Os, Ql, Cn),
              expanded:
                Boolean(it.state.pinned) || jn(it.state, Ql) === "needs",
              refusal: Dl.get(it.id)?.notice,
              srLabel: Vn(
                it.activity,
                it.state.tempo,
                Ql,
                Yl,
                eo,
                it.state.pinned === !0,
              ),
            }),
          },
          it.id,
        );
      }
      let qE = En?.kind === "assign" && En.jobId === it.id;
      let zE = e(
        Box,
        {
          ref: eo ? In : void 0,
          width: "100%",
          paddingLeft: Ro,
          backgroundColor: On,
          onMouseEnter: Ao || nn ? void 0 : ni,
          onClick: (Zl) => {
            if (Zl.hyperlinkUrl) {
              return Zl.allowDefault();
            }
            if (Zl.isWindowActivation) {
              return Zl.dropAsStray();
            }
            (ri(), Wl(it));
          },
          children: e(ks, {
            job: it,
            isFocused: eo,
            focusFg: oi,
            isOrigin: it.id === Tl,
            logTail: cf[it.id],
            cols: Xr,
            status: As(it),
            heldInTerminal: er.terminalHolderOf(it) !== void 0,
            showVerb: !xn,
            loopKickCount: Ps.has(it.id)
              ? Is.get(it.state.sessionId)?.count
              : void 0,
            age: Hn(
              it,
              Ps.has(it.id) ? Is.get(it.state.sessionId)?.nextAt : void 0,
            ),
            childRows: it.state.children ? Gn(it.state.children, uf) : [],
            renaming: Kl === it.id ? { draft: Ml, cursor: Ll } : void 0,
            groupEditing:
              En?.kind === "assign" && En.jobId === it.id
                ? {
                    draft: ei,
                    cursor: Jl,
                    selected: on,
                    reserved: !on && Bl,
                    isNew: !on && Hl && go < 0,
                    ungroup:
                      !on && ei.trim() === "" && go < 0 && !!it.state.group,
                    addTo: on
                      ? void 0
                      : go >= 0
                        ? Do[go]
                        : Ul
                          ? ei.trim()
                          : void 0,
                  }
                : void 0,
            deleteArmed:
              tr && (tr.id === it.id || tr.id === $l(Ze.group))
                ? {
                    justKilled: tr.justKilled,
                    ungroup:
                      Fl &&
                      tr.id === $l(Ze.group) &&
                      Ze.group !== "pinned" &&
                      Ze.group !== UNGROUPED &&
                      Ze.group !== EARLIER,
                  }
                : void 0,
            deleteRefused: Dl.get(it.id)?.notice,
            attaching: af === it.id ? "armed" : lf.has(it.id) ? "warming" : !1,
          }),
        },
        it.id,
      );
      return r(N, { children: [zE, qE && Af] });
    })),
      (ho[30] = Kr),
      (ho[31] = af),
      (ho[32] = Fl),
      (ho[33] = xn),
      (ho[34] = _f),
      (ho[35] = sf),
      (ho[36] = Xr),
      (ho[37] = Cn),
      (ho[38] = Ur),
      (ho[39] = Dl),
      (ho[40] = ff),
      (ho[41] = jr),
      (ho[42] = bf),
      (ho[43] = gf),
      (ho[44] = Po),
      (ho[45] = hf),
      (ho[46] = Jl),
      (ho[47] = ei),
      (ho[48] = Hl),
      (ho[49] = Ul),
      (ho[50] = Bl),
      (ho[51] = En),
      (ho[52] = go),
      (ho[53] = on),
      (ho[54] = Af),
      (ho[55] = Do),
      (ho[56] = Qr),
      (ho[57] = tf),
      (ho[58] = mf),
      (ho[59] = $l),
      (ho[60] = rf),
      (ho[61] = Tl),
      (ho[62] = Yr),
      (ho[63] = As),
      (ho[64] = cf),
      (ho[65] = Ps),
      (ho[66] = Is),
      (ho[67] = of),
      (ho[68] = df),
      (ho[69] = Sf),
      (ho[70] = vf),
      (ho[71] = Wl),
      (ho[72] = tr),
      (ho[73] = uf),
      (ho[74] = nn),
      (ho[75] = Ao),
      (ho[76] = Ll),
      (ho[77] = Ml),
      (ho[78] = Kl),
      (ho[79] = er),
      (ho[80] = Ro),
      (ho[81] = Oo),
      (ho[82] = tn),
      (ho[83] = Rf),
      (ho[84] = nr),
      (ho[85] = _n),
      (ho[86] = yf),
      (ho[87] = lf),
      (ho[88] = jl));
  else jl = ho[88];
  let ed;
  if (ho[89] !== pf.length || ho[90] !== Ao || ho[91] !== wf)
    ((ed =
      pf.length === 0 &&
      !!Ao &&
      wf &&
      e(Box, {
        paddingLeft: 2,
        children: e(Text, { dimColor: !0, children: "no sessions match" }),
      })),
      (ho[89] = pf.length),
      (ho[90] = Ao),
      (ho[91] = wf),
      (ho[92] = ed));
  else ed = ho[92];
  let td;
  if (
    ho[93] !== Kr ||
    ho[94] !== xn ||
    ho[95] !== Ur ||
    ho[96] !== jr ||
    ho[97] !== Oo ||
    ho[98] !== _n
  )
    ((td =
      jr &&
      !_n &&
      Kr !== "remote" &&
      !Ur &&
      !Oo.some(
        (Cw) => Cw.kind === "header" && Cw.group === (xn ? "done" : EARLIER),
      ) &&
      e(Box, {
        paddingLeft: 2,
        children: e(Text, {
          dimColor: !0,
          children: "\xB7 looking for past sessions\u2026",
        }),
      })),
      (ho[93] = Kr),
      (ho[94] = xn),
      (ho[95] = Ur),
      (ho[96] = jr),
      (ho[97] = Oo),
      (ho[98] = _n),
      (ho[99] = td));
  else td = ho[99];
  let Ew;
  if (
    ho[100] !== ef ||
    ho[101] !== qo ||
    ho[102] !== jl ||
    ho[103] !== ed ||
    ho[104] !== td
  )
    ((Ew = r(ScrollBox, {
      ref: qo,
      flexGrow: 1,
      flexDirection: "column",
      paddingTop: 1,
      stickyScroll: !1,
      children: [ef, jl, ed, td],
    })),
      (ho[100] = ef),
      (ho[101] = qo),
      (ho[102] = jl),
      (ho[103] = ed),
      (ho[104] = td),
      (ho[105] = Ew));
  else Ew = ho[105];
  return Ew;
}
function Dw(Ex) {
  return Ex.collapsed;
}
function Fw(xx) {
  return xx.settings.voice?.mode ?? "hold";
}
function Mw(Ix) {
  return Ix.voiceState;
}
function Lw(Px) {
  return Px.voiceWarmingUp;
}
function fd(hx) {
  let qf = _(40),
    {
      owners: bx,
      layout: wx,
      simpleView: ii,
      dispatchDefaults: Ts,
      groupInput: yx,
      suggestionsOpen: nd,
    } = hx,
    { selection: Sx, view: kx, editor: vx, deleteConfirm: Rx } = bx,
    { columns: ir } = useTerminalSize(),
    Of = useStoreSelector(Sx, Dw),
    {
      groupMode: Tf,
      groupEdit: si,
      groupPickIdx: Df,
      renaming: _x,
      previewOpen: Ff,
      exitPending: Mf,
    } = useStoreSelector(kx),
    { query: Fo, error: rd, hint: id, expandHintPasteId: Lf } = useStoreSelector(vx),
    { pending: sd } = useStoreSelector(Rx),
    Ds = useVoiceAvailable(),
    Jf = useAppStateSelector(Fw),
    ad = useVoiceSelector(Mw),
    Bf = useVoiceSelector(Lw),
    {
      focusedRow: zo,
      focused: sn,
      focusedIsPending: ai,
      runningCount: Fs,
      hasDispatch: Nf,
      hasComposedDispatch: ld,
      isBashDispatch: li,
      enterIsNoop: Gf,
      enterLabel: Vf,
      isOnboarding: Uf,
      byGroup: ud,
      headerJobs: Wf,
    } = wx,
    { draft: cd, suggestions: Kf } = yx,
    $f = _x?.jobId ?? null,
    Ow;
  if (qf[0] !== Tf) ((Ow = (Cx) => Ko(Tf, Cx)), (qf[0] = Tf), (qf[1] = Ow));
  else Ow = qf[1];
  let zf = Ow;
  const Yf = ii ? 1 : 2;
  let pd;
  if (
    qf[2] !== ud ||
    qf[3] !== zf ||
    qf[4] !== Of ||
    qf[5] !== ir ||
    qf[6] !== Mf ||
    qf[7] !== Ts ||
    qf[8] !== rd ||
    qf[9] !== id ||
    qf[10] !== Gf ||
    qf[11] !== Vf ||
    qf[12] !== Lf ||
    qf[13] !== sn ||
    qf[14] !== ai ||
    qf[15] !== zo ||
    qf[16] !== cd ||
    qf[17] !== si ||
    qf[18] !== Df ||
    qf[19] !== Kf ||
    qf[20] !== ld ||
    qf[21] !== Nf ||
    qf[22] !== Wf ||
    qf[23] !== li ||
    qf[24] !== Uf ||
    qf[25] !== sd ||
    qf[26] !== Ff ||
    qf[27] !== Fo ||
    qf[28] !== $f ||
    qf[29] !== Fs ||
    qf[30] !== ii ||
    qf[31] !== nd ||
    qf[32] !== Ds ||
    qf[33] !== Jf ||
    qf[34] !== ad ||
    qf[35] !== Bf
  )
    ((pd = Mf
      ? r(Text, {
          dimColor: !0,
          children: [
            ii
              ? "press ctrl+c or q again to exit"
              : "Press Ctrl-C again to exit",
            Fs > 0 && ` \xB7 ${Fs} ${pluralize(Fs, "agent")} will keep running`,
          ],
        })
      : $f !== null || si !== null
        ? e(Text, {
            dimColor: !0,
            children: r(DotSeparatedList, {
              children: [
                e(KeybindingHint, {
                  chord: "enter",
                  action: "save",
                  format: { keyCase: "lower" },
                }),
                si?.kind === "assign" &&
                  cd.trim() !== "" &&
                  cd.trim() !== si.cur &&
                  Kf.length > 0 &&
                  e(KeybindingHint, {
                    chord: "tab",
                    action: "complete",
                    format: { keyCase: "lower" },
                  }),
                si?.kind === "assign" &&
                  Df >= 0 &&
                  e(KeybindingHint, {
                    chord: figures.arrowLeft,
                    action: "deselect",
                    format: { keyCase: "lower" },
                  }),
                e(KeybindingHint, {
                  chord: "escape",
                  action: "cancel",
                  format: { keyCase: "lower" },
                }),
              ],
            }),
          })
        : sd
          ? e(Text, {
              dimColor: !0,
              children: ii
                ? e(Text, {
                    children: sd.justKilled
                      ? "stopped \xB7 ctrl+x again to delete \xB7 esc to keep"
                      : "ctrl+x again to delete \xB7 esc to keep",
                  })
                : e(KeybindingHint, { chord: "ctrl+x", action: "confirm" }),
            })
          : rd
            ? e(Text, { color: "error", wrap: "truncate-end", children: rd })
            : Ds && Bf
              ? e(VoiceWarmupHint, {})
              : Ds && ad !== "idle"
                ? e(VoiceStatusIndicator, { voiceState: ad })
                : id
                  ? e(Text, { dimColor: !0, wrap: "truncate-end", children: id })
                  : ii && !nd && Fo === ""
                    ? e(Text, {
                        dimColor: !0,
                        wrap: "truncate-end",
                        children: r(DotSeparatedList, {
                          children: [
                            e(Text, {
                              children:
                                zo?.kind === "newsession"
                                  ? `${figures.arrowRight} or enter to start`
                                  : `${figures.arrowRight} or enter to open`,
                            }),
                            sn &&
                              !ai &&
                              e(Text, {
                                children: isSettled(sn.state)
                                  ? "ctrl+x to delete"
                                  : "ctrl+x to stop",
                              }),
                            e(Text, { children: "? for shortcuts" }),
                            null,
                          ],
                        }),
                      })
                    : !Ff && !nd
                      ? e(Text, {
                          dimColor: !0,
                          wrap: "truncate-end",
                          children: r(DotSeparatedList, {
                            children: [
                              Ts && wa(Ts) && e(Fi, { defaults: Ts }),
                              ((sn && !ai) || Nf) &&
                                !Gf &&
                                !li &&
                                e(KeybindingHint, {
                                  chord: "enter",
                                  action: Vf,
                                  format: { keyCase: "lower" },
                                }),
                              Lf !== null &&
                                Fo !== "" &&
                                ir >= 90 &&
                                e(Text, {
                                  dimColor: !0,
                                  children: "paste again to expand",
                                }),
                              zo?.kind === "header" &&
                                Fo === "" &&
                                !Uf &&
                                e(KeybindingHint, {
                                  chord: "enter",
                                  action: Of.has(zf(zo.group))
                                    ? "expand"
                                    : "collapse",
                                  format: { keyCase: "lower" },
                                }),
                              zo?.kind === "fold" &&
                                Fo === "" &&
                                e(KeybindingHint, {
                                  chord: "enter",
                                  action: "show all",
                                  format: { keyCase: "lower" },
                                }),
                              sn &&
                                Fo === "" &&
                                !li &&
                                ir >= 55 &&
                                e(KeybindingHint, {
                                  chord: " ",
                                  action: "reply",
                                  format: { keyCase: "lower" },
                                }),
                              Ds && Jf !== "tap" && Fo === "" && !li && ir >= 55
                                ? e(Text, { children: "hold space to speak" })
                                : null,
                              ir >= 80 &&
                                (sn && !ai && Fo === ""
                                  ? e(KeybindingHint, { chord: "ctrl+x", action: "delete" })
                                  : !ld && ud && zo?.kind === "header"
                                    ? zo.group !== "pinned" &&
                                      zo.group !== UNGROUPED &&
                                      zo.group !== EARLIER
                                      ? e(KeybindingHint, {
                                          chord: "ctrl+x",
                                          action: "ungroup",
                                        })
                                      : null
                                    : !ld && Wf.length > 0
                                      ? e(KeybindingHint, {
                                          chord: "ctrl+x",
                                          action: "delete all",
                                        })
                                      : null),
                              li
                                ? e(Text, {
                                    color: "bashBorder",
                                    children: "! for shell mode",
                                  })
                                : Fo !== ""
                                  ? e(KeybindingHint, {
                                      chord: "escape",
                                      action: "clear",
                                      format: { keyCase: "lower" },
                                    })
                                  : e(Text, { children: "? for shortcuts" }),
                              null,
                              ud &&
                                Fo === "" &&
                                !!sn &&
                                !ai &&
                                sn.state.backend === "daemon" &&
                                ir >= 111 &&
                                e(KeybindingHint, {
                                  chord: "ctrl+e",
                                  action: "group",
                                  format: { keyCase: "lower" },
                                }),
                            ],
                          }),
                        })
                      : null),
      (qf[2] = ud),
      (qf[3] = zf),
      (qf[4] = Of),
      (qf[5] = ir),
      (qf[6] = Mf),
      (qf[7] = Ts),
      (qf[8] = rd),
      (qf[9] = id),
      (qf[10] = Gf),
      (qf[11] = Vf),
      (qf[12] = Lf),
      (qf[13] = sn),
      (qf[14] = ai),
      (qf[15] = zo),
      (qf[16] = cd),
      (qf[17] = si),
      (qf[18] = Df),
      (qf[19] = Kf),
      (qf[20] = ld),
      (qf[21] = Nf),
      (qf[22] = Wf),
      (qf[23] = li),
      (qf[24] = Uf),
      (qf[25] = sd),
      (qf[26] = Ff),
      (qf[27] = Fo),
      (qf[28] = $f),
      (qf[29] = Fs),
      (qf[30] = ii),
      (qf[31] = nd),
      (qf[32] = Ds),
      (qf[33] = Jf),
      (qf[34] = ad),
      (qf[35] = Bf),
      (qf[36] = pd));
  else pd = qf[36];
  let Tw;
  if (qf[37] !== Yf || qf[38] !== pd)
    ((Tw = e(Box, { flexShrink: 0, paddingLeft: Yf, height: 1, children: pd })),
      (qf[37] = Yf),
      (qf[38] = pd),
      (qf[39] = Tw));
  else Tw = qf[39];
  return Tw;
}
F();
F();
var Bw = ["Agents"],
  Nw = ["Chat", "Global"];
function Qf(s) {
  switch (s) {
    case "agents:switchView":
    case "agents:togglePin":
    case "chat:externalEditor":
      return s;
    default:
      return null;
  }
}
function md(s, c) {
  if (!s) return null;
  let m = findActionForKeyAcrossContexts(s, Bw, c);
  if (m !== void 0) return Qf(m);
  return Qf(findActionForKeyAcrossContexts(s, Nw, c));
}
function di(s, c) {
  for (let m = c.length - 1; m >= 0; m--) {
    let b = c[m];
    if (!b || b.action !== s || b.chord.length !== 1) continue;
    let k = b.chord[0];
    if (k && md(k, c) === s) return formatKeybindingChordForPlatform(b.chord, getKeybindingPlatform());
  }
  return "";
}
function iy(Ww) {
  return e(Text, { dimColor: !0, children: Ww }, Ww);
}
function ry(Qx, Xx) {
  return e(Box, { flexDirection: "column", children: Qx.map(iy) }, Xx);
}
function sy() {
  return Date.now();
}
function Ls(qx) {
  let sm = _(18),
    {
      focusedPinned: Xf,
      canReorder: Zf,
      canRename: em,
      canGroup: tm,
      canPin: om,
      canMention: nm,
      canSwitchViews: gd,
      canDispatchAndOpen: rm,
      altOpenCount: Ms,
      canDelete: hd,
      canGoBack: im,
    } = qx,
    ui = useKeybindingContext()?.bindings ?? expandKeybindingBlocks(DEFAULT_KEYBINDINGS),
    Hw;
  if (sm[0] !== ui)
    ((Hw = di("agents:switchView", ui)), (sm[0] = ui), (sm[1] = Hw));
  else Hw = sm[1];
  let bd = Hw,
    Gw;
  if (sm[2] !== ui)
    ((Gw = di("agents:togglePin", ui)), (sm[2] = ui), (sm[3] = Gw));
  else Gw = sm[3];
  let wd = Gw,
    Vw;
  if (
    sm[4] !== Ms ||
    sm[5] !== hd ||
    sm[6] !== rm ||
    sm[7] !== im ||
    sm[8] !== tm ||
    sm[9] !== nm ||
    sm[10] !== om ||
    sm[11] !== em ||
    sm[12] !== Zf ||
    sm[13] !== gd ||
    sm[14] !== Xf ||
    sm[15] !== wd ||
    sm[16] !== bd
  ) {
    let io = [];
    if (Zf) io.push(`shift+${figures.arrowUp + figures.arrowDown} to reorder`);
    if (em) io.push("ctrl+r to rename");
    if (tm) io.push("ctrl+e to set group");
    if (gd) {
      if (bd) io.push(`${bd} to switch views`);
      if ((io.push("ctrl+j for newline"), rm))
        io.push("ctrl+enter to start and open");
    }
    if (nm) io.push("@ to mention");
    if (om && wd) io.push(`${wd} to ${Xf ? "unpin" : "pin to top"}`);
    if (Ms > 0) io.push(`alt+1${Ms > 1 ? `-${Ms}` : ""} to open`);
    if (hd) io.push(`ctrl+x to ${hd}`);
    if (im) io.push(`${figures.arrowLeft} to go back`);
    io.push(gd ? "esc to quit" : "esc to close \xB7 esc again quits");
    io.push("? to close");
    let Uw = [];
    for (let ci = 0; ci < io.length; ci = ci + 2, ci)
      Uw.push(io.slice(ci, ci + 2));
    Vw = e(Box, {
      flexShrink: 0,
      paddingX: 2,
      flexDirection: "row",
      gap: 4,
      children: Uw.map(ry),
    });
    ((sm[4] = Ms),
      (sm[5] = hd),
      (sm[6] = rm),
      (sm[7] = im),
      (sm[8] = tm),
      (sm[9] = nm),
      (sm[10] = om),
      (sm[11] = em),
      (sm[12] = Zf),
      (sm[13] = gd),
      (sm[14] = Xf),
      (sm[15] = wd),
      (sm[16] = bd),
      (sm[17] = Vw));
  } else Vw = sm[17];
  return Vw;
}
function Js(Zx) {
  let qt = _(43),
    { job: bo } = Zx,
    Kw;
  if (qt[0] !== bo)
    ((Kw = bo ? Date.parse(bo.state.updatedAt) : 0),
      (qt[0] = bo),
      (qt[1] = Kw));
  else Kw = qt[1];
  let $w = Kw,
    [jw, eI] = d(sy),
    qw;
  if (qt[2] === MEMO_CACHE_SENTINEL) ((qw = () => eI(Date.now())), (qt[2] = qw));
  else qw = qt[2];
  if ((useInterval(qw, !bo ? null : jw - $w < 60000 ? 1000 : 30000), !bo)) {
    let pi;
    if (qt[3] === MEMO_CACHE_SENTINEL)
      ((pi = e(Box, {
        flexShrink: 0,
        paddingX: 2,
        children: e(Text, { dimColor: !0, children: "no job focused" }),
      })),
        (qt[3] = pi));
    else pi = qt[3];
    return pi;
  }
  let to = bo.state;
  const pi = Math.max(0, jw - $w);
  let zw;
  if (qt[4] !== pi)
    ((zw = formatDuration(pi, { mostSignificantOnly: !0 })), (qt[4] = pi), (qt[5] = zw));
  else zw = qt[5];
  let am = zw,
    Yw;
  if (qt[6] === MEMO_CACHE_SENTINEL)
    ((Yw = e(Text, { dimColor: !0, children: "backend " })), (qt[6] = Yw));
  else Yw = qt[6];
  let yd;
  if (qt[7] !== to.backend)
    ((yd = r(Text, { children: [Yw, to.backend] })),
      (qt[7] = to.backend),
      (qt[8] = yd));
  else yd = qt[8];
  let Qw;
  if (qt[9] === MEMO_CACHE_SENTINEL)
    ((Qw = e(Text, { dimColor: !0, children: "dir " })), (qt[9] = Qw));
  else Qw = qt[9];
  let Sd;
  if (qt[10] !== bo.id) ((Sd = getJobDir(bo.id)), (qt[10] = bo.id), (qt[11] = Sd));
  else Sd = qt[11];
  let kd;
  if (qt[12] !== Sd)
    ((kd = r(Text, { children: [Qw, Sd] })), (qt[12] = Sd), (qt[13] = kd));
  else kd = qt[13];
  let Xw;
  if (qt[14] === MEMO_CACHE_SENTINEL)
    ((Xw = e(Text, { dimColor: !0, children: "cwd " })), (qt[14] = Xw));
  else Xw = qt[14];
  const lm = to.worktreePath ?? to.cwd;
  let vd;
  if (qt[15] !== lm)
    ((vd = r(Text, { children: [Xw, lm] })), (qt[15] = lm), (qt[16] = vd));
  else vd = qt[16];
  let Rd;
  if (qt[17] !== vd || qt[18] !== yd || qt[19] !== kd)
    ((Rd = r(Box, { flexDirection: "column", children: [yd, kd, vd] })),
      (qt[17] = vd),
      (qt[18] = yd),
      (qt[19] = kd),
      (qt[20] = Rd));
  else Rd = qt[20];
  let Cd;
  if (qt[21] !== bo.id || qt[22] !== to.backend)
    ((Cd =
      to.backend === "daemon"
        ? r(Text, {
            children: [
              e(Text, { dimColor: !0, children: "shell " }),
              "claude attach ",
              bo.id,
            ],
          })
        : null),
      (qt[21] = bo.id),
      (qt[22] = to.backend),
      (qt[23] = Cd));
  else Cd = qt[23];
  let Zw;
  if (qt[24] === MEMO_CACHE_SENTINEL)
    ((Zw = e(Text, { dimColor: !0, children: "session " })), (qt[24] = Zw));
  else Zw = qt[24];
  let Ed;
  if (qt[25] !== to.sessionId)
    ((Ed = r(Text, { children: [Zw, to.sessionId] })),
      (qt[25] = to.sessionId),
      (qt[26] = Ed));
  else Ed = qt[26];
  let ty;
  if (qt[27] === MEMO_CACHE_SENTINEL)
    ((ty = e(Text, { dimColor: !0, children: "version " })), (qt[27] = ty));
  else ty = qt[27];
  let xd;
  if (qt[28] !== to.cliVersion)
    ((xd =
      to.cliVersion === void 0
        ? e(Text, { dimColor: !0, children: "\u2014" })
        : to.cliVersion ===
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.263",
              FEEDBACK_CHANNEL:
                "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-09-06T01:08:56Z",
              GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
              HOOKS_WORKER_URL:
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              DD_SOURCEMAP_GROUP: "darwin",
            }.VERSION
          ? to.cliVersion
          : r(N, {
              children: [
                e(Text, { color: "warning", children: to.cliVersion }),
                r(Text, {
                  dimColor: !0,
                  children: [
                    " \xB7 current ",
                    {
                      ISSUES_EXPLAINER:
                        "report the issue at https://github.com/anthropics/claude-code/issues",
                      PACKAGE_URL: "@anthropic-ai/claude-code",
                      README_URL: "https://code.claude.com/docs/en/overview",
                      VERSION: "2.1.263",
                      FEEDBACK_CHANNEL:
                        "https://github.com/anthropics/claude-code/issues",
                      BUILD_TIME: "2026-09-06T01:08:56Z",
                      GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
                      HOOKS_WORKER_URL:
                        "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                      DD_SOURCEMAP_GROUP: "darwin",
                    }.VERSION,
                  ],
                }),
              ],
            })),
      (qt[28] = to.cliVersion),
      (qt[29] = xd));
  else xd = qt[29];
  let Id;
  if (qt[30] !== xd)
    ((Id = r(Text, { children: [ty, xd] })), (qt[30] = xd), (qt[31] = Id));
  else Id = qt[31];
  let oy;
  if (qt[32] === MEMO_CACHE_SENTINEL)
    ((oy = e(Text, { dimColor: !0, children: "updated " })), (qt[32] = oy));
  else oy = qt[32];
  let Pd;
  if (qt[33] !== am)
    ((Pd = r(Text, { children: [oy, am, " ago"] })), (qt[33] = am), (qt[34] = Pd));
  else Pd = qt[34];
  let Ad;
  if (qt[35] !== Cd || qt[36] !== Ed || qt[37] !== Id || qt[38] !== Pd)
    ((Ad = r(Box, { flexDirection: "column", children: [Cd, Ed, Id, Pd] })),
      (qt[35] = Cd),
      (qt[36] = Ed),
      (qt[37] = Id),
      (qt[38] = Pd),
      (qt[39] = Ad));
  else Ad = qt[39];
  let ny;
  if (qt[40] !== Rd || qt[41] !== Ad)
    ((ny = r(Box, {
      flexShrink: 0,
      paddingX: 2,
      flexDirection: "row",
      gap: 4,
      children: [Rd, Ad],
    })),
      (qt[40] = Rd),
      (qt[41] = Ad),
      (qt[42] = ny));
  else ny = qt[42];
  return ny;
}
F();
F();
function ly(Ld, lI) {
  return r(
    Box,
    {
      paddingLeft: 2,
      children: [
        e(Box, {
          width: 3,
          flexShrink: 0,
          children: r(Text, { dimColor: !0, children: [lI + 1, "."] }),
        }),
        e(Box, {
          flexGrow: 1,
          width: 0,
          children: r(Text, {
            wrap: "truncate",
            children: [
              normalizeWhitespace(Ld.label),
              Ld.description &&
                r(Text, {
                  dimColor: !0,
                  children: [" \xB7 ", normalizeWhitespace(Ld.description)],
                }),
            ],
          }),
        }),
      ],
    },
    Ld.label,
  );
}
function Jd(aI) {
  let fi = _(14),
    { questions: Bs } = aI,
    sr = Bs[0];
  if (!sr) {
    return null;
  }
  let Od;
  if (fi[0] !== sr.question)
    ((Od = normalizeWhitespace(sr.question)), (fi[0] = sr.question), (fi[1] = Od));
  else Od = fi[1];
  let Td;
  if (fi[2] !== Od)
    ((Td = e(Box, {
      flexGrow: 1,
      width: 0,
      children: e(Text, { bold: !0, wrap: "truncate", children: Od }),
    })),
      (fi[2] = Od),
      (fi[3] = Td));
  else Td = fi[3];
  let Dd;
  if (fi[4] !== Bs.length)
    ((Dd =
      Bs.length > 1 &&
      e(Box, {
        flexShrink: 0,
        paddingLeft: 1,
        children: r(Text, {
          dimColor: !0,
          children: ["+", Bs.length - 1, " more \xB7 enter to open"],
        }),
      })),
      (fi[4] = Bs.length),
      (fi[5] = Dd));
  else Dd = fi[5];
  let Fd;
  if (fi[6] !== Td || fi[7] !== Dd)
    ((Fd = r(Box, { children: [Td, Dd] })),
      (fi[6] = Td),
      (fi[7] = Dd),
      (fi[8] = Fd));
  else Fd = fi[8];
  let Md;
  if (fi[9] !== sr.options)
    ((Md = sr.options.map(ly)), (fi[9] = sr.options), (fi[10] = Md));
  else Md = fi[10];
  let ay;
  if (fi[11] !== Fd || fi[12] !== Md)
    ((ay = r(Box, { flexDirection: "column", children: [Fd, Md] })),
      (fi[11] = Fd),
      (fi[12] = Md),
      (fi[13] = ay));
  else ay = fi[13];
  return ay;
}
function dm(s, c) {
  let m = c?.[0];
  if (!m || s < "1" || s > "9") return null;
  let b = Number(s) - 1;
  return m.options[b]?.label.replace(CONTROL_CHARS_REGEX, "") ?? null;
}
var um = 8,
  cm = 5,
  Bd = 500;
function Nd({
  job: s,
  status: c,
  isPending: m,
  deleteArmed: b,
  onBack: k,
  onAttach: w,
  onReply: v,
  isTerminalFocused: R,
  childRows: O,
  editor: W,
  replyError: A,
  renaming: I,
}) {
  let q = (ae) => W.setReplyError(s.id, ae);
  E(() => Tr("peek", s.state), []);
  let K = Date.parse(s.state.updatedAt),
    { storageV5: J } = useStorageV5Context(),
    [j, ne] = d(() => Date.now()),
    se =
      terminalOutcome(s.state.state) === null ? Nt(s.state.needs ?? "") || void 0 : void 0,
    oe = s.state.tempo === "blocked" ? s.state.block?.questions : void 0,
    X = oe?.length ? oe : void 0,
    de = O.map((ae) => ae.row.href),
    ce = (ae) =>
      de.some((gt) => {
        let It = ae.indexOf(gt);
        return (
          It >= 0 &&
          !/\w/.test(ae[It + gt.length] ?? "") &&
          ae.length - gt.length < 16
        );
      }),
    Ie = se
      ? []
      : Object.entries(s.state.output ?? {}).filter(([, ae]) => !ce(ae)),
    ge = X ? "questions" : se ? "needs" : Ie.length > 0 ? "output" : "detail",
    ke = ge === "questions" || ge === "needs";
  useInterval(() => ne(Date.now()), ke ? (j - K < 60000 ? 1000 : 30000) : null);
  let Ce = ke ? formatDuration(Math.max(0, j - K), { mostSignificantOnly: !0 }) : "",
    be = C(!1),
    le = C(null);
  useFocusTrap(le, !0);
  let Fe = W.replyDraft(s.id) ?? "",
    [pe, je] = d(getDraftMode(Fe) === "bash" ? "bash" : "prompt"),
    We = C(pe),
    yt = (ae) => {
      ((We.current = ae), je(ae));
    },
    qe = pe === "bash",
    ve =
      s.state.tempo === "blocked" &&
      !s.state.block?.questions &&
      s.state.suggestedReply
        ? normalizeWhitespace(s.state.suggestedReply) || void 0
        : void 0,
    xe = useVoiceAvailable(),
    nt = useAppStateSelector((ae) => ae.settings.voice?.mode ?? "hold"),
    tt = useClock(),
    ye = C(null),
    $e = useVoiceGetState();
  E(
    () => () => {
      (ye.current?.(), (ye.current = null));
    },
    [],
  );
  let {
    query: ot,
    queryRef: Ue,
    setQuery: ze,
    cursorOffset: Ht,
    cursorOffsetRef: bt,
    setCursorOffset: xt,
    handleKeyDown: Ut,
    handlePaste: He,
  } = useVimModeInput({
    isActive: !0,
    multiline: !0,
    honorEditorMode: !0,
    backspaceExitsOnEmpty: !1,
    initialQuery: getDraftValue(Fe),
    onExit: () => {
      if (be.current) return;
      let ae = Ue.current.trim();
      if (!ae && We.current === "prompt") {
        ((be.current = !0), w());
        return;
      }
      if (!ae) return;
      let gt = buildDraftText(ae, We.current),
        It = We.current;
      ((be.current = !0),
        ze(""),
        yt("prompt"),
        q(null),
        W.deleteReplyDraft(s.id));
      let Zt = parsePastedPlaceholders(gt),
        Re = {};
      for (let Ke of Zt) {
        let oo = W.pastes[Ke.id];
        if (oo) Re[Ke.id] = oo;
      }
      let kt = () => {
        if (Ue.current === "" && getDraftValue(W.replyDraft(s.id) ?? "") === "") {
          (W.saveReplyDraft(s.id, gt), ze(ae), yt(It));
          for (let Ke of Zt) {
            let oo = Re[Ke.id];
            if (oo) W.pastes[Ke.id] = oo;
          }
        }
      };
      if (
        s.state.backend === "remote" &&
        Zt.some((Ke) => Re[Ke.id]?.type === "image")
      ) {
        ((be.current = !1),
          kt(),
          q(
            "Image attachments aren't available when replying to cloud sessions yet \u2014 open the session to send images",
          ));
        return;
      }
      materializePastedImages(gt, Re, s.id, J)
        .catch((Ke) => (logError(Ke), gt))
        .then((Ke) => v(Ke))
        .then(
          (Ke) => {
            if (Ke) (kt(), q(Ke));
            else W.pruneOrphanedPastes({ pruneTextPastes: !0 });
          },
          (Ke) => {
            (kt(), q(l(Ke)));
          },
        )
        .finally(() => {
          be.current = !1;
        });
    },
    onCancel: k,
    onSpaceOnEmpty: qe
      ? void 0
      : xe && nt !== "tap"
        ? () => {
            (ye.current?.(),
              (ye.current = tt.setTimeout(() => {
                ye.current = null;
                let ae = $e();
                if (ae.voiceState !== "idle" || ae.voiceWarmingUp) return;
                if (Ue.current.trim() !== "") return;
                k();
              }, Bd)));
          }
        : k,
    onTabOnEmpty:
      ve && !qe
        ? () => {
            (ze(ve),
              logEvent("tengu_prompt_suggestion", {
                outcome: S("accepted"),
                source: S("fleetview_peek"),
              }));
          }
        : void 0,
  });
  (E(() => {
    W.saveReplyDraft(s.id, buildDraftText(ot, pe));
  }, [ot, pe, s.id, W]),
    E(() => {
      let ae = W.registerLivePeekQuery(() => Ue.current);
      return () => {
        (ae(), W.pruneOrphanedPastes());
      };
    }, [W, Ue]),
    E(() => registerPasteIdCarrier(() => [Ue.current]), [Ue]));
  let Tt = $i(() => W.pastes, He, { onMinted: W.noteMintedPaste }),
    { handleKeyDown: zt, handlePaste: Wt } = usePasteHandler({
      handleKeyDown: Ut,
      onPaste: (ae) =>
        He(
          new iee(
            ae.replace(
              /\r\n|\r/g,
              `
`,
            ),
          ),
        ),
      onImagePaste: Tt,
    }),
    [Je] = d(() => ({
      get value() {
        return Ue.current;
      },
      get cursorOffset() {
        return bt.current;
      },
      setValueWithCursor: (ae, gt) => {
        (ze(ae), xt(gt));
      },
    })),
    Ve = useVoiceComposer({ composer: Je }),
    Ye = useVoiceSelector((ae) => ae.voiceState),
    lt = useVoiceSelector((ae) => ae.voiceWarmingUp);
  E(() => {
    if (Ye !== "idle" && ye.current) (ye.current(), (ye.current = null));
  }, [Ye]);
  let dt = useAppStateSelector((ae) => shouldReduceMotion(ae.settings.prefersReducedMotion)),
    Dt = useAppStateSelector((ae) => ae.settings?.prUrlTemplate),
    ut = Ye === "recording" && !dt,
    { handleKeyDown: Lt } = useVoiceKeybindings({
      voiceHandleKeyEvent: Ve.handleKeyEvent,
      voiceCancelRecording: Ve.cancelRecording,
      stripTrailing: Ve.stripTrailing,
      resetAnchor: Ve.resetAnchor,
      isActive: (nt !== "tap" || ot.trim().length > 0) && !qe && !I,
      composer: Je,
    }),
    mt = X ? 2 + (X[0]?.options.length ?? 0) : 0,
    Gt = s.state.budget
      ? `${formatTokens(s.state.budget.spent)}/${formatTokens(s.state.budget.target)} tokens`
      : "",
    at = ke || Gt ? 1 : 0,
    { rows: Xt, columns: jt } = useTerminalSize(),
    Jt = 8,
    st = ot
      ? countOccurrences(
          ot,
          `
`,
        )
      : 0,
    Qt = Math.ceil(
      Math.max(
        1,
        ...(ge === "needs"
          ? [getStringWidth(Nt(se ?? ""))]
          : ge === "output"
            ? Ie.map(([, ae]) => getStringWidth(Nt(ae)))
            : ge === "detail"
              ? [getStringWidth(Nt(s.state.detail))]
              : []),
      ) / Math.max(40, jt - 6),
    ),
    St = isFullscreenEnabled()
      ? Math.min(
          Qt,
          Math.max(
            cm,
            Xt - Jt - Math.min(O.length, um) - mt - at - st - (A ? 1 : 0) - 1,
          ),
        )
      : cm,
    mo =
      (ge === "questions" ? mt : ge === "output" ? Ie.length * St : St) +
      at +
      st +
      (A ? 1 : 0) +
      1,
    no = Math.max(um, Xt - Jt - mo),
    Ft = O.slice(0, no),
    fe = O.length - Ft.length,
    Ae = Math.max(0, ...Ie.map(([ae]) => getStringWidth(ae))),
    Be = 5,
    { color: et } = rp(s.state, s.activity, c);
  return r(N, {
    children: [
      r(Box, {
        ref: le,
        flexDirection: "column",
        borderStyle: "round",
        borderColor: qe ? "bashBorder" : void 0,
        borderDimColor: !qe,
        paddingX: 1,
        minHeight: Be,
        width: "100%",
        tabIndex: 0,
        autoFocus: !0,
        onKeyDownCapture: Lt,
        onKeyDown: (ae) => {
          if (ae.key !== " " && ye.current) (ye.current(), (ye.current = null));
          if (I) return;
          if (Xi(ae)) {
            (ae.preventDefault(),
              ae.stopImmediatePropagation(),
              Zi(
                (gt) =>
                  Tt(gt.base64, {
                    mediaType: gt.mediaType,
                    dimensions: gt.dimensions,
                  }),
                q,
              ));
            return;
          }
          if (We.current === "prompt") {
            if (ae.key === "right" && !ae.shift && !Ue.current) {
              if ((ae.preventDefault(), be.current)) return;
              ((be.current = !0), w());
              return;
            }
            if (isBashModeShortcut(ae.key) && !Ue.current) {
              (ae.preventDefault(), yt("bash"));
              return;
            }
            if (!Ue.current) {
              let gt = dm(ae.key, X);
              if (gt) {
                (ae.preventDefault(), ze(gt), xt(gt.length));
                return;
              }
            }
          } else if (ae.name === "backspace" && !Ue.current) {
            (ae.preventDefault(), yt("prompt"));
            return;
          }
          zt(ae);
        },
        onPaste: I ? void 0 : Wt,
        children: [
          ge === "questions" && X
            ? e(Jd, { questions: X })
            : ge === "needs"
              ? e(Box, {
                  maxHeight: St,
                  overflowY: "hidden",
                  children: e(Text, {
                    wrap: "wrap",
                    children: e(as, { value: Nt(se ?? "") }),
                  }),
                })
              : ge === "output"
                ? e(Box, {
                    flexDirection: "column",
                    children: Ie.map(([ae, gt]) =>
                      r(
                        Box,
                        {
                          children: [
                            Ie.length > 1 &&
                              e(Box, {
                                width: Ae + 2,
                                flexShrink: 0,
                                children: e(Text, { dimColor: !0, children: ae }),
                              }),
                            e(Box, {
                              flexGrow: 1,
                              width: 0,
                              maxHeight: St,
                              overflowY: "hidden",
                              children: e(Text, {
                                wrap: "wrap",
                                children: e(as, { value: Nt(gt) }),
                              }),
                            }),
                          ],
                        },
                        ae,
                      ),
                    ),
                  })
                : e(Box, {
                    maxHeight: St,
                    overflowY: "hidden",
                    children: e(Text, {
                      wrap: "wrap",
                      children: e(LinkifiedText, { children: Nt(s.state.detail) }),
                    }),
                  }),
          Ft.length > 0 &&
            r(Box, {
              flexDirection: "column",
              children: [
                Ft.map((ae) =>
                  r(
                    Box,
                    {
                      children: [
                        e(Box, {
                          flexGrow: 1,
                          width: 0,
                          children: r(Text, {
                            wrap: "truncate",
                            children: [
                              ae.prNumber !== void 0
                                ? e(PullRequestBadge, {
                                    number: ae.prNumber,
                                    url: ae.row.href,
                                    kind: xr(ae.row),
                                    color: ae.color,
                                    underline: !1,
                                    hidePrefix: !0,
                                  })
                                : e(Text, {
                                    color: ae.color,
                                    dimColor: !Wo(ae),
                                    children: Wo(ae) ? ARTIFACT_MARKER_GLYPH : "PR",
                                  }),
                              ae.label
                                ? r(N, {
                                    children: [
                                      " ",
                                      e(Link, {
                                        url: formatPrUrlWithTemplate(ae.row.href, Dt),
                                        children: r(Text, {
                                          color: ae.isDraft
                                            ? "inactive"
                                            : void 0,
                                          children: [
                                            ae.label,
                                            ae.isDraft ? " (draft)" : "",
                                          ],
                                        }),
                                      }),
                                    ],
                                  })
                                : null,
                            ],
                          }),
                        }),
                        ae.diffStat &&
                          ae.diffStat.additions + ae.diffStat.deletions > 0 &&
                          e(Box, {
                            flexShrink: 0,
                            paddingLeft: 1,
                            children: e(Link, {
                              url: `${ae.row.href}/files`,
                              children: e(DiffStatLabel, {
                                added: ae.diffStat.additions,
                                removed: ae.diffStat.deletions,
                              }),
                            }),
                          }),
                        e(Box, {
                          flexShrink: 0,
                          paddingLeft: 1,
                          children: ae.status.map((gt, It) =>
                            r(
                              Nl,
                              {
                                children: [
                                  It > 0 && e(Text, { children: " " }),
                                  e(Text, {
                                    color: gt.color,
                                    dimColor: !gt.color,
                                    children: gt.text,
                                  }),
                                ],
                              },
                              It,
                            ),
                          ),
                        }),
                      ],
                    },
                    ae.row.href,
                  ),
                ),
                fe > 0 &&
                  e(Box, {
                    paddingLeft: 2,
                    children: r(Text, {
                      dimColor: !0,
                      children: ["\u2026 ", fe, " more"],
                    }),
                  }),
              ],
            }),
          at > 0 &&
            e(Box, {
              paddingLeft: 2,
              children: e(Text, {
                wrap: "truncate",
                children: r(DotSeparatedList, {
                  children: [
                    ke && r(Text, { color: et, children: ["waiting ", Ce] }),
                    Gt !== "" && e(Text, { dimColor: !0, children: Gt }),
                  ],
                }),
              }),
            }),
          e(Box, { flexGrow: 1 }),
          e(Box, {
            marginTop: 1,
            children: e(SearchInput, {
              query: ot,
              cursorOffset: Ht,
              onCursorOffsetChange: xt,
              placeholder:
                xe && (Ye !== "idle" || lt)
                  ? ""
                  : X
                    ? `press 1-${X[0]?.options.length ?? 2} or type your answer`
                    : ve && !qe
                      ? ve
                      : "reply",
              prefix: qe ? "!" : figures.pointer,
              prefixColor: qe ? "bashBorder" : void 0,
              prefixDim: !ot.trim(),
              dimRange: Ve.interimRange
                ? [Ve.interimRange.start, Ve.interimRange.end]
                : void 0,
              cursorChar: ut ? e(VoiceCursorChar, {}) : void 0,
              isFocused: !I,
              isTerminalFocused: R,
              width: "100%",
              borderless: !0,
              wrapColumns: jt - 4,
            }),
          }),
          A &&
            e(Text, {
              color: "error",
              dimColor: !0,
              wrap: "truncate",
              children: A,
            }),
        ],
      }),
      e(Box, {
        paddingLeft: 2,
        children:
          xe && lt && !I
            ? e(VoiceWarmupHint, {})
            : xe && Ye !== "idle" && !I
              ? e(VoiceStatusIndicator, { voiceState: Ye })
              : e(Text, {
                  dimColor: !0,
                  children: I
                    ? r(DotSeparatedList, {
                        children: [
                          e(KeybindingHint, {
                            chord: "enter",
                            action: "save",
                            format: { keyCase: "lower" },
                          }),
                          e(KeybindingHint, {
                            chord: "escape",
                            action: "cancel",
                            format: { keyCase: "lower" },
                          }),
                        ],
                      })
                    : r(DotSeparatedList, {
                        children: [
                          qe &&
                            e(Text, {
                              color: "bashBorder",
                              children: "! for shell mode",
                            }),
                          (ot.trim() || (!qe && !m)) &&
                            e(KeybindingHint, {
                              chord: "enter",
                              action: ot.trim()
                                ? "send"
                                : Ni(s.state)
                                  ? "resume"
                                  : "open",
                              format: { keyCase: "lower" },
                            }),
                          e(KeybindingHint, {
                            chord: ot.trim() || qe ? "escape" : " ",
                            action: "close",
                            format: { keyCase: "lower" },
                          }),
                          xe && nt !== "tap" && !qe && !ot.trim()
                            ? e(Text, { children: "hold space to speak" })
                            : null,
                          e(KeybindingHint, {
                            chord: "ctrl+x",
                            action: b ? "confirm" : "delete",
                          }),
                        ],
                      }),
                }),
      }),
    ],
  });
}
function wy(AP) {
  return AP.replyError;
}
function yy(OP) {
  return OP.prStatuses;
}
function Sy(by) {
  return by.kind === "job" && by.group === $n;
}
function qd(SP) {
  let ur = _(50),
    {
      owners: kP,
      layout: vP,
      footer: pm,
      simpleView: mi,
      groupsEnabled: fm,
      showRemoteTabs: mm,
      canMention: gm,
      isTerminalFocused: hm,
      awayLoop: bm,
      storageV5: wm,
      onOpen: RP,
    } = SP,
    { roster: ar, view: Ns, attach: ym, editor: Gs, deleteConfirm: _P } = kP,
    {
      helpOpen: Sm,
      debugOpen: km,
      previewOpen: lr,
      groupEdit: vm,
      renaming: CP,
      resumePicker: dr,
      resumePickerIdx: Hd,
      activeTab: Rm,
    } = useStoreSelector(Ns),
    Gd = useStoreSelector(Gs, wy),
    _m = useStoreSelector(ar, yy),
    { pending: Vd } = useStoreSelector(_P),
    [Cm, EP] = d(!1),
    {
      rows: Ud,
      byState: Em,
      byGroup: Wd,
      focusedRow: gi,
      focused: At,
      focusedIsPending: an,
      focusedOrigin: xm,
    } = vP,
    Im = CP?.jobId ?? null,
    dy;
  if (ur[0] !== ar)
    ((dy = (xP) => ar.liveStatus(xP)), (ur[0] = ar), (ur[1] = dy));
  else dy = ur[1];
  let Pm = dy,
    Am = RP,
    uy;
  if (ur[2] !== At || ur[3] !== _m)
    ((uy = At?.state.children ? Gn(At.state.children, _m) : []),
      (ur[2] = At),
      (ur[3] = _m),
      (ur[4] = uy));
  else uy = ur[4];
  let Om = uy,
    cy;
  if (ur[5] !== dr || ur[6] !== Hd)
    ((cy =
      dr !== null
        ? (() => {
            let Vs;
            if (dr.entries === null)
              Vs = e(Text, {
                dimColor: !0,
                children: "Looking for past sessions\u2026",
              });
            else if (dr.failed)
              Vs = e(Text, {
                dimColor: !0,
                children:
                  "Couldn't load past sessions \u2014 press esc, then try /resume again",
              });
            else if (dr.entries.length === 0)
              Vs = e(Text, {
                dimColor: !0,
                children: "No past sessions to resume",
              });
            else {
              let Tm = dr.entries;
              let hi = Math.max(0, Math.min(Hd - 3, Tm.length - 8));
              let py = Tm.slice(hi, hi + 8);
              let fy = Tm.length - hi - py.length;
              Vs = r(N, {
                children: [
                  hi > 0 &&
                    r(Text, {
                      dimColor: !0,
                      children: ["  ", "\u2026 ", hi, " above"],
                    }),
                  py.map((Dm, IP) => {
                    let Fm = hi + IP === Hd;
                    return r(
                      Box,
                      {
                        children: [
                          e(Box, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: "hidden",
                            children: r(Text, {
                              color: Fm ? "suggestion" : void 0,
                              dimColor: !Fm,
                              wrap: "truncate",
                              children: [Fm ? figures.pointer : " ", " ", Dm.title],
                            }),
                          }),
                          e(Box, {
                            flexShrink: 0,
                            marginLeft: 1,
                            children: e(Text, {
                              dimColor: !0,
                              children: formatDuration(
                                Math.max(0, Date.now() - Dm.modified.getTime()),
                                { mostSignificantOnly: !0 },
                              ),
                            }),
                          }),
                        ],
                      },
                      Dm.sessionId,
                    );
                  }),
                  fy > 0 &&
                    r(Text, {
                      dimColor: !0,
                      children: ["  ", "\u2026 ", fy, " more"],
                    }),
                ],
              });
            }
            return e(Box, {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              flexDirection: "column",
              opaque: !0,
              children: r(Box, {
                flexDirection: "column",
                borderStyle: "round",
                paddingX: 1,
                children: [
                  e(Text, { bold: !0, children: "Resume a past session" }),
                  Vs,
                  e(Text, {
                    dimColor: !0,
                    children:
                      "\u2191/\u2193 to navigate \xB7 enter to resume as a background session \xB7 esc to close",
                  }),
                ],
              }),
            });
          })()
        : null),
      (ur[5] = dr),
      (ur[6] = Hd),
      (ur[7] = cy));
  else cy = ur[7];
  let Mm = cy,
    Kd;
  if (
    ur[8] !== Rm ||
    ur[9] !== Wd ||
    ur[10] !== Em ||
    ur[11] !== gm ||
    ur[12] !== km ||
    ur[13] !== At ||
    ur[14] !== an ||
    ur[15] !== xm ||
    ur[16] !== gi ||
    ur[17] !== pm ||
    ur[18] !== fm ||
    ur[19] !== Sm ||
    ur[20] !== lr ||
    ur[21] !== Ud ||
    ur[22] !== mm ||
    ur[23] !== mi
  )
    ((Kd =
      Sm && !lr
        ? e(Ls, {
            focusedPinned: At?.state.pinned ?? !1,
            canReorder:
              !!At &&
              (mi
                ? (At.state.pinned ?? !1) && countMatching(Ud, Sy) > 1
                : (!Em && !Wd) || (At.state.pinned ?? !1)),
            canRename:
              (Wd &&
                gi?.kind === "header" &&
                gi.group !== "pinned" &&
                gi.group !== UNGROUPED &&
                gi.group !== EARLIER) ||
              (!!At &&
                !an &&
                !(At.state.backend !== "daemon" && !At.state.sock)),
            canGroup: fm && !!At && !an && At.state.backend === "daemon",
            canPin: !!At && !an,
            canMention: !mi && gm,
            canSwitchViews: !mi,
            canSwitchTabs: mm && !mi,
            canDispatchAndOpen: Rm === "local" && cDt(),
            altOpenCount: Math.min(
              9,
              countMatching(Ud, (gy) => gy.kind === "job" && gy.origin === xm),
            ),
            canDelete: At && !an ? (isSettled(At.state) ? "delete" : "stop") : void 0,
            canGoBack: !1,
          })
        : km && !lr
          ? e(Js, { job: At })
          : pm),
      (ur[8] = Rm),
      (ur[9] = Wd),
      (ur[10] = Em),
      (ur[11] = gm),
      (ur[12] = km),
      (ur[13] = At),
      (ur[14] = an),
      (ur[15] = xm),
      (ur[16] = gi),
      (ur[17] = pm),
      (ur[18] = fm),
      (ur[19] = Sm),
      (ur[20] = lr),
      (ur[21] = Ud),
      (ur[22] = mm),
      (ur[23] = mi),
      (ur[24] = Kd));
  else Kd = ur[24];
  let $d;
  if (ur[25] !== Cm)
    (($d = e(AutoUpdaterWrapper, {
      isUpdating: Cm,
      onChangeIsUpdating: EP,
      showSuccessMessage: !0,
      verbose: !1,
    })),
      (ur[25] = Cm),
      (ur[26] = $d));
  else $d = ur[26];
  let jd;
  if (
    ur[27] !== ym ||
    ur[28] !== bm ||
    ur[29] !== Gs ||
    ur[30] !== At ||
    ur[31] !== Om ||
    ur[32] !== an ||
    ur[33] !== vm ||
    ur[34] !== hm ||
    ur[35] !== Pm ||
    ur[36] !== Am ||
    ur[37] !== Vd ||
    ur[38] !== lr ||
    ur[39] !== Im ||
    ur[40] !== Gd ||
    ur[41] !== ar ||
    ur[42] !== wm ||
    ur[43] !== Ns
  )
    ((jd =
      lr &&
      At &&
      e(Box, {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "column",
        opaque: !0,
        children: e(
          Nd,
          {
            job: At,
            renaming: Im !== null || vm !== null,
            editor: Gs,
            replyError: Gd?.jobId === At.id ? Gd.error : null,
            status: Pm(At),
            isPending: an,
            deleteArmed:
              Vd?.id === At.id ? { justKilled: Vd.justKilled } : void 0,
            onBack: () => Ns.setPreviewOpen(!1),
            onAttach: () => {
              (Am(At), Ns.setPreviewOpen(!1));
            },
            childRows: Om,
            onReply: (PP) =>
              Oa(
                {
                  editor: Gs,
                  roster: ar,
                  attach: ym,
                  awayLoop: bm,
                  storageV5: wm,
                },
                At,
                PP,
              ),
            isTerminalFocused: hm,
          },
          At.id,
        ),
      })),
      (ur[27] = ym),
      (ur[28] = bm),
      (ur[29] = Gs),
      (ur[30] = At),
      (ur[31] = Om),
      (ur[32] = an),
      (ur[33] = vm),
      (ur[34] = hm),
      (ur[35] = Pm),
      (ur[36] = Am),
      (ur[37] = Vd),
      (ur[38] = lr),
      (ur[39] = Im),
      (ur[40] = Gd),
      (ur[41] = ar),
      (ur[42] = wm),
      (ur[43] = Ns),
      (ur[44] = jd));
  else jd = ur[44];
  let hy;
  if (ur[45] !== Mm || ur[46] !== Kd || ur[47] !== $d || ur[48] !== jd)
    ((hy = r(N, { children: [Kd, $d, Mm, jd] })),
      (ur[45] = Mm),
      (ur[46] = Kd),
      (ur[47] = $d),
      (ur[48] = jd),
      (ur[49] = hy));
  else hy = ur[49];
  return hy;
}
F();
function By(dA) {
  return dA.voiceState;
}
function Ny(uA) {
  return uA.voiceWarmingUp;
}
function ou(oA) {
  let fr = _(40),
    {
      owners: nA,
      layout: rA,
      onCursorOffsetChange: Lm,
      highlights: Jm,
      voice: bi,
      isTerminalFocused: Bm,
      simpleView: un,
      hasGroups: Hm,
      suggestionList: Gm,
    } = oA,
    { view: iA, editor: sA } = nA,
    { columns: Vm } = useTerminalSize(),
    { query: cn, cursorOffset: Um, mode: Km } = useStoreSelector(sA),
    {
      activeTab: $m,
      groupEdit: jm,
      renaming: aA,
      previewOpen: qm,
      resumePicker: Ym,
    } = useStoreSelector(iA),
    Qm = useVoiceAvailable(),
    Xm = useVoiceSelector(By),
    Zm = useVoiceSelector(Ny),
    {
      onlyOrigin: eg,
      byGroup: tg,
      filtered: og,
      isBashDispatch: cr,
      hasDispatch: ng,
      queryIsFilter: rg,
    } = rA,
    ig = aA?.jobId ?? null,
    ky;
  if (fr[0] === MEMO_CACHE_SENTINEL)
    ((ky = e(Text, {
      dimColor: !0,
      children:
        "A different way to work with Claude: hand off a bigger task than you would chat through, and Claude organizes it in the sections above so you know when it needs you.",
    })),
      (fr[0] = ky));
  else ky = fr[0];
  let lA = ky,
    vy;
  if (
    fr[1] !== $m ||
    fr[2] !== tg ||
    fr[3] !== og ||
    fr[4] !== Hm ||
    fr[5] !== cn ||
    fr[6] !== un
  )
    ((vy =
      !un && tg && $m !== "remote" && !Hm && og.length > 0 && !cn
        ? e(Text, {
            dimColor: !0,
            children:
              "No groups yet \u2014 press ctrl+e on a session to tag it.",
          })
        : null),
      (fr[1] = $m),
      (fr[2] = tg),
      (fr[3] = og),
      (fr[4] = Hm),
      (fr[5] = cn),
      (fr[6] = un),
      (fr[7] = vy));
  else vy = fr[7];
  let zd = vy,
    Ry;
  if (fr[8] === MEMO_CACHE_SENTINEL)
    ((Ry = e(Box, {
      position: "absolute",
      marginTop: -1,
      height: 1,
      width: "100%",
      paddingLeft: 2,
      paddingRight: 1,
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      overflow: "hidden",
      children: e(CurrentNotification, {}),
    })),
      (fr[8] = Ry));
  else Ry = fr[8];
  let Yd;
  if (fr[9] !== eg || fr[10] !== cn || fr[11] !== un)
    ((Yd =
      eg &&
      !cn &&
      !un &&
      e(Box, { paddingLeft: 1, marginBottom: 1, children: lA })),
      (fr[9] = eg),
      (fr[10] = cn),
      (fr[11] = un),
      (fr[12] = Yd));
  else Yd = fr[12];
  let Zd;
  if (fr[13] !== zd)
    ((Zd = zd && e(Box, { paddingLeft: 1, marginBottom: 1, children: zd })),
      (fr[13] = zd),
      (fr[14] = Zd));
  else Zd = fr[14];
  let eu;
  if (
    fr[15] !== Vm ||
    fr[16] !== Um ||
    fr[17] !== Km ||
    fr[18] !== jm ||
    fr[19] !== ng ||
    fr[20] !== Jm ||
    fr[21] !== cr ||
    fr[22] !== Bm ||
    fr[23] !== Lm ||
    fr[24] !== qm ||
    fr[25] !== cn ||
    fr[26] !== rg ||
    fr[27] !== ig ||
    fr[28] !== Ym ||
    fr[29] !== un ||
    fr[30] !== bi ||
    fr[31] !== Qm ||
    fr[32] !== Xm ||
    fr[33] !== Zm
  )
    ((eu = un
      ? null
      : e(Box, {
          flexDirection: "column",
          borderStyle: "round",
          borderLeft: !1,
          borderRight: !1,
          borderColor: cr ? "bashBorder" : void 0,
          borderDimColor: !cr,
          children: e(SearchInput, {
            query: cn,
            cursorOffset: Um,
            onCursorOffsetChange: Lm,
            placeholder:
              cr || (Qm && (Xm !== "idle" || Zm))
                ? ""
                : "describe a task for a new session",
            prefix: Km === "bash" ? "!" : !rg ? figures.pointer : void 0,
            prefixDim: !ng && !cr,
            prefixColor: cr ? "bashBorder" : void 0,
            highlights: Jm,
            dimRange: bi.interimRange
              ? [bi.interimRange.start, bi.interimRange.end]
              : void 0,
            cursorChar: bi.showCursor ? e(VoiceCursorChar, {}) : void 0,
            isFocused: !qm && ig === null && jm === null && Ym === null,
            isTerminalFocused: Bm,
            width: "100%",
            borderless: !0,
            wrapColumns: Vm,
          }),
        })),
      (fr[15] = Vm),
      (fr[16] = Um),
      (fr[17] = Km),
      (fr[18] = jm),
      (fr[19] = ng),
      (fr[20] = Jm),
      (fr[21] = cr),
      (fr[22] = Bm),
      (fr[23] = Lm),
      (fr[24] = qm),
      (fr[25] = cn),
      (fr[26] = rg),
      (fr[27] = ig),
      (fr[28] = Ym),
      (fr[29] = un),
      (fr[30] = bi),
      (fr[31] = Qm),
      (fr[32] = Xm),
      (fr[33] = Zm),
      (fr[34] = eu));
  else eu = fr[34];
  let _y;
  if (fr[35] !== Gm || fr[36] !== Yd || fr[37] !== Zd || fr[38] !== eu)
    ((_y = r(Box, {
      flexShrink: 0,
      flexDirection: "column",
      marginTop: 1,
      children: [Ry, Yd, Zd, Gm, null, eu],
    })),
      (fr[35] = Gm),
      (fr[36] = Yd),
      (fr[37] = Zd),
      (fr[38] = eu),
      (fr[39] = _y));
  else _y = fr[39];
  return _y;
}
function nu(cA) {
  let tu = _(22),
    {
      editor: Lo,
      selection: Jo,
      query: sg,
      dispatchMode: ag,
      collapsed: lg,
      canonicalLauncherCwd: so,
      storageV5: _o,
    } = cA,
    Cy;
  if (tu[0] !== so || tu[1] !== Lo || tu[2] !== Jo || tu[3] !== _o)
    ((Cy = () => {
      let Ey = Lo.draftForDisk();
      let xy = [...Jo.getSnapshot().collapsed];
      Ey || xy.length ? saveJobDraft(so, { q: Ey, collapsed: xy }, _o) : deleteJobDraft(so, _o);
    }),
      (tu[0] = so),
      (tu[1] = Lo),
      (tu[2] = Jo),
      (tu[3] = _o),
      (tu[4] = Cy));
  else Cy = tu[4];
  let Iy;
  if (
    tu[5] !== so ||
    tu[6] !== lg ||
    tu[7] !== ag ||
    tu[8] !== sg ||
    tu[9] !== _o
  )
    ((Iy = [sg, ag, lg, so, _o]),
      (tu[5] = so),
      (tu[6] = lg),
      (tu[7] = ag),
      (tu[8] = sg),
      (tu[9] = _o),
      (tu[10] = Iy));
  else Iy = tu[10];
  useTimeout(Cy, 300, Iy);
  let Py = C(!1),
    Ay,
    Oy;
  if (tu[11] !== so || tu[12] !== Lo || tu[13] !== Jo || tu[14] !== _o)
    ((Ay = () =>
      isHoverRestEnabled() && _o !== void 0
        ? registerPreExitFlush(async () => {
            let Ty = Lo.draftForDisk();
            let Dy = [...Jo.getSnapshot().collapsed];
            Py.current =
              Ty || Dy.length
                ? await writeJobDraft(so, { q: Ty, collapsed: Dy }, _o)
                : !0;
          })
        : void 0),
      (Oy = [so, Lo, Jo, _o]),
      (tu[11] = so),
      (tu[12] = Lo),
      (tu[13] = Jo),
      (tu[14] = _o),
      (tu[15] = Ay),
      (tu[16] = Oy));
  else ((Ay = tu[15]), (Oy = tu[16]));
  E(Ay, Oy);
  let Fy, My;
  if (tu[17] !== so || tu[18] !== Lo || tu[19] !== Jo)
    ((Fy = () =>
      cz(() => {
        if (Py.current) {
          return;
        }
        let Ly = Lo.draftForDisk();
        let Jy = [...Jo.getSnapshot().collapsed];
        if (Ly || Jy.length) writeJobDraftSync(so, { q: Ly, collapsed: Jy });
      })),
      (My = [so, Lo, Jo]),
      (tu[17] = so),
      (tu[18] = Lo),
      (tu[19] = Jo),
      (tu[20] = Fy),
      (tu[21] = My));
  else ((Fy = tu[20]), (My = tu[21]));
  E(Fy, My);
}
var ru = { pending: null };
class dg {
  #n = Le();
  #e = ru;
  #a = 0;
  #t = 0;
  #i = new Set();
  #r;
  constructor(s) {
    this.#r = s.onArm;
  }
  getSnapshot = () => this.#e;
  subscribe = (s) => this.#n.subscribe(s);
  attachView() {
    this.#a++;
    let s = !1;
    return () => {
      if (s) return;
      if (((s = !0), this.#a--, this.#a === 0))
        (this.#i.clear(), this.#t++, (this.#e = ru));
    };
  }
  get pending() {
    return this.#e.pending;
  }
  get generation() {
    return this.#t;
  }
  arm(s, c = !1, m, b) {
    (this.#r(),
      this.#i.delete(s),
      (this.#e = { pending: { id: s, justKilled: c, group: m, sortKey: b } }),
      this.#n.emit());
  }
  disarm() {
    if (this.#e.pending === null) return;
    ((this.#e = ru), this.#n.emit());
  }
  dismiss() {
    let s = this.#e.pending;
    if (s === null) return;
    (this.#i.add(s.id), this.disarm());
  }
  isDismissed(s) {
    return this.#i.has(s);
  }
}
function ug(s, c) {
  return (s.deleteConfirm ??= new dg(c));
}
var Hy = [
  "groupMode",
  "activeTab",
  "groupEdit",
  "groupPickIdx",
  "groupPristine",
  "resumePicker",
  "resumePickerIdx",
  "renaming",
  "previewOpen",
  "helpOpen",
  "debugOpen",
  "exitPending",
];
function cg() {
  return {
    groupEdit: null,
    groupPickIdx: -1,
    groupPristine: !1,
    resumePicker: null,
    resumePickerIdx: 0,
    renaming: null,
    previewOpen: !1,
    helpOpen: !1,
    debugOpen: !1,
    exitPending: !1,
  };
}
class pg {
  #n = Le();
  #e;
  #a = 0;
  #t = 0;
  #i = null;
  #r = 0;
  #d = null;
  #s = new Set();
  constructor(s) {
    this.#e = { groupMode: s.groupMode, activeTab: "local", ...cg() };
  }
  getSnapshot = () => this.#e;
  subscribe = (s) => this.#n.subscribe(s);
  #o(s) {
    let c = this.#e,
      m = { ...c, ...s };
    if (Hy.every((b) => Object.is(m[b], c[b]))) return;
    ((this.#e = m), this.#n.emit());
  }
  attachView(s) {
    (this.#a++, this.restrictGroupMode(s.groupsEnabled));
    let c = !1;
    return () => {
      if (c) return;
      if (((c = !0), this.#a--, this.#a === 0))
        (this.#t++,
          (this.#i = null),
          (this.#r = 0),
          this.cancelPeekTap(),
          this.#s.clear(),
          (this.#e = { ...this.#e, ...cg() }));
    };
  }
  setGroupMode(s) {
    this.#o({ groupMode: s });
  }
  restrictGroupMode(s) {
    if (!s && this.#e.groupMode === "group") this.#o({ groupMode: "state" });
  }
  setActiveTab(s) {
    (this.#t++, this.#o({ activeTab: s, resumePicker: null }));
  }
  openGroupEdit(s, c) {
    this.#o({ groupEdit: s, groupPristine: c });
  }
  closeGroupEdit() {
    this.#o({ groupEdit: null, groupPickIdx: -1, groupPristine: !1 });
  }
  setGroupPickIdx(s) {
    this.#o({ groupPickIdx: s });
  }
  setGroupPristine(s) {
    this.#o({ groupPristine: s });
  }
  openResumePicker() {
    let s = ++this.#t;
    return (
      this.#o({
        resumePicker: { entries: null, failed: !1 },
        resumePickerIdx: 0,
      }),
      s
    );
  }
  get resumePickerGen() {
    return this.#t;
  }
  setResumePicker(s) {
    this.#o({ resumePicker: s });
  }
  closeResumePicker() {
    (this.#t++, this.#o({ resumePicker: null }));
  }
  setResumePickerIdx(s) {
    this.#o({ resumePickerIdx: s });
  }
  get resumePromoteSessionId() {
    return this.#i;
  }
  set resumePromoteSessionId(s) {
    this.#i = s;
  }
  refuseResumePick(s) {
    ((this.#r = s), this.closeResumePicker());
  }
  get resumePickerRefusedAt() {
    return this.#r;
  }
  clearResumePickerRefusal() {
    this.#r = 0;
  }
  startRename(s, c) {
    this.#o({ renaming: { jobId: s, sock: c } });
  }
  clearRename() {
    this.#o({ renaming: null });
  }
  setPreviewOpen(s) {
    this.#o({ previewOpen: s });
  }
  schedulePeekTap(s, c) {
    (this.cancelPeekTap(),
      (this.#d = s(() => {
        ((this.#d = null), c());
      })));
  }
  cancelPeekTap() {
    if (this.#d === null) return;
    let s = this.#d;
    ((this.#d = null), s());
  }
  setHelpOpen(s) {
    this.#o({ helpOpen: s });
  }
  setDebugOpen(s) {
    this.#o({ debugOpen: s });
  }
  setExitPending = (s) => {
    this.#o({ exitPending: s });
  };
  firstImpression(s) {
    if (this.#s.has(s)) return !1;
    return (this.#s.add(s), !0);
  }
}
function fg(s, c) {
  if (s.view) return s.view;
  let m = getGlobalConfig().fleetViewGroupMode ?? "state";
  return (s.view = new pg({ groupMode: m === "group" && !c ? "state" : m }));
}
function mg(s) {
  if (s.originJobId === void 0) return { kind: "exit" };
  if (s.originSpawn !== void 0 && !s.originSpawn.settled)
    return { kind: "wait-starting" };
  if (s.originSpawn !== void 0 && !s.originSpawn.ok)
    return { kind: "exit-with-hint" };
  return s.originRowPresent
    ? { kind: "attach-origin" }
    : { kind: "exit-with-hint" };
}
var Gy = 300;
function hg(s) {
  let { roster: c, editor: m, view: b, storageV5: k } = s.submit,
    { simpleView: w, readRenameDraft: v, clearRename: R } = s,
    { setError: O, setHint: W } = m,
    A = b.getSnapshot().renaming,
    I = A?.jobId,
    q = A?.sock ?? null,
    K = v().trim();
  if ((R(), !I || !K)) return;
  if (q) {
    (c.updateAdoptedPeers((J) =>
      J.map((j) =>
        j.id !== I
          ? j
          : {
              ...j,
              state: {
                ...j.state,
                name: K,
                intent: K,
                updatedAt: new Date().toISOString(),
              },
            },
      ),
    ),
      sendControlToUdsSocket(q, { action: "rename", name: K }, { storageV5: k })
        .then(() => {
          logFeatureOk("fleet_view_rename_job");
        })
        .catch((J) => {
          (logForDebugging(`[fleetview] peer rename failed: ${J}`),
            logFeatureBad("fleet_view_rename_job", "peer_uds_failed"),
            O("Couldn't rename \u2014 that session isn't responding"),
            c.updateAdoptedPeers((j) =>
              j.map((ne) =>
                ne.id === I && ne.state.name === K
                  ? {
                      ...ne,
                      state: {
                        ...ne.state,
                        updatedAt: new Date(0).toISOString(),
                      },
                    }
                  : ne,
              ),
            ));
        }));
    return;
  }
  if (
    w &&
    c.jobs?.some(
      (J) => J.id !== I && J.state.name !== void 0 && J.state.name === K,
    )
  )
    W(`Another session is already named "${K}"`);
  (c.bumpGen(),
    c.updateJobs((J) =>
      J
        ? J.map((j) =>
            j.id === I ? { ...j, state: { ...j.state, name: K } } : j,
          )
        : J,
    ),
    syncJobName(I, K, "user", k).then((J) => {
      if (J) {
        logFeatureOk("fleet_view_rename_job");
        return;
      }
      (O(
        "Couldn't rename \u2014 the job may have been removed or its state file is unwritable.",
      ),
        logFeatureBad("fleet_view_rename_job", "sync_name_failed"),
        c.updateJobs((j) =>
          j
            ? j.map((ne) =>
                ne.id === I && ne.state.name === K
                  ? { ...ne, state: { ...ne.state, name: void 0 } }
                  : ne,
              )
            : j,
        ));
    }));
}
function bg(s) {
  let { roster: c, selection: m, editor: b, view: k, storageV5: w } = s.submit,
    { groupSuggestions: v, readGroupDraft: R, clearGroupEdit: O, ck: W } = s,
    A = b.setError,
    { groupEdit: I, groupPickIdx: q } = k.getSnapshot();
  if (!I) {
    O();
    return;
  }
  let K = I.kind === "assign" && q >= 0 ? v[q] : void 0,
    J = sanitizeGroupName(K ?? R()) || void 0;
  if (J && isReservedGroupName(J)) return;
  if (I.kind === "assign") {
    let oe = c.jobs?.find((X) => X.id === I.jobId)?.state.group;
    if ((O(), J !== oe)) Vy(s, I.jobId, J);
    return;
  }
  let j = I.from;
  if (!J || J === j) {
    O();
    return;
  }
  if ((c.jobs ?? []).some((oe) => oe.state.group === J)) return;
  O();
  let ne = (c.jobs ?? [])
    .filter((oe) => oe.state.group === j && oe.state.backend === "daemon")
    .map((oe) => oe.id);
  ((m.followOrigin = J),
    (m.followId = null),
    c.bumpGen(),
    m.renameCollapsedKey(W(j, "group"), W(J, "group")),
    c.updateJobs((oe) =>
      oe
        ? oe.map((X) =>
            X.state.group === j ? { ...X, state: { ...X.state, group: J } } : X,
          )
        : oe,
    ));
  let se = ne.map(c.holdJob);
  Promise.all(ne.map((oe) => writeJobGroup(getJobDir(oe), J, w)))
    .then(() => {
      logFeatureOk("fleet_view_group_rename");
    })
    .catch((oe) => {
      (logError(oe),
        A(`Couldn't rename group \u2014 ${l(oe)}`),
        logFeatureBad("fleet_view_group_rename", "write_group_failed"),
        c.reload());
    })
    .finally(() => {
      for (let oe of se) oe();
    });
}
function iu(s, c, m, b = !1) {
  let { roster: k, editor: w } = s.submit,
    { deleteConfirm: v, actions: R, groupOf: O, simpleView: W } = s,
    A = w.setError;
  if (!m) return;
  if (m.state.backend !== "daemon") {
    A(
      "Can't stop or delete \u2014 this session is running in another terminal",
    );
    return;
  }
  let I = lo(m.state),
    q = R.find((j) => j.key === c && j.bands.includes(I));
  if (!q) return;
  let K = (j, ne) => {
    if (ne instanceof Or)
      logForDebugging(`[FleetView] action '${j}' unconfirmed: ${l(ne)}`, { level: "warn" });
    else if (Rt(ne))
      logForDebugging(`[FleetView] action '${j}' fs failure (${ne.code}): ${l(ne)}`, {
        level: "error",
      });
    else logError(ne);
    A(`Couldn't ${j} \u2014 ${l(ne)}`);
  };
  if (c === "x" && !b && v.pending?.id !== m.id) {
    let j = R.find((de) => de.label === "stop"),
      ne = O.get(m.id),
      se = Jn(m.state, ne),
      oe = v.generation;
    v.arm(m.id, q.label === "stop", ne, se);
    let X = !(W && isSettled(m.state));
    if (j && X)
      Promise.resolve(j.run(m, { bulk: b })).catch((de) => {
        if (
          v.generation === oe &&
          !k.isDeleting(m.id) &&
          k.jobs?.some((ce) => ce.id === m.id) &&
          (v.pending === null || v.pending.id === m.id) &&
          !v.isDismissed(m.id)
        )
          v.arm(m.id, !1, ne, se);
        K(j.label, de);
      });
    return;
  }
  v.disarm();
  let J = c === "x" ? (R.find((j) => j.label === "delete") ?? q) : q;
  Promise.resolve(J.run(m, { bulk: b })).then(
    (j) => {
      if (j) A(j);
    },
    (j) => K(J.label, j),
  );
}
function su(s, c, m) {
  let {
      rows: b,
      hasComposedDispatch: k,
      byState: w,
      dispatchRepoCwd: v,
      previewOpen: R,
    } = s,
    O = b.length;
  if (O === 0) return 0;
  if (k && (w || v)) return c;
  let W = k
      ? (I) => I?.kind !== "header" || I.group === "pinned"
      : R
        ? (I) => I?.kind !== "job"
        : null,
    A = (c + m + O) % O;
  if (W) while (A !== c && W(b[A])) A = (A + m + O) % O;
  return A;
}
function Vy(s, c, m) {
  let { roster: b, selection: k, editor: w, storageV5: v } = s.submit,
    { ck: R } = s,
    O = w.setError,
    W =
      m !== void 0 &&
      !(b.jobs ?? []).some((q) => q.id !== c && q.state.group === m),
    A =
      m === void 0
        ? "fleet_view_group_ungroup"
        : W
          ? "fleet_view_group_create"
          : "fleet_view_group_assign";
  ((k.followId = c),
    b.bumpGen(),
    b.updateJobs((q) =>
      q
        ? q.map((K) =>
            K.id === c ? { ...K, state: { ...K.state, group: m } } : K,
          )
        : q,
    ),
    k.uncollapse(R(m ?? UNGROUPED, "group")));
  let I = b.holdJob(c);
  writeJobGroup(getJobDir(c), m, v)
    .then(() => {
      logFeatureOk(A);
    })
    .catch((q) => {
      (logError(q),
        O(`Couldn't set group \u2014 ${l(q)}`),
        logFeatureBad(A, "write_group_failed"),
        b.reload());
    })
    .finally(I);
}
function Uy(s, c) {
  let { roster: m, selection: b, editor: k, storageV5: w } = s.submit,
    { ck: v } = s,
    R = k.setError,
    O = (m.jobs ?? [])
      .filter((A) => A.state.group === c && A.state.backend === "daemon")
      .map((A) => A.id);
  ((b.followOrigin = UNGROUPED),
    (b.followId = null),
    m.bumpGen(),
    b.uncollapse(v(c, "group"), v(UNGROUPED, "group")),
    m.updateJobs((A) =>
      A
        ? A.map((I) =>
            I.state.group === c
              ? { ...I, state: { ...I.state, group: void 0 } }
              : I,
          )
        : A,
    ));
  let W = O.map(m.holdJob);
  Promise.all(O.map((A) => writeJobGroup(getJobDir(A), void 0, w)))
    .then(() => {
      logFeatureOk("fleet_view_group_delete");
    })
    .catch((A) => {
      (logError(A),
        R(`Couldn't remove group \u2014 ${l(A)}`),
        logFeatureBad("fleet_view_group_delete", "write_group_failed"),
        m.reload());
    })
    .finally(() => {
      for (let A of W) A();
    });
}
function Wy(s, c) {
  let { roster: m, selection: b, editor: k } = s.submit,
    { rows: w, pendings: v, byGroup: R, byState: O, simpleView: W } = s,
    A = k.setError;
  if (b.reorderIssued) return;
  let I = b.getSnapshot().focusedIdx,
    q = w[I];
  if (q?.kind !== "job") return;
  let K = I + c;
  while (w[K]?.kind === "earlier") K += c;
  let J = w[K];
  if (J?.kind !== "job" || q.group !== J.group) return;
  let j = q.job,
    ne = J.job;
  if (v.some((ke) => ke.id === j.id || ke.id === ne.id)) return;
  if (j.state.backend !== "daemon" || ne.state.backend !== "daemon") return;
  A(null);
  let se = q.group === "pinned" || q.group === $n;
  if ((R || W) && !se) return;
  let oe = O && !se,
    X = oe ? (ke) => Jn(ke, q.group) : Gi,
    de = X(j.state),
    ce = X(ne.state),
    Ie = new Map();
  if (de === ce) {
    let ke = new Set(v.map((le) => le.id)),
      Ce = 0;
    for (let le of w)
      if (le.kind === "job" && le.group === q.group && !ke.has(le.job.id))
        Ie.set(le.job.id, Ce++);
    let be = Ie.get(j.id);
    (Ie.set(j.id, Ie.get(ne.id)), Ie.set(ne.id, be));
  } else (Ie.set(j.id, ce), Ie.set(ne.id, de));
  (b.beginReorder(j.id, K), m.bumpGen());
  let ge = oe ? "stateSortOrder" : "sortOrder";
  (m.updateJobs((ke) =>
    ke
      ? bn(
          ke.map((Ce) => {
            let be = Ie.get(Ce.id);
            return be === void 0
              ? Ce
              : { ...Ce, state: { ...Ce.state, [ge]: be } };
          }),
        )
      : ke,
  ),
    b.queueOrderWrites(Ie, oe ? "state" : "directory"));
}
function wg(s, c) {
  let {
      editor: m,
      roster: b,
      selection: k,
      view: w,
      attach: v,
      storageV5: R,
      onAction: O,
      exit: W,
      searchKeyDown: A,
      vimMode: I,
      dispatchInputActive: q,
      templates: K,
      suggestions: J,
      pickSuggestion: j,
      applySuggestion: ne,
      jobSessionIds: se,
      focusedRow: oe,
      focused: X,
      openEarlier: de,
      openNewSessionRow: ce,
      openOrRespawn: Ie,
    } = s.submit,
    {
      deleteConfirm: ge,
      rows: ke,
      focusedIdx: Ce,
      focusedOrigin: be,
      byGroup: le,
      hasComposedDispatch: Fe,
      headerJobs: pe,
      groupSuggestions: je,
      previewOpen: We,
      helpOpen: yt,
      debugOpen: qe,
      groupEdit: ve,
      renamingJobId: xe,
      attachingJobId: nt,
      showAllAgents: tt,
      jobs: ye,
      pendings: $e,
      keybindings: ot,
      simpleView: Ue,
      groupsEnabled: ze,
      hasCredentials: Ht,
      termRows: bt,
      canGoBack: xt,
      originJobId: Ut,
      originSpawn: He,
      renameKeyDown: Tt,
      groupKeyDown: zt,
      setQuery: Wt,
      setRenameDraft: Je,
      setGroupDraft: Ve,
      readGroupDraft: Ye,
      handleCtrlC: lt,
      switchTab: dt,
      clearRename: Dt,
      clearGroupEdit: ut,
      headerArmId: Lt,
      ck: mt,
      setShowAllAgents: Gt,
      setSelectedSuggestion: at,
      setHoveredSuggestionId: Xt,
      attachPastedImage: jt,
    } = s,
    Jt = (fe) => m.setMode(fe),
    { setError: st, setHint: Qt } = m,
    St = () => Ar(v, m);
  if (c.key !== " ") w.cancelPeekTap();
  if (
    Ue &&
    ge.pending !== null &&
    !(c.ctrl && c.key === "x") &&
    c.key !== "escape"
  )
    ge.disarm();
  let Qe = () => {
    (c.preventDefault(), c.stopImmediatePropagation());
  };
  if (xe !== null || w.getSnapshot().renaming !== null) {
    if ((Qe(), c.ctrl && c.key === "c")) {
      Dt();
      return;
    }
    if (c.key === "up" || c.key === "down") return;
    Tt(c);
    return;
  }
  if (ve !== null) {
    if ((Qe(), c.ctrl && c.key === "c")) {
      ut();
      return;
    }
    if (w.getSnapshot().groupPristine) {
      if (
        c.name === "backspace" ||
        c.name === "delete" ||
        (c.ctrl && (c.key === "u" || c.key === "w" || c.key === "k"))
      ) {
        (Ve(""), w.setGroupPristine(!1));
        return;
      }
      switch (c.name) {
        case "return":
        case "escape":
        case "up":
        case "down":
        case "tab":
          break;
        case "left":
        case "right":
        case "home":
        case "end":
        case "pageup":
        case "pagedown":
        case "insert":
        case "wheelup":
        case "wheeldown":
          w.setGroupPristine(!1);
          return;
        default:
          if (c.name.startsWith("f") && /^f\d+$/.test(c.name)) return;
          if (!c.ctrl && !c.meta) {
            (Ve(""), w.setGroupPristine(!1), zt(c));
            return;
          }
          return;
      }
    }
    if (ve.kind === "rename") {
      if (c.key === "up" || c.key === "down") return;
      zt(c);
      return;
    }
    let fe = je,
      Ae = Ye().trim(),
      Be = Ae === "" || Ae === ve.cur,
      et = w.getSnapshot().groupPickIdx;
    if (c.name === "down") {
      if (fe.length > 0 && !Be)
        w.setGroupPickIdx(Math.min(et + 1, fe.length - 1));
      return;
    }
    if (c.name === "up") {
      w.setGroupPickIdx(Math.max(et - 1, -1));
      return;
    }
    if (c.name === "left" && et >= 0) {
      w.setGroupPickIdx(-1);
      return;
    }
    if (c.name === "tab") {
      if (Be) return;
      let ae = fe[Math.max(et, 0)];
      if (ae !== void 0) (Ve(ae), w.setGroupPickIdx(-1));
      return;
    }
    if (c.name !== "return") w.setGroupPickIdx(-1);
    zt(c);
    return;
  }
  let mo = w.getSnapshot().resumePicker;
  if (mo !== null) {
    if ((Qe(), (c.ctrl && c.key === "c") || c.name === "escape" || c.meta)) {
      w.closeResumePicker();
      return;
    }
    let fe = mo.entries,
      Ae = fe?.length ?? 0,
      Be = w.getSnapshot().resumePickerIdx;
    if (c.name === "down" || (c.ctrl && c.key === "n")) {
      w.setResumePickerIdx(Math.min(Be + 1, Math.max(0, Ae - 1)));
      return;
    }
    if (c.name === "up" || (c.ctrl && c.key === "p")) {
      w.setResumePickerIdx(Math.max(Be - 1, 0));
      return;
    }
    if (c.name === "return") {
      let et = fe?.[Be];
      if (et !== void 0) {
        let ae =
          b.isDeleting(et.sessionId.slice(0, 8)) ||
          b.isDeletingSession(et.sessionId);
        if (se.has(et.sessionId) || ae) {
          (logFeatureSad(
            "fleet_view_resume_picker",
            ae ? "deleting_in_flight" : "already_in_list",
          ),
            w.refuseResumePick(Date.now()),
            st(
              ae
                ? "This session is being deleted \u2014 reopen /resume once it finishes"
                : "This session is already in the list \u2014 press enter on its row",
            ));
          return;
        }
        ((w.resumePromoteSessionId = et.sessionId),
          w.closeResumePicker(),
          de(et, "resume_picker"));
      }
      return;
    }
    return;
  }
  if (w.resumePickerRefusedAt !== 0) {
    let fe = Date.now() - w.resumePickerRefusedAt;
    if (fe >= 0 && fe < Gy && c.name === "return") {
      Qe();
      return;
    }
    w.clearResumePickerRefusal();
  }
  let no = w.resumePromoteSessionId;
  if (no !== null && nt === null && v.isPromoting(no)) {
    if ((Qe(), (c.ctrl && c.key === "c") || c.name === "escape"))
      w.resumePromoteSessionId = null;
    return;
  }
  if (((w.resumePromoteSessionId = null), v.getSnapshot().newSessionOpening)) {
    if ((Qe(), (c.ctrl && c.key === "c") || c.key === "escape"))
      v.abandonNewSession();
    return;
  }
  if (nt !== null) {
    if ((Qe(), (c.ctrl && c.key === "c") || c.key === "escape")) {
      v.abandonRespawnAttempt();
      let fe = v.disarm();
      if (fe !== null) releaseAttachBeacon(fe, R).catch(() => {});
      v.dropWarming(nt);
      return;
    }
    if (
      !c.shift &&
      (c.key === "up" ||
        c.key === "down" ||
        (c.ctrl && (c.key === "p" || c.key === "n")))
    ) {
      if (
        J.length > 0 ||
        ((c.key === "up" || c.key === "down") &&
          !We &&
          m.getSnapshot().query.includes(`
`)) ||
        su(s, Ce, c.key === "down" || c.key === "n" ? 1 : -1) === Ce
      )
        return;
      v.abandonRespawnAttempt();
      let fe = v.disarm();
      if (fe !== null) releaseAttachBeacon(fe, R).catch(() => {});
    } else return;
  }
  if (c.ctrl && c.key === "c") {
    if ((Qe(), yt || qe)) {
      (w.setHelpOpen(!1), w.setDebugOpen(!1));
      return;
    }
    if (m.getSnapshot().query) Wt("");
    if (m.getSnapshot().mode === "bash") Jt("prompt");
    lt();
    return;
  }
  if (c.key === "escape") {
    if ((Qe(), We)) w.setPreviewOpen(!1);
    else if (yt) w.setHelpOpen(!1);
    else if (qe) w.setDebugOpen(!1);
    else if (tt) Gt(!1);
    else if (
      I !== void 0 &&
      q &&
      (I !== "NORMAL" || m.getSnapshot().query !== "")
    ) {
      if (ge.pending) ge.dismiss();
      A(c);
    } else if (m.getSnapshot().query) Wt("");
    else if (m.getSnapshot().mode === "bash") Jt("prompt");
    else if (ge.pending) ge.dismiss();
    else
      switch (
        mg({
          originJobId: Ut,
          originRowPresent:
            Ut !== void 0 && (ye?.some((Ae) => Ae.id === Ut) ?? !1),
          originSpawn: He,
        }).kind
      ) {
        case "attach-origin":
          Ie(ye?.find((Ae) => Ae.id === Ut));
          break;
        case "wait-starting":
          st(Cr);
          break;
        case "exit-with-hint":
          if (He) He.resumeHintRequested = !0;
          W();
          break;
        case "exit":
          W();
          break;
      }
    return;
  }
  if (
    yt &&
    c.key !== "?" &&
    c.key !== "up" &&
    c.key !== "down" &&
    !(c.ctrl && (c.key === "p" || c.key === "n"))
  )
    w.setHelpOpen(!1);
  if (
    c.shift &&
    (c.key === "up" || c.key === "down") &&
    J.length === 0 &&
    !We
  ) {
    (Qe(), Wy(s, c.key === "up" ? -1 : 1));
    return;
  }
  let Ft = md(normalizeKeyEvent(c), ot);
  if (Ft === "agents:switchView") {
    if ((Qe(), Ue)) return;
    ((k.followId = X?.id ?? null), (k.followOrigin = null), ge.disarm());
    let fe = ze ? ["state", "directory", "group"] : ["state", "directory"],
      Ae = fe.indexOf(w.getSnapshot().groupMode),
      Be = fe[(Ae + 1) % fe.length];
    if (Be === "group") logFeatureOk("fleet_view_group_mode");
    (w.setGroupMode(Be),
      saveGlobalConfig(
        (et) =>
          et.fleetViewGroupMode === Be ? et : { ...et, fleetViewGroupMode: Be },
        R,
      ));
    return;
  }
  if (Ft === "chat:externalEditor" && !We && !Ue) {
    Qe();
    let fe = editTextInExternalEditor(m.getSnapshot().query);
    if (fe.content !== null && fe.content !== m.getSnapshot().query)
      Wt(fe.content);
    if (fe.error) st(fe.error);
    return;
  }
  if (Ft === "agents:togglePin") {
    Qe();
    let fe = ke[k.getSnapshot().focusedIdx],
      Ae = fe?.kind === "job" ? fe.job : void 0;
    if (!Ae || $e.some((It) => It.id === Ae.id)) return;
    if (Ae.state.backend !== "daemon") {
      (st(
        Ae.state.backend === "remote"
          ? "Can't pin a cloud session"
          : "Can't pin a session that's running in another terminal",
      ),
        logFeatureOk("fleet_view_pin_toggle"));
      return;
    }
    let Be = Ae.id,
      ae = !(
        b.jobs?.find((It) => It.id === Be)?.state.pinned ?? Ae.state.pinned
      );
    if (((k.followId = Be), ae)) k.uncollapse(mt("pinned"));
    (b.bumpGen(),
      b.updateJobs(
        (It) =>
          It?.map((Zt) =>
            Zt.id === Be ? { ...Zt, state: { ...Zt.state, pinned: ae } } : Zt,
          ) ?? It,
      ));
    let gt = b.holdJob(Be);
    writeJobPinned(Be, ae, R)
      .then(() => {
        logFeatureOk("fleet_view_pin_toggle");
      })
      .catch((It) => {
        (logError(It),
          st(`Couldn't ${ae ? "pin" : "unpin"} \u2014 ${l(It)}`),
          logFeatureBad("fleet_view_pin_toggle", "pin_write_failed"),
          b.reload());
      })
      .finally(gt);
    return;
  }
  if (c.ctrl && c.key === "r") {
    if (
      (Qe(),
      le &&
        oe?.kind === "header" &&
        oe.group !== UNGROUPED &&
        oe.group !== "pinned" &&
        oe.group !== EARLIER)
    ) {
      (Ve(oe.group),
        St(),
        w.openGroupEdit({ kind: "rename", from: oe.group }, !0));
      return;
    }
    if (!X || $e.some((fe) => fe.id === X.id)) return;
    if (X.state.backend !== "daemon" && !X.state.sock) return;
    (Je(normalizeWhitespace(X.state.name ?? "")),
      St(),
      w.startRename(
        X.id,
        X.state.backend !== "daemon" ? (X.state.sock ?? null) : null,
      ));
    return;
  }
  if (ze && c.ctrl && c.key === "e" && !We && m.getSnapshot().query === "") {
    if (!X || $e.some((fe) => fe.id === X.id) || X.state.backend !== "daemon") {
      (Qe(),
        st(
          !X
            ? oe?.kind === "header"
              ? "ctrl+e groups a session \u2014 focus a session row (ctrl+r renames this group)"
              : null
            : X.state.backend !== "daemon"
              ? "Only local sessions can be grouped"
              : "Session is still starting \u2014 try again in a moment",
        ));
      return;
    }
    (Qe(),
      Ve(X.state.group ?? ""),
      St(),
      w.openGroupEdit(
        { kind: "assign", jobId: X.id, cur: X.state.group },
        !!X.state.group,
      ));
    return;
  }
  if (c.key === "up" || (c.ctrl && c.key === "p")) {
    if ((Qe(), J.length > 0)) {
      (Xt(null), at((Ae) => Math.max(0, Ae - 1)));
      return;
    }
    if (
      c.key === "up" &&
      !We &&
      m.getSnapshot().query.includes(`
`)
    ) {
      A(c);
      return;
    }
    st(null);
    let fe = su(s, k.getSnapshot().focusedIdx, -1);
    k.navigateTo(fe, ke[fe]);
    return;
  }
  if (
    (c.key === "home" ||
      c.key === "end" ||
      c.key === "pageup" ||
      c.key === "pagedown") &&
    J.length === 0 &&
    !Fe
  ) {
    (Qe(), st(null));
    let fe = Math.max(1, bt - 6),
      Ae = ke.length;
    if (Ae === 0) {
      (k.setHoverFocusIdx(null), k.focus(0));
      return;
    }
    let Be = k.getSnapshot().focusedIdx,
      et =
        c.key === "home"
          ? 0
          : c.key === "end"
            ? Ae - 1
            : c.key === "pageup"
              ? Be - fe
              : Be + fe,
      ae = Math.max(0, Math.min(Ae - 1, et));
    k.navigateTo(ae, ke[ae]);
    return;
  }
  if (c.key === "down" || (c.ctrl && c.key === "n")) {
    if ((Qe(), J.length > 0)) {
      (Xt(null), at((Ae) => Math.min(J.length - 1, Ae + 1)));
      return;
    }
    if (
      c.key === "down" &&
      !We &&
      m.getSnapshot().query.includes(`
`)
    ) {
      A(c);
      return;
    }
    st(null);
    let fe = su(s, k.getSnapshot().focusedIdx, 1);
    k.navigateTo(fe, ke[fe]);
    return;
  }
  if (We && c.ctrl && c.key === "x") {
    if ((Qe(), X && $e.some((Be) => Be.id === X.id))) return;
    let fe = ke[k.getSnapshot().focusedIdx],
      Ae = fe?.kind === "job" ? fe.job : void 0;
    if (ge.pending !== null && Ae !== void 0 && ge.pending.id !== Ae.id)
      ge.disarm();
    iu(s, "x", Ae);
    return;
  }
  if (We) return;
  if (c.key === "tab") {
    if ((Qe(), Ue)) return;
    if (
      !m.getSnapshot().query &&
      m.getSnapshot().mode === "prompt" &&
      K.length > 0
    )
      Gt((fe) => !fe);
    else if (J.length > 0) ne(j());
    return;
  }
  if (
    c.key === "right" &&
    !c.shift &&
    !m.getSnapshot().query &&
    m.getSnapshot().mode === "prompt" &&
    !We
  ) {
    if ((Qe(), oe?.kind === "earlier")) de(oe.entry, "section");
    else if (oe?.kind === "newsession") ce(oe.origin);
    else Ie(X);
    return;
  }
  if ((c.meta || c.superKey) && c.key >= "1" && c.key <= "9") {
    Qe();
    let fe = Number(c.key),
      Ae = ke.find((Be) => Be.kind === "job" && Be.origin === be && --fe === 0);
    if (Ae?.kind === "job") Ie(Ae.job);
    return;
  }
  if (c.name === "return") {
    Uc(s.submit, c);
    return;
  }
  if (c.ctrl && c.key === "x") {
    if ((Qe(), J.length > 0)) return;
    if (!Fe && le && oe?.kind === "header") {
      if (oe.group === "pinned" || oe.group === UNGROUPED || oe.group === EARLIER) {
        st(
          `${oe.group === "pinned" ? "Pinned" : oe.group === UNGROUPED ? "Ungrouped" : "Past"} is reserved \u2014 can't ungroup`,
        );
        return;
      }
      if (
        ((k.followOrigin = oe.group),
        (k.followId = null),
        ge.pending?.id !== Lt(oe.group))
      ) {
        ge.arm(Lt(oe.group));
        return;
      }
      (ge.disarm(), Uy(s, oe.group));
      return;
    }
    if (!Fe && oe?.kind === "header" && pe.length > 0) {
      if (
        ((k.followOrigin = oe.group),
        (k.followId = null),
        ge.pending?.id !== Lt(oe.group))
      ) {
        ge.arm(Lt(oe.group));
        return;
      }
      ge.disarm();
      for (let Be of pe) {
        if ($e.some((et) => et.id === Be.id)) continue;
        iu(s, "x", Be, !0);
      }
      return;
    }
    if (X && $e.some((Be) => Be.id === X.id)) return;
    let fe = ke[k.getSnapshot().focusedIdx],
      Ae = fe?.kind === "job" ? fe.job : void 0;
    if (ge.pending !== null && Ae !== void 0 && ge.pending.id !== Ae.id)
      ge.disarm();
    iu(s, "x", Ae);
    return;
  }
  if (
    (c.ctrl && c.key,
    c.key === "?" &&
      m.getSnapshot().query === "" &&
      m.getSnapshot().mode === "prompt")
  ) {
    Qe();
    let fe = w.getSnapshot().helpOpen;
    if (!fe) St();
    (w.setHelpOpen(!fe),
      logEvent("tengu_bg_agent_action", { action: S("help_toggled") }));
    return;
  }
  if (Xi(c) && !Ue) {
    (Qe(),
      Zi(
        (fe) =>
          jt(fe.base64, { mediaType: fe.mediaType, dimensions: fe.dimensions }),
        Qt,
      ));
    return;
  }
  if (
    isAgentViewBashModeEnabled() &&
    !Ue &&
    isBashModeShortcut(c.key) &&
    !m.getSnapshot().query &&
    m.getSnapshot().mode === "prompt"
  ) {
    (Qe(), Jt("bash"));
    return;
  }
  if (
    c.name === "backspace" &&
    !m.getSnapshot().query &&
    m.getSnapshot().mode === "bash"
  ) {
    (Qe(), Jt("prompt"));
    return;
  }
  if (Ue && !We && xe === null) {
    if (c.key === "q" && !c.ctrl && !c.meta) (Qe(), lt());
    if (c.key === "l" && !c.ctrl && !c.meta && !Ht)
      (Qe(), O({ type: "login" }));
    return;
  }
  A(c);
}
var Us = 3600000,
  yg = 21600000,
  au = "CLAUDE_AGENTS_AUTO_RELAUNCHED_AT";
function Sg(s, { cwdFilter: c, onError: m }) {
  (logEvent("tengu_bg_agent_action", { action: fromEnum(`fleetview_update_${s}`) }),
    resolveLauncher()
      .then((b) => {
        if (s === "auto" && Date.now() - Nm() < Us) return;
        return relaunchClaudeCode({
          launcher: b,
          args: ["agents", ...(c ? ["--cwd", c] : []), ...getDispatchExtraArgs()],
          env: {
            [AGENT_VIEW_RELAUNCH_ENV_KEY]: "1",
            ...(s === "auto" && { [au]: String(Date.now()) }),
            ...getScreenReaderEnvOverrides(),
          },
          preSpawn: () =>
            process.stdout.write(
              chalk.dim(`
Switching from ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION} to latest\u2026

`),
            ),
        });
      })
      .catch((b) => {
        if ((logError(b), s === "manual"))
          m(`Couldn't switch to the latest build \u2014 ${l(b)}`);
      }));
}
var lu = {},
  du = {};
class kg {
  #n = Le();
  #e = {
    templates: new Map(),
    skills: new Map(),
    routines: new Map(),
    childRepos: new Map(),
    repoWorktrees: new Map(),
  };
  getSnapshot = () => this.#e;
  subscribe = (s) => this.#n.subscribe(s);
  #a(s) {
    ((this.#e = { ...this.#e, ...s }), this.#n.emit());
  }
  loadLauncher(s) {
    if (!this.#e.childRepos.has(s))
      findChildRepos(s).then((c) => {
        if (this.#e.childRepos.has(s)) return;
        this.#a({
          childRepos: new Map(this.#e.childRepos).set(
            s,
            Object.keys(c).length > 0 ? c : lu,
          ),
        });
      });
    if (!this.#e.repoWorktrees.has(s))
      listRepoWorktrees(s)
        .then((c) => {
          if (c === null || this.#e.repoWorktrees.has(s)) return;
          this.#a({
            repoWorktrees: new Map(this.#e.repoWorktrees).set(
              s,
              Object.keys(c).length > 0 ? c : du,
            ),
          });
        })
        .catch(() => {});
  }
  loadTarget(s, c) {
    let m = !1;
    if (!this.#e.templates.has(s))
      listCustomAgents(s, c)
        .catch(() => [])
        .then((b) => {
          if (!m && !this.#e.templates.has(s))
            this.#a({ templates: new Map(this.#e.templates).set(s, b) });
        });
    if (!this.#e.skills.has(s))
      getCommands(s, c)
        .catch(() => [])
        .then((b) => {
          if (m || this.#e.skills.has(s)) return;
          let k = b
            .filter((w) => !w.isHidden && !isSkillOff(w))
            .map((w) => ({
              kind:
                w.type !== "prompt"
                  ? "command"
                  : w.kind === "workflow"
                    ? "workflow"
                    : "skill",
              name: w.name,
              aliases: w.aliases,
              description: firstLine(w.description ?? ""),
            }));
          this.#a({ skills: new Map(this.#e.skills).set(s, k) });
        });
    return () => {
      m = !0;
    };
  }
}
function vg(s) {
  return (s.scope ??= new kg());
}
F();
var Ky = 120,
  Rg = "idle-seed";
function $y(s, c) {
  let m = new Map(),
    b = [],
    k = [];
  for (let w of c) {
    let v = s.get(w.id),
      R = w.band === "blocked" && w.needs === IDLE_NEEDS;
    if (
      (m.set(w.id, R ? (v ?? Rg) : w.band), v === void 0 || v === w.band || R)
    )
      continue;
    switch (w.band) {
      case "blocked":
        (b.push({
          message: w.needs
            ? `${w.label} needs your input: ${clipWithEllipsis(w.needs, Ky)}`
            : `${w.label} needs your input`,
          notificationType: "agent_needs_input",
        }),
          k.push({ sessionId: w.sessionId, kind: "needs_input" }));
        break;
      case "completed":
        if (
          w.outcome !== "stopped" &&
          !w.selfDriving &&
          !(v === Rg && w.outcome === "success")
        )
          (b.push({
            message: `${w.label} ${w.outcome === "failure" ? "failed" : "finished"}`,
            notificationType: "agent_completed",
          }),
            k.push({ sessionId: w.sessionId, kind: "completed" }));
        break;
      case "active":
        break;
    }
  }
  return { next: m, notifications: b, notified: k };
}
function _g(s, c) {
  let m = qA(),
    { storageV5: b, credentials: k } = useStorageV5Context(),
    w = C(new Map());
  E(() => {
    let { next: v, notifications: R, notified: O } = $y(w.current, s);
    w.current = v;
    for (let A of R) showNotification(A, m, { storageV5: b, credentials: k });
    let W = Date.now();
    for (let A of O)
      if (Zu(c, A.sessionId, A.kind, W))
        logEvent("tengu_bg_agent_notification", {
          kind: fromEnum(A.kind),
          jobSessionId: sanitizeAnalyticsId(A.sessionId),
        });
  });
}
var qy = [];
function Cg({
  onAction: s,
  initialJobId: c,
  originJobId: m,
  originSpawn: b,
  cwdFilter: k,
  dispatchDefaults: w,
  canGoBack: v,
  autoOpenJobId: R,
  awayLoop: O,
  host: W,
  storageV5: A,
}) {
  let I = useClock(),
    { stdin: q, isRawModeSupported: K } = useStdin(),
    { credentials: J } = useStorageV5Context(),
    j = useKeybindingContext()?.bindings,
    ne = a.CLAUDE_CODE_FLEETVIEW_SIMPLE || getFeatureValue_CACHED_MAY_BE_STALE("tengu_fleetview_simple", !1),
    se = !ne || !!c?.startsWith("remote-");
  useTimeout(
    () => {
      if (!K) return;
      let T = q.listenerCount("readable");
      if (T > 1) logEvent("tengu_fleetview_stdin_contention", { listeners: T });
    },
    1500,
    [],
  );
  let [oe] = d(() => O ?? Ei()),
    [X] = d(() => W ?? createFleetViewHost()),
    [de] = d(() => _r(X, A)),
    {
      jobs: ce,
      adoptedPeers: Ie,
      remoteJobs: ge,
      remoteListLoaded: ke,
      pendings: Ce,
      prStatuses: be,
      loopKicks: le,
      overlaidLoadLanded: Fe,
    } = useStoreSelector(de),
    [pe] = d(() => Wi(X, de, A)),
    {
      focusedIdx: je,
      hoverFocusIdx: We,
      collapsed: yt,
      capExpanded: qe,
    } = useStoreSelector(pe),
    ve = !1,
    [xe] = d(() => fg(X, ve)),
    {
      groupMode: nt,
      activeTab: tt,
      groupEdit: ye,
      resumePicker: $e,
      renaming: ot,
      previewOpen: Ue,
      helpOpen: ze,
      debugOpen: Ht,
    } = useStoreSelector(xe),
    [bt] = d(() => Ki(X)),
    { attachingJobId: xt, autoOpened: Ut } = useStoreSelector(bt),
    [He] = d(() => ji(X)),
    { mode: Tt, expandHintPasteId: zt } = useStoreSelector(He),
    [Wt] = d(() => ug(X, { onArm: () => Ar(bt, He) })),
    { pending: Je } = useStoreSelector(Wt);
  useTimeout(() => Wt.disarm(), Je ? 2000 : null, [Je]);
  let [Ve] = d(() => ({
      roster: de,
      selection: pe,
      view: xe,
      attach: bt,
      editor: He,
      deleteConfirm: Wt,
      earlier: X.earlier,
    })),
    { setError: Ye, setHint: lt } = He,
    dt = ot?.jobId ?? null,
    Dt = se ? ge : qy;
  (E(() => {
    de.setRemoteWanted(se);
  }, [de, se]),
    E(() => de.attachView(I), [de, I]));
  let ut = getCwd(),
    Lt = Ui({ cwd: ut }),
    [mt, Gt] = d(ut);
  E(() => {
    let T = !1;
    return (
      canonicalizePath(ut, createHoverRestOptions(A)).then((Oe) => {
        if (!T && Oe !== ut) Gt(Oe);
      }),
      () => {
        T = !0;
      }
    );
  }, [ut, A]);
  let at = k && !jobMatchesCwd({ cwd: mt }, k) ? k : mt,
    [Xt, jt] = d(ut),
    [Jt] = d(() => vg(X)),
    {
      templates: st,
      skills: Qt,
      routines: St,
      childRepos: Qe,
      repoWorktrees: mo,
    } = useStoreSelector(Jt);
  E(() => {
    Jt.loadLauncher(ut);
  }, [Jt, ut]);
  let no = Qe.get(ut) ?? lu,
    Ft = mo.get(ut) ?? du,
    fe = dedupe([...(ce ?? []), ...Ie].map((T) => spawnOrigin(T.state)))
      .sort()
      .join("\x00"),
    { allRepos: Ae, worktreeBranches: Be } = V(() => {
      let T = { ...no };
      for (let De of fe ? fe.split("\x00") : []) {
        let Kt = jy(De);
        if (Kt && !/\s/.test(Kt) && T[Kt] === void 0) T[Kt] = De;
      }
      let Oe = {};
      for (let [De, Kt] of Object.entries(Ft)) {
        if (T[De] === void 0) T[De] = Kt.path;
        if (T[De] === Kt.path) Oe[De] = Kt.branch;
      }
      return { allRepos: T, worktreeBranches: Oe };
    }, [no, fe, Ft]),
    et = () => s({ type: "done" }),
    ae = useDoublePressConfirm((T) => {
      if (T) bu();
      xe.setExitPending(T);
    }, et),
    gt = () => {
      (xe.clearRename(), wu(""));
    },
    It = (T, Oe) => Ko(Oe ?? xe.getSnapshot().groupMode, T),
    Zt = (T) => `header:${xe.getSnapshot().groupMode}:${T}`,
    Re = useStoreSelector(X.earlier, (T) => T.entries);
  E(() => {
    if (k || !qi()) {
      if (!k) X.earlier.clear();
      return;
    }
    let T = !1,
      Oe = X.earlier.beginLoad();
    return (
      zi(new Set(), !1, A)
        .finally(() => {
          X.earlier.endLoad(Oe);
        })
        .then((De) => {
          if (De === null) logFeatureBad("fleet_view_earlier_load", "load_failed");
          else logFeatureOk("fleet_view_earlier_load");
          if (
            !T &&
            (De === null || De.length === 0) &&
            !c &&
            pe.restoreAttempts === 1
          )
            pe.restoreAttempts = 2;
          if (De === null) return;
          if ((X.earlier.setEntries(De), !T && De.length > 0))
            logEvent("tengu_fleetview_earlier_loaded", { count: De.length });
        }),
      () => {
        T = !0;
      }
    );
  }, []);
  let kt = (T) =>
      pe.toggleCollapsed(
        It(T),
        xe.getSnapshot().groupMode === "state" ? T : null,
      ),
    Ke = useTerminalFocus();
  E(() => {
    if (Ke) de.resetPrFetchGate();
  }, [de, Ke]);
  let oo = useAppStateSelector((T) => T.autoUpdaterResult?.status === "success"),
    { columns: Bo, rows: me } = useTerminalSize(),
    [ht] = d(() => Date.now()),
    Ct = C(null),
    $t = C(null);
  useFocusTrap($t, ce !== null && !Ue);
  let Vt = useVoiceAvailable(),
    Ne = useAppStateSelector((T) => T.settings.voice?.mode ?? "hold"),
    No = useVoiceGetState(),
    wi = () => {
      let T = pe.focusedRow(),
        Oe = T?.kind === "job" ? T.job : void 0;
      if (!Oe) return;
      hr(!1);
      let De = xe.getSnapshot().previewOpen;
      if (!De) ((pe.followId = Oe.id), bu());
      xe.setPreviewOpen(!De);
    },
    Mt = !ne && !Ue && dt === null && ye === null && xt === null && $e === null,
    {
      query: Bt,
      queryRef: Ho,
      setQuery: yi,
      willInsertNewline: Ws,
      setCursorOffset: Si,
      handleKeyDown: pn,
      handlePaste: fu,
      vimMode: Eg,
    } = useVimModeInput({
      buffer: He,
      isActive: Mt,
      multiline: !0,
      honorEditorMode: !0,
      onExit: () => {},
      onCancel: ce === null ? ae : void 0,
      onSpaceOnEmpty: () => {
        if (He.getSnapshot().mode === "bash") return;
        if (Vt && Ne !== "tap")
          xe.schedulePeekTap(
            (T) => I.setTimeout(T, Bd),
            () => {
              let T = No();
              if (T.voiceState !== "idle" || T.voiceWarmingUp) return;
              if (Ho.current.trim() !== "") return;
              wi();
            },
          );
        else wi();
      },
    });
  bp((T) => {
    let { query: Oe, cursorOffset: De } = He.getSnapshot();
    He.insertText(formatAtMention(T, Oe[De - 1]));
  });
  let mu = $i(() => He.pastes, fu, { onMinted: He.noteMintedPaste });
  (E(() => {
    He.pruneOrphanedPastes();
  }, [He, Bt]),
    useTimeout(() => He.setExpandHintPasteId(null), zt === null ? null : 8000, [zt]));
  let [gu] = d(() => ({
      get value() {
        return He.getSnapshot().query;
      },
      get cursorOffset() {
        return He.getSnapshot().cursorOffset;
      },
      setValueWithCursor: (T, Oe) => He.setQueryAndCursor(T, Oe),
    })),
    mr = useVoiceComposer({ composer: gu, isActive: Mt }),
    Ks = useVoiceSelector((T) => T.voiceState);
  E(() => {
    if (Ks !== "idle") xe.cancelPeekTap();
  }, [xe, Ks]);
  let { handleKeyDown: xg } = useVoiceKeybindings({
      voiceHandleKeyEvent: mr.handleKeyEvent,
      voiceCancelRecording: mr.cancelRecording,
      stripTrailing: mr.stripTrailing,
      resetAnchor: mr.resetAnchor,
      isActive: (Ne !== "tap" || Bt.trim().length > 0) && Tt !== "bash" && Mt,
      composer: gu,
    }),
    Ig = useAppStateSelector((T) => shouldReduceMotion(T.settings.prefersReducedMotion)),
    Pg = Ks === "recording" && !Ig;
  (nu({
    editor: He,
    selection: pe,
    query: Bt,
    dispatchMode: Tt,
    collapsed: yt,
    canonicalLauncherCwd: mt,
    storageV5: A,
  }),
    useAttachFleetOwners(Ve, { clock: I, groupsEnabled: ve }));
  let bu = () => Ar(bt, He),
    $s = V(Bc, []),
    {
      query: Ag,
      queryRef: Tg,
      setQuery: wu,
      cursorOffset: Dg,
      handleKeyDown: Fg,
      handlePaste: Mg,
    } = useVimModeInput({
      isActive: dt !== null,
      honorEditorMode: !0,
      backspaceExitsOnEmpty: !1,
      onExit: () => hg(ua()),
      onCancel: gt,
    }),
    yu = () => {
      (xe.closeGroupEdit(), js(""));
    },
    {
      query: gr,
      queryRef: Lg,
      setQuery: js,
      cursorOffset: Jg,
      handleKeyDown: Bg,
      handlePaste: Ng,
    } = useVimModeInput({
      isActive: ye !== null,
      backspaceExitsOnEmpty: !1,
      onExit: () => bg(ua()),
      onCancel: yu,
    }),
    ki = V(() => {
      let T = new Set();
      for (let Oe of ce ?? []) if (Oe.state.group) T.add(Oe.state.group);
      return T;
    }, [ce]),
    fn = V(() => {
      if (!ye) return [];
      let T = new Set();
      if (ye.kind === "assign") {
        let De = ce?.find((Kt) => Kt.id === ye.jobId)?.state.group;
        if (De) T.add(De);
      } else T.add(ye.from);
      let Oe = gr.trim();
      return [...ki]
        .filter((De) => !T.has(De) && De.startsWith(Oe))
        .sort((De, Kt) => De.localeCompare(Kt));
    }, [ye, ki, ce, gr]),
    wo = gr.trim(),
    Su = wo !== "" && isReservedGroupName(wo),
    Hg =
      ye !== null &&
      wo !== "" &&
      !Su &&
      !ki.has(wo) &&
      !(ye.kind === "rename" && ye.from === wo),
    Gg = fn.includes(wo),
    Vg = fn.join(`
`);
  E(() => {
    xe.setGroupPickIdx(
      ye?.kind === "assign" && wo !== "" && wo !== ye.cur && fn.length > 0
        ? 0
        : -1,
    );
  }, [Vg, wo]);
  let Ug = ye?.kind === "assign" && wo !== "" && wo !== ye.cur && fn.length > 0,
    qs = st.get(ut) ?? Aa,
    Wg = St.get(ut) ?? Qi,
    Tn = Ia(Bt, Ae, qs, Wg),
    mn = Tn ?? Xt,
    ku = st.get(mn) ?? Aa,
    gn = V(() => Nc(ku, qs), [ku, qs]),
    zs = Qt.get(mn) ?? Qt.get(ut) ?? Qi,
    Yo = St.get(mn) ?? St.get(ut) ?? Qi,
    Qo = ls(Bt, Tt, ce, k),
    Dn = V(
      () => ds(Bt, Tt, Qo, { templates: gn, allRepos: Ae, routines: Yo }),
      [Tt, Qo, Bt, gn, Ae, Yo],
    ),
    vu = re((T) => Sg(T, { cwdFilter: k, onError: Ye }), [k]);
  useInterval(
    () => {
      let T = Number(process.env[au]) || 0;
      if (Date.now() - T < yg) return;
      if (Date.now() - Nm() < Us) return;
      vu("auto");
    },
    oo && !Ke ? Us : null,
  );
  let [vi, hr] = d(!1),
    [Ru, _u] = d(0),
    [Ys, Qs] = d(null);
  (E(() => {
    if (Bt) hr(!1);
  }, [Bt]),
    E(() => {
      _u(0);
    }, [Bt, vi, mn]));
  let [Kg, Cu] = pk((T) => T + 1, 0),
    $g = V(
      () =>
        Hc(Bt, {
          templates: gn,
          routines: Yo,
          repos: Ae,
          worktreeBranches: Be,
          skills: zs,
          models: $s,
          dispatch: Dn,
          showAllAgents: vi,
        }),
      [Bt, gn, Yo, Ae, Be, zs, $s, Dn, vi, Kg],
    ),
    {
      firstWord: Zs,
      isSlashQuery: jg,
      atMatch: qg,
      slashMatch: Yg,
      modelArgMatch: ea,
      templateNames: Qg,
      repoNames: Xg,
      suggestions: Go,
    } = $g,
    Eu = (T) => {
      if ((Qs(null), T.kind === "model" && ea)) {
        yi(`/model ${T.name}`);
        return;
      }
      let Oe = Pa[T.kind];
      yi(qg || Yg ? Lc(Bt, Oe, T.name) : `${Oe}${T.name} `);
    },
    Zg = () =>
      (Ys ? Go.find((T) => `${T.kind}:${T.name}` === Ys) : void 0) ??
      Go[Math.min(Ru, Go.length - 1)],
    eh = V(
      () =>
        hp(
          de.reload,
          (T) => {
            pe.followId = T;
          },
          de.optimistic,
          de.noteDeleteRefusal,
          de.deleteRefusalOf,
          A,
        ),
      [de, pe, A],
    );
  E(() => {
    (logForDebugging("[PERF:bg-remount-end]"), logFeatureOk("screen_fleet_view"));
  }, []);
  let ta = re(
    () =>
      Ac(He, de, {
        jobs: ce,
        pendings: Ce,
        adoptedPeers: Ie,
        remoteJobs: Dt,
        remoteListLoaded: ke,
      }),
    [He, de, ce, Ce, Ie, Dt, ke],
  );
  (E(() => {
    ta();
  }, [ta]),
    useInterval(() => {
      if (He.hasReplyDrafts()) ta();
    }, 15000));
  let xu = (T) => {
      if (T === xe.getSnapshot().activeTab) return;
      if (T === "remote" && !qu()) return;
      if ((xe.setActiveTab(T), Ye(null), T === "remote")) de.loadRemote();
    },
    Iu = (T) => de.liveStatus(T),
    th = isCrossSessionMessagingEnabled() && getFeatureValue_CACHED_MAY_BE_STALE("tengu_fleetview_peers", !1),
    [, oh] = d(0),
    na = Date.now(),
    Pu = V(
      () => new Set((ce ?? []).filter((T) => isLoopJob(T.state)).map((T) => T.id)),
      [ce],
    ),
    nh = (ce ?? []).some((T) => {
      if (!Pu.has(T.id)) return !1;
      let Oe = le.get(T.state.sessionId)?.nextAt;
      return Oe != null && Oe > na && Oe - na < 60000;
    });
  (useInterval(() => oh((T) => T + 1), nh ? 1000 : ce?.length ? 30000 : null),
    E(() => {
      ensureSpareJob(at, !0, w, st.get(at), A);
    }, [at, w, st, A]),
    E(() => {
      if (X.agentLastUsedMigrationDone) return;
      ((X.agentLastUsedMigrationDone = !0),
        Vc(A).then((T) => {
          if (T) Cu();
        }));
    }, [X, A]),
    E(() => Jt.loadTarget(mn, A), [Jt, mn, A]));
  let { addNotification: rh } = useNotificationQueue(),
    Ri = useSelection();
  (useCopyOnSelect(Ri, !0, (T) => rh(buildSelectionCopiedNotification(T))), useSelectionBackgroundColor(Ri));
  let Au = createSelectionKeyDownHandler(Ri, getGlobalConfig().copyOnSelect ?? !0);
  (useSelectionClearKeybinding(Ri),
    dn(() => {
      let T = getInkInstanceRegistry().get(process.stdout);
      if (!T) return;
      return (
        (T.onHyperlinkClick = (Oe) => {
          openHyperlink(Oe);
        }),
        () => {
          T.onHyperlinkClick = void 0;
        }
      );
    }, []));
  let ra = !1,
    Ou = V(() => getAuthTokenSource().hasToken, []),
    Fn = dp({
      jobs: ce,
      adoptedPeers: Ie,
      remoteJobs: Dt,
      pendings: Ce,
      prStatuses: be,
      liveStatus: Iu,
      heldInTerminal: (T) => de.terminalHolderOf(T) !== void 0,
      loopJobIds: Pu,
      loopKicks: le,
      focusedIdx: je,
      hoverFocusIdx: We,
      collapsed: yt,
      capExpanded: qe,
      groupMode: nt,
      activeTab: tt,
      query: Bt,
      mode: Tt,
      dispatch: Dn,
      linkMatchId: Qo,
      dispatchRepoCwd: Tn,
      pendingDelete: Je,
      earlierEntries: Re,
      cwdFilter: k,
      initialJobId: c,
      simpleView: ne,
      simpleWantsRemote: se,
      peersEnabled: th,
      showRemoteTabs: ra,
      launcherCwd: ut,
      launcherGroup: Lt,
      scopedFallbackOrigin: at,
      termRows: me,
      columns: Bo,
      now: na,
    }),
    {
      byState: ia,
      byGroup: ih,
      hasComposedDispatch: sa,
      scopedLocalJobs: sh,
      scopedJobs: ah,
      filtered: Tu,
      groupOf: lh,
      jobSessionIds: Fu,
      doneCap: dh,
      simpleBuilt: uh,
      built: _i,
      rows: ao,
      homeIdx: br,
      onlyOrigin: ch,
      isOnboarding: aa,
      focusedRow: wr,
      focused: Mu,
      focusedOrigin: ph,
      dispatchOrigin: la,
      focusIsFromHover: Lu,
      headerJobs: fh,
      isBashDispatch: Bu,
      queryIsFilter: mh,
    } = Fn,
    yr = (T) => ao.findIndex((Oe) => Oe.kind === "job" && Oe.job.id === T);
  if ((bt.releasePromoted(Fu), ne && xe.firstImpression("simple")))
    logFeatureOk("fleet_view_simple");
  if (_i.doneFoldHidden > 0 && xe.firstImpression("fold"))
    logEvent("tengu_fleetview_fold_shown", {
      done_count: _i.doneCount,
      hidden_count: _i.doneFoldHidden,
      k: uh?.doneCap ?? dh,
      terminal_rows: me,
    });
  E(() => {
    if (ce === null || !Fe) return;
    let T = (De) => tc(De, m) && !de.isHolding(De.id),
      Oe = (De) => lo(De.state) === "completed";
    nc(X.resultSeen, {
      visibleFinished: ao
        .filter((De) => De.kind === "job")
        .map((De) => De.job)
        .filter((De) => T(De) && Oe(De)),
      allFinished: ce.filter((De) => T(De) && Oe(De)),
      allCandidates: ce.filter(T),
    });
  }, [X, de, ao, ce, m, Fe]);
  let gh = V(() => a.CLAUDE_CODE_DISABLE_TERMINAL_TITLE, []);
  (useTerminalTitle(gh ? null : pc(countMatching(ah, (T) => lo(T.state, Iu(T)) === "blocked"))),
    _g(
      sh
        .filter((T) => isLocalDaemonAgent(T.state))
        .map((T) => ({
          id: T.id,
          sessionId: T.state.sessionId,
          band: lo(T.state),
          label: So(T.state, T.id === c),
          needs: T.state.needs,
          outcome: terminalOutcome(T.state.state),
          selfDriving: isSelfDriving(T.state),
        })),
      oe,
    ));
  let hh = pe.followId ?? Mu?.id ?? wr?.group;
  (E(() => {
    if (Wt.pending !== null && Wt.pending.id === pe.followId) return;
    Wt.disarm();
  }, [hh]),
    E(() => {
      if (Lu) return;
      jt((T) => (T === la ? T : la));
    }, [la, Lu]),
    dn(() => {
      pe.syncRows(ao);
    }),
    E(() => {
      if (Ce.length === 0 || !ce) return;
      let T = Ce.filter((De) => ce.some((Kt) => Kt.id === De.id));
      if (T.length === 0) return;
      de.settleLandedPendings(T);
      let Oe = pe.followId;
      if (Oe && T.some((De) => De.id === Oe)) {
        let De = yr(Oe);
        if (De >= 0) pe.focus(De);
      }
    }, [de, pe, Ce, ce]),
    E(() => {
      if (pe.isFirstQueryOfLook()) return;
      if (He.takeProgrammaticChange()) return;
      if ((Ye(null), lt(null), !mh)) {
        if (pe.linkMatchFollow) {
          if (pe.followId === pe.linkMatchFollow)
            ((pe.followId = null), pe.focus(br));
          pe.linkMatchFollow = null;
        }
        return;
      }
      if (((pe.followOrigin = null), Qo)) {
        ((pe.linkMatchFollow = Qo), (pe.followId = Qo));
        let T = yr(Qo);
        if (T >= 0) pe.focus(T);
        return;
      }
      ((pe.linkMatchFollow = null), (pe.followId = null), pe.focus(br));
    }, [Bt]),
    E(() => {
      pe.clampFocus(ao.length);
    }, [pe, ao.length]),
    E(() => {
      if (Qo) {
        pe.savedFocusJobId = null;
        return;
      }
      if (!sa) {
        let Yt = pe.savedFocusJobId;
        if (((pe.savedFocusJobId = null), Yt)) {
          ((pe.followOrigin = null), (pe.followId = Yt));
          let Vo = yr(Yt);
          if (Vo >= 0) pe.focus(Vo);
        }
        return;
      }
      let T = ao[je];
      if (T?.kind === "job" && pe.savedFocusJobId === null)
        pe.savedFocusJobId = T.job.id;
      let Oe = (Yt) => ao.findIndex((Vo) => Vo.kind === "header" && Yt(Vo)),
        De = -1,
        Kt = null;
      if (ia) Kt = "working";
      else if (Tn) {
        if (
          ((De = Oe((Yt) => Yt.origin === Tn && Yt.group !== "pinned")),
          De >= 0)
        )
          Kt = ao[De].group;
      } else if (T?.kind === "job")
        if (T.group === "pinned")
          Kt =
            ao.find(
              (Vo) =>
                Vo.kind === "header" &&
                Vo.origin === T.origin &&
                Vo.group !== "pinned",
            )?.group ?? null;
        else Kt = T.group;
      else if (T?.kind === "header") {
        if (T.group !== "pinned") ((Kt = T.group), (De = je));
      }
      if (De < 0) return;
      if (((pe.followId = null), (pe.followOrigin = Kt), De !== je))
        pe.focus(De);
    }, [sa, ia, Tn]));
  let Nu =
    Ue &&
    (Tu.length === 0 ||
      (wr !== void 0 && wr.kind !== "job") ||
      (wr === void 0 && (pe.followId === null || yr(pe.followId) < 0)));
  (E(() => {
    if (Nu) xe.setPreviewOpen(!1);
  }, [Nu]),
    E(() => {
      if (pe.restoreAttempts >= 2 || ce === null) return;
      let T = !!c?.startsWith("remote-"),
        Oe = T && Dt.some((Yt) => Yt.id === c);
      if (T && !ke && !Oe) return;
      if (!ne && T && tt !== "remote" && Oe) {
        xe.setActiveTab("remote");
        return;
      }
      if (!T && c && ce === pe.restoreCountedJobs) return;
      ((pe.restoreCountedJobs = ce), pe.restoreAttempts++);
      let De = () => {
        pe.focus(br);
        let Yt = ao[br];
        if (Yt?.kind === "job")
          ((pe.followId = Yt.job.id), (pe.followOrigin = null));
        else if (Yt?.kind === "earlier")
          ((pe.followId = null), (pe.followOrigin = null));
        else if (Yt?.kind === "header")
          ((pe.followId = null), (pe.followOrigin = Yt.group));
      };
      if (!c) {
        ((pe.restoreAttempts =
          ao.some((Yt) => Yt.kind === "job" || Yt.kind === "earlier") ||
          !X.earlier.pending
            ? 2
            : 1),
          De());
        return;
      }
      let Kt = yr(c);
      if (Kt >= 0) ((pe.restoreAttempts = 2), pe.focus(Kt), (pe.followId = c));
      else if (pe.restoreAttempts >= 2) De();
    }, [ce, Dt, ke, tt, c, br]));
  let da = {
      editor: He,
      roster: de,
      selection: pe,
      view: xe,
      attach: bt,
      deleteConfirm: Wt,
      storageV5: A,
      onAction: s,
      pendings: Ce,
      mountAt: ht,
      canonicalLauncherCwd: mt,
      cwdFilter: k,
      parseScope: { templates: gn, allRepos: Ae, routines: Yo },
    },
    Hu = (T, Oe) => mp(da, T, Oe),
    Ci = (T) => cs(da, T),
    Uu = (T) => gp(da, T),
    Wu = R !== void 0 && (!Ut || xt !== null);
  E(() => {
    if (bt.getSnapshot().autoOpened || !R || ce === null) return;
    (bt.markAutoOpened(), Ci(ce.find((T) => T.id === R)));
  }, [R, ce]);
  let Ku = ce !== null && !Wu && ch && !Bt && !ne,
    $u = Tu.some((T) => T.id === c);
  E(() => {
    if (!Ku || !xe.firstImpression("empty")) return;
    logEvent("tengu_fleetview_empty_state_shown", { skeleton: aa, has_origin: $u });
  }, [Ku, aa, $u]);
  let ua = () => ({
      submit: {
        editor: He,
        roster: de,
        selection: pe,
        view: xe,
        attach: bt,
        storageV5: A,
        credentials: J,
        onAction: s,
        exit: et,
        relaunchForUpdate: vu,
        searchKeyDown: pn,
        willInsertNewline: Ws,
        vimMode: Eg,
        dispatchInputActive: Mt,
        canonicalLauncherCwd: mt,
        launcherCwd: ut,
        effectiveCwd: Xt,
        scopedFallbackOrigin: at,
        cwdFilter: k,
        dispatchDefaults: w,
        query: Bt,
        dispatch: Dn,
        templates: gn,
        allRepos: Ae,
        routines: Yo,
        templateCache: st,
        suggestions: Go,
        skills: zs,
        modelArgMatch: ea,
        modelSuggestions: $s,
        pickSuggestion: Zg,
        applySuggestion: Eu,
        closeAgentBrowse: () => hr(!1),
        jobSessionIds: Fu,
        builtRows: _i.rows,
        bumpSuggGen: Cu,
        mountAt: ht,
        focusedRow: wr,
        focused: Mu,
        isOnboarding: aa,
        toggleCollapse: kt,
        openEarlier: Hu,
        openNewSessionRow: Uu,
        openOrRespawn: Ci,
      },
      deleteConfirm: Wt,
      actions: eh,
      rows: ao,
      focusedIdx: je,
      focusedOrigin: ph,
      byGroup: ih,
      byState: ia,
      hasComposedDispatch: sa,
      dispatchRepoCwd: Tn,
      headerJobs: fh,
      groupOf: lh,
      groupSuggestions: fn,
      previewOpen: Ue,
      helpOpen: ze,
      debugOpen: Ht,
      groupEdit: ye,
      renamingJobId: dt,
      attachingJobId: xt,
      showAllAgents: vi,
      jobs: ce,
      pendings: Ce,
      keybindings: j ?? expandKeybindingBlocks(DEFAULT_KEYBINDINGS),
      simpleView: ne,
      groupsEnabled: ve,
      hasCredentials: Ou,
      termRows: me,
      canGoBack: v,
      originJobId: m,
      originSpawn: b,
      renameKeyDown: Fg,
      groupKeyDown: Bg,
      setQuery: yi,
      setRenameDraft: wu,
      setGroupDraft: js,
      readRenameDraft: () => Tg.current,
      readGroupDraft: () => Lg.current,
      handleCtrlC: ae,
      switchTab: xu,
      clearRename: gt,
      clearGroupEdit: yu,
      headerArmId: Zt,
      ck: It,
      setShowAllAgents: hr,
      setSelectedSuggestion: _u,
      setHoveredSuggestionId: Qs,
      attachPastedImage: mu,
    }),
    bh = (T) => wg(ua(), T),
    { handleKeyDown: wh, handlePaste: yh } = usePasteHandler({
      handleKeyDown: bh,
      onPaste: (T) =>
        Wc(
          {
            editor: He,
            dispatchInputActive: Mt,
            insertAtCursor: (Oe) => fu(new iee(Oe)),
          },
          T,
        ),
      onImagePaste: mu,
    }),
    ju = (T) => {
      let Oe = xe.getSnapshot();
      if (Oe.resumePicker !== null) return;
      if (dt !== null || Oe.renaming !== null) {
        Mg(T);
        return;
      }
      if (ye !== null) {
        if ((xe.setGroupPickIdx(-1), Oe.groupPristine))
          (js(""), xe.setGroupPristine(!1));
        Ng(T);
        return;
      }
      if (ze) xe.setHelpOpen(!1);
      yh(T);
    };
  if (ce === null || Wu)
    return e(Box, {
      tabIndex: 0,
      autoFocus: !0,
      onKeyDownCapture: Au,
      onKeyDown: (Oe) => {
        if (ne && (Oe.key === "escape" || (Oe.ctrl && Oe.key === "c"))) {
          (Oe.stopImmediatePropagation(), ae());
          return;
        }
        pn(Oe);
      },
      onPaste: ju,
    });
  let kh =
      Go.length > 0
        ? e(Box, {
            paddingLeft: 2,
            marginBottom: 1,
            children: e(SuggestionList, {
              suggestions: Go.map((T) => ({
                id: `${T.kind}:${T.name}`,
                displayText: ea ? T.name : `${Pa[T.kind]}${T.name}`,
                description: `${Jc[T.kind]} \xB7 ${T.description}`,
              })),
              selectedSuggestion: Math.min(Ru, Go.length - 1),
              maxColumnWidth: 35,
              noPad: !0,
              hoveredId: Ys,
              onHoverChange: Qs,
              onSelect: (T) => {
                let Oe = Go[T];
                if (Oe) (Eu(Oe), hr(!1));
              },
            }),
          })
        : null,
    vh = new Set([
      ...Qg,
      ...Yo.map((T) => T.name.toLowerCase()),
      ...Xg.map((T) => T.toLowerCase()),
    ]),
    ca = Bu ? [] : Mc(Bt, vh),
    Rh = Bu
      ? []
      : Dn?.matched && Zs === Dn.template.name.toLowerCase()
        ? [[0, Zs.length], ...ca]
        : jg
          ? [[0, Zs.length], ...ca]
          : [...Fc(Bt), ...ca];
  return r(Box, {
    ref: $t,
    flexDirection: "column",
    flexGrow: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDownCapture: (T) => {
      (Au(T), xg(T));
    },
    onKeyDown: wh,
    onPaste: ju,
    onWheel: (T) => {
      if (Ue) return;
      (T.preventDefault(), Ct.current?.scrollBy(T.deltaY > 0 ? 3 : -3));
    },
    children: [
      e(od, {
        owners: Ve,
        layout: Fn,
        scrollRef: Ct,
        header: e(rl, {
          editor: He,
          layout: Fn,
          simpleView: ne,
          dispatchDefaults: w,
          targetCwd: mn,
          launcherCwd: ut,
          canonicalLauncherCwd: mt,
          originJobId: m,
        }),
        renameInput: { draft: Ag, cursor: Dg },
        groupInput: {
          draft: gr,
          cursor: Jg,
          suggestions: fn,
          reserved: Su,
          isNew: Hg,
          matchesExisting: Gg,
          panelOpen: Ug,
        },
        initialJobId: c,
        cwdFilter: k,
        simpleView: ne,
        hasCredentials: Ou,
        mountAt: ht,
        actions: {
          toggleCollapse: kt,
          openOrRespawn: Ci,
          openEarlier: Hu,
          openNewSessionRow: Uu,
        },
      }),
      e(ou, {
        owners: Ve,
        layout: Fn,
        onCursorOffsetChange: Si,
        highlights: Rh,
        voice: { interimRange: mr.interimRange, showCursor: Pg },
        isTerminalFocused: Ke,
        simpleView: ne,
        showRemoteTabs: ra,
        switchTab: xu,
        remoteJobs: Dt,
        hasGroups: ki.size > 0,
        suggestionList: kh,
      }),
      e(qd, {
        owners: Ve,
        layout: Fn,
        footer: e(fd, {
          owners: Ve,
          layout: Fn,
          simpleView: ne,
          canGoBack: v,
          dispatchDefaults: w,
          groupInput: { draft: gr, suggestions: fn },
          suggestionsOpen: Go.length > 0,
        }),
        simpleView: ne,
        groupsEnabled: ve,
        showRemoteTabs: ra,
        canGoBack: v,
        canMention: gn.length + Yo.length + Object.keys(Ae).length > 0,
        isTerminalFocused: Ke,
        awayLoop: oe,
        storageV5: A,
        onOpen: Ci,
      }),
    ],
  });
}
function seedHostJobs(s, c, m) {
  _r(s, m).seedJobs(c);
}
function remountClearSeq(s, c, m) {
  if (s) return Nat();
  let b = oDt(process.stdout, null).rows;
  if (b !== process.stdout.rows) return "";
  return c && !m ? eraseViewportInPlace(b) : "";
}
async function mountFleetView(s, c) {
  let m = !1;
  function b() {
    m = !0;
  }
  process.stdout.on("resize", b);
  using k = {
    [Symbol.dispose]: () => {
      process.stdout.removeListener("resize", b);
    },
  };
  if (
    ((await import("../../01-核心基础设施/核心工具-未归类/chunk-dypysnt9.js")).registerToolHosts(),
    registerBuiltinPlugins(),
    registerAllBundledSkills(),
    isAgentSwarmsEnabled() && !hasTeammateModeSnapshot())
  )
    captureTeammateModeSnapshot();
  (setDispatchExtraArgs(c?.dispatchExtraArgs ?? []),
    logEvent("tengu_bg_agent_action", {
      action: S("list_open"),
      mode: fromEnum(getGlobalConfig().fleetViewGroupMode ?? "state"),
    }));
  let w = c?.host ?? createFleetViewHost();
  if ((oc(w.resultSeen, c?.entryChannel), !getGlobalConfig().hasOpenedAgentsView))
    await saveGlobalConfig((le) => ({ ...le, hasOpenedAgentsView: !0 }), c?.storageV5);
  let v = [];
  function R() {
    let le;
    while ((le = process.stdin.read()) !== null) {
      if ((typeof le === "string" ? Buffer.from(le, "utf8") : le).includes(3)) {
        process.emit("SIGINT");
        return;
      }
      v.push(le);
    }
  }
  process.stdin.on("readable", R);
  let O = c?.cwdFilter ? await canonicalizePath(resolve(c.cwdFilter), createHoverRestOptions(c?.storageV5)) : void 0,
    W = ec(c?.dispatchDefaults),
    A = isHoverRestEnabled() ? c?.storageV5 : void 0;
  (registerCleanup(A ? () => discardSpareJob(A) : discardSpareJob), registerCleanup(openDaemonLease("claude agents")));
  let I = s,
    q = a.CLAUDE_AGENTS_SELECT,
    K = c?.autoOpenJobId,
    J = K !== void 0 && c?.canGoBack,
    j = q,
    ne = Ei(),
    se = 0,
    oe = (le) => {
      let Fe = {
        ...Xu(le.id, j, se),
        ...xi(ne, le.state.sessionId, Date.now()),
      };
      return (se++, Fe);
    },
    X = c?.originJobId,
    de = c?.originSpawn;
  delete process.env.CLAUDE_AGENTS_SELECT;
  let ce = await readJobDraft(await canonicalizePath(getCwd(), createHoverRestOptions(c?.storageV5)), c?.storageV5),
    Ie = _r(w, c?.storageV5);
  Wi(w, Ie, c?.storageV5, ce?.collapsed);
  let ge = ji(w, { query: ce?.q || void 0 }),
    ke = Ki(w);
  sweepStaleJobDrafts();
  let Ce;
  process.stdin.off("readable", R);
  while (v.length) process.stdin.unshift(v.pop());
  let be;
  if (K !== void 0) {
    if (Ie.jobs === null) Ie.seedJobs(await listJobs(void 0, c?.storageV5));
    let le = Ie.jobs?.find((Fe) => Fe.id === K);
    if (le) {
      let Fe = performance.now(),
        pe = pu();
      (claimAttachBeacon(pe, "fleet", c?.storageV5).catch(() => {}),
        (be = {
          type: "open",
          job: le,
          respawnResult: await wn(
            le.id,
            { knownState: le.state },
            c?.storageV5,
          ),
          gestureT0: Fe,
          gestureId: pe,
        }));
    }
  }
  for (;;) {
    let le =
      be ??
      (await new Promise((xe) => {
        I.render(
          e(FleetViewScreen, {
            killRing: w.killRing,
            children: e(
              AppRoot,
              {
                session: B(),
                storageV5: c?.storageV5,
                initialState: Ce && {
                  ...Ce,
                  notifications: { current: null, queue: [], pinned: [] },
                },
                onChangeAppState: ({ newState: nt }) => {
                  Ce = nt;
                },
                children: e(Cg, {
                  onAction: xe,
                  host: w,
                  initialJobId: q,
                  awayLoop: ne,
                  originJobId: X,
                  originSpawn: de,
                  cwdFilter: O,
                  dispatchDefaults: W,
                  canGoBack: c?.canGoBack,
                  autoOpenJobId: K,
                  storageV5: c?.storageV5,
                }),
              },
              "agents-list",
            ),
          }),
        );
      }));
    be = void 0;
    let Fe = isFullscreenEnabled();
    if (le.type === "back") {
      I.unmount();
      break;
    }
    if (le.type === "open" && le.job.id !== K) J = !1;
    if (((K = void 0), le.type === "login")) {
      let { getLoginStartingMessage: xe, Login: nt } =
          await import("./login-ui.y0z0y3sz.js"),
        tt = await Promise.race([
          new Promise((ye) => {
            showScreen(
              I,
              e(AppRoot, {
                session: B(),
                storageV5: c?.storageV5,
                initialState: Ce && {
                  ...Ce,
                  notifications: { current: null, queue: [], pinned: [] },
                },
                onChangeAppState: ({ newState: $e }) => {
                  Ce = $e;
                },
                children: e(nt, { onDone: ye, startingMessage: xe() }),
              }),
            );
          }),
          I.waitUntilExit().then(() => "exited"),
        ]);
      if (tt === "exited") break;
      if ((showScreen(I, null), process.stdout.isTTY)) process.stdout.write(getEraseScreenSequence());
      if (tt) {
        let { runOrgMemoryAuthBoundary: ye } =
          await import("./login-ui.y0z0y3sz.js");
        if ((ye(), await discardSpareJob(c?.storageV5), getAPIProvider() === "gateway")) {
          I.unmount();
          break;
        }
        ge.setHint("Login successful");
      }
      continue;
    }
    let pe = getInkInstanceRegistry().get(process.stdout);
    if (Fe && le.type === "open") pe?.handoffAltScreen();
    if (getCurrentPlatform() === "windows" && le.type === "open") pe?.handoffRawMode();
    let je = pe?.lastFrameFillsCurrentViewport ?? !1;
    if (!Fe) I.render(null);
    if ((I.unmount(), le.type === "done")) break;
    if (getCurrentPlatform() === "windows" && process.stdin.isTTY)
      (trySetRawMode(process.stdin, !0), process.stdin.ref());
    let We = Fe ? cz(() => void process.stdout.write(uF())) : () => {};
    if (((q = le.job.id), !le.keepQuery)) ge.dropDraft();
    w.agentLastUsedMigrationDone = !0;
    let yt = Date.now(),
      qe;
    if (le.respawnResult === void 0 && le.gestureId === void 0)
      ((qe = pu()), claimAttachBeacon(qe, "fleet", c?.storageV5).catch(() => {}));
    let ve =
      le.respawnResult ??
      (await wn(
        le.job.id,
        le.freshDispatch ? void 0 : { knownState: le.job.state },
        c?.storageV5,
      ));
    if (
      (logForDebugging(
        `[FV-attach] respawnJob ${le.job.id}: ok=${ve.ok} alive=${!ve.ok && ve.alive} err=${ve.ok ? "" : ve.error}`,
      ),
      ve.ok || ve.alive)
    ) {
      (Tr("attach", le.job.state, {
        jobId: sanitizeAnalyticsId(le.job.id),
        attachShort: sanitizeAnalyticsId(ve.short ?? le.job.id),
        ...oe(le.job),
      }),
        process.stdout.write(formatOscSequence(OSC_CODES.SET_TITLE_AND_ICON, So(le.job.state, !0))));
      let xe = Date.now(),
        nt = {
          gestureId: le.gestureId ?? qe ?? pu(),
          attempt: 0,
          t0: le.gestureT0,
          surface: "fleet",
          interactive: {},
        };
      if (le.gestureId === void 0 && qe === void 0)
        claimAttachBeacon(nt.gestureId, "fleet", c?.storageV5).catch(() => {});
      let tt = (ot, Ue) =>
          attachJob(ot, {
            alreadyInAlt: Fe,
            gateStdinUntilFirstFrame: Ue,
            gesture: nt,
            storageV5: c?.storageV5,
          }).catch(
            (ze) => (
              logError(ze),
              logFeatureBad("job_attach", "threw"),
              { kind: "error", msg: `Couldn't attach \u2014 ${l(ze)}` }
            ),
          ),
        ye = await tt(ve.short ?? le.job.id, ve.ok),
        $e = !1;
      if (ye.kind === "error" && ye.orphaned && !isExecLaunch(le.job.state)) {
        let ot = await wn(
          le.job.id,
          { force: !0, knownState: le.job.state },
          c?.storageV5,
        );
        if (ot.ok || ot.alive)
          (($e = !0), (ye = await tt(ot.short ?? le.job.id, ot.ok)));
        else ye = { kind: "error", msg: ot.error };
      }
      if (
        (releaseAttachBeacon(nt.gestureId, c?.storageV5).catch(() => {}),
        ye.kind === "error" && !ye.ended)
      ) {
        if (ye.notResponding)
          if (isExecLaunch(le.job.state)) ge.setError(pp);
          else fp(ke, ge, le.job.id);
        else ge.setError(ye.msg);
        if ($e && ye.orphaned) logFeatureSad("fleet_view_open", "recovered_then_crashed");
        else
          logFeatureBad("fleet_view_open", $e ? "orphan_recovery_failed" : "attach_failed");
      } else {
        if (ye.msg) ge.setError(ye.msg);
        logFeatureOk("fleet_view_open");
      }
      (Tr("detach", le.job.state, { attachDurationMs: Date.now() - xe }),
        logForDebugging(
          `[FV-attach] attachJob returned after ${Date.now() - yt}ms \u2014 remounting list`,
        ));
    } else {
      ge.setError(ve.error);
      let xe = le.gestureId ?? qe;
      if (xe !== void 0) releaseAttachBeacon(xe, c?.storageV5).catch(() => {});
      if (ve.errorCode === "fork_transcript_never_materialized")
        logFeatureSad("fleet_view_open", "fork_transcript_never_materialized");
      else logFeatureBad("fleet_view_open", "respawn_failed");
    }
    if ((HOn(), (I = await createRoot(getBaseRenderOptions(!1))), J)) {
      if (!Fe) process.stdout.write(remountClearSeq(Fe, je, m));
      return ((J = !1), We(), { back: !0, root: I });
    }
    (process.stdout.write(remountClearSeq(Fe, je, m)), logForDebugging("[PERF:bg-remount-start]"), We());
  }
}
export { seedHostJobs, remountClearSeq, mountFleetView };
