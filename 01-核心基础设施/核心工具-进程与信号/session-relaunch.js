// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K, he, sn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { withTimeout } from "../共享小工具-未细化/async-timeout-utils.js";
import { setBgExitCause } from "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import { R, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Xhe, gxe, jxt, Yu, o8, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { PROCESS_WRAPPER_ENV_VAR, getLauncherArgv, getLauncherConfigError, isLauncherRunnable } from "./process-wrapper-launcher.js";
import { flushDiagnostics } from "../共享小工具-未细化/diagnostics-log.js";
import {
  Z7,
  yUt,
  Eue,
  xn,
  Zun,
  Ht,
  getMaterializedSessionFile,
  hasRecordedUserPrompt,
  recordTranscript,
  persistLeafCheckpoint,
  flushSessionStorage,
  isLoggableMessage,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { drainRegisteredWriteQueues } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { getProjectDir } from "../../02-功能模块/Teammates团队/transcript-paths.js";
import { resolveWrappedClaudeInvocation, applyProcessWrapper } from "../共享小工具-未细化/claude-launcher-invocation.js";
import { jlt, Wlt, Tee } from "../../02-功能模块/AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import { aIe, getRelaunchTerminalSizeEnv } from "../共享小工具-未细化/relaunch-terminal-size.js";
import { copyEnvWithoutUndefined } from "../共享小工具-未细化/copy-env-without-undefined.js";
import { resolveTranscriptLocator } from "../共享小工具-未细化/hover-rest-transcript.js";
import { getCurrentPlatform } from "../核心工具-路径与平台/platform-detection.js";
import { spawnSync } from "child_process";
import { stat as I } from "fs/promises";
import { constants } from "os";
import { dirname } from "path";
import { isAbsolute } from "path";
function E(e, t, o, r) {
  if (getCurrentPlatform() === "windows" || !isAbsolute(e)) return;
  let a;
  try {
    if (r) ((a = process.cwd()), Yu(r));
    (process.execve(e, t, copyEnvWithoutUndefined(o)),
      n(`execve(${e}) returned \u2014 falling back to spawn`, {
        level: "warn",
      }));
  } catch (s) {
    n(`execReplaceProcess: ${l(s)} \u2014 falling back to spawn`, {
      level: "warn",
    });
  } finally {
    if (a !== void 0)
      try {
        Yu(a);
      } catch {}
  }
}
async function _(e) {
  let t = getMaterializedSessionFile();
  if (!t) return !1;
  return v(t, e);
}
async function v(e, t) {
  if (
    await I(e).then(
      (a) => a.size > 0,
      () => !1,
    )
  )
    return !0;
  let r = resolveTranscriptLocator(e, t);
  if (r === void 0) return !1;
  try {
    let a = await r.backend.statMeta(r.key);
    if (!a.ok && a.error.code !== "NotFound")
      n(`transcriptHasBytes: backend statMeta failed: ${a.error.code}`);
    return a.ok && a.value.size > 0;
  } catch (a) {
    return (logError(a), !1);
  }
}
async function recordExitTranscript(e, t, { responseStreaming: o = !1 } = {}, r) {
  let a = Wlt(t);
  if (!a || o) return a;
  try {
    if (
      (await recordTranscript([...e, Ht(jlt[t], "warning")], void 0, void 0, void 0, r),
      t === "relaunch")
    )
      await persistTranscriptLeafCheckpoint(e, r);
  } catch (s) {
    throw (Tee(), s);
  }
  return !0;
}
async function recordProcessExitTranscript(e, { responseStreaming: t = !1 } = {}, o) {
  try {
    await recordExitTranscript(e, "process_exit", { responseStreaming: t }, o);
  } catch (r) {
    logError(r);
  }
}
async function handlePromptInputExit(e, t = {}, o) {
  (await recordProcessExitTranscript(e, t, o), await xn(0, "prompt_input_exit"));
}
var p =
    "the automatic continue at the usage-limit reset was cancelled (/rate-limit-options to wait again)",
  d = `${p.charAt(0).toUpperCase()}${p.slice(1)}.`,
  A = "Automatic continue at the usage-limit reset was cancelled.";
function surfaceCancelledContinueNotice(e, t) {
  return t.includes(p) || t.includes(d) || t.includes(A) ? `${e} ${d}` : e;
}
function appendCancelledContinueNotice(e, t, { as: o = "sentence", exitsAfterward: r = !1 } = {}) {
  if ((Tee(), !t)) return e;
  if (o === "clause") return `${e} \u2014 ${p}`;
  return `${e}
${r ? A : d}`;
}
function relaunchWithErrorNotice(e, t, o) {
  return relaunchClaudeCode(t, o).catch((r) => {
    if (r instanceof Error) r.message = appendCancelledContinueNotice(r.message, e, { as: "clause" });
    else Tee();
    throw r;
  });
}
async function persistTranscriptLeafCheckpoint(e, t) {
  let o = findLastLoggableMessage(e)?.uuid;
  try {
    if (o) await persistLeafCheckpoint(o, void 0, t);
    else if (hasRecordedUserPrompt() && (await _(t))) await persistLeafCheckpoint(null, void 0, t);
  } catch (r) {
    logError(r);
  }
}
function findLastLoggableMessage(e) {
  return e.findLast(
    (t) => (t.type === "user" || t.type === "assistant") && isLoggableMessage(t),
  );
}
async function assertLauncherRunnable() {
  if (await isLauncherRunnable()) return;
  throw (
    logFeatureBad("agent_launcher", "relaunch_launcher_not_runnable"),
    new R(
      getLauncherConfigError() ??
        `${PROCESS_WRAPPER_ENV_VAR}: launcher \`${getLauncherArgv()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry; this session was left running`,
      "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable",
    )
  );
}
async function relaunchClaudeCode(e = {}, t) {
  let { cmd: o, prefixArgs: r } = applyProcessWrapper(e.launcher ?? resolveWrappedClaudeInvocation());
  await assertLauncherRunnable();
  let a = e.extraArgs ?? [],
    s;
  if (e.args) s = e.args;
  else if (e.freshIfNoTranscript && !(await _(t))) s = a;
  else s = ["--resume", K(), ...a];
  (Zun(),
    Z7(),
    yUt(),
    await Promise.all([
      withTimeout(flushSessionStorage(), 30000, "flush timeout (relaunch)").catch(() => {}),
      withTimeout(gxe(), Xhe, "cleanup timeout")
        .catch(() => {})
        .then(() => withTimeout(Eue(), 1000, "analytics flush timeout").catch(() => {})),
    ]),
    e.preSpawn?.());
  let i = { ...process.env };
  (delete i.CLAUDE_CODE_TUI_JUST_SWITCHED,
    delete i.CLAUDE_CODE_TUI_TRIAL,
    delete i.CLAUDE_BRIDGE_REATTACH_SESSION,
    delete i.CLAUDE_BRIDGE_REATTACH_SEQ,
    delete i.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY,
    delete i.CLAUDE_BRIDGE_REATTACH_GROUPING,
    delete i.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT,
    delete i.CLAUDE_BRIDGE_REATTACH_OWNER_ORG,
    delete i.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL,
    delete i[aIe],
    Object.assign(i, e.env));
  for (let u of e.dropEnv ?? []) delete i[u];
  Object.assign(i, getRelaunchTerminalSizeEnv());
  let m = resolveSessionWorkingDirectory();
  (await g(), E(o, [o, ...r, ...s], i, m));
  for (let u of ["SIGINT", "SIGTERM", "SIGHUP"])
    (process.removeAllListeners(u), process.on(u, () => {}));
  await g();
  let c = spawnSync(o, [...r, ...s], { stdio: "inherit", env: i, cwd: m });
  if (
    (process.removeAllListeners("beforeExit"),
    process.removeAllListeners("exit"),
    c.error)
  )
    (process.stderr.write(`Failed to relaunch Claude Code: ${c.error.message}
`),
      setBgExitCause("relaunch_spawn_error"),
      process.exit(1));
  if (c.signal)
    (process.removeAllListeners(c.signal),
      process.kill(process.pid, c.signal),
      process.exit(128 + (constants.signals[c.signal] ?? 0)));
  process.exit(c.status ?? (c.signal ? 1 : 0));
}
function resolveSessionWorkingDirectory() {
  let e = getMaterializedSessionFile(),
    t = he();
  if (e && dirname(e) === getProjectDir(t)) return t;
  return sn();
}
async function g() {
  await Promise.all([
    withTimeout(o8(), 2000, "debug flush timeout (relaunch)").catch(() => {}),
    withTimeout(flushDiagnostics(), 2000, "diag flush timeout (relaunch)").catch(() => {}),
    withTimeout(jxt(), 2000, "pre-exit flush timeout (relaunch)").catch(() => {}),
    withTimeout(drainRegisteredWriteQueues(), 2000, "write queue drain timeout (relaunch)").catch(() => {}),
  ]);
}
export { recordExitTranscript, recordProcessExitTranscript, handlePromptInputExit, surfaceCancelledContinueNotice, appendCancelledContinueNotice, relaunchWithErrorNotice, persistTranscriptLeafCheckpoint, findLastLoggableMessage, assertLauncherRunnable, relaunchClaudeCode, resolveSessionWorkingDirectory };
