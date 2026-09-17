// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { CT } from "../../../02-功能模块/状态栏-主题/chunk-jz6b76hr.js";
import {
  $w,
  _f,
  tPn,
  Bie,
  gm,
  fW,
  mW,
  i_,
  F2e,
  lxt,
  Icr,
  Pcr,
  rz,
  Ocr,
  Hhe,
} from "../../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { j, B, dl } from "../../lodash/lodash.2x3q7cfh.js";
import { JETBRAINS_IDES, env as a } from "../../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { n } from "../../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import {
  P9e,
  Qye,
  rBn,
  jat,
  Wat,
  q0e,
  oBn,
  Gat,
  Cv,
  vv,
  z0e,
  V0e,
  s7,
  O9e,
} from "../../../01-核心基础设施/共享小工具-未细化/chunk-z3y2y7w9.js";
import { ph } from "../../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Jp, mw, _d, kAe, RNe, kNe } from "../../../02-功能模块/终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { e } from "../../react/react.kwtapczy.js";
import { Qt, re, De, V, F } from "../React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { pg } from "../第三方库-其他/chunk-jm5cswvd.js";
import { pe } from "../../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var le = _f(0, "f");
function getClearTerminalSequence() {
  return i_ + F2e + gm;
}
function getEraseScreenSequence() {
  return i_ + gm;
}
function eraseViewportInPlace(t) {
  return gm + (mW + tPn(1)).repeat(t) + gm;
}
class cee {
  _didStopImmediatePropagation = !1;
  didStopImmediatePropagation() {
    return this._didStopImmediatePropagation;
  }
  stopImmediatePropagation() {
    this._didStopImmediatePropagation = !0;
  }
}
import { EventEmitter } from "events";
class H9e extends EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(0);
  }
  emit(t, ...r) {
    if (t === "error") return super.emit(t, ...r);
    let o = this.rawListeners(t);
    if (o.length === 0) return !1;
    let u = r[0] instanceof cee ? r[0] : null;
    for (let s of o)
      if ((s.apply(this, r), u?.didStopImmediatePropagation())) break;
    return !0;
  }
}
class E {
  xtversionName = void 0;
  synchronizedOutputSupported = void 0;
  osc11Responsive = void 0;
  probeEventLogged = !1;
  nativeCursorEnabled = void 0;
}
var z = new j(() => new E());
function sk() {
  return z.of(B().host);
}
function YUn(t) {
  sk().xtversionName = t;
}
function Lat() {
  return sk().xtversionName;
}
function Zd() {
  if (dl()?.isVscodeTerm) return !0;
  if (a.TERM_PROGRAM === "vscode") return !0;
  return sk().xtversionName?.startsWith("xterm.js") ?? !1;
}
function JUn() {
  return sk().xtversionName?.toLowerCase().startsWith("ghostty") ?? !1;
}
class g {
  value = void 0;
  get() {
    let t = Lat(),
      r = dl(),
      o = r?.wheelFlood ?? Itn(),
      u = r ? JETBRAINS_IDES.includes(r.terminal ?? "") : CT.isJetBrainsIdeTerminal(),
      s = r?.wtSession ?? !!a.WT_SESSION,
      p = Zd(),
      i = this.value;
    if (
      i &&
      i.xtversion === (t ?? "(no reply)") &&
      i.wheelFlood === o &&
      i.jediTerm === u &&
      i.wtSession === s &&
      i.xtermJs === p
    )
      return i;
    let l = "darwin";
    return (
      (this.value = {
        useDecayCurve: !o && (p || l === "win32" || s),
        useAdaptiveDrain: p,
        base: u ? 2 : Z(p, o, s),
        xtermJs: p,
        wheelFlood: o,
        jediTerm: u,
        termProgram: a.TERM_PROGRAM ?? "unset",
        termProgramVersion: a.TERM_PROGRAM_VERSION ?? "unset",
        xtversion: t ?? "(no reply)",
        wtSession: s,
        scrollSpeedEnv: a.CLAUDE_CODE_SCROLL_SPEED ?? "unset",
        platform: l,
      }),
      this.value
    );
  }
  invalidate() {
    this.value = void 0;
  }
}
var S = new j(() => new g());
function Av() {
  return S.of(B().host).get();
}
function Itn() {
  if (process.env.CURSOR_TRACE_ID !== void 0) return !0;
  if (a.VSCODE_GIT_ASKPASS_MAIN?.includes("cursor")) return !0;
  if (a.TERM_PROGRAM === "vscode") {
    let t = Q(a.TERM_PROGRAM_VERSION);
    if (t !== null) return t >= 1092000 && t < 1105000;
  }
  return Lat()?.startsWith("xterm.js") ?? !1;
}
function Q(t) {
  if (!t) return null;
  let r = /^(\d+)\.(\d+)\.(\d+)/.exec(t);
  if (!r) return null;
  return +r[1] * 1e6 + +r[2] * 1000 + +r[3];
}
function iDt(t, r, o) {
  return !r && (t || !1 || o) ? 3 : 1;
}
function Z(t, r, o) {
  let u = iDt(t, r, o),
    s = a.CLAUDE_CODE_SCROLL_SPEED;
  if (!s) return u;
  let p = parseFloat(s);
  return Number.isNaN(p) || p <= 0 ? u : Math.min(p, 20);
}
function j0e() {
  S.of(B().host).invalidate();
}
var b = pe(pg(), 1);
function tBn(t) {
  sk().synchronizedOutputSupported = t;
}
function nBn() {
  if (a.TMUX && sk().synchronizedOutputSupported === void 0) return;
  return lO();
}
function lO() {
  if (a.CLAUDE_BG_BACKEND === "daemon") return dl()?.syncOutput !== !1;
  if (a.TMUX) return sk().synchronizedOutputSupported === !0;
  if (a.CLAUDE_CODE_FORCE_SYNC_OUTPUT) return !0;
  let t = a.TERM_PROGRAM,
    r = a.TERM;
  if (
    t === "iTerm.app" ||
    t === "WezTerm" ||
    t === "WarpTerminal" ||
    t === "ghostty" ||
    t === "contour" ||
    t === "vscode" ||
    t === "alacritty" ||
    t === "mintty" ||
    t === "rio" ||
    t === "Tabby"
  )
    return !0;
  if (CT.isJetBrainsIdeTerminal()) return !0;
  if (parseInt(a.KONSOLE_VERSION ?? "", 10) >= 211200) return !0;
  if (r?.includes("kitty") || a.KITTY_WINDOW_ID) return !0;
  if (r === "xterm-ghostty") return !0;
  if (r?.startsWith("foot")) return !0;
  if (r?.includes("alacritty")) return !0;
  if (a.ZED_TERM) return !0;
  if (a.WT_SESSION) return !0;
  let o = a.VTE_VERSION;
  if (o) {
    if (parseInt(o, 10) >= 6800) return !0;
  }
  if (sk().synchronizedOutputSupported) return !0;
  return !1;
}
function lDt() {
  if (a.CLAUDE_BG_BACKEND === "daemon") return !1;
  return (
    lO() &&
    a.TMUX == null &&
    process.env.ZELLIJ == null &&
    !CT.isJetBrainsIdeTerminal() &&
    !Zd() &&
    a.WT_SESSION == null
  );
}
function Jye() {
  let t = dl()?.progressReporting;
  if (t !== void 0) return t;
  if (!process.stdout.isTTY) return !1;
  if (a.WT_SESSION) return !1;
  if (a.ConEmuANSI || a.ConEmuPID || a.ConEmuTask) return !0;
  let r = b.coerce(a.TERM_PROGRAM_VERSION);
  if (!r) return !1;
  if (a.TERM_PROGRAM === "ghostty") return ph(r.version, "1.2.0");
  if (a.TERM_PROGRAM === "iTerm.app") return ph(r.version, "3.6.6");
  return !1;
}
var ee = [
  "iTerm.app",
  "kitty",
  "WezTerm",
  "ghostty",
  "tmux",
  "windows-terminal",
  "WarpTerminal",
];
function cDt(t) {
  return ee.includes(t ?? a.terminal ?? "");
}
function G0e(t) {
  return cDt() ? rz + (t?.legacyKitty ? Pcr : Icr) + Ocr : "";
}
function Nat(t) {
  return z0e + i_ + gm + G0e(t);
}
function uF() {
  return rz + V0e + Hhe;
}
function Fat() {
  return !!a.WT_SESSION;
}
var uDt = lDt();
function dDt(t, r, o) {
  let u = performance.now(),
    s = t.slowestWrite;
  if (s === void 0 || u - r >= s.endedMs - s.startedMs)
    t.slowestWrite = { startedMs: r, endedMs: u, bytes: o };
}
function Dtn(t, r) {
  if (t.stdoutDead) return;
  let o = performance.now(),
    u = Buffer.byteLength(r);
  try {
    t.stdout.write(r);
  } catch (s) {
    if (t.tolerateDeadStdout && (v(s) === "EIO" || v(s) === "EPIPE")) {
      ((t.stdoutDead = !0), dDt(t, o, u));
      return;
    }
    throw s;
  }
  dDt(t, o, u);
}
function Ltn(t, r, o = !1, u) {
  let s = u !== void 0 && u > 1 ? u - 1 : void 0;
  if (r.length === 0) return;
  let p = !o,
    i = p ? P9e : "";
  for (let l of r)
    switch (l.type) {
      case "stdout":
        i += l.content;
        break;
      case "clear":
        if (l.count > 0) i += lxt(l.count);
        break;
      case "clearTerminal":
        i += l.altScreen ? getClearTerminalSequence() : eraseViewportInPlace(l.viewportRows);
        break;
      case "cursorHide":
        i += vv;
        break;
      case "cursorShow":
        i += Cv;
        break;
      case "cursorMove":
        i += fW(l.x, s !== void 0 ? Math.max(-s, Math.min(s, l.y)) : l.y);
        break;
      case "cursorTo":
        i += Bie(l.col);
        break;
      case "carriageReturn":
        i += "\r";
        break;
      case "hyperlink":
        i += kAe(l.uri);
        break;
      case "styleStr":
        i += l.str;
        break;
    }
  if (p) i += Qye;
  Dtn(t, i);
}
function v(t) {
  return t && typeof t === "object" && "code" in t ? String(t.code) : void 0;
}
function $at(t, r, o, u, s) {
  if (
    t === void 0 &&
    r === void 0 &&
    o === void 0 &&
    u === void 0 &&
    s === void 0
  )
    return;
  return { hidden: t, label: r, role: o, state: u, preserveWhitespace: s };
}
function dE(t, r) {
  if (t === void 0) return;
  if (Number.isInteger(t)) return;
  n(`${r} should be an integer, got ${t}`, { level: "warn" });
}
function ne({
  children: t,
  ref: r,
  tabIndex: o,
  autoFocus: u,
  onClick: s,
  onFocus: p,
  onFocusCapture: i,
  onBlur: l,
  onBlurCapture: c,
  onMouseEnter: _,
  onMouseLeave: w,
  hoverIgnoresBlankCells: C,
  renderEvent: A,
  renderComponent: M,
  onKeyDown: k,
  onKeyDownCapture: O,
  onPaste: N,
  onPasteCapture: P,
  onWheel: D,
  onWheelCapture: W,
  keybindingScope: L,
  onAction: K,
  onActionCapture: G,
  "aria-hidden": J,
  "aria-label": Y,
  "aria-role": U,
  "aria-state": q,
  "aria-preserve-whitespace": X,
  ...d
}) {
  if (
    (dE(d.margin, "margin"),
    dE(d.marginX, "marginX"),
    dE(d.marginY, "marginY"),
    dE(d.marginTop, "marginTop"),
    dE(d.marginBottom, "marginBottom"),
    d.marginLeft !== "auto")
  )
    dE(d.marginLeft, "marginLeft");
  if (d.marginRight !== "auto") dE(d.marginRight, "marginRight");
  return (
    dE(d.padding, "padding"),
    dE(d.paddingX, "paddingX"),
    dE(d.paddingY, "paddingY"),
    dE(d.paddingTop, "paddingTop"),
    dE(d.paddingBottom, "paddingBottom"),
    dE(d.paddingLeft, "paddingLeft"),
    dE(d.paddingRight, "paddingRight"),
    dE(d.gap, "gap"),
    dE(d.columnGap, "columnGap"),
    dE(d.rowGap, "rowGap"),
    (d.flexWrap ??= "nowrap"),
    (d.flexDirection ??= "row"),
    (d.flexGrow ??= 0),
    (d.flexShrink ??= 1),
    (d.overflowX = d.overflowX ?? d.overflow ?? "visible"),
    (d.overflowY = d.overflowY ?? d.overflow ?? "visible"),
    e("ink-box", {
      ref: r,
      tabIndex: o,
      autoFocus: u,
      onClick: s,
      onFocus: p,
      onFocusCapture: i,
      onBlur: l,
      onBlurCapture: c,
      onMouseEnter: _,
      onMouseLeave: w,
      hoverIgnoresBlankCells: C,
      renderEvent: A,
      renderComponent: M,
      onKeyDown: k,
      onKeyDownCapture: O,
      onPaste: N,
      onPasteCapture: P,
      onWheel: D,
      onWheelCapture: W,
      keybindingScope: L,
      onAction: K,
      onActionCapture: G,
      accessibility: $at(J, Y, U, q, X),
      style: d,
      children: t,
    })
  );
}
var ga = ne;
F();
function m(t) {
  let r = "";
  for (let o = 0; o < t.length; o++) {
    let u = t.charCodeAt(o);
    r += u < 32 || (u >= 127 && u <= 159) ? " " : t[o];
  }
  return r;
}
var Z0 = Qt(null),
  Bat = Z0.Provider;
