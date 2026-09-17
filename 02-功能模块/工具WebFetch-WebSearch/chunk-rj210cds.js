// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  oo,
  K,
  aOn,
  he,
  sn,
  aDn,
  c_e,
  ke,
  X1,
  bae,
  ic,
} from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logFeatureOk } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { ju, Ia } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import {
  Mft,
  Rte,
  tmt,
  n3,
  Hy,
  kM,
  lTe,
  bp,
  hd,
  yVe,
  Cgt,
  pu,
  nr,
  Yf,
  V2,
  K2,
  IV,
  getMaterializedSessionFile,
  resetSessionFilePointer,
  saveCustomTitle,
  isSessionHistorySuppressed,
  holdSessionHistorySuppression,
  dropSessionHistorySuppression,
  pinSessionId,
  releasePrecautionarySuppressionFor,
  isConversationEgressTainted,
  getCurrentSessionTitle,
  getCurrentSessionAgentName,
  clearSessionMetadata,
  saveAgentName,
  cacheSessionTitle,
  saveIsolationLatch,
  saveWorktreeState,
  executeSessionEndHooks,
  getSessionEndHookTimeoutMs,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { yl, Ud } from "../Teammates团队/chunk-thxapyam.js";
import { Q$ } from "../Skills技能/chunk-sapykxw7.js";
import { clearAllPlanSlugs } from "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import { evictTaskOutput, initTaskOutputAsSymlink } from "../后台任务-Shell管理/chunk-x3txegas.js";
import { retainPathLinks } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { isBridgeStateFramesEnabled } from "../Bridge-RemoteControl/chunk-9estzwf5.js";
import { cfe } from "../插件系统/chunk-ajtn749s.js";
import { Q3 } from "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import { vJ, HCe, xoe, ICe, PCe } from "../Artifact发布-渲染/chunk-rr78st95.js";
import { runBundledSkillSessionResets } from "../Skills技能/chunk-1zy5c8mf.js";
import { syncJobResumeSessionId } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import { GOAL_PROPOSAL_DIALOG } from "../../01-核心基础设施/共享小工具-未细化/goal-proposal-dialog.js";
import { resetTransientSessionState, closeAllWebViews } from "../上下文压缩-Compact/chunk-1ntrf0ja.js";
import { sessionAnnouncementStateStore } from "../../01-核心基础设施/共享小工具-未细化/session-announcement-state.js";
import { brn } from "./chunk-1mxgbqzj.js";
import { pruneAgentNameRegistry } from "../Teammates团队/agent-lifecycle.js";
import { xs } from "../Teammates团队/chunk-mrfx53ye.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { randomUUID } from "crypto";
async function* yrn({
  session: t,
  setMessages: m,
  readFileState: L,
  loadedNestedMemoryPaths: v,
  sessionEnvVars: j,
  toolState: M,
  memorySelector: N,
  getAppState: s,
  setAppState: k,
  sessionHooksRegistry: U,
  dialogStore: F,
  isolationLatch: d,
  taskRegistry: b,
  clearedSessionTitle: u,
  storageV5: o,
  credentials: I,
}) {
  (Cgt(t), Hy(n3), ICe(), xoe(), vJ());
  let H = getSessionEndHookTimeoutMs();
  (await executeSessionEndHooks(t, "clear", {
    sessionHooks: U,
    getAppState: s,
    signal: AbortSignal.timeout(H),
    storageV5: o,
    credentials: I,
  }),
    tmt("conversation_clear"));
  let c = new Set(),
    E = [];
  if (s)
    for (let e of Object.values(s().tasks)) {
      if (C(e)) continue;
      if (nr(e)) (c.add(e.agentId), E.push(e));
      else if (hd(e)) c.add(e.identity.agentId);
    }
  (K2("clear"),
    m((e) => {
      if (Rte() === "padded-countdown")
        Mft.of(t).rollOverContext("main", kM(e));
      return [];
    }));
  let B = s
    ? Object.values(s().tasks).some(
        (e) =>
          !C(e) &&
          yVe.has(e.type) &&
          (e.status === "running" || (nr(e) && Yf(e))),
      )
    : !1;
  brn(t, c, k, M, o, B);
  let O = he();
  try {
    pu(O);
  } catch {
    n(`/clear: originalCwd "${O}" no longer exists; falling back`);
    let e = sn();
    if (e !== O)
      try {
        pu(e);
      } catch {}
  }
  if ((L.clear(), v)) for (let e of Object.keys(v)) delete v[e];
  if ((j?.clear(), V2(N), d && c.size === 0)) d.current = null;
  if (s) closeAllWebViews(s);
  let l = getCurrentSessionTitle(K()),
    A = getCurrentSessionAgentName(),
    f = !u && l !== void 0,
    x = f && isConversationEgressTainted(pinSessionId(K())),
    p,
    T;
  if ((HCe(), k)) {
    if (
      (F?.dismissKind(GOAL_PROPOSAL_DIALOG.kind),
      retainPathLinks(new Set()),
      k((e) => {
        let r = {};
        for (let [S, i] of Object.entries(e.tasks)) {
          if (!C(i)) {
            r[S] = i;
            continue;
          }
          try {
            if (i.status === "running") {
              if (bp(i)) (i.shellCommand?.kill(), i.shellCommand?.cleanup());
              if ("abortController" in i) i.abortController?.abort();
            }
          } catch (Q) {
            logError(Q);
          }
          evictTaskOutput(S);
        }
        return (
          (p = countMatching(Object.values(r), (S) => !Y.has(S.type))),
          (T = e.activeGoal),
          {
            ...resetTransientSessionState(e),
            tasks: r,
            runningSubagents: p === 0 ? 0 : e.runningSubagents,
            ...{ endedByModel: !1 },
            attribution: lTe(),
            cacheBreakerPhrase: void 0,
            sendMessagePins: {},
            agentNameRegistry: pruneAgentNameRegistry(e.agentNameRegistry, r),
            frameUrls: {},
            standaloneAgentContext:
              f && e.standaloneAgentContext?.name
                ? { name: e.standaloneAgentContext.name }
                : void 0,
            fileHistory: {
              snapshots: [],
              trackedFiles: new Set(),
              snapshotSequence: 0,
            },
          }
        );
      }),
      T !== void 0)
    )
      Q$(T, "session_clear");
  }
  if (b && p === 0) b.resetWebSearchCalls();
  if (s) {
    for (let e of s().mcp.clients)
      if (e.name === "ide" && e.type === "connected") {
        Q3(e, void 0);
        let { clearServerCache: r } = import.meta
          .require("../MCP客户端/mcpClientModule.4cyej0np.js")
          .mcpClientModule();
        await r(e.name, e.config).catch(() => {});
      }
  }
  clearAllPlanSlugs();
  let q = K(),
    W = u ? (getMaterializedSessionFile() ?? yl()) : void 0,
    z = isSessionHistorySuppressed(),
    _ = p === 0 && c.size === 0 ? void 0 : X1();
  if ((clearSessionMetadata(), z)) holdSessionHistorySuppression();
  if (_ !== void 0) bae(_);
  let w = randomUUID();
  if (ke() || (ic() && isBridgeStateFramesEnabled()))
    (ju({ type: "conversation_reset", new_conversation_id: w }),
      logFeatureOk("bridge_conversation_reset"));
  (yield { type: "conversation_reset", newConversationId: w }, aDn(o), c_e());
  let P = pinSessionId(K()),
    J = x || (f && isConversationEgressTainted(P));
  if ((aOn({ setCurrentAsParent: !0 }), f && l !== void 0)) cacheSessionTitle(l);
  let Z = Promise.resolve(!0);
  if ((runBundledSkillSessionResets(), PCe(), sessionAnnouncementStateStore.of(t).reset(), cfe(t), a.CLAUDE_CODE_SESSION_ID))
    process.env.CLAUDE_CODE_SESSION_ID = K();
  if ((await resetSessionFilePointer(), dropSessionHistorySuppression(), releasePrecautionarySuppressionFor(P), await syncJobResumeSessionId(K(), yl(), o), u))
    await saveCustomTitle(q, u, W, "user", o);
  else if (l) {
    if ((await saveCustomTitle(K(), l, void 0, "user", o), A))
      await saveAgentName(K(), A, void 0, "user", o);
  }
  for (let e of E) {
    if (e.status !== "running") continue;
    initTaskOutputAsSymlink(e.id, Ud(oo(e.agentId)));
  }
  {
    let { saveMode: e } = import.meta.require("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
      { isCoordinatorMode: r } = import.meta.require("../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js");
    e(r() ? "coordinator" : "normal");
  }
  let R = Ia();
  if (R) saveWorktreeState(R, o);
  if (d?.current) saveIsolationLatch(d.current, o);
  let D = await IV(t, "clear", { storageV5: o, credentials: I });
  if (D.length > 0) m(() => D);
}
function C(t) {
  return "isBackgrounded" in t && t.isBackgrounded === !1;
}
var Y = new Set(["local_bash", "monitor_mcp", "monitor_ws", "mcp_task"]);
function Srn(t) {
  return Object.values(t).some(
    (m) => !C(m) && yVe.has(m.type) && !xs(m.status),
  );
}
export { yrn, Srn };
