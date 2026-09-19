// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, dl } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { resolveExecutablePathAsync, JETBRAINS_IDES, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { execFileNoThrow } from "../工作树-Git/git-exec-hardening.js";
import { ESCAPE_CHARACTER, BELL_CHARACTER, PARAM_SEPARATOR, CONTROL_INTRODUCER_CODES } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { isLocalAddress } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { terminalCapabilities } from "../状态栏-主题/chunk-jz6b76hr.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { importMetaRequire } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
class C {
  hooks = null;
  uiMounted = !1;
  setHooks(t) {
    this.hooks = t;
  }
  setUiMounted(t) {
    this.uiMounted = t;
  }
}
var f = new C();
function setTerminalHooks(t) {
  f.setHooks(t);
}
function getTerminalHooks() {
  return f.hooks;
}
function setTerminalUiMounted(t) {
  f.setUiMounted(t);
}
function getTerminalUiMounted() {
  return f.uiMounted;
}
var c = null,
  E = !1;
function m() {
  if (E) return c;
  return ((E = !0), null);
  if (process.env.CLIPBOARD_NAPI_NODE_PATH)
    try {
      return ((c = importMetaRequire(process.env.CLIPBOARD_NAPI_NODE_PATH)), c);
    } catch {}
  let o = ["arm64-darwin"].flatMap((r) => [
    `./vendor/clipboard-napi/${r}/clipboard-napi.node`,
    `../clipboard-napi/${r}/clipboard-napi.node`,
  ]);
  for (let r of o)
    try {
      return ((c = importMetaRequire(r)), c);
    } catch {}
  return null;
}
import { Buffer } from "buffer";
import { isAbsolute } from "path";
var g = ESCAPE_CHARACTER + String.fromCharCode(CONTROL_INTRODUCER_CODES.OSC),
  S = ESCAPE_CHARACTER + "\\";
function I() {
  return dl()?.terminal ?? a.terminal;
}
function getTerminalMultiplexer() {
  let t = dl();
  if (t) return t.mux;
  if (a.TMUX) return "tmux";
  if (a.STY) return "screen";
  if (a.ZELLIJ) return "zellij";
  return null;
}
function p() {
  return dl()?.ssh ?? !!a.SSH_CONNECTION;
}
function A() {
  let t = dl();
  if (t) {
    if (t.mux !== "tmux" || !t.tmuxSocket) return null;
    return isAbsolute(t.tmuxSocket) && isLocalAddress(t.tmuxSocket) ? ["-S", t.tmuxSocket] : null;
  }
  return a.TMUX ? [] : null;
}
function getNativeCopyModifierKey() {
  let t = I();
  if (t === "Apple_Terminal") return "Fn";
  if (t === "iTerm.app") return "Option";
  if (dl()?.isVscodeTerm || (t && D.has(t)))
    return getCurrentPlatform() === "macos" ? "Option" : "Shift";
  if (t && k.has(t)) return "Shift";
  if (a.LC_TERMINAL === "iTerm2") return "Option";
  return p() || getTerminalMultiplexer() !== null || getCurrentPlatform() === "macos"
    ? "Shift (Option in iTerm2, Fn in Terminal.app)"
    : "Shift";
}
var k = new Set([
    "ghostty",
    "kitty",
    "WezTerm",
    "alacritty",
    "xterm",
    "gnome-terminal",
    "vte-based",
    "konsole",
    "windows-terminal",
    "mintty",
    ...JETBRAINS_IDES,
  ]),
  D = new Set(["vscode", "cursor", "windsurf", "antigravity", "codium"]);
