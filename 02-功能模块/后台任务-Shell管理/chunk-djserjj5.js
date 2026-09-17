// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { rs } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { b, z, ae } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { processIdentity as zse } from "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import { On, x0 } from "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
var m = 65534,
  C = new Set([
    "/",
    "/dev",
    "/dev/shm",
    "/run",
    "/run/user",
    "/tmp",
    "/var",
    "/var/tmp",
    "/var/run",
    "/home",
    "/var/home",
    "/root",
    "/var/roothome",
    "/mnt",
    "/mnt/wslg",
  ]);
function OJn() {
  return C;
}
import { readFile as v } from "fs/promises";
async function N() {
  return;
}
function D(e) {
  let t = [];
  for (let n of e.split(`
`)) {
    if (n.trim() === "") continue;
    let r = n.trim().split(/\s+/),
      o = Number(r[0]),
      s = Number(r[1]),
      u = Number(r[2]);
    if (
      r.length !== 3 ||
      !Number.isSafeInteger(o) ||
      o < 0 ||
      !Number.isSafeInteger(s) ||
      s < 0 ||
      !Number.isSafeInteger(u) ||
      u <= 0
    )
      return;
    t.push({ innerStart: o, hostStart: s, count: u });
  }
  return t;
}
function h(e) {
  return e.length === 1 && e[0].innerStart === 0 && e[0].count >= 4294967295;
}
async function S() {
  try {
    return F(await v("/proc/sys/kernel/overflowuid", "utf8"));
  } catch {
    return;
  }
}
function F(e) {
  let t = e.trim();
  if (!/^\d+$/.test(t)) return;
  let n = Number(t);
  return Number.isSafeInteger(n) ? n : void 0;
}
function M(e, t) {
  if (e.length === 0 || t === void 0) return;
  return e.some((r) => t >= r.innerStart && t < r.innerStart + r.count)
    ? void 0
    : t;
}
async function DJn() {
  return;
}
async function B(e, t) {
  let n = await S(),
    r = n ?? m;
  return {
    unmappedOwnerUid: M(e, n),
    uidCollapses: e.length === 0 || (t !== void 0 && t === r),
    rootUidAmbiguous: n === 0,
  };
}
async function v7e() {
  let e = process.getuid?.();
  if (e === void 0) return;
  return e;
}
function X3t() {
  return ((zse.uidsCollapse ??= L(ae())), zse.uidsCollapse);
}
function L(e) {
  return !1;
}
import { createHash as K, randomBytes as x } from "crypto";
import {
  lstatSync as j,
  mkdirSync as V,
  readFileSync as X,
  rmSync as H,
  writeFileSync as G,
} from "fs";
import {
  chmod as E,
  lstat as l,
  mkdir as d,
  readdir as y,
  readFile as R,
  rm as I,
  utimes as J,
} from "fs/promises";
import { connect as Y } from "net";
import { basename as q, dirname as O, join as i, resolve as Q } from "path";
function c() {
  return i(be(), "daemon");
}
function Z() {
  return K("sha256").update(Q(be())).digest("hex").slice(0, 8);
}
function KY() {
  let e = process.getuid?.() ?? 0,
    t = a.TERMUX_VERSION && a.PREFIX ? i(a.PREFIX, "tmp") : "/tmp";
  return i(t, `cc-daemon-${e}`, Z());
}
var ee = /^[a-f0-9]{16}$/;
function MSn() {
  return i(c(), "pipe.key");
}
var te = rs(
  () => {
    let e = MSn();
    for (let t = 0; t < 8; t++) {
      let n;
      try {
        let o = j(e);
        if (!o.isFile() || o.size > 4096) {
          try {
            H(e, { recursive: !0, force: !0 });
          } catch {}
          n = "invalid";
        } else n = X(e, "utf8").trim();
      } catch (o) {
        if (!W(o)) throw o;
      }
      if (n !== void 0) {
        if (ee.test(n)) return n;
        if (n === "" && t < 3) continue;
        let o = x(8).toString("hex");
        return (x0(e, o, 384), o);
      }
      let r = x(8).toString("hex");
      V(c(), { recursive: !0, mode: 448 });
      try {
        return (G(e, r, { flag: "wx", mode: 384 }), r);
      } catch (o) {
        if (A(o) !== "EEXIST") throw o;
      }
    }
    throw Error("daemon pipe.key is not a valid nonce");
  },
  () => be(),
);
function U(e) {
  return `\\\\.\\pipe\\cc-daemon-${te()}-${e}`;
}
function g_(e) {
  return e.replace(/cc-daemon-[0-9a-f]{16}/g, "cc-daemon-*");
}
function n1e(e) {
  if (e instanceof Error) {
    if (((e.message = g_(e.message)), typeof e.stack === "string"))
      e.stack = g_(e.stack);
  }
  return e;
}
function wbt() {
  return i(c(), "control.key");
}
async function LJn() {
  let e = wbt();
  try {
    let n = await l(e);
    if (n.isFile() && n.size <= 4096) {
      let r = (await R(e, "utf8")).trim();
      if (r) return r;
    } else await I(e, { recursive: !0, force: !0 }).catch(() => {});
  } catch (n) {
    if (!W(n)) throw n;
  }
  let t = x(16).toString("hex");
  return (await d(c(), { recursive: !0, mode: 448 }), await On(e, t, 384), t);
}
async function zre() {
  try {
    let e = await l(wbt());
    if (!e.isFile() || e.size > 4096) return;
    return (await R(wbt(), "utf8")).trim() || void 0;
  } catch {
    return;
  }
}
async function MJn() {
  let e = c();
  if (P() === "windows") {
    (await d(e, { recursive: !0 }), await E(e, 448).catch(() => {}));
    return;
  }
  (await d(e, { recursive: !0, mode: 448 }), k());
  let t = process.getuid?.(),
    n = await l(e);
  if (t !== void 0 && n.uid !== t)
    throw Error(`refusing to use daemon dir: ${e} is owned by uid ${n.uid}`);
  if ((n.mode & 511) !== 448) await E(e, 448);
}
async function R7e() {
  if (P() === "windows") return;
  let e = KY();
  await d(e, { recursive: !0, mode: 448 });
  let t = new Date();
  (await J(e, t, t).catch(() => {}), await _([O(e), e]));
}
var Y3t = "ENOTOWNED";
async function _(e) {
  let t = process.getuid?.();
  k();
  for (let n of e) {
    let r = await l(n);
    if (t !== void 0 && r.uid !== t)
      throw Object.assign(
        Error(`refusing to bind: ${n} is owned by uid ${r.uid}`),
        { code: Y3t },
      );
    if ((r.mode & 511) !== 448) await E(n, 448);
  }
}
var NSn =
  "refusing to use the daemon socket: this process runs in a user namespace without a uid mapping, so directory and peer ownership cannot be verified (start it with a mapping, e.g. unshare -Ur)";
