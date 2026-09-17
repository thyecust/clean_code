// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 202 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { oo, ze } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { runWithCwdOrDefault, getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { clampPermissionMode } from "./chunk-e4pfvp7x.js";
import { runWithAgentContext, getAgentDepth, getWorkflowRunMetadata } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getParentSessionId } from "../Teammates团队/teammate-context.js";
import { getToolPermissionContext } from "./chunk-fjrcf22x.js";
import {
  isBuiltInAgent,
  isPluginAgent,
  isMcpTool,
  formatAgentQuerySource,
  setObserverSpawner,
  markTaskNotified,
  registerBackgroundAgentTask,
  resolveSubagentModel,
  createModelRestrictedSystemMessageHandler,
  runAgent,
  resolveAgentTools,
  runAsyncAgent,
  buildSessionTools,
  createUserMessage,
  writeAgentMetadata,
  readAgentMetadata,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { excludeCoordinatorCommsMcpTools } from "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import { gNt, pjn } from "../工具Task-Agent调度/工具Task-Agent调度.5xpzy7cr.js";
import { parsePluginIdIgnoringReservedMarketplace } from "../插件系统/chunk-33bdfgmx.js";
async function v(e, r, o) {
  if (
    (await writeAgentMetadata(oo(e), { agentType: r.agentType, isObserver: !0 }, o),
    (await readAgentMetadata(oo(e), o))?.isObserver !== !0)
  )
    throw Error("observer marker read-back failed");
}
var b = {
  async spawnFirstRun({
    observerDefinition: e,
    pairing: r,
    framingPrompt: o,
    digest: a,
    toolUseContext: t,
    canUseTool: f,
  }) {
    let s = r.observerTaskId,
      d = t.session.withProject({ cwd: getCwd() });
    await v(s, e, t.storageV5);
    let { taskRegistry: p } = t,
      m = getToolPermissionContext(t),
      g = clampPermissionMode(r.armingPermissionMode, m.mode) ?? m.mode,
      c = { ...m, mode: g },
      w = t.options.tools.filter(isMcpTool),
      l = `${e.agentType}@${r.observedEnvelopeName}`,
      i = getAgentDepth(t.agentContext) + 1,
      A = gNt(
        resolveAgentTools(e, buildSessionTools(c, excludeCoordinatorCommsMcpTools(w), { skipReplFilter: !0 }), !0, !1, !1, i)
          .resolvedTools,
      ),
      u = resolveSubagentModel(e.model, t.options.mainLoopModel, void 0, c.mode),
      y = registerBackgroundAgentTask({
        agentId: s,
        ownerAgentId: ze(),
        spawnDepth: i,
        description: l,
        prompt: o,
        model: u,
        selectedAgent: e,
        taskRegistry: p,
        cwd: void 0,
        isObserver: !0,
        sessionScratch: t.session.sessionScratch,
      });
    markTaskNotified(s, p);
    let T = {
        prompt: o,
        resolvedAgentModel: u,
        isBuiltInAgent: isBuiltInAgent(e),
        startTime: Date.now(),
        agentType: e.agentType,
        agentDepth: i,
        isAsync: !0,
        source: e.source,
        pluginId: isPluginAgent(e) ? parsePluginIdIgnoringReservedMarketplace(e.plugin) : void 0,
      },
      k = {
        agentId: s,
        parentAgentId: t.agentId,
        depth: i,
        parentSessionId: getParentSessionId(),
        agentType: "subagent",
        subagentName: e.agentType,
        isBuiltIn: isBuiltInAgent(e),
        invocationKind: "spawn",
        invocationEmitted: !1,
        ...getWorkflowRunMetadata(t.agentContext),
      };
    await runWithAgentContext(k, () =>
      runWithCwdOrDefault(d.project.cwd, () =>
        runAsyncAgent({
          taskId: s,
          abortController: y.abortController,
          makeStream: (S, I, M) =>
            runAgent({
              agentDefinition: e,
              promptMessages: [
                createUserMessage({ content: o }),
                createUserMessage({ content: a, origin: { kind: "observer-activity" } }),
              ],
              toolUseContext: t,
              canUseTool: f,
              isAsync: !0,
              querySource: formatAgentQuerySource(e.agentType, isBuiltInAgent(e)),
              availableTools: A,
              useExactTools: !0,
              session: d,
              spawnMode: g,
              override: { agentId: oo(s), abortController: y.abortController },
              onModelRestricted: createModelRestrictedSystemMessageHandler(e.agentType, t.appendSystemMessage),
              onCacheSafeParams: S,
              onQueryProgress: I,
              onStreamTokenEstimate: M,
            }),
          metadata: T,
          description: l,
          toolUseContext: t,
          taskRegistry: p,
          agentIdForCleanup: s,
          enableSummarization: !1,
          getWorktreeResult: async () => ({}),
        }),
      ),
    );
  },
  async deliver({
    observerTaskId: e,
    digest: r,
    toolUseContext: o,
    canUseTool: a,
    armingPermissionMode: t,
  }) {
    await pjn({
      agentId: e,
      prompt: r,
      promptOrigin: { kind: "observer-activity" },
      toolUseContext: o,
      canUseTool: a,
      suppressOwnerNotification: !0,
      workerPermissionMode: t,
    });
  },
};
function installObserverSpawner(e) {
  try {
    setObserverSpawner(e, b);
  } catch (r) {
    n(`[agentObserver] spawner registration failed: ${r}`);
  }
}
export { installObserverSpawner };
