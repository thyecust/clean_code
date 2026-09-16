// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载 33 个依赖 chunk；经查它们均已由主入口初始化，已移除以还原真实模块边界。
export {
  F7t as RAW_BLOB_DIFF_FLAGS,
  Che as clearIsGitMemo,
  D2e as clearIsGitMemoFor,
  KIn as dirIsInGitRepo,
  $r as findCanonicalGitRoot,
  vA as findCanonicalGitRootUncached,
  tr as findGitRoot,
  H1 as findGitRootRecheckingNegative,
  M7t as findGitRootThroughBackendUncached,
  k0 as findGitRootUncached,
  Snt as findGitRootVerifyingPositive,
  Bke as findRepoRemoteSlug,
  Da as getBranch,
  Fw as getDefaultBranch,
  $7t as getDefaultBranchIfKnown,
  B7t as getFileStatus,
  Zq as getGitDir,
  YIn as getGitPresenceForAnalytics,
  wnt as getGitPushShellPatterns,
  j7t as getGitState,
  VIn as getGitWorktreeName,
  N2e as getGithubRepo,
  L2e as getHead,
  vhe as getIsClean,
  hh as getIsGit,
  U7t as getIsHeadOnRemote,
  ez as getRemoteUrl,
  QIn as getRepoRemoteHash,
  M2e as getWorktreeCount,
  lt as gitExe,
  Tnt as hasUnpushedCommits,
  bnt as isBranchOnOrigin,
  Rhe as isCurrentDirectoryBareGitRepo,
  kx as isLinkedWorktree,
  zIn as isLinkedWorktreeUncached,
  W7t as isLocalHost,
  tz as normalizeGitRemoteUrl,
  qIn as primeGitRootMemo,
  axt as readGitConfigValue,
  JIn as readRepoConfigText,
  Uie as redactGitRemoteCredentials,
  N7t as seedGitRootMemo,
  XIn as snapshotGitEvidenceForBridge,
  ZIn as stashToCleanState,
} from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
