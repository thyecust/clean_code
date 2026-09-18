import {
  parseRegionName,
  parseConfigInteger,
  parseNumericValue,
  getClaudeConfigDir,
  parseConfigIntegerOrDefault,
  isSimpleMode,
  isSafeMode,
  isRestrictedMode,
  getSafeModeExitHint,
  isSupervisedMode,
  buildVertexBaseUrl,
  shouldMaintainProjectWorkingDir,
  xg,
  isInProtectedNamespace,
  getVertexRegionForModel,
} from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { getTerminalHooks, getTerminalUiMounted, formatOscSequence, wrapOscForMultiplexer } from "../../02-功能模块/终端-剪贴板/终端-剪贴板.e33btqf0.js";


import {
  identity as _m,
  oo,
  j1,
  TXt,
  parseShortId,
  mB,
  Xn,
  bh,
  SetCache as EXt,
  cacheHas as AXt,
  Ynt,
  vg,
  isArrayLike as oZ,
  yxe,
  Qs,
  j,
  rE,
  CW,
  LA,
  ije,
  nrt,
  Kxt,
  gB,
  W1,
  TS,
  x_,
  sZ,
  ort,
  toString as Sz,
  baseIteratee as GP,
  Si,
  Gt,
  B,
  bi,
  K,
  ze,
  $p,
  sc,
  DXt,
  fy,
  he,
  wz,
  sn,
  ES,
  o_e,
  Bw,
  aje,
  i_e,
  mOn,
  gOn,
  Jxt,
  wOn,
  M0,
  lrt,
  ROn,
  kOn,
  su,
  oE,
  vW,
  FXt,
  $Xt,
  UXt,
  wxe,
  Az,
  hB,
  BXt,
  l8,
  c8,
  Txe,
  jc,
  Exe,
  Axe,
  IOn,
  jXt,
  zP,
  OOn,
  Zxt,
  dae,
  DOn,
  LOn,
  MOn,
  pae,
  NOn,
  u8,
  eHt,
  crt,
  FOn,
  Nm,
  Cxe,
  urt,
  jw,
  jOn,
  Ec,
  KR,
  ad,
  WOn,
  qXt,
  RW,
  vxe,
  a_e,
  GOn,
  uje,
  vz,
  aZ,
  Rxe,
  KOn,
  Up,
  dje,
  rDn,
  oDn,
  tHt,
  VXt,
  sDn,
  kxe,
  frt,
  mrt,
  iDn,
  lDn,
  cDn,
  uDn,
  pDn,
  fDn,
  KXt,
  u_e,
  SDn,
  bDn,
  grt,
  rHt,
  hrt,
  YXt,
  EDn,
  _rt,
  mje,
  sHt,
  ke,
  ld,
  gje,
  iHt,
  yB,
  dl,
  Srt,
  brt,
  wrt,
  p_e,
  WDn,
  pv,
  Art,
  G1,
  AS,
  zDn,
  VDn,
  YDn,
  JDn,
  QDn,
  ZDn,
  nYt,
  xxe,
  q1,
  MA,
  d8,
  RL,
  m_e,
  ns,
  dLn,
  fv,
  h_e,
  pZ,
  dHt,
  cYt,
  yLn,
  SLn,
  uYt,
  kL,
  xL,
  hae,
  __e,
  pHt,
  _ae,
  TLn,
  y_e,
  fHt,
  Hrt,
  mHt,
  Nb,
  Hxe,
  HW,
  S_e,
  Rg,
  Rz,
  kg,
  IL,
  z1,
  hHt,
  PL,
  MLn,
  IW,
  h8,
  NLn,
  OL,
  FLn,
  DL,
  Lx,
  Frt,
  wB,
  LL,
  jLn,
  $rt,
  SYt,
  V1,
  WLn,
  _8,
  GLn,
  qLn,
  zLn,
  _Ht,
  wYt,
  VLn,
  vje,
  EYt,
  TB,
  EB,
  AYt,
  ZLn,
  Oxe,
  H_,
  yae,
  tMn,
  K1,
  Nn,
  ML,
  oMn,
  Urt,
  xz,
  sMn,
  Brt,
  iMn,
  jrt,
  mp,
  ym,
  uMn,
  dMn,
  SHt,
  pMn,
  fMn,
  CYt,
  mMn,
  vYt,
  gMn,
  hMn,
  _Mn,
  yMn,
  SMn,
  bMn,
  wMn,
  TMn,
  AMn,
  OW,
  pa,
  X1,
  bae,
  wHt,
  fZ,
  ic,
  b_e,
} from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";

import { isCustomizationDisabled, isClaudeMdLoadingDisabled } from "../../02-功能模块/状态栏-主题/chunk-dqyc6kge.js";

import {
  isPathGitIgnored,
  addGlobalGitignoreEntry,
  registerWriteQueueDrain,
  drainRegisteredWriteQueues,
  INTERNAL_WRITE_SUPPRESSION_MS,
  consumeInternalWrite,
  clearInternalWrites,
  getMdmSettings,
  getHkcuSettings,
  getWslInheritsWindowsSettings,
  replaceMdmSettings,
  loadMdmSettingsFromOs,
  readWslManagedSettingsSnapshot,
  MASKED_REGISTRY_INDEX_URL,
  sanitizeIndexUrlValue,
  getRespelledEnvVarsAndLostCredentials,
  getScrubbedEnvVarNames,
  CREDENTIAL_ENV_VAR_NAMES,
  isGitConfigOrProxyVar,
  wouldEnvValueBeScrubbed,
  isCredentialEnvVarName,
  BUNDLE_SEGMENT_ENV_VAR_PATTERN,
  isCredentialPrefixedEnvVar,
  buildKeptEnvVars,
  buildBashCredentialScrubScript,
  collectEnvVarsToScrub,
  looksLikeSecret,
  POLICY_HELPER_SYNTHETIC_PATH,
  getPolicyHelperClaudeMd,
  isPolicyHelperArmedFromUserWritableSettings,
  getActivePolicyHelperPath,
  getRetiredPolicyHelperPaths,
  getConfiguredPolicyHelperPaths,
  reseedUserSettingsFile,
  parseSettingsFile,
  getSettingsFilePathForSource,
  getRuleAnchorRootForSource,
  getLegacyLocalSettingsFilePath,
  projectSettingsAliasesUserSettings,
  getSettingsForSource,
  getSettingsForSourceWriteSeed,
  readRepoDirSettingsFresh,
  parentManagedTierParticipates,
  getMergedPolicySources,
  getAllPolicyTierSettings,
  getMachineAdminTierSettings,
  getInitialSettings,
  getSettings_DEPRECATED,
  getEffectiveSettingSource,
  getSettingsWithErrors,
  getBasePolicySettings,
  getBasePolicySettingsOrigin,
  getPolicySettingsOrigin,
  getPolicySettingsLoadErrors,
  filterFatalPolicyErrors,
  updateSettingsForSource,
  updateSettingsForSourceWithTransform,
  getSecuritySensitiveSetting,
  hasVouchedSkipDangerousModePermissionPrompt,
  hasDisableClaudeAiConnectors,
  getUseAutoModeDuringPlan,
  getDialogExpiry,
  getAutoModeConfig,
} from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";

import {
  Lt,
  Xl,
  xu,
  XP,
  Ra,
  Bx,
  TZ,
  YP,
  Ve,
  zi,
  yt,
  YR,
  G0,
  Iu,
  R,
  mi,
  dt,
  x_e,
  q0,
  ge,
  l,
  A,
  Jr,
  w8,
  uot,
  Gw,
  Jg,
  EZ,
  z0,
  AZ,
  hv,
  Ub,
  cNn,
  Po,
  GW,
  W,
  pNn,
  fNn,
  mNn,
  gNn,
  Rt,
  FA,
  CB,
  Bp,
  qYt,
  vB,
  hNn,
  Kd,
  Vje,
  cc,
  Ps,
} from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { getMcpTimeoutMs } from "../../02-功能模块/MCP客户端/mcp-timeouts.js";
import { createLinkedAbortSignal } from "../../01-核心基础设施/核心工具-并发与缓存/linked-abort-signal.js";
import { MAX_SKILL_FILE_BYTES, registerMcpSkillBuilders, getMcpSkillBuilders, hashMcpServerConfig, getMcpServerConfigCacheKey, invokeMcpToolRaw, readMcpResourceRaw, registerMcpNotificationHandler } from "../../02-功能模块/MCP客户端/chunk-7wm8t84g.js";
import { isExiting, commitExit, getNeverResolvingPromise } from "../../01-核心基础设施/核心工具-未归类/exit-commit-state.js";

