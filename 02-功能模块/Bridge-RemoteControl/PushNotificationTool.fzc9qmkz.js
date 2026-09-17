// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 79 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { BOn, Nn, ic } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { m0 } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { Eo } from "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import { PUSH_NOTIFICATION_TOOL_NAME, PUSH_NOTIFICATION_TOOL_DESCRIPTION, getPushNotificationToolPrompt } from "./push-notification-tool.js";
import { s, O, c, Qe, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var S = createLazyValue(() =>
    Qe({
      message: s()
        .min(1)
        .describe(
          "The notification body. Keep it under 200 characters; mobile OSes truncate.",
        ),
      status: k("proactive"),
    }),
  ),
  _ = createLazyValue(() =>
    c({
      message: s(),
      pushSent: O().optional(),
      localSent: O().optional(),
      disabledReason: X([
        "config_off",
        "user_present",
        "no_transport",
      ]).optional(),
      sentAt: s()
        .optional()
        .describe(
          "ISO timestamp captured at tool execution on the emitting process. Optional \u2014 resumed sessions replay pre-sentAt outputs verbatim.",
        ),
    }),
  ),
  b = 300000,
  PushNotificationTool = buildTool({
    name: PUSH_NOTIFICATION_TOOL_NAME,
    searchHint:
      "send a notification to the user via terminal and optionally mobile",
    maxResultSizeChars: 1000,
    userFacingName: () => "PushNotification",
    get inputSchema() {
      return S();
    },
    get outputSchema() {
      return _();
    },
    shouldDefer: !0,
    isEnabled() {
      return m0("tengu_kairos_push_notifications", !1, b);
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return e.message;
    },
    async description() {
      return PUSH_NOTIFICATION_TOOL_DESCRIPTION;
    },
    async prompt() {
      return getPushNotificationToolPrompt();
    },
    mapToolResultToToolResultBlockParam(e, t) {
      let o;
      if (e.disabledReason === "config_off")
        o = "Push not sent \u2014 mobile push is disabled in /config.";
      else if (e.disabledReason === "user_present")
        o =
          "Not sent \u2014 this terminal is active, so your output here already reaches the user; a separate notification would be redundant.";
      else if (e.disabledReason === "no_transport")
        o = e.localSent
          ? "Terminal notification sent. Mobile push not sent (Remote Control inactive)."
          : "Mobile push not sent (Remote Control inactive).";
      else
        o = e.localSent
          ? "Terminal notification sent. Mobile push requested."
          : "Mobile push requested.";
      return { tool_use_id: t, type: "tool_result", content: o };
    },
    renderToolUseMessage(e) {
      if (!e.message) return "";
      return e.message;
    },
    create({ isNonInteractiveSession: e }) {
      return {
        async call({ message: t }, { onProgress: o }) {
          let n = new Date().toISOString(),
            r = a.CLAUDE_CODE_REMOTE || Nn(),
            p = r || ic(),
            l = ({ pushSent: f, localSent: d, disabledReason: h }) => {
              logEvent("tengu_push_notification_send", {
                message_length: t.length,
                push_sent: f,
                local_sent: d,
                is_remote: r,
                disabled_reason: fromEnumOpt(h),
              });
            };
          if (p && !r && !Eo("agentPushNotifEnabled", !1).value)
            return (
              l({ pushSent: !1, localSent: !1, disabledReason: "config_off" }),
              {
                data: {
                  message: t,
                  pushSent: !1,
                  localSent: !1,
                  disabledReason: "config_off",
                  sentAt: n,
                },
              }
            );
          if (!r && !a.CLAUDE_CODE_DISABLE_NOTIFICATION_PRESENCE_CHECK && BOn())
            return (
              l({
                pushSent: !1,
                localSent: !1,
                disabledReason: "user_present",
              }),
              {
                data: {
                  message: t,
                  pushSent: !1,
                  localSent: !1,
                  disabledReason: "user_present",
                  sentAt: n,
                },
              }
            );
          o?.({
            type: "os_notification",
            message: t,
            notificationType: "push_notification",
          });
          let u = !e;
          if (!p)
            return (
              l({ pushSent: !1, localSent: u, disabledReason: "no_transport" }),
              {
                data: {
                  message: t,
                  pushSent: !1,
                  localSent: u,
                  disabledReason: "no_transport",
                  sentAt: n,
                },
              }
            );
          return (
            l({ pushSent: !0, localSent: u }),
            { data: { message: t, pushSent: !0, localSent: u, sentAt: n } }
          );
        },
      };
    },
  });
export { PushNotificationTool };
