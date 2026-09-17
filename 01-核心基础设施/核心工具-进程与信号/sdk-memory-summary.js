// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../共享小工具-未细化/analytics-event-queue.js";
import { registerCleanup } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isSimpleMode } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { isSdkEntrypoint } from "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import { readFileSync } from "fs";
function registerMemoryAttributor(t, e) {
  n().registerAttributor(t, e);
}
var c = ["bash_shell", "mcp_stdio", "lsp", "other"];
class m {
  attributors = new Map();
  childProcesses = new Map();
  childRegisteredCount = 0;
  pageSizeBytes = void 0;
  installed = !1;
  emitted = !1;
  unregisterCleanup = void 0;
  registerAttributor(t, e) {
    this.attributors.set(t, e);
  }
  registerChild(t, e) {
    let s = this.childProcesses.get(e);
    if (s && !s.dead) return;
    (this.childRegisteredCount++,
      this.childProcesses.set(e, {
        kind: t,
        peakRssBytes: this.readChildRssBytes(e) ?? 0,
        dead: !1,
      }));
  }
  sampleChildPeaks() {
    if (this.childProcesses.size === 0) return;
    for (let [t, e] of this.childProcesses) {
      if (e.dead) continue;
      let s = this.readChildRssBytes(t);
      if (s === void 0) e.dead = !0;
      else if (s > e.peakRssBytes) e.peakRssBytes = s;
    }
  }
  readChildRssBytes(t) {
    return;
  }
  getPageSizeBytes() {
    if (this.pageSizeBytes !== void 0) return this.pageSizeBytes;
    try {
      let t = readFileSync("/proc/self/statm", "utf8"),
        e = Number(t.split(" ")[1]);
      this.pageSizeBytes =
        e > 0 ? Math.round(process.memoryUsage().rss / e) : 4096;
    } catch {
      this.pageSizeBytes = 4096;
    }
    return this.pageSizeBytes;
  }
  buildSummary(t) {
    let e = process.memoryUsage(),
      s = {
        uptime_s: Math.round(process.uptime()),
        final_rss_bytes: e.rss,
        final_heap_used_bytes: e.heapUsed,
        final_external_bytes: e.external,
        final_array_buffers_bytes: e.arrayBuffers,
        peak_rss_bytes: Math.max(t.rss, e.rss),
        peak_heap_used_bytes: Math.max(t.heapUsed, e.heapUsed),
        peak_external_bytes: Math.max(t.external, e.external),
        constrained_memory_bytes: process.constrainedMemory?.() || void 0,
      };
    for (let [r, l] of this.attributors)
      try {
        let d = l();
        if (((s[`attr_${r}_entries`] = d.entries), d.bytes !== void 0))
          s[`attr_${r}_bytes`] = d.bytes;
      } catch {}
    this.sampleChildPeaks();
    let a = 0,
      o = {};
    for (let r of this.childProcesses.values())
      ((a += r.peakRssBytes), (o[r.kind] = (o[r.kind] ?? 0) + r.peakRssBytes));
    ((s.child_count = this.childRegisteredCount),
      (s.child_rss_bytes_total = a));
    for (let r of c) if (o[r] !== void 0) s[`child_${r}_rss_bytes`] = o[r];
    return s;
  }
  emitSummaryOnce(t) {
    if (this.emitted) return;
    this.emitted = !0;
    try {
      logEvent("tengu_sdk_memory_summary", this.buildSummary(t()));
    } catch {}
  }
  installExitSummary(t) {
    if (this.installed) return;
    ((this.installed = !0),
      (this.unregisterCleanup = registerCleanup(() => this.emitSummaryOnce(t))));
  }
  reset() {
    ((this.installed = !1),
      (this.emitted = !1),
      this.unregisterCleanup?.(),
      (this.unregisterCleanup = void 0),
      this.attributors.clear(),
      this.childProcesses.clear(),
      (this.childRegisteredCount = 0));
  }
}
var h = new j(() => new m());
function n() {
  return h.of(B().host);
}
function registerChildProcess(t, e) {
  if (!isSdkEntrypoint() || isSimpleMode()) return;
  if (!Number.isFinite(e) || e <= 0) return;
  n().registerChild(t, e);
}
function markChildProcessExited(t) {
  let e = n().childProcesses.get(t);
  if (e) e.dead = !0;
}
function sampleChildProcessPeaks() {
  n().sampleChildPeaks();
}
function installMemorySummaryOnExit(t) {
  n().installExitSummary(t);
}
export { registerMemoryAttributor, registerChildProcess, markChildProcessExited, sampleChildProcessPeaks, installMemorySummaryOnExit };
