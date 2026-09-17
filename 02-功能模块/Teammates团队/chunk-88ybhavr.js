// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { resolveSetting } from "../上下文压缩-Compact/resolve-user-intent-setting.js";
var DEFAULT_TEAMMATE_MODE = "in-process";
class TeammateModeSnapshot {
  captured = null;
  cliOverride = null;
  setCliOverride(e) {
    this.cliOverride = e;
  }
  capture(e) {
    this.captured = e;
  }
  replaceWith(e) {
    ((this.captured = e), (this.cliOverride = null));
  }
}
var teammateModeSnapshots = new j(() => new TeammateModeSnapshot());
function t() {
  return teammateModeSnapshots.of(B().host);
}
function setCliTeammateModeOverride(e) {
  t().setCliOverride(e);
}
function getCliTeammateModeOverride() {
  return t().cliOverride;
}
function clearCliTeammateModeOverride(e) {
  (t().replaceWith(e),
    logForDebugging(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`));
}
function hasTeammateModeSnapshot() {
  return t().captured !== null;
}
function captureTeammateModeSnapshot() {
  let e = t();
  if (e.cliOverride)
    (e.capture(e.cliOverride),
      logForDebugging(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`));
  else
    (e.capture(resolveSetting("teammateMode", DEFAULT_TEAMMATE_MODE).value),
      logForDebugging(`[TeammateModeSnapshot] Captured from config: ${e.captured}`));
}
function getTeammateModeFromSnapshot() {
  let e = t();
  if (e.captured === null)
    (logError(
      Error(
        "getTeammateModeFromSnapshot called before capture - this indicates an initialization bug",
      ),
    ),
      captureTeammateModeSnapshot());
  return e.captured ?? DEFAULT_TEAMMATE_MODE;
}
export { DEFAULT_TEAMMATE_MODE, TeammateModeSnapshot, teammateModeSnapshots, setCliTeammateModeOverride, getCliTeammateModeOverride, clearCliTeammateModeOverride, hasTeammateModeSnapshot, captureTeammateModeSnapshot, getTeammateModeFromSnapshot };
