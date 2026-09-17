// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  Xn,
  j,
  Si,
  Gt,
  B,
  bi,
  K,
  sc,
  he,
  wz,
  sn,
  ES,
  o_e,
  dOn,
  M0,
  EOn,
  art,
  COn,
  vOn,
  Qxt,
  su,
  oE,
  jw,
  KR,
  ad,
  drt,
  fae,
  YOn,
  JOn,
  QOn,
  l_e,
  tDn,
  Up,
  ke,
  ld,
  hje,
  IDn,
  Ert,
  f_e,
  Ox,
  lZ,
  q1,
  MA,
  vrt,
  pZ,
  kL,
  xL,
  _ae,
  ELn,
  Hrt,
  Nb,
  Hxe,
  HW,
  vLn,
  RLn,
  HLn,
  Rg,
  ILn,
  Dx,
  H_,
  PW,
  Nn,
  kz,
  ML,
  mv,
  Hz,
  Sae,
  Rje,
  vMn,
  ic,
} from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie, po, zn, An, gp, pl, jf, Uxe } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { sleep, withTimeout, withDeadline } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { logEvent, logEventAsync } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { parseConfigInteger, getClaudeConfigDir, resolveMaxTurns, isSimpleMode, isSafeMode, xg, isInProtectedNamespace } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { le, Io, cr, nt } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { isBunStandaloneExecutable, resolveExecutablePathAsync, env as a, antEnv, udsEnv } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { OAUTH_BETA_HEADER, getOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { lit as S, fromEnum, fromEnumOpt, fromNumber, fromNumberOpt, fromSanitizer_SANITIZER_OUTPUT_ONLY, agentTypeForAnalytics_GATE_EVALUATED } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import {
  ud,
  yt,
  R,
  mi,
  dt,
  ge,
  l,
  A,
  W,
  Rt,
  cc,
  Ps,
} from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import {
  registerCleanup,
  jsonStringify,
  jsonParse,
  hasUnverifiableAncestryWithAnchor,
  expandPathAliases,
  fsSurface,
  getFsSurface,
  changeWorkingDirectory,
  readTailBytes,
  redactSecretsFromText,
  redactDeep,
  isDebugToStdErr,
  flushDebugLogs,
  logForDebugging,
  getDebugLogPath,
} from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { BG_EXIT_CAUSE_SESSION_IN_USE, isStdinUnusableError, writeToStdout, isExitExternallyClocked, peekForStdinData, iterateStreamUntilClose } from "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { capitalize, pluralize, truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { LOCAL_COMMAND_STDOUT_TAG, LOCAL_COMMAND_STDERR_TAG, hashString, isEssentialTrafficOnly, logError, getInMemoryErrors, logMCPDebug } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { getEnvEntrypoint, isDesktopHostEntrypoint, isSdkEntrypoint } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import {
  getProviderState,
  isUnresolvedInferenceProfileArn,
  resolveModelStrings,
  initUserData,
  getGitUserEmail,
  isAnalyticsDisabled,
  getAuthHeaders,
  withOAuth401Retry,
  LONG_CONTEXT_BETA,
  isHipaaTaintActive,
  getModelForAnalytics,
  getModelListForAnalytics,
  DEFAULT_SDK_QUEUE_KEY,
  getCurrentSdkQueueKey,
  enqueueSdkEvent,
  drainSdkEventsForSession,
  rearmFastModeCreditsNotice,
  resolveOrgFastModeStatusFromCache,
  prefetchOrgFastModeStatus,
  primeGatewayModelCache,
  getGatewayModelOptions,
  fetchAndCacheGatewayModels,
  getCatalogModels,
  getSelectableCatalogModels,
  getSelectableModelIds,
  getCatalogDefaultModel,
  findCatalogModel,
  getModelContextWindow,
  getModelMaxOutputTokens,
  catalogHasRuntimeInfo,
  getConfidentialModelIds,
  getMaskedModelIds,
  hasDroppedUnidentifiedRows,
  getDroppedConfidentialModelIds,
  hasDroppedCatalogRows,
  normalizeModelId,
  CONFIDENTIAL_MODEL_ID,
  setServedCatalog,
  setPublishedCatalog,
  registerCatalogPublicIds,
  getSessionMaskedModelIds,
  applyCatalogMasking,
  isCompiledModelId,
  isModelIdMasked,
  getServedCatalogSource,
  getActiveServedCatalog,
  withServedCatalogSuppressed,
  findServedCatalogModel,
  getApplicableOrgDefaultModel,
  getRegistryAliasEntries,
  rUe,
  formatUnrecognizedModelNotice,
  resolveModelBehavesAs,
  getOfferedModelRows,
  getOfferedModelRowIds,
  getOfferedModelAliasMap,
  getNotOfferedModelRows,
  isTierPinnedByEnv,
  getUserSpecifiedModelSetting,
  getMainLoopModel,
  antUpstreamContextWindow,
  getDefaultOpusModel,
  getDefaultSonnetModel,
  getDefaultHaikuModel,
  getResolvedOrgDefaultModel,
  isRecognizedOrgDefaultName,
  getDefaultMainLoopModelSetting,
  resolveDefaultMainLoopModelSetting,
  getEnvDefaultModel,
  getDefaultMainLoopModel,
  firstPartyNameToCanonical,
  isRecognizedCanonical,
  isRecognizedModel,
  getCanonicalName,
  bytesPerTokenForModel,
  parseUserSpecifiedModel,
  parseModelCapabilitiesEntry,
  isModelCapabilitiesCacheEnabled,
  primeModelCapabilitiesCache,
  writeModelCapabilitiesCache,
  STANDARD_CONTEXT_WINDOW_TOKENS,
  isLongContextDisabled,
  isNative1mContextModel,
  ror,
  getEffectiveContextWindow,
  getMaxOutputTokens,
  setAutoModeFlagCli,
  isAutoModeFromFallback,
  resolveThinkingDisplayMode,
  shouldOmitThinkingDisplay,
  isThinkingEnabled,
  filterAllowedCustomBetas,
  getModelCatalogCacheDir,
  persistMaskedModelIds,
  isSemverAtLeast,
  isAbortTerminalReason,
  isFailedTerminalReason,
  getPluginConfigSchema,
  createMainAgentContext,
  httpClient,
  refreshOfficialMcpRegistryUrls,
  BASH_TOOL_NAME,
  POWERSHELL_TOOL_NAME,
  AGENT_REF_PATTERN,
  sanitizeSessionName,
  envSessionKind,
  isBgSession,
  isActingAsBgJob,
  registerSession,
  updateSessionName,
  countConcurrentSessions,
  isToolDetailsLoggingEnabled,
  getFileExtension,
  getVersionForAnalytics,
  getPlatformForAnalytics,
  getMemoryPeaks,
  isTelemetryEnabled,
  logFirstPartyEvent,
  getApiKeySourceSafe,
  getAnthropicApiKeyWithSourceSafe,
  getAdditionalModelOptionsCache,
  clearApiKeyHelperCache,
  clearAwsCredentialsCache,
  resetAwsAuthRefreshCooldown,
  clearGcpCredentialsCache,
  prefetchGcpCredentialsIfSafe,
  prefetchAwsCredentialsAndBedRockInfoIfSafe,
  getClaudeAIOAuthTokenOrigin,
  isClaudeAISubscriber,
  hasStoredOAuthToken,
  is1PApiCustomer as cge,
  getOauthAccountInfo,
  isMaxSubscriber,
  toAccountInfo,
  isScreenReaderModeEnabled,
  formatScreenReaderStatusLabel,
  markScreenReaderAnnouncementWritten,
  getScreenReaderTelemetryProps,
  isGrowthBookCacheEmpty,
  initializeGrowthBook,
  getFeatureValueWithSource_CACHED_MAY_BE_STALE,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getDynamicConfig_CACHED_MAY_BE_STALE,
  isAutoMemoryEnabled,
  getAutoMemPath,
  DEFAULT_GLOBAL_CONFIG,
  GLOBAL_CONFIG_KEYS,
  resetTrustDialogAcceptedCache,
  checkHasTrustDialogAccepted,
  isWorkspacePersistedTrusted,
  getWorkspacePersistedTrustKey,
  saveGlobalConfig,
  getGlobalConfig,
  getRemoteControlAtStartup,
  clearProjectPathForConfigCache,
  getCurrentProjectConfig,
  saveCurrentProjectConfig,
  saveGlobalConfigSyncForExit,
  getCachedClientData,
  hasClientDataCacheSlot,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logFeatureOk, logFeatureBad, logFeatureSad, logFeatureBadAsync, logFeatureSadAsync, withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getCwd } from "../../01-核心基础设施/核心工具-未归类/cwd-context.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/核心工具-日志与脱敏/diagnostics-log.js";
import { Bf } from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";
import { execFileNoThrow, execFileNoThrowWithCwd } from "../工作树-Git/git-exec-hardening.js";
import {
  validateStorageKey,
  getRemoteTransport,
  isRemoteActive,
  readFileHardened,
  memoizeInMap,
  getGitRepoCache,
  getCommonDir,
  resetGitFileWatcher,
  getRemoteUrlForDir,
  findGitRoot,
  gitExe,
  getIsGit,
  getGitDir,
  getHead,
  getGitPresenceForAnalytics,
  getWorktreeCount,
} from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { truncateToWidth, formatNumber, formatTokens, formatRelativeTimeAgo } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { writeFileAtomic } from "../../01-核心基础设施/安全文件系统-FS加固/atomic-file-write.js";
import { getFileStorage } from "../../01-核心基础设施/文件存储-原子写入/file-storage.js";
import { isValidPathSegment, STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { hashSha256, isGitHubHost } from "../../01-核心基础设施/核心工具-路径与平台/git-host-utils.js";
import { cs, xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import {
  pickBy,
  SYSTEM_PROMPT_DYNAMIC_BOUNDARY,
  invalidateAllSettings,
  SETTINGS_SOURCE_ORDER,
  getEnabledSettingsSources,
  PROJECT_SCOPED_SETTINGS_SOURCE_SET,
  lastArrayElement,
  omitObjectKeys,
  sanitizeForDisplay,
  sanitizeMultilineForDisplay,
  sanitizeOptionalText,
  isConnectedMcpServer,
  shouldRefetchMcpServer,
  isLoopbackOrMetadataHost,
  toUrlString,
  formatDisplayText,
  getPluginManifestSchema,
  getMcpToolPrefix,
  applyDynamicMcpServerPermissionRules,
  formatServerDisplayName,
  isRemoteManagedSettingsVerified,
  getLastLoadStatus,
  onLastLoadStatusChanged,
  getRemoteManagedSettingsSyncFromCache,
  isAdminPolicyOrigin,
  stripAnsiControlCharacters,
} from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { resolvePath, pathExists } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { sanitizeAnalyticsId, addStartupContext, getBootstrapEntry, profileCheckpoint } from "../../03-入口与运行时/CLI入口-Commander/startup-profiler.js";
import {
  getSettingsFilePathForSource,
  projectSettingsAliasesUserSettings,
  getSettingsForSource,
  getPolicyEnvCompositionForLogging,
  getInitialSettings,
  getSettings_DEPRECATED,
  getEffectiveSettingSource,
  getSettingsWithErrors,
  getPolicySettingsOrigin,
  updateSettingsForSource,
  updateSettingsForSourceWithTransform,
  getManagedSettingsKeysForLogging,
  getSettingsAfterPluginLoad,
  hasSkipDangerousModePermissionPrompt,
} from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { stripAnsi, stripInvisibleChars, formatSingleLineText } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { parsePermissionMode, isPreAskDeny, isRecordableDenial, LEFT_ARROW_GLYPH, TREE_CONNECTOR_GLYPHS, isSelectablePermissionMode, getExternalPermissionMode, buildPermissionModeMetadata, parsePermissionModeOrDefault } from "../权限系统/chunk-e4pfvp7x.js";
import { splitToolRuleList } from "../权限系统/permission-rule-parsing.js";
import { sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { getDynamicTeamContext, getAgentId, isTeammate } from "../Teammates团队/teammate-context.js";
import { isProcessProvablyGone, isSameProcessAsync, getProcessStartTimeAsync } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { clampColorLevelTo256, chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { isCancel, isAxiosError } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { strip1mSuffix, isSameModelName, stripLongContextTags, getCatalogEntryById, MODEL_CAPABILITIES, modelHasCapability, THIRD_PARTY_PROVIDER_LABELS, getAPIProvider, isFirstPartyApiBackend, isFirstPartyAnthropicBaseUrl } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { isAnthropicHost, isClaudeDownloadsHost, externalHttp } from "../../01-核心基础设施/HTTP-网络层/external-http.js";
import { validateSdkUrlFlag, getMcpClientState, markConfigAsCliOwned, isCliOwnedMcpConfig, bridgeCarrierState, formatUrlForDisplay } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { getSessionAccessToken } from "../认证-OAuth登录/credential-file-descriptors.js";
import { installMemorySummaryOnExit } from "../../01-核心基础设施/核心工具-进程与信号/sdk-memory-summary.js";
import { detectCurrentRepository, getCachedRemoteHost, parseGitHubRepository } from "../工作树-Git/git-repository-detection.js";
import { getArtifactPublishStubDir } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import {
  isFocusModeEnabled,
  stripMemoryTags,
  hasTeamMemoryStore,
  getTeamMemoryDir,
  MANIFEST_FILE_NAME,
  MARKETPLACES_FILE_NAME,
  formatSyncClaimKey,
  parseSyncClaimKey,
  LegacyReservedSpellingError,
  SYNCED_DIR_NAME,
  STAGING_DIR_NAME,
  isSkillBucketId,
  getOrgIdFromBucketId,
  stripTrailingDotsAndSpaces,
  isHiddenPathSegment,
  isSyncOwnedRootName,
  validateSyncedItemName,
  resolveSyncedItemPath,
  SYNCED_SKILLS_DIR_PATH,
  SKILLS_TRASH_DIR_PATH,
  REPL_TOOL_NAME,
  isManagedPermissionRulesOnlyEnabled,
  isUntrustedUncPath,
  isUntrustedAutomountPath,
  hasSuspiciousWindowsPathPattern,
  allWorkingDirectories,
  pathInWorkingPath,
  matchingRuleForInput,
  checkReadableInternalPath,
} from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { isPolicyAllowed, policyDeniedReason } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-8sw91yn5.js";
import { FILE_STATE_MAX_ENTRIES, isFullFileView, normalizeFileContent, createFileStateCache, listCachedFilePaths } from "../MCP客户端/chunk-3kmsshb6.js";
import { getPluginSeedDirs, buildRunCommandHint } from "../插件系统/plugin-system-core.js";
import { shouldAllowManagedHooksOnly, shouldDisableAllHooksIncludingManaged, updateHooksConfigSnapshot } from "../Skills技能/chunk-sapykxw7.js";
import { resetSettingsCacheWithBackendRead } from "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import { areWorkflowsEnabled } from "../编排-Workflow/workflow-feature-gates.js";
import {
  resolvePermissionModeForProactivityLevel,
  resolveFallbackModels,
  resolveInitialModelSelection,
  resolveEffectiveSystemPrompts,
  isValidEffortLevel,
  getOrgEffortCapWarning,
  isSameEffortSelection,
  getSessionEffortLevel,
  buildInitialEffortState,
  getModelEffortLevelIfSupported,
} from "../权限系统/chunk-t3b7pg2x.js";
import { getToolPermissionContext, getEffortValue } from "../权限系统/chunk-fjrcf22x.js";
import { unwrapAbortReason } from "../../01-核心基础设施/核心工具-进程与信号/chunk-h3cty6gp.js";
import { primePlanSlugCollisions, getPlansDirectory } from "../计划模式-Plan/计划模式-Plan.e5mh1avy.js";
import { getProjectsDir, getSessionTranscriptPath, collectInProcessTeammateMessages } from "../Teammates团队/transcript-paths.js";
import { getTempBaseDir, getClaudeTempDir } from "../../01-核心基础设施/核心工具-路径与平台/temp-directory.js";
import {
  createConcurrencyLimiter,
  partition,
  isCommandEnabled,
  findCommand,
  registerHistoryExitFlush,
  picomatchModule,
  getResolvedPowerShellPath,
  validateUserConfig,
  getPluginSource,
  findPluginById,
  savePluginOptions,
  getUnconfiguredPluginOptions,
  getPolicyPluginNames,
  getPolicyEnabledPluginIds,
  gracefulShutdown,
  gracefulShutdownSync,
  isShuttingDown,
  DEFAULT_PROACTIVITY_LEVEL,
  isAdvisorToolEnabled,
  baseModelSupportsAdvisor,
  isValidAdvisorModel,
  isAdvisorModelPendingCreditsConsent,
  getAdvisorCreditsNotice,
  isAdvisorCapableForBaseModel,
  getConfiguredAdvisorModel,
  getKeybindingChord,
  getFeedbackDisabledReason,
  isFeedbackCommandEnabled,
  getEnabledModelOptions,
  getDisabledModelOptions,
  buildModelOptionDescriptors,
  createAnthropicClient,
  THIRD_PARTY_PLUGIN_LABEL,
  hasReachedMaxBudget,
  formatMaxBudgetError,
  discoverPluginMcpServers,
  loadPluginMcpServers,
  extractZipFile,
  isSameFile,
  createLiveFileChecker,
  isBareGitRepoLayout,
  MODEL_SELECTOR_SURFACES,
  MAX_SERVED_CATALOG_BYTES,
  isValidEtag,
  ModelSelectorConfigStoredSchema,
  ModelSelectorStateSchema,
  ModelSelectorSurfacesSchema,
  getModelSelectorSurface,
  resolveSkillBucketId,
  SyncOwnedRootRefusedError,
  verifySyncOwnedPath,
  trashDirectory,
  ensureSyncRootReady,
  makeLandingRefusedError,
  createSyncLandingContext,
  LANDING_OK,
  LANDING_ROOT_REFUSED,
  landingExtractFailure,
  landingDownloadFailure,
  LANDING_DEFERRED,
  isDisplaceBlockedErrorCode,
  LANDING_DISPLACE_BLOCKED,
  landingLocalFailure,
  getLandingFailureCode,
  getLandingFailureMessage,
  hasSyncMarker,
  createSyncMarker,
  removeSyncMarker,
  MAX_SYNC_MANIFEST_BYTES,
  toOptionalStringArray,
  mergeKeyedRowsPreferFirst,
  mergeStringListsExcluding,
  parseValidRows,
  mergeRowsTrackingAttribution,
  omitKeys,
  readFileTextOrNull,
  parseJsonWithSchema,
  uniqBy,
  mergeAndUniqByKey,
  computeSkillSyncPlan,
  startPluginSyncIfNeeded,
  getPluginSyncBucketDir,
  ensurePluginSyncBucketRoot,
  prunePluginsForClosedGate,
  completeDeferredPluginRemovals,
  fetchClaudeAiMarketplaceCatalog,
  readClaudeAiCatalogCache,
  writeClaudeAiCatalogCache,
  claudeAiCatalogCacheStore,
  removeClaudeAiCatalogCache,
  loadClaudeAiMarketplace,
  readClaudeAiMarketplaceRegistry,
  ClaudeAiMarketplaceError,
  syncClaudeAiMarketplaceScopes,
  PLUGIN_UPDATE_REFUSED_PREFIX,
  buildServerAttribution,
  getPluginIdHash,
  redactPluginId,
  getPluginScope,
  isOfficialPluginScope,
  buildSkillSourceFields,
  getSkillNameHash,
  buildPluginTelemetryFieldsFromId,
  getServerAttributionFields,
  registerFirstPartyPlugins,
  isMarketplacePluginCommand,
  groupCommandsByRepository,
  emitPluginSessionTelemetry,
  classifyPluginError,
  logPluginLoadFailures,
  computeAutoInstalledOrphans,
  formatOrphanDependenciesNotice,
  countFilesRoundedRg,
  getMarkdownFiles,
  DEFAULT_OUTPUT_STYLE_NAME,
  getConfiguredOutputStyleName,
  filterOutWebFetchAgent,
  findAgentByType,
  getBuiltInAgents,
  agentMcpSpecsToScopedConfigs,
  toAgentInfos,
  isBuiltInAgent,
  rebuildAgentDefinitions,
  getAgentDefinitionsWithOverrides,
  parseAgentsFromJson,
  validateAgentsJson,
  getSkillListingCharBudget,
  hasImageContent,
  createCommandQueue,
  installCommandQueue,
  getCommandQueueInstance,
  takePendingPromptSubmit,
  getDecisionReasonText,
  settingsChangeDetector,
  checkPathPermission,
  getProactivityAdjustedPermissionMode,
  probeQuotaStatusWithSmallModel,
  classifyStatusCodeError,
  isObserverAgent,
  isLocalAgentOrWorkflow,
  isLiveBackgroundTask,
  isAmbientTask,
  isSkillOff,
  PERMISSION_PROMPTS_NONE,
  isPermissionPromptsDisabled,
  resolvePermissionPromptTarget,
  refreshSkillsSyncEnabled,
  isSkillsSyncTierInPlay,
  isSkillsSyncPolicyVerdictPending,
  isSkillsSyncDisabledBySettings,
  skillEntrySchema,
  skillsSyncManifestSchema,
  flushPendingBackgroundWork,
  validateRestrictedPermissionMode,
  isVscodeTerminal,
  isSupportedIdeTerminal,
  shouldAutoConnectIde,
  findIdeLockfiles,
  isCursorInstalled,
  isWindsurfInstalled,
  isVscodeInstalled,
  getRunningIdes,
  readPluginLspConfig,
  initializeLspServerManager,
  fileHistoryEnabled,
  getOrphanedVersionGlobExclusions,
  setSessionCwd,
  getMemoryScopeForPath,
  getRunningTasks,
  isSelfHostedPoolId,
  findLastNonSyntheticAssistantMessage,
  resolvePromptSource,
  createHookAdditionalContext,
  hasPluginHooksChanged,
  runUserPromptSubmitHooks,
  getPromptScreenSnapshot,
  didPromptScreenChange,
  createDisposableSubmission,
  runPromptSubmitPipeline,
  isAutoCompactEnabled,
  resolveAutoCompactWindow,
  discardPrecomputedCompact,
  nKe,
  getActiveModelForState,
  takePendingModelSwitch,
  runPostModelSwitchHooks,
  prefetchMemoryContext,
  getImageLimitsForModel,
  recordQueryProfileMark,
  clearGoalIdleCheckinCount,
  isNegativePrompt,
  isKeepGoingPrompt,
  isWakeupPrompt,
  notifyAutoReactHumanTurnObserver,
  runAgentTurn,
  collectAsyncIterable,
  skillsChangedEmitter,
  takePendingHookSessionTitle,
  runSessionStartHooks,
  runSetupHooks,
  describeBundleFailure,
  downloadSessionFiles,
  parseFileIdSpecs,
  describeUnboundReason,
  isRetryableMcpFailure,
  isMcpServerScopedName,
  isToolFromMcpServer,
  removeMcpServerCommands,
  omitKey,
  getMcpServerApprovalStatus,
  parsePRReference,
  isTmuxAvailable,
  getTmuxInstallInstructions,
  serializeCompactMetadata,
  createLocalCommandOutputMessage,
  serializeModelConsentFallbackMessage,
  createToolUseSummaryMessage,
  hasDisplayableContent,
  buildResultDiagnostics,
  resolveAutoCompactWindowSetting,
  emitAutoReactStopNotification,
  drainAutoReactNotifications,
  checkUnseenTeamArtifacts,
  getUnseenTeamArtifacts,
  markTeamArtifactsSeen,
  logTeamArtifactTipShown,
  formatTeamArtifactTip,
  findClosestName,
  stripDangerousPermissionsForAutoMode,
  transitionPermissionMode,
  initialPermissionModeFromCLI,
  initializeToolPermissionContext,
  settleProvisionalStartupMode,
  isAutoModeGateEnabled,
  isDefaultPermissionModeAuto,
  activatePlanAutoMode,
  backgroundAllForegroundTasks,
  backgroundTaskByToolUseId,
  withDisallowedToolsDenyRules,
  getSubagentStats,
  getSkillsSyncState,
  shouldSyncSkills,
  registerPendingSkillDownload,
  awaitPendingSkillDownload,
  addSkillPlaceholder,
  removeSkillPlaceholder,
  pruneStaleSkillEntries,
  getSkillInvocationBlockReason,
  stopTask,
  stopAllRunningTasks,
  stopAllObserverTasks,
  applyHookSessionTitle,
  executeUserPromptSubmitHooks,
  isDiscoveryCacheEnabled,
  enableWizardOperatorTools,
  getBuiltinToolsForContext,
  createSkillCommand,
  invalidateSkillDirCaches,
  pruneStaleSyncedSkills,
  getConditionalSkills,
  replaceLastTextBlock,
  enableAllHookEvents,
  hasUltraplanMention,
  stripUltraplanKeyword,
  getAttachmentMessages,
  createAttachmentMessage,
  refreshPluginState,
  sweepOrphanedPluginVersions,
  getKnownMarketplacesOrEmpty,
  loadCachedMarketplaceCatalog,
  findPluginEntry,
  getInstalledPluginsViaStorage,
  readInstalledPluginsFile,
  readInstalledPluginsViaStorage,
  initializePluginsSystem,
  isPluginInstalledInCurrentScope,
  pruneOrphanedAutoDeps,
  isPluginInstalledOnDisk,
  loadAllPlugins,
  shouldFillPluginLoadWithStore,
  loadAllPluginsCacheOnly,
  clearPluginCache,
  refillPluginLoadCacheOnly,
  flushPendingCrossOrgNotice,
  getClaudeAiConfigsFetch,
  resetClaudeAiConfigsFetch,
  clearClaudeAiConnectedThisSession,
  getMcpServerSignature,
  suppressedConnectorsEqual,
  dedupClaudeAiMcpServers,
  isMcpServerDenied,
  filterMcpServersByPolicy,
  mcpDialBlockCause,
  filterDynamicMcpServersByPolicy,
  MCP_SETTINGS_SCOPES,
  getMcpConfigsByScope,
  getClaudeCodeMcpConfigs,
  consumeBridgeMcpCarrierMarker,
  verifyBridgeCarrierPrompt,
  parseMcpConfig,
  parseMcpConfigFromFilePath,
  doesEnterpriseMcpConfigExist,
  headlessSyncsClaudeAiConnectors,
  areMcpConfigsAllSdkType,
  areMcpConfigsAllowedWithEnterpriseMcpConfig,
  isMcpServerDisabled,
  isClaudeInChromeAllowed,
  shouldEnableClaudeInChrome,
  shouldAutoEnableClaudeInChrome,
  markClaudeInChromeUnwired,
  getClaudeInChromeMcpServerConfig,
  setupClaudeInChrome,
  NO_CONTENT_MESSAGE_TEXTS,
  contentHasToolResult,
  createUserMessage,
  prepareApiMessages,
  getMessageContentText,
  estimateTokensFromCharCount,
  estimateTokensFromText,
  isPingEvent,
  createSystemInfoMessage,
  isCompactBoundaryMessage,
  findLastCompactBoundaryIndex,
  applyOriginPrefixToMessage,
  sessionIdExists,
  isTranscriptPersistenceDisabled,
  isCustomTitleEnabled,
  recordQueueOperation,
  saveAiGeneratedTitle,
  isBridgeBindingForeign,
  isCompactPairWithheldFromRemote,
  getCurrentSessionAgentColor,
  saveAgentSetting,
  cacheSessionTitle,
  cacheAgentName,
  titleCacheStillOn,
  cacheHookSessionTitle,
  loadAllSubagentTranscriptsFromDisk,
  __n,
  executeStopHooks,
  MANAGED_HOOKS_TIER,
  getStopHookMessage,
  getUserPromptSubmitHookBlockingMessage,
  hasBlockingResult,
  clearCurrentSessionMemoryFiles,
  getSystemContext,
  getUserContext,
  isDesktopCommandEnabled,
  hasExplicitVoiceSetting,
  isVoiceModeAvailable,
  isUltraplanEnabled,
  formatCurrencyAmount,
  getCachedPassesEligibility,
  formatRewardAmount,
  getCachedReferrerReward,
  prefetchPassesEligibility,
  isFirstPartyApiCustomer,
  warmCommandSourceCaches,
  getCommands,
  clearCommandMemoizationCaches,
  isSkillToolCommand,
  toSlashCommands,
  OUTPUT_STYLE_SECTION_NAME,
  logInitialContextSize,
  getModelConfig,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isViolinWoodEnabled, isViolinWoodEnabledCached } from "../目录同步-dir-sync/chunk-97crm80y.js";
import { areBackgroundTasksDisabled } from "../../01-核心基础设施/核心工具-未归类/host-capability-state.js";
import { SHELL_TOOL_NAMES, formatUnsatisfiableSchemaReason, STRUCTURED_OUTPUT_TOOL_NAME, isStructuredOutputSession, buildStructuredOutputToolFromSchema } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { ZERO_USAGE_TOTALS, normalizeRequestIdFields, sanitizeForRelay, isHumanOrigin } from "../远程控制-Bridge/chunk-5ne99rq3.js";
import { isBridgeEnabled, isRemoteControlOfferable, isRunningInRemoteEnvironment, isBridgeStateFramesEnabled, isBridgePartialMessagesEnabled } from "../远程控制-Bridge/chunk-9estzwf5.js";
import {
  claudeDownloadsHttpClient,
  OFFICIAL_MARKETPLACE_NAME,
  isPluginsRootUnreliable,
  LINK_MODE_WINDOWS_UNSUPPORTED_MESSAGE,
  getSourceCommandKey,
  describeSourceMode,
  PluginSourceError,
  getCommandSource,
  describePluginFailure,
  getSyncFailureTelemetry,
  refreshPluginsSyncEnabled,
  isAccountPluginsSyncFlagEnabled,
  isPluginSyncPolicyVerdictPending,
  isPluginsSyncTierInPlay,
  isSessionRefsSyncEnabled,
  sessionRefsManifestStore,
} from "../插件系统/chunk-ajtn749s.js";
import { isPluginBlockedByPolicy, getStrictKnownMarketplaces, areSideloadFlagsDisabledByPolicy, areCommandPluginSourcesDisabledByPolicy, COMMAND_PLUGIN_SOURCES_DISABLED_MESSAGE, sideloadFlagsBlockedMessage, isSourceDisallowedOrUnverifiable, getPluginSuggestionMarketplaces, isMarketplaceSourceDeclaredByPolicy } from "../插件系统/plugin-source-policy.js";
import { isCustomizationDisabled } from "../状态栏-主题/chunk-dqyc6kge.js";
import { redactPromptUnlessEnabled, emitOtelEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/otel-events.js";
import { filterPolicyPredicateEnv, applyConfigEnvironmentVariables } from "../../01-核心基础设施/遥测-OpenTelemetry/settings-env-application.js";
import { claimSessionNameAtStartup } from "../跨会话消息-UDS/chunk-9kzxq41e.js";
import {
  defaultFullscreenState,
  getTuiTrialState,
  getTuiTrialMode,
  wasFullscreenAutoDisabledForVersion,
  MAX_FULLSCREEN_UPSELL_COUNT,
  shouldUseFullscreen,
  getFullscreenReason,
  fullscreenReasonToMode,
  isAutoDisabledFullscreenReason,
  getNoFlickerEnvOverride,
} from "../终端环境探测-TUI-tmux/终端环境探测-TUI-tmux.5pkb0sjc.js";
import { isArtifactToolEnabled, isPublishToolEnabled } from "../制品发布-Artifact/chunk-01ymf0ar.js";
import { isAgentSwarmsEnabled } from "../Teammates团队/agent-swarms-enablement.js";
import { setMcpClientOnClose } from "../MCP客户端/chunk-7wm8t84g.js";
import { getTeamFilePath, readTeamFileAsync } from "../Teammates团队/team-file-store.js";
import { USER_INTENT_SETTING_KEYS, resolveSetting, saveUserIntentSetting } from "../上下文压缩-Compact/resolve-user-intent-setting.js";
import { notifyRoomConsentChanged } from "../制品发布-Artifact/chunk-rr78st95.js";
import { isPushNotificationsEnabled } from "../远程控制-Bridge/push-notification-tool.js";
import { WORKFLOW_TOOL_NAME } from "../编排-Workflow/chunk-7fcxwgtq.js";
import { isKairosCronEnabled } from "../定时任务-Cron/chunk-mk3zm4ew.js";
import { recordStartupPhase, consumeStartupTiming } from "../../01-核心基础设施/遥测-OpenTelemetry/startup-timing-telemetry.js";
import { reportBridgePermissionMode, reportBridgeModel } from "../权限系统/chunk-1y2g140m.js";
import { AsyncQueue } from "../会话-历史-恢复/chunk-m1xj4s02.js";
import { getOwnJobShortId, writeStateAtomic, logJobWriteError, readJobState, syncRespawnFlag } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import { cliCarriesSessionConfig, cliCarriesForkRestrictedConfig } from "../权限系统/fork-restricted-launch-flags.js";
import { keybindingStore, loadKeybindingsFromConfigFile, getKeybindingDisplayText } from "../键位绑定-Keybindings/键位绑定-Keybindings.sanfja6a.js";
import { isWorktreeModeEnabled } from "../../01-核心基础设施/核心工具-未归类/chunk-1kh149yd.js";
import { collectContextData } from "../上下文压缩-Compact/context-usage.js";
import { parseWatchArtifactTarget, setStartupWatchTarget } from "../制品发布-Artifact/chunk-p1dkvpxj.js";
import { killAutoReactSubscriptions } from "../制品发布-Artifact/chunk-kshc4v5t.js";
import { Zd } from "../../00-第三方库/_未识别/chunk-hm8z9h7j.js";
import { generateSessionTitle } from "../会话-历史-恢复/session-title.js";
import { filterCollection, FleetNudgeStore } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import { useAppState } from "../../01-核心基础设施/核心工具-未归类/app-state-context.js";
import { recheckAutoResume } from "../状态管理-AppState/状态管理-AppState.wyzjbwp5.js";
import { captureAdmin3PSteeringSnapshot } from "../模型接入-Bedrock-Vertex/apply-3p-default-fallbacks.js";
import { publishAdditionalWorkingDirectories } from "../../01-核心基础设施/核心工具-未归类/additional-working-directories.js";
import { POLICY_LIMITS_COLD_AWAIT_MS, shouldAwaitPolicyLimitsOnStartup, recordPolicyLimitsStartupAwaitResult, waitForPolicyLimitsToLoad } from "../策略限制-PolicyLimits/policy-limits-client.js";
import { awaitRemoteSettingsLoaded, awaitRemoteSettingsFetchSettled, isRemoteSettingsFetchPending, shouldAwaitRemoteSettingsConfirmation } from "../../01-核心基础设施/设置-配置/remote-managed-settings.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/核心工具-未归类/storage-v5-context.js";
import { REFUSE_INPUT_WINDOW_MS } from "../../01-核心基础设施/核心工具-未归类/recent-window.js";
import { Box, Text, Link, useIsScreenReaderEnabled } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { seedEarlyInput } from "../../01-核心基础设施/核心工具-未归类/early-input-capture.js";
import { useIsMountRecent, useSettleAfterChange, useRefusedInputWindow, NO_COMMITTED_ROW, Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { shouldOfferTerminalSetup } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { DotSeparatedList } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import { lE } from "../../01-核心基础设施/UI组件-TUI/chunk-dhg42t8r.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { flushAnalyticsSinks } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-p7jm635c.js";
import {
  refreshMarketplaceForScopedInstall,
  getProjectPathForScope,
  isSadFailureCode,
  isPluginInstalledAndSatisfied,
  installPlugin,
  uninstallPlugin,
  disablePlugin,
  disableAllPlugins,
  updatePlugin,
  buildEntryHelperRequest,
  formatHeadersHelperWarning,
  findPluginEntryAcrossMarketplaces,
  validateDeepLinkCwd,
  parseDeepLinkQuery,
} from "../插件系统/chunk-q8w2zntw.js";
import { registerBuiltinPlugins, registerAllBundledSkills } from "../Skills技能/Skills技能.dpy2ket5.js";
import { publishPermissionSnapshot } from "../../01-核心基础设施/核心工具-未归类/publish-permission-snapshot.js";
import { applyInheritPermissionMode } from "../权限系统/inherit-permission-mode-flag.js";
import { printCliError, cliError, cliWarn, exitAfterAnalyticsFlush, cliErrorAfterAnalyticsFlush } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-4f55jpqh.js";
import { bootstrapFetchCanConvergeSlot, fetchBootstrapData } from "../上下文压缩-Compact/chunk-npckj9cm.js";
import { loadUltrareviewQuota, getUltrareviewQuota, getTipLifetimeShownCount, getSessionsSinceTipShown, isUltrareviewAwarenessEnabled, hasRunUltrareview, formatFreeReviewsLeft } from "../代码审查/ultrareview-tips.js";
import { CLAUDE_AGENT } from "../../01-核心基础设施/核心工具-未归类/chunk-kyy28ene.js";
import { enforceMinimumVersion } from "../自动更新-安装/auto-updater.js";
import { applyAgentFrontmatterHooks, adoptResumedSessionId, isModelExplicitlyConfigured } from "../会话-历史-恢复/resume-session-state.js";
import { githubConnectionStatusStore } from "../隐私设置-Grove/chunk-a4mdm49v.js";
import { isWebSetupEnabled } from "../斜杠命令-框架/chunk-a4vej95c.js";
import { resolvePromptCommandFromUri, setAlwaysDenyCommands, parseSlashCommandInput, resolveSubcommandTarget, getActiveFotwCampaign, hasClaimableFotwCredit, isFotwUpsellPending, getFotwCreditAmount } from "../用量额度-限额/chunk-1bfn62xh.js";
import { shouldExcludeDefaultTips, getOverrideSpinnerTips } from "../../01-核心基础设施/设置-配置/spinner-tips-override.js";
import { storeImageBatchToCache, getPublishedCatalogFloorVersion, recordPublishedCatalogFloorVersion } from "../../01-核心基础设施/设置-配置/chunk-xy3cbvd8.js";
import { skillChangeDetector } from "../文件监听-Watch/skill-change-detector.js";
import { getIdentityEpoch, isCurrentIdentityEpoch, isRemoteTransportWithStaleIdentity } from "../MCP客户端/mcp-discovery-cache.js";
import { hasNonEmptyArrayValues, isRestrictiveAgentDefinition, JSON_SCHEMA_UNSUPPORTED_REASON } from "../权限系统/chunk-z0pt04s8.js";
import { canCycleToAuto, canUseBypassPermissions } from "../权限系统/permission-mode-cycle.js";
import { getCloudFlagConflictError, isHeadlessCloudRun, truncateAndEscapeValue } from "../../03-入口与运行时/Headless-SDK模式/cloud-flag-validation.js";
import { ActionKeybindingHint } from "../键位绑定-Keybindings/action-keybinding-hint.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { formatHyperlink } from "../../01-核心基础设施/核心工具-字符串与文本/format-hyperlink.js";
import { getDisusedPlugins } from "../插件系统/plugin-disuse.js";
import { getThemeColor } from "../../01-核心基础设施/UI组件-TUI/theme-color.js";
import { getBlockedServerErrorFields } from "../MCP客户端/mcp-server-state-messages.js";
import { isComputerUseEnabled } from "../图片-截图-ComputerUse/computer-use-config.js";
import { isOnboardingGuideSharingEnabled } from "../Teammates团队/onboarding-guide-api.js";
import { isAgentsViewAvailable } from "../后台任务-Shell管理/chunk-531ast3t.js";
import { getNonOpenedFrameUrlEntries } from "../../01-核心基础设施/核心工具-未归类/frame-url-prefixes.js";
import { reportSessionEffort } from "../远程控制-Bridge/bridge-effort-sync.js";
import { getCooContextProperties } from "../../01-核心基础设施/核心工具-未归类/coo-context-properties.js";
import { isDesignSyncEnabled } from "../设计同步/design-feature-gates.js";
import { flushPendingScopeExpansionNotice } from "../设计同步/chunk-jhs1bd0k.js";
import { logShellAllowRulesAtInit } from "../../01-核心基础设施/设置-配置/shell-allow-rule-analytics.js";
import { re, E, C, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { fetchOrgSkills, downloadSkillArchive } from "../Skills技能/org-skills-sync.js";
import { hasActiveAgentTask, figures, isWorkflowSizeGuidelineConfigured, resolveWorkflowSizeGuideline } from "../Teammates团队/chunk-mrfx53ye.js";
import { isProjectSkillsDirPlugin, splitPluginId, getPluginMarketplace, parsePluginIdIgnoringReservedMarketplace } from "../插件系统/chunk-33bdfgmx.js";
import { isMcpSkillsEnabled } from "../MCP客户端/mcp-skills-extension.js";
import { IMAGE_SOURCE_PLACEHOLDER_PREFIX, buildImageBlock, reprocessImageBlock, formatImageDisplayAnnotation } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { getMcpConnectTimeoutMs } from "../MCP客户端/mcp-timeouts.js";
import { CODE_REVIEW_SKILL_NAME, LOOP_SKILL_NAME } from "../Skills技能/bundled-skill-names.js";
import { isCoordinatorModeEnabled } from "../../01-核心基础设施/核心工具-未归类/coordinator-mode.js";
import { escapeSingleLineText } from "../../01-核心基础设施/核心工具-未归类/chunk-339z9efw.js";
import { isRemoteSettingsEligible } from "../../01-核心基础设施/设置-配置/remote-settings-eligibility.js";
import { areBundledSkillsDisabled } from "../Skills技能/disable-bundled-skills.js";
import { createFieldUpdater } from "../../01-核心基础设施/文件存储-原子写入/state-store.js";
import { isBypassPermissionsModeDisabled } from "../权限系统/bypass-permissions-mode-policy.js";
import { AGENT_TOOL_NAME, TASK_TOOL_NAME } from "../工具Task-Agent调度/agent-tool-constants.js";
import { REMOTE_CONTROL_DISABLED_BY_POLICY_MESSAGE } from "../远程控制-Bridge/remote-control-policy-messages.js";
import { pg } from "../../00-第三方库/semver/chunk-jm5cswvd.js";
import { CLAUDE_IN_CHROME_MCP_SERVER_NAME } from "../浏览器集成-ClaudeinChrome/claude-in-chrome-mcp-constants.js";
import { isProcessRunning } from "../守护服务-Daemon/process-record.js";
import { getFirstPositionalArg } from "../上下文压缩-Compact/cli-args.js";
import { readFileWithMetadata } from "../../01-核心基础设施/安全文件系统-FS加固/safe-file-read.js";
import { s, T, se, v, c, it, fe, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getGitProvider } from "../../01-核心基础设施/核心工具-路径与平台/git-remote-url.js";
import { DEFAULT_MAX_PAGES, runPaginatedScan } from "../../01-核心基础设施/核心工具-其他/paginated-scan.js";
import { formatFileSize } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-7axvc6rn.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { resolveConfigPaths, buildDispatchArgs } from "../../03-入口与运行时/CLI入口-Commander/cli-arg-parsing.js";
import { countMatching, dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { toESM, MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
import { constants } from "fs";
import {
  lstat as Mg,
  open as Tg,
  readlink,
  realpath as tc,
} from "fs/promises";
function validateUntrustedPath(w, I, O) {
  let U = w.trim(),
    V = U === I ? [I] : [U, I];
  for (let ne of V) {
    let me = Da(ne, O);
    if (me !== void 0) return { ok: !1, reason: me };
  }
  let te = expandPathAliases(I);
  for (let ne of te) {
    let me = Da(ne, O);
    if (me !== void 0) return { ok: !1, reason: me };
  }
  return { ok: !0, pathsToCheck: te };
}
function getUntrustedPathReason(w, I) {
  return Da(w, I);
}
function Da(w, I) {
  if (gp(w)) return "nt_namespace";
  if (isUntrustedUncPath(w, I)) return "untrusted_unc";
  if (isUntrustedAutomountPath(w, I)) return "untrusted_automount";
  if (hasSuspiciousWindowsPathPattern(w, I)) return "suspicious_windows_spelling";
  return;
}
var Dg = 1e6,
  REMOTE_READ_OPEN_FLAGS = constants.O_RDONLY | (constants.O_NONBLOCK ?? 0) | (constants.O_NOCTTY ?? 0),
  nc = { realpath: tc, lstat: Mg, readlink: readlink },
  REMOTE_READ_MAX_BYTES = 1e7,
  Og = new j(() => ({ promise: void 0 }));
function Fg() {
  let w = bi(Og);
  return (
    (w.promise ??= Promise.all([
      import("../计划模式-Plan/计划模式-Plan.e5mh1avy.js"),
      import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
    ])
      .then(([I, O]) => [
        I.DEFAULT_STAGE_FILE_ROOT,
        I.DEFAULT_OUTPUTS_ROOT,
        O.SYNCED_FILE_ROOT,
      ])
      .catch((I) => {
        throw ((w.promise = void 0), I);
      })),
    w.promise
  );
}
async function bindCanonicalPathToHandle(w, I, O, U = nc) {
  let V;
  try {
    V = await U.lstat(O, { bigint: !0 });
  } catch {
    return;
  }
  if (V.dev !== I.dev || V.ino !== I.ino) return;
  try {
    if ((await U.realpath(O)) !== O) return;
  } catch {
    return;
  }
  return O;
}
function Lg(w, I) {
  if (!I || I.size === 0) return !1;
  for (let O of I.values()) if (O.includes(w)) return !0;
  return !1;
}
async function isCanonicalPathContained(w, I) {
  let O = [];
  try {
    O = await Fg();
  } catch {}
  for (let U of allWorkingDirectories(I)) {
    if (
      I.additionalWorkingDirectories.has(U) &&
      !Lg(U, I.trustedNetworkDirectories) &&
      (await hasUnverifiableAncestryWithAnchor(U, wz()))
    )
      continue;
    let V;
    try {
      V = await tc(U);
    } catch {
      continue;
    }
    if (Uxe(U, V, wz())) continue;
    if (pathInWorkingPath(w, V, { caseFold: !1, skipPrivateAlias: !0, uncShapeParity: !0 }))
      return !0;
  }
  for (let U of O)
    if (pathInWorkingPath(w, U, { caseFold: !1, skipPrivateAlias: !0, uncShapeParity: !0 }))
      return !0;
  return checkReadableInternalPath(w, {}, [w], { remoteSurface: !0 }).behavior === "allow";
}
var Ug = {
  nt_namespace:
    "read_file: NT-namespace path rejected before filesystem access",
  untrusted_unc:
    "read_file: untrusted UNC path rejected before filesystem access",
  untrusted_automount:
    "read_file: automount path rejected before filesystem access",
  suspicious_windows_spelling:
    "read_file: suspicious Windows path spelling rejected",
};
function lr(w, I = "remote read denied") {
  return new mi(`read denied: ${sanitizeForRelay(w)}`, I);
}
async function readHandleBounded(w, I, O) {
  let U = I + 1,
    V = Buffer.alloc(
      O === void 0 ? U : Math.min(Math.max(Number(O) + 1, 1), U),
    ),
    te = 0;
  while (te < U) {
    if (te === V.length) {
      let me = Buffer.alloc(U);
      (V.copy(me), (V = me));
    }
    let { bytesRead: ne } = await w.read(V, te, V.length - te, te);
    if (ne === 0) break;
    te += ne;
  }
  return { bytes: V.subarray(0, Math.min(te, I)), overLimit: te > I };
}
async function readFileForRemote(w, I, O, U = "utf-8", V, te = nc) {
  let ne = Math.min(I && I > 0 ? I : Dg, REMOTE_READ_MAX_BYTES);
  try {
    let me = resolvePath(w),
      Me = validateUntrustedPath(w, me, O.trustedNetworkDirectories);
    if (!Me.ok) throw lr(w, Ug[Me.reason]);
    for (let Oe of Me.pathsToCheck)
      if (!checkPathPermission(Oe, O, "read").allowed || matchingRuleForInput(Oe, O, "read", "ask") !== null)
        throw lr(w);
    let Se = await Tg(me, REMOTE_READ_OPEN_FLAGS),
      xe,
      De;
    try {
      let Oe = await Se.stat({ bigint: !0 });
      if (!Oe.isFile()) throw lr(w);
      let Ae;
      try {
        Ae = await te.realpath(me);
      } catch {
        throw lr(w);
      }
      let $e = await bindCanonicalPathToHandle(Se, Oe, Ae, te);
      if ($e === void 0) throw lr(w);
      if (
        ((Ae = $e),
        !checkPathPermission(Ae, O, "read").allowed || matchingRuleForInput(Ae, O, "read", "ask") !== null)
      )
        throw lr(w);
      if (getUntrustedPathReason(Ae, O.trustedNetworkDirectories) !== void 0) throw lr(w);
      if (!(await isCanonicalPathContained(Ae, O))) throw lr(w);
      let We = await readHandleBounded(Se, ne, Oe.size);
      ((De = We.overLimit), (xe = We.bytes));
    } finally {
      await Se.close();
    }
    if (V)
      logEvent("tengu_bridge_read_file_served", {
        success: !0,
        source: fromEnum(V),
        size_bytes: xe.length,
        requested_max_bytes: ne,
        truncated: De,
        ext: getFileExtension(me),
      });
    return {
      contents: xe.toString(U === "base64" ? "base64" : "utf-8"),
      absPath: me,
      ...(De && { truncated: De }),
      ...(U === "base64" && { encoding: U }),
    };
  } catch (me) {
    try {
      let Me =
        me instanceof Error
          ? "code" in me && typeof me.code === "string"
            ? `${me.name}/${me.code}`
            : me.name
          : typeof me;
      logForDebugging(`readFileForRemote failed pre-deny: ${Me}`, { level: "error" });
    } catch {}
    try {
      if (V) logEvent("tengu_bridge_read_file_served", { success: !1, source: fromEnum(V) });
    } catch {}
    if (me instanceof R && me.message.startsWith("read denied: ")) throw me;
    throw lr(w);
  }
}
F();
import { randomUUID as My } from "crypto";
import { readFile as Ay, stat as Ty } from "fs/promises";
import { randomUUID as Ng } from "crypto";
function applyUsageToResultMessage(w, I) {
  if (w.type !== "result") return w;
  let O = I.subagentStats !== void 0 ? { subagent_stats: I.subagentStats } : {};
  if (w.total_cost_usd !== void 0 && I.totalCostUsd < w.total_cost_usd)
    return { ...w, ...O };
  return {
    ...w,
    total_cost_usd: I.totalCostUsd,
    duration_api_ms:
      w.duration_api_ms === 0 ? w.duration_api_ms : I.durationApiMs,
    modelUsage: I.modelUsage,
    ...(I.usage !== void 0 && { usage: I.usage }),
    ...O,
  };
}
function buildResultMessage({ startedAt: w, common: I, variant: O }) {
  let U = {
    type: "result",
    duration_ms: Math.max(0, Math.round(performance.now() - w)),
    uuid: Ng(),
  };
  return { ...I, ...O, ...U };
}
import { randomBytes } from "crypto";
import { createWriteStream } from "fs";
import { mkdir as Zg, rm as ty } from "fs/promises";
import { join as lc } from "path";
class La {
  chunks = [];
  static encoder = new TextEncoder();
  push(w) {
    if (w.length > 0) this.chunks.push(La.encoder.encode(w));
  }
  toBuffer() {
    return Buffer.concat(this.chunks);
  }
}
function serializeFeedbackPayload(w, I, O, U) {
  let V = new La(),
    te = (Se) => {
      if (Se.length > 0) V.push(jsonStringify(Se).slice(1, -1));
    };
  (V.push('{"content":"'), te("{"));
  let ne = !0,
    me = (Se) => {
      if (!ne) te(",");
      ((ne = !1), te(jsonStringify(Se) + ":"));
    };
  for (let [Se, xe] of Object.entries(w)) {
    if (xe === void 0) continue;
    if (I.has(Se) && Array.isArray(xe)) {
      (me(Se), te("["));
      for (let De = 0; De < xe.length; De++) {
        if (De > 0) te(",");
        te(jsonStringify(xe[De]));
      }
      te("]");
    } else if (O.has(Se) && xe !== null && typeof xe === "object") {
      (me(Se), te("{"));
      let De = Object.entries(xe);
      for (let Oe = 0; Oe < De.length; Oe++) {
        let [Ae, $e] = De[Oe] ?? ["", void 0];
        if (Oe > 0) te(",");
        if ((te(jsonStringify(Ae) + ":["), Array.isArray($e)))
          for (let We = 0; We < $e.length; We++) {
            if (We > 0) te(",");
            te(jsonStringify($e[We]));
          }
        te("]");
      }
      te("}");
    } else (me(Se), te(jsonStringify(xe)));
  }
  (te("}"), V.push('"'));
  let Me = U?.extraOuterFields;
  if (Me) for (let [Se, xe] of Object.entries(Me)) V.push(`,${jsonStringify(Se)}:${jsonStringify(xe)}`);
  return (V.push("}"), V.toBuffer());
}
import { readdir as jg, stat as Hg } from "fs/promises";
import { basename as Na, dirname as $a, join as Gg } from "path";
var $g = [
  "msg_bdrk_",
  "msg_vrtx_",
  "bolt-inf-",
  "toolu_bdrk_",
  "toolu_vrtx_",
  "srvtoolu_bdrk_",
  "srvtoolu_vrtx_",
  "req_bdrk_",
  "req_vrtx_",
];
function hasThirdPartyTranscriptMarkers(w) {
  return $g.some((I) => w.includes(I));
}
function anyTranscriptEntryHasThirdPartyMarkers(w) {
  return w.some((I) => {
    try {
      return hasThirdPartyTranscriptMarkers(jsonStringify(I));
    } catch {
      return !0;
    }
  });
}
var oc = { day: 86400000, week: 604800000 },
  wi = 1048576;
async function Kg(
  {
    transcriptPath: w,
    scope: I = "session",
    maxRawTranscriptBytes: O,
    excludeThirdPartyTranscripts: U = !1,
  },
  V,
) {
  let [te, ne] = await Promise.all([readRecentTranscriptTail(w, O, V), qg(w, I, U, V)]),
    me = te,
    Me = !1;
  if (U && me !== null && hasThirdPartyTranscriptMarkers(me))
    ((me = null),
      (Me = !0),
      logForDebugging(
        "rawTranscriptJsonl withheld from session history: contains_3p_transcript_markers",
      ));
  return {
    rawTranscriptJsonl: me,
    recentSessionTranscripts: ne.transcripts,
    thirdPartyExclusions: {
      rawTranscript: Me,
      recentSessions: ne.droppedThirdParty,
    },
  };
}
async function rc(
  {
    messages: w,
    backgroundTasks: I = {},
    transcripts: O = {},
    diskSubagentTranscripts: U,
    scope: V = "session",
    maxRawTranscriptBytes: te,
    excludeThirdPartyTranscripts: ne = !1,
  },
  me,
) {
  let Me = getSessionTranscriptPath(),
    Se = isRemoteActive(),
    [xe, De, Oe, Ae] = await Promise.all([
      U,
      Kg(
        {
          transcriptPath: Me,
          scope: Se ? "session" : V,
          maxRawTranscriptBytes: te,
          excludeThirdPartyTranscripts: ne,
        },
        me,
      ),
      Se ? !1 : getIsGit(),
      Se ? "" : getHead(),
    ]),
    $e = collectInProcessTeammateMessages(I, O),
    We = { ...xe, ...$e },
    Ye = new Set(Object.keys($e)),
    Ze = 0;
  if (ne) {
    for (let [at, zt] of Object.entries(We))
      if (anyTranscriptEntryHasThirdPartyMarkers(zt))
        (delete We[at],
          Ze++,
          logForDebugging(
            `subagent transcript ${at} withheld: contains_3p_transcript_markers`,
          ));
  }
  let Nt = findLastNonSyntheticAssistantMessage(w);
  return {
    transcriptPath: Me,
    rawTranscriptJsonl: De.rawTranscriptJsonl,
    recentSessionTranscripts: De.recentSessionTranscripts,
    subagentTranscripts: We,
    teammateIds: Ye,
    isGit: Oe,
    commitSha: Ae || null,
    remoteWorkspace: Se,
    remoteSessionId: Se ? (getRemoteTransport()?.sessionId ?? null) : null,
    workingDirectory: he(),
    platform: a.platform,
    terminal: a.terminal,
    version: {
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
    latestAssistantMessageId: Nt?.requestId ?? null,
    latestAssistantAPIMessageId: Nt?.message.id ?? null,
    thirdPartyExclusions: { ...De.thirdPartyExclusions, subagents: Ze },
  };
}
async function readRecentTranscriptTail(w, I, O) {
  if (I === void 0) return null;
  if (O !== void 0) {
    let U = ac(w);
    if (U !== void 0) return Wg(O, U, I);
  }
  try {
    let { content: U, bytesRead: V, bytesTotal: te } = await readTailBytes(w, I),
      ne = U;
    if (V < te) {
      let me = U.indexOf(`
`);
      ne = me >= 0 ? U.slice(me + 1) : "";
    }
    return ne.trim().length > 0 ? ne : null;
  } catch {
    return null;
  }
}
async function Wg(w, I, O) {
  let U = await w.readRecords(I, { order: "backward", maxBytes: O });
  if (!U.ok) return null;
  let V = U.value.items,
    te = V.reduce((Me, Se) => Me + Se.data.byteLength, 0),
    ne = V.length;
  if (U.value.nextSeq !== void 0 || te > O) {
    ne = 0;
    let Me = 0;
    for (let Se of V) {
      if (((Me += Se.data.byteLength), Me >= O)) break;
      ne += 1;
    }
  }
  let me = Buffer.concat(
    V.slice(0, ne)
      .reverse()
      .map((Me) => Me.data),
  ).toString("utf8");
  return me.trim().length > 0 ? me : null;
}
function ac(w) {
  if (!w.endsWith(".jsonl")) return;
  let I = $a(w),
    O = Na(I),
    U = Na(w).slice(0, -6);
  if ($a(I) !== getProjectsDir() || !isValidPathSegment(O) || !isValidPathSegment(U)) return;
  let V = STORAGE_KEYS.transcript(O, U);
  return V.namespace === "transcript" && validateStorageKey(V) === void 0 ? V : void 0;
}
async function qg(w, I, O, U) {
  if (I === "session") return { transcripts: void 0, droppedThirdParty: 0 };
  if (U !== void 0) {
    let Oe = ac(w);
    if (Oe !== void 0) return Yg(U, Oe, I, O);
  }
  let V = $a(w),
    te = Na(w),
    ne = Date.now() - oc[I],
    me;
  try {
    me = await jg(V);
  } catch {
    return { transcripts: void 0, droppedThirdParty: 0 };
  }
  let Me = [];
  (await Promise.all(
    me
      .filter((Oe) => Oe.endsWith(".jsonl") && Oe !== te)
      .map(async (Oe) => {
        let Ae = Gg(V, Oe);
        try {
          let $e = await Hg(Ae);
          if ($e.isFile() && $e.mtimeMs >= ne)
            Me.push({
              path: Ae,
              sessionId: Oe.slice(0, -6),
              mtimeMs: $e.mtimeMs,
              size: $e.size,
            });
        } catch {}
      }),
  ),
    Me.sort((Oe, Ae) => Ae.mtimeMs - Oe.mtimeMs));
  let Se = {},
    xe = 0,
    De = 0;
  for (let Oe of Me) {
    if (Oe.size === 0 || xe + Oe.size > wi) continue;
    try {
      let {
        content: Ae,
        bytesRead: $e,
        bytesTotal: We,
      } = await readTailBytes(Oe.path, wi);
      if (!Ae || $e < We) continue;
      if (O && hasThirdPartyTranscriptMarkers(Ae)) {
        (De++,
          logForDebugging(
            `recent session ${Oe.sessionId} withheld: contains_3p_transcript_markers`,
          ));
        continue;
      }
      ((Se[Oe.sessionId] = Ae), (xe += Oe.size));
    } catch {}
  }
  return {
    transcripts: Object.keys(Se).length > 0 ? Se : void 0,
    droppedThirdParty: De,
  };
}
async function Yg(w, I, O, U) {
  let V = Date.now() - oc[O],
    te = [],
    ne = 0,
    me = await runPaginatedScan(
      (De) =>
        w.listEntries(
          { namespace: "transcript", projectKey: I.projectKey },
          { skipScopeStats: !0, ...(De !== void 0 && { cursor: De }) },
        ),
      (De) => {
        ne++;
        for (let Oe of De) {
          if (Oe.kind !== "key" || Oe.key.namespace !== "transcript") continue;
          if (Oe.key.agentId !== void 0 || Oe.key.journal === !0) continue;
          if (Oe.key.projectKey !== I.projectKey) continue;
          if (Oe.key.sessionId === I.sessionId) continue;
          if (!isValidPathSegment(Oe.key.sessionId) || validateStorageKey(Oe.key) !== void 0) continue;
          if ((Oe.mtimeMs ?? 0) >= V)
            te.push({
              key: Oe.key,
              sessionId: Oe.key.sessionId,
              mtimeMs: Oe.mtimeMs ?? 0,
              size: Oe.size ?? 0,
            });
        }
      },
    );
  if (me.status === "error" && ne === 0)
    return { transcripts: void 0, droppedThirdParty: 0 };
  if (me.status === "capped")
    logForDebugging(
      `recent sessions: listing cut short after ${DEFAULT_MAX_PAGES} pages; keeping what was listed`,
    );
  te.sort((De, Oe) => Oe.mtimeMs - De.mtimeMs);
  let Me = {},
    Se = 0,
    xe = 0;
  for (let De of te) {
    if (De.size === 0 || Se + De.size > wi) continue;
    let Oe = await w.read([{ key: De.key, tail: wi }]);
    if (!Oe.ok) continue;
    let Ae = Oe.value.items[0];
    if (
      !Ae.found ||
      Ae.value.byteLength === 0 ||
      Ae.value.byteLength < Ae.totalBytes
    )
      continue;
    let $e = Buffer.from(Ae.value).toString("utf8");
    if (U && hasThirdPartyTranscriptMarkers($e)) {
      (xe++,
        logForDebugging(
          `recent session ${De.sessionId} withheld: contains_3p_transcript_markers`,
        ));
      continue;
    }
    ((Me[De.sessionId] = $e), (Se += De.size));
  }
  return {
    transcripts: Object.keys(Me).length > 0 ? Me : void 0,
    droppedThirdParty: xe,
  };
}
var dc = "https://github.com/anthropics/claude-code/issues",
  ny = {
    bedrock: "Amazon Bedrock",
    vertex: "Vertex AI",
    foundry: "Microsoft Foundry",
    anthropicAws: "Claude Platform on AWS",
    anthropicGoogleCloud: "Claude Platform on Google Cloud",
    mantle: "Amazon Bedrock (Mantle)",
    gateway: "an API gateway",
  };
function resolveFeedbackSubmissionMode(w = "/feedback") {
  let I = getFeedbackDisabledReason(w);
  if (I !== null) return { kind: "disabled", reason: I };
  let O = getAPIProvider();
  if (O !== "firstParty")
    return { kind: "bundle", cause: "provider", label: ny[O] };
  if (getAuthHeaders().error)
    return {
      kind: "bundle",
      cause: "no_creds",
      label: "no Anthropic credentials",
    };
  return { kind: "post" };
}
var Ga = new Set(["transcript"]),
  Wa = new Set(["subagentTranscripts"]),
  MAX_RAW_TRANSCRIPT_BYTES = 4194304,
  oy = 2097152,
  MAX_FEEDBACK_PAYLOAD_BYTES = 8388608,
  ry = 2097152;
function measureFeedbackPayloadBytes(w) {
  return serializeFeedbackPayload(w, Ga, Wa).length;
}
function getFeedbackUnavailableReason() {
  let w = resolveFeedbackSubmissionMode();
  switch (w.kind) {
    case "post":
    case "share":
      return null;
    case "disabled":
      return w.reason;
    case "bundle":
      if (w.cause === "no_creds")
        return `/feedback requires Anthropic credentials (OAuth or API key). Report issues at ${dc}`;
      return `/feedback is not available when using ${w.label}. Report issues at ${dc}`;
  }
}
function getRedactedInMemoryErrors() {
  return getInMemoryErrors().map((w) => {
    let I = { ...w };
    if (I && typeof I.error === "string") I.error = redactSecretsFromText(I.error);
    return I;
  });
}
function sy(w, I, O) {
  if (!w) return [];
  let U = w.split(`
`),
    V = [],
    te = [],
    ne = new Set(),
    me = -1;
  for (let De of U) {
    if (!De) continue;
    let Oe;
    try {
      Oe = jsonParse(De);
    } catch {
      continue;
    }
    if (typeof Oe !== "object" || Oe === null) continue;
    if (Oe.type === "system" && Oe.subtype === "compact_boundary") {
      me = V.length;
      continue;
    }
    if (Oe.type !== "user" && Oe.type !== "assistant") continue;
    if (
      typeof Oe.uuid !== "string" ||
      typeof Oe.timestamp !== "string" ||
      Oe.isSidechain === !0 ||
      !Oe.message
    )
      continue;
    if (O.has(Oe.uuid) || ne.has(Oe.uuid)) continue;
    (ne.add(Oe.uuid),
      V.push(
        Oe.type === "user"
          ? {
              type: "user",
              uuid: Oe.uuid,
              timestamp: Oe.timestamp,
              message: Oe.message,
              ...(Oe.isMeta === !0 && { isMeta: !0 }),
              ...(Oe.toolUseResult !== void 0 && {
                toolUseResult: Oe.toolUseResult,
              }),
              ...(Oe.isCompactSummary === !0 && { isCompactSummary: !0 }),
            }
          : {
              type: "assistant",
              uuid: Oe.uuid,
              timestamp: Oe.timestamp,
              message: Oe.message,
              requestId: Oe.requestId,
            },
      ),
      te.push(Buffer.byteLength(De)));
  }
  if (me <= 0) return [];
  let { start: Me, oversized: Se } = findRecentEntriesWithinByteBudget(te, I, me),
    xe = V.slice(Me, me);
  return Se.size === 0 ? xe : xe.filter((De, Oe) => !Se.has(Me + Oe));
}
function findRecentEntriesWithinByteBudget(w, I, O = w.length) {
  let U = 0,
    V = O,
    te = new Set();
  while (V > 0) {
    let ne = w[V - 1];
    if (ne === void 0) break;
    if (ne > I) {
      (te.add(V - 1), V--);
      continue;
    }
    if (U + ne > I) break;
    ((U += ne), V--);
  }
  return { start: V, keptBytes: U, oversized: te };
}
function iy(w, I) {
  let O;
  for (let me of w) {
    if (me.type === "user" && me.isCompactSummary === !0) continue;
    if (O === void 0 || me.timestamp < O) O = me.timestamp;
  }
  let U = [],
    V = [];
  for (let me of I)
    if (O === void 0 || me.timestamp < O) U.push(me);
    else V.push(me);
  if (V.length === 0) return [...U, ...w];
  let te = w.findLastIndex(
      (me) => me.type === "user" && me.isCompactSummary === !0,
    ),
    ne = te === -1 ? w.length : te;
  return [...U, ...w.slice(0, ne), ...V, ...w.slice(ne)];
}
async function ay() {
  let w = getDebugLogPath();
  if (!w) return null;
  try {
    await flushDebugLogs();
    let { content: I, bytesRead: O, bytesTotal: U } = await readTailBytes(w, oy),
      V = I;
    if (O < U)
      ((V = V.slice(
        V.indexOf(`
`) + 1,
      )),
        (V = `[debug log truncated to last ${O} of ${U} bytes]
${V}`));
    return redactSecretsFromText(V);
  } catch {
    return null;
  }
}
async function uc({
  messages: w,
  description: I,
  surface: O,
  scope: U = "session",
  backgroundTasks: V = {},
  transcripts: te = {},
  surveyFeedbackSource: ne,
  excludeThirdPartyTranscripts: me,
  storageV5: Me,
}) {
  let [Se, xe] = await Promise.all([
      rc({
        messages: w,
        backgroundTasks: V,
        transcripts: te,
        diskSubagentTranscripts: loadAllSubagentTranscriptsFromDisk(Me),
        scope: U,
        maxRawTranscriptBytes: MAX_RAW_TRANSCRIPT_BYTES,
        excludeThirdPartyTranscripts: me,
      }),
      ay(),
    ]),
    De =
      findLastCompactBoundaryIndex(w) === -1
        ? []
        : sy(Se.rawTranscriptJsonl, ry, new Set(w.map((Ye) => Ye.uuid))),
    Oe = prepareApiMessages(w),
    Ae = De.length === 0 ? Oe : iy(Oe, De),
    $e = {
      latestAssistantMessageId: Se.latestAssistantMessageId,
      latestAssistantAPIMessageId: Se.latestAssistantAPIMessageId,
      lastInterruptedAssistantAPIMessageId: pZ(),
      message_count: w.length,
      datetime: new Date().toISOString(),
      description: I,
      surface: O,
      scope: Se.remoteWorkspace ? "session" : U,
      platform: Se.platform,
      gitRepo: Se.isGit,
      commitSha: Se.commitSha,
      ...(Se.remoteWorkspace && { remoteWorkspace: !0 }),
      ...(Se.remoteSessionId && { remoteSessionId: Se.remoteSessionId }),
      terminal: Se.terminal,
      version: Se.version,
      transcript: Ae,
      errors: getRedactedInMemoryErrors(),
      lastApiRequest: vrt(),
      ...(Object.keys(Se.subagentTranscripts).length > 0 && {
        subagentTranscripts: Se.subagentTranscripts,
      }),
      ...(Se.rawTranscriptJsonl && {
        rawTranscriptJsonl: Se.rawTranscriptJsonl,
      }),
      ...(Se.recentSessionTranscripts && {
        recentSessionTranscripts: Se.recentSessionTranscripts,
      }),
      ...(xe && { debugLog: xe }),
      ...(ne && {
        survey_appearance_id: ne.appearanceId,
        survey_response: ne.response,
        survey_type: ne.surveyType,
      }),
    },
    We =
      Se.thirdPartyExclusions.recentSessions +
      Se.thirdPartyExclusions.subagents +
      (Se.thirdPartyExclusions.rawTranscript ? 1 : 0);
  if (De.length > 0) {
    if (measureFeedbackPayloadBytes($e) > MAX_FEEDBACK_PAYLOAD_BYTES)
      return (
        logFeatureSad("feedback_precompact", "over_payload_cap"),
        { payload: { ...$e, transcript: Oe }, thirdPartyDroppedCount: We }
      );
    logFeatureOk("feedback_precompact");
  } else if (findLastCompactBoundaryIndex(w) !== -1 && !Se.thirdPartyExclusions.rawTranscript)
    logFeatureSad("feedback_precompact", "empty_recovery");
  return { payload: $e, thirdPartyDroppedCount: We };
}
function Ha(w) {
  if (w instanceof Error) {
    let I = Error(redactSecretsFromText(w.message));
    if (w.stack) I.stack = redactSecretsFromText(w.stack);
    logError(I);
  } else {
    let I = redactSecretsFromText(String(w));
    logError(Error(I));
  }
}
async function postFeedbackRequest(w, I, O) {
  if (isEssentialTrafficOnly()) return { success: !1 };
  if (!isPolicyAllowed("allow_product_feedback"))
    return { success: !1, failureReason: "policy_blocked" };
  let U = 0;
  try {
    let V = serializeFeedbackPayload(w, Ga, Wa);
    if (((U = V.length), U > MAX_FEEDBACK_PAYLOAD_BYTES))
      return {
        success: !1,
        payloadTooLarge: !0,
        failureReason: "payload_too_large_precheck",
      };
    let te = await withOAuth401Retry(
      () =>
        httpClient.post("/api/claude_cli_feedback", V, {
          headers: { "Content-Type": "application/json" },
          timeout: 30000,
          signal: I,
          credentials: O,
        }),
      { credentials: O },
    );
    if (!te.ok)
      switch (te.reason) {
        case "essential-traffic-only":
          return { success: !1 };
        case "data-residency":
          return { success: !1, failureReason: "data_residency" };
        case "no-auth":
          return { success: !1, failureReason: "auth_error" };
      }
    if (te.status === 200) {
      if (te.data?.feedback_id)
        return { success: !0, feedbackId: te.data.feedback_id };
      return (
        Ha(
          Error(
            "Failed to submit feedback: request did not return feedback_id",
          ),
        ),
        { success: !1, failureReason: "missing_feedback_id" }
      );
    }
    let ne = "Failed to submit feedback:" + te.status;
    if (te.status === 401 || te.status === 403 || te.status === 429) logForDebugging(ne);
    else Ha(Error(ne));
    return { success: !1, failureReason: "http_error", statusCode: te.status };
  } catch (V) {
    if (isCancel(V)) return { success: !1 };
    if (V instanceof RangeError)
      return {
        success: !1,
        payloadTooLarge: !0,
        failureReason: "payload_too_large_range_error",
      };
    if (isAxiosError(V)) {
      if (V.response?.status === 413)
        return {
          success: !1,
          payloadTooLarge: !0,
          failureReason: "payload_too_large_413",
          statusCode: 413,
        };
      if (V.code === "ECONNABORTED" && U > MAX_FEEDBACK_PAYLOAD_BYTES / 8)
        return {
          success: !1,
          payloadTooLarge: !0,
          failureReason: "payload_too_large_timeout",
        };
      if (V.response?.status === 403) {
        let te = V.response.data;
        if (
          te?.error?.type === "permission_error" &&
          te?.error?.message?.includes("Custom data retention settings")
        )
          return (
            logForDebugging(
              "Cannot submit feedback because custom data retention settings are enabled",
            ),
            {
              success: !1,
              isZdrOrg: !0,
              failureReason: "zdr_org",
              statusCode: 403,
            }
          );
      }
    }
    if (cc(V)) logForDebugging(redactSecretsFromText(l(V)));
    else Ha(V);
    if (isAxiosError(V) && V.response)
      return {
        success: !1,
        failureReason: "http_error",
        statusCode: V.response.status,
      };
    return {
      success: !1,
      failureReason:
        isAxiosError(V) && V.code === "ECONNABORTED" ? "timeout" : "network_error",
    };
  }
}
async function submitFeedbackSurveyFollowup({
  description: w,
  appearanceId: I,
  surveyResponse: O,
  surveyType: U,
  messages: V,
  lastInterruptedAssistantAPIMessageId: te,
  credentials: ne,
}) {
  if (getAPIProvider() !== "firstParty")
    return (
      logFeatureBad("feedback_survey_followup", "not_first_party"),
      { success: !1, failureReason: "not_first_party" }
    );
  if (!isPolicyAllowed("allow_product_feedback"))
    return (
      logFeatureBad("feedback_survey_followup", "policy_blocked"),
      { success: !1, failureReason: "policy_blocked" }
    );
  let me = findLastNonSyntheticAssistantMessage(V),
    Me = {
      latestAssistantMessageId: me?.requestId ?? null,
      latestAssistantAPIMessageId: me?.message.id ?? null,
      lastInterruptedAssistantAPIMessageId: te,
      message_count: V.length,
      datetime: new Date().toISOString(),
      description: redactSecretsFromText(w),
      surface: "cli",
      platform: a.platform,
      gitRepo: !1,
      commitSha: null,
      version: {
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
      transcript: [],
      survey_followup: !0,
      survey_appearance_id: I,
      survey_response: O,
      survey_type: U,
    },
    Se = await postFeedbackRequest(Me, void 0, ne);
  if (Se.success) logFeatureOk("feedback_survey_followup");
  else logFeatureBad("feedback_survey_followup", Se.failureReason ?? "unknown");
  return Se;
}
async function submitFeedbackPayload({
  messages: w,
  description: I,
  surface: O,
  scope: U = "session",
  backgroundTasks: V,
  transcripts: te,
  signal: ne,
  surveyFeedbackSource: me,
  storageV5: Me,
  credentials: Se,
}) {
  let { payload: xe, thirdPartyDroppedCount: De } = await uc({
      messages: w,
      description: I,
      surface: O,
      scope: U,
      backgroundTasks: V,
      transcripts: te,
      surveyFeedbackSource: me,
      excludeThirdPartyTranscripts: !0,
      storageV5: Me,
    }),
    Oe = xe.latestAssistantMessageId,
    Ae = await postFeedbackRequest(xe, ne, Se),
    $e = Ae,
    We = 0;
  if (!$e.success && $e.payloadTooLarge) {
    let {
      transcript: Ye,
      subagentTranscripts: Ze,
      lastApiRequest: Nt,
      recentSessionTranscripts: at,
      rawTranscriptJsonl: zt,
      debugLog: Qt,
      ...dn
    } = xe;
    if (
      ((We = 1),
      ($e = await postFeedbackRequest(
        {
          ...dn,
          transcript: [],
          ...(zt && { rawTranscriptJsonl: zt }),
          ...(Qt && { debugLog: Qt }),
        },
        ne,
        Se,
      )),
      !$e.success && $e.payloadTooLarge)
    )
      ((We = 2), ($e = await postFeedbackRequest({ ...dn, transcript: [] }, ne, Se)));
  }
  if ($e.success) {
    (logEvent("tengu_bug_report_submitted", {
      surface: fromEnum(O),
      remote_workspace: S(xe.remoteWorkspace ? "true" : "false"),
      retried_after_too_large: !Ae.success && Ae.payloadTooLarge === !0,
      strip_level: fromNumber(We),
      third_party_transcripts_dropped: fromNumber(De),
      feedback_id: sanitizeAnalyticsId($e.feedbackId),
      last_assistant_message_id: sanitizeAnalyticsId(Oe),
      last_assistant_api_message_id: sanitizeAnalyticsId(xe.latestAssistantAPIMessageId),
      last_interrupted_assistant_api_message_id: sanitizeAnalyticsId(
        xe.lastInterruptedAssistantAPIMessageId,
      ),
      ...(me && {
        survey_appearance_id: sanitizeAnalyticsId(me.appearanceId),
        survey_response: fromEnum(me.response),
        survey_type: fromEnum(me.surveyType),
      }),
    }),
      logFirstPartyEvent("tengu_bug_report_description", {
        feedback_id: sanitizeAnalyticsId($e.feedbackId),
        descriptionLength: I.length,
      }));
    let Ye = !Ae.success && Ae.payloadTooLarge === !0;
    if (Ye) logFeatureSad("feedback_submit", "payload_stripped");
    else logFeatureOk("feedback_submit");
    return { success: !0, feedbackId: $e.feedbackId, retriedAfterTooLarge: Ye };
  }
  if ($e.failureReason)
    (logFeatureBad("feedback_submit", $e.failureReason),
      logEvent("tengu_bug_report_failed", {
        surface: fromEnum(O),
        remote_workspace: S(xe.remoteWorkspace ? "true" : "false"),
        reason: fromEnum($e.failureReason),
        status_code: fromNumberOpt($e.statusCode) ?? S(""),
        first_attempt_too_large: !Ae.success && Ae.payloadTooLarge === !0,
      }));
  return {
    success: !1,
    isZdrOrg: $e.isZdrOrg,
    failureReason: $e.failureReason,
    statusCode: $e.statusCode,
  };
}
async function writeFeedbackBundleZip(w, I = "feedback.json") {
  let V = `cc-${new Date().toISOString().replace(/[-:]/g, "").replace("T", "-").slice(0, 15)}-${randomBytes(3).toString("hex")}`,
    te = lc(getClaudeConfigDir(), "feedback-bundles"),
    ne = lc(te, `${V}.zip`);
  try {
    await Zg(te, { recursive: !0, mode: 448 });
    let { Zip: me, ZipDeflate: Me } = await import("../../00-第三方库/fflate/zipSync.gv6wj3ch.js"),
      Se = createWriteStream(ne, { mode: 384 });
    return (
      await new Promise((xe, De) => {
        Se.on("error", De);
        let Oe = new me(($e, We, Ye) => {
            if ($e) return (Se.destroy(), De($e));
            if ((Se.write(We), Ye)) Se.end(() => xe());
          }),
          Ae = new Me(I);
        (Oe.add(Ae), Ae.push(w, !0), Oe.end());
      }),
      logFeatureOk("feedback_bundle"),
      { success: !0, bundleId: V, zipPath: ne }
    );
  } catch (me) {
    return (
      await ty(ne, { force: !0 }).catch(() => {}),
      logError(me),
      logFeatureBad("feedback_bundle", "write_failed"),
      { success: !1, error: l(me) }
    );
  }
}
async function createFeedbackBundle({
  messages: w,
  description: I,
  surface: O,
  scope: U = "session",
  backgroundTasks: V,
  transcripts: te,
  surveyFeedbackSource: ne,
  storageV5: me,
}) {
  let Me;
  try {
    let { payload: Se } = await uc({
        messages: w,
        description: I,
        surface: O,
        scope: U,
        backgroundTasks: V,
        transcripts: te,
        surveyFeedbackSource: ne,
        excludeThirdPartyTranscripts: !1,
        storageV5: me,
      }),
      xe = redactDeep(Se);
    Me = serializeFeedbackPayload(xe, Ga, Wa);
  } catch (Se) {
    return (
      logError(Se),
      logFeatureBad("feedback_bundle", "write_failed"),
      { success: !1, error: l(Se) }
    );
  }
  return writeFeedbackBundleZip(Me);
}
function mc(w) {
  return {
    commands: w.commands ?? [],
    agents: w.agents ?? [],
    output_style: w.outputStyle ?? "default",
    available_output_styles: w.availableOutputStyles ?? ["default"],
    models: w.models ?? [],
    ...(w.unavailableModels &&
      w.unavailableModels.length > 0 && {
        unavailable_models: w.unavailableModels,
      }),
    account: w.account ?? { apiProvider: "firstParty" },
    pid: w.pid ?? process.pid,
  };
}
function getTerminalLifecycleState(w, I) {
  return I || isFailedTerminalReason(w) ? "cancelled" : "completed";
}
import { randomUUID as ly } from "crypto";
function fc(w) {
  if (w.length === 0) return;
  return {
    type: "system",
    subtype: "memory_recall",
    mode: "select",
    memories: w.map((I) => ({
      path: I.path,
      scope: getMemoryScopeForPath(I.path) ?? "personal",
    })),
    uuid: ly(),
    session_id: K(),
  };
}
import { randomUUID as fy } from "crypto";
var dy = 6,
  cy = 32,
  my = createLazyValue(() => c({ text: s().optional() }));
function parseFooterIndicatorText(w) {
  let I = my().safeParse(w);
  if (!I.success || I.data.text === void 0) return null;
  let O = py(I.data.text);
  return O.length > 0 ? O : null;
}
function getFooterIndicator() {
  let w = parseFooterIndicatorText(getCachedClientData()?.footer_indicator);
  return w === null ? void 0 : { text: w };
}
function py(w) {
  let I = stripInvisibleChars(stripAnsi(w))
    .replace(/[\x00-\x1f\x7f-\x9f]/g, "")
    .trim();
  return truncateToWidth(truncateToCodeUnits(I, cy), dy);
}
var gc = "(value set by your organization)";
function redactManagedMcpConfig(w, I) {
  if (I !== "managed") return w;
  return {
    ...w,
    url: formatUrlForDisplay(w.url) ?? gc,
    ...(w.headers && { headers: Si(w.headers, () => gc) }),
  };
}
function normalizeMcpServerStatus(w) {
  return w === "cached" ? "pending" : w;
}
function serializeMcpServerStatuses(w) {
  return w.map((I) => {
    let O;
    if (I.config.type === "sse" || I.config.type === "http")
      O = redactManagedMcpConfig(
        { type: I.config.type, url: I.config.url, headers: I.config.headers },
        I.config.scope,
      );
    else if (I.config.type === "claudeai-proxy")
      O = { type: "claudeai-proxy", url: I.config.url, id: I.config.id };
    else if (I.config.type === "stdio" || I.config.type === void 0)
      O = { type: "stdio", command: I.config.command, args: I.config.args };
    return {
      name: I.name,
      status: normalizeMcpServerStatus(I.type),
      config: O,
      scope: I.config.scope,
      serverInfo: isConnectedMcpServer(I) ? I.serverInfo : void 0,
      error: I.type === "failed" ? I.error : void 0,
    };
  });
}
function getReportedToolName(w) {
  return w === AGENT_TOOL_NAME ? TASK_TOOL_NAME : w;
}
var za = "interrupt_receipt_v1",
  Va = "msg_lifecycle_v1",
  gy = "interrupt_cancel_queued_v1",
  DEFAULT_ENGINE_CAPABILITIES = [za, gy, Va];
function serializePluginInfo(w) {
  let I = sanitizeOptionalText(w.manifest.version);
  return {
    name: w.name,
    path: w.path,
    source: w.source,
    ...(I && { version: I }),
  };
}
function collectAmbientContext() {
  let w = getSettings_DEPRECATED(),
    I;
  if (isAutoMemoryEnabled()) {
    if (((I = { auto: getAutoMemPath() }), hasTeamMemoryStore())) I.team = getTeamMemoryDir();
  }
  let O;
  return (
    (O = import.meta
      .require("../远程控制-Bridge/validateExplicitMessagingSocketPath.knbv811d.js")
      .getUdsMessagingSocketPath()),
    {
      cwd: getCwd(),
      sessionId: K(),
      apiKeySource: getApiKeySourceSafe(),
      betas: Up(),
      outputStyle: w?.outputStyle ?? DEFAULT_OUTPUT_STYLE_NAME,
      analyticsDisabled: isAnalyticsDisabled(),
      productFeedbackDisabled: !isPolicyAllowed("allow_product_feedback"),
      memoryPaths: I,
      messagingSocketPath: O,
      workerEpoch: isViolinWoodEnabledCached() ? a.CLAUDE_CODE_WORKER_EPOCH : void 0,
      powerShellPath: getCurrentPlatform() === "windows" ? getResolvedPowerShellPath() : void 0,
      footerIndicator: getFooterIndicator(),
    }
  );
}
function collectMinimalAmbientContext() {
  let w = collectAmbientContext();
  return {
    cwd: "",
    sessionId: w.sessionId,
    apiKeySource: w.apiKeySource,
    betas: void 0,
    outputStyle: w.outputStyle,
    analyticsDisabled: w.analyticsDisabled,
    productFeedbackDisabled: w.productFeedbackDisabled,
    memoryPaths: void 0,
    messagingSocketPath: void 0,
    workerEpoch: w.workerEpoch,
    powerShellPath: void 0,
    footerIndicator: void 0,
  };
}
function buildSystemInitMessage(w) {
  let I = new Set(w.mcpClients.map((te) => te.name)),
    O = w.mcpServerErrors.filter((te) => !I.has(te.name)),
    U = w.commands
      .filter((te) => te.userInvocable !== !1 && te.terminalOriented === !0)
      .map((te) => te.name),
    V = {
      type: "system",
      subtype: "init",
      cwd: w.cwd,
      session_id: w.sessionId,
      tools: w.tools.map((te) => getReportedToolName(te.name)),
      mcp_servers: w.mcpClients.map((te) => ({
        name: te.name,
        status: normalizeMcpServerStatus(te.type),
      })),
      model: w.model,
      permissionMode: getExternalPermissionMode(w.permissionMode),
      slash_commands: w.commands
        .filter((te) => te.userInvocable !== !1)
        .map((te) => te.name),
      ...(U.length > 0 && { terminal_slash_commands: U }),
      apiKeySource: w.apiKeySource,
      betas: w.betas,
      claude_code_version: {
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
      output_style: w.outputStyle,
      agents: w.agents.map((te) => te.agentType),
      skills: uniqBy(w.skills, "name")
        .filter((te) => te.userInvocable !== !1)
        .map((te) => te.name),
      plugins: w.plugins.map(serializePluginInfo),
      ...(w.pluginErrors.length > 0 && {
        plugin_errors: w.pluginErrors.map((te) => ({ ...te })),
      }),
      ...(w.pluginWarnings.length > 0 && {
        plugin_warnings: w.pluginWarnings.map((te) => ({ ...te })),
      }),
      ...(w.capabilities && { capabilities: [...w.capabilities] }),
      ...(O.length > 0 && { mcp_server_errors: O.map((te) => ({ ...te })) }),
      analytics_disabled: w.analyticsDisabled,
      product_feedback_disabled: w.productFeedbackDisabled,
      uuid: fy(),
    };
  if (w.memoryPaths) V.memory_paths = { ...w.memoryPaths };
  if (w.workerEpoch !== void 0 && w.workerEpoch >= 1)
    V.worker_epoch = w.workerEpoch;
  if (w.messagingSocketPath !== void 0)
    V.messaging_socket_path = w.messagingSocketPath;
  if (
    ((V.fast_mode_state = w.fastModeState),
    (V.fast_mode_disabled_reason = w.fastModeDisabledReason),
    w.footerIndicator)
  )
    V.footer_indicator = { ...w.footerIndicator };
  if (w.effort !== void 0) V.effort = w.effort;
  if (w.powerShellPath !== void 0) V.powershell_path = w.powerShellPath;
  return V;
}
function attachStartupTiming(w, I) {
  recordStartupPhase("init_emit_ms", performance.now() - I, I);
  let O = consumeStartupTiming();
  if (O) w.startup_timing = O;
}
import { randomUUID as qa } from "crypto";
function getLastTextBlockText(w) {
  if (typeof w === "string") return w;
  let I = w.at(-1);
  return I?.type === "text" ? I.text : null;
}
import { randomUUID as hy } from "crypto";
function hc(w, I, O, U, V, te, ne, me, Me, Se, xe) {
  let De =
      typeof w === "string"
        ? w
        : w.find((Qt) => Qt.type === "text")?.text || "",
    Oe = te || hy(),
    Ae =
      typeof w === "string"
        ? w
        : w.findLast((Qt) => Qt.type === "text")?.text || "",
    $e = contentHasToolResult(w) ? void 0 : V;
  if (Ae)
    emitOtelEvent("user_prompt", {
      prompt_length: String(Ae.length),
      prompt: redactPromptUnlessEnabled(Ae),
      ...($e && { "prompt.id": $e }),
      "message.uuid": Oe,
    });
  let We = isNegativePrompt(De),
    Ye = isKeepGoingPrompt(De),
    Ze = isWakeupPrompt(De),
    Nt = me ? null : pZ(),
    at = me ? void 0 : vMn();
  if (
    (logEvent("tengu_input_prompt", {
      is_negative: We,
      is_keep_going: Ye,
      is_wakeup: Ze,
      prompt_index: at,
      prompt_length: Ae.length,
      ...(Se && { prompt_source: fromEnum(Se) }),
      ...(Me && { effort_level: fromEnum(Me) }),
      ...(Nt && { interrupted_message_id: sanitizeAnalyticsId(Nt) }),
    }),
    I.length > 0)
  ) {
    let Qt =
        typeof w === "string"
          ? w.trim()
            ? [{ type: "text", text: w }]
            : []
          : w,
      dn = createUserMessage({
        content: [...Qt, ...I],
        uuid: Oe,
        imagePasteIds: O.length > 0 ? O : void 0,
        permissionMode: ne,
        isMeta: me || void 0,
        promptSource: Se,
        promptId: $e,
        origin: xe,
      });
    if (xe) applyOriginPrefixToMessage(dn, xe);
    return { messages: [dn, ...U], shouldQuery: !0 };
  }
  let zt = createUserMessage({
    content: w,
    uuid: Oe,
    permissionMode: ne,
    isMeta: me || void 0,
    promptSource: Se,
    promptId: $e,
    origin: xe,
  });
  if (xe) applyOriginPrefixToMessage(zt, xe);
  return { messages: [zt, ...U], shouldQuery: !0 };
}
var Sc =
    "Blank prompt \u2014 the message was only whitespace, so nothing was sent to the model.",
  Ei = () => import.meta.require("../自动模式-AutoMode/LINK_SCAN_MAX_BYTES.mjs9q59k.js"),
  Sy = () => import.meta.require("../../01-核心基础设施/核心工具-未归类/chunk-s1hpfa12.js");
class Pc {
  state = void 0;
}
var _y = new j(() => new Pc());
function Cc(w) {
  let I = _y.of(w.session.host);
  if (I.state === void 0) I.state = Ei?.().createClassifierJobState(w) ?? null;
  return I.state;
}
async function processUserInput({
  input: w,
  preExpansionInput: I,
  suppressWorkflowKeyword: O,
  mode: U,
  context: V,
  pastedContents: te,
  ideSelection: ne,
  messages: me,
  setUserInputOnProcessing: Me,
  uuid: Se,
  isAlreadyProcessing: xe,
  querySource: De,
  canUseTool: Oe,
  skipSlashCommands: Ae,
  bridgeOrigin: $e,
  localStdinOrigin: We,
  modelScheduledOrigin: Ye,
  wakeupSource: Ze,
  scheduledTaskId: Nt,
  scheduledFireId: at,
  isMeta: zt,
  skipAttachments: Qt,
  skipSubmissionHooks: dn,
  pollEventDelivery: ro,
  pollEventProvenance: lo,
  skipSkillPermissionReset: to,
  shouldQuery: Tt,
  promptSource: Un,
  origin: yn,
  verifiedSlackHumanTurn: on,
  inlinedImagePaths: $n,
  promptSubmitted: Kt,
  wait: Hn = !1,
}) {
  using Zt = createDisposableSubmission(takePendingPromptSubmit(Se));
  let $t = typeof w === "string" ? w : null;
  if (U === "prompt" && $t !== null && !zt) Me?.($t, yn);
  recordQueryProfileMark("query_process_user_input_base_start");
  let At =
      Tt === !1 && zt
        ? void 0
        : resolvePromptSource({
            isNonInteractive: V.options.isNonInteractiveSession,
            isMeta: zt,
            callerSource: Un,
          }),
    Mn = Qt === !0 || yn?.kind === "plugin",
    rn = [...(V.nestedMemoryAttachmentTriggers ?? [])];
  V.consumedNestedMemoryTriggers = [];
  let Lt = await wy(
    w,
    U,
    V,
    At,
    te,
    ne,
    me,
    Se,
    xe,
    De,
    Oe,
    getToolPermissionContext(V).mode,
    Ae,
    $e,
    Ye,
    zt,
    Mn,
    I,
    O,
    yn,
    Tt,
    $n,
    Kt !== void 0,
    on,
    We,
  );
  if (Nt !== void 0) {
    let ln = Lt.messages.filter((tt) => tt.type === "user"),
      et = ln.find((tt) => tt.promptSource !== void 0) ?? ln[0];
    if (et) {
      if (((et.scheduledTaskId = Nt), at !== void 0)) et.scheduledFireId = at;
    }
  }
  if (
    (recordQueryProfileMark("query_process_user_input_base_end"),
    ro === !0 && Lt.messages.length > 0)
  )
    Lt.messages.push(
      createAttachmentMessage({
        type: "poll_events",
        deliveredVia: "value_dispatch",
        envelopes: [],
        kinds: [],
        remainingWakeCount: 0,
        ...(lo !== void 0 && { provenance: lo }),
      }),
    );
  if (!xe && to !== !0)
    setAlwaysDenyCommands(V.setToolPermissionContext, Lt.disallowedTools ?? []);
  if (Tt === !1) Lt.shouldQuery = !1;
  if (
    !Lt.shouldQuery ||
    U === "bash" ||
    Lt.forkDispatched ||
    dn === !0 ||
    At === void 0
  )
    return (await vc(Lt, me, V.options.tools), Lt);
  recordQueryProfileMark("query_hooks_start");
  let an = getMessageContentText(w) || "",
    Tn = performance.now(),
    en,
    kn;
  if (Kt !== void 0)
    try {
      kn = getPromptScreenSnapshot(V);
    } catch (ln) {
      logForDebugging(`the drain could not read what screens a prompt now: ${ln}`, {
        level: "error",
      });
    }
  if (Kt === void 0 || kn === void 0 || hasPluginHooksChanged(Kt.under, kn))
    en = await runPromptSubmitPipeline({
      submission: { text: an, input: w, pastedContents: te },
      origin: yn,
      bridgeOrigin: $e,
      mode: U,
      shouldWait: Hn,
      context: V,
      result: Lt,
      promptSource: At,
      wakeupSource: Ze,
      queued: Zt,
    });
  else if (kn !== void 0 && didPromptScreenChange(Kt.under, kn)) {
    let ln = await runUserPromptSubmitHooks({
        text: Kt.text,
        context: V,
        result: Lt,
        promptSource: At,
        wakeupSource: Ze,
        tiers: MANAGED_HOOKS_TIER,
      }),
      et =
        ln.blocked !== void 0
          ? ln
          : await runUserPromptSubmitHooks({
              text: Kt.text,
              context: V,
              result: Lt,
              promptSource: At,
              wakeupSource: Ze,
              tiers: { managedHooksExcluded: !0 },
            });
    en =
      et.blocked !== void 0
        ? { ended: et.blocked, stopped: et.stopped }
        : {
            proceeds: {
              text: Kt.text,
              context: Kt.context,
              sessionTitle: et.sessionTitle ?? ln.sessionTitle,
            },
          };
  } else if (Kt.stopped !== void 0)
    (Lt.messages.push(...Kt.messages),
      (Lt.shouldQuery = !1),
      (Lt.resultText = Kt.stopped),
      (en = { ended: Lt, stopped: Kt.stopped }));
  else
    (Lt.messages.push(...Kt.messages),
      (en = {
        proceeds: {
          text: Kt.text,
          context: Kt.context,
          sessionTitle: Kt.sessionTitle,
        },
      }));
  if (en.ended !== void 0) return en.ended;
  let It = en.proceeds.text,
    cn = en.proceeds.context;
  if (cn !== void 0 && cn.length > 0)
    Lt.messages.push(createHookAdditionalContext(cn, "prompt.submit"));
  if (It !== an) {
    let ln = by(Lt.messages, an, It);
    if (ln !== void 0 && !Mn) {
      let et = [...rn, ...(V.consumedNestedMemoryTriggers ?? [])];
      Lt.messages = await ky({
        messages: Lt.messages,
        prompt: ln,
        text: kc(It, an),
        typed: I === void 0 ? void 0 : kc(It, I),
        ambientTriggers: et,
        context: V,
        history: me,
        querySource: De,
      });
    }
  }
  if (
    (recordStartupPhase("prompt_submit_hooks_ms", performance.now() - Tn, Tn),
    en.proceeds.sessionTitle)
  )
    await applyHookSessionTitle(
      V.session.id,
      en.proceeds.sessionTitle,
      V.storageV5,
      V.credentials,
    );
  return (recordQueryProfileMark("query_hooks_end"), await vc(Lt, me, V.options.tools), Lt);
}
async function vc(w, I, O) {
  if (!w.shouldQuery) return;
  try {
    let { getWorkflowAuthoringAutoloadMessages: U } = import.meta.require(
      "../编排-Workflow/getWorkflowAuthoringAutoloadMessages.x36rsj57.js",
    );
    w.messages.push(...(await U(w.messages, I, O)));
  } catch (U) {
    logError(U);
  }
}
function by(w, I, O) {
  for (let U of w) {
    if (U.type !== "user" || U.isMeta) continue;
    let { content: V } = U.message;
    if (V === I) return ((U.message.content = O), U);
    if (typeof V !== "string" && getMessageContentText(V) === I)
      return ((U.message.content = replaceLastTextBlock(V, O)), U);
  }
  logForDebugging(
    "prompt.submit: a hook rewrote the prompt but no user message carried the original text; the model sees the prompt as typed",
    { level: "warn" },
  );
  return;
}
var Cy = new Set([
    "file",
    "already_read_file",
    "pdf_reference",
    "audio_transcript",
    "directory",
    "mcp_resource",
    "agent_mention",
    "peer_mention",
    "nested_memory",
  ]),
  vy = new RegExp(
    String.raw`(?:^|[\s\u3002\u3001\uFF1F\uFF01])@` +
      String.raw`(?:"[^"]+"|\S+?\b(?=[ \t]*\[${AGENT_REF_PATTERN}\])|\S+\b)` +
      String.raw`(?:[ \t]*\[${AGENT_REF_PATTERN}\])?`,
    "g",
  );
function kc(w, I) {
  let O = wc(I);
  return wc(w)
    .filter((U) => O.includes(U))
    .join(" ");
}
function wc(w) {
  return (w.match(vy) ?? []).map((I) => I.slice(I.indexOf("@")));
}
async function ky({
  messages: w,
  prompt: I,
  text: O,
  typed: U,
  ambientTriggers: V,
  context: te,
  history: ne,
  querySource: me,
}) {
  let Me = [],
    Se = !1;
  for (let De of w) {
    if (De.type !== "attachment" || !Cy.has(De.attachment.type)) {
      Me.push(De);
      continue;
    }
    if (De.attachment.type === "file")
      te.readFileState.delete(De.attachment.filename);
    if (De.attachment.type === "nested_memory")
      (te.readFileState.delete(De.attachment.path),
        delete te.loadedNestedMemoryPaths?.[De.attachment.path]);
    Se ||= De.attachment.type === "peer_mention";
  }
  te.nestedMemoryAttachmentTriggers?.push(...V);
  let xe = await collectAsyncIterable(
    getAttachmentMessages(
      O,
      te,
      null,
      [],
      { now: () => new Date().toISOString(), uuid: qa },
      ne,
      me,
      {
        inputMentionsOnly: !0,
        isHumanTypedPrompt: Se,
        preExpansionInput: Se ? U : void 0,
      },
    ),
  );
  return (Me.splice(Me.indexOf(I) + 1, 0, ...xe), Me);
}
async function wy(
  w,
  I,
  O,
  U,
  V,
  te,
  ne,
  me,
  Me,
  Se,
  xe,
  De,
  Oe,
  Ae,
  $e,
  We,
  Ye,
  Ze,
  Nt,
  at,
  zt,
  Qt,
  dn,
  ro,
  lo,
) {
  let to = qa();
  if (!contentHasToolResult(w)) Rje(to);
  if (
    I === "prompt" &&
    typeof w === "string" &&
    w !== "" &&
    w.trim() === "" &&
    O.options.isNonInteractiveSession &&
    !We &&
    zt !== !1
  )
    return (
      logFeatureOk("prompt_submit_empty"),
      { messages: [createSystemInfoMessage(Sc, "warning")], shouldQuery: !1, resultText: Sc }
    );
  let Tt = null,
    Un = [],
    yn = [],
    on = getImageLimitsForModel(O.options.mainLoopModel),
    $n = w;
  if (typeof w === "string") Tt = w;
  else if (w.length > 0) {
    recordQueryProfileMark("query_image_processing_start");
    let et = [];
    for (let tt of w)
      if (tt.type === "image") {
        let He = await reprocessImageBlock(tt, on);
        if (He.dimensions) {
          let Qe = formatImageDisplayAnnotation(He.dimensions);
          if (Qe) yn.push(Qe);
        }
        et.push(He.block);
      } else et.push(tt);
    (($n = et),
      recordQueryProfileMark("query_image_processing_end"),
      (Tt = getLastTextBlockText(et)),
      (Un = Tt === null ? et : et.slice(0, -1)));
  }
  if (Tt === null && I !== "prompt")
    throw Error(`Mode: ${I} requires a string input.`);
  let Kt = V ? Object.values(V).filter(hasImageContent) : [],
    Hn = V ? await storeImageBatchToCache(V, createFieldUpdater(O.setAppState, "storedImagePaths")) : new Map();
  recordQueryProfileMark("query_pasted_image_processing_start");
  let Zt = await Promise.all(
      Kt.map(async (et) => {
        logEvent("tengu_pasted_image_resize_attempt", {
          original_size_bytes: et.content.length,
        });
        let tt = await buildImageBlock({
          data: et.content,
          mediaType: et.mediaType,
          limits: on,
        });
        return (
          tt.block.type,
          {
            id: et.id,
            resized: tt,
            originalDimensions: et.dimensions,
            sourcePath: et.sourcePath ?? Hn.get(et.id),
          }
        );
      }),
    ),
    $t = [],
    At = [];
  for (let {
    id: et,
    resized: tt,
    originalDimensions: He,
    sourcePath: Qe,
  } of Zt) {
    if (($t.push(tt.block), tt.block.type !== "image")) continue;
    if ((At.push(et), tt.dimensions)) {
      let Je = formatImageDisplayAnnotation(tt.dimensions, Qe);
      if (Je) yn.push(Je);
    } else if (He) {
      let Je = formatImageDisplayAnnotation(He, Qe);
      if (Je) yn.push(Je);
    } else if (Qe) yn.push(`${IMAGE_SOURCE_PLACEHOLDER_PREFIX}${Qe}]`);
  }
  recordQueryProfileMark("query_pasted_image_processing_end");
  let Mn = I === "prompt",
    rn = Oe,
    Lt = O,
    an = Tt;
  if (Ae && Tt !== null && Tt.startsWith("/")) {
    let { resolveBridgeSlashOverride: et } =
        await import("../远程控制-Bridge/chunk-x2kwwph8.js"),
      tt = et({ inputString: Tt, context: O, uuid: me, origin: at });
    if (tt.kind === "blocked") return tt.result;
    if (tt.kind === "updated")
      ((rn = tt.effectiveSkipSlash),
        (an = tt.effectiveInput),
        (Lt = { ...tt.effectiveContext, dispatchedOverBridge: !0 }));
  }
  if ($e && !Ae && Tt !== null && Tt.startsWith("/")) {
    let et = parseSlashCommandInput(Tt),
      tt = et?.commandName;
    if (isMcpSkillsEnabled()) {
      if (tt) {
        let Je = resolvePromptCommandFromUri(tt, O.options.commands);
        if (Je) tt = Je.commandName;
      }
    }
    let He = tt ? findCommand(tt, O.options.commands) : void 0,
      Qe = et?.args ?? "";
    if (!He && tt && et && !et.isMcp && Qe.trim()) {
      let Je = Qe.trimStart(),
        Ot = Je.search(/\s/),
        nn = Ot === -1 ? Je : Je.slice(0, Ot),
        Fn = findCommand(`${tt}:${nn}`, O.options.commands);
      if (Fn) ((He = Fn), (Qe = Ot === -1 ? "" : Je.slice(Ot + 1).trimStart()));
    }
    if (He) {
      let Je = isSkillOff(He) ? void 0 : resolveSubcommandTarget(He, Qe),
        Ot = Je ? findCommand(Je.targetName, O.options.commands) : void 0,
        nn = Je && Ot && isCommandEnabled(Ot) ? Ot : He;
      if (
        getSkillInvocationBlockReason(nn, {
          commandName: nn.name,
          userTypedThisTurn: !1,
          isMainSession: !0,
          permissionContext: getToolPermissionContext(O),
        }) === null
      )
        rn = !1;
    }
  }
  let Tn = Py({ querySource: Se, context: O });
  if (
    isUltraplanEnabled() &&
    I === "prompt" &&
    !O.options.isNonInteractiveSession &&
    Tt !== null &&
    !rn &&
    !Tt.startsWith("/") &&
    !O.options.ultraplanSessionUrl &&
    !O.getAppState().ultraplanLaunching &&
    dn !== !0 &&
    !We &&
    isHumanOrigin(at) &&
    hasUltraplanMention(Ze ?? Tt)
  ) {
    logEvent("tengu_ultraplan_keyword", {});
    let et = stripUltraplanKeyword(Tt).trim(),
      { processSlashCommand: tt } = await import("../斜杠命令-框架/chunk-s195n5de.js"),
      He = await tt(
        `/ultraplan ${et}`,
        Un,
        $t,
        [],
        {
          ...O,
          dispatchedByKeyword: !0,
          submissionVerifiedSlackHumanTurn: ro,
          submittedOnLocalStdin: lo,
        },
        me,
        Me,
        xe,
        U,
        void 0,
        void 0,
        void 0,
        Tn,
        {
          executeUserPromptSubmitHooks: executeUserPromptSubmitHooks,
          getUserPromptSubmitHookBlockingMessage: getUserPromptSubmitHookBlockingMessage,
          executeStopHooks: executeStopHooks,
          getStopHookMessage: getStopHookMessage,
        },
        at,
        Qt,
      );
    return Pi(He, yn);
  }
  if (Tt !== null && I === "bash") {
    let { processBashCommand: et } = await import("./processBashCommand.5n238kht.js");
    return Pi(await et(Tt, Un, O), yn);
  }
  let en = !Ye && (rn || !Tt?.startsWith("/")),
    kn = Mn && !We && zt !== !1,
    It = kn && isHumanOrigin(at);
  recordQueryProfileMark("query_attachment_loading_start");
  let cn = en
      ? await collectAsyncIterable(
          getAttachmentMessages(
            Tt,
            O,
            te ?? null,
            [],
            { now: () => new Date().toISOString(), uuid: () => qa() },
            ne,
            Se,
            {
              isRegularUserPrompt: kn,
              isHumanTypedPrompt: It,
              preExpansionInput: Ze,
              suppressWorkflowKeyword: Nt,
            },
          ),
        )
      : [],
    ln =
      Qt && Qt.length > 0
        ? createAttachmentMessage({ type: "inlined_image_paths", paths: Qt })
        : null;
  if (
    (recordQueryProfileMark("query_attachment_loading_end"),
    an !== null && !rn && an.startsWith("/"))
  ) {
    let { processSlashCommand: et } = await import("../斜杠命令-框架/chunk-s195n5de.js"),
      tt = $e
        ? (Qe) =>
            getSkillInvocationBlockReason(Qe, {
              commandName: Qe.name,
              userTypedThisTurn: !1,
              isMainSession: O.agentId === void 0,
              permissionContext: getToolPermissionContext(O),
            }) !== null
        : void 0,
      He = await et(
        an,
        Un,
        $t,
        cn,
        {
          ...Lt,
          submissionVerifiedSlackHumanTurn: ro,
          submittedOnLocalStdin: lo,
        },
        me,
        Me,
        xe,
        U,
        $e,
        tt,
        $e ? void 0 : Ze,
        Tn,
        {
          executeUserPromptSubmitHooks: executeUserPromptSubmitHooks,
          getUserPromptSubmitHookBlockingMessage: getUserPromptSubmitHookBlockingMessage,
          executeStopHooks: executeStopHooks,
          getStopHookMessage: getStopHookMessage,
        },
        at,
        Qt,
        te?.source === "diff" ? void 0 : te,
      );
    if (
      I === "prompt" &&
      !We &&
      zt !== !1 &&
      isHumanOrigin(at) &&
      !$e &&
      He.shouldQuery &&
      !O.abortController.signal.aborted
    )
      (notifyAutoReactHumanTurnObserver(), clearGoalIdleCheckinCount(O.setAppState));
    if (ln) He.messages.push(ln);
    return Pi(He, yn);
  }
  if (ln) cn.push(ln);
  if (Tt !== null && I === "prompt") {
    let et = Tt.trim(),
      tt = cn.find((He) => He.attachment.type === "agent_mention");
    if (tt) {
      let He = `@agent-${tt.attachment.agentType}`,
        Qe = et === He,
        Je = et.startsWith(He) && !Qe;
      logEvent("tengu_subagent_at_mention", { is_subagent_only: Qe, is_prefix: Je });
    }
  }
  if (It && !O.abortController.signal.aborted) (notifyAutoReactHumanTurnObserver(), clearGoalIdleCheckinCount(O.setAppState));
  return Pi(
    hc(
      $n,
      $t,
      At,
      cn,
      to,
      me,
      De,
      We,
      getModelEffortLevelIfSupported(O.options.mainLoopModel, getEffortValue(O)),
      U,
      at,
    ),
    yn,
  );
}
function Py({ querySource: w, context: I }) {
  if (Ei) {
    let O = () =>
      isActingAsBgJob() && w?.startsWith("repl_main_thread") === !0 && !I.agentId;
    return {
      markTurnActive: (U) => {
        try {
          if (O()) {
            let V = Cc(I);
            (Ei().markTurnActive(V, getOwnJobShortId(), U), (V.kicked = !1));
          }
        } catch (V) {
          if (yt(V)) return;
          logError(V);
        }
      },
      settleTurnEnd: async (U) => {
        try {
          if (!O()) return;
          let V = Ei(),
            te = Cc(I),
            ne = getOwnJobShortId();
          if (U) {
            let me = Sy(),
              Me = me.detectSurfaces(!1),
              Se = me.engineFor(me.sinksFor(Me));
            if (Se) {
              let xe = V.findLatestRealUserAsk([...I.messages, ...U]);
              if (xe) V.captureLatestAsk(te, xe);
              let De = H_(),
                Oe = De
                  ? I.options.agentDefinitions.activeAgents.find(
                      ($e) => $e.agentType === De,
                    )
                  : void 0,
                Ae = V.classifyAndPush(
                  te,
                  ne,
                  Oe?.agentType ?? "bg",
                  "",
                  U.filter(($e) => $e.type === "assistant"),
                  hasActiveAgentTask(I.taskRegistry.all()),
                  Se,
                  Me,
                ).catch(($e) => {
                  logForDebugging(`[classifier] error: ${l($e)}`, { level: "error" });
                });
              if (isBgSession())
                await withTimeout(Ae, 60000, "classifier write timed out").catch(
                  () => {},
                );
              return;
            }
          }
          V.markTurnAborted(te, ne);
        } catch (V) {
          if (yt(V)) return;
          logError(V);
        }
      },
    };
  }
  return;
}
function Pi(w, I) {
  if (I.length > 0)
    w.messages.push(
      createUserMessage({
        content: I.map((O) => ({ type: "text", text: O })),
        isMeta: !0,
        turnCompanion: !0,
      }),
    );
  return w;
}
function Ec(w, I) {
  if (I.type === "content_block_start") return { estimate: 0, emission: null };
  if (I.type !== "content_block_delta") return { estimate: w, emission: null };
  let { delta: O } = I;
  if (O.type === "thinking_delta") {
    let U;
    if ("estimated_tokens" in O && typeof O.estimated_tokens === "number")
      U = O.estimated_tokens;
    else if (typeof O.thinking === "string" && O.thinking.length > 0)
      U = estimateTokensFromText(O.thinking);
    if (U === void 0) return { estimate: w, emission: null };
    let V = w + U;
    return {
      estimate: V,
      emission: { estimatedTokens: V, estimatedTokensDelta: U },
    };
  }
  if (O.type === "signature_delta" && w > 0) {
    let U = Math.ceil(estimateTokensFromCharCount(O.signature.length) / 4);
    if (U > w)
      return {
        estimate: U,
        emission: { estimatedTokens: U, estimatedTokensDelta: U - w },
      };
  }
  return { estimate: w, emission: null };
}
var Lo = { level: "verbose" },
  Iy = 1000,
  Dy = [za, Va];
function getInterruptScopeForOrigin(w) {
  return w === "remote" ? void 0 : { scope: "turn-cancel" };
}
var Oy = () => ({ effective: {}, sources: [] });
async function* Ly(w, I, O) {
  let U = I.messages.filter((Me) => Me.uuid !== w.messageUuid),
    { messages: V } = await processUserInput({
      input: w.text,
      mode: "prompt",
      context: {
        ...I.toolUseContext,
        abortController: O,
        messages: U,
        canUseTool: I.canUseTool,
        setMessages: () => {},
        applyMessageOp: () => {},
        onChangeAPIKey: () => {},
        options: {
          ...I.toolUseContext.options,
          ideInstallationStatus: null,
          theme: "dark",
        },
      },
      messages: U,
      querySource: I.querySource,
    }),
    ne = V.find(isCompactBoundaryMessage)?.compactMetadata.preservedMessages,
    me = new Set(ne?.allUuids ?? ne?.uuids ?? []);
  for (let Me of V) if (!me.has(Me.uuid)) yield Me;
  return { reason: "completed" };
}
function createSdkEngine({
  run: w,
  queryParams: I,
  commands: O = [],
  models: U = [],
  unavailableModels: V = [],
  agents: te = [],
  account: ne = {},
  outputStyle: me,
  availableOutputStyles: Me,
  mcpServers: Se = () => [],
  mcpDelegate: xe,
  excludeDynamicSections: De,
  settings: Oe = Oy(),
  authDelegate: Ae,
  mcpAuthDelegate: $e,
  ambient: We,
  tools: Ye = [],
  skills: Ze = [],
  plugins: Nt = [],
  pluginErrors: at = [],
  pluginWarnings: zt = [],
  mcpServerErrors: Qt = [],
  initialModel: dn,
  initialPermissionMode: ro,
  fastModeState: lo,
  fastModeDisabledReason: to,
  hostOwnsPermissionMode: Tt = !1,
  hostOwnsModel: Un = !1,
  sdkResultVerdict: yn = !1,
  onCommandLifecycle: on,
  onTurnThrow: $n,
}) {
  let Kt = mc({
      commands: typeof O === "function" ? O() : O,
      models: typeof U === "function" ? U() : U,
      unavailableModels: typeof V === "function" ? V() : V,
      agents: typeof te === "function" ? te() : te,
      account: ne,
      outputStyle: me,
      availableOutputStyles: Me,
    }),
    Hn = new AsyncQueue(),
    Zt = [],
    $t = null,
    At = 0,
    Mn = null,
    rn = null,
    Lt = null,
    an = null,
    Tn = null,
    en = K(),
    kn = getCurrentSdkQueueKey();
  if (kn !== en && kn !== DEFAULT_SDK_QUEUE_KEY)
    logForDebugging(
      `[engine] sdkEventQueue push key '${kn}' \u2260 engine sessionId '${en}' \u2014 host ALS wiring likely incorrect; enqueued SdkEvents will not drain here`,
    );
  let It = (Ke) => ({
      ...Ke,
      session_id: en,
      uuid: "uuid" in Ke && typeof Ke.uuid === "string" ? Ke.uuid : My(),
    }),
    cn = (Ke) => (typeof Ke === "function" ? Ke() : Ke),
    ln = () => {
      let Ke = cn(We);
      if (!Ke) return null;
      let ze = typeof O === "function" ? O() : O,
        ft = typeof te === "function" ? te() : te;
      return buildSystemInitMessage({
        ...Ke,
        sessionId: en,
        tools: Ye,
        mcpClients: Se().map((vt) => ({ name: vt.name, type: vt.status })),
        model: rn ?? cn(dn) ?? "",
        permissionMode: Lt ?? cn(ro) ?? "default",
        commands: ze,
        agents: ft.map((vt) => ({ agentType: vt.name })),
        skills: Ze,
        plugins: Nt,
        pluginErrors: at,
        pluginWarnings: zt,
        mcpServerErrors: Qt,
        fastModeState: cn(lo) ?? "off",
        fastModeDisabledReason: cn(to),
        capabilities: Dy,
      });
    },
    et = !1,
    tt = 0,
    He = null,
    Qe = !1,
    Je = createFileStateCache(FILE_STATE_MAX_ENTRIES),
    Ot = [],
    nn = !1,
    Fn = [],
    Jo = !1,
    Oo = (Ke) => {
      if (Ot.length >= Iy) {
        if ((Ot.shift(), !nn))
          ((nn = !0),
            logError(
              Error(
                "[engine] pendingDenialFrames buffer is full; dropping oldest permission_denied advisory frames",
              ),
            ));
      }
      Ot.push(Ke);
    };
  function* Mr() {
    while (Ot.length > 0) {
      let Ke = Ot.shift();
      (logForDebugging(`[engine] yield ${Ke.type}/${Ke.subtype}`, Lo), yield It(Ke));
    }
  }
  let Ro = [];
  function Go(Ke, ze) {
    try {
      on?.(Ke, ze);
    } catch (ft) {
      logError(ft);
    }
  }
  function Ar(Ke) {
    try {
      $n?.({ error: Ke });
    } catch (ze) {
      logError(ze);
    }
  }
  function mr(Ke, ze) {
    return (
      Go(Ke, ze),
      { type: "command_lifecycle", command_uuid: Ke, state: ze }
    );
  }
  function* hs() {
    while (Ro.length > 0) {
      let Ke = Ro.shift();
      (logForDebugging(`[engine] yield command_lifecycle/${Ke.state}`, Lo), yield It(Ke));
    }
  }
  function* Ko() {
    (yield* Mr(), yield* hs());
    for (let Ke of drainSdkEventsForSession(en))
      (logForDebugging(`[engine] yield sdk-queue system/${Ke.subtype}`, Lo), yield It(Ke));
  }
  function* Ir() {
    while (Fn.length > 0)
      yield applyUsageToResultMessage(Fn.shift(), {
        totalCostUsd: su(),
        durationApiMs: oE(),
        modelUsage: jw(),
        usage: Ri(),
        subagentStats: getSubagentStats(He?.toolUseContext?.session),
      });
  }
  let Ss = () => {
    if (!Jo) return !1;
    let Ke = He?.toolUseContext?.getAppState;
    return Ke !== void 0 && getRunningTasks(Ke()).some((ze) => isLocalAgentOrWorkflow(ze) && isLiveBackgroundTask(ze));
  };
  async function* _s() {
    et = !1;
    let Ke = ln();
    if (Ke) (logForDebugging("[engine] yield system/init (first)"), yield It(Ke));
    for await (let ze of Hn) {
      if (et) {
        et = !1;
        let Yt = ln();
        if (Yt) (logForDebugging("[engine] yield system/init (re-emit)"), yield It(Yt));
      }
      (yield* Ko(), rearmFastModeCreditsNotice());
      let ft = performance.now(),
        vt = {
          parent_tool_use_id: ze.parent_tool_use_id,
          priority: ze.priority,
          shouldQuery: ze.shouldQuery,
          timestamp: ze.timestamp,
        },
        Bt;
      try {
        Bt = await I(ze);
      } catch (Yt) {
        (logError(Yt), Ar(Yt), Zt.shift(), yield* Ko());
        let Ne = {
            ...buildResultMessage({
              startedAt: ft,
              common: {
                is_error: !0,
                duration_api_ms: 0,
                num_turns: 0,
                stop_reason: null,
                session_id: en,
                total_cost_usd: su(),
                usage: Ri(),
                modelUsage: jw(),
                permission_denials: [],
                terminal_reason: "turn_setup_failed",
                fast_mode_state: cn(lo),
                fast_mode_disabled_reason: cn(to),
                origin: ze.origin,
                subagent_stats: getSubagentStats(He?.toolUseContext?.session),
              },
              variant: {
                subtype: "error_during_execution",
                errors: [`queryParams builder failed: ${l(Yt)}`],
                user_message_uuid: void 0,
              },
            }),
            ...vt,
          },
          Ct = ze.uuid !== void 0 ? mr(ze.uuid, "cancelled") : void 0;
        if (Ss()) Fn.push(Ne);
        else (yield* Ir(), yield Ne);
        if (Ct) yield It(Ct);
        continue;
      }
      (At++, (He = Bt));
      let En = new AbortController();
      if (((Mn = En), Zt.shift(), ze.uuid !== void 0))
        (Ro.push(mr(ze.uuid, "started")), ($t = ze.uuid));
      let Rn = Bt.toolUseContext?.abortController?.signal,
        no = () => En.abort(Rn?.reason);
      if (Rn?.aborted) En.abort(Rn.reason);
      else Rn?.addEventListener("abort", no, { once: !0 });
      let co = Bt.toolUseContext?.abortController,
        fn = () => {
          if (
            unwrapAbortReason(En.signal.reason) === "refusal-fallback-edit" &&
            co &&
            !co.signal.aborted
          )
            co.abort(En.signal.reason);
        };
      (En.signal.addEventListener("abort", fn, { once: !0 }),
        logForDebugging(`[engine] turn ${At} start`));
      let xr = [],
        Wr = (Yt, Ne, Ct) => {
          if (xr.some((In) => In.tool_use_id === Ne)) return;
          xr.push({ tool_name: getReportedToolName(Yt.name), tool_use_id: Ne, tool_input: Ct });
        },
        Cs = Bt.canUseTool,
        ks = async (Yt, Ne, Ct, In, Mo, ko) => {
          let qn = await Cs(Yt, Ne, Ct, In, Mo, ko);
          if (isRecordableDenial(qn, ko)) Wr(Yt, Mo, Ne);
          if (qn.behavior === "deny" && isPreAskDeny(qn))
            Oo({
              type: "system",
              subtype: "permission_denied",
              tool_name: Yt.name,
              tool_use_id: Mo,
              agent_id: Ct.agentId,
              decision_reason_type: qn.decisionReason?.type,
              decision_reason: getDecisionReasonText(qn.decisionReason),
              message: qn.message,
            });
          return qn;
        };
      if (Je.size > 0 && Bt.toolUseContext?.readFileState) {
        for (let [Yt, Ne] of Je.entries()) {
          let Ct = Bt.toolUseContext.readFileState.get(Yt);
          if (!Ct || Ne.timestamp > Ct.timestamp)
            Bt.toolUseContext.readFileState.set(Yt, Ne);
        }
        Je.clear();
      }
      let gr = Bt.engineDeferredSlash
          ? Ly(Bt.engineDeferredSlash, Bt, En)
          : w({
              ...Bt,
              canUseTool: ks,
              keepPartialMessageOnAbort: !0,
              toolUseContext: {
                ...Bt.toolUseContext,
                abortController: En,
                onPermissionDenial: Wr,
                permissionLayers:
                  (!Un && rn !== null) ||
                  (!Tt && Lt !== null) ||
                  an !== null ||
                  Tn !== null
                    ? [
                        ...(Bt.toolUseContext?.permissionLayers ?? []),
                        ...(!Un && rn !== null
                          ? [{ kind: "model", mainLoopModel: rn }]
                          : []),
                        ...(!Tt && Lt !== null
                          ? [{ kind: "permission_mode", mode: Lt }]
                          : []),
                        ...(an !== null
                          ? [
                              {
                                kind: "max_thinking_tokens",
                                maxThinkingTokens: an,
                              },
                            ]
                          : []),
                        ...(Tn !== null
                          ? [{ kind: "flag_settings", settings: Tn }]
                          : []),
                      ]
                    : Bt.toolUseContext?.permissionLayers,
              },
            }),
        Gn = null,
        ws = !1,
        Dr = Bt.engineDeferredSlash ? 0 : 1,
        zo = null,
        Zo = [],
        yr,
        nr = "",
        or = !1,
        Fr = null,
        Vr = "",
        hr = [],
        Es = new Set(),
        Jr = null,
        Lr,
        go = Bt.toolUseContext?.options?.maxBudgetUsd,
        ni = getInMemoryErrors().at(-1),
        gn;
      try {
        let Yt = await gr.next();
        while (!Yt.done) {
          let Ne = Yt.value;
          if (Ne.type === "user") {
            if (!Bt.engineDeferredSlash) Dr++;
            (Zo.push(Ne), (nr = ""), (or = !1), (Fr = null), (Vr = ""));
          } else if (Ne.type === "tombstone") {
            {
              let Ct = Ne.message?.uuid,
                In =
                  Ct !== void 0
                    ? Zo.findLastIndex((Mo) => Mo.uuid === Ct)
                    : Zo.length - 1;
              if (In >= 0) Zo.splice(In, 1);
            }
            {
              let Ct = Ne.message;
              if (Ct?.type === "assistant") {
                let In = Ct.message.content,
                  Mo = Array.isArray(In)
                    ? In.flatMap((ko) =>
                        ko.type === "tool_use" && ko.name === STRUCTURED_OUTPUT_TOOL_NAME ? [ko.id] : [],
                      )
                    : [];
                if (Mo.length > 0) {
                  for (let qn of Mo) Es.add(qn);
                  let ko = (qn) =>
                    qn.toolUseID === void 0 || Mo.includes(qn.toolUseID);
                  hr = hr.filter((qn) => !ko(qn));
                }
              }
            }
            ((nr = ""), (or = !1), (Fr = null), (Vr = ""));
          } else if (Ne.type === "assistant") {
            if (
              ((Jr ??= performance.now()),
              Zo.push(Ne),
              Ne.message.stop_reason != null)
            )
              zo = Ne.message.stop_reason;
            ((or = Ne.isApiErrorMessage === !0),
              (Fr = Ne.apiErrorStatus ?? null));
            let Ct = lastArrayElement(Ne.message.content),
              In = Ct?.type === "text" ? Ct.text : "";
            if (or) ((Vr = NO_CONTENT_MESSAGE_TEXTS.has(In) ? "" : stripMemoryTags(In)), (nr = ""));
            else nr = NO_CONTENT_MESSAGE_TEXTS.has(In) ? "" : stripMemoryTags(In);
          } else if (
            Ne.type === "stream_event" &&
            Ne.event.type === "message_delta" &&
            Ne.event.delta.stop_reason != null
          )
            zo = Ne.event.delta.stop_reason;
          else if (
            Ne.type === "attachment" &&
            Ne.attachment.type === "structured_output"
          ) {
            if (
              !(Ne.attachment.toolUseID !== void 0
                ? Es.has(Ne.attachment.toolUseID)
                : Es.size > 0)
            )
              hr = [
                ...hr,
                {
                  toolUseID: Ne.attachment.toolUseID,
                  data: Ne.attachment.data,
                },
              ];
          } else if (
            Ne.type === "attachment" &&
            Ne.attachment.type === "max_turns_reached"
          )
            yr = {
              turnCount: Ne.attachment.turnCount,
              maxTurns: Ne.attachment.maxTurns,
            };
          else if (
            Ne.type === "attachment" &&
            Ne.attachment.type === "hook_deferred_tool"
          )
            Lr = {
              id: Ne.attachment.toolUseID,
              name: Ne.attachment.toolName,
              input: Ne.attachment.toolInput,
            };
          if (Ot.length > 0) yield* Mr();
          if (Ro.length > 0) yield* hs();
          if (Ne.type === "stream_event") {
            let Ct = Ec(tt, Ne.event);
            if (((tt = Ct.estimate), Ct.emission))
              (yield It({
                type: "system",
                subtype: "thinking_tokens",
                estimated_tokens: Ct.emission.estimatedTokens,
                estimated_tokens_delta: Ct.emission.estimatedTokensDelta,
              }),
                logForDebugging("[engine] yield-twin system/thinking_tokens", Lo));
          }
          if (
            (logForDebugging(
              `[engine] yield ${Ne.type}/${"subtype" in Ne ? Ne.subtype : "-"}`,
              Lo,
            ),
            Ne.type === "command_lifecycle")
          )
            yield It(mr(Ne.uuid, Ne.state));
          else if (Ne.type === "notification") {
            let Ct = Ne.notification;
            yield It({
              type: "system",
              subtype: "notification",
              key: Ct.key,
              text: Ct.text,
              priority: Ct.priority,
              ...(Ct.color !== void 0 && { color: Ct.color }),
              ...(Ct.timeoutMs !== void 0 && { timeout_ms: Ct.timeoutMs }),
            });
          } else if (Ne.type === "sdk_status")
            yield It({
              type: "system",
              subtype: "status",
              status: Ne.status,
              ...(Ne.metadata?.compactResult !== void 0 && {
                compact_result: Ne.metadata.compactResult,
              }),
              ...(Ne.metadata?.compactError !== void 0 && {
                compact_error: Ne.metadata.compactError,
              }),
            });
          else if (Ne.type === "stream_request_start")
            yield It({
              type: "system",
              subtype: "status",
              status: "requesting",
            });
          else if (Ne.type === "system" && Ne.subtype === "compact_boundary")
            yield It({
              type: "system",
              subtype: "compact_boundary",
              uuid: Ne.uuid,
              compact_metadata: serializeCompactMetadata(Ne.compactMetadata),
              ...(Ne.logicalParentUuid !== void 0 && {
                logical_parent_uuid: Ne.logicalParentUuid,
              }),
            });
          else if (
            Ne.type === "system" &&
            Ne.subtype === "model_refusal_fallback"
          )
            yield It({
              type: "system",
              subtype: "model_refusal_fallback",
              uuid: Ne.uuid,
              trigger: Ne.trigger,
              direction: Ne.direction,
              ...(Ne.scope !== void 0 && { scope: Ne.scope }),
              original_model: Ne.originalModel,
              fallback_model: Ne.fallbackModel,
              request_id: Ne.requestId,
              api_refusal_category: Ne.apiRefusalCategory ?? null,
              api_refusal_explanation: Ne.apiRefusalExplanation ?? null,
              ...(Ne.retractedMessageUuids !== void 0 && {
                retracted_message_uuids: Ne.retractedMessageUuids,
              }),
              refused_user_message_uuid: Ne.refusedUserMessageUuid ?? null,
              content: Ne.content,
              ...(Ne.sawCyberRefusal && { saw_cyber_refusal: !0 }),
              ...(Ne.provisional && { provisional: Ne.provisional }),
            });
          else if (
            Ne.type === "system" &&
            Ne.subtype === "model_refusal_no_fallback"
          )
            yield It({
              type: "system",
              subtype: "model_refusal_no_fallback",
              uuid: Ne.uuid,
              original_model: Ne.originalModel,
              request_id: Ne.requestId,
              api_refusal_category: Ne.apiRefusalCategory ?? null,
              api_refusal_explanation: Ne.apiRefusalExplanation ?? null,
              refused_user_message_uuid: Ne.refusedUserMessageUuid ?? null,
              content: Ne.content,
            });
          else if (Ne.type === "system" && Ne.subtype === "model_fallback")
            yield It({
              type: "system",
              subtype: "model_fallback",
              uuid: Ne.uuid,
              trigger: Ne.trigger,
              original_model: Ne.originalModel,
              fallback_model: Ne.fallbackModel,
              content: Ne.content,
            });
          else if (
            Ne.type === "system" &&
            Ne.subtype === "model_consent_fallback"
          )
            yield It({ ...serializeModelConsentFallbackMessage(Ne), uuid: Ne.uuid });
          else if (Ne.type === "tool_use_summary")
            yield It({ ...createToolUseSummaryMessage(Ne), uuid: Ne.uuid });
          else if (Ne.type === "system" && Ne.subtype === "read_divider");
          else yield It(Ne);
          if (Ne.type === "system" && Ne.subtype === "api_error")
            yield It({
              type: "system",
              subtype: "api_retry",
              attempt: Ne.retryAttempt,
              max_retries: Ne.maxRetries,
              retry_delay_ms: Ne.retryInMs,
              error_status: Ne.error.status ?? null,
              error: classifyStatusCodeError(Ne.error),
              ...(Ne.error.noResponse && {
                no_response: {
                  waited_ms: Ne.error.noResponse.waitedMs,
                  retry_wait_ms: Ne.error.noResponse.retryWaitMs,
                },
              }),
            });
          if (
            Ne.type === "attachment" &&
            Ne.attachment.type === "relevant_memories"
          ) {
            let Ct = fc(Ne.attachment.memories);
            if (Ct) {
              let { uuid: In, session_id: Mo, ...ko } = Ct;
              yield It(ko);
            }
          }
          if (
            Ne.type === "system" &&
            Ne.subtype === "local_command" &&
            typeof Ne.content === "string" &&
            (Ne.content.includes(`<${LOCAL_COMMAND_STDOUT_TAG}>`) || Ne.content.includes(`<${LOCAL_COMMAND_STDERR_TAG}>`))
          ) {
            let Ct = createLocalCommandOutputMessage(Ne.content, Ne.uuid, Ne.timestamp, Ne.contextUsage);
            if (Ct)
              (yield It(Ct),
                logForDebugging("[engine] yield-twin assistant (local_command)", Lo));
          }
          if (
            Ne.type === "progress" &&
            (Ne.data.type === "bash_progress" ||
              Ne.data.type === "powershell_progress")
          )
            (yield It({
              type: "tool_progress",
              tool_use_id: Ne.toolUseID,
              tool_name: Ne.data.type === "bash_progress" ? BASH_TOOL_NAME : POWERSHELL_TOOL_NAME,
              parent_tool_use_id: Ne.parentToolUseID || null,
              elapsed_time_seconds: Ne.data.elapsedTimeSeconds,
              task_id: Ne.data.taskId,
            }),
              logForDebugging("[engine] yield-twin tool_progress", Lo));
          if (Ne.type === "progress" && Ne.data.type === "repl_tool_call")
            (yield It({
              type: "tool_progress",
              tool_use_id: Ne.toolUseID,
              tool_name: REPL_TOOL_NAME,
              parent_tool_use_id: Ne.parentToolUseID || null,
              elapsed_time_seconds: 0,
              repl_call: {
                inner_tool_name: Ne.data.toolName,
                inner_tool_input: Ne.data.toolInput,
                inner_tool_use_id: Ne.data.toolUseId,
                phase: Ne.data.phase,
              },
            }),
              logForDebugging("[engine] yield-twin tool_progress repl_call", Lo));
          if (Ne.type === "progress" && Ne.data.type === "tool_heartbeat")
            (yield It({
              type: "tool_progress",
              tool_use_id: Ne.toolUseID,
              tool_name: Ne.data.toolName,
              parent_tool_use_id: Ne.parentToolUseID || null,
              elapsed_time_seconds: Ne.data.elapsedTimeSeconds,
              heartbeat: !0,
            }),
              logForDebugging("[engine] yield-twin tool_progress heartbeat", Lo));
          if (Ne.type === "progress" && Ne.data.type === "agent_api_retry")
            (yield It({
              type: "tool_progress",
              tool_use_id: Ne.toolUseID,
              tool_name: AGENT_TOOL_NAME,
              parent_tool_use_id: Ne.parentToolUseID || null,
              elapsed_time_seconds: 0,
              subagent_type: Ne.data.agentType,
              ...(Ne.data.resolved !== !0 && {
                subagent_retry: {
                  agent_id: Ne.data.agentId,
                  attempt: Ne.data.attempt,
                  max_retries: Ne.data.maxRetries,
                  retry_delay_ms: Ne.data.retryDelayMs,
                  error_status: Ne.data.errorStatus ?? null,
                  error_category: Ne.data.errorCategory,
                },
              }),
            }),
              logForDebugging("[engine] yield-twin tool_progress subagent_retry", Lo));
          for (let Ct of drainSdkEventsForSession(en))
            (logForDebugging(`[engine] yield sdk-queue system/${Ct.subtype}`, Lo),
              yield It(Ct));
          if (
            yr === void 0 &&
            Ne.type !== "sdk_status" &&
            Ne.type !== "compact_progress" &&
            Ne.type !== "stream_mode" &&
            Ne.type !== "response_length" &&
            hasReachedMaxBudget(go)
          ) {
            gn = "budget_exhausted";
            break;
          }
          Yt = await gr.next();
        }
        if ((logFeatureOk("shoji_engine"), Yt.done))
          gn = Yt.value ? Yt.value.reason : void 0;
      } catch (Yt) {
        ((Gn = l(Yt)), Ar(Yt));
      } finally {
        ((ws = En.signal.aborted),
          await gr.return(void 0).catch(() => {}),
          Rn?.removeEventListener("abort", no),
          En.signal.removeEventListener("abort", fn));
        let Yt = Ri();
        logForDebugging(
          `[engine] turn ${At} end (turns=${Dr} usage in=${Yt.input_tokens} out=${Yt.output_tokens} cost=$${su().toFixed(4)} api=${oE()}ms stop=${zo} resultLen=${nr.length})`,
        );
      }
      let Rs = Zo.at(-1) ?? { type: "user", message: ze.message },
        _r = yn ? Bt.engineDeferredSlash === void 0 : isAbortTerminalReason(gn),
        rr =
          Gn !== null
            ? [Gn]
            : _r && Lr === void 0 && !hasDisplayableContent(Rs, zo)
              ? buildResultDiagnostics(Rs, zo, ni)
              : null,
        Ur = or ? Vr : nr;
      if (Ur === "") {
        let Yt = hr.at(-1)?.data;
        if (Yt !== void 0) Ur = JSON.stringify(Yt);
      }
      let Nr = {
          duration_api_ms: oE(),
          stop_reason: zo,
          session_id: en,
          total_cost_usd: su(),
          usage: Ri(),
          modelUsage: jw(),
          permission_denials: xr,
          terminal_reason: gn,
          fast_mode_state: cn(lo),
          fast_mode_disabled_reason: cn(to),
          origin: ze.origin,
          subagent_stats: getSubagentStats(Bt.toolUseContext?.session),
        },
        oi =
          gn === "budget_exhausted"
            ? {
                ...buildResultMessage({
                  startedAt: ft,
                  common: { ...Nr, is_error: !0, num_turns: Dr },
                  variant: {
                    subtype: "error_max_budget_usd",
                    errors: [formatMaxBudgetError(go)],
                    user_message_uuid: void 0,
                  },
                }),
                ...vt,
              }
            : Gn === null && Lr === void 0 && yr
              ? {
                  ...buildResultMessage({
                    startedAt: ft,
                    common: { ...Nr, is_error: !0, num_turns: yr.turnCount },
                    variant: {
                      subtype: "error_max_turns",
                      errors: [
                        `Reached maximum number of turns (${yr.maxTurns})`,
                      ],
                      user_message_uuid: void 0,
                    },
                  }),
                  ...vt,
                }
              : rr !== null
                ? {
                    ...buildResultMessage({
                      startedAt: ft,
                      common: { ...Nr, is_error: !0, num_turns: Dr },
                      variant: {
                        subtype: "error_during_execution",
                        errors: rr,
                        user_message_uuid: void 0,
                      },
                    }),
                    ...vt,
                  }
                : {
                    ...buildResultMessage({
                      startedAt: ft,
                      common: {
                        ...Nr,
                        ...(Lr !== void 0 && { stop_reason: "tool_deferred" }),
                        is_error: or,
                        num_turns: Dr,
                      },
                      variant: {
                        subtype: "success",
                        api_error_status: Fr,
                        result: Ur,
                        structured_output: hr.at(-1)?.data,
                        ttft_ms:
                          !or && Jr !== null
                            ? Math.max(0, Math.round(Jr - ft))
                            : void 0,
                        deferred_tool_use: Lr,
                      },
                    }),
                    ...vt,
                  },
        Qr;
      if (ze.uuid !== void 0)
        ((Qr = mr(ze.uuid, Gn !== null ? "cancelled" : getTerminalLifecycleState(gn, ws))),
          ($t = null));
      if ((yield* Ko(), Ss())) Fn.push(oi);
      else (yield* Ir(), yield oi);
      if (Qr) yield It(Qr);
    }
    while (Fn.length > 0 && !Mn?.signal.aborted && Ss())
      (yield* Ko(), await sleep(100));
    if (
      Fn.length > 0 &&
      Mn?.signal.aborted &&
      He?.toolUseContext?.taskRegistry
    ) {
      let {
        taskRegistry: ze,
        setAppState: ft,
        storageV5: vt,
      } = He.toolUseContext;
      stopAllRunningTasks({ taskRegistry: ze, setAppState: ft, storageV5: vt });
    }
    (await flushPendingBackgroundWork(), yield* Ko(), yield* Ir());
  }
  async function* Qs() {
    try {
      yield* _s();
    } finally {
      if ($t !== null) (Go($t, "cancelled"), ($t = null));
      for (let Ke of Zt) if (Ke.uuid !== void 0) Go(Ke.uuid, "discarded");
      Zt.length = 0;
    }
  }
  function Wo(Ke) {
    switch (Ke.type) {
      case "turn":
        if (Jo) {
          logForDebugging("[engine] dropped turn intent received after close()", {
            level: "warn",
          });
          break;
        }
        if ((Zt.push(Ke), Ke.uuid !== void 0)) Ro.push(mr(Ke.uuid, "queued"));
        Hn.enqueue(Ke);
        break;
      case "interrupt": {
        if (
          (Mn?.abort(
            Ke.reason !== void 0
              ? new DOMException(Ke.reason, "AbortError")
              : void 0,
          ),
          Ke.scope !== "turn-cancel")
        ) {
          let ze = He?.toolUseContext?.taskRegistry,
            ft = 0;
          if (He?.toolUseContext !== void 0 && ze !== void 0) {
            ft = killAutoReactSubscriptions(ze, { durable: !1 });
            let { setAppState: Bt } = He.toolUseContext;
            stopAllObserverTasks({ taskRegistry: ze, setAppState: Bt });
          }
          let vt = drainAutoReactNotifications(getCommandQueueInstance(), { leaveArtifactRooms: !0 });
          emitAutoReactStopNotification(ft, vt);
        }
        break;
      }
      case "set_model":
        ((rn = Ke.model ?? null),
          (et = !0),
          logForDebugging(`[engine] send set_model model=${Ke.model}`));
        break;
      case "set_permission_mode": {
        let ze = parsePermissionMode(Ke.mode);
        if (ze === void 0) {
          logForDebugging("[engine] set_permission_mode rejected \u2014 unrecognized mode");
          break;
        }
        if (ze === "bypassPermissions" && isBypassPermissionsModeDisabled()) {
          logForDebugging(
            "[engine] set_permission_mode:bypassPermissions rejected \u2014 disabled by settings",
          );
          break;
        }
        if (ze === "auto" && !isAutoModeGateEnabled()) {
          logForDebugging(
            "[engine] set_permission_mode:auto rejected \u2014 gate not enabled",
          );
          break;
        }
        ((Lt = ze), (et = !0));
        break;
      }
      case "set_max_thinking_tokens":
        ((an = Ke.max_thinking_tokens),
          logForDebugging(
            `[engine] send set_max_thinking_tokens max=${Ke.max_thinking_tokens}`,
          ));
        break;
      case "apply_flag_settings":
        ((Tn = { ...(Tn ?? {}), ...Ke.settings }),
          logForDebugging(
            `[engine] send apply_flag_settings keys=${Object.keys(Ke.settings).join(",")}`,
          ));
        break;
      case "seed_read_state":
        (Je.set(Ke.path, Ke.seed),
          logForDebugging(`[engine] send seed_read_state path=${Ke.path}`));
        break;
    }
  }
  function fr() {
    ((Jo = !0), Hn.done());
  }
  let vo = Qs(),
    Zs = vo.return.bind(vo),
    bs = vo.throw.bind(vo);
  return (
    (vo.return = (Ke) => (fr(), Zs(Ke))),
    (vo.throw = (Ke) => (fr(), bs(Ke))),
    Object.assign(vo, {
      interrupt: async (Ke, ze) => (
        Wo({ type: "interrupt", reason: Ke, scope: ze?.scope }),
        {
          still_queued: Zt.flatMap((ft) =>
            ft.uuid !== void 0 ? [ft.uuid] : [],
          ),
        }
      ),
      setModel: async (Ke) => Wo({ type: "set_model", model: Ke }),
      setPermissionMode: async (Ke) =>
        Wo({ type: "set_permission_mode", mode: Ke }),
      setMaxThinkingTokens: async (Ke) =>
        Wo({ type: "set_max_thinking_tokens", max_thinking_tokens: Ke }),
      applyFlagSettings: (Ke) => (
        Wo({ type: "apply_flag_settings", settings: Ke }),
        Promise.resolve()
      ),
      seedReadState: async (Ke, ze, ft) => {
        try {
          let vt = resolvePath(Ke);
          if (ft !== void 0) {
            if (ft.length <= 10485760)
              Wo({
                type: "seed_read_state",
                path: vt,
                seed: {
                  content: normalizeFileContent(ft),
                  timestamp: ze,
                  offset: void 0,
                  limit: void 0,
                  contentNotInModelContext: !0,
                },
              });
            return;
          }
          let Bt = await Ty(vt);
          if (Bt.size > 10485760) return;
          let En = Math.floor(Bt.mtimeMs);
          if (En <= ze) {
            let Rn = await Ay(vt, "utf-8"),
              no = normalizeFileContent(Rn);
            Wo({
              type: "seed_read_state",
              path: vt,
              seed: {
                content: no,
                timestamp: En,
                offset: void 0,
                limit: void 0,
                contentNotInModelContext: !0,
              },
            });
          }
        } catch {}
      },
      turnCount: () => At,
      initializationResult: () => Promise.resolve(Kt),
      accountInfo: () => Promise.resolve(Kt.account),
      claudeAuthenticate: async (Ke) => {
        if (!Ae) throw Error("claudeAuthenticate: no authDelegate wired");
        return Ae.authenticate(Ke);
      },
      claudeOAuthCallback: async (Ke, ze) => {
        if (!Ae) throw Error("claudeOAuthCallback: no authDelegate wired");
        return Ae.oauthCallback(Ke, ze);
      },
      claudeOAuthWaitForCompletion: async () => {
        if (!Ae)
          throw Error("claudeOAuthWaitForCompletion: no authDelegate wired");
        return Ae.oauthWaitForCompletion();
      },
      supportedModels: () =>
        Promise.resolve(typeof U === "function" ? U() : Kt.models),
      supportedCommands: () =>
        Promise.resolve(typeof O === "function" ? O() : Kt.commands),
      supportedAgents: () =>
        Promise.resolve(typeof te === "function" ? te() : Kt.agents),
      mcpServerStatus: () => Promise.resolve(Se()),
      reconnectMcpServer: async (Ke) => {
        if (!xe)
          throw Error(
            `reconnectMcpServer: no mcpDelegate wired (server: ${Ke})`,
          );
        await xe.reconnect(Ke);
      },
      toggleMcpServer: async (Ke, ze) => {
        if (!xe)
          throw Error(`toggleMcpServer: no mcpDelegate wired (server: ${Ke})`);
        await xe.toggle(Ke, ze);
      },
      setMcpServers: async (Ke) => {
        if (!xe)
          throw Error(
            `setMcpServers: no mcpDelegate wired (${Object.keys(Ke).length} server(s))`,
          );
        return xe.setServers(Ke);
      },
      reloadPlugins: async () => {
        if (!xe) throw Error("reloadPlugins: no mcpDelegate wired");
        return xe.reloadPlugins();
      },
      mcpAuthenticate: async (Ke, ze) => {
        if (!$e)
          throw Error(
            `mcpAuthenticate: no mcpAuthDelegate wired (server: ${Ke})`,
          );
        return $e.authenticate(Ke, ze);
      },
      mcpClearAuth: async (Ke) => {
        if (!$e)
          throw Error(`mcpClearAuth: no mcpAuthDelegate wired (server: ${Ke})`);
        return $e.clearAuth(Ke);
      },
      mcpSubmitOAuthCallbackUrl: async (Ke, ze) => {
        if (!$e)
          throw Error(
            `mcpSubmitOAuthCallbackUrl: no mcpAuthDelegate wired (server: ${Ke})`,
          );
        return $e.submitOAuthCallbackUrl(Ke, ze);
      },
      getContextUsage: async (Ke) => {
        if (He === null) throw Error("getContextUsage: no turn received yet");
        let { messages: ze, toolUseContext: ft } = He;
        return await collectContextData({
          session: ft.session,
          messages: ze,
          getAppState: ft.getAppState,
          getMcp: ft.getMcp,
          storageV5: ft.storageV5,
          credentials: ft.credentials,
          options: {
            mainLoopModel: ft.options.mainLoopModel,
            tools: ft.options.tools,
            agentDefinitions: ft.options.agentDefinitions,
            customSystemPrompt: ft.options.customSystemPrompt,
            appendSystemPrompt: ft.options.appendSystemPrompt,
            systemPromptSnapshot: ft.options.systemPromptSnapshot,
            excludeDynamicSections: De,
          },
          detail: Ke?.detail,
        });
      },
      stopTask: async (Ke) => {
        if (He === null) throw Error("stopTask: no turn received yet");
        let {
          taskRegistry: ze,
          setAppState: ft,
          getAppState: vt,
          session: Bt,
          storageV5: En,
        } = He.toolUseContext;
        await stopTask(Ke, {
          taskRegistry: ze,
          setAppState: ft,
          session: Bt,
          getAppState: vt,
          source: "user",
          storageV5: En,
        });
      },
      backgroundTasks: async (Ke) => {
        if (areBackgroundTasksDisabled())
          throw (
            logFeatureBad("task_local_shell_background_all", "disabled"),
            Error("Background tasks are disabled in this session.")
          );
        if (He === null) return !Ke;
        let { taskRegistry: ze } = He.toolUseContext;
        if (Ke) return backgroundTaskByToolUseId(Ke, ze);
        return (backgroundAllForegroundTasks(ze), !0);
      },
      getSettings: () => Promise.resolve(Oe),
      generateSessionTitle: async (Ke, ze) => {
        if (ze?.persist) Qe = !0;
        let ft = (Mn && !Mn.signal.aborted ? Mn : new AbortController()).signal,
          vt = await generateSessionTitle(Ke, ft, ze?.credentials);
        if (vt && ze?.persist)
          try {
            saveAiGeneratedTitle(K(), vt, He?.toolUseContext.storageV5);
          } catch (Bt) {
            if (Rt(Bt)) logForDebugging(`saveAiGeneratedTitle failed: ${Bt}`);
            else logError(Bt);
          }
        return vt;
      },
      messageRated: async ({
        messageUuid: Ke,
        sentiment: ze,
        surface: ft = "tool_use",
        cleared: vt = !1,
      }) => {
        if (isPolicyAllowed("allow_product_feedback"))
          logEvent("tengu_message_rated", {
            message_uuid: sanitizeAnalyticsId(Ke),
            sentiment: fromEnum(ze),
            surface: fromEnum(ft),
            cleared: vt,
          });
      },
      askSideQuestion: async (Ke, ze) => {
        let { getLastCacheSafeParams: ft } =
            await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
          vt = ft();
        if (vt === null) return null;
        let { runSideQuestion: Bt } = await import("../权限系统/chunk-qjqc5vxm.js"),
          { createAbortController: En } = await import("../../01-核心基础设施/核心工具-进程与信号/chunk-h3cty6gp.js"),
          Rn = await Bt({
            question: Ke,
            cacheSafeParams: {
              ...vt,
              toolUseContext: { ...vt.toolUseContext, abortController: En() },
            },
            threadHistory: !1,
            ...(ze?.history?.length && {
              history: ze.history.map((no) => ({
                question: no.question,
                response: no.response,
                ...(no.fallback_notice && {
                  fallbackNotice: no.fallback_notice,
                }),
              })),
            }),
          });
        return Rn.response === null
          ? null
          : {
              response: Rn.response,
              synthetic: Rn.synthetic,
              ...(Rn.refusalFallback && {
                refusalFallback: Rn.refusalFallback,
              }),
            };
      },
      rewindFiles: async (Ke, ze) => {
        if (He === null)
          return { canRewind: !1, error: "rewindFiles: no turn received yet" };
        let {
            fileHistoryEnabled: ft,
            fileHistoryCanRestore: vt,
            fileHistoryGetDiffStats: Bt,
            fileHistoryRewind: En,
          } = await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
          Rn = He.toolUseContext.getAppState();
        if (!ft())
          return { canRewind: !1, error: "File rewinding is not enabled." };
        if (!vt(Rn.fileHistory, Ke))
          return {
            canRewind: !1,
            error: "No file checkpoint found for this message.",
          };
        if (ze?.dryRun ?? !1) {
          let co = await Bt(Rn.fileHistory, Ke);
          return {
            canRewind: !0,
            filesChanged: co?.filesChanged,
            insertions: co?.insertions,
            deletions: co?.deletions,
          };
        }
        let no;
        try {
          no = await En(() => Rn.fileHistory, Ke);
        } catch (co) {
          return { canRewind: !1, error: `Failed to rewind: ${l(co)}` };
        }
        return { canRewind: !0, skippedLinks: no?.skippedLinks };
      },
      submitFeedback: async (Ke, ze) => {
        let ft = getFeedbackUnavailableReason();
        if (ft) return { feedback_id: null, unavailable_reason: ft };
        if (ze?.draft_id != null) {
          let { submitDraftFromRequest: Bt } =
            await import("../反馈-错误上报/submitDraftFromRequest.r2aks36d.js");
          return Bt({
            draftId: ze.draft_id,
            description: Ke,
            type: ze.type,
            title: ze.title,
            area: ze.area,
            attachTranscript: ze.attach_transcript,
            surface: ze.surface,
            messages: He?.messages ?? [],
            storageV5: He?.toolUseContext.storageV5,
            credentials: He?.toolUseContext.credentials,
          });
        }
        if (He === null)
          return {
            feedback_id: null,
            unavailable_reason: "no turn received yet",
          };
        let vt = await submitFeedbackPayload({
          messages: He.messages,
          description: Ke,
          surface: ze?.surface ?? "sdk",
          storageV5: He.toolUseContext.storageV5,
          credentials: He.toolUseContext.credentials,
        });
        return vt.success
          ? { feedback_id: vt.feedbackId }
          : {
              feedback_id: null,
              is_zdr_org: vt.isZdrOrg,
              failure_reason: vt.failureReason,
              status_code: vt.statusCode,
            };
      },
      streamInput: async (Ke) => {
        try {
          for await (let ze of Ke) {
            let { type: ft, ...vt } = ze;
            Wo({ type: "turn", ...vt });
          }
        } finally {
          fr();
        }
      },
      readFile: async (Ke, ze) => {
        if (He === null) return null;
        try {
          return await readFileForRemote(
            Ke,
            ze?.maxBytes,
            He.toolUseContext.getAppState().toolPermissionContext,
            ze?.encoding,
          );
        } catch {
          return null;
        }
      },
      launchUltrareview: async (Ke, ze) => {
        if (He === null)
          return {
            status: "error",
            message: "launchUltrareview: no turn received yet",
          };
        let { runUltrareviewHeadless: ft } =
            await import("../代码审查/代码审查.ddrd6y06.js"),
          { createAbortController: vt } = await import("../../01-核心基础设施/核心工具-进程与信号/chunk-h3cty6gp.js"),
          {
            taskRegistry: Bt,
            isUltrareviewOverageConfirmed: En,
            markUltrareviewOverageConfirmed: Rn,
            storageV5: no,
            credentials: co,
          } = He.toolUseContext;
        return await ft(Ke, {
          confirm: ze?.confirm ?? !1,
          overageConfirmed: En(),
          markOverageConfirmed: Rn,
          context: {
            abortController: vt(),
            taskRegistry: Bt,
            storageV5: no,
            credentials: co,
          },
        });
      },
      close: fr,
    })
  );
}
function Ri() {
  let w = Object.values(jw()),
    I = (O) => w.reduce((U, V) => U + O(V), 0);
  return {
    ...ZERO_USAGE_TOTALS,
    input_tokens: I((O) => O.inputTokens),
    output_tokens: I((O) => O.outputTokens),
    output_tokens_details: { thinking_tokens: I((O) => O.thinkingTokens ?? 0) },
    cache_read_input_tokens: I((O) => O.cacheReadInputTokens),
    cache_creation_input_tokens: I((O) => O.cacheCreationInputTokens),
    server_tool_use: {
      ...ZERO_USAGE_TOTALS.server_tool_use,
      web_search_requests: I((O) => O.webSearchRequests),
    },
  };
}
function resolveCommandQueue(w) {
  return isHoverRestEnabled() && w !== void 0
    ? installCommandQueue((I) =>
        createCommandQueue({
          recordOperation: (O) => {
            recordQueueOperation(O, w);
          },
          adopt: I,
        }),
      )
    : getCommandQueueInstance();
}
function shouldForwardStatusUpdate(w) {
  return w !== "requesting" && isBridgeStateFramesEnabled();
}
function Mc() {
  return !isCompactPairWithheldFromRemote() && !isBridgeBindingForeign();
}
function redactCompactError(w) {
  if (
    w.type === "system" &&
    "subtype" in w &&
    w.subtype === "status" &&
    "compact_error" in w &&
    w.compact_error !== void 0 &&
    !Mc()
  )
    return { ...w, compact_error: void 0 };
  return w;
}
function enqueueStatusSdkEvent({
  status: w,
  permissionMode: I,
  compactResult: O,
  compactError: U,
}) {
  try {
    if (!shouldForwardStatusUpdate(w)) return;
    enqueueSdkEvent({
      type: "system",
      subtype: "status",
      status: w,
      ...(I !== void 0 && { permissionMode: I }),
      ...(O !== void 0 && { compact_result: O }),
      ...(U !== void 0 && Mc() && { compact_error: U }),
    });
  } catch (V) {
    logError(V);
  }
}
function enqueueStreamEvent(w) {
  try {
    if (!ic() || !isBridgePartialMessagesEnabled()) return;
    if (isPingEvent(w.event)) return;
    enqueueSdkEvent({
      type: "stream_event",
      event: w.event,
      parent_tool_use_id: null,
      ...(w.ttftMs !== void 0 && { ttft_ms: w.ttftMs }),
    });
  } catch (I) {
    logError(I);
  }
}
var Uy = c({
  status_category: s(),
  status_detail: s(),
  needs_action: s(),
  recent_action: s().optional(),
});
function applyExternalMetadata(w) {
  return (I) => {
    let O = I.toolPermissionContext;
    if (typeof w.permission_mode === "string") {
      let V = parsePermissionModeOrDefault(w.permission_mode);
      if (
        V === "bypassPermissions" &&
        (isBypassPermissionsModeDisabled() || !O.isBypassPermissionsModeAvailable)
      )
        (logForDebugging(
          "[externalMetadataToAppState] Refusing restored mode 'bypassPermissions' (disabled by settings/policy or session not launched with --dangerously-skip-permissions); falling back to 'default'",
          { level: "warn" },
        ),
          (V = "default"));
      try {
        if (((O = { ...transitionPermissionMode(O.mode, V, O), mode: V }), V === "auto")) O = stripDangerousPermissionsForAutoMode(O);
      } catch (te) {
        logForDebugging(
          `[externalMetadataToAppState] transitionPermissionMode rejected restored mode '${V}': ${ge(te).message}`,
        );
      }
    }
    let U = Uy.safeParse(w.post_turn_summary);
    return {
      ...I,
      toolPermissionContext: O,
      ...(typeof w.is_ultraplan_mode === "boolean" && {
        isUltraplanMode: w.is_ultraplan_mode,
      }),
      ...(U.success && { postTurnSummary: U.data }),
    };
  };
}
function applySessionAllowRules(w) {
  let I = w.session_allow_rules;
  if (!Array.isArray(I)) return (U) => U;
  if (isManagedPermissionRulesOnlyEnabled()) return (U) => U;
  let O = I.filter((U) => typeof U === "string" && !U.startsWith("mcp__"));
  if (O.length === 0) return (U) => U;
  return (U) => ({
    ...U,
    toolPermissionContext: {
      ...U.toolPermissionContext,
      alwaysAllowRules: {
        ...U.toolPermissionContext.alwaysAllowRules,
        session: O,
      },
    },
  });
}
function handleAppStateChange({ newState: w, oldState: I }, O, U, V, te) {
  let ne = I.toolPermissionContext.mode,
    me = w.toolPermissionContext.mode,
    Me = w.proactivityLevel !== I.proactivityLevel;
  if (ne !== me) {
    let De = getExternalPermissionMode(ne),
      Oe = getExternalPermissionMode(me);
    if (De !== Oe) {
      let Ae = buildPermissionModeMetadata({
          rule: "first-entry",
          prevMode: ne,
          newMode: me,
          prevUltraplan: I.isUltraplanMode,
          newUltraplan: w.isUltraplanMode,
        }),
        $e = Ae.is_ultraplan_mode;
      if (
        (U?.notifyMetadataChanged(Ae), U?.isWorkerPermissionModeRecordEnabled)
      )
        U.notifyInternalMetadataChanged({ worker_permission_mode: Oe });
      if ((reportBridgePermissionMode(me, $e), !U)) enqueueStatusSdkEvent({ status: null, permissionMode: Oe });
    }
    U?.notifyPermissionModeChanged(me);
  }
  if (ne !== me)
    syncRespawnFlag(
      "--permission-mode",
      ["--inherit-permission-mode"],
      getProactivityAdjustedPermissionMode(me, w.proactivityLevel),
      void 0,
      V,
    );
  if (w.toolPermissionContext !== I.toolPermissionContext) notifyRoomConsentChanged();
  if (
    w.toolPermissionContext.additionalWorkingDirectories !==
      I.toolPermissionContext.additionalWorkingDirectories &&
    publishAdditionalWorkingDirectories(w.toolPermissionContext)
  )
    import("../MCP客户端/mcpClientModule.4cyej0np.js")
      .then((De) => De.mcpClientModule().notifyMcpRootsListChanged())
      .catch((De) => {
        logForDebugging(`Failed to notify MCP servers of roots change: ${ge(De).message}`);
      });
  if (w.tasks !== I.tasks) {
    if (U) {
      let Ae = Tc(I),
        $e = Tc(w);
      if (
        Ae.length !== $e.length ||
        $e.some((We, Ye) => We.task_id !== Ae[Ye]?.task_id)
      )
        U.notifyInternalMetadataChanged({ running_background_tasks: $e });
    }
    let De = Xa(I),
      Oe = Xa(w);
    if (
      De.length !== Oe.length ||
      Oe.some(
        (Ae, $e) =>
          Ae.task_id !== De[$e]?.task_id ||
          Ae.description !== De[$e]?.description ||
          Ae.ambient !== De[$e]?.ambient,
      )
    )
      enqueueSdkEvent({ type: "system", subtype: "background_tasks_changed", tasks: Oe });
  }
  let Se = I.toolPermissionContext.alwaysAllowRules.session,
    xe = w.toolPermissionContext.alwaysAllowRules.session;
  if (Se !== xe) {
    let De = xe?.filter((Oe) => !Oe.startsWith("mcp__"));
    U?.notifyInternalMetadataChanged({
      session_allow_rules: De?.length ? De : null,
    });
  }
  if (
    w.mainLoopModel !== I.mainLoopModel ||
    w.mainLoopModelForSession !== I.mainLoopModelForSession ||
    w.toolPermissionContext.mode !== I.toolPermissionContext.mode
  ) {
    let De = takePendingModelSwitch(O);
    try {
      let Oe = getActiveModelForState(I),
        Ae = getActiveModelForState(w);
      if (Oe !== Ae && !Nn())
        runPostModelSwitchHooks(O, {
          fromModel: Oe,
          toModel: Ae,
          requestedModel: De.requestedModel,
          source: De.source,
        });
    } catch (Oe) {
      logError(ge(Oe));
    }
  }
  if (w.mainLoopModel !== I.mainLoopModel) {
    let De = w.mainLoopModel;
    ad(De);
    let Oe = getMainLoopModel();
    try {
      reportBridgeModel(Oe);
    } catch (Ae) {
      logError(ge(Ae));
    }
    (reportSessionEffort(Oe, w),
      recheckAutoResume(),
      discardPrecomputedCompact(O.precompute, void 0, "model_switch", void 0, V),
      import("../上下文压缩-Compact/chunk-npckj9cm.js").then(({ fetchBootstrapData: Ae }) =>
        Ae(V, te),
      ),
      U?.notifyMetadataChanged({ model: De ?? getDefaultMainLoopModel() }),
      syncRespawnFlag("--model", ["-m"], De, void 0, V));
  }
  if (w.fotwClaim?.phase === "granted" && I.fotwClaim?.phase !== "granted")
    recheckAutoResume();
  if (
    !isSameEffortSelection(w.sessionEffort, I.sessionEffort) ||
    w.settingsEffortTable !== I.settingsEffortTable
  )
    drt({
      sessionEffort: w.sessionEffort,
      settingsEffortTable: w.settingsEffortTable,
    });
  if (!isSameEffortSelection(w.sessionEffort, I.sessionEffort)) {
    (U?.notifyMetadataChanged({
      effort_level:
        w.sessionEffort.kind === "level" ? String(w.sessionEffort.value) : null,
    }),
      reportSessionEffort(getMainLoopModel(), w));
    let De = w.sessionEffort;
    if (De.kind !== "level") syncRespawnFlag("--effort", [], null, void 0, V);
    else if (typeof De.value === "string" && isValidEffortLevel(De.value))
      syncRespawnFlag("--effort", [], De.value, void 0, V);
  }
  if (w.mainLoopModelForSession !== I.mainLoopModelForSession) {
    let De = getMainLoopModel();
    try {
      reportBridgeModel(De);
    } catch (Oe) {
      logError(ge(Oe));
    }
    reportSessionEffort(De, w);
  }
  if (w.advisorModel !== I.advisorModel)
    (mv("advisor"), syncRespawnFlag("--advisor", [], w.advisorModel ?? null, void 0, V));
  if (U && w.frameUrls !== I.frameUrls && isPublishToolEnabled()) {
    let De = getNonOpenedFrameUrlEntries(w.frameUrls).map(([, Oe]) => Oe);
    if (De.length > 0 || getNonOpenedFrameUrlEntries(I.frameUrls).length > 0)
      U.notifyMetadataChanged({
        artifacts:
          De.length === 0
            ? null
            : De.map((Oe) => ({
                url: Oe.url,
                title: Oe.title,
                favicon: Oe.favicon,
                kind: "frame",
                updated_at: new Date(Oe.updatedAt).toISOString(),
              })),
      });
  }
  if (U && !$y(w.activeGoal, I.activeGoal)) {
    let De = w.activeGoal;
    if ((U.notifyActiveGoalChanged(De), De)) {
      let { tokens_at_start: Oe, ...Ae } = serializeActiveGoal(De);
      U.notifyMetadataChanged({
        goal: { ...Ae, last_reason: Ae.last_reason ?? null, met: !1 },
      });
    } else U.notifyMetadataChanged({ goal: null });
  }
  if (
    U &&
    (w.autoCompactWindow !== I.autoCompactWindow ||
      w.mainLoopModel !== I.mainLoopModel ||
      w.mainLoopModelForSession !== I.mainLoopModelForSession ||
      w.settings !== I.settings)
  )
    U.notifyAutocompactInputsChanged();
  if (w.verbose !== I.verbose) saveUserIntentSetting("verbose", w.verbose, V);
  if (w.settings !== I.settings) {
    try {
      if (
        (clearApiKeyHelperCache(), clearAwsCredentialsCache(), resetAwsAuthRefreshCooldown(), clearGcpCredentialsCache(), w.settings.env !== I.settings.env && checkHasTrustDialogAccepted())
      )
        (applyConfigEnvironmentVariables(), captureAdmin3PSteeringSnapshot());
    } catch (De) {
      logForDebugging(
        `Failed to apply settings change (clear auth caches / re-apply env): ${ge(De).message}`,
        { level: "error" },
      );
    }
    if (w.settings.outputStyle !== I.settings.outputStyle)
      (ML().delete(OUTPUT_STYLE_SECTION_NAME), mv("output_style"));
  }
}
function Ny(w, I) {
  if (
    w.type !== "local_bash" &&
    w.type !== "monitor_mcp" &&
    w.type !== "monitor_ws"
  )
    return !1;
  let O = w.agentId !== void 0 ? I[w.agentId] : void 0;
  return O !== void 0 && isObserverAgent(O);
}
function Tc(w) {
  return Object.values(w.tasks)
    .filter(
      (I) =>
        isLiveBackgroundTask(I) &&
        !isObserverAgent(I) &&
        (I.type === "local_bash" ||
          I.type === "monitor_mcp" ||
          I.type === "monitor_ws" ||
          I.type === "local_agent" ||
          I.type === "local_workflow"),
    )
    .map((I) => ({
      task_id: I.id,
      task_type: I.type,
      description: I.description,
      ...((I.type === "local_bash" ||
        I.type === "monitor_mcp" ||
        I.type === "monitor_ws") &&
        I.agentId !== void 0 && { owner_agent_id: I.agentId }),
      ...(I.type === "local_bash" &&
        I.kind !== void 0 && { shell_kind: I.kind }),
      ...(I.type === "monitor_ws" && I.ambient && { ambient: !0 }),
      ...(Ny(I, w.tasks) && { observer_owned: !0 }),
    }));
}
var By = ["condition", "setAt", "iterations", "tokensAtStart", "lastReason"];
function serializeActiveGoal(w) {
  return {
    condition: w.condition,
    iterations: w.iterations,
    set_at: w.setAt,
    tokens_at_start: w.tokensAtStart,
    ...(w.lastReason !== void 0 && { last_reason: w.lastReason }),
  };
}
function $y(w, I) {
  if (w === I) return !0;
  if (w === void 0 || I === void 0) return !1;
  return By.every((O) => w[O] === I[O]);
}
function Xa(w) {
  return Object.values(w.tasks)
    .filter((I) => isLiveBackgroundTask(I) && !isObserverAgent(I))
    .map((I) => ({
      task_id: I.id,
      task_type: I.type,
      description: I.description,
      ...(isAmbientTask(I) && { ambient: !0 }),
    }));
}
function emitBackgroundTasksChanged(w) {
  enqueueSdkEvent({ type: "system", subtype: "background_tasks_changed", tasks: Xa(w) });
}
function handleReplAppStateChange({ newState: w, oldState: I }, O, U, V) {
  if (
    (handleAppStateChange({ newState: w, oldState: I }, O, void 0, U, V),
    w.expandedView !== I.expandedView)
  ) {
    let te = w.expandedView === "tasks";
    saveGlobalConfig((ne) => {
      if (ne.showExpandedTodos === te) return ne;
      return { ...ne, showExpandedTodos: te };
    }, U);
  }
}
import { hostname } from "os";
var Gy = 2,
  Ky = 1e4,
  Vy = 600000,
  Yy = 2592000000;
function Fc() {
  try {
    return hostname();
  } catch {
    return "unknown";
  }
}
function Jy(w) {
  return {
    now: w,
    version: {
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
    host: Fc(),
    platform: getCurrentPlatform(),
    ownPid: process.pid,
    isGone: isProcessProvablyGone,
  };
}
function Ic(w, I) {
  let O = I.stickyStrikes ?? Gy,
    U = { ...w.fullscreenBootPending },
    V = w.fullscreenAutoDisabled,
    te =
      w.fullscreenBootStrikes?.version === I.version
        ? w.fullscreenBootStrikes.count
        : 0;
  if (V && V.version !== I.version) V = void 0;
  let ne = 0,
    me = !1,
    Me = Number.POSITIVE_INFINITY;
  for (let [xe, De] of Object.entries(U)) {
    let Oe = Number(xe);
    if (!Number.isInteger(Oe) || Oe < 1 || typeof De !== "object" || !De) {
      delete U[xe];
      continue;
    }
    let Ae = Math.max(0, I.now - De.startedAt);
    if (De.host !== I.host || De.platform !== I.platform) {
      if (Ae > Yy) delete U[xe];
      continue;
    }
    if (De.died !== void 0 || Oe === I.ownPid || I.isGone(Oe)) {
      if ((delete U[xe], De.version === I.version))
        ((ne += 1), (Me = Math.min(Me, Ae)));
    } else if (Ae > Vy) delete U[xe];
    else me = !0;
  }
  let Se = { kind: "none" };
  if (V) Se = { kind: "disabled" };
  else if (ne > 0) {
    te += ne;
    let xe = Number.isFinite(Me) ? Me : 0;
    if (te >= O)
      ((V = { version: I.version, at: I.now, strikes: te }),
        (Se = {
          kind: "tripped",
          strikes: te,
          newStrikes: ne,
          pendingAgeMs: xe,
        }),
        (te = 0));
    else Se = { kind: "strike", strikes: te, newStrikes: ne, pendingAgeMs: xe };
  } else if (me) Se = { kind: "pending_alive" };
  return {
    next: {
      fullscreenBootPending: Object.keys(U).length > 0 ? U : void 0,
      fullscreenBootStrikes:
        te > 0 ? { count: te, version: I.version } : void 0,
      fullscreenAutoDisabled: V,
    },
    decision: Se,
  };
}
function xc(w, I) {
  let O = (U) =>
    Object.keys(U.fullscreenBootPending ?? {})
      .sort()
      .join(",");
  return (
    O(w) !== O(I) ||
    (w.fullscreenBootStrikes?.count ?? 0) !==
      (I.fullscreenBootStrikes?.count ?? 0) ||
    w.fullscreenBootStrikes?.version !== I.fullscreenBootStrikes?.version ||
    w.fullscreenAutoDisabled?.version !== I.fullscreenAutoDisabled?.version ||
    w.fullscreenAutoDisabled?.at !== I.fullscreenAutoDisabled?.at
  );
}
function hasRecordedFullscreenCrashForVersion() {
  let w = getGlobalConfig();
  return (
    w.fullscreenAutoDisabled?.version ===
      {
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
      }.VERSION ||
    (w.fullscreenBootStrikes?.version ===
      {
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
      }.VERSION &&
      w.fullscreenBootStrikes.count > 0)
  );
}
var Zy = `Claude Code's fullscreen renderer didn't finish starting last time on this machine, so this launch is using the classic renderer. It will try fullscreen again next launch; /tui default keeps the classic renderer.
`,
  eh = `Claude Code's fullscreen renderer has repeatedly failed to start on this machine, so it has been turned off here. Run /tui fullscreen to try it again (this also resets after an update).
`;
function checkFullscreenBootCanary(w) {
  let I = w?.state ?? defaultFullscreenState,
    O = getFullscreenReason(I);
  if (
    O === "env_on" ||
    O === "bg_forced_on" ||
    a.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER
  )
    return { kind: "none" };
  let U = Jy(w?.now ?? Date.now()),
    V = getGlobalConfig(),
    { next: te, decision: ne } = Ic(V, U);
  if (xc(V, te))
    saveGlobalConfig((me) => {
      let Me = Ic(me, U).next;
      return xc(me, Me) ? { ...me, ...Me } : me;
    }, w?.storageV5);
  if (ne.kind === "strike" || ne.kind === "tripped" || ne.kind === "disabled") {
    I.crashAutoOff = !0;
    let me = fullscreenReasonToMode(O) === "fullscreen";
    if (ne.kind !== "disabled") {
      if (
        (logEvent("tengu_fullscreen_crash_auto_off", {
          sticky: ne.kind === "tripped",
          strikes: ne.strikes,
          new_strikes: ne.newStrikes,
          pending_age_ms: ne.pendingAgeMs,
          would_be_entry_path: fromEnum(O),
          overrides_fullscreen: me,
        }),
        me)
      )
        process.stderr.write(ne.kind === "tripped" ? eh : Zy);
    }
    logForDebugging(
      `fullscreen disabled: a previous fullscreen launch on this machine died before it was healthy (${ne.kind}) \xB7 /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override`,
    );
  } else if (ne.kind !== "none") logForDebugging(`fullscreen boot canary: ${ne.kind}`);
  return ne;
}
function clearFullscreenCrashState(w) {
  return saveGlobalConfig(
    (I) =>
      I.fullscreenAutoDisabled === void 0 && I.fullscreenBootStrikes === void 0
        ? I
        : {
            ...I,
            fullscreenAutoDisabled: void 0,
            fullscreenBootStrikes: void 0,
          },
    w,
  );
}
var Oc = new Set([
  "settings_on",
  "upsell_trial_on",
  "ant_default",
  "fresh_install_on",
  "downsell_on",
  "gb_on",
]);
class Lc {
  canary = { status: "idle" };
  recordMaybeOnDisk = void 0;
  exitHook = void 0;
  retire() {
    if (this.canary.status === "armed") {
      if ((this.canary.cleanup(), this.canary.timer !== void 0))
        clearTimeout(this.canary.timer);
    }
    if (
      ((this.canary = { status: "idle" }),
      (this.recordMaybeOnDisk = void 0),
      this.exitHook !== void 0)
    )
      (process.off("exit", this.exitHook), (this.exitHook = void 0));
  }
}
var th = new j(() => new Lc());
function el() {
  return th.of(B().host);
}
function Nc(w, I, O) {
  let U = w.fullscreenBootPending?.[String(I)] !== void 0;
  if (!U && !(O && w.fullscreenBootStrikes)) return w;
  let V = w.fullscreenBootPending;
  if (U && V) {
    let { [String(I)]: te, ...ne } = V;
    V = Object.keys(ne).length > 0 ? ne : void 0;
  }
  return {
    ...w,
    fullscreenBootPending: V,
    fullscreenBootStrikes: O ? void 0 : w.fullscreenBootStrikes,
  };
}
function nh(w) {
  if (w.exitHook !== void 0) return;
  ((w.exitHook = () => {
    if (w.recordMaybeOnDisk !== void 0 && isShuttingDown()) {
      let I = w.recordMaybeOnDisk;
      saveGlobalConfigSyncForExit((O) => Nc(O, I, !1));
    }
  }),
    process.on("exit", w.exitHook));
}
async function $c(w) {
  let I = w?.state ?? defaultFullscreenState,
    O = el();
  if (O.canary.status !== "idle") return O.canary.status === "armed";
  if (!ld() || a.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) return !1;
  if (!I.crashAutoOff && wasFullscreenAutoDisabledForVersion() && Oc.has(getFullscreenReason(I)))
    ((I.crashAutoOff = !0),
      logForDebugging(
        "fullscreen disabled: turned off on this machine after repeated failed starts (recorded sticky auto-disable, honoured at REPL mount) \xB7 /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override",
      ));
  if (!shouldUseFullscreen(I)) return !1;
  if (!Oc.has(getFullscreenReason(I))) return !1;
  let U = process.pid,
    V = {
      startedAt: Date.now(),
      version: {
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
      host: Fc(),
      platform: getCurrentPlatform(),
    },
    te = registerCleanup(() =>
      jc(
        O,
        O.canary.status === "armed" &&
          O.canary.firstFrameAt !== void 0 &&
          (process.exitCode === void 0 || process.exitCode === 0) &&
          !isExitExternallyClocked()
          ? "healthy"
          : "withdrawn",
      ),
    );
  (nh(O),
    (O.canary = {
      status: "armed",
      pid: U,
      cleanup: te,
      onHealthy: w?.onHealthy,
      healthyAfterMs: w?.healthyAfterMs ?? Ky,
      firstFrameAt: void 0,
      timer: void 0,
      storageV5: w?.storageV5,
    }),
    (O.recordMaybeOnDisk = U),
    profileCheckpoint("fullscreen_canary_arm_start"));
  try {
    await saveGlobalConfig(
      (ne) => ({
        ...ne,
        fullscreenBootPending: { ...ne.fullscreenBootPending, [String(U)]: V },
      }),
      w?.storageV5,
    );
  } catch (ne) {
    logError(ne);
  } finally {
    profileCheckpoint("fullscreen_canary_armed");
  }
  return O.canary.status === "armed";
}
function markFullscreenFirstFrame(w = Date.now()) {
  let I = el();
  if (I.canary.status !== "armed" || I.canary.firstFrameAt !== void 0) return;
  ((I.canary.firstFrameAt = w),
    (I.canary.timer = setTimeout(
      (O) => {
        jc(O, "healthy").catch(logError);
      },
      I.canary.healthyAfterMs,
      I,
    )),
    I.canary.timer.unref?.());
}
async function jc(w, I) {
  if (w.canary.status !== "armed") return;
  let { pid: O, cleanup: U, timer: V, onHealthy: te, storageV5: ne } = w.canary;
  if (((w.canary = { status: "settled" }), U(), V !== void 0)) clearTimeout(V);
  if (
    (await saveGlobalConfig((me) => Nc(me, O, I === "healthy"), ne),
    w.recordMaybeOnDisk === O)
  )
    w.recordMaybeOnDisk = void 0;
  if ((logForDebugging(`fullscreen boot canary: ${I}`), I === "healthy" && te))
    try {
      await te();
    } catch (me) {
      logError(me);
    }
}
async function recordFullscreenBootFailure() {
  let w = el();
  if (w.canary.status !== "armed") return !1;
  let { pid: I, cleanup: O, timer: U, storageV5: V } = w.canary;
  if (((w.canary = { status: "settled" }), O(), U !== void 0)) clearTimeout(U);
  if (w.recordMaybeOnDisk === I) w.recordMaybeOnDisk = void 0;
  let te = !1;
  return (
    await saveGlobalConfig((ne) => {
      let me = ne.fullscreenBootPending?.[String(I)];
      if (me === void 0 || me.died !== void 0) return ne;
      return (
        (te = !0),
        {
          ...ne,
          fullscreenBootPending: {
            ...ne.fullscreenBootPending,
            [String(I)]: { ...me, died: "render_error" },
          },
        }
      );
    }, V),
    logForDebugging("fullscreen boot canary: failure recorded"),
    te
  );
}
var TUI_TRIAL_ENV_OVERRIDES = { CLAUDE_CODE_TUI_TRIAL: "fullscreen" };
function Hc(w, I) {
  saveGlobalConfig(
    (O) =>
      (O.fullscreenUpsellSeenCount ?? 0) >= w
        ? O
        : { ...O, fullscreenUpsellSeenCount: w },
    I,
  );
}
function markFullscreenUpsellExhausted(w) {
  Hc(MAX_FULLSCREEN_UPSELL_COUNT, w);
}
function getNextFullscreenUpsellImpression(w) {
  let I = getTuiTrialState();
  if (I.upsellImpression !== void 0) return I.upsellImpression;
  let O = Math.min((getGlobalConfig().fullscreenUpsellSeenCount ?? 0) + 1, MAX_FULLSCREEN_UPSELL_COUNT);
  return ((I.upsellImpression = O), Hc(O, w), O);
}
async function Gc(w) {
  let I = getTuiTrialState();
  if (I.persisted || getTuiTrialMode() !== "fullscreen") return !1;
  if (getInitialSettings().tui !== void 0)
    return (
      logForDebugging(
        "fullscreen trial: settings.tui was set explicitly during the trial \u2014 not persisting",
      ),
      !1
    );
  if (!shouldUseFullscreen())
    return (
      logForDebugging(
        "fullscreen trial: renderer is not fullscreen this session (auto-off) \u2014 not persisting",
      ),
      !1
    );
  let O = !1,
    { error: U } = await updateSettingsForSourceWithTransform(
      "userSettings",
      (V) => ((O = V?.tui !== void 0), O ? null : { tui: "fullscreen" }),
      void 0,
      w,
    );
  if (U)
    return (
      logError(U),
      logFeatureSad("tui_fullscreen_upsell_trial", "settings_write_failed"),
      !1
    );
  if (O)
    return (
      logForDebugging(
        "fullscreen trial: settings.tui was set explicitly during the trial (seen inside the queued write) \u2014 not persisting",
      ),
      !1
    );
  return (
    markFullscreenUpsellExhausted(w),
    (I.persisted = !0),
    logFeatureOk("tui_fullscreen_upsell_trial"),
    logEvent("tengu_fullscreen_upsell_trial_persisted", {
      session_age_ms: Math.round(process.uptime() * 1000),
    }),
    logForDebugging("fullscreen trial: healthy \u2014 persisted settings.tui=fullscreen"),
    !0
  );
}
function launchSessionRepl(...w) {
  return launchRepl(...w);
}
async function launchRepl(w, I, O, U) {
  let { AppRoot: V } = await import("../后台任务-Shell管理/chunk-c7mzes79.js"),
    { REPL: te } = await import("../../03-入口与运行时/CLI入口-Commander/REPL.ket689kt.js");
  function ne(Oe) {
    let Ae = useAppState();
    E(() => {
      return;
    }, [Ae]);
    let $e = C(Oe.commands),
      We = re((at) => {
        $e.current = at;
      }, []),
      Ye = C(() => {
        throw Error(
          "engine: queryParams called before REPL registered builder",
        );
      }),
      Ze = re((at) => {
        Ye.current = at;
      }, []),
      [Nt] = d(() =>
        createSdkEngine({
          run: runAgentTurn,
          queryParams: async (at) => Ye.current(),
          commands: () => toSlashCommands($e.current),
          models: () => buildModelOptionDescriptors(getEnabledModelOptions()),
          unavailableModels: () => buildModelOptionDescriptors(getDisabledModelOptions()),
          agents: () => toAgentInfos(Ae.getState().agentDefinitions.activeAgents),
          account: toAccountInfo(),
          outputStyle: getConfiguredOutputStyleName(),
          mcpServers: () => serializeMcpServerStatuses(Ae.getState().mcp.clients),
          ambient: collectAmbientContext,
          initialModel: () => {
            let at = Ae.getState();
            return parseUserSpecifiedModel(at.mainLoopModelForSession ?? at.mainLoopModel ?? getDefaultMainLoopModelSetting());
          },
          initialPermissionMode: () =>
            getExternalPermissionMode(Ae.getState().toolPermissionContext.mode),
          hostOwnsPermissionMode: !0,
          hostOwnsModel: !0,
        }),
      );
    return (
      E(() => () => Nt.close(), [Nt]),
      e(te, {
        ...Oe,
        engine: Nt,
        onCommandsChange: We,
        onQueryParamsChange: Ze,
      })
    );
  }
  let {
      session: me,
      storageV5: Me,
      credentials: Se,
      fleetNudgeStore: xe = new FleetNudgeStore({ storageV5: Me }),
    } = I,
    De = resolveCommandQueue(Me);
  await $c({ onHealthy: () => Gc(Me), storageV5: Me });
  try {
    await U(
      w,
      e(V, {
        session: me,
        storageV5: Me,
        messageQueue: De,
        initialState: I.initialState,
        onChangeAppState: (Oe) => handleReplAppStateChange(Oe, me, Me, Se),
        fleetNudgeStore: xe,
        sessionHooks: I.sessionHooks,
        writesExitHandoff: !0,
        getFpsMetrics: I.getFpsMetrics,
        stats: I.stats,
        keybindings: !1,
        children: e(ne, { ...O }),
      }),
      me,
      Me,
      Se,
    );
  } catch (Oe) {
    throw (await recordFullscreenBootFailure().catch(() => !1), Oe);
  }
}
async function awaitMcpPolicyColdStart(w) {
  if (shouldAwaitRemoteSettingsConfirmation()) {
    (logForDebugging(
      "[mcp-policy-cold-start] waiting on remote managed-settings confirmation (managedMcpServers is withheld from the unverified cache)",
    ),
      await awaitRemoteSettingsFetchSettled());
    return;
  }
  if (!isRemoteSettingsFetchPending()) return;
  if (
    w.hasDynamicMcpConfig ||
    !w.pluginStateReliable ||
    (await oh(w.storageV5))
  )
    (logForDebugging("[mcp-policy-cold-start] waiting on remote managed-settings load"),
      await awaitRemoteSettingsLoaded());
  else logForDebugging("[mcp-policy-cold-start] skipped \u2014 no MCP server source visible");
}
async function oh(w) {
  for (let I of MCP_SETTINGS_SCOPES)
    if (Object.keys(getMcpConfigsByScope(I, { expandVars: !1 }).servers).length > 0) return !0;
  if (shouldAutoConnectIde()) return !0;
  try {
    if ((await loadAllPluginsCacheOnly(w)).enabled.length > 0) return !0;
  } catch {
    return !0;
  }
  return hasStoredOAuthToken();
}
F();
function Us() {
  let WT = _(1),
    rh;
  if (WT[0] === MEMO_CACHE_SENTINEL)
    ((rh = r(Text, {
      children: [
        "MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the",
        " ",
        e(Link, {
          url: "https://code.claude.com/docs/en/mcp",
          children: "MCP documentation",
        }),
        ".",
      ],
    })),
      (WT[0] = rh));
  else rh = WT[0];
  return rh;
}
function NewMcpServerDialog({ serverName: w, isPluginServer: I = !1, onDone: O }) {
  let { storageV5: U } = useStorageV5Context(),
    V = C(!1),
    te = useIsMountRecent(REFUSE_INPUT_WINDOW_MS),
    { refusedWithin: ne, noteRefused: me, epoch: Me } = useRefusedInputWindow(),
    Se = useSettleAfterChange(Me, REFUSE_INPUT_WINDOW_MS);
  function xe() {
    if (te() || ne(REFUSE_INPUT_WINDOW_MS)) return (me(), !0);
    return !1;
  }
  async function De(Oe) {
    if (xe()) return;
    if (V.current) return;
    switch (
      ((V.current = !0), logEvent("tengu_mcp_dialog_choice", { choice: fromEnum(Oe) }), Oe)
    ) {
      case "yes":
      case "yes_all": {
        let Ae = !1;
        {
          let { error: $e } = await updateSettingsForSourceWithTransform(
            "localSettings",
            (We) => {
              let Ye = We?.enabledMcpjsonServers || [];
              if (Ye.includes(w)) return null;
              return { enabledMcpjsonServers: [...Ye, w] };
            },
            void 0,
            U,
          );
          Ae ||= $e != null;
        }
        if (Oe === "yes_all") {
          let { error: $e } = await updateSettingsForSource(
            "localSettings",
            { enableAllProjectMcpServers: !0 },
            void 0,
            U,
          );
          Ae ||= $e != null;
        }
        (Qxt(getWorkspacePersistedTrustKey(), [w]), O({ persistFailed: Ae }));
        break;
      }
      case "no": {
        let { error: Ae } = await updateSettingsForSourceWithTransform(
          "localSettings",
          ($e) => {
            let We = $e?.disabledMcpjsonServers || [];
            if (We.includes(w)) return null;
            return { disabledMcpjsonServers: [...We, w] };
          },
          void 0,
          U,
        );
        O({ persistFailed: Ae != null });
        break;
      }
    }
  }
  return r(de, {
    title: `New MCP server found in this project: ${formatServerDisplayName(w, I)}`,
    color: "warning",
    onCancel: () => void De("no"),
    children: [
      e(Us, {}),
      e(
        Select,
        {
          options: [
            { label: "Use this MCP server", value: "yes" },
            {
              label: "Use this and all future MCP servers in this project",
              value: "yes_all",
            },
            { label: "Continue without using this MCP server", value: "no" },
          ],
          onChange: (Oe) => void De(Oe),
          onCancel: () => void De("no"),
          hideIndexes: !0,
          refuseInput: xe,
          defaultFocusValue: "no",
          selectedValue: NO_COMMITTED_ROW,
        },
        Se.remountKey,
      ),
    ],
  });
}
F();
function NewMcpServersDialog({ serverNames: w, pluginServerNames: I, onDone: O }) {
  let { storageV5: U } = useStorageV5Context(),
    V = C(!1),
    te = useIsMountRecent(REFUSE_INPUT_WINDOW_MS),
    { refusedWithin: ne, noteRefused: me } = useRefusedInputWindow(),
    Me = useIsScreenReaderEnabled(),
    Se = re(() => {
      if (te() || ne(REFUSE_INPUT_WINDOW_MS)) return (me(), !0);
      return !1;
    }, [te, ne, me]);
  async function xe(Oe) {
    if (Se()) return;
    if (V.current) return;
    V.current = !0;
    let [Ae, $e] = partition(w, (Ye) => Oe.includes(Ye));
    logEvent("tengu_mcp_multidialog_choice", {
      approved: Ae.length,
      rejected: $e.length,
    });
    let We = !1;
    if (Ae.length > 0) {
      let { error: Ye } = await updateSettingsForSourceWithTransform(
        "localSettings",
        (Ze) => ({
          enabledMcpjsonServers: dedupe([
            ...(Ze?.enabledMcpjsonServers || []),
            ...Ae,
          ]),
        }),
        void 0,
        U,
      );
      We ||= Ye != null;
    }
    if ((Qxt(getWorkspacePersistedTrustKey(), Ae), $e.length > 0)) {
      let { error: Ye } = await updateSettingsForSourceWithTransform(
        "localSettings",
        (Ze) => ({
          disabledMcpjsonServers: dedupe([
            ...(Ze?.disabledMcpjsonServers || []),
            ...$e,
          ]),
        }),
        void 0,
        U,
      );
      We ||= Ye != null;
    }
    O({ persistFailed: We });
  }
  let De = re(async () => {
    if (Se()) return;
    if (V.current) return;
    V.current = !0;
    let { error: Oe } = await updateSettingsForSourceWithTransform(
      "localSettings",
      (Ae) => ({
        disabledMcpjsonServers: dedupe([
          ...(Ae?.disabledMcpjsonServers || []),
          ...w,
        ]),
      }),
      void 0,
      U,
    );
    O({ persistFailed: Oe != null });
  }, [Se, w, O, U]);
  return r(N, {
    children: [
      r(de, {
        title: `${w.length} new MCP servers found in this project`,
        subtitle: "Select any you wish to enable.",
        color: "warning",
        onCancel: De,
        hideInputGuide: !0,
        children: [
          e(Us, {}),
          e(lE, {
            options: w.map((Oe) => ({
              label: formatServerDisplayName(Oe, I?.has(Oe) ?? !1),
              value: Oe,
            })),
            defaultValue: Me ? [] : w,
            submitButtonText: "Enable selected",
            onSubmit: xe,
            onCancel: De,
            hideIndexes: !0,
            refuseInput: Se,
            refuseSubmitFocus: Se,
          }),
        ],
      }),
      e(Box, {
        paddingX: 1,
        children: e(Text, {
          dimColor: !0,
          italic: !0,
          children: r(DotSeparatedList, {
            children: [
              e(KeybindingHint, { chord: "space", action: "select" }),
              e(ActionKeybindingHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "reject all",
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
async function getPendingMcpServers(w) {
  if (M0()) return { pendingServers: [], pluginServerNames: new Set() };
  let { serverNames: I, pluginServerNames: O } = await collectProjectMcpServerNames(w);
  return {
    pendingServers: I.filter((V) => getMcpServerApprovalStatus(V) === "pending"),
    pluginServerNames: O,
  };
}
async function collectProjectMcpServerNames(w) {
  let { servers: I } = getMcpConfigsByScope("project"),
    O = Object.keys(I),
    U = new Set(O),
    V = new Set(),
    { enabled: te } = await loadAllPluginsCacheOnly(w),
    ne = te.filter(isProjectSkillsDirPlugin);
  for (let me of ne) {
    let Me = await loadPluginMcpServers(me, [], w);
    if (!Me) continue;
    for (let Se of Object.keys(Me)) {
      if (U.has(Se) || V.has(Se)) continue;
      (O.push(Se), V.add(Se));
    }
  }
  return { serverNames: O, pluginServerNames: V, rootServers: I };
}
async function renderMcpServerApprovalDialog({ pendingServers: w, pluginServerNames: I }, O, U) {
  if (w.length === 0) return null;
  let V;
  V = await sh(
    w.map((Me) => formatServerDisplayName(Me, I.has(Me))),
    U,
  );
  let te = (Me) => {
      ih(V, U)
        .catch(() => {})
        .then(() => O(Me));
    },
    [ne, ...me] = w;
  return ne !== void 0 && me.length === 0
    ? e(NewMcpServerDialog, { serverName: ne, isPluginServer: I.has(ne), onDone: te })
    : e(NewMcpServersDialog, { serverNames: w, pluginServerNames: I, onDone: te });
}
async function sh(w, I) {
  {
    if (!isBgSession()) return;
    let O = a.CLAUDE_JOB_DIR;
    if (!O) return;
    let U = await readJobState(O, I);
    if (!U) return;
    let V = w.length,
      te = pluralize(V, "server"),
      ne = pluralize(V, "needs", "need");
    try {
      return (
        await writeStateAtomic(
          O,
          {
            ...U,
            state: "blocked",
            detail: `${V} new MCP ${te} ${ne} approval`,
            tempo: "blocked",
            needs: `approve ${V} new project MCP ${te} (${w.join(", ")}) \u2014 attach to respond`,
            updatedAt: new Date().toISOString(),
          },
          I,
        ),
        { state: U.state, tempo: U.tempo, needs: U.needs, detail: U.detail }
      );
    } catch (me) {
      logJobWriteError(me);
    }
  }
  return;
}
async function ih(w, I) {
  {
    if (!w || !isBgSession()) return;
    let O = a.CLAUDE_JOB_DIR;
    if (!O) return;
    let U = await readJobState(O, I);
    if (!U || U.state !== "blocked") return;
    try {
      await writeStateAtomic(
        O,
        { ...U, ...w, block: void 0, updatedAt: new Date().toISOString() },
        I,
      );
    } catch (V) {
      logJobWriteError(V);
    }
  }
}
import {
  lstat as Vc,
  lutimes,
  mkdir as gh,
  readdir as ru,
  rename,
  rm as $r,
  rmdir,
  stat as iu,
} from "fs/promises";
import { basename as jo, join as _o, relative as au, sep as yh } from "path";
var Kc = 600000,
  ah = 2400000,
  ch = 60000,
  uh = Kc / 2;
function Wc(w) {
  return Math.min(Kc * 2 ** Math.max(0, w - 1), ah);
}
function zc(w) {
  let I = getSkillsSyncState();
  if (I.resyncTimer) return;
  rl(I, w, Wc(I.consecutiveFailedRounds));
}
function rl(w, I, O) {
  let U = Date.now() + O;
  ((w.resyncTimer = setTimeout(mh, O, w, I, U)), w.resyncTimer.unref?.());
}
function mh(w, I, O) {
  let U = w.resyncTimer,
    V = Date.now() - O;
  if (V > uh) {
    (writeDiagnosticsEvent("info", "skills_sync_resync_skipped_after_sleep", { late_ms: V }),
      rl(w, I, ch));
    return;
  }
  I()
    .catch(() => {})
    .then(() => {
      if (w.resyncTimer !== U) return;
      rl(w, I, Wc(w.consecutiveFailedRounds));
    });
}
var Jc = 15;
function getSkillsSyncWaitTimeoutMs() {
  let w = a.CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS;
  return w && w > 0 ? w : 5000;
}
function getSkillsSyncInstallTimeoutMs() {
  let w = a.CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS;
  return w && w > 0 ? w : 30000;
}
function il() {
  let w = getSkillsSyncState();
  if (!w.firstListDeferred) {
    let I,
      O = new Promise((U) => {
        I = U;
      });
    w.firstListDeferred = { promise: O, resolve: I };
  }
  return w.firstListDeferred;
}
function startSkillsSyncInBackground(w, I, O) {
  ((getSkillsSyncState().firstSyncPromise ??= lu(w, I, O)), zc(() => cl(w, I, O)));
}
function waitForFirstSkillsSync(w, I, O) {
  let U = il();
  return ((getSkillsSyncState().firstSyncPromise ??= lu(w, I, O)), U.promise);
}
async function resyncSkillsNow(w, I, O) {
  return (
    sessionRefsManifestStore.of(w).discardInflight(),
    await getSkillsSyncState().syncPromise?.catch(() => {}),
    cl(w, I, O)
  );
}
function lu(w, I, O) {
  let U = getSkillsSyncState();
  return cl(w, I, O).finally(() => {
    U.firstRoundSettled = !0;
  });
}
function al() {
  let w = getSkillsSyncState();
  if (!w.firstRoundSettled) w.firstRoundEmitted = !0;
}
function Bs() {
  (al(), invalidateSkillDirCaches(), skillsChangedEmitter.emit());
}
function dr() {
  return _o(getClaudeConfigDir(), SYNCED_SKILLS_DIR_PATH);
}
function du(w) {
  return _o(dr(), w);
}
function cu(w) {
  return STORAGE_KEYS.userConfigDir("skills", au(_o(getClaudeConfigDir(), "skills"), w).split(yh));
}
function _h() {
  return _o(getClaudeConfigDir(), "skills");
}
async function uu(w) {
  let I = dr();
  if (
    (await verifySyncOwnedPath(
      I,
      getClaudeConfigDir(),
      { event: "skills_sync_root_refused", phase: "prune", rootLabel: SYNCED_SKILLS_DIR_PATH },
      { storageV5: w },
    ).catch(() => null)) !== "real"
  )
    return null;
  let U;
  try {
    U = await ru(I, { withFileTypes: !0 });
  } catch {
    return null;
  }
  let V = [],
    te = [];
  for (let ne of U)
    if (ne.isDirectory() && isSkillBucketId(ne.name) && (await hasSyncMarker(I, ne.name)))
      V.push(ne.name);
    else if (!isHiddenPathSegment(ne.name)) te.push(ne.name);
  return { buckets: V, strays: te };
}
async function mu(w, I) {
  let O = 0;
  for (let U of w) if (await xi(_o(dr(), U), I)) O++;
  if (O > 0) writeDiagnosticsEvent("info", "skills_sync_stray_entry_trashed", { count: O });
  return O;
}
async function bh(w) {
  let I = await uu(w);
  if (I === null || I.strays.length === 0) return !1;
  return (await mu(I.strays, w)) > 0;
}
function xi(w, I) {
  return trashDirectory({
    dir: w,
    trashRoot: Oi(),
    configHome: getClaudeConfigDir(),
    failureEvent: "skills_sync_trash_move_failed",
    storageV5: I,
  });
}
async function pruneSyncedSkillsForClosedGate(w) {
  if (!isSkillsSyncDisabledBySettings()) return !1;
  let I = await verifySyncOwnedPath(
    dr(),
    getClaudeConfigDir(),
    { event: "skills_sync_root_refused", phase: "prune", rootLabel: SYNCED_SKILLS_DIR_PATH },
    { storageV5: w },
  );
  if (I !== "real" && I !== "absent") return !1;
  let O = await bu(null, w).catch(() => !1),
    U = null,
    V = I === "real" ? await uu(w) : null;
  if (V !== null) {
    U = 0;
    for (let ne of V.buckets) {
      let me = du(ne),
        Me = await Cu(me, null, w).catch(() => null);
      if (Me !== null)
        ((U += Me),
          await rmdir(me).then(
            () => removeSyncMarker(dr(), ne),
            () => {},
          ));
    }
    ((U += await mu(V.strays, w)), await rmdir(dr()).catch(() => {}));
  }
  writeDiagnosticsEvent("info", "skills_sync_pruned_for_closed_gate", {
    moved: (U ?? 0) + (O ? 1 : 0),
  });
  let te = O || (U !== null && U > 0);
  if (te) (clearCommandMemoizationCaches(), invalidateSkillDirCaches(), skillsChangedEmitter.emit());
  return te;
}
function Oi() {
  return _o(getClaudeConfigDir(), SKILLS_TRASH_DIR_PATH);
}
function Fi(w) {
  return _o(w, MANIFEST_FILE_NAME);
}
var Zc = new Set(),
  tu = [],
  Ch = createLazyValue(() =>
    it({
      lastUpdated: T().catch(0),
      skills: v(se()),
      staleDirs: se().optional(),
      pendingClaims: se().optional(),
    }),
  ),
  vh = createLazyValue(() =>
    it({
      name: s(),
      skillId: s().catch(""),
      description: s().catch(""),
      source: s().catch(""),
      updatedAt: s().nullable().catch(null),
    }),
  ),
  kh = createLazyValue(() =>
    it({ staleDirs: se().optional(), pendingClaims: se().optional() }),
  );
function yu(w) {
  return cu(Fi(w));
}
async function dl(w, I) {
  let O = !I.manifestRead;
  I.manifestRead = !0;
  let U;
  if (w)
    try {
      let Se = await w.read([{ key: yu(I.root), offset: 0, length: MAX_SYNC_MANIFEST_BYTES + 1 }]);
      if (!Se.ok) {
        if (O)
          writeDiagnosticsEvent("warn", "skills_sync_manifest_unreadable", {
            code: "backend_read_failed",
          });
        return null;
      }
      let xe = Se.value.items[0];
      if (!xe.found) return null;
      if (xe.totalBytes > MAX_SYNC_MANIFEST_BYTES || xe.value.byteLength > MAX_SYNC_MANIFEST_BYTES) {
        if (O)
          writeDiagnosticsEvent("warn", "skills_sync_manifest_unreadable", {
            code: "parse_or_size",
          });
        return null;
      }
      U = Buffer.from(xe.value).toString("utf8");
    } catch (Se) {
      if (O)
        writeDiagnosticsEvent("warn", "skills_sync_manifest_unreadable", {
          code: A(Se) ?? "backend_read_failed",
        });
      return null;
    }
  else if (
    ((U = await readFileTextOrNull(Fi(I.root), O ? "skills_sync_manifest_unreadable" : null)),
    U === null)
  )
    return null;
  let V = parseJsonWithSchema(U, skillsSyncManifestSchema(), O ? "skills_sync_manifest_unreadable" : null);
  if (V === null) return null;
  let { skills: te, staleDirs: ne, pendingClaims: me, ...Me } = V;
  return {
    ...Me,
    skills: parseValidRows(skillEntrySchema(), te),
    staleDirs: toOptionalStringArray(ne),
    pendingClaims: toOptionalStringArray(me),
  };
}
async function sl(w, I, O, U) {
  let V = U.guard.refusedReason();
  if (V !== null) throw makeLandingRefusedError(V);
  await Pu(O, U.root);
  let te = await dl(O, U),
    ne = mergeKeyedRowsPreferFirst(
      parseValidRows(skillEntrySchema(), w.skills),
      te?.skills,
      (Me) => Me.skillId,
      I.removedSkillIds,
      I.deferredRows,
    ),
    me = jsonStringify(
      {
        ...omitKeys(te, ["lastUpdated", "skills", "staleDirs", "pendingClaims"]),
        ...w,
        skills: ne,
        staleDirs: mergeStringListsExcluding(w.staleDirs, te?.staleDirs, I.staleDirs),
        pendingClaims: mergeStringListsExcluding(w.pendingClaims, te?.pendingClaims, I.pendingClaims),
      },
      null,
      2,
    );
  if (O) {
    let Me = await O.write(yu(U.root), me, {
      mode: 438 & ~process.umask(),
      publishDiscipline: "atomic",
    });
    if (!Me.ok)
      throw (
        writeDiagnosticsEvent("error", "skills_sync_manifest_write_failed", {
          code: Me.error.code,
        }),
        Error("skillsSync: manifest write failed")
      );
    return;
  }
  await writeFileAtomic(Fi(U.root), me);
}
function ll(w) {
  return _o(w, STAGING_DIR_NAME, String(process.pid));
}
function xo(w, I) {
  return validateSyncedItemName(I, w);
}
function wh(w) {
  return cu(_o(w, "SKILL.md"));
}
async function Eh(w, I, O) {
  try {
    let U = xo(w, I);
    if (O) return (await O.statMeta(wh(U))).ok;
    return (await iu(_o(U, "SKILL.md"))).isFile();
  } catch {
    return !1;
  }
}
function nu(w) {
  return {
    skillId: w.id,
    name: w.directory || w.name || w.id,
    description: w.description,
    source: "session-refs",
    updatedAt: null,
    requestedVersion: w.version || void 0,
  };
}
function hu(w, I) {
  return { ...w, backingPluginId: I.backingPluginId };
}
function Rh(w, I, O) {
  return computeSkillSyncPlan(I, O, {
    idOf: (U) => U.skillId,
    dirFor: (U) => xo(w, U),
    invalidNameTag: "skills_sync_invalid_name",
    collisionTag: "skills_sync_name_collision",
    carry: hu,
  });
}
function Mh(w, I) {
  let O = xo(w, I.name),
    U = jo(O),
    V = createSkillCommand({
      skillName: U,
      displayName: void 0,
      description: escapeSingleLineText(I.description),
      hasUserSpecifiedDescription: !0,
      markdownContent: "",
      allowedTools: [],
      argumentHint: void 0,
      argumentNames: [],
      whenToUse: void 0,
      version: void 0,
      model: void 0,
      disableModelInvocation: !1,
      userInvocable: !0,
      source: "userSettings",
      baseDir: O,
      serverAttribution: buildServerAttribution(I.skillId, I.backingPluginId),
      loadedFrom: "syncedSkills",
      hooks: void 0,
      executionContext: void 0,
      agent: void 0,
      paths: void 0,
      effort: void 0,
      shell: void 0,
    });
  if (V.type === "prompt")
    V.getPromptForCommand = async (te, ne) => {
      let me = await awaitPendingSkillDownload(U);
      if (me.ok) {
        let Se = findCommand(U, await getCommands(sn(), ne.storageV5));
        if (Se && Se.type === "prompt" && Se !== V)
          return (
            (V.source = Se.source),
            (V.skillRoot = Se.skillRoot),
            (V.contentLength = Se.contentLength),
            (V.progressMessage = Se.progressMessage),
            (V.userInvocable = Se.userInvocable),
            Se.getPromptForCommand(te, ne)
          );
      }
      let Me = me.ok ? "skill not found after download" : me.reason;
      return [
        {
          type: "text",
          text: `Skill ${U} could not be downloaded (${Me}). Proceed without it.`,
        },
      ];
    };
  return V;
}
function Ah(w, I) {
  return createSyncLandingContext({
    root: () => I,
    configHome: getClaudeConfigDir,
    rootLabel: SYNCED_SKILLS_DIR_PATH,
    event: "skills_sync_root_refused",
    storageV5: w,
  });
}
var _u = landingDownloadFailure("zip fetch failed"),
  Ai = landingExtractFailure("skill archive unusable or landing obstructed");
async function ou(
  w,
  {
    round: I,
    credentials: O,
    storageV5: U,
    replacesAttributedCopy: V,
    classifyOccupant: te,
    markTargetDestroyed: ne,
  },
) {
  let me = I.root,
    Me = xo(me, w.name),
    Se = _o(ll(me), au(me, Me)),
    xe = _o(
      getTempBaseDir(),
      `claude-skill-${process.pid}-${Math.random().toString(36).slice(2)}.zip`,
    );
  try {
    if (I.guard.refused()) return LANDING_ROOT_REFUSED;
    if (
      !(await downloadSkillArchive(w.skillId, xe, w.requestedVersion, {
        isBackground: !0,
        credentials: O,
      }))
    )
      return _u;
    if (!(await I.guard.verify())) return LANDING_ROOT_REFUSED;
    (await $r(Se, { recursive: !0, force: !0 }),
      await gh(ll(me), { recursive: !0 }),
      await extractZipFile(xe, Se, {
        skipEntry: ($e) => $e.split(/[\\/]/).some((We) => isHiddenPathSegment(We)),
      }));
    let Oe = Se,
      Ae = await ru(Se, { withFileTypes: !0 });
    if (
      !Ae.some(($e) => $e.name === "SKILL.md") &&
      Ae.length === 1 &&
      Ae[0].isDirectory()
    )
      Oe = _o(Se, Ae[0].name);
    try {
      if (!(await iu(_o(Oe, "SKILL.md"))).isFile())
        return (writeDiagnosticsEvent("warn", "skills_sync_extracted_zip_unusable"), Ai);
    } catch {
      return (writeDiagnosticsEvent("warn", "skills_sync_extracted_zip_unusable"), Ai);
    }
    if (await isBareGitRepoLayout(Oe))
      return (writeDiagnosticsEvent("warn", "skills_sync_extracted_zip_unusable"), Ai);
    if (!(await I.guard.verify())) return LANDING_ROOT_REFUSED;
    if (V) await $r(Me, { recursive: !0, force: !0 });
    try {
      await rename(Oe, Me);
    } catch ($e) {
      let We = A($e);
      if (V || !isDisplaceBlockedErrorCode(We)) {
        if (V) ne();
        return (
          writeDiagnosticsEvent("warn", "skills_sync_promotion_failed", { code: We ?? "unknown" }),
          landingLocalFailure(We)
        );
      }
      let Ye = await te(jo(Me));
      if (Ye === "inFlight")
        return (writeDiagnosticsEvent("info", "skills_sync_target_in_flight_elsewhere"), LANDING_DEFERRED);
      if (Ye === "landed") await $r(Me, { recursive: !0, force: !0 });
      else if (!(await xi(Me, U))) return LANDING_DISPLACE_BLOCKED;
      try {
        await rename(Oe, Me);
      } catch (Ze) {
        ne();
        let Nt = A(Ze);
        return (
          writeDiagnosticsEvent("warn", "skills_sync_promotion_failed", { code: Nt ?? "unknown" }),
          landingLocalFailure(Nt)
        );
      }
    }
    return LANDING_OK;
  } finally {
    if (
      (await $r(xe, { force: !0 }).catch(() => {}),
      !I.guard.refused() &&
        (await verifySyncOwnedPath(
          me,
          getClaudeConfigDir(),
          { event: "skills_sync_root_refused", phase: "sweep", rootLabel: SYNCED_SKILLS_DIR_PATH },
          { checkStagingLeaf: !0, storageV5: U },
        ).catch(() => null)) === "real")
    )
      await $r(Se, { recursive: !0, force: !0 }).catch(() => {});
  }
}
var Th = 500;
async function Ih(w, I) {
  try {
    return await ou(w, I);
  } catch {
    return (writeDiagnosticsEvent("warn", "skills_sync_extract_retry"), await sleep(Th), ou(w, I));
  }
}
async function cl(w, I, O) {
  let U = getSkillsSyncState();
  if (U.syncPromise) return U.syncPromise;
  return (
    (U.syncPromise = xh(w, I, O).finally(() => {
      U.syncPromise = null;
    })),
    U.syncPromise
  );
}
async function bu(w, I) {
  let O = await Cu(_h(), w, I);
  if (O === null) return !1;
  return (
    writeDiagnosticsEvent("info", "skills_sync_legacy_layout_migrated", { removed: O }),
    O > 0
  );
}
async function Cu(w, I, O) {
  let U = _o(w, MANIFEST_FILE_NAME),
    V,
    te,
    ne;
  try {
    ((te = (await readFileWithMetadata(U, MAX_SYNC_MANIFEST_BYTES)).content), (ne = jsonParse(te)));
  } catch {
    return null;
  }
  let me = Ch().safeParse(ne);
  if (me.success) {
    let {
      lastUpdated: Ae,
      skills: $e,
      staleDirs: We,
      pendingClaims: Ye,
      ...Ze
    } = me.data;
    V = {
      ...Ze,
      lastUpdated: Ae,
      skills: parseValidRows(vh(), $e),
      staleDirs: toOptionalStringArray(We),
      pendingClaims: toOptionalStringArray(Ye),
    };
  } else {
    if (I === null) return null;
    let Ae = new Set(I),
      $e = new Set(),
      We = kh().safeParse(ne);
    if (We.success) {
      for (let Ye of toOptionalStringArray(We.data.staleDirs) ?? []) Ae.add(Ye);
      for (let Ye of toOptionalStringArray(We.data.pendingClaims) ?? []) $e.add(Ye);
    }
    ((V = {
      lastUpdated: 0,
      skills: [],
      staleDirs: Ae.size > 0 ? Array.from(Ae) : void 0,
      pendingClaims: $e.size > 0 ? Array.from($e) : void 0,
    }),
      writeDiagnosticsEvent("warn", "skills_sync_legacy_manifest_repaired", {
        claims: Ae.size + $e.size,
      }));
  }
  let Me = [
      ...V.skills.map((Ae) => ({ row: Ae, syntheticListName: null })),
      ...["staleDirs", "pendingClaims"].flatMap((Ae) =>
        (V[Ae] ?? []).map(($e) => ({
          row: { name: Ae === "pendingClaims" ? parseSyncClaimKey($e).name : $e },
          syntheticListName: Ae,
          entry: $e,
        })),
      ),
    ],
    Se = 0,
    xe = [],
    De = [],
    Oe = [];
  for (let Ae of Me) {
    let $e = Ae.row;
    if (Ae.syntheticListName === "pendingClaims" && (await ml(Ae.entry))) {
      Oe.push(Ae.entry);
      continue;
    }
    try {
      let We = resolveSyncedItemPath($e.name, w);
      if (await isSameFile(We, dr())) {
        writeDiagnosticsEvent("info", "skills_sync_sibling_root_row_skipped");
        continue;
      }
      if (await isSameFile(We, Oi())) {
        writeDiagnosticsEvent("info", "skills_sync_trash_root_row_skipped");
        continue;
      }
      if (await xi(We, O)) Se++;
      else if (Ae.syntheticListName === "staleDirs") De.push(Ae.entry);
      else if (Ae.syntheticListName === "pendingClaims") Oe.push(Ae.entry);
      else xe.push(Ae.row);
    } catch (We) {
      if (We instanceof LegacyReservedSpellingError) {
        if (Ae.syntheticListName === "staleDirs") De.push(Ae.entry);
        else if (Ae.syntheticListName === "pendingClaims") Oe.push(Ae.entry);
        else xe.push(Ae.row);
        continue;
      }
    }
  }
  if (xe.length > 0 || De.length > 0 || Oe.length > 0) {
    let Ae = jsonStringify(
      {
        ...V,
        skills: xe,
        staleDirs: De.length > 0 ? De : void 0,
        pendingClaims: Oe.length > 0 ? Oe : void 0,
      },
      null,
      2,
    );
    if (Ae !== te) await writeFileAtomic(U, Ae).catch(() => {});
  } else await $r(U, { force: !0 }).catch(() => {});
  return Se;
}
async function xh(w, I, O) {
  let U = Date.now(),
    V = !1,
    te = !1,
    ne = !1,
    me = new Map(),
    Me = !1,
    Se = null,
    xe = getSkillsSyncState();
  try {
    if (((ne = Hrt()), refreshSkillsSyncEnabled())) ne = !0;
    if (!shouldSyncSkills(w) || !isSkillsSyncTierInPlay()) {
      writeDiagnosticsEvent("info", "skills_sync_gate_closed");
      let { placeholders: He } = getSkillsSyncState();
      if (He.size > 0) (He.clear(), Bs());
      logFeatureSad("skills_sync_round", "gate_closed", {
        account_opt_in: ne,
        duration_ms: Date.now() - U,
      });
      return;
    }
    if (isSkillsSyncPolicyVerdictPending()) {
      (writeDiagnosticsEvent("info", "skills_sync_policy_verdict_pending"),
        logFeatureSad("skills_sync_round", "policy_verdict_pending", {
          account_opt_in: ne,
          duration_ms: Date.now() - U,
        }));
      return;
    }
    let De = await resolveSkillBucketId(O);
    if (De === null) {
      (writeDiagnosticsEvent("info", "skills_sync_bucket_unresolved"),
        logFeatureSad("skills_sync_round", "bucket_unresolved", {
          account_opt_in: ne,
          duration_ms: Date.now() - U,
        }));
      return;
    }
    let Oe = Ah(I, du(De));
    Se = Oe;
    let Ae = Oe.root;
    writeDiagnosticsEvent("info", "skills_sync_starting");
    let $e;
    if (isSessionRefsSyncEnabled(w)) {
      let [He, Qe] = await Promise.all([
        sessionRefsManifestStore.of(w).listEntries("skills"),
        a.CLAUDE_CODE_SYNC_SKILLS
          ? fetchOrgSkills({ isBackground: !0, credentials: O })
          : null,
      ]);
      if (!He.success) $e = He;
      else if (Qe === null) $e = { success: !0, skills: He.entries.map(nu) };
      else if (!Qe.success) $e = Qe;
      else
        $e = {
          success: !0,
          skills: mergeAndUniqByKey(He.entries.map(nu), Qe.skills, (Je) => Je.skillId, hu),
        };
    } else $e = await fetchOrgSkills({ isBackground: !0, credentials: O });
    if (!$e.success) {
      xe.consecutiveFailedRounds++;
      let He = getSyncFailureTelemetry($e);
      (writeDiagnosticsEvent("warn", "skills_sync_list_failed", {
        duration_ms: Date.now() - U,
        ...He,
      }),
        logEvent("tengu_skills_sync_list_failed", {
          duration_ms: Date.now() - U,
          ...He,
        }),
        logFeatureBad("skills_sync_round", "list_failed", {
          account_opt_in: ne,
          duration_ms: Date.now() - U,
          ...He,
        }));
      return;
    }
    if (
      ((xe.consecutiveFailedRounds = 0),
      !(await hasSyncMarker(dr(), De)) &&
        (await Vc(Ae).then(
          (He) => He.isDirectory(),
          () => !1,
        )) &&
        (await trashDirectory({
          dir: Ae,
          trashRoot: Oi(),
          configHome: getClaudeConfigDir(),
          failureEvent: "skills_sync_trash_move_failed",
          storageV5: I,
        }).catch(() => !1)))
    )
      writeDiagnosticsEvent("info", "skills_sync_unmarked_bucket_quarantined");
    (await Pu(I, Ae),
      await createSyncMarker(dr(), De),
      (Me = !0),
      (te = await bu(
        $e.skills.map((He) => He.name),
        I,
      )),
      await bh(I));
    let We = await dl(I, Oe),
      {
        toDownload: Ye,
        toRemove: Ze,
        carryover: Nt,
        liveDirs: at,
        carryoverOwningLiveDir: zt,
      } = Rh(Ae, $e.skills, We?.skills ?? []),
      Qt = createLiveFileChecker(at),
      dn = async (He) => {
        let Qe;
        try {
          Qe = resolveSyncedItemPath(He, Ae);
        } catch (Ot) {
          if (Ot instanceof LegacyReservedSpellingError) return !1;
          return !0;
        }
        let Je = await Qt(Qe);
        if (Je === "live") return !0;
        if (Je === "indeterminate") return !1;
        return xi(Qe, I);
      },
      ro = new Set(Array.from(at, (He) => jo(He))),
      lo = pruneStaleSyncedSkills(ro);
    if (pruneStaleSkillEntries(ro) + lo > 0) (clearCommandMemoizationCaches(), al(), skillsChangedEmitter.emit());
    let to = await Promise.all(
        Nt.map((He) => (zt.has(He.skillId) ? Eh(Ae, He.name, I) : null)),
      ),
      Tt = new Set();
    for (let [He, Qe] of Nt.entries()) {
      let Je = to[He];
      if (Je === null) continue;
      if (!Je) {
        let nn = $e.skills.find((Fn) => Fn.skillId === Qe.skillId);
        if (nn) (Tt.add(Qe.skillId), Ye.push({ item: nn }));
        continue;
      }
      let Ot = jo(xo(Ae, Qe.name));
      if (xe.placeholders.delete(Ot))
        (xe.pendingDownloads.get(Ot)?.resolve({ ok: !0 }),
          xe.pendingDownloads.delete(Ot),
          invalidateSkillDirCaches(),
          clearCommandMemoizationCaches(),
          (te = !0),
          writeDiagnosticsEvent("info", "skills_sync_materialized_elsewhere"));
    }
    let Un = Nt.filter((He) => !Tt.has(He.skillId)),
      yn = new Map(
        Nt.filter((He) => Tt.has(He.skillId)).map((He) => [He.skillId, He]),
      ),
      on = new Set(We?.staleDirs ?? []),
      $n = new Set(),
      Kt = new Set(),
      Hn = { pid: process.pid, procStart: await getProcessStartTimeAsync(process.pid) },
      Zt = [];
    if (We?.pendingClaims) {
      let He = We.pendingClaims,
        Qe = new Set();
      for (let Je of He)
        if (await ml(Je)) Qe.add(parseSyncClaimKey(Je).name);
        else Zt.push(Je);
      for (let Je of Zt) {
        let { name: Ot } = parseSyncClaimKey(Je);
        if (Qe.has(Ot) || ro.has(Ot)) continue;
        (on.add(Ot), Kt.add(Je));
      }
    }
    for (let He of on) if (await dn(He)) (on.delete(He), $n.add(He));
    if ($n.size > 0 || Kt.size > 0) te = !0;
    let $t = mergeRowsTrackingAttribution(
      We?.skills ?? [],
      [...Nt, ...Ye.flatMap(({ prev: He }) => He ?? [])],
      (He) => He.skillId,
      (He, Qe) => He.backingPluginId === Qe.backingPluginId,
    );
    if (Ye.length === 0 && Ze.length === 0) {
      if (te) Bs();
      if (($n.size > 0 || Kt.size > 0 || $t.attributionMoved) && We)
        await sl(
          {
            lastUpdated: We.lastUpdated,
            skills: $t.rows,
            staleDirs: on.size > 0 ? Array.from(on) : void 0,
            pendingClaims: void 0,
          },
          {
            staleDirs: $n,
            pendingClaims: Kt,
            removedSkillIds: Zc,
            deferredRows: tu,
          },
          I,
          Oe,
        );
      if (We) {
        let He = new Date();
        await lutimes(Fi(Ae), He, He).catch(() => {});
      }
      (writeDiagnosticsEvent("info", "skills_sync_no_changes", { duration_ms: Date.now() - U }),
        logFeatureOk("skills_sync_round", {
          account_opt_in: ne,
          no_changes: !0,
          duration_ms: Date.now() - U,
        }));
      return;
    }
    let At = 0;
    for (let { item: He, prev: Qe } of Ye)
      if (!Qe)
        (addSkillPlaceholder(Mh(Ae, He)), At++, me.set(He.skillId, registerPendingSkillDownload(jo(xo(Ae, He.name)))));
    if (At > 0) (clearCommandMemoizationCaches(), al(), skillsChangedEmitter.emit());
    let Mn = !0;
    try {
      let He = [];
      for (let { item: Qe } of Ye)
        try {
          He.push(formatSyncClaimKey(jo(xo(Ae, Qe.name)), Hn));
        } catch {}
      if (He.length > 0)
        await sl(
          {
            lastUpdated: We?.lastUpdated ?? 0,
            skills: We?.skills ?? [],
            staleDirs: on.size > 0 ? Array.from(on) : void 0,
            pendingClaims: He,
          },
          {
            staleDirs: $n,
            pendingClaims: Kt,
            removedSkillIds: Zc,
            deferredRows: tu,
          },
          I,
          Oe,
        );
    } catch (He) {
      if (He instanceof SyncOwnedRootRefusedError) throw He;
      ((Mn = !1), writeDiagnosticsEvent("warn", "skills_sync_pending_claims_write_failed"));
    }
    if ((il().resolve(), !Mn)) {
      if (
        (logFeatureBad("skills_sync_round", "pending_claims_write_failed", {
          account_opt_in: ne,
          duration_ms: Date.now() - U,
        }),
        te)
      )
        Bs();
      return;
    }
    let rn = [],
      Lt = [],
      an = [],
      Tn = 0,
      en = 0,
      kn = {};
    await Promise.all(
      Ye.map(
        createConcurrencyLimiter(Jc, async ({ item: He, prev: Qe }) => {
          let Je = _u;
          try {
            Je = await Ih(He, {
              round: Oe,
              credentials: O,
              storageV5: I,
              classifyOccupant: (Ot) => Dh(Ot, I, Oe),
              markTargetDestroyed: () => {
                V = !0;
              },
              replacesAttributedCopy:
                (Qe !== void 0 && (await ku(Ae, Qe.name, He.name))) ||
                yn.has(He.skillId),
            });
          } catch {
            ((Je = Ai), writeDiagnosticsEvent("warn", "skills_sync_extract_failed"));
          }
          if (Je.ok) {
            if ((rn.push(He), Qe && Qe.name !== He.name)) {
              if (!(await dn(Qe.name))) on.add(Qe.name);
            }
            (removeSkillPlaceholder(jo(xo(Ae, He.name))), invalidateSkillDirCaches(), clearCommandMemoizationCaches(), logFeatureOk("skills_sync_download"));
          } else {
            let Ot = getLandingFailureCode(Je.cause);
            if (Ot === null) (Tn++, writeDiagnosticsEvent("info", "skills_sync_landing_deferred"));
            else ((kn[Ot] = (kn[Ot] ?? 0) + 1), logFeatureBad("skills_sync_download", Ot));
            let nn = Qe ?? yn.get(He.skillId);
            if (nn && Je.cause === "deferred") {
              if ((an.push(nn), Qe && Qe.name !== He.name))
                (on.add(Qe.name), en++);
            } else if (nn) Lt.push(nn);
            else
              try {
                let Fn = xo(Ae, He.name);
                if (
                  await Vc(Fn).then(
                    () => !1,
                    (Oo) => W(Oo),
                  )
                )
                  Kt.add(formatSyncClaimKey(jo(Fn), Hn));
              } catch {}
          }
          me.get(He.skillId)?.(
            Je.ok ? { ok: !0 } : { ok: !1, reason: getLandingFailureMessage(Je.cause) },
          );
        }),
      ),
    );
    let It = [];
    await Promise.all(
      Ze.map(
        createConcurrencyLimiter(Jc, async (He) => {
          if (!(await dn(He.name))) It.push(He);
        }),
      ),
    );
    let cn = new Set(Ze.map((He) => He.skillId));
    for (let He of It) cn.delete(He.skillId);
    let ln =
        rn.length > 0 ||
        V ||
        It.length < Ze.length ||
        $n.size > 0 ||
        Kt.size > 0,
      et = ln || en > 0 || $t.attributionMoved;
    if (ln || te) Bs();
    if (et) {
      let He = [...Un, ...rn, ...Lt, ...It],
        Qe = new Set();
      for (let Je of [...He, ...an])
        try {
          Qe.add(jo(xo(Ae, Je.name)));
        } catch {}
      for (let Je of Qe) Kt.add(formatSyncClaimKey(Je, Hn));
      for (let Je of Zt) if (Qe.has(parseSyncClaimKey(Je).name)) Kt.add(Je);
      await sl(
        {
          lastUpdated: Date.now(),
          skills: He,
          staleDirs: on.size > 0 ? Array.from(on) : void 0,
        },
        {
          staleDirs: $n,
          pendingClaims: Kt,
          removedSkillIds: cn,
          deferredRows: an,
        },
        I,
        Oe,
      );
    }
    let tt = Ye.length - rn.length - Tn;
    if (
      (writeDiagnosticsEvent("info", "skills_sync_complete", {
        downloaded: rn.length,
        removed: Ze.length,
        duration_ms: Date.now() - U,
      }),
      logEvent("tengu_skills_sync_success", {
        downloaded: rn.length,
        removed: Ze.length,
        total: $e.skills.length,
        duration_ms: Date.now() - U,
      }),
      tt === 0)
    )
      logFeatureOk("skills_sync_round", {
        account_opt_in: ne,
        downloaded: rn.length,
        deferred: Tn,
        removed: Ze.length,
        total: $e.skills.length,
        duration_ms: Date.now() - U,
      });
    else
      logFeatureSad("skills_sync_round", "download_failed", {
        account_opt_in: ne,
        failed: tt,
        download_failed: kn.download_failed ?? 0,
        extract_failed: kn.extract_failed ?? 0,
        root_refused: kn.root_refused ?? 0,
        local_failed: kn.local_failed ?? 0,
        deferred: Tn,
        downloaded: rn.length,
        total: $e.skills.length,
        duration_ms: Date.now() - U,
      });
  } catch (De) {
    if (te || V) Bs();
    if (De instanceof SyncOwnedRootRefusedError && Me)
      (writeDiagnosticsEvent("warn", "skills_sync_late_root_refusal", {
        reason: De.reason,
        duration_ms: Date.now() - U,
      }),
        logFeatureSad("skills_sync_round", "root_refused", {
          account_opt_in: ne,
          duration_ms: Date.now() - U,
        }),
        (Me = !1));
    else if (De instanceof SyncOwnedRootRefusedError)
      (writeDiagnosticsEvent("warn", "skills_sync_root_refused_round", {
        reason: De.reason,
        duration_ms: Date.now() - U,
      }),
        logFeatureSad("skills_sync_round", "root_refused", {
          account_opt_in: ne,
          duration_ms: Date.now() - U,
        }));
    else
      (xe.consecutiveFailedRounds++,
        writeDiagnosticsEvent("error", "skills_sync_unexpected_error", {
          duration_ms: Date.now() - U,
        }),
        logEvent("tengu_skills_sync_error", { duration_ms: Date.now() - U }),
        logFeatureBad("skills_sync_round", "unexpected_error", {
          account_opt_in: ne,
          duration_ms: Date.now() - U,
        }));
  } finally {
    for (let De of me.values()) De({ ok: !1, reason: "skills sync failed" });
    if ((il().resolve(), Se === null || Se.guard.refused())) Me = !1;
    if (Me && Se !== null) {
      if (
        (await verifySyncOwnedPath(
          Se.root,
          getClaudeConfigDir(),
          { event: "skills_sync_root_refused", phase: "sweep", rootLabel: SYNCED_SKILLS_DIR_PATH },
          { checkStagingLeaf: !0, storageV5: I },
        ).catch(() => null)) === "real"
      )
        await $r(ll(Se.root), { recursive: !0, force: !0 }).catch(() => {});
    }
  }
}
async function ml(w) {
  let { ownerPid: I, ownerProcStart: O } = parseSyncClaimKey(w);
  return I !== void 0 && I !== process.pid && isProcessRunning(I) && (await isSameProcessAsync(I, O));
}
async function Dh(w, I, O) {
  let U = await dl(I, O);
  if (!U) return "unattributed";
  for (let V of U.skills) if (await ku(O.root, V.name, w)) return "landed";
  for (let V of U.pendingClaims ?? [])
    if (parseSyncClaimKey(V).name === w && (await ml(V))) return "inFlight";
  return "unattributed";
}
async function ku(w, I, O) {
  try {
    let U = xo(w, I),
      V = xo(w, O);
    return jo(U) === jo(V) || (await isSameFile(U, V));
  } catch {
    return !1;
  }
}
function Pu(w, I) {
  return ensureSyncRootReady({
    root: I,
    trashRoot: Oi(),
    configHome: getClaudeConfigDir(),
    events: { refused: "skills_sync_root_refused" },
    storageV5: w,
  });
}
function Ru() {
  return !isBgSession();
}
function Au(w) {
  return w.filter(
    (I) => !I.mcpErrorMetadata && !I.statusOnly && !I.startupFatal,
  );
}
function partitionSettingsErrors(w) {
  let I = [],
    O = [];
  for (let U of w) (U.statusOnly ? I : O).push(U);
  return { statusNotices: I, invalidEntries: O };
}
function Tu(w) {
  for (let I of w)
    logForDebugging(
      `Invalid setting skipped without dialog (automated session): ${I.file ?? "settings"}: ${I.path}: ${I.message}`,
      { level: "error" },
    );
}
import { createInterface } from "readline";
class PluginOperationFailedError extends R {
  constructor(w) {
    super(w, "plugin operation returned a failure result");
    this.name = "PluginOperationFailedError";
  }
}
var Fh = {
  install: "claude plugin install failed with an unclassified error",
  uninstall: "claude plugin uninstall failed with an unclassified error",
  enable: "claude plugin enable failed with an unclassified error",
  disable: "claude plugin disable failed with an unclassified error",
  "disable-all":
    "claude plugin disable --all failed with an unclassified error",
  update: "claude plugin update failed with an unclassified error",
  prune: "claude plugin prune failed with an unclassified error",
};
async function handlePluginCommandError(w, I, O) {
  let U = classifyPluginError(w);
  if (w instanceof PluginSourceError && (I === "install" || I === "update")) {
    if ((console.error(sanitizeMultilineForDisplay(l(w))), I === "install")) {
      let { code: Me, kind: Se } = describePluginFailure(w);
      if (Se === "bad") await logFeatureBadAsync("cli_plugin_install", Me);
      else await logFeatureSadAsync("cli_plugin_install", Me);
    }
    (await flushAnalyticsSinks(), process.exit(1));
  }
  let V = w instanceof ClaudeAiMarketplaceError ? `claudeai_${w.code}` : void 0;
  if (U === "unknown" && !(w instanceof PluginOperationFailedError) && V === void 0)
    logError(dt(ge(w), Fh[I]));
  else logForDebugging(`Plugin command "${I}" failed: ${l(w)}`, { level: "error" });
  let te = O
    ? `${I} plugin "${O}"`
    : I === "disable-all"
      ? "disable all plugins"
      : `${I} plugins`;
  console.error(sanitizeMultilineForDisplay(`${figures.cross} Failed to ${te}: ${l(w)}`));
  let ne = V ?? (U === "not-found" ? "not_found" : U);
  switch (I) {
    case "install":
      await logFeatureBadAsync("cli_plugin_install", ne);
      break;
    case "uninstall":
      await logFeatureBadAsync("cli_plugin_uninstall", ne);
      break;
    case "update":
      await logFeatureBadAsync("cli_plugin_update", ne);
      break;
    case "enable":
      await logFeatureBadAsync("cli_plugin_enable", "cli_plugin_enable_failed");
      break;
    default:
      break;
  }
  let me = O ? buildPluginTelemetryFieldsFromId(O, getPolicyPluginNames()) : {};
  (await logEventAsync("tengu_plugin_command_failed", {
    command: fromEnum(I),
    error_category: fromEnum(U),
    ...me,
  }),
    await flushAnalyticsSinks(),
    process.exit(1));
}
function Lh(w, I) {
  let O = {};
  for (let te of w) {
    let ne = te.indexOf("=");
    if (ne <= 0)
      throw Error(
        `--config expects KEY=VALUE, got "${te}". Use --config key=value (repeatable).`,
      );
    let me = te.slice(0, ne),
      Se = (te.slice(ne + 1).split(/\r\n|\r|\n/, 1)[0] ?? "").trim(),
      xe = Object.hasOwn(I, me) ? I[me] : void 0;
    if (!xe) {
      let De = Object.keys(I);
      throw Error(
        `--config key "${me}" isn't declared in this plugin's userConfig.` +
          (De.length > 0 ? ` Known keys: ${De.join(", ")}.` : ""),
      );
    }
    if (Se === "")
      throw Error(
        `--config ${me}: value is empty. Omit the flag to leave "${me}" unset.`,
      );
    if (xe.type === "number") {
      let De = Number(Se);
      if (Number.isNaN(De))
        throw Error(`--config ${me}: "${Se}" is not a number`);
      O[me] = De;
    } else if (xe.type === "boolean") {
      if (!Ie(Se) && !po(Se))
        throw Error(
          `--config ${me}: "${Se}" is not a boolean (use true/false, 1/0, yes/no, on/off)`,
        );
      O[me] = Ie(Se);
    } else O[me] = Se;
  }
  let U = pickBy(I, (te, ne) => Object.hasOwn(O, ne)),
    V = validateUserConfig(O, U);
  if (!V.valid)
    throw Error(`--config validation failed: ${V.errors.join("; ")}`);
  return O;
}
async function Uh(w, I, O) {
  refreshPluginState(O);
  let { enabled: U, disabled: V } = await loadAllPlugins(O),
    te = findPluginById([...U, ...V], w);
  if (!te) {
    if (I && I.length > 0)
      throw Error(
        `--config was given but plugin "${w}" failed to load after install \u2014 run \`claude plugin list\` to see why.`,
      );
    return "";
  }
  let ne = te.manifest.userConfig;
  if (!ne || Object.keys(ne).length === 0) {
    if (I && I.length > 0)
      throw Error(
        `--config was given but plugin "${w}" declares no userConfig options.`,
      );
    return "";
  }
  if (I && I.length > 0) {
    let Se = Lh(I, ne);
    await savePluginOptions(getPluginSource(te), Se, ne, O);
  }
  let me = Object.keys(await getUnconfiguredPluginOptions(te));
  if (me.length === 0) return "";
  let Me = me.filter((Se) => ne[Se]?.required === !0);
  return (
    `${me.length} userConfig ${pluralize(me.length, "option")} not yet set` +
    (Me.length > 0 ? ` (${Me.length} required)` : "") +
    ` \u2014 run /plugin configure ${w} in Claude Code, or pass --config KEY=VALUE.`
  );
}
async function Iu(w, I, { yes: O = !1, acceptedCommand: U } = {}) {
  if (typeof I.source !== "object" || I.source.source !== "command") return;
  if (areCommandPluginSourcesDisabledByPolicy()) {
    writeToStdout(`${COMMAND_PLUGIN_SOURCES_DISABLED_MESSAGE}
`);
    return;
  }
  if (I.source.mode === "link" && getCurrentPlatform() === "windows") {
    writeToStdout(`${LINK_MODE_WINDOWS_UNSUPPORTED_MESSAGE}
`);
    return;
  }
  let V = I.source.command,
    te = getSourceCommandKey(I.source);
  if (U === te && !isPluginsRootUnreliable()) return;
  let { name: ne, marketplace: me } = splitPluginId(w),
    Me = formatDisplayText(ne ?? "", 200),
    Se = formatDisplayText(me ?? "", 200);
  writeToStdout(
    `"${Me}" is installed by running a command from marketplace "${Se}" on this machine` +
      (U === void 0
        ? ""
        : U !== te
          ? " \u2014 and that command (or how its output is used) CHANGED since you accepted it"
          : " \u2014 your earlier acceptance is recorded where it cannot be relied on (a plugins root inside a workspace, on a network location, or one that could not be resolved), so please confirm it again") +
      `:
  ${V}
  (${describeSourceMode(I.source)})
`,
  );
  let xe = await fl({ yes: O });
  return xe === "accepted"
    ? { kind: "accepted", grantKey: te }
    : xe === "declined"
      ? { kind: "declined" }
      : void 0;
}
async function fl({ yes: w = !1 }) {
  let I = process.stdout.isTTY && process.stdin.isTTY;
  if (w) {
    if (!a.CLAUDE_CODE_CHILD_SESSION && !a.CLAUDECODE) return "accepted";
    if (!I)
      return (
        writeToStdout(`-y/--yes is ignored inside a Claude Code session: run this in your own terminal to accept the command shown above.
`),
        "unconfirmed"
      );
  }
  if (!I)
    return (
      writeToStdout(
        a.CLAUDE_CODE_CHILD_SESSION || a.CLAUDECODE
          ? `Not an interactive terminal, so the command was only displayed, not accepted. Run this in your own terminal (outside the Claude Code session) to confirm the command shown above.
`
          : `Not an interactive terminal, so the command was only displayed, not accepted. Re-run in a terminal to confirm it, or pass -y/--yes to accept the command shown above.
`,
      ),
      "unconfirmed"
    );
  return (
    writeToStdout("Run this command now? [y/N] "),
    (await Ou()) ? "accepted" : "declined"
  );
}
async function confirmPluginEntryDisclosure(w, I = {}, O) {
  let { name: U, marketplace: V } = splitPluginId(w);
  if (!U) return null;
  let te = V ?? I.resolvedMarketplace;
  if (!te)
    try {
      te = (await findPluginEntryAcrossMarketplaces(U, O))?.marketplace;
    } catch (Se) {
      if (Se instanceof PluginSourceError) return null;
      throw Se;
    }
  if (!te) return null;
  let ne = `${U}@${te}`;
  if (await isPluginInstalledAndSatisfied(ne, I.scope ?? "user", O)) return null;
  let me = await buildEntryHelperRequest(ne, void 0, O);
  if (me === null) return null;
  writeToStdout(`${formatHeadersHelperWarning(me)}
`);
  let Me = await fl(I);
  return Me === "accepted" ? me : Me;
}
async function reviewPluginCommandSource(w, I = {}, O) {
  let { name: U, marketplace: V } = splitPluginId(w);
  if (!U) return;
  let te = await getKnownMarketplacesOrEmpty(O),
    ne = V,
    me;
  if (!ne) {
    let Ye;
    try {
      Ye = await findPluginEntryAcrossMarketplaces(U, O);
    } catch (Ze) {
      if (Ze instanceof PluginSourceError) return;
      throw Ze;
    }
    if (!Ye) return;
    ((ne = Ye.marketplace), (me = Ye.entry), I.onResolvedMarketplace?.(ne));
  }
  let Me = te[ne];
  if (isSourceDisallowedOrUnverifiable(Me?.source)) return;
  let Se = `${U}@${ne}`,
    xe = me ? { entry: me } : void 0;
  if (!xe) {
    let Ye = await refreshMarketplaceForScopedInstall(ne, Me, O);
    I.onMarketplaceRefreshResult?.(Ye);
    try {
      xe = await findPluginEntry(Se, O);
    } catch (Ze) {
      if (Ze instanceof PluginSourceError) return;
      throw Ze;
    }
  }
  let De = xe ? getCommandSource(xe.entry.source) : void 0;
  if (!xe || !De) return;
  let Oe = (isHoverRestEnabled() && O !== void 0 ? await readInstalledPluginsViaStorage(O) : readInstalledPluginsFile()).plugins[Se] ?? [],
    Ae = getSourceCommandKey(De),
    $e = !isPluginsRootUnreliable(),
    We = $e && Oe.some((Ye) => Ye.sourceCommand === Ae);
  if (await isPluginInstalledOnDisk(Se, I.scope ?? "user", O)) {
    if (!We) {
      let Ye = Oe.every((Ze) => Ze.sourceCommand === void 0);
      writeToStdout(
        `"${formatDisplayText(splitPluginId(Se).name ?? "", 200)}" is already installed, and its marketplace ` +
          (Ye
            ? "entry now installs it by running a command on this machine that has not been reviewed yet."
            : "has since changed the command that installs it (or how its output is used).") +
          ` Review and accept it: ${buildRunCommandHint("plugin update", Se, { extra: (I.scope ?? "user") === "user" ? void 0 : `--scope ${I.scope}`, fallback: "an explicit plugin update reviews it" })}.
`,
      );
    }
    return;
  }
  if (We) return { kind: "accepted", grantKey: Ae };
  return Iu(Se, xe.entry, {
    yes: I.yes,
    acceptedCommand: $e
      ? Oe.find((Ye) => Ye.sourceCommand !== void 0)?.sourceCommand
      : void 0,
  });
}
async function runPluginInstallCommand(w, I = "user", O, U, V, te, ne) {
  try {
    let me = await installPlugin(
      w,
      I,
      { shownSourceCommand: U, shownEntryHelper: V, announceRefreshResult: ne },
      te,
    );
    if (!me.success) throw new PluginOperationFailedError(me.message);
    let Me = me.pluginId || w;
    logEvent("tengu_plugin_installed_cli", {
      ...buildPluginTelemetryFieldsFromId(Me, getPolicyPluginNames()),
      plugin_id: redactPluginId(Me),
      scope: fromEnum(me.scope || I),
      install_source: S("cli-explicit"),
    });
    let Se = "";
    try {
      Se = await Uh(me.pluginId || w, O, te);
    } catch (xe) {
      let De = l(xe);
      if (
        (logForDebugging(`post-install userConfig step failed: ${De}`, { level: "warn" }),
        O && O.length > 0)
      )
        Se = `${figures.warning} Installed, but --config not applied: ${De}`;
    }
    return Se
      ? `${me.message}
${Se}`
      : me.message;
  } catch (me) {
    return handlePluginCommandError(me, "install", w);
  }
}
async function xu(w, I) {
  let O = getProjectPathForScope(w),
    { enabled: U, disabled: V } = await loadAllPluginsCacheOnly(isHoverRestEnabled() ? I : void 0);
  return computeAutoInstalledOrphans(
    (isHoverRestEnabled() && I !== void 0 ? await readInstalledPluginsViaStorage(I) : readInstalledPluginsFile()).plugins,
    [...U, ...V],
    w,
    O,
  );
}
async function runPluginUninstallCommand(w, I = "user", O = !1, U = !1, V = !1, te) {
  try {
    let ne = await uninstallPlugin(w, I, !O, te);
    if (!ne.success) throw new PluginOperationFailedError(ne.message);
    await logEventAsync("tengu_plugin_uninstalled_cli", {
      ...buildPluginTelemetryFieldsFromId(ne.pluginId || w, getPolicyPluginNames()),
      scope: fromEnum(ne.scope || I),
    });
    let me = !1;
    try {
      let Me = await xu(I, te);
      if (U)
        return (
          writeToStdout(`${figures.tick} ${sanitizeForDisplay(ne.message)}
`),
          (me = !0),
          await Du(Me, I, { dryRun: !1, yes: V, deleteDataDir: !O }, te)
        );
      return ne.message + formatOrphanDependenciesNotice(Me.orphans, I);
    } catch (Me) {
      logError(
        dt(
          ge(Me),
          "claude plugin uninstall: post-uninstall orphan scan or prune failed",
        ),
      );
      let xe = `(${U ? "prune" : "orphan scan"} failed: ${l(Me)})`;
      if (me) return xe;
      return `${U ? `${figures.tick} ${ne.message}` : ne.message}
${xe}`;
    }
  } catch (ne) {
    return handlePluginCommandError(ne, "uninstall", w);
  }
}
async function runPluginPruneCommand(w = "user", { dryRun: I = !1, yes: O = !1 } = {}, U) {
  try {
    let V = await xu(w, U);
    return await Du(V, w, { dryRun: I, yes: O, deleteDataDir: !0 }, U);
  } catch (V) {
    return handlePluginCommandError(V, "prune");
  }
}
async function Du(w, I, O, U) {
  if (w.unloadable.length > 0)
    return `Skipped \u2014 cannot determine orphans: ${w.unloadable.map(sanitizeForDisplay).join(", ")} failed to load. Fix or uninstall, then retry.`;
  if (w.orphans.size === 0)
    return w.autoCount === 0
      ? `Nothing to prune (no auto-installed plugins at ${I} scope).`
      : `Nothing to prune (${w.autoCount} auto-installed ${pluralize(w.autoCount, "plugin", "plugins")} at ${I} scope, all still needed).`;
  let V = (isHoverRestEnabled() && U !== void 0 ? await readInstalledPluginsViaStorage(U) : readInstalledPluginsFile()).plugins,
    te = getProjectPathForScope(I),
    ne = [...w.orphans].map((Se) => {
      let xe = V[Se]?.find((De) => De.scope === I && De.projectPath === te);
      return `  ${sanitizeForDisplay(Se)}${xe?.version ? ` (${sanitizeForDisplay(xe.version)})` : ""}`;
    }),
    me = `${w.orphans.size} auto-installed ${pluralize(w.orphans.size, "plugin", "plugins")} no longer needed at ${I} scope:
${ne.join(`
`)}`;
  if (O.dryRun)
    return `${me}
(dry run \u2014 nothing removed)`;
  if (!O.yes) {
    if (!process.stdin.isTTY || !process.stdout.isTTY) {
      let xe = I === "user" ? "" : ` --scope ${I}`;
      return `${me}
Not a TTY \u2014 run \`claude plugin prune${xe} -y\` to remove.`;
    }
    if (
      (writeToStdout(`${me}
Remove? [y/N] `),
      !(await Ou()))
    )
      return "Aborted.";
  }
  let Me = await pruneOrphanedAutoDeps(w.orphans, I, te, { deleteDataDir: O.deleteDataDir }, U);
  return (
    await logEventAsync("tengu_plugin_prune_cli", {
      scope: fromEnum(I),
      removed_count: Me.length,
    }),
    `Removed ${Me.length} auto-installed ${pluralize(Me.length, "plugin", "plugins")}: ${Me.map((Se) => sanitizeForDisplay(splitPluginId(Se).name)).join(", ")}`
  );
}
async function Ou() {
  let w = createInterface({ input: process.stdin });
  try {
    for await (let I of w) return /^y(es)?$/i.test(I.trim());
    return !1;
  } finally {
    w.close();
  }
}
async function runPluginDisableCommand(w, I, O) {
  try {
    let U = await disablePlugin(w, I, O);
    if (!U.success) throw new PluginOperationFailedError(U.message);
    return (
      await logEventAsync("tengu_plugin_disabled_cli", {
        ...buildPluginTelemetryFieldsFromId(U.pluginId || w, getPolicyPluginNames()),
        scope: fromEnumOpt(U.scope),
      }),
      `${figures.tick} ${U.message}`
    );
  } catch (U) {
    return handlePluginCommandError(U, "disable", w);
  }
}
async function runPluginDisableAllCommand(w) {
  try {
    let I = await disableAllPlugins(w);
    if (!I.success) throw new PluginOperationFailedError(I.message);
    return (
      await logEventAsync("tengu_plugin_disabled_all_cli", {}),
      `${figures.tick} ${I.message}`
    );
  } catch (I) {
    return handlePluginCommandError(I, "disable-all");
  }
}
async function runPluginUpdateCommand(w, I, { yes: O = !1 } = {}, U) {
  try {
    writeToStdout(`${sanitizeForDisplay(`Checking for updates for plugin "${w}" at ${I} scope\u2026`)}
`);
    let V = await updatePlugin(
        w,
        I,
        {
          explicit: !0,
          onEntryHelperDisclosure: async (ne) => (
            writeToStdout(`${ne}
`),
            fl({ yes: O })
          ),
          announceCommandSource: async (ne, me, Me) => {
            let Se = await Iu(ne, me, { yes: O, acceptedCommand: Me });
            if (Se?.kind === "declined")
              throw new PluginSourceError(
                "Aborted \u2014 the command was not run.",
                "plugin command source declined at the prompt",
              );
            return Se?.grantKey;
          },
        },
        U,
      ),
      te = sanitizeForDisplay(V.message);
    if (V.outcome === "failed") {
      if (V.failureCode !== void 0 && isSadFailureCode(V.failureCode))
        throw new PluginSourceError(te, `${PLUGIN_UPDATE_REFUSED_PREFIX}${V.failureCode}`);
      throw new PluginOperationFailedError(te);
    }
    if (
      (writeToStdout(`${figures.tick} ${te}
`),
      V.outcome === "updated")
    )
      logEvent("tengu_plugin_updated_cli", {
        ...buildPluginTelemetryFieldsFromId(V.pluginId || w, getPolicyPluginNames()),
        old_version: getVersionForAnalytics(V.oldVersion),
        new_version: getVersionForAnalytics(V.newVersion),
      });
    (logFeatureOk("cli_plugin_update"), await gracefulShutdown(0));
  } catch (V) {
    return handlePluginCommandError(V, "update", w);
  }
}
import { mkdir as Fu, writeFile } from "fs/promises";
import {
  dirname as Bh,
  join as Cr,
  relative as $h,
  resolve as Uu,
  sep as jh,
} from "path";
var Hh = "https://anthropic.com/claude-code/plugin.schema.json",
  PLUGIN_SCAFFOLD_COMPONENTS = ["skills", "agents", "hooks", "mcp", "lsp", "output-style", "channel"];
function validatePluginName(w) {
  let I = getPluginManifestSchema().shape.name.safeParse(w);
  if (!I.success) return I.error.issues[0]?.message ?? null;
  if (w.includes("/") || w.includes("\\") || w.includes("..") || w === ".")
    return 'Plugin name cannot contain path separators (/ or \\), ".." sequences, or be "."';
  if (!stripTrailingDotsAndSpaces(w) || isSyncOwnedRootName(w) || isHiddenPathSegment(w))
    return `Plugin name cannot be "${SYNCED_DIR_NAME}" or start with "." \u2014 those directories are never loaded as plugin adoptions`;
  return null;
}
function buildPluginScaffoldFiles(w) {
  let { name: I, description: O, author: U } = w,
    V = w.with ?? [],
    te = [],
    ne = {
      $schema: Hh,
      name: I,
      version: "0.1.0",
      description: O ?? "TODO: describe what this plugin provides",
    };
  if (U) ne.author = U;
  if (
    ((ne.skills = ["./"]),
    te.push({
      relPath: Cr(".claude-plugin", "plugin.json"),
      contents:
        jsonStringify(ne, null, 2) +
        `
`,
    }),
    te.push({ relPath: "SKILL.md", contents: Nu(I) }),
    V.includes("skills"))
  )
    te.push({
      relPath: Cr("skills", "example", "SKILL.md"),
      contents: Nu("example"),
    });
  if (V.includes("agents"))
    te.push({ relPath: Cr("agents", "example.md"), contents: Gh() });
  if (V.includes("hooks"))
    te.push(
      { relPath: Cr("hooks", "hooks.json"), contents: Kh() },
      {
        relPath: Cr("hooks-handlers", "on-session-start.ts"),
        contents: Wh(),
        mode: 493,
      },
    );
  if (V.includes("mcp") && !V.includes("channel"))
    te.push({ relPath: ".mcp.json", contents: zh() });
  if (V.includes("lsp")) te.push({ relPath: ".lsp.json", contents: qh() });
  if (V.includes("output-style"))
    te.push({ relPath: Cr("output-styles", `${I}.md`), contents: Xh(I) });
  if (V.includes("channel"))
    ((ne.channels = [{ server: I, displayName: I }]),
      te.push(
        { relPath: ".mcp.json", contents: Jh(I) },
        { relPath: "server.ts", contents: eS(I) },
        { relPath: "package.json", contents: Zh(I) },
      ));
  return (
    (te[0].contents =
      jsonStringify(ne, null, 2) +
      `
`),
    te
  );
}
async function writePluginScaffoldFiles(w, I, O) {
  let U = Uu(w);
  if (!O.force)
    try {
      await Fu(Cr(U, ".claude-plugin"));
    } catch (te) {
      if (A(te) === "EEXIST")
        return {
          ok: !1,
          error: `${Cr(U, ".claude-plugin")} already exists. Use --force to overwrite.`,
        };
      if (A(te) !== "ENOENT") throw te;
    }
  let V = [];
  for (let te of I) {
    let ne = Uu(U, te.relPath),
      me = $h(U, ne);
    if (me.startsWith(".." + jh) || me === "..")
      return { ok: !1, error: `Refusing to write outside ${U}: ${te.relPath}` };
    if ((await Fu(Bh(ne), { recursive: !0 }), O.force))
      await writeFileAtomic(ne, te.contents, te.mode);
    else
      try {
        await writeFile(ne, te.contents, { flag: "wx", mode: te.mode });
      } catch (Me) {
        if (A(Me) !== "EEXIST") throw Me;
        V.push(te.relPath);
      }
  }
  return { ok: !0, skipped: V };
}
function Nu(w) {
  return `---
name: ${w}
description: TODO \u2014 describe WHEN Claude should use this. Include trigger phrases users
  might say ("do X", "set up Y", "review Z"). Be specific; this string is what Claude
  matches the user's request against.
---

# ${w}

TODO: what this skill does, and the steps Claude should take.
`;
}
function Gh() {
  return `---
name: example
description: TODO \u2014 when should Claude delegate to this subagent?
tools:
  - Read
  - Grep
---

TODO: system prompt for the subagent.
`;
}
function Kh() {
  return (
    jsonStringify(
      {
        hooks: {
          SessionStart: [
            {
              hooks: [
                {
                  type: "command",
                  command:
                    "bun ${CLAUDE_PLUGIN_ROOT}/hooks-handlers/on-session-start.ts",
                },
              ],
            },
          ],
        },
      },
      null,
      2,
    ) +
    `
`
  );
}
function Wh() {
  return `#!/usr/bin/env bun
// SessionStart hook handler. Reads the event from stdin, writes a JSON result
// to stdout. Swap "bun" for "node" or "python3" in hooks/hooks.json if your
// users' environment lacks bun.
const input = await new Response(Bun.stdin.stream()).text()
const event = JSON.parse(input)
process.stdout.write(JSON.stringify({}))
`;
}
function zh() {
  return (
    jsonStringify(
      {
        mcpServers: {
          "example-remote": { type: "http", url: "https://example.com/mcp" },
          "example-local": {
            command: "npx",
            args: ["<your-mcp-server-package>"],
          },
        },
      },
      null,
      2,
    ) +
    `
`
  );
}
function qh() {
  return (
    jsonStringify(
      {
        example: {
          command: "example-language-server",
          args: ["--stdio"],
          extensionToLanguage: { ".example": "example" },
        },
      },
      null,
      2,
    ) +
    `
`
  );
}
function Xh(w) {
  return `---
name: ${w}
description: TODO \u2014 one line shown in the Output style picker in /config
force-for-plugin: true
keep-coding-instructions: true
---

TODO: the style prompt. This is appended to Claude's system prompt while the
style is active. With force-for-plugin: true, the style applies automatically
when this plugin is enabled.
`;
}
function Jh(w) {
  return (
    jsonStringify(
      {
        mcpServers: {
          [w]: {
            command: "bun",
            args: [
              "run",
              "--cwd",
              "${CLAUDE_PLUGIN_ROOT}",
              "--shell=bun",
              "--silent",
              "start",
            ],
          },
        },
      },
      null,
      2,
    ) +
    `
`
  );
}
function Zh(w) {
  return (
    jsonStringify(
      {
        name: `claude-channel-${w}`,
        version: "0.1.0",
        type: "module",
        scripts: { start: "bun install --no-summary && bun server.ts" },
        dependencies: { "@modelcontextprotocol/sdk": "^1.0.0" },
      },
      null,
      2,
    ) +
    `
`
  );
}
function eS(w) {
  return `#!/usr/bin/env bun
/**
 * ${w} channel server \u2014 stdio MCP server implementing the channel contract.
 * See https://code.claude.com/docs/en/channels-reference.
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

const mcp = new Server(
  { name: '${w}', version: '0.1.0' },
  {
    capabilities: {
      tools: {},
      // Required: presence of this key registers the channel notification
      // listener on Claude's side.
      experimental: { 'claude/channel': {} },
    },
    instructions:
      "Events from ${w} arrive as <channel source=\\"${w}\\" ...>. Anything " +
      "you want the sender to see must go through the reply tool \u2014 your " +
      "transcript output never reaches the channel.",
  },
)

mcp.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'reply',
      description: 'Send a message back to the ${w} channel.',
      inputSchema: {
        type: 'object',
        properties: { text: { type: 'string' } },
        required: ['text'],
      },
    },
  ],
}))

mcp.setRequestHandler(CallToolRequestSchema, async req => {
  const args = (req.params.arguments ?? {}) as Record<string, unknown>
  if (req.params.name === 'reply') {
    // TODO: deliver args.text to the external service.
    return { content: [{ type: 'text', text: 'sent' }] }
  }
  return { content: [{ type: 'text', text: 'unknown tool' }], isError: true }
})

// TODO: when the external service has an inbound event, push it to Claude:
//
//   await mcp.notification({
//     method: 'notifications/claude/channel',
//     params: {
//       content: 'the event body',
//       meta: { chat_id: '...', sender: '...' },
//     },
//   })
//
// Each meta key becomes an attribute on the <channel> tag. Keys must be
// identifiers (letters/digits/underscores) \u2014 others are silently dropped.

await mcp.connect(new StdioServerTransport())
`;
}
var ensureBuiltinPluginsRegistered = () => registerBuiltinPlugins();
var initializeBuiltinPlugins = () => registerBuiltinPlugins();
function getCloudSessionsUnavailableReason() {
  let w = getAPIProvider();
  if (w !== "firstParty")
    return `Cloud sessions aren't available with ${THIRD_PARTY_PROVIDER_LABELS[w]}. They run on Anthropic's infrastructure and require an Anthropic account.`;
  return policyDeniedReason("allow_remote_sessions", "Cloud sessions", "are");
}
var gl = toESM(picomatchModule(), 1);
import { readFile as cS, stat as uS } from "fs/promises";
function* Bu(w) {
  for (let I of w)
    if (I.type === "assistant" && Array.isArray(I.message.content)) {
      for (let O of I.message.content)
        if (O.type === "tool_use" && SHELL_TOOL_NAMES.includes(O.name)) {
          let { input: U } = O;
          if (
            typeof U === "object" &&
            U !== null &&
            "command" in U &&
            typeof U.command === "string"
          )
            yield U.command;
        }
    }
}
function collectBashCommands(w) {
  let I = new Set();
  for (let O of Bu(w)) {
    let U = aS(O);
    if (U) I.add(U);
  }
  return I;
}
var oS = /https?:\/\/([^\s/?#'"`<>\\)\];&|(,]+)/gi;
function sS(w) {
  if (!w) return [];
  let I = [];
  for (let O of w.matchAll(oS)) {
    let U = O[1].toLowerCase(),
      V = U.lastIndexOf("@");
    if (V !== -1) U = U.slice(V + 1);
    let te = U.indexOf(":");
    if (te !== -1) U = U.slice(0, te);
    if (U) I.push(U);
  }
  return I;
}
function collectBashHosts(w) {
  let I = new Set();
  for (let O of Bu(w)) for (let U of sS(O)) I.add(U);
  return I;
}
function collectUsedToolNames(w) {
  let I = new Set();
  for (let O of w)
    if (O.type === "assistant" && Array.isArray(O.message.content)) {
      for (let U of O.message.content) if (U.type === "tool_use") I.add(U.name);
    }
  return I;
}
var iS = new Set(["sudo"]);
function aS(w) {
  if (!w) return;
  let I = w.trim().split(/\s+/);
  for (let O of I) {
    if (/^[A-Za-z_]\w*=/.test(O)) continue;
    if (iS.has(O)) continue;
    return O;
  }
  return;
}
function buildSessionContext(w, I) {
  return { readFileState: I, bashTools: collectBashCommands(w), bashHosts: collectBashHosts(w) };
}
function normalizePluginRelevanceSignals(w, I) {
  let O = I;
  if (
    !O?.signals ||
    (!O.signals.cli?.length &&
      !O.signals.filesRead?.length &&
      !O.signals.manifestDeps?.length &&
      !O.signals.hosts?.length &&
      !O.signals.cwd?.length)
  )
    return null;
  let U;
  try {
    if (O.signals.manifestDeps?.length)
      U = O.signals.manifestDeps.map((te) => ({
        file: new RegExp(te.file, "i"),
        pattern: new RegExp(te.pattern),
      }));
  } catch (te) {
    return (
      logForDebugging(
        `Skipping relevance signals for "${w}": invalid RegExp in relevance.signals: ${te}`,
        { level: "warn" },
      ),
      null
    );
  }
  let V = O.signals.hosts?.map((te) => te.toLowerCase());
  return {
    cli: O.signals.cli,
    hosts: V,
    filesRead: O.signals.filesRead,
    manifestDep: U,
    cwd: O.signals.cwd,
  };
}
async function matchPluginRelevanceSignal(w, I) {
  let { bashTools: O, bashHosts: U } = I ?? {};
  if (w.cli && O?.size) {
    let ne = w.cli.find((me) => O.has(me));
    if (ne) return { signal: "cli", command: ne };
  }
  if (w.hosts?.length && U?.size) {
    let ne = w.hosts.find((me) => U.has(me));
    if (ne) return { signal: "hosts", host: ne };
  }
  if (w.cwd?.length) {
    let ne = getCwd().replaceAll("\\", "/"),
      me = findGitRoot(getCwd())?.replaceAll("\\", "/"),
      Me = [ne];
    if (me && ne.startsWith(`${me}/`)) Me.push(ne.slice(me.length + 1));
    for (let Se of w.cwd) {
      let xe = Se.replace(/\/+$/, "").replace(/\/\*\*$/, "");
      if (!xe) continue;
      if (
        Me.some((De) =>
          gl.default.isMatch(De, [xe, `${xe}/**`], { nocase: !0, dot: !0 }),
        )
      )
        return { signal: "cwd" };
    }
  }
  let V = I?.readFileState,
    te = V ? listCachedFilePaths(V) : [];
  if (w.filesRead?.length && te.length) {
    let ne = te.find((me) =>
      gl.default.isMatch(me.replaceAll("\\", "/"), w.filesRead, {
        nocase: !0,
        dot: !0,
      }),
    );
    if (ne) return { signal: "filesRead", file: ne };
  }
  if (w.manifestDep && V && te.length > 0) {
    let ne = new Map(V.entries()),
      me = (async () => {
        for (let { file: Se, pattern: xe } of w.manifestDep)
          for (let De of te) {
            if (!Se.test(De)) continue;
            try {
              let Oe = ne.get(De),
                Ae = Oe && isFullFileView(Oe) ? Oe.content : void 0;
              if (!Ae) {
                if ((await uS(De)).size > 524288) continue;
                Ae = await cS(De, "utf8");
              }
              if (xe.test(Ae)) return De;
            } catch {}
          }
        return null;
      })(),
      Me = await withTimeout(me, 50, "manifestDep scan").catch(() => null);
    if (Me) return { signal: "manifestDep", file: Me };
  }
  return null;
}
var mS = 3,
  pS = 3,
  UPSELL_IDLE_DELAY_MINUTES = 20,
  REMOTE_CONTROL_READY_PUSH_MESSAGE =
    "Your Claude Code session is ready \u2014 continue from your phone anytime.";
function getLongTurnNudgeConfig() {
  if (antEnv.CLAUDE_CODE_FORCE_RC_LONG_TURN_NUDGE)
    return {
      thresholdSec: 5,
      probability: 1,
      maxImpressions: -1,
      impressionKey: "force",
      dayStartHour: 0,
      dayEndHour: 24,
    };
  let w = getFeatureValue_CACHED_MAY_BE_STALE("tengu_rc_long_turn_nudge", null);
  if (w === !0)
    return {
      thresholdSec: 90,
      probability: 1,
      maxImpressions: 3,
      impressionKey: "",
      dayStartHour: 7,
      dayEndHour: 21,
    };
  if (w === null || typeof w !== "object") return null;
  let I =
      typeof w.thresholdSec === "number" && Number.isFinite(w.thresholdSec)
        ? Math.min(3600, Math.max(5, w.thresholdSec))
        : 90,
    O =
      typeof w.probability === "number" && Number.isFinite(w.probability)
        ? Math.min(1, Math.max(0, w.probability))
        : 1,
    U =
      typeof w.maxImpressions === "number" && Number.isFinite(w.maxImpressions)
        ? Math.trunc(w.maxImpressions)
        : 3,
    V = typeof w.impressionKey === "string" ? w.impressionKey : "",
    te = (Me, Se) =>
      typeof Me === "number" && Number.isFinite(Me)
        ? Math.min(24, Math.max(0, Math.trunc(Me)))
        : Se,
    ne = te(w.dayStartHour, 7),
    me = te(w.dayEndHour, 21);
  return {
    thresholdSec: I,
    probability: O,
    maxImpressions: U,
    impressionKey: V,
    dayStartHour: ne,
    dayEndHour: me,
  };
}
function isWithinNudgeHours(w, I = new Date()) {
  if (w.dayStartHour >= w.dayEndHour) return !0;
  let O = I.getHours();
  return O >= w.dayStartHour && O < w.dayEndHour;
}
function $u(w, I) {
  let O = (getGlobalConfig()[w] ?? 0) + 1;
  saveGlobalConfig((U) => ((U[w] ?? 0) >= O ? U : { ...U, [w]: O }), I);
}
var Li = { afterPromptCount: 5, probability: 0, maxImpressions: 3 };
function getPermissionNudgeConfig() {
  let w,
    I = antEnv.CLAUDE_CODE_RC_PERMISSION_NUDGE;
  if (I)
    try {
      w = jsonParse(I);
    } catch {
      w = void 0;
    }
  w ??= getFeatureValue_CACHED_MAY_BE_STALE("tengu_rc_permission_nudge", Li);
  let O = (U, V) => (typeof U === "number" && Number.isFinite(U) ? U : V);
  return {
    afterPromptCount: Math.max(1, O(w?.afterPromptCount, Li.afterPromptCount)),
    probability: O(w?.probability, Li.probability),
    maxImpressions: O(w?.maxImpressions, Li.maxImpressions),
  };
}
function shouldShowRemoteControlUpsell() {
  if (!isBridgeEnabled()) return !1;
  let w = getGlobalConfig();
  return (
    !w.hasUsedRemoteControl &&
    !getRemoteControlAtStartup() &&
    (w.remoteControlUpsellSeenCount ?? 0) < mS
  );
}
function recordRemoteControlUpsellShown(w) {
  ($u("remoteControlUpsellSeenCount", w), logFeatureOk("tips_rc_upsell_show"));
}
function fS() {
  return getGlobalConfig().hasUsedRemoteControl === !0 || getRemoteControlAtStartup();
}
function shouldShowPushNotificationsUpsell() {
  return _l() && (getGlobalConfig().pushNotifUpsellSeenCount ?? 0) < pS;
}
function _l() {
  return isBridgeEnabled() && isPushNotificationsEnabled() && fS() && resolveSetting("agentPushNotifEnabled", !1).value !== !0;
}
function recordPushNotificationsUpsellShown(w) {
  ($u("pushNotifUpsellSeenCount", w), logFeatureOk("tips_push_upsell_show"));
}
function shouldShowLongTurnNudge(w) {
  if (!isBridgeEnabled()) return !1;
  if (w.maxImpressions === 0) return !1;
  if (w.maxImpressions < 0) return !0;
  let I = getGlobalConfig();
  return (
    ((I.rcLongTurnNudgeSeenKey ?? "") === w.impressionKey
      ? (I.rcLongTurnNudgeSeenCount ?? 0)
      : 0) < w.maxImpressions
  );
}
function recordLongTurnNudgeShown(w, I) {
  if (w.maxImpressions >= 0)
    saveGlobalConfig((O) => {
      let U = (O.rcLongTurnNudgeSeenKey ?? "") === w.impressionKey;
      return {
        ...O,
        rcLongTurnNudgeSeenCount: U ? (O.rcLongTurnNudgeSeenCount ?? 0) + 1 : 1,
        rcLongTurnNudgeSeenKey: w.impressionKey,
      };
    }, I);
  logFeatureOk("tips_rc_long_turn_show");
}
function shouldShowPermissionNudge(w) {
  if (!isBridgeEnabled()) return !1;
  return (getGlobalConfig().rcPermissionNudgeSeenCount ?? 0) < w;
}
function recordPermissionNudgeShown(w) {
  (saveGlobalConfig(
    (I) => ({
      ...I,
      rcPermissionNudgeSeenCount: (I.rcPermissionNudgeSeenCount ?? 0) + 1,
    }),
    w,
  ),
    logFeatureOk("tips_rc_permission_nudge_show"));
}
function getReadyPushNudgeConfig() {
  if (!isPushNotificationsEnabled()) return null;
  let w = getFeatureValue_CACHED_MAY_BE_STALE("tengu_kairos_ready_nudge", null);
  if (w === !0) return { probability: 1, maxImpressions: 5, impressionKey: "" };
  if (w === null || typeof w !== "object") return null;
  let I =
      typeof w.probability === "number" && Number.isFinite(w.probability)
        ? Math.min(1, Math.max(0, w.probability))
        : 1,
    O =
      typeof w.maxImpressions === "number" && Number.isFinite(w.maxImpressions)
        ? Math.trunc(w.maxImpressions)
        : 5,
    U = typeof w.impressionKey === "string" ? w.impressionKey : "";
  return { probability: I, maxImpressions: O, impressionKey: U };
}
function shouldSendReadyPushNotification(w, I, O) {
  if (!I || O) return !1;
  if (isBgSession() || getAgentId() != null) return !1;
  if (w.maxImpressions === 0) return !1;
  if (w.maxImpressions < 0) return !0;
  let U = getGlobalConfig();
  return (
    ((U.remoteControlReadyPushKey ?? "") === w.impressionKey
      ? (U.remoteControlReadyPushCount ?? 0)
      : 0) < w.maxImpressions
  );
}
function recordReadyPushNotificationSent(w, I) {
  if (w.maxImpressions >= 0)
    saveGlobalConfig((O) => {
      let U = (O.remoteControlReadyPushKey ?? "") === w.impressionKey;
      return {
        ...O,
        remoteControlReadyPushCount: U
          ? (O.remoteControlReadyPushCount ?? 0) + 1
          : 1,
        remoteControlReadyPushKey: w.impressionKey,
      };
    }, I);
  logFeatureOk("tips_rc_ready_push_send");
}
function markRemoteControlUsed(w) {
  if (getGlobalConfig().hasUsedRemoteControl) return;
  saveGlobalConfig(
    (I) => (I.hasUsedRemoteControl ? I : { ...I, hasUsedRemoteControl: !0 }),
    w,
  );
}
var yS = ["mobile", "web", "desktop"];
function hS(w) {
  switch (w) {
    case "ios":
    case "android":
      return "mobile";
    case "web_claude_ai":
      return "web";
    case "desktop_app":
      return "desktop";
    default:
      return;
  }
}
function recordRemoteControlSurfaceSeen(w, I) {
  let O = hS(w);
  if (!O) return;
  if (Sl(getGlobalConfig()).includes(O)) return;
  saveGlobalConfig((U) => {
    let V = Sl(U);
    if (V.includes(O)) return U;
    return { ...U, remoteControlSurfacesSeen: [...V, O] };
  }, I);
}
function Cl() {
  let w = Sl(getGlobalConfig()),
    I = w.includes("mobile"),
    O = w.includes("web");
  if (I === O) return;
  return I ? "web" : "mobile";
}
function Sl(w) {
  let I = w.remoteControlSurfacesSeen;
  return Array.isArray(I) ? I.filter((O) => yS.some((U) => U === O)) : [];
}
async function checkGitHubAuthStatus({ allowNetworkFallbackForOldGh: w }) {
  if (!(await resolveExecutablePathAsync("gh"))) return { status: "not_installed" };
  try {
    let O = await Bf("gh", ["auth", "token"], {
      stdout: "ignore",
      stderr: "pipe",
      timeout: 5000,
      reject: !1,
    });
    if (O.exitCode === 0)
      return { status: "authenticated", supportsAuthTokenCommand: !0 };
    if (O.timedOut)
      return { status: "unknown", error: "`gh auth token` timed out" };
    if (/not logged in|no oauth token/i.test(O.stderr))
      return { status: "not_authenticated" };
    if (
      /unknown command/i.test(O.stderr) ||
      (Number.isInteger(O.exitCode) && O.stderr.trim() === "")
    ) {
      if (!w)
        return {
          status: "unknown",
          error: "this GitHub CLI version has no `gh auth token`",
        };
      let V = await Bf("gh", ["auth", "status"], {
        stdout: "ignore",
        stderr: "pipe",
        timeout: 5000,
        reject: !1,
      });
      if (V.exitCode === 0)
        return { status: "authenticated", supportsAuthTokenCommand: !1 };
      if (V.timedOut)
        return { status: "unknown", error: "`gh auth status` timed out" };
      if (/logged in to/i.test(V.stderr))
        return { status: "authenticated", supportsAuthTokenCommand: !1 };
      if (/not logged in/i.test(V.stderr))
        return { status: "not_authenticated" };
      return {
        status: "unknown",
        error: V.stderr.trim() || "`gh auth status` failed to run",
      };
    }
    return {
      status: "unknown",
      error: O.stderr.trim() || "`gh auth token` failed to run",
    };
  } catch {
    return { status: "not_installed" };
  }
}
async function buildInitialTeamContext(w) {
  let I = getDynamicTeamContext();
  if (!I?.teamName || !I?.agentName) {
    logForDebugging(
      "[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)",
    );
    return;
  }
  let { teamName: O, agentId: U, agentName: V } = I,
    te = await readTeamFileAsync(O, w);
  if (!te) {
    logError(
      dt(
        Error(`[computeInitialTeamContext] Could not read team file for ${O}`),
        "[computeInitialTeamContext] Could not read team file",
      ),
    );
    return;
  }
  let ne = getTeamFilePath(O),
    me = !U;
  return (
    logForDebugging(
      `[Reconnection] Computed initial team context for ${me ? "leader" : `teammate ${V}`} in team ${O}`,
    ),
    {
      teamName: O,
      teamFilePath: ne,
      leadAgentId: te.leadAgentId,
      selfAgentId: U,
      selfAgentName: V,
      isLeader: me,
      teammates: {},
    }
  );
}
async function restoreTeammateContextFromSession(w, I, O, U) {
  let V = await readTeamFileAsync(I, U);
  if (!V) {
    logForDebugging(
      `[initializeTeammateContextFromSession] Could not read team file for ${I} (agent: ${O}) \u2014 team may have been disbanded`,
      { level: "error" },
    );
    return;
  }
  let te = V.members.find((Me) => Me.name === O);
  if (!te)
    logForDebugging(
      `[Reconnection] Member ${O} not found in team ${I} - may have been removed`,
    );
  let ne = te?.agentId,
    me = getTeamFilePath(I);
  (w((Me) => ({
    ...Me,
    teamContext: {
      teamName: I,
      teamFilePath: me,
      leadAgentId: V.leadAgentId,
      selfAgentId: ne,
      selfAgentName: O,
      isLeader: !1,
      teammates: {},
    },
  })),
    logForDebugging(
      `[Reconnection] Initialized agent context from session for ${O} in team ${I}`,
    ));
}
function Hu(w) {
  return typeof w === "string" ? formatSingleLineText(w, { maxCodeUnits: 512 }) : void 0;
}
function vl(w) {
  return formatSingleLineText(w, { maxCodeUnits: 64 });
}
var Gu = 32,
  SS = 300000;
function isStaleBootstrapFrame(w, I) {
  let O = w.data?.timestamp;
  if (typeof O !== "string") return !1;
  let U = Date.parse(O);
  return !Number.isNaN(U) && I - U > SS;
}
var Ku = ["provision", "clone", "setup_script", "start_cc"];
function isBootstrapStepId(w) {
  return Ku.includes(w);
}
var _S = 60000,
  bS = 5000;
function CS(w, I, O) {
  let U = w.data?.timestamp;
  if (typeof U !== "string") return !1;
  let V = Date.parse(U);
  return Number.isFinite(V) && Math.abs(I - V) <= _S && V >= O - bS;
}
function createRemoteBootstrapState(w) {
  return {
    steps: Ku.map((I) => ({ id: I, status: "pending" })),
    sessionMode: null,
    startedAt: w,
    hasStructuredSteps: !1,
    terminal: !1,
    dismissed: !1,
    sawLiveFrame: !1,
    hadLiveCycle: !1,
    queuedCount: 0,
  };
}
function parseBootstrapStepMeta(w) {
  let I = w.data?.extra;
  return {
    stepId: typeof I?.step_id === "string" ? vl(I.step_id) : null,
    stepStatus: typeof I?.step_status === "string" ? I.step_status : null,
  };
}
function reduceRemoteBootstrapState(w, I, O, U, V) {
  let te = I.data?.extra,
    { stepId: ne, stepStatus: me } = parseBootstrapStepMeta(I),
    Me =
      w.terminal && ne !== null && me !== null
        ? { ...createRemoteBootstrapState(U), dismissed: w.hadLiveCycle, hadLiveCycle: w.hadLiveCycle }
        : w;
  if (ne !== null && me !== null && !Me.sawLiveFrame && CS(I, U, V))
    Me = { ...Me, sawLiveFrame: !0 };
  if (typeof te?.session_mode === "string") {
    let Se = te.session_mode;
    if (
      (Se === "new" ||
        Se === "resume" ||
        Se === "resume-cached" ||
        Se === "setup-only") &&
      Me.sessionMode !== Se
    )
      Me = { ...Me, sessionMode: Se };
  }
  if (typeof te?.expected_steps === "string") {
    let Se = dedupe(
      te.expected_steps
        .split(",")
        .map((xe) => vl(xe))
        .filter((xe) => xe !== ""),
    ).slice(0, Gu);
    if (Se.length > 0) {
      let xe = new Map(Me.steps.map((Ae) => [Ae.id, Ae])),
        De = Se.map((Ae) => xe.get(Ae) ?? { id: Ae, status: "pending" }),
        Oe = Me.steps.filter(
          (Ae) => !Se.includes(Ae.id) && Ae.status !== "pending",
        );
      Me = { ...Me, steps: [...Oe, ...De] };
    }
  }
  if (ne !== null && me !== null)
    Me = vS(Me, { stepId: ne, stepStatus: me, extra: te, line: O, now: U });
  else if (O !== "") {
    let Se = Me.steps.findIndex((xe) => xe.status === "running");
    if (Se !== -1 && Me.steps[Se].detail !== O) {
      let xe = Me.steps.slice();
      ((xe[Se] = { ...xe[Se], detail: O }), (Me = { ...Me, steps: xe }));
    }
  }
  return Me;
}
function vS(w, { stepId: I, stepStatus: O, extra: U, line: V, now: te }) {
  let ne = vl(I),
    me = w.steps,
    Me = me.findIndex((Ae) => Ae.id === ne);
  if (Me === -1) {
    if (me.length >= Gu) return w;
    let Ae = Hu(U?.step_label) || V;
    ((me = [...me, { id: ne, label: Ae, status: "pending" }]),
      (Me = me.length - 1));
  }
  let Se = me[Me],
    xe = Hu(U?.step_detail),
    De = null;
  switch (O) {
    case "started":
      if (Se.status === "pending")
        De = { ...Se, status: "running", startedAt: te, detail: xe };
      else if (xe !== void 0 && Se.detail !== xe) De = { ...Se, detail: xe };
      break;
    case "completed":
      if (Se.status !== "completed")
        De = { ...Se, status: "completed", completedAt: te, detail: void 0 };
      break;
    case "failed":
      if (Se.status !== "failed" || Se.error !== V)
        De = { ...Se, status: "failed", completedAt: te, error: V || void 0 };
      break;
    case "skipped":
      if (Se.status === "pending" || Se.status === "running")
        De = { ...Se, status: "skipped", detail: void 0 };
      break;
    default:
      break;
  }
  if (De !== null)
    ((me = me === w.steps ? w.steps.slice() : me), (me[Me] = De));
  if (me === w.steps) return w;
  let Oe = { ...w, steps: me, hasStructuredSteps: !0 };
  if (ne === "start_cc" && O === "completed") Oe = finishRemoteBootstrap(Oe, te);
  return Oe;
}
function finishRemoteBootstrap(w, I) {
  if (w.terminal) return w;
  let O = w.steps.map((U) =>
    U.status === "pending"
      ? { ...U, status: "skipped" }
      : U.status === "running"
        ? { ...U, status: "completed", completedAt: I }
        : U,
  );
  return {
    ...w,
    steps: O,
    terminal: !0,
    completedAt: I,
    hadLiveCycle: w.hadLiveCycle || w.sawLiveFrame,
  };
}
function formatBootstrapStepLabel(w, I) {
  let O = I === "resume" || I === "resume-cached",
    U = w.status === "completed";
  switch (w.id) {
    case "provision":
      if (O)
        return U
          ? "Resumed your cloud container"
          : "Resuming your cloud container";
      return U ? "Set up a cloud container" : "Setting up a cloud container";
    case "clone":
      if (O) return U ? "Refreshed repository" : "Refreshing repository";
      return U ? "Cloned repository" : "Cloning repository";
    case "setup_script":
      return U ? "Ran setup script" : "Running setup script";
    case "start_cc":
      return U ? "Started Claude Code" : "Starting Claude Code";
    default:
      return w.label || w.id;
  }
}
function formatRemoteSessionModeLabel(w) {
  return w === "resume" || w === "resume-cached"
    ? "Resuming remote session"
    : "Setting up remote session";
}
function formatRemoteSessionSummary(w) {
  let O =
      w.sessionMode === "resume" || w.sessionMode === "resume-cached"
        ? "resumed"
        : "ready",
    U = (w.completedAt ?? w.startedAt) - w.startedAt;
  return `Remote session ${O} in ${zu(U)}`;
}
function formatBootstrapStepDuration(w, I) {
  if (w.startedAt === void 0) return "";
  if (w.status === "completed")
    return w.completedAt === void 0
      ? ""
      : ` (${zu(w.completedAt - w.startedAt)})`;
  let O = Math.max(0, I - w.startedAt);
  return w.status === "running" && O >= 5000
    ? ` (${Math.round(O / 1000)}s)`
    : "";
}
function zu(w) {
  if (w < 1e4) return `${(Math.max(w, 100) / 1000).toFixed(1)}s`;
  let I = Math.round(w / 1000);
  if (I < 60) return `${I}s`;
  return `${Math.floor(I / 60)}m ${I % 60}s`;
}
import { isAbsolute, resolve as wS, win32 as Vu } from "path";
async function isSessionCwdSafeToAdopt(w, I, O = fsSurface) {
  if (
    !(isAbsolute(w) || Vu.isAbsolute(w)) ||
    An(w) ||
    gp(w) ||
    gp(Vu.normalize(w)) ||
    jf(w) ||
    jf(wS(w)) ||
    pl(w)
  )
    return (
      logForDebugging(`[${I}] session reported a network-path cwd \u2014 not adopting`, {
        level: "warn",
      }),
      !1
    );
  if (await hasUnverifiableAncestryWithAnchor(w, wz(), O))
    return (
      logForDebugging(
        `[${I}] session-reported cwd's local ancestry could not be verified as network-free \u2014 not adopting`,
        { level: "warn" },
      ),
      !1
    );
  return !0;
}
import { stat as PS } from "fs/promises";
import { homedir as RS } from "os";
import { join as Xu, sep as MS } from "path";
var AS = 604800000,
  PREFILL_LONG_PROMPT_THRESHOLD = 1000;
function formatDeepLinkSessionNotice(w) {
  let I = [`This session was opened by an external deep link in ${TS(w.cwd)}`];
  if (w.repo) {
    let O = w.lastFetch ? formatRelativeTimeAgo(w.lastFetch) : "never",
      U = !w.lastFetch || Date.now() - w.lastFetch.getTime() > AS;
    I.push(
      `Resolved ${w.repo} from local clones \xB7 last fetched ${O}${U ? " \u2014 CLAUDE.md may be stale" : ""}`,
    );
  }
  if (w.prefillLength)
    I.push(
      w.prefillLength > PREFILL_LONG_PROMPT_THRESHOLD
        ? `The prompt below (${formatNumber(w.prefillLength)} chars) was supplied by the link \u2014 scroll to review the entire prompt before pressing Enter.`
        : "The prompt below was supplied by the link \u2014 review carefully before pressing Enter.",
    );
  return I.join(`
`);
}
async function getRepoLastFetchTime(w) {
  let I = await getGitDir(w);
  if (!I) return;
  let O = await getCommonDir(I),
    [U, V] = await Promise.all([
      Ju(Xu(I, "FETCH_HEAD")),
      O ? Ju(Xu(O, "FETCH_HEAD")) : Promise.resolve(void 0),
    ]);
  if (U && V) return U > V ? U : V;
  return U ?? V;
}
async function Ju(w) {
  try {
    let { mtime: I } = await PS(w);
    return I;
  } catch {
    return;
  }
}
function TS(w) {
  let I = RS();
  if (w === I) return "~";
  if (w.startsWith(I + MS)) return "~" + w.slice(I.length);
  return w;
}
var IS = new Set([
  "CLAUDE_CODE_ENTRYPOINT",
  "CLAUDE_CODE_MESSAGING_SOCKET",
  "CLAUDE_CODE_MESSAGING_TOKEN",
]);
function getSetEnvVarNames(w = process.env) {
  let I = [];
  for (let O in w)
    if (
      (O.startsWith("CLAUDE_CODE_") || O.startsWith("ANTHROPIC_")) &&
      !IS.has(O) &&
      w[O] !== void 0 &&
      w[O] !== ""
    )
      I.push(O);
  return I.sort();
}
var xS = new Set([
  "tipsHistory",
  "installMethod",
  "shiftEnterKeyBindingInstalled",
  "hasUsedBackslashReturn",
  "hasCompletedClaudeInChromeOnboarding",
  "remoteDialogSeen",
  "lspRecommendationIgnoredCount",
  "autoUpdates",
  "autoUpdatesProtectedForNative",
]);
function getNonDefaultGlobalConfigKeys(w) {
  let I = getInitialSettings(),
    O = [];
  for (let U of GLOBAL_CONFIG_KEYS) {
    if (xS.has(U)) continue;
    let te = (USER_INTENT_SETTING_KEYS.includes(U) ? I[U] : void 0) ?? w[U],
      ne = DEFAULT_GLOBAL_CONFIG[U];
    if (te === void 0 || OS(te, ne)) continue;
    O.push(U);
  }
  return O;
}
var DS = [
  "model",
  "outputStyle",
  "language",
  "effortLevel",
  "fastMode",
  "alwaysThinkingEnabled",
  "spinnerTipsEnabled",
  "prefersReducedMotion",
  "timeFormat",
  "timeZone",
  "promptSuggestionEnabled",
  "awaySummaryEnabled",
  "precomputeCompactionEnabled",
  "switchModelsOnFlag",
  "autoUpdatesChannel",
  "viewMode",
  "syntaxHighlightingDisabled",
  "useAutoModeDuringPlan",
  "enableWorkflows",
  "disableWorkflows",
  "disableArtifact",
  "enableArtifact",
  "workflowKeywordTriggerEnabled",
  "respondToBashCommands",
  "bashOutputMaxChars",
  "taskOutputMaxChars",
  "autoCompactWindow",
  "cleanupPeriodDays",
  "forceLoginMethod",
  "keybindingFlavor",
];
function getSetUserSettingsKeys(w) {
  let I = [];
  for (let O of DS) if (w[O] !== void 0) I.push(O);
  if (w.permissions?.defaultMode !== void 0) I.push("permissions.defaultMode");
  if (w.worktree?.baseRef !== void 0) I.push("worktree.baseRef");
  return I.sort();
}
function Qu(w, I) {
  let O = [];
  for (let U in w) if (I(U) === "cli") O.push(U);
  return O.sort();
}
function OS(w, I) {
  if (w === I) return !0;
  if (typeof w === "object" && w !== null) return Object.keys(w).length === 0;
  return !1;
}
var FS = 268435456,
  Zu = Symbol("first line too long"),
  Bi,
  em,
  LS = createLazyValue(() =>
    c({
      type: k("control_request"),
      request: it({ subtype: k("initialize"), plugins: se().optional() }),
    }),
  );
function startInitializeRequestReader(w) {
  if (Bi) return;
  let I = {
    generator: w(),
    stash: [],
    inflight: void 0,
    ended: !1,
    error: void 0,
    adopted: !1,
    capped: !1,
  };
  ((em = I),
    (Bi = NS(I)
      .then(
        jS,
        (O) => (
          (I.error = O),
          logFeatureSad("sdk_launch_initialize", "stdin_error"),
          { kind: "absent" }
        ),
      )
      .catch(
        () => (logFeatureBad("sdk_launch_initialize", "parse_threw"), { kind: "absent" }),
      )),
    Bi.then(() => BS(I)));
}
function getInitializeRequestResult() {
  return Bi ?? Promise.resolve(void 0);
}
function tm() {
  let w = em;
  if (!w || w.adopted) return;
  return ((w.adopted = !0), $S(w));
}
function areInitializePluginsApplied(w) {
  let I = v(getPluginConfigSchema()).optional().safeParse(w);
  if (!I.success) return !1;
  let O = I.data;
  if (O === void 0 || O.length === 0) return;
  let U = new Set(kL()),
    V = new Set(xL());
  return O.every((te) =>
    te.skipMcpDiscovery ? V.has(te.path) : U.has(te.path),
  );
}
async function NS(w) {
  let I = "";
  for (;;) {
    let O = I.indexOf(`
`);
    if (O !== -1) {
      let V = I.slice(0, O);
      if (V.trim() !== "") return V;
      I = I.slice(O + 1);
      continue;
    }
    if (I.length > FS) return ((w.capped = !0), Zu);
    w.inflight = w.generator.next();
    let U = await w.inflight;
    if (((w.inflight = void 0), U.done)) return ((w.ended = !0), null);
    (w.stash.push(U.value), (I += U.value));
  }
}
async function BS(w) {
  try {
    while (!w.adopted && !w.ended && !w.capped && w.error === void 0) {
      w.inflight = w.generator.next();
      let I = await w.inflight;
      if (((w.inflight = void 0), I.done)) w.ended = !0;
      else w.stash.push(I.value);
    }
  } catch (I) {
    ((w.inflight = void 0), (w.error = I));
  }
}
async function* $S(w) {
  let I = !1;
  try {
    while (w.stash.length > 0) yield w.stash.shift();
    if (w.inflight) {
      await w.inflight.catch(() => {});
      while (w.stash.length > 0) yield w.stash.shift();
    }
    if (w.error !== void 0) throw w.error;
    if (w.ended) return;
    ((I = !0), yield* w.generator);
  } finally {
    if (!I && !w.ended) w.generator.return(void 0).catch(() => {});
  }
}
function jS(w) {
  if (w === null)
    return (
      logForDebugging(
        "--await-initialize: stdin ended before an initialize request arrived",
        { level: "warn" },
      ),
      logFeatureSad("sdk_launch_initialize", "stdin_ended"),
      { kind: "absent" }
    );
  if (w === Zu)
    return (
      logForDebugging(
        "--await-initialize: first stdin line exceeds the line-size ceiling; not parsed",
        { level: "error" },
      ),
      logFeatureBad("sdk_launch_initialize", "first_line_too_long"),
      { kind: "absent" }
    );
  let I;
  try {
    I = normalizeRequestIdFields(jsonParse(cs(w)));
  } catch {
    return (
      logFeatureBad("sdk_launch_initialize", "first_line_not_json"),
      {
        kind: "violation",
        message:
          "Error: --await-initialize requires the initialize control request as the first stdin line, and the first line is not valid JSON.",
      }
    );
  }
  let O = LS().safeParse(I);
  if (!O.success)
    return (
      logFeatureBad("sdk_launch_initialize", "first_line_not_initialize"),
      {
        kind: "violation",
        message:
          "Error: --await-initialize requires the initialize control request as the first stdin line, and the first line is a different message.",
      }
    );
  let U = v(getPluginConfigSchema()).optional().safeParse(O.data.request.plugins);
  if (!U.success)
    return (
      logFeatureBad("sdk_launch_initialize", "plugins_malformed"),
      {
        kind: "violation",
        message:
          "Error: initialize.plugins must be an array of { type: 'local', path: string, skipMcpDiscovery?: boolean } entries.",
      }
    );
  let V = U.data ?? [];
  return (
    logFeatureOk("sdk_launch_initialize"),
    {
      kind: "applied",
      pluginDirs: V.filter((te) => !te.skipMcpDiscovery).map((te) => te.path),
      pluginDirsNoMcp: V.filter((te) => te.skipMcpDiscovery).map(
        (te) => te.path,
      ),
    }
  );
}
async function runLifecycleHooks(w, I) {
  switch (I.kind) {
    case "session-start": {
      let O = await runSessionStartHooks(w, I.source, {
          sessionId: I.sessionId,
          agentType: I.agentType,
          model: I.model,
          forceSyncExecution: I.forceSyncExecution,
          storageV5: I.storageV5,
          credentials: I.credentials,
        }),
        U = takePendingHookSessionTitle();
      if (U) cacheHookSessionTitle(U);
      return O;
    }
    case "setup":
      return runSetupHooks(w, I.trigger, {
        forceSyncExecution: I.forceSyncExecution,
        storageV5: I.storageV5,
        credentials: I.credentials,
      });
  }
}
function om({
  remote: w,
  isNonInteractiveSession: I,
  headlessCloud: O,
  isContinue: U,
  pendingAssistantChat: V,
  pendingConnectUrl: te,
  pendingSSHHost: ne,
}) {
  if (I) return O;
  if (U) return !1;
  return (
    w !== null ||
    Boolean(V?.sessionId) ||
    Boolean(V?.discover) ||
    Boolean(te) ||
    Boolean(ne)
  );
}
function suppressInitialMessage(w, I) {
  return w ? null : I;
}
var nm = /^(?:session|cse)_[A-Za-z0-9_]+$/;
function parseSelfAddressableSessionId(w) {
  if (nm.test(w)) return w;
  if (w.includes("/") && !/\s/.test(w)) {
    for (let I of w.split(/[/?#]/)) if (nm.test(I)) return I;
  }
  return null;
}
function isHermeticModeEnabled() {
  return a.CLAUDE_CODE_REMOTE && a.CLAUDE_CODE_REMOTE_HERMETIC_MODE;
}
function mergeAgentMcpServers(w, I, O) {
  if (!I) return w;
  if (isSafeMode()) return w;
  if ((O?.strictMcpConfig && I.source !== "flagSettings") || doesEnterpriseMcpConfigExist()) return w;
  let V = agentMcpSpecsToScopedConfigs(I);
  if (Object.keys(V).length === 0) return w;
  let { allowed: te, blocked: ne } = filterMcpServersByPolicy(V);
  if (ne.length > 0) O?.onBlocked?.(ne);
  return { ...te, ...w };
}
function HS() {
  let w = a.CLAUDE_BG_SESSION_PERMISSION_RULES;
  if (!w || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  try {
    let I = JSON.parse(w);
    return Array.isArray(I.allow) && Array.isArray(I.deny)
      ? { allow: I.allow, deny: I.deny }
      : void 0;
  } catch {
    return;
  }
}
async function sm(w) {
  if (
    a.CLAUDE_BG_MEMORY_TOGGLED_OFF === "1" &&
    a.CLAUDE_CODE_SESSION_KIND === "bg"
  )
    f_e(!0);
  if (
    w.baseTools &&
    !a.CLAUDE_CODE_REMOTE &&
    a.CLAUDE_CODE_SESSION_KIND !== "bg"
  ) {
    let { toolsSpecNamesSelfHostedRunnerTool: ne } = import.meta.require(
      "../../01-核心基础设施/核心工具-未归类/chunk-02q6xmh3.js",
    );
    if (ne(w.baseTools)) enableWizardOperatorTools();
  }
  let I = await initializeToolPermissionContext({
      allowedToolsCli: w.allowedTools,
      disallowedToolsCli: w.disallowedTools,
      baseToolsCli: w.baseTools,
      restricted: w.restricted,
      permissionMode: w.permissionMode,
      allowDangerouslySkipPermissions: w.allowDangerouslySkipPermissions,
      addDirs: w.addDirs,
      bgSessionPermissionRules: HS(),
      storageV5: w.storageV5,
    }),
    O = I.toolPermissionContext,
    {
      warnings: U,
      dangerousPermissions: V,
      overlyBroadBashPermissions: te,
    } = I;
  if ((publishPermissionSnapshot(O), w.permissionMode === "auto")) O = stripDangerousPermissionsForAutoMode(O);
  if (w.permissionMode === "plan") {
    let ne = activatePlanAutoMode(O);
    if (ne) O = { ...ne, prePlanMode: "default" };
  }
  return (
    publishAdditionalWorkingDirectories(O),
    {
      toolPermissionContext: O,
      warnings: U,
      dangerousPermissions: V,
      overlyBroadBashPermissions: te,
    }
  );
}
async function im({
  cwd: w,
  toolPermissionContext: I,
  applyCoordinatorFilter: O,
  agentsJson: U,
  agentSetting: V,
  commandsPromise: te,
  agentDefsPromise: ne,
  deferCommands: me,
  onToolsLoaded: Me,
  storageV5: Se,
}) {
  let xe = getBuiltinToolsForContext(I);
  if (O && !0 && isCoordinatorModeEnabled()) {
    let { applyCoordinatorToolFilter: Ze } =
      await import("../../01-核心基础设施/核心工具-未归类/chunk-1m91n7yv.js");
    xe = Ze(xe);
  }
  (Me?.(), te?.catch(() => {}), ne?.catch(() => {}));
  let De = te ?? getCommands(w, Se);
  if (me) De.catch(() => {});
  let [Oe, Ae] = await Promise.all([
      me ? Promise.resolve([]) : De,
      ne ?? getAgentDefinitionsWithOverrides(w, Se),
    ]),
    $e = [];
  if (U && !isCustomizationDisabled("agents", { explicitlyRequested: !0 }))
    try {
      let Ze = xt(U);
      if (Ze) $e = parseAgentsFromJson(Ze, "flagSettings");
    } catch (Ze) {
      logError(Ze);
    }
  else if (U)
    logForDebugging(
      "--agents: ignored in safe mode (user-supplied custom agents are disabled)",
      { level: "warn" },
    );
  let We = rebuildAgentDefinitions(Ae, [...Ae.allAgents, ...$e]),
    Ye = Rl(We.activeAgents, V);
  return (
    PW(Ye?.agentType),
    {
      tools: xe,
      commands: Oe,
      agentDefinitions: We,
      mainThreadAgentDefinition: Ye,
      cliAgents: $e,
      deferredCommandsPromise: me ? De : void 0,
    }
  );
}
function am(w) {
  return w && a.CLAUDE_CODE_SYNC_PLUGIN_INSTALL;
}
function Rl(w, I) {
  if (!I) return;
  let O = filterOutWebFetchAgent(w),
    U =
      O.find((V) => V.agentType === I) ??
      O.find((V) => V.agentType.endsWith(`:${I}`));
  if (!U)
    logForDebugging(
      `Warning: agent "${I}" not found. Available agents: ${w.map((V) => V.agentType).join(", ")}. Using default behavior.`,
    );
  return U;
}
import { readFile as GS } from "fs/promises";
import { resolve as KS } from "path";
function lm(w, I = process.env) {
  if (w) I.CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT = "1";
}
async function cm(w) {
  if (!w.appendSubagentSystemPromptFile)
    return { ok: !0, prompt: w.appendSubagentSystemPrompt };
  if (w.appendSubagentSystemPrompt)
    return {
      ok: !1,
      error:
        "Error: Cannot use both --append-subagent-system-prompt and --append-subagent-system-prompt-file. Please use only one.",
    };
  let I = KS(w.appendSubagentSystemPromptFile);
  try {
    return { ok: !0, prompt: await GS(I, "utf8") };
  } catch (O) {
    if (A(O) === "ENOENT")
      return {
        ok: !1,
        error: `Error: Append subagent system prompt file not found: ${I}`,
      };
    return {
      ok: !1,
      error: `Error reading append subagent system prompt file: ${l(O)}`,
    };
  }
}
var um = 10485760;
async function* iterateStdinJsonLines() {
  try {
    (process.stdin.setEncoding("utf8"), yield* iterateStreamUntilClose(process.stdin));
  } catch (w) {
    if (!isStdinUnusableError(w)) throw w;
    (logForDebugging(`getInputPrompt: stream-json stdin unreadable: ${l(w)}`, {
      level: "error",
    }),
      logError(
        Object.assign(Error("getInputPrompt: stream-json stdin unreadable"), {
          code: A(w),
        }),
      ),
      await cliErrorAfterAnalyticsFlush(
        `Error: cannot read --input-format=stream-json messages from stdin (${A(w)}): stdin is unreadable. stream-json input requires a readable stdin for the lifetime of the session.`,
      ));
  }
}
async function mm(w, I) {
  if (!process.stdin.isTTY && getFirstPositionalArg() !== "mcp") {
    if (I === "stream-json") return tm() ?? iterateStdinJsonLines();
    let O = "",
      U = (te) => {
        if (O.length + te.length > um)
          return (
            process.stdin.off("data", U),
            cliError(
              `Error: piped stdin input exceeds ${um / 1024 / 1024}MB. Pass large content as a file path in your prompt instead.`,
            )
          );
        O += te;
      };
    try {
      (process.stdin.setEncoding("utf8"), process.stdin.on("data", U));
    } catch (te) {
      if ((process.stdin.off("data", U), !isStdinUnusableError(te))) throw te;
      return (
        logForDebugging(`getInputPrompt: piped stdin unreadable: ${l(te)}`, {
          level: "error",
        }),
        logError(
          Object.assign(Error("getInputPrompt: piped stdin unreadable"), {
            code: A(te),
          }),
        ),
        cliWarn(
          `Warning: stdin is unreadable (${A(te)}), proceeding without piped input. ` +
            "If you piped input, it was not received \u2014 pass it as a prompt argument, or check that the process launching Claude Code wires stdin to a pipe or /dev/null.",
        ),
        w
      );
    }
    let V = await peekForStdinData(process.stdin, 3000);
    if ((process.stdin.off("data", U), V))
      cliWarn(
        "Warning: no stdin data received in 3s, proceeding without it. If piping from a slow command, redirect stdin explicitly: < /dev/null to skip, or wait longer.",
      );
    return [w, O].filter(Boolean).join(`
`);
  }
  return w;
}
function WS(w) {
  switch (w) {
    case void 0:
      return null;
    case "true":
    case "1":
      return !0;
    case "false":
    case "0":
      return !1;
    default:
      return "invalid";
  }
}
async function fm(w, I) {
  let O = w.teleport ?? null,
    U = w.cloud ?? w.remote,
    V = U === !0 ? "" : (U ?? null),
    te = typeof U === "string" ? parseSelfAddressableSessionId(U) : null,
    ne =
      typeof U === "string" &&
      te === null &&
      !w.initOnly &&
      /^\s*\S+\s*$/.test(U)
        ? U
        : void 0,
    me = null,
    Me = !1,
    Se = null,
    xe = null;
  {
    let at = w.environment ?? w.pool;
    if (at !== void 0) {
      if (!isSelfHostedPoolId(at))
        return {
          ok: !1,
          error: `Error: --environment expects a self-hosted environment id (ccpool_...), got ${truncateAndEscapeValue(at)}`,
        };
      if (w.resume || w.continue || O)
        return {
          ok: !1,
          error:
            "Error: --environment cannot be combined with --resume, --continue, or --teleport",
        };
      if (w.initOnly || I.sessionId)
        return {
          ok: !1,
          error: `Error: --environment cannot be combined with ${w.initOnly ? "--init-only" : "--session-id"}`,
        };
      if (te !== null)
        return {
          ok: !1,
          error:
            "Error: --environment creates a new session; it cannot be combined with --cloud <session_id|url>",
        };
      if (
        (w.print || I.nonInteractive) &&
        typeof U === "string" &&
        U.length > 0
      )
        return {
          ok: !1,
          error:
            "Error: non-interactive --environment reads the prompt from the positional or stdin; drop --cloud/--remote <description>.",
        };
      if ((w.print || I.nonInteractive) && I.outputFormat === "stream-json")
        return {
          ok: !1,
          error:
            "Error: --environment does not support --output-format stream-json",
        };
      if (
        typeof U === "string" &&
        U.length > 0 &&
        typeof I.prompt === "string" &&
        I.prompt.length > 0
      )
        return {
          ok: !1,
          error:
            "Error: --environment with --cloud <description> cannot also take a positional prompt. Pass the task as the description, or drop --cloud.",
        };
      if (((me = at), V === null || V === "")) {
        let dn = typeof I.prompt === "string" ? I.prompt : "";
        if (!(w.print || I.nonInteractive) && parseSelfAddressableSessionId(dn) !== null)
          return {
            ok: !1,
            error:
              "Error: --environment creates a new session; it cannot be combined with a session id or url",
          };
        ((V = dn), (Me = !0));
      }
    }
    let zt = w.ref;
    if (zt !== void 0) {
      if (me === null && V === null)
        return {
          ok: !1,
          error: `Error: --ref sets the base branch for a cloud session; pass --cloud or --environment${w.project !== void 0 ? " \u2014 --project no longer starts cloud sessions" : ""}`,
        };
      if (te !== null)
        return {
          ok: !1,
          error:
            "Error: --ref sets the base for a new cloud session; it cannot be combined with --cloud <session_id|url>",
        };
      if (zt === "")
        return {
          ok: !1,
          error: "Error: --ref requires a non-empty branch, tag, or SHA",
        };
      Se = zt;
    }
    let Qt = w.onBranch;
    if (Qt !== void 0) {
      if (me === null && V === null)
        return {
          ok: !1,
          error: `Error: --on-branch resumes work on a branch in a cloud session; pass --cloud or --environment${w.project !== void 0 ? " \u2014 --project no longer starts cloud sessions" : ""}`,
        };
      if (te !== null)
        return {
          ok: !1,
          error:
            "Error: --on-branch resumes a branch in a new cloud session; it cannot be combined with --cloud <session_id|url>",
        };
      if (Se !== null)
        return {
          ok: !1,
          error:
            "Error: --on-branch and --ref both set the cloud session's base branch; pass one or the other",
        };
      if (Qt === "")
        return {
          ok: !1,
          error: "Error: --on-branch requires a non-empty branch name",
        };
      xe = Qt;
    }
  }
  let De = !1,
    Oe = null,
    Ae = null,
    $e = null;
  {
    let at = w.correlationId;
    if (at !== void 0) {
      if (me === null)
        return {
          ok: !1,
          error: "Error: --correlation-id requires --environment",
        };
      if (!/^[\x21-\x2C\x2E-\x7E][\x21-\x7E]{0,511}$/.test(at))
        return {
          ok: !1,
          error:
            'Error: --correlation-id must be 1-512 printable ASCII characters with no spaces and no leading "-"',
        };
      $e = at;
    }
  }
  let We =
      V !== null &&
      me === null &&
      Oe === null &&
      isHeadlessCloudRun({
        print: Boolean(w.print),
        initOnly: Boolean(w.initOnly),
        nonInteractive: I.nonInteractive,
        inputFormat: I.inputFormat,
        outputFormat: I.outputFormat,
        hasSdkUrl: I.hasSdkUrl,
      }) &&
      (await I.isViolinWoodEnabled().catch(() => !1)),
    Ye = WS(w.forwardHomeSettings);
  if (Ye === "invalid")
    return {
      ok: !1,
      error: `Error: --forward-home-settings takes true or false, not ${truncateAndEscapeValue(String(w.forwardHomeSettings))}.`,
    };
  let Ze = Ye !== !1,
    Nt = Ye === !0 ? "forward" : null;
  if (Ye !== null && me === null && V === null && te === null)
    return {
      ok: !1,
      error:
        "Error: --forward-home-settings says whether this machine's settings go into a cloud session; pass --cloud (a new session, or one to attach to) or --environment",
    };
  if (V !== null) {
    let at = getCloudFlagConflictError({
      print: w.print,
      nonInteractive: I.nonInteractive,
      continue: w.continue,
      resume: w.resume,
      fromPr: w.fromPr,
      hasTeleport: O !== null,
      hasConnect: I.hasConnect,
      hasSSH: I.hasSSH,
      hasAssistant: !1,
      hasPool: me !== null,
      isCloudAttach: te !== null,
      headlessCloud: We,
      loneWordValue: ne,
    });
    if (at) return { ok: !1, error: at };
  }
  return {
    ok: !0,
    value: {
      teleport: O,
      remote: V,
      cloudAttachId: te,
      poolId: me,
      poolPromotedRemote: Me,
      poolRef: Se,
      poolOnBranch: xe,
      forwardHomeSettings: Ze,
      homeSettingsConsent: Nt,
      projectFlag: Oe,
      projectBrowse: Ae,
      projectForRemoteControl: De,
      correlationId: $e,
      headlessCloud: We,
    },
  };
}
function gm(w) {
  if (!w.sessionId) return { ok: !0 };
  if ((w.continue || w.resume) && !w.forkSession && !w.sdkUrl)
    return {
      ok: !1,
      error:
        "Error: --session-id can only be used with --continue or --resume if --fork-session is also specified.",
    };
  return { ok: !0 };
}
function ym(w) {
  let I = {},
    O = K();
  return {
    unsubscribe: sc((V, te) => {
      if (V === O) return;
      let ne = O;
      ((O = V),
        logEvent("tengu_session_start", {
          previous_session_id: sanitizeAnalyticsId(ne),
          source: fromEnum(te),
          permissionMode: fromEnum(w.permissionMode),
          dangerouslySkipPermissionsPassed: w.dangerouslySkipPermissionsPassed,
          modeIsBypass: w.modeIsBypass,
          print: w.print,
          ...I,
        }));
    }),
    updateContext(V) {
      I = { ...I, ...V };
    },
  };
}
function hm(w, I, O) {
  try {
    if (!isLongContextDisabled() || !isAutoCompactEnabled()) return null;
    if (isUnresolvedInferenceProfileArn(w)) return null;
    let U = isRecognizedModel(w),
      V = !U || isNative1mContextModel(w) || zS(w, O) || VS(w),
      te = STANDARD_CONTEXT_WINDOW_TOKENS,
      { window: ne, source: me } = resolveAutoCompactWindow(w, I, O);
    if ((me !== "auto" && ne <= te) || !V)
      return (logFeatureOk("compact_context_cap_enforcement"), null);
    let Se = U
        ? ""
        : ` or update to a Claude Code version that recognizes ${w}`,
      xe = `CLAUDE_CODE_DISABLE_1M_CONTEXT is set, but the ${te / 1000}K limit isn't enforced for ${w}, so this session can grow past it. To enforce it, set CLAUDE_CODE_AUTO_COMPACT_WINDOW=${te} (or the autoCompactWindow setting)${Se}.`;
    return (
      logFeatureBad(
        "compact_context_cap_enforcement",
        me === "auto" ? "window_source_auto" : "window_above_boundary",
      ),
      xe
    );
  } catch (U) {
    return (
      logFeatureSad("compact_context_cap_enforcement", "resolve_failed"),
      logError(dt(ge(U), "cap enforcement check failed")),
      null
    );
  }
}
function zS(w, I) {
  if (isHipaaTaintActive()) return !1;
  if (!(
    I?.includes(LONG_CONTEXT_BETA.header) === !0 ||
    (a.ANTHROPIC_BETAS ?? "")
      .split(",")
      .map((U) => U.trim())
      .includes(LONG_CONTEXT_BETA.header)
  ))
    return !1;
  return getCatalogEntryById(strip1mSuffix(getCanonicalName(w)))?.context?.supports_1m_beta === !0;
}
function VS(w) {
  let I = antUpstreamContextWindow(w);
  return I !== void 0 && I > STANDARD_CONTEXT_WINDOW_TOKENS;
}
function Sm(w, I, O) {
  try {
    return YS(w, I, O);
  } catch (U) {
    return (logError(dt(ge(U), "unknown-model notice failed")), null);
  }
}
function YS(w, I, O) {
  let { source: U, window: V } = resolveAutoCompactWindow(w, I, O);
  if (U !== "unknown-model") return null;
  let te = ror(w),
    ne = a.CLAUDE_CODE_MAX_CONTEXT_TOKENS;
  if (te && ne !== void 0 && ne > 0) return null;
  let me = V < 1e6,
    Me = [];
  if (!isLongContextDisabled() && me) Me.push("append [1m] to the model name for 1M");
  if (te) Me.push("set CLAUDE_CODE_MAX_CONTEXT_TOKENS to its real window");
  let Se =
    Me.length > 0
      ? `; if the model accepts ${me ? "more" : "less"}, ${Me.join(", or ")}`
      : "";
  return `${formatUnrecognizedModelNotice(w)} Until then auto-compact keeps this session within ${formatTokens(V)} tokens (the context window it assumes)${Se}; CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1 restores the previous wait-for-the-API behavior.`;
}
var XS = [
  ".local",
  ".internal",
  ".intranet",
  ".lan",
  ".corp",
  ".home",
  ".home.arpa",
  ".localdomain",
  ".private",
  ".ts.net",
];
function QS(w) {
  if (w.type === void 0 || w.type === "stdio") return "stdio";
  switch (w.type) {
    case "sdk":
    case "sse-ide":
    case "ws-ide":
    case "claudeai-proxy":
      return "managed";
    case "sse":
    case "http":
    case "ws":
      return ZS(w.url);
  }
}
function ZS(w) {
  if (/\$\{[^}]*\}/.test(w) || /^[a-z][a-z0-9+.-]*:\/\/\//i.test(w))
    return "other";
  let I;
  try {
    I = new URL(w).hostname
      .toLowerCase()
      .replace(/^\[|\]$/g, "")
      .replace(/\.$/, "");
  } catch {
    return "other";
  }
  if (!I) return "other";
  let O = e_(I);
  if (O !== null) I = O;
  if (
    I === "localhost" ||
    I === "localhost.localdomain" ||
    I === "0.0.0.0" ||
    I === "::1" ||
    I === "::" ||
    I.endsWith(".localhost") ||
    /^127\.\d+\.\d+\.\d+$/.test(I)
  )
    return "localhost";
  if (t_(I)) return "private_network";
  return "public";
}
function e_(w) {
  let I = w.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/);
  if (I) {
    let O = parseInt(I[1], 16),
      U = parseInt(I[2], 16);
    return `${O >> 8}.${O & 255}.${U >> 8}.${U & 255}`;
  }
  return null;
}
function t_(w) {
  if (!w.includes(".") && !w.includes(":")) return !0;
  if (
    /^10\.\d+\.\d+\.\d+$/.test(w) ||
    /^192\.168\.\d+\.\d+$/.test(w) ||
    /^172\.(?:1[6-9]|2\d|3[01])\.\d+\.\d+$/.test(w) ||
    /^169\.254\.\d+\.\d+$/.test(w) ||
    /^100\.(?:6[4-9]|[7-9]\d|1[01]\d|12[0-7])\.\d+\.\d+$/.test(w) ||
    /^f[cd][0-9a-f]{2}:/.test(w) ||
    /^fe[89ab][0-9a-f]:/.test(w)
  )
    return !0;
  return XS.some((I) => w.endsWith(I));
}
function _m(w) {
  let I = new Set();
  for (let O of w) I.add(QS(O));
  return {
    has_mcp_stdio: I.has("stdio"),
    has_mcp_managed: I.has("managed"),
    has_mcp_localhost: I.has("localhost"),
    has_mcp_private_network: I.has("private_network"),
    has_mcp_public: I.has("public"),
    has_mcp_other: I.has("other"),
  };
}
function bm(
  w,
  { dropForEnterpriseMcpConfig: I, dropForSideloadPolicy: O = !1 },
) {
  let U = isSafeMode()
    ? "safe mode"
    : isHermeticModeEnabled()
      ? "hermetic mode"
      : I
        ? "enterprise MCP config"
        : O
          ? "disableSideloadFlags policy"
          : void 0;
  if (!U) return { servers: w, dropped: [], reason: U };
  let V = {},
    te = [];
  for (let [ne, me] of Object.entries(w))
    if (me.type === "sdk") V[ne] = me;
    else te.push(ne);
  return { servers: V, dropped: te, reason: U };
}
function Cm(w) {
  getMcpClientState().skippedDynamicServers.push(...w);
}
function getSkippedDynamicMcpServers() {
  return getMcpClientState().skippedDynamicServers;
}
function vm(w) {
  let {
    effectiveModel: I,
    initialMainLoopModel: O,
    resolvedInitialModel: U,
    rawModelRequest: V,
    restrictedModel: te,
    unservedFamilySpelling: ne,
    settingLayer: me,
  } = resolveInitialModelSelection(
    {
      cli: { model: w.userSpecifiedModel, isNonInteractiveSession: ke() },
      env: process.env,
      settings: getSettings_DEPRECATED() || {},
      agentFrontmatter:
        w.agentModel !== void 0
          ? { model: w.agentModel, modelSource: w.agentModelSource }
          : void 0,
    },
    w.storageV5,
  );
  (ad(I), YOn(O), QOn(me));
  let Me = getApplicableOrgDefaultModel(),
    Se = Me !== null && !isRecognizedOrgDefaultName(Me.name);
  if (Se) logFeatureSad("model_org_default", "unrecognized");
  else l_e(getResolvedOrgDefaultModel());
  if (
    (tDn(a.ANTHROPIC_DEFAULT_MODEL ?? null),
    a.ANTHROPIC_DEFAULT_MODEL !== void 0)
  )
    if (getEnvDefaultModel() === null) logFeatureSad("model_env_default", "inert");
    else if (Se) logFeatureSad("model_env_default", "org_default_unrecognized");
    else if (resolveDefaultMainLoopModelSetting().attribution === "org")
      logFeatureSad("model_env_default", "outranked_by_org_default");
    else logFeatureOk("model_env_default");
  if (!w.routineModelTransientlySkipped)
    syncRespawnFlag("--model", ["-m"], O, void 0, w.storageV5);
  if (te !== void 0)
    logFeatureSad("startup_resolve_model", "requested_model_restricted", {
      model: getModelForAnalytics(te) ?? S("nonconforming"),
    });
  else if (ne !== void 0)
    logFeatureSad("startup_resolve_model", "family_spelling_unserved");
  else logFeatureOk("startup_resolve_model");
  return {
    effectiveModel: I,
    initialMainLoopModel: O,
    resolvedInitialModel: U,
    rawModelRequest: V,
    restrictedModel: te,
    unservedFamilySpelling: ne,
    settingLayer: me,
  };
}
var s_ = createLazyValue(() =>
    nt({
      group: le(),
      intervening: Io(),
      unknown: Io(),
      skipped_by_org_default: Io(),
      can_skip: Io(),
      tags: cr(le()),
    }),
  ),
  $U = createLazyValue(() =>
    nt({
      model: le().optional(),
      groups: cr(s_()),
      notes: cr(le()).optional(),
    }),
  );
var i_ = [
  /(?:^|\/)(?:package-lock\.json|yarn\.lock|bun\.lock|bun\.lockb|pnpm-lock\.yaml|Pipfile\.lock|poetry\.lock|Cargo\.lock|Gemfile\.lock|go\.sum|composer\.lock|uv\.lock)$/,
  /\.generated\./,
  /(?:^|\/)(?:dist|build|out|target|node_modules|\.next|__pycache__)\//,
  /\.(?:min\.js|min\.css|map|pyc|pyo)$/,
  /\.(?:json|ya?ml|toml|xml|ini|cfg|conf|env|lock|txt|md|mdx|rst|csv|log|svg)$/i,
  /(?:^|\/)\.?(?:eslintrc|prettierrc|babelrc|editorconfig|gitignore|gitattributes|dockerignore|npmrc)/,
  /(?:^|\/)(?:tsconfig|jsconfig|biome|vitest\.config|jest\.config|webpack\.config|vite\.config|rollup\.config)\.[a-z]+$/,
  /(?:^|\/)\.(?:github|vscode|idea|claude)\//,
  /(?:^|\/)(?:CHANGELOG|LICENSE|CONTRIBUTING|CODEOWNERS|README)(?:\.[a-z]+)?$/i,
];
function a_(w) {
  return !i_.some((I) => I.test(w));
}
function l_(w, I) {
  let O = [],
    U = new Set(),
    V = new Map();
  for (let te = 1; O.length < I && te <= I; te++)
    for (let ne of w) {
      if (O.length >= I) break;
      if (!a_(ne)) continue;
      let me = Math.max(ne.lastIndexOf("/"), ne.lastIndexOf("\\")),
        Me = me >= 0 ? ne.slice(me + 1) : ne;
      if (!Me || U.has(Me)) continue;
      let Se = me >= 0 ? ne.slice(0, me) : ".";
      if ((V.get(Se) ?? 0) >= te) continue;
      (O.push(Me), U.add(Me), V.set(Se, (V.get(Se) ?? 0) + 1));
    }
  return O.length >= I ? O : [];
}
async function d_() {
  if (a.platform === "win32") return [];
  if (!(await getIsGit())) return [];
  try {
    let w = await getGitUserEmail(),
      I = [
        "log",
        "-n",
        "1000",
        "--pretty=format:",
        "--name-only",
        "--diff-filter=M",
      ],
      O = new Map(),
      U = (te) => {
        for (let ne of te.split(`
`)) {
          let me = ne.trim();
          if (me) O.set(me, (O.get(me) ?? 0) + 1);
        }
      };
    if (w) {
      let { stdout: te } = await execFileNoThrowWithCwd("git", [...I, `--author=${w}`], {
        cwd: getCwd(),
      });
      U(te);
    }
    if (O.size < 10) {
      let { stdout: te } = await execFileNoThrowWithCwd(gitExe(), I, { cwd: getCwd() });
      U(te);
    }
    let V = Array.from(O.entries())
      .sort((te, ne) => ne[1] - te[1])
      .map(([te]) => te);
    return l_(V, 5);
  } catch (w) {
    return (
      logForDebugging(`Failed to collect frequently-modified files from git history: ${w}`, {
        level: "error",
      }),
      []
    );
  }
}
var c_ = 604800000;
function formatExamplePromptHint(w) {
  let I = Math.abs(hashString(w)),
    U = getCurrentProjectConfig().exampleFiles ?? [],
    V = U[I % U.length] ?? "<filepath>",
    te = [
      "fix lint errors",
      "fix typecheck errors",
      `how does ${V} work?`,
      `refactor ${V}`,
      "how do I log an error?",
      `edit ${V} to...`,
      `write a test for ${V}`,
      "create a util logging.py that...",
    ];
  return `Try "${te[(I >>> 8) % te.length]}"`;
}
async function km(w) {
  let I = getCurrentProjectConfig(),
    O = Date.now(),
    U = I.exampleFilesGeneratedAt ?? 0;
  if (O - U > c_) I.exampleFiles = [];
  if (!I.exampleFiles?.length)
    d_().then((V) => {
      if (V.length)
        saveCurrentProjectConfig(
          (te) => ({
            ...te,
            exampleFiles: V,
            exampleFilesGeneratedAt: Date.now(),
          }),
          w,
        );
    });
}
function createConfigChangeHookGate(w, I, O) {
  return (U, V) => __n(w, U, V, { storageV5: I, credentials: O }).then(hasBlockingResult);
}
function u_(w) {
  let I = getCanonicalName(w, { identity: !0 });
  if (getCatalogEntryById(strip1mSuffix(I)) !== void 0) return "compiled_catalog";
  if (isRecognizedCanonical(I)) return "compiled_legacy";
  if (findServedCatalogModel(w, I) !== void 0) return "served_catalog";
  if (getAdditionalModelOptionsCache().some((U) => typeof U.value === "string" && isSameModelName(U.value, w)))
    return "bootstrap_additional_option";
  let O = a.ANTHROPIC_CUSTOM_MODEL_OPTION;
  if (O && isSameModelName(O, w)) return "custom_option_env";
  if (isTierPinnedByEnv(w)) return "tier_pin_env";
  if (getGatewayModelOptions().some((U) => typeof U.value === "string" && isSameModelName(U.value, w)))
    return "gateway_discovery";
  return "unrecognized";
}
function m_() {
  let w = JOn();
  switch (w) {
    case void 0:
    case null:
      return g_();
    case "cli":
      return f_();
    default:
      return w;
  }
}
function f_() {
  if (a.CLAUDE_CODE_SESSION_KIND === "bg" || isTeammate()) return "forwarded_pick";
  switch (getEnvEntrypoint()) {
    case "sdk-ts":
    case "sdk-py":
      return "sdk_option";
    default:
      return "cli_flag";
  }
}
function g_() {
  switch (resolveDefaultMainLoopModelSetting().attribution) {
    case "org":
      return "org_default";
    case "enforced":
      return "enforced_default";
    case "entitlement":
      return "entitlement_default";
    case "env":
      return "env_default";
    case "served":
      return "served_default";
    case "tier":
      return "default";
  }
}
function wm() {
  return {
    model_definition_source: fromEnum(u_(getMainLoopModel())),
    model_setting_source: fromEnum(m_()),
  };
}
var Em = {
  model_definition_source: S("omitted_resume"),
  model_setting_source: S("omitted_resume"),
};
class vr extends Error {
  code;
  constructor(w) {
    super("claude.ai marketplaces sync failed");
    this.code = w;
    this.name = "MarketplacesSyncFailed";
  }
}
async function Rm(w, I, O) {
  try {
    if (!Hxe() || !isPluginsSyncTierInPlay() || isPluginSyncPolicyVerdictPending()) return !1;
    let U = y_(I, O);
    try {
      return await withFeatureTelemetry(
        "claudeai_marketplaces_sync",
        () => h_(w, I),
        (V) => (V instanceof vr ? V.code : "unexpected"),
      );
    } finally {
      await U;
    }
  } catch (U) {
    if (!(U instanceof vr)) logError(U);
    return !1;
  }
}
async function y_(w, I) {
  try {
    let O = Object.entries(await readClaudeAiMarketplaceRegistry());
    if (O.length === 0) return;
    let U = await getInstalledPluginsViaStorage(I),
      V = new Set(
        Object.entries(U.plugins).flatMap(([ne, me]) =>
          me.length > 0 ? [getPluginMarketplace(ne)] : [],
        ),
      ),
      te = O.filter(([ne]) => V.has(ne));
    if (te.length === 0) return;
    (writeDiagnosticsEvent("info", "claudeai_catalog_background_refresh", { count: te.length }),
      await Promise.all(
        te.map(([ne, me]) =>
          loadClaudeAiMarketplace(ne, me.source, {
            mode: "refresh",
            credentials: w,
            isBackground: !0,
          }),
        ),
      ));
  } catch (O) {
    logError(O);
  }
}
async function h_(w, I) {
  let O = await resolveSkillBucketId(I);
  if (O === null) throw new vr("bucket_unresolved");
  let U = getPluginSyncBucketDir(O),
    V = getOrgIdFromBucketId(O) ?? "";
  try {
    await ensurePluginSyncBucketRoot(w, O);
  } catch {
    throw new vr("root_refused");
  }
  writeDiagnosticsEvent("info", "marketplaces_sync_starting");
  let te = claudeAiCatalogCacheStore.of(w.host),
    ne = await readClaudeAiCatalogCache(U),
    me = getStrictKnownMarketplaces() !== null && Object.keys(await readClaudeAiMarketplaceRegistry()).length > 0,
    Me = await fetchClaudeAiMarketplaceCatalog({
      host: w.host,
      etag: me ? void 0 : ne?.etag,
      credentials: I,
    });
  switch (Me.status) {
    case "ok": {
      if (Me.dropped > 0)
        writeDiagnosticsEvent("warn", "marketplaces_sync_rows_dropped", { count: Me.dropped });
      let Se = !0;
      try {
        await syncClaudeAiMarketplaceScopes(Me.rows, V);
      } catch (Oe) {
        ((Se = !1),
          writeDiagnosticsEvent("warn", "marketplaces_sync_scope_sync_failed"),
          logForDebugging(
            `claude.ai marketplaces: could not re-derive added marketplaces' scopes: ${l(Oe)}`,
            { level: "warn" },
          ));
      }
      let xe = Se ? Me.etag : void 0,
        De = ne === null || ne.etag !== xe || xe === void 0;
      if (De) (await writeClaudeAiCatalogCache(U, { etag: xe, rows: Me.rows }), te.invalidate());
      return (
        writeDiagnosticsEvent("info", "marketplaces_sync_complete", {
          count: Me.rows.length,
          changed: De,
        }),
        De
      );
    }
    case "not_modified":
      if ((writeDiagnosticsEvent("info", "marketplaces_sync_not_modified"), ne === null))
        throw new vr("not_modified_without_cache");
      return !1;
    case "denied":
      throw (
        writeDiagnosticsEvent("warn", "marketplaces_sync_failed", { code: Me.code }),
        await removeClaudeAiCatalogCache(O, MARKETPLACES_FILE_NAME),
        te.invalidate(),
        new vr(Me.code)
      );
    case "skipped":
    case "failed":
      throw (
        writeDiagnosticsEvent("warn", "marketplaces_sync_failed", { code: Me.code }),
        new vr(Me.code)
      );
  }
}
function Mm(w) {
  return "chat:cycleMode";
}
function Am({ deferToCleanup: w, storageV5: I }) {
  let O = performance.now(),
    U = initializePluginsSystem(I);
  if (
    (profileCheckpoint("action_after_plugins_init"),
    U.then(async () => {
      (logEvent("tengu_timer", {
        event: S("plugins_init"),
        durationMs: Math.round(performance.now() - O),
        headless: w,
      }),
        await sweepOrphanedPluginVersions(I),
        getOrphanedVersionGlobExclusions(void 0, I));
    }),
    w)
  )
    return registerCleanup(() => U);
  return;
}
import { readFile as vf } from "fs/promises";
import { resolve as ps } from "path";
import { lstat as xm, readdir as Dm, realpath as __ } from "fs/promises";
import { homedir as C_ } from "os";
import { join as ji, resolve as w_ } from "path";
var P_ = 65536,
  E_ = 20,
  R_ = [
    ["pnpm-lock.yaml", "pnpm"],
    ["yarn.lock", "yarn"],
    ["bun.lock", "bun"],
    ["bun.lockb", "bun"],
    ["package-lock.json", "npm"],
    ["npm-shrinkwrap.json", "npm"],
    ["deno.lock", "deno"],
    ["poetry.lock", "poetry"],
    ["uv.lock", "uv"],
    ["Pipfile.lock", "pipenv"],
    ["requirements.txt", "pip"],
    ["Cargo.lock", "cargo"],
    ["go.sum", "go"],
    ["composer.lock", "composer"],
    ["Gemfile.lock", "bundler"],
    ["gradle.lockfile", "gradle"],
    ["packages.lock.json", "nuget"],
    ["Podfile.lock", "cocoapods"],
    ["Package.resolved", "swift"],
    ["mix.lock", "mix"],
    ["pubspec.lock", "pub"],
    ["conan.lock", "other"],
  ],
  M_ = /(?:registry|index-url)\s*=\s*["']?(https?:\/\/[^\s"'`]+)/g,
  A_ =
    /\[\[tool\.(?:poetry\.source|uv\.index)\]\][^[]*?url\s*=\s*["'](https?:\/\/[^\s"'`]+)/g,
  I_ = /npmRegistryServer\s*:\s*["']?(https?:\/\/[^\s"'`]+)/g,
  Tm = /(?:index|registry)\s*=\s*["']?(?:sparse\+)?(https?:\/\/[^\s"'`]+)/g,
  x_ =
    /\b(?:VAULT_ADDR|SOPS_[A-Z_]*|op read|aws secretsmanager|gcloud secrets)\b/,
  Im =
    /\bcom\.android\.(?:application|library|test|dynamic-feature|tools\.build:gradle)\b/,
  D_ =
    /\b(?:enable_language\s*\(\s*CUDA|LANGUAGES\b[^)\n]{0,200}\bCUDA\b|find_package\s*\(\s*CUDA|cuda_add_(?:executable|library))/i,
  O_ =
    /^[^\S\n]*-[^\S\n]*(?:[a-z][\w.-]*::)?(?:cudatoolkit|cuda-toolkit|cudnn|pytorch-cuda)\b/m,
  F_ = [
    "settings.gradle",
    "settings.gradle.kts",
    "build.gradle",
    "build.gradle.kts",
  ],
  L_ = ["environment.yml", "environment.yaml"],
  U_ = new Set([
    "registry.npmjs.org",
    "registry.yarnpkg.com",
    "pypi.org",
    "pypi.python.org",
    "files.pythonhosted.org",
    "crates.io",
    "index.crates.io",
    "static.crates.io",
    "proxy.golang.org",
    "localhost",
    "127.0.0.1",
    "0.0.0.0",
    "[::1]",
    "registry.npmmirror.com",
    "registry.npm.taobao.org",
    "pypi.tuna.tsinghua.edu.cn",
    "mirrors.aliyun.com",
  ]);
function N_(w) {
  let I = w?.toLowerCase() ?? null;
  if (!I) return "none";
  if (I.includes("jfrog")) return "jfrog";
  if (I.includes("nexus") || I.includes("sonatype")) return "nexus";
  if (I.includes("github")) return "github";
  if (I.includes("gitlab")) return "gitlab";
  if (
    I === "pkgs.dev.azure.com" ||
    I.endsWith(".visualstudio.com") ||
    I.endsWith(".azure.com")
  )
    return "azure";
  if (I.endsWith(".amazonaws.com")) return "aws";
  if (I.endsWith(".pkg.dev") || I.endsWith(".googleapis.com")) return "gcp";
  return "other";
}
function $_(w) {
  try {
    let I = new URL(w).hostname.toLowerCase();
    return I && /^[a-z0-9.[][a-z0-9.:\]-]*$/.test(I) ? I : null;
  } catch {
    return null;
  }
}
function G_(w) {
  try {
    let I = new URL(w);
    return (
      isGitHubHost(I.hostname) &&
      /^\/rust-lang\/crates\.io-index(?:\.git)?\/?$/.test(I.pathname)
    );
  } catch {
    return !1;
  }
}
function K_(w, I) {
  let O = [],
    U = w
      .split(
        `
`,
      )
      .filter((te) => !/^\s*[#;]/.test(te)).join(`
`),
    V = new RegExp(I.source, I.flags);
  for (let te of U.matchAll(V)) {
    if (te[1] === void 0 || G_(te[1])) continue;
    let ne = $_(te[1]);
    if (ne !== null) O.push(ne);
  }
  return O;
}
async function os(w, I) {
  try {
    let O = await readFileHardened(ji(w, I), P_, { noFollow: !0 });
    return typeof O === "string" ? O : null;
  } catch {
    return null;
  }
}
async function Om(w) {
  try {
    return (await xm(w)).isFile();
  } catch {
    return !1;
  }
}
async function W_(w, I, O) {
  let U = [
    ...[".npmrc", "pip.conf", "pyproject.toml", "bunfig.toml"]
      .filter((V) => I.has(V))
      .map((V) => [V, M_]),
    ...(I.has("pyproject.toml") ? [["pyproject.toml", A_]] : []),
    ...(I.has(".yarnrc.yml") ? [[".yarnrc.yml", I_]] : []),
    ...(O
      ? [
          [".cargo/config.toml", Tm],
          [".cargo/config", Tm],
        ]
      : []),
  ];
  for (let [V, te] of U) {
    if (V.startsWith(".cargo/") && !(await Om(ji(w, V)))) continue;
    let ne = await os(w, V);
    if (ne === null) continue;
    for (let me of K_(ne, te))
      if (!U_.has(me))
        return {
          has_private_registry: !0,
          private_registry_host_class: N_(me),
        };
  }
  return { has_private_registry: !1, private_registry_host_class: "none" };
}
async function z_(w, I) {
  if (
    I.some((U) => {
      let V = U.toLowerCase();
      return V === ".sops.yaml" || V === ".sops.yml";
    })
  )
    return !0;
  let O = I.filter((U) => {
    let V = U.toLowerCase();
    return (
      V === ".envrc" ||
      V.endsWith(".yml") ||
      V.endsWith(".yaml") ||
      V.endsWith(".toml") ||
      V.endsWith(".sh")
    );
  })
    .sort()
    .slice(0, E_);
  for (let U of O) {
    let V = await os(w, U);
    if (V !== null && x_.test(V)) return !0;
  }
  return !1;
}
async function V_(w) {
  try {
    return (await xm(w)).isDirectory();
  } catch {
    return !1;
  }
}
async function q_(w) {
  try {
    let I = ji(w, ".github", "workflows");
    if (!(await V_(I))) return !1;
    return (await Dm(I)).some((U) => U.endsWith(".yml") || U.endsWith(".yaml"));
  } catch {
    return !1;
  }
}
function Y_(w) {
  for (let [I, O] of R_) if (w.has(I)) return O;
  return "none";
}
async function X_(w, I, O) {
  for (let U of F_) {
    if (!I.has(U)) continue;
    let V = await os(w, U);
    if (V !== null && Im.test($i(V))) return !0;
  }
  if (O) {
    let U = ji(w, "gradle", "libs.versions.toml");
    if (await Om(U)) {
      let V = await os(w, "gradle/libs.versions.toml");
      if (V !== null && Im.test($i(V))) return !0;
    }
  }
  return !1;
}
function $i(w) {
  return w.replace(/^[^\S\n]*(?:#|\/\/).*$/gm, "");
}
async function J_(w, I) {
  if (I.has("CMakeLists.txt")) {
    let O = await os(w, "CMakeLists.txt");
    if (O !== null && D_.test($i(O))) return !0;
  }
  for (let O of L_) {
    if (!I.has(O)) continue;
    let U = await os(w, O);
    if (U !== null && O_.test($i(U))) return !0;
  }
  return !1;
}
async function Q_(w, I, O, U, V) {
  let te = I.map((ne) => ne.toLowerCase());
  if (U) return "xcode";
  if (V) return "android";
  if (
    te.some((ne) => ne.endsWith(".cu") || ne.endsWith(".cuh")) ||
    (await J_(w, O))
  )
    return "cuda";
  if (te.some((ne) => ne.endsWith(".sln") || ne.endsWith(".csproj")))
    return "dotnet";
  if (
    te.some(
      (ne) =>
        (ne.endsWith(".bat") || ne.endsWith(".cmd") || ne.endsWith(".ps1")) &&
        ne !== "gradlew.bat" &&
        ne !== "gradlew.cmd" &&
        ne !== "mvnw.bat" &&
        ne !== "mvnw.cmd",
    )
  )
    return "windows_scripts";
  return "none";
}
async function Z_(w) {
  let I = await Dm(w, { withFileTypes: !0 }),
    O = I.filter((Ae) => Ae.isFile()).map((Ae) => Ae.name),
    U = I.filter((Ae) => Ae.isDirectory()).map((Ae) => Ae.name),
    V = new Set(O),
    te = O.map((Ae) => Ae.toLowerCase()),
    ne = new Set(U.map((Ae) => Ae.toLowerCase())),
    me =
      [...te, ...ne].some(
        (Ae) => Ae.endsWith(".xcodeproj") || Ae.endsWith(".xcworkspace"),
      ) || O.includes("Podfile"),
    [Me, Se, xe, De] = await Promise.all([
      W_(w, V, U.includes(".cargo")),
      z_(w, O),
      U.includes(".github") ? q_(w) : Promise.resolve(!1),
      O.includes("AndroidManifest.xml")
        ? Promise.resolve(!0)
        : X_(w, V, U.includes("gradle")),
    ]),
    Oe = await Q_(w, O, V, me, De);
  return {
    has_dockerfile: te.some(
      (Ae) =>
        Ae === "dockerfile" ||
        Ae.startsWith("dockerfile.") ||
        Ae.endsWith(".dockerfile"),
    ),
    has_compose: te.some((Ae) => /^(docker-)?compose(\..+)?\.ya?ml$/.test(Ae)),
    has_devcontainer:
      ne.has(".devcontainer") || te.includes(".devcontainer.json"),
    has_nix: ["flake.nix", "default.nix", "shell.nix"].some((Ae) => V.has(Ae)),
    has_bazel: [
      "WORKSPACE",
      "WORKSPACE.bazel",
      "MODULE.bazel",
      "BUILD",
      "BUILD.bazel",
      ".bazelrc",
    ].some((Ae) => V.has(Ae)),
    lockfile_family: Y_(V),
    has_env_file: te.some(
      (Ae) =>
        (Ae === ".env" || Ae.startsWith(".env.")) &&
        !/\.(example|sample|template|dist)$/.test(Ae),
    ),
    has_ci_config:
      xe ||
      ne.has(".circleci") ||
      ne.has(".buildkite") ||
      te.some((Ae) =>
        [
          ".gitlab-ci.yml",
          "jenkinsfile",
          "azure-pipelines.yml",
          ".travis.yml",
          "bitbucket-pipelines.yml",
        ].includes(Ae),
      ),
    ...Me,
    has_secrets_manager_refs: Se,
    has_xcode_project: me,
    has_android_project: De,
    os_locked_toolchain: Oe,
  };
}
async function eb(w) {
  try {
    return await Z_(w);
  } catch {
    return null;
  }
}
async function Fm() {
  try {
    if (isRemoteActive()) return null;
    let w = findGitRoot(getCwd());
    if (w === null) return null;
    try {
      let V = C_();
      if (V) {
        let te = zn(w_(V));
        if (w === te) return null;
        let ne = await __(V).then(
          (me) => zn(me),
          () => null,
        );
        if (ne !== null && w === ne) return null;
      }
    } catch {}
    let I = getGitRepoCache().markersByRoot,
      O = memoizeInMap(I, w, eb),
      U = await O;
    if (U === null && I.peek(w) === O) I.delete(w);
    return U;
  } catch {
    return null;
  }
}
var Lm = 500;
class Um {
  runs = 0;
  loggedPolicySkips = new Set();
  isOverBudget(w) {
    return w > 0 && this.runs >= w;
  }
  recordRun() {
    this.runs++;
  }
  firstPolicySkipFor(w) {
    if (this.loggedPolicySkips.has(w)) return !1;
    return (this.loggedPolicySkips.add(w), !0);
  }
}
var U$ = new Gt(() => new Um());
class Nm {
  lastEmittedPayload = void 0;
  markIfChanged(w) {
    if (w === this.lastEmittedPayload) return !1;
    return ((this.lastEmittedPayload = w), !0);
  }
}
var Cj = new j(() => new Nm());
function Bm({
  replayUserMessagesFlag: w,
  outputFormat: I,
  explicitSocketPath: O,
  socketBound: U,
}) {
  if (w) return !0;
  return I === "stream-json" && O !== void 0 && U;
}
function resolveEntryPermissionMode(w, I, { offerBypass: O = !0 } = {}) {
  return resolvePermissionModeForProactivityLevel(
    w,
    {
      isAutoModeAvailable: canCycleToAuto(I),
      isBypassPermissionsModeAvailable: O && canUseBypassPermissions(I),
    },
    I.proactivityBaseline?.mode,
  );
}
var $m = toESM(pg(), 1);
var MIN_CLAUDE_DESKTOP_VERSION = "1.1.9669";
function Ml() {
  let w = [process.argv[1] || "", process.execPath || ""],
    I = [
      "/build-ant/",
      "/build-ant-native/",
      "/build-external/",
      "/build-external-native/",
    ];
  return w.some((O) => I.some((U) => O.includes(U)));
}
function tb(w) {
  let I = Ml() ? "claude-dev" : "claude",
    O = new URL(`${I}://resume`);
  return (O.searchParams.set("session", w), O.toString());
}
async function Al() {
  if (Ml()) return !0;
  let w = "darwin";
  if (w === "darwin") return pathExists("/Applications/Claude.app");
  else if (w === "linux") {
    let { code: I, stdout: O } = await execFileNoThrow("xdg-mime", [
      "query",
      "default",
      "x-scheme-handler/claude",
    ]);
    return I === 0 && O.trim().length > 0;
  } else if (w === "win32") {
    let { code: I } = await execFileNoThrow("reg", [
      "query",
      "HKEY_CLASSES_ROOT\\claude",
      "/ve",
    ]);
    return I === 0;
  }
  return !1;
}
async function nb() {
  {
    let { code: I, stdout: O } = await execFileNoThrow("defaults", [
      "read",
      "/Applications/Claude.app/Contents/Info.plist",
      "CFBundleShortVersionString",
    ]);
    if (I !== 0) return null;
    let U = O.trim();
    return U.length > 0 ? U : null;
  }
  return null;
}
async function getClaudeDesktopStatus() {
  if (!(await Al())) return { status: "not-installed" };
  let I;
  try {
    I = await nb();
  } catch {
    return { status: "ready", version: "unknown" };
  }
  if (!I) return { status: "ready", version: "unknown" };
  let O = $m.coerce(I);
  if (!O || !isSemverAtLeast(O.version, MIN_CLAUDE_DESKTOP_VERSION))
    return { status: "version-too-old", version: I };
  return { status: "ready", version: I };
}
async function ob(w) {
  logForDebugging(`Opening deep link: ${w}`);
  {
    if (Ml()) {
      let { code: U } = await execFileNoThrow("osascript", [
        "-e",
        `tell application "Electron" to open location "${w}"`,
      ]);
      return U === 0;
    }
    let { code: O } = await execFileNoThrow("open", [w]);
    return O === 0;
  }
  return !1;
}
async function openSessionInClaudeDesktop() {
  let w = K(),
    I = await getClaudeDesktopStatus();
  if (I.status === "not-installed")
    return {
      success: !1,
      error:
        "Claude Desktop is not installed. Install it from https://claude.ai/download",
    };
  if (I.status === "version-too-old")
    return {
      success: !1,
      error: `Claude Desktop ${I.version} is too old to resume this session. Please update to ${MIN_CLAUDE_DESKTOP_VERSION} or later.`,
    };
  let O = tb(w);
  if (!(await ob(O)))
    return {
      success: !1,
      error: "Failed to open Claude Desktop. Please try opening it manually.",
      deepLinkUrl: O,
    };
  return { success: !0, deepLinkUrl: O };
}
var sb = { enable_shortcut_tip: !1, enable_contextual_tip: !1 };
function Tl() {
  return getDynamicConfig_CACHED_MAY_BE_STALE("tengu_desktop_upsell", sb);
}
class Ym {
  knownMarketplaces = void 0;
  marketplacePluginTips = void 0;
  sessionCountInFlight = void 0;
  desktopInstalled = void 0;
  ghAuthStatus = void 0;
  failedTipIds = new Set();
  getKnownMarketplaces(w) {
    return ((this.knownMarketplaces ??= getKnownMarketplacesOrEmpty(w)), this.knownMarketplaces);
  }
  getMarketplacePluginTips(w) {
    return (
      (this.marketplacePluginTips ??= this.loadMarketplacePluginTips(w)),
      this.marketplacePluginTips
    );
  }
  async loadMarketplacePluginTips(w) {
    let I = new Set(getPluginSuggestionMarketplaces());
    if (I.size === 0) return [];
    return this.buildMarketplacePluginTips(
      I,
      await this.getKnownMarketplaces(w),
      w,
    );
  }
  async buildMarketplacePluginTips(w, I, O) {
    let U = [];
    for (let V of w) {
      let te = I[V];
      if (!te) continue;
      if (V !== OFFICIAL_MARKETPLACE_NAME && !isMarketplaceSourceDeclaredByPolicy(V, te.source)) {
        logForDebugging(
          `Skipping plugin suggestion tips for marketplace "${V}": its registered source is not declared in managed settings (extraKnownMarketplaces or strictKnownMarketplaces)`,
        );
        continue;
      }
      let ne = await loadCachedMarketplaceCatalog(V, O).catch(() => null);
      if (!ne) continue;
      for (let me of ne.plugins) {
        let Me = me.relevance,
          Se = normalizePluginRelevanceSignals(me.name, Me);
        if (!Se) continue;
        if (V === OFFICIAL_MARKETPLACE_NAME && Qm.some((Oe) => Oe.id === `${me.name}-plugin`))
          continue;
        let xe =
            Me?.topic ??
            me.name
              .split("-")
              .map((Oe) => (Oe ? Oe.charAt(0).toUpperCase() + Oe.slice(1) : Oe))
              .join("-"),
          De =
            V === OFFICIAL_MARKETPLACE_NAME
              ? `marketplace-plugin:${me.name}`
              : `marketplace-plugin:${me.name}@${V}`;
        U.push({
          id: De,
          pluginId: `${me.name}@${V}`,
          advertisedCommand: "plugin",
          priority: 1,
          providerAgnostic: !0,
          cooldownSessions: 3,
          content: async (Oe) => {
            let Ae = getThemeColor("suggestion", Oe.theme);
            return `Working with ${xe}? Install the ${me.name} plugin:
${Ae(`/plugin install ${me.name}@${V}`)}`;
          },
          isRelevant: async (Oe) => Jm(this, me.name, Oe, Se, V),
        });
      }
    }
    return U;
  }
  getDesktopInstalled() {
    return ((this.desktopInstalled ??= Al()), this.desktopInstalled);
  }
  getGhAuthStatus() {
    return (
      (this.ghAuthStatus ??= checkGitHubAuthStatus({ allowNetworkFallbackForOldGh: !1 })),
      this.ghAuthStatus
    );
  }
  countSessionsOnce(w) {
    if (this.sessionCountInFlight !== void 0) return this.sessionCountInFlight;
    let I = countConcurrentSessions(w).finally(() => {
      if (this.sessionCountInFlight === I) this.sessionCountInFlight = void 0;
    });
    return ((this.sessionCountInFlight = I), I);
  }
}
var spinnerTipHostStateStore = new j(() => new Ym());
function jm(w) {
  if (isHoverRestEnabled() && w?.storageV5 !== void 0)
    return spinnerTipHostStateStore.of(w.session.host).countSessionsOnce(w.storageV5);
  return countConcurrentSessions(w?.storageV5);
}
async function Jm(w, I, O, U, V = OFFICIAL_MARKETPLACE_NAME) {
  if (!(await w.getKnownMarketplaces(O.storageV5))[V]) return !1;
  if (isPluginInstalledInCurrentScope(`${I}@${V}`)) return !1;
  if (isPluginBlockedByPolicy(`${I}@${V}`)) return !1;
  return (await matchPluginRelevanceSignal(U, O)) !== null;
}
async function Hm(w, I) {
  try {
    return (await getMarkdownFiles(w, getCwd(), I)).length > 0;
  } catch (O) {
    return (logForDebugging(`hasUserDefined(${w}) failed: ${O}`), !1);
  }
}
var ib =
    /\.(html?|css|s[ac]ss|less|[jt]sx|vue|svelte|astro|png|jpe?g|gif|svg|webp|avif|ico)$/i,
  ab = new Set([
    "vite",
    "next",
    "nuxt",
    "astro",
    "gatsby",
    "ng",
    "parcel",
    "webpack-dev-server",
    "serve",
    "http-server",
    "live-server",
    "browser-sync",
  ]);
function Il(w) {
  let { bashTools: I, readFileState: O } = w ?? {};
  if (I) {
    for (let U of I) if (ab.has(U)) return !0;
  }
  if (O) {
    for (let U of listCachedFilePaths(O)) if (ib.test(U)) return !0;
  }
  return !1;
}
function xl(w) {
  return `available in Claude for Enterprise \xB7 ${formatHyperlink("https://clau.de/enterprise", "Learn more", { themeName: w.theme })}`;
}
function Fl(w, I, O) {
  return w.some((U) => U !== I && getSessionsSinceTipShown(U) < O);
}
var db = ["c4e-desktop", "c4e-remote-sessions", "c4e-ultrareview"],
  cb = 5;
function Ol(w) {
  return Fl(db, w, cb);
}
var ub = ["workflow-size-prompting", "workflow-size-prompting-ambient"],
  mb = 12;
function Gm(w) {
  return Fl(ub, w, mb);
}
var pb = ["artifact-publish-plan", "artifact-duplicate"],
  fb = 5;
function Km(w) {
  return Fl(pb, w, fb);
}
var Wm = 10,
  zm = 4;
function Vm() {
  return isWorkflowSizeGuidelineConfigured() || !resolveWorkflowSizeGuideline(getGlobalConfig().workflowSizeGuideline).isDefault;
}
function qm() {
  let w = keybindingStore.bindings ?? loadKeybindingsFromConfigFile();
  return getKeybindingDisplayText(Mm(w), "Chat", w);
}
async function isAdvertisedCommandAvailable(w) {
  if (!isRemoteActive()) return !0;
  let { filterCommandsForRemoteMode: I, getBuiltinCommands: O } =
    await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js");
  return I(O()).some((U) => U.name === w || U.aliases?.includes(w));
}
var Qm = [
    {
      id: "team-artifacts",
      priority: 4,
      content: async (w) => {
        let I = await getUnseenTeamArtifacts(w.session, w.storageV5).catch(
          (O) => (
            logFeatureSad(
              "tips_team_artifact_show",
              O instanceof Error
                ? "content_scan_error"
                : "content_unknown_error",
            ),
            []
          ),
        );
        if (I.length === 0) return "";
        return (logTeamArtifactTipShown(I), markTeamArtifactsSeen(w.session, w.storageV5), formatTeamArtifactTip(I));
      },
      cooldownSessions: 1,
      isRelevant: async (w) => checkUnseenTeamArtifacts(w.session, w.storageV5),
    },
    {
      id: "fotw-campaign",
      priority: 4,
      content: async () => {
        let w = getActiveFotwCampaign();
        if (!w?.command) return "";
        let I = getFotwCreditAmount();
        if (!I) return "";
        let O = formatCurrencyAmount(I.amountMinorUnits, I.currency, "fit"),
          U = w.tipBlurb ? `/${w.command} ${w.tipBlurb}` : `/${w.command}`,
          V = w.tips?.[getTipLifetimeShownCount("fotw-campaign") % w.tips.length] ?? "";
        if (V) return `${V} Try it for ${O} in usage credits.`;
        return `${w.titleLabel ?? "Feature of the week:"} ${U}. Try it for ${O} in usage credits.`;
      },
      cooldownSessions: 1,
      isRelevant: async () => hasClaimableFotwCredit(),
    },
    {
      id: "fotw-campaign-upsell",
      priority: 4,
      content: async () => {
        let w = getActiveFotwCampaign();
        if (!w?.command) return "";
        let I = w.tips?.[getTipLifetimeShownCount("fotw-campaign-upsell") % w.tips.length] ?? "";
        if (I) return I;
        let O = w.tipBlurb ? `/${w.command} ${w.tipBlurb}` : `/${w.command}`;
        return `${w.titleLabel ?? "Feature of the week:"} ${O}.`;
      },
      cooldownSessions: 1,
      isRelevant: async () => isFotwUpsellPending(),
    },
    {
      id: "powerup-onboarding",
      priority: 3,
      providerAgnostic: !0,
      content: async (w) =>
        `New to Claude Code? Run ${getThemeColor("suggestion", w.theme)("/powerup")} for a quick interactive tutorial`,
      cooldownSessions: 1,
      async isRelevant() {
        let w = getGlobalConfig();
        if (w.numStartups >= 10) return !1;
        if (w.powerupsUnlocked?.length) return !1;
        return getFeatureValue_CACHED_MAY_BE_STALE("tengu_alder_compass", !1);
      },
    },
    {
      id: "new-user-warmup",
      priority: 2,
      providerAgnostic: !0,
      content: async () =>
        "Start with small features or bug fixes, tell Claude to propose a plan, and verify its suggested edits",
      cooldownSessions: 3,
      async isRelevant() {
        return getGlobalConfig().numStartups < 10;
      },
    },
    {
      id: "plan-mode-for-complex-tasks",
      priority: 2,
      providerAgnostic: !0,
      content: async () =>
        `Use Plan Mode to prepare for a complex request before making changes. Press ${getKeybindingChord("chat:cycleMode", "Chat", "shift+tab")} twice to enable.`,
      cooldownSessions: 5,
      isRelevant: async () => {
        let w = getGlobalConfig();
        return (
          (w.lastPlanModeUse
            ? (Date.now() - w.lastPlanModeUse) / 86400000
            : 1 / 0) > 7
        );
      },
    },
    {
      id: "default-permission-mode-config",
      providerAgnostic: !0,
      advertisedCommand: "config",
      content: async () =>
        "Use /config to change your default permission mode (including Plan Mode)",
      cooldownSessions: 10,
      isRelevant: async () => {
        try {
          let w = getGlobalConfig(),
            I = getSettings_DEPRECATED(),
            O = Boolean(w.lastPlanModeUse),
            U = Boolean(I?.permissions?.defaultMode);
          return O && !U;
        } catch (w) {
          return (
            logForDebugging(
              `Failed to check default-permission-mode-config tip relevance: ${w}`,
              { level: "warn" },
            ),
            !1
          );
        }
      },
    },
    {
      id: "git-worktrees",
      providerAgnostic: !0,
      content: async () =>
        "Use git worktrees to run multiple Claude sessions in parallel.",
      cooldownSessions: 10,
      isRelevant: async () => {
        try {
          let w = getGlobalConfig();
          return (await getWorktreeCount()) <= 1 && w.numStartups > 50;
        } catch (w) {
          return !1;
        }
      },
    },
    {
      id: "color-when-multi-clauding",
      providerAgnostic: !0,
      content: async () =>
        "Running multiple Claude sessions? Use /color and /rename to tell them apart at a glance.",
      cooldownSessions: 10,
      isRelevant: async (w) => {
        if (getCurrentSessionAgentColor()) return !1;
        return (await jm(w)) >= 2;
      },
    },
    {
      id: "agents-view-multiclauding",
      priority: 3,
      providerAgnostic: !0,
      maxLifetimeShows: 5,
      cooldownSessions: 1,
      content: async (w) =>
        `Running multiple Claude sessions? Press ${getThemeColor("suggestion", w.theme)(LEFT_ARROW_GLYPH)} on an empty prompt to see them all in one place`,
      isRelevant: async (w) => {
        if (!isAgentsViewAvailable()) return !1;
        if (isTranscriptPersistenceDisabled()) return !1;
        let I = getGlobalConfig();
        if (I.leftArrowOpensAgents === !1) return !1;
        if (isBgSession()) return !1;
        if (I.hasOpenedAgentsView || I.hasUsedAgentsFleet) return !1;
        return (await jm(w)) >= 2;
      },
    },
    {
      id: "terminal-setup",
      providerAgnostic: !0,
      content: async () =>
        a.terminal === "Apple_Terminal"
          ? "Run /terminal-setup to enable convenient terminal integration like Option + Enter for new line and more"
          : "Run /terminal-setup to enable convenient terminal integration like Shift + Enter for new line and more",
      cooldownSessions: 10,
      async isRelevant() {
        if (!shouldOfferTerminalSetup()) return !1;
        let w = getGlobalConfig();
        if (a.terminal === "Apple_Terminal") return !w.optionAsMetaKeyInstalled;
        return !w.shiftEnterKeyBindingInstalled;
      },
    },
    {
      id: "vscode-gpu-accel-garbled-glyphs",
      providerAgnostic: !0,
      maxLifetimeShows: 5,
      content: async () =>
        "Corrupted terminal glyphs? Disable terminal GPU acceleration in settings or run /terminal-setup",
      cooldownSessions: 8,
      async isRelevant() {
        return Zd();
      },
    },
    {
      id: "shift-enter",
      providerAgnostic: !0,
      content: async () =>
        a.terminal === "Apple_Terminal"
          ? "Press Option+Enter to send a multi-line message"
          : "Press Shift+Enter to send a multi-line message",
      cooldownSessions: 10,
      async isRelevant() {
        let w = getGlobalConfig();
        return Boolean(
          (a.terminal === "Apple_Terminal"
            ? w.optionAsMetaKeyInstalled
            : w.shiftEnterKeyBindingInstalled) && w.numStartups > 3,
        );
      },
    },
    {
      id: "shift-enter-setup",
      providerAgnostic: !0,
      content: async () =>
        a.terminal === "Apple_Terminal"
          ? "Run /terminal-setup to enable Option+Enter for new lines"
          : "Run /terminal-setup to enable Shift+Enter for new lines",
      cooldownSessions: 10,
      async isRelevant() {
        if (!shouldOfferTerminalSetup()) return !1;
        let w = getGlobalConfig();
        return !(a.terminal === "Apple_Terminal"
          ? w.optionAsMetaKeyInstalled
          : w.shiftEnterKeyBindingInstalled);
      },
    },
    {
      id: "memory-command",
      providerAgnostic: !0,
      content: async () => "Use /memory to view and manage Claude memory",
      cooldownSessions: 15,
      advertisedCommand: "memory",
      async isRelevant() {
        return getGlobalConfig().memoryUsageCount <= 0;
      },
    },
    {
      id: "theme-command",
      providerAgnostic: !0,
      content: async () => "Use /theme to change the color theme",
      cooldownSessions: 20,
      isRelevant: async () => !0,
    },
    {
      id: "colorterm-truecolor",
      providerAgnostic: !0,
      content: async () =>
        "Try setting environment variable COLORTERM=truecolor for richer colors",
      cooldownSessions: 30,
      isRelevant: async () => !a.COLORTERM && chalk.level < 3,
    },
    {
      id: "powershell-tool-env",
      providerAgnostic: !0,
      content: async () =>
        "Set CLAUDE_CODE_USE_POWERSHELL_TOOL=1 to enable the PowerShell tool (preview)",
      cooldownSessions: 10,
      isRelevant: async () =>
        getCurrentPlatform() === "windows" &&
        process.env.CLAUDE_CODE_USE_POWERSHELL_TOOL === void 0,
    },
    {
      id: "status-line",
      providerAgnostic: !0,
      content: async () =>
        "Use /statusline to set up a custom status line that will display beneath the input box",
      cooldownSessions: 25,
      advertisedCommand: "statusline",
      isRelevant: async () => !shouldAllowManagedHooksOnly() && getSettings_DEPRECATED().statusLine === void 0,
    },
    {
      id: "prompt-queue",
      providerAgnostic: !0,
      content: async () =>
        "Hit Enter to queue up additional messages while Claude is working.",
      cooldownSessions: 5,
      async isRelevant() {
        return getGlobalConfig().promptQueueUseCount <= 3;
      },
    },
    {
      id: "enter-to-steer-in-relatime",
      providerAgnostic: !0,
      content: async () =>
        "Send messages to Claude while it works to steer Claude in real-time",
      cooldownSessions: 20,
      isRelevant: async () => !0,
    },
    {
      id: "todo-list",
      providerAgnostic: !0,
      content: async () =>
        "Ask Claude to create a todo list when working on complex tasks to track progress and remain on track",
      cooldownSessions: 20,
      isRelevant: async () => !0,
    },
    {
      id: "vscode-command-install",
      providerAgnostic: !0,
      content: async () =>
        `Open the Command Palette (Cmd+Shift+P) and run "Shell Command: Install '${a.terminal === "vscode" ? "code" : a.terminal}' command in PATH" to enable IDE integration`,
      cooldownSessions: 0,
      async isRelevant() {
        if (!isVscodeTerminal()) return !1;
        if (getCurrentPlatform() !== "macos") return !1;
        switch (a.terminal) {
          case "vscode":
            return !(await isVscodeInstalled());
          case "cursor":
            return !(await isCursorInstalled());
          case "windsurf":
            return !(await isWindsurfInstalled());
          default:
            return !1;
        }
      },
    },
    {
      id: "ide-upsell-external-terminal",
      providerAgnostic: !0,
      advertisedCommand: "ide",
      content: async () => "Connect Claude to your IDE \xB7 /ide",
      cooldownSessions: 4,
      async isRelevant() {
        if (isSupportedIdeTerminal()) return !1;
        if ((await findIdeLockfiles()).length !== 0) return !1;
        return (await getRunningIdes()).length > 0;
      },
    },
    {
      id: "install-github-app",
      content: async () =>
        "Run /install-github-app to tag @claude right from your Github issues and PRs",
      cooldownSessions: 10,
      advertisedCommand: "install-github-app",
      async isRelevant() {
        if (getGlobalConfig().githubActionSetupCount) return !1;
        let w = getCachedRemoteHost(),
          I = w ? getGitProvider(w) : null;
        return I !== "gitlab" && I !== "bitbucket";
      },
    },
    {
      id: "install-slack-app",
      content: async () => "Run /install-slack-app to use Claude in Slack",
      cooldownSessions: 10,
      advertisedCommand: "install-slack-app",
      isRelevant: async () => !getGlobalConfig().slackAppInstallCount,
    },
    {
      id: "install-slack-app-mcp",
      content: async () =>
        "Using a Slack MCP? With Claude Tag you can @Claude directly in Slack \u2014 run /install-slack-app or share claude.com/product/tag with your org owner",
      cooldownSessions: 10,
      isRelevant: async (w) => {
        try {
          if (!isClaudeAISubscriber()) return !1;
          if (getGlobalConfig().slackAppInstallCount) return !1;
          let { servers: I } = await getClaudeCodeMcpConfigs({}, { storageV5: w?.storageV5 });
          return Object.keys(I).some((O) => O.toLowerCase().includes("slack"));
        } catch (I) {
          return !1;
        }
      },
    },
    {
      id: "permissions",
      providerAgnostic: !0,
      content: async () =>
        "Use /permissions to pre-approve and pre-deny bash, edit, and MCP tools",
      cooldownSessions: 10,
      advertisedCommand: "permissions",
      async isRelevant() {
        return getGlobalConfig().numStartups > 10 && !isRemoteActive();
      },
    },
    {
      id: "drag-and-drop-images",
      providerAgnostic: !0,
      content: async () =>
        "Did you know you can drag and drop image files into your terminal?",
      cooldownSessions: 10,
      isRelevant: async () => !a.isSSH(),
    },
    {
      id: "paste-images-mac",
      providerAgnostic: !0,
      content: async () =>
        "Paste images into Claude Code using control+v (not cmd+v!)",
      cooldownSessions: 10,
      isRelevant: async () => getCurrentPlatform() === "macos",
    },
    {
      id: "double-esc",
      providerAgnostic: !0,
      content: async () =>
        "Double-tap esc to rewind the conversation to a previous point in time",
      cooldownSessions: 10,
      isRelevant: async () => !fileHistoryEnabled(),
    },
    {
      id: "double-esc-code-restore",
      providerAgnostic: !0,
      content: async () =>
        "Double-tap esc to rewind the code and/or conversation to a previous point in time",
      cooldownSessions: 10,
      isRelevant: async () => fileHistoryEnabled(),
    },
    {
      id: "continue",
      providerAgnostic: !0,
      content: async () =>
        "Run claude --continue or claude --resume to resume a conversation",
      cooldownSessions: 10,
      isRelevant: async () => !0,
    },
    {
      id: "rename-conversation",
      providerAgnostic: !0,
      content: async () =>
        "Name your conversations with /rename to find them easily in /resume later",
      cooldownSessions: 15,
      isRelevant: async () => isCustomTitleEnabled() && getGlobalConfig().numStartups > 10,
    },
    {
      id: "custom-commands",
      providerAgnostic: !0,
      content: async () =>
        "Create skills by adding .md files to .claude/skills/ in your project or ~/.claude/skills/ for skills that work in any project",
      cooldownSessions: 15,
      async isRelevant(w) {
        let I = getGlobalConfig();
        return (
          !isCustomizationDisabled("skills") &&
          I.numStartups > 10 &&
          !(await Hm("skills", w?.storageV5))
        );
      },
    },
    {
      id: "shift-tab",
      providerAgnostic: !0,
      async content() {
        return `Hit ${qm() ?? "shift+tab"} to cycle between manual mode, auto-accept edit mode, and plan mode`;
      },
      cooldownSessions: 10,
      async isRelevant() {
        if (ke()) return !1;
        return qm() !== null;
      },
    },
    {
      id: "image-paste",
      providerAgnostic: !0,
      content: async () =>
        `Use ${getKeybindingChord("chat:imagePaste", "Chat", "ctrl+v")} to paste images from your clipboard`,
      cooldownSessions: 20,
      isRelevant: async () => !0,
    },
    {
      id: "agent-flag",
      providerAgnostic: !0,
      content: async () =>
        "Use --agent <agent_name> to directly start a conversation with a subagent",
      cooldownSessions: 15,
      async isRelevant(w) {
        let I = getGlobalConfig();
        return (
          !isCustomizationDisabled("agents") &&
          I.numStartups > 5 &&
          (await Hm("agents", w?.storageV5))
        );
      },
    },
    {
      id: "desktop-app",
      content: async () =>
        "Run Claude Code locally or remotely using the Claude desktop app: clau.de/desktop",
      cooldownSessions: 15,
      isRelevant: async (w) =>
        isDesktopCommandEnabled() && !isFirstPartyApiCustomer() && !(await spinnerTipHostStateStore.of(w.session.host).getDesktopInstalled()),
    },
    {
      id: "desktop-shortcut",
      advertisedCommand: "desktop",
      content: async (w) =>
        `Continue your session in Claude Code Desktop with ${getThemeColor("suggestion", w.theme)("/desktop")}`,
      cooldownSessions: 15,
      isRelevant: async () => isDesktopCommandEnabled() && Tl().enable_shortcut_tip,
    },
    {
      id: "desktop-contextual",
      advertisedCommand: "desktop",
      priority: 1,
      content: async (w) => {
        let I = getThemeColor("suggestion", w.theme);
        if (await spinnerTipHostStateStore.of(w.session.host).getDesktopInstalled())
          return `Working on UI? See a live preview in Claude Code Desktop \xB7 run ${I("/desktop")}`;
        return `Working on UI? Claude Code Desktop has live preview and inline images \xB7 ${I("clau.de/desktop")}`;
      },
      cooldownSessions: 15,
      isRelevant: async (w) => {
        if (!isDesktopCommandEnabled()) return !1;
        if (!Tl().enable_contextual_tip) return !1;
        return Il(w);
      },
    },
    {
      id: "claude-design-contextual",
      priority: 1,
      content: async (w) =>
        `Use Claude Design to mock up screens before you build \xB7 ${formatHyperlink("https://claude.ai/design?utm_source=claude_code&utm_medium=tip&utm_campaign=tengu_cedar_plume", "claude.ai/design", { themeName: w.theme })}`,
      cooldownSessions: 15,
      isRelevant: async (w) => {
        if (!isClaudeAISubscriber()) return !1;
        if (!Il(w)) return !1;
        return getFeatureValue_CACHED_MAY_BE_STALE("tengu_cedar_plume", !1);
      },
    },
    {
      id: "claude-design-command",
      advertisedCommand: "design",
      priority: 1,
      content: async (w) =>
        `Working on UI? Run ${getThemeColor("suggestion", w.theme)("/design")} to mock up a few directions before you build`,
      cooldownSessions: 15,
      isRelevant: async (w) => {
        if (!Il(w)) return !1;
        if (areBundledSkillsDisabled()) return !1;
        return isDesignSyncEnabled();
      },
    },
    {
      id: "artifact-publish-plan",
      priority: 3,
      maxLifetimeShows: 5,
      cooldownSessions: 5,
      content: async () =>
        "Working on a plan or design doc? Ask Claude to publish it as an artifact \u2014 a polished web page you can open in your browser.",
      isRelevant: async () =>
        !Km("artifact-publish-plan") && isArtifactToolEnabled() && getArtifactPublishStubDir() === null,
    },
    {
      id: "artifact-duplicate",
      priority: 3,
      maxLifetimeShows: 5,
      cooldownSessions: 5,
      content: async () =>
        "See an artifact you'd like to build on? Duplicate, in its title menu, gives you your own editable copy.",
      isRelevant: async () =>
        !Km("artifact-duplicate") && isArtifactToolEnabled() && getArtifactPublishStubDir() === null,
    },
    {
      id: "web-app",
      content: async () =>
        "Run tasks in the cloud while you keep coding locally \xB7 clau.de/web",
      cooldownSessions: 15,
      isRelevant: async () => !isFirstPartyApiCustomer(),
    },
    {
      id: "web-setup-github",
      advertisedCommand: "web-setup",
      priority: 1,
      cooldownSessions: Wm,
      maxLifetimeShows: zm,
      content: async (w) =>
        `Run ${getThemeColor("suggestion", w.theme)("/web-setup")} to use Claude Code on the web with the GitHub account gh is signed in to`,
      isRelevant: async (w) => {
        if (ke() || !isClaudeAISubscriber() || !isWebSetupEnabled()) return !1;
        let I = getCachedRemoteHost(),
          O = I ? getGitProvider(I) : null;
        if (O === "gitlab" || O === "bitbucket") return !1;
        if (getTipLifetimeShownCount("web-setup-github") >= zm || getSessionsSinceTipShown("web-setup-github") < Wm)
          return !1;
        if (
          (await spinnerTipHostStateStore.of(w.session.host).getGhAuthStatus()).status !==
          "authenticated"
        )
          return !1;
        return (
          githubConnectionStatusStore.of(w.session.host).peek(w.credentials, w.storageV5) ===
          "not_connected"
        );
      },
    },
    {
      id: "remote-control",
      content: async (w) => {
        let I = getThemeColor("suggestion", w.theme);
        return `Control this session from ${formatHyperlink("https://claude.com/download#mobile", "the Claude mobile app", { themeName: w.theme })} \xB7 run ${I("/remote-control")}`;
      },
      cooldownSessions: 15,
      isRelevant: async () => isRemoteControlOfferable() && !getGlobalConfig().hasUsedRemoteControl && !getRemoteControlAtStartup(),
    },
    {
      id: "remote-control-next-surface",
      content: async (w) => {
        let [I, O, U] =
          Cl() === "web"
            ? ["https://claude.ai/code", "claude.ai/code", " on any browser"]
            : [
                "https://claude.com/download#mobile",
                "the Claude mobile app",
                "",
              ];
        return `You can also drive this session from ${formatHyperlink(I, O, { themeName: w.theme })}${U}`;
      },
      cooldownSessions: 15,
      maxLifetimeShows: 3,
      isRelevant: async () => {
        if (!isRemoteControlOfferable() || !getRemoteControlAtStartup()) return !1;
        if (Cl() === void 0) return !1;
        return getFeatureValue_CACHED_MAY_BE_STALE("tengu_maple_rung", !1);
      },
    },
    {
      id: "push-notif",
      content: async (w) =>
        `Get pinged on your phone when long tasks finish \xB7 enable push notifications in ${getThemeColor("suggestion", w.theme)("/config")}`,
      cooldownSessions: 15,
      isRelevant: async () => _l(),
    },
    {
      id: "voice-mode",
      content: async () => "Use /voice to enable push-to-talk dictation",
      cooldownSessions: 10,
      advertisedCommand: "voice",
      isRelevant: async () =>
        isVoiceModeAvailable() && !hasExplicitVoiceSetting(getInitialSettings()) && !xg() && !a.CLAUDE_CODE_REMOTE && !a.isSSH(),
    },
    {
      id: "no-flicker",
      providerAgnostic: !0,
      content: async () =>
        "Try the new fullscreen renderer \u2014 flicker-free output, mouse support, auto-copy on select \xB7 /tui fullscreen",
      cooldownSessions: 10,
      advertisedCommand: "tui",
      isRelevant: async () =>
        !shouldUseFullscreen() && getInitialSettings().tui === void 0 && !hasRecordedFullscreenCrashForVersion() && !isAutoDisabledFullscreenReason(getFullscreenReason()),
    },
    {
      id: "console-api-key",
      content: async (w) =>
        `Build your AI product with Claude API. Run ${getThemeColor("suggestion", w.theme)("/claude-api")} to get started`,
      cooldownSessions: 15,
      isRelevant: async () => {
        if (!isClaudeAISubscriber() || !isMaxSubscriber()) return !1;
        let w = getGlobalConfig();
        if (w.primaryApiKey) return !1;
        if (w.customApiKeyResponses?.approved?.length) return !1;
        if (a.ANTHROPIC_API_KEY) return !1;
        if (w.numStartups <= 10) return !1;
        return getFeatureValue_CACHED_MAY_BE_STALE("tengu_kestrel_arch", "off") === "on";
      },
    },
    {
      id: "c4e-desktop",
      content: async (w) =>
        `Run Claude Code locally or remotely using the Claude desktop app \u2014 ${xl(w)}`,
      cooldownSessions: 15,
      isRelevant: async () => {
        if (!isFirstPartyApiCustomer() || Ol("c4e-desktop")) return !1;
        return isDesktopCommandEnabled();
      },
    },
    {
      id: "c4e-remote-sessions",
      content: async (w) =>
        `Run tasks in the cloud while you keep coding locally \u2014 ${xl(w)}`,
      cooldownSessions: 15,
      isRelevant: async () => isFirstPartyApiCustomer() && !Ol("c4e-remote-sessions"),
    },
    {
      id: "c4e-ultrareview",
      content: async (w) =>
        `/ultrareview runs a deep, multi-agent review of your changes \u2014 ${xl(w)}`,
      cooldownSessions: 15,
      advertisedCommand: "ultrareview",
      isRelevant: async () => isFirstPartyApiCustomer() && !Ol("c4e-ultrareview"),
    },
    {
      id: "ultrareview-awareness",
      priority: 1,
      cooldownSessions: 8,
      content: async (w) => {
        let I = getThemeColor("suggestion", w.theme),
          O = getUltrareviewQuota(),
          U =
            O !== null && O.reviews_remaining > 0
              ? ` \u2014 ${formatFreeReviewsLeft(O.reviews_remaining)}`
              : "";
        return `Run ${I("/ultrareview")} for a cloud-based multi-agent review that finds and verifies bugs in your branch${U}`;
      },
      isRelevant: async (w) => {
        if (!isUltrareviewAwarenessEnabled("startup_tip")) return !1;
        if (hasRunUltrareview()) return !1;
        return (loadUltrareviewQuota(w.credentials), !0);
      },
    },
    {
      id: "opusplan-mode-reminder",
      providerAgnostic: !0,
      content: async () =>
        `Your default model setting is Opus Plan Mode. Press ${getKeybindingChord("chat:cycleMode", "Chat", "shift+tab")} twice to activate Plan Mode and plan with Claude Opus.`,
      cooldownSessions: 2,
      async isRelevant() {
        let w = getGlobalConfig(),
          O = getUserSpecifiedModelSetting() === "opusplan",
          U = w.lastPlanModeUse
            ? (Date.now() - w.lastPlanModeUse) / 86400000
            : 1 / 0;
        return O && U > 3;
      },
    },
    {
      id: "frontend-design-plugin",
      priority: 1,
      providerAgnostic: !0,
      content: async (
        w,
      ) => `Working with HTML/CSS? Install the frontend-design plugin:
${getThemeColor("suggestion", w.theme)(`/plugin install frontend-design@${OFFICIAL_MARKETPLACE_NAME}`)}`,
      cooldownSessions: 3,
      maxLifetimeShows: 3,
      advertisedCommand: "plugin",
      isRelevant: async (w) =>
        Jm(spinnerTipHostStateStore.of(w.session.host), "frontend-design", w, {
          filesRead: ["**/*.html", "**/*.css", "**/*.htm"],
        }),
    },
    {
      id: "subagent-fanout-nudge",
      providerAgnostic: !0,
      content: async (w) =>
        `Say ${getThemeColor("suggestion", w.theme)('"fan out subagents"')} and Claude sends a team. Each one digs deep so nothing gets missed.`,
      cooldownSessions: 3,
      isRelevant: async () => !isClaudeAISubscriber(),
    },
    {
      id: "dynamic-workflows",
      providerAgnostic: !0,
      content: async (w) =>
        `Dynamic workflows let Claude write a script that orchestrates many agents for you. Mention the keyword ${getThemeColor("suggestion", w.theme)("ultracode")} or ask Claude to use a workflow directly.`,
      cooldownSessions: 3,
      isRelevant: async () => areWorkflowsEnabled(),
    },
    {
      id: "workflow-size-prompting",
      providerAgnostic: !0,
      advertisedCommand: "config",
      priority: 1,
      content: async (w) => {
        let I = getThemeColor("suggestion", w.theme);
        return `You can control how big a workflow is just by prompting. Try ${I('"use a small workflow, 5 agents max"')}, or set a default with ${I("Dynamic workflow size")} in ${I("/config")}.`;
      },
      cooldownSessions: 5,
      isRelevant: async (w) =>
        areWorkflowsEnabled() &&
        !Vm() &&
        (w?.toolsUsed?.has(WORKFLOW_TOOL_NAME) ?? !1) &&
        !Gm("workflow-size-prompting"),
    },
    {
      id: "workflow-size-prompting-ambient",
      providerAgnostic: !0,
      advertisedCommand: "config",
      content: async (w) => {
        let I = getThemeColor("suggestion", w.theme);
        return `You can control how big a workflow is just by prompting. Ask for a small workflow, cap it with ${I('"use at most 5 agents"')}, or set a default with ${I("Dynamic workflow size")} in ${I("/config")}.`;
      },
      cooldownSessions: 12,
      isRelevant: async (w) =>
        areWorkflowsEnabled() &&
        !Vm() &&
        !(w?.toolsUsed?.has(WORKFLOW_TOOL_NAME) ?? !1) &&
        !Gm("workflow-size-prompting-ambient"),
    },
    {
      id: "loop-command-nudge",
      providerAgnostic: !0,
      content: async (w) =>
        `${getThemeColor("suggestion", w.theme)(`/${LOOP_SKILL_NAME}`)} runs any prompt on a recurring schedule. Great for monitoring deploys, babysitting PRs, or polling status.`,
      cooldownSessions: 3,
      isRelevant: async () => {
        if (isRunningInRemoteEnvironment()) return !1;
        if (!isKairosCronEnabled()) return !1;
        return !isClaudeAISubscriber();
      },
    },
    {
      id: "code-review-low-fast",
      providerAgnostic: !0,
      content: async (w) =>
        `For a fast, cheap code review, try ${getThemeColor("suggestion", w.theme)("/code-review low")}. It runs the built-in skill at its lightest effort level.`,
      cooldownSessions: 8,
      isRelevant: async () => {
        let w = getGlobalConfig().skillUsage ?? {};
        return Object.keys(w).some((I) => {
          if (I === CODE_REVIEW_SKILL_NAME) return !1;
          return I.toLowerCase()
            .replace(/[^a-z0-9]/g, "")
            .includes("codereview");
        });
      },
    },
    {
      id: "plugin-disuse-review",
      providerAgnostic: !0,
      advertisedCommand: "plugin",
      content: async (w) => {
        let I = getThemeColor("suggestion", w.theme),
          O = await getDisusedPlugins(),
          U = O[0];
        if (!U) return "";
        if (O.length === 1)
          return `You haven't used the ${chalk.bold(U.name)} plugin lately. Disable it with ${I("/plugin")} to free up context and speed up startup.`;
        return `You have ${O.length} plugins you haven't used lately. Disable them with ${I("/plugin")} to free up context and speed up startup.`;
      },
      cooldownSessions: 30,
      isRelevant: async () => (await getDisusedPlugins()).length > 0,
    },
    {
      id: "goal-command-nudge",
      content: async (w) =>
        `Set an objective with ${getThemeColor("suggestion", w.theme)("/goal")} \u2014 Claude keeps working until it's met`,
      cooldownSessions: 3,
      isRelevant: async () => cge(),
    },
    {
      id: "guest-passes",
      content: async (w) => {
        let I = getThemeColor("claude", w.theme),
          O = getCachedReferrerReward();
        return O
          ? `Share Claude Code and earn ${I(formatRewardAmount(O))} in usage credits \xB7 ${I("/passes")}`
          : `You have free guest passes to share \xB7 ${I("/passes")}`;
      },
      cooldownSessions: 3,
      isRelevant: async () => {
        if (getGlobalConfig().hasVisitedPasses) return !1;
        let { eligible: I } = getCachedPassesEligibility();
        return I;
      },
    },
    {
      id: "feedback-command",
      content: async () => "Use /feedback to help us improve!",
      cooldownSessions: 15,
      async isRelevant() {
        if (!isFeedbackCommandEnabled()) return !1;
        return getGlobalConfig().numStartups > 5;
      },
    },
    {
      id: "team-onboarding-share",
      advertisedCommand: "team-onboarding",
      content: async (w) =>
        `Run ${getThemeColor("suggestion", w.theme)("/team-onboarding")} to turn your Claude usage into an onboarding guide \u2014 share it with your team in one link`,
      cooldownSessions: 5,
      async isRelevant() {
        let w = getGlobalConfig();
        if (w.numStartups < 15) return !1;
        if (
          w.teamOnboardingLastUsedAt !== void 0 &&
          Date.now() - w.teamOnboardingLastUsedAt < 2592000000
        )
          return !1;
        return isOnboardingGuideSharingEnabled();
      },
    },
  ],
  gb = [];
async function isTipRelevant(w, I) {
  try {
    return await w.isRelevant(I);
  } catch (O) {
    return (
      spinnerTipHostStateStore.of(I.session.host).failedTipIds.add(w.id),
      logError(dt(ge(O), "tip isRelevant threw")),
      !1
    );
  }
}
async function getApplicableSpinnerTips(w) {
  let I = spinnerTipHostStateStore.of(w.session.host),
    { tips: O, trustedCount: U } = await getOverrideSpinnerTips(w.session.host),
    V = O.filter((Ae) => getSessionsSinceTipShown(Ae.id) >= Ae.cooldownSessions);
  if (U > 0 && shouldExcludeDefaultTips()) return V;
  let te = [...Qm, ...gb, ...(await I.getMarketplacePluginTips(w.storageV5))],
    ne = getAPIProvider() !== "firstParty" || !isFirstPartyAnthropicBaseUrl(),
    me = te.filter((Ae) => !I.failedTipIds.has(Ae.id)),
    Me = ne ? me.filter((Ae) => Ae.providerAgnostic) : me,
    Se = await Promise.all(
      Me.map((Ae) =>
        Ae.advertisedCommand === void 0 ? !0 : isAdvertisedCommandAvailable(Ae.advertisedCommand),
      ),
    ),
    xe = Me.filter((Ae, $e) => Se[$e]),
    De = await Promise.all(xe.map((Ae) => isTipRelevant(Ae, w)));
  return [
    ...xe
      .filter((Ae, $e) => De[$e])
      .filter((Ae) => getSessionsSinceTipShown(Ae.id) >= Ae.cooldownSessions)
      .filter(
        (Ae) =>
          Ae.maxLifetimeShows === void 0 || getTipLifetimeShownCount(Ae.id) < Ae.maxLifetimeShows,
      ),
    ...V,
  ];
}
async function ep(w, I) {
  if (!isModelCapabilitiesCacheEnabled()) return;
  if (isEssentialTrafficOnly()) return;
  try {
    let O = await createAnthropicClient({
        maxRetries: 1,
        agentContext: createMainAgentContext(),
        credentials: I,
        storageV5: w,
      }),
      U = isClaudeAISubscriber() ? [OAUTH_BETA_HEADER] : void 0,
      V = [];
    for await (let te of O.models.list({ betas: U })) {
      let ne = parseModelCapabilitiesEntry(te);
      if (ne) V.push(ne);
    }
    if (V.length === 0) return;
    await writeModelCapabilitiesCache(V, w);
  } catch (O) {
    logForDebugging(
      `[modelCapabilities] fetch failed: ${O instanceof Error ? O.message : "unknown"}`,
    );
  }
}
import { join as kb } from "path";
import { createPublicKey } from "crypto";
var hb = {
    id: "claude-code-release-signing-key",
    spkiBase64:
      "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixBUZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncrmYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7ro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmVNX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAsIdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAip5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81IwH6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0lC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3ZpIgmI+CePUPB1pDf+lhPkU1MCAwEAAQ==",
  },
  Ki = [hb],
  js = "managed-model-catalog-public-key";
function Wi(w) {
  if (w === void 0) return;
  return w === js ? "managed_key" : "compiled_roots";
}
function Sb(w) {
  let I = /^-----BEGIN PUBLIC KEY-----([\s\S]*?)-----END PUBLIC KEY-----$/.exec(
    w.trim(),
  );
  if (I === null || I[1] === void 0) return;
  let O = I[1].replace(/\s+/g, "");
  if (O.length === 0 || !/^[A-Za-z0-9+/]+=*$/.test(O)) return;
  let U = Buffer.from(O, "base64");
  return U.length > 0 && U.toString("base64") === O
    ? new Uint8Array(U)
    : void 0;
}
var Ul = 2048;
function np(w) {
  let I = Sb(w);
  if (I === void 0) return { ok: !1, reason: "not_spki_pem" };
  let O, U;
  try {
    let V = createPublicKey({ key: Buffer.from(I), format: "der", type: "spki" });
    ((O = V.asymmetricKeyType), (U = V.asymmetricKeyDetails?.modulusLength));
  } catch {
    return { ok: !1, reason: "not_spki_pem" };
  }
  if (O !== "rsa") return { ok: !1, reason: "not_rsa" };
  if (U === void 0 || U < Ul) return { ok: !1, reason: "modulus_too_short" };
  return { ok: !0, der: I };
}
function rp(w) {
  return new Uint8Array(Buffer.from(w.spkiBase64, "base64"));
}
var Hs = 1,
  Yo = MAX_SERVED_CATALOG_BYTES,
  kr = 16384,
  _b = 1,
  Cb = "RSASSA-PKCS1-v1_5-SHA512",
  sp = createLazyValue(() =>
    c({
      schema: k(_b),
      algorithm: k(Cb),
      signature: s().min(1),
      publicKeySha256: s().regex(/^[0-9a-f]{64}$/),
    }).loose(),
  ),
  vb =
    /^\d{4}-\d{2}-\d{2}[Tt ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[Zz]|[+-]\d{2}:\d{2})$/;
function ip(w) {
  if (w === void 0 || !vb.test(w)) return;
  let I = Date.parse(w);
  return Number.isFinite(I) ? I : void 0;
}
var Er = createLazyValue(() =>
  c({
    $schema: s().optional(),
    schema_version: k(Hs),
    version: T().int().nonnegative(),
    issued_at: s().optional(),
    expires_at: s().optional(),
    key_id: s().optional(),
    surfaces: fe(s(), ModelSelectorSurfacesSchema()),
  }).loose(),
);
function zi(w) {
  if (w === null || typeof w !== "object" || !("schema_version" in w)) return;
  let I = w.schema_version;
  return typeof I === "number" ? I : void 0;
}
function rs(w, I) {
  for (let [O, U] of [
    [I, w.surfaces[I]],
    ["cc", w.surfaces.cc],
  ]) {
    if (U === void 0) continue;
    let V = getModelSelectorSurface(U, O);
    if (V === null) continue;
    if (V.state === void 0) return { surface: I, config: V.config };
    let {
      org_enforced_default_model: te,
      selection_source: ne,
      ...me
    } = V.state;
    return { surface: I, config: V.config, state: me };
  }
  return null;
}
var lp = 2,
  dp = 3600000,
  cp = 0.1,
  wb = ["hosted", "custom_url", "file"],
  Pb = createLazyValue(() =>
    c({
      version: k(lp),
      fetchedAt: T(),
      staleAt: T(),
      etag: s().refine(isValidEtag).optional(),
      source: X(wb),
      documentBytes: s(),
      sidecar: se(),
      rootId: s(),
      document: Er(),
    }),
  );
function Nl(w) {
  return kb(getModelCatalogCacheDir(), `published-${w}.json`);
}
function Ks() {
  return getProviderState().publishedCatalogByKey;
}
var ap = Yo * 3 + kr + 4096;
async function Vi(w) {
  let I = Ks().get(w);
  if (I !== void 0) return I ?? void 0;
  let O = Nl(w),
    U;
  try {
    U = await getFileStorage().readRange(O, 0, ap + 1);
  } catch (te) {
    if (!W(te))
      logForDebugging(`[publishedCatalog] cache read failed: ${A(te) ?? "unknown"}`);
    Ks().set(w, null);
    return;
  }
  let V = U.length > ap ? void 0 : Pb().safeParse(xt(U.toString("utf8"), !1));
  if (!V?.success) {
    (logForDebugging(
      `[publishedCatalog] cache file ${V === void 0 ? "oversized" : "invalid"}, discarding`,
    ),
      await Bl(w));
    return;
  }
  return (await Yi(w, V.data, { verified: !1 }), V.data);
}
async function Bl(w) {
  Ks().set(w, null);
  try {
    await getFileStorage().delete(Nl(w));
  } catch {}
}
function mp(w) {
  Ks().set(w, null);
}
async function jl(w, I) {
  await Yi(w, I, { verified: !0 });
  try {
    let O = getFileStorage();
    (await O.mkdir(getModelCatalogCacheDir()), await O.atomicWrite(Nl(w), jsonStringify(I), 384));
  } catch (O) {
    logForDebugging(`[publishedCatalog] cache write failed: ${A(O) ?? "unknown"}`);
  }
}
async function Yi(w, I, { verified: O }) {
  if ((Ks().set(w, I), O && I.rootId !== js))
    for (let U of pp(I.document)) registerCatalogPublicIds(U);
  await Hl(I.document);
}
async function Hl(w) {
  let I = pp(w);
  for (let O of I) applyCatalogMasking(O);
  await persistMaskedModelIds(new Set(I.flatMap((O) => [...getDroppedConfidentialModelIds(O)])));
}
function pp(w) {
  return MODEL_SELECTOR_SURFACES.flatMap((I) => {
    let O = w.surfaces[I],
      U = O === void 0 ? null : getModelSelectorSurface(O, I);
    return U === null ? [] : [U];
  });
}
function fp({
  document: w,
  documentBytes: I,
  sidecar: O,
  etag: U,
  source: V,
  rootId: te,
  now: ne = Date.now(),
  random: me = Math.random(),
}) {
  return {
    version: lp,
    fetchedAt: ne,
    staleAt: hp(ne, me),
    ...(U !== void 0 && { etag: U }),
    source: V,
    documentBytes: Buffer.from(I).toString("base64"),
    sidecar: O,
    rootId: te,
    document: w,
  };
}
function yp(w, I = Date.now(), O = Math.random()) {
  return { ...w, fetchedAt: I, staleAt: hp(I, O) };
}
function hp(w, I) {
  let O = 1 + cp * (2 * I - 1);
  return w + Math.round(dp * O);
}
function Gl(w, I = Date.now()) {
  let O = ip(w.expires_at);
  return O !== void 0 && I >= O;
}
function ss(w, I = Date.now()) {
  let O = w.fetchedAt + dp * (1 + cp);
  return (
    I < w.fetchedAt || I >= w.staleAt || w.staleAt > O || Gl(w.document, I)
  );
}
var Sp = {
  "//": "Compiled-in seed of the published model-catalog document (utils/model/servedCatalog/published/seed.ts): what a session reads until its first fetch of https://downloads.claude.ai/model-catalog/v1/catalog.json has been cached. HAND-BUILT for now from the public ids in model-catalog.json, in the document's envelope shape; a bot PR will refresh this file from the published document once the publisher is live, so do not hand-edit rows here on a model launch \u2014 the hosted document is what launches a model, this file only has to be valid and public. Version 0 is the floor below which no published document is accepted.",
  schema_version: 1,
  version: 0,
  issued_at: "2026-08-25T00:00:00Z",
  expires_at: "2027-08-25T00:00:00Z",
  surfaces: {
    cc: {
      model_selector_config: [
        {
          id: "cc",
          models: [
            {
              id: "claude-opus-5",
              name: "Opus 5",
              short_name: "Opus",
              section: "main",
            },
            {
              id: "claude-sonnet-5",
              name: "Sonnet 5",
              short_name: "Sonnet",
              section: "main",
            },
            {
              id: "claude-haiku-4-5",
              name: "Haiku 4.5",
              short_name: "Haiku",
              section: "main",
            },
          ],
        },
      ],
    },
  },
};
var Mb = createLazyValue(() => {
  let w = Er().safeParse(Sp);
  if (!w.success) logError(Error("published model-catalog seed does not parse"));
  return { document: w.success ? w.data : null };
});
function _p() {
  return Mb().document;
}
function bp() {
  return _p()?.version ?? 0;
}
function Cp(w) {
  let I = _p();
  return I === null ? null : rs(I, w);
}
import { createHash } from "crypto";
import { fileURLToPath } from "url";
var wp = "https://downloads.claude.ai/model-catalog/v1/catalog.json",
  Kl = ".raw-sig.json";
function Wl() {
  return { url: void 0, publicKey: void 0 };
}
function Pp() {
  let { url: w, publicKey: I } = Wl();
  if (w === void 0 && I === void 0) return { url: void 0, publicKey: void 0 };
  let O = getPolicySettingsOrigin();
  if (!isAdminPolicyOrigin(O) && !(O === "remote" && isRemoteManagedSettingsVerified()))
    return (
      logForDebugging(
        `[publishedCatalog] ignoring managed model-catalog source settings from a non-admin policy origin (${O ?? "none"}${O === "remote" ? ", unconfirmed by the server" : ""})`,
      ),
      { url: void 0, publicKey: void 0 }
    );
  return { url: w, publicKey: I };
}
function is() {
  let { url: w, publicKey: I } = Wl();
  if (w === void 0 && I === void 0) return !1;
  return getPolicySettingsOrigin() === "remote" && !isRemoteManagedSettingsVerified();
}
function Ep() {
  if (!is()) return !1;
  let { url: w } = Wl();
  if (w === void 0) return !1;
  try {
    return Vl(new URL(w)) === "file";
  } catch {
    return !1;
  }
}
function Rp(w = Pp()) {
  return w.url ?? Ib(a.CLAUDE_CODE_MODEL_CATALOG_URL);
}
function Mp() {
  let w = Rp();
  if (w === void 0) return !1;
  try {
    return Vl(new URL(w)) === "file";
  } catch {
    return !1;
  }
}
function Ib(w) {
  let I = w?.trim();
  return I ? I : void 0;
}
function Xi() {
  let w = Pp(),
    I = Rp(w) ?? wp,
    O;
  try {
    O = new URL(I);
  } catch {
    return (
      logForDebugging(
        "[publishedCatalog] configured catalog URL is not a URL; published path off",
      ),
      { ok: !1, reason: "invalid_url" }
    );
  }
  let U = Vl(O);
  if (U === void 0)
    return (
      logForDebugging(
        `[publishedCatalog] configured catalog URL has unsupported scheme ${O.protocol}; published path off`,
      ),
      { ok: !1, reason: "invalid_url" }
    );
  if (U !== "file" && isLoopbackOrMetadataHost(O.hostname))
    return (
      logForDebugging(
        "[publishedCatalog] configured catalog URL names a loopback or metadata host; published path off",
      ),
      { ok: !1, reason: "invalid_url" }
    );
  let V = O.toString();
  return {
    ok: !0,
    source: { kind: U, url: V, trust: xb(U, w), cacheKey: Db(V) },
  };
}
function Vl(w) {
  if (w.protocol === "file:")
    return w.hostname === "" || w.hostname === "localhost" ? "file" : void 0;
  if (w.protocol !== "https:" && w.protocol !== "http:") return;
  return w.toString() === wp ? "hosted" : "custom_url";
}
function xb(w, I) {
  if (w === "hosted" || I.publicKey === void 0)
    return { kind: "compiled_roots", roots: Ki };
  if (I.url === void 0)
    return (
      logForDebugging(
        "[publishedCatalog] a managed catalog public key is set but no managed catalog URL is; the env-named URL verifies against the compiled roots only",
      ),
      { kind: "compiled_roots", roots: Ki }
    );
  let O = np(I.publicKey);
  if (!O.ok)
    return (
      logForDebugging(
        `[publishedCatalog] the managed catalog public key is not a PEM SPKI RSA public key of at least ${Ul} bits (${O.reason}); custom source refused`,
      ),
      { kind: "untrusted", reason: "invalid_public_key" }
    );
  return {
    kind: "managed_key",
    roots: [
      ...Ki,
      { id: js, spkiBase64: Buffer.from(O.der).toString("base64") },
    ],
  };
}
function Db(w) {
  return createHash("sha256").update(w).digest("hex").slice(0, 32);
}
function Tp(w) {
  return fileURLToPath(w.url);
}
var Ob = "claude-code-model-catalog-v1\x00",
  Ip = { name: "RSASSA-PKCS1-v1_5", hash: "SHA-512" };
async function Ji({ documentBytes: w, sidecar: I, roots: O }) {
  let U = sp().safeParse(I);
  if (!U.success) return { ok: !1, reason: "sidecar_invalid" };
  let V = Buffer.from(U.data.signature, "base64");
  if (V.length === 0 || V.toString("base64") !== U.data.signature)
    return { ok: !1, reason: "sidecar_invalid" };
  let te, ne;
  for (let Se of O) {
    let xe = Yl(rp(Se));
    if ((await Ub(xe)) === U.data.publicKeySha256) {
      ((te = Se), (ne = xe));
      break;
    }
  }
  if (te === void 0 || ne === void 0) return { ok: !1, reason: "unknown_key" };
  let me;
  try {
    me = await crypto.subtle.importKey("spki", ne, Ip, !1, ["verify"]);
  } catch (Se) {
    return (
      logForDebugging(
        `[publishedCatalog] trust root ${te.id} is not an importable RSA key: ${Se instanceof Error ? Se.name : "error"}`,
      ),
      { ok: !1, reason: "key_unusable" }
    );
  }
  let Me;
  try {
    Me = await crypto.subtle.verify(Ip.name, me, Yl(V), Fb(w));
  } catch {
    Me = !1;
  }
  return Me ? { ok: !0, rootId: te.id } : { ok: !1, reason: "bad_signature" };
}
function Fb(w) {
  let I = new TextEncoder().encode(Ob),
    O = new Uint8Array(I.length + w.length);
  return (O.set(I), O.set(w, I.length), O);
}
async function Ub(w) {
  let I = await crypto.subtle.digest("SHA-256", Yl(w));
  return Buffer.from(I).toString("hex");
}
function Yl(w) {
  let I = new Uint8Array(w.byteLength);
  return (I.set(w), I);
}
async function Qi(w) {
  if (w.trust.kind === "untrusted") return;
  let I = await Vi(w.cacheKey);
  if (I === void 0) return;
  let O = await Bb(I, w);
  if (!O.ok) {
    if (O.reason === "unknown_key" && w.kind !== "hosted" && is()) {
      (logForDebugging(
        "[publishedCatalog] cached document names a key this session does not hold while server-managed settings are unconfirmed; not using it this session, keeping the file",
      ),
        mp(w.cacheKey));
      return;
    }
    (logForDebugging(
      `[publishedCatalog] cached document not re-established (${O.reason}); discarding`,
    ),
      await Bl(w.cacheKey));
    return;
  }
  let U = O.entry;
  return (await Yi(w.cacheKey, U, { verified: !0 }), U);
}
async function Bb(w, I) {
  let O = I.trust;
  if (O.kind === "untrusted") return { ok: !1, reason: "untrusted_source" };
  let U = $b(w.documentBytes);
  if (U === void 0) return { ok: !1, reason: "undecodable_bytes" };
  let V = await Ji({ documentBytes: U, sidecar: w.sidecar, roots: O.roots });
  if (!V.ok) return { ok: !1, reason: V.reason };
  let te = jb(U);
  if (te === void 0) return { ok: !1, reason: "unparseable_document" };
  let ne = await Xl(te, I, void 0, V.rootId);
  if (ne !== void 0) return { ok: !1, reason: ne };
  return (
    await recordPublishedCatalogFloorVersion(I.cacheKey, te),
    { ok: !0, entry: { ...w, document: te, rootId: V.rootId, source: I.kind } }
  );
}
function $b(w) {
  let I = Buffer.from(w, "base64");
  if (I.toString("base64") !== w) return;
  return I.length > 0 && I.length <= Yo ? new Uint8Array(I) : void 0;
}
function jb(w) {
  let I = xt(Buffer.from(w).toString("utf8"), !1);
  if (zi(I) !== Hs) return;
  let O = Er().safeParse(I);
  return O.success ? O.data : void 0;
}
function Hb(w, I, O) {
  let U = w.kind === "hosted" || Wi(O) === "compiled_roots";
  return Math.max(I?.document.version ?? 0, U ? bp() : 0);
}
async function Xl(w, I, O, U) {
  if (w.version < Hb(I, O, U)) return "replayed_version";
  if (w.version < (await getPublishedCatalogFloorVersion(I.cacheKey))) return "catalog_version_rollback";
  return;
}
var Gb = "tengu_delegated_quail",
  Kb = { mode: "off" };
function as({ skipEssentialTrafficGate: w = !1 } = {}) {
  if (po(a.CLAUDE_CODE_MODEL_CATALOG)) return "env_off";
  if (isSimpleMode()) return "bare";
  if (!w && isEssentialTrafficOnly()) return "essential_traffic";
  if (a.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if (!isFirstPartyApiBackend()) return "not_first_party";
  if (!isClaudeAISubscriber()) return "not_claude_ai_auth";
  if (xp() === null) return "no_org";
  let I = Dp();
  if (I.accountUuid === null) return I.reason;
  if (!isPolicyAllowed("allow_model_catalog")) return "policy";
  return null;
}
function jr() {
  if (as() !== null) return "off";
  return Gr();
}
function Gr() {
  return Wb(getFeatureValue_CACHED_MAY_BE_STALE(Gb, Kb));
}
function Wb(w) {
  if (w === null || typeof w !== "object" || !("mode" in w)) return "off";
  switch (w.mode) {
    case "shadow":
      return "shadow";
    case "primary":
      return "primary";
    default:
      return "off";
  }
}
function xp() {
  let w = a.CLAUDE_CODE_ORGANIZATION_UUID ?? getOauthAccountInfo()?.organizationUuid;
  return Xn(w)?.toLowerCase() ?? null;
}
var zb = 12;
function Dp() {
  let w = getClaudeAIOAuthTokenOrigin();
  if (w === "store") {
    let O = Xn(getOauthAccountInfo()?.accountUuid);
    return O === null
      ? { accountUuid: null, reason: "no_account" }
      : { accountUuid: O.toLowerCase() };
  }
  let I = Xn(a.CLAUDE_CODE_ACCOUNT_UUID);
  if (I !== null) return { accountUuid: I.toLowerCase() };
  return {
    accountUuid: null,
    reason: w === "none" ? "no_account" : "env_bearer",
  };
}
function Vb() {
  let { accountUuid: w } = Dp();
  if (w === null) return null;
  return hashSha256(w).slice(0, zb);
}
function ls() {
  let w = xp(),
    I = Vb();
  if (w === null || I === null) return null;
  return { orgUuid: w, accountScope: I };
}
function ur() {
  if (a.CLAUDE_CODE_REMOTE) return "ccr";
  if (isDesktopHostEntrypoint()) return "ccd";
  return "cc";
}
function ta() {
  let w = as();
  if (w === "essential_traffic" && Mp())
    return Op(as({ skipEssentialTrafficGate: !0 }));
  return Op(w);
}
function Op(w) {
  switch (w) {
    case "env_off":
    case "bare":
    case "essential_traffic":
    case "unix_socket":
    case "policy":
      return w;
    case "not_first_party":
      return "no_3p_reader";
    case "not_claude_ai_auth":
      return isPolicyAllowed("allow_model_catalog") ? null : "policy";
    case "no_org":
    case "no_account":
    case "env_bearer":
    case null:
      return "served_applies";
  }
}
function zs() {
  return ta() === null;
}
function Jl() {
  if (!zs()) return "off";
  return Gr();
}
var Fp = 1e4;
async function $p(w, { etag: I } = {}) {
  try {
    return w.kind === "file" ? await Yb(w) : await qb(w, { etag: I });
  } catch (O) {
    let { kind: U, status: V } = Ps(O);
    switch (
      (logForDebugging(`[publishedCatalog] fetch failed: ${U}${V !== void 0 ? ` ${V}` : ""}`),
      U)
    ) {
      case "timeout":
        return { status: "error", reason: "timeout" };
      case "network":
        return { status: "error", reason: "network" };
      case "auth":
      case "http":
        return V === void 0
          ? { status: "error", reason: eC(O) ? "too_large" : "network" }
          : { status: "error", reason: "http_status", httpStatus: V };
      case "other":
        return { status: "error", reason: "exception" };
    }
  }
}
async function qb(w, { etag: I }) {
  let O = Xb(w.url),
    U = await Lp(w.url, {
      responseType: "arraybuffer",
      timeout: Fp,
      maxContentLength: Yo,
      maxBodyLength: Yo,
      validateStatus: () => !0,
      beforeRedirect: O,
      ...(I !== void 0 && { headers: { "If-None-Match": I } }),
    }),
    V = U.status;
  if (V === 304 && I !== void 0)
    return (
      logForDebugging("[publishedCatalog] fetch: not modified"),
      { status: "not_modified", httpStatus: V }
    );
  if (V < 200 || V >= 300)
    return (
      logForDebugging(`[publishedCatalog] fetch: HTTP ${V}`),
      { status: "error", reason: "http_status", httpStatus: V }
    );
  let te = Bp(U.data);
  if (te.length > Yo)
    return { status: "error", reason: "too_large", httpStatus: V };
  let ne = void 0,
    me = !1,
    Me = await Lp(Zb(w.url), {
      responseType: "arraybuffer",
      timeout: Fp,
      maxContentLength: kr,
      maxBodyLength: kr,
      validateStatus: () => !0,
      beforeRedirect: O,
    });
  if (Me.status >= 200 && Me.status < 300) {
    let Se = Bp(Me.data);
    if (Se.length <= kr)
      ((me = !0), (ne = xt(Buffer.from(Se).toString("utf8"), !1)));
  } else logForDebugging(`[publishedCatalog] sidecar fetch: HTTP ${Me.status}`);
  return (
    logForDebugging(
      `[publishedCatalog] fetch ok: ${te.length} bytes${me ? ", sidecar present" : ", no sidecar"}`,
    ),
    {
      status: "ok",
      documentBytes: te,
      sidecar: ne,
      hasSidecar: me,
      etag: oC(U.headers),
      httpStatus: V,
    }
  );
}
async function Yb(w) {
  let I = Tp(w),
    O = getFsSurface(),
    U;
  try {
    U = await O.readFileBytes(I, Yo + 1);
  } catch (ne) {
    return (
      logForDebugging(`[publishedCatalog] file read failed${W(ne) ? " (no such file)" : ""}`),
      { status: "error", reason: "read_failed" }
    );
  }
  if (U.length > Yo) return { status: "error", reason: "too_large" };
  let V = void 0,
    te = !1;
  try {
    let ne = await O.readFileBytes(`${I}${Kl}`, kr + 1);
    if (ne.length <= kr) ((te = !0), (V = xt(ne.toString("utf8"), !1)));
  } catch (ne) {
    if (!W(ne)) logForDebugging("[publishedCatalog] sidecar read failed");
  }
  return (
    logForDebugging(
      `[publishedCatalog] file read ok: ${U.length} bytes${te ? ", sidecar present" : ", no sidecar"}`,
    ),
    {
      status: "ok",
      documentBytes: new Uint8Array(U),
      sidecar: V,
      hasSidecar: te,
      etag: void 0,
      httpStatus: void 0,
    }
  );
}
function Lp(w, I) {
  return isClaudeDownloadsHost(w) ? claudeDownloadsHttpClient.get(w, I) : externalHttp.get(w, I);
}
function Xb(w) {
  let I = isClaudeDownloadsHost(w),
    O = Np(w),
    U = w.toLowerCase().startsWith("https:");
  return (V) => {
    let te = toUrlString(V),
      ne = Jb(te),
      me = Qb(te),
      Me = O !== "" && Np(te) === O,
      Se = U ? me === "https:" : Me || me === "https:";
    if (!(ne !== "" && (I ? isClaudeDownloadsHost(ne) : !isAnthropicHost(ne)) && Se && (Me || !isLoopbackOrMetadataHost(ne))))
      throw Error(
        "[publishedCatalog] redirect refused: a hop left the host the request was pinned to",
      );
  };
}
function Jb(w) {
  try {
    return new URL(w).hostname.toLowerCase();
  } catch {
    return "";
  }
}
function Np(w) {
  try {
    let I = new URL(w).origin;
    return I === "null" ? "" : I;
  } catch {
    return "";
  }
}
function Qb(w) {
  try {
    return new URL(w).protocol.toLowerCase();
  } catch {
    return "";
  }
}
function Zb(w) {
  let I = new URL(w);
  return ((I.pathname += Kl), I.toString());
}
function Bp(w) {
  if (w instanceof Uint8Array) return w;
  if (w instanceof ArrayBuffer) return new Uint8Array(w);
  if (typeof w === "string") return new TextEncoder().encode(w);
  return new Uint8Array(0);
}
function eC(w) {
  return (
    typeof w === "object" &&
    w !== null &&
    "code" in w &&
    (w.code === "ERR_FR_MAX_BODY_LENGTH_EXCEEDED" ||
      w.code === "ERR_BAD_RESPONSE")
  );
}
function oC(w) {
  let I = w?.etag;
  return isValidEtag(I) ? I : void 0;
}
function Ys({ allowNetwork: w }) {
  let I = Gr();
  if (!zs())
    return Promise.resolve({
      mode: I,
      source: void 0,
      fetchStatus: "off",
      expired: !1,
      entry: void 0,
    });
  let O = Xi();
  if (!O.ok)
    return Promise.resolve({
      mode: I,
      source: void 0,
      fetchStatus: "invalid_url",
      expired: !1,
      entry: void 0,
    });
  let { source: U } = O,
    V = getProviderState().publishedCatalogRefreshes,
    te = V.get(U.cacheKey);
  if (te) return te;
  let ne = rC({ mode: I, source: U, allowNetwork: w }).finally(() => {
    V.delete(U.cacheKey);
  });
  return (V.set(U.cacheKey, ne), ne);
}
async function rC({ mode: w, source: I, allowNetwork: O }) {
  let U = { mode: w, source: I },
    V,
    te = (ne) => ne !== void 0 && Gl(ne.document);
  try {
    if (I.trust.kind === "untrusted")
      return (
        logForDebugging(`[publishedCatalog] ${I.kind} source skipped: ${I.trust.reason}`),
        {
          ...U,
          fetchStatus: "skipped",
          fetchReason: I.trust.reason,
          expired: !1,
          entry: void 0,
        }
      );
    if (((V = await Qi(I)), V && !ss(V)))
      return { ...U, fetchStatus: "cache_fresh", expired: !1, entry: V };
    if (V && te(V))
      logForDebugging(
        "[publishedCatalog] cached document is past its expires_at; refreshing",
      );
    if (!O && I.kind !== "file")
      return { ...U, fetchStatus: "cache_only", expired: te(V), entry: V };
    let ne = await $p(I, { etag: V?.etag });
    switch (ne.status) {
      case "not_modified": {
        let me = V ? yp(V) : void 0;
        if (me) await jl(I.cacheKey, me);
        return {
          ...U,
          fetchStatus: "not_modified",
          httpStatus: ne.httpStatus,
          expired: te(me),
          entry: me,
        };
      }
      case "error":
        return {
          ...U,
          fetchStatus: "error",
          fetchReason: ne.reason,
          httpStatus: ne.httpStatus,
          expired: te(V),
          entry: V,
        };
      case "ok": {
        let me = await sC({ source: I, cached: V, result: ne });
        if (!me.ok)
          return (
            logForDebugging(
              `[publishedCatalog] document rejected: ${me.reason}; keeping ${V ? "last good document" : "nothing"}`,
            ),
            {
              ...U,
              fetchStatus: "rejected",
              fetchReason: me.reason,
              httpStatus: ne.httpStatus,
              expired: te(V),
              entry: V,
            }
          );
        let Me = fp({
          document: me.document,
          documentBytes: ne.documentBytes,
          sidecar: ne.sidecar,
          etag: ne.etag,
          source: I.kind,
          rootId: me.rootId,
        });
        await jl(I.cacheKey, Me);
        let Se = te(Me);
        return (
          logForDebugging(
            `[publishedCatalog] accepted ${I.kind} document v${me.document.version} (verified by ${me.rootId})${Se ? ", past its expires_at" : ""}`,
          ),
          {
            ...U,
            fetchStatus: "ok",
            httpStatus: ne.httpStatus,
            expired: Se,
            entry: Me,
          }
        );
      }
    }
  } catch (ne) {
    return (
      logError(ne),
      {
        ...U,
        fetchStatus: "error",
        fetchReason: "exception",
        expired: te(V),
        entry: V,
      }
    );
  }
}
async function sC({ source: w, cached: I, result: O }) {
  let U = w.trust;
  if (U.kind === "untrusted") return { ok: !1, reason: "unsigned" };
  if (!O.hasSidecar) return { ok: !1, reason: "unsigned" };
  let V = await Ji({
    documentBytes: O.documentBytes,
    sidecar: O.sidecar,
    roots: U.roots,
  });
  if (!V.ok) return { ok: !1, reason: V.reason };
  let te = xt(Buffer.from(O.documentBytes).toString("utf8"), !1),
    ne = zi(te);
  if (ne === void 0) return { ok: !1, reason: "parse_failed" };
  if (ne !== Hs) return { ok: !1, reason: "unsupported_schema" };
  let me = Er().safeParse(te);
  if (!me.success) return { ok: !1, reason: "parse_failed" };
  let Me = me.data,
    Se = await Xl(Me, w, I, V.rootId);
  if (Se !== void 0) return (await Hl(Me), { ok: !1, reason: Se });
  return (
    await recordPublishedCatalogFloorVersion(w.cacheKey, Me),
    { ok: !0, document: Me, rootId: V.rootId }
  );
}
var jp = 2000;
async function Hp({ allowNetwork: w }) {
  try {
    if (getProviderState().servedCatalogActive !== void 0) return;
    let I = Date.now() + (w ? jp : 0),
      O = lC() && Gr() === "primary" && (await aC(I)),
      U = O ? { remote_settings_unconfirmed: !0 } : void 0,
      V = ta();
    if (V !== null) {
      if (O && V === "essential_traffic")
        (logFeatureSad("model_catalog_published", "essential_traffic", U),
          logForDebugging(
            "[publishedCatalog] primary: nonessential traffic is disabled and the server-managed catalog source is not yet confirmed by the server; published path off this session",
          ));
      return;
    }
    let te = Jl(),
      ne = Xi();
    if (!ne.ok) {
      if (te === "primary")
        Kr(ne.reason, "configured catalog URL is unusable", U);
      return;
    }
    let { source: me } = ne;
    if (me.trust.kind === "untrusted") {
      if (te === "primary")
        Kr(
          me.trust.reason,
          `custom source is untrusted (${me.trust.reason})`,
          U,
        );
      return;
    }
    if (te !== "primary") {
      await Vi(me.cacheKey);
      return;
    }
    let Me = ur(),
      Se = await Qi(me),
      xe = "cache",
      De,
      Oe = w || me.kind === "file",
      Ae = () => (w ? Math.max(0, I - Date.now()) : jp);
    if (Se === void 0 && Oe) {
      xe = "fetch";
      let Ze = await withTimeout(
        Ys({ allowNetwork: w }),
        Ae(),
        "published catalog first fetch",
      ).catch(() => {
        return;
      });
      ((Se = Ze?.entry),
        (De = Ze === void 0 ? "timeout" : Ze.fetchStatus),
        (xe = `fetch:${De}`));
    } else if (Se !== void 0 && Oe && ss(Se)) {
      let Ze = Date.now(),
        Nt = await withTimeout(
          Ys({ allowNetwork: w }),
          Ae(),
          "published catalog stale refresh",
        ).catch(() => {
          return;
        });
      ((De = Nt === void 0 ? "timeout" : Nt.fetchStatus),
        (Se = Nt?.entry ?? Se),
        (xe = `stale cache: waited ${Date.now() - Ze}ms for refresh \u2192 ${ss(Se) ? "kept stale" : "refreshed"} (fetch:${De})`));
    }
    if (getProviderState().servedCatalogActive !== void 0) return;
    let { catalog: $e, kind: We } = iC(Se, Me);
    if ($e === null) {
      if (Se !== void 0)
        Kr("surface_not_served", "document serves this surface no rows", U);
      else if (Oe)
        Kr(
          `fetch_${De ?? "none"}`,
          `nothing cached and no seed, ${xe} produced no rows`,
          U,
        );
      else
        Kr(
          "headless_no_cache",
          "nothing cached, headless launch does not fetch, no seed",
          U,
        );
      return;
    }
    if (getOfferedModelRows($e).length === 0) {
      Kr(
        getSelectableCatalogModels($e).length === 0 ? "no_selectable_rows" : "no_offered_rows",
        `published rows hold no model this build offers (${getCatalogModels($e).length} rows via ${We})`,
        U,
      );
      return;
    }
    let Ye = Se !== void 0 && ss(Se);
    if ((setPublishedCatalog($e, Se?.fetchedAt, Ye), We === "seed"))
      logFeatureSad("model_catalog_published", "seed", U);
    else if (O) logFeatureSad("model_catalog_published", "remote_settings_unconfirmed");
    else logFeatureOk("model_catalog_published");
    logForDebugging(
      `[publishedCatalog] primary: using ${We} rows (${getCatalogModels($e).length} rows via ${xe}${Ye ? ", stale" : ""})`,
    );
  } catch (I) {
    if ((logError(I), getProviderState().servedCatalogActive === void 0 && Jl() === "primary"))
      Kr("exception", "exception");
  }
}
function iC(w, I) {
  if (w !== void 0) return { catalog: rs(w.document, I), kind: w.source };
  return { catalog: Cp(I), kind: "seed" };
}
async function aC(w) {
  if (uC()) {
    let I = w - Date.now();
    if (I > 0)
      (logForDebugging(
        `[publishedCatalog] waiting up to ${I}ms for server-managed settings to be confirmed`,
      ),
        await mC(I));
  }
  if (!is()) return !1;
  return (
    logForDebugging(
      "[publishedCatalog] server-managed settings name managed model-catalog source settings the server has not confirmed; deciding this session without them",
    ),
    !0
  );
}
function lC() {
  let w = ta();
  return w === null || (w === "essential_traffic" && (Ep() || getRemoteManagedSettingsSyncFromCache() === null));
}
function uC() {
  if (!isRemoteSettingsEligible() || isRemoteManagedSettingsVerified() || getLastLoadStatus() !== void 0) return !1;
  return is() || getRemoteManagedSettingsSyncFromCache() === null;
}
async function mC(w) {
  let I = () => {},
    O = new Promise((U) => {
      if (
        ((I = onLastLoadStatusChanged((V) => {
          if (V !== void 0) U();
        })),
        getLastLoadStatus() !== void 0)
      )
        U();
    });
  try {
    await withDeadline(O, w);
  } finally {
    I();
  }
}
function Kr(w, I, O) {
  (setPublishedCatalog(null),
    logFeatureSad("model_catalog_published", w, O),
    logForDebugging(
      `[publishedCatalog] primary: published rows unavailable (${I}); using compiled behavior`,
    ));
}
function oa() {
  let w = Wp(
      getEnabledModelOptions()
        .flatMap((U) => (U.value === null ? [] : [U.value]))
        .map((U) => parseUserSpecifiedModel(U)),
    ),
    I = getMainLoopModel(),
    O = getCanonicalName(I);
  return {
    pickerIds: w,
    defaultModel: getDefaultMainLoopModel(),
    aliasTargets: { opus: getDefaultOpusModel(), sonnet: getDefaultSonnetModel(), haiku: getDefaultHaikuModel() },
    mainLoopModel: I,
    contextWindow: getEffectiveContextWindow(I, Up()),
    maxOutputTokens: getMaxOutputTokens(I).upperLimit,
    capabilities: MODEL_CAPABILITIES.filter((U) => modelHasCapability(O, U, I) === !0),
    registryAliasTargets: pC(),
  };
}
function pC() {
  let w = new Map();
  for (let I of getRegistryAliasEntries()) {
    if (typeof I.alias !== "string") continue;
    let O = normalizeModelId(I.alias);
    if (O !== "" && !w.has(O)) w.set(O, normalizeModelId(I.model));
  }
  return w;
}
function sa(w, I) {
  let O = Wp(getOfferedModelRowIds(w)),
    U = I.pickerIds,
    V = getOfferedModelAliasMap(w),
    te = getOfferedModelRows(w);
  return {
    picker: {
      match: U.length === O.length && U.every((ne, me) => ne === O[me]),
      old: U,
      new: O,
    },
    defaultModel: na(I.defaultModel, getCatalogDefaultModel(w)),
    aliases: {
      opus: na(I.aliasTargets.opus, V.opus),
      sonnet: na(I.aliasTargets.sonnet, V.sonnet),
      haiku: na(I.aliasTargets.haiku, V.haiku),
    },
    mainLoopModel: I.mainLoopModel,
    contextWindow: Gp(I.contextWindow, getModelContextWindow(w, I.mainLoopModel)),
    maxOutputTokens: Gp(I.maxOutputTokens, getModelMaxOutputTokens(w, I.mainLoopModel)),
    mainLoopKnowledge: resolveModelBehavesAs(w, I.mainLoopModel),
    offeredCount: te.length,
    mappedCount: countMatching(te, (ne) => resolveModelBehavesAs(w, ne.id).status === "mapped"),
    notOfferedCount: getNotOfferedModelRows(w).length,
    capabilities: fC(findCatalogModel(w, I.mainLoopModel), I.capabilities),
    familyDefaults: gC(w, I.registryAliasTargets),
  };
}
function fC(w, I) {
  let O = w?.runtime?.capabilities;
  if (O === void 0) return { match: void 0, servedCount: 0 };
  let U = MODEL_CAPABILITIES,
    V = dedupe(
      O.map((ne) => ne.trim().toLowerCase()).filter((ne) => U.includes(ne)),
    ),
    te = new Set(I);
  return { match: V.every((ne) => te.has(ne)), servedCount: V.length };
}
function gC(w, I) {
  return { match: void 0, servedCount: 0 };
}
function Wp(w) {
  let I = new Set(),
    O = [];
  for (let U of w) {
    let V = normalizeModelId(U);
    if (!I.has(V)) (I.add(V), O.push(V));
  }
  return O;
}
function na(w, I) {
  let O = normalizeModelId(w),
    U = I === void 0 ? void 0 : normalizeModelId(I);
  return { match: U === void 0 ? void 0 : O === U, old: O, new: U };
}
function Gp(w, I) {
  return { match: I === void 0 ? void 0 : w === I, old: w, new: I };
}
import { join as yC } from "path";
var Xp = 2,
  Jp = 3600000,
  Qp = 0.1,
  SC = createLazyValue(() =>
    c({
      version: k(Xp),
      fetchedAt: T(),
      staleAt: T(),
      etag: s().refine(isValidEtag).optional(),
      catalog: c({
        surface: X(MODEL_SELECTOR_SURFACES),
        config: ModelSelectorConfigStoredSchema(),
        state: ModelSelectorStateSchema().optional(),
      }).nullable(),
    }).transform((I) => {
      if (I.etag === void 0 || I.catalog === null || !hasDroppedCatalogRows(I.catalog)) return I;
      let { etag: O, ...U } = I;
      return U;
    }),
  );
function la(w, I) {
  return (
    w !== null &&
    I !== null &&
    w.orgUuid === I.orgUuid &&
    w.accountScope === I.accountScope
  );
}
function Zp(w, I) {
  return yC(getModelCatalogCacheDir(), `${w.orgUuid}-${w.accountScope}-${I}.json`);
}
function ia() {
  return getProviderState().servedCatalogByKey;
}
function da(w, I) {
  return `${w.orgUuid}:${w.accountScope}:${I}`;
}
var qp = MAX_SERVED_CATALOG_BYTES + 4096;
async function _C(w) {
  let I;
  try {
    I = await getFileStorage().readRange(w, 0, qp + 1);
  } catch (U) {
    if (!W(U)) logForDebugging(`[servedCatalog] cache read failed: ${A(U) ?? "unknown"}`);
    return;
  }
  if (I.length > qp)
    return (logForDebugging("[servedCatalog] cache file oversized"), "invalid");
  let O = SC().safeParse(xt(I.toString("utf8"), !1));
  if (!O.success) return (logForDebugging("[servedCatalog] cache file invalid"), "invalid");
  return O.data;
}
async function ca(w, I) {
  let O = da(w, I),
    U = ia().get(O);
  if (U !== void 0) return U ?? void 0;
  let V = Zp(w, I),
    te = await _C(V);
  if (te === void 0) {
    ia().set(O, null);
    return;
  }
  if (te === "invalid" || (te.catalog !== null && te.catalog.surface !== I)) {
    (logForDebugging(
      `[servedCatalog] cache file ${te === "invalid" ? "invalid" : "holds another surface"}, discarding`,
    ),
      ia().set(O, null));
    try {
      await getFileStorage().delete(V);
    } catch {}
    return;
  }
  return (await ef(O, te), te);
}
async function Zl(w, I, O) {
  await ef(da(w, I), O);
  try {
    let U = getFileStorage();
    (await U.mkdir(getModelCatalogCacheDir()), await U.atomicWrite(Zp(w, I), jsonStringify(O), 384));
  } catch (U) {
    logForDebugging(`[servedCatalog] cache write failed: ${A(U) ?? "unknown"}`);
  }
}
async function ef(w, I) {
  if ((ia().set(w, I), I.catalog !== null))
    (applyCatalogMasking(I.catalog), await persistMaskedModelIds(getDroppedConfidentialModelIds(I.catalog)));
}
function tf({
  catalog: w,
  etag: I,
  now: O = Date.now(),
  random: U = Math.random(),
}) {
  return {
    version: Xp,
    fetchedAt: O,
    staleAt: rf(O, U),
    ...(I !== void 0 && (w === null || !hasDroppedCatalogRows(w)) && { etag: I }),
    catalog: w,
  };
}
function nf(w, I = Date.now(), O = Math.random()) {
  return { ...w, fetchedAt: I, staleAt: rf(I, O) };
}
function rf(w, I) {
  let O = 1 + Qp * (2 * I - 1);
  return w + Math.round(Jp * O);
}
function ds(w, I = Date.now()) {
  let O = w.fetchedAt + Jp * (1 + Qp);
  return I < w.fetchedAt || I >= w.staleAt || w.staleAt > O;
}
var ed = 1500;
async function sf(w, { etag: I } = {}) {
  try {
    let O = await httpClient.get(`/api/organizations/:orgUUID/model_selector/${w}`, {
      auth: "teleport-org",
      isBackground: !0,
      timeout: ed,
      maxContentLength: MAX_SERVED_CATALOG_BYTES,
      validateStatus: () => !0,
      ...(I !== void 0 && { headers: { "If-None-Match": I } }),
    });
    if (!O.ok)
      return (
        logForDebugging(
          `[servedCatalog] fetch skipped: ${O.reason}${O.reason === "no-auth" ? ` (${O.detail})` : ""}`,
        ),
        { status: "skipped", reason: O.reason }
      );
    let U = O.status;
    if (U === 304 && I !== void 0)
      return (
        logForDebugging("[servedCatalog] fetch: not modified"),
        { status: "not_modified", httpStatus: U }
      );
    if (U < 200 || U >= 300)
      return (
        logForDebugging(`[servedCatalog] fetch: HTTP ${U}`),
        { status: "error", reason: "http_status", httpStatus: U }
      );
    let V = ModelSelectorSurfacesSchema().safeParse(O.data);
    if (!V.success)
      return (
        logForDebugging("[servedCatalog] fetch: response failed validation"),
        { status: "error", reason: "parse_failed", httpStatus: U }
      );
    let te = bC(O.response?.headers),
      ne = getModelSelectorSurface(V.data, w);
    if (ne === null)
      return (
        logForDebugging("[servedCatalog] fetch ok: surface not served"),
        { status: "empty", etag: te, httpStatus: U }
      );
    if (hasDroppedCatalogRows(ne))
      return (
        logForDebugging(
          `[servedCatalog] fetch ok: ${ne.config.models?.length ?? 0} rows kept after row validation dropped others; etag withheld, full refetch next refresh`,
        ),
        { status: "ok", catalog: ne, etag: void 0, httpStatus: U }
      );
    return (
      logForDebugging(`[servedCatalog] fetch ok: ${ne.config.models?.length ?? 0} rows`),
      { status: "ok", catalog: ne, etag: te, httpStatus: U }
    );
  } catch (O) {
    let { kind: U, status: V } = Ps(O);
    switch (
      (logForDebugging(`[servedCatalog] fetch failed: ${U}${V !== void 0 ? ` ${V}` : ""}`), U)
    ) {
      case "timeout":
        return { status: "error", reason: "timeout" };
      case "network":
        return { status: "error", reason: "network" };
      case "auth":
      case "http":
        return V === void 0
          ? { status: "error", reason: "network" }
          : { status: "error", reason: "http_status", httpStatus: V };
      case "other":
        return { status: "error", reason: "exception" };
    }
  }
}
function bC(w) {
  let I = w?.etag;
  return isValidEtag(I) ? I : void 0;
}
function Xs({ allowNetwork: w }) {
  let I = jr(),
    O = ur(),
    U = ls();
  if (I === "off" || U === null)
    return Promise.resolve({
      mode: "off",
      surface: O,
      fetchStatus: "off",
      entry: void 0,
      prior: void 0,
    });
  let V = getProviderState().servedCatalogRefreshes,
    te = da(U, O),
    ne = V.get(te);
  if (ne) return ne;
  let me = CC({ mode: I, surface: O, scope: U, allowNetwork: w }).finally(
    () => {
      V.delete(te);
    },
  );
  return (V.set(te, me), me);
}
async function CC({ mode: w, surface: I, scope: O, allowNetwork: U }) {
  let V,
    te = () => ({ mode: w, surface: I, prior: V });
  try {
    if (((V = await ca(O, I)), V && !ds(V)))
      return { ...te(), fetchStatus: "cache_fresh", entry: V };
    if (!U) return { ...te(), fetchStatus: "cache_only", entry: V };
    let ne = await sf(I, { etag: V?.etag });
    if (!la(ls(), O))
      return (
        logForDebugging(
          "[servedCatalog] account or org changed during fetch; answer dropped",
        ),
        {
          ...te(),
          fetchStatus: "error",
          fetchReason: "scope_changed",
          entry: void 0,
        }
      );
    switch (ne.status) {
      case "ok":
      case "empty": {
        let me = tf({
          catalog: ne.status === "ok" ? ne.catalog : null,
          etag: ne.etag,
        });
        if ((await Zl(O, I, me), ne.status === "ok")) registerCatalogPublicIds(ne.catalog);
        return {
          ...te(),
          fetchStatus: ne.status,
          httpStatus: ne.httpStatus,
          entry: me,
        };
      }
      case "not_modified": {
        let me = V ? nf(V) : void 0;
        if (me) await Zl(O, I, me);
        return {
          ...te(),
          fetchStatus: "not_modified",
          httpStatus: ne.httpStatus,
          entry: me,
        };
      }
      case "skipped":
        return {
          ...te(),
          fetchStatus: "skipped",
          fetchReason: ne.reason,
          entry: V,
        };
      case "error":
        return {
          ...te(),
          fetchStatus: "error",
          fetchReason: ne.reason,
          httpStatus: ne.httpStatus,
          entry: V,
        };
    }
  } catch (ne) {
    return (
      logError(ne),
      { ...te(), fetchStatus: "error", fetchReason: "exception", entry: V }
    );
  }
}
function uf({ allowNetwork: w }) {
  if (jr() === "off") {
    logForDebugging(`[servedCatalog] off (${as() ?? "flag"})`);
    return;
  }
  let I = getProviderState();
  if (I.servedCatalogShadowStarted) return;
  ((I.servedCatalogShadowStarted = !0), kC(w).catch((O) => logError(O)));
}
async function kC(w) {
  let I = await Xs({ allowNetwork: w });
  if (I.mode === "off") return;
  let O = I.entry?.catalog ?? null;
  if (!w && O === null) return;
  let U = null,
    V = !1;
  if (O !== null)
    try {
      U = sa(O, withServedCatalogSuppressed(oa));
    } catch (te) {
      ((V = !0), logError(te));
    }
  (logEvent(
    "tengu_model_catalog_compare",
    AC({
      outcome: I,
      catalog: O,
      comparison: U,
      compareFailed: V,
      catalogSource: getServedCatalogSource(),
    }),
  ),
    logForDebugging(
      `[servedCatalog] shadow compare logged (fetch=${I.fetchStatus}, rows=${O === null ? 0 : getCatalogModels(O).length}, source=${getServedCatalogSource() ?? "compiled"})`,
    ),
    wC(U, mf({ catalog: O, prior: I.prior, sessionMaskedIds: getSessionMaskedModelIds() })));
}
function wC(w, I) {
  let O = getActiveServedCatalog();
  if (w === null || O === null) return;
  let U = new Set(getSelectableModelIds(O).map((te) => firstPartyNameToCanonical(normalizeModelId(te)))),
    V = w.picker.old
      .filter((te) => !U.has(firstPartyNameToCanonical(te)))
      .map((te) => (I(te) ? CONFIDENTIAL_MODEL_ID : te));
  logForDebugging(
    V.length === 0
      ? "[servedCatalog] primary: served list replaces the compiled picker; every compiled row is served"
      : `[servedCatalog] primary: served list replaces the compiled picker; compiled rows not served (dropped): ${V.join(", ")}`,
  );
}
var PC = [
  "global_default",
  "org_configuration",
  "custom_role_configuration",
  "user_setting",
  "most_capable_fallback",
];
function RC({ catalog: w, prior: I, sessionMaskedIds: O }) {
  let U = I?.catalog ?? null;
  return new Set([
    ...(w === null ? [] : getMaskedModelIds(w)),
    ...(U === null || U === w ? [] : getMaskedModelIds(U)),
    ...O,
  ]);
}
function mf(w) {
  return rd([w.catalog, w.prior?.catalog ?? null], () => RC(w));
}
function rd(w, I) {
  if (w.some((U) => U !== null && hasDroppedUnidentifiedRows(U))) return () => !0;
  let O = I();
  return (U) => IC(U, O);
}
function AC({
  outcome: w,
  catalog: I,
  comparison: O,
  compareFailed: U,
  catalogSource: V,
  sessionMaskedIds: te = getSessionMaskedModelIds(),
  now: ne = Date.now(),
}) {
  let me = mf({ catalog: I, prior: w.prior, sessionMaskedIds: te }),
    Me = w.entry,
    Se = I?.state?.selection_source;
  return {
    mode: fromEnum(w.mode),
    surface: fromEnum(w.surface),
    catalog_source: fromEnumOpt(V),
    fetch_status: fromEnum(w.fetchStatus),
    fetch_reason: fromEnumOpt(w.fetchReason),
    http_status: w.httpStatus,
    cache_age_s:
      Me === void 0
        ? void 0
        : Math.max(0, Math.round((ne - Me.fetchedAt) / 1000)),
    served: I !== null,
    served_row_count: I === null ? 0 : getCatalogModels(I).length,
    served_selectable_count: I === null ? 0 : getSelectableCatalogModels(I).length,
    served_confidential_count: I === null ? 0 : getConfidentialModelIds(I).size,
    served_has_default: I?.state?.model !== void 0,
    served_has_runtime: I !== null && catalogHasRuntimeInfo(I),
    selection_source:
      Se === void 0 ? void 0 : (fromEnumOpt(PC.find((xe) => xe === Se)) ?? S("other")),
    compare_failed: U,
    ...sd(O, me),
  };
}
function sd(w, I) {
  if (w === null) return {};
  let O = w.mainLoopKnowledge;
  return {
    main_loop_model: od(w.mainLoopModel, I),
    behaves_as_applied: O.status === "mapped",
    behaves_as_source: O.status === "mapped" ? fromEnum(O.source) : S("none"),
    unknown_unmapped: O.status === "unknown",
    served_offered_count: w.offeredCount,
    served_mapped_count: w.mappedCount,
    served_not_offered_count: w.notOfferedCount,
    capabilities_match: w.capabilities.match,
    served_capability_count: w.capabilities.servedCount,
    family_defaults_match: w.familyDefaults.match,
    served_family_default_count: w.familyDefaults.servedCount,
    picker_match: w.picker.match,
    default_match: w.defaultModel.match,
    opus_match: w.aliases.opus.match,
    sonnet_match: w.aliases.sonnet.match,
    haiku_match: w.aliases.haiku.match,
    context_window_match: w.contextWindow.match,
    max_output_match: w.maxOutputTokens.match,
    ...(!w.picker.match && {
      picker_old: af(w.picker.old, I),
      picker_new: af(w.picker.new, I),
      picker_old_count: w.picker.old.length,
      picker_new_count: w.picker.new.length,
    }),
    ...ma("default", w.defaultModel, I),
    ...ma("opus", w.aliases.opus, I),
    ...ma("sonnet", w.aliases.sonnet, I),
    ...ma("haiku", w.aliases.haiku, I),
    ...cf("context_window", w.contextWindow),
    ...cf("max_output", w.maxOutputTokens),
  };
}
var TC = 50;
function od(w, I) {
  return I(w) ? S(CONFIDENTIAL_MODEL_ID) : (getModelForAnalytics(w) ?? S("nonconforming"));
}
function af(w, I) {
  return getModelListForAnalytics(
    w.map((O) => (I(O) ? CONFIDENTIAL_MODEL_ID : O)),
    TC,
  );
}
function IC(w, I) {
  return isModelIdMasked(w, I) || !isCompiledModelId(w);
}
function ma(w, I, O) {
  if (I.match !== !1) return {};
  return {
    [`${w}_old`]: od(I.old, O),
    [`${w}_new`]: I.new === void 0 ? void 0 : od(I.new, O),
  };
}
function cf(w, I) {
  if (I.match !== !1) return {};
  return { [`${w}_old`]: I.old, [`${w}_new`]: I.new };
}
function pf({ allowNetwork: w }) {
  if (!zs()) return;
  let I = getProviderState();
  if (I.servedCatalogShadowStarted) return;
  ((I.servedCatalogShadowStarted = !0), xC(w).catch((O) => logError(O)));
}
async function xC(w) {
  let I = await Ys({ allowNetwork: w });
  if (I.fetchStatus === "off") return;
  let O = ur(),
    U = I.entry === void 0 ? null : rs(I.entry.document, O);
  if (!w && U === null) return;
  let V = null,
    te = !1;
  if (U !== null)
    try {
      V = sa(U, withServedCatalogSuppressed(oa));
    } catch (ne) {
      ((te = !0), logError(ne));
    }
  (logEvent(
    "tengu_model_catalog_compare",
    DC({
      outcome: I,
      catalog: U,
      comparison: V,
      compareFailed: te,
      catalogSource: getServedCatalogSource(),
      activeCatalog: getActiveServedCatalog(),
    }),
  ),
    logForDebugging(
      `[publishedCatalog] shadow compare logged (fetch=${I.fetchStatus}, rows=${U === null ? 0 : getCatalogModels(U).length}, source=${getServedCatalogSource() ?? "compiled"})`,
    ));
}
function DC({
  outcome: w,
  catalog: I,
  comparison: O,
  compareFailed: U,
  catalogSource: V,
  activeCatalog: te = null,
  sessionMaskedIds: ne = getSessionMaskedModelIds(),
  now: me = Date.now(),
}) {
  let Me = rd(
      [I, te],
      () =>
        new Set([
          ...(I === null ? [] : getMaskedModelIds(I)),
          ...(te === null || te === I ? [] : getMaskedModelIds(te)),
          ...ne,
        ]),
    ),
    Se = w.entry,
    xe = Se?.document,
    De = Wi(Se?.rootId);
  return {
    mode: fromEnum(w.mode),
    surface: fromEnum(ur()),
    catalog_source: fromEnumOpt(V),
    published_fetch_status: fromEnum(w.fetchStatus),
    published_fetch_reason: fromEnumOpt(w.fetchReason),
    published_http_status: w.httpStatus,
    published_source: NC(w, I),
    published_version: xe?.version,
    published_trust: fromEnumOpt(De),
    published_expired: w.expired,
    published_age_s:
      Se === void 0
        ? void 0
        : Math.max(0, Math.round((me - Se.fetchedAt) / 1000)),
    served: I !== null,
    served_row_count: I === null ? 0 : getCatalogModels(I).length,
    served_selectable_count: I === null ? 0 : getSelectableCatalogModels(I).length,
    served_has_default: I?.state?.model !== void 0,
    served_has_runtime: I !== null && catalogHasRuntimeInfo(I),
    compare_failed: U,
    ...LC(De, O, Me),
  };
}
function LC(w, I, O) {
  let U = sd(I, O);
  if (w !== "managed_key") return U;
  return pickBy(U, (V) => typeof V === "boolean" || typeof V === "number");
}
function NC(w, I) {
  if (I === null) return fromEnum("none");
  let O = w.entry?.source;
  return fromEnum(O ?? "seed");
}
var BC = ed + 250,
  jC = 2000;
async function yf({ allowNetwork: w }) {
  if (getProviderState().servedCatalogActive !== void 0) return;
  try {
    if (jr() !== "primary") return;
    let I = ls();
    if (I === null) {
      us("no_scope", "no cache scope");
      return;
    }
    let O = ur(),
      U = await ca(I, O),
      V = "cache",
      te;
    if (U === void 0 && w) {
      V = "fetch";
      let Me = await withTimeout(
        Xs({ allowNetwork: !0 }),
        BC,
        "served catalog first fetch",
      ).catch(() => {
        return;
      });
      ((U = Me?.entry),
        (te = Me === void 0 ? "timeout" : Me.fetchStatus),
        (V = `fetch:${te}`));
    } else if (U !== void 0 && w && ds(U)) {
      let Me = Date.now(),
        Se = await withTimeout(
          Xs({ allowNetwork: !0 }),
          jC,
          "served catalog stale refresh",
        ).catch(() => {
          return;
        });
      ((te = Se === void 0 ? "timeout" : Se.fetchStatus),
        (U = Se?.entry ?? U),
        (V = `stale cache: waited ${Date.now() - Me}ms for refresh \u2192 ${ds(U) ? "kept stale" : "refreshed"} (fetch:${te})`));
    }
    if (getProviderState().servedCatalogActive !== void 0 || !la(ls(), I)) return;
    let ne = U?.catalog ?? null;
    if (ne === null) {
      if (U !== void 0)
        us("surface_not_served", "server serves this surface no rows");
      else if (w)
        us(`fetch_${te ?? "none"}`, `nothing cached, ${V} produced no rows`);
      else
        us(
          "headless_no_cache",
          "nothing cached, headless launch does not fetch",
        );
      return;
    }
    if (getOfferedModelRows(ne).length === 0) {
      us(
        getSelectableCatalogModels(ne).length === 0 ? "no_selectable_rows" : "no_offered_rows",
        `served rows hold no model this build offers (${getCatalogModels(ne).length} rows via ${V})`,
      );
      return;
    }
    let me = U !== void 0 && ds(U);
    (setServedCatalog(ne, U?.fetchedAt, me),
      logFeatureOk("model_catalog_primary"),
      logForDebugging(
        `[servedCatalog] primary: using served rows (${getCatalogModels(ne).length} rows via ${V}, fetched ${Math.max(0, Math.round((Date.now() - (U?.fetchedAt ?? Date.now())) / 1000))}s ago${me ? ", stale" : ""}); the served list replaces the compiled picker for this session`,
      ));
  } catch (I) {
    if ((logError(I), getProviderState().servedCatalogActive === void 0 && jr() === "primary"))
      us("exception", "exception");
  }
}
function us(w, I) {
  (setServedCatalog(null),
    logFeatureSad("model_catalog_primary", w),
    logForDebugging(
      `[servedCatalog] primary: served rows unavailable (${I}); using compiled behavior`,
    ));
}
var HC = [
    "name",
    "description",
    "model",
    "allowed-tools",
    "disallowed-tools",
    "disallowedTools",
    "argument-hint",
    "arguments",
    "disable-model-invocation",
    "user-invocable",
    "effort",
    "shell",
    "version",
    "when_to_use",
    "paths",
    "hooks",
    "context",
    "agent",
    "background",
    "fallback",
    "created_by",
    "improved_by",
    "mcpServers",
    "lspServers",
    "agents",
    "outputStyles",
    "themes",
    "workflows",
    "channels",
    "monitors",
    "settings",
    "userConfig",
    "defaultEnabled",
    "experimental",
    "dependencies",
    "metadata",
    "displayName",
    "author",
    "homepage",
    "repository",
    "license",
    "keywords",
  ],
  hf = (w) =>
    w
      .replaceAll("-", "_")
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .toLowerCase();
function GC(w) {
  let I = w && new Set(w.map(hf));
  return Object.fromEntries(
    HC.map((O) => {
      let U = hf(O);
      return [`has_${U}`, I?.has(U) ?? !1];
    }),
  );
}
async function Sf(w, I, O, U) {
  try {
    let V = await getCommands(w, U),
      te = getConditionalSkills(),
      ne = new Set(te),
      me = [...V, ...te],
      Me = getSkillListingCharBudget(I, O),
      Se = getPolicyPluginNames();
    for (let xe of me) {
      if (xe.type !== "prompt") continue;
      if (xe.source === "builtin") continue;
      logEvent("tengu_skill_loaded", {
        _PROTO_skill_name: xe.name,
        ...!1,
        ...(isMarketplacePluginCommand(xe) && getSkillNameHash(xe.name)),
        ...buildSkillSourceFields(xe.source, xe.loadedFrom, xe.kind, xe.createdBy),
        skill_budget: Me,
        skill_content_chars: xe.contentLength,
        model_invocable: isSkillToolCommand(xe),
        is_conditional: ne.has(xe),
        ...GC(xe.declaredFields),
        ...getServerAttributionFields(xe, Se),
      });
    }
    return groupCommandsByRepository(V);
  } catch (V) {
    return (logError(dt(ge(V), "skill load telemetry failed")), null);
  }
}
import { resolve as KC } from "path";
function _f(w, I) {
  if (shouldDisableAllHooksIncludingManaged()) return;
  if (isCustomizationDisabled("hooks")) return;
  let O = isToolDetailsLoggingEnabled(),
    U = shouldAllowManagedHooksOnly(),
    V = new Set();
  for (let ne of SETTINGS_SOURCE_ORDER) {
    if (U && ne !== "policySettings") continue;
    let me = getSettingsFilePathForSource(ne);
    if (me) {
      let Se = KC(me);
      if (V.has(Se)) continue;
      V.add(Se);
    }
    let Me = getSettingsForSource(ne)?.hooks;
    if (!Me) continue;
    for (let [Se, xe] of Object.entries(Me))
      for (let De of xe)
        for (let Oe of De.hooks)
          emitOtelEvent("hook_registered", {
            hook_event: Se,
            hook_type: Oe.type,
            hook_source: ne,
            safe_mode: String(isSafeMode()),
            ...(O && De.matcher && { hook_matcher: De.matcher }),
          });
  }
  let te = U && !isSafeMode() ? getPolicyEnabledPluginIds() : null;
  for (let ne of w) {
    if (!ne.hooksConfig) continue;
    if (U && !te?.has(ne.source)) continue;
    let { marketplace: me } = parsePluginIdIgnoringReservedMarketplace(ne.repository),
      Me = isOfficialPluginScope(getPluginScope(ne.name, me, I)) || O;
    for (let [Se, xe] of Object.entries(ne.hooksConfig))
      for (let De of xe)
        for (let Oe of De.hooks)
          emitOtelEvent("hook_registered", {
            hook_event: Se,
            hook_type: Oe.type,
            hook_source: "pluginHook",
            safe_mode: String(isSafeMode()),
            "plugin.name": Me ? ne.name : THIRD_PARTY_PLUGIN_LABEL,
            plugin_id_hash: getPluginIdHash(ne.name, me),
            ...(O && De.matcher && { hook_matcher: De.matcher }),
          });
  }
}
function bf(w) {
  let I = getManagedSettingsKeysForLogging(w);
  return { keyCount: I.length, keys: fromSanitizer_SANITIZER_OUTPUT_ONLY(I.join(",")) };
}
function Cf(w, I) {
  let O = Qu(w, I);
  return { flag_count: O.length, flags: fromSanitizer_SANITIZER_OUTPUT_ONLY(O.join(",")) };
}
function WC(w, I, O) {
  try {
    let { prefetchAllMcpResources: U } = import.meta
      .require("../MCP客户端/mcpClientModule.4cyej0np.js")
      .mcpClientModule();
    return U(w, I, O);
  } catch (U) {
    return (logError(U), Promise.resolve({ clients: [], tools: [], commands: [] }));
  }
}
var getTeammateContextModule = () => import.meta.require("../Teammates团队/teammate-context.js"),
  zC = () => import.meta.require("../Teammates团队/chunk-5nnwwahg.js"),
  VC = () => import.meta.require("../Teammates团队/chunk-88ybhavr.js"),
  systemPromptModule = import.meta.require("../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js"),
  wf = null;
function qC() {
  try {
    let w = getSettingsForSource("policySettings");
    if (w) {
      let I = getPolicyEnvCompositionForLogging();
      logEvent("tengu_managed_settings_loaded", {
        ...bf(w),
        ...(I && {
          envUnionOptedOut: I.unionOptedOut,
          envUnionChanged: I.unionChangedEnv,
          remoteTierPresent: I.remoteTierPresent,
          mdmTierPresent: I.mdmTierPresent,
          fileTierPresent: I.fileTierPresent,
          adminTierCount: I.adminTierCount,
          tiersWithEnv: I.tiersWithEnv,
        }),
      });
    }
  } catch {}
}
async function YC({
  host: w,
  storageV5: I,
  credentials: O,
  onAntSandboxDetection: U,
  hasInitialPrompt: V,
  hasStdin: te,
  verbose: ne,
  debug: me,
  print: Me,
  outputFormat: Se,
  inputFormat: xe,
  numAllowedTools: De,
  numDisallowedTools: Oe,
  restricted: Ae,
  mcpClientCount: $e,
  mcpConfigs: We,
  worktreeEnabled: Ye,
  skipWebFetchPreflight: Ze,
  githubActionInputs: Nt,
  dangerouslySkipPermissionsPassed: at,
  permissionMode: zt,
  proactivityLevel: Qt,
  modeIsBypass: dn,
  allowDangerouslySkipPermissionsPassed: ro,
  skipDangerousModePromptSetPreDialog: lo,
  systemPromptFlag: to,
  appendSystemPromptFlag: Tt,
  thinkingConfig: Un,
  modelProvenance: yn,
}) {
  try {
    let on = getNoFlickerEnvOverride(),
      $n,
      Kt,
      Hn = {},
      Zt = Fm().catch(() => null),
      $t = await getGitPresenceForAnalytics(),
      At = (await withDeadline(Zt, Lm)) ?? null,
      Mn = We === null ? null : _m(We),
      rn = {
        entrypoint: S("claude"),
        bootstrap_entry: fromEnum(getBootstrapEntry()),
        hasInitialPrompt: V,
        hasStdin: te,
        verbose: ne,
        debug: me,
        debugToStderr: isDebugToStdErr(),
        print: Me,
        outputFormat: fromEnum(Se),
        inputFormat: fromEnum(xe),
        numAllowedTools: De,
        numDisallowedTools: Oe,
        restricted: Ae,
        mcpClientCount: $e,
        ...(Mn && { ...Mn }),
        worktree: Ye,
        skipWebFetchPreflight: Ze,
        githubActionInputsPresent: Nt !== void 0,
        githubActionInputsLength: Nt?.length,
        dangerouslySkipPermissionsPassed: at,
        permissionMode: fromEnum(zt),
        proactivityLevel: fromEnumOpt(Qt),
        modeIsBypass: dn,
        inProtectedNamespace: isInProtectedNamespace(),
        ...getCooContextProperties(),
        ...$n,
        apiKeySource: fromEnum(getAnthropicApiKeyWithSourceSafe({ skipRetrievingKeyFromApiKeyHelper: !0 }).source),
        allowDangerouslySkipPermissionsPassed: ro,
        thinkingType: fromEnum(Un.type),
        ...(to && { systemPromptFlag: fromEnum(to) }),
        ...(Tt && { appendSystemPromptFlag: fromEnum(Tt) }),
        ...(on && { noFlickerEnvVar: fromEnum(on) }),
        rendererEntryPath: fromEnum(getFullscreenReason()),
        ...getScreenReaderTelemetryProps(),
        ...Hn,
        is_simple: isSimpleMode() || void 0,
        is_safe_mode: isSafeMode() || void 0,
        is_coordinator: systemPromptModule?.isCoordinatorMode() ? !0 : void 0,
        autoUpdatesChannel: fromEnum(getInitialSettings().autoUpdatesChannel ?? "latest"),
        ...yn,
        ...($t && {
          is_git: $t.is_git,
          has_remote: $t.has_remote,
          remote_host_class: fromEnum($t.remote_host_class),
        }),
        ...(At && {
          has_dockerfile: At.has_dockerfile,
          has_compose: At.has_compose,
          has_devcontainer: At.has_devcontainer,
          has_nix: At.has_nix,
          has_bazel: At.has_bazel,
          lockfile_family: fromEnum(At.lockfile_family),
          has_env_file: At.has_env_file,
          has_ci_config: At.has_ci_config,
          has_private_registry: At.has_private_registry,
          private_registry_host_class: fromEnum(At.private_registry_host_class),
          has_secrets_manager_refs: At.has_secrets_manager_refs,
          has_xcode_project: At.has_xcode_project,
          has_android_project: At.has_android_project,
          os_locked_toolchain: fromEnum(At.os_locked_toolchain),
        }),
        ...{},
      };
    logEvent("tengu_init", rn);
  } catch (on) {
    logError(on);
  }
}
function applyBriefModeFlag(w) {
  let I = w.brief,
    O = a.CLAUDE_CODE_BRIEF;
  if (!I && !O) return;
  let { isBriefEntitled: U } = import.meta.require("../../01-核心基础设施/核心工具-未归类/chunk-1p3batyk.js"),
    V = U();
  if (V) lZ(!0);
  logEvent("tengu_brief_mode_enabled", {
    enabled: V,
    gated: !V,
    source: fromEnum(O ? "env" : "flag"),
  });
}
function XC(w) {
  if (typeof w !== "object" || w === null) return {};
  let I = w,
    O = I.teammateMode;
  return {
    agentId: typeof I.agentId === "string" ? I.agentId : void 0,
    agentName: typeof I.agentName === "string" ? I.agentName : void 0,
    teamName: typeof I.teamName === "string" ? I.teamName : void 0,
    agentColor: typeof I.agentColor === "string" ? I.agentColor : void 0,
    planModeRequired:
      typeof I.planModeRequired === "boolean" ? I.planModeRequired : void 0,
    parentSessionId:
      typeof I.parentSessionId === "string" ? I.parentSessionId : void 0,
    teammateMode:
      O === "auto" || O === "tmux" || O === "iterm2" || O === "in-process"
        ? O
        : void 0,
    agentType: typeof I.agentType === "string" ? I.agentType : void 0,
  };
}
async function JC(w, I) {
  let O = I.commands
      .filter((te) => !("_hidden" in te && te._hidden))
      .flatMap((te) => [te.name(), ...te.aliases()]),
    U = w.toLowerCase(),
    V =
      U !== w && O.includes(U)
        ? U
        : findClosestName(
            U,
            O.map((te) => ({ name: te })),
          );
  if (!V) return;
  (await logEventAsync("tengu_unknown_command_suggestion", {}),
    process.stderr.write(
      [
        chalk.red(figures.cross) + ` unknown command "${w}"`,
        chalk.dim(`  ${TREE_CONNECTOR_GLYPHS.last} `) +
          "Did you mean " +
          chalk.bold(`claude ${V}`) +
          "?",
        "",
        chalk.dim("Run ") +
          chalk.dim.bold("claude --help") +
          chalk.dim(" to list commands, or ") +
          chalk.dim.bold(`claude -p "${w}"`) +
          chalk.dim(" to send as a prompt."),
        "",
      ].join(`
`),
    ),
    await exitAfterAnalyticsFlush(1));
}
function QC(w) {
  if (ke()) {
    (writeDiagnosticsEvent("info", "prefetch_system_context_non_interactive"), getSystemContext(w));
    return;
  }
  if (checkHasTrustDialogAccepted()) (writeDiagnosticsEvent("info", "prefetch_system_context_has_trust"), getSystemContext(w));
  else writeDiagnosticsEvent("info", "prefetch_system_context_skipped_no_trust");
}
function prewarmStartupServices(w, I, O) {
  if (a.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER || isSimpleMode()) return;
  if (
    (initUserData(),
    getUserContext(w, I, O),
    QC(w),
    getApplicableSpinnerTips({
      session: B(),
      theme: "dark",
      ...(I && { storageV5: I }),
      ...(O && { credentials: O }),
    }).catch((V) => logError(dt(ge(V), "tip prewarm failed"))),
    a.CLAUDE_CODE_USE_BEDROCK && !a.CLAUDE_CODE_SKIP_BEDROCK_AUTH)
  )
    prefetchAwsCredentialsAndBedRockInfoIfSafe();
  if (a.CLAUDE_CODE_USE_ANTHROPIC_AWS && !a.CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH)
    prefetchAwsCredentialsAndBedRockInfoIfSafe();
  if (a.CLAUDE_CODE_USE_MANTLE && !a.CLAUDE_CODE_SKIP_MANTLE_AUTH) prefetchAwsCredentialsAndBedRockInfoIfSafe();
  if (a.CLAUDE_CODE_USE_VERTEX && !a.CLAUDE_CODE_SKIP_VERTEX_AUTH) prefetchGcpCredentialsIfSafe();
  if (
    a.CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD &&
    !a.CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH
  )
    prefetchGcpCredentialsIfSafe();
  (countFilesRoundedRg(getCwd(), AbortSignal.timeout(3000), []),
    refreshOfficialMcpRegistryUrls(),
    primeModelCapabilitiesCache(I),
    primeGatewayModelCache(I),
    ep(I, O),
    fetchAndCacheGatewayModels(I),
    uf({ allowNetwork: !ke() }),
    pf({ allowNetwork: !ke() }));
  let U = createConfigChangeHookGate(w, I, O);
  if ((settingsChangeDetector.initialize(U, I), !isSimpleMode() && !Nn() && !Rg())) skillChangeDetector.initialize(U, I);
  if (getFeatureValue_CACHED_MAY_BE_STALE("tengu_drift_lantern", !1))
    import("./startEventLoopStallDetector.hwq92489.js").then((V) =>
      V.startEventLoopStallDetector(w.host),
    );
  if (isSdkEntrypoint()) installMemorySummaryOnExit(getMemoryPeaks);
}
function reportPluginSessionTelemetry(w, I) {
  let O = parseUserSpecifiedModel(KR() ?? getDefaultMainLoopModel()),
    U = Sf(getCwd(), getEffectiveContextWindow(O, Up()), bytesPerTokenForModel(O), w);
  loadAllPluginsCacheOnly(w, I)
    .then(async ({ enabled: V, errors: te }) => {
      let ne = getPolicyPluginNames();
      (registerFirstPartyPlugins(V, ne),
        await Promise.all(
          V.map(async (Me) => {
            if (!Me.mcpServers) {
              let Se = await discoverPluginMcpServers(Me, [], w);
              if (Se) Me.mcpServers = Se;
            }
            if (!Me.lspServers) {
              let Se = await readPluginLspConfig(Me, [], w);
              if (Se) Me.lspServers = Se;
            }
          }),
        ),
        logPluginLoadFailures(te, ne, { cacheOnly: !0 }),
        _f(V, ne));
      let me = await U;
      emitPluginSessionTelemetry(V, ne, getPluginSeedDirs(), me, w);
    })
    .catch((V) => logError(dt(ge(V), "plugin session telemetry load failed")));
}
function getBranchMode(w, I) {
  return fromEnum(w ? "on_branch" : I ? "ref" : "default");
}
async function runCliActionHandler(w, I, O, U, V, te, ne, me, Me) {
  if (
    (profileCheckpoint("action_handler_start"),
    consumeBridgeMcpCarrierMarker(),
    registerHistoryExitFlush(me),
    I.deepLinkOrigin && I.prefillB64 !== void 0 && I.prefill === void 0)
  )
    try {
      I.prefill = parseDeepLinkQuery(I.prefillB64);
    } catch (Le) {
      logForDebugging(
        `Ignoring invalid --prefill-b64: ${Le instanceof Error ? Le.message : Le}`,
        { level: "error" },
      );
    }
  if (I.deepLinkOrigin && I.deepLinkCwdB64 !== void 0)
    try {
      (validateDeepLinkCwd(I.deepLinkCwdB64),
        changeWorkingDirectory(I.deepLinkCwdB64),
        setSessionCwd(I.deepLinkCwdB64),
        ES(getCwd()),
        o_e(getCwd()),
        clearProjectPathForConfigCache(),
        resetTrustDialogAcceptedCache(),
        clearCurrentSessionMemoryFiles(),
        invalidateAllSettings(),
        clearPluginCache("deeplink: originalCwd changed"));
      let Le;
      using Ve = { [Symbol.dispose]: () => Le?.() };
      if (isHoverRestEnabled() && me !== void 0) Le = await resetSettingsCacheWithBackendRead(me);
      if (U()) refillPluginLoadCacheOnly(me, "deeplink");
      if ((resetGitFileWatcher(), Le !== void 0)) updateHooksConfigSnapshot({ userLayer: "retain" });
      else updateHooksConfigSnapshot();
      (getPlansDirectory.cache.clear?.(), primePlanSlugCollisions(me));
    } catch (Le) {
      logForDebugging(
        `Ignoring invalid --deep-link-cwd-b64: ${Le instanceof Error ? Le.message : Le}`,
        { level: "error" },
      );
    }
  if (I.bare) process.env.CLAUDE_CODE_SIMPLE = "1";
  if (isSafeMode())
    ((process.env.CLAUDE_CODE_SAFE_MODE = "1"),
      (process.env.CLAUDE_CODE_DISABLE_CLAUDE_MDS = "1"),
      logFeatureOk("startup_safe_mode"));
  let Se;
  try {
    Se = resolveMaxTurns(I.maxTurns);
  } catch (Le) {
    return cliError(l(Le));
  }
  if (w === "code")
    (logEvent("tengu_code_prompt_ignored", {}),
      cliWarn("Tip: You can launch Claude Code with just `claude`"),
      (w = void 0));
  if (w && typeof w === "string" && !/\s/.test(w) && w.length > 0) {
    if (
      (logEvent("tengu_single_word_prompt", { length: w.length }),
      !I.print && !I.continue && !I.resume && /^[a-zA-Z][a-zA-Z-]*$/.test(w))
    )
      await JC(w, O);
  }
  let xe;
  if (isAgentSwarmsEnabled() && !ke() && !I.agentId)
    try {
      let { initializeSessionTeam: Le } = await import("../Teammates团队/initializeSessionTeam.tnj1ekdv.js");
      xe = await Le(void 0, me);
    } catch (Le) {
      logError(Le);
    }
  if (!isAnalyticsDisabled())
    logEvent(
      "tengu_cli_flags",
      Cf(I, (Le) => O.getOptionValueSource(Le)),
    );
  let {
    debug: De = !1,
    dangerouslySkipPermissions: Oe,
    allowDangerouslySkipPermissions: Ae = !1,
    tools: $e = [],
    restricted: We = !1,
    allowedTools: Ye = [],
    disallowedTools: Ze = [],
    mcpConfig: Nt = [],
    permissionMode: at,
    inheritPermissionMode: zt,
    proactivity: Qt,
    addDir: dn = [],
    fallbackModel: ro,
    betas: lo = [],
    ide: to = !1,
    sessionId: Tt,
    includeHookEvents: Un,
    includePartialMessages: yn,
    forwardSubagentText: on,
    sessionMirror: $n,
  } = I;
  if ((Ert(We), I.prefill)) seedEarlyInput(I.prefill);
  let Kt,
    Hn = I.agents;
  if (
    typeof Hn === "string" &&
    Hn !== "" &&
    !isCustomizationDisabled("agents", { explicitlyRequested: !0 }) &&
    !I.resume &&
    !I.continue &&
    !a.CLAUDE_BG_POST_CLEAR_RESPAWN
  ) {
    let Le = validateAgentsJson(Hn);
    if (Le)
      return cliError(`Error: Invalid --agents configuration:
${Le}`);
  }
  let Zt = I.agent;
  if (Zt) process.env.CLAUDE_CODE_AGENT = Zt;
  let { outputFormat: $t, inputFormat: At } = I,
    Mn = getInitialSettings().viewMode,
    rn = isFocusModeEnabled(),
    Lt =
      I.verbose ?? (Mn ? Mn === "verbose" : rn ? !1 : resolveSetting("verbose", !1).value),
    an = I.print,
    Tn = I.init ?? !1,
    en = I.initOnly ?? !1,
    kn = I.maintenance ?? !1;
  if (!an && process.stdout.isTTY && isScreenReaderModeEnabled()) {
    let Le = formatScreenReaderStatusLabel();
    if (Le !== null) (console.log(Le), markScreenReaderAnnouncementWritten());
  }
  let It = I.disableSlashCommands || !1;
  HLn(It);
  let cn = resolveAutoCompactWindowSetting(I.autocompact, getInitialSettings().autoCompactWindow),
    ln = isWorktreeModeEnabled() ? I.worktree : void 0,
    et = typeof ln === "string" ? ln : void 0,
    tt = ln !== void 0,
    He;
  if (et) {
    let Le = parsePRReference(et);
    if (Le !== null) ((He = Le), (et = void 0));
  }
  let Qe = isWorktreeModeEnabled() && I.tmux === !0;
  if (Qe) {
    if (!tt) return cliError("Error: --tmux requires --worktree");
    if (getCurrentPlatform() === "windows")
      return cliError("Error: --tmux is not supported on Windows");
    if (!(await isTmuxAvailable()))
      return cliError(`Error: tmux is not installed.
${getTmuxInstallInstructions()}`);
  }
  let Je = XC(I);
  if (Je.parentSessionId) getTeammateContextModule().setCliParentSessionId?.(Je.parentSessionId);
  RLn(Je.agentId);
  let Ot;
  if (isAgentSwarmsEnabled()) {
    Ot = Je;
    let Le = Je.agentId || Je.agentName || Je.teamName,
      Ve = Je.agentId && Je.agentName && Je.teamName;
    if (Le && !Ve)
      return cliError(
        "Error: --agent-id, --agent-name, and --team-name must all be provided together",
      );
    if (Je.agentId && Je.agentName && Je.teamName)
      getTeammateContextModule().setDynamicTeamContext?.({
        agentId: Je.agentId,
        agentName: Je.agentName,
        teamName: Je.teamName,
        color: Je.agentColor,
        planModeRequired: Je.planModeRequired ?? !1,
        parentSessionId: Je.parentSessionId,
      });
    if (Je.teammateMode) VC().setCliTeammateModeOverride?.(Je.teammateMode);
  }
  let nn = I.sdkUrl ?? void 0,
    Fn = yn || a.CLAUDE_CODE_INCLUDE_PARTIAL_MESSAGES,
    Jo = on || a.CLAUDE_CODE_FORWARD_SUBAGENT_TEXT;
  if (Un || a.CLAUDE_CODE_REMOTE) enableAllHookEvents(!0);
  if (nn) {
    if (!At) At = "stream-json";
    if (!$t) $t = "stream-json";
    if (I.verbose === void 0) Lt = !0;
    if (!I.print) an = !0;
  }
  let Oo = await fm(I, {
    prompt: typeof w === "string" ? w : void 0,
    sessionId: Tt,
    outputFormat: $t,
    inputFormat: At,
    hasSdkUrl: Boolean(nn),
    nonInteractive: ke(),
    isViolinWoodEnabled: isViolinWoodEnabled,
    hasConnect: Boolean(V?.url),
    hasSSH: Boolean(te?.host),
    rcProjectGateEnabled: !1,
  });
  if (!Oo.ok) return Oo.flushAnalytics ? cliErrorAfterAnalyticsFlush(Oo.error) : cliError(Oo.error);
  let {
      teleport: Mr,
      cloudAttachId: Ro,
      poolId: Go,
      poolPromotedRemote: Ar,
      poolRef: mr,
      poolOnBranch: hs,
      forwardHomeSettings: Ko,
      homeSettingsConsent: Ir,
      projectFlag: Ss,
      projectBrowse: _s,
      projectForRemoteControl: Qs,
      correlationId: Wo,
      headlessCloud: fr,
    } = Oo.value,
    { remote: vo } = Oo.value;
  if (
    We &&
    (vo !== null ||
      Ro !== null ||
      Go !== null ||
      Ar ||
      _s !== null ||
      Boolean(V?.url) ||
      Boolean(te?.host))
  )
    return cliError(
      "Error: --restricted cannot be enforced in a cloud, remote-environment or ssh session, which runs its tools on another machine",
    );
  (B().host.launchOptions.replaceMayForwardHomeSettings(Ko),
    B().host.launchOptions.replaceHomeSettingsHostConsent(Ir));
  let Zs = ke() && (fr || Ro !== null || Go !== null),
    bs,
    Ke = !1,
    ze = I.watchArtifact ?? I.watchArtifactNoAutoreact;
  if (ze !== void 0) {
    if (a.CLAUDE_CODE_REMOTE)
      return cliError(
        "Error: --watch-artifact isn't supported yet from remote sessions \u2014 run it in Claude Code on your own machine",
      );
    if (ke())
      return cliError(
        "Error: --watch-artifact requires an interactive session (not print mode, --sdk-url, --init-only, or redirected output)",
      );
    if (
      Ro !== null ||
      vo !== null ||
      Ar ||
      Boolean(V?.url) ||
      Boolean(te?.host)
    )
      return cliError(
        "Error: --watch-artifact is not available in sessions attached to a remote environment \u2014 run it in a plain local session",
      );
    let Le = parseWatchArtifactTarget(ze);
    if ("error" in Le) return cliError(Le.error);
    let Ve = typeof I.watchArtifactNoAutoreact === "string";
    (setStartupWatchTarget(Ve ? { ...Le, autoReactDisarmed: !0 } : Le),
      (bs = Le.slug),
      (Ke = Ve));
  }
  let ft = null,
    vt = I.remoteControl ?? I.rc,
    Bt = !1,
    En = typeof vt === "string" && vt.length > 0 ? vt : void 0,
    Rn = I.remoteControlSessionNamePrefix;
  if (Rn) process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX = Rn;
  let no = gm({
    sessionId: Tt,
    continue: I.continue,
    resume: I.resume,
    forkSession: I.forkSession,
    sdkUrl: nn,
  });
  if (!no.ok) return cliError(no.error);
  if (Tt) {
    if (!nn) {
      let Le = Xn(Tt);
      if (!Le) return cliError("Error: Invalid session ID. Must be a valid UUID.");
      if (!(I.forkSession && I.resume === Le) && sessionIdExists(Le))
        return cliError(`Error: Session ID ${Le} is already in use.`, BG_EXIT_CAUSE_SESSION_IN_USE);
    }
  }
  let co = I.file;
  if (co && co.length > 0) {
    let Le = getSessionAccessToken();
    if (!Le)
      return cliError(
        "Error: Session token required for file downloads. CLAUDE_CODE_SESSION_ACCESS_TOKEN must be set.",
      );
    let Ve = process.env.CLAUDE_CODE_REMOTE_SESSION_ID || K(),
      st = parseFileIdSpecs(co);
    if (st.length > 0) {
      let Wt = {
        baseUrl: process.env.ANTHROPIC_BASE_URL || getOauthConfig().BASE_API_URL,
        oauthToken: Le,
        sessionId: Ve,
      };
      Kt = downloadSessionFiles(st, Wt);
    }
  }
  let fn = ke(),
    xr = ro === I.model ? void 0 : ro,
    Wr = I.systemPrompt;
  if (I.systemPromptFile) {
    if (I.systemPrompt)
      return cliError(
        "Error: Cannot use both --system-prompt and --system-prompt-file. Please use only one.",
      );
    try {
      let Le = ps(I.systemPromptFile);
      Wr = await vf(Le, "utf8");
    } catch (Le) {
      if (A(Le) === "ENOENT")
        return cliError(
          `Error: System prompt file not found: ${ps(I.systemPromptFile)}`,
        );
      return cliError(`Error reading system prompt file: ${l(Le)}`);
    }
  }
  let Cs = I.appendSystemPrompt;
  if (I.appendSystemPromptFile) {
    if (I.appendSystemPrompt)
      return cliError(
        "Error: Cannot use both --append-system-prompt and --append-system-prompt-file. Please use only one.",
      );
    try {
      let Le = ps(I.appendSystemPromptFile);
      Cs = verifyBridgeCarrierPrompt(await vf(Le));
    } catch (Le) {
      if (A(Le) === "ENOENT")
        return cliError(
          `Error: Append system prompt file not found: ${ps(I.appendSystemPromptFile)}`,
        );
      return cliError(`Error reading append system prompt file: ${l(Le)}`);
    }
  }
  let ks = await cm(I);
  if (!ks.ok) return cliError(ks.error);
  ((I.appendSubagentSystemPrompt = ks.prompt),
    lm(I.appendSubagentSystemPrompt));
  let { systemPrompt: gr, appendSystemPrompt: Gn } = resolveEffectiveSystemPrompts({
    cli: { systemPrompt: Wr, appendSystemPrompt: Cs },
    env: process.env,
    settings: getInitialSettings(),
  });
  if (isAgentSwarmsEnabled() && Ot?.agentId && Ot?.agentName && Ot?.teamName) {
    let Le = zC().TEAMMATE_SYSTEM_PROMPT_ADDENDUM;
    Gn = Gn
      ? `${Gn}

${Le}`
      : Le;
  }
  let ws = Zt
      ? getBuiltInAgents().find((Le) => Le.agentType === Zt)?.permissionMode
      : void 0,
    Dr = om({
      remote: vo,
      isNonInteractiveSession: fn,
      headlessCloud: fr,
      isContinue: Boolean(I.continue),
      pendingAssistantChat: void 0,
      pendingConnectUrl: V?.url,
      pendingSSHHost: te?.host,
    }),
    zo = async (Le, Ve, st) => {
      profileCheckpoint(st.before);
      let Wt = performance.now();
      (await withTimeout(initializeGrowthBook(), 1500, Le).catch(() => {}),
        recordStartupPhase(Ve, performance.now() - Wt, Wt),
        profileCheckpoint(st.after));
    },
    Zo = () => {
      if (isRemoteSettingsEligible() && !isRemoteManagedSettingsVerified()) return !0;
      if (tt) return !0;
      for (let Le of PROJECT_SCOPED_SETTINGS_SOURCE_SET) {
        let Ve = filterPolicyPredicateEnv(getSettingsForSource(Le)?.env, Le);
        if (Object.keys(Ve).length > 0) return !0;
      }
      return !1;
    },
    yr = !1;
  if (ke() && isTelemetryEnabled() && isGrowthBookCacheEmpty() && !Zo())
    ((yr = !0),
      await zo("gb-before-mode", "growthbook_init_ms", {
        before: "before_growthbook_init",
        after: "after_growthbook_init",
      }));
  let nr = getFeatureValueWithSource_CACHED_MAY_BE_STALE("tengu_auto_mode_config", {});
  if (
    ke() &&
    nr.value?.enabled === "disabled" &&
    nr.source === "disk" &&
    isTelemetryEnabled() &&
    !Zo()
  )
    await zo("gb-killswitch-recheck", "growthbook_killswitch_recheck_ms", {
      before: "before_gb_killswitch_recheck",
      after: "after_gb_killswitch_recheck",
    });
  let or = DEFAULT_PROACTIVITY_LEVEL,
    Fr,
    Vr = !1,
    {
      mode: hr,
      notification: Es,
      proactivity: Jr,
      modeSuppliedOnInvocation: Lr,
    } = initialPermissionModeFromCLI({
      permissionModeCli: at,
      inheritPermissionModeCli: zt,
      dangerouslySkipPermissions: Oe,
      allowDangerouslySkipPermissions: Ae,
      bypassPermissionsBlockedByHost: Vr,
      agentPermissionMode: ws,
      proactivityLevel: Fr?.level,
    }),
    go = hr,
    ni = validateRestrictedPermissionMode({
      restricted: We,
      permissionMode: go,
      allowDangerouslySkipPermissions: Ae,
    });
  if (ni) return cliError(`Error: ${ni}`);
  if (
    (applyInheritPermissionMode({ inheritPermissionModeCli: zt, resolvedMode: go, storageV5: me }),
    ILn(go === "bypassPermissions"),
    I.enableAutoMode ||
      at === "auto" ||
      ws === "auto" ||
      (go === "auto" && !isAutoModeFromFallback()) ||
      (!at && isDefaultPermissionModeAuto()))
  )
    setAutoModeFlagCli(!0);
  await awaitMcpPolicyColdStart({
    hasDynamicMcpConfig: Boolean(Nt && Nt.length > 0) || to,
    pluginStateReliable: U(),
    storageV5: me,
  });
  let gn = {},
    Rs = {};
  if (Nt && Nt.length > 0) {
    let Le = Nt.map((Cn) => Cn.trim()).filter((Cn) => Cn.length > 0),
      Ve = {},
      st = [],
      Wt = [],
      Dn = nn ? Tt : void 0,
      br = bridgeCarrierState.isBridgeCarrierChild;
    for (let Cn of Le) {
      let yo = null,
        So = [],
        Ls = xt(Cn, !1);
      if (Ls) {
        let ao = parseMcpConfig({
          configObject: Ls,
          filePath: "command line",
          expandVars: !0,
          scope: "dynamic",
          bridgeSessionId: Dn,
        });
        if (ao.config) yo = ao.config.mcpServers;
        So = ao.errors;
      } else {
        let ao = ps(Cn),
          qo = parseMcpConfigFromFilePath({
            filePath: ao,
            expandVars: !0,
            scope: "dynamic",
            bridgeSessionId: Dn,
          });
        if (qo.config) yo = qo.config.mcpServers;
        So = qo.errors;
      }
      if (yo) {
        if (((Ve = { ...Ve, ...yo }), So.length > 0)) {
          logForDebugging(
            `--mcp-config: ${So.length} entry warning(s): ${So.map((ao) => `${ao.path ? ao.path + ": " : ""}${ao.message}`).join("; ")}`,
            { level: "warn" },
          );
          for (let ao of So) {
            let qo = ao.mcpErrorMetadata;
            if (qo?.skipReason && qo.serverName != null)
              Wt.push({
                name: qo.serverName,
                type: qo.skipReason,
                message: ao.message,
              });
          }
        }
      } else st.push(...So);
    }
    if (st.length > 0) {
      let Cn = st.map((yo) => `${yo.path ? yo.path + ": " : ""}${yo.message}`)
        .join(`
`);
      return (
        logForDebugging(`--mcp-config validation failed (${st.length} errors): ${Cn}`, {
          level: "error",
        }),
        cliError(`Error: Invalid MCP configuration:
${Cn}`)
      );
    }
    let Vo = new Map();
    for (let Cn of Wt) if (!Object.hasOwn(Ve, Cn.name)) Vo.set(Cn.name, Cn);
    if (Vo.size > 0) {
      let Cn = Array.from(Vo.values());
      if ((Cm(Cn), process.stderr.isTTY)) {
        let yo = (So) =>
          stripAnsi(So)
            .replace(/[\x00-\x1f\x7f-\x9f]+/g, " ")
            .trim();
        cliWarn(`Warning: ${Cn.length} ${pluralize(Cn.length, "MCP server")} skipped due to invalid config:
${Cn.map((So) => `  - ${yo(So.message)}`).join(`
`)}`);
      }
    }
    if (Object.keys(Ve).length > 0) {
      let Cn = Boolean(a.CLAUDE_CODE_REMOTE) || br,
        yo = areSideloadFlagsDisabledByPolicy() && !areMcpConfigsAllSdkType(Ve);
      if (yo && !Cn) return cliError(sideloadFlagsBlockedMessage(["--mcp-config"]));
      let So = Si(Ve, (ki) => {
          let Qd = { ...ki, scope: "dynamic" };
          return isCliOwnedMcpConfig(ki) ? markConfigAsCliOwned(Qd) : Qd;
        }),
        { configs: Ls, blocked: ao } = filterDynamicMcpServersByPolicy(So);
      if (ao.length > 0)
        cliWarn(
          `Warning: MCP ${pluralize(ao.length, "server")} blocked by enterprise policy: ${ao.join(", ")}`,
        );
      let qo = pickBy(Ls, (ki) => ki.type === "sdk"),
        Eg = doesEnterpriseMcpConfigExist() && Cn && !I.strictMcpConfig && areMcpConfigsAllowedWithEnterpriseMcpConfig(qo),
        {
          servers: Jd,
          dropped: ar,
          reason: Ia,
        } = bm(Ls, {
          dropForEnterpriseMcpConfig: Eg,
          dropForSideloadPolicy: yo && Cn,
        });
      if (ar.length > 0) {
        if (
          (logForDebugging(
            `--mcp-config: ${pluralize(ar.length, "server")} ignored (${Ia}): ${ar.join(", ")}`,
            { level: "warn" },
          ),
          Ia === "enterprise MCP config")
        )
          cliWarn(
            `Warning: an enterprise MCP config (managed-mcp.json) is present and has exclusive control over MCP servers; ignoring ${ar.length} MCP ${pluralize(ar.length, "server")} supplied via --mcp-config: ${ar.join(", ")}`,
          );
        else if (Ia === "disableSideloadFlags policy")
          cliWarn(
            `Warning: managed setting disableSideloadFlags forbids --mcp-config on this machine; ignoring ${ar.length} server-delivered MCP ${pluralize(ar.length, "server")}: ${ar.join(", ")}`,
          );
      }
      ((Rs = Jd), (gn = { ...gn, ...Jd }));
    }
  }
  let _r = I;
  vLn(_r.chrome);
  let rr = shouldEnableClaudeInChrome(_r.chrome) && isClaudeAISubscriber();
  if (
    _r.chrome !== !1 &&
    (_r.chrome === !0 || a.CLAUDE_CODE_ENABLE_CFC === !0) &&
    !isClaudeInChromeAllowed()
  ) {
    let Le =
      policyDeniedReason("allow_claude_browser_extension", "Claude in Chrome", "is") ??
      "Claude in Chrome is disabled by your organization";
    if (fn) logForDebugging(`[Claude in Chrome] ${Le}`, { level: "warn" });
    else cliWarn(`Warning: ${Le}`);
  }
  let Ur = isMcpServerDenied(CLAUDE_IN_CHROME_MCP_SERVER_NAME, getClaudeInChromeMcpServerConfig()),
    Nr = doesEnterpriseMcpConfigExist() || Ur,
    oi = !rr && !Nr && shouldAutoEnableClaudeInChrome(me),
    Qr = rr && _r.chrome !== !0 && a.CLAUDE_CODE_ENABLE_CFC !== !0 && Nr,
    Yt =
      rr &&
      _r.chrome !== !0 &&
      ((a.CLAUDE_CODE_ENABLE_CFC !== !0 && isSafeMode()) || We);
  if (Qr)
    logForDebugging(
      "[Claude in Chrome] Skipping chrome wiring: blocked by enterprise MCP config or managed deniedMcpServers policy",
    );
  else if (Yt)
    logForDebugging("[Claude in Chrome] Skipping chrome wiring: --safe-mode or --restricted");
  else if (rr && Ur)
    if (fn)
      logForDebugging(`[Claude in Chrome] MCP server blocked by enterprise policy: ${CLAUDE_IN_CHROME_MCP_SERVER_NAME}`, {
        level: "warn",
      });
    else cliWarn(`Warning: MCP server blocked by enterprise policy: ${CLAUDE_IN_CHROME_MCP_SERVER_NAME}`);
  else if (rr) {
    let Le = getCurrentPlatform();
    try {
      logEvent("tengu_claude_in_chrome_setup", { platform: getPlatformForAnalytics(Le) });
      let { mcpConfig: Ve, allowedTools: st, systemPrompt: Wt } = setupClaudeInChrome();
      if (((gn = { ...gn, ...Ve }), Ye.push(...st), Wt))
        Gn = Gn
          ? `${Wt}

${Gn}`
          : Wt;
    } catch (Ve) {
      return (
        logEvent("tengu_claude_in_chrome_setup_failed", { platform: getPlatformForAnalytics(Le) }),
        logForDebugging(`[Claude in Chrome] Error: ${Ve}`),
        logError(Ve),
        cliError("Error: Failed to run with Claude in Chrome.")
      );
    }
  }
  let Ne = I,
    Ct = I.strictMcpConfig || !1;
  if (
    (EOn(Ct),
    art(cliCarriesSessionConfig(I)),
    COn(cliCarriesForkRestrictedConfig(I)),
    vOn({
      ...(typeof I.appendSystemPrompt === "string" &&
        I.appendSystemPrompt !== "" && {
          appendSystemPrompt: I.appendSystemPrompt,
        }),
      ...(I.systemPromptSnapshot !== void 0 && {
        systemPromptSnapshot: I.systemPromptSnapshot,
      }),
      ...(typeof I.agent === "string" && I.agent !== "" && { agent: I.agent }),
      ...(typeof I.agents === "string" &&
        I.agents !== "" && { agents: I.agents }),
    }),
    IDn(
      isPermissionPromptsDisabled(I.permissionPrompts)
        ? PERMISSION_PROMPTS_NONE
        : resolvePermissionPromptTarget({ permissionPromptTool: I.permissionPromptTool, sdkUrl: nn }),
    ),
    fae([
      ...buildDispatchArgs(
        resolveConfigPaths(
          {
            settings: typeof I.settings === "string" ? I.settings : void 0,
            pluginDir: kL(),
            pluginDirNoMcp: xL(),
            addDir: dn,
            mcpConfig: Nt,
            strictMcpConfig: Ct,
            restricted: We,
          },
          ps,
        ),
      ),
      ...(xr ? ["--fallback-model", xr] : []),
      ...(Ae ? ["--allow-dangerously-skip-permissions"] : []),
      ...(It ? ["--disable-slash-commands"] : []),
      ...(Ne.channels ?? []).flatMap((Le) => ["--channels", Le]),
      ...(bs !== void 0
        ? [Ke ? "--watch-artifact-no-autoreact" : "--watch-artifact", bs]
        : []),
    ]),
    doesEnterpriseMcpConfigExist())
  ) {
    if (Ct)
      return cliError(
        "You cannot use --strict-mcp-config when an enterprise MCP config is present",
      );
    if (gn && !areMcpConfigsAllowedWithEnterpriseMcpConfig(gn))
      return cliError(
        "You cannot dynamically configure MCP servers when an enterprise MCP config is present",
      );
  }
  if (!ke() && !We && isComputerUseEnabled())
    try {
      let { setupComputerUseMCP: Le } = await import("../图片-截图-ComputerUse/setupComputerUseMCP.awc2xhcg.js"),
        { mcpConfig: Ve, allowedTools: st } = Le();
      ((gn = { ...gn, ...Ve }), Ye.push(...st));
    } catch (Le) {
      logForDebugging(`[Computer Use MCP] Setup failed: ${l(Le)}`);
    }
  Hz(dn);
  let In,
    Mo = (Le, Ve) => {
      let st = [],
        Wt = [];
      for (let Dn of Le)
        if (Dn.startsWith("plugin:")) {
          let br = Dn.slice(7),
            Vo = br.indexOf("@");
          if (Vo <= 0 || Vo === br.length - 1) Wt.push(Dn);
          else
            st.push({
              kind: "plugin",
              name: br.slice(0, Vo),
              marketplace: br.slice(Vo + 1),
            });
        } else if (Dn.startsWith("server:") && Dn.length > 7)
          st.push({ kind: "server", name: Dn.slice(7) });
        else Wt.push(Dn);
      if (Wt.length > 0)
        cliError(
          `${Ve} entries must be tagged: ${Wt.join(", ")}
` +
            `  plugin:<name>@<marketplace>  \u2014 plugin-provided channel (allowlist enforced)
` +
            "  server:<name>                \u2014 manually configured MCP server",
        );
      return st;
    },
    { channels: ko, dangerouslyLoadDevelopmentChannels: qn } = Ne,
    As = [];
  if (ko && ko.length > 0) ((As = Mo(ko, "--channels")), Sae(As));
  if (!fn) {
    if (qn && qn.length > 0)
      In = Mo(qn, "--dangerously-load-development-channels");
  }
  if (As.length > 0 || (In?.length ?? 0) > 0) {
    let Le = (Ve) => {
      let st = Ve.flatMap((Wt) =>
        Wt.kind === "plugin" ? [`${Wt.name}@${Wt.marketplace}`] : [],
      );
      return st.length > 0 ? st.sort().join(",") : void 0;
    };
    logEvent("tengu_mcp_channel_flags", {
      channels_count: As.length,
      dev_count: In?.length ?? 0,
      plugins: Le(As),
      dev_plugins: Le(In ?? []),
    });
  }
  if ($e.length > 0) {
    let { shouldToolsListOptInToBrief: Le } = import.meta.require(
      "../../01-核心基础设施/核心工具-未归类/chunk-1p3batyk.js",
    );
    if (Le(splitToolRuleList($e))) lZ(!0);
  }
  if (ke()) {
    let Le = checkHasTrustDialogAccepted();
    if ((Dx(!0), !Le))
      import("../../01-核心基础设施/核心工具-未归类/parseGitHubRepository.3ng6714h.js").then((Ve) => {
        Ve.detectCurrentRepositoryWithHost();
      });
  }
  let Sd = performance.now(),
    _d = await sm({
      allowedTools: Ye,
      disallowedTools: Ze,
      baseTools: $e,
      restricted: We,
      permissionMode: go,
      allowDangerouslySkipPermissions: Ae,
      addDirs: dn,
      storageV5: me,
    }),
    wo = _d.toolPermissionContext;
  if (Jr) wo = { ...wo, ...Jr };
  let { warnings: wd, overlyBroadBashPermissions: jv } = _d;
  if (
    (recordStartupPhase("permission_context_ms", performance.now() - Sd, Sd),
    $t !== "json" &&
      $t !== "stream-json" &&
      a.CLAUDE_CODE_SESSION_KIND !== "bg")
  )
    wd.forEach(cliWarn);
  else wd.forEach((Le) => logForDebugging(`[permissions] ${stripAnsiControlCharacters(Le)}`, { level: "warn" }));
  enforceMinimumVersion();
  let Pd =
    fn && !Zs && headlessSyncsClaudeAiConnectors()
      ? getClaudeAiConfigsFetch(Me).then((Le) => {
          flushPendingCrossOrgNotice();
          let { allowed: Ve, blocked: st } = filterMcpServersByPolicy(Le ?? {});
          if (st.length > 0)
            cliWarn(
              `Warning: claude.ai MCP ${pluralize(st.length, "server")} blocked by enterprise policy: ${st.join(", ")}`,
            );
          return Ve;
        })
      : Promise.resolve({});
  if (Dr) {
    if ((kz(!0), _ae()))
      (clearPluginCache("remote thin client: synced plugin lane closes"), ELn());
  }
  logForDebugging("[STARTUP] Loading MCP configs...");
  let Ed = Date.now(),
    Sa = { value: void 0 },
    _a = (
      Ct || isSimpleMode() || Nn()
        ? Promise.resolve({ servers: {} })
        : getClaudeCodeMcpConfigs(gn, { storageV5: me, credentials: Me })
    ).then((Le) => ((Sa.value = Date.now() - Ed), Le)),
    Rd = checkHasTrustDialogAccepted(),
    Md = isWorkspacePersistedTrusted();
  if (At && At !== "text" && At !== "stream-json")
    return cliError(`Error: Invalid input format "${At}".`);
  if (At === "stream-json" && $t !== "stream-json")
    return cliError(
      "Error: --input-format=stream-json requires output-format=stream-json.",
    );
  if (At === "stream-json" && !ke())
    return cliError("Error: --input-format=stream-json requires --print.");
  {
    let Le = validateSdkUrlFlag(nn);
    if (Le !== null)
      return (
        await logEventAsync("tengu_sdk_url_host_rejected", { code: fromEnum(Le.code) }),
        cliErrorAfterAnalyticsFlush(
          `Error: --sdk-url rejected: ${Le.reason}. This flag is reserved for Remote Control worker processes connecting to Anthropic's backend.`,
        )
      );
  }
  if (nn) {
    if (At !== "stream-json" || $t !== "stream-json")
      return cliError(
        "Error: --sdk-url requires both --input-format=stream-json and --output-format=stream-json.",
      );
    if (!a.CLAUDE_CODE_REMOTE) {
      await waitForPolicyLimitsToLoad();
      let Le = policyDeniedReason("allow_remote_control", "Remote Control", "is");
      if (Le) return cliError(Le);
      if (getSettingsWithErrors().settings.disableRemoteControl === !0) return cliError(`Error: ${REMOTE_CONTROL_DISABLED_BY_POLICY_MESSAGE}`);
    }
  }
  let Kf =
    a.CLAUDE_CODE_CCR_EARLY_HYDRATE_PREFETCH && nn && I.resume
      ? import("./RemoteIO.ygjb6hdj.js").then((Le) =>
          Le.startEarlyHydrateReads(nn, me),
        )
      : void 0;
  if (I.awaitInitialize) {
    if (At !== "stream-json")
      return cliError(
        "Error: --await-initialize requires --input-format=stream-json.",
      );
    if (nn)
      return cliError("Error: --await-initialize cannot be used with --sdk-url.");
  }
  if (I.replayUserMessages) {
    if (At !== "stream-json" || $t !== "stream-json")
      return cliError(
        "Error: --replay-user-messages requires both --input-format=stream-json and --output-format=stream-json.",
      );
  }
  if (I.promptSuggestions && (!fn || $t !== "stream-json"))
    return cliError(
      "Error: --prompt-suggestions requires --print and --output-format=stream-json (prompt_suggestion messages are only surfaced in stream-json output).",
    );
  if (Fn) {
    if (!fn || $t !== "stream-json") {
      if (yn)
        return cliError(
          "Error: --include-partial-messages requires --print and --output-format=stream-json.",
        );
      Fn = !1;
    }
  }
  if (Jo) {
    if (!fn || $t !== "stream-json") {
      if (on)
        return cliError(
          "Error: --forward-subagent-text requires --print and --output-format=stream-json.",
        );
      Jo = !1;
    }
  }
  if (I.sessionPersistence === !1 && !fn)
    return cliError(
      "Error: --no-session-persistence can only be used with --print mode.",
    );
  if (I.planModeInstructions && !fn)
    return cliError(
      "Error: --plan-mode-instructions can only be used with --print mode.",
    );
  let so = await mm(w || "", At ?? "text"),
    zf = typeof so === "string" ? so : null;
  profileCheckpoint("action_after_input_prompt");
  let sr;
  if (isStructuredOutputSession({ isNonInteractiveSession: fn, isBgSession: isBgSession() }) && I.jsonSchema) {
    try {
      sr = jsonParse(I.jsonSchema);
    } catch (Le) {
      return cliError(`Error: --json-schema is not valid JSON: ${l(Le)}`);
    }
    if (typeof sr !== "object" || sr === null || Array.isArray(sr))
      return cliError("Error: --json-schema must be a JSON object");
  }
  (profileCheckpoint("action_before_setup"), logForDebugging("[STARTUP] Running setup()..."));
  let Vf = Date.now(),
    Ad = performance.now(),
    { setup: qf } = await import("../../03-入口与运行时/CLI入口-Commander/setup.sbdmcpy2.js");
  recordStartupPhase("setup_import_ms", performance.now() - Ad, Ad);
  let Id = I.messagingSocketPath,
    ii = getCwd();
  try {
    getClaudeTempDir();
  } catch (Le) {
    return (logError(Le), printCliError(l(Le)), cliErrorAfterAnalyticsFlush());
  }
  (registerBuiltinPlugins(), registerAllBundledSkills());
  let ba = !!te?.host;
  if (shouldAwaitPolicyLimitsOnStartup()) {
    let Le = performance.now();
    (await withTimeout(waitForPolicyLimitsToLoad(), POLICY_LIMITS_COLD_AWAIT_MS, "policy_limits_cold_await").then(
      () => recordPolicyLimitsStartupAwaitResult("completed"),
      () => recordPolicyLimitsStartupAwaitResult("timed_out"),
    ),
      recordStartupPhase("policy_limits_await_ms", performance.now() - Le, Le),
      profileCheckpoint("action_after_policy_limits_cold_await"));
  }
  let Yf = qf(
    ii,
    ba ? "default" : go,
    ba ? !1 : Ae,
    tt,
    et,
    Qe,
    Tt ? Xn(Tt) : void 0,
    He,
    Id,
    me,
    Me,
  );
  if (shouldFillPluginLoadWithStore(Me) && !tt && !isSimpleMode() && !isSafeMode()) loadAllPluginsCacheOnly(me, Me).catch(() => {});
  if (!tt) warmCommandSourceCaches(ii, me);
  let Dd = tt ? null : getAgentDefinitionsWithOverrides(ii, me);
  Dd?.catch(() => {});
  let Od = performance.now();
  try {
    await Yf;
  } catch (Le) {
    if (Le instanceof ud) return cliError(Le.message);
    throw Le;
  }
  (recordStartupPhase("setup_ms", performance.now() - Od, Od),
    logForDebugging(`[STARTUP] setup() completed in ${Date.now() - Vf}ms`),
    profileCheckpoint("action_after_setup"));
  let Po = B(),
    Ca = !!I.replayUserMessages;
  if (
    ((Ca = Bm({
      replayUserMessagesFlag: Ca,
      outputFormat: $t,
      explicitSocketPath: Id,
      socketBound: udsEnv.CLAUDE_CODE_MESSAGING_SOCKET !== void 0,
    })),
    ke())
  )
    (applyConfigEnvironmentVariables(), getSystemContext(Po), getUserContext(Po, me, Me), resolveModelStrings());
  let Is = I.name ? sanitizeSessionName(I.name) || void 0 : void 0;
  if (Is) (cacheSessionTitle(Is), cacheAgentName(Is));
  let Kv =
      I.model || a.ANTHROPIC_MODEL || getInitialSettings().model || a.ANTHROPIC_DEFAULT_MODEL,
    xs = I.model,
    ai = tt ? getCwd() : ii;
  if (!yr && isTelemetryEnabled() && isGrowthBookCacheEmpty())
    await zo("gb-before-tools", "growthbook_init_ms", {
      before: "before_growthbook_init",
      after: "after_growthbook_init",
    });
  if (refreshSkillsSyncEnabled()) startSkillsSyncInBackground(Po, me, Me);
  else if (Nb()) (invalidateSkillDirCaches(), pruneSyncedSkillsForClosedGate(me).catch(logError));
  if (refreshPluginsSyncEnabled()) (startPluginSyncIfNeeded(Po, Me), Rm(Po, Me, me));
  else if (HW()) prunePluginsForClosedGate().catch(logError);
  else if (isAccountPluginsSyncFlagEnabled()) completeDeferredPluginRemovals().catch(logError);
  prefetchMemoryContext(Po);
  let Fd = tt ? null : getCommands(ai, me);
  if ((Fd?.catch(() => {}), Zd() && getFeatureValue_CACHED_MAY_BE_STALE("tengu_cobalt_thicket", !0))) clampColorLevelTo256(!0);
  logForDebugging("[STARTUP] Loading commands and agents...");
  let Jf = Date.now();
  if (shouldFillPluginLoadWithStore(Me) && tt && !isSimpleMode() && !isSafeMode()) loadAllPluginsCacheOnly(me, Me).catch(() => {});
  let Ld = performance.now(),
    li = await im({
      cwd: ai,
      toolPermissionContext: wo,
      applyCoordinatorFilter: !0,
      agentsJson: Hn,
      agentSetting: Zt,
      commandsPromise: Fd,
      agentDefsPromise: Dd,
      deferCommands: am(fn),
      onToolsLoaded: () => profileCheckpoint("action_tools_loaded"),
      storageV5: me,
    });
  recordStartupPhase("tools_commands_load_ms", performance.now() - Ld, Ld);
  let { tools: ci, mainThreadAgentDefinition: hn, commands: Zr } = li,
    { agentDefinitions: pi, cliAgents: Qf, deferredCommandsPromise: Ud } = li;
  if (
    Zt &&
    !hn &&
    At !== "stream-json" &&
    Zt !== CLAUDE_AGENT.agentType &&
    !I.resume &&
    !I.continue &&
    !a.CLAUDE_BG_POST_CLEAR_RESPAWN
  ) {
    let Le = pi.activeAgents.map((Ve) => Ve.agentType).join(", ");
    return cliError(`--agent '${Zt}' not found. Available agents: ${Le || "(none)"}`);
  }
  if (
    (addStartupContext({ tool_count: ci.length, skill_count: countMatching(Zr, isSkillToolCommand) }),
    Ud?.then(
      (Le) => addStartupContext({ skill_count: countMatching(Le, isSkillToolCommand) }),
      () => {},
    ),
    loadAllPluginsCacheOnly(me, Me).then(
      (Le) => addStartupContext({ plugin_count: Le.enabled.length }),
      () => {},
    ),
    !hn &&
      isAgentSwarmsEnabled() &&
      Ot?.agentId &&
      Ot?.agentName &&
      Ot?.teamName &&
      Ot?.agentType)
  ) {
    let Le = findAgentByType(pi.activeAgents, Ot.agentType);
    if (Le) ((hn = Le), PW(Le.agentType));
    else
      logForDebugging(
        `[teammate] Custom agent ${Ot.agentType} not found in available agents`,
      );
  }
  let va = Zt ?? getSettingsAfterPluginLoad("agent");
  if (!hn && !Zt && va) ((hn = Rl(pi.activeAgents, va)), PW(hn?.agentType));
  ((wo = withDisallowedToolsDenyRules(wo, hn, "cliArg")),
    logForDebugging(`[STARTUP] Commands and agents loaded in ${Date.now() - Jf}ms`),
    profileCheckpoint("action_commands_loaded"));
  let Nd;
  if (sr) {
    let Le = buildStructuredOutputToolFromSchema(sr);
    if ("tool" in Le) {
      if (Le.unsatisfiable)
        logForDebugging(
          `--json-schema: ${formatUnsatisfiableSchemaReason(Le.unsatisfiable)}: ${Le.unsatisfiable.message}`,
          { level: "warn" },
        );
      let Ve = Le.tool;
      if (isBgSession()) {
        let st = Ve.call.bind(Ve);
        Ve = {
          ...Ve,
          async call(Wt, Dn, br, Vo, Cn) {
            let yo = await st(Wt, Dn, br, Vo, Cn),
              { stashBgStructuredResult: So } =
                await import("../自动模式-AutoMode/LINK_SCAN_MAX_BYTES.mjs9q59k.js");
            return (So(Wt), yo);
          },
        };
      }
      ((Nd = Ve),
        (ci = [...ci, Ve]),
        logEvent("tengu_structured_output_enabled", {
          schema_property_count: Object.keys(sr.properties || {}).length,
          has_required_fields: Boolean(sr.required),
        }));
    } else
      return (
        await logEventAsync("tengu_structured_output_failure", {
          error: S("Invalid JSON schema"),
        }),
        cliErrorAfterAnalyticsFlush(`Error: --json-schema is not a valid JSON Schema: ${Le.error}`)
      );
  }
  if (hn)
    logEvent("tengu_agent_flag", {
      agentType: agentTypeForAnalytics_GATE_EVALUATED(hn.agentType, isBuiltInAgent(hn)),
      ...(Zt && { source: S("cli") }),
    });
  if (hn?.agentType) saveAgentSetting(hn.agentType);
  if (fn && hn && !isBuiltInAgent(hn)) {
    let Le = hn.getSystemPrompt();
    if (Le) {
      if (hn.appendSystemPrompt)
        Gn = Gn
          ? `${Le}

${Gn}`
          : Le;
      else if (!gr) gr = Le;
    }
  }
  if (hn?.initialPrompt) {
    let Le = hn.initialPrompt;
    if (typeof so === "string")
      so = Le.includes("{{intent}}")
        ? Le.split("{{intent}}").join(so)
        : so
          ? `${Le}

${so}`
          : Le;
    else if (!so) so = Le;
  }
  let eg,
    Bd = Boolean(I.continue || I.resume || (!fn && I.fromPr) || Mr),
    ka,
    $d = !1;
  if (wf)
    try {
      let Le = await wf.getRoutineStartupModel({
        routineName: I.routine?.trim(),
        userSpecifiedModel: xs,
        agentModel: hn?.model,
        isSessionRestore: Bd,
        cwd: sn(),
        storageV5: me,
      });
      if (Le.status === "model") ka = Le.model;
      else if (Le.status === "transient_skip") $d = !0;
    } catch (Le) {
      logError(Le);
    }
  let wa = ka ?? hn?.model,
    Pa;
  if (
    ke() &&
    !a.CLAUDE_CODE_SKIP_BEDROCK_AUTH &&
    !a.CLAUDE_CODE_SKIP_VERTEX_AUTH &&
    !a.CLAUDE_CODE_SKIP_MANTLE_AUTH
  )
    try {
      let { apply3PDefaultFallbacks: Le } = await import("../模型接入-Bedrock-Vertex/apply-3p-default-fallbacks.js"),
        { lines: Ve, mantleOverride: st } = await Le({
          pendingUserModel: xs != null ? xs : wa === "inherit" ? void 0 : wa,
        });
      Pa = st;
      for (let Wt of Ve)
        process.stderr.write(`Warning: ${Wt}
`);
    } catch (Le) {
      logError(Le);
    }
  (await yf({ allowNetwork: !ke() }), await Hp({ allowNetwork: !ke() }));
  let {
    effectiveModel: jd,
    initialMainLoopModel: tg,
    resolvedInitialModel: To,
    rawModelRequest: ng,
    restrictedModel: rg,
    unservedFamilySpelling: Vv,
  } = vm({
    userSpecifiedModel: xs,
    agentModel: wa,
    agentModelSource: ka !== void 0 ? "routine" : "agent",
    routineModelTransientlySkipped: $d,
    storageV5: me,
  });
  if (Pa && (jd == null || I.model === "default")) ad(Pa);
  getModelConfig(To, Me, me);
  let sg = resolveFallbackModels({
    cli: { fallbackModel: xr },
    env: process.env,
    settings: getInitialSettings(),
  });
  {
    let Le = getSessionEffortLevel({ ...buildInitialEffortState(I.effort), mainLoopModel: To }),
      Ve = getOrgEffortCapWarning(Le, To);
    if (Ve !== null)
      if (
        $t !== "json" &&
        $t !== "stream-json" &&
        a.CLAUDE_CODE_SESSION_KIND !== "bg"
      )
        cliWarn(Ve);
      else logForDebugging(`[effort] ${Ve}`, { level: "warn" });
  }
  let fi;
  if (isAdvisorToolEnabled()) {
    let Le = I.advisor;
    if (Le) {
      if ((logForDebugging(`[AdvisorTool] --advisor ${Le}`), !baseModelSupportsAdvisor(To))) {
        if (a.CLAUDE_CODE_SESSION_KIND !== "bg")
          return cliError(
            `Error: The model "${To}" does not support the advisor tool.`,
          );
        logForDebugging(
          `[AdvisorTool] The model "${To}" does not support the advisor tool.`,
          { level: "warn" },
        );
      }
      let Ve = stripLongContextTags(parseUserSpecifiedModel(Le));
      if (!isValidAdvisorModel(Ve)) {
        let st = isAdvisorModelPendingCreditsConsent(Ve),
          Wt = st
            ? `${getAdvisorCreditsNotice(Ve)} Run /model fable${fn ? " in an interactive session" : ""} to review and enable.`
            : `Error: The model "${Le}" cannot be used as an advisor.`;
        if (a.CLAUDE_CODE_SESSION_KIND !== "bg") {
          if (st)
            return (
              await logFeatureSadAsync(
                "advisor_fable_consent",
                fn
                  ? "noninteractive_set_blocked"
                  : "interactive_launch_blocked",
              ),
              cliErrorAfterAnalyticsFlush(Wt)
            );
          return cliError(Wt);
        }
        logForDebugging(`[AdvisorTool] ${Wt}`, { level: "warn" });
      }
      if (!isAdvisorCapableForBaseModel(To, Ve)) {
        let st = `"${Le}" cannot advise "${To}" (the advisor must be at least as capable as the main model). The advisor will not be used for the main model.`;
        if (a.CLAUDE_CODE_SESSION_KIND !== "bg") cliWarn(st);
        else logForDebugging(`[AdvisorTool] ${st}`, { level: "warn" });
      }
    }
    if (((fi = Le ?? getConfiguredAdvisorModel()), fi)) logForDebugging(`[AdvisorTool] Advisor model: ${fi}`);
  }
  let Ra = fn && !Zs ? filterAllowedCustomBetas(lo) : void 0,
    Kd = Ro === null && Go === null && vo === null && !(Bd && !isModelExplicitlyConfigured());
  if (Kd) {
    let Le = Sm(To, cn, Ra),
      Ve = hm(To, cn, Ra),
      st = Le ?? Ve;
    if (st !== null)
      if (
        $t !== "json" &&
        $t !== "stream-json" &&
        a.CLAUDE_CODE_SESSION_KIND !== "bg"
      )
        cliWarn(st);
      else logForDebugging(`[autocompact] ${st}`, { level: "warn" });
  }
  if ((applyBriefModeFlag(I), !ke() && !Ox() && getInitialSettings().defaultView === "chat")) {
    let { isBriefEntitled: Le } = import.meta.require("../../01-核心基础设施/核心工具-未归类/chunk-1p3batyk.js");
    if (Le()) lZ(!0);
  }
  let Os,
    Wd = null,
    ag = hasSkipDangerousModePermissionPrompt();
  if (!fn) {
    let Le =
      (await ne.runOnboarding?.({
        session: Po,
        options: I,
        teleport: Mr,
        permissionMode: go,
        toolPermissionContext: wo,
        storedTeammateOpts: Ot,
        isSSHPending: ba,
        allowDangerouslySkipPermissions: Ae,
        commands: Zr,
        skippedChromeForAdminPolicy: Qr,
        enableClaudeInChrome: rr,
        chromeDeniedByPolicy: Ur,
        devChannels: In,
        offerClaudeInChrome: oi,
        wasTrustedBeforeSetup: Rd,
        wasPersistedTrustedBeforeSetup: Md,
        strictMcpConfig: Ct,
        mcpConfigPromise: _a,
        dynamicMcpConfig: gn,
        appendSystemPrompt: Gn,
        currentCwd: ai,
        mcpConfigResolvedMs: Sa,
        providerSetupCommand: eg,
        remoteControlOption: vt,
        remoteControl: Bt,
        projectForRemoteControl: Qs,
        mainThreadAgentDefinition: hn,
        inputPrompt: so,
        prompt: w,
        storageV5: me,
        credentials: Me,
      })) ?? cliError("Interactive session requires the runOnboarding capability");
    ((Os = { root: Le.root, getFpsMetrics: Le.getFpsMetrics, stats: Le.stats }),
      (Wd = Le.mcpApprovalSkipWarning),
      (gn = Le.dynamicMcpConfig),
      (Gn = Le.appendSystemPrompt),
      (Zr = Le.commands),
      (Bt = Le.remoteControl),
      (so = Le.inputPrompt),
      (w = Le.prompt),
      (_a = Le.mcpConfigPromise));
    let Ve = settleProvisionalStartupMode(wo);
    if (Ve !== wo) ((wo = Ve), (go = Ve.mode));
  }
  if (process.exitCode !== void 0)
    return (
      logForDebugging("Graceful shutdown initiated, skipping further initialization"),
      { kind: "exited" }
    );
  if ((initializeLspServerManager(Po, me, Me), Os)) {
    let { errors: Le } = getSettingsWithErrors(),
      Ve = Au(Le);
    if (Ve.length > 0 && (!Ru() || !ne.handleInvalidSettings)) Tu(Ve);
    else if (Ve.length > 0 && ne.handleInvalidSettings) {
      if ((await ne.handleInvalidSettings(Os.root, Ve)) === "fix") {
        let { buildSettingsFixPrompt: Wt } =
            await import("./buildSettingsFixPrompt.h2f8g4n5.js"),
          Dn = Wt(Ve, { flagSettingsPath: MA() === void 0 ? q1() : void 0 });
        if (Dn)
          so = so
            ? `${Dn}

${so}`
            : Dn;
      }
    }
  }
  let Ma = getFeatureValue_CACHED_MAY_BE_STALE("tengu_cicada_nap_ms", 0),
    gi = getGlobalConfig().startupPrefetchedAt ?? 0;
  if (!(isSimpleMode() || (Ma > 0 && Date.now() - gi < Ma))) {
    let Le =
      gi > 0 ? ` last ran ${Math.round((Date.now() - gi) / 1000)}s ago` : "";
    if (
      (logForDebugging(`Starting background startup prefetches${Le}`),
      probeQuotaStatusWithSmallModel(Me, me).catch((Ve) => logError(Ve)),
      fetchBootstrapData(me, Me),
      prefetchPassesEligibility(Me, me),
      prefetchOrgFastModeStatus(me, Me),
      Ma > 0)
    )
      saveGlobalConfig((Ve) => ({ ...Ve, startupPrefetchedAt: Date.now() }), me);
  } else {
    if (
      (logForDebugging(
        `Skipping startup prefetches, last ran ${Math.round((Date.now() - gi) / 1000)}s ago`,
      ),
      !isSimpleMode() && getAPIProvider() === "firstParty" && bootstrapFetchCanConvergeSlot() && !hasClientDataCacheSlot())
    )
      fetchBootstrapData(me, Me);
    resolveOrgFastModeStatusFromCache();
  }
  if (!fn) km(me);
  let { servers: lg } = await _a;
  if (
    (logForDebugging(
      `[STARTUP] MCP configs resolved in ${Sa.value}ms (awaited at +${Date.now() - Ed}ms)`,
    ),
    (gn = mergeAgentMcpServers(gn, hn, {
      strictMcpConfig: Ct,
      onBlocked: (Le) =>
        cliWarn(
          `Warning: agent frontmatter MCP ${pluralize(Le.length, "server")} blocked by enterprise policy: ${Le.join(", ")}`,
        ),
    })),
    Object.keys(gn).length > 0)
  )
    await awaitMcpPolicyColdStart({ hasDynamicMcpConfig: !0 });
  let { configs: zd, blocked: dg } = filterDynamicMcpServersByPolicy(gn),
    { allowed: cg, blocked: ug } = filterMcpServersByPolicy(lg),
    hi = [...dg, ...ug];
  if (hi.length > 0) {
    if (
      (logForDebugging(
        `MCP ${pluralize(hi.length, "server")} blocked by enterprise policy before prefetch: ${hi.join(", ")}`,
        { level: "warn" },
      ),
      hi.includes(CLAUDE_IN_CHROME_MCP_SERVER_NAME))
    )
      (markClaudeInChromeUnwired(),
        (Zr = Zr.filter(
          (Le) =>
            !(
              Le.name === CLAUDE_IN_CHROME_MCP_SERVER_NAME &&
              Le.type === "prompt" &&
              Le.source === "bundled"
            ),
        )));
  }
  let _i = { ...cg, ...zd },
    qd = {},
    Aa = {};
  for (let [Le, Ve] of Object.entries(_i)) {
    let st = Ve;
    if (st.type === "sdk") qd[Le] = st;
    else Aa[Le] = st;
  }
  if (a.CLAUDE_CODE_REMOTE && getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_startup_policy_seed", !0))
    wo = applyDynamicMcpServerPermissionRules(wo, zd);
  (addStartupContext({ mcp_server_count: Object.keys(_i).length }),
    profileCheckpoint("action_mcp_configs_loaded"));
  let fg = ym({
    permissionMode: go,
    dangerouslySkipPermissionsPassed: Oe ?? !1,
    modeIsBypass: go === "bypassPermissions",
    print: an ?? !1,
  });
  adoptResumedSessionId({ resume: I.resume, forkSession: I.forkSession, hasSessionIdFlag: !!Tt });
  let gg =
      Nn() && Object.keys(gn).length > 0
        ? [
            createSystemInfoMessage(
              `MCP ${pluralize(Object.keys(gn).length, "server")} from --mcp-config/agent frontmatter ignored \u2014 MCP runs in the remote workspace: ${Object.keys(gn).join(", ")}`,
              "warning",
            ),
          ]
        : [],
    yg = Promise.resolve({ clients: [], tools: [], commands: [] }),
    hg = fn
      ? Promise.resolve({ clients: [], tools: [], commands: [] })
      : Pd.then((Le) =>
          Object.keys(Le).length > 0
            ? WC(Le, me, Me)
            : { clients: [], tools: [], commands: [] },
        ),
    Sg = Promise.all([yg, hg]).then(([Le, Ve]) => ({
      clients: [...Le.clients, ...Ve.clients],
      tools: uniqBy([...Le.tools, ...Ve.tools], "name"),
      commands: uniqBy([...Le.commands, ...Ve.commands], "name"),
    }));
  applyAgentFrontmatterHooks(hn);
  let _g =
      en || Tn || kn || fn || I.continue || I.resume
        ? null
        : runLifecycleHooks(Po, {
            kind: "session-start",
            source: "startup",
            agentType: hn?.agentType,
            model: To,
            storageV5: me,
            credentials: Me,
          }),
    bg = [];
  Sg.catch(() => {});
  let Cg = [],
    vg = [],
    kg = [],
    Fo,
    Fs = !1;
  if (I.thinking === "adaptive" || I.thinking === "enabled")
    ((Fo = { type: "adaptive" }), (Fs = !0));
  else if (I.thinking === "disabled") ((Fo = { type: "disabled" }), (Fs = !0));
  else {
    let Le = process.env.MAX_THINKING_TOKENS
      ? parseConfigInteger(process.env.MAX_THINKING_TOKENS)
      : I.maxThinkingTokens;
    if (Le !== void 0) {
      if (Le > 0) ((Fo = { type: "enabled", budgetTokens: Le }), (Fs = !0));
      else if (Le === 0) ((Fo = { type: "disabled" }), (Fs = !0));
    }
  }
  Fo ??= isThinkingEnabled() ? { type: "adaptive" } : { type: "disabled" };
  let wg = Fo.type !== "disabled";
  if (Fo.type !== "disabled") {
    let Le =
      I.thinkingDisplay === "summarized" || I.thinkingDisplay === "omitted"
        ? I.thinkingDisplay
        : void 0;
    if (Le) hje(!0);
    let Ve = ke(),
      st = $t ?? "text",
      Wt = resolveThinkingDisplayMode({
        explicitDisplay: Le,
        isNonInteractive: Ve,
        outputFormat: st,
        verbose: Lt,
      });
    if (Wt) Fo.display = Wt;
    if (
      Wt === "omitted" &&
      shouldOmitThinkingDisplay({ isNonInteractive: Ve, outputFormat: st, verbose: Lt })
    )
      Fo.displayExplicit = !1;
  }
  (writeDiagnosticsEvent("info", "started", {
    version: {
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
    is_native_binary: isBunStandaloneExecutable(),
  }),
    registerCleanup(async () => {
      writeDiagnosticsEvent("info", "exited");
    }));
  let Yd = !(Ro === null && Go === null && vo === null && !Nn() && _s === null)
    ? void 0
    : Kd
      ? wm()
      : Em;
  if (
    (YC({
      host: Po.host,
      storageV5: me,
      credentials: Me,
      onAntSandboxDetection: fg.updateContext,
      hasInitialPrompt: Boolean(w),
      hasStdin: Boolean(so),
      verbose: Lt,
      debug: De,
      print: an ?? !1,
      outputFormat: $t ?? "text",
      inputFormat: At ?? "text",
      numAllowedTools: Ye.length,
      numDisallowedTools: Ze.length,
      restricted: We,
      mcpClientCount: Object.keys(_i).length,
      mcpConfigs: Nn() ? null : Object.values(_i),
      worktreeEnabled: tt,
      skipWebFetchPreflight: getInitialSettings().skipWebFetchPreflight,
      githubActionInputs: a.GITHUB_ACTION_INPUTS,
      dangerouslySkipPermissionsPassed: Oe ?? !1,
      permissionMode: go,
      proactivityLevel: Fr?.level,
      modeIsBypass: go === "bypassPermissions",
      allowDangerouslySkipPermissionsPassed: Ae,
      skipDangerousModePromptSetPreDialog: ag,
      systemPromptFlag: gr ? (I.systemPromptFile ? "file" : "flag") : void 0,
      appendSystemPromptFlag: I.appendSystemPrompt
        ? "flag"
        : I.appendSystemPromptFile
          ? "file"
          : void 0,
      thinkingConfig: Fo,
      modelProvenance: Yd,
    }),
    !Nn())
  )
    logInitialContextSize(Po, Aa, wo, me, Me);
  if (
    (logShellAllowRulesAtInit(wo.alwaysAllowRules),
    nKe(null, "initialization"),
    qC(),
    registerSession(me).then((Le) => {
      if (!Le) return;
      let Ve = K();
      (claimSessionNameAtStartup({
        sessionNameArg: Is,
        sessionNameArgSource: envSessionKind() === void 0 ? "user" : "peer",
        interactive: envSessionKind() === void 0 && !ke(),
        writeName: async (st, Wt) => {
          await updateSessionName(st, me, Wt);
        },
        onRenamed: (st, Wt) => {
          let Dn = sanitizeSessionName(st);
          if (K() !== Ve) return;
          if (Dn && titleCacheStillOn(Ve, Wt, Dn)) (cacheSessionTitle(Dn), cacheAgentName(Dn));
        },
      }),
        countConcurrentSessions(me).then((st) => {
          if (st >= 2) logEvent("tengu_concurrent_sessions", { num_sessions: st });
        }));
    }),
    isSimpleMode())
  );
  else Am({ deferToCleanup: fn, storageV5: me });
  let Pg = en || Tn ? "init" : kn ? "maintenance" : null;
  if (en)
    return (
      applyConfigEnvironmentVariables(),
      await runLifecycleHooks(Po, {
        kind: "setup",
        trigger: "init",
        forceSyncExecution: !0,
        storageV5: me,
        credentials: Me,
      }),
      await runLifecycleHooks(Po, {
        kind: "session-start",
        source: "startup",
        forceSyncExecution: !0,
        storageV5: me,
        credentials: Me,
      }),
      gracefulShutdownSync(0),
      { kind: "exited" }
    );
  let Xd = {
    allowedTools: Ye,
    appendSystemPrompt: Gn,
    appendSystemPromptCli: Cs,
    claudeaiConfigPromise: Pd,
    cliAgents: Qf,
    credentials: Me,
    currentCwd: ai,
    debug: De,
    jsonSchema: sr,
    sdkUrl: nn,
    sessionMirror: $n,
    systemPrompt: gr,
    systemPromptCli: Wr,
    thinkingConfig: Fo,
    thinkingConfigExplicit: Fs,
    thinkingEnabled: wg,
    advisorModel: fi,
    agentCli: Zt,
    agentDefinitions: pi,
    agentSetting: va,
    autoCompactWindow: cn,
    cloudAttachId: Ro,
    commands: Zr,
    correlationId: Wo,
    dangerouslySkipPermissions: Oe,
    deferredCommandsPromise: Ud,
    disableSlashCommands: It,
    dynamicMcpConfig: gn,
    earlyHydrateReads: Kf,
    effectiveForwardSubagentText: Jo,
    effectiveIncludePartialMessages: Fn,
    effectiveModel: jd,
    effectiveReplayUserMessages: Ca,
    fileDownloadPromise: Kt,
    headlessCloud: fr,
    hookMessages: bg,
    hooksPromise: _g,
    ide: to,
    initialFocusMode: rn,
    initialMainLoopModel: tg,
    inputPrompt: so,
    isNonInteractiveSession: fn,
    mainThreadAgentDefinition: hn,
    mcpApprovalSkipWarning: Wd,
    mcpClients: Cg,
    mcpCommands: kg,
    mcpConfigFlagServers: Rs,
    mcpTools: vg,
    modelCli: xs,
    modelProvenance: Yd,
    outputFormat: $t,
    permissionModeCli: at,
    permissionModeNotification: Es,
    permissionModeSuppliedOnInvocation: Lr,
    poolId: Go,
    poolOnBranch: hs,
    forwardHomeSettings: Ko,
    homeSettingsConsent: Ir,
    poolPromotedRemote: Ar,
    poolRef: mr,
    preDecorationInputPrompt: zf,
    proactivityLevel: or,
    projectBrowse: _s,
    projectForRemoteControl: Qs,
    rawModelRequest: ng,
    regularMcpConfigs: Aa,
    remote: vo,
    remoteControl: Bt,
    remoteControlName: En,
    remoteDroppedMcpMessages: gg,
    resolvedInitialModel: To,
    resolvedMaxTurns: Se,
    restrictedModel: rg,
    sdkBetas: Ra,
    sdkMcpConfigs: qd,
    session: Po,
    sessionGroupingId: ft,
    sessionNameArg: Is,
    sessionTeamContext: xe,
    setupTrigger: Pg,
    storageV5: me,
    strictMcpConfig: Ct,
    structuredOutputTool: Nd,
    teleport: Mr,
    toolPermissionContext: wo,
    tools: ci,
    userSpecifiedFallbackModel: sg,
    verbose: Lt,
    wasPersistedTrustedBeforeSetup: Md,
    wasTrustedBeforeSetup: Rd,
  };
  if (!Os) return { kind: "prepared-headless", ...Xd };
  return { kind: "prepared-interactive", ...Xd, ...Os };
}
import { realpath as ZC } from "fs/promises";
async function addTrackedRepoPath(w) {
  try {
    let I = await detectCurrentRepository();
    if (!I) {
      logForDebugging("Not in a GitHub repository, skipping path mapping update");
      return;
    }
    let O = he(),
      V = findGitRoot(O) ?? O,
      te;
    try {
      te = zn(await ZC(V));
    } catch {
      te = V;
    }
    let ne = I.toLowerCase(),
      Me = getGlobalConfig().githubRepoPaths?.[ne] ?? [];
    if (Me[0] === te) {
      logForDebugging(`Path ${te} already tracked for repo ${ne}`);
      return;
    }
    let Se = Me.filter((De) => De !== te),
      xe = [te, ...Se];
    (await saveGlobalConfig(
      (De) => ({ ...De, githubRepoPaths: { ...De.githubRepoPaths, [ne]: xe } }),
      w,
    ),
      logForDebugging(`Added ${te} to tracked paths for repo ${ne}`));
  } catch (I) {
    logForDebugging(`Error updating repo path mapping: ${I}`);
  }
}
function getTrackedRepoPaths(w) {
  let I = getGlobalConfig(),
    O = w.toLowerCase();
  return I.githubRepoPaths?.[O] ?? [];
}
async function filterExistingRepoPaths(w) {
  let I = await Promise.all(w.map(pathExists));
  return w.filter((O, U) => I[U]);
}
async function doesDirectoryRemoteMatchRepo(w, I) {
  try {
    let O = await getRemoteUrlForDir(w);
    if (!O) return !1;
    let U = parseGitHubRepository(O);
    if (!U) return !1;
    return U.toLowerCase() === I.toLowerCase();
  } catch {
    return !1;
  }
}
function removeTrackedRepoPath(w, I, O) {
  let U = getGlobalConfig(),
    V = w.toLowerCase(),
    te = U.githubRepoPaths?.[V] ?? [],
    ne = te.filter((Me) => Me !== I);
  if (ne.length === te.length) return;
  let me = { ...U.githubRepoPaths };
  if (ne.length === 0) delete me[V];
  else me[V] = ne;
  (saveGlobalConfig((Me) => ({ ...Me, githubRepoPaths: me }), O),
    logForDebugging(`Removed ${I} from tracked paths for repo ${V}`));
}
function createChecklistState(w) {
  return {
    steps: [
      { id: "check", status: "running", startedAt: w },
      { id: "create", status: "pending" },
    ],
    rerouted: !1,
    folder: !1,
    bundle: null,
    fallback: null,
    requestSent: !1,
  };
}
function reduceChecklistState(w, I, O) {
  switch (I.kind) {
    case "checking":
      return I.folder === !0 && !w.folder ? { ...w, folder: !0 } : w;
    case "bundling": {
      if (
        w.fallback !== null ||
        w.steps.some((V) => V.id === "bundle") ||
        !w.steps.some((V) => V.id === "create" && V.status === "pending")
      )
        return w;
      let U = fs(w, "check", "completed", O);
      return {
        ...U,
        steps: U.steps.flatMap((V) =>
          V.id === "create"
            ? [
                { id: "bundle", status: "running", startedAt: O },
                { id: "upload", status: "pending" },
                V,
              ]
            : [V],
        ),
        rerouted: I.rerouted,
        folder: I.folder === !0,
      };
    }
    case "bundled": {
      let U = fs(w, "bundle", "completed", O);
      return U === w
        ? w
        : {
            ...Ef(U, "upload", O),
            bundle: { sizeBytes: I.sizeBytes, scope: I.scope },
          };
    }
    case "bundle_failed": {
      let U = w.steps.find(
        (te) =>
          te.status === "running" && (te.id === "bundle" || te.id === "upload"),
      );
      if (U === void 0 && w.fallback !== null) return w;
      let V = U === void 0 ? w : fs(w, U.id, "failed", O);
      return {
        ...V,
        steps: V.steps.filter(
          (te) => !(te.id === "upload" && te.status === "pending"),
        ),
        fallback: I.fallback,
      };
    }
    case "creating":
      return Ef(
        fs(fs(w, "check", "completed", O), "upload", "completed", O),
        "create",
        O,
      );
    case "request_sent":
      return w.requestSent ? w : { ...w, requestSent: !0 };
    case "created":
      return fs(w, "create", "completed", O);
  }
}
function fs(w, I, O, U) {
  return w.steps.some((V) => V.id === I && V.status === "running")
    ? {
        ...w,
        steps: w.steps.map((V) =>
          V.id === I && V.status === "running"
            ? { ...V, status: O, completedAt: U }
            : V,
        ),
      }
    : w;
}
function Ef(w, I, O) {
  return w.steps.some((U) => U.id === I && U.status === "pending")
    ? {
        ...w,
        steps: w.steps.map((U) =>
          U.id === I && U.status === "pending"
            ? { ...U, status: "running", startedAt: O }
            : U,
        ),
      }
    : w;
}
function getChecklistPhase(w) {
  let I = w.steps.findLast((O) => O.status !== "pending");
  switch (I?.id) {
    case void 0:
    case "check":
      return "checking";
    case "bundle":
      return "bundling";
    case "upload":
      return "uploading";
    case "create":
      return I.status === "completed" ? "created" : "creating";
  }
}
var ev = {
  all: "with history",
  current_branch: "current branch only",
  head: "current history only",
  squashed: "snapshot without history",
};
function buildChecklistStepDisplay(w, I, O) {
  return {
    label: tv(w, I),
    annotation: `${nv(w, I)}${formatBootstrapStepDuration(w, O)}`,
    detail:
      w.status === "failed" && I.fallback !== null
        ? `${capitalize(describeBundleFailure(I.fallback))}; starting from the tip of the branch on its remote rather than your checkout's commit, and file sync is off for this session`
        : void 0,
  };
}
function tv(w, { rerouted: I, folder: O }) {
  let U = w.status === "completed";
  switch (w.id) {
    case "check":
      if (O) return U ? "Checked this folder" : "Checking this folder";
      return U ? "Checked this checkout" : "Checking this checkout";
    case "bundle":
      if (O) return U ? "Packaged this folder" : "Packaging this folder";
      if (I) return U ? "Packaged local changes" : "Packaging local changes";
      return U ? "Packaged this repository" : "Packaging this repository";
    case "upload":
      if (O) return U ? "Uploaded this folder" : "Uploading this folder";
      if (I)
        return U ? "Uploaded your working tree" : "Uploading your working tree";
      return U ? "Uploaded this repository" : "Uploading this repository";
    case "create":
      return U ? "Created cloud session" : "Creating cloud session";
  }
}
function nv(w, { bundle: I, folder: O }) {
  if (I === null || (w.status !== "running" && w.status !== "completed"))
    return "";
  let U = formatFileSize(I.sizeBytes);
  switch (w.id) {
    case "bundle":
      return w.status === "completed"
        ? O
          ? ` \xB7 ${U}`
          : ` \xB7 ${U}, ${ev[I.scope]}`
        : "";
    case "upload":
      return w.status === "completed" ? ` \xB7 ${U}` : ` ${U}`;
    case "check":
    case "create":
      return "";
  }
}
function getChecklistHeaderLabel(w) {
  let I = formatRemoteSessionModeLabel("new");
  return getChecklistPhase(w) === "created"
    ? I.replace(/^Setting up/, "Set up")
    : `${I}\u2026`;
}
function getChecklistCancelMessage(w) {
  return w !== null && w.requestSent
    ? "Cancelled after the create request was sent, so a cloud session may still have been created"
    : "Cancelled before a cloud session was created";
}
function Xo() {
  return import.meta.require("../MCP客户端/mcpClientModule.4cyej0np.js").mcpClientModule();
}
function Af(w) {
  try {
    return Xo();
  } catch (I) {
    (logError(I), logForDebugging(`[MCP] ${w} connect error: ${I}`));
    return;
  }
}
var MCP_CONFIG_FETCH_DEADLINE_MS = 1000,
  MCP_RETRY_BACKOFF_MS = [500, 1500, 4000];
function createMcpConnectionManager(w) {
  let {
      regularMcpConfigs: I,
      claudeaiConfigPromise: O,
      state: U,
      storageV5: V,
      credentials: te,
    } = w,
    ne = getIdentityEpoch(),
    me = a.MCP_CONNECTION_NONBLOCKING !== !1;
  dOn(me);
  let Me = me,
    Se = pickBy(I, (Ae) => Ae.alwaysLoad === !0),
    xe = pickBy(I, (Ae) => Ae.alwaysLoad !== !0),
    De = Object.keys(Se).length > 0;
  async function Oe() {
    (profileCheckpoint("before_mcp_connect_user"), profileCheckpoint("before_mcp_connect_connector"));
    let Ae = Promise.all([
        ...(De
          ? [
              id(
                !1,
                () => pa(Se, "regular-required", U, !1, V, te),
                "--mcp-config alwaysLoad servers",
              ),
            ]
          : []),
        id(me, () => pa(xe, "regular", U, Me, V, te), "--mcp-config servers"),
      ]).then(() => profileCheckpoint("after_mcp_connect_user")),
      $e = id(
        me,
        () =>
          O.then((We) =>
            Tf({
              claudeaiConfigs: We,
              regularMcpConfigs: I,
              state: U,
              deferConnect: Me,
              storageV5: V,
              epoch: ne,
            }),
          ).then((We) => (We === "superseded" ? [] : We)),
        "claude.ai connectors",
      ).then(() => profileCheckpoint("after_mcp_connect_connector"));
    await Promise.all([Ae, $e]);
  }
  return { connect: Oe };
}
function pa(w, I, O, U = !1, V, te) {
  let ne = Object.keys(w);
  if (ne.length === 0) return [];
  O.applyMcpUpdate((xe) => ({
    ...xe,
    clients: [
      ...xe.clients,
      ...Object.entries(w).map(([De, Oe]) => ({
        name: De,
        type: "pending",
        config: Oe,
      })),
    ],
  }));
  let me = new Map(),
    Me = ne.map((xe) => new Promise((De) => me.set(xe, De))),
    Se = () => {
      let xe = Af(I);
      if (!xe) {
        for (let De of me.values()) De();
        return;
      }
      xe.getMcpToolsCommandsAndResources(
        (De) => {
          (applyMcpConnectionResult(O, De), flushPendingScopeExpansionNotice(), me.get(De.client.name)?.());
        },
        w,
        V,
        te,
      )
        .catch((De) => logForDebugging(`[MCP] ${I} connect error: ${De}`))
        .finally(() => {
          for (let De of me.values()) De();
          retryFailedMcpConnections(w, O, V).catch((De) => logForDebugging(`[MCP] ${I} retry error: ${De}`));
        });
    };
  if (U) setImmediate(Se);
  else Se();
  return Me;
}
function applyMcpConnectionResult(w, I) {
  let { client: O, tools: U, commands: V, attemptEpoch: te } = I,
    ne,
    me = "applied",
    Me = isRemoteTransportWithStaleIdentity(O.config, te);
  return (
    w.applyMcpUpdate((Se) => {
      ((me = "applied"), (ne = void 0));
      let xe = Se.clients.find((Oe) => Oe.name === O.name);
      if (!xe || !Xo().areMcpConfigsEqual(xe.config, O.config)) {
        if (O.type === "connected")
          (logMCPDebug(
            O.name,
            xe
              ? "applyConnectionResult: disposing orphaned connect (slot config changed mid-flight)"
              : "applyConnectionResult: disposing orphaned connect (slot removed mid-flight)",
          ),
            (ne = () => dd(O)));
        return ((me = "dropped"), Se);
      }
      if (Me) {
        if (
          (logMCPDebug(
            O.name,
            "applyConnectionResult: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)",
          ),
          O.type === "connected")
        )
          ne = () => {
            Xo()
              .detachAndCloseConnection(O)
              .catch(() => {});
          };
        return ((me = "superseded"), Se);
      }
      let De =
        isDiscoveryCacheEnabled() && O.type !== "failed" && O.type !== "disabled"
          ? mcpDialBlockCause(O.name, O.config)
          : null;
      if (
        isDiscoveryCacheEnabled() &&
        De !== "managed-policy" &&
        isMcpServerDisabled(O.name) &&
        O.type !== "disabled"
      ) {
        let Oe =
          O.type === "connected" &&
          xe.type === "connected" &&
          xe.client === O.client;
        if (O.type === "connected" && !Oe)
          (logMCPDebug(
            O.name,
            "applyConnectionResult: disposing connect that settled after a disable",
          ),
            (ne = () => dd(O)));
        if (
          ((me = "refused"),
          xe.type === "disabled" || (xe.type === "connected" && isConnectedMcpServer(O)))
        )
          return Se;
        return Rf(Se, { name: O.name, type: "disabled", config: xe.config });
      }
      if (De) {
        if (O.type === "connected")
          logMCPDebug(
            O.name,
            `applyConnectionResult: disposing connect that settled after a ${De} deny`,
          );
        return (
          (ne = () => {
            if (O.type === "connected") dd(O);
            Xo()
              .dropDiscoveryEntry(O.name, O.config)
              .catch(() => {});
          }),
          (me = "refused"),
          Rf(Se, { name: O.name, type: "failed", config: xe.config, ...getBlockedServerErrorFields(De) })
        );
      }
      if (!shouldRefetchMcpServer(xe, O)) return ((me = "dropped"), Se);
      return {
        ...Se,
        clients: Se.clients.map((Oe) => (Oe.name === O.name ? O : Oe)),
        tools: uniqBy([...Se.tools, ...U], "name"),
        commands: uniqBy([...Se.commands, ...V], "name"),
      };
    }),
    ne?.(),
    me
  );
}
function getRetryableMcpFailures(w, I) {
  let O = I.getClients();
  return Object.entries(w).filter(([U, V]) => {
    let te = O.find((ne) => ne.name === U);
    return te !== void 0 && isRetryableMcpFailure(te) && Xo().areMcpConfigsEqual(te.config, V);
  });
}
async function retryFailedMcpConnections(w, I, O, U = (V) => applyMcpConnectionResult(I, V)) {
  let V = () => getRetryableMcpFailures(w, I);
  if (V().length === 0) return;
  let te = getIdentityEpoch();
  for (let me of MCP_RETRY_BACKOFF_MS) {
    if ((await sleep(me), getIdentityEpoch() !== te)) {
      logForDebugging(
        "[MCP] Retry: identity changed during backoff, stopping (these rows belong to the previous account)",
      );
      return;
    }
    let Me = V();
    if (Me.length === 0) {
      logForDebugging("[MCP] Retry: all remote servers recovered, stopping");
      return;
    }
    logForDebugging(
      `[MCP] Retry: ${Me.length} transiently-failed remote server(s) after ${me}ms backoff`,
    );
    let Se = [];
    for (let xe of Me) {
      if (!(await Xo().discardMemoizedConnectResult(...xe))) continue;
      let [De, Oe] = xe,
        Ae = mcpDialBlockCause(De, Oe);
      if (Ae) {
        U({
          client: { name: De, type: "failed", config: Oe, ...getBlockedServerErrorFields(Ae) },
          tools: [],
          commands: [],
          attemptEpoch: te,
        });
        continue;
      }
      Se.push(xe);
    }
    if (Se.length === 0) continue;
    await Xo().getMcpToolsCommandsAndResources(U, Object.fromEntries(Se), O);
  }
  let ne = V();
  if (ne.length > 0)
    logForDebugging(
      `[MCP] Retry: ${ne.length} remote server(s) still failed after all retries: ${ne.map(([me]) => me).join(", ")}`,
    );
}
async function id(w, I, O) {
  if (w) {
    (Promise.resolve(I()).catch(() => {}),
      logForDebugging(`[MCP] ${O} running fully async (nonblocking)`));
    return;
  }
  let U = I(),
    V = Date.now(),
    te;
  if (Array.isArray(U)) te = U;
  else {
    let xe,
      De = await Promise.race([
        U,
        new Promise((Oe) => {
          xe = setTimeout((Ae) => Ae("deadline"), MCP_CONFIG_FETCH_DEADLINE_MS, Oe);
        }),
      ]);
    if ((clearTimeout(xe), De === "deadline")) {
      (U.catch(() => {}),
        logForDebugging(
          `[MCP] ${O} config fetch not ready after ${MCP_CONFIG_FETCH_DEADLINE_MS}ms \u2014 proceeding; background connection continues`,
        ));
      return;
    }
    te = De;
  }
  let ne = getMcpConnectTimeoutMs(),
    me = Math.max(0, ne - (Date.now() - V));
  if (te.length === 0) return;
  let Me = Af(O);
  if (!Me) return;
  let Se = await Me.awaitEachWithDeadline(te, me);
  if (Se > 0)
    logForDebugging(
      `[MCP] ${O}: ${Se}/${te.length} not ready after ${ne}ms \u2014 proceeding; background connection continues`,
    );
}
function remountClaudeAiConnectors(w, I, O) {
  (resetClaudeAiConfigsFetch(), clearClaudeAiConnectedThisSession());
  let U = getIdentityEpoch(),
    V = (async () => {
      let te = await getClaudeAiConfigsFetch(O);
      if (!isCurrentIdentityEpoch(U)) return cd("list fetch");
      let { allowed: ne, blocked: me } = filterMcpServersByPolicy(te);
      if ((flushPendingCrossOrgNotice(), me.length > 0))
        logForDebugging(
          `[MCP] claude.ai connectors blocked by enterprise policy after account switch: ${me.join(", ")}`,
        );
      let Me = await ov(w, I),
        Se = Object.fromEntries([
          ...Object.entries(Me),
          ...w
            .getClients()
            .filter((xe) => xe.config.scope !== "claudeai")
            .map((xe) => [xe.name, xe.config]),
        ]);
      return Tf({
        claudeaiConfigs: ne,
        regularMcpConfigs: Se,
        state: w,
        deferConnect: !1,
        storageV5: I,
        epoch: U,
        restorablePlugins: Me,
      });
    })();
  return {
    mounted: V.then((te) => (te === "superseded" ? te : "mounted")),
    settled: V.then((te) => (te === "superseded" ? [] : Promise.all(te))).then(
      () => {},
    ),
  };
}
function cd(w) {
  return (
    logForDebugging(
      `[MCP] claude.ai connector list superseded by an account switch (${w}) \u2014 not mounting`,
    ),
    "superseded"
  );
}
async function Tf(w) {
  if (!isCurrentIdentityEpoch(w.epoch)) return cd("list fetch");
  let I = await iv(w);
  if (!isCurrentIdentityEpoch(w.epoch)) return cd("dedup");
  return [
    ...sv(w.restorablePlugins ?? {}, I.suppressedPlugins, w.state, w.storageV5),
    ...lv(I, w.state, w.deferConnect, w.storageV5),
  ];
}
async function ov(w, I) {
  let O = w.getSuppressedPluginServers();
  if (O.length === 0) return {};
  let { servers: U } = await getClaudeCodeMcpConfigs({}, { storageV5: I }),
    V = {},
    te = new Set();
  for (let ne of O) {
    let me = U[ne];
    if (me && me.pluginSource !== void 0) V[ne] = me;
    else te.add(ne);
  }
  if (te.size > 0)
    (logForDebugging(
      `[MCP] Dropping ${te.size} suppressed plugin server(s) whose plugin is no longer installed/enabled: ${[...te].join(", ")}`,
    ),
      w.applyMcpUpdate((ne) => ({
        ...ne,
        suppressedPluginMcpServers: (
          ne.suppressedPluginMcpServers ?? []
        ).filter((me) => !te.has(me)),
      })));
  return V;
}
function sv(w, I, O, U) {
  let V = new Set(O.getClients().map((Me) => Me.name)),
    te = new Set(),
    ne = {};
  for (let [Me, Se] of Object.entries(w)) {
    if (I.has(Me)) continue;
    if ((te.add(Me), !V.has(Me))) ne[Me] = Se;
  }
  if (te.size === 0) return [];
  O.applyMcpUpdate((Me) => ({
    ...Me,
    suppressedPluginMcpServers: (Me.suppressedPluginMcpServers ?? []).filter(
      (Se) => !te.has(Se),
    ),
  }));
  let me = Object.keys(ne);
  if (me.length > 0)
    logForDebugging(
      `[MCP] Restoring ${me.length} plugin server(s) no longer duplicated by claude.ai connectors after account switch: ${me.join(", ")}`,
    );
  return pa(ne, "plugin-restore", O, !1, U);
}
async function iv(w) {
  let { claudeaiConfigs: I, regularMcpConfigs: O, state: U } = w,
    V = new Set();
  if (Object.keys(I).length > 0) {
    let ne = new Set();
    for (let me of Object.values(I)) {
      let Me = getMcpServerSignature(me);
      if (Me) ne.add(Me);
    }
    for (let [me, Me] of Object.entries(O)) {
      if (!me.startsWith("plugin:")) continue;
      let Se = getMcpServerSignature(Me);
      if (Se && ne.has(Se)) V.add(me);
    }
    if (V.size > 0) {
      logForDebugging(
        `[MCP] Lazy dedup: suppressing ${V.size} plugin server(s) that duplicate claude.ai connectors: ${[...V].join(", ")}`,
      );
      for (let me of U.getClients()) {
        if (!V.has(me.name) || !(isConnectedMcpServer(me) || me.type === "pending")) continue;
        if (me.type === "connected")
          (setMcpClientOnClose(me, void 0),
            Xo()
              .clearServerCache(me.name, me.config)
              .catch(() => {}));
        else Xo().disposeServerConnectionDetached(me.name, me.config);
      }
      U.applyMcpUpdate((me) => {
        let { clients: Me, tools: Se, commands: xe, resources: De } = me;
        ((Me = Me.filter((Ae) => !V.has(Ae.name))),
          (Se = Se.filter(
            (Ae) => !Ae.mcpInfo || !V.has(Ae.mcpInfo.serverName),
          )));
        for (let Ae of V) ((xe = removeMcpServerCommands(xe, Ae)), (De = omitKey(De, Ae)));
        let Oe = [
          ...(me.suppressedPluginMcpServers ?? []).filter((Ae) => !V.has(Ae)),
          ...V,
        ];
        return {
          ...me,
          clients: Me,
          tools: Se,
          commands: xe,
          resources: De,
          suppressedPluginMcpServers: Oe,
        };
      });
    }
  }
  let te = pickBy(O, (ne, me) => !me.startsWith("plugin:"));
  return { ...(await dedupClaudeAiMcpServers(I, te)), suppressedPlugins: V };
}
function lv({ servers: w, suppressed: I }, O, U, V) {
  return (
    O.applyMcpUpdate((te) =>
      suppressedConnectorsEqual(te.suppressedClaudeAiConnectors ?? [], I)
        ? te
        : { ...te, suppressedClaudeAiConnectors: I },
    ),
    pa(w, "claudeai", O, U, V)
  );
}
function Rf(w, I) {
  let O = getMcpToolPrefix(I.name);
  return {
    ...w,
    clients: w.clients.map((U) => (U.name === I.name ? I : U)),
    tools: filterCollection(w.tools, (U) => isToolFromMcpServer(U, I.name, O)),
    commands: filterCollection(w.commands, (U) => isMcpServerScopedName(U, I.name)),
    resources: omitObjectKeys(w.resources, I.name),
    resourceTemplates: omitObjectKeys(w.resourceTemplates, I.name),
  };
}
function dd(w) {
  if (isDiscoveryCacheEnabled()) setMcpClientOnClose(w, void 0);
  (w.cleanup().catch(() => {}),
    Xo()
      .clearServerCache(w.name, w.config)
      .catch(() => {}));
}
var Ho = { treat: "client" },
  oo = { treat: "create" },
  Jn = { treat: "ignore", kind: "lost" };
function Rr(w) {
  return { treat: "ignore", kind: "lost", why: w };
}
var Js = { treat: "ignore", kind: "preference" },
  dv = { treat: "ignore", kind: "kept" },
  Sn = { treat: "moot" };
function eo(w, I) {
  return { treat: "refuse", group: w, naming: I };
}
var ga = eo("bypass", "bypass"),
  If = {
    debug: Ho,
    debugFile: Ho,
    debugToStderr: Ho,
    verbose: Ho,
    inputFormat: Ho,
    awaitInitialize: Sn,
    outputFormat: Ho,
    includePartialMessages: Ho,
    replayUserMessages: Ho,
    settingSources: ({ settingSources: w }) =>
      hv(w)
        ? Ho
        : Rr("the cloud session loads the repository's settings regardless"),
    permissionPromptTool: ({ permissionPromptTool: w }) =>
      w === "stdio"
        ? Ho
        : eo(
            "unsupported",
            "--permission-prompt-tool (permission prompts reach the host over stdio; an MCP tool cannot answer them here)",
          ),
    permissionPrompts: ({ permissionPrompts: w }) =>
      isPermissionPromptsDisabled(w)
        ? eo(
            "unsupported",
            "--permission-prompts none (turning permission prompts off is not supported for a cloud session yet; they reach the host over stdio)",
          )
        : Sn,
    model: oo,
    name: oo,
    effort: oo,
    fallbackModel: oo,
    maxBudgetUsd: (w, { entry: I }) =>
      I === "attach"
        ? Rr(
            "an existing session keeps the budget it was created with, if any; none from this invocation is enforced",
          )
        : oo,
    allowedTools: oo,
    systemPrompt: oo,
    systemPromptFile: oo,
    appendSystemPrompt: oo,
    appendSystemPromptFile: oo,
    appendSubagentSystemPrompt: oo,
    appendSubagentSystemPromptFile: oo,
    thinking: oo,
    thinkingDisplay: oo,
    maxThinkingTokens: oo,
    permissionMode: ({ permissionMode: w }, { entry: I }) =>
      w === "bypassPermissions" ? ga : I === "attach" ? Ho : oo,
    proactivity: oo,
    inheritPermissionMode: ({ inheritPermissionMode: w }) =>
      w === "bypassPermissions"
        ? ga
        : Rr(
            "the cloud session resolves its permission mode from the repository's settings",
          ),
    dangerouslySkipPermissions: ga,
    disallowedTools: eo("tool_restriction", "--disallowed-tools"),
    tools: ({ tools: w }) =>
      Sv(w ?? []) ? Sn : eo("tool_restriction", "--tools"),
    agent: ({ agents: w, agent: I }, { selectedAgentDefinition: O }) =>
      Ev(w, I, O),
    agents: ({ agents: w }) => Rv(w),
    settings: ({ settings: w, permissionMode: I }, { flagSettings: O }) =>
      xf("settings", wv(w, O, getSelectablePermissionMode(I) !== void 0)),
    managedSettings: ({ managedSettings: w, permissionMode: I }) =>
      xf("managed-settings", Pv(w, getSelectablePermissionMode(I) !== void 0)),
    mcpConfig: (w, { mcpConfigFlagServers: I }) => Av(I),
    jsonSchema: eo("unsupported", `--json-schema (${JSON_SCHEMA_UNSUPPORTED_REASON})`),
    bare: eo(
      "unsupported",
      "--bare (a cloud session signs in with this machine's claude.ai login, which --bare turns off)",
    ),
    addDir: Jn,
    betas: Jn,
    chrome: Jn,
    disableSlashCommands: eo("tool_restriction", "--disable-slash-commands"),
    enableAuthStatus: Js,
    excludeDynamicSystemPromptSections: Js,
    file: Jn,
    forwardSubagentText: Jn,
    ide: Js,
    includeHookEvents: Jn,
    init: Jn,
    maintenance: Jn,
    maxTurns: Rr("no turn limit is enforced in a cloud session yet"),
    planModeInstructions: Jn,
    systemPromptSnapshot: Jn,
    pluginDir: Jn,
    pluginDirNoMcp: Jn,
    pluginUrl: Jn,
    promptSuggestions: Js,
    restricted: eo("tool_restriction", "--restricted"),
    safeMode: eo("tool_restriction", "--safe-mode"),
    sessionId: Rr("frames carry the cloud worker's session id"),
    sessionMirror: Jn,
    strictMcpConfig: eo("tool_restriction", "--strict-mcp-config"),
    taskBudget: Rr("no task budget is enforced in a cloud session yet"),
    watchArtifact: Jn,
    workload: Js,
    print: Sn,
    initOnly: Sn,
    continue: Sn,
    resume: Sn,
    forkSession: Sn,
    fromPr: Sn,
    resumeSessionAt: Sn,
    resumeDropsTurn: Sn,
    replyOnResume: Sn,
    rewindFiles: Sn,
    sessionPersistence: Sn,
    prefill: Sn,
    prefillB64: Sn,
    deepLinkOrigin: Sn,
    deepLinkRepo: Sn,
    deepLinkLastFetch: Sn,
    deepLinkCwdB64: Sn,
    watchArtifactNoAutoreact: Sn,
    allowDangerouslySkipPermissions: Sn,
    routine: Rr("a cloud session does not activate the routine"),
  },
  cv =
    "Error: a cloud session cannot bypass permissions; drop --dangerously-skip-permissions / --permission-mode bypassPermissions / a settings defaultMode of bypassPermissions.",
  uv =
    "Error: in-process SDK MCP servers cannot apply to a cloud-hosted session, where the agent runs in the cloud container; remove them from --mcp-config: ",
  pv =
    "Error: a cloud session does not enforce tool restrictions yet, so they are refused rather than silently dropped; start it without ",
  fv =
    "Error: a cloud session cannot honor these options yet, so they are refused rather than silently dropped; start it without ",
  gv = ["bypass", "tool_restriction", "sdk_mcp", "unsupported"];
function yv(w, I) {
  switch (w) {
    case "bypass":
      return cv;
    case "sdk_mcp":
      return uv + I.join(", ");
    case "tool_restriction":
      return `${pv}${I.join(", ")}.`;
    case "unsupported":
      return `${fv}${I.join(", ")}.`;
  }
}
function hv(w) {
  let I = new Set((w ?? "").split(",").map((O) => O.trim()));
  return ["user", "project", "local"].every((O) => I.has(O));
}
function Sv(w) {
  return w.join(" ").trim().toLowerCase() === "default";
}
var _v = new Set([
    "allowedMcpServers",
    "allowedHttpHookUrls",
    "httpHookAllowedEnvVars",
    "availableModels",
  ]),
  bv = new Set(["deniedMcpServers", "disabledMcpjsonServers", "autoMode"]),
  Cv = new Set([
    "disableAllHooks",
    "disableClaudeAiConnectors",
    "strictPluginOnlyCustomization",
    "disableCommandPluginSources",
    "disableSkillShellExecution",
    "disableBundledSkills",
    "enforceAvailableModels",
  ]);
function vv(w, I) {
  if (_v.has(w)) return Array.isArray(I);
  if (bv.has(w)) return ya(I);
  if (Cv.has(w) || /^allowManaged\w*Only$/.test(w))
    return I === !0 || (Array.isArray(I) && I.length > 0);
  if (w === "syncClaudeAiSkills" || w === "syncClaudeAiPlugins")
    return I === !1;
  return w === "disableAutoMode" && I === "disable";
}
function kv(w) {
  if (typeof w !== "object" || w === null) return ["permissions"];
  return Object.entries(w).flatMap(([I, O]) =>
    (I === "deny" || I === "ask") && ya(O)
      ? [`permissions.${I}`]
      : I === "disableAutoMode" && O === "disable"
        ? ["permissions.disableAutoMode"]
        : I === "blockReadsOutsideWorkingDirectories" && O === !0
          ? ["permissions.blockReadsOutsideWorkingDirectories"]
          : [],
  );
}
function pd(w, I) {
  let O = w,
    V = O.permissions?.defaultMode;
  if (V === "bypassPermissions") return { kind: "bypass" };
  let te = !I && (V === "plan" || V === "dontAsk") ? V : void 0,
    ne = Object.keys(O);
  if (ne.length === 0) return;
  let me = ne.flatMap((Me) =>
    Me === "permissions"
      ? [...kv(O.permissions), ...(te ? ["permissions.defaultMode"] : [])]
      : Me === "hooks"
        ? hasNonEmptyArrayValues(O.hooks)
          ? ["hooks"]
          : []
        : vv(Me, O[Me])
          ? [Me]
          : [],
  );
  return me.length > 0
    ? { kind: "restricts", keys: me, narrowingDefaultMode: te }
    : { kind: "benign", keys: ne };
}
function wv(w, I, O) {
  let U = w?.trim();
  if (!U) return;
  if (I) return pd(I, O);
  if (!(U.startsWith("{") && U.endsWith("}"))) return { kind: "unloadable" };
  let V = xt(U, !1);
  return typeof V === "object" && V !== null
    ? pd(V, O)
    : { kind: "unreadable" };
}
function Pv(w, I) {
  let O = w?.trim();
  if (!O) return;
  let U = xt(O, !1);
  return typeof U === "object" && U !== null && !Array.isArray(U)
    ? pd(U, I)
    : { kind: "unreadable" };
}
function xf(w, I) {
  switch (I?.kind) {
    case "bypass":
      return ga;
    case "restricts":
      return w === "managed-settings"
        ? Rr(`its ${fd(I.keys)} are not enforced in the cloud session`)
        : eo(
            "tool_restriction",
            `--${w} (its ${fd(I.keys)}${I.narrowingDefaultMode ? `; --permission-mode ${I.narrowingDefaultMode} asks for that mode` : ""})`,
          );
    case "unreadable":
      return eo(
        "tool_restriction",
        `--${w} (its JSON could not be read to check it for tool restrictions)`,
      );
    case "unloadable":
      return eo(
        "tool_restriction",
        `--${w} (it could not be loaded as settings, so it cannot be checked for tool restrictions)`,
      );
    case "benign":
      return {
        treat: "ignore",
        kind: "preference",
        settingsKeys: I.keys.map((O) => `${w}.${O}`),
      };
    case void 0:
      return Sn;
  }
}
function Ev(w, I, O) {
  let U = Mv(w, I),
    V =
      U === "unreadable" || O === void 0
        ? U
        : O === null
          ? void 0
          : isRestrictiveAgentDefinition(O)
            ? "restricts_resolved"
            : void 0;
  if (V === void 0) return Jn;
  let te = formatDisplayText(I ?? "", 64);
  return eo(
    "tool_restriction",
    V === "unreadable"
      ? `--agent ${te} (its --agents value could not be read to check it for tool restrictions)`
      : V === "invisible"
        ? `--agent ${te} (its definition is not in --agents, so its tool lists and hooks cannot be checked here)`
        : V === "restricts_resolved"
          ? `--agent ${te} (its definition lists tools or hooks, or sets a permission mode)`
          : `--agent ${te} (its tool lists, hooks or permission mode in --agents)`,
  );
}
function Rv(w) {
  let I = w?.trim();
  if (!I) return Sn;
  let O = xt(I, !1);
  if (typeof O !== "object" || O === null || Array.isArray(O))
    return eo(
      "tool_restriction",
      "--agents (its value could not be read to check it for tool restrictions)",
    );
  let U = Object.entries(O)
    .filter(([, V]) => isRestrictiveAgentDefinition(V))
    .map(([V]) => formatDisplayText(V, 64));
  return U.length > 0
    ? eo(
        "tool_restriction",
        `--agents (tool lists, hooks or a permission mode in: ${fd(U)})`,
      )
    : Jn;
}
function Mv(w, I) {
  if (!I) return;
  if (!w) return "invisible";
  let O = xt(w, !1);
  if (typeof O !== "object" || O === null) return "unreadable";
  let U = O,
    V = Object.hasOwn(U, I)
      ? [I]
      : Object.keys(U).filter((te) => te.endsWith(`:${I}`));
  if (V.length === 0) return "invisible";
  return V.some((te) => isRestrictiveAgentDefinition(U[te])) ? "restricts" : void 0;
}
function Av(w) {
  let I = Object.entries(w ?? {}),
    O = I.filter(([, U]) => U.type === "sdk").map(([U]) => U);
  if (O.length > 0) return eo("sdk_mcp", Of(O));
  return I.length > 0 ? Jn : Sn;
}
function Tv(w, I) {
  return Object.keys(If).flatMap((O) => {
    if (!(
      ya(w[O]) ||
      (O === "mcpConfig" && ya(I.mcpConfigFlagServers)) ||
      (O === "settingSources" && w.settingSources !== void 0)
    ))
      return [];
    let V = If[O],
      te = typeof V === "function" ? V(w, I) : V;
    return [
      {
        key: O,
        treatment: te.treat === "create" && I.entry === "attach" ? dv : te,
      },
    ];
  });
}
function checkCloudSessionCliOptions(w, I = {}) {
  let O = Tv(w, I),
    U = [
      ...O.flatMap(({ treatment: Se }) => (Se.treat === "refuse" ? [Se] : [])),
      ...Iv(w, I),
    ],
    V = gv.find((Se) => U.some((xe) => xe.group === Se));
  if (V !== void 0) {
    let Se = U.filter((xe) => xe.group === V).map((xe) => xe.naming);
    return { kind: "rejected", message: yv(V, Se), reason: V };
  }
  let te = O.flatMap(({ key: Se, treatment: xe }) =>
      xe.treat === "ignore" ? [{ key: Se, treatment: xe }] : [],
    ),
    ne = te.map(({ key: Se }) => Se),
    me = te.flatMap(({ key: Se, treatment: xe }) => Ov(Se, xe)),
    Me = Object.keys(I.mcpConfigFlagServers ?? {});
  return {
    kind: "accepted",
    ignored: ne,
    notApplied: me,
    notices: [
      ...["settings", "managedSettings"]
        .filter((Se) => ne.includes(Se))
        .map(
          (Se) =>
            `${Df(Se)} applies to this machine's client only; it is not applied to the cloud session, which runs with the cloud container's own settings.`,
        ),
      ...(ne.includes("mcpConfig")
        ? [
            `MCP ${Me.length === 1 ? "server" : "servers"} from --mcp-config ignored \u2014 MCP servers for this session run in the cloud container: ${Of(Me)}`,
          ]
        : []),
    ],
    forwarded: I.entry === "attach" ? {} : xv(w, I),
  };
}
function Iv(w, I) {
  let O = I.selectedAgentDefinition;
  if (!O || w.agent || !isRestrictiveAgentDefinition(O)) return [];
  return [
    {
      treat: "refuse",
      group: "tool_restriction",
      naming: `the selected main-thread agent ${formatDisplayText(typeof O.agentType === "string" ? O.agentType : "agent", 64)} (its definition lists tools or hooks, or sets a permission mode)`,
    },
  ];
}
function fd(w) {
  let I = w
    .slice(0, 8)
    .map((O) => formatDisplayText(O, 64))
    .join(", ");
  return w.length > 8 ? `${I} (and ${w.length - 8} more)` : I;
}
function xv(w, I) {
  let O = I.appendSystemPrompt ?? w.appendSystemPrompt,
    U = I.systemPrompt ?? w.systemPrompt,
    V = splitToolRuleList(w.allowedTools ?? []),
    te =
      w.thinking === "disabled"
        ? 0
        : w.thinking === void 0 &&
            Number.isInteger(w.maxThinkingTokens) &&
            (w.maxThinkingTokens ?? -1) >= 0
          ? w.maxThinkingTokens
          : void 0,
    ne =
      w.thinkingDisplay === "summarized" || w.thinkingDisplay === "omitted"
        ? w.thinkingDisplay
        : void 0,
    me = {
      ...(te !== void 0 && { maxThinkingTokens: te }),
      ...(ne !== void 0 && { display: ne }),
    };
  return {
    ...(O && { appendSystemPrompt: O }),
    ...(U && { customSystemPrompt: U }),
    ...(w.appendSubagentSystemPrompt && {
      appendSubagentSystemPrompt: w.appendSubagentSystemPrompt,
    }),
    ...(typeof w.effort === "string" && isValidEffortLevel(w.effort) && { effort: w.effort }),
    ...(w.fallbackModel && { fallbackModel: w.fallbackModel }),
    ...(w.maxBudgetUsd !== void 0 &&
      w.maxBudgetUsd > 0 && { maxBudgetUsd: w.maxBudgetUsd }),
    ...(V.length > 0 && { allowedTools: V }),
    ...(Object.keys(me).length > 0 && { thinking: me }),
    ...(w.proactivity !== void 0 && { proactivityLevel: w.proactivity }),
  };
}
function Ov(w, I) {
  let O = Df(w);
  switch (I.kind) {
    case "lost":
      return [
        { kind: "lost", name: O, ...(I.why !== void 0 && { why: I.why }) },
      ];
    case "kept":
      return [{ kind: "kept", name: O }];
    case "preference":
      return I.settingsKeys === void 0
        ? [{ kind: "preference", name: O }]
        : I.settingsKeys.map((U) => ({ kind: "preference", name: formatDisplayText(U, 64) }));
  }
}
function Df(w) {
  return `--${w.replace(/[A-Z]/g, (I) => `-${I.toLowerCase()}`)}`;
}
var md = 8;
function Of(w) {
  let I = w.slice(0, md).map((O) => formatDisplayText(O, 64));
  return w.length > md
    ? `${I.join(", ")} (and ${w.length - md} more)`
    : I.join(", ");
}
function ya(w) {
  if (Array.isArray(w)) return w.length > 0;
  return typeof w === "object" && w !== null
    ? Object.keys(w).length > 0
    : Boolean(w);
}
function getSelectablePermissionMode(w) {
  let I = w ? parsePermissionModeOrDefault(w) : void 0;
  return I && isSelectablePermissionMode(I) && I !== "bypassPermissions" ? I : void 0;
}
function Ff(w) {
  return w ? describeUnboundReason(w) : "the binding outcome was never reported";
}
function formatSessionIdForDisplay(w) {
  let I = w.startsWith("cse_") ? `session_${sessionIdBody(w)}` : w;
  return formatDisplayText(I, 128);
}
function formatSessionBindFailedMessage(w, I, O, U) {
  return `Error: cloud session ${formatSessionIdForDisplay(w)} was created but this machine could not be bound to it: ${Ff(I)}. ${Lf(U, O)}`;
}
function formatSessionSetupFailedMessage(w, I, O, U) {
  return `Error: cloud session ${formatSessionIdForDisplay(w)} was created and bound to this machine, but this machine could not be set up to serve it (${formatDisplayText(I)}). ${Lf(U, O)}`;
}
function Lf(w, I) {
  let O = formatDisplayText(I, 200);
  return w
    ? `It was archived (nothing was left running); it is listed under Archived at ${O}.`
    : `It was left running and could not be archived from here; open or archive it at ${O}.`;
}
function formatSessionArchivedMessage(w, I) {
  return `Error: cloud session ${formatSessionIdForDisplay(w)} is archived and cannot accept new messages. View it at ${formatDisplayText(I, 200)}`;
}
function formatSessionNotCreatedMessage(w) {
  return `Error: a cloud session started from here could not be bound to this machine: ${Ff(w)}. Nothing was created.`;
}
function createCloudSessionRecord({ sessionId: w, viewUrl: I, device: O, directorySync: U }) {
  return {
    id: formatSessionIdForDisplay(w),
    view_url: formatDisplayText(I, 200),
    device: O,
    directory_sync: U,
    client_version: 1,
  };
}
var FORWARDED_SYSTEM_PROMPT_OPTION_KEYS = ["systemPrompt", "appendSystemPrompt", "appendSubagentSystemPrompt"];
function mergeForwardedSystemPromptOptions(w, I) {
  let O =
      (I?.systemPrompt !== void 0 ? Fv(I.systemPrompt) : void 0) ??
      w.customSystemPrompt,
    U =
      I?.appendSystemPrompt !== void 0
        ? I.appendSystemPrompt
        : w.appendSystemPrompt,
    V =
      I?.appendSubagentSystemPrompt !== void 0
        ? I.appendSubagentSystemPrompt
        : w.appendSubagentSystemPrompt,
    {
      customSystemPrompt: te,
      appendSystemPrompt: ne,
      appendSubagentSystemPrompt: me,
      ...Me
    } = w;
  return {
    ...Me,
    ...(O && { customSystemPrompt: O }),
    ...(U && { appendSystemPrompt: U }),
    ...(V && { appendSubagentSystemPrompt: V }),
  };
}
function Fv(w) {
  let I = w
    .filter((O) => O !== "" && O !== SYSTEM_PROMPT_DYNAMIC_BOUNDARY)
    .join(
      `

`,
    )
    .trim();
  return I === "" ? void 0 : I;
}
function isInternalModel(w) {
  return !1;
}
function getRepositoryModelSource({
  model: w,
  modelCli: I,
  agent: O,
  agentSelectedByCli: U,
  agents: V,
  effectiveModel: te,
  initialMainLoopModel: ne,
  restrictedModel: me,
}) {
  let Me = I === "default" || (te === void 0 && ne === null);
  if (
    $v() &&
    ((me !== void 0 && !isInternalModel(me)) ||
      (Me && (resolveDefaultMainLoopModelSetting().attribution === "enforced" || Bv())))
  )
    return "allowlist";
  let Se = Uv(w) ? "remap" : void 0;
  if (I) return Se;
  if (te !== void 0 && O?.model && O.model !== "inherit") {
    let Oe = getEffectiveSettingSource("agent"),
      Ae = !U && (Oe === null || gs(Oe));
    return yd(O) || Ae ? "agent" : Se;
  }
  if (te !== void 0) return Se;
  let xe =
      !U &&
      gs(getEffectiveSettingSource("agent")) &&
      getEnabledSettingsSources().some((Oe) => !gs(Oe) && getSettingsForSource(Oe)?.agent !== void 0),
    De =
      O !== void 0 &&
      yd(O) &&
      V.some(
        (Oe) =>
          Oe.agentType === O.agentType &&
          !yd(Oe) &&
          Boolean(Oe.model) &&
          Oe.model !== "inherit",
      );
  if (xe || De) return "agent";
  if (Uf("ANTHROPIC_MODEL")) return "settings_env";
  if (!Me && process.env.ANTHROPIC_MODEL) return Se;
  return gs(getEffectiveSettingSource("model")) ? "settings" : Se;
}
function resolveInitialPermissionMode({
  model: w,
  internal: I,
  explicitMode: O,
  droppedMode: U = !1,
  pinnedDefault: V = !1,
  settingsMode: te,
  settingsModeForwardable: ne,
  autoSeedable: me,
  publicModel: Me,
  repositoryModel: Se,
  trustedPlanDisplaced: xe,
}) {
  let De = !U && (O === void 0 || (V && O === "default"));
  return {
    permissionMode: De ? (ne ? (De ? te : void 0) : void 0) : O,
    action: "none",
  };
}
var Lv = [
  "ANTHROPIC_DEFAULT_OPUS_MODEL",
  "ANTHROPIC_DEFAULT_SONNET_MODEL",
  "ANTHROPIC_DEFAULT_HAIKU_MODEL",
  "ANTHROPIC_DEFAULT_FABLE_MODEL",
];
function Uv(w) {
  return hd().some((I) => {
    let O = getSettingsForSource(I),
      U = Hf(I);
    return [
      ...Object.values(O?.modelOverrides ?? {}),
      ...Lv.filter((V) => Uf(V)).flatMap((V) => Gf(U, V)),
    ].some((V) => Nv(V, w));
  });
}
function Nv(w, I) {
  if (ha(w) === ha(I)) return !0;
  let O = rUe(ha(I), { ignore1mTag: !0 })?.model;
  return O !== void 0 && O === rUe(ha(w), { ignore1mTag: !0 })?.model;
}
function ha(w) {
  return strip1mSuffix(w.trim().toLowerCase()).trim();
}
function Bv() {
  return getEnabledSettingsSources().some(
    (w) => w !== "policySettings" && getSettingsForSource(w)?.enforceAvailableModels === !0,
  );
}
function $v() {
  return (
    getSettingsForSource("policySettings")?.availableModels === void 0 &&
    hd().some((w) => {
      let I = getSettingsForSource(w);
      return (
        I?.availableModels !== void 0 || I?.enforceAvailableModels !== void 0
      );
    })
  );
}
function Uf(w) {
  return (
    hd().some((I) => gd(I, w)) &&
    !gd("flagSettings", w) &&
    !gd("policySettings", w)
  );
}
function gd(w, I) {
  return Gf(Hf(w), I).length > 0;
}
function Hf(w) {
  return filterPolicyPredicateEnv(getSettingsForSource(w)?.env, w);
}
function Gf(w, I) {
  return Object.entries(w)
    .filter(([O]) => O.toUpperCase() === I)
    .map(([, O]) => O);
}
function yd(w) {
  return (
    gs(w.source) || w.source === "plugin" || w.fromAdditionalDirectory === !0
  );
}
function hd() {
  return getEnabledSettingsSources().filter(gs);
}
function gs(w) {
  return w === "localSettings" || (w === "projectSettings" && !projectSettingsAliasesUserSettings());
}
export {
  awaitMcpPolicyColdStart,
  redactManagedMcpConfig,
  normalizeMcpServerStatus,
  serializeMcpServerStatuses,
  NewMcpServerDialog,
  NewMcpServersDialog,
  getPendingMcpServers,
  collectProjectMcpServerNames,
  renderMcpServerApprovalDialog,
  getSkillsSyncWaitTimeoutMs,
  getSkillsSyncInstallTimeoutMs,
  startSkillsSyncInBackground,
  waitForFirstSkillsSync,
  resyncSkillsNow,
  pruneSyncedSkillsForClosedGate,
  shouldForwardStatusUpdate,
  redactCompactError,
  enqueueStatusSdkEvent,
  enqueueStreamEvent,
  applyExternalMetadata,
  applySessionAllowRules,
  handleAppStateChange,
  serializeActiveGoal,
  emitBackgroundTasksChanged,
  handleReplAppStateChange,
  partitionSettingsErrors,
  PluginOperationFailedError,
  handlePluginCommandError,
  confirmPluginEntryDisclosure,
  reviewPluginCommandSource,
  runPluginInstallCommand,
  runPluginUninstallCommand,
  runPluginPruneCommand,
  runPluginDisableCommand,
  runPluginDisableAllCommand,
  runPluginUpdateCommand,
  PLUGIN_SCAFFOLD_COMPONENTS,
  validatePluginName,
  buildPluginScaffoldFiles,
  writePluginScaffoldFiles,
  initializeBuiltinPlugins,
  ensureBuiltinPluginsRegistered,
  getCloudSessionsUnavailableReason,
  applyUsageToResultMessage,
  buildResultMessage,
  serializeFeedbackPayload,
  hasThirdPartyTranscriptMarkers,
  anyTranscriptEntryHasThirdPartyMarkers,
  readRecentTranscriptTail,
  resolveFeedbackSubmissionMode,
  MAX_RAW_TRANSCRIPT_BYTES,
  MAX_FEEDBACK_PAYLOAD_BYTES,
  measureFeedbackPayloadBytes,
  getFeedbackUnavailableReason,
  getRedactedInMemoryErrors,
  findRecentEntriesWithinByteBudget,
  postFeedbackRequest,
  submitFeedbackSurveyFollowup,
  submitFeedbackPayload,
  writeFeedbackBundleZip,
  createFeedbackBundle,
  getTerminalLifecycleState,
  parseFooterIndicatorText,
  getFooterIndicator,
  getReportedToolName,
  DEFAULT_ENGINE_CAPABILITIES,
  serializePluginInfo,
  collectAmbientContext,
  collectMinimalAmbientContext,
  buildSystemInitMessage,
  attachStartupTiming,
  getLastTextBlockText,
  processUserInput,
  validateUntrustedPath,
  getUntrustedPathReason,
  REMOTE_READ_OPEN_FLAGS,
  REMOTE_READ_MAX_BYTES,
  bindCanonicalPathToHandle,
  isCanonicalPathContained,
  readHandleBounded,
  readFileForRemote,
  getInterruptScopeForOrigin,
  createSdkEngine,
  resolveCommandQueue,
  hasRecordedFullscreenCrashForVersion,
  checkFullscreenBootCanary,
  clearFullscreenCrashState,
  markFullscreenFirstFrame,
  recordFullscreenBootFailure,
  TUI_TRIAL_ENV_OVERRIDES,
  markFullscreenUpsellExhausted,
  getNextFullscreenUpsellImpression,
  MIN_CLAUDE_DESKTOP_VERSION,
  getClaudeDesktopStatus,
  openSessionInClaudeDesktop,
  resolveEntryPermissionMode,
  collectBashCommands,
  collectBashHosts,
  collectUsedToolNames,
  buildSessionContext,
  normalizePluginRelevanceSignals,
  matchPluginRelevanceSignal,
  UPSELL_IDLE_DELAY_MINUTES,
  REMOTE_CONTROL_READY_PUSH_MESSAGE,
  getLongTurnNudgeConfig,
  isWithinNudgeHours,
  getPermissionNudgeConfig,
  shouldShowRemoteControlUpsell,
  recordRemoteControlUpsellShown,
  shouldShowPushNotificationsUpsell,
  recordPushNotificationsUpsellShown,
  shouldShowLongTurnNudge,
  recordLongTurnNudgeShown,
  shouldShowPermissionNudge,
  recordPermissionNudgeShown,
  getReadyPushNudgeConfig,
  shouldSendReadyPushNotification,
  recordReadyPushNotificationSent,
  markRemoteControlUsed,
  recordRemoteControlSurfaceSeen,
  checkGitHubAuthStatus,
  buildInitialTeamContext,
  restoreTeammateContextFromSession,
  createConfigChangeHookGate,
  isStaleBootstrapFrame,
  isBootstrapStepId,
  createRemoteBootstrapState,
  parseBootstrapStepMeta,
  reduceRemoteBootstrapState,
  finishRemoteBootstrap,
  formatBootstrapStepLabel,
  formatRemoteSessionModeLabel,
  formatRemoteSessionSummary,
  formatBootstrapStepDuration,
  isSessionCwdSafeToAdopt,
  PREFILL_LONG_PROMPT_THRESHOLD,
  formatDeepLinkSessionNotice,
  getRepoLastFetchTime,
  formatExamplePromptHint,
  spinnerTipHostStateStore,
  isAdvertisedCommandAvailable,
  isTipRelevant,
  getApplicableSpinnerTips,
  launchSessionRepl,
  launchRepl,
  getSetEnvVarNames,
  getNonDefaultGlobalConfigKeys,
  getSetUserSettingsKeys,
  startInitializeRequestReader,
  getInitializeRequestResult,
  areInitializePluginsApplied,
  iterateStdinJsonLines,
  runLifecycleHooks,
  suppressInitialMessage,
  parseSelfAddressableSessionId,
  isHermeticModeEnabled,
  getSkippedDynamicMcpServers,
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
  doesDirectoryRemoteMatchRepo,
  removeTrackedRepoPath,
  createChecklistState,
  reduceChecklistState,
  getChecklistPhase,
  buildChecklistStepDisplay,
  getChecklistHeaderLabel,
  getChecklistCancelMessage,
  MCP_CONFIG_FETCH_DEADLINE_MS,
  MCP_RETRY_BACKOFF_MS,
  createMcpConnectionManager,
  applyMcpConnectionResult,
  getRetryableMcpFailures,
  retryFailedMcpConnections,
  remountClaudeAiConnectors,
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
};
