// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K, he, sn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { ot } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { execFileNoThrowWithCwd } from "../Git-Worktree/chunk-9ys1bnqr.js";
import { jn, Pt, Ks, findGitRoot, gitExe } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { OP, Vet, Ket } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getInitialSettings } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { kJ, MK, UTt } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { dUt, t3, Qqn, uX, createBaseHookInput, executeFileSuggestionCommand } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { toESM } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var w = toESM(kJ(), 1);
import { statSync } from "fs";
import * as m from "path";
function M() {
  return {
    fileIndex: null,
    fileListRefreshPromise: null,
    cacheGeneration: 0,
    untrackedFetchPromise: null,
    cachedTrackedFiles: [],
    cachedConfigFiles: [],
    cachedTrackedDirs: [],
    ignorePatternsCache: null,
    ignorePatternsCacheKey: null,
    lastRefreshMs: 0,
    lastScanDurationMs: null,
    lastGitIndexMtime: null,
    loadedTrackedSignature: null,
    loadedMergedSignature: null,
    normalizedTrackedInputs: null,
    indexBuildComplete: Le(),
  };
}
var globalFileIndexCache = M();
function resetFileIndexCache(e) {
  ((e.fileIndex = null),
    (e.fileListRefreshPromise = null),
    e.cacheGeneration++,
    (e.untrackedFetchPromise = null),
    (e.cachedTrackedFiles = []),
    (e.cachedConfigFiles = []),
    (e.cachedTrackedDirs = []),
    (e.ignorePatternsCache = null),
    (e.ignorePatternsCacheKey = null),
    (e.lastRefreshMs = 0),
    (e.lastScanDurationMs = null),
    (e.lastGitIndexMtime = null),
    (e.loadedTrackedSignature = null),
    (e.loadedMergedSignature = null),
    (e.normalizedTrackedInputs = null));
}
function C(e) {
  let r = e.length,
    s = Math.max(1, Math.floor(r / 500)),
    t = -2128831035;
  for (let a = 0; a < r; a += s) {
    let o = e[a];
    for (let g = 0; g < o.length; g++)
      t = ((t ^ o.charCodeAt(g)) * 16777619) | 0;
    t = (t * 16777619) | 0;
  }
  if (r > 0) {
    let a = e[r - 1];
    for (let o = 0; o < a.length; o++)
      t = ((t ^ a.charCodeAt(o)) * 16777619) | 0;
  }
  return `${r}:${(t >>> 0).toString(16)}`;
}
function G() {
  let e = findGitRoot(Q());
  if (!e) return null;
  try {
    return statSync(m.join(e, ".git", "index")).mtimeMs;
  } catch {
    return null;
  }
}
async function y(e, r, s) {
  if (s === r) return e;
  let t = Array(e.length),
    a = performance.now();
  for (let o = 0; o < e.length; o++) {
    let g = m.join(r, e[o]);
    if (
      ((t[o] = m.relative(s, g)),
      (o & 255) === 255 && performance.now() - a > Vet)
    )
      (await OP(), (a = performance.now()));
  }
  return t;
}
async function v(e, r) {
  if (r.length === 0) return;
  if (!e.fileIndex) return;
  let s = await b(r),
    t = [
      ...e.cachedTrackedFiles,
      ...e.cachedConfigFiles,
      ...e.cachedTrackedDirs,
      ...r,
      ...s,
    ],
    a = C(t);
  if (a === e.loadedMergedSignature) {
    n("[FileIndex] skipped index rebuild \u2014 merged paths unchanged");
    return;
  }
  if (await e.fileIndex.loadFromFileListAsync(t).done)
    ((e.loadedMergedSignature = a),
      n(
        `[FileIndex] rebuilt index with ${e.cachedTrackedFiles.length} tracked + ${r.length} untracked files`,
      ));
}
async function P(e, r, s) {
  let t = `${r}:${s}`;
  if (e.ignorePatternsCacheKey === t) return e.ignorePatternsCache;
  let a = ae(),
    o = [".ignore", ".rgignore"],
    g = dedupe([r, s]),
    c = w.default(),
    u = !1,
    f = g.flatMap((x) => o.map((F) => m.join(x, F))),
    d = await Promise.all(
      f.map((x) => a.readFile(x, { encoding: "utf8" }).catch(() => null)),
    );
  for (let [x, F] of d.entries()) {
    if (F === null) continue;
    (c.add(MK(UTt(F), "file_suggestions_ignore")),
      (u = !0),
      n(`[FileIndex] loaded ignore patterns from ${f[x]}`));
  }
  let p = u ? c : null;
  return ((e.ignorePatternsCache = p), (e.ignorePatternsCacheKey = t), p);
}
async function T(e, r) {
  let s = [],
    t = performance.now();
  for (let a = 0; a < r.length; a++) {
    let o = r[a];
    if (!w.default.isPathValid(o) || !e.ignores(o)) s.push(o);
    if ((a & 255) === 255 && performance.now() - t > Vet)
      (await OP(), (t = performance.now()));
  }
  return s;
}
async function j(e, r, s) {
  let t = Date.now(),
    a = e.cacheGeneration;
  n("[FileIndex] getFilesUsingGit called");
  let o = findGitRoot(Q());
  if (!o) return (n("[FileIndex] not a git repo, returning null"), null);
  try {
    let g = Q(),
      c = Date.now(),
      u = await execFileNoThrowWithCwd(
        gitExe(),
        ["-c", "core.quotepath=false", "ls-files", "--recurse-submodules"],
        { timeout: 5000, abortSignal: r, cwd: o },
      );
    if (
      (n(`[FileIndex] git ls-files (tracked) took ${Date.now() - c}ms`),
      u.code !== 0)
    )
      return (
        n(
          `[FileIndex] git ls-files failed (code=${u.code}, stderr=${u.stderr}), falling back to ripgrep`,
        ),
        null
      );
    let f = e.normalizedTrackedInputs,
      d,
      p = null;
    if (
      f !== null &&
      f.repoRoot === o &&
      f.cwd === g &&
      f.rawStdout === u.stdout &&
      e.cachedTrackedFiles.length > 0
    )
      ((d = e.cachedTrackedFiles),
        n(
          "[FileIndex] skipped path normalization \u2014 raw git paths unchanged",
        ));
    else {
      let F = u.stdout
        .trim()
        .split(
          `
`,
        )
        .filter(Boolean);
      d = await y(F, o, g);
      let k = await P(e, o, g);
      if (k) {
        let _ = d.length;
        ((d = await T(k, d)),
          n(`[FileIndex] applied ignore patterns: ${_} -> ${d.length} files`));
      }
      p = { repoRoot: o, cwd: g, rawStdout: u.stdout };
    }
    if (a !== e.cacheGeneration)
      return (
        n(
          "[FileIndex] discarding refresh results \u2014 cache was reset mid-refresh",
        ),
        d
      );
    if (p !== null) e.normalizedTrackedInputs = p;
    e.cachedTrackedFiles = d;
    let x = Date.now() - t;
    return (
      n(`[FileIndex] git ls-files: ${d.length} tracked files in ${x}ms`),
      logEvent("tengu_file_suggestions_git_ls_files", {
        file_count: d.length,
        tracked_count: d.length,
        untracked_count: 0,
        duration_ms: x,
      }),
      H(e, o, g, s),
      d
    );
  } catch (g) {
    return (n(`[FileIndex] git ls-files error: ${l(g)}`), null);
  }
}
async function b(e) {
  let r = new Set(),
    s = performance.now();
  for (let t = 0; t < e.length; t++)
    if ((L(e, t, t + 1, r), (t & 255) === 255 && performance.now() - s > Vet))
      (await OP(), (s = performance.now()));
  return [...r].map((t) => t + m.sep);
}
function L(e, r, s, t) {
  for (let a = r; a < s; a++) {
    let o = m.dirname(e[a]);
    while (o !== "." && !t.has(o)) {
      let g = m.dirname(o);
      if (g === o) break;
      (t.add(o), (o = g));
    }
  }
}
async function A(e, r) {
  return (await Promise.all(Qqn.map((t) => uX(t, e, r)))).flatMap((t) =>
    t.map((a) => a.filePath),
  );
}
async function E(e, r, s) {
  n(`[FileIndex] getProjectFiles called, respectGitignore=${s}`);
  let t = await j(e, r, s);
  if (t !== null)
    return (n(`[FileIndex] using git ls-files result (${t.length} files)`), t);
  n("[FileIndex] git ls-files returned null, falling back to ripgrep");
  let a = Date.now(),
    o = Q(),
    g = null,
    c;
  {
    let d = [
      "--files",
      "--follow",
      "--hidden",
      "--glob",
      "!.git/",
      "--glob",
      "!.svn/",
      "--glob",
      "!.hg/",
      "--glob",
      "!.bzr/",
      "--glob",
      "!.jj/",
      "--glob",
      "!.sl/",
    ];
    if (!s) d.push("--no-ignore-vcs");
    c = await t3(d, o, r);
  }
  let u = c.map((d) => m.relative(o, d)),
    f = Date.now() - a;
  return (
    n(`[FileIndex] ripgrep: ${u.length} files in ${f}ms`),
    logEvent("tengu_file_suggestions_ripgrep", {
      file_count: u.length,
      duration_ms: f,
    }),
    u
  );
}
async function N(e, r) {
  let s = AbortSignal.timeout(1e4),
    t = (e.fileIndex ??= new Ket());
  try {
    let a = getInitialSettings(),
      o = ee(),
      g = a.respectGitignore ?? o.respectGitignore ?? !0,
      c = Q(),
      [u, f] = await Promise.all([E(e, s, g), A(c, r)]);
    e.cachedConfigFiles = f;
    let d = [...u, ...f],
      p = await b(d);
    e.cachedTrackedDirs = p;
    let x = [...p, ...d],
      F = C(x);
    if (F !== e.loadedTrackedSignature) {
      if (await t.loadFromFileListAsync(x).done)
        ((e.loadedTrackedSignature = F), (e.loadedMergedSignature = null));
    } else
      n("[FileIndex] skipped index rebuild \u2014 tracked paths unchanged");
  } catch (a) {
    n(`[FileIndex] getPathsForSuggestions failed: ${l(a)}`, { level: "error" });
  }
  return t;
}
function B(e, r) {
  let s = Math.min(e.length, r.length),
    t = 0;
  while (t < s && e[t] === r[t]) t++;
  return e.substring(0, t);
}
function findLongestCommonPrefix(e) {
  if (e.length === 0) return "";
  let r = e.map((t) => t.displayText),
    s = r[0];
  for (let t = 1; t < r.length; t++) {
    let a = r[t];
    if (((s = B(s, a)), s === "")) return "";
  }
  return s;
}
function I(e, r) {
  return {
    id: `file-${e}`,
    displayText: e,
    metadata: r !== void 0 ? { score: r } : void 0,
  };
}
var S = 15,
  z = 5000,
  q = 1000;
