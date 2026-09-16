// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { fA, uf, qCt, yr, si, mb, rZe, t1, H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { xU, qir } from "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import { Mo } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { Nu, T7e, A$, C$ } from "./chunk-ddtmwhn7.js";
var T = 16,
  Y = 64;
function P(e, i) {
  if (e.startedAt !== i.startedAt) return e.startedAt < i.startedAt;
  let s = e.procStart ?? "",
    t = i.procStart ?? "";
  if (s !== t) return s < t;
  return e.pid < i.pid;
}
function E(e, i, s) {
  return i.filter(
    (t) =>
      t.pid !== s &&
      t.name !== void 0 &&
      t.procStart !== void 0 &&
      yr(t.name) === e,
  );
}
function D(e) {
  return new Set(e.flatMap((i) => (i.name === void 0 ? [] : [yr(i.name)])));
}
function L(e, i, s = xU) {
  let t = (r) => `${oe(e, fA - r.length - 1)}-${r}`;
  for (let r = 0; r < T; r++) {
    let o = t(s());
    if (!i.has(yr(o))) return o;
  }
  for (let r = 2; ; r++) {
    let o = t(`${s()}-${r}`);
    if (!i.has(yr(o))) return o;
  }
}
function O(e) {
  let { desiredName: i, self: s, live: t, moment: r, slug: o } = e,
    a = e.suffixBase ?? i,
    c = yr(i);
  if (!c) return { kind: "keep" };
  let d = E(c, t, s.pid),
    u =
      r === "rename"
        ? d
        : r === "startup"
          ? d.filter((p) => P(p, s))
          : d.filter((p) =>
              P(
                { ...p, startedAt: p.nameSince ?? p.startedAt },
                { ...s, startedAt: s.nameSince ?? s.startedAt },
              ),
            );
  if (u.length === 0) return { kind: "keep" };
  return { kind: "yield", newName: L(a, D(t), o), holders: u };
}
class N {
  correspondents = new Map();
  senderMode = null;
  userTypedName = void 0;
  hasAdopter = !1;
  lastYield = void 0;
  yielded = Le();
  pendingYield = void 0;
  noteCorrespondent(e, i, s) {
    if (!e || uf(e).scheme !== "uds") return;
    if (
      (this.correspondents.delete(e),
      this.correspondents.set(e, { pid: i, procStart: s }),
      this.correspondents.size > Y)
    ) {
      let t = this.correspondents.keys().next().value;
      if (t !== void 0) this.correspondents.delete(t);
    }
  }
  announceYield(e, i) {
    ((this.pendingYield = [e, i]), this.yielded.emit(e, i));
  }
  reset() {
    (this.correspondents.clear(),
      (this.lastYield = void 0),
      this.yielded.clear(),
      (this.pendingYield = void 0),
      (this.senderMode = null),
      (this.userTypedName = void 0),
      (this.hasAdopter = !1));
  }
}
var F = new j(() => new N());
function rh() {
  return F.of(B().host);
}
function dSn(e, i, s) {
  rh().noteCorrespondent(e, i, s);
}
function D3t() {
  let e = rh(),
    i = e.pendingYield;
  return ((e.pendingYield = void 0), i);
}
var w = { whenRegistered: rZe, listLive: A$ };
function v() {
  return H("tengu_session_name_uniqueness", !0);
}
async function c7e(e, i, s = w, t = e) {
  if (!v()) return { name: e, yielded: !1 };
  if (((t = x(t) ?? t), !(await s.whenRegistered())))
    return { name: e, yielded: !1 };
  try {
    let r = await s.listLive(),
      o = r.find((u) => u.pid === process.pid);
    if (!o) return { name: e, yielded: !1 };
    let a = O({
      desiredName: e,
      self: o,
      live: r,
      moment: i,
      slug: s.slug,
      suffixBase: t,
    });
    if (a.kind === "keep") return { name: e, yielded: !1 };
    let c = U(e, o),
      d = si(c !== void 0 && yr(c) !== yr(e) ? c : a.newName) || a.newName;
    return (
      n(
        `[session-name] "${e}" is held by live pid ${a.holders[0]?.pid}; this session takes "${d}"`,
        { level: "info" },
      ),
      y("session_name_collision"),
      (rh().lastYield = { base: yr(t), name: d }),
      { name: d, yielded: !0 }
    );
  } catch (r) {
    return (
      n(`[session-name] uniqueness check failed, keeping "${e}": ${l(r)}`, {
        level: "warn",
      }),
      f("session_name_collision", "check_failed"),
      { name: e, yielded: !1 }
    );
  }
}
function U(e, i) {
  let s = Wpe(e, i.name);
  if (s !== void 0) return s;
  let t = i.name,
    r = t === void 0 ? void 0 : b(t);
  if (t === void 0 || r === void 0) return;
  let o = x(e) ?? e,
    a = oe(o, fA - r.suffix.length - 1);
  return r.base.toLowerCase() === a.toLowerCase() ? t : void 0;
}
function b(e) {
  let i = /-([a-z]+-[a-z]+)(-\d{1,4})?$/i.exec(e);
  if (!i || !qir(i[1].toLowerCase())) return;
  let s = e.slice(0, e.length - i[0].length);
  return s.length > 0 ? { base: s, suffix: i[0].slice(1) } : void 0;
}
function Wpe(e, i) {
  if (!v()) return;
  let s = rh().lastYield,
    t = x(e) ?? e;
  return s !== void 0 &&
    i !== void 0 &&
    yr(s.name) === yr(i) &&
    s.base === yr(t)
    ? i
    : void 0;
}
function h(e) {
  let i = mb();
  return i !== void 0 && yr(i.name) === yr(e);
}
function x(e) {
  return b(e)?.base;
}
var z = 3000;
function R(e) {
  setTimeout(e, z).unref();
}
async function pSn(e) {
  let {
      sessionNameArg: i,
      interactive: s,
      writeName: t,
      onRenamed: r,
      deps: o,
    } = e,
    a = e.scheduleRecheck ?? R;
  if (i) await t(i, e.sessionNameArgSource ?? "user");
  let c = mb();
  if (!s || !c || c.source === "derived") return;
  if (i) rh().userTypedName = i;
  let d = async (u, p, g = u) => {
    if (p && !h(u)) return;
    let m = await c7e(u, p ? "recheck" : "startup", o, g);
    if (!h(u)) return;
    if (!m.yielded) {
      if (!p) a(() => void d(u, !0));
      return;
    }
    if ((await t(m.name, "collision"), rh().userTypedName === u))
      rh().userTypedName = m.name;
    if ((r?.(m.name, u), rh().announceYield(m.name, u), !p))
      a(() => void d(m.name, !0, u));
  };
  await d(c.name, !1);
}
function lbt(e) {
  let { name: i, onYield: s, deps: t } = e,
    r = e.suffixBase ?? i;
  (e.scheduleRecheck ?? R)(() => {
    (async () => {
      if (!h(i)) return;
      let a = await c7e(i, "recheck", t, r);
      if (!a.yielded || !h(i)) return;
      if (rh().userTypedName === i) rh().userTypedName = a.name;
      await s(a.name, i);
    })();
  });
}
function L3t(e, i, s) {
  let t = mb();
  if (t === void 0 || t.source === "derived") return;
  if (t.source === "collision" && Wpe(e?.name ?? i, t.name) !== void 0) return;
  let r = yr(t.name);
  if ((e !== void 0 && r === yr(e.name)) || r === yr(i) || r === yr(s)) return;
  return t;
}
async function Gpe(e, i, s = {}) {
  let t = s.deps ?? w,
    r = e ? si(e) : "";
  if (!r || !(await t.whenRegistered())) return;
  if (s.autoOnly) {
    await t1(r, i, "auto");
    return;
  }
  let o = mb();
  if (
    o !== void 0 &&
    o.source !== "auto" &&
    o.source !== "derived" &&
    yr(o.name) === yr(r)
  )
    return;
  let a = await c7e(r, "rename", t);
  if (L3t(o, r, a.name)) return;
  let c = async (d, u) => {
    (await t1(d, i, "collision"), rh().announceYield(d, u));
  };
  if (!a.yielded) {
    (await t1(r, i), lbt({ name: r, deps: t, onYield: c }));
    return;
  }
  if (
    (await t1(a.name, i, "collision"),
    lbt({ name: a.name, suffixBase: r, deps: t, onYield: c }),
    a.name === o?.name)
  )
    return;
  rh().announceYield(a.name, r);
}
async function fSn(e, i, s, t, r = T7e, o = w.listLive) {
  if (!v() || !Mo() || rh().correspondents.size === 0) return;
  let a = C$(),
    [c, d, u] = [e, i, s].map(si),
    p = `This session was renamed from "${c}" to "${d}" ("${u}" is held by another live session on this machine). Address this one as "${d}" from now on.`,
    g;
  try {
    g = new Map((await o(t)).map((m) => [m.pid, m.sock]));
  } catch (m) {
    n(
      `[session-name] rename notice skipped: registry unreadable (${A(m) ?? l(m)})`,
    );
    return;
  }
  await Promise.all(
    [...rh().correspondents].map(async ([m, { pid: C, procStart: k }]) => {
      let { scheme: _, target: S } = uf(m);
      if (_ !== "uds" || !S || (a !== void 0 && qCt(S, a)) || g.get(C) !== S)
        return;
      try {
        await r(S, p, t, d, void 0, void 0, rh().senderMode?.(), {
          trackReceipts: !1,
          expectPeerPid: C,
          ...(k !== void 0 && { expectPeerProcStart: k }),
        });
      } catch (M) {
        n(
          `[session-name] rename notice to ${Nu(m)} failed: ${A(M) ?? "send error"}`,
        );
      }
    }),
  );
}
export { rh, dSn, D3t, c7e, Wpe, pSn, lbt, L3t, Gpe, fSn };
