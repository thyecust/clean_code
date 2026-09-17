// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { beforeFirst } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { GIT_HARDENED_ARGS, execFileNoThrowWithCwd } from "./git-exec-hardening.js";
import { getGitRepoCache, gitExe, redactGitRemoteCredentials } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { isGitHubHost } from "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import { getGitProvider, parseRemoteHostname } from "../../01-核心基础设施/共享小工具-未细化/git-remote-url.js";
var REPO_PATH_SEGMENT_PATTERN = String.raw`(?!\.{1,2}(?:/|$))[A-Za-z0-9_.][\w.-]*`,
  HOSTNAME_PATTERN = String.raw`[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*`,
  GITLAB_MERGE_REQUEST_PATH_PATTERN = `(?:${REPO_PATH_SEGMENT_PATTERN}/)+${REPO_PATH_SEGMENT_PATTERN}/-/merge_requests`,
  GERRIT_REVIEW_HOST_PATTERN = String.raw`[a-z0-9-]+-review\.googlesource\.com`,
  GERRIT_CHANGE_URL_REGEX = new RegExp(String.raw`^https://${GERRIT_REVIEW_HOST_PATTERN}/c/(?:${REPO_PATH_SEGMENT_PATTERN}/)*${REPO_PATH_SEGMENT_PATTERN}/\+/\d{1,9}$`),
  GITLAB_MERGE_REQUEST_URL_REGEX = new RegExp(`^https?://${HOSTNAME_PATTERN}(?::\\d{1,5})?/${GITLAB_MERGE_REQUEST_PATH_PATTERN}/\\d+$`),
  MAX_URL_LENGTH = 2048;
