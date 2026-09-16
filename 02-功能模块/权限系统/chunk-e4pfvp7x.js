// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { X, ai } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
var cL = [
    "acceptEdits",
    "auto",
    "bypassPermissions",
    "default",
    "dontAsk",
    "plan",
  ],
  t = [...cL],
  ly = t,
  qU = "manual";
function mf(e) {
  return e === "manual" ? "default" : e;
}
function gf(e) {
  let o = mf(e);
  return t.find((n) => n === o);
}
var Rie = `Cannot set permission mode: must be one of ${cL.join(", ")}`,
  i = {
    dangerousRemoval: { bypassImmune: !0, classifierRouted: !0 },
    backgroundOperator: { bypassImmune: !1, classifierRouted: !0 },
    suspiciousWindowsPath: { bypassImmune: !1, classifierRouted: !0 },
    isolatePeerMachines: { bypassImmune: !0, classifierRouted: !1 },
    restrictedMode: { bypassImmune: !0, classifierRouted: !1 },
    outsideReadsBlocked: { bypassImmune: !0, classifierRouted: !1 },
    ...{},
  };
function n2e(e) {
  return (
    e.circuitBreaker !== void 0 && i[e.circuitBreaker]?.bypassImmune === !0
  );
}
function s0n(e) {
  return (
    e.circuitBreaker !== void 0 && i[e.circuitBreaker]?.classifierRouted === !0
  );
}
function i0n(e) {
  return e.decideLocation === "pre-ask";
}
function Att(e, o) {
  return e.behavior !== "allow" && e !== o;
}
var a0n = [
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
var r2e = "Auto-allowed with sandbox (autoAllowBashIfSandboxed enabled)",
  vke = "Read-only command is allowed",
  Ctt = "--restricted: path outside the working directory",
  ov =
    "Reads outside the working directories are blocked (permissions.blockReadsOutsideWorkingDirectories). Add the directory with /add-dir, or remove that setting.",
  o2e = new Map([
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
function uL(e) {
  return (
    e?.type === "safetyCheck" && e.circuitBreaker === "outsideReadsBlocked"
  );
}
function Op(e) {
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
function zU(e) {
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
function vtt() {
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
var s2e = "bashCommandClamp: no clamp rule matches this command",
  Rtt = "bashCommandClamp fail-closed: permission check crashed",
  kie = "Classifier unavailable",
  F8t =
    "Auto mode could not evaluate this action and is blocking it for safety",
  lkt =
    "Auto mode classifier transcript exceeded context window \u2014 falling back to manual approval (try /compact to reduce conversation size)",
  $8t = "ask rule on hook-rewritten input",
  ktt = { type: "asyncAgent", reason: $8t },
  l0n = {
    type: "asyncAgent",
    reason:
      "tool requires user interaction; no prompt available in headless mode",
  },
  U8t =
    "no approval surface in this session; permission request denied automatically",
  c0n = { type: "asyncAgent", reason: U8t },
  u0n = {
    type: "other",
    reason:
      "MCP tool requires user interaction; not supported via --permission-prompt-tool",
  },
  i2e = "tool permission stream closed before response received",
  xie = "canUseTool returned a schema-invalid permission result",
  Hie = "tool permission request failed",
  xtt = "tool permission request aborted",
  d0n = { type: "other", reason: i2e },
  Htt = { type: "other", reason: xie },
  p0n = { type: "other", reason: "permission prompt tool no longer connected" },
  f0n = { type: "other", reason: Hie },
  Rke = { type: "other", reason: xtt };
var Ar = P() === "macos" ? "\u23FA" : "\u25CF",
  $Q = "\u2219",
  Olr = "\u2315",
  Dw = "\u273B",
  a2e = "\u2234",
  ckt = "\u2237",
  c = "\u2235",
  ukt = [a2e, ckt, c, ckt],
  Dlr = "\u25CC",
  sv = "\u2191",
  Lw = "\u2193",
  Itt = "\u21B3",
  DP = "\u2190",
  Llr = "\u2192",
  kke = "\u23CE",
  Gq = "\u21AF",
  Mlr = "\u25CB",
  Ptt = "\u25D0",
  m0n = "\u25CF",
  Nlr = "\u25C9",
  Flr = "\u25C8",
  dkt = "\u2726",
  Ott = "\u25CE",
  pkt = "\u23F8",
  xke = "\u23F5\u23F5",
  g0n = "\u21BB",
  h0n = "\u2190",
  mS = "\u2442",
  Dp = "\u25C7",
  r_ = "\u25C6",
  _0n = "\u203B",
  iv = "\u26A0",
  Vl = "\u29C9";
function y0n(e) {
  return `${Vl} ${e}`;
}
var fkt = "\u266A";
var $lr = "\u258E",
  S0n = "\u2588",
  LP = "\u2500",
  mkt = ["\xB7|\xB7", "\xB7/\xB7", "\xB7\u2014\xB7", "\xB7\\\xB7"],
  Dtt = "\xB7\u2714\uFE0E\xB7",
  Ltt = "\xD7",
  b0n = "\u2715",
  A0 = "\u25B8",
  gkt = "\u283F",
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
function w0n() {
  return d;
}
var Tg = {
    topLeft: "\u256D",
    topRight: "\u256E",
    bottomLeft: "\u2570",
    bottomRight: "\u256F",
  },
  Ulr = "\u2013",
  v_ = {
    branch: "\u251C",
    last: "\u2514",
    pipe: "\u2502",
    teeDown: "\u252C",
    teeUp: "\u2534",
  };
var Blr = m(() => ai(mf, X(ly))),
  hkt = m(() => ai(mf, X(cL))),
  r = {
    plan: 0,
    bubble: 1,
    default: 1,
    dontAsk: 1,
    acceptEdits: 2,
    auto: 3,
    bypassPermissions: 4,
  };
function Y6(e, o) {
  if (!e) return;
  if (o === "auto" && e === "acceptEdits") return;
  return r[e] <= r[o] ? e : void 0;
}
var a = {
  default: {
    title: "Manual",
    shortTitle: "Manual",
    indicator: "manual mode",
    symbol: pkt,
    color: "inactive",
    external: "default",
  },
  plan: {
    title: "Plan",
    shortTitle: "Plan",
    indicator: "plan mode",
    symbol: pkt,
    color: "planMode",
    external: "plan",
  },
  acceptEdits: {
    title: "Accept edits",
    shortTitle: "Accept",
    indicator: "accept edits",
    symbol: xke,
    color: "autoAccept",
    external: "acceptEdits",
  },
  bypassPermissions: {
    title: "Bypass Permissions",
    shortTitle: "Bypass",
    indicator: "bypass permissions",
    symbol: xke,
    color: "error",
    external: "bypassPermissions",
  },
  dontAsk: {
    title: "Don't Ask",
    shortTitle: "DontAsk",
    indicator: "don't ask",
    symbol: xke,
    color: "error",
    external: "dontAsk",
  },
  auto: {
    title: "Auto",
    shortTitle: "Auto",
    indicator: "auto mode",
    symbol: xke,
    color: "warning",
    external: "auto",
  },
};
function E1(e) {
  return e !== "bubble";
}
function s(e) {
  return a[e] ?? a.default;
}
function _c(e) {
  return s(e).external;
}
function jlr(e) {
  let o = _c(e.newMode),
    n = o === "plan" && Boolean(e.newUltraplan),
    l =
      e.rule === "while-latched"
        ? n
        : n && _c(e.prevMode) !== "plan" && !e.prevUltraplan;
  return { permission_mode: o, is_ultraplan_mode: l ? !0 : null };
}
function Eb(e) {
  return gf(e) ?? "default";
}
function VU(e) {
  return s(e).title;
}
function Wlr(e) {
  return e === "default" || e === void 0;
}
function l2e(e, o) {
  if (e === "auto") return "classify";
  if (e === "bypassPermissions" || (e === "plan" && o)) return "allow";
  if (e === "dontAsk") return "deny";
  return "ask";
}
function dL(e) {
  return s(e).indicator;
}
function rhe(e) {
  return s(e).symbol;
}
function TA(e) {
  return s(e).color;
}
export {
  cL,
  ly,
  qU,
  mf,
  gf,
  Rie,
  n2e,
  s0n,
  i0n,
  Att,
  a0n,
  r2e,
  vke,
  Ctt,
  ov,
  o2e,
  uL,
  Op,
  zU,
  vtt,
  s2e,
  Rtt,
  kie,
  F8t,
  lkt,
  $8t,
  ktt,
  l0n,
  U8t,
  c0n,
  u0n,
  i2e,
  xie,
  Hie,
  xtt,
  d0n,
  Htt,
  p0n,
  f0n,
  Rke,
  Ar,
  $Q,
  Olr,
  Dw,
  a2e,
  ckt,
  ukt,
  Dlr,
  sv,
  Lw,
  Itt,
  DP,
  Llr,
  kke,
  Gq,
  Mlr,
  Ptt,
  m0n,
  Nlr,
  Flr,
  dkt,
  Ott,
  pkt,
  xke,
  g0n,
  h0n,
  mS,
  Dp,
  r_,
  _0n,
  iv,
  Vl,
  y0n,
  fkt,
  $lr,
  S0n,
  LP,
  mkt,
  Dtt,
  Ltt,
  b0n,
  A0,
  gkt,
  w0n,
  Tg,
  Ulr,
  v_,
  Blr,
  hkt,
  Y6,
  E1,
  _c,
  jlr,
  Eb,
  VU,
  Wlr,
  l2e,
  dL,
  rhe,
  TA,
};