function k() {
  if (X3t()) throw Object.assign(Error(NSn), { code: Y3t });
}
async function NJn(e) {
  if (P() === "windows") {
    await d(e, { recursive: !0 }).catch(() => {});
    return;
  }
  await R7e();
  let t = [qAe(), J3t()];
  for (let n of t) await d(n, { recursive: !0, mode: 448 });
  if (!t.includes(e)) {
    if (
      await d(e, { recursive: !0, mode: 448 }).then(
        () => !0,
        () => !1,
      )
    )
      t.push(e);
  }
  await _(t);
}
function FJn() {
  if (P() === "windows") return;
  let e = KY(),
    t = O(e),
    n = q(e);
  y(t, { withFileTypes: !0 })
    .then(async (r) => {
      for (let o of r) {
        if (!o.isDirectory() || o.name === n) continue;
        let s = i(t, o.name);
        if (!(await ne(i(s, "control.sock")))) continue;
        let u = await l(s).catch(() => null);
        if (!u || Date.now() - u.mtimeMs < 1e4) continue;
        let p = await y(i(s, "rv")).catch(() => []),
          g = await y(i(s, "pty")).catch(() => []),
          w = await y(i(s, "spare")).catch(() => []);
        if (p.length || g.length || w.length) continue;
        await I(s, { recursive: !0, force: !0 }).catch(() => {});
      }
    })
    .catch(() => {});
}
function ne(e) {
  let t,
    n = new Promise((o) => {
      t = o;
    }),
    r = Y(e);
  return (
    r.setTimeout(1000, () => {
      (r.destroy(), t(!1));
    }),
    r.on("error", (o) => {
      let s = A(o);
      t(s === "ENOENT" || s === "ECONNREFUSED" || s === "ENOTSOCK");
    }),
    r.once("connect", () => {
      (r.end(`{"op":"ping"}
`),
        t(!1));
    }),
    n
  );
}
function iG() {
  return i(c(), "dispatch");
}
function FSn() {
  return i(c(), "dispatch", "rejected");
}
function zI() {
  return i(c(), "roster.json");
}
var Tbt = "attach-journal";
function aG() {
  return i(c(), Tbt);
}
function J3t() {
  return i(KY(), "rv");
}
function jAe() {
  return i(c(), "auth");
}
function WAe(e) {
  return i(jAe(), `${e}.json`);
}
function k7e() {
  return i(c(), "host-managed");
}
function XY(e) {
  return i(k7e(), e);
}
function GAe(e) {
  return i(jAe(), `${e}.tokens.json`);
}
function x7e(e) {
  if (P() === "windows") return U(`rv-${e}`);
  return i(J3t(), `${e}.sock`);
}
function qAe() {
  return i(KY(), "pty");
}
function oh(e) {
  if (P() === "windows") return U(`pty-${e}`);
  return i(qAe(), `${e}.sock`);
}
function Aj() {
  return i(KY(), "spare");
}
function $Jn(e) {
  return i(Aj(), `${e}.pty.sock`);
}
function UJn(e) {
  return i(Aj(), `${e}.claim.sock`);
}
function Jpe() {
  return i(c(), "pty-pids");
}
function lG(e) {
  return i(Jpe(), `${e}.pid`);
}
function Nh(e) {
  return T(e, "err");
}
function vT(e) {
  return T(e, "late");
}
function T(e, t) {
  if (P() === "windows") return i(Jpe(), `${e.split("\\").pop()}.${t}`);
  return `${e}.${t}`;
}
function dN(e) {
  if (P() === "windows") return i(Jpe(), `${e.split("\\").pop()}.exec-exit`);
  return `${e}.exec-exit`;
}
function VI() {
  if (P() === "windows") return U("control");
  return (k(), i(KY(), "control.sock"));
}
var zAe = 0,
  Ebt = 1,
  H7e = 262144,
  f = 5,
  I7e = 1048576,
  YY = 1e4;
