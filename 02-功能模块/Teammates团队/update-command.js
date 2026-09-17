// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { withTimeout } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { ja, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { K, qP, Tz } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { mayHaveRemoteClient } from "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { isBgSession, isDaemonBgWorker, getScreenReaderEnvOverrides } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createSyntheticAssistantTextMessage } from "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import { isTeammate } from "./teammate-context.js";
import { wS } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { getReplBridgeHandle } from "../权限系统/chunk-1y2g140m.js";
import { buildCarriableSessionFlags, collectUncarriableLaunchReasons, buildCarriableRuleFlags, getOwnJobShortId, resolveBridgeHandoffIdentity, buildBridgeReattachEnv } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import { getProjectDir } from "./transcript-paths.js";
import { getMaterializedSessionFile, isTranscriptPersistenceDisabled, flushSessionStorage, getCurrentSessionBridge } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getToolPermissionContext, getSessionEffort } from "../权限系统/chunk-fjrcf22x.js";
import { BG_WORKER_IDENTITY_ENV_VARS } from "../../01-核心基础设施/核心工具-进程与信号/subprocess-env-scrub.js";
import { getLauncherArgv } from "../../01-核心基础设施/核心工具-进程与信号/process-wrapper-launcher.js";
import { resolveWrappedClaudeInvocation, applyProcessWrapper } from "../../01-核心基础设施/共享小工具-未细化/claude-launcher-invocation.js";
import { recordExitTranscript, surfaceCancelledContinueNotice, relaunchWithErrorNotice, persistTranscriptLeafCheckpoint, assertLauncherRunnable, resolveSessionWorkingDirectory } from "../../01-核心基础设施/核心工具-进程与信号/session-relaunch.js";
import { isBgExitHandoffEnabled, hasCarriedCommentMonitor, classifyBackgroundActivity } from "../后台任务-Shell管理/background-task-inventory.js";
import { spawn } from "child_process";
import { realpath } from "fs/promises";
import { homedir } from "os";
import { basename, join as D } from "path";
async function resolveLauncher() {
  let d = await ja("claude"),
    t = getLauncherArgv()[0],
    [o, c] = await Promise.all([
      d ? realpath(d).catch(() => d) : null,
      t ? realpath(t).catch(() => t) : null,
    ]);
  if (d && (c === null || o !== c))
    return applyProcessWrapper({ cmd: d, prefixArgs: [], target: d });
  return resolveWrappedClaudeInvocation();
}
var runUpdateCommand = async (d, t) => {
  let o = isBgSession() ? a.CLAUDE_JOB_DIR : void 0;
  if (isBgSession() && (!isDaemonBgWorker() || !o)) {
    logEvent("tengu_update_refused", { bg_session: !0 });
    let e = isDaemonBgWorker() ? null : getOwnJobShortId();
    return {
      type: "text",
      value: e
        ? `This is a background session \u2014 press \u2190 to detach, then run \`claude respawn ${e}\` to restart it on the latest build.`
        : "This is a background session \u2014 press \u2190 to detach, then run `claude respawn <id>` to restart it on the latest build (the id is in the agents view).",
    };
  }
  let c = () => hasCarriedCommentMonitor(t.taskRegistry.all());
  if (!o) {
    let e = getMaterializedSessionFile(),
      r = D(getProjectDir(resolveSessionWorkingDirectory()), `${K()}.jsonl`);
    if (e && e !== r) {
      let u = c();
      return (
        logEvent("tengu_update_refused", {
          transcript_path_drift: !0,
          comment_monitor: u,
        }),
        {
          type: "text",
          value: `Cannot /update \u2014 this session was resumed from a different project directory. Restart manually with --resume to continue on the latest version${u ? " (restarting stops the auto-replies to artifact comments)" : ""}.`,
        }
      );
    }
  }
  let g = (e) => {
      let r = classifyBackgroundActivity(t.taskRegistry.all(), {
        autoRepliesCarried: o !== void 0 && isBgExitHandoffEnabled(),
      });
      if (r === void 0) return;
      return (
        logEvent("tengu_update_refused", {
          active_tasks: r.activeTasks,
          comment_monitor: r.kind === "comment_monitor",
          ...(e && { deferred: e }),
        }),
        r.kind === "comment_monitor"
          ? "Can't restart while auto-replying to artifact comments \u2014 restarting would stop the replies. Stop the artifact comment monitor via /tasks (or ask Claude to stop it), then try again."
          : "Can't restart while work is running in the background \u2014 wait for it to finish (or stop it via /tasks), then try again."
      );
    },
    w = (e) => {
      let r = collectUncarriableLaunchReasons(getToolPermissionContext(t), qP());
      if (r.length === 0) return g(e);
      let u = c();
      logEvent("tengu_update_refused", { uncarriable: !0, comment_monitor: u });
      let p = isTranscriptPersistenceDisabled() ? "" : " (add --continue to return to this conversation)";
      return `Can't switch to the new version from inside this session \u2014 it has restrictions a restart can't carry over (${r.join("; ")}). Nothing was changed; exit and start claude again for the new version${p}.${u ? " Exiting also stops the auto-replies to artifact comments until the next publish." : ""}`;
    },
    y = o ? g() : w();
  if (y !== void 0) return { type: "text", value: y };
  if (o) {
    let e = basename(o);
    if (
      (await persistTranscriptLeafCheckpoint(t.messages, t.storageV5),
      !(await withTimeout(flushSessionStorage(), 30000, "session flush").then(
        () => !0,
        () => !1,
      )))
    )
      return (
        logEvent("tengu_update_refused", { bg_flush_failed: !0 }),
        {
          type: "text",
          value:
            "Couldn't save the session to disk, so nothing was restarted \u2014 try /restart again in a moment.",
        }
      );
    let u = await resolveLauncher(),
      p = g(!0);
    if (p !== void 0) return { type: "text", value: p };
    let f = { ...process.env };
    for (let s of BG_WORKER_IDENTITY_ENV_VARS) delete f[s];
    delete f.CLAUDE_JOB_DIR;
    for (let s of Object.keys(f)) if (s.startsWith("CLAUDE_BG_")) delete f[s];
    logEvent("tengu_update_bg_respawn", {
      carried_comment_monitor: isBgExitHandoffEnabled() && hasCarriedCommentMonitor(t.taskRegistry.all()),
    });
    try {
      let s = spawn(u.cmd, [...u.prefixArgs, "respawn", e], {
        detached: !0,
        stdio: "ignore",
        windowsHide: !0,
        env: f,
        cwd: homedir(),
      });
      (wS(s.pid),
        s.on("error", (P) => {
          logError(P);
        }),
        s.unref());
    } catch (s) {
      return (
        logError(s),
        logEvent("tengu_update_refused", { bg_spawn_failed: !0 }),
        {
          type: "text",
          value: `Couldn't restart automatically \u2014 press \u2190 to detach, then run \`claude respawn ${e}\` to restart it on the latest build.`,
        }
      );
    }
    return {
      type: "text",
      value: `Restarting this session on the latest version\u2026 If it doesn't come back within a minute, run \`claude respawn ${e}\` from a terminal.`,
    };
  }
  await persistTranscriptLeafCheckpoint(t.messages, t.storageV5);
  let _ = w(!0);
  if (_ !== void 0) return { type: "text", value: _ };
  let v = getToolPermissionContext(t),
    A = [...buildCarriableSessionFlags(v, getSessionEffort(t)), ...buildCarriableRuleFlags(v, Tz())],
    b = isTeammate() ? void 0 : t.getAppState().teamContext?.teamName;
  await assertLauncherRunnable();
  let R = w(!0);
  if (R !== void 0) return { type: "text", value: R };
  let n = getReplBridgeHandle(),
    S = n?.bridgeSessionId,
    E = n?.getLastSequenceNum(),
    I = n?.outboundOnly,
    T = n?.sessionGroupingId;
  if (S)
    (t.setAppState((e) =>
      e.replBridgeSkipNextArchive ? e : { ...e, replBridgeSkipNextArchive: !0 },
    ),
      n.writeSdkMessages([
        createSyntheticAssistantTextMessage("Switching to latest Claude Code\u2026 reconnecting", K()),
      ]),
      await withTimeout(n.flush(), 2000, "bridge flush").catch(() => {}),
      await n.teardown({ skipArchive: !0 }));
  let m = {};
  if (b) m.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME = b;
  (Object.assign(m, getScreenReaderEnvOverrides()),
    Object.assign(m, buildBridgeReattachEnv(S, E, I, T, resolveBridgeHandoffIdentity(n, getCurrentSessionBridge())) ?? {}));
  let B = await resolveLauncher(),
    C = await recordExitTranscript(t.messages, "relaunch", {}, t.storageV5);
  try {
    return await relaunchWithErrorNotice(
      C,
      {
        launcher: B,
        freshIfNoTranscript: !0,
        extraArgs: A,
        proactivity: {
          proactivityLevel: t.getProactivityLevel(),
          toolPermissionContext: v,
        },
        env: Object.keys(m).length > 0 ? m : void 0,
        preSpawn: () =>
          process.stdout.write(
            chalk.dim(`
Switching from ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION} to latest\u2026 conversation will continue

`),
          ),
      },
      t.storageV5,
    );
  } catch (e) {
    if (!C) throw e;
    return (
      logError(e),
      {
        type: "text",
        value: mayHaveRemoteClient(t.session)
          ? surfaceCancelledContinueNotice(
              "Couldn't restart Claude Code (detail withheld on this connection).",
              l(e),
            )
          : `Couldn't restart Claude Code \u2014 ${l(e)}.`,
      }
    );
  }
};
export { resolveLauncher, runUpdateCommand };