import {
  isModelAlias,
  strip1mSuffix,
  stripLongContextTags,
  isModelFamily,
  kP,
  getCatalogEntryById,
  modelHasCapability,
  MODEL_CONFIGS_BY_KEY,
  FABLE_5_MODEL_CONFIG,
  FABLE_5_1_MODEL_CONFIG,
  MODEL_KEY_BY_FIRST_PARTY_ID,
  findModelConfigByProviderId,
  parseModelId,
  isRecognizedModelIdSuffix,
  isFullyRecognizedModelId,
  compareModelVersions,
  isModelNewerOrEqual,
  THIRD_PARTY_PROVIDER_LABELS,
  getAPIProvider,
  getAPIProviderForAnalytics,
  isFirstPartyProvider,
  getProviderForModel,
  usesFirstPartyModelIds,
  isClaudePlatformProvider,
  isFirstPartyApiBackend,
  isFirstPartyAnthropicBaseUrl,
  isFirstPartyAnthropicHost,
  shouldPropagateTraceContext,
} from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import {
  pickBy,
  isPlainObjectRecord,
  HOOK_EVENT_NAMES,
  SYSTEM_PROMPT_DYNAMIC_BOUNDARY,
  yieldToEventLoop,
  USAGE_LIMIT_MESSAGE_PREFIXES,
  USAGE_CREDIT_REQUIREMENT_PATTERNS,
  SERVICE_DISABLED_MESSAGE_PREFIXES,
  USAGE_WARNING_MESSAGE_PREFIXES,
  USAGE_MODE_CHANGE_MESSAGE_PREFIXES,
  AWS_CREDENTIAL_ENV_VARS,
  SLOT_COLLISION_MARKER,
  INVALID_PAIR_MARKER,
  MERGE_PAIR_SUPPRESSOR_MARKER,
  isSyntheticSecretName,
  CLAUDE_AI_SYNC_LABEL,
  getHostSettingsStore,
  invalidateAllSettings,
  getPluginSettingsBase,
  setPluginSettingsBase,
  clearPluginSettingsBase,
  SETTINGS_SOURCE_ORDER,
  describeSettingsSourceShort,
  describeSettingsSource,
  getEnabledSettingsSources,
  isSettingsSourceEnabled,
  USER_PROJECT_LOCAL_SETTINGS_SOURCES,
  PROJECT_LOCAL_SETTINGS_SOURCES,
  PROJECT_SCOPED_SETTINGS_SOURCE_SET,
  HOOK_SETTINGS_SOURCE_ORDER,
  getManagedSettingsDirPath,
  getManagedSettingsDropInDir,
  lastArrayElement,
  sliceArrayRange,
  omitObjectKeys,
  omitBy,
  isMemoryApiEnvVar,
  BASE_URL_ENV_VARS,
  API_KEY_ENV_VARS,
  SECRET_TOKEN_ENV_VARS,
  sanitizeForDisplay as wr,
  removeInvisibleChars,
  getPluginDisplayName as sd,
  toNonBlankString,
  ENV_VAR_PLACEHOLDER_RE,
  containsEnvVarPlaceholder,
  McpConfigScopeSchema,
  StdioMcpServerSchema,
  SseMcpServerSchema,
  HttpMcpServerSchema,
  WebSocketMcpServerSchema,
  SdkMcpServerSchema,
  ToolPermissionSchema,
  ClaudeAiProxyMcpServerSchema,
  McpServerConfigSchema,
  isConnectedMcpServer,
  olr,
  HooksSettingsSchema,
  validateHookFilePathPattern,
  isHookMatcher,
  containsHookMatcher,
  hasMisplacedGuardHooks,
  NON_HOOK_TOP_LEVEL_KEYS,
  NON_HOOK_TOP_LEVEL_KEYS_EXTENDED,
  EMPTY_KEY_SET,
  declaresGuardHook,
  GUARD_HOOK_EVENTS,
  HooksConfigError,
  UNLOADABLE_GUARD_HOOK_NOTE,
  validateHooksConfig,
  normalizeHooksConfig,
  formatDisplayText,
  sanitizeInlineText,
  toDisplayText,
  formatQuotedDisplayText,
  toErrorMessage,
  MAX_PRODUCER_PATH_HISTORY,
  COMMUNITY_MARKETPLACE_NAMES,
  RESERVED_MARKETPLACE_NAMES,
  getReservedMarketplaceNameError as gke,
  isReservedMarketplaceName,
  getMarketplaceNameSchema,
  getHooksJsonSchema,
  getLspServerConfigSchema,
  getMonitorsSchema,
  MAX_FETCHED_BINARIES,
  MAX_PLUGIN_FILE_BYTES,
  parsePluginBinaries,
  getPluginManifestSchema,
  isDotRelativeSourcePath,
  isLocalMarketplaceSource,
  getMarketplaceManifestSchema,
  getMarketplaceSchema,
  isValidPluginName,
  getPluginIdSchema,
  INVALID_PLUGIN_NAME_CHARS_PATTERN,
  INVISIBLE_CHARS_PATTERN as llr,
  CONTROL_OR_BIDI_CHARS_PATTERN,
  getInstalledPluginsV1Schema,
  getInstalledPluginsV2Schema,
  getKnownMarketplacesSchema,
  CLAUDE_AI_MARKETPLACE_NAME_PREFIX,
  CLAUDE_AI_MARKETPLACE_SCOPES,
  MAX_TIMER_DELAY_MS,
  parseMcpToolName as Js,
  getMcpToolPrefix,
  buildMcpToolName,
  getFullToolName,
  parsePluginScopedServerName,
  isSameMcpServerName,
  getAllowRuleWildcardError,
  validatePermissionRule,
  isNetworkAutomountPath,
  CUSTOMIZATION_SURFACES,
  getSettingsSchema,
  isServerNameEntry,
  isServerCommandEntry,
  isServerUrlEntry,
  isRemoteManagedSettingsVerified,
  isEvalPolicySnapshotOnly,
  getSettingsPath,
  getMockRemoteSettingsFixturePath,
  hasAttributionOverrides,
  toJsonSchema,
  validateSettingsJson,
  resolveLocalSettingsStoreRoot,
  SETTINGS_FILENAMES,
  getRelativeSettingsFilePathForSource,
  getValueAtPath,
  isAdminPolicyOrigin,
  shallowMergeSettingsMaps,
  stripAnsiControlCharacters,
} from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import {
  CLAUDE_CODE_IDENTITY_PROMPTS,
  REPORTING_OUTCOMES_PROMPT,
  getClaudeCodeIdentityPrompt,
  SHELL_TOOL_NAMES,
  isPowerShellToolEnabled,
  isBashToolAvailable,
  getPreferredShellToolName,
  formatCurrentDate,
  getSessionDate,
  getCurrentSessionDate,
  parsePagesParameter,
  isFullPdfReadSupported,
  isPdfFile,
  FILE_STATE_CURRENT_NOTE,
  getFileUnchangedMessage,
  getSeededFileUnchangedMessage,
  isFileUnchangedMessage,
  TRUNCATED_PARTIAL_VIEW_PREFIX,
  DEFAULT_READ_LINE_LIMIT,
  READ_TOOL_DESCRIPTION,
  READ_TOOL_CAT_N_FORMAT_NOTE,
  READ_TOOL_CAT_N_FORMAT_DETAIL,
  READ_TOOL_OFFSET_LIMIT_NOTE,
  READ_TOOL_TARGETED_RANGE_NOTE,
  buildReadToolPrompt,
  buildWriteToolPrompt,
  TODO_WRITE_TOOL_NAME,
  TASK_CREATE_TOOL_NAME,
  SYSTEM_NOTIFICATION_HEADER,
  BACKGROUND_TASK_NOTIFICATION_PREAMBLE,
  prefixBackgroundTaskNotification,
  BACKGROUND_TASK_INLINE_NOTIFICATION_PREAMBLE,
  prefixBackgroundTaskNotificationInUserTurn,
  escapeSystemReminderClosingTags,
  escapeSystemReminderOpeningTags,
  wrapInSystemReminder,
  SCHEDULED_TASK_NOTIFICATION_PREAMBLE,
  prefixScheduledTaskNotification,
  GET_TASK_TOOL_NAME,
  isGetTaskToolEnabled,
  buildGrepToolPrompt,
  getWebFetchCacheTtlMs,
  buildWebFetchToolPrompt,
  QUOTE_AND_COPYRIGHT_RULES,
  buildWebFetchContentPrompt,
  WEB_SEARCH_TOOL_NAME,
  buildWebSearchToolPrompt,
  isSkillsAsToolsEnabled,
  isSkillToolEnabled,
  CONNECT_GITHUB_TOOL_NAME,
  REPL_REGISTERED_TOOL_UI_TABLE_KEY,
  getReplVariant,
  MAIN_AGENT_ID,
  hasReplContextForAgent,
  isReplModeEnabled,
  isAsyncReplDispatchEnabled,
  excludeReplRoutedMcpTools,
  hasReplMcpRouting,
  REPL_ONLY_TOOL_NAMES,
  REFRESH_MCP_TOOLS_TOOL_NAME,
  getRefreshMcpToolsDescription,
  REFRESH_MCP_TOOLS_TOOL_PROMPT,
  WAIT_FOR_MCP_SERVERS_TOOL_NAME,
  getWaitForMcpServersDescription,
  TASK_GET_TOOL_NAME,
  TASK_OUTPUT_TOOL_NAME,
  TASK_UPDATE_TOOL_NAME,
  ENTER_WORKTREE_TOOL_NAME,
  deriveStrictJsonSchema,
  STRUCTURED_OUTPUT_TOOL_NAME,
  StructuredOutputTool,
  PROPOSE_SKILLS_TOOL_NAME,
  EXIT_WORKTREE_TOOL_NAME,
  READ_NOTIFICATIONS_TOOL_NAME,
  READ_NOTIFICATIONS_TOOL_DESCRIPTION,
  READ_NOTIFICATIONS_TOOL_PROMPT,
  SUBAGENT_UNAVAILABLE_TOOL_NAMES,
  CUSTOM_AGENT_UNAVAILABLE_TOOL_NAMES,
  EQn,
  AQn,
  BUILTIN_TOOL_NAMES,
  getMaxConcurrentSubagents,
  getMaxWebSearchesPerSession,
  ASYNC_TEAMMATE_ALLOWED_TOOL_NAMES,
  COORDINATOR_ALLOWED_TOOL_NAMES,
  ANTHROPIC_BILLING_HEADER_PREFIX,
  isPreambleSystemBlock,
  hashStringToUint32,
  EPHEMERAL_MESSAGE_HASH_SENTINEL,
  computeMessageHashes,
  CONTEXT_REMINDER_OPENING,
  CONTEXT_REMINDER_CLOSING,
  CONTEXT_SECTION_NAMES,
  CONTEXT_BLOCK_KINDS,
  MAX_TRACKED_CONTEXT_BLOCKS,
  MAX_TRACKED_CONTEXT_SECTIONS,
  diffContextShape,
  isCoordinatorMode,
  isDeferredTool,
  isDeferredToolInConversation,
  formatDeferredToolLine,
  getPrompt,
} from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { isDeepStrictEqual as _mr } from "util";
import {
  isFocusModeEnabled,
  clearFocusModeSections,
  nodeIgnoreModule,
  isValidRelativePath,
  getMemoryStoresFromEnv,
  tryGetMemoryStoresFromEnv,
  isAnthropicMonorepoCheckout,
  isMonorepoRuledOut,
  isAnthropicMonorepoRemote,
  memoryFileIdSchema,
  MAX_MEMORY_FILE_SYNC_BYTES,
  ConflictError,
  NotFoundError,
  UnavailableError,
  MEMORY_SYNC_STATE_FILE_NAME,
  PermanentError,
  getOrgMemoryAuthorization,
  canWriteOrgMemory,
  getGrantedStoreMode,
  isMirrorPresent,
  waitForOrgMemoryDecisionSettledOnce,
  getOrgMemoryDecision,
  getDecisionStores,
  FIRST_STORE_PULL_WAIT_DEADLINE_MS,
  settleFirstStorePull,
  isFirstStorePullPending,
  waitForFirstStorePull,
  firstStorePullPending,
  hasOrgMemoryDecisionRunStarted,
  discoverOrgMemoryStoresForDecision,
  isSelectionMounted,
  isMemoryAccessModeTools,
  isOrgMemoryReadEnabled,
  getOrgMemoryConnectionStatus,
  getOrgMemoryStores,
  isMemoryStoreWritable,
  MAX_MEMORY_LIST_ENTRIES,
  normalizeMemoryPath,
  createMemoryServiceBackends,
  getMemoryStoreId,
  sortMemoryStores,
  getMemoryStoreDescription,
  createOrgMemoryBackend,
  MEMORY_CITATION_FEATURE_FLAG,
  stripMemoryTags,
  stripMemoryTagsFromContentBlocks,
  MEMORY_INDEX_FILE_NAME,
  MEMORY_PAUSED_MESSAGE,
  MAX_MEMORY_INDEX_LINES,
  MAX_MEMORY_INDEX_BYTES,
  MAX_MEMORY_DOCUMENT_BYTES,
  MAX_MEMORY_FILE_READ_LINES,
  MAX_MEMORY_FILE_BYTES,
  measureMemoryText,
  normalizePathForCompare,
  getMemoryDirPrefix,
  MEMORY_DIR_EXISTS_MESSAGE,
  sanitizeTextContent,
  parseMemoryDocument,
  truncateContentForRead,
  getMemoryMetadataValue,
  setMemoryMetadata,
  serializeMemoryDocument,
  MEMORY_TYPES,
  toMemoryType,
  isProjectSkillUpkeepEnabled,
  STALE_MEMORY_WARNING,
  BEFORE_RECOMMENDING_FROM_MEMORY_SECTIONS,
  MEMORY_FRONTMATTER_FORMAT,
  MEMORY_LIST_TOOL_NAME,
  MEMORY_READ_TOOL_NAME,
  MEMORY_WRITE_TOOL_NAME,
  TOOL_SEARCH_TOOL_NAME,
  DEFERRED_TOOL_PLACEHOLDER_NAME,
  DEFERRED_TOOL_PLACEHOLDER_DESCRIPTION,
  setSharedMemoryServedViaTools,
  isSharedMemoryServedViaTools,
  isMultiStoreSyncAvailable,
  getMemoryProjectKey,
  parseMemoryStoreBase,
  resolveMemoryStorageKey,
  buildMemoryStorageNamespace,
  parseTeamMemoryLocation,
  canUseTeamMemoryStorage,
  ptr,
  isOpus48Model,
  mtr,
  requiresPreReadGuard,
  isEapModelId,
  isModelInGrowthBookRoster,
  isBasaltCoveEnabled,
  isThriftySonicEnabled,
  getBashFirstSteerMode,
  isOpus5PromptBundleEnabled,
  isGaultKestrelEnabled,
  isBashActFirstEnabled,
  isAmberAstrolabeEnabled,
  isBisonCairnEnabled,
  isLarchCisternEnabled,
  getWillowTernOverride,
  isWillowTernEnabled,
  isSimpleModeEnabled,
  shouldDropPreReadLine,
  resolvePreReadLineDropped,
  shouldUseLeanPrompt,
  resolveLeanPrompt,
  getModelForPrompt,
  PathTraversalError,
  assertSafePathKey,
  hasTeamMemoryStore,
  getTeamMemoryDir,
  getMemoryStoreDir,
  getMemoryStoreEntryPath,
  resolveAutoMemPath,
  checkPathContainment,
  resolveRealPathSafely,
  isWithinTeamMemoryDir,
  resolveTeamMemoryKey,
  isTeamMemoryPath,
  shouldServeStoneShellPrompt,
  isStoneShellPromptServed,
  truncateMemoryContent,
  buildMemorySystemPrompt,
  buildStaticAutoMemoryPrompt,
  buildSessionMemoryPrompt,
  getAgentMemoryDir,
  isAgentMemoryPath,
  buildAgentMemoryPrompt,
  readPrimedAgentMemory,
  MANIFEST_FILE_NAME,
  MARKETPLACES_FILE_NAME,
  isValidMarketplaceId,
  getMarketplaceIdFileName,
  isMarketplaceIdFileName,
  parseSyncClaimKey,
  LegacyReservedSpellingError,
  SYNCED_DIR_NAME,
  TRASH_DIR_NAME,
  STAGING_DIR_NAME,
  isUuidString,
  buildSkillBucketId,
  isSkillBucketId,
  getOrgIdFromBucketId,
  getSyncMarkerPath,
  redactSkillBucketId,
  stripGenerationSuffix,
  stripTrailingDotsAndSpaces,
  toCaseFoldedName,
  getCanonicalNameKey,
  isHiddenPathSegment,
  isGitDirectoryName,
  isSyncOwnedRootName,
  validateSyncedItemName,
  getSyncedItemPathForGeneration,
  resolveSyncedItemPath,
  SYNCED_PLUGINS_DIR_PATH,
  PLUGINS_TRASH_DIR_PATH,
  isRegisteredFeatureAvailable,
  REPL_TOOL_NAME,
  getGlobToolDescription,
  filterCompilableIgnorePatterns,
  splitNonEmptyLines,
  isPathInsideSystemDirectory,
  getBashParserModule,
  parseCommand,
  PARSE_ABORTED,
  parseCommandRaw,
  findCommandNode,
  extractCommandArguments,
  containsRuntimePlaceholder,
  getAstNodeTypeId,
  CONTROL_CHARACTER_REGEX,
  LONE_SURROGATE_REGEX,
  ESCAPED_WHITESPACE_REGEX,
  UNESCAPED_BACKTICK_OR_DOLLAR_REGEX,
  UNESCAPED_QUOTE_REGEX,
  ZSH_DYNAMIC_DIR_REGEX,
  ZSH_EQUALS_EXPANSION_REGEX,
  ZSH_NUMERIC_RANGE_GLOB_REGEX,
  parseShellCommand,
  analyzeCommandAst,
  SHELL_BUILTIN_COMMANDS,
  SHELL_SPECIAL_VARIABLES,
  ZSH_BUILTIN_COMMANDS,
  FIND_DANGEROUS_ACTION_FLAGS,
  FIND_VALUE_PREDICATE_FLAGS,
  FIND_NEWER_COMPARISON_REGEX,
  CODE_EXECUTION_BUILTINS,
  AWK_INTERPRETER_COMMANDS,
  getAwkProgramDangerReason,
  POSIX_SHELL_COMMANDS,
  SHELL_LAUNCHER_COMMANDS,
  ALL_SHELL_COMMANDS,
  COMMAND_WRAPPER_COMMANDS,
  PROCESS_WRAPPER_COMMANDS,
  isDangerousCommandName,
  BUILTIN_VARIABLE_FLAGS,
  NUMERIC_COMPARISON_OPERATORS,
  INTEGER_LITERAL_REGEX,
  VARIABLE_TARGET_BUILTINS,
  VARIABLE_MODIFYING_BUILTINS,
  SHELL_OPTION_NAMES,
  SHELL_OPTION_LETTERS,
  VOLATILE_SHELL_VARIABLES,
  isShellEnvironmentVariable,
  isReservedShellVariable,
  READ_VALUE_FLAGS,
  READ_NUMERIC_FLAGS,
  NUMERIC_LITERAL_REGEX,
  resolveEffectiveCommand,
  GIT_SAFE_FLAGS_BY_SUBCOMMAND,
  GH_SAFE_FLAGS_BY_SUBCOMMAND,
  hasDockerConnectionFlag,
  DOCKER_SAFE_FLAGS_BY_SUBCOMMAND,
  RG_SAFE_FLAGS,
  PYRIGHT_SAFE_FLAGS,
  DOCKER_READ_ONLY_SUBCOMMANDS,
  isWindowsNetworkPath,
  areCommandFlagsSafe,
  isManagedPermissionRulesOnlyEnabled,
  isEvalConfinedEnabled,
  getEffectivePermissionRules,
  getGitTrackedSettingsSources,
  getDeclaredAndRepoOnlyDirectories,
  getEffectiveAdditionalDirectories,
  isFirstTimeForKey,
  removePermissionRuleFromSource,
  collectRuleValuesFromUpdates,
  addWorkingDirectoriesToContext,
  applyPermissionUpdate,
  stripAlreadyGrantedWholeToolRules,
  getToolNameAndAliases,
  applyPermissionUpdates,
  isPersistableSettingsSource,
  persistPermissionUpdates,
  buildDirectoryReadRuleUpdate,
  getPathCacheStore,
  getResolvedClaudeTempDir,
  getResolvedChildProcessTmpDir,
  HOST_FIELD_NAME,
  getHostContextFields,
  MACHINE_NAME_PATTERN,
  isValidMachineName,
  getDefaultMachineName,
  isReservedMachineName,
  getHostRoutingSchemaFields,
  extractRequestedMachine,
  sanitizeMachineName,
  getMachineNotForwardedMessage,
  getMachineForwardingDisabledMessage,
  hasRequestedMachine,
  CODE_EXECUTION_COMMAND_NAMES,
  NETWORK_CLI_COMMAND_NAMES,
  CLUSTER_CLI_COMMAND_NAMES,
  isDangerousCommandPattern,
  shouldClassifyAllShellCommands,
  isDangerousClassifierPermission,
  PERMISSION_RULE_SOURCES,
  isPermissionRuleExemptTool,
  getAlwaysAllowRules,
  collectRulesForBehavior,
  getAlwaysDenyRules,
  getAlwaysAskRules,
  matchesWholeToolRule,
  findMatchingAllowRule,
  doesRuleMatchTool,
  findMatchingDenyRule,
  findExactDenyRule,
  filterAgentsNotExplicitlyDenied,
  findMatchingAskRule,
  formatRuleDeniedMessage,
  findRuleMatchingInputFields,
  collectRulesByContentForTool,
  collectRulesByContent,
  extractRulePrefix,
  hasUnescapedTrailingStar,
  matchesRuleGlob,
  classifyRuleContent,
  buildExactCommandAllowUpdate,
  buildCommandPrefixAllowUpdate,
  DANGEROUS_FILES,
  DANGEROUS_FILES_LC,
  DANGEROUS_DIRECTORIES,
  DANGEROUS_DIRECTORY_PATHS,
  normalizeCaseForComparison,
  toPosixPath,
  isClaudeSettingsPath,
  isScratchpadEnabled,
  getScratchpadDir,
  isUntrustedUncPath,
  isUntrustedAutomountPath,
  hasSuspiciousWindowsPathPattern,
  checkPathSafetyForAutoEdit,
  allWorkingDirectories,
  getResolvedWorkingDirPaths,
  blockReadsWorkingDirectories,
  isAutoMemPathFromRepoSettings,
  outsideReadBlocked,
  pathInAllowedWorkingPath,
  isLinkedWorktreeFastPathEnabled,
  verifiedLinkedWorktreeDirectories,
  pathInWorkingPath,
  rootPathForSource,
  normalizePatternsToPath,
  getFileReadIgnorePatterns,
  compiledPathRulePattern,
  NON_ASCII_PATH,
  denyFoldVariantPaths,
  denyRuleMatchingAnywhere,
  matchingRuleForInput,
  matchingDenyRuleForDirectoryContents,
  matchesPathRule,
  matchingAllowRuleForAllPaths,
  checkReadNetworkPathSafety,
  hasReadDenyRuleForPath,
  READ_PATH_PROBE,
  readAutoAllowedForMutation,
  checkReadPermissionForTool,
  checkWritePermissionForTool,
  normalizeInternalPathRoot,
  untypeDenyReasonForAskPropagation,
  internalPathDecisionStands,
  checkEditableInternalPath,
  checkReadableInternalPath,
} from "../../02-功能模块/记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import {
  cz,
  jo,
  Bs,
  exe,
  Sxt,
  Qie,
  bxt,
  Bf,
  SW,
  bPn,
  a_,
} from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { sleep, withTimeout, withDeadline, raceWithAbortSignal } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { toolFeature, hookFeature, logFeatureOk, logFeatureBad, logFeatureSad, withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  OTHER_NAMES_TELEMETRY_CODE,
  LEAF_MOVED_TELEMETRY_CODE,
  REMOTE_LINK_TELEMETRY_CODE,
  ASIDE_STRANDED_TELEMETRY_CODE,
  isUnsupportedFailure,
  isByteViewUnsupportedFailure,
  isStoreFencedFailure,
  SOURCE_NOT_REGULAR_TELEMETRY_CODE,
  SOURCE_TOO_LARGE_TELEMETRY_CODE,
  SOURCE_SHARED_TELEMETRY_CODE,
  SOURCE_OUTSIDE_TELEMETRY_CODE,
  isStorageError,
  isAbsentParentFailure,
  getTelemetryCode,
  TOO_LARGE_TELEMETRY_CODE,
  describeStorageError,
  createOkResult,
  createErrorResult,
  pathSpaces,
  CLEANUP_DRAIN_TIMEOUT_MS,
  registerCleanup,
  drainCleanup,
  registerPreExitFlush,
  drainPreExitFlush,
  startSlowOperationSpan,
  jsonStringify,
  jsonStringifyLine,
  jsonStringifyUntraced,
  jsonlJoin,
  jsonParse,
  jsonParseUntraced,
  deepClone,
  UNVERIFIED_ANCESTRY_SENTINEL,
  hasNetworkPathSpelling,
  hasNetworkPathSpellingAsync,
  hasUnverifiableAncestryWithAnchor,
  resolveSymlinkAncestrySync,
  resolvePathInfo,
  testAndSetResolvedPath,
  resolveSymlinkTargetSync,
  getRealPath,
  expandPathAliases,
  getFsSurface,
  changeWorkingDirectory,
  readBytesAtOffset,
  readTailBytes,
  streamFileLinesBackward,
  scanForSecrets,
  redactSecretsFromText,
  sanitizeUrl,
  getMinDebugLogLevel,
  isDebugMode,
  isDebugToStdErr,
  flushDebugLogs,
  logForDebugging,
  getDebugLogPath,
  logAntError,
} from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import {
  isRestrictedToPluginOnly,
  isSourceAdminTrusted,
  shouldAllowManagedHooksOnly,
  shouldAllowManagedHooksOnlyByPolicy,
  shouldHoldGuardHooksByAdmin,
  policySettingsUnreadable,
  areDeviceHooksStoodDown,
  shouldDisableAllHooksIncludingManaged,
  shouldSkipSessionHooksByPolicy,
  updateHooksConfigSnapshot,
  updateHooksConfigSnapshotThroughBackend,
  listProcessHooksConfigSnapshots,
  getHooksConfigFromSnapshot,
  logGoalCleared,
  listGoalStopHooks,
  createGoalStatusAttachment,
} from "../../02-功能模块/Skills技能/chunk-sapykxw7.js";
import {
  CLOUD_GATEWAY_SESSION_EXPIRED_MESSAGE,
  getAwsRegionOrDefault,
  resolveAwsRegion,
  getAwsRegion,
  getProviderState,
  createBedrockRuntimeClient,
  countBedrockTokens,
  getInferenceProfileBackingModel,
  isUnresolvedInferenceProfileArn,
  isUnprefixedAnthropicModelId,
  getInferenceProfilePrefixFromModelId,
  applyInferenceProfilePrefix,
  asModelId,
  getModelOverrideSourceId,
  getEffectiveModelStrings,
  withRateLimitHeaders,
  shouldAttachRateLimitHeaders,
  getSelfManageUsageCreditsOverride,
  getOverageBillingOverride,
  otelApiModule,
  otelCoreModule,
  getGitUserEmail,
  isAnalyticsDisabled,
  getUserAgent,
  getWebFetchUserAgent,
  getAuthHeadersAsync,
  withOAuth401Retry,
  padBodyWithRandomWhitespace,
  setRequestBodyGzipPlanner,
  containsAnyIgnoreCase,
  withholdCredentialsForMisroutedHost,
  MAX_ATTRIBUTE_VALUE_LENGTH,
  toWellFormedAttributeValue,
  runtimeEnvironment,
  OAUTH_AUTH_BETA,
  LONG_CONTEXT_BETA,
  CONTEXT_MANAGEMENT_BETA,
  STRUCTURED_OUTPUTS_BETA,
  EFFORT_BETA,
  TASK_BUDGETS_BETA,
  PROMPT_CACHING_SCOPE_BETA,
  PROMPT_CACHING_EVICT_BETA,
  EXTENDED_CACHE_TTL_BETA,
  FAST_MODE_BETA,
  REDACT_THINKING_BETA,
  THINKING_TOKEN_COUNT_BETA,
  AFK_MODE_BETA,
  ADVISOR_TOOL_BETA,
  CACHE_DIAGNOSIS_BETA,
  MCP_SERVERS_BETA,
  FILES_API_BETA,
  MID_CONVERSATION_SYSTEM_BETA,
  PER_TURN_CONTROL_BETA,
  MID_CONVERSATION_TOOL_CHANGES_BETA,
  SERVER_SIDE_FALLBACK_BETA,
  SERVER_SIDE_FALLBACK_CATEGORY_BETA,
  FALLBACK_CREDIT_BETA,
  MID_CONV_CACHE_PROMOTION_LATCH_BETA,
  MID_CONV_CACHE_PROMOTION_OK_LATCH_BETA,
  bQe,
  AUTO_MODE_CLASSIFIER_BETA,
  DANGEROUS_TOOL_USE_BETA,
  THINKING_DISPLAY_UPDATES_BETA,
  THINKING_BINDING_CONTROLS_BETA,
  LAt,
  getBetaByHeader,
  getBetaHeaders,
  COUNT_TOKENS_SUPPORTED_BETAS,
  MAIN_THREAD_QUERY_SOURCES,
  isKnownQuerySource,
  getQuerySourceKind,
  isMainThreadQuerySource,
  isAutoModeQuerySource,
  getQuerySourcePrefix,
  normalizeQuerySource,
  isExperimentalBetasDisabled,
  isHipaaTaintActive,
  withholdBetasIfHipaaTainted,
  canUseExperimentalBetas,
  Bve,
  registerPerTurnEffortCapabilityResolver,
  supportsPerTurnEffort,
  getMainLoopCanonical,
  getModelForAnalytics,
  getModelBucketForAnalytics,
  getSessionStateStore,
  releaseTerminalEmitClaim,
  enqueueSdkEvent,
  emitTaskNotification,
  isFastModeEnabled,
  isFastModeAvailable,
  getFastModeModelDisplayName,
  modelSupportsFastMode,
  resolveFastModeForModel,
  logFastModeToggled,
  enterFastModeCooldown,
  disableOrgFastMode,
  isCreditsExhaustedReason,
  handleFastModeOverageRejection,
  isFastModeInCooldown,
  defineEnumerableProperty,
  getOwnValue,
  hasOrgConfiguredPricing,
  computeCostWithPricingSource,
  getCostBasis,
  computeModelCostUsd,
  computeModelUsageCostUsd,
  computeUsageCostWithFallback,
  SESSION_ID_HEADER_NAME,
  InvalidRequestHeaderValueError,
  validateRequestHeaders,
  MAX_SECRET_LENGTH,
  containsSecret,
  sanitizeErrorMessage,
  getGatewayModelOptions,
  hasDefaultModelOptionLabel,
  isModelRetiredOrRemapped,
  classifyModelFamily,
  getCatalogModels,
  isCatalogModelSelectable,
  getModelFamily,
  normalizeModelId,
  getServedCatalogSource,
  getActiveServedCatalog,
  isActiveCatalogPublished,
  withServedCatalogSuppressed,
  isServedCatalogSuppressed,
  isModelDenied,
  getModelEntitlementDenySet,
  isEntitlementOverlayUnavailable,
  pickNewestPermittedFamilyModel,
  isModelAllowed,
  isOpus1mContextAvailable,
  isSonnet1mContextAvailable,
  rUe,
  MODEL_NEEDS_UPDATE_NOTICE,
  isOfferedModelRow,
  getOfferedModelAliasMap,
  hasDedicatedSmallFastModel,
  getSmallFastModel,
  isNonCustomFableModel,
  isNonCustomMythosModel,
  swapShrinksContextWindow,
  preserve1mContextForRefusalFallback as DVt,
  isNonCustomOpusModel,
  getUserSpecifiedModelSetting,
  isUnservedFamilySpelling,
  getMainLoopModel as rt,
  isFableModelValue,
  isMythosModelValue,
  isFableAvailable,
  serverProbeAcceptedFable,
  isMythosAvailable,
  isPinnedFableModel,
  isFableFamilyOrPinnedModel,
  getPermissionClassifierExternalDefault,
  getPermissionClassifierFlagshipRerouteTarget,
  getActiveOpusLineupIds,
  getModelUnavailabilityReason,
  antGrants1MContext,
  getDefaultFableModel,
  getDefaultOpusModel,
  enforcementDefaultOpusModel,
  getDefaultSonnetModel,
  getDefaultHaikuModel,
  isModeDependentModelSetting,
  stepDownRestrictedFamilyAliasPick,
  planModeConstituentModel,
  getRuntimeMainLoopModel,
  getDefaultMainLoopModelSetting,
  defaultModelAttributionSuffix,
  resolveDefaultMainLoopModelSetting,
  getEnvDefaultModel,
  isEnvDefaultModelGoverning,
  eligible1mSuffixTarget as sq,
  isModelAllowedUnderActiveEnforcement,
  isPermittedByOrgModelPolicy,
  isExemptDefaultResolvingPick,
  isDefaultModelEnforced,
  getDefaultMainLoopModel,
  isNoModelFallbackEnabled,
  noModelFallbackTripwire,
  buildAvailabilityFallbackChain,
  getFableDeclineFallbackModel,
  isRecognizedModel,
  getCanonicalName,
  mainModelOverrideKeys,
  strippedCanonicalName,
  hookModelMatchKey,
  isRecognizedModelKey,
  bytesPerTokenForModel,
  getClaudeAiUserDefaultModelDescription,
  renderDefaultModelSetting,
  getModelPricingSuffix,
  isOpusDefaultSubscriber,
  isOpus1mMergeEnabled,
  getPublicModelDisplayName,
  maskModelCodename,
  getCuratedModelPicker,
  renderModelName,
  isFableModelName,
  renderFableModelName,
  getPublicModelName,
  parseUserSpecifiedModel,
  inlineSkillModelOverride,
  resolveSkillModelOverride,
  nameForUnnamedModelId,
  getMarketingNameForModel,
  toProviderWireModelId,
  strip1mTag as n0,
  DEFAULT_CONTEXT_WINDOW_TOKENS,
  STANDARD_CONTEXT_WINDOW_TOKENS,
  isLongContextDisabled,
  hasLongContextSuffix,
  isNative1mContextModel,
  modelHasNative1MContext,
  lacks1mContextSupport,
  supports1mContextBeta,
  getEffectiveContextWindow as vp,
  resolveContextWindowBelief,
  isContextWindowAboveStandard,
  getServedAutoCompactWindows,
  getCachedAutoCompactWindows,
  getServedSonnet46ContextWindow,
  getMaxOutputTokens,
  getMaxThinkingBudget,
  setAutoModeActive,
  isAutoModeActive,
  isAutoModePermissionSurface,
  isAutoClassifierActive,
  getAutoModeFlagCli,
  setAutoModeCircuitBroken,
  isAutoModeCircuitBroken,
  setAutoModeFastModeBreakerReason,
  getAutoModeFastModeBreakerReason,
  setAutoModeFromFallback,
  setProvisionalStartupMode,
  getProvisionalStartupMode,
  shouldShowThinkingSummaries,
  normalizeThinkingConfigDisplay,
  isUltrathinkEnabled,
  hasUltrathinkTrigger,
  isThinkingSupported,
  canDisableThinking,
  getThinkingBudgetDefaults,
  getCachedThinkingBudgetDefaults,
  resolveThinkingMode,
  canUseAdaptiveThinking,
  getThinkingDisabledReason,
  supportsInterleavedThinking,
  supportsStructuredOutputs,
  supportsMidConversationSystem,
  supportsMidConversationToolChange,
  isSonnet5Model,
  supportsTemperatureParameter,
  isThirdPartyProvider,
  areExperimentalBetasAllowed,
  isFastModeSupported,
  getFastModeSupport,
  isSkillModelSupportedInAutoMode,
  getToolSearchBeta,
  isDefaultProviderEndpoint,
  supportsFirstPartyServerFeatures,
  getModelBetas,
  getBedrockExtraBodyParamsBetas,
  resolveRequestBetas,
  hasStructuredOutputsBeta,
  filterSupportedBetas,
  hashForTelemetry,
  isSemverLessThan,
  DEFAULT_TRANSFER_STALL_MS,
  computeTransferStallMs,
  createStallWatchdog,
  iterateUploadChunks,
  reportEventSignerLoadFailure,
  isErrorTerminalReason,
  formatTerminalReasonKey,
  isFailedTerminalReason,
  getHookOutputSchema,
  registerDeviceHooksResponseSchema,
  CANCEL_QUEUED_INTERRUPT_REQUEST,
  stripHopChainFromMessage,
  isCredentialsProviderError,
  hasCustomApiKeyHeader,
  getAuthorizationHeaderPin,
  getAnthropicBetaHeaderPin,
  isAwsAuthError,
  authState,
  isPluginSteeredAgent,
  getTurnAttributionKey,
  adoptTurnAttributionKeyFromMessages,
  agentContextStorage,
  runWithAgentContext,
  createMainAgentContext,
  isMainAgentContext,
  resolveTurnAttributionKey,
  isDelegatedObservationAgent,
  getAgentDepth,
  getBackgroundAgentId,
  isForegroundSubagentContext,
  isSubagentContext,
  isOutOfProcessAgentContext,
  isSubagentSession,
  getSubagentNameForAnalytics,
  getSubagentAnalyticsFields,
  getWorkflowAnalyticsAttributes,
  getWorkflowRunMetadata,
  claimAgentInvocation,
  CCR_BYOC_BETA,
  sessionsApiWire,
  isTransientNetworkError,
  getOAuthHeaders,
  fetchSession,
  getBranchFromSession,
  trustedDeviceHeaders,
  sendControlRequestToRemoteSession,
  sendControlResponseToRemoteSession,
  getAccessTokenWithCcrFallback,
  pollRemoteSessionEvents,
  archiveRemoteSession,
  getTrustedOrigin,
  httpClient,
  REMOTE_DEVICES_MCP_SERVER_NAME,
  REMOTE_DEVICE_BASH_TOOL_NAME,
  IDE_EXECUTE_CODE_TOOL_NAME,
  REMOTE_DEVICE_TOOL_NAMES,
  COMPUTER_USE_MCP_SERVER_NAME,
  isComputerUseMcpServer,
  readStoredMcpOAuth,
  needsMcpServerAuth,
  isMcpServerTokenExpired,
  CLAUDE_DESKTOP_MCP_SERVER_NAMES,
  FIRST_PARTY_APP_MCP_SERVER_NAMES,
  FIRST_PARTY_APP_MCP_TOOL_PREFIXES,
  effectiveModeForTool,
  isPlanModeOrAutoAllowSuspended,
  BASH_TOOL_NAME,
  EDIT_TOOL_NAME,
  FILE_NOT_READ_ERROR_MESSAGE,
  FILE_DIR_DENIED_MESSAGE,
  FILE_READ_DENY_EDIT_MESSAGE,
  FILE_READ_DENY_WRITE_MESSAGE,
  FILE_MODIFIED_SINCE_READ_MESSAGE,
  FileStateError,
  READ_TOOL_NAME,
  IMAGE_FILE_EXTENSIONS,
  isImageOrPdfPath,
  WRITE_TOOL_NAME,
  GLOB_TOOL_NAME,
  GREP_TOOL_NAME,
  isReservedMcpServerName,
  getFirstPartyMcpToolNames,
  NOTEBOOK_EDIT_TOOL_NAME,
  POWERSHELL_TOOL_NAME,
  maxSlugLength,
  buildAgentId,
  encodeHeaderValue,
  createRequestId,
  parsePeerAddress,
  isPlaceholderSessionTitle,
  slugify,
  isReservedRecipientName,
  AGENT_REF_PATTERN,
  buildRecipientListing,
  formatAgentDisplayName,
  describeSessionLocationWithRemoteControl,
  normalizeSessionName,
  readBoundedFile,
  readBoundedFileSync,
  readBoundedFileWithFs,
  readBoundedFileWithFsSync,
  getSessionsDir,
  sanitizeSessionName,
  getCurrentWorktreeSession,
  setCurrentWorktreeSession,
  getPendingResumeWorktreeName,
  clearPendingResumeWorktreeName,
  getBgTakeover,
  recordAgentWorktreeSpawn,
  recordAgentWorktreeRemoval,
  isWorktreeIsolationUnavailableFor,
  markWorktreeIsolationUnavailable,
  getRegisteredSessionName,
  whenSessionRegistered,
  envSessionKind,
  isBgSession,
  isUnattendedInteractiveSession,
  isActingAsBgJob,
  updateSessionName,
  isToolDetailsLoggingEnabled,
  isWorkspaceMcpToolName,
  getSanitizedToolName,
  classifyUnknownToolName,
  getMcpToolAnalyticsFieldsForAllowedServer,
  getSdkHostMcpToolFeatureName,
  getToolSourceFields,
  getSanitizedQuerySource,
  isToolContentLoggingEnabled,
  shouldSendMcpServerTelemetry,
  getMcpToolAnalyticsFields,
  getSampledMcpToolName,
  parseMcpToolName,
  getSkillNameFromToolInput,
  getSubagentTypeFromToolInput,
  buildToolTelemetryFields,
  serializeToolInputForOtel,
  getFileExtension,
  getFileExtensionsFromFileCommands,
  getDocumentFileExtensionsInCommand,
  logToolFileActivity,
  sumAttachmentBytesInMessages,
  getVersionForAnalytics,
  getVersionBase,
  isTelemetryEnabled,
  getErrorTelemetryFields,
  getOrganizationUUID,
  refreshGatewayCredentialIfNeeded,
  isHostManagedUnpinnedGateway,
  createValueSlot,
  invalidateToolDescriptions,
  resolveToolDescription,
  setToolDescribeResolver,
  toolDefinitionCache,
  isHostManagedProviderAuth,
  hostManagedNoCredsError,
  hostManagedAwsSdkCredentials,
  shouldUseWIFAuth,
  isWIFDispatchAuth,
  isAnthropicAuthEnabled,
  describeHowToDisableAuthTokenSource,
  effectiveAuthTokenEnv,
  getAuthTokenSource,
  getAnthropicApiKey,
  getAnthropicApiKeyWithSourceSafe,
  isApiKeyHelperTheActiveCredential,
  getAdditionalModelOptionsCache,
  hasAnthropicApiKeyAuth,
  hasAnthropicApiKey,
  getAnthropicApiKeyWithSource,
  getConfiguredAwsAuthRefresh,
  isAwsAuthRefreshFromProjectSettings,
  getApiKeyFromApiKeyHelper,
  getApiKeyHelperLastFailure,
  clearApiKeyHelperCache,
  refreshAndGetAwsCredentials,
  getDefaultAwsProviderChain,
  invalidateDefaultAwsProviderChainDebounced,
  clearAwsCredentialsCache,
  clearAwsHelperCredentialsCache,
  getConfiguredGcpAuthRefresh,
  isGcpAuthRefreshFromProjectSettings,
  getConfiguredVertexProjectId,
  markGcpCredentialsRejected,
  refreshGcpCredentialsIfNeeded,
  getOAuthAccountOnHold,
  isOAuthRefreshKnownDeadAsync,
  getClaudeAIOAuthTokens,
  getClaudeAIOAuthTokenOriginAsync,
  handleOAuth401Error,
  resetAuthFailureTracking,
  checkAndRefreshOAuthTokenIfNeeded,
  checkAndRefreshOAuthTokenIfNeededWithOutcome,
  isClaudeAISubscriber,
  hasProfileScope,
  hasStoredOAuthToken,
  canAuthenticateChromeBridge,
  is1PApiCustomer as cge,
  getOauthAccountInfo,
  getAuthenticatedAccountInfo,
  getStoredOauthAccountInfo,
  isExtraUsageAllowed,
  getSubscriptionType,
  isEnterpriseSubscriber,
  isEnterprisePAYGSubscriber,
  getRateLimitTier,
  isUsing3PServices,
  isConsumerSubscriber,
  isClaudeAISubscriberAsync,
  registerModelSteerFloor,
  recordSteerPromptModel,
  getSubagentSteerMode,
  resetSubagentSteerLatch,
  SUBAGENT_STEER_DELEGATION_PROMPT,
  isVerifySkillRolloutEnabled,
  onGrowthBookRefresh,
  isGrowthBookCacheEmpty,
  hasFreshGrowthBookFeatures,
  isGrowthBookEnabled,
  initializeGrowthBook,
  getFeatureValueWithSource_CACHED_MAY_BE_STALE,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getFeatureValue_SESSION_PINNED,
  checkGate_CACHED_OR_BLOCKING,
  ATIS_REQUEST_HEADER,
  getClientDataAtis,
  atisPin,
  getRequestAtis,
  latchConversationAtis,
  getDynamicConfig_BLOCKS_ON_INIT,
  getDynamicConfig_CACHED_MAY_BE_STALE,
  getCachedGitRoot,
  RESERVED_DIRECTORY_NAMES_LC,
  normalizePathSegment,
  hasReservedPathSegment,
  isAutoMemoryEnabled,
  isIndexRecallEnabled,
  isMemoryRecallEnabled,
  isExtractModeActive,
  getMemoryBaseDir,
  hasAutoMemPathOverride,
  getAutoMemPathState,
  getAutoMemPath,
  activeSessionLogExcluder,
  getAutoMemEntrypoint,
  isAutoMemPath,
  AUTO_MEM_WRITE_ALLOW_REASON,
  isAutoMemPathSafeForCarveout,
  getToolSearchReminderConfig,
  isToolParamStrictnessEnabled,
  isEmptyInputRepairEnabled,
  isSchemaDescFixesEnabled,
  isEmptyObject,
  buildEmptyInputRepairMessage,
  checkHasTrustDialogAccepted,
  isProjectScopeTrustAccepted,
  isWorkspacePersistedTrusted,
  isTrustKeyPersistedTrusted,
  getWorkspacePersistedTrustKey,
  getPersistedTrustKeyForPath,
  workspacePersistedTrustThroughBackend,
  isLocalSettingsGitTracked,
  resetLocalSettingsGitTrackedCache,
  saveGlobalConfig,
  saveGlobalConfigDurably,
  getGlobalConfig,
  getCurrentProjectConfig,
  saveCurrentProjectConfig,
  saveCurrentProjectConfigSyncForExit,
  saveGlobalConfigSyncForExit,
  getOrCreateUserID,
  getMemoryPath,
  getManagedClaudeRulesDir,
  getUserClaudeRulesDir,
  getCachedClientData,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import {
  resolveToolNameAlias,
  getBuiltinLegacyToolNames,
  WORKSPACE_MCP_BASH_TOOL_NAME,
  WORKSPACE_MCP_WEB_FETCH_TOOL_NAME,
  expandToolNameAlias,
  getAliasNamesForToolName,
  containsWildcard,
  escapeGlobSpecials,
  isGlobSpecialChar,
  isWindowsStylePath,
  unescapeRuleEscapes,
  unescapeRuleParentheses,
  parseToolRuleSpec,
  parsePermissionRule,
  formatPermissionRule,
  splitToolRuleList,
} from "../../02-功能模块/权限系统/permission-rule-parsing.js";
import {
  lit as S,
  fromEnum,
  fromEnumOpt,
  fromNumber,
  fromNumberOpt,
  concatSafe,
  fromNumberArr,
  fromEnumArr,
  joinSafe,
  fromSanitizer_SANITIZER_OUTPUT_ONLY,
  mcpNameForAnalytics_GATE_EVALUATED,
  agentTypeForAnalytics_GATE_EVALUATED,
  pluginIdForAnalytics_GATE_EVALUATED,
} from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import {
  repeatString,
  escapeRegExp,
  pluralize,
  truncateToCodePoints,
  truncateToCodeUnits,
  takeLastCodeUnits,
  truncateMiddle,
  isWellFormed,
  sanitizeLoneSurrogates,
  containsLoneSurrogates,
  beforeFirst,
  firstLine,
  countOccurrences,
  joinWithMaxLength,
  TruncatingOutputBuffer,
  truncateWithCharCount,
  truncateAtWordBoundary,
  CONTROL_CHARS_REGEX,
  ANY_CONTROL_CHAR_REGEX,
  normalizeWhitespace,
  escapeInvisibleCharacters,
  escapeAllControlCharacters,
  formatShortText,
  formatTruncatedText,
  truncateToUtf8Bytes,
} from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { countMatching, dedupe, asStringArray } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";

import { createStore } from "../../01-核心基础设施/文件存储-原子写入/state-store.js";


import {
  createDefaultToolPermissionContext,
  hasAfterResultCommittedHook,
  runAfterResultCommittedHook,
  matchesToolName,
  compareToolNames,
  registerToolListProvider,
  getRegisteredTools,
  findToolByName,
  parseToolInput,
  getToolRemoteExecution,
  buildTool,
  isBatchToolDefinition,
  matchesAnyToolName,
} from "../../02-功能模块/权限系统/chunk-qdy0h5k2.js";
import {
  getStringWidth,
  ESCAPE_CHARACTER,
  BELL_CHARACTER,
  truncateToWidth,
  truncate,
  formatDuration,
  formatDurationCoarse,
  formatNumber,
  formatTokens,
  formatResetTime,
  formatOverflowHint,
} from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";

import {
  isObject as Fm,
  Ie,
  po,
  CS,
  Le,
  rs,
  A_e,
  FL,
  Zur,
  edr,
  zn,
  An,
  gp,
  $L,
  pl,
  zrt,
  AB,
  UL,
  xYt,
  $xe,
  EHt,
  HYt,
  XR,
  ac,
  Dr,
  ku,
  li,
  Pje,
  $m,
  vS,
  _Z,
  IMn,
  ndr,
  Oi,
  Xo,
  Ju,
  Fx,
  NW,
  BL,
  RS,
  SZ,
  FW,
  Bxe,
  Ww,
  vHt,
  RHt,
  odr,
  Tae,
  $b,
  wh,
  UW,
} from "../../00-第三方库/lodash/lodash.207999qb.js";

import { getSessionEffortLevel, modelSupportsEffort, getModelEffortLevelOrDefault } from "../../02-功能模块/权限系统/chunk-t3b7pg2x.js";
import { getProjectsDir as Pl, getProjectKeyFromDir, getProjectDir, getSessionTranscriptPath, setAgentTranscriptSubdir, clearAgentTranscriptSubdir, getAgentTranscriptPath, listAgentIds } from "../../02-功能模块/Teammates团队/transcript-paths.js";
import {
  basename as $Z,
  dirname as kv,
  isAbsolute as e_s,
  join as Wp,
  relative as t_s,
  sep as vhr,
} from "path";
import { basename as pms, isAbsolute as wj } from "path";


var _ms = /^[A-Za-z0-9][A-Za-z0-9_.-]{0,255}$/;
var Jd = 600000,
  D3e = 30000,
  NOTIFICATION_DELAY_MS = 6000,
  N3e = 30000,
  OYt = 5000;

var Zhe = new Set([
  "Notification",
  "SessionStart",
  "SessionEnd",
  "Setup",
  "StopFailure",
  "SubagentStart",
  "PostToolUseFailure",
  "PostCompact",
  "PostModelSwitch",
  "PermissionDenied",
  "WorktreeCreate",
  "WorktreeRemove",
  "InstructionsLoaded",
  "CwdChanged",
  "FileChanged",
  "DirectoryAdded",
  "MessageDisplay",
  "StatusLine",
  "FileSuggestion",
]);

class UCt {
  failuresByFile = new Map();
  failureSeq = 0;
  abandonedPaths = new Set();
  abandonedPrefixes = new Set();
  abandonedPendingPaths = new Set();
  latchingEnabled = !0;
  liveServing = null;
  degradedStore = createStore(null);
}

class axt {
  getSessionId;
  project = null;
  exitReStampRan = !1;
  localGcEnabled = !1;
  forkContextHydrationCache = new Map();
  forkContextHydrationsInFlight = new Map();
  warnedUnchainedSessions = new Set();
  legacyProgressProbeFired = new Set();
  relocationParkedAppends = null;
  relocationParkedPath = null;
  liveSuppressionProbe = void 0;
  writerHealth = new UCt();
  exitReStampProviders = new Set();
  foreignExitReStampProviders = new Set();
  takenForeignExitLines = new Set();
  exitDrains = new Set();
  sessionAgentNameChanged = Le();
  sessionTitleChanged = Le();
  sessionFileMaterialized = Le();
  filelessResumeUuids = void 0;
  sessionMessages = rs(
    async (e, t) => {
      let r = [];
      try {
        let { messages: p } = await gxt(e, void 0, t);
        r = p.keys();
      } catch (p) {
        logForDebugging(
          `getSessionMessages: loadSessionFile failed: ${p instanceof Error ? p.message : String(p)}`,
          { level: "error" },
        );
      }
      let o = this.filelessResumeUuids,
        d = new Set(o?.sessionId === e ? o.uuids : void 0);
      for (let p of r) d.add(p);
      return d;
    },
    (e) => e,
  );
  constructor(e) {
    this.getSessionId = e;
  }
  setLocalGcEnabled(e) {
    this.localGcEnabled = e;
  }
  claimExitReStamp() {
    if (this.exitReStampRan) return !1;
    return ((this.exitReStampRan = !0), !0);
  }
  exitReStampDone() {
    return this.exitReStampRan;
  }
  claimLegacyProgressProbe(e) {
    if (this.legacyProgressProbeFired.has(e)) return !1;
    return (this.legacyProgressProbeFired.add(e), !0);
  }
  openAppendRelocationBracket(e) {
    ((this.relocationParkedAppends ??= []), (this.relocationParkedPath = e));
  }
  closeAppendRelocationBracket() {
    let e = this.relocationParkedAppends;
    return (
      (this.relocationParkedAppends = null),
      (this.relocationParkedPath = null),
      e
    );
  }
  setLiveSuppressionProbe(e) {
    this.liveSuppressionProbe = e;
  }
  clearSessionMessagesCache() {
    this.sessionMessages.cache.clear?.();
  }
  primeSessionMessagesCache(e, t) {
    let r = this.sessionMessages.cache;
    if (!r.has(e)) r.set(e, Promise.resolve(new Set(t)));
  }
  primeFilelessResume(e, t) {
    let r = new Set(t);
    ((this.filelessResumeUuids = { sessionId: e, uuids: r }),
      this.primeSessionMessagesCache(e, r));
  }
}

var transcriptStores = new Gt(() => ({ current: new axt(() => K()) })); // good
function Xd() { // good
  return transcriptStores.of(B()).current;
}

function getMaterializedSessionFile() { // good
  return Xd().project?.sessionFile ?? null;
}

function getTranscriptPathForSession(e) { // good
  if (e === K()) return getMaterializedSessionFile() ?? getSessionTranscriptPath();
  let t = getProjectDir(he());
  return Wp(t, `${e}.jsonl`);
}

function createBaseHookInput(e, t, r, o) { // good, used 33 times
  let d = o?.agentType ?? H_(),
    p = o?.options?.mainLoopModel,
    _ = getSessionEffortLevel(o?.getAppState?.() ?? {}, p);
  for (let I of o?.permissionLayers ?? [])
    if (I.kind === "effort" && I.effort !== void 0) _ = I.effort;
  let E = p && o?.getAppState && modelSupportsEffort(p) ? { level: getModelEffortLevelOrDefault(p, _) } : void 0,
    C = o?.remoteCall;
  if (C !== void 0)
    return {
      session_id: `served:${(_ms.test(C.origin.callerSessionId ?? "") ? C.origin.callerSessionId : void 0) ?? "unknown"}`,
      transcript_path: "",
      cwd: t,
      permission_mode: r,
      agent_id: o?.agentId,
      effort: E,
    };
  return {
    session_id: e.id,
    transcript_path: getTranscriptPathForSession(e.id),
    cwd: t,
    scratchpad_dir: isScratchpadEnabled() ? (getScratchpadDir(e.id) ?? void 0) : void 0,
    prompt_id: fZ() ?? void 0,
    permission_mode: r,
    agent_id: o?.agentId,
    agent_type: d,
    effort: E,
  };
}

class KPt {
  servers = [];
  unsubscribe = void 0;
  clear() {
    ((this.servers = []), this.unsubscribe?.(), (this.unsubscribe = void 0));
  }
}
var qkr = new j(() => new KPt());
function DWe() {
  return bi(qkr);
}
function NWe(e) {
  e.servers = e.servers.filter(
    (t) => t.fs.readStarttime(t.pid) === t.starttime,
  );
}

var x5r = 60;
function formatScriptHookLabel(e) { // good
  let t =
      escapeInvisibleCharacters(e)
        .split(
          `
`,
        )
        .map((d) => d.trim())
        .find((d) => d.length > 0) ?? "",
    r = truncateToCodeUnits(t, x5r),
    o =
      r.length < t.length ||
      e.trim().includes(`
`);
  return `script: ${r}${o ? "\u2026" : ""}`;
}

function formatHookTarget(e) { // good
  switch (e.type) {
    case "command":
      return e.args ? [e.command, ...e.args].join(" ") : e.command;
    case "prompt":
      return e.prompt;
    case "agent":
      return e.prompt;
    case "http":
      return e.url;
    case "mcp_tool":
      return `${e.server}/${e.tool}`;
    case "script":
      return e.file !== void 0 ? escapeAllControlCharacters(e.file) : formatScriptHookLabel(e.script ?? "");
    case "callback":
      return "callback";
    case "function":
      return "function";
  }
}

function YPt(e, t) { // good
  if (Zhe.has(t)) return;
  try {
    let r = DWe();
    if (!r.servers.some((o) => o.name === e)) return;
    (NWe(r),
      (r.servers = r.servers.filter((o) => {
        if (o.name !== e) return !0;
        let d = bxt(o.pid, o.starttime, o.fs);
        return (
          logForDebugging(
            `tool cgroup: mcp server backing a ${t} hook was still capped at fire time; ${d ? "released now" : "release refused"}`,
          ),
          !d
        );
      })));
  } catch (r) {
    logForDebugging(`tool cgroup: mcp release at hook fire skipped (${r})`);
  }
}

function nms(e, t) {
  let r = (d) => {
      let p = t;
      for (let _ of d.split(".")) {
        if (p == null || typeof p !== "object") return;
        p = p[_];
      }
      return p;
    },
    o = (d) => {
      if (typeof d === "string")
        return d.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_.]*)\}/g, (p, _) => {
          let E = r(_);
          if (E === void 0 || E === null) return "";
          return typeof E === "object" ? jsonStringify(E) : String(E);
        });
      if (Array.isArray(d)) return d.map(o);
      if (d !== null && typeof d === "object") {
        let p = {};
        for (let [_, E] of Object.entries(d)) p[_] = o(E);
        return p;
      }
      return d;
    };
  return o(e);
}

