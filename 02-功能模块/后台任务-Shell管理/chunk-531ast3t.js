// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Nn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { WT } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { MTe, pjt, isTranscriptPersistenceDisabled } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isCheckinOrigin } from "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import { isAgentsFleetEnabled } from "../../01-核心基础设施/共享小工具-未细化/agent-view-feature-gates.js";
function isAgentsViewAvailable() {
  return isAgentsFleetEnabled() && !Nn();
}
function p(e, t) {
  if (!e) return "idle-fork";
  return t ? "defer-then-fork" : "abort-then-fork";
}
function f(e) {
  let { inFlight: t } = e;
  if (e.isBg) return { ok: !0, via: "detach", inFlight: t };
  if (!e.fleetEnabled) return { ok: !1, reason: "fleet-disabled", inFlight: t };
  if (e.isRemote) return { ok: !1, reason: "remote", inFlight: t };
  if (e.persistenceDisabled)
    return { ok: !1, reason: "persistence", inFlight: t };
  if (e.isExternalLoading) return { ok: !1, reason: "loading", inFlight: t };
  return { ok: !0, via: p(e.isLoading, e.betweenCalls), inFlight: t };
}
function isBetweenCalls(e, t) {
  return !t && !d(e);
}
function d(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (r.type === "assistant") return r.message?.stop_reason === null;
    if (r.type === "user") return !1;
  }
  return !1;
}
function countPartialAssistantChars(e) {
  let t = 0;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o.type === "assistant") {
      if (o.message?.stop_reason !== null) return t;
      for (let i of o.message?.content ?? [])
        if (i.type === "text" && typeof i.text === "string") t += i.text.length;
    } else if (o.type === "user") return t;
  }
  return t;
}
function getPartialAssistantText(e, t) {
  let r = e.length;
  for (let i = e.length - 1; i >= 0; i--) {
    let s = e[i];
    if (s.type === "assistant") {
      if (s.message?.stop_reason !== null) break;
      r = i;
    } else if (s.type === "user") break;
  }
  let o = "";
  for (let i = r; i < e.length; i++) {
    let s = e[i];
    if (s.type !== "assistant") continue;
    for (let l of s.message?.content ?? [])
      if (l.type === "text" && typeof l.text === "string") o += l.text;
  }
  return o + (t ?? "");
}
function createHeldScreeningPredicate(e) {
  let t,
    r = !1;
  return (o) => {
    if (r) return !0;
    try {
      return ((t ??= MTe(e())), pjt(o.under, t));
    } catch (i) {
      return (
        (r = !0),
        n(`heldScreening could not read the screening: ${i}`, {
          level: "error",
        }),
        !0
      );
    }
  };
}
function countCommandsThatWouldBeLost(e, t) {
  let r = 0;
  for (let o of e) {
    if (isCheckinOrigin(o)) continue;
    if (
      o.priority === "later" ||
      o.drainOnly === !0 ||
      o.screeningPending === !0 ||
      (o.promptSubmitted !== void 0 && t !== void 0 && t(o.promptSubmitted)) ||
      o.mode === "bash" ||
      o.mode === "poll-event" ||
      (typeof o.value === "string" &&
        o.value.trim().startsWith("/") &&
        !o.skipSlashCommands)
    )
      r++;
  }
  return r;
}
function formatStillBackgroundingMessage(e) {
  return `Still backgrounding after the current tool \u2014 waiting for ${e} running ${pluralize(e, "subagent")} so the work carries over. Press \u2190 again to skip ahead and restart ${e === 1 ? "it" : "them"} from the beginning.`;
}
function a(e) {
  if (e.type !== "user") return !1;
  let t = e.message?.content;
  return (
    Array.isArray(t) && t.length > 0 && t.every((r) => r.type === "tool_result")
  );
}
function g(e) {
  if (e.type === "system") return !0;
  if (e.type === "assistant") {
    let t = e.message?.stop_reason;
    return t === null || t === "tool_use";
  }
  if (e.type === "user") return WT(e);
  return !1;
}
function stripAbortedTurnMessages(e) {
  let t = e.length,
    r = !1;
  while (t > 0) {
    let i = e[t - 1];
    if (i.type === "user")
      if (WT(i)) r ||= a(i);
      else if (r && a(i));
      else break;
    else if (i.type === "assistant") {
      if (!g(i)) break;
      r = !1;
    }
    t--;
  }
  let o = e
    .slice(t)
    .filter(
      (i) => i.type !== "user" && i.type !== "assistant" && i.type !== "system",
    );
  if (t + o.length === e.length) return e;
  return [...e.slice(0, t), ...o];
}
function getAbortBoundaryUuid(e) {
  let t = stripAbortedTurnMessages(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let o = t[r].type;
    if (o === "user" || o === "assistant") return t[r].uuid;
  }
  return;
}
function isTranscriptUnchangedSinceMark(e, t) {
  if (e === null || e.length < 1 || e.length > t.length) return !1;
  let r = e.length - 1;
  if (t[r]?.uuid !== e.uuid) return !1;
  for (let o = e.length; o < t.length; o++) {
    let i = t[o].type;
    if (i === "user" || i === "assistant") return !1;
  }
  return !0;
}
function hasPendingUserTurn(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (r.type === "user") return !WT(r);
    if (r.type === "assistant") return !1;
  }
  return !1;
}
function isBackgroundFork(e) {
  return e.ok && e.via !== "detach";
}
function getBackgroundDecision(e) {
  return f({
    ...e,
    fleetEnabled: isAgentsFleetEnabled(),
    isRemote: Nn(),
    persistenceDisabled: isTranscriptPersistenceDisabled(),
  });
}
export { isAgentsViewAvailable, isBetweenCalls, countPartialAssistantChars, getPartialAssistantText, createHeldScreeningPredicate, countCommandsThatWouldBeLost, formatStillBackgroundingMessage, stripAbortedTurnMessages, getAbortBoundaryUuid, isTranscriptUnchangedSinceMark, hasPendingUserTurn, isBackgroundFork, getBackgroundDecision };
