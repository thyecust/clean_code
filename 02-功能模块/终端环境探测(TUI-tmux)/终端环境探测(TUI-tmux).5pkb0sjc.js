// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, ld } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { zg, CU, $f, H, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Fe } from "../Git-Worktree/chunk-9ys1bnqr.js";
import { EL } from "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import { Vd } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { Ge } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { spawnSync as h } from "child_process";
function C() {
  return {
    loggedTmuxCcDisable: !1,
    loggedWinSshDisable: !1,
    checkedTmuxMouseHint: !1,
    checkedTmuxFocusHint: !1,
    tmuxControlModeProbed: void 0,
    tmuxMouseOptionProbe: void 0,
    tmuxFocusOptionProbe: void 0,
    gbGateCached: void 0,
    gbGateSource: void 0,
    downsellGateCached: void 0,
    freshInstallCached: void 0,
    crashAutoOff: !1,
  };
}
var XI = C();
function f() {
  if (!a.TMUX) return !1;
  if (a.TERM_PROGRAM !== "iTerm.app") return !1;
  let e = a.TERM ?? "";
  return !e.startsWith("screen") && !e.startsWith("tmux");
}
function g(e) {
  if (((e.tmuxControlModeProbed = f()), e.tmuxControlModeProbed)) return;
  if (!a.TMUX) return;
  if (a.TERM_PROGRAM) return;
  let r = EL("tmux");
  if (r === null) return;
  let o;
  try {
    o = h(r, ["display-message", "-p", "#{client_control_mode}"], {
      encoding: "utf8",
      timeout: 2000,
      cwd: void 0,
      env: process.env,
      windowsHide: !0,
    });
  } catch {
    return;
  }
  if (o.status !== 0) return;
  e.tmuxControlModeProbed = o.stdout.trim() === "1";
}
function dG(e = XI) {
  if (e.tmuxControlModeProbed === void 0) g(e);
  return e.tmuxControlModeProbed ?? !1;
}
function u() {
  if (P() !== "windows") return !1;
  return Boolean(a.SSH_CONNECTION || a.SSH_CLIENT || a.SSH_TTY);
}
class c {
  latched = !1;
  mode = void 0;
  persisted = !1;
  upsellImpression = void 0;
  latchFromEnv() {
    if (this.latched) return;
    ((this.latched = !0),
      (this.mode =
        a.CLAUDE_CODE_TUI_TRIAL === "fullscreen" ? "fullscreen" : void 0),
      a.unset("CLAUDE_CODE_TUI_TRIAL"));
  }
}
var x = new j(() => new c());
function Pbt() {
  return x.of(B().host);
}
function BJn() {
  Pbt().latchFromEnv();
}
function a1e() {
  let e = Pbt();
  return (e.latchFromEnv(), e.mode);
}
function F7e() {
  return (
    ee().fullscreenAutoDisabled?.version ===
    {
      ISSUES_EXPLAINER:
        "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.263",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-06T01:08:56Z",
      GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
      HOOKS_WORKER_URL:
        "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "darwin",
    }.VERSION
  );
}
function s() {
  return (
    a.CLAUDE_CODE_NO_FLICKER === !1 || a.CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN
  );
}
var l1e = 3;
function d() {
  try {
    if (CU()) return !1;
    let e = ee();
    return (
      e.firstStartVersion !== void 0 && (e.fullscreenUpsellSeenCount ?? 0) < l1e
    );
  } catch {
    return;
  }
}
function S(e) {
  if (e.freshInstallCached !== void 0) return e.freshInstallCached;
  let r = d();
  if (r !== void 0) e.freshInstallCached = r;
  return r ?? !1;
}
function Ta(e = XI) {
  if (Vd() === "local-agent") return !1;
  if (a.CLAUDE_CODE_SESSION_KIND === "bg") return !0;
  if (zg()) return !1;
  if (s()) return !1;
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff) return !1;
  if (dG(e)) {
    if (!e.loggedTmuxCcDisable)
      ((e.loggedTmuxCcDisable = !0),
        n(
          "fullscreen disabled: tmux -CC (iTerm2 integration mode) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override",
        ));
    return !1;
  }
  if (u()) {
    if (!e.loggedWinSshDisable)
      ((e.loggedWinSshDisable = !0),
        n(
          "fullscreen disabled: Windows over SSH (ConPTY re-rendering) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override",
        ));
    return !1;
  }
  switch (Ge().tui ?? a1e()) {
    case "fullscreen":
      return !0;
    case "default":
      return !1;
  }
  if (S(e)) return !0;
  if (p(e)) return !0;
  if (e.gbGateCached === void 0) {
    let r = $f("tengu_pewter_brook", !1);
    ((e.gbGateCached = r.value), (e.gbGateSource = r.source));
  }
  return e.gbGateCached;
}
function p(e = XI) {
  return (
    (e.downsellGateCached ??= H("tengu_amber_creek", !1)),
    e.downsellGateCached
  );
}
function XAe(e = XI) {
  if (zg()) return !1;
  if (s()) return !1;
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff || F7e()) return !1;
  if (u()) return !1;
  if (dG(e)) return !1;
  switch (Ge().tui) {
    case "fullscreen":
      return !0;
    case "default":
      return !1;
  }
  return !0;
}
function kH(e = XI) {
  if (a.CLAUDE_CODE_SESSION_KIND === "bg") return "bg_forced_on";
  if (zg()) return "sr_auto_off";
  if (s()) return "env_off";
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return "env_on";
  if (e.crashAutoOff) return "crash_auto_off";
  if (dG(e)) return "tmux_cc_auto_off";
  if (u()) return "win_ssh_auto_off";
  let r = Ge().tui;
  switch (r ?? a1e()) {
    case "fullscreen":
      return r === "fullscreen" ? "settings_on" : "upsell_trial_on";
    case "default":
      return "settings_off";
  }
  if (e.freshInstallCached ?? d()) return "fresh_install_on";
  if (e.downsellGateCached ?? H("tengu_amber_creek", !1)) return "downsell_on";
  return (e.gbGateCached ?? H("tengu_pewter_brook", !1)) ? "gb_on" : "gb_off";
}
function Obt(e) {
  switch (e) {
    case "env_on":
    case "bg_forced_on":
    case "settings_on":
    case "upsell_trial_on":
    case "ant_default":
    case "fresh_install_on":
    case "downsell_on":
    case "gb_on":
      return "fullscreen";
    case "env_off":
    case "sr_auto_off":
    case "crash_auto_off":
    case "tmux_cc_auto_off":
    case "win_ssh_auto_off":
    case "settings_off":
    case "gb_off":
      return "default";
  }
}
function Dbt(e) {
  return (
    e === "env_off" ||
    e === "sr_auto_off" ||
    e === "tmux_cc_auto_off" ||
    e === "win_ssh_auto_off"
  );
}
function jJn(e = XI) {
  return CU() && e.gbGateSource === "fallback";
}
function WJn() {
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return "on";
  if (a.CLAUDE_CODE_NO_FLICKER === !1) return "off";
  return;
}
function xH() {
  if (a.CLAUDE_CODE_DISABLE_MOUSE !== void 0)
    return a.CLAUDE_CODE_DISABLE_MOUSE ? "off" : "full";
  if (a.CLAUDE_CODE_DISABLE_MOUSE_CLICKS !== void 0)
    return a.CLAUDE_CODE_DISABLE_MOUSE_CLICKS ? "scroll" : "full";
  return "full";
}
class _ {
  observed = !1;
  changed = Le();
  subscribe = this.changed.subscribe;
  get hasObserved() {
    return this.observed;
  }
  note() {
    if (this.observed) return;
    ((this.observed = !0), this.changed.emit());
  }
}
var i = new j(() => new _());
function zSn() {
  i.of(B().host).note();
}
function $7e() {
  return i.of(B().host).hasObserved;
}
function U7e(e) {
  return i.of(B().host).subscribe(e);
}
function h_(e = XI) {
  return ld() && Ta(e);
}
async function GJn(e = XI) {
  if (!a.TMUX) return null;
  if (!h_(e) || dG(e)) return null;
  if (e.checkedTmuxMouseHint) return null;
  e.checkedTmuxMouseHint = !0;
  let r = await t(e, "mouse");
  if (r === null || r === "on") return null;
  return "tmux detected \xB7 scroll with PgUp/PgDn \xB7 or add 'set -g mouse on' to ~/.tmux.conf for wheel scroll";
}
var T = {
  mouse: { cacheKey: "tmuxMouseOptionProbe", args: ["show", "-Av", "mouse"] },
  "focus-events": {
    cacheKey: "tmuxFocusOptionProbe",
    args: ["show", "-gv", "focus-events"],
  },
};
function t(e, r) {
  let { cacheKey: o, args: m } = T[r];
  return (
    (e[o] ??= Fe("tmux", [...m], { useCwd: !1, timeout: 2000 }).then(
      ({ stdout: b, code: E }) => (E === 0 ? b.trim() : null),
    )),
    e[o]
  );
}
function qJn(e = XI) {
  if (!a.TMUX || f()) return;
  (t(e, "mouse"), t(e, "focus-events"));
}
async function zJn(e = XI) {
  if (!a.TMUX) return null;
  if (dG(e)) return null;
  if (e.checkedTmuxFocusHint) return null;
  e.checkedTmuxFocusHint = !0;
  let r = await t(e, "focus-events");
  if (r === null || r === "on") return null;
  return "tmux focus-events off \xB7 add 'set -g focus-events on' to ~/.tmux.conf and reattach for focus tracking";
}
export {
  XI,
  dG,
  Pbt,
  BJn,
  a1e,
  F7e,
  l1e,
  Ta,
  XAe,
  kH,
  Obt,
  Dbt,
  jJn,
  WJn,
  xH,
  zSn,
  $7e,
  U7e,
  h_,
  GJn,
  qJn,
  zJn,
};
