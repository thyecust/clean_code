// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  tr,
  k0,
  M7t,
  H1,
  Snt,
  $r,
  vA,
  qIn,
  N7t,
  kx,
  zIn,
  VIn,
  F7t,
  lt,
  hh,
  D2e,
  Che,
  Zq,
  KIn,
  L2e,
  Da,
  bnt,
  Fw,
  $7t,
  axt,
  wnt,
  ez,
  XIn,
  Uie,
  tz,
  YIn,
  Bke,
  JIn,
  QIn,
  U7t,
  Tnt,
  vhe,
  B7t,
  M2e,
  ZIn,
  j7t,
  N2e,
  W7t,
  Rhe,
} from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
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
};
