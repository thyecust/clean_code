// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { withDeadline } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { A, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { resolveExecutablePathAsync, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { execFileNoThrow, execFileNoThrowWithCwd } from "../工作树-Git/git-exec-hardening.js";
import { CLAUDE_IN_CHROME_MCP_SERVER_NAME } from "./claude-in-chrome-mcp-constants.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { readdir, stat as R } from "fs/promises";
import { homedir, platform, userInfo } from "os";
import { join as l } from "path";
import { spawn } from "child_process";
import { lstat } from "fs/promises";
import { dirname, win32 as _ } from "path";
var I = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths",
  v = 1e4,
  L = 5000;
function K() {
  if (!a.LOCALAPPDATA) return;
  let e = a.LOCALAPPDATA.replace(/[\\/]+$/, "");
  return _.normalize(`${e}\\Microsoft\\WindowsApps\\`).toLowerCase();
}
function h() {
  return a.SYSTEMROOT || a.SystemRoot || "C:\\Windows";
}
function F(e) {
  for (let s of e.split(/\r?\n/)) {
    let r = s.match(/^\s+.+?\s+REG_(?:EXPAND_)?SZ\s+(.+)$/i);
    if (r && r[1]) {
      let o = r[1].trim();
      if (o.length >= 2 && o.startsWith('"') && o.endsWith('"'))
        o = o.slice(1, -1);
      return o;
    }
  }
  return null;
}
function W(e, s = process.env) {
  let r = new Map();
  for (let [o, t] of Object.entries(s))
    if (t !== void 0) r.set(o.toLowerCase(), t);
  return e.replace(/%([^%]+)%/g, (o, t) => r.get(t.toLowerCase()) ?? o);
}
async function x(e, s = L) {
  let r = h(),
    o = `${r}\\System32\\reg.exe`;
  for (let t of ["HKCU", "HKLM"]) {
    let c = await execFileNoThrowWithCwd(o, ["query", `${t}\\${I}\\${e}`, "/ve"], {
      timeout: v,
      cwd: r,
    });
    if (c.code !== 0) {
      if (c.exitCode === void 0)
        logForDebugging(
          `[Claude in Chrome] ${t} App Paths query for ${e} did not run to completion: ${c.error ?? `killed at the ${v}ms bound, or reg.exe failed to spawn`}`,
        );
      continue;
    }
    let i = F(c.stdout);
    if (!i) {
      logForDebugging(
        `[Claude in Chrome] ${t} App Paths value for ${e} had no parseable string default; skipping`,
      );
      continue;
    }
    let p = W(i);
    if (!/^(?:[a-zA-Z]:[\\/]|\\\\)/.test(p)) {
      logForDebugging(
        `[Claude in Chrome] Skipping ${t} App Paths candidate for ${e}: not a fully qualified path`,
      );
      continue;
    }
    try {
      let m = lstat(p);
      m.catch(() => {});
      let d = await withDeadline(m, s);
      if (d === void 0) {
        logForDebugging(
          `[Claude in Chrome] Skipping ${t} App Paths candidate for ${e}: existence check exceeded ${s}ms`,
        );
        continue;
      }
      if (!d.isDirectory())
        return (logForDebugging(`[Claude in Chrome] Resolved ${e} via ${t} App Paths`), p);
      logForDebugging(
        `[Claude in Chrome] Skipping ${t} App Paths candidate for ${e}: resolves to a directory`,
      );
    } catch (m) {
      let d = A(m),
        b = K();
      if (
        b !== void 0 &&
        _.normalize(p).toLowerCase().startsWith(b) &&
        d !== "ENOENT" &&
        d !== "ENOTDIR"
      )
        return (
          logForDebugging(
            `[Claude in Chrome] Resolved ${e} via ${t} App Paths (stat-odd: ${d ?? String(m)})`,
          ),
          p
        );
      logForDebugging(
        `[Claude in Chrome] Skipping ${t} App Paths candidate for ${e}: ${d ?? String(m)}`,
      );
    }
  }
  return null;
}
function M(e, s) {
  return new Promise((r) => {
    let o;
    try {
      o = spawn(e, s, {
        cwd: dirname(e),
        detached: !0,
        stdio: "ignore",
        windowsHide: !1,
      });
    } catch (t) {
      (logForDebugging(
        `[Claude in Chrome] Detached launch of ${e} failed: ${A(t) ?? String(t)}`,
        { level: "error" },
      ),
        r(!1));
      return;
    }
    (o.once("spawn", () => r(!0)),
      o.once("error", (t) => {
        (logForDebugging(
          `[Claude in Chrome] Detached launch of ${e} failed: ${A(t) ?? t.message}`,
          { level: "error" },
        ),
          r(!1));
      }),
      o.unref());
  });
}
class E {
  bridgeBinding = void 0;
  resolvedHostByToolUseId = new Map();
  shouldAutoEnable = void 0;
  wiredThisSession = !1;
  installUpsellResolution = void 0;
  installUpsellBypassSuppressionCounted = !1;
  trackedTabIds = new Set();
  tabGroupCleanupRegistered = !1;
  unsubscribeSessionSwitch = void 0;
  unregisterExitCleanup = void 0;
  closesInFlight = new Map();
  lastExecutedTabUrlByScope = new Map();
  resolvedUrlByToolUseId = new Map();
  reset() {
    ((this.bridgeBinding = void 0),
      (this.resolvedHostByToolUseId = new Map()),
      (this.shouldAutoEnable = void 0),
      (this.wiredThisSession = !1),
      (this.installUpsellResolution = void 0),
      (this.installUpsellBypassSuppressionCounted = !1),
      (this.trackedTabIds = new Set()),
      (this.tabGroupCleanupRegistered = !1),
      this.unsubscribeSessionSwitch?.(),
      (this.unsubscribeSessionSwitch = void 0),
      this.unregisterExitCleanup?.(),
      (this.unregisterExitCleanup = void 0),
      (this.closesInFlight = new Map()),
      (this.lastExecutedTabUrlByScope = new Map()),
      (this.resolvedUrlByToolUseId = new Map()));
  }
}
var G = new j(() => new E());
function getClaudeInChromeState() {
  return G.of(B().host);
}
var CFC_TOOL_PREFIX = `mcp__${CLAUDE_IN_CHROME_MCP_SERVER_NAME}__`,
  CLAUDE_IN_CHROME_DOMAIN_RULE_TOOL = "ClaudeInChromeDomain",
  g = {
    chrome: {
      name: "Google Chrome",
      macos: {
        appName: "Google Chrome",
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "Google",
          "Chrome",
          "NativeMessagingHosts",
        ],
      },
      linux: {
        binaries: ["google-chrome", "google-chrome-stable"],
        nativeMessagingPath: [
          ".config",
          "google-chrome",
          "NativeMessagingHosts",
        ],
      },
      windows: {
        dataPath: ["Google", "Chrome", "User Data"],
        registryKey: "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts",
        appPathsExe: "chrome.exe",
      },
    },
    brave: {
      name: "Brave",
      macos: {
        appName: "Brave Browser",
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "BraveSoftware",
          "Brave-Browser",
          "NativeMessagingHosts",
        ],
      },
      linux: {
        binaries: ["brave-browser", "brave"],
        nativeMessagingPath: [
          ".config",
          "BraveSoftware",
          "Brave-Browser",
          "NativeMessagingHosts",
        ],
      },
      windows: {
        dataPath: ["BraveSoftware", "Brave-Browser", "User Data"],
        registryKey:
          "HKCU\\Software\\BraveSoftware\\Brave-Browser\\NativeMessagingHosts",
        appPathsExe: "brave.exe",
      },
    },
    arc: {
      name: "Arc",
      macos: {
        appName: "Arc",
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "Arc",
          "User Data",
          "NativeMessagingHosts",
        ],
      },
      linux: { binaries: [], nativeMessagingPath: [] },
      windows: {
        dataPath: ["Arc", "User Data"],
        registryKey: "HKCU\\Software\\ArcBrowser\\Arc\\NativeMessagingHosts",
      },
    },
    chromium: {
      name: "Chromium",
      macos: {
        appName: "Chromium",
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "Chromium",
          "NativeMessagingHosts",
        ],
      },
      linux: {
        binaries: ["chromium", "chromium-browser"],
        nativeMessagingPath: [".config", "chromium", "NativeMessagingHosts"],
      },
      windows: {
        dataPath: ["Chromium", "User Data"],
        registryKey: "HKCU\\Software\\Chromium\\NativeMessagingHosts",
      },
    },
    edge: {
      name: "Microsoft Edge",
      macos: {
        appName: "Microsoft Edge",
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "Microsoft Edge",
          "NativeMessagingHosts",
        ],
      },
      linux: {
        binaries: ["microsoft-edge", "microsoft-edge-stable"],
        nativeMessagingPath: [
          ".config",
          "microsoft-edge",
          "NativeMessagingHosts",
        ],
      },
      windows: {
        dataPath: ["Microsoft", "Edge", "User Data"],
        registryKey: "HKCU\\Software\\Microsoft\\Edge\\NativeMessagingHosts",
        appPathsExe: "msedge.exe",
      },
    },
    vivaldi: {
      name: "Vivaldi",
      macos: {
        appName: "Vivaldi",
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "Vivaldi",
          "NativeMessagingHosts",
        ],
      },
      linux: {
        binaries: ["vivaldi", "vivaldi-stable"],
        nativeMessagingPath: [".config", "vivaldi", "NativeMessagingHosts"],
      },
      windows: {
        dataPath: ["Vivaldi", "User Data"],
        registryKey: "HKCU\\Software\\Vivaldi\\NativeMessagingHosts",
        appPathsExe: "vivaldi.exe",
      },
    },
    opera: {
      name: "Opera",
      macos: {
        appName: "Opera",
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "com.operasoftware.Opera",
          "NativeMessagingHosts",
        ],
      },
      linux: {
        binaries: ["opera"],
        nativeMessagingPath: [".config", "opera", "NativeMessagingHosts"],
      },
      windows: {
        dataPath: ["Opera Software", "Opera Stable"],
        registryKey:
          "HKCU\\Software\\Opera Software\\Opera Stable\\NativeMessagingHosts",
        useRoaming: !0,
        appPathsExe: "opera.exe",
      },
    },
  },
  C = ["chrome", "brave", "arc", "edge", "chromium", "vivaldi", "opera"];
