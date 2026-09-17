// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 74 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { ja, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { ee } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { wS } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { execFileNoThrow } from "../../02-功能模块/Git-Worktree/git-exec-hardening.js";
import { URL_HANDLER_BUNDLE_ID } from "../../02-功能模块/深链接-URL协议/深链接-URL协议.wjw0bmt6.js";
import { b1n, Wot, Got } from "../../02-功能模块/输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { CUn } from "../../02-功能模块/插件系统/chunk-q8w2zntw.js";
import { realpath } from "fs/promises";
import { homedir } from "os";
import { spawn } from "child_process";
import { basename } from "path";
var u = [
    { name: "iTerm2", bundleId: "com.googlecode.iterm2", app: "iTerm" },
    { name: "Ghostty", bundleId: "com.mitchellh.ghostty", app: "Ghostty" },
    { name: "Kitty", bundleId: "net.kovidgoyal.kitty", app: "kitty" },
    { name: "Alacritty", bundleId: "org.alacritty", app: "Alacritty" },
    { name: "WezTerm", bundleId: "com.github.wez.wezterm", app: "WezTerm" },
    {
      name: "Terminal.app",
      bundleId: "com.apple.Terminal",
      app: "Terminal",
      termProgramAliases: ["apple_terminal"],
    },
  ],
  I = [
    "ghostty",
    "kitty",
    "alacritty",
    "wezterm",
    "gnome-terminal",
    "konsole",
    "xfce4-terminal",
    "mate-terminal",
    "tilix",
    "xterm",
  ];
