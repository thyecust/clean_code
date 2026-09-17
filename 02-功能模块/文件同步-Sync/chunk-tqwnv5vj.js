// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { IZe, nc } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { hashSha256 } from "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import { DANGEROUS_FILES_LC } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import {
  getSeedFilePath,
  checkSeedPath,
  MAX_WORKING_FILE_BYTES,
  relUnderSyncDir,
  escapesSyncRoot,
  shouldIgnore,
  SYNCED_FILE_WRITE_MODE,
  toCaseFoldKey,
  normalizeUnicodeForm,
  isSensitivePathAnySpelling,
  DEPENDENCY_DIR_NAMES,
  getFileSkipReason,
  isUnderDependencyDir,
  isWindowsLikePlatform,
  hasWindowsReservedPathComponent,
  looksLikeWindowsShortName,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { P9, Zan, eln, u3n, uk } from "../../01-核心基础设施/安全文件系统(FS加固)/chunk-x4qgycdj.js";
import { o3n } from "../Git-Worktree/chunk-v967hawf.js";
import { normalizeFileMode } from "./sync-journal.js";
import { stripSentField, computeGitBlobId, computeContentDigests, matchesAgreedDigest } from "../../01-核心基础设施/共享小工具-未细化/sync-state-schema.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { lstat, realpath } from "fs/promises";
import {
  basename,
  dirname,
  join as C,
  posix as Te,
  relative,
  sep as D,
} from "path";
import { posix as x } from "path";
var Ban = "Claude's conflicted copy",
  jan = 100,
  Ee = 255,
  Se = Ee - 32;
