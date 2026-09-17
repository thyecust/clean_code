// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { truncateToCodePoints, isWellFormed, toWellFormed, ANY_CONTROL_CHAR_REGEX } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { nodeIgnoreModule, getIgnorePatternCompileError, filterCompilableIgnorePatterns } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import {
  createConcurrencyLimiter,
  isSignalAborted,
  isSafeRelativePath,
  shouldIgnore,
  isOnCaseInsensitiveFs,
  DEPENDENCY_DIR_NAMES,
  pathWithUnicodeVariants,
  getFileSkipReason,
  readExactBytes,
  allUnlessAborted,
  isWindowsLikePlatform,
  hasWindowsReservedPathComponent,
  GIT_DIR_ENTRY_NAMES,
  looksLikeGitDirEntries,
  isGitDirectoryAtPath,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { vze } from "../../01-核心基础设施/安全文件系统(FS加固)/chunk-x4qgycdj.js";
import { isPathEligibleForSync, compareByPath } from "./sync-journal.js";
import { Vpt, Z9n } from "./chunk-tqwnv5vj.js";
import { getSafeReadOpenFlags } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { toESM } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var P = toESM(nodeIgnoreModule(), 1);
import {
  lstat,
  open as q,
  opendir,
  realpath,
} from "fs/promises";
import { join as p } from "path";
var D = 8,
  x = 4096,
  W = 2000,
  B = 1024,
  J = /^[A-Za-z]:/;
function ee(e) {
  return (
    e.length > 0 &&
    e.length <= x &&
    Buffer.byteLength(e, "utf8") <= x &&
    isSafeRelativePath(e) &&
    !J.test(e) &&
    !e.includes("\\") &&
    !ANY_CONTROL_CHAR_REGEX.test(e) &&
    isWellFormed(e)
  );
}
var ne = /[\x00-\x08\x0A-\x1F\x7F-\x9F]/,
  H = 4,
  j = 2,
  te = /\*+/g,
  re = /\*\*+/g;
function w(e) {
  if (e.length > B) return "too_long";
  if (ne.test(e) || !isWellFormed(e)) return "control_character";
  return (e.match(te)?.length ?? 0) > H || (e.match(re)?.length ?? 0) > j
    ? "too_many_wildcards"
    : null;
}
function oe(e) {
  return w(e) === null;
}
function qbe(e, t) {
  let n = pathWithUnicodeVariants(e).flatMap((r) =>
    r
      .split("/")
      .map((o, s, i) => ({ part: o, holdsEntries: t || s < i.length - 1 })),
  );
  return n.some(({ part: r }) => r.length === 0 || shouldIgnore(r))
    ? "filtered"
    : n.some(({ part: r, holdsEntries: o }) => o && DEPENDENCY_DIR_NAMES.has(r))
      ? "dependency_dir"
      : null;
}
var ie = /[\p{Cc}\p{Cf}]/gu;
function se(e) {
  return toWellFormed(e).replace(ie, "\uFFFD");
}
var U = ".git";
function Fan(e) {
  let t = new Map(),
    n = (r) => {
      let o = t.get(r);
      if (o === void 0) {
        let s = p(e, r);
        ((o = lstat(p(s, U)).then(
          () => !0,
          () => isGitDirectoryAtPath(s),
        )),
          t.set(r, o));
      }
      return o;
    };
  return async (r) => {
    let o = r.split("/");
    for (let s = 1; s < o.length; s++)
      if (await n(o.slice(0, s).join("/"))) return !0;
    return !1;
  };
}
var ae = ".gitignore",
  F = 1048576,
  le = 4 * vze,
  Qhr = () => null;
function iOe(e) {
  return isOnCaseInsensitiveFs(e);
}
function wze(e, { ignoreCase: t }) {
  let n = (o) => (t ? o.normalize("NFC") : o),
    r = P.default({ ignorecase: t }).add(
      filterCompilableIgnorePatterns(e.map(n), "dir_sync_folder_ignore"),
    );
  return {
    ignoresFile: (o) => r.ignores(n(o)),
    ignoresDirectory: (o) => r.ignores(n(o) + "/"),
  };
}
function m(e) {
  return { kind: "unusable", reason: e };
}
function M() {
  return { kind: "lines", lines: [], adjusted: [] };
}
var ce = 120,
  sn = `more wildcards than sync matches safely (more than ${String(H)} "*" runs, or more than ${String(j)} of them "**")`;