function isGitLabMergeRequestUrl(t) {
  return /\/-\/merge_requests\/\d/.test(t);
}
var b = 21;
function isNestedGitLabProject(t) {
  return t.owner.includes("/");
}
function clearRepositoryCaches() {
  (getGitRepoCache().repositoryByCwd.clear(), getGitRepoCache().remoteHostByCwd.clear());
}
async function detectCurrentRepository() {
  let t = await detectCurrentRepositoryWithHost();
  if (!t) return null;
  if (!isGitHubHost(t.host)) return null;
  return `${t.owner}/${t.name}`;
}
class y {
  guards = null;
  setGuards(t) {
    this.guards = t;
  }
  blocked() {
    if (!this.guards) return !0;
    try {
      return !this.guards.trustProbe();
    } catch {
      return !0;
    }
  }
}
var _ = new j(() => new y());
function repoDetectionGuards() {
  return _.of(B().host);
}
function setRepoDetectionGuards(t) {
  repoDetectionGuards().setGuards(t);
}
async function resolveRemote(t) {
  if (repoDetectionGuards().blocked()) return null;
  let r = await execFileNoThrowWithCwd(gitExe(), [...GIT_HARDENED_ARGS, "remote", "get-url", "origin"], {
    cwd: t,
    preserveOutputOnError: !1,
  });
  if (r.code === 0 && r.stdout.trim())
    return { name: "origin", url: r.stdout.trim() };
  let e = await execFileNoThrowWithCwd(gitExe(), [...GIT_HARDENED_ARGS, "remote"], {
      cwd: t,
      preserveOutputOnError: !1,
    }),
    o =
      e.code === 0
        ? beforeFirst(
            e.stdout.trim(),
            `
`,
          ).trim()
        : void 0;
  if (!o) return null;
  let l = await execFileNoThrowWithCwd(gitExe(), [...GIT_HARDENED_ARGS, "remote", "get-url", o], {
      cwd: t,
      preserveOutputOnError: !1,
    }),
    s = l.code === 0 ? l.stdout.trim() : "";
  return s ? { name: o, url: s } : null;
}
async function resolveRemoteUrl(t) {
  return (await resolveRemote(t))?.url ?? null;
}
async function resolvePushRemoteUrl(t) {
  return (await G(t)).url;
}
async function G(t) {
  if (repoDetectionGuards().blocked()) return { url: null, answered: !1 };
  let {
      stdout: r,
      code: e,
      exitCode: o,
    } = await execFileNoThrowWithCwd(gitExe(), [...GIT_HARDENED_ARGS, "remote", "get-url", "--push", "origin"], {
      cwd: t,
      preserveOutputOnError: !1,
    }),
    l = e === 0 ? r.trim() || null : null;
  return { url: l, answered: l !== null || o === 2 };
}
async function detectCurrentRepositoryWithHost(t, r) {
  let e = t ?? getCwd(),
    o = getGitRepoCache().repositoryByCwd;
  if (!r?.skipCache && o.has(e)) {
    let s = o.get(e) ?? null;
    if (!s || !isNestedGitLabProject(s)) return s;
  }
  let l = () => {
    let s = o.get(e);
    if (s && isNestedGitLabProject(s)) o.delete(e);
  };
  try {
    let s = await resolveRemoteUrl(e);
    if ((logForDebugging(`Git remote URL: ${redactGitRemoteCredentials(s)}`), !s))
      return (
        logForDebugging("No git remote URL found"),
        getGitRepoCache().remoteHostByCwd.delete(e),
        l(),
        null
      );
    let u = null,
      i = ((g) => {
        let p = parseGitRemote(g);
        if (p && isNestedGitLabProject(p)) return ((u ??= p), null);
        return p;
      })(s),
      h = !1;
    if (!i) {
      let {
          stdout: g,
          code: p,
          exitCode: E,
        } = await execFileNoThrowWithCwd(gitExe(), [...GIT_HARDENED_ARGS, "config", "--get", "remote.origin.url"], {
          cwd: e,
          preserveOutputOnError: !1,
        }),
        d = p === 0 ? g.trim() : null,
        x = d !== null || E === 1;
      if (d && d !== s) {
        if (((i = parseGitRemote(d)), i && isNestedGitLabProject(i))) ((u ??= i), (i = null));
      }
      if (!i) {
        let w = await G(e),
          f = w.url;
        if (f && f !== s && f !== d) {
          if (((i = parseGitRemote(f)), i && isNestedGitLabProject(i))) ((u ??= i), (i = null));
        }
        h = x && w.answered;
      }
    }
    ((i ??= u),
      logForDebugging(
        `Parsed repository: ${i ? `${i.host}/${i.owner}/${i.name}` : null} from URL: ${redactGitRemoteCredentials(s)}`,
      ));
    let R = i?.host ?? parseRemoteHostname(s);
    if (R) getGitRepoCache().remoteHostByCwd.set(e, R);
    else getGitRepoCache().remoteHostByCwd.delete(e);
    if (i) o.set(e, i);
    else if (h) o.delete(e);
    return i;
  } catch (s) {
    return (logForDebugging(`Error detecting repository: ${s}`), l(), null);
  }
}
function getCachedRepository() {
  let t = getGitRepoCache().repositoryByCwd.get(getCwd());
  if (!t || !isGitHubHost(t.host)) return null;
  return `${t.owner}/${t.name}`;
}
function getCachedRepositoryHost() {
  return getGitRepoCache().repositoryByCwd.get(getCwd())?.host ?? null;
}
function isGitLabMrTarget(t) {
  if (isGitLabMergeRequestUrl(t) || /^!\d+$/.test(t)) return !0;
  if (/^https?:\/\//i.test(t)) return !1;
  let r = getCachedRepositoryHost();
  return r !== null && getGitProvider(r) === "gitlab";
}
function glabMrId(t) {
  let e =
    /\/-\/merge_requests\/(\d+)/.exec(t)?.[1] ?? t.replace(/^!(\d+)$/, "$1");
  return /^[A-Za-z0-9][A-Za-z0-9._\/-]*$/.test(e) ? e : "";
}
var C = new RegExp(
  `^(https?://${HOSTNAME_PATTERN}(?::\\d{1,5})?/(?:${REPO_PATH_SEGMENT_PATTERN}/)+${REPO_PATH_SEGMENT_PATTERN})/-/merge_requests/\\d`,
);
function glabMrProjectUrl(t) {
  return C.exec(t)?.[1] ?? null;
}
function getCachedRemoteHost() {
  return getGitRepoCache().remoteHostByCwd.get(getCwd()) ?? null;
}
function isCachedGitHubRepo() {
  let t = getCwd(),
    r = getGitRepoCache().repositoryByCwd;
  if (!r.has(t)) return;
  let e = r.get(t);
  return !!e && isGitHubHost(e.host);
}
function parseGitRemote(t) {
  let r = t.trim(),
    e = r.match(/^git@([^:/@]+):([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (e?.[1] && e[2] && e[3]) {
    if (!m(e[1])) return null;
    if (!c(e[2]) || !c(e[3])) return null;
    return { host: e[1], owner: e[2], name: e[3] };
  }
  let o = r.match(
    /^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/,
  );
  if (o?.[1] && o[2] && o[3] && o[4]) {
    let l = o[1],
      s = o[2],
      u = beforeFirst(s, ":");
    if (!m(u)) return null;
    let a = l === "https" || l === "http" ? s : u;
    if (!c(o[3]) || !c(o[4])) return null;
    return { host: a, owner: o[3], name: o[4] };
  }
  return P(r);
}
function P(t) {
  let r,
    e,
    o,
    l = t.match(/^git@([^:/@]+):(.+?)(?:\.git)?\/?$/);
  if (l?.[1] && l[2]) ((e = l[1]), (o = l[2]));
  else {
    let a = t.match(
      /^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/(.+?)(?:\.git)?\/?$/,
    );
    if (!a?.[1] || !a[2] || !a[3]) return null;
    ((r = a[1]), (e = a[2]), (o = a[3]));
  }
  let s = beforeFirst(e, ":");
  if (!m(s) || getGitProvider(s) !== "gitlab") return null;
  let u = o.split("/");
  if (u.length < 3 || u.length > b + 1 || !u.every(c)) return null;
  return {
    host: r === "https" || r === "http" ? e : s,
    owner: u.slice(0, -1).join("/"),
    name: u.at(-1),
  };
}
function parseRepoSlug(t) {
  let r = t
    .trim()
    .replace(/\/+$/, "")
    .replace(/^[a-z][a-z0-9+.-]*:\/\/[^/]*/i, "")
    .match(/(?:[:/]|^)([^/:]+)\/([^/:]+?)(?:\.git)?$/);
  if (!r?.[1] || !r[2]) return null;
  if (!c(r[1]) || !c(r[2])) return null;
  return { owner: r[1], name: r[2] };
}
function parseGitHubRepository(t) {
  let r = t.trim(),
    e = parseGitRemote(r);
  if (e) {
    if (!isGitHubHost(e.host)) return null;
    return `${e.owner}/${e.name}`;
  }
  if (!r.includes("://") && !r.includes("@") && r.includes("/")) {
    let o = r.split("/");
    if (o.length === 2 && o[0] && o[1]) {
      let l = o[1].replace(/\.git$/, "");
      if (!c(o[0]) || !c(l)) return null;
      return `${o[0]}/${l}`;
    }
  }
  return (logForDebugging(`Could not parse repository from: ${r}`), null);
}
var A = /^[A-Za-z0-9._-]+$/;
function c(t) {
  return A.test(t) && !t.startsWith("-") && t !== "." && t !== "..";
}
function m(t) {
  if (!/^[A-Za-z0-9.-]+$/.test(t) || t.startsWith("-") || !t.includes("."))
    return !1;
  let r = t.split(".").pop();
  if (!r) return !1;
  return /^[a-zA-Z]+$/.test(r);
}
export {
  REPO_PATH_SEGMENT_PATTERN,
  HOSTNAME_PATTERN,
  GITLAB_MERGE_REQUEST_PATH_PATTERN,
  GERRIT_REVIEW_HOST_PATTERN,
  GERRIT_CHANGE_URL_REGEX,
  GITLAB_MERGE_REQUEST_URL_REGEX,
  MAX_URL_LENGTH,
  isGitLabMergeRequestUrl,
  isNestedGitLabProject,
  clearRepositoryCaches,
  detectCurrentRepository,
  repoDetectionGuards,
  setRepoDetectionGuards,
  resolveRemote,
  resolveRemoteUrl,
  resolvePushRemoteUrl,
  detectCurrentRepositoryWithHost,
  getCachedRepository,
  getCachedRepositoryHost,
  isGitLabMrTarget,
  glabMrId,
  glabMrProjectUrl,
  getCachedRemoteHost,
  isCachedGitHubRepo,
  parseGitRemote,
  parseRepoSlug,
  parseGitHubRepository,
};
