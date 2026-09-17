// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { oo, CW } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { gbt } from "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import { lit as S, fromEnum as u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError as h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { logFeatureOk as y, logFeatureBad as f, logFeatureSad as g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { pi, bytesPerTokenForModel as lf, kw, mc } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { FU } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { hA } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { zir } from "./chunk-811z9z0t.js";
import {
  Rwe,
  SV,
  Mg,
  stripWholeToolGrantsForAsk as c3,
  withoutGrantsForRemoteScope as HO,
  hasPermissionsToUseToolWithSink as fTe,
  n2t,
  Yue,
  qzn,
  fT,
  $Ve,
  X2t,
  Y2t,
  J2t,
  iLe,
  Q2t,
  asSystemPrompt as Zo,
  z2,
  NTe,
  oKe,
  wne,
  Ajt,
  Cne,
  E6t,
  JLe,
  runAgent as dw,
  r8n,
  II,
  $3,
  nhn,
  Co,
  Re,
  isLoggableMessage as bT,
  VS,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { NFe, RD } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { Woe } from "../MCP客户端/chunk-3kmsshb6.js";
import { getToolPermissionContext as ce } from "../权限系统/chunk-fjrcf22x.js";
import { createAbortController as hr } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { UE, mG, WE } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import {
  loe,
  RC,
  RZn,
  readMailbox as ffe,
  writeToMailbox as ag,
  markSingleMessageAsRead as BGt,
  MARK_READ_FAILURE_CAP as pJ,
  messageIdentityKey as SG,
  markMessagesAsRead as fJ,
  formatTeammateMessage as vXe,
  formatTeammateMessages as coe,
  UNKNOWN_SENDER as __,
  sanitizeReceivedStructuredFrame as Pwt,
  createIdleNotification as H1e,
  logIdleResultDeliveryOutcome as fCe,
  isPermissionResponse as I1e,
  isShutdownRequest as mCe,
  isPlanApprovalResponse as HXe,
  isModeSetRequest as IXe,
  isStructuredProtocolMessage as DH,
  planApprovalResumeText as PXe,
  withShutdownReplyInstructions as O1e,
} from "./chunk-g6nvp9mm.js";
import { evictTaskOutput as Sd } from "../后台任务-Shell管理/chunk-x3txegas.js";
import { removeMemberByAgentId as TXe } from "./chunk-6b13bhw1.js";
import { hbt } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { Pqe, Uqe, Bqe, eWn, Tbe, Kdt } from "../权限系统/chunk-jsd70b22.js";
import { TEAMMATE_SYSTEM_PROMPT_ADDENDUM as vin } from "./chunk-5nnwwahg.js";
import { Xdt } from "../../01-核心基础设施/共享小工具-未细化/chunk-mnvjcy8y.js";
import { Jdt, jqe, Wqe } from "../权限系统/chunk-n4x6jsp3.js";
import { L1t } from "./chunk-4ma81w0c.js";
import { kT } from "./chunk-z2t8b9yc.js";
import { v1e, Awt, Cwt } from "./chunk-eey53z5b.js";
import { Vr } from "../../01-核心基础设施/共享小工具-未细化/chunk-9mfwkyac.js";
import { fs } from "./chunk-enjekn9t.js";
import { G, Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
var je = 500,
  be = 500;
function Ge(s, e, t, _) {
  return async (o, m, T, d, M, C) => {
    let w = C ?? (await fTe(o, m, T, d, M, void 0, _));
    if (w.behavior !== "ask") return w;
    let p = w.updatedInput ?? m;
    if (e.signal.aborted) return { behavior: "ask", message: II };
    let A = ce(T),
      I = () =>
        o.description(p, {
          isNonInteractiveSession: T.options.isNonInteractiveSession,
          toolPermissionContext: A,
          tools: T.options.tools,
        });
    if (T.requestDialog !== void 0) {
      let l = Kdt.of(T.session).permissionContextSetter,
        ee = Uqe(o, m, T, d, M, _, (D) => {
          l?.(D, { preserveMode: !0 });
        }),
        j = await Pqe({
          ctx: ee,
          updatedInput: w.updatedInput,
          suggestions: w.suggestions,
          permissionMode: A.mode,
        });
      if (j) return j;
      if (e.signal.aborted) return { behavior: "ask", message: II };
      let R = await I();
      if (e.signal.aborted) return { behavior: "ask", message: II };
      let a = Date.now();
      try {
        return await new Promise((D, F) => {
          Bqe(
            {
              ctx: ee,
              description: R,
              result: w,
              awaitAutomatedChecksBeforeDialog: !0,
            },
            D,
          ).catch(F);
        });
      } finally {
        t(Date.now() - a);
      }
    }
    if (w.localDisplayOnly || w.forcedByCaller === !0)
      return Xdt(o.name, "the teammate mailbox (a static-description wire)");
    let E = await I();
    if (e.signal.aborted) return { behavior: "ask", message: II };
    return new Promise((l) => {
      let k = Awt({
        toolName: o.name,
        toolUseId: M,
        input: p,
        description: E,
        permissionSuggestions: w.suggestions,
        workerId: s.agentId,
        workerName: s.agentName,
        workerColor: s.color,
        teamName: s.teamName,
      });
      (Jdt({
        requestId: k.id,
        toolUseId: M,
        toolName: k.toolName,
        inputDigest: v1e(k.toolName, p),
        onAllow(a, D, F, B) {
          R();
          let z =
            o.suppressesAllPermissionUpdates?.(p) === !0
              ? HO(D)
              : o.suppressesAlwaysAllowRule?.(p) === !0 ||
                  w.suppressAlwaysAllowRule === !0
                ? c3(D, o, ce(T))
                : D;
          RD(z, T.storageV5).catch(h);
          let X = a && Object.keys(a).length > 0 ? a : p;
          l({
            behavior: "allow",
            updatedInput: X,
            userModified: !1,
            ...(B && B.length > 0 && { contentBlocks: B }),
          });
        },
        onReject(a, D) {
          R();
          let F = a ? `${$3}${a}` : II;
          l({ behavior: "ask", message: F, contentBlocks: D });
        },
        onRefuse(a) {
          (R(), l({ behavior: "ask", message: a }));
        },
        onUnboundVerdict() {},
      }),
        Cwt(k, T.storageV5).then((a) => {
          if (!a)
            (R(),
              l({
                behavior: "ask",
                message:
                  "The permission request could not be delivered to the team lead (mailbox write failed). Retry the tool call.",
              }));
        }));
      let ee = setInterval(
          async (a, D, F, B, z, X) => {
            if (a.signal.aborted) {
              (D(), F({ behavior: "ask", message: II }));
              return;
            }
            let ie = await ffe(B.agentName, B.teamName, X);
            for (let K of ie)
              if (K && !K.read) {
                let O = I1e(K.text);
                if (O && O.request_id === z.id) {
                  if (
                    (await BGt(B.agentName, B.teamName, K, X), K.from !== fs)
                  ) {
                    n(
                      `[InProcessRunner] Ignoring permission response from non-team-lead: ${K.from}`,
                      { level: "warn" },
                    );
                    continue;
                  }
                  if (O.subtype === "success")
                    Wqe({
                      requestId: O.request_id,
                      toolUseId: O.tool_use_id,
                      approvedRequest: O.approved_request,
                      decision: "approved",
                      updatedInput: O.response?.updated_input,
                      permissionUpdates: O.response?.permission_updates,
                    });
                  else
                    Wqe({
                      requestId: O.request_id,
                      toolUseId: O.tool_use_id,
                      approvedRequest: O.approved_request,
                      decision: "rejected",
                      feedback: O.error,
                    });
                  return;
                }
              }
          },
          je,
          e,
          R,
          l,
          s,
          k,
          T.storageV5,
        ),
        j = () => {
          (R(), l({ behavior: "ask", message: II }));
        };
      e.signal.addEventListener("abort", j, { once: !0 });
      function R() {
        (clearInterval(ee),
          jqe(k.id),
          e.signal.removeEventListener("abort", j));
      }
    });
  };
}
function L(s, e, t) {
  t.update(s, (_) => (_.type === "in_process_teammate" ? e(_) : _));
}
async function Ke(s, e, t, _, o) {
  return ag(
    fs,
    { from: s, text: e, timestamp: new Date().toISOString(), color: t },
    _,
    o,
  );
}
async function Ae(s, e, t, _, o) {
  let m = H1e(s, _),
    T;
  try {
    T = await Ke(s, b(m), e, t, o);
  } finally {
    fCe(m, _?.result, T);
  }
  return T !== void 0;
}
function He(s) {
  let e = new Set(s.filter((t) => t.status !== "completed").map((t) => t.id));
  return s.find((t) => {
    if (t.status !== "pending") return !1;
    if (t.owner) return !1;
    return t.blockedBy.every((_) => !e.has(_));
  });
}
function Ve(s) {
  let e = `Complete all open tasks. Start with task #${s.id}: 

 ${s.subject}`;
  if (s.description)
    e += `

${s.description}`;
  return e;
}
async function De(s, e, t, _) {
  if (!t) return;
  try {
    let o = await RC(s, _),
      m = He(o);
    if (!m) return;
    let T = await RZn(s, m.id, e, void 0, _);
    if (!T.success) {
      n(`[inProcessRunner] Failed to claim task #${m.id}: ${T.reason}`);
      return;
    }
    return (
      await loe(s, m.id, { status: "in_progress" }, _),
      n(`[inProcessRunner] Claimed task #${m.id}: ${m.subject}`),
      Ve(m)
    );
  } catch (o) {
    n(`[inProcessRunner] Error checking task list: ${o}`);
    return;
  }
}
async function Se(s, e, t, _, o) {
  let m;
  try {
    ((m = await ffe(s.agentName, s.teamName, _, {
      throwOnUnknownReadError: !0,
    })),
      (o.readFailures = 0));
  } catch (p) {
    return (
      o.readFailures++,
      n(
        `[inProcessRunner] ${s.agentName} could not read mailbox (${o.readFailures} consecutive): ${p}`,
        { level: "warn" },
      ),
      null
    );
  }
  let T = -1,
    d = null;
  for (let p = 0; p < m.length; p++) {
    let A = m[p];
    if (A && !A.read) {
      let I = mCe(A.text);
      if (I) {
        ((T = p), (d = I));
        break;
      }
    }
  }
  if (T !== -1) {
    if (o.count > 0) {
      let I = m.filter(
        (E, l) =>
          !E.read && l !== T && !DH(E.text) && !o.deliveredUnmarked.has(SG(E)),
      );
      if (I.length > 0) {
        for (let l of I) o.deliveredUnmarked.add(SG(l));
        let E = await fJ(s.agentName, s.teamName, I, _);
        if (E) ((o.count = 0), (o.reported = !1), o.deliveredUnmarked.clear());
        else if (!o.reported)
          ((o.reported = !0),
            g("swarm_inbox_poll", "worker_mark_read_failed_streak"));
        return (
          n(
            `[inProcessRunner] ${s.agentName} delivering ${I.length} held message(s) ahead of a shutdown_request${E ? "" : " (mark still not landed)"}`,
            { level: E ? "debug" : "warn" },
          ),
          { type: "new_messages", messages: I }
        );
      }
    }
    let p = m[T],
      A = G(m.slice(0, T), (I) => !I.read);
    return (
      n(
        `[inProcessRunner] ${s.agentName} received shutdown request from ${d?.from} (prioritized over ${A} unread messages)`,
      ),
      await BGt(s.agentName, s.teamName, p, _),
      {
        type: "shutdown_request",
        request: d,
        originalMessage: p.text,
        entryFrom: p.from,
      }
    );
  }
  let M = [],
    C = [];
  for (let p of m) {
    if (!p || p.read) continue;
    if (DH(p.text)) M.push(p);
    else C.push(p);
  }
  let w = null;
  if (M.length > 0) {
    for (let A of M) {
      let I = HXe(A.text);
      if (I && A.from === fs) {
        let E = r8n(e, I, t, _);
        if (E)
          (n(
            `[inProcessRunner] ${s.agentName} applied lead plan_approval_response: approved=${E.approved}`,
          ),
            (w = PXe(E)));
        else
          n(
            `[inProcessRunner] ${s.agentName} ignoring stale plan_approval_response (not awaiting approval)`,
          );
        continue;
      }
      if (IXe(A.text)) {
        n(
          `[inProcessRunner] ${s.agentName} dropping mode_set_request message: permission mode changes are never accepted from the inbox`,
          { level: "warn" },
        );
        continue;
      }
      n(
        `[inProcessRunner] ${s.agentName} dropping protocol frame from ${A.from}: ${A.text.substring(0, 80)}`,
        { level: "warn" },
      );
    }
    if (!(await fJ(s.agentName, s.teamName, M, _)))
      n(
        `[inProcessRunner] ${s.agentName} could not mark ${M.length} protocol frame(s) read; retrying next poll`,
        { level: "warn" },
      );
  }
  if (w) return { type: "new_message", message: w, from: fs };
  if (C.length > 0) {
    if (await fJ(s.agentName, s.teamName, C, _))
      ((o.count = 0), (o.reported = !1), o.deliveredUnmarked.clear());
    else {
      let A = ++o.count;
      if (A < pJ)
        return (
          n(
            `[inProcessRunner] ${s.agentName} could not mark ${C.length} message(s) read (${A}/${pJ}); delivery retried next poll`,
            { level: "warn" },
          ),
          null
        );
      if (
        (n(
          `[inProcessRunner] ${s.agentName} could not mark ${C.length} message(s) read for ${A} poll(s); delivering the batch unmarked`,
          { level: "warn" },
        ),
        !o.reported)
      )
        ((o.reported = !0),
          g("swarm_inbox_poll", "worker_mark_read_failed_streak"));
      for (let I of C) o.deliveredUnmarked.add(SG(I));
    }
    return (
      n(
        `[inProcessRunner] ${s.agentName} draining ${C.length} message(s) from ${Y(C.map((A) => A.from)).join(", ")}`,
      ),
      { type: "new_messages", messages: C }
    );
  }
  if (o.count > 0)
    ((o.count = 0), (o.reported = !1), o.deliveredUnmarked.clear());
  return null;
}
async function Ye(s, e, t, _, o, m, T, d, M, C = !1, w) {
  n(
    `[inProcessRunner] ${s.agentName} starting poll loop (abort=${e.signal.aborted})`,
  );
  let p = Date.now(),
    A = !1,
    I = 0;
  while (!e.signal.aborted) {
    if (I > 0) await Z(be);
    I++;
    let E = _(),
      l = E.tasks[t];
    if (
      l &&
      l.type === "in_process_teammate" &&
      l.pendingUserMessages.length > 0
    ) {
      let R = l.pendingUserMessages[0];
      return (
        L(
          t,
          (a) => ({
            ...a,
            pendingUserMessages: a.pendingUserMessages.slice(1),
          }),
          o,
        ),
        n(
          `[inProcessRunner] ${s.agentName} found pending user message (poll #${I})`,
        ),
        { type: "new_message", message: R.text, origin: R.origin, from: "user" }
      );
    }
    let k = s.resumableAgentId !== void 0 && JLe(s.resumableAgentId, o);
    if (
      C ||
      (l?.type === "in_process_teammate" && l.awaitingPlanApproval) ||
      E.viewingAgentTaskId === t ||
      $Ve(E.tasks, t) ||
      k
    )
      p = Date.now();
    if (C && l?.type === "in_process_teammate" && l.evictAfter !== void 0)
      L(t, (R) => ({ ...R, evictAfter: void 0 }), o);
    if (
      l?.type === "in_process_teammate" &&
      l.evictAfter !== void 0 &&
      ((k && l.evictAfter <= Date.now() + be) || (A && !k))
    )
      L(t, (R) => ({ ...R, evictAfter: Date.now() + fT }), o);
    if (((A = k), e.signal.aborted))
      return (
        n(
          `[inProcessRunner] ${s.agentName} aborted while waiting (poll #${I})`,
        ),
        { type: "aborted" }
      );
    if (T) continue;
    n(`[inProcessRunner] ${s.agentName} poll #${I}: checking mailbox`);
    try {
      let R = await Se(s, t, o, w, M);
      if (R) return R;
      if (M.count > 0 && M.readFailures < pJ) {
        p = Date.now();
        let a = _().tasks[t];
        if (a?.type === "in_process_teammate" && a.evictAfter !== void 0)
          L(t, (D) => ({ ...D, evictAfter: Date.now() + fT }), o);
        continue;
      }
    } catch (R) {
      n(`[inProcessRunner] ${s.agentName} poll error: ${R}`);
    }
    let j = await De(m, s.agentName, d, w);
    if (j) return { type: "new_message", message: j, from: "task-list" };
  }
  return (
    n(
      `[inProcessRunner] ${s.agentName} exiting poll loop (abort=${e.signal.aborted}, polls=${I})`,
    ),
    { type: "aborted" }
  );
}
async function Je(s) {
  let {
      identity: e,
      taskId: t,
      prompt: _,
      description: o,
      agentDefinition: m,
      teammateContext: T,
      toolUseContext: d,
      abortController: M,
      model: C,
      systemPrompt: w,
      systemPromptMode: p,
      allowedTools: A,
      allowPermissionPrompts: I,
      invokingRequestId: E,
      standalone: l = !1,
      resumeMessages: k,
      resumeReplacementState: ee,
      initialFrom: j,
    } = s,
    { setAppState: R, taskRegistry: a } = d,
    D = gbt(t),
    F = {
      count: 0,
      reported: !1,
      deliveredUnmarked: new Set(),
      readFailures: 0,
    };
  n(`[inProcessRunner] Starting agent loop for ${e.agentId}`);
  let B = {
      agentId: e.agentId,
      parentAgentId: d.agentId,
      depth: mc(d.agentContext),
      parentSessionId: e.parentSessionId,
      agentName: e.agentName,
      teamName: e.teamName,
      agentColor: e.color,
      planModeRequired: e.planModeRequired,
      isTeamLead: !1,
      agentType: "teammate",
      invokingRequestId: E,
      invocationKind: "spawn",
      invocationEmitted: !1,
      isBackgroundAgent: !0,
    },
    { tools: z, mainLoopModel: X } = d.rootToolSurface,
    ie;
  if (p === "replace" && w) ie = w;
  else {
    let H = [
      ...(await VS(z, X, void 0, { teammate: !0 })).filter((W) => W !== FU),
      vin,
    ];
    if (m) {
      let W = m.getSystemPrompt({
        toolUseContext: d,
        primedAgentMemory: await NFe(m, d.storageV5),
      });
      if (W)
        H.push(`
# Custom Agent Instructions
${W}`);
      if (m.memory)
        i("tengu_agent_memory_loaded", {
          ...!1,
          scope: u(m.memory),
          source: S("in-process-teammate"),
        });
    }
    if (p === "append" && w) H.push(w);
    ie = H.join(`
`);
  }
  let K = T.hasTaskListTools,
    O = {
      agentType: e.agentName,
      whenToUse: `In-process teammate: ${e.agentName}`,
      getSystemPrompt: () => ie,
      tools: m?.tools
        ? Y([...m.tools, Vr, ...(K ? [UE, mG, kT, WE] : [])])
        : ["*"],
      source: "projectSettings",
      permissionMode: "default",
      ...(m?.model && { model: m.model }),
    },
    U = k ? [...k] : [],
    he = new Set(k?.map((P) => P.uuid)),
    xe = {
      taskKind: "in_process_teammate",
      teamName: e.teamName,
      color: e.color,
      planModeRequired: e.planModeRequired,
      ...(m && { customAgentType: m.agentType }),
      ...(C && { model: C }),
    },
    ve = vXe({ from: j ?? fs, text: _, summary: o }),
    V = ve,
    me = void 0,
    pe = !1,
    re = !1,
    Me = (k?.length ?? 0) > 0,
    we = !1,
    ge = k ? Tbe(k).result : void 0,
    fe = !1,
    ke = async (P) => {
      switch (((re = !1), P.type)) {
        case "shutdown_request":
          (n(
            `[inProcessRunner] ${e.agentId} received shutdown request - passing to model`,
          ),
            (V = vXe({
              from:
                typeof P.entryFrom === "string" && P.entryFrom !== ""
                  ? P.entryFrom
                  : __,
              text: O1e(
                Pwt(P.originalMessage, P.entryFrom) ?? P.originalMessage,
                P.entryFrom,
              ),
            })),
            (me = void 0),
            L1t(t, Re({ content: V }), a));
          break;
        case "new_message":
          if (
            (n(
              `[inProcessRunner] ${e.agentId} received new message from ${P.from}`,
            ),
            P.from === "user")
          )
            ((V = P.message), (me = P.origin));
          else
            ((V = vXe({
              from: P.from,
              text: P.message,
              color: P.color,
              summary: P.summary,
            })),
              (me = void 0),
              L1t(t, Re({ content: V }), a));
          break;
        case "new_messages":
          (n(
            `[inProcessRunner] ${e.agentId} received ${P.messages.length} drained message(s)`,
          ),
            (V = coe(P.messages, { recipientIsLead: !1 })),
            (me = void 0),
            L1t(t, Re({ content: V }), a));
          break;
        case "aborted":
          (n(`[inProcessRunner] ${e.agentId} aborted while waiting`),
            (pe = !0));
          break;
        case "idle_timeout":
          if (
            (n(
              `[inProcessRunner] ${e.agentId} idle timeout \u2014 exiting loop`,
            ),
            !l)
          )
            (d.agentLifecycle.setTeammate(e.agentId, void 0),
              await TXe(
                e.teamName,
                e.agentId,
                { onlyIfJoinedBefore: Date.now() },
                d.storageV5,
              ));
          pe = !0;
          break;
      }
    };
  if (!l) await De(e.parentSessionId, e.agentName, K, d.storageV5);
  try {
    a.updateTranscript(t, (v) => {
      let J = v.messages;
      if (k) for (let ye of k.slice(-n2t)) J = Yue(J, ye);
      return { ...v, messages: Yue(J, Re({ content: ve })) };
    });
    let P = d.contentReplacementState ? (ee ?? hbt()) : void 0,
      H = CW(),
      W = Le();
    while (!M.signal.aborted && !pe) {
      n(
        `[inProcessRunner] ${e.agentId} processing prompt: ${V.substring(0, 50)}...`,
      );
      let v = hr();
      (v.signal.addEventListener("abort", () => {
        fe = !0;
      }),
        L(
          t,
          (r) => ({ ...r, currentWorkAbortController: v, retryWake: W }),
          a,
        ));
      let J = Re({ content: V, origin: me }),
        ye = [J],
        de = U,
        Ee = Mg(U, lf(X));
      if (Ee > NTe(X, E6t(d.options.autoCompactWindow))) {
        n(`[inProcessRunner] ${e.agentId} compacting history (${Ee} tokens)`);
        let r = {
          ...d,
          abortController: M,
          agentId: oo(e.agentId),
          readFileState: Woe(d.readFileState, { stripSeededFromContext: !0 }),
          memorySelector: z2(),
          loadedNestedMemoryPaths: {},
          onCompactEvent: void 0,
          onRetryStatus: D.setRetryStatus,
        };
        try {
          let c = await Ajt(
            U,
            r,
            {
              systemPrompt: Zo([]),
              userContext: {},
              systemContext: {},
              toolUseContext: r,
              forkContextMessages: U,
              advisorModel: r.getAppState().advisorModel,
            },
            !0,
            { isAutoCompact: !0 },
          );
          if (((de = wne(c)), P)) P = hbt();
          ((U.length = 0),
            U.push(...de),
            he.clear(),
            a.updateTranscript(t, (N) => ({ ...N, messages: [...de, J] })));
        } catch (c) {
          if (c instanceof Error && c.message.startsWith(oKe))
            (n(
              `[inProcessRunner] ${e.agentId} compaction blocked by PreCompact hook; continuing uncompacted`,
            ),
              (we = !0));
          else if (
            M.signal.aborted ||
            (c instanceof Error && c.message === hA)
          ) {
            (n(`[inProcessRunner] ${e.agentId} aborted during compaction`),
              (pe = !0));
            break;
          } else throw c;
        }
      }
      let Ue = de.length > 0 ? [...de] : void 0;
      (U.push(J), (ge = void 0), (fe = v.signal.aborted));
      let le = X2t(),
        Te = a.get(t);
      if (Te !== void 0 && "progress" in Te && Te.progress !== void 0)
        le.latestInputTokens = Te.progress.tokenCount;
      let Oe = Q2t(z),
        ue = [],
        Pe = d.getAppState().tasks[t],
        Ne =
          Pe && Pe.type === "in_process_teammate"
            ? Pe.permissionMode
            : "default",
        qe = { ...O, permissionMode: Ne },
        $e = !1,
        te = null;
      if (
        (await zir(T, async () =>
          kw(B, async () => {
            (L(
              t,
              (r) => ({
                ...r,
                status: "running",
                isIdle: !1,
                evictAfter: void 0,
                evictAfterHeldBySibling: void 0,
              }),
              a,
            ),
              a.updateTranscript(t, (r) => ({
                ...r,
                turnStartTime: Date.now(),
              })),
              D.setMode("responding"));
            for await (let r of dw({
              agentDefinition: qe,
              promptMessages: ye,
              toolUseContext: d,
              canUseTool: Ge(
                e,
                v,
                (c) => {
                  L(
                    t,
                    (N) => ({
                      ...N,
                      totalPausedMs: (N.totalPausedMs ?? 0) + c,
                    }),
                    a,
                  );
                },
                SV(R),
              ),
              isAsync: !0,
              canShowPermissionPrompts: I ?? !0,
              forkContextMessages: Ue,
              querySource: "agent:custom",
              override: {
                abortController: v,
                agentContext: B,
                onRetryStatus: D.setRetryStatus,
                subscribeRetryWake: W.subscribe,
                ...(e.resumableAgentId && { agentId: e.resumableAgentId }),
              },
              ...(e.resumableAgentId && {
                recordedUuids: he,
                name: e.agentName,
                description: o,
                extraMetadata: { ...xe, permissionMode: Ne },
              }),
              onStreamTokenEstimate: (c) => {
                J2t(le, c);
                let N = iLe(le);
                L(
                  t,
                  (q) =>
                    q.progress?.tokenCount === N.tokenCount
                      ? q
                      : { ...q, progress: N },
                  a,
                );
              },
              model: C,
              preserveToolUseResults: !0,
              availableTools: z,
              allowedTools: A,
              contentReplacementState: P,
              stickyBetas: H,
              isTeammate: !0,
              teammateContext: T,
            })) {
              if (M.signal.aborted) {
                n(`[inProcessRunner] ${e.agentId} lifecycle aborted`);
                break;
              }
              if (v.signal.aborted) {
                if (
                  (n(
                    `[inProcessRunner] ${e.agentId} current work aborted (Escape pressed)`,
                  ),
                  r.type === "assistant" ||
                    r.type === "user" ||
                    (r.type === "attachment" && bT(r)))
                )
                  (ue.push(r), U.push(r), (te = Cne(U, r, te)));
                $e = !0;
                break;
              }
              if (r.type === "spinner_mode") {
                D.setMode(r.mode);
                continue;
              }
              if (r.type === "api_metrics") continue;
              if (r.type === "query_model_change") continue;
              if (r.type === "set_in_progress_tool_use_ids") {
                if (r.op.action !== "remove") continue;
                let N = r.op.ids;
                a.updateTranscript(t, (q) => {
                  let Q = new Set(q.inProgressToolUseIDs),
                    ne = !1;
                  for (let _e of N) if (Q.delete(_e)) ne = !0;
                  return ne ? { ...q, inProgressToolUseIDs: Q } : q;
                });
                continue;
              }
              if (r.type === "system" && r.subtype === "api_error") continue;
              (ue.push(r), U.push(r), (te = Cne(U, r, te)), Y2t(le, r, Oe, z));
              let c = iLe(le);
              (L(t, (N) => ({ ...N, progress: c }), a),
                a.updateTranscript(t, (N) => {
                  let q = N.inProgressToolUseIDs;
                  if (r.type === "assistant") {
                    for (let Q of r.message.content)
                      if (Q.type === "tool_use") q = new Set([...q, Q.id]);
                  } else if (r.type === "user") {
                    let Q = r.message.content;
                    if (Array.isArray(Q)) {
                      for (let ne of Q)
                        if (
                          typeof ne === "object" &&
                          "type" in ne &&
                          ne.type === "tool_result"
                        ) {
                          let _e = new Set(q);
                          (_e.delete(ne.tool_use_id), (q = _e));
                        }
                    }
                  }
                  return {
                    ...N,
                    messages: qzn(N.messages, r),
                    inProgressToolUseIDs: q,
                  };
                }));
            }
            return { success: !0, messages: ue };
          }),
        ).finally(() => {
          if (te) (U.push(...te.preserved), (te = null));
        }),
        L(t, (r) => ({ ...r, currentWorkAbortController: void 0 }), a),
        M.signal.aborted)
      )
        break;
      let ae = $e || v.signal.aborted;
      if (ae) {
        ((fe = !0),
          n(
            `[inProcessRunner] ${e.agentId} work interrupted, returning to idle`,
          ));
        let r = Co({ content: hA });
        a.updateTranscript(t, (c) => ({ ...c, messages: Yue(c.messages, r) }));
      }
      Me ||= ue.some(
        (r) =>
          (r.type === "assistant" && !r.isApiErrorMessage) ||
          (r.type === "user" && !r.isMeta),
      );
      let se = !ae ? nhn(ue) : void 0;
      if (((re = se?.isTransient === !0 && !l && Me), !l && !ae)) {
        let r = null;
        try {
          r = await Se(e, t, a, d.storageV5, F);
          while (
            r === null &&
            F.count > 0 &&
            F.readFailures < pJ &&
            !M.signal.aborted
          )
            (await Z(be), (r = await Se(e, t, a, d.storageV5, F)));
        } catch (c) {
          n(
            `[inProcessRunner] ${e.agentName} turn-end mailbox check failed: ${c}`,
          );
        }
        if (r) {
          try {
            let { result: c, summary: N } = Tbe(U, { emitTelemetry: !0 });
            if (c !== void 0 || se !== void 0) {
              if (
                (await Ae(
                  e.agentName,
                  e.color,
                  e.teamName,
                  {
                    idleReason: se !== void 0 ? "failed" : void 0,
                    summary: N,
                    failureReason: se?.reason,
                    result: c,
                    senderReachable: !0,
                  },
                  d.storageV5,
                )) &&
                c !== void 0
              )
                ge = c;
            }
          } catch (c) {
            n(
              `[inProcessRunner] ${e.agentName} turn-end result delivery failed: ${c}`,
            );
          }
          await ke(r);
          continue;
        }
      }
      if (se?.isTransient)
        i("tengu_teammate_transient_turn_failure", {
          error_kind: u(se.errorKind ?? "unknown"),
          hold_evict: re,
        });
      let Ce = d.getAppState().tasks[t],
        Fe = Ce?.type === "in_process_teammate" && Ce.isIdle;
      L(
        t,
        (r) => (
          r.onIdleCallbacks?.forEach((c) => c()),
          {
            ...r,
            isIdle: !0,
            evictAfter: re ? void 0 : Date.now() + fT,
            onIdleCallbacks: [],
          }
        ),
        a,
      );
      let Ie = se?.reason;
      if (!Fe && !l) {
        let r = Tbe(U, { emitTelemetry: !ae }),
          c = ae ? void 0 : r.result,
          N = await Ae(
            e.agentName,
            e.color,
            e.teamName,
            {
              idleReason: ae
                ? "interrupted"
                : Ie !== void 0
                  ? "failed"
                  : "available",
              summary: r.summary,
              failureReason: Ie,
              result: c,
              senderReachable: Ie === void 0 || re,
            },
            d.storageV5,
          );
        if (c !== void 0 && N) ge = c;
      } else
        n(
          `[inProcessRunner] Skipping duplicate idle notification for ${e.agentName}`,
        );
      n(`[inProcessRunner] ${e.agentId} finished prompt, waiting for next`);
      let Be = await Ye(
        e,
        M,
        t,
        d.getAppState,
        a,
        e.parentSessionId,
        l,
        K,
        F,
        re,
        d.storageV5,
      );
      await ke(Be);
    }
    let oe = !1,
      x;
    if (
      (L(
        t,
        (v) => {
          if (v.status !== "running") return ((oe = !0), v);
          return (
            (x = v.toolUseId),
            v.onIdleCallbacks?.forEach((J) => J()),
            {
              ...v,
              status: "completed",
              notified: !0,
              endTime: Date.now(),
              pendingUserMessages: [],
              abortController: void 0,
              currentWorkAbortController: void 0,
              retryWake: void 0,
              onIdleCallbacks: [],
            }
          );
        },
        a,
      ),
      !oe)
    )
      a.updateTranscript(t, (v) => ({
        ...v,
        messages: v.messages.length ? [v.messages.at(-1)] : [],
        inProgressToolUseIDs: new Set(),
      }));
    if ((Sd(t), a.evictTerminal(t), !oe))
      pi(t, "completed", { toolUseId: x, summary: e.agentId });
    if ((Rwe(e.agentId), we))
      g("swarm_in_process_run", "compact_blocked_by_hook");
    else y("swarm_in_process_run");
    return { success: !0, messages: U };
  } catch (P) {
    let H = P instanceof Error ? P.message : "Unknown error";
    n(`[inProcessRunner] Agent ${e.agentId} failed: ${H}`);
    let W = !1,
      oe;
    if (
      (L(
        t,
        (x) => {
          if (x.status !== "running") return ((W = !0), x);
          return (
            (oe = x.toolUseId),
            x.onIdleCallbacks?.forEach((v) => v()),
            {
              ...x,
              status: "failed",
              notified: !0,
              error: H,
              isIdle: !0,
              endTime: Date.now(),
              onIdleCallbacks: [],
              pendingUserMessages: [],
              abortController: void 0,
              currentWorkAbortController: void 0,
              retryWake: void 0,
            }
          );
        },
        a,
      ),
      !W)
    )
      a.updateTranscript(t, (x) => ({
        ...x,
        messages: x.messages.length ? [x.messages.at(-1)] : [],
        inProgressToolUseIDs: new Set(),
      }));
    if ((Sd(t), a.evictTerminal(t), !W))
      pi(t, "failed", { toolUseId: oe, summary: e.agentId });
    if (!l) {
      let x;
      try {
        x = fe ? void 0 : eWn(U);
      } catch (v) {
        n(
          `[inProcessRunner] ${e.agentName} failed to extract partial result: ${v}`,
        );
      }
      if (x !== void 0 && x === ge) x = void 0;
      await Ae(
        e.agentName,
        e.color,
        e.teamName,
        {
          idleReason: "failed",
          completedStatus: "failed",
          failureReason: H,
          result: x,
        },
        d.storageV5,
      );
    }
    return (
      Rwe(e.agentId),
      f("swarm_in_process_run", "agent_loop_failed"),
      { success: !1, error: H, messages: U }
    );
  }
}
function Cin(s) {
  let e = s.identity.agentId;
  Je(s).catch((t) => {
    n(`[inProcessRunner] Unhandled error in ${e}: ${t}`);
  });
}
export { Cin };
