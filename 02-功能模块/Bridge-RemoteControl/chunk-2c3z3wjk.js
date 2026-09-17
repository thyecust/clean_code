// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { QNe } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { te, formatRelativeTimeAgo } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { Xs } from "../../01-核心基础设施/共享小工具-未细化/chunk-xcc43dkx.js";
var yBn = 30000,
  ik = "bridge-failed",
  rSe = "disabled after repeated failures \xB7 restart to retry",
  ztn = "Remote Control not started here";
function SBn(t, { crossSessionMessaging: e }, r = new Date()) {
  let n =
    t.startedAt > 0 && t.startedAt <= r.getTime()
      ? ` (started ${formatRelativeTimeAgo(new Date(t.startedAt), { now: r })})`
      : "";
  return `${ztn} \xB7 another Claude Code on this machine${n} already has Remote Control for this conversation${e ? ", so this terminal can't see your sessions on other machines and they can't reach it" : ""} \xB7 run /remote-control to move it to this terminal`;
}
var Vtn = 150;
function Ple() {
  let t = new Date(),
    e = String(t.getHours()).padStart(2, "0"),
    r = String(t.getMinutes()).padStart(2, "0"),
    n = String(t.getSeconds()).padStart(2, "0");
  return `${e}:${r}:${n}`;
}
function Jat(t, e) {
  return `${QNe(void 0, e)}/code?environment=${t}`;
}
function Ktn(t, e) {
  let r = e + 20;
  return e + 10 - (t % r);
}
function eIe(t, e) {
  let r = te(t),
    n = e - 1,
    i = e + 1;
  if (n >= r || i < 0) return { before: t, shimmer: "", after: "" };
  let m = Math.max(0, n),
    s = 0,
    c = "",
    a = "",
    l = "";
  for (let { segment: o } of Xs().segment(t)) {
    let u = te(o);
    if (s + u <= m) c += o;
    else if (s > i) l += o;
    else a += o;
    s += u;
  }
  return { before: c, shimmer: a, after: l };
}
function oSe({ error: t, connected: e, sessionActive: r, reconnecting: n }) {
  if (t) return { label: "/rc failed", color: "error" };
  if (n) return { label: "/rc reconnecting", color: "warning" };
  if (r || e) return { label: "/rc active", color: "success" };
  return { label: "/rc connecting\u2026", color: "warning" };
}
function N9e(t) {
  return `Code anywhere with the Claude mobile app or ${t}`;
}
function F9e(t) {
  return `Continue coding in the Claude mobile app or ${t}`;
}
var Xtn = "Run /remote-control to retry",
  bBn = "Re-run `claude remote-control` to try again";
function wBn(t, e) {
  return `\x1B]8;;${e}\x07${t}\x1B]8;;\x07`;
}
export {
  yBn,
  ik,
  rSe,
  ztn,
  SBn,
  Vtn,
  Ple,
  Jat,
  Ktn,
  eIe,
  oSe,
  N9e,
  F9e,
  Xtn,
  bBn,
  wBn,
};
