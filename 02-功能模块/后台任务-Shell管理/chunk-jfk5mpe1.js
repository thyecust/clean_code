// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ie, Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { sleep, withDeadline } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { bc, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { R, l, A, Jr, w8, H_e, I_e, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { ou, b, z, Is, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodeUnits, takeLastCodeUnits, CONTROL_CHARS_REGEX, normalizeWhitespace } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { wS } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { execFileNoThrow } from "../Git-Worktree/git-exec-hardening.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { PROCESS_WRAPPER_ENV_VAR, getProcessWrapperState, getLauncherArgv, getLauncherConfigError, isLauncherRunnable, isExecutableFile, getAbsoluteLauncherPaths, getLauncherErrorMessage, getLauncherCommandString } from "../../01-核心基础设施/核心工具-进程与信号/process-wrapper-launcher.js";
import { stripAnsi } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { Nt } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { removeGuiHostEntrypoint, g4, removeBgDispatcherPlanEnvVars } from "../../01-核心基础设施/共享小工具-未细化/session-env-scrubbing.js";
import { PROVIDER_CONFIG_ENV_VARS, BASE_URL_ENV_VARS, API_KEY_ENV_VARS, TOKEN_FD_ENV_VARS, clearAwsEnvVars, getHostAuthEnvVarName } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getSecureStorage } from "../认证-OAuth登录/secure-storage.js";
import { resolveWrappedClaudeInvocation, resolveClaudeInvocation, getInstalledClaudePath, applyProcessWrapper, findInstalledVersionBinary } from "../../01-核心基础设施/共享小工具-未细化/claude-launcher-invocation.js";
import { readBoundedFile, getVersionForAnalytics, getFeatureValue_CACHED_MAY_BE_STALE, getGlobalConfig, getDaemonColdStart } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { te, gm, mW, i_, dp, truncateToWidth } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { quarantineJobTranscript, resolveJobTranscript } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { CLAUDE_BULLET_GLYPH, THEREFORE_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { procIdentityOf } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { timingSafeStringEqual } from "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import { isDaemonCliEnabled, isDaemonServiceInstallEnabled, bgSupervisorNoun } from "../../01-核心基础设施/共享小工具-未细化/agent-view-feature-gates.js";
import { getVersionTarget, hasVersionTarget, parseVersionTimestamp } from "./chunk-gnmy62vg.js";
import { terminateProcessGracefully, getDaemonLockPath, readDaemonLock, LOCK_VERIFY_ATTEMPTS, verifyProcessStartTime, classifyDaemonLockStaleness, isProcessIdentityKnown, getVerifiedDaemonLock, describeStopFailure } from "./daemon-lock.js";
import { hasUidCollapse, redactDaemonNonce, readOrCreateControlKey, ensureDaemonRuntimeDir, UID_COLLAPSE_REFUSAL_MESSAGE, getControlSocketPath } from "./chunk-djserjj5.js";
import {
  k8e,
  oyn,
  BG_PROTO,
  BG_PROTO_MIN,
  wrapDaemonHint,
  daemonDetachApc,
  RESPAWNING_ATTACH_CODE,
  RESPAWN_REASON_UPGRADE,
  RESPAWN_REASON_STALL,
  RESPAWN_REASON_LEGACY,
  HOST_DIED_ATTACH_MESSAGE,
  HOST_DIED_EXEC_ATTACH_MESSAGE,
  ControlRequestSchema,
  DAEMON_LEASE_LABELS,
  updateRoster,
  getJobDir,
  readJobState,
} from "./chunk-7wsy8vxb.js";
import { controlRequest } from "../../01-核心基础设施/共享小工具-未细化/chunk-9fpz6abc.js";
import { enableTerminalMode, HIDE_CURSOR } from "../../01-核心基础设施/共享小工具-未细化/terminal-mode-sequences.js";
import { markdownParser } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { getPowerShellPath } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getSyntaxHighlightAdapter } from "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import { HJn } from "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import { o0e, aE } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import { getThemeColor } from "../../01-核心基础设施/共享小工具-未细化/theme-color.js";
import { fromJobState } from "../../01-核心基础设施/共享小工具-未细化/chunk-tpraq69b.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { createBackendHandle, createTranscriptSource } from "../../01-核心基础设施/共享小工具-未细化/hover-rest-transcript.js";
import { getLocalBinDir } from "../../01-核心基础设施/共享小工具-未细化/user-directories.js";
import { pg } from "../../00-第三方库/_未识别/第三方库-其他/chunk-jm5cswvd.js";
import { getGraphemeSegmenter } from "../../01-核心基础设施/共享小工具-未细化/intl-text-utils.js";
import { CONTROL_PROMPT_PREFIX_RE } from "../../01-核心基础设施/共享小工具-未细化/user-prompt-text.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { toESM } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
import {
  access as dr,
  mkdir,
  readFile as fr,
  stat as At,
  unlink as pr,
  writeFile,
} from "fs/promises";
import { homedir as Ct } from "os";
import { join as Ge } from "path";
import { setTimeout as gr } from "timers/promises";
var be = "com.anthropic.claude-daemon";
async function ole() {
  return !0;
}
function OZt() {
  if (!bc()) return process.argv[1];
  return Ge(getLocalBinDir(), "claude");
}
function Te(t) {
  return Nt(t.replace(/[\r\n]/g, " "));
}
function at() {
  return Ge(Ct(), "Library", "LaunchAgents", `${be}.plist`);
}
function Tt() {
  return `gui/${process.getuid()}`;
}
function Ke() {
  return `${Tt()}/${be}`;
}
async function OWe(t) {
  let { jsonPath: e, logPath: o } = t,
    c = await getLauncherErrorMessage();
  if (c)
    return {
      ok: !1,
      error: `${c} \u2014 refusing to install a service that would run unwrapped`,
      serviceId: be,
      servicePath: "",
    };
  let s = [...getLauncherArgv(), OZt()],
    d = a.PATH || "/usr/local/bin:/usr/bin:/bin";
  {
    let m = at();
    try {
      (await mkdir(Ge(Ct(), "Library", "LaunchAgents"), { recursive: !0 }),
        await writeFile(
          m,
          `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>${be}</string>
  <key>ProgramArguments</key><array>
${s.map((E) => `    <string>${Te(E)}</string>`).join(`
`)}
    <string>daemon</string>
    <string>--json-path</string>
    <string>${Te(e)}</string>
    <string>--log-file</string>
    <string>${Te(o)}</string>
    <string>--origin</string>
    <string>service</string>
  </array>
  <key>EnvironmentVariables</key><dict>
    <key>PATH</key><string>${Te(d)}</string>
  </dict>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><dict><key>SuccessfulExit</key><false/></dict>
  <key>ThrottleInterval</key><integer>10</integer>
  <key>StandardOutPath</key><string>${Te(o)}</string>
  <key>StandardErrorPath</key><string>${Te(o)}</string>
</dict></plist>
`,
          "utf8",
        ));
    } catch (E) {
      return { ok: !1, error: l(E), serviceId: be, servicePath: m };
    }
    await execFileNoThrow("launchctl", ["bootout", Ke()], { useCwd: !1 });
    let {
      code: _,
      stderr: w,
      error: k,
    } = await execFileNoThrow("launchctl", ["bootstrap", Tt(), m], { useCwd: !1 });
    if (_ !== 0)
      return {
        ok: !1,
        error: w || k || "launchctl bootstrap failed",
        serviceId: be,
        servicePath: m,
      };
    return { ok: !0, serviceId: be, servicePath: m };
  }
  return {
    ok: !1,
    error: `service install not available on ${"darwin"} \u2014 the daemon runs on demand instead`,
    serviceId: be,
    servicePath: "",
  };
}
async function XHe() {
  {
    let t = at();
    await execFileNoThrow("launchctl", ["bootout", Ke()], { useCwd: !1 });
    try {
      await pr(t);
    } catch (e) {
      if (!W(e)) return { ok: !1, error: l(e) };
    }
    return { ok: !0 };
  }
  return { ok: !1, error: "service uninstall not available on darwin" };
}
async function vPt() {
  return st("start");
}
async function DWe() {
  return st("stop");
}
async function V$n() {
  return st("restart");
}
async function st(t) {
  {
    let e = Ke(),
      o;
    switch (t) {
      case "start":
        o = ["kickstart", e];
        break;
      case "stop":
        o = ["kill", "SIGTERM", e];
        break;
      case "restart": {
        await execFileNoThrow("launchctl", ["kill", "SIGTERM", e], { useCwd: !1 });
        let m = !1;
        for (let _ = 0; _ < 200; _++) {
          let w = await execFileNoThrow("launchctl", ["print", e], { useCwd: !1 });
          if (w.code !== 0 || !/^\s*pid = /m.test(w.stdout)) {
            m = !0;
            break;
          }
          await gr(50);
        }
        if (!m)
          return {
            ok: !1,
            error:
              "daemon did not exit within 10s of SIGTERM; restart aborted before kickstart",
          };
        o = ["kickstart", e];
        break;
      }
    }
    let {
      code: c,
      stderr: s,
      error: d,
    } = await execFileNoThrow("launchctl", o, { useCwd: !1 });
    if (c !== 0) {
      if (t === "stop") return { ok: !0 };
      return { ok: !1, error: s || d || `launchctl ${o[0]} failed` };
    }
    return { ok: !0 };
  }
  return {
    ok: !1,
    error: `service ${t} not available on ${"darwin"} \u2014 the daemon runs on demand instead`,
  };
}
async function hr() {
  let t = at();
  if (!t) return null;
  let e;
  try {
    let o = await At(t);
    if (!o.isFile() || o.size > 1048576) return null;
    e = await fr(t, "utf8");
  } catch {
    return null;
  }
  return [
    ...(e
      .match(/<key>ProgramArguments<\/key><array>([\s\S]*?)<\/array>/)?.[1]
      ?.matchAll(/<string>([^<]*)<\/string>/g) ?? []),
  ].map((o) => o[1]);
}
function Pt(t) {
  return t
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<")
    .replaceAll("&amp;", "&");
}
async function RPt() {
  let t = { execPathStale: !1, launcherPrefixDead: !1 },
    e = await hr();
  if (!e) return t;
  let o = e.lastIndexOf("daemon"),
    c = o > 0 ? e[o - 1] : void 0;
  if (!c) return t;
  try {
    await dr(Pt(c));
  } catch {
    t.execPathStale = !0;
  }
  let s = e.slice(0, o - 1).map(Pt);
  for (let d of getAbsoluteLauncherPaths(s))
    if (!(await isExecutableFile(d))) {
      t.launcherPrefixDead = !0;
      break;
    }
  return t;
}
async function tF() {
  {
    let { code: t } = await execFileNoThrow("launchctl", ["print", Ke()], {
      useCwd: !1,
      timeout: 5000,
    });
    return t === 0;
  }
  return !1;
}
import { spawn } from "child_process";
import { constants } from "fs";
import {
  access as wr,
  mkdtemp,
  open as Er,
  readdir,
  stat as dt,
} from "fs/promises";
import { homedir as yr, tmpdir } from "os";
import { join as lt } from "path";
var xr = 1e4,
  Pr = 250,
  Ye = 120000,
  kr = 1000,
  Cr = 600000,
  ze = "/node_modules/@anthropic-ai/",
  Ot = 65536,
  ft = "claude native binary not installed",
  Tr = 60000;
