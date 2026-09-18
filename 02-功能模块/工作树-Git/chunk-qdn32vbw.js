// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { checkPathPermission, createStructuredPatch, GIT_DIFF_COMMAND_TIMEOUT_MS, MAX_DIFF_BYTES, MAX_HUNK_LINES, computeWorkspaceDiff, getDiffBaseRef, getGitTopLevel, parseGitNumstat } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { GIT_HARDENED_ARGS, execFileNoThrowWithCwd } from "./git-exec-hardening.js";
import { gitExe } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { matchingRuleForInput } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { validateUntrustedPath, getUntrustedPathReason, REMOTE_READ_OPEN_FLAGS, bindCanonicalPathToHandle, isCanonicalPathContained, readHandleBounded } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { constants } from "fs";
import { open, realpath } from "fs/promises";
import { basename, dirname, isAbsolute, join } from "path";
async function X(t) {
  let n = dirname(t),
    i = [basename(t)];
  for (let r = 0; r < 64; r++) {
    try {
      let s = await realpath(n);
      return join(s, ...i);
    } catch (s) {
      if (s?.code !== "ENOENT") return;
    }
    let e = dirname(n);
    if (e === n) return;
    (i.unshift(basename(n)), (n = e));
  }
  return;
}
var J = 2000000,
  V = new Set(["100644", "100755", "100664"]),
  D = 1e7,
  Z = 1e4,
  q = { perFileMs: 5000, totalMs: 1e4 },
  Q = REMOTE_READ_OPEN_FLAGS | (constants.O_NOFOLLOW ?? 0);
