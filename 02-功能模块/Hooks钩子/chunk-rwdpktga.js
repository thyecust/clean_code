// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { KLn, XLn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { sXt } from "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
function n() {
  let e = XLn(),
    o = e === void 0 ? sXt() : void 0,
    [r, s] =
      e !== void 0
        ? [Math.max(0, Date.now() - e), "session_switch"]
        : o !== void 0
          ? [Math.max(0, Date.now() - o), "spawn_stamp"]
          : [Math.round(process.uptime() * 1000), "process_start"];
  return {
    msSinceSessionStart: r,
    startAnchor: fromEnum(s),
    isRemoteSession: Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID),
  };
}
function t(e) {
  let o = KLn();
  if (o.has(e)) return !1;
  return (o.add(e), !0);
}
function gut(e, o) {
  if (e === 0 || !t("tools_added")) return;
  i("tengu_chrome_tools_added", {
    ...n(),
    toolCount: e,
    discoverySource: fromEnum(o),
  });
}
function Z2n(e) {
  if (!t("bridge_connected")) return;
  i("tengu_chrome_bridge_connected", { ...n(), bridgeStatus: fromEnumOpt(e) });
}
function ejn() {
  if (!t("extension_connected")) return;
  i("tengu_chrome_extension_connected", n());
}
function tjn(e) {
  i("tengu_chrome_tool_call_disconnected", { ...n(), tokenAccountMismatch: e });
}
export { gut, Z2n, ejn, tjn };
