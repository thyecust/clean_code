// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { rt, ip, JN, aa } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Tm, Zo, fEe, j_, hC, VS, e3t } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { hr } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { P$, Rfe, kfe, xfe } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { tce } from "../../01-核心基础设施/共享小工具-未细化/chunk-hkbpxv9z.js";
import { Ole, Dle, i7 } from "../../01-核心基础设施/共享小工具-未细化/chunk-m85ks9bj.js";
import { sSe, dee, pee } from "../../01-核心基础设施/共享小工具-未细化/chunk-p11r6cth.js";
import { ESe } from "../Teammates团队/chunk-c8267s4e.js";
import { zK } from "../../01-核心基础设施/共享小工具-未细化/chunk-jzy6p47z.js";
async function _Dt({
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
      : VS(f, n, l, { excludeDynamicSections: r, analysisOnly: d }),
    hC(s, g, e),
    m !== void 0 ? Promise.resolve({}) : j_(s, c),
    r && m === void 0 ? e3t(n, l, { analysisOnly: d }) : Promise.resolve({}),
  ]);
  if (r)
    return {
      defaultSystemPrompt: o,
      userContext: { ...a, ...t, ...y },
      systemContext: {},
    };
  return { defaultSystemPrompt: o, userContext: t, systemContext: a };
}
async function Qtn({
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
    C = ip({
      permissionMode: i.toolPermissionContext.mode,
      mainLoopModel: rt(),
    }),
    {
      defaultSystemPrompt: x,
      userContext: P,
      systemContext: R,
    } = await _Dt({
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
    M = Zo([
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
      agentContext: aa(),
      options: {
        commands: l,
        debug: !1,
        mainLoopModel: C,
        tools: n,
        verbose: !1,
        thinkingConfig:
          S ?? (JN() !== !1 ? { type: "adaptive" } : { type: "disabled" }),
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
      abortController: hr(),
      readFileState: c,
      toolState: d,
      permissionRelays: i7,
      getAppState: e,
      setAppState: o,
      markPrResolvedThisSession: () => sSe(o),
      isUltrareviewOverageConfirmed: () => e().ultrareviewOverageConfirmed,
      markUltrareviewOverageConfirmed: () => dee(o),
      getAdvisorSetting: () => e().advisorModel,
      getMcp: () => e().mcp,
      getProactivityLevel: () => e().proactivityLevel,
      getWebBrowser: () => e().webBrowser,
      ...pee(o),
      taskRegistry: Tm(e, o),
      queuedNotificationsRegistry: fEe(e, o, s),
      sessionHooksRegistry: g,
      setWebBrowserSlice: tce(o),
      setArtifactReadVersion: Rfe(o),
      getArtifactReadObservation: P$(e),
      artifactRegistries: Ole(e, o),
      setArtifactContractTarget: kfe(o),
      getArtifactContractTarget: xfe(e),
      agentLifecycle: ESe(e, o),
      teammateColors: Dle(zK(e, o, "teammateColors")),
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
export { _Dt, Qtn };
