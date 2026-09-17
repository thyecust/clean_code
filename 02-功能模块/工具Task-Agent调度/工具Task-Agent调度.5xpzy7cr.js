// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { oo, ze, he, sn, ke, p_e, TB, EB } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { my, li, $m, Xo } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { sr, kw, mc, o0, Ia, nRn, Qor } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Ve, yt, l, A, Rt, FA, CB } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { WP, Xg, Sh, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { Q5, Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { Y6 } from "../权限系统/chunk-e4pfvp7x.js";
import { qu } from "../工具Bash-Shell/chunk-4pap8y5n.js";
import { getParentSessionId } from "../Teammates团队/chunk-811z9z0t.js";
import { WEt, getToolPermissionContext, getMainLoopModel } from "../权限系统/chunk-fjrcf22x.js";
import { Kt, Tt } from "../权限系统/chunk-qdy0h5k2.js";
import {
  nH,
  eh,
  nX,
  O2,
  Nmt,
  sw,
  wDe,
  isBuiltInAgent,
  isPluginAgent,
  Wdn,
  BS,
  nh,
  isForkSubagentEnabled,
  FORK_AGENT,
  sne,
  isAgentToolPoolDenied,
  agentToolPoolDeniedMessage,
  IM,
  wV,
  p3,
  f3,
  TTe,
  u4n,
  p4n,
  _4n,
  TX,
  fT,
  nr,
  V2t,
  Gv,
  qv,
  G2,
  _3,
  HX,
  jVe,
  Vgt,
  lLe,
  V4n,
  CI,
  RV,
  yne,
  cH,
  MO,
  PX,
  wLe,
  Opr,
  zX,
  VO,
  uw,
  zne,
  KKe,
  K5n,
  X5n,
  runAgent,
  EE,
  k3,
  iY,
  QO,
  Re,
  UEe,
  wH,
  npe,
  rpe,
  ope,
  updateAgentMetadata,
  readAgentMetadata,
  AgentTranscriptFetchError,
  getAgentTranscript,
  getCommands,
  attributionSkillName,
  VS,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getTaskOutputPath } from "../后台任务-Shell管理/chunk-x3txegas.js";
