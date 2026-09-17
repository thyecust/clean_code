// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 129 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import "../../03-入口与运行时/会话UI-REPL/scroll-box.js";
import "../../01-核心基础设施/UI组件-TUI/chunk-yhkvt9ba.js";
import { DEFAULT_BREAK_THRESHOLD_MINUTES } from "./使用时长-Wellbeing.0s8r3ncd.js";
import "../../01-核心基础设施/UI组件-TUI/background-text.js";
import { F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
F();
function E(i) {
  return (i + 1) % a.length;
}
function U(i_0) {
  return (i_0 + 1) % s.length;
}
function I(i_1) {
  return (i_1 + 1) % u.length;
}
function H(i_2) {
  return (i_2 - 1 + a.length) % a.length;
}
function K(i_3) {
  return (i_3 - 1 + s.length) % s.length;
}
function N(i_4) {
  return (i_4 - 1 + u.length) % u.length;
}
var a = [
    { label: "Off", intervalMinutes: null },
    { label: "Every 5 minutes", intervalMinutes: 5 },
    { label: "Every 15 minutes", intervalMinutes: 15 },
    { label: "Every 30 minutes", intervalMinutes: 30, hint: "(default)" },
    { label: "Every 1 hour", intervalMinutes: 60 },
  ],
  s = [
    { label: "5 minutes", minutes: 5 },
    { label: "10 minutes", minutes: 10, hint: "(default)" },
    { label: "15 minutes", minutes: 15 },
    { label: "30 minutes", minutes: 30 },
  ],
  u = [
    { label: "Off", range: null },
    { label: "22:00 \u2013 07:00", range: { start: "22:00", end: "07:00" } },
    { label: "23:00 \u2013 06:00", range: { start: "23:00", end: "06:00" } },
    { label: "00:00 \u2013 07:00", range: { start: "00:00", end: "07:00" } },
  ];
function initialIndexFor(e, t) {
  if (!e) return 0;
  let n = t ?? 30,
    o = 1,
    r = 1 / 0;
  for (let i = 1; i < a.length; i++) {
    let l = Math.abs(a[i].intervalMinutes - n);
    if (l < r) ((r = l), (o = i));
  }
  return o;
}
function initialThresholdIndexFor(e) {
  let t = e ?? DEFAULT_BREAK_THRESHOLD_MINUTES,
    n = 0,
    o = 1 / 0;
  for (let r = 0; r < s.length; r++) {
    let i = Math.abs(s[r].minutes - t);
    if (i < o) ((o = i), (n = r));
  }
  return n;
}
function initialQuietIndexFor(e) {
  if (!e.enabled || !e.start || !e.end) return 0;
  for (let t = 1; t < u.length; t++) {
    let n = u[t].range;
    if (n.start === e.start && n.end === e.end) return t;
  }
  return 0;
}
var Y = async (e) => (
  e("Wellbeing settings are not available in this build"),
  null
);
export {
  Y as call,
  initialIndexFor,
  initialQuietIndexFor,
  initialThresholdIndexFor,
};