async function wvt(e, t, r, o, d, p = Jd) { // good
  YPt(e.server, t);
  let _ = o ?? DL();
  if (_ === void 0) {
    let F = `mcp_tool hooks are not available for the '${t}' hook event (no MCP client context)`;
    return (
      logForDebugging(`Hooks: mcp_tool hook skipped \u2014 ${F}`, { level: "warn" }),
      { ok: !1, body: "", error: F }
    );
  }
  let E = _.find((F) => F.name === e.server);
  if (!E || !isConnectedMcpServer(E)) {
    let F = `MCP server '${e.server}' not connected`;
    return (
      logForDebugging(`Hooks: mcp_tool hook skipped \u2014 ${F}`, { level: "warn" }),
      { ok: !1, body: "", error: F }
    );
  }
  let C = e.input ? nms(e.input, r) : {},
    I = e.timeout ? e.timeout * 1000 : p,
    { signal: D, cleanup: N } = createLinkedAbortSignal(d, { timeoutMs: I });
  try {
    logForDebugging(
      `Hooks: mcp_tool calling ${e.server}/${e.tool} with ${Object.keys(C).length} arg(s)`,
    );
    let F = Lx();
    if (!F) {
      N();
      let ue = `MCP server '${e.server}' not connected`;
      return (
        logForDebugging(`Hooks: mcp_tool hook skipped \u2014 ${ue}`, { level: "warn" }),
        { ok: !1, body: "", error: ue }
      );
    }
    let U = await F(E, {
        signal: d,
        timeoutMs: Math.min(I, getMcpTimeoutMs()),
        context: "mcp_tool hook",
      }),
      V = await invokeMcpToolRaw(
        U,
        { name: e.tool, arguments: C },
        { signal: D, timeout: I },
      );
    N();
    let re = Array.isArray(V.content)
      ? V.content.map((ue) => (ue.type === "text" ? ue.text : `[${ue.type}]`))
          .join(`
`)
      : "";
    if (V.isError)
      return { ok: !1, body: re, error: re || "MCP tool returned an error" };
    return { ok: !0, body: re };
  } catch (F) {
    if ((N(), D.aborted)) return { ok: !1, body: "", aborted: !0 };
    let U = l(F);
    return (
      logForDebugging(`Hooks: mcp_tool hook error: ${U}`, { level: "error" }),
      { ok: !1, body: "", error: U }
    );
  }
}

