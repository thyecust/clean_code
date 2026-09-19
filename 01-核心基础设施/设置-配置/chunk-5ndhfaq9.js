// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ie, rs, zn, RS } from "../../00-第三方库/lodash/lodash.207999qb.js";
var f = /^[a-z]{2,}(?:-[a-z0-9]+){0,4}$/i;
function m(e) {
  return !!e && f.test(e);
}
function parseRegionName(e) {
  return m(e) ? e : void 0;
}
var l = /^[+-]?(\d+(\.\d*)?|\.\d+)[eE][+-]?\d+$/,
  c = /^[+-]?\d{1,3}([_,\u00A0\u202F ])\d{3}(?:\1\d{3})*$/,
  E = /[_,\u00A0\u202F ]/g;
function N(e) {
  if (e.length <= 32) {
    if (l.test(e)) {
      let n = Number(e);
      return Number.isInteger(n) ? n : NaN;
    }
    if (c.test(e)) return parseInt(e.replace(E, ""), 10);
  }
  return;
}
function parseConfigInteger(e) {
  let n = String(e).trim();
  return N(n) ?? parseInt(n, 10);
}
function parseNumericValue(e) {
  let n = Number(e);
  if (!Number.isNaN(n)) return n;
  let r = String(e).trim();
  return r.length <= 32 && c.test(r) ? parseInt(r.replace(E, ""), 10) : NaN;
}
import { homedir } from "os";
import { basename, dirname, join, resolve } from "path";
var d = [
  ["claude-3-5-sonnet", "VERTEX_REGION_CLAUDE_3_5_SONNET"],
  ["claude-3-7-sonnet", "VERTEX_REGION_CLAUDE_3_7_SONNET"],
  ["claude-sonnet-4-5", "VERTEX_REGION_CLAUDE_4_5_SONNET"],
  ["claude-sonnet-4-6", "VERTEX_REGION_CLAUDE_4_6_SONNET"],
  ["claude-3-5-haiku", "VERTEX_REGION_CLAUDE_3_5_HAIKU"],
  ["claude-fable-5-1", "VERTEX_REGION_CLAUDE_FABLE_5_1"],
  ["claude-haiku-4-5", "VERTEX_REGION_CLAUDE_HAIKU_4_5"],
  ["claude-opus-4-1", "VERTEX_REGION_CLAUDE_4_1_OPUS"],
  ["claude-opus-4-5", "VERTEX_REGION_CLAUDE_4_5_OPUS"],
  ["claude-opus-4-6", "VERTEX_REGION_CLAUDE_4_6_OPUS"],
  ["claude-opus-4-7", "VERTEX_REGION_CLAUDE_4_7_OPUS"],
  ["claude-opus-4-8", "VERTEX_REGION_CLAUDE_4_8_OPUS"],
  ["claude-sonnet-4", "VERTEX_REGION_CLAUDE_4_0_SONNET"],
  ["claude-sonnet-5", "VERTEX_REGION_CLAUDE_5_SONNET"],
  ["claude-fable-5", "VERTEX_REGION_CLAUDE_FABLE_5"],
  ["claude-opus-4", "VERTEX_REGION_CLAUDE_4_0_OPUS"],
  ["claude-opus-5", "VERTEX_REGION_CLAUDE_5_OPUS"],
];
function s() {
  return process.env.CLAUDE_CONFIG_DIR;
}
var getClaudeConfigDir = rs(() => (s() ?? join(homedir(), ".claude")).normalize("NFC"), s);
function isSameAsConfigDir(e) {
  return resolve(getClaudeConfigDir()) === resolve(e);
}
function getTeamsDir() {
  return join(getClaudeConfigDir(), "teams");
}
function _() {
  return process.env.CLAUDE_CODE_PROJECT_DIR_NAME;
}
var D = /^[A-Za-z0-9_-]{1,64}$/,
  C = /^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;
