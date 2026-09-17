// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { ge, Po } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError as h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { $ar } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { writeFileSync as k } from "fs";
import { readdir as U, readFile as R, writeFile as C } from "fs/promises";
import { join as w } from "path";
import { getHeapSpaceStatistics as D, getHeapStatistics as M } from "v8";
async function T(u, a = 0) {
  let t = process.memoryUsage(),
    e = M(),
    o = process.resourceUsage(),
    m = process.uptime(),
    l;
  try {
    l = D();
  } catch {}
  let d = process._getActiveHandles().length,
    f = process._getActiveRequests().length,
    s;
  try {
    s = (await U("/proc/self/fd")).length;
  } catch {}
  let c;
  try {
    c = await R("/proc/self/smaps_rollup", "utf8");
  } catch {}
  let g, _, v;
  try {
    let { heapStats: p } = await import("bun:jsc"),
      S = p(!0);
    ((g = S.objectTypeCounts),
      (_ = S.protectedObjectTypeCounts),
      (v = S.mimalloc || void 0));
  } catch {}
  let x = t.rss - t.heapUsed,
    H = m > 0 ? t.rss / m : 0,
    y = (H * 3600) / 1048576,
    r = [];
  if (e.number_of_detached_contexts > 0)
    r.push(
      `${e.number_of_detached_contexts} detached context(s) - possible iframe/context leak`,
    );
  if (d > 100) r.push(`${d} active handles - possible timer/socket leak`);
  if (x > t.heapUsed)
    r.push(
      "Native memory > heap - leak may be in native addons (node-pty, sharp, etc.)",
    );
  if (y > 100) r.push(`High memory growth rate: ${y.toFixed(1)} MB/hour`);
  if (s && s > 500)
    r.push(`${s} open file descriptors - possible file/socket leak`);
  return {
    timestamp: new Date().toISOString(),
    sessionId: K(),
    trigger: u,
    dumpNumber: a,
    uptimeSeconds: m,
    memoryUsage: {
      heapUsed: t.heapUsed,
      heapTotal: t.heapTotal,
      external: t.external,
      arrayBuffers: t.arrayBuffers,
      rss: t.rss,
    },
    memoryGrowthRate: { bytesPerSecond: H, mbPerHour: y },
    v8HeapStats: {
      heapSizeLimit: e.heap_size_limit,
      mallocedMemory: e.malloced_memory,
      peakMallocedMemory: e.peak_malloced_memory,
      detachedContexts: e.number_of_detached_contexts,
      nativeContexts: e.number_of_native_contexts,
    },
    v8HeapSpaces: l?.map((p) => ({
      name: p.space_name,
      size: p.space_size,
      used: p.space_used_size,
      available: p.space_available_size,
    })),
    resourceUsage: {
      maxRSS: o.maxRSS * (P() === "macos" ? 1 : 1024),
      userCPUTime: o.userCPUTime,
      systemCPUTime: o.systemCPUTime,
    },
    activeHandles: d,
    activeRequests: f,
    openFileDescriptors: s,
    analysis: {
      potentialLeaks: r,
      recommendation:
        r.length > 0
          ? `WARNING: ${r.length} potential leak indicator(s) found. See potentialLeaks array.`
          : "No obvious leak indicators. Check heap snapshot for retained objects.",
    },
    smapsRollup: c,
    objectTypeCounts: g,
    protectedObjectTypeCounts: _,
    mimalloc: v,
    platform: "darwin",
    nodeVersion: process.version,
    ccVersion: {
      ISSUES_EXPLAINER:
        "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.263",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-06T01:08:56Z",
      GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
      HOOKS_WORKER_URL:
        "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "darwin",
    }.VERSION,
  };
}
async function performHeapDump(u = "manual", a = 0) {
  try {
    let t = K(),
      e = await T(u, a),
      o = (g) => (g / 1024 / 1024 / 1024).toFixed(3);
    n(`[HeapDump] Memory state:
  heapUsed: ${o(e.memoryUsage.heapUsed)} GB (in snapshot)
  external: ${o(e.memoryUsage.external)} GB (NOT in snapshot)
  rss: ${o(e.memoryUsage.rss)} GB (total process)
  ${e.analysis.recommendation}`);
    let m = await $ar();
    await ae().mkdir(m);
    let l = a > 0 ? `-dump${a}` : "",
      d = `${t}${l}.heapsnapshot`,
      f = `${t}${l}-diagnostics.json`,
      s = w(m, d),
      c = w(m, f);
    return (
      await C(c, b(e, null, 2), { mode: 384 }),
      n(`[HeapDump] Diagnostics written to ${c}`),
      await j(s),
      n(`[HeapDump] Heap dump written to ${s}`),
      i("tengu_heap_dump", {
        triggerManual: !0,
        triggerAuto15GB: !1,
        dumpNumber: a,
        success: !0,
      }),
      { success: !0, heapPath: s, diagPath: c, diagnostics: e }
    );
  } catch (t) {
    let e = ge(t);
    if (Po(e))
      n(`[HeapDump] Failed to write dump: ${e.message}`, { level: "error" });
    else h(e);
    return (
      i("tengu_heap_dump", {
        triggerManual: !0,
        triggerAuto15GB: !1,
        dumpNumber: a,
        success: !1,
      }),
      { success: !1, error: e.message }
    );
  }
}
async function j(u) {
  (k(u, Bun.generateHeapSnapshot("v8", "arraybuffer"), { mode: 384 }),
    Bun.gc(!0));
}
export { performHeapDump };