function shouldSkipHookDueToTrust() {
  return !isProjectScopeTrustAccepted();
}

function qms(e, t) { // good
  let r = new Set((getSettingsForSource("policySettings")?.hooks?.[t] ?? []).map((o) => stableStringify(o)));
  return e.filter((o) => !r.has(stableStringify(o)));
}

function getPolicyEnabledPluginIds() { // good
  let e = getSettingsForSource("policySettings")?.enabledPlugins;
  if (!e) return null;
  let t = new Set();
  for (let [r, o] of Object.entries(e))
    if (o === !0 && r.includes("@")) t.add(r);
  return t.size > 0 ? t : null;
}

function D$(e) { // good
  if (isCustomizationDisabled("hooks")) return [];
  let t = LL()?.[e] ?? [];
  if (shouldDisableAllHooksIncludingManaged())
    return t.filter((p) => !("pluginRoot" in p) && !("deviceOwner" in p));
  let r = shouldAllowManagedHooksOnly(),
    o = r && !isSafeMode() ? getPolicyEnabledPluginIds() : null,
    d = areDeviceHooksStoodDown();
  return [
    ...(getHooksConfigFromSnapshot()?.[e] ?? []),
    ...(r ? [] : (yae()?.[e] ?? [])),
    ...t.filter(
      (p) =>
        !(r && "pluginRoot" in p && !o?.has(p.pluginId)) &&
        !(d && "deviceOwner" in p),
    ),
  ];
}

