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
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Nt } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { mce, rPe, _Ge, $Se } from "./chunk-5wa92x7d.js";
import { formatErrorWithCode, formatConnectionError } from "../认证-OAuth登录/url-and-error-redaction.js";
import { getSessionProjectDir, writeMcpTaskMetadata, deleteMcpTaskMetadata, listMcpTaskMetadata } from "./mcp-task-metadata.js";
import { ha, zF, _a, hde, Dy, b3, Kde, xI } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
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
async function w(e, s) {
  try {
    await (s ? deleteMcpTaskMetadata(e, s) : deleteMcpTaskMetadata(e));
  } catch (i) {
    n(`removeMcpTaskMetadata failed: ${String(i)}`);
  }
}
async function x(e, s, i, t, r) {
  try {
    (await i, await deleteMcpTaskMetadata(e, s, t, r));
  } catch (p) {
    n(`removeWatcherSidecar failed: ${String(p)}`);
  }
}
function N(e) {
  return e === "completed" || e === "failed" || e === "cancelled";
}
function L({ taskRegistry: e, registryId: s, registered: i }) {
  let t = e.get(s);
  return t === void 0 ? i : t.status !== "running";
}
var A = new WeakMap();
function G(e, s, i) {
  let t = A.get(e);
  if (!t)
    ((t = new Map()),
      A.set(e, t),
      e.setNotificationHandler(
        "notifications/tasks/status",
        { params: rPe },
        (r) => {
          A.get(e)?.get(r.taskId)?.(r.status, r.statusMessage);
        },
      ));
  return (
    t.set(s, i),
    () => {
      t.delete(s);
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
  J = createLazyValue(() => nt({ resource: nt({ uri: le().optional(), text: le() }) })),
  Q = createLazyValue(() =>
    nt({
      type: Cu("resource_link"),
      name: le(),
      uri: le(),
      description: le().optional(),
    }),
  );
async function mcpContentToNotificationText(e, s, i, t = hde) {
  let r;
  if (typeof e === "string") r = e;
  else {
    let p = [];
    for (let a of e ?? []) {
      let { text: o, bytesPersisted: g } = await se(a, t, s);
      ((t -= g), p.push(o));
    }
    r = p.join(`
`);
  }
  try {
    let p = await maybeTruncateOutput(r, i),
      a = typeof p === "string" ? p : r,
      o = getMaxOutputChars();
    if (a === r && (r.length > o || Nt(r).length > o)) a = H(r, o);
    if (a === r) return { text: r };
    if (r.length > t)
      return {
        text: a,
        savedHint:
          "[The portion truncated above was not saved: the per-result persist budget is exhausted.]",
      };
    let g = `mcp-task-result-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      u = await Dy(Buffer.from(r, "utf8"), "text/plain", g, void 0, s);
    if ("error" in u) return { text: a };
    t -= u.size;
    let d = getCurrentPlatform() === "windows" ? "python" : "python3",
      c = u.filepath.replaceAll("\\", "/").replaceAll("'", "'\\''"),
      k = te(r)
        ? "use Read to retrieve the portion truncated above"
        : `its lines are too long for Read's offset/limit \u2014 slice by character range via Bash instead, e.g. ${d} -c 'print(open("${c}").read()[A:B])' in ~${j.toLocaleString()}-char spans`;
    return {
      text: a,
      savedHint: `[The complete ${r.length}-character output was saved to ${u.filepath}; ${k}.]`,
    };
  } catch {
    return { text: truncateToCodeUnits(r, getMaxOutputChars()) };
  }
}
var j = 80000;
function te(e) {
  let s = 0,
    i = 0;
  for (;;) {
    let t = e.indexOf(
      `
`,
      s,
    );
    if ((t === -1 ? e.length : t) - s > j) return !1;
    if (t === -1) return i > 0;
    (i++, (s = t + 1));
  }
}
async function se(e, s, i) {
  if (e.type === "text" && typeof e.text === "string")
    return { text: e.text, bytesPersisted: 0 };
  let t = Y().safeParse(e);
  if (!t.success) {
    let a = J().safeParse(e);
    if (a.success) {
      let { uri: g, text: u } = a.data.resource;
      return { text: g ? `[Resource at ${g}] ${u}` : u, bytesPersisted: 0 };
    }
    let o = Q().safeParse(e);
    if (o.success) {
      let { name: g, uri: u, description: d } = o.data;
      return {
        text: `[Resource link: ${g}] ${u}${d ? ` (${d})` : ""}`,
        bytesPersisted: 0,
      };
    }
    return { text: `[${e.type}]`, bytesPersisted: 0 };
  }
  let r =
      "source" in t.data
        ? { data: t.data.source.data, mimeType: t.data.source.media_type }
        : "resource" in t.data
          ? { data: t.data.resource.blob, mimeType: t.data.resource.mimeType }
          : { data: t.data.data, mimeType: t.data.mimeType },
    p = (r.data.length * 3) / 4;
  if (p > hde)
    return { text: `[${e.type} content too large to save]`, bytesPersisted: 0 };
  if (p > s)
    return {
      text: `[${e.type} content skipped: per-result persist budget exhausted]`,
      bytesPersisted: 0,
    };
  try {
    let a = `mcp-task-result-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      o = await Dy(Buffer.from(r.data, "base64"), r.mimeType, a, void 0, i);
    if ("error" in o)
      return {
        text: `[${e.type} content (${r.mimeType ?? "unknown type"}) could not be saved to disk: ${o.error}]`,
        bytesPersisted: 0,
      };
    return {
      text: b3(o.filepath, r.mimeType, o.size, `[${e.type} result] `),
      bytesPersisted: o.size,
    };
  } catch (a) {
    return (
      n(`persisting MCP task result block failed: ${String(a)}`, {
        level: "error",
      }),
      { text: `[${e.type}]`, bytesPersisted: 0 }
    );
  }
}
var B = 1e4,
  re = /[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu;
function boundMcpStatusMessage(e) {
  if (e === void 0) return;
  let s = e.replace(re, " ").replace(/ {2,}/g, " ").trim();
  if (s === "") return;
  return s.length > B ? `${truncateToCodeUnits(s, B)}\u2026 [truncated]` : s;
}
function buildMcpTaskNotification(e) {
  let i = `MCP task ${shortenMcpTaskId(e.mcpTaskId)} (${formatMcpServerToolLabel(e.serverName, e.toolName)}) ${e.status}.`,
    t = boundMcpStatusMessage(e.statusMessage) ?? "no detail",
    r =
      e.status === "completed"
        ? (e.resultText ?? "")
        : e.status === "failed"
          ? `Task failed: ${t}`
          : e.statusMessage !== void 0
            ? `Task cancelled: ${t}`
            : "Task was cancelled by the server.",
    p = e.resultHint
      ? `

${Nt(e.resultHint)}`
      : "";
  return _a({
    taskId: e.registryId,
    status: e.status,
    summary: Nt(i),
    body: `
<result>
${ne(r, getMaxOutputChars() - p.length)}${p}
</result>`,
  });
}
function ne(e, s) {
  let i = Nt(e);
  if (i.length <= s) return i;
  return Nt(H(e, s));
}
function H(e, s) {
  let t = Math.max(0, Math.floor(e.length * (s / Nt(e).length)));
  for (;;) {
    let r = truncateToCodeUnits(e, t);
    if (Nt(r).length + 13 <= s || t === 0) return r + "\u2026 [truncated]";
    t = Math.floor(t * 0.9);
  }
}
function startMcpTaskWatcher(e) {
  return ie(e).catch((s) => logError(s));
}
async function ie({
  client: e,
  taskRegistry: s,
  taskState: i,
  pollIntervalMs: t,
  storageV5: r,
  credentials: p,
}) {
  let { id: a, mcpTaskId: o, serverName: g, toolName: u } = i,
    { mcpStatus: d, statusMessage: c } = i,
    k = s.get(a) !== void 0,
    T = K(),
    b = getSessionProjectDir(),
    I = writeMcpTaskMetadata(
      a,
      {
        taskId: a,
        serverName: g,
        toolName: u,
        mcpTaskId: o,
        pollIntervalMs: t,
        spawnedAt: i.startTime,
        toolUseId: i.toolUseId,
      },
      r,
    ).catch((S) => n(`writeMcpTaskMetadata ${a}: ${String(S)}`));
  if (s.get(a)?.status === "running")
    s.update(a, (S) => ({
      ...S,
      sidecarWrite: I,
      sidecarSessionId: T,
      sidecarProjectDir: b,
    }));
  let E = (S, M) => {
      let l = boundMcpStatusMessage(M);
      if (S === d && l === c) return;
      if (N(d) && !N(S)) return;
      ((d = S),
        (c = l),
        s.update(a, (U) => ({ ...U, mcpStatus: S, statusMessage: l })));
    },
    q = G(e, o, E),
    O = Math.min(Math.max(t ?? W, MIN_POLL_INTERVAL_MS), MAX_POLL_INTERVAL_MS),
    _ = 0,
    C;
  try {
    while (!N(d)) {
      if (d === "input_required")
        try {
          await e.request(
            { method: "tasks/result", params: { taskId: o } },
            mce,
          );
        } catch (l) {
          n(`mcp task ${o} getTaskResult during input_required: ${formatErrorWithCode(l)}`);
        }
      if ((await sleep(O), L({ taskRegistry: s, registryId: a, registered: k }))) {
        (e
          .request({ method: "tasks/cancel", params: { taskId: o } }, $Se, {
            signal: AbortSignal.timeout(Kde),
          })
          .catch((l) => n(`mcp task ${o} cancel after kill: ${formatErrorWithCode(l)}`)),
          x(a, r, I, T, b));
        return;
      }
      try {
        let l = await e.request(
          { method: "tasks/get", params: { taskId: o } },
          _Ge,
        );
        ((_ = 0), E(l.status, l.statusMessage));
      } catch (l) {
        if ((_++, n(`mcp task ${o} poll failed: ${formatErrorWithCode(l)}`), _ >= X)) {
          ((d = "failed"),
            (c = boundMcpStatusMessage(`Task polling failed repeatedly: ${formatErrorWithCode(l)}`)),
            (C = "poll_failed_repeatedly"));
          break;
        }
      }
    }
    let S, M;
    if (d === "completed")
      try {
        let l = await e.request(
          { method: "tasks/result", params: { taskId: o } },
          mce,
        );
        if (l.isError !== !0) M = collectResourceLinks(l.content);
        S = await mcpContentToNotificationText(l.content ?? [], r, p);
      } catch (l) {
        ((d = "failed"),
          (c = boundMcpStatusMessage(`Failed to fetch task result: ${formatErrorWithCode(l)}`)),
          (C = "result_fetch_failed"));
      }
    if (L({ taskRegistry: s, registryId: a, registered: k })) {
      (e
        .request({ method: "tasks/cancel", params: { taskId: o } }, $Se, {
          signal: AbortSignal.timeout(Kde),
        })
        .catch((l) => n(`mcp task ${o} cancel after kill: ${formatErrorWithCode(l)}`)),
        x(a, r, I, T, b));
      return;
    }
    if (d === "completed") logFeatureOk("mcp_task_complete");
    else if (d === "cancelled") logFeatureBad("mcp_task_complete", "cancelled_by_server");
    else logFeatureBad("mcp_task_complete", C ?? "failed");
    (s.update(a, (l) => ({
      ...l,
      status: d === "completed" ? "completed" : "failed",
      mcpStatus: d,
      statusMessage: c,
      endTime: Date.now(),
      notified: !0,
      terminal: {
        summary: c ?? `${formatMcpServerToolLabel(g, u)} ${d}`,
        ...(M && { resource_links: M }),
      },
    })),
      x(a, r, I, T, b),
      ha(
        {
          value: buildMcpTaskNotification({
            registryId: a,
            mcpTaskId: o,
            serverName: g,
            toolName: u,
            status: d,
            resultText: S?.text,
            resultHint: S?.savedHint,
            statusMessage: c,
          }),
          mode: "task-notification",
          skipAttachments: !0,
          agentId: ze(),
          priority: "next",
          taskId: a,
        },
        { turnAttribution: "inherit" },
      ));
  } finally {
    q();
  }
}
async function restoreMcpTasks(e) {
  if (!xI()) return;
  let s;
  try {
    s = await listMcpTaskMetadata(e.storageV5);
  } catch (t) {
    (logFeatureBad("mcp_task_restore", "list_failed"),
      n(`restoreMcpTasks list failed: ${String(t)}`));
    return;
  }
  let i = s.filter((t) => t.protocol === "sep2663");
  for (let t of s) {
    if (t.protocol === "sep2663") continue;
    if (t.protocol !== void 0) {
      n(
        `restoreMcpTasks: sidecar ${t.taskId} has unknown protocol '${t.protocol}'; parked`,
        { level: "error" },
      );
      continue;
    }
    ce(t, e).catch((r) => n(`restoreMcpTasks ${t.taskId}: ${formatErrorWithCode(r)}`));
  }
  logFeatureOk("mcp_task_restore");
}
function D(e, s, i) {
  let t = e.getNegotiatedProtocolVersion?.(),
    r = t === void 0 ? void 0 : zF(t);
  return `server '${s}' ${i} on ${r ? `protocol revision ${r}` : "a modern-era protocol revision"}, which has no tasks support`;
}
async function ce(
  e,
  { taskRegistry: s, getMcpClients: i, storageV5: t, credentials: r },
) {
  let p = s.get(e.taskId);
  if (
    p?.type === "mcp_task" &&
    p.status === "running" &&
    p.sidecarWrite !== void 0
  )
    return;
  let a = {
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
  s.register(a);
  let o = Date.now() + R,
    g,
    u,
    d = "Could not reconnect after resume";
  while (Date.now() < o) {
    if (s.get(e.taskId)?.status === "killed") {
      w(e.taskId, t);
      return;
    }
    let c = i().find((k) => k.name === e.serverName);
    if (c?.type === "connected") {
      let k = asMcpSdkClient(c.client);
      if (k.getProtocolEra() === "modern") {
        ((u = D(k, e.serverName, "reconnected")),
          (d = "Task could not be resumed"));
        break;
      }
      g = k;
      break;
    }
    if (c?.type === "cached") {
      let k = Lx();
      if (!k) {
        u = `server '${e.serverName}' has no MCP session wired`;
        break;
      }
      try {
        let T = asMcpSdkClient(
          (
            await k(c, {
              timeoutMs: Math.max(0, o - Date.now()),
              context: "MCP task restore",
            })
          ).client,
        );
        if (T.getProtocolEra() === "modern") {
          ((u = D(T, e.serverName, "connected")),
            (d = "Task could not be resumed"));
          break;
        }
        g = T;
        break;
      } catch (T) {
        u = `server '${e.serverName}' failed to connect: ${formatConnectionError(T, c.config)}`;
        break;
      }
    }
    if (
      c?.type === "failed" ||
      c?.type === "disabled" ||
      c?.type === "needs-auth"
    ) {
      u = `server '${e.serverName}' is ${c.type}`;
      break;
    }
    await sleep(500);
  }
  if (!g) {
    u ??= `server '${e.serverName}' did not connect within ${R / 1000}s`;
    let c = boundMcpStatusMessage(u) ?? "no detail",
      k = !1;
    if (
      (s.update(e.taskId, (T) => {
        if (T.notified || T.status !== "running") return T;
        return (
          (k = !0),
          {
            ...T,
            status: "failed",
            mcpStatus: "failed",
            statusMessage: c,
            endTime: Date.now(),
            notified: !0,
            terminal: { summary: c },
          }
        );
      }),
      w(e.taskId, t),
      !k)
    )
      return;
    ha({
      value: buildMcpTaskNotification({
        registryId: e.taskId,
        mcpTaskId: e.mcpTaskId,
        serverName: e.serverName,
        toolName: e.toolName,
        status: "failed",
        statusMessage: `${d}: ${u}`,
      }),
      mode: "task-notification",
      agentId: ze(),
      priority: "next",
      skipAttachments: !0,
      taskId: e.taskId,
    });
    return;
  }
  if (s.get(e.taskId)?.status !== "running") {
    (w(e.taskId, t),
      g
        .request(
          { method: "tasks/cancel", params: { taskId: e.mcpTaskId } },
          $Se,
          { signal: AbortSignal.timeout(Kde) },
        )
        .catch((c) =>
          n(`mcp task ${e.mcpTaskId} cancel after kill: ${formatErrorWithCode(c)}`),
        ));
    return;
  }
  startMcpTaskWatcher({
    client: g,
    taskRegistry: s,
    taskState: a,
    pollIntervalMs: e.pollIntervalMs,
    storageV5: t,
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
