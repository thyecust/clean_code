// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ze } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
function isPollEventWakeItem(n, e) {
  return (
    n !== void 0 && n.mode === "poll-event" && n.pollEvent?.wake === !0 && !e
  );
}
function isKnownQueueMode(n) {
  return (
    n === "prompt" ||
    n === "orphaned-permission" ||
    n === "task-notification" ||
    n === "poll-event"
  );
}
function isFromCurrentAgent(n) {
  return n.agentId === ze();
}
var GOAL_CHECKIN_ORIGIN = { kind: "task-notification", source: "goal-checkin" };
function isGoalCheckinOrigin(n) {
  return (
    n.origin?.kind === "task-notification" && n.origin.source === "goal-checkin"
  );
}
var WORKER_CHECKIN_ORIGIN = { kind: "task-notification", source: "worker-checkin" };
function isCheckinOrigin(n) {
  return (
    n.origin?.kind === "task-notification" &&
    (n.origin.source === "goal-checkin" || n.origin.source === "worker-checkin")
  );
}
function isCurrentAgentTaskNotification(n) {
  return isFromCurrentAgent(n) && n.mode === "task-notification";
}
function normalizeTaskNotificationOrigin(n) {
  if (n?.kind !== "task-notification") return n;
  return {
    kind: "task-notification",
    ...(n.subkind !== void 0 && { subkind: n.subkind }),
  };
}
function resolveQueueOrigin(n) {
  let e = n.queueOrigin ?? n.origin;
  return isCheckinOrigin({ origin: e }) ? normalizeTaskNotificationOrigin(e) : e;
}
function resolveQueueMode(n) {
  return n.queueMode ?? t(resolveQueueOrigin(n));
}
function shouldSkipAttachments(n) {
  return n.queueSkipAttachments === !0 || resolveQueueMode(n) === "task-notification"
    ? !0
    : void 0;
}
function t(n) {
  return n?.kind === "task-notification" ? "task-notification" : "prompt";
}
import { AsyncLocalStorage } from "async_hooks";
var CCR_TURN_ID_HEADER = "X-CCR-Turn-Id",
  u = 128,
  d = /^[\x21-\x7e]+$/,
  r = new AsyncLocalStorage();
function runWithCcrTurnId(n, e) {
  return r.run({ id: n }, e);
}
function getCcrTurnId() {
  return r.getStore()?.id;
}
function clearCcrTurnId() {
  let n = r.getStore();
  if (n) n.id = void 0;
}
function clearCcrTurnIdOnMismatch(n) {
  let e = getCcrTurnId();
  if (e === void 0) return;
  if (n.some((i) => i.ccrTurnId !== e)) clearCcrTurnId();
}
function parseRelayTurnId(n, { isRelayHuman: e }) {
  if (!e) return;
  if (typeof n !== "object" || n === null || !("turn_id" in n)) return;
  let i = n.turn_id;
  if (typeof i !== "string" || i === "" || i.length > u || !d.test(i)) return;
  return i;
}
function clearCcrTurnIdForBatch(n) {
  if (n.length > 0) clearCcrTurnId();
}
function getCommonCcrTurnId(n) {
  let e = n[0]?.ccrTurnId;
  return n.every((i) => i.ccrTurnId === e) ? e : void 0;
}
export {
  isPollEventWakeItem,
  isKnownQueueMode,
  isFromCurrentAgent,
  GOAL_CHECKIN_ORIGIN,
  isGoalCheckinOrigin,
  WORKER_CHECKIN_ORIGIN,
  isCheckinOrigin,
  isCurrentAgentTaskNotification,
  normalizeTaskNotificationOrigin,
  resolveQueueOrigin,
  resolveQueueMode,
  shouldSkipAttachments,
  CCR_TURN_ID_HEADER,
  runWithCcrTurnId,
  getCcrTurnId,
  clearCcrTurnId,
  clearCcrTurnIdOnMismatch,
  parseRelayTurnId,
  clearCcrTurnIdForBatch,
  getCommonCcrTurnId,
};