function W1e(e, t, r, o) { // good
  if (o?.managedHooksOnly) {
    let E = getSettingsForSource("policySettings");
    if (E?.disableAllHooks === !0) return [];
    return [...(E?.hooks?.[r] ?? [])];
  }
  let d = o?.managedHooksExcluded ? qms(D$(r), r) : [...D$(r)],
    p = typeof t === "string" ? [t] : t;
  if (e === void 0 || shouldSkipSessionHooksByPolicy()) return d;
  for (let E of p) {
    let C = e.get(E, r).get(r);
    if (C) d.push(...C);
  }
  let _ = p[0];
  if (_ !== void 0) {
    let E = e.getFunctionHooks(_, r).get(r);
    if (E) d.push(...E);
  }
  return d;
}

var Amr = new Set([
  "PreToolUse",
  "PostToolUse",
  "PostToolUseFailure",
  "PermissionRequest",
  "PermissionDenied",
  "UserPromptExpansion",
  "SessionStart",
  "SessionEnd",
  "Setup",
  "PreCompact",
  "PostCompact",
  "PreModelSwitch",
  "PostModelSwitch",
  "Notification",
  "SubagentStart",
  "SubagentStop",
  "Elicitation",
  "ElicitationResult",
  "ConfigChange",
  "InstructionsLoaded",
  "DirectoryAdded",
]);

