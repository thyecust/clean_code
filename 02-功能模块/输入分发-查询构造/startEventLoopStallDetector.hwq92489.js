// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 14 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { j } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { ws } from "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { XUn } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
var p = 200,
  T = 1000,
  M = 500,
  k = 5000,
  S = 50,
  d = 300000;
function h() {
  try {
    let t = process.resourceUsage();
    return {
      cpuTimeMs: (t.userCPUTime + t.systemCPUTime) / 1000,
      majorPageFaults: t.majorPageFault,
    };
  } catch (t) {
    return (
      n(
        `[event-loop-stall] process.resourceUsage() failed: ${t instanceof Error ? t.message : String(t)}`,
        { level: "error" },
      ),
      null
    );
  }
}
function v() {
  try {
    let t = process.memoryUsage();
    return {
      rss_mb: Math.round(t.rss / 1024 / 1024),
      heap_used_mb: Math.round(t.heapUsed / 1024 / 1024),
      ext_mb: Math.round(t.external / 1024 / 1024),
    };
  } catch (t) {
    return (
      n(
        `[event-loop-stall] process.memoryUsage() failed: ${t instanceof Error ? t.message : String(t)}`,
        { level: "error" },
      ),
      null
    );
  }
}
function g({
  prevWallMs: t,
  prevMonotonicMs: s,
  nowWallMs: o,
  nowMonotonicMs: e,
  intervalMs: l,
}) {
  let r = o - t,
    u = e - s,
    m = r - l,
    c = Math.round(u - l),
    f = m - c,
    _ = c > M;
  return {
    wallElapsedMs: r,
    wallDriftMs: m,
    monotonicStallMs: c,
    clockJumpMs: f,
    isStall: m > M || _,
    isMonotonicStall: _,
    likelySleep: m > k,
  };
}
function w({
  write: t,
  isMonotonicStall: s,
  prevMonotonicMs: o,
  nowMonotonicMs: e,
  intervalMs: l,
}) {
  if (!s || t === void 0 || t.endedMs < o) return { blocked_write: !1 };
  let r = o + l;
  return {
    blocked_write: t.startedMs <= r + S && t.endedMs >= e - S,
    last_write_ms: Math.round(t.endedMs - t.startedMs),
    last_write_bytes: t.bytes,
  };
}
function startEventLoopStallDetector(t) {
  y.of(t).start(a.CLAUDE_CODE_REMOTE ? T : p);
}
class b {
  timer = null;
  intervalMs = p;
  rssSampleTicks = d / p;
  lastTickMs = 0;
  lastTickMonotonicMs = 0;
  totalStalls = 0;
  totalStallDurationMs = 0;
  totalMonotonicStallMs = 0;
  tickCount = 0;
  lastResourceSample = null;
  sigcontSeen = !1;
  onSigcont = () => {
    this.sigcontSeen = !0;
  };
  afterTick = (t, s, o, e) => {
    let l = this.sigcontSeen;
    if (((this.sigcontSeen = !1), !t.isStall || s === null)) return;
    (n(
      `[event-loop-stall] blocked for ${t.monotonicStallMs}ms monotonic (wall drift ${t.wallDriftMs}ms, clock jump ${t.clockJumpMs}ms, expected ${this.intervalMs}ms). Total stalls: ${this.totalStalls}, cumulative: ${this.totalMonotonicStallMs}ms monotonic / ${this.totalStallDurationMs}ms wall${t.likelySleep ? " [likely sleep/wake]" : ""} blocked_write=${s.blocked_write}` +
        (s.last_write_ms !== void 0
          ? ` last_write=${s.last_write_ms}ms/${s.last_write_bytes}B`
          : "") +
        ` sigcont=${l}` +
        (o ? ` cpu=${o.cpu_delta_ms}ms majflt=${o.major_fault_delta}` : "") +
        (e
          ? ` rss=${e.rss_mb}MB heap=${e.heap_used_mb}MB ext=${e.ext_mb}MB`
          : ""),
      { level: "warn" },
    ),
      i("tengu_event_loop_stall", {
        stall_duration_ms: t.wallDriftMs,
        expected_interval_ms: this.intervalMs,
        actual_interval_ms: t.wallElapsedMs,
        monotonic_stall_ms: t.monotonicStallMs,
        clock_jump_ms: t.clockJumpMs,
        total_stalls: this.totalStalls,
        cumulative_stall_ms: this.totalStallDurationMs,
        cumulative_monotonic_stall_ms: this.totalMonotonicStallMs,
        likely_sleep: t.likelySleep,
        ...o,
        ...e,
        ...s,
        sigcont: l,
        nonblocking_stdout: XUn(),
      }));
  };
  start(t) {
    if (this.timer !== null) return;
    ((this.intervalMs = t),
      (this.rssSampleTicks = Math.round(d / t)),
      (this.lastTickMs = Date.now()),
      (this.lastTickMonotonicMs = performance.now()),
      (this.lastResourceSample = h()),
      process.on("SIGCONT", this.onSigcont),
      n(
        `[event-loop-stall] detector started (interval=${t}ms, threshold=${M}ms)`,
      ),
      (this.timer = setInterval(() => {
        let s = Date.now(),
          o = performance.now(),
          e = g({
            prevWallMs: this.lastTickMs,
            prevMonotonicMs: this.lastTickMonotonicMs,
            nowWallMs: s,
            nowMonotonicMs: o,
            intervalMs: this.intervalMs,
          });
        this.tickCount++;
        let l = h(),
          r = ws().get(process.stdout)?.takeSlowestFrameWrite();
        if (e.isStall) {
          if (
            (this.totalStalls++,
            (this.totalStallDurationMs += Math.max(e.wallDriftMs, 0)),
            e.isMonotonicStall)
          )
            this.totalMonotonicStallMs += e.monotonicStallMs;
          let u = v(),
            m =
              l && this.lastResourceSample
                ? {
                    cpu_delta_ms: Math.round(
                      l.cpuTimeMs - this.lastResourceSample.cpuTimeMs,
                    ),
                    major_fault_delta:
                      l.majorPageFaults -
                      this.lastResourceSample.majorPageFaults,
                  }
                : null,
            c = w({
              write: r,
              isMonotonicStall: e.isMonotonicStall,
              prevMonotonicMs: this.lastTickMonotonicMs,
              nowMonotonicMs: o,
              intervalMs: this.intervalMs,
            });
          if ((setImmediate(this.afterTick, e, c, m, u), e.likelySleep))
            ws().get(process.stdout)?.reassertTerminalModes();
        }
        if (!e.isStall) setImmediate(this.afterTick, e, null, null, null);
        ((this.lastTickMs = s),
          (this.lastTickMonotonicMs = o),
          (this.lastResourceSample = l));
      }, this.intervalMs)),
      this.timer.unref());
  }
}
var y = new j(() => new b());
export { startEventLoopStallDetector };
