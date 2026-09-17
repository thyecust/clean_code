// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  bB,
  kg,
  m8,
  PLn,
  dYt,
  Ort,
  wje,
  Ixe,
  pYt,
  Drt,
  OLn,
  Tje,
  Eje,
  gHt,
  HL,
} from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Xbt } from "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import { getCronJitterConfig } from "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
var w = import.meta.require("../自主会话-循环/LOOP_FILE_DYNAMIC_SENTINEL.y675anba.js"),
  _ = 60,
  b = 3600,
  O = 1200,
  D = 1;
function L(e, o) {
  (logEvent("tengu_loop_ended", { reason: fromEnum(e), ...o }), gHt(!0), Eje());
}
function V_n() {
  let e = kg().find((o) => o.kind === "loop");
  if (e === void 0) return;
  return {
    at: e.scheduledFor,
    reason: e.reason,
    fires: Tje(),
    ...(e.keepalive && { keepalive: !0 }),
  };
}
function YXn() {
  let e = a.CLAUDE_CODE_LOOP_KEEPALIVE;
  if (e !== void 0) return e;
  return H("tengu_kairos_loop_keepalive", !0);
}
function JXn(e, o, t) {
  return E(e, o, { viaKeepalive: !1, reason: t });
}
function QXn(e) {
  if (pYt() >= D)
    return (
      n(
        "[loop] keepalive budget exhausted (model declined to reschedule twice) \u2014 ending loop",
      ),
      L("model_stopped", { via_keepalive: !0 }),
      null
    );
  return E(O, e, { viaKeepalive: !0 });
}
function K_n() {
  (gHt(!1), Eje());
}
function ZXn() {
  let e = OLn(),
    o = kg().filter((l) => l.kind === "loop"),
    t = wje();
  (Ixe(null), Drt(0), HL(o.map((l) => l.id)));
  for (let l of o) Ort(l.prompt);
  if (t !== null) Ort(t);
  if (e)
    return (
      n(
        "[loop] ScheduleWakeup({stop:true}) after loop already ended \u2014 cleanup only, terminal event suppressed",
      ),
      o.length
    );
  return (
    n(
      `[loop] model called ScheduleWakeup({stop:true}) \u2014 ending loop (${o.length} pending wakeup(s) cancelled${t !== null ? ", tick in flight" : ""})`,
    ),
    L("model_stopped", { via_keepalive: !1 }),
    logFeatureOk("loop_schedule_wakeup"),
    o.length
  );
}
function E(e, o, t) {
  let { viaKeepalive: l, reason: s } = t;
  if (!l) Drt(0);
  let m = x(),
    r = Date.now(),
    d = PLn(o),
    S = d !== void 0 && r > d.lastScheduledFor + b * 1000,
    p = d === void 0 || S ? r : d.startedAt,
    f = getCronJitterConfig().recurringMaxAgeMs;
  if (f > 0 && r - p >= f) {
    if (!d?.agedOut)
      (dYt(o, {
        startedAt: p,
        lastScheduledFor: r - (b - _) * 1000,
        agedOut: !0,
      }),
        logEvent("tengu_loop_dynamic_wakeup_aged_out", {
          loop_age_ms: r - p,
          max_age_ms: f,
        }),
        L("aged_out", { via_keepalive: l }),
        logFeatureSad("loop_schedule_wakeup", "loop_wakeup_aged_out"));
    return null;
  }
  let {
      clamped: c,
      wasClamped: h,
      targetMs: k,
      createdAt: C,
      target: v,
    } = F(e),
    M = `${v.getMinutes()} ${v.getHours()} * * *`;
  if (
    (m8({
      id: T(),
      cron: M,
      prompt: o,
      createdAt: C,
      kind: "loop",
      scheduledFor: k,
      reason: s,
      ...(l && { keepalive: !0 }),
    }),
    dYt(o, { startedAt: p, lastScheduledFor: k }),
    bB(!0),
    gHt(!1),
    l)
  )
    return (
      Drt(pYt() + 1),
      n(`[loop] keepalive armed (model did not reschedule): ${c}s fallback`),
      logEvent("tengu_loop_keepalive_fired", {
        clamped_delay_seconds: c,
        prompt_is_sentinel: w.isLoopDefaultSentinel(o),
      }),
      logFeatureSad("loop_schedule_wakeup", "model_no_reschedule"),
      { scheduledFor: k, clampedDelaySeconds: c, wasClamped: h }
    );
  return (
    n(
      `[loop] dynamic wakeup scheduled: ${c}s${h ? ` (clamped from ${e}s)` : ""}${s !== void 0 ? ` \u2014 ${s}` : ""}`,
    ),
    logEvent("tengu_loop_dynamic_wakeup_scheduled", {
      chosen_delay_seconds: Number.isFinite(e) ? e : 0,
      clamped_delay_seconds: c,
      was_clamped: h,
      reason_length: s?.length ?? 0,
      superseded_count: m,
    }),
    logFeatureOk("loop_schedule_wakeup"),
    { scheduledFor: k, clampedDelaySeconds: c, wasClamped: h }
  );
}
function F(e) {
  let o;
  if (Number.isNaN(e)) o = _;
  else if (e === 1 / 0) o = b;
  else if (e === -1 / 0) o = _;
  else o = Math.round(e);
  let t = Math.max(_, Math.min(b, o)),
    l = !Number.isFinite(e) || o !== t,
    s = Date.now(),
    m = s + t * 1000,
    r = P(m),
    d = getCronJitterConfig().cacheLeadMs;
  if (d > 0 && t * 1000 <= Xbt) {
    let f = Xbt - d;
    while (r - s > f && r - 60000 >= s + _ * 1000) r -= 60000;
  }
  let S = new Date(r),
    p = m < r ? m : r - 1;
  return { clamped: t, wasClamped: l, targetMs: r, createdAt: p, target: S };
}
function P(e) {
  let o = new Date(e);
  if (o.getSeconds() > 0 || o.getMilliseconds() > 0)
    o.setMinutes(o.getMinutes() + 1);
  return (o.setSeconds(0, 0), o.getTime());
}
function T() {
  return Math.floor(Math.random() * 4294967295)
    .toString(16)
    .padStart(8, "0");
}
function x() {
  let e = kg()
    .filter((o) => o.kind === "loop")
    .map((o) => o.id);
  if (e.length === 0) return 0;
  return HL(e);
}
function BY() {
  return kg().some((e) => e.kind === "loop");
}
function t3t() {
  let e = kg().filter((t) => t.kind === "loop"),
    o = wje();
  if ((Ixe(null), Drt(0), e.length === 0 && o === null)) return 0;
  HL(e.map((t) => t.id));
  for (let t of e) Ort(t.prompt);
  if (o !== null) Ort(o);
  return (
    n(
      `[loop/dynamic] cancelled ${e.length} pending loop wakeup(s) on user abort${o !== null ? " (tick in flight)" : ""}`,
    ),
    L("user_abort", { loops_cancelled: e.length }),
    logFeatureOk("loop_cancel_all"),
    e.length
  );
}
export { V_n, YXn, JXn, QXn, K_n, ZXn, BY, t3t };