function parseProjectDirName(e) {
  if (!e || !D.test(e) || C.test(e)) return;
  return e;
}
function I() {
  return `${s() ?? ""}\x00${_() ?? ""}`;
}
var getConfiguredProjectDirName = rs(() => (s() ? parseProjectDirName(_()) : void 0), I);
function isConfigDirPath(e) {
  let n = getClaudeConfigDir();
  if (resolve(e) === resolve(n)) return !0;
  return p(e) === p(n);
}
function p(e) {
  let n = resolve(e),
    r = dirname(n),
    o = RS(r) ?? r;
  return zn(join(o, basename(n)));
}
function hasNodeOption(e) {
  let n = process.env.NODE_OPTIONS;
  if (!n) return !1;
  return n.split(/\s+/).includes(e);
}
function parseConfigIntegerOrDefault(e, n) {
  if (e === void 0) return n;
  let r = parseConfigInteger(e);
  return Number.isNaN(r) ? n : r;
}
function resolveMaxTurns(e) {
  if (e !== void 0) return e;
  let n = process.env.CLAUDE_CODE_MAX_TURNS?.trim();
  if (!n) return;
  let r = parseNumericValue(n);
  if (!Number.isInteger(r) || r <= 0)
    throw Error(`CLAUDE_CODE_MAX_TURNS must be a positive integer; got "${n}"`);
  return r;
}
function a(e) {
  let n = process.argv.indexOf("--");
  return (n === -1 ? process.argv : process.argv.slice(0, n)).includes(e);
}
function isSimpleMode() {
  return Ie(process.env.CLAUDE_CODE_SIMPLE) || a("--bare");
}
function isSafeMode() {
  return Ie(process.env.CLAUDE_CODE_SAFE_MODE) || a("--safe-mode");
}
function isRestrictedMode() {
  return Ie(process.env.CLAUDE_CODE_RESTRICTED);
}
function getSafeModeExitHint() {
  return a("--safe-mode")
    ? "restart without --safe-mode"
    : "unset CLAUDE_CODE_SAFE_MODE";
}
function isSupervisedMode() {
  return Ie(process.env.CLAUDE_CODE_SUPERVISED);
}
function parseEnvAssignments(e) {
  let n = {};
  if (e)
    for (let r of e) {
      let [o, ...u] = r.split("=");
      if (!o || u.length === 0)
        throw Error(
          `Invalid environment variable format: ${r}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`,
        );
      n[o] = u.join("=");
    }
  return n;
}
function getDefaultGcpRegion() {
  return parseRegionName(process.env.CLOUD_ML_REGION?.trim()) || "us-east5";
}
function buildVertexBaseUrl(e) {
  switch (e) {
    case "global":
      return "https://aiplatform.googleapis.com";
    case "us":
    case "eu":
      return `https://aiplatform.${e}.rep.googleapis.com`;
    default:
      return `https://${e}-aiplatform.googleapis.com`;
  }
}
function shouldMaintainProjectWorkingDir() {
  return Ie(process.env.CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR);
}
function xg() {
  return !1;
}
function isInProtectedNamespace() {
  return !1;
}
function getCooContext() {
  return { namespace: void 0, cluster: void 0 };
}
function getVertexRegionForModel(e) {
  if (e) {
    let n = d.find(([r]) => e.startsWith(r));
    if (n) return parseRegionName(process.env[n[1]]?.trim()) || getDefaultGcpRegion();
  }
  return getDefaultGcpRegion();
}
export {
  parseRegionName,
  parseConfigInteger,
  parseNumericValue,
  getClaudeConfigDir,
  isSameAsConfigDir,
  getTeamsDir,
  parseProjectDirName,
  getConfiguredProjectDirName,
  isConfigDirPath,
  hasNodeOption,
  parseConfigIntegerOrDefault,
  resolveMaxTurns,
  isSimpleMode,
  isSafeMode,
  isRestrictedMode,
  getSafeModeExitHint,
  isSupervisedMode,
  parseEnvAssignments,
  getDefaultGcpRegion,
  buildVertexBaseUrl,
  shouldMaintainProjectWorkingDir,
  xg,
  isInProtectedNamespace,
  getCooContext,
  getVertexRegionForModel,
};
