// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 198 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { sleep } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { ze } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { R } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { areBackgroundTasksDisabled } from "../../01-核心基础设施/核心工具-未归类/host-capability-state.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { MAX_TIMER_DELAY_MS } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { attachDetachableAbortRelay } from "../../01-核心基础设施/核心工具-进程与信号/chunk-h3cty6gp.js";
import { enqueuePendingNotification } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "./chunk-tv3jbp8f.js";
import "../认证-OAuth登录/pkce-challenge.js";
import "../认证-OAuth登录/oauth-client.js";
import { createMcpTaskRecord } from "./mcp-task-record.js";
import { StreamableHTTPError } from "../MCP传输-stdio-SSE-HTTP/streamable-http-client-transport.js";
import * as lazy_mcpClientModule_4cyej0np from "./mcpClientModule.4cyej0np.js";

var K = new Set([
  "ClaudeAiProxyBearerRejectedError",
  "McpAuthError",
  "McpError",
  "McpResponseSchemaError",
  "McpToolCallError",
  "ProtocolError",
  "SdkError",
  "SdkHttpError",
  "StreamableHTTPError",
  "TelemetrySafeError",
]);
function w(e) {
  if (e instanceof DOMException) return e.name === "TimeoutError";
  if (!(e instanceof Error)) return !1;
  if (e instanceof R) return !0;
  if (e instanceof StreamableHTTPError) return !0;
  if (
    (("errorCode" in e && typeof e.errorCode === "string") ||
      ("code" in e && typeof e.code === "string")) &&
    /^HTTP 40[13]\b/.test(e.message)
  )
    return !0;
  let r = e.name !== "Error" ? e.name : (e.constructor?.name ?? "");
  return K.has(r);
}
function p() {
  return lazy_mcpClientModule_4cyej0np.mcpTaskWatcherModule();
}
var V = 120000,
  W = new Set(["sse-ide", "ws-ide"]);
function getMcpAutoBackgroundMs(e, { isNonInteractiveSession: r = !1 } = {}) {
  if (W.has(e?.type ?? "")) return 0;
  if (areBackgroundTasksDisabled()) return 0;
  if (r && !a.CLAUDE_AUTO_BACKGROUND_TASKS) return 0;
  let s = a.CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS;
  if (s !== void 0) return Math.min(Math.max(0, s), MAX_TIMER_DELAY_MS);
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_auto_background", !0) ? V : 0;
}
async function callMcpToolWithAutoBackground({
  run: e,
  serverName: r,
  toolName: s,
  toolUseId: D,
  parentAbortController: k,
  taskRegistry: _,
  autoBackgroundMs: x,
  storageV5: I,
  credentials: v,
  hasPendingElicitation: B,
  onBackgrounded: L,
  share: l,
}) {
  let d = new AbortController(),
    T = attachDetachableAbortRelay(k, d),
    N = Date.now(),
    u = e(d.signal),
    O = u.then(
      () => "settled",
      () => "settled",
    ),
    S = new AbortController();
  try {
    while (!0) {
      if (
        (await Promise.race([O, sleep(x, S.signal).then(() => "timeout")])) ===
          "settled" ||
        k.signal.aborted
      )
        return (T(), await u);
      if (B?.()) continue;
      break;
    }
  } finally {
    S.abort();
  }
  T();
  let m = createMcpTaskRecord({ serverName: r, toolName: s, toolUseId: D, abortController: d }),
    { id: o, description: U } = m;
  if ((_.register(m), l)) l.registryId = o;
  (L?.(), logEvent("tengu_mcp_tool_auto_backgrounded", {}));
  function E(t, M, F, b, A) {
    if (l?.becameTask) return;
    let C = p().boundMcpStatusMessage(F),
      P = !1;
    if (
      (_.update(o, (c) => {
        if (c.notified) return c;
        return (
          (P = !0),
          {
            ...c,
            status: t,
            mcpStatus: t,
            statusMessage: C,
            endTime: Date.now(),
            notified: !0,
            abortController: void 0,
            ...(A && { terminal: { resource_links: A } }),
          }
        );
      }),
      !P)
    )
      return;
    if (t === "completed") logFeatureOk("mcp_auto_background");
    else if (b === "tool_error") logFeatureSad("mcp_auto_background", "tool_error");
    else if (b === "aborted") logFeatureSad("mcp_auto_background", "aborted");
    else logFeatureBad("mcp_auto_background", "call_failed");
    try {
      enqueuePendingNotification(
        {
          value: p().buildMcpTaskNotification({
            registryId: o,
            mcpTaskId: o,
            serverName: r,
            toolName: s,
            status: t,
            resultText: M?.text,
            resultHint: M?.savedHint,
            statusMessage: C,
          }),
          mode: "task-notification",
          skipAttachments: !0,
          priority: "next",
          agentId: ze(),
          taskId: o,
        },
        { turnAttribution: "inherit" },
      );
    } catch (c) {
      logError(c);
      try {
        enqueuePendingNotification(
          {
            value: `MCP task ${o} ${t}; the result could not be rendered.`,
            mode: "task-notification",
            skipAttachments: !0,
            priority: "next",
            agentId: ze(),
            taskId: o,
          },
          { turnAttribution: "inherit" },
        );
      } catch (q) {
        logForDebugging(`degraded MCP task notification enqueue failed: ${String(q)}`, {
          level: "error",
        });
      }
    }
  }
  u.then(
    async (t) => {
      E(
        "completed",
        await p().mcpContentToNotificationText(t.data, I, v),
        void 0,
        void 0,
        t.mcpMeta?.resourceLinks,
      );
    },
    (t) => {
      E(
        "failed",
        void 0,
        t instanceof Error ? t.message : String(t),
        d.signal.aborted ? "aborted" : w(t) ? "tool_error" : "call_failed",
      );
    },
  );
  let j = Math.round((Date.now() - N) / 1000);
  return {
    data: [
      {
        type: "text",
        text: `MCP tool "${U}" is still running after ${j}s. It was moved to the background as task ${o} and keeps running; you'll receive a notification with the result when it completes. You can keep working in the meantime. To stop it, use TaskStop with task_id "${o}". Note: it does not survive exiting this session.`,
      },
    ],
  };
}
export { callMcpToolWithAutoBackground, getMcpAutoBackgroundMs };