async function F() {
  let r = ee().deepLinkTerminal;
  if (r) {
    let e = u.find((s) => s.app === r);
    if (e) return { name: e.name, command: e.app };
  }
  let t = a.TERM_PROGRAM;
  if (t) {
    let e = t.replace(/\.app$/i, "").toLowerCase(),
      s = u.find(
        (i) =>
          i.app.toLowerCase() === e ||
          i.name.toLowerCase() === e ||
          i.termProgramAliases?.includes(e),
      );
    if (s) return { name: s.name, command: s.app };
  }
  for (let e of u) {
    let { code: s, stdout: i } = await execFileNoThrow(
      "mdfind",
      [`kMDItemCFBundleIdentifier == "${e.bundleId}"`],
      { timeout: 5000, useCwd: !1 },
    );
    if (s === 0 && i.trim().length > 0) return { name: e.name, command: e.app };
  }
  for (let e of u) {
    let { code: s } = await execFileNoThrow("ls", [`/Applications/${e.app}.app`], {
      timeout: 1000,
      useCwd: !1,
    });
    if (s === 0) return { name: e.name, command: e.app };
  }
  return { name: "Terminal.app", command: "Terminal" };
}
async function A() {
  let r = a.TERMINAL;
  if (r) {
    let e = await ja(r);
    if (e) return { name: basename(r), command: e };
  }
  let t = await ja("x-terminal-emulator");
  if (t) return { name: "x-terminal-emulator", command: t };
  for (let e of I) {
    let s = await ja(e);
    if (s) return { name: e, command: s };
  }
  return null;
}
async function S() {
  let r = await ja("wt.exe");
  if (r) return { name: "Windows Terminal", command: r };
  let t = await ja("pwsh.exe");
  if (t) return { name: "PowerShell", command: t };
  let e = await ja("powershell.exe");
  if (e) return { name: "PowerShell", command: e };
  return {
    name: "Command Prompt",
    command: a.ComSpec || `${a.SystemRoot || "C:\\Windows"}\\System32\\cmd.exe`,
  };
}
async function M() {
  switch ("darwin") {
    case "darwin":
      return F();
    case "linux":
      return A();
    case "win32":
      return S();
    default:
      return null;
  }
}
async function h(r, t) {
  let e = await M();
  if (!e) return (n("No terminal emulator detected", { level: "error" }), !1);
  n(`Launching in terminal: ${e.name} (${e.command})`);
  let s = ["--deep-link-origin"];
  if (t.repo) {
    if ((s.push(`--deep-link-repo=${t.repo}`), t.lastFetchMs !== void 0))
      s.push(`--deep-link-last-fetch=${t.lastFetchMs}`);
  }
  if (t.query) s.push(`--prefill=${t.query}`);
  switch ("darwin") {
    case "darwin":
      return k(e, r, s, t);
    case "linux":
      return _(e, r, s, t);
    case "win32":
      return v(e, r, t);
    default:
      return !1;
  }
}
async function k(r, t, e, s) {
  let { cwd: i } = s;
  switch (r.command) {
    case "iTerm": {
      let o = d(t, s),
        l = `tell application "iTerm"
  if running then
    create window with default profile
  else
    activate
  end if
  tell current session of current window
    write text ${w(o)}
  end tell
end tell`,
        { code: m } = await execFileNoThrow("osascript", ["-e", l], { useCwd: !1 });
      if (m === 0) return !0;
      break;
    }
    case "Terminal": {
      let o = d(t, s),
        l = `tell application "Terminal"
  do script ${w(o)}
  activate
end tell`,
        { code: m } = await execFileNoThrow("osascript", ["-e", l], { useCwd: !1 });
      return m === 0;
    }
    case "Ghostty": {
      let o = ["-na", r.command, "--args", "--window-save-state=never"];
      if (i) o.push(`--working-directory=${i}`);
      o.push("-e", t, ...p(s));
      let { code: l } = await execFileNoThrow("open", o, { useCwd: !1 });
      if (l === 0) return !0;
      break;
    }
    case "Alacritty": {
      let o = ["-na", r.command, "--args"];
      if (i) o.push("--working-directory", i);
      o.push("-e", t, ...e);
      let { code: l } = await execFileNoThrow("open", o, { useCwd: !1 });
      if (l === 0) return !0;
      break;
    }
    case "kitty": {
      let o = ["-na", r.command, "--args"];
      if (i) o.push("--directory", i);
      o.push(t, ...e);
      let { code: l } = await execFileNoThrow("open", o, { useCwd: !1 });
      if (l === 0) return !0;
      break;
    }
    case "WezTerm": {
      let o = ["-na", r.command, "--args", "start"];
      if (i) o.push("--cwd", i);
      o.push("--", t, ...e);
      let { code: l } = await execFileNoThrow("open", o, { useCwd: !1 });
      if (l === 0) return !0;
      break;
    }
  }
  return (
    n(`Failed to launch ${r.name}, falling back to Terminal.app`),
    k({ name: "Terminal.app", command: "Terminal" }, t, e, s)
  );
}
async function _(r, t, e, s) {
  let { cwd: i } = s,
    o,
    l;
  switch (r.name) {
    case "gnome-terminal":
      ((o = i ? [`--working-directory=${i}`, "--"] : ["--"]), o.push(t, ...e));
      break;
    case "konsole":
      ((o = i ? ["--workdir", i, "-e"] : ["-e"]), o.push(t, ...e));
      break;
    case "kitty":
      ((o = i ? ["--directory", i] : []), o.push(t, ...e));
      break;
    case "wezterm":
      ((o = i ? ["start", "--cwd", i, "--"] : ["start", "--"]),
        o.push(t, ...e));
      break;
    case "alacritty":
      ((o = i ? ["--working-directory", i, "-e"] : ["-e"]), o.push(t, ...e));
      break;
    case "ghostty":
      ((o = i ? [`--working-directory=${i}`, "-e"] : ["-e"]),
        o.push(t, ...p(s)));
      break;
    case "xfce4-terminal":
    case "mate-terminal":
      ((o = i ? [`--working-directory=${i}`, "-x"] : ["-x"]), o.push(t, ...e));
      break;
    case "tilix":
      ((o = i ? [`--working-directory=${i}`, "-e"] : ["-e"]),
        o.push(t, ...p(s)));
      break;
    default:
      ((o = ["-e", t, ...p(s)]), (l = i));
      break;
  }
  return T(r.command, o, { cwd: l });
}
async function v(r, t, e) {
  let s = [],
    i = p(e),
    o = e.cwd;
  switch (r.name) {
    case "Windows Terminal": {
      let l = (m) => m.replaceAll(";", "\\;");
      if (o) s.push("-d", l(o));
      s.push("--", l(t), ...i);
      break;
    }
    case "PowerShell": {
      s.push("-NoExit", "-Command", `& ${L(t)} ${i.join(" ")}`);
      break;
    }
    default: {
      let l = `${g(t)} ${i.map(g).join(" ")}`;
      s.push("/d", "/v:off", "/s", "/k", `"${l}"`);
      break;
    }
  }
  return T(r.command, s, {
    windowsVerbatimArguments: r.name === "Command Prompt",
    cwd: e.cwd,
  });
}
async function T(r, t, e = {}) {
  let s = (i) =>
    new Promise((o) => {
      let l = (c) => {
          (n(`Failed to spawn ${r}: ${c.message}`, { level: "error" }), o(!1));
        },
        m;
      try {
        m = spawn(r, t, {
          detached: !0,
          stdio: "ignore",
          windowsHide: !1,
          cwd: i,
          windowsVerbatimArguments: e.windowsVerbatimArguments,
        });
      } catch (c) {
        return l(c);
      }
      (wS(m.pid),
        m.once("error", l),
        m.once("spawn", () => {
          (m.unref(), o(!0));
        }));
    });
  if (await s(e.cwd)) return !0;
  if (e.cwd) return s(void 0);
  return !1;
}
var E = /^[A-Za-z0-9 /._=-]+$/;
function p(r) {
  let t = (s) => Buffer.from(s, "utf8").toString("base64url"),
    e = ["--deep-link-origin"];
  if (r.repo) e.push(`--deep-link-repo=${r.repo}`);
  if (r.lastFetchMs !== void 0)
    e.push(`--deep-link-last-fetch=${r.lastFetchMs}`);
  if (r.cwd) e.push(`--deep-link-cwd-b64=${t(r.cwd)}`);
  if (r.query) e.push(`--prefill-b64=${t(r.query)}`);
  return e;
}
function d(r, t) {
  let e = p(t).join(" ");
  if (!E.test(e))
    throw Error(`Internal error: shell-safe args contain metacharacters: ${e}`);
  if (/^[A-Za-z0-9/._-]+$/.test(r)) return `${r} ${e}`;
  if (/['\\!$\n]/.test(r))
    throw Error(
      `Deep-link launch unsupported: the claude binary path "${r}" contains a single quote, backslash, exclamation mark, dollar sign, or newline, which cannot be portably quoted for every login shell. Reinstall claude to a path without these characters to use deep links with iTerm2 or Terminal.app.`,
    );
  return `'${r}' ${e}`;
}
function w(r) {
  return `"${r
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"')
    .replaceAll(
      `
`,
      "\\n",
    )
    .replaceAll("\t", "\\t")}"`;
}
function L(r) {
  if (/[\u2018\u2019\u201A\u201B]/.test(r))
    throw Error(
      "Cannot safely quote a Unicode single-quote variant (U+2018-U+201B) in a PowerShell path; install Windows Terminal (wt.exe).",
    );
  return `'${r.replaceAll('"', "").replaceAll("'", "''")}'`;
}
function g(r) {
  return `"${r
    .replace(/[\n\t]/g, " ")
    .replace(/["%]/g, "")
    .replace(/(\\+)$/, "$1$1")}"`;
}
async function handleDeepLinkUri(r) {
  n(`Handling deep link URI: ${r}`);
  let t;
  try {
    t = CUn(r);
  } catch (m) {
    let c = m instanceof Error ? m.message : String(m);
    return (
      console.error(`Deep link error: ${c}`),
      logFeatureBad("deep_link_handle", "parse_failed"),
      1
    );
  }
  n(`Parsed deep link action: ${b(t)}`);
  let e = await realpath(process.execPath).catch(() => process.execPath),
    { cwd: s, resolvedRepo: i } = await z(t),
    o = i ? await b1n(s) : void 0,
    l;
  try {
    l = await h(e, {
      query: t.query,
      cwd: s,
      repo: i,
      lastFetchMs: o?.getTime(),
    });
  } catch (m) {
    let c = m instanceof Error ? m.message : String(m);
    return (
      console.error(`Deep link error: ${c}`),
      logFeatureBad("deep_link_handle", "launch_error"),
      1
    );
  }
  if (!l)
    return (
      console.error(
        "Failed to open a terminal. Make sure a supported terminal emulator is installed.",
      ),
      logFeatureBad("deep_link_handle", "no_terminal"),
      1
    );
  return (logFeatureOk("deep_link_handle"), 0);
}
async function handleUrlSchemeLaunch() {
  if (a.__CFBundleIdentifier !== URL_HANDLER_BUNDLE_ID) return null;
  try {
    let { waitForUrlEvent: r } = await import("../../01-核心基础设施/共享小工具-未细化/waitForUrlEvent.2gg81sjj.js"),
      t = r(5000);
    if (!t) return null;
    return await handleDeepLinkUri(t);
  } catch {
    return null;
  }
}
async function z(r) {
  if (r.cwd) return { cwd: r.cwd };
  if (r.repo) {
    let t = Wot(r.repo),
      e = await Got(t);
    if (e[0])
      return (
        n(`Resolved repo ${r.repo} \u2192 ${e[0]}`),
        { cwd: e[0], resolvedRepo: r.repo }
      );
    n(`No local clone found for repo ${r.repo}, falling back to home`);
  }
  return { cwd: homedir() };
}
export { handleDeepLinkUri, handleUrlSchemeLaunch };
