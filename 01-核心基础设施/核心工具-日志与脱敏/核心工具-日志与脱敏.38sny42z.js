// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, bi, K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import {
  Ie,
  zn,
  An,
  my,
  pl,
  UL,
  $xe,
  C_e,
  XR,
  Dr,
  li,
  Pje,
  $m,
  hZ,
  vS,
  Oi,
  Xo,
  BL,
  yZ,
} from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../核心工具-路径与平台/chunk-h62vxw7j.js";
import { A, W, Nz } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { getClaudeConfigDir } from "../设置-配置/chunk-5ndhfaq9.js";
import { writeToStderr } from "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import { capitalize, beforeFirst } from "../核心工具-字符串与文本/string-utils.js";
import {
  appendFile,
  mkdir,
  rename,
  stat,
  symlink,
  unlink,
} from "fs/promises";
import { dirname, isAbsolute, join, resolve } from "path";
function createInvalidArgumentError(e, t) {
  return {
    code: "InvalidArgument",
    argument: e,
    ...(t !== void 0 && { reason: t }),
  };
}
var OTHER_NAMES_TELEMETRY_CODE = "OtherNames";
var LEAF_MOVED_TELEMETRY_CODE = "LeafMoved",
  HARDENING_UNAVAILABLE_TELEMETRY_CODE = "HardeningUnavailable",
  REMOTE_LINK_TELEMETRY_CODE = "RemoteLink",
  ASIDE_STRANDED_TELEMETRY_CODE = "AsideStranded";
var UNSUPPORTED_TELEMETRY_CODE = "Unsupported";
function isUnsupportedFailure(e) {
  return isStorageError(e) && e.code === "Failed" && e.telemetryCode === UNSUPPORTED_TELEMETRY_CODE;
}
var He = "ByteViewUnsupported";
function isByteViewUnsupportedFailure(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === He;
}
var Be = "StoreFenced";
function isStoreFencedFailure(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === Be;
}
var SOURCE_NOT_REGULAR_TELEMETRY_CODE = "SourceNotRegular",
  SOURCE_TOO_LARGE_TELEMETRY_CODE = "SourceTooLarge",
  SOURCE_SHARED_TELEMETRY_CODE = "SourceShared",
  SOURCE_OUTSIDE_TELEMETRY_CODE = "SourceOutside";
var Ue = new Set([
  "InvalidArgument",
  "NotFound",
  "AlreadyExists",
  "PreconditionFailed",
  "LeaseHeld",
  "Unavailable",
  "Failed",
  "ScopeNotFound",
]);
function isStorageError(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "code" in e &&
    typeof e.code === "string" &&
    Ue.has(e.code)
  );
}
var ABSENT_PARENT_TELEMETRY_CODE = "AbsentParent";
function isAbsentParentFailure(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === ABSENT_PARENT_TELEMETRY_CODE;
}
function getTelemetryCode(e) {
  if (isAbsentParentFailure(e)) return "ENOENT";
  return "telemetryCode" in e ? e.telemetryCode : void 0;
}
var TOO_LARGE_TELEMETRY_CODE = "TooLarge";
function describeStorageError(e) {
  return (
    e.code +
    ("failureClass" in e ? ` ${e.failureClass}` : "") +
    ("telemetryCode" in e && e.telemetryCode ? ` ${e.telemetryCode}` : "") +
    ("cause" in e && e.cause ? `: ${Me(e.cause)}` : "")
  );
}
function Me(e) {
  return e instanceof Error ? e.message : String(e);
}
function createOkResult(e) {
  return { ok: !0, value: e };
}
function createErrorResult(e) {
  return { ok: !1, error: e };
}
class ee extends Error {
  constructor(e) {
    super("Result was an error (see .error)");
    ((this.name = "ResultError"),
      Object.defineProperty(this, "error", { value: e, enumerable: !1 }));
  }
}
function unwrapResult(e) {
  if (e.ok) return e.value;
  throw new ee(e.error);
}
var pathSpaces = {
  home: (e) => ({ space: "home", path: e }),
  workspace: (e) => ({ space: "workspace", path: e }),
  system: (e) => ({ space: "system", path: e }),
  userNamed: (e) => ({ space: "userNamed", path: e }),
};
var P = globalThis.process?.getBuiltinModule?.("async_hooks"),
  te = P !== void 0,
  C = P
    ? new P.AsyncLocalStorage()
    : {
        run: (e, t) => t(),
        getStore: () => {
          return;
        },
      };
