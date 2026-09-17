// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { maxSlugLength, parsePeerAddress, isPossiblySamePath, slugify, sanitizeSessionName, getRegisteredSessionName, whenSessionRegistered, updateSessionName, getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { generateAdjectiveNounName, isAdjectiveNounName } from "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import { isCrossSessionMessagingEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { Nu, sendToUdsSocket, listAllLiveSessions, ownMessagingSocket } from "./chunk-ddtmwhn7.js";
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
      slugify(t.name) === e,
  );
}
function D(e) {
  return new Set(e.flatMap((i) => (i.name === void 0 ? [] : [slugify(i.name)])));
}
function generateUniqueName(e, i, s = generateAdjectiveNounName) {
  let t = (r) => `${truncateToCodeUnits(e, maxSlugLength - r.length - 1)}-${r}`;
  for (let r = 0; r < T; r++) {
    let o = t(s());
    if (!i.has(slugify(o))) return o;
  }
  for (let r = 2; ; r++) {
    let o = t(`${s()}-${r}`);
    if (!i.has(slugify(o))) return o;
  }
}
function O(e) {
  let { desiredName: i, self: s, live: t, moment: r, slug: o } = e,
    a = e.suffixBase ?? i,
    c = slugify(i);
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
  return { kind: "yield", newName: generateUniqueName(a, D(t), o), holders: u };
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
    if (!e || parsePeerAddress(e).scheme !== "uds") return;
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
function getSessionNamingState() {
  return F.of(B().host);
}
function noteVettedCorrespondent(e, i, s) {
  getSessionNamingState().noteCorrespondent(e, i, s);
}
function takePendingYield() {
  let e = getSessionNamingState(),
    i = e.pendingYield;
  return ((e.pendingYield = void 0), i);
}
var w = { whenRegistered: whenSessionRegistered, listLive: listAllLiveSessions };
function v() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_session_name_uniqueness", !0);
}
async function claimUniqueSessionName(e, i, s = w, t = e) {
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
      d = sanitizeSessionName(c !== void 0 && slugify(c) !== slugify(e) ? c : a.newName) || a.newName;
    return (
      n(
        `[session-name] "${e}" is held by live pid ${a.holders[0]?.pid}; this session takes "${d}"`,
        { level: "info" },
      ),
      logFeatureOk("session_name_collision"),
      (getSessionNamingState().lastYield = { base: slugify(t), name: d }),
      { name: d, yielded: !0 }
    );
  } catch (r) {
    return (
      n(`[session-name] uniqueness check failed, keeping "${e}": ${l(r)}`, {
        level: "warn",
      }),
      logFeatureBad("session_name_collision", "check_failed"),
      { name: e, yielded: !1 }
    );
  }
}
function U(e, i) {
  let s = settledYieldFor(e, i.name);
  if (s !== void 0) return s;
  let t = i.name,
    r = t === void 0 ? void 0 : b(t);
  if (t === void 0 || r === void 0) return;
  let o = x(e) ?? e,
    a = truncateToCodeUnits(o, maxSlugLength - r.suffix.length - 1);
  return r.base.toLowerCase() === a.toLowerCase() ? t : void 0;
}
function b(e) {
  let i = /-([a-z]+-[a-z]+)(-\d{1,4})?$/i.exec(e);
  if (!i || !isAdjectiveNounName(i[1].toLowerCase())) return;
  let s = e.slice(0, e.length - i[0].length);
  return s.length > 0 ? { base: s, suffix: i[0].slice(1) } : void 0;
}
function settledYieldFor(e, i) {
  if (!v()) return;
  let s = getSessionNamingState().lastYield,
    t = x(e) ?? e;
  return s !== void 0 &&
    i !== void 0 &&
    slugify(s.name) === slugify(i) &&
    s.base === slugify(t)
    ? i
    : void 0;
}
function h(e) {
  let i = getRegisteredSessionName();
  return i !== void 0 && slugify(i.name) === slugify(e);
}
function x(e) {
  return b(e)?.base;
}
var z = 3000;
function R(e) {
  setTimeout(e, z).unref();
}
async function claimSessionNameAtStartup(e) {
  let {
      sessionNameArg: i,
      interactive: s,
      writeName: t,
      onRenamed: r,
      deps: o,
    } = e,
    a = e.scheduleRecheck ?? R;
  if (i) await t(i, e.sessionNameArgSource ?? "user");
  let c = getRegisteredSessionName();
  if (!s || !c || c.source === "derived") return;
  if (i) getSessionNamingState().userTypedName = i;
  let d = async (u, p, g = u) => {
    if (p && !h(u)) return;
    let m = await claimUniqueSessionName(u, p ? "recheck" : "startup", o, g);
    if (!h(u)) return;
    if (!m.yielded) {
      if (!p) a(() => void d(u, !0));
      return;
    }
    if ((await t(m.name, "collision"), getSessionNamingState().userTypedName === u))
      getSessionNamingState().userTypedName = m.name;
    if ((r?.(m.name, u), getSessionNamingState().announceYield(m.name, u), !p))
      a(() => void d(m.name, !0, u));
  };
  await d(c.name, !1);
}
function scheduleSettledRecheck(e) {
  let { name: i, onYield: s, deps: t } = e,
    r = e.suffixBase ?? i;
  (e.scheduleRecheck ?? R)(() => {
    (async () => {
      if (!h(i)) return;
      let a = await claimUniqueSessionName(i, "recheck", t, r);
      if (!a.yielded || !h(i)) return;
      if (getSessionNamingState().userTypedName === i) getSessionNamingState().userTypedName = a.name;
      await s(a.name, i);
    })();
  });
}
function renameSupersededDuringScan(e, i, s) {
  let t = getRegisteredSessionName();
  if (t === void 0 || t.source === "derived") return;
  if (t.source === "collision" && settledYieldFor(e?.name ?? i, t.name) !== void 0) return;
  let r = slugify(t.name);
  if ((e !== void 0 && r === slugify(e.name)) || r === slugify(i) || r === slugify(s)) return;
  return t;
}
async function reclaimSessionNameOnResume(e, i, s = {}) {
  let t = s.deps ?? w,
    r = e ? sanitizeSessionName(e) : "";
  if (!r || !(await t.whenRegistered())) return;
  if (s.autoOnly) {
    await updateSessionName(r, i, "auto");
    return;
  }
  let o = getRegisteredSessionName();
  if (
    o !== void 0 &&
    o.source !== "auto" &&
    o.source !== "derived" &&
    slugify(o.name) === slugify(r)
  )
    return;
  let a = await claimUniqueSessionName(r, "rename", t);
  if (renameSupersededDuringScan(o, r, a.name)) return;
  let c = async (d, u) => {
    (await updateSessionName(d, i, "collision"), getSessionNamingState().announceYield(d, u));
  };
  if (!a.yielded) {
    (await updateSessionName(r, i), scheduleSettledRecheck({ name: r, deps: t, onYield: c }));
    return;
  }
  if (
    (await updateSessionName(a.name, i, "collision"),
    scheduleSettledRecheck({ name: a.name, suffixBase: r, deps: t, onYield: c }),
    a.name === o?.name)
  )
    return;
  getSessionNamingState().announceYield(a.name, r);
}
async function notifyCorrespondentsOfRename(e, i, s, t, r = sendToUdsSocket, o = w.listLive) {
  if (!v() || !isCrossSessionMessagingEnabled() || getSessionNamingState().correspondents.size === 0) return;
  let a = ownMessagingSocket(),
    [c, d, u] = [e, i, s].map(sanitizeSessionName),
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
    [...getSessionNamingState().correspondents].map(async ([m, { pid: C, procStart: k }]) => {
      let { scheme: _, target: S } = parsePeerAddress(m);
      if (_ !== "uds" || !S || (a !== void 0 && isPossiblySamePath(S, a)) || g.get(C) !== S)
        return;
      try {
        await r(S, p, t, d, void 0, void 0, getSessionNamingState().senderMode?.(), {
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
export { getSessionNamingState, noteVettedCorrespondent, takePendingYield, claimUniqueSessionName, settledYieldFor, claimSessionNameAtStartup, scheduleSettledRecheck, renameSupersededDuringScan, reclaimSessionNameOnResume, notifyCorrespondentsOfRename };
