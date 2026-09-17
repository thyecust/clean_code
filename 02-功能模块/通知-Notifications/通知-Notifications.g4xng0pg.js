// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K, he, sn, dl } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { lit as S, fromEnum, fromSanitizer_SANITIZER_OUTPUT_ONLY } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { execFileNoThrow } from "../工作树-Git/git-exec-hardening.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { NOTIFICATION_CHANNELS } from "../图片-截图-ComputerUse/settings-option-values.js";
import { executeNotificationHooks } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { resolveSetting } from "../上下文压缩-Compact/resolve-user-intent-setting.js";
import { isPlainObject, parsePlist } from "../../01-核心基础设施/核心工具-未归类/plist-parser.js";
var m = /^[A-Za-z0-9][A-Za-z0-9._+-]{0,63}$/;
function sanitizeTerminalName(e) {
  if (e == null) return;
  if (m.test(e)) return fromSanitizer_SANITIZER_OUTPUT_ONLY(e);
  return S("nonconforming");
}
async function showNotification(e, t, { storageV5: o, credentials: r } = {}) {
  let l = resolveSetting("preferredNotifChannel", "auto").value;
  await executeNotificationHooks({ id: K(), project: { originalCwd: he(), projectRoot: sn() } }, e, {
    storageV5: o,
    credentials: r,
  });
  let s = await p(l, e, t);
  if (s === "error") logFeatureBad("notification_show", "send_failed");
  else logFeatureOk("notification_show");
  logEvent("tengu_notification_method_used", {
    configured_channel: fromEnum(NOTIFICATION_CHANNELS.includes(l) ? l : "invalid"),
    notification_type: fromEnum(e.notificationType),
    method_used: fromEnum(s),
    term: sanitizeTerminalName(a.terminal),
    attacher_term: sanitizeTerminalName(dl()?.terminal),
  });
}
var c = "Claude Code";
async function p(e, t, o) {
  if (e === "auto") {
    let l = await g();
    return (d(l, t, o), l);
  }
  let r;
  switch (e) {
    case "iterm2":
    case "iterm2_with_bell":
    case "kitty":
    case "ghostty":
    case "terminal_bell":
      r = e;
      break;
    case "notifications_disabled":
      r = "disabled";
      break;
    default:
      r = "none";
  }
  try {
    return (d(r, t, o), r);
  } catch {
    return "error";
  }
}
async function g() {
  switch (dl()?.terminal ?? a.terminal) {
    case "Apple_Terminal":
      return (await h()) ? "terminal_bell" : "no_method_available";
    case "iTerm.app":
      return "iterm2";
    case "kitty":
      return "kitty";
    case "ghostty":
      return "ghostty";
    default:
      return "no_method_available";
  }
}
function d(e, t, o) {
  switch (e) {
    case "iterm2":
      o.notifyITerm2(t);
      return;
    case "iterm2_with_bell":
      (o.notifyITerm2(t), o.notifyBell());
      return;
    case "kitty":
      o.notifyKitty({ ...t, title: t.title || c, id: _() });
      return;
    case "ghostty":
      o.notifyGhostty({ ...t, title: t.title || c });
      return;
    case "terminal_bell":
      o.notifyBell();
      return;
    case "disabled":
    case "none":
    case "no_method_available":
      return;
  }
}
function _() {
  return Math.floor(Math.random() * 1e4);
}
async function h() {
  try {
    let t = (
      await execFileNoThrow("osascript", [
        "-e",
        'tell application "Terminal" to name of current settings of front window',
      ])
    ).stdout.trim();
    if (!t) return !1;
    let o = await execFileNoThrow("defaults", ["export", "com.apple.Terminal", "-"]);
    if (o.code !== 0) return !1;
    let r = parsePlist(o.stdout);
    if (!isPlainObject(r))
      return (
        logForDebugging(
          "Failed to read Apple Terminal bell setting: defaults export is not a plist dict",
        ),
        !1
      );
    let l = r["Window Settings"],
      s = isPlainObject(l) ? l[t] : void 0;
    if (!isPlainObject(s))
      return (
        logForDebugging(
          "Failed to read Apple Terminal bell setting: no settings dict for the current profile",
        ),
        !1
      );
    return s.Bell === !1;
  } catch (e) {
    return (
      logForDebugging(
        `Failed to read Apple Terminal bell setting: ${e instanceof Error ? e.message : String(e)}`,
        { level: "error" },
      ),
      !1
    );
  }
}
export { sanitizeTerminalName, showNotification };
