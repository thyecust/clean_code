// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, bi } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M4t } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { qt } from "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { ye, Rd, pie } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { H, od } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Su, ri } from "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import { s, c, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { homedir as x, hostname as v } from "os";
import { dirname as U, join as y } from "path";
function a(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/(\.(local|lan|home|localdomain))+$/, "");
}
var f = "tengu_violin_fret";
async function w() {
  try {
    return await od(f);
  } catch {
    return !1;
  }
}
function C() {
  try {
    return H(f, !1);
  } catch {
    return !1;
  }
}
async function A2n() {
  return (await Su()) && (await w());
}
function JDt() {
  return ri() && C();
}
var Mlt = 1,
  Nlt = "unattended-serving:v1:auto-arm-classifier",
  E = "unattended-serving-consent.json",
  _ = m(() =>
    c({
      version: k(Mlt),
      choice: X(["accepted", "declined"]),
      terms: s(),
      decidedAt: s(),
      hostname: s(),
    }),
  );
function g() {
  return y(x(), ".claude", "state", E);
}
function Knn(e = v()) {
  return M4t(a(e));
}
function p() {
  return {
    readText: async () => {
      try {
        return await qt().read(g());
      } catch (e) {
        if (W(e)) return;
        throw e;
      }
    },
    writeText: async (e) => {
      let t = g();
      (await qt().mkdir(U(t), 448), await qt().atomicWrite(t, e, 384));
    },
    now: () => new Date(),
    hostname: v,
  };
}
async function CIe(e) {
  let t = e === void 0 ? i() : void 0,
    r = Date.now(),
    o = t?.writes,
    { choice: d, unreadable: S, staleYes: h } = await A(e ?? p());
  if (
    t !== void 0 &&
    o === t.writes &&
    (t.view === void 0 || !u(t) || r >= t.view.readAt)
  ) {
    if (
      ((t.view = { choice: d, readAt: r, unreadable: S, staleYes: h === !0 }),
      u(t))
    )
      t.staleUnresolved = !1;
  }
  return d;
}
async function A(e) {
  let t;
  try {
    t = await e.readText();
  } catch (r) {
    return (
      n(`unattended-serving consent: store unreadable (${l(r)})`, {
        level: "warn",
      }),
      { choice: "unset", unreadable: !0 }
    );
  }
  if (t === void 0) return { choice: "unset", unreadable: !1 };
  try {
    let r = _().safeParse(z(t));
    if (!r.success) return { choice: "unset", unreadable: !0 };
    let o =
      r.data.choice === "declined" ||
      (a(r.data.hostname) === a(e.hostname()) && r.data.terms === Nlt);
    return {
      choice: o ? r.data.choice : "unset",
      unreadable: !1,
      staleYes: !o && r.data.choice === "accepted",
    };
  } catch {
    return { choice: "unset", unreadable: !0 };
  }
}
async function C3e(e, t) {
  let r = t === void 0 ? i() : void 0,
    o = t ?? p();
  try {
    if (
      (await o.writeText(
        b(
          {
            version: Mlt,
            choice: e,
            terms: Nlt,
            decidedAt: o.now().toISOString(),
            hostname: a(o.hostname()),
          },
          null,
          2,
        ) +
          `
`,
      ),
      r !== void 0)
    )
      ((r.writes += 1),
        (r.view = {
          choice: e,
          readAt: Date.now(),
          unreadable: !1,
          staleYes: !1,
        }),
        (r.staleUnresolved = !1));
    return !0;
  } catch (d) {
    return (
      n(`unattended-serving consent: answer not saved (${l(d)})`, {
        level: "warn",
      }),
      !1
    );
  }
}
var T = 3000,
  D = new j(() => ({
    view: void 0,
    refresh: void 0,
    refreshStartedAt: void 0,
    abandoned: void 0,
    staleUnresolved: !1,
    writes: 0,
  }));
function i() {
  return bi(D);
}
function Kle() {
  let e = i();
  if (!u(e)) M(e);
  return e.view?.choice ?? "unset";
}
function u(e, t = Date.now()) {
  if (e.view === void 0) return !1;
  let r = t - e.view.readAt;
  return r >= 0 && r <= T;
}
var N = 1500;
function P(e, t) {
  if (e.refresh !== t || e.abandoned !== void 0) return !1;
  return (
    (e.refresh = void 0),
    (e.refreshStartedAt = void 0),
    (e.abandoned = t),
    t.finally(() => {
      if (e.abandoned === t) e.abandoned = void 0;
    }),
    !0
  );
}
function M(e) {
  if (e.refresh !== void 0) {
    if (
      (e.refreshStartedAt !== void 0 &&
        performance.now() - e.refreshStartedAt <= N) ||
      !P(e, e.refresh)
    )
      return e.refresh;
  }
  e.refreshStartedAt = performance.now();
  let t = CIe()
    .catch(() => {
      return;
    })
    .finally(() => {
      if (e.refresh === t)
        ((e.refresh = void 0), (e.refreshStartedAt = void 0));
    });
  return ((e.refresh = t), t);
}
function R() {
  return Kle() === "accepted";
}
function hSe() {
  return QDt() !== void 0;
}
function QDt() {
  let e = (t) => t?.remoteTools?.allowUnattendedServing === !1;
  return Rd().some(e) || pie().some(e) || e(ye("policySettings"))
    ? "managed"
    : e(ye("userSettings"))
      ? "user"
      : void 0;
}
function v3e() {
  Kle();
}
function F() {
  return i().view !== void 0;
}
function I() {
  return i().view?.unreadable === !0;
}
function ZDt() {
  let { view: e } = i();
  return e?.unreadable === !0 || e?.staleYes === !0;
}
function Qgr() {
  try {
    let e = Kle();
    return (
      hSe() ||
      i().staleUnresolved ||
      (JDt() ? !R() : !F() || I() || e === "declined")
    );
  } catch (e) {
    return (
      n(
        `unattended-serving consent: read failed, call treated as unconsented (${l(e)})`,
        { level: "warn" },
      ),
      !0
    );
  }
}
export { A2n, JDt, Mlt, Nlt, Knn, CIe, C3e, Kle, hSe, QDt, v3e, ZDt, Qgr };
