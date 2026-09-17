// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _n, Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { qr, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError as h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { qAe, oh, Aj, Jpe, lG, Nh, vT, dN, TC } from "./chunk-djserjj5.js";
import { readRoster as IE, updateRoster as S$, writeReapedTerminalState as Ope, Ep, al } from "./chunk-7wsy8vxb.js";
import { pt } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { Wi, H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { withFeatureTelemetry as Sr } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { sigtermThenKill as I5, reapDetachedRepl as Tq, captureProcessStartTimeAsync as Xse } from "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import { pg } from "../../00-第三方库/_未识别/第三方库-其他/chunk-jm5cswvd.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { pe } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
import { lstat as B, readdir as b, unlink as p } from "fs/promises";
import { connect as v } from "net";
import { basename as k, join as x } from "path";
async function HPt(e, t) {
  if (t.launch.mode !== "exec" || !e) return null;
  try {
    let i = await Wi(dN(e), 8192);
    if (i == null) return null;
    let r = JSON.parse(i);
    if (typeof r?.code !== "number") return null;
    let s =
        pt(typeof r.tail === "string" ? r.tail : "")
          .replace(
            /\r\n?/g,
            `
`,
          )
          .split(
            `
`,
          )
          .findLast((w) => w.trim())
          ?.trim() ?? "",
      c = al(qr(s), Ep);
    if (r.code === 0)
      return { state: "done", detail: c || "(no output)", code: 0 };
    let l = typeof r.signal === "string" ? r.signal : void 0;
    if (l === "SIGINT" || l === "SIGQUIT")
      return { state: "stopped", detail: "stopped", code: r.code };
    let f = l ? `${l} (${r.code})` : `exit ${r.code}`;
    return {
      state: "crashed",
      detail: c ? `${f} \u2014 ${c}` : f,
      signal: l,
      code: r.code,
    };
  } catch {
    return null;
  }
}
async function NZt(e = {}, t) {
  return Sr("daemon_bg_reap_all", async () => {
    let i = await IE({ silent: !0 }, t),
      r = new Map();
    for (let [a, o] of Object.entries(i.workers))
      r.set(a, {
        pid: o.pid,
        procStart: o.procStart,
        ptySock: o.ptySock,
        dispatch: o.dispatch,
        replPid: o.replPid,
        replProcStart: o.replProcStart,
      });
    let s = P() === "windows",
      [c, l] = s ? [Jpe(), ".pid"] : [qAe(), ".sock"],
      f = s && t ? await FZt(t) : await b(c).catch(() => []),
      w = new Set(f.filter((a) => a.endsWith(l)));
    for (let a of f) {
      if (!a.endsWith(l)) {
        if (!s) {
          let d = [".err", ".late", ".exec-exit", ".err.read"].find((g) =>
            a.endsWith(`.sock${g}`),
          );
          if (d && !w.has(a.slice(0, -d.length))) {
            let g = a.slice(0, -`.sock${d}`.length);
            if (!(d === ".exec-exit" && r.has(g)))
              await p(x(c, a)).catch(() => {});
          }
        }
        continue;
      }
      let o = a.slice(0, -l.length);
      if (r.has(o)) continue;
      let u = s
        ? Number((t ? await $Zt(t, o) : await Wi(lG(o), FWe)) ?? "0")
        : 0;
      r.set(o, { pid: u, ptySock: oh(o) });
    }
    if (!s) {
      let a = new Set();
      for (let u of r.values()) if (u.ptySock) a.add(u.ptySock);
      let o = await b(Aj()).catch(() => []);
      for (let u of o) {
        if (!u.endsWith(".pty.sock")) continue;
        let d = x(Aj(), u);
        if (a.has(d)) continue;
        r.set(`spare:${u}`, { pid: 0, ptySock: d });
      }
    }
    let m = 0,
      S = new Set();
    if (
      (await Promise.all(
        Array.from(r.entries()).map(async ([a, o]) => {
          let u = o.dispatch ? await HPt(o.ptySock, o.dispatch) : null;
          if (o.ptySock && (await sle(o.ptySock, t))) m++;
          else if (o.pid) {
            let d = await UZt(o.pid, o.procStart),
              g = d !== "unverified" && (await Tq(o.replPid, o.replProcStart));
            switch (d) {
              case "killed":
                m++;
                break;
              case "unverified":
                S.add(a);
                return;
              case "gone":
              case "foreign":
                if (g) m++;
                break;
              default:
            }
          }
          if (!a.startsWith("spare:")) {
            let d = { state: "stopped", detail: "stopped" },
              g =
                u?.state === "done" ? u : e.supervisorKilledAll ? d : (u ?? d);
            if ((await Ope(a, g.state, g.detail, void 0, t), s && t))
              await t
                .delete(Ce.daemon(["pty-pids", k(dN(o.ptySock ?? oh(a)))]))
                .catch(() => {});
            else await p(dN(o.ptySock ?? oh(a))).catch(() => {});
          }
          if (s)
            if (t) await L(t, a);
            else {
              await p(lG(a)).catch(() => {});
              let d = Nh(oh(a));
              (await p(d).catch(() => {}),
                await p(`${d}.read`).catch(() => {}),
                await p(vT(oh(a))).catch(() => {}));
            }
        }),
      ),
      r.size > 0)
    )
      await S$((a) => {
        for (let o of r.keys()) if (!S.has(o)) delete a.workers[o];
      }, t).catch(h);
    return { reaped: m, kept: S.size };
  });
}
async function FZt(e) {
  let t = [],
    i;
  do {
    let r = await e
      .listEntries(
        { namespace: "daemon", relPath: ["pty-pids"] },
        { cursor: i, skipKeyStats: !0, skipScopeStats: !0 },
      )
      .catch(() => {
        return;
      });
    if (r === void 0 || !r.ok) return [];
    for (let s of r.value.items)
      if (s.kind === "key" && s.key.namespace === "daemon") {
        let c = s.key.relPath.at(-1);
        if (c !== void 0 && s.key.relPath.length === 2 && _n(c)) t.push(c);
      }
    i = r.value.cursor;
  } while (i !== void 0);
  return t;
}
var FWe = 4096;
async function M(e) {
  try {
    let t = await B(lG(e));
    return !t.isFile() || t.size > FWe;
  } catch (t) {
    return !W(t);
  }
}
async function $Zt(e, t) {
  if (await M(t)) return null;
  let i = await e
    .readText([
      { key: Ce.daemon(["pty-pids", `${t}.pid`]), offset: 0, length: FWe + 1 },
    ])
    .catch(() => {
      return;
    });
  if (i === void 0 || !i.ok) return null;
  let r = i.value.items[0];
  if (!r.found || r.totalBytes > FWe) return null;
  return r.value;
}
async function L(e, t) {
  (await e.delete(Ce.daemon(["pty-pids", `${t}.pid`])).catch(() => {}),
    await E(e, oh(t)));
}
async function E(e, t) {
  let i = Nh(t);
  for (let r of [k(i), `${k(i)}.read`, k(vT(t))])
    await e.delete(Ce.daemon(["pty-pids", r])).catch(() => {});
}
function sle(e, t) {
  return new Promise((i) => {
    let r = !1,
      s = (l) => {
        if (r) return;
        ((r = !0), i(l));
      },
      c = v(e);
    (c.unref(),
      c.setTimeout(2000, () => {
        (c.destroy(), s(!1));
      }),
      c.on("error", () => {
        p(e).catch(() => {});
        let l = Nh(e);
        if (t && P() === "windows") E(t, e).catch(() => {});
        else
          (p(l).catch(() => {}),
            p(`${l}.read`).catch(() => {}),
            p(vT(e)).catch(() => {}));
        s(!1);
      }),
      c.once("connect", () => {
        (c.resume(), c.write(TC({ t: "kill", sig: "SIGTERM" })));
      }),
      c.once("close", () => s(!0)));
  });
}
function xit(e) {
  return new Promise((t) => {
    let i = !1,
      r = (c) => {
        if (i) return;
        ((i = !0), t(c));
      },
      s = v(e);
    (s.unref(),
      s.setTimeout(250, () => {
        (s.destroy(), r(!1));
      }),
      s.on("error", () => r(!1)),
      s.once("connect", () => {
        (s.end(TC({ t: "pong" })), r(!0));
      }));
  });
}
async function UZt(e, t) {
  try {
    process.kill(e, 0);
  } catch (r) {
    if (A(r) !== "ESRCH") return "foreign";
    return I5([-e, e], t) ? "killed" : "gone";
  }
  if (t === void 0) return "foreign";
  let i = await Xse(e);
  if (i === void 0) return "unverified";
  if (i !== t) return "foreign";
  return I5([-e, e], t) ? "killed" : "gone";
}
var y = pe(pg(), 1),
  R = ["dev", "engine"];
function Eye(e) {
  return R.find((t) => e.includes(`-${t}.`)) ?? null;
}
function MWe(e) {
  return Eye(e) !== null;
}
function Aye(e, t) {
  if (!e) return !1;
  let i = Eye(e),
    r = Eye(t);
  return i !== null && r !== null && i !== r;
}
function Cye(e) {
  let t;
  for (let f of e.matchAll(/-(?:dev|engine)\.(\d{8})\.t(\d{6})(?:\.|$)/g))
    t = f;
  let i = t?.[1],
    r = t?.[2];
  if (!i || !r) return null;
  let s = Date.UTC(
    Number(i.slice(0, 4)),
    Number(i.slice(4, 6)) - 1,
    Number(i.slice(6, 8)),
    Number(r.slice(0, 2)),
    Number(r.slice(2, 4)),
    Number(r.slice(4, 6)),
  );
  return new Date(s)
    .toISOString()
    .slice(0, 19)
    .replace(/[-:]/g, "")
    .replace("T", "t") === `${i}t${r}`
    ? s
    : null;
}
function X$n(e, t) {
  let i = Cye(e),
    r = Cye(t);
  return i !== null && r !== null && r < i;
}
function JHe(e, t) {
  let i = Cye(e),
    r = Cye(t);
  if (i !== null && r !== null) {
    if (Eye(e) !== Eye(t)) return !1;
    return i > r;
  }
  if (MWe(e) || MWe(t)) return !1;
  return y.valid(e) !== null && y.valid(t) !== null && y.gt(e, t);
}
function DZt(e, t, i) {
  if (!e) return !1;
  if (e === i) return !0;
  let r = Cye(e);
  if (r !== null) return r >= t.commitMs;
  if (MWe(e)) return !1;
  return y.valid(e) !== null && y.gte(e, t.release);
}
var _ = new Set([1000, 1002, 1003, 1004, 1006, 2004, 2031]),
  C = /\x1b\[\?([\d;]+)([hl])/g;
function NWe() {
  let e = new Set(),
    t = "";
  return {
    feed(i, r) {
      let s = t ? t + i : i,
        c = 0,
        l = !1;
      for (let m of s.matchAll(C)) {
        let S = m[2] === "h";
        for (let a of m[1].split(";")) {
          let o = Number(a);
          if (_.has(o) && e.has(o) !== S) {
            if (S) (e.add(o), r?.(o));
            else e.delete(o);
            l = !0;
          }
        }
        c = m.index + m[0].length;
      }
      let f = s.slice(Math.max(c, s.length - 16)),
        w = f.lastIndexOf("\x1B");
      return (
        (t =
          w >= 0 && /^\x1b(\[(\?[\d;]*)?)?$/.test(f.slice(w))
            ? f.slice(w)
            : ""),
        l
      );
    },
    seed(i) {
      for (let r of i) if (_.has(r)) e.add(r);
    },
    snapshot() {
      return [...e];
    },
  };
}
import { freemem as D } from "os";
function LZt() {
  let e = H("tengu_bg_low_mem_mb", 1024) * 1024 * 1024;
  if (e <= 0) return { lowMem: !1, level: void 0 };
  if (P() !== "macos") return { lowMem: D() < e, level: void 0 };
  let t = I();
  return { lowMem: t !== void 0 && t >= N, level: t };
}
function W8() {
  return LZt().lowMem;
}
var T = { normal: 1, warning: 2, critical: 4 },
  N = T.critical;
function I() {
  try {
    let e = Bun.ant.memoryPressureLevel();
    return e === null ? void 0 : T[e];
  } catch (e) {
    n(
      `bg low-mem: memoryPressureLevel failed: ${e instanceof Error ? e.message : String(e)}`,
      { level: "warn" },
    );
    return;
  }
}
function MZt() {
  return H("tengu_bg_attach_upgrade", !0);
}
export {
  Eye,
  MWe,
  Aye,
  Cye,
  X$n,
  JHe,
  DZt,
  NWe,
  LZt,
  W8,
  MZt,
  HPt,
  NZt,
  FZt,
  FWe,
  $Zt,
  sle,
  xit,
  UZt,
};
