// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getCwd } from "../../01-核心基础设施/核心工具-未归类/cwd-context.js";
import { fromEnum, fromEnumOpt } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { isNestedGitLabProject, repoDetectionGuards, resolveRemote, detectCurrentRepositoryWithHost } from "../工作树-Git/git-repository-detection.js";
import { findGitRoot, getBranch } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { isGitHubHost } from "../../01-核心基础设施/核心工具-路径与平台/git-host-utils.js";
import { checkGate_CACHED_OR_BLOCKING } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import {
  createConcurrencyLimiter,
  isSelfHostedPoolId,
  getDefaultRemoteEnvironment,
  isSignalAborted,
  isFolderSyncEnabled,
  readDirSyncGitPins,
  resolveRealPath,
  allUnlessAborted,
  listUntrackedCandidates,
  isFolderEligibleForDirSync,
  hasUnreadableGitEntry,
  createPathWithholdClassifier,
  isInsideBareGitRepository,
  isDirSyncPullSupported,
  getMaxBundleBytes,
  probeRepositorySize,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { DEFAULT_MAX_SYNC_FILES, MAX_SYNC_UPLOAD_BYTES, isSafePortablePath } from "../../01-核心基础设施/安全文件系统-FS加固/hardened-fs-primitives.js";
import { LOCAL_DIVERGENCE_DEADLINE_MS, probeLocalDivergence, unservedLayout, failureCause, runProbeGit, countProbeGitOutput, listPathsChangedFromHead, nullOnAbort } from "../工作树-Git/local-divergence-probe.js";
import { createFilterAttributedChecker } from "../工作树-Git/dir-sync-git-repository.js";
import { MAX_OVERLAY_BUNDLE_BYTES } from "../云会话-Teleport/overlay-bundle.js";
import { createLinkedAbortSignal } from "../../01-核心基础设施/核心工具-并发与缓存/linked-abort-signal.js";
import { formatFileSize } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-7axvc6rn.js";
import { lstat } from "fs/promises";
import { join as R } from "path";
var B = 15000,
  E = 1048576,
  x = 8;
function M({
  host: e,
  bundlingAvailable: o,
  pullSupported: t,
  repositoryTooLarge: s,
  verdict: r,
  overlayAvailable: l,
}) {
  if (e === null)
    return !o
      ? { kind: "deferred", why: "bundling_unavailable" }
      : s
        ? { kind: "repository_too_large" }
        : { kind: "bundle" };
  if (r === null) return { kind: "deferred", why: "no_remote" };
  if (r.reason === "probe_failed") return { kind: "probe_failed" };
  if (r.reason === "linked_worktree" || r.reason === "unserved_layout")
    return { kind: "deferred", why: "layout_unserved" };
  if (r.reason === "in_progress_op")
    return { kind: "deferred", why: "operation_in_progress" };
  if (
    e === "github" &&
    (r.reason === "clean" || r.reason === "head_behind_remote")
  )
    return { kind: "remote_ref" };
  if (r.reason === "clean")
    return { kind: "deferred", why: "unpinned_other_host" };
  if (!t) return { kind: "deferred", why: "pull_unsupported" };
  if (
    l &&
    e === "github" &&
    (r.reason === "tracked_changes" || r.reason === "head_not_at_remote") &&
    (r.remote.placement === "at" || r.remote.placement === "ahead")
  )
    return { kind: "overlay" };
  if (!o) return { kind: "deferred", why: "bundling_unavailable" };
  if (s) return { kind: "repository_too_large" };
  return { kind: "bundle" };
}
function D(e) {
  return !e.packOverLimit &&
    e.packBytes + e.changedTrackedBytes + E <= e.capBytes
    ? "fits"
    : "too_large";
}
function forecastKeyOf(e) {
  return e.offer
    ? "offered"
    : e.reason === "deferred"
      ? "deferred"
      : e.reason === "probe_failed"
        ? "failed"
        : "not_offered";
}
async function T({
  explicitRef: e,
  poolId: o,
  signal: t,
  onMeasuring: s = () => {},
  deadlineMs: r = B,
  folderMaxFiles: l,
}) {
  let d = Date.now(),
    m;
  try {
    let f = isSelfHostedPoolId(o ?? getDefaultRemoteEnvironment().id);
    m = createLinkedAbortSignal(t, { timeoutMs: r, refTimer: !0 });
    let p = m,
      c = await nullOnAbort(
        G(
          {
            explicitRef: e,
            selfHostedPool: f,
            onMeasuring: s,
            folderMaxFiles: l,
          },
          p.signal,
        ).catch(
          (w) => (logError(w), { offer: k("threw"), facts: null, forecast: null }),
        ),
        p.signal,
      ),
      y =
        c === null || isSignalAborted(p.signal) ? k(failureCause(t, p.signal, "deadline")) : c.offer;
    return {
      key: forecastKeyOf(y),
      reason: y.reason,
      offer: y,
      lines: !y.offer && y.line !== null ? [y.line] : [],
      facts: c?.facts ?? null,
      forecast: c?.forecast ?? null,
      elapsedMs: Date.now() - d,
    };
  } catch (f) {
    logError(f);
    let p = k("threw");
    return {
      key: "failed",
      reason: p.reason,
      offer: p,
      lines: [],
      facts: null,
      forecast: null,
      elapsedMs: Date.now() - d,
    };
  } finally {
    m?.cleanup();
  }
}
async function decideSyncOffer(e) {
  let o = await T(e);
  return (W(o.offer, o, o.elapsedMs), o.offer);
}
async function G(
  { explicitRef: e, selfHostedPool: o, onMeasuring: t, folderMaxFiles: s },
  r,
) {
  let l = findGitRoot(getCwd());
  if (l === null)
    return V(
      { explicitRef: e, selfHostedPool: o, onMeasuring: t, maxFiles: s },
      r,
    );
  let d = o
    ? "self_hosted_pool"
    : e !== void 0
      ? "named_revision"
      : repoDetectionGuards().blocked()
        ? "untrusted_workspace"
        : null;
  if (d !== null)
    return {
      offer: O(d, e),
      facts: null,
      forecast: { kind: "deferred", why: d },
    };
  let m = a.CCR_FORCE_BUNDLE === !0 ? null : await detectCurrentRepositoryWithHost(),
    f = m === null || isNestedGitLabProject(m) ? null : isGitHubHost(m.host) ? "github" : "other",
    [p, c] = await Promise.all([
      a.CCR_ENABLE_BUNDLE === !0
        ? Promise.resolve(!0)
        : checkGate_CACHED_OR_BLOCKING("tengu_ccr_bundle_seed_enabled"),
      f === null ? Promise.resolve(null) : H(l, r),
    ]);
  if (isSignalAborted(r)) return { offer: k("aborted"), facts: null, forecast: null };
  if (c === null) {
    let v = await nullOnAbort(readDirSyncGitPins(l), r);
    if (v === null) return { offer: k("aborted"), facts: null, forecast: null };
    if (unservedLayout(v) !== null)
      return {
        offer: O("layout_unserved", e),
        facts: null,
        forecast: { kind: "deferred", why: "layout_unserved" },
      };
  }
  let y = f === null || c?.diverged === !0 ? await probeRepositorySize() : null,
    w = {
      host: f,
      bundlingAvailable: p,
      pullSupported: isDirSyncPullSupported(),
      repositoryTooLarge: y?.tooLarge === !0,
      verdict: c,
      overlayAvailable: !0,
    },
    S = !1,
    P = () => {
      if (!S) ((S = !0), t());
    },
    C = await N(M(w), w, { gitRoot: l, signal: r, timeoutMs: B }, P),
    b = (v) => ({ offer: v, facts: w, forecast: C });
  switch (C.kind) {
    case "probe_failed":
      return b(k(c?.reason === "probe_failed" ? c.failure : "git"));
    case "repository_too_large":
      return b(K(y?.sizeBytes ?? null, f));
    case "deferred":
      return b(O(C.why, void 0));
    case "remote_ref":
    case "overlay":
    case "bundle": {
      P();
      let v = { gitRoot: l, signal: r, timeoutMs: B },
        [_, F] = await Promise.all([
          C.kind === "bundle"
            ? U(v, getMaxBundleBytes())
            : Promise.resolve({ kind: "not_needed" }),
          j(v),
        ]);
      if (_.kind === "failed" || F === null)
        return b(k(isSignalAborted(r) ? "aborted" : "git"));
      if (_.kind === "blocked") return b(O("index_state", void 0));
      if (_.kind === "unborn") return b(O("unborn", void 0));
      if (_.kind === "measured" && D(_.seed) === "too_large")
        return b({
          offer: !1,
          reason: "too_large",
          seed: _.seed,
          untracked: F,
          line: q(_.seed, f, c?.reason ?? null),
        });
      if (F.seedBytes > MAX_SYNC_UPLOAD_BYTES)
        return b({
          offer: !1,
          reason: "untracked_too_large",
          untracked: F,
          seed: _.kind === "measured" ? _.seed : null,
          line: `File sync is not offered for this checkout: ${Y(F.seedBytes)}.`,
        });
      return b(
        _.kind === "measured"
          ? { offer: !0, reason: "fits", seed: _.seed, untracked: F }
          : { offer: !0, reason: "not_size_bound", untracked: F },
      );
    }
  }
}
async function N(e, o, t, s) {
  let r = o.verdict;
  if (
    e.kind !== "overlay" ||
    r === null ||
    (r.reason !== "tracked_changes" && r.reason !== "head_not_at_remote") ||
    r.remote.placement !== "ahead"
  )
    return e;
  s();
  let l = await countProbeGitOutput(
    t,
    [
      "pack-objects",
      "--revs",
      "--stdout",
      "--thin",
      "--delta-base-offset",
      "-q",
    ],
    {
      input: `HEAD
^${r.remote.commit}
`,
      limitBytes: MAX_OVERLAY_BUNDLE_BYTES - E,
    },
  );
  return l.overLimit || l.exitCode !== 0
    ? M({ ...o, overlayAvailable: !1 })
    : e;
}
async function I(e) {
  return (
    (await runProbeGit(e, ["rev-parse", "-q", "--verify", "HEAD^{commit}"])).exitCode ===
    1
  );
}
async function H(e, o) {
  let [t, s] = await Promise.all([resolveRemote(e), getBranch()]);
  if (t === null) return null;
  return (
    await probeLocalDivergence({
      gitRoot: e,
      remoteName: t.name,
      revision: s,
      deadlineMs: LOCAL_DIVERGENCE_DEADLINE_MS,
      signal: o,
    })
  ).verdict;
}
async function U(e, o) {
  let [t, s] = await Promise.all([
    countProbeGitOutput(
      e,
      [
        "pack-objects",
        "--revs",
        "--stdout",
        "--thin",
        "--delta-base-offset",
        "-q",
      ],
      {
        input: `HEAD^{tree}
`,
        limitBytes: o,
      },
    ),
    z(e),
  ]);
  if (isSignalAborted(e.signal)) return { kind: "failed" };
  if (s === null || (!t.overLimit && t.exitCode !== 0)) {
    if (!isSignalAborted(e.signal) && (await I(e))) return { kind: "unborn" };
    return (
      logForDebugging(
        `dir-sync: seed measurement failed (pack-objects ${t.overLimit ? "stopped at the limit" : (t.exitCode ?? "killed")}, changed tracked files ${s === null ? "unreadable" : "read"})`,
        { level: "warn" },
      ),
      { kind: "failed" }
    );
  }
  if (s.stashBlocked) return { kind: "blocked" };
  return {
    kind: "measured",
    seed: {
      packBytes: t.bytes,
      packOverLimit: t.overLimit,
      changedTrackedBytes: s.bytes,
      changedTrackedCount: s.count,
      capBytes: o,
    },
  };
}
async function z(e) {
  let o = await listPathsChangedFromHead(e);
  if (o === null) return null;
  let t = await allUnlessAborted(
    o.paths.map((s) => A(e, s)),
    e.signal,
  );
  return t === null
    ? null
    : {
        bytes: t.reduce((s, r) => s + r, 0),
        count: o.paths.length,
        stashBlocked: o.stashBlocked,
      };
}
async function j(e) {
  let o = await resolveRealPath(e.gitRoot),
    t =
      o === null
        ? null
        : await listUntrackedCandidates({
            gitRoot: e.gitRoot,
            realRoot: o,
            signal: e.signal,
            uploadFilter: createPathWithholdClassifier(e.gitRoot, { realRoot: o }),
            filterAttributed: createFilterAttributedChecker(e.gitRoot),
          });
  if (t === null || t.kind === "failed") {
    if (!isSignalAborted(e.signal))
      logForDebugging("dir-sync: untracked survey failed before consent", { level: "warn" });
    return null;
  }
  let s =
    t.kind === "too_many_untracked"
      ? await allUnlessAborted(
          t.eligiblePaths.map((r) => A(e, r)),
          e.signal,
        )
      : [...t.chosen, ...t.overBudget].map(({ size: r }) => r);
  return s === null
    ? null
    : {
        eligibleCount: t.eligibleUntrackedCount,
        seedBytes: s.reduce((r, l) => r + l, 0),
      };
}
var A = createConcurrencyLimiter(x, async (e, o) => {
  if ((e.signal.throwIfAborted(), !isSafePortablePath(o))) return 0;
  try {
    let t = await lstat(R(e.gitRoot, o));
    return t.isFile() ? t.size : 0;
  } catch {
    return 0;
  }
});
function Y(e) {
  return `${formatFileSize(e)} of untracked files exceed the ${formatFileSize(MAX_SYNC_UPLOAD_BYTES)} one sync upload carries; add a .gitignore entry or commit the ones you need`;
}
function q(e, o, t) {
  let s = e.packBytes + e.changedTrackedBytes,
    r = formatFileSize(e.capBytes),
    l = e.packOverLimit
      ? `more than the ${r} limit`
      : s > e.capBytes
        ? `about ${formatFileSize(s)}, over the ${r} limit`
        : `about ${formatFileSize(s)}, within ${formatFileSize(E)} of the ${r} limit`;
  if (o === null)
    return `File sync is not offered for this checkout: with no GitHub remote to clone, a cloud session starts from an upload of your working tree, and this one would be ${l}.`;
  let { why: d, remedy: m } =
      t === "detached_head"
        ? {
            why: "it is not on a branch",
            remedy: "check out a branch, then start again to be asked",
          }
        : t === "remote_ref_unknown"
          ? {
              why: "its branch is not on the remote as last fetched here",
              remedy: "push the branch, then start again to be asked",
            }
          : {
              why: "its tracked state differs from the remote's as last fetched here",
              remedy:
                "commit and push your changes, then start again to be asked",
            },
    f = "This launch will not carry your local changes";
  return `File sync is not offered for this checkout: ${d}, so a synced session would have to start from an upload of your working tree, and this one would be ${l}. ${o === "github" ? `${f}; ${m}.` : `${f}.`}`;
}
function K(e, o) {
  let t = e === null ? "" : ` (${formatFileSize(e)} of packed git objects)`;
  return {
    offer: !1,
    reason: "repository_too_large",
    sizePackBytes: e,
    line:
      o === null
        ? `File sync is not offered here: this repository is too large to upload to a cloud session${t}.`
        : `File sync is not offered here: this repository is too large${t} to start a cloud session from your working tree; the session starts from the remote without your local changes and does not sync.`,
  };
}
async function V(
  { explicitRef: e, selfHostedPool: o, onMeasuring: t, maxFiles: s = DEFAULT_MAX_SYNC_FILES },
  r,
) {
  if (!isFolderSyncEnabled() || !isFolderEligibleForDirSync(getCwd()))
    return {
      offer: { offer: !1, reason: "folder_not_opted_in", line: null },
      facts: null,
      forecast: null,
    };
  let l = o
    ? "self_hosted_pool"
    : e !== void 0
      ? "named_revision"
      : !isDirSyncPullSupported()
        ? "pull_unsupported"
        : null;
  if (l !== null)
    return {
      offer: O(l, e),
      facts: null,
      forecast: { kind: "deferred", why: l },
    };
  let d = getCwd();
  if (await isInsideBareGitRepository(d))
    return {
      offer: {
        offer: !1,
        reason: "folder_is_repository",
        line: "File sync is not offered for this folder: it is (inside) a bare git repository, not a project folder.",
      },
      facts: null,
      forecast: null,
    };
  if (await hasUnreadableGitEntry(d))
    return {
      offer: {
        offer: !1,
        reason: "folder_is_repository",
        line: "File sync is not offered for this folder: it has a .git entry that could not be read as a git checkout (a link, or something git did not write).",
      },
      facts: null,
      forecast: null,
    };
  t();
  let {
      ignoreMatcherFrom: m,
      listFolderCandidates: f,
      NOTHING_WITHHELD: p,
      platformIgnoresCase: c,
      readRootIgnoreLines: y,
      rootIgnoreRefusalClause: w,
    } = await import("./NOTHING_WITHHELD.gfjx54p2.js"),
    S = await y(d),
    P =
      S.kind === "unusable"
        ? { ok: !1, reason: "ignore_unreadable" }
        : await f({
            root: d,
            ignores: m(S.lines, { ignoreCase: c(d) }),
            withheldOf: p,
            signal: r,
            maxFiles: s,
          });
  if (isSignalAborted(r)) return { offer: k("aborted"), facts: null, forecast: null };
  if (!P.ok)
    return {
      offer:
        P.reason === "too_many_files"
          ? {
              offer: !1,
              reason: "folder_too_many_files",
              line: `File sync is not offered for this folder: it holds more than ${s.toLocaleString()} files, more than one sync can carry.`,
            }
          : {
              offer: !1,
              reason: "folder_unreadable",
              line:
                S.kind === "unusable"
                  ? `File sync is not offered for this launch: the .gitignore in this folder ${w(S)}.`
                  : "File sync is not offered for this launch: this folder could not be read (details in the debug log).",
            },
      facts: null,
      forecast: null,
    };
  return {
    offer: { offer: !0, reason: "folder", files: P.listing.files.length },
    facts: null,
    forecast: null,
  };
}
function O(e, o) {
  let t = {
    named_revision: `with ${o?.flag ?? "a named revision"} the session starts from that revision as the remote has it, not from this checkout`,
    operation_in_progress:
      "a merge, cherry-pick or revert is in progress in this checkout",
    self_hosted_pool:
      "a session on a self-hosted runner pool does not sync files",
    unpinned_other_host:
      "a session cloned from this Git host starts from the branch as the host has it, which a checkout cannot be kept in step with yet",
    pull_unsupported:
      "this platform cannot take a cloud session's files back yet",
    bundling_unavailable:
      "starting a session from an upload of your working tree is switched off, and this checkout would need one",
    no_remote: "no remote of this checkout could be read to compare it with",
    index_state:
      "the index has unmerged or intent-to-add entries, which an upload of your working tree cannot include until they are resolved or added",
    untrusted_workspace:
      "this folder's trust has not been confirmed, so the checkout was not examined",
    unborn:
      "this repository has no commit yet \u2014 commit the files the session should start from (git add <files> && git commit, keeping keys and local secrets out with a .gitignore), then start again",
    layout_unserved:
      "this checkout is a linked working tree (git worktree add) or keeps its git directory elsewhere, which directory sync does not run git in yet \u2014 start once from the repository's main checkout to choose",
  }[e];
  return {
    offer: !1,
    reason: "deferred",
    deferral: e,
    line: `File sync is not available for this launch (${t}); you will be asked on a launch that can sync.`,
  };
}
function k(e) {
  return {
    offer: !1,
    reason: "probe_failed",
    failure: e,
    line:
      e === "aborted"
        ? null
        : e === "deadline"
          ? "File sync is not offered for this launch: this checkout could not be measured in the time allowed."
          : "File sync is not offered for this launch: this checkout could not be measured (details in the debug log).",
  };
}
function W(e, o, t) {
  let s = o.facts,
    r = "seed" in e ? e.seed : null,
    l = "untracked" in e ? e.untracked : null;
  if (
    (logEvent("tengu_dir_sync_offer_probe", {
      outcome: fromEnum(e.reason),
      forecast: fromEnumOpt(o.forecast?.kind),
      deferral: e.reason === "deferred" ? fromEnum(e.deferral) : void 0,
      host: s === null ? void 0 : fromEnum(s.host ?? "none"),
      divergence: fromEnumOpt(s?.verdict?.reason),
      failure: e.reason === "probe_failed" ? fromEnum(e.failure) : void 0,
      pack_bytes: r?.packBytes,
      pack_over_limit: r?.packOverLimit,
      changed_tracked_bytes: r?.changedTrackedBytes,
      changed_tracked_paths: r?.changedTrackedCount,
      cap_bytes: r?.capBytes,
      untracked_eligible: l?.eligibleCount,
      untracked_seed_bytes: l?.seedBytes,
      folder_files: e.reason === "folder" ? e.files : void 0,
      size_pack_bytes:
        e.reason === "repository_too_large"
          ? (e.sizePackBytes ?? void 0)
          : void 0,
      duration_ms: t,
    }),
    !e.offer && e.line !== null)
  ) {
    if (
      (logForDebugging(
        `dir-sync: sync not offered before consent (${e.reason}${e.reason === "probe_failed" ? `: ${e.failure}` : e.reason === "deferred" ? `: ${e.deferral}` : ""})`,
      ),
      e.reason !== "deferred")
    )
      logFeatureSad("ccr_dir_sync_mode_prompt", `not_offered_${e.reason}`);
  }
}
export { forecastKeyOf, decideSyncOffer };
