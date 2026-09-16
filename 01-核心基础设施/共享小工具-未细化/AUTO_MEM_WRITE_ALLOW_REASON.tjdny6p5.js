// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载若干依赖 chunk；经查均已由主入口初始化，已移除。共 19 个导出。
export {
  DZe as AUTO_MEM_WRITE_ALLOW_REASON,
  jRn as activeSessionLogExcluder,
  mQ as getAutoMemEntrypoint,
  Ns as getAutoMemPath,
  BRn as getAutoMemPathSettingSource,
  i1 as getAutoMemPathState,
  s1 as getMemoryBaseDir,
  tS as getWorkspacePersistedTrustKey,
  fQ as hasAutoMemPathOverride,
  a1 as isAutoMemPath,
  gQ as isAutoMemPathSafeForCarveout,
  hvt as isAutoMemoryDisabledForCurrentMainLoopModel,
  ua as isAutoMemoryEnabled,
  gvt as isAutoMemoryEnabledIgnoringPause,
  OZe as isExtractModeActive,
  VUe as isIndexRecallEnabled,
  o1 as isMemoryRecallEnabled,
  PZe as isStoreMountedRecall,
  Cd as isWorkspacePersistedTrusted,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
