// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { sleep, withDeadline } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { toCompatSessionId, toInfraSessionId } from "../权限系统/chunk-ynkf3yy4.js";
import { Ve, yt, l, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { RENAME_FALLBACK_ERRNOS, renameWithRetry } from "../../01-核心基础设施/安全文件系统(FS加固)/atomic-file-write.js";
import { registerCleanup, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize, truncateToCodePoints, firstLine, countOccurrences } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { replaceControlChars, formatSingleLineText } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { getProjectDir, canonicalizePath } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { normalizePathSegment } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { hashSha256 } from "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import { Cs, hf } from "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import { getEnvVarCaseInsensitive, getProcessStartTimeAsync } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import {
  createConcurrencyLimiter,
  isSignalAborted,
  rootLaptopDirSyncRegistry,
  isCheckoutLayoutSupported,
  isDirSyncFastForwardEnabled,
  isDirSyncStreamingEnabled,
  builderGit,
  readGitLayout,
  layoutStillHolds,
  parseGitVersion,
  hardenedSpawnEnv,
  reachRootsOf,
  BuilderGitProbes,
  SEED_WORKER_JOURNAL_PATH,
  checkSeedPath,
  MAX_WORKING_FILE_BYTES,
  isSensitivePath,
  isSensitivePathVariant,
  normalizeUnicodeForm,
  isSensitivePathAnySpelling,
  runPinnedGit,
  partitionSeedPaths,
  resolveRealPath,
  TYPED_AHEAD_GRACE_MS,
  WEDGED_MS,
  RESULT_SETTLE_MS,
  POLL_WINDOW_MS,
  POLL_STEP_MS,
  MAX_PEER_REPUBLISH_ATTEMPTS,
  PEER_CLAIM_GRACE_MS,
  DEFAULT_SHUTDOWN_TIMEOUT_MS,
  PULL_UNBOUND_MESSAGE,
  getSyncDirection,
  SYNC_RECORD_REMOVED_MESSAGE,
  SYNC_RECORD_UNREADABLE_MESSAGE,
  ENGINE_UNSUPPORTED_MESSAGE,
  describeDirSyncWithdrawn,
  getGitRootDirSyncConsent,
  stripFileSyncPrefix,
  formatFileSyncStoppedLine,
  createSyncedFileLaneClient,
  isWindowsLikePlatform,
  hasWindowsReservedPathComponent,
  createPathWithholdClassifier,
  GIT_OBJECT_ID_REGEX,
  CLAUDE_REF_PREFIX,
  isClaudeSessionRef,
  parseLsTreeOutput,
  FIRST_UPLOAD_RETRY_LADDER_MS,
  MAX_LISTED_COMMITS,
  MAX_TEXT_CODE_UNITS,
  MAX_LISTED_SKIPPED_FILES,
  MAX_LISTED_CONFLICTED_COMMITS,
  MAX_CONFLICT_CODE_UNITS,
  MAX_LISTED_APPLIED_TURNS,
  isValidGitBranchName,
  isKnownSyncSkipReason,
  MAX_HELD_BASES,
  stageChangedPaths,
  areStagedCopiesIntact,
  isGitAttributesPath,
  collectGitAttributesPaths,
  checkAncestorSymlinks,
  GIT_USAGE_EXIT_CODE,
  GIT_PATHSPEC_ENV,
  GIT_STASH_IDENTITY_ENV,
  seedIndexFromTreePaths,
  chunkPathsForArgv,
  createHardenedGitRunner,
  parseDiffTreeRawOutput,
  isPathGitWouldWrite,
  isWindowsShortNameAlias,
  isSameAttributesSnapshot,
  readGitInfoAttributesFile,
  excludeDirectoryPaths,
  formatBranchWithSubject,
  stageIndexRemovals,
  getSkipWorktreePaths,
  isDirSyncPullSupported,
  formatUnreadableSettingsSuffix,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { JOURNAL_VERSION_WITH_NOTE, MAX_USER_EVENT_UUIDS, parseSyncJournal, normalizeFileMode, encodeSyncJournal } from "../文件同步-Sync/sync-journal.js";
import { computeGitBlobId } from "../../01-核心基础设施/共享小工具-未细化/sync-state-schema.js";
import { MAX_SYNC_UPLOAD_BYTES, isSafePortablePath, parseTaggedPathListing, readFileWithDigests, openTreeAnchor, createFileSystemHost } from "../../01-核心基础设施/安全文件系统(FS加固)/hardened-fs-primitives.js";
import {
  DEFAULT_GIT_TIMEOUT_MS,
  runDirSyncGit,
  openBlobReader,
  mergeGitConfigEnv,
  readAlternatesLender,
  readBoundedTextFile,
  writeSessionRefs,
  deleteSessionRefs,
  createFilterAttributedChecker,
  createFilterFreeBlobIdHasher,
  getFilterFreePaths,
  createCleanFilterBlobIds,
  DEFAULT_MAX_BUNDLE_BYTES,
  INCOMING_PACK_PREFIX,
  DELIVERED_IDS_SUFFIX,
  createBundle,
  receiveBundle,
  readDeliveredObjectIds,
} from "../Git-Worktree/dir-sync-git-repository.js";
import {
  CONFLICTED_COPY_MARKER,
  MAX_CONFLICTED_COPY_ATTEMPTS,
  buildConflictedCopyPath,
  getAncestorPaths,
  partitionCaseCollisions,
  isProtectedClaudePath,
  isReservedDirShortName,
  isRefusedFilePath,
  isRefusedSyncPath,
  isDestinationAllowed,
  getDestinationRefusalReason,
  isDangerousFileName,
  isGitRepositoryRoot,
  applyPulledEntry,
} from "../文件同步-Sync/chunk-tqwnv5vj.js";
import {
  createDirChangeFeed,
  createDirSyncStreamer,
  MAX_SENT_UPLOADS,
  MAX_INSTALLED_SINCE_UPLOAD,
  requiresAnnouncement,
  getStartBasisCommits,
  getHistoryRoots,
  createGitSessionRecord,
  readGitSessionRecord,
  GitSessionRecordInvalidError,
  writeGitSessionRecord,
  writeGitSessionRecordStreamed,
  getLatestSentUpload,
  getNextGeneration,
  recordSpentGeneration,
  hasDownApplyCapacity,
  getMergedDownApplied,
  getMergedFastForwardHeads,
  getLastHeadForBranch,
  recordFastForward,
  applyPeerNote,
  recordReceivedUpload,
  recordAppliedTurn,
  recordSentUpload,
} from "../目录同步(dir-sync)/chunk-zbxyj64j.js";
import { getSafeReadOpenFlags } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { segmentScopeSkip } from "../文件同步-Sync/sync-folder-scan.js";
import { getSideGitDirPath, buildSessionRefName, listSessionRefs, UNREADABLE_CARRIER_STATUS, createDirSyncJournalTransport } from "../目录同步(dir-sync)/dir-sync-git-lane.js";
import { truncateWithEllipsis } from "../../01-核心基础设施/共享小工具-未细化/truncate-with-ellipsis.js";
import { sanitizePathSegment, getDirSyncRecordPath, resolveDirSyncRecordLocation } from "../../01-核心基础设施/共享小工具-未细化/dir-sync-record-path.js";
import { createHoverRestOptions } from "../../01-核心基础设施/共享小工具-未细化/hover-rest-transcript.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { countMatching, dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import {
  lstat as al,
  mkdtemp,
  readFile,
  realpath as lh,
  rm as dh,
  unlink as rl,
  writeFile as uh,
} from "fs/promises";
import { tmpdir } from "os";
import {
  dirname as ll,
  isAbsolute as dl,
  join as Gr,
  relative as fh,
  resolve as hh,
} from "path";
import { createHash as es, randomBytes as ts } from "crypto";
import { constants as rn } from "fs";
import {
  lstat as Dn,
  mkdir as Un,
  open as Or,
  readdir as no,
  rename as Wl,
  rm as wn,
  stat as Ul,
  utimes,
  writeFile as vo,
} from "fs/promises";
import {
  basename as zl,
  dirname as To,
  isAbsolute as ns,
  join as ce,
  relative as Kl,
  sep as ql,
} from "path";
var rs = [
    "core.autocrlf",
    "core.eol",
    "core.safecrlf",
    "core.ignorecase",
    "core.precomposeunicode",
    "core.symlinks",
    "core.filemode",
    "core.longpaths",
  ],
  Yl = `* -filter
`,
  qi = /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/,
  Xl = /^(?:ref: refs\/[^\n]+|[0-9a-f]{40}(?:[0-9a-f]{24})?)\n?$/;
async function os(e) {
  let t = AbortSignal.timeout(nd),
    r = e.signal === void 0 ? t : AbortSignal.any([e.signal, t]),
    o = e.probes?.screenMemo !== void 0 ? e.probes : new BuilderGitProbes("operation"),
    s = await Vl({ ...e, signal: r }, o);
  if (s.kind !== "refused") return s;
  if (e.signal?.aborted === !0)
    return se("aborted", "the snapshot was cancelled");
  return t.aborted
    ? se(
        "git_error",
        "the snapshot ran out of time (a very large scope, or a file git reads in the checkout is blocking, e.g. a FIFO)",
      )
    : s;
}
async function Vl(e, t) {
  let r = Date.now(),
    { gitRoot: o, layout: s, sideGitDir: a, signal: d } = e;
  if (!(await layoutStillHolds(s, [])))
    return se(
      "git_error",
      "the checkout\u2019s git directory changed since it was read; read the layout again",
    );
  if (
    !(await ls([
      ce(s.workTree, ".gitattributes"),
      ce(s.commonDir, "info", "attributes"),
    ]))
  )
    return se("unreadable_path", "an attributes file is not a regular file");
  let f = createHardenedGitRunner(o, s, d, void 0, t),
    p = await f(["rev-parse", "-q", "--verify", "HEAD^{commit}"]);
  if (p.code !== 0)
    return p.exitCode === 1
      ? se(
          "unborn",
          "HEAD does not name a commit (no commit yet, or a broken ref)",
        )
      : se("git_error", st(p.stderr));
  let y = p.stdout.trim(),
    [w, k, _, E] = await Promise.all([
      f(["ls-files", "-u", "-z"]),
      f(["rev-parse", "--show-object-format"]),
      f(["symbolic-ref", "-q", "HEAD"]),
      f(["config", "--list", "-z"]),
    ]);
  if (w.code !== 0 || k.code !== 0 || E.code !== 0)
    return se("git_error", st(w.stderr || k.stderr || E.stderr));
  if (w.stdout !== "")
    return se("unmerged_index", "the index has unmerged entries");
  if (_.code !== 0 && _.exitCode !== 1)
    return se("git_error", st(_.stderr) || "could not read the current branch");
  let R = _.code === 0 ? _.stdout.trim() : null,
    N = R !== null && R.startsWith("refs/heads/") ? R.slice(11) : null,
    C;
  try {
    let O = await Ql(e.sideRoot, To(a));
    if (O !== null) return se("git_error", O);
    C = await rd(`${a}.lock`);
  } catch (O) {
    return se("git_error", l(O));
  }
  if (C === null)
    return se("busy", "another snapshot of this checkout is being built");
  try {
    return await Jl(
      e,
      {
        real: f,
        headSha: y,
        branch: N,
        format: k.stdout.trim(),
        settings: E.stdout,
        started: r,
      },
      t,
    );
  } finally {
    await C.release();
  }
}
async function Jl(e, t, r) {
  let { gitRoot: o, layout: s, sideGitDir: a, signal: d } = e,
    { real: f, headSha: p, branch: y, started: w } = t,
    k = reachRootsOf(s),
    _ = {
      objectsDir: ce(s.commonDir, "objects"),
      ...(k !== void 0 && { reachRoots: k }),
      objectFormat: t.format === "sha256" ? "sha256" : "sha1",
      settings: ud(t.settings),
      signal: d,
      probes: r,
    },
    E = ce(a, "..", "attrs.git"),
    R = (await Yi(a, _)) ?? (await Yi(E, { ..._, attributes: null }));
  if (R !== null) return se("git_error", R);
  let N = createHardenedGitRunner(
      o,
      {
        gitDir: a,
        commonDir: a,
        workTree: s.workTree,
        configPins: s.configPins,
      },
      d,
      k,
      r,
    ),
    C = new Date();
  await utimes(ce(a, "HEAD"), C, C).catch(() => {});
  let O = ce(a, `run-${process.pid}-${ts(6).toString("hex")}`),
    D = ce(O, "index"),
    pe = { GIT_SHALLOW_FILE: ce(O, "shallow") },
    re = (ge, le, J) => N(ge, { ...pe, ...le }, J),
    te = (ge, le, J) =>
      re(
        ["-c", "core.splitIndex=false", ...ge],
        { GIT_INDEX_FILE: D, ...le },
        J,
      );
  try {
    (await td(a), await Un(O, { recursive: !0, mode: 448 }));
    let ge = await Ao(ce(s.commonDir, "shallow"), pe.GIT_SHALLOW_FILE);
    if (ge.kind === "failed")
      return se("git_error", `the shallow file cannot be used: ${ge.why}`);
    let le = await fd(s.gitDir, D, a);
    if (le !== null) return se("git_error", le);
    if (d?.aborted) return se("aborted", "the snapshot was cancelled");
    let J = await te(["write-tree", "--missing-ok"]);
    if (J.code !== 0) return se("index_state", st(J.stderr || J.stdout));
    let fe = J.stdout.trim();
    if (e.pinCommit !== null && !qi.test(e.pinCommit))
      return se("git_error", "the pin is not an object id");
    if (
      [e.basis, ...(e.alsoParents ?? [])]
        .filter((I) => I !== null)
        .find((I) => !qi.test(I)) !== void 0
    )
      return se("basis_not_held", "a basis or parent is not an object id");
    let [ee, ye] = await Promise.all([
      re(["rev-parse", "-q", "--verify", `${p}^{tree}`]),
      re(["rev-parse", "-q", "--verify", `${e.pinCommit ?? p}^{commit}`]),
    ]);
    if (ee.code !== 0)
      return se("git_error", st(ee.stderr) || "HEAD has no tree");
    if (ye.code !== 0)
      return se(
        "git_error",
        st(ye.stderr) || "the pin commit is not in this repository",
      );
    let Ge = ee.stdout.trim(),
      at = ye.stdout.trim(),
      je = null;
    if (e.basis !== null) {
      let I = await re(["rev-parse", "-q", "--verify", `${e.basis}^{commit}`]);
      if (I.code !== 0)
        return se(
          "basis_not_held",
          "the basis commit is not in this repository",
        );
      je = I.stdout.trim();
    }
    let Ae = [];
    for (let I of e.alsoParents ?? []) {
      let he = await re(["rev-parse", "-q", "--verify", `${I}^{commit}`]);
      if (he.code !== 0)
        return se(
          "basis_not_held",
          `the parent commit ${I.slice(0, 64)} is not in this repository`,
        );
      Ae.push(he.stdout.trim());
    }
    let vt = await re([
        "diff-tree",
        "-r",
        "-z",
        "--no-renames",
        "--ignore-submodules=dirty",
        Ge,
        fe,
      ]),
      Xe = vt.code === 0 ? parseDiffTreeRawOutput(vt.stdout) : null;
    if (Xe === null)
      return se(
        "git_error",
        st(vt.stderr) || "could not list the index against the base",
      );
    let wt = await hd(s.workTree),
      Wt = dedupe(e.scopePaths.filter((I) => I.endsWith("/"))),
      tt = dedupe(e.scopePaths.filter((I) => !I.endsWith("/"))),
      Q = dedupe([...tt, ...Xe.map(({ path: I }) => I)]),
      ze = Q.filter((I) => !isPathGitWouldWrite(I) || isWindowsShortNameAlias(I) || Ji(I, wt) || Qi(I, wt));
    if (ze.length > 0) return se("forged_paths", ze.slice(0, 10).join(", "));
    let bt = Q.filter(
        (I) =>
          I.includes("\uFFFD") || Buffer.from(I, "utf8").toString("utf8") !== I,
      ).sort(),
      Ut = new Set(bt),
      ft = Q.filter((I) => !Ut.has(I) && isSensitivePathVariant(I)).sort(),
      Lt = createHardenedGitRunner(
        o,
        {
          gitDir: E,
          commonDir: E,
          workTree: s.workTree,
          configPins: s.configPins,
        },
        d,
        k,
        r,
      ),
      _t = Q.filter((I) => !Ut.has(I) && !isSensitivePathVariant(I)),
      jt = dedupe([
        ...collectGitAttributesPaths(_t),
        ..._t.filter((I) => I.split("/").at(-1) === ".gitattributes"),
      ]);
    if (getCurrentPlatform() === "windows") {
      for (let I of jt)
        if ((await checkAncestorSymlinks(s.workTree, I)) === "symlink")
          return se("unreadable_path", "an attributes file lies beyond a link");
    }
    let sn = [
      ...jt.map((I) => ce(s.workTree, I)),
      ce(s.commonDir, "info", "attributes"),
    ];
    if (!(await ls(sn)))
      return se("unreadable_path", "an attributes file is not a regular file");
    let ht = await readGitInfoAttributesFile(s.commonDir);
    if (ht.kind !== "none")
      return se(
        "info_attributes",
        ".git/info/attributes sets or unsets filter attributes, or is not a plain file",
      );
    let Rt = dedupe([at, p]),
      mt = getCurrentPlatform(),
      lt = {
        caseBlind: wt || mt === "macos" || mt === "windows",
        normalizationBlind: mt === "macos",
      },
      zt = await Promise.all([
        Zi(f, _t, null, lt),
        ...Rt.map((I, he) =>
          Zi(
            Lt,
            _t,
            {
              commit: I,
              indexPath: ce(O, `attrs-${he}.index`),
              objectsDir: ce(O, `attrs-${he}.objects`),
            },
            lt,
          ),
        ),
      ]);
    if (zt.some((I) => I === "old_git"))
      return se(
        "git_error",
        "a committed .gitattributes is a symbolic link, which the installed git (older than 2.32, or of a version this build cannot read) follows on disk: update git, then retry",
      );
    if (zt.some((I) => I === "overflow"))
      return se(
        "too_many_paths",
        "more changed paths than a snapshot can list (the attribute listing overflowed)",
      );
    let Je = zt.filter(
      (I) => I !== null && I !== "old_git" && I !== "overflow",
    );
    if (Je.length !== zt.length)
      return se("git_error", "could not read the filter attributes");
    if (!isSameAttributesSnapshot(ht, await readGitInfoAttributesFile(s.commonDir)))
      return se(
        "momentary",
        ".git/info/attributes changed while the attributes were read",
      );
    let Ft = dedupe(Je.flat()).sort(),
      St = new Set([...ft, ...Ft]),
      ne = async (I, he) => {
        let Qe = await ds(Lt, p, I);
        if (Qe === null)
          return se(
            "git_error",
            `could not verify the committed entries of the ${he}`,
          );
        let ut = await seedIndexFromTreePaths(te, D, Ge, I);
        if (ut.code !== 0) return se("git_error", st(ut.stderr));
        let Ye = new Map();
        for (let Ze of chunkPathsForArgv(I)) {
          let rt = await te(["ls-files", "-s", "-z", "--", ...Ze], GIT_PATHSPEC_ENV);
          if (rt.code !== 0) return se("git_error", st(rt.stderr));
          rt.stdout
            .split("\x00")
            .filter((Le) => Le !== "")
            .forEach((Le) => {
              let an = Le.indexOf("\t"),
                [Yt = "", On = ""] = Le.slice(0, an).split(" ");
              Ye.set(Le.slice(an + 1), { id: On, mode: Yt });
            });
        }
        return I.some(
          (Ze) =>
            Ye.get(Ze)?.id !== Qe.get(Ze)?.id ||
            Ye.get(Ze)?.mode !== Qe.get(Ze)?.mode,
        )
          ? se(
              "git_error",
              `the committed entries restored for the ${he} are not the ones HEAD holds`,
            )
          : null;
      },
      ae = fe;
    if (St.size > 0) {
      let I = await ne([...St], "withheld paths");
      if (I !== null) return I;
      let he = await te(["write-tree", "--missing-ok"]);
      if (he.code !== 0) return se("index_state", st(he.stderr || he.stdout));
      ae = he.stdout.trim();
    }
    let Tt = await excludeDirectoryPaths(s.workTree, tt),
      me = new Set(Tt),
      At = Tt.filter((I) => !St.has(I) && !Ut.has(I)),
      xe = ce(O, "stage");
    await Un(xe, { recursive: !0, mode: 448 });
    let nt = await stageChangedPaths(s.workTree, xe, At, e.byteCap, e.stageHooks);
    if ("refused" in nt)
      return se(
        nt.tooLarge
          ? "too_large"
          : nt.momentary
            ? "momentary"
            : "unreadable_path",
        nt.refused,
      );
    if (d?.aborted) return se("aborted", "the snapshot was cancelled");
    let ve = nt.entries.reduce(
        (I, he) => I + (he.kind === "file" ? he.bytes : 0),
        0,
      ),
      q = new Set(At),
      Ne = nt.entries
        .filter((I) => I.kind === "hardlinked" && q.has(I.path))
        .map(({ path: I }) => I)
        .sort(),
      Ke = nt.entries.find((I) => I.kind === "changed" && isGitAttributesPath(I.path));
    if (Ke !== void 0)
      return se("unreadable_path", `${Ke.path}: changed while being read`);
    let Ot = nt.entries
        .filter((I) => I.kind === "changed" && q.has(I.path))
        .map(({ path: I }) => I)
        .sort(),
      De = new Set([...Ne, ...Ot]);
    if (De.size > 0) {
      let I = await ne([...De], "hard-linked or unstable paths");
      if (I !== null) return I;
      let he = await te(["write-tree", "--missing-ok"]);
      if (he.code !== 0) return se("index_state", st(he.stderr || he.stdout));
      ae = he.stdout.trim();
    }
    let qe = tt.filter((I) => !me.has(I) && !St.has(I));
    if (qe.length > 0) {
      let I = await sd(te, D, Ge, qe);
      if (I.code !== 0) return se("git_error", st(I.stderr));
    }
    let _n = [...St, ...De],
      An = At.find(
        (I) =>
          !De.has(I) &&
          _n.some((he) => I.startsWith(`${he}/`) || he.startsWith(`${I}/`)),
      );
    if (An !== void 0)
      return se(
        "forged_paths",
        `${An} stands beneath or above a path kept at its committed state (a file became a directory or back); commit or stage that move first`,
      );
    let Kt = nt.entries.filter((I) => I.kind === "symlink"),
      Cn = [];
    for (let I of Kt) {
      let he = I.target.toString("utf8");
      if (!Buffer.from(he, "utf8").equals(I.target))
        return se("path_encoding", `${I.path}: link target is not valid UTF-8`);
      let Qe = await re(["hash-object", "-w", "--stdin"], void 0, he);
      if (Qe.code !== 0) return se("git_error", st(Qe.stderr));
      Cn.push(`120000 ${Qe.stdout.trim()}	${I.path}`);
    }
    if (Cn.length > 0) {
      let I = await te(
        ["update-index", "-z", "--index-info"],
        void 0,
        Cn.map((he) => `${he}\x00`).join(""),
      );
      if (I.code !== 0) return se("git_error", st(I.stderr));
    }
    let kn = new Set(Kt.map(({ path: I }) => I)),
      Dt = nt.entries.flatMap((I) =>
        I.kind === "absent" && q.has(I.path) ? [I.path] : [],
      ),
      Ce = await getSkipWorktreePaths(te, void 0, Dt);
    if (Ce === null) return se("git_error", "could not list the index entries");
    let xt = Dt.filter((I) => !Ce.has(I)),
      En = await stageIndexRemovals(te, void 0, Ge, xt);
    if (En.code !== 0) return se("git_error", st(En.stderr));
    let $t = new Set(Dt),
      qt = At.filter((I) => !De.has(I) && !kn.has(I) && !$t.has(I));
    if (qt.length > 0) {
      let I = new Set(qt),
        he = dd(t.settings)
          ? await getSkipWorktreePaths(te, void 0, qt).then((rt) =>
              rt === null ? null : new Set([...rt].filter((Le) => I.has(Le))),
            )
          : new Set();
      if (he === null)
        return se("git_error", "could not list the index entries");
      if (he.size > 0) {
        let rt = await te(
          ["update-index", "--no-skip-worktree", "-z", "--stdin"],
          void 0,
          [...he].map((Le) => `${Le}\x00`).join(""),
        );
        if (rt.code !== 0) return se("git_error", st(rt.stderr));
      }
      let Qe = createHardenedGitRunner(
          o,
          { gitDir: a, commonDir: a, workTree: xe, configPins: s.configPins },
          d,
          k,
          r,
        ),
        ut = (rt) =>
          Qe(
            [
              "-c",
              "core.splitIndex=false",
              "update-index",
              ...rt,
              "-z",
              "--add",
              "--replace",
              "--stdin",
            ],
            { ...pe, GIT_INDEX_FILE: D },
            qt.map((Le) => `${Le}\x00`).join(""),
          ),
        Ye = await ut(["--ignore-skip-worktree-entries"]),
        Ze = Ye.exitCode === GIT_USAGE_EXIT_CODE ? await ut([]) : Ye;
      if (Ze.code !== 0) return se("git_error", st(Ze.stderr));
      if (!(await areStagedCopiesIntact(xe, nt.copies)))
        return se("momentary", "the staged copies changed while git read them");
    }
    let dt = await te(["write-tree", "--missing-ok"]);
    if (dt.code !== 0) return se("git_error", st(dt.stderr || dt.stdout));
    let Bt = dt.stdout.trim();
    for (let I of dedupe([Bt, ae])) {
      let he = await re(["diff-tree", "-r", "-z", "--no-renames", Ge, I]),
        Qe = he.code === 0 ? parseDiffTreeRawOutput(he.stdout) : null;
      if (Qe === null)
        return se(
          "git_error",
          "could not compare the built tree with the base",
        );
      let ut = Qe.filter(
        ({ path: Ye, status: Ze }) =>
          Ze !== "D" &&
          (St.has(Ye) ||
            De.has(Ye) ||
            isSensitivePathVariant(Ye) ||
            !isPathGitWouldWrite(Ye) ||
            isWindowsShortNameAlias(Ye) ||
            Ji(Ye, wt) ||
            Qi(Ye, wt)),
      );
      if (ut.length > 0)
        return se(
          "forged_paths",
          ut
            .map(({ path: Ye }) => Ye)
            .slice(0, 10)
            .join(", "),
        );
    }
    let Pn = await formatBranchWithSubject(f, p),
      pt = await re(["commit-tree", ae, "-p", p, "-m", `index on ${Pn}`], GIT_STASH_IDENTITY_ENV);
    if (pt.code !== 0) return se("git_error", st(pt.stderr));
    let Rn = await re(
      [
        "commit-tree",
        Bt,
        "-p",
        p,
        "-p",
        pt.stdout.trim(),
        ...(je === null ? [] : ["-p", je]),
        ...Ae.flatMap((I) => ["-p", I]),
        "-m",
        `WIP on ${Pn}`,
      ],
      GIT_STASH_IDENTITY_ENV,
    );
    if (Rn.code !== 0) return se("git_error", st(Rn.stderr));
    return {
      kind: "snapshot",
      branch: y,
      headSha: p,
      indexCommit: pt.stdout.trim(),
      worktreeCommit: Rn.stdout.trim(),
      withheld: {
        credentialNamed: ft,
        filterAttributed: Ft,
        hardLinked: Ne,
        changedDuringRead: Ot,
        notFiles: Wt,
        unspellable: bt,
      },
      stats: { paths: qt.length + xt.length, bytes: ve, ms: Date.now() - w },
    };
  } catch (ge) {
    return se("git_error", l(ge));
  } finally {
    await wn(O, { recursive: !0, force: !0 }).catch(() => {});
    let ge = await no(a).catch(() => []);
    await Promise.all(
      ge
        .filter((le) => /^sharedindex\.[0-9a-f]{40,64}$/.test(le))
        .map((le) => wn(ce(a, le), { force: !0 }).catch(() => {})),
    );
  }
}
async function Ql(e, t) {
  let r = Kl(e, t);
  if (r.startsWith("..") || ns(r))
    return "the side repository is not under its root";
  try {
    await Un(To(e), { recursive: !0 });
  } catch (a) {
    return l(a);
  }
  let o = process.getuid?.(),
    s = To(e);
  for (let a of [zl(e), ...r.split(ql)].filter(Boolean)) {
    s = ce(s, a);
    try {
      let f = await Dn(s);
      if (f.isDirectory()) {
        if (o !== void 0 && f.uid !== o) return `${s} belongs to another user`;
        if (o !== void 0 && (f.mode & 63) !== 0) {
          let p = await Or(s, rn.O_RDONLY | rn.O_DIRECTORY | rn.O_NOFOLLOW);
          try {
            await p.chmod(448);
          } finally {
            await p.close();
          }
        }
        continue;
      }
      await wn(s, { recursive: !0, force: !0 });
    } catch (f) {
      if (A(f) !== "ENOENT") return l(f);
    }
    try {
      await Un(s, { mode: 448 });
    } catch (f) {
      if (A(f) !== "EEXIST") return l(f);
    }
    let d = await Dn(s).catch(() => null);
    if (d === null || !d.isDirectory() || (o !== void 0 && d.uid !== o))
      return `${s} is not a plain directory of ours`;
  }
  return null;
}
var Zl = /^run-([0-9]+)-[0-9a-f]{12}$/;
async function td(e) {
  let t = await no(e).catch(() => []);
  await Promise.all(
    t.map(async (r) => {
      let o = Zl.exec(r)?.[1];
      if (o === void 0) return;
      let s = ce(e, r),
        a = await Dn(s).then(
          (d) => Date.now() - d.mtimeMs,
          () => 0,
        );
      if (a >= is || (a >= ss && !as(Number(o))))
        await wn(s, { recursive: !0, force: !0 }).catch(() => {});
    }),
  );
}
var is = 1800000,
  nd = 90000,
  ss = 120000;
async function rd(e) {
  let t = await od(),
    r = async () => {
      if ((await xr(e, 128).catch(() => "")) === t)
        await wn(e, { force: !0 }).catch(() => {});
    };
  for (let o = 0; o < 3; o++)
    try {
      return (await vo(e, t, { flag: "wx", mode: 384 }), { release: r });
    } catch (s) {
      if (A(s) !== "EEXIST") throw s;
      let [a, d] = await Promise.all([
        xr(e, 128).catch(() => ""),
        Dn(e).then(
          (p) => Date.now() - p.mtimeMs,
          () => 1 / 0,
        ),
      ]);
      if (d < is && ((d >= 0 && d < ss) || (await id(a)))) return null;
      let f = `${e}.stale.${process.pid}.${ts(4).toString("hex")}`;
      try {
        await Wl(e, f);
      } catch (p) {
        if (A(p) !== "ENOENT") return null;
      }
      await wn(f, { recursive: !0, force: !0 }).catch(() => {});
    }
  return null;
}
function od() {
  return getProcessStartTimeAsync(process.pid).then(
    (e) => `${process.pid}:${e ?? ""}`,
    () => `${process.pid}:`,
  );
}
async function id(e) {
  let t = e.indexOf(":"),
    r = Number(t === -1 ? e : e.slice(0, t)),
    o = t === -1 ? "" : e.slice(t + 1);
  if (!(r > 0) || !as(r)) return !1;
  let s =
    (await getProcessStartTimeAsync(r).catch(() => {
      return;
    })) ?? "";
  return o === "" || s === "" || o === s;
}
function as(e) {
  try {
    return (process.kill(e, 0), !0);
  } catch (t) {
    return A(t) === "EPERM";
  }
}
async function Yi(e, t) {
  if (t.objectFormat !== "sha1" && t.objectFormat !== "sha256")
    return `unsupported object format ${t.objectFormat}`;
  if (
    !ns(t.objectsDir) ||
    /[\r\n]/.test(t.objectsDir) ||
    /^["#]/.test(t.objectsDir)
  )
    return "the objects directory cannot be named in an alternates file";
  let r = ld(t.objectFormat, t.settings),
    o = `${t.objectsDir}
`,
    s = t.attributes === void 0 ? Yl : t.attributes,
    a = [
      [ce(e, "config"), r],
      ...(s === null ? [] : [[ce(e, "info", "attributes"), s]]),
      [ce(e, "objects", "info", "alternates"), o],
    ],
    f = (
      await Promise.all([
        ...(s === null ? [Jn(ce(e, "info", "attributes"))] : []),
        Jn(ce(e, "commondir")),
        Jn(ce(e, "gitdir")),
      ])
    ).some(Boolean),
    p = (N) =>
      no(N).catch((C) =>
        ["ENOENT", "ENOTDIR"].includes(A(C) ?? "") ? [] : null,
      ),
    [y, w] = await Promise.all([
      p(ce(e, "objects", "pack")),
      p(ce(e, "objects")),
    ]),
    k = (y ?? []).map((N) => [ce(e, "objects", "pack", N), "pack"]),
    _ = (w ?? [])
      .filter((N) => /^[0-9a-f]{2}$/i.test(N))
      .map((N) => [ce(e, "objects", N), "directory"]);
  if (y === null || w === null)
    return "the side repository could not be inspected (its object directories could not be listed)";
  let E = await Xi([
      [e, "directory"],
      ..._,
      ...k,
      [ce(e, "info"), "directory"],
      [ce(e, "objects"), "directory"],
      [ce(e, "objects", "info"), "directory"],
      [ce(e, "objects", "pack"), "directory"],
      [ce(e, "refs"), "directory"],
      [ce(e, "HEAD"), "file"],
      ...a.map(([N]) => [N, "file"]),
    ]),
    R = Xl.test(await xr(ce(e, "HEAD"), 256).catch(() => ""));
  if (E && !f && R && (await Vi(a))) return null;
  try {
    let N = await xr(ce(e, "config"), 4096).catch(() => null),
      C =
        N !== null &&
        /^\tobjectformat = sha256$/m.test(N) === (t.objectFormat === "sha256");
    if (E && C && (await Jn(ce(e, "HEAD")))) {
      if (
        (await Promise.all(
          [
            "hooks",
            "config.worktree",
            "commondir",
            "gitdir",
            ce("info", "grafts"),
            ce("info", "attributes"),
          ].map((re) => wn(ce(e, re), { recursive: !0, force: !0 })),
        ),
        !R)
      )
        (await wn(ce(e, "HEAD"), { force: !0 }),
          await vo(
            ce(e, "HEAD"),
            `ref: refs/heads/main
`,
            { mode: 384, flag: "wx" },
          ));
    } else {
      (await wn(e, { recursive: !0, force: !0 }),
        await Un(e, { recursive: !0, mode: 448 }));
      let re = await builderGit(
        e,
        [
          "-c",
          "init.defaultRefFormat=files",
          "init",
          "--quiet",
          "--bare",
          "--template=",
          ...(t.objectFormat === "sha256" ? ["--object-format=sha256"] : []),
          e,
        ],
        {
          hardened: !0,
          signal: t.signal,
          env: { GIT_DEFAULT_REF_FORMAT: "files" },
          ...(t.reachRoots !== void 0 && { reachRoots: t.reachRoots }),
          ...(t.probes !== void 0 && { probes: t.probes }),
        },
      );
      if (re.code !== 0) return st(re.stderr) || "git init failed";
    }
    (await Un(ce(e, "info"), { recursive: !0 }),
      await Un(ce(e, "objects", "info"), { recursive: !0 }));
    for (let [re, te] of a)
      (await wn(re, { force: !0 }),
        await vo(re, te, {
          mode: 384,
          flag:
            getCurrentPlatform() === "windows"
              ? "wx"
              : rn.O_WRONLY | rn.O_CREAT | rn.O_EXCL | rn.O_NOFOLLOW,
        }));
    let [D, ...pe] = await Promise.all([
      Xi([
        [e, "directory"],
        [ce(e, "info"), "directory"],
        [ce(e, "objects"), "directory"],
        [ce(e, "objects", "info"), "directory"],
        ...a.map(([re]) => [re, "file"]),
      ]),
      ...(s === null ? [Jn(ce(e, "info", "attributes"))] : []),
      Jn(ce(e, "commondir")),
      Jn(ce(e, "gitdir")),
    ]);
    return D && !pe.some(Boolean) && (await Vi(a))
      ? null
      : "the side repository did not keep what was written";
  } catch (N) {
    return l(N);
  }
}
async function sd(e, t, r, o) {
  let s = new Set(o),
    a = [],
    d = { stdout: "", stderr: "", code: 0 };
  for (let p of chunkPathsForArgv(o)) {
    if (((d = await e(["ls-files", "-s", "-z", "--", ...p], GIT_PATHSPEC_ENV)), d.code !== 0))
      return d;
    a.push(
      ...d.stdout
        .split("\x00")
        .filter((y) => y !== "")
        .flatMap((y) => {
          let w = y.indexOf("\t"),
            [k] = y.slice(0, w).split(" "),
            _ = y.slice(w + 1);
          return k !== "160000" && s.has(_) ? [_] : [];
        }),
    );
  }
  if (a.length === 0) return d;
  let f = `0 ${"0".repeat(r.length)}`;
  return e(
    ["update-index", "-z", "--index-info"],
    void 0,
    a.map((p) => `${f}	${p}\x00`).join(""),
  );
}
async function ls(e) {
  let t = getCurrentPlatform(),
    r = t !== "windows" && t !== "wsl";
  return (
    await Promise.all(
      e.map(async (s) => {
        try {
          let a = await Dn(s);
          if (!a.isSymbolicLink()) return a.isFile();
          return r && (await Ul(s)).isFile();
        } catch (a) {
          let d = A(a);
          return d === "ENOENT" || d === "ENOTDIR";
        }
      }),
    )
  ).every(Boolean);
}
async function Xi(e) {
  return (
    await Promise.all(
      e.map(async ([r, o]) => {
        try {
          let s = await Dn(r);
          return o === "directory"
            ? s.isDirectory()
            : s.isFile() && (o === "pack" || s.nlink === 1);
        } catch (s) {
          return o !== "directory" && A(s) === "ENOENT";
        }
      }),
    )
  ).every(Boolean);
}
async function Jn(e) {
  try {
    return (await Dn(e), !0);
  } catch (t) {
    return A(t) !== "ENOENT";
  }
}
async function Vi(e) {
  try {
    return (
      await Promise.all(
        e.map(async ([r, o]) => (await xr(r, Buffer.byteLength(o) + 1)) === o),
      )
    ).every(Boolean);
  } catch {
    return !1;
  }
}
async function ad(e, t) {
  let r = await Or(e, "r");
  try {
    let o = [],
      s = 0;
    while (s < t) {
      let a = Buffer.allocUnsafe(65536),
        { bytesRead: d } = await r.read(a, 0, a.length, null);
      if (d === 0) break;
      (o.push(a.subarray(0, d)), (s += d));
    }
    return Buffer.concat(o).toString("utf8");
  } finally {
    await r.close();
  }
}
async function xr(e, t) {
  if (getCurrentPlatform() === "windows" && !(await Dn(e)).isFile()) return "";
  let r = await Or(
    e,
    getCurrentPlatform() === "windows"
      ? "r"
      : rn.O_RDONLY | rn.O_NOFOLLOW | (rn.O_NONBLOCK ?? 0),
  );
  try {
    let o = Buffer.alloc(t),
      { bytesRead: s } = await r.read(o, 0, t, 0);
    return o.subarray(0, s).toString("utf8");
  } finally {
    await r.close();
  }
}
function ld(e, t) {
  let r = rs.flatMap((o) => {
    let s = t.get(o);
    return s !== void 0 && /^[A-Za-z0-9_-]+$/.test(s)
      ? [`	${o.slice(5)} = ${s}`]
      : [];
  });
  return [
    "[core]",
    "\trepositoryformatversion = " + (e === "sha1" ? "0" : "1"),
    "\tbare = true",
    "\tprotectNTFS = true",
    "\tprotectHFS = true",
    ...r,
    ...(e === "sha1" ? [] : ["[extensions]", `	objectformat = ${e}`]),
    "",
  ].join(`
`);
}
function dd(e) {
  let r = e
    .split("\x00")
    .filter(
      (o) =>
        o === "core.sparsecheckout" ||
        o.startsWith(`core.sparsecheckout
`),
    )
    .map((o) =>
      o.includes(`
`)
        ? o.slice(
            o.indexOf(`
`) + 1,
          )
        : "true",
    )
    .at(-1)
    ?.toLowerCase();
  return r !== void 0 && !["false", "no", "off", "0", ""].includes(r);
}
function ud(e) {
  let t = new Set(rs);
  return new Map(
    e
      .split("\x00")
      .filter((r) => r !== "")
      .flatMap((r) => {
        let o = r.indexOf(`
`),
          s = o === -1 ? r : r.slice(0, o),
          a = o === -1 ? "true" : r.slice(o + 1);
        return t.has(s) ? [[s, a]] : [];
      }),
  );
}
var cd = 268435456;
async function fd(e, t, r) {
  try {
    let o = await Ao(ce(e, "index"), t);
    if (o.kind === "failed") return `could not copy the index: ${o.why}`;
  } catch (o) {
    return `could not copy the index: ${l(o)}`;
  }
  try {
    let o = (await no(e)).filter((s) =>
      /^sharedindex\.[0-9a-f]{40,64}$/.test(s),
    );
    for (let s of o)
      for (let a of [ce(r, s), ce(t, "..", s)])
        (await wn(a, { recursive: !0, force: !0 }), await Ao(ce(e, s), a));
  } catch {}
  return null;
}
async function Ao(e, t) {
  let r = (a) => {
      if (A(a) === "ENOENT") return null;
      throw a;
    },
    o = (a) => {
      if (A(a) === "ELOOP") return "link";
      throw a;
    };
  if (getCurrentPlatform() === "windows") {
    let a = await Dn(e).catch(r);
    if (a === null) return { kind: "absent" };
    if (!a.isFile())
      return { kind: "failed", why: "not a single regular file" };
  }
  let s = await Or(
    e,
    getCurrentPlatform() === "windows"
      ? "r"
      : rn.O_RDONLY | rn.O_NOFOLLOW | (rn.O_NONBLOCK ?? 0),
  )
    .catch(r)
    .catch(o);
  if (s === null) return { kind: "absent" };
  if (s === "link") return { kind: "failed", why: "not a single regular file" };
  try {
    let a = await s.stat();
    if (!a.isFile() || a.nlink !== 1)
      return { kind: "failed", why: "not a single regular file" };
    if (a.size > cd)
      return { kind: "failed", why: "larger than an index can be" };
    let d = await Or(t, "wx", 384);
    try {
      let f = Buffer.allocUnsafe(Math.max(1, Math.min(a.size, 1048576))),
        p = 0;
      while (p < a.size) {
        let { bytesRead: y } = await s.read(
          f,
          0,
          Math.min(f.length, a.size - p),
          p,
        );
        if (y === 0) break;
        let w = 0;
        while (w < y) {
          let { bytesWritten: k } = await d.write(f, w, y - w);
          w += k;
        }
        p += y;
      }
      if (p !== a.size)
        return { kind: "failed", why: "changed while being read" };
      await d.utimes(a.atime, a.mtime);
    } finally {
      await d.close();
    }
    return { kind: "copied" };
  } finally {
    await s.close();
  }
}
function Ji(e, t) {
  return (t ? e.replaceAll("\\", "/") : e)
    .split("/")
    .some((o) => normalizePathSegment(o) === ".git");
}
function Qi(e, t) {
  return (
    t &&
    e
      .split("/")
      .some((r) => r.includes(":") || r.includes("\\") || /[. ]$/.test(r))
  );
}
async function hd(e) {
  let t = getCurrentPlatform();
  if (t === "windows") return !0;
  if (t !== "wsl") return !1;
  let r = await ad("/proc/self/mountinfo", 4194304).catch(() => ""),
    o = { length: -1, fstype: "" };
  for (let s of r.split(`
`)) {
    let a = s.split(" "),
      d = a.indexOf("-"),
      f = a[4],
      p = d >= 0 ? a[d + 1] : void 0;
    if (f === void 0 || p === void 0) continue;
    let y = f.replace(/\\([0-7]{3})/g, (k, _) =>
      String.fromCharCode(parseInt(_, 8)),
    );
    if (
      (e === y || e.startsWith(y === "/" ? "/" : `${y}/`)) &&
      y.length >= o.length
    )
      o = { length: y.length, fstype: p };
  }
  return o.length < 0 || md.includes(o.fstype);
}
var md = [
  "drvfs",
  "9p",
  "cifs",
  "smb3",
  "ntfs",
  "ntfs3",
  "fuseblk",
  "vfat",
  "exfat",
];
function se(e, t) {
  return { kind: "refused", reason: e, detail: t };
}
function st(e) {
  return firstLine(e.trim());
}
var pd = ["filter", "working-tree-encoding", "ident"];
async function Zi(e, t, r, o) {
  if (t.length === 0) return [];
  let s = (y) =>
      o.normalizationBlind
        ? dedupe([y, y.normalize("NFC"), y.normalize("NFD")])
        : [y],
    a = dedupe(t.flatMap(s));
  if (r !== null) {
    if (
      (
        await e(["-c", "core.splitIndex=false", "read-tree", r.commit], {
          GIT_INDEX_FILE: r.indexPath,
        })
      ).code !== 0
    )
      return null;
    let w = await gd(e, r.commit, r.indexPath, a);
    if (w === null || w === "old_git") return w;
    await Un(r.objectsDir, { recursive: !0, mode: 448 });
    let k = {
      GIT_INDEX_FILE: r.indexPath,
      GIT_OBJECT_DIRECTORY: r.objectsDir,
      GIT_ALTERNATE_OBJECT_DIRECTORIES: "",
    };
    for (let { name: _, id: E, text: R, markStripped: N } of w.blobs) {
      let C = await e(["hash-object", "-w", "--stdin"], k, R),
        O = C.stdout.trim();
      if (C.code !== 0 || (O !== E && !N)) return null;
      if (O !== E) {
        if (
          (
            await e(
              [
                "-c",
                "core.splitIndex=false",
                "update-index",
                "--cacheinfo",
                `100644,${O},${_}`,
              ],
              k,
            )
          ).code !== 0
        )
          return null;
      }
    }
  }
  let d = await e(
    [
      ...(o.caseBlind ? ["-c", "core.ignorecase=true"] : []),
      "check-attr",
      ...(r === null ? [] : ["--cached"]),
      "-z",
      "--stdin",
      ...pd,
    ],
    r === null
      ? void 0
      : {
          GIT_INDEX_FILE: r.indexPath,
          GIT_OBJECT_DIRECTORY: r.objectsDir,
          GIT_ALTERNATE_OBJECT_DIRECTORIES: "",
        },
    a.map((y) => `${y}\x00`).join(""),
  );
  if (d.maxBufferExceeded) return "overflow";
  if (d.code !== 0) return null;
  let f = d.stdout.split("\x00"),
    p = new Set();
  for (let y = 0; y + 2 < f.length; y += 3) {
    let [w, k] = [f[y + 1], f[y + 2]];
    if (!(
      k === "unspecified" ||
      k === "unset" ||
      (w === "ident" && k === "false")
    ))
      p.add(f[y]);
  }
  return t.filter((y) => s(y).some((w) => p.has(w)));
}
async function gd(e, t, r, o) {
  let s = dedupe([
      ...collectGitAttributesPaths(o),
      ...o.filter((E) => E.split("/").at(-1) === ".gitattributes"),
    ]),
    a = new Map(),
    d = new Map();
  for (let E of chunkPathsForArgv(s)) {
    let R = await e(["ls-files", "-s", "-z", "--", ...E], {
      ...GIT_PATHSPEC_ENV,
      GIT_INDEX_FILE: r,
    });
    if (R.code !== 0) return null;
    R.stdout
      .split("\x00")
      .filter((N) => N !== "")
      .forEach((N) => {
        let C = N.indexOf("\t"),
          [O = "", D = ""] = N.slice(0, C).split(" ");
        (a.set(N.slice(C + 1), D), d.set(N.slice(C + 1), O));
      });
  }
  let f = await ds(e, t, s);
  if (f === null) return null;
  let p = (E) => {
    let R = f.get(E);
    return a.get(E) === R?.id && d.get(E) === R?.mode;
  };
  if (s.some((E) => !p(E))) return null;
  let y,
    w = new Map(),
    k = async (E) => {
      let R = w.get(E);
      if (R !== void 0) return R;
      let N = await e(
          ["cat-file", "--batch"],
          void 0,
          `${E}
`,
        ),
        C = N.stdout.indexOf(`
`),
        O = C === -1 ? N.stdout : N.stdout.slice(0, C),
        D = C === -1 ? "" : N.stdout.slice(C + 1),
        pe = E.length === 64 ? "sha256" : "sha1",
        re =
          N.code !== 0 || !new RegExp(`^${E} blob [0-9]+$`).test(O)
            ? null
            : ([D, `${D}\r`].find((te) => {
                let ge = Buffer.from(te, "utf8");
                return (
                  es(pe)
                    .update(`blob ${ge.length}\x00`)
                    .update(ge)
                    .digest("hex") === E
                );
              }) ?? null);
      return (w.set(E, re), re);
    },
    _ = [];
  for (let [E, { id: R, mode: N }] of f) {
    let C = await k(R);
    if (C === null || C.includes("\x00")) return null;
    let O = C.startsWith("\uFEFF");
    if (N !== "100644" && N !== "100755") {
      if (((y ??= yd(e)), !(await y))) return "old_git";
      if (O) return null;
      _.push({ name: E, id: R, text: C, markStripped: !1 });
    } else if (O) {
      let D = C.slice(1);
      if (D.startsWith("\uFEFF")) return null;
      _.push({ name: E, id: R, text: D, markStripped: !0 });
    } else _.push({ name: E, id: R, text: C, markStripped: !1 });
  }
  return { blobs: _ };
}
function wd(e) {
  if (!(e.startsWith('"') && e.endsWith('"'))) return Buffer.from(e, "utf8");
  let t = { a: 7, b: 8, t: 9, n: 10, v: 11, f: 12, r: 13, "\\": 92, '"': 34 },
    r = e.slice(1, -1),
    o = [];
  for (let s = 0; s < r.length; s += 1) {
    let a = r[s] ?? "";
    if (a !== "\\") {
      o.push(...Buffer.from(a, "utf8"));
      continue;
    }
    let d = r[s + 1] ?? "";
    if (/^[0-3][0-7]{2}$/.test(r.slice(s + 1, s + 4)))
      (o.push(parseInt(r.slice(s + 1, s + 4), 8)), (s += 3));
    else (o.push(t[d] ?? d.charCodeAt(0)), (s += 1));
  }
  return Buffer.from(o);
}
async function yd(e) {
  let t = await e(["version"]),
    r = t.code === 0 ? parseGitVersion(t.stdout) : null;
  return r !== null && (r.major > 2 || (r.major === 2 && r.minor >= 32));
}
async function ds(e, t, r) {
  let o = t.length === 64 ? "sha256" : "sha1",
    s = (_, E, R) =>
      es(o).update(`${_} ${E.length}\x00`).update(E).digest("hex") === R,
    a = await e(
      ["cat-file", "--batch"],
      void 0,
      `${t}
`,
    ),
    d = a.stdout.indexOf(`
`),
    f = d === -1 ? "" : a.stdout.slice(d + 1);
  if (
    a.code !== 0 ||
    !a.stdout.startsWith(`${t} commit `) ||
    ![f, `${f}\r`].some((_) => s("commit", Buffer.from(_, "utf8"), t))
  )
    return null;
  let p = /^tree ([0-9a-f]{40,64})$/m.exec(f)?.[1];
  if (p === void 0) return null;
  let y = new Map(),
    w = async (_) => {
      let E = y.get(_);
      if (E !== void 0) return E;
      let R = await e(["-c", "core.quotePath=true", "ls-tree", _]);
      if (R.code !== 0) return null;
      let N = R.stdout
          .split(
            `
`,
          )
          .filter((D) => D !== "")
          .map((D) => {
            let pe = D.indexOf("\t"),
              [re, , te] = D.slice(0, pe).split(" "),
              ge = wd(D.slice(pe + 1));
            return {
              mode: (re ?? "").replace(/^0+/, ""),
              id: te ?? "",
              nameBytes: ge,
              name: ge.toString("utf8"),
            };
          }),
        C = Buffer.concat(
          N.map(({ mode: D, id: pe, nameBytes: re }) =>
            Buffer.concat([
              Buffer.from(`${D} `, "utf8"),
              re,
              Buffer.from([0]),
              Buffer.from(pe, "hex"),
            ]),
          ),
        );
      if (!s("tree", C, _)) return null;
      let O = new Map(
        N.map(({ name: D, mode: pe, id: re }) => [D, { mode: pe, id: re }]),
      );
      return (y.set(_, O), O);
    },
    k = new Map();
  for (let _ of r) {
    let E = p,
      R = _.split("/");
    for (let [N, C] of R.entries()) {
      let O = await w(E);
      if (O === null) return null;
      let D = O.get(C);
      if (D === void 0) break;
      if (N === R.length - 1 && D.mode !== "40000")
        k.set(_, { id: D.id, mode: D.mode });
      else if (N < R.length - 1 && D.mode === "40000") E = D.id;
      else break;
    }
  }
  return k;
}
import { lstat as bd, mkdir as _d, stat as kd } from "fs/promises";
import { dirname as cs, join as Sd } from "path";
var Ir = 90000,
  Ed = "writer-locks",
  Pd = 448;
function Rd(e, t, r = !1) {
  let o = /^(E[A-Z0-9]+):/.exec(e)?.[1];
  if (o !== void 0 && o !== "ENOENT") return { kind: "lost", reason: e };
  if (t === "absent") return r ? "retake_stale" : "retake";
  return t === "present"
    ? { kind: "taken_over", reason: e }
    : { kind: "lost", reason: e };
}
function fs(e, t) {
  return Sd(cs(e), Ed, `${sanitizePathSegment(t)}.writer`);
}
async function mFt({ recordPath: e, lockPath: t, onLost: r, staleMs: o = Ir }) {
  let s,
    a = !1,
    d = !1,
    f = Date.now(),
    p = !1,
    y = setInterval(() => {
      let E = Date.now();
      ((p ||= E - f > o), (f = E));
    }, o / 2);
  y.unref();
  let w = (E) => {
      if (a) return;
      ((a = !0),
        clearInterval(y),
        logForDebugging(
          `git sync writer lock ${E.kind === "taken_over" ? "taken over" : "lost"}: ${E.reason}`,
          { level: "warn" },
        ),
        r(E));
    },
    k = async () => (
      await _d(cs(t), { recursive: !0, mode: Pd }),
      Cs(e, {
        realpath: !1,
        retries: 0,
        stale: o,
        lockfilePath: t,
        onCompromised: (E) => void _(l(E)),
      })
    ),
    _ = async (E) => {
      if (a || d) return;
      let R = p || Date.now() - f > o;
      ((p = !1), (f = Date.now()));
      let N = await bd(t).then(
          () => "present",
          (O) => (W(O) ? "absent" : "unknown"),
        ),
        C = Rd(E, N, R);
      if (C !== "retake" && C !== "retake_stale") return w(C);
      try {
        let O = await k();
        if (
          ((s = O),
          logForDebugging(
            `git sync writer lock re-taken (${E}${C === "retake_stale" ? "; after a stall" : ""})`,
            { level: "warn" },
          ),
          C === "retake_stale")
        )
          r({ kind: "retaken_after_stall", reason: E });
        if (d) await hf(O, "git sync writer lock");
      } catch (O) {
        if (d) return;
        w(
          A(O) === "ELOCKED"
            ? { kind: "taken_over", reason: E }
            : { kind: "lost", reason: l(O) },
        );
      }
    };
  try {
    s = await k();
  } catch (E) {
    if ((clearInterval(y), A(E) === "ELOCKED"))
      return { kind: "other_writer", retryAtMs: await vd(t, o) };
    throw E;
  }
  return {
    kind: "held",
    release: () => (
      (d = !0),
      clearInterval(y),
      hf(() => s(), "git sync writer lock")
    ),
  };
}
async function vd(e, t) {
  let r = Date.now(),
    o = await kd(e).then(
      (s) => s.mtimeMs,
      () => r - t,
    );
  return Math.min(Math.max(r + 1000, o + t + 1), r + t);
}
import { randomUUID as Td } from "crypto";
import { constants as Co } from "fs";
import {
  lstat as lr,
  open as oo,
  readdir as Ad,
  unlink as ar,
} from "fs/promises";
import { join as ro } from "path";
var Cd = "claude: fast-forward to the cloud session",
  Od = "claude: undo the fast-forward (the index could not follow)",
  xd = /^[A-Za-z0-9._\/-]+$/,
  ps = /^(filter|hook)\.(.+)\.[^.]+$/is,
  Id = /^(?:filter|hook)\./i,
  Io = /[\r\n\0\uFFFD]/,
  Nd = 1024;
async function gs(e, t) {
  let r = await runPinnedGit(e, ["config", "-z", "--list", "--name-only"], t);
  if (r.code !== 0) return null;
  let a = r.stdout
    .split("\x00")
    .filter((w) => w !== "")
    .filter((w) => Id.test(w))
    .map((w) => ps.exec(w));
  if (a.some((w) => w === null)) return null;
  let d = (w) =>
      dedupe(
        a.flatMap((k) =>
          k !== null && k[1].toLowerCase() === w ? [k[2]] : [],
        ),
      ),
    f = d("filter"),
    p = d("hook");
  if ([...f, ...p].some((w) => Io.test(w))) return null;
  let y = [
    ...f.flatMap((w) => [
      [`filter.${w}.clean`, ""],
      [`filter.${w}.smudge`, ""],
      [`filter.${w}.process`, ""],
      [`filter.${w}.required`, "false"],
    ]),
    ...p.flatMap((w) => [
      [`hook.${w}.enabled`, "false"],
      [`hook.${w}.event`, ""],
    ]),
  ];
  return {
    GIT_CONFIG_COUNT: String(y.length),
    ...Object.fromEntries(
      y.flatMap(([w, k], _) => [
        [`GIT_CONFIG_KEY_${_}`, w],
        [`GIT_CONFIG_VALUE_${_}`, k],
      ]),
    ),
  };
}
var Ld = new j(() => new Map());
function Fd(e) {
  let t = Ld.of(B().host),
    r = t.get(e);
  if (r !== void 0) return r;
  let o = [];
  return (t.set(e, o), o);
}
function ws(e, t) {
  return e.dev === t.dev && e.ino === t.ino;
}
function so(e, t) {
  return ws(e, t) && e.size === t.size && e.mtimeNs === t.mtimeNs;
}
function Oo(e, t) {
  if (!e.some((r) => so(r, t))) e.push(ys(t));
}
function Dd(e, t) {
  let r = e.findIndex((o) => so(o, t));
  if (r !== -1) e.splice(r, 1);
}
function ys(e) {
  return { dev: e.dev, ino: e.ino, size: e.size, mtimeNs: e.mtimeNs };
}
var bs = "index.claude-",
  $d = 600000,
  Bd = /^filter\.(.+)\.(clean|smudge|process|required)$/is;
async function _s({
  gitRoot: e,
  gitDir: t,
  branch: r,
  head: o,
  incomingHead: s,
  paths: a,
  keptLocal: d = [],
  checkoutEnv: f,
  recheck: p,
}) {
  let y = (K, ee = {}) =>
    runPinnedGit(e, ["-c", "submodule.recurse=false", ...K], void 0, void 0, mergeGitConfigEnv(f, ee));
  if (
    !GIT_OBJECT_ID_REGEX.test(o) ||
    !GIT_OBJECT_ID_REGEX.test(s) ||
    !r.startsWith("refs/heads/") ||
    !isValidGitBranchName(r.slice(11))
  )
    return V(
      "bad_arguments",
      "the branch or the commits are not named as git names them",
    );
  let w = ro(t, "index"),
    k = ro(t, "index.lock"),
    _ = ro(t, bs + Td()),
    E = Fd(k);
  try {
    let K = await lr(k, { bigint: !0 }),
      ee = E.findIndex((Ge) => so(Ge, K));
    if (!(K.isFile() && K.nlink === 1n && ee !== -1) || !(await hs(k)))
      return V("index_busy", "another git process holds the index lock");
    E.splice(ee, 1);
  } catch (K) {
    if (A(K) !== "ENOENT")
      return V("git_error", "the index lock could not be examined");
  }
  let R, N, C;
  try {
    C = await oo(k, "wx");
  } catch (K) {
    return A(K) === "EEXIST"
      ? V("index_busy", "another git process holds the index lock")
      : V("git_error", "the index lock could not be taken");
  }
  try {
    let K = await C.stat({ bigint: !0 });
    if (K.ino === 0n) throw Error("the index lock has no identity");
    ((R = { dev: K.dev, ino: K.ino }), (N = K));
  } catch {
    return (
      await C.close().catch(() => {}),
      await ar(k).catch(() => {}),
      V("git_error", "the index lock could not be taken")
    );
  }
  let O = async () => {
      try {
        let K = await lr(k, { bigint: !0 });
        if (K.isFile() && K.nlink === 1n && ws(K, R)) return ((N = K), "ours");
        return "not_ours";
      } catch (K) {
        return A(K) === "ENOENT" ? "not_ours" : "unknown";
      }
    },
    D = await O();
  if (D !== "ours") {
    if ((await C.close().catch(() => {}), D === "unknown")) Oo(E, N);
    return V(
      "index_busy",
      D === "unknown"
        ? "the index lock just created could not be examined"
        : "the index lock name does not lead to the file just created",
    );
  }
  let pe = !1,
    re = !1,
    te,
    ge = new Promise((K) => {
      te = K;
    }),
    le = registerCleanup(async () => {
      if ((await ge, re)) {
        let K = await lr(k, { bigint: !0 }).catch(() => null);
        if (K !== null && K.isFile() && K.nlink === 1n && so(ys(N), K))
          await ar(k).catch(() => {});
      }
      await ar(_).catch(() => {});
    }),
    J = [],
    fe = () => y([...J, "update-ref", "--no-deref", "-m", Od, r, o, s]);
  try {
    if ((await Ud(t), !(await Kd(e, r, o, f))))
      return V(
        "head_moved",
        "HEAD changed while the branch was being advanced",
      );
    let K = await p();
    if (K !== null) return K;
    if (!(await Gd(w, _)))
      return V("git_error", "the index could not be copied");
    let ee = await y(["ls-files", "--unmerged", "-z"], { GIT_INDEX_FILE: _ });
    if (ee.code !== 0 || ee.stdout !== "")
      return ee.code !== 0
        ? V("git_error", "the index could not be read")
        : V("operation_in_progress", "the index has unresolved conflicts");
    let [ye, Ge] = await Promise.all([zd(e, f), jd(e, f)]);
    if (ye === null || Ge === null)
      return V(
        "git_error",
        "the repository's filter or hook configuration could not be read or switched off",
      );
    J = Ge;
    let at = await y([...ye, ...J, "read-tree", "-i", "-m", o, s], {
      GIT_INDEX_FILE: _,
    });
    if (at.code !== 0)
      return at.exitCode === void 0
        ? V("git_error", "the index merge did not finish")
        : V(
            "staged_changes",
            "something staged differs on a path the incoming commits touch",
          );
    let je = await Hd(_);
    if (je === null)
      return V("git_error", "the merged index could not be read back");
    try {
      (await C.writeFile(je),
        await C.sync(),
        (N = await C.stat({ bigint: !0 })));
    } catch {
      return V("git_error", "the merged index could not be written");
    }
    let Ae = await O();
    if (Ae !== "ours") {
      if (Ae === "unknown") Oo(E, N);
      return V("index_busy", "the index lock was replaced while held");
    }
    let vt = await y([...J, "update-ref", "--no-deref", "-m", Cd, r, s, o]);
    if (vt.code !== 0)
      if (vt.exitCode === void 0) {
        let wt = await y(["rev-parse", "-q", "--verify", r]);
        if (wt.exitCode === void 0) {
          if ((await fe()).code === 0)
            return V(
              "git_error",
              "the branch update did not finish cleanly; the branch move was undone",
            );
          let tt = (await y(["rev-parse", "-q", "--verify", r])).stdout.trim();
          return tt === o
            ? V(
                "git_error",
                "the branch update did not finish; the branch did not move",
              )
            : tt === s
              ? V(
                  "git_error",
                  `the branch update did not finish and the branch could not be put back: it names the session's HEAD while the index is still the old one \u2014 ${xo(r, o, s)}`,
                )
              : V(
                  "git_error",
                  `the branch update did not finish and the branch could not be read back; if it names the session's HEAD while the index is still the old one, ${xo(r, o, s)}`,
                );
        }
        if (wt.stdout.trim() !== s)
          return V("git_error", "the branch update did not finish");
      } else
        return V(
          "ref_moved",
          "the branch no longer held the old value, or could not be locked",
        );
    let Xe = await y(["symbolic-ref", "-q", "HEAD"]);
    if (
      (await C.close().catch(() => {}), Xe.code === 0 && Xe.stdout.trim() === r)
    ) {
      if (!(await Md(k, w)))
        return ms(await fe(), "the index could not be put in place", r, o, s);
      pe = !0;
    } else if (Xe.exitCode !== 0 && Xe.exitCode !== 1)
      return ms(
        await fe(),
        "HEAD could not be read after the branch moved",
        r,
        o,
        s,
      );
    return {
      kind: "fast_forwarded",
      branch: r.replace(/^refs\/heads\//, ""),
      from: o,
      to: s,
      paths: a,
      keptLocal: [...d],
    };
  } finally {
    if ((await C.close().catch(() => {}), !pe)) {
      let K = await O();
      if (((re = K === "unknown" || (K === "ours" && !(await hs(k)))), re))
        Oo(E, N);
      else Dd(E, N);
    }
    if ((await ar(_).catch(() => {}), te(), !re)) le();
  }
}
async function Md(e, t) {
  try {
    return (await renameWithRetry(e, t), !0);
  } catch {
    return !1;
  }
}
async function hs(e) {
  for (let t of [0, 50, 100, 200]) {
    await sleep(t);
    try {
      return (await ar(e), !0);
    } catch (r) {
      if (A(r) === "ENOENT") return !0;
    }
  }
  return !1;
}
async function Gd(e, t) {
  let r = null,
    o = null,
    s;
  try {
    try {
      let a = await lr(e, { bigint: !0 });
      if (!a.isFile()) return !1;
      if (
        ((r = await oo(e, getSafeReadOpenFlags())),
        (s = await r.stat({ bigint: !0 })),
        !s.isFile() || !ks(a, s))
      )
        return !1;
    } catch (a) {
      return A(a) === "ENOENT";
    }
    return (
      (o = await oo(t, Co.O_WRONLY | Co.O_CREAT | Co.O_EXCL, 384)),
      await o.writeFile(await r.readFile()),
      await o.utimes(s.atime, s.mtime),
      !0
    );
  } catch {
    return !1;
  } finally {
    (await r?.close().catch(() => {}), await o?.close().catch(() => {}));
  }
}
async function Hd(e) {
  let t = null;
  try {
    let r = await lr(e, { bigint: !0 });
    if (!r.isFile()) return null;
    t = await oo(e, getSafeReadOpenFlags());
    let o = await t.stat({ bigint: !0 });
    return o.isFile() && ks(r, o) ? await t.readFile() : null;
  } catch {
    return null;
  } finally {
    await t?.close().catch(() => {});
  }
}
async function Ud(e) {
  let t = await Ad(e).catch(() => []),
    r = Date.now() - $d;
  await Promise.all(
    t
      .filter((o) => o.startsWith(bs))
      .map(async (o) => {
        let s = ro(e, o),
          a = await lr(s).catch(() => null);
        if (a !== null && a.mtimeMs < r) await ar(s).catch(() => {});
      }),
  );
}
function ks(e, t) {
  return (
    e.ino !== 0n &&
    e.dev === t.dev &&
    e.ino === t.ino &&
    e.nlink === 1n &&
    t.nlink === 1n
  );
}
async function jd(e, t) {
  let r = await runPinnedGit(
    e,
    ["config", "-z", "--name-only", "--get-regexp", "^hook\\."],
    void 0,
    void 0,
    { ...t },
  );
  if (r.exitCode !== 0 && r.exitCode !== 1) return null;
  let o = r.stdout
    .split("\x00")
    .filter((a) => a !== "")
    .map((a) => ps.exec(a));
  if (o.some((a) => a === null)) return null;
  let s = dedupe(
    o.flatMap((a) =>
      a !== null && a[1].toLowerCase() === "hook" ? [a[2]] : [],
    ),
  );
  if (s.length > Nd || s.some((a) => /[=]/.test(a) || Io.test(a))) return null;
  return s.flatMap((a) => [
    "-c",
    `hook.${a}.enabled=false`,
    "-c",
    `hook.${a}.event=`,
  ]);
}
async function zd(e, t) {
  let r = await runPinnedGit(
    e,
    ["config", "-z", "--name-only", "--get-regexp", "^filter\\."],
    void 0,
    void 0,
    { ...t },
  );
  if (r.exitCode !== 0 && r.exitCode !== 1) return null;
  let o = r.stdout
      .split("\x00")
      .filter((a) => a !== "")
      .map((a) => Bd.exec(a)),
    s = dedupe(o.flatMap((a) => a?.[1] ?? []));
  if (s.some((a) => /[=]/.test(a) || Io.test(a))) return null;
  return s.flatMap((a) => [
    "-c",
    "filter." + a + ".clean=",
    "-c",
    "filter." + a + ".smudge=",
    "-c",
    "filter." + a + ".process=",
    "-c",
    "filter." + a + ".required=false",
  ]);
}
function ms(e, t, r, o, s) {
  return e.code === 0
    ? V("git_error", t + "; the branch move was undone")
    : V(
        "git_error",
        `${t}, and the branch could not be put back: it names the session's HEAD while the index is still the old one \u2014 ${xo(r, o, s)}`,
      );
}
function xo(e, t, r) {
  let o = e.replace(/^refs\/heads\//, "");
  return xd.test(o)
    ? `\`git update-ref --no-deref refs/heads/${o} ${t} ${r}\` puts it back`
    : `\`git update-ref --no-deref refs/heads/<your branch> ${t} ${r}\` (with your branch's name in place) puts it back`;
}
async function Kd(e, t, r, o) {
  let s = (f) => runPinnedGit(e, f, void 0, void 0, { ...o }),
    [a, d] = await Promise.all([
      s(["symbolic-ref", "-q", "HEAD"]),
      s(["rev-parse", "-q", "--verify", "HEAD^{commit}"]),
    ]);
  return (
    a.code === 0 &&
    d.code === 0 &&
    a.stdout.trim() === t &&
    d.stdout.trim() === r
  );
}
function V(e, t) {
  return { kind: "waiting", reason: e, detail: t };
}
import { resolve as au } from "path";
import { createHash as qd } from "crypto";
import { constants as ao } from "fs";
import {
  lstat as Nr,
  open as Yd,
  readdir as Ts,
  realpath as Xd,
  stat as Vd,
} from "fs/promises";
import { basename as As, dirname as No, join as yn } from "path";
var Jd = 200,
  Ss = 8,
  Qd = 60000,
  Zd = 24000,
  eu = 67108864,
  Lo = {
    GIT_LITERAL_PATHSPECS: "0",
    GIT_ICASE_PATHSPECS: "0",
    GIT_GLOB_PATHSPECS: "0",
    GIT_NOGLOB_PATHSPECS: "0",
  },
  Es = [
    ["MERGE_HEAD", "merge"],
    ["CHERRY_PICK_HEAD", "cherry-pick"],
    ["REVERT_HEAD", "revert"],
    ["rebase-merge", "rebase"],
    ["rebase-apply", "rebase"],
    ["sequencer", "cherry-pick or revert sequence"],
    ["BISECT_LOG", "bisect"],
  ];
async function Fo(e, t) {
  let [r, o] = await Promise.all([
      Promise.all(
        Es.map(async ([a, d]) => {
          try {
            return (await Nr(yn(e, a)), d);
          } catch (f) {
            return A(f) === "ENOENT" ? null : void 0;
          }
        }),
      ),
      Promise.all(
        Es.filter(([a]) => a.endsWith("_HEAD")).map(async ([a, d]) => {
          let f = await runPinnedGit(
            t,
            ["rev-parse", "-q", "--verify", "--end-of-options", a],
            void 0,
          );
          if (f.exitCode !== 0) return f.exitCode === 1 ? null : void 0;
          return (await runPinnedGit(t, ["show-ref", "--exists", a], void 0)).exitCode ===
            2
            ? null
            : d;
        }),
      ),
    ]),
    s = [...r, ...o];
  return s.includes(void 0)
    ? void 0
    : (s.find((a) => a !== null && a !== void 0) ?? null);
}
async function Os({
  gitRoot: e,
  gitDir: t,
  commonDir: r,
  branch: o,
  signal: s,
  env: a = {},
}) {
  let d = await Rs(t);
  if (d === null) return null;
  let f = (C, O = []) =>
      runPinnedGit(
        e,
        ["config", ...O, "--bool", "--default", "false", "--get", C],
        s,
        void 0,
        a,
      ),
    [p, y] = await Promise.all([
      f("core.bare"),
      f("extensions.worktreeConfig"),
    ]);
  if (p.exitCode === void 0) return null;
  let w = (C) => C.code === 0 && C.stdout.trim() === "true",
    _ =
      !(
        w(p) ||
        (w(y) && w(await f("core.bare", ["--file", yn(r, "config.worktree")])))
      ) &&
      (await Rs(r)) !== d &&
      (await Ps(r, o)),
    E = yn(r, "worktrees"),
    R;
  try {
    R = await Ts(E);
  } catch (C) {
    let O = A(C);
    if (O !== "ENOENT" && O !== "ENOTDIR") return null;
    R = [];
  }
  if (_ === void 0) return null;
  let N = await Promise.all(
    R.map(async (C) => {
      let O = yn(E, C),
        D = await Nr(O, { bigint: !0 }).catch((te) => {
          let ge = A(te);
          return ge === "ENOENT" || ge === "ENOTDIR" ? null : void 0;
        });
      if (D === void 0) return;
      if (D === null || !D.isDirectory() || `${D.dev}:${D.ino}` === d)
        return null;
      let pe = await Ps(O, o);
      if (pe !== !0) return pe === !1 ? null : void 0;
      let re = await readBoundedTextFile(yn(O, "gitdir"));
      return re.kind === "text" && re.text.trim().endsWith(".git")
        ? No(re.text.trim())
        : O;
    }),
  );
  if (N.includes(void 0)) return null;
  return [
    ...(_ ? [As(r) === ".git" ? No(r) : r] : []),
    ...N.filter((C) => typeof C === "string"),
  ];
}
async function Ps(e, t) {
  let r = t.slice(11),
    o = [
      ["HEAD", [`ref: ${t}`]],
      [yn("rebase-merge", "head-name"), [t]],
      [yn("rebase-apply", "head-name"), [t]],
      ["BISECT_START", [t, r]],
    ],
    s = await Promise.all(
      o.map(async ([a, d]) => {
        let f = await readBoundedTextFile(yn(e, a));
        return f.kind === "absent"
          ? !1
          : f.kind === "text"
            ? d.includes(f.text.trim())
            : void 0;
      }),
    );
  return s.includes(!0) ? !0 : s.includes(void 0) ? void 0 : !1;
}
async function Rs(e) {
  try {
    let t = await Vd(e, { bigint: !0 });
    return t.ino === 0n ? null : `${t.dev}:${t.ino}`;
  } catch {
    return null;
  }
}
async function xs(e, t, r) {
  let o = await runDirSyncGit(e, ["diff-tree", "-r", "-z", "--no-renames", t, r]);
  if (o.exitCode !== 0) return null;
  let s = o.stdout.split("\x00").filter((a) => a !== "");
  if (s.length % 2 !== 0) return null;
  return Array.from({ length: s.length / 2 }, (a, d) => {
    let [f = "", p = "", y = "", w = "", k = ""] = (s[d * 2] ?? "")
        .replace(/^:/, "")
        .split(" "),
      _ = s[d * 2 + 1] ?? "",
      E = f === "000000" ? null : { mode: f, id: y };
    if (k.startsWith("D")) return { kind: "removed", path: _, old: E };
    return p === "100644" || p === "100755"
      ? {
          kind: "file",
          path: _,
          blobId: w,
          mode: p,
          executable: p === "100755",
          old: E,
        }
      : { kind: "unsupported", path: _, old: E };
  });
}
async function Do(e, t, r, o) {
  let s = countMatching(t, (J) => !isSafePortablePath(J.path) || J.path.includes("\uFFFD"));
  if (s > 0) return s;
  let a = t.filter((J) => J.kind === "file"),
    f = (
      await runPinnedGit(e, ["config", "--type=bool", "--get", "core.filemode"], void 0)
    ).stdout.trim(),
    p = f === "" ? getCurrentPlatform() !== "windows" : f !== "false",
    y = new Map(),
    w = new Map(),
    k = (J) => {
      let fe = w.get(J);
      if (fe !== void 0) return fe;
      let K = Ts(J).then(
        (ee) => ee.map((ye) => ye.normalize("NFC")),
        (ee) => (["ENOENT", "ENOTDIR"].includes(A(ee) ?? "") ? [] : null),
      );
      return (w.set(J, K), K);
    },
    _ = await Promise.all(
      t.map(async (J) => {
        let fe = yn(e, J.path);
        if (await ou(e, J.path, y)) return !1;
        let K;
        try {
          K = await Nr(fe);
        } catch (ee) {
          return (
            J.kind === "removed" && ["ENOENT", "ENOTDIR"].includes(A(ee) ?? "")
          );
        }
        if (J.kind === "removed") {
          let ee = await k(No(fe));
          if (ee === null) return !1;
          return (
            !ee.includes(As(fe).normalize("NFC")) ||
            (K.isDirectory() && J.old?.mode !== "160000")
          );
        }
        return (
          J.kind === "file" &&
          K.isFile() &&
          (!p || J.executable === ((K.mode & 64) !== 0))
        );
      }),
    ),
    E = countMatching(_, (J) => !J);
  if (E > 0 || a.length === 0) return E;
  let R = await Xd(e).catch(() => null);
  if (R === null) return null;
  await using N = await openTreeAnchor(createFileSystemHost(), { gitRoot: e, realRoot: R });
  if (N.rootOnly) return null;
  let C = AbortSignal.any([
      ...(r === void 0 ? [] : [r]),
      AbortSignal.timeout(Qd),
    ]),
    O = createConcurrencyLimiter(Ss, (J) =>
      vs(C, () =>
        nu(
          yn(e, J.path),
          J.blobId.length === 64 ? "sha256" : "sha1",
          { anchor: N, rel: J.path },
          C,
        ),
      ),
    ),
    D = await Promise.all(a.map((J) => O(J)));
  if (D.includes(null)) return null;
  let pe = (J, fe) => !p || J.executable === (((D[fe]?.mode ?? 0) & 64) !== 0),
    re = a.filter((J, fe) => D[fe]?.id !== J.blobId),
    te =
      o ??
      (re.length === 0
        ? createFilterFreeBlobIdHasher(e)
        : createFilterFreeBlobIdHasher(
            e,
            await getFilterFreePaths(
              e,
              re.map((J) => J.path),
              C,
            ),
          )),
    ge = createConcurrencyLimiter(Ss, (J) =>
      vs(C, async () => {
        let fe = await ru({ anchor: N, rel: J.path }, tu, C);
        return fe === null ? null : te(J.path, fe, C).catch(() => null);
      }),
    ),
    le = await Promise.all(
      a.map((J, fe) => (D[fe]?.id === J.blobId ? null : ge(J))),
    );
  if (C.aborted) return null;
  return countMatching(
    a.map(
      (J, fe) => (D[fe]?.id === J.blobId || le[fe] === J.blobId) && pe(J, fe),
    ),
    (J) => !J,
  );
}
var tu = 8388608;
function vs(e, t) {
  return e.aborted
    ? Promise.resolve(null)
    : new Promise((r) => {
        let o = () => r(null);
        (e.addEventListener("abort", o, { once: !0 }),
          t().then(
            (s) => {
              (e.removeEventListener("abort", o), r(s));
            },
            () => {
              (e.removeEventListener("abort", o), r(null));
            },
          ));
      });
}
async function nu(e, t, r, o) {
  if (o?.aborted === !0) return null;
  let s = null;
  try {
    let a =
      r === void 0 ? await Nr(e, { bigint: !0 }) : await r.anchor.lstat(r.rel);
    if (!a.isFile()) return null;
    s =
      r === void 0
        ? await Yd(e, getSafeReadOpenFlags())
        : await r.anchor.open(r.rel, ao.O_RDONLY | ao.O_NONBLOCK);
    let d = await s.stat({ bigint: !0 });
    if (
      !d.isFile() ||
      d.ino === 0n ||
      d.nlink > 1n ||
      d.dev !== a.dev ||
      d.ino !== a.ino
    )
      return null;
    let f = qd(t).update(`blob ${d.size}\x00`),
      p = 0n;
    for await (let y of s.createReadStream({ autoClose: !1 })) {
      if (o?.aborted) return null;
      (f.update(y), (p += BigInt(y.length)));
    }
    return p === d.size ? { id: f.digest("hex"), mode: Number(d.mode) } : null;
  } catch {
    return null;
  } finally {
    await s?.close().catch(() => {});
  }
}
async function ru(e, t, r) {
  if (r?.aborted === !0) return null;
  let o = null;
  try {
    let s = await e.anchor.lstat(e.rel);
    if (!s.isFile() || s.size > BigInt(t)) return null;
    o = await e.anchor.open(e.rel, ao.O_RDONLY | ao.O_NONBLOCK);
    let a = await o.stat({ bigint: !0 });
    if (
      !a.isFile() ||
      a.ino === 0n ||
      a.nlink > 1n ||
      a.dev !== s.dev ||
      a.ino !== s.ino ||
      a.size > BigInt(t)
    )
      return null;
    let d = [],
      f = 0n;
    for await (let p of o.createReadStream({ autoClose: !1 })) {
      if (r?.aborted) return null;
      if ((d.push(p), (f += BigInt(p.length)), f > BigInt(t))) return null;
    }
    return f === a.size ? Buffer.concat(d) : null;
  } catch {
    return null;
  } finally {
    await o?.close().catch(() => {});
  }
}
async function Is(e, t, r) {
  if (t.length === 0) return 0;
  let o = await runPinnedGit(e, ["ls-files", "-s", "-z"], r, eu);
  if (o.code !== 0) return null;
  let s = new Set(t.map((d) => d.path)),
    a = o.stdout.split("\x00").reduce((d, f) => {
      let p = f.indexOf("\t"),
        y = f.slice(p + 1);
      if (p !== -1 && s.has(y)) {
        let [w = "", k = "", _ = ""] = f.slice(0, p).split(" ");
        d.set(y, [...(d.get(y) ?? []), { mode: w, id: k, stage: _ }]);
      }
      return d;
    }, new Map());
  return countMatching(t, (d) => {
    let f = a.get(d.path) ?? [];
    if (f.length === 0) return !(d.old === null || d.kind === "removed");
    if (f.length > 1 || f[0].stage !== "0") return !0;
    let { mode: p, id: y } = f[0],
      w = d.old !== null && d.old.mode === p && d.old.id === y,
      k = d.kind === "file" && d.mode === p && d.blobId === y;
    return !(w || k);
  });
}
async function Ns(e, t, r) {
  if (t.length === 0) return 0;
  if (r === null) return t.length;
  if (
    (
      await runDirSyncGit(e, [
        "rev-parse",
        "-q",
        "--verify",
        "--end-of-options",
        r + "^{tree}",
      ])
    ).exitCode !== 0
  )
    return null;
  let s = new Map();
  for (let a of $o(
    t.map((d) => ":(literal)" + d.path),
    Jd,
    Zd,
  )) {
    let d = await runDirSyncGit(e, ["ls-tree", "-z", "--full-tree", r, "--", ...a], {
      env: Lo,
    });
    if (d.exitCode !== 0) return null;
    for (let f of d.stdout.split("\x00").filter(Boolean)) {
      let p = f.indexOf("\t"),
        [y = "", w = "", k = ""] = f.slice(0, p).split(" ");
      s.set(f.slice(p + 1), { mode: y, type: w, id: k });
    }
  }
  return countMatching(t, (a) => {
    let d = s.get(a.path);
    return a.kind === "removed"
      ? d !== void 0 && d.type !== "tree"
      : a.kind !== "file" ||
          d === void 0 ||
          d.type !== "blob" ||
          d.id !== a.blobId ||
          d.mode !== a.mode;
  });
}
function $o(e, t, r) {
  return e.reduce((o, s) => {
    let a = o.at(-1),
      d = s.length + 3,
      f = a?.reduce((p, y) => p + y.length + 3, 0) ?? 0;
    if (a === void 0 || a.length >= t || f + d > r) o.push([s]);
    else a.push(s);
    return o;
  }, []);
}
async function ou(e, t, r) {
  let o = t.split("/").slice(0, -1);
  for (let s = 1; s <= o.length; s++) {
    let a = o.slice(0, s).join("/"),
      d = r.get(a);
    if (d === void 0)
      ((d = Nr(yn(e, a)).then(
        (f) => f.isSymbolicLink(),
        () => !1,
      )),
        r.set(a, d));
    if (await d) return !0;
  }
  return !1;
}
import { readdir as iu, unlink as su } from "fs/promises";
import { join as Ls } from "path";
var Fs = 104857600;
async function Bs({
  side: e,
  project: t,
  sideRef: r,
  projectRef: o,
  head: s,
  incomingHead: a,
}) {
  let d = await runDirSyncGit(t, [
    "rev-parse",
    "-q",
    "--verify",
    "--end-of-options",
    o + "^{commit}",
  ]);
  if (d.exitCode === 0 && d.stdout.trim() === a)
    return (await $s(t.gitDir), "present");
  if (!(await writeSessionRefs(e, [{ name: r, id: a }])))
    return V("git_error", "the side ref could not be written");
  let f = await createBundle({
    repository: e,
    tips: [r],
    prerequisites: [s],
    maxBytes: Fs,
  });
  if (!f.ok)
    return f.reason === "aborted"
      ? { kind: "aborted" }
      : f.reason === "too_large"
        ? V(
            "too_large",
            "more history than one transfer carries separates the two HEADs",
          )
        : V("objects_unavailable", f.reason);
  let p = await receiveBundle({
    repository: t,
    content: f.content,
    targets: new Map([[r, o]]),
    heldBases: [s],
    heldRefs: "all",
    maxBytes: Fs,
  });
  if ((await $s(t.gitDir), !p.ok))
    return p.reason === "aborted"
      ? { kind: "aborted" }
      : p.reason === "too_large"
        ? V(
            "too_large",
            "more history than one transfer carries separates the two HEADs",
          )
        : V("objects_unavailable", p.reason);
  return "present";
}
async function $s(e) {
  let t = Ls(e, "objects", "pack"),
    r = await iu(t).catch((o) => {
      if (!W(o))
        logForDebugging(`dir-sync: could not list ${t} for delivery records: ${l(o)}`);
      return [];
    });
  await Promise.all(
    r
      .filter((o) => o.startsWith(INCOMING_PACK_PREFIX) && o.endsWith(DELIVERED_IDS_SUFFIX))
      .map((o) =>
        su(Ls(t, o)).catch((s) => {
          if (!W(s)) logForDebugging(`dir-sync: could not remove a delivery record: ${l(s)}`);
        }),
      ),
  );
}
var Ms = 1e4,
  Bo = 67108864,
  Us = 64,
  Gs = /^:([0-7]{6} [0-7]{6}) [0-9a-f]{40,64} [0-9a-f]{40,64} ([A-Z])\d*$/,
  lu = "branch-tip",
  du = 200,
  uu = 24000,
  cu = async () => new Set();
async function js({
  gitRoot: e,
  side: t,
  sessionId: r,
  receivedRef: o,
  expectedHead: s,
  expectedBranch: a,
  sentWorktree: d,
  keepLocal: f = [],
  keepRemoved: p = [],
  neverFrom: y = [],
  neverByName: w,
  refusedInHistory: k,
  trackedInIndex: _ = cu,
  neverRemovedByName: E = w,
  isWithheld: R,
  checkoutEnv: N,
  signal: C,
}) {
  try {
    return await fu({
      gitRoot: e,
      side: { ...t, signal: C },
      sessionId: r,
      receivedRef: o,
      expectedHead: s,
      expectedBranch: a,
      sentWorktree: d,
      keepLocal: f,
      keepRemoved: p,
      neverFrom: y,
      neverByName: w,
      refusedInHistory: k,
      trackedInIndex: _,
      neverRemovedByName: E,
      isWithheld: R,
      checkoutEnv: N,
      signal: C,
    });
  } catch (O) {
    return C?.aborted === !0
      ? { kind: "aborted" }
      : V("git_error", O instanceof Error ? O.message : "unexpected throw");
  }
}
async function fu({
  gitRoot: e,
  side: t,
  sessionId: r,
  receivedRef: o,
  expectedHead: s,
  expectedBranch: a,
  sentWorktree: d,
  keepLocal: f,
  keepRemoved: p,
  neverFrom: y,
  neverByName: w,
  refusedInHistory: k,
  trackedInIndex: _,
  neverRemovedByName: E = w,
  isWithheld: R,
  checkoutEnv: N,
  signal: C,
}) {
  let O = (q) => runPinnedGit(e, q, C, void 0, { ...N });
  if (!GIT_OBJECT_ID_REGEX.test(s))
    return V("bad_arguments", "expectedHead is not an object id");
  let D = `refs/claude/sessions/${r}/head`,
    pe = buildSessionRefName(r, lu),
    re = buildSessionRefName(r, "x")?.replace(/x$/, "");
  if (!isClaudeSessionRef(D) || pe === null || re === void 0)
    return V("bad_arguments", "the session id cannot name a ref");
  let te = (q) => (C?.aborted === !0 ? { kind: "aborted" } : q);
  if (!isClaudeSessionRef(o) || !o.startsWith(re) || o === pe)
    return V("bad_arguments", "the received ref is not one of this session");
  let ge = await runDirSyncGit(t, [
      "rev-parse",
      "-q",
      "--verify",
      "--end-of-options",
      o + "^1",
    ]),
    le = ge.stdout.trim();
  if (ge.exitCode !== 0 || !GIT_OBJECT_ID_REGEX.test(le))
    return te(
      V(
        "objects_unavailable",
        "the received ref does not name a work-tree commit here",
      ),
    );
  let [J, fe, K, ee] = await Promise.all([
    O(["rev-parse", "--absolute-git-dir"]),
    O(["rev-parse", "--git-common-dir"]),
    O(["symbolic-ref", "-q", "HEAD"]),
    O(["rev-parse", "-q", "--verify", "HEAD^{commit}"]),
  ]);
  if (J.code !== 0 || fe.code !== 0 || ee.code !== 0)
    return te(V("git_error", "the checkout could not be read"));
  if (K.code !== 0)
    return K.exitCode === 1
      ? V("detached", "HEAD is not on a branch")
      : te(V("git_error", "HEAD could not be read"));
  if (a === null)
    return V("detached", "the last upload went from a detached HEAD");
  let ye = K.stdout.trim(),
    Ge = ee.stdout.trim(),
    at = au(e, fe.stdout.trim());
  if (ye !== "refs/heads/" + a)
    return V(
      "branch_switched",
      "HEAD names another branch than the one the last upload went from",
    );
  if (Ge === le)
    return (
      await runDirSyncGit(
        { gitDir: at, commonDir: at, timeoutMs: t.timeoutMs },
        ["update-ref", "--no-deref", "-d", D, le],
        { env: { ...N } },
      ),
      { kind: "already", head: Ge }
    );
  if (Ge !== s)
    return V("head_moved", "HEAD is no longer the commit that last went up");
  let je = J.stdout.trim(),
    Ae = await Fo(je, e);
  if (Ae === void 0)
    return te(V("git_error", "the git directory could not be read"));
  if (Ae !== null)
    return V(
      "operation_in_progress",
      "a " + Ae + " is stopped mid-way in this checkout",
    );
  let vt = async () => {
      let q = await Os({
        gitRoot: e,
        gitDir: je,
        commonDir: at,
        branch: ye,
        signal: C,
        env: { ...N },
      });
      if (q === null)
        return te(
          V(
            "git_error",
            "the repository's working trees could not be examined",
          ),
        );
      return q.length === 0
        ? null
        : V(
            "checked_out_elsewhere",
            `branch ${cn([a])} is also checked out in another working tree of this repository (${cn(q)})`,
          );
    },
    Xe = await vt();
  if (Xe !== null) return Xe;
  let wt = { gitDir: at, commonDir: at, signal: C, timeoutMs: t.timeoutMs },
    Wt = await runDirSyncGit(t, ["merge-base", "--is-ancestor", Ge, le]);
  if (Wt.exitCode === 1)
    return V(
      "not_descendant",
      "the cloud session's commits do not build on this checkout's HEAD (you committed here since the message they answer, or Claude rewrote history it had)",
    );
  if (Wt.exitCode !== 0)
    return te(
      V(
        "objects_unavailable",
        "the incoming commit is not in the side repository",
      ),
    );
  let tt = await xs(t, Ge, le);
  if (tt === null)
    return te(V("git_error", "the touched paths could not be listed"));
  if (tt.length > Ms) return V("too_many_paths", tt.length + " paths change");
  if (tt.some((q) => q.kind === "unsupported"))
    return V(
      "unsupported_entry",
      "a touched path is a symbolic link or submodule in the incoming commit",
    );
  if (!tt.every((q) => isSafePortablePath(q.path) && !q.path.includes("\uFFFD")))
    return V(
      "unsupported_entry",
      "a touched path is not a name this machine can safely hold",
    );
  let Q = new Set(y),
    ze = tt.filter((q) => Q.has(q.path) || w(q.path));
  if (ze.length > 0) {
    let q = ze.every((Ne) => Ne.kind === "removed")
      ? "deleted"
      : ze.some((Ne) => Ne.kind === "removed")
        ? "changed or deleted"
        : "changed";
    return V(
      "protected_path",
      `Claude ${q} ${cn(ze.map((Ne) => Ne.path))}, which this machine never takes from the cloud`,
    );
  }
  let bt = new Set(f),
    Ut = tt.filter((q) => bt.has(q.path));
  if (Ut.length > 0) {
    let q = Ws(Ut).map((De) => De.change),
      Ne = q.every((De) => De === "added"),
      Ke = q.every((De) => De === "removed")
        ? "deleted"
        : Ne
          ? "created"
          : "changed",
      Ot = Ut.length === 1 ? "it" : "them";
    return V(
      "kept_path_changed",
      `Claude ${Ke} ${cn(Ut.map((De) => De.path))}${Ne ? " at a path this machine does not take from the cloud session" : `, which this machine keeps as you have ${Ot}`}`,
    );
  }
  let ft = new Set(p),
    Lt = (q) => ft.has(q.path) && q.kind === "removed",
    _t = tt.filter(Lt),
    jt = tt.filter((q) => !Lt(q)),
    sn = await hu(t, Ge, le, (q) => R(q) !== !1);
  if (sn === null)
    return te(V("git_error", "the incoming history could not be listed"));
  if (sn === "too_many_merges")
    return V("too_large", `the incoming history holds more than ${Us} merges`);
  let ht = sn.filter((q) => q.mode === "120000" || q.mode === "160000");
  if (ht.length > 0)
    return V(
      "unsupported_entry",
      `Claude's commits carry a symbolic link or submodule at ${cn(dedupe(ht.map((q) => q.path)))}`,
    );
  let Rt = dedupe(sn.filter((q) => !q.deleted).map((q) => q.path)),
    mt = dedupe(
      sn
        .filter((q) => q.deleted)
        .map((q) => q.path)
        .filter((q) => w(q) || E(q)),
    );
  if (mt.length > 0)
    return V(
      "protected_path",
      `Claude's commits remove ${cn(mt)} somewhere in their history, a name this machine never lets the cloud remove`,
    );
  let lt = Rt.filter((q) => k(q, !1)),
    zt = lt.filter((q) => k(q, !0));
  if (zt.length > 0)
    return V(
      "protected_path",
      `Claude's commits change ${cn(zt)} somewhere in their history, a name this machine does not take from the cloud`,
    );
  if (lt.length > Ms)
    return V(
      "too_many_paths",
      lt.length + " dependency-directory paths change in the history",
    );
  if (lt.length > 0) {
    let q = await _(lt, C);
    if (q === null) return te(V("git_error", "the index could not be read"));
    let Ne = lt.filter((Ke) => !q.has(Ke));
    if (Ne.length > 0) {
      let Ke = Ne.length === 1 ? "that file" : "those files";
      return V(
        "untracked_dependency_path",
        `Claude's commits put ${cn(Ne)} under a dependency directory (vendor/, node_modules/, build/ \u2026) somewhere in their history, where this machine takes from the cloud only files this checkout tracks and has in its working tree (not a path outside a sparse checkout or marked skip-worktree); to let the branch follow, have this checkout track ${Ke} first, or have Claude keep new files out of such directories`,
      );
    }
  }
  let Je = Rt.filter((q) => w(q));
  if (Je.length > 0)
    return V(
      "protected_path",
      `Claude's commits touch ${cn(Je)}, which this machine never takes from the cloud`,
    );
  let Ft = Rt.map((q) => R(q));
  if (Ft.some((q) => q === null))
    return V("rules_unreadable", "the upload rules could not be read");
  let St = Rt.filter((q, Ne) => Ft[Ne] === !0);
  if (St.length > 0)
    return V(
      "withheld_in_range",
      `Claude's commits touch ${cn(St)}, which this machine keeps out of sync`,
    );
  let ne = await d();
  if (ne.kind === "refused") return te(V("not_vouched", ne.detail));
  if (ne.worktreeCommit !== null && !GIT_OBJECT_ID_REGEX.test(ne.worktreeCommit))
    return V("bad_arguments", "the vouching snapshot is not an object id");
  let ae = await Ns(t, jt, ne.worktreeCommit);
  if (ae !== 0)
    return te(
      V(
        ae === null ? "git_error" : "not_yet_sent",
        ae === null
          ? "the sent snapshot could not be read"
          : "a touched file is not yet in the session as this machine last sent it",
      ),
    );
  let Tt = await Do(e, jt, C);
  if (Tt === null)
    return te(V("git_error", "the working files could not be compared"));
  if (Tt > 0)
    return V(
      "files_differ",
      "a touched path does not hold the incoming content",
    );
  let me = await Is(e, jt, C),
    At = await mu(
      e,
      _t.map((q) => q.path),
      N,
      C,
    );
  if (me === null || At === null)
    return te(V("git_error", "the index could not be read"));
  if (me > 0 || At > 0)
    return V(
      "staged_changes",
      "something staged differs on a path the incoming commits touch",
    );
  let xe = Ws(_t);
  if (C?.aborted === !0) return { kind: "aborted" };
  let nt = await Bs({
    side: t,
    project: wt,
    sideRef: pe,
    projectRef: D,
    head: Ge,
    incomingHead: le,
  });
  if (nt !== "present") return te(nt);
  let ve = await _s({
    gitRoot: e,
    gitDir: je,
    branch: ye,
    head: Ge,
    incomingHead: le,
    paths: tt.length,
    keptLocal: xe,
    checkoutEnv: N,
    recheck: async () => {
      let q = await Fo(je, e);
      if (q !== null)
        return V(
          q === void 0 ? "git_error" : "operation_in_progress",
          q === void 0
            ? "the git directory could not be read"
            : "a " + q + " is stopped mid-way in this checkout",
        );
      let Ne = await vt();
      if (Ne !== null) return Ne;
      let Ke = await Do(e, jt, C);
      return Ke === 0
        ? null
        : te(
            V(
              Ke === null ? "git_error" : "files_differ",
              Ke === null
                ? "the working files could not be compared"
                : "a touched path no longer holds the incoming content",
            ),
          );
    },
  });
  if (ve.kind === "fast_forwarded")
    await runDirSyncGit(
      { ...wt, signal: void 0 },
      ["update-ref", "--no-deref", "-d", D, le],
      { env: { ...N } },
    );
  return ve;
}
async function hu(e, t, r, o = () => !1) {
  let s = [
      "-c",
      "log.showSignature=false",
      "-c",
      "log.showRoot=true",
      "-c",
      "diff.ignoreSubmodules=none",
    ],
    a = [
      "--no-ext-diff",
      "--no-textconv",
      "--raw",
      "--no-abbrev",
      "--no-renames",
      "-z",
    ],
    d = await runDirSyncGit(
      e,
      [
        ...s,
        "log",
        "--no-merges",
        "--format=",
        ...a,
        "--diff-filter=AMTD",
        `${t}..${r}`,
      ],
      { maxBuffer: Bo },
    );
  if (d.exitCode !== 0) return null;
  let f = await runDirSyncGit(e, [...s, "rev-list", "--merges", `${t}..${r}`]);
  if (f.exitCode !== 0) return null;
  let p = f.stdout
    .split(
      `
`,
    )
    .filter((_) => _ !== "");
  if (!p.every((_) => GIT_OBJECT_ID_REGEX.test(_))) return null;
  if (p.length > Us) return "too_many_merges";
  let y = Hs(
    d.stdout.split("\x00").filter((_) => _ !== ""),
    Gs,
  );
  if (y === null) return null;
  let w = [];
  for (let _ of p) {
    let [E, R] = await Promise.all([
      runDirSyncGit(
        e,
        [
          ...s,
          "diff-tree",
          "-r",
          "-m",
          "--no-commit-id",
          ...a,
          "--diff-filter=AMTD",
          _,
        ],
        { maxBuffer: Bo },
      ),
      runDirSyncGit(
        e,
        [...s, "diff-tree", "-r", "--no-renames", "--name-only", "-z", t, _],
        { maxBuffer: Bo },
      ),
    ]);
    if (E.exitCode !== 0 || R.exitCode !== 0) return null;
    let N = Hs(
      E.stdout.split("\x00").filter((O) => O !== ""),
      Gs,
    );
    if (N === null) return null;
    let C = new Set(R.stdout.split("\x00").filter((O) => O !== ""));
    w.push(...N.filter((O) => C.has(O.path) || o(O.path)));
  }
  let k = new Set();
  return [...y, ...w].filter((_) => {
    let E = `${_.mode} ${_.path}`;
    if (k.has(E)) return !1;
    return (k.add(E), !0);
  });
}
function Hs(e, t) {
  if (e.length % 2 !== 0) return null;
  let r = [];
  for (let o = 0; o < e.length; o += 2) {
    let s = t.exec(e[o]);
    if (s === null) return null;
    let a = s[1].trim().split(" "),
      d = s[2];
    if (/[AMT]/.test(d))
      r.push({ mode: a.at(-1), path: e[o + 1], deleted: !1 });
    else if (d.includes("D"))
      r.push({ mode: a.at(-1), path: e[o + 1], deleted: !0 });
  }
  return r;
}
function Ws(e) {
  return e.map((t) => ({
    path: t.path,
    change:
      t.kind === "removed" ? "removed" : t.old === null ? "added" : "modified",
  }));
}
async function mu(e, t, r, o) {
  let s = 0;
  for (let a of $o(
    t.map((d) => ":(literal)" + d),
    du,
    uu,
  )) {
    let d = await runPinnedGit(
      e,
      [
        "diff",
        "--cached",
        "--name-only",
        "--no-renames",
        "--no-ext-diff",
        "-z",
        "--",
        ...a,
      ],
      o,
      void 0,
      { ...r, ...Lo },
    );
    if (d.code !== 0) return null;
    s += countMatching(d.stdout.split("\x00"), (f) => f !== "");
  }
  return s;
}
function cn(e) {
  let t = e
    .slice(0, 3)
    .map((r) => "`" + r.replace(/`/g, "'") + "`")
    .join(", ");
  return e.length > 3 ? `${t} and ${e.length - 3} more` : t;
}
import { createHash as Cu } from "crypto";
import { lstat as fr, readdir as Ou } from "fs/promises";
import { devNull } from "os";
import { join as Tn, posix } from "path";
var dr = ".claude-cloud-trash",
  Ks = 384,
  pu = 448,
  gu = new Set(["EROFS", "ENAMETOOLONG"]);
async function wu(e, t, r, o, s) {
  let a = r?.get(e);
  if (a === void 0) return !1;
  if (a === t) return !0;
  return (await o([e], s).catch(() => new Map())).get(e) === a;
}
function qs(e, t, r, o = new Map(), s = async () => new Map(), a) {
  let d = e !== null && !e.rootOnly && e.backend !== "by_name" ? e : null;
  return {
    trashRel: t,
    shouldKeep: async (f, p) =>
      o.get(f) !== p.sha256 && !(await wu(f, p.gitBlobId, r, s, a)),
    discard: async (f) => {
      await d?.unlink(f);
    },
    keep: async (f, p, y) => {
      if (d === null) return null;
      let w = await yu(d, t, f, p, y).catch((k) => {
        let _ = A(k);
        if (_ === void 0 || !gu.has(_)) throw k;
        return (logForDebugging(`dirSync pull: no copy kept of ${replaceControlChars(f)} (${_})`), null);
      });
      if (w === null) return null;
      if (t.startsWith(dr)) await bu(d);
      return (
        logForDebugging(`dirSync pull: kept the replaced copy of ${replaceControlChars(f)} at ${replaceControlChars(w)}`),
        w
      );
    },
  };
}
async function yu(e, t, r, o, s) {
  return zs(e, t, r, o, s).catch((a) => {
    if (A(a) !== "WORKING_PARENT_NOT_DIRECTORY") throw a;
    return zs(e, `${t}/${Date.now().toString(36)}`, r, o, s);
  });
}
async function zs(e, t, r, o, s) {
  let a = `${t}/${r}`;
  return (await e.mkdirp(a.slice(0, a.lastIndexOf("/")), pu), _u(e, a, o, s));
}
async function bu(e) {
  await e
    .create(
      `${dr}/.gitignore`,
      Buffer.from(`*
`),
      Ks,
    )
    .catch(() => {});
}
async function _u(e, t, r, o) {
  let s = (o & 448) | Ks;
  try {
    return (await e.create(t, r, s), t);
  } catch (a) {
    if (A(a) !== "EEXIST") throw a;
    let d = Su(t, Date.now().toString(36));
    return (await e.create(d, r, s), d);
  }
}
var ku = 255;
function Su(e, t) {
  let r = e.lastIndexOf("/"),
    o = e.slice(0, r + 1),
    s = e.slice(r + 1),
    a = `.${t}`,
    d = ku - Buffer.byteLength(a),
    f =
      Buffer.byteLength(s) <= d
        ? s
        : Buffer.from(s)
            .subarray(0, d)
            .toString("utf8")
            .replace(/\uFFFD+$/, "");
  return `${o}${f}${a}`;
}
import { lstat as Eu, readdir as Pu } from "fs/promises";
import { join as Ys } from "path";
async function Ru(e) {
  try {
    return (await Pu(e, { withFileTypes: !0 })).reduce((t, r) => {
      let o = r.name.normalize("NFC");
      return t.set(o, (t.get(o) ?? !0) && r.isDirectory());
    }, new Map());
  } catch (t) {
    let r = A(t);
    return r === "ENOENT" || r === "ENOTDIR" ? "absent" : "unreadable";
  }
}
async function vu(e) {
  try {
    return (await Eu(e)).isDirectory() ? "directory" : "other";
  } catch (t) {
    let r = A(t);
    return r === "ENOENT" || r === "ENOTDIR" ? "gone" : "unreadable";
  }
}
function Xs(e) {
  let t = new Map(),
    r = (o) => {
      let s = t.get(o);
      if (s !== void 0) return s;
      let a = Ru(o);
      return (t.set(o, a), a);
    };
  return async (o) => {
    let s = e,
      a = o.split("/");
    for (let [d, f] of a.entries()) {
      let p = await r(s);
      if (p === "absent") return "other";
      if (p === "unreadable") return "unknown";
      let y = p.get(f.normalize("NFC"));
      if (y === void 0) return "other";
      if (d === a.length - 1) return "exact";
      let w = y ? "directory" : await vu(Ys(s, f));
      if (w !== "directory") return w === "unreadable" ? "unknown" : "other";
      s = Ys(s, f);
    }
    return "exact";
  };
}
function Tu(e) {
  let t = Xs(e);
  return async (r) => (await t(r)) !== "other";
}
function Mo(e, t) {
  return Xs(e)(t);
}
var Au = 4;
async function Go(e, t, r) {
  let o = partitionCaseCollisions(t, r),
    s = dedupe(o.colliding.map((w) => w.collidesWith)),
    a = Tu(e),
    d = createConcurrencyLimiter(Au, async (w) => ({ spelling: w, present: await a(w) })),
    p = (await Promise.all(s.map(d))).flatMap((w) =>
      w.present ? [] : [w.spelling],
    ),
    y = r.filter((w) => !p.some((k) => w === k || w.startsWith(k + "/")));
  if (y.length === r.length) return o;
  return Go(e, t, y);
}
var xu = 25,
  Iu = 256,
  Nu = 104857600,
  Lr = 67108864,
  da = 4,
  Uo = {
    GIT_LITERAL_PATHSPECS: "1",
    GIT_GLOB_PATHSPECS: "0",
    GIT_NOGLOB_PATHSPECS: "0",
    GIT_ICASE_PATHSPECS: "0",
  },
  Lu = { ...Uo, GIT_LITERAL_PATHSPECS: "0" },
  Fu = 4096,
  Du = "apply-down keeps no copies",
  Js = 4,
  $u = 5000,
  Bu = {
    GIT_CONFIG_GLOBAL: devNull,
    GIT_CONFIG_SYSTEM: devNull,
    GIT_CONFIG_NOSYSTEM: "1",
  },
  Mu = 64,
  Gu = 64,
  Hu = 64,
  Wu = 4,
  Uu = 8,
  Ho = 32,
  ju = 8,
  Ku = 4194304,
  qu = {
    ignored_here: "ignored_here",
    withheld_sensitive: "credential_name",
    withheld_sensitive_tracked: "credential_name",
    withheld_content_filter: "other",
    withheld_read_denied: "read_denied",
    withheld_rules_unreadable: "rules_unreadable",
    too_large: "too_large",
    unverified_object: "unverified_object",
    writer_refused: "other",
    name_refused: "name_refused",
    outside_checkout: "outside_checkout",
    protected_name: "protected_name",
    case_collision: "case_collision",
    not_a_regular_file: "not_regular_file",
    not_regular_file: "not_regular_file",
    trash_refused: "trash_refused",
    unreadable: "unreadable",
  };
function Yu(e) {
  let t = new Map(e.refused.map((s) => [s.path, s.reason])),
    r = new Set(e.skippedDown),
    o = new Set(e.parkedRemovals);
  return e.notInstalled.map((s) => {
    let a = t.get(s),
      d = r.has(s)
        ? "changed_here"
        : o.has(s)
          ? "held_delete"
          : a === void 0
            ? "other"
            : isKnownSyncSkipReason(a)
              ? a
              : (qu[a] ?? "other");
    return { path: s, reason: d };
  });
}
function uo(e) {
  return {
    installed: [],
    trashed: [],
    alreadyEqual: [],
    skippedDown: [],
    notInstalled: [],
    notInstalledTruncated: !1,
    notTaken: [],
    refused: [],
    conflictedCopies: [],
    deletesHeldBack: 0,
    heldRemovals: [],
    parkedRemovals: [],
    contentWritten: [],
    replaced: [],
    replacedEarlierCloud: [],
    deletesHeldRemembered: 0,
    parkedOverflow: !1,
    roundCapped: !1,
    installsWithdrawn: [],
    keptFromEarlierLife: [],
    movedToTrash: [],
    installsWithdrawnAhead: 0,
    reportLines: [...e],
  };
}
function jo(e) {
  return (
    Buffer.byteLength(e) > Fu ||
    e.includes("\uFFFD") ||
    checkSeedPath(e) === "unsupported_characters" ||
    (isWindowsLikePlatform() && hasWindowsReservedPathComponent(e))
  );
}
var Xu = { maxPaths: Iu, maxBytes: Nu, maxDeletes: xu };
function gFt({
  gitRoot: e,
  realRoot: t,
  sessionId: r,
  objects: o,
  checkout: s,
  deps: a,
}) {
  let d = new Map();
  return async ({ workerNote: f, content: p, record: y, signal: w }) => {
    let k = y.start.kind === "seed" ? y.start : null,
      _ = y.received
        .filter((O) => O.worktreeCommit !== f.worktreeCommit)
        .toReversed(),
      E = f.recreatedAfterTurn ?? 0,
      R = await Ju({
        objects: o.withSignal(w),
        checkout: s,
        sessionId: r,
        gitRoot: e,
        realRoot: t,
        workerNote: f,
        content: p,
        lastSent:
          y.sent[0] ??
          (k === null
            ? null
            : { generation: 0, worktreeCommit: k.worktreeCommit }),
        heldOut: new Map([
          ...(k === null ? [] : [[0, k.worktreeCommit]]),
          ...y.sent.map((O) => [O.generation, O.worktreeCommit]),
        ]),
        heldBases: dedupe([
          ...y.sent.map((O) => O.worktreeCommit),
          ...y.received.map((O) => O.worktreeCommit),
          ...getStartBasisCommits(y.start),
        ]),
        historyRoots: getHistoryRoots(y.start),
        agentHeadContainsBasis: f.agentHeadContainsBasis,
        installedHere: d,
        receivedHistory: _.map((O) => O.worktreeCommit),
        lifeBoundary:
          E > 0
            ? (_.find((O) => O.generation > E)?.worktreeCommit ??
              f.worktreeCommit)
            : null,
        numberingRegressed: _.some((O) => O.generation >= f.generation),
        installedSinceUpload: new Map(
          y.installedSinceUpload.map((O) => [O.path, O]),
        ),
        installedBefore: new Map(
          (y.installedEarlier ?? []).map((O) => [O.path, O.blobId]),
        ),
        priorParked: y.parkedRemovals,
        priorParkedOverflow: y.parkedRemovalsOverflow,
        deps: a,
        ...(w && { signal: w }),
      });
    for (let O of [...R.trashed.map((D) => D.path), ...R.installsWithdrawn])
      d.delete(O);
    let N = new Set(R.contentWritten);
    for (let O of R.installed) if (N.has(O.path)) d.set(O.path, O.blobId);
    return {
      received: R.received,
      roundSkipped: R.roundSkipped,
      installed: [
        ...R.installed,
        ...R.trashed.map((O) => ({ path: O.path, blobId: null, mode: O.mode })),
      ],
      notInstalled: Yu(R),
      notInstalledTruncated: R.notInstalledTruncated,
      skippedDown: R.skippedDown,
      refused: R.refused,
      conflictedCopies: R.conflictedCopies,
      deletesHeldBack: R.deletesHeldBack,
      deletesHeldRemembered: R.deletesHeldRemembered,
      parkedOverflow: R.parkedOverflow,
      heldRemovals: R.heldRemovals,
      parkedRemovals: R.parkedRemovals,
      replaced: R.replaced,
      replacedEarlierCloud: R.replacedEarlierCloud,
      contentWritten: R.contentWritten,
      roundCapped: R.roundCapped,
      installsWithdrawn: R.installsWithdrawn,
      keptFromEarlierLife: R.keptFromEarlierLife,
      movedToTrash: R.movedToTrash,
      installsWithdrawnAhead: R.installsWithdrawnAhead,
      reportLines: R.reportLines,
    };
  };
}
function ua(e, t = Lr) {
  let r = null,
    o = async (a, d) => {
      let f = async () => {
        let p = await fa(a, d, t);
        if (p === null || p === "too_large") return ((r = null), p);
        return (
          (r = p.paths.some(na) ? null : p),
          { paths: p.paths, blobIds: p.blobIds }
        );
      };
      if (r === null || !GIT_OBJECT_ID_REGEX.test(d)) return f();
      if (r.commit !== d) {
        let p = r,
          y = await Zs(a, p.commit, d);
        if (y === null || y === "too_large" || [...y.keys()].some(na))
          return f();
        if (((r = ic(p, d, y)), r.listedBytes > t))
          return ((r = null), "too_large");
      }
      return { paths: r.paths, blobIds: r.blobIds };
    },
    s = (a) => ({
      withSignal: (d) => s({ ...a, ...(d && { signal: d }) }),
      diffTrees: (d, f) => Zs(a, d, f),
      listTreePaths: (d, f) => ec(a, d, f),
      listTree: (d) => o(a, d),
      commitParents: (d) => tc(a, d),
      holdsCommit: (d) => rc(a, d),
      isAncestor: (d, f) => sc(a, d, f),
      blobIdsOfTrees: (d) => fc(a, d),
      heldInOwnRight: (d) => hc(a, d),
      firstCommitCarrying: (d, f) => uc(a, d, f),
      receiveBundle: (d) => receiveBundle({ ...d, repository: a }),
      deleteRefs: (d) => deleteSessionRefs(a, d),
      openBlobReader: (d) => openBlobReader(a, d),
    });
  return s(e);
}
function ca(e, t = {}) {
  return {
    ignoredHere: (r, o) => mc(e, r, o),
    trackedHere: (r, o) => zo(e, r, o),
    modesTrusted: (r) => Zu(e, r),
    filterAttributed: createFilterAttributedChecker(e),
    cleanFilterBlobIds: createCleanFilterBlobIds(e),
    ...t,
  };
}
function ur(e) {
  return {
    ...uo(e),
    received: { kind: "refused", reason: "git_error" },
    roundSkipped: null,
  };
}
async function Ju(e) {
  try {
    return await Qu(e);
  } catch (t) {
    return (
      logError(t),
      {
        ...uo(e.workerNote.report),
        received: { kind: "refused", reason: "git_error" },
        roundSkipped: null,
      }
    );
  }
}
async function Qu({
  objects: e,
  checkout: t,
  sessionId: r,
  gitRoot: o,
  realRoot: s,
  workerNote: a,
  content: d,
  lastSent: f,
  heldOut: p,
  heldBases: y = [],
  historyRoots: w = [],
  agentHeadContainsBasis: k = null,
  installedHere: _ = new Map(),
  receivedHistory: E = [],
  lifeBoundary: R = null,
  numberingRegressed: N = !1,
  installedBefore: C = new Map(),
  priorParked: O = [],
  priorParkedOverflow: D = !1,
  installedSinceUpload: pe,
  deps: re,
  signal: te,
}) {
  let ge = uo(a.report),
    le = await lc({
      objects: e,
      sessionId: r,
      note: a,
      content: d,
      heldBases: y,
      heldContainerSnapshots: E,
    });
  if (le.kind === "refused") return { ...ge, received: le, roundSkipped: null };
  let J = a.worktreeCommit;
  if (f === null) return { ...ge, received: le, roundSkipped: "no_last_sent" };
  let fe = a.basedOn,
    K = new Set(p.values()),
    ee = fe === null || !K.has(fe) ? !1 : await e.holdsCommit(fe);
  if (ee === "unknown") return ur(a.report);
  if (fe === null || !ee)
    return { ...ge, received: le, roundSkipped: "base_not_held" };
  let ye = await e.commitParents(fe),
    Ge = ye === "unknown" || ye === "none" ? null : (ye[0] ?? null);
  if (!(k ?? (Ge === null || (await e.isAncestor(Ge, a.head)) !== !1)))
    return { ...ge, received: le, roundSkipped: "history_rewritten" };
  let je = a.recreatedAfterTurn ?? 0,
    Ae = a.generation + (N ? 0 : 1),
    vt = (m) => m !== void 0 && m >= Ae,
    Xe = new Map(
      [...pe].filter(([, m]) => (je > 0 && (m.turn ?? 0) <= je) || vt(m.turn)),
    ),
    wt = Xe.size === 0 ? pe : new Map([...pe].filter(([m]) => !Xe.has(m)));
  if (Xe.size > 0)
    logForDebugging(
      `dirSync apply-down: turn ${a.generation}${je > 0 ? `, container recreated after turn ${je}` : ""}: ${Xe.size} installs from turns outside (${je}, ${a.generation}] not counted as shared this round`,
    );
  let Wt = await e.diffTrees(f.worktreeCommit, J);
  if (Wt === "too_large")
    return { ...ge, received: le, roundSkipped: "diff_too_large" };
  let tt = [...pe.keys()].filter((m) => !Wt?.has(m)),
    Q = Wt === null ? null : await e.listTreePaths(J, tt);
  if (Wt === null || Q === null) return ur(a.report);
  let ze = Wt,
    bt = new Map([
      ...[...ze].filter(([m]) => !Xe.has(m)).map(([m, U]) => [m, U.after]),
      ...[...Q].filter(([m]) => !Xe.has(m)),
    ]),
    Ut = (m) => (ze.has(m) ? (ze.get(m)?.after ?? null) : (Q.get(m) ?? null)),
    ft = [...Xe]
      .filter(([m, U]) => U.blobId !== null && Ut(m)?.blobId !== U.blobId)
      .map(([m]) => m),
    Lt = createConcurrencyLimiter(Ho, async (m) => (await Wo(o, m)) !== null),
    _t = await Promise.all(ft.map(Lt)),
    jt = ft.filter((m, U) => _t[U]).toSorted(),
    sn = new Map([...ze].map(([m, U]) => [m, U.before])),
    ht = (m) => {
      let U = wt.get(m);
      if (U !== void 0)
        return {
          entry: U.blobId === null ? null : { blobId: U.blobId, mode: U.mode },
          from: "installed",
        };
      let _e = sn.get(m) ?? null;
      return _e === null ? void 0 : { entry: _e, from: "sent" };
    },
    Rt = [...bt.keys()]
      .filter((m) => !aa(ht(m)?.entry ?? null, bt.get(m) ?? null))
      .toSorted(),
    mt = new Set(Rt.filter(jo)),
    lt = Rt.filter((m) => !mt.has(m)),
    zt = await e.listTreePaths(fe, lt);
  if (zt === null) return ur(a.report);
  let Je = a.notTakenTruncated,
    Ft = new Set(a.notTaken),
    St = (m, U) =>
      !Je &&
      !Ft.has(m) &&
      (U?.from === "installed" || aa(U?.entry ?? null, zt.get(m) ?? null)),
    ne = {
      ...ge,
      received: le,
      roundSkipped: null,
      installsWithdrawn: [...Xe.keys()].toSorted(),
      keptFromEarlierLife: jt,
      installsWithdrawnAhead: countMatching([...Xe.values()], (m) => vt(m.turn)),
    },
    ae = [...mt, ...[...Xe.keys()].filter((m) => ze.has(m))];
  for (let m of mt) ne.refused.push({ path: m, reason: "name_refused" });
  let Tt = lt.filter(
      (m) => (bt.get(m) ?? null) === null && (ht(m)?.entry ?? null) !== null,
    ),
    me = re.limits ?? Xu,
    At = lt.flatMap((m) => {
      let U = bt.get(m) ?? null;
      return U === null ? [] : [{ path: m, entry: U }];
    }),
    xe = At.map(({ path: m }) => m),
    nt = new Set(O),
    ve = await ac(
      e,
      [...E, J],
      Tt.filter((m) => !nt.has(m) && St(m, ht(m))),
      me.maxDeletes,
      R,
    ),
    q = new Set(Tt),
    Ne = new Set(D ? Tt : [...ve, ...[...nt].filter((m) => q.has(m))]);
  ((ne.deletesHeldBack = Ne.size),
    (ne.deletesHeldRemembered = countMatching([...Ne], (m) => !ve.has(m))),
    (ne.parkedOverflow = D),
    (ne.heldRemovals = [...Ne].toSorted().slice(0, Gu)),
    (ne.parkedRemovals = [...Ne]));
  let Ke = Tt.filter((m) => !Ne.has(m)),
    Ot = await t.trackedHere([...xe, ...Ke], te);
  if (Ot === null) return ur(a.report);
  let De = (m) => Ot.get(m) === "present",
    qe = createConcurrencyLimiter(Ho, async (m) => ia(m, await getDestinationRefusalReason(o, s, m, De(m)))),
    _n = await Promise.all(xe.map(qe)),
    An = new Map(
      xe.flatMap((m, U) => {
        let _e = _n[U] ?? null;
        return _e === null ? [] : [[m, _e]];
      }),
    ),
    Kt = xe.filter((m) => !An.has(m)),
    Cn = createConcurrencyLimiter(
      Ho,
      async (m) =>
        ia(m, await getDestinationRefusalReason(o, s, m, De(m))) ?? (isDangerousFileName(m) ? "name_refused" : null),
    ),
    [kn, Dt, Ce] = await Promise.all([
      Kt.length === 0
        ? { paths: [], blobIds: new Set() }
        : e.listTree(f.worktreeCommit),
      t.ignoredHere([...Kt, ...Ke], te),
      Promise.all(Ke.map(Cn)),
    ]);
  if (kn === "too_large")
    return { ...uo(a.report), received: le, roundSkipped: "diff_too_large" };
  if (kn === null) return ur(a.report);
  let xt = new Set([...Dt.ignored].filter((m) => !Ot.has(m))),
    { unjudged: En, unjudgeable: $t } = Dt,
    qt = new Map(
      Ke.flatMap((m, U) => {
        let _e = Ce[U] ?? null;
        return _e === null ? [] : [[m, _e]];
      }),
    ),
    dt =
      xe.length === 0 && Ke.length === 0
        ? () => null
        : (re.withheldOf ?? createPathWithholdClassifier(o, { realRoot: s })),
    Bt = kn.paths,
    Pn =
      Kt.length === 0 && Ke.length === 0
        ? new Set()
        : await t.filterAttributed([...Kt, ...Ke], te);
  if (Pn === null) return ur(a.report);
  let pt = re.digestFile ?? readFileWithDigests,
    Rn = await t.modesTrusted(te),
    I = (m, U) => !Rn || normalizeFileMode(m) === normalizeFileMode(U),
    he = t.cleanFilterBlobIds,
    Qe = new Map(),
    ut = [],
    Ye = async (m) => {
      if (!Qe.has(m)) {
        let U = ut.slice(0, Hu - 1);
        ut = ut.slice(U.length);
        let _e = await Promise.all(
            U.map(async ($e) =>
              $e !== m && (await Wo(o, $e)) !== null ? [$e] : [],
            ),
          ),
          He = [m, ..._e.flat()],
          Ue = await he(He, te).catch(() => new Map());
        for (let $e of He) {
          let Pe = Ue.get($e);
          if (Pe !== void 0 || $e === m) Qe.set($e, Pe ?? null);
        }
      }
      return Qe.get(m) ?? null;
    },
    Ze = async (m) => (await he([m], te).catch(() => new Map())).get(m) ?? null,
    rt = 0;
  ut = Ke.filter(
    (m) =>
      !qt.has(m) &&
      !xt.has(m) &&
      !$t.has(m) &&
      !Pn.has(m) &&
      dt(m, Ot.has(m)) === null,
  );
  await using Le = await openTreeAnchor(re.host ?? createFileSystemHost(), { gitRoot: o, realRoot: s }).catch(
    (m) => (
      logForDebugging(`dirSync apply-down: tree anchor not opened (${A(m) ?? l(m)})`),
      null
    ),
  );
  if (Le === null || Le.rootOnly) {
    let m = new Set(ae);
    for (let U of lt) if (!m.has(U)) ae.push(U);
    return {
      ...ne,
      roundSkipped: Le === null ? null : "anchor_degraded",
      roundCapped: Le === null,
      notInstalled: ae.slice(0, MAX_LISTED_SKIPPED_FILES),
      notInstalledTruncated: ae.length > MAX_LISTED_SKIPPED_FILES,
      notTaken: [...a.notTaken],
    };
  }
  let an = [],
    Yt = !1;
  for (let m of Tt) {
    let U = ht(m),
      _e = U?.entry?.blobId ?? null;
    if (U === void 0 || U.entry === null || _e === null) {
      ae.push(m);
      continue;
    }
    if (te?.aborted === !0 || Ne.has(m)) {
      ((Yt ||= te?.aborted === !0), ae.push(m));
      continue;
    }
    if (U.from === "sent" && !lo(U.entry.mode)) {
      (ne.refused.push({ path: m, reason: "not_a_regular_file" }), ae.push(m));
      continue;
    }
    if (Pn.has(m)) {
      (ne.refused.push({ path: m, reason: "withheld_content_filter" }),
        ae.push(m));
      continue;
    }
    let He = dt(m, Ot.has(m));
    if (He !== null) {
      (ne.refused.push({ path: m, reason: sa(He) }), ae.push(m));
      continue;
    }
    let Ue = qt.get(m) ?? null;
    if (Ue !== null) {
      (ne.refused.push({ path: m, reason: Ue }), ae.push(m));
      continue;
    }
    if (xt.has(m)) {
      (ne.refused.push({ path: m, reason: "ignored_here" }), ae.push(m));
      continue;
    }
    if ($t.has(m)) {
      (ne.refused.push({ path: m, reason: "outside_checkout" }), ae.push(m));
      continue;
    }
    if (En.has(m)) {
      ((Yt = !0), ae.push(m));
      continue;
    }
    let $e = await pt(o, s, m, Le).catch(() => null),
      Pe = normalizeFileMode(U.entry?.mode ?? 33188);
    if ($e === null) {
      if (await oa(o, m))
        if (St(m, U)) ne.trashed.push({ path: m, mode: Pe });
        else ae.push(m);
      else if ((await bc(o, m)) === !0) (ne.skippedDown.push(m), ae.push(m));
      else (ne.refused.push({ path: m, reason: "unreadable" }), ae.push(m));
      continue;
    }
    let Vt =
      I($e.mode, Pe) &&
      ($e.gitBlobId === _e || ((await Ye(m)) === _e && (await Ze(m)) === _e));
    if (!Vt || !St(m, U)) {
      if ((ae.push(m), !Vt)) ne.skippedDown.push(m);
      continue;
    }
    let dn = await Mo(o, m);
    if (dn !== "exact") {
      if (dn === "other") ne.skippedDown.push(m);
      else ne.refused.push({ path: m, reason: "unreadable" });
      ae.push(m);
      continue;
    }
    let Pt = await re
      .trash(Tn(o, m), m, $e.sha256, Le, { trackedHere: De(m) })
      .catch(() => "refused");
    if (Pt === "trashed")
      (ne.trashed.push({ path: m, mode: Pe }),
        ne.movedToTrash.push(m),
        an.push(m));
    else if (Pt === "refused")
      (ne.refused.push({ path: m, reason: "trash_refused" }), ae.push(m));
    else (ne.skippedDown.push(m), ae.push(m));
  }
  for (let m of kc(an)) await Le.rmdir(m).catch(() => {});
  let On = (m) =>
      getAncestorPaths(m).some((U) => {
        let _e = ht(U);
        return _e?.from === "sent" && _e.entry !== null && !lo(_e.entry.mode);
      }),
    Hr = At.filter(({ path: m, entry: U }) => {
      let _e = ht(m),
        He = dt(m, Ot.has(m)),
        Ue =
          !lo(U.mode) ||
          (_e?.from === "sent" && _e.entry !== null && !lo(_e.entry.mode))
            ? "not_a_regular_file"
            : Pn.has(m)
              ? "withheld_content_filter"
              : He !== null
                ? sa(He)
                : (An.get(m) ??
                  (xt.has(m)
                    ? "ignored_here"
                    : $t.has(m) || On(m)
                      ? "outside_checkout"
                      : null));
      if (Ue === null && En.has(m)) return (ae.push(m), (Yt = !0), !1);
      if (Ue === null) return !0;
      return (ne.refused.push({ path: m, reason: Ue }), ae.push(m), !1);
    }),
    hn = Hr.slice(0, me.maxPaths * ju),
    er = Hr.slice(hn.length).map(({ path: m }) => m),
    Wr = new Set([
      ...kn.blobIds,
      ...[...zt.values()].flatMap((m) => (m === null ? [] : [m.blobId])),
    ]),
    Xt = await dc(
      e,
      dedupe(hn.map(({ entry: m }) => m.blobId).filter((m) => !Wr.has(m))),
      f.worktreeCommit,
      fe,
      w,
    ),
    pr = (m) =>
      Wr.has(m) ||
      (Xt === null || Xt.unprobed.has(m) ? "unknown" : Xt.vouched.has(m)),
    gt = new Set([
      ...ne.trashed.map((m) => m.path),
      ...[...pe].filter(([, m]) => m.blobId === null).map(([m]) => m),
    ]),
    gr = new Set(
      hn.length === 0
        ? []
        : (
            await Go(
              o,
              hn.map(({ path: m }) => m),
              dedupe([
                ...Bt,
                ...[...pe].filter(([, m]) => m.blobId !== null).map(([m]) => m),
              ]).filter((m) => !gt.has(m)),
            )
          ).colliding.map((m) => m.path),
    ),
    xn =
      ye === "unknown"
        ? null
        : Ge === null
          ? new Map()
          : await e.listTreePaths(
              Ge,
              hn.map(({ path: m }) => m),
            ),
    qn = 0,
    $n = 0;
  ut = hn.map(({ path: m }) => m);
  await using Bn = await e.openBlobReader({ maxBytes: MAX_WORKING_FILE_BYTES });
  for (let { path: m, entry: U } of hn) {
    if (te?.aborted === !0 || xn === null) {
      ((Yt = !0), ae.push(m));
      continue;
    }
    if (gr.has(m)) {
      (ne.refused.push({ path: m, reason: "case_collision" }), ae.push(m));
      continue;
    }
    if (qn >= me.maxPaths || $n >= me.maxBytes) {
      ((ne.roundCapped = !0), ae.push(m));
      continue;
    }
    let _e = ht(m),
      He = await pt(o, s, m, Le).catch(() => null),
      Ue = He?.gitBlobId ?? null,
      $e = _e?.entry?.blobId ?? null,
      Pe =
        Ue !== null && Ue !== $e && Ue !== U.blobId
          ? ((await Ye(m)) ?? Ue)
          : Ue;
    if (He !== null && Pe === U.blobId && I(He.mode, U.mode)) {
      (ne.alreadyEqual.push(m),
        ne.installed.push({ path: m, blobId: U.blobId, mode: normalizeFileMode(U.mode) }));
      continue;
    }
    if (Pe !== $e && Pe !== U.blobId && !(isDangerousFileName(m) && U.blobId !== $e)) {
      (ne.skippedDown.push(m), ae.push(m));
      continue;
    }
    if (!St(m, _e)) {
      ae.push(m);
      continue;
    }
    let Vt = He === null ? "exact" : await Mo(o, m);
    if (Vt === "unknown") {
      (ne.refused.push({ path: m, reason: "unreadable" }), ae.push(m));
      continue;
    }
    if (Vt !== "exact") {
      (ne.skippedDown.push(m), ae.push(m));
      continue;
    }
    if (
      isDangerousFileName(m) &&
      (await gc(o, s, m, U.blobId, (pn, Qt, br) => pt(pn, Qt, br, Le)))
    ) {
      ae.push(m);
      continue;
    }
    let dn = pr(U.blobId);
    if (dn !== !0) {
      if (dn === "unknown") Yt = !0;
      else ne.refused.push({ path: m, reason: "unverified_object" });
      ae.push(m);
      continue;
    }
    if (rt >= me.maxBytes * Wu) {
      ((ne.roundCapped = qn + ne.trashed.length > 0), ae.push(m));
      continue;
    }
    let Pt = await Bn.read(U.blobId);
    if (Pt.kind === "ok") rt += Pt.bytes.length;
    if (Pt.kind === "too_large") {
      (ne.refused.push({ path: m, reason: "too_large" }), ae.push(m));
      continue;
    }
    if (Pt.kind === "unavailable" || _c(U.blobId, Pt.bytes) !== U.blobId) {
      ((Yt = !0), ae.push(m));
      continue;
    }
    let Jt =
      He !== null &&
      Pe !== null &&
      Pe !== U.blobId &&
      _.get(m) !== Pe &&
      !isDangerousFileName(m) &&
      (xn.get(m)?.blobId ?? null) !== Pe;
    if (Jt && Ue !== $e && (await Ze(m)) !== $e) {
      (ne.skippedDown.push(m), ae.push(m));
      continue;
    }
    let wr = Jt && C.get(m) === Pe,
      tr = !0;
    if (Jt) {
      let pn = await re
        .trash(Tn(o, m), m, He.sha256, Le, { trackedHere: De(m) })
        .catch(() => "refused");
      if (pn === "kept_changed") {
        (ne.skippedDown.push(m), ae.push(m));
        continue;
      }
      if (pn !== "trashed") {
        (ne.refused.push({ path: m, reason: "trash_refused" }), ae.push(m));
        continue;
      }
      tr = await wc(o, s, Le, m, He.content, He.mode, De(m));
    }
    let yr = {
        path: m,
        bytes: Pt.bytes,
        theirs: U,
        knownEntry: tr ? (_e?.entry ?? null) : null,
        trackedHere: De(m),
        gitRoot: o,
        realRoot: s,
        anchor: Le,
        cleanFilterBlobIds: he,
        deps: re,
        signal: te,
      },
      Mn = await Qs(yr),
      un =
        Mn.status === "applied" &&
        Mn.written &&
        Rn &&
        (await Wo(o, m)) !== normalizeFileMode(U.mode)
          ? { ...(await Qs(yr)), written: !0 }
          : Mn;
    if (Jt) {
      if (
        Mn.status === "applied" ||
        un.status === "applied" ||
        un.status === "already_equal"
      ) {
        if ((ne.replaced.push(m), wr)) ne.replacedEarlierCloud.push(m);
      } else if (!tr && He !== null && (await oa(o, m)))
        (ne.trashed.push({ path: m, mode: normalizeFileMode(He.mode) }), an.push(m));
    }
    switch (un.status) {
      case "applied":
      case "already_equal":
        if (
          ((qn += 1),
          ($n += Pt.bytes.length),
          ne.installed.push({ path: m, blobId: U.blobId, mode: normalizeFileMode(U.mode) }),
          un.written)
        )
          ne.contentWritten.push(m);
        break;
      case "conflict":
        if (un.copyPath !== null && un.written)
          ((qn += 1),
            ($n += Pt.bytes.length),
            ne.conflictedCopies.push({ path: m, copyPath: un.copyPath }));
        ae.push(m);
        break;
      case "skipped_local_change":
        (ne.skippedDown.push(m), ae.push(m));
        break;
      case "failed":
        (ne.refused.push({ path: m, reason: "writer_refused" }), ae.push(m));
        break;
      case "stale_entry":
      case "deferred":
        ae.push(m);
        break;
    }
  }
  for (let m of er) ae.push(m);
  return {
    ...ne,
    roundCapped:
      ne.roundCapped ||
      Yt ||
      (er.length > 0 && ne.installed.length + ne.trashed.length > 0),
    notInstalled: ae.slice(0, MAX_LISTED_SKIPPED_FILES),
    notInstalledTruncated: ae.length > MAX_LISTED_SKIPPED_FILES,
    notTaken: [...a.notTaken],
  };
}
async function Zu(e, t) {
  let r = await runPinnedGit(
    e,
    ["config", "--bool", "--default", "true", "--get", "core.filemode"],
    t,
  );
  return r.exitCode === 0 && r.stdout.trim() === "true";
}
async function Qs({
  path: e,
  bytes: t,
  theirs: r,
  knownEntry: o,
  trackedHere: s,
  gitRoot: a,
  realRoot: d,
  anchor: f,
  cleanFilterBlobIds: p,
  deps: y,
  signal: w,
}) {
  let k = {
      path: e,
      sha256: hashSha256(t),
      size: t.length,
      mode: normalizeFileMode(r.mode),
      etag: r.blobId,
    },
    _ =
      o === null
        ? void 0
        : {
            agreed: { kind: "git_blob", blobId: o.blobId },
            stat: { size: 0, mtimeMs: 0, mode: normalizeFileMode(o.mode), observedAtMs: 0 },
            etag: o.blobId,
            origin: "pulled",
          },
    E = { kind: "ok", content: t, etag: r.blobId },
    R = await applyPulledEntry({
      entry: k,
      gitRoot: a,
      realRoot: d,
      trackedHere: s,
      anchor: f,
      baseEntry: _,
      kept: qs(null, Du, null),
      deps: {
        client: { getLaneFile: () => Promise.resolve({ kind: "not_found" }) },
        now: y.now,
        fetchContent: () => Promise.resolve(E),
        bothChanged: "skip",
        cleanFilterBlobIds: p,
        ...(y.writeFile && { writeFile: y.writeFile }),
        ...(y.digestFile && { digestFile: y.digestFile }),
        ...(y.host && { host: y.host }),
      },
      signal: w,
    });
  return {
    status: R.change.status,
    copyPath: R.change.copyPath,
    written: R.bytesWritten > 0 || t.length === 0,
  };
}
async function Zs(e, t, r) {
  if (!GIT_OBJECT_ID_REGEX.test(t) || !GIT_OBJECT_ID_REGEX.test(r)) return null;
  let o = await runDirSyncGit(
    e,
    [
      "diff-tree",
      "-r",
      "-z",
      "--no-renames",
      "--no-ext-diff",
      "--no-textconv",
      "--ignore-submodules=none",
      "--end-of-options",
      t,
      r,
    ],
    { maxBuffer: Lr },
  );
  if (o.maxBufferExceeded) return "too_large";
  if (o.exitCode !== 0) return null;
  let s = o.stdout.split("\x00"),
    a = new Map();
  for (let d = 0; d + 1 < s.length; d += 2) {
    let f = s[d] ?? "",
      p = s[d + 1] ?? "",
      y =
        /^:([0-7]{6}) ([0-7]{6}) ([0-9a-f]{40,64}) ([0-9a-f]{40,64}) ([A-Z])/.exec(
          f,
        );
    if (y === null || p === "") return null;
    let [, w = "", k = "", _ = "", E = "", R = ""] = y;
    a.set(p, {
      before: R === "A" ? null : { mode: parseInt(w, 8), blobId: _ },
      after: R === "D" ? null : { mode: parseInt(k, 8), blobId: E },
    });
  }
  return a;
}
async function ec(e, t, r, o = {}) {
  if (!GIT_OBJECT_ID_REGEX.test(t)) return null;
  let { pastChunks: s = da, maxBufferBytes: a = Lr } = o,
    d = new Map(r.map((k) => [k, null])),
    f = (k) => {
      let _ = k.indexOf("\t"),
        [E = "", R = "", N = ""] = k.slice(0, _).split(" "),
        C = k.slice(_ + 1);
      if (_ < 0 || !GIT_OBJECT_ID_REGEX.test(N)) return !1;
      if (d.has(C) && R !== "tree")
        d.set(C, { mode: parseInt(E, 8), blobId: N });
      return !0;
    },
    p = ha(r),
    y = rootLaptopDirSyncRegistry(),
    w = `tree:${a}:${e.gitDir}`;
  if (p.length > s && !y.wholeListingOutgrew(w)) {
    let k = await runDirSyncGit(e, ["ls-tree", "-r", "-z", "--full-tree", `${t}^{tree}`], {
      maxBuffer: a,
    });
    if (k.maxBufferExceeded) y.noteWholeListingOutgrew(w);
    else if (k.exitCode === 0) {
      for (let _ of k.stdout.split("\x00")) if (_ !== "" && !f(_)) return null;
      return d;
    }
  }
  for (let k of p) {
    let _ = await runDirSyncGit(
      e,
      [
        "-c",
        "core.precomposeunicode=false",
        "ls-tree",
        "-z",
        "--full-tree",
        `${t}^{tree}`,
        "--",
        ...k,
      ],
      { env: Uo },
    );
    if (_.exitCode !== 0) return null;
    for (let E of _.stdout.split("\x00")) if (E !== "" && !f(E)) return null;
  }
  return d;
}
async function tc(e, t) {
  if (!GIT_OBJECT_ID_REGEX.test(t)) return "none";
  let r = await runDirSyncGit(e, ["rev-parse", `${t}^{commit}`, `${t}^@`]);
  if (r.exitCode === void 0) return "unknown";
  if (r.exitCode !== 0) return "none";
  let [o = "", ...s] = r.stdout
    .split(
      `
`,
    )
    .filter((a) => a !== "");
  return o === t && s.every((a) => GIT_OBJECT_ID_REGEX.test(a)) ? s : "none";
}
async function rc(e, t) {
  if (!GIT_OBJECT_ID_REGEX.test(t)) return !1;
  let r = await runDirSyncGit(e, ["cat-file", "-e", `${t}^{commit}`]);
  return r.exitCode === void 0 ? "unknown" : r.exitCode === 0;
}
async function oc(e, t) {
  let r = await fa(e, t, Lr);
  return r === null || r === "too_large"
    ? r
    : { paths: r.paths, blobIds: r.blobIds };
}
async function fa(e, t, r) {
  if (!GIT_OBJECT_ID_REGEX.test(t)) return null;
  let o = await runDirSyncGit(e, ["ls-tree", "-r", "-z", "--full-tree", `${t}^{tree}`], {
    maxBuffer: r,
  });
  if (o.maxBufferExceeded) return "too_large";
  if (o.exitCode !== 0) return null;
  let s = parseLsTreeOutput(o.stdout),
    a = s.files.reduce(
      (d, f) => d.set(f.blobId, (d.get(f.blobId) ?? 0) + 1),
      new Map(),
    );
  return {
    commit: t,
    paths: s.sortedEntries,
    blobIds: new Set(a.keys()),
    holders: a,
    listedBytes: Buffer.byteLength(o.stdout),
  };
}
function ea(e, t) {
  return (
    10 +
    ((t.mode & 61440) === 57344 ? "commit" : "blob").length +
    t.blobId.length +
    Buffer.byteLength(e)
  );
}
function ta(e) {
  return e === 33188 || e === 33261;
}
function na(e) {
  return e.includes("\uFFFD");
}
function ic(e, t, r) {
  if (r.size === 0) return { ...e, commit: t };
  let o = new Set(e.blobIds),
    s = new Map(e.holders),
    a = new Set(),
    d = [],
    f = [...r].reduce(
      (_, [E, { before: R, after: N }]) =>
        _ + (N === null ? 0 : ea(E, N)) - (R === null ? 0 : ea(E, R)),
      e.listedBytes,
    );
  for (let [_, { before: E, after: R }] of r) {
    if (E !== null && ta(E.mode)) {
      let N = (s.get(E.blobId) ?? 0) - 1;
      if (N <= 0) (s.delete(E.blobId), o.delete(E.blobId));
      else s.set(E.blobId, N);
    }
    if (R !== null && ta(R.mode))
      (s.set(R.blobId, (s.get(R.blobId) ?? 0) + 1), o.add(R.blobId));
    if (E !== null && R === null) a.add(_);
    else if (E === null && R !== null) d.push(_);
  }
  d.sort();
  let p = a.size === 0 ? e.paths : e.paths.filter((_) => !a.has(_)),
    y = [],
    w = 0,
    k = 0;
  while (w < p.length || k < d.length)
    if (k >= d.length || (w < p.length && p[w] < d[k]))
      (y.push(p[w]), (w += 1));
    else (y.push(d[k]), (k += 1));
  return { commit: t, paths: y, blobIds: o, holders: s, listedBytes: f };
}
async function sc(e, t, r) {
  if (!GIT_OBJECT_ID_REGEX.test(t) || !GIT_OBJECT_ID_REGEX.test(r)) return "unknown";
  let o = await runDirSyncGit(e, ["merge-base", "--is-ancestor", t, r]);
  return o.exitCode === 0 ? !0 : o.exitCode === 1 ? !1 : "unknown";
}
async function ac(e, t, r, o, s = null) {
  if (r.length === 0) return new Set();
  let a = async (y) => {
      let w = await e.commitParents(y);
      return w === "unknown" || w === "none" ? null : (w[2] ?? null);
    },
    d = new Set(r),
    f = new Set(),
    p = null;
  for (let y of t) {
    let w = await a(y),
      k = p !== null && p.basis === w && y !== s,
      _ = p?.commit ?? null,
      E = k ? _ : w;
    if (((p = { commit: y, basis: w }), E === null || E === y)) continue;
    let R = await e.diffTrees(E, y);
    if (R === null || R === "too_large") continue;
    let N = [...R].flatMap(([D, pe]) =>
        pe.before !== null && pe.after === null ? [D] : [],
      ),
      C =
        k || _ === null || N.length === 0 ? null : await e.listTreePaths(_, N),
      O = C === null ? N : N.filter((D) => (C.get(D) ?? null) !== null);
    if (O.length > o) {
      for (let D of O) if (d.has(D)) f.add(D);
    }
  }
  if (countMatching(r, (y) => !f.has(y)) > o) return new Set(r);
  return f;
}
async function lc({
  objects: e,
  sessionId: t,
  note: r,
  content: o,
  heldBases: s,
  heldContainerSnapshots: a = [],
}) {
  let d = r.worktreeCommit;
  if (o === null || r.bundle === null) {
    let w = await e.holdsCommit(d);
    if (w === "unknown") return { kind: "refused", reason: "git_error" };
    if (!w) return { kind: "refused", reason: "prerequisites_missing" };
    let k = await ra(e, r, a);
    return k === null
      ? { kind: "nothing_new" }
      : { kind: "refused", reason: k };
  }
  let f = buildSessionRefName(t, `in/${r.generation}`);
  if (f === null) return { kind: "refused", reason: "git_error" };
  let p = await e.receiveBundle({
    content: o,
    targets: new Map([[r.bundle.tipRef, f]]),
    heldBases: s,
    heldRefs: { glob: `${CLAUDE_REF_PREFIX}${t}/*` },
  });
  if (!p.ok) return { kind: "refused", reason: p.reason };
  let y =
    p.refs.length !== 1 || p.refs[0]?.id !== d
      ? "tip_mismatch"
      : await ra(e, r, a);
  if (y !== null)
    return (await e.deleteRefs([f]), { kind: "refused", reason: y });
  return { kind: "ok", worktreeCommit: d };
}
async function ra(e, t, r = []) {
  let o = await e.commitParents(t.worktreeCommit);
  if (o === "unknown") return "git_error";
  let s = o === "none" ? [] : o.slice(3);
  if (
    o === "none" ||
    o[0] !== t.head ||
    o[1] !== t.indexCommit ||
    s.length > MAX_HELD_BASES ||
    (s.length > 0 && t.basedOn === null) ||
    !s.every((a) => r.includes(a))
  )
    return "parents_mismatch";
  return (o[2] ?? null) === t.basedOn ? null : "basis_mismatch";
}
async function dc(e, t, r, o, s) {
  let a = new Set(),
    d = t.filter((R) => GIT_OBJECT_ID_REGEX.test(R));
  if (d.length === 0) return { vouched: a, unprobed: a };
  let f = await e.heldInOwnRight(d);
  if (f === null) return null;
  let p = d.filter((R) => !f.has(R));
  if (p.length === 0) return { vouched: f, unprobed: a };
  let y = await cc(e, r, o);
  if (y === null) return null;
  let w = new Set([...f, ...p.filter((R) => y.has(R))]),
    k = p.filter((R) => !w.has(R)),
    _ = s.filter((R) => GIT_OBJECT_ID_REGEX.test(R));
  if (_.length === 0) return { vouched: w, unprobed: a };
  let E = new Set(k.slice(Js));
  for (let R of k.slice(0, Js)) {
    let N = await e.firstCommitCarrying(R, _);
    if (N === "unknown") E.add(R);
    else if (N === "found") w.add(R);
  }
  return { vouched: w, unprobed: E };
}
async function uc(e, t, r) {
  if (!GIT_OBJECT_ID_REGEX.test(t) || r.length === 0 || !r.every((a) => GIT_OBJECT_ID_REGEX.test(a)))
    return "unknown";
  let o = await runDirSyncGit(
      { ...e, timeoutMs: $u },
      [
        "-c",
        "log.diffMerges=separate",
        "log",
        "-1",
        "-s",
        "--format=%H",
        "-m",
        "--no-ext-diff",
        "--no-textconv",
        "--no-renames",
        `--find-object=${t}`,
        ...r,
        "--",
      ],
      { env: Bu },
    ),
    s = o.stdout
      .split(
        `
`,
      )
      .filter((a) => a !== "");
  return o.exitCode !== 0
    ? "unknown"
    : GIT_OBJECT_ID_REGEX.test(s[0] ?? "") && s.every((a) => a === s[0])
      ? "found"
      : "not_found";
}
async function cc(e, t, r) {
  let [o, s] = await Promise.all([
    e.commitParents(t),
    r === t ? [] : e.commitParents(r),
  ]);
  if (typeof o === "string" || typeof s === "string") return null;
  return e.blobIdsOfTrees(
    dedupe([...o.slice(0, 2), ...(r === t ? [] : [r, ...s.slice(0, 2)])]),
  );
}
async function fc(e, t) {
  if (t.length === 0) return new Set();
  let r = await runDirSyncGit(e, ["rev-parse", ...t.map((a) => `${a}^{tree}`)]);
  if (r.exitCode !== 0) return null;
  let o = dedupe(
      r.stdout
        .split(
          `
`,
        )
        .filter((a) => GIT_OBJECT_ID_REGEX.test(a)),
    ),
    s = new Set();
  for (let a of o) {
    let d = await oc(e, a);
    if (d === null || d === "too_large") return null;
    for (let f of d.blobIds) s.add(f);
  }
  return s;
}
async function hc(e, t) {
  let r = t.filter((f) => GIT_OBJECT_ID_REGEX.test(f));
  if (r.length === 0) return new Set();
  let o = Tn(e.gitDir, "objects"),
    s = await Promise.all(
      r.map((f) =>
        fr(Tn(o, f.slice(0, 2), f.slice(2))).then(
          () => !0,
          (p) => {
            let y = A(p);
            return y === "ENOENT" || y === "ENOTDIR" ? !1 : "unknown";
          },
        ),
      ),
    ),
    a = new Set(r.filter((f, p) => s[p] === !0));
  if (a.size === r.length) return a;
  let d = await readDeliveredObjectIds(e);
  if (d === null) return null;
  for (let f of r) if (d.has(f)) a.add(f);
  return r.some((f, p) => s[p] === "unknown" && !a.has(f)) ? null : a;
}
async function mc(e, t, r) {
  let o = new Set(),
    s = await pc(e, t),
    a = new Set(s.unexamined),
    d = new Set(s.beyond),
    f = 0,
    p = async (k) => {
      if (k.length === 0) return;
      if (r?.aborted === !0 || f >= Mu) {
        for (let R of k) a.add(R);
        return;
      }
      f += 1;
      let _ = await runPinnedGit(
        e,
        ["check-ignore", "--no-index", "-z", "--stdin"],
        r,
        Ku,
        Lu,
        k.map((R) => `./${R}\x00`).join(""),
      );
      if (_.exitCode === 0 || _.exitCode === 1) {
        let R = new Set(k);
        for (let N of _.stdout.split("\x00")) {
          let C = N.startsWith("./") ? N.slice(2) : N;
          if (R.has(C)) o.add(C);
        }
        return;
      }
      if (_.exitCode === void 0) {
        for (let R of k) a.add(R);
        return;
      }
      if (k.length === 1) {
        a.add(k[0] ?? "");
        return;
      }
      let E = k.length >> 1;
      (await p(k.slice(0, E)), await p(k.slice(E)));
    },
    y = t.filter((k) => !a.has(k) && !d.has(k)),
    w = 256;
  for (let k = 0; k < y.length; k += w) await p(y.slice(k, k + w));
  return { ignored: o, unjudged: a, unjudgeable: d };
}
async function pc(e, t) {
  let r = async (p) => {
      try {
        if ((await fr(Tn(e, p))).isSymbolicLink()) return "beyond";
        return (await fr(Tn(e, p, ".git")), "beyond");
      } catch (y) {
        let w = A(y);
        return w === "ENOENT" || w === "ENOTDIR"
          ? "plain"
          : w === "EACCES" || w === "EPERM"
            ? "beyond"
            : "unknown";
      }
    },
    o = new Map(),
    s = dedupe(t.flatMap(getAncestorPaths)),
    a = (p) => countOccurrences(p, "/"),
    d = s.reduce((p, y) => Math.max(p, a(y)), -1);
  for (let p = 0; p <= d; p++) {
    let y = s.filter((k) => a(k) === p),
      w = await Promise.all(
        y.map(async (k) => {
          let _ = p === 0 ? "plain" : o.get(posix.dirname(k));
          return [k, _ === "plain" ? await r(k) : (_ ?? "unknown")];
        }),
      );
    for (let [k, _] of w) o.set(k, _);
  }
  let f = (p) => getAncestorPaths(p).map((y) => o.get(y));
  return {
    beyond: t.filter((p) => f(p).includes("beyond")),
    unexamined: t.filter(
      (p) => !f(p).includes("beyond") && f(p).includes("unknown"),
    ),
  };
}
async function zo(
  e,
  t,
  r,
  { pastChunks: o = da, maxBufferBytes: s = Lr } = {},
) {
  let a = new Map(),
    d = new Set(t),
    f = (k) => {
      for (let { tag: _, path: E } of parseTaggedPathListing(k))
        if (d.has(E)) a.set(E, _ === "S" ? "absent_here" : "present");
    },
    p = ha(t),
    y = rootLaptopDirSyncRegistry(),
    w = `index:${s}:${e}`;
  if (p.length > o && !y.wholeListingOutgrew(w)) {
    let k = await runPinnedGit(e, ["ls-files", "-z", "-t", "-c"], r, s);
    if (k.maxBufferExceeded) y.noteWholeListingOutgrew(w);
    else if (k.code === 0) return (f(k.stdout), a);
  }
  for (let k of p) {
    let _ = await runPinnedGit(
      e,
      [
        "-c",
        "core.precomposeunicode=false",
        "ls-files",
        "-z",
        "-t",
        "-c",
        "--",
        ...k,
      ],
      r,
      void 0,
      Uo,
    );
    if (_.code !== 0) return null;
    f(_.stdout);
  }
  return a;
}
async function Wo(e, t) {
  try {
    let r = await fr(Tn(e, t));
    return r.isFile() ? normalizeFileMode(r.mode) : null;
  } catch {
    return null;
  }
}
async function oa(e, t) {
  try {
    return (await fr(Tn(e, t)), !1);
  } catch (r) {
    let o = A(r);
    return o === "ENOENT" || o === "ENOTDIR";
  }
}
async function gc(e, t, r, o, s) {
  let a = posix.dirname(r),
    d = posix.basename(r).normalize("NFC"),
    f = posix.extname(d),
    p = d.slice(0, d.length - f.length),
    y = ` (${CONFLICTED_COPY_MARKER} `,
    w;
  try {
    w = await Ou(Tn(e, a === "." ? "" : a));
  } catch {
    return !1;
  }
  let k = (O) => O.slice(0, Math.max(0, O.lastIndexOf(y))),
    _ = (O) => {
      let D = buildConflictedCopyPath(r, new Date(0), O);
      return D === null ? null : k(posix.basename(D).normalize("NFC"));
    },
    E = _(0),
    R = _(MAX_CONFLICTED_COPY_ATTEMPTS - 1) ?? E,
    N = (O) => {
      let D = k(O);
      return (
        E !== null &&
        R !== null &&
        D !== "" &&
        E.startsWith(D) &&
        Array.from(D).length >= Array.from(R).length
      );
    },
    C = w
      .map((O) => ({ sibling: O, folded: O.normalize("NFC") }))
      .filter(
        ({ folded: O }) => O !== d && O.endsWith(f) && (k(O) === p || N(O)),
      )
      .toSorted((O, D) =>
        O.folded < D.folded ? 1 : O.folded > D.folded ? -1 : 0,
      )
      .slice(0, Uu);
  for (let { sibling: O } of C) {
    let D = a === "." ? O : `${a}/${O}`;
    if ((await s(e, t, D).catch(() => null))?.gitBlobId === o) return !0;
  }
  return !1;
}
async function wc(e, t, r, o, s, a, d) {
  if ((await getDestinationRefusalReason(e, t, o, d)) !== null) return !1;
  let f = posix.dirname(o);
  return (f === "." ? Promise.resolve() : r.mkdirp(f))
    .then(() => r.create(o, s, a))
    .then(
      () => !0,
      () => !1,
    );
}
async function bc(e, t) {
  try {
    return !(await fr(Tn(e, t))).isFile();
  } catch {
    return null;
  }
}
function _c(e, t) {
  return e.length === 64
    ? Cu("sha256").update(`blob ${t.length}\x00`).update(t).digest("hex")
    : computeGitBlobId(t);
}
function ia(e, t) {
  if (t === null) return null;
  if (t === "place") return "outside_checkout";
  let r = dedupe([e, normalizeUnicodeForm(e)]).map((o) => o.split("/"));
  return r.some((o) => isProtectedClaudePath(o, "file"))
    ? "protected_name"
    : r.some((o) => o.some((s) => s.startsWith(".")))
      ? "dot_path"
      : "name_refused";
}
function sa(e) {
  return `withheld_${e}`;
}
function kc(e) {
  return dedupe(e.flatMap(getAncestorPaths)).toSorted(
    (t, r) => countOccurrences(r, "/") - countOccurrences(t, "/") || (t < r ? -1 : 1),
  );
}
function ha(e) {
  return e.reduce(
    (t, r) => {
      let o = Buffer.byteLength(r) + 1,
        s = t.chunks.at(-1);
      if (s === void 0 || s.length >= 256 || t.bytes + o > 65536)
        return (t.chunks.push([r]), { chunks: t.chunks, bytes: o });
      return (s.push(r), { chunks: t.chunks, bytes: t.bytes + o });
    },
    { chunks: [], bytes: 0 },
  ).chunks;
}
function aa(e, t) {
  return e === null || t === null
    ? e === t
    : e.blobId === t.blobId && la(e.mode) === la(t.mode);
}
function lo(e) {
  return (e & 61440) === 32768;
}
function la(e) {
  let t = e & 61440;
  return (t === 0 ? 32768 : t) | normalizeFileMode(e);
}
import { dirname as Ac } from "path";
import { randomBytes as Sc } from "crypto";
import { lstat as Ec, mkdir as Pc, open as pa, rm as Rc } from "fs/promises";
import { join as ma } from "path";
var vc = 1048576,
  Tc = /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/;
async function ga(e, t) {
  let r = await Ko(e);
  if (r.kind === "irregular") return r;
  let o = ma(t, "shallow-pins", Sc(8).toString("hex"));
  await Pc(o, { recursive: !0, mode: 448 });
  let s = ma(o, "shallow");
  if (r.kind === "boundary") {
    let a = await pa(s, "wx", 256);
    try {
      await a.writeFile(r.bytes);
    } finally {
      await a.close();
    }
  }
  return {
    shallowFile: s,
    unchanged: async () => {
      let [a, d] = await Promise.all([Ko(e), Ko(s)]);
      return r.kind === "absent"
        ? a.kind === "absent" && d.kind === "absent"
        : a.kind === "boundary" &&
            a.bytes.equals(r.bytes) &&
            d.kind === "boundary" &&
            d.bytes.equals(r.bytes);
    },
    release: () => Rc(o, { recursive: !0, force: !0 }),
  };
}
async function Ko(e) {
  let t = null;
  if (getCurrentPlatform() === "windows") {
    let o = await Ec(e, { bigint: !0 }).catch((s) =>
      A(s) === "ENOENT" ? null : "unreadable",
    );
    if (o === null) return { kind: "absent" };
    if (o === "unreadable" || !o.isFile())
      return { kind: "irregular", why: "not a plain file" };
    if (o.ino === 0n)
      return { kind: "irregular", why: "no file identity on this volume" };
    t = o;
  }
  let r;
  try {
    r = await pa(e, getSafeReadOpenFlags());
  } catch (o) {
    let s = A(o);
    return s === "ENOENT"
      ? { kind: "absent" }
      : { kind: "irregular", why: s === "ELOOP" ? "a link" : "unreadable" };
  }
  try {
    let o = await r.stat({ bigint: !0 });
    if (!o.isFile() || o.nlink !== 1n)
      return { kind: "irregular", why: "not a single regular file" };
    if (t !== null && (o.dev !== t.dev || o.ino !== t.ino))
      return { kind: "irregular", why: "not the file looked at" };
    if (o.size > BigInt(vc))
      return { kind: "irregular", why: "larger than a shallow file can be" };
    let s = Number(o.size),
      a = Buffer.alloc(s),
      d = 0;
    while (d < s) {
      let { bytesRead: p } = await r.read(a, d, s - d, d);
      if (p === 0) break;
      d += p;
    }
    if (d !== s) return { kind: "irregular", why: "changed while being read" };
    if (
      !a
        .toString("utf8")
        .split(
          `
`,
        )
        .filter((p) => p !== "")
        .every((p) => Tc.test(p))
    )
      return { kind: "irregular", why: "not one object id per line" };
    return { kind: "boundary", bytes: a };
  } catch {
    return { kind: "irregular", why: "unreadable" };
  } finally {
    await r.close();
  }
}
var Xo = DEFAULT_MAX_BUNDLE_BYTES,
  qo = "out",
  Cc = 600000,
  Oc = 4,
  wa = 600000;
function xc(e) {
  return {
    head: e.head,
    branch: e.branch,
    indexTree: e.indexTree,
    worktreeTree: e.worktreeTree,
  };
}
function Ic(e, t) {
  return (
    e !== null &&
    t !== null &&
    e.head === t.head &&
    e.branch === t.branch &&
    e.indexTree === t.indexTree &&
    e.worktreeTree === t.worktreeTree
  );
}
function ba(e, t) {
  return (
    t !== null && getMergedDownApplied(e).length < MAX_LISTED_APPLIED_TURNS - 1 && e.installedSinceUpload.length < MAX_INSTALLED_SINCE_UPLOAD
  );
}
function _a(e, t, r, o, s = null) {
  let a = getLatestSentUpload(e);
  return (
    a !== null &&
    a.generation > e.generationSpent &&
    t.lastSentHeld &&
    (e.peerNeed === null || (t.needUnanswerable && o - a.sentAtMs < Cc)) &&
    (ba(e, s)
      ? r.worktreeTree === s &&
        r.head === a.head &&
        r.branch === a.branch &&
        (r.indexTree === a.indexTree || e.start.kind === "folder")
      : e.downApplied.length === 0 &&
        e.installedSinceUpload.length === 0 &&
        Ic(xc(a), r))
  );
}
async function ka({ record: e, deps: t }) {
  let r = null;
  try {
    let o = await t.repository.pinForPass();
    if (o.kind === "refused") return null;
    let s = o.kind === "pinned" ? o.repository : t.repository;
    if (o.kind === "pinned") r = o.release;
    let a = await co(s, e),
      d = { signal: s.signal, ...s.snapshotPin },
      f = await t.snapshot(
        a === null || a.basis === null
          ? { basis: null, ...d }
          : { basis: a.basis, alsoParents: a.alsoParents, ...d },
      ),
      p =
        f.kind === "refused" && f.reason === "basis_not_held"
          ? await t.snapshot({ basis: null, ...d })
          : f;
    if (p.kind === "refused") return null;
    let y = await s.readTrees([
      p.snapshot.indexCommit,
      p.snapshot.worktreeCommit,
    ]);
    if (y === null) return null;
    let [w = "", k = ""] = y,
      _ = {
        head: p.snapshot.head,
        branch: va(p.snapshot.branch),
        indexTree: w,
        worktreeTree: k,
      },
      E = a ?? (await co(s, e));
    return {
      keys: _,
      unchanged:
        E !== null && _a(Yo(e, E), E, _, t.now(), t.installedTree?.() ?? null),
    };
  } catch (o) {
    if (!yt(o)) logError(o);
    return null;
  } finally {
    await r?.().catch(() => {});
  }
}
async function Sa({ record: e, deps: t }) {
  let r = null;
  try {
    let o = await t.repository.pinForPass();
    if (o.kind === "refused")
      return {
        kind: "snapshot_refused",
        record: e,
        reason: "git_error",
        detail: o.detail,
      };
    if (o.kind === "pinned") r = o.release;
    return await Nc(
      e,
      o.kind === "nothing_to_pin"
        ? t
        : { ...t, repository: o.repository, boundaryUnchanged: o.unchanged },
    );
  } catch (o) {
    if (yt(o)) return { kind: "aborted", record: e };
    return (logError(o), bn(e, "unknown", "unexpected", "unexpected throw"));
  } finally {
    await r?.().catch(() => {});
  }
}
async function Nc(e, t) {
  let { repository: r, sessionId: o, transport: s } = t,
    a = await co(r, e);
  if (a === null && isSignalAborted(r.signal)) return { kind: "aborted", record: e };
  let d = Yo(e, a),
    f = a?.basis ?? null,
    p = { signal: r.signal, ...r.snapshotPin },
    y = await t.snapshot(
      f === null
        ? { basis: null, ...p }
        : { basis: f, alsoParents: a?.alsoParents ?? [], ...p },
    ),
    w =
      y.kind === "refused" &&
      y.reason === "basis_not_held" &&
      a !== null &&
      a.basis !== null,
    k = w ? await t.snapshot({ basis: null, ...p }) : y,
    _ = w ? null : (a?.basis ?? null);
  if (k.kind === "refused")
    return k.reason === "aborted"
      ? { kind: "aborted", record: d }
      : {
          kind: "snapshot_refused",
          record: d,
          reason: k.reason,
          detail: k.detail,
        };
  let { snapshot: E } = k,
    R = a ?? (await co(r, e));
  if (R === null)
    return isSignalAborted(r.signal)
      ? { kind: "aborted", record: d }
      : bn(
          d,
          "snapshot",
          "git_error",
          "the side repository could not be asked what it holds",
        );
  let N =
      _ === null && R.basis !== null
        ? R.prerequisites.filter((ee) => ee !== R.basis)
        : R.prerequisites,
    C = Yo(e, R),
    O = await r.readTrees([E.indexCommit, E.worktreeCommit]);
  if (O === null)
    return isSignalAborted(r.signal)
      ? { kind: "aborted", record: C }
      : bn(
          C,
          "snapshot",
          "git_error",
          "the snapshot commits have no readable trees",
        );
  let [D = "", pe = ""] = O,
    re = va(E.branch);
  if (
    _a(
      C,
      R,
      { head: E.head, branch: re, indexTree: D, worktreeTree: pe },
      t.now(),
      t.installedTree?.() ?? null,
    )
  )
    return {
      kind: "unchanged",
      record: C,
      snapshot: E,
      ...(ba(C, t.installedTree?.() ?? null) && { installedBaseline: !0 }),
    };
  let te = getNextGeneration(C),
    ge = buildSessionRefName(o, `${qo}/${te}`);
  if (ge === null)
    return bn(C, "refs", "git_error", "the session id cannot name a ref");
  if (!(await r.writeRefs([{ name: ge, id: E.worktreeCommit }])))
    return isSignalAborted(r.signal)
      ? { kind: "aborted", record: C }
      : bn(C, "refs", "git_error", "the outbound ref could not be written");
  if (t.boundaryUnchanged !== void 0 && !(await t.boundaryUnchanged()))
    return {
      kind: "snapshot_refused",
      record: C,
      reason: "busy",
      detail:
        "the checkout's shallow boundary (its .git/shallow file) changed while the sync point was being prepared",
    };
  let le = await r.createBundle({
    tips: [ge],
    prerequisites: N,
    maxBytes: t.maxBundleBytes ?? Xo,
    declareForkPoints: !0,
  });
  if (!le.ok)
    switch (le.reason) {
      case "aborted":
        return { kind: "aborted", record: C };
      case "too_large":
        return { kind: "too_large", record: C, sizeBytes: le.sizeBytes };
      case "nothing_to_send":
        break;
      case "git_error":
        return bn(C, "bundle", "git_error", `${le.stage}: ${le.detail}`);
      case "prerequisites_missing":
        return bn(
          C,
          "bundle",
          "prerequisites_missing",
          "a base went missing between the probe and the pack",
        );
      case "too_many_prerequisites":
        return {
          kind: "too_many_prerequisites",
          record: C,
          prerequisiteCount: le.prerequisiteCount,
        };
    }
  let J = (ee) => ({
    generation: te,
    head: E.head,
    branch: re,
    indexCommit: E.indexCommit,
    worktreeCommit: E.worktreeCommit,
    indexTree: D,
    worktreeTree: pe,
    bundle: ee,
    withheldCounts: Mc(E),
    ...((E.conflicted?.length ?? 0) > 0 && { conflicted: Bc(E) }),
    sentAtMs: t.now(),
  });
  if (!le.ok) {
    let ee = recordSentUpload(C, J(null), null);
    return (
      await ya(r, o, ee),
      {
        kind: "sent",
        record: ee,
        generation: te,
        via: "none",
        bundleBytes: 0,
        commitCount: 0,
        snapshot: E,
      }
    );
  }
  if (C.journalEtag === null) {
    let ee = await Fr(C, t, "push");
    if (ee.kind === "foreign") return { kind: "other_writer", record: C };
    if (ee.kind === "unknown")
      return bn(
        C,
        "put",
        "conflict",
        "own journal row unreadable before the first write",
      );
    if (ee.kind === "ours" && ee.lostGeneration !== null)
      return bn(
        recordSpentGeneration(C, ee.lostGeneration),
        "put",
        "conflict",
        `generation ${ee.lostGeneration} already published by this machine before a restart`,
      );
  }
  if (C.sent.length > 0) await t.beforeUpload?.(te).catch(() => {});
  let fe = await s.putOutbound(le.content, {
      ifMatchEtag: C.outboundEtag,
      signal: r.signal,
    }),
    K = fe;
  if (fe.kind === "conflict") {
    let ee = await Fr(C, t, "push");
    if (ee.kind === "foreign") return { kind: "other_writer", record: C };
    if (ee.kind === "ours" && ee.lostGeneration !== null)
      return bn(
        recordSpentGeneration(C, ee.lostGeneration),
        "put",
        "conflict",
        `generation ${ee.lostGeneration} already published by this machine before a restart`,
      );
    if (ee.kind === "ours" || ee.kind === "absent")
      K = await s.putOutbound(le.content, {
        ifMatchEtag: null,
        signal: r.signal,
      });
  }
  switch (K.kind) {
    case "ok": {
      let ee = recordSentUpload(
        C,
        J({ ...K.carried, tipRef: ge, prerequisites: le.prerequisites }),
        K.etag,
      );
      return (
        await ya(r, o, ee),
        {
          kind: "sent",
          record: ee,
          generation: te,
          via: K.carried.via,
          bundleBytes: le.sizeBytes,
          commitCount: le.commitCount,
          snapshot: E,
        }
      );
    }
    case "over_cap":
      return { kind: "too_large", record: C, sizeBytes: le.sizeBytes };
    case "unauthorized":
      return { kind: "lane_lost", record: C, reason: K.kind };
    case "lane_unavailable":
      return {
        kind: "lane_lost",
        record: C,
        reason: K.kind,
        ...("cause" in K && K.cause !== void 0 && { cause: K.cause }),
      };
    case "aborted":
      return { kind: "aborted", record: C };
    case "conflict":
    case "lane_full":
    case "path_too_long":
    case "route_unavailable":
    case "rejected":
    case "failed": {
      let ee = "status" in K ? K.status : void 0;
      return {
        ...bn(
          C,
          "put",
          K.kind,
          `put ${K.kind}${ee === void 0 ? "" : ` ${ee}`}`,
        ),
        ...(ee !== void 0 && { status: ee }),
      };
    }
  }
}
async function Ea(e, t, r = t.now()) {
  let o = e.announcementToken ?? null;
  if (
    o === null ||
    e.journalEtag !== null ||
    (e.announcementEtag ?? null) !== null ||
    e.sent.length > 0
  )
    return e;
  try {
    let s = await t.transport.publishJournal(
      t.announceUpload({ generation: getNextGeneration(e), startedAtMs: r, writer: o }),
      { ifMatchEtag: null, createOnly: !0, signal: t.repository.signal },
    );
    return s.kind === "ok" ? { ...e, announcementEtag: s.etag } : e;
  } catch (s) {
    if (!yt(s)) logError(s);
    return e;
  }
}
async function Qn(e, t, r, o = null, s = !1) {
  let a = e.announcementEtag ?? null;
  if (a === null || e.journalEtag !== null) return e;
  try {
    let d = await t.transport.publishJournal(
      t.announceUpload(
        {
          generation: e.sent[0]?.generation ?? getNextGeneration(e),
          startedAtMs: t.now(),
          abandoned: !0,
          ...(e.announcementToken != null && { writer: e.announcementToken }),
        },
        r,
      ),
      { ifMatchEtag: a, signal: t.repository.signal },
    );
    if (d.kind === "ok") return { ...e, announcementEtag: d.etag };
    if (d.kind === "conflict" && !s && o !== null) {
      let f = await t.transport.readOwnJournal(t.repository.signal),
        p = f.kind === "ok" ? t.decodeJournal(f.content) : null;
      if (
        f.kind === "ok" &&
        p !== null &&
        p.note === null &&
        p.writer !== null &&
        p.writer === (e.announcementToken ?? null) &&
        p.startedAtMs === o &&
        f.etag !== a
      ) {
        let y = { ...e, announcementEtag: f.etag };
        if (p.abandoned && r === void 0) return y;
        let w = await Qn(y, t, r, o, !0);
        return w === y ? e : w;
      }
    }
    return e;
  } catch (d) {
    if (!yt(d)) logError(d);
    return e;
  }
}
async function Pa(e, t, r) {
  let o = e.announcementToken ?? null;
  if (
    !requiresAnnouncement(e.start) ||
    o === null ||
    e.journalEtag !== null ||
    (e.announcementEtag ?? null) !== null ||
    e.sent.length > 0
  )
    return { record: e, done: !0 };
  try {
    let s = await t.transport.publishJournal(
      t.announceUpload(
        { generation: getNextGeneration(e), startedAtMs: t.now(), abandoned: !0, writer: o },
        r,
      ),
      { ifMatchEtag: null, createOnly: !0, signal: t.repository.signal },
    );
    switch (s.kind) {
      case "ok":
        return { record: { ...e, announcementEtag: s.etag }, done: !0 };
      case "conflict": {
        let a = await Fr(e, t, "push");
        switch (a.kind) {
          case "foreign":
            return { record: e, done: !0 };
          case "unknown":
            return { record: e, done: !1 };
          case "absent":
            if (a.etag === null) return { record: e, done: !1 };
            break;
          case "ours":
            break;
        }
        let d = { ...e, announcementEtag: a.etag },
          f = await Qn(d, t, r);
        return { record: f, done: f !== d };
      }
      default:
        return { record: e, done: !1 };
    }
  } catch (s) {
    if (!yt(s)) logError(s);
    return { record: e, done: !1 };
  }
}
async function hr({
  record: e,
  userEventUuids: t,
  deps: r,
  uploading: o,
  ended: s,
}) {
  try {
    let a = getLatestSentUpload(e);
    if (a === null) return { kind: "nothing_to_publish", record: e };
    let d = r.encodeJournal({
        sessionId: r.sessionId,
        userEventUuids: t,
        note: Lc(e, a),
        ...(o !== void 0 && { uploading: o }),
        ...(s !== void 0 && { ended: s }),
      }),
      { transport: f, repository: p } = r,
      y = e.journalEtag;
    if (e.journalEtag === null) {
      let _ = await Fr(e, r, "publish");
      if (_.kind === "foreign") return { kind: "other_writer", record: e };
      if (_.kind === "ours" || _.kind === "absent") y = _.etag;
      if (_.kind === "ours" && _.lostGeneration !== null)
        return {
          kind: "not_delivered",
          record: recordSpentGeneration(e, _.lostGeneration),
          reason: "conflict",
          detail: `generation ${_.lostGeneration} already published by this machine before a restart`,
        };
      if (_.kind === "unknown")
        return {
          kind: "not_delivered",
          record: e,
          reason: "conflict",
          detail: "own journal row unreadable before the first publish",
        };
    }
    let w = await f.publishJournal(d, { ifMatchEtag: y, signal: p.signal }),
      k = w;
    if (w.kind === "conflict") {
      let _ = await Fr(e, r, "publish");
      if (_.kind === "foreign") return { kind: "other_writer", record: e };
      if (_.kind === "ours" && _.lostGeneration !== null)
        return {
          kind: "not_delivered",
          record: recordSpentGeneration(e, _.lostGeneration),
          reason: "conflict",
          detail: `generation ${_.lostGeneration} already published by this machine before a restart`,
        };
      if (_.kind === "ours" || _.kind === "absent")
        k = await f.publishJournal(d, {
          ifMatchEtag: _.etag,
          signal: p.signal,
        });
    }
    switch (k.kind) {
      case "ok":
        return {
          kind: "published",
          record: {
            ...e,
            journalEtag: k.etag,
            announcementEtag: null,
            announcementToken: null,
          },
        };
      case "unauthorized":
      case "lane_unavailable":
        return { kind: "lane_lost", record: e, reason: k.kind };
      case "aborted":
        return { kind: "aborted", record: e };
      case "conflict":
      case "lane_full":
      case "path_too_long":
      case "too_large":
      case "failed":
        return {
          kind: "not_delivered",
          record: e,
          reason: k.kind,
          detail: `journal put ${k.kind}`,
        };
    }
  } catch (a) {
    if (yt(a)) return { kind: "aborted", record: e };
    return (
      logError(a),
      {
        kind: "not_delivered",
        record: e,
        reason: "unexpected",
        detail: "unexpected throw",
      }
    );
  }
}
function Lc(e, t) {
  return {
    engine: "git",
    generation: t.generation,
    head: t.head,
    branch: t.branch,
    indexCommit: t.indexCommit,
    worktreeCommit: t.worktreeCommit,
    bundle: t.bundle,
    holds: e.received.map((r) => r.worktreeCommit).slice(0, MAX_LISTED_COMMITS),
    downApplied: getMergedDownApplied(e)
      .slice(-MAX_LISTED_APPLIED_TURNS)
      .map((r) => ({
        turn: r.turn,
        notInstalled: r.notInstalled.slice(0, MAX_LISTED_SKIPPED_FILES),
        truncated: r.truncated || r.notInstalled.length > MAX_LISTED_SKIPPED_FILES,
      })),
    fastForwardedTo: getMergedFastForwardHeads(e),
    withheldCounts: t.withheldCounts,
    ...(t.conflicted !== void 0 && { conflicted: t.conflicted }),
    ...(e.start.kind === "folder" && { origin: "folder" }),
    acceptsHeldParents: !0,
    ...(e.start.kind === "folder" &&
      e.start.seeded === !1 &&
      e.acked.length === 0 && { seedless: !0 }),
  };
}
async function co(e, t) {
  let { start: r, peerNeed: o } = t,
    s = getStartBasisCommits(r),
    a = t.acked.slice(0, Oc).filter((R) => R !== o),
    d = t.received.map((R) => R.worktreeCommit),
    f = t.sent[0]?.worktreeCommit ?? null,
    p = await e.presentCommits(
      dedupe([...d, ...a, ...s, ...(f === null ? [] : [f])]).filter((R) =>
        GIT_OBJECT_ID_REGEX.test(R),
      ),
    );
  if (p === null) return null;
  let y = t.received.filter((R) => p.has(R.worktreeCommit)),
    w = y[0]?.worktreeCommit ?? null,
    k =
      w !== null && w !== o
        ? w
        : r.kind === "seed" && p.has(r.worktreeCommit)
          ? r.worktreeCommit
          : null,
    _ = a.find((R) => p.has(R) && R !== k) ?? null,
    E =
      o !== null &&
      (t.acked.includes(o) ||
        d.includes(o) ||
        s.includes(o) ||
        t.sent.some((R) => R.head === o || R.worktreeCommit === o));
  if (o !== null && !E)
    logForDebugging(
      "git sync: the container reports lacking a commit no bundle from here can supply (a fork point below its history); bases unchanged",
    );
  return {
    basis: k,
    alsoParents: k !== null && _ !== null ? [_] : [],
    lastSentHeld: f !== null && p.has(f),
    prerequisites: dedupe([
      ...(k === null ? [] : [k]),
      ...a.filter((R) => p.has(R)),
      ...s.filter((R) => p.has(R)),
    ]),
    heldReceived: y,
    needUnanswerable: o !== null && !E,
  };
}
function Yo(e, t) {
  return t === null || Fc(e.received, t.heldReceived)
    ? e
    : { ...e, received: t.heldReceived };
}
function Fc(e, t) {
  return (
    e.length === t.length &&
    e.every(
      (r, o) =>
        r.generation === t[o]?.generation &&
        r.worktreeCommit === t[o]?.worktreeCommit,
    )
  );
}
function Ra({ gitDir: e, timeoutMs: t, checkoutShallowFile: r }) {
  let o = (s) => ({
    ...(s.signal !== void 0 && { signal: s.signal }),
    snapshotPin: s.shallowFile === void 0 ? {} : { shallowFile: s.shallowFile },
    withSignal: (a) => o({ ...s, signal: a }),
    pinForPass: async () => {
      let a = await r?.(s.signal);
      if (typeof a === "object") {
        if (s.signal?.aborted === !0) throw new Ve();
        return {
          kind: "refused",
          detail: `the checkout's git layout could not be read (${a.unreadable})`,
        };
      }
      let d = await readAlternatesLender(s.gitDir),
        f = a ?? (d.kind === "lender" ? d.shallowFile : null);
      if (f === null) return { kind: "nothing_to_pin" };
      let p = await ga(f, Ac(s.gitDir));
      return "kind" in p
        ? {
            kind: "refused",
            detail: `the checkout's shallow file is not one git wrote (${p.why})`,
          }
        : {
            kind: "pinned",
            repository: o({ ...s, shallowFile: p.shallowFile }),
            unchanged: p.unchanged,
            release: p.release,
          };
    },
    presentCommits: (a) => Dc(s, a),
    readTrees: (a) => $c(s, a),
    writeRefs: (a) => writeSessionRefs(s, a),
    createBundle: (a) => createBundle({ ...a, repository: s }),
    listSessionRefs: (a) => listSessionRefs(s, a),
    deleteRefs: (a) => deleteSessionRefs(s, a),
  });
  return o({ gitDir: e, timeoutMs: t });
}
async function Dc(e, t) {
  if (t.length === 0) return new Set();
  let r = await runDirSyncGit(e, ["cat-file", "--batch-check=%(objecttype)"], {
      input: t
        .map(
          (s) => `${s}
`,
        )
        .join(""),
    }),
    o = r.stdout
      .split(
        `
`,
      )
      .filter((s) => s !== "");
  if (r.exitCode !== 0 || o.length !== t.length) return null;
  return new Set(t.filter((s, a) => o[a] === "commit"));
}
function va(e) {
  return e !== null && isValidGitBranchName(e) ? e : null;
}
async function Fr(e, t, r) {
  let o = await t.transport.readOwnJournal(t.repository.signal);
  if (o.kind === "not_found") return { kind: "absent", etag: null };
  if (o.kind !== "ok") return { kind: "unknown" };
  let s = t.decodeJournal(o.content);
  if (s === null) return { kind: "foreign" };
  if (s.note === null) {
    if (s.writer !== null && s.writer === (e.announcementToken ?? null))
      return { kind: "ours", etag: o.etag, lostGeneration: null };
    let y = t.now() - s.startedAtMs;
    return s.abandoned || y > wa || y < -wa
      ? { kind: "absent", etag: o.etag }
      : { kind: "foreign" };
  }
  let { note: a } = s;
  if (e.sent.some((y) => y.worktreeCommit === a.worktreeCommit))
    return { kind: "ours", etag: o.etag, lostGeneration: null };
  let d = await t.repository.presentCommits([a.worktreeCommit]);
  if (d === null) return { kind: "unknown" };
  if (!d.has(a.worktreeCommit)) return { kind: "foreign" };
  let f = r === "publish" ? (e.sent[0]?.generation ?? getNextGeneration(e)) : getNextGeneration(e),
    p =
      a.generation >= f &&
      (a.generation > e.generationSpent ||
        (r === "publish" && a.generation === e.sent[0]?.generation));
  return {
    kind: "ours",
    etag: o.etag,
    lostGeneration: p ? a.generation : null,
  };
}
async function ya(e, t, r) {
  let o = new Set(r.sent.map((f) => buildSessionRefName(t, `${qo}/${f.generation}`))),
    s = buildSessionRefName(t, qo),
    a = s === null ? null : await e.listSessionRefs(t);
  if (a === null || s === null) return;
  let d = a
    .map((f) => f.name)
    .filter((f) => f.startsWith(`${s}/`) && !o.has(f));
  if (d.length > 0) await e.deleteRefs(d);
}
async function $c(e, t) {
  let r = await runDirSyncGit(e, ["rev-parse", ...t.map((s) => `${s}^{tree}`)]),
    o = r.stdout
      .split(
        `
`,
      )
      .filter((s) => s !== "");
  if (r.exitCode !== 0 || o.length !== t.length) return null;
  return o;
}
function Bc(e) {
  return (e.conflicted ?? []).slice(0, MAX_LISTED_CONFLICTED_COMMITS).map((t) => truncateToCodePoints(t, MAX_CONFLICT_CODE_UNITS));
}
function Mc(e) {
  return {
    credentialNamed: e.withheld.credentialNamed.length,
    filterAttributed: e.withheld.filterAttributed.length,
    hardLinked: e.withheld.hardLinked.length,
    ...(e.withheld.tooLarge !== void 0 && {
      tooLarge: e.withheld.tooLarge.length,
    }),
    ...(e.conflicted !== void 0 && {
      unresolvedConflicts: e.conflicted.length,
    }),
  };
}
function bn(e, t, r, o) {
  return { kind: "not_delivered", record: e, step: t, reason: r, detail: o };
}
var Ta = 2,
  Qo = 2,
  Zo = 5,
  ei = new Set([
    "busy",
    "momentary",
    "mid_operation",
    "unmerged_index",
    "aborted",
    "unreadable",
    "too_large",
    "unborn",
  ]),
  ti = 5,
  Aa = 3,
  fo = 16,
  Ca =
    "The cloud session has not picked up anything synced from this directory yet \u2014 if its side of git file sync is not switched on, changes made here and there will not reach the other side",
  Oa =
    "The cloud session never picked up anything synced from this directory \u2014 its side of file sync is not switched on \u2014 so this session stops syncing; new cloud sessions from here will try again",
  Dr = 64,
  xa = "Synced your changes to the cloud session",
  Ia =
    "Uploaded your changes; the cloud session has not picked up the earlier ones yet";
function Gc(e) {
  return `${e === 1 ? "1 file" : `${e} files`} updated here from the cloud session`;
}
var Vo = 3,
  Hc = {
    too_large: "are larger than sync carries and were not written here",
    unverified_object:
      "could not be verified against what the cloud sent and were not written",
    ignored_here: "are ignored by this checkout and were left out",
    withheld_here:
      "are withheld on this machine (credential-named) and were left alone",
    withheld_sensitive:
      "are withheld on this machine (credential-named) and were left alone",
    withheld_sensitive_tracked:
      "are withheld on this machine (credential-named, though tracked) and were left alone",
    withheld_read_denied:
      "are withheld on this machine (a Read rule or a sandbox read-deny setting covers them) and were left alone",
    withheld_rules_unreadable:
      "are withheld on this machine (its permission rules or sandbox settings could not be read) and were left alone",
    withheld_content_filter:
      "are kept by git through a content filter here (git-lfs, git-crypt) and were left alone",
    protected_name: "have names this machine protects and were not written",
    dot_path:
      "have dot-led names this machine does not take from the cloud and were not written",
    name_refused: "have names this machine refuses and were not written",
    outside_checkout:
      "would resolve outside this checkout (through a link or a nested repository) and were not written",
    unreadable: "could not be read here just now and were left alone",
    not_a_regular_file: "are not regular files here and were left alone",
    case_collision:
      "collide with another name on this file system and were not written",
    trash_refused: "could not be moved to the session trash and stayed",
    writer_refused: "could not be written here and stayed as they were",
  };
function Wc(e, t) {
  let r = new Map();
  for (let o of e) {
    let s = t(o);
    r.set(s, (r.get(s) ?? 0) + 1);
  }
  return r;
}
function ni(e, t) {
  switch (t.kind) {
    case "branch":
      return t.name !== e.branch;
    case "detached":
      return e.branch !== null || e.head !== t.head;
    case "unknown":
      return !1;
  }
}
async function Na(e, t) {
  let r = await runPinnedGit(e, ["symbolic-ref", "-q", "HEAD"], t);
  if (r.code === 0) {
    let s = r.stdout.trim();
    return s.startsWith("refs/heads/")
      ? { kind: "branch", name: s.slice(11) }
      : { kind: "unknown" };
  }
  if (r.exitCode !== 1) return { kind: "unknown" };
  let o = await runPinnedGit(e, ["rev-parse", "-q", "--verify", "HEAD^{commit}"], t);
  return o.code === 0
    ? { kind: "detached", head: o.stdout.trim() }
    : { kind: "unknown" };
}
async function La(e, t) {
  let r = await runPinnedGit(e, ["ls-files", "-u", "-z"], t);
  if (r.code !== 0) return null;
  return dedupe(
    r.stdout
      .split("\x00")
      .filter((o) => o !== "")
      .map((o) => o.slice(o.indexOf("\t") + 1)),
  );
}
var Fa = new Set(["aborted", "git_error"]);
function Oe(e) {
  return formatSingleLineText(e, { maxCodeUnits: MAX_TEXT_CODE_UNITS }).trim();
}
function Da(e, t, r, o, s = !1) {
  logEvent("tengu_dir_sync_push", {
    engine: fromEnum("git"),
    trigger: fromEnum(o),
    outcome: fromEnum(e.kind),
    held: s,
    reason: fromEnumOpt(
      e.kind === "snapshot_refused" ||
        e.kind === "lane_lost" ||
        e.kind === "not_delivered"
        ? e.reason
        : null,
    ),
    via: fromEnumOpt(e.kind === "sent" ? e.via : null),
    generation:
      e.kind === "sent" ? e.generation : (e.record.sent[0]?.generation ?? 0),
    bundle_bytes:
      e.kind === "sent"
        ? e.bundleBytes
        : e.kind === "too_large"
          ? e.sizeBytes
          : 0,
    prerequisites:
      e.kind === "too_many_prerequisites" ? e.prerequisiteCount : 0,
    commits: e.kind === "sent" ? e.commitCount : 0,
    paths:
      e.kind === "sent" || e.kind === "unchanged" ? e.snapshot.stats.paths : 0,
    installed_baseline: e.kind === "unchanged" && e.installedBaseline === !0,
    withheld:
      e.kind === "sent" || e.kind === "unchanged"
        ? Object.values(e.snapshot.withheld).reduce(
            (a, d) => a + (d?.length ?? 0),
            0,
          )
        : 0,
    changed_during_read:
      e.kind === "sent" || e.kind === "unchanged"
        ? (e.snapshot.withheld.changedDuringRead?.length ?? 0)
        : 0,
    conflicted:
      e.kind === "sent" || e.kind === "unchanged"
        ? (e.snapshot.conflicted?.length ?? 0)
        : 0,
    duration_ms: r() - t,
  });
}
function ri(e, { covered: t, outcome: r, counts: o }, s, a) {
  logEvent("tengu_dir_sync_pull", {
    engine: fromEnum("git"),
    trigger: fromEnum(e),
    outcome: fromEnum(r),
    received: fromEnumOpt(o?.received ?? null),
    round_skipped: fromEnumOpt(o?.roundSkipped ?? null),
    installed: o?.installed ?? 0,
    not_installed: o?.notInstalled ?? 0,
    skipped_down: o?.skippedDown ?? 0,
    refused: o?.refused ?? 0,
    conflicted_copies: o?.conflictedCopies ?? 0,
    deletes_held_back: o?.deletesHeldBack ?? 0,
    installs_withdrawn: o?.installsWithdrawn ?? 0,
    installs_withdrawn_ahead: o?.installsWithdrawnAhead ?? 0,
    replaced: o?.replaced ?? 0,
    replaced_earlier_cloud: o?.replacedEarlierCloud ?? 0,
    moved_to_trash: o?.movedToTrash ?? 0,
    deletes_held_remembered: o?.deletesHeldRemembered ?? 0,
    parked_overflow: o?.parkedOverflow ?? !1,
    covered: t,
    duration_ms: a() - s,
  });
}
function $a(e, t, r) {
  let o =
    r.received.kind === "ok"
      ? recordReceivedUpload(e, {
          generation: t.generation,
          worktreeCommit: r.received.worktreeCommit,
        })
      : e;
  if (r.received.kind === "refused") return o;
  let s = recordAppliedTurn(o, {
    turn: t.generation,
    installed: r.installed,
    ...(r.contentWritten !== void 0 && { written: r.contentWritten }),
    notInstalled: r.notInstalled,
    truncated: r.notInstalledTruncated || r.roundSkipped !== null,
    complete: !r.roundCapped && r.roundSkipped === null,
    ...(r.roundSkipped === null && { parked: r.parkedRemovals ?? [] }),
  });
  return r.roundCapped ? { ...s, appliedGeneration: e.appliedGeneration } : s;
}
var Jo = 3;
function Ma(e, t) {
  let r = [],
    o = countMatching(e.installed, (w) => w.blobId !== null);
  if (o > 0) r.push({ line: Gc(o), level: "debug" });
  if (t)
    for (let w of e.reportLines.map(Oe).filter(Boolean))
      r.push({ line: `Cloud session: ${w}`, level: "info" });
  if (e.roundSkipped === "base_not_held")
    r.push({
      line: "Files Claude changed in the cloud were left for the next turn: this machine no longer holds the state they were based on",
      level: "info",
    });
  if (e.roundSkipped === "diff_too_large")
    r.push({
      line: "This turn's changes were too many to compare with this checkout in one pass, so nothing was applied on this machine; Claude's changes stay in the cloud session",
      level: "info",
    });
  if (e.roundSkipped === "anchor_degraded")
    r.push({
      line: "Files Claude changed in the cloud were not placed on this machine: its file system offers no safe way to do so here; they stay in the cloud session",
      level: "warning",
    });
  if (e.roundSkipped === "history_rewritten")
    r.push({
      line: "Claude's branch in the cloud no longer contains this machine's last commit (a rewrite or a branch switch there), so nothing was applied on this machine this turn; it is re-integrated with your next message",
      level: "info",
    });
  let s = e.keptFromEarlierLife ?? [],
    [a] = s;
  if (a !== void 0)
    r.push({
      line:
        s.length === 1
          ? `The cloud session went back to a state without Claude's earlier changes to "${Oe(a)}"; the file stays as it is on this machine and goes up again with your next message`
          : `The cloud session went back to a state without Claude's earlier changes to "${Oe(a)}" and ${s.length - 1} more ${s.length === 2 ? "file" : "files"}; they stay as they are on this machine and go up again with your next message`,
      level: "warning",
      onceKey: `kept-earlier:${s.toSorted().join("\x00")}`,
    });
  let d = e.movedToTrash ?? [];
  if (d.length > 0) {
    let w = d
      .slice(0, Jo)
      .map((k) => `"${Oe(k)}"`)
      .join(", ");
    r.push({
      line: `${d.length} ${d.length === 1 ? "file" : "files"} Claude removed in the cloud session ${d.length === 1 ? "was" : "were"} moved to this session's trash on this machine, not erased: ${w}${d.length > Jo ? ` and ${d.length - Jo} more` : ""}`,
      level: "info",
    });
  }
  let f = new Set(e.replacedEarlierCloud ?? []),
    p = (e.replaced ?? []).filter((w) => !f.has(w));
  if (p.length > 0) {
    let [w] = p;
    r.push({
      line:
        p.length === 1
          ? `Replaced "${Oe(w ?? "")}" with the cloud session's version; your uncommitted copy is kept in this session's trash`
          : `Replaced "${Oe(w ?? "")}" and ${p.length - 1} more with the cloud session's versions; your uncommitted copies are kept in this session's trash`,
      level: "info",
    });
  }
  if (f.size > 0) {
    let [w] = [...f];
    r.push({
      line:
        f.size === 1
          ? `Replaced "${Oe(w ?? "")}" with the cloud session's newer version; the earlier one (also Claude's) is kept in this session's trash in case you need it`
          : `Replaced "${Oe(w ?? "")}" and ${f.size - 1} more with the cloud session's newer versions; the earlier ones (also Claude's) are kept in this session's trash in case you need them`,
      level: "info",
    });
  }
  if (e.skippedDown.length > 0)
    r.push({
      line: `${e.skippedDown.length === 1 ? "1 file" : `${e.skippedDown.length} files`} you changed here kept your version; Claude's edits to ${e.skippedDown.length === 1 ? "it" : "them"} are merged in the cloud with your next message`,
      level: "info",
    });
  let [y] = e.conflictedCopies;
  if (y !== void 0) {
    let w = e.conflictedCopies.length - 1;
    r.push({
      line: `Claude's version of ${Oe(y.path)} was saved beside it as ${Oe(y.copyPath)}${w > 0 ? ` (and ${w} more like it)` : ""}`,
      level: "info",
    });
  }
  if (e.deletesHeldBack > 0) {
    let [w] = e.heldRemovals ?? [];
    r.push({
      line:
        e.parkedOverflow === !0
          ? `${e.deletesHeldBack === 1 ? "1 file" : `${e.deletesHeldBack} files`} Claude deleted in the cloud${w === void 0 ? "" : ` ("${Oe(w)}"${e.deletesHeldBack > 1 ? ` and ${e.deletesHeldBack - 1} more` : ""})`} were kept here: an earlier, very large delete is still being held, so no removal is applied unasked until it settles \u2014 delete them yourself if that was intended`
          : w === void 0
            ? `${e.deletesHeldBack} files Claude deleted in the cloud were kept here (too many deletes at once to apply unasked)`
            : `Claude deleted ${e.deletesHeldBack} files at once in the cloud ("${Oe(w)}"${e.deletesHeldBack > 1 ? ` and ${e.deletesHeldBack - 1} more` : ""}); they were kept here \u2014 delete them yourself if that was intended`,
      level: "warning",
      onceKey: `held:${e.deletesHeldBack}:${(e.heldRemovals ?? []).toSorted().join("\x00")}`,
    });
  }
  for (let [w, k] of Wc(e.refused, (_) => _.reason)) {
    let _ = k === 1 ? "1 file" : `${k} files`,
      E = e.refused
        .filter((N) => N.reason === w)
        .map((N) => `"${Oe(N.path).replaceAll('"', "'")}"`),
      R = `${E.slice(0, Vo).join(", ")}${E.length > Vo ? ` and ${E.length - Vo} more` : ""}`;
    r.push({
      line: `${_} Claude changed ${Hc[w] ?? "could not be written here and stayed as they were"}: ${R}`,
      level: "warning",
      onceKey: `refused:${w}:${e.refused
        .filter((N) => N.reason === w)
        .map((N) => N.path)
        .sort()
        .join("\x00")}`,
    });
  }
  return r;
}
import { randomUUID as oi } from "crypto";
class ui extends Error {
  cause;
  constructor(e) {
    super("git sync writer lock could not be attempted", { cause: e });
    this.cause = e;
    this.name = "WriterLockUnavailableError";
  }
}
var Uc = new Set([
    "applied",
    "nothing_new",
    "peer_unshipped",
    "upload_only",
    "refused",
    "refused_object_skipped",
    "capped_until_upload",
    "deferred_branch_changed",
    "deferred_branch_changed_late",
  ]),
  jc = new Set(["dot_path"]),
  zc = new Set([
    "name_refused",
    "ignored_here",
    "withheld_read_denied",
    "withheld_content_filter",
  ]);
function Kc(e) {
  return jc.has(e);
}
function Xa(e) {
  return [e, normalizeUnicodeForm(e)].map((t) => t.split("/"));
}
function qc(e) {
  return Xa(e).some((t) => t.some((r) => r.startsWith(".")));
}
function Yc(e) {
  switch (e.kind) {
    case "sent":
    case "unchanged":
      return { kind: "failed", reason: `note_not_published:${e.kind}` };
    case "snapshot_refused":
      return ei.has(e.reason)
        ? { kind: "kept_here", reason: e.reason, detail: e.detail }
        : { kind: "failed", reason: `snapshot_${e.reason}` };
    case "too_large":
    case "too_many_prerequisites":
      return {
        kind: "kept_here",
        reason: e.kind,
        detail:
          e.kind === "too_many_prerequisites"
            ? "the changes span more merged branches than one sync step carries"
            : `${e.sizeBytes} bytes of changes are more than one sync step carries`,
      };
    case "other_writer":
    case "lane_lost":
    case "aborted":
      return { kind: "failed", reason: e.kind };
    case "not_delivered":
      return { kind: "failed", reason: `${e.step}_${e.reason}` };
  }
}
function Xc(e, t) {
  if (e === null)
    return t
      ? { kind: "not_attempted" }
      : { kind: "failed", reason: "crashed" };
  return e.kind === "failed" && e.reason.startsWith("note_not_published:")
    ? { kind: "failed", reason: "note_not_published" }
    : e;
}
function ii(e, t) {
  let r = t.sent[0]?.generation ?? 0;
  if (e?.kind !== "failed") return e;
  switch (e.reason) {
    case "note_not_published:sent":
      return { kind: "sent", generation: r };
    case "note_not_published:unchanged":
      return { kind: "unchanged", generation: r };
    default:
      return e;
  }
}
function Vc(e) {
  let t =
      /^(.*) \(largest, (\d+) bytes\): (\d+) bytes of changed files exceed the (\d+)-byte cap$/s.exec(
        e,
      ),
    r = (a, d) => `${d(Number(a) / 1048576)} MiB`,
    o = (a) =>
      a >= 1048576
        ? `${Math.floor(a / 1048576)} MiB`
        : `${Math.max(1, Math.ceil(a / 1024))} KiB`;
  return `the files to sync from here are too large (${t === null ? Oe(e) || "more than one message carries" : `over the ${r(t[4], Math.ceil)} a message may carry; the largest counted before the limit was reached is "${Oe(t[1])}" at ${o(Number(t[2]))}`}); remove or ignore the large files before a new session \u2014 committing them would not help, they would be too large to carry as history too`;
}
function Jc(e) {
  return zc.has(e);
}
var Qc = new Set([
  "protected_name",
  "withheld_sensitive",
  "withheld_sensitive_tracked",
]);
function Zc(e) {
  return Qc.has(e.reason) || Xa(e.path).some((t) => isProtectedClaudePath(t, "file"));
}
function ef(e, t, r) {
  let o = e.sent.findIndex((s) => e.acked.includes(s.worktreeCommit));
  return countMatching(
    e.sent.slice(0, o === -1 ? e.sent.length : o),
    (s) => r - (t.get(s.worktreeCommit) ?? r) >= 2,
  );
}
var tf = 8,
  si = Symbol("yielded"),
  Ga = new Set(["continue", "arrival", "poll", "peer_changed"]),
  nf = 6,
  rf = 30000,
  of = new Set([
    "failed",
    "route_unavailable",
    "conflict",
    "lane_full",
    "prerequisites_missing",
  ]);
function Wa(e, t) {
  let r = of.has(t),
    o =
      t === "unexpected"
        ? "an internal error"
        : t === "git_error"
          ? "git could not read or write the sync repository here"
          : t === "path_too_long"
            ? "a name the sync service cannot store"
            : t === "too_large"
              ? "more than the sync service carries in one step"
              : t === "rejected"
                ? "the cloud service refused the upload as sent"
                : `${e}: ${t.replace(/_/g, " ")}`;
  return { transient: r, cause: o };
}
function sf(e) {
  switch (e.kind) {
    case "not_delivered":
      return e.reason === "route_unavailable"
        ? `the cloud service is not accepting file uploads right now${e.status === void 0 ? "" : ` \u2014 HTTP ${e.status}`}`
        : e.reason === "rejected"
          ? "the cloud service refused the upload as sent"
          : e.step === "put" && e.status === 413
            ? "the upload route refused this size \u2014 HTTP 413"
            : e.step === "put"
              ? "the upload did not go through"
              : e.reason === "git_error"
                ? "git could not read the checkout"
                : "it could not be prepared";
    case "snapshot_refused":
      return e.reason === "busy"
        ? Oe(e.detail) || "the files here were busy"
        : e.reason === "unmerged_index"
          ? "conflicts are unresolved here"
          : e.reason === "mid_operation"
            ? "a git operation is in progress here"
            : e.reason === "unborn"
              ? "this branch has no commit yet"
              : `this checkout's state could not be captured: ${e.reason.replace(/_/g, " ")}`;
    case "aborted":
      return "it was interrupted";
    default:
      return null;
  }
}
var af = ei,
  lf = new Set([
    "staged_changes",
    "operation_in_progress",
    "checked_out_elsewhere",
    "index_busy",
    "ref_moved",
    "files_differ",
    "not_yet_sent",
    "rules_unreadable",
  ]),
  df = 1e4,
  uf = 1000,
  cf = 2000,
  Va = new Set([
    "busy",
    "momentary",
    "mid_operation",
    "unmerged_index",
    "aborted",
    "git_error",
    "basis_not_held",
    "unborn",
  ]),
  ff = new Set(["unmerged_index"]),
  mf = 2000,
  pf = "this checkout has more changed paths than file sync can list";
function Ua(e) {
  return e.replace(/\d[\d,._]*/g, "#");
}
var gf = 5,
  wf = 20000,
  yf = [250, 500, 1000, 2000, 4000],
  bf = "this checkout's files",
  _f = (e) => `Uploading ${e} \u2014 Esc cancels the message\u2026`,
  kf = (e) =>
    `That message was not sent; ${e} are still uploading, and your next message waits for them too.`,
  Sf = (e) =>
    `you stopped waiting for ${e} to reach the cloud session; they are still uploading, and a message sent now waits for them again`;
function ja(e, t, r, o) {
  return `File sync gave up in this window: ${e} could not be uploaded to the cloud session after ${t} tries${r === null ? "" : ` (${r})`}; a message you send from this window now runs there on ${o ? "the files the session started with" : "the repository as cloned"} \u2014 re-open the session or send from another window to try again`;
}
function Ef(e, t, r) {
  return `File sync gave up in this window: your changes could not be synced to the cloud session after ${e} tries${t === null ? "" : ` (${t})`}, so that message was not sent. Nothing was cleared \u2014 the cloud session keeps the files it already has; to sync again, re-open the session (${r}) or send from another window of it. A message you send from this window now runs there without your latest changes`;
}
var Pf =
    "your changes could not be synced to the cloud session after repeated tries; file sync gave up in this window (re-open the session to sync again), and a message you send here now goes without them",
  Rf = (e) =>
    e === 0
      ? "The cloud session has no files from this directory yet"
      : `Files from this directory are in the cloud session${e === null ? "" : ` (${e} ${pluralize(e, "file")})`}`,
  vf = "withdrawn before it was sent",
  $r = "Claude Code was shutting down before your files could be synced for it",
  Tf =
    "this machine could not make sure the session has this directory's files; send it again to try once more";
function ai(e) {
  return e
    ? "your unsynced changes never reached this session (see above); send it again to run it there on the files the session started with, or re-open the session to try again"
    : "your local changes never reached this session (see above); send it again to run it there on the repository as cloned, or re-open the session to try again";
}
var Cf = 60000,
  Of = (e, t) =>
    `File sync is offline for this session: this folder's changes could not be synced to the cloud after ${e} tries${t ? ". Your message goes, without file sync, once you confirm." : ". Confirm to continue without it."}`,
  xf =
    "File sync is off for the rest of this session: this folder's changes could not be synced to the cloud. Nothing in this folder was touched and it stays set to sync for future sessions; the cloud session empties its partial copy as soon as it can be told, and Claude carries on through this machine.",
  Nf =
    "File sync is offline \u2014 this message goes, without file sync, once you confirm\u2026",
  li =
    "The cloud session has not yet been told that file sync ended when it went offline earlier in this session \u2014 that takes your Continue on the notice, which was not given here \u2014 so it stays unsaid for now: the session keeps its partial copy of this folder until a window that can ask gets your confirmation.",
  za =
    "file sync went offline (the user's machine could not get its file changes to the cloud) and the user chose to continue without it",
  Lf =
    "file sync went offline earlier in this session and the cloud session has not yet been told",
  Ff = 5000,
  Df =
    "The cloud session has now been told that file sync ended here; it empties its copy of this folder before Claude's next turn there.",
  di =
    "File sync ended earlier in this session (its line then said why): your messages go to the cloud session without file sync, and Claude works on this machine directly. Start a new cloud session from here when you want file sync back.",
  $f = {
    refused:
      "file sync refused what this machine had to upload (a protected or credential-like file staged or committed, permission rules it could not read, history it cannot bundle, or an upload the service rejects)",
    too_large:
      "the changes here are larger than file sync carries in one upload",
    withdrawn: "the user switched file sync off for this directory",
    switched_off: "file sync was switched off for this account",
    lane_unavailable: "file sync was switched off for this organization",
    start_failed: "the cloud session could not start from this machine's files",
    layout_unserved:
      "this checkout's layout is not one file sync serves (a linked working tree)",
    offline:
      "file sync went offline (the user's machine could not get its file changes to the cloud); the user was told and the session continues without it",
  };
function Ka(e) {
  return $f[e] ?? "file sync ended on the user's machine";
}
var Bf = [
  "seed_incomplete",
  "gave_up",
  "other_writer",
  "writer_lock_lost",
  "peer_silent",
  "store_unreadable",
  "store_removed",
  "engine_unsupported",
  "ended_earlier",
];
function Mf(e) {
  return Bf.includes(e);
}
function Gf(e) {
  switch (e.outcome) {
    case "too_large":
    case "too_many_prerequisites":
      return !0;
    case "snapshot_refused":
      return !Va.has(e.reason ?? "");
    case "not_delivered":
      return e.reason === "rejected";
    default:
      return !1;
  }
}
var qa = { capture: 0, watch: 1, settle: 2, sync_point: 3, send: 4, create: 5 },
  Ya = new Set(["settle", "sync_point"]);
function ho(e) {
  let t = e?.sent[0];
  return { generation: t?.generation ?? 0, tree: t?.worktreeCommit ?? null };
}
function hFt({
  sessionId: e,
  gitRoot: t,
  push: r,
  recordPath: o,
  snapshot: s,
  transport: a,
  applyDown: d,
  codec: f,
  onStatus: p,
  boundToThisMachine: y,
  initialPass: w = "none",
  wedgedMs: k = WEDGED_MS,
  firstUploadProgressMs: _ = df,
  firstUploadRetryLadderMs: E = FIRST_UPLOAD_RETRY_LADDER_MS,
  uploadHeartbeatMs: R = wf,
  localWaitRecheckMs: N = mf,
  uploadSubject: C = bf,
  offlineRepublishMs: O = Cf,
  endedEarlier: D,
  peerClaimGraceMs: pe = PEER_CLAIM_GRACE_MS,
  writerLock: re,
  onPeerSilent: te,
  onPeerAnswered: ge,
  lines: { peerQuiet: le = Ca, peerSilent: J = Oa } = {},
  consent: fe = () => getGitRootDirSyncConsent(t),
  checkoutBranch: K,
  heldStateProbe: ee = async (ze) =>
    ze === "unmerged_index" ? ((await La(t))?.length ?? 0) > 0 : null,
  fastForward: ye,
  branchRetryMs: Ge = rf,
  pullSupported: at = isDirSyncPullSupported,
  pollWindowMs: je = POLL_WINDOW_MS,
  pollStepMs: Ae = POLL_STEP_MS,
  resultSettleMs: vt = RESULT_SETTLE_MS,
  lockRetryJitterMs: Xe = cf,
  changeFeed: wt,
  debouncePolicy: Wt,
  streamingScope: tt,
  nowMs: Q = Date.now,
}) {
  let ze = [],
    bt = null,
    Ut = !1,
    ft = 0,
    Lt = 0,
    _t = null,
    jt = 0,
    sn = !1,
    ht = null,
    Rt = 0,
    mt = new Map(),
    lt = fo,
    zt = (c, b) => {
      (mt.delete(c), mt.set(c, b));
      for (let T of mt.keys()) {
        if (mt.size <= Dr) break;
        mt.delete(T);
      }
    },
    Je = Promise.resolve(),
    Ft = null,
    St = { verdict: null },
    ne = "capture",
    ae = !1,
    Tt = null,
    me = null,
    At = D?.published === !0 || D?.reason === "offline" ? D : void 0,
    xe = At === void 0 ? null : { reason: "ended_earlier", line: di },
    nt = null,
    ve = !1,
    q = { pull: 0, push: 0 },
    Ne = { pull: 0, push: 0 },
    Ke = 0,
    Ot = null,
    De = null,
    qe = !1,
    _n = !1,
    An = null,
    Kt = !1,
    Cn = !1,
    kn = 0,
    Dt = null,
    Ce = null,
    xt = null,
    En = null,
    $t = new AbortController(),
    qt = new AbortController(),
    dt = !1,
    Bt = null,
    Pn = !1,
    pt = null,
    Rn = null,
    I = null,
    he = null,
    Qe = !1,
    ut = null,
    Ye = 0,
    Ze = null,
    rt = null,
    Le = null,
    an = { key: "", count: 0 },
    Yt = !1,
    On = () =>
      me !== null &&
      (me.start.kind !== "clone" || me.start.origin === "bundle"),
    Hr = `claude --cloud ${toCompatSessionId(e)}`,
    hn = new Set(),
    er = (c) => (hn.add(c), () => hn.delete(c)),
    Wr = () => {
      for (let c of hn) c();
    },
    Xt = !1,
    pr = "send",
    gt = { outcome: "not_run", reason: null, files: 0, tookSnapshot: !1 },
    gr = !1,
    xn = null,
    qn = !1,
    $n = 0,
    Bn = new Map(),
    m = 0,
    U = null,
    _e = null,
    He = null,
    Ue = null,
    $e = null,
    Pe = w !== "send",
    Vt = null,
    dn = 0,
    Pt = 0,
    Jt = new Map(),
    wr = !1,
    tr = null;
  function yr() {
    for (let c of Jt.keys()) Jt.set(c, Rt);
    if (Pt > 0) ((Mn += 1), (Pt = 0));
  }
  let Mn = 0,
    un = !1,
    pn = 0,
    Qt = null,
    br = 0,
    Ur = !1,
    jr = !1,
    Zt = 0,
    wo = null,
    yo = !1,
    nr = null,
    bi = (c) => {
      if (((nr = c), !c && at() && !Be())) Fe("pull-unbound", PULL_UNBOUND_MESSAGE, "info");
    };
  y.then(bi, () => bi(!1));
  let bo = null,
    _r = new Set(),
    Sr = null,
    Er = null,
    _o = 0,
    Pr = null,
    Rr = !1,
    In = null,
    hl = (c) => {
      if ((_r.add(c), _r.size > Dr)) _r.delete(_r.values().next().value ?? "");
    },
    Yn = new Map(),
    ko = (c, b) => {
      if ((Yn.delete(c), Yn.set(c, b), Yn.size > tf))
        Yn.delete(Yn.keys().next().value ?? "");
    },
    ct = null,
    rr = new Set(),
    _i = (c) => {
      if ((rr.add(c), rr.size > Dr)) rr.delete(rr.values().next().value ?? "");
    },
    vr = null,
    en = new Set(),
    ki = null,
    Si = new Set(),
    or = new Map(),
    Mt = new AbortController(),
    It = () => xe !== null,
    Be = () => xe !== null || ve;
  function Ie(c, b = "info") {
    try {
      p(c, b);
    } catch (T) {
      logError(T);
    }
  }
  function Fe(c, b, T = "info") {
    if (en.has(c)) return;
    (en.add(c), Ie(b, T));
  }
  function Gt(c, b, T = "warning", v = Ka(c)) {
    if (xe !== null) return;
    if (((Zt += 1), $t.abort(), et.halt(), Mf(c))) {
      ((xe = { reason: c, line: b }), Ie(b, T), Je.then(Tr, Tr));
      return;
    }
    let L = { reason: c, line: v };
    if (
      ((pt = L),
      (xe = { reason: c, line: c === "offline" ? b : formatFileSyncStoppedLine(stripFileSyncPrefix(Oe(b))) }),
      Ie(xe.line, "warning"),
      logEvent("tengu_dir_sync_git_ended", {
        reason: fromEnum(c),
        first_upload_landed: qe || Pe,
        created_here: w === "send",
      }),
      logFeatureSad("ccr_dir_sync_pull", `ended_${c}`),
      c === "offline")
    )
      Ai(L, !1);
    else Bt = zr(L);
  }
  let Xn = "none";
  function Ei() {
    if (Xn !== "none") return;
    ((Xn = "owed"), Pi());
  }
  function Pi() {
    let c = I;
    if (Xn !== "owed" || c === null || ve) return;
    Xn = "asked";
    let b = Q();
    Promise.resolve()
      .then(() =>
        c({
          folder: t,
          attempts: E.length + 1,
          lastError: Lf,
          signal: qt.signal,
        }),
      )
      .then(
        ({ acknowledged: T }) => {
          if (
            (logEvent("tengu_dir_sync_git_offline_continued", {
              asked: !0,
              acknowledged: T,
              waited_ms: Q() - b,
              closed: ve,
              resumed: !0,
            }),
            ve || Qe || dt)
          )
            return;
          if (!T) {
            ((Xn = "owed"), Fe("offline-end-owed", li, "info"));
            return;
          }
          let v = { reason: "offline", line: za };
          ((pt = v), Ai(v, !0));
        },
        (T) => {
          if (
            (logForDebugging(
              `dir-sync: the offline dialog failed (${l(T)}); the cloud session is not told that file sync ended`,
            ),
            !ve)
          )
            ((Xn = "owed"), Fe("offline-end-owed", li, "info"));
        },
      )
      .catch(Te);
  }
  function vi() {
    return he === null ? I : null;
  }
  function Ti(c, b, T) {
    if (he !== null || Be()) return;
    let v = Q();
    (logEvent("tengu_dir_sync_git_offline", {
      tries: c,
      first_upload_landed: qe || Pe,
      created_here: w === "send",
    }),
      Ie(Of(c, m > 0), "warning"),
      $t.abort(),
      T());
    let L = truncateWithEllipsis(Ce ?? "");
    he = Promise.resolve()
      .then(() =>
        ve
          ? void 0
          : b({
              folder: t,
              attempts: c,
              ...(L !== "" && { lastError: L }),
              signal: qt.signal,
            }),
      )
      .catch((be) => {
        logForDebugging(
          `dir-sync: the offline dialog failed (${l(be)}); continuing without file sync`,
        );
        return;
      })
      .then((be) => {
        if (
          (logEvent("tengu_dir_sync_git_offline_continued", {
            acknowledged: be?.acknowledged === !0,
            waited_ms: Q() - v,
            closed: ve,
          }),
          !ve)
        )
          Gt(
            "offline",
            xf,
            "warning",
            be?.acknowledged === !0 ? za : Ka("offline"),
          );
      });
  }
  function Ai(c, b) {
    ((Rn = {
      cause: c,
      landed: !1,
      inFlight: null,
      offers: 0,
      sinceMs: Q(),
      resumed: b,
    }),
      So(),
      (async () => {
        while (Rn?.landed === !1 && !ve && !Qe && !dt) {
          if ((await sleep(O, qt.signal, { unref: !0 }), ve || Qe)) return;
          await So();
        }
      })().catch(Te));
  }
  function So() {
    let c = Rn;
    if (c === null || c.landed) return Promise.resolve(c !== null);
    if (c.inFlight !== null) return c.inFlight;
    c.offers += 1;
    let b = zr(c.cause);
    return (
      (Bt = b),
      (c.inFlight = b),
      b.then(
        (T) => {
          if (((c.inFlight = null), T && !c.landed)) {
            if (((c.landed = !0), c.offers > 1 || c.resumed))
              (logEvent("tengu_dir_sync_git_end_published_late", {
                tries: c.offers,
                after_ms: Q() - c.sinceMs,
                resumed: c.resumed,
              }),
                Ie(Df, "info"));
          }
        },
        () => {
          c.inFlight = null;
        },
      ),
      b
    );
  }
  function zr(c) {
    let b = ml(c);
    return (b.then(Tr, Tr), b);
  }
  function ml(c) {
    let T = Je.then(async () => {
      if (!(await Kr())) return !1;
      return ((Lt = ft), pl(c));
    }).catch((v) => (Te(v), !1));
    return ((Je = T.then(() => {})), T);
  }
  function Eo() {
    if (
      ((xe = { reason: "ended_earlier", line: di }),
      (Zt += 1),
      $t.abort(),
      et.halt(),
      !Yt)
    )
      ((Yt = !0), Ie(di, "warning"));
  }
  async function pl(c) {
    let b = async (v) => {
      try {
        let L = me ?? (await vn("push"));
        if (L === null || L.ended?.published === !0) return;
        if (!v && L.ended?.reason === c.reason) return;
        await Ee({
          ...L,
          ended: {
            ...c,
            atMs: L.ended?.reason === c.reason ? L.ended.atMs : Q(),
            published: v,
          },
        });
      } catch (L) {
        Te(L);
      }
    };
    if ((await b(!1), ve)) return !1;
    let T = !1;
    try {
      T = await gl(c, Mt.signal);
    } catch (v) {
      Te(v);
    }
    if (T) await b(!0);
    return T;
  }
  async function gl(c, b) {
    await Ln();
    let T = me ?? (await vn("push"));
    if (T === null) return !1;
    let v = { ...Nn(b), beforeUpload: void 0 };
    if (getLatestSentUpload(T) === null) {
      if ((T.announcementEtag ?? null) === null) {
        let Se =
          requiresAnnouncement(T.start) && (T.announcementToken ?? null) === null
            ? { ...T, announcementToken: oi() }
            : T;
        if (Se !== T) await Ee(Se);
        let H = await Pa(Se, v, c);
        if (H.record !== Se) await Ee(H.record);
        return H.done;
      }
      let be = await Qn(T, v, c, Dt);
      if (be === T) return !1;
      return (await Ee(be), !0);
    }
    let L = await hr({ record: T, userEventUuids: ze, deps: v, ended: c });
    if (L.record !== T) await Ee(L.record);
    let ie = L.kind === "published" || L.kind === "nothing_to_publish";
    return (
      (Ce = ie
        ? null
        : L.kind === "lane_lost"
          ? "the cloud is refusing this machine just now"
          : L.kind === "not_delivered"
            ? `the sync service did not take it (${L.reason.replace(/_/g, " ")})`
            : "another writer holds the session"),
      ie
    );
  }
  async function wl(c) {
    if (xe !== null) return;
    let b = new AbortController(),
      T = setTimeout((v) => v.abort(), Math.max(1000, c), b);
    try {
      if (U !== null) {
        (Ie(
          "Your latest changes had not finished uploading to the cloud session when you left; they go up with your first message next time.",
          "warning",
        ),
          await Vr(
            !1,
            "the upload was cut off when Claude Code exited",
            b.signal,
            !0,
          ));
        return;
      }
      if (w !== "send" || qe || Pe) return;
      let v = await vn("push");
      if (v === null || v.announcementEtag === void 0 || v.journalEtag !== null)
        return;
      (Ie(
        `The upload of ${C} to the cloud session did not finish before you left; the session starts without them.`,
        "warning",
      ),
        (Kt = !0),
        await Ln());
      let L = await Qn(v, Nn(b.signal), void 0, Dt);
      if (L !== v) await Ee(L);
    } catch (v) {
      Te(v);
    } finally {
      clearTimeout(T);
    }
  }
  let Po = !1;
  async function Tr() {
    if (bt?.kind !== "held") return;
    let c = bt;
    ((bt = null), await c.release());
  }
  function Te(c, b = "push") {
    if (yt(c)) return;
    if (
      ((q[b] += 1),
      logError(c),
      Fe(
        `unexpected-${b}`,
        b === "push"
          ? "File sync hit an unexpected error sending your changes; it tries again with your next message"
          : "File sync hit an unexpected error taking what Claude changed in the cloud; it tries again at the next result",
        "warning",
      ),
      q[b] === Ta)
    )
      Ie(
        b === "push"
          ? "File sync keeps hitting an unexpected error sending your changes; your message waits while it tries a few more times (Esc cancels the message; in the desktop app, Stop) \u2014 if it persists, start a new cloud session"
          : "File sync keeps hitting an unexpected error taking what Claude changed in the cloud; it keeps trying",
        "warning",
      );
  }
  let yl =
      "Another Claude Code window on this machine is syncing this session's files; this one won't",
    Ci =
      "This session's files are being synced from somewhere else (another machine or window); this one stopped syncing them",
    Vn = null;
  function Oi(c) {
    if (Vn !== null || ve) return;
    let b = c - Q(),
      T = Number.isFinite(b) ? Math.min(Math.max(uf, b), Ir) : Ir;
    ((Vn = setTimeout(
      () => {
        if (((Vn = null), ve || It() || bt?.kind === "held")) return;
        Ar("pull", async (v) => {
          try {
            if (bt?.kind !== "held" && (await Kr())) await to(v, "poll");
          } catch (L) {
            throw (Oi(Q() + Ir), L);
          }
        });
      },
      T + Math.floor(Math.random() * Xe),
    )),
      Vn.unref?.());
  }
  async function Kr() {
    if (re === void 0 || bt?.kind === "held") return ((dt = !1), xi(), !0);
    let c;
    try {
      c = await re((b) => {
        switch (b.kind) {
          case "taken_over":
            return (
              (Qe = !0),
              Gt(
                "other_writer",
                "Another Claude Code window took over syncing this session; this one stopped",
              )
            );
          case "lost":
            return (
              (Qe = !0),
              Gt(
                "writer_lock_lost",
                "File sync stopped for this session: its lock on this machine could not be kept",
              )
            );
          case "retaken_after_stall":
            ((ft += 1),
              (me = null),
              (Ot = null),
              (Vt = null),
              (xn = null),
              (Pr = null),
              Yn.clear(),
              (ct = null));
            return;
        }
      });
    } catch (b) {
      throw new ui(b);
    }
    if (c.kind === "other_writer")
      return (
        (Ut = !0),
        (dt = !0),
        Fe("other-writer", yl, "info"),
        Oi(c.retryAtMs),
        !1
      );
    if (Po) return (await c.release(), !1);
    if (((dt = !1), Ut)) {
      if (((me = null), (Vt = null), (xn = null), !Be()))
        Ie(
          "This window now syncs this session's files (the other one let go)",
          "info",
        );
    }
    return ((bt = c), xi(), !0);
  }
  function xi() {
    if (wt === void 0 || qn || Be()) return;
    ((qn = !0), et.streaming.start(wt(), Wt));
  }
  async function Ii() {
    let c =
      ut !== null && ut.pass === Ye
        ? ut.standing
        : await fe().catch(
            (b) => (
              logForDebugging(
                `dir-sync: consent unknown just now (${l(b)}); this pass is skipped`,
              ),
              null
            ),
          );
    if (((ut = { pass: Ye, standing: c }), c === null))
      return (
        (Ze =
          "this directory's sync setting could not be read just now (the feature flag did not answer)"),
        (Ce = Ze),
        !1
      );
    if (c === "given") return ((rt = null), !0);
    if (rt !== null && rt.answer === c && rt.pass !== Ye)
      return (Gt(c, describeDirSyncWithdrawn(c), "info"), !1);
    if (rt === null || rt.answer !== c) rt = { answer: c, pass: Ye };
    return (
      (Ze =
        "this directory no longer reads as set to sync \u2014 checking once more"),
      (Ce = Ze),
      logForDebugging(`dir-sync: consent read ${c}; confirmed by a later pass`),
      !1
    );
  }
  async function vn(c) {
    if (me !== null) return me;
    let b = await readGitSessionRecord(o, e);
    if (b.kind === "git") {
      if (((me = b.record), (Ne[c] = 0), (Lt = ft), xe === null)) {
        if (b.record.ended?.published === !0) Eo();
        else if (b.record.ended?.reason === "offline") (Eo(), Ei());
      }
      return me;
    }
    if (b.kind === "unsupported") return (Gt("engine_unsupported", ENGINE_UNSUPPORTED_MESSAGE), null);
    if (((Ne[c] += 1), b.kind === "absent" || Ne[c] >= Qo))
      Gt(
        b.kind === "absent" ? "store_removed" : "store_unreadable",
        b.kind === "absent" ? SYNC_RECORD_REMOVED_MESSAGE : SYNC_RECORD_UNREADABLE_MESSAGE,
      );
    return null;
  }
  let ir = () =>
    Qe || xe?.reason === "other_writer" || xe?.reason === "writer_lock_lost";
  async function Ee(c) {
    if (c === me) return;
    if (ir() || Lt !== ft || Po) {
      logForDebugging(
        "git sync: record write skipped \u2014 the writer lock is no longer (or was not continuously) held here",
      );
      return;
    }
    me = c;
    try {
      (await writeGitSessionRecord(o, c), (Ke = 0));
    } catch (b) {
      if (!yt(b)) logError(b);
      if (b instanceof GitSessionRecordInvalidError) return;
      if (((Ke += 1), Ke === Qo))
        Ie(
          "File sync cannot save its local record of this session just now (is the disk full or the folder read-only?); sync carries on and keeps trying to save it",
          "warning",
        );
    }
  }
  async function qr(c, b, T, v) {
    let L = v === "send" || v === "create";
    if (L && Le?.key === c) {
      Gt(b, T);
      return;
    }
    let ie = Le?.key === c;
    if (((Le = { key: c, reason: b, line: T }), (Ze = T), (Ce = T), L))
      Ie(
        `File sync cannot carry this checkout as it is: ${T}. It looks once more in a moment; if it is still so, file sync stops for this session`,
        "warning",
      );
    else if (!ie)
      Ie(
        `File sync is paused: ${T}. Fix that, or file sync ends for this session at your next message`,
        "warning",
      );
  }
  function bl(c, b) {
    if (
      ((an =
        an.key === c ? { key: c, count: an.count + 1 } : { key: c, count: 1 }),
      an.count === gf)
    )
      Ie(
        `File sync still cannot capture this checkout (${b || c}) after several tries; your message waits while sync tries a few more times \u2014 fix that to send it with your files, or press Esc and start a new cloud session`,
        "warning",
      );
  }
  function Yr(c, b) {
    if (b === "direct_sync_off") {
      Gt(
        "lane_unavailable",
        "direct file sync is switched off for this organization",
      );
      return;
    }
    ((Ce =
      c === "unauthorized"
        ? "the cloud refused this device's credentials \u2014 /login may clear it"
        : "file sync is switched off in the cloud just now"),
      Fe(
        `lane-refused:${c}`,
        `${c === "unauthorized" ? "The cloud refused this device's credentials (running /login again may clear it)" : "File sync is switched off in the cloud just now"}; sync keeps trying, and a message you send waits for it (Esc cancels the message; in the desktop app, Stop)`,
        "warning",
      ));
  }
  function _l(c) {
    if (c.acked.length > 0 || c.journalEtag === null || It()) return;
    let b = Rt >= 2 && c.sent.length >= Aa,
      T = wo !== null && Q() - Math.max(c.armedAtMs, wo) >= pe;
    if (!b && !T) return;
    if (!(b && T)) {
      Fe("peer-quiet", le, "warning");
      return;
    }
    (Gt("peer_silent", J, "warning"),
      logEvent("tengu_dir_sync_git_peer_silent", {
        uploads: c.sent.length,
        results: Rt,
      }));
    try {
      te?.(c.armedAtMs);
    } catch (v) {
      logError(v);
    }
  }
  async function kl() {
    if (!at())
      return (
        Fe(
          "pull-unsupported",
          "Files Claude changes in the cloud are not pulled to this machine on this platform; your changes still go up",
          "info",
        ),
        !1
      );
    if (nr === !1) Fe("pull-unbound", PULL_UNBOUND_MESSAGE, "info");
    return nr === !0;
  }
  function Nn(c) {
    return {
      repository: r.withSignal(c),
      sessionId: e,
      snapshot: s,
      transport: a,
      encodeJournal: f.encodeLaptop,
      announceUpload: f.announceUpload,
      decodeJournal: f.decodeLaptop,
      now: Q,
      beforeUpload: (b) => Sl(b, c),
      installedTree: () => Pr,
    };
  }
  async function Sl(c, b) {
    if (U !== null) {
      if (_e === null) Xr(U);
      return;
    }
    let T = $e ?? (await vn("push"));
    if (T === null || T.journalEtag === null) return;
    let v = Q(),
      L = await hr({
        record: T,
        userEventUuids: ze,
        deps: { ...Nn(b), beforeUpload: void 0 },
        uploading: { generation: c, startedAtMs: v, heartbeatAtMs: v },
      });
    if (L.kind !== "published") return;
    if (Ue !== null) (clearTimeout(Ue), (Ue = null));
    ((U = { generation: c, startedAtMs: v }),
      ($e = L.record),
      await Ee(L.record),
      Xr(U));
  }
  function Xr(c) {
    ((_e = setInterval(
      (b) => b(),
      R,
      () => {
        let b = Pl(c)
          .catch(Te)
          .then(() => {
            if (He === b) He = null;
          });
        He = b;
      },
    )),
      _e.unref?.());
  }
  function El(c, b) {
    if (_e !== null) return;
    ((_e = setInterval(
      (T) => T(),
      R,
      () => {
        let T = Ni({ generation: c, startedAtMs: b })
          .catch(Te)
          .then(() => {
            if (He === T) He = null;
          });
        He = T;
      },
    )),
      _e.unref?.());
  }
  async function Ni(c) {
    let b = me,
      T = b?.announcementToken ?? null,
      v = b?.announcementEtag ?? null;
    if (
      b === null ||
      T === null ||
      v === null ||
      b.journalEtag !== null ||
      qe ||
      Pe ||
      Kt ||
      Be() ||
      ir()
    ) {
      if (_e !== null && U === null) (clearInterval(_e), (_e = null));
      return;
    }
    let L = Nn(Mt.signal),
      ie = await L.transport.publishJournal(
        L.announceUpload({ ...c, writer: T, heartbeatAtMs: Q() }),
        { ifMatchEtag: v, signal: L.repository.signal },
      );
    if (ie.kind === "ok") ((kn = Q()), (Dt = c.startedAtMs));
    if (ie.kind === "ok" && me !== null && me.announcementEtag === v)
      await Ee({ ...me, announcementEtag: ie.etag });
  }
  async function Ln() {
    if (_e !== null) (clearInterval(_e), (_e = null));
    if (He !== null) await He;
  }
  async function Pl(c) {
    let b = me ?? $e;
    if (b === null || U?.generation !== c.generation || Be()) return;
    let T = await hr({
      record: b,
      userEventUuids: ze,
      deps: { ...Nn(Mt.signal), beforeUpload: void 0 },
      uploading: { ...c, heartbeatAtMs: Q() },
    });
    if (T.kind === "published" && U?.generation === c.generation) {
      let L = { ...(me ?? b), journalEtag: T.record.journalEtag };
      (($e = L), await Ee(L));
    }
  }
  async function Vr(c, b, T = Mt.signal, v = !1) {
    await Ln();
    let L = U,
      ie = $e;
    if (((U = null), ($e = null), L === null || c || ie === null)) return;
    let be = async () => {
      let Se = me ?? ie;
      if (
        (ve && !v) ||
        Bt !== null ||
        ir() ||
        U !== null ||
        (getLatestSentUpload(Se)?.generation ?? 0) >= L.generation
      )
        return !0;
      let H = await hr({
        record: (await vn("push")) ?? Se,
        userEventUuids: ze,
        deps: { ...Nn(T), beforeUpload: void 0 },
        uploading: { ...L, abandoned: !0, reason: b },
      }).catch(() => null);
      if (H !== null && H.kind === "published") return (await Ee(H.record), !0);
      return !1;
    };
    if (!(await be())) Jr(be);
  }
  function Jr(c) {
    if (Ue !== null) clearTimeout(Ue);
    if (ve) return;
    ((Ue = setTimeout(
      (b) => {
        ((Ue = null),
          (Je = Je.then(async () => {
            if (!ve && !(await b())) Jr(b);
          }).catch(Te)));
      },
      R,
      c,
    )),
      Ue.unref?.());
  }
  function Qr(c) {
    Je = Je.then(() =>
      U === null || Bt !== null || ir() ? void 0 : Vr(!1, c),
    ).catch(Te);
  }
  function Zr() {
    ((Kt = !0),
      (Je = Je.then(async () => {
        if (qe || Pe || Bt !== null || ir()) return;
        if ((await Ln(), !(await Ro()))) Jr(Ro);
      }).catch(Te)));
  }
  async function Ro() {
    let c = me ?? (await vn("push"));
    if (
      c === null ||
      ve ||
      qe ||
      Pe ||
      Bt !== null ||
      ir() ||
      (c.announcementEtag ?? null) === null ||
      c.journalEtag !== null
    )
      return !0;
    let b = await Qn(c, Nn(Mt.signal), void 0, Dt);
    if (b === c) return !1;
    return (await Ee(b), !0);
  }
  async function Rl(c, b) {
    let T = Qt,
      v = (de, it) => ({ covered: de, outcome: it, counts: null });
    if (((Sr = null), It() || !(await Kr()))) return v(!1, "not_running");
    let L = await vn("pull");
    if (L === null || It() || !(await Ii())) return v(!1, "not_running");
    let ie = await a.readPeerJournal(c);
    if (ie.kind !== "aborted") sn = ie.kind === "ok";
    switch (ie.kind) {
      case "not_found":
        return (_l(L), v(!1, "no_journal"));
      case "aborted":
        return v(!1, "aborted");
      case "unauthorized":
      case "lane_unavailable":
        return (Yr(ie.kind), v(!1, "lane_lost"));
      case "failed":
        return (
          Fe(
            "peer-journal-failed",
            "Could not read what Claude changed in the cloud just now; trying again at the next result",
            "debug",
          ),
          v(!1, "journal_failed")
        );
      case "ok":
        if (ie.etag !== tr) wr = !1;
        if (((jt += 1), ie.etag !== _t)) et.peerAlive();
        _t = ie.etag;
        break;
    }
    let be = f.decodeWorker(ie.content),
      Se = f.decodeWorkerStartFailed?.(ie.content) ?? null;
    if (Se !== null) {
      let de = !yo && L.acked.length === 0 && L.received.length === 0;
      return (
        Gt(
          "start_failed",
          de
            ? `the cloud session could not start from this machine's files${Se.line === null ? "" : ` \u2014 in its words: "${Oe(Se.line)}"`}`
            : "the cloud session reports its environment was recreated and could not be refilled from this machine \u2014 start a new cloud session to keep syncing",
        ),
        v(!1, "not_running")
      );
    }
    if (be === null)
      return (
        Fe(
          "peer-journal-unreadable",
          "The cloud session's file record could not be read; files Claude changes there are not arriving here",
          "warning",
        ),
        v(!1, "journal_unreadable")
      );
    let { note: H } = be;
    Sr = { generation: H.generation, worktreeCommit: H.worktreeCommit };
    let F = L.acked.length === 0 && L.received.length === 0;
    if (!yo) {
      yo = !0;
      try {
        if (F) ge?.(Q());
      } catch (de) {
        logError(de);
      }
    }
    let ue = T !== null && be.userEventUuids.includes(T),
      z = applyPeerNote(L, H);
    if (L.acked.length > 0 && z.acked.length === 0) yr();
    let ot =
        (z.start.kind === "seed" &&
          z.start.worktreeCommit === H.worktreeCommit) ||
        z.received.some((de) => de.worktreeCommit === H.worktreeCommit),
      We = H.bundle !== null && !ot;
    if (
      We &&
      H.bundle !== null &&
      vr === `${H.worktreeCommit}:${H.bundle.sha256}`
    )
      return (await Ee(z), sr(H), v(ue, "refused_object_skipped"));
    let tn = _r.has(H.worktreeCommit),
      Me = bo === H.worktreeCommit;
    if (!We && (ot ? tn || (!Me && H.generation <= z.appliedGeneration) : !0)) {
      if (
        (await Ee(z),
        sr(H),
        b !== "send" &&
          ct !== null &&
          !et.deferPull() &&
          ct.note.worktreeCommit === H.worktreeCommit &&
          ct.builtOn.worktreeCommit === z.sent[0]?.worktreeCommit &&
          ct.tries < nf &&
          Q() - ct.lastTryMs >= Ge)
      ) {
        et.takingIn(!0);
        try {
          await Li(
            ct.note,
            ct.builtOn,
            ct.keepLocal,
            ct.keepRemoved,
            ct.neverFrom,
            c,
          );
        } finally {
          et.takingIn(!1);
        }
      } else if (
        ct !== null &&
        ct.builtOn.worktreeCommit !== z.sent[0]?.worktreeCommit
      )
        ct = null;
      return v(
        ue,
        H.unshipped === !0 && H.bundle === null
          ? "peer_unshipped"
          : "nothing_new",
      );
    }
    if (!(await kl())) return (await Ee(z), sr(H), v(ue, "upload_only"));
    if (et.deferPull()) return (await Ee(z), sr(H), v(ue, "held_for_command"));
    let X = L.sent.find((de) => de.worktreeCommit === H.basedOn),
      ke = async (de, it) => (
        await Ee(z),
        Fe(
          `branch-deferred:${H.worktreeCommit}`,
          de.branch === null
            ? "Files Claude changed in the cloud wait until this checkout is back where your last synced message was sent from"
            : `Files Claude changed in the cloud wait until this checkout is back on branch ${Oe(de.branch)}`,
          "info",
        ),
        v(ue, it)
      );
    if (X !== void 0) {
      let de = await K(c);
      if (ni(X, de)) return ke(X, "deferred_branch_changed");
      if (H.branch !== null && de.kind === "branch" && H.branch !== de.name)
        Fe(
          `cloud-branch:${H.branch}`,
          `Claude switched to branch ${Oe(H.branch)} in the cloud; its commits will be carried onto ${Oe(de.name)} at the next turn`,
          "info",
        );
    }
    if (!hasDownApplyCapacity(z))
      return (
        await Ee(z),
        Fe(
          "down-apply-capped",
          "Files Claude changed in the cloud are held until your next message goes up",
          "info",
        ),
        v(ue, "capped_until_upload")
      );
    let Re = null;
    if (We && H.bundle !== null) {
      let de = await a.getInbound(H.bundle, c);
      switch (de.kind) {
        case "ok":
          Re = de.content;
          break;
        case "unauthorized":
        case "lane_unavailable":
          return (
            await Ee(z),
            Yr(de.kind, de.kind === "lane_unavailable" ? de.cause : void 0),
            v(ue, "lane_lost")
          );
        case "not_found":
        case "aborted":
          return (await Ee(z), v(!1, "object_pending"));
        case "failed":
          if ((await Ee(z), de.status === UNREADABLE_CARRIER_STATUS))
            return (
              (vr = `${H.worktreeCommit}:${H.bundle.sha256}`),
              sr(H),
              Fe(
                "object-unreadable",
                "What Claude changed in the cloud was sent in a form this version of Claude Code cannot download; update Claude Code to receive it",
                "warning",
              ),
              v(ue, "refused_object_skipped")
            );
          return (
            Fe(
              `object-failed:${H.bundle.sha256}`,
              "What Claude changed in the cloud could not be downloaded just now; trying again at the next result",
              "warning",
            ),
            v(!1, "object_failed")
          );
      }
    }
    if (Re !== null && X !== void 0 && ni(X, await K(c)))
      return ke(X, "deferred_branch_changed_late");
    if (et.deferPull()) return (await Ee(z), v(ue, "held_for_command"));
    let oe;
    et.takingIn(!0);
    try {
      et.installing(!0);
      try {
        oe = await d({ workerNote: H, content: Re, record: z, signal: c });
      } finally {
        et.installing(!1);
      }
      if (
        ((vr =
          oe.received.kind === "refused" &&
          H.bundle !== null &&
          !Fa.has(oe.received.reason)
            ? `${H.worktreeCommit}:${H.bundle.sha256}`
            : null),
        (z = $a(z, H, oe)),
        (Pr =
          (oe.received.kind === "ok" ||
            (oe.received.kind === "nothing_new" && ot)) &&
          oe.roundSkipped === null &&
          !oe.roundCapped &&
          oe.notInstalled.length === 0 &&
          !oe.notInstalledTruncated &&
          oe.refused.length === 0 &&
          oe.conflictedCopies.length === 0 &&
          oe.deletesHeldBack === 0
            ? ((await r.withSignal(c).readTrees([H.worktreeCommit]))?.[0] ??
              null)
            : null),
        oe.received.kind !== "refused")
      ) {
        if (
          ((Rr = !0),
          (bo = oe.roundCapped ? H.worktreeCommit : null),
          !oe.roundCapped && oe.roundSkipped === null)
        )
          hl(H.worktreeCommit);
      }
      if (
        (await Ee(z),
        Al(H, oe),
        oe.roundCapped &&
          oe.received.kind !== "refused" &&
          oe.installed.length > 0 &&
          !Be())
      ) {
        let de = (mt.get(H.worktreeCommit) ?? 0) + 1;
        if ((zt(H.worktreeCommit, de), de <= fo && lt > 0))
          ((lt -= 1),
            Fe(
              `arriving:${H.worktreeCommit}`,
              "More of Claude's files from the cloud are still arriving; they keep coming in the background",
              "debug",
            ),
            Promise.resolve()
              .then(() => (Be() ? void 0 : Hn("continue")))
              .catch(Te));
      } else if (!oe.roundCapped) mt.delete(H.worktreeCommit);
      if (
        ye !== void 0 &&
        (oe.received.kind === "ok" ||
          (oe.received.kind === "nothing_new" && ot)) &&
        !oe.roundCapped &&
        oe.roundSkipped === null &&
        (oe.installsWithdrawn?.length ?? 0) === 0
      ) {
        ct = null;
        let de = L.sent.find((it) => it.worktreeCommit === H.basedOn);
        if (
          de !== void 0 &&
          de.branch !== null &&
          H.head !== de.head &&
          (H.branch === null || H.branch === de.branch)
        ) {
          let it = oe.refused.filter(Zc).map((Ht) => Ht.path),
            Nt = new Set(it),
            Cr = oe.parkedRemovals ?? [],
            Wn = dedupe([
              ...oe.refused.filter((Ht) => Kc(Ht.reason)).map((Ht) => Ht.path),
              ...Cr.filter(qc),
            ]).filter((Ht) => !Nt.has(Ht)),
            gn = new Set(Wn),
            Hl = dedupe([
              ...oe.refused.filter((Ht) => Jc(Ht.reason)).map((Ht) => Ht.path),
              ...Cr,
            ]).filter((Ht) => !Nt.has(Ht) && !gn.has(Ht));
          await Li(H, de, Wn, Hl, it, c);
        }
      }
    } finally {
      et.takingIn(!1);
    }
    return {
      covered: ue,
      outcome: oe.received.kind === "refused" ? "refused" : "applied",
      counts: {
        received: oe.received.kind,
        roundSkipped: oe.roundSkipped,
        installed: oe.installed.length,
        notInstalled: oe.notInstalled.length,
        skippedDown: oe.skippedDown.length,
        refused: oe.refused.length,
        conflictedCopies: oe.conflictedCopies.length,
        deletesHeldBack: oe.deletesHeldBack,
        installsWithdrawn: oe.installsWithdrawn?.length ?? 0,
        installsWithdrawnAhead: oe.installsWithdrawnAhead ?? 0,
        replaced: oe.replaced?.length ?? 0,
        replacedEarlierCloud: oe.replacedEarlierCloud?.length ?? 0,
        movedToTrash: oe.movedToTrash?.length ?? 0,
        deletesHeldRemembered: oe.deletesHeldRemembered ?? 0,
        parkedOverflow: oe.parkedOverflow ?? !1,
      },
    };
  }
  let eo = (c) =>
    [c.worktreeCommit, ...c.report].join(`
`);
  function sr(c, b = c.report) {
    if (rr.has(eo(c))) return;
    let T = b.map(Oe).filter(Boolean);
    if (T.length === 0) return;
    _i(eo(c));
    for (let v of T) Ie(`Cloud session: ${v}`, "info");
  }
  async function Li(c, b, T, v, L, ie) {
    if (ye === void 0 || ve || It() || b.branch === null) return;
    let be = b.branch,
      Se = Q(),
      H = ft,
      F = Yn.get(be),
      ue,
      z = { last: null },
      ot = async (We) => {
        let tn = (ke) =>
            s({
              basis: null,
              signal: ie,
              ...(ke !== void 0 && { layoutRead: ke }),
            }).catch((Re) => {
              if (yt(Re)) throw Re;
              return (logError(Re), null);
            }),
          Me = await tn(We),
          X =
            We !== void 0 && Me?.kind === "refused" && Me.reason === "git_error"
              ? await tn(void 0)
              : Me;
        if (X === null)
          return { kind: "refused", detail: "the snapshot could not be built" };
        if (X.kind !== "snapshot")
          return ((z.last = X), { kind: "refused", detail: X.detail });
        return It()
          ? { kind: "refused", detail: "sync stopped for this session" }
          : { kind: "built", worktreeCommit: X.snapshot.worktreeCommit };
      };
    try {
      let We = F ?? (me === null ? null : getLastHeadForBranch(me, be)) ?? b.head;
      if (
        ((ue = await ye({
          worktreeCommit: c.worktreeCommit,
          expectedHead: We,
          expectedBranch: be,
          vouch: ot,
          keepLocal: T,
          keepRemoved: v,
          neverFrom: L,
          signal: ie,
        })),
        It() && ue.kind !== "fast_forwarded" && ue.kind !== "already")
      )
        return;
      if (ue.kind === "waiting" && ue.reason === "not_vouched") {
        if (H === ft)
          Bi(c, b, T, v, L, z.last !== null && af.has(z.last.reason));
        logEvent("tengu_dir_sync_git_fast_forward", {
          outcome: fromEnum("no_snapshot"),
          reason: fromEnumOpt(z.last?.reason),
          ms: Q() - Se,
        });
        return;
      }
    } catch (We) {
      if (
        ((ct = null),
        logEvent("tengu_dir_sync_git_fast_forward", {
          outcome: S(yt(We) ? "aborted" : "error"),
          ms: Q() - Se,
        }),
        !yt(We))
      )
        logError(We);
      return;
    }
    if (H === ft) Bi(c, b, T, v, L, ue.kind === "waiting" && lf.has(ue.reason));
    switch (
      (logEvent("tengu_dir_sync_git_fast_forward", {
        outcome: fromEnum(ue.kind),
        reason: fromEnumOpt(ue.kind === "waiting" ? ue.reason : void 0),
        paths: ue.kind === "fast_forwarded" ? ue.paths : void 0,
        kept: ue.kind === "fast_forwarded" ? ue.keptLocal.length : void 0,
        ms: Q() - Se,
      }),
      ue.kind)
    ) {
      case "fast_forwarded":
        (ko(be, ue.to),
          await $i(ue.to, be),
          Di(),
          Fe(
            `fast-forwarded:${ue.to}`,
            `Your branch ${Oe(ue.branch)} now has Claude's commits from the cloud (fast-forwarded from ${ue.from.slice(0, 7)} to ${ue.to.slice(0, 7)})`,
            "debug",
          ),
          Tl(ue.keptLocal, ue.to));
        return;
      case "waiting":
        vl(ue.reason, ue.detail, c.generation, or.get(c.worktreeCommit) ?? 0);
        return;
      case "already":
        (ko(be, ue.head), await $i(ue.head, be), Di());
        return;
      case "aborted":
        return;
    }
  }
  function Fi() {
    for (let c of en) if (c.startsWith("snapshot-passing:")) en.delete(c);
  }
  function Di() {
    Gn = null;
    for (let c of en) if (c.startsWith("branch-wait:")) en.delete(c);
  }
  async function $i(c, b) {
    let T = me ?? (await vn("pull"));
    if (T !== null) await Ee(recordFastForward(T, c, b));
  }
  function Bi(c, b, T, v, L, ie) {
    ct = ie
      ? {
          note: c,
          builtOn: b,
          keepLocal: T,
          keepRemoved: v,
          neverFrom: L,
          tries:
            (ct?.note.worktreeCommit === c.worktreeCommit ? ct.tries : 0) + 1,
          lastTryMs: Q(),
        }
      : null;
  }
  let Gn = null;
  function vl(c, b, T, v) {
    if (!((c === "files_differ" || c === "not_yet_sent") && v === 0)) Gn = null;
    else if (Gn?.reason === c)
      Gn = { reason: c, generation: T, snapshots: Gn.snapshots + 1 };
    else Gn = { reason: c, generation: T, snapshots: 1 };
    let ie = (() => {
      switch (c) {
        case "staged_changes":
          return "Claude's commits from the cloud join your branch once nothing else is staged on the files they touch (checked again a few times over the next minutes; after that your next message carries on from what you have)";
        case "operation_in_progress":
          return "Claude's commits from the cloud join your branch once the merge, rebase or cherry-pick in progress here is finished (checked again a few times over the next minutes; after that your next message carries on from what you have)";
        case "checked_out_elsewhere":
          return `Claude's commits from the cloud are not put on your branch while ${Oe(b)}, which would then show them as undone there. They join it once that tree is on another branch \u2014 or, if that tree no longer exists, once \`git worktree prune\` has run here (checked again a few times over the next minutes; after that your next message carries on from what you have)`;
        case "head_moved":
        case "branch_switched":
        case "detached":
          return "This checkout is no longer where your last message was sent from, so Claude's cloud commits are not fast-forwarded here; its next turn carries them onto what you have now";
        case "too_large":
        case "too_many_paths":
          return "Claude's cloud commits are too large to fast-forward here; they stay in the cloud session's history";
        case "unsupported_entry":
        case "not_descendant":
        case "withheld_in_range":
        case "untracked_dependency_path":
          return `Your branch stays where it is: ${Oe(b)}. Claude's cloud commits are in the session's history; your next message carries on from what you have`;
        case "kept_path_changed":
        case "protected_path":
          return `Your branch stays where it is: ${Oe(b)}. Those commits stay in the cloud session (nothing of them was brought here); your next message carries on from what you have`;
        case "files_differ":
        case "not_yet_sent":
          return v > 0
            ? `Your branch stays where it is while the ${v === 1 ? "file" : `${v} files`} Claude deleted in the cloud ${v === 1 ? "is" : "are"} kept here (checked again a few times over the next minutes if you delete ${v === 1 ? "it" : "them"} too; after that, or once Claude restores ${v === 1 ? "it" : "them"} or commits the deletion, your next message carries on from what you have); file contents are otherwise up to date`
            : Gn !== null && Gn.snapshots >= 2
              ? "Your branch stays where it is: a file Claude's cloud commits change still differs on this machine (one you keep different, or one Claude deleted that is back here); it catches up once they match \u2014 your next messages carry on from what you have"
              : null;
        case "index_busy":
        case "ref_moved":
        case "rules_unreadable":
        case "objects_unavailable":
        case "not_vouched":
        case "bad_arguments":
        case "git_error":
          return null;
      }
    })();
    if (ie !== null) Fe(`branch-wait:${c}:${ie}`, ie, "info");
  }
  function Tl(c, b) {
    let T = c.filter((ie) => ie.change === "removed");
    if (T.length === 0) return;
    let v = Oe(cn(T.map((ie) => ie.path))),
      L = T.length === 1;
    Fe(
      `kept-local-removed:${b}`,
      `Claude deleted ${v} in the cloud; ${L ? "your copy stays" : "your copies stay"} on this machine as ${L ? "an untracked file" : "untracked files"}`,
      "info",
    );
  }
  function Al(c, b) {
    if (b.received.kind === "refused") {
      (Fe(
        `refused-${b.received.reason}`,
        "What Claude changed in the cloud could not be taken this time; it will be retried after the next turn",
        "warning",
      ),
        sr(c));
      return;
    }
    let T = c.report.length > 0 && !rr.has(eo(c));
    if (T) _i(eo(c));
    if (b.refused.length === 0) {
      for (let v of en) if (v.startsWith("refused:")) en.delete(v);
    }
    if (b.deletesHeldBack > 0) {
      if ((or.set(c.worktreeCommit, b.deletesHeldBack), or.size > Dr))
        or.delete(or.keys().next().value ?? "");
    } else if (b.roundSkipped === null) {
      or.delete(c.worktreeCommit);
      for (let v of en) if (v.startsWith("held:")) en.delete(v);
    }
    if ((b.installsWithdrawn ?? []).length === 0 && b.roundSkipped === null) {
      for (let v of en) if (v.startsWith("kept-earlier:")) en.delete(v);
    }
    for (let v of Ma(b, T))
      if (v.onceKey === void 0) Ie(v.line, v.level);
      else Fe(v.onceKey, v.line, v.level);
  }
  async function Cl(c, b, T = !1) {
    let v = Q();
    ((pr = b),
      (gt = { outcome: "not_run", reason: null, files: 0, tookSnapshot: !1 }));
    try {
      await Ol(c, b, T);
    } finally {
      if (((gr = !1), Xt)) await Vr(!0, "").catch(Te);
      else if (
        b !== "send" &&
        b !== "create" &&
        m === 0 &&
        Bn.size === 0 &&
        De === null &&
        !It()
      )
        await Vr(
          !1,
          "a background upload did not go through; the next sync point carries it",
        ).catch(Te);
    }
    if (Xt) xn = ho(me);
    let L = {
      trigger: pr,
      landed: Xt,
      ...gt,
      kept: !Xt && Gf(gt),
      generation: (xn ?? ho(me)).generation,
      startedAtMs: v,
      endedAtMs: Q(),
      heldBy: An,
    };
    return (et.passEnded(L), L);
  }
  async function Ol(c, b, T) {
    ((Xt = !1), (An = null));
    let v = b;
    if (he !== null) {
      Ce = "file sync is offline for this session";
      return;
    }
    let L = [...ze];
    if (v !== "capture")
      await to(c, "send").catch((X) => {
        if (!(X instanceof ui)) Te(X, "pull");
      });
    let ie = Q();
    if (((Ce = null), (Ze = null), It() || !(await Kr()))) {
      ((Ce = "another window on this machine is syncing this session"),
        (gt = { ...gt, reason: "other_writer_here" }));
      return;
    }
    if (v === "watch" && et.held()) {
      if (!T) {
        gt = { ...gt, reason: "held_for_command" };
        return;
      }
      ((v = "capture"), (pr = "capture"));
    }
    let be = await vn("push");
    if (be === null || It() || !(await Ii())) {
      ((Ce = Ze ?? "this machine's sync state could not be read"),
        (gt = { ...gt, reason: "record_or_consent" }));
      return;
    }
    let Se = Nn(c),
      H = be;
    if (
      v === "create" &&
      be.journalEtag === null &&
      be.sent.length === 0 &&
      (be.announcementToken ?? null) === null
    ) {
      ((H = { ...be, announcementToken: oi() }), await Ee(H));
      let X = Q(),
        ke = await Ea(H, Se, X);
      if (ke !== H) ((H = ke), (kn = Q()), (Dt = X), await Ee(H));
    }
    if (
      (H.announcementEtag ?? null) !== null &&
      H.journalEtag === null &&
      !qe &&
      !Pe &&
      !Kt
    ) {
      if (Q() - kn >= R)
        (await Ni({ generation: getNextGeneration(H), startedAtMs: Q() }).catch(Te),
          (H = me ?? H));
      El(getNextGeneration(H), Q());
    }
    gr = !0;
    let F = await Sa({ record: H, deps: Se });
    gt = {
      outcome: F.kind,
      reason: "reason" in F ? F.reason : null,
      files:
        F.kind === "sent" || F.kind === "unchanged"
          ? F.snapshot.stats.paths
          : 0,
      tookSnapshot: !0,
    };
    let ue = F.kind === "snapshot_refused" && ff.has(F.reason);
    if ((Da(F, ie, Q, v, ue), (In = Yc(F)), Lt !== ft)) {
      Ce = "another window on this machine is syncing this session";
      return;
    }
    let z =
      $e === null ? F.record : { ...F.record, journalEtag: $e.journalEtag };
    if (U === null && _e !== null) {
      await Ln();
      let X = me?.announcementEtag ?? null;
      if (
        z.journalEtag === null &&
        (z.announcementEtag ?? null) !== null &&
        X !== null
      )
        z = { ...z, announcementEtag: X };
    }
    if (
      ((_n = F.kind === "other_writer" || F.kind === "lane_lost"),
      (Ce = _n ? null : (Ze ?? sf(F))),
      (v === "create" || (w === "send" && !Pe)) &&
        F.kind !== "sent" &&
        F.kind !== "unchanged" &&
        !ue &&
        (_n || Cn))
    ) {
      ((Kt = !0), await Ln());
      let X = await Qn(z, Se, void 0, Dt);
      if (
        X === z &&
        (z.announcementEtag ?? null) !== null &&
        z.journalEtag === null
      )
        Jr(Ro);
      z = X;
    }
    if (
      F.kind !== "snapshot_refused" &&
      F.kind !== "too_large" &&
      F.kind !== "too_many_prerequisites" &&
      F.kind !== "aborted" &&
      !(F.kind === "not_delivered" && F.reason === "rejected")
    )
      ((Le = null), (an = { key: "", count: 0 }));
    if (F.kind === "sent" || F.kind === "unchanged") {
      let X = z.sent[0];
      if (X !== void 0 && X.branch !== null) ko(X.branch, X.head);
    }
    switch (F.kind) {
      case "sent":
      case "unchanged": {
        Fi();
        let { withheld: X } = F.snapshot,
          ke = [
            ...(X.credentialNamed ?? []),
            ...(X.filterAttributed ?? []),
            ...(X.hardLinked ?? []),
            ...(X.notFiles ?? []),
            ...(X.readDenied ?? []),
          ];
        if (ke.length > 0) {
          let Nt = ke.slice(0, 5).map(Oe).join(", ");
          Fe(
            `withheld:${ke.length}:${Nt}`,
            `Left on this machine, not synced: ${Nt}${ke.length > 5 ? ` and ${ke.length - 5} more` : ""}`,
            "info",
          );
        }
        let Re = X.changedDuringRead ?? [],
          oe =
            Re.length === 0
              ? null
              : `${Re.length}:${Re.slice(0, 5).map(Oe).join(", ")}`;
        if (oe !== null && oe !== ki) {
          let Nt = Re.slice(0, 5).map(Oe).join(", ");
          Ie(
            `${Re.length} ${pluralize(Re.length, "file")} changed while ${pluralize(Re.length, "it was", "they were")} being read (${Nt}${Re.length > 5 ? ` and ${Re.length - 5} more` : ""}); ${pluralize(Re.length, "it goes", "they go")} up with the first message after ${pluralize(Re.length, "it holds", "they hold")} still`,
            "info",
          );
        }
        ki = oe;
        let de = F.snapshot.conflicted ?? [];
        if (de.length > 0) {
          let Nt = de.slice(0, 5).map(Oe).join(", ");
          Fe(
            `conflicted:${de.length}:${Nt}`,
            `${de.length} ${pluralize(de.length, "file holds", "files hold")} unresolved conflicts here (${Nt}${de.length > 5 ? ` and ${de.length - 5} more` : ""}); ${pluralize(de.length, "it was", "they were")} synced as ${pluralize(de.length, "it is", "they are")}, conflict markers included, and Claude is told; whatever you change in ${pluralize(de.length, "it", "them")}, resolving included, goes up with your next message`,
            "info",
          );
        }
        let it = X.tooLarge ?? [];
        if (it.length > 0) {
          let Nt = it.slice(0, 5).map(Oe).join(", ");
          Fe(
            `too-large:${it.length}:${Nt}`,
            `Too large for this session (over ${Math.floor(MAX_WORKING_FILE_BYTES / 1048576)} MiB each), so changes to them stay on this machine: ${Nt}${it.length > 5 ? ` and ${it.length - 5} more` : ""}`,
            "warning",
          );
        }
        break;
      }
      case "snapshot_refused": {
        let X = Oe(F.detail);
        if (Va.has(F.reason)) {
          let Re = v === "send" || v === "create";
          if (Re) Le = null;
          An = ue ? F.reason : null;
          let oe = `${F.reason}:${Ua(F.detail)}`;
          if (F.reason !== "aborted" && Re && !ue) bl(oe, X);
          let de =
              v === "create"
                ? `the upload of ${C} waits`
                : "your message waits",
            it =
              v === "create"
                ? ""
                : " (Esc cancels the message; in the desktop app, Stop)";
          if (
            (v === "send" || (v === "create" && ue)) &&
            F.reason !== "aborted"
          )
            Fe(
              `snapshot-passing:${oe}`,
              F.reason === "busy"
                ? `${X || "the files here were busy"}; ${de} while sync tries again${it}`
                : F.reason === "git_error" ||
                    F.reason === "basis_not_held" ||
                    F.reason === "momentary"
                  ? `this checkout could not be captured just now (${X || "no detail"}); ${de} while sync tries again`
                  : F.reason === "unborn"
                    ? `This checkout is on a branch with no commit yet; ${de} while sync tries again \u2014 make the first commit (or switch back) to send your files${it}`
                    : `Unresolved conflicts here (from a merge, rebase, cherry-pick, revert or stash pop); ${de} until you resolve them or abort that operation${it}`,
              "info",
            );
          if (U !== null) {
            if (ue) await Ln();
            else if (_e === null) Xr(U);
            return;
          }
          break;
        }
        (logForDebugging(`dir-sync: snapshot refused (${F.reason}): ${F.detail}`),
          await Ee(z));
        let ke = F.reason === "too_many_paths";
        await qr(
          F.reason === "too_large" || ke
            ? F.reason
            : `${F.reason}:${Ua(F.detail)}`,
          F.reason === "too_large" || ke ? "too_large" : "refused",
          ke
            ? pf
            : F.reason === "too_large"
              ? Vc(F.detail)
              : F.reason === "unreadable"
                ? `this checkout holds something sync cannot carry \u2014 ${X || "something here could not be read"}`
                : `this checkout could not be captured (${F.reason.replace(/_/g, " ")}${X ? `: ${X}` : ""})`,
          v,
        );
        return;
      }
      case "too_large": {
        (await Ee(z),
          await qr(
            "too_large",
            "too_large",
            `your changes here are too large to sync (${Math.ceil(F.sizeBytes / 1048576)} MiB against a ${Math.floor(Xo / 1048576)} MiB limit) \u2014 uncommitted edits and commits the cloud session does not have yet count alike; a large file in one of those commits keeps every upload over the limit until it is rewritten out of the history`,
            v,
          ));
        return;
      }
      case "too_many_prerequisites":
        (await Ee(z),
          await qr(
            "too_many_prerequisites",
            "refused",
            "your changes here span more merged branches than one sync step can carry",
            v,
          ));
        return;
      case "lane_lost":
        (await Ee(z), Yr(F.reason, F.cause));
        return;
      case "other_writer":
        (await Ee(z), Gt("other_writer", Ci));
        return;
      case "not_delivered":
        if (
          (logForDebugging(
            `dir-sync: upload not delivered (${F.step}, ${F.reason}): ${F.detail}`,
          ),
          await Ee(z),
          F.reason === "rejected")
        ) {
          await qr(
            `rejected:${F.step}:${F.status ?? 0}`,
            "refused",
            `the upload route refused this change${F.status === void 0 ? "" : ` \u2014 HTTP ${F.status}`}`,
            v,
          );
          return;
        }
        Mi(
          `Your changes could not be uploaded just now${Ce === null ? "" : ` (${Ce})`}; sync tries again in a moment`,
          Wa(F.step, F.reason),
          v,
        );
        return;
      case "aborted":
        return;
    }
    if (F.kind === "sent") ((pn = 0), (Pr = null));
    let ot = !1;
    if ((await Ln(), $e !== null)) z = { ...z, journalEtag: $e.journalEtag };
    let We = qe || Pe,
      tn = `${z.sent[0]?.generation ?? 0}:${z.received.map((X) => X.worktreeCommit).join(",")}:${L.join(",")}`;
    if (It()) {
      await Ee(z);
      return;
    }
    if (tn !== Ot || z.journalEtag === null || U !== null || Rr) {
      let X = await hr({ record: z, userEventUuids: L, deps: Se });
      if (Lt !== ft) {
        Ce = "another window on this machine is syncing this session";
        return;
      }
      switch (((z = X.record), X.kind)) {
        case "published":
          if (
            ((Ot = tn),
            (ot = !0),
            (Rr = !1),
            (_o = getLatestSentUpload(z)?.generation ?? _o),
            (In = ii(In, z)),
            F.kind === "sent" || F.kind === "unchanged")
          ) {
            if (((qe = !0), (Xt = !0), v !== "create")) Pe = !0;
          }
          break;
        case "lane_lost":
          ((gt = { ...gt, reason: X.reason }), await Ee(z), Yr(X.reason));
          return;
        case "other_writer":
          ((gt = { ...gt, reason: "other_writer" }),
            await Ee(z),
            Gt("other_writer", Ci));
          return;
        case "not_delivered":
          if (
            ((gt = { ...gt, reason: `note_${X.reason}` }),
            await Ee(z),
            U !== null && _e === null)
          )
            Xr(U);
          (logForDebugging(`dir-sync: note not published (${X.reason}): ${X.detail}`),
            (Ce = "the cloud session could not be told about them"),
            Mi(
              F.kind === "sent"
                ? "Your changes went up but could not be announced to the cloud session just now; sync tries again in a moment"
                : "The cloud session could not be told the state of your files just now; sync tries again in a moment",
              Wa("note", X.reason),
              v,
            ));
          return;
        case "nothing_to_publish":
          if (((Rr = !1), (In = ii(In, z)), F.kind === "unchanged")) {
            if (((qe = !0), (Xt = !0), v !== "create")) Pe = !0;
          }
          break;
        case "aborted":
          if (z !== be) await Ee(z);
          return;
      }
    } else if (F.kind === "sent" || F.kind === "unchanged") {
      if (((In = ii(In, z)), (qe = !0), (Xt = !0), v !== "create")) Pe = !0;
    }
    if (F.kind === "sent" || F.kind === "unchanged") {
      let X = Vt;
      if (
        ((Vt = z.start.kind === "folder" ? F.snapshot.stats.paths : null),
        F.kind === "unchanged" && (!We || Vt !== X))
      )
        Ie(Rf(Vt), "debug");
    }
    if (F.kind === "sent" || ot) Il(F.kind === "sent");
    let Me = _t === null ? 0 : ef(be, Jt, Rt - (wr ? 1 : 0));
    if (Me === 0 && Pt > 0) ((Mn += 1), (Pt = 0));
    if (F.kind === "sent") {
      let X = F.record.sent[0]?.worktreeCommit ?? "";
      (Jt.delete(X), Jt.set(X, Rt));
      for (let ke of [...Jt.keys()].slice(0, Math.max(0, Jt.size - MAX_SENT_UPLOADS)))
        Jt.delete(ke);
      if (Me === 0) Ie(xa, "debug");
      else
        ((Pt = Me),
          Ie(Ia, "debug"),
          logEvent("tengu_dir_sync_git_uploads_not_taken", { overdue: Me }),
          Fe(
            `not-taken:${Mn}`,
            `Your ${Me === 1 ? "earlier synced change has" : `${Me} earlier synced changes have`} not been picked up by the cloud session although its turns since should have taken ${Me === 1 ? "it" : "them"} \u2014 uploaded and not lost, and its side of sync retries at each turn; if this keeps up, that side may be having trouble`,
            "warning",
          ));
    }
    if (z !== be) await Ee(z);
    if (Xt) Wr();
  }
  function Mi(c, b, T = "send") {
    let v = T === "create" || (w === "send" && !Pe);
    if (T === "watch") return;
    if (T === "capture") {
      if (!b.transient) pn += 1;
      else if (!v) dn += 1;
      return;
    }
    let ie = v || T === "settle" ? null : c;
    if (!b.transient) {
      if (((pn += 1), pn === Zo))
        Ie(
          Ya.has(T)
            ? `Your changes still cannot be prepared for upload (${b.cause}) after several tries; sync keeps trying at each sync point \u2014 fix that, or start a new cloud session`
            : `Your changes still cannot be prepared for upload (${b.cause}) after several tries; sync keeps trying while your message waits \u2014 fix that, or press Esc and start a new cloud session`,
          "warning",
        );
      else if (ie !== null) Ie(ie, "info");
      return;
    }
    if (v) return;
    if (((dn += 1), dn < Zo)) {
      if (ie !== null) Ie(ie, "info");
    } else if (!un)
      ((un = !0),
        logEvent("tengu_dir_sync_git_unreachable", { undelivered: dn }),
        Ie(
          Ya.has(T)
            ? "File sync cannot reach the cloud session from here just now (several uploads in a row did not go through); it keeps trying at each sync point \u2014 nothing is lost, and sync has not stopped"
            : "File sync cannot reach the cloud session from here just now (several uploads in a row did not go through); your message waits while sync tries a few more times \u2014 nothing is lost (Esc cancels the message; in the desktop app, Stop)",
          "warning",
        ));
  }
  function Il(c) {
    if (un)
      ((un = !1),
        logEvent("tengu_dir_sync_git_reachable_again", { undelivered: dn }),
        Ie(
          c
            ? "File sync reached the cloud session again; your changes are going up as before"
            : "File sync reached the cloud session again",
          "info",
        ));
    if (((dn = 0), c)) pn = 0;
  }
  async function Gi(c, b) {
    if (Be()) return { kind: "not_running" };
    if (c <= 0) return { kind: "ready", generation: 0 };
    let T = { kind: "failed", reason: "not_seen" },
      v = [0, ...yf];
    for (let L = 0; L < v.length; L += 1) {
      let ie = v[L] ?? 0;
      if (ie > 0) await sleep(ie, b);
      if (b?.aborted === !0) return { kind: "failed", reason: "aborted" };
      if (Be()) return { kind: "not_running" };
      let be = null;
      await Ar("pull", async (F) => {
        be = await to(b === void 0 ? F : AbortSignal.any([F, b]), "catch_up");
      });
      let Se = Sr;
      if (
        be !== null &&
        Se !== null &&
        Se.generation >= c &&
        Er?.worktreeCommit === Se.worktreeCommit
      )
        return { kind: "ready", generation: Se.generation };
      let H = Ll(be, Se?.generation ?? null, c);
      if (H.kind === "settled") return H.outcome;
      if (
        H.outcome.kind === "deferred" &&
        H.outcome.reason === "still_arriving" &&
        (Nl(be) ?? !1)
      )
        L = 0;
      T = H.outcome;
    }
    return T;
  }
  function Nl(c) {
    return c === null ? null : (c.counts?.installed ?? 0) > 0;
  }
  function Ll(c, b, T) {
    if (c === null)
      return {
        kind: "settled",
        outcome: Be()
          ? { kind: "not_running" }
          : { kind: "failed", reason: "crashed" },
      };
    let v = b === null || b < T;
    switch (c.outcome) {
      case "not_running":
        return { kind: "settled", outcome: { kind: "not_running" } };
      case "lane_lost":
      case "journal_unreadable":
        return {
          kind: "settled",
          outcome: { kind: "failed", reason: c.outcome },
        };
      case "aborted":
        return {
          kind: "settled",
          outcome: { kind: "failed", reason: "aborted" },
        };
      case "refused":
      case "refused_object_skipped":
        return v || vr === null
          ? {
              kind: "retry",
              outcome: { kind: "failed", reason: v ? "not_seen" : "refused" },
            }
          : { kind: "settled", outcome: { kind: "failed", reason: "refused" } };
      case "held_for_command":
        return v
          ? { kind: "retry", outcome: { kind: "failed", reason: "not_seen" } }
          : {
              kind: "settled",
              outcome: {
                kind: "deferred",
                reason: "serving_another_command",
                generation: b ?? 0,
              },
            };
      case "journal_failed":
        return {
          kind: "retry",
          outcome: { kind: "failed", reason: "journal_failed" },
        };
      case "object_pending":
      case "object_failed":
        return {
          kind: "retry",
          outcome: { kind: "failed", reason: "object_failed" },
        };
      case "no_journal":
      case "yielded":
        return {
          kind: "retry",
          outcome: { kind: "failed", reason: "not_seen" },
        };
      case "upload_only":
      case "deferred_branch_changed":
      case "deferred_branch_changed_late":
      case "capped_until_upload":
        return v
          ? { kind: "retry", outcome: { kind: "failed", reason: "not_seen" } }
          : {
              kind: "settled",
              outcome: {
                kind: "deferred",
                reason:
                  c.outcome === "upload_only"
                    ? "upload_only"
                    : c.outcome === "capped_until_upload"
                      ? "capped_until_upload"
                      : "branch_changed",
                generation: b ?? 0,
              },
            };
      case "peer_unshipped":
        return v
          ? { kind: "retry", outcome: { kind: "failed", reason: "not_seen" } }
          : {
              kind: "settled",
              outcome: {
                kind: "deferred",
                reason: "round_skipped",
                generation: b ?? 0,
              },
            };
      case "nothing_new":
      case "applied":
        if (v)
          return {
            kind: "retry",
            outcome: { kind: "failed", reason: "not_seen" },
          };
        return (c.counts?.roundSkipped ?? null) !== null
          ? {
              kind: "settled",
              outcome: {
                kind: "deferred",
                reason: "round_skipped",
                generation: b ?? 0,
              },
            }
          : {
              kind: "retry",
              outcome: {
                kind: "deferred",
                reason: "still_arriving",
                generation: b ?? 0,
              },
            };
    }
  }
  function Ar(c, b) {
    let T = Je.then(async () => {
      if (It()) return;
      ((Lt = ft), (Ye += 1));
      try {
        if ((await b(Mt.signal)) !== si) q[c] = 0;
      } catch (v) {
        Te(v, c);
      }
    });
    return ((Je = T), T);
  }
  function Fn(c = "send") {
    if (Ft === null || qa[c] > qa[ne]) ne = c;
    if (c === "capture") ae = !0;
    if (Ft === null) {
      let b = Ki(Q(), c),
        T = { verdict: null };
      ((St = T),
        (Ft = Ar("push", async (L) => {
          Ft = null;
          let ie = ne,
            be = ae;
          ((ne = "capture"),
            (ae = !1),
            (In = null),
            (b = await Cl(L, ie, be)),
            (T.verdict = In));
        }).then(() => b)));
    }
    return Ft;
  }
  function Fl(c) {
    let b = Fn(c),
      T = St;
    return b.then(() => T.verdict);
  }
  function Hn(c) {
    return (
      (Tt ??= Ar("pull", async (b) => {
        if (((Tt = null), Ft !== null && Ga.has(c))) {
          if (c === "continue") lt += 1;
          let T = Q();
          return (
            ri(c, { covered: !1, outcome: "yielded", counts: null }, T, Q),
            si
          );
        }
        if (c === "result" && vt > 0) await sleep(vt, b);
        if (!Ga.has(c)) lt = fo;
        await to(b, c);
      })),
      Tt
    );
  }
  async function to(c, b) {
    let T = Q(),
      v = Qt,
      L = await Rl(c, b);
    if (((q.pull = 0), L.covered && Qt === v)) ((Qt = null), (Zt += 1));
    if (Uc.has(L.outcome) && !(L.outcome === "refused" && vr === null)) ht = _t;
    if (
      Sr !== null &&
      (L.outcome === "nothing_new" ||
        (L.outcome === "applied" &&
          bo === null &&
          (L.counts?.roundSkipped ?? null) === null))
    )
      Er = Sr;
    return (ri(b, L, T, Q), L);
  }
  function Hi(c) {
    let b = { read: _t, reads: jt, settled: ht };
    Hn("result")
      .then(() => {
        if (c !== Zt || nr !== !0) return;
        if (Qt !== null) {
          if (br === 0) return;
          return ((br -= 1), $l(c, b));
        }
        return Dl(c, b);
      })
      .catch(Te);
  }
  async function Dl(c, b) {
    let T = () => ht !== b.settled && ht !== b.read;
    for (let v = 1; v <= ti; v += 1) {
      if (c !== Zt || Be() || T()) return;
      if ((await sleep(Ae * v, void 0, { unref: !0 }), c !== Zt || Be() || T()))
        return;
      await Hn("arrival");
    }
  }
  async function $l(c, b) {
    let T = Q() + je,
      v = Qt;
    for (let L = 1; L <= ti; L += 1) {
      if (c !== Zt || Qt === null || It()) return;
      let ie = Math.min(Ae * L, T - Q());
      if (ie <= 0) break;
      if ((await sleep(ie, void 0, { unref: !0 }), c !== Zt || It())) return;
      await Hn("poll");
    }
    if (
      c === Zt &&
      Qt !== null &&
      Qt === v &&
      sn &&
      jt > b.reads &&
      _t === b.read &&
      !It()
    )
      Fe(
        `uncovered:${v}`,
        "The cloud session has not reported back on your last message yet (what it changed, if anything, has not arrived); it is asked again at the next result",
        "info",
      );
  }
  function Wi(c) {
    if (ze.includes(c)) return;
    (ze.push(c), ze.splice(0, Math.max(0, ze.length - MAX_USER_EVENT_UUIDS)));
  }
  function Bl(c, b) {
    if (c) return { next: "landed" };
    let T = E[b - 1];
    return Be() || _n || T === void 0
      ? { next: "give_up" }
      : { next: "retry", delayMs: T };
  }
  let Ui = (c) => E[c - 1] === void 0;
  function ji(c) {
    ((xt = { cause: Ce, nextTryAtMs: Q() + c }),
      Fe(
        `first-upload-retry:${Ce ?? ""}`,
        `Could not finish uploading ${C}${Ce === null ? "" : ` (${Ce})`}; trying again shortly`,
        "info",
      ));
  }
  async function Ml(c) {
    if (c !== "unmerged_index") return !1;
    return (await ee(c)) === !0;
  }
  async function zi(c, b) {
    do
      if (
        !(await sleep(N, b).then(
          () => !0,
          () => !1,
        )) ||
        b.aborted
      )
        return;
    while (await Ml(c).catch(() => !1));
  }
  function Gl(c) {
    let b = `Still uploading ${C} to the cloud session (${Math.round(c / 1000)} s)`;
    if (En !== null)
      return `${b} \u2014 waiting while ${En}; it goes on as soon as that clears\u2026`;
    if (xt === null) return `${b}\u2026`;
    let T = Math.max(0, Math.round((xt.nextTryAtMs - Q()) / 1000));
    return `${b} \u2014 last try failed${xt.cause === null ? "" : ` (${xt.cause})`}; next try in ${T} s\u2026`;
  }
  function Ki(c, b = "send") {
    return {
      trigger: b,
      landed: !1,
      outcome: "not_run",
      reason: null,
      kept: !1,
      generation: (xn ?? ho(me)).generation,
      files: 0,
      tookSnapshot: !1,
      startedAtMs: c,
      endedAtMs: c,
      heldBy: null,
    };
  }
  let et = createDirSyncStreamer({
    notRunning: () =>
      xe?.reason ?? (ve ? "shut_down" : dt ? "other_writer_here" : null),
    send: (c) => Fn(c),
    pull: () => {
      Hn("peer_changed").catch(Te);
    },
    facts: () => {
      let c = xn ?? ho(me);
      return {
        gen: c.generation,
        tree: c.tree,
        taken: me?.appliedGeneration ?? 0,
        shipping: U?.generation ?? null,
        snapshotting: gr,
        takes: nr === !0 && at() && me?.uploadOnly !== !0,
      };
    },
    ...(tt !== void 0 && { inScope: tt }),
    turnOpen: () => $n > 0,
    instance: oi(),
    nowMs: Q,
  });
  if (w === "send") {
    let c = (async () => {
      for (let b = 1; ;) {
        ((xt = null), (Cn = Ui(b)));
        let T = await Fn("create");
        if (dt) return;
        if (T.heldBy !== null && !qe && !Pe && !Be()) {
          En = Ce;
          let Se = new AbortController(),
            H = er(() => Se.abort());
          if (
            (await zi(
              T.heldBy,
              AbortSignal.any([Mt.signal, $t.signal, Se.signal]),
            ),
            (En = null),
            H(),
            qe || Pe || Be())
          )
            return;
          continue;
        }
        let v = Bl(qe || Pe, b);
        if (v.next !== "retry") {
          if (v.next === "give_up" && !_n && !Be()) {
            let Se = vi();
            if (Se !== null) {
              Ti(b, Se, Zr);
              return;
            }
            (logEvent("tengu_dir_sync_git_first_upload_gave_up", { tries: b }),
              Zr(),
              Gt("seed_incomplete", ja(C, b, Ce, On())));
          }
          return;
        }
        let { delayMs: L } = v;
        ji(L);
        let ie = new AbortController(),
          be = er(() => ie.abort());
        if (
          (await sleep(L, AbortSignal.any([Mt.signal, $t.signal, ie.signal])).catch(
            () => {},
          ),
          be(),
          qe || Pe || Be())
        )
          return;
        b += 1;
      }
    })().catch(Te);
    ((De = c),
      c.finally(() => {
        if (De === c) De = null;
      }));
  }
  if (At !== void 0 && !At.published) Ei();
  return {
    state() {
      if (xe !== null)
        return { state: "stopped", reason: xe.reason, message: xe.line };
      return ve
        ? { state: "stopped", reason: "shut_down" }
        : {
            state: "armed",
            engine: "git",
            direction: getSyncDirection(nr, at()),
            firstUpload: w !== "send" ? null : qe || Pe ? "landed" : "pending",
            syncedFiles: Vt,
            writerElsewhere: dt,
          };
    },
    onOffline(c) {
      return (
        (I = c),
        Pi(),
        () => {
          if (I === c) I = null;
        }
      );
    },
    messageSent(c) {
      try {
        if (Be()) return;
        if (Si.has(c)) return;
        if ((Si.add(c), Wi(c), !jr)) $n += 1;
        ((Qt = c), (br = MAX_PEER_REPUBLISH_ATTEMPTS), en.delete("peer-journal-failed"));
        let b = (Zt += 1);
        if (Ur) Hi(b);
        ((Ur = !1), (jr = !1));
      } catch (b) {
        Te(b);
      }
    },
    async seedGate({ messageUuid: c, released: b, withdrawn: T }) {
      if (nt !== null && Q() - nt < TYPED_AHEAD_GRACE_MS) return { go: !1, reason: ai(On()) };
      if (ve) return xe === null ? { go: !1, reason: $r } : void 0;
      if (At !== void 0 && !Yt) Eo();
      if (Xn === "owed" && I === null) Fe("offline-end-owed", li, "info");
      let v = Q(),
        L = De !== null || (w === "send" && !qe && !Pe),
        ie = L ? C : "your changes",
        be = !1,
        Se = !1,
        H = !1,
        F = null,
        ue = async (Me) => {
          for (;;) {
            let X = new AbortController(),
              ke = await Promise.race([
                Me.then(
                  () => "settled",
                  () => "settled",
                ),
                b.then(() => "released"),
                T.then(() => "withdrawn"),
                sleep(be || !L ? _ : 0, X.signal).then(() => "tick"),
              ]);
            if ((X.abort(), ke !== "tick" || ve))
              return ke === "released" || ke === "withdrawn" ? ke : "settled";
            let Re = Q() - v;
            if (((H ||= xt !== null), !be))
              ((be = !0),
                Ie(
                  F !== null
                    ? `Your message waits while ${F} (Esc cancels the message; in the desktop app, Stop)\u2026`
                    : L
                      ? _f(C)
                      : "Syncing your changes to the cloud session before this message goes (Esc cancels the message; in the desktop app, Stop)\u2026",
                  "progress",
                ));
            else if (!Se && Re > k)
              ((Se = !0),
                logEvent("tengu_dir_sync_git_first_send_wait", {
                  waited_ms: Re,
                  wedged: !0,
                }),
                Ie(
                  F !== null
                    ? `Still waiting after ${Math.round(Re / 60000)} min while ${F} \u2014 your message goes with your files as soon as that clears (Esc cancels the message; in the desktop app, Stop)`
                    : `Still ${L ? "uploading" : "syncing"} ${ie} after ${Math.round(Re / 60000)} min${H ? " (still being retried)" : ""} \u2014 your message keeps waiting for them (Esc cancels the message; in the desktop app, Stop)`,
                  "warning",
                ));
            else
              Ie(
                F !== null
                  ? `Still waiting while ${F} (${Math.round(Re / 1000)} s)\u2026`
                  : L
                    ? Gl(Re)
                    : `Still syncing ${ie} to the cloud session (${Math.round(Re / 1000)} s)\u2026`,
                "progress",
              );
          }
        },
        z = () => (
          Qr("the message that carried it was withdrawn"),
          logEvent("tengu_dir_sync_git_first_send_wait", {
            waited_ms: Q() - v,
            withdrawn: !0,
          }),
          { go: !1, reason: vf }
        ),
        ot = () => {
          Qr("the user stopped waiting for it");
          let Me = pt !== null;
          return (
            Ie(
              he !== null
                ? "That message was not sent; file sync is going off for this session, and your next message goes without it."
                : Me
                  ? "That message was not sent; file sync has ended for this session, and your next message goes once the cloud session has been told so."
                  : F !== null
                    ? `That message was not sent (${F}); your next message waits for that too.`
                    : L
                      ? kf(C)
                      : "That message was not sent; your changes are still syncing, and your next message waits for them too.",
              "info",
            ),
            logEvent("tengu_dir_sync_git_first_send_wait", {
              waited_ms: Q() - v,
              released: !0,
            }),
            {
              go: !1,
              reason:
                he !== null
                  ? "you stopped waiting while file sync was going offline; a message sent now goes without it once that is confirmed"
                  : Me
                    ? "you stopped waiting while the cloud session was being told that file sync ended; a message sent now waits for that again"
                    : L
                      ? Sf(C)
                      : "you stopped waiting for your changes to sync; they are still syncing, and a message sent now waits for them again",
            }
          );
        },
        We = async () => {
          if (xe === null) return { go: !1, reason: $r };
          if (pt !== null && Pn) {
            Bt = zr(pt);
            return;
          }
          if (pt?.reason === "offline") {
            let X = await Promise.race([
              So().then(
                () => "tried",
                () => "tried",
              ),
              sleep(Ff, Mt.signal).then(
                () => "waited",
                () => "waited",
              ),
              b.then(() => "released"),
              T.then(() => "withdrawn"),
            ]);
            if (X === "released" || X === "withdrawn")
              return X === "released" ? ot() : z();
            logEvent("tengu_dir_sync_git_first_send_wait", {
              waited_ms: Q() - v,
              ended: !0,
              offline: !0,
            });
            return;
          }
          let Me = !1;
          for (let X = 1; ; X += 1) {
            let ke = await Promise.race([
              (Bt ?? Promise.resolve(!0)).then(
                (de) => (de ? "published" : "unpublished"),
                () => "unpublished",
              ),
              b.then(() => "released"),
              T.then(() => "withdrawn"),
            ]);
            if (ke === "released" || ke === "withdrawn")
              return ke === "released" ? ot() : z();
            if (ke === "published" || pt === null || ve || dt) {
              logEvent("tengu_dir_sync_git_first_send_wait", {
                waited_ms: Q() - v,
                ended: pt !== null,
              });
              return;
            }
            (Ie(
              Me
                ? `Still telling the cloud session that file sync ended${Ce === null ? "" : ` (${Ce})`}; this message goes once it knows (Esc cancels the message; in the desktop app, Stop)\u2026`
                : "Telling the cloud session that file sync ended before this message goes (Esc cancels the message; in the desktop app, Stop)\u2026",
              "progress",
            ),
              (Me = !0));
            let Re = E[X - 1];
            if (Re === void 0) {
              ((Pn = !0),
                logEvent("tengu_dir_sync_git_first_send_wait", {
                  waited_ms: Q() - v,
                  ended: !0,
                  told: !1,
                }));
              return;
            }
            let oe = await Promise.race([
              sleep(Re, Mt.signal).then(() => "waited"),
              b.then(() => "released"),
              T.then(() => "withdrawn"),
            ]);
            if (oe !== "waited") return oe === "released" ? ot() : z();
            Bt = zr(pt);
          }
        },
        tn = async () => {
          Ie(Nf, "progress");
          let Me = await Promise.race([
            (he ?? Promise.resolve()).then(() => "acknowledged"),
            b.then(() => "released"),
            T.then(() => "withdrawn"),
          ]);
          if (Me !== "acknowledged") return Me === "released" ? ot() : z();
          if (xe !== null) return We();
          return { go: !1, reason: $r };
        };
      m += 1;
      try {
        if (Be()) return await We();
        if (he !== null) return await tn();
        let Me = De;
        if (Me !== null) {
          let ke = await ue(Me);
          if (ke !== "settled") return ke === "released" ? ot() : z();
          if (xe?.reason === "seed_incomplete" && !qe && !Pe)
            return (
              logEvent("tengu_dir_sync_git_first_send_wait", {
                waited_ms: Q() - v,
                landed: !1,
              }),
              (nt ??= Q()),
              { go: !1, reason: ai(On()) }
            );
          if (Be()) return await We();
          if (he !== null) return await tn();
        }
        let X = (c === void 0 ? void 0 : Bn.get(c)) ?? Fn();
        if (c !== void 0) Bn.delete(c);
        for (let ke = 1; ;) {
          ((_n = !1), (xt = null), (Cn = L && Ui(ke)));
          let Re = await ue(X);
          if (Re !== "settled") return Re === "released" ? ot() : z();
          let oe = await X.catch(() => Ki(Q()));
          if (Be()) return await We();
          if (oe.landed || dt) break;
          if (he !== null) return await tn();
          if (oe.heldBy !== null) {
            F = Ce ?? "this checkout is in a state you clear";
            let Wn = new AbortController(),
              gn = await ue(
                zi(
                  oe.heldBy,
                  AbortSignal.any([Mt.signal, $t.signal, Wn.signal]),
                ),
              ).finally(() => Wn.abort());
            if (gn !== "settled") return (Fi(), gn === "released" ? ot() : z());
            if (((F = null), ve)) return { go: !1, reason: $r };
            X = Fn();
            continue;
          }
          let de = E[ke - 1];
          if (de === void 0) {
            let Wn = vi();
            if (Wn !== null)
              return (
                Ti(ke, Wn, () =>
                  L && !qe
                    ? Zr()
                    : Qr(
                        "its upload was given up (file sync went offline on this machine)",
                      ),
                ),
                await tn()
              );
            let gn = L && !qe;
            if (gn) logEvent("tengu_dir_sync_git_first_upload_gave_up", { tries: ke });
            else logEvent("tengu_dir_sync_git_send_gave_up", { tries: ke, first: L });
            if (gn) Zr();
            else Qr("its upload was given up");
            if (
              (Gt(
                gn ? "seed_incomplete" : "gave_up",
                gn ? ja(C, ke, Ce, On()) : Ef(ke, Ce, Hr),
              ),
              logEvent("tengu_dir_sync_git_first_send_wait", {
                waited_ms: Q() - v,
                landed: !1,
              }),
              gn)
            )
              nt ??= Q();
            return { go: !1, reason: gn ? ai(On()) : Pf };
          }
          if (((H = !0), L)) ji(de);
          else
            Ie(
              `Could not finish syncing ${ie} just now${Ce === null ? "" : ` (${Ce})`}; trying again in ${Math.max(1, Math.round(de / 1000))} s \u2014 try ${ke + 1} of ${E.length + 1} (Esc cancels the message; in the desktop app, Stop)\u2026`,
              "progress",
            );
          let it = new AbortController(),
            Nt = er(() => it.abort()),
            Cr = await ue(
              sleep(de, AbortSignal.any([Mt.signal, $t.signal, it.signal])),
            ).finally(Nt);
          if (Cr !== "settled") return Cr === "released" ? ot() : z();
          if (ve) return { go: !1, reason: $r };
          if (he !== null) return await tn();
          ((X = Fn()), (ke += 1));
        }
        logEvent("tengu_dir_sync_git_first_send_wait", {
          waited_ms: Q() - v,
          landed: !0,
        });
        return;
      } catch (Me) {
        return (Te(Me), { go: !1, reason: Tf });
      } finally {
        m -= 1;
      }
    },
    async beforeSend(c) {
      try {
        if (c !== void 0) Wi(c);
        if (Be()) return;
        Ur = !1;
        let b = Fn();
        if (c !== void 0) {
          Bn.set(c, b);
          for (let T of [...Bn.keys()].slice(0, -16)) Bn.delete(T);
        }
        (await b.catch(Te), (jr = !1));
      } catch (b) {
        Te(b);
      }
    },
    afterResult() {
      try {
        if (Be()) return;
        if (((wo ??= Q()), (Rt += 1), ($n = 0), et.peerAlive(), et.held()))
          (logForDebugging(
            "dir-sync: a turn ended with installs still held for a command on this machine; dropping the hold",
            { level: "warn" },
          ),
            et.dropHolds());
        ((wr = !0), (tr = _t), (Ur = !0), (jr = !0), Hi((Zt += 1)));
      } catch (c) {
        Te(c);
      }
    },
    laneChanged(c) {
      try {
        if (Be() || (c.path !== null && c.path !== SEED_WORKER_JOURNAL_PATH)) return;
        (et.peerAlive(), Hn("peer_changed").catch(Te));
      } catch (b) {
        Te(b);
      }
    },
    afterConnect() {
      try {
        if (Be()) return;
        (yr(), Hn("connect").catch(Te));
      } catch (c) {
        Te(c);
      }
    },
    afterDisconnect() {
      ((Zt += 1), ($n = 0));
    },
    async catchUp(c, b) {
      try {
        return await Gi(c, b);
      } catch (T) {
        return (Te(T, "pull"), { kind: "failed", reason: "crashed" });
      }
    },
    async capturePoint(c) {
      try {
        if (Be()) return { kind: "not_running" };
        let b = me ?? (await vn("push")),
          T = () => c?.aborted === !0;
        if (b === null || T()) return { kind: "not_running" };
        let v = Q(),
          L,
          ie = Ar("push", async (We) => {
            if (!T()) L = await ka({ record: me ?? b, deps: Nn(We) });
            return si;
          }),
          be = await new Promise((We) => {
            if ((ie.then(() => We(!1)), c !== void 0))
              if (c.aborted) We(!0);
              else c.addEventListener("abort", () => We(!0), { once: !0 });
          });
        if (Be()) return { kind: "not_running" };
        if (be) {
          let We = getLatestSentUpload(me ?? b);
          return {
            kind: "failed",
            reason: "interrupted",
            generation: We?.generation ?? 0,
            taken: Er?.generation ?? 0,
            tree: We?.worktreeCommit ?? null,
          };
        }
        let Se = me ?? b,
          H = getLatestSentUpload(Se),
          F = {
            generation: H?.generation ?? 0,
            taken: Er?.generation ?? 0,
            tree: H?.worktreeCommit ?? null,
          },
          ue = L,
          z,
          ot = "none";
        if (ue === null || ue === void 0)
          z = { kind: "failed", reason: "snapshot_refused", ...F };
        else if (!ue.unchanged)
          z = { kind: "shipping", shipping: getNextGeneration(Se), ...F };
        else if (H !== null && H.generation !== _o)
          ((ot = "note_owed"),
            (z = { kind: "shipping", shipping: H.generation, ...F }));
        else if (((ot = "sent"), (z = { kind: "unchanged", ...F }), Rr))
          Fn("capture").catch(Te);
        if (z.kind === "shipping") Fn("capture").catch(Te);
        return (
          logEvent("tengu_dir_sync_git_capture_point", {
            outcome: fromEnum(z.kind),
            probe: S(ue ? "captured" : "refused"),
            matched: S(ot),
            installed_tree_held: Pr !== null,
            duration_ms: Q() - v,
          }),
          z
        );
      } catch (b) {
        Te(b, "push");
        let T = me === null ? null : getLatestSentUpload(me);
        return {
          kind: "failed",
          reason: "crashed",
          generation: T?.generation ?? 0,
          taken: Er?.generation ?? 0,
          tree: T?.worktreeCommit ?? null,
        };
      }
    },
    async syncPoint(c, b) {
      try {
        let T = await Gi(c, b);
        if (T.kind === "failed" || T.kind === "not_running")
          return { catchUp: T, push: { kind: "not_attempted" } };
        let v = await Fl("sync_point");
        return {
          catchUp: T,
          push:
            b?.aborted === !0
              ? { kind: "failed", reason: "aborted" }
              : Xc(v, Be()),
        };
      } catch (T) {
        return (
          Te(T, "push"),
          {
            catchUp: { kind: "failed", reason: "crashed" },
            push: { kind: "failed", reason: "unexpected" },
          }
        );
      }
    },
    async drain(c) {
      let b = Q() + c,
        T,
        v;
      do
        ((v = Je),
          (T = await withDeadline(
            Promise.all([v, De]).then(() => !0),
            Math.max(0, b - Q()),
          )));
      while (T === !0 && v !== Je);
      return T === !0;
    },
    async shutdown(c = DEFAULT_SHUTDOWN_TIMEOUT_MS) {
      if (ve) return;
      if (((ve = !0), Vn !== null)) (clearTimeout(Vn), (Vn = null));
      if (((Zt += 1), $t.abort(), qt.abort(), (Qt = null), Ue !== null))
        (clearTimeout(Ue), (Ue = null));
      et.halt();
      try {
        Hn("exit");
        let b = Q() + c,
          T,
          v;
        do
          ((v = Je),
            (T = await withDeadline(
              v.then(() => !0),
              Math.max(0, b - Q()),
            )));
        while (T === !0 && v !== Je);
        if (T === void 0) Mt.abort();
      } catch (b) {
        (Mt.abort(), Te(b));
      }
      (await wl(c), await Ln(), (Po = !0), await Tr());
    },
    streaming: et.streaming,
    holdInstalls: (c) => et.streaming.holdInstalls(c),
    releaseInstalls: (c) => et.streaming.releaseInstalls(c),
  };
}
import { createHash as Hf } from "crypto";
import { constants as Ja } from "fs";
import {
  link as Wf,
  lstat as zn,
  mkdir as fi,
  realpath as po,
  rename as Qa,
  unlink as Uf,
} from "fs/promises";
import {
  basename as hi,
  dirname as mr,
  isAbsolute as mi,
  join as fn,
  relative as Zn,
  resolve as ci,
  sep as Kn,
} from "path";
var Br = 448,
  Mr = 100;
async function jf(e, t) {
  for (let r = 0; r < Mr; r++) {
    let o = fn(e, r === 0 ? t : t + "." + String(r)),
      s = await zn(o).catch((a) => (A(a) === "ENOENT" ? null : void 0));
    if (s === void 0) return null;
    if (s === null) return (await fi(o, { mode: Br }), o);
    if (s.isDirectory()) return o;
  }
  return null;
}
function Za(e, t = !1) {
  if (e.length === 0 || mi(e) || e.includes("\\")) return !1;
  let r = e.split("/");
  return (
    r.every((o, s) => {
      let a = segmentScopeSkip(o, s < r.length - 1);
      return (
        o.length > 0 &&
        o !== "." &&
        o !== ".." &&
        (a === null || (t && a === "dependency_dir"))
      );
    }) &&
    !isRefusedFilePath(e, t) &&
    !isSensitivePathAnySpelling(e)
  );
}
async function el(e, t) {
  let r = t.split("/").slice(0, -1),
    o = e;
  for (let s of r) {
    o = fn(o, s);
    let a = await zn(o).catch((d) => (A(d) === "ENOENT" ? null : void 0));
    if (a === null) return !1;
    if (
      a === void 0 ||
      a.isSymbolicLink() ||
      !a.isDirectory() ||
      (await isGitRepositoryRoot(o))
    )
      return !0;
  }
  return !1;
}
async function zf(e, t, r = null) {
  let o = await po(t).catch(() => null);
  if (o === null) return !0;
  let s = Zn(e, o),
    a = s.split(Kn).join("/");
  return (
    s !== "" &&
    !s.startsWith(".." + Kn) &&
    s !== ".." &&
    !mi(s) &&
    Za(a, r !== null && a === r)
  );
}
async function Kf(e, t, r) {
  if (await el(e, r)) return !1;
  let o = mr(r),
    s = await po(fn(e, o)).catch(() => null);
  return s !== null && s === (o === "." ? t : fn(t, o));
}
async function tl(e, t) {
  let r = e;
  for (let o of t.split("/")) {
    if (r === null) return null;
    if (o.length > 0 && o !== ".") r = await jf(r, o);
  }
  return r;
}
function pi(e, t) {
  let r = Zn(t, e);
  if (r === "" || !mo(r)) return !1;
  let o = Zn(e, t);
  if (mo(o)) return !0;
  return o.split(Kn).some((s) => segmentScopeSkip(s, !0) !== null);
}
function mo(e) {
  return e === ".." || e.startsWith(".." + Kn) || mi(e);
}
function jn(e, t) {
  let r = Zn(e, t);
  return r !== "" && !mo(r) ? r : null;
}
async function qf(e, t) {
  let r = e;
  for (let o of t.split(Kn)) {
    r = fn(r, o);
    let s = await zn(r).catch((a) => (A(a) === "ENOENT" ? null : void 0));
    if (s === null) return !0;
    if (s === void 0 || s.isSymbolicLink() || !s.isDirectory()) return !1;
  }
  return !0;
}
function Yf(e, t, r) {
  return e === null ? jn(t, r) === null : r === fn(t, e);
}
async function Xf(e) {
  for (let t = 0; t < Mr; t++) {
    let r = t === 0 ? e : e + "." + String(t);
    if (
      !(await zn(r).then(
        () => !0,
        (s) => A(s) !== "ENOENT",
      ))
    )
      return r;
  }
  return null;
}
async function nl({ root: e, trashDir: t, file: r, through: o }) {
  let s = { path: r.path, sha256: r.sha256, trackedHere: r.trackedHere === !0 },
    a = s.trackedHere;
  if (!Za(s.path, a)) return "refused";
  let d = ci(e),
    f = ci(t),
    p = await resolveRealPath(e);
  if (p === null) return "stayed";
  if (!pi(d, f)) return "refused";
  if ((await el(e, s.path)) || !(await zf(p, fn(e, s.path), a ? s.path : null)))
    return "stayed";
  return o.side === "laptop" ? Vf(o.anchor, e, p, d, f, s) : ih(e, p, d, f, r);
}
async function Vf(e, t, r, o, s, a) {
  return jn(o, s) !== null ? Jf(e, t, r, o, s, a) : th(e, t, r, o, s, a);
}
async function Jf(e, t, r, o, s, a) {
  if (e.rootOnly || e.backend === "by_name") return "unavailable";
  let d = jn(o, s);
  if (d === null) return "refused";
  if (e.realRoot !== r) return "stayed";
  if (!(await isDestinationAllowed(t, r, a.path, a.trackedHere))) return "refused";
  let f = d.split(Kn).join("/");
  try {
    if ((await e.mkdirp(f, Br), f === dr || f.startsWith(dr + "/")))
      await e
        .create(
          dr + "/.gitignore",
          Buffer.from(`*
`),
          384,
        )
        .catch(() => {});
    let p = await readFileWithDigests(t, r, a.path, e);
    if (p === null)
      return e.lstat(a.path).then(
        () => "stayed",
        (_) => (A(_) === "ENOENT" ? "moved" : "stayed"),
      );
    if (p.sha256 !== a.sha256) return "stayed";
    let y = await Qf(e, f, mr(a.path)),
      w = y === null ? null : await eh(e, y + "/" + hi(a.path));
    if (w === null) return "stayed";
    if (!(await e.lstat(a.path)).isFile()) return "stayed";
    await e.rename(a.path, w);
    let k = await readFileWithDigests(t, r, w, e);
    if (k !== null && k.sha256 === a.sha256) return "moved";
    if ((await e.lstat(w)).isDirectory())
      return (
        await e.rename(w, a.path).catch(() => {
          return;
        }),
        "stayed"
      );
    return (
      await e.link(w, a.path).then(
        () => e.unlink(w),
        () => {
          return;
        },
      ),
      "stayed"
    );
  } catch {
    return "stayed";
  }
}
async function Qf(e, t, r) {
  let o = t;
  for (let s of r.split("/")) {
    if (s.length === 0 || s === ".") continue;
    let a = await Zf(e, o, s);
    if (a === null) return null;
    o = a;
  }
  return o;
}
async function Zf(e, t, r) {
  for (let o = 0; o < Mr; o++) {
    let s = t + "/" + (o === 0 ? r : r + "." + String(o)),
      a = await e.lstat(s).catch((d) => (A(d) === "ENOENT" ? null : void 0));
    if (a === void 0) return null;
    if (a === null) return (await e.mkdirp(s, Br), s);
    if (a.isDirectory()) return s;
  }
  return null;
}
async function eh(e, t) {
  for (let r = 0; r < Mr; r++) {
    let o = r === 0 ? t : t + "." + String(r);
    if (
      !(await e.lstat(o).then(
        () => !0,
        (a) => A(a) !== "ENOENT",
      ))
    )
      return o;
  }
  return null;
}
async function th(e, t, r, o, s, a) {
  if (e.rootOnly || e.backend === "by_name") return "unavailable";
  if (jn(o, s) !== null) return "unreachable";
  if (e.realRoot !== r) return "stayed";
  if (!(await isDestinationAllowed(t, r, a.path, a.trackedHere))) return "refused";
  try {
    let d = await readFileWithDigests(t, r, a.path, e);
    if (d === null)
      return e.lstat(a.path).then(
        () => "stayed",
        (_) => (A(_) === "ENOENT" ? "moved" : "stayed"),
      );
    if (d.sha256 !== a.sha256) return "stayed";
    if (await nh(r, s)) return "unreachable";
    await fi(s, { recursive: !0, mode: Br });
    let f = await resolveRealPath(s);
    if (f === null) return "stayed";
    if (jn(r, f) !== null || !pi(r, f)) return "unreachable";
    let p = await tl(f, mr(a.path));
    if (p === null) return "stayed";
    await using y = await e.holdOutside(p);
    if (
      y === null ||
      (y.realPath !== f && jn(f, y.realPath) === null) ||
      y.realPath === r ||
      jn(r, y.realPath) !== null
    )
      return "stayed";
    let w = await oh(y.realPath, hi(a.path));
    if (w === null) return "stayed";
    if (!(await e.lstat(a.path)).isFile()) return "stayed";
    if ((await e.lstat("")).dev !== (await y.handle.stat({ bigint: !0 })).dev)
      return "unreachable";
    try {
      await e.moveOut(a.path, y, w);
    } catch (_) {
      let E = A(_);
      return E === "EXDEV" || E === "ENAMETOOLONG" || E === "EROFS"
        ? "unreachable"
        : "stayed";
    }
    let k = await rh(e, y, w, a.sha256);
    if (k === "judged") return "moved";
    if (k === "directory")
      return (
        await e.moveIn(y, w, a.path).catch(() => {
          return;
        }),
        "stayed"
      );
    return (
      await e.linkIn(y, w, a.path).then(
        () =>
          e.unlinkIn(y, w).catch(() => {
            return;
          }),
        () => {
          return;
        },
      ),
      "stayed"
    );
  } catch {
    return "stayed";
  }
}
async function nh(e, t) {
  let r = ci(t).split(Kn),
    o = r[0] === "" ? Kn : r[0];
  for (let s of r.slice(1)) {
    o = fn(o, s);
    let a = await po(o).catch((f) => (A(f) === "ENOENT" ? null : void 0));
    if (a === void 0) return !0;
    if (a === null) return !1;
    let d = Zn(e, a);
    if (d === "" || !mo(d)) return !0;
  }
  return !1;
}
async function rh(e, t, r, o) {
  let s = await e.statIn(t, r).catch(() => null);
  if (s === null) return "other";
  if (s.isDirectory()) return "directory";
  if (!s.isFile() || s.size > BigInt(MAX_WORKING_FILE_BYTES)) return "other";
  let a = await e.openIn(t, r, Ja.O_RDONLY | Ja.O_NONBLOCK).catch(() => null);
  if (a === null) return "other";
  try {
    let d = await a.stat({ bigint: !0 });
    if (!d.isFile() || d.ino !== s.ino || d.dev !== s.dev) return "other";
    let f = Hf("sha256");
    for await (let p of a.createReadStream({ autoClose: !1 })) f.update(p);
    return f.digest("hex") === o ? "judged" : "other";
  } catch {
    return "other";
  } finally {
    await a.close().catch(() => {});
  }
}
async function oh(e, t) {
  for (let r = 0; r < Mr; r++) {
    let o = r === 0 ? t : t + "." + String(r),
      s = await zn(fn(e, o)).then(
        () => !0,
        (a) => (A(a) === "ENOENT" ? !1 : null),
      );
    if (s === null) return null;
    if (!s) return o;
  }
  return null;
}
async function ih(e, t, r, o, s) {
  let a = fn(e, s.path),
    d = jn(r, o);
  if (d !== null && !(await qf(r, d))) return "stayed";
  let f = await fi(o, { recursive: !0, mode: Br }).then(
    () => resolveRealPath(o),
    () => null,
  );
  if (f === null || !pi(t, f) || !Yf(d, t, f)) return "stayed";
  try {
    let p = await readFileWithDigests(e, t, s.path);
    if (p === null)
      return zn(a).then(
        () => "stayed",
        (_) => (A(_) === "ENOENT" ? "moved" : "stayed"),
      );
    if (p.sha256 !== s.sha256) return "stayed";
    let y = await tl(o, mr(s.path)),
      w = y === null ? null : await Xf(fn(y, hi(s.path)));
    if (
      w === null ||
      (await po(mr(w)).catch(() => null)) !== fn(f, Zn(o, mr(w)))
    )
      return "stayed";
    if (!(await zn(a)).isFile()) return "stayed";
    await Qa(a, w);
    let k = await readFileWithDigests(o, f, Zn(o, w));
    if (k !== null && k.sha256 === s.sha256) return "moved";
    if (!(await Kf(e, t, s.path))) return "stayed";
    if ((await zn(w)).isDirectory())
      return (
        await Qa(w, a).catch(() => {
          return;
        }),
        "stayed"
      );
    return (
      await Wf(w, a).then(
        () => Uf(w),
        () => {
          return;
        },
      ),
      "stayed"
    );
  } catch {
    return "stayed";
  }
}
var mh = "claude-cloud-trash",
  go = (e, t, r) => readGitLayout(e, t, { bound: !0, ...(r !== void 0 && { probes: r }) });
function ph(e, t = go) {
  let r = null;
  return async (o) => {
    if (r !== null) return r;
    let s = await t(e, o);
    if (s.kind !== "read")
      return {
        unreadable:
          s.kind === "failed"
            ? s.detail
            : `the checkout's git directory is not where git keeps it (${s.misplaced})`,
      };
    return ((r = Gr(yi(e, s.layout.commonDir), "shallow")), r);
  };
}
function yi(e, t) {
  return dl(t) ? t : hh(e, t);
}
async function Yhr({
  sessionId: e,
  gitRoot: t,
  start: r,
  uploadOnly: o = !1,
  landUnless: s,
  now: a = Date.now,
  storageV5: d,
}) {
  let f = toInfraSessionId(e),
    { path: p, v5: y } = await resolveDirSyncRecordLocation(t, f, d),
    w = createGitSessionRecord({ sessionId: f, armedAtMs: a(), start: r, uploadOnly: o });
  if (isHoverRestEnabled() && d !== void 0 && y !== void 0) {
    if (s === void 0) await writeGitSessionRecord(p, w, y);
    else await writeGitSessionRecordStreamed(w, s, y);
    return { recordPath: p, record: w };
  }
  let k = s === void 0 ? p : `${p}.tmp.arming-${process.pid}`;
  for (;;) {
    if (k === p && s?.aborted) throw new Ve();
    if ((await writeGitSessionRecord(k, w), k === p)) return { recordPath: p, record: w };
    if (s?.aborted) throw (await rl(k).catch(() => {}), new Ve());
    try {
      return (await renameWithRetry(k, p), { recordPath: p, record: w });
    } catch (_) {
      let E = A(_);
      if ((await rl(k).catch(() => {}), E === void 0 || !RENAME_FALLBACK_ERRNOS.has(E))) throw _;
      k = p;
    }
  }
}
function gh(e) {
  return e.kind === "seed" ? e.head : e.pin;
}
function wh(e) {
  let t = e
      .slice(0, 3)
      .map((o) => formatSingleLineText(o, { maxCodeUnits: 120 }))
      .join(", "),
    r = e.length === 1;
  return `${r ? "1 file with a credential-like name" : `${e.length} files with credential-like names`} (${t}${e.length > 3 ? ", \u2026" : ""}) ${r ? "is" : "are"} in commits this machine would upload and the cloud session does not have; sync will not carry those commits while any of them contains ${r ? "that file" : "those files"} \u2014 amend or reset the commits (deleting the file in a later commit is not enough)`;
}
async function Jhr({
  sessionId: e,
  gitRoot: t,
  start: r,
  boundToThisMachine: o,
  onStatus: s,
  credentials: a,
  consent: d,
  uploadAtOpen: f,
  endedEarlier: p,
  storageV5: y,
}) {
  let w = isDirSyncFastForwardEnabled();
  logEvent("tengu_dir_sync_git_open", { branch_rule: w, upload_at_open: f });
  let k = await canonicalizePath(t, createHoverRestOptions(y)),
    _ = getSideGitDirPath(getProjectDir(k)),
    E = { gitDir: _, timeoutMs: DEFAULT_GIT_TIMEOUT_MS },
    R = await getDirSyncRecordPath(t, e, y),
    N = await lh(t),
    C = createSyncedFileLaneClient({ sessionId: e, credentials: a });
  return hFt({
    sessionId: e,
    gitRoot: t,
    push: Ra({ ...E, checkoutShallowFile: ph(t) }),
    recordPath: R,
    snapshot: Ah({ gitRoot: t, realRoot: N, sideGitDir: _, pinCommit: gh(r) }),
    transport: createDirSyncJournalTransport({ client: C, direct: C }),
    applyDown: gFt({
      gitRoot: t,
      realRoot: N,
      sessionId: e,
      objects: ua(E),
      checkout: ca(t),
      deps: {
        now: () => new Date(),
        trash: _Ft(t, N, Ph(t, e), (O) =>
          s(
            `When Claude deletes or replaces a file in the cloud, your copy is moved to ${formatSingleLineText(O, { maxCodeUnits: 512 })} on this machine, not discarded`,
            "info",
          ),
        ),
      },
    }),
    codec: yFt,
    onStatus: s,
    boundToThisMachine: o,
    ...(d !== void 0 && { consent: d }),
    checkoutBranch: (O) => Na(t, O),
    initialPass: f ? "send" : "none",
    ...(p !== void 0 && { endedEarlier: p }),
    writerLock: (O) => mFt({ recordPath: R, lockPath: fs(_, e), onLost: O }),
    ...(isDirSyncStreamingEnabled() && { changeFeed: () => createDirChangeFeed({ root: t }), streamingScope: bh(t) }),
    ...(!w
      ? {}
      : {
          fastForward: async ({
            worktreeCommit: O,
            expectedHead: D,
            expectedBranch: pe,
            vouch: re,
            keepLocal: te,
            keepRemoved: ge,
            neverFrom: le,
            signal: J,
          }) => {
            let [fe, K] = await Promise.all([
                readGitLayout(t, J, { linkedTrees: !0 }),
                gs(t, J),
              ]),
              ee =
                fe.kind === "read" && !isCheckoutLayoutSupported(fe.layout.checkout)
                  ? {
                      kind: "tampered",
                      misplaced: "linked_worktree",
                      gitDir: fe.layout.gitDir,
                      commonDir: fe.layout.commonDir,
                    }
                  : fe;
            if (ee.kind !== "read" || K === null)
              return {
                kind: "waiting",
                reason: "git_error",
                detail:
                  ee.kind === "failed"
                    ? ee.detail
                    : ee.kind !== "read"
                      ? ee.misplaced === "linked_worktree"
                        ? "a linked working tree is not fast-forwarded yet"
                        : `the checkout's git directory is not where git keeps it (${ee.misplaced})`
                      : "the checkout's configuration could not be listed",
              };
            let ye = await Sh({ ...E, signal: J }, e, O);
            if (ye.kind !== "found")
              return ye.kind === "failed"
                ? { kind: "waiting", reason: "git_error", detail: ye.detail }
                : {
                    kind: "waiting",
                    reason: "objects_unavailable",
                    detail: "no received ref names that commit",
                  };
            return js({
              gitRoot: t,
              side: E,
              sessionId: e,
              receivedRef: ye.ref,
              expectedHead: D,
              expectedBranch: pe,
              sentWorktree: () => re(ee),
              keepLocal: te,
              keepRemoved: ge,
              neverFrom: le,
              ..._h(t),
              isWithheld: kh(t, N),
              checkoutEnv: K,
              signal: J,
            });
          },
        }),
  });
}
var yh = 1e4;
function bh(e, t = go) {
  let r = null,
    o = async (s) => {
      if (r !== null) return r;
      let a = await t(e, s);
      return ((r = a.kind === "read" ? a.layout : null), r);
    };
  return async (s) => {
    let a = s.filter((k) => !k.includes("\x00"));
    if (a.length === 0) return !0;
    let d = AbortSignal.timeout(yh),
      f = await o(d).catch(() => null);
    if (f === null) return !0;
    let y = await ul(createHardenedGitRunner(e, f, d))(
      ["check-ignore", "-z", "--stdin"],
      { ...GIT_PATHSPEC_ENV, GIT_LITERAL_PATHSPECS: "0" },
      a.map((k) => `./${k}\x00`).join(""),
    ).catch(() => null);
    if (y === null || y.code !== 0) return !0;
    let w = new Set(y.stdout.split("\x00").filter((k) => k !== ""));
    return a.some((k) => !w.has(`./${k}`));
  };
}
function _h(e) {
  return {
    neverByName: ol,
    refusedInHistory: (t, r) =>
      isRefusedSyncPath(t, "/", "file", r) || ol(t) || !isSafePortablePath(t) || jo(t),
    trackedInIndex: async (t, r) => {
      let o = await zo(e, t, r);
      return o === null
        ? null
        : new Set([...o].flatMap(([s, a]) => (a === "present" ? [s] : [])));
    },
    neverRemovedByName: (t) =>
      [t, normalizeUnicodeForm(t)].some((r) => r.split("/").some((o) => o.startsWith("."))),
  };
}
function ol(e) {
  return [e, normalizeUnicodeForm(e)].some((t) => {
    let r = t.split("/");
    return isProtectedClaudePath(r, "file") || r.some(isReservedDirShortName) || isDangerousFileName(t) || isSensitivePathVariant(t);
  });
}
function kh(e, t) {
  let r = createPathWithholdClassifier(e, { realRoot: t });
  return (o) => {
    let s = r(o, !0);
    return s === "rules_unreadable" ? null : s !== null;
  };
}
async function Sh(e, t, r) {
  let o = buildSessionRefName(t, "in/0")?.replace(/0$/, "") ?? null;
  if (o === null || !GIT_OBJECT_ID_REGEX.test(r)) return { kind: "none" };
  let s = await runDirSyncGit(e, [
    "for-each-ref",
    "--format=%(refname)",
    `--points-at=${r}`,
    "--",
    o,
  ]);
  if (s.exitCode !== 0)
    return {
      kind: "failed",
      detail: Eh(s.stderr) ?? "the received refs could not be listed",
    };
  let a = s.stdout
    .split(
      `
`,
    )
    .find((d) => d.startsWith(o));
  return a === void 0 ? { kind: "none" } : { kind: "found", ref: a };
}
function Eh(e) {
  let t = e
    .split(
      `
`,
    )
    .find((r) => r.trim() !== "");
  return t === void 0 ? null : t.trim().slice(0, 200);
}
function Ph(e, t, r = go) {
  let o = Th(() => Rh(e, t, r));
  return async () => {
    let s = await o();
    return (await vh(s), s.trashDir);
  };
}
async function Rh(e, t, r) {
  let o = await r(e, void 0);
  if (o.kind !== "read" || !isCheckoutLayoutSupported(o.layout.checkout))
    throw Error("the checkout has no plain, readable git directory");
  let s = yi(e, o.layout.commonDir),
    a = Gr(s, mh, sanitizePathSegment(t)),
    d = fh(s, a);
  if (d.startsWith("..") || dl(d))
    throw Error("the session trash would leave the git directory");
  return { commonDir: s, trashDir: a };
}
async function vh({ commonDir: e, trashDir: t }) {
  for (let r of [e, ll(t), t]) {
    let o = await al(r).catch((s) => {
      if (W(s)) return null;
      throw s;
    });
    if (o !== null && !o.isDirectory())
      throw Error("the session trash path is not a plain directory");
  }
}
function Th(e) {
  let t = null;
  return () => (
    (t ??= e().catch((r) => {
      throw ((t = null), r);
    })),
    t
  );
}
function _Ft(e, t, r, o = () => {}) {
  let s = !1;
  return async (a, d, f, p, y) => {
    let w;
    try {
      w = await r();
    } catch (E) {
      return (
        logForDebugging(`dir-sync: session trash unavailable, move refused (${l(E)})`),
        "refused"
      );
    }
    let k = await nl({
      root: e,
      trashDir: w,
      file: { path: d, sha256: f, trackedHere: y.trackedHere },
      through: { side: "laptop", anchor: p },
    });
    if (k === "moved") {
      if (!s) ((s = !0), o(w));
      return "trashed";
    }
    if (k === "unavailable") return "refused";
    return (await readFileWithDigests(e, t, d, p))?.sha256 === f ? "refused" : "kept_changed";
  };
}
function Ah({
  gitRoot: e,
  realRoot: t,
  sideGitDir: r,
  pinCommit: o,
  uploadFilter: s = () => createPathWithholdClassifier(e, { realRoot: t }),
  readLayout: a = go,
}) {
  return async ({
    basis: d,
    alsoParents: f,
    signal: p,
    shallowFile: y,
    layoutRead: w,
  }) => {
    let k = new BuilderGitProbes("operation"),
      _ =
        w !== void 0 &&
        w.layout.gitDirId !== void 0 &&
        w.layout.storeStamps !== void 0 &&
        w.layout.configPins !== void 0
          ? w
          : await a(e, p, k);
    if (_.kind !== "read")
      return {
        kind: "refused",
        reason:
          _.kind === "failed" && p?.aborted === !0 ? "aborted" : "git_error",
        detail:
          _.kind === "failed"
            ? _.detail
            : `the checkout's git directory is not where git keeps it (${_.misplaced})`,
      };
    if (!isCheckoutLayoutSupported(_.layout.checkout))
      return {
        kind: "refused",
        reason: "git_error",
        detail: "a linked working tree is not snapshotted yet",
      };
    let E = y !== void 0 ? Ih(y) : await Nh(yi(e, _.layout.commonDir));
    try {
      let R = s(),
        N = reachRootsOf(_.layout),
        C = il(createHardenedGitRunner(e, _.layout, p, N, k)),
        O = await xh(ul(C), R);
      if (O === null)
        return {
          kind: "refused",
          reason: p?.aborted === !0 ? "aborted" : "git_error",
          detail: "the working tree could not be listed",
        };
      if (O.rulesUnreadable)
        return {
          kind: "refused",
          reason: "unreadable",
          detail: `your Read rules or sandbox settings could not be read${formatUnreadableSettingsSuffix(R.unreadableSettingsFiles)}; nothing syncs until they can be`,
        };
      let D = (Ae) => ({
          kind: "refused",
          reason: p?.aborted === !0 ? "aborted" : "git_error",
          detail: Ae,
        }),
        pe = (Ae) => ({
          kind: "refused",
          reason: "unreadable",
          detail: `${Ae} staged ${pluralize(Ae, "file is", "files are")} covered by your Read rules or sandbox read-deny settings (or named like a credential under another spelling); unstage ${pluralize(Ae, "it", "them")} for sync to continue (committing ${pluralize(Ae, "it", "them")} would ship ${pluralize(Ae, "its", "their")} bytes as history)`,
        }),
        re = (Ae) => ({
          kind: "refused",
          reason: "unreadable",
          detail: wh(Ae),
        }),
        te = (Ae) => ({
          kind: "refused",
          reason: "unreadable",
          detail: `${Ae} ${pluralize(Ae, "file")} covered by your Read rules or sandbox read-deny settings (or named like a credential under another spelling) ${pluralize(Ae, "was", "were")} committed here since the session began; sync will not carry those commits`,
        }),
        ge = await C(["rev-parse", "-q", "--verify", "HEAD^{commit}"]);
      if (
        ge.code !== 0 &&
        ge.exitCode === 1 &&
        ge.stdout === "" &&
        (await Fh(C))
      ) {
        let Ae = await gi(C, R);
        if (Ae !== 0)
          return Ae === null ? D("the index could not be compared") : pe(Ae);
        return {
          kind: "refused",
          reason: "unborn",
          detail: "this checkout has no commit yet",
        };
      }
      let le = await gi(C, R);
      if (le !== 0)
        return le === null ? D("the index could not be compared") : pe(le);
      let fe =
          (await C(["cat-file", "-e", `${o}^{commit}`])).code === 0 ? o : null,
        K = ge.code === 0 ? await sl(C, fe, R, ge.stdout.trim(), E.env) : null;
      if (K === null || K.denied !== 0)
        return K === null
          ? D("the commits since the session began could not be listed")
          : te(K.denied);
      if (K.credentialNamed.length > 0) return re(K.credentialNamed);
      let ee = () => ({
        kind: "refused",
        reason: "busy",
        detail:
          "git's shallow boundary changed while the snapshot was being taken",
      });
      if (!(await E.unchanged())) return ee();
      let ye = await os({
        gitRoot: e,
        layout: _.layout,
        sideRoot: ll(r),
        sideGitDir: r,
        pinCommit: fe,
        basis: d,
        alsoParents: f ?? [],
        scopePaths: [...O.paths, ...O.nestedRepositories.map((Ae) => `${Ae}/`)],
        byteCap: MAX_SYNC_UPLOAD_BYTES,
        signal: p,
        probes: k,
      });
      if (ye.kind === "refused")
        return {
          kind: "refused",
          reason: Oh(ye.reason),
          detail:
            ye.reason === "info_attributes"
              ? `${ye.detail} \u2014 move its filter rules into a .gitattributes file or remove it`
              : ye.detail,
        };
      if (!(await E.unchanged())) return ee();
      let Ge = il(
          createHardenedGitRunner(
            e,
            {
              gitDir: r,
              commonDir: r,
              workTree: _.layout.workTree,
              ...(_.layout.configPins !== void 0 && {
                configPins: _.layout.configPins,
              }),
            },
            p,
            N,
            k,
          ),
        ),
        [at, je] = await Promise.all([
          gi(Ge, R, [ye.headSha, ye.indexCommit]),
          sl(C, fe, R, ye.headSha, E.env),
        ]);
      if (at !== 0)
        return at === null
          ? D("the built index could not be compared")
          : pe(at);
      if (je === null || je.denied !== 0)
        return je === null
          ? D("the built history could not be listed")
          : te(je.denied);
      if (je.credentialNamed.length > 0) return re(je.credentialNamed);
      return {
        kind: "snapshot",
        snapshot: {
          head: ye.headSha,
          branch: ye.branch,
          indexCommit: ye.indexCommit,
          worktreeCommit: ye.worktreeCommit,
          withheld: {
            credentialNamed: dedupe([
              ...ye.withheld.credentialNamed,
              ...O.withheld.credentialNamed,
            ]),
            filterAttributed: ye.withheld.filterAttributed,
            hardLinked: ye.withheld.hardLinked,
            notFiles: ye.withheld.notFiles,
            readDenied: O.withheld.readDenied,
            changedDuringRead: ye.withheld.changedDuringRead,
          },
          ...Ch(ye),
          stats: ye.stats,
        },
      };
    } finally {
      await E.release();
    }
  };
}
function Ch(e) {
  let t = "conflicted" in e ? e.conflicted : void 0;
  return Array.isArray(t) && t.every((r) => typeof r === "string")
    ? { conflicted: t }
    : {};
}
function Oh(e) {
  switch (e) {
    case "unborn":
    case "unmerged_index":
    case "too_large":
    case "busy":
    case "aborted":
    case "git_error":
    case "basis_not_held":
    case "momentary":
    case "too_many_paths":
      return e;
    case "unreadable_path":
    case "path_encoding":
    case "info_attributes":
      return "unreadable";
    default:
      return "git_error";
  }
}
async function xh(e, t) {
  let [r, o] = await Promise.all([
    e(["ls-files", "-z", "--modified", "--deleted"]),
    e(["ls-files", "-z", "--others", "--exclude-standard"]),
  ]);
  if (r.code !== 0 || o.code !== 0) return null;
  let s = (_) => _.split("\x00").filter((E) => E !== ""),
    a = s(o.stdout),
    d = a.filter((_) => _.endsWith("/")).map((_) => _.slice(0, -1));
  if (d.length > 0)
    logForDebugging(
      `dir-sync: ${d.length} untracked nested repositories left out of the snapshot`,
    );
  let f = partitionSeedPaths(
      a.filter((_) => !_.endsWith("/")),
      (_) => _,
      (_) => t(_, !1),
    ),
    p = dedupe(s(r.stdout)),
    w = [
      ...p.flatMap((_) => {
        let E = t(_, !0);
        return E === null ? [] : [{ item: _, reason: E }];
      }),
      ...f.withheld,
    ],
    k = new Set(w.map((_) => _.item));
  return {
    paths: dedupe([...p.filter((_) => !k.has(_)), ...f.eligible]),
    nestedRepositories: d,
    withheld: {
      credentialNamed: w.filter((_) => !wi(_.reason)).map((_) => _.item),
      readDenied: w.filter((_) => wi(_.reason)).map((_) => _.item),
    },
    rulesUnreadable: w.some((_) => _.reason === "rules_unreadable"),
  };
}
function Ih(e) {
  return {
    env: { GIT_SHALLOW_FILE: e },
    unchanged: async () => !0,
    release: async () => {},
  };
}
async function Nh(e) {
  let t = Gr(e, "shallow"),
    r = async () => {
      let d = await al(t).catch((f) => (W(f) ? null : "irregular"));
      if (d === null) return null;
      if (d === "irregular" || !d.isFile() || d.size > Lh) return "irregular";
      return readFile(t).catch(() => "irregular");
    },
    o = await r(),
    s = await mkdtemp(Gr(tmpdir(), "claude-shallow-")),
    a = Gr(s, "shallow");
  if (Buffer.isBuffer(o)) await uh(a, o, { mode: 384 });
  return {
    env: { GIT_SHALLOW_FILE: a },
    unchanged: async () => {
      let d = await r();
      return o === null
        ? d === null
        : Buffer.isBuffer(o) && Buffer.isBuffer(d) && o.equals(d);
    },
    release: () => dh(s, { recursive: !0, force: !0 }),
  };
}
var Lh = 1048576;
function il(e) {
  return (t, r, o) => e(t, { GIT_ALLOW_PROTOCOL: "none", ...r }, o);
}
function ul(e) {
  let t = hardenedSpawnEnv(void 0),
    r = getEnvVarCaseInsensitive(t, "GIT_CONFIG_GLOBAL"),
    o = getEnvVarCaseInsensitive(t, "GIT_CONFIG_SYSTEM"),
    s = {
      ...(r === void 0 ? {} : { GIT_CONFIG_GLOBAL: r }),
      ...(o === void 0 ? {} : { GIT_CONFIG_SYSTEM: o }),
    };
  return (a, d, f) => e(a, { ...s, ...d }, f);
}
async function Fh(e) {
  let t = await e(["symbolic-ref", "-q", "HEAD"]);
  if (t.code !== 0) return !1;
  let r = await e(["show-ref", "--verify", "-q", t.stdout.trim()]);
  return r.code !== 0 && r.exitCode === 1;
}
async function sl(e, t, r, o, s) {
  let a = t === null ? o : `${t}..${o}`,
    d = await Dh(e, a, s);
  if (d === null) return null;
  return {
    denied: countMatching(d, (f) => cl(f, r(f, !0))),
    credentialNamed: d.filter((f) => $h(r(f, !0)) && fl(f)),
  };
}
async function Dh(e, t, r) {
  let o = await e(
    [
      "-c",
      "log.showSignature=false",
      "log",
      "-z",
      "-m",
      "--name-only",
      "--format=",
      "--no-renames",
      "--no-ext-diff",
      "--diff-filter=AMT",
      t,
    ],
    r,
  );
  if (o.code !== 0) return null;
  return dedupe(o.stdout.split("\x00")).filter((s) => s !== "");
}
function $h(e) {
  return e === "sensitive" || e === "sensitive_tracked";
}
function wi(e) {
  return e === "read_denied" || e === "rules_unreadable";
}
function cl(e, t) {
  return wi(t) || (t !== null && !fl(e));
}
function fl(e) {
  return (
    isSensitivePath(e) &&
    /^[\x20-\x7e]+$/.test(e) &&
    !/~\d/.test(e) &&
    !/[. ](?:[\\/]|$)|[:\\]/.test(e)
  );
}
async function gi(e, t, r) {
  let o = ["--no-renames", "--no-ext-diff", "--diff-filter=AMT"],
    s = await e(
      r === void 0
        ? ["diff", "--cached", "--name-only", "-z", ...o]
        : ["diff-tree", "-r", "--name-only", "-z", ...o, r[0], r[1]],
    );
  if (s.code !== 0) return null;
  return countMatching(s.stdout.split("\x00"), (a) => {
    if (a === "") return !1;
    return cl(a, t(a, !0));
  });
}
var yFt = {
  encodeLaptop(e) {
    return encodeSyncJournal({
      version: JOURNAL_VERSION_WITH_NOTE,
      side: "laptop",
      generation: e.note.generation,
      turnIndex: 0,
      userEventUuids: [...e.userEventUuids],
      writtenAtMs: Date.now(),
      entries: [],
      skipped: [],
      skippedOmittedCount: 0,
      note: e.note,
      ...(e.uploading !== void 0 && { uploading: e.uploading }),
      ...(e.ended !== void 0 && {
        halted: "ended",
        haltReason: e.ended.reason,
        haltLine: e.ended.line,
      }),
    });
  },
  announceUpload(e, t) {
    return encodeSyncJournal({
      version: JOURNAL_VERSION_WITH_NOTE,
      side: "laptop",
      generation: 0,
      turnIndex: 0,
      userEventUuids: [],
      writtenAtMs: Date.now(),
      entries: [],
      skipped: [],
      skippedOmittedCount: 0,
      uploading: e,
      ...(t !== void 0 && {
        halted: "ended",
        haltReason: t.reason,
        haltLine: t.line,
      }),
    });
  },
  decodeLaptop(e) {
    let t = parseSyncJournal(e, "laptop", { engine: "git" });
    if (!t.ok) return null;
    let { note: r, uploading: o } = t.journal;
    if (r === void 0)
      return o === void 0
        ? null
        : {
            note: null,
            writer: o.writer ?? null,
            startedAtMs: o.startedAtMs,
            abandoned: o.abandoned === !0,
          };
    return r.engine === "git" && "downApplied" in r ? { note: r } : null;
  },
  decodeWorker(e) {
    let t = parseSyncJournal(e, "worker", { engine: "git" });
    if (!t.ok) return null;
    let { note: r, userEventUuids: o } = t.journal;
    return r !== void 0 && r.engine === "git" && "report" in r
      ? { userEventUuids: o, note: r }
      : null;
  },
  decodeWorkerStartFailed(e) {
    let t = parseSyncJournal(e, "worker", { engine: "git" });
    return t.ok && t.journal.halted === "start_failed"
      ? { line: t.journal.haltLine ?? null }
      : null;
  },
};
export { mFt, gFt, hFt, Yhr, Jhr, _Ft, yFt };
