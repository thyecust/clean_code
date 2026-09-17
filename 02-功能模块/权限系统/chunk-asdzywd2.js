// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { oo, bh, ze } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { logFeatureOk as y, logFeatureBad as f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { sr, kw, mc, o0 } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getParentSessionId as aS } from "../Teammates团队/chunk-811z9z0t.js";
import {
  FORK_AGENT as EI,
  buildChildMessage as Vmt,
  p3,
  RV,
  yne,
  cH,
  MO,
  zne,
  runAgent as dw,
  k3,
  Q6t,
  Re,
  VS,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getToolPermissionContext as ce } from "./chunk-fjrcf22x.js";
import { Cj } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { CC } from "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import { Ci } from "../../01-核心基础设施/共享小工具-未细化/chunk-w8hsca1t.js";
async function spawnForkFromDirective(t, e, a, m, p) {
  if (e.getAppState().endedByModel)
    return (f("subagent_launch", "subagent_fork_ended_by_model"), null);
  if (Ci())
    return (f("subagent_launch", "subagent_fork_coordinator_mode"), null);
  let o = e.renderedSystemPrompt;
  if (!o) {
    if (((o = await _(e)), !o))
      return (f("subagent_launch", "subagent_fork_prompt_missing"), null);
  }
  let C = {
      kind: "fork",
      log: (() => {
        let c = e.agentId ?? Cj,
          i = e.toolState.get(CC).get(c)?.replayLog;
        if (i) return [...i];
        if (e.replHydration?.kind === "resume") return Q6t(e.messages);
        return [];
      })(),
    },
    r = e.agentLifecycle.allocateName(h(t)),
    l = t.replace(/\s+/g, " ").trim(),
    g = l.length > 50 ? oe(l, 49) + "\u2026" : l,
    n = bh(r),
    { taskRegistry: s } = e,
    T = Date.now(),
    d = mc(e.agentContext) + 1,
    S = cH(EI.model, e.options.mainLoopModel, "inherit", ce(e).mode),
    u = RV({
      agentId: n,
      ownerAgentId: ze(),
      spawnDepth: d,
      description: g,
      prompt: t,
      model: S,
      selectedAgent: EI,
      taskRegistry: s,
      toolUseId: e.toolUseId,
      sessionScratch: e.session.sessionScratch,
    }),
    k = u.abortController;
  (e.agentLifecycle.registerName(r, oo(n)),
    sr().agentSpawned.emit({
      agentId: n,
      agentType: EI.agentType,
      parentAgentId: e.agentId,
      taskRegistry: s,
    }));
  let I = {
      prompt: t,
      resolvedAgentModel: S,
      isBuiltInAgent: !0,
      startTime: T,
      agentType: EI.agentType,
      isAsync: !0,
      agentDepth: d,
      source: EI.source,
    },
    A = {
      agentId: n,
      parentAgentId: e.agentId,
      depth: d,
      parentSessionId: aS(),
      agentType: "subagent",
      subagentName: EI.agentType,
      displayName: r,
      isAsync: !0,
      isBackgroundAgent: !0,
      isBuiltIn: !0,
      invocationKind: "spawn",
      invocationEmitted: !1,
      ...o0(e.agentContext),
    },
    P = s.takeConcurrencySlot();
  return (
    kw(A, () =>
      k3({
        taskId: u.agentId,
        abortController: k,
        makeStream: (c, i, b) =>
          dw({
            onQueryProgress: i,
            onStreamTokenEstimate: b,
            onModelRestricted: zne(EI.agentType, e.appendSystemMessage),
            agentDefinition: EI,
            promptMessages: [
              ...(m ?? []),
              Re({ content: [{ type: "text", text: Vmt(t) }] }),
            ],
            toolUseContext: e,
            canUseTool: a,
            isAsync: !0,
            querySource: p3(EI.agentType, !0),
            forkOrigin: p,
            spawnedBySkill: e.options.spawnedBySkill ?? e.options.activeSkill,
            spawnedByForkedSkill: e.options.spawnedByForkedSkill,
            model: "inherit",
            override: {
              systemPrompt: o,
              agentId: oo(u.agentId),
              agentContext: A,
              abortController: k,
              replHydration: C,
            },
            availableTools: e.options.tools,
            forkContextMessages: e.messages,
            useExactTools: !0,
            onCacheSafeParams: c,
            description: g,
            name: r,
          }),
        metadata: I,
        description: g,
        toolUseContext: e,
        taskRegistry: s,
        agentIdForCleanup: n,
        enableSummarization: !0,
        getWorktreeResult: async () => ({}),
        onRunSettled: P,
      }),
    ),
    y("subagent_launch"),
    { agentId: n, name: r }
  );
}
async function _(t) {
  let e = t.getAppState(),
    a = e.agent
      ? e.agentDefinitions.activeAgents.find((o) => o.agentType === e.agent)
      : void 0,
    m = Array.from(ce(t).additionalWorkingDirectories.keys()),
    p = await VS(t.options.tools, t.options.mainLoopModel, m);
  return MO({
    mainThreadAgentDefinition: a,
    toolUseContext: t,
    customSystemPrompt: t.options.customSystemPrompt,
    defaultSystemPrompt: p,
    appendSystemPrompt: t.options.appendSystemPrompt,
    skillsPersistencePrompt: yne(t.options.tools),
  });
}
function h(t) {
  return (
    t
      .trim()
      .split(/\s+/)
      .slice(0, 3)
      .join("-")
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 24) || "fork"
  );
}
export { spawnForkFromDirective };
