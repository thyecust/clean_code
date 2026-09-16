// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ze } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
function YYn(n, e) {
  return (
    n !== void 0 && n.mode === "poll-event" && n.pollEvent?.wake === !0 && !e
  );
}
function sSn(n) {
  return (
    n === "prompt" ||
    n === "orphaned-permission" ||
    n === "task-notification" ||
    n === "poll-event"
  );
}
function tm(n) {
  return n.agentId === ze();
}
var JYn = { kind: "task-notification", source: "goal-checkin" };
function QYn(n) {
  return (
    n.origin?.kind === "task-notification" && n.origin.source === "goal-checkin"
  );
}
var ZYn = { kind: "task-notification", source: "worker-checkin" };
function OAe(n) {
  return (
    n.origin?.kind === "task-notification" &&
    (n.origin.source === "goal-checkin" || n.origin.source === "worker-checkin")
  );
}
function eJn(n) {
  return tm(n) && n.mode === "task-notification";
}
function cN(n) {
  if (n?.kind !== "task-notification") return n;
  return {
    kind: "task-notification",
    ...(n.subkind !== void 0 && { subkind: n.subkind }),
  };
}
function r7e(n) {
  let e = n.queueOrigin ?? n.origin;
  return OAe({ origin: e }) ? cN(e) : e;
}
function iSn(n) {
  return n.queueMode ?? t(r7e(n));
}
function BNe(n) {
  return n.queueSkipAttachments === !0 || iSn(n) === "task-notification"
    ? !0
    : void 0;
}
function t(n) {
  return n?.kind === "task-notification" ? "task-notification" : "prompt";
}
import { AsyncLocalStorage as o } from "async_hooks";
var jNe = "X-CCR-Turn-Id",
  u = 128,
  d = /^[\x21-\x7e]+$/,
  r = new o();
function tJn(n, e) {
  return r.run({ id: n }, e);
}
function o7e() {
  return r.getStore()?.id;
}
function ebt() {
  let n = r.getStore();
  if (n) n.id = void 0;
}
function WNe(n) {
  let e = o7e();
  if (e === void 0) return;
  if (n.some((i) => i.ccrTurnId !== e)) ebt();
}
function nJn(n, { isRelayHuman: e }) {
  if (!e) return;
  if (typeof n !== "object" || n === null || !("turn_id" in n)) return;
  let i = n.turn_id;
  if (typeof i !== "string" || i === "" || i.length > u || !d.test(i)) return;
  return i;
}
function tbt(n) {
  if (n.length > 0) ebt();
}
function rJn(n) {
  let e = n[0]?.ccrTurnId;
  return n.every((i) => i.ccrTurnId === e) ? e : void 0;
}
export {
  YYn,
  sSn,
  tm,
  JYn,
  QYn,
  ZYn,
  OAe,
  eJn,
  cN,
  r7e,
  iSn,
  BNe,
  jNe,
  tJn,
  o7e,
  ebt,
  WNe,
  nJn,
  tbt,
  rJn,
};
