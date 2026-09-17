// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { SW } from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { execFileNoThrowWithCwd } from "./git-exec-hardening.js";
import { CONVENTIONAL_DEFAULT_BRANCH_NAMES } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import {
  createConcurrencyLimiter,
  isSignalAborted,
  readDirSyncGitPins,
  withGitNamePins,
  getDirSyncGitExe,
  DIR_SYNC_GIT_ARGS,
  dirSyncGitEnv,
  partitionSeedPaths,
  resolveRealPath,
  readSeedFile,
  allUnlessAborted,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isSafePortablePath, openTreeAnchor, createFileSystemHost } from "../../01-核心基础设施/安全文件系统(FS加固)/hardened-fs-primitives.js";
import { computeGitBlobId } from "../../01-核心基础设施/共享小工具-未细化/sync-state-schema.js";
import { createLinkedAbortSignal } from "../../01-核心基础设施/共享小工具-未细化/linked-abort-signal.js";
import { readlink } from "fs/promises";
import { join as U } from "path";
import { finished } from "stream/promises";
var LOCAL_DIVERGENCE_DEADLINE_MS = 5000,
  Y = 1500,
  G = 8,
  j = 16777216,
  v = ["MERGE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD"],
  J = "120000",
  w = /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/,
  K = /^0{40}(?:0{24})?$/,
  V =
    /^:([0-7]{6}) ([0-7]{6}) ([0-9a-f]{40}(?:[0-9a-f]{24})?) ([0-9a-f]{40}(?:[0-9a-f]{24})?) ([A-Z])[0-9]*$/;
