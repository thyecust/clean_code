// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 201 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ListToolsRequestSchema, CallToolRequestSchema } from "../MCP客户端/chunk-tv3jbp8f.js";
import "../MCP客户端/mcp-protocol.js";
import { McpServer } from "../MCP客户端/mcp-server.js";
import { artifactReadObservationIn } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { bh, B, Nb, HW } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { dt, ge } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { registerCleanup, jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/共享小工具-未细化/whiteboard-telemetry.js";
import { getMainLoopModel, BASH_TOOL_NAME, EDIT_TOOL_NAME, READ_TOOL_NAME, WRITE_TOOL_NAME, GLOB_TOOL_NAME, GREP_TOOL_NAME, NOTEBOOK_EDIT_TOOL_NAME, POWERSHELL_TOOL_NAME } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { HOST_FIELD_NAME } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { FILE_STATE_MAX_ENTRIES, createFileStateCache } from "../MCP客户端/chunk-3kmsshb6.js";
import { createDefaultToolPermissionContext, findToolByName, parseToolInput, getToolRemoteExecution, isBatchToolDefinition } from "../权限系统/chunk-qdy0h5k2.js";
import { createAbortController, createChildAbortController, userAbortReason } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { getHostCapabilityState } from "../../01-核心基础设施/共享小工具-未细化/host-capability-state.js";
import {
  prunePluginsForClosedGate,
  getCommandQueueInstance,
  hasPermissionsToUseTool,
  collectErrorOutputLines,
  refreshSkillsSyncVetoed,
  setSessionCwd,
  convertSchemaToJsonSchema,
  EMPTY_QUEUED_NOTIFICATIONS_REGISTRY,
  getBuiltinToolsForContext,
  getToolFeatureName,
  isToolCallAbortedError,
  classifyToolCallError,
  createDynamicSkillState,
  setDynamicSkillState,
  REFUSED_TOOL_INPUT_FIELDS,
  createAssistantMessage,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { MAIN_AGENT_ID } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { AsyncEvalDispatcher } from "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import { refreshPluginsSyncVetoed } from "../插件系统/chunk-ajtn749s.js";
import { pruneSyncedSkillsForClosedGate } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { createBaseAppState } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import { credentialsStoreFor } from "../认证-OAuth登录/credentials-store.js";
import { createInMemoryArtifactRegistries, NOOP_TEAMMATE_COLORS, EMPTY_PERMISSION_RELAYS } from "../../01-核心基础设施/共享小工具-未细化/chunk-m85ks9bj.js";
import { noopSessionHooksRegistry } from "../../01-核心基础设施/共享小工具-未细化/noop-session-hooks-registry.js";
import { PerClassInstanceRegistry } from "../../01-核心基础设施/共享小工具-未细化/per-class-instance-registry.js";
import { noopAgentLifecycle } from "./agent-lifecycle.js";
import { noopTaskRegistry } from "../工具WebFetch-WebSearch/noop-task-registry.js";
import { BufferCoercingStdioServerTransport } from "../../01-核心基础设施/共享小工具-未细化/buffer-coercing-stdio-transport.js";
import "../../01-核心基础设施/共享小工具-未细化/stdio-server-transport.js";
import "../../01-核心基础设施/共享小工具-未细化/stdio-message-framing.js";
var N = new Set([BASH_TOOL_NAME, READ_TOOL_NAME, EDIT_TOOL_NAME, WRITE_TOOL_NAME, GREP_TOOL_NAME, GLOB_TOOL_NAME, NOTEBOOK_EDIT_TOOL_NAME, POWERSHELL_TOOL_NAME]),
  k = REFUSED_TOOL_INPUT_FIELDS;
function G(e, m) {
  if (e.properties === void 0 || m.length === 0) return e;
  let d = { ...e.properties };
  for (let a of m) delete d[a];
  let S = Array.isArray(e.required)
    ? e.required.filter((a) => !m.includes(a))
    : e.required;
  return { ...e, properties: d, required: S };
}
async function startMCPServer(e, m, d, S, a) {
  setSessionCwd(e);
  let C = q(m, d, B(), "stdio", S, a),
    L = new BufferCoercingStdioServerTransport();
  (await C.connect(L), registerCleanup(() => C.close()));
}
class D extends PerClassInstanceRegistry {
  #e;
  constructor(e) {
    super();
    this.#e = e;
  }
  get(e) {
    return e === AsyncEvalDispatcher ? super.get(e) : this.#e.get(e);
  }
}
function q(e, m, d, S, a, C = "raw") {
  let L = credentialsStoreFor(a),
    p = S === "http";
  if (p) {
    let r = getHostCapabilityState();
    (r.disableBackgroundTasks(), r.disableUnsandboxedCommands());
  }
  if ((setDynamicSkillState(createDynamicSkillState()), refreshSkillsSyncVetoed(), Nb())) pruneSyncedSkillsForClosedGate(a).catch(logError);
  if ((refreshPluginsSyncVetoed(), HW())) prunePluginsForClosedGate().catch(logError);
  let H = createFileStateCache(FILE_STATE_MAX_ENTRIES),
    U = new PerClassInstanceRegistry(),
    E = new McpServer(
      {
        name: "claude/tengu",
        version: {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
      },
      { capabilities: { tools: {} } },
    ),
    P = createAbortController();
  return (
    (E.onclose = () => {
      P.abort(userAbortReason("shutdown"));
    }),
    E.setRequestHandler(ListToolsRequestSchema, async () => {
      let r = createDefaultToolPermissionContext(),
        R = getBuiltinToolsForContext(r, { skipReplFilter: !0, skipSimpleModeFilter: p }).filter(
          (i) => !isBatchToolDefinition(i),
        ),
        T = p ? R.filter((i) => N.has(i.name)) : R;
      return {
        tools: await Promise.all(
          T.map(async (i) => {
            let v = convertSchemaToJsonSchema(i.inputSchema),
              { remoteExecution: _, ...s } = i;
            return {
              ...s,
              description: await i.prompt({
                getToolPermissionContext: async () => r,
                tools: T,
                agents: [],
              }),
              inputSchema: G(v, [
                ...(p ? k : []),
                ...(getToolRemoteExecution(i).supported ? [HOST_FIELD_NAME] : []),
              ]),
              outputSchema: void 0,
            };
          }),
        ),
      };
    }),
    E.setRequestHandler(
      CallToolRequestSchema,
      async ({ params: { name: r, arguments: R } }, { signal: T }) => {
        let i = createDefaultToolPermissionContext(),
          v = getBuiltinToolsForContext(i, { skipReplFilter: !0, skipSimpleModeFilter: p }).filter(
            (o) => !isBatchToolDefinition(o),
          ),
          _ = p ? v.filter((o) => N.has(o.name)) : v,
          s = findToolByName(_, r);
        if (!s) throw Error(`Tool ${r} not found`);
        let I = createChildAbortController(P),
          M = () => I.abort(userAbortReason("remote-cancel"));
        if (T.aborted) M();
        else T.addEventListener("abort", M, { once: !0 });
        let F = new D(U),
          x = {
            abortController: I,
            messageQueue: getCommandQueueInstance(),
            session: d,
            agentContext: { agentType: "main", agentId: bh() },
            options: {
              commands: [],
              tools: _,
              mainLoopModel: getMainLoopModel(),
              thinkingConfig: { type: "disabled", mechanical: !0 },
              mcpClients: [],
              mcpResources: {},
              isNonInteractiveSession: !0,
              debug: e,
              verbose: m,
              agentDefinitions: { activeAgents: [], allAgents: [] },
            },
            getAppState: () => createBaseAppState(),
            setAppState: () => {},
            markPrResolvedThisSession: () => {},
            isUltrareviewOverageConfirmed: () => !1,
            markUltrareviewOverageConfirmed: () => {},
            getAdvisorSetting: () => createBaseAppState().advisorModel,
            getMcp: () => createBaseAppState().mcp,
            getProactivityLevel: () => createBaseAppState().proactivityLevel,
            getWebBrowser: () => createBaseAppState().webBrowser,
            setToolPermissionContext: () => {},
            setSessionToolPermissionContext: () => {},
            taskRegistry: noopTaskRegistry,
            queuedNotificationsRegistry: EMPTY_QUEUED_NOTIFICATIONS_REGISTRY,
            sessionHooksRegistry: noopSessionHooksRegistry,
            setWebBrowserSlice: () => {},
            setArtifactReadVersion: () => {},
            getArtifactReadObservation: artifactReadObservationIn(createBaseAppState),
            artifactRegistries: createInMemoryArtifactRegistries(),
            setArtifactContractTarget: () => {},
            getArtifactContractTarget: () => ({ targetSlug: void 0, pins: {} }),
            agentLifecycle: noopAgentLifecycle,
            teammateColors: NOOP_TEAMMATE_COLORS,
            rootToolSurface: { tools: _, mainLoopModel: getMainLoopModel() },
            messages: [],
            turnStartIndex: 0,
            readFileState: H,
            dedupUnchangedReads: !1,
            toolState: F,
            permissionRelays: EMPTY_PERMISSION_RELAYS,
            getFileHistoryState: () => {
              return;
            },
            applyFileHistoryOp: () => {},
            applyAttributionOp: () => {},
            storageV5: a,
            credentials: L,
          };
        try {
          if (!s.isEnabled()) {
            let t = `Tool ${r} is not enabled`;
            return (
              logForDebugging(`MCP server: ${t}`, { level: "error" }),
              { isError: !0, content: [{ type: "text", text: t }] }
            );
          }
          let o = { ...(R ?? {}) },
            O = [];
          if (p) {
            for (let t of k) if (t in o) (delete o[t], O.push(t));
          }
          let c = parseToolInput(s, o);
          if (!c.success) {
            let t = `Tool ${r} arguments failed schema validation: ${c.error.message}`;
            return (
              logForDebugging(`MCP server: ${t}`, { level: "error" }),
              { isError: !0, content: [{ type: "text", text: t }] }
            );
          }
          let u = await s.validateInput?.(c.data, x);
          if (u && !u.result) {
            let t = `Tool ${r} input is invalid: ${u.message}`;
            return (
              logForDebugging(`MCP server: ${t}`, { level: "error" }),
              { isError: !0, content: [{ type: "text", text: t }] }
            );
          }
          let A = await s.call(c.data, x, hasPermissionsToUseTool, createAssistantMessage({ content: [] })),
            l;
          if (
            ((l ??= { content: [{ type: "text", text: jsonStringify(A.data) }] }),
            O.length > 0)
          ) {
            let t = `[serve-mode] Stripped client-supplied privilege field(s): ${O.join(", ")}`,
              w = l.content.at(-1);
            if (w?.type === "text")
              w.text += `
${t}`;
            else l.content.push({ type: "text", text: t });
          }
          return (logFeatureOk(getToolFeatureName(s.name)), l);
        } catch (o) {
          let c =
            (o instanceof Error ? collectErrorOutputLines(o) : [String(o)])
              .filter(Boolean)
              .join(
                `
`,
              )
              .trim() || "Error";
          if (isToolCallAbortedError(o)) logForDebugging(`MCP server tool call '${r}' aborted`);
          else {
            let { code: u, isSad: A } = classifyToolCallError(o);
            if (A)
              (logForDebugging(`MCP server tool call '${r}' failed: ${c}`, {
                level: "error",
              }),
                logFeatureSad(getToolFeatureName(s.name), u));
            else {
              let l = ge(o);
              (logError(
                "telemetryMessage" in l
                  ? l
                  : dt(l, `mcp server tool '${s.name}' threw`),
              ),
                logFeatureBad(getToolFeatureName(s.name), u));
            }
          }
          return { isError: !0, content: [{ type: "text", text: c }] };
        } finally {
          F.get(AsyncEvalDispatcher).release(MAIN_AGENT_ID);
        }
      },
    ),
    E
  );
}
export { startMCPServer };