function startBackgroundCacheRefresh(e, r) {
  if (e.fileListRefreshPromise) return;
  let s = G();
  if (e.fileIndex) {
    if (
      s === null &&
      e.lastRefreshMs > 0 &&
      e.lastScanDurationMs !== null &&
      e.lastScanDurationMs > q
    )
      return;
    if (
      !(s !== null && s !== e.lastGitIndexMtime) &&
      Date.now() - e.lastRefreshMs < z
    )
      return;
  }
  let t = e.cacheGeneration,
    a = Date.now();
  ((e.fileIndex ??= new Ket()),
    (e.fileListRefreshPromise = N(e, r)
      .then((o) => {
        if (t !== e.cacheGeneration) return o;
        ((e.fileListRefreshPromise = null),
          e.indexBuildComplete.emit(),
          (e.lastGitIndexMtime = s));
        let g = Date.now();
        return (
          (e.lastRefreshMs = g),
          (e.lastScanDurationMs = g - a),
          n(`[FileIndex] cache refresh completed in ${e.lastScanDurationMs}ms`),
          o
        );
      })
      .catch((o) => {
        if (
          (n(`[FileIndex] Cache refresh failed: ${l(o)}`),
          logError(o),
          t === e.cacheGeneration)
        )
          e.fileListRefreshPromise = null;
        return (e.fileIndex ??= new Ket());
      })));
}
async function O() {
  let e = ae(),
    r = Q();
  try {
    return (await e.readdir(r)).map((t) => {
      let a = m.join(r, t.name),
        o = m.relative(r, a);
      return t.isDirectory() ? o + m.sep : o;
    });
  } catch (s) {
    return (
      n(`[FileSuggestions] readdir failed for cwd: ${l(s)}`, {
        level: "error",
      }),
      []
    );
  }
}
async function generateFileSuggestions(e, r, s = !1, t) {
  if (Pt()) {
    if (!r && !s) return [];
    return U(r);
  }
  if (!r && !s) return [];
  if (dUt(getInitialSettings().fileSuggestion)?.type === "command") {
    let g = { id: K(), project: { originalCwd: he(), projectRoot: sn() } },
      c = { ...createBaseHookInput(g, Q()), query: r };
    return (await executeFileSuggestionCommand(g, c)).slice(0, S).map(I);
  }
  if (r === "" || r === "." || r === "./") {
    let g = await O();
    return (startBackgroundCacheRefresh(e, t), g.slice(0, S).map(I));
  }
  let o = Date.now();
  try {
    let g = e.fileListRefreshPromise !== null;
    startBackgroundCacheRefresh(e, t);
    let c = r,
      u = "." + m.sep;
    if (r.startsWith(u)) c = r.substring(2);
    if (c.startsWith("~")) c = ot(c);
    let f = e.fileIndex
        ? e.fileIndex.search(c, S).map((p) => I(p.path, p.score))
        : [],
      d = Date.now() - o;
    return (
      n(
        `[FileIndex] generateFileSuggestions: ${f.length} results in ${d}ms (${g ? "partial" : "full"} index)`,
      ),
      logEvent("tengu_file_suggestions_query", {
        duration_ms: d,
        cache_hit: !g,
        result_count: f.length,
        query_length: r.length,
      }),
      f
    );
  } catch (g) {
    return (logError(g), []);
  }
}
async function U(e) {
  let r = jn();
  if (!r || !Ks()) return [];
  try {
    return (
      await r.sendControlRequest({ subtype: "file_suggestions", query: e })
    ).suggestions.map((t) => I(t.path, t.score));
  } catch (s) {
    return (n(`[FileIndex] remote file_suggestions RPC failed: ${l(s)}`), []);
  }
}
function applyFileSuggestion({
  suggestion: e,
  input: r,
  partialPath: s,
  startPos: t,
  onInputChange: a,
  setCursorOffset: o,
}) {
  let g = typeof e === "string" ? e : e.displayText,
    c = r.substring(0, t) + g + r.substring(t + s.length);
  a(c);
  let u = t + g.length;
  return (o(u), c);
}
function H(e, r, s, t) {
  if (e.untrackedFetchPromise) return;
  let a = t
      ? [
          "-c",
          "core.quotepath=false",
          "ls-files",
          "--others",
          "--exclude-standard",
        ]
      : ["-c", "core.quotepath=false", "ls-files", "--others"],
    o = e.cacheGeneration;
  e.untrackedFetchPromise = execFileNoThrowWithCwd(gitExe(), a, { timeout: 1e4, cwd: r })
    .then(async (g) => {
      if (o !== e.cacheGeneration) return;
      if (g.code !== 0) return;
      let c = g.stdout
          .trim()
          .split(
            `
`,
          )
          .filter(Boolean),
        u = await y(c, r, s),
        f = await P(e, r, s);
      if (f && u.length > 0) {
        let d = u.length;
        ((u = await T(f, u)),
          n(
            `[FileIndex] applied ignore patterns to untracked: ${d} -> ${u.length} files`,
          ));
      }
      return (
        n(`[FileIndex] background untracked fetch: ${u.length} files`),
        v(e, u)
      );
    })
    .catch((g) => {
      n(`[FileIndex] background untracked fetch failed: ${g}`);
    })
    .finally(() => {
      e.untrackedFetchPromise = null;
    });
}
export { globalFileIndexCache, resetFileIndexCache, findLongestCommonPrefix, startBackgroundCacheRefresh, generateFileSuggestions, applyFileSuggestion };
