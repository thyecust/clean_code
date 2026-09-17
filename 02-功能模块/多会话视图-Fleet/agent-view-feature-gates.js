// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { initializeGrowthBook, getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { env as a, antEnv } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { capitalize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { getMergedSettings } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
function isAgentViewDisabled() {
  return r() !== null;
}
function r() {
  if (a.CLAUDE_CODE_DISABLE_AGENT_VIEW)
    return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
  if (getMergedSettings()?.settings.disableAgentView === !0)
    return "is disabled by the 'disableAgentView' setting";
  return null;
}
function isAgentsFleetEnabled() {
  return !isAgentViewDisabled();
}
async function ensureFleetGateHydrated(e = {}) {
  if (getMergedSettings() === null) {
    let { getSettingsWithErrors: t } = await import("../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js");
    t();
  }
  if (e.kickGrowthBook !== !1) initializeGrowthBook().catch(() => {});
}
function isPastSessionsExperimentEnabled() {
  return (
    antEnv.CLAUDE_CODE_FLEET_PAST_SESSIONS === !0 ||
    getFeatureValue_CACHED_MAY_BE_STALE("tengu_fleet_past_sessions", !1)
  );
}
function isDaemonCliEnabled() {
  return isAgentsFleetEnabled();
}
function isDaemonWorkerRegistryEnabled() {
  return !1;
}
function isDaemonServiceInstallEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_amber_anchor", !1);
}
function isDaemonServiceRecalled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_copper_lantern", !1);
}
function daemonColdStartGbDefault() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_quiet_harbor", !1) ? "ask" : "transient";
}
function bgSupervisorNoun() {
  return isDaemonServiceInstallEnabled() ? "daemon" : "background service";
}
function bgSupervisorNounCap() {
  return capitalize(bgSupervisorNoun());
}
function daemonHint(e) {
  return isDaemonCliEnabled() ? ` \u2014 run 'claude daemon ${e}'` : "";
}
function fleetGateRejected(e, t) {
  let o = t ?? r() ?? "is not available in this environment";
  (process.stderr.write(`'${e}' ${o}.
`),
    process.exit(1));
}
var AGENT_VIEW_RELAUNCH_ENV_KEY = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";
function isLaunchComposerEnabled() {
  return !1;
}
function shouldShowLaunchComposer(e) {
  return !1;
}
function isListReturnRelaunch() {
  return !!a.CLAUDE_AGENTS_SELECT;
}
function consumeAgentViewRelaunchMarker() {
  let e = Ie(process.env[AGENT_VIEW_RELAUNCH_ENV_KEY]);
  return (delete process.env[AGENT_VIEW_RELAUNCH_ENV_KEY], e);
}
export {
  isAgentViewDisabled,
  isAgentsFleetEnabled,
  ensureFleetGateHydrated,
  isPastSessionsExperimentEnabled,
  isDaemonCliEnabled,
  isDaemonWorkerRegistryEnabled,
  isDaemonServiceInstallEnabled,
  isDaemonServiceRecalled,
  daemonColdStartGbDefault,
  bgSupervisorNoun,
  bgSupervisorNounCap,
  daemonHint,
  fleetGateRejected,
  AGENT_VIEW_RELAUNCH_ENV_KEY,
  isLaunchComposerEnabled,
  shouldShowLaunchComposer,
  isListReturnRelaunch,
  consumeAgentViewRelaunchMarker,
};
