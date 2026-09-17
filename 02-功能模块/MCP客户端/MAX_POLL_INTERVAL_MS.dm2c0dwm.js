// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 198 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { K, ze, Lx } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { le, nt, uv, Cu } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { escapeHtmlText } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { formatErrorWithCode, formatConnectionError } from "../认证-OAuth登录/url-and-error-redaction.js";
import { TaskStatusNotificationSchema, CallToolResultSchema } from "./chunk-tv3jbp8f.js";
import { getSessionProjectDir, writeMcpTaskMetadata, deleteMcpTaskMetadata, listMcpTaskMetadata } from "./mcp-task-metadata.js";
import { enqueuePendingNotification, buildTaskNotification, MAX_CONTENT_BYTES, persistBinaryContent, formatBinaryContentSavedMessage, MCP_TASK_CANCEL_TIMEOUT_MS, isMcpTasksEnabled } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getMaxOutputChars, maybeTruncateOutput } from "../../01-核心基础设施/共享小工具-未细化/mcp-output-truncation.js";
import { collectResourceLinks } from "../../01-核心基础设施/共享小工具-未细化/mcp-tool-result-fields.js";
import { formatMcpServerToolLabel } from "../../01-核心基础设施/共享小工具-未细化/mcp-task-record.js";
import { createPendingTask } from "../Teammates团队/chunk-mrfx53ye.js";
import { asMcpSdkClient } from "../../01-核心基础设施/共享小工具-未细化/mcp-client-type-casts.js";
import { shortenMcpTaskId } from "./mcp-task-id.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
var W = 2000,
  MIN_POLL_INTERVAL_MS = 100,
  MAX_POLL_INTERVAL_MS = 60000,
  X = 10,
  R = 30000;
async function C(e, t) {
  try {
    await (t ? deleteMcpTaskMetadata(e, t) : deleteMcpTaskMetadata(e));
  } catch (a) {
    logForDebugging(`removeMcpTaskMetadata failed: ${String(a)}`);
  }
}
async function w(e, t, a, s, r) {
  try {
    (await a, await deleteMcpTaskMetadata(e, t, s, r));
  } catch (u) {
    logForDebugging(`removeWatcherSidecar failed: ${String(u)}`);
  }
}
function N(e) {
  return e === "completed" || e === "failed" || e === "cancelled";
}
function L({ taskRegistry: e, registryId: t, registered: a }) {
  let s = e.get(t);
  return s === void 0 ? a : s.status !== "running";
}
var A = new WeakMap();
function G(e, t, a) {
  let s = A.get(e);
  if (!s)
    ((s = new Map()),
      A.set(e, s),
      e.setNotificationHandler(TaskStatusNotificationSchema, (r) => {
        A.get(e)?.get(r.params.taskId)?.(
          r.params.status,
          r.params.statusMessage,
        );
      }));
  return (
    s.set(t, a),
    () => {
      s.delete(t);
    }
  );
}
var Y = createLazyValue(() =>
    uv([
      nt({ data: le(), mimeType: le().optional() }),
      nt({
        source: nt({
          type: Cu("base64"),
          data: le(),
          media_type: le().optional(),
        }),
      }),
      nt({ resource: nt({ blob: le(), mimeType: le().optional() }) }),
    ]),
  ),
  V = createLazyValue(() => nt({ resource: nt({ uri: le().optional(), text: le() }) })),
  J = createLazyValue(() =>
    nt({
      type: Cu("resource_link"),
      name: le(),
      uri: le(),
      description: le().optional(),
    }),
  );