function getAllNativeMessagingHostsDirs() {
  let e = getCurrentPlatform(),
    s = homedir(),
    r = [];
  for (let o of C) {
    let t = g[o];
    switch (e) {
      case "macos":
        if (t.macos.nativeMessagingPath.length > 0)
          r.push({ browser: o, path: l(s, ...t.macos.nativeMessagingPath) });
        break;
      case "linux":
      case "wsl":
        if (t.linux.nativeMessagingPath.length > 0)
          r.push({ browser: o, path: l(s, ...t.linux.nativeMessagingPath) });
        break;
      case "windows":
        break;
    }
  }
  return r;
}
function getAllWindowsRegistryKeys() {
  let e = [];
  for (let s of C) {
    let r = g[s];
    if (r.windows.registryKey)
      e.push({ browser: s, key: r.windows.registryKey });
  }
  return e;
}
async function detectAvailableBrowser() {
  let e = getCurrentPlatform();
  for (let s of C) {
    let r = g[s];
    switch (e) {
      case "macos": {
        let o = `/Applications/${r.macos.appName}.app`;
        try {
          if ((await R(o)).isDirectory())
            return (logForDebugging(`[Claude in Chrome] Detected browser: ${r.name}`), s);
        } catch (t) {
          if (!Rt(t)) throw t;
        }
        break;
      }
      case "wsl":
      case "linux": {
        for (let o of r.linux.binaries)
          if (await resolveExecutablePathAsync(o).catch(() => null))
            return (logForDebugging(`[Claude in Chrome] Detected browser: ${r.name}`), s);
        break;
      }
      case "windows": {
        let o = homedir();
        if (r.windows.dataPath.length > 0) {
          let t = r.windows.useRoaming
              ? l(o, "AppData", "Roaming")
              : l(o, "AppData", "Local"),
            c = l(t, ...r.windows.dataPath);
          try {
            if ((await R(c)).isDirectory())
              return (logForDebugging(`[Claude in Chrome] Detected browser: ${r.name}`), s);
          } catch (i) {
            if (!Rt(i)) throw i;
          }
        }
        break;
      }
    }
  }
  return null;
}
var q = 200;
function trackClaudeInChromeTabId(e) {
  let s = getClaudeInChromeState().trackedTabIds;
  if (s.size >= q && !s.has(e)) s.clear();
  s.add(e);
}
function isTrackedClaudeInChromeTabId(e) {
  return getClaudeInChromeState().trackedTabIds.has(e);
}
function w(e) {
  return {
    exec_exit_code: e.code,
    exec_failure_kind:
      e.exitCode !== void 0
        ? S("nonzero_exit")
        : e.code === 127
          ? S("not_found")
          : S("spawn_failed_or_killed"),
  };
}
async function openInChrome(e) {
  if (!/^https?:\/\//i.test(e))
    return (logFeatureBad("chrome_open_url", "invalid_url"), !1);
  let s = getCurrentPlatform(),
    r = await detectAvailableBrowser();
  if (!r)
    return (
      logForDebugging("[Claude in Chrome] No compatible browser found"),
      logFeatureBad("chrome_open_url", "no_browser"),
      !1
    );
  let o = g[r];
  switch (s) {
    case "macos": {
      let t = await execFileNoThrow("open", ["-a", o.macos.appName, e]);
      if (t.code === 0) return (logFeatureOk("chrome_open_url"), !0);
      return (logFeatureBad("chrome_open_url", "exec_failed", w(t)), !1);
    }
    case "windows": {
      let t = o.windows.appPathsExe,
        c = !1;
      if (t) {
        let p = await x(t);
        if (p) {
          if (await M(p, [e]))
            return (
              logFeatureOk("chrome_open_url", {
                open_method: S("app_paths"),
                browser: fromEnum(r),
              }),
              !0
            );
          c = !0;
        }
      }
      let i = await execFileNoThrowWithCwd("rundll32", ["url,OpenURL", e], { cwd: h() });
      if (i.code === 0)
        return (
          logFeatureOk("chrome_open_url", {
            open_method: c
              ? S("rundll32_after_spawn_fail")
              : t
                ? S("rundll32")
                : S("rundll32_no_app_paths_support"),
            browser: fromEnum(r),
          }),
          !0
        );
      return (
        logFeatureBad("chrome_open_url", "exec_failed", {
          ...w(i),
          ...(c && { app_paths_spawn_failed: !0 }),
          browser: fromEnum(r),
        }),
        !1
      );
    }
    case "wsl":
    case "linux": {
      let t;
      for (let c of o.linux.binaries) {
        let i = await execFileNoThrow(c, [e], { useCwd: !0, useToolMemoryCgroup: !1 });
        if (i.code === 0) return (logFeatureOk("chrome_open_url"), !0);
        if (t?.exitCode === void 0 || i.exitCode !== void 0) t = i;
      }
      return (logFeatureBad("chrome_open_url", "exec_failed", t ? w(t) : void 0), !1);
    }
    default:
      return (logFeatureBad("chrome_open_url", "exec_failed"), !1);
  }
}
function getSocketDir() {
  return `/tmp/claude-mcp-browser-bridge-${U()}`;
}
function getSecureSocketPath() {
  if (platform() === "win32") return `\\\\.\\pipe\\${H()}`;
  return l(getSocketDir(), `${process.pid}.sock`);
}
async function getAllSocketPaths() {
  if (platform() === "win32") return [`\\\\.\\pipe\\${H()}`];
  let e = [],
    s = getSocketDir();
  try {
    let r = await readdir(s);
    for (let o of r) if (o.endsWith(".sock")) e.push(l(s, o));
  } catch {}
  return e;
}
function H() {
  return `claude-mcp-browser-bridge-${U()}`;
}
function U() {
  try {
    return userInfo().username || "default";
  } catch {
    return a.USER || a.USERNAME || "default";
  }
}
export { getClaudeInChromeState, CFC_TOOL_PREFIX, CLAUDE_IN_CHROME_DOMAIN_RULE_TOOL, getAllNativeMessagingHostsDirs, getAllWindowsRegistryKeys, detectAvailableBrowser, trackClaudeInChromeTabId, isTrackedClaudeInChromeTabId, openInChrome, getSocketDir, getSecureSocketPath, getAllSocketPaths };
