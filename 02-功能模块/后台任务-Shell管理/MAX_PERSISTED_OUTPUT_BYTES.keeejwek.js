// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载若干依赖 chunk；经查均已由主入口初始化，已移除。共 31 个导出。
export {
  vbt as DiskTaskOutput,
  VAe as MAX_PERSISTED_OUTPUT_BYTES,
  r1e as MAX_TASK_OUTPUT_BYTES,
  Z3t as MAX_TASK_OUTPUT_BYTES_DISPLAY,
  s1e as appendTaskOutput,
  xbt as bindTaskOutputForRead,
  D7e as bindTaskOutputPath,
  Sd as evictTaskOutput,
  Rbt as getTaskOutput,
  BSn as getTaskOutputDelta,
  o1e as getTaskOutputDir,
  _l as getTaskOutputPath,
  O7e as getTaskOutputRootDir,
  kbt as getTaskOutputSize,
  qSn as getVerifiedTaskOutputTail,
  KAe as initTaskOutput,
  fK as initTaskOutputAsSymlink,
  M7e as isTaskOutputFilePath,
  Hbt as isTaskOutputSwapRefusal,
  i1e as openTaskOutputForAppend,
  JY as openTaskOutputForRead,
  Ibt as openVerifiedTaskOutput,
  USn as peekTaskOutputDir,
  N7e as persistTaskOutputSnapshot,
  L7e as releaseConvergentTaskOutputBinding,
  nyr as repointTaskOutputSymlinks,
  Kre as tailTaskOutput,
  jSn as taskOutputDirExclusions,
  $Sn as taskOutputDirForSession,
  WSn as unlinkTaskOutput,
  GSn as writeTaskOutputSnapshot,
} from "./chunk-x3txegas.js";
