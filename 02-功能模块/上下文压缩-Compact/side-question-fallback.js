// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getMainLoopModel, getRuntimeMainLoopModel, isThinkingEnabled, createMainAgentContext } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createTaskRegistry, asSystemPrompt, createQueuedNotificationsRegistry, getSystemContext, getUserContext, buildDefaultSystemPrompt, collectExcludedDynamicSections } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { createAbortController } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { artifactReadObservationIn, makeSetArtifactReadVersion, makeSetArtifactContractTarget, makeGetArtifactContractTarget } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { makeSetWebBrowserSlice } from "../../01-核心基础设施/共享小工具-未细化/chunk-hkbpxv9z.js";
import { createArtifactRegistries, createTeammateColorAssigner, EMPTY_PERMISSION_RELAYS } from "../../01-核心基础设施/共享小工具-未细化/chunk-m85ks9bj.js";
import { markPrResolvedThisSession, markUltrareviewOverageConfirmed, makeToolPermissionContextSetters } from "../../01-核心基础设施/共享小工具-未细化/chunk-p11r6cth.js";
import { createAgentLifecycle } from "../Teammates团队/agent-lifecycle.js";
import { createFieldAccessor } from "../../01-核心基础设施/共享小工具-未细化/state-store.js";
async function fetchSystemPromptParts({
  session: s,
  tools: f,
  mainLoopModel: n,
  additionalWorkingDirectories: l,
  customSystemPrompt: m,
  excludeDynamicSections: r,
  cacheBreakerPhrase: c,
  analysisOnly: d,
  storageV5: g,
  credentials: e,
}) {
  let [o, t, a, y] = await Promise.all([
    m !== void 0
      ? Promise.resolve([])
      : buildDefaultSystemPrompt(f, n, l, { excludeDynamicSections: r, analysisOnly: d }),
    getUserContext(s, g, e),
    m !== void 0 ? Promise.resolve({}) : getSystemContext(s, c),
    r && m === void 0 ? collectExcludedDynamicSections(n, l, { analysisOnly: d }) : Promise.resolve({}),
  ]);
  if (r)
    return {
      defaultSystemPrompt: o,
      userContext: { ...a, ...t, ...y },
      systemContext: {},
    };
  return { defaultSystemPrompt: o, userContext: t, systemContext: a };
}
async function buildSideQuestionFallbackParams({
  session: s,
  messageQueue: f,
  tools: n,
  commands: l,
  mcpClients: m,
  messages: r,
  readFileState: c,
  toolState: d,
  sessionHooks: g,
  getAppState: e,
  setAppState: o,
  customSystemPrompt: t,
  appendSystemPrompt: a,
  excludeDynamicSections: y,
  thinkingConfig: S,
  agents: h,
  storageV5: u,
  credentials: k,
}) {
  let i = e(),
    C = getRuntimeMainLoopModel({
      permissionMode: i.toolPermissionContext.mode,
      mainLoopModel: getMainLoopModel(),
    }),
    {
      defaultSystemPrompt: x,
      userContext: P,
      systemContext: R,
    } = await fetchSystemPromptParts({
      session: s,
      tools: n,
      mainLoopModel: C,
      additionalWorkingDirectories: Array.from(
        i.toolPermissionContext.additionalWorkingDirectories.keys(),
      ),
      customSystemPrompt: t,
      excludeDynamicSections: y,
      cacheBreakerPhrase: i.cacheBreakerPhrase,
      analysisOnly: !0,
      storageV5: u,
      credentials: k,
    }),
    M = asSystemPrompt([
      ...(typeof t === "string" ? [t] : Array.isArray(t) ? t : x),
      ...(a ? [a] : []),
    ]),
    p = r.at(-1),
    v =
      p?.type === "assistant" && p.message.stop_reason === null
        ? r.slice(0, -1)
        : r,
    T = {
      messageQueue: f,
      session: s,
      storageV5: u,
      credentials: k,
      agentContext: createMainAgentContext(),
      options: {
        commands: l,
        debug: !1,
        mainLoopModel: C,
        tools: n,
        verbose: !1,
        thinkingConfig:
          S ?? (isThinkingEnabled() !== !1 ? { type: "adaptive" } : { type: "disabled" }),
        mcpClients: m,
        mcpResources: {},
        isNonInteractiveSession: !0,
        agentDefinitions: { activeAgents: h, allAgents: [] },
        customSystemPrompt: t,
        appendSystemPrompt: a,
        autoCompactWindow: i.autoCompactWindow,
        fastMode: i.fastMode,
        cacheBreakerPhrase: i.cacheBreakerPhrase,
      },
      abortController: createAbortController(),
      readFileState: c,
      toolState: d,
      permissionRelays: EMPTY_PERMISSION_RELAYS,
      getAppState: e,
      setAppState: o,
      markPrResolvedThisSession: () => markPrResolvedThisSession(o),
      isUltrareviewOverageConfirmed: () => e().ultrareviewOverageConfirmed,
      markUltrareviewOverageConfirmed: () => markUltrareviewOverageConfirmed(o),
      getAdvisorSetting: () => e().advisorModel,
      getMcp: () => e().mcp,
      getProactivityLevel: () => e().proactivityLevel,
      getWebBrowser: () => e().webBrowser,
      ...makeToolPermissionContextSetters(o),
      taskRegistry: createTaskRegistry(e, o),
      queuedNotificationsRegistry: createQueuedNotificationsRegistry(e, o, s),
      sessionHooksRegistry: g,
      setWebBrowserSlice: makeSetWebBrowserSlice(o),
      setArtifactReadVersion: makeSetArtifactReadVersion(o),
      getArtifactReadObservation: artifactReadObservationIn(e),
      artifactRegistries: createArtifactRegistries(e, o),
      setArtifactContractTarget: makeSetArtifactContractTarget(o),
      getArtifactContractTarget: makeGetArtifactContractTarget(e),
      agentLifecycle: createAgentLifecycle(e, o),
      teammateColors: createTeammateColorAssigner(createFieldAccessor(e, o, "teammateColors")),
      rootToolSurface: { tools: n, mainLoopModel: C },
      messages: v,
      turnStartIndex: 0,
      getFileHistoryState: () => {
        return;
      },
      applyFileHistoryOp: () => {},
      applyAttributionOp: () => {},
    };
  return {
    systemPrompt: M,
    userContext: P,
    systemContext: R,
    toolUseContext: T,
    forkContextMessages: v,
    advisorModel: i.advisorModel,
  };
}
export { fetchSystemPromptParts, buildSideQuestionFallbackParams };
