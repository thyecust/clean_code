// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { dl, VP, ODn, DDn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { x } from "../核心工具-字符串与文本/chunk-1wezmyx2.js";
import { isBgSession } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { EYe, ne, hTt } from "../../02-功能模块/Artifact发布-渲染/chunk-rr78st95.js";
import { lV, WM, Dd, Xp, Ld } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
function j4() {
  if (!isBgSession()) return !0;
  return dl() !== null && ODn();
}
function S9n(e) {
  let t = VP(e),
    n = DDn(e);
  return () => {
    (t(), n());
  };
}
function Pbe() {
  if (ne().autoReact.enabledMemo !== !0) return new Set();
  return new Set(Array.from(u(), (e) => e.slug));
}
function lte() {
  let { autoReact: e, durable: t, live: n, wakes: r } = ne(),
    i = new Set();
  if (e.enabledMemo === !1 || e.userDisarmed) return i;
  for (let [o, s] of n.bootingWiredArms) {
    if (
      s.scanGeneration !== r.scanGeneration ||
      n.retiredInFlightArms.has(o) ||
      t.stopLatches.isStopped(o)
    )
      continue;
    if (!Dd(o) || (s.freshPublish && Ld(o) && s.stopGeneration === WM(o)))
      i.add(o);
  }
  return i;
}
function* u() {
  for (let e of ne().live.supervisors.values())
    if (!e.stopped && e.autoReactWiring !== void 0 && !Xp(e.slug)) yield e;
}
function uan(e) {
  let { live: t } = ne();
  for (let n of u())
    if (
      e?.reconnecting !== !0 ||
      n.timer !== void 0 ||
      t.inFlightSubscribes.has(n.slug)
    )
      return !0;
  return !1;
}
function b9n() {
  return ne().autoReact.enabledMemo === !0 && uan({ reconnecting: !0 });
}
function Spt(e) {
  let t = ne().live;
  for (let n of e) {
    let r = t.supervisors.get(n);
    if (r !== void 0) (EYe(r), t.supervisors.delete(n));
    (hTt(n), ne().liveDocWatch.headSinks.get(n)?.sourceEnded());
  }
  c(e);
}
function c(e) {
  let t = ne().live;
  for (let n of e)
    if (t.inFlightSubscribes.has(n) && !t.supervisors.has(n))
      (t.retiredInFlightArms.add(n),
        t.bootingWiredArms.delete(n),
        t.inFlightWiredIntent.delete(n));
}
var eOe = 1e4;
function a() {
  return ne().autoReact.unattendedReplies;
}
function dan(e) {
  let t = a();
  t.set(e, Math.min((t.get(e) ?? 0) + 1, eOe));
}
function pan(e, t) {
  if (t > 0) {
    let n = a();
    n.set(e, Math.min((n.get(e) ?? 0) + t, eOe));
  }
}
function w9n(e) {
  let t = a(),
    n = t.get(e) ?? 0;
  return (t.delete(e), n);
}
function bpt() {
  let e = ne().autoReact,
    t = e.unattendedReplies;
  e.unattendedReplies = new Map();
  let n = 0;
  for (let r of t.values()) n += r;
  return { total: n, bySlug: t };
}
function wpt(e, { where: t, stop: n }) {
  return lV(
    `Claude auto-replied to ${e} ${x(e, "comment")}${t} while you were away.${n}`,
    "notice",
  );
}
export { j4, S9n, Pbe, lte, uan, b9n, Spt, eOe, dan, pan, w9n, bpt, wpt };
