// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { X, ai } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
var EXTERNAL_PERMISSION_MODES = [
    "acceptEdits",
    "auto",
    "bypassPermissions",
    "default",
    "dontAsk",
    "plan",
  ],
  t = [...EXTERNAL_PERMISSION_MODES],
  PERMISSION_MODES = t,
  PERMISSION_MODE_MANUAL_ALIAS = "manual";
function normalizePermissionModeAlias(e) {
  return e === "manual" ? "default" : e;
}
function parsePermissionMode(e) {
  let o = normalizePermissionModeAlias(e);
  return t.find((n) => n === o);
}
var UNRECOGNIZED_PERMISSION_MODE_ERROR = `Cannot set permission mode: must be one of ${EXTERNAL_PERMISSION_MODES.join(", ")}`,
  i = {
    dangerousRemoval: { bypassImmune: !0, classifierRouted: !0 },
    backgroundOperator: { bypassImmune: !1, classifierRouted: !0 },
    suspiciousWindowsPath: { bypassImmune: !1, classifierRouted: !0 },
    isolatePeerMachines: { bypassImmune: !0, classifierRouted: !1 },
    restrictedMode: { bypassImmune: !0, classifierRouted: !1 },
    outsideReadsBlocked: { bypassImmune: !0, classifierRouted: !1 },
    ...{},
  };
function isBypassImmuneCircuitBreaker(e) {
  return (
    e.circuitBreaker !== void 0 && i[e.circuitBreaker]?.bypassImmune === !0
  );
}
function isClassifierRoutedCircuitBreaker(e) {
  return (
    e.circuitBreaker !== void 0 && i[e.circuitBreaker]?.classifierRouted === !0
  );
}
function isPreAskDeny(e) {
  return e.decideLocation === "pre-ask";
}
function isRecordableDenial(e, o) {
  return e.behavior !== "allow" && e !== o;
}
var PERMISSION_DECISION_REASON_TYPES = [
  "rule",
  "mode",
  "subcommandResults",
  "permissionPromptTool",
  "hook",
  "asyncAgent",
  "sandboxOverride",
  "workingDir",
  "safetyCheck",
  "classifier",
  "other",
];
var SANDBOX_AUTO_ALLOW_REASON = "Auto-allowed with sandbox (autoAllowBashIfSandboxed enabled)",
  READ_ONLY_AUTO_ALLOW_REASON = "Read-only command is allowed",
  RESTRICTED_MODE_DENY_REASON = "--restricted: path outside the working directory",
  OUTSIDE_READS_BLOCKED_DENY_REASON =
    "Reads outside the working directories are blocked (permissions.blockReadsOutsideWorkingDirectories). Add the directory with /add-dir, or remove that setting.",
  INLINE_CODE_FLAGS = new Map([
    ["python", new Set(["-c"])],
    ["node", new Set(["-e", "--eval", "-p", "--print"])],
    ["nodejs", new Set(["-e", "--eval", "-p", "--print"])],
    ["bun", new Set(["-e", "--eval", "-p", "--print"])],
    ["perl", new Set(["-e", "-E"])],
    ["ruby", new Set(["-e"])],
    ["php", new Set(["-r"])],
    ["bash", new Set(["-c"])],
    ["sh", new Set(["-c"])],
    ["zsh", new Set(["-c"])],
    ["dash", new Set(["-c"])],
    ["ksh", new Set(["-c"])],
    ["lua", new Set(["-e"])],
    ["luajit", new Set(["-e"])],
    ["tsx", new Set(["-e", "--eval", "-p", "--print"])],
    ["deno", new Set(["eval"])],
    ["Rscript", new Set(["-e"])],
    ["julia", new Set(["-e", "-E"])],
    ["osascript", new Set(["-e"])],
  ]);
