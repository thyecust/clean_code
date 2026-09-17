// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  identity as _m,
  Xn,
  B,
  $p,
  he,
  ES,
  lrt,
  xOn,
  Ec,
  ad,
  nDn,
  ke,
  xDn,
  HDn,
  UDn,
  pv,
  Ox,
  Crt,
  rYt,
  tLn,
  ns,
  pLn,
  kW,
  krt,
  xrt,
  wLn,
  kLn,
  Dx,
  LLn,
  Cje,
  Nn,
  kz,
  Hz,
  ym,
  Sae,
  cMn,
} from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie, po } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { withTimeout } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { logEvent, logEventAsync } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum, fromEnumOpt, fromEnumArr } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { Iu, dt, ge, l, A, Gw, EZ, hv, Bp, Kd } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, b, Yu, zur, fp, zR, rje, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { parseConfigInteger, parseNumericValue, getClaudeConfigDir, hasNodeOption, isSimpleMode, isSafeMode, isSupervisedMode, parseEnvAssignments } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import { repeatString } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import { Hx, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { logError } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import { initHostState, parseSessionStartMode } from "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import { sanitizeAnalyticsId, profileCheckpoint, profileReport } from "./startup-profiler.js";
import { recordStartupPhase, recordSpawnToExec, wasWarmSpareClaimed } from "../../01-核心基础设施/遥测-OpenTelemetry/startup-timing-telemetry.js";
import "../../01-核心基础设施/共享小工具-未细化/mdm-policy-paths.js";
import { startMdmRawRead } from "../../01-核心基础设施/核心工具-路径与平台/mdm-raw-read.js";
import "../../01-核心基础设施/共享小工具-未细化/keychain-access.js";
import { startKeychainPrefetch, ensureKeychainPrefetchCompleted } from "../../01-核心基础设施/共享小工具-未细化/keychain-prefetch.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import {
  CLOUD_GATEWAY_SESSION_EXPIRED_MESSAGE,
  resetUserData,
  isAnalyticsDisabled,
  getModelForAnalytics,
  isFastModeEnabled,
  shouldStartWithFastMode,
  getModelDeprecationNotice,
  formatModelDeprecationWarning,
  getMainLoopModel,
  getDefaultOpusModel,
  isOpus1mMergeEnabled,
  isLegacyModelRemapEnabled,
  hashForTelemetry,
  reportEventSignerLoadFailure,
  prepareApiRequest,
  fetchSession,
  sendEventToRemoteSession,
  isXaaEnabled,
  getXaaIdpConfig,
  isBgSession,
  isUnattendedInteractiveSession,
  getPlatformForAnalytics,
  isHostPolicyForceLoginGateway,
  getUnapprovedCustomApiKey,
  getStoredOauthAccountInfo,
  getSubscriptionType,
  isMaxSubscriber,
  isTeamPremiumSubscriber,
  isProSubscriber,
  validateForceLoginOrg,
  initializeGrowthBook,
  getFeatureValue_CACHED_MAY_BE_STALE,
  checkGate_CACHED_OR_BLOCKING,
  refreshGrowthBookAfterAuthChange,
  resetGrowthBook,
  DEFAULT_GLOBAL_CONFIG,
  checkHasTrustDialogAccepted,
  isWorkspacePersistedTrusted,
  getWorkspacePersistedTrustKey,
  isLocalSettingsGitTracked,
  saveGlobalConfig,
  getGlobalConfig,
  resolveExplicitRemoteControlAtStartup,
  markConfigBootPhaseComplete,
  getRawCurrentProjectConfigEntry,
  getCurrentProjectConfig,
  deleteCurrentProjectConfigFields,
  isAutoUpdaterDisabled,
  getMemoryPath,
  getManagedClaudeRulesDir,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import "../../01-核心基础设施/共享小工具-未细化/diagnostics-log.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../../02-功能模块/Git-Worktree/git-exec-hardening.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/open-flags.js";
import { isRemoteActive, getIsGit, getBranch, getWorktreeCount } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { te } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { isTranscriptFileResumeArg } from "../../02-功能模块/会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/atomic-file-write.js";
import "../../01-核心基础设施/共享小工具-未细化/file-storage.js";
import "../../02-功能模块/Teammates团队/storage-keys.js";
import { isGitHubHost } from "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { invalidateAllSettings, getLastLoadStatus, getRemoteSettingsPathOverride, isAdminPolicyOrigin } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import {
  awaitMdmSettingsLoaded,
  policyHelperRefreshedEvents,
  runPolicyHelperPass,
  hasRemotePolicyHelperEntry,
  getPolicyHelperClaudeMd,
  hasActivePolicyHelper,
  wasPolicyHelperInitializeAttempted,
  retireOsAdminPolicyHelper,
  enableMidSessionPolicyHelperArming,
  getSettingsForSource,
  getInitialSettings,
  getSettings_DEPRECATED,
  getEffectiveSettingSource,
  getBasePolicySettings,
  getBasePolicySettingsOrigin,
  isForceRemoteSettingsRefreshConfigured,
  getPolicyHelperSourceLoadErrors,
  updateSettingsForSource,
  updateSettingsForSourceWithTransform,
  hasSkipDangerousModePermissionPrompt,
  getAutoModeConfig,
} from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { PERMISSION_MODES, PERMISSION_MODE_MANUAL_ALIAS, isSelectablePermissionMode, parsePermissionModeOrDefault } from "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import "../../02-功能模块/图片-截图-ComputerUse/settings-option-values.js";
import "../../02-功能模块/工具Bash-Shell/permission-rule-parsing.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import { toCompatSessionId, remoteRowId } from "../../02-功能模块/权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { getDynamicTeamContext } from "../../02-功能模块/Teammates团队/teammate-context.js";
import "../../01-核心基础设施/共享小工具-未细化/compliance-taints-store.js";
import { Xt, getAPIProvider, isFirstPartyApiBackend } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/test-egress-guard.js";
import "../../01-核心基础设施/共享小工具-未细化/external-http.js";
import "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
import { isReviewOriginSession, hasCredentialDescriptor, getOAuthToken, getGatewayToken, getApiKey, getSessionAccessToken } from "../../02-功能模块/认证-OAuth登录/credential-file-descriptors.js";
import "../../02-功能模块/认证-OAuth登录/secure-storage.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/核心工具-进程与信号/sdk-memory-summary.js";
import "../../02-功能模块/Git-Worktree/git-repository-detection.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../../02-功能模块/Hooks钩子/session-feature-cache.js";
import { USER_INTENT_SETTING_KEYS, resolveSetting } from "../../02-功能模块/上下文压缩-Compact/resolve-user-intent-setting.js";
import { isAgentsFleetEnabled, isPastSessionsExperimentEnabled } from "../../01-核心基础设施/共享小工具-未细化/agent-view-feature-gates.js";
import { printCliError, cliError, cliOk, cliWarn, cliErrorAfterAnalyticsFlush, cliOkAfterAnalyticsFlush } from "../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js";
import { Aa } from "../../02-功能模块/插件系统/chunk-7s6mt1vg.js";
import "../../02-功能模块/ClaudeinChrome/claude-in-chrome-host.js";
import { isClaudeMdLoadingDisabled } from "../../02-功能模块/状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/核心工具-进程与信号/process-wrapper-launcher.js";
import "../../01-核心基础设施/核心工具-路径与平台/temp-directory.js";
import { isScrubEnabled } from "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import { goe, dR } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import {
  addHistoryEntry,
  listGitWorktrees,
  emitExitMessage,
  flushAnalyticsSinks,
  shutdownCoordinators,
  markStartupActionStarted,
  gracefulShutdown,
  gracefulShutdownSync,
  DEFAULT_ATTENTION_BUDGET,
  isAdvisorToolEnabled,
  settingsChangeDetector,
  SandboxManager,
  DEFAULTS_SLOT_MARKER,
  createInitialAttributionState,
  syncPermissionRulesFromDisk,
  PERMISSION_PROMPTS_TARGETS,
  PERMISSION_PROMPTS_NONE,
  isPermissionPromptsDisabled,
  setSessionCwd,
  parseAutoCompactWindowSetting,
  isPrecomputeCompactionEnabledByDefault,
  createPrecomputeSidecarReadAheadOptions,
  resolvePromptSuggestionsEnabled,
  isPromptSuggestionEnabled,
  loadConversationForResume,
  getDirSyncPromptRoot,
  formatUnboundNotice,
  isSettingsModeForwardable,
  shouldPromptForRemoteHomeSettingsMode,
  formatMcpScopeLocation,
  normalizeMcpScope,
  normalizeMcpTransportType,
  parseMcpHeaders,
  processMessagesForTeleportResume,
  checkOutTeleportedSessionBranch,
  validateSessionRepository,
  formatRepoMismatchDisplay,
  handleTeleportPrerequisites,
  teleportToRemoteWithErrorHandling,
  teleportToRemote,
  getAutoModeUnavailableNotification,
  verifyAutoModeGateAccess,
  getAutoModeEnabledState,
  shouldFillPluginLoadWithStore,
  loadAllPluginsCacheOnly,
  clearPluginCache,
  addMcpConfig,
  getClaudeCodeMcpConfigs,
  isClaudeInChromeAllowed,
  shouldSuppressChromeOffer,
  setupClaudeInChrome,
  createUserMessage,
  createSystemInfoMessage,
  TranscriptFileFormatError,
  loadTranscriptFromFile,
  saveMode,
  getSessionIdFromLog,
  searchSessionsByCustomTitle,
  getSessionEndHookTimeoutMs,
  loadMemoryFileWithIncludes,
  loadRulesDirMemoryFiles,
  getSessionMemoryFiles,
  clearMemoryFilesForSession,
  getExternalInstructionIncludes,
  shouldShowExternalIncludesDialog,
  getSystemContext,
  invalidateUserContext,
  isImportCommandEnabled,
  CLAUDE_IMPORT_NOT_AVAILABLE_MESSAGE,
  CLAUDE_IMPORT_CONFIG_ERROR_MESSAGE,
  resolveImportCommandAction,
  parseImportCommandArgs,
  getCommands,
  filterCommandsForHeadless,
} from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/host-state-store.js";
import "../../02-功能模块/Hooks钩子/chunk-z3433nr6.js";
import "../../02-功能模块/Hooks钩子/chunk-bzqqe6xh.js";
import "../../02-功能模块/插件系统/chunk-ajtn749s.js";
import { getEffectivePermissionRules, getEffectiveAdditionalDirectories } from "../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { areSideloadFlagsDisabledByPolicy, sideloadFlagsBlockedMessage } from "../../02-功能模块/插件系统/plugin-source-policy.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/otel-events.js";
import "../../02-功能模块/MCP客户端/chunk-3kmsshb6.js";
import "../../02-功能模块/图片-截图-ComputerUse/computer-use-lock.js";
import { isViolinWoodEnabled, isViolinWoodEnabledCached, isSettingsToCloudEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../02-功能模块/Teammates团队/chunk-g6nvp9mm.js";
import "../../02-功能模块/Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../../02-功能模块/策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../../02-功能模块/Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/workflow-feature-gates.js";
import {
  xJe,
  qEt,
  zEt,
  Snr,
  bnr,
  im,
  KEt,
  i4t,
  Ya,
  S$e,
} from "../../02-功能模块/权限系统/chunk-t3b7pg2x.js";
import "../../02-功能模块/权限系统/chunk-fjrcf22x.js";
import "../../02-功能模块/权限系统/chunk-qdy0h5k2.js";
import "../../01-核心基础设施/共享小工具-未细化/host-claim-registry.js";
import "../../02-功能模块/图表-Mermaid/chunk-743atbtj.js";
import "../核心应用-Agent循环/chunk-h3cty6gp.js";
import { primePlanSlugCollisions, getPlansDirectory } from "../../02-功能模块/计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../../02-功能模块/Teammates团队/transcript-paths.js";
import { resolveCcrAutoConnectDefault } from "../../02-功能模块/Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import { isExiting, commitExit } from "../../01-核心基础设施/共享小工具-未细化/exit-commit-state.js";
import "../../01-核心基础设施/共享小工具-未细化/max-subagent-spawn-depth.js";
import "../../02-功能模块/工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../../01-核心基础设施/共享小工具-未细化/host-capability-state.js";
import "../../02-功能模块/Bridge-RemoteControl/push-notification-tool.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../../02-功能模块/Teammates团队/list-agents-tool-constants.js";
import "../../02-功能模块/后台任务-Shell管理/scheduled-tasks.js";
import "../../02-功能模块/Cron-定时任务/chunk-mk3zm4ew.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-rr78st95.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../../02-功能模块/权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-x3txegas.js";
import "../../02-功能模块/Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/bridge-state-containers.js";
import "../../02-功能模块/跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../../02-功能模块/跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/error-reporting-eligibility.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import { reportError } from "../../01-核心基础设施/HTTP-网络层/error-tracking-report.js";
import { latchTuiTrialFromEnv } from "../../02-功能模块/终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../../02-功能模块/终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { formatContinuedInMessage } from "../../02-功能模块/会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../02-功能模块/文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/共享小工具-未细化/claude-launcher-invocation.js";
import "../../02-功能模块/状态栏-主题/chunk-jz6b76hr.js";
import "../../01-核心基础设施/共享小工具-未细化/agent-color-palette.js";
import "../../02-功能模块/Teammates团队/team-file-store.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-djserjj5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/共享小工具-未细化/terminal-focus-state.js";
import "../../02-功能模块/认证-OAuth登录/wif-credentials.js";
import "../../02-功能模块/Skills技能/bundled-skills.js";
import "../../01-核心基础设施/共享小工具-未细化/plugin-eval-quickref-asset.js";
import { wa } from "../../02-功能模块/工具结果持久化/工具结果持久化.jj43r39n.js";
import { isAgentSwarmsEnabled } from "../../02-功能模块/Teammates团队/agent-swarms-enablement.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../../02-功能模块/Bridge-RemoteControl/code-session-api.js";
import "../../01-核心基础设施/共享小工具-未细化/terminal-backend-detection.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/bg-job-runtime-state.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-7wsy8vxb.js";
import { foldRestricted, cliCarriesSessionConfig } from "../../02-功能模块/权限系统/fork-restricted-launch-flags.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../../02-功能模块/语音-音频/loop-wakeup-scheduler.js";
import "../../02-功能模块/键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../../02-功能模块/图片-截图-ComputerUse/computer-use-session.js";
import { s7e } from "../../02-功能模块/Bridge-RemoteControl/chunk-1yq098a7.js";
import "../../02-功能模块/Bridge-RemoteControl/remote-control-messages.js";
import "../../01-核心基础设施/共享小工具-未细化/c4e-upsell-command-gate.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-sdk-generation.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-p7jm635c.js";
import "../../01-核心基础设施/设置-配置/chunk-0y8rdjs7.js";
import { jB, n9e } from "../../02-功能模块/插件系统/chunk-q8w2zntw.js";
import { n$n, zw } from "../../02-功能模块/发布日志-Changelog/发布日志-Changelog.2nyyps5n.js";
import { setSessionPromptLaunchWarning } from "../../01-核心基础设施/共享小工具-未细化/prompt-input-store.js";
import "../../02-功能模块/上下文压缩-Compact/context-usage.js";
import "../../02-功能模块/工具Monitor/工具Monitor.981fw9dy.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-qpgskeea.js";
import "../../02-功能模块/Artifact发布-渲染/artifact-reply-yield.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-p1dkvpxj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-d8c3rz29.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-5gz5xvw9.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-kshc4v5t.js";
import {
  awaitMcpPolicyColdStart,
  getPendingMcpServers,
  renderMcpServerApprovalDialog,
  handleAppStateChange,
  handleReplAppStateChange,
  PLUGIN_SCAFFOLD_COMPONENTS,
  initializeBuiltinPlugins,
  getCloudSessionsUnavailableReason,
  resolveCommandQueue,
  checkFullscreenBootCanary,
  p0t,
  markRemoteControlUsed,
  checkGitHubAuthStatus,
  buildInitialTeamContext,
  createConfigChangeHookGate,
  formatDeepLinkSessionNotice,
  launchSessionRepl,
  getSetEnvVarNames,
  getNonDefaultGlobalConfigKeys,
  getSetUserSettingsKeys,
  startInitializeRequestReader,
  getInitializeRequestResult,
  iterateStdinJsonLines,
  runLifecycleHooks,
  suppressInitialMessage,
  parseSelfAddressableSessionId,
  mergeAgentMcpServers,
  getTeammateContextModule,
  systemPromptModule,
  applyBriefModeFlag,
  prewarmStartupServices,
  reportPluginSessionTelemetry,
  getBranchMode,
  runCliActionHandler,
  addTrackedRepoPath,
  getTrackedRepoPaths,
  filterExistingRepoPaths,
  createChecklistState,
  reduceChecklistState,
  getChecklistPhase,
  getChecklistCancelMessage,
  createMcpConnectionManager,
  getSelectablePermissionMode,
  isInternalModel,
  getRepositoryModelSource,
  resolveInitialPermissionMode,
} from "../../02-功能模块/输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { lO } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../../02-功能模块/会话-历史-恢复/session-title.js";
import { createSessionMetricsStore, runExitHandoff, subscribeToRefusalFallbackRestoreSync, applyDisabledModePolicies, syncAdditionalWorkingDirectories, createBaseAppState, EMPTY_PROJECTS_SELF_IDENTITY, AppRoot } from "../../02-功能模块/后台任务-Shell管理/chunk-c7mzes79.js";
import "../../01-核心基础设施/共享小工具-未细化/use-store-selector.js";
import "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import "../../02-功能模块/AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import { TIER_LABELS, withProbeDeadline, apply3PDefaultFallbacks as Bnn } from "../../02-功能模块/Bedrock-Vertex/apply-3p-default-fallbacks.js";
import "../../01-核心基础设施/共享小工具-未细化/additional-working-directories.js";
import { registerToolHosts } from "../../01-核心基础设施/共享小工具-未细化/chunk-dypysnt9.js";
import { qJe, b_, KAn, zJe } from "../../02-功能模块/策略限制(PolicyLimits)/chunk-hpw6352m.js";
import { XBn, fIe, _lt, mIe, YBn, $Dt, UDt } from "../../01-核心基础设施/设置-配置/chunk-1pbaa558.js";
import "../../01-核心基础设施/共享小工具-未细化/ink-instance-registry.js";
import { capturePolicySnapshot, hasPolicyDiverged } from "../../01-核心基础设施/共享小工具-未细化/chunk-22525f7p.js";
import { CHe, $st } from "../../02-功能模块/Git-Worktree/chunk-xercceag.js";
import { stopCapturingEarlyInput, consumeEarlyInput, hasEarlyInput } from "../../01-核心基础设施/共享小工具-未细化/early-input-capture.js";
import { getBaseRenderOptions } from "../../01-核心基础设施/共享小工具-未细化/base-render-options.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../../01-核心基础设施/共享小工具-未细化/clock-and-terminal-focus.js";
import "../../01-核心基础设施/共享小工具-未细化/use-clock.js";
import "../会话UI(REPL)/notification-queue.js";
import "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import "../../02-功能模块/状态栏-主题/chunk-w5jaj6kg.js";
import "../../02-功能模块/状态栏-主题/custom-themes.js";
import { o, t, uE } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { credentialsStoreFor } from "../../02-功能模块/认证-OAuth登录/credentials-store.js";
import "../../01-核心基础设施/共享小工具-未细化/attach-state-tracking.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kk7p3hsm.js";
import { SHOW_CURSOR } from "../../01-核心基础设施/共享小工具-未细化/terminal-mode-sequences.js";
import "../../01-核心基础设施/共享小工具-未细化/terminal-querier.js";
import "../../02-功能模块/键位绑定(Keybindings)/keybinding-context.js";
import "../../01-核心基础设施/共享小工具-未细化/session-context.js";
import "../../01-核心基础设施/共享小工具-未细化/command-queue-context.js";
import "../../02-功能模块/MCP客户端/chunk-g4gdwpa0.js";
import "../../02-功能模块/Hooks钩子/spinner-store.js";
import "../../01-核心基础设施/共享小工具-未细化/recent-window.js";
import "../../02-功能模块/工具TodoWrite-Tasks/tasks-v2-store.js";
import "../../01-核心基础设施/共享小工具-未细化/worktree-state-store.js";
import "../../02-功能模块/Workflow编排/chunk-va9cgbfs.js";
import "../../02-功能模块/MCP客户端/mcp-task-metadata.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q8r1ycrr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s1hpfa12.js";
import "../../01-核心基础设施/共享小工具-未细化/voice-state-provider.js";
import "../../01-核心基础设施/共享小工具-未细化/empty-artifact-consent-slugs.js";
import { runSteps, showScreen } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-cq8x5zt4.js";
import "../../01-核心基础设施/共享小工具-未细化/storage-v5-env-pin.js";
import "../../01-核心基础设施/共享小工具-未细化/pin-storage-v5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bgf8jybv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fpak7ean.js";
import { initializeApp, initializeTelemetryAfterTrust } from "../../01-核心基础设施/遥测-OpenTelemetry/app-init.js";
import "../../01-核心基础设施/共享小工具-未细化/publish-permission-snapshot.js";
import "../../02-功能模块/权限系统/inherit-permission-mode-flag.js";
import "../../02-功能模块/Skills技能/Skills技能.dpy2ket5.js";
import { registerClientDataGetters } from "../../02-功能模块/上下文压缩-Compact/chunk-npckj9cm.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-y8j05azr.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-01jnk0v2.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-pdd7kz7p.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-stvynqrz.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-b6k1z7an.js";
import "../../01-核心基础设施/共享小工具-未细化/workshop-telemetry.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-yrjr7v83.js";
import "../../02-功能模块/CodeReview/ultrareview-tips.js";
import "../../02-功能模块/后台任务-Shell管理/daemon-lock.js";
import "../../02-功能模块/DesignSync/register-design-skill.js";
import "../../02-功能模块/CodeReview/pr-review-target.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kyy28ene.js";
import "../../02-功能模块/自动更新-安装/chunk-548xet6h.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hrfnq7gz.js";
import { shouldShowGroveNotice } from "../../02-功能模块/Grove-隐私设置/chunk-a4mdm49v.js";
import "../../02-功能模块/斜杠命令-框架/chunk-a4vej95c.js";
import "../../02-功能模块/用量额度-限额/chunk-1bfn62xh.js";
import "../../01-核心基础设施/设置-配置/spinner-tips-override.js";
import { getLocalSettingsErrorsBlockingWrite, getGatingSettingsErrors } from "../../01-核心基础设施/设置-配置/chunk-xy3cbvd8.js";
import "../../02-功能模块/文件监听-Watch/skill-change-detector.js";
import "../../02-功能模块/交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../02-功能模块/文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../../01-核心基础设施/共享小工具-未细化/overlay-registry.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-state.js";
import "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import "../../01-核心基础设施/共享小工具-未细化/use-keybinding-chord-text.js";
import "../../02-功能模块/键位绑定(Keybindings)/keybinding-display.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import "../../01-核心基础设施/共享小工具-未细化/use-keybinding-display-text.js";
import "../../01-核心基础设施/共享小工具-未细化/exit-keybinding-hooks.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/keybinding-scope.js";
import { shouldOfferTrustBackstop } from "../../01-核心基础设施/设置-配置/marketplace-helper-sources.js";
import { eagerLoadSettings } from "../../01-核心基础设施/共享小工具-未细化/eager-load-settings.js";
import { checkVersionPolicyForCommand } from "../../01-核心基础设施/共享小工具-未细化/version-policy.js";
import "../../02-功能模块/权限系统/chunk-z0pt04s8.js";
import { resetAuthCachesAfterLogin, buildAutoModeGateNotification } from "../../01-核心基础设施/共享小工具-未细化/chunk-8r3h1dwe.js";
import "../../01-核心基础设施/共享小工具-未细化/apply-node-extra-ca-certs.js";
import "../../01-核心基础设施/共享小工具-未细化/daemon-status.js";
import "../../02-功能模块/权限系统/permission-mode-cycle.js";
import { buildCloudSessionStatusMessage } from "../../01-核心基础设施/共享小工具-未细化/cloud-session-status-message.js";
import "../Headless-SDK模式/cloud-flag-validation.js";
import { formatSessionLiveElsewhereMessage, getLiveSessionHolder } from "../../01-核心基础设施/共享小工具-未细化/session-live-elsewhere.js";
import "../../01-核心基础设施/共享小工具-未细化/to-local-file-url.js";
import "../../01-核心基础设施/共享小工具-未细化/action-keybinding-hint.js";
import "../../01-核心基础设施/共享小工具-未细化/kb-cohesion-fixes.js";
import "../../01-核心基础设施/共享小工具-未细化/divider.js";
import "../../01-核心基础设施/共享小工具-未细化/reduced-motion.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { formatHyperlink } from "../../01-核心基础设施/共享小工具-未细化/format-hyperlink.js";
import "../../01-核心基础设施/共享小工具-未细化/daemon-paths.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/try-set-raw-mode.js";
import { isAwaySummaryEnabled } from "../../02-功能模块/权限系统/ccr-recap.js";
import "../../02-功能模块/后台任务-Shell管理/background-task-inventory.js";
import "../../02-功能模块/Teammates团队/background-task-summary.js";
import "../../01-核心基础设施/共享小工具-未细化/relaunch-terminal-size.js";
import "../../02-功能模块/插件系统/plugin-dependency-resolution.js";
import "../../02-功能模块/插件系统/plugin-state-store.js";
import "../../02-功能模块/插件系统/plugin-disuse.js";
import "../../01-核心基础设施/共享小工具-未细化/theme-color.js";
import "../../02-功能模块/MCP客户端/mcp-server-state-messages.js";
import "../../01-核心基础设施/共享小工具-未细化/computer-use-config.js";
import "../../02-功能模块/Teammates团队/onboarding-guide-api.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-531ast3t.js";
import "../../02-功能模块/Bridge-RemoteControl/bridge-effort-sync.js";
import "../../01-核心基础设施/共享小工具-未细化/coo-context-properties.js";
import "../../01-核心基础设施/共享小工具-未细化/design-feature-gates.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhs1bd0k.js";
import "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import "../../02-功能模块/Workflow编排/workflow-snapshots.js";
import "../../01-核心基础设施/设置-配置/shell-allow-rule-analytics.js";
import "../../01-核心基础设施/共享小工具-未细化/websocket-subprotocols.js";
import "../../01-核心基础设施/共享小工具-未细化/auto-react-state.js";
import "../../01-核心基础设施/共享小工具-未细化/lodash-to-number.js";
import "../../01-核心基础设施/共享小工具-未细化/theme-resolution.js";
import { re, E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import "../../01-核心基础设施/共享小工具-未细化/org-skills-sync.js";
import { isPluginEvalEnabled } from "../../01-核心基础设施/设置-配置/early-access-feature-gates.js";
import "../../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/hover-rest-transcript.js";
import "../../01-核心基础设施/共享小工具-未细化/ended-by-model.js";
import "../../01-核心基础设施/共享小工具-未细化/json-file-store.js";
import "../../02-功能模块/插件系统/chunk-33bdfgmx.js";
import "../../02-功能模块/MCP客户端/mcp-skills-extension.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-0dcnsftb.js";
import "../../02-功能模块/DesignSync/design-sync-tool-metadata.js";
import "../../02-功能模块/MCP客户端/mcp-task-id.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-timeouts.js";
import "../../01-核心基础设施/共享小工具-未细化/remote-session-compat-id.js";
import "../../01-核心基础设施/共享小工具-未细化/linked-abort-signal.js";
import "../../01-核心基础设施/共享小工具-未细化/log-error-with-telemetry-message.js";
import "../../02-功能模块/工具Monitor/monitor-tool-description.js";
import "../../01-核心基础设施/共享小工具-未细化/coordinator-mode.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import "../../01-核心基础设施/共享小工具-未细化/kill-process-tree.js";
import "../../02-功能模块/Teammates团队/permission-sync-mailbox.js";
import "../../01-核心基础设施/共享小工具-未细化/jittered-backoff-delay.js";
import { resetRemoteSettingsSyncCache } from "../../01-核心基础设施/共享小工具-未细化/remote-settings-eligibility.js";
import "../../01-核心基础设施/共享小工具-未细化/user-directories.js";
import "../../01-核心基础设施/共享小工具-未细化/environment-kind.js";
import "../../01-核心基础设施/共享小工具-未细化/disable-bundled-skills.js";
import "../../02-功能模块/工具ToolSearch/tool-search-enablement.js";
import { createStore } from "../../01-核心基础设施/共享小工具-未细化/state-store.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nfcecy7x.js";
import "../../02-功能模块/权限系统/bypass-permissions-mode-policy.js";
import "../../01-核心基础设施/共享小工具-未细化/expand-tabs.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-4zd60pbm.js";
import { isFlagPresent, isNonInteractiveMode, findArgIndex, isCcProtocolUrl, isHelpRequested } from "../../02-功能模块/上下文压缩-Compact/cli-args.js";
import "../../02-功能模块/Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/safe-file-read.js";
import { serializeAsyncCalls } from "../../01-核心基础设施/共享小工具-未细化/async-serialization.js";
import "../../01-核心基础设施/共享小工具-未细化/federation-cache-dir.js";
import "../../02-功能模块/Bedrock-Vertex/chunk-p991cddr.js";
import { mL, s, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import "../../01-核心基础设施/共享小工具-未细化/git-remote-url.js";
import "../../01-核心基础设施/共享小工具-未细化/user-prompt-text.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { getHandleUriInjectionError } from "../../01-核心基础设施/共享小工具-未细化/cli-arg-parsing.js";
import { getBuildRefName } from "../../01-核心基础设施/共享小工具-未细化/build-ref-name.js";
import { ensureClientAgentEnv } from "../../01-核心基础设施/共享小工具-未细化/user-agent.js";
import "../../02-功能模块/图片-截图-ComputerUse/computer-use-swift-native.js";
import { countMatching, dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { toESM, commonJS, MEMO_CACHE_SENTINEL, importMetaRequire } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var To = commonJS(function (Vi) {
  class pr extends Error {
    constructor(v, k, O) {
      super(O);
      (Error.captureStackTrace(this, this.constructor),
        (this.name = this.constructor.name),
        (this.code = k),
        (this.exitCode = v),
        (this.nestedError = void 0));
    }
  }
  class Zr extends pr {
    constructor(v) {
      super(1, "commander.invalidArgument", v);
      (Error.captureStackTrace(this, this.constructor),
        (this.name = this.constructor.name));
    }
  }
  Vi.CommanderError = pr;
  Vi.InvalidArgumentError = Zr;
});
var Qo = commonJS(function (Ki) {
  var { InvalidArgumentError: Yi } = To();
  class en {
    constructor(v, k) {
      switch (
        ((this.description = k || ""),
        (this.variadic = !1),
        (this.parseArg = void 0),
        (this.defaultValue = void 0),
        (this.defaultValueDescription = void 0),
        (this.argChoices = void 0),
        v[0])
      ) {
        case "<":
          ((this.required = !0), (this._name = v.slice(1, -1)));
          break;
        case "[":
          ((this.required = !1), (this._name = v.slice(1, -1)));
          break;
        default:
          ((this.required = !0), (this._name = v));
          break;
      }
      if (this._name.length > 3 && this._name.slice(-3) === "...")
        ((this.variadic = !0), (this._name = this._name.slice(0, -3)));
    }
    name() {
      return this._name;
    }
    _concatValue(v, k) {
      if (k === this.defaultValue || !Array.isArray(k)) return [v];
      return k.concat(v);
    }
    default(v, k) {
      return (
        (this.defaultValue = v),
        (this.defaultValueDescription = k),
        this
      );
    }
    argParser(v) {
      return ((this.parseArg = v), this);
    }
    choices(v) {
      return (
        (this.argChoices = v.slice()),
        (this.parseArg = (k, O) => {
          if (!this.argChoices.includes(k))
            throw new Yi(`Allowed choices are ${this.argChoices.join(", ")}.`);
          if (this.variadic) return this._concatValue(k, O);
          return k;
        }),
        this
      );
    }
    argRequired() {
      return ((this.required = !0), this);
    }
    argOptional() {
      return ((this.required = !1), this);
    }
  }
  function zi(v) {
    let k = v.name() + (v.variadic === !0 ? "..." : "");
    return v.required ? "<" + k + ">" : "[" + k + "]";
  }
  Ki.Argument = en;
  Ki.humanReadableArgName = zi;
});
var ur = commonJS(function (Zi) {
  var { humanReadableArgName: Qi } = Qo();
  class tn {
    constructor() {
      ((this.helpWidth = void 0),
        (this.sortSubcommands = !1),
        (this.sortOptions = !1),
        (this.showGlobalOptions = !1));
    }
    visibleCommands(v) {
      let k = v.commands.filter((R) => !R._hidden),
        O = v._getHelpCommand();
      if (O && !O._hidden) k.push(O);
      if (this.sortSubcommands)
        k.sort((R, T) => R.name().localeCompare(T.name()));
      return k;
    }
    compareOptions(v, k) {
      let O = (R) =>
        R.short ? R.short.replace(/^-/, "") : R.long.replace(/^--/, "");
      return O(v).localeCompare(O(k));
    }
    visibleOptions(v) {
      let k = v.options.filter((R) => !R.hidden),
        O = v._getHelpOption();
      if (O && !O.hidden) {
        let R = O.short && v._findOption(O.short),
          T = O.long && v._findOption(O.long);
        if (!R && !T) k.push(O);
        else if (O.long && !T) k.push(v.createOption(O.long, O.description));
        else if (O.short && !R) k.push(v.createOption(O.short, O.description));
      }
      if (this.sortOptions) k.sort(this.compareOptions);
      return k;
    }
    visibleGlobalOptions(v) {
      if (!this.showGlobalOptions) return [];
      let k = [];
      for (let O = v.parent; O; O = O.parent) {
        let R = O.options.filter((T) => !T.hidden);
        k.push(...R);
      }
      if (this.sortOptions) k.sort(this.compareOptions);
      return k;
    }
    visibleArguments(v) {
      if (v._argsDescription)
        v.registeredArguments.forEach((k) => {
          k.description = k.description || v._argsDescription[k.name()] || "";
        });
      if (v.registeredArguments.find((k) => k.description))
        return v.registeredArguments;
      return [];
    }
    subcommandTerm(v) {
      let k = v.registeredArguments.map((O) => Qi(O)).join(" ");
      return (
        v._name +
        (v._aliases[0] ? "|" + v._aliases[0] : "") +
        (v.options.length ? " [options]" : "") +
        (k ? " " + k : "")
      );
    }
    optionTerm(v) {
      return v.flags;
    }
    argumentTerm(v) {
      return v.name();
    }
    longestSubcommandTermLength(v, k) {
      return k
        .visibleCommands(v)
        .reduce((O, R) => Math.max(O, k.subcommandTerm(R).length), 0);
    }
    longestOptionTermLength(v, k) {
      return k
        .visibleOptions(v)
        .reduce((O, R) => Math.max(O, k.optionTerm(R).length), 0);
    }
    longestGlobalOptionTermLength(v, k) {
      return k
        .visibleGlobalOptions(v)
        .reduce((O, R) => Math.max(O, k.optionTerm(R).length), 0);
    }
    longestArgumentTermLength(v, k) {
      return k
        .visibleArguments(v)
        .reduce((O, R) => Math.max(O, k.argumentTerm(R).length), 0);
    }
    commandUsage(v) {
      let k = v._name;
      if (v._aliases[0]) k = k + "|" + v._aliases[0];
      let O = "";
      for (let R = v.parent; R; R = R.parent) O = R.name() + " " + O;
      return O + k + " " + v.usage();
    }
    commandDescription(v) {
      return v.description();
    }
    subcommandDescription(v) {
      return v.summary() || v.description();
    }
    optionDescription(v) {
      let k = [];
      if (v.argChoices)
        k.push(
          `choices: ${v.argChoices.map((O) => JSON.stringify(O)).join(", ")}`,
        );
      if (v.defaultValue !== void 0) {
        if (
          v.required ||
          v.optional ||
          (v.isBoolean() && typeof v.defaultValue === "boolean")
        )
          k.push(
            `default: ${v.defaultValueDescription || JSON.stringify(v.defaultValue)}`,
          );
      }
      if (v.presetArg !== void 0 && v.optional)
        k.push(`preset: ${JSON.stringify(v.presetArg)}`);
      if (v.envVar !== void 0) k.push(`env: ${v.envVar}`);
      if (k.length > 0) return `${v.description} (${k.join(", ")})`;
      return v.description;
    }
    argumentDescription(v) {
      let k = [];
      if (v.argChoices)
        k.push(
          `choices: ${v.argChoices.map((O) => JSON.stringify(O)).join(", ")}`,
        );
      if (v.defaultValue !== void 0)
        k.push(
          `default: ${v.defaultValueDescription || JSON.stringify(v.defaultValue)}`,
        );
      if (k.length > 0) {
        let O = `(${k.join(", ")})`;
        if (v.description) return `${v.description} ${O}`;
        return O;
      }
      return v.description;
    }
    formatHelp(v, k) {
      let O = k.padWidth(v, k),
        R = k.helpWidth || 80,
        T = 2,
        x = 2;
      function U(j, V) {
        if (V) {
          let q = `${j.padEnd(O + 2)}${V}`;
          return k.wrap(q, R - 2, O + 2);
        }
        return j;
      }
      function D(j) {
        return j
          .join(
            `
`,
          )
          .replace(/^/gm, " ".repeat(2));
      }
      let N = [`Usage: ${k.commandUsage(v)}`, ""],
        I = k.commandDescription(v);
      if (I.length > 0) N = N.concat([k.wrap(I, R, 0), ""]);
      let L = k
        .visibleArguments(v)
        .map((j) => U(k.argumentTerm(j), k.argumentDescription(j)));
      if (L.length > 0) N = N.concat(["Arguments:", D(L), ""]);
      let W = k
        .visibleOptions(v)
        .map((j) => U(k.optionTerm(j), k.optionDescription(j)));
      if (W.length > 0) N = N.concat(["Options:", D(W), ""]);
      if (this.showGlobalOptions) {
        let j = k
          .visibleGlobalOptions(v)
          .map((V) => U(k.optionTerm(V), k.optionDescription(V)));
        if (j.length > 0) N = N.concat(["Global Options:", D(j), ""]);
      }
      let K = k
        .visibleCommands(v)
        .map((j) => U(k.subcommandTerm(j), k.subcommandDescription(j)));
      if (K.length > 0) N = N.concat(["Commands:", D(K), ""]);
      return N.join(`
`);
    }
    padWidth(v, k) {
      return Math.max(
        k.longestOptionTermLength(v, k),
        k.longestGlobalOptionTermLength(v, k),
        k.longestSubcommandTermLength(v, k),
        k.longestArgumentTermLength(v, k),
      );
    }
    wrap(v, k, O, R = 40) {
      let x = new RegExp(
        `[\\n][${" \\f\\t\\v\xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF"}]+`,
      );
      if (v.match(x)) return v;
      let U = k - O;
      if (U < R) return v;
      let D = v.slice(0, O),
        N = v.slice(O).replace(
          `\r
`,
          `
`,
        ),
        I = " ".repeat(O),
        W = `\\s${"\u200B"}`,
        K = new RegExp(
          `
|.{1,${U - 1}}([${W}]|$)|[^${W}]+?([${W}]|$)`,
          "g",
        ),
        j = N.match(K) || [];
      return (
        D +
        j.map((V, q) => {
          if (
            V ===
            `
`
          )
            return "";
          return (q > 0 ? I : "") + V.trimEnd();
        }).join(`
`)
      );
    }
  }
  Zi.Help = tn;
});
var mr = commonJS(function (as) {
  var { InvalidArgumentError: rs } = To();
  class on {
    constructor(v, k) {
      ((this.flags = v),
        (this.description = k || ""),
        (this.required = v.includes("<")),
        (this.optional = v.includes("[")),
        (this.variadic = /\w\.\.\.[>\]]$/.test(v)),
        (this.mandatory = !1));
      let O = ss(v);
      if (
        ((this.short = O.shortFlag),
        (this.long = O.longFlag),
        (this.negate = !1),
        this.long)
      )
        this.negate = this.long.startsWith("--no-");
      ((this.defaultValue = void 0),
        (this.defaultValueDescription = void 0),
        (this.presetArg = void 0),
        (this.envVar = void 0),
        (this.parseArg = void 0),
        (this.hidden = !1),
        (this.argChoices = void 0),
        (this.conflictsWith = []),
        (this.implied = void 0));
    }
    default(v, k) {
      return (
        (this.defaultValue = v),
        (this.defaultValueDescription = k),
        this
      );
    }
    preset(v) {
      return ((this.presetArg = v), this);
    }
    conflicts(v) {
      return ((this.conflictsWith = this.conflictsWith.concat(v)), this);
    }
    implies(v) {
      let k = v;
      if (typeof v === "string") k = { [v]: !0 };
      return ((this.implied = Object.assign(this.implied || {}, k)), this);
    }
    env(v) {
      return ((this.envVar = v), this);
    }
    argParser(v) {
      return ((this.parseArg = v), this);
    }
    makeOptionMandatory(v = !0) {
      return ((this.mandatory = !!v), this);
    }
    hideHelp(v = !0) {
      return ((this.hidden = !!v), this);
    }
    _concatValue(v, k) {
      if (k === this.defaultValue || !Array.isArray(k)) return [v];
      return k.concat(v);
    }
    choices(v) {
      return (
        (this.argChoices = v.slice()),
        (this.parseArg = (k, O) => {
          if (!this.argChoices.includes(k))
            throw new rs(`Allowed choices are ${this.argChoices.join(", ")}.`);
          if (this.variadic) return this._concatValue(k, O);
          return k;
        }),
        this
      );
    }
    name() {
      if (this.long) return this.long.replace(/^--/, "");
      return this.short.replace(/^-/, "");
    }
    attributeName() {
      return is(this.name().replace(/^no-/, ""));
    }
    is(v) {
      return this.short === v || this.long === v;
    }
    isBoolean() {
      return !this.required && !this.optional && !this.negate;
    }
  }
  class rn {
    constructor(v) {
      ((this.positiveOptions = new Map()),
        (this.negativeOptions = new Map()),
        (this.dualOptions = new Set()),
        v.forEach((k) => {
          if (k.negate) this.negativeOptions.set(k.attributeName(), k);
          else this.positiveOptions.set(k.attributeName(), k);
        }),
        this.negativeOptions.forEach((k, O) => {
          if (this.positiveOptions.has(O)) this.dualOptions.add(O);
        }));
    }
    valueFromOption(v, k) {
      let O = k.attributeName();
      if (!this.dualOptions.has(O)) return !0;
      let R = this.negativeOptions.get(O).presetArg,
        T = R !== void 0 ? R : !1;
      return k.negate === (T === v);
    }
  }
  function is(v) {
    return v.split("-").reduce((k, O) => k + O[0].toUpperCase() + O.slice(1));
  }
  function ss(v) {
    let k,
      O,
      R = v.split(/[ |,]+/);
    if (R.length > 1 && !/^[[<]/.test(R[1])) k = R.shift();
    if (((O = R.shift()), !k && /^-[^-]$/.test(O))) ((k = O), (O = void 0));
    return { shortFlag: k, longFlag: O };
  }
  as.Option = on;
  as.DualOptions = rn;
});
var nn = commonJS(function (us) {
  function cs(v, k) {
    if (Math.abs(v.length - k.length) > 3) return Math.max(v.length, k.length);
    let O = [];
    for (let R = 0; R <= v.length; R++) O[R] = [R];
    for (let R = 0; R <= k.length; R++) O[0][R] = R;
    for (let R = 1; R <= k.length; R++)
      for (let T = 1; T <= v.length; T++) {
        let x = 1;
        if (v[T - 1] === k[R - 1]) x = 0;
        else x = 1;
        if (
          ((O[T][R] = Math.min(
            O[T - 1][R] + 1,
            O[T][R - 1] + 1,
            O[T - 1][R - 1] + x,
          )),
          T > 1 && R > 1 && v[T - 1] === k[R - 2] && v[T - 2] === k[R - 1])
        )
          O[T][R] = Math.min(O[T][R], O[T - 2][R - 2] + 1);
      }
    return O[v.length][k.length];
  }
  function ps(v, k) {
    if (!k || k.length === 0) return "";
    k = Array.from(new Set(k));
    let O = v.startsWith("--");
    if (O) ((v = v.slice(2)), (k = k.map((U) => U.slice(2))));
    let R = [],
      T = 3,
      x = 0.4;
    if (
      (k.forEach((U) => {
        if (U.length <= 1) return;
        let D = cs(v, U),
          N = Math.max(v.length, U.length);
        if ((N - D) / N > x) {
          if (D < T) ((T = D), (R = [U]));
          else if (D === T) R.push(U);
        }
      }),
      R.sort((U, D) => U.localeCompare(D)),
      O)
    )
      R = R.map((U) => `--${U}`);
    if (R.length > 1)
      return `
(Did you mean one of ${R.join(", ")}?)`;
    if (R.length === 1)
      return `
(Did you mean ${R[0]}?)`;
    return "";
  }
  us.suggestSimilar = ps;
});
var dn = commonJS(function (ws) {
  var fs = importMetaRequire("events").EventEmitter,
    fr = importMetaRequire("child_process"),
    It = importMetaRequire("path"),
    gr = importMetaRequire("fs"),
    xe = importMetaRequire("process"),
    { Argument: gs, humanReadableArgName: hs } = Qo(),
    { CommanderError: hr } = To(),
    { Help: _s } = ur(),
    { Option: sn, DualOptions: Ss } = mr(),
    { suggestSimilar: an } = nn();
  class _r extends fs {
    constructor(v) {
      super();
      ((this.commands = []),
        (this.options = []),
        (this.parent = null),
        (this._allowUnknownOption = !1),
        (this._allowExcessArguments = !0),
        (this.registeredArguments = []),
        (this._args = this.registeredArguments),
        (this.args = []),
        (this.rawArgs = []),
        (this.processedArgs = []),
        (this._scriptPath = null),
        (this._name = v || ""),
        (this._optionValues = {}),
        (this._optionValueSources = {}),
        (this._storeOptionsAsProperties = !1),
        (this._actionHandler = null),
        (this._executableHandler = !1),
        (this._executableFile = null),
        (this._executableDir = null),
        (this._defaultCommandName = null),
        (this._exitCallback = null),
        (this._aliases = []),
        (this._combineFlagAndOptionalValue = !0),
        (this._description = ""),
        (this._summary = ""),
        (this._argsDescription = void 0),
        (this._enablePositionalOptions = !1),
        (this._passThroughOptions = !1),
        (this._lifeCycleHooks = {}),
        (this._showHelpAfterError = !1),
        (this._showSuggestionAfterError = !0),
        (this._outputConfiguration = {
          writeOut: (k) => xe.stdout.write(k),
          writeErr: (k) => xe.stderr.write(k),
          getOutHelpWidth: () => (xe.stdout.isTTY ? xe.stdout.columns : void 0),
          getErrHelpWidth: () => (xe.stderr.isTTY ? xe.stderr.columns : void 0),
          outputError: (k, O) => O(k),
        }),
        (this._hidden = !1),
        (this._helpOption = void 0),
        (this._addImplicitHelpCommand = void 0),
        (this._helpCommand = void 0),
        (this._helpConfiguration = {}));
    }
    copyInheritedSettings(v) {
      return (
        (this._outputConfiguration = v._outputConfiguration),
        (this._helpOption = v._helpOption),
        (this._helpCommand = v._helpCommand),
        (this._helpConfiguration = v._helpConfiguration),
        (this._exitCallback = v._exitCallback),
        (this._storeOptionsAsProperties = v._storeOptionsAsProperties),
        (this._combineFlagAndOptionalValue = v._combineFlagAndOptionalValue),
        (this._allowExcessArguments = v._allowExcessArguments),
        (this._enablePositionalOptions = v._enablePositionalOptions),
        (this._showHelpAfterError = v._showHelpAfterError),
        (this._showSuggestionAfterError = v._showSuggestionAfterError),
        this
      );
    }
    _getCommandAndAncestors() {
      let v = [];
      for (let k = this; k; k = k.parent) v.push(k);
      return v;
    }
    command(v, k, O) {
      let R = k,
        T = O;
      if (typeof R === "object" && R !== null) ((T = R), (R = null));
      T = T || {};
      let [, x, U] = v.match(/([^ ]+) *(.*)/),
        D = this.createCommand(x);
      if (R) (D.description(R), (D._executableHandler = !0));
      if (T.isDefault) this._defaultCommandName = D._name;
      if (
        ((D._hidden = !!(T.noHelp || T.hidden)),
        (D._executableFile = T.executableFile || null),
        U)
      )
        D.arguments(U);
      if (
        (this._registerCommand(D),
        (D.parent = this),
        D.copyInheritedSettings(this),
        R)
      )
        return this;
      return D;
    }
    createCommand(v) {
      return new _r(v);
    }
    createHelp() {
      return Object.assign(new _s(), this.configureHelp());
    }
    configureHelp(v) {
      if (v === void 0) return this._helpConfiguration;
      return ((this._helpConfiguration = v), this);
    }
    configureOutput(v) {
      if (v === void 0) return this._outputConfiguration;
      return (Object.assign(this._outputConfiguration, v), this);
    }
    showHelpAfterError(v = !0) {
      if (typeof v !== "string") v = !!v;
      return ((this._showHelpAfterError = v), this);
    }
    showSuggestionAfterError(v = !0) {
      return ((this._showSuggestionAfterError = !!v), this);
    }
    addCommand(v, k) {
      if (!v._name)
        throw Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
      if (((k = k || {}), k.isDefault)) this._defaultCommandName = v._name;
      if (k.noHelp || k.hidden) v._hidden = !0;
      return (
        this._registerCommand(v),
        (v.parent = this),
        v._checkForBrokenPassThrough(),
        this
      );
    }
    createArgument(v, k) {
      return new gs(v, k);
    }
    argument(v, k, O, R) {
      let T = this.createArgument(v, k);
      if (typeof O === "function") T.default(R).argParser(O);
      else T.default(O);
      return (this.addArgument(T), this);
    }
    arguments(v) {
      return (
        v
          .trim()
          .split(/ +/)
          .forEach((k) => {
            this.argument(k);
          }),
        this
      );
    }
    addArgument(v) {
      let k = this.registeredArguments.slice(-1)[0];
      if (k && k.variadic)
        throw Error(`only the last argument can be variadic '${k.name()}'`);
      if (v.required && v.defaultValue !== void 0 && v.parseArg === void 0)
        throw Error(
          `a default value for a required argument is never used: '${v.name()}'`,
        );
      return (this.registeredArguments.push(v), this);
    }
    helpCommand(v, k) {
      if (typeof v === "boolean")
        return ((this._addImplicitHelpCommand = v), this);
      v = v ?? "help [command]";
      let [, O, R] = v.match(/([^ ]+) *(.*)/),
        T = k ?? "display help for command",
        x = this.createCommand(O);
      if ((x.helpOption(!1), R)) x.arguments(R);
      if (T) x.description(T);
      return (
        (this._addImplicitHelpCommand = !0),
        (this._helpCommand = x),
        this
      );
    }
    addHelpCommand(v, k) {
      if (typeof v !== "object") return (this.helpCommand(v, k), this);
      return (
        (this._addImplicitHelpCommand = !0),
        (this._helpCommand = v),
        this
      );
    }
    _getHelpCommand() {
      if (
        this._addImplicitHelpCommand ??
        (this.commands.length &&
          !this._actionHandler &&
          !this._findCommand("help"))
      ) {
        if (this._helpCommand === void 0) this.helpCommand(void 0, void 0);
        return this._helpCommand;
      }
      return null;
    }
    hook(v, k) {
      let O = ["preSubcommand", "preAction", "postAction"];
      if (!O.includes(v))
        throw Error(`Unexpected value for event passed to hook : '${v}'.
Expecting one of '${O.join("', '")}'`);
      if (this._lifeCycleHooks[v]) this._lifeCycleHooks[v].push(k);
      else this._lifeCycleHooks[v] = [k];
      return this;
    }
    exitOverride(v) {
      if (v) this._exitCallback = v;
      else
        this._exitCallback = (k) => {
          if (k.code !== "commander.executeSubCommandAsync") throw k;
        };
      return this;
    }
    _exit(v, k, O) {
      if (this._exitCallback) this._exitCallback(new hr(v, k, O));
      xe.exit(v);
    }
    action(v) {
      let k = (O) => {
        let R = this.registeredArguments.length,
          T = O.slice(0, R);
        if (this._storeOptionsAsProperties) T[R] = this;
        else T[R] = this.opts();
        return (T.push(this), v.apply(this, T));
      };
      return ((this._actionHandler = k), this);
    }
    createOption(v, k) {
      return new sn(v, k);
    }
    _callParseArg(v, k, O, R) {
      try {
        return v.parseArg(k, O);
      } catch (T) {
        if (T.code === "commander.invalidArgument") {
          let x = `${R} ${T.message}`;
          this.error(x, { exitCode: T.exitCode, code: T.code });
        }
        throw T;
      }
    }
    _registerOption(v) {
      let k =
        (v.short && this._findOption(v.short)) ||
        (v.long && this._findOption(v.long));
      if (k) {
        let O = v.long && this._findOption(v.long) ? v.long : v.short;
        throw Error(`Cannot add option '${v.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${O}'
-  already used by option '${k.flags}'`);
      }
      this.options.push(v);
    }
    _registerCommand(v) {
      let k = (R) => [R.name()].concat(R.aliases()),
        O = k(v).find((R) => this._findCommand(R));
      if (O) {
        let R = k(this._findCommand(O)).join("|"),
          T = k(v).join("|");
        throw Error(`cannot add command '${T}' as already have command '${R}'`);
      }
      this.commands.push(v);
    }
    addOption(v) {
      this._registerOption(v);
      let k = v.name(),
        O = v.attributeName();
      if (v.negate) {
        let T = v.long.replace(/^--no-/, "--");
        if (!this._findOption(T))
          this.setOptionValueWithSource(
            O,
            v.defaultValue === void 0 ? !0 : v.defaultValue,
            "default",
          );
      } else if (v.defaultValue !== void 0)
        this.setOptionValueWithSource(O, v.defaultValue, "default");
      let R = (T, x, U) => {
        if (T == null && v.presetArg !== void 0) T = v.presetArg;
        let D = this.getOptionValue(O);
        if (T !== null && v.parseArg) T = this._callParseArg(v, T, D, x);
        else if (T !== null && v.variadic) T = v._concatValue(T, D);
        if (T == null)
          if (v.negate) T = !1;
          else if (v.isBoolean() || v.optional) T = !0;
          else T = "";
        this.setOptionValueWithSource(O, T, U);
      };
      if (
        (this.on("option:" + k, (T) => {
          let x = `error: option '${v.flags}' argument '${T}' is invalid.`;
          R(T, x, "cli");
        }),
        v.envVar)
      )
        this.on("optionEnv:" + k, (T) => {
          let x = `error: option '${v.flags}' value '${T}' from env '${v.envVar}' is invalid.`;
          R(T, x, "env");
        });
      return this;
    }
    _optionEx(v, k, O, R, T) {
      if (typeof k === "object" && k instanceof sn)
        throw Error(
          "To add an Option object use addOption() instead of option() or requiredOption()",
        );
      let x = this.createOption(k, O);
      if ((x.makeOptionMandatory(!!v.mandatory), typeof R === "function"))
        x.default(T).argParser(R);
      else if (R instanceof RegExp) {
        let U = R;
        ((R = (D, N) => {
          let I = U.exec(D);
          return I ? I[0] : N;
        }),
          x.default(T).argParser(R));
      } else x.default(R);
      return this.addOption(x);
    }
    option(v, k, O, R) {
      return this._optionEx({}, v, k, O, R);
    }
    requiredOption(v, k, O, R) {
      return this._optionEx({ mandatory: !0 }, v, k, O, R);
    }
    combineFlagAndOptionalValue(v = !0) {
      return ((this._combineFlagAndOptionalValue = !!v), this);
    }
    allowUnknownOption(v = !0) {
      return ((this._allowUnknownOption = !!v), this);
    }
    allowExcessArguments(v = !0) {
      return ((this._allowExcessArguments = !!v), this);
    }
    enablePositionalOptions(v = !0) {
      return ((this._enablePositionalOptions = !!v), this);
    }
    passThroughOptions(v = !0) {
      return (
        (this._passThroughOptions = !!v),
        this._checkForBrokenPassThrough(),
        this
      );
    }
    _checkForBrokenPassThrough() {
      if (
        this.parent &&
        this._passThroughOptions &&
        !this.parent._enablePositionalOptions
      )
        throw Error(
          `passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`,
        );
    }
    storeOptionsAsProperties(v = !0) {
      if (this.options.length)
        throw Error("call .storeOptionsAsProperties() before adding options");
      if (Object.keys(this._optionValues).length)
        throw Error(
          "call .storeOptionsAsProperties() before setting option values",
        );
      return ((this._storeOptionsAsProperties = !!v), this);
    }
    getOptionValue(v) {
      if (this._storeOptionsAsProperties) return this[v];
      return this._optionValues[v];
    }
    setOptionValue(v, k) {
      return this.setOptionValueWithSource(v, k, void 0);
    }
    setOptionValueWithSource(v, k, O) {
      if (this._storeOptionsAsProperties) this[v] = k;
      else this._optionValues[v] = k;
      return ((this._optionValueSources[v] = O), this);
    }
    getOptionValueSource(v) {
      return this._optionValueSources[v];
    }
    getOptionValueSourceWithGlobals(v) {
      let k;
      return (
        this._getCommandAndAncestors().forEach((O) => {
          if (O.getOptionValueSource(v) !== void 0)
            k = O.getOptionValueSource(v);
        }),
        k
      );
    }
    _prepareUserArgs(v, k) {
      if (v !== void 0 && !Array.isArray(v))
        throw Error("first parameter to parse must be array or undefined");
      if (((k = k || {}), v === void 0 && k.from === void 0)) {
        if (xe.versions?.electron) k.from = "electron";
        let R = xe.execArgv ?? [];
        if (
          R.includes("-e") ||
          R.includes("--eval") ||
          R.includes("-p") ||
          R.includes("--print")
        )
          k.from = "eval";
      }
      if (v === void 0) v = xe.argv;
      this.rawArgs = v.slice();
      let O;
      switch (k.from) {
        case void 0:
        case "node":
          ((this._scriptPath = v[1]), (O = v.slice(2)));
          break;
        case "electron":
          if (xe.defaultApp) ((this._scriptPath = v[1]), (O = v.slice(2)));
          else O = v.slice(1);
          break;
        case "user":
          O = v.slice(0);
          break;
        case "eval":
          O = v.slice(1);
          break;
        default:
          throw Error(`unexpected parse option { from: '${k.from}' }`);
      }
      if (!this._name && this._scriptPath)
        this.nameFromFilename(this._scriptPath);
      return ((this._name = this._name || "program"), O);
    }
    parse(v, k) {
      let O = this._prepareUserArgs(v, k);
      return (this._parseCommand([], O), this);
    }
    async parseAsync(v, k) {
      let O = this._prepareUserArgs(v, k);
      return (await this._parseCommand([], O), this);
    }
    _executeSubCommand(v, k) {
      k = k.slice();
      let O = !1,
        R = [".js", ".ts", ".tsx", ".mjs", ".cjs"];
      function T(I, L) {
        let W = It.resolve(I, L);
        if (gr.existsSync(W)) return W;
        if (R.includes(It.extname(L))) return;
        let K = R.find((j) => gr.existsSync(`${W}${j}`));
        if (K) return `${W}${K}`;
        return;
      }
      (this._checkForMissingMandatoryOptions(),
        this._checkForConflictingOptions());
      let x = v._executableFile || `${this._name}-${v._name}`,
        U = this._executableDir || "";
      if (this._scriptPath) {
        let I;
        try {
          I = gr.realpathSync(this._scriptPath);
        } catch (L) {
          I = this._scriptPath;
        }
        U = It.resolve(It.dirname(I), U);
      }
      if (U) {
        let I = T(U, x);
        if (!I && !v._executableFile && this._scriptPath) {
          let L = It.basename(this._scriptPath, It.extname(this._scriptPath));
          if (L !== this._name) I = T(U, `${L}-${v._name}`);
        }
        x = I || x;
      }
      O = R.includes(It.extname(x));
      let D;
      if (xe.platform !== "win32")
        if (O)
          (k.unshift(x),
            (k = ln(xe.execArgv).concat(k)),
            (D = fr.spawn(xe.argv[0], k, { stdio: "inherit" })));
        else D = fr.spawn(x, k, { stdio: "inherit" });
      else
        (k.unshift(x),
          (k = ln(xe.execArgv).concat(k)),
          (D = fr.spawn(xe.execPath, k, { stdio: "inherit" })));
      if (!D.killed)
        ["SIGUSR1", "SIGUSR2", "SIGTERM", "SIGINT", "SIGHUP"].forEach((L) => {
          xe.on(L, () => {
            if (D.killed === !1 && D.exitCode === null) D.kill(L);
          });
        });
      let N = this._exitCallback;
      (D.on("close", (I) => {
        if (((I = I ?? 1), !N)) xe.exit(I);
        else N(new hr(I, "commander.executeSubCommandAsync", "(close)"));
      }),
        D.on("error", (I) => {
          if (I.code === "ENOENT") {
            let L = U
                ? `searched for local subcommand relative to directory '${U}'`
                : "no directory for search for local subcommand, use .executableDir() to supply a custom directory",
              W = `'${x}' does not exist
 - if '${v._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${L}`;
            throw Error(W);
          } else if (I.code === "EACCES") throw Error(`'${x}' not executable`);
          if (!N) xe.exit(1);
          else {
            let L = new hr(1, "commander.executeSubCommandAsync", "(error)");
            ((L.nestedError = I), N(L));
          }
        }),
        (this.runningCommand = D));
    }
    _dispatchSubcommand(v, k, O) {
      let R = this._findCommand(v);
      if (!R) this.help({ error: !0 });
      let T;
      return (
        (T = this._chainOrCallSubCommandHook(T, R, "preSubcommand")),
        (T = this._chainOrCall(T, () => {
          if (R._executableHandler) this._executeSubCommand(R, k.concat(O));
          else return R._parseCommand(k, O);
        })),
        T
      );
    }
    _dispatchHelpCommand(v) {
      if (!v) this.help();
      let k = this._findCommand(v);
      if (k && !k._executableHandler) k.help();
      return this._dispatchSubcommand(
        v,
        [],
        [
          this._getHelpOption()?.long ??
            this._getHelpOption()?.short ??
            "--help",
        ],
      );
    }
    _checkNumberOfArguments() {
      if (
        (this.registeredArguments.forEach((v, k) => {
          if (v.required && this.args[k] == null)
            this.missingArgument(v.name());
        }),
        this.registeredArguments.length > 0 &&
          this.registeredArguments[this.registeredArguments.length - 1]
            .variadic)
      )
        return;
      if (this.args.length > this.registeredArguments.length)
        this._excessArguments(this.args);
    }
    _processArguments() {
      let v = (O, R, T) => {
        let x = R;
        if (R !== null && O.parseArg) {
          let U = `error: command-argument value '${R}' is invalid for argument '${O.name()}'.`;
          x = this._callParseArg(O, R, T, U);
        }
        return x;
      };
      this._checkNumberOfArguments();
      let k = [];
      (this.registeredArguments.forEach((O, R) => {
        let T = O.defaultValue;
        if (O.variadic) {
          if (R < this.args.length) {
            if (((T = this.args.slice(R)), O.parseArg))
              T = T.reduce((x, U) => v(O, U, x), O.defaultValue);
          } else if (T === void 0) T = [];
        } else if (R < this.args.length) {
          if (((T = this.args[R]), O.parseArg)) T = v(O, T, O.defaultValue);
        }
        k[R] = T;
      }),
        (this.processedArgs = k));
    }
    _chainOrCall(v, k) {
      if (v && v.then && typeof v.then === "function") return v.then(() => k());
      return k();
    }
    _chainOrCallHooks(v, k) {
      let O = v,
        R = [];
      if (
        (this._getCommandAndAncestors()
          .reverse()
          .filter((T) => T._lifeCycleHooks[k] !== void 0)
          .forEach((T) => {
            T._lifeCycleHooks[k].forEach((x) => {
              R.push({ hookedCommand: T, callback: x });
            });
          }),
        k === "postAction")
      )
        R.reverse();
      return (
        R.forEach((T) => {
          O = this._chainOrCall(O, () => T.callback(T.hookedCommand, this));
        }),
        O
      );
    }
    _chainOrCallSubCommandHook(v, k, O) {
      let R = v;
      if (this._lifeCycleHooks[O] !== void 0)
        this._lifeCycleHooks[O].forEach((T) => {
          R = this._chainOrCall(R, () => T(this, k));
        });
      return R;
    }
    _parseCommand(v, k) {
      let O = this.parseOptions(k);
      if (
        (this._parseOptionsEnv(),
        this._parseOptionsImplied(),
        (v = v.concat(O.operands)),
        (k = O.unknown),
        (this.args = v.concat(k)),
        v && this._findCommand(v[0]))
      )
        return this._dispatchSubcommand(v[0], v.slice(1), k);
      if (this._getHelpCommand() && v[0] === this._getHelpCommand().name())
        return this._dispatchHelpCommand(v[1]);
      if (this._defaultCommandName)
        return (
          this._outputHelpIfRequested(k),
          this._dispatchSubcommand(this._defaultCommandName, v, k)
        );
      if (
        this.commands.length &&
        this.args.length === 0 &&
        !this._actionHandler &&
        !this._defaultCommandName
      )
        this.help({ error: !0 });
      (this._outputHelpIfRequested(O.unknown),
        this._checkForMissingMandatoryOptions(),
        this._checkForConflictingOptions());
      let R = () => {
          if (O.unknown.length > 0) this.unknownOption(O.unknown[0]);
        },
        T = `command:${this.name()}`;
      if (this._actionHandler) {
        (R(), this._processArguments());
        let x;
        if (
          ((x = this._chainOrCallHooks(x, "preAction")),
          (x = this._chainOrCall(x, () =>
            this._actionHandler(this.processedArgs),
          )),
          this.parent)
        )
          x = this._chainOrCall(x, () => {
            this.parent.emit(T, v, k);
          });
        return ((x = this._chainOrCallHooks(x, "postAction")), x);
      }
      if (this.parent && this.parent.listenerCount(T))
        (R(), this._processArguments(), this.parent.emit(T, v, k));
      else if (v.length) {
        if (this._findCommand("*")) return this._dispatchSubcommand("*", v, k);
        if (this.listenerCount("command:*")) this.emit("command:*", v, k);
        else if (this.commands.length) this.unknownCommand();
        else (R(), this._processArguments());
      } else if (this.commands.length) (R(), this.help({ error: !0 }));
      else (R(), this._processArguments());
    }
    _findCommand(v) {
      if (!v) return;
      return this.commands.find((k) => k._name === v || k._aliases.includes(v));
    }
    _findOption(v) {
      return this.options.find((k) => k.is(v));
    }
    _checkForMissingMandatoryOptions() {
      this._getCommandAndAncestors().forEach((v) => {
        v.options.forEach((k) => {
          if (k.mandatory && v.getOptionValue(k.attributeName()) === void 0)
            v.missingMandatoryOptionValue(k);
        });
      });
    }
    _checkForConflictingLocalOptions() {
      let v = this.options.filter((O) => {
        let R = O.attributeName();
        if (this.getOptionValue(R) === void 0) return !1;
        return this.getOptionValueSource(R) !== "default";
      });
      v.filter((O) => O.conflictsWith.length > 0).forEach((O) => {
        let R = v.find((T) => O.conflictsWith.includes(T.attributeName()));
        if (R) this._conflictingOption(O, R);
      });
    }
    _checkForConflictingOptions() {
      this._getCommandAndAncestors().forEach((v) => {
        v._checkForConflictingLocalOptions();
      });
    }
    parseOptions(v) {
      let k = [],
        O = [],
        R = k,
        T = v.slice();
      function x(D) {
        return D.length > 1 && D[0] === "-";
      }
      let U = null;
      while (T.length) {
        let D = T.shift();
        if (D === "--") {
          if (R === O) R.push(D);
          R.push(...T);
          break;
        }
        if (U && !x(D)) {
          this.emit(`option:${U.name()}`, D);
          continue;
        }
        if (((U = null), x(D))) {
          let N = this._findOption(D);
          if (N) {
            if (N.required) {
              let I = T.shift();
              if (I === void 0) this.optionMissingArgument(N);
              this.emit(`option:${N.name()}`, I);
            } else if (N.optional) {
              let I = null;
              if (T.length > 0 && !x(T[0])) I = T.shift();
              this.emit(`option:${N.name()}`, I);
            } else this.emit(`option:${N.name()}`);
            U = N.variadic ? N : null;
            continue;
          }
        }
        if (D.length > 2 && D[0] === "-" && D[1] !== "-") {
          let N = this._findOption(`-${D[1]}`);
          if (N) {
            if (N.required || (N.optional && this._combineFlagAndOptionalValue))
              this.emit(`option:${N.name()}`, D.slice(2));
            else (this.emit(`option:${N.name()}`), T.unshift(`-${D.slice(2)}`));
            continue;
          }
        }
        if (/^--[^=]+=/.test(D)) {
          let N = D.indexOf("="),
            I = this._findOption(D.slice(0, N));
          if (I && (I.required || I.optional)) {
            this.emit(`option:${I.name()}`, D.slice(N + 1));
            continue;
          }
        }
        if (x(D)) R = O;
        if (
          (this._enablePositionalOptions || this._passThroughOptions) &&
          k.length === 0 &&
          O.length === 0
        ) {
          if (this._findCommand(D)) {
            if ((k.push(D), T.length > 0)) O.push(...T);
            break;
          } else if (
            this._getHelpCommand() &&
            D === this._getHelpCommand().name()
          ) {
            if ((k.push(D), T.length > 0)) k.push(...T);
            break;
          } else if (this._defaultCommandName) {
            if ((O.push(D), T.length > 0)) O.push(...T);
            break;
          }
        }
        if (this._passThroughOptions) {
          if ((R.push(D), T.length > 0)) R.push(...T);
          break;
        }
        R.push(D);
      }
      return { operands: k, unknown: O };
    }
    opts() {
      if (this._storeOptionsAsProperties) {
        let v = {},
          k = this.options.length;
        for (let O = 0; O < k; O++) {
          let R = this.options[O].attributeName();
          v[R] = R === this._versionOptionName ? this._version : this[R];
        }
        return v;
      }
      return this._optionValues;
    }
    optsWithGlobals() {
      return this._getCommandAndAncestors().reduce(
        (v, k) => Object.assign(v, k.opts()),
        {},
      );
    }
    error(v, k) {
      if (
        (this._outputConfiguration.outputError(
          `${v}
`,
          this._outputConfiguration.writeErr,
        ),
        typeof this._showHelpAfterError === "string")
      )
        this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`);
      else if (this._showHelpAfterError)
        (this._outputConfiguration.writeErr(`
`),
          this.outputHelp({ error: !0 }));
      let O = k || {},
        R = O.exitCode || 1,
        T = O.code || "commander.error";
      this._exit(R, T, v);
    }
    _parseOptionsEnv() {
      this.options.forEach((v) => {
        if (v.envVar && v.envVar in xe.env) {
          let k = v.attributeName();
          if (
            this.getOptionValue(k) === void 0 ||
            ["default", "config", "env"].includes(this.getOptionValueSource(k))
          )
            if (v.required || v.optional)
              this.emit(`optionEnv:${v.name()}`, xe.env[v.envVar]);
            else this.emit(`optionEnv:${v.name()}`);
        }
      });
    }
    _parseOptionsImplied() {
      let v = new Ss(this.options),
        k = (O) =>
          this.getOptionValue(O) !== void 0 &&
          !["default", "implied"].includes(this.getOptionValueSource(O));
      this.options
        .filter(
          (O) =>
            O.implied !== void 0 &&
            k(O.attributeName()) &&
            v.valueFromOption(this.getOptionValue(O.attributeName()), O),
        )
        .forEach((O) => {
          Object.keys(O.implied)
            .filter((R) => !k(R))
            .forEach((R) => {
              this.setOptionValueWithSource(R, O.implied[R], "implied");
            });
        });
    }
    missingArgument(v) {
      let k = `error: missing required argument '${v}'`;
      this.error(k, { code: "commander.missingArgument" });
    }
    optionMissingArgument(v) {
      let k = `error: option '${v.flags}' argument missing`;
      this.error(k, { code: "commander.optionMissingArgument" });
    }
    missingMandatoryOptionValue(v) {
      let k = `error: required option '${v.flags}' not specified`;
      this.error(k, { code: "commander.missingMandatoryOptionValue" });
    }
    _conflictingOption(v, k) {
      let O = (x) => {
          let U = x.attributeName(),
            D = this.getOptionValue(U),
            N = this.options.find((L) => L.negate && U === L.attributeName()),
            I = this.options.find((L) => !L.negate && U === L.attributeName());
          if (
            N &&
            ((N.presetArg === void 0 && D === !1) ||
              (N.presetArg !== void 0 && D === N.presetArg))
          )
            return N;
          return I || x;
        },
        R = (x) => {
          let U = O(x),
            D = U.attributeName();
          if (this.getOptionValueSource(D) === "env")
            return `environment variable '${U.envVar}'`;
          return `option '${U.flags}'`;
        },
        T = `error: ${R(v)} cannot be used with ${R(k)}`;
      this.error(T, { code: "commander.conflictingOption" });
    }
    unknownOption(v) {
      if (this._allowUnknownOption) return;
      let k = "";
      if (v.startsWith("--") && this._showSuggestionAfterError) {
        let R = [],
          T = this;
        do {
          let x = T.createHelp()
            .visibleOptions(T)
            .filter((U) => U.long)
            .map((U) => U.long);
          ((R = R.concat(x)), (T = T.parent));
        } while (T && !T._enablePositionalOptions);
        k = an(v, R);
      }
      let O = `error: unknown option '${v}'${k}`;
      this.error(O, { code: "commander.unknownOption" });
    }
    _excessArguments(v) {
      if (this._allowExcessArguments) return;
      let k = this.registeredArguments.length,
        O = k === 1 ? "" : "s",
        T = `error: too many arguments${this.parent ? ` for '${this.name()}'` : ""}. Expected ${k} argument${O} but got ${v.length}.`;
      this.error(T, { code: "commander.excessArguments" });
    }
    unknownCommand() {
      let v = this.args[0],
        k = "";
      if (this._showSuggestionAfterError) {
        let R = [];
        (this.createHelp()
          .visibleCommands(this)
          .forEach((T) => {
            if ((R.push(T.name()), T.alias())) R.push(T.alias());
          }),
          (k = an(v, R)));
      }
      let O = `error: unknown command '${v}'${k}`;
      this.error(O, { code: "commander.unknownCommand" });
    }
    version(v, k, O) {
      if (v === void 0) return this._version;
      ((this._version = v),
        (k = k || "-V, --version"),
        (O = O || "output the version number"));
      let R = this.createOption(k, O);
      return (
        (this._versionOptionName = R.attributeName()),
        this._registerOption(R),
        this.on("option:" + R.name(), () => {
          (this._outputConfiguration.writeOut(`${v}
`),
            this._exit(0, "commander.version", v));
        }),
        this
      );
    }
    description(v, k) {
      if (v === void 0 && k === void 0) return this._description;
      if (((this._description = v), k)) this._argsDescription = k;
      return this;
    }
    summary(v) {
      if (v === void 0) return this._summary;
      return ((this._summary = v), this);
    }
    alias(v) {
      if (v === void 0) return this._aliases[0];
      let k = this;
      if (
        this.commands.length !== 0 &&
        this.commands[this.commands.length - 1]._executableHandler
      )
        k = this.commands[this.commands.length - 1];
      if (v === k._name)
        throw Error("Command alias can't be the same as its name");
      let O = this.parent?._findCommand(v);
      if (O) {
        let R = [O.name()].concat(O.aliases()).join("|");
        throw Error(
          `cannot add alias '${v}' to command '${this.name()}' as already have command '${R}'`,
        );
      }
      return (k._aliases.push(v), this);
    }
    aliases(v) {
      if (v === void 0) return this._aliases;
      return (v.forEach((k) => this.alias(k)), this);
    }
    usage(v) {
      if (v === void 0) {
        if (this._usage) return this._usage;
        let k = this.registeredArguments.map((O) => hs(O));
        return []
          .concat(
            this.options.length || this._helpOption !== null ? "[options]" : [],
            this.commands.length ? "[command]" : [],
            this.registeredArguments.length ? k : [],
          )
          .join(" ");
      }
      return ((this._usage = v), this);
    }
    name(v) {
      if (v === void 0) return this._name;
      return ((this._name = v), this);
    }
    nameFromFilename(v) {
      return ((this._name = It.basename(v, It.extname(v))), this);
    }
    executableDir(v) {
      if (v === void 0) return this._executableDir;
      return ((this._executableDir = v), this);
    }
    helpInformation(v) {
      let k = this.createHelp();
      if (k.helpWidth === void 0)
        k.helpWidth =
          v && v.error
            ? this._outputConfiguration.getErrHelpWidth()
            : this._outputConfiguration.getOutHelpWidth();
      return k.formatHelp(this, k);
    }
    _getHelpContext(v) {
      v = v || {};
      let k = { error: !!v.error },
        O;
      if (k.error) O = (R) => this._outputConfiguration.writeErr(R);
      else O = (R) => this._outputConfiguration.writeOut(R);
      return ((k.write = v.write || O), (k.command = this), k);
    }
    outputHelp(v) {
      let k;
      if (typeof v === "function") ((k = v), (v = void 0));
      let O = this._getHelpContext(v);
      (this._getCommandAndAncestors()
        .reverse()
        .forEach((T) => T.emit("beforeAllHelp", O)),
        this.emit("beforeHelp", O));
      let R = this.helpInformation(O);
      if (k) {
        if (((R = k(R)), typeof R !== "string" && !Buffer.isBuffer(R)))
          throw Error("outputHelp callback must return a string or a Buffer");
      }
      if ((O.write(R), this._getHelpOption()?.long))
        this.emit(this._getHelpOption().long);
      (this.emit("afterHelp", O),
        this._getCommandAndAncestors().forEach((T) =>
          T.emit("afterAllHelp", O),
        ));
    }
    helpOption(v, k) {
      if (typeof v === "boolean") {
        if (v) this._helpOption = this._helpOption ?? void 0;
        else this._helpOption = null;
        return this;
      }
      return (
        (v = v ?? "-h, --help"),
        (k = k ?? "display help for command"),
        (this._helpOption = this.createOption(v, k)),
        this
      );
    }
    _getHelpOption() {
      if (this._helpOption === void 0) this.helpOption(void 0, void 0);
      return this._helpOption;
    }
    addHelpOption(v) {
      return ((this._helpOption = v), this);
    }
    help(v) {
      this.outputHelp(v);
      let k = xe.exitCode || 0;
      if (k === 0 && v && typeof v !== "function" && v.error) k = 1;
      this._exit(k, "commander.help", "(outputHelp)");
    }
    addHelpText(v, k) {
      let O = ["beforeAll", "before", "after", "afterAll"];
      if (!O.includes(v))
        throw Error(`Unexpected value for position to addHelpText.
Expecting one of '${O.join("', '")}'`);
      let R = `${v}Help`;
      return (
        this.on(R, (T) => {
          let x;
          if (typeof k === "function")
            x = k({ error: T.error, command: T.command });
          else x = k;
          if (x)
            T.write(`${x}
`);
        }),
        this
      );
    }
    _outputHelpIfRequested(v) {
      let k = this._getHelpOption();
      if (k && v.find((R) => k.is(R)))
        (this.outputHelp(),
          this._exit(0, "commander.helpDisplayed", "(outputHelp)"));
    }
  }
  function ln(v) {
    return v.map((k) => {
      if (!k.startsWith("--inspect")) return k;
      let O,
        R = "127.0.0.1",
        T = "9229",
        x;
      if ((x = k.match(/^(--inspect(-brk)?)$/)) !== null) O = x[1];
      else if ((x = k.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null)
        if (((O = x[1]), /^\d+$/.test(x[3]))) T = x[3];
        else R = x[3];
      else if (
        (x = k.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null
      )
        ((O = x[1]), (R = x[3]), (T = x[4]));
      if (O && T !== "0") return `${O}=${R}:${parseInt(T) + 1}`;
      return k;
    });
  }
  ws.Command = _r;
});
var fn = commonJS(function (bs) {
  var { Argument: cn } = Qo(),
    { Command: Sr } = dn(),
    { CommanderError: Cs, InvalidArgumentError: pn } = To(),
    { Help: vs } = ur(),
    { Option: mn } = mr();
  bs.program = new Sr();
  bs.createCommand = (v) => new Sr(v);
  bs.createOption = (v, k) => new mn(v, k);
  bs.createArgument = (v, k) => new cn(v, k);
  bs.Command = Sr;
  bs.Option = mn;
  bs.Argument = cn;
  bs.Help = vs;
  bs.CommanderError = Cs;
  bs.InvalidArgumentError = pn;
  bs.InvalidOptionArgumentError = pn;
});
var hn = commonJS(function (pt, gn) {
  var wt = fn();
  pt = gn.exports = {};
  pt.program = new wt.Command();
  pt.Argument = wt.Argument;
  pt.Command = wt.Command;
  pt.CommanderError = wt.CommanderError;
  pt.Help = wt.Help;
  pt.InvalidArgumentError = wt.InvalidArgumentError;
  pt.InvalidOptionArgumentError = wt.InvalidArgumentError;
  pt.Option = wt.Option;
  pt.createCommand = (v) => new wt.Command(v);
  pt.createOption = (v, k) => new wt.Option(v, k);
  pt.createArgument = (v, k) => new wt.Argument(v, k);
});
function Qr() {
  mL({ jitless: !0 });
}
var _n = toESM(hn(), 1),
  {
    program: nl,
    createCommand: il,
    createArgument: sl,
    createOption: al,
    CommanderError: ll,
    InvalidArgumentError: Ft,
    InvalidOptionArgumentError: dl,
    Command: Wt,
    Argument: cl,
    Option: z,
    Help: Sn,
  } = _n.default;
import { randomUUID } from "crypto";
function wn(v) {
  v.configureHelp({
    ...v.configureHelp(),
    visibleCommands(k) {
      let O = Sn.prototype.visibleCommands.call(this, k);
      if (k !== v) return O;
      let R = [...O, ...Fs()];
      return this.sortSubcommands
        ? R.sort((T, x) => T.name().localeCompare(x.name()))
        : R;
    },
  });
}
function Fs() {
  return [
    new Wt("attach")
      .argument("<id>")
      .description(
        "Open a background session in this terminal. <id> is the short id that `claude --bg` prints and `claude agents` lists",
      ),
    new Wt("logs")
      .argument("<id>")
      .description("Print a background session's recent terminal output"),
    new Wt("stop")
      .alias("kill")
      .argument("<id>")
      .description(
        "Stop a background session. Its conversation is kept: `claude attach <id>` opens it again, `claude --resume` works once it is stopped",
      ),
    new Wt("respawn")
      .argument("[id]")
      .option("--all", "Restart every running background session")
      .description(
        "Restart a background session, or all of them with --all, so it runs the current Claude Code version",
      ),
    new Wt("rm")
      .argument("<id>")
      .description(
        "Delete a background session, and its worktree when that is safe. Works on sessions that have already exited",
      ),
  ];
}
var xo = 2,
  Mo = 2,
  Us = 36,
  Ns = 30,
  yn = 4;
function wr(v, k) {
  let O = Math.max(k, 1),
    R = [];
  for (let T of v.split(`
`)) {
    let x = T.match(/\s*\S+/g);
    if (!x) {
      R.push("");
      continue;
    }
    let U = "",
      D = 0,
      N = !1;
    for (let I of x) {
      let L = te(I);
      if (!N) ((U = I), (D = L), (N = !0));
      else if (D + L <= O) ((U += I), (D += L));
      else {
        R.push(U);
        let W = I.replace(/^\s+/, "");
        ((U = W), (D = te(W)));
      }
    }
    R.push(U);
  }
  return R.join(`
`);
}
function Zo(v, k, O, R) {
  let T = " ".repeat(xo);
  if (!k) return T + v;
  let x = te(v);
  if (
    k.includes(`
`)
  ) {
    let L = x <= O ? repeatString(" ", O - x + Mo) : " ".repeat(Mo);
    return (T + v + L + k).replace(
      /\n/g,
      `
` + T,
    );
  }
  let U = R - xo - O - Mo;
  if (x <= O && U >= Ns) {
    let L = repeatString(" ", O - x + Mo),
      W = " ".repeat(xo + O + Mo),
      K = wr(k, U);
    return (
      T +
      v +
      L +
      K.replace(
        /\n/g,
        `
` + W,
      )
    );
  }
  let D = " ".repeat(xo + yn),
    N = R - xo - yn,
    I = wr(k, N);
  return (
    T +
    v +
    `
` +
    D +
    I.replace(
      /\n/g,
      `
` + D,
    )
  );
}
function er(v, k, O) {
  if (O.length === 0) return;
  v.push(k, ...O, "");
}
function Bs(v, k) {
  let O = k.helpWidth || 80,
    R = Math.min(k.padWidth(v, k), Us),
    T = [`Usage: ${k.commandUsage(v)}`, ""],
    x = k.commandDescription(v);
  if (x.length > 0) T.push(wr(x, O), "");
  if (
    (er(
      T,
      "Arguments:",
      k
        .visibleArguments(v)
        .map((U) => Zo(k.argumentTerm(U), k.argumentDescription(U), R, O)),
    ),
    er(
      T,
      "Options:",
      k
        .visibleOptions(v)
        .map((U) => Zo(k.optionTerm(U), k.optionDescription(U), R, O)),
    ),
    k.showGlobalOptions)
  )
    er(
      T,
      "Global Options:",
      k
        .visibleGlobalOptions(v)
        .map((U) => Zo(k.optionTerm(U), k.optionDescription(U), R, O)),
    );
  return (
    er(
      T,
      "Commands:",
      k
        .visibleCommands(v)
        .map((U) => Zo(k.subcommandTerm(U), k.subcommandDescription(U), R, O)),
    ),
    T.join(`
`)
  );
}
function Ot() {
  let v = (k) => k.long?.replace(/^--/, "") ?? k.short?.replace(/^-/, "") ?? "";
  return Object.assign(
    { sortSubcommands: !0, sortOptions: !0, formatHelp: Bs },
    { compareOptions: (k, O) => v(k).localeCompare(v(O)) },
  );
}
function Cn(v, k) {
  v.command("add <name> <commandOrUrl> [args...]")
    .description(
      `Add an MCP server to Claude Code.

Examples:
  # Add HTTP server:
  claude mcp add --transport http sentry https://mcp.sentry.dev/mcp

  # Add HTTP server with headers:
  claude mcp add --transport http corridor https://app.corridor.dev/api/mcp --header "Authorization: Bearer ..."

  # Add stdio server with environment variables:
  claude mcp add my-server -e API_KEY=xxx -- npx my-mcp-server

  # Add stdio server with subprocess flags:
  claude mcp add my-server -- my-command --some-flag arg1`,
    )
    .option(
      "-s, --scope <scope>",
      "Configuration scope (local, user, or project)",
      "local",
    )
    .option(
      "-t, --transport <transport>",
      "Transport type (stdio, sse, http). Defaults to stdio if not specified.",
    )
    .option(
      "-e, --env <env...>",
      "Set environment variables (e.g. -e KEY=value)",
    )
    .option(
      "-H, --header <header...>",
      'Set headers for HTTP/SSE servers (e.g. -H "X-Api-Key: abc123" -H "X-Custom: value")',
    )
    .option("--client-id <clientId>", "OAuth client ID for HTTP/SSE servers")
    .option(
      "--client-secret",
      "Prompt for OAuth client secret (or set MCP_CLIENT_SECRET env var)",
    )
    .option(
      "--callback-port <port>",
      "Fixed port for OAuth callback (for servers requiring pre-registered redirect URIs)",
    )
    .helpOption("-h, --help", "Display help for command")
    .addOption(
      new z(
        "--xaa",
        "Enable XAA (SEP-990) for this server. Requires 'claude mcp xaa setup' first. Also requires --client-id and --client-secret (for the MCP server's AS).",
      ).hideHelp(!isXaaEnabled()),
    )
    .action(
      k(async (R, T, x, U, D) => {
        let N = x,
          I = U;
        if (!T)
          cliError(`Error: Server name is required.
Usage: claude mcp add <name> <command> [args...]`);
        else if (!N)
          cliError(`Error: Command is required when server name is provided.
Usage: claude mcp add <name> <command> [args...]`);
        try {
          let L = normalizeMcpScope(D.scope),
            W = normalizeMcpTransportType(D.transport);
          if (D.xaa && !isXaaEnabled())
            cliError(
              "Error: --xaa requires CLAUDE_CODE_ENABLE_XAA=1 in your environment",
            );
          let K = Boolean(D.xaa);
          if (K) {
            let q = [];
            if (!D.clientId) q.push("--client-id");
            if (!D.clientSecret) q.push("--client-secret");
            if (!getXaaIdpConfig())
              q.push("'claude mcp xaa setup' (settings.xaaIdp not configured)");
            if (q.length) cliError(`Error: --xaa requires: ${q.join(", ")}`);
          }
          let j = D.transport !== void 0,
            V =
              N.startsWith("http://") ||
              N.startsWith("https://") ||
              N.startsWith("localhost") ||
              N.endsWith("/sse") ||
              N.endsWith("/mcp");
          if (
            (await logEventAsync("tengu_mcp_add", {
              type: fromEnum(W),
              scope: fromEnum(L),
              source: S("command"),
              transport: fromEnum(W),
              transportExplicit: j,
              looksLikeUrl: V,
            }),
            W === "sse" || W === "http")
          ) {
            let q = W === "sse" ? "SSE" : "HTTP";
            if (!N) return cliErrorAfterAnalyticsFlush(`Error: URL is required for ${q} transport.`);
            let J = D.header ? parseMcpHeaders(D.header) : void 0,
              X = D.callbackPort ? parseConfigInteger(D.callbackPort) : void 0;
            if (X !== void 0 && (!Number.isInteger(X) || X <= 0 || X > 65535))
              return cliErrorAfterAnalyticsFlush(
                "Error: --callback-port must be an integer in [1, 65535]",
              );
            let ce =
                D.clientId || X || K
                  ? {
                      ...(D.clientId && { clientId: D.clientId }),
                      ...(X && { callbackPort: X }),
                      ...(K && { xaa: !0 }),
                    }
                  : void 0,
              { readClientSecret: Me, saveMcpClientSecret: Le } = import.meta
                .require("../../02-功能模块/MCP客户端/mcpClientModule.4cyej0np.js")
                .mcpAuthModule(),
              qe = D.clientSecret && D.clientId ? await Me() : void 0,
              fe =
                W === "sse"
                  ? { type: "sse", url: N, headers: J, oauth: ce }
                  : { type: "http", url: N, headers: J, oauth: ce };
            if ((await addMcpConfig(T, fe, L, R), qe)) {
              let oe = await Le(T, fe, qe);
              if (!oe.success)
                process.stderr
                  .write(`Server added, but the client secret could not be stored${oe.warning ? ` (${oe.warning})` : ""}. Re-run with --client-secret once secure storage is available.
`);
            }
            if (
              (process.stdout
                .write(`Added ${q} MCP server ${T} with URL: ${fp(N)} to ${L} config
`),
              J)
            )
              process.stdout.write(`Headers: ${b(zur(J), null, 2)}
`);
          } else {
            if (D.clientId || D.clientSecret || D.callbackPort || D.xaa)
              process.stderr
                .write(`Warning: --client-id, --client-secret, --callback-port, and --xaa are only supported for HTTP/SSE transports and will be ignored for stdio.
`);
            let q = V ? fp(N) : N;
            if (!j && V) {
              process.stderr.write(`
Warning: The command "${q}" looks like a URL, but is being interpreted as a stdio server as --transport was not specified.
`);
              let X = Aa("mcp add --transport http", T),
                ce = Aa("mcp add --transport sse", T);
              if (X && ce)
                (process.stderr.write(`If this is an HTTP server, use: ${X} ${q}
`),
                  process.stderr
                    .write(`If this is an SSE server, use: ${ce} ${q}
`));
              else
                process.stderr
                  .write(`If this is a remote server, re-run with --transport http (or sse).
`);
            }
            let J = parseEnvAssignments(D.env);
            (await addMcpConfig(T, { type: "stdio", command: N, args: I, env: J }, L, R),
              process.stdout
                .write(`Added stdio MCP server ${T} with command: ${q} ${I.join(" ")} to ${L} config
`));
          }
          return cliOkAfterAnalyticsFlush(`File modified: ${formatMcpScopeLocation(L)}`);
        } catch (L) {
          return cliErrorAfterAnalyticsFlush(l(L));
        }
      }),
    );
}
function Ke() {
  return import.meta.require("../../02-功能模块/MCP客户端/mcpClientModule.4cyej0np.js").mcpXaaIdpLoginModule();
}
function vn(v, k) {
  let O = v
    .command("xaa")
    .description("Manage the XAA (SEP-990) IdP connection");
  (O.command("setup")
    .description(
      "Configure the IdP connection (one-time setup for all XAA-enabled servers)",
    )
    .requiredOption("--issuer <url>", "IdP issuer URL (OIDC discovery)")
    .requiredOption("--client-id <id>", "Claude Code's client_id at the IdP")
    .option(
      "--client-secret",
      "Read IdP client secret from MCP_XAA_IDP_CLIENT_SECRET env var",
    )
    .option(
      "--callback-port <port>",
      "Fixed loopback callback port (only if IdP does not honor RFC 8252 port-any matching)",
    )
    .action(
      k(async (R, T) => {
        let x;
        try {
          x = new URL(T.issuer);
        } catch {
          return cliError(`Error: --issuer must be a valid URL (got "${T.issuer}")`);
        }
        if (
          x.protocol !== "https:" &&
          !(
            x.protocol === "http:" &&
            (x.hostname === "localhost" ||
              x.hostname === "127.0.0.1" ||
              x.hostname === "[::1]")
          )
        )
          return cliError(
            `Error: --issuer must use https:// (got "${x.protocol}//${x.host}")`,
          );
        let U = T.callbackPort ? parseConfigInteger(T.callbackPort) : void 0;
        if (U !== void 0 && (!Number.isInteger(U) || U <= 0 || U > 65535))
          return cliError("Error: --callback-port must be an integer in [1, 65535]");
        let D = T.clientSecret ? a.MCP_XAA_IDP_CLIENT_SECRET : void 0;
        if (T.clientSecret && !D)
          return cliError(
            "Error: --client-secret requires MCP_XAA_IDP_CLIENT_SECRET env var",
          );
        let N = getXaaIdpConfig(),
          I = N?.issuer,
          L = N?.clientId,
          { error: W } = await updateSettingsForSource(
            "userSettings",
            {
              xaaIdp: {
                issuer: T.issuer,
                clientId: T.clientId,
                callbackPort: U,
              },
            },
            void 0,
            R,
          );
        if (W) return cliError(`Error writing settings: ${W.message}`);
        if (I) {
          if (Ke().issuerKey(I) !== Ke().issuerKey(T.issuer))
            (await Ke().clearIdpIdToken(I), await Ke().clearIdpClientSecret(I));
          else if (L !== T.clientId)
            (await Ke().clearIdpIdToken(I), await Ke().clearIdpClientSecret(I));
        }
        if (D) {
          let { success: K, warning: j } = await Ke().saveIdpClientSecret(
            T.issuer,
            D,
          );
          if (!K)
            return cliError(
              `Error: settings written but keychain save failed${j ? ` \u2014 ${j}` : ""}. Re-run with --client-secret once keychain is available.`,
            );
        }
        cliOk(`XAA IdP connection configured for ${T.issuer}`);
      }),
    ),
    O.command("login")
      .description(
        "Cache an IdP id_token so XAA-enabled MCP servers authenticate silently. Default: run the OIDC browser login. With --id-token: write a pre-obtained JWT directly (used by conformance/e2e tests where the mock IdP does not serve /authorize).",
      )
      .option(
        "--force",
        "Ignore any cached id_token and re-login (useful after IdP-side revocation)",
      )
      .option(
        "--id-token <jwt>",
        "Write this pre-obtained id_token directly to cache, skipping the OIDC browser login",
      )
      .action(async (R) => {
        let T = getXaaIdpConfig();
        if (!T)
          return cliError(
            "Error: no XAA IdP connection. Run 'claude mcp xaa setup' first.",
          );
        if (R.idToken)
          try {
            let U = await Ke().saveIdpIdTokenFromJwt(T.issuer, R.idToken);
            return cliOk(
              `id_token cached for ${T.issuer} (expires ${new Date(U).toISOString()})`,
            );
          } catch (U) {
            return cliError(`id_token cache write failed: ${l(U)}`);
          }
        if (R.force) await Ke().clearIdpIdToken(T.issuer);
        if ((await Ke().getCachedIdpIdToken(T.issuer)) !== void 0)
          return cliOk(
            `Already logged in to ${T.issuer} (cached id_token still valid). Use --force to re-login.`,
          );
        process.stdout.write(`Opening browser for IdP login at ${T.issuer}\u2026
`);
        try {
          (await Ke().acquireIdpIdToken({
            idpIssuer: T.issuer,
            idpClientId: T.clientId,
            idpClientSecret: await Ke().getIdpClientSecret(T.issuer),
            callbackPort: T.callbackPort,
            onAuthorizationUrl: (U) => {
              process.stdout.write(`If the browser did not open, visit:
  ${formatHyperlink(U, void 0, { assumeSupport: !0 })}
`);
            },
          }),
            cliOk(
              "Logged in. MCP servers with --xaa will now authenticate silently.",
            ));
        } catch (U) {
          cliError(`IdP login failed: ${l(U)}`);
        }
      }),
    O.command("show")
      .description("Show the current IdP connection config")
      .action(async () => {
        let R = getXaaIdpConfig();
        if (!R) return cliOk("No XAA IdP connection configured.");
        let T = (await Ke().getIdpClientSecret(R.issuer)) !== void 0,
          x = (await Ke().getCachedIdpIdToken(R.issuer)) !== void 0;
        if (
          (process.stdout.write(`Issuer:        ${R.issuer}
`),
          process.stdout.write(`Client ID:     ${R.clientId}
`),
          R.callbackPort !== void 0)
        )
          process.stdout.write(`Callback port: ${R.callbackPort}
`);
        (process.stdout
          .write(`Client secret: ${T ? "(stored in keychain)" : "(not set \u2014 PKCE-only)"}
`),
          process.stdout
            .write(`Logged in:     ${x ? "yes (id_token cached)" : "no \u2014 run 'claude mcp xaa login'"}
`),
          cliOk());
      }),
    O.command("clear")
      .description("Clear the IdP connection config and cached id_token")
      .action(
        k(async (R) => {
          let T = getXaaIdpConfig(),
            { error: x } = await updateSettingsForSource(
              "userSettings",
              { xaaIdp: void 0 },
              void 0,
              R,
            );
          if (x) return cliError(`Error writing settings: ${x.message}`);
          if (T)
            (await Ke().clearIdpIdToken(T.issuer),
              await Ke().clearIdpClientSecret(T.issuer));
          cliOk("XAA IdP connection cleared");
        }),
      ));
}
function En(v, k) {
  let O = v
    .command("mcp")
    .description("Configure and manage MCP servers")
    .configureHelp(Ot())
    .enablePositionalOptions();
  if (
    (O.command("serve")
      .description("Start the Claude Code MCP server")
      .option("-d, --debug", "Enable debug mode", () => !0)
      .option(
        "--verbose",
        "Override verbose mode setting from config",
        () => !0,
      )
      .action(
        k(async (T, x) => {
          let { mcpServeHandler: U } = await import("../../02-功能模块/MCP客户端/mcpAddFromDesktopHandler.k5n890xx.js");
          await U(x, T);
        }),
      ),
    Cn(O, k),
    isXaaEnabled())
  )
    vn(O, k);
  (O.command("remove <name>")
    .description("Remove an MCP server")
    .option(
      "-s, --scope <scope>",
      "Configuration scope (local, user, or project) - if not specified, removes from whichever scope it exists in",
    )
    .action(
      k(async (T, x, U) => {
        let [{ mcpRemoveHandler: D }, { createSubcommandRoot: N }] =
          await Promise.all([
            import("../../02-功能模块/MCP客户端/mcpAddFromDesktopHandler.k5n890xx.js"),
            import("./setupTokenHandler.q3zjg9cb.js"),
          ]);
        return (await D(await N(), x, U, T), cliOkAfterAnalyticsFlush());
      }),
    ),
    O.command("list")
      .description(
        "List configured MCP servers. Unapproved .mcp.json servers are shown as \u23F8 Pending approval and not connected to; approved servers are health-checked unless disabled for this project.",
      )
      .action(
        k(async (T) => {
          let [
            { mcpListHandler: x },
            { createSubcommandRoot: U },
            { credentialsStoreFor: D },
          ] = await Promise.all([
            import("../../02-功能模块/MCP客户端/mcpAddFromDesktopHandler.k5n890xx.js"),
            import("./setupTokenHandler.q3zjg9cb.js"),
            import("../../01-核心基础设施/共享小工具-未细化/credentialsStoreFor.r7prg4pg.js"),
          ]);
          await x(await U(), T, D(T));
        }),
      ),
    O.command("get <name>")
      .description(
        "Get details about an MCP server. Unapproved .mcp.json servers are shown as \u23F8 Pending approval and not connected to; approved servers are health-checked unless disabled for this project.",
      )
      .action(
        k(async (T, x) => {
          let [
            { mcpGetHandler: U },
            { createSubcommandRoot: D },
            { credentialsStoreFor: N },
          ] = await Promise.all([
            import("../../02-功能模块/MCP客户端/mcpAddFromDesktopHandler.k5n890xx.js"),
            import("./setupTokenHandler.q3zjg9cb.js"),
            import("../../01-核心基础设施/共享小工具-未细化/credentialsStoreFor.r7prg4pg.js"),
          ]);
          await U(await D(), x, T, N(T));
        }),
      ),
    O.command("login <name>")
      .description(
        "Authenticate with an MCP server (HTTP, SSE, or claude.ai connector)",
      )
      .option(
        "--no-browser",
        "Print the authorization URL instead of opening a browser (for SSH/headless sessions \u2014 paste the redirect URL back when prompted)",
      )
      .action(
        k(async (T, x, U) => {
          let [{ mcpLoginHandler: D }, { credentialsStoreFor: N }] =
            await Promise.all([
              import("../../02-功能模块/MCP客户端/mcpLoginHandler.t6m2hzbf.js"),
              import("../../01-核心基础设施/共享小工具-未细化/credentialsStoreFor.r7prg4pg.js"),
            ]);
          await D(x, U, T, N(T));
        }),
      ),
    O.command("logout <name>")
      .description("Clear stored OAuth credentials for an MCP server")
      .action(
        k(async (T, x) => {
          let [{ mcpLogoutHandler: U }, { credentialsStoreFor: D }] =
            await Promise.all([
              import("../../02-功能模块/MCP客户端/mcpLoginHandler.t6m2hzbf.js"),
              import("../../01-核心基础设施/共享小工具-未细化/credentialsStoreFor.r7prg4pg.js"),
            ]);
          await U(x, T, D(T));
        }),
      ),
    O.command("add-json <name> <json>")
      .description(
        "Add an MCP server (stdio, SSE, HTTP, or WebSocket) with a JSON string",
      )
      .option(
        "-s, --scope <scope>",
        "Configuration scope (local, user, or project)",
        "local",
      )
      .option(
        "--client-secret",
        "Prompt for OAuth client secret (or set MCP_CLIENT_SECRET env var)",
      )
      .action(
        k(async (T, x, U, D) => {
          let [{ mcpAddJsonHandler: N }, { createSubcommandRoot: I }] =
            await Promise.all([
              import("../../02-功能模块/MCP客户端/mcpAddFromDesktopHandler.k5n890xx.js"),
              import("./setupTokenHandler.q3zjg9cb.js"),
            ]);
          return (await N(await I(), x, U, D, T), cliOkAfterAnalyticsFlush());
        }),
      ),
    O.command("add-from-claude-desktop")
      .description("Import MCP servers from Claude Desktop (Mac and WSL only)")
      .option(
        "-s, --scope <scope>",
        "Configuration scope (local, user, or project)",
        "local",
      )
      .action(
        k(async (T, x) => {
          let { mcpAddFromDesktopHandler: U } =
            await import("../../02-功能模块/MCP客户端/mcpAddFromDesktopHandler.k5n890xx.js");
          await U(x, T);
        }),
      ),
    O.command("reset-project-choices")
      .description(
        "Reset all approved and rejected project-scoped (.mcp.json) servers within this project",
      )
      .action(
        k(async (T) => {
          let [{ mcpResetChoicesHandler: x }, { createSubcommandRoot: U }] =
            await Promise.all([
              import("../../02-功能模块/MCP客户端/mcpAddFromDesktopHandler.k5n890xx.js"),
              import("./setupTokenHandler.q3zjg9cb.js"),
            ]);
          return (await x(await U(), T), cliOkAfterAnalyticsFlush());
        }),
      ));
}
function An(v, k, O) {
  let R = () => new z("--cowork", "Use cowork_plugins directory").hideHelp(),
    T = v
      .command("plugin")
      .alias("plugins")
      .description("Manage Claude Code plugins")
      .configureHelp(Ot());
  (T.command("init <name>")
    .aliases(zw.init.aliases)
    .description(zw.init.description)
    .option("--description <text>", "Manifest description")
    .option("--author <name>", "Author name (default: git config user.name)")
    .option(
      "--author-email <email>",
      "Author email (default: git config user.email)",
    )
    .option("--with <components...>", `Also scaffold: ${PLUGIN_SCAFFOLD_COMPONENTS.join(", ")}`)
    .option(
      "-f, --force",
      "Overwrite an existing .claude-plugin/ at the target",
    )
    .action(
      k(async (D, N, I) => {
        let [{ pluginInitHandler: L }, { createSubcommandRoot: W }] =
          await Promise.all([
            import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
            import("./setupTokenHandler.q3zjg9cb.js"),
          ]);
        await L(await W(), N, I, D);
      }),
    ),
    T.command("validate <path>")
      .description(zw.validate.description)
      .option(
        "--strict",
        "Treat warnings as errors (exit 1). Use in CI to fail on unrecognized fields, missing metadata, and other issues that the runtime tolerates.",
      )
      .option(
        "--json",
        "Output the validation report as JSON (same exit codes)",
      )
      .addOption(R())
      .action(async (D, N) => {
        let [{ pluginValidateHandler: I }, { createSubcommandRoot: L }] =
          await Promise.all([
            import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
            import("./setupTokenHandler.q3zjg9cb.js"),
          ]);
        await I(L, D, N);
      }),
    T.command("tag [path]")
      .description(zw.tag.description)
      .option("--push", "Push the tag to --remote after creating it")
      .option("--dry-run", "Print what would be tagged without creating it")
      .option(
        "-f, --force",
        "Skip the dirty-working-tree and tag-already-exists checks",
      )
      .option(
        "-m, --message <msg>",
        "Tag annotation message (use %s for the version)",
      )
      .option("--remote <name>", "Remote to push to with --push", "origin")
      .action(async (D, N) => {
        let [{ pluginTagHandler: I }, { createSubcommandRoot: L }] =
          await Promise.all([
            import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
            import("./setupTokenHandler.q3zjg9cb.js"),
          ]);
        await I(await L(), D, N);
      }),
    T.command("list")
      .description(zw.list.description)
      .option("--json", "Output as JSON")
      .option(
        "--available",
        "Include available plugins from marketplaces (requires --json)",
      )
      .addOption(R())
      .action(
        O(async (D, N, I) => {
          let [{ pluginListHandler: L }, { createSubcommandRoot: W }] =
            await Promise.all([
              import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
              import("./setupTokenHandler.q3zjg9cb.js"),
            ]);
          (await L(W, I, D, N), cliOk());
        }),
      ));
  {
    let D = () => {
        if (!isPluginEvalEnabled()) cliError("`plugin eval` is currently in early access");
      },
      N = T.command("eval [target]")
        .description(zw.eval.description)
        .option("--case <glob>", "Filter cases by name glob")
        .option("--tag <tag...>", "Filter cases by tag (repeatable)")
        .option(
          "--runs <n>",
          "Override per-case runs (default: case.runs ?? 3)",
        )
        .option("--model <model>", "Override model for all cases")
        .option(
          "--judge-model <model>",
          "Override LLM-grader model (default: haiku)",
        )
        .option(
          "--max-cost-usd <usd>",
          "Optional hard cost ceiling; abort and report partial results if hit (exit 2). " +
            "Overrun is bounded to one agent run \u2014 when that run breaches, paid graders (llm/baseline) are skipped while free graders still score it. " +
            "Runs are already bounded by max_turns and timeout_seconds \u2014 only set this when you need a strict budget",
        )
        .option(
          "--output-dir <dir>",
          "Directory for aggregate-result.json (default: ./<eval dir>/results/<timestamp>/)",
        )
        .option(
          "--eval-dir <dir>",
          "Directory name (below the plugin) that holds the eval cases; results go to <plugin>/<dir>/results/ \u2014 for an installed-plugin target, ./<dir>/results/ with this flag, else ./evals/results/ (default dir: the manifest's experimental.evals value, else evals/)",
        )
        .option(
          "--json [path]",
          "Print the full run result (prompts, graders, per-run scores) as JSON to stdout, or write it to this .json file",
        )
        .option(
          "--threshold <0..1>",
          "Exit 1 if any case score is below this threshold (default: 1.0)",
        )
        .option(
          "--allow-tools <tools...>",
          "Operator grant for gated tools (Bash, Write, Edit, WebFetch, mcp__*). Supports Tool(pattern:*) syntax",
        )
        .option(
          "--scaffold",
          "Run each case's scaffold_script (runs author-supplied bash as you; off by default \u2014 only use on case files you authored)",
        )
        .option("--no-scaffold", "Explicitly skip scaffold_script")
        .option(
          "--ablation <mode>",
          "Run a no-plugin baseline arm and report the score delta (none | with-without; default: with-without whenever a plugin resolves \u2014 by name, or from the target path \u2014 and none when nothing does; under with-without, graders marked with-only, incl. `tool_used: Skill`, are a plugin-fired indicator rather than part of the score)",
        )
        .option(
          "--mocks <mode>",
          "Mock stand-ins for MCP servers, from <eval dir>/mocks/ (record | off; default: record \u2014 off spawns the real servers, gated by --allow-tools as usual)",
        )
        .option("--keep-temp", "Preserve scaffold dirs for debugging")
        .option(
          "--verbose",
          "Log per-message trace events to the debug log (use --debug-file to read them)",
        )
        .option(
          "--report <path>",
          "Write the self-contained HTML report (scores, prompts, grader verdicts) to <path> instead of the results dir",
        )
        .option(
          "--publish-report",
          "Also require publishing the report to claude.ai (already the default when your account supports it); explains why if unavailable",
        )
        .option(
          "--no-publish",
          "Keep the HTML report local only; skip publishing it to claude.ai",
        )
        .action(
          O(async (I, L, W, K) => {
            if (
              (D(),
              K.ablation !== void 0 &&
                K.ablation !== "none" &&
                K.ablation !== "with-without")
            )
              cliError('--ablation must be "none" or "with-without"');
            let { pluginEvalHandler: j } = await import("../../02-功能模块/插件系统/pluginEvalInitHandler.sdxbyz28.js");
            await j(
              W,
              {
                ...K,
                runs: K.runs ? parseConfigInteger(K.runs) : void 0,
                maxCostUsd: K.maxCostUsd ? parseFloat(K.maxCostUsd) : void 0,
                threshold: K.threshold ? parseFloat(K.threshold) : void 0,
                noScaffold: K.scaffold === void 0 ? void 0 : !K.scaffold,
                ablation: K.ablation,
              },
              I,
              L,
            );
          }),
        );
    N.command("init [name]")
      .description(zw.evalInit.description)
      .option(
        "--bare",
        "Write a blank template (prompt.md + graders/criteria.md) instead of running the interview",
      )
      .option(
        "-i, --interactive",
        "Run the authoring interview (already the default in a terminal); requires an interactive terminal",
      )
      .addOption(new z("--interview", "Alias for --interactive").hideHelp())
      .option(
        "--eval-dir <dir>",
        "Directory (below the current directory) to write cases into (default: experimental.evals from the plugin.json in the current directory, else evals/)",
      )
      .action(async (I, L) => {
        D();
        let { pluginEvalInitHandler: W } = await import("../../02-功能模块/插件系统/pluginEvalInitHandler.sdxbyz28.js");
        (await W(I, {
          bare: L.bare,
          forceInteractive: L.interactive || L.interview,
          evalDir: L.evalDir ?? N.opts().evalDir,
        }),
          cliOk());
      });
  }
  T.command("details <name>")
    .description(zw.details.description)
    .addOption(R())
    .action(
      O(async (D, N, I, L) => {
        let [{ pluginDetailsHandler: W }, { createSubcommandRoot: K }] =
          await Promise.all([
            import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
            import("./setupTokenHandler.q3zjg9cb.js"),
          ]);
        (await W(K, I, L, D, N), cliOk());
      }),
    );
  let U = T.command("marketplace")
    .description("Manage Claude Code marketplaces")
    .configureHelp(Ot());
  (U.command("add <source>")
    .description(zw.marketplaceAdd.description)
    .addOption(R())
    .option(
      "--sparse <paths...>",
      "Limit checkout to specific directories via git sparse-checkout (for monorepos). Example: --sparse .claude-plugin plugins",
    )
    .option(
      "--scope <scope>",
      "Where to declare the marketplace: user (default), project, or local",
    )
    .option(
      "--claudeai",
      "Add the marketplace of this name that claude.ai hosts for you, by its listed name or its local name (see: claude plugin marketplace list)",
    )
    .action(
      O(async (D, N, I, L) => {
        let [{ marketplaceAddHandler: W }, { createSubcommandRoot: K }] =
          await Promise.all([
            import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
            import("./setupTokenHandler.q3zjg9cb.js"),
          ]);
        await W(await K(), I, L, D, N);
      }),
    ),
    U.command("list")
      .description(zw.marketplaceList.description)
      .option("--json", "Output as JSON")
      .addOption(R())
      .action(
        k(async (D, N) => {
          let [{ marketplaceListHandler: I }, { createSubcommandRoot: L }] =
            await Promise.all([
              import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
              import("./setupTokenHandler.q3zjg9cb.js"),
            ]);
          (await I(L, N, D), cliOk());
        }),
      ),
    U.command("remove <name>")
      .aliases(zw.marketplaceRemove.aliases)
      .description(zw.marketplaceRemove.description)
      .option(
        "--scope <scope>",
        "Remove the marketplace declaration from a specific settings scope: user, project, or local. Omit to remove it from every scope.",
      )
      .addOption(R())
      .action(
        k(async (D, N, I) => {
          let [{ marketplaceRemoveHandler: L }, { createSubcommandRoot: W }] =
            await Promise.all([
              import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
              import("./setupTokenHandler.q3zjg9cb.js"),
            ]);
          (await L(await W(), N, I, D), cliOk());
        }),
      ),
    U.command("update [name]")
      .description(zw.marketplaceUpdate.description)
      .addOption(R())
      .action(
        k(async (D, N, I) => {
          let [{ marketplaceUpdateHandler: L }, { createSubcommandRoot: W }] =
            await Promise.all([
              import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
              import("./setupTokenHandler.q3zjg9cb.js"),
            ]);
          await L(await W(), N, I, D);
        }),
      ),
    T.command("install <plugin>")
      .aliases(zw.install.aliases)
      .description(zw.install.description)
      .option(
        "-s, --scope <scope>",
        "Installation scope: user, project, or local",
        "user",
      )
      .option(
        "--config <key=value>",
        "Set a userConfig option declared in the plugin's manifest (repeatable). Values are validated against the schema and stored via the same path as the interactive /plugin configure flow.",
        (D, N = []) => [...N, D],
      )
      .option(
        "-y, --yes",
        "Accept the displayed marketplace-declared command without the confirmation prompt \u2014 a plugin installed by running a command, or one whose archive is fetched through a headersHelper command (required when stdin or stdout is not a TTY)",
      )
      .addOption(R())
      .action(
        k(async (D, N, I) => {
          let [{ pluginInstallHandler: L }, { createSubcommandRoot: W }] =
            await Promise.all([
              import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
              import("./setupTokenHandler.q3zjg9cb.js"),
            ]);
          await L(await W(), N, I, D);
        }),
      ),
    T.command("uninstall <plugin>")
      .aliases(zw.uninstall.aliases)
      .description(zw.uninstall.description)
      .option(
        "-s, --scope <scope>",
        "Uninstall from scope: user, project, or local",
        "user",
      )
      .option(
        "--keep-data",
        "Preserve the plugin's persistent data directory (~/.claude/plugins/data/{id}/)",
      )
      .option(
        "--prune",
        "Also remove auto-installed dependencies that are no longer needed (requires -y in non-interactive contexts)",
      )
      .option(
        "-y, --yes",
        "Skip the --prune confirmation prompt (required when stdin or stdout is not a TTY)",
      )
      .addOption(R())
      .action(
        k(async (D, N, I) => {
          let [{ pluginUninstallHandler: L }, { createSubcommandRoot: W }] =
            await Promise.all([
              import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
              import("./setupTokenHandler.q3zjg9cb.js"),
            ]);
          await L(await W(), N, I, D);
        }),
      ),
    T.command("prune")
      .aliases(zw.prune.aliases)
      .description(zw.prune.description)
      .option(
        "-s, --scope <scope>",
        "Prune at scope: user, project, or local",
        "user",
      )
      .option("--dry-run", "List what would be removed without removing")
      .option(
        "-y, --yes",
        "Skip the confirmation prompt (required when stdin or stdout is not a TTY)",
      )
      .addOption(R())
      .action(
        k(async (D, N) => {
          let [{ pluginPruneHandler: I }, { createSubcommandRoot: L }] =
            await Promise.all([
              import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
              import("./setupTokenHandler.q3zjg9cb.js"),
            ]);
          await I(await L(), N, D);
        }),
      ),
    T.command("enable <plugin>")
      .description(zw.enable.description)
      .option(
        "-s, --scope <scope>",
        `Installation scope: ${jB.join(", ")} (default: auto-detect)`,
      )
      .addOption(R())
      .action(
        k(async (D, N, I) => {
          let [{ pluginEnableHandler: L }, { createSubcommandRoot: W }] =
            await Promise.all([
              import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
              import("./setupTokenHandler.q3zjg9cb.js"),
            ]);
          await L(await W(), N, I, D);
        }),
      ),
    T.command("disable [plugin]")
      .description(zw.disable.description)
      .option("-a, --all", "Disable all enabled plugins")
      .option(
        "-s, --scope <scope>",
        `Installation scope: ${jB.join(", ")} (default: auto-detect)`,
      )
      .addOption(R())
      .action(
        k(async (D, N, I) => {
          let [{ pluginDisableHandler: L }, { createSubcommandRoot: W }] =
            await Promise.all([
              import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js"),
              import("./setupTokenHandler.q3zjg9cb.js"),
            ]);
          await L(await W(), N, I, D);
        }),
      ),
    T.command("update <plugin>")
      .description(zw.update.description)
      .option(
        "-s, --scope <scope>",
        `Installation scope: ${n9e.join(", ")} (default: user)`,
      )
      .option(
        "-y, --yes",
        "Accept the displayed marketplace-declared command without the confirmation prompt \u2014 a changed install command, or the headersHelper command that fetches its archive (required when stdin or stdout is not a TTY)",
      )
      .addOption(R())
      .action(
        k(async (D, N, I) => {
          let { pluginUpdateHandler: L } = await import("../../02-功能模块/插件系统/marketplaceAddHandler.1j5syrfw.js");
          await L(N, I, D);
        }),
      ));
}
import { basename } from "path";
F();
import { openSync, writeSync } from "fs";
var Ls = {
  iterm: "iTerm",
  "iterm.app": "iTerm",
  ghostty: "Ghostty",
  kitty: "kitty",
  alacritty: "Alacritty",
  wezterm: "WezTerm",
  apple_terminal: "Terminal",
};
function kn(v) {
  let k = a.TERM_PROGRAM;
  if (!k) return;
  let O = Ls[k.toLowerCase()];
  if (!O) return;
  if (getGlobalConfig().deepLinkTerminal === O) return;
  (saveGlobalConfig((T) => ({ ...T, deepLinkTerminal: O }), v),
    n(`Stored deep link terminal preference: ${O}`));
}
class yr {
  frameDurations = [];
  totalFrames = 0;
  firstRenderTime;
  lastRenderTime;
  record(v) {
    let k = performance.now();
    if (this.firstRenderTime === void 0) this.firstRenderTime = k;
    if (
      ((this.lastRenderTime = k),
      this.totalFrames++,
      this.frameDurations.push(v),
      this.frameDurations.length > 3600)
    )
      this.frameDurations.splice(0, this.frameDurations.length >> 1);
  }
  getMetrics() {
    if (
      this.totalFrames === 0 ||
      this.firstRenderTime === void 0 ||
      this.lastRenderTime === void 0
    )
      return;
    let v = this.lastRenderTime - this.firstRenderTime;
    if (v <= 0) return;
    let k = this.totalFrames / (v / 1000),
      O = this.frameDurations.slice().sort((U, D) => D - U),
      R = Math.max(0, Math.ceil(O.length * 0.01) - 1),
      T = O[R],
      x = T > 0 ? 1000 / T : 0;
    return {
      averageFps: Math.round(k * 100) / 100,
      low1PctFps: Math.round(x * 100) / 100,
    };
  }
}
function aa(Cc) {
  return Cc(!1);
}
function ca(vc) {
  return vc.execRelaunch();
}
function la(bc) {
  (bc(), import("../../02-功能模块/认证-OAuth登录/execRelaunch.ewkdrr0a.js").then(ca));
}
function da(Ac) {
  return { ...Ac, phase: "save-failed" };
}
function ta(v) {
  if (a.CLAUBBIT || !checkHasTrustDialogAccepted()) return;
  (Dx(!0), primePlanSlugCollisions(v));
}
function oa(v) {
  saveGlobalConfig(
    (k) => ({
      ...k,
      hasCompletedOnboarding: !0,
      lastOnboardingVersion: {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.263",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-06T01:08:56Z",
        GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
        HOOKS_WORKER_URL:
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION,
    }),
    v,
  );
}
function In(v, k) {
  return async (O) => {
    let R = await getPendingMcpServers(v),
      T = getGatingSettingsErrors();
    if (R.pendingServers.length === 0) return null;
    if (T.length > 0) {
      let x = dedupe(T.map((U) => U.file).filter(Boolean)).join(", ");
      return (
        logFeatureSad(
          "mcp_project_approval_dialog",
          "mcp_project_approval_skipped_settings_errors",
        ),
        k({
          key: "mcp-approval-skipped",
          text: `skipping .mcp.json server approval (settings errors${x ? ` in ${x}` : ""}) \xB7 run \`claude doctor\` to list them, fix them, then restart`,
        }),
        null
      );
    }
    try {
      return await renderMcpServerApprovalDialog(
        R,
        (x) => {
          try {
            let U = ra(x);
            if (U) k(U);
          } catch (U) {
            logError(ge(U));
          } finally {
            O();
          }
        },
        v,
      );
    } catch (x) {
      throw (
        logFeatureBad("mcp_project_approval_dialog", "mcp_project_approval_dialog_threw"),
        x
      );
    }
  };
}
function ra(v) {
  if (v.persistFailed)
    return (
      logFeatureBad("mcp_project_approval_dialog", "mcp_approval_persist_failed"),
      {
        key: "mcp-approval-persist-failed",
        text: "one or more of your MCP server choices could not be saved (check permissions on .claude/settings.local.json) \xB7 you will be asked again next startup",
      }
    );
  let k = getWorkspacePersistedTrustKey();
  if (
    lrt().some((O) => O.workspaceKey === k) &&
    !isWorkspacePersistedTrusted() &&
    isLocalSettingsGitTracked({ onIndeterminate: "tracked" })
  )
    return (
      logFeatureSad("mcp_project_approval_dialog", "mcp_approval_persist_gated"),
      {
        key: "mcp-approval-persist-gated",
        text: "your MCP server choices apply to this session only (workspace not explicitly trusted; .claude/settings.local.json is gated) \xB7 to persist, add them to enabledMcpjsonServers in ~/.claude/settings.json",
      }
    );
  return (logFeatureOk("mcp_project_approval_dialog"), null);
}
async function Ne(v, k, O) {
  return Rr(v, k, { color: "error", beforeExit: O });
}
async function Rr(v, k, O) {
  let R = O?.color,
    T = O?.exitCode ?? 1;
  if (
    (showScreen(v, R ? e(t, { color: R, children: k }) : e(t, { children: k })),
    v.unmount(),
    await O?.beforeExit?.(),
    T !== 0)
  ) {
    let { setBgExitCause: N, setBgExitDetail: I } =
      await import("../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js");
    (N("exit_with_message"), I("exit_with_message", k));
  }
  let { flushAnalyticsSinks: x } = await import("../../01-核心基础设施/核心工具-进程与信号/flushAnalyticsSinks.tbwzvw9n.js");
  await x();
  let { drainRegisteredWriteQueues: U } = await import("../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js"),
    { withTimeout: D } = await import("../../01-核心基础设施/共享小工具-未细化/withTimeout.0mr4qg1r.js");
  (await D(U(), 2000, "write queue drain timeout (exitWithMessage)").catch(
    () => {},
  ),
    process.exit(T));
}
function qt(v, k, O) {
  return new Promise((R, T) => {
    runSteps(
      v,
      [
        (x) =>
          k((U) => {
            (R(U), x());
          }),
      ],
      {
        session: B(),
        onChangeAppState: O?.onChangeAppState,
        marksJobBlocked: !0,
      },
    ).catch(T);
  });
}
async function io(v, k, O, R, T) {
  let x = showScreen(v, k);
  (markConfigBootPhaseComplete(), prewarmStartupServices(O, R, T));
  try {
    if (
      (await Promise.race([
        v.waitUntilExit().then(() => "exited"),
        x.replaced.then(() => "replaced"),
      ])) === "replaced"
    )
      return;
  } catch (U) {
    let D = ge(U),
      I = (await p0t().catch(() => !1))
        ? " It happened while the fullscreen renderer was starting, so the next launch will use the classic renderer (CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1 forces that any time)."
        : "";
    if (
      (emitExitMessage(
        `Claude Code exited after an unrecoverable interface error (${D.message}).${I}`,
      ),
      isBgSession() || isSupervisedMode())
    )
      throw U;
    try {
      reportError(D, "unhandled_rejection");
    } catch {}
    await gracefulShutdown(1, "other");
    return;
  }
  (await shutdownCoordinators.of(O.host).runBeforeInteractiveShutdown(), await gracefulShutdown(0));
}
var na = 2000,
  Mn = "GB post-onboarding init";
async function Hn(v, k, O, R, T, x, U, D, N, I) {
  let L = {
      onboardingShown: !1,
      mcpApprovalSkipWarning: null,
      claudeInChromeAccepted: !1,
    },
    W = (K) => {
      L.mcpApprovalSkipWarning = K;
    };
  if (isBgSession() || a.CLAUDE_BRIDGE_REATTACH_SESSION) {
    let K = [
      () => (
        Dx(!0),
        resetGrowthBook({ preservePendingExposures: !0 }),
        initializeGrowthBook().catch((j) => logError(ge(j))),
        getSystemContext(v),
        null
      ),
      In(N, W),
      () => (
        dR(),
        import("./setup.sbdmcpy2.js").then((j) => j.maybePrewarmRecallIndex(v)),
        primePlanSlugCollisions(N),
        capturePolicySnapshot(),
        setImmediate(initializeTelemetryAfterTrust, N),
        null
      ),
    ];
    return (await runSteps(k, K, { session: v, storageV5: N }), L);
  }
  if (Ie(!1) || a.IS_DEMO) return (ta(N), capturePolicySnapshot(), L);
  return (
    await runSteps(
      k,
      ia(
        {
          session: v,
          permissionMode: O,
          allowDangerouslySkipPermissions: R,
          commands: T,
          claudeInChrome: x,
          devChannels: U,
          offerClaudeInChrome: D,
          storageV5: N,
          credentials: I,
        },
        L,
      ),
      { session: v, onChangeAppState: handleReplAppStateChange, marksJobBlocked: !0, storageV5: N },
    ),
    L
  );
}
function ia(
  {
    session: v,
    permissionMode: k,
    allowDangerouslySkipPermissions: O,
    commands: R,
    claudeInChrome: T,
    devChannels: x,
    offerClaudeInChrome: U,
    storageV5: D,
    credentials: N,
  },
  I,
) {
  let L = getGlobalConfig(),
    W = !1,
    K = !0;
  return [
    (j) => {
      if (
        L.hasCompletedOnboarding &&
        a.CLAUDE_CODE_POWERUP_ONBOARDING !== "banner" &&
        a.CLAUDE_CODE_POWERUP_ONBOARDING !== "step"
      )
        return null;
      return (
        (I.onboardingShown = !0),
        import("../../02-功能模块/斜杠命令-UI组件/Onboarding.ppm4vtef.js").then(({ Onboarding: V }) =>
          e(V, {
            host: v.host,
            onDone: () => {
              (oa(D), j());
            },
          }),
        )
      );
    },
    (j) => {
      if (a.CLAUBBIT) return null;
      if (((K = checkHasTrustDialogAccepted()), K && !shouldOfferTrustBackstop())) return null;
      return (
        (W = !0),
        import("../../02-功能模块/权限系统/TrustDialog.syp7kdw2.js").then(({ TrustDialog: V }) =>
          e(V, { commands: R, onDone: j }),
        )
      );
    },
    () => {
      if (a.CLAUBBIT) return null;
      if ((Dx(!0), W)) {
        if ((clearPluginCache("post-trust: re-discover project @skills-dir plugins"), shouldFillPluginLoadWithStore(N)))
          loadAllPluginsCacheOnly(D, N).catch(() => {});
      }
      if ((resetGrowthBook({ preservePendingExposures: !0 }), L.hasCompletedOnboarding))
        return (initializeGrowthBook().catch((j) => logError(ge(j))), null);
      return (resetUserData(), sa());
    },
    () => {
      if (a.CLAUBBIT) return null;
      return (getSystemContext(v), null);
    },
    (j) =>
      a.CLAUBBIT
        ? null
        : In(D, (V) => {
            I.mcpApprovalSkipWarning = V;
          })(j),
    async (j) => {
      if (a.CLAUBBIT || !(await shouldShowExternalIncludesDialog(v, D))) return null;
      let V = getExternalInstructionIncludes(await getSessionMemoryFiles(v, !0, D, N)),
        { ClaudeMdExternalIncludesDialog: q } =
          await import("../../02-功能模块/Memory-CLAUDE.md/ClaudeMdExternalIncludesDialog.5tp7a8xn.js");
      return e(q, {
        onDone: () => j(),
        isStandaloneDialog: !0,
        externalIncludes: V,
      });
    },
    () => {
      if (
        (addTrackedRepoPath(D),
        kn(D),
        dR(),
        import("./setup.sbdmcpy2.js").then((j) => j.maybePrewarmRecallIndex(v)),
        primePlanSlugCollisions(D),
        capturePolicySnapshot(),
        W && !K && !Nn() && !isSimpleMode())
      )
        import("../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js").then((j) => j.startMemoryWatcher(D, N));
      return (setImmediate(initializeTelemetryAfterTrust, D), null);
    },
    async (j) => {
      if (!(await shouldShowGroveNotice(D, N))) return null;
      let { GroveDialog: V } = await import("../../02-功能模块/Grove-隐私设置/PrivacySettingsDialog.xfhvxg8z.js");
      return e(V, {
        showIfAlreadyViewed: !1,
        location: I.onboardingShown ? "onboarding" : "policy_update_modal",
        onDone: (q) => {
          if (q !== "escape") {
            j();
            return;
          }
          (logEvent("tengu_grove_policy_exited", {}),
            gracefulShutdownSync(0),
            (I.onboardingShown = !1),
            (I.claudeInChromeAccepted = !1),
            j("stop"));
        },
      });
    },
    async (j) => {
      let { getProTrialState: V } = await import("../../01-核心基础设施/共享小工具-未细化/chunk-f4zey5rf.js");
      if (V().status !== "not_started") return null;
      let { ProTrialStartScreen: q } = await import("../../02-功能模块/账号-订阅/ProTrialStartScreen.2mt8fcr2.js");
      return (
        logEvent("tengu_pro_trial_start_screen_shown", {}),
        e(q, { onDone: () => j(), storageV5: D, credentials: N })
      );
    },
    async (j) => {
      if (!I.onboardingShown) return null;
      let { resolvePowerupDiscoveryArm: V } =
        await import("../../01-核心基础设施/共享小工具-未细化/chunk-aeg1pn1f.js");
      if (V() !== "step") return null;
      let { PowerupDiscoveryStep: q } = await import("../../02-功能模块/新手引导(Onboarding)/PowerupDiscoveryStep.p1f3ce53.js");
      return e(q, { onDone: () => j() });
    },
    (j) => {
      let V = getUnapprovedCustomApiKey();
      if (!V) return null;
      return import("../../02-功能模块/认证-OAuth登录/ApproveApiKey.vsj58w41.js").then(({ ApproveApiKey: q }) =>
        e(q, { customApiKeyTruncated: V, onDone: () => j() }),
      );
    },
    Dn("bedrock", D),
    Dn("vertex", D),
    async (j) => {
      let V;
      try {
        V = await Bnn();
      } catch (X) {
        return (logError(X), null);
      }
      let { lines: q, hasHardFailure: J } = V;
      if (q.length === 0) return null;
      return e(Fn, {
        afterMs: J ? 4000 : 1500,
        onDone: j,
        children: e(o, {
          flexDirection: "column",
          children: q.map((X) => e(t, { color: "warning", children: X }, X)),
        }),
      });
    },
    (j) => {
      if ((k !== "bypassPermissions" && !O) || hasSkipDangerousModePermissionPrompt()) return null;
      return import("../../02-功能模块/斜杠命令-UI组件/BypassPermissionsModeDialog.d9va36zm.js").then(
        ({ BypassPermissionsModeDialog: V }) =>
          e(V, { onAccept: () => j(), storageV5: D }),
      );
    },
    async (j) => {
      if (ym().length === 0 && (x?.length ?? 0) === 0) return null;
      if ((await checkGate_CACHED_OR_BLOCKING("tengu_harbor"), !x || x.length === 0)) return null;
      let [
          { isChannelsEnabled: V },
          { isChannelsPolicyBlocked: q },
          { getSettingsForSource: J },
        ] = await Promise.all([
          import("../../02-功能模块/插件系统/chunk-rbjz1q03.js"),
          import("../../01-核心基础设施/共享小工具-未细化/CHANNEL_PERMISSION_METHOD.0t5jksc8.js"),
          import("../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js"),
        ]),
        X = () => {
          let Me = x.map((Le) => ({ ...Le, dev: !0 }));
          (Sae(ym().concat(Me)), cMn(!0));
        };
      if (!V() || getAPIProvider() !== "firstParty" || q(J("policySettings")))
        return (X(), null);
      let { DevChannelsDialog: ce } = await import("../../02-功能模块/插件系统/DevChannelsDialog.wp2a141g.js");
      return e(ce, {
        channels: x,
        onAccept: () => {
          (X(), j());
        },
      });
    },
    (j) => {
      if (!T || getGlobalConfig().hasCompletedClaudeInChromeOnboarding) return null;
      return import("../../02-功能模块/ClaudeinChrome/ClaudeInChromeOnboarding.gf6zmqr4.js").then(
        ({ ClaudeInChromeOnboarding: V }) => e(V, { onDone: () => j() }),
      );
    },
    async (j) => {
      if (!U) return null;
      let { isChromeExtensionInstalled: V } =
          await import("../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
        q = await withTimeout(
          V(),
          1500,
          "chrome extension scan timed out before offer",
        ).catch(() => !0),
        J = Boolean(getGlobalConfig().chromeExtension?.pairedDeviceId);
      if (!q && !J)
        return (
          n(
            "[Claude in Chrome] Skipping offer: extension not present locally (stale cache)",
          ),
          null
        );
      await withTimeout(
        initializeGrowthBook().catch(() => {}),
        1500,
        "GrowthBook init timed out before chrome offer",
      ).catch(() => {});
      let X = getFeatureValue_CACHED_MAY_BE_STALE("tengu_chrome_auto_enable", !1),
        ce = getGlobalConfig().claudeInChromeDefaultEnabled !== void 0,
        { doesEnterpriseMcpConfigExist: Me, isMcpServerDenied: Le } =
          await import("../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
        { CLAUDE_IN_CHROME_MCP_SERVER_NAME: qe } =
          await import("../../01-核心基础设施/共享小工具-未细化/claude-in-chrome-mcp-constants.js"),
        { getClaudeInChromeMcpServerConfig: fe, isClaudeInChromeAllowed: oe } =
          await import("../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js");
      if (Me() || Le(qe, fe()) || !oe())
        return (
          n(
            "[Claude in Chrome] Skipping offer: blocked by enterprise MCP config, managed deniedMcpServers policy, or organization policy (allow_claude_browser_extension)",
          ),
          null
        );
      if (ce)
        return (
          n(
            "[Claude in Chrome] Skipping offer: decision already recorded (another instance answered)",
          ),
          (I.claudeInChromeAccepted = getGlobalConfig().claudeInChromeDefaultEnabled === !0),
          null
        );
      if (!X)
        return (
          n(
            "[Claude in Chrome] Skipping offer: tengu_chrome_auto_enable no longer set (stale GB cache)",
          ),
          null
        );
      let { ChromeAutoEnableDialog: $e } = await import("../../02-功能模块/ClaudeinChrome/ChromeAutoEnableDialog.vfs4tecm.js");
      return e($e, {
        onDone: (ut) => {
          ((I.claudeInChromeAccepted = ut), j());
        },
        isDontAskMode: k === "dontAsk",
        isAutoMode: k === "auto",
      });
    },
  ];
}
async function sa() {
  let v = Date.now();
  try {
    (await withTimeout(initializeGrowthBook(), na, Mn),
      n(`[STARTUP] post-onboarding GB await ${Date.now() - v}ms`));
  } catch (k) {
    if (
      (n(`[STARTUP] post-onboarding GB await ${Date.now() - v}ms: ${k}`, {
        level: "warn",
      }),
      !(k instanceof Error && k.message === Mn))
    )
      logError(ge(k));
  }
  return null;
}
function Fn(cc) {
  let uc = _(4),
    { afterMs: Cr, onDone: vr, children: pc } = cc,
    js,
    $s;
  if (uc[0] !== Cr || uc[1] !== vr)
    ((js = () => {
      let mc = setTimeout(vr, Cr);
      return () => clearTimeout(mc);
    }),
      ($s = [Cr, vr]),
      (uc[0] = Cr),
      (uc[1] = vr),
      (uc[2] = js),
      (uc[3] = $s));
  else ((js = uc[2]), ($s = uc[3]));
  return (E(js, $s), pc);
}
var Or = {
  bedrock: {
    accepted: "tengu_bedrock_upgrade_accepted",
    declined: "tengu_bedrock_upgrade_declined",
    saveFailed: "tengu_bedrock_upgrade_save_failed",
    relaunch: "tengu_bedrock_upgrade_relaunch",
  },
  vertex: {
    accepted: "tengu_vertex_upgrade_accepted",
    declined: "tengu_vertex_upgrade_declined",
    saveFailed: "tengu_vertex_upgrade_save_failed",
    relaunch: "tengu_vertex_upgrade_relaunch",
  },
};
function Dn(v, k) {
  let O = Or[v];
  return async (R) => {
    try {
      let [T, { upgradeKey: x }] = await Promise.all([
          v === "bedrock"
            ? import("../../02-功能模块/Bedrock-Vertex/seedEnvDefaultForUserPin.qgx0v22d.js").then((W) =>
                withProbeDeadline("bedrock-upgrade", W.findBedrockUpgradeCandidates()).then(
                  (K) => K.map((j) => ({ ...j, toId: j.toBedrockId })),
                ),
              )
            : import("../../02-功能模块/Bedrock-Vertex/seedEnvDefaultForUserPin.jmem3wk1.js").then((W) =>
                withProbeDeadline("vertex-upgrade", W.findVertexUpgradeCandidates()).then(
                  (K) => K.map((j) => ({ ...j, toId: j.toVertexId })),
                ),
              ),
          import("../../01-核心基础设施/共享小工具-未细化/chunk-nzt97y14.js"),
        ]),
        U =
          (v === "bedrock"
            ? getGlobalConfig().bedrockDeclinedUpgrades
            : getGlobalConfig().vertexDeclinedUpgrades) ?? {},
        D = T.filter((W) => U[W.tier] !== x(W));
      if (D.length === 0) return null;
      let [
        { updateSettingsForSource: N },
        { ThirdPartyModelUpgradeDialog: I },
      ] = await Promise.all([
        import("../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js"),
        import("../../02-功能模块/Bedrock-Vertex/ThirdPartyModelUpgradeDialog.gcjbt04b.js"),
      ]);
      async function L(W, K) {
        let j = fromEnum(W.tier);
        if (!K)
          return (
            await saveGlobalConfig((J) => {
              let X =
                v === "bedrock"
                  ? "bedrockDeclinedUpgrades"
                  : "vertexDeclinedUpgrades";
              return { ...J, [X]: { ...J[X], [W.tier]: x(W) } };
            }, k),
            logEvent(O.declined, {
              tier: j,
              from_key: fromEnum(W.fromKey),
              to_key: fromEnum(W.toKey),
            }),
            !1
          );
        let V =
            W.tier === "haiku"
              ? {
                  ANTHROPIC_DEFAULT_HAIKU_MODEL: W.toId,
                  ...(W.envVar === "ANTHROPIC_SMALL_FAST_MODEL" && {
                    ANTHROPIC_SMALL_FAST_MODEL: W.toId,
                  }),
                }
              : { [W.envVar]: W.toId },
          { error: q } = await N("userSettings", { env: V }, void 0, k);
        if (q) return (logEvent(O.saveFailed, { tier: j }), !1);
        for (let J of Object.keys(V)) process.env[J] = W.toId;
        return (
          logEvent(O.accepted, {
            tier: j,
            from_key: fromEnum(W.fromKey),
            to_key: fromEnum(W.toKey),
          }),
          !0
        );
      }
      return e(Un, {
        provider: v,
        pending: D,
        answer: L,
        onDone: () => R(),
        Dialog: I,
      });
    } catch (T) {
      return (logError(T), null);
    }
  };
}
function Un(fc) {
  let wo = _(27),
    { provider: br, pending: Er, answer: On, onDone: So, Dialog: Pn } = fc,
    Vs;
  if (wo[0] === MEMO_CACHE_SENTINEL)
    ((Vs = { at: 0, acceptedAny: !1, phase: "asking" }), (wo[0] = Vs));
  else Vs = wo[0];
  let [gc, Ws] = d(Vs),
    { at: ro, acceptedAny: hc, phase: Gt } = gc,
    { exit: Ar } = uE(),
    Gs = C(null),
    it = Er[ro],
    Ys;
  if (wo[1] !== Er.length)
    ((Ys = (_c) =>
      Ws((kr) => {
        let Rn = kr.acceptedAny || _c;
        if (kr.at + 1 < Er.length) {
          return { at: kr.at + 1, acceptedAny: Rn, phase: "asking" };
        }
        return { ...kr, acceptedAny: Rn, phase: Rn ? "relaunching" : "done" };
      })),
      (wo[1] = Er.length),
      (wo[2] = Ys));
  else Ys = wo[2];
  let yo = Ys,
    zs,
    Ks;
  if (
    wo[3] !== yo ||
    wo[4] !== Ar ||
    wo[5] !== So ||
    wo[6] !== Gt ||
    wo[7] !== br
  )
    ((zs = () => {
      if (Gt === "done") {
        So();
        return;
      }
      if (Gt === "save-failed") {
        let Sc = setTimeout(aa, 2000, yo);
        return () => clearTimeout(Sc);
      }
      if (Gt === "relaunching") {
        logEvent(Or[br].relaunch, {});
        let wc = setTimeout(la, 250, Ar);
        return () => clearTimeout(wc);
      }
    }),
      (Ks = [Gt, br, yo, So, Ar]),
      (wo[3] = yo),
      (wo[4] = Ar),
      (wo[5] = So),
      (wo[6] = Gt),
      (wo[7] = br),
      (wo[8] = zs),
      (wo[9] = Ks));
  else ((zs = wo[8]), (Ks = wo[9]));
  if ((E(zs, Ks), Gt === "relaunching" && hc)) {
    let Ut;
    if (wo[10] === MEMO_CACHE_SENTINEL)
      ((Ut = e(t, {
        dimColor: !0,
        children: "Restarting Claude Code to apply the new model\u2026",
      })),
        (wo[10] = Ut));
    else Ut = wo[10];
    return Ut;
  }
  if (it === void 0 || Gt === "done") {
    return null;
  }
  if (Gt === "save-failed") {
    const Ut = TIER_LABELS[it.tier];
    let Co;
    if (wo[11] !== Ut)
      ((Co = r(t, {
        color: "error",
        children: ["Failed to save ", Ut, " upgrade to settings."],
      })),
        (wo[11] = Ut),
        (wo[12] = Co));
    else Co = wo[12];
    return Co;
  }
  const Ut = TIER_LABELS[it.tier];
  let Co;
  if (
    wo[13] !== yo ||
    wo[14] !== On ||
    wo[15] !== ro ||
    wo[16] !== it ||
    wo[17] !== So
  )
    ((Co = (Js) => {
      if (Gs.current === ro) {
        return;
      }
      ((Gs.current = ro),
        On(it, Js).then(
          (Xs) => {
            if (Js && !Xs) {
              Ws(da);
              return;
            }
            yo(Xs);
          },
          (yc) => {
            (logError(yc), So());
          },
        ));
    }),
      (wo[13] = yo),
      (wo[14] = On),
      (wo[15] = ro),
      (wo[16] = it),
      (wo[17] = So),
      (wo[18] = Co));
  else Co = wo[18];
  let Qs;
  if (
    wo[19] !== Pn ||
    wo[20] !== ro ||
    wo[21] !== it.fromMarketingName ||
    wo[22] !== it.toId ||
    wo[23] !== it.toMarketingName ||
    wo[24] !== Ut ||
    wo[25] !== Co
  )
    ((Qs = e(
      Pn,
      {
        tierLabel: Ut,
        fromName: it.fromMarketingName,
        toName: it.toMarketingName,
        toProviderId: it.toId,
        onDone: Co,
      },
      ro,
    )),
      (wo[19] = Pn),
      (wo[20] = ro),
      (wo[21] = it.fromMarketingName),
      (wo[22] = it.toId),
      (wo[23] = it.toMarketingName),
      (wo[24] = Ut),
      (wo[25] = Co),
      (wo[26] = Qs));
  else Qs = wo[26];
  return Qs;
}
function Bn(v) {
  let k = 0,
    O = getBaseRenderOptions(v);
  if (O.stdin) logEvent("tengu_stdin_interactive", {});
  let R = new yr(),
    T = createSessionMetricsStore();
  xOn(T);
  let x = a.CLAUDE_CODE_FRAME_TIMING_LOG,
    U = -1,
    D = 0,
    N = Math.max(1, a.CLAUDE_CODE_FRAME_TIMING_SAMPLE_EVERY || 1);
  if (x)
    try {
      U = openSync(x, "a");
    } catch {}
  return {
    getFpsMetrics: () => R.getMetrics(),
    stats: T,
    renderOptions: {
      ...O,
      onFrame: (I) => {
        if (
          (R.record(I.durationMs),
          T.observe("frame_duration_ms", I.durationMs),
          U >= 0 && I.phases)
        ) {
          let L = D++ % N === 0,
            W =
              JSON.stringify({
                total: I.durationMs,
                ...I.phases,
                ...(L && {
                  rss: process.memoryUsage.rss(),
                  cpu: process.cpuUsage(),
                }),
              }) +
              `
`;
          writeSync(U, W);
        }
        if (lO()) return;
        for (let L of I.flickers) {
          if (L.reason === "resize") continue;
          let W = Date.now();
          if (W - k < 1000)
            logEvent("tengu_flicker", {
              desiredHeight: L.desiredHeight,
              actualHeight: L.availableHeight,
              reason: L.reason,
            });
          k = W;
        }
      },
    },
  };
}
async function Ln(v, k) {
  let { InvalidSettingsDialog: O } = await import("../../01-核心基础设施/设置-配置/InvalidSettingsDialog.kn2tcqsm.js");
  return qt(v, (R) =>
    e(O, {
      settingsErrors: k.settingsErrors,
      onContinue: () => R(void 0),
      onFix: () => R("fix"),
      onExit: k.onExit,
    }),
  );
}
async function jn(v) {
  let { TeleportResumeWrapper: k } = await import("../../02-功能模块/云会话-Teleport/TeleportResumeWrapper.6ph0ez4v.js");
  return qt(v, (O) =>
    e(k, { onComplete: O, onCancel: () => O(null), source: "cliArg" }),
  );
}
async function $n(v, k) {
  let { TeleportRepoMismatchDialog: O } = await import("../../02-功能模块/云会话-Teleport/TeleportRepoMismatchDialog.em5k75ty.js");
  return qt(v, (R) =>
    e(O, {
      targetRepo: k.targetRepo,
      initialPaths: k.initialPaths,
      onSelectPath: R,
      onCancel: () => R(null),
      storageV5: k.storageV5,
    }),
  );
}
async function Vn(v, k) {
  let { TeleportHostUnverifiedDialog: O } = await import("../../02-功能模块/云会话-Teleport/TeleportHostUnverifiedDialog.agnzsxhx.js");
  return qt(v, (R) =>
    e(O, {
      sessionRepo: k.sessionRepo,
      rawRemoteUrl: k.rawRemoteUrl,
      onConfirm: () => R(!0),
      onCancel: () => R(!1),
    }),
  );
}
async function Wn(v, k) {
  let { RemoteFileModeDialog: O } = await import("../../01-核心基础设施/提示词-SystemPrompt/RemoteFileModeDialog.1gkqmmsh.js");
  return qt(v, (R) =>
    e(O, {
      repositoryRoot: k.repositoryRoot,
      onDone: R,
      storageV5: k.storageV5,
    }),
  );
}
async function Gn(v, k) {
  let { SyncOfferCheck: O } = await import("../../02-功能模块/文件同步-Sync/SyncOfferCheck.7ys8ke07.js");
  return qt(v, (R) =>
    e(O, { decide: k.decide, onDecided: k.onDecided, onDone: R }),
  );
}
async function Yn(v, k) {
  let { RemoteHomeSettingsDialog: O } = await import("../../02-功能模块/Memory-CLAUDE.md/chunk-54xx04er.js");
  return qt(v, (R) =>
    e(O, {
      configHome: k.configHome,
      storageV5: k.storageV5,
      origin: "first_run",
      onDone: R,
    }),
  );
}
function zn(v, k) {
  let O = import("../../02-功能模块/云会话-Teleport/CloudCreateChecklist.5gnh41qz.js"),
    R = null,
    T = null,
    x = null,
    U = !1,
    D = !1;
  function N(j) {
    if (!D) ((D = !0), j());
  }
  let I = O.then(
    (j) => j,
    (j) => (N(() => logFeatureBad("ccr_create_checklist", "load_failed")), logError(j), null),
  );
  function L({ CloudCreateChecklist: j }, V) {
    let q = e(j, { state: V, cancelling: x !== null, onCancel: () => K(j) });
    if (T) T.update(q);
    else T = showScreen(v, q, { session: k.session });
  }
  function W(j) {
    return (
      N(() => logFeatureSad("ccr_create_checklist", "cancelled")),
      Rr(v, getChecklistCancelMessage(j), { exitCode: 130, beforeExit: () => gracefulShutdown(130) })
    );
  }
  function K(j) {
    let V = R;
    if (V === null || U || getChecklistPhase(V) === "created") return;
    if (x !== null) {
      ((U = !0),
        logEvent("tengu_cloud_create_cancel_forced", { waited_ms: Date.now() - x }),
        W(V));
      return;
    }
    ((x = Date.now()),
      k.onCancel(),
      logEvent("tengu_cloud_create_cancelled", {
        phase: fromEnum(getChecklistPhase(V)),
        request_sent: V.requestSent,
      }));
    try {
      L({ CloudCreateChecklist: j }, V);
    } catch (q) {
      logError(q);
    }
  }
  return {
    update(j) {
      I.then((V) => {
        if (V === null) return;
        try {
          let q = Date.now(),
            J = R === null;
          if (((R = reduceChecklistState(R ?? createChecklistState(q), j, q)), L(V, R), J))
            logEvent("tengu_cloud_create_checklist_shown", {});
          if (j.kind === "created") N(() => logFeatureOk("ccr_create_checklist"));
        } catch (q) {
          (N(() => logFeatureBad("ccr_create_checklist", "render_failed")), logError(q));
        }
      });
    },
    failed: () => N(() => logFeatureBad("ccr_create_checklist", "create_failed")),
    exitCancelled: () => (U ? new Promise(() => {}) : W(R)),
  };
}
async function Kn(v, k, O, R) {
  let [T, { ResumeConversation: x }] = await Promise.all([
      O,
      import("../../02-功能模块/会话-历史-恢复/ResumeConversation.6qw1t885.js"),
    ]),
    { session: U, storageV5: D, credentials: N } = k,
    I = resolveCommandQueue(D);
  await io(
    v,
    e(AppRoot, {
      session: U,
      storageV5: D,
      messageQueue: I,
      initialState: k.initialState,
      onChangeAppState: (L) => handleReplAppStateChange(L, U, D, N),
      writesExitHandoff: !0,
      getFpsMetrics: k.getFpsMetrics,
      stats: k.stats,
      children: e(x, { ...R, worktreePaths: T }),
    }),
    U,
    D,
    N,
  );
}
import { posix, win32 as Qn } from "path";
import { types } from "util";
var pa = 1000;
function ua() {
  let v = process.argv[1] || "",
    k = process.execPath || process.argv[0] || "";
  if (getCurrentPlatform() === "windows")
    ((v = v.split(Qn.sep).join(posix.sep)), (k = k.split(Qn.sep).join(posix.sep)));
  let O = [v, k],
    R = [
      "/build-ant/",
      "/build-external/",
      "/build-external-native/",
      "/build-ant-native/",
    ];
  return O.some((T) => R.some((x) => T.includes(x)));
}
var ma = [
  /MaxListenersExceededWarning.*AbortSignal/,
  /MaxListenersExceededWarning.*EventTarget/,
];
function ti() {
  let v = new Map();
  if (!ua())
    (process.removeAllListeners("warning"), (process.noProcessWarnings = !0));
  let O = (R) => {
    try {
      if (types.isProxy(R) || !types.isNativeError(R)) return;
      let T = Object.getOwnPropertyDescriptor(R, "message"),
        x = T && typeof T.value === "string" ? T.value : "",
        U = Object.getOwnPropertyDescriptor(R, "name"),
        D = U && typeof U.value === "string" ? U.value : "Error",
        N = `${D}: ${x.slice(0, 50)}`,
        I = v.get(N) || 0;
      if (v.has(N) || v.size < pa) v.set(N, I + 1);
      let L = `${D}: ${x}`,
        W = ma.some((K) => K.test(L));
      if (
        (logEvent("tengu_node_warning", {
          is_internal: W ? 1 : 0,
          occurrence_count: I + 1,
          classname: hv(D) ?? S("Error"),
          ...!1,
        }),
        a.CLAUDE_DEBUG)
      )
        n(`${W ? "[Internal Warning]" : "[Warning]"} ${D}: ${x}`, {
          level: "warn",
        });
    } catch {}
  };
  return (
    process.on("warning", O),
    {
      uninstall() {
        process.removeListener("warning", O);
      },
    }
  );
}
var fa = new Set([
  "sdk-ts",
  "sdk-py",
  "sdk-cli",
  "local-agent",
  "claude-desktop",
  "claude-desktop-3p",
]);
function oi() {
  (ti(), registerClientDataGetters());
}
function ni({ interactivity: v }) {
  let k = process.argv.slice(2),
    O = v.kind === "non-interactive" || isNonInteractiveMode(k);
  if (O) stopCapturingEarlyInput();
  if ((xDn(!O), initHostState(O), Crt(parseSessionStartMode(k)), ensureClientAgentEnv(), !Ie(a.CLAUDE_CODE_REMOTE))) {
    if (
      a.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR ||
      (a.CLAUDE_BG_AUTH_SNAPSHOT_PATH && !isSimpleMode() && !a.CLAUDE_CODE_OAUTH_TOKEN)
    )
      getOAuthToken();
    if (a.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR) getGatewayToken();
    if (a.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR) getApiKey();
    if (a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR) getSessionAccessToken();
  }
  let T = (() => {
    if (Ie(a.GITHUB_ACTIONS)) return "github-action";
    if (a.CLAUDE_CODE_ENTRYPOINT === "sdk-ts") return "sdk-typescript";
    if (a.CLAUDE_CODE_ENTRYPOINT === "sdk-py") return "sdk-python";
    if (a.CLAUDE_CODE_ENTRYPOINT === "sdk-cli") return "sdk-cli";
    if (a.CLAUDE_CODE_ENTRYPOINT === "claude-vscode") return "claude-vscode";
    if (a.CLAUDE_CODE_ENTRYPOINT === "local-agent") return "local-agent";
    if (a.CLAUDE_CODE_ENTRYPOINT === "claude-desktop") return "claude-desktop";
    let U =
      a.CLAUDE_CODE_SESSION_ACCESS_TOKEN ||
      hasCredentialDescriptor("CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR") ||
      a.CLAUDE_SESSION_INGRESS_TOKEN_FILE ||
      (Ie(a.CLAUDE_CODE_REMOTE) && (getSessionAccessToken() || isReviewOriginSession()));
    if (a.CLAUDE_CODE_ENTRYPOINT === "remote" || U) return "remote";
    return "cli";
  })();
  UDn(T);
  let x = a.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT;
  if (x === "markdown" || x === "html") rYt(x);
  else if (
    !T.startsWith("sdk-") &&
    T !== "claude-desktop" &&
    T !== "local-agent" &&
    T !== "remote"
  )
    rYt("markdown");
  if (
    a.CLAUDE_CODE_QUESTION_EXTENDED &&
    (fa.has(a.CLAUDE_CODE_ENTRYPOINT ?? "") || T === "remote")
  )
    tLn(!0);
  (profileCheckpoint("main_client_type_determined"), eagerLoadSettings());
}
var Tr = PERMISSION_MODES.map((v) => (v === "default" ? PERMISSION_MODE_MANUAL_ALIAS : v)),
  ga = [...PERMISSION_MODES, PERMISSION_MODE_MANUAL_ALIAS];
function xr(v) {
  if (!ga.includes(v)) throw new Ft(`Allowed choices are ${Tr.join(", ")}.`);
  return v;
}
async function ii() {
  let v = getRawCurrentProjectConfigEntry();
  if (!v) return;
  let k = (x) => x !== void 0 && (!Array.isArray(x) || x.length > 0),
    O = v.enableAllProjectMcpServers !== void 0,
    R = k(v.enabledMcpjsonServers),
    T = k(v.disabledMcpjsonServers);
  if (!O && !R && !T) return;
  try {
    if (getLocalSettingsErrorsBlockingWrite().length > 0) {
      n(
        "migrateEnableAllProjectMcpServersToSettings: deferring \u2014 settings.local.json carries validation errors a write could compound; will retry next startup",
        { level: "error" },
      );
      return;
    }
    let x = [];
    if (O) x.push("enableAllProjectMcpServers");
    if (R) x.push("enabledMcpjsonServers");
    if (T) x.push("disabledMcpjsonServers");
    let { error: U } = await updateSettingsForSourceWithTransform(
      "localSettings",
      (D) => {
        let N = D ?? {},
          I = {};
        if (
          O &&
          v.enableAllProjectMcpServers === !0 &&
          N.enableAllProjectMcpServers === void 0
        )
          I.enableAllProjectMcpServers = !0;
        if (R && Array.isArray(v.enabledMcpjsonServers)) {
          let L = N.enabledMcpjsonServers || [],
            W = new Set(L);
          if (v.enabledMcpjsonServers.some((K) => !W.has(K)))
            I.enabledMcpjsonServers = dedupe([...L, ...v.enabledMcpjsonServers]);
        }
        if (T && Array.isArray(v.disabledMcpjsonServers)) {
          let L = N.disabledMcpjsonServers || [],
            W = new Set(L);
          if (v.disabledMcpjsonServers.some((K) => !W.has(K)))
            I.disabledMcpjsonServers = dedupe([...L, ...v.disabledMcpjsonServers]);
        }
        return Object.keys(I).length > 0 ? I : null;
      },
      { legacyRevocation: "skip" },
    );
    if (U) {
      n(
        `migrateEnableAllProjectMcpServersToSettings: settings write failed (${U.message}); will retry next startup`,
        { level: "error" },
      );
      return;
    }
    if (x.length > 0) {
      if (!(await deleteCurrentProjectConfigFields(x))) {
        n(
          "migrateEnableAllProjectMcpServersToSettings: settings copy landed but legacy projectConfig fields could not be removed (unwritable config?); will retry next startup",
          { level: "error" },
        );
        return;
      }
    }
    (logEvent("tengu_migrate_mcp_approval_fields_success", {
      migratedCount: x.length,
    }),
      logFeatureOk("migration_mcp_servers_to_settings"));
  } catch (x) {
    (logError(x),
      logEvent("tengu_migrate_mcp_approval_fields_error", {}),
      logFeatureBad(
        "migration_mcp_servers_to_settings",
        "migration_mcp_servers_unexpected_error",
      ));
  }
}
var ha = {};
async function si(v = ha, k) {
  if (getAPIProvider() !== "firstParty") return !0;
  let O = getSettingsForSource("userSettings")?.model;
  if (!O) return !0;
  let R = Xt(O);
  if (!Object.hasOwn(v, R)) return !0;
  let T = v[R];
  if (T === void 0) return !0;
  let x = R !== O,
    { error: U } = await updateSettingsForSource(
      "userSettings",
      { model: x ? `${T}[1m]` : T },
      void 0,
      k,
    );
  if (U)
    return (
      n(`Failed to apply model alias migration: ${U}`, { level: "error" }),
      !1
    );
  return (
    logEvent("tengu_alias_migration", {
      from_model: getModelForAnalytics(R),
      to_model: getModelForAnalytics(T),
      has_1m: x,
    }),
    !0
  );
}
async function ai(v) {
  let k = getGlobalConfig();
  if (k.autoUpdates !== !1 || k.autoUpdatesProtectedForNative === !0) return !0;
  try {
    let O = getSettingsForSource("userSettings") || {},
      { error: R } = await updateSettingsForSource(
        "userSettings",
        { env: { DISABLE_AUTOUPDATER: "1" } },
        void 0,
        v,
      );
    if (R) throw R;
    return (
      logEvent("tengu_migrate_autoupdates_to_settings", {
        was_user_preference: !0,
        already_had_env_var: !!O.env?.DISABLE_AUTOUPDATER,
      }),
      a.set("DISABLE_AUTOUPDATER", !0),
      await saveGlobalConfig((T) => {
        let { autoUpdates: x, autoUpdatesProtectedForNative: U, ...D } = T;
        return D;
      }, v),
      logFeatureOk("migration_auto_updates_to_settings"),
      !0
    );
  } catch (O) {
    return (
      n(`Failed to migrate auto-updates: ${O}`, { level: "error" }),
      logEvent("tengu_migrate_autoupdates_error", { has_error: !0 }),
      logFeatureBad(
        "migration_auto_updates_to_settings",
        "migration_auto_updates_write_failed",
      ),
      !1
    );
  }
}
async function li(v) {
  if (!getGlobalConfig().bypassPermissionsModeAccepted) return !0;
  try {
    if (!hasSkipDangerousModePermissionPrompt()) {
      let { error: O } = await updateSettingsForSource(
        "userSettings",
        { skipDangerousModePermissionPrompt: !0 },
        void 0,
        v,
      );
      if (O) throw O;
    }
    return (
      logEvent("tengu_migrate_bypass_permissions_accepted", {}),
      await saveGlobalConfig((O) => {
        if (!("bypassPermissionsModeAccepted" in O)) return O;
        let { bypassPermissionsModeAccepted: R, ...T } = O;
        return T;
      }, v),
      logFeatureOk("migration_bypass_permissions_to_settings"),
      !0
    );
  } catch (O) {
    return (
      n(`Failed to migrate bypass permissions accepted: ${O}`, {
        level: "error",
      }),
      logFeatureBad(
        "migration_bypass_permissions_to_settings",
        "migration_bypass_permissions_write_failed",
      ),
      !1
    );
  }
}
async function ci(v) {
  if (!isFirstPartyApiBackend()) return !0;
  let k = getSettingsForSource("userSettings")?.model;
  if (k !== "claude-fable-5" && k !== "claude-fable-5[1m]") return !0;
  let O = k.endsWith("[1m]"),
    { error: R } = await updateSettingsForSource(
      "userSettings",
      { model: O ? "fable[1m]" : "fable" },
      void 0,
      v,
    );
  if (R)
    return (
      n(`Failed to migrate Fable 5 model setting: ${R}`, { level: "error" }),
      logFeatureBad("migration_fable5_to_fable_alias", "migration_fable5_write_failed"),
      !1
    );
  if (getGlobalConfig().numStartups > 1)
    saveGlobalConfig((x) => ({ ...x, fable5ToFableAliasMigrationTimestamp: Date.now() }), v);
  return (
    logEvent("tengu_fable5_to_fable_alias_migration", { from_model: fromEnum(k), has_1m: O }),
    logFeatureOk("migration_fable5_to_fable_alias"),
    !0
  );
}
async function pi(v) {
  if (getAPIProvider() !== "firstParty") return !0;
  if (!isLegacyModelRemapEnabled()) return !0;
  let k = getSettingsForSource("userSettings")?.model;
  if (
    k !== "claude-opus-4-20250514" &&
    k !== "claude-opus-4-1-20250805" &&
    k !== "claude-opus-4-0" &&
    k !== "claude-opus-4-1"
  )
    return !0;
  let { error: O } = await updateSettingsForSource("userSettings", { model: "opus" }, void 0, v);
  if (O)
    return (
      n(`Failed to migrate legacy Opus model setting: ${O}`, {
        level: "error",
      }),
      logFeatureBad(
        "migration_legacy_opus_to_current",
        "migration_legacy_opus_write_failed",
      ),
      !1
    );
  return (
    saveGlobalConfig((R) => ({ ...R, legacyOpusMigrationTimestamp: Date.now() }), v),
    logEvent("tengu_legacy_opus_migration", { from_model: fromEnum(k) }),
    logFeatureOk("migration_legacy_opus_to_current"),
    !0
  );
}
var _a = { "subscription-switch": "subscriptionNoticeCount" };
function ui(v) {
  let k = getGlobalConfig();
  if (k.seenNotifications !== void 0) return;
  let O = {};
  for (let [R, T] of Object.entries(_a)) {
    let x = k[T];
    if (typeof x === "number" && x > 0) O[R] = x;
    else if (x === !0) O[R] = 1;
  }
  (saveGlobalConfig(
    (R) =>
      R.seenNotifications !== void 0 ? R : { ...R, seenNotifications: O },
    v,
  ),
    logFeatureOk("migration_notification_dismissals"));
}
async function mi(v) {
  if (!isOpus1mMergeEnabled()) return !0;
  if (getSettingsForSource("userSettings")?.model !== "opus") return !0;
  let { error: O } = await updateSettingsForSource("userSettings", { model: "opus[1m]" }, void 0, v);
  if (O)
    return (
      n(`Failed to migrate opus model setting: ${O}`, { level: "error" }),
      logFeatureBad("migration_opus_to_opus1m", "migration_opus_to_opus1m_write_failed"),
      !1
    );
  return (
    logEvent("tengu_opus_to_opus1m_migration", {}),
    logFeatureOk("migration_opus_to_opus1m"),
    !0
  );
}
function fi(v) {
  let k = !1;
  if (
    (saveGlobalConfig((O) => {
      let R = O.replBridgeEnabled;
      if (R === void 0) return O;
      if (O.remoteControlAtStartup !== void 0) return O;
      let T = { ...O, remoteControlAtStartup: Boolean(R) };
      return (delete T.replBridgeEnabled, (k = !0), T);
    }, v),
    k)
  )
    logFeatureOk("migration_repl_bridge_to_remote_control");
}
async function gi(v) {
  if (getGlobalConfig().sonnet1m45MigrationComplete) return !0;
  let O = !1;
  if (getSettingsForSource("userSettings")?.model === "sonnet[1m]") {
    let { error: x } = await updateSettingsForSource(
      "userSettings",
      { model: "sonnet-4-5-20250929[1m]" },
      void 0,
      v,
    );
    if (x)
      return (
        n(`Failed to migrate sonnet[1m] model setting: ${x}`, {
          level: "error",
        }),
        logFeatureBad("migration_sonnet1m_to_sonnet45", "migration_sonnet1m_write_failed"),
        !1
      );
    O = !0;
  }
  if (Ec() === "sonnet[1m]") (ad("sonnet-4-5-20250929[1m]"), (O = !0));
  if ((saveGlobalConfig((x) => ({ ...x, sonnet1m45MigrationComplete: !0 }), v), O))
    logFeatureOk("migration_sonnet1m_to_sonnet45");
  return !0;
}
async function hi(v) {
  if (getAPIProvider() !== "firstParty") return !0;
  if (!isProSubscriber() && !isMaxSubscriber() && !isTeamPremiumSubscriber()) return !0;
  let k = getSettingsForSource("userSettings")?.model;
  if (
    k !== "claude-sonnet-4-5-20250929" &&
    k !== "claude-sonnet-4-5-20250929[1m]" &&
    k !== "sonnet-4-5-20250929" &&
    k !== "sonnet-4-5-20250929[1m]"
  )
    return !0;
  let O = k.endsWith("[1m]"),
    { error: R } = await updateSettingsForSource(
      "userSettings",
      { model: O ? "sonnet[1m]" : "sonnet" },
      void 0,
      v,
    );
  if (R)
    return (
      n(`Failed to migrate Sonnet 4.5 model setting: ${R}`, { level: "error" }),
      logFeatureBad("migration_sonnet45_to_sonnet46", "migration_sonnet45_write_failed"),
      !1
    );
  if (getGlobalConfig().numStartups > 1)
    saveGlobalConfig((x) => ({ ...x, sonnet45To46MigrationTimestamp: Date.now() }), v);
  return (
    logEvent("tengu_sonnet45_to_46_migration", { from_model: fromEnum(k), has_1m: O }),
    logFeatureOk("migration_sonnet45_to_sonnet46"),
    !0
  );
}
async function _i(v) {
  let k = getGlobalConfig(),
    O = getSettingsForSource("userSettings"),
    R = {};
  for (let T of USER_INTENT_SETTING_KEYS) {
    let x = k[T];
    if (x === void 0) continue;
    if (x === DEFAULT_GLOBAL_CONFIG[T]) continue;
    if (O?.[T] !== void 0) continue;
    R[T] = x;
  }
  if (Object.keys(R).length === 0) return !0;
  try {
    let { error: T } = await updateSettingsForSource("userSettings", R, void 0, v);
    if (T) throw T;
    return (
      logEvent("tengu_migrate_user_intent_to_settings", {
        migrated_count: Object.keys(R).length,
      }),
      logFeatureOk("migration_user_intent_to_settings"),
      !0
    );
  } catch (T) {
    return (
      logError(Error(`Failed to migrate user-intent settings: ${T}`)),
      logFeatureBad(
        "migration_user_intent_to_settings",
        "migration_user_intent_write_failed",
      ),
      !1
    );
  }
}
async function Si(v) {
  if (getGlobalConfig().hasResetAutoModeOptInForDefaultOffer) return !0;
  if (getAutoModeEnabledState() !== "enabled") return !0;
  try {
    let O = getSettingsForSource("userSettings");
    if (O?.skipAutoPermissionPrompt && O?.permissions?.defaultMode !== "auto") {
      let { error: R } = await updateSettingsForSource(
        "userSettings",
        { skipAutoPermissionPrompt: void 0 },
        void 0,
        v,
      );
      if (R) throw R;
      (logEvent("tengu_migrate_reset_auto_opt_in_for_default_offer", {}),
        logFeatureOk("migration_reset_auto_mode_opt_in"));
    }
    saveGlobalConfig((R) => {
      if (R.hasResetAutoModeOptInForDefaultOffer) return R;
      return { ...R, hasResetAutoModeOptInForDefaultOffer: !0 };
    }, v);
  } catch (O) {
    return (
      logError(Error(`Failed to reset auto mode opt-in: ${O}`)),
      logFeatureBad(
        "migration_reset_auto_mode_opt_in",
        "migration_reset_auto_mode_write_failed",
      ),
      !1
    );
  }
  return !0;
}
function wi(v) {
  if (getGlobalConfig().opusProMigrationComplete) return;
  if (getAPIProvider() !== "firstParty" || !isProSubscriber()) {
    (saveGlobalConfig((T) => ({ ...T, opusProMigrationComplete: !0 }), v),
      logEvent("tengu_reset_pro_to_opus_default", { skipped: !0 }));
    return;
  }
  if (getSettings_DEPRECATED()?.model === void 0) {
    let T = Date.now();
    (saveGlobalConfig(
      (x) => ({
        ...x,
        opusProMigrationComplete: !0,
        opusProMigrationTimestamp: T,
      }),
      v,
    ),
      logEvent("tengu_reset_pro_to_opus_default", {
        skipped: !1,
        had_custom_model: !1,
      }));
  } else
    (saveGlobalConfig((T) => ({ ...T, opusProMigrationComplete: !0 }), v),
      logEvent("tengu_reset_pro_to_opus_default", {
        skipped: !1,
        had_custom_model: !0,
      }));
  logFeatureOk("migration_reset_pro_to_opus_default");
}
var Dr = 14;
async function yi(v) {
  if (getGlobalConfig().migrationVersion === Dr) return;
  let k = [];
  if (
    (k.push(await ai(v)),
    k.push(await li(v)),
    wi(v),
    k.push(await gi(v)),
    k.push(await pi(v)),
    k.push(await hi(v)),
    k.push(await mi(v)),
    k.push(await si(void 0, v)),
    k.push(await ci(v)),
    fi(v),
    k.push(await _i(v)),
    ui(v),
    k.push(await Si(v)),
    !k.every(Boolean))
  ) {
    n(
      "Skipping migrationVersion bump: a settings-writing migration failed to persist; the set re-runs next startup.",
      { level: "error" },
    );
    return;
  }
  await saveGlobalConfig(
    (O) => (O.migrationVersion === Dr ? O : { ...O, migrationVersion: Dr }),
    v,
  );
}
async function Ci() {
  let v = getSettingsForSource("policySettings");
  return JSON.stringify([
    v?.claudeMd ?? null,
    getPolicyHelperClaudeMd(),
    v?.claudeMdExcludes ?? null,
    v?.autoMemoryEnabled ?? null,
    v?.env ?? null,
    await Sa(),
  ]);
}
async function Sa() {
  if (isClaudeMdLoadingDisabled() || isRemoteActive()) return [];
  let v = new Set(),
    k = getCurrentProjectConfig().hasClaudeMdExternalIncludesApproved || !1;
  return [
    ...(await loadMemoryFileWithIncludes(getMemoryPath("Managed"), "Managed", v, k)),
    ...(await loadRulesDirMemoryFiles({
      rulesDir: getManagedClaudeRulesDir(),
      type: "Managed",
      processedPaths: v,
      includeExternal: k,
      conditionalRule: !1,
    })),
  ].map((R) => [R.path, R.content]);
}
function vi(v) {
  let k = "",
    O = Ci(),
    R = serializeAsyncCalls(async (T) => {
      try {
        let x = T ? await O : await Ci();
        if (x === k) return;
        if (((k = x), T)) return;
        (clearMemoryFilesForSession(v), invalidateUserContext(v, "policy_refresh"));
      } catch (x) {
        logError(x);
      }
    });
  return (R(!0), () => R(!1));
}
async function bi(v, k) {
  let O = resolveCommandQueue(v.storageV5),
    {
      autoCompactWindow: R,
      claudeaiConfigPromise: T,
      jsonSchema: x,
      allowedTools: U,
      thinkingConfig: D,
      thinkingConfigExplicit: N,
      systemPrompt: I,
      appendSystemPrompt: L,
      sdkUrl: W,
      sessionMirror: K,
      advisorModel: j,
      agentCli: V,
      agentDefinitions: q,
      cliAgents: J,
      cloudAttachId: X,
      commands: ce,
      correlationId: Me,
      deferredCommandsPromise: Le,
      disableSlashCommands: qe,
      effectiveForwardSubagentText: fe,
      effectiveIncludePartialMessages: oe,
      effectiveModel: je,
      effectiveReplayUserMessages: $e,
      headlessCloud: ut,
      initialMainLoopModel: Rt,
      inputPrompt: Ue,
      mcpClients: Yt,
      mcpCommands: zt,
      mcpConfigFlagServers: Nt,
      mcpTools: Kt,
      outputFormat: Ve,
      permissionModeCli: Tt,
      poolId: Bt,
      poolOnBranch: Je,
      poolRef: De,
      rawModelRequest: ao,
      regularMcpConfigs: et,
      resolvedInitialModel: lo,
      resolvedMaxTurns: co,
      restrictedModel: le,
      sdkBetas: mt,
      sdkMcpConfigs: Io,
      session: yt,
      sessionNameArg: or,
      sessionTeamContext: mo,
      setupTrigger: fo,
      strictMcpConfig: vo,
      teleport: se,
      toolPermissionContext: Se,
      tools: rr,
      userSpecifiedFallbackModel: go,
      verbose: Ho,
    } = v;
  if ((HDn(Ve ?? "text"), ut)) {
    if ((rje(!0), dR(), initializeTelemetryAfterTrust(v.storageV5), isViolinWoodEnabledCached() && !isSimpleMode()))
      settingsChangeDetector.initialize(createConfigChangeHookGate(yt, v.storageV5, v.credentials), v.storageV5, {
        machineServesSession: !0,
      });
    let { runHeadlessCloudAttach: Ce, runHeadlessCloudCreate: Ye } =
      await import("../Headless-SDK模式/runHeadlessCloudAttach.aac3nr66.js");
    return X === null ? Ye(v, k, B().host) : Ce(v, k, X, B().host);
  }
  if (X !== null) {
    let Ce = await validateForceLoginOrg(v.credentials);
    if (!Ce.valid) return cliErrorAfterAnalyticsFlush(Ce.message);
    await b_();
    let Ye = getCloudSessionsUnavailableReason();
    if (Ye) return cliErrorAfterAnalyticsFlush(`Error: ${Ye}`);
    if (Ve === "stream-json")
      return cliError(
        "Error: --cloud <session_id> does not support --output-format stream-json",
      );
    let tt = typeof Ue === "string" && Ue.trim() !== "" ? Ue : null;
    if (tt === null)
      return cliError(
        "Error: non-interactive --cloud <session_id> requires a prompt (positional or stdin).",
      );
    logEvent("tengu_remote_send_headless", {
      entry_point: fromEnum("cloud_attach_headless"),
    });
    let St = null,
      Qt;
    try {
      let me = await fetchSession(X, void 0, v.credentials);
      if (me.session_status === "archived")
        St = `cloud session ${X} is archived and cannot accept new messages`;
      Qt = me.bound_device_uuid;
    } catch (me) {
      St = l(me);
    }
    let jt =
        St === null && Qt !== void 0 && isViolinWoodEnabledCached()
          ? import("../../02-功能模块/云会话-Teleport/deviceEventSignerFor.14ybgam1.js").then(
              ({ deviceEventSignerIfBoundHere: me }) => me(Qt, v.credentials),
              reportEventSignerLoadFailure,
            )
          : void 0,
      ft =
        St !== null
          ? { ok: !1, reason: St }
          : jt === void 0
            ? await sendEventToRemoteSession(X, tt)
            : await sendEventToRemoteSession(X, tt, { eventSigner: jt });
    if (!ft.ok) {
      if (
        (await logEventAsync("tengu_remote_send_headless_error", {
          entry_point: fromEnum("cloud_attach_headless"),
        }),
        Ve === "json")
      )
        process.stdout.write(
          b({ ok: !1, session_id: X, error: ft.reason }) +
            `
`,
        );
      return cliErrorAfterAnalyticsFlush(
        `Error: failed to send message to cloud session ${X}: ${ft.reason}`,
      );
    }
    await logEventAsync("tengu_remote_send_headless_success", {
      entry_point: fromEnum("cloud_attach_headless"),
    });
    let gt = wa(X, void 0, { from: "cli", m: "0" });
    if (Ve === "json")
      process.stdout.write(
        b({ ok: !0, session_id: X, url: gt }) +
          `
`,
      );
    else
      (process.stdout.write(`Sent to cloud session.
`),
        process.stdout.write(`Session ID: ${X}
`),
        process.stdout.write(`View: ${gt}
`));
    await gracefulShutdown(0);
    return;
  }
  if (Bt !== null) {
    let Ce = await validateForceLoginOrg(v.credentials);
    if (!Ce.valid) return cliErrorAfterAnalyticsFlush(Ce.message);
    await b_();
    let Ye = getCloudSessionsUnavailableReason();
    if (Ye) return cliErrorAfterAnalyticsFlush(`Error: ${Ye}`);
    let tt = typeof Ue === "string" && Ue.trim() !== "" ? Ue : null;
    if (tt === null)
      return cliError(
        "Error: non-interactive --environment requires a prompt (positional or stdin). Run from a TTY for an interactive cloud session.",
      );
    logEvent("tengu_remote_create_session", {
      has_initial_prompt: S("true"),
      entry_point: fromEnum("pool_headless"),
      branch_mode: getBranchMode(Je, De),
    });
    let St = getSelectablePermissionMode(Tt),
      Qt = Je ?? De ?? (await getBranch()),
      jt,
      ft,
      gt,
      me = await teleportToRemote({
        initialMessage: tt,
        signal: new AbortController().signal,
        source: "remote",
        branchName: Qt || void 0,
        title: or || void 0,
        reuseOutcomeBranch: Je ?? void 0,
        explicitRef: Je ?? De ?? void 0,
        poolId: Bt,
        correlationId: Me ?? void 0,
        permissionMode: St,
        proactivityLevel: k.proactivity,
        onCreateFail: ($t, jo, $o) => {
          ((jt = $t),
            (ft = jo),
            (gt = $o),
            process.stderr.write(`Error: ${$t}
`));
        },
        storageV5: v.storageV5,
        credentials: credentialsStoreFor(v.storageV5),
      });
    if (!me) {
      if (
        (await logEventAsync("tengu_remote_create_session_error", {
          error: fromEnumOpt(ft),
          entry_point: fromEnum("pool_headless"),
          branch_mode: getBranchMode(Je, De),
          ...(gt?.endpoint && { create_endpoint: fromEnum(gt.endpoint) }),
          ...(gt?.serverReason && { server_reason: fromEnum(gt.serverReason) }),
          ...(gt?.preflightTransient !== void 0 && {
            deny_transient: S(gt.preflightTransient ? "true" : "false"),
          }),
        }),
        Ve === "json")
      )
        process.stdout.write(
          b({ ok: !1, error: jt ?? "Unable to create cloud session" }) +
            `
`,
        );
      return cliErrorAfterAnalyticsFlush(jt ? void 0 : "Error: Unable to create cloud session");
    }
    await logEventAsync("tengu_remote_create_session_success", {
      session_id: hashForTelemetry(me.id),
      entry_point: fromEnum("pool_headless"),
      branch_mode: getBranchMode(Je, De),
    });
    let Lo = wa(me.id, void 0, { from: "cli", m: "0" });
    if (Ve === "json")
      process.stdout.write(
        b({
          ok: !0,
          session_id: me.id,
          title: me.title,
          url: Lo,
          pool_id: Bt,
        }) +
          `
`,
      );
    else
      (process.stdout.write(`Created cloud session: ${me.title}
`),
        process.stdout.write(`Session ID: ${me.id}
`),
        process.stdout.write(`View: ${Lo}
`),
        process.stdout.write(`Resume with: claude --teleport ${me.id}
`));
    await gracefulShutdown(0);
    return;
  }
  if (Ve === "stream-json" || Ve === "json") rje(!0);
  (dR(), initializeTelemetryAfterTrust(v.storageV5));
  let Lt = (k.continue || k.resume || se) && !CHe() ? null : formatModelDeprecationWarning(ao ?? lo);
  if (Lt && Ve !== "json" && Ve !== "stream-json") cliWarn(Lt);
  let ae = performance.now(),
    He =
      k.continue || k.resume || se || fo
        ? void 0
        : runLifecycleHooks(yt, {
            kind: "session-start",
            source: "startup",
            storageV5: v.storageV5,
            credentials: v.credentials,
          }).then(
            (Ce) => (recordStartupPhase("hooks_init_ms", performance.now() - ae, ae), Ce),
          );
  (He?.catch(() => {}), profileCheckpoint("before_validateForceLoginOrg"));
  let ho = await validateForceLoginOrg(v.credentials);
  if (!ho.valid) return (printCliError(ho.message), await flushAnalyticsSinks(), cliError());
  let _o = qe ? [] : Le ? Le.then(filterCommandsForHeadless) : filterCommandsForHeadless(ce);
  if (_o instanceof Promise) _o.catch(() => {});
  let Fo = createBaseAppState(),
    Xe = {
      ...Fo,
      mainLoopModel: Rt,
      mcp: { ...Fo.mcp, clients: Yt, commands: zt, tools: Kt },
      toolPermissionContext: Se,
      proactivityLevel: v.proactivityLevel,
      ...S$e(k.effort),
      ultracode: i4t(k.effort),
      autoCompactWindow: R,
      ...(isFastModeEnabled() && { fastMode: shouldStartWithFastMode(je ?? null) }),
      ...(isAdvisorToolEnabled() && j && { advisorModel: j }),
      ...(k.promptSuggestions !== void 0 && {
        promptSuggestionEnabled: k.promptSuggestions && isPromptSuggestionEnabled(),
      }),
      ...(mo && {
        teamContext: mo.teamContext,
        teammateColors: mo.teammateColors,
      }),
    },
    bo = new s7e(),
    at = createStore(Xe, (Ce) => handleAppStateChange(Ce, yt, bo, v.storageV5, v.credentials));
  if (
    (Et(() => runExitHandoff(at.getState().tasks, v.storageV5)),
    subscribeToRefusalFallbackRestoreSync(at.setState),
    verifyAutoModeGateAccess(Se, at.getState().fastMode).then(({ updateContext: Ce }) => {
      at.setState((Ye) => {
        let tt = Ce(Ye.toolPermissionContext);
        if (tt === Ye.toolPermissionContext) return Ye;
        return { ...Ye, toolPermissionContext: tt };
      });
    }),
    k.sessionPersistence === !1)
  )
    LLn(!0);
  nDn(mt);
  let nr = createMcpConnectionManager({
    regularMcpConfigs: et,
    claudeaiConfigPromise: T,
    state: {
      getClients: () => at.getState().mcp.clients,
      getSuppressedPluginServers: () =>
        at.getState().mcp.suppressedPluginMcpServers ?? [],
      applyMcpUpdate: (Ce) => at.setState((Ye) => ({ ...Ye, mcp: Ce(Ye.mcp) })),
    },
    storageV5: v.storageV5,
    credentials: v.credentials,
  });
  profileCheckpoint("before_connectMcp");
  let Ao = performance.now();
  if (
    (await nr.connect(),
    recordStartupPhase("mcp_connect_ms", performance.now() - Ao, Ao),
    profileCheckpoint("after_connectMcp_claudeai"),
    !isSimpleMode())
  )
    (prewarmStartupServices(yt, v.storageV5, v.credentials),
      import("../../02-功能模块/会话-历史-恢复/startBackgroundHousekeeping.t1hjzkg6.js").then((Ce) =>
        Ce.startBackgroundHousekeeping(B().host, v.storageV5),
      ));
  (reportPluginSessionTelemetry(v.storageV5, v.credentials), profileCheckpoint("before_print_import"));
  let {
    runHeadless: Uo,
    explicitMcpConfigRequestsWait: No,
    endHeadlessSessionOnEscapedError: ir,
  } = await import("../Headless-SDK模式/runHeadless.p72d7p8s.js");
  (profileCheckpoint("after_print_import"),
    Uo(
      yt,
      Ue,
      () => at.getState(),
      at.setState,
      at.subscribe,
      _o,
      rr,
      Io,
      q.activeAgents,
      {
        continue: k.continue,
        resume: k.resume,
        verbose: Ho,
        outputFormat: Ve,
        jsonSchema: x,
        permissionPromptToolName: k.permissionPromptTool,
        permissionPrompts: isPermissionPromptsDisabled(k.permissionPrompts) ? PERMISSION_PROMPTS_NONE : void 0,
        permissionModeSuppliedOnInvocation:
          v.permissionModeSuppliedOnInvocation,
        storageV5: v.storageV5,
        earlyHydrateReads: v.earlyHydrateReads,
        cliAgents: J,
        messageQueue: O,
        credentials: credentialsStoreFor(v.storageV5),
        allowedTools: U,
        thinkingConfig: D,
        thinkingConfigExplicit: N,
        maxTurns: co,
        maxBudgetUsd: k.maxBudgetUsd,
        taskBudget: k.taskBudget ? { total: k.taskBudget } : void 0,
        systemPrompt: I,
        appendSystemPrompt: L,
        planModeInstructions: k.planModeInstructions,
        systemPromptSnapshot: k.systemPromptSnapshot,
        appendSubagentSystemPrompt: k.appendSubagentSystemPrompt,
        excludeDynamicSections: k.excludeDynamicSystemPromptSections || void 0,
        userSpecifiedModel: je,
        restrictedStartupModel: le,
        fallbackModel: go,
        teleport: se,
        sdkUrl: W,
        replayUserMessages: $e,
        includePartialMessages: oe,
        forwardSubagentText: fe,
        sessionMirror: K,
        forkSession: k.forkSession || !1,
        resumeSessionAt: k.resumeSessionAt || void 0,
        resumeDropsTurn: k.resumeDropsTurn,
        rewindFiles: k.rewindFiles,
        enableAuthStatus: k.enableAuthStatus,
        promptSuggestions: k.promptSuggestions,
        agent: V,
        workload: k.workload,
        setupTrigger: fo ?? void 0,
        configuredMcpServerCount: Object.keys(et).length,
        explicitMcpConfigFlag: No(Nt, vo),
        sessionStartHooksPromise: He,
        sessionState: bo,
      },
    ).catch((Ce) => ir(yt, Ce, Ve)));
  return;
}
function ya() {
  if (getRemoteSettingsPathOverride()) return !1;
  if (wasPolicyHelperInitializeAttempted()) return !1;
  let v = getBasePolicySettings(),
    k = getBasePolicySettingsOrigin();
  if (k === "remote") return hasRemotePolicyHelperEntry(v);
  return (
    isAdminPolicyOrigin(k) && (v?.policyHelpers != null || v?.policyHelper != null) && fIe()
  );
}
var Ca = 120000,
  va = 60000;
function ba() {
  let v = 0;
  try {
    v = getSessionEndHookTimeoutMs();
  } catch {}
  return Math.max(Ca, v + va);
}
function Ir() {
  cliError();
}
var ka = {
    readBase: () => ({ settings: getBasePolicySettings(), origin: getBasePolicySettingsOrigin(), loadErrors: getPolicyHelperSourceLoadErrors() }),
    baseSettled: () => !fIe(),
    refuse: (v) => {
      let k = isExiting();
      if ((commitExit(), emitExitMessage(v), k)) {
        setTimeout(Ir, ba()).unref();
        return;
      }
      gracefulShutdown(1, "other", { suppressResumeHint: !0 }).then(Ir, Ir);
    },
  },
  Oa = new Set(["install", "update", "rollback", "forward-home-settings"]);
function Pa(v, k) {
  return v.parent === k && Oa.has(v.name());
}
function ki(v) {
  let k = new Wt().configureHelp(Ot()).enablePositionalOptions();
  profileCheckpoint("run_commander_initialized");
  let O = !1,
    R,
    T,
    x =
      (I) =>
      (...L) =>
        I(R, ...L),
    U =
      (I) =>
      (...L) =>
        I(R, T, ...L);
  k.hook("preAction", async (I, L) => {
    profileCheckpoint("preAction_start");
    let W = performance.now();
    if (
      L === k &&
      I.getOptionValue("awaitInitialize") === !0 &&
      I.getOptionValue("inputFormat") === "stream-json" &&
      I.getOptionValue("sdkUrl") === void 0 &&
      !process.stdin.isTTY
    )
      startInitializeRequestReader(iterateStdinJsonLines);
    if (
      (await Promise.all([awaitMdmSettingsLoaded(), ensureKeychainPrefetchCompleted()]),
      profileCheckpoint("preAction_after_mdm"),
      (R = await initializeApp({
        showInvalidConfigDialog: v.showInvalidConfigDialog,
        storageV5EnvPin: v.storageV5EnvPin,
      })),
      (T = credentialsStoreFor(R)),
      isHoverRestEnabled() && R !== void 0)
    )
      zR({ storageV5: R });
    if ((profileCheckpoint("preAction_after_init"), !a.CLAUDE_CODE_DISABLE_TERMINAL_TITLE))
      process.title = "claude";
    let { initSinks: K } = await import("../../02-功能模块/Bridge-RemoteControl/initSinks.6cfazjmq.js");
    (K(), profileCheckpoint("preAction_after_sinks"));
    let j = performance.now(),
      V = await getInitializeRequestResult();
    if (V) recordStartupPhase("await_initialize_ms", performance.now() - j, j);
    if (V?.kind === "violation") return cliError(V.message);
    let q = V?.kind === "applied" ? V : void 0,
      J = [...Ei(I.getOptionValue("pluginDir")), ...(q?.pluginDirs ?? [])];
    if (J.length > 0) (krt(J), clearPluginCache("preAction: --plugin-dir inline plugins"));
    let X = [
      ...Ei(I.getOptionValue("pluginDirNoMcp")),
      ...(q?.pluginDirsNoMcp ?? []),
    ];
    if (X.length > 0)
      (xrt(X), clearPluginCache("preAction: --plugin-dir-no-mcp inline plugins"));
    let ce = I.getOptionValue("pluginUrl");
    if (
      Array.isArray(ce) &&
      ce.length > 0 &&
      ce.every((oe) => typeof oe === "string")
    )
      (wLn(ce), clearPluginCache("preAction: --plugin-url inline plugins"));
    (await Ra(R), profileCheckpoint("preAction_after_migrations"));
    let Me = L.parent?.name() === "auth";
    if (isForceRemoteSettingsRefreshConfigured() && !Me) {
      let oe = await $Dt(async () =>
        _lt(await v.showSecurityDialog?.(), R, { credentials: T }),
      );
      if (!oe.valid) return cliError(oe.message);
    } else if (getAPIProvider() === "gateway" && !Me) {
      if (!(await _lt(await v.showSecurityDialog?.(), R, { credentials: T }))) {
        let oe = Fr();
        if (!oe.endedSession || L !== k || ke() || isUnattendedInteractiveSession())
          return cliError(oe.exitMessage);
        Ta();
      }
    } else if (ya() && !Me)
      await Promise.resolve(v.showSecurityDialog?.())
        .then((oe) => _lt(oe, R, { singleAttempt: !0, credentials: T }))
        .catch(logError);
    else
      Promise.resolve(v.showSecurityDialog?.())
        .then((oe) => _lt(oe, R, { credentials: T }))
        .catch(logError);
    if (Pa(L, k)) XBn();
    let Le = L === k && qJe();
    KAn({ startupAwaited: Le });
    {
      let oe = getBasePolicySettingsOrigin();
      retireOsAdminPolicyHelper(oe);
      let je = await runPolicyHelperPass(getBasePolicySettings(), oe, getPolicyHelperSourceLoadErrors());
      if (je) return cliError(je);
      if ((enableMidSessionPolicyHelperArming(ka), hasActivePolicyHelper())) goe();
    }
    let qe = vi(B());
    if ((policyHelperRefreshedEvents.subscribe(qe), areSideloadFlagsDisabledByPolicy())) {
      let oe = [],
        je = ($e) =>
          Array.isArray($e)
            ? $e.length > 0
            : typeof $e === "string" && $e.length > 0;
      for (let [$e, ut] of [
        ["pluginDir", "--plugin-dir"],
        ["pluginDirNoMcp", "--plugin-dir-no-mcp"],
        ["pluginUrl", "--plugin-url"],
        ["agents", "--agents"],
      ])
        if (je(I.getOptionValue($e)) || je(L.getOptionValue($e))) oe.push(ut);
      if (q && q.pluginDirs.length + q.pluginDirsNoMcp.length > 0)
        oe.push("plugins (initialize request)");
      if (oe.length > 0) return cliError(sideloadFlagsBlockedMessage(oe));
    }
    let fe = checkVersionPolicyForCommand(L);
    if (fe) return cliError(fe);
    if (
      (settingsChangeDetector.subscribe((oe) => {
        if (oe === "policySettings") qe();
      }),
      profileCheckpoint("preAction_after_remote_settings"),
      L === k &&
        I.getOptionValue("worktree") === void 0 &&
        !a.CLAUDE_CODE_SYNC_PLUGIN_INSTALL)
    ) {
      let oe = I.getOptionValue("addDir");
      if (Array.isArray(oe) && oe.every((je) => typeof je === "string")) Hz(oe);
      (initializeBuiltinPlugins(),
        loadAllPluginsCacheOnly(R, T).catch(() => {}),
        (O = !0),
        profileCheckpoint("preAction_after_plugin_early_kick"));
    }
    (recordStartupPhase("pre_action_ms", performance.now() - W, W), markStartupActionStarted(L === k));
  });
  let D = k
      .name("claude")
      .description(
        "Claude Code - starts an interactive session by default, use -p/--print for non-interactive output",
      )
      .argument("[prompt]", "Your prompt", String)
      .helpOption("-h, --help", "Display help for command")
      .option(
        "-d, --debug [filter]",
        'Enable debug mode with optional category filtering (e.g., "api,hooks" or "!1p,!file")',
        (I) => !0,
      )
      .addOption(
        new z(
          "-d2e, --debug-to-stderr",
          "(deprecated) Enable debug mode (to stderr)",
        )
          .argParser(Boolean)
          .hideHelp()
          .implies({ debug: !0 }),
      )
      .option(
        "--debug-file <path>",
        "Write debug logs to a specific file path (implicitly enables debug mode)",
        () => !0,
      )
      .option(
        "--verbose",
        "Override verbose mode setting from config",
        () => !0,
      )
      .option(
        "-p, --print",
        "Print response and exit (useful for pipes). Note: The workspace trust dialog is skipped when Claude is run in non-interactive mode (via -p, or when stdout is not a TTY, e.g. piped or redirected output). Only use this in directories you trust. Settings files that fail validation are silently ignored in this mode (no error dialog is shown).",
        () => !0,
      )
      .option(
        "--bare",
        "Minimal mode: skip hooks, LSP, plugin sync, attribution, auto-memory, background prefetches, keychain reads, and CLAUDE.md auto-discovery. Sets CLAUDE_CODE_SIMPLE=1. Anthropic auth is strictly ANTHROPIC_API_KEY or apiKeyHelper via --settings (OAuth and keychain are never read). 3P providers (Bedrock/Vertex/Foundry) use their own credentials. Skills still resolve via /skill-name. Explicitly provide context via: --system-prompt[-file], --append-system-prompt[-file], --add-dir (CLAUDE.md dirs), --mcp-config, --settings, --agents, --plugin-dir.",
        () => !0,
      )
      .option(
        "--safe-mode",
        "Start with all customizations (CLAUDE.md, skills, plugins, hooks, MCP servers, custom commands and agents, output styles, workflows, custom themes, keybindings, and more) disabled \u2014 useful for troubleshooting a broken configuration. Admin-managed (policy) settings still apply. Auth, model selection, built-in tools, and permissions work normally. Sets CLAUDE_CODE_SAFE_MODE=1.",
        () => !0,
      )
      .addOption(
        new z(
          "--init",
          "Run Setup hooks with init trigger, then continue",
        ).hideHelp(),
      )
      .addOption(
        new z(
          "--init-only",
          "Run Setup and SessionStart:startup hooks, then exit",
        ).hideHelp(),
      )
      .addOption(
        new z(
          "--maintenance",
          "Run Setup hooks with maintenance trigger, then continue",
        ).hideHelp(),
      )
      .addOption(
        new z(
          "--output-format <format>",
          'Output format (only works with --print): "text" (default), "json" (single result), or "stream-json" (realtime streaming)',
        ).choices(["text", "json", "stream-json"]),
      )
      .addOption(
        new z(
          "--json-schema <schema>",
          'JSON Schema for structured output validation. Example: {"type":"object","properties":{"name":{"type":"string"}},"required":["name"]}',
        ).argParser(String),
      )
      .option(
        "--include-hook-events",
        "Include all hook lifecycle events in the output stream (only works with --output-format=stream-json)",
        () => !0,
      )
      .option(
        "--include-partial-messages",
        "Include partial message chunks as they arrive (only works with --print and --output-format=stream-json)",
        () => !0,
      )
      .option(
        "--forward-subagent-text",
        "Forward subagent text and thinking blocks as assistant/user messages with parent_tool_use_id set (only works with --print and --output-format=stream-json)",
        () => !0,
      )
      .addOption(
        new z(
          "--session-mirror",
          "Emit transcript_mirror frames on stdout (SDK-internal; set by ProcessTransport when sessionStore is configured)",
        ).hideHelp(),
      )
      .addOption(
        new z(
          "--input-format <format>",
          'Input format (only works with --print): "text" (default), or "stream-json" (realtime streaming input)',
        ).choices(["text", "stream-json"]),
      )
      .addOption(
        new z(
          "--await-initialize",
          "Read the initialize control request from stdin during startup so its launch-scoped fields (plugins) apply exactly like their command-line flags. Pass it only from the process that writes that request as the first stdin line at spawn (only works with --input-format=stream-json)",
        ).hideHelp(),
      )
      .option(
        "--dangerously-skip-permissions",
        "Bypass all permission checks. Recommended only for sandboxes with no internet access.",
        () => !0,
      )
      .option(
        "--allow-dangerously-skip-permissions",
        "Enable bypassing all permission checks as an option, without it being enabled by default. Recommended only for sandboxes with no internet access.",
        () => !0,
      )
      .addOption(
        new z(
          "--thinking <mode>",
          "Thinking mode: enabled (equivalent to adaptive), disabled",
        )
          .choices(["enabled", "adaptive", "disabled"])
          .hideHelp(),
      )
      .addOption(
        new z(
          "--thinking-display <display>",
          "How thinking content appears in the response",
        )
          .choices(["summarized", "omitted"])
          .hideHelp(),
      )
      .addOption(
        new z(
          "--max-thinking-tokens <tokens>",
          "[DEPRECATED. Use --thinking instead for newer models] Maximum number of thinking tokens (only works with --print)",
        )
          .argParser(Ai)
          .hideHelp(),
      )
      .addOption(
        new z(
          "--max-turns <turns>",
          "Maximum number of agentic turns in non-interactive mode. This will early exit the conversation after the specified number of turns. (only works with --print)",
        )
          .argParser(Ai)
          .hideHelp(),
      )
      .addOption(
        new z(
          "--max-budget-usd <amount>",
          "Maximum dollar amount to spend on API calls (only works with --print)",
        ).argParser((I) => {
          let L = Number(I);
          if (isNaN(L) || L <= 0)
            throw new Ft(
              "--max-budget-usd must be a positive number greater than 0",
            );
          return L;
        }),
      )
      .addOption(
        new z(
          "--task-budget <tokens>",
          "API-side task budget in tokens (output_config.task_budget)",
        )
          .argParser((I) => {
            let L = parseNumericValue(I);
            if (isNaN(L) || L <= 0 || !Number.isInteger(L))
              throw new Ft("--task-budget must be a positive integer");
            return L;
          })
          .hideHelp(),
      )
      .option(
        "--replay-user-messages",
        "Re-emit user messages from stdin back on stdout for acknowledgment (only works with --input-format=stream-json and --output-format=stream-json)",
        () => !0,
      )
      .addOption(
        new z(
          "--prompt-suggestions [value]",
          "Enable prompt suggestions. In print/SDK mode, emits a prompt_suggestion message after each turn with a predicted next user prompt",
        )
          .choices(["true", "false", "1", "0", "yes", "no", "on", "off"])
          .preset("true")
          .argParser((I) => {
            if (!Ie(I) && !po(I))
              throw new Ft(
                "Allowed choices are true, false, 1, 0, yes, no, on, off.",
              );
            return !po(I);
          }),
      )
      .addOption(
        new z("--enable-auth-status", "Enable auth status messages in SDK mode")
          .default(!1)
          .hideHelp(),
      )
      .option(
        "--allowedTools, --allowed-tools <tools...>",
        'Comma or space-separated list of tool names to allow (e.g. "Bash(git *) Edit")',
      )
      .option(
        "--tools <tools...>",
        'Specify the list of available tools from the built-in set. Use "" to disable all tools, "default" to use all tools, or specify tool names (e.g. "Bash,Edit,Read").',
      )
      .option(
        "--restricted",
        "Restricted mode: removes the built-in tools that run commands or code (Bash, PowerShell, REPL and the other code-running tools) and WebFetch unless --tools names them, and ignores user, project and local settings files (managed settings and --settings still apply; add --strict-mcp-config to skip MCP servers too). Also confines the file tools to the working directories (--add-dir included), refuses bypassPermissions, and lets only a person or the configured permission handler approve writes to settings, git and tool-configuration files.",
      )
      .option(
        "--disallowedTools, --disallowed-tools <tools...>",
        'Comma or space-separated list of tool names to deny (e.g. "Bash(git *) Edit")',
      )
      .option(
        "--mcp-config <configs...>",
        "Load MCP servers from JSON files or strings (space-separated)",
      )
      .addOption(
        new z(
          "--permission-prompt-tool <tool>",
          "MCP tool to use for permission prompts (only works with --print)",
        )
          .argParser(String)
          .hideHelp(),
      )
      .addOption(
        new z(
          "--permission-prompts <target>",
          'Who answers permission prompts with --print: "host" (the SDK host or --permission-prompt-tool) or "none" (nobody: anything that would prompt is denied automatically; the permission mode still decides everything else)',
        )
          .choices(PERMISSION_PROMPTS_TARGETS)
          .default("host"),
      )
      .addOption(
        new z(
          "--system-prompt <prompt>",
          "System prompt to use for the session",
        ).argParser(String),
      )
      .addOption(
        new z("--system-prompt-file <file>", "Read system prompt from a file")
          .argParser(String)
          .hideHelp(),
      )
      .addOption(
        new z(
          "--append-system-prompt <prompt>",
          "Append a system prompt to the default system prompt",
        ).argParser(String),
      )
      .addOption(
        new z(
          "--append-system-prompt-file <file>",
          "Read system prompt from a file and append to the default system prompt",
        )
          .argParser(String)
          .hideHelp(),
      )
      .addOption(
        new z(
          "--system-prompt-snapshot <on|off>",
          "Record the system prompt once per conversation and reuse it verbatim on every request and resume (recommended: on). By default it is on for the built-in prompt, and passing --system-prompt or --append-system-prompt turns it off so the given text applies fresh each launch. on: an existing record in the conversation is sent as-is (a later launch's different --system-prompt/--append-system-prompt is ignored until compaction); otherwise the prompt is rendered with the append included, sent, and recorded. off: never record. No effect where system-prompt recording is not yet enabled.",
        )
          .choices(["on", "off"])
          .argParser((I) => {
            if (I !== "on" && I !== "off")
              throw new Ft("Allowed choices are on, off.");
            return I === "on";
          }),
      )
      .addOption(
        new z(
          "--append-subagent-system-prompt <prompt>",
          "Append a system prompt to every Task-tool subagent's system prompt, propagated to nested subagents (only works with --print). Implies CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT=1.",
        )
          .argParser(String)
          .hideHelp(),
      )
      .addOption(
        new z(
          "--append-subagent-system-prompt-file <file>",
          "Read a system prompt from a file and append it to every Task-tool subagent's system prompt (only works with --print)",
        )
          .argParser(String)
          .hideHelp(),
      )
      .addOption(
        new z(
          "--plan-mode-instructions <instructions>",
          "Custom workflow body for plan mode. Replaces the default code-implementation phases in the plan-mode system reminder; the read-only enforcement preamble and ExitPlanMode protocol footer are always kept.",
        )
          .argParser(String)
          .hideHelp(),
      )
      .addOption(
        new z(
          "--exclude-dynamic-system-prompt-sections",
          "Move per-machine sections (cwd, env info, memory paths, git status) from the system prompt into the first user message. Improves cross-user prompt-cache reuse. Only applies with the default system prompt (ignored with --system-prompt).",
        ).default(!1),
      )
      .addOption(
        new z(
          "--permission-mode <mode>",
          "Permission mode to use for the session",
        )
          .choices(Tr)
          .argParser(xr),
      )
      .addOption(
        new z(
          "--inherit-permission-mode <mode>",
          "Permission mode carried from a parent session, used only when nothing else configures one",
        )
          .argParser(xr)
          .hideHelp(),
      )
      .option(
        "-c, --continue",
        "Continue the most recent conversation in the current directory",
        () => !0,
      )
      .option(
        "-r, --resume [value]",
        "Resume a conversation by session ID, or open interactive picker with optional search term",
        (I) => I || !0,
      )
      .option(
        "--fork-session",
        "When resuming, create a new session ID instead of reusing the original (use with --resume or --continue)",
        () => !0,
      )
      .addOption(
        new z(
          "--watch-artifact <artifact>",
          "Watch a Claude artifact (id or URL) in this session and hear about new versions and comments",
        ).hideHelp(),
      )
      .addOption(new z("--watch-artifact-no-autoreact <artifact>").hideHelp())
      .addOption(
        new z(
          "--prefill <text>",
          "Pre-fill the prompt input with text without submitting it",
        ).hideHelp(),
      )
      .addOption(
        new z(
          "--deep-link-origin",
          "Signal that this session was launched from a deep link",
        ).hideHelp(),
      )
      .addOption(
        new z(
          "--deep-link-repo <slug>",
          "Repo slug the deep link ?repo= parameter resolved to the current cwd",
        ).hideHelp(),
      )
      .addOption(
        new z(
          "--deep-link-last-fetch <ms>",
          "FETCH_HEAD mtime in epoch ms, precomputed by the deep link trampoline",
        )
          .argParser((I) => {
            let L = Number(I);
            return Number.isFinite(L) ? L : void 0;
          })
          .hideHelp(),
      )
      .addOption(
        new z(
          "--prefill-b64 <b64>",
          "Base64url-encoded --prefill value (deep-link shell-safe launch paths)",
        )
          .argParser((I) => Buffer.from(I, "base64url").toString("utf8"))
          .hideHelp(),
      )
      .addOption(
        new z(
          "--deep-link-cwd-b64 <b64>",
          "Base64url-encoded working directory (deep-link shell-safe launch paths)",
        )
          .argParser((I) => Buffer.from(I, "base64url").toString("utf8"))
          .hideHelp(),
      )
      .option(
        "--from-pr [value]",
        "Resume a session linked to a PR by PR number/URL, or open interactive picker with optional search term",
        (I) => I || !0,
      )
      .option(
        "--no-session-persistence",
        "Disable session persistence - sessions will not be saved to disk and cannot be resumed (only works with --print)",
      )
      .addOption(
        new z(
          "--resume-session-at <message id>",
          "When resuming, only messages up to and including the chain entry with <message.id> \u2014 any chain-entry UUID, typically the kept turn's last entry (use with --resume in print mode)",
        )
          .argParser(String)
          .hideHelp(),
      )
      .addOption(
        new z(
          "--resume-drops-turn <message id>",
          "With --resume-session-at in print mode: declare the prompt uuid of the turn the truncating resume intends to discard; the resume is refused if the discarded range contains anything not attributable to that turn (absorbed queued messages, task notifications, content from other turns). Ignored outside print mode, like --resume-session-at.",
        )
          .argParser(String)
          .hideHelp(),
      )
      .addOption(
        new z(
          "--reply-on-resume",
          "When resuming, immediately query if the loaded transcript ends in a user-role message (set by /background mid-turn so the fork continues the in-flight turn).",
        ).hideHelp(),
      )
      .addOption(
        new z(
          "--rewind-files <user-message-id>",
          "Restore files to state at the specified user message and exit (requires --resume)",
        ).hideHelp(),
      )
      .option(
        "--model <model>",
        "Model for the current session. Provide an alias for the latest model (e.g. 'fable', 'opus', or 'sonnet') or a model's full name (e.g. 'claude-fable-5').",
      )
      .addOption(
        new z(
          "--effort <level>",
          `Effort level for the current session (${im.join(", ")})`,
        ).argParser((I) => {
          let { level: L, warning: W } = KEt(I);
          if (W !== void 0)
            process.stderr.write(`Warning: ${W}
`);
          return L;
        }),
      )
      .option(
        "--agent <agent>",
        "Agent for the current session. Overrides the 'agent' setting.",
      )
      .option(
        "--betas <betas...>",
        "Beta headers to include in API requests (API key users only)",
      )
      .option(
        "--fallback-model <model>",
        "Enable automatic fallback to specified model(s) when the default model is overloaded or not available. Accepts a comma-separated list to try each in order. Re-tries the primary at the start of each user turn. (only works with --print)",
      )
      .addOption(
        new z(
          "--workload <tag>",
          "Workload tag for billing-header attribution (cc_workload). Process-scoped; set by SDK daemon callers that spawn subprocesses for cron work. (only works with --print)",
        ).hideHelp(),
      )
      .option(
        "--settings <file-or-json>",
        "Path to a settings JSON file or a JSON string to load additional settings from",
      )
      .addOption(
        new z(
          "--managed-settings <json>",
          "Policy-tier settings JSON from a spawning parent process (SDK use only)",
        ).hideHelp(),
      )
      .option(
        "--add-dir <directories...>",
        "Additional directories to allow tool access to",
      )
      .option(
        "--ide",
        "Automatically connect to IDE on startup if exactly one valid IDE is available",
        () => !0,
      )
      .option(
        "--strict-mcp-config",
        "Only use MCP servers from --mcp-config, ignoring all other MCP configurations",
        () => !0,
      )
      .option(
        "--session-id <uuid>",
        "Use a specific session ID for the conversation (must be a valid UUID)",
      )
      .option(
        "-n, --name <name>",
        "Set a display name for this session (shown in the prompt box, /resume picker, and terminal title)",
      )
      .option(
        "--agents <json>",
        `JSON object defining custom agents (e.g. '{"reviewer": {"description": "Reviews code", "prompt": "You are a code reviewer"}}')`,
      )
      .option(
        "--setting-sources <sources>",
        "Comma-separated list of setting sources to load (user, project, local).",
      )
      .option(
        "--plugin-dir <path>",
        "Load a plugin from a directory or .zip for this session only (repeatable: --plugin-dir A --plugin-dir B.zip)",
        (I, L) => [...L, I],
        [],
      )
      .addOption(
        new z(
          "--plugin-dir-no-mcp <path>",
          "Like --plugin-dir but the engine will not read this plugin's .mcp.json (caller owns its MCP connections)",
        )
          .argParser((I, L) => [...L, I])
          .default([])
          .hideHelp(),
      )
      .option(
        "--plugin-url <url>",
        "Fetch a plugin .zip from a URL for this session only (repeatable: --plugin-url A --plugin-url B)",
        (I, L) => [...L, ...I.split(/\s+/).filter(Boolean)],
        [],
      )
      .option("--disable-slash-commands", "Disable all skills", () => !0)
      .option("--chrome", "Enable Claude in Chrome integration")
      .option("--no-chrome", "Disable Claude in Chrome integration")
      .option(
        "--file <specs...>",
        "File resources to download at startup. Format: file_id:relative_path (e.g., --file file_abc:doc.txt file_def:img.png)",
      ),
    N = () => O;
  (D.action(async (I, L) => {
    let W = foldRestricted(L, pv()),
      K = await runCliActionHandler(I, W, k, N, v.pendingConnect, v.pendingSSH, v, R, T);
    if (K.kind === "exited") return;
    if (K.kind === "prepared-headless") return bi(K, W);
    if (!v.runInteractiveSession)
      return cliError(
        "Interactive session requires the runInteractiveSession capability",
      );
    return v.runInteractiveSession(K, W);
  }).version(
    `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION} (Claude Code)${getBuildRefName()}`,
    "-v, --version",
    "Output the version number",
  ),
    k.option(
      "-w, --worktree [name]",
      "Create a new git worktree for this session (optionally specify a name)",
    ),
    k.option(
      "--tmux",
      "Create a tmux session for the worktree (requires --worktree). Uses iTerm2 native panes when available; use --tmux=classic for traditional tmux.",
    ),
    k.addOption(
      new z(
        "--advisor <model>",
        "Enable the server-side advisor tool with the specified model (alias or full ID).",
      ).hideHelp(),
    ),
    k.addOption(
      new z(
        "--autocompact <auto|tokens>",
        "Auto-compact window size (auto, or 100k\u20131M tokens)",
      ).argParser((I) => {
        let L = parseAutoCompactWindowSetting(I);
        if (L === void 0)
          throw new Ft(
            "It must be 'auto', or between 100k and 1M (e.g. 500k, 200000, or 200 as shorthand)",
          );
        return L;
      }),
    ),
    k.addOption(
      new z(
        "--enable-auto-mode",
        "(deprecated) Opt in to auto mode",
      ).hideHelp(),
    ),
    k.addOption(
      new z(
        "--bg, --background",
        "Start the session in the background and return immediately. Prints the id that `claude attach`, `logs`, `stop` and `rm` take; `claude agents` lists them. With --resume <session-id>, continues that session in the background under the same ID, or starts a copy and says so when the session is already running",
      ),
    ));
  {
    let I = new z(
      "--messaging-socket-path <path>",
      "Cross-session messaging server path: a Unix domain socket on Mac/Linux, a \\\\.\\pipe\\ name on Windows (defaults to an auto-generated path)",
    );
    (I.hideHelp(), k.addOption(I));
  }
  return (
    k.addOption(
      new z(
        "--brief",
        "Enable SendUserMessage tool for agent-to-user communication",
      ),
    ),
    k.addOption(
      new z(
        "--ax-screen-reader",
        "Render screen-reader friendly output (flat text, no decorative borders or animations).",
      ),
    ),
    k.addOption(
      new z(
        "--channels <servers...>",
        "MCP servers whose channel notifications (inbound push) should register this session. Space-separated server names.",
      ).hideHelp(),
    ),
    k.addOption(
      new z(
        "--dangerously-load-development-channels <servers...>",
        "Load channel servers not on the approved allowlist. For local channel development only. Shows a confirmation dialog at startup.",
      ).hideHelp(),
    ),
    k.addOption(new z("--agent-id <id>", "Teammate agent ID").hideHelp()),
    k.addOption(
      new z("--agent-name <name>", "Teammate display name").hideHelp(),
    ),
    k.addOption(
      new z(
        "--team-name <name>",
        "Team name for teammate coordination",
      ).hideHelp(),
    ),
    k.addOption(new z("--agent-color <color>", "Teammate UI color").hideHelp()),
    k.addOption(
      new z(
        "--plan-mode-required",
        "Require plan mode before implementation",
      ).hideHelp(),
    ),
    k.addOption(
      new z(
        "--parent-session-id <id>",
        "Parent session ID for analytics correlation",
      ).hideHelp(),
    ),
    k.addOption(
      new z(
        "--teammate-mode <mode>",
        'How to spawn teammates: "tmux", "iterm2", "in-process", or "auto"',
      )
        .choices(["auto", "tmux", "iterm2", "in-process"])
        .hideHelp(),
    ),
    k.addOption(
      new z(
        "--agent-type <type>",
        "Custom agent type for this teammate",
      ).hideHelp(),
    ),
    k.addOption(
      new z(
        "--sdk-url <url>",
        "Use remote WebSocket endpoint for SDK I/O streaming (only with -p and stream-json format)",
      ).hideHelp(),
    ),
    k.addOption(
      new z(
        "--teleport [session]",
        "Resume a teleport session, optionally specify session ID",
      ),
    ),
    k.addOption(
      new z(
        "--cloud [description|session_id|url]",
        "Create a cloud session with the given description, or attach to an existing one by session ID or claude.ai/code URL",
      ),
    ),
    k.addOption(
      new z(
        "--forward-home-settings <true|false>",
        "Whether this launch sends this machine's settings (CLAUDE.md, rules, output styles, preferences, portable permission rules) into the cloud session it creates or attaches to: false = not this launch; true = yes for this launch, standing in for the machine's stored choice (not saved). Requires --cloud or --environment.",
      )
        .choices(["true", "false", "1", "0"])
        .hideHelp(),
    ),
    k.addOption(
      new z(
        "--remote [description|session_id|url]",
        "Deprecated alias for --cloud",
      ).hideHelp(),
    ),
    k.addOption(
      new z(
        "--environment <environment_id>",
        "Create a new cloud session that runs on the given self-hosted environment (ccpool_...).",
      ),
    ),
    k.addOption(
      new z(
        "--pool <pool_id>",
        "Deprecated alias for --environment",
      ).hideHelp(),
    ),
    k.addOption(
      new z(
        "--correlation-id <id>",
        "Opaque id echoed back to the environment orchestrator on the work order (requires --environment).",
      ).hideHelp(),
    ),
    k.addOption(
      new z(
        "--ref <ref>",
        "Branch, tag, or SHA to check out in the remote session; defaults to local current branch. Requires --cloud or --environment.",
      ).hideHelp(),
    ),
    k.addOption(
      new z(
        "--on-branch <branch>",
        "Work directly on <branch> in the remote session (checkout and push to it). On self-hosted environments this includes pushing to the default branch when it is not protected \u2014 use GitHub branch protection to restrict. Mutually exclusive with --ref. Requires --cloud or --environment.",
      ).hideHelp(),
    ),
    profileCheckpoint("run_main_options_built"),
    { program: k, rootCommand: D, withStorageV5: x, withStartupHandles: U }
  );
}
async function Ra(v) {
  (await ii(), await yi(v), n$n(v).catch(() => {}));
}
function Ei(v) {
  return Array.isArray(v) && v.every((k) => typeof k === "string") ? v : [];
}
function Ai(v) {
  let k = parseNumericValue(v);
  if (Number.isNaN(k)) throw new Ft("must be a number");
  return k;
}
function Ta() {
  (kW(null),
    UDt(),
    resetRemoteSettingsSyncCache(),
    invalidateAllSettings(),
    process.stderr.write(
      CLOUD_GATEWAY_SESSION_EXPIRED_MESSAGE +
        `
`,
    ));
}
function Fr() {
  let v = ns()?.url ?? "",
    k = getLastLoadStatus(),
    O =
      k?.state === "failed" || k?.state === "stale_cache"
        ? k.failure.errorKind
        : void 0;
  if (O === "http_401")
    return {
      endedSession: !0,
      exitMessage: `Cloud gateway ${v} no longer accepts this session. Start \`claude\` and sign in again with /login.`,
      gatewayUrl: v,
    };
  if (O === "http_403")
    return {
      endedSession: !1,
      exitMessage: `Cloud gateway ${v} refused managed settings for this account (403): Claude Code may not be enabled for your organization. Contact your administrator; to sign in with a different account, run \`claude auth logout\` first, then start \`claude\` and sign in.`,
      gatewayUrl: v,
    };
  let R = isHostPolicyForceLoginGateway()
    ? "sign in again with /login"
    : "run `claude auth login` to re-authenticate";
  return {
    endedSession: !1,
    exitMessage: `Couldn't load settings from Cloud gateway ${v}. Check your network connection, or ${R}.`,
    gatewayUrl: v,
  };
}
function Oi({ remoteControlFlag: v, isRemoteThinClient: k }) {
  let O = a.CLAUDE_CODE_REMOTE,
    R = resolveExplicitRemoteControlAtStartup(),
    T = !k && !O && !v && R.value === void 0 ? resolveCcrAutoConnectDefault() : void 0,
    x = !k && !O && (v || (R.value ?? T?.value ?? !1)),
    U = !1,
    D = Boolean(a.CLAUDE_BRIDGE_REATTACH_SESSION),
    N = a.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY,
    I = x || U || (D && !N),
    L = !x && (D ? N : U);
  return {
    replBridgeEnabled: I,
    replBridgeAutoOnByDefault: x && !v && !D && R.value === void 0,
    replBridgeExplicit: v || (D && !N && !x),
    replBridgeOutboundOnly: L,
    explicit: R,
    autoConnectDefault: T,
    ccrMirrorEnabled: U,
    remoteControlFlag: v,
    envRemote: O,
    isRemoteThinClient: k,
    reattach: D,
    result: !I ? "off" : L ? "mirror" : "full",
  };
}
function Pi(v) {
  logEvent("tengu_rc_autostart_resolved", {
    explicit_setting: fromEnum(
      v.explicit.value === void 0
        ? "unset"
        : v.explicit.value
          ? "true"
          : "false",
    ),
    explicit_source: fromEnum(v.explicit.source),
    default_value: v.autoConnectDefault?.value,
    default_source: fromEnum(v.autoConnectDefault?.source ?? "unevaluated"),
    mirror: v.ccrMirrorEnabled,
    remote_control_flag: v.remoteControlFlag,
    env_remote: v.envRemote,
    thin_client: v.isRemoteThinClient,
    reattach: v.reattach,
    result: fromEnum(v.result),
  });
}
var xa = createLazyValue(() => c({ session_id: s(), ws_url: s(), work_dir: s().optional() }));
process.env.NoDefaultCurrentDirectoryInExePath = "1";
profileCheckpoint("main_tsx_entry");
recordStartupPhase("node_boot_ms", process.uptime() * 1000, 0);
recordSpawnToExec();
startMdmRawRead();
startKeychainPrefetch();
profileCheckpoint("main_tsx_imports_loaded");
var tr = () =>
  import("../../01-核心基础设施/设置-配置/showStandaloneSecurityDialog.nm3g924k.js").then(
    (v) => v.showStandaloneSecurityDialog,
    (v) => {
      logError(v);
      return;
    },
  );
function Ha() {
  let v = Hx(),
    k = process.execArgv.some((R) => {
      if (v) return /--inspect(-brk)?/.test(R);
      else return /--inspect(-brk)?|--debug(-brk)?/.test(R);
    }),
    O =
      a.NODE_OPTIONS && /--inspect(-brk)?|--debug(-brk)?/.test(a.NODE_OPTIONS);
  try {
    return !!global.require("inspector").url() || k || O;
  } catch {
    return k || O;
  }
}
if (Ha()) process.exit(1);
function Fa() {
  let v = getAutoModeConfig(),
    k = { allow: 0, soft_deny: 0, hard_deny: 0, environment: 0 },
    O = 0;
  for (let R of ["allow", "soft_deny", "hard_deny", "environment"])
    for (let T of v?.[R] ?? []) {
      if (T === DEFAULTS_SLOT_MARKER) continue;
      ((k[R] += countMatching(
        T.split(`
`),
        (x) => x.trim().length > 0,
      )),
        (O += countMatching(T.split(/\s+/), Boolean)));
    }
  return {
    auto_mode_allow_rule_count: k.allow,
    auto_mode_soft_deny_rule_count: k.soft_deny,
    auto_mode_hard_deny_rule_count: k.hard_deny,
    auto_mode_environment_rule_count: k.environment,
    auto_mode_rule_word_count: O,
  };
}
function Ua() {
  let v = {};
  if (a.NODE_EXTRA_CA_CERTS) v.has_node_extra_ca_certs = !0;
  if (a.CLAUDE_CODE_CLIENT_CERT) v.has_client_cert = !0;
  if (hasNodeOption("--use-system-ca")) v.has_use_system_ca = !0;
  if (hasNodeOption("--use-openssl-ca")) v.has_use_openssl_ca = !0;
  if (a.CLAUDE_CODE_CERT_STORE) v.cert_store = a.CLAUDE_CODE_CERT_STORE;
  return v;
}
async function Na(v, k) {
  if (isAnalyticsDisabled()) return;
  let [O, R, T, x] = await Promise.all([
      getIsGit(),
      getWorktreeCount(),
      checkGitHubAuthStatus({ allowNetworkFallbackForOldGh: !1 }),
      null,
    ]),
    U = getSetEnvVarNames(),
    D = getNonDefaultGlobalConfigKeys(v),
    N = getSetUserSettingsKeys(getInitialSettings());
  logEvent("tengu_startup_telemetry", {
    is_git: O,
    worktree_count: R,
    ...k,
    ...!1,
    warm_spare_claimed: wasWarmSpareClaimed(),
    gh_auth_status: fromEnum(T.status),
    sandbox_enabled: SandboxManager.isSandboxingEnabled(),
    are_unsandboxed_commands_allowed: SandboxManager.areUnsandboxedCommandsAllowed(),
    is_auto_bash_allowed_if_sandbox_enabled:
      SandboxManager.isAutoAllowBashIfSandboxedEnabled(),
    auto_updater_disabled: isAutoUpdaterDisabled(),
    prefers_reduced_motion: getInitialSettings().prefersReducedMotion ?? !1,
    precompute_compaction_setting_enabled: resolveSetting(
      "precomputeCompactionEnabled",
      isPrecomputeCompactionEnabledByDefault(),
    ).value,
    theme: resolveSetting("theme", "dark").value,
    set_env_var_count: U.length,
    set_env_vars: U.join(","),
    nondefault_setting_count: D.length,
    nondefault_settings: fromEnumArr(D),
    set_user_settings_count: N.length,
    set_user_settings: fromEnumArr(N),
    ...Ua(),
    ...Fa(),
  });
}
async function Hw(v) {
  (profileCheckpoint("main_function_start"),
    Qr(),
    registerToolHosts(),
    oi(),
    latchTuiTrialFromEnv(),
    process.on("exit", () => {
      La();
    }),
    profileCheckpoint("main_warning_handler_initialized"));
  let k = process.argv.indexOf("--handle-uri");
  if (k !== -1 && process.argv[k + 1]) {
    let T = getHandleUriInjectionError(process.argv);
    if (T) (console.error(T), process.exit(1));
    let x = process.argv[k + 1],
      { enableConfigs: U } = await import("../../01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js");
    await U(isHoverRestEnabled() ? v?.backend : void 0);
    let { handleDeepLinkUri: D } = await import("./handleDeepLinkUri.v94fyanc.js"),
      N = await D(x);
    process.exit(N);
  }
  let O = void 0,
    R = void 0;
  if (
    process.env.__CFBundleIdentifier === "com.anthropic.claude-code-url-handler"
  ) {
    let { enableConfigs: T } = await import("../../01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js");
    await T(isHoverRestEnabled() ? v?.backend : void 0);
    let { handleUrlSchemeLaunch: x } = await import("./handleDeepLinkUri.v94fyanc.js"),
      U = await x();
    process.exit(U ?? 1);
  }
  {
    let T = parseImportCommandArgs(process.argv.slice(2));
    if (T !== null) {
      let { enableConfigs: x } = await import("../../01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js"),
        U;
      try {
        (await x(isHoverRestEnabled() ? v?.backend : void 0), (U = isImportCommandEnabled()));
      } catch {
        U = void 0;
      }
      let D = resolveImportCommandAction(T, U);
      if (D.kind === "rewrite")
        process.argv = [process.argv[0], process.argv[1], ...D.argv];
      else return cliError(D.kind === "config-error" ? CLAUDE_IMPORT_CONFIG_ERROR_MESSAGE : CLAUDE_IMPORT_NOT_AVAILABLE_MESSAGE);
    }
  }
  (ni({ interactivity: { kind: "detect" } }),
    profileCheckpoint("main_before_run"),
    await Ba(O, R, v),
    profileCheckpoint("main_after_run"));
}
async function Ba(v, k, O) {
  profileCheckpoint("run_function_start");
  let {
      program: R,
      withStorageV5: T,
      withStartupHandles: x,
    } = ki({
      storageV5EnvPin: O,
      showSecurityDialog: tr,
      showInvalidConfigDialog: (j) =>
        import("../../01-核心基础设施/设置-配置/showInvalidConfigDialog.5p4s79qd.js").then((V) => V.showInvalidConfigDialog(j)),
      runOnboarding: (j) => ja(j),
      handleInvalidSettings: (j, V) =>
        Ln(j, { settingsErrors: V, onExit: () => gracefulShutdownSync(1) }),
      runInteractiveSession: (j, V) => $a(j, V, v, k),
      pendingConnect: v,
      pendingSSH: k,
    }),
    U = process.argv.slice(2),
    D = isFlagPresent("-p", U) || isFlagPresent("--print", U),
    N = findArgIndex(isCcProtocolUrl, U) !== -1;
  if (D && !N)
    return (
      profileCheckpoint("run_before_parse"),
      await R.parseAsync(process.argv),
      profileCheckpoint("run_after_parse"),
      R
    );
  if (!isHelpRequested(U) && !N)
    return (
      profileCheckpoint("run_before_parse"),
      await R.parseAsync(process.argv),
      profileCheckpoint("run_after_parse"),
      R
    );
  En(R, T);
  return (
    profileCheckpoint("run_before_parse"),
    await R.parseAsync(process.argv),
    profileCheckpoint("run_after_parse"),
    profileCheckpoint("main_after_run"),
    profileReport(),
    R
  );
}
async function Ur(v) {}
function La() {
  (process.stderr.isTTY
    ? process.stderr
    : process.stdout.isTTY
      ? process.stdout
      : void 0
  )?.write(SHOW_CURSOR);
}
async function ja(v) {
  let {
      session: k,
      options: O,
      teleport: R,
      permissionMode: T,
      toolPermissionContext: x,
      storedTeammateOpts: U,
      isSSHPending: D,
      allowDangerouslySkipPermissions: N,
      skippedChromeForAdminPolicy: I,
      enableClaudeInChrome: L,
      chromeDeniedByPolicy: W,
      devChannels: K,
      offerClaudeInChrome: j,
      wasTrustedBeforeSetup: V,
      wasPersistedTrustedBeforeSetup: q,
      strictMcpConfig: J,
      currentCwd: X,
      providerSetupCommand: ce,
      remoteControlOption: Me,
      projectForRemoteControl: Le,
      mainThreadAgentDefinition: qe,
      storageV5: fe,
      credentials: oe,
    } = v,
    {
      commands: je,
      mcpConfigPromise: $e,
      dynamicMcpConfig: ut,
      appendSystemPrompt: Rt,
      remoteControl: Ue,
      inputPrompt: Yt,
      prompt: zt,
    } = v,
    Nt = !1,
    Kt = null,
    Ve = Bn(!1),
    { getFpsMetrics: Tt, stats: Bt } = Ve;
  checkFullscreenBootCanary({ storageV5: fe });
  let { createRoot: Je } = await import("../../02-功能模块/Daemon-守护服务/createRoot.pw1402cq.js"),
    De = await Je(Ve.renderOptions, { storageV5: fe });
  (logEvent("tengu_timer", {
    event: S("startup"),
    durationMs: Math.round(process.uptime() * 1000),
    resumed: !!(O.resume || O.continue),
  }),
    n("[STARTUP] Running showSetupScreens()..."));
  let ao = Date.now(),
    et = !1,
    lo = shouldSuppressChromeOffer({
      isSSHPending: D,
      isRemoteMode: Nn(),
      hasTeleport: Boolean(R),
      isSafeMode: isSafeMode() || x.restricted === !0,
      permissionMode: T,
      isBypassPermissionsModeAvailable: x.isBypassPermissionsModeAvailable,
      teammateAgentId: U?.agentId,
    });
  if (
    (({
      onboardingShown: Nt,
      mcpApprovalSkipWarning: Kt,
      claudeInChromeAccepted: et,
    } = await Hn(
      k,
      De,
      D ? "default" : T,
      D ? !1 : N,
      je,
      I || (L && W) ? !1 : L,
      K,
      lo ? !1 : j,
      fe,
      oe,
    )),
    kLn(Nt),
    n(`[STARTUP] showSetupScreens() completed in ${Date.now() - ao}ms`),
    ((!V && checkHasTrustDialogAccepted()) || (!q && isWorkspacePersistedTrusted())) && !J && !isSimpleMode() && !Nn())
  ) {
    let le = Date.now();
    $e = getClaudeCodeMcpConfigs(ut, { storageV5: fe, credentials: oe }).then(
      (mt) => ((v.mcpConfigResolvedMs.value = Date.now() - le), mt),
    );
  }
  if (et && !isClaudeInChromeAllowed())
    n(
      "[Claude in Chrome] Skipping accepted offer: denied by organization policy (allow_claude_browser_extension)",
    );
  else if (et) {
    try {
      logEvent("tengu_claude_in_chrome_setup", { platform: getPlatformForAnalytics(getCurrentPlatform()) });
      let { mcpConfig: le, systemPrompt: mt } = setupClaudeInChrome();
      if (((ut = { ...ut, ...le }), mt))
        Rt = Rt
          ? `${mt}

${Rt}`
          : mt;
    } catch (le) {
      (logEvent("tengu_claude_in_chrome_setup_failed", { platform: getPlatformForAnalytics(getCurrentPlatform()) }),
        logError(le),
        n(`[Claude in Chrome] Error (startup offer): ${le}`));
    }
    try {
      je = await getCommands(X, fe);
    } catch (le) {
      n(`[Claude in Chrome] command refresh after accept failed: ${le}`);
    }
  }
  if (Me !== void 0) {
    let le;
    if (Nn()) le = "Remote Control is not available inside a cloud session.";
    else if (R)
      le =
        "--teleport sessions start without Remote Control. Use /remote-control to enable it.";
    else {
      let { getBridgeDisabledReason: mt } = await import("../../02-功能模块/Bridge-RemoteControl/chunk-9estzwf5.js");
      le = await mt();
    }
    if (((Ue = le === null), le))
      cliWarn(`${le}
${Le ? "--rc and --project ignored." : "--rc flag ignored."}`);
    else markRemoteControlUsed(fe);
  }
  if (Nt && zt?.trim().toLowerCase() === "/login") zt = "";
  if (Nt) {
    if (isForceRemoteSettingsRefreshConfigured()) {
      let le = await $Dt(async () => mIe(await tr(), fe, oe));
      if (!le.valid) return await Ne(De, le.message);
    } else if (getAPIProvider() === "gateway") {
      if (!(await mIe(await tr(), fe, oe))) {
        let le = Fr();
        return await Ne(
          De,
          le.endedSession
            ? `Cloud gateway ${le.gatewayUrl} did not accept the new sign-in. Start \`claude\` to try /login again, or contact your administrator.`
            : le.exitMessage,
        );
      }
    } else
      switch (await YBn(await tr(), fe, oe)) {
        case "refreshed":
          break;
        case "consent_pending":
          n(
            "Remote settings: fetched settings need consent \u2014 dialog opens once the REPL mounts; settings apply after approval",
          );
          break;
        case "timed_out":
          n(
            "Remote settings: refresh still in flight at REPL mount \u2014 org settings (company announcements included) may apply later this session",
            { level: "warn" },
          );
          break;
        case "failed":
          n(
            "Remote settings: post-onboarding refresh did not complete \u2014 org settings may be stale or absent this session",
            { level: "warn" },
          );
          break;
      }
    if (getAPIProvider() === "gateway") {
      if (hasPolicyDiverged())
        return (
          await saveGlobalConfig(
            (le) => ({
              ...le,
              hasCompletedOnboarding: !0,
              lastOnboardingVersion: {
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
            }),
            fe,
          ),
          De.unmount(),
          await import("../../02-功能模块/认证-OAuth登录/execRelaunch.ewkdrr0a.js").then((le) => le.execRelaunch())
        );
      (resetAuthCachesAfterLogin("gateway"), dR());
    }
    (zJe(),
      resetUserData(),
      refreshGrowthBookAfterAuthChange(),
      import("../../02-功能模块/Bridge-RemoteControl/chunk-tyce0p0b.js").then(
        (le) => (
          le.clearTrustedDeviceToken(),
          le.enrollTrustedDevice({ credentials: oe })
        ),
      ));
  }
  let co = await validateForceLoginOrg(oe);
  if (!co.valid) await Ne(De, co.message, () => flushAnalyticsSinks());
  return {
    root: De,
    getFpsMetrics: Tt,
    stats: Bt,
    mcpApprovalSkipWarning: Kt,
    mcpConfigPromise: $e,
    dynamicMcpConfig: ut,
    appendSystemPrompt: Rt,
    commands: je,
    remoteControl: Ue,
    inputPrompt: Yt,
    prompt: zt,
  };
}
function Nr(v, k) {
  if (k.deepLinkOrigin) {
    if (
      (logEvent("tengu_deep_link_opened", {
        has_prefill: Boolean(k.prefill),
        has_repo: Boolean(k.deepLinkRepo),
      }),
      n(
        formatDeepLinkSessionNotice({
          cwd: getCwd(),
          prefillLength: k.prefill?.length,
          repo: k.deepLinkRepo,
          lastFetch:
            k.deepLinkLastFetch !== void 0
              ? new Date(k.deepLinkLastFetch)
              : void 0,
        }),
        { level: "info" },
      ),
      k.prefill)
    )
      setSessionPromptLaunchWarning(v, { type: "deep-link", prefillLength: k.prefill.length });
  } else if (k.prefill)
    setSessionPromptLaunchWarning(v, { type: "prefill", prefillLength: k.prefill.length });
}
async function $a(v, k, O, R) {
  let { mainThreadAgentDefinition: T, remote: x } = v,
    {
      advisorModel: U,
      agentDefinitions: D,
      agentSetting: N,
      appendSystemPrompt: I,
      autoCompactWindow: L,
      cliAgents: W,
      commands: K,
      correlationId: j,
      currentCwd: V,
      dangerouslySkipPermissions: q,
      debug: J,
      disableSlashCommands: X,
      dynamicMcpConfig: ce,
      fileDownloadPromise: Me,
      forwardHomeSettings: Le,
      homeSettingsConsent: qe,
      getFpsMetrics: fe,
      hookMessages: oe,
      hooksPromise: je,
      ide: $e,
      initialFocusMode: ut,
      initialMainLoopModel: Rt,
      inputPrompt: Ue,
      mcpApprovalSkipWarning: Yt,
      mcpClients: zt,
      mcpCommands: Nt,
      mcpTools: Kt,
      modelProvenance: Ve,
      permissionModeCli: Tt,
      permissionModeNotification: Bt,
      poolId: Je,
      poolOnBranch: De,
      poolPromotedRemote: ao,
      poolRef: et,
      preDecorationInputPrompt: lo,
      proactivityLevel: co,
      projectBrowse: le,
      projectForRemoteControl: mt,
      rawModelRequest: Io,
      remoteControl: yt,
      remoteControlName: or,
      remoteDroppedMcpMessages: mo,
      resolvedInitialModel: fo,
      restrictedModel: vo,
      root: se,
      session: Se,
      sessionGroupingId: rr,
      sessionNameArg: go,
      sessionTeamContext: Ho,
      stats: Lt,
      storageV5: ae,
      credentials: He,
      strictMcpConfig: ho,
      structuredOutputTool: _o,
      systemPrompt: Fo,
      teleport: Xe,
      thinkingConfig: bo,
      thinkingConfigExplicit: at,
      thinkingEnabled: nr,
      toolPermissionContext: Ao,
      userSpecifiedFallbackModel: Uo,
      verbose: No,
      wasPersistedTrustedBeforeSetup: ir,
      wasTrustedBeforeSetup: Ce,
    } = v;
  logEvent("tengu_startup_manual_model_config", {
    cli_flag: getModelForAnalytics(k.model),
    env_var: getModelForAnalytics(process.env.ANTHROPIC_MODEL),
    default_env_var: getModelForAnalytics(a.ANTHROPIC_DEFAULT_MODEL),
    settings_file: getModelForAnalytics(getInitialSettings().model),
    settings_source: fromEnumOpt(getEffectiveSettingSource("model")),
    subscriptionType: fromEnumOpt(getSubscriptionType()),
    agent: N,
  });
  let Ye = getModelDeprecationNotice(Io ?? fo),
    tt = [];
  if (Bt)
    tt.push({
      key: "permission-mode-notification",
      text: Bt,
      priority: "high",
    });
  if (Yt)
    tt.push({ key: Yt.key, text: Yt.text, color: "warning", priority: "high" });
  let St = Ao;
  if ((!Ce && checkHasTrustDialogAccepted()) || (!ir && isWorkspacePersistedTrusted())) {
    if (!Ce && checkHasTrustDialogAccepted())
      import("../../01-核心基础设施/共享小工具-未细化/parseGitHubRepository.3ng6714h.js").then((Oe) => {
        Oe.detectCurrentRepositoryWithHost();
      });
    let _e = getEffectivePermissionRules(),
      ve = applyDisabledModePolicies(syncAdditionalWorkingDirectories(syncPermissionRulesFromDisk(Ao, _e), [], getEffectiveAdditionalDirectories(), void 0, !1, void 0, ae), _e);
    if (((St = ve.context), ve.exitedAutoMode)) tt.push(buildAutoModeGateNotification(getAutoModeUnavailableNotification("settings")));
  }
  let Qt = {
      ...St,
      mode: isAgentSwarmsEnabled() && getTeammateContextModule().isPlanModeRequired() ? "plan" : St.mode,
    },
    jt = Ox(),
    ft = Oi({ remoteControlFlag: yt, isRemoteThinClient: Nn() || Boolean(Xe) });
  Pi(ft);
  let gt = Ho?.teamContext ?? (getDynamicTeamContext() ? await buildInitialTeamContext(ae) : void 0),
    me = {
      sessionNoticesPoll: { pendingDeliveryUuids: [] },
      settings: getInitialSettings(),
      tasks: {},
      attentionBudget: DEFAULT_ATTENTION_BUDGET,
      proactivityLevel: co,
      transcripts: {},
      taskDecorations: {},
      runningSubagents: 0,
      ...(go && { standaloneAgentContext: { name: go } }),
      agentNameRegistry: new Map(),
      sendMessagePins: {},
      agentTypesInvokedThisSession: new Set(),
      verbose: No ?? resolveSetting("verbose", !1).value,
      showMessageTimestamps: resolveSetting("showMessageTimestamps", !1).value,
      mainLoopModel: Rt,
      mainLoopModelForSession: null,
      isBriefOnly: jt,
      slackTagConnected: !1,
      replTab: "convo",
      diffPanelVisible: !1,
      panelFileView: null,
      briefTranscript: No ? !1 : ut,
      expandedView: getGlobalConfig().showExpandedTodos ? "tasks" : "none",
      coordinatorTaskIndex: -1,
      workflowFooterIndex: 0,
      viewSelectionMode: "none",
      queueEditIndex: null,
      footerSelection: null,
      footerLinks: [],
      toolPermissionContext: Qt,
      agent: T?.agentType,
      agentDefinitions: D,
      skillTools: [],
      mcp: {
        clients: [],
        tools: [],
        commands: [],
        resources: {},
        resourceTemplates: {},
        pluginReconnectKey: 0,
      },
      plugins: {
        enabled: [],
        disabled: [],
        commands: [],
        errors: [],
        warnings: [],
        installationStatus: { marketplaces: [], plugins: [] },
        needsRefresh: !1,
      },
      setupIssues: {
        settingsErrorCount: 0,
        lspFailedCount: 0,
        marketplaceIssueCount: 0,
        chromeExtensionIssueCount: 0,
        sandboxIssueCount: 0,
        statuslineIssueCount: 0,
        flaggedPluginCount: 0,
        modelDeprecationWarning: Ye,
        modelRestrictedWarning: vo ? { requested: vo, effective: fo } : null,
        existingClaudeSubscription: null,
      },
      prStatus: null,
      prNeedsAuth: !1,
      remoteSessionUrl: void 0,
      projectsSelfIdentity: EMPTY_PROJECTS_SELF_IDENTITY,
      remoteConnectionStatus: "connecting",
      remoteBootstrap: null,
      remoteBackgroundTasks: [],
      workerInventory: null,
      hasRemoteReplyChannel: !1,
      replBridgeEnabled: ft.replBridgeEnabled,
      replBridgeAutoOnByDefault: ft.replBridgeAutoOnByDefault,
      replBridgeExplicit: ft.replBridgeExplicit,
      replBridgeOutboundOnly: ft.replBridgeOutboundOnly,
      replBridgeConnected: !1,
      replBridgeSessionActive: !1,
      replBridgeSkipNextArchive: !1,
      replBridgeReconnecting: !1,
      replBridgeConnectUrl: void 0,
      replBridgeSessionUrl: void 0,
      replBridgeEnvironmentId: void 0,
      replBridgeSessionId: void 0,
      replBridgeError: void 0,
      replBridgeErrorKind: void 0,
      replBridgeInitialName: or,
      replBridgeSessionGroupingId: yt && mt ? (rr ?? void 0) : void 0,
      notifications: { current: null, queue: tt, pinned: [] },
      queuedRemoteNotifications: { pending: [], drainedIds: [], nudge: null },
      autoUpdaterResult: null,
      prResolvedThisSession: !1,
      ultrareviewOverageConfirmed: !1,
      frameUrls: {},
      todos: {},
      fileHistory: {
        snapshots: [],
        trackedFiles: new Set(),
        snapshotSequence: 0,
      },
      attribution: createInitialAttributionState(),
      thinkingEnabled: nr,
      promptSuggestionEnabled: resolvePromptSuggestionsEnabled(),
      awaySummaryEnabled: isAwaySummaryEnabled(),
      displayedMessageContent: {},
      inbox: { messages: [] },
      promptSuggestion: { status: "empty" },
      taskSummary: null,
      pendingMemoryUpdates: [],
      pendingWorkerRequest: null,
      pendingSandboxRequest: null,
      initialMessage: Ue
        ? { message: createUserMessage({ content: String(Ue) }) }
        : k.replyOnResume
          ? { replay: !0 }
          : null,
      ...S$e(k.effort),
      ultracode: i4t(k.effort),
      cacheMissAckedAtOutputTokens: -1,
      autoCompactWindow: L,
      activeOverlays: new Set(),
      fastMode: shouldStartWithFastMode(fo),
      ...(isAdvisorToolEnabled() && U && { advisorModel: U }),
      teamContext: gt,
      teammateColors: Ho?.teammateColors ?? {
        assignments: new Map(),
        index: 0,
      },
      storedImagePaths: new Map(),
      imageDescriptions: new Map(),
      classifierApprovals: { approvals: new Map(), checking: new Set() },
      webBrowser: import.meta
        .require("../../01-核心基础设施/共享小工具-未细化/chunk-hkbpxv9z.js")
        .getDefaultWebBrowserState(),
    };
  if (Ue && le === null) addHistoryEntry(String(Ue), ae);
  let Lo = _o ? [...Kt, _o] : Kt;
  (saveGlobalConfig((_e) => ({ ..._e, numStartups: (_e.numStartups ?? 0) + 1 }), ae),
    setImmediate(
      (_e, ve, Oe) => {
        (Na(getGlobalConfig(), ve), reportPluginSessionTelemetry(_e, Oe));
      },
      v.storageV5,
      Ve,
      v.credentials,
    ));
  let $t = null,
    jo = !1,
    $o =
      $t && !jo
        ? $t.then((_e) => _e.createSessionTurnUploader(Se)).catch(() => null)
        : null,
    Lr =
      $t && jo
        ? $t.then((_e) => _e.createSessionTurnUploaderV2(Se)).catch(() => null)
        : null,
    Vo = {
      debug: J,
      commands: [...K, ...Nt],
      initialTools: Lo,
      mcpClients: zt,
      autoConnectIdeFlag: $e,
      mainThreadAgentDefinition: T,
      disableSlashCommands: X,
      dynamicMcpConfig: ce,
      strictMcpConfig: ho,
      systemPrompt: Fo,
      appendSystemPrompt: I,
      systemPromptSnapshot: k.systemPromptSnapshot,
      thinkingConfig: bo,
      thinkingConfigExplicit: at,
      ...(Uo && { fallbackModel: Uo }),
      ...($o && {
        onTurnComplete: (_e) => {
          $o.then((ve) => ve?.(_e));
        },
      }),
      ...(Lr && {
        onCaptureSnapshot: (_e, ve) => {
          Lr.then((Oe) => Oe?.(_e, ve));
        },
      }),
    },
    sr = {
      session: Se,
      modeApi: systemPromptModule,
      mainThreadAgentDefinition: T,
      agentDefinitions: D,
      currentCwd: V,
      cliAgents: W,
      initialState: me,
      permissionModeCliSet: Tt !== void 0 || Boolean(q),
      storageV5: ae,
      credentials: He,
    };
  if (k.continue) {
    let _e = !1;
    try {
      let ve = performance.now(),
        { clearSessionCaches: Oe } = await import("../Headless-SDK模式/clearSessionCaches.avjeddw7.js");
      Oe(Se, void 0, void 0, void 0, ae);
      let Ct,
        Zt = await loadConversationForResume(void 0, void 0, {
          forkSession: !!k.forkSession,
          replyOnResume: !!k.replyOnResume,
          storageV5: ae,
          credentials: He,
          ...createPrecomputeSidecarReadAheadOptions(Se.precompute, ae, { forkSession: !!k.forkSession }),
          onNewestRunningInBackground: (lt) => {
            Ct = lt;
          },
        });
      if (!Zt)
        return (
          await logEventAsync("tengu_continue", { success: !1 }),
          await Ne(
            se,
            Ct === void 0 ? "No conversation found to continue" : formatContinuedInMessage(Ct),
          )
        );
      let We = await $st(
        Zt,
        {
          forkSession: !!k.forkSession,
          includeAttribution: !0,
          transcriptPath: Zt.fullPath,
        },
        sr,
      );
      if (We.restoredAgentDef) T = We.restoredAgentDef;
      (applyBriefModeFlag(k),
        await Ur(k),
        logEvent("tengu_continue", {
          success: !0,
          resume_duration_ms: Math.round(performance.now() - ve),
        }),
        (_e = !0));
      let Vt = mergeAgentMcpServers(ce, We.restoredAgentDef ?? T, { strictMcpConfig: ho });
      if (Object.keys(Vt).length > 0) await awaitMcpPolicyColdStart({ hasDynamicMcpConfig: !0 });
      await launchSessionRepl(
        se,
        {
          getFpsMetrics: fe,
          stats: Lt,
          initialState: We.initialState,
          sessionHooks: We.sessionHooks,
          session: Se,
          storageV5: ae,
          credentials: He,
        },
        {
          ...Vo,
          mainThreadAgentDefinition: We.restoredAgentDef ?? T,
          dynamicMcpConfig: Vt,
          initialMessages: We.messages,
          initialFileHistorySnapshots: We.fileHistorySnapshots,
          initialContentReplacements: We.contentReplacements,
          initialAgentName: We.agentName,
          initialAgentColor: We.agentColor,
        },
        io,
      );
    } catch (ve) {
      if (!_e) await logEventAsync("tengu_continue", { success: !1 });
      logError(dt(ge(ve), "continue/resume launchRepl failed"));
      let Oe = ge(ve).message;
      (emitExitMessage(
        _e
          ? `Claude Code exited: startup failed after restoring the previous session (${Oe}).`
          : `Claude Code exited: could not continue the previous session (${Oe}). Run claude --resume to pick a session, or start a new one.`,
      ),
        await gracefulShutdown(1, "other"));
      return;
    }
  } else if (k.resume || k.fromPr || Xe || x !== null) {
    let { clearSessionCaches: _e } = await import("../Headless-SDK模式/clearSessionCaches.avjeddw7.js");
    _e(Se, void 0, void 0, void 0, ae);
    let ve = null,
      Oe = void 0,
      Ct = Xn(k.resume),
      Zt = void 0,
      We = null,
      Vt = void 0;
    if (k.fromPr) {
      if (k.fromPr === !0) Vt = !0;
      else if (typeof k.fromPr === "string") Vt = k.fromPr;
    }
    if (k.resume && typeof k.resume === "string" && !Ct && !isTranscriptFileResumeArg(k.resume)) {
      let ne = k.resume.trim();
      if (ne) {
        let Z = await searchSessionsByCustomTitle(ne, { exact: !0 }, ae);
        if (Z.length === 1) ((We = Z[0]), (Ct = getSessionIdFromLog(We) ?? null));
        else Zt = ne;
      }
    }
    if (x !== null || Xe) {
      await b_();
      let ne = getCloudSessionsUnavailableReason();
      if (ne) return await Ne(se, `Error: ${ne}`, () => gracefulShutdown(1));
    }
    if (x !== null) {
      let ne = parseSelfAddressableSessionId(x),
        Z = ne !== null ? toCompatSessionId(ne) : null;
      if (Je !== null) {
        if (ao) {
          if (typeof Ue === "string" && Ue.length > 0) x = Ue;
        } else if (lo !== null && lo.length > 0)
          return await Ne(
            se,
            "Error: --environment with --cloud <description> cannot also take piped stdin. Pass the task as the description, or drop --cloud.",
            () => gracefulShutdown(1),
          );
      }
      let de = !Z && x.length > 0,
        Qe = de ? randomUUID() : void 0,
        ue = Tt ? parsePermissionModeOrDefault(Tt) : void 0,
        Fe = ue && isSelectablePermissionMode(ue) && ue !== "bypassPermissions" ? ue : void 0,
        ze = getFeatureValue_CACHED_MAY_BE_STALE("tengu_remote_backend", !1);
      if (Z && !ze)
        return await Ne(
          se,
          "Error: Attaching to an existing cloud session is not enabled for your account.",
          () => gracefulShutdown(1),
        );
      if (!ze && !de && Je === null)
        return await Ne(
          se,
          `Error: --cloud requires a description.
Usage: claude --cloud "your task description"`,
          () => gracefulShutdown(1),
        );
      let xt,
        ht = [],
        vt,
        eo,
        ar,
        lr,
        Wo,
        Go,
        ot,
        ko,
        qo,
        Yo = null;
      if (Z) {
        (logEvent("tengu_remote_attach_session", { session_id: sanitizeAnalyticsId(Z) }), Nr(Se, k));
        let [
            { attachRemote: nt },
            { createFleetViewHost: Po },
            { ensureFleetNudgeStore: to },
          ] = await Promise.all([
            import("../../02-功能模块/云会话-Teleport/attachRemote.2hj4z1a1.js"),
            import("../../01-核心基础设施/共享小工具-未细化/chunk-6nr84z8c.js"),
            import("../../02-功能模块/后台任务-Shell管理/chunk-c7mzes79.js"),
          ]),
          Ro = Po();
        try {
          await nt(se, Z, Se, {
            initialStateOverride: me,
            autoConnectIdeFlag: $e,
            disableSlashCommands: X,
            storageV5: ae,
            credentials: He,
            fleetNudgeStore: to(Ro, ae),
          });
        } catch (Ko) {
          return await Ne(
            se,
            `Couldn't attach to cloud session: ${l(Ko)}`,
            () => gracefulShutdown(1),
          );
        }
        let [
          { mountFleetViewWithComposerBack: oo },
          { applyFleetViewHostWindowsEnv: zo },
          { createRoot: At },
        ] = await Promise.all([
          import("../../02-功能模块/Fleet多会话视图/Fleet多会话视图.r6bvyjj3.js"),
          import("../../01-核心基础设施/共享小工具-未细化/FleetViewScreen.w73yzmz1.js"),
          import("../../02-功能模块/Daemon-守护服务/createRoot.pw1402cq.js"),
        ]);
        (zo(), (process.env.CLAUDE_AGENTS_SELECT = remoteRowId(Z)));
        let Mt = await At(getBaseRenderOptions(!1));
        return (
          await oo(Mt, {
            entryChannel: "remote_detach",
            storageV5: ae,
            credentials: He,
            host: Ro,
          }),
          await gracefulShutdown(0)
        );
      } else {
        logEvent("tengu_remote_create_session", {
          has_initial_prompt: String(de),
          branch_mode: getBranchMode(De, et),
        });
        try {
          vt = await prepareApiRequest(He);
        } catch (Ze) {
          return (
            n(`--remote auth setup failed: ${l(Ze)}`, { level: "error" }),
            await Ne(se, `Error: ${l(Ze) || "Failed to authenticate"}`, () =>
              gracefulShutdown(1),
            )
          );
        }
        let nt = await isViolinWoodEnabled().catch(() => !1),
          Po = new AbortController(),
          to =
            ze && nt
              ? zn(se, { session: Se, onCancel: () => Po.abort() })
              : null;
        if (to === null)
          process.stderr.write(
            chalk.dim("Creating remote session\u2026") +
              `
`,
          );
        let Ro = nt ? getDirSyncPromptRoot({ staysAttached: ze }) : null;
        if (Ro !== null) {
          let { decideSyncOffer: Ze } = await import("../../02-功能模块/文件同步-Sync/decideSyncOffer.g6z70q9p.js");
          if (
            (
              await Gn(se, {
                decide: () =>
                  Ze({
                    explicitRef: De
                      ? { revision: De, flag: "--on-branch" }
                      : et
                        ? { revision: et, flag: "--ref" }
                        : void 0,
                    poolId: Je ?? void 0,
                  }),
                onDecided: (Xo) => {
                  if (!Xo.offer)
                    logEvent("tengu_dir_sync_mode_prompt_skipped", {
                      reason: fromEnum(Xo.reason),
                    });
                },
              })
            ).offer
          )
            await Wn(se, { repositoryRoot: Ro, storageV5: ae });
        }
        let oo = nt && (await isSettingsToCloudEnabled().catch(() => !1));
        if (
          oo &&
          shouldPromptForRemoteHomeSettingsMode({ staysAttached: ze, launchMayForward: Le, hostConsent: qe })
        )
          await Yn(se, { configHome: getClaudeConfigDir(), storageV5: ae });
        let zo = isSettingsModeForwardable({
            settingsToCloudEnabled: oo,
            launchMayForward: Le,
            hostConsent: qe,
          }),
          At = zEt({
            gateOn: zo,
            permissionModeTyped: Tt !== void 0,
            dangerouslySkipPermissions: q === !0,
            scrubbed: isScrubEnabled(),
            settings: getInitialSettings(),
            effort: Ya(me),
          });
        if (nt) {
          ko = getMainLoopModel();
          let Ze = isInternalModel(ko);
          if (
            ((ot = resolveInitialPermissionMode({
              model: ko,
              internal: Ze,
              explicitMode: Fe,
              droppedMode: (ue !== void 0 && !Fe) || Boolean(q),
              settingsMode: At.settingsDefault,
              settingsModeForwardable: zo,
              autoSeedable: xJe(getInitialSettings()) && !isScrubEnabled(),
              publicModel: getDefaultOpusModel(),
              repositoryModel: Ze
                ? getRepositoryModelSource({
                    model: ko,
                    modelCli: k.model,
                    agent: T,
                    agentSelectedByCli: v.agentCli !== void 0,
                    agents: D.allAgents,
                    effectiveModel: v.effectiveModel,
                    initialMainLoopModel: Rt,
                    restrictedModel: vo,
                  })
                : void 0,
              trustedPlanDisplaced: qEt(getInitialSettings()),
            })),
            ot.notice)
          )
            n(`[remote] ${ot.notice.text}`);
        }
        let Mt = ot ? ot.permissionMode : Fe;
        if (nt)
          ((lr = Mt && { mode: Mt }),
            (qo = Snr({
              sentMode: Mt,
              repositorySettings: getSettingsForSource("projectSettings"),
            })),
            (Yo = bnr({
              seed: At,
              settingsMode: getInitialSettings().permissions?.defaultMode,
              sentMode: Mt,
              startsIn: qo,
            })));
        let Ko = nt,
          Jo = !Ko ? void 0 : !ze ? "not_attached" : void 0;
        if (Jo) (logEvent("tengu_device_bind_skipped", { reason: fromEnum(Jo) }), (Go = Jo));
        let Ni =
            Ko && !Jo
              ? {
                  orgUuid: vt.orgUUID,
                  accountUuid: getStoredOauthAccountInfo()?.accountUuid,
                  onBound: (Ze) => {
                    Wo = Ze;
                  },
                  onUnbound: (Ze) => {
                    Go = Ze;
                  },
                }
              : void 0,
          Bi = De ?? et ?? (await getBranch()),
          { showTeleportErrorsImpl: Li } = await import("../../02-功能模块/云会话-Teleport/showTeleportErrorsImpl.pjrm8ksf.js"),
          ct = await teleportToRemoteWithErrorHandling(se, {
            showTeleportErrors: Li,
            staysAttached: ze,
            deferInitialMessage: ze,
            description: de ? x : null,
            descriptionUuid: Qe,
            forwardHomeSettings: Le,
            homeSettingsConsent: qe ?? void 0,
            signal: Po.signal,
            source: "remote",
            branchName: Bi || void 0,
            title: go || void 0,
            reuseOutcomeBranch: De ?? void 0,
            explicitRef: De ?? et ?? void 0,
            poolId: Je ?? void 0,
            effort: oo && k.effort !== void 0 ? Ya(me) : At.effort,
            correlationId: j ?? void 0,
            deviceBinding: Ni,
            permissionMode: Mt,
            proactivityLevel: k.proactivity,
            onProgress: to?.update,
            model: ko,
            storageV5: ae,
            credentials: He,
          });
        if (!ct.ok) {
          if (to !== null && Po.signal.aborted) return await to.exitCancelled();
          return (
            to?.failed(),
            logEvent("tengu_remote_create_session_error", {
              error: fromEnum(ct.failReason),
              branch_mode: getBranchMode(De, et),
              settings_gate: S(oo ? "on" : "off"),
              ...(ct.failDetail?.endpoint && {
                create_endpoint: fromEnum(ct.failDetail.endpoint),
              }),
              ...(ct.failDetail?.serverReason && {
                server_reason: fromEnum(ct.failDetail.serverReason),
              }),
              ...(ct.failDetail?.preflightTransient !== void 0 && {
                deny_transient: S(
                  ct.failDetail.preflightTransient ? "true" : "false",
                ),
              }),
            }),
            await Ne(
              se,
              ct.failMessage
                ? `Error: ${ct.failMessage}`
                : "Error: Unable to create cloud session",
              () => gracefulShutdown(1),
            )
          );
        }
        let kt = ct.session;
        if (
          ((ht = ct.notices),
          logEvent("tengu_remote_create_session_success", {
            session_id: sanitizeAnalyticsId(kt.id),
            initial_prompt_withheld: kt.withheldInitialMessage !== void 0,
            branch_mode: getBranchMode(De, et),
            permission_mode_source: S(
              Fe
                ? "flag"
                : ue
                  ? "flag_withheld"
                  : ot?.action === "auto_seeded"
                    ? At.permissionMode
                      ? "model_auto_over_settings"
                      : "model_auto"
                    : At.permissionMode
                      ? "settings"
                      : At.considered && At.settingsDefaultModePresent
                        ? "settings_withheld"
                        : "none",
            ),
            permission_mode: fromEnumOpt(Mt),
            settings_gate: S(oo ? "on" : "off"),
          }),
          ot && ot.action !== "none")
        )
          logEvent("tengu_remote_model_gate_hint", {
            entry_point: S("interactive"),
            session_id: sanitizeAnalyticsId(kt.id),
            permission_mode: fromEnumOpt(Mt) ?? S("unset"),
            requested_mode: fromEnumOpt(ue) ?? S("unset"),
            settings_mode: fromEnumOpt(At.permissionMode) ?? S("unset"),
            skip_permissions: S(q ? "true" : "false"),
            action: fromEnum(ot.action),
            ...(ot.repositoryModel && {
              repository_model: fromEnum(ot.repositoryModel),
            }),
          });
        if (!ze) {
          if (
            (process.stdout.write(`Created cloud session: ${kt.title}
`),
            Je !== null)
          )
            process.stdout.write(`Session ID: ${kt.id}
`);
          if (
            (process.stdout
              .write(`View: ${wa(kt.id, void 0, { from: "cli", m: "0" })}
`),
            process.stdout.write(`Resume with: claude --teleport ${kt.id}
`),
            ot?.notice)
          )
            process.stdout.write(`${ot.notice.text}
`);
          for (let Ze of ct.notices)
            process.stdout.write(`${Ze}
`);
          (await gracefulShutdown(0), process.exit(0));
        }
        ((xt = kt.id), (eo = kt.homeSeed), (ar = kt.withheldInitialMessage));
      }
      (kz(!0), $p(_m(xt), "remote_attach"));
      let { getClaudeAIOAuthTokens: Ri, handleOAuth401Error: Ti } =
          await import("../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
        jr = () => Ri()?.accessToken ?? vt.accessToken,
        $r = isViolinWoodEnabledCached()
          ? await (
              await import("../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js")
            )
              .takeLaptopDirSyncSession(xt)
              ?.catch(() => {
                return;
              })
          : void 0,
        [
          { startDeviceRegistration: xi },
          { deviceToolNoticesTo: Mi },
          { deviceHooksProcessMemories: Di },
        ] = await Promise.all([
          import("../../01-核心基础设施/共享小工具-未细化/startDeviceRegistration.3cqb8ttd.js"),
          import("../../01-核心基础设施/共享小工具-未细化/chunk-sdeyn1dg.js"),
          import("../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
        ]),
        Hi = xi({
          sessionId: xt,
          getAccessToken: jr,
          orgUuid: vt.orgUUID,
          getDeviceId: () => Wo,
          storageV5: ae,
          dirSync: $r !== void 0,
          onNotice: Mi(Se),
          servedSettingsChanged: Di.of(Se.host).servedSettingsChanged,
        }),
        Vr = Wo,
        Wr = void 0,
        Fi = {
          sessionId: xt,
          getAccessToken: jr,
          orgUuid: vt.orgUUID,
          onAuth401: (nt) => Ti(nt, He, ae),
          initialPromptUuid: Qe,
          hasExplicitTitle: Boolean(go),
          dirSync: $r,
          heldServedCall: Hi.heldServedCall,
          ...(eo && { homeSeed: eo }),
          ...(ar && { withheldInitialPrompt: ar }),
          ...(lr && { createPermissionMode: lr }),
          ...(Wr && { servedTools: Wr }),
          ...(Vr !== void 0 && {
            eventSigner: import("../../02-功能模块/云会话-Teleport/deviceEventSignerFor.14ybgam1.js").then(
              ({ deviceEventSignerFor: nt }) => nt(Vr, He),
              reportEventSignerLoadFailure,
            ),
          }),
        },
        Gr = wa(xt, void 0, { from: "cli", m: "0" }),
        qr = buildCloudSessionStatusMessage("create", Gr, isViolinWoodEnabledCached()),
        Yr = Yo ? [createSystemInfoMessage(Yo.text, Yo.level)] : [],
        Kr = ht.map((nt) => createSystemInfoMessage(nt, "warning")),
        Jr = de ? createUserMessage({ content: x, uuid: Qe }) : null,
        dr = Z
          ? Tt
            ? "--permission-mode is ignored when attaching \u2014 the session keeps its current mode (shift+tab to change it)"
            : void 0
          : ue && !Fe
            ? `--permission-mode ${ue} is not forwarded \u2014 the cloud session uses its default mode`
            : void 0,
        Oo = ot?.notice,
        cr = Go !== void 0 && Wo === void 0 ? formatUnboundNotice(Go) : void 0,
        Ui = {
          ...me,
          initialMessage: suppressInitialMessage(de && Je !== null && ao, me.initialMessage),
          remoteSessionUrl: Gr,
          ...(qo !== void 0 && {
            toolPermissionContext: { ...me.toolPermissionContext, mode: qo },
          }),
          replTab: "convo",
          diffPanelVisible: !1,
          replBridgeEnabled: !1,
          replBridgeOutboundOnly: !1,
          replBridgeExplicit: !1,
          ...((dr || cr || Oo) && {
            notifications: {
              ...me.notifications,
              current: null,
              queue: [
                ...me.notifications.queue,
                ...(dr
                  ? [
                      {
                        key: "remote-permission-mode-not-applied",
                        text: dr,
                        color: "warning",
                        priority: "high",
                      },
                    ]
                  : []),
                ...(cr
                  ? [
                      {
                        key: "remote-device-not-bound",
                        kind: "warning",
                        text: cr,
                        color: "warning",
                        priority: "high",
                        timeoutMs: 30000,
                      },
                    ]
                  : []),
                ...(Oo?.level === "warning"
                  ? [
                      {
                        key: "remote-internal-model-mode",
                        kind: "warning",
                        text: Oo.short,
                        color: "warning",
                        priority: "high",
                        timeoutMs: 30000,
                      },
                    ]
                  : Oo
                    ? [
                        {
                          key: "remote-internal-model-mode",
                          kind: "feedback",
                          text: Oo.short,
                          priority: "medium",
                          timeoutMs: 15000,
                        },
                      ]
                    : []),
              ],
            },
          }),
        };
      (Nr(Se, k),
        await launchSessionRepl(
          se,
          {
            getFpsMetrics: fe,
            stats: Lt,
            initialState: Ui,
            session: Se,
            storageV5: ae,
            credentials: He,
          },
          {
            debug: J,
            commands: K,
            initialTools: [],
            initialMessages: Jr
              ? [...mo, qr, ...Yr, ...Kr, Jr]
              : [...mo, qr, ...Yr, ...Kr],
            mcpClients: [],
            autoConnectIdeFlag: $e,
            mainThreadAgentDefinition: T,
            disableSlashCommands: X,
            remoteSessionConfig: Fi,
            thinkingConfig: bo,
            thinkingConfigExplicit: at,
          },
          io,
        ));
      return;
    } else if (Xe) {
      if (Xe === !0 || Xe === "") {
        (logEvent("tengu_teleport_interactive_mode", {}),
          n("selectAndResumeTeleportTask: Starting teleport flow..."));
        let ne = await jn(se);
        if (!ne) (await gracefulShutdown(0), process.exit(0));
        let { branchError: Z } = await checkOutTeleportedSessionBranch(ne.branch);
        ve = processMessagesForTeleportResume(ne.log, Z, ne.environmentKind);
      } else if (typeof Xe === "string") {
        logEvent("tengu_teleport_resume_session", { mode: S("direct") });
        try {
          let ne = await fetchSession(Xe, void 0, He),
            Z = await validateSessionRepository(ne);
          if (Z.status === "host_unverified") {
            let Fe =
              Z.sessionHost && !isGitHubHost(Z.sessionHost)
                ? `${Z.sessionHost}/${Z.sessionRepo}`
                : (Z.sessionRepo ?? "");
            if (
              !(await Vn(se, {
                sessionRepo: Fe,
                rawRemoteUrl: Z.rawRemoteUrl ?? "",
              }))
            )
              await gracefulShutdown(0);
          }
          if (Z.status === "mismatch" || Z.status === "not_in_repo") {
            logEvent(
              Z.status === "mismatch"
                ? "tengu_teleport_error_repo_mismatch_sessions_api"
                : "tengu_teleport_error_repo_not_in_git_dir_sessions_api",
              { sessionId: sanitizeAnalyticsId(Xe), stage: S("direct_arg_detect") },
            );
            let Fe = Z.sessionRepo;
            if (Fe) {
              let ze = getTrackedRepoPaths(Fe),
                xt = await filterExistingRepoPaths(ze);
              if (xt.length > 0) {
                let ht = await $n(se, {
                  targetRepo: Fe,
                  initialPaths: xt,
                  storageV5: ae,
                });
                if (ht) (Yu(ht), setSessionCwd(ht), ES(ht), getPlansDirectory.cache.clear?.(), primePlanSlugCollisions(ae));
                else await gracefulShutdown(0);
              } else {
                let ht = Fe,
                  vt = "";
                if (Z.status === "mismatch") {
                  let eo = formatRepoMismatchDisplay(Z);
                  ((ht = eo.sessionDisplay ?? Fe),
                    (vt = eo.currentDisplay
                      ? `
This repo is ${eo.currentDisplay}.`
                      : ""));
                } else {
                  if (Z.sessionHost && !isGitHubHost(Z.sessionHost))
                    ht = `${Z.sessionHost}/${Fe}`;
                  if (Z.rawRemoteUrl)
                    vt = `
Couldn't parse your git remote: ${Z.rawRemoteUrl}`;
                }
                throw new Iu(
                  `You must run claude --teleport ${Xe} from a checkout of ${ht}.${vt}`,
                  chalk.red(`You must run claude --teleport ${Xe} from a checkout of ${chalk.bold(ht)}.${vt}
`),
                );
              }
            }
          } else if (Z.status === "error")
            throw new Iu(
              Z.errorMessage || "Failed to validate session",
              chalk.red(`Error: ${Z.errorMessage || "Failed to validate session"}
`),
            );
          let { showTeleportErrorsImpl: de } =
            await import("../../02-功能模块/云会话-Teleport/showTeleportErrorsImpl.pjrm8ksf.js");
          await handleTeleportPrerequisites(se, new Set(), de);
          let { teleportWithProgress: Qe } =
              await import("../../02-功能模块/云会话-Teleport/teleportWithProgress.vh5heaat.js"),
            ue = await Qe(se, Se, Xe);
          (Cje({ sessionId: Xe }), (ve = ue.messages));
        } catch (ne) {
          let Z = ne instanceof Iu;
          if (!Z) logError(dt(ge(ne), "teleport direct resume failed"));
          await Ne(se, Z ? ne.message : l(ne), () => gracefulShutdown(1));
        }
      }
    }
    if (isAgentsFleetEnabled() || (typeof k.resume === "string" && isTranscriptFileResumeArg(k.resume))) {
      if (k.resume && typeof k.resume === "string" && !Ct) {
        let Z = null?.parseCcshareId(k.resume);
        if (isTranscriptFileResumeArg(k.resume)) {
          let de = Xn(basename(k.resume, ".jsonl"));
          if (de && !k.forkSession) {
            let ue = await getLiveSessionHolder(de);
            if (ue)
              return await Ne(
                se,
                formatSessionLiveElsewhereMessage({ sessionId: de, holder: ue, canFork: !0 }),
              );
          }
          let Qe = "load_error";
          try {
            let ue = performance.now(),
              Fe = await loadTranscriptFromFile(k.resume, ae),
              ze = await loadConversationForResume(Fe, void 0, {
                forkSession: !!k.forkSession,
                replyOnResume: !!k.replyOnResume,
                storageV5: ae,
                credentials: He,
                ...createPrecomputeSidecarReadAheadOptions(Se.precompute, ae, {
                  forkSession: !!k.forkSession,
                  expectedSessionId: de ?? void 0,
                }),
              });
            if (ze) {
              if (
                ((Qe = "processing_error"),
                (Oe = await $st(
                  ze,
                  {
                    forkSession: !!k.forkSession,
                    sessionIdOverride: de ?? void 0,
                    transcriptPath: ze.fullPath,
                  },
                  sr,
                )),
                Oe.restoredAgentDef)
              )
                T = Oe.restoredAgentDef;
              logEvent("tengu_session_resumed", {
                entrypoint: S("file"),
                success: !0,
                resume_duration_ms: Math.round(performance.now() - ue),
              });
            } else
              logEvent("tengu_session_resumed", {
                entrypoint: S("file"),
                success: !1,
                failure_reason: S("not_found_explicit_id"),
              });
          } catch (ue) {
            if (
              (logEvent("tengu_session_resumed", {
                entrypoint: S("file"),
                success: !1,
                failure_reason:
                  Qe === "processing_error"
                    ? S("processing_error")
                    : S("load_error"),
                error_name: Gw(ge(ue)),
                error_code: ue instanceof TranscriptFileFormatError ? fromEnum(ue.code) : EZ(ue),
              }),
              Qe === "load_error" && (Kd(ue) || Bp(ue)))
            )
              n(`--resume file unreadable (${A(ue)}): ${l(ue)}`, {
                level: "error",
              });
            else logError(ue);
            await Ne(
              se,
              `Unable to load transcript from file: ${k.resume}`,
              () => gracefulShutdown(1),
            );
          }
        }
      }
    }
    if (Ct) {
      let ne = Ct;
      if (!k.forkSession) {
        let de = await getLiveSessionHolder(ne);
        if (de)
          return await Ne(se, formatSessionLiveElsewhereMessage({ sessionId: ne, holder: de, canFork: !0 }));
      }
      let Z = "load_error";
      try {
        let de = performance.now(),
          Qe = await loadConversationForResume(We ?? ne, void 0, {
            forkSession: !!k.forkSession,
            replyOnResume: !!k.replyOnResume,
            storageV5: ae,
            credentials: He,
            ...createPrecomputeSidecarReadAheadOptions(Se.precompute, ae, { forkSession: !!k.forkSession }),
          });
        if (!Qe) {
          logEvent("tengu_session_resumed", {
            entrypoint: S("cli_flag"),
            success: !1,
            failure_reason: S("not_found_explicit_id"),
          });
          let Fe = `No conversation found with session ID: ${ne}`;
          return (n(Fe, { level: "error" }), await Ne(se, Fe, () => gracefulShutdown(1)));
        }
        Z = "processing_error";
        let ue = We?.fullPath ?? Qe.fullPath;
        if (
          ((Oe = await $st(
            Qe,
            {
              forkSession: !!k.forkSession,
              sessionIdOverride: ne,
              transcriptPath: ue,
            },
            sr,
          )),
          Oe.restoredAgentDef)
        )
          T = Oe.restoredAgentDef;
        logEvent("tengu_session_resumed", {
          entrypoint: S("cli_flag"),
          success: !0,
          resume_duration_ms: Math.round(performance.now() - de),
        });
      } catch (de) {
        if (
          (logEvent("tengu_session_resumed", {
            entrypoint: S("cli_flag"),
            success: !1,
            failure_reason:
              Z === "processing_error"
                ? S("processing_error")
                : S("load_error"),
            error_name: Gw(ge(de)),
            error_code: EZ(de),
          }),
          Z === "load_error" && (Kd(de) || Bp(de)))
        )
          n(`--resume session load failed (${A(de)}): ${l(de)}`, {
            level: "error",
          });
        else logError(de);
        await Ne(se, `Failed to resume session ${ne}`);
      }
    }
    if (Me)
      try {
        let ne = await Me,
          Z = countMatching(ne, (de) => !de.success);
        if (Z > 0) cliWarn(`Warning: ${Z}/${ne.length} file(s) failed to download.`);
      } catch (ne) {
        return await Ne(se, `Error downloading files: ${l(ne)}`);
      }
    let lt =
      Oe ??
      (Array.isArray(ve)
        ? {
            messages: ve,
            fileHistorySnapshots: void 0,
            agentName: void 0,
            agentColor: void 0,
            restoredAgentDef: T,
            initialState: me,
            contentReplacements: void 0,
            sessionHooks: void 0,
          }
        : void 0);
    if (lt) {
      (applyBriefModeFlag(k), await Ur(k));
      let ne = mergeAgentMcpServers(ce, lt.restoredAgentDef ?? T, { strictMcpConfig: ho });
      if (Object.keys(ne).length > 0) await awaitMcpPolicyColdStart({ hasDynamicMcpConfig: !0 });
      await launchSessionRepl(
        se,
        {
          getFpsMetrics: fe,
          stats: Lt,
          initialState: lt.initialState,
          sessionHooks: lt.sessionHooks,
          session: Se,
          storageV5: ae,
          credentials: He,
        },
        {
          ...Vo,
          mainThreadAgentDefinition: lt.restoredAgentDef ?? T,
          dynamicMcpConfig: ne,
          initialMessages: lt.messages,
          initialFileHistorySnapshots: lt.fileHistorySnapshots,
          initialContentReplacements: lt.contentReplacements,
          initialAgentName: lt.agentName,
          initialAgentColor: lt.agentColor,
        },
        io,
      );
    } else if (
      k.resume === !0 &&
      !k.forkSession &&
      Vt === void 0 &&
      !Ue &&
      !hasEarlyInput() &&
      k.name === void 0 &&
      k.watchArtifact === void 0 &&
      k.watchArtifactNoAutoreact === void 0 &&
      !cliCarriesSessionConfig(k) &&
      isAgentsFleetEnabled() &&
      isPastSessionsExperimentEnabled()
    ) {
      (logEvent("tengu_fleetview", { viaResume: !0 }),
        consumeEarlyInput(),
        import("../../02-功能模块/会话-历史-恢复/startBackgroundHousekeeping.t1hjzkg6.js").then((de) =>
          de.startBackgroundHousekeeping(B().host, ae),
        ));
      let [{ mountFleetView: ne }, { applyFleetViewHostWindowsEnv: Z }] =
        await Promise.all([
          import("../../02-功能模块/Fleet多会话视图/mountFleetView.pctyn7re.js"),
          import("../../01-核心基础设施/共享小工具-未细化/FleetViewScreen.w73yzmz1.js"),
        ]);
      return (
        Z(),
        await ne(se, {
          entryChannel: "cli_resume",
          storageV5: ae,
          credentials: He,
        }),
        await gracefulShutdown(0, "other", { suppressResumeHint: !0 })
      );
    } else
      await Kn(
        se,
        {
          getFpsMetrics: fe,
          stats: Lt,
          initialState: me,
          session: Se,
          storageV5: ae,
          credentials: He,
        },
        listGitWorktrees(he()),
        {
          ...Vo,
          initialSearchQuery: Zt,
          forkSession: k.forkSession,
          filterByPr: Vt,
        },
      );
  } else {
    let _e = je && oe.length === 0 ? je : void 0;
    (profileCheckpoint("action_after_hooks"),
      applyBriefModeFlag(k),
      await Ur(k),
      saveMode(systemPromptModule?.isCoordinatorMode() ? "coordinator" : "normal"),
      Nr(Se, k));
    let ve = oe.length > 0 ? oe : void 0;
    await launchSessionRepl(
      se,
      {
        getFpsMetrics: fe,
        stats: Lt,
        initialState: me,
        session: Se,
        storageV5: ae,
        credentials: He,
      },
      { ...Vo, initialMessages: ve, pendingHookMessages: _e },
      io,
    );
  }
}
export { Hw as main };