function qA() {
  let t = De(Z0);
  if (!t)
    throw Error(
      "useTerminalNotification must be used within TerminalWriteProvider",
    );
  let r = re(
      ({ message: i, title: l }) => {
        let c = l ? `${l}: ${i}` : i;
        t(mw(Jp(_d.ITERM2, m(c))));
      },
      [t],
    ),
    o = re(
      ({ message: i, title: l, id: c }) => {
        (t(mw(Jp(_d.KITTY, `i=${c}:d=0:p=title`, m(l)))),
          t(mw(Jp(_d.KITTY, `i=${c}:p=body`, m(i)))),
          t(mw(Jp(_d.KITTY, `i=${c}:d=1:a=focus`, ""))));
      },
      [t],
    ),
    u = re(
      ({ message: i, title: l }) => {
        t(mw(Jp(_d.GHOSTTY, "notify", m(l), m(i))));
      },
      [t],
    ),
    s = re(() => {
      t($w);
    }, [t]),
    p = re(
      (i, l) => {
        if (!Jye()) return;
        if (!i) {
          t(mw(Jp(_d.ITERM2, RNe.PROGRESS, kNe.CLEAR, "")));
          return;
        }
        let c = Math.max(0, Math.min(100, Math.round(l ?? 0)));
        switch (i) {
          case "completed":
            t(mw(Jp(_d.ITERM2, RNe.PROGRESS, kNe.CLEAR, "")));
            break;
          case "error":
            t(mw(Jp(_d.ITERM2, RNe.PROGRESS, kNe.ERROR, c)));
            break;
          case "indeterminate":
            t(mw(Jp(_d.ITERM2, RNe.PROGRESS, kNe.INDETERMINATE, "")));
            break;
          case "running":
            t(mw(Jp(_d.ITERM2, RNe.PROGRESS, kNe.SET, c)));
            break;
          case null:
            break;
        }
      },
      [t],
    );
  return V(
    () => ({
      notifyITerm2: r,
      notifyKitty: o,
      notifyGhostty: u,
      notifyBell: s,
      progress: p,
    }),
    [r, o, u, s, p],
  );
}
function W0e() {
  return {
    lastWheelTime: 0,
    lastWheelDownTime: 0,
    bugConfirmed: !1,
    notified: !1,
    trackpadGesture: !1,
    pendingArrowBoost: 0,
  };
}
function oe(t) {
  ((t.bugConfirmed = !0), (t.trackpadGesture = !0), t.pendingArrowBoost++);
}
function y(t) {
  ((t.trackpadGesture = !1), (t.pendingArrowBoost = 0));
}
function QUn(t) {
  let r = t.pendingArrowBoost;
  return ((t.pendingArrowBoost = 0), r);
}
function aDt(t) {
  if (t.bugConfirmed) return !0;
  if (
    process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED !== void 0 ||
    process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS !== void 0
  )
    return ((t.bugConfirmed = !0), !0);
  return !1;
}
var ie = 75,
  se = 250,
  Ptn = 200;
