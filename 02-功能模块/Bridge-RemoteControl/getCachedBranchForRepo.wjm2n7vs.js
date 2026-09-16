// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载若干依赖 chunk；经查均已由主入口初始化，已移除。共 28 个导出。
export {
  O2e as CONVENTIONAL_DEFAULT_BRANCH_NAMES,
  $In as addWatchedRepo,
  MIn as clearResolveGitDirCache,
  wcr as getCachedBranch,
  jIn as getCachedBranchForRepo,
  Tcr as getCachedDefaultBranch,
  Ecr as getCachedDefaultBranchIfKnown,
  ixt as getCachedHead,
  FIn as getCachedRemoteUrl,
  yL as getCommonDir,
  GIn as getHeadForDir,
  Uke as getRemoteUrlForDir,
  ybr as getRemoteUrlForDirSync,
  Acr as getWorktreeCountFromFs,
  Tmr as isShallowClone,
  qQ as isValidGitSha,
  UIn as onRepoBranchChange,
  BIn as onWatchedGitStateChange,
  R0 as pointerFileIsSuspect,
  bS as rawPointerPathIsUnsafe,
  NIn as readLinkTextSafe,
  x1 as readPositionIsUnsafe,
  L7t as readWorktreeHeadSha,
  nB as reanchorGitFileWatcher,
  _br as removeWatchedRepo,
  WIn as resetGitFileWatcher,
  Nw as resolveGitDir,
  pW as resolveRef,
} from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
