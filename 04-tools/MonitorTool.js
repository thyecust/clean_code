// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { env as a } from "../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { R, ge } from "../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { omitBy } from "../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { truncate } from "../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { getWebSocketTLSOptions, getWebSocketProxyUrl } from "../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { checkWebSocketEgress } from "../01-核心基础设施/HTTP-网络层/test-egress-guard.js";
import { TOOL_USE_SUMMARY_MAX_CHARS } from "../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { hasNoControlCharacters, isPolicyAllowed } from "../01-核心基础设施/核心工具-字符串与文本/chunk-8sw91yn5.js";
import { buildTool } from "../02-功能模块/权限系统/chunk-qdy0h5k2.js";
import {
  isAgentStopPending,
  isHostAllowedBySandboxNetworkPolicy,
  getBashCommandClampSurfaceDeny,
  getBashCommandClampCrashDeny,
  checkBashCommandPermissions,
  shouldUseSandbox,
  getAgentWorktreePath,
  executeShellCommand,
  addKeepaliveReason,
  removeKeepaliveReason,
  killLocalShellTask,
  resolveToolUseAgentId,
  createMonitorEventGate,
  sendMonitorEventNotification,
  registerMonitorSocket,
  isMonitorSocketCurrent,
  killMonitorTask,
  isPrivateOrReservedIpAddress,
  startBackgroundShellTask,
} from "../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isBashToolAvailable } from "../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { formatSubprotocolSuffix, formatSubprotocolList } from "../01-核心基础设施/核心工具-其他/websocket-subprotocols.js";
import { generateTaskId, createPendingTask } from "../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
import { getMonitorPushNotificationHint, isMonitorToolEnabled, getMonitorToolDescription, MONITOR_WS_SOURCE_HELP } from "../02-功能模块/工具Monitor/monitor-tool-description.js";
import { MONITOR_TOOL_NAME } from "../01-核心基础设施/核心工具-未归类/monitor-tool-name.js";
import { s, T, O, v, c, Qe } from "../00-第三方库/zod/zod.5ef0bk11.js";
import { countMatching } from "../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { isIP } from "net";
import { lookup } from "dns/promises";
import F from "ws";
class MonitorWsPreconditionError extends Error {
  constructor(e) {
    super(e);
    this.name = "MonitorWsPreconditionError";
  }
}
function normalizeWebSocketUrlScheme(e) {
  switch (e.protocol) {
    case "wss:":
    case "https:":
      e.protocol = "wss:";
      break;
    case "ws:":
    case "http:":
      e.protocol = "ws:";
      break;
    default:
      throw new MonitorWsPreconditionError(`unsupported socket base scheme ${e.protocol}`);
  }
  return e.toString();
}
function z(e) {
  return e.replace(/^\[|\]$/g, "");
}
async function J(e, t) {
  let o = new URL(e),
    u = z(o.hostname);
  if (isIP(u)) {
    if (isPrivateOrReservedIpAddress(u))
      throw new MonitorWsPreconditionError(
        `${u} is in a private, link-local, or cloud-metadata range`,
      );
    return { url: e, tls: t.tls };
  }
  let h;
  try {
    h = await lookup(u, { all: !0 });
  } catch (k) {
    throw new MonitorWsPreconditionError(`could not resolve ${u}: ${ge(k).message}`);
  }
  if (h.length === 0) throw new MonitorWsPreconditionError(`could not resolve ${u}`);
  for (let { address: k } of h)
    if (isPrivateOrReservedIpAddress(k))
      throw new MonitorWsPreconditionError(
        `${u} resolves to ${k}, which is in a private, link-local, or cloud-metadata range`,
      );
  if (t.proxy) return { url: e, tls: t.tls };
  if (o.protocol === "wss:") return { url: e, tls: t.tls };
  let w = h.find((k) => k.family === 4) ?? h[0],
    M = o.host;
  return (
    (o.hostname = w.family === 6 ? `[${w.address}]` : w.address),
    { url: o.toString(), headers: { Host: M }, tls: t.tls }
  );
}
var Z = 30000,
  HANDSHAKE_TIMEOUT_DETAIL = "handshake_timeout";