function formatOscSequence(...t) {
  let e = I() === "kitty" ? S : BELL_CHARACTER;
  return `${g}${t.join(PARAM_SEPARATOR)}${e}`;
}
function wrapOscForMultiplexer(t) {
  let e = getTerminalMultiplexer();
  if (e === "tmux")
    return `\x1BPtmux;${t.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
  if (e === "screen") return `\x1BP${t.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
  return t;
}
class LinuxClipboardToolState {
  tool = void 0;
  addonWriteFailed = !1;
  addonWriteSucceeded = !1;
  waylandCopyGeneration = 0;
  async probe() {
    if (
      getCurrentPlatform() !== "linux" ||
      (typeof this.tool === "string" && this.tool !== "addon")
    )
      return;
    let { display: t, waylandDisplay: e } = O();
    if (e && (await resolveExecutablePathAsync("wl-copy"))) {
      this.tool = "wl-copy";
      return;
    }
    if (t) {
      if (await resolveExecutablePathAsync("xclip")) {
        this.tool = "xclip";
        return;
      }
      if (await resolveExecutablePathAsync("xsel")) {
        this.tool = "xsel";
        return;
      }
    }
    if (!this.addonWriteFailed && v() && m()?.setLinuxClipboardText) {
      this.tool = "addon";
      return;
    }
    this.tool = null;
  }
  recordAddonWrite(t) {
    if (t) this.addonWriteSucceeded = !0;
    else this.addonWriteFailed ||= !this.addonWriteSucceeded;
  }
  beginWaylandCopy() {
    return ++this.waylandCopyGeneration;
  }
  isLatestWaylandCopy(t) {
    return t === this.waylandCopyGeneration;
  }
  reset() {
    ((this.tool = void 0),
      (this.addonWriteFailed = !1),
      (this.addonWriteSucceeded = !1));
  }
}
var linuxClipboardToolStates = new j(() => new LinuxClipboardToolState());
function d() {
  return linuxClipboardToolStates.of(B().host);
}
function getClipboardCopyStrategy() {
  if (!p())
    switch (getCurrentPlatform()) {
      case "macos":
      case "windows":
      case "wsl":
        return "native";
      case "linux":
        if (typeof d().tool === "string") return "native";
        break;
    }
  if (A()) return "tmux-buffer";
  return "osc52";
}
function probeLinuxClipboardTool() {
  return d().probe();
}
function getLinuxClipboardToolState() {
  if (getCurrentPlatform() !== "linux") return "not_linux";
  let { tool: t } = d();
  if (t === void 0) return "not_probed";
  return t ?? "none";
}
function isVteTerminal() {
  return a.VTE_VERSION != null;
}
function O() {
  return {
    display: process.env.DISPLAY,
    waylandDisplay: process.env.WAYLAND_DISPLAY,
  };
}
function v() {
  let { display: t, waylandDisplay: e } = O();
  if (t) return /^(unix)?:/.test(t);
  return !!e;
}
function U(t) {
  return /[^\x00-\x7f]/.test(t);
}
function getOsc52Utf8PasteWarning(t) {
  if (!terminalCapabilities.hasOsc52ClipboardUtf8Bug() || !U(t)) return null;
  return "VS Code 1.123/1.124 will mojibake this paste \u2014 update to \u22651.125";
}
async function W(t) {
  let e = A();
  if (!e) return !1;
  let o = { input: t, useCwd: !1, timeout: 2000 },
    r = a.LC_TERMINAL ?? "unset",
    i = e.length > 0 ? "attacher socket" : "$TMUX",
    { code: s } = await execFileNoThrow("tmux", [...e, "load-buffer", "-w", "-"], o);
  if (
    (logForDebugging(
      `clipboard: tmux load-buffer -w - \u2192 exit ${s} (server=${i} LC_TERMINAL=${r})`,
    ),
    s === 0)
  )
    return !0;
  let u = await execFileNoThrow("tmux", [...e, "load-buffer", "-"], o);
  return (
    logForDebugging(
      `clipboard: retry tmux load-buffer - \u2192 exit ${u.code} (server=${i} LC_TERMINAL=${r})`,
    ),
    u.code === 0
  );
}
var h = 76;
async function setClipboard(t) {
  let e = Buffer.from(t, "utf8").toString("base64");
  if (!p()) N(t);
  await W(t);
  let o = getTerminalMultiplexer(),
    r = p(),
    i = o === "tmux" ? "raw+dcs" : o === "screen" ? "dcs" : "raw";
  if (
    (logForDebugging(
      `clipboard: setClipboard mux=${o ?? "none"} ssh=${r} native=${!r} predicted=${getClipboardCopyStrategy()} emit=${i} bytes=${t.length}`,
    ),
    o === "tmux")
  ) {
    let s = `${ESCAPE_CHARACTER}]52;c;${e}${BELL_CHARACTER}`;
    return s + wrapOscForMultiplexer(s);
  }
  if (o === "screen") {
    let s = [];
    for (let u = 0; u < e.length; u += h) s.push(e.slice(u, u + h));
    return `${ESCAPE_CHARACTER}P${ESCAPE_CHARACTER}]52;c;${s.join(`${S}${ESCAPE_CHARACTER}P`)}${BELL_CHARACTER}${S}`;
  }
  return formatOscSequence(OSC_CODES.CLIPBOARD, "c", e);
}
var w =
    "[Console]::InputEncoding = [Text.Encoding]::UTF8; Set-Clipboard -Value ([Console]::In.ReadToEnd())",
  F = "[Console]::OutputEncoding = [Text.Encoding]::UTF8; Get-Clipboard -Raw";
function N(t) {
  let e = { input: t, useCwd: !1, timeout: 2000 };
  switch (getCurrentPlatform()) {
    case "macos":
      execFileNoThrow("pbcopy", [], e);
      return;
    case "linux": {
      let o = d();
      if (typeof o.tool !== "string")
        o.probe().then(() => {
          if (typeof o.tool === "string") N(t);
        });
      else if (o.tool === "wl-copy") G(t);
      else if (o.tool === "xclip") {
        let r = { ...e, useToolMemoryCgroup: !1 };
        (execFileNoThrow("xclip", ["-selection", "clipboard"], r),
          execFileNoThrow("xclip", ["-selection", "primary"], r));
      } else if (o.tool === "xsel") {
        let r = { ...e, useToolMemoryCgroup: !1 };
        (execFileNoThrow("xsel", ["--clipboard", "--input"], r),
          execFileNoThrow("xsel", ["--primary", "--input"], r));
      } else if (o.tool === "addon") {
        try {
          o.recordAddonWrite(m()?.setLinuxClipboardText(t) !== !1);
        } catch {
          o.recordAddonWrite(!1);
        }
        o.probe();
      }
      return;
    }
    case "wsl": {
      execFileNoThrow("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", w], e);
      return;
    }
    case "windows": {
      execFileNoThrow("powershell", ["-NoProfile", "-NonInteractive", "-Command", w], e);
      return;
    }
  }
}
async function G(t) {
  let e = d(),
    o = e.beginWaylandCopy(),
    r = {
      input: t,
      useCwd: !1,
      timeout: 2000,
      stdout: "ignore",
      stderr: "ignore",
      useToolMemoryCgroup: !1,
    };
  if ((await execFileNoThrow("wl-copy", [], r), !e.isLatestWaylandCopy(o))) return;
  await execFileNoThrow("wl-copy", ["--primary"], r);
}
async function readClipboard(t = "clipboard") {
  if (p()) return "";
  let e = { useCwd: !1, timeout: 2000 };
  switch (getCurrentPlatform()) {
    case "macos": {
      let o = await execFileNoThrow("pbpaste", [], e);
      return o.code === 0 ? o.stdout : "";
    }
    case "windows":
    case "wsl": {
      let o = await execFileNoThrow(
        getCurrentPlatform() === "wsl" ? "powershell.exe" : "powershell",
        ["-NoProfile", "-NonInteractive", "-Command", F],
        e,
      );
      return o.code === 0
        ? o.stdout
            .replace(
              /\r\n/g,
              `
`,
            )
            .replace(/\n$/, "")
        : "";
    }
    case "linux": {
      let o = t === "primary",
        r = [
          ["wl-paste", o ? ["--primary", "--no-newline"] : ["--no-newline"]],
          ["xclip", ["-selection", o ? "primary" : "clipboard", "-o"]],
          ["xsel", [o ? "--primary" : "--clipboard", "--output"]],
        ];
      for (let [i, s] of r) {
        let u = await execFileNoThrow(i, [...s], e);
        if (u.code === 0) return u.stdout;
      }
      return (await Y(o, e.timeout)) ?? "";
    }
    default:
      return "";
  }
}
async function Y(t, e) {
  if (!v()) return null;
  try {
    return (
      (await m()?.getLinuxClipboardText?.(t, e))?.replace(/\r?\n$|\r$/, "") ??
      null
    );
  } catch (o) {
    return (logForDebugging(`clipboard: addon read: ${l(o)}`), null);
  }
}
var OSC_CODES = {
  SET_TITLE_AND_ICON: 0,
  SET_ICON: 1,
  SET_TITLE: 2,
  SET_COLOR: 4,
  SET_CWD: 7,
  HYPERLINK: 8,
  ITERM2: 9,
  SET_FG_COLOR: 10,
  SET_BG_COLOR: 11,
  SET_CURSOR_COLOR: 12,
  CLIPBOARD: 52,
  KITTY: 99,
  RESET_COLOR: 104,
  RESET_FG_COLOR: 110,
  RESET_BG_COLOR: 111,
  RESET_CURSOR_COLOR: 112,
  SEMANTIC_PROMPT: 133,
  GHOSTTY: 777,
  ITERM2_PROPRIETARY: 1337,
  TAB_STATUS: 21337,
};
function parseOscSequence(t) {
  let e = t.indexOf(";"),
    o = e >= 0 ? t.slice(0, e) : t,
    r = e >= 0 ? t.slice(e + 1) : "",
    i = parseInt(o, 10);
  if (i === OSC_CODES.SET_TITLE_AND_ICON)
    return { type: "title", action: { type: "both", title: r } };
  if (i === OSC_CODES.SET_ICON)
    return { type: "title", action: { type: "iconName", name: r } };
  if (i === OSC_CODES.SET_TITLE)
    return { type: "title", action: { type: "windowTitle", title: r } };
  if (i === OSC_CODES.HYPERLINK) {
    let s = r.split(";"),
      u = s[0] ?? "",
      y = s.slice(1).join(";");
    if (y === "") return { type: "link", action: { type: "end" } };
    let T = {};
    if (u)
      for (let x of u.split(":")) {
        let b = x.indexOf("=");
        if (b >= 0) T[x.slice(0, b)] = x.slice(b + 1);
      }
    return {
      type: "link",
      action: {
        type: "start",
        url: y,
        params: Object.keys(T).length > 0 ? T : void 0,
      },
    };
  }
  if (i === OSC_CODES.TAB_STATUS) return { type: "tabStatus", action: V(r) };
  return { type: "unknown", sequence: `\x1B]${t}` };
}
function R(t) {
  let e = t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (e)
    return {
      type: "rgb",
      r: parseInt(e[1], 16),
      g: parseInt(e[2], 16),
      b: parseInt(e[3], 16),
    };
  let o = t.match(/^rgb:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})$/i);
  if (o) {
    let r = (i) => Math.round((parseInt(i, 16) / (16 ** i.length - 1)) * 255);
    return { type: "rgb", r: r(o[1]), g: r(o[2]), b: r(o[3]) };
  }
  return null;
}
function V(t) {
  let e = {};
  for (let [o, r] of K(t))
    switch (o) {
      case "indicator":
        e.indicator = r === "" ? null : R(r);
        break;
      case "status":
        e.status = r === "" ? null : r;
        break;
      case "status-color":
        e.statusColor = r === "" ? null : R(r);
        break;
    }
  return e;
}
function* K(t) {
  let e = "",
    o = "",
    r = !1,
    i = !1;
  for (let s of t)
    if (i) {
      if (r) o += s;
      else e += s;
      i = !1;
    } else if (s === "\\") i = !0;
    else if (s === ";") (yield [e, o], (e = ""), (o = ""), (r = !1));
    else if (s === "=" && !r) r = !0;
    else if (r) o += s;
    else e += s;
  if (e || r) yield [e, o];
}
function formatHyperlinkStart(t, e) {
  if (!t) return HYPERLINK_END;
  let o = { id: X(t), ...e },
    r = Object.entries(o)
      .map(([i, s]) => `${i}=${s}`)
      .join(":");
  return formatOscSequence(OSC_CODES.HYPERLINK, r, t);
}
function X(t) {
  let e = 0;
  for (let o = 0; o < t.length; o++) e = ((e << 5) - e + t.charCodeAt(o)) | 0;
  return (e >>> 0).toString(36);
}
var HYPERLINK_END = formatOscSequence(OSC_CODES.HYPERLINK, "", ""),
  ITERM2_OSC_COMMANDS = { NOTIFY: 0, BADGE: 2, PROGRESS: 4 },
  ITERM2_PROGRESS_STATES = { CLEAR: 0, SET: 1, ERROR: 2, INDETERMINATE: 3 },
  CLEAR_ITERM2_PROGRESS_SEQUENCE = `${g}${OSC_CODES.ITERM2};${ITERM2_OSC_COMMANDS.PROGRESS};${ITERM2_PROGRESS_STATES.CLEAR};${BELL_CHARACTER}`,
  RESET_TITLE_AND_ICON_SEQUENCE = `${g}${OSC_CODES.SET_TITLE_AND_ICON};${BELL_CHARACTER}`,
  RESET_TAB_STATUS_SEQUENCE = formatOscSequence(OSC_CODES.TAB_STATUS, "indicator=;status=;status-color=");
