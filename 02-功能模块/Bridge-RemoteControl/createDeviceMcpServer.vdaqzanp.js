// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 8 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { JSONRPCMessageSchema as GR, ListToolsRequestSchema, CallToolRequestSchema } from "../MCP客户端/chunk-tv3jbp8f.js";
import "../MCP客户端/mcp-protocol.js";
import { McpServer } from "../MCP客户端/mcp-server.js";
import { sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { ge } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
var g = "claude-code-device",
  u = "get_device_info";
function v(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e))
    return { sessionId: void 0, toolArgs: {} };
  let { session_id: t, trigger_id: o, ...s } = e;
  return {
    sessionId: typeof t === "string" && t.length > 0 ? t : void 0,
    toolArgs: s,
  };
}
function parseJsonRpcMessage(e) {
  return GR.parse(e);
}
function createDeviceMcpServer(e) {
  let t = 0,
    o = [],
    s = () => {
      if (t !== 0) return;
      let r = o;
      ((o = []), r.forEach((l) => l()));
    },
    c = new McpServer(
      { name: g, version: e.version },
      { capabilities: { tools: {} } },
    );
  return (
    c.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [...e.registry.definitions()],
    })),
    c.setRequestHandler(
      CallToolRequestSchema,
      async ({ params: { name: r, arguments: l } }, m) => {
        let d = e.registry.get(r);
        if (!d)
          return {
            content: [{ type: "text", text: `Unknown tool: ${r}` }],
            isError: !0,
          };
        let { sessionId: a, toolArgs: f } = v(l);
        if (a !== void 0 && sessionIdBody(a) !== sessionIdBody(e.sessionId))
          return h(d, a, e.sessionId);
        t++;
        try {
          return await d.call(f, { sessionId: a, signal: m.signal });
        } catch (p) {
          return (
            logForDebugging(`[deviceBridge] tool ${r} failed: ${ge(p).message}`),
            {
              content: [
                { type: "text", text: `Tool ${r} failed: internal error` },
              ],
              isError: !0,
            }
          );
        } finally {
          if ((t--, t === 0)) setTimeout(s, 0);
        }
      },
    ),
    {
      server: c,
      inFlightCalls: () => t,
      whenIdle: () => {
        let r = new Promise((l) => {
          o.push(l);
        });
        if (t === 0) setTimeout(s, 0);
        return r;
      },
    }
  );
}
function h(e, t, o) {
  let s = e.definition.name;
  return (
    logForDebugging(
      `[deviceBridge] refused ${s}: call asserted for session ${jsonStringify(t.slice(0, 48))}, this device serves ${o}`,
    ),
    logEvent("tengu_device_tool_refused", {
      tool: e.analyticsName,
      reason: S("session_mismatch"),
    }),
    {
      content: [
        {
          type: "text",
          text: `${s} refused: the user's machine is currently connected on behalf of a different Claude Code cloud session (usually another session started from the same machine), so it cannot run device tools for this session and nothing was run. Tell the user, and continue with the tools in this cloud environment; if this session was also started with Claude Code on that machine, its device tools may work again once the other session ends. Do not retry in a loop.`,
        },
      ],
      isError: !0,
    }
  );
}
var y = "This machine is attached but does not run commands for this session.";
function deviceInfoProbeTool(e) {
  let t = e.now ?? (() => new Date());
  return {
    definition: {
      name: u,
      description:
        "Returns runtime environment details for this device (platform, architecture, Claude Code version, and device name). Call this to confirm the device connection is live." +
        (e.idle ? ` ${y}` : ""),
      inputSchema: { type: "object", properties: {} },
    },
    analyticsName: S(u),
    call: async () => {
      let o = {
        platform: getCurrentPlatform(),
        arch: "arm64",
        claudeCodeVersion: e.version,
        deviceName: e.getDeviceName(),
        timestamp: t().toISOString(),
      };
      return { content: [{ type: "text", text: jsonStringify(o, null, 2) }] };
    },
  };
}
export {
  createDeviceMcpServer,
  deviceInfoProbeTool,
  parseJsonRpcMessage,
};
