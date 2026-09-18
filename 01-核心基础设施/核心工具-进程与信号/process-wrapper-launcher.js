// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { jsonStringify, jsonParse, logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getLocalBinDir } from "../核心工具-路径与平台/user-directories.js";
import { getCurrentPlatform } from "../核心工具-路径与平台/platform-detection.js";
import { constants, statSync } from "fs";
import { access, stat } from "fs/promises";
import { isAbsolute, join } from "path";
var PROCESS_WRAPPER_ENV_VAR = "CLAUDE_CODE_PROCESS_WRAPPER",
  FAST_CRASH_WINDOW_MS = 12000,
  c = { argv: [], error: null, platformIgnored: !1, record: "" };
class f {
  memoRaw = void 0;
  memoState = c;
  getState() {
    let r = process.env[PROCESS_WRAPPER_ENV_VAR];
    if (!r) return c;
    let e = r === this.memoRaw ? this.memoState.error : null;
    if (r === this.memoRaw && e === null) return this.memoState;
    if (
      ((this.memoRaw = r),
      (this.memoState = v(r)),
      this.memoState.error && this.memoState.error !== e)
    )
      logForDebugging(
        `${PROCESS_WRAPPER_ENV_VAR} is set but can't be used \u2014 self-spawns that require it will refuse to start rather than run unwrapped: ${this.memoState.error}`,
        { level: "error" },
      );
    else if (this.memoState.platformIgnored)
      logForDebugging(
        `${PROCESS_WRAPPER_ENV_VAR} is set but ignored on Windows \u2014 the launcher must exec into Claude Code, which Windows can't do; sessions run unwrapped`,
        { level: "warn" },
      );
    return this.memoState;
  }
}
var S = new j(() => new f());
function getProcessWrapperState() {
  return S.of(B().host).getState();
}
function getLauncherArgv() {
  return getProcessWrapperState().argv;
}
function getLauncherConfigError() {
  return getProcessWrapperState().error;
}
async function isLauncherRunnable() {
  if (getLauncherConfigError() !== null) return !1;
  let r = getLauncherArgv();
  if (r.length === 0) return !0;
  let e = getAbsoluteLauncherPaths(r)[0];
  return e === void 0 ? !0 : isExecutableFile(e);
}
async function isExecutableFile(r) {
  try {
    if (!(await stat(r)).isFile()) return !1;
    return (await access(r, constants.X_OK), !0);
  } catch {
    return !1;
  }
}
function getAbsoluteLauncherPaths(r) {
  let e = r[0];
  return e !== void 0 && e.startsWith("/") ? [e] : [];
}
async function getLauncherErrorMessage() {
  let r = getLauncherConfigError();
  if (r) return r;
  if (await isLauncherRunnable()) return null;
  return `${PROCESS_WRAPPER_ENV_VAR}: launcher \`${getLauncherArgv()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry`;
}
function getLauncherCommandString() {
  return getProcessWrapperState().record;
}
function v(r) {
  if (getCurrentPlatform() === "windows")
    return { argv: [], error: null, platformIgnored: !0, record: "" };
  let e;
  try {
    e = W(r);
  } catch (o) {
    return i(o instanceof Error ? o.message : String(o));
  }
  if (e.length === 0)
    return i(
      "the value is set but contains no launcher \u2014 unset the variable to run without one, or set it to the absolute path of your launcher",
    );
  let s = e[0];
  if (s === process.execPath || s === join(getLocalBinDir(), "claude"))
    return i(
      `launcher \`${s}\` is Claude Code's own launch path \u2014 point ${PROCESS_WRAPPER_ENV_VAR} at your launcher, not at claude`,
    );
  if (!isAbsolute(s))
    return i(
      "the launcher must be an absolute path, not a bare name resolved via PATH",
    );
  try {
    let o = statSync(s);
    if (!o.isFile() || (o.mode & 73) === 0)
      return i(`launcher \`${s}\` is not an executable regular file`);
  } catch {
    return i(`launcher \`${s}\` does not exist or is not readable`);
  }
  return {
    argv: e,
    error: null,
    platformIgnored: !1,
    record: e.map((o) => (/[\s"]/.test(o) ? jsonStringify(o) : o)).join(" "),
  };
}
function i(r) {
  return { argv: [], error: `${PROCESS_WRAPPER_ENV_VAR}: ${r}`, platformIgnored: !1, record: "" };
}
var y = ";|&$()`<>";
function W(r) {
  let e = r.trim();
  if (e === "") return [];
  if (e.startsWith("[")) {
    let t;
    try {
      t = jsonParse(e);
    } catch {
      throw Error("value starts with `[` but is not valid JSON");
    }
    if (!Array.isArray(t) || !t.every((a) => typeof a === "string"))
      throw Error("JSON form must be an array of strings");
    if (t.length > 0 && t.some((a) => a === "")) {
      if (t.every((a) => a === "")) return [];
      throw Error(
        "the JSON array contains an empty element \u2014 remove it, or fill in the value it was a placeholder for",
      );
    }
    return t;
  }
  let s = [],
    o = "",
    u = !1,
    l = !1;
  for (let t = 0; t < e.length; t++) {
    let a = e[t];
    if (l) {
      if (a === "\\" && (e[t + 1] === '"' || e[t + 1] === "\\")) o += e[++t];
      else if (a === '"') l = !1;
      else o += a;
      continue;
    }
    if (a === '"') {
      ((l = !0), (u = !0));
      continue;
    }
    if (/\s/.test(a)) {
      if (u) (s.push(o), (o = ""), (u = !1));
      continue;
    }
    if (y.includes(a))
      throw Error(
        "the value contains an unquoted shell metacharacter (one of ; | & $ ( ) ` < >) \u2014 it is an argv list, not a shell command",
      );
    ((o += a), (u = !0));
  }
  if (l) throw Error("unterminated double quote");
  if (u) s.push(o);
  if (s.length > 0 && s.some((t) => t === "")) {
    if (s.every((t) => t === "")) return [];
    throw Error(
      'the value contains an empty `""` token \u2014 remove it, or fill in the value it was a placeholder for',
    );
  }
  return s;
}
export { PROCESS_WRAPPER_ENV_VAR, FAST_CRASH_WINDOW_MS, getProcessWrapperState, getLauncherArgv, getLauncherConfigError, isLauncherRunnable, isExecutableFile, getAbsoluteLauncherPaths, getLauncherErrorMessage, getLauncherCommandString };
