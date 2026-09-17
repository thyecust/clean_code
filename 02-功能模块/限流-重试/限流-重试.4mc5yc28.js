// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, sc } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { formatResetTime } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import {
  rX,
  oDe,
  I4e,
  LF,
  MF,
  OUt,
  Fte,
  $we,
  nqn,
  rqn,
  oqn,
  yk,
  md,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { C4, v4, Jx, D3e } from "../AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import { rnn, Mle, rlt, V9e } from "../../01-核心基础设施/共享小工具-未细化/chunk-hyrh6kmc.js";
var l = new j(() => ({
  notedWallResetsAt: null,
  shownWallResetsAt: null,
  withheldWallResetsAt: null,
  sessionSwitchSubscribed: !1,
}));
function n() {
  return l.of(B().host);
}
function Lle(t, e = Date.now()) {
  return (
    Mle(t) &&
    t.lowPriorityOffer === "treatment" &&
    t.resetsAt !== void 0 &&
    t.resetsAt * 1000 > e &&
    !OUt(e) &&
    Fte(e) === void 0 &&
    !MF() &&
    oDe()
  );
}
function a(t, e = Date.now()) {
  let o = rqn(e);
  return (
    rnn() &&
    t.status !== "rejected" &&
    o !== void 0 &&
    !f(o) &&
    !OUt(e) &&
    Fte(e) === void 0 &&
    oDe()
  );
}
function f(t) {
  let e = C4();
  switch (e.phase) {
    case "idle":
      return !1;
    case "armed":
      return e.resetsAtSeconds !== t;
    case "stale":
      return !0;
  }
}
function TBn(t) {
  if (t.lowPriorityOffer === void 0 || !Mle(t)) return;
  let e = t.resetsAt ?? null;
  if (e === null) return;
  let o = n();
  if (o.notedWallResetsAt !== e)
    ((o.notedWallResetsAt = e),
      i("tengu_lowpri_offer_capable", {
        arm: fromEnum(t.lowPriorityOffer),
        tier: fromEnum(rlt()),
        limit_type: fromEnumOpt(t.rateLimitType) ?? void 0,
        auto_armed: v4(),
        client_enabled: oDe(),
        config_version: I4e(),
      }));
  if (
    t.lowPriorityOffer === "treatment" &&
    Fte() !== void 0 &&
    o.withheldWallResetsAt !== e
  )
    ((o.withheldWallResetsAt = e),
      i("tengu_lowpri_offer_withheld", {
        arm: fromEnum(t.lowPriorityOffer),
        reason: fromEnum("cooloff"),
        client_enabled: oDe(),
        config_version: I4e(),
      }));
}
function rIe(t, e) {
  let o = t.resetsAt ?? null,
    r = n();
  if (o === null || r.shownWallResetsAt === o) return;
  ((r.shownWallResetsAt = o),
    i("tengu_lowpri_offer_shown", {
      arm: fromEnumOpt(t.lowPriorityOffer) ?? void 0,
      surface: fromEnum(e),
      config_version: I4e(),
    }));
}
function B9e(t) {
  let e = md();
  if (Lle(e) && e.resetsAt !== void 0) {
    if (
      (Jx("low_priority"),
      s(),
      !nqn({
        resetsAtSeconds: e.resetsAt,
        arm: e.lowPriorityOffer,
        entry: t,
        retryAfterSeconds: e.lowPriorityRetryAfterSeconds,
        maxWaitSeconds: e.lowPriorityMaxWaitSeconds,
      }))
    )
      return "unavailable";
    return (V9e(), "accepted");
  }
  if (a(e)) {
    let o = v4();
    if (o) Jx("low_priority");
    if ((s(), !oqn(t))) return "unavailable";
    if (o) V9e();
    return "resumed";
  }
  return "unavailable";
}
function j9e(t) {
  let e = $we(),
    o = e.phase === "active" ? formatResetTime(e.resetsAtSeconds) : void 0,
    r = o ? `until your limit resets at ${o}` : "until your limit resets";
  return `${t === "resumed" ? `Lower-priority mode is back on ${r}` : `Continuing now at lower priority ${r}`}. Your weekly limit still applies, and responses may pause while waiting for spare capacity. Run /${rX} to stop.`;
}
function W9e(t = Date.now()) {
  if (OUt(t))
    return `${LF().budgetExhaustedCopy}. Lower-priority mode is offered again after your weekly limit resets.`;
  let e = Fte(t);
  if (e !== void 0)
    return `Lower-priority mode is taking a break until ${formatResetTime(Math.ceil(e / 1000)) ?? "later"}, after waiting too long for spare capacity. Try /${rX} again then.`;
  return "Lower-priority mode isn't available right now.";
}
function EBn() {
  let t = md();
  return `Lower-priority mode is off. New messages wait for your usage limit as usual${Lle(t) || a(t) ? `; run /${rX} again to turn it back on` : ""}.`;
}
function s() {
  let t = n();
  if (t.sessionSwitchSubscribed) return;
  ((t.sessionSwitchSubscribed = !0),
    sc((e, o) => {
      if (D3e(o)) yk("conversation_reset");
    }));
}
export { Lle, TBn, rIe, B9e, j9e, W9e, EBn };
