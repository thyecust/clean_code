// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Mge } from "../../02-功能模块/图片-截图-ComputerUse/chunk-x87xxkp4.js";
import { a } from "../设置-配置/chunk-zqr5ctyf.js";
import { oe, ft, B0, Lz } from "../核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Eo } from "../../02-功能模块/上下文压缩-Compact/chunk-mxt9bjz3.js";
import { VQ, sz } from "../共享小工具-未细化/chunk-xcc43dkx.js";
var h = new Map();
function eLt() {
  let t = a.LC_ALL || a.LC_TIME || a.LANG || "";
  if (h.has(t)) return h.get(t);
  let e = F(t);
  return (h.set(t, e), e);
}
function F(t) {
  if (!t || t === "C" || t === "POSIX") return;
  let e = ft(ft(t, "."), "@");
  if (!e) return;
  let r = e.replaceAll("_", "-");
  try {
    return (new Intl.DateTimeFormat(r), r);
  } catch {
    return;
  }
}
var O = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short",
  },
  C = { weekday: "short", calendar: "gregory" },
  M = { weekday: "long", calendar: "gregory" },
  P = { month: "short", calendar: "gregory" },
  I = { month: "long", calendar: "gregory" };
function y(t, e, { locale: r, timeZone: o }) {
  let f = sz("en-US", VQ(O, o)).formatToParts(e),
    n = {};
  for (let T of f) n[T.type] = T.value;
  let u = Number(n.year),
    s = Number(n.month),
    m = Number(n.day),
    g = Number(n.hour),
    p = ((g + 11) % 12) + 1,
    d = new Date(Date.UTC(u, s - 1, m)).getUTCDay();
  return t.replace(/%(-?)([\s\S])/g, (T, c, b) => {
    switch (b) {
      case "Y":
        return String(u);
      case "y":
        return i(u % 100, c);
      case "C":
        return i(Math.floor(u / 100), c);
      case "m":
        return i(s, c);
      case "d":
        return i(m, c);
      case "e":
        return D(m, c);
      case "j":
        return N(_(u, s, m), c);
      case "u":
        return String(d === 0 ? 7 : d);
      case "w":
        return String(d);
      case "H":
        return i(g, c);
      case "k":
        return D(g, c);
      case "I":
        return i(p, c);
      case "l":
        return D(p, c);
      case "M":
        return i(Number(n.minute), c);
      case "S":
        return i(Number(n.second), c);
      case "p":
        return g < 12 ? "AM" : "PM";
      case "P":
        return g < 12 ? "am" : "pm";
      case "s":
        return String(Math.floor(e.getTime() / 1000));
      case "a":
        return l(e, r, o, C);
      case "A":
        return l(e, r, o, M);
      case "b":
      case "h":
        return l(e, r, o, P);
      case "B":
        return l(e, r, o, I);
      case "Z":
        return n.timeZoneName ?? "";
      case "z":
        return A(e, u, s, m, g, n);
      case "F":
        return `${u}-${i(s, "")}-${i(m, "")}`;
      case "D":
        return `${i(s, "")}/${i(m, "")}/${i(u % 100, "")}`;
      case "T":
        return `${i(g, "")}:${n.minute}:${n.second}`;
      case "R":
        return `${i(g, "")}:${n.minute}`;
      case "r":
        return `${i(p, "")}:${n.minute}:${n.second} ${g < 12 ? "AM" : "PM"}`;
      case "%":
        return "%";
      default:
        return T;
    }
  });
}
function i(t, e) {
  return e ? String(t) : String(t).padStart(2, "0");
}
function N(t, e) {
  return e ? String(t) : String(t).padStart(3, "0");
}
function D(t, e) {
  return e ? String(t) : String(t).padStart(2, " ");
}
function _(t, e, r) {
  return (Date.UTC(t, e - 1, r) - Date.UTC(t, 0, 1)) / 86400000 + 1;
}
function l(t, e, r, o) {
  return sz(e, VQ(o, r)).format(t);
}
function A(t, e, r, o, f, n) {
  let u = Date.UTC(e, r - 1, o, f, Number(n.minute), Number(n.second)),
    s = Math.floor(t.getTime() / 1000) * 1000,
    m = Math.round((u - s) / 60000),
    g = m < 0 ? "-" : "+",
    p = Math.abs(m);
  return `${g}${String(Math.floor(p / 60)).padStart(2, "0")}${String(p % 60).padStart(2, "0")}`;
}
var S = 100;
function Xnn(t) {
  return oe(B0(Lz(t)), S);
}
function vIe() {
  let t = Eo("timeFormat", "auto").value,
    e = Mge.find((f) => f === t);
  if (e === "24-hour-utc")
    return { kind: "preset", preset: e, timeZone: "UTC" };
  let r = k();
  if (e) return { kind: "preset", preset: e, timeZone: r };
  let o = Xnn(t);
  return o.includes("%")
    ? { kind: "pattern", pattern: o, timeZone: r }
    : { kind: "preset", preset: "auto", timeZone: r };
}
function k() {
  let t = Eo("timeZone", "").value;
  if (!t) return;
  try {
    return (sz("en-US", { timeZone: t }), t);
  } catch {
    return;
  }
}
function Ynn(t, e, r) {
  switch (e) {
    case "auto":
      return VQ(t, r);
    case "12-hour":
      return VQ({ ...t, hourCycle: "h12" }, r);
    case "24-hour":
    case "24-hour-utc":
      return VQ({ ...t, hourCycle: "h23" }, r);
  }
}
function Flt(t, e, r, o) {
  let f = sz(r, Ynn(e, t.preset, t.timeZone));
  if (t.preset !== "24-hour-utc") return f.format(o);
  let n = f.formatToParts(o),
    u = n.findLastIndex((s) => s.type === "minute" || s.type === "second");
  return n.map((s, m) => (m === u ? `${s.value}Z` : s.value)).join("");
}
function RIe(t, e, r) {
  return oe(y(t, r, { locale: eLt(), timeZone: e }), S);
}
export { eLt, Xnn, vIe, Ynn, Flt, RIe };