import { Dl } from "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import { isCoordinatorMode } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { ewt } from "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import { WORKFLOW_TOOL_NAME } from "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import { CRON_CREATE_TOOL_NAME } from "../Cron-定时任务/chunk-mk3zm4ew.js";
import { _bt } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { excludeCoordinatorCommsMcpTools } from "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import { cPe, Eut } from "../后台任务-Shell管理/chunk-531ast3t.js";
import { xs } from "../Teammates团队/chunk-mrfx53ye.js";
import { og } from "../插件系统/chunk-33bdfgmx.js";
import { Xi, sg } from "../Teammates团队/chunk-z2t8b9yc.js";
import { Vr } from "../../01-核心基础设施/共享小工具-未细化/chunk-9mfwkyac.js";
import { ia } from "../../01-核心基础设施/共享小工具-未细化/chunk-5vhxw3s9.js";
import { mt, Vh } from "./chunk-1px84m19.js";
import { wge } from "../Teammates团队/chunk-enjekn9t.js";
import { s, Qe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
var re = "ObserverReport";
var Ge =
    "Send a report to your report target \u2014 the agent you observe, or the coordinating agent that spawned the worker you observe. The target is resolved from your observer pairing \u2014 there is no recipient to name. Use this only when you have something genuinely useful: a mistake about to compound, a missed constraint, prior art the observed agent should see. The expected steady state is silence \u2014 if nothing warrants action, end your turn without calling this.",
  xe =
    "Send a report to your report target \u2014 the agent you observe, or the coordinating agent that spawned the worker you observe. The target is resolved from your observer pairing \u2014 there is no recipient to name. Use this only when you have something genuinely useful: a mistake about to compound, a missed constraint, prior art the observed agent should see. The expected steady state is silence \u2014 if nothing warrants action, end your turn without calling this.";
var bt = m(() =>
    Qe({
      report: s()
        .min(1)
        .describe(
          "The report to deliver to your report target. Be concise and specific.",
        ),
    }),
  ),
  qe = Tt({
    name: re,
    maxResultSizeChars: 1000,
    async description() {
      return Ge;
    },
    async prompt() {
      return xe;
    },
    get inputSchema() {
      return bt();
    },
    isReadOnly() {
      return !1;
    },
    isEnabled() {
      return !0;
    },
    create(e) {
      return {
        async checkPermissions(p) {
          return { behavior: "allow", updatedInput: p };
        },
        async call(p) {
          let c = e.agentId;
          if (c === void 0)
            return {
              data: {
                success: !1,
                message:
                  "ObserverReport is only available to an observer agent; the main session does not have an observed pairing.",
              },
            };
          let w = u4n(e.session, c);
          if (!w)
            return {
              data: {
                success: !1,
                message:
                  "Your observer pairing is not armed (stopped, retired, or never installed). The report was not delivered.",
              },
            };
          let {
            reportTargetTaskId: k,
            reportTargetName: r,
            viaWorkerName: R,
          } = w;
          if (k !== void 0) {
            let E = e.taskRegistry.get(k);
            if (!(
              nr(E) &&
              (E.status === "running" ||
                (E.status === "completed" &&
                  [...Gv(E)].some((ne) => ne !== G2)))
            ))
              return {
                data: {
                  success: !1,
                  message: `The report target (${r}) is not running. The report was not delivered.`,
                },
              };
          }
          let H = `observer:${w.observerAgentType}`,
            se =
              w.observedTaskId === void 0
                ? `"${R}"`
                : `"${R}" [${w.observedTaskId}]`,
            F = wge(
              H,
              R === void 0
                ? p.report
                : `(observing worker ${se})
${p.report}`,
            ),
            G = { kind: "observer", from: H, senderTaskId: c };
          if (k === void 0)
            BS({
              mode: "prompt",
              agentId: ze(),
              value: F,
              priority: "next",
              origin: G,
              skipSlashCommands: !0,
              isMeta: !0,
              skipAttachments: !0,
            });
          else jVe(k, F, e.taskRegistry, { origin: G, isMeta: !0 });
          return {
            data: {
              success: !0,
              message: `Report queued for ${k === void 0 ? "the main conversation" : r}.`,
            },
          };
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, p) {
      return {
        type: "tool_result",
        tool_use_id: p,
        content: e.message,
        is_error: !e.success,
      };
    },
    renderToolUseMessage(e) {
      return `report: ${e.report}`;
    },
  });
var At = [Vr, re, mt, WORKFLOW_TOOL_NAME, Xi, ia, CRON_CREATE_TOOL_NAME];
function gNt(e) {
  return [...e.filter((p) => At.every((c) => !Kt(p, c))), qe];
}
import { promises } from "fs";
function won(e) {
  return (
    (e.name === mt || e.name === Vh) &&
    typeof e.input === "object" &&
    e.input !== null &&
    "subagent_type" in e.input &&
    Nmt(e.input.subagent_type)
  );
}
function Ke(e, p) {
  let c = new Set();
  for (let w of e)
    if (w.type === "assistant") {
      let k = w.message.content;
      if (!Array.isArray(k)) continue;
      for (let r of k) if (r.type === "tool_use" && won(r)) c.add(r.id);
    } else if (w.type === "user" && c.size > 0) {
      let k = w.toolUseResult,
        r = w.message.content;
      if (
        typeof k !== "object" ||
        k === null ||
        !("agentId" in k) ||
        k.agentId !== p ||
        !Array.isArray(r)
      )
        continue;
      if (r.some((R) => R.type === "tool_result" && c.has(R.tool_use_id)))
        return !0;
    }
  return !1;
}
var ge = "resumedInline";
function Ton(e) {
  return e instanceof Error && ge in e && e[ge] === !0;
}
class Ou extends Error {
  transcriptMissing;
  constructor(e, p) {
    super(e);
    ((this.name = "ResumeAgentStateError"),
      (this.transcriptMissing = p?.transcriptMissing === !0));
  }
}
var fe = "git_worktree_create";
class d2 extends Ou {
  constructor(e) {
    super(e);
    this.name = "AgentResumeTransientError";
  }
}
class KSe extends Ou {
  constructor(e) {
    super(e);
    this.name = "AgentResumePermanentlyRefusedError";
  }
}
class uM extends Ou {
  constructor(e) {
    super(e);
    this.name = "AgentStoppedByUserError";
  }
}
class y9 extends Ou {
  constructor(e) {
    super(e);
    this.name = "AgentResumeInProgressError";
  }
}
class Dee extends Ou {
  constructor(e) {
    super(e);
    this.name = "AgentStillStoppingError";
  }
}
function S9(e) {
  return ye(e, "notification");
}
function pjn(e) {
  return ye(e, "inline");
}
function Ye(e, p = Sh) {
  return typeof e === "string" &&
    e !== "" &&
    !my(e) &&
    !Xo(e) &&
    !li(e) &&
    !$m(e) &&
    Xg(p, e, { surfaceNetworkRaw: !0, unreadableAncestry: "unverified" }) ===
      void 0
    ? e
    : void 0;
}
function Eon(e) {
  return ye(e, "reply");
}
async function ye(e, p) {
  let { agentId: c } = e,
    { resumesInFlight: w } = sr();
  if (w.has(c)) throw new y9(`Agent ${c} is already running or being resumed`);
  w.add(c);
  let k = !0,
    r = () => {
      if (k) ((k = !1), w.delete(c));
    };
  try {
    return await _t(e, p, r);
  } finally {
    r();
  }
}
async function _t(
  {
    agentId: e,
    prompt: p,
    promptOrigin: c,
    promptIsMeta: w,
    continueInterruptedTurn: k,
    toolUseContext: r,
    canUseTool: R,
    invokingRequestId: H,
    parentPromptId: se,
    userInitiated: F,
    suppressOwnerNotification: G,
    workerPermissionMode: E,
    onDeliveryCommitted: we,
    isWebFetchLaunch: ne,
  },
  oe,
  Je,
) {
  let Xe = Date.now(),
    ie = r.getAppState(),
    x = getToolPermissionContext(r),
    { taskRegistry: d } = r,
    z = x.mode,
    be = r.agentId;
  if (be !== void 0 && nH(be))
    throw new Dee(
      "This agent has been stopped and its stop is still completing; it cannot resume other agents.",
    );
  if (nH(e) || (!eh(e) && xs(d.get(e)?.status ?? "running")))
    throw new Dee(
      `Agent ${e} is still stopping \u2014 its previous run was stopped but has not exited. Re-run ${sg} on it or wait for it to exit before resuming.`,
    );
  let O = d.get(e),
    q = 0;
  if (nr(O)) {
    let t = !1;
    if (
      (d.update(e, (i) => {
        if (i.status === "running" || i.resuming) return i;
        return ((t = !0), (q = i.userStopCount ?? 0), { ...i, resuming: !0 });
      }),
      !t)
    )
      throw new y9(`Agent ${e} is already running or being resumed`);
  }
  let u = () => {
      (d.update(e, (t) => (t.resuming ? { ...t, resuming: !1 } : t)), HX(e, d));
    },
    [Ze, o] = await Promise.all([
      getAgentTranscript(oo(e), r.storageV5, { signal: r.abortController.signal }),
      readAgentMetadata(oo(e), r.storageV5),
    ]).catch((t) => {
      if (yt(t)) throw (u(), t);
      if (
        (logFeatureBad("subagent_launch", "subagent_resume_setup_read_failed"),
        u(),
        t instanceof Ou)
      )
        throw t;
      throw t instanceof AgentTranscriptFetchError || KKe(A(t) ?? CB(t))
        ? new d2(l(t))
        : new Ou(l(t));
    });
  if (r.abortController.signal.aborted) throw (u(), new Ve());
  if (o?.stoppedByUser && c?.kind !== "observer-activity") {
    if (!F)
      throw (
        u(),
        new uM(
          `Agent ${e} was stopped by the user and won't be resumed. Treat its work as cancelled; only launch a new agent if the user explicitly asks.`,
        )
      );
  }
  let S = await K5n(oo(e), r.storageV5),
    ae = "transientRead" in S && S.transientRead ? d2 : Ou;
  if (S.status === "malformed")
    throw (
      logFeatureBad("subagent_launch", "forked_skill_resume_scoping_invalid"),
      u(),
      new ae(
        `Agent ${e} has a malformed forked-skill scoping record; refusing to resume it without the skill's permission scoping.`,
      )
    );
  if (
    (S.status === "absent" || S.status === "absent-but-marked") &&
    nr(O) &&
    O.forkedSkillName !== void 0
  )
    throw (
      logFeatureBad("subagent_launch", "forked_skill_resume_scoping_missing"),
      u(),
      new ae(
        `Agent ${e} ran as a forked skill but its scoping record is missing; refusing to resume it without the skill's permission scoping.`,
      )
    );
  if (S.status === "absent-but-marked")
    throw (
      logFeatureBad("subagent_launch", "forked_skill_resume_scoping_missing_cold"),
      u(),
      new ae(
        `Agent ${e} carries a forked-skill provenance marker but its scoping record is missing; refusing to resume it without the skill's permission scoping.`,
      )
    );
  if (S.status === "valid" && nr(O)) {
    if (O.forkedSkillName !== S.scoping.skillName)
      throw (
        logFeatureBad("subagent_launch", "forked_skill_resume_scoping_mismatch"),
        u(),
        new Ou(
          `Agent ${e} has a forked-skill scoping record that does not match its task record; refusing to resume it.`,
        )
      );
  } else if (S.status === "valid") {
    if ((await X5n(oo(e), r.storageV5)) !== S.scoping.skillName)
      throw (
        logFeatureBad("subagent_launch", "forked_skill_resume_cold_witness_mismatch"),
        u(),
        new Ou(
          `Agent ${e} has a forked-skill scoping record with no matching provenance-marker witness; refusing to resume it on a cold path without a corroborated fork identity.`,
        )
      );
  }
  let T = S.status === "valid" ? S.scoping : void 0,
    K = [],
    J = [],
    de;
  if (T) {
    let t = await getCommands(sn(), r.storageV5).catch(() => []),
      i = r
        .getAppState()
        .mcp.commands.filter(
          (_) => _.type === "prompt" && _.loadedFrom === "mcp",
        ),
      a = [...IM(t, r.getAppState().mcp.commands), ...i].find(
        (_) => _.name === T.skillName && _.type === "prompt",
      );
    if (
      a?.type !== "prompt" ||
      (a.context !== "fork" && a.getContext === void 0)
    )
      throw (
        logFeatureBad("subagent_launch", "forked_skill_resume_skill_unresolved"),
        u(),
        new Ou(
          `Agent ${e} ran as forked skill ${T.skillName}, which no longer resolves to a fork-capable skill; refusing to resume it without its permission scoping.`,
        )
      );
    if (a.loadedFrom === "syncedSkills" && wV())
      throw (
        logFeatureBad("subagent_launch", "forked_skill_resume_sync_vetoed"),
        u(),
        new Ou(
          `Agent ${e} ran as forked skill ${T.skillName}, an account-synced skill that is currently disabled (skills sync turned off or denied by policy); refusing to resume it.`,
        )
      );
    ((K = qu(
      (await a.getAllowedTools?.()?.catch((_) => {
        throw (
          logFeatureBad("subagent_launch", "forked_skill_resume_allowed_tools_failed"),
          u(),
          _ instanceof Ou ? _ : new Ou(l(_))
        );
      })) ??
        a.allowedTools ??
        [],
    )),
      (J = qu(a.disallowedTools ?? [])),
      (de = attributionSkillName(a)));
  }
  let Ue = T
      ? (T.frozenCommandDenies ??
        r.getAppState().toolPermissionContext.alwaysDenyRules.command ??
        [])
      : void 0,
    Te = T
      ? [
          ...(K.length === 0
            ? []
            : [{ kind: "allowed_tools", allowedTools: K }]),
          ...(J.length === 0
            ? []
            : [{ kind: "disallowed_tools", disallowedTools: J }]),
        ]
      : [],
    Ae = Opr(e),
    _e =
      Ae !== void 0
        ? { ...r, ...Ae }
        : o?.pluginSteered === !0
          ? { ...r, pluginSteered: !0 }
          : r,
    et = T
      ? {
          ..._e,
          getAppState: WEt(r.getAppState, K, J, {
            replaceCommandRules: !0,
            frozenCommandDenies: Ue,
          }),
          permissionLayers:
            Te.length > 0
              ? [...(r.permissionLayers ?? []), ...Te]
              : r.permissionLayers,
        }
      : _e,
    v = d.get(e),
    le = nr(v) ? v.result : void 0,
    tt = le?.modelsUsed ?? (le?.resolvedModel ? [le.resolvedModel] : void 0),
    X = (nr(v) ? v.spawnDepth : o?.spawnDepth) ?? mc(r.agentContext) + 1,
    rt = nr(v) ? v.startTime : Xe,
    P = Ze;
  if (!P) {
    let t = d.getTranscript(e)?.messages;
    if (t && t.length > 0)
      (n(
        `[resumeAgentBackground ${e}] disk transcript missing; using ${t.length} in-memory messages mirrored during the run`,
      ),
        (P = { messages: t, contentReplacements: [] }));
  }
  if (!P)
    throw (
      logFeatureBad("subagent_launch", "subagent_resume_transcript_missing"),
      u(),
      new Ou(`No transcript found for agent ID: ${e}`, {
        transcriptMissing: !0,
      })
    );
  (sne(P.messages), ewt(P.messages));
  let st = k ? [...cPe(P.messages)] : P.messages,
    I = npe(rpe(UEe(PX(st, { site: "agent_resume" }))));
  if (k && I.length > 0 && !Eut(I))
    return (
      d.update(e, (t) => ({
        ...t,
        resuming: !1,
        notified: !0,
        evictAfter: Date.now() + fT,
      })),
      logFeatureOk("subagent_launch"),
      {
        agentId: e,
        description: o?.description ?? "(resumed)",
        outputFile: getTaskOutputPath(e),
        alreadyCompleted: !0,
      }
    );
  let nt = _bt(r.contentReplacementState, I, P.contentReplacements),
    ot =
      !o &&
      ((nr(v) &&
        (v.agentType === wDe.agentType || v.webFetchSavedFiles !== void 0)) ||
        ne === !0 ||
        Ke(r.messages, e)),
    ue = o?.agentType ?? (ot ? wDe.agentType : void 0),
    M =
      o?.isFork === !0
        ? void 0
        : ue
          ? r.options.agentDefinitions.activeAgents.find(
              (t) => t.agentType === ue,
            )
          : void 0,
    N =
      o?.isFork === !0 ||
      (!M && o?.isFork === void 0 && o?.agentType === FORK_AGENT.agentType),
    D =
      ue === wDe.agentType && o?.isBuiltIn !== !1
        ? M && isBuiltInAgent(M)
          ? M
          : wDe
        : o?.isBuiltIn === !1
          ? M && !isBuiltInAgent(M)
            ? M
            : O2
          : (M ?? (N ? FORK_AGENT : O2));
  if (isAgentToolPoolDenied(D, x))
    throw (
      logFeatureBad("subagent_launch", "subagent_resume_tools_denied"),
      u(),
      new Ou(agentToolPoolDeniedMessage(D.agentType))
    );
  if ((await Wdn([D])).length !== 1)
    throw (
      logFeatureBad("subagent_launch", "subagent_resume_not_offered"),
      u(),
      new Ou(`Agent type '${D.agentType}' is not offered in this session.`)
    );
  let Z = oe === "inline" || (oe === "reply" && (Dl() || sw(D))),
    U = (t, i) => {
      let a = Ia(),
        _ = o?.cwd && !WP(o.cwd) ? o.cwd : Q(),
        je = uw(_),
        ft =
          a !== null &&
          je.length > 0 &&
          (() => {
            let ht = [
              a.worktreePath,
              ...uw(a.originalCwd),
              ...(a.liveLaunchAnchor
                ? [a.liveLaunchAnchor, ...uw(a.liveLaunchAnchor)]
                : []),
              iY,
              ...uw(iY),
            ];
            return je.every((kt) => ht.some((wt) => VO(kt, wt) === "same"));
          })(),
        He = i?.telemetryCode ?? "git_worktree_resume_worktree_gone",
        gt = o?.worktreePath ?? `agent ${e}`;
      if (ft) {
        (logFeatureSad(fe, He),
          n(
            `Resumed worktree ${gt} ${t}; falling back to ${_} under the session worktree's fences`,
            { level: "error" },
          ));
        return;
      }
      if (i?.terminalOnUncovered === !1)
        throw (
          u(),
          new d2(
            `Cannot resume this agent right now: its worktree ${t}, and the fallback directory is not covered by the session's isolation fences. Re-run from a session whose fences cover the agent's directory.`,
          )
        );
      throw (
        logFeatureBad(fe, He),
        u(),
        new KSe(
          `This agent cannot be resumed: its worktree ${t}, and the fallback directory is not covered by the session's isolation fences.`,
        )
      );
    },
    it = Ye(o?.worktreePath),
    at = Ye(o?.inheritedWorktreePath),
    ee = it ?? at,
    B = ee
      ? await promises.stat(ee).then(
          (t) => (t.isDirectory() ? ee : U("exists but is not a directory")),
          (t) => {
            let i = A(t);
            if (i === "ENOENT" || i === "ENOTDIR") return U("no longer exists");
            throw (
              u(),
              new d2(
                `Cannot resume this agent: its worktree could not be examined (${String(i ?? "unknown error")}). Re-run once the directory is accessible.`,
              )
            );
          },
        )
      : void 0;
  if (
    ee === void 0 &&
    !Qor(e) &&
    ((o !== null &&
      o.spawnedWithWorktree === !0 &&
      o.worktreeCleanlyRemoved !== !0 &&
      !(
        o.inheritedWorktreePath !== void 0 &&
        o.parentAgentId !== void 0 &&
        (
          await readAgentMetadata(oo(o.parentAgentId), r.storageV5).catch(
            TTe("resumeAgentBackground (parent)"),
          )
        )?.worktreeCleanlyRemoved === !0
      )) ||
      nRn(e))
  )
    U("is not recorded for this isolated agent", {
      telemetryCode: "git_worktree_resume_binding_missing",
      terminalOnUncovered: nRn(e),
    });
  let L = B;
  if (B) {
    let t = he(),
      i = await promises.realpath(t).catch(() => t),
      a = await zX(B, uw(t), Y([i, iY, ...uw(iY)]), {
        requireWitnessForSelfOwningPins: !0,
        declineSelfOwningPinUnderLiveRoot: !0,
      });
    if (!a.ok) {
      if (
        (u(),
        a.reason !== "unverifiable" && a.reason !== "pin-is-own-launch-tree")
      )
        throw (
          logFeatureBad(fe, "git_worktree_create_root_rejected"),
          n(
            `[worktree] refusing to resume parked agent into ${B} (${a.reason}): ${a.message}`,
            { level: "error" },
          ),
          new KSe(
            `This agent cannot be resumed: its worktree was refused (${a.reason}). ${a.message}`,
          )
        );
      throw (
        n(
          `[worktree] could not verify parked agent worktree ${B} this attempt; the resume will retry: ${a.message}`,
        ),
        new d2(
          `Cannot resume this agent right now: its worktree could not be verified (${a.reason}). Re-run once git can answer.`,
        )
      );
    }
  }
  if (L) {
    let t = new Date();
    try {
      await promises.utimes(L, t, t);
    } catch (i) {
      let a = A(i);
      if (a === "ENOENT" || a === "ENOTDIR")
        L = U("vanished between verification and the resume");
      else
        throw (
          u(),
          new d2(
            `Cannot resume this agent: its worktree could not be touched (${String(a ?? "unknown error")}). Re-run once the directory is accessible.`,
          )
        );
    }
  }
  let ve = o?.cwd && !WP(o.cwd) ? o.cwd : L,
    Se = r.session.withProject({ cwd: ve ?? Q() }),
    b = T?.effort !== void 0 ? { ...D, effort: T.effort } : D,
    j = o?.description ?? "(resumed)",
    te;
  if (N) {
    if (r.renderedSystemPrompt) te = r.renderedSystemPrompt;
    else
      try {
        let t = ie.agent
            ? ie.agentDefinitions.activeAgents.find(
                (_) => _.agentType === ie.agent,
              )
            : void 0,
          i = Array.from(x.additionalWorkingDirectories.keys()),
          a = await VS(r.options.tools, r.options.mainLoopModel, i);
        te = MO({
          mainThreadAgentDefinition: t,
          toolUseContext: r,
          customSystemPrompt: r.options.customSystemPrompt,
          defaultSystemPrompt: a,
          appendSystemPrompt: r.options.appendSystemPrompt,
          skillsPersistencePrompt: yne(r.options.tools),
        });
      } catch (t) {
        throw (
          logFeatureBad(
            "subagent_launch",
            "subagent_resume_fork_prompt_reconstruct_failed",
          ),
          u(),
          t instanceof Ou ? t : new Ou(l(t))
        );
      }
    if (!te)
      throw (
        logFeatureBad("subagent_launch", "subagent_resume_fork_prompt_missing"),
        u(),
        new Ou(
          "Cannot resume fork agent: unable to reconstruct parent system prompt",
        )
      );
  }
  let Oe = getMainLoopModel(r),
    Pe = cH(
      nX(b, Oe),
      Oe,
      o?.isObserver ? void 0 : N ? "inherit" : o?.model,
      z,
    );
  if (c?.kind === "observer-activity" && o?.isObserver !== !0)
    throw (
      logFeatureBad("subagent_launch", "observer_resume_sidecar_unconfirmed"),
      u(),
      new Ou(
        `Observer sidecar for ${e} missing or did not confirm isObserver; refusing delivery`,
      )
    );
  let Me = o?.isObserver ? (Y6(E, z) ?? z) : void 0,
    Ne = { ...x, mode: Me ?? E ?? o?.spawnMode ?? b.permissionMode ?? z },
    Fe = r.options.tools.filter(nh),
    Ee = r.getAppState(),
    dt = N
      ? excludeCoordinatorCommsMcpTools(r.options.tools)
      : QO(Ne, excludeCoordinatorCommsMcpTools(Ee.mcp.tools.concat(Fe)), {
          skipReplFilter: !0,
          skillTools: Ee.skillTools,
        }),
    lt = o?.isObserver
      ? gNt(
          EE(b, QO(Ne, excludeCoordinatorCommsMcpTools(Fe), { skipReplFilter: !0 }), !0, !1, !1, X)
            .resolvedTools,
        )
      : dt,
    De = c
      ? Re({ content: ope(p, c), origin: c, isMeta: !0 })
      : Re({
          content: w ? ope(p, void 0, { isMeta: !0 }) : p,
          ...(w && { isMeta: !0 }),
        }),
    me = nr(v) ? v.webFetchSavedFiles : void 0,
    Le = sw(b)
      ? me
        ? { dirs: [...me.dirs], paths: [...me.paths] }
        : TX()
      : void 0,
    $e = {
      agentDefinition: b,
      promptMessages: k ? I : [...I, De],
      toolUseContext: et,
      canUseTool: R,
      isAsync: !0,
      preserveToolUseResults: !ke(),
      persistedToolResultFiles: Le,
      querySource: p3(b.agentType, isBuiltInAgent(b)),
      spawnedBySkill: de,
      ...(T !== void 0 && { spawnedByForkedSkill: !0 }),
      model: o?.isObserver ? void 0 : N ? "inherit" : o?.model,
      onModelRestricted: o?.isObserver
        ? void 0
        : zne(de ?? b.agentType, r.appendSystemMessage),
      override: N ? { systemPrompt: te } : void 0,
      availableTools: lt,
      forkContextMessages: void 0,
      recordedUuids: new Set(I.map((t) => t.uuid)),
      ...((N || o?.isObserver) && { useExactTools: !0 }),
      worktreePath: L,
      worktreeBranch: o?.worktreeBranch,
      cwd: o?.cwd,
      spawnMode: Me ?? o?.spawnMode,
      description: o?.description,
      name: o?.name,
      toolUseId: o?.toolUseId,
      contentReplacementState: nt,
    },
    W = d.get(e);
  if (nr(W) && W.stoppedByUser && (!F || (W.userStopCount ?? 0) !== q))
    throw (
      u(),
      new uM(
        `Agent ${e} was stopped by the user and won't be resumed. Treat its work as cancelled; only launch a new agent if the user explicitly asks.`,
      )
    );
  if (!w && !k) Vgt(e, wH(c) ? De : Re({ content: p, origin: c }), d);
  we?.();
  let V = RV({
    agentId: e,
    ownerAgentId: ze(),
    parentAgentId: o?.parentAgentId,
    parentAbortController: Z ? r.abortController : void 0,
    spawnDepth: X,
    description: j,
    prompt: p,
    model: Pe,
    selectedAgent: b,
    taskRegistry: d,
    toolUseId: r.toolUseId,
    cwd: ve,
    forkedSkillName: T?.skillName,
    ...(c?.kind === "observer-activity" && { isObserver: !0 }),
    sessionScratch: r.session.sessionScratch,
  });
  Je();
  let C = c?.kind === "observer-activity" ? void 0 : _3(r.agentId, d),
    ct = !nr(W) || (W.notified && W.quietlyParked !== !0),
    Ce = !1;
  if (C !== void 0) {
    let t = new Set(),
      i = C;
    while (i !== void 0 && !t.has(i)) {
      t.add(i);
      let a = d.get(i);
      if (((i = nr(a) ? a.ownerAgentId : void 0), i === e)) {
        Ce = !0;
        break;
      }
    }
  }
  if (C !== void 0 && C !== e && ct && !Ce) {
    let t;
    if (
      (d.update(e, (i) => {
        if (i.ownerAgentId === C) return i;
        return ((t = i.ownerAgentId), { ...i, ownerAgentId: C });
      }),
      !ke())
    )
      qv(C, `agent:${e}`, d);
    if (t !== void 0) V4n(e, t, d);
  }
  let Ie = F && (o?.stoppedByUser === !0 || (nr(O) && O.stoppedByUser === !0));
  if (Ie || (F && nr(O) && O.status === "killed")) {
    let t = d.get(e);
    r.messageQueue.enqueuePendingNotification(
      _4n({
        agentId: e,
        description: j,
        to: lLe({
          ownerAgentId: nr(t) ? t.ownerAgentId : void 0,
          keepaliveReason: `agent:${e}`,
          delivering: !0,
          taskRegistry: d,
        }),
      }),
    );
  }
  if (Ie)
    try {
      if (V2t(d.get(e)) === q) {
        if (
          (await updateAgentMetadata(oo(e), { stoppedByUser: !1 }, r.storageV5),
          V2t(d.get(e)) !== q)
        )
          await updateAgentMetadata(oo(e), { stoppedByUser: !0 }, r.storageV5);
      }
    } catch (t) {
      if (Rt(t) || FA(CB(t)))
        n(`failed to clear stop marker for ${e}: ${f3(t)}`, { level: "warn" });
      else logError(t);
    }
  if (G) CI(V.agentId, d);
  if (
    (await p4n({
      observedTaskId: e,
      observedDefinition: b,
      observedName: o?.name ?? b.agentType,
      observedMeta: o
        ? {
            observerTaskId: o.observerTaskId,
            armingPermissionMode: o.armingPermissionMode,
          }
        : null,
      toolUseContext: r,
      canUseTool: R,
    }),
    HX(e, d),
    o?.name && r.getAppState().agentNameRegistry.get(o.name) === void 0)
  )
    r.agentLifecycle.registerName(o.name, oo(e));
  let ut = {
      prompt: p,
      resolvedAgentModel: Pe,
      modelsUsed: tt,
      isBuiltInAgent: isBuiltInAgent(b),
      startTime: rt,
      agentType: b.agentType,
      isAsync: !0,
      agentDepth: X,
      source: b.source,
      pluginId: isPluginAgent(b) ? og(b.plugin) : void 0,
      persistedToolResultFiles: Le,
      spawnedSubagent: nr(v) ? v.spawnedSubagent : void 0,
    },
    We = {
      agentId: e,
      parentAgentId: r.agentId,
      depth: X,
      parentSessionId: getParentSessionId(),
      agentType: "subagent",
      subagentName: b.agentType,
      displayName: o?.name,
      isAsync: !0,
      isBuiltIn: isBuiltInAgent(b),
      invokingRequestId: H,
      invocationKind: "resume",
      invocationEmitted: !1,
      parentPromptId: se,
      isBackgroundAgent: !0,
      ...o0(r.agentContext),
    },
    pt = c?.kind === "observer-activity" ? () => {} : d.takeConcurrencySlot(),
    Be = kw(We, () =>
      Q5(Se.project.cwd, () =>
        k3({
          taskId: V.agentId,
          abortController: V.abortController,
          makeStream: (t, i, a) =>
            runAgent({
              ...$e,
              session: Se,
              override: {
                ...$e.override,
                agentId: oo(V.agentId),
                agentContext: We,
                abortController: V.abortController,
                replHydration: { kind: "resume" },
              },
              onCacheSafeParams: t,
              onQueryProgress: i,
              onStreamTokenEstimate: a,
            }),
          metadata: ut,
          description: j,
          toolUseContext: r,
          taskRegistry: d,
          agentIdForCleanup: e,
          enableSummarization: p_e() || ((isCoordinatorMode() || N || isForkSubagentEnabled()) && !ke()),
          getWorktreeResult: async () =>
            L
              ? {
                  worktreePath: L,
                  ...(o?.worktreeBranch && {
                    worktreeBranch: o.worktreeBranch,
                  }),
                }
              : {},
          shouldNotifyOwner: Z ? () => !1 : void 0,
          reviewInlineHandoff: oe === "reply" && Z,
          onTerminalSuccess: T
            ? () => {
                let t = T.skillName,
                  i = `:${t}`;
                if (EB().has(i)) return;
                TB(t, t, "", null);
                let a = wLe(t);
                if (a)
                  r.applyAttributionOp({
                    kind: "recordVerification",
                    method: a,
                  });
              }
            : void 0,
          onRunSettled: pt,
        }),
      ),
    );
  if ((logFeatureOk("subagent_launch"), Z))
    try {
      await Be;
      let t = d.get(e),
        i = nr(t) ? t.result : void 0;
      return {
        agentId: e,
        description: j,
        outputFile: getTaskOutputPath(e),
        inlineHandback: {
          content: i?.content ?? [],
          harnessNoteCount: i?.harnessNoteCount,
          harnessTailCount: i?.harnessTailCount,
          harnessSectionHash: i?.harnessSectionHash,
        },
      };
    } catch (t) {
      if (t instanceof Error) Object.defineProperty(t, ge, { value: !0 });
      throw t;
    } finally {
      d.update(e, (t) => ({ ...t, notified: !0, evictAfter: Date.now() + fT }));
    }
  return { agentId: e, description: j, outputFile: getTaskOutputPath(e) };
}
export { gNt, won, Ton, Ou, d2, KSe, uM, y9, Dee, S9, pjn, Eon };
