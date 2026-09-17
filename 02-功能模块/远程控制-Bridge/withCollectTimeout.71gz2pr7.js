// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 28 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { sleep } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { GIT_HARDENED_ARGS, sanitizeGitEnv, execFileNoThrowWithCwd } from "../工作树-Git/git-exec-hardening.js";
import { getGitRepoCache, findGitRootRecheckingNegative, gitExe, getGitDir } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { lstat, open as w } from "fs/promises";
import { join as c, resolve } from "path";
var d = 1e4;
async function withCollectTimeout(e, t = d) {
  let r = new AbortController();
  try {
    return await Promise.race([
      e,
      sleep(t, r.signal).then(() => {
        throw Error("worktree probe timed out");
      }),
    ]);
  } finally {
    r.abort();
  }
}
async function collectWorktreeState(e, t, r = d) {
  let i = findGitRootRecheckingNegative(e);
  if (!i) return null;
  try {
    let o = await withCollectTimeout(O(i, t), r);
    return (logFeatureOk("bridge_worktree_state"), o);
  } catch (o) {
    return (
      logFeatureBad("bridge_worktree_state", "collect_failed"),
      logForDebugging(`[bridge:worktree] collectWorktreeState failed: ${l(o)}`),
      null
    );
  }
}
async function O(e, t) {
  let r = await getGitDir(e);
  if (!r) (getGitRepoCache().gitDirByCwd.delete(resolve(e)), (r = await getGitDir(e)));
  if (!r)
    throw Error("getGitDir returned null \u2014 cannot verify worktree state");
  let [i, o, u, s, g, _] = await Promise.all([
    T(e),
    k(e, t),
    v(e),
    D(r),
    h(c(e, ".gitmodules")),
    P(e),
  ]);
  return {
    branch: t,
    head_sha: i,
    unpushed_count: o.count,
    is_dirty: u,
    upstream_exists: o.upstreamExists,
    mid_operation: s,
    has_submodules: g,
    has_lfs: _,
    reported_at: new Date().toISOString(),
  };
}
var x = 4194304;
function a(e, t) {
  return execFileNoThrowWithCwd(gitExe(), [...GIT_HARDENED_ARGS, ...t], {
    cwd: e,
    env: sanitizeGitEnv(),
    preserveOutputOnError: !1,
    maxBuffer: x,
    timeout: 1e4,
  });
}
async function T(e) {
  let { code: t, stdout: r } = await a(e, ["rev-parse", "HEAD"]);
  return t === 0 ? r.trim() : null;
}
async function k(e, t) {
  if (!t) return { count: null, upstreamExists: !1 };
  let r = `refs/remotes/origin/${t}`,
    i = await a(e, ["rev-parse", "--verify", "--quiet", `${r}^{commit}`]);
  if (i.code !== 0 || !i.stdout.trim())
    return { count: null, upstreamExists: !1 };
  let { code: o, stdout: u } = await a(e, [
    "rev-list",
    "--count",
    `${r}..HEAD`,
  ]);
  if (o !== 0) return { count: null, upstreamExists: !1 };
  let s = parseInt(u.trim(), 10);
  return { count: Number.isFinite(s) ? s : null, upstreamExists: !0 };
}
async function v(e) {
  let { code: t, stdout: r } = await a(e, [
    "--no-optional-locks",
    "status",
    "--porcelain",
    "-unormal",
  ]);
  if (t !== 0) throw Error("git status failed");
  return r.trim().length > 0;
}
async function h(e) {
  try {
    let t = await lstat(e);
    return t.isFile() || t.isDirectory();
  } catch (t) {
    if (W(t)) return !1;
    throw t;
  }
}
var m = [
  ["rebase-merge", "rebase"],
  ["rebase-apply", "rebase"],
  ["MERGE_HEAD", "merge"],
  ["CHERRY_PICK_HEAD", "cherry-pick"],
  ["REVERT_HEAD", "revert"],
  ["BISECT_LOG", "bisect"],
  ["sequencer", "cherry-pick"],
];
async function D(e) {
  let r = (await Promise.all(m.map(([i]) => h(c(e, i))))).indexOf(!0);
  return r === -1 ? null : m[r][1];
}
async function P(e) {
  let t = c(e, ".gitattributes");
  try {
    if (!(await lstat(t)).isFile()) return !1;
  } catch (i) {
    if (W(i)) return !1;
    throw i;
  }
  let r;
  try {
    r = await w(t, "r");
    let { buffer: i, bytesRead: o } = await r.read(
      Buffer.alloc(65536),
      0,
      65536,
      0,
    );
    return i.toString("utf8", 0, o).includes("filter=lfs");
  } catch (i) {
    if (W(i)) return !1;
    throw i;
  } finally {
    await r?.close();
  }
}
export { collectWorktreeState, withCollectTimeout };
