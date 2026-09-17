// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, he, z1 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie, po } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { getBridgeCarrierEnvVarsToScrub, BG_DISPATCHER_ENV_VARS } from "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
import { resolveExecutablePath, env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { jsonParse } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import {
  isRegistryIndexVar,
  isIndexVarOrAliasSet,
  sanitizeIndexUrlValue,
  getIndexVarAliasAssignment,
  getScrubbedEnvVarNames,
  initEnvScrubEnabled,
  resetEnvScrubEnabled,
  CREDENTIAL_ENV_VAR_NAMES,
  isGitConfigOrProxyVar,
  sanitizeBuildToolEnvValue,
  isCredentialEnvVarName,
  BUNDLE_SEGMENT_ENV_VAR_PATTERN,
  isClaudeCodeEnvVarAllowlisted,
  GITHUB_TOKEN_ENV_VAR_NAMES,
  isCredentialPrefixedEnvVar,
  looksLikeSecret,
  getAllPolicyTierSettings,
} from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { findCanonicalGitRoot } from "../安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { pickBy, isMemoryApiEnvVar, SECRET_TOKEN_ENV_VARS, getHostManagedEnvVarsToStrip, resolveLocalSettingsStoreRoot } from "../设置-配置/设置-配置.aqbb35ee.js";
import { getChildProcessTmpDir } from "../核心工具-路径与平台/temp-directory.js";
import { id, noProxyUnion } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { getFederationCacheDir } from "../共享小工具-未细化/federation-cache-dir.js";
import { homedir } from "os";
import { dirname, posix } from "path";
var PLACEHOLDER_CREDENTIAL_VALUE = "proxy-injected";
var SSH_PLACEHOLDER_VALUE = "ssh-placeholder";
function getConfiguredBwrapPath() {
  return getAllPolicyTierSettings()
    .map((e) => e.sandbox?.bwrapPath)
    .find((e) => e != null);
}
function getConfiguredSocatPath() {
  return getAllPolicyTierSettings()
    .map((e) => e.sandbox?.socatPath)
    .find((e) => e != null);
}
function U() {
  let e = getConfiguredBwrapPath();
  if (e) return resolveExecutablePath(e);
  return resolveExecutablePath("bwrap");
}
var Q = /[ \t\n\v\f\r'"]/,
  PROXY_INJECTED_ENV_VAR_NAMES = [
    "YARN_HTTP_PROXY",
    "YARN_HTTPS_PROXY",
    "npm_config_proxy",
    "npm_config_https_proxy",
    "npm_config_noproxy",
    "GLOBAL_AGENT_HTTP_PROXY",
    "GLOBAL_AGENT_HTTPS_PROXY",
    "GLOBAL_AGENT_NO_PROXY",
    "DOCKER_HTTP_PROXY",
    "DOCKER_HTTPS_PROXY",
    "ELECTRON_GET_USE_PROXY",
    "CLOUDSDK_PROXY_TYPE",
    "CLOUDSDK_PROXY_ADDRESS",
    "CLOUDSDK_PROXY_PORT",
    "CLOUDSDK_PROXY_USERNAME",
    "CLOUDSDK_PROXY_PASSWORD",
    "FSSPEC_GCS",
    "JAVA_TOOL_OPTIONS",
  ];
function y(e) {
  let t = e.HTTP_PROXY || e.http_proxy || e.CLAUDE_CODE_HTTP_PROXY,
    n = e.HTTPS_PROXY || e.https_proxy || e.CLAUDE_CODE_HTTPS_PROXY,
    r = noProxyUnion(e);
  if (!t && !n) return {};
  let p = v(t),
    i = v(n);
  if (!i.host) i = p;
  let l = {},
    c = (_, s) => {
      if (s && e[_] === void 0) l[_] = s;
    };
  if (
    (c("YARN_HTTP_PROXY", t),
    c("YARN_HTTPS_PROXY", n),
    c("npm_config_proxy", t),
    c("npm_config_https_proxy", n),
    c("npm_config_noproxy", r),
    c("GLOBAL_AGENT_HTTP_PROXY", t),
    c("GLOBAL_AGENT_HTTPS_PROXY", n),
    c("GLOBAL_AGENT_NO_PROXY", r),
    c("ELECTRON_GET_USE_PROXY", "1"),
    c("DOCKER_HTTP_PROXY", t),
    c("DOCKER_HTTPS_PROXY", n),
    i.host)
  )
    (c("CLOUDSDK_PROXY_TYPE", "http"),
      c("CLOUDSDK_PROXY_ADDRESS", i.host),
      c("CLOUDSDK_PROXY_PORT", i.port),
      c("CLOUDSDK_PROXY_USERNAME", i.user),
      c("CLOUDSDK_PROXY_PASSWORD", i.pass));
  if ((c("FSSPEC_GCS", '{"session_kwargs": {"trust_env": true}}'), i.host)) {
    let _ = e.JAVA_TOOL_OPTIONS;
    if (!_?.includes("-Dhttps.proxyHost=")) {
      let s = q(p, i, r);
      l.JAVA_TOOL_OPTIONS = _ ? `${_} ${s}` : s;
    }
  }
  return l;
}
function v(e) {
  if (!e) return { host: "", port: "", user: "", pass: "" };
  try {
    let t = new URL(e);
    if (!t.hostname) return { host: "", port: "", user: "", pass: "" };
    return {
      host:
        t.hostname.startsWith("[") && t.hostname.endsWith("]")
          ? t.hostname.slice(1, -1)
          : t.hostname,
      port: t.port || (t.protocol === "https:" ? "443" : "80"),
      user: decodeURIComponent(t.username),
      pass: decodeURIComponent(t.password),
    };
  } catch {
    return { host: "", port: "", user: "", pass: "" };
  }
}
function q(e, t, n) {
  let r = [],
    p = (i, l) => {
      if (l && !Q.test(l)) r.push(`-D${i}=${l}`);
    };
  if (
    (p("http.proxyHost", e.host),
    p("http.proxyPort", e.port),
    p("https.proxyHost", t.host),
    p("https.proxyPort", t.port),
    p("http.proxyUser", e.user),
    p("http.proxyPassword", e.pass),
    p("https.proxyUser", t.user),
    p("https.proxyPassword", t.pass),
    n)
  )
    p("http.nonProxyHosts", Z(n));
  return (
    r.push("-Djdk.http.auth.tunneling.disabledSchemes="),
    r.push("-Djdk.http.auth.proxying.disabledSchemes="),
    r.join(" ")
  );
}
function Z(e) {
  return e
    .split(/[,\s]+/)
    .map((t) => t.trim())
    .filter(Boolean)
    .flatMap((t) => {
      if (t.startsWith(".")) return [`*${t}`];
      return ee(t) ?? [t];
    })
    .join("|");
}
function ee(e) {
  let t = e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/);
  if (!t) return;
  let n = [Number(t[1]), Number(t[2]), Number(t[3]), Number(t[4])],
    r = Number(t[5]);
  if (n.some((s) => s > 255) || r < 8 || r > 24) return [e];
  let p = Math.floor(r / 8),
    i = r % 8;
  if (i === 0) return [`${n.slice(0, p).join(".")}.*`];
  let l = 2 ** (8 - i);
  if (l > 16) return [e];
  let c = n[p] - (n[p] % l),
    _ = [];
  for (let s = c; s < c + l; s++)
    _.push(`${[...n.slice(0, p), s].join(".")}.*`);
  return _;
}
var BG_WORKER_IDENTITY_ENV_VARS = [
  "CLAUDE_CODE_SESSION_KIND",
  "CLAUDE_BG_SOURCE",
  "CLAUDE_BG_ISOLATION",
  "CLAUDE_BG_BACKEND",
  "CLAUDE_CODE_SESSION_NAME",
  "CLAUDE_CODE_RESUME_INTERRUPTED_TURN",
  "CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS",
  "CLAUDE_CODE_RESUME_PROMPT",
  "CLAUDE_CODE_RESUME_SOURCE_ALIVE",
  "CLAUDE_BG_POST_CLEAR_RESPAWN",
  "CLAUDE_BG_SESSION_PERMISSION_RULES",
  "CLAUDE_BG_MEMORY_TOGGLED_OFF",
  ...BG_DISPATCHER_ENV_VARS,
];
class w {
  scrubEnabledLatched = void 0;
  scrubSandboxAvailableLatched = void 0;
  scrubPathsLatched = void 0;
  scriptCallCounts = new Map();
  scriptCapsLatched = void 0;
  setScrubEnabledLatched(e) {
    this.scrubEnabledLatched = e;
  }
  setScrubSandboxAvailableLatched(e) {
    this.scrubSandboxAvailableLatched = e;
  }
  setScrubPathsLatched(e) {
    this.scrubPathsLatched = e;
  }
  setScriptCapsLatched(e) {
    this.scriptCapsLatched = e;
  }
  reset() {
    ((this.scrubEnabledLatched = void 0),
      (this.scrubSandboxAvailableLatched = void 0),
      (this.scrubPathsLatched = void 0),
      this.scriptCallCounts.clear(),
      (this.scriptCapsLatched = void 0));
  }
}
var u = id(new w(), (e) => {
  (e.reset(), resetEnvScrubEnabled());
});
class H {
  getAgentProxyEnv = void 0;
  settingsColorEnv = {};
}
var m = new j(() => new H());
function isScrubEnabled() {
  let e = u.scrubEnabledLatched;
  if (e !== void 0) return e;
  let t = Ie(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB);
  return (u.setScrubEnabledLatched(t), t);
}
function shouldScrubSubprocessEnv() {
  if (isScrubEnabled()) return !0;
  if (po(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
var A = [
    ".env",
    ".env.local",
    ".env.development",
    ".env.development.local",
    ".env.test",
    ".env.test.local",
    ".env.production",
    ".env.production.local",
  ],
  k = ["home", "root", "tmp", "var", "opt", "run", "mnt"].map((e) => `/${e}`),
  N = ".";
function G(e) {
  try {
    return `${resolveLocalSettingsStoreRoot(e, findCanonicalGitRoot)}/.claude`;
  } catch {
    return;
  }
}
function isScrubSandboxAvailable() {
  if (u.scrubSandboxAvailableLatched !== void 0)
    return u.scrubSandboxAvailableLatched;
  return !1;
}
async function assertScrubSandboxAvailable() {
  if ((initEnvScrubEnabled(), !isScrubEnabled())) return;
  let e = homedir(),
    t = he(),
    n = process.env.GITHUB_ENV ? dirname(process.env.GITHUB_ENV) : void 0,
    r = process.env.GITHUB_WORKSPACE;
  u.setScrubSandboxAvailableLatched(!1);
  let p = (process.env.PATH ?? "")
    .split(":")
    .map((s) => (s ? posix.normalize(s).replace(/\/+$/, "") : s))
    .filter((s) => s && k.some((f) => s.startsWith(`${f}/`)));
  (u.setScrubPathsLatched({
    home: e,
    originalCwd: t,
    claudeConfigDir: process.env.CLAUDE_CONFIG_DIR,
    federationCacheDir: getFederationCacheDir() ?? void 0,
    canonicalClaudeDir: G(t),
    runnerFileCommandsDir: n,
    workspace: r,
    GITHUB_ACTION_PATH: process.env.GITHUB_ACTION_PATH,
    GITHUB_EVENT_PATH: process.env.GITHUB_EVENT_PATH,
    pathDirs: p,
  }),
    Y());
  return;
}
function Y() {
  if (u.scriptCapsLatched !== void 0) return;
  let e = process.env.CLAUDE_CODE_SCRIPT_CAPS;
  if (!e) {
    u.setScriptCapsLatched(null);
    return;
  }
  try {
    let t = jsonParse(e);
    if (t && typeof t === "object" && !Array.isArray(t)) {
      let n = pickBy(
        t,
        (r, p) =>
          typeof r === "number" && Number.isFinite(r) && p.trim().length > 0,
      );
      u.setScriptCapsLatched(Object.keys(n).length > 0 ? n : null);
    } else u.setScriptCapsLatched(null);
  } catch {
    u.setScriptCapsLatched(null);
  }
}
function enforceScriptCaps(e) {
  if (!isScrubEnabled()) return;
  if ((Y(), !u.scriptCapsLatched)) return;
  let { scriptCapsLatched: t, scriptCallCounts: n } = u;
  for (let [r, p] of Object.entries(t)) {
    let i = e.split(r).length - 1;
    if (i > 0) {
      let l = (n.get(r) ?? 0) + i;
      if ((n.set(r, l), l > p))
        throw Error(
          `Script call limit exceeded: ${r} has been called ${l} times (cap: ${p}). This limit prevents data exfiltration via repeated write operations in untrusted-input workflows.`,
        );
    }
  }
}
function registerAgentProxyEnvFn(e) {
  m.of(B().host).getAgentProxyEnv = e;
}
function agentProxyEnv() {
  return m.of(B().host).getAgentProxyEnv?.() ?? {};
}
function setSettingsColorEnv(e) {
  m.of(B().host).settingsColorEnv = e;
}
function isArtifactDevBaseUrlVar(e) {
  return e.startsWith("CLAUDE_CODE_ARTIFACT") && e.endsWith("_BASE_URL");
}
function armedRunnerShedsName(e) {
  let t = e.toUpperCase();
  return !isGitConfigOrProxyVar(e) && isCredentialEnvVarName(e) && !GITHUB_TOKEN_ENV_VAR_NAMES.has(t) && !isClaudeCodeEnvVarAllowlisted(t);
}
var te = new Set(SECRET_TOKEN_ENV_VARS.map((e) => e.toUpperCase()));
function isChildScrubbedCredentialFamily(e) {
  let t = e.replace(/^INPUT_/, "");
  return (
    isArtifactDevBaseUrlVar(t) ||
    isMemoryApiEnvVar(t) ||
    t.startsWith("OTEL_") ||
    t === "CLAUDE_CODE_OTEL_DIAG_STDERR"
  );
}
function childScrubbedCredentialKeys() {
  let e = process.env,
    t = (n) =>
      e.ANTHROPIC_UNIX_SOCKET !== void 0 &&
      (n === "CLAUDE_CODE_OAUTH_TOKEN" || n === "ANTHROPIC_API_KEY") &&
      e[n] === SSH_PLACEHOLDER_VALUE;
  return [
    ...SECRET_TOKEN_ENV_VARS.filter((n) => !t(n)),
    ...Object.keys(e).filter((n) => isChildScrubbedCredentialFamily(n.toUpperCase())),
    ...getHostManagedEnvVarsToStrip(e),
    ...getBridgeCarrierEnvVarsToScrub(),
    "CLAUDE_CODE_SUBSCRIPTION_TYPE",
    "CLAUDE_CODE_RATE_LIMIT_TIER",
    "CLAUDE_CODE_PLUGIN_ATTRIBUTION",
    "CLAUDE_CODE_SKILL_ATTRIBUTION",
    ...BG_WORKER_IDENTITY_ENV_VARS,
  ];
}
function I(e) {
  return e.toUpperCase().startsWith("BUN_JSC_");
}
function subprocessEnv() {
  let e = m.of(B().host),
    t = e.getAgentProxyEnv?.() ?? {},
    n = Object.keys(t).length > 0,
    { settingsColorEnv: r } = e,
    p = Object.keys(r).length > 0,
    i = a.CLAUDE_CODE_REMOTE === !0,
    l = i ? y(n ? { ...process.env, ...t } : process.env) : {},
    c = Object.keys(l).length > 0,
    _ = shouldScrubSubprocessEnv(),
    s =
      Object.keys(process.env).some((o) => te.has(o.toUpperCase())) ||
      Object.keys(process.env).some((o) => isChildScrubbedCredentialFamily(o.toUpperCase())) ||
      process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE !== void 0 ||
      process.env.CLAUDE_CODE_RATE_LIMIT_TIER !== void 0,
    f = getHostManagedEnvVarsToStrip(process.env),
    K = getBridgeCarrierEnvVarsToScrub(),
    R = !1;
  R = BG_WORKER_IDENTITY_ENV_VARS.some((o) => process.env[o] !== void 0);
  let X = Object.keys(process.env).some((o) =>
      /^(INPUT_)?(OTEL_|CLAUDE_CODE_OTEL_DIAG_STDERR$)/i.test(o),
    ),
    V =
      a.CLAUDE_CODE_PLUGIN_ATTRIBUTION !== void 0 ||
      a.CLAUDE_CODE_SKILL_ATTRIBUTION !== void 0,
    M = a.CLAUDE_CODE_QUESTION_EXTENDED,
    D = !1,
    L = i && Object.keys(process.env).some(I);
  if (
    !n &&
    !c &&
    !_ &&
    !R &&
    !s &&
    !f.length &&
    !K.length &&
    !X &&
    !p &&
    !V &&
    !M &&
    !D &&
    !L
  )
    return process.env;
  let d = { ...process.env, ...r, ...t, ...l },
    W = new Set(
      [
        ...childScrubbedCredentialKeys(),
        "CLAUDE_CODE_SUBSCRIPTION_TYPE",
        "CLAUDE_CODE_RATE_LIMIT_TIER",
        "CLAUDE_CODE_QUESTION_EXTENDED",
      ].map((o) => o.toUpperCase()),
    );
  for (let o of Object.keys(d)) if (W.has(o.toUpperCase())) delete d[o];
  for (let o of BG_WORKER_IDENTITY_ENV_VARS) delete d[o];
  for (let o of Object.keys(d)) if (o.startsWith("OTEL_")) delete d[o];
  if (
    (delete d.CLAUDE_CODE_OTEL_DIAG_STDERR,
    delete d.CLAUDE_CODE_PLUGIN_ATTRIBUTION,
    delete d.CLAUDE_CODE_SKILL_ATTRIBUTION,
    D)
  ) {
    for (let o of Object.keys(d)) if (ne(o)) delete d[o];
  }
  if (L) {
    for (let o of Object.keys(d)) if (I(o)) delete d[o];
  }
  if (!_) return d;
  let F = re(),
    J = getScrubbedEnvVarNames().length > 0;
  for (let [o, E] of Object.entries(d)) {
    if (E === PLACEHOLDER_CREDENTIAL_VALUE && Object.hasOwn(t, o)) continue;
    if (
      (o === "CLAUDE_CODE_OAUTH_TOKEN" || o === "ANTHROPIC_API_KEY") &&
      E === SSH_PLACEHOLDER_VALUE &&
      d.ANTHROPIC_UNIX_SOCKET !== void 0
    )
      continue;
    if (
      F.has(o.toUpperCase().replace(/-/g, "_")) ||
      BUNDLE_SEGMENT_ENV_VAR_PATTERN.test(o) ||
      isCredentialPrefixedEnvVar(o) ||
      (J && armedRunnerShedsName(o))
    ) {
      delete d[o];
      continue;
    }
    if (E === void 0 || isGitConfigOrProxyVar(o)) continue;
    let C = typeof E === "string" ? E : String(E);
    if (isRegistryIndexVar(o)) {
      let O = sanitizeIndexUrlValue(o, C);
      if (O.value !== C) d[o] = O.value;
      if (O.cut) {
        let T = getIndexVarAliasAssignment(o, O.value);
        if (T !== void 0 && !isIndexVarOrAliasSet(d, T.name)) d[T.name] = T.value;
      }
      continue;
    }
    let g = sanitizeBuildToolEnvValue(o, C);
    if (g === void 0) {
      if (looksLikeSecret(C)) delete d[o];
    } else if (g !== C)
      if (g === "") delete d[o];
      else d[o] = g;
  }
  return d;
}
function shouldUseMcpAllowlistEnv() {
  let e = process.env.CLAUDE_CODE_MCP_ALLOWLIST_ENV;
  if (Ie(e)) return !0;
  if (po(e)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
function scrubSandboxConfig() {
  let e = u.scrubPathsLatched,
    t = e?.home ?? homedir(),
    n = e?.originalCwd ?? he(),
    r = e?.GITHUB_ACTION_PATH ?? process.env.GITHUB_ACTION_PATH,
    p =
      e?.runnerFileCommandsDir ??
      (process.env.GITHUB_ENV ? dirname(process.env.GITHUB_ENV) : void 0),
    i = e?.workspace ?? process.env.GITHUB_WORKSPACE,
    l =
      i && posix.resolve(i) !== posix.resolve(n)
        ? [
            `${i}/.git/hooks`,
            `${i}/.git/config`,
            `${i}/.git/config.lock`,
            `${i}/.git/config.worktree`,
            `${i}/.git/config.worktree.lock`,
            `${i}/.git/commondir`,
            `${i}/.git/worktrees`,
            `${i}/.git/modules`,
            `${i}/.git/info/exclude`,
            `${i}/.git/glab-cli`,
            `${i}/.gitmodules`,
            `${i}/.github`,
            `${i}/.claude`,
          ]
        : [];
  return {
    filesystem: {
      allowWrite: k,
      denyRead: [
        "/run/docker.sock",
        "/run/containerd/containerd.sock",
        "/run/podman/podman.sock",
        "/run/buildkit/buildkitd.sock",
        "/run/dbus",
        "/run/user",
        e?.federationCacheDir ?? getFederationCacheDir(),
      ].filter((c) => !!c),
      denyWrite: [
        `${t}/.bash_profile`,
        `${t}/.bashrc`,
        `${t}/.bash_aliases`,
        `${t}/.bash_login`,
        `${t}/.bash_logout`,
        `${t}/.profile`,
        `${t}/.zshrc`,
        `${t}/.zprofile`,
        `${t}/.zshenv`,
        `${t}/.zlogin`,
        `${t}/.zlogout`,
        `${t}/.claude`,
        `${t}/.claude.json`,
        e?.claudeConfigDir ?? process.env.CLAUDE_CONFIG_DIR,
        `${t}/.gitconfig`,
        `${t}/.config/git`,
        `${t}/.bunfig.toml`,
        `${n}/bunfig.toml`,
        `${n}/package.json`,
        ...A.map((c) => `${n}/${c}`),
        `${t}/.npmrc`,
        `${n}/.npmrc`,
        `${t}/.yarnrc`,
        `${t}/.yarnrc.yml`,
        `${n}/.yarnrc`,
        `${n}/.yarnrc.yml`,
        `${t}/.config/pip`,
        `${t}/.pip`,
        `${n}/package-lock.json`,
        `${n}/yarn.lock`,
        `${n}/pnpm-lock.yaml`,
        `${n}/node_modules/.bin`,
        `${n}/.git/modules`,
        `${n}/scripts`,
        `${n}/.claude`,
        e?.canonicalClaudeDir ?? G(n),
        `${n}/.github`,
        `${t}/.local/bin`,
        `${t}/runners`,
        `${t}/actions-runner`,
        "/tmp/inline-comments-buffer.jsonl",
        ...(e?.pathDirs ?? []),
        p,
        r,
        r && r.includes("/_actions/")
          ? r.slice(0, r.indexOf("/_actions/") + 9)
          : void 0,
        e?.GITHUB_EVENT_PATH ?? process.env.GITHUB_EVENT_PATH,
        `${t}/.config/gh`,
        `${t}/.config/glab-cli`,
        `${t}/.netrc`,
        `${t}/.ssh`,
        `${n}/.git/hooks`,
        `${n}/.git/config`,
        `${n}/.git/config.lock`,
        `${n}/.git/config.worktree`,
        `${n}/.git/config.worktree.lock`,
        `${n}/.git/commondir`,
        `${n}/.git/worktrees`,
        `${n}/.gitmodules`,
        `${n}/.git/info/exclude`,
        `${n}/.git/glab-cli`,
        ...l,
      ].filter((c) => !!c),
    },
  };
}
function ne(e) {
  return !1;
}
var b;
function re() {
  let e = getScrubbedEnvVarNames(),
    t = e.length > 0;
  if (b?.armed !== t)
    b = {
      armed: t,
      names: new Set([...CREDENTIAL_ENV_VAR_NAMES, ...e].map((n) => n.toUpperCase())),
    };
  return b.names;
}
export {
  PLACEHOLDER_CREDENTIAL_VALUE,
  SSH_PLACEHOLDER_VALUE,
  getConfiguredBwrapPath,
  getConfiguredSocatPath,
  PROXY_INJECTED_ENV_VAR_NAMES,
  BG_WORKER_IDENTITY_ENV_VARS,
  isScrubEnabled,
  shouldScrubSubprocessEnv,
  isScrubSandboxAvailable,
  assertScrubSandboxAvailable,
  enforceScriptCaps,
  registerAgentProxyEnvFn,
  agentProxyEnv,
  setSettingsColorEnv,
  isArtifactDevBaseUrlVar,
  armedRunnerShedsName,
  isChildScrubbedCredentialFamily,
  childScrubbedCredentialKeys,
  subprocessEnv,
  shouldUseMcpAllowlistEnv,
  scrubSandboxConfig,
};