function ie(e, t) {
  if (e === void 0) return t === null ? "unchanged" : "changed";
  if (t === null) return "changed";
  return matchesAgreedDigest(e.agreed, t) ? "unchanged" : "changed";
}
function oe({
  localChange: e,
  localSha256: t,
  localMode: r,
  incomingSha256: a,
  incomingMode: i,
}) {
  if (t === a) return r !== null && normalizeFileMode(r) === normalizeFileMode(i) ? "already_equal" : "apply";
  return e === "unchanged" ? "apply" : "conflict";
}
function _e(e) {
  let t = String(e.getFullYear()),
    r = String(e.getMonth() + 1).padStart(2, "0"),
    a = String(e.getDate()).padStart(2, "0");
  return `${t}-${r}-${a}`;
}
function Wan(e, t, r) {
  let a = x.dirname(e),
    i = x.basename(e),
    o = x.extname(i),
    c = Array.from(i.slice(0, i.length - o.length)),
    s = r > 0 ? ` (${r})` : "",
    d = ` (${Ban} ${_e(t)})${s}${o}`,
    u = (l) => {
      let p = `${c.slice(0, l).join("")}${d}`;
      return a === "." ? p : x.join(a, p);
    },
    f = Array.from({ length: c.length }, (l, p) => c.length - p).find((l) => {
      let p = u(l);
      return (
        Buffer.byteLength(x.basename(p), "utf8") <= Se &&
        checkSeedPath(p) === null &&
        !(isWindowsLikePlatform() && hasWindowsReservedPathComponent(p))
      );
    });
  return f === void 0 ? null : u(f);
}
async function se({ path: e, now: t, tryCandidate: r, maxAttempts: a = jan }) {
  for (let i = 0; i < a; i++) {
    let o = Wan(e, t, i);
    if (o === null) return null;
    if (await r(o)) return o;
  }
  return null;
}
function Eze(e) {
  let t = e.split("/");
  return t.slice(0, -1).map((r, a) => t.slice(0, a + 1).join("/"));
}
function j(e, t) {
  let r = toCaseFoldKey(t);
  if (!e.has(r)) e.set(r, t);
}
function Q9n(e, t) {
  let r = new Set(t),
    a = new Map(),
    i = new Map(),
    o = new Set(),
    c = (s) => {
      let d = [];
      for (
        let u = s.lastIndexOf("/");
        u >= 0 && !o.has(s.slice(0, u));
        u = u === 0 ? -1 : s.lastIndexOf("/", u - 1)
      )
        d.push(s.slice(0, u));
      for (let u of d.reverse()) (o.add(u), j(i, u));
    };
  for (let s of r) (j(a, s), c(s));
  return e.toSorted().reduce(
    (s, d) => {
      let u = toCaseFoldKey(d),
        f = a.get(u),
        l = i.get(u),
        p = Eze(d)
          .filter((m) => !o.has(m))
          .map((m) => {
            let L = toCaseFoldKey(m);
            return { held: i.get(L) ?? a.get(L) };
          })
          .find(({ held: m }) => m !== void 0),
        S = r.has(d)
          ? null
          : f !== void 0 && f !== d
            ? f
            : (l ?? p?.held ?? null);
      if (S !== null)
        return (s.colliding.push({ path: d, collidesWith: S }), s);
      return (j(a, d), c(d), s.clear.push(d), s);
    },
    { clear: [], colliding: [] },
  );
}
function ke(e) {
  return { sha256: e.sha256, gitBlobId: e.gitBlobId, mode: e.mode };
}
function de(e, t) {
  return {
    size: Number(e.size),
    mtimeMs: Number(e.mtimeMs),
    mode: Number(e.mode) & 511,
    observedAtMs: t,
  };
}
async function fe(e, t, r) {
  try {
    let { handle: a } = await eln(e, t, r);
    try {
      let i = Date.now();
      return de(await a.stat(), i);
    } finally {
      await a.close();
    }
  } catch {
    return null;
  }
}
async function G(e, t, r, a) {
  await z(e, t);
  let { handle: i } = await eln(e, t, r);
  try {
    await i.chmod(a);
    let o = Date.now();
    return de(await i.stat(), o);
  } finally {
    await i.close();
  }
}
async function pe(e, t, r, a) {
  try {
    return await G(e, t, r, a);
  } catch (i) {
    return (
      n(`dirSync pull: mode not applied (${A(i) ?? "not an errno"})`),
      null
    );
  }
}
function J(e, t) {
  return e.backend === "by_name" ? SYNCED_FILE_WRITE_MODE : t;
}
async function ue(e, t, r, a) {
  return t.backend === "by_name" ? G(e, t, r, a) : fe(e, t, r);
}
async function me(e) {
  try {
    return (await lstat(e), !0);
  } catch (t) {
    return A(t) !== "ENOENT";
  }
}
async function Le(e, t, r, a) {
  let i = await a(e, t, r);
  if (i !== null) return { kind: "present", digest: ke(i) };
  return (await me(C(e, r))) ? { kind: "unreadable" } : { kind: "absent" };
}
async function Ne(e) {
  try {
    return getFileSkipReason(await lstat(e)) !== null ? "refused" : "present";
  } catch {
    return "absent";
  }
}
function F(e, t, r = null) {
  if (e === null) return normalizeFileMode(t);
  if (r !== null && normalizeFileMode(e) !== normalizeFileMode(r)) return e & 511;
  let a = normalizeFileMode(t) === 493;
  return (e & 438) | (a ? (e & 292) >> 2 : 0);
}
async function V(e) {
  try {
    return (await e(), !0);
  } catch (t) {
    let r = A(t);
    if (r === "EEXIST" || r === "WORKING_DEST_SYMLINK") return !1;
    throw t;
  }
}
var Ce = /[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g;
function EFt(e) {
  let t = nc(e);
  return t === ".git" || /^git~\d+$/.test(t);
}
var Oe = ".claude",
  Ie = new Set([".mcp.json", ".claude.json"]);
function aOe(e, t) {
  let r = e.map(nc);
  return r.includes(Oe) || (t === "file" && Ie.has(r.at(-1) ?? ""));
}
var Pe = new Set(
  [...IZe, ...DEPENDENCY_DIR_NAMES]
    .filter((e) => e.startsWith(".") || e.length > 8)
    .map((e) =>
      e
        .replace(/^\.+/, "")
        .replace(/[^a-z0-9_~!#$%&'()@^{}-]/g, "")
        .slice(0, 6),
    )
    .filter((e) => e.length > 0),
);
function Gan(e) {
  let t = ge(e);
  return t !== null && Pe.has(t);
}
function ge(e) {
  return /^(.{1,6})~\d+$/.exec(nc(e))?.[1] ?? null;
}
function Vpt(e, t = !1) {
  return lOe(e, "/", "file", t);
}
function Z9n(e) {
  return lOe(e, "/", "directory");
}
function lOe(e, t, r, a = !1) {
  let i = t === "/" ? e : e.split(t).join("/"),
    o = dedupe([i.replace(Ce, ""), normalizeUnicodeForm(i)]);
  return (
    De.test(e) ||
    shouldIgnore(i) ||
    o.some((c) => {
      let s = c.split("/");
      return (
        shouldIgnore(c) ||
        aOe(s, r) ||
        (!(
          a &&
          o.length === 1 &&
          c === i &&
          s.slice(0, -1).every((d) => {
            let u = nc(d);
            return !DEPENDENCY_DIR_NAMES.has(u) || u === d;
          })
        ) &&
          isUnderDependencyDir(s.map(nc).join("/"))) ||
        s.some(EFt) ||
        (r === "file" && nc(s.at(-1) ?? "") === "head") ||
        (r === "file" ? s.slice(0, -1) : s).some((d) => ge(d) !== null) ||
        (r === "file" && s.slice(-1).some(Gan)) ||
        (getCurrentPlatform() === "wsl" && looksLikeWindowsShortName(c))
      );
    })
  );
}
var De = /[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/;
async function qan(e, t, r, a = !1) {
  return !(await Be(e, t, r, a)) && !Xce(r);
}
async function Be(e, t, r, a = !1) {
  return (await Kpt(e, t, r, a)) !== null;
}
async function Kpt(e, t, r, a = !1) {
  let i = C(e, r);
  try {
    if (relUnderSyncDir(e, i).split(D).join("/") !== r) return "place";
  } catch {
    return "place";
  }
  if (lOe(r, "/", "file", a) || isSensitivePathAnySpelling(r)) return "name";
  return (await he(i, e, t, a ? r : null)) ? "place" : null;
}
function Xce(e) {
  return dedupe([e, normalizeUnicodeForm(e)]).some((t) => {
    let r = nc(t.split("/").at(-1) ?? "");
    return DANGEROUS_FILES_LC.has(r) || Fe.has(xe(r) ?? "");
  });
}
function xe(e) {
  let t = /^([^.~]{1,6})~\d+(\.[^.]{1,3})?$/.exec(e);
  return t === null ? null : (t[1] ?? "") + (t[2] ?? "");
}
var Fe = new Set(
  [...DANGEROUS_FILES_LC].map((e) => {
    let t = e.replace(/^\.+/, ""),
      r = t.lastIndexOf("."),
      a = (r < 0 ? t : t.slice(0, r)).replace(/[^a-z0-9_!#$%&'()@^{}-]/g, ""),
      i = r < 0 ? "" : "." + t.slice(r + 1, r + 4);
    return a.slice(0, 6) + i;
  }),
);
async function he(e, t, r, a = null) {
  let i = relative(t, dirname(e)).split(D).filter(Boolean),
    o = i.map((f, l) => C(t, ...i.slice(0, l + 1))),
    c = async (f) => {
      try {
        if ((await lstat(f)).isSymbolicLink()) return "link";
      } catch (l) {
        return A(l) === "ENOENT" ? "absent" : "plain";
      }
      return (await zan(f)) ? "repository" : "plain";
    },
    s = async (f, l) => {
      let [p, ...S] = f;
      if (p === void 0) return { refused: !1, deepest: l };
      let m = await c(p);
      if (m === "absent") return { refused: !1, deepest: l };
      return m === "plain" ? s(S, p) : { refused: !0, deepest: p };
    },
    { refused: d, deepest: u } = await s(o, t);
  if (d) return !0;
  try {
    let f = relative(r, await realpath(u)),
      l = relative(t, u);
    return (
      f !== "" &&
      q(f, "directory", a !== null && f === l ? f.split(D).join("/") : null)
    );
  } catch {
    return !1;
  }
}
function q(e, t, r = null) {
  return (
    escapesSyncRoot(e) ||
    lOe(e, D, t, r !== null && e.split(D).join("/") === r) ||
    (t === "file" && isSensitivePathAnySpelling(e))
  );
}
async function zan(e) {
  try {
    return !(await lstat(C(e, "HEAD"))).isDirectory();
  } catch (t) {
    let r = A(t);
    return r !== "ENOENT" && r !== "ENOTDIR";
  }
}
function v(e) {
  let t =
    e === "WORKING_LANDED_OUTSIDE"
      ? Error("write landed outside the sync tree")
      : Error("destination resolves outside the sync tree");
  return ((t.code = e), t);
}
async function R(e, t, r = null) {
  if (e.backend === "by_name" && q(relative(e.realRoot, await realpath(t)), "file", r))
    throw v("WORKING_RESOLVES_OUTSIDE");
}
async function K(e, t, r, a = null) {
  if (e.backend !== "by_name") {
    if (
      !(
        await e.lstat(t.rel).catch((o) => {
          throw W(o) ? v("WORKING_LANDED_OUTSIDE") : o;
        })
      ).isFile()
    )
      throw v("WORKING_LANDED_OUTSIDE");
    return;
  }
  if (!q(relative(e.realRoot, await realpath(t.abs)), "file", a)) return;
  if (await Re(e, t.rel, r)) await e.unlink(t.rel).catch(() => {});
  throw v("WORKING_LANDED_OUTSIDE");
}
async function Re(e, t, r) {
  try {
    if (!(await e.lstat(t)).isFile()) return !1;
    let a = await e.open(t, Zan);
    try {
      let i = await a.stat({ bigint: !0 });
      if (!i.isFile() || i.size !== BigInt(r.length)) return !1;
      return (await a.readFile()).equals(r);
    } finally {
      await a.close();
    }
  } catch {
    return !1;
  }
}
var ye = 255,
  We = ye - 32,
  Me = 96;
function Ge(e, t) {
  return Array.from(e).reduce(
    (r, a) =>
      !r.done && Buffer.byteLength(r.text + a) <= t
        ? { text: r.text + a, done: !1 }
        : { text: r.text, done: !0 },
    { text: "", done: !1 },
  ).text;
}
function Ue(e) {
  let r = `${Ge(basename(e.abs), Me)}.incoming-${process.hrtime.bigint().toString(36).slice(-8)}`;
  return {
    abs: e.abs.slice(0, -basename(e.abs).length) + r,
    rel: e.rel.slice(0, -Te.basename(e.rel).length) + r,
  };
}
function ve(e, t, r) {
  return {
    agreed: { kind: "sha256", sha256: e.sha256 },
    stat: r !== null && normalizeFileMode(r.mode) === e.mode && r.size === e.size ? r : null,
    etag: t,
    origin: "pulled",
    ...(e.gen !== void 0 && { peerGen: e.gen }),
  };
}
function Ke(e, t, r) {
  return {
    ...stripSentField(e),
    agreed: { kind: "sha256", sha256: t.sha256 },
    stat: null,
    etag: r,
    ...(t.gen !== void 0 && { peerGen: t.gen }),
  };
}
function He(e, t) {
  return {
    agreed: { kind: "sha256", sha256: e.sha256 },
    stat: null,
    etag: t,
    origin: "pulled",
    ...(e.gen !== void 0 && { peerGen: e.gen }),
  };
}
function $e(e) {
  switch (e.kind) {
    case "unauthorized":
    case "lane_unavailable":
      return { status: "deferred", laneLost: e.kind };
    case "aborted":
      return { status: "deferred", laneLost: null };
    case "failed":
      return {
        status:
          e.status !== void 0 &&
          e.status >= 400 &&
          e.status < 500 &&
          e.status !== 408 &&
          e.status !== 429
            ? "failed"
            : "deferred",
        laneLost: null,
      };
  }
}
async function e3n({
  entry: e,
  gitRoot: t,
  realRoot: r,
  anchor: a,
  baseEntry: i,
  trackedHere: o = !1,
  recreates: c = null,
  deps: s,
  signal: d,
  kept: u,
}) {
  let f = s.host ?? uk(),
    l = i,
    p = Ye(f, s.writeFile ?? ((y, _, N, E, we) => u3n(f, E, y, _, N, isSensitivePathAnySpelling, we))),
    S = 0,
    m = !1,
    L = !1,
    h = (y, _ = null, N = {}) => ({
      change: { path: e.path, status: y, copyPath: null },
      entry: _,
      localAbsent: L,
      bytesWritten: 0,
      bytesFetched: S,
      understated: !1,
      refused: !1,
      laneLost: null,
      credentialRefused: !1,
      filterSettled: m,
      replacedUnkept: !1,
      ...N,
    }),
    w = { abs: C(t, e.path), rel: e.path };
  try {
    if (relUnderSyncDir(t, w.abs).split(D).join("/") !== w.rel) return h("failed");
  } catch {
    return h("failed");
  }
  if (lOe(e.path, "/", "file", o)) return h("failed");
  let O = o ? e.path : null;
  if (e.size > MAX_WORKING_FILE_BYTES) return h("failed");
  if (a.rootOnly) return h("failed", null, { refused: !0 });
  let T = await Ne(w.abs),
    B = e.path.split("/");
  if (
    T === "refused" ||
    B.slice(0, -1).some((y) => Buffer.byteLength(y) > ye) ||
    (T === "absent" && l === void 0 && Buffer.byteLength(B.at(-1) ?? "") > We)
  )
    return h("failed");
  if (await he(w.abs, t, r, O)) return h("failed", null, { refused: !0 });
  if (isSensitivePathAnySpelling(e.path)) return h("failed", null, { credentialRefused: !0 });
  let g = await (s.fetchContent !== void 0
    ? s.fetchContent(e, d)
    : s.client.getLaneFile(getSeedFilePath(e.path), d, e.size));
  if (g.kind !== "ok" && g.kind !== "not_found") {
    let { status: y, laneLost: _ } = $e(g);
    return h(y, null, { laneLost: _ });
  }
  if (
    ((S = g.kind === "ok" ? g.content.length : 0),
    g.kind === "not_found" ||
      g.content.length !== e.size ||
      hashSha256(g.content) !== e.sha256)
  )
    return h("stale_entry", null, {
      understated:
        g.kind === "ok" &&
        g.content.length > e.size &&
        !(l !== void 0 && matchesAgreedDigest(l.agreed, computeContentDigests(g.content))),
    });
  let I = s.digestFile ?? ((y, _, N) => P9(y, _, N, a)),
    k = await Le(t, r, e.path, I);
  if (k.kind === "unreadable") return h("failed");
  let b = k.kind === "present" ? k.digest : null;
  L = b === null;
  let Q =
    c !== null &&
    b === null &&
    matchesAgreedDigest(c, { sha256: e.sha256, gitBlobId: computeGitBlobId(g.content) });
  if (b === null && (l?.trashedAt !== void 0 || (c !== null && !Q))) l = void 0;
  if (b !== null && l?.trashedAt !== void 0) {
    let { trashedAt: y, ..._ } = l;
    l = { ..._, agreed: { kind: "unknown" } };
  }
  let Z = ie(l, b);
  m =
    Z === "changed" &&
    b !== null &&
    l !== void 0 &&
    s.cleanFilterBlobIds !== void 0 &&
    (await o3n(l.agreed, e.path, s.cleanFilterBlobIds, d));
  let be = m ? "unchanged" : Z,
    U = async (y) => (await z(f, a), y),
    ee = (y) => {
      let _ = A(y);
      return (
        n(`dirSync pull: row not applied (${_ ?? "not an errno"})`),
        h("failed", null, { refused: ze.has(_ ?? "") })
      );
    };
  if (
    !Q &&
    l !== void 0 &&
    (b === null || b.sha256 !== e.sha256) &&
    matchesAgreedDigest(l.agreed, { sha256: e.sha256, gitBlobId: computeGitBlobId(g.content) })
  ) {
    let y = m && b !== null && normalizeFileMode(b.mode) === e.mode;
    return U(
      h(
        "already_equal",
        y
          ? {
              ...stripSentField(l),
              etag: g.etag,
              ...(e.gen !== void 0 && { peerGen: e.gen }),
            }
          : Ke(l, e, g.etag),
      ),
    ).catch(ee);
  }
  let te = oe({
      localChange: be,
      localSha256: b?.sha256 ?? null,
      localMode: b?.mode ?? null,
      incomingSha256: e.sha256,
      incomingMode: e.mode,
    }),
    ne = Xce(e.path),
    re = te === "apply" && ne ? "conflict" : te;
  if (re === "conflict" && !ne && s.bothChanged === "skip")
    return h("skipped_local_change");
  let ae = b?.mode ?? null;
  try {
    let y = (E) =>
        l?.sent?.includes(e.sha256) === !0 ? { ...E, origin: "pushed" } : E,
      _ = (E) => y(ve(e, g.etag, E));
    switch (re) {
      case "already_equal":
        return await U(h("already_equal", _(await fe(f, a, w.rel))));
      case "apply": {
        let E = await je({
          host: f,
          anchor: a,
          entry: e,
          gitRoot: t,
          realRoot: r,
          dest: w,
          trackedRel: O,
          localDigest: b,
          agreedMode: l?.stat?.mode ?? null,
          content: g.content,
          writeFile: p,
          digestFile: I,
          kept: u,
        });
        if (E.kind !== "raced")
          return await U(
            h("applied", _(E.stat), {
              bytesWritten: E.kind === "written" ? g.content.length : 0,
              replacedUnkept: E.kind === "written" && E.replacedUnkept,
              ...(E.kind === "written" &&
                E.keptAt !== null && {
                  change: {
                    path: e.path,
                    status: "applied",
                    copyPath: null,
                    keptAt: E.keptAt,
                    ...(l !== void 0 &&
                      b !== null &&
                      matchesAgreedDigest(l.agreed, b) &&
                      Ve(l) && { keptEarlierCloudVersion: !0 }),
                  },
                }),
            }),
          );
        if (s.bothChanged === "skip") return h("skipped_local_change");
        ((ae = E.observedMode), (L = E.observedMode === null));
        break;
      }
      case "conflict":
        break;
    }
    let N = await Je({
      host: f,
      anchor: a,
      entry: e,
      gitRoot: t,
      realRoot: r,
      trackedHere: o,
      content: g.content,
      shadowedMode: ae,
      deps: s,
      writeFile: p,
      digestFile: I,
    });
    return N === null
      ? h("failed")
      : await U(
          h("conflict", y(He(e, g.etag)), {
            change: { path: e.path, status: "conflict", copyPath: N.copyPath },
            bytesWritten: N.written ? g.content.length : 0,
          }),
        );
  } catch (y) {
    return ee(y);
  }
}
var ze = new Set([
  "WORKING_ANCHOR_UNAVAILABLE",
  "WORKING_DEST_REFUSED",
  "WORKING_LANDED_OUTSIDE",
  "WORKING_PARENT_ESCAPE",
  "WORKING_PARENT_NOT_DIRECTORY",
  "WORKING_RESOLVES_OUTSIDE",
]);
async function je({
  host: e,
  anchor: t,
  entry: r,
  gitRoot: a,
  realRoot: i,
  dest: o,
  trackedRel: c,
  localDigest: s,
  agreedMode: d,
  content: u,
  writeFile: f,
  digestFile: l,
  kept: p,
}) {
  if (s === null) {
    let w = F(null, r.mode);
    if (!(await V(() => f(a, o.abs, u, t, J(t, w))))) {
      let T = await l(a, i, r.path);
      if (T === null)
        return (await ce(o.abs), { kind: "raced", observedMode: null });
      if (T.sha256 !== r.sha256) return { kind: "raced", observedMode: T.mode };
      return (
        await R(t, o.abs, c),
        { kind: "mode_only", stat: await G(e, t, o.rel, F(T.mode, r.mode, d)) }
      );
    }
    return (
      await K(t, o, u, c),
      {
        kind: "written",
        stat: await ue(e, t, o.rel, w),
        keptAt: null,
        replacedUnkept: !1,
      }
    );
  }
  if (s.sha256 === r.sha256)
    return (
      await R(t, o.abs, c),
      { kind: "mode_only", stat: await G(e, t, o.rel, F(s.mode, r.mode, d)) }
    );
  let S = s.mode & 511,
    m = Ue(o);
  if (!(await V(() => f(a, m.abs, u, t, J(t, S))))) {
    let w = Error("staging name taken");
    throw ((w.code = "EEXIST"), w);
  }
  let h = () => t.unlink(m.rel).catch(() => {});
  try {
    await K(t, m, u, c === null ? null : m.rel);
    let w = await ue(e, t, m.rel, S).catch(() => null);
    if (w === null) {
      if (!(await t.lstat(m.rel)).isFile())
        return (await h(), { kind: "raced", observedMode: s.mode });
      throw Error("staged file could not be read back");
    }
    let O = await p.shouldKeep(r.path, s),
      T = await l(a, i, r.path),
      B = O && T !== null && T.sha256 === s.sha256,
      g = B ? await p.keep(r.path, T.content, T.mode) : null,
      I = !1;
    try {
      let k = B ? await l(a, i, r.path) : T;
      if (k !== null && k.sha256 === r.sha256)
        return (
          await h(),
          await R(t, o.abs, c),
          {
            kind: "mode_only",
            stat: await G(e, t, o.rel, F(k.mode, r.mode, d)),
          }
        );
      if (k === null)
        return (
          await h(),
          await ce(o.abs),
          { kind: "raced", observedMode: null }
        );
      if (k.sha256 !== s.sha256)
        return (await h(), { kind: "raced", observedMode: k.mode });
      let b = k.mode === s.mode ? w : await pe(e, t, m.rel, k.mode & 511);
      if (b === null)
        throw Error("staged file did not take the mode it replaces");
      return (
        await R(t, o.abs, c),
        await z(e, t),
        await t.rename(m.rel, o.rel),
        (I = !0),
        await K(t, o, u, c),
        { kind: "written", stat: b, keptAt: g, replacedUnkept: O && g === null }
      );
    } finally {
      if (!I && g !== null) await p.discard(g).catch(() => {});
    }
  } catch (w) {
    throw (await h(), w);
  }
}
async function z(e, t) {
  let r = (o) => {
      if (W(o) || A(o) === "ENOTDIR") return null;
      throw o;
    },
    [a, i] = await Promise.all([
      e.fs.lstat(t.realRoot, { bigint: !0 }).catch(r),
      t.lstat("").catch(r),
    ]);
  if (
    a === null ||
    i === null ||
    !a.isDirectory() ||
    a.dev !== i.dev ||
    a.ino !== i.ino
  ) {
    let o = Error("sync root is gone");
    throw ((o.code = "WORKING_ROOT_GONE"), o);
  }
}
function Ye(e, t) {
  return async (r, a, i, o, c) => (await z(e, o), t(r, a, i, o, c));
}
async function ce(e) {
  if (await me(e)) {
    let t = Error("local file unreadable");
    throw ((t.code = "WORKING_LOCAL_UNREADABLE"), t);
  }
}
async function Je({
  host: e,
  anchor: t,
  entry: r,
  gitRoot: a,
  realRoot: i,
  trackedHere: o = !1,
  content: c,
  shadowedMode: s,
  deps: d,
  writeFile: u,
  digestFile: f,
}) {
  let l = F(s, r.mode),
    p = !1,
    S = await se({
      path: r.path,
      now: d.now(),
      tryCandidate: async (L) => (
        (p = await V(() => u(a, C(a, L), c, t, J(t, l)))),
        p || (await f(a, i, L))?.sha256 === r.sha256
      ),
    });
  if (S === null) return null;
  let m = { abs: C(a, S), rel: S };
  if (p) await K(t, m, c, o ? m.rel : null);
  else await R(t, m.abs, o ? m.rel : null);
  if (!p || t.backend === "by_name") await pe(e, t, m.rel, l);
  return { copyPath: S, written: p };
}
function Ve(e) {
  return (
    e.origin === "pulled" &&
    e.gen === void 0 &&
    (e.sent === void 0 || e.sent.length === 0)
  );
}
export {
  Ban,
  jan,
  Wan,
  Eze,
  Q9n,
  EFt,
  aOe,
  Gan,
  Vpt,
  Z9n,
  lOe,
  qan,
  Kpt,
  Xce,
  zan,
  e3n,
};
