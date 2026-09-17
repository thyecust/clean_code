// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 210 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  cleanupTerminalModes as Z7,
  emitExitMessage as Dte,
  emitScrollTelemetrySummary as yUt,
  flushAnalyticsSinks as Eue,
  shutdownCoordinators as SUt,
  setupGracefulShutdown as Jun,
  markPrintModeSignalHandlersRegistered as C4e,
  markOwnsControllingTerminal as bUt,
  markStartupActionStarted as Qun,
  gracefulShutdown as xn,
  gracefulShutdownSync as Pr,
  isShuttingDown as $s,
  claimShutdown as Zun,
  registerBeforeInteractiveShutdown as wUt,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
export {
  Zun as claimShutdown,
  Z7 as cleanupTerminalModes,
  Dte as emitExitMessage,
  yUt as emitScrollTelemetrySummary,
  Eue as flushAnalyticsSinks,
  xn as gracefulShutdown,
  Pr as gracefulShutdownSync,
  $s as isShuttingDown,
  bUt as markOwnsControllingTerminal,
  C4e as markPrintModeSignalHandlersRegistered,
  Qun as markStartupActionStarted,
  wUt as registerBeforeInteractiveShutdown,
  Jun as setupGracefulShutdown,
  SUt as shutdownCoordinators,
};
