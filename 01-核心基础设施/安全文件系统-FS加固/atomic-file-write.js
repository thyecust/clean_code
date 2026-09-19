// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { sleep } from "../核心工具-并发与缓存/async-timeout-utils.js";
import { randomBytes } from "crypto";
import {
  closeSync,
  constants,
  fchmodSync,
  fstatSync,
  ftruncateSync,
  lstatSync,
  openSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from "fs";
import {
  lstat,
  open,
  rename,
  stat,
  unlink,
  writeFile,
} from "fs/promises";
var RENAME_FALLBACK_ERRNOS = new Set(["EXDEV", "EPERM", "EEXIST", "EBUSY"]),
  RENAME_CONTENTION_ERRNOS = new Set(["EPERM", "EBUSY", "EACCES"]);
function buildTempFilePath(t) {
  return `${t}.tmp.${randomBytes(4).toString("hex")}`;
}
function isTempFileFor(t, n) {
  let e = `${n}.tmp.`;
  return t.startsWith(e) && /^[0-9a-f]{8}$/.test(t.slice(e.length));
}
function isTempFilePath(t) {
  return /\.tmp\.(?:[0-9a-f]{8}|\d+\.[0-9a-f]{12})$/.test(t);
}
var st = 4,
  X = 50,
  ct = new Int32Array(new SharedArrayBuffer(4));
function ut(t) {
  Atomics.wait(ct, 0, 0, t);
}
function V(t, n) {
  return !1;
}
var j = 128;
async function ft(t) {
  try {
    return ((await lstat(t)).mode & j) === 0;
  } catch {
    return !1;
  }
}
async function retryOnTransientError(t, n) {
  let e = !1;
  for (let r = 0; ; r++)
    try {
      return (await t(), e);
    } catch (i) {
      if (V(i, r)) {
        if (r === 0 && n !== void 0 && (await ft(n))) throw i;
        ((e = !0), await sleep(X));
        continue;
      }
      throw i;
    }
}
function renameWithRetry(t, n, e = rename) {
  return retryOnTransientError(() => e(t, n), n);
}
function lt(t) {
  try {
    return (lstatSync(t).mode & j) === 0;
  } catch {
    return !1;
  }
}
function renameWithRetrySync(t, n, e = renameSync) {
  let r = !1;
  for (let i = 0; ; i++)
    try {
      return (e(t, n), r);
    } catch (a) {
      if (V(a, i)) {
        if (i === 0 && lt(n)) throw a;
        ((r = !0), ut(X));
        continue;
      }
      throw a;
    }
}
var PARTIAL_WRITE_ERRNOS = new Set(["ENOSPC", "EIO", "EDQUOT", "EFBIG"]),
  H = 67108864,
  O_NONBLOCK = constants.O_NONBLOCK;
async function K(t, n, e = "darwin") {
  if (e !== "win32") return !0;
  try {
    return (await lstat(t)).isFile();
  } catch (r) {
    return n && A(r) === "ENOENT";
  }
}
function z(t, n, e = "darwin") {
  if (e !== "win32") return !0;
  try {
    return lstatSync(t).isFile();
  } catch (r) {
    return n && A(r) === "ENOENT";
  }
}
async function dt(t, n = !1) {
  if (!n && !(await K(t, !0))) return { kind: "unavailable" };
  let e;
  try {
    e = await open(t, constants.O_RDONLY | (n ? 0 : constants.O_NOFOLLOW) | O_NONBLOCK);
  } catch (r) {
    return A(r) === "ENOENT" ? { kind: "absent" } : { kind: "unavailable" };
  }
  try {
    let r = await e.stat();
    if (!r.isFile() || r.size > H) return { kind: "unavailable" };
    return {
      kind: "snapshot",
      bytes: new Uint8Array(await e.readFile()),
      mode: r.mode & 4095,
    };
  } catch {
    return { kind: "unavailable" };
  } finally {
    await e.close().catch(() => {});
  }
}
async function ht(t, n, e = !1) {
  if (!e && !(await K(t, !0))) return !1;
  let r;
  try {
    r = await open(
      t,
      constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | (e ? 0 : constants.O_NOFOLLOW) | O_NONBLOCK,
      n.mode,
    );
  } catch {
    return !1;
  }
  try {
    if (!(await r.stat()).isFile())
      return (await r.close().catch(() => {}), !1);
    return (
      await r.writeFile(n.bytes),
      await r.chmod(n.mode).catch(() => {}),
      await r.close(),
      !0
    );
  } catch {
    return (await r.close().catch(() => {}), !1);
  }
}
function O(t, n, e) {
  try {
    if (t instanceof Error)
      ((t.message = `${t.message}; ${n !== void 0 ? `new contents preserved at ${n}; ` : ""}${e === "restored" ? "original target restored" : e === "removed" ? "partial target removed" : e === "untouched" ? "target untouched" : "target left partial \u2014 treat contents as torn"}`),
        Object.assign(t, {
          ...(n !== void 0 && { preservedTmp: n }),
          targetOutcome: e,
        }));
  } catch {}
  return t;
}
function isUnsupportedFsOperationError(t) {
  let n = A(t);
  return n === "EINVAL" || n === "ENOTSUP" || n === "EPERM" || n === "ENOSYS";
}
var F = 3;
async function Q(t, n) {
  if (n !== "win32") return !1;
  try {
    return (await lstat(t), !0);
  } catch (e) {
    return A(e) === "ENOENT" ? !1 : { cause: e };
  }
}
function M(t, n) {
  return Object.assign(
    Error(
      "EEXIST: name already taken (exclusive create)",
      typeof n === "object" ? { cause: n.cause } : void 0,
    ),
    { code: "EEXIST", syscall: "lstat", path: t },
  );
}
async function G(t, n, e) {
  for (let r = 1; ; r++) {
    let i = buildTempFilePath(t),
      a = await Q(i, n);
    if (a !== !1) {
      if (r < F) continue;
      throw M(i, a);
    }
    try {
      return await e(i);
    } catch (u) {
      if (A(u) === "EEXIST" && r < F) continue;
      throw u;
    }
  }
}
async function writeNewFileExclusive(t, n, e, r = "darwin") {
  return G(t, r, async (i) => {
    try {
      return (await writeFile(i, n, { encoding: "utf8", mode: e, flag: "wx" }), i);
    } catch (a) {
      if (A(a) !== "EEXIST") await unlink(i).catch(() => {});
      throw a;
    }
  });
}
async function mt(t, n, e = "darwin") {
  return G(t, e, async (r) => ({
    fh: await open(r, e === "win32" ? "wx" : constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL, n),
    tmp: r,
  }));
}
async function writeNewFileAfterAbsenceCheck(t, n, e, r = "darwin") {
  (await assertFileDoesNotExist(t, r), await writeFile(t, n, { encoding: "utf8", mode: e, flag: "wx" }));
}
async function assertFileDoesNotExist(t, n = "darwin") {
  let e = await Q(t, n);
  if (e === !0) throw M(t, e);
  if (e !== !1) throw e.cause;
}
async function writeFileAtomic(t, n, e, r) {
  return writeFileAtomicWithOptions(t, n, { mode: e, renameFn: r });
}
async function writeFileAtomicWithOptions(t, n, e) {
  let {
      mode: r,
      createMode: i,
      exactMode: a,
      flush: u,
      followSymlinks: w,
      inPlaceOnTempCreateRefused: T,
      renameFn: _,
    } = e,
    d = r ?? i,
    S = w === !0 ? 0 : constants.O_NOFOLLOW,
    h,
    p = !1,
    y = !1,
    N = async (s) => {
      let c = await dt(t, w === !0),
        m = c.kind === "snapshot" ? c : void 0,
        f = await open(t, constants.O_WRONLY | constants.O_CREAT | S | O_NONBLOCK, a ?? d),
        b;
      try {
        b = await f.stat();
      } catch (g) {
        throw (
          await f.close().catch(() => {}),
          (p = s !== void 0),
          O(g, s, "untouched")
        );
      }
      let l = b.isCharacterDevice();
      if (!b.isFile() && !l)
        throw (
          await f.close().catch(() => {}),
          Object.assign(
            Error("refusing the in-place arm on a non-regular target"),
            { code: "ENXIO", path: t },
          )
        );
      let U = !1;
      try {
        if (!l) (await f.truncate(0), (U = !0));
        await f.writeFile(n, { encoding: "utf8" });
        let g = l ? void 0 : (a ?? (c.kind !== "absent" ? r : void 0));
        if (g !== void 0) await f.chmod(g).catch(() => {});
        if (u === !0)
          try {
            await f.sync();
          } catch (R) {
            if (!isUnsupportedFsOperationError(R)) throw R;
          }
        await f.close();
      } catch (g) {
        if ((await f.close().catch(() => {}), !U))
          throw ((p = s !== void 0), O(g, s, "untouched"));
        p = s !== void 0;
        let q =
          m !== void 0 && (await ht(t, m, w === !0))
            ? "restored"
            : (await unlink(t).then(
                  () => !0,
                  (tt) => A(tt) === "ENOENT",
                ))
              ? "removed"
              : "partial";
        throw O(g, s, q);
      }
      let I = s ?? h;
      if (I !== void 0) await unlink(I).catch(() => {});
    };
  try {
    try {
      if (a !== void 0 || u === !0) {
        let c = await mt(t, a ?? d),
          m = c.fh;
        h = c.tmp;
        let f = !1,
          b;
        try {
          if ((await m.writeFile(n, { encoding: "utf8" }), a !== void 0))
            try {
              await m.chmod(a);
            } catch (l) {
              if (!isUnsupportedFsOperationError(l)) throw l;
            }
          if (u === !0)
            try {
              await m.sync();
            } catch (l) {
              if (!isUnsupportedFsOperationError(l)) throw l;
            }
        } catch (l) {
          ((f = !0), (b = l));
        }
        if (!f) y = !0;
        try {
          await m.close();
        } catch (l) {
          if (!f) throw ((p = !0), O(l, h, "untouched"));
        }
        if (f) throw b;
      } else ((h = await writeNewFileExclusive(t, n, d)), (y = !0));
    } catch (c) {
      if (T !== !0) throw c;
      if (y) throw c;
      if (A(c) !== "EACCES") throw c;
      if (
        !(await stat(t).then(
          () => !0,
          () => !1,
        ))
      )
        throw c;
      await N(void 0);
      return;
    }
    if (h === void 0)
      throw Error("staging block exited without a staging file");
    let s = h;
    try {
      await renameWithRetry(s, t, _);
    } catch (c) {
      let m = A(c);
      if (m === void 0 || !RENAME_FALLBACK_ERRNOS.has(m)) throw c;
      await N(s);
    }
  } catch (s) {
    if (h !== void 0 && !p) await unlink(h).catch(() => {});
    throw s;
  }
}
function x(t) {
  try {
    unlinkSync(t);
  } catch {}
}
function wt(t) {
  if (!z(t, !0)) return { kind: "unavailable" };
  let n;
  try {
    n = openSync(t, constants.O_RDONLY | constants.O_NOFOLLOW | O_NONBLOCK);
  } catch (e) {
    return A(e) === "ENOENT" ? { kind: "absent" } : { kind: "unavailable" };
  }
  try {
    let e = fstatSync(n);
    if (!e.isFile() || e.size > H) return { kind: "unavailable" };
    return {
      kind: "snapshot",
      bytes: new Uint8Array(readFileSync(n)),
      mode: e.mode & 4095,
    };
  } catch {
    return { kind: "unavailable" };
  } finally {
    try {
      closeSync(n);
    } catch {}
  }
}
function yt(t, n) {
  if (!z(t, !0)) return !1;
  let e;
  try {
    e = openSync(t, constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | constants.O_NOFOLLOW | O_NONBLOCK, n.mode);
  } catch {
    return !1;
  }
  let r = !1;
  try {
    if (!fstatSync(e).isFile()) return ((r = !0), closeSync(e), !1);
    writeFileSync(e, n.bytes);
    try {
      fchmodSync(e, n.mode);
    } catch {}
    return ((r = !0), closeSync(e), !0);
  } catch {
    if (!r)
      try {
        closeSync(e);
      } catch {}
    return !1;
  }
}
function pt(t, n) {
  if (n !== "win32") return !1;
  try {
    return (lstatSync(t), !0);
  } catch (e) {
    return A(e) === "ENOENT" ? !1 : { cause: e };
  }
}
function Et(t, n, e, r = "darwin") {
  for (let i = 1; ; i++) {
    let a = buildTempFilePath(t),
      u = pt(a, r);
    if (u !== !1) {
      if (i < F) continue;
      throw M(a, u);
    }
    try {
      return (writeFileSync(a, n, { encoding: "utf8", mode: e, flag: "wx" }), a);
    } catch (w) {
      if (A(w) === "EEXIST") {
        if (i < F) continue;
        throw w;
      }
      throw (x(a), w);
    }
  }
}
function writeFileAtomicSync(t, n, e, r) {
  let i = !1,
    a;
  try {
    a = Et(t, n, e);
    try {
      renameWithRetrySync(a, t, r);
    } catch (u) {
      let w = A(u);
      if (w === void 0 || !RENAME_FALLBACK_ERRNOS.has(w)) throw u;
      let T = wt(t),
        _ = T.kind === "snapshot" ? T : void 0,
        d = openSync(t, constants.O_WRONLY | constants.O_CREAT | constants.O_NOFOLLOW | O_NONBLOCK, e),
        S = !1;
      {
        let y;
        try {
          y = fstatSync(d);
        } catch (N) {
          try {
            closeSync(d);
          } catch {}
          throw ((i = !0), O(N, a, "untouched"));
        }
        if (((S = y.isCharacterDevice()), !y.isFile() && !S)) {
          try {
            closeSync(d);
          } catch {}
          throw Object.assign(
            Error("refusing the in-place arm on a non-regular target"),
            { code: "ENXIO", path: t },
          );
        }
      }
      let h = !1,
        p = !1;
      try {
        if (!S) (ftruncateSync(d, 0), (p = !0));
        if (
          (writeFileSync(d, n, { encoding: "utf8" }),
          e !== void 0 && T.kind !== "absent" && !S)
        )
          try {
            fchmodSync(d, e);
          } catch {}
        ((h = !0), closeSync(d));
      } catch (y) {
        if (!h)
          try {
            closeSync(d);
          } catch {}
        if (!p) throw ((i = !0), O(y, a, "untouched"));
        i = !0;
        let N = _ !== void 0 && yt(t, _),
          s = "partial";
        if (N) s = "restored";
        else
          try {
            (unlinkSync(t), (s = "removed"));
          } catch (c) {
            s = A(c) === "ENOENT" ? "removed" : "partial";
          }
        throw O(y, a, s);
      }
      x(a);
    }
  } catch (u) {
    if (a !== void 0 && !i) x(a);
    throw u;
  }
}
export {
  RENAME_FALLBACK_ERRNOS,
  RENAME_CONTENTION_ERRNOS,
  buildTempFilePath,
  isTempFileFor,
  isTempFilePath,
  retryOnTransientError,
  renameWithRetry,
  renameWithRetrySync,
  PARTIAL_WRITE_ERRNOS,
  O_NONBLOCK,
  isUnsupportedFsOperationError,
  writeNewFileExclusive,
  writeNewFileAfterAbsenceCheck,
  assertFileDoesNotExist,
  writeFileAtomic,
  writeFileAtomicWithOptions,
  writeFileAtomicSync,
};
