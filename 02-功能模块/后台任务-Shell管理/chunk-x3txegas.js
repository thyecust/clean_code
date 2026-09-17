// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j1, Xn, K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { An, Dr, Oi } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { R, l, A, WW } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Ro, Tr, ae, Qhe, k_, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError as h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { Pl } from "../Teammates团队/chunk-thxapyam.js";
import { logFeatureSad as g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { sr, Jh } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { gh, xQ } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { $d, bR, normalizeCaseForComparison as dr } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { H5 } from "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import { Glr } from "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function ft(t) {
  if (!j1(t)) return !1;
  if (Xn(t)) return !0;
  return /^[A-Za-z0-9][A-Za-z0-9_]*$/.test(t) && H5(t) !== void 0;
}
function Cbt(t, e = {}) {
  return e.acceptCustomIds ? j1(t) : ft(t);
}
function Vre(t, e, i = {}) {
  if (e) return { adoptedSessionId: null, effectiveFork: !0 };
  if (t === void 0) return { adoptedSessionId: null, effectiveFork: !1 };
  if (Cbt(t, i)) return { adoptedSessionId: t, effectiveFork: !1 };
  return (
    n(
      `resume: transcript session id (${typeof t}) rejected by the adoption gate; continuing as a fork under the fresh session id`,
    ),
    g("session_resume", "unadoptable_session_id"),
    { adoptedSessionId: null, effectiveFork: !0 }
  );
}
import { constants as _, fstat as Qt } from "fs";
import {
  lstat as J,
  mkdir as It,
  open as yt,
  readdir as qt,
  readlink as ut,
  realpath as pt,
  symlink as Nt,
  unlink as gt,
} from "fs/promises";
import {
  basename as mt,
  dirname as x,
  isAbsolute as At,
  join as U,
  resolve as at,
  sep as Z,
} from "path";
import { constants as S } from "fs";
import {
  lstat as Q,
  mkdir as Kt,
  open as st,
  readlink as Et,
} from "fs/promises";
import {
  basename as dt,
  dirname as L,
  isAbsolute as jt,
  join as T,
} from "path";
function it(t, e) {
  return (e === "windows" && An(t) && !Oi(t)) || Dr(t);
}
async function vt(t, e, i, o, r) {
  r?.throwIfAborted();
  let s = o ? cG(t, e, i) : st(t, e);
  if (!r) return s;
  let c,
    a = new Promise((u, f) => {
      ((c = () => f(r.reason ?? Error("aborted"))),
        r.addEventListener("abort", c, { once: !0 }));
    });
  try {
    return await Promise.race([s, a]);
  } catch (u) {
    throw (
      s.then(
        (f) => f.close(),
        () => {},
      ),
      u
    );
  } finally {
    if (c) r.removeEventListener("abort", c);
  }
}
var Wt = 536870912,
  Gt = /^(?:\/dev\/(?:stdin|stdout|stderr|fd\/\d+)|\/proc\/self\/fd\/\d+)$/;
function Zt(t) {
  return (
    Gt.test(t) ||
    (/^\/proc\/\d+\/fd\/\d+$/.test(t) &&
      t.startsWith(`/proc/${process.pid}/fd/`))
  );
}
var Jt = 2097152;
async function cG(t, e, i) {
  if (i !== "macos") return st(t, e);
  try {
    return await st(t, (e & ~S.O_NOFOLLOW) | Wt);
  } catch (o) {
    if (A(o) === "EINVAL") return st(t, e);
    throw o;
  }
}
async function xt(t, e, i) {
  if (i !== "macos") return !1;
  for (let r = t; ; r = L(r)) {
    try {
      if (!(await Q(r)).isDirectory()) return !1;
    } catch {
      return !1;
    }
    if (L(r) === r) break;
  }
  let o;
  try {
    o = await st(t, S.O_RDONLY | S.O_DIRECTORY | Wt);
  } catch {
    return !1;
  }
  try {
    let [r, s] = await Promise.all([
      o.stat({ bigint: !0 }),
      e.stat({ bigint: !0 }),
    ]);
    return r.ino === s.ino && r.dev === s.dev;
  } catch {
    return !1;
  } finally {
    await o.close();
  }
}
function X(t) {
  return new xQ(
    `Refusing to read ${t}: its symlink resolution changed after permission was checked. If a link in the working directory is being rewritten concurrently, stop that and retry.`,
  );
}
async function Q3t(t, e, i) {
  let o = new Set(e);
  for (let m of Tr(t)) if (!o.has(m)) throw X(t);
  let r = P(),
    s = r === "windows" ? S.O_RDONLY : S.O_RDONLY | S.O_NOCTTY,
    c = r === "windows" ? s : s | S.O_NOFOLLOW,
    a = async (m, y) => {
      if ((await Q(m)).isSymbolicLink()) throw X(t);
      let v = await vt(m, c, r, !y, i);
      if (r === "linux" || r === "wsl") {
        let z = null;
        try {
          z = await Et(`/proc/self/fd/${v.fd}`);
        } catch {}
        if (z !== null && z !== m && !o.has(z)) throw (await v.close(), X(t));
        if (z !== null)
          return {
            ioPath: `/proc/${process.pid}/fd/${v.fd}`,
            canonicalPath: m,
            handle: v,
            close: () => v.close(),
          };
      }
      return { ioPath: m, canonicalPath: m, handle: v, close: () => v.close() };
    };
  if (it(t, r)) return a(t, !1);
  let u = Ro(ae(), t),
    f =
      Zt(t) &&
      !jt(u.resolvedPath) &&
      /^(?:pipe|socket|anon_inode):\[/.test(u.resolvedPath) &&
      o.has(u.resolvedPath);
  if (!u.isCanonical && !f) {
    if (u.isSymlink || u.resolvedPath !== t) {
      if (o.has(u.resolvedPath) && it(u.resolvedPath, r)) {
        let y = r === "macos" ? await a(u.resolvedPath, !1) : await a(t, !0),
          v = Ro(ae(), t);
        if (v.isCanonical || v.resolvedPath !== u.resolvedPath)
          throw (await y.close(), X(t));
        return y;
      }
      throw X(t);
    }
    throw (await (await vt(t, s, r, !1, i)).close(), X(t));
  }
  if (!o.has(u.resolvedPath)) throw X(t);
  let w = f ? t : u.resolvedPath,
    k;
  try {
    k = await vt(w, f ? c & ~S.O_NOFOLLOW : c, r, !f, i);
  } catch (m) {
    if (A(m) === "ELOOP") throw X(t);
    throw m;
  }
  try {
    let m = w;
    if (r === "linux" || r === "wsl") {
      let v = null;
      try {
        v = await Et(`/proc/self/fd/${k.fd}`);
      } catch {}
      if (v !== null) {
        if (v !== (f ? u.resolvedPath : w)) throw X(t);
        m = `/proc/${process.pid}/fd/${k.fd}`;
      }
    }
    if (m === w) {
      for (let v of Tr(t)) if (!o.has(v)) throw X(t);
    }
    let y = k;
    return { canonicalPath: w, ioPath: m, handle: y, close: () => y.close() };
  } catch (m) {
    throw (await k.close().catch(() => {}), m);
  }
}
class rt extends Error {
  dir;
  reported;
  constructor(t, e) {
    super("held directory vanished");
    this.dir = t;
    this.reported = e;
  }
}
var Dt = 3;
function C(t) {
  return new gh(
    `Refusing to write ${t}: its parent-directory symlink resolution changed after permission was checked.`,
  );
}
async function ot(t, e, i, o, r = !1) {
  let s = () =>
    new gh(
      `Refusing to write ${e}: it is a symbolic link. Write to the link's target path instead.`,
    );
  if (i === "windows")
    try {
      if ((await Q(t)).isSymbolicLink()) throw s();
    } catch (u) {
      if (A(u) === "ENOENT") return null;
      throw u;
    }
  let c =
      i === "windows"
        ? S.O_RDONLY
        : S.O_RDONLY | S.O_NOFOLLOW | S.O_NONBLOCK | (S.O_NOCTTY ?? 0),
    a;
  try {
    a = r ? await st(t, c) : await cG(t, c, i);
  } catch (u) {
    let f = A(u);
    if (f === "ENOENT") return null;
    if (f === "ELOOP" || f === "EMLINK" || f === "EFTYPE") throw s();
    throw u;
  }
  try {
    return await Glr(a, e, o);
  } finally {
    await a.close();
  }
}
async function $k(t, e, i) {
  for (let o = 1; ; o++)
    try {
      return await Vt(t, e, i);
    } catch (r) {
      if (!(r instanceof rt)) throw r;
      if (
        (n(
          `pinWriteTarget: ${r.dir} was removed while held (attempt ${o}); ${o < Dt ? "taking the pin again" : "refusing"}`,
          { level: "warn" },
        ),
        o >= Dt)
      )
        throw r.reported ?? C(t);
    }
}
async function Vt(t, e, i) {
  let o = new Set(e),
    r = dt(t),
    s = P(),
    c = () =>
      (i?.leaf === "replace" ? Tr(L(t)).map((O) => T(O, r)) : Tr(t)).every(
        (O) => o.has(O),
      ),
    a = () => {
      if (!c()) throw C(t);
    },
    u = c();
  if (!u && !(s === "macos" && !it(t, s))) throw C(t);
  let f = async (p, O, d) => {
      if (!(await xt(p, d, s)))
        return (
          n(
            `pinWriteTarget: ${p} resolves to ${O}: not the same directory by a link-free route; refused`,
            { level: "warn" },
          ),
          !1
        );
      return (
        n(
          `pinWriteTarget: ${p} is rendered ${O} by realpath; same directory (device and inode), treated as an alias`,
        ),
        !0
      );
    },
    w = (p) => o.has(T(p, r)),
    k = (p) => {
      let O = Ro(ae(), p);
      if (!O.isCanonical) throw C(t);
      return O.resolvedPath;
    },
    m = (p) => {
      let O = Ro(ae(), p);
      return O.isCanonical ? O.resolvedPath : p;
    };
  if (it(t, s) && s !== "linux" && s !== "wsl") {
    let p = async (d) => {
      if (s !== "macos") return;
      for (let F = d; ; F = L(F))
        try {
          await (await cG(F, S.O_RDONLY | S.O_DIRECTORY, s)).close();
          return;
        } catch (W) {
          let M = A(W);
          if (M === "ELOOP") throw C(t);
          if (M !== "ENOENT" || L(F) === F) throw W;
        }
    };
    if ((await p(L(t)), i?.createParents))
      (await ae().mkdir(L(t)), await p(L(t)));
    let O = async () => {
      if ((a(), s !== "macos")) return;
      try {
        await (await cG(L(t), S.O_RDONLY | S.O_DIRECTORY, s)).close();
      } catch (d) {
        throw A(d) === "ELOOP" ? C(t) : d;
      }
    };
    return {
      ioPath: t,
      canonicalPath: t,
      readExisting: async (d) => {
        await O();
        let F = await ot(t, t, s, d, !1);
        return (await O(), F);
      },
      recheckBeforeWrite: O,
      close: async () => {},
    };
  }
  let y = async () => {
    if (i?.createParents) (await ae().mkdir(L(t)), a());
    let p = Ro(ae(), L(t));
    if (
      !p.isCanonical &&
      !(p.isSymlink && w(p.resolvedPath) && it(T(p.resolvedPath, r), s))
    ) {
      if (!p.isSymlink) await Q(L(t));
      throw C(t);
    }
    let O = !p.isCanonical,
      d = p.resolvedPath;
    if (!w(d)) throw C(t);
    return {
      ioPath: t,
      canonicalPath: T(d, r),
      readExisting: async (F) => {
        a();
        let W = await ot(t, t, s, F, O);
        if ((a(), O && Ro(ae(), L(t)).resolvedPath !== d)) throw C(t);
        return W;
      },
      recheckBeforeWrite: a,
      close: async () => {},
    };
  };
  if (s === "windows") return y();
  let z =
      s === "linux" || s === "wsl"
        ? Jt | S.O_DIRECTORY
        : S.O_RDONLY | S.O_DIRECTORY,
    D = L(t),
    V = [],
    N,
    et = "";
  for (;;)
    try {
      ((et = s === "macos" ? m(D) : D), (N = await cG(et, z, s)));
      break;
    } catch (p) {
      let O = A(p),
        d = L(D),
        F =
          O === "ELOOP" &&
          s === "macos" &&
          et === D &&
          !Ro(ae(), D).isCanonical;
      if (O === "ELOOP" && !F) {
        let W = Ro(ae(), L(t));
        if (
          u &&
          !W.isCanonical &&
          W.isSymlink &&
          w(W.resolvedPath) &&
          it(T(W.resolvedPath, r), s)
        )
          return y();
        throw C(t);
      }
      if (F && !i?.createParents) {
        let W = [dt(D)];
        for (let M = d; ; M = L(M)) {
          let E = Ro(ae(), M);
          if (E.isCanonical) {
            await Q(T(E.resolvedPath, W[0]));
            break;
          }
          if (L(M) === M) break;
          W.unshift(dt(M));
        }
        throw C(t);
      }
      if ((O === "ENOENT" || F) && i?.createParents && d !== D) {
        (V.unshift(dt(D)), (D = d));
        continue;
      }
      throw p;
    }
  try {
    let p = !1,
      O = async (E, I) => {
        if (s === "linux" || s === "wsl")
          try {
            let B = await Et(`/proc/self/fd/${E.fd}`);
            if (((p = !0), B.endsWith(" (deleted)"))) throw new rt(I);
            return B;
          } catch (B) {
            if (B instanceof rt) throw B;
          }
        return k(I);
      },
      d = await O(N, D);
    if (!p && d !== D && !w(T(d, ...V)) && w(T(D, ...V)) && (await f(D, d, N)))
      d = D;
    let F = T(d, ...V);
    if (!w(F)) {
      if (
        V.length === 0 &&
        (await Q(T(p ? `/proc/self/fd/${N.fd}` : d, r)).then(
          (I) => I.isSymbolicLink(),
          () => !1,
        ))
      )
        throw new gh(
          `Refusing to write ${t}: it is a symbolic link. Write to the link's target path instead.`,
        );
      throw C(t);
    }
    for (let E of V) {
      let I = p ? `/proc/self/fd/${N.fd}` : d,
        B = null;
      try {
        await Kt(T(I, E));
      } catch (j) {
        if (((B = j), A(j) === "ENOENT")) throw new rt(d);
        if (A(j) !== "EEXIST")
          uG(j, { ioPath: T(I, E), canonicalPath: T(d, E) }, T(d, E));
      }
      let G;
      try {
        G = await cG(T(I, E), z | S.O_NOFOLLOW, s);
      } catch (j) {
        if (A(j) === "ELOOP" || A(j) === "ENOTDIR") throw C(t);
        if (A(j) === "ENOENT") {
          let $t;
          if (B !== null)
            try {
              uG(B, { ioPath: T(I, E), canonicalPath: T(d, E) }, T(d, E));
            } catch (Xt) {
              $t = Xt;
            }
          throw new rt(T(d, E), $t);
        }
        uG(
          B !== null ? B : j,
          { ioPath: T(I, E), canonicalPath: T(d, E) },
          T(d, E),
        );
      }
      (await N.close(), (N = G));
      let nt = T(d, E);
      if (((d = await O(N, nt)), d !== nt)) {
        if (p || !(await f(nt, d, N))) throw C(t);
        d = nt;
      }
    }
    if (!p) {
      let E = N,
        I = async () => {
          if (c()) return;
          if (!(await xt(F, E, s))) throw C(t);
          if (
            i?.leaf !== "replace" &&
            (await Q(T(F, r)).then(
              (G) => G.isSymbolicLink(),
              (G) => A(G) !== "ENOENT",
            ))
          )
            throw C(t);
        };
      await I();
      let B = T(F, r);
      return {
        ioPath: B,
        canonicalPath: B,
        readExisting: async (G) => {
          await I();
          let nt = await ot(B, t, s, G);
          return (await I(), nt);
        },
        recheckBeforeWrite: I,
        close: () => E.close(),
      };
    }
    let W = N,
      M = `/proc/self/fd/${W.fd}/${r}`;
    return {
      ioPath: M,
      canonicalPath: T(F, r),
      readExisting: (E) => ot(M, t, s, E),
      recheckBeforeWrite: () => {},
      close: () => W.close(),
    };
  } catch (p) {
    throw (await N.close().catch(() => {}), p);
  }
}
function uG(t, e, i) {
  if (t instanceof Error) {
    let o = t.message;
    for (let r of [e.ioPath, e.canonicalPath])
      if (r !== i) o = o.split(r).join(i);
    if (o !== t.message) t.message = o;
  }
  throw t;
}
var lt = _.O_NOFOLLOW ?? 0,
  Bt = 8388608,
  MAX_TASK_OUTPUT_BYTES = 5368709120,
  MAX_TASK_OUTPUT_BYTES_DISPLAY = "5GB",
  MAX_PERSISTED_OUTPUT_BYTES = 67108864;
function getTaskOutputRootDir() {
  return $d();
}
function getTaskOutputDir() {
  let t = Jh()?.adoptShellOutputRoot;
  if (t !== void 0) return U(t, K(), "tasks");
  let e = sr();
  if (e.outputDir === void 0) e.outputDir = U(bR(), K(), "tasks");
  return e.outputDir;
}
function taskOutputDirForSession(t) {
  return U(bR(), t, "tasks");
}
function peekTaskOutputDir() {
  return Jh()?.adoptShellOutputRoot !== void 0
    ? getTaskOutputDir()
    : (sr().outputDir ?? U(bR(), K(), "tasks"));
}
function te() {
  let t = sr();
  if (t.outputDir === void 0) {
    if (Jh() !== null) return U(bR(), K(), "tasks");
    t.outputDir = U(bR(), K(), "tasks");
  }
  return t.outputDir;
}
function bindTaskOutputPath(t) {
  let e = sr().outputPathBindings.get(t);
  if (e !== void 0) return e;
  let i = U(getTaskOutputDir(), `${t}.output`);
  return (sr().outputPathBindings.set(t, i), i);
}
function getTaskOutputPath(t) {
  let e = sr().outputPathBindings.get(t);
  if (e !== void 0) return e;
  return U(te(), `${t}.output`);
}
function kt(t) {
  let e = sr().pendingOutputOps;
  return (e.add(t), t.finally(() => e.delete(t)).catch(() => {}), t);
}
var ee = 16777216,
  wt = `
[output omitted: it could not be written to disk]
`;
class DiskTaskOutput {
  #u;
  #n = null;
  #t = [];
  #f = 0;
  #o = !1;
  #e = 0;
  #s = 0;
  #i = !1;
  #a = new Set();
  #l = !1;
  #r = null;
  #c = null;
  constructor(t, e) {
    this.#u = e ?? bindTaskOutputPath(t);
  }
  append(t) {
    if (this.#o) return;
    if (((this.#f += t.length), this.#f > MAX_TASK_OUTPUT_BYTES)) this.#o = !0;
    let e = this.#o
      ? `
[output truncated: exceeded ${MAX_TASK_OUTPUT_BYTES_DISPLAY} disk cap]
`
      : t;
    if ((this.#t.push(e), (this.#e += e.length), !this.#r))
      ((this.#r = new Promise((i) => {
        this.#c = i;
      })),
        kt(this.#g()));
  }
  flush() {
    return this.#r ?? Promise.resolve();
  }
  get failing() {
    return this.#i;
  }
  get lostOutput() {
    return this.#l;
  }
  get unwrittenChars() {
    return this.#e;
  }
  cancel() {
    ((this.#s += 1), (this.#t.length = 0), (this.#e = 0));
  }
  async #d() {
    while (!0) {
      try {
        if (!this.#n) this.#n = await openTaskOutputForAppend(this.#u);
        while (!0) {
          let t = this.#s;
          try {
            await this.#h();
          } catch (e) {
            if (this.#s === t)
              ((this.#l = !0), this.#t.unshift(wt), (this.#e += wt.length));
            throw e;
          }
          if (this.#t.length === 0) break;
        }
      } finally {
        if (this.#n) {
          let t = this.#n;
          ((this.#n = null), await t.close());
        }
      }
      if (this.#t.length) continue;
      break;
    }
  }
  #h() {
    return this.#n.appendFile(this.#p());
  }
  #p() {
    let t = this.#t.splice(0, this.#t.length);
    this.#e = 0;
    let e = 0;
    for (let r of t) e += Buffer.byteLength(r, "utf8");
    let i = Buffer.allocUnsafe(e),
      o = 0;
    for (let r of t) o += i.write(r, o, "utf8");
    return i;
  }
  async #g() {
    try {
      (await this.#d(), this.#w());
    } catch (t) {
      if (!this.#i)
        ((this.#i = !0),
          n(`Task output drain failed (will retry once): ${t}`, {
            level: "error",
          }));
      if (this.#t.length > 0)
        try {
          (await this.#d(), this.#w());
        } catch (e) {
          this.#m(e);
        }
    } finally {
      let t = this.#c;
      ((this.#r = null), (this.#c = null), t());
    }
  }
  #w() {
    ((this.#i = !1), this.#a.clear());
  }
  #m(t) {
    let e = A(t),
      i = e !== void 0 && WW.has(e) ? "exhaustion" : "unexpected",
      o = `${i}:${e ?? "no errno"}`;
    if (!this.#a.has(o))
      switch ((this.#a.add(o), i)) {
        case "exhaustion":
          n(`Task output drain retry failed (${e}): ${t}`, { level: "error" });
          break;
        case "unexpected":
          h(t);
          break;
      }
    if (this.#e > ee)
      (n(
        `Task output still cannot be written (${e ?? "no errno"}); dropped ${this.#e} chars of unwritten output`,
        { level: "error" },
      ),
        (this.#l = !0),
        (this.#t.length = 0),
        this.#t.push(wt),
        (this.#e = wt.length));
  }
}
function ne(t) {
  let e = sr().diskOutputs.get(t);
  if (!e) ((e = new DiskTaskOutput(t)), sr().diskOutputs.set(t, e));
  return e;
}
function appendTaskOutput(t, e) {
  ne(t).append(e);
}
function evictTaskOutput(t) {
  return kt(
    (async () => {
      let e = sr(),
        i = e.diskOutputs.get(t);
      if (i) {
        if ((await i.flush(), i.failing && i.unwrittenChars > 0))
          n(
            `Task output writer evicted while failing; discarded ${i.unwrittenChars} chars of unwritten output`,
            { level: "error" },
          );
        e.diskOutputs.delete(t);
      }
      releaseConvergentTaskOutputBinding(t);
    })(),
  );
}
function releaseConvergentTaskOutputBinding(t) {
  let e = sr().outputPathBindings.get(t);
  if (e !== void 0 && Jh() === null && e === U(getTaskOutputDir(), `${t}.output`))
    sr().outputPathBindings.delete(t);
}
async function getTaskOutputDelta(t, e, i = Bt) {
  try {
    let o = await openTaskOutputForRead(getTaskOutputPath(t));
    if (!o) return { content: "", newOffset: e };
    let r;
    try {
      r = await Qhe(o, e, i);
    } finally {
      await o.close();
    }
    if (!r) return { content: "", newOffset: e };
    return { content: r.content, newOffset: e + r.bytesRead };
  } catch (o) {
    let r = A(o);
    if (r === "ENOENT") return { content: "", newOffset: e };
    if (r && WW.has(r))
      n(`getTaskOutputDelta failed (${r}): ${o}`, { level: "error" });
    else h(o);
    return { content: "", newOffset: e };
  }
}
async function getTaskOutput(t, e = Bt) {
  try {
    let i = await openTaskOutputForRead(getTaskOutputPath(t));
    if (!i) return "";
    let o;
    try {
      o = await k_(i, e);
    } finally {
      await i.close();
    }
    let { content: r, bytesTotal: s, bytesRead: c } = o;
    if (s > c)
      return `[${Math.round((s - c) / 1024)}KB of earlier output omitted]
${r}`;
    return r;
  } catch (i) {
    let o = A(i);
    if (o === "ENOENT") return "";
    if (o && WW.has(o))
      n(`getTaskOutput failed (${o}): ${i}`, { level: "error" });
    else h(i);
    return "";
  }
}
async function getTaskOutputSize(t) {
  try {
    let e = await openTaskOutputForRead(getTaskOutputPath(t));
    if (!e) return 0;
    try {
      return (await e.stat()).size;
    } finally {
      await e.close();
    }
  } catch (e) {
    if (isTaskOutputSwapRefusal(e)) throw e;
    let i = A(e);
    if (i === "ENOENT") return 0;
    if (i === "EACCES" || i === "EPERM") {
      let o = await J(getTaskOutputPath(t)).catch(() => null);
      if (o !== null && o.isFile() && (o.mode & 256) === 0) return o.size;
      b(getTaskOutputPath(t), `output no longer measurable (${i})`);
    }
    if (i && WW.has(i))
      n(`getTaskOutputSize failed (${i}): ${e}`, { level: "error" });
    else h(e);
    return 0;
  }
}
async function repointTaskOutputSymlinks(t, e) {
  let i = sr(),
    o = Y([
      ...(i.outputDir !== void 0 ? [i.outputDir] : []),
      ...[...i.outputPathBindings.values()].map((s) => x(s)),
    ]);
  if (o.length === 0) return;
  let r = t + Z;
  for (let s of o) {
    let c;
    try {
      c = await qt(s);
    } catch (a) {
      let u = A(a);
      if (u !== "ENOENT")
        if (u && WW.has(u))
          n(`repointTaskOutputSymlinks readdir failed (${u}): ${a}`, {
            level: "error",
          });
        else h(a);
      continue;
    }
    await ie(s, c, r, t, e);
  }
}
async function ie(t, e, i, o, r) {
  let s = sr().linkedOutputs;
  for (let c of e) {
    if (!c.endsWith(".output")) continue;
    let a = U(t, c),
      u = s.get(a),
      f;
    try {
      f = P() === "windows" ? void 0 : await tt(a, { replaceLeaf: !0 });
      let w = f?.ioPath ?? a;
      if (u === void 0 && t === sr().outputDir)
        u = await Ht(a, w).catch(() => {
          return;
        });
      if (u === void 0 || !u.startsWith(i)) continue;
      let k = r + u.slice(o.length);
      if ((await ut(w)) !== u) b(a, "output symlink was re-pointed");
      (await f?.recheckBeforeWrite(),
        await gt(w),
        await f?.recheckBeforeWrite(),
        await Nt(k, w),
        await Lt(a, k));
    } catch (w) {
      if (A(w) !== "ENOENT") h(w);
    } finally {
      await f?.close();
    }
  }
}
async function ct(t, e, i = 0) {
  if (P() === "windows")
    return (await It(x(t), { recursive: !0 }), yt(t, e.windowsFlags));
  let o = await tt(t, { replaceLeaf: !0 });
  try {
    let r = await Rt(o.ioPath);
    if (r?.isSymbolicLink()) {
      let a = await St(t, o.ioPath);
      if (e.exclusive || i > 0 || !q(a)) b(t, "output link is not appendable");
      return await ct(a, e, i + 1);
    }
    if (r !== null && (!r.isFile() || (r.nlink !== 1 && i === 0)))
      b(t, "existing output is not a plain file");
    await o.recheckBeforeWrite();
    let s = e.exclusive || r === null,
      c;
    try {
      c = await cG(
        o.ioPath,
        _.O_WRONLY |
          _.O_APPEND |
          (s ? _.O_CREAT | _.O_EXCL : 0) |
          lt |
          (_.O_NONBLOCK ?? 0),
        P(),
      );
    } catch (a) {
      if (!e.exclusive && A(a) === "EEXIST" && !e.retried)
        return (await o.close(), ct(t, { ...e, retried: !0 }, i));
      throw a;
    }
    if (i > 0 && r === null) {
      let a = await c.stat();
      Ot.set(t, { dev: a.dev, ino: a.ino });
    }
    try {
      await Ft(c, r, t, { registeredIdentity: i > 0 ? Ut(t) : void 0 });
    } catch (a) {
      throw (await c.close().catch(() => {}), a);
    }
    return c;
  } catch (r) {
    throw Tt(r, t);
  } finally {
    await o.close();
  }
}
async function openTaskOutputForRead(t, e = 0) {
  if (P() === "windows") {
    let o = await Rt(t);
    if (o === null) return null;
    if (o.isSymbolicLink()) {
      let s = await St(t, t);
      return Ct(s, e, t);
    }
    if (!o.isFile()) b(t, "not a regular file");
    let r = await yt(t, "r");
    return (await Ft(r, o, t, { anyLinkCount: !0 }), r);
  }
  let i;
  try {
    i = await tt(t, { replaceLeaf: !0, create: !1 });
  } catch (o) {
    if (A(o) === "ENOENT") return null;
    throw o;
  }
  try {
    let o = await Rt(i.ioPath);
    if (o === null) return null;
    if (o.isSymbolicLink()) {
      let s = await St(t, i.ioPath);
      return await Ct(s, e, t);
    }
    if (!o.isFile() || (o.nlink !== 1 && e === 0))
      b(t, "not a regular nlink-1 file");
    await i.recheckBeforeWrite();
    let r = await cG(i.ioPath, _.O_RDONLY | lt | (_.O_NONBLOCK ?? 0), P());
    try {
      await Ft(r, o, t, { registeredIdentity: e > 0 ? Ut(t) : void 0 });
    } catch (s) {
      throw (await r.close().catch(() => {}), s);
    }
    return r;
  } catch (o) {
    if (A(o) === "ENOENT") return null;
    throw Tt(o, t);
  } finally {
    await i.close();
  }
}
async function Ht(t, e) {
  let i = await ut(e),
    o = At(i) && at(i).startsWith(at(Pl()) + Z);
  if (!At(i) || (!q(i) && !o))
    return b(
      t,
      "output is an unregistered symlink of a shape this session does not create",
    );
  let r = await J(e);
  if (!r.isSymbolicLink() || r.ctimeMs >= sr().linksInheritedBeforeFor(x(t)))
    return b(t, "output is an unregistered symlink made during this session");
  return (await Lt(t, i), i);
}
async function St(t, e) {
  let i = sr().linkedOutputs.get(t);
  if (i === void 0) {
    if (!isTaskOutputFilePath(t))
      return b(
        t,
        "output is an unregistered symlink outside any tasks directory",
      );
    i = await Ht(t, e);
  }
  if ((await ut(e)) !== i) return b(t, "output symlink was re-pointed");
  return i;
}
async function Ct(t, e, i) {
  if (q(t)) {
    if (e > 0) return b(i, "output links chain");
    return openTaskOutputForRead(t, e + 1);
  }
  let o, r;
  try {
    let s = await pt(t);
    if (q(s)) return b(i, "output link leads back into the tasks tree");
    ((r = await J(s)),
      (o = await cG(s, _.O_RDONLY | lt | (_.O_NONBLOCK ?? 0), P())));
  } catch (s) {
    if (isTaskOutputSwapRefusal(s)) throw s;
    if (A(s) === "ENOENT") return null;
    throw Tt(s, i);
  }
  try {
    let s = await o.stat();
    if (!s.isFile() || s.ino !== r.ino || s.dev !== r.dev)
      b(i, "link target is not a regular file");
  } catch (s) {
    throw (await o.close().catch(() => {}), s);
  }
  return o;
}
function q(t) {
  let e = $d();
  return t === e || t.startsWith(e.endsWith(Z) ? e : e + Z);
}
async function Rt(t) {
  try {
    return await J(t);
  } catch (e) {
    if (A(e) === "ENOENT") return null;
    throw e;
  }
}
var Ot = new Map();
function Ut(t) {
  let e = Ot.get(t);
  if (e === void 0) return b(t, "link target identity was never recorded");
  return e;
}
async function Lt(t, e) {
  if (q(e)) await Mt(e);
  sr().linkedOutputs.set(t, e);
}
async function Mt(t) {
  let e = await tt(t, { replaceLeaf: !0, create: !1 });
  try {
    let i = await cG(
      e.ioPath,
      _.O_RDONLY | lt | (_.O_NONBLOCK ?? 0),
      P(),
    ).catch((o) => {
      throw Tt(o, t);
    });
    try {
      let o = await i.stat();
      if (!o.isFile() || o.nlink !== 1)
        b(t, "link target is not a regular single-link file");
      Ot.set(t, { dev: o.dev, ino: o.ino });
    } finally {
      await i.close();
    }
  } finally {
    await e.close();
  }
}
async function Ft(t, e, i, o) {
  try {
    let r = await t.stat(),
      s = o?.registeredIdentity;
    if (
      !r.isFile() ||
      (s !== void 0
        ? r.ino !== s.ino || r.dev !== s.dev
        : !o?.anyLinkCount && r.nlink !== 1) ||
      (e !== null && (r.ino !== e.ino || r.dev !== e.dev))
    )
      b(i, "output file identity changed");
  } catch (r) {
    throw (await t.close().catch(() => {}), r);
  }
}
function Tt(t, e) {
  let i = A(t);
  if (
    i === "ELOOP" ||
    i === "EISDIR" ||
    i === "ENOTDIR" ||
    i === "ENXIO" ||
    i === "EOPNOTSUPP" ||
    i === "ENOTSUP"
  )
    try {
      b(e, `open refused a swapped leaf (${i})`);
    } catch (o) {
      return o;
    }
  return t;
}
function re(t) {
  let e = _t(),
    i = at(t);
  if (i.startsWith(e + Z)) return i;
  let o = ae(),
    r = x(x(x(x(i)))),
    { resolvedPath: s } = Ro(o, r);
  return dr(s) === dr(e) ? U(e, i.slice(r.length + 1)) : i;
}
function _t() {
  return x(x(x(at(getTaskOutputDir()))));
}
function isTaskOutputFilePath(t) {
  let e = _t(),
    i = ae(),
    o = new Set([e, Ro(i, e).resolvedPath].map((r) => dr(r)));
  return Tr(t).some((r) => {
    let s = x(at(r));
    return dr(mt(s)) === "tasks" && Yt(mt(x(s))) && o.has(dr(x(x(x(s)))));
  });
}
function bt() {
  let t = ["????????-????-????-????-????????????", "session_*", "cse_*"],
    e = K();
  if (!ft(e) && /^[A-Za-z0-9._-]+$/.test(e)) t.push(e);
  return t;
}
function Yt(t) {
  return ft(t) || t === K();
}
function taskOutputDirExclusions(t) {
  let e = _t(),
    i = ae(),
    o = Y([e, Ro(i, e).resolvedPath]),
    r = new Set(),
    s = (a, u) => {
      let f = a.endsWith(Z) ? a : a + Z;
      return dr(u).startsWith(dr(f)) ? u.slice(f.length) : null;
    },
    c = (a) => a.replaceAll("\\", "/");
  for (let a of Tr(t)) {
    let u = at(a);
    for (let f of o) {
      let w = mt(f);
      if (dr(u) === dr(f)) {
        for (let y of bt())
          (r.add(`!/*/${y}/tasks/**`), r.add(`!**/${w}/*/${y}/tasks/**`));
        continue;
      }
      let k = s(u, f);
      if (k !== null) {
        for (let y of bt())
          (r.add(`!/${c(k)}/*/${y}/tasks/**`),
            r.add(`!**/${w}/*/${y}/tasks/**`));
        continue;
      }
      let m = s(f, u);
      if (m !== null) {
        let y = m.split(Z);
        if (y.length === 1)
          for (let v of bt())
            (r.add(`!/${v}/tasks/**`), r.add(`!**/${w}/${c(m)}/${v}/tasks/**`));
        else if (!Yt(y[1] ?? ""));
        else if (y.length === 2)
          (r.add("!/tasks/**"), r.add(`!**/${w}/${c(m)}/tasks/**`));
        else if (dr(y[2] ?? "") === "tasks") r.add("!**");
      }
    }
  }
  return [...r];
}
async function bindTaskOutputForRead(t) {
  t = re(t);
  let e = await openTaskOutputForRead(t);
  if (e === null)
    throw (
      await J(t),
      new R(
        `task output ${t} is no longer available (the file it pointed to was removed)`,
        "task output link target removed",
      )
    );
  let i = P();
  return {
    ioPath:
      (i === "linux" || i === "wsl") &&
      (await ut(`/proc/self/fd/${e.fd}`).then(
        () => !0,
        () => !1,
      ))
        ? `/proc/${process.pid}/fd/${e.fd}`
        : i === "macos"
          ? `/dev/fd/${e.fd}`
          : t,
    canonicalPath: t,
    handle: e,
    close: () => e.close(),
  };
}
async function tailTaskOutput(t, e) {
  let i = await openTaskOutputForRead(t);
  if (i === null) return { content: "", bytesRead: 0, bytesTotal: 0 };
  try {
    return await k_(i, e);
  } finally {
    await i.close();
  }
}
async function unlinkTaskOutput(t) {
  let e = sr().linkedOutputs.get(t);
  if ((sr().linkedOutputs.delete(t), e !== void 0)) Ot.delete(e);
  if (P() === "windows") {
    await gt(t);
    return;
  }
  let i;
  try {
    i = await tt(t, { replaceLeaf: !0, create: !1 });
  } catch (o) {
    if (A(o) === "ENOENT") return;
    throw o;
  }
  try {
    (await i.recheckBeforeWrite(), await gt(i.ioPath));
  } finally {
    await i.close();
  }
}
async function writeTaskOutputSnapshot(t, e) {
  let i = await ct(t, { exclusive: !1, windowsFlags: "w" });
  try {
    (await i.truncate(0), await i.writeFile(e));
  } finally {
    await i.close();
  }
}
async function tt(t, e) {
  let i = x(t),
    o = mt(t),
    r = H.get(i);
  if (r !== void 0) {
    let f = await r.catch(() => null);
    if (f !== null) {
      let k = (await Promise.all([f.handleStat(), J(i)]).then(
        ([m, y]) =>
          m.nlink > 0 && y.isDirectory() && y.ino === m.ino && y.dev === m.dev,
        () => !1,
      ))
        ? f.viewFor(o)
        : null;
      if (k !== null) return k;
      if (H.get(i) === r) H.delete(i);
      await f.release();
    } else if (H.get(i) === r) H.delete(i);
  }
  let s = H.get(i);
  if (s !== void 0 && s !== r) return tt(t, e);
  let c = (async () => {
      let f;
      try {
        f = await $k(t, [t], {
          createParents: e?.create ?? !0,
          ...(e?.replaceLeaf && { leaf: "replace" }),
        });
      } catch (N) {
        if (N instanceof gh) {
          if (!(await oe())) {
            if (e?.create ?? !0) await It(x(t), { recursive: !0, mode: 448 });
            return {
              ioPath: t,
              canonicalPath: t,
              readExisting: () => Promise.resolve(null),
              recheckBeforeWrite: () => {},
              close: async () => {},
            };
          }
          (n(`task output: pin of ${x(t)} refused: ${l(N)}`, { level: "warn" }),
            b(
              t,
              "tasks dir moved or linked",
              `restart Claude Code with CLAUDE_CODE_TMPDIR set to a fresh directory; or, if ${bR().replace(/[\\/]+$/, "")} is a stray directory or a symbolic link that should not be there, remove that entry itself (not what it points to) and restart`,
            ));
        }
        throw N;
      }
      let w = /^\/proc\/self\/fd\/(\d+)\//.exec(f.ioPath);
      if (w === null) return f;
      let k = f.ioPath.slice(0, f.ioPath.length - o.length - 1),
        m = Number(w[1]),
        y = 0,
        v = !1,
        z = !1,
        D = async () => {
          if (v && y === 0 && !z) ((z = !0), await f.close());
        };
      return {
        handleStat: () => se(m),
        release: () => ((v = !0), D()),
        viewFor: (N) => {
          if (v) return null;
          y++;
          let et = !1;
          return {
            ioPath: `${k}/${N}`,
            canonicalPath: U(i, N),
            readExisting: (p) => ot(`${k}/${N}`, U(i, N), P(), p),
            recheckBeforeWrite: () => {},
            close: async () => {
              if (!et) ((et = !0), y--, await D());
            },
          };
        },
      };
    })(),
    a = c.then((f) => ("viewFor" in f ? f : Promise.reject(Error("not held"))));
  (a.catch(() => {}), H.set(i, a));
  let u;
  try {
    u = await c;
  } catch (f) {
    if (H.get(i) === a) H.delete(i);
    throw f;
  }
  if (!("viewFor" in u)) {
    if (H.get(i) === a) H.delete(i);
    return u;
  }
  if (H.size > le) {
    for (let [f, w] of H)
      if (f !== i) {
        (H.delete(f),
          w.then(
            (k) => k.release(),
            () => {},
          ));
        break;
      }
  }
  return (
    u.viewFor(o) ?? Promise.reject(Error("unreachable: fresh hold retired"))
  );
}
var Pt;
async function oe() {
  let t = $d();
  if (Pt?.root === t) return Pt.ok;
  let e = await pt(t).then(
    () => !0,
    (i) => A(i) !== "EPERM",
  );
  if (e) Pt = { root: t, ok: Promise.resolve(!0) };
  return e;
}
var H = new Map();
function se(t) {
  return new Promise((e, i) => Qt(t, (o, r) => (o ? i(o) : e(r))));
}
var le = 8;
function openTaskOutputForAppend(t, e = "a") {
  return ct(t, { exclusive: !1, windowsFlags: e });
}
function initTaskOutput(t) {
  return kt(
    (async () => {
      let e = bindTaskOutputPath(t);
      return (
        await (await ct(e, { exclusive: !0, windowsFlags: "wx" })).close(),
        e
      );
    })(),
  );
}
var zt = Symbol("taskOutputSwapRefused");
function isTaskOutputSwapRefusal(t) {
  return t instanceof Error && zt in t;
}
function b(t, e, i) {
  let o =
      `task output swap refused (${e}): ${t}` +
      (i === void 0 ? "" : `. To recover: ${i}.`),
    r = Object.assign(new R(o, "task output swap refused"), { [zt]: !0 });
  n(o, { level: "error" });
  let s = `${e}\x00${t}`;
  if (!ht.has(s)) {
    if (ht.size >= ce) ht.clear();
    (ht.add(s), h(r));
  }
  throw r;
}
var ht = new Set(),
  ce = 256;
async function openVerifiedTaskOutput(t, e) {
  let i;
  try {
    i = await J(t);
  } catch (c) {
    let a = A(c);
    if (a === "ELOOP" || a === "ENOTDIR")
      b(t, `lstat refused a swapped path (${a})`);
    throw c;
  }
  if (!i.isFile() || i.nlink !== 1) b(t, "not a regular nlink-1 file");
  let o = !1,
    r = i.size > e,
    s;
  try {
    s = await yt(
      t,
      o
        ? r
          ? "r+"
          : "r"
        : (r ? _.O_RDWR : _.O_RDONLY) | lt | (_.O_NONBLOCK ?? 0),
    );
  } catch (c) {
    let a = A(c);
    if (
      a === "ELOOP" ||
      a === "EISDIR" ||
      a === "ENOTDIR" ||
      a === "ENXIO" ||
      a === "EOPNOTSUPP" ||
      a === "ENOTSUP"
    )
      b(t, `open refused a swapped path (${a})`);
    throw c;
  }
  try {
    let c = await s.stat();
    if (!c.isFile() || c.dev !== i.dev || c.ino !== i.ino || c.nlink !== 1)
      b(t, "file changed between lstat and open");
    if (r && c.size > e) await s.truncate(e);
    return { handle: s, size: c.size };
  } catch (c) {
    throw (await s.close(), c);
  }
}
async function getVerifiedTaskOutputTail(t, e) {
  let i;
  try {
    i = await openVerifiedTaskOutput(getTaskOutputPath(t), MAX_TASK_OUTPUT_BYTES);
  } catch (s) {
    if (A(s) === "ENOENT") return { content: "", omittedBytes: 0 };
    throw s;
  }
  let { handle: o } = i,
    r = Math.min(i.size, MAX_TASK_OUTPUT_BYTES);
  try {
    let s = Math.max(0, r - e),
      c = Buffer.allocUnsafe(r - s),
      a = 0;
    while (a < c.length) {
      let { bytesRead: f } = await o.read(c, a, c.length - a, s + a);
      if (f === 0) break;
      a += f;
    }
    let u = 0;
    while (s > 0 && u < a && (c[u] & 192) === 128) u++;
    return { content: c.toString("utf8", u, a), omittedBytes: s + u };
  } finally {
    await o.close();
  }
}
async function persistTaskOutputSnapshot(t, e, i) {
  let { handle: r, size: s } = await openVerifiedTaskOutput(t, i);
  try {
    let c = await yt(e, _.O_WRONLY | _.O_CREAT | _.O_TRUNC | lt);
    try {
      let a = Buffer.alloc(1048576),
        u = 0;
      while (u < i) {
        let f = Math.min(a.length, i - u),
          { bytesRead: w } = await r.read(a, 0, f, u);
        if (w === 0) break;
        let k = 0;
        while (k < w) {
          let { bytesWritten: m } = await c.write(a, k, w - k, u + k);
          k += m;
        }
        u += w;
      }
    } finally {
      await c.close();
    }
    return s;
  } finally {
    await r.close();
  }
}
async function ue(t, e, i = t) {
  if (t === e) return !0;
  try {
    if (!(await J(i)).isFile()) return !1;
    return (await pt(i)) === (await pt(e));
  } catch {
    return !1;
  }
}
function initTaskOutputAsSymlink(t, e, i) {
  return kt(
    (async () => {
      try {
        let o = bindTaskOutputPath(t),
          r = await tt(o, { replaceLeaf: !0 });
        try {
          if (await ue(o, e, r.ioPath)) {
            let s = await ut(r.ioPath).catch(() => e);
            return (await Lt(o, q(s) ? s : e), i?.("noop"), o);
          }
          if (q(e)) await Mt(e);
          try {
            (await r.recheckBeforeWrite(), await Nt(e, r.ioPath));
          } catch (s) {
            if (A(s) !== "EEXIST") throw s;
            (await r.recheckBeforeWrite(),
              await gt(r.ioPath),
              await r.recheckBeforeWrite(),
              await Nt(e, r.ioPath));
          }
          sr().linkedOutputs.set(o, e);
        } finally {
          await r.close();
        }
        return (i?.("symlink"), o);
      } catch (o) {
        let r = A(o);
        if ((r && WW.has(r)) || r === "EROFS")
          n(`initTaskOutputAsSymlink failed (${r}): ${o}`, { level: "error" });
        else h(o);
        return initTaskOutput(t);
      }
    })(),
  );
}
export {
  Cbt,
  Vre,
  cG,
  Q3t,
  $k,
  uG,
  MAX_TASK_OUTPUT_BYTES,
  MAX_TASK_OUTPUT_BYTES_DISPLAY,
  MAX_PERSISTED_OUTPUT_BYTES,
  getTaskOutputRootDir,
  getTaskOutputDir,
  taskOutputDirForSession,
  peekTaskOutputDir,
  bindTaskOutputPath,
  getTaskOutputPath,
  DiskTaskOutput,
  appendTaskOutput,
  evictTaskOutput,
  releaseConvergentTaskOutputBinding,
  getTaskOutputDelta,
  getTaskOutput,
  getTaskOutputSize,
  repointTaskOutputSymlinks,
  openTaskOutputForRead,
  isTaskOutputFilePath,
  taskOutputDirExclusions,
  bindTaskOutputForRead,
  tailTaskOutput,
  unlinkTaskOutput,
  writeTaskOutputSnapshot,
  openTaskOutputForAppend,
  initTaskOutput,
  isTaskOutputSwapRefusal,
  openVerifiedTaskOutput,
  getVerifiedTaskOutputTail,
  persistTaskOutputSnapshot,
  initTaskOutputAsSymlink,
};
