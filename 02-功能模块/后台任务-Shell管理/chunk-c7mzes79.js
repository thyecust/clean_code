// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  oo,
  vg,
  arrayFilter as vXt,
  baseIteratee as GP,
  Gt,
  B,
  ze,
  sc,
  he,
  ad,
  kg,
  m8,
  Tje,
  Lrt,
  HL,
  _Yt,
  yYt,
} from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le, li, Xo, BL, RS } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { sleep, withTimeout } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { isValidPathSegment, STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { R, A, Jg } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { RENAME_CONTENTION_ERRNOS, renameWithRetry, writeFileAtomic } from "../../01-核心基础设施/安全文件系统(FS加固)/atomic-file-write.js";
import { We, Et, dv, b, z, WP, Wur, Xg, Sh, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { lr, le, Zt, Io, cr, nt, Cu, ru, Rmr } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { OP, yi, zl, r8t, ts, fke, Oa, hasPolicySettingsNotified } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getJobDir, getOwnJobShortId, listJobs, IDLE_NEEDS, terminalOutcome, isSettled, isSelfDriving } from "./chunk-7wsy8vxb.js";
import { Nt } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import {
  pi,
  Mr,
  db,
  pb,
  JN,
  Jh,
  isActingAsBgJob,
  getBgJobDir,
  pge,
  eu,
  QUe,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { captureProcessStartTimeAsync } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { ot } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { O_NOFOLLOW_NONBLOCK_FLAGS } from "../../01-核心基础设施/共享小工具-未细化/open-flags.js";
import { v7t } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { getSettingsForSource, getInitialSettings, getSettings_DEPRECATED, isAdminPolicyUnreadable } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { iA } from "../权限系统/chunk-t3b7pg2x.js";
import { getProjectsDir, getProjectKeyFromDir, getSessionSubagentsDir, getAgentTranscriptPath } from "../Teammates团队/transcript-paths.js";
import { iP, OG, rEt, tme, Oc, $d, bR, ZYe, iEt } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { updateHooksConfigSnapshot } from "../Skills技能/chunk-sapykxw7.js";
import { createDefaultToolPermissionContext } from "../权限系统/chunk-qdy0h5k2.js";
import { userAbortReason } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { cG, $k, evictTaskOutput } from "./chunk-x3txegas.js";
import {
  K$t,
  T2,
  A2,
  qGn,
  rmt,
  v4e,
  FF,
  kl,
  tVe,
  lTe,
  syncPermissionRulesFromDisk,
  bp,
  td,
  u3,
  o2t,
  _a,
  nr,
  ght,
  lw,
  Kp,
  $Kn,
  Xp,
  Yv,
  a$,
  Qf,
  cEe,
  P6t,
  XKe,
  L6t,
  addDirsAreLauncherNamed,
  isAutoModeDisabledByPolicySettings,
  createDisabledBypassPermissionsContext,
  isAutoModeInUse,
  createDisabledAutoModeContext,
  transitionPlanAutoMode,
  Ws,
  suppressedConnectorsEqual,
  mcpDialBlockCause,
  isMcpServerDisabled,
  flushSessionStorage,
  clearCommandMemoizationCaches,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getMcpServerConfigCacheKey } from "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import { isExiting } from "../../01-核心基础设施/共享小工具-未细化/exit-commit-state.js";
import { ComputerUseMcpStateStore, ComputerUseLockOwnerContext } from "../图片-截图-ComputerUse/computer-use-lock.js";
import { $h, $fe, ne } from "../Artifact发布-渲染/chunk-rr78st95.js";
import { DYn, hw, ONe, FYn, $pe, LNe, X3 } from "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import { pauseWorkflowTask } from "../Workflow编排/chunk-va9cgbfs.js";
import { ize } from "../Artifact发布-渲染/chunk-5gz5xvw9.js";
import { y9e, killIfSameProcess } from "../../01-核心基础设施/共享小工具-未细化/chunk-q8r1ycrr.js";
import {
  EMPTY_ARTIFACT_PLAN_PUBLISH_CONSENT_PATHS,
  EMPTY_ARTIFACT_DB_READ_CONSENT_SLUGS,
  EMPTY_ARTIFACT_DB_READ_HUMAN_CONSENT_SLUGS,
  EMPTY_ARTIFACT_READ_CONSENT_SLUGS,
  EMPTY_ARTIFACT_ASSET_READ_CONSENT_SLUGS,
  EMPTY_ARTIFACT_ASSET_READ_HUMAN_CONSENT_SLUGS,
  EMPTY_ARTIFACT_ASSET_UPLOAD_CONSENT_SLUGS,
  EMPTY_ARTIFACT_ASSET_UPLOAD_HUMAN_CONSENT_SLUGS,
  EMPTY_ARTIFACT_HANDLERS_READ_CONSENT_SLUGS,
  EMPTY_ARTIFACT_HANDLERS_READ_HUMAN_CONSENT_SLUGS,
  EMPTY_ARTIFACT_HANDLERS_WRITE_CONSENT_SLUGS,
  EMPTY_ARTIFACT_HANDLERS_WRITE_HUMAN_CONSENT_SLUGS,
  EMPTY_ARTIFACT_ROOM_JOIN_CONSENT_SLUGS,
} from "../../01-核心基础设施/共享小工具-未细化/empty-artifact-consent-slugs.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { AppStateContext, AppStateSessionContext, McpConnectionsContext, ActivePluginsContext } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { useClock } from "../../01-核心基础设施/共享小工具-未细化/use-clock.js";
import { NotificationProvider } from "../../03-入口与运行时/会话UI(REPL)/notification-queue.js";
import { StorageV5ContextProvider, useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { r7, KB, U0e, XB, p4 } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { ga } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { sessionServicesFor } from "../认证-OAuth登录/credentials-store.js";
import { buildInkKeyEvent, createKeyHandlerRegistry, KeybindingProvider, useKeybindingContext } from "../键位绑定(Keybindings)/keybinding-context.js";
import { SessionProvider, useSession } from "../../01-核心基础设施/共享小工具-未细化/session-context.js";
import { CommandQueueProvider } from "../../01-核心基础设施/共享小工具-未细化/command-queue-context.js";
import { xh } from "../MCP客户端/chunk-g4gdwpa0.js";
import { createSpinnerStore, SpinnerStoreContext } from "../Hooks钩子/spinner-store.js";
import { isRecent } from "../../01-核心基础设施/共享小工具-未细化/recent-window.js";
import { TasksV2Store, TasksV2StoreContext } from "../工具TodoWrite-Tasks/tasks-v2-store.js";
import { worktreeStateStore } from "../../01-核心基础设施/共享小工具-未细化/worktree-state-store.js";
import { VoiceProvider } from "../../01-核心基础设施/共享小工具-未细化/voice-state-provider.js";
import { N, e } from "../../00-第三方库/react/react.kwtapczy.js";
import { isAwaySummaryEnabled } from "../权限系统/ccr-recap.js";
import { isTaskAdoptionEnabled, summarizeBackgroundTasks } from "./background-task-inventory.js";
import { PluginStateStore } from "../插件系统/plugin-state-store.js";
import { getBlockedServerErrorFields } from "../MCP客户端/mcp-server-state-messages.js";
import { getWorkflowTranscriptDir } from "../Workflow编排/workflow-snapshots.js";
import { getAutoReactWiredSlugs, getBootingAutoReactArmSlugs, disposeSupervisors, MAX_UNATTENDED_REPLIES, drainUnattendedReplies } from "../../01-核心基础设施/共享小工具-未细化/auto-react-state.js";
import { Qt, re, De, E, vr, dn, V, C, d, At, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { asMcpSdkClient } from "../../01-核心基础设施/共享小工具-未细化/chunk-1ftn6vfs.js";
import { createFieldAccessor, createStore } from "../../01-核心基础设施/共享小工具-未细化/state-store.js";
import { isBypassPermissionsModeDisabled } from "../权限系统/chunk-pcxn6gwz.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
var Tr = 120000,
  Rr = 1800000,
  Pr = 1e4;
function Cr(t) {
  return !zo(t) && t.tempo === "blocked" && t.needs !== IDLE_NEEDS;
}
function zo(t) {
  return isSettled(t) && !(terminalOutcome(t.state) === "success" && isSelfDriving(t));
}
class FleetNudgeStore {
  #e;
  #f;
  #s = void 0;
  #m = Le();
  #d = 0;
  #a = !1;
  #c = !0;
  #t = null;
  #o = null;
  #l = !1;
  #n = 0;
  #r = null;
  #g;
  constructor(t) {
    ((this.#e = t?.sweepMs ?? Pr), (this.#f = t?.ignoredAfterMs ?? Rr));
    let o = t?.storageV5;
    this.#g = () => listJobs(void 0, o);
  }
  getSnapshot = () => this.#s;
  subscribe = (t) => {
    let o = this.#m.subscribe(t);
    if ((this.#d++, !this.#a))
      if (((this.#a = !0), this.#s === void 0)) this.#i();
      else
        ((this.#t = setTimeout(() => void this.#i(), this.#e)),
          this.#t.unref());
    let r = !1;
    return () => {
      if (r) return;
      if (((r = !0), o(), this.#d--, this.#d === 0)) this.#y();
    };
  };
  refetch = () => this.#i();
  async quiesce() {
    while (this.#o) await this.#o;
  }
  setFocused(t) {
    if (t === this.#c) return;
    if (((this.#c = t), !this.#a)) return;
    if (t) this.#i();
    else this.#u();
  }
  recordOpenViaLeft() {
    if ((this.#p(), this.#n > 0 && Date.now() - this.#n <= Tr))
      (logFeatureOk("fleet_needs_input_nudge"), (this.#n = 0));
    return this.#s;
  }
  #i() {
    if ((this.#u(), this.#o)) return ((this.#l = !0), this.#o);
    return (
      (this.#o = this.#h().finally(() => {
        if (((this.#o = null), this.#l)) ((this.#l = !1), this.#i());
      })),
      this.#o
    );
  }
  async #h() {
    let t;
    try {
      t = await this.#g();
    } catch {
      t = [];
    }
    if (!this.#a) return;
    let o = 0,
      r = 0,
      s = 0,
      l = 0,
      k = getOwnJobShortId();
    for (let v of t) {
      if (v.id === k) continue;
      if (zo(v.state)) {
        if ((r++, terminalOutcome(v.state.state) === "success")) s++;
        continue;
      }
      if ((l++, Cr(v.state))) o++;
    }
    if (o === 0) (this.#p(), (this.#n = 0));
    let c = this.#s;
    if (c?.needsInput !== o || c?.done !== r || c?.succeeded !== s) {
      let v = c !== void 0 && o > c.needsInput;
      if (
        ((this.#s = { needsInput: o, done: r, succeeded: s }),
        logEvent("tengu_fleet_nudge_state", {
          needs_input_count: o,
          done_count: r,
          succeeded_count: s,
          increased: v,
        }),
        v)
      )
        ((this.#n = Date.now()), this.#S());
      this.#m.emit();
    }
    if (l > 0 && this.#c)
      ((this.#t = setTimeout(() => void this.#i(), this.#e)), this.#t.unref());
  }
  #S() {
    (this.#p(),
      (this.#r = setTimeout(() => {
        ((this.#r = null),
          logFeatureSad("fleet_needs_input_nudge", "ignored"),
          (this.#n = 0));
      }, this.#f)),
      this.#r.unref());
  }
  #u() {
    if (this.#t) (clearTimeout(this.#t), (this.#t = null));
  }
  #p() {
    if (this.#r) (clearTimeout(this.#r), (this.#r = null));
  }
  #y() {
    (this.#u(), (this.#l = !1), (this.#a = !1));
  }
}
function ensureFleetNudgeStore(t, o) {
  return ((t.fleetNudgeStore ??= new FleetNudgeStore({ storageV5: o })), t.fleetNudgeStore);
}
var FleetNudgeStoreContext = Qt(null);
function useFleetNudgeStore() {
  let t = De(FleetNudgeStoreContext);
  if (!t)
    throw ReferenceError(
      "useFleetNudgeStore cannot be called outside of a FleetNudgeStoreContext provider (mounted by <AppStateProvider />)",
    );
  return t;
}
import { createHash, randomBytes } from "crypto";
import { constants } from "fs";
import {
  copyFile,
  link as on,
  mkdir,
  readdir,
  readFile,
  realpath,
  rm as Er,
  rmdir,
  stat as rn,
  symlink,
  unlink,
  lstat,
  readlink,
  open as dt,
} from "fs/promises";
import {
  basename,
  dirname,
  isAbsolute,
  join as Ae,
  relative,
  sep as Jt,
} from "path";
var STALE_THRESHOLD_MS = 120000,
  CLOCK_SKEW_ALLOWANCE_MS = 60000,
  TAKEOVER_ADOPT_WAIT_MS = 4000,
  Ir = 250,
  ct = /^[\w-]+$/;
function kt(t) {
  return le().transform((o, r) => {
    let s = (w) => (r.addIssue({ code: lr.custom, message: w }), Rmr);
    if (BL(o)) return s(`adopt path is remote UNC: ${o}`);
    let l = Xg(Sh, o);
    if (l !== void 0)
      return s(`adopt path traverses symlink/junction to remote UNC: ${l}`);
    let k = RS(o);
    if (k === null) return s(`adopt path unresolvable: ${o}`);
    let c = [...t(), ...[]].map(RS).filter((w) => w !== null);
    if (c.length === 0) return s("adopt path roots unresolvable");
    if (
      !c.some((w) => {
        let T = relative(w, k);
        return T === "" || (!T.startsWith("..") && !isAbsolute(T));
      })
    )
      return s(`adopt path outside allowed roots: ${k}`);
    return k;
  });
}
function Fr() {
  return [bR()];
}
function cn(t) {
  return nt({
    taskId: le().regex(ct),
    pid: Zt().int().positive(),
    procStart: le().optional(),
    startTimeTicks: Zt().int().optional(),
    command: le(),
    description: le(),
    outputPath: kt(t),
    lastReportedTotalLines: Zt().int(),
    toolUseId: le().optional(),
    kind: ru(["bash", "monitor"]).optional(),
    agentId: le().regex(ct).optional(),
  });
}
var Lr = createLazyValue(() => cn(Fr)),
  Or = createLazyValue(() =>
    nt({
      id: le(),
      cron: le(),
      prompt: le(),
      createdAt: Zt(),
      recurring: Io().optional(),
      agentId: le().optional(),
      kind: Cu("loop").optional(),
      scheduledFor: Zt().optional(),
      reason: le().optional(),
      keepalive: Cu(!0).optional(),
    }),
  ),
  Nr = createLazyValue(() =>
    nt({
      taskId: le().regex(ct),
      workflowRunId: le().regex(/^wf_[a-z0-9-]{6,}$/),
      scriptPath: le(),
      scriptSha256: le()
        .regex(/^[0-9a-f]{64}$/)
        .optional(),
      argsJson: le().optional(),
      description: le(),
      startTime: Zt().optional(),
      transcriptDir: kt(() => [getProjectsDir()]),
    }),
  ),
  Br = createLazyValue(() =>
    nt({
      agentId: le().regex(ct),
      agentType: le().optional(),
      description: le().optional(),
      toolUseId: le().optional(),
      spawnDepth: Zt().int().optional(),
      startTime: Zt().optional(),
      transcriptPath: kt(() => [getProjectsDir()]).optional(),
      parentAgentId: le().regex(ct).optional(),
      forkedSkillName: le().min(1).max(256).optional(),
    }),
  ),
  jr = createLazyValue(() =>
    nt({
      slug: le().uuid(),
      title: le().min(1).max(256).optional(),
      writtenAtMs: Zt().finite().optional(),
      unattendedReplies: Zt().int().min(0).max(MAX_UNATTENDED_REPLIES).optional(),
    }),
  );
function un(t = Lr()) {
  return nt({
    writtenAtMs: Zt(),
    origin: ru(["background", "exit"]).optional(),
    shells: cr(t),
    cron: cr(Or()),
    loopWakeFires: Zt().int().nonnegative().optional(),
    agents: cr(Br()).optional(),
    workflows: cr(Nr()).optional(),
    frameLive: cr(jr()).optional(),
    prefill: nt({ text: le(), boundaryUuid: le().optional() }).optional(),
  });
}
var pn = createLazyValue(() => un());
function fn(t) {
  let o = Array.isArray(t) ? t : [t];
  return un(cn(() => [bR(), ...o]));
}
var Yt = 67108864;
async function detachAndSerializeShell(t, o) {
  let r = t.shellCommand?.detach?.();
  if (r === void 0) return null;
  let s = t.shellCommand.taskOutput.path,
    l = o?.rerootOutputsTo;
  if (l !== void 0) {
    let k = async (v) => {
        n(`[adopt] dropping shell ${t.id} from the handoff (${v})`, {
          level: "error",
        });
        try {
          await t.shellCommand?.kill?.();
        } catch {}
        return null;
      },
      c = !1;
    try {
      if (Xo(s) || li(s)) throw Error("network-spelled output path");
      if (Xg(Sh, s) !== void 0)
        throw Error("output path traverses a junction to remote UNC");
      if ((await lstat(s)).isSymbolicLink()) {
        let D = await readlink(s);
        if (Xo(D) || li(D)) throw Error("network-spelled symlink target");
        let O = isAbsolute(D) ? D : Ae(dirname(s), D);
        if (Xo(O) || li(O)) throw Error("network-spelled symlink hop");
        if (Xg(Sh, O) !== void 0)
          throw Error("symlink target traverses a junction to remote UNC");
        if ((await lstat(O)).isSymbolicLink())
          throw Error("multi-hop symlink chain");
      }
      let w = await realpath(s),
        T = await lstat(w);
      c = !0;
      let L = await realpath(l).catch(() => l);
      if (!w.startsWith(L + Jt)) {
        if (
          !(
            await Promise.all([$d(), ...[]].map((x) => realpath(x).catch(() => null)))
          )
            .filter((x) => x !== null)
            .some((x) => w.startsWith(x + Jt))
        )
          return await k("its output resolves outside the task-output tree");
        let U = Ae(l, "rerooted", `${t.id}.output`),
          H;
        try {
          H = await $k(U, [U], { createParents: !0, leaf: "replace" });
        } catch {
          return await k("reroot directory not trustworthy");
        }
        let W = H.ioPath;
        try {
          if (!T.isFile()) return await k("gate target is not a regular file");
          if (T.nlink !== 1) return await k("gate target has another name");
          let x = await dt(
            w,
            getCurrentPlatform() === "windows" ? "r" : constants.O_RDONLY | (constants.O_NONBLOCK ?? 0) | O_NOFOLLOW_NONBLOCK_FLAGS,
          );
          try {
            let I = await x.stat();
            if (
              !I.isFile() ||
              I.nlink !== 1 ||
              I.dev !== T.dev ||
              I.ino !== T.ino
            )
              return await k("handle identity mismatch");
            {
              if (
                (await H.recheckBeforeWrite(),
                await unlink(W).catch(() => {}),
                I.size > Yt)
              )
                return await k("over-cap escaping output");
              let j;
              try {
                (await H.recheckBeforeWrite(),
                  (j =
                    getCurrentPlatform() === "windows"
                      ? await dt(W, "wx")
                      : await cG(
                          W,
                          constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | constants.O_NOFOLLOW,
                          getCurrentPlatform(),
                        )));
              } catch {
                return await k("reroot destination not creatable");
              }
              try {
                let q = 0,
                  J = Buffer.allocUnsafe(65536);
                while (q < Yt) {
                  let { bytesRead: K } = await x.read(
                    J,
                    0,
                    Math.min(J.length, Yt - q),
                    q,
                  );
                  if (K === 0) break;
                  let Y = 0;
                  while (Y < K) {
                    let { bytesWritten: X } = await j.write(J, Y, K - Y);
                    Y += X;
                  }
                  q += K;
                }
              } finally {
                await j.close();
              }
              s = U;
            }
          } finally {
            await x.close();
          }
        } finally {
          await H.close();
        }
      }
    } catch {
      if (c) return await k("reroot failed after the gate");
    }
  }
  return {
    taskId: t.id,
    pid: r,
    procStart: await captureProcessStartTimeAsync(r),
    startTimeTicks: (await y9e(r)) ?? void 0,
    command: t.command,
    description: t.description,
    outputPath: s,
    lastReportedTotalLines: t.lastReportedTotalLines,
    toolUseId: t.toolUseId,
    kind: t.kind,
    agentId: t.agentId,
  };
}
async function serializeAdoptAgent(t, o = {}) {
  let r = o.derivedTranscriptPath ?? getAgentTranscriptPath(oo(t.agentId));
  return {
    agentId: t.agentId,
    agentType: t.agentType,
    description: t.description,
    toolUseId: t.toolUseId,
    spawnDepth: t.spawnDepth,
    startTime: t.startTime,
    transcriptPath: await realpath(r).catch(() => {
      return;
    }),
    parentAgentId: t.parentAgentId,
    forkedSkillName: t.forkedSkillName,
  };
}
async function serializeAdoptWorkflow(t, o = {}) {
  let r = o.derivedTranscriptDir ?? getWorkflowTranscriptDir(t.workflowRunId);
  return {
    taskId: t.id,
    workflowRunId: t.workflowRunId,
    scriptPath: t.scriptPath,
    scriptSha256: t.script
      ? createHash("sha256").update(t.script).digest("hex")
      : void 0,
    argsJson: t.args !== void 0 ? b(t.args) : void 0,
    description: t.description,
    startTime: t.startTime,
    transcriptDir: await realpath(r).catch(() => r),
  };
}
function isCarriedFrameLiveWatch(t) {
  return isTaskAdoptionEnabled() && a$(t) && t.frameLive !== void 0;
}
function carriedFrameLiveSlugs(t) {
  let o = new Set();
  if (!isTaskAdoptionEnabled()) return o;
  for (let r of Object.values(t))
    if (isCarriedFrameLiveWatch(r) && r.frameLive !== void 0) o.add(r.frameLive.slug);
  for (let r of getAutoReactWiredSlugs()) o.add(r);
  for (let r of getBootingAutoReactArmSlugs()) o.add(r);
  return o;
}
function collectFrameLiveConsent(t) {
  let { supervisors: o, bootingWiredArms: r } = ne().live,
    s = getBootingAutoReactArmSlugs(),
    l = [],
    k = Date.now();
  for (let c of carriedFrameLiveSlugs(t)) {
    let v = o.get(c),
      w = s.has(c) ? r.get(c) : void 0;
    if (v === void 0 && w === void 0) continue;
    let T = w?.title ?? v?.autoReactWiring?.title,
      L = T !== void 0 && T.length >= 1 && T.length <= 256;
    l.push({ slug: c, writtenAtMs: k, ...(L && { title: T }) });
  }
  return l;
}
async function serializeAdoptable(t, o) {
  let r = computeAdoptability(t),
    s = Object.values(t).filter((x) => isAdoptableShellTask(x, r)),
    l = Object.values(t).filter((x) => isAdoptableAgentTask(x, r)),
    k = Object.values(t).filter((x) => isAdoptableWorkflowTask(x, r)),
    c = kg().filter((x) => isAdoptableCron(x, r));
  if (
    s.length === 0 &&
    l.length === 0 &&
    k.length === 0 &&
    c.length === 0 &&
    collectFrameLiveConsent(t).length === 0
  )
    return null;
  let v = (
      await Promise.all(s.map((x) => detachAndSerializeShell(x, { rerootOutputsTo: bR() })))
    ).filter((x) => x !== null),
    w = await Promise.all(l.map((x) => serializeAdoptAgent(x))),
    T = await Promise.all(k.map((x) => serializeAdoptWorkflow(x))),
    L = collectFrameLiveConsent(t),
    D = new Set(L.map((x) => x.slug)),
    O = Object.values(t)
      .filter((x) => isCarriedFrameLiveWatch(x) && x.frameLive !== void 0 && D.has(x.frameLive.slug))
      .map((x) => x.id);
  if (
    v.length === 0 &&
    w.length === 0 &&
    T.length === 0 &&
    c.length === 0 &&
    L.length === 0
  )
    return null;
  let U = !1,
    H = !1,
    W = (x) => {
      if (H) return;
      ((H = !0), ize(D), disposeSupervisors(D));
      let I = new Set(O);
      if (D.size > 0) {
        for (let j of Object.values(x.all()))
          if (
            Yv(j) &&
            j.status === "running" &&
            j.frameLive !== void 0 &&
            D.has(j.frameLive.slug)
          )
            I.add(j.id);
      }
      for (let j of I) Qf(j, x, { quiet: !0 });
    };
  return {
    payload: {
      writtenAtMs: Date.now(),
      shells: v,
      cron: c.map((x) => ({
        id: x.id,
        cron: x.cron,
        prompt: x.prompt,
        createdAt: x.createdAt,
        recurring: x.recurring,
        agentId: x.agentId,
        kind: x.kind,
        scheduledFor: x.scheduledFor,
        reason: x.reason,
        keepalive: x.keepalive,
      })),
      ...(Tje() > 0 && { loopWakeFires: Tje() }),
      agents: w,
      workflows: T,
      ...(L.length > 0 && { frameLive: L }),
    },
    checkpointAgents: async (x) => {
      for (let I of k)
        (I.abortController?.abort(userAbortReason("background")), pauseWorkflowTask(I.id, x));
      if (w.length === 0) return;
      for (let I of v) if (I.agentId !== void 0) x.remove(I.taskId);
      for (let I of l) I.abortController.abort(userAbortReason("background"));
      (await OP(),
        await flushSessionStorage().catch((I) => {
          (logFeatureSad("task_local_agent", "adopt_checkpoint_flush_failed"),
            n(`[adopt] checkpoint flush: ${I}`, { level: "warn" }));
        }));
    },
    stopCarriedWatches: W,
    disown: (x) => {
      W(x);
      for (let I of v) x.remove(I.taskId);
      for (let I of w) x.remove(I.agentId);
      for (let I of T) x.remove(I.taskId);
      if (c.length > 0) HL(c.map((I) => I.id));
    },
    abandon: () => {
      if (U) return;
      U = !0;
      for (let x of s)
        try {
          x.shellCommand?.kill();
        } catch (I) {
          n(`[adopt] abandon ${x.id}: ${I}`, { level: "warn" });
        }
      for (let x of l) {
        let I = `Background agent "${Nt(x.description)}" was checkpointed for the background fork but the fork failed to spawn; the agent was not resumed.`;
        lt(x.agentId, I, o);
      }
      if (l.length > 0) logFeatureSad("task_local_agent", "adopt_spawn_failed");
      for (let x of k) {
        let I = `Background workflow "${Nt(x.description)}" was checkpointed for the background fork but the fork failed to spawn; it was not resumed. To resume manually: Workflow({scriptPath: '${Nt(x.scriptPath ?? "")}', resumeFromRunId: '${Nt(x.workflowRunId ?? "")}'}).`;
        lt(x.id, I, o);
      }
      if (k.length > 0) logFeatureSad("task_local_workflow", "adopt_spawn_failed");
      if (H) {
        for (let x of O)
          lt(
            x,
            "The background session didn't start, so automatic replies to Artifact comments stopped. Publish the Artifact again to turn them back on.",
            o,
          );
        if (L.length > 0) logFeatureSad("artifact_live_subscribe", "adopt_spawn_failed");
      }
    },
  };
}
function dedupFrameLiveNewest(t) {
  let o = new Map();
  for (let r of t)
    for (let s of r.entries) {
      let l = { ...s, writtenAtMs: s.writtenAtMs ?? r.fallbackBasis },
        k = o.get(s.slug),
        c = Math.min(
          (k?.unattendedReplies ?? 0) + (s.unattendedReplies ?? 0),
          MAX_UNATTENDED_REPLIES,
        ),
        v = k === void 0 || l.writtenAtMs > (k.writtenAtMs ?? 0) ? l : k;
      o.set(s.slug, c > 0 ? { ...v, unattendedReplies: c } : v);
    }
  if (o.size > $h) logFeatureSad("artifact_live_subscribe", "merged_consent_capped");
  return [...o.values()]
    .sort((r, s) => (s.writtenAtMs ?? 0) - (r.writtenAtMs ?? 0))
    .slice(0, $fe);
}
function Wr(t, o) {
  let r = (s, l, k) =>
    [...s, ...l].filter((c, v, w) => w.findIndex((T) => k(T) === k(c)) === v);
  return {
    writtenAtMs: o.writtenAtMs,
    origin: o.origin ?? t.origin,
    shells: r(t.shells, o.shells, (s) => s.pid),
    cron: r(t.cron, o.cron, (s) => s.id),
    ...((o.loopWakeFires ?? t.loopWakeFires) !== void 0 && {
      loopWakeFires: o.loopWakeFires ?? t.loopWakeFires,
    }),
    agents: r(t.agents ?? [], o.agents ?? [], (s) => s.agentId),
    workflows: r(t.workflows ?? [], o.workflows ?? [], (s) => s.taskId),
    ...(((t.frameLive?.length ?? 0) > 0 || (o.frameLive?.length ?? 0) > 0) && {
      frameLive: dedupFrameLiveNewest([
        { entries: t.frameLive ?? [], fallbackBasis: t.writtenAtMs },
        { entries: o.frameLive ?? [], fallbackBasis: o.writtenAtMs },
      ]),
    }),
    prefill: o.prefill ?? t.prefill,
  };
}
async function Ur(t, o) {
  let r = await t.read([STORAGE_KEYS.job(o, ["adopt.json"])]);
  if (!r.ok) return (n(`[adopt] v5 merge read refused: ${We(r.error)}`), null);
  let s = r.value.items[0];
  if (!s.found) return null;
  return Buffer.from(s.value).toString("utf8");
}
async function writeAdoptJson(t, o, r = {}, s) {
  let l = Ae(t, "adopt.json"),
    k = basename(t),
    c = isHoverRestEnabled() && s !== void 0 && isValidPathSegment(k) && t === getJobDir(k) ? s : void 0,
    v = o;
  try {
    let w = c ? await Ur(c, k) : await readFile(l, "utf-8");
    if (w !== null && w.length <= 1e6) {
      let L = (
        r.mergeShellOutputRoot !== void 0 ? fn(r.mergeShellOutputRoot) : pn()
      ).safeParse(z(w));
      if (L.success) {
        if (
          L.data.shells.length +
            (L.data.cron?.length ?? 0) +
            (L.data.agents?.length ?? 0) +
            (L.data.workflows?.length ?? 0) +
            (L.data.frameLive?.length ?? 0) <=
          256
        )
          v = Wr(L.data, o);
      }
    }
  } catch {}
  if (c) {
    let w = await c.write(STORAGE_KEYS.job(k, ["adopt.json"]), b(v), {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask(),
      parent: r.parent ?? "mustExist",
    });
    if (!w.ok)
      throw Object.assign(
        new R(
          `adopt.json v5 write failed: ${We(w.error)}`,
          "adopt.json v5 write failed",
        ),
        "telemetryCode" in w.error && w.error.telemetryCode !== void 0
          ? { code: w.error.telemetryCode }
          : {},
      );
    return;
  }
  await writeFileAtomic(l, b(v));
}
async function readAndConsumeAdoptJson(t, o = {}) {
  if (!t) return null;
  let r = Ae(t, "adopt.json"),
    s = `${r}.${process.pid}`,
    l = Date.now() + (o.waitMs ?? 0),
    k = !1;
  for (;;)
    try {
      k = await renameWithRetry(r, s);
      break;
    } catch (w) {
      let T = A(w);
      if (T === "ENOENT") {
        if (Date.now() < l) {
          await sleep(Ir);
          continue;
        }
        return (logEvent("tengu_adopt_claim", { result: S("enoent") }), null);
      }
      return (
        n(`[adopt] rename failed: ${w}`, { level: "warn" }),
        logEvent("tengu_adopt_claim", {
          result: T !== void 0 && RENAME_CONTENTION_ERRNOS.has(T) ? S("ebusy_gave_up") : Jg(w),
        }),
        null
      );
    }
  let c = Date.now(),
    v = k ? S("ebusy_retry") : S("ok");
  try {
    let w = await readFile(s, "utf-8"),
      L = (
        o.extraShellOutputRoot !== void 0 ? fn(o.extraShellOutputRoot) : pn()
      ).safeParse(JSON.parse(w));
    if (!L.success)
      return (
        n(`[adopt] schema rejected: ${L.error.message}`, { level: "warn" }),
        logEvent("tengu_adopt_claim", { result: S("schema_rejected") }),
        null
      );
    let D = c - L.data.writtenAtMs;
    if (L.data.origin !== "exit" && D > STALE_THRESHOLD_MS) {
      n(`[adopt] stale (age ${D}ms)`, { level: "warn" });
      let O = L.data.frameLive ?? [];
      if (O.length === 0)
        return (logEvent("tengu_adopt_claim", { result: S("stale") }), null);
      return (
        logEvent("tengu_adopt_claim", {
          result: S("stale"),
          frame_live_stale: S("true"),
        }),
        logFeatureSad("artifact_live_subscribe", "carried_consent_stale_dropped"),
        {
          writtenAtMs: L.data.writtenAtMs,
          ...(L.data.origin !== void 0 && { origin: L.data.origin }),
          shells: [],
          cron: [],
          frameLive: O.map((U) => ({
            ...U,
            writtenAtMs: U.writtenAtMs ?? L.data.writtenAtMs,
            stale: !0,
          })),
        }
      );
    }
    if ((L.data.frameLive?.length ?? 0) > 0) {
      let O = L.data.frameLive.map((H) => {
          let W = H.writtenAtMs ?? L.data.writtenAtMs,
            x = c - W;
          return x >= -CLOCK_SKEW_ALLOWANCE_MS && x <= STALE_THRESHOLD_MS
            ? { ...H, writtenAtMs: W }
            : { ...H, writtenAtMs: W, stale: !0 };
        }),
        U = countMatching(O, (H) => "stale" in H);
      if (U > 0)
        n(`[adopt] ${U}/${O.length} frameLive entries marked stale`, {
          level: "warn",
        });
      return (
        logEvent("tengu_adopt_claim", {
          result: v,
          ...(U > 0 && { frame_live_stale: S("true") }),
        }),
        Object.assign(L.data, { frameLive: O })
      );
    }
    return (logEvent("tengu_adopt_claim", { result: v }), L.data);
  } catch (w) {
    return (
      n(`[adopt] read/parse failed: ${w}`, { level: "warn" }),
      logEvent("tengu_adopt_claim", { result: S("parse_failed") }),
      null
    );
  } finally {
    await unlink(s).catch(() => {});
  }
}
function recordUnresumedAdopt(t, o, r, s) {
  let l = A2();
  if (o.length === 0 && r.length === 0) {
    l.unresumedAdopt.delete(t);
    return;
  }
  l.unresumedAdopt.set(t, { agents: o, workflows: r, owner: s });
}
function takeUnresumedAdopt(t, o) {
  if (A2().unresumedAdopt.get(t)?.owner !== o)
    return { agents: [], workflows: [] };
  return drainUnresumedAdopt(t);
}
function drainUnresumedAdopt(t) {
  let o = A2(),
    r = o.unresumedAdopt.get(t);
  return (
    o.unresumedAdopt.delete(t),
    { agents: r?.agents ?? [], workflows: r?.workflows ?? [] }
  );
}
function recordUnresumedFrameLive(t, o, r) {
  let s = A2();
  if (o.length === 0) {
    s.unresumedFrameLive.delete(t);
    return;
  }
  s.unresumedFrameLive.set(t, {
    entries: o.map(({ stale: l, ...k }) => k),
    owner: r,
  });
}
function takeUnresumedFrameLive(t, o) {
  if (A2().unresumedFrameLive.get(t)?.owner !== o) return [];
  return drainUnresumedFrameLive(t);
}
function drainUnresumedFrameLive(t) {
  let o = A2(),
    r = o.unresumedFrameLive.get(t);
  return (o.unresumedFrameLive.delete(t), r?.entries ?? []);
}
function reparkUnresumedFrameLive(t, o, r) {
  let s = A2(),
    l = s.unresumedFrameLive.get(t);
  if (o.length === 0 || (l !== void 0 && l.owner !== r)) return;
  s.unresumedFrameLive.set(t, { entries: [...o], owner: r });
}
function releaseReparkedFrameLive(t, o, r) {
  let s = A2(),
    l = s.unresumedFrameLive.get(t);
  if (l === void 0 || l.owner !== r) return;
  let k = l.entries.filter((c) => c.slug !== o);
  if (k.length > 0) s.unresumedFrameLive.set(t, { entries: k, owner: r });
  else s.unresumedFrameLive.delete(t);
}
function recordExitRetryFrameLive(t, o) {
  if (o.length > 0) A2().exitRetryFrameLive.set(t, [...o]);
}
function takeExitRetryFrameLive(t) {
  if (t === void 0) return [];
  let o = A2(),
    r = o.exitRetryFrameLive.get(t) ?? [];
  return (o.exitRetryFrameLive.delete(t), r);
}
var Hr = new Set([
    "EXDEV",
    "EPERM",
    "ENOTSUP",
    "EOPNOTSUPP",
    "ENOSYS",
    "EMLINK",
  ]),
  $r = 1048576,
  mn = ".adopt-relink.";
function Kr(t) {
  return `${t}${mn}${process.pid}.${Date.now()}.${randomBytes(4).toString("hex")}`;
}
async function Gr(t, o, r, s) {
  let l;
  try {
    (await s(t, o), (l = "UNVERIFIED"));
  } catch (c) {
    let v = A(c);
    if (v === void 0 || !Hr.has(v)) throw c;
    l = v;
  }
  if (l === "UNVERIFIED") {
    let c = await lstat(o);
    if (c.isFile() && c.dev === r.dev && c.ino === r.ino)
      return { method: "hardlink", identity: r };
    await unlink(o);
  }
  let k = await Vr(t, o, r);
  return { method: "copy", fallbackCode: l, identity: k };
}
async function Vr(t, o, r) {
  let s = await dt(t, constants.O_RDONLY | O_NOFOLLOW_NONBLOCK_FLAGS);
  try {
    let l = await s.stat();
    if (!l.isFile() || l.dev !== r.dev || l.ino !== r.ino)
      throw Object.assign(
        Error("adopted file copy source is not the validated inode"),
        { code: "ADOPT_IDENTITY_MISMATCH" },
      );
    let k = await dt(o, "wx", v7t),
      c = !1;
    try {
      let v = Buffer.allocUnsafe($r);
      for (;;) {
        let { bytesRead: L } = await s.read(v, 0, v.length, null);
        if (L === 0) break;
        let D = 0;
        while (D < L) {
          let { bytesWritten: O } = await k.write(v, D, L - D);
          if (O === 0)
            throw Object.assign(Error("adopted file copy made no progress"), {
              code: "ADOPT_COPY_STALLED",
            });
          D += O;
        }
      }
      let { dev: w, ino: T } = await k.stat();
      return (
        await k.utimes(l.atime, l.mtime).catch((L) => {
          n(`[adopt] copied file keeps fresh timestamps (${A(L) ?? "error"})`, {
            level: "warn",
          });
        }),
        await k.close(),
        (c = !0),
        { dev: w, ino: T }
      );
    } finally {
      if (!c) (await k.close().catch(() => {}), await unlink(o).catch(() => {}));
    }
  } finally {
    await s.close().catch(() => {});
  }
}
async function zr(t, o, r) {
  let s;
  try {
    s = await lstat(o);
  } catch (l) {
    if (A(l) !== "ENOENT") throw l;
  }
  if (s !== void 0 && !s.isSymbolicLink()) {
    if (!s.isFile())
      throw Object.assign(
        Error("adopted agent name is held by a non-file entry"),
        { code: "ADOPT_NAME_NOT_FILE" },
      );
    if (r) return "kept";
  }
  try {
    await renameWithRetry(t, o);
  } catch (l) {
    if (s === void 0 || A(l) !== "EEXIST") throw l;
    (await unlink(o), await renameWithRetry(t, o));
  }
  return s === void 0 ? "created" : "replaced";
}
async function Xt(t, o, r, s, l) {
  if (l) {
    let L = await lstat(t).catch(() => {
      return;
    });
    if (L !== void 0 && !L.isSymbolicLink() && L.isFile())
      return { method: "kept", created: null };
  }
  let k = Kr(t),
    c = await Gr(o, k, r, s),
    v = "kept";
  try {
    v = await zr(k, t, l);
  } finally {
    await unlink(k).catch(() => {});
  }
  let { identity: w, ...T } = c;
  return v === "kept"
    ? { method: "kept", created: null }
    : { ...T, created: v === "created" ? w : null };
}
async function linkAdoptedAgentTranscript(t, { storageV5: o, linkFn: r = on } = {}) {
  if (o === void 0) return qr(t);
  try {
    let s = await Yr(t, r);
    if (s.method !== void 0)
      logEvent("tengu_adopt_link", {
        kind: S("agent"),
        method: fromEnum(s.method),
        fallback_code: Jg({ code: s.fallbackCode }),
      });
    return s;
  } catch (s) {
    throw (
      logEvent("tengu_adopt_link", {
        kind: S("agent"),
        method: fromEnum("fail"),
        error_code: Jg(s),
      }),
      s
    );
  }
}
async function qr(t) {
  if (!t.transcriptPath) return {};
  let o = getAgentTranscriptPath(oo(t.agentId)),
    r = (c) => c.replace(/\.jsonl$/, ".meta.json");
  await rn(r(t.transcriptPath));
  let s = null,
    l,
    k = cEe(t.transcriptPath);
  if (t.forkedSkillName !== void 0) {
    let c = await XKe(k);
    if (c.status !== "valid")
      throw new R(
        `adopted agent ${t.agentId} declares forked-skill ${t.forkedSkillName} but its scoping record is unusable (${c.status})`,
        "adopted forked-skill scoping record unusable",
      );
    if (c.scoping.skillName !== t.forkedSkillName)
      throw new R(
        `adopted agent ${t.agentId} declares forked-skill ${t.forkedSkillName} but its scoping record names a different skill`,
        "adopted forked-skill scoping identity mismatch",
      );
    s = { parent: k, fork: cEe(o) };
  } else {
    let c = await XKe(k);
    switch (c.status) {
      case "absent":
        break;
      case "valid":
        ((s = { parent: k, fork: cEe(o) }), (l = c.scoping.skillName));
        break;
      case "malformed":
      case "absent-but-marked":
        throw new R(
          `adopted agent ${t.agentId} has an unusable forked-skill scoping record (${c.status})`,
          "adopted forked-skill scoping record unusable",
        );
    }
  }
  if (o === t.transcriptPath) return { forkedSkillNameFromSidecar: l };
  if (
    (await realpath(o).catch(() => {
      return;
    })) === t.transcriptPath
  )
    return { forkedSkillNameFromSidecar: l };
  if ((await mkdir(dirname(o), { recursive: !0 }), s))
    (await unlink(s.fork.provenanceMarker).catch(() => {}),
      await P6t(s.fork.provenanceMarker, t.forkedSkillName ?? l),
      await unlink(s.fork.scoping).catch(() => {}),
      await copyFile(s.parent.scoping, s.fork.scoping));
  for (let [c, v] of [
    [o, t.transcriptPath],
    [r(o), r(t.transcriptPath)],
  ])
    (await unlink(c).catch(() => {}), await symlink(v, c));
  return { forkedSkillNameFromSidecar: l };
}
function st(t, o) {
  return Object.assign(t, { code: o });
}
async function Yr(t, o) {
  if (!t.transcriptPath) return {};
  let r = getAgentTranscriptPath(oo(t.agentId)),
    s = (W) => W.replace(/\.jsonl$/, ".meta.json");
  if (basename(t.transcriptPath) !== basename(r))
    throw st(
      new R(
        `adopted agent ${t.agentId} carrier names a transcript that is not agent-${t.agentId}.jsonl`,
        "adopted agent transcript path has the wrong leaf name",
      ),
      "ADOPT_WRONG_LEAF",
    );
  let [l, k] = await Promise.all([
    lstat(t.transcriptPath),
    lstat(s(t.transcriptPath)),
  ]);
  if (!l.isFile() || !k.isFile())
    throw st(
      new R(
        `adopted agent ${t.agentId} parent transcript or .meta.json is not a regular file`,
        "adopted agent parent file is not a regular file",
      ),
      "ADOPT_PARENT_NOT_REGULAR",
    );
  let c = null,
    v,
    w = cEe(t.transcriptPath);
  if (t.forkedSkillName !== void 0) {
    let W = await XKe(w);
    if (W.status !== "valid")
      throw st(
        new R(
          `adopted agent ${t.agentId} declares forked-skill ${t.forkedSkillName} but its scoping record is unusable (${W.status})`,
          "adopted forked-skill scoping record unusable",
        ),
        "ADOPT_SCOPING_UNUSABLE",
      );
    if (W.scoping.skillName !== t.forkedSkillName)
      throw st(
        new R(
          `adopted agent ${t.agentId} declares forked-skill ${t.forkedSkillName} but its scoping record names a different skill`,
          "adopted forked-skill scoping identity mismatch",
        ),
        "ADOPT_SCOPING_MISMATCH",
      );
    c = { parent: w, fork: cEe(r) };
  } else {
    let W = await XKe(w);
    switch (W.status) {
      case "absent":
        break;
      case "valid":
        ((c = { parent: w, fork: cEe(r) }), (v = W.scoping.skillName));
        break;
      case "malformed":
      case "absent-but-marked":
        throw st(
          new R(
            `adopted agent ${t.agentId} has an unusable forked-skill scoping record (${W.status})`,
            "adopted forked-skill scoping record unusable",
          ),
          "ADOPT_SCOPING_UNUSABLE",
        );
    }
  }
  if (r === t.transcriptPath)
    return { forkedSkillNameFromSidecar: v, method: "noop" };
  let T = await realpath(dirname(r)).catch(() => {
    return;
  });
  if (T !== void 0 && Ae(T, basename(r)) === t.transcriptPath)
    return { forkedSkillNameFromSidecar: v, method: "noop" };
  if ((await mkdir(dirname(r), { recursive: !0 }), c))
    (await unlink(c.fork.provenanceMarker).catch(() => {}),
      await P6t(c.fork.provenanceMarker, t.forkedSkillName ?? v),
      await unlink(c.fork.scoping).catch(() => {}),
      await copyFile(c.parent.scoping, c.fork.scoping));
  let L = await lstat(r).catch(() => {
      return;
    }),
    D =
      L !== void 0 &&
      (L.isFile() ||
        (L.isSymbolicLink() &&
          (await realpath(r).catch(() => {
            return;
          })) === t.transcriptPath)),
    O = await Xt(s(r), s(t.transcriptPath), k, o, D),
    U;
  try {
    U = await Xt(r, t.transcriptPath, l, o, !0);
  } catch (W) {
    if (O.created !== null) {
      let x = O.created;
      await lstat(s(r))
        .then(async (I) => {
          if (I.dev === x.dev && I.ino === x.ino) await unlink(s(r));
        })
        .catch(() => {});
    }
    throw W;
  }
  let H = U.fallbackCode ?? O.fallbackCode;
  if (H !== void 0) {
    let W = [
      ...(U.method === "copy" ? ["transcript"] : []),
      ...(O.method === "copy" ? ["meta"] : []),
    ].join("+");
    (n(
      `[adopt] agent ${t.agentId}: hard link impossible (${H}) \u2014 materialised a copy of ${W}`,
      { level: "warn" },
    ),
      logFeatureSad("task_local_agent", "adopt_link_fallback_copy"));
  }
  return { forkedSkillNameFromSidecar: v, method: U.method, fallbackCode: H };
}
var Jr = /^agent-[\w-]+\.(?:jsonl|meta\.json)$/,
  Qr = new RegExp(
    "^agent-[\\w-]+\\.(?:jsonl|meta\\.json)" +
      mn.replace(/[.]/g, "\\.") +
      "\\d+\\.(\\d+)\\.[0-9a-f]{8}$",
  ),
  Xr = 900000,
  Zr = 64;
function gn(t, o) {
  let r = relative(t, o);
  if (r === "" || r.startsWith("..") || isAbsolute(r)) return null;
  let s = r.split(Jt);
  if (s.length < 3 || s[2] !== "subagents") return null;
  return { session: Ae(s[0], s[1]), depth: s.length };
}
async function relinkAdoptedAgentSymlinks({ storageV5: t, linkFn: o = on } = {}) {
  if (t === void 0) return;
  try {
    await ei(getSessionSubagentsDir(), o);
  } catch (r) {
    if (A(r) !== void 0) {
      n(`[adopt] relink sweep abandoned: ${r}`, { level: "warn" });
      return;
    }
    logError(r);
  }
}
async function ei(t, o) {
  let r;
  try {
    r = await readdir(t, { withFileTypes: !0 });
  } catch {
    return;
  }
  let s = Date.now(),
    l = [];
  for (let K of r) {
    let Y = Qr.exec(K.name);
    if (Y) {
      if (Math.abs(s - Number(Y[1])) > Xr)
        await unlink(Ae(t, K.name)).catch(() => {});
      continue;
    }
    if (K.isSymbolicLink() && Jr.test(K.name)) l.push(K.name);
  }
  if (l.length === 0) return;
  let k = (K) => K.replace(/\.(?:jsonl|meta\.json)$/, ""),
    c = new Map();
  for (let K of l) {
    let Y = c.get(k(K)) ?? {};
    if (K.endsWith(".jsonl")) Y.transcript = K;
    else Y.meta = K;
    c.set(k(K), Y);
  }
  let v = [...c.entries()],
    w = v.length > 1 ? randomBytes(4).readUInt32BE() % v.length : 0,
    T = [...v.slice(w), ...v.slice(0, w)],
    [L, D] = await Promise.all([
      realpath(getProjectsDir()).catch(() => null),
      realpath(t).catch(() => null),
    ]);
  if (L === null || D === null) return;
  let O = gn(L, D);
  if (getProjectKeyFromDir(dirname(dirname(t))) === void 0 || O === null || O.depth !== 3) {
    n(
      `[adopt] relink sweep: ${l.length} symlinked name(s) left as is (session dir outside the transcript store)`,
      { level: "warn" },
    );
    return;
  }
  let U = O.session,
    H = 0,
    W = 0,
    x = 0,
    I = 0,
    j = [],
    q = (K) => {
      if (K === "copy") W++;
      else H++;
    },
    J = new Set();
  for (let [K, [Y, X]] of T.entries()) {
    let ee = [X.transcript, X.meta].filter((de) => de !== void 0);
    if (I + ee.length > Zr) {
      ((x = T.slice(K).reduce(
        (de, [, se]) => de + Number(!!se.transcript) + Number(!!se.meta),
        0,
      )),
        j.push(`${x} more (per-pass cap)`));
      break;
    }
    I += ee.length;
    try {
      let de = `${Y}.jsonl`,
        se = X.transcript !== void 0 ? await Qo(t, de, L, U) : await ri(t, de);
      if (typeof se === "string") {
        for (let Q of ee)
          j.push(
            `${Q} (${Q === X.meta && X.transcript !== void 0 ? "transcript not convertible" : se})`,
          );
        continue;
      }
      let ce;
      if (X.meta !== void 0) {
        let Q =
          se !== null && se.gate.size === 0
            ? "meta beside an empty transcript"
            : await Qo(t, X.meta, L, U, {
                besideDir: se === null ? void 0 : dirname(se.real),
              });
        if (typeof Q === "string") {
          for (let ie of ee)
            j.push(`${ie} (${ie === X.meta ? Q : "meta not convertible"})`);
          continue;
        }
        ce = Q;
      }
      if (se !== null) (q(await Zo(se, o)), J.add(de));
      if (ce !== void 0 && X.meta !== void 0)
        (q(await Zo(ce, o)), J.add(X.meta));
    } catch (de) {
      if (A(de) === void 0) logError(de);
      for (let se of ee) if (!J.has(se)) j.push(`${se} (${A(de) ?? "error"})`);
    }
  }
  if (W > 0) logFeatureSad("task_local_agent", "adopt_link_fallback_copy");
  (n(
    `[adopt] relink sweep: ${H} hard-linked, ${W} copied, ${j.length - (x > 0 ? 1 : 0) + x} left as is${j.length > 0 ? ` (${j.slice(0, 5).join(", ")})` : ""}`,
    { level: j.length > 0 || W > 0 ? "warn" : "debug" },
  ),
    logEvent("tengu_adopt_relink", {
      linked: H,
      copied: W,
      left: j.length - (x > 0 ? 1 : 0) + x,
    }));
}
var at = 65536,
  ti = createLazyValue(() => nt({ agentType: le() })),
  oi = createLazyValue(() => nt({ agentId: le() }));
async function hn(t, o, r) {
  let s = await dt(t, constants.O_RDONLY | O_NOFOLLOW_NONBLOCK_FLAGS);
  try {
    let l = await s.stat();
    if (l.dev !== o.dev || l.ino !== o.ino)
      return "target changed during the check";
    if (r.endsWith(".meta.json")) {
      if (l.size > at) return "meta too large";
      let w = qo((await Jo(s)).toString("utf-8"));
      return ti().safeParse(w).success ? void 0 : "not an agent meta";
    }
    if (l.size === 0) return;
    let k = r.slice(6, -6),
      c = await Jo(s),
      v = c.toString("utf-8");
    if (c.length >= at && c.indexOf(10) === -1)
      return ni(v, k)
        ? void 0
        : "no record naming this agent in the first 64 KiB";
    for (let w of v.split(`
`)) {
      let T = qo(w);
      if (T === null) continue;
      let L = oi().safeParse(T);
      if (L.success && L.data.agentId === k) return;
    }
    return "no record naming this agent in the first 64 KiB";
  } finally {
    await s.close().catch(() => {});
  }
}
function qo(t) {
  try {
    return z(t);
  } catch {
    return null;
  }
}
async function Jo(t) {
  let o = Buffer.allocUnsafe(at),
    r = 0;
  while (r < at) {
    let { bytesRead: s } = await t.read(o, r, at - r, r);
    if (s === 0) break;
    r += s;
  }
  return o.subarray(0, r);
}
function ni(t, o) {
  if (t[0] !== "{") return !1;
  let r = `"agentId":"${o}"`,
    s = 0,
    l = !1,
    k = !1;
  for (let c = 0; c < t.length; c++) {
    let v = t[c];
    if (l) {
      if (k) k = !1;
      else if (v === "\\") k = !0;
      else if (v === '"') l = !1;
      continue;
    }
    if (v === "{" || v === "[") s++;
    else if (v === "}" || v === "]") {
      if ((s--, s === 0)) return !1;
    } else if (v === '"') {
      if (
        s === 1 &&
        t.startsWith(r, c) &&
        (t[c - 1] === "{" || t[c - 1] === ",")
      )
        return !0;
      l = !0;
    }
  }
  return !1;
}
async function Qo(t, o, r, s, { besideDir: l } = {}) {
  let k = Ae(t, o),
    c = await readlink(k);
  if (!isAbsolute(c) || basename(c) !== o || WP(c)) return "unexpected target spelling";
  let v;
  try {
    v = await lstat(c);
  } catch (O) {
    return `target ${A(O) ?? "unreadable"}`;
  }
  if (!v.isFile())
    return v.isSymbolicLink() ? "chained link" : "non-regular target";
  let w = await realpath(c),
    T = gn(r, w);
  if (T === null || T.depth < 4 || basename(w) !== o)
    return "outside the transcript store";
  if (T.session === s) return "this session's own file";
  if (l !== void 0 && dirname(w) !== l) return "not beside its transcript";
  let L = await lstat(w);
  if (!L.isFile() || L.dev !== v.dev || L.ino !== v.ino)
    return "target changed during the check";
  let D = await hn(w, v, o);
  if (D !== void 0) return D;
  return { linkPath: k, real: w, gate: v };
}
async function ri(t, o) {
  let r = Ae(t, o),
    s;
  try {
    s = await lstat(r);
  } catch {
    return "meta without its transcript";
  }
  if (!s.isFile() || s.size === 0) return "meta without its transcript";
  let l = await hn(r, s, o);
  return l === void 0 ? null : `transcript ${l}`;
}
async function Zo(t, o) {
  return (await Xt(t.linkPath, t.real, t.gate, o, !0)).method;
}
function killOrphanedAdoptedShell(t) {
  return killIfSameProcess(t.pid, t.startTimeTicks, t.procStart);
}
async function linkAdoptedWorkflowDir(t) {
  let o = getWorkflowTranscriptDir(t.workflowRunId);
  if (o === t.transcriptDir) return;
  if (
    (await realpath(o).catch(() => {
      return;
    })) === t.transcriptDir
  )
    return;
  (await rn(Ae(t.transcriptDir, "journal.jsonl")),
    await mkdir(dirname(o), { recursive: !0 }));
  try {
    await unlink(o);
  } catch (r) {
    if (A(r) !== "ENOENT")
      try {
        await rmdir(o);
      } catch (l) {
        if (A(l) === "ENOTEMPTY") await Er(o, { recursive: !0, force: !0 });
      }
  }
  await symlink(t.transcriptDir, o, void 0);
}
function emitAdoptWorkflowFailed(t, o, r) {
  let s =
      t.scriptPath !== void 0
        ? ` To resume manually: Workflow({scriptPath: '${Nt(t.scriptPath)}', resumeFromRunId: '${Nt(t.workflowRunId)}'}).`
        : "",
    l = `Background workflow "${Nt(t.description)}" was checkpointed for the background fork but could not be resumed (${Nt(o)}).${s}`;
  lt(t.taskId, l, r);
}
function lt(t, o, r, s = ze()) {
  (r.enqueuePendingNotification({
    value: _a({ taskId: Nt(t), status: "failed", summary: o }),
    agentId: s,
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    taskId: t,
  }),
    pi(t, "failed", { summary: o }));
}
function resolveAdoptedScriptPath(t) {
  let o = kt(() => [getProjectsDir()]).safeParse(t);
  if (!o.success)
    throw new R(
      o.error.issues[0]?.message ?? "scriptPath rejected",
      "adopt scriptPath rejected",
    );
  return o.data;
}
function mcpSettledForAdopt(t) {
  return (
    t.mcp.clientsInitialized === !0 &&
    !t.mcp.clients.some((o) => o.type === "pending")
  );
}
function classifyAdoptLinkFailure(t) {
  let o = t.parentAgentId !== void 0,
    r = t.forkedSkillName !== void 0;
  return { emit: o || r, excludeFromReconcile: !o && r };
}
function emitAdoptAgentFailed(t, o, r, s) {
  let l =
      t.parentAgentId !== void 0 && nr(r.get(t.parentAgentId))
        ? oo(t.parentAgentId)
        : ze(),
    k = `Background agent "${Nt(t.description ?? t.agentId)}" was checkpointed for the background fork but could not be resumed (${Nt(o)}).`;
  lt(t.agentId, k, s, l);
}
function adoptCron(t, o) {
  let r = new Set(kg().map((s) => s.id));
  for (let s of t) if (!r.has(s.id)) (m8(s), r.add(s.id));
  for (let s = 0; s < (o ?? 0); s++) Lrt();
}
function computeAdoptability(t) {
  let o = new Map();
  if (!isTaskAdoptionEnabled()) return o;
  let r = (c) =>
      nr(c) ? c.parentAgentId : "agentId" in c ? c.agentId : void 0,
    s = new Map();
  for (let c of Object.values(t)) {
    if (c.status !== "running" && c.status !== "pending") continue;
    let v = r(c);
    if (v !== void 0) {
      let w = s.get(v) ?? [];
      (w.push(c), s.set(v, w));
    }
  }
  let l = (c) => {
      if (nr(c))
        return (
          c.agentType !== "main-session" &&
          c.status === "running" &&
          c.isBackgrounded &&
          c.abortController !== void 0
        );
      if (bp(c))
        return (
          c.kind !== "monitor" &&
          c.status === "running" &&
          c.isBackgrounded &&
          c.shellCommand !== null &&
          c.shellCommand.detach !== void 0
        );
      if (o2t(c))
        return (
          c.status === "running" &&
          c.v2Run === void 0 &&
          c.scriptPath !== void 0 &&
          c.workflowRunId !== void 0 &&
          c.abortController !== void 0
        );
      return !1;
    },
    k = (c, v) => {
      v.push(c.id);
      let w = l(c);
      for (let T of s.get(c.id) ?? []) w = k(T, v) && w;
      return w;
    };
  for (let c of Object.values(t)) {
    if (
      !(nr(c)
        ? c.parentAgentId === void 0
        : bp(c)
          ? c.agentId === void 0
          : o2t(c))
    )
      continue;
    let w = [],
      T = k(c, w);
    for (let L of w) o.set(L, T);
  }
  return o;
}
function isAdoptableShellTask(t, o) {
  return bp(t) && (o.get(t.id) ?? !1);
}
function isAdoptableCron(t, o) {
  return isTaskAdoptionEnabled() && (t.agentId === void 0 || (o.get(t.agentId) ?? !1));
}
function isAdoptableAgentTask(t, o) {
  return nr(t) && (o.get(t.id) ?? !1);
}
function isAdoptableWorkflowTask(t, o) {
  return o2t(t) && (o.get(t.id) ?? !1);
}
function isAdoptableTask(t, o) {
  return o.get(t.id) ?? !1;
}
function countAdoptable(t, o = computeAdoptability(t)) {
  let r = carriedFrameLiveSlugs(t);
  return (
    countMatching(Object.values(t), (s) => isAdoptableTask(s, o)) + countMatching(kg(), (s) => isAdoptableCron(s, o)) + r.size
  );
}
function countAbandonable(t, o = computeAdoptability(t)) {
  return summarizeBackgroundTasks(t).count - countAdoptable(t, o);
}
function countLiveWorkflowAgents(t, o = computeAdoptability(t)) {
  let r = 0,
    s = 0,
    l = 0;
  for (let k of Object.values(t)) {
    if (!isAdoptableWorkflowTask(k, o)) continue;
    let c = 1 / 0;
    for (let v of k.workflowProgress)
      if (v.type === "workflow_agent" && v.state === "error")
        c = Math.min(c, v.index);
    for (let v of k.workflowProgress) {
      if (v.type !== "workflow_agent") continue;
      if (v.state === "done")
        if (v.index > c) l++;
        else s++;
      else if (
        v.state === "progress" ||
        (v.state === "start" &&
          !(v.queuedAt !== void 0 && v.startedAt === void 0))
      )
        r++;
    }
  }
  return { running: r, finished: s, rerun: l };
}
function leftArrowNeedsInterstitial(t, o = computeAdoptability(t)) {
  return countAbandonable(t, o) > 0 || carriedFrameLiveSlugs(t).size > 0 || countLiveWorkflowAgents(t, o).running > 0;
}
function countCarriedSince(t, o) {
  let r = 0;
  for (let s of carriedFrameLiveSlugs(t)) if (!o.has(s)) r++;
  return r;
}
function carriesTasks(t) {
  return (
    t.shells.length > 0 ||
    (t.agents?.length ?? 0) > 0 ||
    (t.workflows?.length ?? 0) > 0 ||
    t.cron.length > 0
  );
}
function adoptedCounts(t) {
  return {
    adopted_shells: t?.shells.length ?? 0,
    adopted_agents: t?.agents?.length ?? 0,
    adopted_workflows: t?.workflows?.length ?? 0,
    adopted_cron: t?.cron.length ?? 0,
    adopted_frame_live: t?.frameLive?.length ?? 0,
  };
}
function aF() {
  let t = import.meta.require("../Teammates团队/teammate-context.js"),
    o = t.isTeammate() && t.isPlanModeRequired() ? "plan" : "default";
  return {
    sessionNoticesPoll: { pendingDeliveryUuids: [] },
    settings: getInitialSettings(),
    tasks: {},
    transcripts: {},
    runningSubagents: 0,
    agentNameRegistry: new Map(),
    sendMessagePins: {},
    agentTypesInvokedThisSession: new Set(),
    verbose: !1,
    showMessageTimestamps: !1,
    mainLoopModel: null,
    mainLoopModelForSession: null,
    isBriefOnly: !1,
    slackTagConnected: !1,
    briefTranscript: !1,
    replBridgeEnabled: !1,
    replBridgeExplicit: !1,
    replBridgeOutboundOnly: !1,
    replBridgeSessionActive: !1,
    replBridgeSkipNextArchive: !1,
    replBridgeSessionGroupingId: void 0,
    toolPermissionContext: { ...createDefaultToolPermissionContext(), mode: o },
    attentionBudget: rmt,
    proactivityLevel: v4e,
    agent: void 0,
    agentDefinitions: { activeAgents: [], allAgents: [] },
    skillTools: [],
    fileHistory: {
      snapshots: [],
      trackedFiles: new Set(),
      snapshotSequence: 0,
    },
    attribution: lTe(),
    mcp: {
      clientsInitialized: !1,
      clients: [],
      tools: [],
      commands: [],
      resources: {},
      resourceTemplates: {},
      suppressedClaudeAiConnectors: [],
      pluginReconnectKey: 0,
    },
    plugins: {
      enabled: [],
      disabled: [],
      commands: [],
      errors: [],
      warnings: [],
      installationStatus: { marketplaces: [], plugins: [] },
      needsRefresh: !1,
    },
    todos: {},
    queuedRemoteNotifications: { pending: [], drainedIds: [], nudge: null },
    prResolvedThisSession: !1,
    frameUrls: {},
    frameOpenFailedPath: null,
    frameOpenFailedSeen: !1,
    artifactWatchApproved: !1,
    artifactDbWriteApproved: !1,
    artifactDbWriteHumanApproved: !1,
    artifactDbReadConsentSlugs: EMPTY_ARTIFACT_DB_READ_CONSENT_SLUGS,
    artifactDbReadHumanConsentSlugs: EMPTY_ARTIFACT_DB_READ_HUMAN_CONSENT_SLUGS,
    artifactReadConsentSlugs: EMPTY_ARTIFACT_READ_CONSENT_SLUGS,
    artifactAssetUploadConsentSlugs: EMPTY_ARTIFACT_ASSET_UPLOAD_CONSENT_SLUGS,
    artifactAssetUploadHumanConsentSlugs: EMPTY_ARTIFACT_ASSET_UPLOAD_HUMAN_CONSENT_SLUGS,
    artifactAssetReadConsentSlugs: EMPTY_ARTIFACT_ASSET_READ_CONSENT_SLUGS,
    artifactAssetReadHumanConsentSlugs: EMPTY_ARTIFACT_ASSET_READ_HUMAN_CONSENT_SLUGS,
    artifactHandlersReadConsentSlugs: EMPTY_ARTIFACT_HANDLERS_READ_CONSENT_SLUGS,
    artifactHandlersReadHumanConsentSlugs: EMPTY_ARTIFACT_HANDLERS_READ_HUMAN_CONSENT_SLUGS,
    artifactHandlersWriteConsentSlugs: EMPTY_ARTIFACT_HANDLERS_WRITE_CONSENT_SLUGS,
    artifactHandlersWriteHumanConsentSlugs: EMPTY_ARTIFACT_HANDLERS_WRITE_HUMAN_CONSENT_SLUGS,
    artifactRoomJoinConsentSlugs: EMPTY_ARTIFACT_ROOM_JOIN_CONSENT_SLUGS,
    artifactReadPageDataApproved: !1,
    artifactReadPageDataHumanApproved: !1,
    artifactPlanPublishConsentPaths: EMPTY_ARTIFACT_PLAN_PUBLISH_CONSENT_PATHS,
    ultrareviewOverageConfirmed: !1,
    thinkingEnabled: JN(),
    promptSuggestionEnabled: ght(),
    awaySummaryEnabled: isAwaySummaryEnabled(),
    displayedMessageContent: {},
    inbox: { messages: [] },
    pendingMemoryUpdates: [],
    pendingWorkerRequest: null,
    pendingSandboxRequest: null,
    promptSuggestion: { status: "empty" },
    taskSummary: null,
    initialMessage: null,
    sessionEffort: { kind: "inherit" },
    settingsEffortTable: { default: void 0, byModel: {} },
    ultracode: void 0,
    cacheMissAckedAtOutputTokens: -1,
    fastMode: !1,
    storedImagePaths: new Map(),
    imageDescriptions: new Map(),
    classifierApprovals: { approvals: new Map(), checking: new Set() },
    teammateColors: { assignments: new Map(), index: 0 },
    webBrowser: import.meta
      .require("../../01-核心基础设施/共享小工具-未细化/chunk-hkbpxv9z.js")
      .getDefaultWebBrowserState(),
  };
}
var EMPTY_PROJECTS_SELF_IDENTITY = { accountKey: null, ownMessageIds: [], wireAccountId: null };
function getDefaultAppState() {
  return {
    ...aF(),
    taskDecorations: {},
    prStatus: null,
    prNeedsAuth: !1,
    expandedView: "none",
    replTab: "convo",
    panelFileView: null,
    diffPanelVisible: !1,
    coordinatorTaskIndex: -1,
    workflowFooterIndex: 0,
    viewSelectionMode: "none",
    queueEditIndex: null,
    footerSelection: null,
    footerLinks: [],
    remoteSessionUrl: void 0,
    projectsSelfIdentity: EMPTY_PROJECTS_SELF_IDENTITY,
    remoteConnectionStatus: "connecting",
    remoteBootstrap: null,
    remoteBackgroundTasks: [],
    workerInventory: null,
    hasRemoteReplyChannel: !1,
    replBridgeAutoOnByDefault: !1,
    replBridgeConnected: !1,
    replBridgeReconnecting: !1,
    replBridgeConnectUrl: void 0,
    replBridgeSessionUrl: void 0,
    replBridgeEnvironmentId: void 0,
    replBridgeSessionId: void 0,
    replBridgeError: void 0,
    replBridgeErrorKind: void 0,
    replBridgeInitialName: void 0,
    setupIssues: {
      settingsErrorCount: 0,
      lspFailedCount: 0,
      marketplaceIssueCount: 0,
      chromeExtensionIssueCount: 0,
      sandboxIssueCount: 0,
      statuslineIssueCount: 0,
      flaggedPluginCount: 0,
      modelDeprecationWarning: null,
      modelRestrictedWarning: null,
      existingClaudeSubscription: null,
    },
    notifications: { current: null, queue: [], pinned: [] },
    autoUpdaterResult: null,
    frameNavPath: null,
    frameExpanded: !1,
    activeOverlays: new Set(),
  };
}
F();
F();
var bt = Qt(null),
  kn = 20;
function Ne(gl) {
  let yn = _(4),
    { children: Sn } = gl,
    ii;
  if (yn[0] === MEMO_CACHE_SENTINEL) ((ii = []), (yn[0] = ii));
  else ii = yn[0];
  let wt = C(ii),
    si;
  if (yn[1] === MEMO_CACHE_SENTINEL)
    ((si = {
      getDenials: () => wt.current,
      recordDenial: (hl) => {
        wt.current = [hl, ...wt.current.slice(0, kn - 1)];
      },
      removeDenial: (Sl) => {
        wt.current = wt.current.filter((yl) => yl !== Sl);
      },
    }),
      (yn[1] = si));
  else si = yn[1];
  let wl = si,
    ai;
  if (yn[2] !== Sn)
    ((ai = e(bt.Provider, { value: wl, children: Sn })),
      (yn[2] = Sn),
      (yn[3] = ai));
  else ai = yn[3];
  return ai;
}
function J8() {
  let di = De(bt);
  if (!di) {
    throw ReferenceError(
      "useAutoModeDenials cannot be called outside of an <AutoModeDenialsProvider /> (mounted by <AppStateProvider />)",
    );
  }
  return di;
}
F();
var Tt = Qt(void 0);
function Rt(Cl) {
  let _l = _(3),
    { getFpsMetrics: wn, children: vn } = Cl,
    ci;
  if (_l[0] !== vn || _l[1] !== wn)
    ((ci = e(Tt.Provider, { value: wn, children: vn })),
      (_l[0] = vn),
      (_l[1] = wn),
      (_l[2] = ci));
  else ci = _l[2];
  return ci;
}
function xOt() {
  return De(Tt);
}
F();
function to(t, o) {
  let r = (o / 100) * (t.length - 1),
    s = Math.floor(r),
    l = Math.ceil(r);
  if (s === l) return t[s];
  return t[s] + (t[l] - t[s]) * (r - s);
}
var Rn = 1024;
function HOt() {
  let t = new Map(),
    o = new Map(),
    r = new Map();
  return {
    increment(s, l = 1) {
      t.set(s, (t.get(s) ?? 0) + l);
    },
    set(s, l) {
      t.set(s, l);
    },
    observe(s, l) {
      let k = o.get(s);
      if (!k)
        ((k = { reservoir: [], count: 0, sum: 0, min: l, max: l }),
          o.set(s, k));
      if ((k.count++, (k.sum += l), l < k.min)) k.min = l;
      if (l > k.max) k.max = l;
      if (k.reservoir.length < Rn) k.reservoir.push(l);
      else {
        let c = Math.floor(Math.random() * k.count);
        if (c < Rn) k.reservoir[c] = l;
      }
    },
    add(s, l) {
      let k = r.get(s);
      if (!k) ((k = new Set()), r.set(s, k));
      k.add(l);
    },
    getAll() {
      let s = Object.fromEntries(t);
      for (let [l, k] of o) {
        if (k.count === 0) continue;
        ((s[`${l}_count`] = k.count),
          (s[`${l}_min`] = k.min),
          (s[`${l}_max`] = k.max),
          (s[`${l}_avg`] = k.sum / k.count));
        let c = [...k.reservoir].sort((v, w) => v - w);
        ((s[`${l}_p50`] = to(c, 50)),
          (s[`${l}_p95`] = to(c, 95)),
          (s[`${l}_p99`] = to(c, 99)));
      }
      for (let [l, k] of r) s[l] = k.size;
      return s;
    },
  };
}
var Pn = Qt(null);
function Ct(Nl) {
  let Tn = _(8),
    { store: Bl, children: An } = Nl,
    ui;
  if (Tn[0] === MEMO_CACHE_SENTINEL) ((ui = HOt()), (Tn[0] = ui));
  else ui = Tn[0];
  let Be = Bl ?? ui,
    { storageV5: Pt } = useStorageV5Context(),
    fi,
    mi;
  if (Tn[1] !== Pt || Tn[2] !== Be)
    ((fi = () => {
      let gi = !1;
      let Wl =
        isHoverRestEnabled() && Pt !== void 0
          ? dv(async () => {
              let hi = Be.getAll();
              if (Object.keys(hi).length > 0)
                await eu((jl) => ({ ...jl, lastSessionMetrics: hi }), Pt);
              gi = !0;
            })
          : void 0;
      let ki = () => {
        if (gi) {
          return;
        }
        let Si = Be.getAll();
        if (Object.keys(Si).length > 0)
          QUe((Ul) => ({ ...Ul, lastSessionMetrics: Si }));
      };
      return (
        process.on("exit", ki),
        () => {
          (Wl?.(), process.off("exit", ki));
        }
      );
    }),
      (mi = [Be, Pt]),
      (Tn[1] = Pt),
      (Tn[2] = Be),
      (Tn[3] = fi),
      (Tn[4] = mi));
  else ((fi = Tn[3]), (mi = Tn[4]));
  E(fi, mi);
  let wi;
  if (Tn[5] !== An || Tn[6] !== Be)
    ((wi = e(Pn.Provider, { value: Be, children: An })),
      (Tn[5] = An),
      (Tn[6] = Be),
      (Tn[7] = wi));
  else wi = Tn[7];
  return wi;
}
F();
class ro extends r7 {
  action;
  sourceEvent;
  isChordCompletion;
  origin;
  constructor(t, o) {
    super("action", { bubbles: !0, cancelable: !0 });
    ((this.action = t),
      (this.sourceEvent = o?.sourceEvent ?? null),
      (this.isChordCompletion = o?.isChordCompletion ?? !1),
      (this.origin = o?.origin ?? "single"));
  }
  consume() {
    (this.stopPropagation(),
      this.sourceEvent?.preventDefault(),
      this.sourceEvent?.stopImmediatePropagation());
  }
  get consumed() {
    return this._isPropagationStopped();
  }
}
function Hi(resolvedAction, willConsume) {}
var Wi = 1000;
function ble(pd) {
  let bi = _(4),
    { children: ut } = pd;
  if (useKeybindingContext()) {
    let _t;
    if (bi[0] !== ut)
      ((_t = e(N, { children: ut })), (bi[0] = ut), (bi[1] = _t));
    else _t = bi[1];
    return _t;
  }
  let _t;
  if (bi[2] !== ut)
    ((_t = e(Nn, { children: ut })), (bi[2] = ut), (bi[3] = _t));
  else _t = bi[3];
  return _t;
}
function Nn({ children: t }) {
  let [{ bindings: o }, r] = d(() => {
      let x = ONe(hw);
      return (
        n(
          `[keybindings] KeybindingSetup initialized with ${x.bindings.length} bindings, ${x.warnings.length} warnings`,
        ),
        x
      );
    }),
    s = useClock(),
    l = C(null),
    [k, c] = d(null),
    v = C(null),
    w = C(new Map()),
    T = C(new Set()),
    L = C(new Set()),
    [D] = d(createKeyHandlerRegistry),
    O = re((x) => {
      T.current.add(x);
    }, []),
    U = re((x) => {
      T.current.delete(x);
    }, []),
    H = re(() => {
      (v.current?.(), (v.current = null));
    }, []),
    W = re(
      (x) => {
        if ((H(), x !== null))
          v.current = s.setTimeout(() => {
            (n("[keybindings] Chord timeout - cancelling"),
              (l.current = null),
              c(null));
          }, Wi);
        ((l.current = x), c(x));
      },
      [H, s],
    );
  return (
    E(() => {
      FYn(hw);
      let x = hw.changed.subscribe((I) => {
        (r(I),
          n(
            `[keybindings] Reloaded: ${I.bindings.length} bindings, ${I.warnings.length} warnings`,
          ));
      });
      return () => {
        (x(), H());
      };
    }, [H]),
    e(KeybindingProvider, {
      bindings: o,
      pendingChordRef: l,
      pendingChord: k,
      setPendingChord: W,
      activeContexts: T.current,
      registerActiveContext: O,
      unregisterActiveContext: U,
      handlerRegistryRef: w,
      preDispatchRef: L,
      keyHandlerRegistry: D,
      children: e(Wn, {
        bindings: o,
        pendingChordRef: l,
        setPendingChord: W,
        activeContexts: T.current,
        handlerRegistryRef: w,
        preDispatchRef: L,
        keyHandlerRegistry: D,
        children: t,
      }),
    })
  );
}
function Wn(fd) {
  let je = _(28),
    {
      bindings: xe,
      pendingChordRef: Me,
      setPendingChord: ge,
      activeContexts: io,
      handlerRegistryRef: pt,
      preDispatchRef: Cn,
      keyHandlerRegistry: xn,
      children: Mn,
    } = fd,
    vi;
  if (je[0] === MEMO_CACHE_SENTINEL) ((vi = []), (je[0] = vi));
  else vi = je[0];
  let so = C(vi),
    ao = C(null),
    xt = C("legacy"),
    Ai;
  if (je[1] !== Cn)
    ((Ai = (md, gd, hd, yd) => {
      for (const kd of Cn.current) {
        try {
          if (kd.handler(md, gd, hd) === !0) {
            return (yd(), !0);
          }
        } catch (lo) {
          let wd = lo;
          logError(wd);
        }
      }
      return !1;
    }),
      (je[1] = Cn),
      (je[2] = Ai));
  else Ai = je[2];
  let Xe = Ai,
    lo;
  if (
    je[3] !== io ||
    je[4] !== xe ||
    je[5] !== pt ||
    je[6] !== Me ||
    je[7] !== Xe ||
    je[8] !== ge
  )
    ((lo = (Ti, bd, vd, Ad, ft, Mt) => {
      let Td = Mt === void 0 ? !1 : Mt;
      let It = pt.current;
      let Pi = new Set();
      if (It) {
        for (const Rd of It.values()) {
          for (const Pd of Rd) Pi.add(Pd.context);
        }
      }
      let Cd = [...Pi, ...io, "Global"];
      let Ci = Me.current !== null;
      let co = $pe(Ti, Cd, xe, Me.current);
      bb42: switch (co.type) {
        case "chord_started": {
          ((xt.current = "legacy"), ge(co.pending), ft());
          return;
        }
        case "chord_cancelled": {
          (ge(null), ft());
          return;
        }
        case "unbound": {
          if ((ge(null), Ci)) {
            ft();
            return;
          }
          break bb42;
        }
        case "match": {
          if ((ge(null), Ci)) {
            let _i = It?.get(co.action);
            if (_i) {
              for (const _d of _i) {
                (_d.handler(), X3(co.action), ft());
                break;
              }
            }
            return;
          }
          break bb42;
        }
        case "none":
      }
      if (!It) {
        return;
      }
      if (!Td && Xe(bd, vd, Ad, ft)) {
        return;
      }
      let xi = new Map();
      for (const xd of It.values()) {
        for (const mt of xd) {
          if (!mt.singleKey) {
            continue;
          }
          let Ft = xi.get(mt.context);
          if (Ft === void 0) {
            let Mi = $pe(Ti, [...io, mt.context, "Global"], xe, null);
            ((Ft = Mi.type === "match" ? Mi.action : null),
              xi.set(mt.context, Ft));
          }
          if (Ft === mt.action) {
            if (mt.handler() !== !1) {
              (X3(Ft), ft());
              return;
            }
          }
        }
      }
    }),
      (je[3] = io),
      (je[4] = xe),
      (je[5] = pt),
      (je[6] = Me),
      (je[7] = Xe),
      (je[8] = ge),
      (je[9] = lo));
  else lo = je[9];
  let Ue = lo,
    Mt;
  if (
    je[10] !== xe ||
    je[11] !== pt ||
    je[12] !== xn ||
    je[13] !== Ue ||
    je[14] !== Me ||
    je[15] !== Xe ||
    je[16] !== ge
  )
    ((Mt = (Ze, Ee, He, $e, Ke, ve) => {
      let uo = xn;
      let pe = Hi;
      if (uo.swallowAll.size > 0) {
        (pe(null, !0), ve());
        return;
      }
      if (Me.current !== null && xt.current === "legacy") {
        (pe(null, !1), Ue(Ee, He, $e, Ke, ve));
        return;
      }
      let En = jn(Ze.target);
      let Dn = Me.current !== null && xt.current === "scopeChain";
      if (En.length === 0 && uo.preemptiveScopes.size === 0 && !Dn) {
        (pe(null, !1), Ue(Ee, He, $e, Ke, ve));
        return;
      }
      let Ve = St(Ze.target);
      if (uo.preemptiveScopes.size > 0 && !Dn) {
        let Md = [...uo.preemptiveScopes.keys(), "Global"];
        let po = LNe(Ee, Md, xe, null);
        if (po.type === "match" && Ve) {
          if (
            et(Ve, Ze, po.action, !1, Ze.type === "wheel" ? "wheel" : "single")
          ) {
            (pe(po.action, !0), X3(po.action));
            return;
          }
        }
      }
      if (Dn) {
        let Ie = LNe(Ee, so.current, xe, Me.current);
        if (Ie.type === "chord_started") {
          ((xt.current = "scopeChain"), ge(Ie.pending), ve(), pe(null, !0));
          return;
        }
        if (Ie.type === "match") {
          ge(null);
          let In = ao.current;
          ((ao.current = null), (so.current = []));
          let Ei = In && Ve && KB(In, U0e(Ve)) ? In : Ve;
          if (Ei) {
            if (et(Ei, Ze, Ie.action, !0, "chord")) {
              (pe(Ie.action, !0), X3(Ie.action));
              return;
            }
          }
          let Di = !1;
          let Ii = pt.current?.get(Ie.action);
          if (Ii) {
            for (const Ed of Ii) {
              (Ed.handler(), X3(Ie.action), ve(), (Di = !0));
              break;
            }
          }
          pe(Ie.action, Di);
          return;
        }
        ((ao.current = null),
          (so.current = []),
          pe(null, !1),
          Ue(Ee, He, $e, Ke, ve));
        return;
      }
      let qe = LNe(Ee, En, xe, null);
      switch (qe.type) {
        case "chord_started": {
          ((so.current = En),
            (ao.current = Ve ?? null),
            (xt.current = "scopeChain"),
            ge(qe.pending),
            ve(),
            pe(null, !0));
          return;
        }
        case "match": {
          if (!Ve) {
            (pe(qe.action, !1), Ue(Ee, He, $e, Ke, ve));
            return;
          }
          if (Xe(He, $e, Ke, ve)) {
            (ge(null), pe(qe.action, !0));
            return;
          }
          if (
            et(Ve, Ze, qe.action, !1, Ze.type === "wheel" ? "wheel" : "single")
          ) {
            (ge(null), pe(qe.action, !0), X3(qe.action));
            return;
          }
          (pe(qe.action, !1), Ue(Ee, He, $e, Ke, ve, !0));
          return;
        }
        case "unbound": {
          if (Xe(He, $e, Ke, ve)) {
            (ge(null), pe(null, !0));
            return;
          }
          (ge(null), pe(null, !1));
          return;
        }
        default: {
          (pe(null, !1), Ue(Ee, He, $e, Ke, ve));
          return;
        }
      }
    }),
      (je[10] = xe),
      (je[11] = pt),
      (je[12] = xn),
      (je[13] = Ue),
      (je[14] = Me),
      (je[15] = Xe),
      (je[16] = ge),
      (je[17] = Mt));
  else Mt = je[17];
  let gt = Mt,
    Fi;
  if (je[18] !== gt)
    ((Fi = (Lt) => {
      let { input: Dd, key: Id } = buildInkKeyEvent(Lt);
      gt(Lt, Lt, Dd, Id, Lt.sequence, () => Bt(Lt));
    }),
      (je[18] = gt),
      (je[19] = Fi));
  else Fi = je[19];
  let Fn = Fi,
    Li;
  if (je[20] !== gt)
    ((Li = (we) => {
      if (Bn(we.target, we.currentTarget)) {
        return;
      }
      let Fd = {
        name: we.deltaY < 0 ? "wheelup" : "wheeldown",
        key: "",
        ctrl: we.ctrl,
        shift: we.shift,
        meta: we.meta,
        superKey: !1,
      };
      let Ld = {
        upArrow: !1,
        downArrow: !1,
        leftArrow: !1,
        rightArrow: !1,
        pageDown: !1,
        pageUp: !1,
        wheelUp: we.deltaY < 0,
        wheelDown: we.deltaY > 0,
        home: !1,
        end: !1,
        return: !1,
        escape: !1,
        tab: !1,
        backspace: !1,
        delete: !1,
        ctrl: we.ctrl,
        shift: we.shift,
        meta: we.meta,
        super: !1,
      };
      gt(we, Fd, "", Ld, "", () => Bt(we));
    }),
      (je[20] = gt),
      (je[21] = Li));
  else Li = je[21];
  let Ln = Li,
    fo = C(null),
    Oi,
    Ni;
  if (je[22] === MEMO_CACHE_SENTINEL)
    ((Oi = () => {
      if (!fo.current) {
        return;
      }
      let ht = XB(fo.current);
      let Bi = () => {
        let Ot = fo.current;
        if (!Ot || ht.activeElement === Ot) {
          return;
        }
        if (ht.activeElement === null) {
          ht.focus(Ot);
          return;
        }
        let mo = Ot.parentNode;
        while (mo) {
          if (mo === ht.activeElement) {
            ht.focus(Ot);
            return;
          }
          mo = mo.parentNode;
        }
      };
      return (Bi(), ht.subscribe(Bi));
    }),
      (Ni = []),
      (je[22] = Oi),
      (je[23] = Ni));
  else ((Oi = je[22]), (Ni = je[23]));
  dn(Oi, Ni);
  let ji;
  if (je[24] !== Mn || je[25] !== Fn || je[26] !== Ln)
    ((ji = e(ga, {
      ref: fo,
      keybindingScope: "Global",
      tabIndex: -1,
      flexDirection: "column",
      flexGrow: 1,
      onKeyDownCapture: Fn,
      onWheelCapture: Ln,
      children: Mn,
    })),
      (je[24] = Mn),
      (je[25] = Fn),
      (je[26] = Ln),
      (je[27] = ji));
  else ji = je[27];
  return ji;
}
function Bt(t) {
  (t.preventDefault(), t.stopImmediatePropagation());
}
function Ui(t) {
  return t !== null && "attributes" in t;
}
function St(t) {
  return Ui(t) ? t : void 0;
}
function Bn(t, o) {
  let r = St(t),
    s = St(o);
  while (r && r !== s) {
    if (r._eventHandlers?.onWheel) return !0;
    r = r.parentNode;
  }
  return !1;
}
function jn(t) {
  let o = [],
    r = St(t);
  while (r) {
    let s = r.attributes.keybindingScope;
    if (typeof s === "string" && DYn(s)) o.push(s);
    r = r.parentNode;
  }
  return o;
}
function et(t, o, r, s, l) {
  let k = new ro(r, { sourceEvent: o, isChordCompletion: s, origin: l });
  return (p4.dispatch(t, k), k.consumed);
}
F();
F();
function $i(t, o) {
  var r = [];
  return (
    K$t(t, function (s, l, k) {
      if (o(s, l, k)) r.push(s);
    }),
    r
  );
}
var Un = $i;
function Ki(t, o) {
  var r = vg(t) ? vXt : Un;
  return r(t, r8t(GP(o, 3)));
}
var nO = Ki;
function Hn(t, o) {
  let r = t.clients.findIndex((k) => k.name === o);
  if (r === -1) return t;
  let s = t.clients[r];
  if (!s || !ts(s)) return t;
  let l = [...t.clients];
  return (
    (l[r] = { name: o, type: "needs-auth", config: s.config }),
    { ...t, clients: l }
  );
}
function IOt(t, o, r, s) {
  let l = t.mcp.clients.some((c) => c.name === o);
  if (!l && s?.appendIfAbsent === !1) return t;
  let k = Oa(o);
  return {
    ...t,
    mcp: {
      ...t.mcp,
      clients: l
        ? t.mcp.clients.map((c) => (c.name === o ? r.client : c))
        : [...t.mcp.clients, r.client],
      tools: [...t.mcp.tools.filter((c) => !Kp(c, o, k)), ...r.tools],
      commands: [...t.mcp.commands.filter((c) => !lw(c, o)), ...r.commands],
      resources: r.resources
        ? { ...t.mcp.resources, [o]: r.resources }
        : t.mcp.resources,
      resourceTemplates: r.resourceTemplates
        ? { ...t.mcp.resourceTemplates, [o]: r.resourceTemplates }
        : t.mcp.resourceTemplates,
    },
  };
}
function FUn(t, o, r) {
  if (!t.clients.some((l) => l.name === o && l.type === "connected")) return t;
  let s = Oa(o);
  return { ...t, tools: [...t.tools.filter((l) => !Kp(l, o, s)), ...r] };
}
function gat(t, o, r) {
  if (!t.mcp.clients.some((l) => l.name === o && l.type === "connected"))
    return t;
  let s = Oa(o);
  return {
    ...t,
    mcp: {
      ...t.mcp,
      tools: [...t.mcp.tools.filter((l) => !Kp(l, o, s)), ...r],
    },
  };
}
function $Un(t, o, r) {
  let s = new Set(t.clients),
    l = new Map(o.clients.map((T) => [T.name, T])),
    k = r;
  for (let T of r.clients) {
    if (!s.has(T)) continue;
    let L = l.get(T.name),
      D = Oa(T.name),
      O = (W) => Kp(W, T.name, D);
    if (L === void 0) {
      k = {
        ...k,
        clients: k.clients.filter((W) => W !== T),
        tools: k.tools.filter((W) => !O(W)),
      };
      continue;
    }
    if (L !== T) k = { ...k, clients: k.clients.map((W) => (W === T ? L : W)) };
    let U = o.tools.filter(O),
      H = k.tools.filter(O);
    if (U.length === H.length && U.every((W, x) => W === H[x])) continue;
    k = { ...k, tools: [...k.tools.filter((W) => !O(W)), ...U] };
  }
  let c = new Set(t.clients.map((T) => T.name)),
    v = new Set(r.clients.map((T) => T.name)),
    w = o.clients.filter((T) => !c.has(T.name) && !v.has(T.name));
  if (w.length > 0) {
    let T = w.map((L) => [L.name, Oa(L.name)]);
    k = {
      ...k,
      clients: [...k.clients, ...w],
      tools: [
        ...k.tools,
        ...o.tools.filter((L) => T.some(([D, O]) => Kp(L, D, O))),
      ],
    };
  }
  return k;
}
function tt() {
  return import.meta.require("../MCP客户端/mcpClientModule.4cyej0np.js").mcpClientModule();
}
function Gi(t) {
  ((asMcpSdkClient(t.client).onclose = void 0),
    tt()
      .clearServerCache(t.name, t.config)
      .catch(() => {}));
}
function $n(t, o, r) {
  return {
    tools: nO(t.tools, (s) => s.name?.startsWith(r)),
    commands: nO(t.commands, (s) => lw(s, o)),
    resources: zl(t.resources, o),
    resourceTemplates: zl(t.resourceTemplates, o),
  };
}
class v0e {
  #e;
  constructor(t) {
    this.#e = t;
  }
  static over(t) {
    return new v0e(createFieldAccessor(t.getState, t.setState, "mcp"));
  }
  get() {
    return this.#e.get();
  }
  markNeedsAuth(t) {
    this.#e.set((o) => Hn(o, t));
  }
  adoptServer(t, o, r) {
    this.#e.set((s) => IOt({ mcp: s }, t, o, r).mcp);
  }
  swapServerTools(t, o) {
    let r = !1;
    return (
      this.#e.set((s) => {
        let l = gat({ mcp: s }, t, o);
        return ((r = l.mcp !== s), l.mcp);
      }),
      r
    );
  }
  setSuppressedClaudeAiConnectors(t) {
    this.#e.set((o) =>
      suppressedConnectorsEqual(o.suppressedClaudeAiConnectors ?? [], t)
        ? o
        : { ...o, suppressedClaudeAiConnectors: t },
    );
  }
  addPendingServers(t) {
    this.#e.set((o) => {
      let r = Kn(o, t);
      if (r.length === 0) return o;
      return { ...o, clients: [...o.clients, ...r] };
    });
  }
  reconcileConfiguredServers(t, o, r) {
    this.#e.set((s) => {
      let { stale: l, ...k } = $Kn(s, t, o);
      r(l);
      let c = Kn(k, t);
      if (c.length === 0 && l.length === 0) {
        if (s.clientsInitialized) return s;
        return { ...s, clientsInitialized: !0 };
      }
      return {
        ...s,
        ...k,
        clientsInitialized: !0,
        clients: [...k.clients, ...c],
      };
    });
  }
  applyIdentityBoundary(t, o) {
    let r = [...t, ...o];
    if (r.length === 0) return;
    this.#e.set((s) => {
      let l = r.map((c) => [c, Oa(c)]),
        k = (c) => l.some(([v, w]) => Kp(c, v, w));
      return {
        ...s,
        clients: s.clients.flatMap((c) =>
          o.has(c.name)
            ? []
            : t.has(c.name)
              ? [{ name: c.name, type: "pending", config: c.config }]
              : [c],
        ),
        tools: nO(s.tools, k),
        commands: nO(s.commands, (c) => r.some((v) => lw(c, v))),
        resources: zl(s.resources, r),
        resourceTemplates: zl(s.resourceTemplates, r),
      };
    });
  }
  applyQueuedUpdates(t, o) {
    this.#e.set((r) => {
      let s = r;
      for (let l of t) {
        if (l.epoch !== o.currentEpoch && xh(l.config)) {
          if (l.type === "connected") tt().detachAndCloseConnection(l);
          continue;
        }
        let {
            tools: k,
            commands: c,
            resources: v,
            resourceTemplates: w,
            replaceOnly: T,
            epoch: L,
            ...D
          } = l,
          O = D.type === "disabled" || D.type === "failed",
          U = O ? (k ?? []) : k,
          H = O ? (c ?? []) : c,
          W = O ? (v ?? []) : v,
          x = O ? (w ?? []) : w,
          I = Oa(D.name),
          j = s.clients.findIndex((Q) => Q.name === D.name),
          q = j !== -1 ? s.clients[j] : void 0,
          J =
            D.type === "connected" &&
            q?.type === "connected" &&
            q.client === D.client,
          K = ts(D) && mcpDialBlockCause(D.name, D.config) === "managed-policy";
        if (
          D.type !== "disabled" &&
          !J &&
          isMcpServerDisabled(D.name) &&
          !(K && q?.type !== "disabled")
        ) {
          if (K) o.onDoorDenied(D.name);
          if (D.type === "connected") Gi(D);
          if (
            (o.onOrphanedDisable(D.name),
            q && q.type !== "disabled" && (q.type !== "connected" || !ts(D)))
          )
            s = {
              ...s,
              clients: s.clients.map((Q) =>
                Q.name === D.name
                  ? { name: D.name, type: "disabled", config: D.config }
                  : Q,
              ),
              ...$n(s, D.name, I),
            };
          continue;
        }
        let Y = ts(D) ? mcpDialBlockCause(D.name, D.config) : null;
        if (Y) {
          o.onDoorDenied(D.name);
          let Q = D.config;
          if (D.type === "connected") asMcpSdkClient(D.client).onclose = void 0;
          else if (q?.type === "connected")
            ((asMcpSdkClient(q.client).onclose = void 0), (Q = q.config));
          if (
            (tt()
              .clearServerCache(D.name, Q)
              .catch(() => {}),
            j === -1)
          )
            continue;
          s = {
            ...s,
            clients: s.clients.map((ie) =>
              ie.name === D.name
                ? { name: D.name, type: "failed", config: D.config, ...getBlockedServerErrorFields(Y) }
                : ie,
            ),
            ...$n(s, D.name, I),
          };
          continue;
        }
        if (
          T &&
          j !== -1 &&
          (s.clients[j]?.type === "needs-auth" ||
            s.clients[j]?.type === "disabled")
        ) {
          if (D.type === "connected")
            ((asMcpSdkClient(D.client).onclose = void 0),
              tt()
                .clearServerCache(D.name, D.config)
                .catch(() => {}));
          continue;
        }
        if (j === -1 && T) {
          if (D.type === "connected")
            ((asMcpSdkClient(D.client).onclose = void 0),
              tt()
                .clearServerCache(D.name, D.config)
                .catch(() => {}));
          continue;
        }
        if (
          T &&
          Ws() &&
          j !== -1 &&
          getMcpServerConfigCacheKey(D.name, s.clients[j].config) !== getMcpServerConfigCacheKey(D.name, D.config)
        ) {
          if (D.type === "connected") tt().detachAndCloseConnection(D);
          continue;
        }
        if (j !== -1 && !fke(s.clients[j], D)) continue;
        let X =
            j === -1
              ? [...s.clients, D]
              : s.clients.map((Q) => (Q.name === D.name ? D : Q)),
          ee =
            U === void 0
              ? s.tools
              : [...nO(s.tools, (Q) => Q.name?.startsWith(I)), ...U],
          de =
            H === void 0
              ? s.commands
              : [...nO(s.commands, (Q) => lw(Q, D.name)), ...H],
          se =
            W === void 0
              ? s.resources
              : W.length > 0
                ? { ...s.resources, [D.name]: W }
                : zl(s.resources, D.name),
          ce =
            x === void 0
              ? s.resourceTemplates
              : x.length > 0
                ? { ...s.resourceTemplates, [D.name]: x }
                : zl(s.resourceTemplates, D.name);
        s = {
          ...s,
          clients: X,
          tools: ee,
          commands: de,
          resources: se,
          resourceTemplates: ce,
        };
      }
      return s;
    });
  }
}
function Kn(t, o) {
  let r = new Set(t.clients.map((s) => s.name));
  return Object.entries(o)
    .filter(([s]) => !r.has(s))
    .map(([s, l]) => ({
      name: s,
      type: isMcpServerDisabled(s) ? "disabled" : "pending",
      config: l,
    }));
}
F();
var jt = Qt(null);
function Je(gc) {
  let zi = _(3),
    { children: Gn } = gc,
    Vi = C(null),
    qi;
  if (zi[0] === MEMO_CACHE_SENTINEL)
    ((qi = {
      setHandler: (hc) => {
        Vi.current = hc;
      },
      tryDelete: (Sc) => Vi.current?.(Sc) ?? !1,
    }),
      (zi[0] = qi));
  else qi = zi[0];
  let yc = qi,
    Yi;
  if (zi[1] !== Gn)
    ((Yi = e(jt.Provider, { value: yc, children: Gn })),
      (zi[1] = Gn),
      (zi[2] = Yi));
  else Yi = zi[2];
  return Yi;
}
function g9e() {
  let Ji = De(jt);
  if (!Ji) {
    throw ReferenceError(
      "useInputSelectionBridge cannot be called outside of an <InputSelectionBridgeProvider /> (mounted by <AppStateProvider />)",
    );
  }
  return Ji;
}
F();
class Wt {
  queue = [];
  waiters = [];
  changed = Le();
  _revision = 0;
  get length() {
    return this.queue.length;
  }
  get revision() {
    return this._revision;
  }
  send(t) {
    this._revision++;
    let o = this.waiters.findIndex((r) => r.fn(t));
    if (o !== -1) {
      let r = this.waiters.splice(o, 1)[0];
      if (r) {
        (r.resolve(t), this.notify());
        return;
      }
    }
    (this.queue.push(t), this.notify());
  }
  poll(t = () => !0) {
    let o = this.queue.findIndex(t);
    if (o === -1) return;
    return this.queue.splice(o, 1)[0];
  }
  receive(t = () => !0) {
    let o = this.queue.findIndex(t);
    if (o !== -1) {
      let r = this.queue.splice(o, 1)[0];
      if (r) return (this.notify(), Promise.resolve(r));
    }
    return new Promise((r) => {
      this.waiters.push({ fn: t, resolve: r });
    });
  }
  subscribe = this.changed.subscribe;
  notify() {
    this.changed.emit();
  }
}
var Ut = Qt(void 0);
function Ht(xc) {
  let Qi = _(3),
    { children: Vn } = xc,
    Xi;
  if (Qi[0] === MEMO_CACHE_SENTINEL) ((Xi = new Wt()), (Qi[0] = Xi));
  else Xi = Qi[0];
  let Mc = Xi,
    Zi;
  if (Qi[1] !== Vn)
    ((Zi = e(Ut.Provider, { value: Mc, children: Vn })),
      (Qi[1] = Vn),
      (Qi[2] = Zi));
  else Zi = Qi[2];
  return Zi;
}
function Ien() {
  let es = De(Ut);
  if (!es) {
    throw Error("useMailbox must be used within a MailboxProvider");
  }
  return es;
}
F();
function tk(t) {
  return t.open.findLast((o) => !o.userInvoked) ?? null;
}
function Q8(t) {
  return t.open.findLast((o) => o.userInvoked === !0) ?? null;
}
function R0e(t, o) {
  return t.open.some((r) => r.kind === o);
}
function ho() {
  let t = createStore({ open: [] }),
    o = Le(),
    r = Number.NEGATIVE_INFINITY,
    s = new Set(),
    l = (w, T) => `${w}:${T}`,
    k = (w) => {
      for (let T of s) if (T.startsWith(`${w}:`)) s.delete(T);
    },
    c = (w) => {
      let { removed: T, closedBlockingTopBare: L } = os(t, w);
      if (!T) return !1;
      if (L) r = Date.now();
      return (k(w), !0);
    },
    v = {
      getState: t.getState,
      subscribe: t.subscribe,
      onClosed: o.subscribe,
      open(w) {
        t.setState((T) => {
          let L = tk(T),
            D = L?.holdsTop === !0 && go(L, w) && w.succeeds !== !0;
          if (
            (w.place === "under" || D) &&
            T.open.some((W) => W.userInvoked !== !0)
          )
            return { open: [w, ...T.open] };
          let O =
              T.open.some((W) => go(W, w)) ||
              (w.userInvoked !== !0 &&
                T.open.some((W) => W.userInvoked === !0)),
            U = w.userInvoked !== !0 && isRecent(r),
            H = O || U ? { ...w, shownAt: Date.now() } : w;
          return { open: [...T.open, H] };
        });
      },
      update(w, T) {
        t.setState((L) => {
          let D = L.open.findIndex((U) => U.id === w);
          if (D === -1) return L;
          let O = L.open.slice();
          return (
            (O[D] = { ...L.open[D], payload: T, shownAt: Date.now() }),
            { open: O }
          );
        });
      },
      answer(w, T) {
        if (!c(w)) return;
        o.emit({ id: w, type: "answered", result: T });
      },
      dismiss(w) {
        if (!c(w)) return;
        o.emit({ id: w, type: "dismissed" });
      },
      firstReveal(w, T) {
        if (!t.getState().open.some((D) => D.id === w)) return !1;
        let L = l(w, T);
        if (s.has(L)) return !1;
        return (s.add(L), !0);
      },
      hasRevealed(w, T) {
        return s.has(l(w, T));
      },
      dismissKind(w) {
        for (let T of t.getState().open) if (T.kind === w) v.dismiss(T.id);
      },
    };
  return v;
}
function os(t, o) {
  let r = !1,
    s = !1;
  return (
    t.setState((l) => {
      let k = l.open.find((L) => L.id === o);
      if (!k) return l;
      r = !0;
      let c = l.open.filter((L) => L !== k),
        v = l.open.filter((L) => go(L, k)),
        w = v.at(-1) === k,
        T = v.at(-2);
      if (((s = w && !T && k.userInvoked !== !0), !w || !T)) return { open: c };
      return {
        open: c.map((L) =>
          L === T
            ? { ...T, shownAt: Date.now(), revealSeq: (T.revealSeq ?? 0) + 1 }
            : L,
        ),
      };
    }),
    { removed: r, closedBlockingTopBare: s }
  );
}
function go(t, o) {
  return (t.userInvoked === !0) === (o.userInvoked === !0);
}
var Uye = Qt(null);
function Cc() {
  let t = De(Uye);
  if (!t)
    throw ReferenceError(
      "useDialogStore cannot be called outside of a DialogStoreContext provider (mounted by <AppStateProvider />)",
    );
  return t;
}
function Bye() {
  let t = Cc(),
    o = () => t.getState().open.length > 0;
  return At(t.subscribe, o, o);
}
function Z8() {
  let t = Cc(),
    o = () => tk(t.getState()) !== null;
  return At(t.subscribe, o, o);
}
function qb(t) {
  let o = Cc(),
    r = () => R0e(o.getState(), t);
  return At(o.subscribe, r, r);
}
function h9e() {
  let t = Cc(),
    o = () => Q8(t.getState());
  return At(t.subscribe, o, o);
}
function UUn() {
  let t = Cc(),
    o = () => tk(t.getState());
  return At(t.subscribe, o, o);
}
function Pen(t) {
  let o = Cc(),
    r = () => POt(tk(o.getState()), t);
  return At(o.subscribe, r, r);
}
function POt(t, o) {
  return t?.hideWhile?.includes(o) === !0;
}
function hat() {
  let t = Cc(),
    o = () => tk(t.getState())?.kind;
  return At(t.subscribe, o, o);
}
function sF(t) {
  let o = Cc(),
    r = () => t(o.getState());
  return At(o.subscribe, r, r);
}
F();
function wle(t) {
  let o = vr(t);
  E(
    () =>
      kl.subscribe((r, s) => {
        let l = getSettings_DEPRECATED();
        o(r, l, s);
      }),
    [],
  );
}
function ns(t) {
  let { bySlug: o } = drainUnattendedReplies();
  if (o.size === 0) return t;
  return t.map((r) => {
    let s = Math.min((o.get(r.slug) ?? 0) + (r.unattendedReplies ?? 0), MAX_UNATTENDED_REPLIES);
    return s > 0 ? { ...r, unattendedReplies: s } : r;
  });
}
var rs = 2000,
  zn = "exit-handoff agent flush timeout";
function qn() {
  let t = worktreeStateStore.of(B().host).last;
  return [
    ...(Jh()?.adoptShellOutputReadRoot ? [Jh().adoptShellOutputReadRoot] : []),
    ...(t ? [ZYe(iEt(t.worktreePath))] : []),
  ];
}
function Yn(t) {
  let o = isActingAsBgJob() ? getBgJobDir() : void 0;
  if (!o || a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF) {
    if (o) {
      let O = ne().live;
      if ((drainUnresumedFrameLive(o), O.bootingWiredArms.size > 0))
        logFeatureSad("artifact_live_subscribe", "booting_consent_uncarried");
      disposeSupervisors(O.inFlightSubscribes);
    }
    return {
      shells: [],
      workflows: [],
      agents: [],
      unresumedAgents: [],
      unresumedWorkflows: [],
      frameLive: [],
      frameLiveTaskIds: [],
      jobDir: void 0,
      agentTranscriptPaths: {},
      workflowTranscriptDirs: {},
      projectTempDir: Jh()?.adoptShellOutputRoot ?? bR(),
      mergeShellOutputReadRoots: qn(),
    };
  }
  let r = computeAdoptability(t),
    s = Object.values(t),
    l = s.filter((O) => isAdoptableWorkflowTask(O, r)),
    k = s.filter((O) => isAdoptableAgentTask(O, r)),
    c = drainUnresumedAdopt(o),
    v = (O) => !ne().autoReact.userDisarmed && !Xp(O.slug),
    w = drainUnresumedFrameLive(o),
    T = ns(
      dedupFrameLiveNewest([
        { entries: collectFrameLiveConsent(t), fallbackBasis: Date.now() },
        { entries: w.filter(v), fallbackBasis: Date.now() },
        { entries: takeExitRetryFrameLive(o).filter(v), fallbackBasis: Date.now() },
      ]),
    ),
    L = new Set(T.map((O) => O.slug)),
    D = ne().live;
  if ([...D.bootingWiredArms.keys()].some((O) => !L.has(O)))
    logFeatureSad("artifact_live_subscribe", "booting_consent_uncarried");
  return (
    disposeSupervisors(new Set([...L, ...D.inFlightSubscribes])),
    {
      shells: s.filter((O) => isAdoptableShellTask(O, r) && O.agentId === void 0),
      workflows: l,
      agents: k,
      unresumedAgents: c.agents,
      unresumedWorkflows: c.workflows,
      frameLive: T,
      frameLiveTaskIds: Object.values(t)
        .filter(
          (O) => isCarriedFrameLiveWatch(O) && O.frameLive !== void 0 && L.has(O.frameLive.slug),
        )
        .map((O) => O.id),
      jobDir: o,
      agentTranscriptPaths: Object.fromEntries(
        k.map((O) => [O.agentId, getAgentTranscriptPath(oo(O.agentId))]),
      ),
      workflowTranscriptDirs: Object.fromEntries(
        l.map((O) => [O.workflowRunId, getWorkflowTranscriptDir(O.workflowRunId)]),
      ),
      projectTempDir: Jh()?.adoptShellOutputRoot ?? bR(),
      mergeShellOutputReadRoots: qn(),
    }
  );
}
function Qn(
  {
    shells: t,
    workflows: o,
    agents: r,
    unresumedAgents: s,
    unresumedWorkflows: l,
    frameLive: k,
    jobDir: c,
    agentTranscriptPaths: v,
    workflowTranscriptDirs: w,
    projectTempDir: T,
    mergeShellOutputReadRoots: L,
  },
  D,
) {
  for (let U of o) U.abortController?.abort(userAbortReason("background"));
  for (let U of r) U.abortController?.abort(userAbortReason("background"));
  let O = (async () => {
    let U = [];
    if (r.length > 0) {
      try {
        await withTimeout(
          (async () => {
            (await OP(), await flushSessionStorage());
          })(),
          rs,
          zn,
        );
      } catch (x) {
        let I = x instanceof Error && x.message === zn;
        (logFeatureSad(
          "task_local_agent_exit_handoff",
          I ? "flush_timeout" : "flush_failed",
        ),
          n(`exit handoff: agent transcript flush failed: ${x}`, {
            level: "warn",
          }));
      }
      U = await Promise.all(
        r.map((x) => serializeAdoptAgent(x, { derivedTranscriptPath: v[x.agentId] })),
      );
    }
    U.push(...s);
    let H = (
        await Promise.all(t.map((x) => detachAndSerializeShell(x, { rerootOutputsTo: T })))
      ).filter((x) => x !== null),
      W = [
        ...(await Promise.all(
          o.map((x) => serializeAdoptWorkflow(x, { derivedTranscriptDir: w[x.workflowRunId] })),
        )),
        ...l,
      ];
    if (
      (H.length === 0 && W.length === 0 && U.length === 0 && k.length === 0) ||
      !c
    )
      return;
    try {
      if (
        (await writeAdoptJson(
          c,
          {
            writtenAtMs: Date.now(),
            origin: "exit",
            shells: H,
            cron: [],
            workflows: W,
            agents: U,
            ...(k.length > 0 && { frameLive: k }),
          },
          { mergeShellOutputRoot: [T, ...(L ?? [])] },
          D,
        ),
        logEvent("tengu_adopt_exit_handoff", {
          adopted_shells: H.length,
          adopted_workflows: W.length,
          adopted_agents: U.length,
          adopted_frame_live: k.length,
        }),
        H.length > 0)
      )
        logFeatureOk("task_local_shell_exit_handoff");
      if (W.length > 0) logFeatureOk("task_local_workflow_exit_handoff");
      if (U.length > 0) logFeatureOk("task_local_agent_exit_handoff");
      n(
        `exit handoff: ${H.length} background shell(s), ${W.length} workflow(s), ${U.length} agent(s), and ${k.length} comment-monitoring consent record(s) handed to the next wake of this session`,
      );
    } catch (x) {
      for (let I of t)
        try {
          I.shellCommand?.kill();
        } catch {}
      if (t.length > 0) logFeatureBad("task_local_shell_exit_handoff", "write_failed");
      if (o.length > 0) logFeatureBad("task_local_workflow_exit_handoff", "write_failed");
      if (U.length > 0) logFeatureBad("task_local_agent_exit_handoff", "write_failed");
      if (k.length > 0 && c !== void 0)
        (recordExitRetryFrameLive(c, k), logFeatureBad("artifact_live_subscribe", "consent_exit_write_failed"));
      n(`exit handoff: adopt.json write failed: ${x}`, { level: "warn" });
    }
  })();
  return (qGn(O), O);
}
function wat(t, o) {
  let r = Yn(t),
    s =
      r.shells.length > 0 ||
      r.workflows.length > 0 ||
      r.agents.length > 0 ||
      r.unresumedAgents.length > 0 ||
      r.unresumedWorkflows.length > 0 ||
      r.frameLive.length > 0
        ? Qn(r, o)
        : void 0,
    l = new Set([...r.shells, ...r.workflows, ...r.agents].map((k) => k.id));
  return ($t(t, l), s);
}
function $t(t, o = new Set()) {
  for (let r of Object.values(t)) {
    if (r.status !== "running" || o.has(r.id)) continue;
    try {
      if (bp(r)) (r.shellCommand?.kill(), r.shellCommand?.cleanup());
      else if (isExiting()) {
        evictTaskOutput(r.id);
        continue;
      } else if ("abortController" in r) r.abortController?.abort();
      if (!td(r))
        pi(r.id, "stopped", {
          toolUseId: r.toolUseId,
          summary: r.description,
          ambient: u3(r),
        });
      evictTaskOutput(r.id);
    } catch (s) {
      logError(s);
    }
  }
}
function Tat(t) {
  return sc((o, r, s) => {
    if (!s) return;
    (is(s, t),
      logEvent("tengu_refusal_fallback_latch_reset", {
        source: fromEnum(r),
        restored_to_explicit_override: s.restoredToExplicitOverride,
        model_scope: fromEnum(FF(s.fallbackModel)),
      }));
  });
}
function WUn(t) {
  return sc((o, r, s) => {
    if (s) t();
  });
}
function is(t, o) {
  let r, s;
  if (
    (o((l) => {
      let k = t.overrideValue ?? t.forSessionValue ?? t.appStateModel,
        c = Mr() ? db(k, l.fastMode) : !!l.fastMode;
      return (
        (r = l.fastMode),
        (s = c),
        l.mainLoopModel === t.appStateModel &&
        l.mainLoopModelForSession === t.forSessionValue &&
        c === !!l.fastMode
          ? l
          : {
              ...l,
              mainLoopModel: t.appStateModel,
              mainLoopModelForSession: t.forSessionValue,
              fastMode: c,
            }
      );
    }),
    s !== void 0)
  )
    pb(r, s);
  ad(t.overrideValue);
}
import { resolve } from "path";
var rtn = new Gt(() => Le());
function Eat(t, o, r, s, l) {
  let k = getInitialSettings();
  (n(`Settings changed from ${o}, updating app state`), pge());
  let c = OG();
  (updateHooksConfigSnapshot({ userLayer: "retain" }), clearCommandMemoizationCaches());
  let v = !1;
  if (
    (r((w) => {
      let T = syncPermissionRulesFromDisk(w.toolPermissionContext, c);
      T = stn(
        T,
        w.settings.permissions?.additionalDirectories,
        tme(),
        o,
        l?.trustFlip === !0,
        l?.prevCwd,
        s,
      );
      let L = otn(T, c);
      if (
        ((T = L.context),
        (v = L.exitedAutoMode),
        T.blockReadsOutsideWorkingDirectories !== !0 && tVe())
      )
        T = { ...T, blockReadsOutsideWorkingDirectories: !0 };
      let D = isAwaySummaryEnabled();
      if (
        w.settings.effortLevel !== k.effortLevel ||
        b(w.settings.modelSettings) !== b(k.modelSettings)
      )
        iA(s);
      return {
        ...w,
        settings: k,
        toolPermissionContext: T,
        ...(w.awaySummaryEnabled !== D && { awaySummaryEnabled: D }),
      };
    }),
    v)
  )
    rtn.of(t).emit();
}
function Aat(t) {
  if (hasPolicySettingsNotified()) t();
}
function otn(t, o) {
  let r = t;
  if (r.isBypassPermissionsModeAvailable && isBypassPermissionsModeDisabled()) r = createDisabledBypassPermissionsContext(r);
  if (r.strippedDangerousRules !== void 0) {
    let l = new Set(yi),
      k = !iP(),
      c = {};
    for (let [v, w] of Object.entries(r.strippedDangerousRules))
      if (w && (k || v === "command") && !l.has(v)) c[v] = [...w];
    r = { ...r, strippedDangerousRules: c };
  }
  let s = !isAdminPolicyUnreadable() && isAutoModeInUse(r) && isAutoModeDisabledByPolicySettings();
  if (s) r = createDisabledAutoModeContext(r);
  return { context: transitionPlanAutoMode(r), exitedAutoMode: s };
}
function stn(t, o, r, s, l = !1, k, c) {
  let v = new Set((o ?? []).flatMap((I) => rt(I, k))),
    w = new Set((r ?? []).flatMap((I) => rt(I))),
    T = t.additionalWorkingDirectories,
    L = [...v].filter((I) => !w.has(I) && !Kt(T.get(I)?.source)),
    D = [...w].filter(
      (I) => (!v.has(I) || (l && !T.has(I))) && !Kt(T.get(I)?.source),
    ),
    { declared: O, repoOnly: U } = rEt((I) => [...rt(I, he()), ...rt(I)], c),
    H = (I) => (U.has(I) ? "projectSettings" : "localSettings"),
    W = [...T.entries()].filter(
      ([I, j]) =>
        !Kt(j.source) && !L.includes(I) && O.has(I) && j.source !== H(I),
    );
  if (
    L.length === 0 &&
    D.length === 0 &&
    W.length === 0 &&
    s !== "flagSettings"
  )
    return t;
  let x = t;
  if (W.length > 0) {
    let I = new Map(T);
    for (let [j, q] of W) I.set(j, { ...q, source: H(j) });
    x = { ...x, additionalWorkingDirectories: I };
  }
  if (s === "flagSettings") {
    let I = new Set(
        (getSettingsForSource("flagSettings")?.permissions?.additionalDirectories ?? []).flatMap(
          (J) => rt(J),
        ),
      ),
      j = new Map(x.trustedNetworkDirectories ?? []),
      q = !1;
    for (let J of [...j.keys()])
      if (!I.has(J) && T.get(J)?.source !== "cliArg") {
        for (let K of j.get(J) ?? []) if (K !== J) L.push(K);
        (j.delete(J), (q = !0));
      }
    if (addDirsAreLauncherNamed()) {
      for (let J of I)
        if (!j.has(J)) {
          if (Wur(J)) continue;
          let K = L6t(J);
          if (K.length > 0) {
            j.set(J, K);
            for (let Y of K) if (Y !== J) D.push(Y);
            q = !0;
          }
        }
    }
    if (q) x = { ...x, trustedNetworkDirectories: j };
  }
  if (L.length > 0)
    x = Oc(x, {
      type: "removeDirectories",
      directories: L,
      destination: "localSettings",
    });
  if (D.length > 0)
    for (let I of ["projectSettings", "localSettings"]) {
      let j = D.filter((q) => H(q) === I);
      if (j.length > 0)
        x = Oc(x, { type: "addDirectories", directories: j, destination: I });
    }
  return x;
}
function Cat(t, o) {
  let r = new Set(tme().flatMap((k) => rt(k))),
    s = t.additionalWorkingDirectories,
    l = o.filter((k) => {
      let c = s.get(k);
      return c !== void 0 && !r.has(k) && !Kt(c.source);
    });
  if (l.length === 0) return t;
  return Oc(t, {
    type: "removeDirectories",
    directories: l,
    destination: "localSettings",
  });
}
function Kt(t) {
  return t === "cliArg" || t === "command" || t === "session";
}
function as(t, o) {
  return resolve(ot(t, o));
}
function rt(t, o) {
  try {
    return [as(t, o)];
  } catch {
    return [];
  }
}
F();
var Vt = Qt(null);
function VB() {
  let t = De(Vt);
  if (!t)
    throw ReferenceError(
      "useSessionHooksRegistry cannot be called outside of an <AppStateProvider />",
    );
  return t;
}
function Fs(pr) {
  return pr.expandedView === "tasks" ? { ...pr, expandedView: "none" } : pr;
}
var zt = Qt(!1),
  Fe = null;
function qt(jp) {
  let te = _(83),
    {
      children: So,
      initialState: Xn,
      onChangeAppState: Zn,
      fleetNudgeStore: er,
      writesExitHandoff: ls,
      sessionHooks: tr,
    } = jp,
    Wp = ls === void 0 ? !1 : ls;
  if (De(zt)) {
    throw Error(
      "AppStateProvider can not be nested within another AppStateProvider",
    );
  }
  let ds;
  if (te[0] !== Xn || te[1] !== Zn)
    ((ds = () => createStore(Xn ?? getDefaultAppState(), Zn)),
      (te[0] = Xn),
      (te[1] = Zn),
      (te[2] = ds));
  else ds = te[2];
  let [oe] = d(ds),
    cs;
  if (te[3] !== tr) ((cs = () => tr ?? T2()), (te[3] = tr), (te[4] = cs));
  else cs = te[4];
  let [or] = d(cs),
    [ir] = d(ho),
    [sr] = d(createSpinnerStore),
    { storageV5: be } = useStorageV5Context(),
    fe = useSession(),
    us;
  if (te[5] !== be || te[6] !== oe)
    ((us = () => new TasksV2Store(be, globalThis, () => oe.setState(Fs))),
      (te[5] = be),
      (te[6] = oe),
      (te[7] = us));
  else us = te[7];
  let [ar] = d(us),
    ps;
  if (te[8] !== er || te[9] !== be)
    ((ps = () => er ?? new FleetNudgeStore({ storageV5: be })),
      (te[8] = er),
      (te[9] = be),
      (te[10] = ps));
  else ps = te[10];
  let [dr] = d(ps),
    fs;
  if (te[11] !== be)
    ((fs = () => (Fe ? new Fe.SessionRosterStore({ storageV5: be }) : null)),
      (te[11] = be),
      (te[12] = fs));
  else fs = te[12];
  let [yo] = d(fs),
    [ko] = d(Wp),
    [wo] = d(be),
    ms,
    gs;
  if (te[13] !== wo || te[14] !== oe || te[15] !== ko)
    ((ms = () => {
      let hs = ko
        ? () => wat(oe.getState().tasks, wo)
        : () => $t(oe.getState().tasks);
      let Up = Et(hs);
      return () => {
        (hs(), Up());
      };
    }),
      (gs = [oe, ko, wo]),
      (te[13] = wo),
      (te[14] = oe),
      (te[15] = ko),
      (te[16] = ms),
      (te[17] = gs));
  else ((ms = te[16]), (gs = te[17]));
  E(ms, gs);
  let Ss;
  if (te[18] !== oe) ((Ss = () => v0e.over(oe)), (te[18] = oe), (te[19] = Ss));
  else Ss = te[19];
  let [ue] = d(Ss),
    ys;
  if (te[20] !== oe) ((ys = () => PluginStateStore.over(oe)), (te[20] = oe), (te[21] = ys));
  else ys = te[21];
  let [ur] = d(ys),
    ks;
  if (te[22] !== ue || te[23] !== fe.mcpSessionWiring)
    ((ks = () => fe.mcpSessionWiring.acquireConnections(ue)),
      (te[22] = ue),
      (te[23] = fe.mcpSessionWiring),
      (te[24] = ks));
  else ks = te[24];
  let ws;
  if (te[25] !== ue || te[26] !== fe)
    ((ws = [fe, ue]), (te[25] = ue), (te[26] = fe), (te[27] = ws));
  else ws = te[27];
  E(ks, ws);
  let bs;
  if (te[28] !== oe) ((bs = () => ComputerUseMcpStateStore.over(oe)), (te[28] = oe), (te[29] = bs));
  else bs = te[29];
  let [bo] = d(bs),
    vs,
    As;
  if (te[30] !== bo || te[31] !== fe)
    ((vs = () => ComputerUseLockOwnerContext.of(fe).acquire(bo)),
      (As = [fe, bo]),
      (te[30] = bo),
      (te[31] = fe),
      (te[32] = vs),
      (te[33] = As));
  else ((vs = te[32]), (As = te[33]));
  E(vs, As);
  let Ts, Rs;
  if (te[34] !== ue)
    ((Ts = () => _Yt(() => ue.get().clients)),
      (Rs = [ue]),
      (te[34] = ue),
      (te[35] = Ts),
      (te[36] = Rs));
  else ((Ts = te[35]), (Rs = te[36]));
  E(Ts, Rs);
  let Ps, Cs;
  if (te[37] !== ue)
    ((Ps = () => yYt((Hp, $p) => ue.swapServerTools(Hp, $p))),
      (Cs = [ue]),
      (te[37] = ue),
      (te[38] = Ps),
      (te[39] = Cs));
  else ((Ps = te[38]), (Cs = te[39]));
  E(Ps, Cs);
  let _s;
  if (te[40] !== oe.setState)
    ((_s = () => Tat(oe.setState)), (te[40] = oe.setState), (te[41] = _s));
  else _s = te[41];
  let xs;
  if (te[42] !== oe) ((xs = [oe]), (te[42] = oe), (te[43] = xs));
  else xs = te[43];
  E(_s, xs);
  let Ms;
  if (te[44] !== fe || te[45] !== be || te[46] !== oe.setState)
    ((Ms = (Gp, _settings, Vp) => Eat(fe, Gp, oe.setState, be, Vp)),
      (te[44] = fe),
      (te[45] = be),
      (te[46] = oe.setState),
      (te[47] = Ms));
  else Ms = te[47];
  let vo = vr(Ms);
  wle(vo);
  let Es;
  if (te[48] !== vo)
    ((Es = () => {
      Aat(() => vo("policySettings"));
    }),
      (te[48] = vo),
      (te[49] = Es));
  else Es = te[49];
  let Ds;
  if (te[50] === MEMO_CACHE_SENTINEL) ((Ds = []), (te[50] = Ds));
  else Ds = te[50];
  E(Es, Ds);
  let Ao;
  if (te[51] !== So || te[52] !== yo)
    ((Ao =
      Fe && yo
        ? e(Fe.SessionRosterStoreContext.Provider, { value: yo, children: So })
        : So),
      (te[51] = So),
      (te[52] = yo),
      (te[53] = Ao));
  else Ao = te[53];
  let To;
  if (te[54] !== Ao)
    ((To = e(Ne, { children: e(Je, { children: Ao }) })),
      (te[54] = Ao),
      (te[55] = To));
  else To = te[55];
  let Ro;
  if (te[56] !== dr || te[57] !== To)
    ((Ro = e(FleetNudgeStoreContext.Provider, { value: dr, children: To })),
      (te[56] = dr),
      (te[57] = To),
      (te[58] = Ro));
  else Ro = te[58];
  let Po;
  if (te[59] !== Ro || te[60] !== ar)
    ((Po = e(TasksV2StoreContext.Provider, { value: ar, children: Ro })),
      (te[59] = Ro),
      (te[60] = ar),
      (te[61] = Po));
  else Po = te[61];
  let Co;
  if (te[62] !== sr || te[63] !== Po)
    ((Co = e(SpinnerStoreContext.Provider, { value: sr, children: Po })),
      (te[62] = sr),
      (te[63] = Po),
      (te[64] = Co));
  else Co = te[64];
  let _o;
  if (te[65] !== ir || te[66] !== Co)
    ((_o = e(Ht, {
      children: e(VoiceProvider, {
        children: e(Uye.Provider, { value: ir, children: Co }),
      }),
    })),
      (te[65] = ir),
      (te[66] = Co),
      (te[67] = _o));
  else _o = te[67];
  let xo;
  if (te[68] !== or || te[69] !== _o)
    ((xo = e(Vt.Provider, { value: or, children: _o })),
      (te[68] = or),
      (te[69] = _o),
      (te[70] = xo));
  else xo = te[70];
  let Mo;
  if (te[71] !== fe || te[72] !== xo)
    ((Mo = e(AppStateSessionContext.Provider, { value: fe, children: xo })),
      (te[71] = fe),
      (te[72] = xo),
      (te[73] = Mo));
  else Mo = te[73];
  let Eo;
  if (te[74] !== ur || te[75] !== Mo)
    ((Eo = e(ActivePluginsContext.Provider, { value: ur, children: Mo })),
      (te[74] = ur),
      (te[75] = Mo),
      (te[76] = Eo));
  else Eo = te[76];
  let Do;
  if (te[77] !== ue || te[78] !== Eo)
    ((Do = e(McpConnectionsContext.Provider, { value: ue, children: Eo })),
      (te[77] = ue),
      (te[78] = Eo),
      (te[79] = Do));
  else Do = te[79];
  let Is;
  if (te[80] !== oe || te[81] !== Do)
    ((Is = e(zt.Provider, {
      value: !0,
      children: e(AppStateContext.Provider, { value: oe, children: Do }),
    })),
      (te[80] = oe),
      (te[81] = Do),
      (te[82] = Is));
  else Is = te[82];
  return Is;
}
function AppRoot(ff) {
  let Oe = _(29),
    {
      session: fr,
      storageV5: Fo,
      messageQueue: Lo,
      initialState: mr,
      onChangeAppState: gr,
      fleetNudgeStore: hr,
      sessionHooks: Sr,
      writesExitHandoff: yr,
      getFpsMetrics: kr,
      stats: wr,
      keybindings: Ls,
      children: Oo,
    } = ff,
    br = Ls === void 0 ? !0 : Ls,
    Os;
  if (Oe[0] !== Fo) ((Os = sessionServicesFor(Fo)), (Oe[0] = Fo), (Oe[1] = Os));
  else Os = Oe[1];
  let Ar = Os,
    No;
  if (Oe[2] !== Oo || Oe[3] !== br)
    ((No = br ? e(ble, { children: Oo }) : Oo),
      (Oe[2] = Oo),
      (Oe[3] = br),
      (Oe[4] = No));
  else No = Oe[4];
  let Bo;
  if (Oe[5] !== No)
    ((Bo = e(NotificationProvider, { children: e(Ne, { children: e(Je, { children: No }) }) })),
      (Oe[5] = No),
      (Oe[6] = Bo));
  else Bo = Oe[6];
  let jo;
  if (
    Oe[7] !== hr ||
    Oe[8] !== mr ||
    Oe[9] !== gr ||
    Oe[10] !== Sr ||
    Oe[11] !== Bo ||
    Oe[12] !== yr
  )
    ((jo = e(qt, {
      initialState: mr,
      onChangeAppState: gr,
      fleetNudgeStore: hr,
      sessionHooks: Sr,
      writesExitHandoff: yr,
      children: Bo,
    })),
      (Oe[7] = hr),
      (Oe[8] = mr),
      (Oe[9] = gr),
      (Oe[10] = Sr),
      (Oe[11] = Bo),
      (Oe[12] = yr),
      (Oe[13] = jo));
  else jo = Oe[13];
  let Wo;
  if (Oe[14] !== fr || Oe[15] !== jo)
    ((Wo = e(SessionProvider, { session: fr, children: jo })),
      (Oe[14] = fr),
      (Oe[15] = jo),
      (Oe[16] = Wo));
  else Wo = Oe[16];
  let Ho;
  if (Oe[17] !== wr || Oe[18] !== Wo)
    ((Ho = e(Ct, { store: wr, children: Wo })),
      (Oe[17] = wr),
      (Oe[18] = Wo),
      (Oe[19] = Ho));
  else Ho = Oe[19];
  let Ns;
  if (Oe[20] !== kr || Oe[21] !== Ho)
    ((Ns = e(Rt, { getFpsMetrics: kr, children: Ho })),
      (Oe[20] = kr),
      (Oe[21] = Ho),
      (Oe[22] = Ns));
  else Ns = Oe[22];
  let $o = Ns,
    Bs;
  if (Oe[23] !== Lo || Oe[24] !== $o)
    ((Bs = Lo === void 0 ? $o : e(CommandQueueProvider, { queue: Lo, children: $o })),
      (Oe[23] = Lo),
      (Oe[24] = $o),
      (Oe[25] = Bs));
  else Bs = Oe[25];
  let Ko = Bs;
  if (Fo === void 0) {
    return Ko;
  }
  let js;
  if (Oe[26] !== Ko || Oe[27] !== Ar)
    ((js = e(StorageV5ContextProvider, { ...Ar, children: Ko })),
      (Oe[26] = Ko),
      (Oe[27] = Ar),
      (Oe[28] = js));
  else js = Oe[28];
  return js;
}
export {
  J8,
  xOt,
  HOt,
  ble,
  nO,
  IOt,
  FUn,
  gat,
  $Un,
  v0e,
  g9e,
  Ien,
  tk,
  Q8,
  R0e,
  Uye,
  Cc,
  Bye,
  Z8,
  qb,
  h9e,
  UUn,
  Pen,
  POt,
  hat,
  sF,
  wle,
  FleetNudgeStore,
  ensureFleetNudgeStore,
  FleetNudgeStoreContext,
  useFleetNudgeStore,
  STALE_THRESHOLD_MS,
  CLOCK_SKEW_ALLOWANCE_MS,
  TAKEOVER_ADOPT_WAIT_MS,
  detachAndSerializeShell,
  serializeAdoptAgent,
  serializeAdoptWorkflow,
  isCarriedFrameLiveWatch,
  carriedFrameLiveSlugs,
  collectFrameLiveConsent,
  serializeAdoptable,
  dedupFrameLiveNewest,
  writeAdoptJson,
  readAndConsumeAdoptJson,
  recordUnresumedAdopt,
  takeUnresumedAdopt,
  drainUnresumedAdopt,
  recordUnresumedFrameLive,
  takeUnresumedFrameLive,
  drainUnresumedFrameLive,
  reparkUnresumedFrameLive,
  releaseReparkedFrameLive,
  recordExitRetryFrameLive,
  takeExitRetryFrameLive,
  linkAdoptedAgentTranscript,
  relinkAdoptedAgentSymlinks,
  killOrphanedAdoptedShell,
  linkAdoptedWorkflowDir,
  emitAdoptWorkflowFailed,
  resolveAdoptedScriptPath,
  mcpSettledForAdopt,
  classifyAdoptLinkFailure,
  emitAdoptAgentFailed,
  adoptCron,
  computeAdoptability,
  isAdoptableShellTask,
  isAdoptableCron,
  isAdoptableAgentTask,
  isAdoptableWorkflowTask,
  isAdoptableTask,
  countAdoptable,
  countAbandonable,
  countLiveWorkflowAgents,
  leftArrowNeedsInterstitial,
  countCarriedSince,
  carriesTasks,
  adoptedCounts,
  wat,
  Tat,
  WUn,
  rtn,
  Eat,
  Aat,
  otn,
  stn,
  Cat,
  VB,
  aF,
  EMPTY_PROJECTS_SELF_IDENTITY,
  getDefaultAppState,
  AppRoot,
};