function vmr(e) { // good
  switch (e.hook_event_name) {
    case "PreToolUse":
    case "PostToolUse":
    case "PostToolUseFailure":
    case "PermissionRequest":
    case "PermissionDenied":
      return e.tool_name;
    case "UserPromptExpansion":
      return e.command_name;
    case "SessionStart":
      return e.source;
    case "Setup":
      return e.trigger;
    case "PreCompact":
    case "PostCompact":
      return e.trigger;
    case "PreModelSwitch": {
      let t = hookModelMatchKey(e.to_model);
      return isRecognizedModelKey(t) ? t : void 0;
    }
    case "PostModelSwitch": {
      let t = hookModelMatchKey(e.to_model);
      return isRecognizedModelKey(t) ? t : void 0;
    }
    case "Notification":
      return e.notification_type;
    case "SessionEnd":
      return e.reason;
    case "StopFailure":
      return e.error;
    case "SubagentStart":
      return e.agent_type;
    case "SubagentStop":
      return e.agent_type;
    case "TeammateIdle":
    case "TaskCreated":
    case "TaskCompleted":
      return;
    case "Elicitation":
      return e.mcp_server_name;
    case "ElicitationResult":
      return e.mcp_server_name;
    case "ConfigChange":
      return e.source;
    case "DirectoryAdded":
      return e.source;
    case "InstructionsLoaded":
      return e.load_reason;
    case "FileChanged":
      return pms(e.file_path);
    default:
      return;
  }
}

var unt = new Set([
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "PermissionRequest",
    "PermissionDenied",
  ]),
  Xgo = new Set([...unt, "PostToolBatch"]);

function Cms(e, t) { // good
  if (!t || !unt.has(e)) return;
  let r = zLn();
  if (r.has(t) || !vms(t)) return;
  r.add(t);
  let o =
    t
      .split(/[|,]/)
      .map((d) => d.trim())
      .find((d) => d.startsWith("mcp__") && !d.slice(5).includes("__")) ?? t;
  logForDebugging(
    `Hook matcher \`${o}\` matches no tool (it is compared as an exact string). To match all tools from this server, use \`${o}__.*\`. See CHANGELOG v2.1.195.`,
    { level: "warn" },
  );
}

function Tms(e, t, r) { // good
  if (!(t ? /^[a-zA-Z0-9_|, -]+$/ : /^[a-zA-Z0-9_|]+$/).test(e)) return;
  return e
    .split(t ? /[|,]/ : "|")
    .map((d) => d.trim())
    .filter(Boolean)
    .flatMap((d) => expandToolNameAlias(resolveToolNameAlias(d), r));
}

var PPt = {
    ArtifactComments: "Artifact",
    ArtifactData: "Artifact",
    ArtifactCheck: "Artifact",
  },
  IPt = {
    Artifact: {
      comments: "ArtifactComments",
      reply: "ArtifactComments",
      resolve: "ArtifactComments",
      watch: "ArtifactComments",
      unwatch: "ArtifactComments",
      status: "ArtifactComments",
      resume_replies: "ArtifactComments",
      read_db: "ArtifactData",
      write_db: "ArtifactData",
      verify: "ArtifactCheck",
      preview: "ArtifactCheck",
    },
  };
function Ghe(e) {
  return Object.hasOwn(PPt, e) ? PPt[e] : void 0;
}

function Fms(e, t, r, o) { // good
  if (e.type === "callback" || e.type === "function") return;
  let d = Ej(e);
  if (d === void 0) return;
  for (let p of [...o].reverse())
    for (let _ of getSettingsForSource(p)?.hooks?.[t] ?? []) {
      if (!r.includes(_.matcher ?? "")) continue;
      let E = _.hooks.find((C) => Ej(C) === d);
      if (E !== void 0) return E;
    }
  return;
}

var xms = /^\^?(?:\((?:\?:)?)?\^?\w+\$?(?:\|\^?\w+\$?)*\)?\$?$/;
function Ams(e, t) { // good
  let r = t === void 0 ? void 0 : findToolByName(t, e);
  if (r !== void 0)
    return r.mcpInfo === void 0 ? r.familyParentToolName : void 0;
  return Ghe(e);
}
function MPt(e, t) {
  if (!Object.hasOwn(IPt, e)) return;
  let r = t?.action,
    o = IPt[e];
  return typeof r === "string" && Object.hasOwn(o, r) ? o[r] : void 0;
}
function Rmr(e, t, r) { // good
  let o = [],
    d = Ams(e, t);
  if (d !== void 0) o.push(d);
  let p = t === void 0 ? void 0 : findToolByName(t, e);
  if (p !== void 0) {
    if (p.mcpInfo === void 0) o.push(...(p.hookMatcherFamilyNames?.(r) ?? []));
  } else {
    let _ = MPt(e, r);
    if (_ !== void 0) o.push(_);
  }
  return o;
}

