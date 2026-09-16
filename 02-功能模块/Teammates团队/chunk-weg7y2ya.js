// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { y, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { _3 } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { vG, Uwn } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { ne } from "../Artifact发布-渲染/chunk-rr78st95.js";
import { tte, hM } from "../Artifact发布-渲染/chunk-kshc4v5t.js";
var l = 32;
function qsn(n) {
  if (
    n.publishContext !== "subagent" ||
    n.context.agentId === void 0 ||
    n.context.teammateContext !== void 0
  )
    return null;
  let { publishContext: t } = vG({
    agentId: void 0,
    isNonInteractiveSession: ke(),
  });
  return hM(t) ? t : null;
}
function u1t(n, t) {
  let e = ne().live.pendingSubagentArms,
    s = e.get(n) ?? [],
    i = s.findIndex((o) => o.slug === t.slug);
  if (i === -1) s.push(t);
  else s[i] = t;
  (e.delete(n), e.set(n, s));
  let r = 0;
  for (let o of e.values()) r += o.length;
  while (r > l) {
    let [o, a] = e.entries().next().value;
    if ((a.shift(), a.length === 0)) e.delete(o);
    (r--, g("artifact_live_subscribe", "subagent_arm_evicted"));
  }
}
function d(n) {
  let t = ne().live.pendingSubagentArms,
    e = t.get(n) ?? [];
  return (t.delete(n), e);
}
var c = 256;
function b(n) {
  let t = ne().live.finishedSubagentAdopters;
  (t.delete(n), t.add(n));
  while (t.size > c) t.delete(t.values().next().value);
}
function Nhr(n) {
  let { agentId: t, context: e } = n;
  b(t);
  let s = d(t);
  if (s.length === 0) return;
  let { publishContext: i } = vG({
    agentId: e.agentId,
    agentType: e.agentContext?.agentType,
    isNonInteractiveSession: e.options.isNonInteractiveSession,
  });
  if (i === "subagent" && e.agentId !== void 0) {
    let o =
      _3(e.agentId, e.taskRegistry) === e.agentId ||
      !ne().live.finishedSubagentAdopters.has(e.agentId);
    for (let a of s)
      if (o) u1t(e.agentId, a);
      else g("artifact_live_subscribe", "subagent_arm_orphaned");
    return;
  }
  if (!hM(i)) return;
  let r = { ...e, abortController: new AbortController() };
  for (let o of s)
    tte({
      ...o,
      publishContext: i,
      getKnownVer: Uwn(e.getArtifactReadObservation, o.slug),
      context: r,
      adoptedPublish: !0,
      announceArmlessEnd: !0,
    }).catch(() => {});
  y("artifact_live_subscribe", {
    subagent_publish_adopted: !0,
    count: s.length,
    publish_context: u(i),
  });
}
export { qsn, u1t, Nhr };