function T({
  writeBatch: e,
  sizeOf: t,
  flushIntervalMs: r = 1000,
  maxBufferSize: i = 100,
  maxBufferBytes: o = 1 / 0,
  immediateMode: s = !1,
}) {
  let a = [],
    u = 0,
    d = null,
    c = null;
  function p() {
    if (d) (clearTimeout(d), (d = null));
  }
  function g(y) {
    try {
      e(y);
    } catch {}
  }
  function m() {
    if (c) (g(c), (c = null));
    if (a.length === 0) return;
    (g(a), (a = []), (u = 0), p());
  }
  function E() {
    if (!d) d = setTimeout(m, r);
  }
  function S() {
    if (c) {
      (c.push(...a), (a = []), (u = 0), p());
      return;
    }
    let y = a;
    ((a = []),
      (u = 0),
      p(),
      (c = y),
      setImmediate(() => {
        let h = c;
        if (((c = null), h)) g(h);
      }));
  }
  return {
    write(y) {
      if (s) {
        g([y]);
        return;
      }
      if ((a.push(y), (u += t(y)), E(), a.length >= i || u >= o)) S();
    },
    flush: m,
    dispose() {
      m();
    },
  };
}
function createStringBatchWriter({
  writeFn: e,
  flushIntervalMs: t,
  maxBufferSize: r,
  maxBufferBytes: i,
  immediateMode: o,
}) {
  return T({
    writeBatch: (s) => e(s.join("")),
    sizeOf: (s) => s.length,
    flushIntervalMs: t,
    maxBufferSize: r,
    maxBufferBytes: i,
    immediateMode: o,
  });
}
function $e(e) {
  if (typeof e === "function") return e;
  if (Symbol.asyncDispose in e) return () => e[Symbol.asyncDispose]();
  return () => e[Symbol.dispose]();
}
class N {
  #e = new Set();
  #t = !1;
  get drainStarted() {
    return this.#t;
  }
  register(e) {
    let t = $e(e);
    this.#e.add(t);
    let r = () => {
      this.#e.delete(t);
    };
    return Object.assign(r, { [Symbol.dispose]: r });
  }
  async drain() {
    this.#t = !0;
    let e = Array.from(this.#e);
    this.#e.clear();
    let r = (await Promise.allSettled(e.map(async (i) => i()))).find(
      (i) => i.status === "rejected",
    );
    if (r !== void 0) throw r.reason;
  }
  async [Symbol.asyncDispose]() {
    await this.drain();
  }
  get sizeForTesting() {
    return this.#e.size;
  }
}
class CleanupRegistries {
  cleanup = new N();
  preExitFlush = new N();
}
var cleanupRegistries = new j(() => new CleanupRegistries());
function R() {
  return bi(cleanupRegistries);
}
var CLEANUP_DRAIN_TIMEOUT_MS = 2000;
function registerCleanup(e) {
  return R().cleanup.register(e);
}
async function drainCleanup() {
  await R().cleanup.drain();
}
function isCleanupDrainStarted() {
  return R().cleanup.drainStarted;
}
function registerPreExitFlush(e) {
  return R().preExitFlush.register(e);
}
async function drainPreExitFlush() {
  await R().preExitFlush.drain();
}
class ie {
  parsed = new Map();
  lookup(e) {
    return this.parsed.get(e);
  }
  remember(e, t) {
    this.parsed.set(e, t);
  }
  reset() {
    this.parsed.clear();
  }
}
var re = new ie();
function oe(e) {
  let t = re.lookup(e);
  if (t !== void 0) return t;
  let r = Ge(e);
  return (re.remember(e, r), r);
}
function Ge(e) {
  if (!e || e.trim() === "") return null;
  let t = e
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (t.length === 0) return null;
  let r = t.some((s) => s.startsWith("!")),
    i = t.some((s) => !s.startsWith("!"));
  if (r && i) return null;
  let o = t.map((s) => s.replace(/^!/, "").toLowerCase());
  return { include: r ? [] : o, exclude: r ? o : [], isExclusive: r };
}
function Ve(e) {
  let t = [],
    r = e.match(/^MCP server ["']([^"']+)["']/);
  if (r && r[1]) (t.push("mcp"), t.push(r[1].toLowerCase()));
  else {
    let s = e.match(/^([^:[]+):/);
    if (s && s[1]) t.push(s[1].trim().toLowerCase());
  }
  let i = e.match(/^\[([^\]]+)]/);
  if (i && i[1]) t.push(i[1].trim().toLowerCase());
  if (e.toLowerCase().includes("1p event:")) t.push("1p");
  let o = e.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
  if (o && o[1]) {
    let s = o[1].trim().toLowerCase();
    if (s.length < 30 && !s.includes(" ")) t.push(s);
  }
  return Array.from(new Set(t));
}
function je(e, t) {
  if (!t) return !0;
  if (e.length === 0) return !1;
  if (t.isExclusive) return !e.some((r) => t.exclude.includes(r));
  else return e.some((r) => t.include.includes(r));
}
function se(e, t) {
  if (!t) return !0;
  let r = Ve(e);
  return je(r, t);
}
import * as l from "fs";
import {
  chmod,
  copyFile,
  link,
  lstat,
  open,
  readdir,
  readFile,
  readlink,
  realpath,
  rmdir,
  rm,
} from "fs/promises";
import { homedir } from "os";
import * as f from "path";
import { writeFileSync } from "fs";
var an = (() => {
  let e = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
  if (e !== void 0) {
    let t = Number(e);
    if (!Number.isNaN(t) && t >= 0) return t;
  }
  return 1 / 0;
})();
var Ze = { [Symbol.dispose]() {} };
function Je() {
  return Ze;
}
var startSlowOperationSpan = Je;
function jsonStringify(e, t, r) {
  using i = startSlowOperationSpan`JSON.stringify(${e})`;
  return JSON.stringify(e, t, r);
}
function jsonStringifyLine(e) {
  return (
    JSON.stringify(e) +
    `
`
  );
}
function jsonStringifyUntraced(e) {
  return JSON.stringify(e);
}
function jsonlJoin(e) {
  using t = startSlowOperationSpan`jsonlJoin(${e.length})`;
  let r = "";
  for (let i = 0; i < e.length; i++)
    r +=
      JSON.stringify(e[i]) +
      `
`;
  return r;
}
var jsonParse = (e, t) => {
  using r = startSlowOperationSpan`JSON.parse(${e})`;
  return typeof t > "u" ? JSON.parse(e) : JSON.parse(e, t);
};
function jsonParseUntraced(e) {
  return JSON.parse(e);
}
function deepClone(e, t) {
  using r = startSlowOperationSpan`structuredClone(${e})`;
  return structuredClone(e, t);
}
function writeFileSyncTraced(e, t, r) {
  using i = startSlowOperationSpan`fs.writeFileSync(${e}, ${t})`;
  writeFileSync(e, t, r);
}
var ct = "\u2192";
function lt() {
  return l.constants.O_NOFOLLOW | l.constants.O_NONBLOCK;
}
var H = /\/+/;
function ce(e) {
  let t = "";
  for (let i of e.split(/([\\/]+)/)) {
    if (i === "." || i === "..") break;
    t += i;
  }
  let r = t.replace(/(?<=[^\\/])[\\/]+$/, "");
  return r === "" ? e : r;
}
function gt(e) {
  if (e.startsWith("\\\\")) return ce(e);
  let t = e.replace(/^\/+/, "/"),
    r = Pje(t);
  if (r !== null) return r;
  return ce(e);
}
var pt = gt;
function le(e, t, r) {
  let i = pl(e);
  if (t.length === 0 || i || t.some((o) => o === "." || o === "..")) {
    if (r !== void 0 && (t.length > 0 || i)) r(f.join(e, ...t));
    return i ? pt(e) : e;
  }
  return f.join(e, ...t);
}
var UNVERIFIED_ANCESTRY_SENTINEL = "\x00unverified-ancestry";
function fe(e, t, r = !1) {
  if (t?.unreadableAncestry !== "unverified") return;
  let i =
    e !== void 0 && typeof e === "object" && "errno" in e ? e.errno : void 0;
  if (i === "ENOENT" || i === "ENOTDIR") return;
  if (i === "ENAMETOOLONG" && !r) return;
  return UNVERIFIED_ANCESTRY_SENTINEL;
}
function B(e) {
  return hZ(e);
}
function D(e, t) {
  return t === void 0 || t.every((r) => XR(e, r));
}
function F(e, t) {
  return t === void 0 || t.every((r) => $xe(e, r));
}
function pe(e) {
  if (e?.anchors !== void 0 && e.anchors.length > 0) return e.anchors;
  return e?.anchor !== void 0 ? [e.anchor] : void 0;
}
function hasNetworkPathSpelling(e) {
  return my(e) || Xo(e) || li(e) || $m(e) || resolveSymlinkAncestrySync(fsSurface, e) !== void 0;
}
async function hasNetworkPathSpellingAsync(e) {
  return my(e) || Xo(e) || li(e) || $m(e) || (await resolveSymlinkAncestry(fsSurface, e)) !== void 0;
}
function hasUnverifiableAncestrySync(e, t = fsSurface) {
  return (
    my(e) ||
    Xo(e) ||
    li(e) ||
    $m(e) ||
    resolveSymlinkAncestrySync(t, e, { surfaceNetworkRaw: !0, unreadableAncestry: "unverified" }) !==
      void 0
  );
}
async function hasUnverifiableAncestry(e, t = fsSurface) {
  return (
    my(e) ||
    Xo(e) ||
    li(e) ||
    $m(e) ||
    (await resolveSymlinkAncestry(t, e, {
      surfaceNetworkRaw: !0,
      unreadableAncestry: "unverified",
    })) !== void 0
  );
}
async function hasUnverifiableAncestryWithAnchor(e, t, r = fsSurface) {
  if (my(e)) return !0;
  if (Xo(e)) return !0;
  if (li(e)) {
    let i = C_e(e);
    if (i === null || t === null || i !== C_e(t)) return !0;
  }
  if ($m(e)) return !0;
  return (
    (await resolveSymlinkAncestry(r, e, {
      ...(t === null ? {} : { anchor: t }),
      unreadableAncestry: "unverified",
      surfaceNetworkRaw: !0,
    })) !== void 0
  );
}
function resolveSymlinkAncestrySync(e, t, r) {
  return ht(he(t, r), (i) => {
    if (i.kind === "lstat") return e.lstatSync(i.path);
    if (i.kind === "opendirNofollow")
      return (e.openDirNoFollowSync(i.path), "ok");
    return e.readlinkSync(i.path);
  });
}
function resolveSymlinkAncestry(e, t, r) {
  return mt(he(t, r), async (i) => {
    if (i.kind === "lstat") return e.lstat(i.path);
    if (i.kind === "opendirNofollow")
      return (await e.openDirNoFollow(i.path), "ok");
    return e.readlink(i.path);
  });
}
function ht(e, t) {
  let r;
  for (;;) {
    let i = e.next(r);
    if (i.done) return i.value;
    try {
      r = t(i.value);
    } catch (o) {
      r = { errno: A(o) };
    }
  }
}
async function mt(e, t) {
  let r;
  for (;;) {
    let i = e.next(r);
    if (i.done) return i.value;
    try {
      r = await t(i.value);
    } catch (o) {
      r = { errno: A(o) };
    }
  }
}
function* he(e, t) {
  let r = pe(t);
  if ((An(e) && !Oi(e) && F(e, r)) || (Dr(e) && D(e, r))) return;
  if (B(e)) return e;
  let i = f.resolve(e),
    o = f.parse(i).root,
    s = o,
    a = i.slice(o.length).split(H).filter(Boolean),
    u = 0,
    d,
    c = 64;
  while (a.length > 0 && u < c) {
    let p = f.join(s, a[0]);
    if ((Dr(p) && D(p, r)) || B(p))
      return le(p, a.slice(1), t?.onCollapsedLanding);
    let g = yield { kind: "lstat", path: p };
    if (g === void 0 || typeof g === "string" || "errno" in g) {
      if (
        typeof g === "object" &&
        "errno" in g &&
        g.errno !== void 0 &&
        g.errno !== "ENOENT" &&
        g.errno !== "ENOTDIR" &&
        g.errno !== "ENAMETOOLONG"
      ) {
        if (typeof (yield { kind: "opendirNofollow", path: p }) === "string") {
          (a.shift(), (s = p));
          continue;
        }
      }
      return fe(g, t, u > 0);
    }
    if (!g.isSymbolicLink()) {
      (a.shift(), (s = p));
      continue;
    }
    u++;
    let E = p + "\x00" + a.join("\x00");
    if ((d ??= new Set()).has(E)) return;
    d.add(E);
    let S = yield { kind: "readlink", path: p };
    if (typeof S !== "string") return fe(S, t, u > 0);
    let y = S;
    if (!f.isAbsolute(y)) {
      (a.shift(), (a = [...y.split(H).filter(Boolean), ...a]));
      continue;
    }
    let h = y;
    if ((An(h) && !Oi(h) && F(h, r)) || (Dr(h) && D(h, r)) || B(h))
      return (a.shift(), le(h, a, t?.onCollapsedLanding));
    if (
      t?.surfaceNetworkRaw === !0 &&
      pl(h) &&
      (An(h) || li(h) || hZ(h) || $m(h))
    )
      return (a.shift(), a.length === 0 ? h : h + f.sep + a.join(f.sep));
    a.shift();
    let q = f.parse(h).root || f.sep;
    ((s = q), (a = [...h.slice(q.length).split(H).filter(Boolean), ...a]));
  }
  if (a.length > 0 && t?.surfaceNetworkRaw) return UNVERIFIED_ANCESTRY_SENTINEL;
  if (u > 0 && $m(s)) return s;
  return;
}
function resolvePathInfo(e, t) {
  if ((An(t) && !Oi(t)) || Dr(t) || vS(t))
    return { resolvedPath: t, isSymlink: !1, isCanonical: !1 };
  let r = resolveSymlinkAncestrySync(e, t);
  if (r !== void 0) return { resolvedPath: r, isSymlink: !0, isCanonical: !1 };
  try {
    let i = e.realpathSync(t);
    return { resolvedPath: i, isSymlink: i !== t, isCanonical: !0 };
  } catch (i) {
    return { resolvedPath: t, isSymlink: !1, isCanonical: !1 };
  }
}
function testAndSetResolvedPath(e, t, r) {
  let { resolvedPath: i } = resolvePathInfo(e, t);
  if (r.has(i)) return !0;
  return (r.add(i), !1);
}
var U = /(^|[\\/])\.\.([\\/]|$)/;
function yt(e, t = "darwin") {
  let r = e.replace(
    t === "win32" ? /[\\/]\.(?=[\\/]|$)/g : /\/\.(?=\/|$)/g,
    "",
  );
  if (r === "") return e[0];
  if (t === "win32" && /^[A-Za-z]:$/.test(r)) return r + e[2];
  return r;
}
function resolveSymlinkTargetSync(e, t, r) {
  let i = pe(r);
  if ((An(t) && !Oi(t)) || Dr(t) || vS(t)) {
    if (i !== void 0 && ((Dr(t) && !D(t, i)) || (An(t) && !Oi(t) && !F(t, i))))
      return resolveSymlinkAncestrySync(e, t, { anchors: i, surfaceNetworkRaw: r?.surfaceNetworkRaw });
    return t;
  }
  let o = resolveSymlinkAncestrySync(
    e,
    t,
    r?.surfaceNetworkRaw === !0
      ? { surfaceNetworkRaw: !0, anchors: i }
      : void 0,
  );
  if (o !== void 0) return o;
  let s = t,
    a = [],
    u = r?.surfaceDotDotTargets === !0,
    d = (c) =>
      a.length === 0
        ? c
        : u && U.test(c)
          ? [c, ...a].join(f.sep)
          : f.join(c, ...a);
  while (s !== f.dirname(s)) {
    let c, p;
    try {
      c = e.readlinkSync(s);
    } catch (g) {
      p = A(g);
    }
    if (c !== void 0) {
      if (u && U.test(c))
        return d(f.isAbsolute(c) ? c : f.dirname(s) + f.sep + c);
      let g = f.isAbsolute(c) ? c : f.resolve(f.dirname(s), c);
      if (
        (An(g) && !Oi(g)) ||
        Dr(g) ||
        vS(g) ||
        (r?.surfaceNetworkRaw === !0 && pl(g))
      )
        return r?.surfaceNetworkRaw === !0 && a.length > 0
          ? g + f.sep + a.join(f.sep)
          : d(g);
      try {
        let m = e.realpathSync(s);
        return d(m);
      } catch {
        let m = s,
          E = 0,
          S = 64;
        while (E < S) {
          let y;
          try {
            y = e.readlinkSync(m);
          } catch {
            break;
          }
          if (u && U.test(y)) {
            m = f.isAbsolute(y) ? y : f.dirname(m) + f.sep + y;
            break;
          }
          let h = f.isAbsolute(y)
            ? u
              ? yt(y)
              : y
            : f.resolve(f.dirname(m), y);
          if (
            (An(h) && !Oi(h) && F(h, i)) ||
            (Dr(h) && D(h, i)) ||
            vS(h) ||
            (r?.surfaceNetworkRaw === !0 && pl(h))
          ) {
            m = h;
            break;
          }
          let L;
          try {
            L = e.lstatSync(h);
          } catch {
            m = h;
            break;
          }
          if (!L.isSymbolicLink()) {
            m = h;
            break;
          }
          ((m = h), E++);
        }
        if (E >= S && r?.surfaceNetworkRaw === !0) return UNVERIFIED_ANCESTRY_SENTINEL;
        return r?.surfaceNetworkRaw === !0 &&
          a.length > 0 &&
          ((An(m) && !Oi(m)) || Dr(m) || vS(m) || pl(m))
          ? m + f.sep + a.join(f.sep)
          : d(m);
      }
    }
    if (p === "ENOENT") {
      (a.unshift(f.basename(s)), (s = f.dirname(s)));
      continue;
    }
    try {
      let g = e.realpathSync(s);
      if (g !== s) return d(g);
    } catch (g) {
      if (u) throw g;
    }
    return;
  }
  return;
}
function ge(e) {
  return (An(e) && !Oi(e)) || li(e) || UL(e);
}
function getRealPath(e) {
  return me(e, !1) ?? e;
}
function tryGetRealPath(e) {
  return me(e, !0);
}
function me(e, t) {
  if (ge(e)) return e;
  let r = e,
    i = "";
  for (;;) {
    if (!pl(r)) {
      let s = yZ(r);
      if (s !== null) {
        let a = i === "" ? s : s.endsWith(f.sep) ? s + i : s + f.sep + i;
        if (ge(a)) return t ? a : e;
        return a;
      }
      if (t)
        try {
          return (l.lstatSync(r), null);
        } catch (a) {
          if (!W(a)) return null;
        }
    }
    let o = f.dirname(r);
    if (o === r) return e;
    ((i = i === "" ? f.basename(r) : f.basename(r) + f.sep + i), (r = o));
  }
}
function expandPathAliases(e) {
  let t = e;
  if (t === "~") t = homedir().normalize("NFC");
  else if (t.startsWith("~/")) t = f.join(homedir().normalize("NFC"), t.slice(2));
  let r = new Set(),
    i = getFsSurface();
  if ((r.add(t), (An(t) && !Oi(t)) || Dr(t) || vS(t))) return Array.from(r);
  let o = resolveSymlinkAncestrySync(i, t, { onCollapsedLanding: (u) => r.add(u) });
  if (o !== void 0) return (r.add(o), Array.from(r));
  try {
    let u = t,
      d = new Set(),
      c = 64;
    for (let p = 0; p < c; p++) {
      if (d.has(u)) break;
      d.add(u);
      let g, m;
      try {
        g = i.readlinkSync(u);
      } catch (S) {
        m = A(S);
      }
      if (g === void 0) {
        if (m === "ENOENT") {
          if (u === t) {
            let S = resolveSymlinkTargetSync(i, t);
            if (S !== void 0) r.add(S);
          }
        }
        break;
      }
      let E = f.isAbsolute(g) ? g : f.resolve(f.dirname(u), g);
      if ((r.add(E), (An(E) && !Oi(E)) || vS(E) || Dr(E))) return Array.from(r);
      u = E;
    }
  } catch {}
  let { resolvedPath: s, isSymlink: a } = resolvePathInfo(i, t);
  if (a && s !== t) r.add(s);
  return Array.from(r);
}
var fsSurface = {
  cwd() {
    return process.cwd();
  },
  existsSync(e) {
    using t = startSlowOperationSpan`fs.existsSync(${e})`;
    return l.existsSync(e);
  },
  async stat(e) {
    return stat(e);
  },
  async lstat(e) {
    return lstat(e);
  },
  async openDirNoFollow(e) {
    await (
      await open(e, l.constants.O_DIRECTORY | l.constants.O_NOFOLLOW)
    ).close();
  },
  openDirNoFollowSync(e) {
    let t = l.openSync(e, l.constants.O_DIRECTORY | l.constants.O_NOFOLLOW);
    l.closeSync(t);
  },
  async lstatBigint(e) {
    return lstat(e, { bigint: !0 });
  },
  async readdir(e) {
    return readdir(e, { withFileTypes: !0 });
  },
  async unlink(e) {
    return unlink(e);
  },
  async rmdir(e) {
    return rmdir(e);
  },
  async rm(e, t) {
    return rm(e, t);
  },
  async mkdir(e, t) {
    try {
      await mkdir(e, { recursive: !0, ...t });
    } catch (r) {
      if (A(r) !== "EEXIST") throw r;
    }
  },
  async readFile(e, t) {
    return readFile(e, { encoding: t.encoding });
  },
  async rename(e, t) {
    return rename(e, t);
  },
  async realpath(e) {
    return zn(await realpath(e));
  },
  async readlink(e) {
    return readlink(e);
  },
  async copyFile(e, t) {
    return copyFile(e, t);
  },
  async appendFile(e, t, r) {
    if (r?.mode !== void 0)
      try {
        let i = await open(e, "ax", r.mode);
        try {
          await i.appendFile(t);
        } finally {
          await i.close();
        }
        return;
      } catch (i) {
        if (A(i) !== "EEXIST") throw i;
      }
    return appendFile(e, t);
  },
  async symlink(e, t, r) {
    return symlink(e, t, r);
  },
  async link(e, t) {
    return link(e, t);
  },
  async chmod(e, t) {
    return chmod(e, t);
  },
  statSync(e) {
    using t = startSlowOperationSpan`fs.statSync(${e})`;
    return l.statSync(e);
  },
  lstatSync(e) {
    using t = startSlowOperationSpan`fs.lstatSync(${e})`;
    return l.lstatSync(e);
  },
  readFileSync(e, t) {
    using r = startSlowOperationSpan`fs.readFileSync(${e})`;
    return l.readFileSync(e, { encoding: t.encoding });
  },
  readSync(e, t) {
    using r = startSlowOperationSpan`fs.readSync(${e}, ${t.length} bytes)`;
    let i = void 0;
    try {
      i = l.openSync(e, "r");
      let o = [],
        s = 0;
      while (s < t.length) {
        let u = Buffer.allocUnsafe(Math.min(65536, t.length - s)),
          d = l.readSync(i, u, 0, u.length, s);
        if (d === 0) break;
        (o.push(u.subarray(0, d)), (s += d));
      }
      return { buffer: Buffer.concat(o, s), bytesRead: s };
    } finally {
      if (i !== void 0) l.closeSync(i);
    }
  },
  appendFileSync(e, t, r) {
    using i = startSlowOperationSpan`fs.appendFileSync(${e}, ${t.length} chars)`;
    if (r?.mode !== void 0)
      try {
        let o = l.openSync(e, "ax", r.mode);
        try {
          l.appendFileSync(o, t);
        } finally {
          l.closeSync(o);
        }
        return;
      } catch (o) {
        if (A(o) !== "EEXIST") throw o;
      }
    l.appendFileSync(e, t);
  },
  unlinkSync(e) {
    using t = startSlowOperationSpan`fs.unlinkSync(${e})`;
    l.unlinkSync(e);
  },
  renameSync(e, t) {
    using r = startSlowOperationSpan`fs.renameSync(${e} ${ct} ${t})`;
    l.renameSync(e, t);
  },
  readlinkSync(e) {
    using t = startSlowOperationSpan`fs.readlinkSync(${e})`;
    return l.readlinkSync(e);
  },
  realpathSync(e) {
    using t = startSlowOperationSpan`fs.realpathSync(${e})`;
    return zn(l.realpathSync(e));
  },
  mkdirSync(e, t) {
    using r = startSlowOperationSpan`fs.mkdirSync(${e})`;
    let i = { recursive: !0 };
    if (t?.mode !== void 0) i.mode = t.mode;
    try {
      l.mkdirSync(e, i);
    } catch (o) {
      if (A(o) !== "EEXIST") throw o;
    }
  },
  readdirSync(e) {
    using t = startSlowOperationSpan`fs.readdirSync(${e})`;
    return l.readdirSync(e, { withFileTypes: !0 });
  },
  rmSync(e, t) {
    using r = startSlowOperationSpan`fs.rmSync(${e})`;
    l.rmSync(e, t);
  },
  createWriteStream(e) {
    return l.createWriteStream(e);
  },
  async readFileBytes(e, t) {
    if (t === void 0) return readFile(e);
    let r = await open(
      e,
      l.constants.O_RDONLY |
        (l.constants.O_NONBLOCK ?? 0) |
        (l.constants.O_NOCTTY ?? 0),
    );
    try {
      if (!(await r.stat()).isFile()) return Buffer.alloc(0);
      return await readBytesFromFileHandle(r, t, "file");
    } finally {
      await r.close();
    }
  },
  async readFileFdGated(e, t) {
    try {
      let r = lt();
      if (r === 0) {
        if (!(await lstat(e)).isFile()) return null;
      }
      let i = await open(e, l.constants.O_RDONLY | r);
      try {
        let o = await i.stat();
        if (!o.isFile() || o.size > t) return null;
        let s = Number(o.size),
          a = Buffer.allocUnsafe(s),
          u = 0;
        while (u < s) {
          let { bytesRead: d } = await i.read(a, u, s - u, u);
          if (d === 0) break;
          u += d;
        }
        return {
          content: (u < s ? a.subarray(0, u) : a).toString("utf8"),
          stats: o,
        };
      } finally {
        await i.close();
      }
    } catch {
      return null;
    }
  },
};
function getFsSurface() {
  return fsSurface;
}
function changeWorkingDirectory(e) {
  process.chdir(e);
  try {
    process.cwd();
  } catch {}
}
async function readBytesAtOffset(e, t, r) {
  await using i = typeof e === "string" ? await open(e, "r") : null;
  let o = typeof e === "string" ? i : e,
    s = (await o.stat()).size;
  if (s <= t) return null;
  let a = Math.min(s - t, r),
    u = Buffer.allocUnsafe(a),
    d = 0;
  while (d < a) {
    let { bytesRead: c } = await o.read(u, d, a - d, t + d);
    if (c === 0) break;
    d += c;
  }
  return { content: u.toString("utf8", 0, d), bytesRead: d, bytesTotal: s };
}
async function readBytesFromFileHandle(e, t, r) {
  let i = r !== void 0 ? r === "file" : (await e.stat()).isFile(),
    o = [],
    s = 0;
  while (s < t) {
    let a = Buffer.allocUnsafe(Math.min(65536, t - s)),
      { bytesRead: u } = await e.read(a, 0, a.length, i ? s : null);
    if (u === 0) break;
    (o.push(a.subarray(0, u)), (s += u));
  }
  return Buffer.concat(o, s);
}
async function readTailBytes(e, t) {
  await using r = typeof e === "string" ? await open(e, "r") : null;
  let i = typeof e === "string" ? r : e,
    o = (await i.stat()).size;
  if (o === 0) return { content: "", bytesRead: 0, bytesTotal: 0 };
  let s = Math.max(0, o - t),
    a = o - s,
    u = Buffer.allocUnsafe(a),
    d = 0;
  while (d < a) {
    let { bytesRead: c } = await i.read(u, d, a - d, s + d);
    if (c === 0) break;
    d += c;
  }
  return { content: u.toString("utf8", 0, d), bytesRead: d, bytesTotal: o };
}
async function* streamFileLines(e, t = 65536) {
  let r = await open(e, "r"),
    i = Buffer.alloc(t),
    o = 0,
    s = [],
    a = 0;
  try {
    while (!0) {
      let { bytesRead: u } = await r.read(i, 0, t, o);
      if (u === 0) break;
      o += u;
      let d = i.subarray(0, u),
        c = 0;
      while (c < u) {
        let p = d.indexOf(10, c);
        if (p === -1) {
          (s.push(Buffer.from(d.subarray(c))), (a += u - c));
          break;
        }
        if (a === 0) yield d.subarray(c, p);
        else
          (yield Buffer.concat([...s, d.subarray(c, p)], a + (p - c)),
            (s = []),
            (a = 0));
        c = p + 1;
      }
    }
  } finally {
    await r.close();
  }
  if (a > 0) yield s.length === 1 ? s[0] : Buffer.concat(s, a);
}
async function* streamFileLinesBackward(e) {
  let r = await open(e, "r");
  try {
    let o = (await r.stat()).size,
      s = Buffer.alloc(0),
      a = Buffer.alloc(4096);
    while (o > 0) {
      let u = Math.min(4096, o);
      ((o -= u), await r.read(a, 0, u, o));
      let d = Buffer.concat([a.subarray(0, u), s]),
        c = d.indexOf(10);
      if (c === -1) {
        s = d;
        continue;
      }
      s = Buffer.from(d.subarray(0, c));
      let p = d.toString("utf8", c + 1).split(`
`);
      for (let g = p.length - 1; g >= 0; g--) {
        let m = p[g];
        if (m) yield m;
      }
    }
    if (s.length > 0) yield s.toString("utf8");
  } finally {
    await r.close();
  }
}
var xe =
    /api[_-]?key|secret|token|password|passwd|credential|bearer|authorization|auth[_-]?header|cookie|session[_-]?(?:id|key)|connection[_-]?string|(?:private|ssh|encryption|signing|access|deploy|master|license)[_-]?key|client[_-]?secret/i,
  ye = "[^\\s,;&}\\])]+",
  Ee = `"[^"]*"|'[^']*'|[^\\s-]{0,4}\\[REDACTED\\]['"\`]?|(?:Bearer|Basic)\\s+(?:\\[REDACTED\\]|${ye})|${ye}`,
  bt = ["sk", "ant", "api"].join("-"),
  k = "[\\w=-]{20,}(?:\\.[0-9a-z]{9})?",
  ve = [
    { id: "url-userinfo", source: ":\\/\\/([^/@\\s]+)@", confidence: "low" },
    {
      id: "gcp-service-account",
      source: "\\b([a-z0-9-]+@[a-z0-9-]+\\.iam\\.gserviceaccount\\.com)\\b",
      flags: "i",
      confidence: "low",
    },
    {
      id: "loose-anthropic-key",
      source: "\\b(sk-ant-?[\\w-]{10,})",
      confidence: "low",
    },
    {
      id: "http-auth-scheme",
      source: "\\b(?:Bearer|Basic)\\s+([A-Za-z0-9+/=._~-]{20,})",
      flags: "i",
      confidence: "low",
    },
    {
      id: "loose-jwt",
      source:
        "\\b(eyJ[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,})",
      confidence: "low",
    },
    {
      id: "sensitive-assign",
      source: `(?:${xe.source})[\\w.-]*["']?\\s*[=:]\\s*(${Ee})`,
      flags: "i",
      confidence: "low",
    },
    {
      id: "cloud-env-var",
      source: `\\b(?:AWS|GOOGLE|GCP|GCLOUD|AZURE)_\\w+\\s*[=:]\\s*(${Ee})`,
      flags: "i",
      confidence: "low",
    },
    {
      id: "aws-access-token",
      source: "\\b((?:A3T[A-Z0-9]|AKIA|ASIA|ABIA|ACCA)[A-Z2-7]{16})\\b",
      confidence: "high",
    },
    {
      id: "gcp-api-key",
      source: "\\b(AIza[\\w-]{35})(?![\\w-])",
      confidence: "high",
    },
    {
      id: "google-oauth-client-secret",
      source: "\\bGOCSPX-[\\w-]{28}(?![\\w-])",
      confidence: "high",
    },
    {
      id: "azure-ad-client-secret",
      source: `(?:^|[\\\\'"\\x60\\s>=:(,)])([a-zA-Z0-9_~.]{3}\\dQ~[a-zA-Z0-9_~.-]{31,34})(?:$|[\\\\'"\\x60\\s<),])`,
      confidence: "high",
    },
    {
      id: "digitalocean-pat",
      source: `\\b(dop_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "digitalocean-access-token",
      source: `\\b(doo_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "anthropic-api-key",
      source: `\\b(${bt}03-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "anthropic-admin-api-key",
      source: `\\b(sk-ant-admin01-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "anthropic-oauth-token",
      source: `\\b(sk-ant-(?:oat|ort)\\d{2}-[\\w-]{20,})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "openai-api-key",
      source: "sk-[A-Za-z0-9_-]{8,200}T3BlbkFJ[A-Za-z0-9_-]{8,200}",
      confidence: "high",
    },
    {
      id: "openai-legacy-api-key",
      source: "\\bsk-[a-zA-Z0-9]{48}(?![a-zA-Z0-9])",
      confidence: "high",
    },
    {
      id: "huggingface-access-token",
      source: `\\b(hf_[a-zA-Z]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "supabase-secret-key",
      source: "\\bsb_secret_[A-Za-z0-9_-]{20,}",
      confidence: "high",
    },
    {
      id: "supabase-access-token",
      source: "\\bsbp_[a-z0-9]{40,}",
      confidence: "high",
    },
    { id: "github-pat", source: "ghp_[0-9a-zA-Z]{36}", confidence: "high" },
    {
      id: "github-fine-grained-pat",
      source: "github_pat_\\w{82}",
      confidence: "high",
    },
    {
      id: "github-app-token",
      source: "(?:ghu|ghs)_[0-9a-zA-Z]{36}",
      confidence: "high",
    },
    { id: "github-oauth", source: "gho_[0-9a-zA-Z]{36}", confidence: "high" },
    {
      id: "github-refresh-token",
      source: "ghr_[0-9a-zA-Z]{36}",
      confidence: "high",
    },
    { id: "gitlab-pat", source: `glpat-${k}`, confidence: "high" },
    { id: "gitlab-deploy-token", source: `gldt-${k}`, confidence: "high" },
    {
      id: "gitlab-runner-authentication-token",
      source: `glrt-${k}`,
      confidence: "high",
    },
    { id: "gitlab-oauth-app-secret", source: `gloas-${k}`, confidence: "high" },
    {
      id: "gitlab-pipeline-trigger-token",
      source: `glptt-${k}`,
      confidence: "high",
    },
    {
      id: "gitlab-kubernetes-agent-token",
      source: `glagent-${k}`,
      confidence: "high",
    },
    {
      id: "gitlab-incoming-mail-token",
      source: `glimt-${k}`,
      confidence: "high",
    },
    {
      id: "gitlab-scim-oauth-token",
      source: `glsoat-${k}`,
      confidence: "high",
    },
    { id: "gitlab-ci-build-token", source: `glcbt-${k}`, confidence: "high" },
    { id: "gitlab-feed-token", source: `glft-${k}`, confidence: "high" },
    {
      id: "gitlab-feature-flag-client-token",
      source: `glffct-${k}`,
      confidence: "high",
    },
    {
      id: "slack-bot-token",
      source: "xoxb-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*",
      confidence: "high",
    },
    {
      id: "slack-user-token",
      source: "xox[a-z](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34}",
      confidence: "high",
    },
    {
      id: "slack-rotation-token",
      source: "xoxe(?:\\.xox[a-z])?-[0-9]-[A-Za-z0-9-]{28,}",
      confidence: "high",
    },
    {
      id: "slack-app-token",
      source: "xapp-\\d-[A-Z0-9]+-\\d+-[a-z0-9]+",
      flags: "i",
      confidence: "high",
    },
    {
      id: "slack-workflow-token",
      source: "\\bxwfp-[a-zA-Z0-9-]{20,}",
      confidence: "high",
    },
    {
      id: "slack-webhook-url",
      source:
        "(?:https?://)?hooks\\.slack\\.com/(?:services|workflows|triggers)/[A-Za-z0-9+/_-]{40,}",
      flags: "i",
      confidence: "high",
    },
    { id: "twilio-api-key", source: "SK[0-9a-fA-F]{32}", confidence: "high" },
    {
      id: "sendgrid-api-token",
      source: `\\b(SG\\.[a-zA-Z0-9=_\\-.]{66})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "npm-access-token",
      source: `\\b(npm_[a-zA-Z0-9]{36})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "pypi-upload-token",
      source: "pypi-AgEIcHlwaS5vcmc[\\w-]{50,1000}",
      confidence: "high",
    },
    {
      id: "databricks-api-token",
      source: `\\b(dapi[a-f0-9]{32}(?:-\\d)?)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "hashicorp-tf-api-token",
      source: "[a-zA-Z0-9]{14}\\.atlasv1\\.[a-zA-Z0-9\\-_=]{60,70}",
      confidence: "high",
    },
    {
      id: "pulumi-api-token",
      source: `\\b(pul-[a-f0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "postman-api-token",
      source: `\\b(PMAK-[a-fA-F0-9]{24}-[a-fA-F0-9]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "grafana-api-key",
      source: `\\b(eyJrIjoi[A-Za-z0-9+/]{70,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "grafana-cloud-api-token",
      source: `\\b(glc_[A-Za-z0-9+/]{32,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "grafana-service-account-token",
      source: `\\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "sentry-user-token",
      source: `\\b(sntryu_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "sentry-org-token",
      source:
        "\\bsntrys_eyJpYXQiO[a-zA-Z0-9+/]{10,200}(?:LCJyZWdpb25fdXJs|InJlZ2lvbl91cmwi|cmVnaW9uX3VybCI6)[a-zA-Z0-9+/]{10,200}={0,2}_[a-zA-Z0-9+/]{43}",
      confidence: "high",
    },
    {
      id: "stripe-access-token",
      source: `\\b((?:sk|rk)_(?:test|live|prod)_[a-zA-Z0-9]{10,99})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high",
    },
    {
      id: "shopify-access-token",
      source: "shpat_[a-fA-F0-9]{32}",
      confidence: "high",
    },
    {
      id: "shopify-shared-secret",
      source: "shpss_[a-fA-F0-9]{32}",
      confidence: "high",
    },
  ],
  St = 64;
function G(e, t) {
  let r = /-----BEGIN[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi,
    i = /-----END[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi;
  r.lastIndex = t;
  let o = r.exec(e);
  if (!o) return null;
  i.lastIndex = o.index + o[0].length + St;
  let s = i.exec(e);
  if (!s) return null;
  return { start: o.index, end: s.index + s[0].length };
}
function kt(e) {
  return G(e, 0) !== null;
}
function wt(e) {
  let t = G(e, 0);
  if (!t) return e;
  let r = "",
    i = 0;
  while (t)
    ((r += e.slice(i, t.start) + "[REDACTED]"), (i = t.end), (t = G(e, i)));
  return r + e.slice(i);
}
var Se = `(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  ke = "(?=[^a-zA-Z0-9_\\-+=]|$)",
  xt = "(?<![a-zA-Z0-9_\\-])";
function vt() {
  return ve.map((e) => ({
    id: e.id,
    confidence: e.confidence,
    re: new RegExp(
      e.confidence !== "high"
        ? e.source
        : xt +
            (e.source.endsWith(Se)
              ? e.source.slice(0, -Se.length) + ke
              : e.source + ke),
      (e.flags ?? "").replace("g", "") + "g",
    ),
  }));
}
function we(e) {
  return ve.map((t) => ({
    id: t.id,
    confidence: t.confidence,
    re: new RegExp(
      t.source,
      e ? (t.flags ?? "").replace("g", "") + "g" : (t.flags ?? ""),
    ),
  }));
}
function Ae(e, t) {
  if (typeof t !== "string") return "[REDACTED]";
  let r =
      t.length >= 2 && (t[0] === '"' || t[0] === "'") && t.at(-1) === t[0]
        ? t[0]
        : "",
    i = e.lastIndexOf(t);
  return `${e.slice(0, i)}${r}[REDACTED]${r}${e.slice(i + t.length)}`;
}
var At = 512,
  Ot = 512;
class Oe {
  testRules = null;
  redactRules = null;
  displayRules = null;
  resultCache = new Map();
  scan(e) {
    this.testRules ??= we(!1);
    let t = [];
    for (let r of this.testRules)
      if (r.confidence === "high" && r.re.test(e))
        t.push({
          ruleId: r.id,
          label: r.id
            .split("-")
            .map((i) => _t[i] ?? capitalize(i))
            .join(" "),
        });
    if (kt(e)) t.push({ ruleId: "private-key", label: "Private Key" });
    return t;
  }
  redact(e) {
    let t = e.length <= At;
    if (t) {
      let i = this.resultCache.get(e);
      if (i !== void 0) return i;
    }
    this.redactRules ??= we(!0);
    let r = wt(e);
    for (let i of this.redactRules) r = r.replace(i.re, Ae);
    if (t) {
      if (this.resultCache.size >= Ot)
        this.resultCache.delete(this.resultCache.keys().next().value);
      this.resultCache.set(e, r);
    }
    return r;
  }
  redactForDisplay(e) {
    this.displayRules ??= vt();
    let t = e;
    for (let r of this.displayRules) {
      if (r.confidence !== "high") continue;
      t = t.replace(r.re, Ft);
    }
    return t;
  }
}
var V = new Oe();
function scanForSecrets(e) {
  return V.scan(e);
}
function redactSecretsFromText(e) {
  return V.redact(e);
}
var Rt = /[$\x60|;&<>()\s]/,
  Dt = /[/.@:~*?\\]/;
function Ft(e, t) {
  let r = typeof t === "string" ? t : e;
  if (Rt.test(r) || Dt.test(r)) return e;
  return Ae(e, t);
}
function redactForDisplay(e) {
  return V.redactForDisplay(e);
}
function redactDeep(e, t = redactSecretsFromText) {
  if (typeof e === "string") return t(e);
  if (Array.isArray(e)) return e.map((r) => redactDeep(r, t));
  if (e !== null && typeof e === "object") {
    let r = Object.create(null);
    for (let [i, o] of Object.entries(e))
      if (typeof o === "string") {
        let s = `${i}: `,
          a = t(s + o);
        r[i] = a.startsWith(s) ? a.slice(s.length) : t(o);
      } else r[i] = redactDeep(o, t);
    return r;
  }
  return e;
}
function redactSensitiveKeys(e) {
  let t = Object.create(null);
  for (let [r, i] of Object.entries(e)) t[r] = xe.test(r) ? "[REDACTED]" : i;
  return t;
}
function sanitizeUrl(e) {
  if (!e) return e;
  try {
    let t = new URL(e);
    if (!t.host) throw TypeError("opaque");
    return (
      (t.username = ""),
      (t.password = ""),
      (t.search = ""),
      (t.hash = ""),
      t.toString().replace(/\/$/, "")
    );
  } catch {
    let t = beforeFirst(beforeFirst(e, "?"), "#"),
      r = t.lastIndexOf("@");
    return r >= 0 ? t.slice(r + 1) : t;
  }
}
var _t = {
  aws: "AWS",
  gcp: "GCP",
  api: "API",
  pat: "PAT",
  ad: "AD",
  tf: "TF",
  oauth: "OAuth",
  npm: "NPM",
  pypi: "PyPI",
  jwt: "JWT",
  ci: "CI",
  scim: "SCIM",
  github: "GitHub",
  gitlab: "GitLab",
  openai: "OpenAI",
  digitalocean: "DigitalOcean",
  huggingface: "HuggingFace",
  hashicorp: "HashiCorp",
  sendgrid: "SendGrid",
};
var X = { verbose: 0, debug: 1, info: 2, warn: 3, error: 4 },
  Tt = 10485760;
function Nt(e) {
  return Object.hasOwn(X, e);
}
function Fe(e) {
  return BL(e) ? null : resolve(e);
}
function _e() {}
var It = { sessionId: "", fromBackend: !1 };
function Le(e, t, r, i) {
  let o = join(t, "debug"),
    s = join(o, `${e.sessionId}.txt`),
    a;
  if (r === null) a = s;
  else if (i !== null && r === i) a = join(i, `${e.sessionId}.txt`);
  else a = r;
  let u = !e.fromBackend && a === s ? "v5" : "raw";
  return {
    target: a,
    arm: u,
    configHome: t,
    rotate: u === "raw" && !(dirname(a) === o && a.endsWith(".txt")),
    pointLatest: u === "raw" && a !== s,
  };
}
function Y(e) {
  return pathSpaces.userNamed(isAbsolute(e) ? e : resolve(e));
}
function Ht(e) {
  return e.code === "Failed" && e.telemetryCode === "ENOENT";
}
function Bt(e, t = te) {
  return t ? e : void 0;
}
async function Pe(e, t, r, i) {
  let o = { namespace: "log", sessionId: t, channel: "debug" },
    s = await C.run(!0, () =>
      e.append(o, [{ data: r }], i ? { markLatest: !0 } : void 0),
    );
  if (s.ok) return "landed";
  return i &&
    s.error.code === "InvalidArgument" &&
    s.error.argument === "opts.markLatest"
    ? "refused"
    : "dropped";
}
class Te {
  deps;
  minLevel;
  filter;
  toStderr;
  filePath;
  runtimeDebugEnabled = !1;
  hasFormattedOutput = !1;
  debugFromLaunch;
  storageV5;
  writer = null;
  redirect = null;
  pendingWrite = Promise.resolve();
  unflushedChunks = [];
  backendLinesLogged = 0;
  exiting = !1;
  exitHandlerRegistered = !1;
  successor = null;
  writtenBytes = -1;
  rotating = !1;
  resolvedLogPath = null;
  overrideDirectory = null;
  rotationTarget = null;
  latestMarked = !1;
  latestRefused = !1;
  constructor(e) {
    this.deps = e;
    if (((this.storageV5 = Bt(e.storageV5)), e.launchIdentity !== void 0)) {
      ((this.minLevel = e.launchIdentity.minLevel),
        (this.filter = e.launchIdentity.filter),
        (this.toStderr = e.launchIdentity.toStderr),
        (this.filePath = e.launchIdentity.filePath),
        (this.debugFromLaunch = e.launchIdentity.debugFromLaunch));
      return;
    }
    let t = Array.isArray(e.argv) ? e.argv : [],
      r = t.indexOf("--"),
      i = r === -1 ? t : t.slice(0, r),
      o = e.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
    this.minLevel = o && Nt(o) ? o : "debug";
    let s = i.find((u) => u.startsWith("--debug="));
    ((this.filter = s ? oe(s.substring(8)) : null),
      (this.toStderr = i.includes("--debug-to-stderr") || i.includes("-d2e")));
    let a = null;
    for (let u = 0; u < i.length; u++) {
      let d = i[u];
      if (d.startsWith("--debug-file=")) {
        a = Fe(d.substring(13));
        break;
      }
      if (d === "--debug-file" && u + 1 < i.length) {
        a = Fe(i[u + 1]);
        break;
      }
    }
    ((this.filePath = a),
      (this.debugFromLaunch =
        Ie(e.env.DEBUG) ||
        Ie(e.env.DEBUG_SDK) ||
        i.includes("--debug") ||
        i.includes("-d") ||
        this.toStderr ||
        s !== void 0 ||
        this.filePath !== null));
  }
  isDebugMode() {
    return this.runtimeDebugEnabled || this.debugFromLaunch;
  }
  drainsSyncAtExit() {
    return !(
      isHoverRestEnabled() &&
      this.storageV5 !== void 0 &&
      this.deps.syncExitDrain === !1
    );
  }
  launchIdentity() {
    return {
      minLevel: this.minLevel,
      filter: this.filter,
      toStderr: this.toStderr,
      filePath: this.filePath,
      debugFromLaunch: this.debugFromLaunch,
      isAnt: this.deps.isAnt,
      isTestEnvironment: this.deps.isTestEnvironment,
    };
  }
  enableDebugLogging() {
    let e = this.isDebugMode() || this.deps.isAnt;
    return ((this.runtimeDebugEnabled = !0), e);
  }
  logPath() {
    return (
      this.filePath ??
      (this.overrideDirectory !== null &&
      this.overrideDirectory === this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR
        ? join(this.overrideDirectory, `${this.deps.sessionId()}.txt`)
        : null) ??
      this.resolvedLogPath ??
      this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ??
      this.defaultLogPath()
    );
  }
  defaultLogPath(e = this.deps.sessionId()) {
    return join(this.deps.configHomeDir(), "debug", `${e}.txt`);
  }
  learnedOverrideDirectory() {
    return this.overrideDirectory;
  }
  isArmed() {
    return this.storageV5 !== void 0;
  }
  log(e, { level: t } = { level: "debug" }) {
    if (X[t] < X[this.minLevel]) return;
    if (!this.shouldLog(e)) return;
    let r = redactSecretsFromText(e.trim());
    if (
      r.includes(`
`)
    )
      r = jsonStringify(r);
    let o = `${new Date().toISOString()} [${t.toUpperCase()}] ${r}
`;
    if (this.toStderr) {
      this.deps.writeToStderr(o);
      return;
    }
    this.write(o);
  }
  write(e) {
    let t = this.getWriter(),
      r = It;
    if (this.storageV5 !== void 0) {
      if (
        ((r = {
          sessionId: this.deps.sessionId(),
          fromBackend: C.getStore() === !0,
        }),
        r.fromBackend)
      )
        this.backendLinesLogged++;
    }
    if ((t.write({ origin: r, content: e }), this.exiting)) t.flush();
  }
  async flush() {
    let e = this.backendLinesLogged;
    if (
      (this.writer?.flush(),
      await this.pendingWrite,
      this.storageV5 !== void 0 && this.successor)
    )
      return this.successor.flush();
    for (let t = 0; this.backendLinesLogged !== e && t < 3; t++)
      ((e = this.backendLinesLogged),
        this.writer?.flush(),
        await this.pendingWrite);
  }
  dispose(e) {
    this.redirect = e;
    try {
      this.writer?.dispose();
    } finally {
      ((this.redirect = null), (this.writer = null));
    }
  }
  succeed(e) {
    ((this.runtimeDebugEnabled = e.runtimeDebugEnabled),
      (this.hasFormattedOutput = e.hasFormattedOutput),
      (this.pendingWrite = e.pendingWrite),
      (this.unflushedChunks = e.unflushedChunks),
      (this.exitHandlerRegistered = e.exitHandlerRegistered),
      (e.successor = this),
      e.dispose((t) => {
        this.write(t);
      }));
  }
  handleExit() {
    if (this.successor) {
      this.successor.handleExit();
      return;
    }
    ((this.exiting = !0), this.writer?.flush(), this.drainSync());
  }
  async maybeRotate(e, t, r = Tt) {
    let i =
      isHoverRestEnabled() && this.storageV5 !== void 0 ? this.storageV5.hostFiles : void 0;
    if (this.writtenBytes < 0)
      if (i) {
        let o = await i.stat(Y(e));
        this.writtenBytes =
          o.ok && o.value.kind !== "absent" ? o.value.size : 0;
      } else
        this.writtenBytes = await stat(e)
          .then((o) => o.size)
          .catch(() => 0);
    else this.writtenBytes += t;
    if (this.writtenBytes <= r || this.rotating) return;
    this.rotating = !0;
    try {
      let o = e.endsWith(".txt") ? `${e.slice(0, -4)}.1.txt` : `${e}.1`;
      if (i) {
        let s = Y(e),
          a = Y(o),
          u = await i.rename(s, a);
        if (!u.ok && !Ht(u.error)) {
          if (
            (await i.delete(a, { missingOk: !0 }), !(await i.rename(s, a)).ok)
          )
            await i.delete(s, { missingOk: !0 });
        }
      } else
        try {
          await rename(e, o);
        } catch (s) {
          if (!W(s))
            (await unlink(o).catch(() => {}),
              await rename(e, o).catch(() => unlink(e).catch(() => {})));
        }
      this.writtenBytes = 0;
    } finally {
      this.rotating = !1;
    }
  }
  shouldLog(e) {
    if (this.deps.isTestEnvironment && !this.toStderr && this.filePath === null)
      return !1;
    if (!this.deps.isAnt && !this.isDebugMode()) return !1;
    if (
      typeof process > "u" ||
      typeof process.versions > "u" ||
      typeof process.versions.node > "u"
    )
      return !1;
    return se(e, this.filter);
  }
  resolveDirToFile(e) {
    return (
      (this.resolvedLogPath = join(e, `${this.deps.sessionId()}.txt`)),
      this.resolvedLogPath
    );
  }
  async appendGroup(e, t, r, i) {
    if (this.storageV5 !== void 0 && e.arm === "v5") {
      await this.appendV5AndMark(this.storageV5, t, r);
      return;
    }
    if (i) await mkdir(dirname(e.target), { recursive: !0 }).catch(() => {});
    let o = e;
    try {
      await appendFile(e.target, r);
    } catch (s) {
      if (!Nz(s)) throw s;
      if (this.storageV5 === void 0)
        ((o = { ...e, target: this.resolveDirToFile(e.target) }),
          await appendFile(o.target, r));
      else {
        if (
          ((this.overrideDirectory = e.target),
          (o = Le(t, e.configHome, e.target, e.target)),
          o.arm === "v5")
        ) {
          await this.appendV5AndMark(this.storageV5, t, r);
          return;
        }
        await mkdir(dirname(o.target), { recursive: !0 }).catch(() => {});
        try {
          await appendFile(o.target, r);
        } catch {
          return;
        }
      }
    }
    if (o.rotate) {
      if (this.storageV5 !== void 0 && o.target !== this.rotationTarget)
        ((this.rotationTarget = o.target), (this.writtenBytes = -1));
      await this.maybeRotate(o.target, Buffer.byteLength(r)).catch(_e);
    }
    if (o.pointLatest) this.markLatestSymlink();
  }
  async appendV5AndMark(e, t, r) {
    let i = isHoverRestEnabled(),
      o = i && !this.latestMarked && !this.latestRefused,
      s = await Pe(e, t.sessionId, r, o);
    if (s === "refused")
      ((this.latestRefused = !0),
        (s = await Pe(e, t.sessionId, r, !1)),
        this.log(
          "debug log: the storage backend refused markLatest; <debug folder>/latest is not pointed in this process",
          { level: "warn" },
        ));
    if (s !== "landed") return;
    if (o && !this.latestRefused) this.latestMarked = !0;
    else if (!i) this.markLatestSymlink();
  }
  markLatestSymlink() {
    if (!this.latestMarked)
      ((this.latestMarked = !0), this.updateLatestSymlink());
  }
  shiftUnflushedChunk() {
    this.unflushedChunks.shift();
  }
  drainSync() {
    if (this.unflushedChunks.length === 0) return;
    if (!this.drainsSyncAtExit()) {
      this.unflushedChunks.length = 0;
      return;
    }
    let e = [];
    for (let t of this.unflushedChunks.splice(0)) {
      let r = e.at(-1);
      if (
        r !== void 0 &&
        r.armed === t.armed &&
        (!t.armed || r.target === t.target)
      )
        r.parts.push(t);
      else e.push({ target: t.target, armed: t.armed, parts: [t] });
    }
    for (let { target: t, armed: r, parts: i } of e) {
      let o = r ? t : this.logPath(),
        s = i.map((a) => a.content).join("");
      try {
        getFsSurface().mkdirSync(dirname(o));
      } catch {}
      try {
        getFsSurface().appendFileSync(o, s);
      } catch (a) {
        if (Nz(a))
          try {
            if (!r) getFsSurface().appendFileSync(this.resolveDirToFile(o), s);
            else {
              let u = (p, g) => {
                  try {
                    getFsSurface().appendFileSync(join(o, `${p}.txt`), g);
                  } catch {}
                },
                d = i[0]?.sessionId,
                c = "";
              for (let p of i) {
                if (p.sessionId !== d) (u(d, c), (d = p.sessionId), (c = ""));
                c += p.content;
              }
              u(d, c);
            }
          } catch {}
      }
    }
  }
  groupLines(e) {
    let t = e[0];
    if (t === void 0) return [];
    if (this.storageV5 === void 0)
      return [
        {
          decision: {
            target: this.logPath(),
            arm: "raw",
            configHome: "",
            rotate: !0,
            pointLatest: !0,
          },
          origin: t.origin,
          lines: e,
        },
      ];
    let r = [];
    for (let i of e) {
      let o = r.at(-1);
      if (
        o !== void 0 &&
        o.origin.sessionId === i.origin.sessionId &&
        o.origin.fromBackend === i.origin.fromBackend
      )
        o.lines.push(i);
      else
        r.push({
          decision: Le(
            i.origin,
            this.deps.configHomeDir(),
            this.filePath ?? this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? null,
            this.overrideDirectory,
          ),
          origin: i.origin,
          lines: [i],
        });
    }
    return r;
  }
  getWriter() {
    if (this.writer) return this.writer;
    let e = null,
      t = this.storageV5 !== void 0;
    if (
      ((this.writer = T({
        writeBatch: (r) => {
          if (this.redirect) {
            this.redirect(r.map((i) => i.content).join(""));
            return;
          }
          if (this.exiting) {
            for (let i of this.groupLines(r))
              this.unflushedChunks.push({
                target: i.decision.target,
                sessionId: i.origin.sessionId,
                armed: t,
                content: i.lines.map((o) => o.content).join(""),
              });
            this.drainSync();
            return;
          }
          for (let i of this.groupLines(r)) {
            let o = i.lines.map((u) => u.content).join(""),
              s = dirname(i.decision.target),
              a = i.decision.arm === "raw" && (i.origin.fromBackend || e !== s);
            if (i.decision.arm === "raw") e = s;
            (this.unflushedChunks.push({
              target: i.decision.target,
              sessionId: i.origin.sessionId,
              armed: t,
              content: o,
            }),
              (this.pendingWrite = this.pendingWrite
                .then(this.appendGroup.bind(this, i.decision, i.origin, o, a))
                .catch(_e)
                .then(this.shiftUnflushedChunk.bind(this))));
          }
        },
        sizeOf: (r) => r.content.length,
        flushIntervalMs: 1000,
        maxBufferSize: 100,
        immediateMode: this.isDebugMode(),
      })),
      this.deps.registerCleanup(async () => {
        (this.writer?.dispose(), await this.pendingWrite);
      }),
      !this.exitHandlerRegistered)
    )
      ((this.exitHandlerRegistered = !0),
        this.deps.onExit(this.handleExit.bind(this)));
    return this.writer;
  }
  async updateLatestSymlink() {
    try {
      let e = this.logPath(),
        t = join(dirname(e), "latest");
      (await unlink(t).catch(() => {}), await symlink(e, t));
    } catch {}
  }
}
class DebugLogState {
  instance = void 0;
  init = {};
  setInstance(e) {
    this.instance = e;
  }
  setInit(e) {
    this.init = e;
  }
}
var debugLogState = new j(() => new DebugLogState());
function _() {
  return bi(debugLogState);
}
function Q(e, t) {
  return new Te({
    argv: process.argv,
    env: process.env,
    sessionId: () => K(),
    configHomeDir: () => getClaudeConfigDir(),
    onExit: (r) => {
      process.on("exit", r);
    },
    registerCleanup: (r) => {
      registerCleanup(r);
    },
    writeToStderr: (r) => {
      writeToStderr(r);
    },
    isAnt: t?.isAnt ?? !1,
    isTestEnvironment: t?.isTestEnvironment ?? !1,
    launchIdentity: t,
    storageV5:
      e.init.storageV5 !== void 0 && e.init.configHome === getClaudeConfigDir()
        ? e.init.storageV5
        : void 0,
    syncExitDrain: e.init.syncExitDrain,
  });
}
function initDefaultDebugLog(e) {
  let t = _();
  t.setInit({
    storageV5: e.storageV5,
    configHome: getClaudeConfigDir(),
    syncExitDrain: e.syncExitDrain,
  });
  let r = t.instance;
  if (r) {
    let i = Q(t, r.launchIdentity());
    (t.setInstance(i), i.succeed(r));
  }
  if (e.syncExitDrain === !1 && !w().drainsSyncAtExit())
    logForDebugging(
      "Sync exit drain off for this process: debug lines still queued at exit are dropped, so this log may end short",
    );
}
function w() {
  let e = _(),
    t = e.instance;
  if (t) return t;
  let r = Q(e);
  return (e.setInstance(r), r);
}
function getMinDebugLogLevel() {
  return w().minLevel;
}
function isDebugMode() {
  return w().isDebugMode();
}
function isDebugToStdErr() {
  return w().toStderr;
}
function getDebugFilePath() {
  return w().filePath;
}
function enableDebugLogging() {
  return w().enableDebugLogging();
}
function resetDebugCaches() {
  let e = _(),
    t = e.instance;
  if (!t) return;
  let r = Q(e);
  (e.setInstance(r), r.succeed(t));
}
function setHasFormattedOutput(e) {
  w().hasFormattedOutput = e;
}
function getHasFormattedOutput() {
  return w().hasFormattedOutput;
}
async function flushDebugLogs() {
  await _().instance?.flush();
}
function logForDebugging(e, t = { level: "debug" }) {
  w().log(e, t);
}
function getDebugLogPath() {
  return w().logPath();
}
function isDefaultDebugLogPath(e, t) {
  return e === w().defaultLogPath(t);
}
function logAntError(e, t) {
  return;
}
export {
  createInvalidArgumentError,
  OTHER_NAMES_TELEMETRY_CODE,
  LEAF_MOVED_TELEMETRY_CODE,
  HARDENING_UNAVAILABLE_TELEMETRY_CODE,
  REMOTE_LINK_TELEMETRY_CODE,
  ASIDE_STRANDED_TELEMETRY_CODE,
  UNSUPPORTED_TELEMETRY_CODE,
  isUnsupportedFailure,
  isByteViewUnsupportedFailure,
  isStoreFencedFailure,
  SOURCE_NOT_REGULAR_TELEMETRY_CODE,
  SOURCE_TOO_LARGE_TELEMETRY_CODE,
  SOURCE_SHARED_TELEMETRY_CODE,
  SOURCE_OUTSIDE_TELEMETRY_CODE,
  isStorageError,
  ABSENT_PARENT_TELEMETRY_CODE,
  isAbsentParentFailure,
  getTelemetryCode,
  TOO_LARGE_TELEMETRY_CODE,
  describeStorageError,
  createOkResult,
  createErrorResult,
  unwrapResult,
  pathSpaces,
  createStringBatchWriter,
  CLEANUP_DRAIN_TIMEOUT_MS,
  registerCleanup,
  drainCleanup,
  isCleanupDrainStarted,
  registerPreExitFlush,
  drainPreExitFlush,
  startSlowOperationSpan,
  jsonStringify,
  jsonStringifyLine,
  jsonStringifyUntraced,
  jsonlJoin,
  jsonParse,
  jsonParseUntraced,
  deepClone,
  writeFileSyncTraced,
  UNVERIFIED_ANCESTRY_SENTINEL,
  hasNetworkPathSpelling,
  hasNetworkPathSpellingAsync,
  hasUnverifiableAncestrySync,
  hasUnverifiableAncestry,
  hasUnverifiableAncestryWithAnchor,
  resolveSymlinkAncestrySync,
  resolveSymlinkAncestry,
  resolvePathInfo,
  testAndSetResolvedPath,
  resolveSymlinkTargetSync,
  getRealPath,
  tryGetRealPath,
  expandPathAliases,
  fsSurface,
  getFsSurface,
  changeWorkingDirectory,
  readBytesAtOffset,
  readBytesFromFileHandle,
  readTailBytes,
  streamFileLines,
  streamFileLinesBackward,
  scanForSecrets,
  redactSecretsFromText,
  redactForDisplay,
  redactDeep,
  redactSensitiveKeys,
  sanitizeUrl,
  initDefaultDebugLog,
  getMinDebugLogLevel,
  isDebugMode,
  isDebugToStdErr,
  getDebugFilePath,
  enableDebugLogging,
  resetDebugCaches,
  setHasFormattedOutput,
  getHasFormattedOutput,
  flushDebugLogs,
  logForDebugging,
  getDebugLogPath,
  isDefaultDebugLogPath,
  logAntError,
};
