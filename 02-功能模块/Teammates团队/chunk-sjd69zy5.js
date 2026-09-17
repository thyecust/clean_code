// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { bh, K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { buildAgentId } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { buildInProcessTeammateContext } from "./teammate-context.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { matchesToolName } from "../权限系统/chunk-qdy0h5k2.js";
import { createAbortController } from "../../01-核心基础设施/核心工具-进程与信号/chunk-h3cty6gp.js";
import { hasPerfettoRecorder, registerPerfettoAgent, isInProcessTeammateTask, isLocalAgentTask } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { TASK_UPDATE_TOOL_NAME } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { areTasksEnabled } from "./chunk-g6nvp9mm.js";
import { generateTaskId, createPendingTask } from "./chunk-mrfx53ye.js";
function M(t, o) {
  if (o) return "plan";
  if (t === "plan" || t === "dontAsk") return "default";
  return t;
}
async function spawnInProcessTeammate(t, o) {
  let {
      name: e,
      teamName: p,
      prompt: g,
      color: k,
      planModeRequired: l,
      model: P,
    } = t,
    { taskRegistry: A } = o,
    s = buildAgentId(e, p),
    d = generateTaskId("in_process_teammate"),
    c = t.resumableAgentId ?? bh(e);
  logForDebugging(`[spawnInProcessTeammate] Spawning ${s} (taskId: ${d})`);
  try {
    let r = createAbortController(),
      a = K(),
      S = {
        agentId: s,
        agentName: e,
        teamName: p,
        color: k,
        planModeRequired: l,
        parentSessionId: a,
        resumableAgentId: c,
      },
      w = buildInProcessTeammateContext({
        agentId: s,
        agentName: e,
        teamName: p,
        color: k,
        planModeRequired: l,
        parentSessionId: a,
        hasTaskListTools:
          areTasksEnabled() && o.rootToolSurface.tools.some((m) => matchesToolName(m, TASK_UPDATE_TOOL_NAME)),
        abortController: r,
      });
    if (hasPerfettoRecorder()) registerPerfettoAgent(s, e, a);
    let C =
        t.description ?? `${g.substring(0, 50)}${g.length > 50 ? "..." : ""}`,
      b = {
        ...createPendingTask(d, "in_process_teammate", C, o.toolUseId),
        type: "in_process_teammate",
        status: "running",
        identity: S,
        prompt: t.description ?? g,
        model: P,
        abortController: r,
        awaitingPlanApproval: !1,
        permissionMode: t.permissionMode ?? M(getToolPermissionContext(o).mode, l),
        isIdle: !1,
        lastReportedToolCount: 0,
        lastReportedTokenCount: 0,
        pendingUserMessages: [],
      };
    A.register(b);
    let T = o.getAppState(),
      i = T.agentNameRegistry.get(e);
    if (i !== c) {
      let m = i !== void 0 ? T.tasks[i] : void 0,
        u =
          i !== void 0 &&
          (m?.status === "running" ||
            isLocalAgentTask(m) ||
            Object.values(T.tasks).some(
              (I) =>
                isInProcessTeammateTask(I) &&
                I.status === "running" &&
                I.identity.resumableAgentId === i,
            ))
            ? o.agentLifecycle.allocateName(e)
            : e;
      if (u !== e)
        logForDebugging(
          `[spawnInProcessTeammate] name "${e}" already routes to live ${i}; registry entry uses "${u}" instead`,
        );
      o.agentLifecycle.registerName(u, c);
    }
    return (
      logForDebugging(`[spawnInProcessTeammate] Registered ${s} in AppState`),
      logFeatureOk("swarm_in_process_spawn"),
      {
        ok: !0,
        agentId: s,
        identity: S,
        taskId: d,
        abortController: r,
        teammateContext: w,
      }
    );
  } catch (r) {
    let a = r instanceof Error ? r.message : "Unknown error during spawn";
    return (
      logForDebugging(`[spawnInProcessTeammate] Failed to spawn ${s}: ${a}`),
      logFeatureBad("swarm_in_process_spawn", "spawn_failed"),
      { ok: !1, agentId: s, error: a }
    );
  }
}
export { spawnInProcessTeammate };