async function Mt(t) {
  try {
    let e = await dt(t);
    if (!e.isFile() || e.size >= Ot) return "present";
    return Date.now() - Math.max(e.mtimeMs, e.ctimeMs) < Tr
      ? "fresh_stub"
      : "stale_stub";
  } catch (e) {
    return A(e) === "ENOENT" ? "missing" : "present";
  }
}
var Rr = new Set([
  "ENOENT",
  "EACCES",
  "ENOEXEC",
  "EFTYPE",
  "ETXTBSY",
  "EBUSY",
  "EUNKNOWN",
  "EPERM",
]);
async function vit(t, e) {
  let o = getLauncherConfigError();
  if (o)
    return (
      logFeatureBad("agent_launcher", "invalid_config"),
      { err: new R(o, "CLAUDE_CODE_PROCESS_WRAPPER is misconfigured") }
    );
  if (!(await isLauncherRunnable()))
    return (
      logFeatureBad("agent_launcher", "launcher_not_runnable"),
      {
        err: new R(
          `${PROCESS_WRAPPER_ENV_VAR}: launcher \`${getLauncherArgv()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting); background sessions are not started unwrapped`,
          "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable",
        ),
      }
    );
  let c = getLauncherArgv(),
    { cmd: s, prefixArgs: d, target: m } = resolveWrappedClaudeInvocation(),
    _ = [s, ...d, ...t],
    w = Br({ dropShellOAuthToken: await $r(e) });
  if (getCurrentPlatform() === "windows") {
    if (getProcessWrapperState().platformIgnored) logFeatureSad("agent_launcher", "platform_unsupported");
    let T = await It(_, w);
    if (T.ok) return { err: null };
    (n(
      `daemon: WMI spawn failed (${T.reason}); falling back to direct spawn \u2014 daemon will not survive SSH/terminal close`,
      { level: "warn" },
    ),
      logEvent("tengu_bg_daemon_wmi_fallback", {
        timeout: T.reason === "timeout",
        enoent: T.reason === "enoent",
        no_powershell: T.reason === "no-powershell",
        rc: T.rc,
      }));
  }
  let k = getCurrentPlatform() === "macos" ? await Ir() : [],
    E = await mkdtemp(lt(tmpdir(), "cc-daemon-")).catch(() => null),
    v = E ? lt(E, "stderr.log") : void 0,
    N = v ? await Er(v, "w").catch(() => null) : null;
  try {
    if (c.length > 0) return { ...(await Dr(t, w, k, N)), stderrPath: v };
    let T = await Pe(await Re(k, _), w, N?.fd),
      { err: V } = T,
      I = A(V),
      ne = !1,
      Y;
    if (I !== void 0 && Rr.has(I) && Me(m)) {
      let r = await Je(m);
      if (
        ((ne = !r.recovered && r.installInProgressAtEnd),
        (Y = r.waitedMs),
        r.recovered)
      ) {
        if (getCurrentPlatform() === "windows")
          T = (await It(_, w)).ok ? { err: null } : await Pe(_, w, N?.fd);
        else T = await Pe(await Re(k, _), w, N?.fd);
        I = A(T.err);
      }
      if (
        (logEvent("tengu_bg_daemon_spawn_reinstall_wait", {
          waited_ms: r.waitedMs,
          recovered: r.recovered,
          respawn_ok: r.recovered && T.err === null,
          extended: r.extended,
          install_in_progress: r.installInProgressAtEnd,
          errno: Jr(V) ?? S("unknown"),
          ...(r.recovered &&
            T.err !== null && { respawn_errno: Jr(T.err) ?? S("unknown") }),
        }),
        r.recovered && T.err === null)
      )
        return (
          n(
            `daemon: ${m} was being reinstalled (exec ${A(V)}); started it after ${r.waitedMs}ms`,
          ),
          {
            ...T,
            stderrPath: v,
            recoveredAfterReinstallWait: !0,
            reinstallWaitedMs: Y,
          }
        );
      n(
        r.recovered
          ? `daemon: ${m} came back after ${r.waitedMs}ms of an npm reinstall but starting it failed again (exec ${A(T.err)})`
          : `daemon: ${m} not runnable after waiting ${r.waitedMs}ms for an npm reinstall (exec ${A(V)}; install ${r.installInProgressAtEnd ? "still in progress" : r.extended ? "ended" : "not seen"})`,
      );
    }
    let q = { gaveUpOnNpmInstallInProgress: ne, reinstallWaitedMs: Y };
    if (I !== "ENOENT" && I !== "EACCES") return { ...T, stderrPath: v, ...q };
    let G = new Set([m]),
      ae = resolveWrappedClaudeInvocation({ pinToCurrentBinary: !0 });
    if (!G.has(ae.target)) {
      (G.add(ae.target),
        logEvent("tengu_bg_daemon_spawn_execpath_fallback", {
          errno_enoent: I === "ENOENT",
          errno_eacces: I === "EACCES",
        }));
      let r = await Pe(await Re(k, [ae.cmd, ...ae.prefixArgs, ...t]), w, N?.fd);
      if (A(r.err) !== "ENOENT") return { ...r, stderrPath: v, ...q };
    }
    let ue = getInstalledClaudePath();
    if (!G.has(ue)) {
      (G.add(ue),
        logEvent("tengu_bg_daemon_spawn_launcher_fallback", {
          errno_enoent: I === "ENOENT",
          errno_eacces: I === "EACCES",
        }));
      let r = await Pe(await Re(k, [ue, ...t]), w, N?.fd);
      if (A(r.err) !== "ENOENT") return { ...r, stderrPath: v, ...q };
    }
    let p = await findInstalledVersionBinary();
    if (
      (logEvent("tengu_bg_daemon_spawn_versions_fallback", { found: p !== null }),
      p !== null && !G.has(p))
    )
      return {
        ...(await Pe(await Re(k, [p, ...t]), w, N?.fd)),
        stderrPath: v,
        ...q,
      };
    return { err: V, stderrPath: v, ...q };
  } finally {
    await N?.close().catch(() => {});
  }
}
async function Dr(t, e, o, c) {
  let s = async (E) => {
      let v = applyProcessWrapper(E);
      return Pe(await Re(o, [v.cmd, ...v.prefixArgs, ...t]), e, c?.fd);
    },
    d = resolveClaudeInvocation();
  if (await _e(d.cmd, { rejectNpmStub: !0 })) return s(d);
  let m = !1,
    _;
  if (Me(d.cmd)) {
    let E = await Je(d.cmd);
    if (
      ((_ = E.waitedMs),
      logEvent("tengu_bg_daemon_spawn_reinstall_wait", {
        waited_ms: E.waitedMs,
        recovered: E.recovered,
        respawn_ok: E.recovered,
        extended: E.extended,
        install_in_progress: E.installInProgressAtEnd,
        probe: !0,
      }),
      E.recovered)
    )
      return {
        ...(await s(d)),
        recoveredAfterReinstallWait: !0,
        reinstallWaitedMs: _,
      };
    m = E.installInProgressAtEnd;
  }
  let w = resolveClaudeInvocation({ pinToCurrentBinary: !0 });
  if (w.cmd !== d.cmd && (await _e(w.cmd)))
    return (
      logEvent("tengu_bg_daemon_spawn_execpath_fallback", {
        errno_enoent: !1,
        errno_eacces: !1,
        probe: !0,
      }),
      { ...(await s(w)), reinstallWaitedMs: _ }
    );
  let k = await findInstalledVersionBinary();
  if (
    (logEvent("tengu_bg_daemon_spawn_versions_fallback", {
      found: k !== null,
      probe: !0,
    }),
    k !== null && k !== w.cmd && (await _e(k)))
  )
    return {
      ...(await s({ cmd: k, prefixArgs: [], target: k })),
      reinstallWaitedMs: _,
    };
  return (
    logFeatureBad("agent_launcher", "no_runnable_target"),
    {
      err: new R(
        `no runnable Claude Code binary was found to run through the configured launcher \u2014 last tried: ${k ?? w.cmd}`,
        "no runnable claude binary for the configured launcher",
      ),
      gaveUpOnNpmInstallInProgress: m,
      reinstallWaitedMs: _,
    }
  );
}
async function _e(t, e = {}) {
  try {
    let o = await dt(t);
    if (!o.isFile()) return !1;
    if (e.rejectNpmStub && o.size < Ot) return !1;
    return (await wr(t, constants.X_OK), !0);
  } catch {
    return !1;
  }
}
function Me(t) {
  return t.replace(/\\/g, "/").includes(ze);
}
async function Rt(t) {
  let e = t.replace(/\\/g, "/").indexOf(ze);
  if (e === -1) return !1;
  let o = t.slice(0, e + ze.length - 1),
    c = t.slice(e + ze.length).split(/[\\/]/)[0];
  if (!c) return !1;
  let s = `.${c}-`,
    d;
  try {
    d = await readdir(o, { withFileTypes: !0 });
  } catch {
    return !1;
  }
  for (let m of d) {
    if (!m.isDirectory() || !m.name.startsWith(s)) continue;
    try {
      let _ = await dt(lt(o, m.name));
      if (Date.now() - Math.max(_.ctimeMs, _.mtimeMs) < Cr) return !0;
    } catch {}
  }
  return !1;
}
async function Je(t) {
  let e = Date.now(),
    o = e + xr;
  while (Date.now() < o)
    if ((await sleep(Pr), await _e(t, { rejectNpmStub: !0 })))
      return {
        recovered: !0,
        waitedMs: Date.now() - e,
        extended: !1,
        installInProgressAtEnd: !1,
      };
  let c = await Rt(t);
  if (!c)
    return {
      recovered: !1,
      waitedMs: Date.now() - e,
      extended: !1,
      installInProgressAtEnd: !1,
    };
  let s = e + Ye;
  while (Date.now() < s) {
    if ((await sleep(kr), await _e(t, { rejectNpmStub: !0 })))
      return {
        recovered: !0,
        waitedMs: Date.now() - e,
        extended: !0,
        installInProgressAtEnd: c,
      };
    if (!c) break;
    c = await Rt(t);
  }
  return {
    recovered: !1,
    waitedMs: Date.now() - e,
    extended: !0,
    installInProgressAtEnd: c,
  };
}
async function Pe(t, e, o) {
  let c;
  try {
    c = yr();
  } catch {
    c = void 0;
  }
  let s = await Dt(t, e, o, c);
  if (c !== void 0 && s.err) return Dt(t, e, o, void 0);
  return s;
}
async function Dt(t, e, o, c) {
  let s = null,
    d;
  try {
    let m = spawn(t[0], t.slice(1), {
      detached: !0,
      stdio: ["ignore", "ignore", o ?? "ignore"],
      windowsHide: !0,
      env: e,
      ...(c !== void 0 && { cwd: c }),
    });
    (wS(m.pid),
      m.once("error", (_) => {
        s = _;
      }),
      (d = {
        pid: m.pid,
        exited: new Promise((_) => {
          m.once("exit", (w, k) => _({ code: w, signal: k }));
        }),
      }),
      m.unref());
  } catch (m) {
    s = m;
  }
  return (
    await new Promise((m) => setImmediate(m)),
    s ? { err: s } : { err: null, child: d }
  );
}
async function Ir() {
  let t = process.getuid?.();
  if (t === void 0) return [];
  let e = await new Promise((o) => {
    let c = !1,
      s,
      d = (_) => {
        if (c) return;
        ((c = !0), clearTimeout(m), o(_));
      },
      m = setTimeout(() => {
        (s.kill(), d(!1));
      }, 5000);
    m.unref();
    try {
      s = spawn("/bin/launchctl", ["asuser", String(t), "/usr/bin/true"], {
        stdio: "ignore",
        windowsHide: !0,
      });
    } catch {
      d(!1);
      return;
    }
    (s.once("error", () => d(!1)), s.once("exit", (_) => d(_ === 0)));
  });
  return (
    logEvent("tengu_bg_daemon_macos_aqua_wrap", { has_gui: e }),
    e ? ["/bin/launchctl", "asuser", String(t)] : []
  );
}
async function Re(t, e) {
  if (t.length === 0) return e;
  let o = e[0];
  if (!(await _e(o, { rejectNpmStub: Me(o) }))) return e;
  return [...t, ...e];
}
async function It(t, e) {
  let o;
  try {
    o = Or(Nr(t));
  } catch (d) {
    return { ok: !1, reason: l(d) };
  }
  let c = await getPowerShellPath();
  if (!c) return { ok: !1, reason: "no-powershell" };
  let s = Buffer.from(o, "utf16le").toString("base64");
  return new Promise((d) => {
    let m = !1,
      _,
      w = (v) => {
        if (m) return;
        ((m = !0), clearTimeout(E), d(v));
      },
      k = (v) => w({ ok: !1, reason: A(v) === "ENOENT" ? "enoent" : l(v) }),
      E = setTimeout(() => {
        (_.kill(), w({ ok: !1, reason: "timeout" }));
      }, 5000);
    E.unref();
    try {
      _ = spawn(c, ["-NoProfile", "-NonInteractive", "-EncodedCommand", s], {
        stdio: "ignore",
        windowsHide: !0,
        env: e,
      });
    } catch (v) {
      k(v);
      return;
    }
    (_.once("error", k),
      _.once("exit", (v) => {
        if (v === 0) w({ ok: !0 });
        else
          w({
            ok: !1,
            reason: `Win32_Process.Create rc=${v}`,
            rc: v ?? void 0,
          });
      }));
  });
}
function Or(t) {
  return [
    '$ErrorActionPreference = "Stop"',
    '$e = [string[]](Get-ChildItem Env: | ForEach-Object { "$($_.Name)=$($_.Value)" })',
    "$s = New-CimInstance -ClassName Win32_ProcessStartup -ClientOnly -Property @{ EnvironmentVariables = $e; ShowWindow = [uint16]0; CreateFlags = [uint32]8 }",
    `$r = Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{ CommandLine = ${Lr(t)}; CurrentDirectory = $env:USERPROFILE; ProcessStartupInformation = $s }`,
    "exit $r.ReturnValue",
  ].join(`
`);
}
function Nr(t) {
  return t.map(Mr).join(" ");
}
function Mr(t) {
  if (t.length > 0 && !/[\s"]/.test(t)) return t;
  let e = '"',
    o = 0;
  while (o < t.length) {
    let c = 0;
    while (t[o] === "\\") (c++, o++);
    if (o === t.length) e += "\\".repeat(c * 2);
    else if (t[o] === '"') ((e += "\\".repeat(c * 2 + 1) + '"'), o++);
    else ((e += "\\".repeat(c) + t[o]), o++);
  }
  return e + '"';
}
function Lr(t) {
  if (/[\u2018\u2019\u201A\u201B]/.test(t))
    throw Error("unsupported Unicode single-quote in command line");
  return `'${t.replaceAll("'", "''")}'`;
}
async function $r(t) {
  if (getCurrentPlatform() === "macos" || !process.env.CLAUDE_CODE_OAUTH_TOKEN) return !1;
  return !!(await getSecureStorage().readAsync(t))?.claudeAiOauth?.refreshToken;
}
function Br(t) {
  let e = { ...process.env, INVOCATION_ID: "" };
  (delete e.CLAUDECODE,
    delete e.CLAUDE_CODE_SESSION_ID,
    delete e.CLAUDE_CODE_CHILD_SESSION,
    delete e.CLAUDE_CODE_CHROME_MCP_ORG_DENIED,
    delete e.CLAUDE_CODE_EVAL_INTERVIEW_SESSION,
    delete e.CLAUDE_CODE_BRIDGE_SESSION_ID,
    g4(e),
    removeBgDispatcherPlanEnvVars(e),
    removeGuiHostEntrypoint(e));
  let o = new Set(
    ["CLAUDE_BG_AUTH_SNAPSHOT_PATH", ...TOKEN_FD_ENV_VARS].map((s) => s.toUpperCase()),
  );
  for (let s of Object.keys(e)) if (o.has(s.toUpperCase())) delete e[s];
  let c = getHostAuthEnvVarName(e);
  if (Ie(e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
    for (let s of [...API_KEY_ENV_VARS, ...BASE_URL_ENV_VARS, ...PROVIDER_CONFIG_ENV_VARS]) delete e[s];
    if ((clearAwsEnvVars(e), delete e.ANTHROPIC_CUSTOM_HEADERS, c)) delete e[c];
    (delete e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST,
      delete e.CLAUDE_CODE_HOST_AUTH_ENV_VAR);
  }
  if (t.dropShellOAuthToken) {
    for (let s of Object.keys(e))
      if (s.toUpperCase() === "CLAUDE_CODE_OAUTH_TOKEN") delete e[s];
  }
  return e;
}
var Ue = toESM(pg(), 1);
import {
  lstat,
  readFile as Tn,
  realpath,
  rm as Ze,
} from "fs/promises";
import { dirname } from "path";
import { setTimeout as We } from "timers/promises";
class Lt {
  daemonConfirmedUp = !1;
  ensureInFlight = null;
  lastTransientSpawnAt = null;
  prefixAxis = "idle";
  prefixContractViolationLogged = !1;
  tmuxRgbApplied = !1;
  ownedBeacons = new Map();
  reset() {
    ((this.daemonConfirmedUp = !1),
      (this.ensureInFlight = null),
      (this.lastTransientSpawnAt = null),
      (this.prefixAxis = "idle"),
      (this.prefixContractViolationLogged = !1),
      (this.tmuxRgbApplied = !1),
      this.ownedBeacons.clear());
  }
}
var Hr = new j(() => new Lt());
function _v() {
  return Hr.of(B().host);
}
import { setTimeout as Wr } from "timers/promises";
var mt = 120000,
  $t = 5000,
  Bt = 5000;
function gt(t) {
  let e = {
    ...t,
    childExit: null,
    childExitAt: null,
    stderr: null,
    budgetExtended: !1,
    nextLivenessProbeAt: t.spawnIssuedAt + $t,
    siblingHolderSeen: !1,
  };
  return (
    t.child?.exited.then((o) => {
      ((e.childExit = o), (e.childExitAt = Date.now()));
    }),
    e
  );
}
async function Ht(t, e) {
  let o = t.childExit;
  if (!o || t.siblingHolderSeen) return !1;
  if (o.code === 0 && o.signal === null) return !1;
  if (!Me(e)) return !1;
  switch (await Mt(e)) {
    case "missing":
    case "fresh_stub":
      return !0;
    case "stale_stub":
      return !1;
    case "present":
      return (await qe(t)).includes(ft);
  }
}
function Wt(t) {
  if (t.trim().length === 0) return;
  if (t.includes(ft)) return S("npm_stub");
  if (/current working directory was deleted|uv_cwd|getcwd/i.test(t))
    return S("cwd_deleted");
  if (/launchctl|Could not switch to audit session|posix_spawn/.test(t))
    return S("launchctl");
  if (/Cannot find module|MODULE_NOT_FOUND|Module not found/.test(t))
    return S("module_not_found");
  if (
    /dyld|Segmentation fault|Illegal instruction|Abort trap|Killed: 9|panic|bun has crashed|^error: /im.test(
      t,
    )
  )
    return S("runtime");
  if (/^\s*(claude|Claude Code|daemon|bg manager)\b/im.test(t))
    return S("claude_error");
  return S("other");
}
async function qe(t, e = !1) {
  if (t.stderr === null || e)
    t.stderr = t.stderrPath
      ? ((await readBoundedFile(t.stderrPath, 1048576)) ?? "").slice(0, 2000)
      : "";
  return t.stderr;
}
async function ht(t) {
  let e = t.childExit;
  if (!e || t.siblingHolderSeen) return !1;
  if (!t.budgetExtended) {
    if ((await qe(t)).trim().length === 0) return !1;
    if (t.wrapperConfigured && e.code === 0 && e.signal === null) return !1;
  }
  let o = await Ut(t, LOCK_VERIFY_ATTEMPTS);
  if (o !== !1) return ((t.siblingHolderSeen = o === !0), !1);
  return !0;
}
async function $e(t, e, o) {
  let c = e;
  while (!0) {
    if (await ht(t)) return !1;
    if (Date.now() >= c) return !1;
    if ((await controlRequest({ proto: BG_PROTO, op: "ping" })).ok) return !0;
    if (o && Date.now() >= t.nextLivenessProbeAt) {
      t.nextLivenessProbeAt = Date.now() + $t;
      let m = await Ut(t, 1);
      if (!t.budgetExtended && m === !0)
        ((t.budgetExtended = !0), (c = Math.max(c, t.spawnIssuedAt + mt)));
      else if (t.budgetExtended && m === !1 && Date.now() >= e) return !1;
    }
    await Wr(100);
  }
}
async function Ut(t, e) {
  let o;
  try {
    o = await getVerifiedDaemonLock(e, t.storageV5);
  } catch {
    return null;
  }
  return o !== null && !o.bgDisabled && o.startedAt >= t.spawnIssuedAt - Bt;
}
async function Ft(t) {
  let e;
  try {
    e = await readDaemonLock(t.storageV5);
  } catch {
    return { lock_at_deadline: S("unreadable") };
  }
  if (!e) return { lock_at_deadline: S("absent") };
  let o = {
    holder_age_ms: Math.max(0, Date.now() - e.startedAt),
    holder_version_skew:
      e.version !==
      {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.263",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-06T01:08:56Z",
        GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
        HOOKS_WORKER_URL:
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION,
  };
  if (
    (t.child?.pid !== void 0 && e.pid === t.child.pid) ||
    e.startedAt >= t.spawnIssuedAt - Bt
  )
    return { lock_at_deadline: S("self_child"), ...o };
  try {
    process.kill(e.pid, 0);
  } catch (d) {
    if (A(d) !== "EPERM") return { lock_at_deadline: S("other_dead"), ...o };
    return {
      lock_at_deadline: (await classifyDaemonLockStaleness(e))
        ? S("other_eperm_stale")
        : S("other_eperm"),
      ...o,
    };
  }
  return {
    lock_at_deadline: (await verifyProcessStartTime(e.pid, procIdentityOf(e), 1).catch(() => !1))
      ? S("other_alive")
      : S("other_dead"),
    ...o,
  };
}
import { randomBytes } from "crypto";
import { unlink as Jt } from "fs/promises";
import { createServer } from "net";
import { StringDecoder } from "string_decoder";
var Vt =
  /\x1b\[(?:<\d+;\d+;\d+[Mm]|M[\s\S]{3}|I|O|\??\d+;\d+(?:;\d+)*R|[?>]\d+(?:;\d+)*c|\?\d+(?:;\d+)*\$y|\?997;[12]n|\?\d+u)|\x1bP[^\x1b]*\x1b\\|\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g;
function jt(t) {
  if (!t.includes("\x1B")) return !1;
  return t.replace(Vt, "").length === 0;
}
var Ur = 64,
  Fr =
    /^\x1b(?:$|\[(?:[<?>]?\d*(?:;\d*)*\$?|M[\s\S]{0,2})$|P(?:$|[>01][^\x1b]*\x1b?$)|\](?:$|\d[^\x07\x1b]*\x1b?$))/;
function z$n() {
  let t = "";
  return (e) => {
    let o = t + e;
    if (((t = ""), !o.includes("\x1B"))) return !1;
    let c = o.replace(Vt, "");
    if (c.length === 0) return !0;
    if (c.length <= Ur && Fr.test(c)) return ((t = c), !0);
    return !1;
  };
}
import {
  closeSync,
  lstatSync,
  openSync,
  readSync,
} from "fs";
var Gt = 262144,
  zr = 32768,
  Yr = 200,
  Xr = 4096,
  qr = 50;
function Zr(t) {
  let e = 0,
    o = 0,
    c = 0;
  for (let s of t.split(`
`)) {
    let d = 0;
    while (d < s.length && (s[d] === ">" || s[d] === " ")) {
      if (s[d] === ">") c++;
      d++;
    }
    if (/^ {0,3}(?:=+|-+)\s*$/.test(s)) o++;
    for (let m = d; m < s.length; m++) {
      let _ = s[m];
      if (_ === "[") e++;
      else if (_ === "]" && e > 0) e--;
    }
  }
  return e > 256 || o > 64 || c > 512;
}
var Qr = "\x1B[2m",
  Yt = "\x1B[0m",
  en = 2,
  tn = "dark",
  Kt = figures.pointer,
  rn =
    "  Session is starting \u2014 showing its transcript until it appears. Ctrl+Z to detach";
function nn(t) {
  if (!/[\x00-\x09\x0b-\x1f\x7f-\x9f]/.test(t)) return t;
  return stripAnsi(t)
    .replace(/\t/g, "  ")
    .replace(CONTROL_CHARS_REGEX, "")
    .replace(/[\v\f\r]/g, "");
}
var Xt = /(\x1b\[[0-9;]*m)/,
  on = new RegExp(Xt.source, "g");
function an(t) {
  if (!t.includes("\x1B")) return t;
  let e = "",
    o = 0;
  while (o < t.length) {
    let c = t.indexOf("\x1B", o);
    if (c < 0) {
      e += t.slice(o);
      break;
    }
    e += t.slice(o, c);
    let s = t[c + 1];
    if (s === "[") {
      let d = c + 2,
        m = !0;
      while (d < t.length) {
        let _ = t.charCodeAt(d);
        if (_ >= 64 && _ <= 126) {
          if (_ === 109 && m) e += t.slice(c, d + 1);
          d++;
          break;
        }
        if (_ < 32 || _ > 63) break;
        if (!((_ >= 48 && _ <= 57) || _ === 59)) m = !1;
        d++;
      }
      o = d;
    } else if (s === "]" || s === "P" || s === "X" || s === "^" || s === "_") {
      let d = c + 2,
        m = t.length;
      while (d < t.length) {
        if (s === "]" && t.charCodeAt(d) === 7) {
          m = d + 1;
          break;
        }
        if (t.charCodeAt(d) === 27 && t[d + 1] === "\\") {
          m = d + 2;
          break;
        }
        d++;
      }
      o = m;
    } else if (s === void 0) o = t.length;
    else o = c + 2;
  }
  return e;
}
function sn(t, e) {
  if (e === "") {
    t.clear();
    return;
  }
  let o = e.split(";");
  for (let c = 0; c < o.length; c++) {
    let s = o[c],
      d = s === "" ? 0 : parseInt(s, 10);
    if (Number.isNaN(d)) continue;
    if (d === 0) t.clear();
    else if (d >= 1 && d <= 9) t.set(String(d), String(d));
    else if (d === 22) (t.delete("1"), t.delete("2"));
    else if (d === 23) t.delete("3");
    else if (d === 24) t.delete("4");
    else if (d === 25) (t.delete("5"), t.delete("6"));
    else if (d === 27) t.delete("7");
    else if (d === 28) t.delete("8");
    else if (d === 29) t.delete("9");
    else if (d === 38 || d === 48) {
      let m = d === 38 ? "fg" : "bg";
      if (s.includes(":")) t.set(m, s);
      else if (o[c + 1] === "5")
        (t.set(m, o.slice(c, c + 3).join(";")), (c += 2));
      else if (o[c + 1] === "2")
        (t.set(m, o.slice(c, c + 5).join(";")), (c += 4));
    } else if ((d >= 30 && d <= 37) || (d >= 90 && d <= 97)) t.set("fg", s);
    else if (d === 39) t.delete("fg");
    else if ((d >= 40 && d <= 47) || (d >= 100 && d <= 107)) t.set("bg", s);
    else if (d === 49) t.delete("bg");
  }
}
var ln = 128;
function cn(t) {
  if (t.size === 0) return "";
  let e = [...t.values()].join(";");
  return e.length > ln ? "" : `\x1B[${e}m`;
}
function dn(t, e) {
  if (te(t) <= e) return [t];
  let o = [],
    c = "",
    s = 0,
    d = new Map();
  for (let m of t.split(Xt)) {
    if (m === "") continue;
    if (m.charCodeAt(0) === 27) {
      (sn(d, m.slice(2, -1)), (c += m));
      continue;
    }
    for (let { segment: _ } of getGraphemeSegmenter().segment(m)) {
      let w = _.length === 1 && _.charCodeAt(0) < 127 ? 1 : te(_);
      if (s > 0 && s + w > e)
        (o.push(d.size > 0 ? c + Yt : c), (c = cn(d)), (s = 0));
      ((c += _), (s += w));
    }
  }
  return (o.push(c), o);
}
function _t(t, e) {
  return dp(t, e, { hard: !1, trim: !1 })
    .split(
      `
`,
    )
    .flatMap((o) => dn(o, e));
}
function un(t) {
  let e;
  try {
    e = Is(t);
  } catch {
    return [];
  }
  if (typeof e !== "object" || e === null) return [];
  let o = e;
  if (
    (o.type !== "user" && o.type !== "assistant") ||
    o.isSidechain === !0 ||
    o.isMeta === !0
  )
    return [];
  let c = o.message?.content;
  if (typeof c === "string") {
    if (o.type === "user") return zt(c);
    let _ = c.trim();
    return _ === "" ? [] : [{ role: "assistant", text: _ }];
  }
  if (!Array.isArray(c)) return [];
  if (o.type === "user") {
    let _ = [];
    for (let w of c) {
      let k = w;
      if (k?.type === "text" && typeof k.text === "string") _.push(k.text);
    }
    return zt(
      _.join(`
`),
    );
  }
  let s = [],
    d = [],
    m = () => {
      let _ = d
        .join(
          `
`,
        )
        .trim();
      if (((d = []), _ !== "")) s.push({ role: "assistant", text: _ });
    };
  for (let _ of c) {
    let w = _;
    if (w?.type === "text" && typeof w.text === "string") d.push(w.text);
    else if (w?.type === "tool_use" && typeof w.name === "string") {
      m();
      let k = "";
      if (typeof w.input === "object" && w.input !== null) {
        for (let E of Object.values(w.input))
          if (typeof E === "string" && E !== "") {
            k = E;
            break;
          }
      }
      s.push({ role: "tool", text: `${w.name}(${k})` });
    } else if (
      w?.type === "thinking" &&
      typeof w.thinking === "string" &&
      w.thinking.trim() !== ""
    )
      (m(), s.push({ role: "thinking", text: w.thinking }));
  }
  return (m(), s);
}
function zt(t) {
  let e = t.trim();
  if (e === "") return [];
  let o = /^<bash-input>([\s\S]*?)<\/bash-input>/.exec(e);
  if (o) e = `! ${o[1].trim()}`;
  else if (CONTROL_PROMPT_PREFIX_RE.test(e)) return [];
  return [{ role: "user", text: e }];
}
function fn(t, e) {
  return (
    o0e(),
    an(
      markdownParser
        .lexer(t)
        .map((o) =>
          aE(o, e, {
            listDepth: 0,
            orderedListNumber: null,
            parent: null,
            highlight: getSyntaxHighlightAdapter(),
            linkCap: !1,
          }),
        )
        .join(""),
    ).trim()
  );
}
function pn(t, e, o, c) {
  let s = Math.max(1, e),
    d = c?.colorLevel ?? en,
    m = c?.theme ?? tn,
    _ = (O) => (d > 0 && O !== "" ? Qr + O + Yt : O),
    w = (O) => Math.max(1, Math.ceil(te(O) / s)),
    k = "\u2500".repeat(s),
    E = ["", k, Kt, k, rn],
    v = E.reduce((O, K) => O + w(K), 0),
    N = o - v;
  if (N < 1) return null;
  let T = Math.min(Math.ceil((N + 1) / 2), Yr),
    V = t.split(`
`),
    I = [],
    ne = zr;
  e: for (let O = V.length - 1; O >= 0; O--) {
    let K = un(V[O]);
    for (let X = K.length - 1; X >= 0; X--) {
      if (I.length >= T) break e;
      let re = K[X];
      if (re.text.length > ne) {
        if (I.length === 0) {
          let le = takeLastCodeUnits(re.text, ne),
            de = le.indexOf(`
`);
          if (de >= 0) le = le.slice(de + 1);
          if (le.trim() !== "") I.unshift({ role: re.role, text: le });
        }
        break e;
      }
      ((ne -= re.text.length), I.unshift(re));
    }
  }
  if (I.length === 0) return null;
  let Y = [],
    q = s >= 4 ? 2 : 0,
    G = Math.max(1, s - q),
    ae = chalk.level;
  chalk.level = d;
  let ue = performance.now();
  try {
    for (let O of I) {
      if (Y.length > 0) Y.push({ text: "", dim: !1 });
      let K = nn(O.text);
      switch (O.role) {
        case "tool": {
          let X = truncateToWidth(`${CLAUDE_BULLET_GLYPH} ${K.replace(/\n/g, " ")}`, s);
          Y.push({ text: X, dim: !0 });
          break;
        }
        case "thinking": {
          let X = K.replace(/\s+/g, " ").trim();
          for (let [re, le] of _t(X, G).entries()) {
            let de = q === 0 || le === "" ? "" : re === 0 ? `${THEREFORE_GLYPH} ` : "  ";
            Y.push({ text: de + chalk.italic(le), dim: !0 });
          }
          break;
        }
        case "assistant": {
          let X = K;
          if (K.length <= Xr && performance.now() - ue < qr && !Zr(K))
            try {
              X = fn(K, m);
            } catch {
              X = K;
            }
          let re = getThemeColor("text", m)(CLAUDE_BULLET_GLYPH);
          for (let [le, de] of _t(X, G).entries()) {
            let ce = q === 0 || de === "" ? "" : le === 0 ? `${re} ` : "  ";
            Y.push({ text: ce + de, dim: !1 });
          }
          break;
        }
        case "user": {
          let X = getThemeColor("subtle", m)(`${Kt} `),
            re = getThemeColor("text", m),
            le = getThemeColor("userMessageBackground", m, "background");
          for (let [de, ce] of _t(K, G).entries()) {
            let se = q === 0 ? "" : de === 0 ? X : "  ";
            Y.push({ text: le(se + re(ce)), dim: !1 });
          }
          break;
        }
        default:
          O.role;
      }
    }
  } finally {
    chalk.level = ae;
  }
  let p = 0,
    r = [];
  for (let O = Y.length - 1; O >= 0; O--) {
    let K = Y[O],
      X = w(K.text);
    if (p + X > N) break;
    ((p += X), r.unshift(K.dim ? _(K.text) : K.text));
  }
  if (r.length === 0) return null;
  let x = o - p - v,
    M = [];
  for (let O = 0; O < x; O++) M.push("");
  M.push(...r);
  for (let O of E) M.push(_(O));
  let fe = M.join(`\r
`);
  if (fe.length > 65536 + o * s * 32) fe = fe.replace(on, "");
  return HIDE_CURSOR + fe;
}
function wt(t, e, o, c) {
  let s;
  try {
    let d = lstatSync(t);
    if (!d.isFile() || d.size === 0) return null;
    let m = d.size;
    s = openSync(t, "r");
    let _ = Math.max(0, m - Gt),
      w = Buffer.alloc(Math.min(m, Gt)),
      k = readSync(s, w, 0, w.length, _),
      E = w.subarray(0, k).toString("utf8");
    if (_ > 0) {
      let v = E.indexOf(`
`);
      if (v < 0) return null;
      E = E.slice(v + 1);
    }
    return pn(E, e, o, c);
  } catch {
    return null;
  } finally {
    if (s !== void 0)
      try {
        closeSync(s);
      } catch {}
  }
}
var He = 1048576,
  _n = 5000,
  wn = 12000,
  St = 1000,
  qt = 500,
  Sn = 6000,
  En = 30000;
function bn() {
  let t = getFeatureValue_CACHED_MAY_BE_STALE("tengu_bg_attach_stall_ms", _n);
  if (t === 0) return 0;
  let e = getLauncherArgv().length > 0 ? wn : 2000;
  return Math.max(e, t);
}
function vn(t, e, o, c, s, d) {
  let m = t.dispatch;
  if (t.getPhase().kind !== "running" || e.destroyed || c()) return;
  s.add(m.short);
  let _ = readJobState(getJobDir(m.short), d).catch(() => null);
  (t.kill("SIGTERM"),
    (async () => {
      let w = Date.now() + Sn;
      while (Date.now() < w && !t.record.outcome) await sleep(100);
      if (!s.has(m.short)) return;
      let k = await readJobState(getJobDir(m.short), d).catch(() => null),
        E = k?.resumeSessionId ?? m.sessionId,
        v = k?.cwd ?? m.cwd,
        N = createTranscriptSource(createBackendHandle(d)),
        T = await resolveJobTranscript(E, v, k?.linkScanPath, void 0, N),
        V = T.hasMessages;
      if (!V) await quarantineJobTranscript(T.path, N);
      if (!s.has(m.short)) return;
      let I = k?.respawnFlags ?? m.respawnFlags,
        ne = (await _)?.tempo === "active";
      await o({
        ...m,
        cwd: v,
        source: "respawn",
        reattachEnv: void 0,
        attachStallRespawns: (m.attachStallRespawns ?? 0) + 1,
        launch: V
          ? {
              mode: "resume",
              sessionId: E,
              transcriptPath: T.path,
              fork: !1,
              flagArgs: ne ? k8e(I) : oyn(I),
            }
          : E !== m.sessionId
            ? { mode: "prompt", args: ["--session-id", E, ...I] }
            : m.launch,
      });
    })()
      .catch((w) => logError(w))
      .finally(() => s.delete(m.short)));
}
var Et = 1e4,
  xn = 2500;
async function K$n(
  t,
  e,
  o,
  c = () => 0,
  s = () => !0,
  d = () => !1,
  m = new Promise(() => {}),
  _,
) {
  let w = getControlSocketPath();
  await ensureDaemonRuntimeDir();
  let k = await readOrCreateControlKey();
  await Jt(w).catch(() => {});
  let E = new Set(),
    v = new Set(),
    N = new Map(),
    T = new Map(),
    V = Le(),
    Y = {
      handles: t,
      onDispatch: e,
      onNudge: o,
      onShutdown: c,
      ready: s,
      whenReady: m,
      onYield: d,
      addLease: (p, r) => {
        if (T.has(p)) return;
        T.set(p, r);
        let x = An(r?.label);
        (logEvent("tengu_daemon_lease", { op: S("open"), label: x }),
          p.once("close", () => {
            (T.delete(p),
              logEvent("tengu_daemon_lease", { op: S("close"), label: x }),
              V.emit());
          }),
          V.emit());
      },
      listLeases: () => {
        let p = [];
        for (let r of T.values()) if (r) p.push(r);
        return p;
      },
      stallRespawnPending: v,
      settledDispatches: N,
      controlKey: k,
      storageV5: _,
      legacyOpProbe: new tr(),
    },
    q = !1,
    G = createServer((p) => {
      if (q) {
        p.destroy();
        return;
      }
      (p.on("error", () => p.destroy()),
        p.setTimeout(30000, () => p.destroy()),
        E.add(p),
        p.once("close", () => E.delete(p)));
      let r = HJn(p);
      if (r) {
        (logEvent("tengu_daemon_peer_uid_reject", {}),
          p.once("data", () => C(p, { ok: !1, code: "EPEERUID", error: r })));
        return;
      }
      let x = Buffer.alloc(0),
        M = (fe) => {
          x = Buffer.concat([x, fe]);
          let O = x.indexOf(10);
          if (O < 0) {
            if (x.length > He)
              (p.off("data", M),
                C(p, {
                  ok: !1,
                  code: "ETOOLARGE",
                  error: `request exceeds ${He >> 20}MB \u2014 shorten the prompt or send in parts`,
                }));
            return;
          }
          (p.off("data", M), p.setTimeout(0));
          let K = x.subarray(0, O).toString("utf8"),
            X = x.subarray(O + 1);
          Pn(Y, p, K, X).catch((re) => {
            C(p, { ok: !1, error: l(re), code: "EUNKNOWN" });
          });
        };
      p.on("data", M);
    }),
    ae = !1;
  G.on("error", (p) => {
    if (ae) {
      n(`bg control server bind: ${redactDaemonNonce(l(p))}`, { level: "warn" });
      return;
    }
    logError(p);
  });
  let ue = Date.now() + Et;
  for (;;)
    try {
      await new Promise((p, r) => {
        let x = (M) => {
          ((ae = !1), r(M));
        };
        ((ae = !0),
          G.once("error", x),
          G.listen(w, () => {
            ((ae = !1), G.removeListener("error", x), p());
          }));
      });
      break;
    } catch (p) {
      if (A(p) !== "EADDRINUSE" || Date.now() >= ue) throw p;
      (G.removeAllListeners("listening"), await sleep(100));
    }
  return {
    close: (p) =>
      new Promise((r) => {
        for (let x of E) x.destroy();
        if (p?.skipUnlink) return ((q = !0), G.unref(), void r());
        G.close(() => {
          if (!p?.skipUnlink) Jt(w).catch(() => {});
          r();
        });
      }),
    leaseCount: () => T.size,
    onLeaseChange: V,
    noteSettledDispatch: (p, r, x) => {
      (N.set(p, { nonce: r, refusal: x }),
        setTimeout(
          (M, fe, O) => {
            if (M.get(fe)?.nonce === O) M.delete(fe);
          },
          En,
          N,
          p,
          r,
        ).unref());
    },
  };
}
function C(t, e) {
  if (t.destroyed) return;
  t.end(
    b(e) +
      `
`,
  );
}
function Be(t, e) {
  if (t.destroyed) return;
  if (t.writableLength > He) {
    t.destroy();
    return;
  }
  t.write(
    b(e) +
      `
`,
  );
}
function De(t) {
  return !t.record.outcome && !t.isRetiring && !t.isKilling;
}
function Zt(t, e) {
  return t !== void 0 && e === void 0 ? withDeadline(t, 25) : sleep(25);
}
async function Qt(t, e, o, c, s, d, m, _) {
  let w = Date.now() + Math.min(m, 30000),
    k = !1,
    E = !1,
    v,
    N,
    T = _?.then(
      (V) => {
        N = V;
      },
      (V) => {
        (logError(V), (N = "dropped"));
      },
    );
  while (Date.now() < w) {
    if (o.destroyed) return;
    let V =
        N === "dup-live" ||
        N === "dropped" ||
        N === "refused" ||
        N === "closed",
      I = t.get(s),
      ne = d !== void 0 && I?.record.nonce !== d ? e.get(s) : void 0;
    if (ne !== void 0 && ne.nonce === d) {
      if (ne.refusal !== void 0)
        return C(o, { ok: !1, error: ne.refusal, code: "ECWDGONE" });
      return C(o, {
        ok: !0,
        op: c,
        short: s,
        pid: 0,
        messagingSock: "",
        via: "cold",
      });
    }
    if (I) {
      if (d && I.record.nonce !== d) {
        if (((E = !0), (v = De(I) ? I : void 0), V)) break;
        if (!v && !k) ((k = !0), (w += Math.min(m, 30000)));
        await Zt(T, N);
        continue;
      }
      return C(o, {
        ok: !0,
        op: c,
        short: s,
        pid: I.record.pid,
        messagingSock: I.record.messagingSock ?? "",
        via: I.via,
      });
    }
    if (((v = void 0), V)) break;
    await Zt(T, N);
  }
  if (E) {
    if (v && t.get(s) === v && De(v))
      return C(o, {
        ok: !0,
        op: c,
        short: s,
        pid: v.record.pid,
        messagingSock: v.record.messagingSock ?? "",
        via: v.via,
      });
    return C(o, {
      ok: !1,
      error:
        "a previous dispatch with this id is still being cleaned up \u2014 retry in a moment",
      code: "ESTALE",
    });
  }
  return C(o, {
    ok: !1,
    error: `${bgSupervisorNoun()} didn't acknowledge in time \u2014 retry`,
    code: "ETIMEOUT",
  });
}
class tr {
  fired = new Set();
  markFired(t) {
    if (this.fired.has(t)) return !1;
    return (this.fired.add(t), !0);
  }
}
function er(t, e) {
  if (!t.markFired(e)) return;
  logEvent("tengu_dead_probe_bg_legacy_op", { op: fromEnum(e) });
}
async function Pn(t, e, o, c) {
  let {
      handles: s,
      onDispatch: d,
      onNudge: m,
      onShutdown: _,
      ready: w,
      whenReady: k,
      onYield: E,
      addLease: v,
      listLeases: N,
      stallRespawnPending: T,
      settledDispatches: V,
      controlKey: I,
      storageV5: ne,
      legacyOpProbe: Y,
    } = t,
    q;
  try {
    q = z(o);
  } catch {
    return C(e, { ok: !1, error: "bad json", code: "EUNKNOWN" });
  }
  if (q === null || typeof q !== "object")
    return C(e, { ok: !1, error: "bad json", code: "EUNKNOWN" });
  let G = q.op;
  if (G === "ping")
    return C(e, {
      ok: !0,
      op: "ping",
      version: {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.263",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-06T01:08:56Z",
        GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
        HOOKS_WORKER_URL:
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION,
      proto: BG_PROTO,
    });
  if (G === "nudge") {
    let r = await m();
    return C(e, {
      ok: !0,
      op: "nudge",
      restarting: r.restarting,
      upgradePending: r.upgradePending,
      version: {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.263",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-06T01:08:56Z",
        GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
        HOOKS_WORKER_URL:
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION,
      processWrapper: getLauncherCommandString(),
    });
  }
  if (G === "yield") return C(e, { ok: !0, op: "yield", yielding: E() });
  if (G === "lease") {
    (v(e, kn(q.client)),
      e.write(
        b({ ok: !0, op: "lease" }) +
          `
`,
      ));
    return;
  }
  if (G === "leases") return C(e, { ok: !0, op: "leases", clients: N() });
  if (G === "shutdown") {
    let r = q.reapWorkers !== !1,
      x = _(r);
    return C(e, { ok: !0, op: "shutdown", reaped: x });
  }
  if (!w() && G === "attach") {
    if ((await Promise.race([k, sleep(xn, void 0, { unref: !0 })]), e.destroyed))
      return;
  }
  if (!w())
    return C(e, {
      ok: !1,
      error: `${bgSupervisorNoun()} starting (adoption in progress)`,
      code: "ESTARTING",
    });
  let ae = q.proto;
  if (typeof ae !== "number" || !Number.isInteger(ae) || ae < BG_PROTO_MIN || ae > BG_PROTO)
    return (
      logEvent("tengu_bg_proto_mismatch", {
        client_proto: typeof ae === "number" ? ae : -1,
        server_proto: BG_PROTO,
      }),
      C(e, {
        ok: !1,
        error: `proto mismatch (server=${BG_PROTO}, client=${ae}) \u2014 ${bgSupervisorNoun()} and CLI versions differ; restart claude`,
        code: "EPROTO",
        serverProto: BG_PROTO,
        serverVersion: {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
      })
    );
  let ue = ControlRequestSchema().safeParse(q);
  if (!ue.success)
    return C(e, {
      ok: !1,
      error: `malformed request: ${ue.error.issues[0]?.message ?? "invalid"}`,
      code: "EUNKNOWN",
    });
  let p = ue.data;
  switch (p.op) {
    case "ping":
    case "nudge":
    case "yield":
    case "lease":
    case "leases":
    case "shutdown":
      return;
    case "list":
      return C(e, {
        ok: !0,
        op: "list",
        jobs: Array.from(s.values()).map((r) =>
          r.isKilling || r.isRetiring ? { ...r.record, dying: !0 } : r.record,
        ),
      });
    case "has": {
      let r = s.get(p.short),
        x = T.has(p.short);
      return C(e, {
        ok: !0,
        op: "has",
        alive: (r !== void 0 && De(r)) || x,
        present: r !== void 0 || x,
        ready: r !== void 0 && !r.isBooting,
      });
    }
    case "await-ack":
      return Qt(s, V, e, "await-ack", p.short, p.nonce, p.timeoutMs);
    case "dispatch":
      if (!timingSafeStringEqual(p.auth, I))
        return C(e, {
          ok: !1,
          error:
            "dispatch rejected: this client didn't present the daemon control key",
          code: "EAUTH",
        });
      if ((await sleep(0), e.readableEnded || e.destroyed)) {
        logEvent("tengu_bg_dispatch_stale_drop", {});
        return;
      }
      return Qt(s, V, e, "dispatch", p.d.short, p.d.nonce, p.timeoutMs, d(p.d));
    case "reply": {
      if (!timingSafeStringEqual(p.auth, I))
        return C(e, {
          ok: !1,
          error:
            p.auth === void 0
              ? "reply rejected: this window didn't present the daemon control key \u2014 it is likely running a Claude Code older than the daemon (left open across an update?); restart this window and retry, or stop driving the control socket directly"
              : "reply rejected: the presented daemon control key doesn't match \u2014 retry, and restart the Claude Code daemon if this persists",
          code: "EAUTH",
        });
      let r = s.get(p.short);
      if (T.has(p.short) && (!r || !De(r)))
        return C(e, {
          ok: !1,
          error: `worker ${RESPAWN_REASON_STALL} \u2014 restarting it; retry reply`,
          code: "ERESPAWNING",
        });
      if (!r || r.isRetiring || r.isKilling || r.record.outcome)
        return C(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB",
        });
      if (r.isUpgrading)
        return C(e, {
          ok: !1,
          error: `job is restarting on the ${RESPAWN_REASON_UPGRADE}; retry reply`,
          code: "ERESPAWNING",
        });
      if (!(await r.reply(p.text)))
        return C(e, {
          ok: !1,
          error:
            "job isn't accepting replies \u2014 it may be in a non-interactive state",
          code: "ENOREPLY",
        });
      return C(e, { ok: !0, op: "reply" });
    }
    case "kill": {
      if ((T.delete(p.short), p.evict))
        updateRoster((x) => {
          delete x.workers[p.short];
        }, ne).catch((x) => logError(x));
      let r = s.get(p.short);
      if (!r)
        return C(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB",
        });
      if (r.dispatch.launch.mode === "exec" && r.record.outcome)
        return (s.delete(p.short), C(e, { ok: !0, op: "kill" }));
      return (
        r.kill(p.signal ?? "SIGTERM", p.handoff ? "handoff" : "killed"),
        C(e, { ok: !0, op: "kill" })
      );
    }
    case "respawn-stale": {
      er(Y, "respawn_stale");
      let r = s.get(p.short);
      if (!r)
        return C(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB",
        });
      let x = await r.respawnIfIdleStale();
      return C(e, { ok: !0, op: "respawn-stale", ...x });
    }
    case "resize": {
      let r = s.get(p.short);
      if (!r)
        return C(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB",
        });
      if (p.attachId) {
        let x = r.attachers.get(p.attachId);
        if (!x) return C(e, { ok: !0, op: "resize" });
        if (((x.cols = p.cols), (x.rows = p.rows), x.repaint))
          return (x.repaint(), C(e, { ok: !0, op: "resize" }));
      }
      return (r.resize(p.cols, p.rows), C(e, { ok: !0, op: "resize" }));
    }
    case "attach": {
      if (p.auth === void 0)
        n(
          "[bg-attach] legacy client (no control key) \u2014 allowed via peerUid",
          { level: "warn" },
        );
      else if (!timingSafeStringEqual(p.auth, I))
        return C(e, {
          ok: !1,
          error:
            "attach rejected: the presented daemon control key doesn't match \u2014 retry, and restart the Claude Code daemon if this persists",
          code: "EAUTH",
        });
      let r = s.get(p.short);
      if (T.has(p.short) && (!r || !De(r)))
        return C(e, {
          ok: !1,
          error: `worker ${RESPAWN_REASON_STALL} \u2014 restarting it; retry attach`,
          code: "ERESPAWNING",
        });
      if (
        !r ||
        r.isKilling ||
        (r.record.outcome && r.dispatch.launch.mode !== "exec")
      )
        return C(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB",
        });
      if (r.isUnverified)
        return C(e, {
          ok: !1,
          error:
            "worker is live but supervisor could not verify its identity \u2014 try restarting the supervisor to re-adopt",
          code: "EUNVERIFIED",
        });
      if (r.isRetiring)
        return C(e, {
          ok: !1,
          error: "job is retiring; retry attach",
          code: "ERESPAWNING",
        });
      if (r.record.legacy) {
        let D = r.dispatch,
          F = await readJobState(getJobDir(D.short), ne).catch(() => null),
          me = F?.resumeSessionId ?? D.sessionId,
          ge = F?.cwd ?? D.cwd,
          Ee = createTranscriptSource(createBackendHandle(ne)),
          ke = await resolveJobTranscript(me, ge, F?.linkScanPath, void 0, Ee),
          Ne = ke.hasMessages;
        if (!Ne) await quarantineJobTranscript(ke.path, Ee);
        if (s.get(p.short) !== r || e.destroyed)
          return C(e, {
            ok: !1,
            error: "supervisor restarting",
            code: "ERESPAWNING",
          });
        if (!r.isKilling)
          (logEvent("tengu_bg_attach_legacy_autorespawn", {}),
            r.kill("SIGTERM"),
            d({
              ...D,
              cwd: ge,
              source: "respawn",
              launch: Ne
                ? {
                    mode: "resume",
                    sessionId: me,
                    transcriptPath: ke.path,
                    fork: !1,
                    flagArgs:
                      F?.tempo === "active"
                        ? k8e(F?.respawnFlags ?? D.respawnFlags)
                        : oyn(F?.respawnFlags ?? D.respawnFlags),
                  }
                : me !== D.sessionId
                  ? {
                      mode: "prompt",
                      args: [
                        "--session-id",
                        me,
                        ...(F?.respawnFlags ?? D.respawnFlags),
                      ],
                    }
                  : D.launch,
            }).catch((je) => logError(je)));
        return C(e, {
          ok: !1,
          error: `${RESPAWN_REASON_LEGACY} job respawning with worker-owned PTY; retry attach`,
          code: "ERESPAWNING",
        });
      }
      if (r.isUpgrading)
        return C(e, {
          ok: !1,
          error: `job is restarting on the ${RESPAWN_REASON_UPGRADE}; retry attach`,
          code: "ERESPAWNING",
        });
      if (await r.failIfHostExited("attach"))
        return C(e, {
          ok: !1,
          error: r.dispatch.launch.mode === "exec" ? HOST_DIED_EXEC_ATTACH_MESSAGE : HOST_DIED_ATTACH_MESSAGE,
          code: "EHOSTDEAD",
        });
      if (e.destroyed) return;
      if (T.has(p.short) && (s.get(p.short) !== r || !De(r)))
        return C(e, {
          ok: !1,
          error: `worker ${RESPAWN_REASON_STALL} \u2014 restarting it; retry attach`,
          code: "ERESPAWNING",
        });
      if (
        s.get(p.short) !== r ||
        r.isKilling ||
        (r.record.outcome && r.dispatch.launch.mode !== "exec")
      )
        return C(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB",
        });
      let x =
          r.liveTranscriptPath !== void 0
            ? r.liveTranscriptPath
            : r.dispatch.launch.mode === "resume"
              ? r.dispatch.launch.transcriptPath
              : void 0,
        M =
          p.holdingFrame !== !0 && r.isBooting && x != null
            ? wt(x, p.cols, p.rows, {
                colorLevel: p.caps?.colorLevel,
                theme: p.caps?.systemTheme,
              })
            : null;
      v(e, null);
      let O = r.marksCapable ? randomBytes(16).toString("hex") : void 0;
      if (
        (e.write(
          b({
            ok: !0,
            op: "attach",
            imarkNonce: O,
            decModes: r.decModeSnapshot(),
            via: r.via,
            booting: r.bootingForAttachMetrics,
            tempo: r.record.tempo,
            state: r.record.state,
            cached: M !== null,
            stale: Boolean(
              r.record.cliVersion &&
              r.record.cliVersion !==
                {
                  ISSUES_EXPLAINER:
                    "report the issue at https://github.com/anthropics/claude-code/issues",
                  PACKAGE_URL: "@anthropic-ai/claude-code",
                  README_URL: "https://code.claude.com/docs/en/overview",
                  VERSION: "2.1.263",
                  FEEDBACK_CHANNEL:
                    "https://github.com/anthropics/claude-code/issues",
                  BUILD_TIME: "2026-09-06T01:08:56Z",
                  GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
                  HOOKS_WORKER_URL:
                    "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                  DD_SOURCEMAP_GROUP: "darwin",
                }.VERSION,
            ),
            workerCliVersion: r.record.cliVersion,
          }) +
            `
`,
        ),
        logEvent("tengu_bg_attach", {
          tempo: fromEnum(r.record.tempo),
          state: fromJobState(r.record.state),
          via: fromEnum(r.via),
          attachers: r.attachers.size,
          stale: Boolean(
            r.record.cliVersion &&
            r.record.cliVersion !==
              {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.263",
                FEEDBACK_CHANNEL:
                  "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-09-06T01:08:56Z",
                GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
                HOOKS_WORKER_URL:
                  "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "darwin",
              }.VERSION,
          ),
        }),
        M !== null)
      )
        e.write(i_ + gm + M);
      let K = gm + mW,
        X = 6,
        re = [],
        le = 0,
        de = "",
        ce = () => {},
        se,
        ye = 0,
        ve = !1,
        Oe = bn(),
        xe = Oe === 0 ? 0 : Math.max(1, Math.ceil((Oe - qt) / St)),
        U = (D) =>
          wrapDaemonHint(
            i_ +
              gm +
              `
  \x1B[2m${D}\x1B[0m
`,
          ),
        J,
        he = !1,
        rt = () => {
          if (!he) return;
          if (((he = !1), typeof r.replayInteractiveMarksTo === "function"))
            r.replayInteractiveMarksTo(p.attachId ?? e);
        },
        Ae = (D) => {
          if (re === null) return;
          J?.();
          let F = re;
          if (((re = null), clearTimeout(nt), D && !e.destroyed))
            for (let me of F) e.write(me);
          if (((he = !0), D && F.length > 0)) rt();
        },
        nt = setTimeout(() => {
          let D = re !== null && le === 0,
            F = D && (p.holdingFrame === !0 || M !== null);
          if (!F) Ae(!0);
          if (D && !e.destroyed) {
            if (!F) {
              let ge = r.record.state,
                Ee =
                  ge === "starting" ||
                  ge === "resuming" ||
                  ge === "adopted" ||
                  ge === "crashed"
                    ? "Session is starting \u2014 it will appear once ready. Ctrl+Z to detach"
                    : "Waiting for session to redraw\u2026 Ctrl+Z to detach";
              e.write(U(Ee));
            }
            let me = Date.now();
            ((se = setInterval(() => {
              let ge = Date.now(),
                Ee = ge - me;
              if (((me = ge), Ee > St * 3)) ye = 0;
              if (
                (ye++,
                xe > 0 &&
                  ye >= xe &&
                  !r.isKilling &&
                  !r.isRetiring &&
                  !r.isBooting &&
                  r.dispatch.launch.mode !== "exec")
              ) {
                (clearInterval(se), (se = void 0), ce());
                let Ne = r.dispatch.attachStallRespawns ?? 0,
                  je = {
                    state: fromJobState(r.record.state),
                    via: fromEnum(r.via),
                    attempt: Ne,
                  };
                if (Ne >= 2) {
                  if (
                    (logEvent("tengu_bg_attach_stall_gave_up", je),
                    e.write(
                      U("Session keeps stalling at startup.") +
                        daemonDetachApc(
                          `ESTALLED: Session ${p.short} keeps stalling at startup \u2014 check ${getJobDir(p.short)} for logs.`,
                        ),
                    ),
                    !r.isKilling)
                  )
                    r.kill(
                      "SIGKILL",
                      "failed",
                      "session keeps stalling at startup",
                    );
                  return;
                }
                if (
                  (logEvent("tengu_bg_attach_stall_respawn", je),
                  e.write(
                    U("Session not responding \u2014 restarting it\u2026"),
                  ),
                  vn(r, e, d, () => ve, T, ne),
                  !e.destroyed)
                )
                  e.write(daemonDetachApc(`${RESPAWNING_ATTACH_CODE}: worker ${RESPAWN_REASON_STALL}, restarting`));
                return;
              }
              let ke = r.attachers.get(Se);
              (ce(),
                (ce = r.resizeForRepaint(
                  ke?.cols ?? p.cols,
                  ke?.rows ?? p.rows,
                )));
            }, St)),
              se.unref());
          }
        }, qt),
        yt = () => {
          if (se) (clearInterval(se), (se = void 0));
        },
        ot = r.onStream.subscribe((D) => {
          if (e.destroyed) return;
          if (((ve = !0), re !== null)) {
            let F = de + D;
            if (F.includes(i_) || F.includes(K)) {
              yt();
              let me = D.includes(i_) || D.includes(K) ? D : F;
              if ((ce(), Ae(!1), e.writableLength <= He))
                (e.write(r.decModeSnapshot().map(enableTerminalMode).join("") + me), rt());
              else e.destroy();
              return;
            }
            if ((re.push(D), (le += D.length), (de = F.slice(-X)), le > 65536))
              Ae(!0);
            return;
          }
          if ((yt(), e.writableLength > He)) {
            e.destroy();
            return;
          }
          (e.write(D), rt());
        }),
        it = r.onRepaintDone.subscribe(() => {
          (ce(), Ae(!0));
        });
      if (getCurrentPlatform() === "windows") for (let D of r.attachers.values()) D.kick();
      let Se = p.attachId ?? e;
      if (
        (r.attachers.set(Se, {
          cols: p.cols,
          rows: p.rows,
          caps: p.caps,
          imarkNonce: O,
          deliver: (D) => {
            if (!e.destroyed) e.write(D);
          },
          kick: () => {
            if ((logEvent("tengu_bg_attach_kick", {}), se))
              (clearInterval(se), (se = void 0));
            if (
              (clearTimeout(nt),
              ce(),
              ot(),
              it(),
              e.removeAllListeners("data"),
              !e.destroyed)
            )
              (e.write(daemonDetachApc("EKICKED: Session opened in another window")),
                e.end());
            r.attachers.delete(Se);
          },
        }),
        M !== null && x != null)
      ) {
        let D = r.attachers.get(Se);
        if (D)
          ((D.repaint = () => {
            if (e.destroyed) return;
            r.resize(D.cols, D.rows);
            let F = wt(x, D.cols, D.rows, {
              colorLevel: p.caps?.colorLevel,
              theme: p.caps?.systemTheme,
            });
            e.write(i_ + gm + (F ?? ""));
          }),
            (J = () => {
              ((D.repaint = void 0), (J = void 0));
            }));
      }
      (r.noteActivity(), r.seedFocus(!0), r.sendAttacherCaps(p.caps ?? null));
      let Ve;
      if (r.dispatch.launch.mode === "exec") {
        let D = wrapDaemonHint(i_ + gm);
        e.write(D);
        for (let F of r.ringSnapshot()) e.write(F);
        if (
          (Ae(!1),
          (Ve = () => {
            let F = r.attachers.get(Se);
            if (e.destroyed || !F) return;
            let me =
                r.record.outcome === "done"
                  ? "done"
                  : r.record.outcome === "killed"
                    ? "stopped"
                    : "failed",
              ge = wrapDaemonHint(`\r
\x1B[2m\u2014 ${me} \xB7 Ctrl+Z to return \u2014\x1B[0m\r
`);
            (e.write(ge),
              (F.repaint = () => {
                if (e.destroyed) return;
                e.write(D);
                for (let Ee of r.ringSnapshot()) e.write(Ee);
                e.write(ge);
              }));
          }),
          r.record.outcome)
        ) {
          (Ve(),
            e.once("close", () => {
              (clearTimeout(nt), ot(), it(), r.attachers.delete(Se));
            }));
          return;
        }
      }
      ce = r.resizeForRepaint(p.cols, p.rows);
      let cr = r.onSettle.subscribe(() => {
          if (Ve && r.record.outcome !== "killed") return Ve();
          e.end();
        }),
        vt = new StringDecoder("utf8"),
        xt = (D) => {
          let F = vt.write(D);
          if (F.length > 0 && !jt(F)) r.lastInputAttacher = Se;
          r.write(F);
        };
      if (c.length) xt(c);
      (e.on("data", xt),
        e.once("close", () => {
          if (se) clearInterval(se);
          if ((ce(), Ae(!1), ot(), cr(), it(), !r.attachers.delete(Se))) return;
          let D = vt.end();
          if (D) r.write(D);
          if (r.attachers.size > 0) {
            let F = [...r.attachers.values()].at(-1);
            (r.resizeForRepaint(F.cols, F.rows),
              r.sendAttacherCaps(
                F.caps ? { ...F.caps, systemTheme: void 0 } : null,
              ));
          } else (r.seedFocus(!1), r.sendAttacherCaps(null));
        }));
      return;
    }
    case "ensure-spare":
      return (er(Y, "ensure_spare"), C(e, { ok: !0, op: "ensure-spare" }));
    case "permission-response":
      if (!timingSafeStringEqual(p.auth, I))
        return C(e, {
          ok: !1,
          error:
            "permission-response rejected: this client didn't present the daemon control key",
          code: "EAUTH",
        });
      return C(e, { ok: !0, op: "permission-response" });
    case "subscribe": {
      let r = s.get(p.short);
      if (!r)
        return C(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB",
        });
      if (
        (v(e, null),
        Be(e, {
          type: "snapshot",
          record: r.record,
          streamTail: r.tail(p.tail ?? 200),
        }),
        r.record.outcome)
      ) {
        (Be(e, { type: "settled", outcome: r.record.outcome }), e.end());
        return;
      }
      let x = [
        r.onStream.subscribe((M) => Be(e, { type: "stream", line: M })),
        r.onState.subscribe((M) => Be(e, { type: "state", patch: M })),
        r.onSettle.subscribe((M) => {
          (Be(e, { type: "settled", outcome: M }), e.end());
        }),
      ];
      e.on("close", () => {
        for (let M of x) M();
      });
      return;
    }
    default:
      return C(e, { ok: !1, error: `unknown op: ${p.op}`, code: "EUNKNOWN" });
  }
}
function An(t) {
  if (t === void 0) return;
  return fromEnumOpt(DAEMON_LEASE_LABELS.find((e) => e === t)) ?? S("other");
}
function kn(t) {
  if (t === null || typeof t !== "object") return null;
  let e = t;
  if (
    typeof e.label === "string" &&
    typeof e.cwd === "string" &&
    typeof e.pid === "number"
  )
    return { label: e.label, cwd: e.cwd, pid: e.pid };
  return null;
}
var K0 = 45000;
async function YHe(t) {
  let e = Date.now() + t;
  while (Date.now() < e) {
    if ((await controlRequest({ proto: BG_PROTO, op: "ping" })).ok) return !0;
    await We(100);
  }
  return !1;
}
async function kPt(t, e) {
  let o = Date.now() + t,
    c = 0;
  while (!0) {
    let s = o - Date.now();
    if (s <= 0) return null;
    if (await YHe(Math.min(s, 1000))) {
      let d = Date.now();
      if (d >= c) {
        c = d + 1000;
        let m = await getVerifiedDaemonLock(1, e).catch(() => null);
        if (m?.origin === "service") return m;
        if (m?.origin === "foreground") return null;
      }
      await We(100);
    }
  }
}
async function Dn(t, e) {
  let o = Date.now(),
    c = !1,
    s,
    d = "restarting",
    m;
  while (Date.now() < o + (c ? 30000 : 1e4)) {
    let _ = await controlRequest({ proto: BG_PROTO, op: "nudge" });
    if (_.ok && _.op === "nudge") {
      if (((c = !0), (s = _.version), !_.restarting)) {
        if (
          await On(_.version, t, _.processWrapper, _.upgradePending === !0, e)
        )
          return "down";
        let w = getLauncherConfigError();
        if (w && !_.processWrapper) return { refuse: w };
        if (!_.processWrapper && getLauncherCommandString() !== "" && !(await isLauncherRunnable()))
          return { refuse: bt() };
        ar(_.processWrapper);
        let k =
          _.version !==
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.263",
            FEEDBACK_CHANNEL:
              "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-09-06T01:08:56Z",
            GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
            HOOKS_WORKER_URL:
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "darwin",
          }.VERSION;
        if (Date.now() - o > 200 || k)
          logEvent("tengu_bg_skew_nudge", {
            converged: !0,
            duration_ms: Date.now() - o,
            daemon_version: getVersionForAnalytics(_.version),
            skewed: k,
          });
        return "up";
      }
      ((d = "restarting"), await We(100));
      continue;
    }
    if (!_.ok && _.code === "ETIMEOUT") {
      ((c = !0), (d = "etimeout"), await We(100));
      continue;
    }
    if (!_.ok && _.code === "ENOCONN") {
      if (!c) {
        let w = await getVerifiedDaemonLock(1, e).catch(() => null);
        if (w?.bgDisabled) return "down";
        if (w) c = !0;
      }
      if (((m = w8(_.errno)), !c)) return "down";
      ((d = "enoconn"), await We(100));
      continue;
    }
    {
      let w = getLauncherConfigError();
      if (w) return { refuse: w };
      if (getLauncherCommandString() !== "" && !(await isLauncherRunnable())) return { refuse: bt() };
    }
    return "up";
  }
  return (
    logEvent("tengu_bg_skew_nudge", {
      converged: !1,
      restarting: d === "restarting",
      etimeout: d === "etimeout",
      enoconn: d === "enoconn",
      daemon_version: getVersionForAnalytics(s),
      ...(m && { connect_errno: m }),
    }),
    "down"
  );
}
async function KL(t = {}, e) {
  if (getCurrentPlatform() !== "windows" && hasUidCollapse())
    return (
      logFeatureBad("daemon_ensure_running", "uid_collapse"),
      { ok: !1, reason: UID_COLLAPSE_REFUSAL_MESSAGE, causeCode: "uid_collapse" }
    );
  return or(t, e, !1);
}
async function or(t, e, o) {
  let c = Date.now(),
    s = await Dn(t.forceTransient ?? !1, e);
  if (s === "up") return (et(o), { ok: !0 });
  if (typeof s === "object") {
    if (t.spawnIntent)
      return (
        logFeatureBad("daemon_ensure_running", "daemon_ensure_client_wrapper_refused"),
        logFeatureBad("agent_launcher", "raw_daemon_client_misconfigured"),
        { ok: !1, reason: s.refuse, causeCode: "wrapper" }
      );
    return (et(o), { ok: !0 });
  }
  let d = Date.now(),
    m = d - c > 40000,
    _ = await ir(),
    w = _ ? await RPt() : { execPathStale: !1, launcherPrefixDead: !1 },
    k = _ && (w.execPathStale || w.launcherPrefixDead);
  if (k)
    (logEvent("tengu_bg_daemon_service_stale_exec", {
      launcher_dead: w.launcherPrefixDead,
    }),
      n(
        w.execPathStale
          ? "daemon service exec path is stale (binary deleted) \u2014 falling back to transient spawn. Run 'claude daemon install' to repair."
          : "daemon service unit starts through a launcher that was deleted or is no longer executable \u2014 falling back to transient spawn. Run 'claude daemon install' to repair.",
        { level: "warn" },
      ));
  let E = !1;
  if (_ && !k) {
    ((E = !0), t.onStarting?.());
    let U = await nr(e);
    if (U)
      return (
        logFeatureBad("daemon_ensure_running", U.code),
        { ok: !1, reason: U.reason, causeCode: U.causeCode }
      );
    let J = await vPt(),
      he = await YHe(5000);
    if (
      (logEvent("tengu_bg_daemon_install", {
        outcome_ok: he,
        via_service: !0,
        fresh_install: !1,
        clock_jump: m,
        duration_ms: Date.now() - c,
        platform_darwin: getCurrentPlatform() === "macos",
        platform_linux: getCurrentPlatform() === "linux",
        platform_windows: getCurrentPlatform() === "windows",
      }),
      he)
    )
      return (et(o), { ok: !0 });
    (logEvent("tengu_bg_daemon_service_poll_fallthrough", { sr_ok: J.ok }),
      n(
        `daemon service ${H_e} 5s${J.ok ? "" : ` (${J.error})`} \u2014 falling back to transient spawn. Run 'claude daemon install' to repair.`,
        { level: "warn" },
      ));
  }
  if (
    !_ &&
    !t.forceTransient &&
    getDaemonColdStart() === "ask" &&
    (await sr()) &&
    !getGlobalConfig().daemonInstallPromptDismissed
  )
    return (
      logEvent("tengu_bg_daemon_cold_start_ask", {}),
      {
        ok: !1,
        askInstall: !0,
        causeCode: "ask",
        reason:
          "No background daemon is running. Run 'claude daemon install' to set it up as a persistent service.",
      }
    );
  if (!E) {
    let U = getLauncherConfigError();
    if (!(await isLauncherRunnable()) && (await getVerifiedDaemonLock(1, e).catch(() => null)))
      return (
        logFeatureBad("daemon_ensure_running", "daemon_ensure_client_wrapper_refused"),
        logFeatureBad("agent_launcher", "zombie_kill_client_misconfigured"),
        { ok: !1, reason: U ?? bt(), causeCode: "wrapper" }
      );
    t.onStarting?.();
    let J = await nr(e);
    if (J)
      return (
        logFeatureBad("daemon_ensure_running", J.code),
        { ok: !1, reason: J.reason, causeCode: J.causeCode }
      );
  }
  let v = _v(),
    N =
      v.lastTransientSpawnAt === null
        ? null
        : Date.now() - v.lastTransientSpawnAt;
  v.lastTransientSpawnAt = Date.now();
  let T = b({ label: Mn(), cwd: getCwd(), pid: process.pid }),
    V = Date.now(),
    I = ["daemon", "run", "--origin", "transient", "--spawned-by", T],
    ne = await vit(I),
    {
      err: Y,
      child: q,
      recoveredAfterReinstallWait: G,
      gaveUpOnNpmInstallInProgress: ae,
      reinstallWaitedMs: ue = 0,
    } = ne,
    p = ne.stderrPath;
  if (Y) {
    if (p) Ze(dirname(p), { recursive: !0, force: !0 }).catch(() => {});
    return (
      logEvent("tengu_bg_daemon_spawn_failed", {
        errno_enoent: A(Y) === "ENOENT",
        errno_eacces: A(Y) === "EACCES",
        errno: Jr(Y) ?? S("unknown"),
        launcher_configured: getLauncherArgv().length > 0 || getLauncherConfigError() !== null,
      }),
      logFeatureBad("daemon_ensure_running", "daemon_ensure_spawn_failed"),
      {
        ok: !1,
        reason: ae
          ? `Claude Code is being updated by npm on this machine (still not runnable after ${Math.round(Ye / 60000)} min, ${Jr(Y) ?? "spawn failed"}) \u2014 try again when the update finishes`
          : `spawn ${bgSupervisorNoun()}: ${l(Y)}`,
        causeCode: Jr(Y) ?? "spawn",
      }
    );
  }
  let r = gt({
      spawnIssuedAt: V + ue,
      child: q,
      stderrPath: p,
      wrapperConfigured: getLauncherArgv().length > 0,
      storageV5: e,
    }),
    x = await $e(r, Date.now() + 30000, !1),
    M = Date.now() - d - ue > 60000;
  if (!x && M) x = await $e(r, Date.now() + 5000, !1);
  if (!x && !M)
    x = await $e(
      r,
      Math.max(Date.now() + (K0 - 30000), r.spawnIssuedAt + K0),
      !0,
    );
  let fe = !1,
    O = 0,
    K = !1;
  if (!x && !M && (await Ht(r, tt()))) {
    let U = await Je(tt());
    if (
      ((O += U.waitedMs),
      logEvent("tengu_bg_daemon_spawn_reinstall_wait", {
        waited_ms: U.waitedMs,
        recovered: U.recovered,
        extended: U.extended,
        install_in_progress: U.installInProgressAtEnd,
        after_child_exit: !0,
      }),
      (K = !U.recovered && U.installInProgressAtEnd),
      U.recovered)
    ) {
      let J = await vit(I);
      if (J.err === null) {
        if (((fe = !0), (O = 0), p))
          Ze(dirname(p), { recursive: !0, force: !0 }).catch(() => {});
        ((p = J.stderrPath),
          (r = gt({
            spawnIssuedAt: Date.now(),
            child: J.child,
            stderrPath: p,
            wrapperConfigured: getLauncherArgv().length > 0,
            storageV5: e,
          })),
          n(
            `daemon: ${tt()} was being reinstalled when the first daemon was spawned (it exited at once); restarted it after ${U.waitedMs}ms`,
          ),
          (x = await $e(r, r.spawnIssuedAt + K0, !0)));
      } else if (
        (n(
          `daemon: respawn after the npm reinstall window failed: ${l(J.err)}`,
          { level: "warn" },
        ),
        logEvent("tengu_bg_daemon_spawn_failed", {
          errno: Jr(J.err) ?? S("unknown"),
          launcher_configured: getLauncherArgv().length > 0 || getLauncherConfigError() !== null,
          after_reinstall_wait: !0,
        }),
        J.stderrPath)
      )
        Ze(dirname(J.stderrPath), { recursive: !0, force: !0 }).catch(() => {});
    }
  }
  let X = r.budgetExtended ? mt : K0,
    re = !x && !M && Date.now() - r.spawnIssuedAt - O > X + 60000,
    le = !x && (M || re) && !o && !(await ht(r)),
    de = !1,
    ce,
    se,
    ye;
  if (!x) {
    let U = await qe(r, !0);
    if (((ye = Wt(U)), U.length > 0)) {
      ((de = !0),
        n(
          `daemon: transient spawn stderr:
${U}`,
          { level: "error" },
        ),
        (ce = [...U.matchAll(/\bE[A-Z]{2,14}\b/g)].find(
          (he) => !"/\\".includes(U[he.index - 1] ?? "."),
        )?.[0]));
      let J = U.split(/\r?\n/)
        .map((he) => normalizeWhitespace(stripAnsi(he)))
        .find((he) => he.length > 0);
      se = J && J.length > 200 ? `${truncateToCodeUnits(J, 200)}\u2026` : J;
    }
  }
  if (p) Ze(dirname(p), { recursive: !0, force: !0 }).catch(() => {});
  if (
    (logEvent("tengu_bg_daemon_install", {
      outcome_ok: x,
      via_service: !1,
      fresh_install: !1,
      clock_jump: M || m || re,
      duration_ms: Date.now() - c,
      platform_darwin: getCurrentPlatform() === "macos",
      platform_linux: getCurrentPlatform() === "linux",
      platform_windows: getCurrentPlatform() === "windows",
      had_stderr: de,
      child_exited: r.childExit !== null,
      ...(r.childExit?.code !== void 0 &&
        r.childExit.code !== null && { exit_code: r.childExit.code }),
      ...(r.childExit?.signal && { exit_signal: fromEnumOpt(r.childExit.signal) }),
      ...(r.childExitAt !== null && {
        child_exit_ms: Math.max(0, r.childExitAt - r.spawnIssuedAt),
      }),
      ...(ye && { stderr_class: ye }),
      reinstall_respawn: fe,
      budget_extended: r.budgetExtended,
      ...(le && { clock_jump_retry: S("scheduled") }),
      ...(o && { clock_jump_retry: S("retry") }),
      ...(N !== null && { spawn_gap_ms: N }),
      ...(ce && { stderr_errno: w8(ce) }),
      ...(!x && (await Ft(r))),
    }),
    x)
  ) {
    if ((Ln(), G || fe))
      logFeatureSad("daemon_ensure_running", "daemon_ensure_spawn_waited_reinstall");
    else et(o);
    if (getLauncherArgv().length > 0) {
      let U = await controlRequest({ proto: BG_PROTO, op: "nudge" }).catch(() => null);
      ar(U?.ok && U.op === "nudge" ? U.processWrapper : void 0);
    }
    return { ok: !0 };
  }
  if (le)
    return (
      n(
        "daemon: the clock jumped during the cold start (machine slept?) and the daemon is still unreachable \u2014 retrying the whole start once",
        { level: "warn" },
      ),
      or({ ...t, onStarting: void 0 }, e, !0)
    );
  logFeatureBad("daemon_ensure_running", "daemon_ensure_transient_unreachable");
  let ve = K
      ? ` \u2014 Claude Code is being updated by npm on this machine (still not runnable after ${Math.round(Ye / 60000)} min); try again when the update finishes`
      : "",
    Oe = getLauncherArgv()[0];
  if (Oe)
    return (
      logEvent("tengu_bg_daemon_spawn_failed", {
        launcher_configured: !0,
        failed_stage: S("unknown"),
      }),
      logFeatureBad("agent_launcher", "daemon_never_reachable"),
      {
        ok: !1,
        causeCode: "timeout",
        reason: `launcher \`${Oe}\` ran but Claude Code never started${se ? ` \u2014 ${se}` : ` (nothing on stderr within ${X / 1000}s)`}${ve}`,
      }
    );
  let xe = r.siblingHolderSeen ? null : r.childExit;
  if (xe) {
    let U = xe.signal ? `signal ${xe.signal}` : `exit code ${xe.code ?? "?"}`;
    return {
      ok: !1,
      causeCode: "exited",
      reason: se
        ? `${bgSupervisorNoun()} ${I_e} (${U}): ${se}${ve}`
        : `${bgSupervisorNoun()} ${I_e} (${U}, nothing on stderr) and no other ${bgSupervisorNoun()} answered within ${Math.round(Math.min(Date.now() - r.spawnIssuedAt - O, X) / 1000)}s${ve}`,
    };
  }
  return {
    ok: !1,
    causeCode: "timeout",
    reason: `${bgSupervisorNoun()} ${H_e} ${X / 1000}s${ve}`,
  };
}
function et(t) {
  if (t) {
    logFeatureSad("daemon_ensure_running", "daemon_ensure_clock_jump_retried");
    return;
  }
  logFeatureOk("daemon_ensure_running");
}
function tt() {
  return resolveWrappedClaudeInvocation().target;
}
function In(t) {
  if (t.daemonOrigin !== "transient") return !1;
  if (t.daemonVersion === t.clientVersion) return !1;
  if (t.daemonTarget === t.clientTarget) return !1;
  let e = parseVersionTimestamp(t.daemonVersion),
    o = parseVersionTimestamp(t.clientVersion);
  if (e !== null && o !== null) {
    if (getVersionTarget(t.daemonVersion) !== getVersionTarget(t.clientVersion)) return !1;
    return o > e;
  }
  if (hasVersionTarget(t.daemonVersion) || hasVersionTarget(t.clientVersion)) return !1;
  return (
    Ue.valid(t.clientVersion) !== null &&
    Ue.valid(t.daemonVersion) !== null &&
    Ue.gt(t.clientVersion, t.daemonVersion)
  );
}
async function On(t, e, o, c, s) {
  if (getLauncherConfigError() !== null) return !1;
  if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_bg_binary_takeover", !0)) return !1;
  let d =
      t !==
      {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.263",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-06T01:08:56Z",
        GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
        HOOKS_WORKER_URL:
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION,
    m = d && !c,
    _ = Nn(o, d);
  if (!m && !_) return !1;
  if (!(await isLauncherRunnable())) return !1;
  if (await ir()) return !1;
  if (
    !e &&
    getDaemonColdStart() === "ask" &&
    (await sr()) &&
    !getGlobalConfig().daemonInstallPromptDismissed
  )
    return !1;
  let w = await realpath(tt()).catch(() => null);
  if (!w) return !1;
  let k = resolveClaudeInvocation().cmd;
  if (!(await _e(k))) {
    let I = resolveClaudeInvocation({ pinToCurrentBinary: !0 }).cmd;
    if (I === k || !(await _e(I))) return !1;
  }
  let E = await getVerifiedDaemonLock(1, s).catch(() => null);
  if (!E) return !1;
  if (!isProcessIdentityKnown(E))
    return (
      n(
        `bg: skipping stale-daemon retire \u2014 lock pid ${E.pid} has no procStart identity`,
      ),
      !1
    );
  let v = In({
      daemonVersion: E.version,
      daemonOrigin: E.origin,
      daemonTarget: E.launchTarget,
      clientVersion: {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.263",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-06T01:08:56Z",
        GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
        HOOKS_WORKER_URL:
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION,
      clientTarget: w,
    }),
    N = m && v,
    T =
      _ &&
      E.origin === "transient" &&
      !E.processWrapper &&
      (E.version ===
        {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION ||
        (c && v));
  if (!N && !T) return !1;
  let V = await terminateProcessGracefully(E.pid);
  if (V === "timed-out") {
    try {
      process.kill(E.pid, "SIGKILL");
    } catch {}
    V = await terminateProcessGracefully(E.pid);
  }
  if (V !== "exited") return !1;
  if (T) _v().prefixAxis = "took-over";
  return (
    n(
      N
        ? `bg: ${bgSupervisorNoun()} pid ${E.pid} runs ${E.version}; this binary (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}) is a newer build \u2014 retired the stale ${bgSupervisorNoun()} so new sessions use the current binary`
        : `bg: ${bgSupervisorNoun()} pid ${E.pid} predates CLAUDE_CODE_PROCESS_WRAPPER and spawns sessions unwrapped \u2014 retired it so the replacement runs through the configured launcher`,
      { level: "warn" },
    ),
    logEvent("tengu_bg_daemon_binary_takeover", {
      daemon_age_ms: Date.now() - E.startedAt,
      via_prefix: T,
      via_version: N,
      daemon_version: getVersionForAnalytics(E.version),
    }),
    !0
  );
}
function Nn(t, e) {
  if (getLauncherCommandString() === "" || t) return !1;
  let c = _v();
  if (c.prefixAxis === "took-over") {
    if (e) return !1;
    if (!c.prefixContractViolationLogged)
      ((c.prefixContractViolationLogged = !0),
        n(
          `bg: a raw ${bgSupervisorNoun()} is running again after this session's launcher-driven restart. Two causes look identical from here: a claude session started BEFORE CLAUDE_CODE_PROCESS_WRAPPER was deployed cold-started it (restart those sessions), or the launcher does not pass that variable through in the environment it hands to \`exec\` (launcher contract #3). Sessions dispatched to it run unwrapped either way; \`claude daemon status\` shows the launcher it records.`,
          { level: "warn" },
        ),
        logEvent("tengu_bg_launcher_replacement_raw", {}));
    return !1;
  }
  if (e) return !0;
  if (c.prefixAxis === "attempted") return !1;
  return ((c.prefixAxis = "attempted"), !0);
}
async function nr(t) {
  let e = await getVerifiedDaemonLock(1, t).catch(() => null);
  if (!e) return null;
  if (e.bgDisabled)
    return (
      logEvent("tengu_bg_daemon_bg_disabled_skip", {
        origin_service: e.origin === "service",
      }),
      {
        reason:
          "the background service on this machine is running without background sessions \u2014 its control socket failed to start. " +
          "Check the cause with 'claude daemon status' (daemon.log), then restart the service (launchctl/systemctl, or reboot).",
        code: "daemon_ensure_bg_disabled",
        causeCode: "bg_disabled",
      }
    );
  if (Date.now() - e.startedAt <= Et + 5000) return null;
  let o = await controlRequest({ proto: BG_PROTO, op: "ping" }, { timeoutMs: 1000 }),
    c = {
      started_ago_ms: Date.now() - e.startedAt,
      origin_transient: e.origin === "transient",
      origin_service: e.origin === "service",
      version_skew:
        e.version !==
        {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
    };
  if (o.ok || o.code === "ETIMEOUT")
    return (
      logEvent("tengu_bg_daemon_zombie_false_positive", {
        ...c,
        recheck_etimeout: !o.ok,
      }),
      null
    );
  if (!isProcessIdentityKnown(e))
    return (
      n(
        `bg: supervisor lock pid ${e.pid} alive but identity unverifiable (no procStart) \u2014 not signalled`,
        { level: "warn" },
      ),
      {
        reason: `${describeStopFailure({ pid: e.pid, outcome: "unverified" })}. If no daemon is running, delete ${getDaemonLockPath()}; if pid ${e.pid} is a live process you own, stop it yourself first.`,
        code: "daemon_ensure_zombie_unverified",
        causeCode: "zombie",
      }
    );
  let s = !1;
  try {
    s = await lstat(getControlSocketPath()).then(
      () => !0,
      () => !1,
    );
  } catch {}
  if (
    (n(
      `bg: supervisor pid ${e.pid} alive but control socket unreachable \u2014 signalling restart`,
      { level: "warn" },
    ),
    (await terminateProcessGracefully(e.pid)) === "eperm")
  )
    return {
      reason: `${bgSupervisorNoun()} socket missing; could not restart supervisor (EPERM)`,
      code: "daemon_ensure_zombie_kill_failed",
      causeCode: "zombie",
    };
  return (
    logEvent("tengu_bg_daemon_zombie_restart", { pid: e.pid, ...c, sock_exists: s }),
    null
  );
}
async function ir() {
  if (process.env.CLAUDE_CONFIG_DIR || !(await ole())) return !1;
  return tF().catch(() => !1);
}
function Mn() {
  let t = process.argv.slice(2);
  if (t[0] === "agents") return "claude agents";
  if (t.includes("--bg")) return "claude --bg";
  return "claude";
}
async function Ln() {
  let t = getCurrentPlatform();
  if (t !== "linux" && t !== "wsl") return;
  let e = await Tn("/etc/systemd/logind.conf", "utf8").catch(() => "");
  if (!/^\s*KillUserProcesses\s*=\s*yes\b/im.test(e)) return;
  n(
    "logind KillUserProcesses=yes \u2014 SSH disconnect will kill the transient daemon and its background jobs. Run `loginctl enable-linger $USER` or `claude daemon install` to keep it alive across logout.",
    { level: "warn" },
  );
}
function bt() {
  return `${PROCESS_WRAPPER_ENV_VAR}: launcher \`${getLauncherArgv()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting); background sessions are not started unwrapped`;
}
function ar(t) {
  let e = getLauncherCommandString();
  if (e === "" || !t) return;
  if (t === e) logFeatureOk("agent_launcher");
  else logFeatureSad("agent_launcher", "served_by_skewed_wrapper");
}
async function sr() {
  return isDaemonServiceInstallEnabled() && (await ole()) && !process.env.CLAUDE_CONFIG_DIR && isDaemonCliEnabled();
}
function xPt(t) {
  return STORAGE_KEYS.daemon(["host-managed", t]);
}
var $n = { namespace: "daemon", relPath: ["host-managed"] };
async function Rit(t) {
  let e = await t.ensureScope($n);
  if (!e.ok)
    throw lr(
      Error("host tombstone folder not made", { cause: e.error }),
      e.error,
    );
}
async function kit(t, e) {
  let o = await t.write(xPt(e), "", { publishDiscipline: "inPlace" });
  if (!o.ok)
    throw lr(Error("host tombstone write failed", { cause: o.error }), o.error);
}
async function LWe(t, e) {
  await t.delete(xPt(e)).catch(() => {});
}
function lr(t, e) {
  let o = ou(e);
  return Object.assign(t, o !== void 0 ? { code: o } : {});
}
export {
  _v,
  z$n,
  ole,
  OZt,
  OWe,
  XHe,
  vPt,
  DWe,
  V$n,
  RPt,
  tF,
  vit,
  K$n,
  K0,
  YHe,
  kPt,
  KL,
  xPt,
  Rit,
  kit,
  LWe,
};