async function mcpContentToNotificationText(e, t, a, s = MAX_CONTENT_BYTES) {
  let r;
  if (typeof e === "string") r = e;
  else {
    let u = [];
    for (let i of e ?? []) {
      let { text: c, bytesPersisted: p } = await te(i, s, t);
      ((s -= p), u.push(c));
    }
    r = u.join(`
`);
  }
  try {
    let u = await maybeTruncateOutput(r, a),
      i = typeof u === "string" ? u : r,
      c = getMaxOutputChars();
    if (i === r && (r.length > c || escapeHtmlText(r).length > c)) i = D(r, c);
    if (i === r) return { text: r };
    if (r.length > s)
      return {
        text: i,
        savedHint:
          "[The portion truncated above was not saved: the per-result persist budget is exhausted.]",
      };
    let p = `mcp-task-result-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      l = await persistBinaryContent(Buffer.from(r, "utf8"), "text/plain", p, void 0, t);
    if ("error" in l) return { text: i };
    s -= l.size;
    let o = getCurrentPlatform() === "windows" ? "python" : "python3",
      g = l.filepath.replaceAll("\\", "/").replaceAll("'", "'\\''"),
      T = ee(r)
        ? "use Read to retrieve the portion truncated above"
        : `its lines are too long for Read's offset/limit \u2014 slice by character range via Bash instead, e.g. ${o} -c 'print(open("${g}").read()[A:B])' in ~${H.toLocaleString()}-char spans`;
    return {
      text: i,
      savedHint: `[The complete ${r.length}-character output was saved to ${l.filepath}; ${T}.]`,
    };
  } catch {
    return { text: truncateToCodeUnits(r, getMaxOutputChars()) };
  }
}
var H = 80000;
function ee(e) {
  let t = 0,
    a = 0;
  for (;;) {
    let s = e.indexOf(
      `
`,
      t,
    );
    if ((s === -1 ? e.length : s) - t > H) return !1;
    if (s === -1) return a > 0;
    (a++, (t = s + 1));
  }
}
async function te(e, t, a) {
  if (e.type === "text" && typeof e.text === "string")
    return { text: e.text, bytesPersisted: 0 };
  let s = Y().safeParse(e);
  if (!s.success) {
    let i = V().safeParse(e);
    if (i.success) {
      let { uri: p, text: l } = i.data.resource;
      return { text: p ? `[Resource at ${p}] ${l}` : l, bytesPersisted: 0 };
    }
    let c = J().safeParse(e);
    if (c.success) {
      let { name: p, uri: l, description: o } = c.data;
      return {
        text: `[Resource link: ${p}] ${l}${o ? ` (${o})` : ""}`,
        bytesPersisted: 0,
      };
    }
    return { text: `[${e.type}]`, bytesPersisted: 0 };
  }
  let r =
      "source" in s.data
        ? { data: s.data.source.data, mimeType: s.data.source.media_type }
        : "resource" in s.data
          ? { data: s.data.resource.blob, mimeType: s.data.resource.mimeType }
          : { data: s.data.data, mimeType: s.data.mimeType },
    u = (r.data.length * 3) / 4;
  if (u > MAX_CONTENT_BYTES)
    return { text: `[${e.type} content too large to save]`, bytesPersisted: 0 };
  if (u > t)
    return {
      text: `[${e.type} content skipped: per-result persist budget exhausted]`,
      bytesPersisted: 0,
    };
  try {
    let i = `mcp-task-result-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      c = await persistBinaryContent(Buffer.from(r.data, "base64"), r.mimeType, i, void 0, a);
    if ("error" in c)
      return {
        text: `[${e.type} content (${r.mimeType ?? "unknown type"}) could not be saved to disk: ${c.error}]`,
        bytesPersisted: 0,
      };
    return {
      text: formatBinaryContentSavedMessage(c.filepath, r.mimeType, c.size, `[${e.type} result] `),
      bytesPersisted: c.size,
    };
  } catch (i) {
    return (
      logForDebugging(`persisting MCP task result block failed: ${String(i)}`, {
        level: "error",
      }),
      { text: `[${e.type}]`, bytesPersisted: 0 }
    );
  }
}
var B = 1e4,
  se = /[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu;
function boundMcpStatusMessage(e) {
  if (e === void 0) return;
  let t = e.replace(se, " ").replace(/ {2,}/g, " ").trim();
  if (t === "") return;
  return t.length > B ? `${truncateToCodeUnits(t, B)}\u2026 [truncated]` : t;
}
function buildMcpTaskNotification(e) {
  let a = `MCP task ${shortenMcpTaskId(e.mcpTaskId)} (${formatMcpServerToolLabel(e.serverName, e.toolName)}) ${e.status}.`,
    s = boundMcpStatusMessage(e.statusMessage) ?? "no detail",
    r =
      e.status === "completed"
        ? (e.resultText ?? "")
        : e.status === "failed"
          ? `Task failed: ${s}`
          : e.statusMessage !== void 0
            ? `Task cancelled: ${s}`
            : "Task was cancelled by the server.",
    u = e.resultHint
      ? `

${escapeHtmlText(e.resultHint)}`
      : "";
  return buildTaskNotification({
    taskId: e.registryId,
    status: e.status,
    summary: escapeHtmlText(a),
    body: `
<result>
${re(r, getMaxOutputChars() - u.length)}${u}
</result>`,
  });
}
function re(e, t) {
  let a = escapeHtmlText(e);
  if (a.length <= t) return a;
  return escapeHtmlText(D(e, t));
}
function D(e, t) {
  let s = Math.max(0, Math.floor(e.length * (t / escapeHtmlText(e).length)));
  for (;;) {
    let r = truncateToCodeUnits(e, s);
    if (escapeHtmlText(r).length + 13 <= t || s === 0) return r + "\u2026 [truncated]";
    s = Math.floor(s * 0.9);
  }
}
function startMcpTaskWatcher(e) {
  return ne(e).catch((t) => logError(t));
}
async function ne({
  client: e,
  taskRegistry: t,
  taskState: a,
  pollIntervalMs: s,
  storageV5: r,
  credentials: u,
}) {
  let { id: i, mcpTaskId: c, serverName: p, toolName: l } = a,
    { mcpStatus: o, statusMessage: g } = a,
    T = t.get(i) !== void 0,
    v = K(),
    b = getSessionProjectDir(),
    I = writeMcpTaskMetadata(
      i,
      {
        taskId: i,
        serverName: p,
        toolName: l,
        mcpTaskId: c,
        pollIntervalMs: s,
        spawnedAt: a.startTime,
        toolUseId: a.toolUseId,
      },
      r,
    ).catch((k) => logForDebugging(`writeMcpTaskMetadata ${i}: ${String(k)}`));
  if (t.get(i)?.status === "running")
    t.update(i, (k) => ({
      ...k,
      sidecarWrite: I,
      sidecarSessionId: v,
      sidecarProjectDir: b,
    }));
  let E = (k, M) => {
      let d = boundMcpStatusMessage(M);
      if (k === o && d === g) return;
      if (N(o) && !N(k)) return;
      ((o = k),
        (g = d),
        t.update(i, (U) => ({ ...U, mcpStatus: k, statusMessage: d })));
    },
    F = G(e, c, E),
    O = Math.min(Math.max(s ?? W, MIN_POLL_INTERVAL_MS), MAX_POLL_INTERVAL_MS),
    _ = 0,
    x;
  try {
    while (!N(o)) {
      if (o === "input_required")
        try {
          await e.experimental.tasks.getTaskResult(c, CallToolResultSchema);
        } catch (d) {
          logForDebugging(`mcp task ${c} getTaskResult during input_required: ${formatErrorWithCode(d)}`);
        }
      if ((await sleep(O), L({ taskRegistry: t, registryId: i, registered: T }))) {
        (e.experimental.tasks
          .cancelTask(c, { signal: AbortSignal.timeout(MCP_TASK_CANCEL_TIMEOUT_MS) })
          .catch((d) => logForDebugging(`mcp task ${c} cancel after kill: ${formatErrorWithCode(d)}`)),
          w(i, r, I, v, b));
        return;
      }
      try {
        let d = await e.experimental.tasks.getTask(c);
        ((_ = 0), E(d.status, d.statusMessage));
      } catch (d) {
        if ((_++, logForDebugging(`mcp task ${c} poll failed: ${formatErrorWithCode(d)}`), _ >= X)) {
          ((o = "failed"),
            (g = boundMcpStatusMessage(`Task polling failed repeatedly: ${formatErrorWithCode(d)}`)),
            (x = "poll_failed_repeatedly"));
          break;
        }
      }
    }
    let k, M;
    if (o === "completed")
      try {
        let d = await e.experimental.tasks.getTaskResult(c, CallToolResultSchema);
        if (d.isError !== !0) M = collectResourceLinks(d.content);
        k = await mcpContentToNotificationText(d.content ?? [], r, u);
      } catch (d) {
        ((o = "failed"),
          (g = boundMcpStatusMessage(`Failed to fetch task result: ${formatErrorWithCode(d)}`)),
          (x = "result_fetch_failed"));
      }
    if (L({ taskRegistry: t, registryId: i, registered: T })) {
      (e.experimental.tasks
        .cancelTask(c, { signal: AbortSignal.timeout(MCP_TASK_CANCEL_TIMEOUT_MS) })
        .catch((d) => logForDebugging(`mcp task ${c} cancel after kill: ${formatErrorWithCode(d)}`)),
        w(i, r, I, v, b));
      return;
    }
    if (o === "completed") logFeatureOk("mcp_task_complete");
    else if (o === "cancelled") logFeatureBad("mcp_task_complete", "cancelled_by_server");
    else logFeatureBad("mcp_task_complete", x ?? "failed");
    (t.update(i, (d) => ({
      ...d,
      status: o === "completed" ? "completed" : "failed",
      mcpStatus: o,
      statusMessage: g,
      endTime: Date.now(),
      notified: !0,
      terminal: {
        summary: g ?? `${formatMcpServerToolLabel(p, l)} ${o}`,
        ...(M && { resource_links: M }),
      },
    })),
      w(i, r, I, v, b),
      enqueuePendingNotification(
        {
          value: buildMcpTaskNotification({
            registryId: i,
            mcpTaskId: c,
            serverName: p,
            toolName: l,
            status: o,
            resultText: k?.text,
            resultHint: k?.savedHint,
            statusMessage: g,
          }),
          mode: "task-notification",
          skipAttachments: !0,
          agentId: ze(),
          priority: "next",
          taskId: i,
        },
        { turnAttribution: "inherit" },
      ));
  } finally {
    F();
  }
}
async function restoreMcpTasks(e) {
  if (!isMcpTasksEnabled()) return;
  let t;
  try {
    t = await listMcpTaskMetadata(e.storageV5);
  } catch (a) {
    (logFeatureBad("mcp_task_restore", "list_failed"),
      logForDebugging(`restoreMcpTasks list failed: ${String(a)}`));
    return;
  }
  for (let a of t) {
    if (a.protocol === "sep2663") {
      logForDebugging(
        `restoreMcpTasks: sep2663 sidecar ${a.taskId} needs the v2 runtime; parked`,
      );
      continue;
    }
    if (a.protocol !== void 0) {
      logForDebugging(
        `restoreMcpTasks: sidecar ${a.taskId} has unknown protocol '${a.protocol}'; parked`,
        { level: "error" },
      );
      continue;
    }
    ie(a, e).catch((s) => logForDebugging(`restoreMcpTasks ${a.taskId}: ${formatErrorWithCode(s)}`));
  }
  logFeatureOk("mcp_task_restore");
}
async function ie(
  e,
  { taskRegistry: t, getMcpClients: a, storageV5: s, credentials: r },
) {
  let u = t.get(e.taskId);
  if (
    u?.type === "mcp_task" &&
    u.status === "running" &&
    u.sidecarWrite !== void 0
  )
    return;
  let i = {
    ...createPendingTask(e.taskId, "mcp_task", formatMcpServerToolLabel(e.serverName, e.toolName), e.toolUseId),
    type: "mcp_task",
    status: "running",
    serverName: e.serverName,
    toolName: e.toolName,
    mcpTaskId: e.mcpTaskId,
    mcpStatus: "working",
    statusMessage: "reconnecting\u2026",
    pollIntervalMs: e.pollIntervalMs,
    startTime: e.spawnedAt,
  };
  t.register(i);
  let c = Date.now() + R,
    p,
    l;
  while (Date.now() < c) {
    if (t.get(e.taskId)?.status === "killed") {
      C(e.taskId, s);
      return;
    }
    let o = a().find((g) => g.name === e.serverName);
    if (o?.type === "connected") {
      p = asMcpSdkClient(o.client);
      break;
    }
    if (o?.type === "cached") {
      let g = Lx();
      if (!g) {
        l = `server '${e.serverName}' has no MCP session wired`;
        break;
      }
      try {
        p = asMcpSdkClient(
          (
            await g(o, {
              timeoutMs: Math.max(0, c - Date.now()),
              context: "MCP task restore",
            })
          ).client,
        );
        break;
      } catch (T) {
        l = `server '${e.serverName}' failed to connect: ${formatConnectionError(T, o.config)}`;
        break;
      }
    }
    if (
      o?.type === "failed" ||
      o?.type === "disabled" ||
      o?.type === "needs-auth"
    ) {
      l = `server '${e.serverName}' is ${o.type}`;
      break;
    }
    await sleep(500);
  }
  if (!p) {
    l ??= `server '${e.serverName}' did not connect within ${R / 1000}s`;
    let o = boundMcpStatusMessage(l) ?? "no detail",
      g = !1;
    if (
      (t.update(e.taskId, (T) => {
        if (T.notified || T.status !== "running") return T;
        return (
          (g = !0),
          {
            ...T,
            status: "failed",
            mcpStatus: "failed",
            statusMessage: o,
            endTime: Date.now(),
            notified: !0,
            terminal: { summary: o },
          }
        );
      }),
      C(e.taskId, s),
      !g)
    )
      return;
    enqueuePendingNotification({
      value: buildMcpTaskNotification({
        registryId: e.taskId,
        mcpTaskId: e.mcpTaskId,
        serverName: e.serverName,
        toolName: e.toolName,
        status: "failed",
        statusMessage: `Could not reconnect after resume: ${l}`,
      }),
      mode: "task-notification",
      agentId: ze(),
      priority: "next",
      skipAttachments: !0,
      taskId: e.taskId,
    });
    return;
  }
  if (t.get(e.taskId)?.status !== "running") {
    (C(e.taskId, s),
      p.experimental.tasks
        .cancelTask(e.mcpTaskId, { signal: AbortSignal.timeout(MCP_TASK_CANCEL_TIMEOUT_MS) })
        .catch((o) =>
          logForDebugging(`mcp task ${e.mcpTaskId} cancel after kill: ${formatErrorWithCode(o)}`),
        ));
    return;
  }
  startMcpTaskWatcher({
    client: p,
    taskRegistry: t,
    taskState: i,
    pollIntervalMs: e.pollIntervalMs,
    storageV5: s,
    credentials: r,
  });
}
export {
  MAX_POLL_INTERVAL_MS,
  MIN_POLL_INTERVAL_MS,
  boundMcpStatusMessage,
  buildMcpTaskNotification,
  mcpContentToNotificationText,
  restoreMcpTasks,
  startMcpTaskWatcher,
};
