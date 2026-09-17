// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { dl } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { ku } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { execFileNoThrow } from "../../02-功能模块/Git-Worktree/git-exec-hardening.js";
import { isAbsolutePath } from "../共享小工具-未细化/chunk-kk7p3hsm.js";
import { getCurrentPlatform } from "./platform-detection.js";
import { fileURLToPath, pathToFileURL } from "url";
var s = { useCwd: !0, useToolMemoryCgroup: !1 },
  ALLOWED_HYPERLINK_SCHEMES = new Set([
    "https:",
    "http:",
    "vscode:",
    "vscode-insiders:",
    "cursor:",
    "windsurf:",
    "zed:",
    "jetbrains:",
    "idea:",
    "slack:",
    "linear:",
    "notion:",
    "figma:",
  ]);
function p(r) {
  let e;
  try {
    e = new URL(r);
  } catch (o) {
    throw Error(`Invalid URL format: ${r}`);
  }
  if (e.protocol !== "http:" && e.protocol !== "https:")
    throw Error(
      `Invalid URL protocol: must use http:// or https://, got ${e.protocol}`,
    );
}
async function openPathInDefaultApp(r) {
  try {
    let o = "open",
      { code: t } = await execFileNoThrow(o, [r], s);
    return t === 0;
  } catch (e) {
    return !1;
  }
}
async function f(r) {
  try {
    let e = getCurrentPlatform();
    if (e === "macos") {
      let { code: t } = await execFileNoThrow("open", ["-R", "--", r]);
      return t === 0;
    }
    if (e === "windows") {
      let { exitCode: t } = await execFileNoThrow("explorer", [`/select,${r}`]);
      return t !== void 0;
    }
    let { code: o } = await execFileNoThrow("dbus-send", [
      "--session",
      "--print-reply",
      "--dest=org.freedesktop.FileManager1",
      "--type=method_call",
      "/org/freedesktop/FileManager1",
      "org.freedesktop.FileManager1.ShowItems",
      `array:string:${pathToFileURL(r).href.replaceAll(",", "%2C")}`,
      "string:",
    ]);
    return o === 0;
  } catch (e) {
    return !1;
  }
}
async function openHyperlink(r) {
  let e;
  try {
    e = new URL(r);
  } catch {
    return !1;
  }
  let o = e.protocol;
  if (o === "file:") {
    if (e.host !== "") return !1;
    try {
      let t = fileURLToPath(r);
      if (ku(t) || isAbsolutePath(t)) return !1;
      return await f(t);
    } catch {
      return !1;
    }
  }
  if (!ALLOWED_HYPERLINK_SCHEMES.has(o))
    return (
      n(
        `[hyperlink] refusing to dispatch clicked link with non-allowlisted scheme ${o}`,
        { level: "warn" },
      ),
      !1
    );
  return (await l(r)).ok;
}
function isHeadlessEnvironment() {
  if (!process.stdout.isTTY) return !0;
  if (a.BROWSER && a.BROWSER !== "true") return !1;
  if (a.SSH_CONNECTION) return !0;
  return i();
}
function i() {
  return getCurrentPlatform() === "linux" && !a.DISPLAY && !a.WAYLAND_DISPLAY;
}
async function openUrlInBrowser(r) {
  try {
    p(r);
  } catch (e) {
    return {
      ok: !1,
      reason: "invalid_url",
      detail: e instanceof Error ? e.message : String(e),
    };
  }
  return l(r);
}
async function tryOpenUrlInBrowser(r) {
  return (await openUrlInBrowser(r)).ok;
}
async function l(r) {
  try {
    let e = dl()?.browser,
      o = e !== void 0 ? (e ?? void 0) : a.BROWSER,
      t = "darwin";
    if (!o && i()) return { ok: !1, reason: "no_display" };
    return d(await execFileNoThrow(o || "open", [r], s));
  } catch (e) {
    return {
      ok: !1,
      reason: "unknown",
      detail: e instanceof Error ? e.message : String(e),
    };
  }
}
function d(r) {
  if (r.code === 0) return { ok: !0 };
  let e = r.error ?? "",
    o = r.stderr || e || `exit ${r.code}`;
  if (r.code === 127 || e.includes("ENOENT"))
    return { ok: !1, reason: "opener_missing", detail: o };
  if (e.includes("ETIMEDOUT") || e.includes("timed out"))
    return { ok: !1, reason: "timeout", detail: o };
  if (e.includes("EACCES") || e.includes("EPERM"))
    return { ok: !1, reason: "spawn_error", detail: o };
  if (r.code > 0) return { ok: !1, reason: "nonzero_exit", detail: o };
  return { ok: !1, reason: "unknown", detail: o };
}
export { ALLOWED_HYPERLINK_SCHEMES, openPathInDefaultApp, openHyperlink, isHeadlessEnvironment, openUrlInBrowser, tryOpenUrlInBrowser };
