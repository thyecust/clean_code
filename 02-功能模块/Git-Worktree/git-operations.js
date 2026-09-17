// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { CS } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { env as a, antEnv } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodeUnits, takeLastCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { NONINTERACTIVE_GIT_ENV } from "./git-exec-hardening.js";
import { Bs } from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";
import { raceWithTimeout } from "../../01-核心基础设施/共享小工具-未细化/with-timeout.js";
import { redactSecrets } from "../../01-核心基础设施/共享小工具-未细化/redact-secrets.js";
import { isPathSafeToRemove } from "../../01-核心基础设施/共享小工具-未细化/chunk-nfcecy7x.js";
import { spawn } from "child_process";
import {
  lstat,
  mkdir,
  open as Ft,
  readdir,
  readFile,
  realpath,
  rm as Be,
  rmdir,
  stat as Bt,
  unlink,
  writeFile,
} from "fs/promises";
import {
  basename,
  dirname,
  isAbsolute,
  join as G,
  resolve,
  sep as Ye,
} from "path";
var fe = 50;
function Re(e) {
  if (e) return [];
  let { depth: t } = Ae();
  return t === void 0 ? [] : ["--depth", String(t)];
}
function Ae() {
  let e = a.CLAUDE_RUNNER_FETCH_DEPTH;
  if (e === void 0) return { depth: fe, invalid: void 0 };
  if (e === "full" || e === "0") return { depth: void 0, invalid: void 0 };
  let t = Number(e);
  if (Number.isInteger(t) && t > 0) return { depth: t, invalid: void 0 };
  return { depth: fe, invalid: e };
}
var ze = 120000,
  Se = 300000,
  le = 1800000,
  ce = 5000,
  De =
    /^(Counting objects|Compressing objects|Receiving objects|Resolving deltas|Updating files|Checking out files|Filtering content):\s+(\d+)%(?:\s+\((\d+)\/(\d+)\))?(?:, ([\d.]+) (KiB|MiB|GiB))?/,
  Xe = "Receiving objects",
  Ze = { KiB: 1024, MiB: 1048576, GiB: 1073741824 },
  qe = 5000,
  Je = 500,
  GIT_WORKTREE_TIMEOUT_MS = 600000,
  Qe = new Set(["worktree"]);
function xe(e, t = !1) {
  let n,
    r,
    i = 0,
    s = e.split(/\r|\n/);
  if (t) s = s.slice(1);
  for (let u of s) {
    if (u.length === 0) continue;
    let c = u.startsWith("remote: ");
    if (c) i++;
    let w = c ? u.slice(8) : u,
      T = De.exec(w);
    if (T === null) continue;
    let [, h, S, m, g, d, _] = T,
      o = {
        sideband: c,
        label: h,
        pct: Math.min(100, Number(S)),
        done: m !== void 0 ? Number(m) : void 0,
        total: g !== void 0 ? Number(g) : void 0,
        bytes:
          d !== void 0 && _ !== void 0 ? Math.round(Number(d) * Ze[_]) : void 0,
        raw: `${c ? "remote: " : ""}${h}: ${S}%${m !== void 0 ? ` (${m}/${g})` : ""}`,
      };
    if (((n = o), !c)) r = o;
  }
  return { display: n, client: r, remoteLines: i };
}
var et = 1000;
function tt(e, t, n) {
  if (e.active) return;
  if (t.display?.sideband) {
    e.active = !0;
    return;
  }
  if (t.remoteLines === 0) return;
  if (e.firstRemoteLineAt === void 0) e.firstRemoteLineAt = n;
  else if (n - e.firstRemoteLineAt >= et) e.active = !0;
}
function nt(e, t) {
  if (e === void 0) return !0;
  if (t.label !== e.label) return !0;
  if (t.done !== void 0 && e.done !== void 0)
    return t.done > e.done || (t.bytes ?? 0) > (e.bytes ?? 0);
  return t.pct > e.pct;
}
function rt(e) {
  return e.label === "Resolving deltas" && e.pct === 100;
}
function ot(e) {
  let t = e.startsWith("remote: ") ? e.slice(8) : e;
  return De.test(t);
}
function it(e, t, n, r) {
  let i = t ? e.replace(/^[^\r\n]*[\r\n]?/, "") : e,
    s = redactGitCredentials(i, n, r)
      .split(/\r|\n/)
      .filter((c) => c.length > 0 && !ot(c)).join(`
`),
    u = Ne(s);
  return Ie.test(u) ? u.slice(0, 2000) : u.slice(-2000);
}
var st = 1e4,
  ue = 3,
  V = 5,
  Te = 300,
  Pe = 150,
  Ce = 2,
  K = 3,
  at = 1000,
  ct = 15;
function ve() {
  return Boolean(antEnv.CLAUDE_RUNNER_FAIL_FAST_FETCH);
}
function ut() {
  return Boolean(antEnv.CLAUDE_RUNNER_STALL_GIVEUP);
}
function dt(e) {
  return e
    .split(
      `
`,
    )
    .some((t) => {
      let n = t.indexOf("Operation too slow");
      if (n === -1) return !1;
      let r = t.slice(0, n);
      return (
        !/\bremote(?: error)?: /.test(r) &&
        /curl 28\b|unable to access '[^']*': $/.test(r)
      );
    });
}
function ft() {
  return Boolean(antEnv.CCR_DELTA_RESET);
}
var lt = ["couldn't find remote ref"];
function isMissingRemoteRefError(e) {
  let t = e.toLowerCase();
  return lt.some((n) => t.includes(n));
}
var GIT_HARDENING_ARGS = [
    "-c",
    "core.hooksPath=/dev/null",
    "-c",
    "core.fsmonitor=",
    "-c",
    "core.askPass=",
  ],
  GIT_BASE_ENV_OVERRIDES = {
    SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
    SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0,
    GIT_ALLOW_PROTOCOL: "https:http:ssh",
  };
