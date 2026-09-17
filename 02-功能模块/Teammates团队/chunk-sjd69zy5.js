// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { bh, K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logFeatureOk as y, logFeatureBad as f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { ix } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Vir } from "./chunk-811z9z0t.js";
import { getToolPermissionContext as ce } from "../权限系统/chunk-fjrcf22x.js";
import { Kt } from "../权限系统/chunk-qdy0h5k2.js";
import { createAbortController as hr } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { bue, cUt, hd, nr } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { WE } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { X_ } from "./chunk-g6nvp9mm.js";
import { Dh, Md } from "./chunk-mrfx53ye.js";
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
    s = ix(e, p),
    d = Dh("in_process_teammate"),
    c = t.resumableAgentId ?? bh(e);
  n(`[spawnInProcessTeammate] Spawning ${s} (taskId: ${d})`);
  try {
    let r = hr(),
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
      w = Vir({
        agentId: s,
        agentName: e,
        teamName: p,
        color: k,
        planModeRequired: l,
        parentSessionId: a,
        hasTaskListTools:
          X_() && o.rootToolSurface.tools.some((m) => Kt(m, WE)),
        abortController: r,
      });
    if (bue()) cUt(s, e, a);
    let C =
        t.description ?? `${g.substring(0, 50)}${g.length > 50 ? "..." : ""}`,
      b = {
        ...Md(d, "in_process_teammate", C, o.toolUseId),
        type: "in_process_teammate",
        status: "running",
        identity: S,
        prompt: t.description ?? g,
        model: P,
        abortController: r,
        awaitingPlanApproval: !1,
        permissionMode: t.permissionMode ?? M(ce(o).mode, l),
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
            nr(m) ||
            Object.values(T.tasks).some(
              (I) =>
                hd(I) &&
                I.status === "running" &&
                I.identity.resumableAgentId === i,
            ))
            ? o.agentLifecycle.allocateName(e)
            : e;
      if (u !== e)
        n(
          `[spawnInProcessTeammate] name "${e}" already routes to live ${i}; registry entry uses "${u}" instead`,
        );
      o.agentLifecycle.registerName(u, c);
    }
    return (
      n(`[spawnInProcessTeammate] Registered ${s} in AppState`),
      y("swarm_in_process_spawn"),
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
      n(`[spawnInProcessTeammate] Failed to spawn ${s}: ${a}`),
      f("swarm_in_process_spawn", "spawn_failed"),
      { ok: !1, agentId: s, error: a }
    );
  }
}
export { spawnInProcessTeammate };