function isOutsideReadsBlockedAsk(e) {
  return (
    e?.type === "safetyCheck" && e.circuitBreaker === "outsideReadsBlocked"
  );
}
function outsideReadsRuntimePathAsk(e) {
  let o = `${e} names a path that is computed at run time, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)`;
  return {
    behavior: "ask",
    message: o,
    decisionReason: {
      type: "safetyCheck",
      reason: o,
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked",
    },
  };
}
function outsideReadsTooComplexAsk(e) {
  let o = `${e}; under the read block (permissions.blockReadsOutsideWorkingDirectories) a command the shell parser cannot analyze asks the person`;
  return {
    behavior: "ask",
    message: o,
    decisionReason: {
      type: "safetyCheck",
      reason: o,
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked",
    },
    suggestions: [],
  };
}
function outsideReadsSedScriptAsk() {
  return {
    behavior: "ask",
    message:
      "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)",
    decisionReason: {
      type: "safetyCheck",
      reason:
        "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)",
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked",
    },
  };
}
var BASH_COMMAND_CLAMP_DENY_REASON = "bashCommandClamp: no clamp rule matches this command",
  BASH_COMMAND_CLAMP_CRASH_REASON = "bashCommandClamp fail-closed: permission check crashed",
  CLASSIFIER_UNAVAILABLE_REASON = "Classifier unavailable",
  CLASSIFIER_PARSE_FAILURE_REASON_STEM =
    "Auto mode could not evaluate this action and is blocking it for safety",
  CLASSIFIER_TRANSCRIPT_TOO_LONG_REASON =
    "Auto mode classifier transcript exceeded context window \u2014 falling back to manual approval (try /compact to reduce conversation size)",
  HOOK_REWRITTEN_INPUT_ASK_REASON = "ask rule on hook-rewritten input",
  HOOK_REWRITE_HEADLESS_DENY_REASON = { type: "asyncAgent", reason: HOOK_REWRITTEN_INPUT_ASK_REASON },
  HOOK_ALLOW_FLAGGED_HEADLESS_DENY_REASON = {
    type: "asyncAgent",
    reason:
      "tool requires user interaction; no prompt available in headless mode",
  },
  NO_APPROVAL_SURFACE_REASON =
    "no approval surface in this session; permission request denied automatically",
  NO_APPROVAL_SURFACE_DENY_REASON = { type: "asyncAgent", reason: NO_APPROVAL_SURFACE_REASON },
  PROMPT_TOOL_ALLOW_FLAGGED_MCP_DENY_REASON = {
    type: "other",
    reason:
      "MCP tool requires user interaction; not supported via --permission-prompt-tool",
  },
  CAN_USE_TOOL_STREAM_CLOSED_REASON = "tool permission stream closed before response received",
  CAN_USE_TOOL_INVALID_RESULT_REASON = "canUseTool returned a schema-invalid permission result",
  CAN_USE_TOOL_REQUEST_FAILED_REASON = "tool permission request failed",
  CAN_USE_TOOL_ABORTED_REASON = "tool permission request aborted",
  CAN_USE_TOOL_STREAM_CLOSED_DENY_REASON = { type: "other", reason: CAN_USE_TOOL_STREAM_CLOSED_REASON },
  CAN_USE_TOOL_INVALID_RESULT_DENY_REASON = { type: "other", reason: CAN_USE_TOOL_INVALID_RESULT_REASON },
  CAN_USE_TOOL_PROMPT_TOOL_GONE_DENY_REASON = { type: "other", reason: "permission prompt tool no longer connected" },
  CAN_USE_TOOL_REQUEST_FAILED_DENY_REASON = { type: "other", reason: CAN_USE_TOOL_REQUEST_FAILED_REASON },
  CAN_USE_TOOL_ABORTED_DENY_REASON = { type: "other", reason: CAN_USE_TOOL_ABORTED_REASON };