function Mmr(e, t, r, o, d, p) { // good
  if (!t || t === "*") return !0;
  let _ = Tms(t, r, o),
    E = Rmr(e, d, p);
  if (_ !== void 0) return _.includes(e) || E.some((C) => _.includes(C));
  try {
    let C = new RegExp(t);
    if (C.test(e)) return !0;
    if (xms.test(t) && E.some((I) => C.test(I))) return !0;
    for (let I of getBuiltinLegacyToolNames(e)) if (C.test(I)) return !0;
    for (let I of getAliasNamesForToolName(e, o)) if (C.test(I)) return !0;
    return !1;
  } catch {
    return (logForDebugging(`Invalid regex pattern in hook matcher: ${t}`), !1);
  }
}

function Tmr(e, t) {
  if (e !== "PreModelSwitch" && e !== "PostModelSwitch") return t;
  let r = t.replace(/\[[12]m\](?=\s*(?:[|,]|$))/gi, "");
  return r.trim() === "" ? t : r;
}

function C2e(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "deviceOwner" in e &&
    typeof e.deviceOwner === "string"
  );
}

function xZ(e, t) {
  return `${e.pluginRoot ?? e.skillRoot ?? ""}\x00${t}`;
}

function Ej(e) { // good
  switch (e.type) {
    case "command":
      return `command\x00${e.shell ?? getPreferredShellToolName()}\x00${e.command}\x00${jsonStringify(e.args ?? null)}\x00${e.if ?? ""}`;
    case "http":
      return `http\x00${e.url}\x00${e.if ?? ""}`;
    case "mcp_tool":
      return `mcp_tool\x00${e.server}\x00${e.tool}\x00${jsonStringify(e.input ?? {})}\x00${e.if ?? ""}`;
    case "script":
      return `script\x00${jsonStringify(e.script ?? null)}\x00${jsonStringify(e.file ?? null)}\x00${e.if ?? ""}`;
    default:
      return;
  }
}

async function Lmr(e, t) { // good
  if (
    e.hook_event_name !== "PreToolUse" &&
    e.hook_event_name !== "PostToolUse" &&
    e.hook_event_name !== "PostToolUseFailure" &&
    e.hook_event_name !== "PermissionRequest" &&
    e.hook_event_name !== "PermissionDenied"
  )
    return;
  let r = resolveToolNameAlias(e.tool_name),
    o = t && findToolByName(t, e.tool_name),
    d = o?.inputSchema.safeParse(e.tool_input),
    p =
      d?.success && o?.preparePermissionMatcher
        ? await o.preparePermissionMatcher(d.data)
        : void 0;
  return {
    names: [r, ...Rmr(r, t, e.tool_input)],
    patternMatcher: p,
    judgeable: d?.success === !0,
  };
}

async function Rms(e, t) { // good
  let r = await Lmr(e, t);
  if (r === void 0) return;
  let { names: o, patternMatcher: d } = r;
  return (p) => {
    let _ = parsePermissionRule(p);
    if (!o.includes(resolveToolNameAlias(_.toolName))) return !1;
    if (!_.ruleContent) return !0;
    return d ? d(_.ruleContent) : !1;
  };
}

function Lms(e, t) { // good
  if (
    e.type === "callback" ||
    e.type === "function" ||
    t.type === "callback" ||
    t.type === "function"
  )
    return e === t;
  let r = Ej(e);
  return r !== void 0 ? r === Ej(t) : _mr(e, t);
}

async function Wmr(e, t, r, o, d, p) { // good
  try {
    let _ = W1e(e, t, r, p),
      E = vmr(o),
      C = Amr.has(o.hook_event_name);
    for (let je of _) Cms(r, je.matcher);
    (logForDebugging(`Getting matching hook commands for ${r} with query: ${E}`, {
      level: "verbose",
    }),
      logForDebugging(`Found ${_.length} hook matchers in settings`, { level: "verbose" }));
    let I = p?.getToolAliases?.(),
      N = (
        E
          ? _.filter(
              (je) =>
                !je.matcher ||
                Mmr(
                  E,
                  Tmr(r, je.matcher),
                  C,
                  I,
                  d,
                  "tool_input" in o ? o.tool_input : void 0,
                ),
            )
          : _
      ).flatMap((je) => {
        let Ke = "pluginRoot" in je ? je.pluginRoot : void 0,
          ct = "pluginId" in je ? je.pluginId : void 0,
          vt = "skillRoot" in je ? je.skillRoot : void 0,
          ut = Ke
            ? "pluginName" in je
              ? `plugin:${je.pluginName}`
              : "plugin"
            : vt
              ? "skillName" in je
                ? `skill:${je.skillName}`
                : "skill"
              : "settings",
          Wt = !je.matcher || je.matcher === "*" || je.matcher === ".*",
          en = C2e(je);
        return je.hooks.map((tn) => ({
          hook: tn,
          pluginRoot: Ke,
          pluginId: ct,
          skillRoot: vt,
          hookSource: ut,
          matcherIsMatchAll: Wt,
          ...(p?.recordMatchers && { matcherTexts: [je.matcher ?? ""] }),
          ...(en && { deviceForwarded: en }),
        }));
      });
    if (
      N.every(
        (je) => je.hook.type === "callback" || je.hook.type === "function",
      )
    )
      return N;
    let F = (je) => je.if ?? "",
      U = Array.from(
        new Map(
          N.filter((je) => je.hook.type === "command").map((je) => [
            xZ(je, Ej(je.hook) ?? ""),
            je,
          ]),
        ).values(),
      ),
      V = Array.from(
        new Map(
          N.filter((je) => je.hook.type === "prompt").map((je) => [
            xZ(je, `${je.hook.prompt}\x00${F(je.hook)}`),
            je,
          ]),
        ).values(),
      ),
      re = Array.from(
        new Map(
          N.filter((je) => je.hook.type === "agent").map((je) => [
            xZ(je, `${je.hook.prompt}\x00${F(je.hook)}`),
            je,
          ]),
        ).values(),
      ),
      ue = Array.from(
        new Map(
          N.filter((je) => je.hook.type === "http").map((je) => [
            xZ(je, Ej(je.hook) ?? ""),
            je,
          ]),
        ).values(),
      ),
      de = Array.from(
        new Map(
          N.filter((je) => je.hook.type === "mcp_tool").map((je) => [
            xZ(je, Ej(je.hook) ?? ""),
            je,
          ]),
        ).values(),
      ),
      _e = Array.from(
        new Map(
          N.filter((je) => je.hook.type === "script").map((je) => [
            xZ(je, Ej(je.hook) ?? ""),
            je,
          ]),
        ).values(),
      ),
      Se = N.filter((je) => je.hook.type === "callback"),
      ve = N.filter((je) => je.hook.type === "function"),
      Me = (je) => {
        if (p?.recordMatchers !== !0) return je;
        try {
          let Ke = dedupe(
              N.filter(
                (vt) =>
                  vt.pluginRoot === je.pluginRoot &&
                  vt.skillRoot === je.skillRoot &&
                  Lms(vt.hook, je.hook),
              ).flatMap((vt) => vt.matcherTexts ?? []),
            ),
            ct =
              je.pluginRoot === void 0 && je.skillRoot === void 0
                ? Fms(je.hook, r, Ke, p.ownSources ?? [])
                : void 0;
          return { ...je, matcherTexts: Ke, hook: ct ?? je.hook };
        } catch (Ke) {
          return (
            logForDebugging(
              `Hooks: could not establish whose settings define a hook (${l(Ke)}); treating it as the project's`,
            ),
            { ...je, matcherTexts: [] }
          );
        }
      },
      xe = [
        ...U.map(Me),
        ...V,
        ...re,
        ...ue.map(Me),
        ...de.map(Me),
        ..._e.map(Me),
        ...Se,
        ...ve,
      ],
      Ne = xe.some(
        (je) =>
          (je.hook.type === "command" ||
            je.hook.type === "prompt" ||
            je.hook.type === "agent" ||
            je.hook.type === "http" ||
            je.hook.type === "mcp_tool" ||
            je.hook.type === "script") &&
          je.hook.if,
      )
        ? await Rms(o, d)
        : void 0,
      De = xe.filter((je) => {
        if (
          je.hook.type !== "command" &&
          je.hook.type !== "prompt" &&
          je.hook.type !== "agent" &&
          je.hook.type !== "http" &&
          je.hook.type !== "mcp_tool" &&
          je.hook.type !== "script"
        )
          return !0;
        let Ke = je.hook.if;
        if (!Ke) return !0;
        if (!Ne)
          return (
            logForDebugging(
              `Hook if condition "${Ke}" cannot be evaluated for non-tool event ${o.hook_event_name}`,
            ),
            !1
          );
        if (Ne(Ke)) return !0;
        return (
          logForDebugging(`Skipping hook due to if condition "${Ke}" not matching`),
          !1
        );
      }),
      He =
        r === "SessionStart" || r === "Setup"
          ? De.filter((je) => {
              if (je.hook.type === "http")
                return (
                  logForDebugging(
                    `Skipping HTTP hook ${je.hook.url} \u2014 HTTP hooks are not supported for ${r}`,
                  ),
                  !1
                );
              return !0;
            })
          : De;
    return (
      logForDebugging(
        `Matched ${He.length} unique hooks for query "${E || "no match query"}" (${N.length} before deduplication)`,
        { level: "verbose" },
      ),
      He
    );
  } catch {
    return [];
  }
}

function Bmr(e) {
  return e.hook.type === "callback" && e.hook.internal === !0;
}

function Umr(e) { // good
  let t = e.filter((o) => o.pluginId);
  if (t.length === 0) return;
  let r = new Map();
  for (let o of t) {
    let d = pluginIdForAnalytics_GATE_EVALUATED(o.pluginId, z1e(o.pluginId));
    r.set(d, (r.get(d) ?? 0) + 1);
  }
  return r;
}

function jmr(e) {
  let t = new Map();
  for (let r of e) {
    let o = fromEnum(r.hook.type);
    t.set(o, (t.get(o) ?? 0) + 1);
  }
  return t;
}

function kW(e) {
  return fromSanitizer_SANITIZER_OUTPUT_ONLY(jsonStringify(Object.fromEntries(e)));
}

class gMt {
  pendingUsage = new Map();
  flushTimer = null;
  exitFlushesInFlight = [];
  flushStorageV5 = void 0;
}
var hMt = new j(() => new gMt());
class yMt {
  flushers = null;
  exitFlushRegistered = !1;
}
var I4 = new yMt();
function tM() {
  return hMt.of(B().host);
}
function recordPluginUsage(e) { // good
  let t = Date.now(),
    r = tM(),
    o = r.pendingUsage.get(e);
  if (o) (o.count++, (o.lastUsedAt = t));
  else r.pendingUsage.set(e, { count: 1, lastUsedAt: t });
  if (I4.flushers) bMt(r, I4.flushers);
}

var R5r = new Set([0, 1, 2, 9, 99, 777]),
  P5r = 4096;
function I5r(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let o = e.charCodeAt(r);
    if (o >= 32 && o !== 127 && !(o >= 128 && o <= 159)) t += e[r];
  }
  return t;
}
function O5r(e) {
  if (e.length === 0) return null;
  if (Buffer.byteLength(e, "utf8") > P5r) return null;
  let t = [],
    r = 0;
  while (r < e.length) {
    let o = e[r];
    if (o === BELL_CHARACTER) {
      (t.push({ kind: "bel" }), r++);
      continue;
    }
    if (o !== ESCAPE_CHARACTER || e[r + 1] !== "]") return null;
    let d = r + 2,
      p = -1,
      _ = 0;
    while (d < e.length) {
      if (e[d] === BELL_CHARACTER) {
        ((p = d), (_ = 1));
        break;
      }
      if (e[d] === ESCAPE_CHARACTER && e[d + 1] === "\\") {
        ((p = d), (_ = 2));
        break;
      }
      if (e[d] === ESCAPE_CHARACTER) return null;
      d++;
    }
    if (p === -1) return null;
    let E = e.slice(r + 2, p),
      C = E.indexOf(";"),
      I = C === -1 ? E : E.slice(0, C),
      D = C === -1 ? "" : E.slice(C + 1);
    if (!/^\d+$/.test(I)) return null;
    let N = Number(I);
    if (!R5r.has(N)) return null;
    let F = I5r(D);
    if (N === 9 && !M5r(F)) return null;
    (t.push({ kind: "osc", ps: N, payload: F }), (r = p + _));
  }
  return t;
}
function Z3e(e) {
  let t = O5r(e);
  if (t === null) return null;
  return t
    .map((r) => (r.kind === "bel" ? BELL_CHARACTER : wrapOscForMultiplexer(formatOscSequence(r.ps, r.payload))))
    .join("");
}
function H1e(e, t) {
  if (!e || !qb(e) || !e.terminalSequence) return;
  let r = Z3e(e.terminalSequence);
  if (r !== null) eYe(r);
  else
    logForDebugging(
      `Hook ${t} returned a terminalSequence that was rejected by the allowlist (only OSC 0/1/2/9/99/777 and BEL are permitted, and OSC 9 bodies may not begin with a digit unless in the 9;4 progress form)`,
    );
}

