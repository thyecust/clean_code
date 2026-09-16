// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K, sn, G1, GDn, kg, m8, HL } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { y8 } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { rL, nke, wb } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { O6 } from "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
var x = [
  { min: 0, max: 59 },
  { min: 0, max: 23 },
  { min: 1, max: 31 },
  { min: 1, max: 12 },
  { min: 0, max: 6 },
];
function T(e, s) {
  let { min: r, max: t } = s,
    i = new Set();
  for (let a of e.split(",")) {
    let o = a.match(/^\*(?:\/(\d+))?$/);
    if (o) {
      let u = o[1] ? parseInt(o[1], 10) : 1;
      if (u < 1) return null;
      for (let l = r; l <= t; l += u) i.add(l);
      continue;
    }
    let c = a.match(/^(\d+)-(\d+)(?:\/(\d+))?$/);
    if (c) {
      let u = parseInt(c[1], 10),
        l = parseInt(c[2], 10),
        p = c[3] ? parseInt(c[3], 10) : 1,
        y = r === 0 && t === 6,
        m = y ? 7 : t;
      if (u > l || p < 1 || u < r || l > m) return null;
      for (let d = u; d <= l; d += p) i.add(y && d === 7 ? 0 : d);
      continue;
    }
    if (a.match(/^\d+$/)) {
      let u = parseInt(a, 10);
      if (r === 0 && t === 6 && u === 7) u = 0;
      if (u < r || u > t) return null;
      i.add(u);
      continue;
    }
    return null;
  }
  if (i.size === 0) return null;
  return Array.from(i).sort((a, o) => a - o);
}
function JI(e) {
  let s = e.trim().split(/\s+/);
  if (s.length !== 5) return null;
  let r = [];
  for (let t = 0; t < 5; t++) {
    let i = T(s[t], x[t]);
    if (!i) return null;
    r.push(i);
  }
  return {
    minute: r[0],
    hour: r[1],
    dayOfMonth: r[2],
    month: r[3],
    dayOfWeek: r[4],
  };
}
function f1e(e, s) {
  let r = new Set(e.minute),
    t = new Set(e.hour),
    i = new Set(e.dayOfMonth),
    a = new Set(e.month),
    o = new Set(e.dayOfWeek),
    c = e.dayOfMonth.length === 31,
    f = e.dayOfWeek.length === 7,
    u = new Date(s.getTime());
  (u.setSeconds(0, 0), u.setMinutes(u.getMinutes() + 1));
  let l = 527040;
  for (let p = 0; p < l; p++) {
    let y = u.getMonth() + 1;
    if (!a.has(y)) {
      (u.setMonth(u.getMonth() + 1, 1), u.setHours(0, 0, 0, 0));
      continue;
    }
    let m = u.getDate(),
      d = u.getDay();
    if (!(c && f ? !0 : c ? o.has(d) : f ? i.has(m) : i.has(m) || o.has(d))) {
      (u.setDate(u.getDate() + 1), u.setHours(0, 0, 0, 0));
      continue;
    }
    if (!t.has(u.getHours())) {
      u.setHours(u.getHours() + 1, 0, 0, 0);
      continue;
    }
    if (!r.has(u.getMinutes())) {
      u.setMinutes(u.getMinutes() + 1);
      continue;
    }
    return u;
  }
  return null;
}
var M = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function w(e, s) {
  return new Date(2000, 0, 1, s, e).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}
