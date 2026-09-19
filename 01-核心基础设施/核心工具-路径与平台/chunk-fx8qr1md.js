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
import { startSlowOperationSpan, resolvePathInfo, expandPathAliases, getFsSurface, logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { logError } from "../提示词-SystemPrompt/chunk-27ncq5fr.js";
import { findExecutableWindows } from "../../03-入口与运行时/CLI入口-Commander/chunk-twnwwsbr.js";
import { getCwd } from "../核心工具-未归类/cwd-context.js";
import { logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { RENAME_FALLBACK_ERRNOS, renameWithRetry, renameWithRetrySync, isUnsupportedFsOperationError } from "../安全文件系统-FS加固/atomic-file-write.js";
import { detectFileEncoding } from "../安全文件系统-FS加固/safe-file-read.js";
import { createKeyedSerialQueue } from "../核心工具-并发与缓存/async-serialization.js";
import { xA } from "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { getCurrentPlatform } from "./platform-detection.js";
import * as x from "path/win32";
class ShellConfig {
  shellConfig = null;
  powerShellProvider = null;
  powerShellPath = null;
  resolvedPowerShellPath = void 0;
  gitBashPath = void 0;
  warnedShortTmpDir = !1;
}
var shellConfig = new j(() => new ShellConfig());
function getShellConfig() {
  return shellConfig.of(B().host);
}
function setupGitBashShellEnv() {
  if (getCurrentPlatform() === "windows") {
    let e = getGitBashPath();
    if (e) ((process.env.SHELL = e), logForDebugging(`Using bash path: "${e}"`));
    else logForDebugging("Git Bash not found; BashTool will be unavailable");
  }
}
function getGitBashPath() {
  let e = getShellConfig();
  if (e.gitBashPath === void 0) e.gitBashPath = de();
  return e.gitBashPath;
}
function de() {
  let { existsSync: e } = getFsSurface();
  if (a.CLAUDE_CODE_GIT_BASH_PATH) {
    let i = x.basename(a.CLAUDE_CODE_GIT_BASH_PATH).toLowerCase(),
      s = ["bash.exe", "sh.exe", "bash", "sh"].includes(i);
    if (s && e(a.CLAUDE_CODE_GIT_BASH_PATH)) return a.CLAUDE_CODE_GIT_BASH_PATH;
    logForDebugging(
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
function prependDirectoryToPathEnv(e, t) {
  if (!x.isAbsolute(t)) return;
  let r = x.dirname(t),
    i = Object.keys(e).find((o) => o.toUpperCase() === "PATH") ?? "PATH",
    s = e[i];
  e[i] = s ? r + x.delimiter + s : r;
}
function wrapShellScriptWithBash(e) {
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
var convertWindowsPathToUnix = xA(
    (e) => {
      if (e.startsWith("\\\\")) return e.replaceAll("\\", "/");
      let t = e.match(/^([A-Za-z]):[/\\]/);
      if (t) return "/" + t[1].toLowerCase() + e.slice(2).replaceAll("\\", "/");
      return e.replaceAll("\\", "/");
    },
    (e) => e,
    500,
  ),
  convertUnixPathToWindows = xA(
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
import { homedir } from "os";
import {
  dirname,
  extname,
  isAbsolute,
  join,
  normalize,
  relative,
  resolve,
  sep,
} from "path";
function resolvePath(e, t) {
  let r = t ?? getCwd() ?? getFsSurface().cwd();
  if (typeof e !== "string")
    throw TypeError(`Path must be a string, received ${typeof e}`);
  if (typeof r !== "string")
    throw TypeError(`Base directory must be a string, received ${typeof r}`);
  if (e.includes("\x00") || r.includes("\x00"))
    throw Error("Path contains null bytes");
  let i = e.trim();
  if (!i) return zn(normalize(r));
  if (i === "~") return zn(homedir());
  if (i.startsWith("~/")) return zn(join(homedir(), i.slice(2)));
  let s = i;
  if (getCurrentPlatform() === "windows" && i.match(/^\/[a-z]\//i))
    try {
      s = convertUnixPathToWindows(i);
    } catch {
      s = i;
    }
  if (isAbsolute(s)) return zn(normalize(s));
  return zn(resolve(r, s));
}
function toCwdRelativePath(e) {
  let t = relative(getCwd(), e);
  return t.startsWith("..") ? e : t;
}
function getContainingDirectory(e) {
  let t = resolvePath(e);
  if (ku(t)) return dirname(t);
  try {
    if (getFsSurface().statSync(t).isDirectory()) return t;
  } catch {}
  return dirname(t);
}
function containsPathTraversal(e) {
  return /(?:^|[\\/])\.\.(?:[\\/]|$)/.test(e);
}
function formatPathWithTilde(e) {
  let t = homedir();
  if (e === t) return "~";
  if (e.startsWith(t + sep)) return "~" + e.slice(t.length);
  return e;
}
function toForwardSlashPath(e) {
  let t = normalize(e);
  if (getCurrentPlatform() === "windows") return t.replaceAll("\\", "/");
  return t;
}
function isJupyterNotebookPath(e) {
  return extname(e).toLowerCase() === ".ipynb";
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
  open,
  readlink,
  realpath,
  stat,
} from "fs/promises";
import {
  basename,
  parse,
} from "path";
var ATOMIC_WRITE_STAGING_DIR_NAME = ".cc-writes";
class FileIdentityRegistry {
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
var fileIdentityRegistry = new j(() => new FileIdentityRegistry());
function G() {
  return fileIdentityRegistry.of(B().host);
}
function q(e) {
  return resolve(e);
}
function recordFileIdentity(e, t, r, i) {
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
      throwStagingDirTamperedError(
        `Staging dir ${e} was established for a sandboxed command but is now unopenable (${s}) \u2014 refusing atomic write`,
      );
    throw i;
  }
  try {
    let i = fstatSync(r);
    if (i.dev !== t.dev || i.ino !== t.ino)
      throwStagingDirTamperedError(
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
  if (i && dirname(t) !== dirname(e)) return (k(e), s);
  let c = constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW;
  try {
    closeSync(openSync(dirname(e), c));
  } catch (w) {
    let p = A(w);
    if (p === "ELOOP" || p === "ENOTDIR") {
      if (o)
        throwStagingDirTamperedError(
          `Staging dir parent ${dirname(e)} is ${p} but a sandboxed command established ${e} \u2014 refusing sibling fallback`,
        );
      if (i) return s;
      throw new SymlinkWriteRefusedError(
        `Refusing to stage atomic write under non-directory parent: ${dirname(e)}`,
      );
    }
    if (!W(w)) throw w;
    if (o)
      throwStagingDirTamperedError(
        `Staging dir parent ${dirname(e)} is absent but a sandboxed command established ${e} \u2014 refusing sibling fallback`,
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
        throwStagingDirTamperedError(
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
        throwStagingDirTamperedError(
          `Staging dir ${e} identity changed (expected ${o.dev}/${o.ino}, found ${w.dev}/${w.ino}) \u2014 refusing atomic write`,
        );
    }
  } finally {
    closeSync(u);
  }
  return join(e, `${basename(t)}${r}`);
}
class SymlinkWriteRefusedError extends Error {
  constructor(e) {
    super(e);
    this.name = "SymlinkWriteRefusedError";
  }
}
class SymlinkReadRefusedError extends Error {
  constructor(e) {
    super(e);
    this.name = "SymlinkReadRefusedError";
  }
}
async function assertDirChainReal(e, t) {
  let r = relative(e, t);
  if (r === "" || r.startsWith("..") || isAbsolute(r))
    throw new R(
      `assertDirChainReal: dir must be strictly inside base (rel: ${r})`,
      "assertDirChainReal: dir must be strictly inside base",
    );
  let i = e;
  for (let s of r.split(sep)) {
    i = join(i, s);
    try {
      await (await open(i, constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW)).close();
    } catch (o) {
      let c = A(o);
      if (c === "ELOOP" || c === "ENOTDIR")
        throw new SymlinkWriteRefusedError(
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
function throwStagingDirTamperedError(e) {
  throw (logFeatureBad("sandbox_exec", "atomic_write_staging_dir_tampered"), new se(e));
}
function takeApprovedPathForWrite(e, t, r = "write") {
  let i = e.session.writePermissionStash.consume(e.toolUseId, t, r);
  if (i === iOn)
    throw new (r === "read" ? SymlinkReadRefusedError : SymlinkWriteRefusedError)(
      `Refusing to ${r === "read" ? "read" : "write"} ${t}: its permission check expired before it ran (too many concurrent file operations). Retry.`,
    );
  if (i !== void 0) return i;
  if (e.toolUseId)
    logForDebugging(
      `takeApprovedPathsForWrite: no check-time stash for toolUseId=${e.toolUseId}; using fresh resolution`,
    );
  return expandPathAliases(t);
}
function takeApprovedPathForRead(e, t) {
  return takeApprovedPathForWrite(e, t, "read");
}
async function pathExists(e) {
  try {
    return (await stat(e), !0);
  } catch {
    return !1;
  }
}
var DEFAULT_MAX_FILE_READ_BYTES = 262144;
function readBoundedSync(
  e,
  {
    maxBytes: t,
    symlinkAtPath: r = "follow",
    regularFileOnly: i = r === "refuse",
  },
) {
  using s = startSlowOperationSpan`fs.readBoundedSync(${e}, max ${t} bytes)`;
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
function readInheritedFdSync(e, { maxBytes: t }) {
  using r = startSlowOperationSpan`fs.readInheritedFdSync(fd ${e}, max ${t} bytes)`;
  let i = fstatSync(e);
  if (!i.isSocket() && !i.isFIFO())
    throw new R(
      `refusing to read fd ${e}: not a pipe or socket`,
      "readInheritedFdSync: descriptor is not a pipe or socket",
    );
  return xe(e, t);
}
function isSocketFd(e) {
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
function getFileMtimeMsSync(e) {
  let t = getFsSurface();
  return Math.floor(t.statSync(e).mtimeMs);
}
async function getFileMtimeMs(e) {
  let t = await getFsSurface().stat(e);
  return Math.floor(t.mtimeMs);
}
function isPerforceModeEnabled() {
  return Ie(a.CLAUDE_CODE_PERFORCE_MODE);
}
var PERFORCE_READ_ONLY_MESSAGE =
  "File is read-only \u2014 it has not been opened for edit in Perforce. Run `p4 edit <file>` to check it out, then retry. Do not chmod the file writable; that bypasses Perforce tracking.";
function isReadOnlyFileMode(e) {
  return isPerforceModeEnabled() && (e & 128) === 0;
}
var Le = createKeyedSerialQueue();
function withPathLock(e, t) {
  return Le.run(e, t);
}
function applyLineEndings(e, t) {
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
async function writeTextContent(e, t, r, i) {
  let s = applyLineEndings(t, i);
  await writeFileAndFlush(e, s, { encoding: r });
  let o = Buffer.byteLength(s, r),
    c = await getFsSurface().stat(e);
  if (c.size !== o)
    throw new R(
      `Write verification failed: ${e} is ${c.size} bytes on disk, expected ${o}. The filesystem may have silently truncated the write (network drive / cloud sync).`,
      "writeTextContent: on-disk size mismatch after write",
    );
  return Math.floor(c.mtimeMs);
}
function detectFileEncodingSafe(e) {
  try {
    let t = getFsSurface(),
      { resolvedPath: r } = resolvePathInfo(t, e);
    return detectFileEncoding(r);
  } catch (t) {
    if (Rt(t) || Nz(t) || Bp(t))
      logForDebugging(`detectFileEncoding failed for expected reason: ${A(t)}`, {
        level: "debug",
      });
    else logError(t);
    return "utf8";
  }
}
function expandLeadingTabs(e) {
  if (!e.includes("\t")) return e;
  return e.replace(/^\t+/gm, (t) => "  ".repeat(t.length));
}
function ve(e) {
  let t = e ? resolvePath(e) : void 0,
    r = t ? relative(getCwd(), t) : void 0;
  return { absolutePath: t, relativePath: r };
}
function formatPathForDisplay(e) {
  let { relativePath: t } = ve(e);
  if (t && !t.startsWith("..")) return t;
  let r = homedir();
  if (e.startsWith(r + sep)) return "~" + e.slice(r.length);
  return e;
}
async function findSimilarFile(e) {
  let t = getFsSurface();
  try {
    let r = dirname(e),
      i = basename(e, extname(e)),
      c = (await t.readdir(r)).filter(
        (u) => basename(u.name, extname(u.name)) === i && join(r, u.name) !== e,
      )[0];
    if (c) return c.name;
    return;
  } catch (r) {
    if (!W(r)) logForDebugging(`findSimilarFile failed for ${e}: ${r}`, { level: "error" });
    return;
  }
}
var CWD_NOTE_PREFIX = "Note: your current working directory is";
async function getSuggestedPathOutsideCwd(e) {
  let t = getCwd(),
    r = dirname(t),
    i = e;
  try {
    let S = await realpath(dirname(e));
    i = join(S, basename(e));
  } catch {}
  let s = r === sep ? sep : r + sep,
    c = getCurrentPlatform() === "windows" ? (S) => S.toLowerCase() : (S) => S,
    u = c(i);
  if (!u.startsWith(c(s)) || u.startsWith(c(t + sep)) || u === c(t)) return;
  let w = relative(r, i),
    p = join(t, w);
  try {
    return (await stat(p), p);
  } catch {
    return;
  }
}
function addLineNumbers({ content: e, startLine: t, tabAwareSeparator: r = !1 }) {
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
    (s.push(formatNumberedLine(e.slice(c, u), o++, i)),
      (c = u + 1),
      (u = e.indexOf(
        `
`,
        c,
      )));
  return (
    s.push(formatNumberedLine(e.slice(c), o, i)),
    s.join(`
`)
  );
}
function formatNumberedLine(e, t, r) {
  let i = e.endsWith("\r") ? e.slice(0, -1) : e;
  return `${t}${r}${i}`;
}
function stripLineNumberPrefix(e) {
  return e.match(/^\s*\d+[\u2192\t:](.*)$/)?.[1] ?? e;
}
function le(e, t) {
  if (e instanceof Error && !(e instanceof SymlinkWriteRefusedError) && e !== t)
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
function writeFileSyncAndFlush(e, t, r = { encoding: "utf-8" }) {
  let i = getFsSurface(),
    s = r.allowSymlink ? 0 : constants.O_NOFOLLOW,
    o = e,
    c,
    u = !1;
  if (r.allowSymlink)
    try {
      let d = i.readlinkSync(e);
      ((o = isAbsolute(d) ? d : resolve(resolvePathInfo(i, dirname(e)).resolvedPath, d)),
        logForDebugging(`Writing through symlink: ${e} -> ${o}`));
    } catch {}
  else {
    if (r.checkParentDir)
      try {
        closeSync(openSync(dirname(e), constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW));
      } catch (d) {
        let b = A(d);
        if (b === "ELOOP" || b === "ENOTDIR")
          throw new SymlinkWriteRefusedError(`Refusing to write into symlinked directory: ${dirname(e)}`);
      }
    try {
      let d = i.lstatSync(e);
      if (d.isSymbolicLink())
        throw new SymlinkWriteRefusedError(
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
  if (u && c !== void 0) logForDebugging(`Preserving file permissions: ${c.toString(8)}`);
  else if (r.mode !== void 0)
    ((c = r.mode), logForDebugging(`Setting permissions for new file: ${c.toString(8)}`));
  try {
    logForDebugging(`Writing to temp file: ${p}`);
    let d = openSync(
        p,
        constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | s,
        !u && r.mode !== void 0 ? r.mode : void 0,
      ),
      b = !1,
      v;
    try {
      if (dirname(p) !== dirname(o)) k(r.stagingDir);
      if ((writeFileSync(d, t, { encoding: r.encoding }), u && c !== void 0))
        try {
          (fchmodSync(d, c), logForDebugging("Applied original permissions to temp file"));
        } catch (g) {
          if (!isUnsupportedFsOperationError(g)) throw g;
          logForDebugging(`fchmod unsupported on this filesystem: ${g}`);
        }
      try {
        fsyncSync(d);
      } catch (g) {
        if (!isUnsupportedFsOperationError(g)) throw g;
        logForDebugging(`fsync unsupported on this filesystem: ${g}`);
      }
      S = !0;
    } catch (g) {
      ((b = !0), (v = g));
    }
    try {
      closeSync(d);
    } catch (g) {
      if (!b) throw g;
      logForDebugging(`closeSync also failed after temp write error: ${g}`, {
        level: "error",
      });
    }
    if (b) throw v;
    if (
      (logForDebugging(`Temp file written successfully, size: ${t.length} bytes`),
      dirname(p) !== dirname(o))
    )
      k(r.stagingDir);
    (logForDebugging(`Renaming ${p} to ${o}`),
      renameWithRetrySync(p, o, (g, E) => i.renameSync(g, E)),
      logForDebugging(`File ${o} written atomically`));
  } catch (d) {
    logForDebugging(`Failed to write file atomically: ${d}`, { level: "error" });
    let b = A(d);
    if ((S && b !== void 0 && RENAME_FALLBACK_ERRNOS.has(b)) || (!S && u && b === "EACCES")) {
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
          logForDebugging(`Failed to clean up temp file: ${I}`);
        }
        if (A(y) === "ELOOP")
          throw new SymlinkWriteRefusedError(`Refusing to write through symlink: ${o} (O_NOFOLLOW)`);
        throw d;
      }
      try {
        writeFileSync(E, t, { encoding: r.encoding });
        try {
          fsyncSync(E);
        } catch (y) {
          if (!isUnsupportedFsOperationError(y)) throw y;
          logForDebugging(`fsync unsupported on this filesystem: ${y}`);
        }
        closeSync(E);
        try {
          i.unlinkSync(p);
        } catch (y) {
          logForDebugging(`Failed to clean up temp file: ${y}`);
        }
        logForDebugging(`File ${o} written via in-place fallback`);
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
      logForDebugging(`Failed to clean up temp file: ${E}`);
    }
    throw d;
  }
}
async function writeFileAndFlush(e, t, r = { encoding: "utf-8" }) {
  let i = getFsSurface(),
    s = r.allowSymlink ? 0 : constants.O_NOFOLLOW,
    o = e,
    c,
    u = !1;
  if (r.allowSymlink)
    try {
      let d = await readlink(e);
      ((o = isAbsolute(d) ? d : resolve(await realpath(dirname(e)), d)),
        logForDebugging(`Writing through symlink: ${e} -> ${o}`));
    } catch {}
  else {
    if (r.checkParentDir)
      try {
        await (
          await open(dirname(e), constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW)
        ).close();
      } catch (d) {
        let b = A(d);
        if (b === "ELOOP" || b === "ENOTDIR")
          throw new SymlinkWriteRefusedError(`Refusing to write into symlinked directory: ${dirname(e)}`);
      }
    try {
      let d = await lstat(e);
      if (d.isSymbolicLink())
        throw new SymlinkWriteRefusedError(
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
  if (u && c !== void 0) logForDebugging(`Preserving file permissions: ${c.toString(8)}`);
  else if (r.mode !== void 0)
    ((c = r.mode), logForDebugging(`Setting permissions for new file: ${c.toString(8)}`));
  try {
    logForDebugging(`Writing to temp file: ${p}`);
    let d = await open(
        p,
        constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | s,
        !u && r.mode !== void 0 ? r.mode : void 0,
      ),
      b = !1,
      v;
    try {
      if (dirname(p) !== dirname(o)) k(r.stagingDir);
      if ((await d.writeFile(t, { encoding: r.encoding }), u && c !== void 0))
        try {
          (await d.chmod(c), logForDebugging("Applied original permissions to temp file"));
        } catch (g) {
          if (!isUnsupportedFsOperationError(g)) throw g;
          logForDebugging(`fchmod unsupported on this filesystem: ${g}`);
        }
      try {
        await d.sync();
      } catch (g) {
        if (!isUnsupportedFsOperationError(g)) throw g;
        logForDebugging(`fsync unsupported on this filesystem: ${g}`);
      }
      S = !0;
    } catch (g) {
      ((b = !0), (v = g));
    }
    try {
      await d.close();
    } catch (g) {
      if (!b) throw g;
      logForDebugging(`close also failed after temp write error: ${g}`, { level: "error" });
    }
    if (b) throw v;
    if (
      (logForDebugging(`Temp file written successfully, size: ${t.length} bytes`),
      dirname(p) !== dirname(o))
    )
      k(r.stagingDir);
    (logForDebugging(`Renaming ${p} to ${o}`),
      await renameWithRetry(p, o, (g, E) => i.rename(g, E)),
      logForDebugging(`File ${o} written atomically`));
  } catch (d) {
    logForDebugging(`Failed to write file atomically: ${d}`, { level: "error" });
    let b = A(d);
    if ((S && b !== void 0 && RENAME_FALLBACK_ERRNOS.has(b)) || (!S && u && b === "EACCES")) {
      let E;
      try {
        E = await open(
          o,
          constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | s,
          !u && r.mode !== void 0 ? r.mode : void 0,
        );
      } catch (y) {
        try {
          await i.unlink(p);
        } catch (I) {
          logForDebugging(`Failed to clean up temp file: ${I}`);
        }
        if (A(y) === "ELOOP")
          throw new SymlinkWriteRefusedError(`Refusing to write through symlink: ${o} (O_NOFOLLOW)`);
        throw d;
      }
      try {
        await E.writeFile(t, { encoding: r.encoding });
        try {
          await E.sync();
        } catch (y) {
          if (!isUnsupportedFsOperationError(y)) throw y;
          logForDebugging(`fsync unsupported on this filesystem: ${y}`);
        }
        await E.close();
        try {
          await i.unlink(p);
        } catch (y) {
          logForDebugging(`Failed to clean up temp file: ${y}`);
        }
        logForDebugging(`File ${o} written via in-place fallback`);
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
      logForDebugging(`Failed to clean up temp file: ${E}`);
    }
    throw d;
  }
}
var Pe = new Set(["Public", "Default", "Default User", "All Users"]);
async function getDesktopPath() {
  let e = getCurrentPlatform(),
    t = homedir(),
    r = getFsSurface();
  if (e === "macos") return join(t, "Desktop");
  if (e === "windows") {
    let s = a.USERPROFILE ? a.USERPROFILE.replaceAll("\\", "/") : null;
    if (s) {
      let c = `/mnt/c${s.replace(/^[A-Z]:/, "")}/Desktop`;
      if (await pathExists(c)) return c;
    }
    try {
      let c = await r.readdir("/mnt/c/Users");
      for (let u of c) {
        if (Pe.has(u.name)) continue;
        let w = join("/mnt/c/Users", u.name, "Desktop");
        if (await pathExists(w)) return w;
      }
    } catch (o) {
      logForDebugging(`Failed to enumerate /mnt/c/Users for Windows desktop path: ${o}`, {
        level: "error",
      });
    }
  }
  let i = join(t, "Desktop");
  if (await pathExists(i)) return i;
  return t;
}
async function isFileSizeWithinLimit(e, t = DEFAULT_MAX_FILE_READ_BYTES) {
  try {
    return (await getFsSurface().stat(e)).size <= t;
  } catch {
    return !1;
  }
}
function canonicalizePathForComparison(e) {
  let t = getCurrentPlatform() === "windows",
    r = normalize(e),
    i = t ? /[\\/]+$/ : /\/+$/,
    s = r.length > parse(r).root.length ? r.replace(i, "") : r;
  return t ? s.replaceAll("/", "\\").toLowerCase() : s;
}
function isSamePath(e, t) {
  return canonicalizePathForComparison(e) === canonicalizePathForComparison(t);
}
export {
  getShellConfig,
  setupGitBashShellEnv,
  getGitBashPath,
  prependDirectoryToPathEnv,
  wrapShellScriptWithBash,
  convertWindowsPathToUnix,
  convertUnixPathToWindows,
  resolvePath,
  toCwdRelativePath,
  getContainingDirectory,
  containsPathTraversal,
  formatPathWithTilde,
  toForwardSlashPath,
  isJupyterNotebookPath,
  ATOMIC_WRITE_STAGING_DIR_NAME,
  recordFileIdentity,
  SymlinkWriteRefusedError,
  SymlinkReadRefusedError,
  assertDirChainReal,
  throwStagingDirTamperedError,
  takeApprovedPathForWrite,
  takeApprovedPathForRead,
  pathExists,
  DEFAULT_MAX_FILE_READ_BYTES,
  readBoundedSync,
  readInheritedFdSync,
  isSocketFd,
  getFileMtimeMsSync,
  getFileMtimeMs,
  isPerforceModeEnabled,
  PERFORCE_READ_ONLY_MESSAGE,
  isReadOnlyFileMode,
  withPathLock,
  applyLineEndings,
  writeTextContent,
  detectFileEncodingSafe,
  expandLeadingTabs,
  formatPathForDisplay,
  findSimilarFile,
  CWD_NOTE_PREFIX,
  getSuggestedPathOutsideCwd,
  addLineNumbers,
  formatNumberedLine,
  stripLineNumberPrefix,
  writeFileSyncAndFlush,
  writeFileAndFlush,
  getDesktopPath,
  isFileSizeWithinLimit,
  canonicalizePathForComparison,
  isSamePath,
};
