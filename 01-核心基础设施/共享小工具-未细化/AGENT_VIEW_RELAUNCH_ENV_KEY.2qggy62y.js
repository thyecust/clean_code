// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 78 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  ny,
  ensureFleetGateHydrated as C$e,
  isPastSessionsExperimentEnabled as FJe,
  isDaemonCliEnabled as Tve,
  isDaemonWorkerRegistryEnabled as JK,
  isDaemonServiceInstallEnabled as Sme,
  isDaemonServiceRecalled as AAn,
  daemonColdStartGbDefault as yyr,
  bgSupervisorNoun as Lc,
  bgSupervisorNounCap as QK,
  daemonHint as zJ,
  fleetGateRejected as bme,
  sAt,
  isLaunchComposerEnabled as b4t,
  shouldShowLaunchComposer as Syr,
  isListReturnRelaunch as CAn,
  vAn,
} from "./agent-view-feature-gates.js";
export {
  sAt as AGENT_VIEW_RELAUNCH_ENV_KEY,
  Lc as bgSupervisorNoun,
  QK as bgSupervisorNounCap,
  vAn as consumeAgentViewRelaunchMarker,
  yyr as daemonColdStartGbDefault,
  zJ as daemonHint,
  C$e as ensureFleetGateHydrated,
  bme as fleetGateRejected,
  ny as isAgentsFleetEnabled,
  Tve as isDaemonCliEnabled,
  Sme as isDaemonServiceInstallEnabled,
  AAn as isDaemonServiceRecalled,
  JK as isDaemonWorkerRegistryEnabled,
  b4t as isLaunchComposerEnabled,
  CAn as isListReturnRelaunch,
  FJe as isPastSessionsExperimentEnabled,
  Syr as shouldShowLaunchComposer,
};