function isTabStatusEnabled() {
  return !1;
}
function formatTabStatus(t) {
  let e = [],
    o = (r) =>
      r.type === "rgb"
        ? `#${[r.r, r.g, r.b].map((i) => i.toString(16).padStart(2, "0")).join("")}`
        : "";
  if ("indicator" in t)
    e.push(`indicator=${t.indicator ? o(t.indicator) : ""}`);
  if ("status" in t)
    e.push(
      `status=${t.status?.replaceAll("\\", "\\\\").replaceAll(";", "\\;") ?? ""}`,
    );
  if ("statusColor" in t)
    e.push(`status-color=${t.statusColor ? o(t.statusColor) : ""}`);
  return formatOscSequence(OSC_CODES.TAB_STATUS, e.join(";"));
}
function q(t) {
  let e = Buffer.from(JSON.stringify(t)).toString("base64");
  return formatOscSequence(OSC_CODES.ITERM2_PROPRIETARY, `SetProfileProperty=Initial Text=${e}`);
}
var ft = q("");
export {
  setTerminalHooks,
  getTerminalHooks,
  setTerminalUiMounted,
  getTerminalUiMounted,
  getTerminalMultiplexer,
  getNativeCopyModifierKey,
  formatOscSequence,
  wrapOscForMultiplexer,
  getClipboardCopyStrategy,
  probeLinuxClipboardTool,
  getLinuxClipboardToolState,
  isVteTerminal,
  getOsc52Utf8PasteWarning,
  setClipboard,
  readClipboard,
  OSC_CODES,
  parseOscSequence,
  formatHyperlinkStart,
  HYPERLINK_END,
  ITERM2_OSC_COMMANDS,
  ITERM2_PROGRESS_STATES,
  CLEAR_ITERM2_PROGRESS_SEQUENCE,
  RESET_TITLE_AND_ICON_SEQUENCE,
  RESET_TAB_STATUS_SEQUENCE,
  isTabStatusEnabled,
  formatTabStatus,
};