function F(e, s) {
  let r = new Date();
  return (
    r.setUTCHours(s, e, 0, 0),
    r.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    })
  );
}
function K_(e, s) {
  let r = s?.utc ?? !1,
    t = e.trim().split(/\s+/);
  if (t.length !== 5) return e;
  let [i, a, o, c, f] = t;
  if (a === "*" && o === "*" && c === "*" && f === "*") {
    if (i === "*") return "Every minute";
    let m = i.match(/^\*\/(\d+)$/);
    if (m) {
      let d = parseInt(m[1], 10);
      return d === 1 ? "Every minute" : `Every ${d} minutes`;
    }
  }
  if (i.match(/^\d+$/) && a === "*" && o === "*" && c === "*" && f === "*") {
    let m = parseInt(i, 10);
    if (m === 0) return "Every hour";
    return `Every hour at :${m.toString().padStart(2, "0")}`;
  }
  let u = a.match(/^\*\/(\d+)$/);
  if (i.match(/^\d+$/) && u && o === "*" && c === "*" && f === "*") {
    let m = parseInt(u[1], 10),
      d = parseInt(i, 10),
      g = d === 0 ? "" : ` at :${d.toString().padStart(2, "0")}`;
    return m === 1 ? `Every hour${g}` : `Every ${m} hours${g}`;
  }
  if (!i.match(/^\d+$/) || !a.match(/^\d+$/)) return e;
  let l = parseInt(i, 10),
    p = parseInt(a, 10),
    y = r ? F : w;
  if (o === "*" && c === "*" && f === "*") return `Every day at ${y(l, p)}`;
  if (o === "*" && c === "*" && f.match(/^\d$/)) {
    let m = parseInt(f, 10) % 7,
      d;
    if (r) {
      let g = new Date(),
        k = (m - g.getUTCDay() + 7) % 7;
      (g.setUTCDate(g.getUTCDate() + k),
        g.setUTCHours(p, l, 0, 0),
        (d = M[g.getDay()]));
    } else d = M[m];
    if (d) return `Every ${d} at ${y(l, p)}`;
  }
  if (o === "*" && c === "*" && f === "1-5") return `Weekdays at ${y(l, p)}`;
  return e;
}
function Qre(e) {
  let s = e.trim();
  if (s === "") return { error: "required" };
  let r = s.match(/^(\d+)\s*([smhd])$/i);
  if (r) {
    let t = parseInt(r[1], 10),
      i = r[2].toLowerCase();
    if (t < 1) return { error: "interval must be at least 1" };
    let a;
    switch (i) {
      case "s":
        return { error: "minimum interval is 1 minute" };
      case "m":
        if (t > 59)
          return {
            error: "minute interval must be 1\u201359 (use hours instead)",
          };
        a = t === 1 ? "* * * * *" : `*/${t} * * * *`;
        break;
      case "h":
        if (t > 23)
          return {
            error: "hour interval must be 1\u201323 (use days instead)",
          };
        a = t === 1 ? "0 * * * *" : `0 */${t} * * *`;
        break;
      case "d":
        if (t === 1) {
          a = "0 0 * * *";
          break;
        }
        if (t > 28)
          return {
            error: "day interval must be 1\u201328 (use a cron expression)",
          };
        a = `0 0 */${t} * *`;
        break;
      default:
        return { error: "unknown interval unit" };
    }
    return { cron: a, human: K_(a) };
  }
  if (JI(s) !== null) return { cron: s, human: K_(s) };
  return {
    error: "use an interval (5m, 2h, 1d) or 5-field cron (*/5 * * * *)",
  };
}
import { randomUUID as I } from "crypto";
import { readFileSync as A } from "fs";
import { mkdir as D } from "fs/promises";
import { join as S } from "path";
var Xbt = 300000,
  P = /^\*\/\d+ \* \* \* \*$/,
  v = S(".claude", "scheduled_tasks.json");
