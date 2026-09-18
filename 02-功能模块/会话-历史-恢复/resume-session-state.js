// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  identity as _m,
  Xn,
  j,
  Gt,
  K,
  $p,
  he,
  ES,
  Ec,
  KR,
  ad,
  vxe,
  uje,
  PW,
  yHt,
} from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { An, my, gp, pl, li, $m, jf, Xo, FW } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import {
  isModelRetiredOrRemapped,
  isModelAllowed,
  getUserSpecifiedModelSetting,
  isModeDependentModelSetting,
  isEnvDefaultModelGoverning,
  isExemptDefaultResolvingPick,
  getCanonicalName,
  parseUserSpecifiedModel,
  hasLongContextSuffix,
  supports1mContextBeta,
  getCurrentWorktreeSession,
  isPathPersistedTrusted,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { unwrapResult, hasNetworkPathSpelling, hasUnverifiableAncestry, resolveSymlinkAncestrySync, fsSurface, changeWorkingDirectory, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getCwd } from "../../01-核心基础设施/核心工具-未归类/cwd-context.js";
import { reanchorGitFileWatcher, clearIsGitMemo } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { getProjectDir } from "./chunk-mkmy4cx2.js";
import { replaceControlChars } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { parsePermissionMode } from "../权限系统/chunk-e4pfvp7x.js";
import { stripLongContextTags, FIRST_PARTY_MODEL_IDS, usesFirstPartyModelIds } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { getProjectsDir, getProjectKeyFromDir } from "../Teammates团队/transcript-paths.js";
import { worktreeStateStore } from "../../01-核心基础设施/核心工具-未归类/worktree-state-store.js";
import {
  resetPromptStateAfterInvalidation,
  createSessionHookRegistry,
  restoreCostStateFromRecord,
  isTrustedAgentOrigin,
  warnUntrustedAgentOrigin,
  findAgentByType,
  rebuildAgentDefinitions,
  getAgentDefinitionsWithOverrides,
  fileHistoryRestoreStateFromLog,
  setSessionCwd,
  todoItemsSchema,
  logResumeInterruptedTurn,
  removeInterruptedMessage,
  evaluateWorktreePinSync,
  stripControlCharacters,
  comparePathIdentity,
  resolveGitRootCandidates,
  restoreWorktreeSession,
  hasAgentFrontmatterHooks,
  initialRealCwd,
  isSameRealPath,
  getRequiredCoverageRoots,
  getCoverageWitnessRoots,
  isPathCoveringAllRoots,
  createSystemInfoMessage,
  isTranscriptPersistenceDisabled,
  recordContentReplacement,
  resetSessionFilePointer,
  adoptResumedSessionFile,
  adoptResumedSessionFileAsync,
  adoptForkSessionMetadata,
  restoreSessionMetadata,
  saveMode,
  saveWorktreeState,
  clearCurrentSessionMemoryFiles,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { SYNTHETIC_MODEL_NAME, isUserDrivenOrUnstampedOrigin } from "../远程控制-Bridge/chunk-5ne99rq3.js";
import { getReplBridgeHandle } from "../权限系统/chunk-1y2g140m.js";
import { isRestrictedToPluginOnly, isSourceAdminTrusted } from "../Skills技能/chunk-sapykxw7.js";
import { isEapModelId } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { areTasksEnabled } from "../Teammates团队/chunk-g6nvp9mm.js";
import { TODO_WRITE_TOOL_NAME } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { primePlanSlugCollisions, getPlansDirectory } from "../计划模式-Plan/计划模式-Plan.e5mh1avy.js";
import { getHostStateStore } from "../../01-核心基础设施/文件存储-原子写入/host-state-store.js";
import { resolveSessionAdoption } from "../后台任务-Shell管理/task-output.js";
import { reclaimSessionNameOnResume } from "../跨会话消息-UDS/chunk-9kzxq41e.js";
import { CLAUDE_AGENT } from "../../01-核心基础设施/核心工具-未归类/chunk-kyy28ene.js";
import { dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import {
  appendFile,
  readdir,
  rename,
  rmdir,
} from "fs/promises";
import { basename, dirname, join, relative } from "path";
class H {
  filePath = null;
  key = void 0;
  timestamp = 0;
  recorder = null;
  failed = !1;
  setFile(e, o, t) {
    ((this.filePath = e), (this.key = t), (this.timestamp = o));
  }
  setFilePath(e, o) {
    ((this.filePath = e), (this.key = o));
  }
  setRecorder(e) {
    this.recorder = e;
  }
  markFailed() {
    this.failed = !0;
  }
}
function ne(e, o, t) {
  return {
    namespace: "recording",
    projectKey: e,
    sessionId: o,
    stamp: String(t),
  };
}
var ie = new Gt(() => new H());
async function renameRecordingForSession(e, o) {
  let t = ie.of(e),
    r = t.filePath;
  if (!r || t.timestamp === 0) return;
  let s = getProjectDir(he()),
    d = t.key,
    l = getProjectKeyFromDir(s);
  if (isHoverRestEnabled() && o !== void 0 && d !== void 0 && l !== void 0) {
    if (t.failed) return;
    let k = K(),
      y = join(s, k, `${t.timestamp}.cast`);
    if (r === y) return;
    let v = ne(l, k, t.timestamp),
      w = relative(s, r),
      P = relative(s, y),
      R = async () => {
        if (t.failed) return;
        try {
          (await se(o, d, v),
            t.setFilePath(y, v),
            logForDebugging(`[asciicast] Renamed recording: ${w} \u2192 ${P}`));
        } catch {
          logForDebugging(`[asciicast] Failed to rename recording from ${w} to ${P}`);
        }
      };
    await (t.recorder?.park(R) ?? R());
    return;
  }
  let c = join(s, `${K()}-${t.timestamp}.cast`);
  if (r === c) return;
  await t.recorder?.flush();
  let m = basename(r),
    h = basename(c);
  try {
    (await rename(r, c),
      t.setFilePath(c),
      logForDebugging(`[asciicast] Renamed recording: ${m} \u2192 ${h}`));
  } catch {
    logForDebugging(`[asciicast] Failed to rename recording from ${m} to ${h}`);
  }
}
async function se(e, o, t) {
  (unwrapResult(await e.move(o, t)),
    await rmdir(join(getProjectsDir(), o.projectKey, o.sessionId)).catch(() => {}));
}
import { resolve, win32 } from "path";
import { realpathSync, statSync } from "fs";
function applyAgentFrontmatterHooks(e) {
  if (!e || !hasAgentFrontmatterHooks(e.hooks)) {
    yHt(void 0);
    return;
  }
  let o = !isRestrictedToPluginOnly("hooks") || isSourceAdminTrusted(e.source),
    t = isTrustedAgentOrigin(e);
  if (o && t) {
    yHt(e.hooks);
    return;
  }
  if (o && !t) warnUntrustedAgentOrigin(e, "mainThread");
  yHt(void 0);
}
class U {
  restored = !1;
  markRestored() {
    this.restored = !0;
  }
}
var W = new j(() => new U());
function markSessionRestored(e) {
  W.of(e).markRestored();
}
function wasSessionRestored(e) {
  return W.of(e).restored;
}
function ue(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let t = e[o];
    if (t?.type !== "assistant") continue;
    let r = t.message.content.find(
      (l) => l.type === "tool_use" && l.name === TODO_WRITE_TOOL_NAME,
    );
    if (!r || r.type !== "tool_use") continue;
    let s = r.input;
    if (s === null || typeof s !== "object") return [];
    let d = todoItemsSchema().safeParse(s.todos);
    return d.success ? d.data : [];
  }
  return [];
}
function adoptResumedSessionId(e) {
  if (typeof e.resume !== "string" || e.forkSession || e.hasSessionIdFlag)
    return !1;
  let o = Xn(e.resume);
  if (!o) return !1;
  return ($p(_m(o), "resume"), !0);
}
function restoreTranscriptDerivedState(e, o, t, r) {
  if (e.fileHistorySnapshots && e.fileHistorySnapshots.length > 0)
    fileHistoryRestoreStateFromLog(e.fileHistorySnapshots, (s) => {
      o((d) => ({ ...d, fileHistory: s }));
    });
  if (
    (import.meta
      .require("../目标模式-Goal/chunk-wdns14nh.js")
      .restoreGoalFromTranscript(e.messages, o, t),
    !areTasksEnabled() && e.messages && e.messages.length > 0)
  ) {
    let s = ue(e.messages);
    if (s.length > 0) {
      let d = K();
      o((l) => ({ ...l, todos: { ...l.todos, [d]: s } }));
    }
  }
}
function ce(e) {
  return;
}
function buildStandaloneAgentContext(e, o) {
  if (!e && !o) return;
  return { name: e ?? "", color: o === "default" ? void 0 : o };
}
function resolveResumedAgentDefinition(e, o, t, r) {
  if (o) return { agentDefinition: o, agentType: void 0 };
  if (!e)
    return (
      PW(void 0),
      applyAgentFrontmatterHooks(void 0),
      { agentDefinition: void 0, agentType: void 0 }
    );
  let s = r?.sessionAgentDefinitions
      ? findAgentByType(r.sessionAgentDefinitions.activeAgents, e)
      : void 0,
    d = s ?? findAgentByType(t.activeAgents, e);
  if (s)
    logForDebugging(
      `Resume: agent "${e}" restored from the session home set (${r?.sessionCwd ?? "unknown"})`,
    );
  if (!d) {
    if (
      (logForDebugging(
        `Resumed session had agent "${e}" but it is no longer available. Using default behavior.`,
      ),
      e !== CLAUDE_AGENT.agentType)
    ) {
      if ((logFeatureSad("session_resume", "agent_resolve_miss"), r?.onResolveMiss)) {
        let l = he(),
          c =
            r.sessionAgentDefinitions && r.sessionCwd && r.sessionCwd !== l
              ? `${r.sessionCwd} or ${l}`
              : l;
        r.onResolveMiss(
          replaceControlChars(
            `This session was running agent '${e}', which is no longer available (no agent by that name in ${c}). ` +
              "Continuing with the default tools and system prompt \u2014 the agent's tool restrictions no longer apply. " +
              "To restore it, re-create the agent, or resume with an explicit --agent <name>.",
          ),
        );
      }
    }
    return (
      PW(void 0),
      applyAgentFrontmatterHooks(void 0),
      { agentDefinition: void 0, agentType: void 0 }
    );
  }
  if ((PW(d.agentType), applyAgentFrontmatterHooks(d), !Ec() && d.model && d.model !== "inherit")) {
    let l = parseUserSpecifiedModel(d.model);
    if (isExemptDefaultResolvingPick(l) || isModelAllowed(l)) ad(l);
    else
      logForDebugging(
        `Agent model "${d.model}" is not in the availableModels allowlist; keeping the session model`,
        { level: "warn" },
      );
  }
  return { agentDefinition: d, agentType: d.agentType };
}
async function loadSessionHomeAgentDefinitions(e, o) {
  if (!e || e === he()) return;
  let t = resolve(e);
  if (
    An(e) ||
    An(t) ||
    gp(e) ||
    gp(t) ||
    gp(win32.normalize(e)) ||
    jf(e) ||
    jf(t) ||
    pl(e)
  ) {
    logForDebugging(`Resume: refusing cross-host session home shape "${e}"`);
    return;
  }
  if (await hasUnverifiableAncestry(e)) {
    logForDebugging(`Resume: refusing session home with unverifiable ancestry "${e}"`);
    return;
  }
  if (!isPathPersistedTrusted(e)) {
    logForDebugging(
      `Resume: not loading agents from session home "${e}" \u2014 workspace trust not persisted for it`,
    );
    return;
  }
  try {
    return await getAgentDefinitionsWithOverrides(e, o);
  } catch {
    return;
  }
}
function resolveResumedAgentSettingRestore(e) {
  if (!e.resumedAgentSetting || e.mainThreadAgentType)
    return { attempt: !1, loud: !1 };
  if (e.hasStreamingInput) return { attempt: !e.explicitAgentFlag, loud: !1 };
  return { attempt: !0, loud: !0 };
}
async function me(e, o) {
  if (o || !e) return;
  let t = parsePermissionMode(e);
  if (t === void 0) return;
  if (t === "plan" || t === "bypassPermissions") return;
  if (t === "default") {
    let { isAutoModeFromFallback: r, setProvisionalStartupMode: s } =
      await import("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js");
    if ((s(void 0), r())) return "default";
    return;
  }
  if (t === "auto") {
    let { isAutoModeGateEnabled: r } = await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js");
    if (!r()) return;
  }
  return t;
}
var fe = {
  unknown_family: "not a model this version of Claude Code recognizes",
  not_allowed: "not allowed by this account's model settings",
  retired: "retired",
};
function isModelExplicitlyConfigured() {
  return Boolean(
    Ec() !== void 0 ||
    a.ANTHROPIC_MODEL ||
    a.ANTHROPIC_DEFAULT_FABLE_MODEL ||
    a.ANTHROPIC_DEFAULT_OPUS_MODEL ||
    a.ANTHROPIC_DEFAULT_SONNET_MODEL ||
    a.ANTHROPIC_DEFAULT_HAIKU_MODEL ||
    isEnvDefaultModelGoverning() ||
    !usesFirstPartyModelIds(),
  );
}
function resolveResumedSessionModel(e, o, t, r = (s) => s()) {
  if (isModelExplicitlyConfigured()) return;
  let s = J(e, o);
  if (s.kind === "none") return;
  if (s.kind === "mode_dependent_setting") {
    r(() =>
      logEvent("tengu_resume_model_restore", {
        outcome: fromEnum("skipped_mode_dependent_setting"),
        is_eap: !1,
      }),
    );
    return;
  }
  if (s.kind === "declined")
    r(() =>
      logEvent("tengu_resume_model_restore", {
        outcome: fromEnum("declined"),
        decline_reason: fromEnumOpt(s.reason),
        is_eap: isEapModelId(s.model),
      }),
    );
  if (s.kind === "declined") {
    let d = (o && stripLongContextTags(o)) || "the default model";
    t?.(
      `Session model ${s.model} could not be restored (${fe[s.reason]}) \u2014 using ${d} instead.`,
    );
    return;
  }
  return s.model;
}
function getRestorableModelFromTranscript(e, o) {
  let t = J(e, o);
  return t.kind === "ok" ? t.model : void 0;
}
function pe(e, o) {
  if (e === "opusplan") return o.includes("opus") || o.includes("sonnet");
  if (e === "haiku") return o.includes("haiku") || o.includes("sonnet");
  return !1;
}
function J(e, o) {
  let t = new Set(FIRST_PARTY_MODEL_IDS.map((d) => getCanonicalName(d))),
    r = o ? parseUserSpecifiedModel(o) : void 0,
    s = r ? stripLongContextTags(r) : void 0;
  for (let d = e.length - 1; d >= 0; d--) {
    let l = e[d];
    if (
      l?.type !== "assistant" ||
      l.isMeta ||
      typeof l.message?.model !== "string" ||
      l.message.model === SYNTHETIC_MODEL_NAME
    )
      continue;
    let c = l.message.model,
      m = getUserSpecifiedModelSetting();
    if (isModeDependentModelSetting(m) && !isEapModelId(c) && pe(m, getCanonicalName(c)))
      return { kind: "mode_dependent_setting" };
    let h = !(t.has(getCanonicalName(c)) || isEapModelId(c) || stripLongContextTags(c) === s)
      ? "unknown_family"
      : !isExemptDefaultResolvingPick(c) && !isModelAllowed(c)
        ? "not_allowed"
        : isModelRetiredOrRemapped(c)
          ? "retired"
          : void 0;
    if (h) return { kind: "declined", model: c, reason: h };
    if (
      ((o && hasLongContextSuffix(o)) || (r !== void 0 && hasLongContextSuffix(r))) &&
      supports1mContextBeta(c) &&
      (stripLongContextTags(c) === s || (o && getCanonicalName(parseUserSpecifiedModel(stripLongContextTags(o))) === getCanonicalName(c)))
    )
      return { kind: "ok", model: c + "[1m]" };
    return { kind: "ok", model: c };
  }
  return { kind: "none" };
}
function Z(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let t = e[o];
    if (t?.type === "system" && t.subtype === "model_refusal_fallback")
      return t;
  }
  return;
}
function ge(e, o) {
  let t = Z(e);
  if (!t) return !1;
  let r = stripLongContextTags(t.fallbackModel),
    s = stripLongContextTags(o);
  return r === s || getCanonicalName(r) === getCanonicalName(s);
}
function neutralizeRefusalFallbackOnFork(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let t = e[o];
    if (t?.type === "system" && t.subtype === "model_refusal_fallback")
      t.neutralizedByFork = !0;
  }
}
function ye(e) {
  let o = Z(e);
  return o?.neutralizedByFork === !0
    ? { fallbackModel: o.fallbackModel }
    : void 0;
}
function T(e, o) {
  logEvent("tengu_resume_model_restore", { outcome: fromEnum(e), is_eap: isEapModelId(o) });
}
function V(e, o) {
  import("../上下文压缩-Compact/chunk-npckj9cm.js").then((t) => t.fetchBootstrapData(e, o));
}
function restoreRefusalFallbackLatch(e, o, t, r, s) {
  if (!ge(e, o)) return (ad(o), V(r, s), T("restored", o), o);
  if (t) {
    (logEvent("tengu_refusal_fallback_resume_latch", {
      action: fromEnum("fork_skip_restore"),
    }),
      T("skipped_fork_fallback", o));
    return;
  }
  let d = ye(e);
  if (d && stripLongContextTags(d.fallbackModel) === stripLongContextTags(o)) {
    (logEvent("tengu_refusal_fallback_resume_latch", {
      action: fromEnum("fork_neutralized_skip"),
    }),
      T("skipped_fork_neutralized", o));
    return;
  }
  return (
    ad(o),
    V(r, s),
    uje({
      fallbackModel: o,
      previousOverride: void 0,
      previousAppStateModel: KR() ?? null,
      previousModelForSession: null,
    }),
    T("restored", o),
    logEvent("tengu_refusal_fallback_resume_latch", { action: fromEnum("model_latch_only") }),
    o
  );
}
function rearmCyberRefusalHeaderOnResume(e, o) {
  if (o) return;
  let t = e.flatMap((r) =>
    r?.type === "system" &&
    r.subtype === "model_refusal_fallback" &&
    (r.apiRefusalCategory === "cyber" || r.sawCyberRefusal === !0) &&
    r.neutralizedByFork !== !0
      ? [r]
      : [],
  );
  if (t.length > 0)
    (vxe(
      t.find((r) => r.apiRefusalCategory === "cyber" && r.requestId != null)
        ?.requestId ?? void 0,
    ),
      logEvent("tengu_refusal_fallback_resume_latch", {
        action: fromEnum("header_rearmed"),
      }));
}
async function ke(e, o, t, r, s) {
  if (!e) return r;
  return rebuildAgentDefinitionsWithCliAgents(o, t, s);
}
async function rebuildAgentDefinitionsWithCliAgents(e, o, t) {
  getHostStateStore().agentDefinitions.clear();
  let r = await getAgentDefinitionsWithOverrides(e, t);
  return rebuildAgentDefinitions(r, [...r.allAgents, ...o]);
}
function G(e) {
  try {
    return realpathSync(e);
  } catch {
    return e;
  }
}
function z(e) {
  try {
    return statSync(e).isDirectory() ? "present" : "gone";
  } catch (o) {
    let t = A(o);
    return t === "ENOENT" || t === "ENOTDIR" ? "gone" : "inaccessible";
  }
}
var F =
  "The worktree binding could not be cleared because transcript saving is off";
