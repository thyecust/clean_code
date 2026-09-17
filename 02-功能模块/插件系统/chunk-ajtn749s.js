// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  j,
  Gt,
  he,
  VR,
  MA,
  d8,
  m_e,
  y_e,
  ALn,
  CLn,
  HW,
  DLn,
  Nn,
  mp,
} from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import {
  AB,
  Pz,
  li,
  jf,
  Bxe,
  rdr,
  Ww,
  DYt,
  RHt,
  jxe,
  Oz,
  wh,
} from "../../00-第三方库/lodash/lodash.207999qb.js";
import { sleep, withDeadline } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { yt, R, l, A, W, Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { registerCleanup, jsonParse, sanitizeUrl, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { GITHUB_HOST } from "../../01-核心基础设施/核心工具-路径与平台/git-host-utils.js";
import { logFeatureOk, logFeatureBad, logFeatureSad, withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { le, cr, nt } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { getDirentFileInfo, tryGetDirentFileInfo, removeDirectoryRecursive, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { CLAUDE_AI_OAUTH_SCOPES, preservableScopesFrom } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { isEssentialTrafficOnly } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/核心工具-日志与脱敏/diagnostics-log.js";
import { Bs } from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";
import { execFileNoThrowWithCwd } from "../工作树-Git/git-exec-hardening.js";
import { findGitRoot } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import {
  PLUGIN_LINK_MARKER_FILENAME,
  getPluginLinkMarkerSchema,
  LINK_MODE_COMMAND_SUFFIX,
  PLUGIN_RESERVED_MARKER_FILES,
  isReservedOrTempName,
  getPluginsDir,
  getResolvedPluginsDir,
  buildRunCommandHint,
  parseInstallationPreference,
  isWithinMaxAge,
  getPluginRegistryState,
  markPluginCommandProducerDirDenied,
} from "./plugin-system-core.js";
import { isSettingsSourceEnabled, isLoopbackOrMetadataHost, toUrlString, formatDisplayText, formatQuotedDisplayText, MAX_CONSENT_TEXT_LENGTH, ARCHIVE_URL_POLICY_MESSAGE, isAllowedArchiveUrl } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import {
  httpClient,
  refreshOAuthToken,
  isInvalidGrantError,
  getAuthTokenSource,
  saveRefreshedOAuthTokensRespectingLock,
  hasAttemptedScopeExpansion,
  recordScopeExpansionAttempt,
  markRefreshTokenDeadAfterInvalidGrant,
  isOAuthRefreshKnownDeadAsync,
  getClaudeAIOAuthTokens,
  OAuthRefreshLockContendedError as lge,
  withOAuthRefreshLock,
  checkAndRefreshOAuthTokenIfNeeded,
  getFeatureValue_CACHED_MAY_BE_STALE,
  isWorkspacePersistedTrusted,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import {
  getRespelledEnvVarsAndLostCredentials,
  collectEnvVarsToScrub,
  parseSettingsFile,
  getSettingsFilePathForSource,
  getLegacyLocalSettingsFilePath,
  getSettingsForSource,
  flagInlineSettingDropped,
  parentManagedTierParticipates,
  getDurablePolicyTierSettings,
  getPolicySettingsOrigin,
  getFatalAdminPolicyLoadErrors,
  filterFatalPolicyErrors,
  isNotDisabledInTrustedSources,
} from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { isPolicyAllowed, getPolicyDenyKind } from "../../01-核心基础设施/核心工具-未归类/compliance-taints-store.js";
import { getAPIProvider, isFirstPartyProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { default as at, isAxiosError } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { ensureAxiosEgressGuardInstalled } from "../../01-核心基础设施/HTTP-网络层/test-egress-guard.js";
import { isClaudeDownloadsHost, externalHttp } from "../../01-核心基础设施/HTTP-网络层/external-http.js";
import { getSessionAccessToken } from "../认证-OAuth登录/credential-file-descriptors.js";
import { subprocessEnv } from "../../01-核心基础设施/核心工具-进程与信号/subprocess-env-scrub.js";
import { areCommandPluginSourcesDisabledByPolicy, policyTierCommandsMayRun, REMOTE_POLICY_UNCONSENTED_MESSAGE, headersHelperPolicyRefusal, COMMAND_PLUGIN_SOURCES_DISABLED_MESSAGE, canonicalFetchSourceUrl } from "./plugin-source-policy.js";
import { isCustomizationDisabled } from "../状态栏-主题/chunk-dqyc6kge.js";
import { isRemoteOrCoworkSession } from "../../01-核心基础设施/核心工具-未归类/chunk-339z9efw.js";
import { killProcessTree } from "../../01-核心基础设施/核心工具-进程与信号/kill-process-tree.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { isRecord } from "../../01-核心基础设施/核心工具-类型与数值/is-record.js";
import { dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
var OFFICIAL_MARKETPLACE_SOURCE = { source: "github", repo: "anthropics/claude-plugins-official" },
  OFFICIAL_MARKETPLACE_NAME = "claude-plugins-official";
var Xe = [
  GITHUB_HOST,
  "raw.githubusercontent.com",
  "objects.githubusercontent.com",
  "gist.githubusercontent.com",
  "gitlab.com",
  "bitbucket.org",
  "codeberg.org",
  "dev.azure.com",
  "ssh.dev.azure.com",
  "storage.googleapis.com",
];
function Je(e) {
  let t,
    r = /^[^@/]+@([^:/]+):/.exec(e);
  if (r) t = r[1];
  else
    try {
      t = new URL(e).hostname;
    } catch {
      return "unknown";
    }
  let o = t.toLowerCase();
  return Xe.find((s) => s === o) ?? "other";
}
function Ze(e) {
  return e.includes(`anthropics/${OFFICIAL_MARKETPLACE_NAME}`);
}
function logPluginRemoteFetch(e, t, r, o, s) {
  logEvent("tengu_plugin_remote_fetch", {
    source: fromEnum(e),
    host: fromEnum(t ? Je(t) : "unknown"),
    is_official: e === "plugin_catalog" || (t ? Ze(t) : !1),
    outcome: fromEnum(r),
    duration_ms: Math.round(o),
    ...(s && { error_kind: fromEnum(s) }),
  });
}
function classifyNetworkErrorKind(e) {
  let t = String(e?.message ?? e);
  if (
    /ENOTFOUND|ECONNREFUSED|EAI_AGAIN|Could not resolve host|Connection refused/i.test(
      t,
    )
  )
    return "dns_or_refused";
  if (/ETIMEDOUT|timed out|timeout/i.test(t)) return "timeout";
  if (
    /ECONNRESET|socket hang up|Connection reset by peer|remote end hung up/i.test(
      t,
    )
  )
    return "conn_reset";
  if (/403|401|authentication|permission denied/i.test(t)) return "auth";
  if (/404|not found|repository not found/i.test(t)) return "not_found";
  if (/certificate|SSL|TLS|unable to get local issuer/i.test(t)) return "tls";
  if (/Invalid response format|Invalid marketplace schema/i.test(t))
    return "invalid_schema";
  return "other";
}
import { readdir as de, stat as Qe } from "fs/promises";
import { join as ue } from "path";
var et = ".claude-plugin",
  PLUGIN_CONTENT_SUBDIRS = [
    "commands",
    "skills",
    "agents",
    "hooks",
    "themes",
    "output-styles",
    "monitors",
    "workflows",
  ],
  tt = ["SKILL.md", ".mcp.json", ".lsp.json"],
  PLUGIN_CONTENT_MARKERS = [et, ...PLUGIN_CONTENT_SUBDIRS, ...tt];
async function hasPluginContentEntries(e) {
  return (await de(e)).filter((r) => !fe(r)).some(pe);
}
async function resolvePluginRoot(e) {
  let t = (await de(e, { withFileTypes: !0 })).filter((r) => !fe(r.name));
  if (t.some((r) => r.name === ".claude-plugin")) return e;
  if (t.length === 1 && t[0].isDirectory()) {
    let r = ue(e, t[0].name);
    if (await rt(ue(r, ".claude-plugin"))) return r;
    if (!pe(t[0].name) && (await hasPluginContentEntries(r))) return r;
  }
  return e;
}
function pe(e) {
  return PLUGIN_CONTENT_MARKERS.includes(e);
}
async function rt(e) {
  try {
    return (await Qe(e), !0);
  } catch {
    return !1;
  }
}
function fe(e) {
  return e === "__MACOSX" || e === ".DS_Store";
}
function isPluginCommandSourceRefreshEnabled() {
  if (isEssentialTrafficOnly()) return !1;
  if (isPluginsRootUnreliable()) return !1;
  return V();
}
function V() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_plugin_command_source_refresh", !0);
}
var ot = 30000;
function isPluginsRootUnreliable() {
  let e = getPluginsDir(),
    t = Oz(getResolvedPluginsDir());
  if (getCurrentPlatform() === "windows" ? rdr(e) : li(e)) return !0;
  let r = getPluginRegistryState().provenLocalRoots,
    o = r.get(t);
  if (o === void 0 || !isWithinMaxAge(o, ot)) {
    if (Bxe(t, { allowLocalWsl: !0 })) return (r.delete(t), !0);
    r.set(t, Date.now());
  }
  if (wh(getClaudeConfigDir(), t)) return !1;
  return it().some(
    (s) => wh(t, s, { foldCase: !0 }) || wh(s, t, { foldCase: !0 }),
  );
}
function it() {
  return dedupe(
    [he(), ...mp()].flatMap((e) => {
      let t = findGitRoot(e);
      return t !== null ? [e, t] : [e];
    }),
  );
}
var st = [
  "local",
  "npm",
  "github",
  "git",
  "subdir",
  "archive",
  "command",
  "unknown",
];
function buildTempPluginDirName(e) {
  let t = Math.random()
    .toString(36)
    .slice(2, 2 + _e)
    .padEnd(1, "0");
  return `${ge}${e}_${Date.now()}_${t}`;
}
var ge = "temp_",
  _e = 6,
  PLUGIN_TEMP_EXTRACT_SUFFIX = "_x",
  PLUGIN_TEMP_CLONE_SUFFIX = ".clone",
  PLUGIN_TEMP_DIR_PATTERN = new RegExp(
    `^${ge}(?:${st.join("|")})_(\\d{10,})_[a-z0-9]{1,${_e}}(?:${PLUGIN_TEMP_EXTRACT_SUFFIX}|\\${PLUGIN_TEMP_CLONE_SUFFIX})?$`,
  );
function we(e, t) {
  return `${e}${Se}${t}`;
}
var Se = ".linking-",
  LINKING_STAGING_DIR_PATTERN = new RegExp(`\\${Se}(\\d+)$`);
import { createHash as xe } from "crypto";
import {
  lstat,
  mkdir,
  open as ct,
  readdir as L,
  readFile,
  readlink,
  realpath,
  rename,
  stat as pt,
  symlink,
  writeFile as Ie,
} from "fs/promises";
import { homedir as ft } from "os";
import {
  dirname,
  isAbsolute,
  join as v,
  relative,
  resolve,
  sep as D,
} from "path";
import { spawn } from "child_process";
var ke = 2000;
function Ee(
  e,
  { cwd: t, env: r, timeoutMs: o, maxStdoutBytes: s, maxStderrBytes: c },
) {
  return new Promise((p) => {
    let d = "",
      h = "",
      _ = 0,
      w = 0,
      S = !1,
      b = !1,
      C,
      T,
      k = spawn(e, [], {
        shell: !0,
        cwd: t,
        env: r,
        stdio: ["ignore", "pipe", "pipe"],
        detached: getCurrentPlatform() !== "windows",
        windowsHide: !0,
        ...Bs("plugin"),
      }),
      ie = registerCleanup(async () => {
        if (!S && k.pid !== void 0) await killProcessTree(k.pid, "SIGKILL");
      });
    function x(E) {
      if (S) return;
      if (((S = !0), ie(), clearTimeout(ae), T)) clearTimeout(T);
      (k.stdout?.removeAllListeners("data"),
        k.stderr?.removeAllListeners("data"),
        k.stdout?.destroy(),
        k.stderr?.destroy(),
        p(E));
    }
    function se(E) {
      if (C) return;
      ((C = E),
        k.stdout?.removeAllListeners("data"),
        k.stderr?.removeAllListeners("data"),
        k.stdout?.pause(),
        k.stderr?.pause());
      let N = { kind: E, stdout: d, stderr: h },
        M = () => {
          if (S) return;
          if (b) {
            x(N);
            return;
          }
          let F = () => x(N);
          if (
            (k.once("exit", F),
            (T = setTimeout((K) => K(), ke, F)),
            typeof T === "object")
          )
            T.unref();
        };
      if (k.pid === void 0) {
        x(N);
        return;
      }
      killProcessTree(k.pid, "SIGKILL").then(M, M);
    }
    let ae = setTimeout((E) => E("timed-out"), o, se);
    (k.stdout?.setEncoding("utf8"),
      k.stderr?.setEncoding("utf8"),
      k.stdout?.on("data", (E) => {
        if (((_ += Buffer.byteLength(E)), _ > s)) {
          se("stdout-overflow");
          return;
        }
        d += E;
      }),
      k.stderr?.on("data", (E) => {
        if (w >= c) return;
        ((w += Buffer.byteLength(E)), (h += E));
      }),
      k.once("error", (E) => {
        x({ kind: "spawn-error", message: E.message, stdout: d, stderr: h });
      }));
    function ce(E, N) {
      if (C) return;
      if (typeof E === "number")
        x({ kind: "exited", exitCode: E, stdout: d, stderr: h });
      else
        x({ kind: "signaled", signal: N ?? "unknown", stdout: d, stderr: h });
    }
    (k.once("exit", (E, N) => {
      if (((b = !0), S || C)) return;
      if (
        (clearTimeout(ae),
        (T = setTimeout((M, F, K) => M(F, K), ke, ce, E, N)),
        typeof T === "object")
      )
        T.unref();
    }),
      k.once("close", (E, N) => {
        ce(E, N);
      }));
  });
}
var mt = 60,
  Re = 65536,
  gt = 65536,
  ve = 500,
  Te = 268435456,
  Ce = 20000,
  _t = new Set(PLUGIN_CONTENT_MARKERS);
async function wt(e) {
  let t = (e.timeout ?? mt) * 1000,
    r = formatDisplayText(e.command, 200);
  logForDebugging(`Plugin command source: running \`${r}\` (timeout ${t}ms)`);
  let o = await Ee(e.command, {
      cwd: ft(),
      env: subprocessEnv(),
      timeoutMs: t,
      maxStdoutBytes: Re,
      maxStderrBytes: gt,
    }),
    s = formatDisplayText(o.stderr.trim(), ve),
    c = s ? ` (stderr: ${s})` : "";
  switch (o.kind) {
    case "exited":
      if (o.exitCode !== 0)
        throw new R(
          `Plugin source command \`${r}\` exited with code ${o.exitCode}` +
            (s ? `: ${s}` : " and no error output."),
          "plugin command source exited non-zero",
        );
      break;
    case "timed-out":
      throw new R(
        `Plugin source command \`${r}\` did not finish within ${t / 1000}s and was stopped.${c}`,
        "plugin command source timed out",
      );
    case "stdout-overflow":
      throw new R(
        `Plugin source command \`${r}\` printed more than ${Re / 1024} KB and was stopped; it must print a single absolute path.`,
        "plugin command source exceeded the stdout cap",
      );
    case "signaled":
      throw new R(
        `Plugin source command \`${r}\` was killed by ${o.signal} before it finished.${c}`,
        "plugin command source killed by a signal",
      );
    case "spawn-error":
      throw new R(
        `Plugin source command \`${r}\` could not be started: ` +
          formatDisplayText(o.message, ve),
        "plugin command source failed to spawn",
      );
  }
  let p = o.stdout
    .split(/\r?\n/)
    .map((w) => w.trim())
    .filter((w) => w.length > 0);
  if (p.length === 0)
    throw new R(
      `Plugin source command \`${r}\` printed nothing; it must print the absolute path of the plugin directory.`,
      "plugin command source printed nothing",
    );
  if (p.length > 1)
    throw new R(
      `Plugin source command \`${r}\` printed ${p.length} lines; it must print exactly one absolute path.`,
      "plugin command source printed multiple lines",
    );
  let d = p[0];
  if (!isAbsolute(d))
    throw new R(
      `Plugin source command \`${r}\` printed \`${formatDisplayText(d, 200)}\`, which is not an absolute path.`,
      "plugin command source printed a relative path",
    );
  if ((getCurrentPlatform() === "windows" && Ww(d)) || jf(d))
    throw new PluginSourceError(
      `Plugin source command \`${r}\` printed \`${formatDisplayText(d, 200)}\`, a network path (UNC or automount), which is not supported as a plugin directory.`,
      "plugin command source printed a network path",
    );
  if (jxe(d))
    throw new PluginSourceError(
      `Plugin source command \`${r}\` printed \`${formatDisplayText(d, 200)}\`, which is reached through a link onto a network location (or one that cannot be trusted); that is not supported as a plugin directory.`,
      "plugin command source printed a path through a suspect link",
    );
  let h;
  try {
    h = await realpath(d);
  } catch (w) {
    throw new R(
      `Plugin source command \`${r}\` printed \`${formatDisplayText(d, 200)}\`, but that path could not be resolved (${A(w) ?? "unknown error"}).`,
      "plugin command source path does not resolve",
    );
  }
  if (jf(h) || (getCurrentPlatform() === "windows" && Ww(h)))
    throw new PluginSourceError(
      `Plugin source command \`${r}\` printed a path that resolves to a network location, which is not supported as a plugin directory.`,
      "plugin command source path resolves to a network path",
    );
  let _;
  try {
    _ = await L(h);
  } catch (w) {
    let S = A(w);
    throw new R(
      `Plugin source command \`${r}\` printed \`${formatDisplayText(d, 200)}\`, ` +
        (S === "ENOTDIR"
          ? "which is not a directory."
          : `which could not be read as a directory (${S ?? "unknown error"}).`),
      "plugin command source path is not a readable directory",
    );
  }
  if (!_.some((w) => _t.has(w)))
    throw new R(
      `Plugin source command \`${r}\` printed \`${formatDisplayText(d, 200)}\`, but that directory has no plugin content (expected .claude-plugin/ or a commands/, skills/, agents/, hooks/, themes/, output-styles/, monitors/, workflows/, SKILL.md, .mcp.json, or .lsp.json at the top level). Nothing was installed.`,
      "plugin command source directory has no plugin content",
    );
  return (logForDebugging(`Plugin command source: resolved plugin directory ${h}`), h);
}
async function Me(e, t, r) {
  let o = [],
    s = 0,
    c = 0;
  async function p(d) {
    let h = await L(d, { withFileTypes: !0 });
    for (let _ of h) {
      if ((c++, c > Ce))
        throw new R(
          `Plugin directory has more than ${Ce} entries; refusing to install it as a plugin.`,
          "plugin command source directory has too many files",
        );
      let w = v(d, _.name),
        S = await getDirentFileInfo(d, _);
      if (S.isDirectory) {
        if (d === e && _.name === ".git") continue;
        await p(w);
      } else if (S.isFile) {
        let b = S.size ?? (await lstat(w)).size;
        if ((r?.set(w, b), (s += b), s > Te))
          throw new R(
            `Plugin directory is larger than ${Te / 1048576} MB; refusing to install it as a plugin.`,
            "plugin command source directory too large",
          );
        o.push(w);
      } else if (S.isSymbolicLink) t?.push(w);
    }
  }
  return (await p(e), t?.sort(), o.sort());
}
async function bt(e) {
  let t = [],
    r = new Map(),
    o = await Me(e, t, r),
    s = xe("sha256");
  for (let c of o) {
    let p = r.get(c) ?? 0;
    s.update(`f ${relative(e, c).split(D).join("/")}\x00${p}\x00`);
    let d = p;
    if (p > 0) {
      let h = await ct(c, "r");
      try {
        for await (let _ of h.createReadStream({ start: 0, end: p - 1 }))
          (s.update(_), (d -= _.length));
      } finally {
        await h.close();
      }
    }
    if (d > 0) s.update(Buffer.alloc(d));
  }
  for (let c of t) {
    let p = await readlink(c);
    (s.update(`l ${relative(e, c).split(D).join("/")}\x00`),
      s.update(`${Buffer.byteLength(p)}\x00${p}`));
  }
  return s.digest("hex");
}
var LINK_MODE_WINDOWS_UNSUPPORTED_MESSAGE =
  'This plugin source uses mode "link", which is not supported on Windows yet; the marketplace can use mode "copy" instead.';
function getSourceCommandKey(e) {
  return e.mode === "link" ? `${e.command}${LINK_MODE_COMMAND_SUFFIX}` : e.command;
}
function describeSourceMode(e) {
  return e.mode === "link"
    ? 'mode "link": its output directory is used in place (linked, not copied)'
    : 'mode "copy": its output directory is copied into the plugin cache';
}
class PluginSourceError extends R {}
function At(e, t) {
  if (t && t.kind !== "none" && t.command === getSourceCommandKey(e)) return;
  let r = formatDisplayText(e.command, MAX_CONSENT_TEXT_LENGTH) + (e.mode === "link" ? " [mode: link]" : ""),
    o = t?.pluginId !== void 0 ? formatDisplayText(t.pluginId, 200) : void 0,
    s = o ?? "This plugin",
    c = o ?? "";
  if (t?.kind === "recorded" && t.command !== void 0)
    throw new PluginSourceError(
      `${s}'s marketplace changed the command that installs it, or how its output is used (now \`${r}\`), since it was accepted, so it was not run. Review and accept the new command: ${buildRunCommandHint("plugin update", c, { tail: "in a terminal (add `--scope` for a project/local install)", fallback: "an explicit plugin update in a terminal reviews it" })}.`,
      "plugin command source command changed since consent",
    );
  if (t?.kind === "recorded")
    throw new PluginSourceError(
      `${s}'s marketplace entry now installs it by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it: ${buildRunCommandHint("plugin update", c, { tail: "in a terminal (add `--scope` for a project/local install)", fallback: "an explicit plugin update in a terminal reviews it" })}.`,
      "plugin command source never consented for an installed plugin",
    );
  if (t?.kind === "shown")
    throw new PluginSourceError(
      `${s}'s marketplace entry changed while it was being installed (it now declares \`${r}\`, not the command that was shown), so nothing was run. Re-run the install/update to review the current command.`,
      "plugin command source changed between display and run",
    );
  throw new PluginSourceError(
    `${s} is installed by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it from its /plugin details pane, or in a terminal: ${buildRunCommandHint("plugin install", c, { fallback: "an explicit plugin install reviews it" })}.`,
    "plugin command source without consent",
  );
}
async function Pt(e, t) {
  let r = (await L(e)).filter((c) => !isReservedPluginEntry(c)).sort(),
    o = await Fe(
      e,
      r.map((c) => ({ name: c, path: v(e, c) })),
    );
  await mkdir(t, { recursive: !0 });
  for (let { name: c, target: p, isDirectory: d } of o)
    await symlink(p, v(t, c), d ? "dir" : "file");
  await Ie(v(t, PLUGIN_LINK_MARKER_FILENAME), JSON.stringify({ target: e }), { flag: "wx" });
  let s = xe("sha256");
  s.update(`${e}\x00`);
  for (let { name: c, target: p } of o)
    (s.update(`${Buffer.byteLength(c)}\x00${c}`),
      s.update(`${Buffer.byteLength(p)}\x00${p}`));
  return s.digest("hex");
}
async function Fe(e, t) {
  let r = [];
  for (let { name: o, path: s } of t) {
    if (RHt(s, dirname(s)))
      throw new PluginSourceError(
        `A top-level entry of the plugin directory (${formatDisplayText(o, 100)}) points at a network location or through a link that cannot be trusted; refusing to link it.`,
        "plugin command source entry traverses a suspect link",
      );
    let c, p;
    try {
      ((c = await realpath(s)), (p = (await pt(c)).isDirectory()));
    } catch {
      throw new R(
        `A top-level entry of the plugin directory its command produced could not be resolved (${formatDisplayText(o, 80)}); refusing to link it.`,
        "plugin command source link entry unresolvable",
      );
    }
    let d = relative(e, c);
    if (d === "" || d === ".." || d.startsWith(`..${D}`) || isAbsolute(d))
      throw new PluginSourceError(
        `A top-level entry of the plugin directory its command produced (${formatDisplayText(o, 80)}) points outside that directory; refusing to link it.`,
        "plugin command source link escapes producer directory",
      );
    r.push({ name: o, target: c, isDirectory: p });
  }
  return r;
}
async function relinkPluginFarm(e, t) {
  let r = resolve(he(), e),
    o = resolve(he(), t),
    s = await ee(v(r, PLUGIN_LINK_MARKER_FILENAME)),
    c = getPluginLinkMarkerSchema().parse(JSON.parse(s)).target;
  if (DYt(c))
    throw new PluginSourceError(
      "The link farm points at a producer reached through a link that cannot be trusted; refusing to relink it.",
      "plugin command source relink target traverses a suspect link",
    );
  let p = await realpath(c);
  if (Ww(p))
    throw new PluginSourceError(
      "The link farm points at a producer that now resolves to a network location; refusing to relink it.",
      "plugin command source relink target resolves to a network path",
    );
  let d = [];
  for (let S of await L(r, { withFileTypes: !0 })) {
    if (isReservedPluginEntry(S.name)) continue;
    if ((await tryGetDirentFileInfo(r, S))?.isSymbolicLink) d.push(S);
  }
  let h = [];
  for (let S of d) {
    let b;
    try {
      b = await readlink(v(r, S.name));
    } catch (C) {
      if (W(C)) continue;
      throw new PluginSourceError(
        `A link in the staged farm could not be read (${formatDisplayText(l(C), 120)}); refusing to relink it.`,
        "plugin command source relink entry unreadable",
      );
    }
    if (AB(b))
      throw new PluginSourceError(
        "A link in the staged farm is not in canonical form; refusing to relink it.",
        "plugin command source relink entry not canonical",
      );
    h.push(S);
  }
  let _ = await Fe(
    p,
    h.map((S) => ({ name: S.name, path: v(r, S.name) })),
  );
  await mkdir(dirname(o), { recursive: !0 });
  let w = we(o, process.pid);
  (await removeDirectoryRecursive(w), await mkdir(w));
  try {
    for (let { name: S, target: b, isDirectory: C } of _)
      await symlink(b, v(w, S), C ? "dir" : "file");
    (await Ie(v(w, PLUGIN_LINK_MARKER_FILENAME), s, { flag: "wx" }), await rename(w, o));
  } catch (S) {
    await removeDirectoryRecursive(w).catch(() => {});
    let b = A(S);
    if (
      (b === "ENOTEMPTY" || b === "EEXIST") &&
      (await classifyLinkFarm(o)) === "live" &&
      !(await isLinkFarmDiverged(o, p))
    )
      return;
    throw S;
  }
}
async function pruneReservedEntries(e, { keepGit: t }) {
  for (let r of await L(e))
    if (isReservedPluginEntry(r) && !(t && Pz(r) === ".git")) await removeDirectoryRecursive(v(e, r));
}
function isReservedPluginEntry(e) {
  return isReservedOrTempName(e, Rt);
}
var Rt = new Set([...PLUGIN_RESERVED_MARKER_FILES, ".git"]);
async function isLiveLinkFarm(e, { unclassifiableIsFarm: t = !1 } = {}) {
  let r = await classifyLinkFarm(e);
  return r === "live" || (r === "unclassifiable" && t);
}
async function classifyLinkFarm(e) {
  try {
    getPluginLinkMarkerSchema().parse(JSON.parse(await ee(v(e, PLUGIN_LINK_MARKER_FILENAME))));
  } catch (r) {
    if (A(r) !== void 0) return t(r);
  }
  try {
    for (let r of await L(e, { withFileTypes: !0 })) {
      if (isReservedPluginEntry(r.name)) continue;
      try {
        let o = await getDirentFileInfo(e, r);
        if (o.isSymbolicLink && isAbsolute(o.linkTarget ?? (await readlink(v(e, r.name)))))
          return "live";
      } catch (o) {
        if (A(o) === "ENOENT") continue;
        return t(o);
      }
    }
    return "not-live";
  } catch (r) {
    return t(r);
  }
  function t(r) {
    let o = A(r);
    return o === "ENOENT" || o === "ENOTDIR" ? "not-live" : "unclassifiable";
  }
}
var vt = new Set([".ds_store", "thumbs.db", "desktop.ini", "icon\r"]);
function Tt(e) {
  let t = Pz(e);
  return vt.has(t) || t.startsWith("._");
}
function Ct(e) {
  return PLUGIN_RESERVED_MARKER_FILES.has(e);
}
async function isLinkFarmDiverged(e, t) {
  let r = t.replace(/[\\/]+$/, "") + D;
  try {
    for (let o of await L(e, { withFileTypes: !0 })) {
      if (Ct(o.name)) continue;
      let s;
      try {
        let c = await getDirentFileInfo(e, o);
        if (c.isFile && (Tt(o.name) || isReservedOrTempName(o.name, PLUGIN_RESERVED_MARKER_FILES))) continue;
        if (!c.isSymbolicLink) return !0;
        s = c.linkTarget ?? (await readlink(v(e, o.name)));
      } catch (c) {
        if (A(c) === "ENOENT") continue;
        return !0;
      }
      if (!isAbsolute(s) || AB(s) || Ww(s) || !s.startsWith(r)) return !0;
    }
    return !1;
  } catch (o) {
    let s = A(o);
    return s !== "ENOENT" && s !== "ENOTDIR";
  }
}
async function readLinkFarmTarget(e) {
  try {
    return getPluginLinkMarkerSchema().parse(JSON.parse(await ee(v(e, PLUGIN_LINK_MARKER_FILENAME)))).target;
  } catch {
    return;
  }
}
var xt = 16384;
async function ee(e) {
  let t = await lstat(e);
  if (!t.isFile() || t.size > xt)
    throw new PluginSourceError(
      "The link-farm marker is not a small regular file; refusing to read it.",
      "plugin command source link marker not a small regular file",
    );
  return readFile(e, "utf8");
}
function getCommandSource(e) {
  return typeof e === "object" && e.source === "command" ? e : void 0;
}
function isLinkModeSource(e) {
  return getCommandSource(e)?.mode === "link";
}
async function installFromCommandSource(e, t, r, o) {
  if (areCommandPluginSourcesDisabledByPolicy())
    throw new PluginSourceError(COMMAND_PLUGIN_SOURCES_DISABLED_MESSAGE, "plugin command source disabled by managed policy");
  if (e.mode === "link" && getCurrentPlatform() === "windows")
    throw new PluginSourceError(LINK_MODE_WINDOWS_UNSUPPORTED_MESSAGE, "plugin command source link mode unsupported on windows");
  return (
    At(e, o),
    withFeatureTelemetry("plugin_command_install", async () => {
      let s = await wt(e);
      if (wh(s, he(), { foldCase: !0 }))
        throw new PluginSourceError(
          `Plugin source command printed the working directory or one of its parents (${formatDisplayText(s, 300)}); refusing to use it as a plugin.`,
          "plugin command source printed cwd or an ancestor",
        );
      if ((markPluginCommandProducerDirDenied(s), e.mode === "link"))
        return { contentSha256: await Pt(s, t), producerDirectory: s };
      return (
        await Me(s),
        await r(s, t),
        await pruneReservedEntries(t, { keepGit: !1 }),
        { contentSha256: await bt(t), producerDirectory: s }
      );
    })
  );
}
import { createHash as Dt } from "crypto";
var Nt = /^([a-z][a-z\d+\-.]*:)?\/\//i;
function Lt(e, t) {
  let r = t?.baseURL,
    o = Nt.test(e),
    s = null;
  if (o && !isClaudeDownloadsHost(e)) s = e;
  else if (r != null && !isClaudeDownloadsHost(r)) s = r;
  else if (!o && r == null) s = e;
  if (s !== null)
    throw Error(
      `downloads: request (url="${e}"` +
        (r != null ? `, baseURL="${r}"` : "") +
        ") does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts.",
    );
}
var claudeDownloadsHttpClient = {
  get(e, t) {
    return (Lt(e, t), ensureAxiosEgressGuardInstalled(), at.get(e, t));
  },
};
import { homedir as It } from "os";
var Ot = 1e4,
  Mt = 1e6;
function Ft(e) {
  if (isWorkspacePersistedTrusted(e)) return !0;
  return (e === void 0 || e === It()) && VR() && DLn();
}
async function runHeadersHelperCommand(e) {
  if (e.isRepoResidentConfig && !Ft(e.repoResidentOrigin))
    return { ok: !1, reason: "missing_trust" };
  let t = await execFileNoThrowWithCwd(e.command, [], {
    shell: !0,
    timeout: Ot,
    maxBuffer: Mt,
    cwd: e.cwd,
    env: Ht(e),
    extendEnv: !1,
  });
  if (t.code !== 0 || !t.stdout) return { ok: !1, reason: "exec_failed" };
  let r;
  try {
    r = jsonParse(t.stdout.trim());
  } catch {
    return { ok: !1, reason: "parse_failed" };
  }
  if (!isRecord(r)) return { ok: !1, reason: "non_object" };
  let o = {};
  for (let [s, c] of Object.entries(r)) {
    if (typeof c !== "string") return { ok: !1, reason: "non_string_value" };
    o[s] = c;
  }
  return { ok: !0, headers: o };
}
function Ht(e) {
  let t = { ...subprocessEnv() };
  if (!e.scrubCredentialEnv) return { ...t, ...e.env };
  let r = [];
  for (let p of collectEnvVarsToScrub()) {
    let d = process.env[p] ?? t[p];
    if (d !== void 0 && d !== "") r.push(d);
    delete t[p];
  }
  let o = process.env,
    s = {};
  for (let p of new Set([...Object.keys(t), ...Object.keys(o)]))
    s[p] = o[p] ?? t[p];
  for (let p of getRespelledEnvVarsAndLostCredentials(s).lostCredential) {
    let d = s[p];
    if (d !== void 0 && d !== "") r.push(d);
  }
  (Object.assign(t, getRespelledEnvVarsAndLostCredentials(t).respelled), r.sort((p, d) => d.length - p.length));
  let c = {};
  for (let [p, d] of Object.entries(e.env ?? {}))
    c[p] = r.reduce((h, _) => h.split(_).join("REDACTED"), d);
  return { ...t, ...c };
}
var MAX_PLUGIN_ARCHIVE_BYTES = 268435456,
  MAX_MARKETPLACE_CATALOG_BYTES = 5242880,
  Ut = 120000,
  PLUGIN_ARCHIVE_USER_AGENT = "Claude-Code-Plugin-Manager";
async function downloadPluginArchive(e, t = {}) {
  if (!isAllowedArchiveUrl(e))
    throw new R(`${ARCHIVE_URL_POLICY_MESSAGE}: ${sanitizeUrl(e)}`, "plugin archive URL policy rejected");
  let r = sanitizeUrl(e);
  logForDebugging(`Downloading plugin archive from ${r}`);
  let o = t.headers ?? {},
    s = { ...o, "User-Agent": PLUGIN_ARCHIVE_USER_AGENT },
    c = isClaudeDownloadsHost(e) ? claudeDownloadsHttpClient.get : externalHttp.get,
    p = performance.now(),
    d;
  try {
    let _ = await c(e, {
      timeout: Ut,
      responseType: "arraybuffer",
      maxRedirects: 5,
      maxContentLength: MAX_PLUGIN_ARCHIVE_BYTES,
      headers: s,
      beforeRedirect: Bt(e, getInheritableHeaderNames(o)),
    });
    (logPluginRemoteFetch("plugin_archive", e, "success", performance.now() - p),
      (d = Buffer.from(_.data)));
  } catch (_) {
    logPluginRemoteFetch("plugin_archive", e, "failure", performance.now() - p, classifyNetworkErrorKind(_));
    let w = findPluginErrorInCauseChain(_);
    if (w) throw w;
    throw new R(Kt(_, e, r), "plugin archive download failed");
  }
  let h = Dt("sha256").update(d).digest("hex");
  if (t.sha256 && t.sha256.toLowerCase() !== h)
    throw new R(
      `Plugin archive integrity check failed for ${r}: expected sha256 ${t.sha256.toLowerCase()}, got ${h}. The archive was not installed. Verify the sha256 in the marketplace entry, or that the URL serves the intended file.`,
      "plugin archive sha256 mismatch",
    );
  return { data: d, contentSha256: h };
}
function getInheritableHeaderNames(e) {
  return Object.keys(e ?? {}).filter((t) => t.toLowerCase() !== "user-agent");
}
function De(e, t, r = "plugin archive") {
  let o = new Set(t.map((s) => s.toLowerCase()));
  return (s) => {
    if (o.size === 0 || !s.headers) return;
    let c = toUrlString(s);
    if (c && isSameOrigin(e, c)) return;
    let p = 0;
    for (let d of Object.keys(s.headers))
      if (o.has(d.toLowerCase())) (delete s.headers[d], p++);
    if (p > 0)
      logForDebugging(
        `Fetch of ${r} redirected to a different origin; dropped inherited marketplace headers`,
      );
  };
}
function Bt(e, t) {
  let r = De(e, t);
  return (o) => {
    let s = toUrlString(o);
    if (!isAllowedArchiveUrl(s))
      throw new R(
        "Plugin archive redirected to a disallowed URL and was refused \u2014 " +
          `every hop must satisfy the archive URL policy (${ARCHIVE_URL_POLICY_MESSAGE.replace(/^Archive URLs must /, "")}): ` +
          (s ? sanitizeUrl(s) : "(unparseable redirect target)"),
        "plugin archive redirect policy rejected",
      );
    r(o);
  };
}
function createMarketplaceRedirectGuard(e, t) {
  let r = De(e, t, "marketplace catalog");
  return (o) => {
    let s = toUrlString(o);
    if (!(
      s !== "" &&
      (isSameOrigin(e, s) || (s.toLowerCase().startsWith("https:") && !isLoopbackOrMetadataHost(nn(s))))
    ))
      throw new R(
        "Marketplace catalog redirected to a disallowed URL and was refused \u2014 " +
          "a server-chosen cross-origin redirect must use https:// and must not point at a loopback, link-local, or cloud-metadata host (only a hop that stays on the origin you started from is exempt): " +
          (s ? sanitizeUrl(s) : "(unparseable redirect target)"),
        "marketplace catalog redirect policy rejected",
      );
    r(o);
  };
}
function Kt(e, t, r) {
  let o = (s) => s.replaceAll(t, () => r);
  if (isAxiosError(e)) {
    if (e.code === "ECONNREFUSED" || e.code === "ENOTFOUND")
      return `Could not connect to ${r}. Check your network connection and that the archive URL is correct.

Technical details: ${o(e.message)}`;
    if (e.code === "ETIMEDOUT" || e.code === "ECONNABORTED")
      return `Timed out downloading plugin archive from ${r}. The server may be slow or unreachable.

Technical details: ${o(e.message)}`;
    if (e.response) {
      let s = e.response.status;
      return `HTTP ${s} while downloading plugin archive from ${r}.${s === 401 || s === 403 ? " The server rejected the request \u2014 if it requires authentication, add `headers` to the marketplace source (they are forwarded to plugin archives on the same origin) or configure your proxy." : ""}

Technical details: ${o(e.message)}`;
    }
  }
  return `Failed to download plugin archive from ${r}: ${o(l(e))}`;
}
function hasHeadersHelper(e) {
  return typeof e.headersHelper === "string" && e.headersHelper !== "";
}
var ENTRY_HELPER_FAILURE_CODES = {
  unshown: "entry_helper_unshown",
  command: "entry_helper_changed",
  archive_url: "entry_archive_url_changed",
};
function describeCurrentEntryHelper(e, t) {
  let { entry: r } = e;
  return hasHeadersHelper(r) &&
    r.headersHelper !== void 0 &&
    (!e.requireInlinedManifest || r.strict === !1)
    ? { command: r.headersHelper, archiveUrl: t }
    : null;
}
function diffEntryHelperConsent(e, t) {
  if (e === void 0 || e === null) return t === null ? null : "unshown";
  if (t === null) return null;
  if (e.command !== t.command) return "command";
  if (He(t.archiveUrl) !== He(e.archiveUrl)) return "archive_url";
  return null;
}
function He(e) {
  return canonicalFetchSourceUrl(sanitizeUrl(e));
}
function formatEntryHelperRefusalMessage(e, t = "lockdown") {
  let r = formatQuotedDisplayText(e);
  if (t === "remote_policy_unconsented")
    return `"${r}" fetches its archive through a headersHelper command that was not run: ${REMOTE_POLICY_UNCONSENTED_MESSAGE}. The plugin was not installed or updated.`;
  return `"${r}" fetches its archive through a marketplace-declared headersHelper command, and your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and the command was not run; ask your admin to allow it or to declare the marketplace in managed settings.`;
}
var jt = {
  entry_helper_unshown:
    "plugin entry helper consent mismatch at install: entry_helper_unshown",
  entry_helper_changed:
    "plugin entry helper consent mismatch at install: entry_helper_changed",
  entry_archive_url_changed:
    "plugin entry helper consent mismatch at install: entry_archive_url_changed",
  entry_helper_deferred: "plugin headers helper deferred to explicit install",
  entry_helper_disabled_by_policy:
    "plugin entry helper disabled by managed policy",
  entry_helper_unconfirmed:
    "plugin entry helper unconfirmed at install (nothing was announced)",
  entry_helper_not_inlined:
    "plugin entry headersHelper requires strict:false (catalog authoring error)",
  entry_helper_remote_policy_unconsented:
    "plugin entry helper declared by remote managed settings not yet verified and consented",
};
function Wt(e) {
  return ENTRY_HELPER_FAILURE_SEVERITY[e] === "sad";
}
var ENTRY_HELPER_FAILURE_SEVERITY = {
  entry_helper_unshown: "sad",
  entry_helper_changed: "sad",
  entry_archive_url_changed: "sad",
  entry_helper_deferred: "sad",
  entry_helper_disabled_by_policy: "sad",
  entry_helper_unconfirmed: "sad",
  entry_helper_remote_policy_unconsented: "sad",
  entry_helper_not_inlined: "bad",
};
function describePluginFailure(e) {
  if (e instanceof PluginEntryHelperError)
    return { code: e.failureCode, kind: Wt(e.failureCode) ? "sad" : "bad" };
  return { code: "command_source_refused", kind: "sad" };
}
class PluginEntryHelperError extends PluginSourceError {
  failureCode;
  constructor(e, t) {
    super(e, jt[t]);
    this.failureCode = t;
  }
}
function formatEntryHelperMismatchMessage(e, t, r) {
  let o = formatQuotedDisplayText(t),
    s =
      r === "update"
        ? "Review the command now shown, then update again."
        : "Reopen its details in /plugin to review it, then install again.";
  if (e === "unshown")
    return r === "update"
      ? `This update would run a headersHelper command for "${o}" that was not shown on this pane. ${s}`
      : `This install would run a headersHelper command for "${o}" that was not shown to you first. Retry the same install to review the command before it runs.`;
  return e === "command"
    ? `The headersHelper command for "${o}" changed since it was shown. ${s}`
    : `The archive URL for "${o}" changed since its headersHelper command was shown. ${s}`;
}
function resolveTrustedEntryAuth(e) {
  let t =
    e.trustedSettingsEntryAuth !== void 0 &&
    e.trustedSettingsEntryAuth.origin !== "settings" &&
    e.marketplaceSource?.source !== "settings"
      ? void 0
      : e.trustedSettingsEntryAuth;
  if (t !== void 0) {
    let r = t.origin === "settings";
    if (!tn(t.archiveUrl, e.archiveUrl))
      return { entry: {}, operatorAuthored: r, requireInlinedManifest: !1 };
    if (
      t.headersHelper !== void 0 &&
      t.operatorTier === "policySettings" &&
      !policyTierCommandsMayRun()
    )
      throw new PluginEntryHelperError(
        `This plugin's headersHelper was not run: ${REMOTE_POLICY_UNCONSENTED_MESSAGE}.`,
        "entry_helper_remote_policy_unconsented",
      );
    return {
      entry: {
        headers: t.headers,
        headersHelper: t.origin === "addDir" ? void 0 : t.headersHelper,
      },
      operatorAuthored: r,
      requireInlinedManifest: !1,
    };
  }
  if (
    e.marketplaceSource !== void 0 &&
    e.marketplaceSource.source !== "settings"
  )
    return { entry: e.entry, operatorAuthored: !1, requireInlinedManifest: !0 };
  return {
    entry: { headers: e.entry.headers },
    operatorAuthored: !1,
    requireInlinedManifest: !0,
  };
}
async function resolveMarketplaceHeaders(e, t) {
  if (e?.source !== "url") return {};
  let r = t.trustedDeclaration,
    o = `marketplace ${formatQuotedDisplayText(t.marketplaceName ?? sanitizeUrl(e.url))}`,
    s = (d, h) =>
      sanitizePluginHeaders(d, `${o} (${h})`, { operatorAuthored: r?.operatorAuthored === !0 }),
    c = s(
      r ? { ...r.headers } : { ...e.headers },
      r
        ? r.operatorAuthored
          ? "operator declaration"
          : "repo-tier declaration"
        : "state copy",
    );
  if (r?.headersHelper === void 0) return c;
  if (!/^https:\/\//i.test(e.url))
    return (
      logForDebugging(`${o}: headersHelper not run \u2014 marketplace URL is not https`, {
        level: "warn",
      }),
      c
    );
  if (r.authoredBy === "policySettings" && !policyTierCommandsMayRun())
    throw (
      logFeatureSad("plugin_headers_helper", "remote_policy_unconsented"),
      new PluginSourceError(
        `${o}: headersHelper not run \u2014 ${REMOTE_POLICY_UNCONSENTED_MESSAGE}. The marketplace was not fetched.`,
        "marketplace headersHelper from remote managed settings not yet verified and consented",
      )
    );
  if (areCommandPluginSourcesDisabledByPolicy() && r.authoredBy !== "policySettings")
    throw new PluginSourceError(
      `${o}: your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly), and this marketplace's headersHelper is not declared in managed settings. The marketplace was not fetched and the command was not run; ask your admin to allow it or to declare the marketplace in managed settings.`,
      "marketplace headersHelper disabled by managed policy",
    );
  if (!V())
    return (
      logForDebugging(
        `${o}: headersHelper not run \u2014 disabled by the plugin command kill switch`,
        { level: "warn" },
      ),
      c
    );
  let p = await Vt(
    r.headersHelper,
    e.url,
    t.marketplaceName,
    r.operatorAuthored,
  );
  return { ...c, ...s(p, "helper output") };
}
var qt = 60000;
async function Vt(e, t, r, o) {
  let s = `${e}\x00${t}\x00${r ?? ""}\x00${o ? "operator" : "repo"}`,
    c = Date.now(),
    { marketplaceHelperMemo: p } = getPluginRegistryState(),
    d = p.get(s);
  if (d && d.expiresAt > c) return d.headers;
  let h = Xt(e, t, r, o);
  p.set(s, { expiresAt: c + qt, headers: h });
  try {
    return await h;
  } catch (_) {
    throw (p.delete(s), _);
  }
}
async function Xt(e, t, r, o) {
  let s = await runHeadersHelperCommand({
    command: e,
    scrubCredentialEnv: !o,
    isRepoResidentConfig: !1,
    cwd: getClaudeConfigDir(),
    env: {
      CLAUDE_CODE_MARKETPLACE_URL: t,
      ...(r !== void 0 && { CLAUDE_CODE_MARKETPLACE_NAME: r }),
    },
  });
  if (!s.ok)
    throw (
      logFeatureBad("plugin_headers_helper", s.reason),
      new R(
        `marketplace headersHelper failed (${s.reason})`,
        "marketplace headers helper failed",
      )
    );
  return (logFeatureOk("plugin_headers_helper"), s.headers);
}
async function Jt(e, t) {
  let r = (c) =>
      sanitizePluginHeaders(c, `plugin ${formatQuotedDisplayText(t.pluginName)}`, {
        operatorAuthored: t.operatorAuthored === !0,
      }),
    o = r(e.headers ?? {});
  if (!hasHeadersHelper(e) || e.headersHelper === void 0) return o;
  $e(e, { ...t, disabledByPolicy: headersHelperPolicyRefusal(t.marketplaceSource, t.marketplaceName) });
  let s = await runHeadersHelperCommand({
    command: e.headersHelper,
    scrubCredentialEnv: !t.operatorAuthored,
    cwd: getClaudeConfigDir(),
    isRepoResidentConfig: !1,
    env: {
      CLAUDE_CODE_PLUGIN_NAME: t.pluginName,
      CLAUDE_CODE_PLUGIN_ARCHIVE_URL: t.archiveUrl,
    },
  });
  if (!s.ok)
    throw (
      logFeatureBad("plugin_headers_helper", s.reason),
      new R(
        `plugin headersHelper for "${te(t.pluginName)}" failed (${s.reason})`,
        "plugin headers helper failed",
      )
    );
  return (logFeatureOk("plugin_headers_helper"), { ...o, ...r(s.headers) });
}
var Zt = new Set([
    "host",
    "cookie",
    "forwarded",
    "x-real-ip",
    "x-client-ip",
    "true-client-ip",
    "client-ip",
    "cf-connecting-ip",
    "fastly-client-ip",
    "x-originating-ip",
    "x-remote-ip",
    "x-remote-addr",
    "x-cluster-client-ip",
    "connection",
    "upgrade",
    "transfer-encoding",
    "content-length",
    "te",
    "trailer",
    "expect",
    "via",
  ]),
  Qt = ["x-forwarded-", "x-original-", "proxy-"],
  en = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
function isRequestRoutingHeader(e) {
  let t = e.toLowerCase().replaceAll("_", "-");
  return Zt.has(t) || Qt.some((r) => t.startsWith(r));
}
function sanitizePluginHeaders(e, t, { operatorAuthored: r = !1 } = {}) {
  let o = {};
  for (let [s, c] of Object.entries(e)) {
    if (!en.test(s) || /[\r\n\0]/.test(c)) {
      logForDebugging(`Dropping header "${formatQuotedDisplayText(s)}" for ${t}: malformed name or value`, {
        level: "warn",
      });
      continue;
    }
    if (!r && isRequestRoutingHeader(s)) {
      logForDebugging(
        `Dropping header "${formatQuotedDisplayText(s)}" for ${t}: request-routing/identity headers are not accepted from non-operator sources`,
        { level: "warn" },
      );
      continue;
    }
    o[s] = c;
  }
  return o;
}
function te(e) {
  return formatQuotedDisplayText(e);
}
function $e(e, t) {
  if (t.disabledByPolicy !== null)
    throw new PluginEntryHelperError(
      formatEntryHelperRefusalMessage(t.pluginName, t.disabledByPolicy),
      t.disabledByPolicy === "remote_policy_unconsented"
        ? "entry_helper_remote_policy_unconsented"
        : "entry_helper_disabled_by_policy",
    );
  if (t.requireInlinedManifest !== !1 && e.strict !== !1)
    throw new PluginEntryHelperError(
      `Plugin "${te(t.pluginName)}" declares a headersHelper but is not strict:false \u2014 an entry with headersHelper must inline its manifest so its capabilities can be reviewed before the command runs.`,
      "entry_helper_not_inlined",
    );
  if (!t.runEntryHelper)
    throw new PluginEntryHelperError(
      `Plugin "${te(t.pluginName)}" fetches its archive through a headersHelper, ` +
        "which only runs when you install or update it from its own details view \u2014 open this plugin in /plugin (or run `claude plugin install`/`update`), where the command is shown first.",
      "entry_helper_deferred",
    );
}
async function resolveArchiveAuth(e) {
  if (typeof e.pluginSource !== "object" || e.pluginSource.source !== "archive")
    return;
  let t = e.pluginSource.url,
    {
      entry: r,
      operatorAuthored: o,
      requireInlinedManifest: s,
    } = resolveTrustedEntryAuth({
      entry: e.entry,
      archiveUrl: t,
      marketplaceSource: e.marketplaceSource,
      trustedSettingsEntryAuth: e.trustedSettingsEntryAuth,
    }),
    c =
      e.marketplaceSource?.source === "url" ? e.marketplaceSource.url : void 0,
    p = headersHelperPolicyRefusal(e.marketplaceSource, e.marketplaceName);
  if (hasHeadersHelper(r))
    $e(r, {
      pluginName: e.pluginName,
      runEntryHelper: e.runEntryHelper,
      requireInlinedManifest: s,
      operatorAuthored: o,
      disabledByPolicy: p,
    });
  let d =
      c !== void 0 && isSameOrigin(c, t)
        ? await resolveMarketplaceHeaders(e.marketplaceSource, {
            marketplaceName: e.marketplaceName,
            trustedDeclaration: e.trustedMarketplaceAuth,
          })
        : {},
    h = await Jt(r, {
      pluginName: e.pluginName,
      archiveUrl: t,
      runEntryHelper: e.runEntryHelper,
      requireInlinedManifest: s,
      operatorAuthored: o,
      marketplaceSource: e.marketplaceSource,
      marketplaceName: e.marketplaceName,
    }),
    _ = { ...d, ...h };
  if (Object.keys(_).length === 0) return;
  return { url: t, headers: _ };
}
function lookupMarketplaceSource(e, t) {
  let r = getMarketplaceNameFromPluginId(e);
  return r ? t[r]?.source : void 0;
}
function getMarketplaceNameFromPluginId(e) {
  let t = e.split("@");
  return t.length === 2 && t[1] ? t[1] : void 0;
}
function tn(e, t) {
  return canonicalFetchSourceUrl(e) === canonicalFetchSourceUrl(t);
}
function isSameOrigin(e, t) {
  try {
    let r = new URL(e).origin,
      o = new URL(t).origin;
    return r !== "null" && r === o;
  } catch {
    return !1;
  }
}
function nn(e) {
  try {
    return new URL(e).hostname;
  } catch {
    return "";
  }
}
function findPluginErrorInCauseChain(e) {
  let t = e;
  for (let r = 0; r < 5 && t instanceof Error; r++) {
    if (t instanceof R) return t;
    t = t.cause;
  }
  return;
}
function isSyncSettingVetoed(e) {
  let t = (o, s) => {
      let c = parseSettingsFile(o, s);
      return c.settings === null && filterFatalPolicyErrors(c.errors).length > 0;
    },
    r = ["userSettings", "localSettings", "flagSettings"].some((o) => {
      let s = getSettingsFilePathForSource(o);
      if (s === void 0) return !1;
      switch (o) {
        case "flagSettings":
          return t(s, MA() ?? d8());
        case "localSettings": {
          let c = getLegacyLocalSettingsFilePath();
          return t(s) || (c !== void 0 && c !== s && t(c));
        }
        case "userSettings":
          return t(s);
      }
    });
  return (
    !isNotDisabledInTrustedSources(e.settingKey) ||
    (getFatalAdminPolicyLoadErrors().length > 0 && getPolicySettingsOrigin() !== "helper") ||
    r ||
    flagInlineSettingDropped(e.settingKey) ||
    (m_e() && parentManagedTierParticipates()) ||
    getPolicyDenyKind(e.policyKey) === "org_denied" ||
    getPolicyDenyKind(e.policyKey) === "unregistered"
  );
}
function isSyncSettingEnabled(e) {
  if (!isNotDisabledInTrustedSources(e.settingKey)) return !1;
  if (!e.isTierInPlay()) return !1;
  if (getAPIProvider() !== "firstParty") return !1;
  if (a.ANTHROPIC_UNIX_SOCKET) return !1;
  if (Nn()) return !1;
  if (getAuthTokenSource().source !== "claude.ai") return !1;
  if (isEssentialTrafficOnly()) return !1;
  if (!isPolicyAllowed(e.policyKey)) return !1;
  return O(e);
}
function hasClaudeAiAccountAuth() {
  return getAuthTokenSource().source === "claude.ai" && !Nn();
}
function O(e) {
  return getFeatureValue_CACHED_MAY_BE_STALE(e.flagName, !1) === !0;
}
function isSyncPolicyVerdictPending(e) {
  if (isRemoteOrCoworkSession()) return !1;
  let t = getPolicyDenyKind(e.policyKey);
  return t === "cache_miss" || t === "route_missing";
}
function isSyncSettingDisabledBySettings(e) {
  return (
    [...getDurablePolicyTierSettings(), getSettingsForSource("userSettings")].some((r) => r?.[e.settingKey] === !1) ||
    getPolicyDenyKind(e.policyKey) === "org_denied"
  );
}
var I = {
  settingKey: "syncClaudeAiPlugins",
  policyKey: "allow_account_plugins_sync",
  flagName: "tengu_account_plugins_sync_enabled",
  isTierInPlay: () => isPluginsSyncTierInPlay(),
};
function refreshPluginsSyncEnabled() {
  refreshPluginsSyncVetoed();
  let e = rn() && !HW();
  return (ALn(e), e);
}
function refreshPluginsSyncVetoed() {
  CLn(isSyncSettingVetoed(I));
}
function isPluginsSyncVetoed() {
  return (refreshPluginsSyncVetoed(), HW());
}
function shouldIncludeSyncedPlugins() {
  return y_e().length > 0 || isClaudeAiPluginSyncEnabled();
}
function isClaudeAiPluginSyncEnabled() {
  return isPluginSyncForcedByEnv() || (O(I) && hasClaudeAiAccountAuth());
}
function canSyncPluginsFromClaudeAi() {
  return O(I) && hasClaudeAiAccountAuth() && isPluginsSyncTierInPlay() && !isPluginsSyncVetoed();
}
function isAccountPluginsSyncFlagEnabled() {
  return O(I);
}
function isPluginSyncForcedByEnv() {
  return a.CLAUDE_CODE_SYNC_PLUGINS || a.CLAUDE_CODE_SYNC_SESSION_REFS;
}
function isPluginSyncPolicyVerdictPending() {
  return isSyncPolicyVerdictPending(I);
}
function isPluginsSyncTierInPlay() {
  return !isCustomizationDisabled("plugins") && isSettingsSourceEnabled("userSettings");
}
function rn() {
  return isSyncSettingEnabled(I);
}
function isPluginsSyncDisabledBySettings() {
  return isSyncSettingDisabledBySettings(I);
}
function getCcrSessionId(e) {
  let t = e.sessionRefsGate;
  if (t.ccrSessionID() === void 0) {
    let r = a.CLAUDE_CODE_SESSION_ID;
    if (r && sessionIdBody(r) !== r) t.latchCcrSessionID(r);
  }
  return t.ccrSessionID();
}
function on(e) {
  return getCcrSessionId(e) !== void 0;
}
function isSessionRefsSyncEnabled(e) {
  let t = e.sessionRefsGate.syncEnabled();
  if (t !== void 0) return t;
  return e.sessionRefsGate.latchSyncEnabled(
    !!a.CLAUDE_CODE_SYNC_SESSION_REFS && on(e),
  );
}
var B = "user:plugins";
async function sn(e) {
  if (!isPolicyAllowed("allow_plugin_skill_search"))
    return { ok: !1, reason: "policy_disabled" };
  if (!isFirstPartyProvider()) return { ok: !1, reason: "wrong_provider" };
  if (isEssentialTrafficOnly()) return { ok: !1, reason: "essential_traffic_only" };
  if (getSessionAccessToken()) return { ok: !0, expanded: !1 };
  try {
    await checkAndRefreshOAuthTokenIfNeeded({ credentials: e });
  } catch (o) {
    logForDebugging(`[plugins-scope] pre-ensure token freshen failed: ${l(o)}`);
  }
  let t = getClaudeAIOAuthTokens();
  if (!t?.accessToken) return { ok: !1, reason: "no_token" };
  if (t.scopes?.includes(B)) return { ok: !0, expanded: !1 };
  if (t.clientId) return { ok: !1, reason: "custom_client" };
  if (!t.refreshToken) return { ok: !1, reason: "no_refresh" };
  if (await isOAuthRefreshKnownDeadAsync(e)) return { ok: !1, reason: "no_refresh" };
  if (hasAttemptedScopeExpansion(t.refreshToken))
    return {
      ok: !1,
      reason: "expand_failed",
      detail: "expansion already attempted this session for this credential",
    };
  let r = !1;
  try {
    return await withOAuthRefreshLock(
      async ({ lockedTokens: o, isCompromised: s, signal: c }) => {
        if (!o?.refreshToken) return { ok: !1, reason: "no_refresh" };
        if (s()) return { ok: !1, reason: "lock_contended" };
        if (o.scopes?.includes(B)) return { ok: !0, expanded: !1 };
        if (o.clientId) return { ok: !1, reason: "custom_client" };
        if (await isOAuthRefreshKnownDeadAsync(e)) return { ok: !1, reason: "no_refresh" };
        let p;
        try {
          ((r = !0),
            recordScopeExpansionAttempt(o.refreshToken),
            (p = await refreshOAuthToken(o.refreshToken, {
              clientId: o.clientId,
              scopes: dedupe([...CLAUDE_AI_OAUTH_SCOPES, ...preservableScopesFrom(o.scopes), B]),
              signal: c,
              telemetryContext: "plugins_scope_expansion",
            })));
        } catch (h) {
          if (isInvalidGrantError(h) && !s()) await markRefreshTokenDeadAfterInvalidGrant(o.refreshToken, e);
          if (s() || yt(h)) return { ok: !1, reason: "lock_contended" };
          throw h;
        }
        let d = await saveRefreshedOAuthTokensRespectingLock({
          isCompromised: s,
          postedRefreshToken: o.refreshToken,
          refreshedTokens: p,
          credentials: e,
        });
        if (p.refreshToken) recordScopeExpansionAttempt(p.refreshToken);
        if (d === "adopted_sibling")
          return { ok: !1, reason: "lock_contended" };
        if (d === "save_failed")
          return (
            logFeatureSad("plugins_scope_expansion", "save_failed"),
            { ok: !1, reason: "save_failed" }
          );
        if (!p.scopes?.includes(B))
          return (
            logFeatureSad("plugins_scope_expansion", "expand_failed"),
            {
              ok: !1,
              reason: "expand_failed",
              detail: "refresh succeeded but user:plugins not granted",
            }
          );
        return (logFeatureOk("plugins_scope_expansion"), { ok: !0, expanded: !0 });
      },
      e,
    );
  } catch (o) {
    if (o instanceof lge || yt(o)) return { ok: !1, reason: "lock_contended" };
    if (!r) return { ok: !1, reason: "lock_contended", detail: l(o) };
    return (
      logFeatureSad("plugins_scope_expansion", "expand_failed"),
      { ok: !1, reason: "expand_failed", detail: l(o) }
    );
  }
}
class Ue {
  inFlight = void 0;
  begin(e) {
    this.inFlight = e;
  }
  settle(e) {
    if (this.inFlight === e) this.inFlight = void 0;
  }
}
var an = new j(() => new Ue()),
  ln = 15000;
function cn(e, t) {
  let r = an.of(e),
    o = r.inFlight;
  if (o) return o;
  let s = sn(t)
      .then((p) => {
        if (!p.ok)
          logForDebugging(
            `[plugins-scope] expansion skipped/failed: ${p.reason}${p.detail ? ` (${p.detail})` : ""}`,
          );
        return p;
      })
      .catch((p) => {
        let d = l(p);
        return (
          logForDebugging(`[plugins-scope] unexpected ensure error: ${d}`),
          { ok: !1, reason: "expand_failed", detail: d }
        );
      })
      .then((p) => (r.settle(s), c(), p)),
    c = registerCleanup(() => withDeadline(s, ln));
  return (r.begin(s), s);
}
var un = 1e4;
async function ensurePluginsOAuthScope(e, t, r, o = un) {
  if (t?.aborted) return;
  let s = cn(e, r);
  if (!t) {
    await withDeadline(s, o);
    return;
  }
  let c,
    p = new Promise((d) => {
      ((c = () => d()), t.addEventListener("abort", c, { once: !0 }));
    });
  try {
    await withDeadline(Promise.race([s, p]), o);
  } finally {
    t.removeEventListener("abort", c);
  }
}
function describeListFailure(e, t) {
  if (!t.ok)
    return t.reason === "no-auth"
      ? { success: !1, error: t.detail, kind: "no_auth" }
      : { success: !1, error: t.reason, kind: "gated" };
  let r = getApiErrorEnvelopeSchema().safeParse(t.data);
  if (r.success) {
    let o = r.data.error.type ?? "error_envelope_no_type";
    return (
      writeDiagnosticsEvent(
        "warn",
        e === "skills" ? "skills_sync_list_error" : "plugins_sync_list_error",
        { serverError: o, status: t.status },
      ),
      { success: !1, error: o, kind: "server_error", status: t.status }
    );
  }
  return (
    writeDiagnosticsEvent(
      "warn",
      e === "skills"
        ? "skills_sync_list_malformed"
        : "plugins_sync_list_malformed",
    ),
    { success: !1, error: `malformed list-${e} response`, kind: "malformed" }
  );
}
function describeSyncError(e) {
  let { kind: t, message: r } = Ps(e);
  return { success: !1, error: r, kind: t };
}
function getSyncFailureTelemetry(e) {
  return { kind: fromEnum(e.kind), ...(e.status !== void 0 && { status: e.status }) };
}
var getApiErrorEnvelopeSchema = createLazyValue(() =>
  nt({
    error: nt({
      type: le().optional(),
      message: le()
        .nullish()
        .catch(void 0),
    }),
  }),
);
function parseServerErrorType(e) {
  try {
    let t = getApiErrorEnvelopeSchema().safeParse(jsonParse(e.toString("utf8", 0, 2048)));
    if (t.success) return t.data.error.type ?? "error_envelope_no_type";
  } catch {}
  return "non_json_body";
}
import { createWriteStream } from "fs";
import { open as fn, rm as je, writeFile as mn } from "fs/promises";
import { Transform as gn } from "stream";
import { pipeline } from "stream/promises";
function Ge(e) {
  let t = parseInstallationPreference(e.installation_preference);
  return {
    pluginId: e.id,
    name: e.name,
    description: e.description ?? "",
    version: e.version ?? null,
    updatedAt: e.updated_at ?? null,
    ...(typeof e.marketplace_name === "string" &&
      e.marketplace_name && { marketplaceName: e.marketplace_name }),
    ...(t && { installationPreference: t }),
  };
}
function Ke(e) {
  return e.enabled !== !1;
}
var yn = 1e4,
  oe = 60000,
  ze = 500,
  Ye = 100,
  ne = 20,
  re = MAX_PLUGIN_ARCHIVE_BYTES;
function _n() {
  return a.CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS ?? oe;
}
var wn =
  "/api/oauth/organizations/:orgUUID/plugins/list-plugins?enabled_only=true&compact=true";
async function Sn(e) {
  let t = await e();
  if (t.ok) return t;
  return (await sleep(ze), e());
}
async function listOrganizationPlugins(e, t = {}) {
  await ensurePluginsOAuthScope(e, t.signal, t.credentials);
  let r = await We(t);
  if (r.success || r.status === 403) return r;
  return (await sleep(ze), We(t));
}
async function We(e) {
  let t = [];
  try {
    for (let r = 0; r < ne; r++) {
      let o = r * Ye,
        s = await httpClient.get(`${wn}&limit=${Ye}&offset=${o}`, {
          auth: "teleport-org",
          isBackground: e.isBackground,
          timeout: yn,
          credentials: e.credentials,
        });
      if (!s.ok || !Array.isArray(s.data?.plugins)) return describeListFailure("plugins", s);
      for (let c of s.data.plugins) if (Ke(c)) t.push(Ge(c));
      if (s.data.has_more !== !0) return { success: !0, plugins: t };
    }
    return (
      writeDiagnosticsEvent("warn", "plugins_sync_list_page_cap", {
        pages: ne,
        collected: t.length,
      }),
      {
        success: !1,
        error: `list-plugins page cap (${ne}) exceeded`,
        kind: "page_cap",
      }
    );
  } catch (r) {
    return describeSyncError(r);
  }
}
function buildPluginDownloadUrl(e, t) {
  let r = [];
  if (t) r.push(`version=${encodeURIComponent(t)}`);
  if (a.CLAUDE_CODE_CCR_SURFACE === "tag")
    r.push("included_default_marketplaces=claude-tag-plugins");
  let o = r.length > 0 ? `?${r.join("&")}` : "";
  return `/api/oauth/organizations/:orgUUID/plugins/${encodeURIComponent(e)}/download${o}`;
}
async function downloadOrganizationPlugin(e, t, r, o = {}) {
  return Sn(() => kn(e, t, r, o));
}
async function kn(e, t, r, o) {
  let s = buildPluginDownloadUrl(e, r);
  if (a.CLAUDE_CODE_SYNC_PLUGINS_BUFFERED_DOWNLOAD) return En(s, t, o);
  let c = 0,
    p = !1;
  try {
    let S = function () {
        ((p = !0), w.destroy(Error("plugin download stream stalled")));
      },
      d = await httpClient.get(s, {
        auth: "teleport-org",
        isBackground: o.isBackground,
        timeout: oe,
        responseType: "stream",
        credentials: o.credentials,
      });
    if (!d.ok || !d.data) {
      let k = d.ok ? "empty_body" : d.reason;
      return (
        writeDiagnosticsEvent("warn", "plugins_sync_download_not_ok", { reason: k }),
        { ok: !1, reason: k }
      );
    }
    let h = _n(),
      _,
      w = new gn({
        transform(k, ie, x) {
          if (
            (clearTimeout(_), (_ = setTimeout(S, h)), (c += k.length), c > re)
          )
            x(Error("plugin zip exceeds download byte cap"));
          else x(null, k);
        },
        flush(k) {
          (clearTimeout(_), k());
        },
      });
    _ = setTimeout(S, h);
    try {
      await pipeline(d.data, w, createWriteStream(t));
    } finally {
      clearTimeout(_);
    }
    let b = Buffer.alloc(2048),
      C = await fn(t, "r"),
      T;
    try {
      T = (await C.read(b, 0, b.length, 0)).bytesRead;
    } finally {
      await C.close();
    }
    if (T < 2 || b[0] !== 80 || b[1] !== 75) {
      await je(t, { force: !0 });
      let k = T === 0 ? "empty_body" : parseServerErrorType(b.subarray(0, T));
      return (
        writeDiagnosticsEvent("warn", "plugins_sync_download_not_zip", {
          serverError: k,
          bodyLen: c,
        }),
        { ok: !1, reason: k }
      );
    }
    return { ok: !0 };
  } catch (d) {
    await je(t, { force: !0 }).catch(() => {});
    let h = d?.response?.data;
    if (
      h !== null &&
      typeof h === "object" &&
      "destroy" in h &&
      typeof h.destroy === "function"
    )
      h.destroy();
    let _ =
        d !== null && typeof d === "object" && "code" in d ? d.code : void 0,
      w = p
        ? "timeout"
        : c > re
          ? "too_large"
          : _ === "ECONNRESET" || _ === "EPIPE" || _ === "ETIMEDOUT"
            ? "network"
            : Ps(d).kind;
    return (
      writeDiagnosticsEvent("warn", "plugins_sync_download_exception", { kind: w }),
      { ok: !1, reason: w }
    );
  }
}
async function En(e, t, r) {
  try {
    let o = await httpClient.get(e, {
      auth: "teleport-org",
      isBackground: r.isBackground,
      timeout: oe,
      responseType: "arraybuffer",
      maxContentLength: re,
      credentials: r.credentials,
    });
    if (!o.ok || !o.data) {
      let c = o.ok ? "empty_body" : o.reason;
      return (
        writeDiagnosticsEvent("warn", "plugins_sync_download_not_ok", { reason: c }),
        { ok: !1, reason: c }
      );
    }
    let s = Buffer.from(o.data);
    if (s.length < 2 || s[0] !== 80 || s[1] !== 75) {
      let c = s.length === 0 ? "empty_body" : parseServerErrorType(s);
      return (
        writeDiagnosticsEvent("warn", "plugins_sync_download_not_zip", {
          serverError: c,
          bodyLen: s.length,
        }),
        { ok: !1, reason: c }
      );
    }
    return (await mn(t, s), { ok: !0 });
  } catch (o) {
    let { kind: s } = Ps(o);
    return (
      writeDiagnosticsEvent("warn", "plugins_sync_download_exception", { kind: s }),
      { ok: !1, reason: s }
    );
  }
}
var bn = createLazyValue(() => {
    let e = le()
        .nullish()
        .transform((o) => o ?? ""),
      t = nt({ id: e, name: e, description: e, version: e, directory: e }),
      r = cr(t)
        .nullish()
        .transform((o) => o ?? []);
    return nt({ skills: r, plugins: r }).strict();
  }),
  An = 30000,
  Pn = 500;
class Ve {
  inflight = null;
  featureEventReported = new Set();
  fetch() {
    if (!this.inflight) {
      let e = Rn().finally(() => {
        if (this.inflight === e) this.inflight = null;
      });
      this.inflight = e;
    }
    return this.inflight;
  }
  discardInflight() {
    this.inflight = null;
  }
  async listEntries(e) {
    let t =
        e === "skills"
          ? "sync_session_refs_skills"
          : "sync_session_refs_plugins",
      r = !this.featureEventReported.has(e);
    this.featureEventReported.add(e);
    let o = await this.fetch();
    if (!o.ok) {
      if (
        (logEvent(
          e === "skills"
            ? "tengu_skills_sync_manifest_failed"
            : "tengu_plugins_sync_manifest_failed",
          { unavailable: o.reason === "unavailable" },
        ),
        r)
      )
        logFeatureBad(t, o.reason);
      return { success: !1, error: `manifest ${o.reason}`, kind: "manifest" };
    }
    if (r) logFeatureOk(t);
    return { success: !0, entries: o[e] };
  }
}
var sessionRefsManifestStore = new Gt(() => new Ve());
async function Rn() {
  let e = await qe();
  if (e.ok || e.reason === "no_auth" || e.reason === "gated") return e;
  return (await sleep(Pn), qe());
}
async function qe() {
  try {
    let e = await httpClient.get("/worker/skill-manifest", {
      host: "ccr-session",
      auth: "session-jwt",
      headers: { "anthropic-version": "2023-06-01" },
      timeout: An,
      validateStatus: () => !0,
    });
    if (!e.ok) {
      if (e.reason === "no-auth")
        return (
          writeDiagnosticsEvent("warn", "session_refs_manifest_no_auth"),
          { ok: !1, reason: "no_auth" }
        );
      return (
        writeDiagnosticsEvent("warn", "session_refs_manifest_gated", { reason: e.reason }),
        { ok: !1, reason: "gated" }
      );
    }
    if (e.status === 503)
      return (
        writeDiagnosticsEvent("warn", "session_refs_manifest_unavailable"),
        { ok: !1, reason: "unavailable" }
      );
    if (e.status >= 300)
      return (
        writeDiagnosticsEvent("warn", "session_refs_manifest_http_error", { status: e.status }),
        { ok: !1, reason: "http_error" }
      );
    let t = bn().safeParse(e.data);
    if (!t.success)
      return (
        writeDiagnosticsEvent("warn", "session_refs_manifest_malformed"),
        { ok: !1, reason: "malformed" }
      );
    return {
      ok: !0,
      skills: t.data.skills.filter((r) => r.id),
      plugins: t.data.plugins.filter((r) => r.id),
    };
  } catch (e) {
    let { kind: t } = Ps(e);
    return (
      writeDiagnosticsEvent("warn", "session_refs_manifest_exception", { kind: t }),
      { ok: !1, reason: "transport" }
    );
  }
}
export {
  claudeDownloadsHttpClient,
  OFFICIAL_MARKETPLACE_SOURCE,
  OFFICIAL_MARKETPLACE_NAME,
  logPluginRemoteFetch,
  classifyNetworkErrorKind,
  ensurePluginsOAuthScope,
  PLUGIN_CONTENT_SUBDIRS,
  PLUGIN_CONTENT_MARKERS,
  hasPluginContentEntries,
  resolvePluginRoot,
  isPluginCommandSourceRefreshEnabled,
  isPluginsRootUnreliable,
  buildTempPluginDirName,
  PLUGIN_TEMP_EXTRACT_SUFFIX,
  PLUGIN_TEMP_CLONE_SUFFIX,
  PLUGIN_TEMP_DIR_PATTERN,
  LINKING_STAGING_DIR_PATTERN,
  LINK_MODE_WINDOWS_UNSUPPORTED_MESSAGE,
  getSourceCommandKey,
  describeSourceMode,
  PluginSourceError,
  relinkPluginFarm,
  pruneReservedEntries,
  isReservedPluginEntry,
  isLiveLinkFarm,
  classifyLinkFarm,
  isLinkFarmDiverged,
  readLinkFarmTarget,
  getCommandSource,
  isLinkModeSource,
  installFromCommandSource,
  runHeadersHelperCommand,
  MAX_PLUGIN_ARCHIVE_BYTES,
  MAX_MARKETPLACE_CATALOG_BYTES,
  PLUGIN_ARCHIVE_USER_AGENT,
  downloadPluginArchive,
  getInheritableHeaderNames,
  createMarketplaceRedirectGuard,
  hasHeadersHelper,
  ENTRY_HELPER_FAILURE_CODES,
  describeCurrentEntryHelper,
  diffEntryHelperConsent,
  formatEntryHelperRefusalMessage,
  ENTRY_HELPER_FAILURE_SEVERITY,
  describePluginFailure,
  PluginEntryHelperError,
  formatEntryHelperMismatchMessage,
  resolveTrustedEntryAuth,
  resolveMarketplaceHeaders,
  isRequestRoutingHeader,
  sanitizePluginHeaders,
  resolveArchiveAuth,
  lookupMarketplaceSource,
  getMarketplaceNameFromPluginId,
  isSameOrigin,
  findPluginErrorInCauseChain,
  describeListFailure,
  describeSyncError,
  getSyncFailureTelemetry,
  getApiErrorEnvelopeSchema,
  parseServerErrorType,
  listOrganizationPlugins,
  buildPluginDownloadUrl,
  downloadOrganizationPlugin,
  isSyncSettingVetoed,
  isSyncSettingEnabled,
  hasClaudeAiAccountAuth,
  isSyncPolicyVerdictPending,
  isSyncSettingDisabledBySettings,
  refreshPluginsSyncEnabled,
  refreshPluginsSyncVetoed,
  isPluginsSyncVetoed,
  shouldIncludeSyncedPlugins,
  isClaudeAiPluginSyncEnabled,
  canSyncPluginsFromClaudeAi,
  isAccountPluginsSyncFlagEnabled,
  isPluginSyncForcedByEnv,
  isPluginSyncPolicyVerdictPending,
  isPluginsSyncTierInPlay,
  isPluginsSyncDisabledBySettings,
  getCcrSessionId,
  isSessionRefsSyncEnabled,
  sessionRefsManifestStore,
};