function rJ(e) {
  return S(e ?? sn(), v);
}
async function Q7e(e) {
  let s = ae(),
    r;
  try {
    r = await s.readFile(rJ(e), { encoding: "utf-8" });
  } catch (o) {
    if (Rt(o)) return [];
    return (h(o), []);
  }
  let t = xt(r, !1);
  if (!t || typeof t !== "object") return [];
  let i = t;
  if (!Array.isArray(i.tasks)) return [];
  let a = [];
  for (let o of i.tasks) {
    if (
      !o ||
      typeof o.id !== "string" ||
      typeof o.cron !== "string" ||
      typeof o.prompt !== "string" ||
      typeof o.createdAt !== "number"
    ) {
      n(`[ScheduledTasks] skipping malformed task: ${b(o)}`);
      continue;
    }
    if (!JI(o.cron)) {
      n(`[ScheduledTasks] skipping task ${o.id} with invalid cron '${o.cron}'`);
      continue;
    }
    a.push({
      id: o.id,
      cron: o.cron,
      prompt: o.prompt,
      createdAt: o.createdAt,
      ...(typeof o.lastFiredAt === "number" && { lastFiredAt: o.lastFiredAt }),
      ...(o.recurring && { recurring: !0 }),
      ...(o.permanent && { permanent: !0 }),
      ...(typeof o.createdBySessionId === "string" && {
        createdBySessionId: o.createdBySessionId,
      }),
      ...(typeof o.createdByPid === "number" && {
        createdByPid: o.createdByPid,
      }),
      ...(typeof o.createdByProcStart === "string" && {
        createdByProcStart: o.createdByProcStart,
      }),
    });
  }
  return a;
}
function _bn(e) {
  return G1() || GDn(e ?? sn());
}
function uGt(e) {
  if (_bn(e)) return !1;
  let s;
  try {
    s = A(rJ(e), "utf-8");
  } catch {
    return !1;
  }
  let r = xt(s, !1);
  if (!r || typeof r !== "object") return !1;
  let t = r.tasks;
  return Array.isArray(t) && t.length > 0;
}
async function Ybt(e, s) {
  let r = s ?? sn(),
    t = !y8(S(r, ".claude"));
  if (t) await nke(r, S(r, ".claude"));
  await D(S(r, ".claude"), { recursive: !0 });
  let i = { tasks: e.map(({ durable: a, ...o }) => o) };
  await wb(
    rJ(r),
    b(i, null, 2) +
      `
`,
    {
      encoding: "utf-8",
      allowSymlink: !t,
      checkParentDir: t,
      stagingDir: S(r, ".claude", rL),
    },
  );
}
async function nCe(e, s, r, t, i) {
  let a = I().slice(0, 8),
    o = {
      id: a,
      cron: e,
      prompt: s,
      createdAt: Date.now(),
      ...(r && { recurring: !0 }),
    };
  if (!t) return (m8({ ...o, ...(i && { agentId: i }) }), a);
  let c = await Q7e();
  return (
    c.push({
      ...o,
      createdBySessionId: K(),
      createdByPid: process.pid,
      createdByProcStart: O6(),
    }),
    await Ybt(c),
    a
  );
}
async function SK(e, s) {
  if (e.length === 0) return;
  if (s === void 0 && HL(e) === e.length) return;
  let r = new Set(e),
    t = await Q7e(s),
    i = t.filter((a) => !r.has(a.id));
  if (i.length === t.length) return;
  await Ybt(i, s);
}
async function qQn(e, s, r) {
  if (e.length === 0) return;
  let t = new Set(e),
    i = await Q7e(r),
    a = !1;
  for (let o of i) if (t.has(o.id)) ((o.lastFiredAt = s), (a = !0));
  if (!a) return;
  await Ybt(i, r);
}
async function vj(e) {
  let s = await Q7e(e);
  if (e !== void 0) return s;
  let r = kg().map((t) => ({ ...t, durable: !1 }));
  return [...s, ...r];
}
function Z7e(e, s) {
  let r = JI(e);
  if (!r) return null;
  let t = f1e(r, new Date(s));
  return t ? t.getTime() : null;
}
var mN = {
  recurringFrac: 0.5,
  recurringCapMs: 1800000,
  oneShotMaxMs: 90000,
  oneShotFloorMs: 0,
  oneShotMinuteMod: 30,
  recurringMaxAgeMs: 604800000,
  cacheLeadMs: 15000,
};
function C(e) {
  let s = parseInt(e.slice(0, 8), 16) / 4294967296;
  return Number.isFinite(s) ? s : 0;
}
function eXe(e, s, r, t = mN) {
  let i = Z7e(e, s);
  if (i === null) return null;
  let a = Z7e(e, i);
  if (a === null) return i;
  let o = a - i;
  if (
    P.test(e) &&
    t.cacheLeadMs > 0 &&
    t.cacheLeadMs < o &&
    o >= Xbt &&
    o - t.cacheLeadMs < Xbt
  )
    return s + o - t.cacheLeadMs;
  let c = Math.min(C(r) * t.recurringFrac * o, t.recurringCapMs);
  return i + c;
}
function Jbt(e, s, r, t = mN) {
  let i = Z7e(e, s);
  if (i === null) return null;
  if (new Date(i).getMinutes() % t.oneShotMinuteMod !== 0) return i;
  let a = t.oneShotFloorMs + C(r) * (t.oneShotMaxMs - t.oneShotFloorMs);
  return Math.max(i - a, s);
}
function zQn(e, s) {
  return e.filter((r) => {
    let t = Z7e(r.cron, r.createdAt);
    return t !== null && t < s;
  });
}
export {
  JI,
  f1e,
  K_,
  Qre,
  Xbt,
  rJ,
  Q7e,
  _bn,
  uGt,
  Ybt,
  nCe,
  SK,
  qQn,
  vj,
  Z7e,
  mN,
  eXe,
  Jbt,
  zQn,
};