function formatWorktreeResumeError(e, o) {
  if (e.reason === "pin-is-own-launch-tree")
    return `Error: ${stripControlCharacters(e.message)} The worktree binding is kept.
`;
  if (!e.poisoned)
    return `Error: could not verify worktree ${stripControlCharacters(e.worktreePath)} for this resume, so the resume was aborted rather than continuing without isolation. This is usually transient \u2014 the worktree binding is kept; re-run the command to retry.
`;
  let t =
    o?.bindingCleared === void 0
      ? ""
      : o.bindingCleared
        ? " The worktree binding has been cleared; re-running will continue in the current directory without worktree isolation."
        : ` ${F} for this run, so the same command will be refused again until that is resolved; to continue without the worktree, re-run with --fork-session or start a new conversation.`;
  return `Error: cannot resume into worktree ${stripControlCharacters(e.worktreePath)}: ${stripControlCharacters(e.message)} This session was not started.${t}
`;
}
function formatWorktreeResumeNotice(e, o) {
  let t = o.bindingCleared
    ? "The worktree binding has been cleared."
    : `${F} for this run; a later resume will re-check it.`;
  return `Notice: the worktree ${stripControlCharacters(e.worktreePath)} for this session no longer exists; continuing in the current directory without worktree isolation. ${t}
`;
}
function formatWorktreeResumeWarning(e) {
  let o = `${F}; a later --resume will re-check it.`;
  if (e.reason === "worktree-gone")
    return `Your worktree ${stripControlCharacters(e.worktreePath)} no longer exists, so this session is working in the current directory without worktree isolation. ${isTranscriptPersistenceDisabled() ? o : "The worktree binding has been cleared."}`;
  if (e.reason === "pin-is-own-launch-tree")
    return `Could not re-enter your worktree ${stripControlCharacters(e.worktreePath)}: ${stripControlCharacters(e.message)} The worktree binding is kept.`;
  if (e.poisoned) {
    let t = isTranscriptPersistenceDisabled()
      ? `You are working in the current directory without worktree isolation. ${o}`
      : "This session's worktree binding has been cleared; you are working in the current directory without worktree isolation.";
    return `Did not re-enter your worktree ${stripControlCharacters(e.worktreePath)}: ${stripControlCharacters(e.message)} ${t}`;
  }
  return `Could not verify your worktree ${stripControlCharacters(e.worktreePath)} this time, so this session is working in the current directory without worktree isolation. The worktree binding is kept and a later --resume will retry it. If this keeps happening, the worktree's git metadata may need repair.`;
}
function D(e) {
  if (Xo(e) || gp(e) || gp(win32.normalize(e)))
    return (
      logForDebugging(
        "[sessionRestore] transcript path is a network/NT-namespace path \u2014 not chdir-ing",
        { level: "warn" },
      ),
      !0
    );
  return !1;
}
function applyResumedWorktreeState(e, o, t, r) {
  let s = Se(o, t, r);
  return (e.record(s), s);
}
function Se(e, o, t) {
  let r = getCurrentWorktreeSession();
  if (r && t?.preserveBinding !== !0) return (saveWorktreeState(r), null);
  if (!e) {
    if (e === null)
      return (
        logEvent("tengu_worktree_resume_root_rejected", {
          reason: S("worktree-exited-resume"),
          poisoned: S("false"),
        }),
        logForDebugging(
          "[worktree] resuming a session whose worktree record was cleared (exited or scrubbed): running without isolation",
        ),
        null
      );
    if (!o || getCwd() === o) return null;
    if (D(o)) return null;
    if (hasNetworkPathSpelling(o))
      return (
        logForDebugging(
          "[worktree] resume: the recorded project path has a network spelling; staying put",
        ),
        null
      );
    try {
      changeWorkingDirectory(o);
    } catch {
      return null;
    }
    if ((setSessionCwd(o), isPathCoveringAllRoots(o, getRequiredCoverageRoots(initialRealCwd)))) ES(getCwd());
    return (
      clearCurrentSessionMemoryFiles(),
      resetPromptStateAfterInvalidation("resume"),
      getPlansDirectory.cache.clear?.(),
      primePlanSlugCollisions(t?.storageV5),
      reanchorGitFileWatcher(),
      clearIsGitMemo(),
      getReplBridgeHandle()?.refreshGitBranch?.(),
      null
    );
  }
  let s = t?.preserveBinding === !0;
  if (
    D(e.worktreePath) ||
    my(e.worktreePath) ||
    li(e.worktreePath) ||
    $m(e.worktreePath) ||
    resolveSymlinkAncestrySync(fsSurface, e.worktreePath, {
      surfaceNetworkRaw: !0,
      unreadableAncestry: "unverified",
    }) !== void 0
  ) {
    if (!s) saveWorktreeState(null);
    return (
      logEvent("tengu_worktree_resume_root_rejected", {
        reason: S("network-spelled-pin"),
        poisoned: S("true"),
      }),
      {
        worktreePath: e.worktreePath,
        reason: "invalid-linked-worktree",
        message:
          "its recorded path has a network spelling, which can never be a local isolation worktree.",
        poisoned: !0,
      }
    );
  }
  let d = z(e.worktreePath);
  if (d === "gone") {
    if (!s) saveWorktreeState(null);
    return (
      logEvent("tengu_worktree_resume_root_rejected", {
        reason: S("worktree-gone"),
        poisoned: S("true"),
      }),
      {
        worktreePath: e.worktreePath,
        reason: "worktree-gone",
        message: "the worktree directory no longer exists",
        poisoned: !0,
      }
    );
  }
  if (d === "inaccessible")
    return (
      logForDebugging(
        `[worktree] could not examine ${e.worktreePath} on resume; keeping the binding`,
        { level: "error" },
      ),
      logEvent("tengu_worktree_resume_root_rejected", {
        reason: S("unverifiable"),
        poisoned: S("false"),
      }),
      {
        worktreePath: e.worktreePath,
        reason: "unverifiable",
        message: "the worktree directory could not be examined right now",
        poisoned: !1,
      }
    );
  let l = t?.liveLaunchDir ?? initialRealCwd,
    c = isSameRealPath(getCwd(), e.worktreePath),
    m = evaluateWorktreePinSync(
      e.worktreePath,
      resolveGitRootCandidates(e.originalCwd),
      dedupe([G(l), ...resolveGitRootCandidates(l), G(initialRealCwd), ...resolveGitRootCandidates(initialRealCwd)]),
      { declineSelfOwningPinUnderLiveRoot: !0 },
    );
  if (!m.ok) {
    let h =
      m.reason !== "unverifiable" && m.reason !== "pin-is-own-launch-tree";
    if (
      (logForDebugging(
        `[worktree] declining to resume into ${e.worktreePath} (${m.reason}): ${m.message}`,
        { level: "error" },
      ),
      logEvent("tengu_worktree_resume_root_rejected", {
        reason: fromEnum(m.reason),
        poisoned: S(h ? "true" : "false"),
      }),
      h)
    ) {
      if (!s) saveWorktreeState(null);
      if (c) {
        let k = dirname(e.worktreePath),
          y = z(k) === "present" ? k : e.originalCwd;
        if (isSameRealPath(y, e.worktreePath))
          return {
            worktreePath: e.worktreePath,
            reason: m.reason,
            message: m.message,
            poisoned: h,
          };
        try {
          (changeWorkingDirectory(y), setSessionCwd(y));
          let v = (b) => comparePathIdentity(b, e.worktreePath) === "same",
            w = FW(e.worktreePath),
            P = w !== null ? [w] : [],
            R = [...resolveGitRootCandidates(l), ...P].filter((b) => !v(b));
          if (isPathCoveringAllRoots(y, R, { requireCovered: !0 })) ES(y);
          (clearCurrentSessionMemoryFiles(),
            resetPromptStateAfterInvalidation("resume"),
            clearIsGitMemo(),
            getPlansDirectory.cache.clear?.(),
            primePlanSlugCollisions(t?.storageV5),
            reanchorGitFileWatcher(),
            getReplBridgeHandle()?.refreshGitBranch?.());
        } catch {}
      }
    }
    return {
      worktreePath: e.worktreePath,
      reason: m.reason,
      message: m.message,
      poisoned: h,
    };
  }
  try {
    changeWorkingDirectory(e.worktreePath);
  } catch (h) {
    let k = A(h);
    if (k === "ENOENT" || k === "ENOTDIR") {
      if (!s) saveWorktreeState(null);
      return (
        logEvent("tengu_worktree_resume_root_rejected", {
          reason: S("worktree-gone"),
          poisoned: S("true"),
        }),
        {
          worktreePath: e.worktreePath,
          reason: "worktree-gone",
          message: "the worktree directory no longer exists",
          poisoned: !0,
        }
      );
    }
    return (
      logEvent("tengu_worktree_resume_root_rejected", {
        reason: S("unverifiable"),
        poisoned: S("false"),
      }),
      {
        worktreePath: e.worktreePath,
        reason: "unverifiable",
        message: "the worktree directory could not be entered right now",
        poisoned: !1,
      }
    );
  }
  return (
    setSessionCwd(e.worktreePath),
    ES(getCwd()),
    restoreWorktreeSession({ ...e, liveLaunchAnchor: l }),
    clearCurrentSessionMemoryFiles(),
    resetPromptStateAfterInvalidation("resume"),
    getPlansDirectory.cache.clear?.(),
    primePlanSlugCollisions(t?.storageV5),
    reanchorGitFileWatcher(),
    getReplBridgeHandle()?.refreshGitBranch?.(),
    null
  );
}
function exitWorktreeOnResume(e, o) {
  let t = getCurrentWorktreeSession();
  if (!t) return;
  if ((restoreWorktreeSession(null), clearCurrentSessionMemoryFiles(), resetPromptStateAfterInvalidation("resume"), t.worktreePath === e)) {
    (getPlansDirectory.cache.clear?.(), primePlanSlugCollisions(o));
    return;
  }
  if (D(t.originalCwd)) return;
  if (hasNetworkPathSpelling(t.originalCwd)) {
    logForDebugging(
      "[worktree] exit: the recorded original cwd has a network spelling; staying put",
    );
    return;
  }
  try {
    changeWorkingDirectory(t.originalCwd);
  } catch {
    return;
  }
  setSessionCwd(t.originalCwd);
  let r = t.liveLaunchAnchor;
  if (
    r === void 0 ||
    isPathCoveringAllRoots(t.originalCwd, getRequiredCoverageRoots(r, t.worktreePath), {
      requireCovered: !0,
      coveredWitnesses: getCoverageWitnessRoots(r, t.worktreePath),
      extraCoveredRoots: (() => {
        let s = FW(t.worktreePath);
        return s !== null ? [s] : [];
      })(),
    })
  )
    ES(getCwd());
  (getPlansDirectory.cache.clear?.(), primePlanSlugCollisions(o), reanchorGitFileWatcher(), getReplBridgeHandle()?.refreshGitBranch?.());
}
async function restoreSessionFromTranscript(e, o, t) {
  markSessionRestored(t.session.host);
  let r;
  if (((r = t.modeApi?.matchSessionMode(e.mode)), r))
    e.messages.push(createSystemInfoMessage(r, "warning"));
  let { adoptedSessionId: s, effectiveFork: d } = resolveSessionAdoption(
    o.sessionIdOverride ?? e.sessionId,
    o.forkSession,
  );
  if (s)
    ($p(s, "resume", o.transcriptPath ? dirname(o.transcriptPath) : null),
      await renameRecordingForSession(t.session, t.storageV5),
      await resetSessionFilePointer());
  if (d) {
    if (
      (await adoptForkSessionMetadata(e, {
        stripWorktreeSession: !0,
        stripRelocatedCwd: !0,
        storageV5: t.storageV5,
      }),
      e.contentReplacements?.length)
    )
      await recordContentReplacement(e.contentReplacements, void 0, t.storageV5);
  } else restoreSessionMetadata(e, { storageV5: t.storageV5 });
  if ((restoreCostStateFromRecord(e), !d)) {
    let f = applyResumedWorktreeState(worktreeStateStore.of(t.session.host), e.worktreeSession, void 0, {
      storageV5: t.storageV5,
    });
    if (f) e.messages.push(createSystemInfoMessage(formatWorktreeResumeWarning(f), "warning"));
    if (isHoverRestEnabled() && t.storageV5 !== void 0) await adoptResumedSessionFileAsync(t.storageV5);
    else adoptResumedSessionFile();
  }
  let l = await loadSessionHomeAgentDefinitions(e.projectPath, t.storageV5),
    { agentDefinition: c, agentType: m } = resolveResumedAgentDefinition(
      e.agentSetting,
      t.mainThreadAgentDefinition,
      t.agentDefinitions,
      {
        sessionAgentDefinitions: l,
        sessionCwd: e.projectPath,
        onResolveMiss: (f) => e.messages.push(createSystemInfoMessage(f, "warning")),
      },
    ),
    h = e.permissionMode,
    k = !1,
    y = await me(h, t.permissionModeCliSet || !1),
    v = null;
  if (d) neutralizeRefusalFallbackOnFork(e.messages);
  let w = resolveResumedSessionModel(e.messages, t.initialState.mainLoopModel, (f) =>
      e.messages.push(createSystemInfoMessage(f, "warning")),
    ),
    P = w ? restoreRefusalFallbackLatch(e.messages, w, d, t.storageV5, t.credentials) : void 0;
  (rearmCyberRefusalHeaderOnResume(e.messages, d), kHe(e.messages, { fork: d, startup: !0 }));
  let R;
  if (y) {
    let { transitionPermissionMode: f } = await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
      B = t.initialState.toolPermissionContext;
    try {
      R = { ...f(B.mode, y, B), mode: y };
    } catch (te) {
      logForDebugging(
        `[sessionRestore] transitionPermissionMode rejected restored mode '${y}': ${te}`,
      );
    }
  }
  saveMode(t.modeApi?.isCoordinatorMode() ? "coordinator" : "normal");
  let b = o.includeAttribution ? ce(e) : void 0,
    O = buildStandaloneAgentContext(e.agentName, e.agentColor),
    C = t.initialState.standaloneAgentContext
      ? { ...O, ...t.initialState.standaloneAgentContext }
      : O;
  reclaimSessionNameOnResume(C?.name, t.storageV5, {
    autoOnly: !e.customTitle && !t.initialState.standaloneAgentContext?.name,
  });
  let ee = await ke(
      !!r,
      t.currentCwd,
      t.cliAgents,
      t.agentDefinitions,
      t.storageV5,
    ),
    I = t.initialState.initialMessage;
  if (
    a.CLAUDE_CODE_RESUME_INTERRUPTED_TURN &&
    e.turnInterruptionState?.kind === "interrupted_prompt" &&
    isUserDrivenOrUnstampedOrigin(e.turnInterruptionState.message.origin)
  )
    (logForDebugging("[sessionRestore] Auto-resuming interrupted turn for bg crash-respawn"),
      logResumeInterruptedTurn("repl_restore", e.turnInterruptionState.message),
      removeInterruptedMessage(e.messages, e.turnInterruptionState.message),
      (I = { message: e.turnInterruptionState.message }));
  let _ = t.initialState,
    N = createSessionHookRegistry();
  return (
    import.meta.require("../目标模式-Goal/chunk-wdns14nh.js").restoreGoalFromTranscript(
      e.messages,
      (f) => {
        _ = f(_);
      },
      N,
    ),
    {
      messages: e.messages.filter(
        (f) =>
          !(
            f.type === "system" &&
            (f.subtype === "bridge_status" ||
              f.subtype === "cloud_session_status")
          ),
      ),
      fileHistorySnapshots: e.fileHistorySnapshots,
      contentReplacements: e.contentReplacements,
      agentName: e.agentName,
      agentColor: e.agentColor === "default" ? void 0 : e.agentColor,
      restoredAgentDef: c,
      initialState: {
        ..._,
        initialMessage: I,
        ...(!d &&
          e.bridgeSessionId &&
          !(_.replBridgeEnabled && !_.replBridgeOutboundOnly) && {
            replBridgeEnabled: !0,
            replBridgeOutboundOnly: !1,
          }),
        ...(e.endedByModel ? { endedByModel: !0 } : {}),
        ...(m && { agent: m }),
        ...(v && { attentionBudget: v }),
        ...(P && { mainLoopModel: P }),
        ...(b && { attribution: b }),
        ...(C && { standaloneAgentContext: C }),
        ...(R && { toolPermissionContext: R }),
        agentDefinitions: ee,
      },
      sessionHooks: N,
    }
  );
}
function kHe(e, o) {}
export {
  markSessionRestored,
  wasSessionRestored,
  renameRecordingForSession,
  applyAgentFrontmatterHooks,
  adoptResumedSessionId,
  restoreTranscriptDerivedState,
  buildStandaloneAgentContext,
  resolveResumedAgentDefinition,
  loadSessionHomeAgentDefinitions,
  resolveResumedAgentSettingRestore,
  isModelExplicitlyConfigured,
  resolveResumedSessionModel,
  getRestorableModelFromTranscript,
  neutralizeRefusalFallbackOnFork,
  restoreRefusalFallbackLatch,
  rearmCyberRefusalHeaderOnResume,
  rebuildAgentDefinitionsWithCliAgents,
  formatWorktreeResumeError,
  formatWorktreeResumeNotice,
  formatWorktreeResumeWarning,
  applyResumedWorktreeState,
  exitWorktreeOnResume,
  restoreSessionFromTranscript,
  kHe,
};