function P7e(e) {
  let t = typeof e === "string" ? Buffer.from(e, "utf8") : e,
    n = Buffer.allocUnsafe(f + t.length);
  return (n.writeUInt32BE(t.length, 0), n.writeUInt8(zAe, 4), t.copy(n, f), n);
}
function TC(e) {
  let t = Buffer.from(b(e), "utf8"),
    n = Buffer.allocUnsafe(f + t.length);
  return (n.writeUInt32BE(t.length, 0), n.writeUInt8(Ebt, 4), t.copy(n, f), n);
}
function Abt(e, t) {
  let n = Buffer.alloc(0),
    r = !1;
  return (o) => {
    if (r) return;
    n = n.length === 0 ? o : Buffer.concat([n, o]);
    while (n.length >= f) {
      let s = n.readUInt32BE(0);
      if (s > I7e) {
        ((r = !0), t(`frame too large (${s} > ${I7e})`));
        return;
      }
      let u = f + s;
      if (n.length < u) return;
      let p = n.readUInt8(4),
        g = n.subarray(f, u);
      if (((n = n.subarray(u)), p === zAe))
        e({ kind: zAe, payload: Buffer.from(g) });
      else if (p === Ebt) {
        let w;
        try {
          w = z(g.toString("utf8"));
        } catch {
          ((r = !0), t("bad ctrl json"));
          return;
        }
        e({ kind: Ebt, ctrl: w });
      } else {
        ((r = !0), t(`unknown frame kind ${p}`));
        return;
      }
    }
  };
}
export {
  OJn,
  DJn,
  v7e,
  X3t,
  KY,
  MSn,
  g_,
  n1e,
  wbt,
  LJn,
  zre,
  MJn,
  R7e,
  Y3t,
  NSn,
  NJn,
  FJn,
  iG,
  FSn,
  zI,
  Tbt,
  aG,
  J3t,
  jAe,
  WAe,
  k7e,
  XY,
  GAe,
  x7e,
  qAe,
  oh,
  Aj,
  $Jn,
  UJn,
  Jpe,
  lG,
  Nh,
  vT,
  dN,
  VI,
  zAe,
  Ebt,
  H7e,
  I7e,
  YY,
  P7e,
  TC,
  Abt,
};