function Q(e, t) {
  let o = Number.isInteger(e) && e >= 100 && e <= 599 ? e : 0;
  return `${t ? "cf_mitigated" : "upgrade_rejected"}_${o}`;
}
function parseUpgradeRejectDetail(e) {
  let t = /^(cf_mitigated|upgrade_rejected)_(\d{1,3})$/.exec(e ?? "");
  if (t === null) return null;
  return { status: Number(t[2]), cfMitigated: t[1] === "cf_mitigated" };
}
var N = 1048576;
function ee(e) {
  if (Array.isArray(e)) return e.reduce((t, o) => t + o.length, 0);
  if (e instanceof ArrayBuffer) return e.byteLength;
  return e.length;
}
function pickToolInvocationContext(e) {
  return {
    taskRegistry: e.taskRegistry,
    toolUseId: e.toolUseId,
    agentId: e.agentId,
    storageV5: e.storageV5,
    credentials: e.credentials,
  };
}
function te(e) {
  return (t) => {
    if (e.readyState === F.OPEN)
      try {
        e.send(t);
      } catch {}
  };
}
async function startWebSocketMonitor(e, t) {
  let o = pickToolInvocationContext(t),
    { description: u, timeout_ms: h, persistent: w } = e,
    { url: M, protocols: k } = e.ws;
  checkWebSocketEgress(M);
  let { toolUseId: P, taskRegistry: p } = o,
    f = resolveToolUseAgentId(o),
    r = e.reuseTaskId ?? generateTaskId("monitor_ws"),
    C = createMonitorEventGate({
      description: u,
      agentId: f,
      taskRef: { id: r },
      killTask: () => {
        if (!isMonitorSocketCurrent(r, g)) return !1;
        return (killMonitorTask(r, p, { quiet: !0 }), !0);
      },
    }),
    I = getWebSocketProxyUrl(M),
    D = await J(M, { proxy: I, tls: getWebSocketTLSOptions() }),
    A = omitBy(e.headers ?? {}, (l, i) => i.toLowerCase() === "host"),
    g = new F(D.url, k, {
      proxy: I,
      headers: { ...A, ...D.headers },
      tls: D.tls,
      maxPayload: N,
    }),
    E = Date.now(),
    x,
    _ = () => isMonitorSocketCurrent(r, g),
    L = Date.now();
  (g.on("open", () => {
    let l = p.all()[r];
    if (l && l.status === "running" && _())
      try {
        e.onLifecycle?.("open", void 0, Date.now() - E);
      } catch {}
    let i = e.keepalive;
    if (i && l && l.status === "running" && _()) {
      for (let d of i.openFrames)
        try {
          g.send(d);
        } catch {}
      ((L = Date.now()),
        (x = setInterval(
          (d, b, y) => {
            if (y !== void 0 && Date.now() - L > y) {
              try {
                d.terminate();
              } catch {}
              return;
            }
            for (let S of b)
              try {
                d.send(S);
              } catch {}
          },
          i.intervalMs,
          g,
          typeof i.frame === "string" ? [i.frame] : i.frame,
          i.deadlineMs,
        )),
        x.unref?.());
    }
    if (e.onSender && l && l.status === "running" && _())
      try {
        e.onSender(te(g));
      } catch {}
  }),
    g.on("message", (l, i) => {
      L = Date.now();
      let d = p.all()[r];
      if (!d || d.status !== "running" || !_()) return;
      let b = ee(l);
      if (b > N) {
        (sendMonitorEventNotification(u, `[Dropped ${b}-byte frame (exceeds ${N}); closing]`, r, {
          isHousekeeping: !0,
          agentId: f,
          turnAttribution: "none",
        }),
          killMonitorTask(r, p, { quiet: !0 }));
        return;
      }
      if (i) {
        if (typeof e.transform === "function") return;
        C.onData(`[binary frame, ${b} bytes]
`);
        return;
      }
      let y = l.toString("utf8");
      if (typeof e.transform === "function") {
        let S;
        try {
          S = e.transform(y);
        } catch {
          S = null;
        }
        if (S === null) return;
        y = S;
      }
      C.onData(
        y +
          `
`,
      );
    }));
  let U;
  (g.on("unexpected-response", (l, i) => {
    let d = i?.statusCode ?? 0;
    if (d === 101) return;
    let b = i?.headers ?? {},
      y = b["cf-mitigated"] !== void 0;
    ((U = Q(d, y)),
      logForDebugging(
        `[callWs] upgrade rejected: status=${d} cf-mitigated=${String(b["cf-mitigated"])} cf-ray=${String(b["cf-ray"])}`,
      ),
      i?.resume?.());
    let S = p.all()[r];
    if (!e.quietLifecycle && S?.status === "running" && _())
      sendMonitorEventNotification(u, `[WebSocket upgrade rejected: HTTP ${d}]`, r, {
        isHousekeeping: !0,
        agentId: f,
        turnAttribution: "none",
      });
    try {
      g.terminate();
    } catch {}
  }),
    g.on("error", (l) => {
      clearInterval(x);
      try {
        e.onSenderClosed?.();
      } catch {}
      let i = p.all()[r];
      if (!i || i.status !== "running" || !_()) return;
      if (
        (logForDebugging(`[callWs] socket error: ${l.message}`),
        !e.quietLifecycle && U === void 0)
      )
        sendMonitorEventNotification(u, `[WebSocket error: ${l.message}]`, r, {
          isHousekeeping: !0,
          agentId: f,
          turnAttribution: "none",
        });
    }),
    g.on("close", (l, i) => {
      (clearInterval(x), C.finish());
      try {
        e.onSenderClosed?.();
      } catch {}
      let d = p.all()[r];
      if (!d || d.status !== "running" || !_()) return;
      try {
        e.onLifecycle?.("close", U ?? String(l), Date.now() - E);
      } catch {}
      if (!e.quietLifecycle) {
        let b = i.length ? ` ${i.toString("utf8")}` : "";
        sendMonitorEventNotification(u, `[WebSocket closed: ${l}${b}]`, r, {
          isHousekeeping: !0,
          agentId: f,
          turnAttribution: "none",
        });
      }
      killMonitorTask(r, p, { quiet: !0, connectionLost: !0 });
    }));
  let V = w
      ? void 0
      : setTimeout(
          (l, i, d, b, y, S) => {
            if (l.isKilled()) return;
            if (!S)
              sendMonitorEventNotification(i, "[Monitor timed out \u2014 re-arm if needed.]", d, {
                isHousekeeping: !0,
                agentId: b,
              });
            killMonitorTask(d, y, { quiet: !0 });
          },
          h,
          C,
          u,
          r,
          f,
          p,
          e.quietLifecycle,
        ),
    K = {
      ...createPendingTask(r, "monitor_ws", u, P),
      type: "monitor_ws",
      status: "running",
      url: M,
      timeoutId: V,
      agentId: f,
      ...(e.ambient && { ambient: !0 }),
      ...(e.autoReactArmed && { autoReactArmed: !0 }),
      ...(e.autoReactSlug && { autoReactSlug: e.autoReactSlug }),
      ...(e.frameLive && {
        frameLive: { ...e.frameLive, armedAt: Date.now() },
      }),
    };
  if ((p.register(K), registerMonitorSocket(r, g), addKeepaliveReason(f, `monitor:${r}`, p), e.ambient)) {
    let l = setTimeout(
      (i, d, b, y, S) => {
        if (i.readyState === 0 && isMonitorSocketCurrent(d, i)) {
          try {
            y.onLifecycle?.("close", HANDSHAKE_TIMEOUT_DETAIL, Date.now() - S);
          } catch {}
          killMonitorTask(d, b, { quiet: !0, connectionLost: !0 });
        }
      },
      e.handshakeDeadlineMs ?? Z,
      g,
      r,
      p,
      e,
      E,
    );
    (l.unref?.(),
      g.once("open", () => clearTimeout(l)),
      g.once("close", () => clearTimeout(l)));
  }
  return { data: { taskId: r, timeoutMs: w ? 0 : h, persistent: w } };
}
var H = 3600000,
  B = 1800000,
  j = 300000;