var CLAUDE_BULLET_GLYPH = getCurrentPlatform() === "macos" ? "\u23FA" : "\u25CF",
  BULLET_OPERATOR_GLYPH = "\u2219",
  SEARCH_PREFIX_GLYPH = "\u2315",
  CLAUDE_ASTERISK_GLYPH = "\u273B",
  THEREFORE_GLYPH = "\u2234",
  PROPORTION_GLYPH = "\u2237",
  c = "\u2235",
  THINKING_SPINNER_FRAMES = [THEREFORE_GLYPH, PROPORTION_GLYPH, c, PROPORTION_GLYPH],
  DOTTED_CIRCLE_GLYPH = "\u25CC",
  UP_ARROW_GLYPH = "\u2191",
  DOWN_ARROW_GLYPH = "\u2193",
  BRANCH_ARROW_GLYPH = "\u21B3",
  LEFT_ARROW_GLYPH = "\u2190",
  RIGHT_ARROW_GLYPH = "\u2192",
  RETURN_KEY_GLYPH = "\u23CE",
  FAST_MODE_GLYPH = "\u21AF",
  EFFORT_LOW_GLYPH = "\u25CB",
  EFFORT_MEDIUM_GLYPH = "\u25D0",
  EFFORT_HIGH_GLYPH = "\u25CF",
  EFFORT_XHIGH_GLYPH = "\u25C9",
  EFFORT_MAX_GLYPH = "\u25C8",
  ULTRACODE_EFFORT_GLYPH = "\u2726",
  GOAL_MODE_GLYPH = "\u25CE",
  PAUSE_GLYPH = "\u23F8",
  AUTO_ACCEPT_GLYPH = "\u23F5\u23F5",
  UPDATE_GLYPH = "\u21BB",
  INBOUND_ARROW_GLYPH = "\u2190",
  FORK_GLYPH = "\u2442",
  LOZENGE_OUTLINE_GLYPH = "\u25C7",
  LOZENGE_FILLED_GLYPH = "\u25C6",
  REFERENCE_MARK_GLYPH = "\u203B",
  WARNING_GLYPH = "\u26A0",
  ARTIFACT_MARKER_GLYPH = "\u29C9";
function withArtifactMarker(e) {
  return `${ARTIFACT_MARKER_GLYPH} ${e}`;
}
var MUSIC_NOTE_GLYPH = "\u266A";
var BLOCKQUOTE_BAR_GLYPH = "\u258E",
  FULL_BLOCK_GLYPH = "\u2588",
  HORIZONTAL_LINE_GLYPH = "\u2500",
  ASCII_SPINNER_FRAMES = ["\xB7|\xB7", "\xB7/\xB7", "\xB7\u2014\xB7", "\xB7\\\xB7"],
  CHECK_MARK_GLYPH = "\xB7\u2714\uFE0E\xB7",
  CROSS_MARK_GLYPH = "\xD7",
  MULTIPLICATION_X_GLYPH = "\u2715",
  LOG_BULLET_GLYPH = "\u25B8",
  PROGRESS_BAR_CELL_GLYPH = "\u283F",
  d = [
    "\u280B",
    "\u2819",
    "\u2839",
    "\u2838",
    "\u283C",
    "\u2834",
    "\u2826",
    "\u2827",
    "\u2807",
    "\u280F",
  ];
function getBrailleSpinnerFrames() {
  return d;
}
var ROUNDED_BOX_CORNER_GLYPHS = {
    topLeft: "\u256D",
    topRight: "\u256E",
    bottomLeft: "\u2570",
    bottomRight: "\u256F",
  },
  EN_DASH_GLYPH = "\u2013",
  TREE_CONNECTOR_GLYPHS = {
    branch: "\u251C",
    last: "\u2514",
    pipe: "\u2502",
    teeDown: "\u252C",
    teeUp: "\u2534",
  };
var permissionModeSchema = createLazyValue(() => ai(normalizePermissionModeAlias, X(PERMISSION_MODES))),
  externalPermissionModeSchema = createLazyValue(() => ai(normalizePermissionModeAlias, X(EXTERNAL_PERMISSION_MODES))),
  r = {
    plan: 0,
    bubble: 1,
    default: 1,
    dontAsk: 1,
    acceptEdits: 2,
    auto: 3,
    bypassPermissions: 4,
  };