async function prepareGitSources(e) {
  let {
      baseDir: t,
      sources: n,
      outcomes: r,
      skipValidation: i,
      alwaysFetch: s,
      skipReset: u,
      onDebug: c,
      onPhase: w,
      onProgress: T,
      signal: h,
    } = e,
    S = vt(r ?? []);
  for (let m of n) {
    if (!isSupportedSourceType(m.type)) {
      c(`[byoc:git] Skipping unsupported source type: ${m.type}`);
      continue;
    }
    await gt({
      baseDir: t,
      source: m,
      targetBranch: S.get(m.repo),
      skipValidation: i ?? !1,
      alwaysFetch: s ?? !1,
      skipReset: u ?? !0,
      onDebug: c,
      onPhase: w,
      onProgress: T,
      signal: h,
    });
  }
}
function isSupportedSourceType(e) {
  return e === "github" || e === "github-ssh" || e === "test-file";
}
async function gt(e) {
  let t = Date.now();
  try {
    let { repoExisted: n } = await pt(e);
    logFeatureOk("byoc_git_prepare_repo", {
      repo_existed: n,
      duration_ms: Date.now() - t,
    });
  } catch (n) {
    throw (
      logFeatureBad("byoc_git_prepare_repo", "error", { duration_ms: Date.now() - t }),
      n
    );
  }
}
async function pt(e) {
  let {
      baseDir: t,
      source: n,
      targetBranch: r,
      skipValidation: i,
      alwaysFetch: s,
      skipReset: u,
      onDebug: c,
      onPhase: w,
      onProgress: T,
      signal: h,
    } = e,
    S = Ct(n),
    m = n.getAuthToken ? S : injectTokenIntoGitUrl(S, n.token),
    g = resolveCanonicalRepoPath(t, n);
  if (!g)
    throw Error(`Could not determine repository directory for: ${n.repo}`);
  if (n.ref && !CS(n.ref)) throw Error(`Invalid ref: ${n.ref}`);
  if (r && !CS(r)) throw Error(`Invalid target branch: ${r}`);
  let d = Date.now();
  c(
    `[byoc:git] Preparing ${n.repo} at ${g} (ref=${n.ref ?? "HEAD"}, auth=${n.getAuthToken ? "git-proxy" : m !== S})`,
  );
  let { invalid: _ } = Ae();
  if (_ !== void 0)
    c(
      `[byoc:git] Ignoring CLAUDE_RUNNER_FETCH_DEPTH='${_}' \u2014 expected 'full', '0', or a positive integer; using default ${fe}`,
    );
  let o = {
    repoPath: g,
    gitURL: S,
    authURL: m,
    token: n.token,
    getAuthToken: n.getAuthToken,
    governedMount: n.governedMount,
    onDebug: c,
    onPhase: w,
    onProgress: T,
    signal: h,
  };
  if (!i) await ge(o, "validateAccess", () => ht(o));
  let l = await ge(o, "ensureRepository", () => mt(o, t));
  if (s) await de(o, n.ref, u, l, n.prefetchedTip, n.standbyCheckout);
  else if (l && !n.ref)
    c("[byoc:git] Using prefetched repo as-is (no ref requested)");
  else if (l && n.ref) {
    if (r && (await Le(o, r)))
      return (
        c(`[byoc:git] Task branch ${r} exists on remote, fetching it`),
        await Ge(o, r, l),
        c(`[byoc:git] Ready: ${n.repo} (${Date.now() - d}ms)`),
        { repoExisted: l }
      );
    if (await $t(o, n.ref))
      (c(`[byoc:git] Ref ${n.ref} resolves locally, skipping fetch`),
        await p(o, o.repoPath, ["checkout", "--progress", "--force", n.ref]));
    else await de(o, n.ref, !1, l);
  } else await de(o, n.ref, !1, l);
  if (r) await Pt(o, r, l);
  return (
    c(`[byoc:git] Ready: ${n.repo} (${Date.now() - d}ms)`),
    { repoExisted: l }
  );
}
function M(e, t, n, r) {
  e.onDebug(`[byoc:git] phase ${t} ${n}ms${r ? " " + jsonStringify(r) : ""}`);
  try {
    e.onPhase?.(t, n, r);
  } catch (i) {
    e.onDebug(`[byoc:git] onPhase callback threw: ${L(i)}`);
  }
}
async function ge(e, t, n, r, i = Date.now()) {
  let s = await n();
  return (M(e, t, Date.now() - i, r), s);
}
async function ht(e) {
  let t = 2000 + Math.random() * 2000,
    n;
  for (let r = 0; r < ue; r++) {
    if (r > 0) {
      let i = t * (1 << (r - 1));
      (e.onDebug(
        `[byoc:git] Validation retry ${r + 1}/${ue}, backing off ${Math.round(i)}ms`,
      ),
        await sleep(i, e.signal, { throwOnAbort: !0 }));
    }
    try {
      if ((await p(e, "", ["ls-remote", "--heads", e.authURL, "HEAD"]), r > 0))
        e.onDebug(`[byoc:git] Validation succeeded on attempt ${r + 1}`);
      return;
    } catch (i) {
      n = i;
    }
  }
  throw Error(
    `Repository access validation failed after ${ue} attempts: ${L(n)}`,
  );
}
async function mt(e, t) {
  try {
    return (
      await p(e, e.repoPath, [
        "--git-dir",
        G(e.repoPath, ".git"),
        "remote",
        "set-url",
        "origin",
        e.authURL,
      ]),
      await p(e, e.repoPath, [
        "--git-dir",
        G(e.repoPath, ".git"),
        "config",
        "--unset-all",
        "remote.origin.pushurl",
      ]).catch(() => {}),
      await $e(e),
      e.onDebug(`[byoc:git] Prefetched repo found at ${e.repoPath}`),
      !0
    );
  } catch {}
  return (
    e.onDebug(`[byoc:git] No prefetched repo, fresh init at ${e.repoPath}`),
    await raceWithTimeout(
      mkdir(t, { recursive: !0 }),
      st,
      `[runner:stuck] mkdir ${t} (check NFS/CSI mount health)`,
    ),
    await p(e, "", ["init", e.repoPath]),
    await p(e, e.repoPath, ["config", "gc.auto", "0"]).catch(() => {}),
    await p(e, e.repoPath, ["remote", "add", "origin", e.authURL]).catch(() =>
      p(e, e.repoPath, ["remote", "set-url", "origin", e.authURL]),
    ),
    await $e(e),
    !1
  );
}
async function $e(e) {
  await p(e, e.repoPath, [
    "--git-dir",
    G(e.repoPath, ".git"),
    "config",
    "--replace-all",
    "remote.origin.fetch",
    "+refs/heads/*:refs/remotes/origin/*",
    "^\\+?refs/heads/",
  ]).catch((t) =>
    e.onDebug(`[byoc:git] Could not normalize remote.origin.fetch: ${L(t)}`),
  );
}
async function de(e, t, n, r, i, s) {
  let u = t || "HEAD",
    c = ["fetch", ...Re(r), "--progress", "--no-tags", "origin", u],
    w =
      !n &&
      ft() &&
      (await p(e, e.repoPath, [
        "rev-parse",
        "--verify",
        "--quiet",
        "HEAD^{commit}",
      ]).then(
        () => !0,
        () => !1,
      )),
    T = !1;
  {
    let l = !1,
      P = await Oe(e, c, async () => ((l = await kt(e)), !l), r && ve());
    if (l) {
      e.onDebug("[byoc:git] Repository is empty, skipping checkout");
      return;
    }
    if (!P) throw Error(`git fetch failed for ${e.gitURL}`);
  }
  if (
    (await p(e, e.repoPath, [
      "update-ref",
      "refs/remotes/origin/HEAD",
      "FETCH_HEAD^{commit}",
    ]).catch((l) => e.onDebug(`[byoc:git] Could not set origin/HEAD: ${L(l)}`)),
    n)
  ) {
    e.onDebug(
      "[byoc:git] Fetched to FETCH_HEAD, skipping reset-hard (worktree mode)",
    );
    return;
  }
  let h = () =>
      p(e, e.repoPath, ["update-ref", "--no-deref", "HEAD", "HEAD"]).catch(
        () => {},
      ),
    S = () =>
      p(e, e.repoPath, [
        "-c",
        "core.checkStat=minimal",
        "-c",
        "core.trustctime=false",
        "reset",
        "--hard",
        "FETCH_HEAD^{commit}",
      ]),
    m = Date.now(),
    g = void 0,
    d =
      g === void 0 ||
      g.outcome === "absent" ||
      (g.outcome === "ready" &&
        g.state?.phase === "idle" &&
        g.state.head === void 0)
        ? void 0
        : g,
    _ = d && {
      standby_outcome: d.outcome,
      standby_wait_ms: String(d.waitedMs),
    },
    o =
      d === void 0
        ? { action: "usual" }
        : wt({
            outcome: d.outcome,
            state: d.state,
            ...(d.state?.phase === "idle" && d.state.head !== void 0
              ? await bt(e)
              : { head: void 0, fetchHead: void 0 }),
          });
  switch (o.action) {
    case "skip": {
      (await h(),
        e.onDebug(
          `[byoc:git] Standby checkout already left the tree at FETCH_HEAD (${o.sha.slice(0, 12)}); skipping reset`,
        ));
      let l =
        d?.state?.lastOkMs === void 0
          ? void 0
          : Math.max(0, Math.round((Date.now() - d.state.lastOkMs) / 1000));
      M(e, "reset", Date.now() - m, {
        ..._,
        skipped: "same_commit",
        ...(l !== void 0 && { standby_checkout_age_s: String(l) }),
      });
      return;
    }
    case "forced": {
      (e.onDebug(
        `[byoc:git] Standby checkout left the tree suspect (${o.reason}); forcing reset --hard`,
      ),
        await h(),
        await S());
      let l = await _t(e, {
        base: o.base ?? d?.lockBase,
        target: o.target ?? d?.lockTarget,
      });
      M(e, "reset", Date.now() - m, {
        ..._,
        standby_forced: o.reason,
        standby_strays_removed: l === void 0 ? "unknown" : String(l),
      });
      return;
    }
    case "usual":
      break;
  }
  if (!w) await h();
  await ge(
    e,
    "reset",
    async () => {
      if (w)
        try {
          await p(e, e.repoPath, [
            "-c",
            "core.checkStat=minimal",
            "-c",
            "core.trustctime=false",
            "checkout",
            "-q",
            "--progress",
            "--detach",
            "FETCH_HEAD^{commit}",
          ]);
          return;
        } catch (l) {
          if (e.signal?.aborted) throw l;
          (e.onDebug(
            `[byoc:git] Delta reset failed, falling back to reset --hard: ${L(l)}`,
          ),
            await h());
        }
      await S();
    },
    _,
    d === void 0 ? void 0 : m,
  );
}
var ke = /^[0-9a-f]{40}$/;
async function Q(e, t) {
  return p(e, e.repoPath, [
    "rev-parse",
    "--verify",
    "--quiet",
    `${t}^{commit}`,
  ]).then(
    (n) => n.trim() || void 0,
    () => {
      return;
    },
  );
}
async function bt(e) {
  let [t, n] = await Promise.all([Q(e, "HEAD"), Q(e, "FETCH_HEAD")]);
  return { head: t, fetchHead: n };
}
function yt(e, t) {
  return e.startsWith(t) || t.startsWith(e);
}
function wt({ outcome: e, state: t, head: n, fetchHead: r }) {
  let i = (s) => ({
    action: "forced",
    reason: s,
    base: t?.base,
    target: t?.target,
  });
  switch (e) {
    case "absent":
      return { action: "usual" };
    case "stale":
    case "killed":
    case "timeout":
      return i(e);
    case "ready":
    case "waited":
      break;
  }
  if (t === void 0) return i("no_record");
  switch (t.phase) {
    case "failed":
      return i("failed");
    case "running":
      return i("interrupted");
    case "other":
      return i("unknown_phase");
    case "idle":
      break;
  }
  if (t.head === void 0) return { action: "usual" };
  if (n === void 0 || !yt(n, t.head)) return i("head_mismatch");
  if (r !== void 0 && r === n) return { action: "skip", sha: n };
  return { action: "usual" };
}
async function _t(e, { base: t, target: n }) {
  if (t === void 0 || n === void 0 || !ke.test(t) || !ke.test(n)) {
    e.onDebug(
      "[byoc:git] Standby stray clean-up skipped: no usable base/target",
    );
    return;
  }
  try {
    let [r, i] = await Promise.all([Q(e, t), Q(e, n)]);
    if (r === void 0 || i === void 0) {
      e.onDebug(
        "[byoc:git] Standby stray clean-up skipped: base/target do not resolve locally",
      );
      return;
    }
    let s = async (g, d) => {
        let _ = {},
          o = await p(
            e,
            e.repoPath,
            [
              "diff",
              "--no-renames",
              "--name-only",
              "--diff-filter=A",
              "-z",
              g,
              d,
              "--",
            ],
            void 0,
            void 0,
            _,
          );
        if (_.stdoutTruncated || (o.length > 0 && !o.endsWith("\x00"))) {
          e.onDebug(
            `[byoc:git] Standby stray clean-up skipped: the ${g.slice(0, 12)}\u2192${d.slice(0, 12)} listing was truncated`,
          );
          return;
        }
        return o.split("\x00").filter((l) => l.length > 0);
      },
      u = await s(r, i);
    if (u === void 0) return;
    if (u.length === 0) return 0;
    let c = new Set(u),
      w = await s("FETCH_HEAD^{commit}", i);
    if (w === void 0) return;
    let T = w.filter((g) => c.has(g));
    if (T.length === 0) return 0;
    let h = await realpath(e.repoPath),
      S = 0,
      m = new Set();
    for (let g of T) {
      if (!Et(g)) {
        e.onDebug(`[byoc:git] Standby stray clean-up: refusing path '${g}'`);
        continue;
      }
      let d = G(h, g);
      try {
        if ((await realpath(dirname(d))) !== dirname(d)) {
          e.onDebug(
            `[byoc:git] Standby stray clean-up: refusing '${g}' (its directory resolves to another path)`,
          );
          continue;
        }
        let o = await lstat(d);
        if (!o.isFile() && !o.isSymbolicLink()) continue;
        (await unlink(d), S++, m.add(dirname(d)));
      } catch (_) {
        if (A(_) !== "ENOENT")
          e.onDebug(`[byoc:git] Standby stray clean-up: '${g}': ${L(_)}`);
      }
    }
    for (let g of [...m].sort((d, _) => _.length - d.length))
      for (let d = g; d !== h && d.startsWith(h + Ye); d = dirname(d))
        try {
          await rmdir(d);
        } catch {
          break;
        }
    return (
      e.onDebug(
        `[byoc:git] Standby stray clean-up: removed ${S} of ${T.length} file(s) the interrupted checkout ${t.slice(0, 12)}\u2192${n.slice(0, 12)} added`,
      ),
      S
    );
  } catch (r) {
    e.onDebug(`[byoc:git] Standby stray clean-up failed: ${L(r)}`);
    return;
  }
}
function Et(e) {
  if (e.length === 0 || isAbsolute(e) || e.includes("\\")) return !1;
  let t = e.split("/");
  if (t.some((n) => n === "" || n === "." || n === "..")) return !1;
  return t[0].toLowerCase() !== ".git";
}
function St(e, t) {
  let n = [];
  if (t && e < Ce)
    n.push("-c", `http.lowSpeedLimit=${at}`, "-c", `http.lowSpeedTime=${ct}`);
  if (e >= 3) n.push("-c", "http.version=HTTP/1.1");
  return n;
}
var Tt = (e, t, n, r, i) => p(e, e.repoPath, t, n, r, i);
async function Oe(e, t, n, r = !1, i = Tt) {
  let s = Date.now(),
    u = 4000 + Math.random() * 4000,
    c = r && ut(),
    w = 0,
    T,
    h = [],
    S = (o) => (o.length <= Te ? o : truncateToCodeUnits(o, Pe) + "\u2026" + takeLastCodeUnits(o, Te - Pe - 1)),
    m = () => (h.length > 0 ? { attempt_errors: jsonStringify(h) } : {}),
    g = 0,
    d = 0,
    _ = (o) => ({
      failfast_aborts: String(g),
      client_aborts: String(d),
      ...(o?.transferBytes !== void 0 && {
        pack_bytes: String(o.transferBytes),
      }),
    });
  for (let o = 0; o < V; o++) {
    if (o > 0) {
      let R = u * (1 << (o - 1));
      (e.onDebug(
        `[byoc:git] Fetch retry ${o + 1}/${V}, backing off ${Math.round(R)}ms`,
      ),
        await sleep(R, e.signal, { throwOnAbort: !0 }));
    }
    let l = [
        "-c",
        "gc.auto=0",
        "-c",
        "maintenance.auto=false",
        ...St(o, r),
        ...t,
      ],
      Y =
        o === V - 1 || (c && o === K - 1 && w === K - 1)
          ? { ...process.env, GIT_TRACE_PACKET: "1" }
          : void 0,
      k = {};
    try {
      let R = le - (Date.now() - s);
      if ((await i(e, l, Y, Math.max(1, R), k), o > 0))
        e.onDebug(`[byoc:git] Fetch succeeded on attempt ${o + 1}`);
      return (
        M(e, "fetch", Date.now() - s, {
          attempts: String(o + 1),
          ..._(k),
          ...m(),
        }),
        !0
      );
    } catch (R) {
      T = R;
      let D = L(R);
      (e.onDebug(`[byoc:git] Fetch attempt ${o + 1} failed: ${D}`),
        h.push(S(redactSecrets(D))));
      let F = r && o < Ce && dt(D);
      if (k.killReason !== void 0) d++;
      else if (F) g++;
      if (
        ((w =
          (F || k.killReason === "silence" || k.killReason === "escalated") &&
          !k.sawClientProgress &&
          !k.sawRemoteActivity
            ? w + 1
            : 0),
        Date.now() - s >= le)
      )
        throw (
          e.onDebug(
            `[byoc:git] Fetch cumulative wall-clock ${Date.now() - s}ms \u2265 hard cap \u2014 not retrying`,
          ),
          M(e, "fetch", Date.now() - s, {
            attempts: String(o + 1),
            hard_cap: "true",
            ..._(),
            ...m(),
          }),
          Error(
            `git fetch failed (cumulative hard cap after ${o + 1} attempts): ${D}`,
          )
        );
      if (n && isMissingRemoteRefError(D) && !(await n())) return !1;
      if (isMissingRemoteRefError(D))
        throw (
          e.onDebug(
            "[byoc:git] Fetch error is permanent (ref not found on a non-empty remote) \u2014 skipping remaining retries",
          ),
          M(e, "fetch", Date.now() - s, {
            attempts: String(o + 1),
            permanent: "true",
            ..._(),
            ...m(),
          }),
          Error(`git fetch failed (permanent): ${D}`)
        );
      if (c && o === K - 1 && w === K)
        throw (
          e.onDebug(
            `[byoc:git] Fetch remote mute on all ${K} attempts (no progress, no remote activity) \u2014 giving up so the session can be reassigned`,
          ),
          M(e, "fetch", Date.now() - s, {
            attempts: String(o + 1),
            exhausted: "true",
            giveup: "mute",
            ..._(),
            ...m(),
          }),
          Error(
            `git fetch failed after ${o + 1} mute attempts (no progress, no remote activity; giving up early for reassignment): ${D}`,
          )
        );
    }
  }
  throw (
    M(e, "fetch", Date.now() - s, {
      attempts: String(V),
      exhausted: "true",
      ..._(),
      ...m(),
    }),
    Error(`git fetch failed after ${V} attempts: ${L(T)}`)
  );
}
async function Pt(e, t, n) {
  if (
    (
      await p(e, e.repoPath, ["branch", "--show-current"]).catch(() => "")
    ).trim() === t
  ) {
    e.onDebug(`[byoc:git] Already on target branch ${t}`);
    return;
  }
  if (await Le(e, t))
    (e.onDebug("[byoc:git] Target branch exists on remote, fetching"),
      await Ge(e, t, n));
  else
    (e.onDebug(`[byoc:git] Creating local branch ${t} from HEAD`),
      await p(e, e.repoPath, ["checkout", "-B", t]),
      await p(e, e.repoPath, [
        "update-ref",
        `refs/remotes/origin/${t}`,
        "HEAD",
      ]).catch(() => {}));
}
async function Ge(e, t, n) {
  (await Oe(
    e,
    ["fetch", ...Re(n), "--progress", "origin", t],
    void 0,
    n && ve(),
  ),
    await p(e, e.repoPath, [
      "checkout",
      "--progress",
      "--force",
      "-B",
      t,
      "FETCH_HEAD",
    ]));
}
async function Le(e, t) {
  try {
    return (
      (
        await p(e, e.repoPath, [
          "ls-remote",
          "--heads",
          e.authURL,
          `refs/heads/${t}`,
        ])
      ).trim().length > 0
    );
  } catch {
    return !1;
  }
}
async function $t(e, t) {
  try {
    return (
      await p(e, e.repoPath, ["rev-parse", "--verify", "--quiet", t]),
      !0
    );
  } catch {
    return !1;
  }
}
async function kt(e) {
  try {
    return (
      (
        await p(e, e.repoPath, ["ls-remote", "--symref", e.authURL, "HEAD"])
      ).trim() === ""
    );
  } catch {
    return !1;
  }
}
var GIT_PROXY_TOKEN_ENV_VAR = "SHR_GIT_PROXY_TOKEN",
  GIT_LFS_CONFIG_ARGS = ["-c", "lfs.locksverify=false"];