function qb(e) {
  return !("async" in e && e.async === !0);
}
function JR(e) {
  return "async" in e && e.async === !0;
}

async function executeHooksOutsideREPL({ // todo
  session: e,
  sessionHooks: t,
  getAppState: r,
  hookInput: o,
  matchQuery: d,
  signal: p,
  timeoutMs: _ = Jd,
  storageV5: E,
  credentials: C,
}) {
  let I = o.hook_event_name,
    D = d ? `${I}:${d}` : I;
  if (gmr(I, p)) await getNeverResolvingPromise();
  if (shouldDisableAllHooksIncludingManaged())
    logForDebugging(
      `Policy disableAllHooks: skipping configured hooks for ${D} (SDK callback hooks still run)`,
    );
  if (shouldSkipHookDueToTrust())
    return (
      logForDebugging(`Skipping ${D} hook execution - workspace trust not accepted`),
      []
    );
  let N = r?.(),
    F = await Wmr(t, e.id, I, o, void 0, {
      getToolAliases: () => N?.toolPermissionContext.toolAliases,
    });
  if (F.length === 0) return [];
  if (p?.aborted) return [];
  let U = F.filter((Se) => !Bmr(Se));
  if (U.length > 0) {
    let Se = Umr(U),
      ve = jmr(U),
      Me = countMatching(U, (xe) => xe.matcherIsMatchAll);
    logEvent("tengu_run_hook", {
      hookName: Gmr(I, d),
      numCommands: U.length,
      numMatchAllMatchers: Me,
      numSpecificMatchers: U.length - Me,
      hookTypeCounts: kW(ve),
      ...(Se && { pluginHookCounts: kW(Se) }),
    });
  }
  let V;
  try {
    V = jsonStringify(o);
  } catch (Se) {
    return (logError(Se), logFeatureBad(hookFeature(I), "hook_input_stringify_failed"), []);
  } // good
  let re,
    ue = !1,
    de = F.map(
      async ({ hook: Se, pluginRoot: ve, pluginId: Me, skillRoot: xe }, Oe) => {
        if (Se.type === "callback") {
          let vt = Se.timeout ? Se.timeout * 1000 : _,
            { signal: ut, cleanup: Wt } = createLinkedAbortSignal(p, { timeoutMs: vt });
          try {
            let en = bF(),
              tn = await Se.callback(o, en, ut, Oe);
            if ((Wt?.(), JR(tn)))
              return (
                logForDebugging(
                  `${D} [callback] returned async response, returning empty output`,
                ),
                { command: "callback", succeeded: !0, output: "", blocked: !1 }
              );
            let dn =
                I === "WorktreeCreate" &&
                qb(tn) &&
                tn.hookSpecificOutput?.hookEventName === "WorktreeCreate"
                  ? tn.hookSpecificOutput.worktreePath
                  : tn.systemMessage || "",
              cn = qb(tn) && tn.decision === "block";
            return (
              H1e(tn, D),
              logForDebugging(`${D} [callback] completed successfully`),
              { command: "callback", succeeded: !0, output: dn, blocked: cn }
            );
          } catch (en) {
            if ((Wt?.(), yt(en))) {
              let dn = en instanceof zi || !!p?.aborted;
              if (dn)
                (logForDebugging(
                  en instanceof zi
                    ? `${D} [callback] cancelled (control stream closed)`
                    : `${D} [callback] cancelled`,
                ),
                  (ue = !0));
              else
                (logForDebugging(`${D} [callback] timed out`, { level: "error" }),
                  (re ??= "hook_callback_timeout"));
              return {
                command: "callback",
                succeeded: !1,
                output: "",
                blocked: !1,
                ...(dn && { cancelled: !0 }),
              };
            }
            let tn = en instanceof Error ? en.message : String(en);
            return (
              logForDebugging(`${D} [callback] failed to run: ${tn}`, { level: "error" }),
              (re ??= "hook_callback_failed"),
              { command: "callback", succeeded: !1, output: tn, blocked: !1 }
            );
          }
        }
        if (Se.type === "prompt")
          return (
            (re ??= "hook_type_unsupported"),
            {
              command: Se.prompt,
              succeeded: !1,
              output: "Prompt stop hooks are not yet supported outside REPL",
              blocked: !1,
            }
          );
        if (Se.type === "mcp_tool") {
          let vt = `${Se.server}/${Se.tool}`;
          try {
            let ut = await wvt(Se, I, o, r?.().mcp.clients, p, _);
            if (ut.aborted)
              return (
                (re ??= "hook_cancelled"),
                {
                  command: vt,
                  succeeded: !1,
                  output: "Hook cancelled",
                  blocked: !1,
                  ...(p?.aborted && { cancelled: !0 }),
                }
              );
            if (ut.error || !ut.ok)
              return (
                (re ??= "hook_mcp_tool_failed"),
                {
                  command: vt,
                  succeeded: !1,
                  output: ut.error || "MCP tool returned an error",
                  blocked: !1,
                }
              );
            let { json: Wt, validationError: en } = parseHookOutput(ut.body);
            if (en) throw Error(en);
            let tn = Wt && qb(Wt) ? Wt : void 0,
              dn = tn?.decision === "block";
            if (tn) emitHookMetrics(tn.metrics, Me, I);
            return (
              H1e(Wt, D),
              {
                command: vt,
                succeeded: !0,
                output: dn ? tn?.reason || "" : ut.body,
                blocked: dn,
                watchPaths:
                  tn?.hookSpecificOutput &&
                  "watchPaths" in tn.hookSpecificOutput
                    ? tn.hookSpecificOutput.watchPaths
                    : void 0,
                systemMessage: tn?.systemMessage,
              }
            );
          } catch (ut) {
            let Wt = ut instanceof Error ? ut.message : String(ut);
            return (
              logForDebugging(`${D} [${vt}] failed to run: ${Wt}`, { level: "error" }),
              (re ??= "hook_mcp_exec_failed"),
              { command: vt, succeeded: !1, output: Wt, blocked: !1 }
            );
          }
        }
        if (Se.type === "agent")
          return (
            (re ??= "hook_type_unsupported"),
            {
              command: Se.prompt,
              succeeded: !1,
              output: "Agent stop hooks are not yet supported outside REPL",
              blocked: !1,
            }
          );
        if (Se.type === "function")
          return (
            logError(
              Error(
                `Function hook reached executeHooksOutsideREPL for ${I}. Function hooks should only be used in REPL context (Stop hooks).`,
              ),
            ),
            (re ??= "hook_type_unsupported"),
            {
              command: "function",
              succeeded: !1,
              output:
                "Internal error: function hook executed outside REPL context",
              blocked: !1,
            }
          );
        if (Se.type === "http")
          try {
            let vt = await Toe(Se, I, V, p, _);
            if (vt.aborted)
              return (
                logForDebugging(`${D} [${Se.url}] cancelled`),
                (re ??= "hook_cancelled"),
                {
                  command: Se.url,
                  succeeded: !1,
                  output: "Hook cancelled",
                  blocked: !1,
                  ...(p?.aborted && { cancelled: !0 }),
                }
              );
            if (vt.error || !vt.ok) {
              let dn = vt.error || `HTTP ${vt.statusCode} from ${Se.url}`;
              return (
                logForDebugging(`${D} [${Se.url}] failed: ${dn}`, { level: "error" }),
                (re ??= "hook_http_request_failed"),
                { command: Se.url, succeeded: !1, output: dn, blocked: !1 }
              );
            }
            let { json: ut, validationError: Wt } = parseHttpHookOutput(vt.body);
            if (Wt) throw Error(Wt);
            if (ut && !JR(ut))
              logForDebugging(`Parsed JSON output from HTTP hook: ${jsonStringify(ut)}`, {
                level: "verbose",
              });
            if (ut && qb(ut)) emitHookMetrics(ut.metrics, Me, I);
            H1e(ut, D);
            let en = ut && qb(ut) && ut.decision === "block",
              tn = en
                ? (ut && qb(ut) && ut.reason) || ""
                : I === "WorktreeCreate"
                  ? ut &&
                    qb(ut) &&
                    ut.hookSpecificOutput?.hookEventName === "WorktreeCreate"
                    ? ut.hookSpecificOutput.worktreePath
                    : ""
                  : vt.body;
            return {
              command: Se.url,
              succeeded: !0,
              output: tn,
              blocked: !!en,
              systemMessage: ut && qb(ut) ? ut.systemMessage : void 0,
            };
          } catch (vt) {
            let ut = vt instanceof Error ? vt.message : String(vt);
            return (
              logForDebugging(`${D} [${Se.url}] failed to run: ${ut}`, { level: "error" }),
              (re ??= "hook_http_exec_failed"),
              { command: Se.url, succeeded: !1, output: ut, blocked: !1 }
            );
          }
        let Ne = Se.timeout ? Se.timeout * 1000 : _,
          De = formatHookTarget(Se),
          { signal: He, cleanup: je } = createLinkedAbortSignal(p, { timeoutMs: Ne }),
          Ke = !1,
          ct = !1;
        try {
          let vt =
              Se.type === "script" ? K3e(Se, I) : { hook: Se, env: void 0 },
            ut = await dge(
              vt.hook,
              I,
              D,
              V,
              parseSessionSource(o),
              e.project,
              Se.type === "script" ? e.project.projectRoot : o.cwd,
              He,
              bF(),
              Oe,
              ve,
              Me,
              xe,
              Se.type === "script",
              vt.env,
              void 0,
              E,
              C,
            );
          ((Ke =
            Se.type !== "script" ||
            Emr(ut) ||
            (ut.aborted === !0 && p?.aborted === !0)),
            (ct = ut.status === 2 && !ut.backgrounded));
          let Wt = !Ke && Se.type === "script" && GUARD_HOOK_EVENTS.has(I);
          if ((je?.(), ut.aborted))
            return (
              logForDebugging(`${D} [${De}] cancelled`),
              (re ??= "hook_cancelled"),
              {
                command: De,
                succeeded: !1,
                output: "Hook cancelled",
                blocked: Wt,
                ...(p?.aborted && { cancelled: !0 }),
              }
            );
          if ((logForDebugging(`${D} [${De}] completed with status ${ut.status}`), !Ke))
            return (
              (re ??= "hook_did_not_run"),
              {
                command: De,
                succeeded: !1,
                output: `script hook did not run (${j1e(ut)})${ut.stderr.trim() ? `: ${ut.stderr.trim()}` : ""}`,
                blocked: Wt,
              }
            );
          let { json: en, validationError: tn } = parseHookOutput(wmr(ut));
          if (tn && ut.status !== 2) throw Error(withHookStderr(tn, ut.status, ut.stderr));
          if (en && !JR(en))
            logForDebugging(`Parsed JSON output from hook: ${jsonStringify(en)}`, { level: "verbose" });
          if (en && qb(en)) emitHookMetrics(en.metrics, Me, I);
          H1e(en, D);
          let dn = en && qb(en) && en.decision === "block",
            cn = ut.status === 2 || !!dn || Wt,
            It = dn
              ? (en && qb(en) && en.reason) || ut.stderr || ""
              : ut.status === 0
                ? ut.stdout || ""
                : ut.stderr || "",
            Dn =
              en &&
              qb(en) &&
              en.hookSpecificOutput &&
              "watchPaths" in en.hookSpecificOutput
                ? en.hookSpecificOutput.watchPaths
                : void 0,
            gn = en && qb(en) ? en.systemMessage : void 0;
          if (ut.status !== 0 && !cn) re ??= "hook_nonzero_exit";
          return {
            command: De,
            succeeded: ut.status === 0,
            output: It,
            blocked: cn,
            watchPaths: Dn,
            systemMessage: gn,
          };
        } catch (vt) {
          je?.();
          let ut = vt instanceof Error ? vt.message : String(vt);
          return (
            logForDebugging(`${D} [${De}] failed to run: ${ut}`, { level: "error" }),
            (re ??= "hook_exec_failed"),
            {
              command: De,
              succeeded: !1,
              output: ut,
              blocked: GUARD_HOOK_EVENTS.has(I) && (ct || (!Ke && Se.type === "script")),
            }
          );
        }
      },
    ),
    _e = await Promise.all(de);
  if (gmr(I, p)) await getNeverResolvingPromise();
  if (re) logFeatureBad(hookFeature(I), re);
  else if (ue) logFeatureSad(hookFeature(I), "hook_cancelled");
  else logFeatureOk(hookFeature(I));
  for (let Se of new Set(F.map((ve) => ve.pluginId))) if (Se) recordPluginUsage(Se);
  return _e;
}

export {
  createBaseHookInput,
  executeHooksOutsideREPL,
}