function ZUn(t, r, o, u) {
  if (!Av().jediTerm) return (y(t), r);
  let s = null;
  for (let p = 0; p < r.length; p++) {
    let i = r[p];
    if (i.kind !== "key") {
      s?.push(i);
      continue;
    }
    if (i.name === "wheelup" || i.name === "wheeldown") {
      if (o - t.lastWheelTime > Ptn) ((t.lastWheelDownTime = 0), y(t));
      if (((t.lastWheelTime = o), i.name === "wheeldown"))
        t.lastWheelDownTime = o;
      if (i.name === "wheelup" && o - t.lastWheelDownTime < se && aDt(t)) {
        ((s ??= r.slice(0, p)), s.push({ ...i, name: "wheeldown" }));
        continue;
      }
      s?.push(i);
      continue;
    }
    if (
      (i.name === "up" || i.name === "down") &&
      !i.ctrl &&
      !i.meta &&
      !i.shift &&
      !i.isPasted &&
      o - t.lastWheelTime < ie
    ) {
      if (!t.notified) ((t.notified = !0), u());
      (oe(t), (s ??= r.slice(0, p)));
      continue;
    }
    s?.push(i);
  }
  return s ?? r;
}
F();
var R = Qt({
  stdin: process.stdin,
  internal_eventEmitter: new H9e(),
  setRawMode() {},
  isRawModeSupported: !1,
  internal_querier: null,
  internal_jediTermInput: W0e(),
});
R.displayName = "InternalStdinContext";
var m4 = R;
F();
var Kx = Qt(null);
function T(t) {
  return Jp(_d.SET_BG_COLOR, t);
}
function h() {
  return Jp(_d.RESET_BG_COLOR);
}
var f = {
  bracketedPaste: 0,
  themeReports: 0,
  extendedKeys: 0,
  altScreen: 1,
  altScreenKeys: 2,
  mouse: 2,
  background: 3,
  focusEvents: 4,
};
function x(t) {
  switch (t) {
    case "bracketedPaste":
      return { mode: t, on: rBn, off: jat };
    case "themeReports":
      return { mode: t, on: oBn, off: Gat };
    case "focusEvents":
      return { mode: t, on: Wat, off: q0e };
    case "extendedKeys":
      return { mode: t, on: G0e(), off: Hhe + rz };
    case "altScreen":
      return { mode: t, on: z0e + i_ + gm, off: V0e + Hhe };
    case "altScreenKeys":
      return { mode: t, on: G0e(), off: rz };
  }
}
class Uat {
  entries = [];
  suspended = !1;
  kept;
  get isSuspended() {
    return this.suspended;
  }
  isSet(t) {
    return this.entries.some((r) => r.mode === t);
  }
  set(t, r) {
    if (this.isSet(t)) return "";
    let o = this.add(this.entry(t, r));
    if (t === "altScreen") o += this.add(x("altScreenKeys"));
    return this.suspended ? "" : o;
  }
  reset(t) {
    if (!this.isSet(t)) return "";
    let r = t === "altScreen" ? this.remove("altScreenKeys") : "",
      o = this.remove(t);
    if (this.suspended && t === this.kept) return ((this.kept = void 0), o);
    return this.suspended ? "" : r + o;
  }
  reassert(t) {
    if (this.suspended) return "";
    return this.entries.find((r) => r.mode === t)?.on ?? "";
  }
  reassertFrom(t) {
    if (this.suspended || !this.isSet(t)) return "";
    return this.entries
      .filter((r) => f[r.mode] >= f[t])
      .reduce((r, o) => r + o.on, "");
  }
  suspend(t) {
    if (this.suspended) return "";
    return (
      (this.suspended = !0),
      (this.kept = t),
      this.entries.reduceRight((r, o) => (o.mode === t ? r : r + o.off), "")
    );
  }
  resume({ clearKeys: t = !1 } = {}) {
    if (!this.suspended) return "";
    ((this.suspended = !1), (this.kept = void 0));
    let r = this.isSet("altScreen"),
      o = t ? Hhe + (r ? "" : rz) : "";
    return this.entries.reduce(
      (u, s) => u + s.on + (t && s.mode === "altScreen" ? rz : ""),
      o,
    );
  }
  entry(t, r) {
    switch (t) {
      case "mouse": {
        let o = r ?? "off";
        return { mode: t, on: O9e(o), off: o === "off" ? "" : s7 };
      }
      case "background":
        return { mode: t, on: T(r ?? ""), off: h() };
      default:
        return x(t);
    }
  }
  add(t) {
    let r = this.entries.findIndex((o) => f[o.mode] > f[t.mode]);
    if (r === -1) this.entries.push(t);
    else this.entries.splice(r, 0, t);
    return t.on;
  }
  remove(t) {
    let r = this.entries.findIndex((o) => o.mode === t);
    if (r === -1) return "";
    return this.entries.splice(r, 1)[0].off;
  }
}
F();
var I = Qt(new Uat());
I.displayName = "InternalTerminalModesContext";
var I9e = I;
export {
  cee,
  H9e,
  sk,
  YUn,
  Lat,
  Zd,
  JUn,
  Av,
  Itn,
  iDt,
  j0e,
  W0e,
  QUn,
  aDt,
  Ptn,
  ZUn,
  m4,
  dE,
  getClearTerminalSequence,
  getEraseScreenSequence,
  eraseViewportInPlace,
  tBn,
  nBn,
  lO,
  lDt,
  Jye,
  cDt,
  G0e,
  Nat,
  uF,
  Fat,
  uDt,
  dDt,
  Dtn,
  Ltn,
  $at,
  ga,
  Kx,
  Uat,
  I9e,
  Z0,
  Bat,
  qA,
};