function clampPermissionMode(e, o) {
  if (!e) return;
  if (o === "auto" && e === "acceptEdits") return;
  return r[e] <= r[o] ? e : void 0;
}
var a = {
  default: {
    title: "Manual",
    shortTitle: "Manual",
    indicator: "manual mode",
    symbol: PAUSE_GLYPH,
    color: "inactive",
    external: "default",
  },
  plan: {
    title: "Plan",
    shortTitle: "Plan",
    indicator: "plan mode",
    symbol: PAUSE_GLYPH,
    color: "planMode",
    external: "plan",
  },
  acceptEdits: {
    title: "Accept edits",
    shortTitle: "Accept",
    indicator: "accept edits",
    symbol: AUTO_ACCEPT_GLYPH,
    color: "autoAccept",
    external: "acceptEdits",
  },
  bypassPermissions: {
    title: "Bypass Permissions",
    shortTitle: "Bypass",
    indicator: "bypass permissions",
    symbol: AUTO_ACCEPT_GLYPH,
    color: "error",
    external: "bypassPermissions",
  },
  dontAsk: {
    title: "Don't Ask",
    shortTitle: "DontAsk",
    indicator: "don't ask",
    symbol: AUTO_ACCEPT_GLYPH,
    color: "error",
    external: "dontAsk",
  },
  auto: {
    title: "Auto",
    shortTitle: "Auto",
    indicator: "auto mode",
    symbol: AUTO_ACCEPT_GLYPH,
    color: "warning",
    external: "auto",
  },
};
function isSelectablePermissionMode(e) {
  return e !== "bubble";
}
function s(e) {
  return a[e] ?? a.default;
}
function getExternalPermissionMode(e) {
  return s(e).external;
}
function buildPermissionModeMetadata(e) {
  let o = getExternalPermissionMode(e.newMode),
    n = o === "plan" && Boolean(e.newUltraplan),
    l =
      e.rule === "while-latched"
        ? n
        : n && getExternalPermissionMode(e.prevMode) !== "plan" && !e.prevUltraplan;
  return { permission_mode: o, is_ultraplan_mode: l ? !0 : null };
}
function parsePermissionModeOrDefault(e) {
  return parsePermissionMode(e) ?? "default";
}
function getPermissionModeTitle(e) {
  return s(e).title;
}
function isDefaultPermissionMode(e) {
  return e === "default" || e === void 0;
}
function resolvePermissionDecisionKind(e, o) {
  if (e === "auto") return "classify";
  if (e === "bypassPermissions" || (e === "plan" && o)) return "allow";
  if (e === "dontAsk") return "deny";
  return "ask";
}
function getPermissionModeIndicator(e) {
  return s(e).indicator;
}
function getPermissionModeSymbol(e) {
  return s(e).symbol;
}
function getPermissionModeColor(e) {
  return s(e).color;
}
export {
  EXTERNAL_PERMISSION_MODES,
  PERMISSION_MODES,
  PERMISSION_MODE_MANUAL_ALIAS,
  normalizePermissionModeAlias,
  parsePermissionMode,
  UNRECOGNIZED_PERMISSION_MODE_ERROR,
  isBypassImmuneCircuitBreaker,
  isClassifierRoutedCircuitBreaker,
  isPreAskDeny,
  isRecordableDenial,
  PERMISSION_DECISION_REASON_TYPES,
  SANDBOX_AUTO_ALLOW_REASON,
  READ_ONLY_AUTO_ALLOW_REASON,
  RESTRICTED_MODE_DENY_REASON,
  OUTSIDE_READS_BLOCKED_DENY_REASON,
  INLINE_CODE_FLAGS,
  isOutsideReadsBlockedAsk,
  outsideReadsRuntimePathAsk,
  outsideReadsTooComplexAsk,
  outsideReadsSedScriptAsk,
  BASH_COMMAND_CLAMP_DENY_REASON,
  BASH_COMMAND_CLAMP_CRASH_REASON,
  CLASSIFIER_UNAVAILABLE_REASON,
  CLASSIFIER_PARSE_FAILURE_REASON_STEM,
  CLASSIFIER_TRANSCRIPT_TOO_LONG_REASON,
  HOOK_REWRITTEN_INPUT_ASK_REASON,
  HOOK_REWRITE_HEADLESS_DENY_REASON,
  HOOK_ALLOW_FLAGGED_HEADLESS_DENY_REASON,
  NO_APPROVAL_SURFACE_REASON,
  NO_APPROVAL_SURFACE_DENY_REASON,
  PROMPT_TOOL_ALLOW_FLAGGED_MCP_DENY_REASON,
  CAN_USE_TOOL_STREAM_CLOSED_REASON,
  CAN_USE_TOOL_INVALID_RESULT_REASON,
  CAN_USE_TOOL_REQUEST_FAILED_REASON,
  CAN_USE_TOOL_ABORTED_REASON,
  CAN_USE_TOOL_STREAM_CLOSED_DENY_REASON,
  CAN_USE_TOOL_INVALID_RESULT_DENY_REASON,
  CAN_USE_TOOL_PROMPT_TOOL_GONE_DENY_REASON,
  CAN_USE_TOOL_REQUEST_FAILED_DENY_REASON,
  CAN_USE_TOOL_ABORTED_DENY_REASON,
  CLAUDE_BULLET_GLYPH,
  BULLET_OPERATOR_GLYPH,
  SEARCH_PREFIX_GLYPH,
  CLAUDE_ASTERISK_GLYPH,
  THEREFORE_GLYPH,
  PROPORTION_GLYPH,
  THINKING_SPINNER_FRAMES,
  DOTTED_CIRCLE_GLYPH,
  UP_ARROW_GLYPH,
  DOWN_ARROW_GLYPH,
  BRANCH_ARROW_GLYPH,
  LEFT_ARROW_GLYPH,
  RIGHT_ARROW_GLYPH,
  RETURN_KEY_GLYPH,
  FAST_MODE_GLYPH,
  EFFORT_LOW_GLYPH,
  EFFORT_MEDIUM_GLYPH,
  EFFORT_HIGH_GLYPH,
  EFFORT_XHIGH_GLYPH,
  EFFORT_MAX_GLYPH,
  ULTRACODE_EFFORT_GLYPH,
  GOAL_MODE_GLYPH,
  PAUSE_GLYPH,
  AUTO_ACCEPT_GLYPH,
  UPDATE_GLYPH,
  INBOUND_ARROW_GLYPH,
  FORK_GLYPH,
  LOZENGE_OUTLINE_GLYPH,
  LOZENGE_FILLED_GLYPH,
  REFERENCE_MARK_GLYPH,
  WARNING_GLYPH,
  ARTIFACT_MARKER_GLYPH,
  withArtifactMarker,
  MUSIC_NOTE_GLYPH,
  BLOCKQUOTE_BAR_GLYPH,
  FULL_BLOCK_GLYPH,
  HORIZONTAL_LINE_GLYPH,
  ASCII_SPINNER_FRAMES,
  CHECK_MARK_GLYPH,
  CROSS_MARK_GLYPH,
  MULTIPLICATION_X_GLYPH,
  LOG_BULLET_GLYPH,
  PROGRESS_BAR_CELL_GLYPH,
  getBrailleSpinnerFrames,
  ROUNDED_BOX_CORNER_GLYPHS,
  EN_DASH_GLYPH,
  TREE_CONNECTOR_GLYPHS,
  permissionModeSchema,
  externalPermissionModeSchema,
  clampPermissionMode,
  isSelectablePermissionMode,
  getExternalPermissionMode,
  buildPermissionModeMetadata,
  parsePermissionModeOrDefault,
  getPermissionModeTitle,
  isDefaultPermissionMode,
  resolvePermissionDecisionKind,
  getPermissionModeIndicator,
  getPermissionModeSymbol,
  getPermissionModeColor,
};