function T(e) {
  let t = se(e),
    n = truncateToCodePoints(t, ce);
  return '"' + n + (n.length < t.length ? "\u2026" : "") + '"';
}
function $an(e) {
  switch (e.reason) {
    case "unreadable":
      return "cannot be read";
    case "linked":
      return "is a link or has a second name, so it is not trusted (replace it with a plain file)";
    case "too_large":
      return `is larger than sync honours (over ${String(F / 1048576)} MiB, more than ${W.toLocaleString("en-US")} rules, or a rule longer than ${B.toLocaleString("en-US")} characters)`;
    case "malformed":
      return e.fault === "control_character"
        ? `has a control character in line ${String(e.lineNumber)} (${T(e.rule)}), which no line of a text file holds, so it is not trusted`
        : `has a rule in line ${String(e.lineNumber)} (${T(e.rule)}) that cannot be read as a pattern (an unclosed bracket, say), so it is not trusted`;
  }
}
async function Tze(e) {
  let t = p(e, ae),
    n;
  try {
    n = await lstat(t, { bigint: !0 });
  } catch (r) {
    return z(A(r)) ? M() : m("unreadable");
  }
  if (n.isSymbolicLink()) return m("linked");
  if (!n.isFile()) return M();
  if (n.nlink !== 1n) return m("linked");
  if (n.size > BigInt(F)) return m("too_large");
  try {
    let r = await q(t, getSafeReadOpenFlags());
    try {
      let o = await r.stat({ bigint: !0 });
      if (!o.isFile() || o.dev !== n.dev || o.ino !== n.ino || o.nlink !== 1n)
        return m("linked");
      let s = await readExactBytes(r, F + 1);
      if (s.length > F) return m("too_large");
      return Me(
        s
          .toString("utf8")
          .replace(/^\uFEFF/, "")
          .split(/\r?\n/),
        { foldsCase: iOe(e) },
      );
    } finally {
      await r.close();
    }
  } catch {
    return m("unreadable");
  }
}
function v(e) {
  return getIgnorePatternCompileError(e) === null && getIgnorePatternCompileError(e.normalize("NFC")) === null;
}
var ue = /[[\\]/,
  Y = /^\*{2,}$/;
function de(e) {
  let t = e.startsWith("/"),
    n = /^[^*?[\\/]*/.exec(t ? e.slice(1) : e)?.[0] ?? "";
  return (t ? "/" : "") + n + "*";
}
function ge(e) {
  if (e.startsWith("!") || ue.test(e)) return null;
  let t = K(e.replace(/\/$/, "").split("/"));
  return (
    Array.from({ length: t.length - 1 }, (n, r) =>
      fe(t.slice(0, t.length - 1 - r)),
    )
      .filter((n) => n.some((r) => r !== ""))
      .map(
        (n) => (n.length === 1 && n[0] !== "" ? "/" : "") + n.join("/") + "/",
      )
      .find((n) => oe(n) && v(n)) ?? null
  );
}
function K(e) {
  return e
    .map((t) => (Y.test(t) ? "**" : t))
    .filter((t, n, r) => !(t === "**" && r[n - 1] === "**"));
}
function fe(e) {
  return e.slice(0, e.findLastIndex((t) => !Y.test(t)) + 1);
}
var me = "*[]\\ #!";
function he(e, { foldsCase: t = !0 } = {}) {
  let n = e.startsWith("!"),
    r = n ? e.slice(1) : e,
    o = ke(r),
    s = o.replace(Re, (u) => "?".repeat(u.length)),
    i = [],
    l = s !== o,
    d = !1,
    g = !1,
    h = !1,
    k = !1,
    c = 0;
  while (c < s.length) {
    let u = s[c] ?? "";
    if (u === "\\" && c + 1 < s.length) {
      let a = s[c + 1] ?? "";
      if (me.includes(a)) ((h ||= a === "\\"), i.push(u + a));
      else
        ((k ||=
          a === "/" &&
          (i.length === 0 ||
            c + 2 === s.length ||
            (i.at(-1) === "*" && i.at(-2) === "*"))),
          (l ||= a === "?"),
          i.push(a));
      c += 2;
      continue;
    }
    if (u === V) {
      ((l = !0), i.push("?"), (c += 1));
      continue;
    }
    if (u === "[") {
      let a = Fe(s, c);
      if (a === null) {
        ((d = !0), i.push(s.slice(c)));
        break;
      }
      ((l ||= !a.plain || a.nonAscii),
        (g ||= a.foldsApart),
        i.push(a.plain && !a.nonAscii ? s.slice(c, a.end) : "?"),
        (c = a.end));
      continue;
    }
    (i.push(u), (c += 1));
  }
  let S = ye(i).join("").replace(Ee, "?"),
    y = K(S.split("/")).join("/"),
    _ = y === "/**" ? "**" : y,
    I = l || k || S !== i.join("");
  return {
    line: (n ? "!" : "") + _,
    widened: I,
    readWider:
      I ||
      d ||
      h ||
      (t && g) ||
      be.test(_) ||
      Ae.test(_) ||
      Se.test(o) ||
      (t && X.test(_)) ||
      _.includes("?"),
  };
}
function ke(e) {
  let t = e.length;
  while (t > 0 && e[t - 1] === " " && !_e(e, t - 1)) t -= 1;
  return e.slice(0, t);
}
function ye(e) {
  let t = (o) => o === "?" || o === "*",
    n = [],
    r = 0;
  for (let o = 0; o <= e.length; o += 1) {
    if (o < e.length && t(e[o] ?? "")) continue;
    let s = e.slice(r, o);
    if (
      (n.push(...(countMatching(s, (i) => i === "?") >= 2 ? ["?", "*"] : s)), o < e.length)
    )
      n.push(e[o] ?? "");
    r = o + 1;
  }
  return n;
}
function _e(e, t) {
  let n = 0;
  while (n < t && e[t - 1 - n] === "\\") n += 1;
  return n % 2 === 1;
}
var Re = /[\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
  Se = /\t$/,
  Ie = /^[ \t\r]*$/,
  Ee = /^\uFEFF/,
  be = /\/\*\*\/$/,
  Ae = /\\\*$/;
function Fe(e, t) {
  let n = e[t + 1] === "!" || e[t + 1] === "^",
    r = t + 1 + (n ? 1 : 0),
    o = e[r] === "]",
    s = De(e, r + (o ? 1 : 0), o);
  if (s === null) return null;
  let i = e.slice(r, s);
  return {
    end: s + 1,
    nonAscii: X.test(i),
    foldsApart: [...i.replace(we, "")].some(
      (l) => Ne.test(l) && !i.includes(l.toLowerCase()),
    ),
    plain: !n && !o && !Le.test(i) && !i.includes("[:") && !Ce(i),
  };
}
var Le = /[\\/*?]/,
  X = /[^\x00-\x7f]/,
  Ne = /^[A-Z]$/,
  we = /.-[^\]]/g;
function Ce(e) {
  let t = null;
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n] === "\\" && n + 1 < e.length,
      o = r ? (e[n + 1] ?? "") : (e[n] ?? "");
    if (((n += r ? 1 : 0), o === "-" && !r && t !== null && n + 1 < e.length)) {
      let s = e[n + 1] === "\\" && n + 2 < e.length,
        i = s ? (e[n + 2] ?? "") : (e[n + 1] ?? "");
      if ((t <= "/" && "/" <= i) || t > i) return !0;
      ((n += s ? 2 : 1), (t = null));
    } else t = o;
  }
  return !1;
}
function De(e, t, n) {
  let r = n;
  for (let o = t; o < e.length; o += 1)
    if (e[o] === "\\") ((o += 1), (r = !0));
    else if (e[o] === "-" && r && o + 1 < e.length && e[o + 1] !== "]")
      ((o += e[o + 1] === "\\" ? 2 : 1), (r = !1));
    else if (e[o] === "[" && e[o + 1] === ":") {
      let s = e.indexOf("]", o + 2),
        i = s > o + 2 && e[s - 1] === ":";
      ((o = i ? s : o), (r = !i));
    } else if (e[o] === "]") return o;
    else r = !0;
  return null;
}
var xe = /^!\s*$/;
function Me(e, t = {}) {
  let n = e
    .map((i, l) => ({ rule: i, lineNumber: l + 1 }))
    .filter(({ rule: i }) => !Ie.test(i) && !i.startsWith("#") && !xe.test(i))
    .map((i) => {
      let l = w(i.rule);
      if (l === "too_long" || l === "control_character")
        return { ...i, line: i.rule, widened: !1, fault: l };
      let { line: d, widened: g, readWider: h } = he(i.rule, t),
        k = i.rule.startsWith("!") ? h : g;
      return { ...i, line: d, widened: k, fault: w(d) };
    });
  if (n.length > W || n.some(({ fault: i }) => i === "too_long"))
    return m("too_large");
  let r = n.find(({ line: i, fault: l }) => l === "control_character" || !v(i));
  if (r !== void 0)
    return {
      kind: "unusable",
      reason: "malformed",
      fault:
        r.fault === "control_character" ? "control_character" : "uncompilable",
      lineNumber: r.lineNumber,
      rule: r.rule,
    };
  let o = n.filter(({ widened: i, fault: l }) => !i && l === null),
    s = n
      .filter(({ widened: i, fault: l }) => i || l === "too_many_wildcards")
      .map(({ rule: i, line: l, lineNumber: d, fault: g }) => ({
        lineNumber: d,
        rule: i,
        appliedAs: i.startsWith("!")
          ? null
          : g === "too_many_wildcards"
            ? (ge(l) ?? de(l))
            : l,
        why: g === "too_many_wildcards" ? "wildcards" : "spelling",
      }));
  return {
    kind: "lines",
    lines: [
      ...o.map(({ line: i }) => i),
      ...s.flatMap(({ appliedAs: i }) => (i === null ? [] : [i])),
    ],
    adjusted: s,
  };
}
function z(e) {
  return e === "ENOENT" || e === "ENOTDIR";
}
async function Te(e, t, n, r, o) {
  try {
    if (n !== "" && (await realpath(p(e, n))) !== p(t, n))
      return { kind: "unreadable" };
    let s = [];
    for await (let i of await opendir(p(e, n))) {
      if (r.remaining <= 0 || isSignalAborted(o)) return { kind: "too_many" };
      if ((r.remaining--, n !== "" && i.name === U))
        return { kind: "nested_repository" };
      s.push({ path: n === "" ? i.name : n + "/" + i.name, dirent: i });
    }
    if (n !== "" && (await Oe(e, n, s))) return { kind: "nested_repository" };
    return { kind: "entries", entries: s.toSorted(compareByPath) };
  } catch {
    return { kind: "unreadable" };
  }
}
async function Oe(e, t, n) {
  let r = n.filter(
    ({ dirent: s }) =>
      s.name === GIT_DIR_ENTRY_NAMES.head || s.name === GIT_DIR_ENTRY_NAMES.objects || s.name === GIT_DIR_ENTRY_NAMES.refs,
  );
  if (r.length < 3) return !1;
  let o = r.map(({ dirent: s }) => ({
    name: s.name,
    isDirectory: s.isDirectory(),
    isSymbolicLink: s.isSymbolicLink(),
    typeKnown: s.isFile() || s.isDirectory() || s.isSymbolicLink(),
  }));
  return o.every((s) => s.typeKnown) ? looksLikeGitDirEntries(o) : isGitDirectoryAtPath(p(e, t));
}
var V = "\uFFFD";
function Pe(e, t, n) {
  return (
    !e.includes("/") &&
    !e.includes(V) &&
    ee(t) &&
    !(isWindowsLikePlatform() && hasWindowsReservedPathComponent(e)) &&
    isPathEligibleForSync({ path: t }) &&
    !(n ? Z9n(t) : Vpt(t))
  );
}
async function We(e, { path: t, dirent: n }) {
  if (n.isSymbolicLink()) return "symlink";
  if (n.isDirectory()) return "directory";
  if (
    n.isFile() ||
    n.isFIFO() ||
    n.isSocket() ||
    n.isBlockDevice() ||
    n.isCharacterDevice()
  )
    return "other";
  try {
    let r = await lstat(p(e, t));
    return r.isSymbolicLink()
      ? "symlink"
      : r.isDirectory()
        ? "directory"
        : "other";
  } catch {
    return "unknown";
  }
}
function Ge(e, t, n) {
  switch (t) {
    case "directory":
      return n.ignoresDirectory(e);
    case "other":
      return n.ignoresFile(e);
    case "symlink":
    case "unknown":
      return n.ignoresFile(e) || n.ignoresDirectory(e);
  }
}
function Be({ path: e, dirent: t }, n, r, o) {
  let s = qbe(t.name, n === "directory");
  if (s !== null) return { kind: "skip", reason: s };
  if (Ge(e, n, r)) return { kind: "ignored" };
  let i = o(e, !1);
  if (i !== null) return { kind: "skip", reason: i };
  if (!Pe(t.name, e, n === "directory"))
    return { kind: "skip", reason: "unsafe_name" };
  switch (n) {
    case "symlink":
      return { kind: "skip", reason: "symlink" };
    case "unknown":
      return { kind: "skip", reason: "unreadable" };
    case "directory":
      return { kind: "descend" };
    case "other":
      return { kind: "candidate" };
  }
}
async function He(e, t) {
  try {
    let n = Date.now(),
      r = await lstat(p(e, t));
    if (r.isDirectory())
      return {
        kind: "skip",
        skipped: { path: t, reason: "changed" },
        mayHoldFiles: !0,
      };
    let o = getFileSkipReason(r);
    if (o !== null)
      return {
        kind: "skip",
        skipped: { path: t, reason: o },
        mayHoldFiles: r.isSymbolicLink(),
      };
    return {
      kind: "file",
      file: {
        path: t,
        size: r.size,
        mtimeMs: r.mtimeMs,
        mode: r.mode & 511,
        observedAtMs: n,
        ino: r.ino,
        ctimeMs: r.ctimeMs,
      },
    };
  } catch (n) {
    return z(A(n))
      ? { kind: "gone" }
      : {
          kind: "skip",
          skipped: { path: t, reason: "unreadable" },
          mayHoldFiles: !0,
        };
  }
}
async function Uan({
  root: e,
  ignores: t,
  withheldOf: n,
  signal: r,
  maxFiles: o = vze,
  maxVisited: s = le,
}) {
  let i = [],
    l = [],
    d = [],
    g = [],
    h = [],
    k = 0,
    c = { remaining: s },
    S = await realpath(e).catch(() => null);
  if (S === null) return { ok: !1, reason: "root_unreadable" };
  let y = [""],
    _ = createConcurrencyLimiter(D, (a) => Te(e, S, a, c, r));
  while (y.length > 0) {
    if (isSignalAborted(r)) return { ok: !1, reason: "aborted" };
    let a = y,
      C = await allUnlessAborted(a.map(_), r);
    if (C === null) return { ok: !1, reason: "aborted" };
    y = [];
    for (let [Z, R] of C.entries()) {
      let E = a[Z];
      if (R.kind === "unreadable" || R.kind === "nested_repository") {
        if (R.kind === "unreadable" && E === "")
          return { ok: !1, reason: "root_unreadable" };
        (i.push({ path: E, reason: n(E, !1) ?? R.kind }), d.push(E));
        continue;
      }
      if (R.kind === "too_many")
        return { ok: !1, reason: isSignalAborted(r) ? "aborted" : "too_many_files" };
      for (let f of R.entries) {
        let N = await We(e, f),
          b = Be(f, N, t, n);
        switch (b.kind) {
          case "descend":
            y.push(f.path);
            break;
          case "candidate":
            l.push(f.path);
            break;
          case "skip":
            i.push({ path: f.path, reason: b.reason });
            break;
          case "ignored":
            if ((k++, N === "other")) g.push(f.path);
            else h.push(f.path);
            break;
        }
        if (N !== "other" && (b.kind === "skip" || b.kind === "ignored"))
          d.push(f.path);
      }
      if (l.length > o) return { ok: !1, reason: "too_many_files" };
    }
  }
  let I = createConcurrencyLimiter(D, (a) => (isSignalAborted(r) ? Promise.resolve({ kind: "gone" }) : He(e, a))),
    u = await allUnlessAborted(l.map(I), r);
  if (u === null || isSignalAborted(r)) return { ok: !1, reason: "aborted" };
  return {
    ok: !0,
    listing: {
      files: u.flatMap((a) => (a.kind === "file" ? [a.file] : [])).toSorted(compareByPath),
      skipped: [
        ...i,
        ...u.flatMap((a) => (a.kind === "skip" ? [a.skipped] : [])),
      ].toSorted(compareByPath),
      ignoredCount: k,
      ignoredFiles: g.toSorted(),
      ignoredDirectories: h.toSorted(),
      unlistedDirectories: [
        ...d,
        ...u.flatMap((a) =>
          a.kind === "skip" && a.mayHoldFiles ? [a.skipped.path] : [],
        ),
      ].toSorted(),
    },
  };
}
export { qbe, Fan, Qhr, iOe, wze, $an, Tze, Uan };