function buildCredentialHelperScript(e) {
  return `!f() { if test "$1" = get; then printf 'username=unused\\npassword=%s\\n' "$${e}"; fi; }; f`;
}
function buildTokenCredentialArgs(e) {
  let t = new URL(e).origin;
  return [
    "-c",
    "credential.helper=",
    "-c",
    `credential.${t}.helper=`,
    "-c",
    `credential.${t}.helper=${buildCredentialHelperScript(GIT_PROXY_TOKEN_ENV_VAR)}`,
  ];
}
function buildGitProxyArgs(e) {
  let n = ["", `${new URL(e).origin}.`, `${e}.`],
    r =
      process.env.HTTPS_PROXY ||
      process.env.https_proxy ||
      process.env.ALL_PROXY ||
      process.env.all_proxy ||
      "",
    i = r ? ["-c", `remote.origin.proxy=${r}`] : [];
  for (let s of n) {
    if (r) i.push("-c", `http.${s}proxy=${r}`);
    i.push("-c", `http.${s}sslVerify=true`);
  }
  return i;
}
var Rt = new Set(["fetch", "ls-remote"]);
function At(e) {
  for (let t = 0; t < e.length; t++) {
    if (e[t] === "-c" || e[t] === "--git-dir" || e[t] === "-C") {
      t++;
      continue;
    }
    return e[t];
  }
  return;
}
async function p(e, t, n, r, i = le, s) {
  let u = e.getAuthToken !== void 0,
    c = At(n),
    w = c !== void 0 && Rt.has(c),
    T = u && w ? e.getAuthToken() : void 0,
    h = [
      ...GIT_HARDENING_ARGS,
      "-c",
      "http.proxyAuthMethod=basic",
      ...(u && w ? buildGitProxyArgs(e.gitURL) : []),
      ...(T ? buildTokenCredentialArgs(e.gitURL) : []),
      ...(e.governedMount && w ? GIT_LFS_CONFIG_ARGS : []),
      ...n,
    ],
    S = T ?? e.token,
    m = h.map((F) => Ot(F, e.authURL, e.gitURL, S));
  e.onDebug(`[byoc:git] git ${m.join(" ")} (dir=${t || "."})`);
  let g = {
      ...process.env,
      ...r,
      ...(T ? { [GIT_PROXY_TOKEN_ENV_VAR]: T } : void 0),
      CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0,
      ...(u ? { GIT_CONFIG_GLOBAL: "/dev/null" } : void 0),
      GIT_TERMINAL_PROMPT: "0",
      GCM_INTERACTIVE: NONINTERACTIVE_GIT_ENV.GCM_INTERACTIVE,
      LC_ALL: "C",
      GIT_PROGRESS_DELAY: "0",
      ...GIT_BASE_ENV_OVERRIDES,
      ...(e.authURL.startsWith("file://") && {
        GIT_ALLOW_PROTOCOL: `file:${GIT_BASE_ENV_OVERRIDES.GIT_ALLOW_PROTOCOL}`,
      }),
      GIT_SSH_COMMAND: `${process.env.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o ConnectTimeout=30`,
    },
    { signal: d, dispose: _ } = Dt(e.signal, i),
    o = c !== void 0 && Qe.has(c) ? GIT_WORKTREE_TIMEOUT_MS : ze,
    l,
    P,
    Y = Date.now(),
    k = !1,
    R = { active: !1 },
    D = Date.now();
  try {
    return await new Promise((I, H) => {
      let C = spawn("git", h, {
          cwd: t || void 0,
          windowsHide: !0,
          ...Bs("helper"),
          env: g,
          stdio: ["ignore", "pipe", "pipe"],
        }),
        z = 10485760,
        x = 8192,
        X = 0,
        ee = [],
        U = "",
        he = !1,
        me = 0,
        te = -1,
        be,
        ne = (E) => {
          if (typeof E === "object" && "unref" in E) E.unref();
          return E;
        },
        W = !1,
        re,
        ye = (E) => {
          if (l === void 0) l = E;
          (C.kill("SIGTERM"),
            (re ??= ne(
              setTimeout(() => {
                if (W) return;
                (C.kill("SIGKILL"),
                  (l = "escalated"),
                  (W = !0),
                  H(
                    Object.assign(Error("git did not exit after SIGTERM"), {
                      stdout: Buffer.concat(ee).toString("utf8"),
                      stderr: U,
                    }),
                  ));
              }, ce),
            )));
        },
        ie = () => ne(setTimeout((E) => E("silence"), o, ye)),
        j = ie();
      (C.stdout.on("data", (E) => {
        if (X < 10485760) (ee.push(E), (X += E.length));
        else if (s) s.stdoutTruncated = !0;
      }),
        C.stderr.on("data", (E) => {
          let O = E.toString("utf8"),
            B = U + O;
          if (B.length > 8192) k = !0;
          U = B.slice(-8192);
          let q = xe(O, he),
            { display: v, client: N } = q;
          if (O.length > 0) he = !/[\r\n]$/.test(O);
          if (s !== void 0) {
            if ((tt(R, q, Date.now()), R.active)) s.sawRemoteActivity = !0;
          }
          if (N) {
            if (s !== void 0) s.sawClientProgress = !0;
            if (o < Se && rt(N)) ((o = Se), clearTimeout(j), (j = ie()));
            if (nt(P, N)) ((Y = Date.now()), clearTimeout(j), (j = ie()));
            if (
              ((P = N),
              s !== void 0 &&
                N.bytes !== void 0 &&
                N.label === Xe &&
                N.bytes > (s.transferBytes ?? -1))
            )
              s.transferBytes = N.bytes;
          }
          if (v) {
            if (v.label !== be) ((be = v.label), (te = -1));
            let Me = Math.floor(v.pct / 10),
              we = Date.now() - me;
            if (we >= Je && (we >= qe || Me > Math.floor(te / 10))) {
              ((me = Date.now()), (te = v.pct));
              try {
                (e.onDebug(`[byoc:git] ${c ?? "git"}: ${v.raw}`),
                  e.onProgress?.(c ?? "git", v));
              } catch {}
            }
          }
        }));
      let se = () => {
        if (e.signal?.aborted)
          (C.kill("SIGTERM"),
            (re ??= ne(
              setTimeout(() => {
                if (W) return;
                (C.kill("SIGKILL"), (W = !0));
                let E = Error("The operation was aborted");
                ((E.name = "AbortError"), H(Object.assign(E, { stderr: U })));
              }, ce),
            )));
        else ye("hard-cap");
      };
      if (d.aborted) se();
      else d.addEventListener("abort", se, { once: !0 });
      let ae;
      (C.on("error", (E) => {
        ae = E;
      }),
        C.on("close", (E, O) => {
          if (W) return;
          ((W = !0),
            clearTimeout(j),
            clearTimeout(re),
            d.removeEventListener("abort", se));
          let B = Buffer.concat(ee).toString("utf8");
          if (e.signal?.aborted && l === void 0) {
            let v = Error("The operation was aborted");
            return (
              (v.name = "AbortError"),
              H(Object.assign(v, { stdout: B, stderr: U, code: E, signal: O }))
            );
          }
          if (ae) return H(Object.assign(ae, { stdout: B, stderr: U }));
          if (E === 0) return I(B);
          let q = Error(
            O !== null
              ? `git exited on signal ${O}`
              : `git exited with code ${E}`,
          );
          H(Object.assign(q, { stdout: B, stderr: U, code: E, signal: O }));
        }));
    });
  } catch (F) {
    let I = F;
    if (l !== void 0) {
      let z = P
          ? ` at ${P.label} ${P.pct}%${P.total ? ` (${P.done}/${P.total})` : ""}`
          : "",
        x = Date.now() - Y,
        X =
          l === "silence"
            ? `no forward progress for ${x}ms (budget ${o}ms)${z}`
            : l === "hard-cap"
              ? `hard cap ${i}ms after ${Date.now() - D}ms${z}`
              : `did not exit within ${ce}ms of SIGTERM (D-state? \u2014 last forward ${x}ms ago)${z}`;
      e.onDebug(
        `[runner:stuck] git ${m.join(" ")} (dir=${t || "."}) \u2014 ${X} \u2014 killing subprocess`,
      );
    }
    let H =
        I.stderr !== void 0 && I.stderr.length > 0
          ? it(I.stderr, k, e.authURL, S)
          : Ne(redactGitCredentials(I.stdout || I.message || "", e.authURL, S)).slice(0, 2000),
      C = l !== void 0 ? ` (watchdog: ${l})` : "";
    throw Error(`git ${c ?? "?"} failed${C}: ${H}`);
  } finally {
    if (s !== void 0 && l !== void 0) s.killReason = l;
    _();
  }
}
function isSupportedGitUrl(e) {
  return (
    e.startsWith("https://") ||
    e.startsWith("http://") ||
    e.startsWith("ssh://") ||
    (!e.includes("://") && /^[A-Za-z0-9][A-Za-z0-9._-]*@[^:]+:/.test(e))
  );
}
function Dt(e, t) {
  let n = new AbortController(),
    r = setTimeout((u) => u.abort(), t, n);
  if (typeof r === "object" && "unref" in r) r.unref();
  let i;
  if (e) {
    if (e.aborted) {
      (clearTimeout(r), n.abort());
      let u = () => {};
      return { signal: n.signal, dispose: u, [Symbol.dispose]: u };
    }
    ((i = () => {
      (clearTimeout(r), n.abort());
    }),
      e.addEventListener("abort", i, { once: !0 }));
  }
  n.signal.addEventListener("abort", () => clearTimeout(r));
  let s = () => {
    if ((clearTimeout(r), e && i)) e.removeEventListener("abort", i);
  };
  return { signal: n.signal, dispose: s, [Symbol.dispose]: s };
}
function Ct(e) {
  if (e.url) {
    if (!isSupportedGitUrl(e.url))
      throw Error(
        `Unsupported git URL protocol (only https/http/ssh/user@host:path allowed): ${e.url}`,
      );
    return e.url;
  }
  switch (e.type) {
    case "github":
      return `https://github.com/${e.repo}`;
    case "github-ssh":
      throw Error(
        `github-ssh source for '${e.repo}' is missing url \u2014 SSH URLs are not synthesizable from slug alone`,
      );
    case "test-file":
      return `file://${e.repo}`;
    default:
      throw Error(`Unsupported git source type: ${e.type}`);
  }
}
function injectTokenIntoGitUrl(e, t) {
  if (!t) return e;
  if (e.startsWith("git@") || e.startsWith("ssh://")) return e;
  let n;
  try {
    n = new URL(e);
  } catch {
    return e;
  }
  if (n.protocol !== "https:") return e;
  if (t.startsWith("sk-ant-ccsr-")) ((n.username = "unused"), (n.password = t));
  else n.username = t;
  return n.toString();
}
function resolveCanonicalRepoPath(e, t) {
  if (t.type === "test-file") {
    let r = basename(t.repo);
    if (!r || r === "." || r === "..") return "";
    return G(e, r);
  }
  let n = t.repo.split("/").filter((r) => r.length > 0);
  if (n.length === 0) return "";
  for (let r of n) if (r === "." || r === "..") return "";
  return G(e, ...n);
}
function repoSlugToDirName(e) {
  let t = e.repo.split("/").filter((n) => n.length > 0);
  for (let n of t) if (n === "." || n === "..") return "";
  return t.join("-");
}
async function addSessionWorktree(e) {
  let {
    canonicalRepoPath: t,
    worktreePath: n,
    ref: r,
    onDebug: i,
    signal: s,
  } = e;
  if (n === t)
    throw Error(
      "addSessionWorktree: worktreePath must not equal canonicalRepoPath",
    );
  let u = { repoPath: t, gitURL: "", authURL: "", onDebug: i, signal: s },
    c = (
      await p(u, t, ["rev-parse", "--verify", "FETCH_HEAD^{commit}"])
    ).trim(),
    w;
  try {
    w = (
      await p(u, n, ["--git-dir", G(n, ".git"), "rev-parse", "HEAD"])
    ).trim();
  } catch (h) {
    if (s?.aborted) throw h;
  }
  if (w === c) {
    let h = (await p(u, n, ["rev-parse", "--absolute-git-dir"])).trim();
    (await writeFile(
      G(h, "FETCH_HEAD"),
      `${c}
`,
    ).catch(() => {}),
      i(
        `[byoc:git] Worktree ${n} already at ${c.slice(0, 12)} \u2014 keeping`,
      ));
    return;
  }
  (i(
    w
      ? `[byoc:git] Worktree ${n} at wrong commit ${w.slice(0, 12)}, clearing before re-add`
      : `[byoc:git] Clearing ${n} before worktree add`,
  ),
    await raceWithTimeout(
      Be(n, { recursive: !0, force: !0 }),
      GIT_WORKTREE_TIMEOUT_MS,
      `[runner:stuck] rm ${n} (check NFS/CSI mount health)`,
    ).catch((h) => {
      i(`[byoc:git] rm ${n} failed (continuing): ${h}`);
    }),
    await p(u, t, ["worktree", "prune"]).catch((h) => {
      i(`[byoc:git] worktree prune failed (continuing): ${h}`);
    }),
    await p(u, t, ["worktree", "add", "--detach", n, c]));
  let T = (await p(u, n, ["rev-parse", "--absolute-git-dir"])).trim();
  (await writeFile(
    G(T, "FETCH_HEAD"),
    `${c}
`,
  ),
    i(`[byoc:git] Added worktree ${n} at ${c.slice(0, 12)} (detached)`));
}
async function removeSessionWorktrees(e) {
  let { worktrees: t, onDebug: n, signal: r } = e,
    i = new Set();
  for (let { canonicalRepoPath: s, worktreePath: u } of t) {
    i.add(s);
    let c = { repoPath: s, gitURL: "", authURL: "", onDebug: n, signal: r };
    try {
      if (!(await isPathSafeToRemove(u))) {
        n(`[byoc:git] kept worktree ${u} \u2014 unremovable reparse point`);
        continue;
      }
      (await p(c, s, ["worktree", "remove", "--force", u]),
        n(`[byoc:git] Removed worktree ${u}`));
    } catch (w) {
      n(`[byoc:git] worktree remove ${u} failed: ${w}`);
    }
  }
  for (let s of i)
    await p(
      { repoPath: s, gitURL: "", authURL: "", onDebug: n, signal: r },
      s,
      ["worktree", "prune"],
    ).catch((c) => {
      n(`[byoc:git] worktree prune ${s} failed: ${c}`);
    });
}
function vt(e) {
  let t = new Map();
  for (let n of e) {
    let r = n.branches ?? [],
      [i, ...s] = r;
    if (s.length > 0)
      throw Error(
        `Outcome for ${n.repo} has ${r.length} branches, expected 0 or 1`,
      );
    if (i) t.set(n.repo, i);
  }
  return t;
}
function Ot(e, t, n, r) {
  if (e === t && e !== n) return pe(e);
  if (e.includes("://") && e.includes("@")) return pe(e);
  if (r && e.includes(r)) return e.split(r).join("<token>");
  return e;
}
function redactGitCredentials(e, t, n) {
  if (t && /:\/\/[^/]*@/.test(t)) e = e.split(t).join(pe(t));
  if (n) e = e.split(n).join("<token>");
  return e
    .replace(/sk-ant-ccsr-[A-Za-z0-9_.-]+/g, "<token>")
    .replace(/sk-ant-[A-Za-z0-9_.-]+/g, "<token>")
    .replace(/github_pat_[A-Za-z0-9_]+/g, "<token>")
    .replace(/gh[psour]_[A-Za-z0-9]+/g, "<token>")
    .replace(
      /gl(?:pat|dt|rt|ft|soat|oas|agent|ptt|cbt|imt|ffct)-[A-Za-z0-9_=-]+(?:\.[0-9a-z]{9})?/g,
      "<token>",
    );
}
function pe(e) {
  let t;
  try {
    t = new URL(e);
  } catch {}
  if (t && (t.username || t.password)) {
    let i = t.search || "",
      s = t.hash || "";
    return `${t.protocol}//<token>@${t.host}${t.pathname}${i}${s}`;
  }
  if (t) return e;
  let n = e.indexOf("@"),
    r = e.indexOf("://");
  if (r >= 0 && n > r) return e.slice(0, r + 3) + "<token>" + e.slice(n);
  return e;
}
function L(e) {
  return e instanceof Error ? e.message : String(e);
}
var Ie = /^(remote:\s+)?(fatal|error):/i;
function Ne(e) {
  if (!e) return "";
  let t = [];
  for (let r of e.split(`
`))
    if (Ie.test(r)) t.push(r);
  if (t.length === 0) return e;
  let n = t.join(`
`);
  if (e.startsWith(n)) return e;
  return (
    n +
    `
` +
    e
  );
}
export {
  GIT_WORKTREE_TIMEOUT_MS,
  isMissingRemoteRefError,
  GIT_HARDENING_ARGS,
  GIT_BASE_ENV_OVERRIDES,
  prepareGitSources,
  isSupportedSourceType,
  GIT_PROXY_TOKEN_ENV_VAR,
  GIT_LFS_CONFIG_ARGS,
  buildCredentialHelperScript,
  buildTokenCredentialArgs,
  buildGitProxyArgs,
  isSupportedGitUrl,
  injectTokenIntoGitUrl,
  resolveCanonicalRepoPath,
  repoSlugToDirName,
  addSessionWorktree,
  removeSessionWorktrees,
  redactGitCredentials,
};
