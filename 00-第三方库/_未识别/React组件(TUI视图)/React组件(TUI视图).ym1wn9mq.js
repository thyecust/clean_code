// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ie, ku } from "../../lodash/lodash.207999qb.js";
import { j, ze, ke, Ox } from "../../lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { dt } from "../../@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum, fromNumber } from "../../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { b, z, n } from "../../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { capitalize, pluralize, truncateToCodeUnits, beforeFirst, countOccurrences, normalizeWhitespace } from "../../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import {
  COMMAND_MESSAGE_TAG,
  BASH_STDOUT_TAG,
  BASH_STDERR_TAG,
  LOCAL_COMMAND_STDOUT_TAG,
  LOCAL_COMMAND_STDERR_TAG,
  LOCAL_COMMAND_CAVEAT_TAG,
  TICK_TAG,
  TASK_NOTIFICATION_TAG,
  buildArtifactRoomViewNotificationPrefix,
  TEAMMATE_MESSAGE_TAG,
  hashString,
  isEssentialTrafficOnly,
  logError,
} from "../../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { createLazyValue } from "../../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { le, nt, uv } from "../../zod/zod.3g334xwq.js";
import { env as a } from "../../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { _ } from "../../react/react.zhnvc798.js";
import { logEvent } from "../../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import {
  shouldAttachRateLimitHeaders,
  getSessionStateStore,
  getUserSpecifiedModelSetting,
  getMainLoopModel,
  getDefaultSonnetModel,
  planModeConstituentFamily,
  renderModelName,
  renderFableModelName,
  parseUserSpecifiedModel,
  getMarketingNameForModel,
  sanitizeDisplayName as FT,
  COMPUTER_USE_MCP_SERVER_NAME,
  BASH_TOOL_NAME,
  EDIT_TOOL_NAME,
  READ_TOOL_NAME,
  WRITE_TOOL_NAME,
  GLOB_TOOL_NAME,
  GREP_TOOL_NAME,
  NOTEBOOK_EDIT_TOOL_NAME,
  POWERSHELL_TOOL_NAME,
  isBgSession,
  isWorkspaceMcpToolName,
  getSanitizedToolName,
  isClaudeAISubscriber,
  getSubscriptionType,
  getRateLimitTier,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getAutoMemPath,
  isAutoMemPath,
} from "../../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getCwd } from "../../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { isRemoteActive } from "../../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { te, truncateToWidth, truncateToWidthNoEllipsis, truncate, formatSecondsShort, formatDuration, formatNumber, formatTokens, formatResetTime } from "../../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { hasValidPathSegments, STORAGE_KEYS } from "../../../02-功能模块/Teammates团队/storage-keys.js";
import { oL, xt } from "../../jsonc-parser/jsonc-parser.aa158d2j.js";
import { parseMcpToolName } from "../../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { j6, Uet, HQ, Ao, yx, TRt } from "../../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { stripAnsi } from "../../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import {
  CLAUDE_BULLET_GLYPH,
  BULLET_OPERATOR_GLYPH,
  CLAUDE_ASTERISK_GLYPH,
  THEREFORE_GLYPH,
  RETURN_KEY_GLYPH,
  UPDATE_GLYPH,
  FORK_GLYPH,
  LOZENGE_OUTLINE_GLYPH,
  LOZENGE_FILLED_GLYPH,
  REFERENCE_MARK_GLYPH,
  MUSIC_NOTE_GLYPH,
  getPermissionModeColor,
} from "../../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import { SA, M5 } from "../../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { Skn, wkn } from "../../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
import { isKeychainLocked } from "../../../02-功能模块/认证-OAuth登录/secure-storage.js";
import { isGitLabMergeRequestUrl } from "../../../02-功能模块/Git-Worktree/git-repository-detection.js";
import { BRIEF_TOOL_NAME } from "../../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import { iy, gc, _b, hA, JZe } from "../../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { SEND_USER_FILE_TOOL_NAME } from "../../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import { rg } from "../../../02-功能模块/键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import { Vm } from "../../ink/ink + react-reconciler.5rs3h07b.js";
import { KeybindingHint } from "../../../02-功能模块/键位绑定(Keybindings)/keybinding-display.js";
import { qA } from "../Ink终端渲染器/chunk-hm8z9h7j.js";
import { useTheme } from "../../../02-功能模块/状态栏-主题/chunk-w5jaj6kg.js";
import { useStorageV5Context } from "../../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { resolveSetting } from "../../../02-功能模块/上下文压缩-Compact/resolve-user-intent-setting.js";
import { gi, o, t, ct, jr, tn, pd, bs, ko } from "../../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useTerminalFocus, setTimeoutWithCancel, noopSubscribe, ClockContext } from "../../../01-核心基础设施/共享小工具-未细化/clock-and-terminal-focus.js";
import { claimRegistriesByHost } from "../../../01-核心基础设施/共享小工具-未细化/host-claim-registry.js";
import { Tf } from "../第三方库-其他/chunk-gdyh44zt.js";
import { useClock } from "../../../01-核心基础设施/共享小工具-未细化/use-clock.js";
import { ExpandedTranscriptProvider, TranscriptExpandHint, OverflowHint, ToolErrorMessage } from "../../../03-入口与运行时/会话UI(REPL)/tool-result-display.js";
import { DotSeparatedList } from "../../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { Oye } from "./chunk-jjqazdgg.js";
import { ENTER_PLAN_MODE_TOOL_NAME, ASK_USER_QUESTION_TOOL_NAME } from "../../../02-功能模块/工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import {
  isModelFallbackBlock,
  isExcludedMemoryPath,
  isExternalSourceMessage,
  extractTextContent,
  shouldShowUpgradeCommand,
  isAdvisorRefusal,
  getAdvisorRefusalText,
  MAX_AUDIO_TRANSCRIPT_CODE_UNITS,
  formatDurationAsClockTime,
  parseTaskStatusMessage,
  getFindGrepToolNames,
  LIST_MCP_RESOURCES_TOOL_NAME,
  canSelfManageUsageCredits,
  isRefusalFallbackEnabled,
  OPUS_5_SUPPORT_ARTICLE_URL,
  FABLE_SUPPORT_ARTICLE_URL,
  DEFAULT_SUPPORT_ARTICLE_URL,
  GENERAL_PURPOSE_AGENT,
  parseReportWithHarnessNotes,
  getSlashCommandSubmitter,
  LSP_TOOL_NAME,
  READ_MCP_RESOURCE_DIR_TOOL_NAME,
  READ_MCP_RESOURCE_TOOL_NAME,
  REPORT_FINDINGS_TOOL_NAME,
  SEND_FILE_TOOL_NAME,
  SHOW_ONBOARDING_ROLE_PICKER_TOOL_NAME,
  createClassifierApprovalsUpdater,
  getClassifierApproval,
  deleteClassifierApproval,
  isKnownContentBlockType,
  ORG_OVERAGE_DISABLED_REASONS,
  isUsageLimitStatusMessage,
  getRateLimitDisplayInfo,
  VELLUM_ANCHOR_FLAG,
  getCurrentLimits,
  subscribeToLimitStatusChanges,
  isCredentialErrorMessage,
  isAuthenticationErrorMessage,
  PROMPT_TOO_LONG_MESSAGE,
  CREDIT_BALANCE_TOO_LOW_MESSAGE,
  NOT_LOGGED_IN_MESSAGE,
  INVALID_API_KEY_MESSAGE,
  API_KEY_ORG_DISABLED_UNSET_MESSAGE,
  API_KEY_ORG_DISABLED_UPDATE_MESSAGE,
  OAUTH_TOKEN_REVOKED_MESSAGE,
  GATEWAY_AUTH_ERROR_MESSAGE,
  OPUS_HIGH_LOAD_MESSAGE,
  FABLE_HIGH_LOAD_MESSAGE,
  REQUEST_TIMED_OUT_MESSAGE,
  isInterruptedToolResultMessage,
  renderEngineModule,
  isLiveBackgroundTask,
  isAmbientMonitorTask,
  isValidPrUrl,
  getToolCallRemoteHost,
  isReplVerboseEnabled,
  getFrontmatterDescription,
  getMemoryFileDisplayName,
  sanitizeToolInput,
  MAX_THOUGHT_DURATION_MS,
  resolveToolByName,
  getToolUseCollapseState,
  collectToolUseIds,
  formatActivitySummary,
  summarizeRecentActivities,
  isSubagentTask,
  isSupportedServerToolName,
  messageOriginFromStored,
  messageOriginModule,
  isAutoCompactDisabledByUserSetting,
  EXPECTED_ABSENT_TOOL_NAMES,
  WebFetchTool,
  isBuiltInWebFetchAgentType,
  isBuiltInWebFetchAgentToolInput,
  isBuiltInWebFetchAgentProgress,
  getTeamArtifactAuthor,
  getAgentToolUserFacingName,
  getAgentToolUserFacingBackgroundColor,
  getAgentToolInputSchema,
  STOP_HOOK_SUMMARY_MIN_DURATION_MS,
  ReadTool,
  parseDiagnosticsFiles,
  getDiagnosticSeverityGlyph,
  USER_REJECTED_TOOL_USE_MESSAGE,
  USER_REJECTED_TOOL_USE_PREFIX,
  PLAN_REJECTED_MESSAGE,
  isAutoModeClassifierDenial,
  getAutoModeClassifierDenialReason,
  createAssistantMessage,
  extractTagContent,
  EMPTY_TOOL_USE_LOOKUPS,
  collectToolUseLookupsWithInProgress,
  isBlankText,
  getUserMessageText,
  createSystemInfoMessage,
  getPluginDisplayName,
  shouldInjectMemoryFile,
  USAGE_CREDITS_COMMAND,
} from "../../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { stripMemoryTags, parseMemoryDocument, MEMORY_WRITE_TOOL_NAME, getMemoryProjectKey, canUseTeamMemoryStorage, resolveAutoMemPath, isWithinTeamMemoryDir, UYe, REPL_TOOL_NAME } from "../../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { ps } from "../../../02-功能模块/策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { FRONTMATTER_PATTERN, STRICT_FRONTMATTER_PATTERN, parseFrontmatter } from "../../../02-功能模块/MCP客户端/chunk-3kmsshb6.js";
import { eU } from "../../../02-功能模块/权限系统/chunk-t3b7pg2x.js";
import { SKILL_TOOL_NAME } from "../../../02-功能模块/权限系统/chunk-fjrcf22x.js";
import { filterOutHookProgressMessages, getRegisteredTools, findToolByName, parseToolInput } from "../../../02-功能模块/权限系统/chunk-qdy0h5k2.js";
import { Jc, getPlan } from "../../../02-功能模块/计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import { WEB_FETCH_TOOL_NAME } from "../../../02-功能模块/Artifact发布-渲染/chunk-01ymf0ar.js";
import { isViolinWoodEnabledCached } from "../../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import { GET_TASK_TOOL_NAME, isGetTaskToolEnabled, WEB_SEARCH_TOOL_NAME, REPL_REGISTERED_TOOL_UI_TABLE_KEY, TASK_OUTPUT_TOOL_NAME, ENTER_WORKTREE_TOOL_NAME, STRUCTURED_OUTPUT_TOOL_NAME, getStructuredOutputText, PROPOSE_SKILLS_TOOL_NAME, EXIT_WORKTREE_TOOL_NAME } from "../../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { sp, ER, pse, hAt } from "../../../02-功能模块/Bridge-RemoteControl/chunk-5ne99rq3.js";
import {
  CROSS_SESSION_MESSAGE_PREFIX,
  PEER_LANE_SUFFIX_VARIANTS,
  DESCENDANT_LANE_SUFFIX_VARIANTS,
  CROSS_SESSION_OPENER_PREFIXES,
  isCrossSessionMessage,
  IdleNotificationMessageSchema,
  capFrameFieldForDisplay,
  capFailureReasonForDisplay,
  PLAN_CONTENT_DISPLAY_BOUND,
  capFrameBodyForDisplay,
  IDLE_RESULT_MAX_LENGTH,
  IDLE_SUMMARY_RECEIVE_BOUND,
  IDLE_ID_FIELD_RECEIVE_BOUND,
  capReceivedIdleResult,
  UNKNOWN_SENDER,
  capIdFrameField,
  capRawFrameTextForDisplay,
  PlanApprovalRequestMessageSchema,
  PlanApprovalResponseMessageSchema,
  ShutdownRequestMessageSchema,
  ShutdownApprovedMessageSchema,
  ShutdownRejectedMessageSchema,
  isTaskAssignment,
  TaskCompletedMessageSchema,
  TeammateTerminatedMessageSchema,
  parseFrameForDisplay,
  withShutdownReplyInstructions,
} from "../../../02-功能模块/Teammates团队/chunk-g6nvp9mm.js";
import { getAgentTypeColorThemeKey } from "../../../01-核心基础设施/共享小工具-未细化/agent-color-palette.js";
import { Bl } from "../第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import { PUSH_NOTIFICATION_TOOL_NAME } from "../../../02-功能模块/Bridge-RemoteControl/push-notification-tool.js";
import { CRON_CREATE_TOOL_NAME, CRON_DELETE_TOOL_NAME, CRON_LIST_TOOL_NAME } from "../../../02-功能模块/Cron-定时任务/chunk-mk3zm4ew.js";
import { E$ } from "../../../02-功能模块/工具结果持久化/工具结果持久化.jj43r39n.js";
import { isAgentSwarmsEnabled } from "../../../02-功能模块/Teammates团队/agent-swarms-enablement.js";
import { CFC_TOOL_PREFIX } from "../../../02-功能模块/ClaudeinChrome/claude-in-chrome-host.js";
import { isFromCurrentAgent } from "../../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import { useTerminalSize } from "../../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { ToolResultRow, useIsInsideToolResultRow } from "../../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { AppStateContext, useAppStateSelector, useAppState, useAppStateSelectorUnchecked } from "../../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { useHyperlinkSupport } from "../../../01-核心基础设施/共享小工具-未细化/use-hyperlink-support.js";
import { js } from "../../../02-功能模块/语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import { useSession } from "../../../01-核心基础设施/共享小工具-未细化/session-context.js";
import { useMainLoopModel } from "../../../01-核心基础设施/共享小工具-未细化/main-loop-model.js";
import { useRateLimitCheckpointResult } from "../../../01-核心基础设施/共享小工具-未细化/chunk-pkw2prc7.js";
import { StatusIndicator } from "../../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import {
  $lt,
  Zle,
  C4,
  O3e,
  wee,
  HIe,
  rrn,
  srn,
  lrn,
} from "../../../02-功能模块/AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import { useNotificationQueue } from "../../../03-入口与运行时/会话UI(REPL)/notification-queue.js";
import { useKeybindingDisplayText } from "../../../01-核心基础设施/共享小工具-未细化/use-keybinding-display-text.js";
import { shouldExpandContent } from "../../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import { nF, QL, La, QZ, jA } from "../../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import { StaticFrameContext } from "../../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import { useElapsedDuration } from "../../../01-核心基础设施/共享小工具-未细化/use-elapsed-duration.js";
import { ToolResultPreviewWidthContext, TruncatedFilePath } from "../../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import { MCP_TOOL_UI_TABLE_KEY, MCP_TOOL_OUTPUT_SCHEMA, MCP_TOOL_BASE } from "../../../01-核心基础设施/共享小工具-未细化/mcp-tool-base.js";
import { VerboseToolResultProvider, ToolResultContent } from "../../../01-核心基础设施/共享小工具-未细化/tool-result-content.js";
import { getHandbackPayloadSchema, getHandbackDisplayText } from "../../../01-核心基础设施/共享小工具-未细化/resumed-agent-handback.js";
import { renderToolUseMessageForTool } from "../../../01-核心基础设施/共享小工具-未细化/tool-use-message-renderers.js";
import { resolveAgentColor, CollapsedMessagesHint } from "../../../01-核心基础设施/共享小工具-未细化/chunk-pazpsfq6.js";
import { conjugateVerbPhrase } from "../../../01-核心基础设施/核心工具-字符串与文本/verb-conjugation.js";
import { DiffStatLabel, PullRequestBadge } from "../../../02-功能模块/GitHub集成/chunk-bfz9rjjm.js";
import { pickRandom, useSpinnerThinkingStartedAt } from "../../../02-功能模块/Hooks钩子/spinner-store.js";
import { sPt, yye, iPt, aPt } from "../../../02-功能模块/Bridge-RemoteControl/chunk-sc8n0cp3.js";
import { OffscreenFrozenContent, useOffscreenFrozenValue } from "../../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import { useCommandQueue } from "../../../01-核心基础设施/共享小工具-未细化/command-queue-context.js";
import { CLOUD_SESSION_ENTRY_LABELS, CLOUD_SESSION_URL_SEPARATOR } from "../../../01-核心基础设施/共享小工具-未细化/cloud-session-status-message.js";
import { BashToolOutputView } from "../../../02-功能模块/工具Bash-Shell/bash-output-view.js";
import { formatTimestamp, truncateMiddleText, UserPromptText, TruncatedText } from "../../../02-功能模块/工具UI渲染/chunk-g4k5jjwt.js";
import { renderWebFetchProgressMessage, ReceivedBytesStatus, renderWebFetchResultMessage } from "../../../01-核心基础设施/共享小工具-未细化/webfetch-tool-messages.js";
import { DashedBorderBox } from "../../../01-核心基础设施/共享小工具-未细化/dashed-border-box.js";
import { BackgroundText } from "../../../01-核心基础设施/共享小工具-未细化/background-text.js";
import { EmptyStateMessage } from "../../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import { showNotification } from "../../../02-功能模块/通知(Notifications)/通知(Notifications).g4xng0pg.js";
import { TitledBorderBox } from "../../../01-核心基础设施/共享小工具-未细化/titled-border-box.js";
import { ProgressBar } from "../../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import { LinkifiedText } from "../../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import { toLocalFileUrl } from "../../../01-核心基础设施/共享小工具-未细化/to-local-file-url.js";
import { ActionKeybindingHint } from "../../../01-核心基础设施/共享小工具-未细化/action-keybinding-hint.js";
import { Divider } from "../../../01-核心基础设施/共享小工具-未细化/divider.js";
import { useReducedMotion } from "../../../01-核心基础设施/共享小工具-未细化/reduced-motion.js";
import { N, e, r } from "../../react/react.kwtapczy.js";
import { formatHyperlink } from "../../../01-核心基础设施/共享小工具-未细化/format-hyperlink.js";
import { formatBackgroundTaskSummary } from "../../../02-功能模块/Teammates团队/background-task-summary.js";
import { get1MContextSuggestion } from "../../../01-核心基础设施/共享小工具-未细化/model-1m-context-suggestion.js";
import { stripControlChars, SLACK_SEND_TOOL_KEY, getSlackChannelDisplay } from "../../../01-核心基础设施/共享小工具-未细化/slack-send-tool.js";
import { estimateContentTokens } from "../../../01-核心基础设施/共享小工具-未细化/mcp-output-truncation.js";
import { openPathInDefaultApp } from "../../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import {
  Aln,
  Nl,
  Dn,
  Qt,
  Yl,
  kn,
  re,
  De,
  E,
  V,
  C,
  d,
  At,
  F,
} from "../React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { isTerminalTaskStatus, figures, sanitizeDisplayName } from "../../../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
import { TASK_STOP_TOOL_NAME } from "../../../02-功能模块/Teammates团队/chunk-z2t8b9yc.js";
import { SEND_MESSAGE_TOOL_NAME } from "../../../01-核心基础设施/共享小工具-未细化/send-message-constants.js";
import { WORKER_AGENT_TYPE } from "../../../01-核心基础设施/共享小工具-未细化/worker-agent-type.js";
import { MONITOR_TOOL_NAME } from "../../../01-核心基础设施/共享小工具-未细化/monitor-tool-name.js";
import { AGENT_TOOL_NAME, TASK_TOOL_NAME } from "../../../02-功能模块/工具Task-Agent调度/agent-tool-constants.js";
import { detectLineEndings } from "../../../01-核心基础设施/共享小工具-未细化/safe-file-read.js";
import { s, v, c, $e } from "../../zod/zod.5ef0bk11.js";
import { runPaginatedScan } from "../../../01-核心基础设施/共享小工具-未细化/paginated-scan.js";
import { xA } from "../../lru-cache/lru-cache.8crev50p.js";
import { formatFileSize } from "../../../01-核心基础设施/共享小工具-未细化/chunk-7axvc6rn.js";
import { isRecord } from "../../../01-核心基础设施/共享小工具-未细化/is-record.js";
import { countMatching, dedupe, asStringArray } from "../../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function Zg(dq) {
  let Zs = _(32),
    {
      agentType: $g,
      description: Zi,
      name: Wg,
      descriptionColor: $_,
      taskDescription: W_,
      toolUseCount: qg,
      tokens: Hg,
      color: q_,
      isLast: Gg,
      isResolved: Od,
      isAsync: rL,
      lastToolInfo: H_,
      hideType: nL,
    } = dq,
    pq = rL === void 0 ? !1 : rL,
    G_ = nL === void 0 ? !1 : nL,
    vn = pq && Od,
    sL;
  if (Zs[0] !== vn || Zs[1] !== Od || Zs[2] !== H_ || Zs[3] !== W_)
    ((sL = () => {
      if (!Od) {
        return H_ || "Initializing\u2026";
      }
      if (vn) {
        return W_ ?? "Running in the background";
      }
      return "Done";
    }),
      (Zs[0] = vn),
      (Zs[1] = Od),
      (Zs[2] = H_),
      (Zs[3] = W_),
      (Zs[4] = sL));
  else sL = Zs[4];
  let z_ = sL;
  const K_ = Gg ? "last" : "branch";
  let zg;
  if (Zs[5] !== K_) ((zg = [K_]), (Zs[5] = K_), (Zs[6] = zg));
  else zg = Zs[6];
  const Y_ = !Od;
  let Kg;
  if (
    Zs[7] !== $g ||
    Zs[8] !== q_ ||
    Zs[9] !== Zi ||
    Zs[10] !== $_ ||
    Zs[11] !== G_ ||
    Zs[12] !== Wg
  )
    ((Kg = G_
      ? r(N, {
          children: [
            e(t, { bold: !0, children: Wg ?? Zi ?? $g }),
            Wg && Zi && r(t, { dimColor: !0, children: [": ", Zi] }),
          ],
        })
      : r(N, {
          children: [
            e(BackgroundText, { color: q_, bold: !0, children: $g }),
            Zi &&
              r(N, {
                children: [" (", e(BackgroundText, { color: $_, children: Zi }), ")"],
              }),
          ],
        })),
      (Zs[7] = $g),
      (Zs[8] = q_),
      (Zs[9] = Zi),
      (Zs[10] = $_),
      (Zs[11] = G_),
      (Zs[12] = Wg),
      (Zs[13] = Kg));
  else Kg = Zs[13];
  let Yg;
  if (Zs[14] !== vn || Zs[15] !== Hg || Zs[16] !== qg)
    ((Yg =
      !vn &&
      r(N, {
        children: [
          " \xB7 ",
          qg,
          " tool ",
          qg === 1 ? "use" : "uses",
          Hg !== null && r(N, { children: [" \xB7 ", formatNumber(Hg), " tokens"] }),
        ],
      })),
      (Zs[14] = vn),
      (Zs[15] = Hg),
      (Zs[16] = qg),
      (Zs[17] = Yg));
  else Yg = Zs[17];
  let Vg;
  if (Zs[18] !== Y_ || Zs[19] !== Kg || Zs[20] !== Yg)
    ((Vg = r(t, { dimColor: Y_, children: [Kg, Yg] })),
      (Zs[18] = Y_),
      (Zs[19] = Kg),
      (Zs[20] = Yg),
      (Zs[21] = Vg));
  else Vg = Zs[21];
  let Xg;
  if (Zs[22] !== zg || Zs[23] !== Vg)
    ((Xg = e(Oye, { connectors: zg, children: Vg })),
      (Zs[22] = zg),
      (Zs[23] = Vg),
      (Zs[24] = Xg));
  else Xg = Zs[24];
  let Jg;
  if (Zs[25] !== z_ || Zs[26] !== vn || Zs[27] !== Gg)
    ((Jg =
      !vn &&
      e(Oye, {
        connectors: [Gg ? "space" : "pipe"],
        children: r(t, { dimColor: !0, children: ["\u23BF  ", z_()] }),
      })),
      (Zs[25] = z_),
      (Zs[26] = vn),
      (Zs[27] = Gg),
      (Zs[28] = Jg));
  else Jg = Zs[28];
  let iL;
  if (Zs[29] !== Xg || Zs[30] !== Jg)
    ((iL = r(o, {
      flexDirection: "column",
      paddingLeft: 3,
      children: [Xg, Jg],
    })),
      (Zs[29] = Xg),
      (Zs[30] = Jg),
      (Zs[31] = iL));
  else iL = Zs[31];
  return iL;
}
function vd() {
  return "What should Claude do instead?";
}
function Id() {
  let aL = _(2),
    lL;
  if (aL[0] === MEMO_CACHE_SENTINEL)
    ((lL = e(t, { dimColor: !0, children: "Interrupted " })), (aL[0] = lL));
  else lL = aL[0];
  let uL;
  if (aL[1] === MEMO_CACHE_SENTINEL)
    ((uL = r(N, {
      children: [lL, r(t, { dimColor: !0, children: ["\xB7 ", vd()] })],
    })),
      (aL[1] = uL));
  else uL = aL[1];
  return uL;
}
function bf() {
  let _q = _(1),
    mL;
  if (_q[0] === MEMO_CACHE_SENTINEL)
    ((mL = e(ToolResultRow, { height: 1, children: e(Id, {}) })), (_q[0] = mL));
  else mL = _q[0];
  return mL;
}
F();
function jd(Oq) {
  let Pr = _(24),
    { message: eh, screen: vq } = Oq,
    ur = vq === "transcript",
    cL;
  if (Pr[0] !== eh) ((cL = getUserMessageText(eh) || ""), (Pr[0] = eh), (Pr[1] = cL));
  else cL = Pr[1];
  let ru = cL,
    ea = eh.summarizeMetadata;
  if (ea) {
    let Dd;
    if (Pr[2] === MEMO_CACHE_SENTINEL)
      ((Dd = e(o, {
        minWidth: 2,
        children: e(t, { "aria-hidden": !0, color: "text", children: CLAUDE_BULLET_GLYPH }),
      })),
        (Pr[2] = Dd));
    else Dd = Pr[2];
    let oa;
    if (Pr[3] === MEMO_CACHE_SENTINEL)
      ((oa = e(t, { bold: !0, children: "Summarized conversation" })),
        (Pr[3] = oa));
    else oa = Pr[3];
    let In;
    if (Pr[4] !== ur || Pr[5] !== ea)
      ((In =
        !ur &&
        e(ToolResultRow, {
          children: r(o, {
            flexDirection: "column",
            children: [
              r(t, {
                dimColor: !0,
                children: [
                  "Summarized ",
                  ea.messagesSummarized,
                  " messages",
                  " ",
                  ea.direction === "up_to"
                    ? "up to this point"
                    : "from this point",
                ],
              }),
              ea.userContext &&
                r(t, {
                  dimColor: !0,
                  children: ["Context: ", "\u201C", ea.userContext, "\u201D"],
                }),
              e(t, {
                dimColor: !0,
                children: e(ActionKeybindingHint, {
                  action: "app:toggleTranscript",
                  context: "Global",
                  fallback: "ctrl+o",
                  description: "expand history",
                  parens: !0,
                }),
              }),
            ],
          }),
        })),
        (Pr[4] = ur),
        (Pr[5] = ea),
        (Pr[6] = In));
    else In = Pr[6];
    let Bn;
    if (Pr[7] !== ur || Pr[8] !== ru)
      ((Bn = ur && e(ToolResultRow, { children: e(t, { children: ru }) })),
        (Pr[7] = ur),
        (Pr[8] = ru),
        (Pr[9] = Bn));
    else Bn = Pr[9];
    let Bd;
    if (Pr[10] !== In || Pr[11] !== Bn)
      ((Bd = e(o, {
        flexDirection: "column",
        marginTop: 1,
        children: r(o, {
          flexDirection: "row",
          children: [
            Dd,
            r(o, { flexDirection: "column", children: [oa, In, Bn] }),
          ],
        }),
      })),
        (Pr[10] = In),
        (Pr[11] = Bn),
        (Pr[12] = Bd));
    else Bd = Pr[12];
    return Bd;
  }
  let Dd;
  if (Pr[13] === MEMO_CACHE_SENTINEL)
    ((Dd = e(o, {
      minWidth: 2,
      children: e(t, { "aria-hidden": !0, color: "text", children: CLAUDE_BULLET_GLYPH }),
    })),
      (Pr[13] = Dd));
  else Dd = Pr[13];
  let oa;
  if (Pr[14] !== ur)
    ((oa =
      !ur &&
      r(t, {
        dimColor: !0,
        children: [
          " ",
          e(ActionKeybindingHint, {
            action: "app:toggleTranscript",
            context: "Global",
            fallback: "ctrl+o",
            description: "expand",
            parens: !0,
          }),
        ],
      })),
      (Pr[14] = ur),
      (Pr[15] = oa));
  else oa = Pr[15];
  let In;
  if (Pr[16] !== oa)
    ((In = r(o, {
      flexDirection: "row",
      children: [
        Dd,
        e(o, {
          flexDirection: "column",
          children: r(t, { bold: !0, children: ["Compact summary", oa] }),
        }),
      ],
    })),
      (Pr[16] = oa),
      (Pr[17] = In));
  else In = Pr[17];
  let Bn;
  if (Pr[18] !== ur || Pr[19] !== ru)
    ((Bn = ur && e(ToolResultRow, { children: e(t, { children: ru }) })),
      (Pr[18] = ur),
      (Pr[19] = ru),
      (Pr[20] = Bn));
  else Bn = Pr[20];
  let Bd;
  if (Pr[21] !== In || Pr[22] !== Bn)
    ((Bd = r(o, { flexDirection: "column", marginTop: 1, children: [In, Bn] })),
      (Pr[21] = In),
      (Pr[22] = Bn),
      (Pr[23] = Bd));
  else Bd = Pr[23];
  return Bd;
}
F();
F();
var dL = 500,
  V_ = 5000;
function pye() {
  let l = tn(),
    f = qA(),
    g = useSession().host;
  return re(() => {
    if (!l) return;
    let T = claimRegistriesByHost.of(g),
      y = Date.now();
    if (y - T.lastBellAt < dL) return;
    ((T.lastBellAt = y), f.notifyBell());
  }, [l, f, g]);
}
var pL = 600;
function X_(l, f = pL) {
  let g = useTerminalFocus(),
    [T, y] = bs(l && g ? f : null);
  if (!l || !g) return [T, !0];
  let R = Math.floor(y / f) % 2 === 0;
  return [T, R];
}
function Ho({ isError: l, isUnresolved: f, shouldAnimate: g }) {
  let T = tn(),
    [y, R] = X_(g && !T),
    k = pye(),
    S = C(null);
  return (
    E(() => {
      if (f) S.current ??= Date.now();
      else if (S.current !== null) {
        if (Date.now() - S.current > V_) k();
        S.current = null;
      }
    }, [f, k]),
    e(o, {
      ref: y,
      minWidth: 2,
      children: e(t, {
        "aria-label": l ? "tool error:" : "tool:",
        color: f ? void 0 : l ? "error" : "success",
        dimColor: f,
        children: !g || R || l || !f ? CLAUDE_BULLET_GLYPH : " ",
      }),
    })
  );
}
function Fd(dH) {
  let Go = _(42),
    {
      block: po,
      addMargin: pH,
      resolvedToolUseIDs: Q_,
      erroredToolUseIDs: J_,
      shouldAnimate: Z_,
      verbose: jn,
      advisorModel: oh,
    } = dH,
    fH = useSession().host;
  if (po.type === "server_tool_use") {
    let Ko;
    if (Go[0] !== po.input)
      ((Ko = po.input && Object.keys(po.input).length > 0 ? b(po.input) : null),
        (Go[0] = po.input),
        (Go[1] = Ko));
    else Ko = Go[1];
    let th = Ko;
    const nu = pH ? 1 : 0;
    let ta;
    if (Go[2] !== po.id || Go[3] !== Q_)
      ((ta = Q_.has(po.id)), (Go[2] = po.id), (Go[3] = Q_), (Go[4] = ta));
    else ta = Go[4];
    const su = !ta;
    let ra;
    if (Go[5] !== po.id || Go[6] !== J_)
      ((ra = J_.has(po.id)), (Go[5] = po.id), (Go[6] = J_), (Go[7] = ra));
    else ra = Go[7];
    let rh;
    if (Go[8] !== Z_ || Go[9] !== su || Go[10] !== ra)
      ((rh = e(Ho, { shouldAnimate: Z_, isUnresolved: su, isError: ra })),
        (Go[8] = Z_),
        (Go[9] = su),
        (Go[10] = ra),
        (Go[11] = rh));
    else rh = Go[11];
    let fL;
    if (Go[12] === MEMO_CACHE_SENTINEL)
      ((fL = e(t, { bold: !0, children: "Advising" })), (Go[12] = fL));
    else fL = Go[12];
    let nh;
    if (Go[13] !== oh)
      ((nh = oh ? r(t, { dimColor: !0, children: [" using ", renderModelName(oh)] }) : null),
        (Go[13] = oh),
        (Go[14] = nh));
    else nh = Go[14];
    let ih;
    if (Go[15] !== th)
      ((ih = th ? r(t, { dimColor: !0, children: [" \xB7 ", th] }) : null),
        (Go[15] = th),
        (Go[16] = ih));
    else ih = Go[16];
    let gL;
    if (Go[17] !== nu || Go[18] !== rh || Go[19] !== nh || Go[20] !== ih)
      ((gL = r(o, {
        marginTop: nu,
        paddingRight: 2,
        flexDirection: "row",
        children: [rh, fL, nh, ih],
      })),
        (Go[17] = nu),
        (Go[18] = rh),
        (Go[19] = nh),
        (Go[20] = ih),
        (Go[21] = gL));
    else gL = Go[21];
    return gL;
  }
  let na;
  if (isAdvisorRefusal(po)) {
    let Ko;
    if (Go[22] !== po) ((Ko = getAdvisorRefusalText(po)), (Go[22] = po), (Go[23] = Ko));
    else Ko = Go[23];
    let sa = Ko;
    let nu;
    if (Go[24] === MEMO_CACHE_SENTINEL)
      ((nu = e(t, {
        color: "warning",
        children: "Advisor declined to advise on this request",
      })),
        (Go[24] = nu));
    else nu = Go[24];
    let ta;
    if (Go[25] !== sa || Go[26] !== jn)
      ((ta =
        sa !== void 0 && !jn ? r(N, { children: [" ", e(TranscriptExpandHint, {})] }) : null),
        (Go[25] = sa),
        (Go[26] = jn),
        (Go[27] = ta));
    else ta = Go[27];
    let su;
    if (Go[28] !== ta)
      ((su = r(t, { children: [nu, ta] })), (Go[28] = ta), (Go[29] = su));
    else su = Go[29];
    let ah = su;
    let ra;
    if (Go[30] !== ah || Go[31] !== sa || Go[32] !== jn)
      ((ra =
        jn && sa !== void 0
          ? r(o, {
              flexDirection: "column",
              children: [ah, e(t, { dimColor: !0, children: sa })],
            })
          : ah),
        (Go[30] = ah),
        (Go[31] = sa),
        (Go[32] = jn),
        (Go[33] = ra));
    else ra = Go[33];
    na = ra;
  } else {
    bb0: switch (po.content?.type) {
      case "advisor_tool_result_error": {
        let Ko;
        if (Go[34] !== po.content.error_code)
          ((Ko = r(t, {
            color: "error",
            children: ["Advisor unavailable (", po.content.error_code, ")"],
          })),
            (Go[34] = po.content.error_code),
            (Go[35] = Ko));
        else Ko = Go[35];
        na = Ko;
        break bb0;
      }
      case "advisor_result": {
        let Ko;
        if (Go[36] !== po.content || Go[37] !== jn)
          ((Ko = jn
            ? e(t, { dimColor: !0, children: po.content.text })
            : r(t, {
                dimColor: !0,
                children: [
                  r(t, { "aria-hidden": !0, children: [figures.tick, " "] }),
                  "Advisor has reviewed the conversation and will apply the feedback ",
                  e(TranscriptExpandHint, {}),
                ],
              })),
            (Go[36] = po.content),
            (Go[37] = jn),
            (Go[38] = Ko));
        else Ko = Go[38];
        na = Ko;
        break bb0;
      }
      case "advisor_redacted_result": {
        let Ko;
        if (Go[39] === MEMO_CACHE_SENTINEL)
          ((Ko = r(t, {
            dimColor: !0,
            children: [
              r(t, { "aria-hidden": !0, children: [figures.tick, " "] }),
              "Advisor has reviewed the conversation and will apply the feedback",
            ],
          })),
            (Go[39] = Ko));
        else Ko = Go[39];
        na = Ko;
        break bb0;
      }
      default: {
        if (
          po.content != null &&
          claimRegistriesByHost.of(fH).claim(`advisor-unknown:${po.tool_use_id}`)
        )
          logEvent("tengu_advisor_unknown_content", {});
        return null;
      }
    }
  }
  let Ko;
  if (Go[40] !== na)
    ((Ko = e(o, { paddingRight: 2, children: e(ToolResultRow, { children: na }) })),
      (Go[40] = na),
      (Go[41] = Ko));
  else Ko = Go[41];
  return Ko;
}
function $d(MH) {
  let TL = _(3),
    { addMargin: hL } = MH;
  const eS = (hL === void 0 ? !1 : hL) ? 1 : 0;
  let yL;
  if (TL[0] === MEMO_CACHE_SENTINEL)
    ((yL = r(t, {
      dimColor: !0,
      italic: !0,
      children: [
        e(t, { "aria-hidden": !0, children: "\u273B " }),
        "Thinking\u2026",
      ],
    })),
      (TL[0] = yL));
  else yL = TL[0];
  let RL;
  if (TL[1] !== eS)
    ((RL = e(o, { marginTop: eS, children: yL })), (TL[1] = eS), (TL[2] = RL));
  else RL = TL[2];
  return RL;
}
F();
F();
var fWe = "tengu_pewter_summit";
F();
function QR() {
  let [l, f] = d({ ...getCurrentLimits() });
  return (
    E(
      () =>
        subscribeToLimitStatusChanges((g) => {
          f({ ...g });
        }),
      [],
    ),
    l
  );
}
F();
F();
function qx(l, f, g, T, y) {
  let { addNotification: R, removeNotification: k } = useNotificationQueue();
  E(() => {
    if (g === null) {
      k(l);
      return;
    }
    R({
      key: l,
      kind: y?.kind ?? "warning",
      color: y?.color,
      priority: f,
      pinned: !0,
      jsx: T(g),
    });
  }, [g, l, f, T, y, R, k]);
}
function XIt(l) {
  return USAGE_CREDITS_COMMAND.isEnabled() && (l === void 0 || l.includes("overage"));
}
function iu(l) {
  let f = getSubscriptionType(),
    g = f === "team" || f === "enterprise";
  return XIt(l) && !g && !isEssentialTrafficOnly() && planModeConstituentFamily(getUserSpecifiedModelSetting()) === null;
}
F();
var ML = 30000;
function pZt(l, f, g) {
  let T = !1,
    y = () => {},
    R = () => {
      if (T) return;
      let k = l - Date.now();
      if (k <= 0) {
        g();
        return;
      }
      y = f(R, Math.min(k, ML));
    };
  return (
    R(),
    () => {
      ((T = !0), y());
    }
  );
}
function DB(l) {
  let g = De(ClockContext)?.setTimeout ?? setTimeoutWithCancel,
    T = V(() => {
      if (l === null) return noopSubscribe;
      return (y) => pZt(l, g, y);
    }, [l, g]);
  return At(T, () => l !== null && Date.now() >= l);
}
var uS = 30000,
  cS = "quota-auto-resume",
  dS = "quota-auto-resume-credits",
  qd = "quota-auto-resume-cap",
  YIt = "quota-auto-resume-cancelled",
  JIt = "Automatic continue cancelled \xB7 /rate-limit-options to re-arm",
  Gd = "/usage-credits to continue now",
  Hd = { kind: "event", color: "text" };
function LB() {
  return At(rrn, C4, C4);
}
function yS(l, f) {
  let g = l.phase === "armed" ? l.resetsAtSeconds : 0,
    T = g * 1000 > f ? formatResetTime(g) : void 0;
  return T ? `at ${T}` : "shortly";
}
function pS(l, f) {
  return (
    "Usage limit reached \xB7 continuing automatically " +
    yS(l, f) +
    " \xB7 esc or type to cancel"
  );
}
function fS(l, f) {
  return (
    "Usage limit reached again after you continued \xB7 continuing automatically " +
    yS(l, f) +
    " \xB7 the automatic-continue setting no longer ends this wait (esc or /rate-limit-options still can)"
  );
}
function lu(l, f) {
  if (l.phase === "stale")
    return "Your usage limit has reset \xB7 press enter to continue";
  if (l.phase !== "armed") return "";
  if (f)
    return "Usage limit reached \xB7 continuing shortly \xB7 esc to cancel";
  let g = formatResetTime(l.resetsAtSeconds);
  return g
    ? "Usage limit reached \xB7 continuing automatically at " +
        g +
        " \xB7 esc to cancel"
    : "Usage limit reached \xB7 continuing automatically when it resets \xB7 esc to cancel";
}
function uu(l, f, g) {
  return l.phase === "armed" && !f && g;
}
function gS() {
  return iu(getCurrentLimits().upgradePaths);
}
function hS() {
  return e(RS, {});
}
function TS() {
  return Gd;
}
function Fn(oS) {
  return DB(
    oS.phase === "armed"
      ? Math.min(oS.fireAtMs, oS.resetsAtSeconds * 1000)
      : null,
  );
}
function RS() {
  let kL = _(5),
    lh = LB();
  const tS = Fn(lh);
  let bL;
  if (kL[0] !== lh || kL[1] !== tS)
    ((bL = lu(lh, tS)), (kL[0] = lh), (kL[1] = tS), (kL[2] = bL));
  else bL = kL[2];
  let uh = bL,
    [mh, e2] = d(uh);
  if (uh !== "" && uh !== mh) e2(uh);
  let xL;
  if (kL[3] !== mh) ((xL = e(t, { children: mh })), (kL[3] = mh), (kL[4] = xL));
  else xL = kL[4];
  return xL;
}
function QIt(o2) {
  let au = _(23),
    { isLoading: rS, transcript: nS } = o2,
    { addNotification: ch, removeNotification: Wd } = useNotificationQueue(),
    { storageV5: aa, credentials: sS } = useStorageV5Context(),
    iS = qA(),
    la = LB(),
    aS = At(subscribeToLimitStatusChanges, gS),
    t2 = la.phase === "armed" || la.phase === "stale",
    lS = Fn(la);
  qx(cS, "high", t2 || null, hS, Hd);
  let _L;
  if (au[0] !== la || au[1] !== aS || au[2] !== lS)
    ((_L = uu(la, lS, aS) || null),
      (au[0] = la),
      (au[1] = aS),
      (au[2] = lS),
      (au[3] = _L));
  else _L = au[3];
  qx(dS, "medium", _L, TS, Hd);
  let PL, CL;
  if (au[4] !== aa)
    ((PL = () => {
      lrn(aa);
    }),
      (CL = [aa]),
      (au[4] = aa),
      (au[5] = PL),
      (au[6] = CL));
  else ((PL = au[5]), (CL = au[6]));
  E(PL, CL);
  let wL;
  if (au[7] !== nS)
    ((wL = (r2, n2) => nS.replace((s2) => [...s2, createSystemInfoMessage(r2, n2)])),
      (au[7] = nS),
      (au[8] = wL));
  else wL = au[8];
  let ut = wL,
    UL;
  if (au[9] !== sS || au[10] !== aa || au[11] !== iS)
    ((UL = (i2, a2) =>
      void showNotification({ message: i2, notificationType: a2 }, iS, {
        storageV5: aa,
        credentials: sS,
      })),
      (au[9] = sS),
      (au[10] = aa),
      (au[11] = iS),
      (au[12] = UL));
  else UL = au[12];
  let mr = UL,
    NL,
    AL;
  if (au[13] !== ch || au[14] !== ut || au[15] !== mr || au[16] !== Wd)
    ((NL = () =>
      HIe((l2) => {
        switch (l2) {
          case "armed":
          case "rearmed": {
            (Wd(qd), Wd(YIt));
            return;
          }
          case "taken-over": {
            ut(fS(C4(), Date.now()), "notice");
            return;
          }
          case "cancelled": {
            ut(JIt, "notice");
            return;
          }
          case "auto-armed": {
            ut(pS(C4(), Date.now()), "notice");
            return;
          }
          case "fired-now": {
            (ut("Usage limit available again \xB7 continuing now", "notice"),
              mr(
                "Usage limit available \u2014 Claude is continuing your task",
                "quota_auto_resume_fired",
              ));
            return;
          }
          case "stale": {
            (ut("Usage limit has reset \xB7 press enter to continue", "notice"),
              mr(
                "Usage limit reset \u2014 press enter to continue",
                "quota_auto_resume_stale",
              ));
            return;
          }
          case "disabled": {
            (ut(
              `Automatic continue was turned off \xB7 this task will not resume on its own${$lt() ? " (/rate-limit-options to wait anyway)" : ""}`,
              "warning",
            ),
              mr(
                "Automatic continue was turned off \u2014 the task will not resume on its own",
                "quota_auto_resume_disabled",
              ));
            return;
          }
          case "horizon-exceeded": {
            (ut(
              "Automatic continue stopped \xB7 the usage limit now resets more than 24 hours out, so this task will not resume on its own (/rate-limit-options to wait anyway)",
              "warning",
            ),
              mr(
                "Automatic continue stopped \u2014 the usage limit now resets more than 24 hours out; the task will not resume on its own",
                "quota_auto_resume_disabled",
              ));
            return;
          }
          case "continuation-dropped": {
            (ut(
              "Automatic continue did not run \xB7 the continuation was blocked before it reached the model, so this task did not resume on its own \xB7 send a prompt to continue",
              "warning",
            ),
              mr(
                "Automatic continue did not run \u2014 the continuation was blocked before it reached the model; send a prompt to continue",
                "quota_auto_resume_disabled",
              ));
            return;
          }
          case "cap-exhausted": {
            (ut(
              "Automatic continue stopped after repeated usage-limit hits \xB7 this task will not resume on its own (/rate-limit-options to try again)",
              "warning",
            ),
              mr(
                "Automatic continue stopped after repeated usage-limit hits \u2014 the task will not resume on its own",
                "quota_auto_resume_disabled",
              ),
              ch({
                key: qd,
                kind: "warning",
                text: "Automatic continue stopped after repeated usage-limit hits \xB7 /rate-limit-options to try again",
                color: "warning",
                priority: "high",
                timeoutMs: 20000,
              }));
            return;
          }
          default:
        }
      })),
      (AL = [ch, Wd, ut, mr]),
      (au[13] = ch),
      (au[14] = ut),
      (au[15] = mr),
      (au[16] = Wd),
      (au[17] = NL),
      (au[18] = AL));
  else ((NL = au[17]), (AL = au[18]));
  E(NL, AL);
  let EL;
  if (au[19] !== ut || au[20] !== rS || au[21] !== mr)
    ((EL = () => {
      if (srn(Date.now(), rS) === "fired")
        (ut("Usage limit reset \xB7 continuing automatically", "notice"),
          mr(
            "Usage limit reset \u2014 Claude is continuing your task",
            "quota_auto_resume_fired",
          ));
    }),
      (au[19] = ut),
      (au[20] = rS),
      (au[21] = mr),
      (au[22] = EL));
  else EL = au[22];
  ko(EL, la.phase === "armed" ? uS : null);
}
function vS({
  shouldShowUpsell: l,
  isMax20x: f,
  isExtraUsageCommandEnabled: g,
  shouldAutoOpenRateLimitOptionsMenu: T,
  isTeamOrEnterprise: y,
  hasBillingAccess: R,
  serverHidesUpgrade: k,
  serverHidesOverage: S,
  spendLimitNudgePath: P,
}) {
  if (!l) return null;
  if (T) return "Opening your options\u2026";
  if (P) return "/usage-credits to adjust your monthly spend limit.";
  let A = g && !S;
  if (f) {
    if (A) return "/usage-credits to finish what you\u2019re working on.";
    return "/login to switch to an API usage-billed account.";
  }
  if (y) {
    if (!A)
      return "Your admin can enable extra usage at claude.ai/admin-settings/usage.";
    if (R) return "/usage-credits to finish what you\u2019re working on.";
    return "/usage-credits to request more usage from your admin.";
  }
  if (k) {
    if (A) return "/usage-credits to finish what you\u2019re working on.";
    return null;
  }
  if (!A) return "/upgrade to increase your usage limit.";
  return "/upgrade or /usage-credits to finish what you\u2019re working on.";
}
function tp(v2) {
  let ho = _(66),
    {
      text: I2,
      onOpenRateLimitOptions: zd,
      onRateLimitAutoQueueContinue: Kd,
    } = v2,
    LL;
  if (ho[0] === MEMO_CACHE_SENTINEL) ((LL = getSubscriptionType()), (ho[0] = LL));
  else LL = ho[0];
  let MS = LL,
    OL;
  if (ho[1] === MEMO_CACHE_SENTINEL) ((OL = getRateLimitTier()), (ho[1] = OL));
  else OL = ho[1];
  let D2 = OL,
    vL = MS === "team" || MS === "enterprise",
    IL = MS === "max" && D2 === "default_claude_max_20x",
    DL;
  if (ho[2] === MEMO_CACHE_SENTINEL) ((DL = shouldAttachRateLimitHeaders() || isClaudeAISubscriber()), (ho[2] = DL));
  else DL = ho[2];
  let BL = DL,
    Ke = QR(),
    Et = Ke.upgradePaths,
    jL;
  if (ho[3] !== Et)
    ((jL = Et !== void 0 && !Et.includes("upgrade_plan")),
      (ho[3] = Et),
      (ho[4] = jL));
  else jL = ho[4];
  let B2 = jL,
    FL;
  if (ho[5] !== Et)
    ((FL = Et !== void 0 && !Et.includes("overage")),
      (ho[5] = Et),
      (ho[6] = FL));
  else FL = ho[6];
  let kS = FL,
    $L;
  if (ho[7] === MEMO_CACHE_SENTINEL) (($L = shouldShowUpgradeCommand()), (ho[7] = $L));
  else $L = ho[7];
  let WL = $L,
    qL;
  if (ho[8] === MEMO_CACHE_SENTINEL) ((qL = USAGE_CREDITS_COMMAND.isEnabled()), (ho[8] = qL));
  else qL = ho[8];
  let bS = qL,
    HL;
  if (ho[9] === MEMO_CACHE_SENTINEL) ((HL = canSelfManageUsageCredits()), (ho[9] = HL));
  else HL = ho[9];
  let GL = HL,
    zL;
  if (ho[10] !== Et)
    ((zL =
      Et !== void 0 &&
      ((Et.includes("upgrade_plan") && WL) || (Et.includes("overage") && bS))),
      (ho[10] = Et),
      (ho[11] = zL));
  else zL = ho[11];
  let j2 = zL,
    KL;
  if (ho[12] !== Ke.overageDisabledReason)
    ((KL =
      getFeatureValue_CACHED_MAY_BE_STALE(fWe, !1) &&
      !vL &&
      Ke.overageDisabledReason === "org_level_disabled_until" &&
      GL &&
      bS),
      (ho[12] = Ke.overageDisabledReason),
      (ho[13] = KL));
  else KL = ho[13];
  let ua = KL,
    W2 = BL && (Et !== void 0 ? j2 : !IL),
    YL;
  if (ho[14] !== Ke) ((YL = Zle(Ke)), (ho[14] = Ke), (ho[15] = YL));
  else YL = ho[15];
  let q2 = YL,
    un = LB(),
    dh = un.phase === "armed",
    H2 = wee(un.phase),
    XL;
  if (ho[16] !== Ke.resetsAt)
    ((XL = Ke.resetsAt !== void 0 && O3e(Ke.resetsAt)),
      (ho[16] = Ke.resetsAt),
      (ho[17] = XL));
  else XL = ho[17];
  let ph = XL,
    [xS, JL] = d("pending"),
    Vd =
      Ke.status === "rejected" && Ke.resetsAt !== void 0 && !Ke.isUsingOverage,
    mu =
      Ke.rateLimitType === "seven_day_overage_included" ||
      Ke.errorCode === "credits_required",
    mn = Ke.resetsAt,
    eO;
  if (ho[18] !== Ke.overageDisabledReason)
    ((eO =
      Ke.overageDisabledReason !== void 0 && ORG_OVERAGE_DISABLED_REASONS.has(Ke.overageDisabledReason)),
      (ho[18] = Ke.overageDisabledReason),
      (ho[19] = eO));
  else eO = ho[19];
  let _S = eO,
    oO;
  if (
    ho[20] !== ph ||
    ho[21] !== _S ||
    ho[22] !== mn ||
    ho[23] !== Ke.rateLimitType ||
    ho[24] !== dh ||
    ho[25] !== Vd ||
    ho[26] !== mu ||
    ho[27] !== ua
  )
    ((oO =
      Vd &&
      !dh &&
      !ph &&
      mn !== void 0 &&
      Number.isFinite(mn) &&
      Ke.rateLimitType === "five_hour" &&
      !mu &&
      !ua &&
      !_S),
      (ho[20] = ph),
      (ho[21] = _S),
      (ho[22] = mn),
      (ho[23] = Ke.rateLimitType),
      (ho[24] = dh),
      (ho[25] = Vd),
      (ho[26] = mu),
      (ho[27] = ua),
      (ho[28] = oO));
  else oO = ho[28];
  let SS = oO,
    nO;
  if (ho[29] !== SS) ((nO = SS && getFeatureValue_CACHED_MAY_BE_STALE(VELLUM_ANCHOR_FLAG, !1)), (ho[29] = SS), (ho[30] = nO));
  else nO = ho[30];
  let Xd = nO,
    Qd = useRateLimitCheckpointResult(),
    PS = Xd && Qd?.committed === !0,
    Jd = (W2 || q2) && !dh && !ph && xS === "pending" && Vd && !mu && zd,
    Zd = Xd && xS === "pending" && mn !== void 0 && Kd,
    sO,
    iO;
  if (
    ho[31] !== mn ||
    ho[32] !== zd ||
    ho[33] !== Kd ||
    ho[34] !== Jd ||
    ho[35] !== Zd
  )
    ((sO = () => {
      if (Jd) JL(zd() ? "opened" : "blocked");
      else if (Zd) JL("blocked");
      if (Zd && mn !== void 0) {
        if (Kd(mn))
          (logEvent("tengu_rl_checkpoint_copy_shown", {}),
            logEvent("tengu_rl_checkpoint_auto_continue_queued", {}));
      }
    }),
      (iO = [Jd, zd, Zd, Kd, mn]),
      (ho[31] = mn),
      (ho[32] = zd),
      (ho[33] = Kd),
      (ho[34] = Jd),
      (ho[35] = Zd),
      (ho[36] = sO),
      (ho[37] = iO));
  else ((sO = ho[36]), (iO = ho[37]));
  E(sO, iO);
  let fh;
  bb0: {
    if (mu) {
      fh = null;
      break bb0;
    }
    const cu = !!Jd;
    const ma = B2 || !WL;
    let ca;
    if (ho[38] !== kS || ho[39] !== ua || ho[40] !== cu || ho[41] !== ma)
      ((ca = vS({
        shouldShowUpsell: BL,
        isMax20x: IL,
        isExtraUsageCommandEnabled: bS,
        shouldAutoOpenRateLimitOptionsMenu: cu,
        isTeamOrEnterprise: vL,
        hasBillingAccess: GL,
        serverHidesUpgrade: ma,
        serverHidesOverage: kS,
        spendLimitNudgePath: ua,
      })),
        (ho[38] = kS),
        (ho[39] = ua),
        (ho[40] = cu),
        (ho[41] = ma),
        (ho[42] = ca));
    else ca = ho[42];
    let gh = ca;
    if (!gh) {
      fh = null;
      break bb0;
    }
    let da;
    if (ho[43] !== gh)
      ((da = e(t, { dimColor: !0, children: gh })),
        (ho[43] = gh),
        (ho[44] = da));
    else da = ho[44];
    fh = da;
  }
  let G2 = fh,
    ep = ua && Vd && !mu,
    CS = un.phase !== "armed" || un.resetsAtSeconds === Ke.resetsAt,
    cu;
  if (ho[45] !== Ke || ho[46] !== ep || ho[47] !== CS)
    ((cu = ep && CS ? getRateLimitDisplayInfo(Ke) : null),
      (ho[45] = Ke),
      (ho[46] = ep),
      (ho[47] = CS),
      (ho[48] = cu));
  else cu = ho[48];
  let wS = cu,
    US = ep
      ? wS
        ? `You've hit your monthly spend limit \xB7 your ${wS.limitName} resets ${wS.resetTime}`
        : "You've hit your monthly spend limit."
      : I2;
  const ma = ep ? "warning" : "error";
  let ca;
  if (ho[49] !== US || ho[50] !== ma)
    ((ca = e(t, { color: ma, children: US })),
      (ho[49] = US),
      (ho[50] = ma),
      (ho[51] = ca));
  else ca = ho[51];
  let da;
  if (ho[52] !== Xd)
    ((da = Xd
      ? r(t, {
          dimColor: !0,
          children: ["Press ", RETURN_KEY_GLYPH, " to continue after reset"],
        })
      : null),
      (ho[52] = Xd),
      (ho[53] = da));
  else da = ho[53];
  let hh;
  if (ho[54] !== PS || ho[55] !== Qd)
    ((hh =
      PS && Qd?.committed === !0
        ? r(N, {
            children: [
              r(t, {
                dimColor: !0,
                children: [
                  e(StatusIndicator, { status: "success", withSpace: !0 }),
                  "checkpointed \u2014 see ",
                  Qd.resumePath,
                ],
              }),
              r(t, {
                dimColor: !0,
                children: ["  ", "or /rewind to undo this turn's file edits"],
              }),
            ],
          })
        : null),
      (ho[54] = PS),
      (ho[55] = Qd),
      (ho[56] = hh));
  else hh = ho[56];
  let Th;
  if (ho[57] !== un || ho[58] !== Ke.upgradePaths)
    ((Th =
      un.phase === "armed"
        ? e(kh, { state: un, upgradePaths: Ke.upgradePaths })
        : un.phase === "stale"
          ? e(t, { dimColor: !0, children: lu(un, !1) })
          : null),
      (ho[57] = un),
      (ho[58] = Ke.upgradePaths),
      (ho[59] = Th));
  else Th = ho[59];
  const NS = !H2 && xS !== "opened" ? G2 : null;
  let aO;
  if (
    ho[60] !== ca ||
    ho[61] !== da ||
    ho[62] !== hh ||
    ho[63] !== Th ||
    ho[64] !== NS
  )
    ((aO = e(ToolResultRow, {
      children: r(o, {
        flexDirection: "column",
        children: [ca, da, hh, Th, NS],
      }),
    })),
      (ho[60] = ca),
      (ho[61] = da),
      (ho[62] = hh),
      (ho[63] = Th),
      (ho[64] = NS),
      (ho[65] = aO));
  else aO = ho[65];
  return aO;
}
function IS(l, f) {
  if (f) return "Continuing shortly \xB7 esc to cancel";
  return l
    ? `Continuing automatically at ${l} \xB7 esc to cancel`
    : "Continuing automatically when your limit resets \xB7 esc to cancel";
}
function kh(z2) {
  let OS = _(10),
    { state: op, upgradePaths: AS } = z2,
    K2 = formatResetTime(op.resetsAtSeconds),
    yh = Fn(op);
  const ES = t,
    Y2 = !0,
    LS = IS(K2, yh);
  let Rh;
  if (OS[0] !== ES || OS[1] !== LS)
    ((Rh = e(ES, { dimColor: Y2, children: LS })),
      (OS[0] = ES),
      (OS[1] = LS),
      (OS[2] = Rh));
  else Rh = OS[2];
  let Mh;
  if (OS[3] !== yh || OS[4] !== op || OS[5] !== AS)
    ((Mh = uu(op, yh, iu(AS)) ? e(t, { dimColor: !0, children: Gd }) : null),
      (OS[3] = yh),
      (OS[4] = op),
      (OS[5] = AS),
      (OS[6] = Mh));
  else Mh = OS[6];
  let lO;
  if (OS[7] !== Rh || OS[8] !== Mh)
    ((lO = r(N, { children: [Rh, Mh] })),
      (OS[7] = Rh),
      (OS[8] = Mh),
      (OS[9] = lO));
  else lO = OS[9];
  return lO;
}
var git = "session running",
  mWe = "session waiting for a prompt",
  uO = "session waiting",
  du = " \xB7 ",
  mO = /^[0-9a-f]{8}$/,
  DS = 20;
function fZt(l) {
  let f = l
    .split(FORK_GLYPH)
    .map((y) => y.trim())
    .filter(Boolean);
  if (f.length === 0) return;
  let [g, ...T] = f;
  return T.length === 0 ? g : `${g} ${FORK_GLYPH} ${T.join(du)}`;
}
function pu(l) {
  if (!l.startsWith(git) && !l.startsWith(mWe)) return null;
  if (
    l.includes(`
`)
  )
    return null;
  let f = l.split(du),
    g = f[0];
  if (g !== git && g !== mWe) return null;
  let T = f.findLastIndex((A) => mO.test(A)),
    y = T === -1 ? void 0 : f[T],
    R = T === -1 ? f.length : T,
    k = f.slice(1, R),
    S = k.length > 0 ? k.join(du) : void 0,
    P = T === -1 ? [] : f.slice(T + 1);
  return { state: g, name: S, id: y, chips: P };
}
function bh(l, f, g = !0) {
  let T = (R) => te(ZIt(R)),
    y = { ...l, chips: [...l.chips] };
  if (T(y) <= f) return y;
  if (y.state === mWe) {
    if (((y = { ...y, state: uO }), T(y) <= f)) return y;
  }
  if (y.id !== void 0 && y.name !== void 0 && g) {
    if (((y = { ...y, id: void 0 }), T(y) <= f)) return y;
  }
  if (y.name !== void 0) {
    let R = T({ ...y, name: void 0 }),
      k = f - R - te(du),
      S = te(y.name),
      P = S > DS ? Math.max(k, DS) : k;
    if (P >= 1 && P < S) y = { ...y, name: truncateToWidth(y.name, P) };
  }
  return y;
}
function ZIt(l) {
  return [
    l.state,
    ...(l.name ? [l.name] : []),
    ...(l.id ? [l.id] : []),
    ...l.chips,
  ].join(du);
}
function fu(l) {
  let f = l.teamCount ?? 0;
  if (f === 0) return null;
  return { segment: `${f} team ${f === 1 ? "memory" : "memories"}`, count: f };
}
var BS = 200,
  xh = 5,
  pa = 1000,
  dO = [`${LOZENGE_OUTLINE_GLYPH} `, `${LOZENGE_FILLED_GLYPH} `];
function _h(l) {
  switch (l.subtype) {
    case "informational":
    case "model_fallback":
    case "model_consent_fallback":
    case "model_refusal_fallback":
    case "scheduled_task_fire":
      if (typeof l.content !== "string") return { kind: "legacy" };
      break;
    default:
      break;
  }
  switch (l.subtype) {
    case "turn_duration":
      if (
        l.budgetLimit !== void 0 ||
        (l.briefHiddenCount ?? 0) > 0 ||
        (l.pendingBackgroundAgentCount ?? 0) > 0 ||
        (l.pendingWorkflowCount ?? 0) > 0
      )
        return { kind: "legacy" };
      return { kind: "hidden" };
    case "informational": {
      let f;
      switch (l.level) {
        case "warning":
          f = "gold";
          break;
        case "notice":
          f = "dim";
          break;
        case "info":
        case "suggestion":
          f = null;
          break;
      }
      if (f === null) return { kind: "legacy" };
      return gu(f, l.content, { maxChars: pa, linkify: !1 });
    }
    case "model_fallback":
      return gu("gold", l.content, { maxChars: pa, linkify: !1 });
    case "model_consent_fallback":
      return { kind: "line", row: jS("gold", l.content, { linkify: !1 }) };
    case "model_refusal_fallback":
      return gu("gold", l.content, { maxChars: pa, linkify: !0 });
    case "agents_killed":
      return {
        kind: "line",
        row: {
          tone: "red",
          text: "All background agents stopped",
          linkify: !1,
        },
      };
    case "permission_retry":
      return gu("dim", `Allowed ${l.commands.join(", ")}`, { linkify: !1 });
    case "scheduled_task_fire":
      return gu("dim", l.content, { maxChars: pa, linkify: !1 });
    case "memory_saved": {
      let f = fu(l),
        g = l.writtenPaths.length - (f?.count ?? 0),
        T = [
          g > 0 ? `${g} ${g === 1 ? "memory" : "memories"}` : null,
          f?.segment ?? null,
        ].filter((y) => y !== null);
      return {
        kind: "line",
        row: {
          tone: "dim",
          text: `${l.verb ?? "Saved"} ${T.join(" \xB7 ")}`,
          linkify: !1,
        },
      };
    }
    case "stop_hook_summary": {
      if (l.hookLabel) return { kind: "legacy" };
      let {
          hookCount: f,
          hookErrors: g,
          hookAdditionalContext: T = [],
          preventedContinuation: y,
          stopReason: R,
        } = l,
        k =
          l.totalDurationMs ??
          l.hookInfos.reduce((A, O) => A + (O.durationMs ?? 0), 0),
        S = !1;
      if (g.length === 0 && T.length === 0 && !y && (!S || k < STOP_HOOK_SUMMARY_MIN_DURATION_MS))
        return { kind: "hidden" };
      let P = ga(
        [
          ...(y && R ? [R] : []),
          ...g.map((A) => `Stop hook error: ${A}`),
          ...T.map((A) => `Stop hook feedback: ${A}`),
        ].join(`
`),
        { maxLines: xh },
      );
      return {
        kind: "line",
        row: {
          tone: g.length > 0 ? "red" : y || T.length > 0 ? "gold" : "dim",
          text: `Ran ${f} stop ${f === 1 ? "hook" : "hooks"}`,
          detail: S && k > 0 ? formatSecondsShort(k) : void 0,
          subLines: P.length > 0 ? P : void 0,
          linkify: !1,
        },
      };
    }
    default:
      return { kind: "legacy" };
  }
}
function Sh(l, f) {
  let g =
    l.messagesSummarized !== void 0 && l.messagesSummarized > 0
      ? `${l.messagesSummarized} ${l.messagesSummarized === 1 ? "message" : "messages"} summarized`
      : l.preTokens > 0
        ? `${formatTokens(l.preTokens)} tokens summarized`
        : null;
  return {
    tone: "dim",
    text: "Compacted",
    detail: g ? `${g} (${f} to see them)` : `${f} for history`,
    linkify: !1,
  };
}
function Ph(l) {
  let f = extractTagContent(l, LOCAL_COMMAND_STDOUT_TAG),
    g = extractTagContent(l, LOCAL_COMMAND_STDERR_TAG),
    T = f === null ? "" : SA(f),
    y = g === null ? "" : SA(g),
    R = T.trim() !== "" && T.trim() !== sp,
    k = y.trim() !== "",
    S = (R ? T : y).trim();
  if (S === "" || pu(S) !== null || dO.some((O) => S.startsWith(O)))
    return { kind: "legacy" };
  let [P = "", ...A] = ga(
    R
      ? `${T}
${y}`
      : y,
    { maxChars: pa, maxLines: 1 / 0, preserveLayout: !0 },
  );
  return {
    kind: "line",
    row: {
      tone: k ? "red" : "dim",
      text: P,
      subLines: A.length > 0 ? A : void 0,
      linkify: !1,
    },
  };
}
function fa() {
  return { tone: "dim", text: "Interrupted", detail: vd(), linkify: !1 };
}
function ei(l) {
  let f = l === Bl ? `${Bl}: Please wait a moment and try again.` : l,
    [g = "", ...T] = ga(f, { maxChars: pa }),
    y = jS("red", g, { linkify: !0 });
  return T.length > 0 ? { ...y, subLines: T } : y;
}
function Ch({ status: l, summary: f, durationMs: g, deliveryNote: T }) {
  let y = [Number.isFinite(g) && g > 0 ? formatDuration(g) : null, T].filter(
      (S) => S !== null,
    ),
    [R = "", ...k] = ga(f);
  return {
    tone: l === "failed" ? "red" : l === "killed" ? "gold" : "dim",
    text: R,
    detail: y.length > 0 ? y.join(" \xB7 ") : void 0,
    subLines: k.length > 0 ? k : void 0,
    linkify: !1,
  };
}
function hu({ hookName: l, blocking: f, reason: g }) {
  let T = ga(g, { maxLines: xh });
  return {
    tone: "red",
    text: f ? `${l} hook returned blocking error` : `${l} hook error`,
    subLines: T.length > 0 ? T : void 0,
    linkify: !1,
  };
}
function gu(l, f, { maxChars: g = BS, linkify: T }) {
  let [y, ...R] = ga(f, { maxChars: g });
  if (y === void 0) return { kind: "legacy" };
  return {
    kind: "line",
    row: { tone: l, text: y, subLines: R.length > 0 ? R : void 0, linkify: T },
  };
}
function jS(l, f, { linkify: g }) {
  let T = /.( \u00B7 |: )/s.exec(f);
  if (T === null) return { tone: l, text: f, linkify: g };
  return {
    tone: l,
    text: f.slice(0, T.index + 1),
    detail: f.slice(T.index + T[0].length),
    linkify: g,
  };
}
function ga(
  l,
  { maxChars: f = BS, maxLines: g = xh + 1, preserveLayout: T = !1 } = {},
) {
  let y;
  if (T) {
    let S = l.split(`
`),
      P = S.findIndex((O) => O.trim() !== ""),
      A = S.findLastIndex((O) => O.trim() !== "");
    y = P === -1 ? [] : S.slice(P, A + 1).map((O) => O.trimEnd() || " ");
  } else
    y = l
      .split(
        `
`,
      )
      .map((S) => S.trim())
      .filter((S) => S.length > 0);
  let R = y.slice(0, g).map((S) => {
      let P = truncateToCodeUnits(S, f);
      return P.length < S.length ? `${P}\u2026` : S;
    }),
    k = y.length - R.length;
  if (k > 0) R.push(`\u2026 +${k} more ${k === 1 ? "line" : "lines"}`);
  return R;
}
function ao(MG) {
  let pO = _(5),
    { row: FS, addMargin: kG } = MG;
  const $S = kG ? 1 : 0;
  let wh;
  if (pO[0] !== FS)
    ((wh = e(QZ, { state: "settled", ...FS })), (pO[0] = FS), (pO[1] = wh));
  else wh = pO[1];
  let fO;
  if (pO[2] !== $S || pO[3] !== wh)
    ((fO = e(o, {
      flexDirection: "column",
      marginTop: $S,
      width: "100%",
      children: wh,
    })),
      (pO[2] = $S),
      (pO[3] = wh),
      (pO[4] = fO));
  else fO = pO[4];
  return fO;
}
function np(xG) {
  let gO = _(5),
    { compactMetadata: WS } = xG,
    qS = useKeybindingDisplayText("app:toggleTranscript", "Global", "ctrl+o"),
    Uh;
  if (gO[0] !== WS || gO[1] !== qS)
    ((Uh = Sh(WS, qS)), (gO[0] = WS), (gO[1] = qS), (gO[2] = Uh));
  else Uh = gO[2];
  let hO;
  if (gO[3] !== Uh)
    ((hO = e(o, {
      flexDirection: "column",
      marginY: 1,
      width: "100%",
      children: e(QZ, { state: "settled", ...Uh }),
    })),
      (gO[3] = Uh),
      (gO[4] = hO));
  else hO = gO[4];
  return hO;
}
function DO(sz) {
  return sz.remoteAutocompactState;
}
var ip = 1000,
  nP = new Set([INVALID_API_KEY_MESSAGE, API_KEY_ORG_DISABLED_UPDATE_MESSAGE, API_KEY_ORG_DISABLED_UNSET_MESSAGE, GATEWAY_AUTH_ERROR_MESSAGE, OAUTH_TOKEN_REVOKED_MESSAGE]);
function Hh() {
  let oz = _(1);
  if (!kn(isKeychainLocked())) {
    return null;
  }
  let yO;
  if (oz[0] === MEMO_CACHE_SENTINEL)
    ((yO = e(t, {
      dimColor: !0,
      children: "\xB7 Run in another terminal: security unlock-keychain",
    })),
      (oz[0] = yO));
  else yO = oz[0];
  return yO;
}
function Gh() {
  let GS = _(6),
    RO;
  if (GS[0] === MEMO_CACHE_SENTINEL) ((RO = get1MContextSuggestion("warning")), (GS[0] = RO));
  else RO = GS[0];
  let zS = RO,
    tz = Ie(process.env.DISABLE_COMPACT)
      ? "/clear to continue"
      : "/compact or /clear to continue",
    rz = useAppStateSelector(DO) !== void 0,
    nz = useIsInsideToolResultRow(),
    Nh =
      !rz && !nz && isAutoCompactDisabledByUserSetting()
        ? " \xB7 auto-compact is off \xB7 /config to turn it on"
        : "";
  const KS = Nh || zS ? void 0 : 1;
  let Ah;
  if (GS[1] !== Nh)
    ((Ah = r(t, {
      color: "error",
      children: [
        "Context limit reached \xB7 ",
        tz,
        Nh,
        zS ? ` \xB7 ${zS}` : "",
      ],
    })),
      (GS[1] = Nh),
      (GS[2] = Ah));
  else Ah = GS[2];
  let MO;
  if (GS[3] !== KS || GS[4] !== Ah)
    ((MO = e(ToolResultRow, { height: KS, children: Ah })),
      (GS[3] = KS),
      (GS[4] = Ah),
      (GS[5] = MO));
  else MO = GS[5];
  return MO;
}
function zh() {
  let kO = _(2),
    _O;
  if (kO[0] === MEMO_CACHE_SENTINEL)
    ((_O = e(t, { color: "error", children: NOT_LOGGED_IN_MESSAGE })), (kO[0] = _O));
  else _O = kO[0];
  let SO;
  if (kO[1] === MEMO_CACHE_SENTINEL)
    ((SO = e(ToolResultRow, {
      children: r(o, {
        flexDirection: "column",
        children: [_O, e(Dn, { fallback: null, children: e(Hh, {}) })],
      }),
    })),
      (kO[1] = SO));
  else SO = kO[1];
  return SO;
}
function ya(ni) {
  let PO = _(8),
    { text: ha } = ni.param,
    { shouldShowDot: Eh, messageId: Lh } = ni,
    CO,
    wO;
  if (PO[0] !== Lh || PO[1] !== Eh || PO[2] !== ha)
    ((CO = () => ({ requestId: Lh, props: { text: ha, firstOfReply: Eh } })),
      (wO = [ha, Eh, Lh]),
      (PO[0] = Lh),
      (PO[1] = Eh),
      (PO[2] = ha),
      (PO[3] = CO),
      (PO[4] = wO));
  else ((CO = PO[3]), (wO = PO[4]));
  let iz = La.useRenderInput("AssistantMessage", CO, wO),
    UO;
  if (PO[5] !== ni || PO[6] !== ha)
    ((UO = (VS) =>
      e(Kh, {
        ...ni,
        param:
          VS.props.text === ha
            ? ni.param
            : { ...ni.param, text: VS.props.text },
        shouldShowDot: VS.props.firstOfReply,
      })),
      (PO[5] = ni),
      (PO[6] = ha),
      (PO[7] = UO));
  else UO = PO[7];
  return La.useRenderHook(iz, UO);
}
function Kh(az) {
  let lo = _(51),
    {
      param: lz,
      addMargin: Jo,
      shouldShowDot: XS,
      verbose: Oh,
      isApiError: uz,
      onOpenRateLimitOptions: QS,
      onRateLimitAutoQueueContinue: JS,
    } = az,
    { text: Be } = lz,
    mz = useIsInsideToolResultRow(),
    Ih = jA(Oh) && !mz;
  if (isBlankText(Be)) {
    return null;
  }
  if (Ih && Be === hA) {
    let pe;
    if (lo[0] === MEMO_CACHE_SENTINEL) ((pe = fa()), (lo[0] = pe));
    else pe = lo[0];
    let Po;
    if (lo[1] !== Jo)
      ((Po = e(ao, { row: pe, addMargin: Jo })), (lo[1] = Jo), (lo[2] = Po));
    else Po = lo[2];
    return Po;
  }
  if (Ih && nP.has(Be)) {
    let pe;
    if (lo[3] !== Be) ((pe = ei(Be)), (lo[3] = Be), (lo[4] = pe));
    else pe = lo[4];
    let Po;
    if (lo[5] !== Jo || lo[6] !== pe)
      ((Po = e(ao, { row: pe, addMargin: Jo })),
        (lo[5] = Jo),
        (lo[6] = pe),
        (lo[7] = Po));
    else Po = lo[7];
    return Po;
  }
  if (isUsageLimitStatusMessage(Be)) {
    let pe;
    if (lo[8] !== QS || lo[9] !== JS || lo[10] !== Be)
      ((pe = e(tp, {
        text: Be,
        onOpenRateLimitOptions: QS,
        onRateLimitAutoQueueContinue: JS,
      })),
        (lo[8] = QS),
        (lo[9] = JS),
        (lo[10] = Be),
        (lo[11] = pe));
    else pe = lo[11];
    return pe;
  }
  switch (Be) {
    case ER: {
      return null;
    }
    case PROMPT_TOO_LONG_MESSAGE: {
      let pe;
      if (lo[12] === MEMO_CACHE_SENTINEL) ((pe = e(Gh, {})), (lo[12] = pe));
      else pe = lo[12];
      return pe;
    }
    case CREDIT_BALANCE_TOO_LOW_MESSAGE: {
      let pe;
      if (lo[13] === MEMO_CACHE_SENTINEL)
        ((pe = e(ToolResultRow, {
          height: 1,
          children: e(t, {
            color: "error",
            children:
              "Credit balance too low \xB7 Add funds: https://platform.claude.com/settings/billing",
          }),
        })),
          (lo[13] = pe));
      else pe = lo[13];
      return pe;
    }
    case NOT_LOGGED_IN_MESSAGE: {
      let pe;
      if (lo[14] === MEMO_CACHE_SENTINEL) ((pe = e(zh, {})), (lo[14] = pe));
      else pe = lo[14];
      return pe;
    }
    case INVALID_API_KEY_MESSAGE: {
      let pe;
      if (lo[15] === MEMO_CACHE_SENTINEL)
        ((pe = e(ToolResultRow, {
          height: 1,
          children: e(t, { color: "error", children: INVALID_API_KEY_MESSAGE }),
        })),
          (lo[15] = pe));
      else pe = lo[15];
      return pe;
    }
    case API_KEY_ORG_DISABLED_UPDATE_MESSAGE:
    case API_KEY_ORG_DISABLED_UNSET_MESSAGE:
    case GATEWAY_AUTH_ERROR_MESSAGE: {
      let pe;
      if (lo[16] !== Be)
        ((pe = e(ToolResultRow, { children: e(t, { color: "error", children: Be }) })),
          (lo[16] = Be),
          (lo[17] = pe));
      else pe = lo[17];
      return pe;
    }
    case OAUTH_TOKEN_REVOKED_MESSAGE: {
      let pe;
      if (lo[18] === MEMO_CACHE_SENTINEL)
        ((pe = e(ToolResultRow, {
          height: 1,
          children: e(t, { color: "error", children: OAUTH_TOKEN_REVOKED_MESSAGE }),
        })),
          (lo[18] = pe));
      else pe = lo[18];
      return pe;
    }
    case REQUEST_TIMED_OUT_MESSAGE: {
      let pe;
      if (lo[19] === MEMO_CACHE_SENTINEL)
        ((pe = e(ToolResultRow, {
          height: 1,
          children: r(t, {
            color: "error",
            children: [
              REQUEST_TIMED_OUT_MESSAGE,
              process.env.API_TIMEOUT_MS &&
                r(N, {
                  children: [
                    " ",
                    "(API_TIMEOUT_MS=",
                    process.env.API_TIMEOUT_MS,
                    "ms, try increasing it)",
                  ],
                }),
            ],
          }),
        })),
          (lo[19] = pe));
      else pe = lo[19];
      return pe;
    }
    case OPUS_HIGH_LOAD_MESSAGE: {
      let pe;
      if (lo[20] === MEMO_CACHE_SENTINEL)
        ((pe = e(t, {
          color: "error",
          children: "We are experiencing high demand for Opus 4.",
        })),
          (lo[20] = pe));
      else pe = lo[20];
      let Po;
      if (lo[21] === MEMO_CACHE_SENTINEL)
        ((Po = e(ToolResultRow, {
          children: r(o, {
            flexDirection: "column",
            gap: 1,
            children: [
              pe,
              r(t, {
                children: [
                  "To continue immediately, use /model to switch to",
                  " ",
                  renderModelName(getDefaultSonnetModel()),
                  " and continue coding.",
                ],
              }),
            ],
          }),
        })),
          (lo[21] = Po));
      else Po = lo[21];
      return Po;
    }
    case FABLE_HIGH_LOAD_MESSAGE: {
      let pe;
      if (lo[22] === MEMO_CACHE_SENTINEL) ((pe = e(Yh, {})), (lo[22] = pe));
      else pe = lo[22];
      return pe;
    }
    case hA: {
      let pe;
      if (lo[23] === MEMO_CACHE_SENTINEL) ((pe = e(bf, {})), (lo[23] = pe));
      else pe = lo[23];
      return pe;
    }
    default: {
      if (Be.startsWith(`${PROMPT_TOO_LONG_MESSAGE} \xB7 `)) {
        let pe;
        if (lo[24] === MEMO_CACHE_SENTINEL) ((pe = get1MContextSuggestion("warning")), (lo[24] = pe));
        else pe = lo[24];
        let NO = pe;
        let Po;
        if (lo[25] !== Be)
          ((Po = e(ToolResultRow, {
            children: r(t, {
              color: "error",
              children: [
                Be,
                " \xB7 /clear to start fresh",
                NO ? ` \xB7 ${NO}` : "",
              ],
            }),
          })),
            (lo[25] = Be),
            (lo[26] = Po));
        else Po = lo[26];
        return Po;
      }
      if (isCredentialErrorMessage(Be)) {
        if (Ih) {
          let pe;
          if (lo[27] !== Be) ((pe = ei(Be)), (lo[27] = Be), (lo[28] = pe));
          else pe = lo[28];
          let Po;
          if (lo[29] !== Jo || lo[30] !== pe)
            ((Po = e(ao, { row: pe, addMargin: Jo })),
              (lo[29] = Jo),
              (lo[30] = pe),
              (lo[31] = Po));
          else Po = lo[31];
          return Po;
        }
        let pe;
        if (lo[32] !== Be)
          ((pe = e(ToolResultRow, { children: e(t, { color: "error", children: Be }) })),
            (lo[32] = Be),
            (lo[33] = pe));
        else pe = lo[33];
        return pe;
      }
      if (uz || isAuthenticationErrorMessage(Be) || wkn(Be)) {
        if (Ih) {
          let pe;
          if (lo[34] !== Be) ((pe = ei(Be)), (lo[34] = Be), (lo[35] = pe));
          else pe = lo[35];
          let Po;
          if (lo[36] !== Jo || lo[37] !== pe)
            ((Po = e(ao, { row: pe, addMargin: Jo })),
              (lo[36] = Jo),
              (lo[37] = pe),
              (lo[38] = Po));
          else Po = lo[38];
          return Po;
        }
        let pe;
        if (lo[39] !== Jo || lo[40] !== Be || lo[41] !== Oh)
          ((pe = e(Xh, { text: Be, verbose: Oh, addMargin: Jo })),
            (lo[39] = Jo),
            (lo[40] = Be),
            (lo[41] = Oh),
            (lo[42] = pe));
        else pe = lo[42];
        return pe;
      }
      const pe = Jo ? 1 : 0;
      let Po;
      if (lo[43] !== XS)
        ((Po =
          XS &&
          e(pd, {
            fromLeftEdge: !0,
            minWidth: 2,
            children: e(t, {
              "aria-label": "claude:",
              color: "text",
              children: CLAUDE_BULLET_GLYPH,
            }),
          })),
          (lo[43] = XS),
          (lo[44] = Po));
      else Po = lo[44];
      let Dh;
      if (lo[45] !== Be)
        ((Dh = e(o, {
          flexDirection: "column",
          children: e(js, { children: Be }),
        })),
          (lo[45] = Be),
          (lo[46] = Dh));
      else Dh = lo[46];
      let AO;
      if (lo[47] !== pe || lo[48] !== Po || lo[49] !== Dh)
        ((AO = r(o, {
          alignItems: "flex-start",
          flexDirection: "row",
          marginTop: pe,
          width: "100%",
          children: [Po, Dh],
        })),
          (lo[47] = pe),
          (lo[48] = Po),
          (lo[49] = Dh),
          (lo[50] = AO));
      else AO = lo[50];
      return AO;
    }
  }
}
function Yh() {
  let Bh = _(7),
    ZS = useMainLoopModel(),
    jh;
  if (Bh[0] !== ZS) ((jh = renderFableModelName(ZS)), (Bh[0] = ZS), (Bh[1] = jh));
  else jh = Bh[1];
  let Fh;
  if (Bh[2] !== jh)
    ((Fh = r(t, {
      color: "error",
      children: ["We are experiencing high demand for", " ", jh, "."],
    })),
      (Bh[2] = jh),
      (Bh[3] = Fh));
  else Fh = Bh[3];
  let EO;
  if (Bh[4] === MEMO_CACHE_SENTINEL)
    ((EO = r(t, {
      children: [
        "To continue immediately, use /model to switch to",
        " ",
        renderModelName(getDefaultSonnetModel()),
        " and continue coding.",
      ],
    })),
      (Bh[4] = EO));
  else EO = Bh[4];
  let LO;
  if (Bh[5] !== Fh)
    ((LO = e(ToolResultRow, {
      children: r(o, { flexDirection: "column", gap: 1, children: [Fh, EO] }),
    })),
      (Bh[5] = Fh),
      (Bh[6] = LO));
  else LO = Bh[6];
  return LO;
}
function Xh(cz) {
  let $n = _(23),
    { text: OO, verbose: oP, addMargin: dz } = cz,
    { columns: pz } = useTerminalSize(),
    hz = useIsInsideToolResultRow();
  const tP = OO === Bl ? `${Bl}: Please wait a moment and try again.` : OO;
  let vO, si;
  if ($n[0] !== tP || $n[1] !== oP) {
    let rP = tP.trim();
    si = !oP && rP.length > ip;
    vO = si ? rP.slice(0, ip) + "\u2026" : rP;
    (($n[0] = tP), ($n[1] = oP), ($n[2] = vO), ($n[3] = si));
  } else ((vO = $n[2]), (si = $n[3]));
  let Tu = vO;
  if (hz) {
    let ii;
    if ($n[4] !== Tu)
      ((ii = e(LinkifiedText, { color: "warning", children: Tu })),
        ($n[4] = Tu),
        ($n[5] = ii));
    else ii = $n[5];
    let Ta;
    if ($n[6] !== si) ((Ta = si && e(TranscriptExpandHint, {})), ($n[6] = si), ($n[7] = Ta));
    else Ta = $n[7];
    let yu;
    if ($n[8] !== ii || $n[9] !== Ta)
      ((yu = r(o, { flexDirection: "column", children: [ii, Ta] })),
        ($n[8] = ii),
        ($n[9] = Ta),
        ($n[10] = yu));
    else yu = $n[10];
    return yu;
  }
  const ii = dz ? 1 : 0;
  let Ta;
  if ($n[11] === MEMO_CACHE_SENTINEL)
    ((Ta = e(o, {
      minWidth: 2,
      children: e(t, {
        "aria-label": "error:",
        color: "warning",
        children: CLAUDE_BULLET_GLYPH,
      }),
    })),
      ($n[11] = Ta));
  else Ta = $n[11];
  const yu = pz - 10;
  let $h;
  if ($n[12] !== Tu)
    (($h = e(LinkifiedText, { color: "warning", children: Tu })),
      ($n[12] = Tu),
      ($n[13] = $h));
  else $h = $n[13];
  let Wh;
  if ($n[14] !== si) ((Wh = si && e(TranscriptExpandHint, {})), ($n[14] = si), ($n[15] = Wh));
  else Wh = $n[15];
  let qh;
  if ($n[16] !== yu || $n[17] !== $h || $n[18] !== Wh)
    ((qh = r(o, { flexDirection: "column", width: yu, children: [$h, Wh] })),
      ($n[16] = yu),
      ($n[17] = $h),
      ($n[18] = Wh),
      ($n[19] = qh));
  else qh = $n[19];
  let IO;
  if ($n[20] !== ii || $n[21] !== qh)
    ((IO = r(o, {
      flexDirection: "row",
      marginTop: ii,
      width: "100%",
      children: [Ta, qh],
    })),
      ($n[20] = ii),
      ($n[21] = qh),
      ($n[22] = IO));
  else IO = $n[22];
  return IO;
}
function ai(Sz) {
  let Qh = _(27),
    { param: Pz, addMargin: BO, isTranscriptMode: sP, verbose: iP } = Sz,
    { thinking: lP } = Pz,
    uP = BO === void 0 ? !1 : BO,
    Jh,
    Zh,
    mP,
    eT,
    oT,
    tT,
    rT,
    nT,
    sT,
    ap;
  if (Qh[0] !== uP || Qh[1] !== sP || Qh[2] !== lP || Qh[3] !== iP) {
    mP = EARLY_RETURN_SENTINEL;
    bb0: {
      let cP = stripMemoryTags(lP);
      if (!cP) {
        mP = null;
        break bb0;
      }
      let Cz = sP || iP;
      Zh = o;
      rT = "row";
      nT = uP ? 1 : 0;
      sT = "100%";
      if (Qh[14] === MEMO_CACHE_SENTINEL)
        ((ap = e(o, {
          minWidth: 2,
          children: e(t, {
            "aria-label": "thinking:",
            dimColor: !0,
            italic: !0,
            children: THEREFORE_GLYPH,
          }),
        })),
          (Qh[14] = ap));
      else ap = Qh[14];
      Jh = o;
      eT = "column";
      oT = 1;
      tT = Cz
        ? e(js, { dimColor: !0, children: cP.trim() })
        : e(t, {
            dimColor: !0,
            italic: !0,
            children: cP.trim().replace(/\s+/g, " "),
          });
    }
    ((Qh[0] = uP),
      (Qh[1] = sP),
      (Qh[2] = lP),
      (Qh[3] = iP),
      (Qh[4] = Jh),
      (Qh[5] = Zh),
      (Qh[6] = mP),
      (Qh[7] = eT),
      (Qh[8] = oT),
      (Qh[9] = tT),
      (Qh[10] = rT),
      (Qh[11] = nT),
      (Qh[12] = sT),
      (Qh[13] = ap));
  } else
    ((Jh = Qh[4]),
      (Zh = Qh[5]),
      (mP = Qh[6]),
      (eT = Qh[7]),
      (oT = Qh[8]),
      (tT = Qh[9]),
      (rT = Qh[10]),
      (nT = Qh[11]),
      (sT = Qh[12]),
      (ap = Qh[13]));
  if (mP !== EARLY_RETURN_SENTINEL) return mP;
  let iT;
  if (Qh[15] !== Jh || Qh[16] !== eT || Qh[17] !== oT || Qh[18] !== tT)
    ((iT = e(Jh, { flexDirection: eT, flexGrow: oT, children: tT })),
      (Qh[15] = Jh),
      (Qh[16] = eT),
      (Qh[17] = oT),
      (Qh[18] = tT),
      (Qh[19] = iT));
  else iT = Qh[19];
  let jO;
  if (
    Qh[20] !== Zh ||
    Qh[21] !== iT ||
    Qh[22] !== rT ||
    Qh[23] !== nT ||
    Qh[24] !== sT ||
    Qh[25] !== ap
  )
    ((jO = r(Zh, {
      flexDirection: rT,
      marginTop: nT,
      width: sT,
      children: [ap, iT],
    })),
      (Qh[20] = Zh),
      (Qh[21] = iT),
      (Qh[22] = rT),
      (Qh[23] = nT),
      (Qh[24] = sT),
      (Qh[25] = ap),
      (Qh[26] = jO));
  else jO = Qh[26];
  return jO;
}
F();
F();
import { inspect } from "util";
var dP = '{"code":"';
function m$n(l) {
  if (!l.startsWith(dP)) return "";
  let f = l.slice(dP.length),
    g = [];
  for (let T = 0; T < f.length; T++) {
    let y = f[T];
    if (y === '"') break;
    if (y !== "\\") {
      g.push(y);
      continue;
    }
    let R = f[T + 1];
    if (R === void 0) break;
    if ((T++, R === "n"))
      g.push(`
`);
    else if (R === "t") g.push("\t");
    else if (R === "r") g.push("\r");
    else if (R === "u") {
      let k = f.slice(T + 1, T + 5);
      if (k.length < 4) break;
      (g.push(String.fromCharCode(parseInt(k, 16))), (T += 4));
    } else g.push(R);
  }
  return g.join("");
}
function li(l, f, g) {
  if (l.length <= f + g + 1) return l.map((T) => ({ line: T }));
  return [
    ...l.slice(0, f).map((T) => ({ line: T })),
    { line: `\u2026 ${l.length - f - g} lines \u2026`, folded: !0 },
    ...l.slice(-g).map((T) => ({ line: T })),
  ];
}
function aT(l) {
  let f = new Set(),
    g = new Map();
  for (let T of l) {
    if (f.has(T.data.toolUseId)) continue;
    (f.add(T.data.toolUseId),
      g.set(T.data.toolName, (g.get(T.data.toolName) ?? 0) + 1));
  }
  return [...g].map(([T, y]) => `${y} ${pluralize(y, T, FO(T))}`).join(", ");
}
function FO(l) {
  return /(?:s|sh|ch|x|z)$/i.test(l) ? `${l}es` : `${l}s`;
}
function lT(l) {
  if (!l || typeof l !== "object") return "";
  let f = Object.values(l).find((g) => typeof g === "string");
  if (typeof f !== "string") return "";
  return truncateToWidth(f.replace(/\s+/g, " "), 40);
}
function uT(l) {
  let f = l[0]?.timestamp,
    g = l.at(-1)?.timestamp;
  if (!f || !g) return "";
  let T = Date.parse(g) - Date.parse(f);
  return Number.isFinite(T) && T >= 0 ? formatSecondsShort(T) : "";
}
function pv(tK) {
  return tK.data.type === "repl_tool_call";
}
function fv() {
  return Date.now();
}
function gv(lK) {
  return lK.data.phase === "start";
}
function hv(cK) {
  return { line: cK };
}
function Rv(gK, hK) {
  return r(t, { children: [Ra, gK.line] }, hK);
}
function Mv(RK, MK) {
  return r(t, { color: "error", children: [Ra, RK.line] }, MK);
}
var Ra = "    ",
  wP = "\u258C";
function mp(mT) {
  let Xz = _(2);
  if (!isReplVerboseEnabled() || mT.param.name !== REPL_TOOL_NAME) {
    return null;
  }
  let $O;
  if (Xz[0] !== mT) (($O = e(DT, { ...mT })), (Xz[0] = mT), (Xz[1] = $O));
  else $O = Xz[1];
  return $O;
}
function DT(Qz) {
  let Wn = _(33),
    {
      param: WO,
      isQueued: cT,
      isResolved: lp,
      isError: dT,
      shouldAnimate: pP,
      shouldShowDot: fP,
      addMargin: eK,
      progressMessagesForMessage: gP,
      resultMsg: qO,
    } = Qz,
    Zo = lp ? (dT ? "failed" : "done") : cT ? "writing" : "running",
    HO;
  if (Wn[0] !== gP) ((HO = gP.filter(pv)), (Wn[0] = gP), (Wn[1] = HO));
  else HO = Wn[1];
  let hP = HO;
  HT(Zo, lp);
  let [oK] = d(fv),
    TP = useElapsedDuration(oK, Zo === "running", 200),
    yP = typeof WO.input.code === "string" ? WO.input.code : "",
    Gn = qO?.type === "user" ? qO.toolUseResult : void 0;
  const RP = eK ? 1 : 0;
  let pT;
  if (
    Wn[2] !== dT ||
    Wn[3] !== cT ||
    Wn[4] !== lp ||
    Wn[5] !== pP ||
    Wn[6] !== fP
  )
    ((pT =
      fP &&
      (cT
        ? e(o, { minWidth: 2, children: e(t, { dimColor: !0, children: CLAUDE_BULLET_GLYPH }) })
        : e(Ho, { shouldAnimate: pP, isUnresolved: !lp, isError: dT }))),
      (Wn[2] = dT),
      (Wn[3] = cT),
      (Wn[4] = lp),
      (Wn[5] = pP),
      (Wn[6] = fP),
      (Wn[7] = pT));
  else pT = Wn[7];
  let GO;
  if (Wn[8] === MEMO_CACHE_SENTINEL) ((GO = e(t, { bold: !0, children: "REPL" })), (Wn[8] = GO));
  else GO = Wn[8];
  const MP = Gn?.error;
  let fT;
  if (Wn[9] !== TP || Wn[10] !== hP || Wn[11] !== Zo || Wn[12] !== MP)
    ((fT = e(jT, { state: Zo, elapsed: TP, progress: hP, error: MP })),
      (Wn[9] = TP),
      (Wn[10] = hP),
      (Wn[11] = Zo),
      (Wn[12] = MP),
      (Wn[13] = fT));
  else fT = Wn[13];
  let gT;
  if (Wn[14] !== pT || Wn[15] !== fT)
    ((gT = r(o, { flexDirection: "row", children: [pT, GO, fT] })),
      (Wn[14] = pT),
      (Wn[15] = fT),
      (Wn[16] = gT));
  else gT = Wn[16];
  const kP = Zo === "done" || Zo === "failed";
  let hT;
  if (Wn[17] !== yP || Wn[18] !== Zo || Wn[19] !== kP)
    ((hT = e($T, { code: yP, state: Zo, fold: kP })),
      (Wn[17] = yP),
      (Wn[18] = Zo),
      (Wn[19] = kP),
      (Wn[20] = hT));
  else hT = Wn[20];
  let TT;
  if (Wn[21] !== Gn || Wn[22] !== Zo)
    ((TT = Zo === "done" && Gn && e(WT, { output: Gn })),
      (Wn[21] = Gn),
      (Wn[22] = Zo),
      (Wn[23] = TT));
  else TT = Wn[23];
  let yT;
  if (Wn[24] !== Gn || Wn[25] !== Zo)
    ((yT = Zo === "failed" && Gn?.error && e(qT, { error: Gn.error })),
      (Wn[24] = Gn),
      (Wn[25] = Zo),
      (Wn[26] = yT));
  else yT = Wn[26];
  let zO;
  if (
    Wn[27] !== TT ||
    Wn[28] !== yT ||
    Wn[29] !== RP ||
    Wn[30] !== gT ||
    Wn[31] !== hT
  )
    ((zO = r(o, {
      flexDirection: "column",
      marginTop: RP,
      marginBottom: 1,
      width: "100%",
      children: [gT, hT, TT, yT],
    })),
      (Wn[27] = TT),
      (Wn[28] = yT),
      (Wn[29] = RP),
      (Wn[30] = gT),
      (Wn[31] = hT),
      (Wn[32] = zO));
  else zO = Wn[32];
  return zO;
}
function jT(rK) {
  let dn = _(23),
    { state: nK, elapsed: bP, progress: zn, error: RT } = rK,
    KO;
  if (dn[0] !== zn) ((KO = uT(zn)), (dn[0] = zn), (dn[1] = KO));
  else KO = dn[1];
  let Ru = KO;
  switch (nK) {
    case "writing": {
      let Yt;
      if (dn[2] === MEMO_CACHE_SENTINEL)
        ((Yt = e(t, { dimColor: !0, children: "(Writing\u2026)" })),
          (dn[2] = Yt));
      else Yt = dn[2];
      return Yt;
    }
    case "running": {
      let up, Yt;
      if (dn[3] !== zn)
        ((up = zn.findLast(gv)),
          (Yt = up ? lT(up.data.toolInput) : ""),
          (dn[3] = zn),
          (dn[4] = up),
          (dn[5] = Yt));
      else ((up = dn[4]), (Yt = dn[5]));
      let sK = Yt;
      let xP = up
        ? `Running ${up.data.toolName}(${sK})\u2026`
        : "Running\u2026";
      let Kn;
      if (dn[6] !== bP || dn[7] !== xP)
        ((Kn = r(t, { dimColor: !0, children: ["(", xP, " ", bP, ")"] })),
          (dn[6] = bP),
          (dn[7] = xP),
          (dn[8] = Kn));
      else Kn = dn[8];
      return Kn;
    }
    case "done": {
      let Yt;
      if (dn[9] !== zn) ((Yt = aT(zn)), (dn[9] = zn), (dn[10] = Yt));
      else Yt = dn[10];
      let YO = Yt;
      const Kn = YO ? `Ran ${YO}` : "Done";
      let Mu;
      if (dn[11] !== Ru || dn[12] !== Kn)
        ((Mu = [Kn, Ru].filter(Boolean)),
          (dn[11] = Ru),
          (dn[12] = Kn),
          (dn[13] = Mu));
      else Mu = dn[13];
      let iK = Mu;
      const xu = iK.join(" \xB7 ");
      let VO;
      if (dn[14] !== xu)
        ((VO = r(t, { dimColor: !0, children: ["(", xu, ")"] })),
          (dn[14] = xu),
          (dn[15] = VO));
      else VO = dn[15];
      return VO;
    }
    case "failed": {
      let Yt;
      if (dn[16] !== RT)
        ((Yt = (RT ? truncateToWidth(beforeFirst(RT, ":"), 40) : "Failed") || "Failed"),
          (dn[16] = RT),
          (dn[17] = Yt));
      else Yt = dn[17];
      let Kn;
      if (dn[18] !== Ru || dn[19] !== Yt)
        ((Kn = [Yt, Ru].filter(Boolean)),
          (dn[18] = Ru),
          (dn[19] = Yt),
          (dn[20] = Kn));
      else Kn = dn[20];
      let aK = Kn;
      const Mu = aK.join(" \xB7 ");
      let xu;
      if (dn[21] !== Mu)
        ((xu = r(t, { color: "error", children: ["(", Mu, ")"] })),
          (dn[21] = Mu),
          (dn[22] = xu));
      else xu = dn[22];
      return xu;
    }
  }
}
function $T(uK) {
  let XO = _(12),
    { code: _P, state: MT, fold: SP } = uK,
    kT,
    bT,
    xT,
    ST;
  if (XO[0] !== _P || XO[1] !== SP || XO[2] !== MT) {
    let QO = _P.split(`
`);
    let JO = SP ? li(QO, 3, 2) : QO.map(hv);
    let mK = MT !== "running";
    kT = o;
    bT = "column";
    xT = 1;
    ST = JO.map((ZO, ev) =>
      r(
        o,
        {
          flexDirection: "row",
          children: [
            e(t, { dimColor: !0, children: Ra }),
            e(t, { dimColor: mK || ZO.folded, children: ZO.line }),
            MT === "writing" && ev === JO.length - 1 && e(t, { children: wP }),
          ],
        },
        ev,
      ),
    );
    ((XO[0] = _P),
      (XO[1] = SP),
      (XO[2] = MT),
      (XO[3] = kT),
      (XO[4] = bT),
      (XO[5] = xT),
      (XO[6] = ST));
  } else ((kT = XO[3]), (bT = XO[4]), (xT = XO[5]), (ST = XO[6]));
  let ov;
  if (XO[7] !== kT || XO[8] !== bT || XO[9] !== xT || XO[10] !== ST)
    ((ov = e(kT, { flexDirection: bT, marginTop: xT, children: ST })),
      (XO[7] = kT),
      (XO[8] = bT),
      (XO[9] = xT),
      (XO[10] = ST),
      (XO[11] = ov));
  else ov = XO[11];
  return ov;
}
function WT(dK) {
  let tv = _(10),
    { output: PP } = dK,
    PT,
    CT,
    wT,
    NT;
  if (tv[0] !== PP.result) {
    let pK = UP(PP.result);
    let fK = li(
      pK.split(`
`),
      6,
      2,
    );
    PT = o;
    CT = "column";
    wT = 1;
    NT = fK.map(Rv);
    ((tv[0] = PP.result),
      (tv[1] = PT),
      (tv[2] = CT),
      (tv[3] = wT),
      (tv[4] = NT));
  } else ((PT = tv[1]), (CT = tv[2]), (wT = tv[3]), (NT = tv[4]));
  let rv;
  if (tv[5] !== PT || tv[6] !== CT || tv[7] !== wT || tv[8] !== NT)
    ((rv = e(PT, { flexDirection: CT, marginTop: wT, children: NT })),
      (tv[5] = PT),
      (tv[6] = CT),
      (tv[7] = wT),
      (tv[8] = NT),
      (tv[9] = rv));
  else rv = tv[9];
  return rv;
}
function qT(TK) {
  let nv = _(10),
    { error: CP } = TK,
    AT,
    ET,
    OT,
    vT;
  if (nv[0] !== CP) {
    let yK = li(
      CP.split(`
`),
      8,
      2,
    );
    AT = o;
    ET = "column";
    OT = 1;
    vT = yK.map(Mv);
    ((nv[0] = CP), (nv[1] = AT), (nv[2] = ET), (nv[3] = OT), (nv[4] = vT));
  } else ((AT = nv[1]), (ET = nv[2]), (OT = nv[3]), (vT = nv[4]));
  let sv;
  if (nv[5] !== AT || nv[6] !== ET || nv[7] !== OT || nv[8] !== vT)
    ((sv = e(AT, { flexDirection: ET, marginTop: OT, children: vT })),
      (nv[5] = AT),
      (nv[6] = ET),
      (nv[7] = OT),
      (nv[8] = vT),
      (nv[9] = sv));
  else sv = nv[9];
  return sv;
}
function UP(l) {
  if (typeof l === "string") return l;
  try {
    return inspect(l, { colors: !1, depth: 3, customInspect: !1 });
  } catch {
    return "[non-serializable value]";
  }
}
function HT(_u, kK) {
  let iv = _(5),
    [IT] = d(kK),
    av;
  if (iv[0] === MEMO_CACHE_SENTINEL) ((av = new Set()), (iv[0] = av));
  else av = iv[0];
  let lv = C(av),
    mv,
    cv;
  if (iv[1] !== _u || iv[2] !== IT)
    ((mv = () => {
      if (IT || lv.current.has(_u)) {
        return;
      }
      (lv.current.add(_u), logEvent("tengu_repl_verbose_render", { state: fromEnum(_u) }));
    }),
      (cv = [IT, _u]),
      (iv[1] = _u),
      (iv[2] = IT),
      (iv[3] = mv),
      (iv[4] = cv));
  else ((mv = iv[3]), (cv = iv[4]));
  E(mv, cv);
}
function GT(l) {
  return useAppStateSelectorUnchecked((f) => f.classifierApprovals.checking.has(l)) ?? !1;
}
F();
class Yz extends Aln {
  constructor(l) {
    super(l);
    this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(l, f) {
    logError(l);
    try {
      this.props.onError?.(l, f);
    } catch {}
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
function xa(uY) {
  let Vn = _(22),
    { hookEvent: cr, lookups: zT, toolUseID: KT, isTranscriptMode: mY } = uY,
    kv;
  if (Vn[0] !== cr || Vn[1] !== zT.inProgressHookCounts || Vn[2] !== KT)
    ((kv = zT.inProgressHookCounts.get(KT)?.get(cr) ?? 0),
      (Vn[0] = cr),
      (Vn[1] = zT.inProgressHookCounts),
      (Vn[2] = KT),
      (Vn[3] = kv));
  else kv = Vn[3];
  let Ma = kv,
    cY = zT.resolvedHookCounts.get(KT)?.get(cr) ?? 0;
  if (Ma === 0) {
    return null;
  }
  if (cr === "PreToolUse" || cr === "PostToolUse") {
    if (mY) {
      let ka;
      if (Vn[4] !== Ma)
        ((ka = r(t, { dimColor: !0, children: [Ma, " "] })),
          (Vn[4] = Ma),
          (Vn[5] = ka));
      else ka = Vn[5];
      let Xn;
      if (Vn[6] !== cr)
        ((Xn = e(t, { dimColor: !0, bold: !0, children: cr })),
          (Vn[6] = cr),
          (Vn[7] = Xn));
      else Xn = Vn[7];
      const ba = Ma === 1 ? " hook" : " hooks";
      let Qn;
      if (Vn[8] !== ba)
        ((Qn = r(t, { dimColor: !0, children: [ba, " ran"] })),
          (Vn[8] = ba),
          (Vn[9] = Qn));
      else Qn = Vn[9];
      let cp;
      if (Vn[10] !== ka || Vn[11] !== Xn || Vn[12] !== Qn)
        ((cp = e(ToolResultRow, {
          children: r(o, { flexDirection: "row", children: [ka, Xn, Qn] }),
        })),
          (Vn[10] = ka),
          (Vn[11] = Xn),
          (Vn[12] = Qn),
          (Vn[13] = cp));
      else cp = Vn[13];
      return cp;
    }
    return null;
  }
  if (cY === Ma) {
    return null;
  }
  let ka;
  if (Vn[14] === MEMO_CACHE_SENTINEL)
    ((ka = e(t, { dimColor: !0, children: "Running " })), (Vn[14] = ka));
  else ka = Vn[14];
  let Xn;
  if (Vn[15] !== cr)
    ((Xn = e(t, { dimColor: !0, bold: !0, children: cr })),
      (Vn[15] = cr),
      (Vn[16] = Xn));
  else Xn = Vn[16];
  const ba = Ma === 1 ? " hook\u2026" : " hooks\u2026";
  let Qn;
  if (Vn[17] !== ba)
    ((Qn = e(t, { dimColor: !0, children: ba })), (Vn[17] = ba), (Vn[18] = Qn));
  else Qn = Vn[18];
  let cp;
  if (Vn[19] !== Xn || Vn[20] !== Qn)
    ((cp = e(ToolResultRow, {
      children: r(o, { flexDirection: "row", children: [ka, Xn, Qn] }),
    })),
      (Vn[19] = Xn),
      (Vn[20] = Qn),
      (Vn[21] = cp));
  else cp = Vn[21];
  return cp;
}
function ui(yY) {
  let YT = _(7),
    { content: NP, addMargin: RY } = yY;
  const AP = RY ? 1 : 0;
  let bv;
  if (YT[0] === MEMO_CACHE_SENTINEL)
    ((bv = e(o, {
      minWidth: 2,
      children: e(t, { "aria-hidden": !0, dimColor: !0, children: REFERENCE_MARK_GLYPH }),
    })),
      (YT[0] = bv));
  else bv = YT[0];
  let xv;
  if (YT[1] === MEMO_CACHE_SENTINEL)
    ((xv = r(t, { dimColor: !0, bold: !0, children: ["recap:", " "] })),
      (YT[1] = xv));
  else xv = YT[1];
  let VT;
  if (YT[2] !== NP)
    ((VT = r(t, {
      children: [xv, e(t, { dimColor: !0, italic: !0, children: NP })],
    })),
      (YT[2] = NP),
      (YT[3] = VT));
  else VT = YT[3];
  let _v;
  if (YT[4] !== AP || YT[5] !== VT)
    ((_v = r(o, {
      flexDirection: "row",
      marginTop: AP,
      width: "100%",
      children: [bv, VT],
    })),
      (YT[4] = AP),
      (YT[5] = VT),
      (YT[6] = _v));
  else _v = YT[6];
  return _v;
}
F();
function JY(t0) {
  let [k, v] = t0;
  return `${k}: ${v}`;
}
function ZY(t0) {
  let [k_0] = t0;
  return te(k_0);
}
var Pv = 1e4;
function XT(l) {
  let f = l.at(-1);
  if (!f?.data)
    return e(ToolResultRow, {
      height: 1,
      children: e(t, { dimColor: !0, children: "Running\u2026" }),
    });
  let { progress: g, total: T } = f.data,
    y = rg(f.data.progressMessage);
  if (g === void 0)
    return e(ToolResultRow, {
      height: 1,
      children: e(t, { dimColor: !0, children: "Running\u2026" }),
    });
  if (T !== void 0 && T > 0) {
    let R = Math.min(1, Math.max(0, g / T)),
      k = Math.round(R * 100);
    return e(ToolResultRow, {
      children: r(o, {
        flexDirection: "column",
        children: [
          y && e(t, { dimColor: !0, children: y }),
          r(o, {
            flexDirection: "row",
            gap: 1,
            children: [
              e(ProgressBar, { ratio: R, width: 20 }),
              r(t, { dimColor: !0, children: [k, "%"] }),
            ],
          }),
        ],
      }),
    });
  }
  return e(ToolResultRow, {
    height: 1,
    children: e(t, { dimColor: !0, children: y ?? `Processing\u2026 ${g}` }),
  });
}
function Pu(l, f, { verbose: g, input: T }) {
  let y = l;
  if (!g) {
    let R = Uv(y, T);
    if (R !== null)
      return e(ToolResultRow, {
        height: 1,
        children: r(t, {
          children: [
            "Sent a message to",
            " ",
            e(jr, { children: formatHyperlink(R.url, R.channel) }),
          ],
        }),
      });
  }
  return QT(y, g);
}
function QT(l, f) {
  let g = estimateContentTokens(l),
    y =
      g > Pv
        ? `${figures.warning} Large MCP response (~${formatNumber(g)} tokens), this can fill up context quickly`
        : null,
    R;
  if (Array.isArray(l)) {
    let k = l.map((S, P) => {
      if (S.type === "image")
        return e(
          o,
          {
            justifyContent: "space-between",
            overflowX: "hidden",
            width: "100%",
            children: e(ToolResultRow, {
              height: 1,
              children: e(t, { children: "[Image]" }),
            }),
          },
          P,
        );
      return e(vP, { item: S, verbose: f }, P);
    });
    R = e(o, { flexDirection: "column", width: "100%", children: k });
  } else if (!l)
    R = e(o, {
      justifyContent: "space-between",
      overflowX: "hidden",
      width: "100%",
      children: e(ToolResultRow, {
        height: 1,
        children: e(t, { dimColor: !0, children: "(No content)" }),
      }),
    });
  else R = e(ToolResultContent, { content: l, verbose: f });
  if (y)
    return r(o, {
      flexDirection: "column",
      children: [
        e(ToolResultRow, { height: 1, children: e(t, { color: "warning", children: y }) }),
        R,
      ],
    });
  return R;
}
function vP(XY) {
  let QY = _(3),
    { item: dp, verbose: EP } = XY,
    LP =
      dp.type === "text" &&
      "text" in dp &&
      dp.text !== null &&
      dp.text !== void 0
        ? String(dp.text)
        : "",
    Sv;
  if (QY[0] !== LP || QY[1] !== EP)
    ((Sv = e(ToolResultContent, { content: LP, verbose: EP })),
      (QY[0] = LP),
      (QY[1] = EP),
      (QY[2] = Sv));
  else Sv = QY[2];
  return Sv;
}
function Cv(l, { maxChars: f, maxKeys: g }) {
  let T = l.trim();
  if (T.length === 0 || T.length > f || T[0] !== "{") return null;
  let y;
  try {
    y = z(T);
  } catch {
    return null;
  }
  if (y === null || typeof y !== "object" || Array.isArray(y)) return null;
  let R = Object.entries(y);
  if (R.length === 0 || R.length > g) return null;
  return R;
}
var wv = /^https:\/\/[a-z0-9-]+\.slack\.com\/archives\/([A-Z0-9]+)\/p\d+$/;
function Uv(l, f) {
  let g = l;
  if (Array.isArray(l)) {
    let A = l.find((O) => O.type === "text");
    g = A && "text" in A ? A.text : void 0;
  }
  if (typeof g !== "string" || !g.includes('"message_link"')) return null;
  let y = Cv(g, { maxChars: 2000, maxKeys: 6 })?.find(
    ([A]) => A === "message_link",
  )?.[1];
  if (typeof y !== "string") return null;
  let R = wv.exec(y);
  if (!R) return null;
  let k = f,
    S = k?.channel_id ?? k?.channel ?? R[1],
    P = (typeof S === "string" ? stripControlChars(S) : "") || "slack";
  return { channel: P.startsWith("#") ? P : `#${P}`, url: y };
}
var Ev = 256,
  IP = /^[a-zA-Z0-9_-]{1,128}$/;
function Zae(l, f) {
  if (!isRemoteActive() || !isViolinWoodEnabledCached()) return;
  let g = parseMcpToolName(l);
  if (!g?.toolName || !IP.test(g.serverName) || !IP.test(g.toolName)) return;
  return Ov.of(f)(l, g.serverName, g.toolName);
}
var Lv = createLazyValue(() =>
    $e([
      MCP_TOOL_OUTPUT_SCHEMA(),
      c({ content: $e([s(), v(c({ type: s() }).passthrough())]) }).transform(
        (l) => l.content,
      ),
    ]),
  ),
  Ov = new j(() => xA(vv, (l) => l, Ev));
function vv(l, f, g) {
  let T = () => {
    throw Error(
      "Display-only MCP tool invoked \u2014 it exists only for transcript rendering",
    );
  };
  return {
    ...MCP_TOOL_BASE,
    name: l,
    mcpInfo: { serverName: f, toolName: g },
    isEnabled: () => !1,
    outputSchema: Lv(),
    isResultTruncated: (y, R) => {
      let k = Iv(y);
      return MCP_TOOL_BASE.isResultTruncated(k, R) || MCP_TOOL_BASE.isResultTruncated(FP(k), R);
    },
    renderToolResultMessage: (y, R, { verbose: k }) => QT(FP(y), k),
    userFacingName: () => `${f} - ${g} (MCP)`,
    description: async () => T(),
    prompt: async () => T(),
    call: async () => T(),
    checkPermissions: async () => T(),
  };
}
function Iv(l) {
  let f =
    typeof l === "object" && l !== null && !Array.isArray(l) && "content" in l
      ? l.content
      : l;
  if (typeof f === "string") return f;
  return Array.isArray(f) && f.every((g) => typeof g === "object" && g !== null)
    ? f
    : void 0;
}
var Dv =
    /\x1b\]8;[^;\x07\n\r\x18\x1a\x1b]*;([^\x07\n\r\x18\x1a\x1b]*)(?:\x07|\x1b\\)|\x1b\[[0-?]*[ -/]*[@-~]|\x1b[\]P_X^][^\x07\n\r\x18\x1a\x1b]*(?:\x07|\x1b\\)/g,
  Bv = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g,
  jv = /\\u001b/gi,
  Fv = /\\u00(?:0[0-8b-f]|1[0-9a-f]|7f|[89][0-9a-f])/gi;
function DP(l) {
  let f = "",
    g = () => (f ? ` <${f}>` : "");
  return (
    l.replace(Dv, (y, R) => {
      if (R === void 0) return "";
      let k = g();
      return ((f = R), k);
    }) + g()
  )
    .replace(Bv, "")
    .replace(jv, "\\u241b")
    .replace(Fv, "\\u2426");
}
function FP(l) {
  if (typeof l === "string") return DP(l);
  return l?.map((f) =>
    f.type === "text" && "text" in f
      ? { type: "text", text: DP(String(f.text ?? "")) }
      : f,
  );
}
var $v = "https://clau.de/chrome/tab/";
function $P(l) {
  if (!Tf()) return null;
  if (typeof l !== "object" || l === null || !("tabId" in l)) return null;
  let f =
    typeof l.tabId === "number"
      ? l.tabId
      : typeof l.tabId === "string"
        ? parseInt(l.tabId, 10)
        : NaN;
  if (isNaN(f)) return null;
  let g = `${$v}${f}`;
  return r(t, {
    children: [
      " ",
      e(ct, {
        url: g,
        children: e(t, { color: "subtle", children: "[View Tab]" }),
      }),
    ],
  });
}
function Wv(l, f, g) {
  if (g) return Pu(l, [], { verbose: g });
  let T = null;
  switch (f) {
    case "navigate":
      T = "Navigation completed";
      break;
    case "tabs_create_mcp":
      T = "Tab created";
      break;
    case "tabs_context_mcp":
      T = "Tabs read";
      break;
    case "form_input":
      T = "Input completed";
      break;
    case "computer":
      T = "Action completed";
      break;
    case "resize_window":
      T = "Window resized";
      break;
    case "find":
      T = "Search completed";
      break;
    case "gif_creator":
      T = "GIF action completed";
      break;
    case "read_console_messages":
      T = "Console messages retrieved";
      break;
    case "read_network_requests":
      T = "Network requests retrieved";
      break;
    case "shortcuts_list":
      T = "Shortcuts retrieved";
      break;
    case "shortcuts_execute":
      T = "Shortcut executed";
      break;
    case "javascript_tool":
      T = "Script executed";
      break;
    case "read_page":
      T = "Page read";
      break;
    case "upload_image":
      T = "Image uploaded";
      break;
    case "get_page_text":
      T = "Page text retrieved";
      break;
    case "update_plan":
      T = "Plan updated";
      break;
  }
  if (T)
    return e(ToolResultRow, { height: 1, children: e(t, { dimColor: !0, children: T }) });
  return null;
}
function WP(l) {
  return (f, g, { verbose: T }) => {
    if (typeof f !== "object" || f === null) return null;
    return Wv(f, l, T);
  };
}
var qv = {
  screenshot: "Captured",
  zoom: "Captured",
  request_access: "Access updated",
  left_click: "Clicked",
  right_click: "Clicked",
  middle_click: "Clicked",
  double_click: "Clicked",
  triple_click: "Clicked",
  type: "Typed",
  key: "Pressed",
  hold_key: "Pressed",
  scroll: "Scrolled",
  left_click_drag: "Dragged",
  open_application: "Opened",
};
function qP(l) {
  return (f, g, { verbose: T }) => {
    if (T || typeof f !== "object" || f === null) return null;
    let y = qv[l];
    if (!y) return null;
    return e(ToolResultRow, { height: 1, children: e(t, { dimColor: !0, children: y }) });
  };
}
function HP(l) {
  let f = getSlackChannelDisplay(l);
  if (f === null) return null;
  return e(o, {
    flexWrap: "nowrap",
    marginLeft: 1,
    children: e(jr, { children: f.url && Tf() ? formatHyperlink(f.url, f.label) : f.label }),
  });
}
function _a(OV) {
  let Hv = _(3),
    { plan: GP } = OV,
    Gv;
  if (Hv[0] === MEMO_CACHE_SENTINEL)
    ((Gv = e(t, { color: "subtle", children: "User rejected Claude's plan:" })),
      (Hv[0] = Gv));
  else Gv = Hv[0];
  let zv;
  if (Hv[1] !== GP)
    ((zv = e(ToolResultRow, {
      children: r(o, {
        flexDirection: "column",
        children: [
          Gv,
          e(o, {
            borderStyle: "round",
            borderColor: "planMode",
            paddingX: 1,
            overflow: "hidden",
            children: e(js, { children: GP }),
          }),
        ],
      }),
    })),
      (Hv[1] = GP),
      (Hv[2] = zv));
  else zv = Hv[2];
  return zv;
}
function zP(l, f, { theme: g }) {
  let { plan: T, filePath: y } = l,
    R = !T || T.trim() === "",
    k = y ? Ao(y) : "",
    S = l.awaitingLeaderApproval;
  if (R)
    return e(o, {
      flexDirection: "column",
      marginTop: 1,
      children: r(o, {
        flexDirection: "row",
        children: [
          e(t, { color: getPermissionModeColor("plan"), children: CLAUDE_BULLET_GLYPH }),
          e(t, { children: " Exited plan mode" }),
        ],
      }),
    });
  if (S)
    return r(o, {
      flexDirection: "column",
      marginTop: 1,
      children: [
        r(o, {
          flexDirection: "row",
          children: [
            e(t, { color: getPermissionModeColor("plan"), children: CLAUDE_BULLET_GLYPH }),
            e(t, { children: " Plan submitted for team lead approval" }),
          ],
        }),
        e(ToolResultRow, {
          children: r(o, {
            flexDirection: "column",
            children: [
              y && r(t, { dimColor: !0, children: ["Plan file: ", k] }),
              e(t, {
                dimColor: !0,
                children: "Waiting for team lead to review and approve...",
              }),
            ],
          }),
        }),
      ],
    });
  return r(o, {
    flexDirection: "column",
    marginTop: 1,
    children: [
      r(o, {
        flexDirection: "row",
        children: [
          e(t, { color: getPermissionModeColor("plan"), children: CLAUDE_BULLET_GLYPH }),
          e(t, { children: " User approved Claude's plan" }),
        ],
      }),
      e(ToolResultRow, {
        children: r(o, {
          flexDirection: "column",
          children: [
            y &&
              r(t, {
                dimColor: !0,
                children: ["Plan saved to: ", k, " \xB7 /plan to edit"],
              }),
            e(js, { children: T }),
          ],
        }),
      }),
    ],
  });
}
function KP({ plan: l }, { theme: f }) {
  let g = l ?? getPlan() ?? "No plan found";
  return e(o, { flexDirection: "column", children: e(_a, { plan: g }) });
}
function gp(ZV) {
  let fn = _(26),
    {
      count: pn,
      countLabel: JT,
      secondaryCount: Cu,
      secondaryLabel: fp,
      content: YP,
      verbose: eX,
    } = ZV,
    ZT;
  if (fn[0] !== pn)
    ((ZT = r(t, { bold: !0, children: [pn, " "] })),
      (fn[0] = pn),
      (fn[1] = ZT));
  else ZT = fn[1];
  let ey;
  if (fn[2] !== pn || fn[3] !== JT)
    ((ey = pn === 0 || pn > 1 ? JT : JT.slice(0, -1)),
      (fn[2] = pn),
      (fn[3] = JT),
      (fn[4] = ey));
  else ey = fn[4];
  let Yv;
  if (fn[5] !== ZT || fn[6] !== ey)
    ((Yv = r(t, { children: ["Found ", ZT, ey] })),
      (fn[5] = ZT),
      (fn[6] = ey),
      (fn[7] = Yv));
  else Yv = fn[7];
  let wu = Yv,
    Vv;
  if (fn[8] !== Cu || fn[9] !== fp)
    ((Vv =
      Cu !== void 0 && fp
        ? r(t, {
            children: [
              " ",
              "across ",
              r(t, { bold: !0, children: [Cu, " "] }),
              Cu === 0 || Cu > 1 ? fp : fp.slice(0, -1),
            ],
          })
        : null),
      (fn[8] = Cu),
      (fn[9] = fp),
      (fn[10] = Vv));
  else Vv = fn[10];
  let Uu = Vv;
  if (eX) {
    let Sa;
    if (fn[11] === MEMO_CACHE_SENTINEL)
      ((Sa = e(t, { dimColor: !0, children: "\xA0\xA0\u23BF \xA0" })),
        (fn[11] = Sa));
    else Sa = fn[11];
    let Pa;
    if (fn[12] !== wu || fn[13] !== Uu)
      ((Pa = e(o, {
        flexDirection: "row",
        children: r(t, { children: [Sa, wu, Uu] }),
      })),
        (fn[12] = wu),
        (fn[13] = Uu),
        (fn[14] = Pa));
    else Pa = fn[14];
    let oy;
    if (fn[15] !== YP)
      ((oy = e(o, { marginLeft: 5, children: e(t, { children: YP }) })),
        (fn[15] = YP),
        (fn[16] = oy));
    else oy = fn[16];
    let Xv;
    if (fn[17] !== Pa || fn[18] !== oy)
      ((Xv = r(o, { flexDirection: "column", children: [Pa, oy] })),
        (fn[17] = Pa),
        (fn[18] = oy),
        (fn[19] = Xv));
    else Xv = fn[19];
    return Xv;
  }
  let Sa;
  if (fn[20] !== pn) ((Sa = pn > 0 && e(TranscriptExpandHint, {})), (fn[20] = pn), (fn[21] = Sa));
  else Sa = fn[21];
  let Pa;
  if (fn[22] !== wu || fn[23] !== Uu || fn[24] !== Sa)
    ((Pa = e(ToolResultRow, {
      height: 1,
      children: r(t, { children: [wu, Uu, " ", Sa] }),
    })),
      (fn[22] = wu),
      (fn[23] = Uu),
      (fn[24] = Sa),
      (fn[25] = Pa));
  else Pa = fn[25];
  return Pa;
}
function ty(l, { verbose: f }) {
  if (!f && typeof l === "string" && extractTagContent(l, "tool_use_error")) {
    if (extractTagContent(l, "tool_use_error")?.includes(yx))
      return e(ToolResultRow, {
        children: e(t, { color: "error", children: "File not found" }),
      });
    return e(ToolResultRow, {
      children: e(t, { color: "error", children: "Error searching files" }),
    });
  }
  return e(ToolErrorMessage, { result: l, verbose: f });
}
function ry(
  {
    mode: l = "files_with_matches",
    filenames: f,
    numFiles: g,
    content: T,
    numLines: y,
    numMatches: R,
  },
  k,
  { verbose: S },
) {
  if (l === "content")
    return e(gp, {
      count: y ?? 0,
      countLabel: "lines",
      content: T,
      verbose: S,
    });
  if (l === "count")
    return e(gp, {
      count: R ?? 0,
      countLabel: "matches",
      secondaryCount: g,
      secondaryLabel: "files",
      content: T,
      verbose: S,
    });
  let P = f.map((A) => A).join(`
`);
  return e(gp, { count: g, countLabel: "files", content: P, verbose: S });
}
var QP = {
  goToDefinition: { singular: "definition", plural: "definitions" },
  findReferences: { singular: "reference", plural: "references" },
  documentSymbol: { singular: "symbol", plural: "symbols" },
  workspaceSymbol: { singular: "symbol", plural: "symbols" },
  hover: { singular: "hover info", plural: "hover info", special: "available" },
  goToImplementation: { singular: "implementation", plural: "implementations" },
  prepareCallHierarchy: { singular: "call item", plural: "call items" },
  incomingCalls: { singular: "caller", plural: "callers" },
  outgoingCalls: { singular: "callee", plural: "callees" },
};
function ZP(uX) {
  let Jn = _(24),
    {
      operation: Nu,
      resultCount: mi,
      fileCount: ny,
      content: VP,
      verbose: mX,
    } = uX,
    Jv;
  if (Jn[0] !== Nu)
    ((Jv = QP[Nu] || { singular: "result", plural: "results" }),
      (Jn[0] = Nu),
      (Jn[1] = Jv));
  else Jv = Jn[1];
  let Eu = Jv,
    XP = mi === 1 ? Eu.singular : Eu.plural,
    Zv;
  if (Jn[2] !== XP || Jn[3] !== Eu.special || Jn[4] !== Nu || Jn[5] !== mi)
    ((Zv =
      Nu === "hover" && mi > 0 && Eu.special
        ? r(t, { children: ["Hover info ", Eu.special] })
        : r(t, {
            children: ["Found ", r(t, { bold: !0, children: [mi, " "] }), XP],
          })),
      (Jn[2] = XP),
      (Jn[3] = Eu.special),
      (Jn[4] = Nu),
      (Jn[5] = mi),
      (Jn[6] = Zv));
  else Zv = Jn[6];
  let Lu = Zv,
    eI;
  if (Jn[7] !== ny)
    ((eI =
      ny > 1
        ? r(t, {
            children: [
              " ",
              "across ",
              r(t, { bold: !0, children: [ny, " "] }),
              "files",
            ],
          })
        : null),
      (Jn[7] = ny),
      (Jn[8] = eI));
  else eI = Jn[8];
  let Ou = eI;
  if (mX) {
    let Ca;
    if (Jn[9] === MEMO_CACHE_SENTINEL)
      ((Ca = e(t, { dimColor: !0, children: "\xA0\xA0\u23BF \xA0" })),
        (Jn[9] = Ca));
    else Ca = Jn[9];
    let wa;
    if (Jn[10] !== Lu || Jn[11] !== Ou)
      ((wa = e(o, {
        flexDirection: "row",
        children: r(t, { children: [Ca, Lu, Ou] }),
      })),
        (Jn[10] = Lu),
        (Jn[11] = Ou),
        (Jn[12] = wa));
    else wa = Jn[12];
    let sy;
    if (Jn[13] !== VP)
      ((sy = e(o, { marginLeft: 5, children: e(t, { children: VP }) })),
        (Jn[13] = VP),
        (Jn[14] = sy));
    else sy = Jn[14];
    let oI;
    if (Jn[15] !== wa || Jn[16] !== sy)
      ((oI = r(o, { flexDirection: "column", children: [wa, sy] })),
        (Jn[15] = wa),
        (Jn[16] = sy),
        (Jn[17] = oI));
    else oI = Jn[17];
    return oI;
  }
  let Ca;
  if (Jn[18] !== mi) ((Ca = mi > 0 && e(TranscriptExpandHint, {})), (Jn[18] = mi), (Jn[19] = Ca));
  else Ca = Jn[19];
  let wa;
  if (Jn[20] !== Lu || Jn[21] !== Ou || Jn[22] !== Ca)
    ((wa = e(ToolResultRow, {
      height: 1,
      children: r(t, { children: [Lu, Ou, " ", Ca] }),
    })),
      (Jn[20] = Lu),
      (Jn[21] = Ou),
      (Jn[22] = Ca),
      (Jn[23] = wa));
  else wa = Jn[23];
  return wa;
}
function eC(l, { verbose: f }) {
  if (!f && typeof l === "string" && extractTagContent(l, "tool_use_error"))
    return e(ToolResultRow, {
      children: e(t, { color: "error", children: "LSP operation failed" }),
    });
  return e(ToolErrorMessage, { result: l, verbose: f });
}
function oC(l, f, { verbose: g }) {
  if (l.resultCount !== void 0 && l.fileCount !== void 0)
    return e(ZP, {
      operation: l.operation,
      resultCount: l.resultCount,
      fileCount: l.fileCount,
      content: l.result,
      verbose: g,
    });
  return e(ToolResultRow, { children: e(t, { children: l.result }) });
}
function dI(tC) {
  let [iI, RX] = tC;
  return r(
    t,
    { color: "inactive", children: ["\xB7 ", iI, " \u2192 ", RX] },
    iI,
  );
}
function fI(MX) {
  return MX.label;
}
function pI(aC) {
  return r(
    t,
    {
      color: "inactive",
      children: [
        "\xB7 ",
        aC.question,
        " (",
        aC.options.map(fI).join(" / "),
        ")",
      ],
    },
    aC.question,
  );
}
function gI(lC) {
  let [mI, kX] = lC;
  return r(
    t,
    { color: "inactive", children: ["\xB7 ", mI, " \u2192 ", kX] },
    mI,
  );
}
function cC(tC) {
  let Iu = _(15),
    { questions: rC, answers: nC, timeoutMs: sC } = tC,
    rI;
  if (Iu[0] !== nC) ((rI = Object.entries(nC)), (Iu[0] = nC), (Iu[1] = rI));
  else rI = Iu[1];
  let ay = rI,
    ly = ay.length > 0,
    nI;
  if (Iu[2] === MEMO_CACHE_SENTINEL)
    ((nI = r(o, {
      flexDirection: "row",
      children: [
        r(t, { color: getPermissionModeColor("default"), children: [CLAUDE_BULLET_GLYPH, "\xA0"] }),
        e(t, { children: "Claude asked:" }),
      ],
    })),
      (Iu[2] = nI));
  else nI = Iu[2];
  let uy;
  if (Iu[3] !== ay || Iu[4] !== ly || Iu[5] !== rC)
    ((uy = ly ? ay.map(dI) : rC.map(pI)),
      (Iu[3] = ay),
      (Iu[4] = ly),
      (Iu[5] = rC),
      (Iu[6] = uy));
  else uy = Iu[6];
  let my;
  if (Iu[7] !== sC) ((my = Math.round(sC / 1000)), (Iu[7] = sC), (Iu[8] = my));
  else my = Iu[8];
  const iC = ly
    ? "continued with the answers selected so far"
    : "continued without an answer";
  let cy;
  if (Iu[9] !== my || Iu[10] !== iC)
    ((cy = r(t, {
      dimColor: !0,
      children: [CLAUDE_BULLET_GLYPH, " No response after ", my, "s \u2014", " ", iC],
    })),
      (Iu[9] = my),
      (Iu[10] = iC),
      (Iu[11] = cy));
  else cy = Iu[11];
  let sI;
  if (Iu[12] !== uy || Iu[13] !== cy)
    ((sI = r(o, {
      flexDirection: "column",
      marginTop: 1,
      children: [
        nI,
        e(ToolResultRow, {
          children: r(o, { flexDirection: "column", children: [uy, cy] }),
        }),
      ],
    })),
      (Iu[12] = uy),
      (Iu[13] = cy),
      (Iu[14] = sI));
  else sI = Iu[14];
  return sI;
}
function dC(lC) {
  let yp = _(13),
    { answers: uC, response: Du, followUp: Tp } = lC,
    aI;
  if (yp[0] !== uC) ((aI = Object.entries(uC)), (yp[0] = uC), (yp[1] = aI));
  else aI = yp[1];
  let dy = aI,
    Rp = Boolean(Du) || dy.length > 0;
  if (!Tp && !Rp) {
    return null;
  }
  let mC = Tp
      ? Rp
        ? "User asked Claude for more questions (so far):"
        : "User asked Claude for more questions"
      : "User answered Claude's questions:",
    lI;
  if (yp[2] === MEMO_CACHE_SENTINEL)
    ((lI = r(t, { color: getPermissionModeColor("default"), children: [CLAUDE_BULLET_GLYPH, "\xA0"] })),
      (yp[2] = lI));
  else lI = yp[2];
  let py;
  if (yp[3] !== mC)
    ((py = r(o, {
      flexDirection: "row",
      children: [lI, e(t, { children: mC })],
    })),
      (yp[3] = mC),
      (yp[4] = py));
  else py = yp[4];
  let fy;
  if (yp[5] !== dy || yp[6] !== Tp || yp[7] !== Rp || yp[8] !== Du)
    ((fy =
      Rp &&
      e(ToolResultRow, {
        children: r(o, {
          flexDirection: "column",
          children: [
            (Tp || !Du) && dy.map(gI),
            Du && r(t, { color: "inactive", children: ["\xB7 ", Du] }),
          ],
        }),
      })),
      (yp[5] = dy),
      (yp[6] = Tp),
      (yp[7] = Rp),
      (yp[8] = Du),
      (yp[9] = fy));
  else fy = yp[9];
  let uI;
  if (yp[10] !== py || yp[11] !== fy)
    ((uI = r(o, { flexDirection: "column", marginTop: 1, children: [py, fy] })),
      (yp[10] = py),
      (yp[11] = fy),
      (yp[12] = uI));
  else uI = yp[12];
  return uI;
}
function pC() {
  return null;
}
function fC() {
  return null;
}
function gC({
  questions: l,
  answers: f,
  response: g,
  afkTimeoutMs: T,
  followUp: y,
}) {
  if (T) return e(cC, { questions: l, answers: f, timeoutMs: T });
  return e(dC, { answers: f, response: g, followUp: y });
}
function hC({ questions: l }) {
  return r(o, {
    flexDirection: "column",
    marginTop: 1,
    children: [
      r(o, {
        flexDirection: "row",
        children: [
          r(t, { color: getPermissionModeColor("default"), children: [CLAUDE_BULLET_GLYPH, "\xA0"] }),
          e(t, { children: "User declined to answer questions" }),
        ],
      }),
      e(ToolResultRow, {
        children: e(o, {
          flexDirection: "column",
          children: l.map((f) =>
            r(
              t,
              {
                color: "inactive",
                children: [
                  "\xB7 ",
                  f.question,
                  " (",
                  f.options.map((g) => g.label).join(" / "),
                  ")",
                ],
              },
              f.question,
            ),
          ),
        }),
      }),
    ],
  });
}
import { isAbsolute as TC } from "path";
function RI(gn) {
  let DX = TC(gn.path) && gn.pathValidated && !ku(gn.path);
  return r(
    o,
    {
      flexDirection: "row",
      children: [
        r(t, {
          dimColor: !0,
          children: [
            figures.pointerSmall,
            " ",
            gn.isImage ? "[image]" : "[file]",
            " ",
          ],
        }),
        DX
          ? e(TruncatedFilePath, { filePath: gn.path, children: Ao(gn.path) })
          : e(t, { children: Ao(gn.path) }),
        r(t, { dimColor: !0, children: [" (", formatFileSize(gn.size), ")"] }),
      ],
    },
    gn.file_uuid ?? gn.path,
  );
}
function yC(l, f, g) {
  let T = (l.attachments?.length ?? 0) > 0;
  if (!l.message && !T) return null;
  if (g?.isTranscriptMode)
    return r(o, {
      flexDirection: "row",
      marginTop: 1,
      children: [
        e(o, { minWidth: 2, children: e(t, { color: "text", children: CLAUDE_BULLET_GLYPH }) }),
        r(o, {
          flexDirection: "column",
          children: [
            l.message ? e(js, { children: l.message }) : null,
            e(Ua, { attachments: l.attachments }),
          ],
        }),
      ],
    });
  if (g?.isBriefOnly) {
    let y = l.sentAt ? formatTimestamp(l.sentAt) : "";
    return r(o, {
      flexDirection: "column",
      marginTop: 1,
      paddingLeft: 2,
      children: [
        r(o, {
          flexDirection: "row",
          children: [
            e(t, { color: "briefLabelClaude", children: "Claude" }),
            y ? r(t, { dimColor: !0, children: [" ", y] }) : null,
          ],
        }),
        r(o, {
          flexDirection: "column",
          children: [
            l.message ? e(js, { children: l.message }) : null,
            e(Ua, { attachments: l.attachments }),
          ],
        }),
      ],
    });
  }
  return r(o, {
    flexDirection: "row",
    marginTop: 1,
    children: [
      e(pd, {
        fromLeftEdge: !0,
        minWidth: 2,
        children: e(t, { color: "text", children: CLAUDE_BULLET_GLYPH }),
      }),
      r(o, {
        flexDirection: "column",
        children: [
          l.message ? e(js, { children: l.message }) : null,
          e(Ua, { attachments: l.attachments }),
        ],
      }),
    ],
  });
}
function Ua(IX) {
  let hI = _(4),
    { attachments: Mp } = IX;
  if (!Mp || Mp.length === 0) {
    return null;
  }
  let gy;
  if (hI[0] !== Mp) ((gy = Mp.map(RI)), (hI[0] = Mp), (hI[1] = gy));
  else gy = hI[1];
  let TI;
  if (hI[2] !== gy)
    ((TI = e(o, { flexDirection: "column", marginTop: 1, children: gy })),
      (hI[2] = gy),
      (hI[3] = TI));
  else TI = hI[3];
  return TI;
}
F();
function RC(l, f) {
  let g = l.at(-1)?.data;
  return e(ToolResultRow, {
    children: e(t, {
      dimColor: !0,
      children: g ? `Running ${g.toolName}\u2026` : "Working\u2026",
    }),
  });
}
function MC() {
  return e(ToolResultRow, { children: e(t, { color: "warning", children: "Rejected" }) });
}
function bC(l, f) {
  if (isReplVerboseEnabled()) return e(Nl, {});
  return e(ToolResultRow, {
    children: e(t, {
      color: "error",
      children: typeof l === "string" ? l : "Error",
    }),
  });
}
var Bu = {
  renderToolResultMessage(l) {
    let f;
    try {
      f = b(l, null, 2);
    } catch {
      f = String(l);
    }
    return e(ToolResultRow, { children: e(t, { children: f }) });
  },
  renderToolUseRejectedMessage() {
    return e(ToolResultRow, {
      children: e(t, { color: "warning", children: "Rejected" }),
    });
  },
  renderToolUseErrorMessage(l, f) {
    return e(ToolResultRow, {
      children: e(t, {
        color: "error",
        children: typeof l === "string" ? l : "Error",
      }),
    });
  },
  renderToolUseProgressMessage() {
    return null;
  },
};
function LI(PI) {
  return PI.line === void 0 ? 0 : String(PI.line).length;
}
function OI(CI) {
  return CI.category ? te(`[${CI.category}]`) : 0;
}
var NC = { CONFIRMED: "error", PLAUSIBLE: "warning" },
  AC = 16;
function EC(l, f, { verbose: g }) {
  let T = l?.findings ?? [];
  if (T.length === 0) return null;
  return e(LC, { findings: T, verbose: g });
}
function LC(VX) {
  let ju = _(23),
    { findings: Zn, verbose: kp } = VX,
    { columns: xC } = useTerminalSize(),
    hy,
    Ty,
    Ry,
    My;
  if (ju[0] !== xC || ju[1] !== Zn || ju[2] !== kp) {
    let _C = new Map();
    for (const SC of Zn) {
      let kI = _C.get(SC.file) ?? [];
      (kI.push(SC), _C.set(SC.file, kI));
    }
    let Na;
    if (ju[7] !== Zn)
      ((Na = Math.max(0, ...Zn.map(LI))), (ju[7] = Zn), (ju[8] = Na));
    else Na = ju[8];
    let Fu = Na;
    let bp;
    if (ju[9] !== Zn)
      ((bp = Math.max(0, ...Zn.map(OI))), (ju[9] = Zn), (ju[10] = bp));
    else bp = ju[10];
    let $u = Math.min(24, bp);
    let XX = xC - 14 - (Fu > 0 ? Fu + 1 : 0) - ($u > 0 ? $u + 1 : 0);
    let CC = XX >= AC;
    Ty = ToolResultRow;
    hy = o;
    Ry = "column";
    let xI;
    if (ju[11] !== CC || ju[12] !== $u || ju[13] !== Fu || ju[14] !== kp)
      ((xI = (QX) => {
        let [SI, JX] = QX;
        return r(
          o,
          {
            flexDirection: "column",
            children: [
              e(t, { color: "suggestion", children: SI }),
              JX.map((dr, ZX) =>
                r(
                  o,
                  {
                    flexDirection: "column",
                    children: [
                      CC
                        ? r(o, {
                            columnGap: 1,
                            paddingLeft: 2,
                            children: [
                              e(o, {
                                flexShrink: 0,
                                children: e(Wu, { finding: dr }),
                              }),
                              Fu > 0
                                ? e(o, {
                                    flexShrink: 0,
                                    width: Fu,
                                    justifyContent: "flex-end",
                                    children: e(t, {
                                      color: "suggestion",
                                      children: dr.line,
                                    }),
                                  })
                                : null,
                              $u > 0
                                ? e(o, {
                                    flexShrink: 0,
                                    width: $u,
                                    children: e(t, {
                                      dimColor: !0,
                                      children: dr.category
                                        ? `[${dr.category}]`
                                        : "",
                                    }),
                                  })
                                : null,
                              e(o, {
                                flexGrow: 1,
                                children: e(qu, { finding: dr }),
                              }),
                            ],
                          })
                        : e(o, {
                            paddingLeft: 2,
                            children: r(t, {
                              wrap: "wrap",
                              children: [
                                e(Wu, { finding: dr }),
                                dr.line === void 0
                                  ? null
                                  : r(t, {
                                      color: "suggestion",
                                      children: [" ", dr.line],
                                    }),
                                dr.category
                                  ? r(t, {
                                      dimColor: !0,
                                      children: [" [", dr.category, "]"],
                                    })
                                  : null,
                                " ",
                                e(qu, { finding: dr }),
                              ],
                            }),
                          }),
                      kp &&
                        e(o, {
                          paddingLeft: 4,
                          children: e(t, {
                            dimColor: !0,
                            wrap: "wrap",
                            children: dr.failure_scenario,
                          }),
                        }),
                    ],
                  },
                  ZX,
                ),
              ),
            ],
          },
          SI,
        );
      }),
        (ju[11] = CC),
        (ju[12] = $u),
        (ju[13] = Fu),
        (ju[14] = kp),
        (ju[15] = xI));
    else xI = ju[15];
    My = [..._C.entries()].map(xI);
    ((ju[0] = xC),
      (ju[1] = Zn),
      (ju[2] = kp),
      (ju[3] = hy),
      (ju[4] = Ty),
      (ju[5] = Ry),
      (ju[6] = My));
  } else ((hy = ju[3]), (Ty = ju[4]), (Ry = ju[5]), (My = ju[6]));
  let Na;
  if (ju[16] !== hy || ju[17] !== Ry || ju[18] !== My)
    ((Na = e(hy, { flexDirection: Ry, children: My })),
      (ju[16] = hy),
      (ju[17] = Ry),
      (ju[18] = My),
      (ju[19] = Na));
  else Na = ju[19];
  let bp;
  if (ju[20] !== Ty || ju[21] !== Na)
    ((bp = e(Ty, { children: Na })),
      (ju[20] = Ty),
      (ju[21] = Na),
      (ju[22] = bp));
  else bp = ju[22];
  return bp;
}
function Wu(e7) {
  let o7 = _(3),
    { finding: ky } = e7;
  const wC =
      ky.outcome === "fixed" ? "success" : ky.verdict ? NC[ky.verdict] : void 0,
    UC = ky.outcome === "fixed" ? "\u2713" : "\u25CF";
  let wI;
  if (o7[0] !== wC || o7[1] !== UC)
    ((wI = e(t, { color: wC, children: UC })),
      (o7[0] = wC),
      (o7[1] = UC),
      (o7[2] = wI));
  else wI = o7[2];
  return wI;
}
function qu(t7) {
  let UI = _(5),
    { finding: ci } = t7,
    by;
  if (UI[0] !== ci.outcome)
    ((by =
      ci.outcome && ci.outcome !== "fixed"
        ? r(t, {
            dimColor: !0,
            children: [
              " [",
              ci.outcome === "skipped" ? "skipped" : "no change needed",
              "]",
            ],
          })
        : null),
      (UI[0] = ci.outcome),
      (UI[1] = by));
  else by = UI[1];
  let NI;
  if (UI[2] !== ci.summary || UI[3] !== by)
    ((NI = r(t, { wrap: "wrap", children: [ci.summary, by] })),
      (UI[2] = ci.summary),
      (UI[3] = by),
      (UI[4] = NI));
  else NI = UI[4];
  return NI;
}
var OC = 2,
  vC = 160;
function vI(l) {
  let f = l.split(`
`),
    g = l;
  if (f.length > OC)
    g = f.slice(0, OC).join(`
`);
  if (te(g) > vC) g = truncateToWidthNoEllipsis(g, vC);
  return g.trim();
}
function IC(l, f, { verbose: g }) {
  let T = l.command ?? "",
    y = g ? T : vI(T);
  return e(ToolResultRow, {
    children: r(t, {
      children: [y, y !== T ? "\u2026 \xB7 stopped" : " \xB7 stopped"],
    }),
  });
}
function DI(l) {
  let f = 0;
  for (let g of l) if (g != null && typeof g !== "string") f++;
  return f;
}
function DC(l) {
  if (l.length === 0) return null;
  let f = l.at(-1);
  if (!f?.data) return null;
  let g = f.data;
  switch (g.type) {
    case "query_update":
      return e(ToolResultRow, {
        children: r(t, { dimColor: !0, children: ["Searching: ", g.query] }),
      });
    case "search_results_received":
      return e(ToolResultRow, {
        children: r(t, {
          dimColor: !0,
          children: ["Found ", g.resultCount, ' results for "', g.query, '"'],
        }),
      });
    default:
      return null;
  }
}
function BC(l) {
  let f = l.searchCount ?? DI(l.results ?? []),
    g =
      l.durationSeconds >= 1
        ? `${Math.round(l.durationSeconds)}s`
        : `${Math.round(l.durationSeconds * 1000)}ms`;
  return e(o, {
    justifyContent: "space-between",
    width: "100%",
    children: e(ToolResultRow, {
      height: 1,
      children: r(t, {
        children: ["Did ", f, " search", f !== 1 ? "es" : "", " in ", g],
      }),
    }),
  });
}
function jC(l, f, g) {
  return r(o, {
    flexDirection: "column",
    marginTop: 1,
    children: [
      r(o, {
        flexDirection: "row",
        children: [
          e(t, { color: getPermissionModeColor("plan"), children: CLAUDE_BULLET_GLYPH }),
          e(t, { children: " Entered plan mode" }),
        ],
      }),
      e(o, {
        paddingLeft: 2,
        children: e(t, {
          dimColor: !0,
          children:
            "Claude is now exploring and designing an implementation approach.",
        }),
      }),
    ],
  });
}
function FC() {
  return r(o, {
    flexDirection: "row",
    marginTop: 1,
    children: [
      e(t, { color: getPermissionModeColor("default"), children: CLAUDE_BULLET_GLYPH }),
      e(t, { children: " User declined to enter plan mode" }),
    ],
  });
}
function $C(l, f, g) {
  return e(ToolResultRow, {
    children: r(o, {
      flexDirection: "column",
      children: [
        r(t, {
          children: [
            "Switched to worktree",
            l.worktreeBranch
              ? r(t, {
                  children: [
                    " ",
                    "on branch ",
                    e(t, { bold: !0, children: l.worktreeBranch }),
                  ],
                })
              : null,
          ],
        }),
        e(t, { dimColor: !0, children: l.worktreePath }),
      ],
    }),
  });
}
function WC(l, f, g) {
  let T = l.action === "keep" ? "Kept worktree" : "Removed worktree";
  return e(ToolResultRow, {
    children: r(o, {
      flexDirection: "column",
      children: [
        r(t, {
          children: [
            T,
            l.worktreeBranch
              ? r(N, {
                  children: [
                    " ",
                    "(branch ",
                    e(t, { bold: !0, children: l.worktreeBranch }),
                    ")",
                  ],
                })
              : null,
          ],
        }),
        r(t, { dimColor: !0, children: ["Returned to ", l.originalCwd] }),
      ],
    }),
  });
}
function qC(l, f, { verbose: g }) {
  if (!l || l.length === 0)
    return e(ToolResultRow, {
      height: 1,
      children: e(EmptyStateMessage, { children: "(No resources found)" }),
    });
  let T = b(l, null, 2);
  return e(ToolResultContent, { content: T, verbose: g });
}
function HC(l) {
  return e(ToolResultRow, {
    children: r(t, {
      children: [
        "Monitor started",
        " ",
        r(t, {
          dimColor: !0,
          children: [
            "\xB7 task ",
            l.taskId,
            " \xB7",
            " ",
            l.persistent ? "persistent" : `timeout ${l.timeoutMs / 1000}s`,
          ],
        }),
      ],
    }),
  });
}
F();
function xp(D7) {
  let Hu = _(13),
    { command: hn } = D7,
    GI;
  if (Hu[0] === MEMO_CACHE_SENTINEL) ((GI = getSlashCommandSubmitter()), (Hu[0] = GI));
  else GI = Hu[0];
  let zI = GI,
    [GC, KI] = d(!1);
  if (!zI) {
    let Aa;
    if (Hu[1] !== hn)
      ((Aa = r(t, { underline: !0, children: ["/", hn] })),
        (Hu[1] = hn),
        (Hu[2] = Aa));
    else Aa = Hu[2];
    return Aa;
  }
  let Aa;
  if (Hu[3] !== hn)
    ((Aa = () => {
      (logEvent("tengu_slash_link_clicked", { command: fromEnum(hn) }),
        zI(hn, { kind: "human" }));
    }),
      (Hu[3] = hn),
      (Hu[4] = Aa));
  else Aa = Hu[4];
  let VI, XI;
  if (Hu[5] === MEMO_CACHE_SENTINEL)
    ((VI = () => KI(!0)), (XI = () => KI(!1)), (Hu[5] = VI), (Hu[6] = XI));
  else ((VI = Hu[5]), (XI = Hu[6]));
  let xy;
  if (Hu[7] !== hn || Hu[8] !== GC)
    ((xy = r(t, { underline: !0, bold: GC, children: ["/", hn] })),
      (Hu[7] = hn),
      (Hu[8] = GC),
      (Hu[9] = xy));
  else xy = Hu[9];
  let QI;
  if (Hu[10] !== Aa || Hu[11] !== xy)
    ((QI = e(o, {
      onClick: Aa,
      onMouseEnter: VI,
      onMouseLeave: XI,
      children: xy,
    })),
      (Hu[10] = Aa),
      (Hu[11] = xy),
      (Hu[12] = QI));
  else QI = Hu[12];
  return QI;
}
function zC(l) {
  let f;
  if (l.disabledReason === "config_off")
    f = r(o, {
      flexDirection: "row",
      children: [
        r(t, {
          children: [
            'Not sent because "Push when Claude decides" is disabled in',
            " ",
          ],
        }),
        e(xp, { command: "config" }),
        e(t, { children: "." }),
      ],
    });
  else if (l.disabledReason === "user_present")
    f = e(t, { children: "Not sent because you're active in this terminal." });
  else if (l.disabledReason === "no_transport")
    f = l.localSent
      ? e(t, { children: "Terminal notification sent." })
      : r(o, {
          flexDirection: "row",
          children: [
            e(t, {
              children: "Not sent \u2014 Remote Control is off. Enable with ",
            }),
            e(xp, { command: "remote-control" }),
            e(t, { children: "." }),
          ],
        });
  else {
    if (l.localSent === void 0) return null;
    f = e(t, {
      children: l.localSent
        ? "Terminal and mobile notification sent."
        : "Mobile notification sent.",
    });
  }
  return e(ToolResultRow, { height: 1, children: f });
}
function KC(l, f, { verbose: g }) {
  if (l?.error) return e(ToolResultContent, { content: l.error, verbose: g });
  if (!l || l.resources.length === 0)
    return e(ToolResultRow, {
      height: 1,
      children: e(EmptyStateMessage, { children: "(Empty directory)" }),
    });
  let T = b(l, null, 2);
  return e(ToolResultContent, { content: T, verbose: g });
}
function YC(l, f, { verbose: g }) {
  if (l?.error) return e(ToolResultContent, { content: l.error, verbose: g });
  if (!l || !l.contents || l.contents.length === 0)
    return e(o, {
      justifyContent: "space-between",
      overflowX: "hidden",
      width: "100%",
      children: e(ToolResultRow, {
        height: 1,
        children: e(t, { dimColor: !0, children: "(No content)" }),
      }),
    });
  let T = b(l, null, 2);
  return e(ToolResultContent, { content: T, verbose: g });
}
function VC(l) {
  let f =
    countOccurrences(
      l.json,
      `
`,
    ) + 1;
  return e(ToolResultRow, {
    children: r(t, {
      children: [
        "HTTP ",
        l.status,
        " ",
        r(t, { dimColor: !0, children: ["(", f, " lines)"] }),
      ],
    }),
  });
}
function XC(l) {
  return e(ToolResultRow, {
    children: r(t, {
      children: [
        "Scheduled ",
        e(t, { bold: !0, children: l.id }),
        " ",
        r(t, { dimColor: !0, children: ["(", l.humanSchedule, ")"] }),
      ],
    }),
  });
}
function QC(l) {
  return e(ToolResultRow, {
    children: r(t, {
      children: ["Cancelled ", e(t, { bold: !0, children: l.id })],
    }),
  });
}
function JC(l) {
  if (l.jobs.length === 0)
    return e(ToolResultRow, { children: e(EmptyStateMessage, { children: "No scheduled jobs" }) });
  return e(ToolResultRow, {
    children: e(o, {
      flexDirection: "column",
      children: l.jobs.map((f) =>
        r(
          t,
          {
            children: [
              e(t, { bold: !0, children: f.id }),
              " ",
              r(t, {
                dimColor: !0,
                children: [
                  f.humanSchedule,
                  f.recurring ? " (recurring)" : " (one-shot)",
                  f.durable === !1 ? " [session-only]" : "",
                  f.prompt ? `: ${truncate(f.prompt, 60, !0)}` : "",
                ],
              }),
            ],
          },
          f.id,
        ),
      ),
    }),
  });
}
function ZC(l, f, { verbose: g }) {
  let T = getHandbackPayloadSchema().safeParse(typeof l === "string" ? xt(l, !1) : l);
  if (!T.success)
    return typeof l === "string" ? e(ToolResultContent, { content: stripAnsi(l), verbose: g }) : null;
  let y = getHandbackDisplayText(T.data);
  return y === void 0
    ? null
    : e(ToolResultRow, { children: e(t, { dimColor: !0, children: ps(y) }) });
}
function ew(l) {
  if (typeof l === "string")
    return e(ToolResultRow, { children: e(t, { dimColor: !0, children: ps(l) }) });
  let f = l.files.filter((g) => g.error !== void 0);
  return r(ToolResultRow, {
    children: [
      e(t, { dimColor: !0, children: ps(l.message) }),
      f.map((g) =>
        r(
          t,
          { color: "warning", children: ["  ", ps(`${g.path}: ${g.error}`)] },
          g.path,
        ),
      ),
    ],
  });
}
function ow(l) {
  return r(o, {
    flexDirection: "row",
    marginTop: 1,
    children: [
      e(o, { minWidth: 2, children: e(t, { color: "text", children: CLAUDE_BULLET_GLYPH }) }),
      r(o, {
        flexDirection: "column",
        children: [
          l.caption ? e(t, { children: l.caption }) : null,
          e(Ua, { attachments: l.attachments }),
        ],
      }),
    ],
  });
}
function tw(l) {
  return e(ToolResultRow, {
    children: e(t, {
      children: l.role !== void 0 ? `Role: ${l.role}` : "Role picker dismissed",
    }),
  });
}
function rw(l) {
  return e(t, {
    children: `Shown ${l.proposalCount} ${pluralize(l.proposalCount, "skill proposal")} to the user for review`,
  });
}
var _y = {
    name: import.meta.require("../../../01-核心基础设施/共享小工具-未细化/chunk-p2wzfbaj.js")
      .SEARCH_MCP_REGISTRY_TOOL_NAME,
    ui: import.meta.require("../../../02-功能模块/MCP客户端/renderToolResultMessage.k3vkyx31.js"),
  },
  Py = {
    name: import.meta.require("../../../01-核心基础设施/共享小工具-未细化/chunk-0mrh424x.js")
      .SUGGEST_CONNECTORS_TOOL_NAME,
    ui: import.meta.require("../../../02-功能模块/MCP客户端/renderToolResultMessage.9n29ntaq.js"),
  },
  Cy = null,
  wy = null,
  Uy = {
    name: import.meta.require("../../../01-核心基础设施/共享小工具-未细化/chunk-9g3yj4km.js").LIST_CONNECTORS_TOOL_NAME,
    ui: import.meta.require("../../../02-功能模块/MCP客户端/renderToolResultMessage.ddfh23kw.js"),
  },
  Ny = null,
  Ay = null,
  Ey = null,
  _p = null,
  Ly = null,
  Gu = {
    name: import.meta.require("../../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js").WORKFLOW_TOOL_NAME,
    ui: import.meta.require("../../../02-功能模块/Workflow编排/renderToolResultMessage.ew7kwnxk.js"),
  },
  Sp = null,
  di = import.meta.require("../../../02-功能模块/MCP客户端/makeResultCountRenderer.rtp0eamn.js"),
  Pp = null,
  Cp = null,
  es = {
    name: import.meta.require("../../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js").ARTIFACT_TOOL_NAME,
    names: import.meta.require("../../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js"),
    ui: import.meta.require("../../../02-功能模块/Artifact发布-渲染/renderCheckToolUseMessage.zxaexmtx.js"),
  },
  vy = {
    name: import.meta.require("../../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js").END_CONVERSATION_TOOL_NAME,
    ui: import.meta.require("../../../02-功能模块/工具UI渲染/renderToolResultMessage.pwg9xdk6.js"),
  },
  Iy = {
    [AGENT_TOOL_NAME]: {
      renderGroupedToolUse: A$n,
      renderToolResultMessage: b$n,
      renderToolUseErrorMessage: E$n,
      renderToolUseProgressMessage: jHe,
      renderToolUseRejectedMessage: T$n,
      renderToolUseTag: w$n,
      userFacingNameBackgroundColor: getAgentToolUserFacingBackgroundColor,
    },
    get [BASH_TOOL_NAME]() {
      let l = import.meta.require("../../../02-功能模块/工具UI渲染/BackgroundHint.nne14pfp.js");
      return {
        renderToolResultMessage: l.renderToolResultMessage,
        renderToolUseProgressMessage: l.renderToolUseProgressMessage,
        renderToolUseQueuedMessage: l.renderToolUseQueuedMessage,
        renderToolUseErrorMessage: l.renderToolUseErrorMessage,
      };
    },
    [TASK_STOP_TOOL_NAME]: { renderToolResultMessage: IC },
    [ASK_USER_QUESTION_TOOL_NAME]: {
      renderToolResultMessage: gC,
      renderToolUseRejectedMessage: hC,
      renderToolUseProgressMessage: pC,
      renderToolUseErrorMessage: fC,
    },
    [BRIEF_TOOL_NAME]: { renderToolResultMessage: yC },
    [Jc]: { renderToolResultMessage: zP, renderToolUseRejectedMessage: KP },
    get [EDIT_TOOL_NAME]() {
      let l = import.meta.require("../../../02-功能模块/工具文件读写编辑/renderToolUseErrorMessage.8cb1t7h1.js");
      return {
        renderToolResultMessage: l.renderToolResultMessage,
        renderToolUseRejectedMessage: l.renderToolUseRejectedMessage,
        renderToolUseErrorMessage: l.renderToolUseErrorMessage,
      };
    },
    get [WRITE_TOOL_NAME]() {
      let l = import.meta.require("../../../02-功能模块/工具UI渲染/isResultTruncated.y9qtnzef.js");
      return {
        renderToolResultMessage: l.renderToolResultMessage,
        renderToolUseRejectedMessage: l.renderToolUseRejectedMessage,
        renderToolUseErrorMessage: l.renderToolUseErrorMessage,
        isResultTruncated: l.isResultTruncated,
      };
    },
    get [MEMORY_WRITE_TOOL_NAME]() {
      let l = import.meta.require("../../../02-功能模块/工具UI渲染/isResultTruncated.7wy9kjgd.js");
      return {
        renderToolResultMessage: l.renderToolResultMessage,
        renderToolUseErrorMessage: l.renderToolUseErrorMessage,
        isResultTruncated: l.isResultTruncated,
      };
    },
    get [READ_TOOL_NAME]() {
      let l = import.meta.require("../../../02-功能模块/工具文件读写编辑/renderToolUseTag.1xg51k6k.js");
      return {
        renderToolResultMessage: l.renderToolResultMessage,
        renderToolUseErrorMessage: l.renderToolUseErrorMessage,
        renderToolUseTag: l.renderToolUseTag,
      };
    },
    get [TASK_OUTPUT_TOOL_NAME]() {
      let l = import.meta.require("../../../02-功能模块/工具UI渲染/renderToolUseTag.mt0rtkfc.js");
      return {
        renderToolResultMessage: l.renderToolResultMessage,
        renderToolUseProgressMessage: l.renderToolUseProgressMessage,
        renderToolUseTag: l.renderToolUseTag,
      };
    },
    get [NOTEBOOK_EDIT_TOOL_NAME]() {
      let l = import.meta.require("../../../02-功能模块/Notebook(.ipynb)/Notebook(.ipynb).zmx4vxzb.js");
      return {
        renderToolResultMessage: l.renderToolResultMessage,
        renderToolUseRejectedMessage: l.renderToolUseRejectedMessage,
        renderToolUseErrorMessage: l.renderToolUseErrorMessage,
      };
    },
    get [POWERSHELL_TOOL_NAME]() {
      let l = import.meta.require("../../../02-功能模块/工具Bash-Shell/renderToolUseErrorMessage.fxtssd7a.js");
      return {
        renderToolResultMessage: l.renderToolResultMessage,
        renderToolUseErrorMessage: l.renderToolUseErrorMessage,
        renderToolUseProgressMessage: l.renderToolUseProgressMessage,
        renderToolUseQueuedMessage: l.renderToolUseQueuedMessage,
      };
    },
    [GREP_TOOL_NAME]: { renderToolResultMessage: ry, renderToolUseErrorMessage: ty },
    [GLOB_TOOL_NAME]: { renderToolResultMessage: ry, renderToolUseErrorMessage: ty },
    [WEB_FETCH_TOOL_NAME]: { renderToolResultMessage: renderWebFetchResultMessage, renderToolUseProgressMessage: renderWebFetchProgressMessage },
    [WEB_SEARCH_TOOL_NAME]: { renderToolResultMessage: BC, renderToolUseProgressMessage: DC },
    [REPORT_FINDINGS_TOOL_NAME]: { renderToolResultMessage: EC },
    get [SKILL_TOOL_NAME]() {
      let l = import.meta.require("../../../02-功能模块/工具UI渲染/renderToolUseErrorMessage.gg04apb2.js");
      return {
        renderToolResultMessage: l.renderToolResultMessage,
        renderToolUseProgressMessage: l.renderToolUseProgressMessage,
        renderToolUseRejectedMessage: l.renderToolUseRejectedMessage,
        renderToolUseErrorMessage: l.renderToolUseErrorMessage,
      };
    },
    [LSP_TOOL_NAME]: { renderToolResultMessage: oC, renderToolUseErrorMessage: eC },
    [REPL_TOOL_NAME]: {
      renderToolUseErrorMessage: bC,
      renderToolUseProgressMessage: RC,
      renderToolUseRejectedMessage: MC,
    },
    [REPL_REGISTERED_TOOL_UI_TABLE_KEY]: {
      renderToolResultMessage: Bu.renderToolResultMessage,
      renderToolUseRejectedMessage: Bu.renderToolUseRejectedMessage,
      renderToolUseErrorMessage: Bu.renderToolUseErrorMessage,
      renderToolUseProgressMessage: Bu.renderToolUseProgressMessage,
    },
    [LIST_MCP_RESOURCES_TOOL_NAME]: { renderToolResultMessage: qC },
    [READ_MCP_RESOURCE_DIR_TOOL_NAME]: { renderToolResultMessage: KC },
    [READ_MCP_RESOURCE_TOOL_NAME]: { renderToolResultMessage: YC },
    [ENTER_PLAN_MODE_TOOL_NAME]: { renderToolResultMessage: jC, renderToolUseRejectedMessage: FC },
    [ENTER_WORKTREE_TOOL_NAME]: { renderToolResultMessage: $C },
    [EXIT_WORKTREE_TOOL_NAME]: { renderToolResultMessage: WC },
    [CRON_CREATE_TOOL_NAME]: { renderToolResultMessage: XC },
    [CRON_DELETE_TOOL_NAME]: { renderToolResultMessage: QC },
    [CRON_LIST_TOOL_NAME]: { renderToolResultMessage: JC },
    [E$]: { renderToolResultMessage: VC },
    [MCP_TOOL_UI_TABLE_KEY]: { renderToolResultMessage: Pu, renderToolUseProgressMessage: XT },
    [SLACK_SEND_TOOL_KEY]: {
      renderToolResultMessage: Pu,
      renderToolUseProgressMessage: XT,
      renderToolUseTag: HP,
    },
    [MONITOR_TOOL_NAME]: { renderToolResultMessage: HC },
    [SEND_USER_FILE_TOOL_NAME]: { renderToolResultMessage: ow },
    [SEND_FILE_TOOL_NAME]: { renderToolResultMessage: ew },
    [PROPOSE_SKILLS_TOOL_NAME]: { renderToolResultMessage: rw },
    [PUSH_NOTIFICATION_TOOL_NAME]: { renderToolResultMessage: zC },
    [SEND_MESSAGE_TOOL_NAME]: { renderToolResultMessage: ZC },
    [SHOW_ONBOARDING_ROLE_PICKER_TOOL_NAME]: { renderToolResultMessage: tw },
    ...(_y && {
      [_y.name]: { renderToolResultMessage: _y.ui.renderToolResultMessage },
    }),
    ...(Py && {
      [Py.name]: { renderToolResultMessage: Py.ui.renderToolResultMessage },
    }),
    ...(Cy && {
      [Cy.name]: { renderToolResultMessage: Cy.ui.renderToolResultMessage },
    }),
    ...(wy && {
      [wy.name]: { renderToolResultMessage: wy.ui.renderToolResultMessage },
    }),
    ...(Uy && {
      [Uy.name]: { renderToolResultMessage: Uy.ui.renderToolResultMessage },
    }),
    ...(Ny && {
      [Ny.name]: { renderToolResultMessage: Ny.ui.renderToolResultMessage },
    }),
    ...(Ay && {
      [Ay.name]: { renderToolResultMessage: Ay.ui.renderToolResultMessage },
    }),
    ...(Ey && {
      [Ey.name]: { renderToolResultMessage: Ey.ui.renderToolResultMessage },
    }),
    ...(_p && {
      [_p.name]: {
        renderToolResultMessage: _p.ui.renderToolResultMessage,
        renderToolUseProgressMessage: _p.ui.renderToolUseProgressMessage,
      },
    }),
    ...(Ly && {
      [Ly.name]: { renderToolResultMessage: Ly.ui.renderToolResultMessage },
    }),
    ...(Gu && {
      [Gu.name]: {
        renderToolResultMessage: Gu.ui.renderToolResultMessage,
        renderToolUseProgressMessage: Gu.ui.renderToolUseProgressMessage,
        renderToolUseRejectedMessage: Gu.ui.renderToolUseRejectedMessage,
      },
    }),
    ...(Sp && {
      [Sp.name]: {
        renderToolResultMessage: Sp.ui.renderToolResultMessage,
        renderToolUseRejectedMessage: Sp.ui.renderToolUseRejectedMessage,
      },
    }),
    ...(Pp && {
      [Pp.name]: {
        renderToolResultMessage: Pp.ui.renderToolResultMessage,
        renderToolUseProgressMessage: Pp.ui.renderToolUseProgressMessage,
      },
    }),
    ...(Cp && {
      [Cp.name]: {
        renderToolResultMessage: Cp.ui.renderToolResultMessage,
        renderToolUseProgressMessage: Cp.ui.renderToolUseProgressMessage,
      },
    }),
    ...(es &&
      Object.fromEntries(
        [
          es.name,
          es.names.ARTIFACT_COMMENTS_TOOL_NAME,
          es.names.ARTIFACT_DATA_TOOL_NAME,
          es.names.ARTIFACT_CHECK_TOOL_NAME,
        ].map((l) => [
          l,
          {
            renderToolResultMessage: es.ui.renderToolResultMessage,
            renderToolUseProgressMessage: es.ui.renderToolUseProgressMessage,
            renderToolUseErrorMessage: es.ui.renderToolUseErrorMessage,
          },
        ]),
      )),
    ...(vy && {
      [vy.name]: { renderToolResultMessage: vy.ui.renderToolResultMessage },
    }),
    ...(di && {
      ListPlugins: {
        renderToolResultMessage: di.makeResultCountRenderer("plugin"),
      },
      ListSkills: {
        renderToolResultMessage: di.makeResultCountRenderer("skill"),
      },
      SearchPlugins: {
        renderToolResultMessage: di.makeResultCountRenderer("plugin"),
      },
      SearchSkills: {
        renderToolResultMessage: di.makeResultCountRenderer("skill"),
      },
      SuggestPluginInstall: {
        renderToolResultMessage: (l) =>
          di.makeResultCountRenderer("plugin")({ results: l.plugins }),
      },
      SuggestSkills: {
        renderToolResultMessage: di.makeResultCountRenderer("skill"),
      },
    }),
  },
  uD = `mcp__${COMPUTER_USE_MCP_SERVER_NAME}__`;
function mD(l, f) {
  if (l.builtinRenderFamily === "claude-in-chrome") {
    let g = l.name.slice(CFC_TOOL_PREFIX.length);
    if (f === "renderToolResultMessage") return WP(g);
    if (f === "renderToolUseTag") return $P;
  }
  if (l.builtinRenderFamily === "computer-use") {
    let g = l.name.slice(uD.length);
    if (f === "renderToolResultMessage") return qP(g);
  }
  return;
}
function hp(l, f) {
  let g = l.uiTableKey ?? l.name;
  return l[f] ?? mD(l, f) ?? (Object.hasOwn(Iy, g) ? Iy[g]?.[f] : void 0);
}
function C$n(l, f) {
  let g = Object.getOwnPropertyDescriptor(Iy, l);
  return g?.value !== void 0 && g.value[f] !== void 0;
}
function xD(N4) {
  return N4.pendingWorkerRequest;
}
function SD(A4) {
  return A4.toolPermissionContext.mode;
}
function PD(E4) {
  return E4.agentDefinitions.activeAgents;
}
function Ep(Dy) {
  let Ku = _(27),
    { param: eo, inProgressToolUseIDs: nw, lookups: zu } = Dy,
    dD;
  if (Ku[0] !== nw || Ku[1] !== eo.id)
    ((dD = nw.has(eo.id)), (Ku[0] = nw), (Ku[1] = eo.id), (Ku[2] = dD));
  else dD = Ku[2];
  let Yu = dD,
    pD;
  if (Ku[3] !== zu.erroredToolUseIDs || Ku[4] !== eo.id)
    ((pD = zu.erroredToolUseIDs.has(eo.id)),
      (Ku[3] = zu.erroredToolUseIDs),
      (Ku[4] = eo.id),
      (Ku[5] = pD));
  else pD = Ku[5];
  let Vu = pD,
    jy,
    fD;
  if (Ku[6] !== zu.toolResultByToolUseID || Ku[7] !== eo.id)
    ((jy = zu.toolResultByToolUseID.get(eo.id)),
      (fD = renderEngineModule.isInterruptedCall(jy)),
      (Ku[6] = zu.toolResultByToolUseID),
      (Ku[7] = eo.id),
      (Ku[8] = jy),
      (Ku[9] = fD));
  else ((jy = Ku[8]), (fD = Ku[9]));
  let Xu = fD,
    Qu = jy?.type === "user" ? jy.toolUseResult : void 0,
    gD;
  if (
    Ku[10] !== Vu ||
    Ku[11] !== Xu ||
    Ku[12] !== Qu ||
    Ku[13] !== eo.id ||
    Ku[14] !== eo.input ||
    Ku[15] !== eo.name ||
    Ku[16] !== Yu
  )
    ((gD = () => ({
      requestId: eo.id,
      props: {
        tool_use_id: eo.id,
        toolName: eo.name,
        input: eo.input,
        running: Yu,
        errored: Vu,
        interrupted: Xu,
        output: Qu,
      },
    })),
      (Ku[10] = Vu),
      (Ku[11] = Xu),
      (Ku[12] = Qu),
      (Ku[13] = eo.id),
      (Ku[14] = eo.input),
      (Ku[15] = eo.name),
      (Ku[16] = Yu),
      (Ku[17] = gD));
  else gD = Ku[17];
  let hD;
  if (
    Ku[18] !== Vu ||
    Ku[19] !== Xu ||
    Ku[20] !== Qu ||
    Ku[21] !== eo ||
    Ku[22] !== Yu
  )
    ((hD = [eo, Yu, Vu, Xu, Qu]),
      (Ku[18] = Vu),
      (Ku[19] = Xu),
      (Ku[20] = Qu),
      (Ku[21] = eo),
      (Ku[22] = Yu),
      (Ku[23] = hD));
  else hD = Ku[23];
  let _4 = La.useRenderInput("ToolUse", gD, hD),
    TD;
  if (Ku[24] !== eo || Ku[25] !== Dy)
    ((TD = (Fy) =>
      e(qy, {
        ...Dy,
        param:
          Fy.props.input === eo.input ? eo : { ...eo, input: Fy.props.input },
        toolLabel: Fy.props.toolName === eo.name ? void 0 : Fy.props.toolName,
      })),
      (Ku[24] = eo),
      (Ku[25] = Dy),
      (Ku[26] = TD));
  else TD = Ku[26];
  return La.useRenderHook(_4, TD);
}
function qy(S4) {
  let ht = _(191),
    {
      param: Ue,
      addMargin: os,
      tools: st,
      commands: Ea,
      verbose: Lt,
      inProgressToolUseIDs: Oa,
      progressMessagesForMessage: Vt,
      shouldAnimate: pi,
      shouldShowDot: Tn,
      inProgressToolCallCount: pr,
      lookups: Do,
      isTranscriptMode: Xt,
      toolLabel: sw,
    } = S4,
    Jt = useTerminalSize(),
    [va] = useTheme(),
    yn = useSession(),
    Ia = De(StaticFrameContext),
    Da = useAppStateSelectorUnchecked(xD);
  (GT(Ue.id), De(AppStateContext), useAppStateSelectorUnchecked(SD));
  let Yo = useAppStateSelectorUnchecked(PD),
    yD;
  if (ht[0] !== Ue.name || ht[1] !== yn.host)
    ((yD = Zae(Ue.name, yn.host)),
      (ht[0] = Ue.name),
      (ht[1] = yn.host),
      (ht[2] = yD));
  else yD = ht[2];
  let iw = yD,
    wp;
  if (
    ht[3] !== Yo ||
    ht[4] !== iw ||
    ht[5] !== Ue.input ||
    ht[6] !== Ue.name ||
    ht[7] !== sw ||
    ht[8] !== st
  ) {
    bb0: {
      if (!st) {
        let ts;
        if (ht[10] === MEMO_CACHE_SENTINEL) ((ts = { notFound: "no-tools" }), (ht[10] = ts));
        else ts = ht[10];
        wp = ts;
        break bb0;
      }
      let Ba = findToolByName(st, Ue.name) ?? iw;
      if (!Ba) {
        const ts =
          Ue.name.startsWith("mcp__") ||
          Ue.name.startsWith("skill__") ||
          Ue.name.startsWith("eval_registered__") ||
          Ue.name === STRUCTURED_OUTPUT_TOOL_NAME ||
          Ue.name === "WebBrowser" ||
          EXPECTED_ABSENT_TOOL_NAMES.has(Ue.name) ||
          getFindGrepToolNames().has(Ue.name) ||
          findToolByName(getRegisteredTools() ?? [], Ue.name) !== void 0
            ? "expected-absent"
            : "unknown";
        let Up;
        if (ht[11] !== ts)
          ((Up = { notFound: ts }), (ht[11] = ts), (ht[12] = Up));
        else Up = ht[12];
        wp = Up;
        break bb0;
      }
      let aw = parseToolInput(Ba, Ue.input);
      let lw = aw.success ? aw.data : void 0;
      wp = {
        tool: Ba,
        input: aw,
        remoteHost: getToolCallRemoteHost(Ba, lw),
        userFacingToolName: sw ?? Ba.userFacingName(lw, { activeAgents: Yo }),
        userFacingToolNameBackgroundColor: hp(
          Ba,
          "userFacingNameBackgroundColor",
        )?.(lw, { activeAgents: Yo }),
        isTransparentWrapper: Ba.isTransparentWrapper?.() ?? !1,
      };
    }
    ((ht[3] = Yo),
      (ht[4] = iw),
      (ht[5] = Ue.input),
      (ht[6] = Ue.name),
      (ht[7] = sw),
      (ht[8] = st),
      (ht[9] = wp));
  } else wp = ht[9];
  let fi = wp,
    Ju = "notFound" in fi ? fi.notFound : null,
    ts,
    Up;
  if (ht[13] !== Ju || ht[14] !== Ue.name)
    ((ts = () => {
      if (Ju === "no-tools")
        logError(
          dt(
            Error(`Tools array is undefined for tool ${Ue.name}`),
            `Tools array is undefined (mcp=${Ue.name.startsWith("mcp__")})`,
          ),
        );
      else if (Ju === "expected-absent")
        n(`Tool ${Ue.name} not found in render-time tools`, { level: "error" });
      else if (Ju === "unknown")
        logError(dt(Error(`Tool ${Ue.name} not found`), "Tool not found"));
    }),
      (Up = [Ue.name, Ju]),
      (ht[13] = Ju),
      (ht[14] = Ue.name),
      (ht[15] = ts),
      (ht[16] = Up));
  else ((ts = ht[15]), (Up = ht[16]));
  E(ts, Up);
  let RD;
  if (ht[17] !== Do.erroredToolUseIDs || ht[18] !== Ue)
    ((RD = getStructuredOutputText(Ue, Do.erroredToolUseIDs)),
      (ht[17] = Do.erroredToolUseIDs),
      (ht[18] = Ue),
      (ht[19] = RD));
  else RD = ht[19];
  let $y = RD;
  const uw = $y !== null;
  let Zu,
    em,
    om,
    rs,
    bn,
    rm,
    sm,
    ja,
    im,
    am,
    lm,
    um,
    mm,
    cm,
    dm,
    ns,
    pm,
    fm,
    gm,
    Zt;
  if (
    ht[20] !== Yo ||
    ht[21] !== os ||
    ht[22] !== Ea ||
    ht[23] !== pr ||
    ht[24] !== Oa ||
    ht[25] !== Ia ||
    ht[26] !== Xt ||
    ht[27] !== Do ||
    ht[28] !== Ue ||
    ht[29] !== fi ||
    ht[30] !== Da?.toolUseId ||
    ht[31] !== Vt ||
    ht[32] !== $y ||
    ht[33] !== yn ||
    ht[34] !== pi ||
    ht[35] !== Tn ||
    ht[36] !== uw ||
    ht[37] !== Jt ||
    ht[38] !== va ||
    ht[39] !== st ||
    ht[40] !== Lt
  ) {
    ns = EARLY_RETURN_SENTINEL;
    bb1: {
      if (uw) {
        ns = e(ui, { content: $y, addMargin: os });
        break bb1;
      }
      const hi = "notFound" in fi;
      if (
        ht[61] !== Yo ||
        ht[62] !== os ||
        ht[63] !== Ea ||
        ht[64] !== pr ||
        ht[65] !== Oa ||
        ht[66] !== Ia ||
        ht[67] !== Xt ||
        ht[68] !== Do ||
        ht[69] !== Ue ||
        ht[70] !== fi ||
        ht[71] !== Da?.toolUseId ||
        ht[72] !== Vt ||
        ht[73] !== yn ||
        ht[74] !== pi ||
        ht[75] !== Tn ||
        ht[76] !== hi ||
        ht[77] !== Jt ||
        ht[78] !== va ||
        ht[79] !== st ||
        ht[80] !== Lt
      ) {
        if (hi) {
          ns = null;
          break bb1;
        }
        let {
          tool: hm,
          input: Tm,
          remoteHost: Wy,
          userFacingToolName: Ti,
          userFacingToolNameBackgroundColor: Np,
          isTransparentWrapper: mw,
        } = fi;
        Zt = hm;
        if (
          ht[100] !== Yo ||
          ht[101] !== os ||
          ht[102] !== Ea ||
          ht[103] !== pr ||
          ht[104] !== Oa ||
          ht[105] !== Tm ||
          ht[106] !== Ia ||
          ht[107] !== Xt ||
          ht[108] !== mw ||
          ht[109] !== Do ||
          ht[110] !== Ue ||
          ht[111] !== Da?.toolUseId ||
          ht[112] !== Vt ||
          ht[113] !== Wy ||
          ht[114] !== yn ||
          ht[115] !== pi ||
          ht[116] !== Tn ||
          ht[117] !== Jt ||
          ht[118] !== va ||
          ht[119] !== Zt ||
          ht[120] !== st ||
          ht[121] !== Ti ||
          ht[122] !== Np ||
          ht[123] !== Lt
        ) {
          bn = Do.resolvedToolUseIDs.has(Ue.id);
          rs = !Oa.has(Ue.id) && !bn;
          rm = Da?.toolUseId === Ue.id;
          let cw = Do.toolResultByToolUseID.get(Ue.id);
          let MD = cw?.type === "user" ? cw.toolUseResult : void 0;
          if (mw) {
            let kD = mp({
              param: Ue,
              isQueued: rs,
              isResolved: bn,
              isError: Do.erroredToolUseIDs.has(Ue.id),
              shouldAnimate: pi,
              shouldShowDot: Tn,
              addMargin: os,
              progressMessagesForMessage: Vt,
              resultMsg: cw,
            });
            if (kD !== null) {
              ns = kD;
              break bb1;
            }
            if (bn) {
              ns = null;
              break bb1;
            }
            let Fa;
            if (
              ht[142] !== Yo ||
              ht[143] !== pr ||
              ht[144] !== Xt ||
              ht[145] !== Do ||
              ht[146] !== Ue.id ||
              ht[147] !== Vt ||
              ht[148] !== Jt ||
              ht[149] !== Zt ||
              ht[150] !== st ||
              ht[151] !== Lt
            )
              ((Fa = Ap(
                Zt,
                st,
                Do,
                Ue.id,
                Vt,
                {
                  verbose: Lt,
                  inProgressToolCallCount: pr,
                  isTranscriptMode: Xt,
                  activeAgents: Yo,
                },
                Jt,
              )),
                (ht[142] = Yo),
                (ht[143] = pr),
                (ht[144] = Xt),
                (ht[145] = Do),
                (ht[146] = Ue.id),
                (ht[147] = Vt),
                (ht[148] = Jt),
                (ht[149] = Zt),
                (ht[150] = st),
                (ht[151] = Lt),
                (ht[152] = Fa));
            else Fa = ht[152];
            ns = e(o, { flexDirection: "column", width: "100%", children: Fa });
            break bb1;
          }
          if (Ti === "") {
            ns = null;
            break bb1;
          }
          let dw = Tm.success
            ? pw(Zt, Tm.data, {
                theme: va,
                verbose: Lt,
                isTranscriptMode: Xt,
                activeAgents: Yo,
                commands: Ea,
                teammateAuthorOf: (P4, w4) => getTeamArtifactAuthor(yn, P4, w4),
                toolUseResult: MD,
              })
            : null;
          if (dw === null) {
            ns = null;
            break bb1;
          }
          let U4 = Math.max(Jt.columns - (Tn ? 2 : 0) - te(Ti) - 2, 20);
          om = o;
          um = "row";
          mm = "space-between";
          cm = os ? 1 : 0;
          dm = "100%";
          em = o;
          lm = "column";
          Zu = o;
          pm = "row";
          fm = "nowrap";
          gm = te(Ti) + (Tn ? 2 : 0);
          sm =
            Tn &&
            (rs
              ? e(o, {
                  minWidth: 2,
                  children: e(t, {
                    "aria-label": "tool:",
                    dimColor: rs,
                    children: CLAUDE_BULLET_GLYPH,
                  }),
                })
              : e(Ho, {
                  shouldAnimate: pi,
                  isUnresolved: !bn,
                  isError: Do.erroredToolUseIDs.has(Ue.id),
                }));
          if (ht[153] !== Ti || ht[154] !== Np)
            ((ja = e(o, {
              flexShrink: 0,
              children: e(BackgroundText, {
                color: Np,
                bold: !0,
                wrap: "truncate-end",
                children: Ti,
              }),
            })),
              (ht[153] = Ti),
              (ht[154] = Np),
              (ht[155] = ja));
          else ja = ht[155];
          im =
            dw !== "" &&
            e(ToolResultPreviewWidthContext.Provider, {
              value: Lt || Ia ? null : U4,
              children: e(o, {
                flexWrap: "nowrap",
                children: r(t, {
                  children: [
                    "(",
                    dw,
                    ")",
                    Wy !== void 0 &&
                      r(t, { dimColor: !0, children: [" \xB7 on ", Wy] }),
                  ],
                }),
              }),
            });
          am =
            Tm.success &&
            hp(Zt, "renderToolUseTag")?.(Tm.data, {
              toolUseId: Ue.id,
              toolUseResult: MD,
              progressMessages: Do.progressMessagesByToolUseID.get(Ue.id),
            });
          ((ht[100] = Yo),
            (ht[101] = os),
            (ht[102] = Ea),
            (ht[103] = pr),
            (ht[104] = Oa),
            (ht[105] = Tm),
            (ht[106] = Ia),
            (ht[107] = Xt),
            (ht[108] = mw),
            (ht[109] = Do),
            (ht[110] = Ue),
            (ht[111] = Da?.toolUseId),
            (ht[112] = Vt),
            (ht[113] = Wy),
            (ht[114] = yn),
            (ht[115] = pi),
            (ht[116] = Tn),
            (ht[117] = Jt),
            (ht[118] = va),
            (ht[119] = Zt),
            (ht[120] = st),
            (ht[121] = Ti),
            (ht[122] = Np),
            (ht[123] = Lt),
            (ht[124] = Zu),
            (ht[125] = em),
            (ht[126] = om),
            (ht[127] = rs),
            (ht[128] = bn),
            (ht[129] = rm),
            (ht[130] = sm),
            (ht[131] = ja),
            (ht[132] = im),
            (ht[133] = am),
            (ht[134] = lm),
            (ht[135] = um),
            (ht[136] = mm),
            (ht[137] = cm),
            (ht[138] = dm),
            (ht[139] = pm),
            (ht[140] = fm),
            (ht[141] = gm));
        } else
          ((Zu = ht[124]),
            (em = ht[125]),
            (om = ht[126]),
            (rs = ht[127]),
            (bn = ht[128]),
            (rm = ht[129]),
            (sm = ht[130]),
            (ja = ht[131]),
            (im = ht[132]),
            (am = ht[133]),
            (lm = ht[134]),
            (um = ht[135]),
            (mm = ht[136]),
            (cm = ht[137]),
            (dm = ht[138]),
            (pm = ht[139]),
            (fm = ht[140]),
            (gm = ht[141]));
        ((ht[61] = Yo),
          (ht[62] = os),
          (ht[63] = Ea),
          (ht[64] = pr),
          (ht[65] = Oa),
          (ht[66] = Ia),
          (ht[67] = Xt),
          (ht[68] = Do),
          (ht[69] = Ue),
          (ht[70] = fi),
          (ht[71] = Da?.toolUseId),
          (ht[72] = Vt),
          (ht[73] = yn),
          (ht[74] = pi),
          (ht[75] = Tn),
          (ht[76] = hi),
          (ht[77] = Jt),
          (ht[78] = va),
          (ht[79] = st),
          (ht[80] = Lt),
          (ht[81] = Zu),
          (ht[82] = em),
          (ht[83] = om),
          (ht[84] = rs),
          (ht[85] = bn),
          (ht[86] = rm),
          (ht[87] = sm),
          (ht[88] = ja),
          (ht[89] = im),
          (ht[90] = am),
          (ht[91] = lm),
          (ht[92] = um),
          (ht[93] = mm),
          (ht[94] = cm),
          (ht[95] = dm),
          (ht[96] = pm),
          (ht[97] = fm),
          (ht[98] = gm),
          (ht[99] = Zt));
      } else
        ((Zu = ht[81]),
          (em = ht[82]),
          (om = ht[83]),
          (rs = ht[84]),
          (bn = ht[85]),
          (rm = ht[86]),
          (sm = ht[87]),
          (ja = ht[88]),
          (im = ht[89]),
          (am = ht[90]),
          (lm = ht[91]),
          (um = ht[92]),
          (mm = ht[93]),
          (cm = ht[94]),
          (dm = ht[95]),
          (pm = ht[96]),
          (fm = ht[97]),
          (gm = ht[98]),
          (Zt = ht[99]));
    }
    ((ht[20] = Yo),
      (ht[21] = os),
      (ht[22] = Ea),
      (ht[23] = pr),
      (ht[24] = Oa),
      (ht[25] = Ia),
      (ht[26] = Xt),
      (ht[27] = Do),
      (ht[28] = Ue),
      (ht[29] = fi),
      (ht[30] = Da?.toolUseId),
      (ht[31] = Vt),
      (ht[32] = $y),
      (ht[33] = yn),
      (ht[34] = pi),
      (ht[35] = Tn),
      (ht[36] = uw),
      (ht[37] = Jt),
      (ht[38] = va),
      (ht[39] = st),
      (ht[40] = Lt),
      (ht[41] = Zu),
      (ht[42] = em),
      (ht[43] = om),
      (ht[44] = rs),
      (ht[45] = bn),
      (ht[46] = rm),
      (ht[47] = sm),
      (ht[48] = ja),
      (ht[49] = im),
      (ht[50] = am),
      (ht[51] = lm),
      (ht[52] = um),
      (ht[53] = mm),
      (ht[54] = cm),
      (ht[55] = dm),
      (ht[56] = ns),
      (ht[57] = pm),
      (ht[58] = fm),
      (ht[59] = gm),
      (ht[60] = Zt));
  } else
    ((Zu = ht[41]),
      (em = ht[42]),
      (om = ht[43]),
      (rs = ht[44]),
      (bn = ht[45]),
      (rm = ht[46]),
      (sm = ht[47]),
      (ja = ht[48]),
      (im = ht[49]),
      (am = ht[50]),
      (lm = ht[51]),
      (um = ht[52]),
      (mm = ht[53]),
      (cm = ht[54]),
      (dm = ht[55]),
      (ns = ht[56]),
      (pm = ht[57]),
      (fm = ht[58]),
      (gm = ht[59]),
      (Zt = ht[60]));
  if (ns !== EARLY_RETURN_SENTINEL) return ns;
  let hi;
  if (
    ht[156] !== Zu ||
    ht[157] !== sm ||
    ht[158] !== ja ||
    ht[159] !== im ||
    ht[160] !== am ||
    ht[161] !== pm ||
    ht[162] !== fm ||
    ht[163] !== gm
  )
    ((hi = r(Zu, {
      flexDirection: pm,
      flexWrap: fm,
      minWidth: gm,
      children: [sm, ja, im, am],
    })),
      (ht[156] = Zu),
      (ht[157] = sm),
      (ht[158] = ja),
      (ht[159] = im),
      (ht[160] = am),
      (ht[161] = pm),
      (ht[162] = fm),
      (ht[163] = gm),
      (ht[164] = hi));
  else hi = ht[164];
  let hm;
  if (
    ht[165] !== Yo ||
    ht[166] !== pr ||
    ht[167] !== rs ||
    ht[168] !== bn ||
    ht[169] !== Xt ||
    ht[170] !== rm ||
    ht[171] !== Do ||
    ht[172] !== Ue.id ||
    ht[173] !== Vt ||
    ht[174] !== Jt ||
    ht[175] !== Zt ||
    ht[176] !== st ||
    ht[177] !== Lt
  )
    ((hm =
      !bn &&
      (rm
        ? e(ToolResultRow, {
            height: 1,
            children: e(t, {
              dimColor: !0,
              children: "Waiting for permission\u2026",
            }),
          })
        : rs
          ? gw(Zt)
          : Ap(
              Zt,
              st,
              Do,
              Ue.id,
              Vt,
              {
                verbose: Lt,
                inProgressToolCallCount: pr,
                isTranscriptMode: Xt,
                activeAgents: Yo,
              },
              Jt,
            ))),
      (ht[165] = Yo),
      (ht[166] = pr),
      (ht[167] = rs),
      (ht[168] = bn),
      (ht[169] = Xt),
      (ht[170] = rm),
      (ht[171] = Do),
      (ht[172] = Ue.id),
      (ht[173] = Vt),
      (ht[174] = Jt),
      (ht[175] = Zt),
      (ht[176] = st),
      (ht[177] = Lt),
      (ht[178] = hm));
  else hm = ht[178];
  let Fa;
  if (ht[179] !== em || ht[180] !== lm || ht[181] !== hi || ht[182] !== hm)
    ((Fa = r(em, { flexDirection: lm, children: [hi, hm] })),
      (ht[179] = em),
      (ht[180] = lm),
      (ht[181] = hi),
      (ht[182] = hm),
      (ht[183] = Fa));
  else Fa = ht[183];
  let bD;
  if (
    ht[184] !== om ||
    ht[185] !== um ||
    ht[186] !== mm ||
    ht[187] !== cm ||
    ht[188] !== dm ||
    ht[189] !== Fa
  )
    ((bD = e(om, {
      flexDirection: um,
      justifyContent: mm,
      marginTop: cm,
      width: dm,
      children: Fa,
    })),
      (ht[184] = om),
      (ht[185] = um),
      (ht[186] = mm),
      (ht[187] = cm),
      (ht[188] = dm),
      (ht[189] = Fa),
      (ht[190] = bD));
  else bD = ht[190];
  return bD;
}
function pw(l, f, g) {
  let T = oL(f);
  if (T !== null) return T;
  try {
    return renderToolUseMessageForTool(l, f, g);
  } catch (y) {
    return (
      logError(
        dt(
          Error(`Error rendering tool use message for ${l.name}: ${y}`),
          `Error rendering tool use message (mcp=${l.name.startsWith("mcp__")})`,
        ),
      ),
      ""
    );
  }
}
function Ap(
  l,
  f,
  g,
  T,
  y,
  {
    verbose: R,
    inProgressToolCallCount: k,
    isTranscriptMode: S,
    activeAgents: P,
  },
  A,
) {
  let O = y.filter((I) => I.data.type !== "hook_progress");
  try {
    let I =
      hp(l, "renderToolUseProgressMessage")?.(O, {
        tools: f,
        verbose: R,
        terminalSize: A,
        inProgressToolCallCount: k ?? 1,
        isTranscriptMode: S,
        activeAgents: P,
      }) ?? null;
    return r(N, {
      children: [
        e(Yz, {
          children: e(xa, {
            hookEvent: "PreToolUse",
            lookups: g,
            toolUseID: T,
            isTranscriptMode: S,
          }),
        }),
        I,
      ],
    });
  } catch (I) {
    return (
      logError(
        dt(
          Error(
            `Error rendering tool use progress message for ${l.name}: ${I}`,
          ),
          `Error rendering tool use progress message (mcp=${l.name.startsWith("mcp__")})`,
        ),
      ),
      null
    );
  }
}
function gw(l) {
  try {
    return hp(l, "renderToolUseQueuedMessage")?.();
  } catch (f) {
    return (
      logError(
        dt(
          Error(`Error rendering tool use queued message for ${l.name}: ${f}`),
          `Error rendering tool use queued message (mcp=${l.name.startsWith("mcp__")})`,
        ),
      ),
      null
    );
  }
}
var b4 = createLazyValue(() =>
  uv([nt({ file_path: le().min(1) }), nt({ notebook_path: le().min(1) })]),
);
F();
import { basename as yU, sep as RU } from "path";
function ym() {
  if (ke()) return !1;
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_coordinator_panel", !0);
}
F();
import { relative as bw } from "path";
function wD(Y4, V4) {
  return Y4 + V4.diagnostics.length;
}
function ND(yi, X4) {
  return e(
    ToolResultRow,
    {
      children: r(t, {
        dimColor: !0,
        wrap: "wrap",
        children: [
          "  ",
          getDiagnosticSeverityGlyph(yi.severity),
          " [Line ",
          yi.range.start.line + 1,
          ":",
          yi.range.start.character + 1,
          "] ",
          yi.message,
          yi.code ? ` [${yi.code}]` : "",
          yi.source ? ` (${yi.source})` : "",
        ],
      }),
    },
    X4,
  );
}
function UD(Op, fileIndex) {
  return r(N, {
    children: [
      e(ToolResultRow, {
        children: r(t, {
          dimColor: !0,
          wrap: "wrap",
          children: [
            e(t, {
              bold: !0,
              children: bw(
                getCwd(),
                Op.uri.replace("file://", "").replace("_claude_fs_right:", ""),
              ),
            }),
            " ",
            e(t, {
              dimColor: !0,
              children: Op.uri.startsWith("file://")
                ? "(file://)"
                : Op.uri.startsWith("_claude_fs_right:")
                  ? "(claude_fs_right)"
                  : `(${beforeFirst(Op.uri, ":")})`,
            }),
            ":",
          ],
        }),
      }),
      Op.diagnostics.map(ND),
    ],
  });
}
function vp(K4) {
  let Rw = _(11),
    { attachment: hw, verbose: Tw, isTranscriptMode: yw } = K4,
    Lp;
  if (Rw[0] !== hw.files || Rw[1] !== yw || Rw[2] !== Tw) {
    Lp = EARLY_RETURN_SENTINEL;
    bb0: {
      let Hy = parseDiagnosticsFiles(hw.files);
      if (Hy.length === 0) {
        Lp = null;
        break bb0;
      }
      let Gy = Hy.reduce(wD, 0);
      let zy = Hy.length;
      if (Tw || yw) {
        Lp = e(o, { flexDirection: "column", children: Hy.map(UD) });
        break bb0;
      } else {
        let Ky;
        if (Rw[4] !== Gy)
          ((Ky = e(t, { bold: !0, children: Gy })), (Rw[4] = Gy), (Rw[5] = Ky));
        else Ky = Rw[5];
        const Mw = Gy === 1 ? "issue" : "issues";
        const kw = zy === 1 ? "file" : "files";
        let CD;
        if (Rw[6] !== zy || Rw[7] !== Ky || Rw[8] !== Mw || Rw[9] !== kw)
          ((CD = e(ToolResultRow, {
            children: r(t, {
              dimColor: !0,
              wrap: "wrap",
              children: [
                "Found ",
                Ky,
                " new diagnostic",
                " ",
                Mw,
                " in ",
                zy,
                " ",
                kw,
                " (ctrl+o to expand)",
              ],
            }),
          })),
            (Rw[6] = zy),
            (Rw[7] = Ky),
            (Rw[8] = Mw),
            (Rw[9] = kw),
            (Rw[10] = CD));
        else CD = Rw[10];
        Lp = CD;
        break bb0;
      }
    }
    ((Rw[0] = hw.files), (Rw[1] = yw), (Rw[2] = Tw), (Rw[3] = Lp));
  } else Lp = Rw[3];
  if (Lp !== EARLY_RETURN_SENTINEL) return Lp;
}
import { resolve } from "path";
import {
  readdir,
  readFile,
  realpath,
  stat as LD,
  utimes,
} from "fs/promises";
import {
  basename as vD,
  isAbsolute as ID,
  join as Yy,
  normalize,
  relative as Cw,
  sep as Wa,
} from "path";
var DD = 16,
  xw = "surveyRating";
function BD(l) {
  if (typeof l !== "object" || l === null || Array.isArray(l)) return null;
  let { count: f, mean: g, total: T } = l;
  if (typeof f !== "number" || !Number.isInteger(f) || f < 1) return null;
  if (typeof g !== "number" || !Number.isFinite(g)) return null;
  let y =
    typeof T === "number" && Number.isInteger(T) && T >= f && T <= 3 * f
      ? T
      : Math.min(3 * f, Math.max(f, Math.round(g * f)));
  return { count: f, mean: g, total: y };
}
function jD(l, f) {
  let g = BD(l);
  if (g === null) return { count: 1, mean: f, total: f };
  let T = g.count + 1,
    y = g.total + f;
  return { count: T, mean: Math.round((y / T) * 100) / 100, total: y };
}
var Vy = 1e4,
  FD = 4 * Vy,
  _w = 262144;
function Xy(l, f) {
  let g = Cw(l, f);
  if (g === "" || g.startsWith("..")) return !0;
  return isExcludedMemoryPath(g.split(Wa).join("/"));
}
async function $D(l) {
  let f = [],
    g = 0,
    T = !1,
    y = !1,
    R = await runPaginatedScan(
      async (S) => {
        let P = await l.storageV5.listRecursive(
            { namespace: "memory", projectKey: l.projectKey },
            { cursor: S, skipKeyStats: !0, links: "skip", maxLeaves: FD },
          ),
          A = P.ok ? P.value.skipped : void 0;
        if (A !== void 0 && (A.unrepresentable > 0 || A.reserved > 0)) y = !0;
        return P;
      },
      (S) => {
        for (let P of S) {
          let A =
            P.kind === "key" && P.key.namespace === "memory"
              ? P.key.relPath.join("/")
              : void 0;
          if (A !== void 0 && isExcludedMemoryPath(A)) continue;
          if (g >= Vy) {
            T = !0;
            return;
          }
          if (((g += 1), A === void 0 || P.viaSymlink || !A.endsWith(".md")))
            continue;
          f.push(A);
        }
      },
      { until: () => T },
    ),
    k = T || y || R.status !== "done";
  if (k)
    n(
      `memorySurveyRating: v5 scan failed closed: ${T ? "capped" : y ? "entries omitted by the listing" : R.status === "error" ? R.error.code : R.status}`,
    );
  return { files: f, truncated: k };
}
async function WD(l) {
  let f = [],
    g = [""];
  while (g.length > 0) {
    let T = g.pop(),
      y;
    try {
      y = await readdir(Yy(l, T), { withFileTypes: !0 });
    } catch {
      continue;
    }
    for (let R of y) {
      if (R.isSymbolicLink()) continue;
      let k = T === "" ? R.name : `${T}/${R.name}`;
      if (R.isDirectory()) {
        if (!isExcludedMemoryPath(k)) g.push(k);
      } else if (R.isFile() && R.name.endsWith(".md") && !isExcludedMemoryPath(k)) {
        if (f.length >= Vy) return { files: f, truncated: !0 };
        f.push(k);
      }
    }
  }
  return { files: f, truncated: !1 };
}
async function qD(l, f, g) {
  if (!l.endsWith(".md")) return null;
  let T = (S) => isAutoMemPath(S) && !isWithinTeamMemoryDir(S) && !Xy(f, S);
  if (ID(l)) {
    let S = normalize(l);
    return T(S) ? S : null;
  }
  if (l.includes("/") || l.includes(Wa)) {
    let S = normalize(Yy(f, l));
    return T(S) ? S : null;
  }
  let y = await g();
  if (y.truncated) return null;
  let R = y.files.filter((S) => vD(S) === l);
  if (R.length !== 1) return null;
  let k = normalize(Yy(f, R[0]));
  return T(k) ? k : null;
}
function Bp(l) {
  if (Array.isArray(l)) return `[${l.map(Bp).join(",")}]`;
  if (typeof l === "object" && l !== null)
    return `{${Object.keys(l)
      .sort()
      .map((f) => `${JSON.stringify(f)}:${Bp(l[f])}`)
      .join(",")}}`;
  return JSON.stringify(l) ?? "undefined";
}
function HD(l, f, g) {
  let T = f.includes(`\r
`)
      ? `\r
`
      : `
`,
    y = f.length,
    k = l.slice(0, y).split(`
`),
    S = /^(\s*)surveyRating:/,
    P = [];
  for (let W = 1; W < k.length - 1; W++) if (S.test(k[W])) P.push(W);
  if (P.length > 1) return null;
  let A = (W) =>
    `${W}surveyRating:${T}${W}  count: ${g.count}${T}${W}  mean: ${g.mean}${T}${W}  total: ${g.total}`;
  if (P.length === 1) {
    let W = P[0],
      ne = k[W].match(S)[1],
      de = W + 1;
    while (de < k.length - 1) {
      let ce = k[de].replace(/\r$/, "");
      if (/^\s*(#|$)/.test(ce)) {
        let ie = de + 1;
        while (ie < k.length - 1 && /^\s*(#|$)/.test(k[ie].replace(/\r$/, "")))
          ie++;
        if (
          ie < k.length - 1 &&
          /\S/.test(k[ie]) &&
          k[ie].match(/^(\s*)/)[1].length > ne.length
        ) {
          de = ie;
          continue;
        }
        break;
      }
      if (ce.match(/^(\s*)/)[1].length > ne.length) {
        de++;
        continue;
      }
      break;
    }
    return (
      [...k.slice(0, W), A(ne), ...k.slice(de)].join(`
`) + l.slice(y)
    );
  }
  let O = k.findIndex(
      (W, ne) => ne > 0 && /^metadata:/.test(W.replace(/\r$/, "")),
    ),
    I = k.findIndex(
      (W, ne) => ne > 0 && /^metadata:\s*$/.test(W.replace(/\r$/, "")),
    );
  if (O !== -1 && I === -1) return null;
  if (I !== -1) {
    let W = I + 1;
    while (W < k.length - 1 && /^\s*(#|$)/.test(k[W].replace(/\r$/, ""))) W++;
    let ne = k[W]?.match(/^(\s+)\S/),
      de = ne ? ne[1] : "  ";
    return (
      [...k.slice(0, I + 1), A(de), ...k.slice(I + 1)].join(`
`) + l.slice(y)
    );
  }
  let B = k.length - 1;
  while (B > 0 && k[B].trim() !== "---") B--;
  if (B === 0) return null;
  return (
    [...k.slice(0, B), `metadata:${T}${A("  ")}`, ...k.slice(B)].join(`
`) + l.slice(y)
  );
}
function GD(l, f, g) {
  return (
    l.endsWith(".md") &&
    l.startsWith(f + Wa) &&
    !l.startsWith(g + Wa) &&
    !isWithinTeamMemoryDir(l) &&
    !Xy(f + Wa, l)
  );
}
async function zD(l, f, g, T) {
  return j6(l, async () => {
    let y;
    try {
      let [S, P, A] = await Promise.all([realpath(f), resolveAutoMemPath(), resolveAutoMemPath("team")]);
      if (S !== f || !GD(f, P, A)) return !1;
      y = Cw(P, f).split(Wa);
    } catch {
      return !1;
    }
    let R, k;
    try {
      let S = await LD(f);
      if (S.size > _w) return !1;
      ((R = S.mtime), (k = S.atime));
    } catch {
      return !1;
    }
    if (T !== void 0 && hasValidPathSegments(y)) {
      let S = await T.storageV5.updateText(STORAGE_KEYS.memory(T.projectKey, y), (P) => {
        if (P === void 0 || Buffer.byteLength(P.value, "utf8") > _w)
          return { skip: !0 };
        let A = Sw(P.value, f, g);
        return A === null
          ? { skip: !0 }
          : { write: Uet(A, detectLineEndings(P.value)), result: P.mtimeMs };
      });
      if (!S.ok)
        return (
          n(`memorySurveyRating: backend update failed: ${S.error.code}`),
          !1
        );
      if (!S.value.written) return !1;
      if (S.value.result !== void 0) R = new Date(S.value.result);
    } else {
      let S;
      try {
        S = await readFile(f, "utf8");
      } catch {
        return !1;
      }
      let P = Sw(S, f, g);
      if (P === null) return !1;
      await HQ(f, P, "utf8", detectLineEndings(S));
    }
    try {
      await utimes(f, k, R);
    } catch {}
    return !0;
  });
}
function Sw(l, f, g) {
  let T = l.match(FRONTMATTER_PATTERN),
    y = l.match(STRICT_FRONTMATTER_PATTERN);
  if (T === null || y === null || T[1].trim() !== y[1].trim()) return null;
  let R = parseFrontmatter(l, f);
  if (R.parseError || Object.keys(R.frontmatter).length === 0) return null;
  let k = parseMemoryDocument(l, f),
    { frontmatter: S } = k,
    P = jD(S.metadata[xw], g),
    A = HD(l, y[0], P);
  if (A === null) return null;
  let O = parseMemoryDocument(A, f),
    I = Bp({
      name: k.frontmatter.name,
      description: k.frontmatter.description,
      metadata: {
        ...k.frontmatter.metadata,
        [xw]: { count: P.count, mean: P.mean, total: P.total },
      },
    });
  if (
    Bp({
      name: O.frontmatter.name,
      description: O.frontmatter.description,
      metadata: O.frontmatter.metadata,
    }) !== I ||
    O.body !== k.body
  )
    return null;
  let K = A.match(STRICT_FRONTMATTER_PATTERN);
  if (K === null || A.slice(K[0].length) !== l.slice(y[0].length)) return null;
  return A;
}
async function mZt(l, f, g, T) {
  try {
    if (!Number.isInteger(g) || g < 1 || g > 3) return [];
    let y = getAutoMemPath(),
      R = T === void 0 ? void 0 : getMemoryProjectKey(y),
      k =
        isHoverRestEnabled() && T !== void 0 && R !== void 0 && (await canUseTeamMemoryStorage(y))
          ? { storageV5: T, projectKey: R }
          : void 0,
      S = null,
      P = () => ((S ??= k === void 0 ? WD(y) : $D(k)), S),
      A = new Map();
    for (let B of f.slice(0, DD)) {
      let K = await qD(B.trim(), y, P);
      if (K === null) continue;
      let W = await realpath(K).catch(() => null);
      if (W !== null && !A.has(W)) A.set(W, K);
    }
    let O = await Promise.allSettled(
        [...A].map(async ([B, K]) => {
          if (await zD(K, B, g, k)) return (l.notifyWrite(K), !0);
          return !1;
        }),
      ),
      I = countMatching(O, (B) => B.status === "fulfilled" && B.value === !0);
    return (
      logEvent("tengu_memory_rating_writeback", {
        cited_count: fromNumber(f.length),
        resolved_count: fromNumber(A.size),
        written_count: fromNumber(I),
      }),
      [...A.values()]
    );
  } catch (y) {
    return (n(`memorySurveyRating: write-back failed: ${String(y)}`), []);
  }
}
function jp(l) {
  let f = normalize(l);
  return f.endsWith(".md") && isAutoMemPath(f) && !isWithinTeamMemoryDir(f) && !Xy(getAutoMemPath(), f);
}
function gZt(l) {
  return (l ?? []).filter((f) => f.rated === void 0);
}
function U8(l) {
  let f = 0;
  for (let g of l ?? []) if (g.rated === void 0) f++;
  return f;
}
function KD(l, f, g) {
  let T = l.findIndex((R) => R.path === f),
    y = l[T];
  if (y === void 0 || y.rated === g) return l;
  return l.with(T, { ...y, rated: g });
}
function YD(l, f, g) {
  return f.reduce((T, y) => KD(T, y, g), l);
}
function gWe(l, f, g) {
  if (l.sessionMemories === void 0) return l;
  let T = YD(l.sessionMemories, f, g);
  return T === l.sessionMemories ? l : { ...l, sessionMemories: T };
}
function g$n(l) {
  return l.flatMap((f) => VD(f));
}
function VD(l) {
  if (l.type === "attachment" && l.attachment.type === "relevant_memories")
    return l.attachment.memories
      .filter((g) => jp(g.path))
      .map((g) => ({
        path: resolve(g.path),
        content: g.content,
        source: "recalled",
      }));
  if (l.type !== "user") return [];
  let f = ReadTool.outputSchema.safeParse(l.toolUseResult);
  if (!f.success || f.data.type !== "text" || !jp(f.data.file.filePath))
    return [];
  return [
    {
      path: resolve(f.data.file.filePath),
      content: Jy(f.data.file.content, l.message.content),
      source: "read",
    },
  ];
}
function Jy(l, f) {
  if (l !== "" || !Array.isArray(f)) return l;
  let g = f.flatMap((T) =>
    isRecord(T) && T.type === "tool_result" && typeof T.content === "string"
      ? [T.content]
      : [],
  );
  return g.length === 1
    ? g[0]
        .replace(/^(?:<system-reminder>[\s\S]*?<\/system-reminder>\n?)+/, "")
        .split(
          `
`,
        )
        .map(TRt).join(`
`)
    : l;
}
function h$n(l) {
  return l
    .filter((f) => f.type === "AutoMemPinned" && shouldInjectMemoryFile(f) && jp(f.path))
    .map((f) => ({
      path: resolve(f.path),
      content: f.rawContent ?? f.content,
      source: "pinned",
    }));
}
function _$n(l, f) {
  let g = new Map(
      f.filter((k) => k.source === "pinned").map((k) => [k.path, k]),
    ),
    T = l.some((k) => k.source !== "pinned" && g.has(k.path))
      ? l.map((k) => {
          let S = k.source !== "pinned" ? g.get(k.path) : void 0;
          return S ? { ...S, rated: k.rated } : k;
        })
      : l,
    y = new Set(l.map((k) => k.path)),
    R = f.filter((k) => {
      if (y.has(k.path)) return !1;
      return (y.add(k.path), !0);
    });
  return R.length === 0 ? T : [...T, ...R];
}
function eB(ZD) {
  return [ZD.path, ZD.content];
}
var Rm = 5,
  Ew = 5;
function Ri(v3) {
  let oR = _(18),
    { ops: Zy, relevantMemories: ww, isActiveGroup: eR, lookups: Nw } = v3,
    { columns: Aw } = useTerminalSize(),
    rR;
  if (oR[0] !== ww) ((rR = ww ?? []), (oR[0] = ww), (oR[1] = rR));
  else rR = oR[1];
  let nR, Fp, sR, iR;
  if (
    oR[2] !== Aw ||
    oR[3] !== eR ||
    oR[4] !== Nw ||
    oR[5] !== Zy ||
    oR[6] !== rR
  ) {
    let I3 = new Map(rR.map(eB));
    let XD = Zy.slice(0, Ew);
    Fp = Zy.length - XD.length;
    nR = o;
    sR = "column";
    iR = XD.map(($p) => {
      let QD =
        $p.kind === "read"
          ? eR
            ? "Recalling"
            : "Recalled"
          : eR
            ? "Remembering"
            : "Remembered";
      let D3 = truncateToWidth(Mm(getMemoryFileDisplayName($p.path, Lw($p, I3, Nw)), !1), Aw - Rm - te(`${QD} `));
      return r(
        t,
        {
          dimColor: !0,
          children: [
            e(t, { "aria-hidden": !0, children: "  \u23BF  " }),
            QD,
            " ",
            D3,
          ],
        },
        `${$p.kind}-${$p.path}`,
      );
    });
    ((oR[2] = Aw),
      (oR[3] = eR),
      (oR[4] = Nw),
      (oR[5] = Zy),
      (oR[6] = rR),
      (oR[7] = nR),
      (oR[8] = Fp),
      (oR[9] = sR),
      (oR[10] = iR));
  } else ((nR = oR[7]), (Fp = oR[8]), (sR = oR[9]), (iR = oR[10]));
  let aR;
  if (oR[11] !== Fp)
    ((aR =
      Fp > 0 &&
      r(t, {
        dimColor: !0,
        children: [
          e(t, { "aria-hidden": !0, children: "  \u23BF  " }),
          "+",
          Fp,
          " more",
          " ",
          e(TranscriptExpandHint, {}),
        ],
      })),
      (oR[11] = Fp),
      (oR[12] = aR));
  else aR = oR[12];
  let JD;
  if (oR[13] !== nR || oR[14] !== sR || oR[15] !== iR || oR[16] !== aR)
    ((JD = r(nR, { flexDirection: sR, children: [iR, aR] })),
      (oR[13] = nR),
      (oR[14] = sR),
      (oR[15] = iR),
      (oR[16] = aR),
      (oR[17] = JD));
  else JD = oR[17];
  return JD;
}
function Lw(l, f, g) {
  if (l.label !== void 0) return l.label;
  if (l.kind === "write") return;
  let T = f.get(l.path);
  if (T !== void 0) return getFrontmatterDescription(T);
  if (l.toolUseId === void 0) return;
  let y = g?.toolResultByToolUseID.get(l.toolUseId);
  if (y?.type !== "user") return;
  let R = ReadTool.outputSchema.safeParse(y.toolUseResult);
  return R.success && R.data.type === "text"
    ? getFrontmatterDescription(Jy(R.data.file.content, y.message.content))
    : void 0;
}
function Mm(l, f) {
  return f || /^\S\S*\p{Lu}/u.test(l)
    ? l
    : l.charAt(0).toLowerCase() + l.slice(1);
}
function TR(G3) {
  let Wp = _(12),
    { request: Ow, senderName: z3, replyInstructions: uR } = G3,
    K3 = z3 || UNKNOWN_SENDER,
    oB;
  if (Wp[0] !== Ow.reason)
    ((oB = capFrameBodyForDisplay(Ow.reason, IDLE_SUMMARY_RECEIVE_BOUND)), (Wp[0] = Ow.reason), (Wp[1] = oB));
  else oB = Wp[1];
  let mR = oB;
  const vw = `Shutdown request from ${K3}`;
  let dR;
  if (Wp[2] !== mR)
    ((dR = mR && r(t, { children: ["Reason: ", mR] })),
      (Wp[2] = mR),
      (Wp[3] = dR));
  else dR = Wp[3];
  let pR;
  if (Wp[4] !== vw || Wp[5] !== dR)
    ((pR = e(TitledBorderBox, { color: "warning", title: vw, children: dR })),
      (Wp[4] = vw),
      (Wp[5] = dR),
      (Wp[6] = pR));
  else pR = Wp[6];
  let fR;
  if (Wp[7] !== uR)
    ((fR = uR && e(t, { dimColor: !0, children: uR })),
      (Wp[7] = uR),
      (Wp[8] = fR));
  else fR = Wp[8];
  let tB;
  if (Wp[9] !== pR || Wp[10] !== fR)
    ((tB = r(o, { flexDirection: "column", marginY: 1, children: [pR, fR] })),
      (Wp[9] = pR),
      (Wp[10] = fR),
      (Wp[11] = tB));
  else tB = Wp[11];
  return tB;
}
function Fw(Y3) {
  let gR = _(8),
    { response: Iw, senderName: V3 } = Y3,
    X3 = V3 || UNKNOWN_SENDER,
    rB;
  if (gR[0] !== Iw.reason)
    ((rB = capFrameBodyForDisplay(Iw.reason, IDLE_SUMMARY_RECEIVE_BOUND)), (gR[0] = Iw.reason), (gR[1] = rB));
  else rB = gR[1];
  let Bw = rB;
  const jw = `Shutdown rejected by ${X3}`;
  let hR;
  if (gR[2] !== Bw)
    ((hR = e(DashedBorderBox, { children: r(t, { children: ["Reason: ", Bw] }) })),
      (gR[2] = Bw),
      (gR[3] = hR));
  else hR = gR[3];
  let nB;
  if (gR[4] === MEMO_CACHE_SENTINEL)
    ((nB = e(t, {
      dimColor: !0,
      children:
        "Teammate is continuing to work. You may request shutdown again later.",
    })),
      (gR[4] = nB));
  else nB = gR[4];
  let sB;
  if (gR[5] !== jw || gR[6] !== hR)
    ((sB = e(o, {
      flexDirection: "column",
      marginY: 1,
      children: r(TitledBorderBox, { color: "subtle", title: jw, children: [hR, nB] }),
    })),
      (gR[5] = jw),
      (gR[6] = hR),
      (gR[7] = sB));
  else sB = gR[7];
  return sB;
}
function $w(l, f) {
  let g = l.indexOf(`

`),
    T = g === -1 ? l : l.slice(0, g),
    y = parseFrameForDisplay(ShutdownRequestMessageSchema(), T);
  if (y && T === l) return e(TR, { request: y, senderName: f });
  if (y && capRawFrameTextForDisplay(T, f) === T && withShutdownReplyInstructions(T, f) === l)
    return e(TR, {
      request: y,
      senderName: f,
      replyInstructions: l.slice(g + 2),
    });
  if (parseFrameForDisplay(ShutdownApprovedMessageSchema(), l)) return null;
  let R = parseFrameForDisplay(ShutdownRejectedMessageSchema(), l);
  if (R) return e(Fw, { response: R, senderName: f });
  return null;
}
function Hw(n6) {
  let Ha = _(16),
    { assignment: ss, senderName: s6 } = n6,
    iB;
  if (Ha[0] !== ss.taskId)
    ((iB = capIdFrameField(ss.taskId, IDLE_ID_FIELD_RECEIVE_BOUND)), (Ha[0] = ss.taskId), (Ha[1] = iB));
  else iB = Ha[1];
  let i6 = iB;
  const Ww = s6 || UNKNOWN_SENDER;
  let aB;
  if (Ha[2] !== Ww) ((aB = capIdFrameField(Ww, IDLE_ID_FIELD_RECEIVE_BOUND)), (Ha[2] = Ww), (Ha[3] = aB));
  else aB = Ha[3];
  let a6 = aB,
    lB;
  if (Ha[4] !== ss.subject)
    ((lB = capIdFrameField(ss.subject, IDLE_SUMMARY_RECEIVE_BOUND)), (Ha[4] = ss.subject), (Ha[5] = lB));
  else lB = Ha[5];
  let yR = lB,
    uB;
  if (Ha[6] !== ss.description)
    ((uB = capFrameBodyForDisplay(ss.description, IDLE_RESULT_MAX_LENGTH)), (Ha[6] = ss.description), (Ha[7] = uB));
  else uB = Ha[7];
  let RR = uB;
  const qw = `Task #${i6} assigned by ${a6}`;
  let MR;
  if (Ha[8] !== yR)
    ((MR = yR && e(t, { bold: !0, children: yR })), (Ha[8] = yR), (Ha[9] = MR));
  else MR = Ha[9];
  let kR;
  if (Ha[10] !== RR)
    ((kR = RR && e(t, { dimColor: !0, children: RR })),
      (Ha[10] = RR),
      (Ha[11] = kR));
  else kR = Ha[11];
  let mB;
  if (Ha[12] !== qw || Ha[13] !== MR || Ha[14] !== kR)
    ((mB = e(o, {
      flexDirection: "column",
      marginY: 1,
      children: r(TitledBorderBox, {
        color: "cyan_FOR_SUBAGENTS_ONLY",
        title: qw,
        children: [MR, kR],
      }),
    })),
      (Ha[12] = qw),
      (Ha[13] = MR),
      (Ha[14] = kR),
      (Ha[15] = mB));
  else mB = Ha[15];
  return mB;
}
function Gw(l, f) {
  let g = isTaskAssignment(l);
  if (g) return e(Hw, { assignment: g, senderName: f });
  return null;
}
function Vw(k6) {
  let qp = _(12),
    { request: km, senderName: b6 } = k6,
    x6 = b6 || UNKNOWN_SENDER,
    cB;
  if (qp[0] !== km.planFilePath)
    ((cB = capIdFrameField(km.planFilePath, IDLE_ID_FIELD_RECEIVE_BOUND)), (qp[0] = km.planFilePath), (qp[1] = cB));
  else cB = qp[1];
  let zw = cB,
    dB;
  if (qp[2] !== km.planContent)
    ((dB = capFrameBodyForDisplay(km.planContent, PLAN_CONTENT_DISPLAY_BOUND)), (qp[2] = km.planContent), (qp[3] = dB));
  else dB = qp[3];
  let Kw = dB;
  const Yw = `Plan Approval Request from ${x6}`;
  let bR;
  if (qp[4] !== Kw)
    ((bR = e(DashedBorderBox, { children: e(js, { stripPromptTags: !1, children: Kw }) })),
      (qp[4] = Kw),
      (qp[5] = bR));
  else bR = qp[5];
  let xR;
  if (qp[6] !== zw)
    ((xR = r(t, { dimColor: !0, children: ["Plan file: ", zw] })),
      (qp[6] = zw),
      (qp[7] = xR));
  else xR = qp[7];
  let pB;
  if (qp[8] !== Yw || qp[9] !== bR || qp[10] !== xR)
    ((pB = e(o, {
      flexDirection: "column",
      marginY: 1,
      children: r(TitledBorderBox, { color: "planMode", title: Yw, children: [bR, xR] }),
    })),
      (qp[8] = Yw),
      (qp[9] = bR),
      (qp[10] = xR),
      (qp[11] = pB));
  else pB = qp[11];
  return pB;
}
function Xw(_6) {
  let wr = _(20),
    { response: _R, senderName: S6 } = _6,
    fB;
  if (wr[0] !== _R.feedback)
    ((fB = capFrameBodyForDisplay(_R.feedback, IDLE_RESULT_MAX_LENGTH)), (wr[0] = _R.feedback), (wr[1] = fB));
  else fB = wr[1];
  let Mi = fB,
    bm = S6 || UNKNOWN_SENDER;
  if (_R.approved) {
    let Hp;
    if (wr[2] === MEMO_CACHE_SENTINEL)
      ((Hp = e(t, { "aria-hidden": !0, children: "\u2713 " })), (wr[2] = Hp));
    else Hp = wr[2];
    let is;
    if (wr[3] !== bm)
      ((is = r(t, { children: [Hp, "Plan Approved by ", bm] })),
        (wr[3] = bm),
        (wr[4] = is));
    else is = wr[4];
    let as;
    if (wr[5] !== Mi)
      ((as = Mi && e(DashedBorderBox, { children: r(t, { children: ["Feedback: ", Mi] }) })),
        (wr[5] = Mi),
        (wr[6] = as));
    else as = wr[6];
    let Gp;
    if (wr[7] === MEMO_CACHE_SENTINEL)
      ((Gp = e(t, {
        children:
          "You can now proceed with implementation. Your plan mode restrictions have been lifted.",
      })),
        (wr[7] = Gp));
    else Gp = wr[7];
    let zp;
    if (wr[8] !== is || wr[9] !== as)
      ((zp = e(o, {
        flexDirection: "column",
        marginY: 1,
        children: r(TitledBorderBox, { color: "success", title: is, children: [as, Gp] }),
      })),
        (wr[8] = is),
        (wr[9] = as),
        (wr[10] = zp));
    else zp = wr[10];
    return zp;
  }
  let Hp;
  if (wr[11] === MEMO_CACHE_SENTINEL)
    ((Hp = e(t, { "aria-hidden": !0, children: "\u2717 " })), (wr[11] = Hp));
  else Hp = wr[11];
  let is;
  if (wr[12] !== bm)
    ((is = r(t, { children: [Hp, "Plan Rejected by ", bm] })),
      (wr[12] = bm),
      (wr[13] = is));
  else is = wr[13];
  let as;
  if (wr[14] !== Mi)
    ((as = Mi && e(DashedBorderBox, { children: r(t, { children: ["Feedback: ", Mi] }) })),
      (wr[14] = Mi),
      (wr[15] = as));
  else as = wr[15];
  let Gp;
  if (wr[16] === MEMO_CACHE_SENTINEL)
    ((Gp = e(t, {
      dimColor: !0,
      children:
        "Please revise your plan based on the feedback and call ExitPlanMode again.",
    })),
      (wr[16] = Gp));
  else Gp = wr[16];
  let zp;
  if (wr[17] !== is || wr[18] !== as)
    ((zp = e(o, {
      flexDirection: "column",
      marginY: 1,
      children: r(TitledBorderBox, { color: "error", title: is, children: [as, Gp] }),
    })),
      (wr[17] = is),
      (wr[18] = as),
      (wr[19] = zp));
  else zp = wr[19];
  return zp;
}
function Qw(l, f) {
  let g = parseFrameForDisplay(PlanApprovalRequestMessageSchema(), l);
  if (g) return e(Vw, { request: g, senderName: f });
  let T = parseFrameForDisplay(PlanApprovalResponseMessageSchema(), l);
  if (T) return e(Xw, { response: T, senderName: f });
  return null;
}
function Jw(l, f) {
  let g = parseFrameForDisplay(TeammateTerminatedMessageSchema(), l);
  if (!g) return null;
  let T = capFrameBodyForDisplay(g.message, IDLE_RESULT_MAX_LENGTH);
  if (!T.trim()) return null;
  return e(o, {
    flexDirection: "column",
    marginY: 1,
    children: e(TitledBorderBox, {
      color: "subtle",
      title: `Teammate terminated (from ${f || UNKNOWN_SENDER})`,
      children: e(t, { wrap: "wrap", children: T }),
    }),
  });
}
function Ga(l, f) {
  return Qw(l, f) ?? $w(l, f) ?? Gw(l, f) ?? Jw(l, f);
}
function bi(H6) {
  let ki = _(18),
    {
      displayName: Zw,
      inkColor: e0,
      summary: SR,
      taskId: o0,
      taskSubject: PR,
    } = H6,
    gB;
  if (ki[0] === MEMO_CACHE_SENTINEL)
    ((gB = e(t, { "aria-hidden": !0, children: figures.pointer })), (ki[0] = gB));
  else gB = ki[0];
  let CR;
  if (ki[1] !== Zw || ki[2] !== e0)
    ((CR = r(t, { color: e0, children: ["@ ", Zw, gB] })),
      (ki[1] = Zw),
      (ki[2] = e0),
      (ki[3] = CR));
  else CR = ki[3];
  let wR;
  if (ki[4] !== SR)
    ((wR = SR.trim() && r(t, { children: [" ", SR] })),
      (ki[4] = SR),
      (ki[5] = wR));
  else wR = ki[5];
  let UR;
  if (ki[6] !== CR || ki[7] !== wR)
    ((UR = r(o, { children: [CR, wR] })),
      (ki[6] = CR),
      (ki[7] = wR),
      (ki[8] = UR));
  else UR = ki[8];
  let hB;
  if (ki[9] === MEMO_CACHE_SENTINEL) ((hB = e(StatusIndicator, { status: "success" })), (ki[9] = hB));
  else hB = ki[9];
  let NR;
  if (ki[10] !== PR)
    ((NR = PR && r(t, { dimColor: !0, children: [" (", PR, ")"] })),
      (ki[10] = PR),
      (ki[11] = NR));
  else NR = ki[11];
  let AR;
  if (ki[12] !== NR || ki[13] !== o0)
    ((AR = r(ToolResultRow, {
      children: [hB, r(t, { children: [" ", "Completed task #", o0, NR] })],
    })),
      (ki[12] = NR),
      (ki[13] = o0),
      (ki[14] = AR));
  else AR = ki[14];
  let TB;
  if (ki[15] !== UR || ki[16] !== AR)
    ((TB = r(o, { flexDirection: "column", marginTop: 1, children: [UR, AR] })),
      (ki[15] = UR),
      (ki[16] = AR),
      (ki[17] = TB));
  else TB = ki[17];
  return TB;
}
function xi(o9) {
  let _m = _(15),
    { imageId: xm, addMargin: yB, startsUserTurn: t9 } = o9,
    LR =
      useAppStateSelectorUnchecked((r9) =>
        xm !== void 0 ? (r9.storedImagePaths.get(xm) ?? null) : null,
      ) ?? null,
    OR =
      useAppStateSelectorUnchecked((n9) =>
        xm !== void 0 ? (n9.imageDescriptions.get(xm) ?? null) : null,
      ) ?? null,
    vR = xm ? `[Image #${xm}]` : "[Image]",
    RB;
  if (_m[0] !== LR)
    ((RB = LR && Tf() ? toLocalFileUrl(LR) : null), (_m[0] = LR), (_m[1] = RB));
  else RB = _m[1];
  let IR = RB,
    kB;
  if (_m[2] !== IR || _m[3] !== vR)
    ((kB = IR
      ? e(ct, { url: IR, children: e(t, { children: vR }) })
      : e(t, { children: vR })),
      (_m[2] = IR),
      (_m[3] = vR),
      (_m[4] = kB));
  else kB = _m[4];
  let t0 = kB,
    DR;
  if (_m[5] !== OR)
    ((DR = OR ? r(t, { dimColor: !0, children: [" ", OR] }) : null),
      (_m[5] = OR),
      (_m[6] = DR));
  else DR = _m[6];
  let bB;
  if (_m[7] !== t0 || _m[8] !== DR)
    ((bB = r(t, { children: [t0, DR] })),
      (_m[7] = t0),
      (_m[8] = DR),
      (_m[9] = bB));
  else bB = _m[9];
  let Sm = bB;
  if (t9 ?? yB) {
    const Pm = yB ? 1 : 0;
    let xB;
    if (_m[10] !== Sm || _m[11] !== Pm)
      ((xB = e(o, { marginTop: Pm, children: Sm })),
        (_m[10] = Sm),
        (_m[11] = Pm),
        (_m[12] = xB));
    else xB = _m[12];
    return xB;
  }
  let Pm;
  if (_m[13] !== Sm)
    ((Pm = e(ToolResultRow, { children: Sm })), (_m[13] = Sm), (_m[14] = Pm));
  else Pm = _m[14];
  return Pm;
}
F();
F();
function HB(S9) {
  return S9.agentNameRegistry;
}
function zB(KR, v9) {
  return KR.kind === "panel"
    ? KR.node
    : e(
        CollapsedMessagesHint,
        {
          displayName: KR.displayName,
          count: KR.count,
          fallbackLabel: "teammate",
        },
        v9,
      );
}
var dM = `</${TEAMMATE_MESSAGE_TAG}>`;
function hWe(l) {
  if (l.startsWith(`<${TEAMMATE_MESSAGE_TAG} `)) return !0;
  return (
    l.startsWith(CROSS_SESSION_MESSAGE_PREFIX) &&
    l.startsWith(
      `<${TEAMMATE_MESSAGE_TAG} `,
      l.indexOf(`
`) + 1,
    )
  );
}
function pM(l) {
  for (let y of PEER_LANE_SUFFIX_VARIANTS)
    if (l.endsWith(y)) {
      l = l.slice(0, -y.length);
      break;
    }
  for (let y of CROSS_SESSION_OPENER_PREFIXES)
    if (l.startsWith(y) && l.startsWith(`<${TEAMMATE_MESSAGE_TAG} `, y.length)) {
      l = l.slice(y.length);
      break;
    }
  let f = new RegExp(
      `<${TEAMMATE_MESSAGE_TAG}\\s+teammate_id="([^"]+)"(?:\\s+color="([^"]+)")?(?:\\s+summary="([^"]+)")?>\\n?`,
      "y",
    ),
    g = [],
    T = 0;
  while (T < l.length) {
    f.lastIndex = T;
    let y = f.exec(l);
    if (!y) return { messages: g, unparsed: l.slice(T) };
    let R = T + y[0].length,
      k = -1,
      S = l.length;
    for (let A = l.indexOf(dM, R); A !== -1; A = l.indexOf(dM, A + 1)) {
      let O = A + dM.length;
      while (O < l.length && /\s/.test(l.charAt(O))) O++;
      if (((f.lastIndex = O), O === l.length || f.test(l))) {
        ((k = A), (S = O));
        break;
      }
    }
    if (k === -1) k = l.length;
    let P = l.slice(R, k).trim();
    (g.push({
      teammateId: M5(y[1] ?? ""),
      color: y[2] ? M5(y[2]) : void 0,
      summary: y[3] ? M5(y[3]) : void 0,
      content: P,
    }),
      (T = S));
  }
  return { messages: g, unparsed: "" };
}
function fM() {
  let n0 = _(7),
    r0 = useAppStateSelector(HB),
    Kp = useAppState(),
    Yp;
  if (n0[0] !== r0 || n0[1] !== Kp) {
    Yp = new Map();
    let Xp;
    if (n0[3] !== Kp)
      ((Xp = Object.values(Kp.getState().tasks)), (n0[3] = Kp), (n0[4] = Xp));
    else Xp = n0[4];
    for (const Cm of Xp) {
      if (Cm.type === "in_process_teammate")
        Yp.set(Cm.id, Cm.identity.agentName);
      else if (Cm.type === "local_agent") Yp.set(Cm.id, Cm.agentType);
    }
    for (const [x9, _9] of r0) Yp.set(_9, x9);
    ((n0[0] = r0), (n0[1] = Kp), (n0[2] = Yp));
  } else Yp = n0[2];
  let i0 = Yp,
    Xp;
  if (n0[5] !== i0)
    ((Xp = (a0) => (a0 === "leader" ? "leader" : (i0.get(a0) ?? a0))),
      (n0[5] = i0),
      (n0[6] = Xp));
  else Xp = n0[6];
  return Xp;
}
function Nm(l) {
  let f = [];
  for (let g of l) {
    if (g.kind === "panel") {
      f.push(g);
      continue;
    }
    let T = f.at(-1);
    if (T && T.kind === "coalesced" && T.displayName === g.displayName)
      T.count++;
    else f.push({ kind: "coalesced", displayName: g.displayName, count: 1 });
  }
  return f;
}
function gM(l) {
  return l.filter((f) => {
    if (f.summary?.trim()) return !0;
    if (parseFrameForDisplay(ShutdownApprovedMessageSchema(), f.content)) return !1;
    return !0;
  });
}
function b0(l) {
  let { messages: f, unparsed: g } = pM(l);
  return gM(f).length === 0 && !g.trim();
}
function M0(l, f) {
  if (f) return l;
  let g = capFrameFieldForDisplay(l);
  return g === l.trim() ? g : `${g}\u2026`;
}
function Zp(P9) {
  let BR = _(27),
    {
      addMargin: l0,
      param: C9,
      verbose: w9,
      isTranscriptMode: U9,
      followsSpeakerLabel: _B,
    } = P9,
    { text: u0 } = C9,
    fr = _B === void 0 ? !1 : _B,
    Qp = fM(),
    Ka = shouldExpandContent(w9, U9),
    m0 = Ka || fr,
    jR,
    FR,
    $R,
    WR,
    qR,
    c0,
    Ya;
  if (
    BR[0] !== l0 ||
    BR[1] !== m0 ||
    BR[2] !== Qp ||
    BR[3] !== fr ||
    BR[4] !== Ka ||
    BR[5] !== u0
  ) {
    c0 = EARLY_RETURN_SENTINEL;
    bb0: {
      let { messages: N9, unparsed: A9 } = pM(u0);
      let SB = gM(N9);
      Ya = A9.trim();
      if (SB.length === 0 && !Ya) {
        c0 = null;
        break bb0;
      }
      let Xa;
      if (BR[13] !== Qp || BR[14] !== fr || BR[15] !== Ka)
        ((Xa = (Ur, PB) => {
          let HR = resolveAgentColor(Ur.color);
          let Jp = capIdFrameField(Qp(Ur.teammateId), IDLE_ID_FIELD_RECEIVE_BOUND) || UNKNOWN_SENDER;
          let GR = Ur.summary ? M0(Ur.summary, Ka) : "";
          let E9 = GR.trim()
            ? r(o, {
                children: [
                  r(t, {
                    color: HR,
                    children: [
                      "@ ",
                      Jp,
                      e(t, { "aria-hidden": !0, children: figures.pointer }),
                    ],
                  }),
                  r(t, { children: [" ", GR] }),
                ],
              })
            : null;
          let CB = Ga(Ur.content, Jp);
          if (CB) {
            return { kind: "panel", node: r(N, { children: [E9, CB] }) };
          }
          let wm = parseFrameForDisplay(IdleNotificationMessageSchema(), Ur.content);
          if (wm && !Ur.summary) {
            return {
              kind: "panel",
              node: e(
                ol,
                {
                  displayName: Jp,
                  inkColor: HR,
                  idleReason: wm.idleReason,
                  failureReason: wm.failureReason,
                  summary: wm.summary,
                  completedTaskId: wm.completedTaskId,
                  result: wm.result,
                  expanded: Ka,
                },
                PB,
              ),
            };
          }
          let zR = parseFrameForDisplay(TaskCompletedMessageSchema(), Ur.content);
          if (zR) {
            let L9 = capIdFrameField(zR.taskId, IDLE_ID_FIELD_RECEIVE_BOUND);
            let O9 = zR.taskSubject ? capIdFrameField(zR.taskSubject, IDLE_SUMMARY_RECEIVE_BOUND) : "";
            return {
              kind: "panel",
              node: e(
                bi,
                {
                  displayName: Jp,
                  inkColor: HR,
                  summary: GR,
                  taskId: L9,
                  taskSubject: O9,
                },
                PB,
              ),
            };
          }
          return {
            kind: "text",
            displayName: Jp,
            inkColor: HR,
            content: capRawFrameTextForDisplay(Ur.content, Ur.teammateId),
            summary: fr ? GR : Ur.summary,
          };
        }),
          (BR[13] = Qp),
          (BR[14] = fr),
          (BR[15] = Ka),
          (BR[16] = Xa));
      else Xa = BR[16];
      let wB = SB.map(Xa);
      jR = o;
      FR = "column";
      $R = l0 && !fr ? 1 : 0;
      WR = "100%";
      qR = m0
        ? wB.map((Um, UB) =>
            Um.kind === "panel"
              ? Um.node
              : e(
                  el,
                  {
                    displayName: Um.displayName,
                    inkColor: Um.inkColor,
                    content: Um.content,
                    summary: Um.summary,
                    labelView: fr,
                    headerless: fr && UB === 0,
                  },
                  UB,
                ),
          )
        : Nm(wB).map(zB);
    }
    ((BR[0] = l0),
      (BR[1] = m0),
      (BR[2] = Qp),
      (BR[3] = fr),
      (BR[4] = Ka),
      (BR[5] = u0),
      (BR[6] = jR),
      (BR[7] = FR),
      (BR[8] = $R),
      (BR[9] = WR),
      (BR[10] = qR),
      (BR[11] = c0),
      (BR[12] = Ya));
  } else
    ((jR = BR[6]),
      (FR = BR[7]),
      ($R = BR[8]),
      (WR = BR[9]),
      (qR = BR[10]),
      (c0 = BR[11]),
      (Ya = BR[12]));
  if (c0 !== EARLY_RETURN_SENTINEL) return c0;
  let Xa;
  if (BR[17] !== fr || BR[18] !== Ya)
    ((Xa =
      Ya &&
      (fr ? e(TruncatedText, { text: Ya }) : e(o, { children: e(t, { children: Ya }) }))),
      (BR[17] = fr),
      (BR[18] = Ya),
      (BR[19] = Xa));
  else Xa = BR[19];
  let AB;
  if (
    BR[20] !== jR ||
    BR[21] !== FR ||
    BR[22] !== $R ||
    BR[23] !== WR ||
    BR[24] !== qR ||
    BR[25] !== Xa
  )
    ((AB = r(jR, {
      flexDirection: FR,
      marginTop: $R,
      width: WR,
      children: [qR, Xa],
    })),
      (BR[20] = jR),
      (BR[21] = FR),
      (BR[22] = $R),
      (BR[23] = WR),
      (BR[24] = qR),
      (BR[25] = Xa),
      (BR[26] = AB));
  else AB = BR[26];
  return AB;
}
function el(I9) {
  let ls = _(23),
    {
      displayName: d0,
      inkColor: p0,
      content: _i,
      summary: Si,
      labelView: EB,
      headerless: OB,
    } = I9,
    f0 = EB === void 0 ? !1 : EB,
    D9 = OB === void 0 ? !1 : OB,
    vB;
  if (ls[0] !== _i || ls[1] !== f0)
    ((vB = f0
      ? e(TruncatedText, { text: _i })
      : e(js, { stripPromptTags: !1, children: _i })),
      (ls[0] = _i),
      (ls[1] = f0),
      (ls[2] = vB));
  else vB = ls[2];
  let YR = vB;
  if (D9) {
    let Qa;
    if (ls[3] !== Si)
      ((Qa = Si && e(t, { children: Si })), (ls[3] = Si), (ls[4] = Qa));
    else Qa = ls[4];
    const Pi = _i && YR;
    let Ja;
    if (ls[5] !== Qa || ls[6] !== Pi)
      ((Ja = r(o, {
        flexDirection: "column",
        paddingLeft: 2,
        children: [Qa, Pi],
      })),
        (ls[5] = Qa),
        (ls[6] = Pi),
        (ls[7] = Ja));
    else Ja = ls[7];
    return Ja;
  }
  let Qa;
  if (ls[8] === MEMO_CACHE_SENTINEL)
    ((Qa = e(t, { "aria-hidden": !0, children: figures.pointer })), (ls[8] = Qa));
  else Qa = ls[8];
  let Pi;
  if (ls[9] !== d0 || ls[10] !== p0)
    ((Pi = r(t, { color: p0, children: ["@ ", d0, Qa] })),
      (ls[9] = d0),
      (ls[10] = p0),
      (ls[11] = Pi));
  else Pi = ls[11];
  let Ja;
  if (ls[12] !== Si)
    ((Ja = Si && r(t, { children: [" ", Si] })), (ls[12] = Si), (ls[13] = Ja));
  else Ja = ls[13];
  let VR;
  if (ls[14] !== Pi || ls[15] !== Ja)
    ((VR = r(o, { children: [Pi, Ja] })),
      (ls[14] = Pi),
      (ls[15] = Ja),
      (ls[16] = VR));
  else VR = ls[16];
  let XR;
  if (ls[17] !== YR || ls[18] !== _i)
    ((XR = _i && e(o, { paddingLeft: 2, children: YR })),
      (ls[17] = YR),
      (ls[18] = _i),
      (ls[19] = XR));
  else XR = ls[19];
  let IB;
  if (ls[20] !== VR || ls[21] !== XR)
    ((IB = r(o, { flexDirection: "column", marginTop: 1, children: [VR, XR] })),
      (ls[20] = VR),
      (ls[21] = XR),
      (ls[22] = IB));
  else IB = ls[22];
  return IB;
}
function k0(l) {
  let f = capFrameFieldForDisplay(l);
  return f === l.trim() ? f : `${f}\u2026`;
}
function ol(B9) {
  let er = _(39),
    {
      displayName: g0,
      inkColor: h0,
      idleReason: Za,
      failureReason: T0,
      summary: JR,
      completedTaskId: ZR,
      result: eM,
      expanded: gr,
    } = B9,
    y0 =
      Za === "failed" ? "error" : Za === "interrupted" ? "warning" : "success",
    R0 =
      Za === "failed"
        ? "failed"
        : Za === "interrupted"
          ? "was interrupted"
          : "finished",
    BB;
  if (er[0] !== T0) ((BB = capFailureReasonForDisplay(T0)), (er[0] = T0), (er[1] = BB));
  else BB = er[1];
  let oM = BB,
    jB;
  if (er[2] !== Za || er[3] !== eM)
    ((jB = eM ? capReceivedIdleResult(eM, Za !== "failed") : ""),
      (er[2] = Za),
      (er[3] = eM),
      (er[4] = jB));
  else jB = er[4];
  let Ci = jB,
    FB;
  if (er[5] !== JR) ((FB = JR ? capIdFrameField(JR, IDLE_SUMMARY_RECEIVE_BOUND) : ""), (er[5] = JR), (er[6] = FB));
  else FB = er[6];
  let tM = FB,
    $B;
  if (er[7] !== ZR) (($B = ZR ? capIdFrameField(ZR, IDLE_ID_FIELD_RECEIVE_BOUND) : ""), (er[7] = ZR), (er[8] = $B));
  else $B = er[8];
  let rM = $B,
    WB;
  if (er[9] !== Ci || er[10] !== gr)
    ((WB = !gr && Ci ? k0(Ci) : ""),
      (er[9] = Ci),
      (er[10] = gr),
      (er[11] = WB));
  else WB = er[11];
  let nM = WB,
    sM;
  if (er[12] !== y0)
    ((sM = e(t, { "aria-hidden": !0, color: y0, children: CLAUDE_BULLET_GLYPH })),
      (er[12] = y0),
      (er[13] = sM));
  else sM = er[13];
  let iM;
  if (er[14] !== g0 || er[15] !== h0)
    ((iM = r(t, { color: h0, bold: !0, children: ["@", g0] })),
      (er[14] = g0),
      (er[15] = h0),
      (er[16] = iM));
  else iM = er[16];
  let aM;
  if (er[17] !== oM)
    ((aM = oM && r(t, { dimColor: !0, children: [": ", oM] })),
      (er[17] = oM),
      (er[18] = aM));
  else aM = er[18];
  let lM;
  if (er[19] !== rM || er[20] !== gr)
    ((lM =
      gr && rM
        ? r(t, { dimColor: !0, children: [" (task #", rM, ")"] })
        : null),
      (er[19] = rM),
      (er[20] = gr),
      (er[21] = lM));
  else lM = er[21];
  let uM;
  if (
    er[22] !== R0 ||
    er[23] !== sM ||
    er[24] !== iM ||
    er[25] !== aM ||
    er[26] !== lM
  )
    ((uM = r(t, { children: [sM, " ", "Teammate", " ", iM, " ", R0, aM, lM] })),
      (er[22] = R0),
      (er[23] = sM),
      (er[24] = iM),
      (er[25] = aM),
      (er[26] = lM),
      (er[27] = uM));
  else uM = er[27];
  let mM;
  if (er[28] !== tM || er[29] !== gr)
    ((mM =
      gr && tM
        ? e(o, {
            paddingLeft: 2,
            children: r(t, { dimColor: !0, children: ["Last DM: ", tM] }),
          })
        : null),
      (er[28] = tM),
      (er[29] = gr),
      (er[30] = mM));
  else mM = er[30];
  let cM;
  if (er[31] !== Ci || er[32] !== gr || er[33] !== nM)
    ((cM =
      gr && Ci
        ? e(o, {
            paddingLeft: 2,
            children: e(js, { stripPromptTags: !1, children: Ci }),
          })
        : nM
          ? e(o, {
              paddingLeft: 2,
              children: e(t, { dimColor: !0, children: nM }),
            })
          : null),
      (er[31] = Ci),
      (er[32] = gr),
      (er[33] = nM),
      (er[34] = cM));
  else cM = er[34];
  let qB;
  if (er[35] !== uM || er[36] !== mM || er[37] !== cM)
    ((qB = r(o, {
      marginTop: 1,
      flexDirection: "column",
      children: [uM, mM, cM],
    })),
      (er[35] = uM),
      (er[36] = mM),
      (er[37] = cM),
      (er[38] = qB));
  else qB = er[38];
  return qB;
}
function KB() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_brass_condor_loupe", "hidden") === "summary"
    ? "summary"
    : "hidden";
}
function ef(l) {
  return l.startsWith(buildArtifactRoomViewNotificationPrefix()) && KB() === "hidden";
}
function S0(l) {
  switch (l) {
    case "completed":
      return "success";
    case "failed":
      return "error";
    case "killed":
      return "warning";
    default:
      return "text";
  }
}
function P0(l) {
  let f = parseTaskStatusMessage(l);
  return f?.status === "completed"
    ? f.result.content.map((g) => g.text).join(`
`)
    : "";
}
function Ai(s8) {
  let Nr = _(40),
    {
      addMargin: hM,
      param: i8,
      taskDelivery: wi,
      messageId: Am,
      verbose: YB,
    } = s8,
    { text: tl } = i8,
    TM = YB === void 0 ? !1 : YB,
    x0 = jA(TM),
    yM,
    Ui,
    of,
    tf,
    Lm,
    RM;
  if (
    Nr[0] !== hM ||
    Nr[1] !== Am ||
    Nr[2] !== wi ||
    Nr[3] !== tl ||
    Nr[4] !== x0
  ) {
    RM = EARLY_RETURN_SENTINEL;
    bb0: {
      let VB = extractTagContent(tl, "summary");
      Lm = VB === null ? null : SA(VB);
      if (!Lm) {
        RM = null;
        break bb0;
      }
      let XB = extractTagContent(tl, "status");
      yM = S0(XB);
      let Om;
      if (Nr[11] !== tl)
        ((Om = extractTagContent(tl, "duration_ms")), (Nr[11] = tl), (Nr[12] = Om));
      else Om = Nr[12];
      let vm = Number(Om);
      let rl;
      if (Nr[13] !== vm)
        ((rl = Number.isFinite(vm) && vm > 0 ? ` \xB7 ${formatDuration(vm)}` : null),
          (Nr[13] = vm),
          (Nr[14] = rl));
      else rl = Nr[14];
      tf = rl;
      let nl;
      if (Nr[15] !== Am || Nr[16] !== wi)
        ((nl =
          wi !== void 0 &&
          isGetTaskToolEnabled() &&
          (Am === void 0 ||
            getSessionStateStore().bashTaskDeliveryOutcomes.get(Am) !== "no_host")),
          (Nr[15] = Am),
          (Nr[16] = wi),
          (Nr[17] = nl));
      else nl = Nr[17];
      let MM = nl;
      let sl;
      if (Nr[18] !== MM || Nr[19] !== wi)
        ((Ui = MM ? P0(wi) : ""),
          (sl = MM
            ? `delivered to Claude as a ${GET_TASK_TOOL_NAME} result${Ui ? ` (${formatNumber(Ui.length)} chars)` : ""}`
            : null),
          (Nr[18] = MM),
          (Nr[19] = wi),
          (Nr[20] = Ui),
          (Nr[21] = sl));
      else ((Ui = Nr[20]), (sl = Nr[21]));
      let _0 = sl;
      of = _0 === null ? null : ` \xB7 ${_0}`;
      if (x0) {
        RM = e(ao, {
          row: Ch({
            status: XB,
            summary: Lm,
            durationMs: vm,
            deliveryNote: _0,
          }),
          addMargin: hM,
        });
        break bb0;
      }
    }
    ((Nr[0] = hM),
      (Nr[1] = Am),
      (Nr[2] = wi),
      (Nr[3] = tl),
      (Nr[4] = x0),
      (Nr[5] = yM),
      (Nr[6] = Ui),
      (Nr[7] = of),
      (Nr[8] = tf),
      (Nr[9] = Lm),
      (Nr[10] = RM));
  } else
    ((yM = Nr[5]),
      (Ui = Nr[6]),
      (of = Nr[7]),
      (tf = Nr[8]),
      (Lm = Nr[9]),
      (RM = Nr[10]));
  if (RM !== EARLY_RETURN_SENTINEL) return RM;
  const Om = hM ? 1 : 0;
  let rl;
  if (Nr[22] !== yM)
    ((rl = e(t, { "aria-hidden": !0, color: yM, children: CLAUDE_BULLET_GLYPH })),
      (Nr[22] = yM),
      (Nr[23] = rl));
  else rl = Nr[23];
  let nl;
  if (Nr[24] !== tf)
    ((nl = tf && e(t, { dimColor: !0, children: tf })),
      (Nr[24] = tf),
      (Nr[25] = nl));
  else nl = Nr[25];
  let sl;
  if (Nr[26] !== of)
    ((sl = of && e(t, { dimColor: !0, children: of })),
      (Nr[26] = of),
      (Nr[27] = sl));
  else sl = Nr[27];
  let kM;
  if (Nr[28] !== Lm || Nr[29] !== rl || Nr[30] !== nl || Nr[31] !== sl)
    ((kM = r(t, { children: [rl, " ", Lm, nl, sl] })),
      (Nr[28] = Lm),
      (Nr[29] = rl),
      (Nr[30] = nl),
      (Nr[31] = sl),
      (Nr[32] = kM));
  else kM = Nr[32];
  let bM;
  if (Nr[33] !== Ui || Nr[34] !== TM)
    ((bM =
      TM && Ui
        ? e(o, {
            paddingLeft: 2,
            children: e(t, { dimColor: !0, children: Ui }),
          })
        : null),
      (Nr[33] = Ui),
      (Nr[34] = TM),
      (Nr[35] = bM));
  else bM = Nr[35];
  let QB;
  if (Nr[36] !== Om || Nr[37] !== kM || Nr[38] !== bM)
    ((QB = r(o, {
      marginTop: Om,
      flexDirection: "column",
      children: [kM, bM],
    })),
      (Nr[36] = Om),
      (Nr[37] = kM),
      (Nr[38] = bM),
      (Nr[39] = QB));
  else QB = Nr[39];
  return QB;
}
function UHe(p8) {
  let xM = _(8),
    { param: f8, addMargin: g8 } = p8,
    { text: C0 } = f8,
    JB;
  if (xM[0] !== C0) ((JB = extractTagContent(C0, "bash-input")), (xM[0] = C0), (xM[1] = JB));
  else JB = xM[1];
  let _M = JB;
  if (!_M) {
    return null;
  }
  const w0 = g8 ? 1 : 0;
  let ZB;
  if (xM[2] === MEMO_CACHE_SENTINEL)
    ((ZB = e(t, { color: "bashBorder", children: "! " })), (xM[2] = ZB));
  else ZB = xM[2];
  let SM;
  if (xM[3] !== _M)
    ((SM = e(t, { color: "text", children: _M })), (xM[3] = _M), (xM[4] = SM));
  else SM = xM[4];
  let e1;
  if (xM[5] !== w0 || xM[6] !== SM)
    ((e1 = r(o, {
      flexDirection: "row",
      marginTop: w0,
      backgroundColor: "bashMessageBackgroundColor",
      paddingRight: 1,
      children: [ZB, SM],
    })),
      (xM[5] = w0),
      (xM[6] = SM),
      (xM[7] = e1));
  else e1 = xM[7];
  return e1;
}
function fye(l) {
  return l.startsWith("<bash-stdout") || l.startsWith("<bash-stderr");
}
function CM(l) {
  let f = extractTagContent(l, "bash-stdout") ?? "";
  return {
    stdout: extractTagContent(f, "persisted-output") ?? SA(f),
    stderr: SA(extractTagContent(l, "bash-stderr") ?? ""),
  };
}
function hZt(l, f) {
  let g = l.get(f);
  if (!g) ((g = CM(f.text)), l.set(f, g));
  return g;
}
function rf(x8) {
  let o1 = _(5),
    { content: U0, verbose: _8 } = x8,
    PM;
  if (o1[0] !== U0) ((PM = CM(U0)), (o1[0] = U0), (o1[1] = PM));
  else PM = o1[1];
  const N0 = !!_8;
  let t1;
  if (o1[2] !== PM || o1[3] !== N0)
    ((t1 = e(BashToolOutputView, { content: PM, verbose: N0 })),
      (o1[2] = PM),
      (o1[3] = N0),
      (o1[4] = t1));
  else t1 = o1[4];
  return t1;
}
function nf(L8) {
  let us = _(19),
    { addMargin: r1, param: O8 } = L8,
    { text: il } = O8,
    n1;
  if (us[0] !== il) ((n1 = extractTagContent(il, COMMAND_MESSAGE_TAG)), (us[0] = il), (us[1] = n1));
  else n1 = us[1];
  let al = n1,
    s1;
  if (us[2] !== il) ((s1 = extractTagContent(il, "command-args")), (us[2] = il), (us[3] = s1));
  else s1 = us[3];
  let A0 = s1,
    v8 = extractTagContent(il, "skill-format") === "true";
  if (!al) {
    return null;
  }
  if (v8) {
    const Im = r1 ? 1 : 0;
    let Dm;
    if (us[4] === MEMO_CACHE_SENTINEL)
      ((Dm = e(t, {
        "aria-label": "you:",
        color: "subtle",
        children: figures.pointer,
      })),
        (us[4] = Dm));
    else Dm = us[4];
    let ll;
    if (us[5] !== al)
      ((ll = r(t, {
        children: [
          Dm,
          " ",
          r(t, { color: "text", children: ["Skill(", al, ")"] }),
        ],
      })),
        (us[5] = al),
        (us[6] = ll));
    else ll = us[6];
    let ul;
    if (us[7] !== Im || us[8] !== ll)
      ((ul = e(o, {
        flexDirection: "column",
        marginTop: Im,
        backgroundColor: "userMessageBackground",
        paddingRight: 1,
        children: ll,
      })),
        (us[7] = Im),
        (us[8] = ll),
        (us[9] = ul));
    else ul = us[9];
    return ul;
  }
  let Im;
  if (us[10] !== A0 || us[11] !== al)
    ((Im = [al, A0].filter(Boolean)),
      (us[10] = A0),
      (us[11] = al),
      (us[12] = Im));
  else Im = us[12];
  let E0 = `/${Im.join(" ")}`;
  const Dm = r1 ? 1 : 0;
  let ll;
  if (us[13] === MEMO_CACHE_SENTINEL)
    ((ll = e(t, {
      "aria-label": "you:",
      color: "subtle",
      children: figures.pointer,
    })),
      (us[13] = ll));
  else ll = us[13];
  let ul;
  if (us[14] !== E0)
    ((ul = r(t, {
      children: [ll, " ", e(t, { color: "text", children: E0 })],
    })),
      (us[14] = E0),
      (us[15] = ul));
  else ul = us[15];
  let i1;
  if (us[16] !== Dm || us[17] !== ul)
    ((i1 = e(o, {
      flexDirection: "column",
      marginTop: Dm,
      backgroundColor: "userMessageBackground",
      paddingRight: 1,
      children: ul,
    })),
      (us[16] = Dm),
      (us[17] = ul),
      (us[18] = i1));
  else i1 = us[18];
  return i1;
}
F();
F();
var ePt = Qt(null);
function wM() {
  return De(ePt);
}
function pf(rJ) {
  let nJ = _(2),
    { content: UM } = rJ,
    sf;
  if (nJ[0] !== UM) {
    let l1 = extractTagContent(UM, "local-command-stdout");
    let u1 = extractTagContent(UM, "local-command-stderr");
    let L0 = l1 === null ? null : SA(l1);
    let m1 = u1 === null ? null : SA(u1);
    sf = [];
    if (L0?.trim() && L0.trim() !== sp)
      sf.push(e(jm, { children: L0.trim() }, "stdout"));
    if (m1?.trim())
      sf.push(e(jm, { isError: !0, children: m1.trim() }, "stderr"));
    ((nJ[0] = UM), (nJ[1] = sf));
  } else sf = nJ[1];
  if (sf.length === 0) {
    return null;
  }
  return sf;
}
function jm(sJ) {
  let af = _(10),
    { children: hr, isError: c1 } = sJ,
    O0 = c1 === void 0 ? !1 : c1,
    d1;
  if (af[0] !== hr) ((d1 = pu(hr)), (af[0] = hr), (af[1] = d1));
  else d1 = af[1];
  let NM = d1;
  if (NM !== null) {
    let Ei;
    if (af[2] !== NM)
      ((Ei = e(ZM, { fields: NM })), (af[2] = NM), (af[3] = Ei));
    else Ei = af[3];
    return Ei;
  }
  if (hr.startsWith(`${LOZENGE_OUTLINE_GLYPH} `) || hr.startsWith(`${LOZENGE_FILLED_GLYPH} `)) {
    let Ei;
    if (af[4] !== hr)
      ((Ei = e(ek, { children: hr })), (af[4] = hr), (af[5] = Ei));
    else Ei = af[5];
    return Ei;
  }
  let Ei;
  if (af[6] === MEMO_CACHE_SENTINEL)
    ((Ei = e(t, { "aria-hidden": !0, dimColor: !0, children: "  \u23BF  " })),
      (af[6] = Ei));
  else Ei = af[6];
  let p1;
  if (af[7] !== hr || af[8] !== O0)
    ((p1 = r(o, {
      flexDirection: "row",
      children: [
        Ei,
        e(o, {
          flexDirection: "column",
          flexGrow: 1,
          children: O0
            ? e(t, { color: "error", wrap: "wrap", children: hr })
            : e(js, { stripPromptTags: !1, children: hr }),
        }),
      ],
    })),
      (af[7] = hr),
      (af[8] = O0),
      (af[9] = p1));
  else p1 = af[9];
  return p1;
}
function QM(iJ) {
  let AM = _(11),
    { children: Li } = iJ,
    Bm,
    EM,
    v0;
  if (AM[0] !== Li) {
    v0 = EARLY_RETURN_SENTINEL;
    bb0: {
      Bm = Li.indexOf(FORK_GLYPH);
      if (Bm === -1) {
        v0 = Li;
        break bb0;
      }
      EM = Li.slice(0, Bm);
    }
    ((AM[0] = Li), (AM[1] = Bm), (AM[2] = EM), (AM[3] = v0));
  } else ((Bm = AM[1]), (EM = AM[2]), (v0 = AM[3]));
  if (v0 !== EARLY_RETURN_SENTINEL) return v0;
  let f1;
  if (AM[4] === MEMO_CACHE_SENTINEL)
    ((f1 = e(t, { "aria-label": "of", children: FORK_GLYPH })), (AM[4] = f1));
  else f1 = AM[4];
  let LM;
  if (AM[5] !== Bm || AM[6] !== Li)
    ((LM = Li.slice(Bm + FORK_GLYPH.length)), (AM[5] = Bm), (AM[6] = Li), (AM[7] = LM));
  else LM = AM[7];
  let g1;
  if (AM[8] !== EM || AM[9] !== LM)
    ((g1 = r(N, { children: [EM, f1, LM] })),
      (AM[8] = EM),
      (AM[9] = LM),
      (AM[10] = g1));
  else g1 = AM[10];
  return g1;
}
var JM = "  \u23BF  ",
  $0 = te(JM);
function ZM(aJ) {
  let mf = _(25),
    { fields: lf } = aJ,
    uf = wM(),
    [D0, h1] = d(!1),
    { columns: B0 } = useTerminalSize(),
    Er = lf.id !== void 0 && !isBgSession() ? lf.id : void 0,
    OM,
    vM,
    IM,
    DM,
    BM,
    jM;
  if (
    mf[0] !== uf ||
    mf[1] !== B0 ||
    mf[2] !== lf ||
    mf[3] !== D0 ||
    mf[4] !== Er
  ) {
    let ms = bh(lf, B0 - $0, Er !== void 0);
    let cf;
    if (mf[11] !== uf || mf[12] !== Er)
      ((cf = () => {
        if (Er !== void 0) uf?.requestAttach(Er);
      }),
        (mf[11] = uf),
        (mf[12] = Er),
        (mf[13] = cf));
    else cf = mf[13];
    vM = cf;
    let j0 = ms.name ?? ms.id;
    let T1 = ms.name !== void 0 && ms.id !== void 0;
    OM = t;
    IM = r(t, {
      dimColor: !0,
      children: [
        ms.state,
        (j0 !== void 0 || T1 || ms.chips.length > 0) && " \xB7 ",
      ],
    });
    DM =
      j0 !== void 0 &&
      e(t, {
        bold: !0,
        underline: Er !== void 0 && D0,
        children: e(QM, { children: j0 }),
      });
    BM = T1 && e(t, { dimColor: !0, children: " \xB7 " + ms.id });
    jM =
      ms.chips.length > 0 &&
      e(t, { dimColor: !0, children: " \xB7 " + ms.chips.join(" \xB7 ") });
    ((mf[0] = uf),
      (mf[1] = B0),
      (mf[2] = lf),
      (mf[3] = D0),
      (mf[4] = Er),
      (mf[5] = OM),
      (mf[6] = vM),
      (mf[7] = IM),
      (mf[8] = DM),
      (mf[9] = BM),
      (mf[10] = jM));
  } else
    ((OM = mf[5]),
      (vM = mf[6]),
      (IM = mf[7]),
      (DM = mf[8]),
      (BM = mf[9]),
      (jM = mf[10]));
  let cf;
  if (
    mf[14] !== OM ||
    mf[15] !== IM ||
    mf[16] !== DM ||
    mf[17] !== BM ||
    mf[18] !== jM
  )
    ((cf = r(OM, { children: [IM, DM, BM, jM] })),
      (mf[14] = OM),
      (mf[15] = IM),
      (mf[16] = DM),
      (mf[17] = BM),
      (mf[18] = jM),
      (mf[19] = cf));
  else cf = mf[19];
  let FM = cf,
    y1;
  if (mf[20] === MEMO_CACHE_SENTINEL)
    ((y1 = e(t, { "aria-label": "fork:", dimColor: !0, children: JM })),
      (mf[20] = y1));
  else y1 = mf[20];
  let R1;
  if (mf[21] !== vM || mf[22] !== FM || mf[23] !== Er)
    ((R1 = r(o, {
      flexDirection: "row",
      children: [
        y1,
        Er
          ? e(o, {
              onClick: vM,
              onMouseEnter: () => h1(!0),
              onMouseLeave: () => h1(!1),
              children: FM,
            })
          : FM,
      ],
    })),
      (mf[21] = vM),
      (mf[22] = FM),
      (mf[23] = Er),
      (mf[24] = R1));
  else R1 = mf[24];
  return R1;
}
function ek(lJ) {
  let cl = _(19),
    { children: ml } = lJ,
    F0 = ml[0],
    $M,
    df,
    M1;
  if (cl[0] !== ml) {
    let WM = ml.indexOf(`
`);
    let qM = WM === -1 ? ml.slice(2) : ml.slice(2, WM);
    df = WM === -1 ? "" : ml.slice(WM + 1).trim();
    let HM = qM.indexOf(" \xB7 ");
    $M = HM === -1 ? qM : qM.slice(0, HM);
    M1 = HM === -1 ? "" : qM.slice(HM);
    ((cl[0] = ml), (cl[1] = $M), (cl[2] = df), (cl[3] = M1));
  } else (($M = cl[1]), (df = cl[2]), (M1 = cl[3]));
  let GM = M1,
    zM;
  if (cl[4] !== F0)
    ((zM = r(t, {
      "aria-hidden": !0,
      color: "background",
      children: [F0, " "],
    })),
      (cl[4] = F0),
      (cl[5] = zM));
  else zM = cl[5];
  let KM;
  if (cl[6] !== $M)
    ((KM = e(t, { bold: !0, children: $M })), (cl[6] = $M), (cl[7] = KM));
  else KM = cl[7];
  let YM;
  if (cl[8] !== GM)
    ((YM = GM && e(t, { dimColor: !0, children: GM })),
      (cl[8] = GM),
      (cl[9] = YM));
  else YM = cl[9];
  let VM;
  if (cl[10] !== zM || cl[11] !== KM || cl[12] !== YM)
    ((VM = r(t, { children: [zM, KM, YM] })),
      (cl[10] = zM),
      (cl[11] = KM),
      (cl[12] = YM),
      (cl[13] = VM));
  else VM = cl[13];
  let XM;
  if (cl[14] !== df)
    ((XM =
      df &&
      r(o, {
        flexDirection: "row",
        children: [
          e(t, { "aria-hidden": !0, dimColor: !0, children: "  \u23BF  " }),
          e(t, { dimColor: !0, children: df }),
        ],
      })),
      (cl[14] = df),
      (cl[15] = XM));
  else XM = cl[15];
  let k1;
  if (cl[16] !== VM || cl[17] !== XM)
    ((k1 = r(o, { flexDirection: "column", children: [VM, XM] })),
      (cl[16] = VM),
      (cl[17] = XM),
      (cl[18] = k1));
  else k1 = cl[18];
  return k1;
}
F();
function ff(RJ) {
  let Fm = _(10),
    { text: W0, addMargin: MJ } = RJ,
    b1;
  if (Fm[0] !== W0)
    ((b1 = extractTagContent(W0, "user-memory-input")), (Fm[0] = W0), (Fm[1] = b1));
  else b1 = Fm[1];
  let tk = b1,
    x1;
  if (Fm[2] === MEMO_CACHE_SENTINEL)
    ((x1 = pickRandom(["Got it.", "Good to know.", "Noted."])), (Fm[2] = x1));
  else x1 = Fm[2];
  let kJ = x1;
  if (!tk) {
    return null;
  }
  const q0 = MJ ? 1 : 0;
  let _1;
  if (Fm[3] === MEMO_CACHE_SENTINEL)
    ((_1 = e(t, {
      color: "remember",
      backgroundColor: "memoryBackgroundColor",
      children: "#",
    })),
      (Fm[3] = _1));
  else _1 = Fm[3];
  let rk;
  if (Fm[4] !== tk)
    ((rk = r(o, {
      children: [
        _1,
        r(t, {
          backgroundColor: "memoryBackgroundColor",
          color: "text",
          children: [" ", tk, " "],
        }),
      ],
    })),
      (Fm[4] = tk),
      (Fm[5] = rk));
  else rk = Fm[5];
  let S1;
  if (Fm[6] === MEMO_CACHE_SENTINEL)
    ((S1 = e(ToolResultRow, {
      height: 1,
      children: e(t, { dimColor: !0, children: kJ }),
    })),
      (Fm[6] = S1));
  else S1 = Fm[6];
  let P1;
  if (Fm[7] !== q0 || Fm[8] !== rk)
    ((P1 = r(o, {
      flexDirection: "column",
      marginTop: q0,
      width: "100%",
      children: [rk, S1],
    })),
      (Fm[7] = q0),
      (Fm[8] = rk),
      (Fm[9] = P1));
  else P1 = Fm[9];
  return P1;
}
function BHe(UJ) {
  let C1 = _(5),
    { addMargin: NJ, planContent: H0 } = UJ;
  const G0 = NJ ? 1 : 0;
  let nk;
  if (C1[0] !== H0)
    ((nk = e(TitledBorderBox, {
      color: "planMode",
      title: "Plan to implement",
      children: e(js, { children: H0 }),
    })),
      (C1[0] = H0),
      (C1[1] = nk));
  else nk = C1[1];
  let w1;
  if (C1[2] !== G0 || C1[3] !== nk)
    ((w1 = e(o, { marginTop: G0, children: nk })),
      (C1[2] = G0),
      (C1[3] = nk),
      (C1[4] = w1));
  else w1 = C1[4];
  return w1;
}
F();
function W1(eZ) {
  return eZ.isBriefOnly;
}
function q1(oZ) {
  return oZ.viewingAgentTaskId;
}
function fl(Or) {
  let $m = _(18),
    { text: dl } = Or.param,
    { messageId: sk, origin: ik } = Or,
    U1,
    N1;
  if ($m[0] !== sk || $m[1] !== ik || $m[2] !== dl)
    ((U1 = () => ({
      requestId: sk,
      props: { text: dl, origin: messageOriginModule.ofStoredOrigin(ik) },
    })),
      (N1 = [dl, sk, ik]),
      ($m[0] = sk),
      ($m[1] = ik),
      ($m[2] = dl),
      ($m[3] = U1),
      ($m[4] = N1));
  else ((U1 = $m[3]), (N1 = $m[4]));
  let A1 = La.useRenderInput("UserMessage", U1, N1),
    { origin: E1 } = A1.props,
    Oi = E1.kind === "plugin" ? E1.name : void 0,
    L1;
  if ($m[5] !== Or || $m[6] !== Oi || $m[7] !== dl)
    ((L1 = (O1) =>
      e(ck, {
        ...Or,
        addMargin: Oi === void 0 && Or.addMargin,
        param:
          O1.props.text === dl
            ? Or.param
            : { ...Or.param, text: O1.props.text },
      })),
      ($m[5] = Or),
      ($m[6] = Oi),
      ($m[7] = dl),
      ($m[8] = L1));
  else L1 = $m[8];
  let ak = La.useRenderHook(A1, L1, Oi);
  if (Oi === void 0) {
    return ak;
  }
  const z0 =
    Or.addMargin && !Or.followsSpeakerLabel && !Or.followsInboundLabel ? 1 : 0;
  let v1;
  if ($m[9] === MEMO_CACHE_SENTINEL)
    ((v1 = r(t, { "aria-hidden": !0, children: [figures.pointerSmall, " "] })),
      ($m[9] = v1));
  else v1 = $m[9];
  let lk;
  if ($m[10] !== Oi) ((lk = getPluginDisplayName(Oi)), ($m[10] = Oi), ($m[11] = lk));
  else lk = $m[11];
  let uk;
  if ($m[12] !== lk)
    ((uk = r(t, {
      dimColor: !0,
      children: [v1, "Prompt from the ", lk, " plugin"],
    })),
      ($m[12] = lk),
      ($m[13] = uk));
  else uk = $m[13];
  let I1;
  if ($m[14] !== ak || $m[15] !== z0 || $m[16] !== uk)
    ((I1 = r(o, {
      flexDirection: "column",
      marginTop: z0,
      children: [uk, ak],
    })),
      ($m[14] = ak),
      ($m[15] = z0),
      ($m[16] = uk),
      ($m[17] = I1));
  else I1 = $m[17];
  return I1;
}
function ck(KJ) {
  let qm = _(19),
    {
      addMargin: YJ,
      param: VJ,
      isTranscriptMode: K0,
      timestamp: XJ,
      followsSpeakerLabel: D1,
      followsInboundLabel: B1,
    } = KJ,
    { text: pl } = VJ,
    QJ = D1 === void 0 ? !1 : D1,
    JJ = B1 === void 0 ? !1 : B1,
    Y0 = useAppStateSelector(W1),
    V0 = useAppStateSelector(q1),
    ZJ = a.CLAUDE_CODE_BRIEF,
    j1;
  if (qm[0] !== Y0 || qm[1] !== K0 || qm[2] !== V0)
    ((j1 = Ox() && (ZJ || getFeatureValue_CACHED_MAY_BE_STALE("tengu_kairos_brief", !1)) && Y0 && !K0 && !V0),
      (qm[0] = Y0),
      (qm[1] = K0),
      (qm[2] = V0),
      (qm[3] = j1));
  else j1 = qm[3];
  let Gm = j1,
    F1;
  if (qm[4] !== pl) ((F1 = truncateMiddleText(pl)), (qm[4] = pl), (qm[5] = F1));
  else F1 = qm[5];
  let zm = F1;
  if (!pl) {
    return (logError(Error("No content found in user prompt message")), null);
  }
  if (JJ) {
    let cs;
    if (qm[6] !== pl) ((cs = e(TruncatedText, { text: pl })), (qm[6] = pl), (qm[7] = cs));
    else cs = qm[7];
    return cs;
  }
  if (QJ) {
    let cs;
    if (qm[8] !== zm)
      ((cs = e(o, {
        flexDirection: "column",
        children: e(UserPromptText, { text: zm, bodyOnly: !0 }),
      })),
        (qm[8] = zm),
        (qm[9] = cs));
    else cs = qm[9];
    return cs;
  }
  const cs = YJ ? 1 : 0,
    X0 = Gm ? void 0 : "userMessageBackground",
    Q0 = Gm ? 0 : 1,
    J0 = Gm ? XJ : void 0;
  let mk;
  if (qm[10] !== zm || qm[11] !== J0 || qm[12] !== Gm)
    ((mk = e(UserPromptText, { text: zm, useBriefLayout: Gm, timestamp: J0 })),
      (qm[10] = zm),
      (qm[11] = J0),
      (qm[12] = Gm),
      (qm[13] = mk));
  else mk = qm[13];
  let $1;
  if (qm[14] !== mk || qm[15] !== cs || qm[16] !== X0 || qm[17] !== Q0)
    (($1 = e(o, {
      flexDirection: "column",
      marginTop: cs,
      backgroundColor: X0,
      paddingRight: Q0,
      children: mk,
    })),
      (qm[14] = mk),
      (qm[15] = cs),
      (qm[16] = X0),
      (qm[17] = Q0),
      (qm[18] = $1));
  else $1 = qm[18];
  return $1;
}
function K1(Ym, mZ) {
  return e(
    o,
    {
      children: r(t, {
        children: [
          e(t, { "aria-label": "update:", color: "success", children: UPDATE_GLYPH }),
          " ",
          r(t, { dimColor: !0, children: [Ym.server, ":"] }),
          " ",
          e(t, {
            color: "suggestion",
            children: Ym.kind === "resource" ? rU(Ym.target) : Ym.target,
          }),
          Ym.reason && r(t, { dimColor: !0, children: [" \xB7 ", Ym.reason] }),
        ],
      }),
    },
    mZ,
  );
}
function gf(l) {
  let f = [],
    g =
      /<mcp-resource-update\s+server="([^"]+)"\s+uri="([^"]+)"[^>]*>(?:[\s\S]*?<reason>([^<]+)<\/reason>)?/g,
    T;
  while ((T = g.exec(l)) !== null)
    f.push({
      kind: "resource",
      server: T[1] ?? "",
      target: T[2] ?? "",
      reason: T[3],
    });
  let y =
    /<mcp-polling-update\s+type="([^"]+)"\s+server="([^"]+)"\s+tool="([^"]+)"[^>]*>(?:[\s\S]*?<reason>([^<]+)<\/reason>)?/g;
  while ((T = y.exec(l)) !== null)
    f.push({
      kind: "polling",
      server: T[2] ?? "",
      target: T[3] ?? "",
      reason: T[4],
    });
  return f;
}
function rU(l) {
  if (l.startsWith("file://")) {
    let f = l.slice(7),
      g = f.split("/");
    return g[g.length - 1] || f;
  }
  if (l.length > 40) return l.slice(0, 39) + "\u2026";
  return l;
}
function hf(lZ) {
  let H1 = _(12),
    { addMargin: Z0, param: uZ } = lZ,
    { text: oU } = uZ,
    dk,
    pk,
    fk,
    gk,
    tU;
  if (H1[0] !== Z0 || H1[1] !== oU) {
    tU = EARLY_RETURN_SENTINEL;
    bb0: {
      let G1 = gf(oU);
      if (G1.length === 0) {
        tU = null;
        break bb0;
      }
      dk = o;
      pk = "column";
      fk = Z0 ? 1 : 0;
      gk = G1.map(K1);
    }
    ((H1[0] = Z0),
      (H1[1] = oU),
      (H1[2] = dk),
      (H1[3] = pk),
      (H1[4] = fk),
      (H1[5] = gk),
      (H1[6] = tU));
  } else ((dk = H1[2]), (pk = H1[3]), (fk = H1[4]), (gk = H1[5]), (tU = H1[6]));
  if (tU !== EARLY_RETURN_SENTINEL) return tU;
  let z1;
  if (H1[7] !== dk || H1[8] !== pk || H1[9] !== fk || H1[10] !== gk)
    ((z1 = e(dk, { flexDirection: pk, marginTop: fk, children: gk })),
      (H1[7] = dk),
      (H1[8] = pk),
      (H1[9] = fk),
      (H1[10] = gk),
      (H1[11] = z1));
  else z1 = H1[11];
  return z1;
}
function y$n(l, f) {
  if (!f || f.trim() === sp) return !0;
  if (l.planContent) return !1;
  if (pse(l.origin)) return !1;
  return mye(f);
}
function mye(l) {
  if (!l || l.trim() === sp) return !0;
  if (isAgentSwarmsEnabled() && hWe(l)) return b0(l);
  if (isExternalSourceMessage(l)) return !1;
  if (isCrossSessionMessage(l)) return !1;
  if (extractTagContent(l, TICK_TAG) !== null) return !0;
  if (l.includes(`<${LOCAL_COMMAND_CAVEAT_TAG}>`)) return !0;
  if (l.startsWith(`<${LOCAL_COMMAND_STDOUT_TAG}`) || l.startsWith(`<${LOCAL_COMMAND_STDERR_TAG}`)) {
    let f = extractTagContent(l, LOCAL_COMMAND_STDOUT_TAG)?.trim(),
      g = extractTagContent(l, LOCAL_COMMAND_STDERR_TAG)?.trim();
    return !((f && f !== sp) || g);
  }
  if (l.startsWith(`<${BASH_STDOUT_TAG}`) || l.startsWith(`<${BASH_STDERR_TAG}`)) return !1;
  if (l.includes("<bash-input>")) return !extractTagContent(l, "bash-input");
  if (l.includes(`<${COMMAND_MESSAGE_TAG}>`)) return !extractTagContent(l, COMMAND_MESSAGE_TAG);
  if (l.includes("<user-memory-input>")) return !extractTagContent(l, "user-memory-input");
  if (l.includes(`<${TASK_NOTIFICATION_TAG}`)) return !extractTagContent(l, "summary") || ef(l);
  if (l.includes("<mcp-resource-update") || l.includes("<mcp-polling-update"))
    return gf(l).length === 0;
  return !1;
}
function Jz(jZ) {
  let jo = _(71),
    {
      addMargin: Ae,
      param: fe,
      verbose: vr,
      planContent: hk,
      isTranscriptMode: tr,
      timestamp: Xm,
      messageId: ds,
      origin: vi,
      taskDelivery: nU,
      followsSpeakerLabel: gl,
      followsInboundLabel: Y1,
    } = jZ,
    V1 = jA(vr);
  if (typeof fe.text !== "string" || !fe.text || fe.text.trim() === sp) {
    return null;
  }
  if (hk) {
    let Re;
    if (jo[0] !== Ae || jo[1] !== hk)
      ((Re = e(BHe, { addMargin: Ae, planContent: hk })),
        (jo[0] = Ae),
        (jo[1] = hk),
        (jo[2] = Re));
    else Re = jo[2];
    return Re;
  }
  let fs = gl || Y1;
  if (isAgentSwarmsEnabled() && hWe(fe.text)) {
    let Re;
    if (
      jo[3] !== Ae ||
      jo[4] !== tr ||
      jo[5] !== fe ||
      jo[6] !== fs ||
      jo[7] !== vr
    )
      ((Re = e(Zp, {
        addMargin: Ae,
        param: fe,
        verbose: vr,
        isTranscriptMode: tr,
        followsSpeakerLabel: fs,
      })),
        (jo[3] = Ae),
        (jo[4] = tr),
        (jo[5] = fe),
        (jo[6] = fs),
        (jo[7] = vr),
        (jo[8] = Re));
    else Re = jo[8];
    return Re;
  }
  if (isExternalSourceMessage(fe.text)) {
    let { UserChannelMessage: FZ } = import.meta.require("../../../02-功能模块/Teammates团队/UserChannelMessage.t71awb1k.js");
    let Re;
    if (jo[9] !== Ae || jo[10] !== fe || jo[11] !== fs)
      ((Re = e(FZ, { addMargin: Ae, param: fe, followsSpeakerLabel: fs })),
        (jo[9] = Ae),
        (jo[10] = fe),
        (jo[11] = fs),
        (jo[12] = Re));
    else Re = jo[12];
    return Re;
  }
  if (isCrossSessionMessage(fe.text)) {
    let { UserCrossSessionMessage: $Z } = import.meta.require(
      "../../../02-功能模块/Teammates团队/UserCrossSessionMessage.tkya3krn.js",
    );
    const Re = vi?.kind === "peer" && vi.hostInjected === !0;
    let Dr;
    if (
      jo[13] !== Ae ||
      jo[14] !== tr ||
      jo[15] !== fe ||
      jo[16] !== Re ||
      jo[17] !== fs ||
      jo[18] !== vr
    )
      ((Dr = e($Z, {
        addMargin: Ae,
        param: fe,
        hostInjected: Re,
        verbose: vr,
        isTranscriptMode: tr,
        followsSpeakerLabel: fs,
      })),
        (jo[13] = Ae),
        (jo[14] = tr),
        (jo[15] = fe),
        (jo[16] = Re),
        (jo[17] = fs),
        (jo[18] = vr),
        (jo[19] = Dr));
    else Dr = jo[19];
    return Dr;
  }
  if (Y1) {
    let Re;
    if (
      jo[20] !== Ae ||
      jo[21] !== gl ||
      jo[22] !== tr ||
      jo[23] !== ds ||
      jo[24] !== vi ||
      jo[25] !== fe ||
      jo[26] !== Xm
    )
      ((Re = e(fl, {
        addMargin: Ae,
        param: fe,
        isTranscriptMode: tr,
        timestamp: Xm,
        messageId: ds,
        origin: vi,
        followsSpeakerLabel: gl,
        followsInboundLabel: !0,
      })),
        (jo[20] = Ae),
        (jo[21] = gl),
        (jo[22] = tr),
        (jo[23] = ds),
        (jo[24] = vi),
        (jo[25] = fe),
        (jo[26] = Xm),
        (jo[27] = Re));
    else Re = jo[27];
    return Re;
  }
  if (extractTagContent(fe.text, TICK_TAG)) {
    return null;
  }
  if (fe.text.includes(`<${LOCAL_COMMAND_CAVEAT_TAG}>`)) {
    return null;
  }
  if (fye(fe.text)) {
    let Re;
    if (jo[28] !== fe.text || jo[29] !== vr)
      ((Re = e(rf, { content: fe.text, verbose: vr })),
        (jo[28] = fe.text),
        (jo[29] = vr),
        (jo[30] = Re));
    else Re = jo[30];
    return Re;
  }
  if (
    fe.text.startsWith("<local-command-stdout") ||
    fe.text.startsWith("<local-command-stderr")
  ) {
    if (V1) {
      let Re;
      if (jo[31] !== fe.text)
        ((Re = Ph(fe.text)), (jo[31] = fe.text), (jo[32] = Re));
      else Re = jo[32];
      let Tk = Re;
      if (Tk.kind === "line") {
        let Dr;
        if (jo[33] !== Ae || jo[34] !== Tk.row)
          ((Dr = e(ao, { row: Tk.row, addMargin: Ae })),
            (jo[33] = Ae),
            (jo[34] = Tk.row),
            (jo[35] = Dr));
        else Dr = jo[35];
        return Dr;
      }
    }
    let Re;
    if (jo[36] !== fe.text)
      ((Re = e(pf, { content: fe.text })), (jo[36] = fe.text), (jo[37] = Re));
    else Re = jo[37];
    return Re;
  }
  if (fe.text === iy || fe.text === gc) {
    if (V1) {
      let Re;
      if (jo[38] === MEMO_CACHE_SENTINEL) ((Re = fa()), (jo[38] = Re));
      else Re = jo[38];
      let Dr;
      if (jo[39] !== Ae)
        ((Dr = e(ao, { row: Re, addMargin: Ae })),
          (jo[39] = Ae),
          (jo[40] = Dr));
      else Dr = jo[40];
      return Dr;
    }
    let Re;
    if (jo[41] === MEMO_CACHE_SENTINEL) ((Re = e(bf, {})), (jo[41] = Re));
    else Re = jo[41];
    return Re;
  }
  if (fe.text.includes("<bash-input>")) {
    let Re;
    if (jo[42] !== Ae || jo[43] !== fe)
      ((Re = e(UHe, { addMargin: Ae, param: fe })),
        (jo[42] = Ae),
        (jo[43] = fe),
        (jo[44] = Re));
    else Re = jo[44];
    return Re;
  }
  if (fe.text.includes(`<${COMMAND_MESSAGE_TAG}>`)) {
    let Re;
    if (jo[45] !== Ae || jo[46] !== fe)
      ((Re = e(nf, { addMargin: Ae, param: fe })),
        (jo[45] = Ae),
        (jo[46] = fe),
        (jo[47] = Re));
    else Re = jo[47];
    return Re;
  }
  if (fe.text.includes("<user-memory-input>")) {
    let Re;
    if (jo[48] !== Ae || jo[49] !== fe.text)
      ((Re = e(ff, { addMargin: Ae, text: fe.text })),
        (jo[48] = Ae),
        (jo[49] = fe.text),
        (jo[50] = Re));
    else Re = jo[50];
    return Re;
  }
  if (fe.text.includes(`<${TASK_NOTIFICATION_TAG}`)) {
    if (ef(fe.text)) {
      return null;
    }
    const Re = vr || tr;
    let Dr;
    if (
      jo[51] !== Ae ||
      jo[52] !== ds ||
      jo[53] !== fe ||
      jo[54] !== Re ||
      jo[55] !== nU
    )
      ((Dr = e(Ai, {
        addMargin: Ae,
        param: fe,
        taskDelivery: nU,
        messageId: ds,
        verbose: Re,
      })),
        (jo[51] = Ae),
        (jo[52] = ds),
        (jo[53] = fe),
        (jo[54] = Re),
        (jo[55] = nU),
        (jo[56] = Dr));
    else Dr = jo[56];
    return Dr;
  }
  if (
    fe.text.includes("<mcp-resource-update") ||
    fe.text.includes("<mcp-polling-update")
  ) {
    let Re;
    if (jo[57] !== Ae || jo[58] !== fe)
      ((Re = e(hf, { addMargin: Ae, param: fe })),
        (jo[57] = Ae),
        (jo[58] = fe),
        (jo[59] = Re));
    else Re = jo[59];
    return Re;
  }
  if (fe.text.includes("<fork-boilerplate>")) {
    let { UserForkBoilerplateMessage: WZ } = import.meta.require(
      "../../../02-功能模块/会话-历史-恢复/UserForkBoilerplateMessage.xec8zrws.js",
    );
    let Re;
    if (jo[60] !== Ae || jo[61] !== fe)
      ((Re = e(WZ, { addMargin: Ae, param: fe })),
        (jo[60] = Ae),
        (jo[61] = fe),
        (jo[62] = Re));
    else Re = jo[62];
    return Re;
  }
  let Re;
  if (
    jo[63] !== Ae ||
    jo[64] !== gl ||
    jo[65] !== tr ||
    jo[66] !== ds ||
    jo[67] !== vi ||
    jo[68] !== fe ||
    jo[69] !== Xm
  )
    ((Re = e(fl, {
      addMargin: Ae,
      param: fe,
      isTranscriptMode: tr,
      timestamp: Xm,
      messageId: ds,
      origin: vi,
      followsSpeakerLabel: gl,
    })),
      (jo[63] = Ae),
      (jo[64] = gl),
      (jo[65] = tr),
      (jo[66] = ds),
      (jo[67] = vi),
      (jo[68] = fe),
      (jo[69] = Xm),
      (jo[70] = Re));
  else Re = jo[70];
  return Re;
}
function Tj(lj) {
  if (capFrameFieldForDisplay(lj.summary)) {
    return !0;
  }
  return !parseFrameForDisplay(ShutdownApprovedMessageSchema(), lj.text);
}
function yj(ic, Oee) {
  return ic.kind === "panel"
    ? ic.node
    : e(
        el,
        {
          displayName: ic.displayName,
          inkColor: ic.inkColor,
          content: ic.content,
          summary: ic.summary,
        },
        Oee,
      );
}
function Rj(Pk, vee) {
  return Pk.kind === "panel"
    ? Pk.node
    : e(
        CollapsedMessagesHint,
        {
          displayName: Pk.displayName,
          count: Pk.count,
          fallbackLabel: "teammate",
        },
        vee,
      );
}
function Mj(Iee) {
  return { kind: "read", path: Iee.path };
}
function kj(Dee) {
  return Dee.name;
}
function bj(Ck, Bee) {
  return r(N, {
    children: [
      Bee > 0 && ", ",
      Ck.count === 1
        ? r(N, {
            children: [
              "Async hook ",
              e(t, { bold: !0, children: Ck.hookEvent }),
              " completed",
            ],
          })
        : r(N, {
            children: [
              Ck.count,
              " async ",
              e(t, { bold: !0, children: Ck.hookEvent }),
              " hooks completed",
            ],
          }),
    ],
  });
}
function xj(jee) {
  return jee.trim() !== "";
}
function _j(Fee) {
  return Fee.trim() !== "";
}
function Cf(Pee) {
  let X = _(293),
    {
      attachment: w,
      addMargin: _n,
      verbose: fo,
      isTranscriptMode: Fo,
      hasMetadataHeader: X1,
      followsSpeakerLabel: Q1,
      messageId: sU,
    } = Pee,
    iU = X1 === void 0 ? !1 : X1,
    aU = Q1 === void 0 ? !1 : Q1,
    hl = shouldExpandContent(fo, Fo),
    Jm = jA(fo);
  if (isAgentSwarmsEnabled() && w.type === "teammate_mailbox") {
    const q = w.messages;
    let gs, Z, ae, Te;
    if (X[0] !== w.messages || X[1] !== hl) {
      Te = EARLY_RETURN_SENTINEL;
      bb0: {
        let J1 = q.filter(Tj);
        if (J1.length === 0) {
          Te = null;
          break bb0;
        }
        let uo;
        if (X[6] !== hl)
          ((uo = (hs, Z1) => {
            let yk = resolveAgentColor(hs.color);
            let yf = capIdFrameField(hs.from, IDLE_ID_FIELD_RECEIVE_BOUND) || UNKNOWN_SENDER;
            let Rk = capFrameFieldForDisplay(hs.summary);
            let Cee = Rk
              ? r(o, {
                  children: [
                    r(t, {
                      color: yk,
                      children: [
                        "@",
                        yf,
                        e(t, { "aria-hidden": !0, children: figures.pointer }),
                      ],
                    }),
                    r(t, { children: [" ", Rk] }),
                  ],
                })
              : null;
            let ej = Ga(hs.text, yf);
            if (ej) {
              return { kind: "panel", node: r(N, { children: [Cee, ej] }) };
            }
            let Zm = parseFrameForDisplay(IdleNotificationMessageSchema(), hs.text);
            if (Zm && !hs.summary) {
              return {
                kind: "panel",
                node: e(
                  ol,
                  {
                    displayName: yf,
                    inkColor: yk,
                    idleReason: Zm.idleReason,
                    failureReason: Zm.failureReason,
                    summary: Zm.summary,
                    completedTaskId: Zm.completedTaskId,
                    result: Zm.result,
                    expanded: hl,
                  },
                  Z1,
                ),
              };
            }
            let Mk = parseFrameForDisplay(TaskCompletedMessageSchema(), hs.text);
            if (Mk) {
              let Uee = capIdFrameField(Mk.taskId, IDLE_ID_FIELD_RECEIVE_BOUND);
              let Nee = Mk.taskSubject ? capIdFrameField(Mk.taskSubject, IDLE_SUMMARY_RECEIVE_BOUND) : "";
              return {
                kind: "panel",
                node: e(
                  bi,
                  {
                    displayName: yf,
                    inkColor: yk,
                    summary: Rk,
                    taskId: Uee,
                    taskSubject: Nee,
                  },
                  Z1,
                ),
              };
            }
            let Aee = capRawFrameTextForDisplay(hs.text, hs.from);
            return {
              kind: "text",
              displayName: yf,
              inkColor: yk,
              content: Aee,
              summary: Rk,
            };
          }),
            (X[6] = hl),
            (X[7] = uo));
        else uo = X[7];
        let oj = J1.map(uo);
        gs = o;
        Z = "column";
        ae = hl ? oj.map(yj) : Nm(oj).map(Rj);
      }
      ((X[0] = w.messages),
        (X[1] = hl),
        (X[2] = gs),
        (X[3] = Z),
        (X[4] = ae),
        (X[5] = Te));
    } else ((gs = X[2]), (Z = X[3]), (ae = X[4]), (Te = X[5]));
    if (Te !== EARLY_RETURN_SENTINEL) return Te;
    let uo;
    if (X[8] !== gs || X[9] !== Z || X[10] !== ae)
      ((uo = e(gs, { flexDirection: Z, children: ae })),
        (X[8] = gs),
        (X[9] = Z),
        (X[10] = ae),
        (X[11] = uo));
    else uo = X[11];
    return uo;
  }
  switch (w.type) {
    case "directory": {
      const q = w.displayPath + RU;
      let Z;
      if (X[12] !== q)
        ((Z = r(ge, {
          children: ["Listed directory ", e(t, { bold: !0, children: q })],
        })),
          (X[12] = q),
          (X[13] = Z));
      else Z = X[13];
      return Z;
    }
    case "file":
    case "already_read_file": {
      if (w.content.type === "notebook") {
        let q;
        if (X[14] !== w.displayPath)
          ((q = e(t, { bold: !0, children: w.displayPath })),
            (X[14] = w.displayPath),
            (X[15] = q));
        else q = X[15];
        let Z;
        if (X[16] !== w.content.file.cells.length || X[17] !== q)
          ((Z = r(ge, {
            children: [
              "Read ",
              q,
              " (",
              w.content.file.cells.length,
              " cells)",
            ],
          })),
            (X[16] = w.content.file.cells.length),
            (X[17] = q),
            (X[18] = Z));
        else Z = X[18];
        return Z;
      }
      if (w.content.type === "file_unchanged") {
        let q;
        if (X[19] !== w.displayPath)
          ((q = r(ge, {
            children: [
              "Read ",
              e(t, { bold: !0, children: w.displayPath }),
              " (unchanged)",
            ],
          })),
            (X[19] = w.displayPath),
            (X[20] = q));
        else q = X[20];
        return q;
      }
      let q;
      if (X[21] !== w.displayPath)
        ((q = e(t, { bold: !0, children: w.displayPath })),
          (X[21] = w.displayPath),
          (X[22] = q));
      else q = X[22];
      let Z;
      if (
        X[23] !== w.content.file.numLines ||
        X[24] !== w.content.file.originalSize ||
        X[25] !== w.content.type ||
        X[26] !== w.truncated
      )
        ((Z =
          w.content.type === "text"
            ? `${w.content.file.numLines}${w.truncated ? "+" : ""} lines`
            : formatFileSize(w.content.file.originalSize)),
          (X[23] = w.content.file.numLines),
          (X[24] = w.content.file.originalSize),
          (X[25] = w.content.type),
          (X[26] = w.truncated),
          (X[27] = Z));
      else Z = X[27];
      let ae;
      if (X[28] !== q || X[29] !== Z)
        ((ae = r(ge, { children: ["Read ", q, " (", Z, ")"] })),
          (X[28] = q),
          (X[29] = Z),
          (X[30] = ae));
      else ae = X[30];
      return ae;
    }
    case "compact_file_reference": {
      let q;
      if (X[31] !== w.displayPath)
        ((q = r(ge, {
          children: [
            "Referenced file ",
            e(t, { bold: !0, children: w.displayPath }),
          ],
        })),
          (X[31] = w.displayPath),
          (X[32] = q));
      else q = X[32];
      return q;
    }
    case "pdf_reference": {
      let q;
      if (X[33] !== w.displayPath)
        ((q = e(t, { bold: !0, children: w.displayPath })),
          (X[33] = w.displayPath),
          (X[34] = q));
      else q = X[34];
      let Z;
      if (X[35] !== w.pageCount || X[36] !== q)
        ((Z = r(ge, {
          children: ["Referenced PDF ", q, " (", w.pageCount, " pages)"],
        })),
          (X[35] = w.pageCount),
          (X[36] = q),
          (X[37] = Z));
      else Z = X[37];
      return Z;
    }
    case "audio_transcript": {
      if (w.error !== void 0) {
        let q;
        if (X[38] === MEMO_CACHE_SENTINEL)
          ((q = r(t, {
            "aria-hidden": !0,
            color: "warning",
            children: [MUSIC_NOTE_GLYPH, " "],
          })),
            (X[38] = q));
        else q = X[38];
        let Z;
        if (X[39] !== w.displayPath)
          ((Z = e(t, { bold: !0, color: "warning", children: w.displayPath })),
            (X[39] = w.displayPath),
            (X[40] = Z));
        else Z = X[40];
        let ae;
        if (X[41] !== w.error)
          ((ae = r(t, {
            color: "error",
            children: [" ", "\u2014 transcription failed: ", w.error],
          })),
            (X[41] = w.error),
            (X[42] = ae));
        else ae = X[42];
        let Te;
        if (X[43] !== Z || X[44] !== ae)
          ((Te = r(ge, { dimColor: !1, children: [q, Z, ae] })),
            (X[43] = Z),
            (X[44] = ae),
            (X[45] = Te));
        else Te = X[45];
        return Te;
      }
      let kf = w.transcript ?? "";
      let ec = hl || kf.length <= MAX_AUDIO_TRANSCRIPT_CODE_UNITS;
      let q;
      if (X[46] !== ec || X[47] !== kf)
        ((q = ec ? kf : truncateToCodeUnits(kf, MAX_AUDIO_TRANSCRIPT_CODE_UNITS)), (X[46] = ec), (X[47] = kf), (X[48] = q));
      else q = X[48];
      let kk = q;
      let Z, ae;
      if (X[49] === MEMO_CACHE_SENTINEL)
        ((Z = r(t, {
          "aria-hidden": !0,
          color: "claude",
          children: [MUSIC_NOTE_GLYPH, " "],
        })),
          (ae = e(t, { dimColor: !0, children: "Transcribed " })),
          (X[49] = Z),
          (X[50] = ae));
      else ((Z = X[49]), (ae = X[50]));
      let Te;
      if (X[51] !== w.displayPath)
        ((Te = e(t, { bold: !0, color: "claude", children: w.displayPath })),
          (X[51] = w.displayPath),
          (X[52] = Te));
      else Te = X[52];
      const uo = w.durationSec ?? 0;
      let It;
      if (X[53] !== uo) ((It = formatDurationAsClockTime(uo)), (X[53] = uo), (X[54] = It));
      else It = X[54];
      const rr = w.wordCount ?? 0;
      const Br = w.wordCount ?? 0;
      let Ts;
      if (X[55] !== Br) ((Ts = pluralize(Br, "word")), (X[55] = Br), (X[56] = Ts));
      else Ts = X[56];
      let ys;
      if (X[57] !== Ts || X[58] !== It || X[59] !== rr)
        ((ys = r(t, {
          color: "inactive",
          children: [" ", "(", It, ",", " ", rr, " ", Ts, ")"],
        })),
          (X[57] = Ts),
          (X[58] = It),
          (X[59] = rr),
          (X[60] = ys));
      else ys = X[60];
      let Rs;
      if (X[61] !== ys || X[62] !== Te)
        ((Rs = r(ge, { dimColor: !1, children: [Z, ae, Te, ys] })),
          (X[61] = ys),
          (X[62] = Te),
          (X[63] = Rs));
      else Rs = X[63];
      let Ms;
      if (X[64] !== kk || X[65] !== ec)
        ((Ms =
          kk.length > 0
            ? e(o, {
                borderStyle: "quote",
                borderTop: !1,
                borderBottom: !1,
                borderRight: !1,
                borderLeftColor: "claude",
                marginLeft: 5,
                paddingLeft: 1,
                children: r(t, {
                  dimColor: !0,
                  wrap: "wrap",
                  children: [
                    kk,
                    ec ? null : r(N, { children: ["\u2026 ", e(TranscriptExpandHint, {})] }),
                  ],
                }),
              })
            : null),
          (X[64] = kk),
          (X[65] = ec),
          (X[66] = Ms));
      else Ms = X[66];
      let xf;
      if (X[67] !== Rs || X[68] !== Ms)
        ((xf = r(o, { flexDirection: "column", children: [Rs, Ms] })),
          (X[67] = Rs),
          (X[68] = Ms),
          (X[69] = xf));
      else xf = X[69];
      return xf;
    }
    case "selected_lines_in_ide": {
      let q;
      if (X[70] === MEMO_CACHE_SENTINEL)
        ((q = e(t, { "aria-hidden": !0, children: "\u29C9 " })), (X[70] = q));
      else q = X[70];
      const Z = w.lineEnd - w.lineStart + 1;
      let ae;
      if (X[71] !== Z)
        ((ae = e(t, { bold: !0, children: Z })), (X[71] = Z), (X[72] = ae));
      else ae = X[72];
      let Te;
      if (X[73] !== w.displayPath)
        ((Te = e(t, { bold: !0, children: w.displayPath })),
          (X[73] = w.displayPath),
          (X[74] = Te));
      else Te = X[74];
      let uo;
      if (X[75] !== w.ideName || X[76] !== ae || X[77] !== Te)
        ((uo = r(ge, {
          children: [
            q,
            "Selected",
            " ",
            ae,
            " ",
            "lines from ",
            Te,
            " in",
            " ",
            w.ideName,
          ],
        })),
          (X[75] = w.ideName),
          (X[76] = ae),
          (X[77] = Te),
          (X[78] = uo));
      else uo = X[78];
      return uo;
    }
    case "selected_lines_in_diff": {
      let q;
      if (X[79] === MEMO_CACHE_SENTINEL)
        ((q = e(t, { "aria-hidden": !0, children: "\u29C9 " })), (X[79] = q));
      else q = X[79];
      let Z;
      if (X[80] !== w.lineCount)
        ((Z = e(t, { bold: !0, children: w.lineCount })),
          (X[80] = w.lineCount),
          (X[81] = Z));
      else Z = X[81];
      let ae;
      if (X[82] !== w.lineCount)
        ((ae = pluralize(w.lineCount, "line")), (X[82] = w.lineCount), (X[83] = ae));
      else ae = X[83];
      let Te;
      if (X[84] !== Z || X[85] !== ae)
        ((Te = r(ge, {
          children: [q, "Selected", " ", Z, " ", ae, " from diff view"],
        })),
          (X[84] = Z),
          (X[85] = ae),
          (X[86] = Te));
      else Te = X[86];
      return Te;
    }
    case "nested_memory": {
      let q;
      if (X[87] !== w.displayPath)
        ((q = r(ge, {
          children: ["Loaded ", e(t, { bold: !0, children: w.displayPath })],
        })),
          (X[87] = w.displayPath),
          (X[88] = q));
      else q = X[88];
      return q;
    }
    case "relevant_memories": {
      const q = _n ? 1 : 0;
      let Z;
      if (X[89] === MEMO_CACHE_SENTINEL) ((Z = e(o, { minWidth: 2 })), (X[89] = Z));
      else Z = X[89];
      let ae;
      if (X[90] !== w.memories.length)
        ((ae = e(t, { bold: !0, children: w.memories.length })),
          (X[90] = w.memories.length),
          (X[91] = ae));
      else ae = X[91];
      const Te = w.memories.length === 1 ? "memory" : "memories";
      let uo;
      if (X[92] !== Fo)
        ((uo = !Fo && r(N, { children: [" ", e(TranscriptExpandHint, {})] })),
          (X[92] = Fo),
          (X[93] = uo));
      else uo = X[93];
      let It;
      if (X[94] !== ae || X[95] !== Te || X[96] !== uo)
        ((It = r(o, {
          flexDirection: "row",
          children: [
            Z,
            r(t, { dimColor: !0, children: ["Recalled ", ae, " ", Te, uo] }),
          ],
        })),
          (X[94] = ae),
          (X[95] = Te),
          (X[96] = uo),
          (X[97] = It));
      else It = X[97];
      let rr;
      if (X[98] !== w.memories || X[99] !== Fo || X[100] !== fo)
        ((rr =
          fo || Fo
            ? w.memories.map((xk) =>
                r(
                  o,
                  {
                    flexDirection: "column",
                    children: [
                      e(ToolResultRow, {
                        children: e(t, {
                          dimColor: !0,
                          children: e(TruncatedFilePath, {
                            filePath: xk.path,
                            children: yU(xk.path),
                          }),
                        }),
                      }),
                      Fo &&
                        e(o, {
                          paddingLeft: 5,
                          children: e(t, {
                            children: e(jr, { children: xk.content }),
                          }),
                        }),
                    ],
                  },
                  xk.path,
                ),
              )
            : UYe() &&
              e(Ri, {
                ops: w.memories.map(Mj),
                relevantMemories: w.memories,
                isActiveGroup: !1,
              })),
          (X[98] = w.memories),
          (X[99] = Fo),
          (X[100] = fo),
          (X[101] = rr));
      else rr = X[101];
      let Br;
      if (X[102] !== q || X[103] !== It || X[104] !== rr)
        ((Br = r(o, {
          flexDirection: "column",
          marginTop: q,
          children: [It, rr],
        })),
          (X[102] = q),
          (X[103] = It),
          (X[104] = rr),
          (X[105] = Br));
      else Br = X[105];
      return Br;
    }
    case "dynamic_skill": {
      let oc = w.skillNames.length;
      let q;
      if (X[106] !== oc) ((q = pluralize(oc, "skill")), (X[106] = oc), (X[107] = q));
      else q = X[107];
      let Z;
      if (X[108] !== oc || X[109] !== q)
        ((Z = r(t, { bold: !0, children: [oc, " ", q] })),
          (X[108] = oc),
          (X[109] = q),
          (X[110] = Z));
      else Z = X[110];
      let ae;
      if (X[111] !== w.displayPath)
        ((ae = e(t, { bold: !0, children: w.displayPath })),
          (X[111] = w.displayPath),
          (X[112] = ae));
      else ae = X[112];
      let Te;
      if (X[113] !== Z || X[114] !== ae)
        ((Te = r(ge, { children: ["Loaded", " ", Z, " ", "from ", ae] })),
          (X[113] = Z),
          (X[114] = ae),
          (X[115] = Te));
      else Te = X[115];
      return Te;
    }
    case "skill_listing": {
      if (w.isInitial) {
        return null;
      }
      let q;
      if (X[116] !== w.skillCount)
        ((q = e(t, { bold: !0, children: w.skillCount })),
          (X[116] = w.skillCount),
          (X[117] = q));
      else q = X[117];
      let Z;
      if (X[118] !== w.skillCount)
        ((Z = pluralize(w.skillCount, "skill")), (X[118] = w.skillCount), (X[119] = Z));
      else Z = X[119];
      let ae;
      if (X[120] !== q || X[121] !== Z)
        ((ae = r(ge, { children: [q, " ", Z, " available"] })),
          (X[120] = q),
          (X[121] = Z),
          (X[122] = ae));
      else ae = X[122];
      return ae;
    }
    case "agent_listing_delta": {
      let q;
      if (X[123] !== w.addedTypes)
        ((q = asStringArray(w.addedTypes)), (X[123] = w.addedTypes), (X[124] = q));
      else q = X[124];
      let tj = q;
      if (w.isInitial || tj.length === 0) {
        return null;
      }
      let tc = tj.length;
      let Z;
      if (X[125] !== tc)
        ((Z = e(t, { bold: !0, children: tc })), (X[125] = tc), (X[126] = Z));
      else Z = X[126];
      let ae;
      if (X[127] !== tc) ((ae = pluralize(tc, "type")), (X[127] = tc), (X[128] = ae));
      else ae = X[128];
      let Te;
      if (X[129] !== Z || X[130] !== ae)
        ((Te = r(ge, { children: [Z, " agent ", ae, " available"] })),
          (X[129] = Z),
          (X[130] = ae),
          (X[131] = Te));
      else Te = X[131];
      return Te;
    }
    case "queued_command": {
      let _k, q, _f;
      if (X[132] !== w.imagePasteIds || X[133] !== w.prompt || X[134] !== iU)
        ((_f = extractTextContent(w.prompt).trim()),
          (_k = w.imagePasteIds && w.imagePasteIds.length > 0),
          (q = iU && mye(_f)),
          (X[132] = w.imagePasteIds),
          (X[133] = w.prompt),
          (X[134] = iU),
          (X[135] = _k),
          (X[136] = q),
          (X[137] = _f));
      else ((_k = X[135]), (q = X[136]), (_f = X[137]));
      let lU = q;
      let Z;
      if (X[138] !== _f)
        ((Z = { text: _f, type: "text" }), (X[138] = _f), (X[139] = Z));
      else Z = X[139];
      let ae;
      if (
        X[140] !== _n ||
        X[141] !== w.origin ||
        X[142] !== w.taskDelivery ||
        X[143] !== aU ||
        X[144] !== Fo ||
        X[145] !== sU ||
        X[146] !== Z ||
        X[147] !== fo
      )
        ((ae = e(Jz, {
          addMargin: _n,
          param: Z,
          verbose: fo,
          isTranscriptMode: Fo,
          messageId: sU,
          origin: w.origin,
          taskDelivery: w.taskDelivery,
          followsSpeakerLabel: aU,
        })),
          (X[140] = _n),
          (X[141] = w.origin),
          (X[142] = w.taskDelivery),
          (X[143] = aU),
          (X[144] = Fo),
          (X[145] = sU),
          (X[146] = Z),
          (X[147] = fo),
          (X[148] = ae));
      else ae = X[148];
      let Te;
      if (X[149] !== w.imagePasteIds || X[150] !== lU || X[151] !== _k)
        ((Te =
          _k &&
          w.imagePasteIds?.map((rj, Eee) =>
            e(
              xi,
              { imageId: rj, startsUserTurn: lU && Eee === 0 ? !0 : void 0 },
              rj,
            ),
          )),
          (X[149] = w.imagePasteIds),
          (X[150] = lU),
          (X[151] = _k),
          (X[152] = Te));
      else Te = X[152];
      let uo;
      if (X[153] !== ae || X[154] !== Te)
        ((uo = r(o, { flexDirection: "column", children: [ae, Te] })),
          (X[153] = ae),
          (X[154] = Te),
          (X[155] = uo));
      else uo = X[155];
      return uo;
    }
    case "plan_file_reference": {
      let q;
      if (X[156] !== w.planFilePath)
        ((q = Ao(w.planFilePath)), (X[156] = w.planFilePath), (X[157] = q));
      else q = X[157];
      let Z;
      if (X[158] !== q)
        ((Z = r(ge, { children: ["Plan file referenced (", q, ")"] })),
          (X[158] = q),
          (X[159] = Z));
      else Z = X[159];
      return Z;
    }
    case "invoked_skills": {
      if (w.skills.length === 0) {
        return null;
      }
      let q;
      if (X[160] !== w.skills)
        ((q = w.skills.map(kj).join(", ")), (X[160] = w.skills), (X[161] = q));
      else q = X[161];
      let uU = q;
      let Z;
      if (X[162] !== uU)
        ((Z = r(ge, { children: ["Skills restored (", uU, ")"] })),
          (X[162] = uU),
          (X[163] = Z));
      else Z = X[163];
      return Z;
    }
    case "diagnostics": {
      let q;
      if (X[164] !== w || X[165] !== Fo || X[166] !== fo)
        ((q = e(vp, { attachment: w, verbose: fo, isTranscriptMode: Fo })),
          (X[164] = w),
          (X[165] = Fo),
          (X[166] = fo),
          (X[167] = q));
      else q = X[167];
      return q;
    }
    case "mcp_resource": {
      let q;
      if (X[168] !== w.name)
        ((q = e(t, { bold: !0, children: w.name })),
          (X[168] = w.name),
          (X[169] = q));
      else q = X[169];
      let Z;
      if (X[170] !== w.server || X[171] !== q)
        ((Z = r(ge, {
          children: ["Read MCP resource ", q, " from", " ", w.server],
        })),
          (X[170] = w.server),
          (X[171] = q),
          (X[172] = Z));
      else Z = X[172];
      return Z;
    }
    case "command_permissions": {
      return null;
    }
    case "async_hook_response":
    case "async_hook_response_batch": {
      let q;
      if (X[173] !== w.hookEvent || X[174] !== w.hooks || X[175] !== w.type)
        ((q =
          w.type === "async_hook_response"
            ? [{ hookEvent: w.hookEvent, count: 1 }]
            : w.hooks),
          (X[173] = w.hookEvent),
          (X[174] = w.hooks),
          (X[175] = w.type),
          (X[176] = q));
      else q = X[176];
      let gs, Z, ae;
      if (X[177] !== Fo || X[178] !== q || X[179] !== fo) {
        ae = EARLY_RETURN_SENTINEL;
        bb1: {
          let Te;
          if (X[183] !== Fo || X[184] !== fo)
            ((Te = (Lee) => fo || (Fo && Lee.hookEvent !== "SessionStart")),
              (X[183] = Fo),
              (X[184] = fo),
              (X[185] = Te));
          else Te = X[185];
          let nj = q.filter(Te);
          if (nj.length === 0) {
            ae = null;
            break bb1;
          }
          gs = ge;
          Z = nj.map(bj);
        }
        ((X[177] = Fo),
          (X[178] = q),
          (X[179] = fo),
          (X[180] = gs),
          (X[181] = Z),
          (X[182] = ae));
      } else ((gs = X[180]), (Z = X[181]), (ae = X[182]));
      if (ae !== EARLY_RETURN_SENTINEL) return ae;
      let Te;
      if (X[186] !== gs || X[187] !== Z)
        ((Te = e(gs, { children: Z })),
          (X[186] = gs),
          (X[187] = Z),
          (X[188] = Te));
      else Te = X[188];
      return Te;
    }
    case "hook_blocking_error": {
      if (w.hookEvent === "Stop" || w.hookEvent === "SubagentStop") {
        return null;
      }
      const q = w.blockingError.blockingError;
      let rc, Z;
      if (
        X[189] !== _n ||
        X[190] !== w.blockingError.blockingError ||
        X[191] !== w.hookName ||
        X[192] !== Jm
      ) {
        Z = EARLY_RETURN_SENTINEL;
        bb2: {
          rc = q.trim();
          if (Jm) {
            Z = e(ao, {
              row: hu({ hookName: w.hookName, blocking: !0, reason: rc }),
              addMargin: _n,
            });
            break bb2;
          }
        }
        ((X[189] = _n),
          (X[190] = w.blockingError.blockingError),
          (X[191] = w.hookName),
          (X[192] = Jm),
          (X[193] = rc),
          (X[194] = Z));
      } else ((rc = X[193]), (Z = X[194]));
      if (Z !== EARLY_RETURN_SENTINEL) return Z;
      let ae;
      if (X[195] !== w.hookName)
        ((ae = r(ge, {
          color: "error",
          children: [w.hookName, " hook returned blocking error"],
        })),
          (X[195] = w.hookName),
          (X[196] = ae));
      else ae = X[196];
      let Te;
      if (X[197] !== rc)
        ((Te = rc ? e(ge, { color: "error", children: rc }) : null),
          (X[197] = rc),
          (X[198] = Te));
      else Te = X[198];
      let uo;
      if (X[199] !== ae || X[200] !== Te)
        ((uo = r(N, { children: [ae, Te] })),
          (X[199] = ae),
          (X[200] = Te),
          (X[201] = uo));
      else uo = X[201];
      return uo;
    }
    case "hook_non_blocking_error": {
      if (w.hookEvent === "Stop" || w.hookEvent === "SubagentStop") {
        return null;
      }
      let nc, q;
      if (
        X[202] !== _n ||
        X[203] !== w.hookName ||
        X[204] !== w.stderr ||
        X[205] !== w.stdout ||
        X[206] !== Jm
      ) {
        q = EARLY_RETURN_SENTINEL;
        bb3: {
          nc = MU(w.stderr, w.stdout);
          if (Jm) {
            q = e(ao, {
              row: hu({ hookName: w.hookName, blocking: !1, reason: nc }),
              addMargin: _n,
            });
            break bb3;
          }
        }
        ((X[202] = _n),
          (X[203] = w.hookName),
          (X[204] = w.stderr),
          (X[205] = w.stdout),
          (X[206] = Jm),
          (X[207] = nc),
          (X[208] = q));
      } else ((nc = X[207]), (q = X[208]));
      if (q !== EARLY_RETURN_SENTINEL) return q;
      let Z;
      if (X[209] !== w.hookName)
        ((Z = r(ge, { color: "error", children: [w.hookName, " hook error"] })),
          (X[209] = w.hookName),
          (X[210] = Z));
      else Z = X[210];
      let ae;
      if (X[211] !== nc)
        ((ae = nc ? e(ge, { color: "error", children: nc }) : null),
          (X[211] = nc),
          (X[212] = ae));
      else ae = X[212];
      let Te;
      if (X[213] !== Z || X[214] !== ae)
        ((Te = r(N, { children: [Z, ae] })),
          (X[213] = Z),
          (X[214] = ae),
          (X[215] = Te));
      else Te = X[215];
      return Te;
    }
    case "hook_cancelled": {
      if (w.hookEvent !== "UserPromptSubmit" || !w.timedOut) {
        return null;
      }
      let q;
      if (X[216] !== w.timeoutMs)
        ((q = w.timeoutMs
          ? w.timeoutMs < 1000
            ? `${w.timeoutMs}ms`
            : `${Math.round(w.timeoutMs / 1000)}s`
          : void 0),
          (X[216] = w.timeoutMs),
          (X[217] = q));
      else q = X[217];
      let sj = q;
      const Z = sj !== void 0 ? ` after ${sj}` : "";
      let ae;
      if (X[218] !== w.hookName || X[219] !== Z)
        ((ae = r(ge, {
          color: "error",
          dimColor: !1,
          children: [
            w.hookName,
            " hook timed out",
            Z,
            ` \u2014 output discarded. Raise the hook's "timeout" to allow more time.`,
          ],
        })),
          (X[218] = w.hookName),
          (X[219] = Z),
          (X[220] = ae));
      else ae = X[220];
      return ae;
    }
    case "hook_error_during_execution": {
      if (w.hookEvent === "Stop" || w.hookEvent === "SubagentStop") {
        return null;
      }
      let q;
      if (X[221] !== w.hookName)
        ((q = r(ge, { children: [w.hookName, " hook warning"] })),
          (X[221] = w.hookName),
          (X[222] = q));
      else q = X[222];
      return q;
    }
    case "hook_success": {
      return null;
    }
    case "hook_stopped_continuation": {
      if (w.hookEvent === "Stop" || w.hookEvent === "SubagentStop") {
        return null;
      }
      let q;
      if (X[223] !== w.hookName || X[224] !== w.message)
        ((q = r(ge, {
          color: "warning",
          children: [w.hookName, " hook stopped continuation: ", w.message],
        })),
          (X[223] = w.hookName),
          (X[224] = w.message),
          (X[225] = q));
      else q = X[225];
      return q;
    }
    case "hook_deferred_tool": {
      let q;
      if (X[226] !== w.hookName || X[227] !== w.toolName)
        ((q = r(ge, {
          color: "warning",
          children: [
            w.hookName,
            " deferred ",
            w.toolName,
            " \xB7 resume with -p --resume to continue",
          ],
        })),
          (X[226] = w.hookName),
          (X[227] = w.toolName),
          (X[228] = q));
      else q = X[228];
      return q;
    }
    case "goal_status": {
      if (w.sentinel) {
        return null;
      }
      let nr = w.failed === !0;
      let sc;
      if (
        X[229] !== w.durationMs ||
        X[230] !== w.iterations ||
        X[231] !== w.met ||
        X[232] !== w.tokens ||
        X[233] !== nr
      ) {
        sc = [];
        if (w.met || nr) {
          if (w.durationMs !== void 0) {
            let q;
            if (X[235] !== w.durationMs)
              ((q = formatDuration(w.durationMs, { mostSignificantOnly: !0 })),
                (X[235] = w.durationMs),
                (X[236] = q));
            else q = X[236];
            sc.push(q);
          }
          if (w.iterations !== void 0) {
            const q = w.iterations;
            let Z;
            if (X[237] !== w.iterations)
              ((Z = pluralize(w.iterations, "turn")),
                (X[237] = w.iterations),
                (X[238] = Z));
            else Z = X[238];
            sc.push(`${q} ${Z}`);
          }
          if (w.tokens !== void 0) {
            let q;
            if (X[239] !== w.tokens)
              ((q = formatTokens(w.tokens)), (X[239] = w.tokens), (X[240] = q));
            else q = X[240];
            sc.push(`${q} tokens`);
          }
        }
        ((X[229] = w.durationMs),
          (X[230] = w.iterations),
          (X[231] = w.met),
          (X[232] = w.tokens),
          (X[233] = nr),
          (X[234] = sc));
      } else sc = X[234];
      let Sk = sc.length > 0 ? ` (${sc.join(" \xB7 ")})` : "";
      const q = nr ? "error" : w.met ? "success" : "pending";
      let Z;
      if (X[241] !== q)
        ((Z = e(StatusIndicator, { status: q, withSpace: !0 })), (X[241] = q), (X[242] = Z));
      else Z = X[242];
      const ae = nr ? "error" : void 0;
      const Te = !w.met && !nr;
      const uo = nr
        ? "Goal could not be achieved"
        : w.met
          ? "Goal achieved"
          : "Goal not yet met\u2026 continuing";
      let It;
      if (X[243] !== ae || X[244] !== Te || X[245] !== uo)
        ((It = e(t, { color: ae, dimColor: Te, children: uo })),
          (X[243] = ae),
          (X[244] = Te),
          (X[245] = uo),
          (X[246] = It));
      else It = X[246];
      let rr;
      if (X[247] !== Sk)
        ((rr = Sk ? e(t, { dimColor: !0, children: Sk }) : null),
          (X[247] = Sk),
          (X[248] = rr));
      else rr = X[248];
      let Br;
      if (X[249] !== fo)
        ((Br = !fo ? r(t, { children: [" ", e(TranscriptExpandHint, {})] }) : null),
          (X[249] = fo),
          (X[250] = Br));
      else Br = X[250];
      let Ts;
      if (X[251] !== Br || X[252] !== Z || X[253] !== It || X[254] !== rr)
        ((Ts = r(t, { children: [Z, It, rr, Br] })),
          (X[251] = Br),
          (X[252] = Z),
          (X[253] = It),
          (X[254] = rr),
          (X[255] = Ts));
      else Ts = X[255];
      let ys;
      if (X[256] !== w.reason || X[257] !== nr)
        ((ys =
          nr && w.reason
            ? e(o, {
                paddingLeft: 2,
                children: e(t, {
                  dimColor: !0,
                  wrap: "wrap",
                  children: w.reason,
                }),
              })
            : null),
          (X[256] = w.reason),
          (X[257] = nr),
          (X[258] = ys));
      else ys = X[258];
      let Rs;
      if (X[259] !== w.condition || X[260] !== fo)
        ((Rs = fo
          ? e(o, {
              paddingLeft: 2,
              children: r(t, {
                dimColor: !0,
                wrap: "wrap",
                children: ["Goal: ", w.condition],
              }),
            })
          : null),
          (X[259] = w.condition),
          (X[260] = fo),
          (X[261] = Rs));
      else Rs = X[261];
      let Ms;
      if (X[262] !== w.reason || X[263] !== nr || X[264] !== fo)
        ((Ms =
          fo && !nr && w.reason
            ? e(o, {
                paddingLeft: 2,
                children: r(t, {
                  dimColor: !0,
                  wrap: "wrap",
                  children: ["Reason: ", w.reason],
                }),
              })
            : null),
          (X[262] = w.reason),
          (X[263] = nr),
          (X[264] = fo),
          (X[265] = Ms));
      else Ms = X[265];
      let xf;
      if (X[266] !== Ts || X[267] !== ys || X[268] !== Rs || X[269] !== Ms)
        ((xf = r(o, {
          flexDirection: "column",
          marginTop: 1,
          children: [Ts, ys, Rs, Ms],
        })),
          (X[266] = Ts),
          (X[267] = ys),
          (X[268] = Rs),
          (X[269] = Ms),
          (X[270] = xf));
      else xf = X[270];
      return xf;
    }
    case "hook_system_message": {
      let q;
      if (X[271] !== w.content || X[272] !== w.hookName)
        ((q = r(ge, { children: [w.hookName, " says: ", w.content] })),
          (X[271] = w.content),
          (X[272] = w.hookName),
          (X[273] = q));
      else q = X[273];
      return q;
    }
    case "tool_hosts_notice": {
      let q;
      if (X[274] !== w.lines) {
        let ij = asStringArray(w.lines).filter(xj);
        q =
          ij.length === 0
            ? null
            : e(ge, {
                children: ij.join(`
`),
              });
        ((X[274] = w.lines), (X[275] = q));
      } else q = X[275];
      return q;
    }
    case "tool_host_result_lines": {
      let q;
      if (X[276] !== w.label || X[277] !== w.lines || X[278] !== w.unverified) {
        let aj = [
          ...(w.unverified === !0 && typeof w.label === "string"
            ? [w.label]
            : []),
          ...asStringArray(w.lines),
        ].filter(_j);
        q =
          aj.length === 0
            ? null
            : e(ge, {
                children: e(t, {
                  dimColor: !0,
                  children: aj.join(`
`),
                }),
              });
        ((X[276] = w.label),
          (X[277] = w.lines),
          (X[278] = w.unverified),
          (X[279] = q));
      } else q = X[279];
      return q;
    }
    case "hook_permission_decision": {
      let mU = w.decision === "allow" ? "Allowed" : "Denied";
      let q;
      if (X[280] !== w.hookEvent)
        ((q = e(t, { bold: !0, children: w.hookEvent })),
          (X[280] = w.hookEvent),
          (X[281] = q));
      else q = X[281];
      let Z;
      if (X[282] !== mU || X[283] !== q)
        ((Z = r(ge, { children: [mU, " by ", q, " hook"] })),
          (X[282] = mU),
          (X[283] = q),
          (X[284] = Z));
      else Z = X[284];
      return Z;
    }
    case "task_status": {
      let q;
      if (X[285] !== w)
        ((q = e(Ak, { attachment: w })), (X[285] = w), (X[286] = q));
      else q = X[286];
      return q;
    }
    case "teammate_shutdown_batch": {
      let q;
      if (X[287] === MEMO_CACHE_SENTINEL)
        ((q = r(t, { "aria-hidden": !0, dimColor: !0, children: [CLAUDE_BULLET_GLYPH, " "] })),
          (X[287] = q));
      else q = X[287];
      const Z = w.count;
      let ae;
      if (X[288] !== w.count)
        ((ae = pluralize(w.count, "teammate")), (X[288] = w.count), (X[289] = ae));
      else ae = X[289];
      let Te;
      if (X[290] !== w.count || X[291] !== ae)
        ((Te = r(o, {
          flexDirection: "row",
          width: "100%",
          marginTop: 1,
          children: [
            q,
            r(t, {
              dimColor: !0,
              children: [Z, " ", ae, " shut down gracefully"],
            }),
          ],
        })),
          (X[290] = w.count),
          (X[291] = ae),
          (X[292] = Te));
      else Te = X[292];
      return Te;
    }
    default: {
      return null;
    }
  }
}
function Ak($ee) {
  let uj = _(4),
    { attachment: Ii } = $ee;
  if (ym() && Ii.status === "killed") {
    return null;
  }
  if (isAgentSwarmsEnabled() && Ii.taskType === "in_process_teammate") {
    let Sf;
    if (uj[0] !== Ii)
      ((Sf = e(Ek, { attachment: Ii })), (uj[0] = Ii), (uj[1] = Sf));
    else Sf = uj[1];
    return Sf;
  }
  let Sf;
  if (uj[2] !== Ii)
    ((Sf = e(uc, { attachment: Ii })), (uj[2] = Ii), (uj[3] = Sf));
  else Sf = uj[3];
  return Sf;
}
function uc(Wee) {
  let dU = _(6),
    { attachment: Tl } = Wee,
    cU =
      Tl.status === "completed"
        ? "completed in background"
        : Tl.status === "killed"
          ? "stopped"
          : Tl.status === "running"
            ? "still running in background"
            : Tl.status,
    mj;
  if (dU[0] === MEMO_CACHE_SENTINEL)
    ((mj = r(t, { "aria-hidden": !0, dimColor: !0, children: [CLAUDE_BULLET_GLYPH, " "] })),
      (dU[0] = mj));
  else mj = dU[0];
  let Uk;
  if (dU[1] !== Tl.description)
    ((Uk = e(t, { bold: !0, children: Tl.description })),
      (dU[1] = Tl.description),
      (dU[2] = Uk));
  else Uk = dU[2];
  let cj;
  if (dU[3] !== cU || dU[4] !== Uk)
    ((cj = r(o, {
      flexDirection: "row",
      width: "100%",
      marginTop: 1,
      children: [
        mj,
        r(t, { dimColor: !0, children: ['Task "', Uk, '" ', cU] }),
      ],
    })),
      (dU[3] = cU),
      (dU[4] = Uk),
      (dU[5] = cj));
  else cj = dU[5];
  return cj;
}
function Ek(qee) {
  let ac = _(13),
    { attachment: Di } = qee,
    dj;
  if (ac[0] !== Di.taskId)
    ((dj = (Hee) => Hee.tasks[Di.taskId]), (ac[0] = Di.taskId), (ac[1] = dj));
  else dj = ac[1];
  let yl = useAppStateSelector(dj);
  if (yl?.type !== "in_process_teammate") {
    let Pf;
    if (ac[2] !== Di)
      ((Pf = e(uc, { attachment: Di })), (ac[2] = Di), (ac[3] = Pf));
    else Pf = ac[3];
    return Pf;
  }
  let Pf;
  if (ac[4] !== yl.identity.color)
    ((Pf = resolveAgentColor(yl.identity.color)), (ac[4] = yl.identity.color), (ac[5] = Pf));
  else Pf = ac[5];
  let pU = Pf,
    fU = Di.status === "completed" ? "shut down gracefully" : Di.status,
    pj;
  if (ac[6] === MEMO_CACHE_SENTINEL)
    ((pj = r(t, { "aria-hidden": !0, dimColor: !0, children: [CLAUDE_BULLET_GLYPH, " "] })),
      (ac[6] = pj));
  else pj = ac[6];
  let Nk;
  if (ac[7] !== pU || ac[8] !== yl.identity.agentName)
    ((Nk = r(t, {
      color: pU,
      bold: !0,
      dimColor: !1,
      children: ["@", yl.identity.agentName],
    })),
      (ac[7] = pU),
      (ac[8] = yl.identity.agentName),
      (ac[9] = Nk));
  else Nk = ac[9];
  let fj;
  if (ac[10] !== fU || ac[11] !== Nk)
    ((fj = r(o, {
      flexDirection: "row",
      width: "100%",
      marginTop: 1,
      children: [
        pj,
        r(t, { dimColor: !0, children: ["Teammate", " ", Nk, " ", fU] }),
      ],
    })),
      (ac[10] = fU),
      (ac[11] = Nk),
      (ac[12] = fj));
  else fj = ac[12];
  return fj;
}
function MU(l, f) {
  let g = l?.trim() ? l : f?.trim() ? f : "";
  if (!g) return "";
  let T = beforeFirst(
      g,
      `

Expected schema:`,
    ).trim(),
    y = 0,
    R = T.indexOf(`
`);
  while (R !== -1) {
    let S = T.slice(y, R).trim();
    if (S) return S.length > 200 ? S.slice(0, 200) + "\u2026" : S;
    ((y = R + 1),
      (R = T.indexOf(
        `
`,
        y,
      )));
  }
  let k = T.slice(y).trim();
  return k.length > 200 ? k.slice(0, 200) + "\u2026" : k;
}
function ge(Gee) {
  let zee = _(4),
    { dimColor: gj, children: gU, color: hU } = Gee,
    TU = gj === void 0 ? !0 : gj,
    hj;
  if (zee[0] !== gU || zee[1] !== hU || zee[2] !== TU)
    ((hj = e(o, {
      children: e(ToolResultRow, {
        children: e(t, { color: hU, dimColor: TU, wrap: "wrap", children: gU }),
      }),
    })),
      (zee[0] = gU),
      (zee[1] = hU),
      (zee[2] = TU),
      (zee[3] = hj));
  else hj = zee[3];
  return hj;
}
F();
import { basename as CN } from "path";
F();
function Lk(l, f) {
  let g = useClock(),
    [T, y] = d(l),
    R = C(l !== void 0 ? Date.now() : 0);
  return (
    E(() => {
      if (l !== void 0) {
        ((R.current = Date.now()), y(l));
        return;
      }
      let k = f - (Date.now() - R.current);
      if (k <= 0) {
        y(void 0);
        return;
      }
      return g.setTimeout(() => y(void 0), k);
    }, [l, f, g]),
    T
  );
}
F();
function vk(l, f) {
  let g = useClock(),
    [T, y] = d(l),
    R = C(0);
  return (
    E(() => {
      let k = Date.now() - R.current;
      if (k >= f) {
        ((R.current = Date.now()), y(l));
        return;
      }
      return g.setTimeout(() => {
        ((R.current = Date.now()), y(l));
      }, f - k);
    }, [l, f, g]),
    T
  );
}
function Dk(l) {
  return (
    (l.teamMemorySearchCount ?? 0) > 0 ||
    (l.teamMemoryReadCount ?? 0) > 0 ||
    (l.teamMemoryWriteCount ?? 0) > 0
  );
}
function Uf(roe) {
  let cc = _(15),
    { message: kU, isActiveGroup: wf, hasPrecedingParts: bU } = roe,
    mc = kU.teamMemoryReadCount ?? 0,
    Ik = kU.teamMemorySearchCount ?? 0,
    Bi = kU.teamMemoryWriteCount ?? 0;
  if (mc === 0 && Ik === 0 && Bi === 0) {
    return null;
  }
  let Sj;
  if (
    cc[0] !== bU ||
    cc[1] !== wf ||
    cc[2] !== mc ||
    cc[3] !== Ik ||
    cc[4] !== Bi
  ) {
    let Rl = [];
    let Fr = bU ? 1 : 0;
    if (mc > 0) {
      let noe = wf
        ? Fr === 0
          ? "Recalling"
          : "recalling"
        : Fr === 0
          ? "Recalled"
          : "recalled";
      if (Fr > 0) {
        let ir;
        if (cc[6] === MEMO_CACHE_SENTINEL)
          ((ir = e(t, { children: ", " }, "comma-tmr")), (cc[6] = ir));
        else ir = cc[6];
        Rl.push(ir);
      }
      (Rl.push(
        r(
          t,
          {
            children: [
              noe,
              " ",
              e(t, { bold: !0, children: mc }),
              " team",
              " ",
              mc === 1 ? "memory" : "memories",
            ],
          },
          "team-mem-read",
        ),
      ),
        Fr++);
    }
    if (Ik > 0) {
      let soe = wf
        ? Fr === 0
          ? "Searching"
          : "searching"
        : Fr === 0
          ? "Searched"
          : "searched";
      if (Fr > 0) {
        let ir;
        if (cc[7] === MEMO_CACHE_SENTINEL)
          ((ir = e(t, { children: ", " }, "comma-tms")), (cc[7] = ir));
        else ir = cc[7];
        Rl.push(ir);
      }
      (Rl.push(e(t, { children: `${soe} team memories` }, "team-mem-search")),
        Fr++);
    }
    if (Bi > 0) {
      let xU = wf
        ? Fr === 0
          ? "Writing"
          : "writing"
        : Fr === 0
          ? "Wrote"
          : "wrote";
      if (Fr > 0) {
        let ir;
        if (cc[8] === MEMO_CACHE_SENTINEL)
          ((ir = e(t, { children: ", " }, "comma-tmw")), (cc[8] = ir));
        else ir = cc[8];
        Rl.push(ir);
      }
      let ir;
      if (cc[9] !== Bi)
        ((ir = e(t, { bold: !0, children: Bi })), (cc[9] = Bi), (cc[10] = ir));
      else ir = cc[10];
      const _U = Bi === 1 ? "memory" : "memories";
      let Pj;
      if (cc[11] !== ir || cc[12] !== _U || cc[13] !== xU)
        ((Pj = r(
          t,
          { children: [xU, " ", ir, " team", " ", _U] },
          "team-mem-write",
        )),
          (cc[11] = ir),
          (cc[12] = _U),
          (cc[13] = xU),
          (cc[14] = Pj));
      else Pj = cc[14];
      Rl.push(Pj);
    }
    Sj = e(N, { children: Rl });
    ((cc[0] = bU),
      (cc[1] = wf),
      (cc[2] = mc),
      (cc[3] = Ik),
      (cc[4] = Bi),
      (cc[5] = Sj));
  } else Sj = cc[5];
  return Sj;
}
function Af() {
  let foe = _(1),
    wj;
  if (foe[0] === MEMO_CACHE_SENTINEL)
    ((wj = e(ToolResultRow, {
      height: 1,
      children: e(t, { dimColor: !0, children: "Tool use rejected" }),
    })),
      (foe[0] = wj));
  else wj = foe[0];
  return wj;
}
function Aj(Ooe) {
  return Ooe.agentDefinitions.activeAgents;
}
function ji(Eoe) {
  let Sn = _(23),
    {
      progressMessagesForMessage: SU,
      tool: Bk,
      tools: PU,
      param: $o,
      input: CU,
      verbose: jk,
      isTranscriptMode: wU,
    } = Eoe,
    UU = useAppStateSelectorUnchecked(Aj);
  if (
    typeof $o.content === "string" &&
    ($o.content.includes(gc) || $o.content.includes(_b))
  ) {
    let Dt;
    if (Sn[0] === MEMO_CACHE_SENTINEL) ((Dt = e(bf, {})), (Sn[0] = Dt));
    else Dt = Sn[0];
    return Dt;
  }
  if (typeof $o.content === "string" && $o.content.startsWith(PLAN_REJECTED_MESSAGE)) {
    let Dt;
    if (Sn[1] !== $o.content)
      ((Dt = $o.content.substring(PLAN_REJECTED_MESSAGE.length)),
        (Sn[1] = $o.content),
        (Sn[2] = Dt));
    else Dt = Sn[2];
    let NU = Dt;
    let Ef;
    if (Sn[3] !== NU) ((Ef = e(_a, { plan: NU })), (Sn[3] = NU), (Sn[4] = Ef));
    else Ef = Sn[4];
    return Ef;
  }
  if (typeof $o.content === "string" && $o.content.startsWith(USER_REJECTED_TOOL_USE_PREFIX)) {
    let Dt;
    if (Sn[5] === MEMO_CACHE_SENTINEL) ((Dt = e(Af, {})), (Sn[5] = Dt));
    else Dt = Sn[5];
    return Dt;
  }
  if (typeof $o.content === "string" && isAutoModeClassifierDenial($o.content)) {
    let Dt;
    if (Sn[6] === MEMO_CACHE_SENTINEL)
      ((Dt = e(ct, {
        url: "https://code.claude.com/docs/s/claude-code-auto-mode",
      })),
        (Sn[6] = Dt));
    else Dt = Sn[6];
    let Loe = Dt;
    let Ef;
    if (Sn[7] !== $o.content)
      ((Ef = getAutoModeClassifierDenialReason(stripAnsi($o.content))), (Sn[7] = $o.content), (Sn[8] = Ef));
    else Ef = Sn[8];
    let Fk = Ef;
    let Uj;
    if (Sn[9] === MEMO_CACHE_SENTINEL)
      ((Uj = r(t, { "aria-hidden": !0, children: [BULLET_OPERATOR_GLYPH, " "] })), (Sn[9] = Uj));
    else Uj = Sn[9];
    let $k;
    if (Sn[10] !== Fk)
      (($k =
        Fk &&
        r(N, {
          children: [Fk, " ", r(t, { "aria-hidden": !0, children: [BULLET_OPERATOR_GLYPH, " "] })],
        })),
        (Sn[10] = Fk),
        (Sn[11] = $k));
    else $k = Sn[11];
    let Nj;
    if (Sn[12] !== $k)
      ((Nj = e(ToolResultRow, {
        children: r(t, {
          dimColor: !0,
          children: [
            "Denied by auto mode classifier",
            " ",
            Uj,
            $k,
            "see ",
            Loe,
          ],
        }),
      })),
        (Sn[12] = $k),
        (Sn[13] = Nj));
    else Nj = Sn[13];
    return Nj;
  }
  let Dt;
  if (
    Sn[14] !== UU ||
    Sn[15] !== CU ||
    Sn[16] !== wU ||
    Sn[17] !== $o.content ||
    Sn[18] !== SU ||
    Sn[19] !== Bk ||
    Sn[20] !== PU ||
    Sn[21] !== jk
  )
    ((Dt =
      (Bk ? hp(Bk, "renderToolUseErrorMessage") : void 0)?.($o.content, {
        progressMessagesForMessage: filterOutHookProgressMessages(SU),
        tools: PU,
        verbose: jk,
        isTranscriptMode: wU,
        input: CU,
        activeAgents: UU,
      }) ?? e(ToolErrorMessage, { result: $o.content, verbose: jk })),
      (Sn[14] = UU),
      (Sn[15] = CU),
      (Sn[16] = wU),
      (Sn[17] = $o.content),
      (Sn[18] = SU),
      (Sn[19] = Bk),
      (Sn[20] = PU),
      (Sn[21] = jk),
      (Sn[22] = Dt));
  else Dt = Sn[22];
  return Dt;
}
function Ej(l) {
  if (isWorkspaceMcpToolName(l)) return getSanitizedToolName(l);
  if (l.startsWith("mcp__")) return "mcp_tool";
  if (l.startsWith("skill__")) return "skill_tool";
  if (l.startsWith("eval_registered__")) return "eval_registered_tool";
  if (l.includes("__")) return "dynamic_tool";
  return getSanitizedToolName(l);
}
function Ml(l, f, g) {
  if (typeof f !== "string" && typeof f !== "number" && typeof f !== "bigint")
    return f;
  if (claimRegistriesByHost.of(l).claim(`primitive_tool_result_reported:${g.name}`)) {
    let T = typeof f;
    queueMicrotask(() => {
      logError(
        dt(
          Error(
            `renderToolResultMessage returned a bare ${T} (tool: ${g.name}) \u2014 wrapped in <Text>`,
          ),
          `renderToolResultMessage returned a bare ${T} (tool: ${Ej(g.name)}) \u2014 wrapped in <Text>`,
        ),
      );
    });
  }
  return e(t, { children: f });
}
function HF(zte) {
  return zte.host;
}
function GF(Kte) {
  return Kte.agentDefinitions.activeAgents;
}
function zF(DF, xre) {
  return r(
    t,
    {
      dimColor: !0,
      children: [
        e(t, { "aria-hidden": !0, children: "     \u23BF " }),
        DF.command,
        " (",
        formatSecondsShort(DF.durationMs ?? 0),
        ")",
      ],
    },
    `hook-${xre}`,
  );
}
function KF(bN) {
  return r(
    o,
    {
      flexDirection: "column",
      marginTop: 1,
      children: [
        r(t, {
          dimColor: !0,
          children: [
            e(t, { "aria-hidden": !0, children: "  \u23BF  " }),
            "Recalled ",
            CN(bN.path),
          ],
        }),
        e(o, {
          paddingLeft: 5,
          children: e(t, { children: e(jr, { children: bN.content }) }),
        }),
      ],
    },
    bN.path,
  );
}
function YF(_re) {
  return _re.sha;
}
function VF(Sre) {
  return Sre.branch;
}
function XF(Pre) {
  return Pre.replace(/^claude\.ai /, "");
}
function QF(Nre) {
  return Nre.viewingAgentTaskId;
}
var wN = 700,
  UN = 3000,
  AN = 10,
  qF = 200;
function EN(l) {
  let f = l === void 0 ? "" : normalizeWhitespace(stripAnsi(l));
  return f === "" ? void 0 : truncateToWidth(f, qF);
}
function Ob(Wk) {
  let pc = _(28),
    { content: oo, inProgressToolUseIDs: AU, lookups: dc } = Wk,
    Lj;
  if (pc[0] !== oo.id || pc[1] !== AU)
    ((Lj = AU.has(oo.id)), (pc[0] = oo.id), (pc[1] = AU), (pc[2] = Lj));
  else Lj = pc[2];
  let fc = Lj,
    Oj;
  if (pc[3] !== oo.id || pc[4] !== dc.erroredToolUseIDs)
    ((Oj = dc.erroredToolUseIDs.has(oo.id)),
      (pc[3] = oo.id),
      (pc[4] = dc.erroredToolUseIDs),
      (pc[5] = Oj));
  else Oj = pc[5];
  let hc = Oj,
    qk,
    vj;
  if (pc[6] !== oo.id || pc[7] !== dc.toolResultByToolUseID)
    ((qk = dc.toolResultByToolUseID.get(oo.id)),
      (vj = renderEngineModule.isInterruptedCall(qk)),
      (pc[6] = oo.id),
      (pc[7] = dc.toolResultByToolUseID),
      (pc[8] = qk),
      (pc[9] = vj));
  else ((qk = pc[8]), (vj = pc[9]));
  let Tc = vj,
    ks = qk?.type === "user" ? qk.toolUseResult : void 0,
    Dj;
  if (
    pc[10] !== oo.id ||
    pc[11] !== oo.input ||
    pc[12] !== oo.name ||
    pc[13] !== hc ||
    pc[14] !== Tc ||
    pc[15] !== ks ||
    pc[16] !== fc
  )
    ((Dj = () => ({
      requestId: oo.id,
      props: {
        tool_use_id: oo.id,
        toolName: oo.name,
        input: oo.input,
        running: fc,
        errored: hc,
        interrupted: Tc,
        output: ks,
      },
    })),
      (pc[10] = oo.id),
      (pc[11] = oo.input),
      (pc[12] = oo.name),
      (pc[13] = hc),
      (pc[14] = Tc),
      (pc[15] = ks),
      (pc[16] = fc),
      (pc[17] = Dj));
  else Dj = pc[17];
  let Bj;
  if (
    pc[18] !== oo ||
    pc[19] !== hc ||
    pc[20] !== Tc ||
    pc[21] !== ks ||
    pc[22] !== fc
  )
    ((Bj = [oo, fc, hc, Tc, ks]),
      (pc[18] = oo),
      (pc[19] = hc),
      (pc[20] = Tc),
      (pc[21] = ks),
      (pc[22] = fc),
      (pc[23] = Bj));
  else Bj = pc[23];
  let qte = La.useRenderInput("ToolUse", Dj, Bj),
    jj;
  if (pc[24] !== oo || pc[25] !== ks || pc[26] !== Wk)
    ((jj = (yc) =>
      e(vb, {
        ...Wk,
        content:
          yc.props.input === oo.input ? oo : { ...oo, input: yc.props.input },
        toolLabel: yc.props.toolName === oo.name ? void 0 : yc.props.toolName,
        outputOverride:
          yc.props.output === ks ? void 0 : { value: yc.props.output },
      })),
      (pc[24] = oo),
      (pc[25] = ks),
      (pc[26] = Wk),
      (pc[27] = jj));
  else jj = pc[27];
  return La.useRenderHook(qte, jj);
}
function vb(Hte) {
  let bl = _(52),
    {
      content: He,
      tools: kl,
      lookups: $r,
      inProgressToolUseIDs: Lf,
      shouldAnimate: EU,
      theme: Hk,
      outputOverride: Gk,
      toolLabel: LU,
    } = Hte,
    OU = useSession(HF),
    Of = useAppStateSelectorUnchecked(GF),
    zk,
    xl,
    _l,
    vf,
    Rc,
    Kk,
    Yk,
    Vk,
    Xk,
    Qk,
    Jk,
    jt;
  if (
    bl[0] !== Of ||
    bl[1] !== He.id ||
    bl[2] !== He.input ||
    bl[3] !== He.name ||
    bl[4] !== OU ||
    bl[5] !== Lf ||
    bl[6] !== $r ||
    bl[7] !== Gk ||
    bl[8] !== EU ||
    bl[9] !== Hk ||
    bl[10] !== LU ||
    bl[11] !== kl
  ) {
    Jk = EARLY_RETURN_SENTINEL;
    bb0: {
      jt = resolveToolByName(kl, He.name);
      if (!jt || jt.isTransparentWrapper?.()) {
        Jk = null;
        break bb0;
      }
      let Sl;
      if (bl[24] !== He.id || bl[25] !== $r.resolvedToolUseIDs)
        ((Sl = $r.resolvedToolUseIDs.has(He.id)),
          (bl[24] = He.id),
          (bl[25] = $r.resolvedToolUseIDs),
          (bl[26] = Sl));
      else Sl = bl[26];
      _l = Sl;
      let If;
      if (bl[27] !== He.id || bl[28] !== $r.erroredToolUseIDs)
        ((If = $r.erroredToolUseIDs.has(He.id)),
          (bl[27] = He.id),
          (bl[28] = $r.erroredToolUseIDs),
          (bl[29] = If));
      else If = bl[29];
      xl = If;
      let Fj;
      if (bl[30] !== He.id || bl[31] !== Lf)
        ((Fj = Lf.has(He.id)), (bl[30] = He.id), (bl[31] = Lf), (bl[32] = Fj));
      else Fj = bl[32];
      let Gte = Fj;
      Rc = $r.toolResultByToolUseID.get(He.id);
      let $j =
        Gk !== void 0
          ? Gk.value
          : Rc?.type === "user"
            ? Rc.toolUseResult
            : void 0;
      let Wj = jt.outputSchema?.safeParse($j);
      let Hj = Wj?.success ? Wj.data : void 0;
      let Gj = parseToolInput(jt, He.input);
      let Mc = Gj.success ? Gj.data : void 0;
      let zj = getToolCallRemoteHost(jt, Mc);
      let Kj = LU ?? jt.userFacingName(Mc, { activeAgents: Of });
      let Yj;
      if (bl[33] !== He.input)
        ((Yj = oL(He.input)), (bl[33] = He.input), (bl[34] = Yj));
      else Yj = bl[34];
      let Vj = Yj;
      let Xj =
        Vj !== null
          ? Vj
          : Mc
            ? renderToolUseMessageForTool(jt, Mc, {
                theme: Hk,
                verbose: !0,
                isTranscriptMode: !0,
                activeAgents: Of,
              })
            : null;
      vf = $r.progressMessagesByToolUseID.get(He.id) ?? [];
      let vU =
        _l && !xl && Hj !== void 0
          ? hp(jt, "renderToolResultMessage")?.(Hj, filterOutHookProgressMessages(vf), {
              verbose: !0,
              tools: kl,
              theme: Hk,
              isTranscriptMode: !0,
              input: He.input,
              activeAgents: Of,
            })
          : void 0;
      let Qj = Kj !== "";
      if (!Qj && vU == null && !(_l && xl)) {
        Jk = null;
        break bb0;
      }
      zk = o;
      Kk = He.id;
      Yk = "column";
      Vk = 1;
      Xk =
        Qj &&
        r(o, {
          flexDirection: "row",
          children: [
            e(Ho, { shouldAnimate: EU && Gte, isUnresolved: !_l, isError: xl }),
            r(t, {
              children: [
                e(t, { bold: !0, children: Kj }),
                Xj && r(t, { children: ["(", Xj, ")"] }),
                zj !== void 0 &&
                  r(t, { dimColor: !0, children: [" \xB7 on ", zj] }),
              ],
            }),
            Mc &&
              hp(jt, "renderToolUseTag")?.(Mc, {
                toolUseId: He.id,
                toolUseResult: $j,
                progressMessages: $r.progressMessagesByToolUseID.get(He.id),
              }),
          ],
        });
      Qk = vU != null && e(o, { children: Ml(OU, vU, jt) });
    }
    ((bl[0] = Of),
      (bl[1] = He.id),
      (bl[2] = He.input),
      (bl[3] = He.name),
      (bl[4] = OU),
      (bl[5] = Lf),
      (bl[6] = $r),
      (bl[7] = Gk),
      (bl[8] = EU),
      (bl[9] = Hk),
      (bl[10] = LU),
      (bl[11] = kl),
      (bl[12] = zk),
      (bl[13] = xl),
      (bl[14] = _l),
      (bl[15] = vf),
      (bl[16] = Rc),
      (bl[17] = Kk),
      (bl[18] = Yk),
      (bl[19] = Vk),
      (bl[20] = Xk),
      (bl[21] = Qk),
      (bl[22] = Jk),
      (bl[23] = jt));
  } else
    ((zk = bl[12]),
      (xl = bl[13]),
      (_l = bl[14]),
      (vf = bl[15]),
      (Rc = bl[16]),
      (Kk = bl[17]),
      (Yk = bl[18]),
      (Vk = bl[19]),
      (Xk = bl[20]),
      (Qk = bl[21]),
      (Jk = bl[22]),
      (jt = bl[23]));
  if (Jk !== EARLY_RETURN_SENTINEL) return Jk;
  let Sl;
  if (
    bl[35] !== He.id ||
    bl[36] !== He.input ||
    bl[37] !== xl ||
    bl[38] !== _l ||
    bl[39] !== vf ||
    bl[40] !== Rc ||
    bl[41] !== jt ||
    bl[42] !== kl
  )
    ((Sl =
      _l &&
      xl &&
      e(Ib, {
        toolUseID: He.id,
        input: He.input,
        resultMsg: Rc,
        tool: jt,
        tools: kl,
        progressMessagesForMessage: vf,
      })),
      (bl[35] = He.id),
      (bl[36] = He.input),
      (bl[37] = xl),
      (bl[38] = _l),
      (bl[39] = vf),
      (bl[40] = Rc),
      (bl[41] = jt),
      (bl[42] = kl),
      (bl[43] = Sl));
  else Sl = bl[43];
  let If;
  if (
    bl[44] !== zk ||
    bl[45] !== Kk ||
    bl[46] !== Yk ||
    bl[47] !== Vk ||
    bl[48] !== Xk ||
    bl[49] !== Qk ||
    bl[50] !== Sl
  )
    ((If = r(
      zk,
      { flexDirection: Yk, marginTop: Vk, children: [Xk, Qk, Sl] },
      Kk,
    )),
      (bl[44] = zk),
      (bl[45] = Kk),
      (bl[46] = Yk),
      (bl[47] = Vk),
      (bl[48] = Xk),
      (bl[49] = Qk),
      (bl[50] = Sl),
      (bl[51] = If));
  else If = bl[51];
  return If;
}
function Ib(Yte) {
  let Pl = _(25),
    {
      toolUseID: Df,
      input: kc,
      resultMsg: Zk,
      tool: Cn,
      tools: bc,
      progressMessagesForMessage: xc,
    } = Yte,
    { columns: IU } = useTerminalSize(),
    [DU] = useTheme();
  if (Zk?.type !== "user") {
    return null;
  }
  const Vte = Zk.message.content;
  let Tr, Jj, eb;
  if (Pl[0] !== Zk.message.content || Pl[1] !== Cn || Pl[2] !== Df) {
    eb = EARLY_RETURN_SENTINEL;
    bb0: {
      let Fi;
      if (Pl[6] !== Df)
        ((Fi = (Zj) => Zj.type === "tool_result" && Zj.tool_use_id === Df),
          (Pl[6] = Df),
          (Pl[7] = Fi));
      else Fi = Pl[7];
      Tr = Vte.find(Fi);
      if (Tr?.type !== "tool_result") {
        eb = null;
        break bb0;
      }
      if (typeof Tr.content === "string" && JZe(Tr.content)) {
        let Cl;
        if (Pl[8] === MEMO_CACHE_SENTINEL) ((Cl = e(bf, {})), (Pl[8] = Cl));
        else Cl = Pl[8];
        eb = Cl;
        break bb0;
      }
      Jj =
        (typeof Tr.content === "string" &&
          (Tr.content.startsWith(USER_REJECTED_TOOL_USE_MESSAGE) ||
            (Tr.content.startsWith(USER_REJECTED_TOOL_USE_PREFIX) &&
              hp(Cn, "renderToolUseRejectedMessage") !== void 0))) ||
        Tr.content === gc ||
        Tr.content === _b;
    }
    ((Pl[0] = Zk.message.content),
      (Pl[1] = Cn),
      (Pl[2] = Df),
      (Pl[3] = Tr),
      (Pl[4] = Jj),
      (Pl[5] = eb));
  } else ((Tr = Pl[3]), (Jj = Pl[4]), (eb = Pl[5]));
  if (eb !== EARLY_RETURN_SENTINEL) return eb;
  if (Jj) {
    let Fi, Cl;
    if (
      Pl[9] !== IU ||
      Pl[10] !== kc ||
      Pl[11] !== xc ||
      Pl[12] !== DU ||
      Pl[13] !== Cn ||
      Pl[14] !== bc
    ) {
      Cl = EARLY_RETURN_SENTINEL;
      bb1: {
        let eF = hp(Cn, "renderToolUseRejectedMessage");
        if (!eF) {
          let Bf;
          if (Pl[17] === MEMO_CACHE_SENTINEL) ((Bf = e(bf, {})), (Pl[17] = Bf));
          else Bf = Pl[17];
          Cl = Bf;
          break bb1;
        }
        let oF = parseToolInput(Cn, kc);
        if (!oF.success) {
          let Bf;
          if (Pl[18] === MEMO_CACHE_SENTINEL) ((Bf = e(bf, {})), (Pl[18] = Bf));
          else Bf = Pl[18];
          Cl = Bf;
          break bb1;
        }
        Fi =
          eF(oF.data, {
            columns: IU,
            messages: [],
            tools: bc,
            verbose: !0,
            progressMessagesForMessage: filterOutHookProgressMessages(xc),
            theme: DU,
            isTranscriptMode: !0,
          }) ?? e(bf, {});
      }
      ((Pl[9] = IU),
        (Pl[10] = kc),
        (Pl[11] = xc),
        (Pl[12] = DU),
        (Pl[13] = Cn),
        (Pl[14] = bc),
        (Pl[15] = Fi),
        (Pl[16] = Cl));
    } else ((Fi = Pl[15]), (Cl = Pl[16]));
    if (Cl !== EARLY_RETURN_SENTINEL) return Cl;
    return Fi;
  }
  let Fi;
  if (
    Pl[19] !== Tr ||
    Pl[20] !== kc ||
    Pl[21] !== xc ||
    Pl[22] !== Cn ||
    Pl[23] !== bc
  )
    ((Fi = e(ji, {
      param: Tr,
      tool: Cn,
      tools: bc,
      input: kc,
      verbose: !0,
      progressMessagesForMessage: xc,
      isTranscriptMode: !0,
    })),
      (Pl[19] = Tr),
      (Pl[20] = kc),
      (Pl[21] = xc),
      (Pl[22] = Cn),
      (Pl[23] = bc),
      (Pl[24] = Fi));
  else Fi = Pl[24];
  return Fi;
}
var LN = "\x00",
  ON = "\x01";
function Yf(ob) {
  let wl = _(25),
    {
      message: wn,
      inProgressToolUseIDs: $i,
      lookups: Un,
      verbose: tb,
      isActiveGroup: rb,
    } = ob,
    tF;
  if (wl[0] !== $i || wl[1] !== Un || wl[2] !== wn) {
    let jf;
    if (wl[4] !== $i || wl[5] !== Un)
      ((jf = (nb) =>
        [
          nb.id,
          Un.toolResultByToolUseID.get(nb.id)?.uuid ?? "",
          $i.has(nb.id) ? "running" : "",
          Un.erroredToolUseIDs.has(nb.id) ? "errored" : "",
        ].join(LN)),
        (wl[4] = $i),
        (wl[5] = Un),
        (wl[6] = jf));
    else jf = wl[6];
    tF = Kf(wn).map(jf).join(ON);
    ((wl[0] = $i), (wl[1] = Un), (wl[2] = wn), (wl[3] = tF));
  } else tF = wl[3];
  let Ul = tF,
    jf;
  if (wl[7] !== $i || wl[8] !== Un || wl[9] !== wn)
    ((jf = (Xte) => ({
      key: Xte,
      calls: Kf(wn).map((_c) => {
        let BU = Un.toolResultByToolUseID.get(_c.id);
        return {
          tool_use_id: _c.id,
          toolName: _c.name,
          input: _c.input,
          running: $i.has(_c.id),
          errored: Un.erroredToolUseIDs.has(_c.id),
          interrupted: renderEngineModule.isInterruptedCall(BU),
          output: BU?.type === "user" ? BU.toolUseResult : void 0,
        };
      }),
    })),
      (wl[7] = $i),
      (wl[8] = Un),
      (wl[9] = wn),
      (wl[10] = jf));
  else jf = wl[10];
  let Sc = jf,
    rF;
  if (wl[11] !== Ul || wl[12] !== Sc)
    ((rF = () => Sc(Ul)), (wl[11] = Ul), (wl[12] = Sc), (wl[13] = rF));
  else rF = wl[13];
  let [sF, Qte] = d(rF),
    sb = sF;
  if (sF.key !== Ul) {
    if (wl[14] !== Ul || wl[15] !== Sc)
      ((sb = Sc(Ul)), Qte(sb), (wl[14] = Ul), (wl[15] = Sc), (wl[16] = sb));
    else sb = wl[16];
  }
  let { calls: ib } = sb,
    iF,
    aF;
  if (wl[17] !== ib || wl[18] !== rb || wl[19] !== wn.uuid || wl[20] !== tb)
    ((iF = () => ({
      requestId: wn.uuid,
      props: { calls: ib, active: rb === !0, expanded: tb },
    })),
      (aF = [wn.uuid, ib, rb, tb]),
      (wl[17] = ib),
      (wl[18] = rb),
      (wl[19] = wn.uuid),
      (wl[20] = tb),
      (wl[21] = iF),
      (wl[22] = aF));
  else ((iF = wl[21]), (aF = wl[22]));
  let Jte = La.useRenderInput("ToolGroup", iF, aF),
    lF;
  if (wl[23] !== ob)
    ((lF = (Zte) => e(Db, { ...ob, verbose: Zte.props.expanded })),
      (wl[23] = ob),
      (wl[24] = lF));
  else lF = wl[24];
  return La.useRenderHook(Jte, lF);
}
function Kf(l) {
  let f = [];
  for (let g of l.messages) {
    let T =
      g.type === "assistant"
        ? [g]
        : g.type === "grouped_tool_use"
          ? g.messages
          : [];
    for (let y of T) {
      let R = y.message.content[0];
      if (R?.type === "tool_use") f.push(R);
    }
  }
  return f;
}
function Db(ere) {
  let Fe = _(148),
    {
      message: se,
      inProgressToolUseIDs: Pc,
      shouldAnimate: Cc,
      verbose: wc,
      tools: jU,
      lookups: $t,
      isActiveGroup: Ne,
      addMargin: uF,
    } = ere,
    ore = uF === void 0 ? !0 : uF,
    Wr = gi(),
    {
      searchCount: tre,
      readCount: rre,
      listCount: nre,
      replCount: Uc,
      memorySearchCount: ab,
      memoryReadCount: Nc,
      memoryWriteCount: Ec,
      messages: Wt,
    } = se,
    [FU] = useTheme(),
    { columns: $U } = useTerminalSize(),
    lb = collectToolUseIds(se),
    mF;
  if (Fe[0] !== $t)
    ((mF = (sre) => $t.erroredToolUseIDs.has(sre)), (Fe[0] = $t), (Fe[1] = mF));
  else mF = Fe[1];
  let WU = lb.some(mF),
    dF;
  if (Fe[2] !== $t)
    ((dF = (ire) => renderEngineModule.isInterruptedCall($t.toolResultByToolUseID.get(ire))),
      (Fe[2] = $t),
      (Fe[3] = dF));
  else dF = Fe[3];
  let qU = lb.some(dF),
    are = ab > 0 || Nc > 0 || Ec > 0,
    lre = Dk(se);
  const HU = rre ?? 0,
    GU = tre ?? 0,
    zU = nre ?? 0,
    KU = se.mcpCallCount ?? 0,
    YU = se.bashCount ?? 0;
  let pF;
  if (
    Fe[4] !== HU ||
    Fe[5] !== GU ||
    Fe[6] !== zU ||
    Fe[7] !== KU ||
    Fe[8] !== YU
  )
    ((pF = { read: HU, search: GU, list: zU, mcp: KU, bash: YU }),
      (Fe[4] = HU),
      (Fe[5] = GU),
      (Fe[6] = zU),
      (Fe[7] = KU),
      (Fe[8] = YU),
      (Fe[9] = pF));
  else pF = Fe[9];
  let Lc = pF,
    [Nn, ure] = d(Lc);
  const VU = Math.max(Nn.read, Lc.read),
    XU = Math.max(Nn.search, Lc.search),
    QU = Math.max(Nn.list, Lc.list),
    JU = Math.max(Nn.mcp, Lc.mcp),
    ZU = Math.max(Nn.bash, Lc.bash);
  let fF;
  if (
    Fe[10] !== VU ||
    Fe[11] !== XU ||
    Fe[12] !== QU ||
    Fe[13] !== JU ||
    Fe[14] !== ZU
  )
    ((fF = { read: VU, search: XU, list: QU, mcp: JU, bash: ZU }),
      (Fe[10] = VU),
      (Fe[11] = XU),
      (Fe[12] = QU),
      (Fe[13] = JU),
      (Fe[14] = ZU),
      (Fe[15] = fF));
  else fF = Fe[15];
  let qr = fF;
  if (
    qr.read !== Nn.read ||
    qr.search !== Nn.search ||
    qr.list !== Nn.list ||
    qr.mcp !== Nn.mcp ||
    qr.bash !== Nn.bash
  )
    ure(qr);
  let Oc = se.otherToolCount ?? 0,
    Al = se.agentCount ?? 0,
    vc = se.editFileCount ?? 0,
    ub = se.frameCount ?? 0,
    eN = se.linesAdded ?? 0,
    oN = se.linesRemoved ?? 0,
    Ic = se.scratchpadWriteCount ?? 0,
    rN = se.scratchpadLinesAdded ?? 0,
    nN = se.scratchpadLinesRemoved ?? 0,
    Dc = se.workshopWriteCount ?? 0,
    sN = se.workshopLinesAdded ?? 0,
    iN = se.workshopLinesRemoved ?? 0,
    { read: Bc, search: jc, list: Fc, mcp: $c } = qr,
    gF = se.gitOpBashCount ?? 0,
    Wc = Wr ? Math.max(0, qr.bash - gF) : 0,
    El = se.thoughtForMs ?? 0,
    mb = El > 0 || se.latestThinkingSummary !== void 0,
    mre =
      jc > 0 ||
      Bc > 0 ||
      Fc > 0 ||
      Uc > 0 ||
      $c > 0 ||
      Wc > 0 ||
      gF > 0 ||
      Oc > 0 ||
      Al > 0 ||
      vc > 0 ||
      Ic > 0 ||
      Dc > 0 ||
      ub > 0 ||
      (se.hookTotalMs ?? 0) > 0 ||
      mb,
    { readFilePaths: aN, searchArgs: lN, latestDisplayHint: Ll } = se;
  if (Ll === void 0) {
    let Ff;
    if (Fe[16] !== lN) ((Ff = lN?.at(-1)), (Fe[16] = lN), (Fe[17] = Ff));
    else Ff = Fe[17];
    let hF = Ff;
    let uN = hF !== void 0 ? `"${hF}"` : void 0;
    let Ge;
    if (Fe[18] !== uN || Fe[19] !== aN) {
      let TF = aN?.at(-1);
      Ge = TF !== void 0 ? Ao(TF) : uN;
      ((Fe[18] = uN), (Fe[19] = aN), (Fe[20] = Ge));
    } else Ge = Fe[20];
    Ll = Ge;
  }
  if (Ne) {
    for (const yF of lb) {
      if (!Pc.has(yF)) {
        continue;
      }
      let Ol = $t.progressMessagesByToolUseID.get(yF)?.at(-1)?.data;
      if (
        Ol?.type === "repl_tool_call" &&
        (Ol.phase === "start" || Ol.phase === "executing")
      ) {
        let cb = sanitizeToolInput(Ol.toolInput);
        Ll =
          EN(
            cb.file_path ??
              (cb.pattern ? `"${cb.pattern}"` : void 0) ??
              cb.command,
          ) ?? Ol.toolName;
      } else if (Ol?.type === "mcp_progress") {
        let { progress: db, total: mN, progressMessage: cre } = Ol;
        let pb = rg(cre);
        if (db !== void 0 && mN !== void 0 && mN > 0) {
          let RF = Math.round(Math.min(1, Math.max(0, db / mN)) * 100);
          Ll = pb ? `${pb} (${RF}%)` : `${RF}%`;
        } else if (pb) Ll = pb;
        else if (db !== void 0) Ll = `Processing\u2026 ${db}`;
      }
    }
  }
  let dre = vk(Ll, wN),
    vl = Ne && se.isLiveBriefTurn === !0,
    MF = Lk(Ne && !vl ? se.latestThinkingSummary : void 0, UN),
    fb = Ne && MF !== void 0,
    $f = fb ? MF : dre,
    cN = Date.parse(se.timestamp),
    Ff;
  if (Fe[21] !== cN || Fe[22] !== Ne)
    ((Ff = (gb) =>
      Ne &&
      !gb.viewingAgentTaskId &&
      gb.taskSummary !== null &&
      !(gb.taskSummary.at < cN)
        ? gb.taskSummary.text
        : null),
      (Fe[21] = cN),
      (Fe[22] = Ne),
      (Fe[23] = Ff));
  else Ff = Fe[23];
  let An = useAppStateSelectorUnchecked(Ff);
  if (wc) {
    let Hc;
    if (Fe[24] !== Wt) {
      Hc = [];
      for (const hb of Wt) {
        if (hb.type === "assistant") Hc.push(hb);
        else if (hb.type === "grouped_tool_use") Hc.push(...hb.messages);
      }
      ((Fe[24] = Wt), (Fe[25] = Hc));
    } else Hc = Fe[25];
    let Ge;
    if (Fe[26] !== Wt || Fe[27] !== wc) {
      let Mo;
      if (Fe[29] !== wc)
        ((Mo = (dN) => {
          let pN = dN.type === "user" ? dN.message.content[0] : null;
          if (pN?.type !== "text" || !pN.text.includes(`<${TASK_NOTIFICATION_TAG}`)) {
            return null;
          }
          return e(
            o,
            {
              marginTop: 1,
              children: e(Ai, {
                addMargin: !1,
                param: { type: "text", text: pN.text },
                verbose: wc,
              }),
            },
            dN.uuid,
          );
        }),
          (Fe[29] = wc),
          (Fe[30] = Mo));
      else Mo = Fe[30];
      Ge = Wt.map(Mo);
      ((Fe[26] = Wt), (Fe[27] = wc), (Fe[28] = Ge));
    } else Ge = Fe[28];
    let Mo;
    if (
      Fe[31] !== Pc ||
      Fe[32] !== $t ||
      Fe[33] !== Cc ||
      Fe[34] !== FU ||
      Fe[35] !== Hc ||
      Fe[36] !== jU
    )
      ((Mo = Hc.map((kF) => {
        let zc = kF.message.content[0];
        if (zc?.type === "thinking" && zc.thinking) {
          return e(
            o,
            {
              marginTop: 1,
              children: e(ai, {
                param: zc,
                addMargin: !1,
                isTranscriptMode: !0,
                verbose: !0,
              }),
            },
            kF.uuid,
          );
        }
        if (zc?.type !== "tool_use") {
          return null;
        }
        return e(
          Ob,
          {
            content: zc,
            tools: jU,
            lookups: $t,
            inProgressToolUseIDs: Pc,
            shouldAnimate: Cc,
            theme: FU,
          },
          zc.id,
        );
      })),
        (Fe[31] = Pc),
        (Fe[32] = $t),
        (Fe[33] = Cc),
        (Fe[34] = FU),
        (Fe[35] = Hc),
        (Fe[36] = jU),
        (Fe[37] = Mo));
    else Mo = Fe[37];
    let Hr;
    if (
      Fe[38] !== se.hookCount ||
      Fe[39] !== se.hookInfos ||
      Fe[40] !== se.hookTotalMs
    )
      ((Hr =
        se.hookInfos &&
        se.hookInfos.length > 0 &&
        r(N, {
          children: [
            r(t, {
              dimColor: !0,
              children: [
                e(t, { "aria-hidden": !0, children: "  \u23BF  " }),
                "Ran ",
                se.hookCount,
                " ",
                "PreToolUse ",
                se.hookCount === 1 ? "hook" : "hooks",
                " (",
                formatSecondsShort(se.hookTotalMs ?? 0),
                ")",
              ],
            }),
            se.hookInfos.map(zF),
          ],
        })),
        (Fe[38] = se.hookCount),
        (Fe[39] = se.hookInfos),
        (Fe[40] = se.hookTotalMs),
        (Fe[41] = Hr));
    else Hr = Fe[41];
    let Ss;
    if (Fe[42] !== se.relevantMemories)
      ((Ss = se.relevantMemories?.map(KF)),
        (Fe[42] = se.relevantMemories),
        (Fe[43] = Ss));
    else Ss = Fe[43];
    let Il;
    if (Fe[44] !== Ge || Fe[45] !== Mo || Fe[46] !== Hr || Fe[47] !== Ss)
      ((Il = r(o, { flexDirection: "column", children: [Ge, Mo, Hr, Ss] })),
        (Fe[44] = Ge),
        (Fe[45] = Mo),
        (Fe[46] = Hr),
        (Fe[47] = Ss),
        (Fe[48] = Il));
    else Il = Fe[48];
    return Il;
  }
  if (!are && !lre && !mre) {
    return null;
  }
  let Tb = "";
  if (Wr && Ne) {
    let Kc;
    let yb = 0;
    for (const bF of lb) {
      if (!Pc.has(bF)) {
        continue;
      }
      let qf = $t.progressMessagesByToolUseID.get(bF)?.at(-1)?.data;
      if (qf?.type !== "bash_progress" && qf?.type !== "powershell_progress") {
        continue;
      }
      if (Kc === void 0 || qf.elapsedTimeSeconds > Kc)
        ((Kc = qf.elapsedTimeSeconds), (yb = qf.totalLines));
    }
    if (Kc !== void 0 && Kc >= 2) {
      const Ge = Kc * 1000;
      let Mo;
      if (Fe[49] !== Ge) ((Mo = formatDuration(Ge)), (Fe[49] = Ge), (Fe[50] = Mo));
      else Mo = Fe[50];
      let xF = Mo;
      Tb =
        yb > 0
          ? ` (${xF} \xB7 ${yb} ${yb === 1 ? "line" : "lines"})`
          : ` (${xF})`;
    }
  }
  let Yc = 0;
  if (Ne && Wr) {
    for (let fN = Wt.length - 1; fN >= 0 && !Yc; fN--) {
      let Rb = Wt[fN];
      let pre =
        Rb.type === "grouped_tool_use"
          ? Rb.messages
          : Rb.type === "assistant"
            ? [Rb]
            : [];
      for (const _F of pre) {
        if (
          _F.message.content.some(
            (SF) => SF.type === "tool_use" && Pc.has(SF.id),
          )
        ) {
          let PF = Date.parse(_F.timestamp);
          if (Number.isFinite(PF)) Yc = PF;
          break;
        }
      }
    }
  }
  let Hf, Tt;
  if (
    Fe[51] !== Al ||
    Fe[52] !== Wc ||
    Fe[53] !== vc ||
    Fe[54] !== ub ||
    Fe[55] !== Wr ||
    Fe[56] !== Wt ||
    Fe[57] !== mb ||
    Fe[58] !== Ne ||
    Fe[59] !== vl ||
    Fe[60] !== eN ||
    Fe[61] !== oN ||
    Fe[62] !== Fc ||
    Fe[63] !== $c ||
    Fe[64] !== Nc ||
    Fe[65] !== ab ||
    Fe[66] !== Ec ||
    Fe[67] !== se ||
    Fe[68] !== Oc ||
    Fe[69] !== Bc ||
    Fe[70] !== Uc ||
    Fe[71] !== rN ||
    Fe[72] !== nN ||
    Fe[73] !== Ic ||
    Fe[74] !== jc ||
    Fe[75] !== El ||
    Fe[76] !== sN ||
    Fe[77] !== iN ||
    Fe[78] !== Dc
  ) {
    Tt = [];
    let bo = function bo(CF, gN, wF) {
      let UF = Tt.length === 0;
      if (!UF) Tt.push(e(t, { children: ", " }, `comma-${CF}`));
      Tt.push(
        r(
          t,
          {
            children: [
              UF ? gN[0].toUpperCase() + gN.slice(1) : gN,
              wF != null && r(N, { children: [" ", wF] }),
            ],
          },
          CF,
        ),
      );
    };
    if (mb) {
      let hN = Ne ? "Thinking" : "Thought";
      let Gf;
      if (Ne && Wr && !vl) {
        let zf = 0;
        if (Fe[81] !== Wt) {
          for (let TN = Wt.length - 1; TN >= 0; TN--) {
            let yN = Wt[TN];
            if (
              yN?.type === "assistant" &&
              yN.message.content[0]?.type === "thinking"
            ) {
              let NF = Date.parse(yN.timestamp);
              if (Number.isFinite(NF)) zf = NF;
              break;
            }
          }
          ((Fe[81] = Wt), (Fe[82] = zf));
        } else zf = Fe[82];
        let Ge;
        if (Fe[83] !== zf || Fe[84] !== El)
          ((Ge = e(jb, { baseMs: El, lastThinkingAtMs: zf })),
            (Fe[83] = zf),
            (Fe[84] = El),
            (Fe[85] = Ge));
        else Ge = Fe[85];
        Gf = Ge;
      } else {
        const Ge = Math.max(1000, El);
        let Mo;
        if (Fe[86] !== Ge) ((Mo = formatDuration(Ge)), (Fe[86] = Ge), (Fe[87] = Mo));
        else Mo = Fe[87];
        let Hr;
        if (Fe[88] !== Mo)
          ((Hr = e(t, { bold: !0, children: Mo })),
            (Fe[88] = Mo),
            (Fe[89] = Hr));
        else Hr = Fe[89];
        Gf = Hr;
      }
      let Ge;
      if (Fe[90] !== Gf || Fe[91] !== hN)
        ((Ge = r(t, { children: [hN, " for ", Gf] }, "thought")),
          (Fe[90] = Gf),
          (Fe[91] = hN),
          (Fe[92] = Ge));
      else Ge = Fe[92];
      Tt.push(Ge);
    }
    if (vc > 0)
      bo(
        "edit",
        Ne ? "editing" : "edited",
        r(t, {
          children: [
            e(t, { bold: !0, children: vc }),
            " ",
            vc === 1 ? "file" : "files",
            " ",
            e(DiffStatLabel, { added: eN, removed: oN }),
          ],
        }),
      );
    if (Ic > 0)
      bo(
        "scratchpad",
        Ne ? "making" : "made",
        r(t, {
          children: [
            e(t, { bold: !0, children: Ic }),
            " scratchpad",
            " ",
            Ic === 1 ? "edit" : "edits",
            " ",
            e(DiffStatLabel, { added: rN, removed: nN }),
          ],
        }),
      );
    if (Dc > 0)
      bo(
        "workshop",
        Ne ? "making" : "made",
        r(t, {
          children: [
            e(t, { bold: !0, children: Dc }),
            " page",
            " ",
            Dc === 1 ? "edit" : "edits",
            " ",
            e(DiffStatLabel, { added: sN, removed: iN }),
          ],
        }),
      );
    if (Wr && se.commits?.length) {
      let fre = {
        committed: "committed",
        amended: "amended commit",
        "cherry-picked": "cherry-picked",
      };
      for (const RN of ["committed", "amended", "cherry-picked"]) {
        let AF = se.commits.filter((gre) => gre.kind === RN).map(YF);
        if (AF.length)
          bo(RN, fre[RN], e(t, { bold: !0, children: AF.join(", ") }));
      }
    }
    if (Wr && se.pushes?.length) {
      let hre = dedupe(se.pushes.map(VF));
      bo("push", "pushed to", e(t, { bold: !0, children: hre.join(", ") }));
    }
    if (Wr && se.branches?.length) {
      let Tre = { merged: "merged", rebased: "rebased onto" };
      for (const Mb of se.branches)
        bo(
          `br-${Mb.action}-${Mb.ref}`,
          Tre[Mb.action],
          e(t, { bold: !0, children: Mb.ref }),
        );
    }
    if (Wr && se.prs?.length) {
      let yre = {
        created: "created",
        edited: "edited",
        merged: "merged",
        commented: "commented on",
        closed: "closed",
        reopened: "reopened",
        ready: "marked ready",
        draft: "marked draft",
        "auto-merge-enabled": "enabled auto-merge on",
        "auto-merge-disabled": "disabled auto-merge on",
      };
      for (const Gr of se.prs)
        bo(
          `pr-${Gr.action}-${Gr.number}`,
          yre[Gr.action],
          Gr.url && isValidPrUrl(Gr.url)
            ? e(PullRequestBadge, {
                number: Gr.number,
                url: Gr.url,
                bold: !0,
                kind: isGitLabMergeRequestUrl(Gr.url) ? "mr" : void 0,
              })
            : r(t, {
                bold: !0,
                children: [Gr.url && isGitLabMergeRequestUrl(Gr.url) ? "MR !" : "PR #", Gr.number],
              }),
        );
    }
    if (ub > 0) bo("frame", Ne ? "publishing" : "published", null);
    if (jc > 0)
      bo(
        "search",
        Ne ? "searching for" : "searched for",
        r(t, {
          children: [
            e(t, { bold: !0, children: jc }),
            " ",
            jc === 1 ? "pattern" : "patterns",
          ],
        }),
      );
    if (Bc > 0)
      bo(
        "read",
        Ne ? "reading" : "read",
        r(t, {
          children: [
            e(t, { bold: !0, children: Bc }),
            " ",
            Bc === 1 ? "file" : "files",
          ],
        }),
      );
    if (Fc > 0)
      bo(
        "list",
        Ne ? "listing" : "listed",
        r(t, {
          children: [
            e(t, { bold: !0, children: Fc }),
            " ",
            Fc === 1 ? "directory" : "directories",
          ],
        }),
      );
    if (Uc > 0)
      bo(
        "repl",
        Ne ? "REPL'ing" : "REPL'd",
        r(t, {
          children: [
            e(t, { bold: !0, children: Uc }),
            " ",
            Uc === 1 ? "time" : "times",
          ],
        }),
      );
    if ($c > 0) {
      let Rre = se.mcpServerNames?.map(XF).join(", ") || "MCP";
      bo(
        "mcp",
        Ne ? "calling" : "called",
        r(t, {
          children: [
            Rre,
            $c > 1 &&
              r(t, {
                children: [" ", e(t, { bold: !0, children: $c }), " times"],
              }),
          ],
        }),
      );
    }
    if (Al > 0) {
      let Mre = IN(se.messages);
      let kb = Al === 1 && !Mre ? se.agentDescriptions?.[0] : void 0;
      let kN = kb !== void 0 ? conjugateVerbPhrase(kb) : void 0;
      let EF = Ne ? "running" : "ran";
      if (kN !== void 0) {
        let LF = Tt.length === 0;
        if (!LF) {
          let Ge;
          if (Fe[93] === MEMO_CACHE_SENTINEL)
            ((Ge = e(t, { children: ", " }, "comma-agent")), (Fe[93] = Ge));
          else Ge = Fe[93];
          Tt.push(Ge);
        }
        const Ge = e(t, {
          bold: !0,
          children: Mm(Ne ? kN.running : kN.done, LF),
        });
        let Mo;
        if (Fe[94] !== Ge)
          ((Mo = e(t, { children: Ge }, "agent")),
            (Fe[94] = Ge),
            (Fe[95] = Mo));
        else Mo = Fe[95];
        Tt.push(Mo);
      } else if (kb !== void 0)
        bo(
          "agent",
          EF,
          r(t, { children: ["agent \xB7 ", e(t, { bold: !0, children: kb })] }),
        );
      else
        bo(
          "agent",
          EF,
          r(t, {
            children: [
              e(t, { bold: !0, children: Al }),
              " ",
              Al === 1 ? "agent" : "agents",
            ],
          }),
        );
    }
    if (Oc > 0)
      bo(
        "other",
        Ne ? "calling" : "called",
        r(t, {
          children: [
            e(t, { bold: !0, children: Oc }),
            " ",
            Oc === 1 ? "tool" : "tools",
          ],
        }),
      );
    if (Wr && Wc > 0)
      bo(
        "bash",
        Ne ? "running" : "ran",
        r(t, {
          children: [
            e(t, { bold: !0, children: Wc }),
            " shell",
            " ",
            Wc === 1 ? "command" : "commands",
          ],
        }),
      );
    if (Nc > 0)
      bo(
        "mem-read",
        Ne ? "recalling" : "recalled",
        r(t, {
          children: [
            e(t, { bold: !0, children: Nc }),
            " ",
            Nc === 1 ? "memory" : "memories",
          ],
        }),
      );
    if (ab > 0) bo("mem-search", Ne ? "searching" : "searched", "memories");
    if (Ec > 0)
      bo(
        "mem-write",
        Ne ? "writing" : "wrote",
        r(t, {
          children: [
            e(t, { bold: !0, children: Ec }),
            " ",
            Ec === 1 ? "memory" : "memories",
          ],
        }),
      );
    Hf = Tt.length === 0 && (se.hookTotalMs ?? 0) > 0;
    if (Hf)
      bo(
        "hooks",
        "ran",
        r(t, {
          children: [
            e(t, { bold: !0, children: se.hookCount }),
            " PreToolUse",
            " ",
            se.hookCount === 1 ? "hook" : "hooks",
            " (",
            formatSecondsShort(se.hookTotalMs ?? 0),
            ")",
          ],
        }),
      );
    ((Fe[51] = Al),
      (Fe[52] = Wc),
      (Fe[53] = vc),
      (Fe[54] = ub),
      (Fe[55] = Wr),
      (Fe[56] = Wt),
      (Fe[57] = mb),
      (Fe[58] = Ne),
      (Fe[59] = vl),
      (Fe[60] = eN),
      (Fe[61] = oN),
      (Fe[62] = Fc),
      (Fe[63] = $c),
      (Fe[64] = Nc),
      (Fe[65] = ab),
      (Fe[66] = Ec),
      (Fe[67] = se),
      (Fe[68] = Oc),
      (Fe[69] = Bc),
      (Fe[70] = Uc),
      (Fe[71] = rN),
      (Fe[72] = nN),
      (Fe[73] = Ic),
      (Fe[74] = jc),
      (Fe[75] = El),
      (Fe[76] = sN),
      (Fe[77] = iN),
      (Fe[78] = Dc),
      (Fe[79] = Hf),
      (Fe[80] = Tt));
  } else ((Hf = Fe[79]), (Tt = Fe[80]));
  const Ge = ore ? 1 : 0;
  let Mo;
  if (Fe[96] !== WU || Fe[97] !== Ne)
    ((Mo = Ne
      ? e(Ho, { shouldAnimate: !0, isUnresolved: !0, isError: WU })
      : e(o, { minWidth: 2 })),
      (Fe[96] = WU),
      (Fe[97] = Ne),
      (Fe[98] = Mo));
  else Mo = Fe[98];
  const Hr = !Ne;
  let Ss;
  if (Fe[99] !== An || Fe[100] !== Tt)
    ((Ss = An ? e(t, { children: capitalize(An) }, "task-summary") : Tt),
      (Fe[99] = An),
      (Fe[100] = Tt),
      (Fe[101] = Ss));
  else Ss = Fe[101];
  let Il;
  if (Fe[102] !== Ne || Fe[103] !== An || Fe[104] !== se || Fe[105] !== Tt)
    ((Il =
      !An &&
      Uf({ message: se, isActiveGroup: Ne, hasPrecedingParts: Tt.length > 0 })),
      (Fe[102] = Ne),
      (Fe[103] = An),
      (Fe[104] = se),
      (Fe[105] = Tt),
      (Fe[106] = Il));
  else Il = Fe[106];
  let bb;
  if (Fe[107] !== Yc || Fe[108] !== vl || Fe[109] !== Cc)
    ((bb =
      Yc > 0 &&
      !vl &&
      e(Fb, { anchorMs: Yc, shouldAnimate: Cc }, "tool-elapsed")),
      (Fe[107] = Yc),
      (Fe[108] = vl),
      (Fe[109] = Cc),
      (Fe[110] = bb));
  else bb = Fe[110];
  let xb;
  if (Fe[111] !== Ne || Fe[112] !== An)
    ((xb = Ne && !An && e(t, { children: "\u2026" }, "ellipsis")),
      (Fe[111] = Ne),
      (Fe[112] = An),
      (Fe[113] = xb));
  else xb = Fe[113];
  let OF;
  if (Fe[114] === MEMO_CACHE_SENTINEL) ((OF = e(TranscriptExpandHint, {})), (Fe[114] = OF));
  else OF = Fe[114];
  let Sb;
  if (
    Fe[115] !== Hr ||
    Fe[116] !== Ss ||
    Fe[117] !== Il ||
    Fe[118] !== bb ||
    Fe[119] !== xb
  )
    ((Sb = r(t, { dimColor: Hr, children: [Ss, Il, bb, xb, " ", OF] })),
      (Fe[115] = Hr),
      (Fe[116] = Ss),
      (Fe[117] = Il),
      (Fe[118] = bb),
      (Fe[119] = xb),
      (Fe[120] = Sb));
  else Sb = Fe[120];
  let Pb;
  if (Fe[121] !== Mo || Fe[122] !== Sb)
    ((Pb = r(o, { flexDirection: "row", children: [Mo, Sb] })),
      (Fe[121] = Mo),
      (Fe[122] = Sb),
      (Fe[123] = Pb));
  else Pb = Fe[123];
  let Cb;
  if (Fe[124] !== qU) ((Cb = qU && e(bf, {})), (Fe[124] = qU), (Fe[125] = Cb));
  else Cb = Fe[125];
  let wb;
  if (
    Fe[126] !== Ne ||
    Fe[127] !== $t ||
    Fe[128] !== se.memoryOps ||
    Fe[129] !== se.relevantMemories
  )
    ((wb =
      se.memoryOps &&
      UYe() &&
      e(Ri, {
        ops: se.memoryOps,
        relevantMemories: se.relevantMemories,
        isActiveGroup: Ne,
        lookups: $t,
      })),
      (Fe[126] = Ne),
      (Fe[127] = $t),
      (Fe[128] = se.memoryOps),
      (Fe[129] = se.relevantMemories),
      (Fe[130] = wb));
  else wb = Fe[130];
  let Ub;
  if (
    Fe[131] !== $U ||
    Fe[132] !== $f ||
    Fe[133] !== Ne ||
    Fe[134] !== Tb ||
    Fe[135] !== fb
  )
    ((Ub =
      Ne &&
      $f !== void 0 &&
      r(o, {
        flexDirection: "row",
        children: [
          e(o, {
            width: 5,
            flexShrink: 0,
            children: e(t, {
              "aria-hidden": !0,
              dimColor: !0,
              children: "  \u23BF  ",
            }),
          }),
          e(o, {
            flexDirection: "column",
            flexGrow: 1,
            children: fb
              ? e(js, {
                  dimColor: !0,
                  italic: !0,
                  children: vN($f, $U - Rm, AN),
                })
              : $f
                  .split(
                    `
`,
                  )
                  .map((kre, vF, bre) =>
                    r(
                      t,
                      {
                        dimColor: !0,
                        children: [kre, vF === bre.length - 1 && Tb],
                      },
                      `hint-${vF}`,
                    ),
                  ),
          }),
        ],
      })),
      (Fe[131] = $U),
      (Fe[132] = $f),
      (Fe[133] = Ne),
      (Fe[134] = Tb),
      (Fe[135] = fb),
      (Fe[136] = Ub));
  else Ub = Fe[136];
  let Nb;
  if (Fe[137] !== Hf || Fe[138] !== se.hookCount || Fe[139] !== se.hookTotalMs)
    ((Nb =
      !Hf &&
      se.hookTotalMs !== void 0 &&
      se.hookTotalMs > 0 &&
      r(t, {
        dimColor: !0,
        children: [
          e(t, { "aria-hidden": !0, children: "  \u23BF  " }),
          "Ran ",
          se.hookCount,
          " PreToolUse",
          " ",
          se.hookCount === 1 ? "hook" : "hooks",
          " (",
          formatSecondsShort(se.hookTotalMs),
          ")",
        ],
      })),
      (Fe[137] = Hf),
      (Fe[138] = se.hookCount),
      (Fe[139] = se.hookTotalMs),
      (Fe[140] = Nb));
  else Nb = Fe[140];
  let IF;
  if (
    Fe[141] !== Ge ||
    Fe[142] !== Pb ||
    Fe[143] !== Cb ||
    Fe[144] !== wb ||
    Fe[145] !== Ub ||
    Fe[146] !== Nb
  )
    ((IF = r(o, {
      flexDirection: "column",
      marginTop: Ge,
      children: [Pb, Cb, wb, Ub, Nb],
    })),
      (Fe[141] = Ge),
      (Fe[142] = Pb),
      (Fe[143] = Cb),
      (Fe[144] = wb),
      (Fe[145] = Ub),
      (Fe[146] = Nb),
      (Fe[147] = IF));
  else IF = Fe[147];
  return IF;
}
function jb(Cre) {
  let _N = _(6),
    { baseMs: BF, lastThinkingAtMs: wre } = Cre,
    xN = useAppStateSelector(QF),
    jF;
  if (_N[0] !== xN) ((jF = xN ?? ze()), (_N[0] = xN), (_N[1] = jF));
  else jF = _N[1];
  let SN = useSpinnerThinkingStartedAt(jF);
  bs(SN !== null ? 1000 : null);
  let Ure =
    SN !== null
      ? BF + Math.min(MAX_THOUGHT_DURATION_MS, Math.max(0, Date.now() - Math.max(SN, wre)))
      : BF;
  const PN = Math.max(1000, Ure);
  let Ab;
  if (_N[2] !== PN) ((Ab = formatDuration(PN)), (_N[2] = PN), (_N[3] = Ab));
  else Ab = _N[3];
  let FF;
  if (_N[4] !== Ab)
    ((FF = e(t, { bold: !0, children: Ab })), (_N[4] = Ab), (_N[5] = FF));
  else FF = _N[5];
  return FF;
}
function Fb(Are) {
  let $F = _(4),
    { anchorMs: Ere, shouldAnimate: Lre } = Are;
  bs(Lre ? 1000 : null);
  let Eb = Date.now() - Ere;
  if (Eb < 2000) {
    return null;
  }
  let Lb;
  if ($F[0] !== Eb) ((Lb = formatDuration(Eb)), ($F[0] = Eb), ($F[1] = Lb));
  else Lb = $F[1];
  let WF;
  if ($F[2] !== Lb)
    ((WF = r(t, { dimColor: !0, children: [" \xB7 ", Lb] })),
      ($F[2] = Lb),
      ($F[3] = WF));
  else WF = $F[3];
  return WF;
}
function vN(l, f, g) {
  let T = stripMemoryTags(l);
  if (f < 1) return T;
  let y = Vm(T, f, "wrap").split(`
`);
  if (y.length <= g) return T;
  let R = y.slice(0, g).join("").replace(/\s+/g, " ").trim();
  while (
    R.length > 0 &&
    countOccurrences(
      Vm(`${R}\u2026`, f, "wrap"),
      `
`,
    ) +
      1 >
      g
  ) {
    let k = R.length > 1 ? R.codePointAt(R.length - 2) : void 0;
    R = R.slice(0, k !== void 0 && k > 65535 ? -2 : -1);
  }
  return `${R.trimEnd()}\u2026`;
}
function IN(l) {
  let f = new Set(),
    g = new Set();
  for (let R of l) {
    if (R.type !== "assistant") continue;
    for (let k of R.message.content)
      if (k.type === "tool_use" && (k.name === AGENT_TOOL_NAME || k.name === TASK_TOOL_NAME)) {
        if ((f.add(k.id), k.input?.run_in_background !== !1)) g.add(k.id);
      }
  }
  if (f.size === 0) return !1;
  let T = new Set(),
    y = !1;
  for (let R of l) {
    if (R.type !== "user" || !Array.isArray(R.message.content)) continue;
    let k = !1;
    for (let P of R.message.content)
      if (P.type === "tool_result" && f.has(P.tool_use_id)) {
        if (((k = !0), T.add(P.tool_use_id), P.is_error === !0)) y = !0;
      }
    if (!k) continue;
    let S = R.toolUseResult?.status;
    if (
      S === "async_launched" ||
      S === "remote_launched" ||
      S === "teammate_spawned"
    )
      y = !0;
  }
  if (y) return !0;
  for (let R of g) if (!T.has(R)) return !0;
  return !1;
}
function Vf() {
  let JF = _(3),
    DN = useKeybindingDisplayText("app:toggleTranscript", "Global", "ctrl+o"),
    ZF;
  if (JF[0] === MEMO_CACHE_SENTINEL)
    ((ZF = e(t, { "aria-hidden": !0, children: "\u273B " })), (JF[0] = ZF));
  else ZF = JF[0];
  let e$;
  if (JF[1] !== DN)
    ((e$ = e(o, {
      marginY: 1,
      children: r(t, {
        dimColor: !0,
        children: [ZF, "Conversation compacted (", DN, " for history)"],
      }),
    })),
      (JF[1] = DN),
      (JF[2] = e$));
  else e$ = JF[2];
  return e$;
}
function $b({
  message: l,
  tools: f,
  lookups: g,
  inProgressToolUseIDs: T,
  shouldAnimate: y,
  addMargin: R,
}) {
  let k = findToolByName(f, l.toolName),
    S = k && hp(k, "renderGroupedToolUse");
  if (!S) return null;
  let P = new Map();
  for (let I of l.results)
    for (let B of I.message.content)
      if (B.type === "tool_result")
        P.set(B.tool_use_id, { param: B, output: I.toolUseResult });
  let A = l.messages.map((I) => {
      let B = I.message.content[0],
        K = P.get(B.id);
      return {
        param: B,
        isResolved: g.resolvedToolUseIDs.has(B.id),
        isError: g.erroredToolUseIDs.has(B.id),
        isInProgress: T.has(B.id),
        progressMessages: filterOutHookProgressMessages(g.progressMessagesByToolUseID.get(B.id) ?? []),
        result: K,
      };
    }),
    O = A.some((I) => I.isInProgress);
  return S(A, { shouldAnimate: y && O, tools: f, addMargin: R });
}
F();
import { basename as OA } from "path";
function l$(une) {
  return une.cloudSessionSync;
}
function Qf(rne) {
  let Dl = _(18),
    { message: Wi, addMargin: nne } = rne,
    { columns: sne } = useTerminalSize(),
    o$;
  if (Dl[0] !== Wi.url)
    ((o$ = (ine) => ine.remoteSessionUrl === Wi.url),
      (Dl[0] = Wi.url),
      (Dl[1] = o$));
  else o$ = Dl[1];
  let ane = useAppStateSelector(o$),
    lne = useAppStateSelector(l$),
    [BN, Wb] = useOffscreenFrozenValue(lne);
  if (!ane) {
    return null;
  }
  const jN = nne ? 1 : 0;
  let r$;
  if (Dl[2] === MEMO_CACHE_SENTINEL)
    ((r$ = e(o, {
      minWidth: 2,
      children: e(t, { "aria-hidden": !0, color: "inactive", children: CLAUDE_BULLET_GLYPH }),
    })),
      (Dl[2] = r$));
  else r$ = Dl[2];
  const FN = sne - 10,
    $N = CLOUD_SESSION_ENTRY_LABELS[Wi.entry];
  let qb;
  if (Dl[3] !== Wi.url)
    ((qb = e(ct, { url: Wi.url, children: Wi.url })),
      (Dl[3] = Wi.url),
      (Dl[4] = qb));
  else qb = Dl[4];
  let Hb;
  if (Dl[5] !== $N || Dl[6] !== qb)
    ((Hb = r(t, { color: "inactive", wrap: "wrap", children: [$N, CLOUD_SESSION_URL_SEPARATOR, qb] })),
      (Dl[5] = $N),
      (Dl[6] = qb),
      (Dl[7] = Hb));
  else Hb = Dl[7];
  let Gb;
  if (Dl[8] !== Wb)
    ((Gb = Wb !== void 0 && e(Jb, { rows: Wb })), (Dl[8] = Wb), (Dl[9] = Gb));
  else Gb = Dl[9];
  let zb;
  if (Dl[10] !== FN || Dl[11] !== Hb || Dl[12] !== Gb)
    ((zb = r(o, { flexDirection: "column", width: FN, children: [Hb, Gb] })),
      (Dl[10] = FN),
      (Dl[11] = Hb),
      (Dl[12] = Gb),
      (Dl[13] = zb));
  else zb = Dl[13];
  let n$;
  if (Dl[14] !== BN || Dl[15] !== jN || Dl[16] !== zb)
    ((n$ = r(o, {
      ref: BN,
      flexDirection: "row",
      marginTop: jN,
      width: "100%",
      children: [r$, zb],
    })),
      (Dl[14] = BN),
      (Dl[15] = jN),
      (Dl[16] = zb),
      (Dl[17] = n$));
  else n$ = Dl[17];
  return n$;
}
function Jb(cne) {
  let jl = _(16),
    { rows: yr } = cne,
    s$;
  if (jl[0] !== yr) ((s$ = aPt(yr)), (jl[0] = yr), (jl[1] = s$));
  else s$ = jl[1];
  let Kb = s$,
    i$;
  if (jl[2] === MEMO_CACHE_SENTINEL)
    ((i$ = e(t, { color: "inactive", children: sPt })), (jl[2] = i$));
  else i$ = jl[2];
  let Yb;
  if (jl[3] !== yr.projectFiles)
    ((Yb = e(zi, { label: yye.projectFiles, row: yr.projectFiles })),
      (jl[3] = yr.projectFiles),
      (jl[4] = Yb));
  else Yb = jl[4];
  let Vb;
  if (jl[5] !== yr.settings)
    ((Vb = e(zi, { label: yye.settings, row: yr.settings })),
      (jl[5] = yr.settings),
      (jl[6] = Vb));
  else Vb = jl[6];
  let Xb;
  if (jl[7] !== yr.plugins)
    ((Xb = e(zi, { label: yye.plugins, row: yr.plugins })),
      (jl[7] = yr.plugins),
      (jl[8] = Xb));
  else Xb = jl[8];
  let Qb;
  if (jl[9] !== Kb)
    ((Qb = Kb !== void 0 && e(t, { dimColor: !0, wrap: "wrap", children: Kb })),
      (jl[9] = Kb),
      (jl[10] = Qb));
  else Qb = jl[10];
  let a$;
  if (jl[11] !== Yb || jl[12] !== Vb || jl[13] !== Xb || jl[14] !== Qb)
    ((a$ = r(N, { children: [i$, Yb, Vb, Xb, Qb] })),
      (jl[11] = Yb),
      (jl[12] = Vb),
      (jl[13] = Xb),
      (jl[14] = Qb),
      (jl[15] = a$));
  else a$ = jl[15];
  return a$;
}
function zi(dne) {
  let Hi = _(15),
    { label: Ps, row: qi } = dne;
  switch (qi.mark) {
    case "synced": {
      let Gi;
      if (Hi[0] === MEMO_CACHE_SENTINEL)
        ((Gi = e(StatusIndicator, { status: "success", withSpace: !0 })), (Hi[0] = Gi));
      else Gi = Hi[0];
      let Rr;
      if (Hi[1] !== qi.note)
        ((Rr =
          qi.note !== void 0 &&
          r(t, { dimColor: !0, children: [" (", qi.note, ")"] })),
          (Hi[1] = qi.note),
          (Hi[2] = Rr));
      else Rr = Hi[2];
      let Xf;
      if (Hi[3] !== Ps || Hi[4] !== Rr)
        ((Xf = r(t, { color: "inactive", children: [Gi, Ps, Rr] })),
          (Hi[3] = Ps),
          (Hi[4] = Rr),
          (Hi[5] = Xf));
      else Xf = Hi[5];
      return Xf;
    }
    case "pending": {
      let Gi;
      if (Hi[6] === MEMO_CACHE_SENTINEL)
        ((Gi = e(StatusIndicator, { status: "loading", withSpace: !0 })), (Hi[6] = Gi));
      else Gi = Hi[6];
      let Rr;
      if (Hi[7] !== Ps)
        ((Rr = r(t, { dimColor: !0, children: [Gi, Ps] })),
          (Hi[7] = Ps),
          (Hi[8] = Rr));
      else Rr = Hi[8];
      return Rr;
    }
    case "not_synced": {
      let Gi;
      if (Hi[9] === MEMO_CACHE_SENTINEL)
        ((Gi = e(t, { "aria-label": "not synced:", children: iPt })),
          (Hi[9] = Gi));
      else Gi = Hi[9];
      let Rr;
      if (Hi[10] !== qi.words)
        ((Rr = r(t, { dimColor: !0, children: [" \u2014 ", qi.words] })),
          (Hi[10] = qi.words),
          (Hi[11] = Rr));
      else Rr = Hi[11];
      let Xf;
      if (Hi[12] !== Ps || Hi[13] !== Rr)
        ((Xf = r(t, {
          color: "inactive",
          wrap: "wrap",
          children: [Gi, " ", Ps, Rr],
        })),
          (Hi[12] = Ps),
          (Hi[13] = Rr),
          (Hi[14] = Xf));
      else Xf = Hi[14];
      return Xf;
    }
  }
}
function c$(WN) {
  let { index: xne } = WN;
  return xne !== -1;
}
var GN = [FABLE_SUPPORT_ARTICLE_URL, DEFAULT_SUPPORT_ARTICLE_URL, OPUS_5_SUPPORT_ARTICLE_URL].map((l) => ({ url: l, marker: `learn more: ${l}` }));
function $8(WN) {
  let Fl = _(33),
    { children: Mr, color: Cs, bold: ws } = WN,
    qN = useHyperlinkSupport(),
    Zb,
    kr,
    ex,
    ox,
    tx,
    HN;
  if (Fl[0] !== ws || Fl[1] !== Mr || Fl[2] !== Cs || Fl[3] !== qN) {
    HN = EARLY_RETURN_SENTINEL;
    bb0: {
      let $l;
      if (Fl[10] !== Mr)
        (($l = (Us) => {
          let { url: bne, marker: u$ } = Us;
          return { url: bne, marker: u$, index: Mr.indexOf(u$) };
        }),
          (Fl[10] = Mr),
          (Fl[11] = $l));
      else $l = Fl[11];
      kr = GN.map($l).find(c$);
      if (!qN || kr === void 0) {
        let Us;
        if (Fl[12] !== ws || Fl[13] !== Mr || Fl[14] !== Cs)
          ((Us = e(LinkifiedText, { color: Cs, bold: ws, children: Mr })),
            (Fl[12] = ws),
            (Fl[13] = Mr),
            (Fl[14] = Cs),
            (Fl[15] = Us));
        else Us = Fl[15];
        HN = Us;
        break bb0;
      }
      Zb = t;
      ex = Cs;
      ox = ws;
      tx = Mr.slice(0, kr.index);
    }
    ((Fl[0] = ws),
      (Fl[1] = Mr),
      (Fl[2] = Cs),
      (Fl[3] = qN),
      (Fl[4] = Zb),
      (Fl[5] = kr),
      (Fl[6] = ex),
      (Fl[7] = ox),
      (Fl[8] = tx),
      (Fl[9] = HN));
  } else
    ((Zb = Fl[4]),
      (kr = Fl[5]),
      (ex = Fl[6]),
      (ox = Fl[7]),
      (tx = Fl[8]),
      (HN = Fl[9]));
  if (HN !== EARLY_RETURN_SENTINEL) return HN;
  let $l;
  if (Fl[16] !== ws || Fl[17] !== Cs)
    (($l = e(t, {
      color: Cs,
      bold: ws,
      underline: !0,
      children: "learn more",
    })),
      (Fl[16] = ws),
      (Fl[17] = Cs),
      (Fl[18] = $l));
  else $l = Fl[18];
  let Us;
  if (Fl[19] !== kr.url || Fl[20] !== $l)
    ((Us = e(ct, { url: kr.url, children: $l })),
      (Fl[19] = kr.url),
      (Fl[20] = $l),
      (Fl[21] = Us));
  else Us = Fl[21];
  let rx;
  if (Fl[22] !== Mr || Fl[23] !== kr.index || Fl[24] !== kr.marker.length)
    ((rx = Mr.slice(kr.index + kr.marker.length)),
      (Fl[22] = Mr),
      (Fl[23] = kr.index),
      (Fl[24] = kr.marker.length),
      (Fl[25] = rx));
  else rx = Fl[25];
  let m$;
  if (
    Fl[26] !== Zb ||
    Fl[27] !== ex ||
    Fl[28] !== ox ||
    Fl[29] !== tx ||
    Fl[30] !== Us ||
    Fl[31] !== rx
  )
    ((m$ = r(Zb, { color: ex, bold: ox, children: [tx, Us, rx] })),
      (Fl[26] = Zb),
      (Fl[27] = ex),
      (Fl[28] = ox),
      (Fl[29] = tx),
      (Fl[30] = Us),
      (Fl[31] = rx),
      (Fl[32] = m$));
  else m$ = Fl[32];
  return m$;
}
function ele(l, f) {
  if (!l) return null;
  let g = getMarketingNameForModel(l) ?? sanitizeDisplayName(l),
    T = f === void 0 ? void 0 : typeof f === "number" ? void 0 : eU(f);
  return T !== void 0 ? `${g} (${T})` : g;
}
function JP(l) {
  return l === "completed" || l === "failed" || l === "killed";
}
function _Zt(l) {
  if (l === "running") return figures.play;
  if (l === "completed") return figures.tick;
  if (l === "failed" || l === "killed") return figures.cross;
  if (l === "paused") return figures.hamburger;
  return figures.bullet;
}
function yZt(l) {
  if (l === "completed") return "success";
  if (l === "failed") return "error";
  if (l === "killed") return "warning";
  if (l === "paused") return "warning";
  return "background";
}
function gye(l) {
  if (l.awaitingPlanApproval) return "awaiting approval";
  if (l.isIdle) return "idle";
  return (
    (l.progress?.recentActivities && summarizeRecentActivities(l.progress.recentActivities)) ??
    l.progress?.lastActivity?.activityDescription ??
    "working"
  );
}
function B8(l) {
  return (
    isLiveBackgroundTask(l) &&
    l.type !== "local_workflow" &&
    !isAmbientMonitorTask(l) &&
    !(ym() && (isSubagentTask(l) || l.type === "in_process_teammate"))
  );
}
var nx = [
  "Baked",
  "Brewed",
  "Churned",
  "Cogitated",
  "Cooked",
  "Crunched",
  "Saut\xE9ed",
  "Worked",
];
var d$ = "Worked";
function sx(l) {
  let f = (hashString(l) >>> 0) % nx.length;
  return nx[f] ?? d$;
}
function tle({ tasks: l, queuedCommands: f = [] }) {
  let g = new Set(),
    T = new Set(),
    y = (R) => {
      if (isSubagentTask(R) && R.isBackgrounded) g.add(R.id);
      else if (R.type === "local_workflow") T.add(R.id);
    };
  for (let R of Object.values(l))
    if (R.status === "running" || (isTerminalTaskStatus(R.status) && !R.notified)) y(R);
  for (let R of f) {
    if (R.mode !== "task-notification" || !isFromCurrentAgent(R) || R.taskId === void 0)
      continue;
    let k = l[R.taskId];
    if (k) y(k);
  }
  return { pendingAgents: g.size, pendingWorkflows: T.size };
}
function S$n({
  tasks: l,
  queuedCommands: f = [],
  turnDurationMs: g,
  turnStartTime: T,
  now: y,
  backgroundWaitStartTime: R,
}) {
  let { pendingAgents: k, pendingWorkflows: S } = tle({
    tasks: l,
    queuedCommands: f,
  });
  if (k > 0 || S > 0)
    return {
      durationMs: g,
      pendingBackgroundAgentCount: k > 0 ? k : void 0,
      pendingWorkflowCount: S > 0 ? S : void 0,
      backgroundWaitStartTime: R ?? T,
    };
  return {
    durationMs: R !== null ? y - R : g,
    pendingBackgroundAgentCount: void 0,
    pendingWorkflowCount: void 0,
    backgroundWaitStartTime: null,
  };
}
function H$(Sse, Pse) {
  return Sse + (Pse.durationMs ?? 0);
}
function G$(VN, Cse) {
  return r(
    t,
    {
      dimColor: !0,
      children: [
        e(t, { "aria-hidden": !0, children: "     \u23BF " }),
        VN.command === "prompt" ? `prompt: ${VN.promptText || ""}` : VN.command,
        "",
      ],
    },
    `cmd-${Cse}`,
  );
}
function z$(XN, wse) {
  return r(
    t,
    {
      dimColor: !0,
      children: [
        e(t, { "aria-hidden": !0, children: "\u23BF \xA0" }),
        XN.command === "prompt" ? `prompt: ${XN.promptText || ""}` : XN.command,
        "",
      ],
    },
    `cmd-${wse}`,
  );
}
function K$(Use, Nse) {
  return r(
    t,
    {
      children: [
        e(t, { "aria-hidden": !0, dimColor: !0, children: "\u23BF \xA0" }),
        "Stop hook feedback: ",
        Use,
      ],
    },
    `feedback-${Nse}`,
  );
}
function Y$($se) {
  let w$ = Object.values($se.tasks).filter(B8);
  return w$.length > 0 ? formatBackgroundTaskSummary(w$) : null;
}
function V$(I$) {
  return e(Kx, { path: I$ }, I$);
}
function ig(Rse) {
  let xo = _(62),
    { message: he, addMargin: mo, verbose: Jf, isTranscriptMode: ix } = Rse;
  if (he.subtype === "turn_duration") {
    let Ee;
    if (xo[0] !== mo || xo[1] !== he)
      ((Ee = e(Hx, { message: he, addMargin: mo })),
        (xo[0] = mo),
        (xo[1] = he),
        (xo[2] = Ee));
    else Ee = xo[2];
    return Ee;
  }
  if (he.subtype === "memory_saved") {
    const Ee = Jf || !!ix;
    let Oo;
    if (xo[3] !== mo || xo[4] !== he || xo[5] !== Ee)
      ((Oo = e(zx, { message: he, addMargin: mo, verbose: Ee })),
        (xo[3] = mo),
        (xo[4] = he),
        (xo[5] = Ee),
        (xo[6] = Oo));
    else Oo = xo[6];
    return Oo;
  }
  if (he.subtype === "away_summary") {
    let Ee;
    if (xo[7] !== mo || xo[8] !== he.content)
      ((Ee = e(ui, { content: he.content, addMargin: mo })),
        (xo[7] = mo),
        (xo[8] = he.content),
        (xo[9] = Ee));
    else Ee = xo[9];
    return Ee;
  }
  if (he.subtype === "agents_killed") {
    const Ee = mo ? 1 : 0;
    let Oo, yo;
    if (xo[10] === MEMO_CACHE_SENTINEL)
      ((Oo = e(o, {
        minWidth: 2,
        children: e(t, { "aria-hidden": !0, color: "error", children: CLAUDE_BULLET_GLYPH }),
      })),
        (yo = e(t, {
          dimColor: !0,
          children: "All background agents stopped",
        })),
        (xo[10] = Oo),
        (xo[11] = yo));
    else ((Oo = xo[10]), (yo = xo[11]));
    let vo;
    if (xo[12] !== Ee)
      ((vo = r(o, {
        flexDirection: "row",
        marginTop: Ee,
        width: "100%",
        children: [Oo, yo],
      })),
        (xo[12] = Ee),
        (xo[13] = vo));
    else vo = xo[13];
    return vo;
  }
  if (he.subtype === "thinking") {
    return null;
  }
  if (he.subtype === "model_refusal_no_fallback") {
    return null;
  }
  if (isRefusalFallbackEnabled() && he.subtype === "model_refusal_fallback") {
    const Ee = mo ? 1 : 0;
    let Oo;
    if (xo[14] === MEMO_CACHE_SENTINEL)
      ((Oo = e(o, {
        minWidth: 2,
        children: e(t, {
          "aria-label": "warning:",
          color: "warning",
          children: CLAUDE_BULLET_GLYPH,
        }),
      })),
        (xo[14] = Oo));
    else Oo = xo[14];
    let yo;
    if (xo[15] !== he.content)
      ((yo = r(o, {
        flexDirection: "row",
        width: "100%",
        children: [
          Oo,
          e($8, { color: "warning", bold: !0, children: he.content }),
        ],
      })),
        (xo[15] = he.content),
        (xo[16] = yo));
    else yo = xo[16];
    let vo;
    if (xo[17] !== he.scope)
      ((vo =
        he.scope !== "local" &&
        r(t, {
          dimColor: !0,
          children: [
            e(t, { "aria-hidden": !0, children: "  \u23BF  " }),
            "Tip: You can configure model switch behavior in /config",
          ],
        })),
        (xo[17] = he.scope),
        (xo[18] = vo));
    else vo = xo[18];
    let ql;
    if (xo[19] !== Ee || xo[20] !== yo || xo[21] !== vo)
      ((ql = r(o, {
        flexDirection: "column",
        marginTop: Ee,
        width: "100%",
        children: [yo, vo, !1],
      })),
        (xo[19] = Ee),
        (xo[20] = yo),
        (xo[21] = vo),
        (xo[22] = ql));
    else ql = xo[22];
    return ql;
  }
  if (he.subtype === "model_fallback") {
    let zN =
      he.trigger === "model_not_found" || he.trigger === "permission_denied";
    const Ee = mo ? 1 : 0;
    let Oo;
    if (xo[23] === MEMO_CACHE_SENTINEL)
      ((Oo = e(o, {
        minWidth: 2,
        children: e(t, {
          "aria-label": "warning:",
          color: "warning",
          children: CLAUDE_BULLET_GLYPH,
        }),
      })),
        (xo[23] = Oo));
    else Oo = xo[23];
    let yo;
    if (xo[24] !== zN || xo[25] !== he.content)
      ((yo = e(t, {
        color: "warning",
        bold: zN,
        wrap: "wrap",
        children: he.content,
      })),
        (xo[24] = zN),
        (xo[25] = he.content),
        (xo[26] = yo));
    else yo = xo[26];
    let vo;
    if (xo[27] !== Ee || xo[28] !== yo)
      ((vo = r(o, {
        flexDirection: "row",
        marginTop: Ee,
        width: "100%",
        children: [Oo, yo],
      })),
        (xo[27] = Ee),
        (xo[28] = yo),
        (xo[29] = vo));
    else vo = xo[29];
    return vo;
  }
  if (he.subtype === "bridge_status") {
    let Ee;
    if (xo[30] !== mo || xo[31] !== he)
      ((Ee = e(Yx, { message: he, addMargin: mo })),
        (xo[30] = mo),
        (xo[31] = he),
        (xo[32] = Ee));
    else Ee = xo[32];
    return Ee;
  }
  if (he.subtype === "cloud_session_status") {
    let Ee;
    if (xo[33] !== mo || xo[34] !== he)
      ((Ee = e(Qf, { message: he, addMargin: mo })),
        (xo[33] = mo),
        (xo[34] = he),
        (xo[35] = Ee));
    else Ee = xo[35];
    return Ee;
  }
  if (he.subtype === "scheduled_task_fire") {
    const Ee = mo ? 1 : 0;
    let Oo;
    if (xo[36] === MEMO_CACHE_SENTINEL)
      ((Oo = r(t, { "aria-hidden": !0, children: [CLAUDE_ASTERISK_GLYPH, " "] })), (xo[36] = Oo));
    else Oo = xo[36];
    let yo;
    if (xo[37] !== he.content)
      ((yo = r(t, { dimColor: !0, children: [Oo, he.content] })),
        (xo[37] = he.content),
        (xo[38] = yo));
    else yo = xo[38];
    let vo;
    if (xo[39] !== Ee || xo[40] !== yo)
      ((vo = e(o, { marginTop: Ee, width: "100%", children: yo })),
        (xo[39] = Ee),
        (xo[40] = yo),
        (xo[41] = vo));
    else vo = xo[41];
    return vo;
  }
  if (he.subtype === "permission_retry") {
    const Ee = mo ? 1 : 0;
    let Oo, yo;
    if (xo[42] === MEMO_CACHE_SENTINEL)
      ((Oo = r(t, { "aria-hidden": !0, dimColor: !0, children: [CLAUDE_ASTERISK_GLYPH, " "] })),
        (yo = e(t, { children: "Allowed " })),
        (xo[42] = Oo),
        (xo[43] = yo));
    else ((Oo = xo[42]), (yo = xo[43]));
    let vo;
    if (xo[44] !== he.commands)
      ((vo = he.commands.join(", ")), (xo[44] = he.commands), (xo[45] = vo));
    else vo = xo[45];
    let ql;
    if (xo[46] !== vo)
      ((ql = e(t, { bold: !0, children: vo })), (xo[46] = vo), (xo[47] = ql));
    else ql = xo[47];
    let p$;
    if (xo[48] !== Ee || xo[49] !== ql)
      ((p$ = r(o, { marginTop: Ee, width: "100%", children: [Oo, yo, ql] })),
        (xo[48] = Ee),
        (xo[49] = ql),
        (xo[50] = p$));
    else p$ = xo[50];
    return p$;
  }
  if (he.subtype !== "stop_hook_summary" && !Jf && he.level === "info") {
    return null;
  }
  if (he.subtype === "api_error") {
    return null;
  }
  if (he.subtype === "stop_hook_summary") {
    let Ee;
    if (xo[51] !== mo || xo[52] !== ix || xo[53] !== he || xo[54] !== Jf)
      ((Ee = e($x, {
        message: he,
        addMargin: mo,
        verbose: Jf,
        isTranscriptMode: ix,
      })),
        (xo[51] = mo),
        (xo[52] = ix),
        (xo[53] = he),
        (xo[54] = Jf),
        (xo[55] = Ee));
    else Ee = xo[55];
    return Ee;
  }
  let ax = he.content;
  if (typeof ax !== "string") {
    return null;
  }
  const Ee = he.level !== "info",
    Oo =
      he.level === "warning"
        ? "warning"
        : he.level === "notice"
          ? "inactive"
          : void 0,
    yo = he.level === "info";
  let vo;
  if (
    xo[56] !== mo ||
    xo[57] !== ax ||
    xo[58] !== Ee ||
    xo[59] !== Oo ||
    xo[60] !== yo
  )
    ((vo = e(o, {
      flexDirection: "row",
      width: "100%",
      children: e(Wx, {
        content: ax,
        addMargin: mo,
        dot: Ee,
        color: Oo,
        dimColor: yo,
      }),
    })),
      (xo[56] = mo),
      (xo[57] = ax),
      (xo[58] = Ee),
      (xo[59] = Oo),
      (xo[60] = yo),
      (xo[61] = vo));
  else vo = xo[61];
  return vo;
}
function $x(Mse) {
  let yt = _(45),
    { message: Kr, addMargin: kse, verbose: Xc, isTranscriptMode: KN } = Mse,
    {
      hookCount: Ki,
      hookInfos: Xr,
      hookErrors: Zf,
      hookAdditionalContext: lx,
      preventedContinuation: ux,
      stopReason: mx,
    } = Kr,
    f$;
  if (yt[0] !== lx)
    ((f$ = lx === void 0 ? [] : lx), (yt[0] = lx), (yt[1] = f$));
  else f$ = yt[1];
  let eg = f$,
    { columns: bse } = useTerminalSize();
  if (
    (Kr.totalDurationMs ?? Xr.reduce(H$, 0),
    Zf.length === 0 && eg.length === 0 && !ux && !Kr.hookLabel)
  ) {
    return null;
  }
  if (Kr.hookLabel) {
    let Qc;
    if (yt[2] === MEMO_CACHE_SENTINEL)
      ((Qc = e(t, { "aria-hidden": !0, children: "  \u23BF  " })),
        (yt[2] = Qc));
    else Qc = yt[2];
    const Zc = Ki === 1 ? "hook" : "hooks";
    let Yi;
    if (yt[3] !== Ki || yt[4] !== Kr.hookLabel || yt[5] !== Zc)
      ((Yi = r(t, {
        dimColor: !0,
        children: [Qc, "Ran ", Ki, " ", Kr.hookLabel, " ", Zc, ""],
      })),
        (yt[3] = Ki),
        (yt[4] = Kr.hookLabel),
        (yt[5] = Zc),
        (yt[6] = Yi));
    else Yi = yt[6];
    let As;
    if (yt[7] !== Xr || yt[8] !== KN)
      ((As = KN && Xr.map(G$)), (yt[7] = Xr), (yt[8] = KN), (yt[9] = As));
    else As = yt[9];
    let ed;
    if (yt[10] !== Yi || yt[11] !== As)
      ((ed = r(o, {
        flexDirection: "column",
        width: "100%",
        children: [Yi, As],
      })),
        (yt[10] = Yi),
        (yt[11] = As),
        (yt[12] = ed));
    else ed = yt[12];
    return ed;
  }
  const Qc = kse ? 1 : 0;
  let Zc;
  if (yt[13] === MEMO_CACHE_SENTINEL)
    ((Zc = e(o, {
      minWidth: 2,
      children: e(t, { "aria-hidden": !0, children: CLAUDE_BULLET_GLYPH }),
    })),
      (yt[13] = Zc));
  else Zc = yt[13];
  const Yi = bse - 10;
  let As;
  if (yt[14] !== Ki)
    ((As = e(t, { bold: !0, children: Ki })), (yt[14] = Ki), (yt[15] = As));
  else As = yt[15];
  const ed = Kr.hookLabel ?? "stop",
    YN = Ki === 1 ? "hook" : "hooks";
  let cx;
  if (yt[16] !== Xr || yt[17] !== Xc)
    ((cx = !Xc && Xr.length > 0 && r(N, { children: [" ", e(TranscriptExpandHint, {})] })),
      (yt[16] = Xr),
      (yt[17] = Xc),
      (yt[18] = cx));
  else cx = yt[18];
  let dx;
  if (yt[19] !== As || yt[20] !== ed || yt[21] !== YN || yt[22] !== cx)
    ((dx = r(t, { children: ["Ran ", As, " ", ed, " ", YN, "", cx] })),
      (yt[19] = As),
      (yt[20] = ed),
      (yt[21] = YN),
      (yt[22] = cx),
      (yt[23] = dx));
  else dx = yt[23];
  let px;
  if (yt[24] !== Xr || yt[25] !== Xc)
    ((px = Xc && Xr.length > 0 && Xr.map(z$)),
      (yt[24] = Xr),
      (yt[25] = Xc),
      (yt[26] = px));
  else px = yt[26];
  let fx;
  if (yt[27] !== ux || yt[28] !== mx)
    ((fx =
      ux &&
      mx &&
      r(t, {
        children: [
          e(t, { "aria-hidden": !0, dimColor: !0, children: "\u23BF \xA0" }),
          mx,
        ],
      })),
      (yt[27] = ux),
      (yt[28] = mx),
      (yt[29] = fx));
  else fx = yt[29];
  let gx;
  if (yt[30] !== Zf || yt[31] !== Kr.hookLabel)
    ((gx =
      Zf.length > 0 &&
      Zf.map((xse, _se) =>
        r(
          t,
          {
            children: [
              e(t, {
                "aria-hidden": !0,
                dimColor: !0,
                children: "\u23BF \xA0",
              }),
              Kr.hookLabel ?? "Stop",
              " hook error: ",
              xse,
            ],
          },
          _se,
        ),
      )),
      (yt[30] = Zf),
      (yt[31] = Kr.hookLabel),
      (yt[32] = gx));
  else gx = yt[32];
  let hx;
  if (yt[33] !== eg)
    ((hx = eg.length > 0 && eg.map(K$)), (yt[33] = eg), (yt[34] = hx));
  else hx = yt[34];
  let Tx;
  if (
    yt[35] !== dx ||
    yt[36] !== px ||
    yt[37] !== fx ||
    yt[38] !== gx ||
    yt[39] !== hx ||
    yt[40] !== Yi
  )
    ((Tx = r(o, {
      flexDirection: "column",
      width: Yi,
      children: [dx, px, fx, gx, hx],
    })),
      (yt[35] = dx),
      (yt[36] = px),
      (yt[37] = fx),
      (yt[38] = gx),
      (yt[39] = hx),
      (yt[40] = Yi),
      (yt[41] = Tx));
  else Tx = yt[41];
  let g$;
  if (yt[42] !== Tx || yt[43] !== Qc)
    ((g$ = r(o, {
      flexDirection: "row",
      marginTop: Qc,
      width: "100%",
      children: [Zc, Tx],
    })),
      (yt[42] = Tx),
      (yt[43] = Qc),
      (yt[44] = g$));
  else g$ = yt[44];
  return g$;
}
function Wx(Ase) {
  let og = _(17),
    { content: QN, addMargin: Ese, dot: JN, color: od, dimColor: td } = Ase,
    { columns: Lse } = useTerminalSize();
  const ZN = Ese ? 1 : 0;
  let Rx;
  if (og[0] !== od || og[1] !== td || og[2] !== JN)
    ((Rx =
      JN &&
      e(o, {
        minWidth: 2,
        children: e(t, {
          "aria-hidden": !0,
          color: od,
          dimColor: td,
          children: CLAUDE_BULLET_GLYPH,
        }),
      })),
      (og[0] = od),
      (og[1] = td),
      (og[2] = JN),
      (og[3] = Rx));
  else Rx = og[3];
  const eA = Lse - 10;
  let Mx;
  if (og[4] !== QN) ((Mx = QN.trim()), (og[4] = QN), (og[5] = Mx));
  else Mx = og[5];
  let kx;
  if (og[6] !== od || og[7] !== td || og[8] !== Mx)
    ((kx = e(t, { color: od, dimColor: td, wrap: "wrap", children: Mx })),
      (og[6] = od),
      (og[7] = td),
      (og[8] = Mx),
      (og[9] = kx));
  else kx = og[9];
  let bx;
  if (og[10] !== eA || og[11] !== kx)
    ((bx = e(o, { flexDirection: "column", width: eA, children: kx })),
      (og[10] = eA),
      (og[11] = kx),
      (og[12] = bx));
  else bx = og[12];
  let h$;
  if (og[13] !== ZN || og[14] !== Rx || og[15] !== bx)
    ((h$ = r(o, {
      flexDirection: "row",
      marginTop: ZN,
      width: "100%",
      children: [Rx, bx],
    })),
      (og[13] = ZN),
      (og[14] = Rx),
      (og[15] = bx),
      (og[16] = h$));
  else h$ = og[16];
  return h$;
}
function Hx(Ose) {
  let tA = _(10),
    { message: it, addMargin: oA } = Ose,
    T$;
  if (tA[0] !== it.uuid) ((T$ = sx(it.uuid)), (tA[0] = it.uuid), (tA[1] = T$));
  else T$ = tA[1];
  let xx = T$,
    y$,
    R$;
  if (tA[2] !== it.durationMs || tA[3] !== it.uuid || tA[4] !== xx)
    ((y$ = () => ({
      requestId: it.uuid,
      props: { word: xx, durationMs: it.durationMs },
    })),
      (R$ = [xx, it.uuid, it.durationMs]),
      (tA[2] = it.durationMs),
      (tA[3] = it.uuid),
      (tA[4] = xx),
      (tA[5] = y$),
      (tA[6] = R$));
  else ((y$ = tA[5]), (R$ = tA[6]));
  let vse = La.useRenderInput("TurnDuration", y$, R$),
    M$;
  if (tA[7] !== oA || tA[8] !== it)
    ((M$ = (rA) =>
      e(Gx, {
        message:
          rA.props.durationMs === it.durationMs
            ? it
            : { ...it, durationMs: rA.props.durationMs },
        addMargin: oA,
        verb: rA.props.word,
      })),
      (tA[7] = oA),
      (tA[8] = it),
      (tA[9] = M$));
  else M$ = tA[9];
  return La.useRenderHook(vse, M$);
}
function Gx(Ise) {
  let Ls = _(37),
    { message: Rt, addMargin: nA, verb: sA } = Ise,
    iA = useAppState(),
    aA = useCommandQueue(),
    k$;
  if (Ls[0] !== Rt.timestamp || Ls[1] !== aA || Ls[2] !== iA)
    ((k$ = () => {
      let b$ = tle({
        tasks: iA.getState().tasks,
        queuedCommands: aA.getCommandQueue(),
      });
      return {
        hasPendingAgents: b$.pendingAgents > 0,
        hasPendingWorkflows: b$.pendingWorkflows > 0,
        showTurnDuration: resolveSetting("showTurnDuration", !0).value,
        doneAt: formatTimestamp(Rt.timestamp),
      };
    }),
      (Ls[0] = Rt.timestamp),
      (Ls[1] = aA),
      (Ls[2] = iA),
      (Ls[3] = k$));
  else k$ = Ls[3];
  let [Dse] = d(k$),
    {
      hasPendingAgents: Bse,
      hasPendingWorkflows: jse,
      showTurnDuration: Hl,
      doneAt: _x,
    } = Dse,
    Sx = useAppStateSelector(Y$),
    _$;
  if (Ls[4] !== Rt.durationMs)
    ((_$ = formatDuration(Rt.durationMs)), (Ls[4] = Rt.durationMs), (Ls[5] = _$));
  else _$ = Ls[5];
  let lA = _$,
    uA = Rt.budgetLimit !== void 0,
    mA;
  bb0: {
    if (!uA) {
      mA = null;
      break bb0;
    }
    let rd = Rt.budgetTokens;
    let nd = Rt.budgetLimit;
    let Gl;
    if (Ls[6] !== nd || Ls[7] !== rd)
      ((Gl =
        rd >= nd
          ? r(t, {
              children: [
                formatNumber(rd),
                " used (",
                formatNumber(nd),
                " min",
                r(t, { "aria-hidden": !0, children: [" ", figures.tick] }),
                ")",
              ],
            })
          : `${formatNumber(rd)} / ${formatNumber(nd)} (${Math.round((rd / nd) * 100)}%)`),
        (Ls[6] = nd),
        (Ls[7] = rd),
        (Ls[8] = Gl));
    else Gl = Ls[8];
    let cA = Gl;
    let dA =
      Rt.budgetNudges > 0
        ? ` \xB7 ${Rt.budgetNudges} ${Rt.budgetNudges === 1 ? "nudge" : "nudges"}`
        : "";
    const zl = Hl ? " \xB7 " : "";
    let Kl;
    if (Ls[9] !== dA || Ls[10] !== zl || Ls[11] !== cA)
      ((Kl = r(N, { children: [zl, cA, dA] })),
        (Ls[9] = dA),
        (Ls[10] = zl),
        (Ls[11] = cA),
        (Ls[12] = Kl));
    else Kl = Ls[12];
    mA = Kl;
  }
  let Cx = mA,
    pA = Rt.briefHiddenCount ?? 0,
    tg =
      pA > 0
        ? `${Hl || uA ? " \xB7 " : ""}${pA} ${pA === 1 ? "message" : "messages"} hidden (/focus to show)`
        : "",
    fA = !Hl && !uA && !tg,
    Vl = Bse ? (Rt.pendingBackgroundAgentCount ?? 0) : 0,
    Xl = jse ? (Rt.pendingWorkflowCount ?? 0) : 0,
    wx = Vl > 0 || Xl > 0,
    Gl;
  if (Ls[13] !== Vl)
    ((Gl =
      Vl > 0 &&
      r(t, {
        children: [
          " ",
          e(t, { bold: !0, dimColor: !0, children: Vl }),
          ` background ${Vl === 1 ? "agent" : "agents"}`,
        ],
      })),
      (Ls[13] = Vl),
      (Ls[14] = Gl));
  else Gl = Ls[14];
  const zl = Vl > 0 && Xl > 0 && " and";
  let Kl;
  if (Ls[15] !== Xl)
    ((Kl =
      Xl > 0 &&
      r(t, {
        children: [
          " ",
          e(t, { bold: !0, dimColor: !0, children: Xl }),
          ` ${Xl === 1 ? "dynamic workflow" : "dynamic workflows"}`,
        ],
      })),
      (Ls[15] = Xl),
      (Ls[16] = Kl));
  else Kl = Ls[16];
  let S$;
  if (Ls[17] !== Gl || Ls[18] !== zl || Ls[19] !== Kl)
    ((S$ = r(t, {
      dimColor: !0,
      children: ["Waiting for", Gl, zl, Kl, " to finish"],
    })),
      (Ls[17] = Gl),
      (Ls[18] = zl),
      (Ls[19] = Kl),
      (Ls[20] = S$));
  else S$ = Ls[20];
  let gA = S$,
    yA = Hl && wx,
    P$;
  if (
    Ls[21] !== nA ||
    Ls[22] !== Sx ||
    Ls[23] !== Cx ||
    Ls[24] !== _x ||
    Ls[25] !== lA ||
    Ls[26] !== tg ||
    Ls[27] !== fA ||
    Ls[28] !== wx ||
    Ls[29] !== Hl ||
    Ls[30] !== yA ||
    Ls[31] !== sA ||
    Ls[32] !== gA
  )
    ((P$ = fA
      ? null
      : r(o, {
          flexDirection: "row",
          marginTop: nA ? 1 : 0,
          width: "100%",
          children: [
            e(o, {
              minWidth: 2,
              children: e(t, { "aria-hidden": !0, dimColor: !0, children: CLAUDE_ASTERISK_GLYPH }),
            }),
            r(t, {
              children: [
                Hl &&
                  (wx
                    ? gA
                    : e(t, {
                        dimColor: !0,
                        children: `${sA} for ${lA}${_x ? ` \xB7 done ${_x}` : ""}`,
                      })),
                Cx && e(t, { dimColor: !0, children: Cx }),
                tg && e(t, { dimColor: !0, children: tg }),
                !yA &&
                  Sx &&
                  e(t, { dimColor: !0, children: ` \xB7 ${Sx} still running` }),
              ],
            }),
          ],
        })),
      (Ls[21] = nA),
      (Ls[22] = Sx),
      (Ls[23] = Cx),
      (Ls[24] = _x),
      (Ls[25] = lA),
      (Ls[26] = tg),
      (Ls[27] = fA),
      (Ls[28] = wx),
      (Ls[29] = Hl),
      (Ls[30] = yA),
      (Ls[31] = sA),
      (Ls[32] = gA),
      (Ls[33] = P$));
  else P$ = Ls[33];
  let Fse = P$,
    [RA, MA] = useOffscreenFrozenValue(Fse),
    C$;
  if (Ls[34] !== MA || Ls[35] !== RA)
    ((C$ = e(o, {
      ref: RA,
      flexDirection: "column",
      width: "100%",
      children: MA,
    })),
      (Ls[34] = MA),
      (Ls[35] = RA),
      (Ls[36] = C$));
  else C$ = Ls[36];
  return C$;
}
function zx(Wse) {
  let sd = _(16),
    { message: ng, addMargin: qse, verbose: kA } = Wse,
    { writtenPaths: Ux } = ng,
    N$;
  if (sd[0] !== ng) ((N$ = fu(ng)), (sd[0] = ng), (sd[1] = N$));
  else N$ = sd[1];
  let A$ = N$,
    bA = Ux.length - (A$?.count ?? 0);
  const _A = bA > 0 ? `${bA} ${bA === 1 ? "memory" : "memories"}` : null,
    PA = A$?.segment;
  let L$;
  if (sd[2] !== _A || sd[3] !== PA)
    ((L$ = [_A, PA].filter(Boolean)), (sd[2] = _A), (sd[3] = PA), (sd[4] = L$));
  else L$ = sd[4];
  let Hse = L$;
  const CA = qse ? 1 : 0;
  let O$;
  if (sd[5] === MEMO_CACHE_SENTINEL)
    ((O$ = e(o, {
      minWidth: 2,
      children: e(t, { "aria-hidden": !0, dimColor: !0, children: CLAUDE_BULLET_GLYPH }),
    })),
      (sd[5] = O$));
  else O$ = sd[5];
  const wA = ng.verb ?? "Saved",
    NA = Hse.join(" \xB7 ");
  let Nx;
  if (sd[6] !== wA || sd[7] !== NA)
    ((Nx = r(o, {
      flexDirection: "row",
      children: [O$, r(t, { children: [wA, " ", NA] })],
    })),
      (sd[6] = wA),
      (sd[7] = NA),
      (sd[8] = Nx));
  else Nx = sd[8];
  let Ax;
  if (sd[9] !== kA || sd[10] !== Ux)
    ((Ax = kA && Ux.map(V$)), (sd[9] = kA), (sd[10] = Ux), (sd[11] = Ax));
  else Ax = sd[11];
  let v$;
  if (sd[12] !== Ax || sd[13] !== CA || sd[14] !== Nx)
    ((v$ = r(o, {
      flexDirection: "column",
      marginTop: CA,
      children: [Nx, Ax],
    })),
      (sd[12] = Ax),
      (sd[13] = CA),
      (sd[14] = Nx),
      (sd[15] = v$));
  else v$ = sd[15];
  return v$;
}
function Kx(Gse) {
  let id = _(16),
    { path: vs } = Gse,
    [Ex, D$] = d(!1),
    Lx;
  if (id[0] !== vs) ((Lx = () => void openPathInDefaultApp(vs)), (id[0] = vs), (id[1] = Lx));
  else Lx = id[1];
  let B$, j$;
  if (id[2] === MEMO_CACHE_SENTINEL)
    ((B$ = () => D$(!0)), (j$ = () => D$(!1)), (id[2] = B$), (id[3] = j$));
  else ((B$ = id[2]), (j$ = id[3]));
  const AA = !Ex;
  let vx;
  if (id[4] !== vs) ((vx = OA(vs)), (id[4] = vs), (id[5] = vx));
  else vx = id[5];
  let Ix;
  if (id[6] !== vs || id[7] !== vx)
    ((Ix = e(TruncatedFilePath, { filePath: vs, children: vx })),
      (id[6] = vs),
      (id[7] = vx),
      (id[8] = Ix));
  else Ix = id[8];
  let Dx;
  if (id[9] !== Ex || id[10] !== AA || id[11] !== Ix)
    ((Dx = e(t, { dimColor: AA, underline: Ex, children: Ix })),
      (id[9] = Ex),
      (id[10] = AA),
      (id[11] = Ix),
      (id[12] = Dx));
  else Dx = id[12];
  let F$;
  if (id[13] !== Lx || id[14] !== Dx)
    ((F$ = e(ToolResultRow, {
      children: e(o, {
        onClick: Lx,
        onMouseEnter: B$,
        onMouseLeave: j$,
        children: Dx,
      }),
    })),
      (id[13] = Lx),
      (id[14] = Dx),
      (id[15] = F$));
  else F$ = id[15];
  return F$;
}
function Yx(zse) {
  let ad = _(13),
    { message: Qr, addMargin: Kse } = zse,
    $$;
  if (ad[0] !== Qr)
    (($$ = (EA) =>
      EA.replBridgeConnected &&
      !EA.replBridgeOutboundOnly &&
      EA.replBridgeSessionUrl === Qr.url),
      (ad[0] = Qr),
      (ad[1] = $$));
  else $$ = ad[1];
  if (!useAppStateSelector($$)) {
    return null;
  }
  const LA = Kse ? 1 : 0;
  let W$;
  if (ad[2] === MEMO_CACHE_SENTINEL) ((W$ = e(o, { minWidth: 2 })), (ad[2] = W$));
  else W$ = ad[2];
  let Bx;
  if (ad[3] !== Qr.url)
    ((Bx = r(t, {
      children: [
        "/remote-control is active",
        r(t, {
          dimColor: !0,
          children: [
            " \xB7 Continue here, on your phone, or at ",
            e(ct, { url: Qr.url, children: Qr.url }),
          ],
        }),
      ],
    })),
      (ad[3] = Qr.url),
      (ad[4] = Bx));
  else Bx = ad[4];
  let jx;
  if (ad[5] !== Qr.upgradeNudge)
    ((jx =
      Qr.upgradeNudge &&
      r(o, {
        flexDirection: "row",
        children: [
          e(t, { "aria-hidden": !0, dimColor: !0, children: "\u23BF  " }),
          e(t, { dimColor: !0, children: Qr.upgradeNudge }),
        ],
      })),
      (ad[5] = Qr.upgradeNudge),
      (ad[6] = jx));
  else jx = ad[6];
  let Fx;
  if (ad[7] !== Bx || ad[8] !== jx)
    ((Fx = r(o, { flexDirection: "column", children: [Bx, jx] })),
      (ad[7] = Bx),
      (ad[8] = jx),
      (ad[9] = Fx));
  else Fx = ad[9];
  let q$;
  if (ad[10] !== LA || ad[11] !== Fx)
    ((q$ = r(o, {
      flexDirection: "row",
      marginTop: LA,
      width: 999,
      children: [W$, Fx],
    })),
      (ad[10] = LA),
      (ad[11] = Fx),
      (ad[12] = q$));
  else q$ = ad[12];
  return q$;
}
var e_ = "</agent-message>";
function DA(l) {
  return FT(l) || "agent";
}
function lg(l) {
  let f = l,
    g = CROSS_SESSION_OPENER_PREFIXES.find((y) => f.startsWith(y));
  if (g) f = f.slice(g.length);
  let T = f.lastIndexOf(e_) + e_.length;
  if (T > e_.length - 1) {
    let y = f.slice(T);
    if (PEER_LANE_SUFFIX_VARIANTS.includes(y) || DESCENDANT_LANE_SUFFIX_VARIANTS.includes(y)) f = f.slice(0, T);
  }
  return f
    .replace(/^<agent-message[^>]*>\n/, "")
    .replace(/\n<\/agent-message>$/, "");
}
function Ql(sie) {
  let Ds = _(20),
    {
      addMargin: Vx,
      param: Xx,
      fromName: ld,
      verbose: iie,
      isTranscriptMode: aie,
      followsSpeakerLabel: X$,
    } = sie,
    lie = X$ === void 0 ? !1 : X$,
    uie = shouldExpandContent(iie, aie);
  if (lie) {
    const Is = typeof Xx.text === "string" ? Xx.text : "";
    let Vi;
    if (Ds[0] !== Is) ((Vi = lg(Is)), (Ds[0] = Is), (Ds[1] = Vi));
    else Vi = Ds[1];
    let ag;
    if (Ds[2] !== Vi) ((ag = e(TruncatedText, { text: Vi })), (Ds[2] = Vi), (Ds[3] = ag));
    else ag = Ds[3];
    return ag;
  }
  if (!uie) {
    let Is;
    if (Ds[4] !== Vx || Ds[5] !== ld)
      ((Is = e(CollapsedMessagesHint, { displayName: ld, addMargin: Vx, fallbackLabel: "agent" })),
        (Ds[4] = Vx),
        (Ds[5] = ld),
        (Ds[6] = Is));
    else Is = Ds[6];
    return Is;
  }
  let Is;
  if (Ds[7] !== ld) ((Is = DA(ld)), (Ds[7] = ld), (Ds[8] = Is));
  else Is = Ds[8];
  let vA = Is,
    IA = typeof Xx.text === "string" ? Xx.text : "";
  const Vi = Vx ? 1 : 0;
  let ag;
  if (Ds[9] === MEMO_CACHE_SENTINEL)
    ((ag = r(t, { "aria-hidden": !0, children: [figures.pointerSmall, " "] })),
      (Ds[9] = ag));
  else ag = Ds[9];
  let Qx;
  if (Ds[10] !== vA)
    ((Qx = r(t, { dimColor: !0, children: [ag, "Message from ", vA] })),
      (Ds[10] = vA),
      (Ds[11] = Qx));
  else Qx = Ds[11];
  let Jx;
  if (Ds[12] !== IA) ((Jx = lg(IA)), (Ds[12] = IA), (Ds[13] = Jx));
  else Jx = Ds[13];
  let Zx;
  if (Ds[14] !== Jx)
    ((Zx = e(o, {
      paddingLeft: 2,
      children: e(t, { wrap: "wrap", children: Jx }),
    })),
      (Ds[14] = Jx),
      (Ds[15] = Zx));
  else Zx = Ds[15];
  let Q$;
  if (Ds[16] !== Vi || Ds[17] !== Qx || Ds[18] !== Zx)
    ((Q$ = r(o, {
      flexDirection: "column",
      marginTop: Vi,
      width: "100%",
      children: [Qx, Zx],
    })),
      (Ds[16] = Vi),
      (Ds[17] = Qx),
      (Ds[18] = Zx),
      (Ds[19] = Q$));
  else Q$ = Ds[19];
  return Q$;
}
function tW(kie) {
  return kie.agentDefinitions.activeAgents;
}
function mg(Mie) {
  let VA = _(14),
    {
      input: BA,
      progressMessagesForMessage: FA,
      style: $A,
      tool: ud,
      tools: WA,
      verbose: HA,
      isTranscriptMode: GA,
    } = Mie,
    { columns: zA } = useTerminalSize(),
    [KA] = useTheme(),
    YA = useAppStateSelectorUnchecked(tW),
    Z$,
    o_;
  if (
    VA[0] !== YA ||
    VA[1] !== zA ||
    VA[2] !== BA ||
    VA[3] !== GA ||
    VA[4] !== FA ||
    VA[5] !== $A ||
    VA[6] !== KA ||
    VA[7] !== ud ||
    VA[8] !== WA ||
    VA[9] !== HA
  ) {
    o_ = EARLY_RETURN_SENTINEL;
    bb0: {
      let eW = ud ? hp(ud, "renderToolUseRejectedMessage") : void 0;
      if (!ud || !eW) {
        let ug;
        if (VA[12] === MEMO_CACHE_SENTINEL) ((ug = e(bf, {})), (VA[12] = ug));
        else ug = VA[12];
        o_ = ug;
        break bb0;
      }
      let oW = parseToolInput(ud, BA);
      if (!oW.success) {
        let ug;
        if (VA[13] === MEMO_CACHE_SENTINEL) ((ug = e(bf, {})), (VA[13] = ug));
        else ug = VA[13];
        o_ = ug;
        break bb0;
      }
      Z$ =
        eW(oW.data, {
          columns: zA,
          messages: [],
          tools: WA,
          verbose: HA,
          progressMessagesForMessage: filterOutHookProgressMessages(FA),
          style: $A,
          theme: KA,
          isTranscriptMode: GA,
          activeAgents: YA,
        }) ?? e(bf, {});
    }
    ((VA[0] = YA),
      (VA[1] = zA),
      (VA[2] = BA),
      (VA[3] = GA),
      (VA[4] = FA),
      (VA[5] = $A),
      (VA[6] = KA),
      (VA[7] = ud),
      (VA[8] = WA),
      (VA[9] = HA),
      (VA[10] = Z$),
      (VA[11] = o_));
  } else ((Z$ = VA[10]), (o_ = VA[11]));
  if (o_ !== EARLY_RETURN_SENTINEL) return o_;
  return Z$;
}
F();
function mW($ie) {
  return $ie.host;
}
function cW(Wie) {
  return Wie.isBriefOnly;
}
function pW(qie) {
  return qie.agentDefinitions.activeAgents;
}
function dg(Bie) {
  let Xi = _(39),
    {
      message: cg,
      lookups: cd,
      toolUseID: Mt,
      progressMessagesForMessage: XA,
      style: QA,
      tool: Jr,
      tools: JA,
      verbose: ZA,
      width: jie,
      isTranscriptMode: dd,
    } = Bie,
    eE = useSession(mW),
    [oE] = useTheme(),
    tE = useAppStateSelector(cW),
    rE = useAppStateSelector(pW),
    Bs = useAppState(),
    rW;
  if (Xi[0] !== Bs || Xi[1] !== Mt)
    ((rW = () => getClassifierApproval(Bs.getState(), Mt)),
      (Xi[0] = Bs),
      (Xi[1] = Mt),
      (Xi[2] = rW));
  else rW = Xi[2];
  let [nE] = d(rW),
    nW;
  if (Xi[3] !== Bs.setState || Xi[4] !== Mt)
    ((nW = () => {
      deleteClassifierApproval(createClassifierApprovalsUpdater(Bs.setState), Mt);
    }),
      (Xi[3] = Bs.setState),
      (Xi[4] = Mt),
      (Xi[5] = nW));
  else nW = Xi[5];
  let sW;
  if (Xi[6] !== Bs || Xi[7] !== Mt)
    ((sW = [Bs, Mt]), (Xi[6] = Bs), (Xi[7] = Mt), (Xi[8] = sW));
  else sW = Xi[8];
  if ((E(nW, sW), !cg.toolUseResult || !Jr)) {
    return null;
  }
  if (Jr.isTransparentWrapper?.()) {
    return null;
  }
  let iW, aW, n_;
  if (
    Xi[9] !== rE ||
    Xi[10] !== eE ||
    Xi[11] !== tE ||
    Xi[12] !== dd ||
    Xi[13] !== cd ||
    Xi[14] !== cg.toolUseResult ||
    Xi[15] !== XA ||
    Xi[16] !== QA ||
    Xi[17] !== oE ||
    Xi[18] !== Jr ||
    Xi[19] !== Mt ||
    Xi[20] !== JA ||
    Xi[21] !== ZA
  ) {
    n_ = EARLY_RETURN_SENTINEL;
    bb0: {
      let s_ = Jr.outputSchema?.safeParse(cg.toolUseResult);
      if (s_ && !s_.success) {
        n_ = null;
        break bb0;
      }
      let Fie = s_ ? s_.data : cg.toolUseResult;
      let lW =
        hp(Jr, "renderToolResultMessage")?.(Fie, filterOutHookProgressMessages(XA), {
          style: QA,
          theme: oE,
          tools: JA,
          verbose: ZA,
          isTranscriptMode: dd,
          isBriefOnly: tE,
          input: cd.toolUseByToolUseID.get(Mt)?.input,
          activeAgents: rE,
        }) ?? null;
      if (lW === null) {
        n_ = null;
        break bb0;
      }
      iW = Jr.userFacingName(void 0) === "";
      aW = Ml(eE, lW, Jr);
    }
    ((Xi[9] = rE),
      (Xi[10] = eE),
      (Xi[11] = tE),
      (Xi[12] = dd),
      (Xi[13] = cd),
      (Xi[14] = cg.toolUseResult),
      (Xi[15] = XA),
      (Xi[16] = QA),
      (Xi[17] = oE),
      (Xi[18] = Jr),
      (Xi[19] = Mt),
      (Xi[20] = JA),
      (Xi[21] = ZA),
      (Xi[22] = iW),
      (Xi[23] = aW),
      (Xi[24] = n_));
  } else ((iW = Xi[22]), (aW = Xi[23]), (n_ = Xi[24]));
  if (n_ !== EARLY_RETURN_SENTINEL) return n_;
  let sE = aW;
  const iE = iW ? void 0 : jie;
  let i_;
  if (Xi[25] !== Jr.name || Xi[26] !== nE)
    ((i_ =
      nE &&
      Jr.name !== AGENT_TOOL_NAME &&
      e(ToolResultRow, {
        height: 1,
        children: e(t, {
          dimColor: !0,
          children: "Allowed by auto mode classifier",
        }),
      })),
      (Xi[25] = Jr.name),
      (Xi[26] = nE),
      (Xi[27] = i_));
  else i_ = Xi[27];
  let a_;
  if (Xi[28] !== sE || Xi[29] !== iE || Xi[30] !== i_)
    ((a_ = r(o, { flexDirection: "column", width: iE, children: [sE, i_] })),
      (Xi[28] = sE),
      (Xi[29] = iE),
      (Xi[30] = i_),
      (Xi[31] = a_));
  else a_ = Xi[31];
  let u_;
  if (Xi[32] !== dd || Xi[33] !== cd || Xi[34] !== Mt)
    ((u_ = e(Yz, {
      children: e(xa, {
        hookEvent: "PostToolUse",
        lookups: cd,
        toolUseID: Mt,
        isTranscriptMode: dd,
      }),
    })),
      (Xi[32] = dd),
      (Xi[33] = cd),
      (Xi[34] = Mt),
      (Xi[35] = u_));
  else u_ = Xi[35];
  let uW;
  if (Xi[36] !== a_ || Xi[37] !== u_)
    ((uW = r(o, { flexDirection: "column", children: [a_, u_] })),
      (Xi[36] = a_),
      (Xi[37] = u_),
      (Xi[38] = uW));
  else uW = Xi[38];
  return uW;
}
F();
var mE = new Set([BRIEF_TOOL_NAME]);
function fg(m_, aE, d_) {
  let hW = _(8),
    fW = d_.toolUseByToolUseID.get(m_)?.name,
    Zie = useSession().host,
    lE = fW === void 0 ? void 0 : Zae(fW, Zie),
    pg;
  if (
    hW[0] !== lE ||
    hW[1] !== d_.toolUseByToolUseID ||
    hW[2] !== m_ ||
    hW[3] !== aE
  ) {
    bb0: {
      let Qi = d_.toolUseByToolUseID.get(m_);
      if (!Qi) {
        pg = null;
        break bb0;
      }
      let TW = findToolByName(aE, Qi.name) ?? lE;
      if (TW) {
        pg = { tool: TW, toolUse: Qi };
        break bb0;
      }
      const uE = (mE.has(Qi.name) ? findToolByName(getRegisteredTools() ?? [], Qi.name) : void 0) ?? void 0;
      let yW;
      if (hW[5] !== uE || hW[6] !== Qi)
        ((yW = { tool: uE, toolUse: Qi }),
          (hW[5] = uE),
          (hW[6] = Qi),
          (hW[7] = yW));
      else yW = hW[7];
      pg = yW;
    }
    ((hW[0] = lE),
      (hW[1] = d_.toolUseByToolUseID),
      (hW[2] = m_),
      (hW[3] = aE),
      (hW[4] = pg));
  } else pg = hW[4];
  return pg;
}
function Tg(fd) {
  let dae = _(3),
    p_ = fg(fd.param.tool_use_id, fd.tools, fd.lookups);
  if (!p_) {
    return null;
  }
  let RW;
  if (dae[0] !== fd || dae[1] !== p_)
    ((RW = e(T_, { ...fd, toolUse: p_ })),
      (dae[0] = fd),
      (dae[1] = p_),
      (dae[2] = RW));
  else RW = dae[2];
  return RW;
}
function T_(f_) {
  let MW = _(10),
    { param: gd, message: gg, toolUse: pae } = f_,
    Jl = gg.toolUseResult,
    g_ = gd.is_error === !0,
    h_ = pae.toolUse.name,
    kW,
    bW;
  if (MW[0] !== g_ || MW[1] !== Jl || MW[2] !== gd.tool_use_id || MW[3] !== h_)
    ((kW = () => ({
      requestId: gd.tool_use_id,
      props: {
        tool_use_id: gd.tool_use_id,
        toolName: h_,
        output: Jl,
        errored: g_,
      },
    })),
      (bW = [gd.tool_use_id, h_, Jl, g_]),
      (MW[0] = g_),
      (MW[1] = Jl),
      (MW[2] = gd.tool_use_id),
      (MW[3] = h_),
      (MW[4] = kW),
      (MW[5] = bW));
  else ((kW = MW[4]), (bW = MW[5]));
  let fae = La.useRenderInput("ToolResult", kW, bW),
    xW;
  if (MW[6] !== gg || MW[7] !== Jl || MW[8] !== f_)
    ((xW = (_W) =>
      e(y_, {
        ...f_,
        message:
          _W.props.output === Jl
            ? gg
            : { ...gg, toolUseResult: _W.props.output },
      })),
      (MW[6] = gg),
      (MW[7] = Jl),
      (MW[8] = f_),
      (MW[9] = xW));
  else xW = MW[9];
  return La.useRenderHook(fae, xW);
}
function y_(gae) {
  let hg = _(30),
    {
      param: on,
      message: cE,
      lookups: dE,
      progressMessagesForMessage: Fs,
      style: hd,
      tools: $s,
      verbose: Ws,
      width: pE,
      isTranscriptMode: qs,
      toolUse: Bo,
    } = gae,
    Zl;
  if (typeof on.content === "string" && JZe(on.content)) {
    let qt;
    if (hg[0] === MEMO_CACHE_SENTINEL) ((qt = e(bf, {})), (hg[0] = qt));
    else qt = hg[0];
    Zl = qt;
  } else if (
    (typeof on.content === "string" &&
      (on.content.startsWith(USER_REJECTED_TOOL_USE_MESSAGE) ||
        (on.content.startsWith(USER_REJECTED_TOOL_USE_PREFIX) &&
          Bo.tool != null &&
          hp(Bo.tool, "renderToolUseRejectedMessage") !== void 0))) ||
    on.content === gc ||
    on.content === _b
  ) {
    let qt;
    if (
      hg[1] !== qs ||
      hg[2] !== Fs ||
      hg[3] !== hd ||
      hg[4] !== Bo.tool ||
      hg[5] !== Bo.toolUse.input ||
      hg[6] !== $s ||
      hg[7] !== Ws
    )
      ((qt = e(mg, {
        input: Bo.toolUse.input,
        progressMessagesForMessage: Fs,
        tool: Bo.tool,
        tools: $s,
        style: hd,
        verbose: Ws,
        isTranscriptMode: qs,
      })),
        (hg[1] = qs),
        (hg[2] = Fs),
        (hg[3] = hd),
        (hg[4] = Bo.tool),
        (hg[5] = Bo.toolUse.input),
        (hg[6] = $s),
        (hg[7] = Ws),
        (hg[8] = qt));
    else qt = hg[8];
    Zl = qt;
  } else if (on.is_error) {
    let qt;
    if (
      hg[9] !== qs ||
      hg[10] !== on ||
      hg[11] !== Fs ||
      hg[12] !== Bo.tool ||
      hg[13] !== Bo.toolUse.input ||
      hg[14] !== $s ||
      hg[15] !== Ws
    )
      ((qt = e(ji, {
        progressMessagesForMessage: Fs,
        tool: Bo.tool,
        tools: $s,
        param: on,
        input: Bo.toolUse.input,
        verbose: Ws,
        isTranscriptMode: qs,
      })),
        (hg[9] = qs),
        (hg[10] = on),
        (hg[11] = Fs),
        (hg[12] = Bo.tool),
        (hg[13] = Bo.toolUse.input),
        (hg[14] = $s),
        (hg[15] = Ws),
        (hg[16] = qt));
    else qt = hg[16];
    Zl = qt;
  } else {
    let qt;
    if (
      hg[17] !== qs ||
      hg[18] !== dE ||
      hg[19] !== cE ||
      hg[20] !== Fs ||
      hg[21] !== hd ||
      hg[22] !== Bo.tool ||
      hg[23] !== Bo.toolUse.id ||
      hg[24] !== $s ||
      hg[25] !== Ws ||
      hg[26] !== pE
    )
      ((qt = e(dg, {
        message: cE,
        lookups: dE,
        toolUseID: Bo.toolUse.id,
        progressMessagesForMessage: Fs,
        style: hd,
        tool: Bo.tool,
        tools: $s,
        verbose: Ws,
        width: pE,
        isTranscriptMode: qs,
      })),
        (hg[17] = qs),
        (hg[18] = dE),
        (hg[19] = cE),
        (hg[20] = Fs),
        (hg[21] = hd),
        (hg[22] = Bo.tool),
        (hg[23] = Bo.toolUse.id),
        (hg[24] = $s),
        (hg[25] = Ws),
        (hg[26] = pE),
        (hg[27] = qt));
    else qt = hg[27];
    Zl = qt;
  }
  let qt;
  if (hg[28] !== Zl)
    ((qt = e(o, { flexDirection: "column", children: Zl })),
      (hg[28] = Zl),
      (hg[29] = qt));
  else qt = hg[29];
  return qt;
}
function BW(Cle) {
  return Cle.host;
}
var wg = import.meta.require("../../../01-核心基础设施/共享小工具-未细化/isNarrationSummaryBlock.adf7egmq.js").isNarrationSummaryBlock,
  Ug = import.meta.require(
    "../../../03-入口与运行时/会话UI(REPL)/AssistantNarrationSummaryMessage.kz8yw55j.js",
  ).AssistantNarrationSummaryMessage,
  Vs = null;
function FE(nle) {
  let to = _(145),
    {
      message: J,
      lookups: Vo,
      containerWidth: R_,
      addMargin: Ve,
      tools: Gt,
      commands: yg,
      verbose: Co,
      inProgressToolUseIDs: br,
      progressMessagesForMessage: Ji,
      shouldAnimate: zt,
      shouldShowDot: Rg,
      style: fE,
      isTranscriptMode: wo,
      onOpenRateLimitOptions: Mg,
      onRateLimitAutoQueueContinue: kg,
      isActiveCollapsedGroup: gE,
      isUserContinuation: SW,
      isSplitUserContinuation: PW,
      followsSpeakerLabel: CW,
      followsInboundLabel: wW,
      hasMetadataHeader: UW,
      latestBashOutputUUID: sle,
      disableDisplayOverride: bg,
    } = nle,
    hE = SW === void 0 ? !1 : SW,
    TE = PW === void 0 ? !1 : PW,
    yd = CW === void 0 ? !1 : CW,
    yE = wW === void 0 ? !1 : wW,
    Rd = UW === void 0 ? !1 : UW,
    ile = gi(),
    NW = jA(Co);
  switch (J.type) {
    case "attachment": {
      if (J.attachment.type === "queued_command" && pse(J.attachment.origin)) {
        let be;
        if (to[0] !== J.attachment.prompt)
          ((be = extractTextContent(J.attachment.prompt)),
            (to[0] = J.attachment.prompt),
            (to[1] = be));
        else be = to[1];
        let RE = be;
        const Qe = R_ ?? "100%";
        let kt;
        if (to[2] !== RE)
          ((kt = { text: RE, type: "text" }), (to[2] = RE), (to[3] = kt));
        else kt = to[3];
        let lr;
        if (to[4] !== J.attachment.origin)
          ((lr = hAt(J.attachment.origin)),
            (to[4] = J.attachment.origin),
            (to[5] = lr));
        else lr = to[5];
        let M_;
        if (
          to[6] !== Ve ||
          to[7] !== wo ||
          to[8] !== kt ||
          to[9] !== lr ||
          to[10] !== Co
        )
          ((M_ = e(Ql, {
            addMargin: Ve,
            param: kt,
            fromName: lr,
            verbose: Co,
            isTranscriptMode: wo,
          })),
            (to[6] = Ve),
            (to[7] = wo),
            (to[8] = kt),
            (to[9] = lr),
            (to[10] = Co),
            (to[11] = M_));
        else M_ = to[11];
        let AW;
        if (to[12] !== M_ || to[13] !== Qe)
          ((AW = e(o, { flexDirection: "column", width: Qe, children: M_ })),
            (to[12] = M_),
            (to[13] = Qe),
            (to[14] = AW));
        else AW = to[14];
        return AW;
      }
      const be = R_ ?? "100%";
      let Qe;
      if (
        to[15] !== Ve ||
        to[16] !== yd ||
        to[17] !== Rd ||
        to[18] !== wo ||
        to[19] !== J.attachment ||
        to[20] !== J.uuid ||
        to[21] !== Co
      )
        ((Qe = e(Cf, {
          addMargin: Ve,
          attachment: J.attachment,
          verbose: Co,
          isTranscriptMode: wo,
          hasMetadataHeader: Rd,
          followsSpeakerLabel: yd,
          messageId: J.uuid,
        })),
          (to[15] = Ve),
          (to[16] = yd),
          (to[17] = Rd),
          (to[18] = wo),
          (to[19] = J.attachment),
          (to[20] = J.uuid),
          (to[21] = Co),
          (to[22] = Qe));
      else Qe = to[22];
      let kt;
      if (to[23] !== be || to[24] !== Qe)
        ((kt = e(o, { flexDirection: "column", width: be, children: Qe })),
          (to[23] = be),
          (to[24] = Qe),
          (to[25] = kt));
      else kt = to[25];
      return kt;
    }
    case "assistant": {
      let be;
      if (
        to[26] !== Vo.firstTextBlockUuidByMessageID ||
        to[27] !== J.message.id
      )
        ((be = Vo.firstTextBlockUuidByMessageID.get(J.message.id)),
          (to[26] = Vo.firstTextBlockUuidByMessageID),
          (to[27] = J.message.id),
          (to[28] = be));
      else be = to[28];
      let Md = be;
      const Qe = R_ ?? "100%";
      let kt;
      if (
        to[29] !== Ve ||
        to[30] !== yg ||
        to[31] !== bg ||
        to[32] !== Md ||
        to[33] !== br ||
        to[34] !== wo ||
        to[35] !== Vo ||
        to[36] !== J.advisorModel ||
        to[37] !== J.isApiErrorMessage ||
        to[38] !== J.message.content ||
        to[39] !== J.message.id ||
        to[40] !== J.message.model ||
        to[41] !== J.uuid ||
        to[42] !== Mg ||
        to[43] !== kg ||
        to[44] !== Ji ||
        to[45] !== zt ||
        to[46] !== Rg ||
        to[47] !== Gt ||
        to[48] !== Co
      ) {
        let lr;
        if (
          to[50] !== Ve ||
          to[51] !== yg ||
          to[52] !== bg ||
          to[53] !== Md ||
          to[54] !== br ||
          to[55] !== wo ||
          to[56] !== Vo ||
          to[57] !== J.advisorModel ||
          to[58] !== J.isApiErrorMessage ||
          to[59] !== J.message.id ||
          to[60] !== J.message.model ||
          to[61] !== J.uuid ||
          to[62] !== Mg ||
          to[63] !== kg ||
          to[64] !== Ji ||
          to[65] !== zt ||
          to[66] !== Rg ||
          to[67] !== Gt ||
          to[68] !== Co
        )
          ((lr = (ale, lle) =>
            e(
              N_,
              {
                param: ale,
                model: J.message.model,
                addMargin: Ve,
                tools: Gt,
                commands: yg,
                verbose: Co,
                inProgressToolUseIDs: br,
                progressMessagesForMessage: Ji,
                shouldAnimate: zt,
                shouldShowDot: Rg,
                inProgressToolCallCount: br.size,
                isTranscriptMode: wo,
                lookups: Vo,
                onOpenRateLimitOptions: Mg,
                onRateLimitAutoQueueContinue: kg,
                advisorModel: J.advisorModel,
                isApiError: J.isApiErrorMessage === !0,
                apiMessageId: bg ? void 0 : J.message.id,
                messageUuid: J.uuid,
                isFirstTextBlock: Md === void 0 || Md === J.uuid,
              },
              lle,
            )),
            (to[50] = Ve),
            (to[51] = yg),
            (to[52] = bg),
            (to[53] = Md),
            (to[54] = br),
            (to[55] = wo),
            (to[56] = Vo),
            (to[57] = J.advisorModel),
            (to[58] = J.isApiErrorMessage),
            (to[59] = J.message.id),
            (to[60] = J.message.model),
            (to[61] = J.uuid),
            (to[62] = Mg),
            (to[63] = kg),
            (to[64] = Ji),
            (to[65] = zt),
            (to[66] = Rg),
            (to[67] = Gt),
            (to[68] = Co),
            (to[69] = lr));
        else lr = to[69];
        kt = J.message.content.map(lr);
        ((to[29] = Ve),
          (to[30] = yg),
          (to[31] = bg),
          (to[32] = Md),
          (to[33] = br),
          (to[34] = wo),
          (to[35] = Vo),
          (to[36] = J.advisorModel),
          (to[37] = J.isApiErrorMessage),
          (to[38] = J.message.content),
          (to[39] = J.message.id),
          (to[40] = J.message.model),
          (to[41] = J.uuid),
          (to[42] = Mg),
          (to[43] = kg),
          (to[44] = Ji),
          (to[45] = zt),
          (to[46] = Rg),
          (to[47] = Gt),
          (to[48] = Co),
          (to[49] = kt));
      } else kt = to[49];
      let lr;
      if (to[70] !== Qe || to[71] !== kt)
        ((lr = e(o, { flexDirection: "column", width: Qe, children: kt })),
          (to[70] = Qe),
          (to[71] = kt),
          (to[72] = lr));
      else lr = to[72];
      return lr;
    }
    case "user": {
      if (J.isCompactSummary) {
        const be = wo ? "transcript" : "prompt";
        let Qe;
        if (to[73] !== J || to[74] !== be)
          ((Qe = e(jd, { message: J, screen: be })),
            (to[73] = J),
            (to[74] = be),
            (to[75] = Qe));
        else Qe = to[75];
        return Qe;
      }
      let kd;
      if (to[76] !== J.imagePasteIds || to[77] !== J.message.content) {
        kd = [];
        let k_ = 0;
        for (const mle of J.message.content) {
          if (mle.type === "image") {
            let cle = J.imagePasteIds?.[k_];
            (k_++, kd.push(cle ?? k_));
          } else kd.push(k_);
        }
        ((to[76] = J.imagePasteIds),
          (to[77] = J.message.content),
          (to[78] = kd));
      } else kd = to[78];
      let ME = sle === J.uuid;
      const be = R_ ?? "100%";
      let Qe;
      if (
        to[79] !== Ve ||
        to[80] !== yE ||
        to[81] !== yd ||
        to[82] !== Rd ||
        to[83] !== kd ||
        to[84] !== TE ||
        to[85] !== wo ||
        to[86] !== hE ||
        to[87] !== Vo ||
        to[88] !== J ||
        to[89] !== Ji ||
        to[90] !== fE ||
        to[91] !== Gt ||
        to[92] !== Co
      )
        ((Qe = J.message.content.map((dle, EW) =>
          e(
            U_,
            {
              message: J,
              addMargin: Ve,
              tools: Gt,
              progressMessagesForMessage: Ji,
              param: dle,
              style: fE,
              verbose: Co,
              imageIndex: kd[EW],
              isUserContinuation: hE,
              isSplitUserContinuation: TE,
              followsSpeakerLabel: yd,
              followsInboundLabel: yE,
              hasMetadataHeader: Rd,
              lookups: Vo,
              isTranscriptMode: wo,
            },
            EW,
          ),
        )),
          (to[79] = Ve),
          (to[80] = yE),
          (to[81] = yd),
          (to[82] = Rd),
          (to[83] = kd),
          (to[84] = TE),
          (to[85] = wo),
          (to[86] = hE),
          (to[87] = Vo),
          (to[88] = J),
          (to[89] = Ji),
          (to[90] = fE),
          (to[91] = Gt),
          (to[92] = Co),
          (to[93] = Qe));
      else Qe = to[93];
      let kt;
      if (to[94] !== be || to[95] !== Qe)
        ((kt = e(o, { flexDirection: "column", width: be, children: Qe })),
          (to[94] = be),
          (to[95] = Qe),
          (to[96] = kt));
      else kt = to[96];
      let b_ = kt;
      let lr;
      if (to[97] !== b_ || to[98] !== ME)
        ((lr = ME ? e(VerboseToolResultProvider, { children: b_ }) : b_),
          (to[97] = b_),
          (to[98] = ME),
          (to[99] = lr));
      else lr = to[99];
      return lr;
    }
    case "system": {
      if (J.subtype === "compact_boundary") {
        if (ile) {
          return null;
        }
        if (NW && J.compactMetadata) {
          let be;
          if (to[100] !== J.compactMetadata)
            ((be = e(np, { compactMetadata: J.compactMetadata })),
              (to[100] = J.compactMetadata),
              (to[101] = be));
          else be = to[101];
          return be;
        }
        let be;
        if (to[102] === MEMO_CACHE_SENTINEL) ((be = e(Vf, {})), (to[102] = be));
        else be = to[102];
        return be;
      }
      if (J.subtype === "microcompact_boundary") {
        return null;
      }
      if (NW) {
        let be;
        if (to[103] !== J) ((be = _h(J)), (to[103] = J), (to[104] = be));
        else be = to[104];
        let xg = be;
        if (xg.kind === "hidden") {
          return null;
        }
        if (xg.kind === "line") {
          let Qe;
          if (to[105] !== Ve || to[106] !== xg.row)
            ((Qe = e(ao, { row: xg.row, addMargin: Ve })),
              (to[105] = Ve),
              (to[106] = xg.row),
              (to[107] = Qe));
          else Qe = to[107];
          return Qe;
        }
      }
      if (J.subtype === "read_divider") {
        let be;
        if (to[108] !== J.content)
          ((be = e(o, {
            marginTop: 1,
            width: "100%",
            children: e(Divider, { title: J.content, color: "inactive" }),
          })),
            (to[108] = J.content),
            (to[109] = be));
        else be = to[109];
        return be;
      }
      if (J.subtype === "local_command") {
        let be;
        if (to[110] !== J.content)
          ((be = { type: "text", text: J.content }),
            (to[110] = J.content),
            (to[111] = be));
        else be = to[111];
        let Qe;
        if (
          to[112] !== Ve ||
          to[113] !== wo ||
          to[114] !== J.uuid ||
          to[115] !== be ||
          to[116] !== Co
        )
          ((Qe = e(Jz, {
            addMargin: Ve,
            param: be,
            verbose: Co,
            isTranscriptMode: wo,
            messageId: J.uuid,
          })),
            (to[112] = Ve),
            (to[113] = wo),
            (to[114] = J.uuid),
            (to[115] = be),
            (to[116] = Co),
            (to[117] = Qe));
        else Qe = to[117];
        return Qe;
      }
      let be;
      if (to[118] !== Ve || to[119] !== wo || to[120] !== J || to[121] !== Co)
        ((be = e(ig, {
          message: J,
          addMargin: Ve,
          verbose: Co,
          isTranscriptMode: wo,
        })),
          (to[118] = Ve),
          (to[119] = wo),
          (to[120] = J),
          (to[121] = Co),
          (to[122] = be));
      else be = to[122];
      return be;
    }
    case "grouped_tool_use": {
      let be;
      if (
        to[123] !== Ve ||
        to[124] !== br ||
        to[125] !== Vo ||
        to[126] !== J ||
        to[127] !== zt ||
        to[128] !== Gt
      )
        ((be = e($b, {
          message: J,
          tools: Gt,
          lookups: Vo,
          inProgressToolUseIDs: br,
          shouldAnimate: zt,
          addMargin: Ve,
        })),
          (to[123] = Ve),
          (to[124] = br),
          (to[125] = Vo),
          (to[126] = J),
          (to[127] = zt),
          (to[128] = Gt),
          (to[129] = be));
      else be = to[129];
      return be;
    }
    case "collapsed_read_search": {
      const be = Co || wo;
      let Qe;
      if (
        to[130] !== Ve ||
        to[131] !== br ||
        to[132] !== gE ||
        to[133] !== Vo ||
        to[134] !== J ||
        to[135] !== zt ||
        to[136] !== be ||
        to[137] !== Gt
      )
        ((Qe = e(OffscreenFrozenContent, {
          children: e(Yf, {
            message: J,
            inProgressToolUseIDs: br,
            shouldAnimate: zt,
            verbose: be,
            tools: Gt,
            lookups: Vo,
            isActiveGroup: gE,
            addMargin: Ve,
          }),
        })),
          (to[130] = Ve),
          (to[131] = br),
          (to[132] = gE),
          (to[133] = Vo),
          (to[134] = J),
          (to[135] = zt),
          (to[136] = be),
          (to[137] = Gt),
          (to[138] = Qe));
      else Qe = to[138];
      return Qe;
    }
    case "work_segment": {
      let be;
      if (to[139] !== J || to[140] !== zt)
        ((be = e(w_, { message: J, shouldAnimate: zt })),
          (to[139] = J),
          (to[140] = zt),
          (to[141] = be));
      else be = to[141];
      return be;
    }
    case "speaker_label": {
      let be;
      if (to[142] !== J.speaker || to[143] !== J.timestamp)
        ((be =
          Vs === null
            ? null
            : e(o, {
                marginTop: 1,
                children: e(Vs.SpeakerLabel, {
                  speaker: J.speaker,
                  timestamp: J.timestamp || void 0,
                }),
              })),
          (to[142] = J.speaker),
          (to[143] = J.timestamp),
          (to[144] = be));
      else be = to[144];
      return be;
    }
  }
}
function w_(ple) {
  let Tle = _(3),
    { message: kE, shouldAnimate: fle } = ple,
    gle = useReducedMotion(),
    hle = tn();
  if (Vs === null) {
    return null;
  }
  const bE = gle || hle || !fle;
  let LW;
  if (Tle[0] !== kE || Tle[1] !== bE)
    ((LW = e(Vs.WorkSegmentMessage, { message: kE, reducedMotion: bE })),
      (Tle[0] = kE),
      (Tle[1] = bE),
      (Tle[2] = LW));
  else LW = Tle[2];
  return LW;
}
function U_(yle) {
  let _g = _(35),
    {
      message: Uo,
      addMargin: eu,
      tools: xE,
      progressMessagesForMessage: _E,
      param: En,
      style: SE,
      verbose: Hs,
      imageIndex: PE,
      isUserContinuation: Mle,
      isSplitUserContinuation: kle,
      followsSpeakerLabel: x_,
      followsInboundLabel: S_,
      hasMetadataHeader: ble,
      lookups: CE,
      isTranscriptMode: Gs,
    } = yle,
    { columns: xle } = useTerminalSize();
  switch (En.type) {
    case "text": {
      if (pse(Uo.origin)) {
        let bt;
        if (_g[0] !== Uo.origin)
          ((bt = hAt(Uo.origin)), (_g[0] = Uo.origin), (_g[1] = bt));
        else bt = _g[1];
        const Ln = x_ || S_;
        let Sg;
        if (
          _g[2] !== eu ||
          _g[3] !== Gs ||
          _g[4] !== En ||
          _g[5] !== bt ||
          _g[6] !== Ln ||
          _g[7] !== Hs
        )
          ((Sg = e(Ql, {
            addMargin: eu,
            param: En,
            fromName: bt,
            verbose: Hs,
            isTranscriptMode: Gs,
            followsSpeakerLabel: Ln,
          })),
            (_g[2] = eu),
            (_g[3] = Gs),
            (_g[4] = En),
            (_g[5] = bt),
            (_g[6] = Ln),
            (_g[7] = Hs),
            (_g[8] = Sg));
        else Sg = _g[8];
        return Sg;
      }
      let bt;
      if (
        _g[9] !== eu ||
        _g[10] !== S_ ||
        _g[11] !== x_ ||
        _g[12] !== Gs ||
        _g[13] !== Uo.origin ||
        _g[14] !== Uo.planContent ||
        _g[15] !== Uo.taskDelivery ||
        _g[16] !== Uo.timestamp ||
        _g[17] !== Uo.uuid ||
        _g[18] !== En ||
        _g[19] !== Hs
      )
        ((bt = e(Jz, {
          addMargin: eu,
          param: En,
          verbose: Hs,
          planContent: Uo.planContent,
          isTranscriptMode: Gs,
          timestamp: Uo.timestamp,
          messageId: Uo.uuid,
          origin: Uo.origin,
          taskDelivery: Uo.taskDelivery,
          followsSpeakerLabel: x_,
          followsInboundLabel: S_,
        })),
          (_g[9] = eu),
          (_g[10] = S_),
          (_g[11] = x_),
          (_g[12] = Gs),
          (_g[13] = Uo.origin),
          (_g[14] = Uo.planContent),
          (_g[15] = Uo.taskDelivery),
          (_g[16] = Uo.timestamp),
          (_g[17] = Uo.uuid),
          (_g[18] = En),
          (_g[19] = Hs),
          (_g[20] = bt));
      else bt = _g[20];
      return bt;
    }
    case "image": {
      const bt = eu && !Mle;
      const Ln = ble ? !kle : void 0;
      let Sg;
      if (_g[21] !== PE || _g[22] !== bt || _g[23] !== Ln)
        ((Sg = e(xi, { imageId: PE, addMargin: bt, startsUserTurn: Ln })),
          (_g[21] = PE),
          (_g[22] = bt),
          (_g[23] = Ln),
          (_g[24] = Sg));
      else Sg = _g[24];
      return Sg;
    }
    case "tool_result": {
      const bt = xle - 5;
      let Ln;
      if (
        _g[25] !== Gs ||
        _g[26] !== CE ||
        _g[27] !== Uo ||
        _g[28] !== En ||
        _g[29] !== _E ||
        _g[30] !== SE ||
        _g[31] !== bt ||
        _g[32] !== xE ||
        _g[33] !== Hs
      )
        ((Ln = e(Tg, {
          param: En,
          message: Uo,
          lookups: CE,
          progressMessagesForMessage: _E,
          style: SE,
          tools: xE,
          verbose: Hs,
          width: bt,
          isTranscriptMode: Gs,
        })),
          (_g[25] = Gs),
          (_g[26] = CE),
          (_g[27] = Uo),
          (_g[28] = En),
          (_g[29] = _E),
          (_g[30] = SE),
          (_g[31] = bt),
          (_g[32] = xE),
          (_g[33] = Hs),
          (_g[34] = Ln));
      else Ln = _g[34];
      return Ln;
    }
    default: {
      return;
    }
  }
}
var vE = new Set(["tool_search_tool_regex", "tool_search_tool_bm25"]);
function IE(l) {
  return "name" in l && isSupportedServerToolName(l.name) ? l.name : "non-allowlisted";
}
function DE(l) {
  let f = "type" in l ? l.type : void 0;
  if (typeof f !== "string") return "non-allowlisted (non-string)";
  return isKnownContentBlockType(f) ? f : `non-allowlisted (${f.length} chars)`;
}
function IW(l) {
  if ("id" in l && typeof l.id === "string") return `${l.type}:${l.id}`;
  if ("tool_use_id" in l && typeof l.tool_use_id === "string")
    return `${l.type}:${l.tool_use_id}`;
  try {
    return `${l.type}:${Bun.hash(b(l)).toString(36)}`;
  } catch {
    return `${l.type}:unserializable`;
  }
}
function Ng(l, f, g) {
  if (!claimRegistriesByHost.of(l).claim(`unrenderable_block:${IW(f)}`)) return;
  logError(g);
}
function N_(_le) {
  let Ys = _(56),
    {
      param: Je,
      model: wE,
      addMargin: Io,
      tools: UE,
      commands: NE,
      verbose: at,
      inProgressToolUseIDs: AE,
      progressMessagesForMessage: EE,
      shouldAnimate: bd,
      shouldShowDot: xr,
      inProgressToolCallCount: LE,
      isTranscriptMode: zs,
      lookups: Ks,
      onOpenRateLimitOptions: xd,
      onRateLimitAutoQueueContinue: _d,
      advisorModel: OE,
      isApiError: Sd,
      apiMessageId: P_,
      messageUuid: Cd,
      isFirstTextBlock: Sle,
    } = _le,
    OW = useSession(BW),
    vW;
  if (Ys[0] !== P_ || Ys[1] !== Je.type)
    ((vW = (Ple) =>
      Je.type === "text" && P_ !== void 0
        ? Ple.displayedMessageContent[P_]
        : void 0),
      (Ys[0] = P_),
      (Ys[1] = Je.type),
      (Ys[2] = vW));
  else vW = Ys[2];
  let C_ = useAppStateSelectorUnchecked(vW);
  if (isModelFallbackBlock(Je)) {
    return null;
  }
  switch (Je.type) {
    case "tool_use": {
      let _o;
      if (
        Ys[3] !== Io ||
        Ys[4] !== NE ||
        Ys[5] !== LE ||
        Ys[6] !== AE ||
        Ys[7] !== zs ||
        Ys[8] !== Ks ||
        Ys[9] !== Je ||
        Ys[10] !== EE ||
        Ys[11] !== bd ||
        Ys[12] !== xr ||
        Ys[13] !== UE ||
        Ys[14] !== at
      )
        ((_o = e(Ep, {
          param: Je,
          addMargin: Io,
          tools: UE,
          commands: NE,
          verbose: at,
          inProgressToolUseIDs: AE,
          progressMessagesForMessage: EE,
          shouldAnimate: bd,
          shouldShowDot: xr,
          inProgressToolCallCount: LE,
          lookups: Ks,
          isTranscriptMode: zs,
        })),
          (Ys[3] = Io),
          (Ys[4] = NE),
          (Ys[5] = LE),
          (Ys[6] = AE),
          (Ys[7] = zs),
          (Ys[8] = Ks),
          (Ys[9] = Je),
          (Ys[10] = EE),
          (Ys[11] = bd),
          (Ys[12] = xr),
          (Ys[13] = UE),
          (Ys[14] = at),
          (Ys[15] = _o));
      else _o = Ys[15];
      return _o;
    }
    case "text": {
      if (C_ !== void 0 && !at) {
        if (!Sle) {
          return null;
        }
        let _o;
        if (Ys[16] !== C_)
          ((_o = { type: "text", text: C_ }), (Ys[16] = C_), (Ys[17] = _o));
        else _o = Ys[17];
        let Cg;
        if (
          Ys[18] !== Io ||
          Ys[19] !== Sd ||
          Ys[20] !== Cd ||
          Ys[21] !== xd ||
          Ys[22] !== _d ||
          Ys[23] !== xr ||
          Ys[24] !== _o ||
          Ys[25] !== at
        )
          ((Cg = e(ya, {
            param: _o,
            addMargin: Io,
            shouldShowDot: xr,
            verbose: at,
            messageId: Cd,
            isApiError: Sd,
            onOpenRateLimitOptions: xd,
            onRateLimitAutoQueueContinue: _d,
          })),
            (Ys[18] = Io),
            (Ys[19] = Sd),
            (Ys[20] = Cd),
            (Ys[21] = xd),
            (Ys[22] = _d),
            (Ys[23] = xr),
            (Ys[24] = _o),
            (Ys[25] = at),
            (Ys[26] = Cg));
        else Cg = Ys[26];
        return Cg;
      }
      let _o;
      if (
        Ys[27] !== Io ||
        Ys[28] !== Sd ||
        Ys[29] !== Cd ||
        Ys[30] !== xd ||
        Ys[31] !== _d ||
        Ys[32] !== Je ||
        Ys[33] !== xr ||
        Ys[34] !== at
      )
        ((_o = e(ya, {
          param: Je,
          addMargin: Io,
          shouldShowDot: xr,
          verbose: at,
          messageId: Cd,
          isApiError: Sd,
          onOpenRateLimitOptions: xd,
          onRateLimitAutoQueueContinue: _d,
        })),
          (Ys[27] = Io),
          (Ys[28] = Sd),
          (Ys[29] = Cd),
          (Ys[30] = xd),
          (Ys[31] = _d),
          (Ys[32] = Je),
          (Ys[33] = xr),
          (Ys[34] = at),
          (Ys[35] = _o));
      else _o = Ys[35];
      return _o;
    }
    case "redacted_thinking": {
      if (!zs && !at) {
        return null;
      }
      let _o;
      if (Ys[36] !== Io)
        ((_o = e($d, { addMargin: Io })), (Ys[36] = Io), (Ys[37] = _o));
      else _o = Ys[37];
      return _o;
    }
    case "thinking": {
      if (wg !== null && Ug !== null && wg(Je)) {
        let _o;
        if (Ys[38] !== Io || Ys[39] !== wE || Ys[40] !== Je || Ys[41] !== xr)
          ((_o = e(Ug, {
            param: Je,
            model: wE,
            addMargin: Io,
            shouldShowDot: xr,
          })),
            (Ys[38] = Io),
            (Ys[39] = wE),
            (Ys[40] = Je),
            (Ys[41] = xr),
            (Ys[42] = _o));
        else _o = Ys[42];
        return _o;
      }
      if (!zs && !at) {
        return null;
      }
      let _o;
      if (Ys[43] !== Io || Ys[44] !== zs || Ys[45] !== Je || Ys[46] !== at)
        ((_o = e(ai, {
          addMargin: Io,
          param: Je,
          isTranscriptMode: zs,
          verbose: at,
        })),
          (Ys[43] = Io),
          (Ys[44] = zs),
          (Ys[45] = Je),
          (Ys[46] = at),
          (Ys[47] = _o));
      else _o = Ys[47];
      return _o;
    }
    case "server_tool_use":
    case "advisor_tool_result": {
      if (Je.type !== "server_tool_use" || Je.name === "advisor") {
        const _o = at || zs;
        let Cg;
        if (
          Ys[48] !== Io ||
          Ys[49] !== OE ||
          Ys[50] !== Ks.erroredToolUseIDs ||
          Ys[51] !== Ks.resolvedToolUseIDs ||
          Ys[52] !== Je ||
          Ys[53] !== bd ||
          Ys[54] !== _o
        )
          ((Cg = e(Fd, {
            block: Je,
            addMargin: Io,
            resolvedToolUseIDs: Ks.resolvedToolUseIDs,
            erroredToolUseIDs: Ks.erroredToolUseIDs,
            shouldAnimate: bd,
            verbose: _o,
            advisorModel: OE,
          })),
            (Ys[48] = Io),
            (Ys[49] = OE),
            (Ys[50] = Ks.erroredToolUseIDs),
            (Ys[51] = Ks.resolvedToolUseIDs),
            (Ys[52] = Je),
            (Ys[53] = bd),
            (Ys[54] = _o),
            (Ys[55] = Cg));
        else Cg = Ys[55];
        return Cg;
      }
      if (vE.has(Je.name)) {
        return null;
      }
      return (
        Ng(
          OW,
          Je,
          Error(`Unable to render server tool block: ${Je.type} (${IE(Je)})`),
        ),
        null
      );
    }
    case "tool_search_tool_result": {
      return null;
    }
    default: {
      return (
        Ng(OW, Je, Error(`Unable to render message type: ${DE(Je)}`)),
        null
      );
    }
  }
}
function DW(l, f) {
  if (l.message.uuid !== f.message.uuid) return !1;
  if (l.verbose !== f.verbose) return !1;
  let g = l.latestBashOutputUUID === l.message.uuid,
    T = f.latestBashOutputUUID === f.message.uuid;
  if (g !== T) return !1;
  if (l.isTranscriptMode !== f.isTranscriptMode) return !1;
  if (
    l.isUserContinuation !== f.isUserContinuation ||
    l.isSplitUserContinuation !== f.isSplitUserContinuation ||
    l.followsSpeakerLabel !== f.followsSpeakerLabel ||
    l.followsInboundLabel !== f.followsInboundLabel ||
    l.hasMetadataHeader !== f.hasMetadataHeader
  )
    return !1;
  if (l.message.type === "work_segment" && l.message !== f.message) return !1;
  if (l.containerWidth !== f.containerWidth) return !1;
  if (l.isStatic && f.isStatic) {
    let y =
        l.message.type === "system" && l.message.subtype === "turn_duration"
          ? l.message.briefHiddenCount
          : void 0,
      R =
        f.message.type === "system" && f.message.subtype === "turn_duration"
          ? f.message.briefHiddenCount
          : void 0;
    return y === R;
  }
  return !1;
}
var VL = Yl(FE, DW);
function rq(mue, GW) {
  return e(
    o,
    {
      paddingLeft: 2,
      marginTop: GW === 0 ? 0 : 1,
      children: e(js, { children: mue.text }),
    },
    GW,
  );
}
function nq(pue) {
  return Wo(pue.data);
}
function sq(fue) {
  return fue.data;
}
function iq(YW) {
  if (!Wo(YW.data)) {
    return !1;
  }
  let VW = YW.data.message;
  if (VW.type === "user" && VW.toolUseResult === void 0) {
    return !1;
  }
  return !0;
}
var HE = 3;
function Wo(l) {
  if (!("message" in l)) return !1;
  let f = l.message;
  return f != null && typeof f === "object" && "type" in f;
}
function YE(l) {
  let f = l.data.message.message.content[0];
  return f?.type === "tool_use" || f?.type === "tool_result";
}
function VE(l, f, g) {
  if (!Wo(l.data)) return null;
  let T = l.data.message;
  if (T.type === "assistant") return getToolUseCollapseState(T.message.content[0], f);
  if (T.type === "user") {
    let y = T.message.content[0];
    if (y?.type === "tool_result") {
      let R = g.get(y.tool_use_id);
      if (R) return getToolUseCollapseState(R, f);
    }
  }
  return null;
}
function XW(l, f, g) {
  return l
    .filter((P) => Wo(P.data) && P.data.message.type !== "user")
    .map((P) => ({ type: "original", message: P }));
  function R(P) {
    if (y && (y.searchCount > 0 || y.readCount > 0 || y.replCount > 0))
      T.push({
        type: "summary",
        searchCount: y.searchCount,
        readCount: y.readCount,
        replCount: y.replCount,
        uuid: `summary-${y.startUuid}`,
        isActive: P,
      });
    y = null;
  }
}
var QW = 9,
  JW = 7;
function hye(lue) {
  let FW = _(3),
    { prompt: $E, dim: jW } = lue;
  jW === void 0 ? !1 : jW;
  let $W;
  if (FW[0] === MEMO_CACHE_SENTINEL)
    (($W = e(t, { color: "success", bold: !0, children: "Prompt:" })),
      (FW[0] = $W));
  else $W = FW[0];
  let WW;
  if (FW[1] !== $E)
    ((WW = r(o, {
      flexDirection: "column",
      children: [
        $W,
        e(o, { paddingLeft: 2, children: e(js, { children: $E }) }),
      ],
    })),
      (FW[1] = $E),
      (FW[2] = WW));
  else WW = FW[2];
  return WW;
}
function _We(uue) {
  let qE = _(5),
    { content: WE } = uue,
    qW;
  if (qE[0] === MEMO_CACHE_SENTINEL)
    ((qW = e(t, { color: "success", bold: !0, children: "Response:" })),
      (qE[0] = qW));
  else qW = qE[0];
  let A_;
  if (qE[1] !== WE) ((A_ = WE.map(rq)), (qE[1] = WE), (qE[2] = A_));
  else A_ = qE[2];
  let HW;
  if (qE[3] !== A_)
    ((HW = r(o, { flexDirection: "column", children: [qW, A_] })),
      (qE[3] = A_),
      (qE[4] = HW));
  else HW = qE[4];
  return HW;
}
function XE(cue) {
  let E_ = _(15),
    { progressMessages: Ud, tools: Eg, verbose: Lg } = cue,
    zW;
  if (E_[0] !== Ud)
    ((zW = collectToolUseLookupsWithInProgress(Ud.filter(nq).map(sq))), (E_[0] = Ud), (E_[1] = zW));
  else zW = E_[1];
  let { lookups: Og, inProgressToolUseIDs: vg } = zW,
    L_;
  if (
    E_[2] !== Og ||
    E_[3] !== vg ||
    E_[4] !== Ud ||
    E_[5] !== Eg ||
    E_[6] !== Lg
  ) {
    let due = Ud.filter(iq);
    let Ig;
    if (E_[8] !== Og || E_[9] !== vg || E_[10] !== Eg || E_[11] !== Lg)
      ((Ig = (KW) =>
        e(
          ToolResultRow,
          {
            height: 1,
            children: e(VL, {
              message: KW.data.message,
              lookups: Og,
              addMargin: !1,
              tools: Eg,
              commands: [],
              verbose: Lg,
              inProgressToolUseIDs: vg,
              progressMessagesForMessage: [],
              shouldAnimate: !1,
              shouldShowDot: !1,
              isTranscriptMode: !1,
              isStatic: !0,
            }),
          },
          KW.uuid,
        )),
        (E_[8] = Og),
        (E_[9] = vg),
        (E_[10] = Eg),
        (E_[11] = Lg),
        (E_[12] = Ig));
    else Ig = E_[12];
    L_ = due.map(Ig);
    ((E_[2] = Og),
      (E_[3] = vg),
      (E_[4] = Ud),
      (E_[5] = Eg),
      (E_[6] = Lg),
      (E_[7] = L_));
  } else L_ = E_[7];
  let Ig;
  if (E_[13] !== L_)
    ((Ig = e(N, { children: L_ })), (E_[13] = L_), (E_[14] = Ig));
  else Ig = E_[14];
  return Ig;
}
function b$n(
  l,
  f,
  {
    tools: g,
    verbose: T,
    theme: y,
    isTranscriptMode: R = !1,
    input: k,
    activeAgents: S,
  },
) {
  let P = l;
  if (P.status === "remote_launched")
    return e(o, {
      flexDirection: "column",
      children: e(ToolResultRow, {
        height: 1,
        children: r(t, {
          children: [
            "Cloud agent launched",
            " ",
            r(t, {
              dimColor: !0,
              children: ["\xB7 ", P.taskId, " \xB7 ", P.sessionUrl],
            }),
          ],
        }),
      }),
    });
  if (l.status === "async_launched") {
    let { prompt: ce } = l;
    return r(o, {
      flexDirection: "column",
      children: [
        e(ToolResultRow, {
          height: 1,
          children: r(t, {
            children: [
              !R && isBuiltInWebFetchAgentProgress(f, S, isBuiltInWebFetchAgentToolInput(k, S))
                ? "Fetching in background"
                : "Backgrounded agent",
              !R &&
                r(t, {
                  dimColor: !0,
                  children: [
                    " (",
                    r(DotSeparatedList, {
                      children: [
                        e(KeybindingHint, { chord: "down", action: "manage" }),
                        ce &&
                          e(ActionKeybindingHint, {
                            action: "app:toggleTranscript",
                            context: "Global",
                            fallback: "ctrl+o",
                            description: "expand",
                          }),
                      ],
                    }),
                    ")",
                  ],
                }),
            ],
          }),
        }),
        R && ce && e(ToolResultRow, { children: e(hye, { prompt: ce, theme: y }) }),
      ],
    });
  }
  if (l.status !== "completed") return null;
  if (!R && isBuiltInWebFetchAgentProgress(f, S, isBuiltInWebFetchAgentType(l.agentType, S))) {
    let { report: ce } = parseReportWithHarnessNotes(l.content),
      ie = ce.reduce((ye, Ze) => ye + Buffer.byteLength(Ze.text), 0),
      Oe = e(ReceivedBytesStatus, { bytes: ie });
    return T
      ? r(o, {
          flexDirection: "column",
          children: [
            Oe,
            e(o, {
              flexDirection: "column",
              children: e(t, {
                children: ce.map((ye) => ye.text).join(`
`),
              }),
            }),
          ],
        })
      : Oe;
  }
  let {
      totalDurationMs: A,
      totalToolUseCount: O,
      totalTokens: I,
      usage: B,
      content: K,
      prompt: W,
    } = l,
    de = `Done (${[O === 1 ? "1 tool use" : `${O} tool uses`, formatNumber(I) + " tokens", formatDuration(A)].join(" \xB7 ")})`,
    Le = createAssistantMessage({
      content: de,
      usage: {
        ...B,
        output_tokens_details:
          typeof B.output_tokens_details?.thinking_tokens === "number"
            ? { thinking_tokens: B.output_tokens_details.thinking_tokens }
            : null,
        inference_geo: null,
        iterations: null,
        speed: null,
        service_tier:
          B.service_tier === "standard" ||
          B.service_tier === "priority" ||
          B.service_tier === "batch"
            ? B.service_tier
            : null,
      },
    });
  return r(o, {
    flexDirection: "column",
    children: [
      R && W && e(ToolResultRow, { children: e(hye, { prompt: W, theme: y }) }),
      R
        ? e(ExpandedTranscriptProvider, {
            children: e(XE, { progressMessages: f, tools: g, verbose: T }),
          })
        : null,
      R &&
        K &&
        K.length > 0 &&
        e(ToolResultRow, { children: e(_We, { content: K, theme: y }) }),
      e(ToolResultRow, {
        height: 1,
        children: e(VL, {
          message: Le,
          lookups: EMPTY_TOOL_USE_LOOKUPS,
          addMargin: !1,
          tools: g,
          commands: [],
          verbose: T,
          inProgressToolUseIDs: new Set(),
          progressMessagesForMessage: [],
          shouldAnimate: !1,
          shouldShowDot: !1,
          isTranscriptMode: !1,
          isStatic: !0,
        }),
      }),
      !R && r(t, { dimColor: !0, children: ["  ", e(TranscriptExpandHint, {})] }),
    ],
  });
}
function rgr(l, f) {
  let { description: g, prompt: T, subagent_type: y } = l;
  if (!g || !T) return null;
  if (!f.isTranscriptMode && isBuiltInWebFetchAgentType(y, f.activeAgents)) {
    let R = Skn(T) ?? Skn(g);
    if (R !== void 0) return WebFetchTool.renderToolUseMessage({ url: R }, f);
  }
  return g.replace(/\s+/g, " ").trim();
}
var ZW = createLazyValue(() =>
  c({
    modelsUsed: v(s()).optional(),
    resolvedModel: s().optional(),
    status: s().optional(),
    model: s().optional(),
  }),
);
function eq(l) {
  let f = ZW().safeParse(l);
  if (!f.success) return [];
  let { modelsUsed: g, resolvedModel: T, status: y, model: R } = f.data;
  if (g && g.length > 0) return g;
  if (T) return [T];
  if (y === "teammate_spawned" && R) return [parseUserSpecifiedModel(R)];
  return [];
}
function oq(l) {
  let f = (l?.progressMessages ?? []).reduce(
      (T, y) =>
        y.data.type === "agent_progress" ? (y.data.modelsUsed ?? T) : T,
      [],
    ),
    g = eq(l?.toolUseResult);
  return g.length > f.length ? g : f;
}
function w$n(l, f) {
  let g = [],
    T = oq(f);
  if (T.length > 1)
    g.push(
      e(
        o,
        {
          flexWrap: "nowrap",
          marginLeft: 1,
          children: e(t, {
            dimColor: !0,
            children: T.map(renderModelName).join(" \u2192 "),
          }),
        },
        "model",
      ),
    );
  else if (l.model && l.model !== "inherit") {
    let y = T[0];
    if (y) {
      let R = getMainLoopModel(),
        k = parseUserSpecifiedModel(l.model);
      if (y !== R || k !== y)
        g.push(
          e(
            o,
            {
              flexWrap: "nowrap",
              marginLeft: 1,
              children: e(t, { dimColor: !0, children: renderModelName(y) }),
            },
            "model",
          ),
        );
    }
  }
  if (g.length === 0) return null;
  return e(N, { children: g });
}
var zE = "Initializing\u2026";
function jHe(
  l,
  {
    tools: f,
    verbose: g,
    terminalSize: T,
    inProgressToolCallCount: y,
    isTranscriptMode: R = !1,
    activeAgents: k,
  },
) {
  if (!l.length)
    return e(ToolResultRow, { height: 1, children: e(t, { dimColor: !0, children: zE }) });
  if (!R && isBuiltInWebFetchAgentProgress(l, k)) return renderWebFetchProgressMessage();
  let S = (y ?? 1) * QW + JW,
    P = !R && T && T.rows && T.rows < S,
    A = () => {
      let ce = countMatching(l, (ye) => {
          if (!Wo(ye.data)) return !1;
          return ye.data.message.message.content.some(
            (Ro) => Ro.type === "tool_use",
          );
        }),
        ie = l.findLast(
          (ye) => Wo(ye.data) && ye.data.message.type === "assistant",
        ),
        Oe = null;
      if (ie?.data.message.type === "assistant") {
        let ye = ie.data.message.message.usage;
        Oe =
          (ye.cache_creation_input_tokens ?? 0) +
          (ye.cache_read_input_tokens ?? 0) +
          ye.input_tokens +
          ye.output_tokens;
      }
      return { toolUseCount: ce, tokens: Oe };
    };
  if (P) {
    let { toolUseCount: ce, tokens: ie } = A();
    return e(ToolResultRow, {
      height: 1,
      children: r(t, {
        dimColor: !0,
        children: [
          "In progress\u2026 \xB7 ",
          e(t, { bold: !0, children: ce }),
          " tool",
          " ",
          ce === 1 ? "use" : "uses",
          ie && ` \xB7 ${formatNumber(ie)} tokens`,
          " \xB7",
          " ",
          e(ActionKeybindingHint, {
            action: "app:toggleTranscript",
            context: "Global",
            fallback: "ctrl+o",
            description: "expand",
            parens: !0,
          }),
        ],
      }),
    });
  }
  let O = XW(l, f, !0),
    I = R ? O : O.slice(-HE),
    B = R ? [] : O.slice(0, Math.max(0, O.length - HE)),
    K = countMatching(B, (ce) => {
      if (ce.type === "summary")
        return ce.searchCount + ce.readCount + ce.replCount > 0;
      let ie = ce.message.data;
      if (!Wo(ie)) return !1;
      return ie.message.message.content.some((Oe) => Oe.type === "tool_use");
    }),
    W = l[0]?.data,
    ne = W && Wo(W) ? W.prompt : void 0;
  if (I.length === 0 && !(R && ne))
    return e(ToolResultRow, { height: 1, children: e(t, { dimColor: !0, children: zE }) });
  let { lookups: de, inProgressToolUseIDs: Le } = collectToolUseLookupsWithInProgress(
    l.filter((ce) => Wo(ce.data)).map((ce) => ce.data),
  );
  return e(ToolResultRow, {
    children: r(o, {
      flexDirection: "column",
      children: [
        r(ExpandedTranscriptProvider, {
          children: [
            R &&
              ne &&
              e(o, { marginBottom: 1, children: e(hye, { prompt: ne }) }),
            I.map((ce) => {
              if (ce.type === "summary") {
                let ie = formatActivitySummary(
                  ce.searchCount,
                  ce.readCount,
                  ce.isActive,
                  ce.replCount,
                );
                return e(
                  o,
                  {
                    height: 1,
                    overflow: "hidden",
                    children: e(t, { dimColor: !0, children: ie }),
                  },
                  ce.uuid,
                );
              }
              return e(
                VL,
                {
                  message: ce.message.data.message,
                  lookups: de,
                  addMargin: !1,
                  tools: f,
                  commands: [],
                  verbose: g,
                  inProgressToolUseIDs: Le,
                  progressMessagesForMessage: [],
                  shouldAnimate: !1,
                  shouldShowDot: !1,
                  style: "condensed",
                  isTranscriptMode: !1,
                  isStatic: !0,
                },
                ce.message.uuid,
              );
            }),
          ],
        }),
        e(OverflowHint, { count: K, unit: "tool use", expandable: !0 }),
      ],
    }),
  });
}
function T$n(
  { subagent_type: l },
  {
    progressMessagesForMessage: f,
    tools: g,
    verbose: T,
    isTranscriptMode: y,
    activeAgents: R,
  },
) {
  if (!y && isBuiltInWebFetchAgentType(l, R)) return e(bf, {});
  return r(N, {
    children: [
      jHe(f, { tools: g, verbose: T, isTranscriptMode: y, activeAgents: R }),
      e(bf, {}),
    ],
  });
}
function E$n(
  l,
  {
    progressMessagesForMessage: f,
    tools: g,
    verbose: T,
    isTranscriptMode: y,
    input: R,
    activeAgents: k,
  },
) {
  if (!y && isBuiltInWebFetchAgentProgress(f, k, isBuiltInWebFetchAgentToolInput(R, k))) return e(ToolErrorMessage, { result: l, verbose: T });
  return r(N, {
    children: [
      jHe(f, { tools: g, verbose: T, isTranscriptMode: y, activeAgents: k }),
      e(ToolErrorMessage, { result: l, verbose: T }),
    ],
  });
}
function tq(l) {
  let f = countMatching(l, (y) => {
      if (!Wo(y.data)) return !1;
      let R = y.data.message;
      return (
        R.type === "user" &&
        R.message.content.some((k) => k.type === "tool_result")
      );
    }),
    g = l.findLast((y) => Wo(y.data) && y.data.message.type === "assistant"),
    T = null;
  if (g?.data.message.type === "assistant") {
    let y = g.data.message.message.usage;
    T =
      (y.cache_creation_input_tokens ?? 0) +
      (y.cache_read_input_tokens ?? 0) +
      y.input_tokens +
      y.output_tokens;
  }
  return { toolUseCount: f, tokens: T };
}
function A$n(l, f) {
  let { shouldAnimate: g, tools: T, addMargin: y = !0 } = f,
    R = l.map(
      ({
        param: B,
        isResolved: K,
        isError: W,
        progressMessages: ne,
        result: de,
      }) => {
        let Le = tq(ne),
          ce = Bdr(ne, T),
          ie = getAgentToolInputSchema().safeParse(B.input),
          Oe = de?.output?.status === "teammate_spawned",
          ye,
          Ze,
          Ro,
          We,
          Me;
        if (Oe && ie.success && ie.data.name) {
          ye = `@${ie.data.name}`;
          let Ct = ie.data.subagent_type;
          ((Ze = KE(Ct) ? Ct : void 0),
            (Me = ie.data.description?.replace(/\s+/g, " ").trim() || void 0),
            (We = KE(Ct) ? getAgentTypeColorThemeKey(Ct) : void 0));
        } else
          ((ye = ie.success ? getAgentToolUserFacingName(ie.data) : "Agent"),
            (Ze = ie.success
              ? ie.data.description?.replace(/\s+/g, " ").trim() || void 0
              : void 0),
            (Ro = ie.success ? getAgentToolUserFacingBackgroundColor(ie.data) : void 0),
            (Me = void 0));
        let no =
            ie.success &&
            "run_in_background" in ie.data &&
            ie.data.run_in_background === !0,
          ve = de?.output?.status,
          qo = no || ve === "async_launched" || ve === "remote_launched" || Oe,
          Lo = ie.success ? ie.data.name : void 0;
        return {
          id: B.id,
          agentType: ye,
          description: Ze,
          toolUseCount: Le.toolUseCount,
          tokens: Le.tokens,
          isResolved: K,
          isError: W,
          isAsync: qo,
          color: Ro,
          descriptionColor: We,
          lastToolInfo: ce,
          taskDescription: Me,
          name: Lo,
        };
      },
    ),
    k = l.some((B) => !B.isResolved),
    S = l.some((B) => B.isError),
    P = !k,
    A = R.length > 0 && R.every((B) => B.agentType === R[0]?.agentType),
    O = A && R[0]?.agentType !== "Agent" ? R[0]?.agentType : null,
    I = R.every((B) => B.isAsync);
  return r(o, {
    flexDirection: "column",
    marginTop: y ? 1 : 0,
    children: [
      r(o, {
        flexDirection: "row",
        children: [
          e(Ho, { shouldAnimate: g && k, isUnresolved: k, isError: S }),
          r(t, {
            children: [
              P
                ? I
                  ? r(N, {
                      children: [
                        e(t, { bold: !0, children: l.length }),
                        " background agents launched",
                        " ",
                        e(t, {
                          dimColor: !0,
                          children: e(KeybindingHint, {
                            chord: "down",
                            action: "manage",
                            parens: !0,
                          }),
                        }),
                      ],
                    })
                  : r(N, {
                      children: [
                        e(t, { bold: !0, children: l.length }),
                        " ",
                        O ? `${O} agents` : "agents",
                        " finished",
                      ],
                    })
                : r(N, {
                    children: [
                      "Running ",
                      e(t, { bold: !0, children: l.length }),
                      " ",
                      O ? `${O} agents` : "agents",
                      "\u2026",
                    ],
                  }),
              " ",
            ],
          }),
          !I && e(TranscriptExpandHint, {}),
        ],
      }),
      R.map((B, K) =>
        e(
          Zg,
          {
            agentType: B.agentType,
            description: B.description,
            descriptionColor: B.descriptionColor,
            taskDescription: B.taskDescription,
            toolUseCount: B.toolUseCount,
            tokens: B.tokens,
            color: B.color,
            isLast: K === R.length - 1,
            isResolved: B.isResolved,
            isError: B.isError,
            isAsync: B.isAsync,
            shouldAnimate: g,
            lastToolInfo: B.lastToolInfo,
            hideType: A,
            name: B.name,
          },
          B.id,
        ),
      ),
    ],
  });
}
function Bdr(l, f) {
  let g = new Map();
  for (let k of l) {
    if (!Wo(k.data)) continue;
    if (k.data.message.type === "assistant") {
      for (let S of k.data.message.message.content)
        if (S.type === "tool_use") g.set(S.id, S);
    }
  }
  let T = 0,
    y = 0;
  for (let k = l.length - 1; k >= 0; k--) {
    let S = l[k];
    if (!Wo(S.data)) continue;
    if (!YE(S)) continue;
    let P = VE(S, f, g);
    if (P && (P.isSearch || P.isRead)) {
      if (S.data.message.type === "user") {
        if (P.isSearch) T++;
        else if (P.isRead) y++;
      }
    } else break;
  }
  if (T + y >= 2) return formatActivitySummary(T, y, !0);
  let R = l.findLast((k) => {
    if (!Wo(k.data)) return !1;
    let S = k.data.message;
    return (
      S.type === "user" &&
      S.message.content.some((P) => P.type === "tool_result")
    );
  });
  if (R?.data.message.type === "user") {
    let k = R.data.message.message.content.find(
      (S) => S.type === "tool_result",
    );
    if (k?.type === "tool_result") {
      let S = g.get(k.tool_use_id);
      if (S) {
        let P = findToolByName(f, S.name);
        if (!P) return S.name;
        let A = S.input,
          O = parseToolInput(P, A),
          I = O.success ? O.data : void 0;
        try {
          let B = P.userFacingName(I),
            K = P.getToolUseSummary?.(I);
          return K ? `${B}: ${K}` : B;
        } catch {
          return S.name;
        }
      }
    }
  }
  return null;
}
function KE(l) {
  return !!l && l !== GENERAL_PURPOSE_AGENT.agentType && l !== WORKER_AGENT_TYPE;
}
export {
  $8,
  bf,
  pye,
  fWe,
  QR,
  qx,
  XIt,
  pZt,
  DB,
  YIt,
  JIt,
  LB,
  QIt,
  git,
  mWe,
  fZt,
  ZIt,
  m$n,
  Yz,
  Zae,
  mZt,
  gZt,
  U8,
  gWe,
  g$n,
  h$n,
  _$n,
  hWe,
  UHe,
  fye,
  hZt,
  ePt,
  BHe,
  y$n,
  mye,
  Jz,
  ele,
  JP,
  _Zt,
  yZt,
  gye,
  B8,
  tle,
  S$n,
  VL,
  hye,
  _We,
  b$n,
  rgr,
  w$n,
  jHe,
  T$n,
  E$n,
  A$n,
  Bdr,
  hp,
  C$n,
};
