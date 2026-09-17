// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, iOn, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie, zn, ku } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { R, l, A, W, Nz, Rt, Bp } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Np, Ro, Tr, ae, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { logError } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { findExecutableWindows } from "../共享小工具-未细化/chunk-twnwwsbr.js";
import { Q } from "../共享小工具-未细化/chunk-rsr7cnyv.js";
import { logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { lv, Ri, fPn, Xie } from "../安全文件系统(FS加固)/chunk-h64ek850.js";
import { B8t } from "../共享小工具-未细化/chunk-a7cfts2d.js";
import { createKeyedSerialQueue } from "../共享小工具-未细化/async-serialization.js";
import { xA } from "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { P } from "./chunk-13kdp2ag.js";
import * as x from "path/win32";
class K {
  shellConfig = null;
  powerShellProvider = null;
  powerShellPath = null;
  resolvedPowerShellPath = void 0;
  gitBashPath = void 0;
  warnedShortTmpDir = !1;
}
var fe = new j(() => new K());
function Pge() {
  return fe.of(B().host);
}
function SRt() {
  if (P() === "windows") {
    let e = _1();
    if (e) ((process.env.SHELL = e), n(`Using bash path: "${e}"`));
    else n("Git Bash not found; BashTool will be unavailable");
  }
}
function _1() {
  let e = Pge();
  if (e.gitBashPath === void 0) e.gitBashPath = de();
  return e.gitBashPath;
}
function de() {
  let { existsSync: e } = ae();
  if (a.CLAUDE_CODE_GIT_BASH_PATH) {
    let i = x.basename(a.CLAUDE_CODE_GIT_BASH_PATH).toLowerCase(),
      s = ["bash.exe", "sh.exe", "bash", "sh"].includes(i);
    if (s && e(a.CLAUDE_CODE_GIT_BASH_PATH)) return a.CLAUDE_CODE_GIT_BASH_PATH;
    n(
      `CLAUDE_CODE_GIT_BASH_PATH "${a.CLAUDE_CODE_GIT_BASH_PATH}" ${s ? "not found" : "is not a bash/sh binary"}; falling back to auto-detection`,
      { level: "warn" },
    );
  }
  let t = [
    "C:\\Program Files\\Git\\bin\\bash.exe",
    "C:\\Program Files (x86)\\Git\\bin\\bash.exe",
  ];
  for (let i of t) if (e(i)) return i;
  let r = findExecutableWindows("git");
  if (r) {
    let i = x.join(r, "..", "..", "bin", "bash.exe");
    if (e(i)) return i;
  }
  return null;
}
function bRt(e, t) {
  if (!x.isAbsolute(t)) return;
  let r = x.dirname(t),
    i = Object.keys(e).find((o) => o.toUpperCase() === "PATH") ?? "PATH",
    s = e[i];
  e[i] = s ? r + x.delimiter + s : r;
}
function wRt(e) {
  let t = e.trim(),
    r = "",
    i = 0;
  while (i < t.length) {
    let s = t[i];
    if (s === '"' || s === "'") {
      let o = t.indexOf(s, i + 1);
      if (o === -1) {
        ((r += t.slice(i + 1)), (i = t.length));
        break;
      }
      ((r += t.slice(i + 1, o)), (i = o + 1));
    } else if (s === "\\" && i + 1 < t.length) ((r += t[i + 1]), (i += 2));
    else if (/\s/.test(s)) break;
    else ((r += s), i++);
  }
  return r.endsWith(".sh") ? `bash ${e}` : e;
}
var KT = xA(
    (e) => {
      if (e.startsWith("\\\\")) return e.replaceAll("\\", "/");
      let t = e.match(/^([A-Za-z]):[/\\]/);
      if (t) return "/" + t[1].toLowerCase() + e.slice(2).replaceAll("\\", "/");
      return e.replaceAll("\\", "/");
    },
    (e) => e,
    500,
  ),
  Oge = xA(
    (e) => {
      if (e.startsWith("//")) return e.replaceAll("/", "\\");
      let t = e.match(/^\/cygdrive\/([A-Za-z])(\/|$)/);
      if (t) {
        let i = t[1].toUpperCase(),
          s = e.slice(("/cygdrive/" + t[1]).length);
        return i + ":" + (s || "\\").replaceAll("/", "\\");
      }
      let r = e.match(/^\/([A-Za-z])(\/|$)/);
      if (r) {
        let i = r[1].toUpperCase(),
          s = e.slice(2);
        return i + ":" + (s || "\\").replaceAll("/", "\\");
      }
      return e.replaceAll("/", "\\");
    },
    (e) => e,
    500,
  );
import { homedir as U } from "os";
import {
  dirname as Z,
  extname as ue,
  isAbsolute as me,
  join as he,
  normalize as H,
  relative as pe,
  resolve as ge,
  sep as we,
} from "path";
function ot(e, t) {
  let r = t ?? Q() ?? ae().cwd();
  if (typeof e !== "string")
    throw TypeError(`Path must be a string, received ${typeof e}`);
  if (typeof r !== "string")
    throw TypeError(`Base directory must be a string, received ${typeof r}`);
  if (e.includes("\x00") || r.includes("\x00"))
    throw Error("Path contains null bytes");
  let i = e.trim();
  if (!i) return zn(H(r));
  if (i === "~") return zn(U());
  if (i.startsWith("~/")) return zn(he(U(), i.slice(2)));
  let s = i;
  if (P() === "windows" && i.match(/^\/[a-z]\//i))
    try {
      s = Oge(i);
    } catch {
      s = i;
    }
  if (me(s)) return zn(H(s));
  return zn(ge(r, s));
}
function Net(e) {
  let t = pe(Q(), e);
  return t.startsWith("..") ? e : t;
}
function nL(e) {
  let t = ot(e);
  if (ku(t)) return Z(t);
  try {
    if (ae().statSync(t).isDirectory()) return t;
  } catch {}
  return Z(t);
}
function Iq(e) {
  return /(?:^|[\\/])\.\.(?:[\\/]|$)/.test(e);
}
function Gu(e) {
  let t = U();
  if (e === t) return "~";
  if (e.startsWith(t + we)) return "~" + e.slice(t.length);
  return e;
}
function y1(e) {
  let t = H(e);
  if (P() === "windows") return t.replaceAll("\\", "/");
  return t;
}
function kQ(e) {
  return ue(e).toLowerCase() === ".ipynb";
}
import { randomBytes } from "crypto";
import {
  closeSync,
  fchmodSync,
  constants,
  fstatSync,
  writeFileSync,
  fsyncSync,
  openSync,
  readSync,
} from "fs";
import {
  lstat,
  open as D,
  readlink,
  realpath,
  stat as re,
} from "fs/promises";
import { homedir as ne } from "os";
import {
  basename,
  dirname as O,
  extname as J,
  isAbsolute as M,
  join as L,
  normalize as Se,
  parse,
  relative as z,
  resolve as Y,
  sep as T,
} from "path";
var rL = ".cc-writes";
class ie {
  identities = new Map();
  record(e, t, r, i) {
    let s = q(e),
      o = this.identities.get(s);
    if (o)
      try {
        closeSync(o.fd);
      } catch {}
    this.identities.set(s, { dev: t, ino: r, fd: i });
  }
  identity(e) {
    return this.identities.get(q(e));
  }
  reset() {
    for (let { fd: e } of this.identities.values())
      try {
        closeSync(e);
      } catch {}
    this.identities.clear();
  }
}
var $e = new j(() => new ie());
function G() {
  return $e.of(B().host);
}
function q(e) {
  return Y(e);
}
function Mar(e, t, r, i) {
  G().record(e, t, r, i);
}
function k(e) {
  if (!e) return;
  let t = G().identity(e);
  if (!t) return;
  let r;
  try {
    r = openSync(e, constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW);
  } catch (i) {
    let s = A(i);
    if (s === "ENOENT" || s === "ENOTDIR" || s === "ELOOP" || s === "EACCES")
      rke(
        `Staging dir ${e} was established for a sandboxed command but is now unopenable (${s}) \u2014 refusing atomic write`,
      );
    throw i;
  }
  try {
    let i = fstatSync(r);
    if (i.dev !== t.dev || i.ino !== t.ino)
      rke(
        `Staging dir ${e} identity changed (expected ${t.dev}/${t.ino}, found ${i.dev}/${i.ino}) \u2014 refusing atomic write`,
      );
  } finally {
    closeSync(r);
  }
}
function oe(e, t, r, i) {
  let s = `${t}${r}`;
  if (!e) return s;
  let o = G().identity(e);
  if (i && O(t) !== O(e)) return (k(e), s);
  let c = constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW;
  try {
    closeSync(openSync(O(e), c));
  } catch (w) {
    let p = A(w);
    if (p === "ELOOP" || p === "ENOTDIR") {
      if (o)
        rke(
          `Staging dir parent ${O(e)} is ${p} but a sandboxed command established ${e} \u2014 refusing sibling fallback`,
        );
      if (i) return s;
      throw new gh(
        `Refusing to stage atomic write under non-directory parent: ${O(e)}`,
      );
    }
    if (!W(w)) throw w;
    if (o)
      rke(
        `Staging dir parent ${O(e)} is absent but a sandboxed command established ${e} \u2014 refusing sibling fallback`,
      );
    return s;
  }
  let u;
  try {
    u = openSync(e, c);
  } catch (w) {
    let p = A(w);
    if (p === "ENOENT" || p === "ENOTDIR" || p === "ELOOP") {
      if (o)
        rke(
          `Staging dir ${e} is ${p} but a sandboxed command established it \u2014 refusing sibling fallback`,
        );
      return s;
    }
    throw w;
  }
  try {
    if (o) {
      let w = fstatSync(u);
      if (w.dev !== o.dev || w.ino !== o.ino)
        rke(
          `Staging dir ${e} identity changed (expected ${o.dev}/${o.ino}, found ${w.dev}/${w.ino}) \u2014 refusing atomic write`,
        );
    }
  } finally {
    closeSync(u);
  }
  return L(e, `${basename(t)}${r}`);
}
class gh extends Error {
  constructor(e) {
    super(e);
    this.name = "SymlinkWriteRefusedError";
  }
}
class xQ extends Error {
  constructor(e) {
    super(e);
    this.name = "SymlinkReadRefusedError";
  }
}
async function nke(e, t) {
  let r = z(e, t);
  if (r === "" || r.startsWith("..") || M(r))
    throw new R(
      `assertDirChainReal: dir must be strictly inside base (rel: ${r})`,
      "assertDirChainReal: dir must be strictly inside base",
    );
  let i = e;
  for (let s of r.split(T)) {
    i = L(i, s);
    try {
      await (await D(i, constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW)).close();
    } catch (o) {
      let c = A(o);
      if (c === "ELOOP" || c === "ENOTDIR")
        throw new gh(
          `Refusing to write under symlinked or non-directory path: ${i}`,
        );
      if (c === "ENOENT") return;
      throw o;
    }
  }
}
class se extends Error {
  constructor(e) {
    super(e);
    this.name = "StagingDirTamperedError";
  }
}
function rke(e) {
  throw (logFeatureBad("sandbox_exec", "atomic_write_staging_dir_tampered"), new se(e));
}
function DU(e, t, r = "write") {
  let i = e.session.writePermissionStash.consume(e.toolUseId, t, r);
  if (i === iOn)
    throw new (r === "read" ? xQ : gh)(
      `Refusing to ${r === "read" ? "read" : "write"} ${t}: its permission check expired before it ran (too many concurrent file operations). Retry.`,
    );
  if (i !== void 0) return i;
  if (e.toolUseId)
    n(
      `takeApprovedPathsForWrite: no check-time stash for toolUseId=${e.toolUseId}; using fresh resolution`,
    );
  return Tr(t);
}
function oke(e, t) {
  return DU(e, t, "read");
}
async function El(e) {
  try {
    return (await re(e), !0);
  } catch {
    return !1;
  }
}
var Dge = 262144;
function Lge(
  e,
  {
    maxBytes: t,
    symlinkAtPath: r = "follow",
    regularFileOnly: i = r === "refuse",
  },
) {
  using s = Np`fs.readBoundedSync(${e}, max ${t} bytes)`;
  let o = "r";
  if (r === "refuse") o = constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK;
  else if (i) o = constants.O_RDONLY | constants.O_NONBLOCK;
  let c = openSync(e, o);
  try {
    if (i) {
      if (!fstatSync(c).isFile())
        throw Object.assign(Error("EINVAL: not a regular file"), {
          code: "EINVAL",
        });
    }
    return ce(c, e, t);
  } finally {
    closeSync(c);
  }
}
function Nar(e, { maxBytes: t }) {
  using r = Np`fs.readInheritedFdSync(fd ${e}, max ${t} bytes)`;
  let i = fstatSync(e);
  if (!i.isSocket() && !i.isFIFO())
    throw new R(
      `refusing to read fd ${e}: not a pipe or socket`,
      "readInheritedFdSync: descriptor is not a pipe or socket",
    );
  return xe(e, t);
}
function z5t(e) {
  try {
    return fstatSync(e).isSocket();
  } catch {
    return !1;
  }
}
function xe(e, t) {
  try {
    return ce(e, `fd ${e}`, t, { untilNewline: !0 });
  } finally {
    closeSync(e);
  }
}
function ce(e, t, r, { untilNewline: i = !1 } = {}) {
  let s = [],
    o = 0,
    c = Buffer.alloc(8192);
  while (!0) {
    let u = readSync(e, c, 0, c.length, null);
    if (u === 0) return Buffer.concat(s).toString("utf8");
    if (((o += u), o > r))
      throw new R(
        `refusing to read ${t}: content exceeds ${r} byte limit`,
        "readBoundedSync: content exceeds byte limit",
      );
    let w = i ? c.subarray(0, u).indexOf(10) : -1;
    if ((s.push(Buffer.from(c.subarray(0, w === -1 ? u : w + 1))), w !== -1))
      return Buffer.concat(s).toString("utf8");
  }
}
function Pq(e) {
  let t = ae();
  return Math.floor(t.statSync(e).mtimeMs);
}
async function bA(e) {
  let t = await ae().stat(e);
  return Math.floor(t.mtimeMs);
}
function Vxn() {
  return Ie(a.CLAUDE_CODE_PERFORCE_MODE);
}
var Fet =
  "File is read-only \u2014 it has not been opened for edit in Perforce. Run `p4 edit <file>` to check it out, then retry. Do not chmod the file writable; that bypasses Perforce tracking.";
function $et(e) {
  return Vxn() && (e & 128) === 0;
}
var Le = createKeyedSerialQueue();
function j6(e, t) {
  return Le.run(e, t);
}
function Uet(e, t) {
  if (t !== "CRLF") return e;
  return e.replaceAll(
    `\r
`,
    `
`,
  ).split(`
`).join(`\r
`);
}
async function HQ(e, t, r, i) {
  let s = Uet(t, i);
  await wb(e, s, { encoding: r });
  let o = Buffer.byteLength(s, r),
    c = await ae().stat(e);
  if (c.size !== o)
    throw new R(
      `Write verification failed: ${e} is ${c.size} bytes on disk, expected ${o}. The filesystem may have silently truncated the write (network drive / cloud sync).`,
      "writeTextContent: on-disk size mismatch after write",
    );
  return Math.floor(c.mtimeMs);
}
function Far(e) {
  try {
    let t = ae(),
      { resolvedPath: r } = Ro(t, e);
    return B8t(r);
  } catch (t) {
    if (Rt(t) || Nz(t) || Bp(t))
      n(`detectFileEncoding failed for expected reason: ${A(t)}`, {
        level: "debug",
      });
    else logError(t);
    return "utf8";
  }
}
function LU(e) {
  if (!e.includes("\t")) return e;
  return e.replace(/^\t+/gm, (t) => "  ".repeat(t.length));
}
function ve(e) {
  let t = e ? ot(e) : void 0,
    r = t ? z(Q(), t) : void 0;
  return { absolutePath: t, relativePath: r };
}
function Ao(e) {
  let { relativePath: t } = ve(e);
  if (t && !t.startsWith("..")) return t;
  let r = ne();
  if (e.startsWith(r + T)) return "~" + e.slice(r.length);
  return e;
}
async function _ie(e) {
  let t = ae();
  try {
    let r = O(e),
      i = basename(e, J(e)),
      c = (await t.readdir(r)).filter(
        (u) => basename(u.name, J(u.name)) === i && L(r, u.name) !== e,
      )[0];
    if (c) return c.name;
    return;
  } catch (r) {
    if (!W(r)) n(`findSimilarFile failed for ${e}: ${r}`, { level: "error" });
    return;
  }
}
var yx = "Note: your current working directory is";
async function W6(e) {
  let t = Q(),
    r = O(t),
    i = e;
  try {
    let S = await realpath(O(e));
    i = L(S, basename(e));
  } catch {}
  let s = r === T ? T : r + T,
    c = P() === "windows" ? (S) => S.toLowerCase() : (S) => S,
    u = c(i);
  if (!u.startsWith(c(s)) || u.startsWith(c(t + T)) || u === c(t)) return;
  let w = z(r, i),
    p = L(t, w);
  try {
    return (await re(p), p);
  } catch {
    return;
  }
}
function V5t({ content: e, startLine: t, tabAwareSeparator: r = !1 }) {
  if (!e) return "";
  let i =
      r &&
      (e.startsWith("\t") ||
        e.includes(`
	`))
        ? ":"
        : "\t",
    s = [],
    o = t,
    c = 0,
    u = e.indexOf(`
`);
  while (u !== -1)
    (s.push(K5t(e.slice(c, u), o++, i)),
      (c = u + 1),
      (u = e.indexOf(
        `
`,
        c,
      )));
  return (
    s.push(K5t(e.slice(c), o, i)),
    s.join(`
`)
  );
}
function K5t(e, t, r) {
  let i = e.endsWith("\r") ? e.slice(0, -1) : e;
  return `${t}${r}${i}`;
}
function TRt(e) {
  return e.match(/^\s*\d+[\u2192\t:](.*)$/)?.[1] ?? e;
}
function le(e, t) {
  if (e instanceof Error && !(e instanceof gh) && e !== t)
    try {
      if (e.cause === void 0)
        ((e.message += ` (atomic write failed first: ${l(t)})`),
          Object.defineProperty(e, "cause", {
            value: t,
            writable: !0,
            configurable: !0,
            enumerable: !1,
          }));
    } catch {}
  throw e;
}
function Kxn(e, t, r = { encoding: "utf-8" }) {
  let i = ae(),
    s = r.allowSymlink ? 0 : constants.O_NOFOLLOW,
    o = e,
    c,
    u = !1;
  if (r.allowSymlink)
    try {
      let d = i.readlinkSync(e);
      ((o = M(d) ? d : Y(Ro(i, O(e)).resolvedPath, d)),
        n(`Writing through symlink: ${e} -> ${o}`));
    } catch {}
  else {
    if (r.checkParentDir)
      try {
        closeSync(openSync(O(e), constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW));
      } catch (d) {
        let b = A(d);
        if (b === "ELOOP" || b === "ENOTDIR")
          throw new gh(`Refusing to write into symlinked directory: ${O(e)}`);
      }
    try {
      let d = i.lstatSync(e);
      if (d.isSymbolicLink())
        throw new gh(
          `Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`,
        );
      ((c = d.mode), (u = !0));
    } catch (d) {
      if (!W(d)) throw d;
    }
  }
  let w = `.tmp.${process.pid}.${randomBytes(6).toString("hex")}`,
    p = oe(r.stagingDir, o, w, r.allowSymlink ?? !1),
    S = !1;
  if (r.allowSymlink && !u)
    try {
      ((c = i.statSync(o).mode), (u = !0));
    } catch (d) {
      if (!W(d)) throw d;
    }
  if (u && c !== void 0) n(`Preserving file permissions: ${c.toString(8)}`);
  else if (r.mode !== void 0)
    ((c = r.mode), n(`Setting permissions for new file: ${c.toString(8)}`));
  try {
    n(`Writing to temp file: ${p}`);
    let d = openSync(
        p,
        constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | s,
        !u && r.mode !== void 0 ? r.mode : void 0,
      ),
      b = !1,
      v;
    try {
      if (O(p) !== O(o)) k(r.stagingDir);
      if ((writeFileSync(d, t, { encoding: r.encoding }), u && c !== void 0))
        try {
          (fchmodSync(d, c), n("Applied original permissions to temp file"));
        } catch (g) {
          if (!Xie(g)) throw g;
          n(`fchmod unsupported on this filesystem: ${g}`);
        }
      try {
        fsyncSync(d);
      } catch (g) {
        if (!Xie(g)) throw g;
        n(`fsync unsupported on this filesystem: ${g}`);
      }
      S = !0;
    } catch (g) {
      ((b = !0), (v = g));
    }
    try {
      closeSync(d);
    } catch (g) {
      if (!b) throw g;
      n(`closeSync also failed after temp write error: ${g}`, {
        level: "error",
      });
    }
    if (b) throw v;
    if (
      (n(`Temp file written successfully, size: ${t.length} bytes`),
      O(p) !== O(o))
    )
      k(r.stagingDir);
    (n(`Renaming ${p} to ${o}`),
      fPn(p, o, (g, E) => i.renameSync(g, E)),
      n(`File ${o} written atomically`));
  } catch (d) {
    n(`Failed to write file atomically: ${d}`, { level: "error" });
    let b = A(d);
    if ((S && b !== void 0 && lv.has(b)) || (!S && u && b === "EACCES")) {
      let E;
      try {
        E = openSync(
          o,
          constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | s,
          !u && r.mode !== void 0 ? r.mode : void 0,
        );
      } catch (y) {
        try {
          i.unlinkSync(p);
        } catch (I) {
          n(`Failed to clean up temp file: ${I}`);
        }
        if (A(y) === "ELOOP")
          throw new gh(`Refusing to write through symlink: ${o} (O_NOFOLLOW)`);
        throw d;
      }
      try {
        writeFileSync(E, t, { encoding: r.encoding });
        try {
          fsyncSync(E);
        } catch (y) {
          if (!Xie(y)) throw y;
          n(`fsync unsupported on this filesystem: ${y}`);
        }
        closeSync(E);
        try {
          i.unlinkSync(p);
        } catch (y) {
          n(`Failed to clean up temp file: ${y}`);
        }
        n(`File ${o} written via in-place fallback`);
        return;
      } catch (y) {
        try {
          closeSync(E);
        } catch {}
        try {
          i.unlinkSync(o);
        } catch {}
        if (S)
          throw new R(
            `Write to ${o} failed (${A(y) ?? y}) after the target was truncated. The new content was preserved at ${p}.`,
            "writeFileSyncAndFlush: in-place fallback write failed; content preserved at temp path",
          );
        le(y, d);
      }
    }
    try {
      i.unlinkSync(p);
    } catch (E) {
      n(`Failed to clean up temp file: ${E}`);
    }
    throw d;
  }
}
async function wb(e, t, r = { encoding: "utf-8" }) {
  let i = ae(),
    s = r.allowSymlink ? 0 : constants.O_NOFOLLOW,
    o = e,
    c,
    u = !1;
  if (r.allowSymlink)
    try {
      let d = await readlink(e);
      ((o = M(d) ? d : Y(await realpath(O(e)), d)),
        n(`Writing through symlink: ${e} -> ${o}`));
    } catch {}
  else {
    if (r.checkParentDir)
      try {
        await (
          await D(O(e), constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW)
        ).close();
      } catch (d) {
        let b = A(d);
        if (b === "ELOOP" || b === "ENOTDIR")
          throw new gh(`Refusing to write into symlinked directory: ${O(e)}`);
      }
    try {
      let d = await lstat(e);
      if (d.isSymbolicLink())
        throw new gh(
          `Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`,
        );
      ((c = d.mode), (u = !0));
    } catch (d) {
      if (!W(d)) throw d;
    }
  }
  let w = `.tmp.${process.pid}.${randomBytes(6).toString("hex")}`,
    p = oe(r.stagingDir, o, w, r.allowSymlink ?? !1),
    S = !1;
  if (r.allowSymlink && !u)
    try {
      ((c = (await i.stat(o)).mode), (u = !0));
    } catch (d) {
      if (!W(d)) throw d;
    }
  if (u && c !== void 0) n(`Preserving file permissions: ${c.toString(8)}`);
  else if (r.mode !== void 0)
    ((c = r.mode), n(`Setting permissions for new file: ${c.toString(8)}`));
  try {
    n(`Writing to temp file: ${p}`);
    let d = await D(
        p,
        constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | s,
        !u && r.mode !== void 0 ? r.mode : void 0,
      ),
      b = !1,
      v;
    try {
      if (O(p) !== O(o)) k(r.stagingDir);
      if ((await d.writeFile(t, { encoding: r.encoding }), u && c !== void 0))
        try {
          (await d.chmod(c), n("Applied original permissions to temp file"));
        } catch (g) {
          if (!Xie(g)) throw g;
          n(`fchmod unsupported on this filesystem: ${g}`);
        }
      try {
        await d.sync();
      } catch (g) {
        if (!Xie(g)) throw g;
        n(`fsync unsupported on this filesystem: ${g}`);
      }
      S = !0;
    } catch (g) {
      ((b = !0), (v = g));
    }
    try {
      await d.close();
    } catch (g) {
      if (!b) throw g;
      n(`close also failed after temp write error: ${g}`, { level: "error" });
    }
    if (b) throw v;
    if (
      (n(`Temp file written successfully, size: ${t.length} bytes`),
      O(p) !== O(o))
    )
      k(r.stagingDir);
    (n(`Renaming ${p} to ${o}`),
      await Ri(p, o, (g, E) => i.rename(g, E)),
      n(`File ${o} written atomically`));
  } catch (d) {
    n(`Failed to write file atomically: ${d}`, { level: "error" });
    let b = A(d);
    if ((S && b !== void 0 && lv.has(b)) || (!S && u && b === "EACCES")) {
      let E;
      try {
        E = await D(
          o,
          constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | s,
          !u && r.mode !== void 0 ? r.mode : void 0,
        );
      } catch (y) {
        try {
          await i.unlink(p);
        } catch (I) {
          n(`Failed to clean up temp file: ${I}`);
        }
        if (A(y) === "ELOOP")
          throw new gh(`Refusing to write through symlink: ${o} (O_NOFOLLOW)`);
        throw d;
      }
      try {
        await E.writeFile(t, { encoding: r.encoding });
        try {
          await E.sync();
        } catch (y) {
          if (!Xie(y)) throw y;
          n(`fsync unsupported on this filesystem: ${y}`);
        }
        await E.close();
        try {
          await i.unlink(p);
        } catch (y) {
          n(`Failed to clean up temp file: ${y}`);
        }
        n(`File ${o} written via in-place fallback`);
        return;
      } catch (y) {
        try {
          await E.close();
        } catch {}
        try {
          await i.unlink(o);
        } catch {}
        if (S)
          throw new R(
            `Write to ${o} failed (${A(y) ?? y}) after the target was truncated. The new content was preserved at ${p}.`,
            "writeFileAndFlush: in-place fallback write failed; content preserved at temp path",
          );
        le(y, d);
      }
    }
    try {
      await i.unlink(p);
    } catch (E) {
      n(`Failed to clean up temp file: ${E}`);
    }
    throw d;
  }
}
var Pe = new Set(["Public", "Default", "Default User", "All Users"]);
async function $ar() {
  let e = P(),
    t = ne(),
    r = ae();
  if (e === "macos") return L(t, "Desktop");
  if (e === "windows") {
    let s = a.USERPROFILE ? a.USERPROFILE.replaceAll("\\", "/") : null;
    if (s) {
      let c = `/mnt/c${s.replace(/^[A-Z]:/, "")}/Desktop`;
      if (await El(c)) return c;
    }
    try {
      let c = await r.readdir("/mnt/c/Users");
      for (let u of c) {
        if (Pe.has(u.name)) continue;
        let w = L("/mnt/c/Users", u.name, "Desktop");
        if (await El(w)) return w;
      }
    } catch (o) {
      n(`Failed to enumerate /mnt/c/Users for Windows desktop path: ${o}`, {
        level: "error",
      });
    }
  }
  let i = L(t, "Desktop");
  if (await El(i)) return i;
  return t;
}
async function X5t(e, t = Dge) {
  try {
    return (await ae().stat(e)).size <= t;
  } catch {
    return !1;
  }
}
function pf(e) {
  let t = P() === "windows",
    r = Se(e),
    i = t ? /[\\/]+$/ : /\/+$/,
    s = r.length > parse(r).root.length ? r.replace(i, "") : r;
  return t ? s.replaceAll("/", "\\").toLowerCase() : s;
}
function ERt(e, t) {
  return pf(e) === pf(t);
}
export {
  Pge,
  SRt,
  _1,
  bRt,
  wRt,
  KT,
  Oge,
  ot,
  Net,
  nL,
  Iq,
  Gu,
  y1,
  kQ,
  rL,
  Mar,
  gh,
  xQ,
  nke,
  rke,
  DU,
  oke,
  El,
  Dge,
  Lge,
  Nar,
  z5t,
  Pq,
  bA,
  Vxn,
  Fet,
  $et,
  j6,
  Uet,
  HQ,
  Far,
  LU,
  Ao,
  _ie,
  yx,
  W6,
  V5t,
  K5t,
  TRt,
  Kxn,
  wb,
  $ar,
  X5t,
  pf,
  ERt,
};
