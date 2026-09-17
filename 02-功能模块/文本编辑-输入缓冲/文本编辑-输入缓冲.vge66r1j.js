// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { rs } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { JETBRAINS_IDES, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { lit as S } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { W, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { ie } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { cs, IBe, Wet, vRt, ike, rHn, qar } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { Tf } from "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import { Zd } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { Pat, Oat, T9e } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import { On } from "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import { getMainLoopModel, zg, H6, H, Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { ea } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { El } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { execFileNoThrow } from "../Git-Worktree/chunk-9ys1bnqr.js";
import { te, dp } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { gi, bs, nk } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { XB, ZOt, R9e } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { rue, Nze } from "../../01-核心基础设施/共享小工具-未细化/chunk-pw4nttt4.js";
import { Ol } from "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import { vt } from "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import { rd } from "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import { U } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { Ir } from "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import { X7, Ka } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Y0 } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { ftn, Qd } from "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import { cu } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { ut } from "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import { nue, mOe } from "../../01-核心基础设施/共享小工具-未细化/chunk-zdf7z1m1.js";
import { re, De, E, vr, dn, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { lK, Z3, pJn, fJn } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { Xs, Wke, rPn } from "../../01-核心基础设施/共享小工具-未细化/chunk-xcc43dkx.js";
import { P, mur } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { me } from "../../01-核心基础设施/共享小工具-未细化/chunk-6rcgxa93.js";
import { randomBytes } from "crypto";
import {
  copyFile,
  mkdir,
  readFile,
  writeFile,
} from "fs/promises";
import { homedir as Ge, platform as Le } from "os";
import { dirname as lr, join as Q } from "path";
import { pathToFileURL } from "url";
import { platform as er } from "os";
function shouldOfferTerminalSetup() {
  return (
    (er() === "darwin" && a.terminal === "Apple_Terminal") ||
    a.terminal === "vscode" ||
    a.terminal === "cursor" ||
    a.terminal === "windsurf" ||
    a.terminal === "alacritty" ||
    a.terminal === "zed"
  );
}
import { stat as mt } from "fs/promises";
import { homedir as tr } from "os";
import { join as rr } from "path";
async function nr(e, t) {
  await Te(
    (r) => ({
      ...r,
      appleTerminalSetupInProgress: !0,
      appleTerminalBackupPath: e,
    }),
    t,
  );
}
async function $e(e) {
  await Te((t) => ({ ...t, appleTerminalSetupInProgress: !1 }), e);
}
function ir() {
  let e = ee();
  return {
    inProgress: e.appleTerminalSetupInProgress ?? !1,
    backupPath: e.appleTerminalBackupPath || null,
  };
}
function Se() {
  return rr(tr(), "Library", "Preferences", "com.apple.Terminal.plist");
}
async function ht(e) {
  let t = Se(),
    r = `${t}.bak`;
  try {
    let { code: s } = await execFileNoThrow("defaults", ["export", "com.apple.Terminal", t]);
    if (s !== 0) return null;
    try {
      await mt(t);
    } catch {
      return null;
    }
    return (
      await execFileNoThrow("defaults", ["export", "com.apple.Terminal", r]),
      await nr(r, e),
      r
    );
  } catch (s) {
    if (Rt(s))
      return (n(`backupTerminalPreferences: fs inaccessible: ${s}`), null);
    return (logError(s), null);
  }
}
async function yOt(e) {
  let { inProgress: t, backupPath: r } = ir();
  if (!t) return { status: "no_backup" };
  if (!r) return (await $e(e), { status: "no_backup" });
  try {
    await mt(r);
  } catch {
    return (await $e(e), { status: "no_backup" });
  }
  let s = !1;
  try {
    let { code: o } = await execFileNoThrow("defaults", ["import", "com.apple.Terminal", r]);
    if (o !== 0) return { status: "failed", backupPath: r };
    return (
      (s = !0),
      await execFileNoThrow("killall", ["cfprefsd"]),
      await $e(e),
      { status: "restored" }
    );
  } catch (o) {
    if (Rt(o)) n(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);
    else logError(o);
    return (
      await $e(e),
      s ? { status: "restored" } : { status: "failed", backupPath: r }
    );
  }
}
import { homedir as sr } from "os";
import { dirname as Qr, join as ge, resolve } from "path";
function or() {
  let e = a.SHELL || "",
    t = sr(),
    r = ge(t, ".claude");
  if (e.endsWith("/zsh") || e.endsWith("/zsh.exe")) {
    let s = ge(r, "completion.zsh");
    return {
      name: "zsh",
      rcFile: ge(t, ".zshrc"),
      cacheFile: s,
      completionLine: `[[ -f "${s}" ]] && source "${s}"`,
      shellFlag: "zsh",
    };
  }
  if (e.endsWith("/bash") || e.endsWith("/bash.exe")) {
    let s = ge(r, "completion.bash");
    return {
      name: "bash",
      rcFile: ge(t, ".bashrc"),
      cacheFile: s,
      completionLine: `[ -f "${s}" ] && source "${s}"`,
      shellFlag: "bash",
    };
  }
  if (e.endsWith("/fish") || e.endsWith("/fish.exe")) {
    let s = a.XDG_CONFIG_HOME || ge(t, ".config"),
      o = ge(r, "completion.fish");
    return {
      name: "fish",
      rcFile: ge(s, "fish", "config.fish"),
      cacheFile: o,
      completionLine: `[ -f "${o}" ] && source "${o}"`,
      shellFlag: "fish",
    };
  }
  return null;
}
async function Cen() {
  return;
}
function ar(e) {
  let { cmd: t, prefixArgs: r } = rd();
  return execFileNoThrow(t, [...r, "completion", e.shellFlag, "--output", e.cacheFile]);
}
var p = `
`,
  ve = {
    ghostty: "Ghostty",
    kitty: "Kitty",
    "iTerm.app": "iTerm2",
    WezTerm: "WezTerm",
    WarpTerminal: "Warp",
    "windows-terminal": "Windows Terminal",
  };
function Ke() {
  let e = a.VSCODE_GIT_ASKPASS_MAIN ?? "",
    t = a.PATH ?? "";
  return (
    e.includes(".vscode-server") ||
    e.includes(".cursor-server") ||
    e.includes(".windsurf-server") ||
    e.includes(".devin-server") ||
    t.includes(".vscode-server") ||
    t.includes(".cursor-server") ||
    t.includes(".windsurf-server") ||
    t.includes(".devin-server")
  );
}
function getNativeCSIuTerminalDisplayName() {
  if (!a.terminal || !(a.terminal in ve)) return null;
  return ve[a.terminal] ?? null;
}
function ne(e) {
  if (!Tf()) return e;
  return `\x1B]8;;${pathToFileURL(e).href}\x07${e}\x1B]8;;\x07`;
}
function Be() {
  return "";
}
async function setupTerminal(e, t, r) {
  let s = "",
    o = !0;
  switch (a.terminal) {
    case "Apple_Terminal":
      s = await dr(t, r);
      break;
    case "vscode":
      ((s = await Qe(e, "VSCode", t)),
        (s += await Ze(e, "VSCode", t)),
        (s += await installVSCodeGpuAccelerationOff(e, "VSCode", t)));
      break;
    case "cursor":
      ((s = await Qe(e, "Cursor", t)),
        (s += await Ze(e, "Cursor", t)),
        (s += await installVSCodeGpuAccelerationOff(e, "Cursor", t)));
      break;
    case "windsurf":
      ((s = await Qe(e, "Devin Desktop", t)),
        (s += await Ze(e, "Devin Desktop", t)),
        (s += await installVSCodeGpuAccelerationOff(e, "Devin Desktop", t)));
      break;
    case "alacritty":
      s = await fr(t);
      break;
    case "zed": {
      let l = await mr(t);
      ((s = l.message), (o = l.installed));
      break;
    }
    case null:
      break;
  }
  return (
    await Te((l) => {
      if (o && yt.includes(a.terminal ?? "")) {
        if (l.shiftEnterKeyBindingInstalled === !0) return l;
        return { ...l, shiftEnterKeyBindingInstalled: !0 };
      } else if (a.terminal === "Apple_Terminal") {
        if (l.optionAsMetaKeyInstalled === !0) return l;
        return { ...l, optionAsMetaKeyInstalled: !0 };
      }
      return l;
    }, r),
    s
  );
}
var wt =
  'iTerm2 \u2192 Settings \u2192 General \u2192 Selection \u2192 check "Applications in terminal may access clipboard"';
async function enableITerm2ClipboardAccess(e) {
  let t = ie.dim(wt);
  try {
    let { stdout: r, code: s } = await execFileNoThrow("defaults", [
      "read",
      "com.googlecode.iterm2",
      "AllowClipboardAccess",
    ]);
    if (s === 0 && r.trim() === "1")
      return `${ut("success", e)("iTerm2 clipboard access already enabled")}${p}${p}`;
    let { code: o } = await execFileNoThrow("defaults", [
      "write",
      "com.googlecode.iterm2",
      "AllowClipboardAccess",
      "-bool",
      "true",
    ]);
    if (o !== 0)
      return `${ut("warning", e)("Couldn't update iTerm2 clipboard setting.")}${p}${t}${p}${p}`;
    return `${ut("success", e)('Enabled "Applications in terminal may access clipboard" in iTerm2')}${p}${ie.dim("Restart iTerm2 for this to take effect. Undo: defaults write com.googlecode.iterm2 AllowClipboardAccess -bool false")}${p}${p}`;
  } catch (r) {
    return (
      logError(r),
      `${ut("warning", e)("Couldn't update iTerm2 clipboard setting.")}${p}${t}${p}${p}`
    );
  }
}
function isShiftEnterKeyBindingInstalled() {
  return ee().shiftEnterKeyBindingInstalled === !0;
}
var yt = ["vscode", "cursor", "windsurf", "alacritty", "zed"];
function supportsShiftEnter() {
  if (a.terminal === "Apple_Terminal" && Le() === "darwin") return !0;
  if (a.terminal && a.terminal in ve) return !0;
  return yt.includes(a.terminal ?? "") && isShiftEnterKeyBindingInstalled();
}
function hasUsedBackslashReturn() {
  return ee().hasUsedBackslashReturn === !0;
}
function markBackslashReturnUsed(e) {
  if (!ee().hasUsedBackslashReturn)
    Te((r) => ({ ...r, hasUsedBackslashReturn: !0 }), e);
}
async function call(e, t, r) {
  if (
    Le() === "darwin" &&
    a.__CFBundleIdentifier === "com.googlecode.iterm2" &&
    (a.terminal === "iTerm.app" ||
      a.terminal === "tmux" ||
      a.terminal === "screen" ||
      a.terminal === null)
  ) {
    let l = `${await enableITerm2ClipboardAccess(t.options.theme)}Shift+Enter is natively supported in iTerm2.

No configuration needed. Just use Shift+Enter to add newlines.${Be()}`;
    return (e(l), null);
  }
  if (a.terminal && a.terminal in ve) {
    let o = `Shift+Enter is natively supported in ${ve[a.terminal]}.

No configuration needed. Just use Shift+Enter to add newlines.${Be()}`;
    return (e(o), null);
  }
  if (!shouldOfferTerminalSetup()) {
    let o = a.terminal || "your current terminal",
      l = P(),
      m = "";
    if (l === "macos")
      m = `   \u2022 macOS: Apple Terminal
`;
    let c =
        a.LC_TERMINAL === "iTerm2"
          ? `${p}${p}You appear to be connected from iTerm2 on another machine. For /copy to reach your local clipboard, on that machine open:${p}${ie.dim(wt)}`
          : "",
      x = `Terminal setup cannot be run from ${o}.

This command configures a convenient Shift+Enter shortcut for multi-line prompts.
${ie.dim("Note: You can already use backslash (\\\\) + return to add newlines.")}

To set up the shortcut (optional):
1. Exit tmux/screen temporarily
2. Run /terminal-setup directly in one of these terminals:
${m}   \u2022 IDE: VSCode, Cursor, Devin Desktop, Zed
   \u2022 Other: Alacritty
3. Return to tmux/screen - settings will persist

${ie.dim("Note: iTerm2, WezTerm, Ghostty, Kitty, Warp, and Windows Terminal support Shift+Enter natively.")}${c}${Be()}`;
    return (e(x), null);
  }
  let s = await setupTerminal(t.session.host, t.options.theme, t.storageV5);
  return (e(s + Be()), null);
}
var ke = "terminal.integrated.mouseWheelScrollSensitivity",
  Oe = 3,
  He = "terminal.integrated.gpuAcceleration",
  Je = "off";
async function readVSCodeScrollSensitivity(e) {
  let t = cr();
  if (!t || Ke()) return null;
  try {
    let r = await readFile(Q(await vscodeUserDirectories.of(e).pathFor(t), "settings.json"), {
        encoding: "utf-8",
      }),
      s = ike(r),
      o = me(s) ? s[ke] : void 0;
    return {
      editor: t,
      sensitivity: typeof o === "number" ? o : null,
      recommended: Oe,
    };
  } catch (r) {
    if (!Rt(r)) logError(r);
    return { editor: t, sensitivity: null, recommended: Oe };
  }
}
function cr() {
  switch (a.terminal) {
    case "vscode":
      return "VSCode";
    case "cursor":
      return "Cursor";
    case "windsurf":
      return "Devin Desktop";
    default:
      return null;
  }
}
class xt {
  pathFor = rs(
    async (e) => {
      let t = (r) =>
        Q(
          Ge(),
          Le() === "win32"
            ? Q("AppData", "Roaming", r, "User")
            : Le() === "darwin"
              ? Q("Library", "Application Support", r, "User")
              : Q(".config", r, "User"),
        );
      if (e === "VSCode") return t("Code");
      if (e === "Devin Desktop") {
        let r = t("Devin");
        return (await El(r)) ? r : t("Windsurf");
      }
      return t(e);
    },
    (e) => `${e}:${Ge()}`,
  );
}
var vscodeUserDirectories = new j(() => new xt());
async function Ze(e, t, r) {
  let s = ie.dim(
    `For smoother scrolling, set "${ke}": ${Oe} in ${t} settings.`,
  );
  if (Ke()) return `${s}${p}`;
  let o = Q(await vscodeUserDirectories.of(e).pathFor(t), "settings.json");
  try {
    let l = "{}",
      m = !1;
    try {
      ((l = await readFile(o, { encoding: "utf-8" })), (m = !0));
    } catch (T) {
      if (!Rt(T)) throw T;
    }
    let c = ike(l);
    if (!me(c))
      return `${ut("warning", r)(`${t} settings.json isn't a JSON object; not modifying it.`)}${p}${s}${p}`;
    if (ke in c)
      return `${ut("success", r)(`${t} ${ke} already set; leaving as-is`)}${p}${ie.dim(`See ${ne(o)}`)}${p}`;
    let x = rHn(l, ke, Oe);
    if (x === l)
      return `${ut("warning", r)(`Couldn't update ${t} settings.json.`)}${p}${s}${p}`;
    if (m) {
      let T = `${o}.${randomBytes(4).toString("hex")}.bak`;
      try {
        await copyFile(o, T);
      } catch {
        return `${ut("warning", r)(`Couldn't back up ${t} settings.json; not modifying it.`)}${p}${s}${p}`;
      }
    }
    return (
      await writeFile(o, x, { encoding: "utf-8" }),
      `${ut("success", r)(`Set ${t} terminal scroll sensitivity to ${Oe}`)}${p}${ie.dim(`See ${ne(o)}`)}${p}`
    );
  } catch (l) {
    return (
      n(
        `Couldn't update ${t} settings.json at ${o}: ${l instanceof Error ? l.message : String(l)}`,
        { level: "error" },
      ),
      `${ut("warning", r)(`Couldn't update ${t} settings.json.`)}${p}${s}${p}`
    );
  }
}
async function installVSCodeGpuAccelerationOff(e, t, r) {
  let s = ie.dim(
    `To fix garbled text, set "${He}": "${Je}" in ${t} settings (undo: set it back to "auto").`,
  );
  if (Ke()) return (logFeatureSad("terminal_setup_gpu_accel", "remote_ssh"), `${s}${p}`);
  let o = Q(await vscodeUserDirectories.of(e).pathFor(t), "settings.json");
  try {
    let l = "{}",
      m = !1;
    try {
      ((l = await readFile(o, { encoding: "utf-8" })), (m = !0));
    } catch (T) {
      if (!Rt(T)) throw T;
    }
    let c = ike(l);
    if (!me(c))
      return (
        logFeatureSad("terminal_setup_gpu_accel", "not_json_object"),
        `${ut("warning", r)(`${t} settings.json isn't a JSON object; not modifying it.`)}${p}${s}${p}`
      );
    if (c[He] === Je)
      return (
        logFeatureOk("terminal_setup_gpu_accel"),
        `${ut("success", r)(`${t} GPU acceleration already off; leaving as-is`)}${p}${ie.dim(`See ${ne(o)}`)}${p}`
      );
    let x = rHn(l, He, Je);
    if (x === l)
      return (
        logFeatureSad("terminal_setup_gpu_accel", "write_failed"),
        `${ut("warning", r)(`Couldn't update ${t} settings.json.`)}${p}${s}${p}`
      );
    if (m) {
      let T = `${o}.${randomBytes(4).toString("hex")}.bak`;
      try {
        await copyFile(o, T);
      } catch {
        return (
          logFeatureSad("terminal_setup_gpu_accel", "backup_failed"),
          `${ut("warning", r)(`Couldn't back up ${t} settings.json; not modifying it.`)}${p}${s}${p}`
        );
      }
    }
    return (
      await writeFile(o, x, { encoding: "utf-8" }),
      logFeatureOk("terminal_setup_gpu_accel"),
      `${ut("success", r)(`Turned off ${t} GPU acceleration to fix garbled text`)}${p}${ie.dim(`Reload the ${t} window to apply. Undo: set "${He}" back to "auto".`)}${p}${ie.dim(`See ${ne(o)}`)}${p}`
    );
  } catch (l) {
    return (
      logFeatureSad("terminal_setup_gpu_accel", "write_failed"),
      n(
        `Couldn't update ${t} settings.json at ${o}: ${l instanceof Error ? l.message : String(l)}`,
        { level: "error" },
      ),
      `${ut("warning", r)(`Couldn't update ${t} settings.json.`)}${p}${s}${p}`
    );
  }
}
async function Qe(e, t = "VSCode", r) {
  if (Ke())
    return `${ut("warning", r)(`Cannot install keybindings from a remote ${t} session.`)}${p}${p}${t} keybindings must be installed on your local machine, not the remote server.${p}${p}To install the Shift+Enter keybinding:${p}1. Open ${t} on your local machine (not connected to remote)${p}2. Open the Command Palette (Cmd/Ctrl+Shift+P) \u2192 "Preferences: Open Keyboard Shortcuts (JSON)"${p}3. Add this keybinding (the file must be a JSON array):${p}${p}${ie.dim(`[
  {
    "key": "shift+enter",
    "command": "workbench.action.terminal.sendSequence",
    "args": { "text": "\\u001b\\r" },
    "when": "terminalFocus"
  }
]`)}${p}`;
  let s = await vscodeUserDirectories.of(e).pathFor(t),
    o = Q(s, "keybindings.json");
  try {
    await mkdir(s, { recursive: !0 });
    let l = "[]",
      m = [],
      c = !1;
    try {
      ((l = await readFile(o, { encoding: "utf-8" })), (c = !0), (m = ike(l) ?? []));
    } catch (L) {
      if (!Rt(L)) throw L;
    }
    if (c) {
      let L = randomBytes(4).toString("hex"),
        I = `${o}.${L}.bak`;
      try {
        await copyFile(o, I);
      } catch {
        return `${ut("warning", r)(`Error backing up existing ${t} terminal keybindings. Bailing out.`)}${p}${ie.dim(`See ${ne(o)}`)}${p}${ie.dim(`Backup path: ${ne(I)}`)}${p}`;
      }
    }
    let x = {
        key: "shift+enter",
        command: "workbench.action.terminal.sendSequence",
        args: { text: "\x1B\r" },
        when: "terminalFocus",
      },
      T = m.find(
        (L) => L.key === x.key && L.command === x.command && L.when === x.when,
      );
    if (T) {
      let L = ie.dim(`See ${ne(o)}`);
      if (T.args?.text === x.args.text)
        return `${ut("success", r)(`${t} terminal Shift+Enter key binding already configured`)}${p}${L}${p}`;
      return `${ut("warning", r)(`${t} already has a Shift+Enter terminal binding with different args; leaving it as-is.`)}${p}${L}${p}`;
    }
    let R = qar(l, x);
    return (
      await writeFile(o, R, { encoding: "utf-8" }),
      `${ut("success", r)(`Installed ${t} terminal Shift+Enter key binding`)}${p}${ie.dim(`See ${ne(o)}`)}${p}`
    );
  } catch (l) {
    throw (
      n(
        `Failed to install ${t} terminal Shift+Enter keybinding: ${l instanceof Error ? l.message : String(l)}`,
        { level: "error" },
      ),
      Error(`Failed to install ${t} terminal Shift+Enter key binding`)
    );
  }
}
async function pt(e) {
  let { code: t } = await execFileNoThrow("/usr/libexec/PlistBuddy", [
    "-c",
    `Add :'Window Settings':'${e}':useOptionAsMetaKey bool true`,
    Se(),
  ]);
  if (t !== 0) {
    let { code: r } = await execFileNoThrow("/usr/libexec/PlistBuddy", [
      "-c",
      `Set :'Window Settings':'${e}':useOptionAsMetaKey true`,
      Se(),
    ]);
    if (r !== 0)
      return (
        n(
          `Failed to enable Option as Meta key for Terminal.app profile: ${e}`,
          { level: "error" },
        ),
        !1
      );
  }
  return !0;
}
async function gt(e) {
  let { code: t } = await execFileNoThrow("/usr/libexec/PlistBuddy", [
    "-c",
    `Add :'Window Settings':'${e}':Bell bool false`,
    Se(),
  ]);
  if (t !== 0) {
    let { code: r } = await execFileNoThrow("/usr/libexec/PlistBuddy", [
      "-c",
      `Set :'Window Settings':'${e}':Bell false`,
      Se(),
    ]);
    if (r !== 0)
      return (
        n(`Failed to disable audio bell for Terminal.app profile: ${e}`, {
          level: "error",
        }),
        !1
      );
  }
  return !0;
}
async function dr(e, t) {
  let r = (mur() ?? 0) >= 27,
    s = zg();
  if (r && s)
    return `${ut("success", e)("No Terminal.app changes needed.")}${p}${ie.dim("Shift+Return already enters a newline on this macOS version, and screen-reader mode leaves the audible bell setting unchanged.")}${p}`;
  try {
    if (!(await ht(t)))
      throw Error(
        "Failed to create backup of Terminal.app preferences, bailing out",
      );
    let { stdout: l, code: m } = await execFileNoThrow("defaults", [
      "read",
      "com.apple.Terminal",
      "Default Window Settings",
    ]);
    if (m !== 0 || !l.trim())
      throw Error("Failed to read default Terminal.app profile");
    let { stdout: c, code: x } = await execFileNoThrow("defaults", [
      "read",
      "com.apple.Terminal",
      "Startup Window Settings",
    ]);
    if (x !== 0 || !c.trim())
      throw Error("Failed to read startup Terminal.app profile");
    let T = !1,
      R = l.trim(),
      L = r ? !1 : await pt(R),
      I = s ? !1 : await gt(R);
    if (L || I) T = !0;
    let D = c.trim();
    if (D !== R) {
      let Y = r ? !1 : await pt(D),
        _ = s ? !1 : await gt(D);
      if (Y || _) T = !0;
    }
    if (!T) {
      if (r)
        throw Error(
          "Failed to disable audio bell for any Terminal.app profile",
        );
      if (s)
        throw Error(
          "Failed to enable Option as Meta key for any Terminal.app profile",
        );
      throw Error(
        "Failed to enable Option as Meta key or disable audio bell for any Terminal.app profile",
      );
    }
    (await execFileNoThrow("killall", ["cfprefsd"]), await $e(t));
    let J = [ut("success", e)("Configured Terminal.app settings:")];
    if (!r) J.push(ut("success", e)('- Enabled "Use Option as Meta key"'));
    if (!s) J.push(ut("success", e)("- Disabled the audible bell"));
    else
      J.push(
        ie.dim(
          "- Left the audible bell setting unchanged (screen-reader mode uses it)",
        ),
      );
    let K = r
      ? ie.dim("Shift+Return will now enter a newline.")
      : ie.dim("Option+Enter will now enter a newline.");
    return `${J.join(p)}${p}${K}${p}${ie.dim("You must restart Terminal.app for changes to take effect.")}${p}`;
  } catch (o) {
    n(
      `Terminal.app setup failed: ${o instanceof Error ? o.message : String(o)}`,
      { level: "error" },
    );
    let l = await yOt(t),
      m = r
        ? "Failed to disable the audio bell for Terminal.app."
        : "Failed to enable Option as Meta key for Terminal.app.";
    if (l.status === "restored")
      throw Error(`${m} Your settings have been restored from backup.`);
    else if (l.status === "failed")
      throw Error(
        `${m} Restoring from backup failed, try manually with: defaults import com.apple.Terminal ${l.backupPath}`,
      );
    else throw Error(`${m} No backup was available to restore from.`);
  }
}
async function fr(e) {
  let r = [],
    s = a.XDG_CONFIG_HOME;
  if (s) r.push(Q(s, "alacritty", "alacritty.toml"));
  else r.push(Q(Ge(), ".config", "alacritty", "alacritty.toml"));
  if (Le() === "win32") {
    let c = a.APPDATA;
    if (c) r.push(Q(c, "alacritty", "alacritty.toml"));
  }
  let o = null,
    l = "",
    m = !1;
  for (let c of r)
    try {
      ((l = await readFile(c, { encoding: "utf-8" })), (o = c), (m = !0));
      break;
    } catch (x) {
      if (!Rt(x)) throw x;
    }
  if (!o) o = r[0] ?? null;
  if (!o) throw Error("No valid config path found for Alacritty");
  try {
    if (m) {
      if (l.includes('mods = "Shift"') && l.includes('key = "Return"'))
        return `${ut("success", e)("Alacritty Shift+Enter key binding already configured")}${p}${ie.dim(`See ${ne(o)}`)}${p}`;
      let x = randomBytes(4).toString("hex"),
        T = `${o}.${x}.bak`;
      try {
        await copyFile(o, T);
      } catch {
        return `${ut("warning", e)("Error backing up existing Alacritty config. Bailing out.")}${p}${ie.dim(`See ${ne(o)}`)}${p}${ie.dim(`Backup path: ${ne(T)}`)}${p}`;
      }
    } else await mkdir(lr(o), { recursive: !0 });
    let c = l;
    if (
      l &&
      !l.endsWith(`
`)
    )
      c += `
`;
    return (
      (c += `
[[keyboard.bindings]]
key = "Return"
mods = "Shift"
chars = "\\u001B\\r"
`),
      await writeFile(o, c, { encoding: "utf-8" }),
      `${ut("success", e)("Installed Alacritty Shift+Enter key binding")}${p}${ut("success", e)("You may need to restart Alacritty for changes to take effect")}${p}${ie.dim(`See ${ne(o)}`)}${p}`
    );
  } catch (c) {
    throw (
      n(
        `Failed to install Alacritty keybinding: ${c instanceof Error ? c.message : String(c)}`,
        { level: "error" },
      ),
      Error("Failed to install Alacritty Shift+Enter key binding")
    );
  }
}
var et = ["terminal::SendText", "\x1B\r"];
function bt(e) {
  return (
    me(e) &&
    e.context === "Terminal" &&
    me(e.bindings) &&
    "shift-enter" in e.bindings
  );
}
async function mr(e) {
  let t = P() === "linux" ? a.XDG_CONFIG_HOME : void 0,
    r = t ? Q(t, "zed") : Q(Ge(), ".config", "zed"),
    s = Q(r, "keymap.json"),
    o = ie.dim(`See ${ne(s)}`),
    l = ie.dim(
      `To add the binding yourself, add this block to the keymap array in ${ne(s)}:${p}{ "context": "Terminal", "bindings": { "shift-enter": ["terminal::SendText", "\\u001b\\r"] } }`,
    ),
    m = `${ut("success", e)("Installed Zed Shift+Enter key binding")}${p}${o}${p}`,
    c = `${ut("warning", e)("Couldn't read your Zed keymap, so it was left unchanged.")}${p}${l}${p}`,
    x = `${ut("warning", e)("Your Zed keymap isn't a readable list of keybindings, so it was left unchanged.")}${p}${l}${p}`;
  try {
    await mkdir(r, { recursive: !0 });
    let T = null;
    try {
      T = await readFile(s, { encoding: "utf-8" });
    } catch (O) {
      if (!Rt(O)) throw O;
      if (!W(O)) return { message: c, installed: !1 };
    }
    if (T === null || cs(T).trim() === "")
      return (
        await On(
          s,
          b(
            [{ context: "Terminal", bindings: { "shift-enter": et } }],
            null,
            2,
          ) +
            `
`,
        ),
        { message: m, installed: !0 }
      );
    let R = [],
      L = cs(T),
      I = IBe(L, R, { allowTrailingComma: !0 });
    if (R.length > 0 || !Array.isArray(I)) return { message: x, installed: !1 };
    if (I.some(bt))
      return {
        message: `${ut("success", e)("Zed Shift+Enter key binding already configured")}${p}${o}${p}`,
        installed: !0,
      };
    let D = randomBytes(4).toString("hex"),
      J = `${s}.${D}.bak`;
    try {
      await copyFile(s, J);
    } catch (O) {
      return (
        n(
          `Failed to back up Zed keymap: ${O instanceof Error ? O.message : String(O)}`,
          { level: "error" },
        ),
        {
          message: `${ut("warning", e)("Couldn't back up your Zed keymap; not modifying it.")}${p}${l}${p}`,
          installed: !1,
        }
      );
    }
    let K = I.findIndex(
        (O) => me(O) && O.context === "Terminal" && me(O.bindings),
      ),
      Y = { insertSpaces: !0, tabSize: 2 },
      _ = null;
    try {
      let O =
        K >= 0
          ? Wet(L, [K, "bindings", "shift-enter"], et, { formattingOptions: Y })
          : Wet(
              L,
              [I.length],
              { context: "Terminal", bindings: { "shift-enter": et } },
              { formattingOptions: Y, isArrayInsertion: !0 },
            );
      _ = O.length > 0 ? vRt(L, O) : null;
    } catch (O) {
      n(
        `Failed to edit Zed keymap: ${O instanceof Error ? O.message : String(O)}`,
        { level: "error" },
      );
    }
    let M = [],
      z = _ === null ? null : IBe(_, M, { allowTrailingComma: !0 });
    if (_ === null || M.length > 0 || !Array.isArray(z) || !z.some(bt))
      return {
        message: `${ut("warning", e)("Couldn't update your Zed keymap, so it was left unchanged.")}${p}${l}${p}`,
        installed: !1,
      };
    return (await On(s, _), { message: m, installed: !0 });
  } catch (T) {
    throw (
      n(
        `Failed to install Zed Shift+Enter key binding: ${T instanceof Error ? T.message : String(T)}`,
        { level: "error" },
      ),
      Error("Failed to install Zed Shift+Enter key binding")
    );
  }
}
var oat = 3000,
  sat = "Press \u2190 again to go back to agents",
  EOt = "Ambiguous \u2190, press again to detach",
  Tt = 1000,
  hr = 150;
function AOt() {
  return {
    editedEmptyAtMs: 0,
    armedAtMs: 0,
    lastLeftPressMs: 0,
    attachConfirmArmedAtMs: 0,
  };
}
function COt(
  e,
  t,
  r,
  s = H("tengu_left_arrow_editing_guard", !0),
  o = Nze(t),
  l = rue(),
) {
  if (r !== !0) return "reject";
  let m = (x) => x !== 0 && x >= l;
  if (o) {
    if (m(e.lastLeftPressMs) && t - e.lastLeftPressMs < Tt)
      return "attach-absorb";
    if (m(e.attachConfirmArmedAtMs) && t - e.attachConfirmArmedAtMs <= 3000)
      return t - e.attachConfirmArmedAtMs >= hr ? "fire" : "attach-absorb";
    return "attach-arm";
  }
  if (!s) return "fire";
  if (m(e.lastLeftPressMs) && t - e.lastLeftPressMs < Tt) return "absorb";
  if (m(e.armedAtMs) && t - e.armedAtMs <= 3000) return "fire";
  return m(e.editedEmptyAtMs) && t - e.editedEmptyAtMs < 2000 ? "arm" : "fire";
}
function vOt(e, t, r) {
  switch (t) {
    case "fire":
      ((e.armedAtMs = 0),
        (e.attachConfirmArmedAtMs = 0),
        (e.lastLeftPressMs = r));
      return;
    case "arm":
      ((e.armedAtMs = r), (e.lastLeftPressMs = r));
      return;
    case "absorb":
      e.lastLeftPressMs = r;
      return;
    case "reject":
      return;
    case "attach-arm":
      e.attachConfirmArmedAtMs = r;
      return;
    case "attach-absorb":
      return;
  }
}
function ROt(e, t) {
  let r = t - rue();
  switch (e) {
    case "fire":
      return;
    case "arm":
      i("tengu_left_arrow_blocked", { reason: S("editing-quiet") });
      return;
    case "attach-arm":
      (i("tengu_left_arrow_blocked", {
        reason: S("attach-quiet-hint"),
        ms_since_stamp: r,
      }),
        n(`leftArrowGesture: attach-quiet hint armed (ms_since_stamp=${r})`, {
          level: "debug",
        }));
      return;
    case "attach-absorb":
      (i("tengu_left_arrow_blocked", {
        reason: S("attach-quiet"),
        ms_since_stamp: r,
      }),
        n(
          `leftArrowGesture: attach-quiet silent absorb (ms_since_stamp=${r})`,
          { level: "debug" },
        ));
      return;
    case "reject":
      if (Ol().claim("left_arrow_not_solo_reject"))
        i("tengu_left_arrow_blocked", { reason: S("not-solo") });
      return;
    case "absorb":
      return;
  }
}
F();
function dd(e, t, r = !1) {
  E(() => {
    let s = e.current;
    if (!s) return;
    let o = XB(s);
    if (!t) {
      if (r && o.activeElement === s) o.blur();
      return;
    }
    return (
      o.focus(s),
      o.subscribe(() => {
        let l = e.current;
        if (!l || o.activeElement === l) return;
        if (!o.activeElement) {
          o.focus(l);
          return;
        }
        let m = l.parentNode;
        while (m) {
          if (m === o.activeElement) {
            o.focus(l);
            return;
          }
          m = m.parentNode;
        }
      })
    );
  }, [t, e, r]);
}
F();
function _p({ line: e, column: t, active: r, visible: s = !1 }) {
  let o = De(ZOt),
    l = C(null),
    m = re((c) => {
      l.current = c;
    }, []);
  return (
    dn(() => {
      let c = l.current;
      if (r && c) o({ relativeX: t, relativeY: e, node: c, visible: s });
      else o(null, c);
    }),
    dn(
      () => () => {
        o(null, l.current);
      },
      [o],
    ),
    m
  );
}
F();
var pr = /^[\p{L}\p{N}\p{M}_]$/u,
  gr = /[\p{L}\p{N}][\p{L}\p{N}\p{M}]*/gu,
  Ce = /\s/,
  nt =
    "\\[(?:Pasted text|Image|Audio|\\.\\.\\.Truncated text) #\\d+(?: \\+\\d+ lines)?\\.*\\]",
  br = new RegExp(nt + "$"),
  wr = new RegExp("^" + nt),
  yr = new RegExp(nt, "g"),
  hle = (e) => pr.test(e),
  TOt = (e) => Ce.test(e),
  Nye = (e) => e.length > 0 && !TOt(e) && !hle(e);
class Zs {
  measuredText;
  selection;
  offset;
  constructor(e, t = 0, r = 0) {
    this.measuredText = e;
    this.selection = r;
    this.offset = Math.max(0, Math.min(this.text.length, t));
  }
  static fromText(e, t, r = 0, s = 0) {
    return new Zs(new $t(e, t - 1), r, s);
  }
  getViewportStartLine(e) {
    if (e === void 0 || e <= 0) return 0;
    let { line: t } = this.getPosition(),
      r = this.measuredText.getWrappedText();
    if (r.length <= e) return 0;
    let s = Math.floor(e / 2),
      o = Math.max(0, t - s),
      l = Math.min(r.length, o + e);
    if (l - o < e) o = Math.max(0, l - e);
    return o;
  }
  getRenderedRowStartOffsets(e) {
    let { startLine: t, endLine: r } = this.getViewportLineRange(e);
    return this.measuredText
      .getWrappedLines()
      .slice(t, r)
      .map((s) => s.displayStartOffset);
  }
  getViewportLineRange(e) {
    let t = this.measuredText.getWrappedLines().length,
      r = this.getViewportStartLine(e),
      s = e !== void 0 && e > 0 ? Math.min(t, r + e) : t;
    return { startLine: r, endLine: s };
  }
  render(e, t, r, s, o, l, m, c) {
    let x = this.measuredText.getWrappedLines(),
      { startLine: T, endLine: R } = this.getViewportLineRange(o);
    if (l !== void 0) {
      let K = Math.min(l, this.offset),
        Y = Math.max(l, this.offset),
        _ = m ? this.findLogicalLineStart(K) : K,
        M = m ? this.findLogicalLineEnd(Y) : this.measuredText.nextOffset(Y);
      return x.slice(T, R).map((z, O) => {
        let de = (c ?? !1) && (z.endsWithNewline || O + T === x.length - 1),
          { displayText: G, displayStartOffset: A } = z,
          Z = A + G.length;
        if (M <= A || _ >= Z) {
          if (A === Z && _ <= A && (m ? M >= Z : M > Z))
            return (c ?? !1) ? "" : r(" ");
          return de ? G : G.trimEnd();
        }
        if (A === Z) return (c ?? !1) ? "" : r(" ");
        let oe = Math.max(0, _ - A),
          q = Math.min(G.length, M - A);
        if (c ?? !1) {
          let v = de ? G : G.trimEnd(),
            X = Math.min(oe, v.length),
            se = Math.min(q, v.length);
          return v.slice(0, X) + r(v.slice(X, se)) + v.slice(se);
        }
        return G.slice(0, oe) + r(G.slice(oe, q)) + G.slice(q).trimEnd();
      }).join(`
`);
    }
    let { line: L, column: I } = this.getPosition(),
      D = this.measuredText.getWrappedText(),
      J = this.measuredText.getWrappedLines();
    return D.slice(T, R).map((K, Y) => {
      let _ = Y + T,
        M = (c ?? !1) && ((J[_]?.endsWithNewline ?? !1) || _ === D.length - 1),
        z = K;
      if (t) {
        let v = Array.from(Xs().segment(K));
        if (_ === D.length - 1) {
          let X = Math.min(6, v.length),
            se = v.length - X,
            fe = v.length > X ? v[se].index : 0;
          z = t.repeat(se) + K.slice(fe);
        } else z = t.repeat(v.length);
      }
      if (L !== _) return M ? z : z.trimEnd();
      let O = "",
        de = e,
        G = "",
        A = 0,
        Z = !1;
      for (let { segment: v } of Xs().segment(z)) {
        if (Z) {
          G += v;
          continue;
        }
        let X = A + te(v);
        if (X > I) ((de = v), (Z = !0));
        else ((A = X), (O += v));
      }
      let oe,
        q = "";
      if (s && _ === D.length - 1 && this.isAtEnd() && s.text.length > 0) {
        let v = Wke(s.text) || s.text[0];
        oe = e ? r(v) : v;
        let X = s.text.slice(v.length);
        if (X.length > 0) q = s.dim(X);
      } else oe = e ? r(de) : de;
      if (c && !M && e === "") return (O + oe + q + G).trimEnd();
      return O + oe + q + (M ? G : G.trimEnd());
    }).join(`
`);
  }
  left() {
    if (this.offset === 0) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new Zs(this.measuredText, e.start);
    let t = this.measuredText.prevOffset(this.offset);
    return new Zs(this.measuredText, t);
  }
  right() {
    if (this.offset >= this.text.length) return this;
    let e = this.placeholderStartingAt(this.offset);
    if (e) return new Zs(this.measuredText, e.end);
    let t = this.measuredText.nextOffset(this.offset);
    return new Zs(this.measuredText, Math.min(t, this.text.length));
  }
  placeholderEndingAt(e) {
    if (this.text[e - 1] !== "]") return null;
    let t = this.text.slice(0, e).match(br);
    return t ? { start: e - t[0].length, end: e } : null;
  }
  placeholderStartingAt(e) {
    if (this.text[e] !== "[") return null;
    let t = this.text.slice(e).match(wr);
    return t ? { start: e, end: e + t[0].length } : null;
  }
  placeholderContaining(e) {
    for (let t of this.text.matchAll(yr)) {
      let r = t.index,
        s = r + t[0].length;
      if (e > r && e < s) return { start: r, end: s };
      if (r >= e) break;
    }
    return null;
  }
  snapOutOfPlaceholder(e, t) {
    let r = this.placeholderContaining(e);
    if (!r) return e;
    return t === "start" ? r.start : r.end;
  }
  up() {
    let { line: e, column: t } = this.getPosition();
    if (e === 0) return this;
    let r = this.measuredText.getWrappedText()[e - 1];
    if (r === void 0) return this;
    let s = te(r);
    if (t > s) {
      let l = this.getOffset({ line: e - 1, column: s });
      return new Zs(this.measuredText, l, 0);
    }
    let o = this.getOffset({ line: e - 1, column: t });
    return new Zs(this.measuredText, o, 0);
  }
  down() {
    let { line: e, column: t } = this.getPosition();
    if (e >= this.measuredText.lineCount - 1) return this;
    let r = this.measuredText.getWrappedText()[e + 1];
    if (r === void 0) return this;
    let s = te(r);
    if (t > s) {
      let l = this.getOffset({ line: e + 1, column: s });
      return new Zs(this.measuredText, l, 0);
    }
    let o = this.getOffset({ line: e + 1, column: t });
    return new Zs(this.measuredText, o, 0);
  }
  startOfCurrentLine() {
    let { line: e } = this.getPosition();
    return new Zs(this.measuredText, this.getOffset({ line: e, column: 0 }), 0);
  }
  startOfLine() {
    let { line: e, column: t } = this.getPosition();
    if (t === 0 && e > 0)
      return new Zs(
        this.measuredText,
        this.getOffset({ line: e - 1, column: 0 }),
        0,
      );
    return this.startOfCurrentLine();
  }
  firstNonBlankInLine() {
    let { line: e } = this.getPosition(),
      r = (this.measuredText.getWrappedText()[e] || "").match(/^\s*\S/),
      s = r?.index ? r.index + r[0].length - 1 : 0,
      o = this.getOffset({ line: e, column: s });
    return new Zs(this.measuredText, o, 0);
  }
  endOfLine() {
    let { line: e, column: t } = this.getPosition(),
      r = this.measuredText.getLineLength(e);
    if (t >= r && e < this.measuredText.lineCount - 1) {
      let o = this.measuredText.getLineLength(e + 1),
        l = this.getOffset({ line: e + 1, column: o });
      return new Zs(this.measuredText, l, 0);
    }
    let s = this.getOffset({ line: e, column: r });
    return new Zs(this.measuredText, s, 0);
  }
  findLogicalLineStart(e = this.offset) {
    if (e === 0) return 0;
    let t = this.text.lastIndexOf(
      `
`,
      e - 1,
    );
    return t === -1 ? 0 : t + 1;
  }
  findLogicalLineEnd(e = this.offset) {
    let t = this.text.indexOf(
      `
`,
      e,
    );
    return t === -1 ? this.text.length : t;
  }
  getLogicalLineBounds() {
    return {
      start: this.findLogicalLineStart(),
      end: this.findLogicalLineEnd(),
    };
  }
  createCursorWithColumn(e, t, r) {
    let s = t - e,
      o = Math.min(r, s),
      l = e + o,
      m = this.measuredText.snapToGraphemeBoundary(l);
    return new Zs(this.measuredText, m, 0);
  }
  endOfLogicalLine() {
    return new Zs(this.measuredText, this.findLogicalLineEnd(), 0);
  }
  lastCharInLogicalLine() {
    let e = this.findLogicalLineStart(),
      t = this.findLogicalLineEnd(),
      r = t > e ? this.measuredText.prevOffset(t) : e;
    return new Zs(this.measuredText, r, 0);
  }
  startOfLogicalLine() {
    return new Zs(this.measuredText, this.findLogicalLineStart(), 0);
  }
  firstNonBlankInLogicalLine() {
    let { start: e, end: t } = this.getLogicalLineBounds(),
      s = this.text.slice(e, t).match(/\S/),
      o = e + (s?.index ?? 0);
    return new Zs(this.measuredText, o, 0);
  }
  upLogicalLine() {
    let { start: e } = this.getLogicalLineBounds();
    if (e === 0) return new Zs(this.measuredText, 0, 0);
    let t = this.offset - e,
      r = e - 1,
      s = this.findLogicalLineStart(r);
    return this.createCursorWithColumn(s, r, t);
  }
  downLogicalLine() {
    let { start: e, end: t } = this.getLogicalLineBounds();
    if (t >= this.text.length)
      return new Zs(this.measuredText, this.text.length, 0);
    let r = this.offset - e,
      s = t + 1,
      o = this.findLogicalLineEnd(s);
    return this.createCursorWithColumn(s, o, r);
  }
  forwardWord() {
    if (this.isAtEnd()) return this;
    let e =
      this.placeholderStartingAt(this.offset) ??
      this.placeholderContaining(this.offset);
    if (e) return new Zs(this.measuredText, e.end);
    for (let t of this.measuredText.getReadlineWordBoundaries())
      if (t.end > this.offset) {
        let r = this.snapOutOfPlaceholder(t.end, "end");
        return new Zs(this.measuredText, r);
      }
    return new Zs(this.measuredText, this.text.length);
  }
  backwardWord() {
    if (this.isAtStart()) return this;
    let e =
      this.placeholderEndingAt(this.offset) ??
      this.placeholderContaining(this.offset);
    if (e) return new Zs(this.measuredText, e.start);
    let t = this.measuredText.getReadlineWordBoundaries();
    for (let r = t.length - 1; r >= 0; r--) {
      let s = t[r];
      if (s.start < this.offset) {
        let o = this.snapOutOfPlaceholder(s.start, "start");
        return new Zs(this.measuredText, o);
      }
    }
    return new Zs(this.measuredText, 0);
  }
  killWord() {
    let e = this.forwardWord();
    if (e.offset === this.offset) return { cursor: this, killed: "" };
    return this.killRange(this.offset, e.offset);
  }
  backwardKillWord() {
    let e = this.backwardWord();
    if (e.offset === this.offset) return { cursor: this, killed: "" };
    return this.killRange(e.offset, this.offset);
  }
  nextVimWord() {
    if (this.isAtEnd()) return this;
    let e =
      this.placeholderStartingAt(this.offset) ??
      this.placeholderContaining(this.offset);
    if (e) {
      let o = e.end;
      while (o < this.text.length && Ce.test(this.graphemeAt(o)))
        o = this.measuredText.nextOffset(o);
      return new Zs(this.measuredText, o);
    }
    let t = this.offset,
      r = (o) => this.measuredText.nextOffset(o),
      s = this.graphemeAt(t);
    if (!s) return this;
    if (hle(s))
      while (t < this.text.length && hle(this.graphemeAt(t))) t = r(t);
    else if (Nye(s))
      while (t < this.text.length && Nye(this.graphemeAt(t))) t = r(t);
    while (t < this.text.length && Ce.test(this.graphemeAt(t))) t = r(t);
    return new Zs(this.measuredText, this.snapOutOfPlaceholder(t, "end"));
  }
  endOfVimWord() {
    if (this.isAtEnd()) return this;
    let e =
      this.placeholderStartingAt(this.offset) ??
      this.placeholderContaining(this.offset);
    if (e && this.offset < e.end - 1)
      return new Zs(this.measuredText, e.end - 1);
    let t = this.text,
      r = this.offset,
      s = (m) => this.measuredText.nextOffset(m);
    if (this.graphemeAt(r) === "") return this;
    r = s(r);
    while (r < t.length && Ce.test(this.graphemeAt(r))) r = s(r);
    if (r >= t.length) return new Zs(this.measuredText, t.length);
    let o = this.graphemeAt(r);
    if (hle(o))
      while (r < t.length) {
        let m = s(r);
        if (m >= t.length || !hle(this.graphemeAt(m))) break;
        r = m;
      }
    else if (Nye(o))
      while (r < t.length) {
        let m = s(r);
        if (m >= t.length || !Nye(this.graphemeAt(m))) break;
        r = m;
      }
    let l = this.placeholderStartingAt(r) ?? this.placeholderContaining(r);
    if (l) r = l.end - 1;
    return new Zs(this.measuredText, r);
  }
  prevVimWord() {
    if (this.isAtStart()) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new Zs(this.measuredText, e.start);
    let t = this.placeholderContaining(this.offset);
    if (t) return new Zs(this.measuredText, t.start);
    let r = this.offset,
      s = (l) => this.measuredText.prevOffset(l);
    r = s(r);
    while (r > 0 && Ce.test(this.graphemeAt(r))) r = s(r);
    if (r === 0 && Ce.test(this.graphemeAt(0)))
      return new Zs(this.measuredText, 0);
    let o = this.graphemeAt(r);
    if (hle(o))
      while (r > 0) {
        let l = s(r);
        if (!hle(this.graphemeAt(l))) break;
        r = l;
      }
    else if (Nye(o))
      while (r > 0) {
        let l = s(r);
        if (!Nye(this.graphemeAt(l))) break;
        r = l;
      }
    return new Zs(this.measuredText, this.snapOutOfPlaceholder(r, "start"));
  }
  nextWORD() {
    let e = this;
    while (!e.isOverWhitespace() && !e.isAtEnd()) e = e.right();
    while (e.isOverWhitespace() && !e.isAtEnd()) e = e.right();
    return e;
  }
  endOfWORD() {
    if (this.isAtEnd()) return this;
    let e =
      this.placeholderStartingAt(this.offset) ??
      this.placeholderContaining(this.offset);
    if (e && this.offset < e.end - 1)
      return new Zs(this.measuredText, e.end - 1);
    let t = this;
    if (
      !t.isOverWhitespace() &&
      (t.right().isOverWhitespace() || t.right().isAtEnd())
    )
      return ((t = t.right()), t.endOfWORD());
    if (t.isOverWhitespace()) {
      t = t.nextWORD();
      let s = t.placeholderStartingAt(t.offset);
      if (s) return new Zs(this.measuredText, s.end - 1);
    }
    while (!t.right().isOverWhitespace() && !t.isAtEnd()) t = t.right();
    return t;
  }
  prevWORD() {
    let e = this;
    if (e.left().isOverWhitespace()) e = e.left();
    while (e.isOverWhitespace() && !e.isAtStart()) e = e.left();
    if (!e.isOverWhitespace())
      while (!e.left().isOverWhitespace() && !e.isAtStart()) e = e.left();
    return e;
  }
  modifyText(e, t = "") {
    let r = this.offset,
      s = e.offset,
      o = this.text.slice(0, r) + t + this.text.slice(s);
    return Zs.fromText(o, this.columns, r + t.normalize("NFC").length);
  }
  insert(e) {
    return this.modifyText(this, e);
  }
  del() {
    if (this.isAtEnd()) return this;
    return this.modifyText(this.right());
  }
  backspace() {
    if (this.isAtStart()) return this;
    return this.left().modifyText(this);
  }
  deleteToLineStart() {
    if (
      this.offset > 0 &&
      this.text[this.offset - 1] ===
        `
`
    )
      return {
        cursor: this.left().modifyText(this),
        killed: `
`,
      };
    let e = this.startOfLine();
    return this.killRange(e.offset, this.offset);
  }
  deleteToLineEnd() {
    if (
      this.text[this.offset] ===
      `
`
    )
      return {
        cursor: this.modifyText(this.right()),
        killed: `
`,
      };
    return this.killRange(this.offset, this.endOfLine().offset);
  }
  deleteToLogicalLineEnd() {
    if (
      this.text[this.offset] ===
      `
`
    )
      return this.modifyText(this.right());
    return this.killRange(this.offset, this.endOfLogicalLine().offset).cursor;
  }
  deleteWORDBefore() {
    if (this.isAtStart()) return { cursor: this, killed: "" };
    return this.killRange(this.prevWORD().offset, this.offset);
  }
  killRange(e, t) {
    let r = this.snapOutOfPlaceholder(e, "start"),
      s = this.snapOutOfPlaceholder(t, "end"),
      o = new Zs(this.measuredText, r),
      l = new Zs(this.measuredText, s);
    return { cursor: o.modifyText(l), killed: this.text.slice(r, s) };
  }
  graphemeAt(e) {
    if (e >= this.text.length) return "";
    let t = this.measuredText.nextOffset(e);
    return this.text.slice(e, t);
  }
  isOverWhitespace() {
    let e = this.text[this.offset] ?? "";
    return /\s/.test(e);
  }
  equals(e) {
    return this.offset === e.offset && this.measuredText === e.measuredText;
  }
  isAtStart() {
    return this.offset === 0;
  }
  isAtEnd() {
    return this.offset >= this.text.length;
  }
  startOfFirstLine() {
    return new Zs(this.measuredText, 0, 0);
  }
  startOfLastLine() {
    let e = this.text.lastIndexOf(`
`);
    if (e === -1) return this.startOfLine();
    return new Zs(this.measuredText, e + 1, 0);
  }
  goToLine(e) {
    let t = this.text.split(`
`),
      r = Math.min(Math.max(0, e - 1), t.length - 1),
      s = 0;
    for (let o = 0; o < r; o++) s += (t[o]?.length ?? 0) + 1;
    return new Zs(this.measuredText, s, 0);
  }
  endOfFile() {
    return new Zs(this.measuredText, this.text.length, 0);
  }
  get text() {
    return this.measuredText.text;
  }
  get columns() {
    return this.measuredText.columns + 1;
  }
  getPosition() {
    return this.measuredText.getPositionFromOffset(this.offset);
  }
  getOffset(e) {
    return this.measuredText.getOffsetFromPosition(e);
  }
  findCharacter(e, t, r = 1) {
    let s = this.text,
      o = t === "f" || t === "t",
      l = t === "t" || t === "T",
      m = 0;
    if (o) {
      let c = this.measuredText.nextOffset(this.offset);
      while (c < s.length) {
        if (this.graphemeAt(c) === e) {
          if ((m++, m === r))
            return l
              ? Math.max(this.offset, this.measuredText.prevOffset(c))
              : c;
        }
        c = this.measuredText.nextOffset(c);
      }
    } else {
      if (this.offset === 0) return null;
      let c = this.measuredText.prevOffset(this.offset);
      while (c >= 0) {
        if (this.graphemeAt(c) === e) {
          if ((m++, m === r))
            return l
              ? Math.min(this.offset, this.measuredText.nextOffset(c))
              : c;
        }
        if (c === 0) break;
        c = this.measuredText.prevOffset(c);
      }
    }
    return null;
  }
}
class Ue {
  text;
  startOffset;
  isPrecededByNewline;
  endsWithNewline;
  displayText;
  displayStartOffset;
  constructor(e, t, r, s = !1) {
    this.text = e;
    this.startOffset = t;
    this.isPrecededByNewline = r;
    this.endsWithNewline = s;
    ((this.displayText = r ? e : e.trimStart()),
      (this.displayStartOffset = t + (e.length - this.displayText.length)));
  }
  equals(e) {
    return this.text === e.text && this.startOffset === e.startOffset;
  }
  get length() {
    return this.text.length + (this.endsWithNewline ? 1 : 0);
  }
}
class $t {
  columns;
  _wrappedLines;
  text;
  navigationCache;
  graphemeBoundaries;
  constructor(e, t) {
    this.columns = t;
    ((this.text = e.normalize("NFC")), (this.navigationCache = new Map()));
  }
  get wrappedLines() {
    if (!this._wrappedLines) this._wrappedLines = this.measureWrappedText();
    return this._wrappedLines;
  }
  getGraphemeBoundaries() {
    if (!this.graphemeBoundaries) {
      this.graphemeBoundaries = [];
      for (let { index: e } of Xs().segment(this.text))
        this.graphemeBoundaries.push(e);
      this.graphemeBoundaries.push(this.text.length);
    }
    return this.graphemeBoundaries;
  }
  wordBoundariesCache;
  getWordBoundaries() {
    if (!this.wordBoundariesCache) {
      this.wordBoundariesCache = [];
      for (let e of rPn().segment(this.text))
        this.wordBoundariesCache.push({
          start: e.index,
          end: e.index + e.segment.length,
        });
    }
    return this.wordBoundariesCache;
  }
  readlineWordBoundariesCache;
  getReadlineWordBoundaries() {
    if (!this.readlineWordBoundariesCache) {
      let e = [],
        t = !1;
      for (let r of this.getWordBoundaries()) {
        let s = this.text.slice(r.start, r.end);
        for (let o of s.matchAll(gr)) {
          let l = this.snapToGraphemeBoundary(r.start + o.index),
            m = r.start + o.index + o[0].length,
            c = this.snapToGraphemeBoundary(m),
            x = c === m ? m : this.nextOffset(c),
            T = e.at(-1);
          if (T && (l < T.end || (l === T.end && t)))
            T.end = Math.max(T.end, x);
          else e.push({ start: l, end: x });
          t = x !== m;
        }
      }
      this.readlineWordBoundariesCache = e;
    }
    return this.readlineWordBoundariesCache;
  }
  binarySearchBoundary(e, t, r) {
    let s = 0,
      o = e.length - 1,
      l = r ? this.text.length : 0;
    while (s <= o) {
      let m = Math.floor((s + o) / 2),
        c = e[m];
      if (c === void 0) break;
      if (r)
        if (c > t) ((l = c), (o = m - 1));
        else s = m + 1;
      else if (c < t) ((l = c), (s = m + 1));
      else o = m - 1;
    }
    return l;
  }
  stringIndexToDisplayWidth(e, t) {
    if (t <= 0) return 0;
    if (t >= e.length) return te(e);
    return te(e.substring(0, t));
  }
  displayWidthToStringIndex(e, t) {
    if (t <= 0) return 0;
    if (!e) return 0;
    if (e === this.text) return this.offsetAtDisplayWidth(t);
    let r = 0,
      s = 0;
    for (let { segment: o, index: l } of Xs().segment(e)) {
      let m = te(o);
      if (r + m > t) break;
      ((r += m), (s = l + o.length));
    }
    return s;
  }
  offsetAtDisplayWidth(e) {
    if (e <= 0) return 0;
    let t = 0,
      r = this.getGraphemeBoundaries();
    for (let s = 0; s < r.length - 1; s++) {
      let o = r[s],
        l = r[s + 1];
      if (o === void 0 || l === void 0) continue;
      let m = this.text.substring(o, l),
        c = te(m);
      if (t + c > e) return o;
      t += c;
    }
    return this.text.length;
  }
  measureWrappedText() {
    let e = dp(this.text, this.columns, { hard: !0, trim: !1 }),
      t = [],
      r = 0,
      s = -1,
      o = e.split(`
`);
    for (let l = 0; l < o.length; l++) {
      let m = o[l],
        c = (x) =>
          l === 0 ||
          (x > 0 &&
            this.text[x - 1] ===
              `
`);
      if (m.length === 0)
        if (
          ((s = this.text.indexOf(
            `
`,
            s + 1,
          )),
          s !== -1)
        ) {
          let x = s,
            T = !0;
          t.push(new Ue(m, x, c(x), !0));
        } else {
          let x = this.text.length;
          t.push(new Ue(m, x, c(x), !1));
        }
      else {
        let x = this.text.indexOf(m, r);
        if (x === -1) throw Error("Failed to find wrapped line in text");
        r = x + m.length;
        let T = x + m.length,
          R =
            T < this.text.length &&
            this.text[T] ===
              `
`;
        if (R) s = T;
        t.push(new Ue(m, x, c(x), R));
      }
    }
    return t;
  }
  getWrappedText() {
    return this.wrappedLines.map((e) => e.displayText);
  }
  getWrappedLines() {
    return this.wrappedLines;
  }
  getLine(e) {
    let t = this.wrappedLines;
    return t[Math.max(0, Math.min(e, t.length - 1))];
  }
  getOffsetFromPosition(e) {
    let t = this.getLine(e.line);
    if (t.text.length === 0 && t.endsWithNewline) return t.startOffset;
    let r = t.displayStartOffset - t.startOffset,
      s = e.column + r,
      o = this.displayWidthToStringIndex(t.text, s),
      l = t.startOffset + o,
      m = t.startOffset + t.text.length,
      c = m,
      x = te(t.text);
    if (t.endsWithNewline && e.column > x) c = m + 1;
    return this.snapToGraphemeBoundary(Math.min(l, c));
  }
  getLineLength(e) {
    let t = this.getLine(e);
    return te(t.text);
  }
  getPositionFromOffset(e) {
    let t = this.wrappedLines;
    for (let o = 0; o < t.length; o++) {
      let l = t[o],
        m = t[o + 1];
      if (e >= l.startOffset && (!m || e < m.startOffset)) {
        let c = e - l.startOffset,
          x;
        if (l.isPrecededByNewline)
          x = this.stringIndexToDisplayWidth(l.text, c);
        else {
          let T = l.displayStartOffset - l.startOffset;
          if (c < T) x = 0;
          else {
            let R = l.displayText,
              L = c - T;
            x = this.stringIndexToDisplayWidth(R, L);
          }
        }
        return { line: o, column: Math.max(0, x) };
      }
    }
    let r = t.length - 1,
      s = this.wrappedLines[r];
    return { line: r, column: te(s.text) };
  }
  get lineCount() {
    return this.wrappedLines.length;
  }
  withCache(e, t) {
    let r = this.navigationCache.get(e);
    if (r !== void 0) return r;
    let s = t();
    return (this.navigationCache.set(e, s), s);
  }
  nextOffset(e) {
    return this.withCache(`next:${e}`, () => {
      let t = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(t, e, !0);
    });
  }
  prevOffset(e) {
    if (e <= 0) return 0;
    return this.withCache(`prev:${e}`, () => {
      let t = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(t, e, !1);
    });
  }
  snapToGraphemeBoundary(e) {
    if (e <= 0) return 0;
    if (e >= this.text.length) return this.text.length;
    let t = this.getGraphemeBoundaries(),
      r = 0,
      s = t.length - 1;
    while (r < s) {
      let o = (r + s + 1) >> 1;
      if (t[o] <= e) r = o;
      else s = o - 1;
    }
    return t[r];
  }
}
class St {
  prewarmed = !1;
  claim() {
    if (this.prewarmed) return !1;
    return ((this.prewarmed = !0), !0);
  }
  reset() {
    this.prewarmed = !1;
  }
}
var xr = new j(() => new St());
function Tr() {
  return xr.of(B().host);
}
function Et() {
  if (!Tr().claim()) return;
  try {
    let { prewarm: e } = import.meta.require("../../01-核心基础设施/共享小工具-未细化/prewarm.ea9vpfhv.js");
    e();
  } catch {}
}
function Ct(e) {
  let { isModifierPressed: t } = import.meta.require("../../01-核心基础设施/共享小工具-未细化/prewarm.ea9vpfhv.js");
  return t(e);
}
var $r = () => {};
function Sr(e, t) {
  if (e === "") return;
  if (t !== "") {
    H6("deleted");
    return;
  }
  let r =
    e.trim() === ""
      ? e.includes(`
`)
        ? "new line"
        : e.includes("\t")
          ? "tab"
          : "space"
      : e
          .replaceAll(
            `
`,
            " ",
          )
          .trim();
  H6(r);
}
var Er = new Set([
  "insert",
  "clear",
  "enter",
  "center",
  "undefined",
  "mouse",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "f10",
  "f11",
  "f12",
]);
function xen() {
  return a.terminal === "Apple_Terminal" && Ct("shift");
}
function At(e) {
  let t = new Map(e);
  return function (r) {
    return (t.get(r) ?? $r)(r);
  };
}
function m9e({
  value: e,
  onChange: t,
  onSubmit: r,
  onExit: s,
  onExitMessage: o,
  onEscapeMessage: l,
  historyOnClear: m = !0,
  onLeftArrowOnEmpty: c,
  leftArrowConfirmHint: x,
  onHistoryUp: T,
  onHistoryDown: R,
  onHistoryReset: L,
  mask: I = "",
  multiline: D = !1,
  disableBackslashReturn: J = !1,
  clearOnSubmit: K = !0,
  disableCtrlCClear: Y = !1,
  cursorChar: _,
  preserveTrailingWhitespace: M = !1,
  invert: z,
  columns: O,
  onImagePaste: de,
  disableCursorMovementForUpDownKeys: G = !1,
  disableEscapeDoublePress: A = !1,
  maxVisibleLines: Z,
  externalOffset: oe,
  onOffsetChange: q,
  inputFilter: v,
  getPastedContents: X,
  getInputMode: se,
  inlineGhostText: fe,
  dim: be,
  selectionAnchor: ae,
  selectionLinewise: Me = !1,
}) {
  let ue = gi(),
    le = T9e();
  if (a.terminal === "Apple_Terminal") Et();
  let he = oe,
    ce = q,
    w = Zs.fromText(e, O, he),
    Ve = !1,
    Ye;
  function we(u) {
    return v && Ye ? v(u, Ye) : u;
  }
  let { addNotification: Ie, removeNotification: ze } = Ir(),
    { storageV5: qe } = _e(),
    [ye] = d(AOt),
    We = "left-arrow-again-for-agents",
    _t = Y0(
      (u) => {
        o?.(u, "Ctrl-C");
      },
      () => s?.(),
      () => {
        if (!Y && e) (t(""), ce(0), L?.());
      },
    ),
    Mt = Y0(
      (u) => {
        if (!e) return;
        if (l) {
          l(u);
          return;
        }
        if (!u) return;
        Ie({
          key: "escape-again-to-clear",
          kind: "feedback",
          text: "Esc again to clear",
          priority: "immediate",
          timeoutMs: 1000,
        });
      },
      () => {
        if ((l?.(!1), ze("escape-again-to-clear"), e)) {
          if (m && I === "" && e.trim() !== "") {
            let u = X
                ? ea(X(), (xe) => xe.type === "text" && xe.unavailable === !0)
                : void 0,
              k = se?.(),
              N = k !== void 0 ? nue(e, k) : e,
              pe = u ? { display: N, pastedContents: u } : N;
            if (k !== void 0) X7(pe, qe, { submitMode: k });
            else X7(pe, qe);
          }
          (t(""), ce(0), L?.());
        }
      },
    ),
    It = Y0(
      (u) => {
        if (u && e !== "") return;
        o?.(u, "Ctrl-D");
      },
      () => {
        if (e !== "") return;
        s?.();
      },
    );
  function Ft() {
    if (w.text === "") return (It(), w);
    return w.del();
  }
  function Ae(u, k) {
    (le.dispatch(
      I === ""
        ? { type: "kill", text: u, direction: k }
        : { type: "interrupt" },
    ),
      Sr(u, I));
  }
  function Xe() {
    let { cursor: u, killed: k } = w.deleteToLineEnd();
    return (Ae(k, "append"), u);
  }
  function at() {
    let { cursor: u, killed: k } = w.deleteToLineStart();
    if ((Ae(k, "prepend"), I === "" && k.length >= 3))
      Ie({
        key: "kill-paste-hint",
        kind: "hint",
        text: "Ctrl+Y to paste deleted text",
        priority: "immediate",
        timeoutMs: 5000,
      });
    return u;
  }
  function Wt() {
    let { cursor: u, killed: k } = w.killWord();
    return (Ae(k, "append"), u);
  }
  function Nt() {
    let { cursor: u, killed: k } = w.backwardKillWord();
    return (Ae(k, "prepend"), u);
  }
  function Dt() {
    let { cursor: u, killed: k } = w.deleteWORDBefore();
    return (Ae(k, "prepend"), u);
  }
  function Bt() {
    let u = we(Pat(le.state));
    if (u.length > 0) {
      let k = w.offset,
        N = w.insert(u);
      return (le.dispatch({ type: "yank", start: k, length: u.length }), N);
    }
    return w;
  }
  function Ht() {
    let u = Oat(le.state);
    if (!u) return w;
    let { text: k, start: N, length: pe } = u,
      xe = we(k);
    le.dispatch({ type: "yankPop" });
    let Xt = w.text.slice(0, N),
      Jt = w.text.slice(N + pe),
      Zt = Xt + xe + Jt,
      Qt = N + xe.length;
    return (
      le.dispatch({ type: "updateYankLength", length: xe.length }),
      Zs.fromText(Zt, O, Qt)
    );
  }
  let Gt = At([
      ["a", () => w.startOfLogicalLine()],
      ["b", () => w.left()],
      ["c", () => (_t(), w)],
      ["d", Ft],
      ["e", () => w.endOfLogicalLine()],
      ["f", () => w.right()],
      ["h", () => w.backspace()],
      ["k", Xe],
      ["n", () => dt()],
      ["p", () => ct()],
      ["u", at],
      ["w", Dt],
      ["y", Bt],
    ]),
    jt = At([
      ["b", () => w.backwardWord()],
      ["f", () => w.forwardWord()],
      ["d", Wt],
      ["y", Ht],
    ]);
  function Kt({ meta: u, shift: k }) {
    if (D && !J && w.offset > 0 && w.text[w.offset - 1] === "\\")
      return (
        markBackslashReturnUsed(qe),
        w.backspace().insert(
          we(`
`),
        )
      );
    if (u || k)
      return w.insert(
        we(`
`),
      );
    if (xen())
      return w.insert(
        we(`
`),
      );
    if (r) (r(w.text), (Ve = !0));
    return w;
  }
  function Ne() {
    ye.editedEmptyAtMs = Date.now();
  }
  function lt() {
    if (ye.armedAtMs === 0) return;
    ((ye.armedAtMs = 0), ze(We));
  }
  function ct() {
    if (G) return (Ne(), T?.(), w);
    if (T && w.getPosition().line === 0) return (Ne(), T(), w);
    let u = w.up();
    if (!u.equals(w)) return u;
    if (D) {
      let k = w.upLogicalLine();
      if (!k.equals(w)) return k;
    }
    return w;
  }
  function dt() {
    if (G) return (Ne(), R?.(), w);
    if (R && w.getPosition().line >= w.measuredText.lineCount - 1)
      return (Ne(), R(), w);
    let u = w.down();
    if (!u.equals(w)) return u;
    if (D) {
      let k = w.downLogicalLine();
      if (!k.equals(w)) return k;
    }
    return w;
  }
  function Ut(u) {
    if (u.ctrl && (u.key === "k" || u.key === "u" || u.key === "w")) return !0;
    if (u.meta && !u.ctrl && u.key === "d") return !0;
    if (u.key === "backspace" && (u.meta || u.superKey || u.ctrl)) return !0;
    if (u.key === "delete" && (u.meta || u.superKey)) return !0;
    return !1;
  }
  function Vt(u) {
    return (u.ctrl || u.meta) && u.key === "y";
  }
  function Yt(u, k) {
    switch (u.name) {
      case "escape":
        if (A) return;
        return (Mt(), w);
      case "left":
        if (u.superKey) return w.startOfLine();
        if (u.ctrl || u.meta || u.fn) return w.backwardWord();
        if (c && !u.shift && w.text === "") {
          let N = Date.now(),
            pe = COt(ye, N, u.soloKeypress);
          switch ((vOt(ye, pe, N), ROt(pe, N), pe)) {
            case "fire":
              return (ze(We), c(), w);
            case "arm":
              return (
                Ie({
                  key: We,
                  kind: "feedback",
                  text: x ?? "Press \u2190 again",
                  priority: "immediate",
                  timeoutMs: oat,
                }),
                w
              );
            case "absorb":
              return w;
            case "attach-arm":
              return (
                Ie({
                  key: We,
                  kind: "feedback",
                  text: EOt,
                  priority: "immediate",
                  timeoutMs: oat,
                }),
                w
              );
            case "attach-absorb":
              return w;
            case "reject":
              return w.left();
          }
        }
        return w.left();
      case "right":
        if (u.superKey) return w.endOfLine();
        if (u.ctrl || u.meta || u.fn) return w.forwardWord();
        return w.right();
      case "up":
        if (u.shift || u.ctrl || u.meta) return;
        return ct();
      case "down":
        if (u.shift || u.ctrl || u.meta) return;
        return dt();
      case "backspace":
        if (u.superKey) return at();
        if (u.meta || u.ctrl) return Nt();
        return w.backspace();
      case "delete":
        if (u.superKey) return Xe();
        if (u.meta) return Xe();
        return w.del();
      case "home":
        if (u.ctrl) return;
        return w.startOfLine();
      case "end":
        if (u.ctrl) return;
        return w.endOfLine();
      case "pagedown":
        if (ue || u.ctrl) return;
        return w.endOfLine();
      case "pageup":
        if (ue || u.ctrl) return;
        return w.startOfLine();
      case "return":
        if (u.ctrl) return;
        return Kt(u);
      case "enter":
        return w.insert(
          we(`
`),
        );
      case "tab":
        return;
    }
    if (D && u.ctrl && !u.shift && !u.meta && u.name === "j")
      return w.insert(
        we(`
`),
      );
    if (u.ctrl) return Gt(u.key);
    if (u.meta) return jt(u.key);
    if (Er.has(u.name)) return;
    if (k.length === 0) return;
    if (w.isAtStart() && mOe(k)) return w.insert(k).left();
    return w.insert(k);
  }
  function zt(u) {
    Ye = u;
    let k = v ? v(u.key, u) : u.key;
    if (k === "" && u.key !== "") {
      u.preventDefault();
      return;
    }
    if (!Ut(u) && !Vt(u)) le.dispatch({ type: "interrupt" });
    if (!(
      u.name === "left" &&
      !u.ctrl &&
      !u.meta &&
      !u.fn &&
      !u.superKey &&
      !u.shift
    ))
      lt();
    let N = Yt(u, k);
    if (N === void 0) return;
    if ((u.preventDefault(), !w.equals(N))) {
      if (w.text !== N.text) {
        if (w.text !== "" && N.text === "") ye.editedEmptyAtMs = Date.now();
        t(N.text);
      }
      (ce(N.offset), (w = N));
    }
    if (Ve) {
      if (((Ve = !1), K)) w = Zs.fromText("", O, 0);
    }
  }
  let qt =
      fe && be && fe.insertPosition === he
        ? { text: fe.text, dim: be }
        : void 0,
    ft = w.getPosition();
  return {
    handleKeyDown: zt,
    renderedValue: w.render(_, I, z, qt, Z, ae ?? void 0, Me, M),
    offset: he,
    setOffset: ce,
    cursorLine: ft.line - w.getViewportStartLine(Z),
    cursorColumn: ft.column,
    renderedRowStartOffsets: w.getRenderedRowStartOffsets(Z),
    noteKeystrokeEmptied: () => {
      ye.editedEmptyAtMs = Date.now();
    },
    disarmLeftArrowConfirm: lt,
  };
}
var it = ["\xB7", "\u2722", "\u2733", "\u2736", "\u273B", "\u273B"],
  st = ["\xB7", "\u2722", "\u2733", "\u2736", "\u273B", "\u273D"],
  kt = ["\xB7", "\u2722", "*", "\u2736", "\u273B", "\u273D"],
  Cr = [...it, ...it.toReversed()],
  Ar = [...st, ...st.toReversed()],
  _i = [...kt, ...kt.toReversed()];
function iat() {
  if (a.TERM === "xterm-ghostty") return it;
  return st;
}
function _le() {
  if (a.TERM === "xterm-ghostty") return Cr;
  return Ar;
}
var Ot = 8;
function by(e) {
  return Math.round(e * Ot) / Ot;
}
function aat(e) {
  return by(e / 360) * 360;
}
function lat(e, t) {
  return (1 - Math.cos((2 * Math.PI * e) / t)) / 2;
}
function PS(e, t, r) {
  return {
    r: Math.round(e.r + (t.r - e.r) * r),
    g: Math.round(e.g + (t.g - e.g) * r),
    b: Math.round(e.b + (t.b - e.b) * r),
  };
}
function wy(e) {
  return `rgb(${e.r},${e.g},${e.b})`;
}
function cat(e) {
  let t = ((e % 360) + 360) % 360,
    r = 0.7,
    s = 0.6,
    o = (1 - Math.abs(0.19999999999999996)) * 0.7,
    l = o * (1 - Math.abs(((t / 60) % 2) - 1)),
    m = 0.6 - o / 2,
    c = 0,
    x = 0,
    T = 0;
  if (t < 60) ((c = o), (x = l));
  else if (t < 120) ((c = l), (x = o));
  else if (t < 180) ((x = o), (T = l));
  else if (t < 240) ((x = l), (T = o));
  else if (t < 300) ((c = l), (T = o));
  else ((c = o), (T = l));
  return {
    r: Math.round((c + m) * 255),
    g: Math.round((x + m) * 255),
    b: Math.round((T + m) * 255),
  };
}
function Wb(e) {
  let t = e.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
  return t
    ? { r: parseInt(t[1], 10), g: parseInt(t[2], 10), b: parseInt(t[3], 10) }
    : null;
}
var ot = " \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588",
  kr = 0.7,
  Or = 1.8,
  Lr = 0.15;
function T0e() {
  let e = U((M) => cu(M.settings.prefersReducedMotion)),
    t = ftn(),
    r = Qd((M) => M.voiceState) === "recording",
    s = Qd((M) => M.voiceAudioLevels),
    o = r && !e,
    [l, m] = bs(o ? 50 : null);
  if (!o) return [l, null];
  let c = s.at(-1) ?? 0,
    x = Math.min(c * Or, 1),
    T = t.next(x, kr),
    R = Math.max(1, Math.min(Math.round(T * (ot.length - 1)), ot.length - 1)),
    L = c < Lr,
    I = ((m / 1000) * 90) % 360,
    D = Zd() ? aat(I) : I,
    { r: J, g: K, b: Y } = L ? { r: 128, g: 128, b: 128 } : cat(D),
    _ = `#${((J << 16) | (K << 8) | Y).toString(16).padStart(6, "0")}`;
  return [l, { char: ot[R], hex: _ }];
}
F();
import { basename } from "path";
var _r = 50;
function Pt() {
  return Ka(getMainLoopModel());
}
function Fye({
  onPaste: e,
  handleKeyDown: t,
  onImagePaste: r,
  onAudioPaste: s,
}) {
  let o = vt(),
    [l, m] = d(!1),
    c = C(!0),
    x = C(!1),
    T = C(!1),
    [R, L] = d(0),
    I = V(() => P() === "macos", []),
    D = V(() => P() === "wsl", []);
  E(
    () => () => {
      c.current = !1;
    },
    [],
  );
  let J = vr(() => {
    t(
      new R9e({
        kind: "key",
        name: "return",
        fn: !1,
        ctrl: !1,
        meta: !1,
        shift: !1,
        option: !1,
        super: !1,
        sequence: "\r",
        raw: "\r",
        isPasted: !1,
        code: void 0,
        col: void 0,
        row: void 0,
      }),
    );
  });
  E(() => {
    if (R === 0) return;
    return o.setTimeout(() => {
      if (((x.current = !1), T.current)) ((T.current = !1), J());
    }, 0);
  }, [R, o]);
  let K = re(() => {
      if (!r || !c.current) return;
      Z3(Pt())
        .then((A) => {
          if (A && c.current)
            r(A.base64, { mediaType: A.mediaType, dimensions: A.dimensions });
        })
        .catch((A) => {
          if (c.current)
            (logFeatureBad("input_image_paste", "clipboard_read_failed"), logError(A));
        })
        .finally(() => {
          M();
        });
    }, [r]),
    Y = nk(K, _r);
  function _(A) {
    if (e) {
      e(A);
      return;
    }
    t(
      new R9e({
        kind: "key",
        name: void 0,
        fn: !1,
        ctrl: !1,
        meta: !1,
        shift: !1,
        option: !1,
        super: !1,
        sequence: A,
        raw: A,
        isPasted: !0,
        code: void 0,
        col: void 0,
        row: void 0,
      }),
    );
  }
  function M() {
    if (!c.current) return;
    ((x.current = !1), (T.current = !1), m(!1));
  }
  function z() {
    (m(!1), L((A) => A + 1));
  }
  function O(A, Z = A.length === 0, oe = A.endsWith("[I") || A.endsWith("[O")) {
    x.current = !0;
    let q = oe ? A.replace(/\[[IO]$/, "") : A;
    if (Z && (I || D) && r) {
      Y();
      return;
    }
    let v = q
        .split(/ (?=\/|[A-Za-z]:\\)/)
        .flatMap((ae) =>
          ae.split(`
`),
        )
        .filter((ae) => ae.trim()),
      X,
      se = [],
      fe = [],
      be = [];
    for (let ae of v) {
      if (r && pJn(ae)) {
        se.push(ae);
        continue;
      }
      be.push(ae);
    }
    if (se.length > 0 || fe.length > 0) {
      let ae = /\/TemporaryItems\/.*screencaptureui.*\/Screenshot/i.test(q),
        Me = Pt();
      Promise.all(se.map((ue) => fJn(ue, Me)))
        .then((ue) => {
          if (!c.current) return;
          let le = ue.filter((he) => he !== null);
          if (le.length > 0 || fe.length > 0) {
            for (let [he, ce] of le.entries()) {
              let w = basename(ce.path);
              r?.(ce.base64, {
                mediaType: ce.mediaType,
                filename: w,
                dimensions: ce.dimensions,
                sourcePath: ce.path,
                continuesGesture: he > 0,
              });
            }
            if (le.length === 0 && se.length > 0)
              (logFeatureSad("input_image_drag", "read_failed"), be.push(...se));
            if (be.length > 0)
              _(
                be.join(`
`),
              );
            M();
          } else if (ae && I) Y();
          else (logFeatureSad("input_image_drag", "read_failed"), _(q), M());
        })
        .catch((ue) => {
          if (!c.current) return;
          (logFeatureBad("input_image_drag", "read_threw"),
            n(
              `Image paste read failed: ${ue instanceof Error ? ue.message : String(ue)}`,
              { level: "error" },
            ),
            _(q),
            M());
        });
      return;
    }
    (_(q), z());
  }
  function de(A) {
    (A.preventDefault(), m(!0), O(A.text, A.rawEmpty, A.rawEndedWithFocusTail));
  }
  function G(A) {
    if (x.current && A.key === "return") {
      (A.preventDefault(), (T.current = !0));
      return;
    }
    if (
      (e || r) &&
      !A.ctrl &&
      !A.meta &&
      A.key.length > lK &&
      !A.defaultPrevented
    ) {
      (A.preventDefault(), m(!0), O(A.key));
      return;
    }
    t(A);
  }
  return { handleKeyDown: G, handlePaste: de, isPasting: l };
}
export {
  dd,
  _p,
  shouldOfferTerminalSetup,
  yOt,
  Cen,
  getNativeCSIuTerminalDisplayName,
  setupTerminal,
  enableITerm2ClipboardAccess,
  isShiftEnterKeyBindingInstalled,
  supportsShiftEnter,
  hasUsedBackslashReturn,
  markBackslashReturnUsed,
  call,
  readVSCodeScrollSensitivity,
  vscodeUserDirectories,
  installVSCodeGpuAccelerationOff,
  hle,
  TOt,
  Nye,
  Zs,
  oat,
  sat,
  EOt,
  AOt,
  COt,
  vOt,
  ROt,
  xen,
  m9e,
  iat,
  _le,
  by,
  aat,
  lat,
  PS,
  wy,
  cat,
  Wb,
  T0e,
  Fye,
};