function tt(t) {
  if (t.length === 0 || t.startsWith('"')) return !1;
  if (/[\u0000-\u001f\u007f]/.test(t)) return !1;
  if (t.startsWith("-") || t.startsWith(":") || isAbsolute(t)) return !1;
  if (t.includes(" => ")) return !1;
  return t.split("/").every((i) => i !== "" && i !== "." && i !== "..");
}
var W = /^[0-9a-f]{40,64}$/;
function w(t) {
  return ["--literal-pathspecs", ...GIT_HARDENED_ARGS, ...t];
}
function E(t) {
  return { cwd: t, timeout: GIT_DIFF_COMMAND_TIMEOUT_MS, preserveOutputOnError: !1 };
}
async function et(t, n, i) {
  let { stdout: r, code: e } = await execFileNoThrowWithCwd(
    gitExe(),
    w(["ls-tree", "-r", "-l", "-z", "--full-tree", n, "--", ...i]),
    { ...E(t), maxBuffer: 1e7 },
  );
  if (e !== 0) return null;
  let s = new Map();
  for (let a of r.split("\x00")) {
    if (!a) continue;
    let l = a.match(/^(\d{6}) (\S+) ([0-9a-f]{40,64}) +(\d+|-)\t(.+)$/s);
    if (!l) continue;
    let [, f = "", o, c = "", p, _] = l;
    if (_ === void 0) continue;
    s.set(_, {
      mode: f,
      oid: c,
      size: o === "blob" && p !== "-" ? Number(p) : -1,
    });
  }
  return s;
}
async function nt(t, n) {
  let { stdout: i, code: r } = await execFileNoThrowWithCwd(
    gitExe(),
    w(["ls-files", "--stage", "-z", "--", ...n]),
    { ...E(t), maxBuffer: 1e7 },
  );
  if (r !== 0) return null;
  let e = new Map(),
    s = new Set();
  for (let o of i.split("\x00")) {
    if (!o) continue;
    let c = o.match(/^(\d{6}) ([0-9a-f]{40,64}) (\d+)\t(.+)$/s);
    if (!c) continue;
    let [, p = "", _ = "", b, g] = c;
    if (g === void 0) continue;
    if (b !== "0") {
      s.add(g);
      continue;
    }
    e.set(g, { mode: p, oid: _, size: -1 });
  }
  for (let o of s) e.delete(o);
  if (e.size === 0) return e;
  let a = dedupe(Array.from(e.values(), (o) => o.oid)),
    l = await execFileNoThrowWithCwd(
      gitExe(),
      w(["cat-file", "--batch-check=%(objectname) %(objectsize)"]),
      {
        ...E(t),
        maxBuffer: 1e7,
        input:
          a.join(`
`) +
          `
`,
      },
    );
  if (l.code !== 0) return null;
  let f = new Map();
  for (let o of l.stdout.split(`
`)) {
    let c = o.match(/^([0-9a-f]{40,64}) (\d+)$/);
    if (c && c[1] !== void 0) f.set(c[1], Number(c[2]));
  }
  for (let [o, c] of e) {
    let p = f.get(c.oid);
    if (p === void 0) e.delete(o);
    else c.size = p;
  }
  return e;
}
async function I(t, n) {
  if (!W.test(n)) return null;
  let { stdout: i, code: r } = await execFileNoThrowWithCwd(gitExe(), w(["cat-file", "blob", n]), {
    ...E(t),
    maxBuffer: D + 65536,
    stripFinalNewline: !1,
  });
  return r === 0 ? i : null;
}
async function it(t, n) {
  let i;
  try {
    i = await open(t, Q);
  } catch (r) {
    return r?.code === "ENOENT" ? { kind: "missing" } : { kind: "restricted" };
  }
  try {
    let r = await i.stat({ bigint: !0 });
    if (!r.isFile() || r.nlink !== 1n || r.dev === 0n || r.ino === 0n)
      return { kind: "restricted" };
    let e;
    try {
      e = await realpath(t);
    } catch {
      return { kind: "restricted" };
    }
    let s = await bindCanonicalPathToHandle(i, r, e);
    if (s === void 0) return { kind: "restricted" };
    if (
      ((e = s), !checkPathPermission(e, n, "read").allowed || matchingRuleForInput(e, n, "read", "ask") !== null)
    )
      return { kind: "restricted" };
    if (getUntrustedPathReason(e, n.trustedNetworkDirectories) !== void 0)
      return { kind: "restricted" };
    if (!(await isCanonicalPathContained(e, n))) return { kind: "restricted" };
    let a = await readHandleBounded(i, D, r.size);
    if (a.overLimit) return { kind: "too-large" };
    return { kind: "ok", content: a.bytes.toString("utf-8") };
  } catch {
    return { kind: "restricted" };
  } finally {
    await i.close().catch(() => {});
  }
}
async function H(t, n) {
  let i;
  try {
    i = await realpath(t);
  } catch (r) {
    i = r?.code === "ENOENT" ? await X(t) : void 0;
  }
  return (
    i !== void 0 &&
    getUntrustedPathReason(i, n.trustedNetworkDirectories) === void 0 &&
    (await isCanonicalPathContained(i, n))
  );
}
async function rt(t, n) {
  let { stdout: i, code: r } = await execFileNoThrowWithCwd(
    gitExe(),
    w([
      "check-attr",
      "-z",
      "text",
      "eol",
      "filter",
      "working-tree-encoding",
      "--",
      ...n,
    ]),
    { ...E(t), maxBuffer: 1e7 },
  );
  if (r !== 0) return null;
  let e = new Map(),
    s = i.split("\x00");
  for (let a = 0; a + 2 < s.length; a += 3) {
    let l = s[a],
      f = s[a + 1],
      o = s[a + 2];
    if (l === void 0 || f === void 0 || o === void 0) continue;
    let c = e.get(l);
    if (!c)
      ((c = {
        text: "unspecified",
        eol: "unspecified",
        filter: "unspecified",
        workingTreeEncoding: "unspecified",
      }),
        e.set(l, c));
    if (f === "text") c.text = o;
    else if (f === "eol") c.eol = o;
    else if (f === "filter") c.filter = o;
    else if (f === "working-tree-encoding") c.workingTreeEncoding = o;
  }
  return e;
}
async function st(t) {
  let { stdout: n, exitCode: i } = await execFileNoThrowWithCwd(
    gitExe(),
    w(["config", "--get", "core.autocrlf"]),
    E(t),
  );
  if (i !== 0) return !1;
  let r = n.trim().toLowerCase();
  return r === "true" ? "true" : r === "input" ? "input" : !1;
}
function ot(t) {
  return t.slice(0, 8000).includes("\x00");
}
function ut(t, n, i, r) {
  if (!n) return t;
  if (n.filter !== "unspecified" || n.workingTreeEncoding !== "unspecified")
    return "unsupported";
  if (n.text === "unset") return t;
  let e;
  if (n.text === "set") e = !1;
  else if (n.text === "auto") e = !0;
  else if (n.text === "unspecified")
    if (i === "true" || i === "input") e = !0;
    else if (n.eol === "crlf" || n.eol === "lf") e = !0;
    else return t;
  else return t;
  if (
    !t.includes(`\r
`)
  )
    return t;
  if (
    e &&
    (ot(t) ||
      r.includes(`\r
`))
  )
    return t;
  return t.replaceAll(
    `\r
`,
    `
`,
  );
}
function ct(t, n, i) {
  let r = createStructuredPatch("a", "b", t, n, "", "", {
    context: 3,
    maxEditLength: Z,
    timeout: i,
  });
  if (!r) return null;
  return r.hunks
    .map((e) => ({
      oldStart: e.oldStart,
      oldLines: e.oldLines,
      newStart: e.newStart,
      newLines: e.newLines,
      lines: e.lines.filter((s) => !s.startsWith("\\")),
    }))
    .filter((e) => e.lines.length > 0);
}
function at(t) {
  let n = MAX_HUNK_LINES,
    i = [];
  for (let r of t) {
    if (n <= 0) break;
    let e = r.lines.slice(0, n);
    ((n -= e.length), i.push({ ...r, lines: e }));
  }
  return i;
}
async function buildWorkspaceDiffResponse(t, n, i = q) {
  let r = await getGitTopLevel();
  if (r === null) return { diff: null };
  let e = await computeWorkspaceDiff(t);
  if (e === null) return { diff: null };
  let s = await getGitTopLevel();
  if (s === null || s !== r) return { diff: null };
  let a = getDiffBaseRef(e),
    l = (u) => ({
      diff: {
        stats: e.stats,
        perFileStats: Array.from(e.perFileStats, ([m, y]) => ({
          path: m,
          ...y,
        })),
        hunks: u.hunks,
        skippedLarge: u.skippedLarge,
        restricted: u.restricted,
        source: e.source,
      },
    }),
    f = [];
  for (let [u, m] of e.perFileStats) {
    if (m.isUntracked || m.isBinary || !tt(u)) continue;
    f.push(u);
  }
  if (f.length === 0) return l({ hunks: [], skippedLarge: [], restricted: [] });
  let o = a === "--cached";
  if (!o && a !== "HEAD" && !W.test(a))
    return l({ hunks: [], skippedLarge: [], restricted: [] });
  let c = o ? await nt(s, f) : await et(s, a, f);
  if (c === null) return l({ hunks: [], skippedLarge: [], restricted: [] });
  let p = null;
  if (o) {
    let u = await execFileNoThrowWithCwd(
      gitExe(),
      w([
        "--no-optional-locks",
        "-c",
        "diff.relative=false",
        "diff",
        "--numstat",
      ]),
      { ...E(s), maxBuffer: 1e7 },
    );
    if (u.code !== 0) return l({ hunks: [], skippedLarge: [], restricted: [] });
    p = new Set(parseGitNumstat(u.stdout, Number.POSITIVE_INFINITY).perFileStats.keys());
  }
  let _ = o ? null : await rt(s, f),
    b = o ? !1 : await st(s),
    g = [],
    S = [],
    A = [],
    M = J,
    F = i.totalMs;
  for (let u of f) {
    await new Promise((d) => setImmediate(d));
    let m = join(s, u),
      y = validateUntrustedPath(m, m, n.trustedNetworkDirectories);
    if (!y.ok) {
      S.push(u);
      continue;
    }
    if (
      !y.pathsToCheck.every(
        (d) => checkPathPermission(d, n, "read").allowed && matchingRuleForInput(d, n, "read", "ask") === null,
      )
    ) {
      S.push(u);
      continue;
    }
    let h = c.get(u);
    if (h && !V.has(h.mode)) continue;
    if (h && (h.size < 0 || h.size > D)) {
      g.push(u);
      continue;
    }
    let P = "",
      T;
    if (o) {
      if (!h || p?.has(u)) continue;
      if (!(await H(m, n))) {
        S.push(u);
        continue;
      }
      let d = await I(s, h.oid);
      if (d === null) continue;
      T = d;
    } else {
      let d = await it(m, n);
      if (d.kind === "restricted") {
        S.push(u);
        continue;
      }
      if (d.kind === "too-large") {
        g.push(u);
        continue;
      }
      if (d.kind === "missing") {
        if (!h) continue;
        if (!(await H(m, n))) {
          S.push(u);
          continue;
        }
      }
      if (h) {
        let k = await I(s, h.oid);
        if (k === null) continue;
        P = k;
      }
      if (d.kind === "missing") T = "";
      else {
        let k = ut(d.content, _?.get(u), b, P);
        if (k === "unsupported") continue;
        T = k;
      }
    }
    if (F <= 0) {
      g.push(u);
      continue;
    }
    let C = Date.now(),
      R = ct(P, T, Math.min(i.perFileMs, F));
    if (((F -= Date.now() - C), R === null)) {
      g.push(u);
      continue;
    }
    let L = at(R);
    if (L.length === 0) continue;
    let N = L.reduce(
      (d, k) => d + k.lines.reduce((G, v) => G + v.length + 1, 0),
      0,
    );
    if (N > MAX_DIFF_BYTES || N > M) {
      g.push(u);
      continue;
    }
    ((M -= N), A.push({ path: u, hunks: L }));
  }
  return l({ hunks: A, skippedLarge: g, restricted: S });
}
export { buildWorkspaceDiffResponse };