var ne =
    "Shell command or script. Each stdout line is an event; exit ends the watch.",
  re =
    "command contains control characters that would be hidden in the approval dialog",
  se = () => s().refine(hasNoControlCharacters, re),
  ie = () =>
    c({
      url: s()
        .refine(
          hasNoControlCharacters,
          "url contains control characters that would be hidden in the approval dialog",
        )
        .refine((e) => {
          try {
            let t = new URL(e);
            return (
              (t.protocol === "ws:" || t.protocol === "wss:") &&
              !t.username &&
              !t.password &&
              !/[\t\n\r]/.test(e) &&
              /^[\x00-\x7F]*$/.test(e)
            );
          } catch {
            return !1;
          }
        }, "url must be a valid ASCII ws:// or wss:// URL with no userinfo or whitespace"),
      protocols: v(
        s().regex(
          /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,
          "protocol must be an RFC 6455 token",
        ),
      )
        .refine((e) => new Set(e).size === e.length, "protocols must be unique")
        .optional(),
    }).describe(
      "WebSocket to open. Each text frame is an event; binary frames are reported as a placeholder line. Socket close ends the watch. Cannot be combined with command.",
    );
function ae() {
  return {
    description: s().describe(
      "Short human-readable description of what you are monitoring (shown in notifications).",
    ),
    timeout_ms: T()
      .min(1000)
      .optional()
      .default(j)
      .describe(
        `Kill the monitor after this deadline. Default ${j}ms, max ${H}ms. Ignored when persistent is true.`,
      ),
    persistent: O()
      .optional()
      .default(!1)
      .describe(
        "Run for the lifetime of the session (no timeout). Use for session-length watches like PR monitoring or log tails. Stop with TaskStop.",
      ),
  };
}
var ce = { message: `timeout_ms must be \u2264 ${H}`, path: ["timeout_ms"] };
function le(e) {
  return e.persistent || e.timeout_ms <= H;
}
function q(e) {
  if (!a.CLAUDE_CODE_REMOTE)
    return { timeout_ms: e.timeout_ms, persistent: e.persistent };
  return {
    timeout_ms: e.persistent ? B : Math.min(e.timeout_ms, B),
    persistent: !1,
  };
}
function ue(...e) {
  return countMatching(e, Boolean) === 1;
}
var me = createLazyValue(() =>
  Qe({ ...ae(), command: se().optional().describe(ne), ws: ie().optional() })
    .refine((e) => ue(e.command, e.ws), "exactly one of command or ws")
    .refine(le, ce),
);
var de = createLazyValue(() =>
  c({
    taskId: s().describe("ID of the background monitor task."),
    timeoutMs: T().describe(
      "Timeout deadline in milliseconds (0 when persistent).",
    ),
    persistent: O()
      .optional()
      .describe("No timeout \u2014 runs until TaskStop or session end."),
  }),
);
function pe(e) {
  let t = resolveToolUseAgentId(e);
  if (t !== void 0 && isAgentStopPending(t))
    throw Error(
      "This agent has been stopped and its stop is still completing; it cannot start monitors.",
    );
}
async function fe(e, t, o, u) {
  let { description: h } = t,
    { timeout_ms: w, persistent: M } = q(t),
    { abortController: k, toolUseId: P, taskRegistry: p } = o,
    f = resolveToolUseAgentId(o),
    r = {},
    W = createMonitorEventGate({
      description: h,
      agentId: f,
      taskRef: r,
      killTask: () => {
        if (!r.id) return !1;
        return (killLocalShellTask(r.id, p), !0);
      },
    }),
    C = await executeShellCommand(e, k.signal, "bash", {
      session: o.session,
      owningAgentId: f,
      preventCwdChanges: !0,
      shouldUseSandbox: shouldUseSandbox({ command: e }),
      sandboxAttributionId: P,
      attributionMessageId: u?.message.id,
      onStdout: W.onData,
      agentWorktree: o.agentWorktree,
      isolationRoot: getAgentWorktreePath(o),
      sessionEnvVars: o.sessionEnvVars,
      storageV5: o.storageV5,
    });
  if (C.status === "completed") {
    let A = await C.result;
    if (A.preSpawnError)
      throw new R(
        A.preSpawnError,
        "Monitor: pre-spawn error (cwd/argv redacted)",
      );
  }
  if (C.status === "killed" && f !== void 0 && isAgentStopPending(f))
    throw Error(
      "This agent has been stopped and its stop is still completing; it cannot start monitors.",
    );
  let I = await startBackgroundShellTask(
    {
      command: e,
      description: h,
      shellCommand: C,
      toolUseId: P,
      agentId: f,
      kind: "monitor",
    },
    { abortController: k, taskRegistry: p },
  );
  ((r.id = I.taskId), addKeepaliveReason(f, `monitor:${I.taskId}`, p));
  let D = M
    ? void 0
    : setTimeout(
        (A, g, E, x, _) => {
          if (A.isKilled()) return;
          (sendMonitorEventNotification(g, "[Monitor timed out \u2014 re-arm if needed.]", E, {
            isHousekeeping: !0,
            agentId: x,
          }),
            killLocalShellTask(E, _));
        },
        w,
        W,
        h,
        I.taskId,
        f,
        p,
      );
  return (
    C.result.then(() => {
      if (D) clearTimeout(D);
      (W.finish(), removeKeepaliveReason(f, `monitor:${I.taskId}`, p));
    }),
    { data: { taskId: I.taskId, timeoutMs: M ? 0 : w, persistent: M } }
  );
}
function wsEgressDenyReason(e) {
  if (!isPolicyAllowed("allow_web_fetch"))
    return {
      kind: "compliance",
      host: "",
      detail:
        "arbitrary-URL egress is disabled by your organization's compliance policy",
    };
  let t = new URL(e),
    o = z(t.hostname);
  if (isIP(o) && isPrivateOrReservedIpAddress(o))
    return {
      kind: "ssrf",
      host: o,
      detail:
        "the address is in a private, link-local, or cloud-metadata range",
    };
  let u = t.port !== "" ? Number(t.port) : t.protocol === "wss:" ? 443 : 80,
    h = isHostAllowedBySandboxNetworkPolicy(o, u);
  if (!h.allowed) return { kind: "sandbox-policy", host: o, detail: h.reason };
  return null;
}
function he(e) {
  let t = wsEgressDenyReason(e.url);
  if (t !== null)
    return {
      behavior: "deny",
      message:
        t.kind === "compliance"
          ? `Monitor cannot open a WebSocket: ${t.detail}.`
          : `Monitor cannot open a WebSocket to ${t.host}: ${t.detail}.`,
      decisionReason: {
        type: "other",
        reason:
          t.kind === "compliance"
            ? "compliance taint disables model-chosen URL egress"
            : t.kind === "ssrf"
              ? "SSRF-blocked address range"
              : t.detail,
      },
    };
  let o =
    e.protocols !== void 0 && e.protocols.length > 0
      ? ` (subprotocols: ${formatSubprotocolList(e.protocols)})`
      : "";
  return {
    behavior: "ask",
    message: `Monitor will open a WebSocket to ${e.url}${o}`,
    suggestions: [],
  };
}
var be = {
    name: MONITOR_TOOL_NAME,
    enablesCodeExecution: !0,
    maxResultSizeChars: 1e4,
    shouldDefer: !0,
    permissionCheckFailureDecision(e, t) {
      return getBashCommandClampCrashDeny(MONITOR_TOOL_NAME, t);
    },
    userFacingName() {
      return "Monitor";
    },
    getToolUseSummary(e) {
      if (!e?.description) return null;
      return truncate(e.description, TOOL_USE_SUMMARY_MAX_CHARS);
    },
    getActivityDescription(e) {
      return e?.description ? `Monitoring: ${e.description}` : "Monitoring";
    },
    isEnabled() {
      return isMonitorToolEnabled() && isBashToolAvailable();
    },
    isConcurrencySafe() {
      return !0;
    },
    renderToolUseMessage(e) {
      if (!e.description) return null;
      return e.description;
    },
    get outputSchema() {
      return de();
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return {
        tool_use_id: t,
        type: "tool_result",
        content: `Monitor started (task ${e.taskId}, ${e.persistent ? "persistent \u2014 runs until TaskStop or session end" : `timeout ${e.timeoutMs}ms`}). You will be notified on each event. Keep working \u2014 do not poll or sleep. Events may arrive while you are waiting for the user \u2014 an event is not their reply.`,
      };
    },
  },
  MonitorTool = buildTool({
    ...be,
    searchHint:
      "watch, monitor, or keep an eye on a process/log/command or WebSocket \u2014 stream each stdout line as a live notification",
    async description() {
      return getMonitorToolDescription() + MONITOR_WS_SOURCE_HELP + getMonitorPushNotificationHint();
    },
    async prompt() {
      return getMonitorToolDescription() + MONITOR_WS_SOURCE_HELP + getMonitorPushNotificationHint();
    },
    get inputSchema() {
      return me();
    },
    toAutoClassifierInput(e) {
      return e.ws ? `websocket ${e.ws.url}${formatSubprotocolSuffix(e.ws)}` : (e.command ?? "");
    },
    async checkPermissions(e, t) {
      if (e.ws) {
        let o = getBashCommandClampSurfaceDeny("Monitor websocket", t);
        if (o !== void 0) return o;
        return he(e.ws);
      }
      return checkBashCommandPermissions({ ...e, command: e.command }, t);
    },
    async call(e, t, o, u) {
      if ((pe(t), e.ws)) return startWebSocketMonitor({ ...e, ...q(e), ws: e.ws }, pickToolInvocationContext(t));
      return fe(e.command, e, t, u);
    },
  });
export { MonitorWsPreconditionError, normalizeWebSocketUrlScheme, HANDSHAKE_TIMEOUT_DETAIL, parseUpgradeRejectDetail, pickToolInvocationContext, startWebSocketMonitor, wsEgressDenyReason, MonitorTool };