async function probeLocalDivergence({
  gitRoot: e,
  remoteName: i,
  revision: r,
  deadlineMs: t,
  signal: o,
}) {
  let a = Date.now();
  if (isSignalAborted(o)) return { probedAtMs: a, durationMs: 0, verdict: _("aborted") };
  let d = Number.isFinite(t) ? Math.max(1, Math.floor(t)) : 1,
    u = createLinkedAbortSignal(o, { timeoutMs: d, refTimer: !0 });
  try {
    let c = await nullOnAbort(readDirSyncGitPins(e), u.signal);
    if (c === null)
      return {
        probedAtMs: a,
        durationMs: Date.now() - a,
        verdict:
          r === "HEAD" && !isSignalAborted(o)
            ? { reason: "detached_head", diverged: !0, remote: null }
            : _(failureCause(o, u.signal, "deadline")),
      };
    let s = unservedLayout(c);
    if (s !== null)
      return {
        probedAtMs: a,
        durationMs: Date.now() - a,
        verdict: { reason: s, diverged: !0, remote: null },
      };
    if (r === "HEAD")
      return {
        probedAtMs: a,
        durationMs: Date.now() - a,
        verdict: { reason: "detached_head", diverged: !0, remote: null },
      };
    let m = await q({ gitRoot: e, signal: u.signal, timeoutMs: d }, i, r);
    return {
      probedAtMs: a,
      durationMs: Date.now() - a,
      verdict: m.reason === "probe_failed" ? _(failureCause(o, u.signal, m.failure)) : m,
    };
  } catch (c) {
    if (!isSignalAborted(u.signal)) logError(c);
    return {
      probedAtMs: a,
      durationMs: Date.now() - a,
      verdict: _(failureCause(o, u.signal, "threw")),
    };
  } finally {
    u.cleanup();
  }
}
async function q(e, i, r) {
  let t = await nullOnAbort(z(e, `refs/remotes/${i}/${r}`), e.signal);
  if (t === null || "detail" in t)
    return B(t?.detail ?? "deadline or abort during the first reads");
  if (t.remoteSha === null)
    return {
      reason: "remote_ref_unknown",
      diverged: !0,
      remote: null,
      fallback: await nullOnAbort(Z(e, t, i), e.signal),
    };
  let o = await nullOnAbort(L(e, t, t.remoteSha), e.signal);
  if (o === null || "detail" in o)
    return B(o?.detail ?? "deadline or abort during the comparison");
  let { remote: a, head: d, headDiffers: u } = o,
    c = t.operationInProgress
      ? "in_progress_op"
      : t.detached
        ? "detached_head"
        : u
          ? "tracked_changes"
          : t.headSha === a.commit
            ? "clean"
            : a.placement === "behind"
              ? "head_behind_remote"
              : "head_not_at_remote";
  return c === "clean"
    ? { reason: c, diverged: !1, remote: a, head: d }
    : { reason: c, diverged: !0, remote: a, head: d };
}
async function z(e, i) {
  let [r, t, o, a, d, u] = await Promise.all([
    runProbeGit(e, ["symbolic-ref", "-q", "HEAD"]),
    runProbeGit(e, ["rev-parse", "-q", "--verify", "HEAD"]),
    runProbeGit(e, ["show-ref", "--verify", "--hash", i]),
    runProbeGit(
      e,
      ["cat-file", "--batch-check=%(objectname)"],
      v
        .map(
          (b) => `${b}
`,
        )
        .join(""),
    ),
    runProbeGit(e, P("HEAD")),
    resolveRealPath(e.gitRoot),
  ]);
  if (isSignalAborted(e.signal))
    return { detail: "deadline or abort during the first reads" };
  let c = t.stdout.trim(),
    s = a.exitCode === 0 ? ee(a.stdout) : null,
    m = d.exitCode === 0 ? D(d.stdout) : null;
  if (
    (r.exitCode !== 0 && r.exitCode !== 1) ||
    t.exitCode !== 0 ||
    !w.test(c) ||
    o.exitCode === void 0 ||
    s === null ||
    m === null ||
    u === null
  )
    return {
      detail: `symbolic-ref ${r.exitCode}, rev-parse ${t.exitCode}, show-ref ${o.exitCode}, cat-file ${a.exitCode}, diff-index ${d.exitCode}, realpath ${u === null ? "failed" : "ok"}`,
    };
  let p = await Promise.all(
      v.filter((b, C) => s[C]).map((b) => runProbeGit(e, ["show-ref", "--exists", b])),
    ),
    f = o.stdout.trim();
  return {
    headSha: c,
    detached: r.exitCode === 1,
    operationInProgress: p.some((b) => b.exitCode !== 2),
    headRecords: m,
    realRoot: u,
    remoteSha: o.exitCode === 0 && w.test(f) ? f : null,
  };
}
async function L(e, { headSha: i, headRecords: r, realRoot: t }, o) {
  let { gitRoot: a } = e,
    d = o === i,
    [u, c, s] = await Promise.all([
      runProbeGit(e, [
        "rev-parse",
        `${o}^{commit}`,
        `${o}^{tree}`,
        `${i}^{tree}`,
        "--is-shallow-repository",
      ]),
      d ? Promise.resolve(null) : runProbeGit(e, P(o)),
      d
        ? Promise.resolve(null)
        : runProbeGit({ ...e, timeoutMs: Math.min(e.timeoutMs, Y) }, [
            "merge-base",
            i,
            o,
          ]),
    ]);
  if (isSignalAborted(e.signal))
    return { detail: "deadline or abort during the remote reads" };
  let [m, p, f, b] = u.stdout.split(/\r?\n/),
    C = c === null ? r : c.exitCode === 0 ? D(c.stdout) : null;
  if (
    u.exitCode !== 0 ||
    m === void 0 ||
    p === void 0 ||
    f === void 0 ||
    !w.test(m) ||
    !w.test(p) ||
    !w.test(f) ||
    C === null
  )
    return {
      detail: `rev-parse ${u.exitCode}, diff-index ${c?.exitCode ?? "reused"}`,
    };
  let E = new Map([...r, ...C].filter(x).map((g) => [g.path, g.newMode])),
    y = [...E.keys()];
  await using k =
    y.length === 0
      ? null
      : await openTreeAnchor(createFileSystemHost(), { gitRoot: a, realRoot: t }).catch(
          (g) => (
            logForDebugging(`dirSync divergence: tree anchor not opened (${A(g) ?? l(g)})`),
            null
          ),
        );
  let N = createConcurrencyLimiter(
      G,
      async (g) => (
        e.signal.throwIfAborted(),
        [g, k === null ? null : await F(a, t, g, E.get(g), k)]
      ),
    ),
    M = await allUnlessAborted(
      y.map((g) => N(g)),
      e.signal,
    );
  if (M === null || isSignalAborted(e.signal))
    return { detail: "deadline or abort during the digests" };
  let T = new Map(M),
    I = X(i, m, s, b !== "false");
  if (I.placement === "unknown")
    logForDebugging(
      `dir-sync: placement of HEAD unknown (merge-base ${s?.exitCode ?? "killed"}, shallow ${b ?? "unread"})`,
      { level: "warn" },
    );
  return {
    remote: {
      commit: m,
      tree: p,
      differingTrackedCount: partitionSeedPaths(
        C.filter((g) => g.status !== "D" && R(g, T)),
        (g) => g.path,
        () => null,
        () => !0,
      ).eligible.length,
      digestedPathCount: y.length,
      ...I,
    },
    head: { commit: i, tree: f },
    headDiffers: r.some((g) => R(g, T)),
  };
}
function X(e, i, r, t) {
  let o = r?.exitCode === 0 ? r.stdout.trim() : null;
  if (r === null || e === i) return { placement: "at", mergeBase: i };
  if (o === e || o === i)
    return { placement: o === e ? "behind" : "ahead", mergeBase: o };
  if (t) return { placement: "unknown", mergeBase: null };
  if (o !== null && w.test(o)) return { placement: "diverged", mergeBase: o };
  return r.exitCode === 1
    ? { placement: "unrelated", mergeBase: null }
    : { placement: "unknown", mergeBase: null };
}
async function Z(e, i, r) {
  try {
    let t = await Q(e, r);
    if (t === null) return null;
    let o = await L(e, i, t.sha);
    if ("detail" in o)
      return (
        logForDebugging(`dir-sync: default-branch comparison abandoned (${o.detail})`, {
          level: "warn",
        }),
        null
      );
    return { ref: t.name, branch: t.branch, remote: o.remote, head: o.head };
  } catch (t) {
    if (!isSignalAborted(e.signal)) logError(t);
    return null;
  }
}
async function Q(e, i) {
  let r = `refs/remotes/${i}/`,
    t = `${r}HEAD`,
    o = await runProbeGit(e, [
      "for-each-ref",
      "--format=%(refname)%00%(objectname)%00%(symref)",
      t,
      ...CONVENTIONAL_DEFAULT_BRANCH_NAMES.map((s) => `${r}${s}`),
    ]);
  if (o.exitCode !== 0) return null;
  let a = new Map(
      o.stdout
        .split(/\r?\n/)
        .map((s) => s.split("\x00"))
        .flatMap(([s, m, p]) =>
          s === void 0 || m === void 0 || !w.test(m)
            ? []
            : [[s, { sha: m, target: p ?? "" }]],
        ),
    ),
    d = a.get(t),
    u = [
      ...(d !== void 0 && d.target !== t && d.target.startsWith(r)
        ? [{ branch: d.target.slice(r.length), sha: d.sha }]
        : []),
      ...CONVENTIONAL_DEFAULT_BRANCH_NAMES.flatMap((s) => {
        let m = a.get(`${r}${s}`);
        return m === void 0 ? [] : [{ branch: s, sha: m.sha }];
      }),
    ],
    [c] = u;
  return c === void 0 ? null : { name: `${r}${c.branch}`, ...c };
}
function B(e) {
  return (
    logForDebugging(`dir-sync: local divergence probe failed (${e})`, { level: "warn" }),
    _("git")
  );
}
function _(e) {
  return { reason: "probe_failed", diverged: !1, remote: null, failure: e };
}
function unservedLayout(e) {
  if (e.kind !== "refused") return null;
  switch (e.why) {
    case "linked_worktree":
      return "linked_worktree";
    case "submodule":
    case "git_dir":
    case "temp_root":
      return "unserved_layout";
    default:
      return null;
  }
}
function failureCause(e, i, r) {
  return isSignalAborted(e) ? "aborted" : isSignalAborted(i) ? "deadline" : r;
}
async function runProbeGit({ gitRoot: e, signal: i, timeoutMs: r }, t, o) {
  let a = await H(e);
  if (a === null) return { stdout: "" };
  return execFileNoThrowWithCwd(getDirSyncGitExe(), S(t), {
    cwd: e,
    env: a,
    extendEnv: !1,
    abortSignal: i,
    timeout: r,
    maxBuffer: j,
    preserveOutputOnError: !1,
    ...(o === void 0 ? { stdin: "ignore" } : { input: o }),
  });
}
async function countProbeGitOutput(
  { gitRoot: e, signal: i, timeoutMs: r },
  t,
  { input: o, limitBytes: a },
) {
  let d = 0,
    u = !1,
    c = await H(e);
  if (c === null) return { bytes: d, overLimit: u };
  try {
    let s = SW(getDirSyncGitExe(), S(t), {
      cwd: e,
      env: c,
      extendEnv: !1,
      signal: i,
      timeout: r,
      input: o,
      stdout: "pipe",
      stderr: "ignore",
    });
    (s.stdin?.on("error", () => {}),
      s.stdout?.on("data", (b) => {
        if (((d += b.length), !u && d > a)) ((u = !0), s.kill());
      }));
    let m = s.stdout ? finished(s.stdout).catch(() => {}) : Promise.resolve(),
      p = await s;
    await m;
    let f =
      !p.timedOut &&
      !p.isCanceled &&
      p.signal === void 0 &&
      typeof p.exitCode === "number";
    return { bytes: d, overLimit: u, exitCode: f ? p.exitCode : void 0 };
  } catch (s) {
    if (!isSignalAborted(i))
      logForDebugging(`dir-sync: could not run git to count its output (${l(s)})`, {
        level: "error",
      });
    return { bytes: d, overLimit: u };
  }
}
async function listPathsChangedFromHead(e) {
  let [i, r] = await Promise.all([runProbeGit(e, P("HEAD")), resolveRealPath(e.gitRoot)]),
    t = i.exitCode === 0 ? D(i.stdout) : null;
  if (t === null || r === null || isSignalAborted(e.signal)) return null;
  let o = t.filter(x);
  await using a =
    o.length === 0
      ? null
      : await openTreeAnchor(createFileSystemHost(), { gitRoot: e.gitRoot, realRoot: r }).catch(
          (f) => (
            logForDebugging(`dirSync divergence: tree anchor not opened (${A(f) ?? l(f)})`),
            null
          ),
        );
  let d = createConcurrencyLimiter(
      G,
      async (f) => (
        e.signal.throwIfAborted(),
        [
          f.path,
          a === null ? null : await F(e.gitRoot, r, f.path, f.newMode, a),
        ]
      ),
    ),
    u = await nullOnAbort(
      allUnlessAborted(
        o.map((f) => d(f)),
        e.signal,
      ),
      e.signal,
    );
  if (u === null || isSignalAborted(e.signal)) return null;
  let c = new Map(u),
    s = t.some((f) => f.status === "U"),
    m = t.some((f) => f.status === "A" && f.newId === null),
    p =
      !s && m
        ? await runProbeGit(e, [
            "diff-files",
            "--name-only",
            "--diff-filter=A",
            "--no-renames",
            "--ignore-submodules=all",
          ])
        : null;
  if (isSignalAborted(e.signal)) return null;
  return {
    paths: t.filter((f) => R(f, c)).map((f) => f.path),
    stashBlocked:
      s || (p !== null && (p.exitCode !== 0 || p.stdout.trim() !== "")),
  };
}
function S(e) {
  return [
    "--no-optional-locks",
    ...DIR_SYNC_GIT_ARGS,
    "-c",
    "advice.graftFileDeprecated=false",
    ...e,
  ];
}
async function H(e) {
  let i = await readDirSyncGitPins(e),
    r = i.kind === "pinned" ? withGitNamePins(i, { filterDriversOff: !1 }) : null;
  if (r === null) return null;
  return {
    ...dirSyncGitEnv(r),
    GIT_GRAFT_FILE: "/dev/null",
    GIT_NO_REPLACE_OBJECTS: "1",
  };
}
function P(e) {
  return [
    "diff-index",
    "-z",
    "--no-renames",
    "--no-ext-diff",
    "--ignore-submodules=all",
    e,
    "--",
  ];
}
async function nullOnAbort(e, i) {
  let r = () => {};
  try {
    return await Promise.race([
      e,
      new Promise((t) => {
        if (
          ((r = () => t(null)),
          i.addEventListener("abort", r, { once: !0 }),
          i.aborted)
        )
          t(null);
      }),
    ]);
  } finally {
    (i.removeEventListener("abort", r), e.catch(() => {}));
  }
}
async function F(e, i, r, t, o) {
  if (!isSafePortablePath(r)) return null;
  if (t === J)
    try {
      return computeGitBlobId(await readlink(U(e, r), "buffer"));
    } catch {}
  let a = await readSeedFile(e, i, r, o);
  return a.kind === "read" ? computeGitBlobId(a.content) : null;
}
function ee(e) {
  let i = e.split(/\r?\n/);
  if (i.length !== v.length) return null;
  let r = i.map((t, o) =>
    w.test(t) ? !0 : t === `${v[o]} missing` ? !1 : null,
  );
  return r.includes(null) ? null : r.map((t) => t === !0);
}
function D(e) {
  let i = e.split("\x00");
  if (i.length % 2 !== 1 || i.at(-1) !== "") return null;
  let r = Array.from({ length: (i.length - 1) / 2 }, (t, o) => {
    let a = V.exec(i[2 * o] ?? ""),
      d = i[2 * o + 1];
    if (a === null || d === void 0 || d === "") return null;
    let [, u = "", c = "", s = "", m = "", p = ""] = a;
    return {
      path: d,
      status: p,
      oldMode: u,
      newMode: c,
      oldId: s,
      newId: K.test(m) ? null : m,
    };
  });
  return r.includes(null) ? null : r.filter((t) => t !== null);
}
function x(e) {
  return e.status === "M" && e.oldMode === e.newMode && e.newId === null;
}
function R(e, i) {
  return !x(e) || i.get(e.path) !== e.oldId;
}
export { LOCAL_DIVERGENCE_DEADLINE_MS, probeLocalDivergence, unservedLayout, failureCause, runProbeGit, countProbeGitOutput, listPathsChangedFromHead, nullOnAbort };
