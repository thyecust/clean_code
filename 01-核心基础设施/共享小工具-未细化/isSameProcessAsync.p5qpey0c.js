// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载 23 个依赖 chunk；经查它们均已由主入口初始化，已移除以还原真实模块边界。
export {
  Xse as captureProcessStartTimeAsync,
  _kn as getAncestorPidsAsync,
  bvt as getAncestorPidsCheckedAsync,
  hkn as getAncestorPidsLinuxSync,
  ykn as getProcessCommand,
  HRe as getProcessCreationTimeMsAsync,
  Vse as getProcessStartTime,
  Ba as getProcessStartTimeAsync,
  xRe as getProcessStartTokenLinuxSync,
  mkn as isExitedProcessAsync,
  Vg as isProcessProvablyGone,
  wvt as isSameProcess,
  Pm as isSameProcessAsync,
  gkn as looksLikeFullHostProcessTable,
  O6 as ownProcStart,
  gA as ownProcStartAsync,
  Kse as ownProcStartMemo,
  kU as procIdentityFields,
  jT as procIdentityOf,
  mA as provenSameProcessAsync,
  m5t as readLinuxProcState,
  Tq as reapDetachedRepl,
  I5 as sigtermThenKill,
  BZe as startTokensEqualOrCrossFormat,
} from "../核心工具-进程与信号/chunk-qjqntsq2.js";
export {
  Vs as isProcessRunning,
} from "./chunk-z36ns74j.js";
