// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 168 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  LATEST_PROTOCOL_VERSION,
  SUPPORTED_PROTOCOL_VERSIONS,
  isJSONRPCRequest,
  isJSONRPCNotification,
  ErrorCode,
  JSONRPCMessageSchema as GR,
  EmptyResultSchema,
  ImplementationSchema,
  ServerCapabilitiesSchema,
  InitializeResultSchema,
  CreateTaskResultSchema,
  ResourceSchema,
  ResourceTemplateSchema,
  ListResourcesResultSchema,
  ListResourceTemplatesResultSchema,
  ReadResourceResultSchema,
  ResourceListChangedNotificationSchema,
  PromptSchema,
  ListPromptsResultSchema,
  GetPromptResultSchema,
  PromptListChangedNotificationSchema,
  ToolSchema,
  ListToolsResultSchema,
  CallToolResultSchema,
  ToolListChangedNotificationSchema,
  ListChangedOptionsBaseSchema,
  CreateMessageRequestSchema,
  CreateMessageResultSchema,
  CreateMessageResultWithToolsSchema,
  ElicitRequestURLParamsSchema,
  ElicitRequestSchema,
  ElicitationCompleteNotificationSchema,
  ElicitResultSchema,
  CompleteResultSchema,
  ListRootsRequestSchema,
  McpError,
} from "./chunk-tv3jbp8f.js";
import { uhe, C1, C2e, Xtt, xkt, Ytt, Hkt, Ikt } from "./chunk-98spw152.js";
import "../认证-OAuth登录/pkce-challenge.js";
import { XA, u2, aPe } from "../认证-OAuth登录/chunk-j990pwax.js";
import { Qs, K, he, sn, yB, Mrt, Lx, Nrt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { sleep, withDeadline } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { CA, SS } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { getOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { Wre, tG, nG } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { MCP_URL_ELICITATION_DIALOG, getMcpNeedsAuthCachePath, getMcpNeedsAuthCacheStateKey, readMcpNeedsAuthCache, invalidateMcpNeedsAuthCache, createMcpAuthStubTools, initMcpDiscoveryCacheKillSwitch } from "./mcp-auth-cache.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum, fromNumber, mcpNameForAnalytics_GATE_EVALUATED } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  getMCPUserAgent,
  Tn,
  lq,
  oRe,
  XQe,
  i0,
  pA,
  EUe,
  AUe,
  sRe,
  ZN,
  wl,
  wP,
  oy,
  uQ,
  Ms,
  dRe,
  getClaudeAIOAuthTokens,
  handleOAuth401Error,
  getClaudeAIOAuthTokensAsync,
  readFreshOAuthAccessToken,
  checkAndRefreshOAuthTokenIfNeeded,
  H,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Ve, yt, R, ge, l, pot } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { We, Et, b, fp, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize, truncateToCodeUnits, beforeFirst } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logMCPError, logMCPDebug } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { pS, rc } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/共享小工具-未细化/diagnostics-log.js";
import { _xt, jo, yxt, Qie } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { getFileStorage } from "../../01-核心基础设施/共享小工具-未细化/file-storage.js";
import { normalizeComparableText, sanitizeDeep } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { getWebSocketTLSOptions, getWebSocketProxyUrl, getProxyFetchOptions } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { isFirstPartyProvider, shouldPropagateTraceContext } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { isPolicyAllowed, getPolicyDeniedReason } from "../../01-核心基础设施/共享小工具-未细化/compliance-taints-store.js";
import { registerChildProcess } from "../../01-核心基础设施/核心工具-进程与信号/sdk-memory-summary.js";
import { jt, rS, Jse, xvt, UR, Ivt, zZe, wQ } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { getSessionAccessToken } from "../认证-OAuth登录/credential-file-descriptors.js";
import { invalidateKeychainCache } from "../../01-核心基础设施/共享小工具-未细化/keychain-access.js";
import { uBe } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { matchesToolName } from "../权限系统/chunk-qdy0h5k2.js";
import {
  mapWithConcurrency,
  isMcpServerUsedByHooks,
  trackMcpServerProcess,
  truncateOtelContent,
  W9,
  getCurrentTraceparent,
  runInOtelSpan,
  getPolicyPluginNames,
  listMcpResourcesTool,
  registerLoggableMcpServer,
  THIRD_PARTY_PLUGIN_LABEL,
  sanitizeDisplayText,
  sanitizeMessageText,
  MCP_BLOCKED_BY_POLICY_MESSAGE,
  MCP_DISABLED_IN_MCP_MESSAGE,
  recordPluginUsage,
  getPluginIdHash,
  getPluginScope,
  isOfficialPluginScope,
  buildPluginTelemetryFieldsFromId,
  MAX_MCP_TEXT_LENGTH,
  TOOL_CALL_INTERRUPTED_MESSAGE,
  MAX_MCP_HTTP_BODY_BYTES,
  sanitizeLogValue,
  notifyIdeConnected,
  recordPluginActivity,
  getImageLimitsForModel,
  persistBinaryContent,
  formatBinaryContentSavedMessage,
  isMcpSubagentPromptEnabled,
  getPersistedFormatLabel,
  formatTruncatedResultMessage,
  McpAuthError,
  McpSessionExpiredError,
  McpToolCallError,
  McpResponseSchemaError,
  CCR_NEEDS_APPROVAL_ERROR_CODE,
  classifyMcpErrorSource,
  getMcpServerBaseUrl,
  isDiscoveryCacheEnabled,
  isDiscoveryCacheUsable,
  isAccountTokenUnresolved,
  readMcpResourceDirTool,
  readMcpResourceTool,
  logMcpToolCallXmlInDescriptions,
  stripTrailingInvokeSuffixFromArgs,
  getMcpClientCapabilities,
  isMcpStatelessSkipInitEnabled,
  markClaudeAiServerConnected,
  isMcpServerBlockedAtConnectTime,
  getAllMcpConfigs,
  isMcpServerDisabled,
  matchCodeIndexingToolByServerName,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { createAbortController } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { getPluginToolStagingDir } from "../../01-核心基础设施/核心工具-路径与平台/temp-directory.js";
import { agentProxyEnv, subprocessEnv, shouldUseMcpAllowlistEnv } from "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import { emitOtelEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/otel-events.js";
import { isMcpServerUrlMissing, hashMcpServerConfig, getMcpServerConfigCacheKey } from "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import { mTt } from "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import { getMcpSdkGeneration } from "../../01-核心基础设施/共享小工具-未细化/mcp-sdk-generation.js";
import { CCR_TURN_ID_HEADER, getCcrTurnId } from "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import { MCP_TOOL_BASE } from "../../01-核心基础设施/共享小工具-未细化/mcp-tool-base.js";
import { DesignSessionState, deletePlansForProject, PLAN_INVALIDATING_OPERATIONS, deleteApprovedPlansForProject, deleteVerifiedProjectGrantsForProject, markProjectForRecard } from "../Memory-CLAUDE.md/chunk-9b6sc1gb.js";
import { getAdditionalWorkingDirectories } from "../../01-核心基础设施/共享小工具-未细化/additional-working-directories.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-elicitation-dialogs.js";
import { runElicitationHooks, runElicitationResultHooks } from "./mcp-elicitation-handlers.js";
import { getOfficialPluginPromptOverrides, getOverriddenServerInstructions, applyParamDescriptions } from "../插件系统/plugin-prompt-overrides.js";
import {
  ict,
  act,
  ASe,
  ur,
  lct,
  h7,
  cct,
  uct,
  dct,
  pct,
  fct,
} from "../../00-第三方库/_未识别/第三方库-其他/chunk-7bsbdzwc.js";
import { boundDial } from "../../01-核心基础设施/共享小工具-未细化/chunk-aqawy2mp.js";
import { reauthReconnectEmitter, cachedRowAdoptEmitter, cachedRowDialFailedEmitter } from "../../01-核心基础设施/共享小工具-未细化/lazy-event-emitters.js";
import {
  y7,
  ir,
  J3e,
  mE,
  Q3e,
  Pu,
  vct,
  Rct,
  kct,
  xh,
  S7,
  gE,
  Qx,
  Hct,
  ace,
  i2,
  Ict,
  Pct,
  Z3e,
  UIe,
  Dct,
} from "./chunk-g4gdwpa0.js";
import "../../01-核心基础设施/共享小工具-未细化/oauth-callback.js";
import { redactHeaders, redactUrl, formatErrorWithCode, formatConnectionError, redactErrorForLogging, rethrowFetchError } from "../认证-OAuth登录/url-and-error-redaction.js";
import { CLt, wct, X3e } from "../认证-OAuth登录/chunk-nsedtefh.js";
import "../认证-OAuth登录/xaa-idp-auth.js";
import { recordReplyDegradedState } from "../../01-核心基础设施/共享小工具-未细化/reply-degraded-state.js";
import { isClaudeAiBearerRejectedError, isListAuthError } from "../../01-核心基础设施/共享小工具-未细化/auth-error-predicates.js";
import { isClaudeBrowserMcpServerName, createHostHandledConsentPermissions } from "../../01-核心基础设施/共享小工具-未细化/claude-browser-mcp-server.js";
import { isSlackSendTool, createSlackSendUiDescriptor } from "../../01-核心基础设施/共享小工具-未细化/slack-send-tool.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-hosted-oauth-gate.js";
import { noopTaskRegistry } from "../工具WebFetch-WebSearch/noop-task-registry.js";
import { SdkMcpClientTransport } from "../../01-核心基础设施/共享小工具-未细化/sdk-mcp-transports.js";
import { stripTextBlockMeta, estimateContentTokens, shouldTruncateOutput, maybeTruncateOutput } from "../../01-核心基础设施/共享小工具-未细化/mcp-output-truncation.js";
import "./mcp-elicitation-request-handler.js";
import { hce } from "../../00-第三方库/_未识别/第三方库-Nodepolyfill/chunk-5y6047zm.js";
import { logChromeToolsAdded } from "../Hooks钩子/chrome-telemetry-events.js";
import { collectResourceLinks, stripReservedMetaKeys } from "../../01-核心基础设施/共享小工具-未细化/mcp-tool-result-fields.js";
import { headersToRecord, createFetchWithInit, StreamableHTTPError, StreamableHTTPClientTransport } from "../MCP传输(stdio-SSE-HTTP)/streamable-http-client-transport.js";
import { getDesignAuthResolver, hasFirstPartyDesignAuth, FirstPartyDesignNeedsConsentError, getDesignConsentProvider, setPendingScopeExpansionNotice } from "../../01-核心基础设施/共享小工具-未细化/chunk-jhs1bd0k.js";
import { hasChannelCapability } from "../../01-核心基础设施/共享小工具-未细化/has-channel-capability.js";
import { resolveProxyFetchOptions } from "../../01-核心基础设施/共享小工具-未细化/proxy-fetch-options.js";
import { splitPluginId } from "../插件系统/chunk-33bdfgmx.js";
import { isMcpSkillsEnabled, isMcpSkillsCapable } from "./mcp-skills-extension.js";
import { asMcpClient, asMcpSdkClient } from "../../01-核心基础设施/共享小工具-未细化/mcp-client-type-casts.js";
import { Bg } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { getMcpTimeoutMs } from "../../01-核心基础设施/共享小工具-未细化/mcp-timeouts.js";
import { isClaudeInChromeMCPServer } from "../../01-核心基础设施/共享小工具-未细化/claude-in-chrome-mcp-constants.js";
import { normalizeMcpName } from "../../01-核心基础设施/共享小工具-未细化/mcp-name-normalization.js";
import { ReadBuffer, deserializeMessage, serializeMessage } from "../../01-核心基础设施/共享小工具-未细化/stdio-message-framing.js";
import { AA, s, v, it } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { Jke } from "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { toESM } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
class ht {
  constructor(e) {
    this._client = e;
  }
  async *callToolStream(e, t = CallToolResultSchema, r) {
    let o = this._client,
      c = { ...r, task: r?.task ?? (o.isToolTask(e.name) ? {} : void 0) },
      d = o.requestStream({ method: "tools/call", params: e }, t, c),
      p = o.getToolOutputValidator(e.name);
    for await (let _ of d) {
      if (_.type === "result" && p) {
        let T = _.result;
        if (!T.structuredContent && !T.isError) {
          yield {
            type: "error",
            error: new McpError(
              ErrorCode.InvalidRequest,
              `Tool ${e.name} has an output schema but did not return structured content`,
            ),
          };
          return;
        }
        if (T.structuredContent)
          try {
            let h = p(T.structuredContent);
            if (!h.valid) {
              yield {
                type: "error",
                error: new McpError(
                  ErrorCode.InvalidParams,
                  `Structured content does not match the tool's output schema: ${h.errorMessage}`,
                ),
              };
              return;
            }
          } catch (h) {
            if (h instanceof McpError) {
              yield { type: "error", error: h };
              return;
            }
            yield {
              type: "error",
              error: new McpError(
                ErrorCode.InvalidParams,
                `Failed to validate structured content: ${h instanceof Error ? h.message : String(h)}`,
              ),
            };
            return;
          }
      }
      yield _;
    }
  }
  async getTask(e, t) {
    return this._client.getTask({ taskId: e }, t);
  }
  async getTaskResult(e, t, r) {
    return this._client.getTaskResult({ taskId: e }, t, r);
  }
  async listTasks(e, t) {
    return this._client.listTasks(e ? { cursor: e } : void 0, t);
  }
  async cancelTask(e, t) {
    return this._client.cancelTask({ taskId: e }, t);
  }
  requestStream(e, t, r) {
    return this._client.requestStream(e, t, r);
  }
}
function rt(e, t) {
  if (!e || t === null || typeof t !== "object") return;
  if (e.type === "object" && e.properties && typeof e.properties === "object") {
    let r = t,
      o = e.properties;
    for (let c of Object.keys(o)) {
      let d = o[c];
      if (r[c] === void 0 && Object.prototype.hasOwnProperty.call(d, "default"))
        r[c] = d.default;
      if (r[c] !== void 0) rt(d, r[c]);
    }
  }
  if (Array.isArray(e.anyOf)) {
    for (let r of e.anyOf) if (typeof r !== "boolean") rt(r, t);
  }
  if (Array.isArray(e.oneOf)) {
    for (let r of e.oneOf) if (typeof r !== "boolean") rt(r, t);
  }
}
function xr(e) {
  if (!e) return { supportsFormMode: !1, supportsUrlMode: !1 };
  let t = e.form !== void 0,
    r = e.url !== void 0;
  return { supportsFormMode: t || (!t && !r), supportsUrlMode: r };
}
class ot extends Xtt {
  constructor(e, t) {
    super(t);
    if (
      ((this._clientInfo = e),
      (this._cachedToolOutputValidators = new Map()),
      (this._cachedKnownTaskTools = new Set()),
      (this._cachedRequiredTaskTools = new Set()),
      (this._listChangedDebounceTimers = new Map()),
      (this._capabilities = t?.capabilities ?? {}),
      (this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new Ytt()),
      t?.listChanged)
    )
      this._pendingListChangedConfig = t.listChanged;
  }
  _setupListChangedHandlers(e) {
    if (e.tools && this._serverCapabilities?.tools?.listChanged)
      this._setupListChangedHandler(
        "tools",
        ToolListChangedNotificationSchema,
        e.tools,
        async () => (await this.listTools()).tools,
      );
    if (e.prompts && this._serverCapabilities?.prompts?.listChanged)
      this._setupListChangedHandler(
        "prompts",
        PromptListChangedNotificationSchema,
        e.prompts,
        async () => (await this.listPrompts()).prompts,
      );
    if (e.resources && this._serverCapabilities?.resources?.listChanged)
      this._setupListChangedHandler(
        "resources",
        ResourceListChangedNotificationSchema,
        e.resources,
        async () => (await this.listResources()).resources,
      );
  }
  get experimental() {
    if (!this._experimental) this._experimental = { tasks: new ht(this) };
    return this._experimental;
  }
  registerCapabilities(e) {
    if (this.transport)
      throw Error("Cannot register capabilities after connecting to transport");
    this._capabilities = xkt(this._capabilities, e);
  }
  setRequestHandler(e, t) {
    let o = C2e(e)?.method;
    if (!o) throw Error("Schema is missing a method literal");
    let c;
    if (uhe(o)) {
      let p = o;
      c = p._zod?.def?.value ?? p.value;
    } else {
      let p = o;
      c = p._def?.value ?? p.value;
    }
    if (typeof c !== "string")
      throw Error("Schema method literal must be a string");
    let d = c;
    if (d === "elicitation/create") {
      let p = async (_, T) => {
        let h = C1(ElicitRequestSchema, _);
        if (!h.success) {
          let X = h.error instanceof Error ? h.error.message : String(h.error);
          throw new McpError(ErrorCode.InvalidParams, `Invalid elicitation request: ${X}`);
        }
        let { params: A } = h.data;
        A.mode = A.mode ?? "form";
        let { supportsFormMode: L, supportsUrlMode: W } = xr(
          this._capabilities.elicitation,
        );
        if (A.mode === "form" && !L)
          throw new McpError(
            ErrorCode.InvalidParams,
            "Client does not support form-mode elicitation requests",
          );
        if (A.mode === "url" && !W)
          throw new McpError(
            ErrorCode.InvalidParams,
            "Client does not support URL-mode elicitation requests",
          );
        let I = await Promise.resolve(t(_, T));
        if (A.task) {
          let X = C1(CreateTaskResultSchema, I);
          if (!X.success) {
            let me =
              X.error instanceof Error ? X.error.message : String(X.error);
            throw new McpError(
              ErrorCode.InvalidParams,
              `Invalid task creation result: ${me}`,
            );
          }
          return X.data;
        }
        let D = C1(ElicitResultSchema, I);
        if (!D.success) {
          let X = D.error instanceof Error ? D.error.message : String(D.error);
          throw new McpError(ErrorCode.InvalidParams, `Invalid elicitation result: ${X}`);
        }
        let j = D.data,
          ee = A.mode === "form" ? A.requestedSchema : void 0;
        if (A.mode === "form" && j.action === "accept" && j.content && ee) {
          if (this._capabilities.elicitation?.form?.applyDefaults)
            try {
              rt(ee, j.content);
            } catch {}
        }
        return j;
      };
      return super.setRequestHandler(e, p);
    }
    if (d === "sampling/createMessage") {
      let p = async (_, T) => {
        let h = C1(CreateMessageRequestSchema, _);
        if (!h.success) {
          let j = h.error instanceof Error ? h.error.message : String(h.error);
          throw new McpError(ErrorCode.InvalidParams, `Invalid sampling request: ${j}`);
        }
        let { params: A } = h.data,
          L = await Promise.resolve(t(_, T));
        if (A.task) {
          let j = C1(CreateTaskResultSchema, L);
          if (!j.success) {
            let ee =
              j.error instanceof Error ? j.error.message : String(j.error);
            throw new McpError(
              ErrorCode.InvalidParams,
              `Invalid task creation result: ${ee}`,
            );
          }
          return j.data;
        }
        let I = A.tools || A.toolChoice ? CreateMessageResultWithToolsSchema : CreateMessageResultSchema,
          D = C1(I, L);
        if (!D.success) {
          let j = D.error instanceof Error ? D.error.message : String(D.error);
          throw new McpError(ErrorCode.InvalidParams, `Invalid sampling result: ${j}`);
        }
        return D.data;
      };
      return super.setRequestHandler(e, p);
    }
    return super.setRequestHandler(e, t);
  }
  assertCapability(e, t) {
    if (!this._serverCapabilities?.[e])
      throw Error(`Server does not support ${e} (required for ${t})`);
  }
  async connect(e, t) {
    if ((await super.connect(e), e.sessionId !== void 0)) return;
    try {
      let r = await this.request(
        {
          method: "initialize",
          params: {
            protocolVersion: LATEST_PROTOCOL_VERSION,
            capabilities: this._capabilities,
            clientInfo: this._clientInfo,
          },
        },
        InitializeResultSchema,
        t,
      );
      if (r === void 0)
        throw Error(`Server sent invalid initialize result: ${r}`);
      if (!SUPPORTED_PROTOCOL_VERSIONS.includes(r.protocolVersion))
        throw Error(
          `Server's protocol version is not supported: ${r.protocolVersion}`,
        );
      if (
        ((this._serverCapabilities = r.capabilities),
        (this._serverVersion = r.serverInfo),
        e.setProtocolVersion)
      )
        e.setProtocolVersion(r.protocolVersion);
      if (
        ((this._instructions = r.instructions),
        await this.notification({ method: "notifications/initialized" }),
        this._pendingListChangedConfig)
      )
        (this._setupListChangedHandlers(this._pendingListChangedConfig),
          (this._pendingListChangedConfig = void 0));
    } catch (r) {
      throw (this.close(), r);
    }
  }
  getServerCapabilities() {
    return this._serverCapabilities;
  }
  getServerVersion() {
    return this._serverVersion;
  }
  getInstructions() {
    return this._instructions;
  }
  assertCapabilityForMethod(e) {
    switch (e) {
      case "logging/setLevel":
        if (!this._serverCapabilities?.logging)
          throw Error(`Server does not support logging (required for ${e})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._serverCapabilities?.prompts)
          throw Error(`Server does not support prompts (required for ${e})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
      case "resources/subscribe":
      case "resources/unsubscribe":
        if (!this._serverCapabilities?.resources)
          throw Error(`Server does not support resources (required for ${e})`);
        if (
          e === "resources/subscribe" &&
          !this._serverCapabilities.resources.subscribe
        )
          throw Error(
            `Server does not support resource subscriptions (required for ${e})`,
          );
        break;
      case "tools/call":
      case "tools/list":
        if (!this._serverCapabilities?.tools)
          throw Error(`Server does not support tools (required for ${e})`);
        break;
      case "completion/complete":
        if (!this._serverCapabilities?.completions)
          throw Error(
            `Server does not support completions (required for ${e})`,
          );
        break;
      case "initialize":
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability(e) {
    switch (e) {
      case "notifications/roots/list_changed":
        if (!this._capabilities.roots?.listChanged)
          throw Error(
            `Client does not support roots list changed notifications (required for ${e})`,
          );
        break;
      case "notifications/initialized":
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability(e) {
    if (!this._capabilities) return;
    switch (e) {
      case "sampling/createMessage":
        if (!this._capabilities.sampling)
          throw Error(
            `Client does not support sampling capability (required for ${e})`,
          );
        break;
      case "elicitation/create":
        if (!this._capabilities.elicitation)
          throw Error(
            `Client does not support elicitation capability (required for ${e})`,
          );
        break;
      case "roots/list":
        if (!this._capabilities.roots)
          throw Error(
            `Client does not support roots capability (required for ${e})`,
          );
        break;
      case "tasks/get":
      case "tasks/list":
      case "tasks/result":
      case "tasks/cancel":
        if (!this._capabilities.tasks)
          throw Error(
            `Client does not support tasks capability (required for ${e})`,
          );
        break;
      case "ping":
        break;
    }
  }
  assertTaskCapability(e) {
    Hkt(this._serverCapabilities?.tasks?.requests, e, "Server");
  }
  assertTaskHandlerCapability(e) {
    if (!this._capabilities) return;
    Ikt(this._capabilities.tasks?.requests, e, "Client");
  }
  async ping(e) {
    return this.request({ method: "ping" }, EmptyResultSchema, e);
  }
  async complete(e, t) {
    return this.request({ method: "completion/complete", params: e }, CompleteResultSchema, t);
  }
  async setLoggingLevel(e, t) {
    return this.request(
      { method: "logging/setLevel", params: { level: e } },
      EmptyResultSchema,
      t,
    );
  }
  async getPrompt(e, t) {
    return this.request({ method: "prompts/get", params: e }, GetPromptResultSchema, t);
  }
  async listPrompts(e, t) {
    return this.request({ method: "prompts/list", params: e }, ListPromptsResultSchema, t);
  }
  async listResources(e, t) {
    return this.request({ method: "resources/list", params: e }, ListResourcesResultSchema, t);
  }
  async listResourceTemplates(e, t) {
    return this.request(
      { method: "resources/templates/list", params: e },
      ListResourceTemplatesResultSchema,
      t,
    );
  }
  async readResource(e, t) {
    return this.request({ method: "resources/read", params: e }, ReadResourceResultSchema, t);
  }
  async subscribeResource(e, t) {
    return this.request({ method: "resources/subscribe", params: e }, EmptyResultSchema, t);
  }
  async unsubscribeResource(e, t) {
    return this.request({ method: "resources/unsubscribe", params: e }, EmptyResultSchema, t);
  }
  async callTool(e, t = CallToolResultSchema, r) {
    if (this.isToolTaskRequired(e.name))
      throw new McpError(
        ErrorCode.InvalidRequest,
        `Tool "${e.name}" requires task-based execution. Use client.experimental.tasks.callToolStream() instead.`,
      );
    let o = await this.request({ method: "tools/call", params: e }, t, r),
      c = this.getToolOutputValidator(e.name);
    if (c) {
      if (!o.structuredContent && !o.isError)
        throw new McpError(
          ErrorCode.InvalidRequest,
          `Tool ${e.name} has an output schema but did not return structured content`,
        );
      if (o.structuredContent)
        try {
          let d = c(o.structuredContent);
          if (!d.valid)
            throw new McpError(
              ErrorCode.InvalidParams,
              `Structured content does not match the tool's output schema: ${d.errorMessage}`,
            );
        } catch (d) {
          if (d instanceof McpError) throw d;
          throw new McpError(
            ErrorCode.InvalidParams,
            `Failed to validate structured content: ${d instanceof Error ? d.message : String(d)}`,
          );
        }
    }
    return o;
  }
  isToolTask(e) {
    if (!this._serverCapabilities?.tasks?.requests?.tools?.call) return !1;
    return this._cachedKnownTaskTools.has(e);
  }
  isToolTaskRequired(e) {
    return this._cachedRequiredTaskTools.has(e);
  }
  cacheToolMetadata(e) {
    (this._cachedToolOutputValidators.clear(),
      this._cachedKnownTaskTools.clear(),
      this._cachedRequiredTaskTools.clear());
    for (let t of e) {
      if (t.outputSchema) {
        let o = this._jsonSchemaValidator.getValidator(t.outputSchema);
        this._cachedToolOutputValidators.set(t.name, o);
      }
      let r = t.execution?.taskSupport;
      if (r === "required" || r === "optional")
        this._cachedKnownTaskTools.add(t.name);
      if (r === "required") this._cachedRequiredTaskTools.add(t.name);
    }
  }
  getToolOutputValidator(e) {
    return this._cachedToolOutputValidators.get(e);
  }
  async listTools(e, t) {
    let r = await this.request({ method: "tools/list", params: e }, ListToolsResultSchema, t);
    return (this.cacheToolMetadata(r.tools), r);
  }
  _setupListChangedHandler(e, t, r, o) {
    let c = ListChangedOptionsBaseSchema.safeParse(r);
    if (!c.success)
      throw Error(`Invalid ${e} listChanged options: ${c.error.message}`);
    if (typeof r.onChanged !== "function")
      throw Error(
        `Invalid ${e} listChanged options: onChanged must be a function`,
      );
    let { autoRefresh: d, debounceMs: p } = c.data,
      { onChanged: _ } = r,
      T = async () => {
        if (!d) {
          _(null, null);
          return;
        }
        try {
          let A = await o();
          _(null, A);
        } catch (A) {
          let L = A instanceof Error ? A : Error(String(A));
          _(L, null);
        }
      },
      h = () => {
        if (p) {
          let A = this._listChangedDebounceTimers.get(e);
          if (A) clearTimeout(A);
          let L = setTimeout(T, p);
          this._listChangedDebounceTimers.set(e, L);
        } else T();
      };
    this.setNotificationHandler(t, h);
  }
  async sendRootsListChanged() {
    return this.notification({ method: "notifications/roots/list_changed" });
  }
}
class Ht extends Error {
  constructor(e, t, r) {
    super(`SSE error: ${t}`);
    ((this.code = e), (this.event = r));
  }
}
class nt {
  constructor(e, t) {
    ((this._url = e),
      (this._resourceMetadataUrl = void 0),
      (this._scope = void 0),
      (this._eventSourceInit = t?.eventSourceInit),
      (this._requestInit = t?.requestInit),
      (this._authProvider = t?.authProvider),
      (this._fetch = t?.fetch),
      (this._fetchWithInit = createFetchWithInit(t?.fetch, t?.requestInit)));
  }
  async _authThenStart() {
    if (!this._authProvider) throw new XA("No auth provider");
    let e;
    try {
      e = await u2(this._authProvider, {
        serverUrl: this._url,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit,
      });
    } catch (t) {
      throw (this.onerror?.(t), t);
    }
    if (e !== "AUTHORIZED") throw new XA();
    return await this._startOrAuth();
  }
  async _commonHeaders() {
    let e = {};
    if (this._authProvider) {
      let r = await this._authProvider.tokens();
      if (r) e.Authorization = `Bearer ${r.access_token}`;
    }
    if (this._protocolVersion)
      e["mcp-protocol-version"] = this._protocolVersion;
    let t = headersToRecord(this._requestInit?.headers);
    return new Headers({ ...e, ...t });
  }
  _startOrAuth() {
    let e = this?._eventSourceInit?.fetch ?? this._fetch ?? fetch;
    return new Promise((t, r) => {
      ((this._eventSource = new hce(this._url.href, {
        ...this._eventSourceInit,
        fetch: async (o, c) => {
          let d = await this._commonHeaders();
          d.set("Accept", "text/event-stream");
          let p = await e(o, { ...c, headers: d });
          if (p.status === 401 && p.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: _, scope: T } = aPe(p);
            ((this._resourceMetadataUrl = _), (this._scope = T));
          }
          return p;
        },
      })),
        (this._abortController = new AbortController()),
        (this._eventSource.onerror = (o) => {
          if (o.code === 401 && this._authProvider) {
            this._authThenStart().then(t, r);
            return;
          }
          let c = new Ht(o.code, o.message, o);
          (r(c), this.onerror?.(c));
        }),
        (this._eventSource.onopen = () => {}),
        this._eventSource.addEventListener("endpoint", (o) => {
          let c = o;
          try {
            if (
              ((this._endpoint = new URL(c.data, this._url)),
              this._endpoint.origin !== this._url.origin)
            )
              throw Error(
                `Endpoint origin does not match connection origin: ${this._endpoint.origin}`,
              );
          } catch (d) {
            (r(d), this.onerror?.(d), this.close());
            return;
          }
          t();
        }),
        (this._eventSource.onmessage = (o) => {
          let c = o,
            d;
          try {
            d = GR.parse(JSON.parse(c.data));
          } catch (p) {
            this.onerror?.(p);
            return;
          }
          this.onmessage?.(d);
        }));
    });
  }
  async start() {
    if (this._eventSource)
      throw Error(
        "SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.",
      );
    return await this._startOrAuth();
  }
  async finishAuth(e) {
    if (!this._authProvider) throw new XA("No auth provider");
    if (
      (await u2(this._authProvider, {
        serverUrl: this._url,
        authorizationCode: e,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit,
      })) !== "AUTHORIZED"
    )
      throw new XA("Failed to authorize");
  }
  async close() {
    (this._abortController?.abort(),
      this._eventSource?.close(),
      this.onclose?.());
  }
  async send(e) {
    if (!this._endpoint) throw Error("Not connected");
    try {
      let t = await this._commonHeaders();
      t.set("content-type", "application/json");
      let r = {
          ...this._requestInit,
          method: "POST",
          headers: t,
          body: JSON.stringify(e),
          signal: this._abortController?.signal,
        },
        o = await (this._fetch ?? fetch)(this._endpoint, r);
      if (!o.ok) {
        let c = await o.text().catch(() => null);
        if (o.status === 401 && this._authProvider) {
          let { resourceMetadataUrl: d, scope: p } = aPe(o);
          if (
            ((this._resourceMetadataUrl = d),
            (this._scope = p),
            (await u2(this._authProvider, {
              serverUrl: this._url,
              resourceMetadataUrl: this._resourceMetadataUrl,
              scope: this._scope,
              fetchFn: this._fetchWithInit,
            })) !== "AUTHORIZED")
          )
            throw new XA();
          return this.send(e);
        }
        throw Error(`Error POSTing to endpoint (HTTP ${o.status}): ${c}`);
      }
      await o.body?.cancel();
    } catch (t) {
      throw (this.onerror?.(t), t);
    }
  }
  setProtocolVersion(e) {
    this._protocolVersion = e;
  }
}
var Bt = toESM(_xt(), 1);
import gt from "process";
import { PassThrough } from "stream";
var Nr =
  gt.platform === "win32"
    ? [
        "APPDATA",
        "HOMEDRIVE",
        "HOMEPATH",
        "LOCALAPPDATA",
        "PATH",
        "PROCESSOR_ARCHITECTURE",
        "SYSTEMDRIVE",
        "SYSTEMROOT",
        "TEMP",
        "USERNAME",
        "USERPROFILE",
        "PROGRAMFILES",
      ]
    : ["HOME", "LOGNAME", "PATH", "SHELL", "TERM", "USER"];
function _t() {
  let e = {};
  for (let t of Nr) {
    let r = gt.env[t];
    if (r === void 0) continue;
    if (r.startsWith("()")) continue;
    e[t] = r;
  }
  return e;
}
class Ct {
  constructor(e) {
    if (
      ((this._readBuffer = new ReadBuffer()),
      (this._stderrStream = null),
      (this._serverParams = e),
      e.stderr === "pipe" || e.stderr === "overlapped")
    )
      this._stderrStream = new PassThrough();
  }
  async start() {
    if (this._process)
      throw Error(
        "StdioClientTransport already started! If using Client class, note that connect() calls start() automatically.",
      );
    return new Promise((e, t) => {
      if (
        ((this._process = Bt.default(
          this._serverParams.command,
          this._serverParams.args ?? [],
          {
            env: { ..._t(), ...this._serverParams.env },
            stdio: ["pipe", "pipe", this._serverParams.stderr ?? "inherit"],
            shell: !1,
            windowsHide: gt.platform === "win32",
            cwd: this._serverParams.cwd,
          },
        )),
        this._process.on("error", (r) => {
          (t(r), this.onerror?.(r));
        }),
        this._process.on("spawn", () => {
          e();
        }),
        this._process.on("close", (r) => {
          ((this._process = void 0), this.onclose?.());
        }),
        this._process.stdin?.on("error", (r) => {
          this.onerror?.(r);
        }),
        this._process.stdout?.on("data", (r) => {
          (this._readBuffer.append(r), this.processReadBuffer());
        }),
        this._process.stdout?.on("error", (r) => {
          this.onerror?.(r);
        }),
        this._stderrStream && this._process.stderr)
      )
        this._process.stderr.pipe(this._stderrStream);
    });
  }
  get stderr() {
    if (this._stderrStream) return this._stderrStream;
    return this._process?.stderr ?? null;
  }
  get pid() {
    return this._process?.pid ?? null;
  }
  processReadBuffer() {
    while (!0)
      try {
        let e = this._readBuffer.readMessage();
        if (e === null) break;
        this.onmessage?.(e);
      } catch (e) {
        this.onerror?.(e);
      }
  }
  async close() {
    if (this._process) {
      let e = this._process;
      this._process = void 0;
      let t = new Promise((r) => {
        e.once("close", () => {
          r();
        });
      });
      try {
        e.stdin?.end();
      } catch {}
      if (
        (await Promise.race([
          t,
          new Promise((r) => setTimeout(r, 2000).unref()),
        ]),
        e.exitCode === null)
      ) {
        try {
          e.kill("SIGTERM");
        } catch {}
        await Promise.race([
          t,
          new Promise((r) => setTimeout(r, 2000).unref()),
        ]);
      }
      if (e.exitCode === null)
        try {
          e.kill("SIGKILL");
        } catch {}
    }
    this._readBuffer.clear();
  }
  send(e) {
    return new Promise((t) => {
      if (!this._process?.stdin) throw Error("Not connected");
      let r = serializeMessage(e);
      if (this._process.stdin.write(r)) t();
      else this._process.stdin.once("drain", t);
    });
  }
}
import { randomUUID } from "crypto";
import { Readable as jr } from "stream";
import { pathToFileURL } from "url";
var $r = MAX_MCP_HTTP_BODY_BYTES,
  St = "without an SSE event boundary";
class zt extends Error {
  constructor(e) {
    super(
      `streamed >${Math.round(e / 1024 / 1024)}MB ${St}. The server is likely returning non-protocol data. Disconnecting to prevent unbounded memory growth.`,
    );
    this.name = "HttpBodyOverflowError";
  }
}
function Ur(e) {
  let t = 0,
    r = 0,
    o = !1;
  return new TransformStream({
    transform(c, d) {
      let p = -1;
      for (let _ = 0; _ < c.length; _++) {
        let T = c[_];
        if (o && T === 10) {
          o = !1;
          continue;
        }
        if (((o = !1), T === 10 || T === 13)) {
          if (r === 0) p = _;
          ((r = 0), (o = T === 13));
        } else r++;
      }
      if (((t = p >= 0 ? c.length - 1 - p : t + c.length), t > e)) {
        d.error(new zt(e));
        return;
      }
      d.enqueue(c);
    },
  });
}
function ze(e) {
  return async (t, r) => {
    let o = await e(t, r);
    if (!o.body || o.body.locked || o.status < 200 || o.status > 599) return o;
    let c = o.body.pipeThrough(Ur($r)),
      d = new Response(c, {
        status: o.status,
        statusText: o.statusText,
        headers: o.headers,
      });
    return (
      Object.defineProperty(d, "url", { value: o.url }),
      Object.defineProperty(d, "redirected", { value: o.redirected }),
      Object.defineProperty(d, "type", { value: o.type }),
      d
    );
  };
}
class Ge extends Error {
  constructor(e) {
    super(
      `wrote >${Math.round(e / 1024 / 1024)}MB to stdout without a JSON-RPC message boundary. The server is likely writing logs or other non-protocol data to stdout instead of stderr. Disconnecting to prevent unbounded memory growth.`,
    );
    this.name = "StdoutOverflowError";
  }
}
class Wt {
  capBytes;
  onOverflow;
  chunks = [];
  byteLength = 0;
  overflowed = !1;
  overflowThrown = !1;
  constructor(e, t) {
    this.capBytes = e;
    this.onOverflow = t;
  }
  append(e) {
    if (this.overflowed) return;
    if (this.byteLength + e.length > this.capBytes) {
      ((this.chunks = []),
        (this.byteLength = 0),
        (this.overflowed = !0),
        this.onOverflow(new Ge(this.capBytes)));
      return;
    }
    (this.chunks.push(e), (this.byteLength += e.length));
  }
  readMessage() {
    if (this.overflowed) {
      if (this.overflowThrown) return null;
      throw ((this.overflowThrown = !0), new Ge(this.capBytes));
    }
    if (this.chunks.length === 0) return null;
    let e = this.chunks.at(-1),
      t = e.indexOf(10);
    if (t === -1) return null;
    let r = this.chunks.length === 1 ? e : Buffer.concat(this.chunks),
      o = r.length - e.length + t,
      c = r.toString("utf8", 0, o).replace(/\r$/, ""),
      d = r.subarray(o + 1);
    return (
      (this.chunks = d.length > 0 ? [d] : []),
      (this.byteLength = d.length),
      deserializeMessage(c)
    );
  }
  clear() {
    ((this.chunks = []), (this.byteLength = 0));
  }
}
class Ke extends Ct {
  overflowError;
  constructor(e) {
    super(e);
    this._readBuffer = new Wt(MAX_MCP_HTTP_BODY_BYTES, (t) => {
      ((this.overflowError = t), queueMicrotask(() => void this.close()));
    });
  }
}
function Je(e) {
  return e.type === "claudeai-proxy" && e.stateless === !0 && isMcpStatelessSkipInitEnabled();
}
function Gt(e) {
  if (!Je(e) || e.type !== "claudeai-proxy") return;
  if (e.cachedInitResponse == null) return;
  let t = InitializeResultSchema.safeParse(e.cachedInitResponse);
  if (!t.success) {
    n(
      `[claudeai-mcp] cached_init_response for ${e.id} failed InitializeResult validation \u2014 falling back to real initialize`,
    );
    return;
  }
  if (!SUPPORTED_PROTOCOL_VERSIONS.includes(t.data.protocolVersion)) {
    n(
      `[claudeai-mcp] cached_init_response for ${e.id} carries unsupported protocolVersion ${sanitizeLogValue(t.data.protocolVersion)} \u2014 falling back to real initialize`,
    );
    return;
  }
  return t.data;
}
var Hr = createLazyValue(() =>
  it({
    supportedVersions: v(s()),
    capabilities: it({}),
    serverInfo: it({ name: s(), version: s() }).optional(),
  }),
);
function Jt(e) {
  if (!Je(e) || e.type !== "claudeai-proxy") return;
  if (e.discoverSupport === "legacy") return "method-not-found";
  if (e.discoverSupport !== "supported") return;
  if (e.cachedDiscoverResponse == null) return;
  let t = Hr().safeParse(e.cachedDiscoverResponse);
  if (!t.success) {
    n(
      `[claudeai-mcp] cached_discover_response for ${e.id} failed DiscoverResult shape check \u2014 passing server/discover through`,
    );
    return;
  }
  return { result: t.data };
}
function Xt(e, t, r) {
  let o = e.send.bind(e);
  e.send = async (c, d) => {
    if (t !== void 0 && isJSONRPCRequest(c) && c.method === "initialize") {
      let p = { jsonrpc: "2.0", id: c.id, result: t };
      queueMicrotask(() => e.onmessage?.(p));
      return;
    }
    if (r !== void 0 && isJSONRPCRequest(c) && c.method === "server/discover") {
      let p =
        r === "method-not-found"
          ? {
              jsonrpc: "2.0",
              id: c.id,
              error: {
                code: ErrorCode.MethodNotFound,
                message: "server/discover resolved locally as unsupported",
              },
            }
          : { jsonrpc: "2.0", id: c.id, result: r.result };
      queueMicrotask(() => e.onmessage?.(p));
      return;
    }
    if (isJSONRPCNotification(c) && c.method === "notifications/initialized") return;
    return o(c, d);
  };
}
function Zt(e, t) {
  let r = new URL(t).href;
  return async (o, c) => {
    if ((c?.method ?? "GET").toUpperCase() !== "GET") return e(o, c);
    let d =
      typeof o === "object" && o !== null && "url" in o ? o.url : String(o);
    if (new URL(d).href === r)
      return new Response(null, {
        status: 405,
        statusText: "Method Not Allowed",
      });
    return e(o, c);
  };
}
import { dirname } from "path";
var qe = import.meta.require("../Skills技能/fetchMcpSkillsForClient.er0bhc4y.js");
var Tt = import.meta.require("./getMcpAutoBackgroundMs.7m99c5cf.js");
function isMcpSessionExpiredError(e) {
  if (e instanceof McpSessionExpiredError) return !0;
  if (e instanceof McpError) return !1;
  let t = "code" in e ? e.code : void 0;
  if (t === 404)
    return !(
      e instanceof StreamableHTTPError && e.message.includes("Failed to open SSE stream")
    );
  return (
    t === 400 &&
    /Server not initialized|No valid session ID|Mcp-Session-Id header is required/i.test(
      e.message,
    )
  );
}
function capMcpInstructions(e, t) {
  if (!e) return e;
  return yr(e, "Server instructions", t);
}
function yr(e, t, r) {
  if (e.length <= MAX_MCP_TEXT_LENGTH) return e;
  if (r !== void 0) logMCPDebug(r, `${t} truncated from ${e.length} to ${MAX_MCP_TEXT_LENGTH} chars`);
  return truncateToCodeUnits(e, MAX_MCP_TEXT_LENGTH) + "\u2026 [truncated]";
}
function isTerminalConnectionError(e) {
  if (e.name === "AbortError") return !0;
  let t = e.message;
  return (
    t.includes("ECONNRESET") ||
    t.includes("ETIMEDOUT") ||
    t.includes("EPIPE") ||
    t.includes("EHOSTUNREACH") ||
    t.includes("ECONNREFUSED") ||
    t.includes("Body Timeout Error") ||
    /\bterminated\b/.test(t) ||
    t.includes("SSE stream disconnected") ||
    t.includes("Failed to reconnect SSE stream")
  );
}
var Vr = 1e8,
  Qt = 20,
  Gr = [250, 500, 1000];
function Kr(e) {
  if (isListAuthError(e)) return !1;
  if (isClaudeAiBearerRejectedError(e)) return !1;
  if (e instanceof DOMException && e.name === "TimeoutError") return !1;
  if (
    e instanceof Error &&
    !(e instanceof McpError) &&
    "code" in e &&
    typeof e.code === "number" &&
    e.code >= 400 &&
    e.code < 500
  )
    return !1;
  if (e instanceof McpError)
    return (
      e.code !== ErrorCode.RequestTimeout &&
      e.code !== ErrorCode.MethodNotFound &&
      e.code !== ErrorCode.InvalidRequest &&
      e.code !== ErrorCode.InvalidParams
    );
  return !0;
}
async function mt(e, t, r, o, c, d) {
  let p = !1;
  for (let _ = 0; ; _++) {
    let T = [],
      h,
      A = 0,
      L = !1;
    try {
      do {
        let W = await e.request(
          { method: o, ...(h && { params: { cursor: h } }) },
          c,
          { timeout: getMcpTimeoutMs() },
        );
        A++;
        let I = d(W);
        if (I) T.push(...I);
        if (((h = W.nextCursor), h && A >= Qt)) {
          L = !0;
          break;
        }
      } while (h);
      if (L)
        logMCPDebug(t, `${o} still returning nextCursor after ${Qt} pages; stopping`);
      if (A > 1) er(o, A, T.length, L ? "capped" : "complete");
      return T;
    } catch (W) {
      if (A > 0 && !p) ((p = !0), er(o, A, T.length, "error"));
      let I = Gr[_];
      if (I === void 0 || !Kr(W)) throw W;
      (logMCPDebug(t, `${o} failed (${formatConnectionError(W, r)}); retrying in ${I}ms`), await sleep(I));
    }
  }
}
function er(e, t, r, o) {
  logEvent("tengu_mcp_list_paginated", {
    method: fromEnum(e),
    pageCount: t,
    itemCount: r,
    outcome: fromEnum(o),
  });
}
function getMcpToolTimeoutMs(e) {
  let r =
    (e?.timeout !== void 0 && e.timeout >= 1000 ? e.timeout : void 0) ??
    a.MCP_TOOL_TIMEOUT ??
    Vr;
  return Math.min(Math.max(r, 1000), pS);
}
var Jr = 300000,
  Xr = 1800000,
  Zr = new Set(["sse-ide", "ws-ide", "sdk"]);
function getMcpToolIdleTimeoutMs(e) {
  let t = e?.type ?? "stdio";
  if (Zr.has(t)) return 0;
  let r = a.CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT ?? (t === "stdio" ? Xr : Jr);
  if (r <= 0) return 0;
  let o = e?.timeout !== void 0 && e.timeout >= 1000 ? e.timeout : 0;
  return Math.min(Math.max(r, o, 1000), getMcpToolTimeoutMs(e));
}
var eo = () => import.meta.require("../ClaudeinChrome/getClaudeInChromeMCPToolOverrides.9f9wpf77.js"),
  to = () => import.meta.require("../图片-截图-ComputerUse/buildSessionContext.s2wedcct.js"),
  MCP_TREE_ID = "v1",
  oo = 900000,
  no = 14400000,
  so = 90000,
  io = 60000;
async function isMcpAuthCached(e, t, r) {
  let c = (await readMcpNeedsAuthCache(r))[e];
  if (!c) return !1;
  if (t.type === "claudeai-proxy" && c.id !== t.id) return !1;
  if ((t.type === "stdio" || t.type === void 0) && t.pluginSource === void 0)
    return !1;
  if (
    (t.type === "stdio" || t.type === void 0) &&
    t.pluginSource !== void 0 &&
    c.id !== hashMcpServerConfig(t)
  )
    return !1;
  if (
    (t.type === "http" || t.type === "sse") &&
    t.pluginSource !== void 0 &&
    c.id !== void 0
  )
    return !1;
  let d =
      t.type === "claudeai-proxy" ||
      (t.pluginSource !== void 0 &&
        (t.type === "http" || t.type === "sse") &&
        !EUe(t)),
    p = c.ttlMs ?? (d ? no : oo),
    _ = Date.now() - c.timestamp;
  return _ > -io && _ < p;
}
async function Cr(e, t) {
  let r = await e.write(getMcpNeedsAuthCacheStateKey(), b(t), { publishDiscipline: "inPlace" });
  if (!r.ok)
    logMCPDebug("auth-cache", `needs-auth cache v5 write failed: ${We(r.error)}`);
  return r.ok;
}
function Lt(e, t, r, o) {
  let c = jt();
  c.authCacheWriteChain = c.authCacheWriteChain
    .then(async () => {
      let d = await readMcpNeedsAuthCache(o);
      if (
        ((d[e] = {
          timestamp: Date.now(),
          ...(t && { id: t }),
          ...(r !== void 0 && { ttlMs: r }),
        }),
        isHoverRestEnabled() && o !== void 0)
      ) {
        if (!(await Cr(o, d))) return;
      } else {
        let p = getFileStorage(),
          _ = getMcpNeedsAuthCachePath();
        (await p.mkdir(dirname(_)), await p.write(_, b(d)));
      }
      invalidateMcpNeedsAuthCache();
    })
    .catch(() => {});
}
function removeMcpAuthCacheEntry(e, t) {
  let r = jt(),
    o = r.authCacheWriteChain
      .then(async () => {
        let c = await readMcpNeedsAuthCache(t);
        if (!(e in c)) return;
        if ((delete c[e], isHoverRestEnabled() && t !== void 0)) {
          if (!(await Cr(t, c))) return;
        } else await getFileStorage().write(getMcpNeedsAuthCachePath(), b(c));
        invalidateMcpNeedsAuthCache();
      })
      .catch(() => {});
  return ((r.authCacheWriteChain = o), o);
}
function evictAllMcpMemosOnIdentityChange(e = new Set(), t = !0) {
  if (!isDiscoveryCacheEnabled()) return;
  if (t) Q3e();
  J3e();
  let r = (o) => {
    if (o) Jke(o, e);
  };
  if (!jt().holdStaleReauthEntryForTest) ur().reauthInFlight.clear();
  (r(connectToServer.cache),
    r(fetchToolsForClient.cache),
    r(fetchCommandsForClient.cache),
    r(fetchResourcesForClient.cache),
    r(fetchResourceTemplatesForClient.cache),
    qe.invalidateMcpSkillsExcept(e));
}
function Le(e, t) {
  let r = getMcpServerBaseUrl(e),
    o = t ? { mcpServerKeyHash: wP(t) } : {};
  if (r) return { mcpServerBaseUrl: r, ...o };
  return o;
}
function emitMcpServerConnectionEvent(e, t, r) {
  let o = wl(),
    c = t.pluginSource ? splitPluginId(t.pluginSource) : void 0,
    d = c && (isOfficialPluginScope(getPluginScope(c.name, c.marketplace, null)) || o);
  emitOtelEvent("mcp_server_connection", {
    status: r.status,
    transport_type: t.type ?? "stdio",
    server_scope: t.scope,
    duration_ms: String(Math.round(r.durationMs)),
    is_plugin: c !== void 0,
    ...(c && {
      plugin_id_hash: getPluginIdHash(c.name, c.marketplace),
      "plugin.name": d ? c.name : THIRD_PARTY_PLUGIN_LABEL,
    }),
    ...(r.errorCode && { error_code: String(sanitizeConnectErrorCodeForTelemetry(r.errorCode)) }),
    ...(o && { server_name: e, ...(r.error && { error: r.error }) }),
  });
}
async function Sr(e, t, r, o, c, d, p) {
  ensureDiscoveryCacheAccount();
  let _ = o instanceof AA,
    T = _ ? o.issues[0] : void 0,
    h = T
      ? `Server OAuth metadata invalid: ${T.path.join(".") || "(root)"} \u2014 ${T.message}`
      : void 0;
  (logEvent("tengu_mcp_server_needs_auth", {
    transportType: fromEnum(r),
    ...(_ && { cause: S("discovery_schema") }),
    ...Le(t, e),
  }),
    logMCPDebug(
      e,
      `Authentication required for ${{ sse: "SSE", http: "HTTP", "claudeai-proxy": "claude.ai proxy" }[r]} server`,
    ));
  let L = c && (t.type === "http" || t.type === "sse") && (await AUe(e, t)),
    W = d === void 0 || mE(d);
  if (W) Lt(e, t.type === "claudeai-proxy" ? t.id : void 0, L ? so : void 0, p);
  if (isDiscoveryCacheUsable())
    if (W) await i2(UIe(e, t));
    else
      logMCPDebug(
        e,
        "Discovery cache 401/403 purge skipped: identity changed since this connect round started (the current entry belongs to the new principal)",
      );
  return (
    logFeatureSad("mcp_connect", "mcp_connect_needs_auth"),
    { name: e, type: "needs-auth", config: t, error: h }
  );
}
var ao = {
  AUTH_HEADER_REJECTED: {
    severity: "bad",
    featureErrorCode: "mcp_connect_auth_header_rejected",
  },
  HEADERS_HELPER_AUTH_REJECTED: {
    severity: "bad",
    featureErrorCode: "mcp_connect_headers_helper_auth_rejected",
  },
  CLI_OWNED_BEARER_REJECTED: {
    severity: "bad",
    featureErrorCode: "mcp_connect_cli_owned_bearer_rejected",
  },
  FIRST_PARTY_AUTH_REJECTED: {
    severity: "sad",
    featureErrorCode: "mcp_connect_first_party_auth_rejected",
  },
};
function at({
  name: e,
  serverRef: t,
  transportType: r,
  errorCode: o,
  message: c,
  displayDetail: d,
}) {
  logEvent("tengu_mcp_server_connection_failed", {
    transportType: fromEnum(r),
    errorCode: fromEnum(o),
    sdkGeneration: fromEnum(getMcpSdkGeneration()),
    ...Le(t, e),
  });
  let { severity: p, featureErrorCode: _ } = ao[o];
  if (p === "bad") logFeatureBad("mcp_connect", _);
  else logFeatureSad("mcp_connect", _);
  return (
    logMCPError(e, c),
    {
      name: e,
      type: "failed",
      config: t,
      error: c,
      ...(d !== void 0 && { displayDetail: d }),
      errorCode: o,
    }
  );
}
function co(e, t, r, o, c) {
  let d = "api.anthropic.com";
  try {
    if ("url" in r) d = new URL(r.url).host;
  } catch {}
  let p = `HTTP ${c ?? 401}`,
    _ = isFirstPartyDesignServerConfig(r),
    T;
  switch (e) {
    case "design_credential":
      T =
        c === 403
          ? `${d} rejected your /design-login credential (HTTP 403). Check that your account has access to Claude Design, or run /design-login to re-authorize it and retry.`
          : `${d} rejected your /design-login credential (${p}). Run /design-login to re-authorize it and retry.`;
      break;
    case "none":
      T = `${d} needs a claude.ai sign-in and Claude Code had no usable credential to send (${p}). Run ${_ ? "/design-login" : "/login"} and retry.`;
      break;
    case "design_scoped_login":
    case "login": {
      if (c === 403 && _)
        T =
          e === "design_scoped_login"
            ? `${d} rejected your claude.ai login for Claude Design (HTTP 403) even though that login already includes Claude Design permissions, so this is most likely an account or project access problem. Check that your account has access to Claude Design; if it does, run /design-login and retry.`
            : `${d} rejected your claude.ai login for Claude Design (HTTP 403), most likely because a /login token carries no Claude Design access. Run /design-login and retry, or check that your account has access to Claude Design.`;
      else
        T =
          c === 403
            ? `${d} rejected your claude.ai login (HTTP 403). Your token ` +
              `may be missing a scope this server needs \u2014 run ${"/login"} and retry, or check that your account has access.`
            : `${d} rejected your claude.ai login (${p}). Run /login and retry.`;
      break;
    }
    default:
      return e;
  }
  return at({
    name: t,
    serverRef: r,
    transportType: o,
    errorCode: "FIRST_PARTY_AUTH_REJECTED",
    message: T,
  });
}
async function rr({
  name: e,
  serverRef: t,
  transportType: r,
  error: o,
  statusCode: c,
  sawAuthChallenge: d,
  hasUserAuthHeader: p,
  helperMintsAuthHeader: _,
  cliOwnedBearer: T,
  useFirstPartyAuth: h,
  firstPartyBearer: A,
  roundEpoch: L,
  storageV5: W,
}) {
  if (!(o instanceof XA || (o instanceof AA && d) || c === 401 || c === 403))
    return;
  if (p) {
    let D = sanitizeMessageText(o.message);
    return at({
      name: e,
      serverRef: t,
      transportType: r,
      errorCode: "AUTH_HEADER_REJECTED",
      message:
        `Server rejected the configured Authorization header (HTTP ${c ?? 401}). ` +
        "Check that the token is valid for this MCP endpoint \u2014 OAuth fallback is " +
        "disabled when headers.Authorization is set.",
      ...(D !== "" && { displayDetail: `Error detail: ${D}` }),
    });
  }
  if (_) {
    let D = sanitizeMessageText(o.message);
    return at({
      name: e,
      serverRef: t,
      transportType: r,
      errorCode: "HEADERS_HELPER_AUTH_REJECTED",
      message:
        `Server rejected the Authorization header minted by the configured headersHelper (HTTP ${c ?? 401}). ` +
        "Check that the helper command returns a valid credential for this MCP endpoint \u2014 OAuth fallback is " +
        "disabled when the helper supplies Authorization.",
      ...(D !== "" && { displayDetail: `Error detail: ${D}` }),
    });
  }
  if (T)
    return at({
      name: e,
      serverRef: t,
      transportType: r,
      errorCode: "CLI_OWNED_BEARER_REJECTED",
      message: `Server rejected the session credential (HTTP ${c ?? 401}). It will be retried when the session credential is refreshed.`,
    });
  if (h) return co(A ?? "none", e, t, r, c);
  return Sr(e, t, r, o, o instanceof XA || c === 401, L, W);
}
function createCcrProxyFetch(e) {
  return async (t, r) => {
    let o = new Headers(r?.headers);
    if (!o.has("Authorization")) {
      let d = getSessionAccessToken();
      if (d) (Pu().record(d), o.set("Authorization", `Bearer ${d}`));
    }
    let c = getCcrTurnId();
    if ((o.delete(CCR_TURN_ID_HEADER), c)) o.set(CCR_TURN_ID_HEADER, c);
    return e(t, { ...r, headers: o });
  };
}
function createCliOwnedBearerFetch(e, t) {
  return async (r, o) => {
    let c = new Headers(o?.headers);
    if (!c.has("Authorization")) {
      let d = xvt(t);
      if (d) (Pu().record(d), c.set("Authorization", `Bearer ${d}`));
    }
    return e(r, { ...o, headers: c, redirect: "error" });
  };
}
class ClaudeAiProxyBearerRejectedError extends Error {
  code = "CLAUDEAI_BEARER_REJECTED";
  reasonCode = "claudeai_bearer_rejected";
  constructor() {
    super(
      "claude.ai rejected the session token \u2014 it may lack connector scopes or be invalid. Run /login.",
    );
    this.name = "ClaudeAiProxyBearerRejectedError";
  }
}
function createClaudeAiProxyFetch(e, t) {
  return async (r, o) => {
    let c = async () => {
      await checkAndRefreshOAuthTokenIfNeeded({ credentials: t });
      let L = isHoverRestEnabled() && t !== void 0 ? await getClaudeAIOAuthTokensAsync(t) : getClaudeAIOAuthTokens();
      if (!L) throw Error("No claude.ai OAuth token available");
      let W = new Headers(o?.headers);
      return (
        Pu().record(L.accessToken),
        W.set("Authorization", `Bearer ${L.accessToken}`),
        { response: await e(r, { ...o, headers: W }), sentToken: L.accessToken }
      );
    };
    async function d(L) {
      if (
        L.status >= 400 &&
        L.headers.get("content-type")?.includes("text/event-stream")
      ) {
        let W = await L.text(),
          I = W.split(
            `
`,
          ).find((D) => D.startsWith("data: "));
        return new Response(I ? I.slice(6) : W, {
          status: L.status,
          statusText: L.statusText,
          headers: L.headers,
        });
      }
      return L;
    }
    let { response: p, sentToken: _ } = await c();
    if (p.status !== 401) return d(p);
    let T = p.headers.get("X-Mcp-Error-Code") ?? void 0;
    if (T)
      return (
        logEvent("tengu_mcp_claudeai_proxy_401", {
          tokenChanged: !1,
          proxyErrorCode: T,
        }),
        p
      );
    let h = await handleOAuth401Error(_, t).catch(() => !1);
    if ((logEvent("tengu_mcp_claudeai_proxy_401", { tokenChanged: h }), !h)) {
      let L = isHoverRestEnabled() && t !== void 0 ? await readFreshOAuthAccessToken(t) : getClaudeAIOAuthTokens()?.accessToken;
      if (!L || L === _) throw new ClaudeAiProxyBearerRejectedError();
    }
    let A = (await c()).response;
    if (A.status === 401 && !A.headers.get("X-Mcp-Error-Code")) throw new ClaudeAiProxyBearerRejectedError();
    return d(A);
  };
}
async function mo(e, t) {
  if (new URL(e).pathname.startsWith("/v1/design/")) {
    let o = await getDesignAuthResolver()?.(t);
    if (o?.ok) {
      if (o.expanded)
        (setPendingScopeExpansionNotice(
          "Added user:design:read and user:design:write to your claude.ai login (for the Design MCP connector).",
        ),
          logEvent("tengu_mcp_first_party_scope_expanded", {
            pathPrefix: S("/v1/design/"),
          }));
      return { accessToken: o.accessToken, bearer: o.bearer };
    }
  }
  await checkAndRefreshOAuthTokenIfNeeded({ credentials: t });
  let r = isHoverRestEnabled() && t !== void 0 ? await getClaudeAIOAuthTokensAsync(t) : getClaudeAIOAuthTokens();
  if (!r?.accessToken) return;
  return {
    accessToken: r.accessToken,
    bearer: r.scopes?.includes("user:design:read")
      ? "design_scoped_login"
      : "login",
  };
}
async function parseFirstPartyNeedsConsentBody(e) {
  let t = getDesignConsentProvider();
  if (t === null) return null;
  let r;
  try {
    r = await e.clone().json();
  } catch {
    return null;
  }
  if (r == null || typeof r !== "object" || r.error !== "needs_consent")
    return null;
  let o = r.consent;
  return t.isConsentBit(o) ? o : null;
}
function withdrawForSharingWideningDesignMcpOp(e, t, r, o) {
  if (!t || !PLAN_INVALIDATING_OPERATIONS.has(r)) return;
  let c = o.project_id;
  if (typeof c === "string" && c.length > 0)
    (deleteApprovedPlansForProject(e, c), deletePlansForProject(e, c), deleteVerifiedProjectGrantsForProject(e, c), markProjectForRecard(e, c));
}
var GRANT_ELIGIBLE_DESIGN_WRITE_OPS = new Set(["write_files", "create_support_js", "copy_files"]);
function denyTokenlessFirstPartyDesignWrite(e, t, r) {
  if (!e || !GRANT_ELIGIBLE_DESIGN_WRITE_OPS.has(t)) return null;
  let o = r?.plan_token;
  if (typeof o === "string" && o.length > 0) return null;
  return {
    behavior: "deny",
    message: `${t}: writing without a plan_token is available only through the native Claude Design tool \u2014 call finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
    decisionReason: {
      type: "safetyCheck",
      reason:
        "tokenless design writes are native-tool-only \u2014 this connector surface has no reserved-path or grant-approval flow",
      classifierApprovable: !1,
    },
  };
}
var yo = new Set([...GRANT_ELIGIBLE_DESIGN_WRITE_OPS, "finalize_plan", "delete_files", ...PLAN_INVALIDATING_OPERATIONS]);
function suppressDesignWriteAddRules(e, t) {
  return e && yo.has(t);
}
function buildFirstPartyDesignConsentAsk(e, t, r) {
  return {
    behavior: "ask",
    message: e,
    updatedInput: { ...t, __consentNonce: r },
    localDisplayOnly: !0,
    decisionReason: {
      type: "safetyCheck",
      reason:
        "design agent consent \u2014 approving records a server-side grant for Claude agents to write your design projects",
      classifierApprovable: !1,
    },
  };
}
function isFirstPartyDesignServerConfig(e) {
  return (
    (e.type === "sse" || e.type === "http") &&
    pA(e.url) &&
    new URL(e.url).pathname.startsWith("/v1/design/") &&
    !i0(e)
  );
}
function consentAskCanReachUser(e) {
  let t = getToolPermissionContext(e);
  return (
    !e.options.isNonInteractiveSession &&
    t.mode !== "bypassPermissions" &&
    !(t.mode === "plan" && t.isBypassPermissionsModeAvailable)
  );
}
function ccrRetroactiveAskCanPrompt(e) {
  let t = getToolPermissionContext(e);
  return (
    t.mode !== "bypassPermissions" &&
    t.mode !== "dontAsk" &&
    !(t.mode === "plan" && t.isBypassPermissionsModeAvailable) &&
    !t.shouldAvoidPermissionPrompts
  );
}
var To = 100;
function recordFirstPartyDesignConsentAsk(e, t, r) {
  let o = jt().firstPartyDesignConsentAsks,
    c = o.get(e),
    d = c !== void 0 && c.bit === t,
    p = d ? c.nonce : randomUUID();
  (o.delete(e),
    o.set(e, {
      bit: t,
      nonce: p,
      askReachesUser: d ? c.askReachesUser && r : r,
    }));
  while (o.size > To) {
    let _ = o.keys().next().value;
    if (_ === void 0) break;
    o.delete(_);
  }
  return p;
}
function takeFirstPartyDesignConsentAsk(e, t) {
  if (e === void 0) return null;
  let r = jt().firstPartyDesignConsentAsks,
    o = r.get(e) ?? null;
  if ((r.delete(e), o === null || t === void 0 || o.nonce !== t)) return null;
  return { bit: o.bit, askReachesUser: o.askReachesUser };
}
function withFirstPartyDesignConsentIntercept(e, t) {
  let {
    designSession: r,
    approvedConsentBit: o,
    consentAskReachesUser: c,
    credentials: d,
  } = t;
  return async (p) => {
    let _ = getDesignConsentProvider();
    try {
      let T = await e(p);
      if (o !== null && !p.aborted) _?.seedDesignConsentBit(r, o, !0);
      return T;
    } catch (T) {
      if (!(T instanceof FirstPartyDesignNeedsConsentError) || !_) throw T;
      let h = T.consent;
      if (h !== o)
        throw (
          _.seedDesignConsentBit(r, h, !1),
          new R(
            `${_.consentPromptFor(h)} The user hasn't granted this yet \u2014 ask them to retry (the prompt will show on the next call) or run /design consent.`,
            "first-party design MCP needs_consent (not shown)",
          )
        );
      if (!c)
        throw (
          _.seedDesignConsentBit(r, h, !1),
          new R(
            `${_.consentPromptFor(h)} The user hasn't granted this \u2014 run /design consent to grant it (it can't be approved automatically in this permission mode).`,
            "first-party design MCP needs_consent (no prompt)",
          )
        );
      return (await _.postDesignConsent(r, h, d), e(p));
    }
  };
}
function createFirstPartyApiMcpFetch(e, t, r) {
  return async (o, c) => {
    if (new Headers(c?.headers).has("Authorization") || !pA(o) || !isFirstPartyProvider())
      return e(o, c);
    let p = async () => {
        let I = await mo(o, t);
        if (((r.last = I?.bearer ?? "none"), !I))
          return { response: await e(o, c), sentToken: void 0 };
        let D = I.accessToken;
        Pu().record(D);
        let j = {
          ...Object.fromEntries(new Headers(c?.headers)),
          Authorization: `Bearer ${D}`,
        };
        return { response: await e(o, { ...c, headers: j }), sentToken: D };
      },
      _ = async (I) => {
        if (I.response.status === 403 && I.sentToken) {
          let D = await parseFirstPartyNeedsConsentBody(I.response);
          if (D !== null) throw new FirstPartyDesignNeedsConsentError(D);
        }
      },
      T = await p();
    await _(T);
    let { response: h, sentToken: A } = T;
    if (h.status !== 401 || !A) return h;
    if (!(await handleOAuth401Error(A, t).catch(() => !1))) {
      let I = isHoverRestEnabled() && t !== void 0 ? await readFreshOAuthAccessToken(t) : getClaudeAIOAuthTokens()?.accessToken;
      if (!I || I === A) return h;
    }
    let W;
    try {
      W = await p();
    } catch {
      return h;
    }
    return (await _(W), W.response);
  };
}
function buildSseStreamHeaders(e, t, r) {
  let o = new Headers({
    "User-Agent": getMCPUserAgent(),
    "Accept-Encoding": "identity",
    ...t,
  });
  new Headers(e).forEach((c, d) => o.set(d, c));
  for (let [c, d] of Object.entries(r)) o.set(c, d);
  return (o.set("Accept", "text/event-stream"), o);
}
var Mo = new Set(["image/jpeg", "image/png", "image/gif", "image/webp"]);
function sr(e) {
  if (!e) return !1;
  let t = beforeFirst(e, ";").trim().toLowerCase();
  return Mo.has(t === "image/jpg" ? "image/jpeg" : t);
}
var ar = 60000;
function getMcpRequestTimeoutMs(e) {
  let r =
    (e?.timeout !== void 0 && e.timeout >= 1000 ? e.timeout : void 0) ??
    a.MCP_TOOL_TIMEOUT;
  return r !== void 0 ? Math.min(Math.max(r, ar), pS) : ar;
}
function getArmedRequestTimeoutMs(e) {
  return Math.max(getMcpRequestTimeoutMs(e), getMcpTimeoutMs());
}
var ko = "application/json, text/event-stream";
function Pt(e) {
  return async (t, r) => {
    try {
      return await e(t, r);
    } catch (o) {
      rethrowFetchError(o, t);
    }
  };
}
function wrapFetchWithTimeout(e, t) {
  let r = getArmedRequestTimeoutMs(t);
  return async (o, c) => {
    if ((c?.method ?? "GET").toUpperCase() === "GET") return e(o, c);
    let p = new Headers(c?.headers);
    if (!p.has("accept")) p.set("accept", ko);
    if (shouldPropagateTraceContext()) {
      let A = getCurrentTraceparent();
      if (A && !p.has("traceparent")) p.set("traceparent", A);
    }
    let _ = new AbortController(),
      T = setTimeout(
        (A) =>
          A.abort(new DOMException("The operation timed out.", "TimeoutError")),
        r,
        _,
      );
    T.unref?.();
    let h = c?.signal;
    if (h?.aborted) _.abort(h.reason);
    else h?.addEventListener("abort", () => _.abort(h.reason), { once: !0 });
    try {
      return await e(o, { ...c, headers: p, signal: _.signal });
    } finally {
      clearTimeout(T);
    }
  };
}
function getMcpServerConnectionBatchSize() {
  return a.MCP_SERVER_CONNECTION_BATCH_SIZE ?? 3;
}
function getRemoteMcpServerConnectionBatchSize() {
  return a.MCP_REMOTE_SERVER_CONNECTION_BATCH_SIZE ?? 20;
}
function isLocalMcpServer(e) {
  return !e.type || e.type === "stdio" || e.type === "sdk";
}
var Do = ["mcp__ide__executeCode", "mcp__ide__getDiagnostics"];
function vr(e) {
  return !e.startsWith("mcp__ide__") || Do.includes(e);
}
function Oo(e) {
  return vr(e.name);
}
function Pr(e, t) {
  let r = H(e, []);
  if (!Array.isArray(r) || r.length === 0) return !1;
  if (r.includes("*")) return !0;
  if (!("url" in t) || typeof t.url !== "string") return !1;
  try {
    let o = new URL(t.url).hostname.toLowerCase();
    return r.some((c) => {
      if (typeof c !== "string" || c === "") return !1;
      let d = c.toLowerCase();
      return o === d || o.endsWith(`.${d}`);
    });
  } catch {
    return !1;
  }
}
function isSchemaNormalizeEnabledFor(e) {
  return Pr("tengu_mcp_normalize_root_combinators", e);
}
function isSchemaApiValidateEnabledFor(e) {
  return Pr("tengu_mcp_drop_invalid_tool_schemas", e);
}
function setHoldStaleReauthEntryForTest(e) {
  if (e) throw Error("setHoldStaleReauthEntryForTest is test-only");
  jt().holdStaleReauthEntryForTest = e;
}
function setMcpReauthDecisionSinkForTest(e) {
  jt().reauthDecisionSinkForTest = e;
}
function getRootsListResponse(e = !1) {
  let t = [];
  if (e)
    try {
      t = [getPluginToolStagingDir()];
    } catch (c) {
      n(`MCP: staging root unavailable, omitted from roots/list: ${l(c)}`);
    }
  let r = new Set(),
    o = [];
  for (let c of [he(), ...getAdditionalWorkingDirectories(), ...t]) {
    let d = pathToFileURL(c).href;
    if (r.has(d)) continue;
    (r.add(d), o.push({ uri: d }));
  }
  return { roots: o };
}
var $o = new Set(["documents"]);
function serverReceivesPluginToolStagingRoot(e) {
  if (getCurrentPlatform() === "windows") return !1;
  if (!e.pluginSource) return !1;
  try {
    return $o.has(splitPluginId(e.pluginSource).name.toLowerCase());
  } catch {
    return !1;
  }
}
function notifyMcpRootsListChanged() {
  for (let e of ur().liveClients)
    e.sendRootsListChanged().catch((t) => {
      n(`MCP: failed to send roots/list_changed: ${formatErrorWithCode(t)}`);
    });
}
var Bo = [
  ["ECONNRESET", "Connection reset - server may have crashed or restarted"],
  ["ETIMEDOUT", "Connection timeout - network issue or server unresponsive"],
  ["ECONNREFUSED", "Connection refused - server may be down"],
  ["EPIPE", "Broken pipe - server closed connection unexpectedly"],
  ["EHOSTUNREACH", "Host unreachable - network connectivity issue"],
  ["ESRCH", "Process not found - stdio server process terminated"],
  ["spawn", "Failed to spawn process - check command and permissions"],
];
function qo(e) {
  let t = new R(e, "MCP connection timeout");
  if (H("tengu_mcp_connect_timeout_retry", !0))
    return Object.assign(t, { code: "CONNECT_TIMEOUT" });
  return t;
}
var connectToServer = lct(
  async (e, t, r, o, c) => {
    xt();
    let d = Date.now(),
      p = ir(),
      _ = getAdditionalWorkingDirectories(),
      T = t.type ?? "stdio";
    if ((writeDiagnosticsEvent("info", "mcp_connect_starting", { transport: T }), isMcpServerUrlMissing(t))) {
      let D = t.configError ?? "No URL configured for this server";
      return (
        logMCPDebug(e, D),
        writeDiagnosticsEvent("info", "mcp_connect_skipped", {
          transport: T,
          reason: "unconfigured",
        }),
        {
          name: e,
          type: "failed",
          config: t,
          error: D,
          errorCode: "UNCONFIGURED",
        }
      );
    }
    {
      let D = t.configError;
      if (!D && "url" in t)
        try {
          new URL(t.url);
        } catch {
          D =
            "'url' is not a valid URL. Update the server's config and reconnect.";
        }
      if (D)
        return (
          logEvent("tengu_mcp_server_config_invalid", {
            transportType: fromEnum(t.type ?? "stdio"),
            field: S("url"),
            source: S(t.configError ? "loader" : "connect"),
          }),
          logMCPDebug(e, D),
          logMCPError(e, D),
          writeDiagnosticsEvent("warn", "mcp_connect_failed", {
            transport: T,
            duration_ms: Date.now() - d,
            reason: "invalid_config",
          }),
          logFeatureBad("mcp_connect", "mcp_connect_invalid_config"),
          {
            name: e,
            type: "failed",
            config: t,
            error: D,
            errorCode: "INVALID_CONFIG",
          }
        );
    }
    let h,
      A,
      L = !1,
      W = !1,
      I;
    try {
      let ye = function () {
          let w = Date.now();
          for (let O of B.activeCallWatchdogs)
            if (O.armedAt === 0) O.armedAt = w;
        },
        D = Ivt(e, t),
        j = Jse(t),
        ee = (t.type === "sse" || t.type === "http") && i0(t),
        X =
          t.type === "sse" || t.type === "http" || t.type === "ws"
            ? await fct(e, t)
            : {},
        me =
          (t.type === "sse" || t.type === "http") &&
          !!t.headersHelper &&
          XQe(X),
        V =
          (t.type === "sse" || t.type === "http") &&
          !ee &&
          !me &&
          !j &&
          !D &&
          pA(t.url) &&
          isFirstPartyProvider() &&
          (!!(isHoverRestEnabled() && c !== void 0 ? await getClaudeAIOAuthTokensAsync(c) : getClaudeAIOAuthTokens())?.accessToken ||
            (await hasFirstPartyDesignAuth(c)));
      if (V)
        logEvent("tengu_mcp_first_party_auto_auth", {
          transportType: fromEnum(t.type),
          ...Le(t, e),
        });
      let ie = {};
      if (t.type === "sse") {
        ace(t.headers, X);
        let w = ee || me || V || j ? void 0 : new X3e(e, t);
        A = w;
        let O = await resolveProxyFetchOptions(t.url),
          N = ze(Pt(createFetchWithInit(void 0, O)));
        if (w) N = wct(N, w);
        if (((N = wrapFetchWithTimeout(N, t)), V)) N = createFirstPartyApiMcpFetch(N, c, ie);
        let te = {
            authProvider: w,
            fetch: N,
            requestInit: {
              ...O,
              headers: {
                "User-Agent": getMCPUserAgent(),
                "Accept-Encoding": "identity",
                ...X,
              },
            },
          },
          Pe = Pt(async (we, xe) => {
            let Me = {},
              _e = await w?.tokens();
            if (_e) Me.Authorization = `Bearer ${_e.access_token}`;
            let Re = await resolveProxyFetchOptions(String(we));
            return fetch(we, { ...xe, ...Re, headers: buildSseStreamHeaders(xe?.headers, Me, X) });
          });
        ((te.eventSourceInit = {
          fetch: ze(w ? wct(Pe, w) : V ? createFirstPartyApiMcpFetch(Pe, c, ie) : Pe),
        }),
          (I = new nt(new URL(t.url), te)),
          logMCPDebug(e, "SSE transport initialized, awaiting connection"));
      } else if (t.type === "sse-ide") {
        logMCPDebug(e, `Setting up SSE-IDE transport to ${redactUrl(t.url)}`);
        let w = {
          fetch: ze(globalThis.fetch),
          requestInit: {
            headers: { "User-Agent": getMCPUserAgent(), "Accept-Encoding": "identity" },
          },
        };
        I = new nt(new URL(t.url), w);
      } else if (t.type === "ws-ide") {
        let w = getWebSocketTLSOptions();
        Pu().record(t.authToken);
        let O = {
            "User-Agent": getMCPUserAgent(),
            ...(t.authToken && {
              "X-Claude-Code-Ide-Authorization": t.authToken,
            }),
          },
          N = new globalThis.WebSocket(t.url, {
            protocols: ["mcp"],
            headers: O,
            proxy: getWebSocketProxyUrl(t.url),
            tls: w || void 0,
          });
        I = new ASe(N, (te) => GR.parse(te));
      } else if (t.type === "ws") {
        (ace(t.headers, X),
          logMCPDebug(e, `Initializing WebSocket transport to ${redactUrl(t.url)}`));
        let w = getWebSocketTLSOptions(),
          O = D ? getSessionAccessToken() : null;
        Pu().record(O ?? void 0);
        let N = {
            "User-Agent": getMCPUserAgent(),
            ...(O && { Authorization: `Bearer ${O}` }),
            ...X,
          },
          te = redactHeaders(N);
        logMCPDebug(
          e,
          `WebSocket transport options: ${b({ url: redactUrl(t.url), headers: te, hasSessionAuth: !!O })}`,
        );
        let Se = new globalThis.WebSocket(t.url, {
          protocols: ["mcp"],
          headers: N,
          proxy: getWebSocketProxyUrl(t.url),
          tls: w || void 0,
        });
        I = new ASe(Se, (Pe) => GR.parse(Pe));
      } else if (t.type === "http") {
        (ace(t.headers, X),
          logMCPDebug(e, `Initializing HTTP transport to ${redactUrl(t.url)}`),
          logMCPDebug(e, `Node version: ${process.version}, Platform: darwin`),
          logMCPDebug(
            e,
            `Environment: ${b({ NODE_OPTIONS: a.NODE_OPTIONS || "not set", UV_THREADPOOL_SIZE: a.UV_THREADPOOL_SIZE || "default", HTTP_PROXY: fp(a.HTTP_PROXY || "not set"), HTTPS_PROXY: fp(a.HTTPS_PROXY || "not set"), NO_PROXY: a.NO_PROXY || "not set" })}`,
          ));
        let w = ee || me || V || j ? void 0 : new X3e(e, t);
        A = w;
        let O = await resolveProxyFetchOptions(t.url),
          N = ze(Pt(createFetchWithInit(void 0, O)));
        if (w) N = wct(N, w);
        if (((N = wrapFetchWithTimeout(N, t)), V)) N = createFirstPartyApiMcpFetch(N, c, ie);
        if (D) N = createCcrProxyFetch(N);
        if (j) N = createCliOwnedBearerFetch(N, t);
        let te = {
            authProvider: w,
            fetch: N,
            requestInit: {
              ...O,
              headers: {
                "User-Agent": getMCPUserAgent(),
                "Accept-Encoding": "identity",
                ...X,
              },
            },
          },
          Se = te.requestInit?.headers ? redactHeaders(te.requestInit.headers) : void 0;
        (logMCPDebug(
          e,
          `HTTP transport options: ${b({ url: redactUrl(t.url), headers: Se, hasAuthProvider: !!w, timeoutMs: getArmedRequestTimeoutMs(t) })}`,
        ),
          (I = new StreamableHTTPClientTransport(new URL(t.url), te)),
          logMCPDebug(e, "HTTP transport created successfully"));
      } else if (t.type === "sdk")
        throw Error("SDK servers should be handled in print.ts");
      else if (t.type === "claudeai-proxy") {
        if (!isFirstPartyProvider())
          throw Error(
            "claude.ai MCP proxy is not available on third-party providers",
          );
        if (
          (logMCPDebug(e, `Initializing claude.ai proxy transport for server ${t.id}`),
          !(isHoverRestEnabled() && c !== void 0 ? await getClaudeAIOAuthTokensAsync(c) : getClaudeAIOAuthTokens()))
        )
          throw Error("No claude.ai OAuth token found");
        let O = getOauthConfig(),
          N = `${O.MCP_PROXY_URL}${O.MCP_PROXY_PATH.replace("{server_id}", t.id)}`;
        logMCPDebug(e, `Using claude.ai proxy at ${N}`);
        let te = createClaudeAiProxyFetch(ze(globalThis.fetch), c),
          Se = getProxyFetchOptions({ url: N }),
          we = {
            fetch: Je(t) ? Zt(wrapFetchWithTimeout(te, t), N) : wrapFetchWithTimeout(te, t),
            requestInit: {
              ...Se,
              headers: {
                "User-Agent": getMCPUserAgent(),
                "Accept-Encoding": "identity",
                "X-Mcp-Client-Session-Id": K(),
              },
            },
          };
        ((I = new StreamableHTTPClientTransport(new URL(N), we)),
          logMCPDebug(e, "claude.ai proxy transport created successfully"));
      } else if (ZN(t) && isClaudeInChromeMCPServer(e)) {
        let { isClaudeInChromeAllowed: w } =
          await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js");
        if (!w())
          return (
            logMCPDebug(
              e,
              "Skipping connection (Claude in Chrome is blocked by org policy)",
            ),
            {
              name: e,
              type: "failed",
              config: t,
              error: MCP_BLOCKED_BY_POLICY_MESSAGE,
              errorCode: "POLICY_BLOCKED",
            }
          );
        let { createChromeContext: O } = await import("../ClaudeinChrome/createChromeContext.ny2380rf.js"),
          { createChromeSocketClient: N, createClaudeForChromeMcpServer: te } =
            await import("../../01-核心基础设施/共享小工具-未细化/createChromeSocketClient.s4c4rtzf.js"),
          { createLinkedTransportPair: Se } =
            await import("../../01-核心基础设施/共享小工具-未细化/createLinkedTransportPair.qtywxtch.js"),
          { setChromeBinding: Pe } = await import("../ClaudeinChrome/setChromeBinding.wm1nbm73.js"),
          { registerChromeTabGroupCleanup: we } =
            await import("../权限系统/registerChromeTabGroupCleanup.epxd464c.js"),
          xe = O(t.env, {
            availabilityFunnel: !0,
            credentials: c,
            bearerGate: async () => w(),
          }),
          Me = N(xe);
        (Pe(xe, Me), we(), (h = te(xe, Me)));
        let [_e, Re] = Se();
        (await h.connect(Re),
          (I = _e),
          logMCPDebug(e, "In-process Chrome MCP server started"));
      } else if (ZN(t) && lq(e)) {
        let { createComputerUseMcpServerForCli: w } =
            await import("../图片-截图-ComputerUse/runComputerUseMcpServer.cvpyez80.js"),
          { createLinkedTransportPair: O } =
            await import("../../01-核心基础设施/共享小工具-未细化/createLinkedTransportPair.qtywxtch.js");
        h = await w();
        let [N, te] = O();
        (await h.connect(te),
          (I = N),
          logMCPDebug(e, "In-process Computer Use MCP server started"));
      } else if (t.type === "stdio" || !t.type) {
        let w = a.CLAUDE_CODE_SHELL_PREFIX || t.command,
          O = a.CLAUDE_CODE_SHELL_PREFIX
            ? [jo([t.command, ...t.args])]
            : t.args,
          {
            command: N,
            args: te,
            pending: Se,
            capped: Pe,
          } = isMcpServerUsedByHooks(e)
            ? { command: w, args: O, pending: !1, capped: !1 }
            : yxt("mcp", w, O);
        ((L = Se), (W = Pe));
        let we = shouldUseMcpAllowlistEnv() ? { ..._t(), ...agentProxyEnv() } : subprocessEnv(),
          {
            CLAUDE_CODE_CHILD_SESSION: xe,
            CLAUDE_CODE_CHROME_MCP_ORG_DENIED: Me,
            ..._e
          } = we;
        I = new Ke({
          command: N,
          args: te,
          env: {
            ..._e,
            CLAUDE_PROJECT_DIR: sn(),
            CLAUDE_CODE_SESSION_ID: K(),
            CLAUDECODE: "1",
            ...t.env,
            ...(!isPolicyAllowed("allow_claude_browser_extension") && {
              CLAUDE_CODE_CHROME_MCP_ORG_DENIED: "1",
            }),
          },
          stderr: "pipe",
        });
      } else throw Error(`Unsupported server type: ${t.type}`);
      let C,
        E,
        F = "";
      if (t.type === "stdio" || !t.type) {
        let w = I;
        if (w.stderr instanceof jr)
          ((E = w.stderr),
            (C = (O) => {
              if (F.length < 67108864)
                try {
                  F += O.toString();
                } catch {}
            }),
            E.on("data", C));
      }
      let U = new ot(
        {
          name: "claude-code",
          title: "Claude Code",
          version:
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.263",
              FEEDBACK_CHANNEL:
                "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-09-06T01:08:56Z",
              GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
              HOOKS_WORKER_URL:
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              DD_SOURCEMAP_GROUP: "darwin",
            }.VERSION ?? "unknown",
          description: "Anthropic's agentic coding tool",
          websiteUrl: Wre,
        },
        { capabilities: getMcpClientCapabilities() },
      );
      if (t.type === "http") logMCPDebug(e, "Client created, setting up request handler");
      if (
        (U.setRequestHandler(
          ListRootsRequestSchema,
          async () => (
            logMCPDebug(e, "Received ListRoots request from server"),
            getRootsListResponse(serverReceivesPluginToolStagingRoot(t))
          ),
        ),
        logMCPDebug(e, `Starting connection with timeout of ${getMcpTimeoutMs()}ms`),
        t.type === "http")
      ) {
        logMCPDebug(e, `Testing basic HTTP connectivity to ${redactUrl(t.url)}`);
        try {
          let w = new URL(t.url),
            O = redactUrl(w.href),
            N = URL.canParse(O) ? new URL(O) : void 0;
          if (
            (logMCPDebug(
              e,
              N
                ? `Parsed URL: host=${N.hostname}, port=${N.port || "default"}, protocol=${N.protocol}`
                : `Parsed URL: ${O}`,
            ),
            w.hostname === "127.0.0.1" || w.hostname === "localhost")
          )
            logMCPDebug(e, `Using loopback address: ${w.hostname}`);
        } catch {
          logMCPDebug(e, `Failed to parse URL: ${redactUrl(t.url)}`);
        }
      }
      let ne = Gt(t),
        Y = Jt(t);
      if (Je(t)) {
        if (
          (logMCPDebug(
            e,
            ne
              ? "Stateless claudeai-proxy \u2014 resolving MCP initialize from cached projection"
              : "Stateless claudeai-proxy \u2014 no cached projection; real initialize, GET SSE suppressed",
          ),
          Y !== void 0)
        )
          logMCPDebug(
            e,
            Y === "method-not-found"
              ? "Stateless claudeai-proxy \u2014 server/discover resolved locally as legacy (method-not-found)"
              : "Stateless claudeai-proxy \u2014 resolving server/discover from cached projection",
          );
        Xt(I, ne, Y);
      }
      let fe = U.connect(I, { timeout: getMcpTimeoutMs() }),
        k = new Promise((w, O) => {
          let N = setTimeout(() => {
            let te = Date.now() - d;
            if (
              (logMCPDebug(
                e,
                `Connection timeout triggered after ${te}ms (limit: ${getMcpTimeoutMs()}ms)`,
              ),
              h)
            )
              h.close().catch(() => {});
            (I?.close().catch(() => {}),
              O(qo(`MCP server "${e}" connection timed out after ${getMcpTimeoutMs()}ms`)));
          }, getMcpTimeoutMs());
          fe.then(
            () => {
              clearTimeout(N);
            },
            (te) => {
              clearTimeout(N);
            },
          );
        });
      try {
        if ((await Promise.race([fe, k]), F))
          (logMCPError(e, `Server stderr: ${F}`), (F = ""));
        if (C && E) (E.off("data", C), E.resume());
        let w = Date.now() - d;
        if (
          (logMCPDebug(
            e,
            `Successfully connected (transport: ${t.type || "stdio"}) in ${w}ms`,
          ),
          (t.type === "stdio" || !t.type) && I instanceof Ke && I.pid)
        ) {
          if ((registerChildProcess("mcp_stdio", I.pid), L)) Qie("mcp", I.pid, () => isMcpServerUsedByHooks(e));
          if (W || L) trackMcpServerProcess(e, I.pid);
        }
      } catch (w) {
        let O = Date.now() - d;
        if (I instanceof Ke && I.overflowError) {
          if ((logMCPError(e, I.overflowError.message), F)) logMCPError(e, `Server stderr: ${F}`);
          throw I.overflowError;
        }
        if (t.type === "sse" && w instanceof Error) {
          (logMCPDebug(
            e,
            `SSE Connection failed after ${O}ms: ${b({ url: redactUrl(t.url), error: formatConnectionError(w, t), errorType: w.constructor.name, stack: redactErrorForLogging(w, t) === w ? w.stack : void 0 })}`,
          ),
            logMCPError(e, redactErrorForLogging(w, t)));
          let N = await rr({
            name: e,
            serverRef: t,
            transportType: "sse",
            error: w,
            statusCode: w.code,
            sawAuthChallenge: A?.sawAuthChallenge === !0,
            hasUserAuthHeader: ee,
            helperMintsAuthHeader: me,
            cliOwnedBearer: j,
            useFirstPartyAuth: V,
            firstPartyBearer: ie.last,
            roundEpoch: p,
            storageV5: o,
          });
          if (N) return N;
        } else if (t.type === "http" && w instanceof Error) {
          let N = w;
          (logMCPDebug(
            e,
            `HTTP Connection failed after ${O}ms: ${formatConnectionError(w, t)} (code: ${N.code || "none"}, errno: ${N.errno || "none"})`,
          ),
            logMCPError(e, redactErrorForLogging(w, t)));
          let te = await rr({
            name: e,
            serverRef: t,
            transportType: "http",
            error: w,
            statusCode: w.code,
            sawAuthChallenge: A?.sawAuthChallenge === !0,
            hasUserAuthHeader: ee,
            helperMintsAuthHeader: me,
            cliOwnedBearer: j,
            useFirstPartyAuth: V,
            firstPartyBearer: ie.last,
            roundEpoch: p,
            storageV5: o,
          });
          if (te) return te;
        } else if (t.type === "claudeai-proxy" && w instanceof Error) {
          if (
            (logMCPDebug(
              e,
              `claude.ai proxy connection failed after ${O}ms: ${formatConnectionError(w, t)}`,
            ),
            !isClaudeAiBearerRejectedError(w))
          )
            logMCPError(e, redactErrorForLogging(w, t));
          let N = w.code;
          if (isClaudeAiBearerRejectedError(w)) {
            (logEvent("tengu_mcp_server_connection_failed", {
              transportType: S("claudeai-proxy"),
              errorCode: S("CLAUDEAI_BEARER_REJECTED"),
              sdkGeneration: fromEnum(getMcpSdkGeneration()),
              ...Le(t, e),
            }),
              logFeatureSad("mcp_connect", "mcp_connect_claudeai_bearer_rejected"));
            let te = getMcpServerConfigCacheKey(e, t),
              Se = {
                name: e,
                type: "failed",
                config: t,
                error: w.message,
                errorCode: "CLAUDEAI_BEARER_REJECTED",
              },
              Pe = ur().connections.get(te);
            if (Pe)
              Pe.then(
                (we) => {
                  if (we === Se && ur().connections.get(te) === Pe)
                    ur().connections.delete(te);
                },
                () => {},
              );
            return Se;
          }
          if (N === 401 || N === 403)
            return Sr(e, t, "claudeai-proxy", void 0, !1, p, o);
        } else if (t.type === "sse-ide" || t.type === "ws-ide")
          logEvent("tengu_mcp_ide_server_connection_failed", {
            connectionDurationMs: O,
          });
        if (h) h.close().catch(() => {});
        if ((I.close().catch(() => {}), F)) logMCPError(e, `Server stderr: ${F}`);
        throw w;
      }
      let ae = U.getServerCapabilities(),
        de = U.getServerVersion(),
        se = getOfficialPluginPromptOverrides(t),
        ve = getOverriddenServerInstructions(se, e) ?? U.getInstructions(),
        ke = capMcpInstructions(ve, e);
      if (
        (logMCPDebug(
          e,
          `Connection established with capabilities: ${b({ hasTools: !!ae?.tools, hasPrompts: !!ae?.prompts, hasResources: !!ae?.resources, hasResourceSubscribe: !!ae?.resources?.subscribe, serverVersion: de || "unknown" })}`,
        ),
        n(
          `[MCP] Server "${e}" connected with subscribe=${!!ae?.resources?.subscribe}`,
        ),
        U.setRequestHandler(
          ElicitRequestSchema,
          async (w) => (
            logMCPDebug(e, `Elicitation request received during initialization: ${b(w)}`),
            { action: "cancel" }
          ),
        ),
        t.type === "sse-ide" || t.type === "ws-ide")
      ) {
        let w = Date.now() - d;
        (logEvent("tengu_mcp_ide_server_connection_succeeded", {
          connectionDurationMs: w,
          serverVersion: Ms(de?.version),
        }),
          notifyIdeConnected(U).catch((O) => {
            logMCPError(e, `Failed to send ide_connected notification: ${formatConnectionError(O, t)}`);
          }));
      }
      let De = Date.now(),
        Te = !1,
        { onerror: Q, onclose: Ce } = U,
        z = 3,
        B = {
          consecutiveErrors: 0,
          activeCallWatchdogs: new Set(),
          pendingElicitations: 0,
          lastElicitationClosedAt: 0,
        },
        Ee = !1,
        le = (w) => {
          if (Ee) return;
          ((Ee = !0),
            logMCPDebug(e, `Closing transport (${w})`),
            U.close().catch((O) => {
              logMCPDebug(e, `Error during close: ${formatConnectionError(O, t)}`);
            }));
        };
      if (
        ((U.onerror = (w) => {
          let O = t.type || "stdio";
          if (O === "stdio" && w instanceof SyntaxError) {
            logMCPError(e, `Ignoring non-JSON line on stdout: ${w.message}`);
            return;
          }
          if (w instanceof FirstPartyDesignNeedsConsentError) return;
          if (O === "stdio" && w instanceof Ge) {
            if ((logMCPError(e, w.message), (Te = !0), le("stdout overflow"), Q)) Q(w);
            return;
          }
          if (
            (O === "sse" ||
              O === "sse-ide" ||
              O === "http" ||
              O === "claudeai-proxy") &&
            w.message.includes(St)
          ) {
            if ((logMCPError(e, w.message), (Te = !0), le("http body overflow"), Q))
              Q(w);
            return;
          }
          if (
            (O === "sse" || O === "http" || O === "claudeai-proxy") &&
            w instanceof SyntaxError
          ) {
            if (
              ((Te = !0),
              ye(),
              le("malformed JSON-RPC message (response truncated)"),
              Q)
            )
              Q(w);
            return;
          }
          let N = Date.now() - De;
          if (
            ((Te = !0),
            logMCPDebug(
              e,
              `${O.toUpperCase()} connection dropped after ${Math.floor(N / 1000)}s uptime`,
            ),
            w.message)
          ) {
            let te = Bo.find(([Se]) => w.message.includes(Se))?.[1];
            logMCPDebug(e, te ?? `Connection error: ${formatConnectionError(w, t)}`);
          }
          if (
            (O === "http" || O === "claudeai-proxy") &&
            U.transport?.sessionId !== void 0 &&
            isMcpSessionExpiredError(w)
          ) {
            if (
              (logMCPDebug(
                e,
                "MCP session expired (server no longer recognizes session ID), triggering reconnection",
              ),
              le("session expired"),
              Q)
            )
              Q(w);
            return;
          }
          if (
            (O === "http" || O === "claudeai-proxy") &&
            U.transport?.sessionId !== void 0 &&
            w instanceof StreamableHTTPError &&
            w.code === 404 &&
            w.message.includes("Failed to open SSE stream")
          )
            logFeatureSad("mcp_session_recovery", "get_stream_404_not_reinit");
          if (O === "sse" || O === "http" || O === "claudeai-proxy") {
            if (w.message.includes("Maximum reconnection attempts")) {
              if (
                (logMCPDebug(
                  e,
                  "SSE GET-stream reconnection exhausted; leaving transport up (POST still works)",
                ),
                (B.consecutiveErrors = 0),
                ye(),
                Q)
              )
                Q(w);
              return;
            }
            if (isTerminalConnectionError(w)) {
              if (
                (B.consecutiveErrors++,
                ye(),
                logMCPDebug(e, `Terminal connection error ${B.consecutiveErrors}/${z}`),
                B.consecutiveErrors >= z)
              )
                ((B.consecutiveErrors = 0),
                  le("max consecutive terminal errors"));
            } else B.consecutiveErrors = 0;
          }
          if (Q) Q(w);
        }),
        U.transport)
      ) {
        let w = U.transport.onmessage;
        U.transport.onmessage = (O, N) => {
          if (B.consecutiveErrors !== 0) B.consecutiveErrors = 0;
          w?.(O, N);
        };
      }
      U.onclose = () => {
        let w = Date.now() - De,
          O = t.type ?? "unknown";
        (logMCPDebug(
          e,
          `${O.toUpperCase()} connection closed after ${Math.floor(w / 1000)}s (${Te ? "with errors" : "cleanly"})`,
        ),
          emitMcpServerConnectionEvent(e, t, { status: "disconnected", durationMs: w }));
        let N = getMcpServerConfigCacheKey(e, t);
        if (
          (ur().liveClients.delete(U),
          ur().toolLists.delete(N),
          ur().resourceLists.delete(N),
          ur().resourceTemplateLists.delete(N),
          ur().commandLists.delete(N),
          isMcpSkillsEnabled())
        )
          qe.invalidateMcpSkillsForServer(N);
        if (
          (ur().connections.delete(N),
          logMCPDebug(e, "Cleared connection cache for reconnection"),
          Ce)
        )
          Ce();
      };
      let ue = async () => {
          if (h) {
            try {
              await h.close();
            } catch (w) {
              logMCPDebug(e, `Error closing in-process server: ${w}`);
            }
            try {
              await U.close();
            } catch (w) {
              logMCPDebug(e, `Error closing client: ${formatConnectionError(w, t)}`);
            }
            return;
          }
          if (t.type === "stdio" || !t.type)
            try {
              let O = I.pid;
              if (O) {
                logMCPDebug(e, "Sending SIGINT to MCP server process");
                try {
                  process.kill(O, "SIGINT");
                } catch (N) {
                  logMCPDebug(e, `Error sending SIGINT: ${N}`);
                  return;
                }
                await new Promise(async (N) => {
                  let te = !1,
                    Se = () => {
                      if (te) return;
                      ((te = !0), clearInterval(we), clearTimeout(xe), N());
                    },
                    Pe = (Me) => {
                      try {
                        return (process.kill(Me, 0), !0);
                      } catch {
                        return !1;
                      }
                    },
                    we = setInterval(
                      (Me, _e, Re, Ue) => {
                        if (!Me(_e))
                          (logMCPDebug(Re, "MCP server process exited cleanly"), Ue());
                      },
                      50,
                      Pe,
                      O,
                      e,
                      Se,
                    ),
                    xe = setTimeout(
                      (Me, _e) => {
                        (logMCPDebug(
                          Me,
                          "Cleanup timeout reached, stopping process monitoring",
                        ),
                          _e());
                      },
                      600,
                      e,
                      Se,
                    );
                  try {
                    if ((await sleep(100), !te)) {
                      if (!Pe(O)) {
                        Se();
                        return;
                      }
                      logMCPDebug(
                        e,
                        "SIGINT failed, sending SIGTERM to MCP server process",
                      );
                      try {
                        process.kill(O, "SIGTERM");
                      } catch (Me) {
                        (logMCPDebug(e, `Error sending SIGTERM: ${Me}`), Se());
                        return;
                      }
                      if ((await sleep(400), !te))
                        if (!Pe(O)) Se();
                        else {
                          logMCPDebug(
                            e,
                            "SIGTERM failed, sending SIGKILL to MCP server process",
                          );
                          try {
                            process.kill(O, "SIGKILL");
                          } catch (Me) {
                            logMCPDebug(e, `Error sending SIGKILL: ${Me}`);
                          }
                        }
                    }
                    Se();
                  } catch {
                    Se();
                  }
                });
              }
            } catch (w) {
              logMCPDebug(e, `Error terminating process: ${w}`);
            }
          try {
            await U.close();
          } catch (w) {
            logMCPDebug(e, `Error closing client: ${formatConnectionError(w, t)}`);
          }
        },
        re = Et(ue),
        be = async () => {
          (ur().liveClients.delete(U), re?.(), await ue());
        };
      if ((ur().liveClients.add(U), getAdditionalWorkingDirectories() !== _))
        U.sendRootsListChanged().catch(() => {});
      let Ae = Date.now() - d;
      (emitMcpServerConnectionEvent(e, t, { status: "connected", durationMs: Ae }),
        logEvent("tengu_mcp_server_connection_succeeded", {
          connectionDurationMs: Ae,
          transportType: fromEnum(t.type ?? "stdio"),
          sdkGeneration: fromEnum(getMcpSdkGeneration()),
          scope: fromEnum(t.scope),
          isPlugin: t.pluginSource !== void 0,
          totalServers: r?.totalServers,
          stdioCount: r?.stdioCount,
          sseCount: r?.sseCount,
          httpCount: r?.httpCount,
          sseIdeCount: r?.sseIdeCount,
          wsIdeCount: r?.wsIdeCount,
          ...Le(t, e),
        }),
        logFeatureOk("mcp_connect"),
        writeDiagnosticsEvent("info", "mcp_connect_complete", { transport: T, duration_ms: Ae }));
      let Fe = {
        name: e,
        client: asMcpClient(U),
        type: "connected",
        capabilities: ae ?? {},
        serverInfo: de,
        instructions: ke,
        config: t,
        cleanup: be,
        transportErrorState: B,
      };
      gE(e);
      try {
        Nrt()?.(Fe);
      } catch (w) {
        logMCPError(
          e,
          `connected-client wiring failed (placeholder retained, adoption will retry): ${l(w)}`,
        );
      }
      return Fe;
    } catch (D) {
      let j = Date.now() - d,
        ee = formatConnectionError(D, t),
        X = D instanceof Error ? D.cause : void 0,
        me =
          (D && typeof D === "object" && "code" in D ? D.code : void 0) ??
          (X && typeof X === "object" && "code" in X ? X.code : void 0),
        V = me !== void 0 ? String(me) : void 0;
      if (
        t.type === "http" &&
        V === "404" &&
        I?.sessionId === void 0 &&
        !zZe(t)
      )
        ((V = "ENDPOINT_NOT_FOUND"),
          (ee = `MCP endpoint not found at ${wQ(t) ?? "(unparseable url)"}. Check the URL in your MCP config.`));
      emitMcpServerConnectionEvent(e, t, { status: "failed", durationMs: j, errorCode: V, error: ee });
      let ie =
        V === "ENOENT" && (t.type === "stdio" || t.type === void 0)
          ? "mcp_connect_spawn_enoent"
          : V === "ENDPOINT_NOT_FOUND"
            ? "mcp_connect_endpoint_not_found"
            : void 0;
      if (ie !== void 0) logFeatureBad("mcp_connect", ie);
      else {
        let C =
          V === "ECONNREFUSED"
            ? "mcp_connect_refused"
            : ee.includes("timed out")
              ? "mcp_connect_timeout"
              : "mcp_connect_failed";
        logFeatureSad("mcp_connect", `${C}_${t.type ?? "stdio"}`);
      }
      if (
        (logEvent("tengu_mcp_server_connection_failed", {
          connectionDurationMs: j,
          errorCode: sanitizeConnectErrorCodeForTelemetry(V),
          errorClassName: pot(D),
          errorMessageHash: Tn(dRe(ee)),
          totalServers: r?.totalServers || 1,
          stdioCount: r?.stdioCount || (t.type === "stdio" ? 1 : 0),
          sseCount: r?.sseCount || (t.type === "sse" ? 1 : 0),
          httpCount: r?.httpCount || (t.type === "http" ? 1 : 0),
          sseIdeCount: r?.sseIdeCount || (t.type === "sse-ide" ? 1 : 0),
          wsIdeCount: r?.wsIdeCount || (t.type === "ws-ide" ? 1 : 0),
          transportType: fromEnum(t.type ?? "stdio"),
          sdkGeneration: fromEnum(getMcpSdkGeneration()),
          scope: fromEnum(t.scope),
          isPlugin: t.pluginSource !== void 0,
          ...Le(t, e),
        }),
        logMCPDebug(
          e,
          `Connection failed after ${j}ms${V !== void 0 ? ` (${V})` : ""}: ${ee}`,
        ),
        logMCPError(e, `Connection failed${V !== void 0 ? ` (${V})` : ""}: ${ee}`),
        writeDiagnosticsEvent("error", "mcp_connect_failed", {
          transport: T,
          duration_ms: j,
          ...(V === "CONNECT_TIMEOUT" && { reason: "timeout" }),
        }),
        h)
      )
        h.close().catch(() => {});
      if (
        (t.type === "stdio" || t.type === void 0) &&
        t.pluginSource !== void 0
      )
        Lt(e, hashMcpServerConfig(t), void 0, o);
      return { name: e, type: "failed", config: t, error: ee, errorCode: V };
    }
  },
  getMcpServerConfigCacheKey,
  () => ur().connections,
);
function ensureDiscoveryCacheAccount() {
  if ((initMcpDiscoveryCacheKillSwitch(), Rct(() => "legacy"), kct())) return;
  vct(pct);
}
function xt() {
  if (Lx()) return;
  Mrt(ensureConnectedClient);
}
function At(e, t) {
  try {
    cachedRowAdoptEmitter.emit(e, t);
  } catch (r) {
    logMCPDebug(e, `cached-row adopt subscriber threw: ${l(r)}`);
  }
}
function Ft(e, t) {
  if (t) logFeatureSad("mcp_discovery_cache", "lazy_dial_failed");
  ur().settledCachedDialFailures.set(getMcpServerConfigCacheKey(e.name, e.config), {
    failure: e,
    ownStrike: t,
  });
  try {
    cachedRowDialFailedEmitter.emit(e, t);
  } catch (r) {
    logMCPDebug(e.name, `cached-row dial-failed subscriber threw: ${l(r)}`);
  }
}
function takeSettledCachedDialFailure(e, t) {
  let r = ur().settledCachedDialFailures,
    o = getMcpServerConfigCacheKey(e, t),
    c = r.get(o);
  return (r.delete(o), c);
}
async function hasUnsettledDial(e, t) {
  let r = connectToServer.cache?.get?.(getMcpServerConfigCacheKey(e, t));
  return r !== void 0 && (await Be(r)) === void 0;
}
function dt(e, t, r) {
  let o = getMcpServerConfigCacheKey(e, t);
  if (ur().refusedCachedRows.has(o)) return;
  if ((ur().refusedCachedRows.add(o), r === "policy")) dropDiscoveryEntry(e, t).catch(() => {});
  Ft(
    {
      name: e,
      type: "failed",
      config: t,
      error: r === "policy" ? MCP_BLOCKED_BY_POLICY_MESSAGE : MCP_DISABLED_IN_MCP_MESSAGE,
      errorCode: r === "policy" ? "POLICY_BLOCKED" : "DISABLED",
    },
    !1,
  );
}
async function hasLiveConnection(e, t) {
  let r = getMcpServerConfigCacheKey(e, t),
    o = ur().connections.get(r);
  if (!o) return !1;
  if ((await Be(o))?.type !== "connected") return !1;
  return !jt().swrRefreshDialsInFlight.has(o);
}
async function evictStaleFailedConnectMemoForServe(e, t) {
  let r = getMcpServerConfigCacheKey(e, t),
    o = ur().connections.get(r);
  if (!o) return;
  let c = await Be(o);
  if (c === void 0 || c.type === "connected") return;
  if (ur().connections.get(r) === o) ur().connections.delete(r);
}
async function Be(e) {
  return withDeadline(
    e.catch(() => {
      return;
    }),
    0,
  );
}
async function peekSettledConnection(e, t) {
  let r = connectToServer.cache?.get?.(getMcpServerConfigCacheKey(e, t));
  return r === void 0 ? void 0 : Be(r);
}
function Nt(e) {
  if (
    (ur().connections.delete(e),
    ur().toolLists.delete(e),
    ur().resourceLists.delete(e),
    ur().resourceTemplateLists.delete(e),
    ur().commandLists.delete(e),
    isMcpSkillsEnabled())
  )
    qe.invalidateMcpSkillsForServer(e);
}
async function clearServerCache(e, t) {
  ensureDiscoveryCacheAccount();
  let r = getMcpServerConfigCacheKey(e, t),
    o = ur().connections.get(r);
  if (o) {
    let c = await Be(o);
    if (c === void 0) disposeServerConnectionDetached(e, t, o);
    else if (c.type === "connected") await detachAndCloseConnection(c);
    let d = ur().connections.get(r);
    if (d !== void 0 && d !== o) return;
  }
  Nt(r);
}
function detachAndCloseConnection(e) {
  if (((asMcpSdkClient(e.client).onclose = void 0), isDiscoveryCacheEnabled())) {
    let t = getMcpServerConfigCacheKey(e.name, e.config),
      r = connectToServer.cache?.get?.(t);
    if (r !== void 0)
      Be(r).then((o) => {
        if (o === e && connectToServer.cache?.get?.(t) === r) Nt(t);
      });
  }
  return e.cleanup().catch(() => {});
}
function disposeServerConnectionDetached(e, t, r) {
  ensureDiscoveryCacheAccount();
  let o = getMcpServerConfigCacheKey(e, t),
    c = ur().connections.get(o);
  if (r !== void 0 && c !== r) return;
  if (c) jt().supersededDials.add(c);
  if ((Nt(o), c))
    c.then(
      (d) => {
        if (d.type !== "connected") return;
        detachAndCloseConnection(d);
      },
      () => {},
    );
}
async function dropDiscoveryEntry(e, t) {
  (ensureDiscoveryCacheAccount(), await UIe(e, t));
}
async function discardMemoizedConnectResult(e, t) {
  let r = getMcpServerConfigCacheKey(e, t);
  if (!isDiscoveryCacheEnabled()) return (ur().connections.delete(r), !0);
  let o = ur().connections.get(r);
  if (o !== void 0) {
    let c = await Be(o);
    if (c === void 0 || c.type === "connected") return !1;
    if (ur().connections.get(r) !== o) return !1;
  }
  return (ur().connections.delete(r), !0);
}
function invalidateMcpResourceListCaches(e) {
  let t = getMcpServerConfigCacheKey(e.name, e.config);
  (ur().resourceLists.delete(t), ur().resourceTemplateLists.delete(t));
}
function onMcpElicitRequest(e, t) {
  asMcpSdkClient(e.client).setRequestHandler(ElicitRequestSchema, t);
}
function onMcpElicitationComplete(e, t) {
  asMcpSdkClient(e.client).setNotificationHandler(ElicitationCompleteNotificationSchema, (r) => t(r.params.elicitationId));
}
function onMcpToolListChanged(e, t) {
  asMcpSdkClient(e.client).setNotificationHandler(ToolListChangedNotificationSchema, t);
}
function onMcpPromptListChanged(e, t) {
  asMcpSdkClient(e.client).setNotificationHandler(PromptListChangedNotificationSchema, t);
}
function onMcpResourceListChanged(e, t) {
  asMcpSdkClient(e.client).setNotificationHandler(ResourceListChangedNotificationSchema, t);
}
function onMcpNotification(e, t, r) {
  asMcpSdkClient(e.client).setNotificationHandler(t, r);
}
async function ensureConnectedClient(e, t) {
  if (e.type === "connected" && e.config.type === "sdk") return e;
  if (isMcpServerBlockedAtConnectTime(e.name, e.config)) {
    if (e.type === "cached") dt(e.name, e.config, "policy");
    throw new R(
      `MCP server "${e.name}" is blocked by managed policy`,
      "MCP server blocked by policy",
    );
  }
  if (
    isDiscoveryCacheEnabled() &&
    isMcpServerDisabled(e.name) &&
    (await peekSettledConnection(e.name, e.config))?.type !== "connected"
  ) {
    if (e.type === "cached") dt(e.name, e.config, "disabled");
    throw new R(
      `MCP server "${e.name}" is disabled \u2014 re-enable it via /mcp to use its tools`,
      "MCP server disabled",
    );
  }
  let r = ir(),
    o = connectToServer(e.name, e.config);
  if (e.type === "cached")
    o.then(
      (d) => runCachedFirstDialArms(d, o, r),
      () => {},
    );
  let c = await boundDial(o, {
    signal: t?.signal,
    timeoutMs: t?.timeoutMs,
    serverName: e.name,
    context: t?.context ?? "MCP connection",
  });
  if (c.type !== "connected") {
    if (c.type === "needs-auth")
      throw Object.assign(
        new R(
          `MCP server "${e.name}" needs authentication`,
          "MCP server needs authentication",
        ),
        { mcpErrorSource: "user_auth" },
      );
    let d = c.type === "failed" ? c.errorCode : void 0;
    throw Object.assign(
      new R(
        `MCP server "${e.name}" is not connected${isDiscoveryCacheEnabled() && c.type === "failed" && c.error ? `: ${sanitizeDisplayText(c.error)}` : ""}`,
        "MCP server not connected",
      ),
      {
        mcpErrorSource: classifyMcpErrorSource(
          Object.assign(Error("MCP dial failed"), {
            code: d !== void 0 && /^-?\d+$/.test(d) ? Number(d) : d,
          }),
        ),
      },
    );
  }
  return c;
}
function je(e, t, r) {
  let o = connectToServer.cache;
  if (!o?.get) return !1;
  return o.get(getMcpServerConfigCacheKey(t, r)) !== e;
}
function isDialDisposed(e) {
  return jt().supersededDials.has(e);
}
function runCachedFirstDialArms(e, t, r) {
  let o = jt().cachedFirstDialArmsRan;
  if (o.has(e)) return;
  o.add(e);
  let c = getMcpServerConfigCacheKey(e.name, e.config),
    d = ur().connections.get(c),
    p = ir() !== r,
    _ = d === void 0 && p;
  if (isDialDisposed(t) || (d !== void 0 && d !== t) || _) {
    if (!isDialDisposed(t) && p && e.type === "connected") detachAndCloseConnection(e);
    return;
  }
  if (e.type === "connected" || e.type === "needs-auth") {
    At(e.name, e.config);
    return;
  }
  if ((ur().connections.delete(c), e.type === "failed"))
    Ft(e, !jt().swrRefreshDialsInFlight.has(t));
}
function areMcpConfigsEqual(e, t) {
  return hashMcpServerConfig(e) === hashMcpServerConfig(t);
}
var Ko = [
  "invalid_request",
  "invalid_client",
  "invalid_grant",
  "unauthorized_client",
  "access_denied",
  "unsupported_grant_type",
  "invalid_scope",
  "server_error",
  "temporarily_unavailable",
  "ENDPOINT_NOT_FOUND",
  "AUTH_HEADER_REJECTED",
  "HEADERS_HELPER_AUTH_REJECTED",
  "CONNECT_TIMEOUT",
  "ISSUER_ECHO_DENIED",
  "CLAUDEAI_BEARER_REJECTED",
  "CLI_OWNED_BEARER_REJECTED",
  "FIRST_PARTY_AUTH_REJECTED",
  "INVALID_CONFIG",
  "UNCONFIGURED",
  "ENOENT",
  "EACCES",
  "EPERM",
  "EADDRINUSE",
  "ERR_INVALID_URL",
  "ABORT_ERR",
  "UNKNOWN_CERTIFICATE_VERIFICATION_ERROR",
  "NOT_CONNECTED",
  "ALREADY_CONNECTED",
  "NOT_INITIALIZED",
  "CAPABILITY_NOT_SUPPORTED",
  "REQUEST_TIMEOUT",
  "CONNECTION_CLOSED",
  "SEND_FAILED",
  "INVALID_RESULT",
  "UNSUPPORTED_RESULT_TYPE",
  "INPUT_REQUIRED_ROUNDS_EXCEEDED",
  "LIST_PAGINATION_EXCEEDED",
  "METHOD_NOT_SUPPORTED_BY_PROTOCOL_VERSION",
  "ERA_NEGOTIATION_FAILED",
  "CLIENT_HTTP_NOT_IMPLEMENTED",
  "CLIENT_HTTP_AUTHENTICATION",
  "CLIENT_HTTP_FORBIDDEN",
  "CLIENT_HTTP_UNEXPECTED_CONTENT",
  "CLIENT_HTTP_FAILED_TO_OPEN_STREAM",
  "CLIENT_HTTP_FAILED_TO_TERMINATE_SESSION",
];
function sanitizeConnectErrorCodeForTelemetry(e) {
  if (e === void 0) return S("missing");
  if (/^-?\d+$/.test(e)) return fromNumber(Number(e));
  let t = Ko.find((r) => r === e);
  if (t !== void 0) return fromEnum(t);
  return mTt(e) ?? S("other");
}
var br = {
  [ErrorCode.ConnectionClosed]: "connection_closed",
  [ErrorCode.RequestTimeout]: "request_timeout",
  [CCR_NEEDS_APPROVAL_ERROR_CODE]: "ccr_needs_approval",
  [ErrorCode.ParseError]: "parse_error",
  [ErrorCode.InvalidRequest]: "invalid_request",
  [ErrorCode.MethodNotFound]: "method_not_found",
  [ErrorCode.InvalidParams]: "invalid_params",
  [ErrorCode.InternalError]: "internal_error",
};
function mcpToolInputToAutoClassifierInput(e, t) {
  let r = Object.keys(e);
  if (r.length === 0) return t;
  return r
    .map((o) => {
      let c = e[o],
        d = typeof c === "object" && c !== null ? JSON.stringify(c) : String(c);
      return `${o}=${d}`;
    })
    .join(" ");
}
function kr(e) {
  let t = jt().droppedToolsSeqByConnection,
    r = t.get(e) ?? { started: 0, applied: 0 };
  return (t.set(e, r), (r.started += 1), { seq: r.started, state: r });
}
function getToolsListErrorForResult(e) {
  return jt().toolsListErrorByResult.get(e);
}
function getDiscoveryFetchError(e) {
  return jt().discoveryFetchErrors.get(e);
}
function Ar() {
  ensureDiscoveryCacheAccount();
  let e = y7();
  return isAccountTokenUnresolved(e) ? void 0 : e.token;
}
function seedMcpIdentityCheck() {
  let e = jt();
  if (e.identitySeedAttempted) return;
  e.identitySeedAttempted = !0;
  let t = Ar();
  if (t !== void 0) e.identityBaseline = t;
}
function mcpIdentityChangedSinceLastCheck() {
  let e = Ar(),
    t = jt();
  if (e === void 0) return ((t.identityBaseline = void 0), !0);
  if (t.identityBaseline === void 0) return ((t.identityBaseline = e), !0);
  if (t.identityBaseline === e) return !1;
  return ((t.identityBaseline = e), !0);
}
function recordRawToolsForResult(e, t) {
  if (!isDiscoveryCacheEnabled()) return;
  let r = jt();
  (r.rawToolsByResult.set(e, t), r.rawFetchedAtByResult.set(e, Date.now()));
}
function recordRawCommandsForResult(e, t) {
  if (!isDiscoveryCacheEnabled()) return;
  let r = jt();
  (r.rawCommandsByResult.set(e, t), r.rawFetchedAtByResult.set(e, Date.now()));
}
function recordRawResourcesForResult(e, t) {
  if (!isDiscoveryCacheEnabled()) return;
  let r = jt();
  (r.rawResourcesByResult.set(e, t), r.rawFetchedAtByResult.set(e, Date.now()));
}
function recordDiscoveryFetchErrorForResult(e, t) {
  jt().discoveryFetchErrors.set(e, t);
}
function applyCapabilityServeTimeMiss(e) {
  if (e.kind !== "fresh" && e.kind !== "stale") return e;
  let t = e.entry.capabilities;
  if (isMcpSkillsCapable(t)) return { kind: "miss", reason: "skills-capable" };
  if (hasChannelCapability(t)) return { kind: "miss", reason: "channel-capable" };
  return e;
}
async function persistRawDiscoveryIfComplete(e, t) {
  ensureDiscoveryCacheAccount();
  let r = jt();
  if (r.persistedDiscoveryRounds.has(t.tools)) return !0;
  if (!mE(t.identityEpoch)) return !0;
  let o = r.rawToolsByResult.get(t.tools),
    c = r.rawCommandsByResult.get(t.commands),
    d = r.rawResourcesByResult.get(t.resources);
  if (o === void 0 || c === void 0 || d === void 0 || t.templates === void 0)
    return !1;
  let p = Math.min(
    r.rawFetchedAtByResult.get(t.tools) ?? Number.POSITIVE_INFINITY,
    r.rawFetchedAtByResult.get(t.commands) ?? Number.POSITIVE_INFINITY,
    r.rawFetchedAtByResult.get(t.resources) ?? Number.POSITIVE_INFINITY,
  );
  if (!Number.isFinite(p)) return !0;
  let _ = p,
    T = [t.tools, t.commands, t.resources].map((A) => [
      A,
      r.rawFetchedAtByResult.get(A),
    ]);
  (r.rawToolsByResult.delete(t.tools),
    r.rawCommandsByResult.delete(t.commands),
    r.rawResourcesByResult.delete(t.resources),
    r.rawFetchedAtByResult.delete(t.tools),
    r.rawFetchedAtByResult.delete(t.commands),
    r.rawFetchedAtByResult.delete(t.resources),
    r.persistedDiscoveryRounds.add(t.tools));
  let h = await Ict(
    e.name,
    e.config,
    {
      ...(e.serverInfo && {
        serverInfo: { name: e.serverInfo.name, version: e.serverInfo.version },
      }),
      ...(e.protocolEra !== void 0 && { negotiatedEra: e.protocolEra }),
      capabilities: e.capabilities,
      tools: o,
      commands: c,
      resources: d,
      templates: t.templates.map(({ server: A, ...L }) => L),
    },
    { identityEpoch: t.identityEpoch, grantLeg: t.grantLeg, now: _ },
  );
  if (h === "terminal") return (r.persistedDiscoveryRounds.delete(t.tools), !1);
  if (h === "transient") {
    (r.rawToolsByResult.set(t.tools, o),
      r.rawCommandsByResult.set(t.commands, c),
      r.rawResourcesByResult.set(t.resources, d));
    for (let [A, L] of T) if (L !== void 0) r.rawFetchedAtByResult.set(A, L);
    r.persistedDiscoveryRounds.delete(t.tools);
  }
  return !0;
}
async function persistRefreshedToolsIfPresent(e, t, r) {
  if ((ensureDiscoveryCacheAccount(), !mE(r.identityEpoch))) return;
  let o = jt(),
    c = o.rawToolsByResult.get(t),
    d = o.rawFetchedAtByResult.get(t);
  if (c === void 0 || d === void 0) return;
  await Pct(e.name, e.config, c, {
    identityEpoch: r.identityEpoch,
    grantLeg: r.grantLeg,
    fetchedAt: d,
  });
}
async function persistLiveListing(e, t) {
  if (!isDiscoveryCacheEnabled() || !S7(e.config) || isMcpServerDisabled(e.name) || isMcpServerBlockedAtConnectTime(e.name, e.config)) return;
  try {
    let r = !!e.capabilities?.resources;
    if (!r) recordRawResourcesForResult(t.resources, []);
    let o = r ? await fetchResourceTemplatesForClient(e) : [];
    if (
      (await peekSettledConnection(e.name, e.config)) !== e ||
      isMcpServerDisabled(e.name) ||
      isMcpServerBlockedAtConnectTime(e.name, e.config)
    )
      return;
    await persistRawDiscoveryIfComplete(e, { ...t, templates: getDiscoveryFetchError(o) === void 0 ? o : void 0 });
  } catch (r) {
    logMCPDebug(e.name, `Discovery cache write-through skipped: ${l(r)}`);
  }
}
function isCacheOutcomeMiss(e) {
  switch (e.reason) {
    case "absent":
    case "expired":
    case "corrupt":
    case "strike-threshold":
    case "no-fingerprint":
    case "unsealed":
      return !0;
    case "disabled":
    case "key-unavailable":
    case "transport":
    case "live-connection":
    case "skills-capable":
    case "channel-capable":
      return !1;
    default:
      return e.reason;
  }
}
function discoverySourceForMiss(e) {
  if (e.kind !== "miss") return "live";
  switch (e.reason) {
    case "disabled":
      return "miss_disabled";
    case "key-unavailable":
      return "miss_disabled";
    case "unsealed":
      return "miss_corrupt";
    case "transport":
      return "live";
    case "absent":
      return "live";
    case "expired":
      return "miss_expired";
    case "corrupt":
      return "miss_corrupt";
    case "strike-threshold":
      return "miss_strike";
    case "no-fingerprint":
      return "miss_no_fingerprint";
    case "live-connection":
      return "live";
    case "skills-capable":
      return "live";
    case "channel-capable":
      return "live";
    default:
      return e.reason;
  }
}
function hydrateToolsFromListing(e, t, r, o, c) {
  let d = sanitizeDeep(t),
    p = getMcpServerBaseUrl(e.config),
    _ = Le(e.config, e.name),
    T = mcpNameForAnalytics_GATE_EVALUATED(normalizeMcpName(e.name), oy(e.name, e.config));
  if (d.length === 0 && o === "live")
    logEvent("tengu_mcp_degraded", {
      reason: S("connected_zero_tools"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      mcpServerName: T,
      ..._,
    });
  let h = e.config.type === "sdk" && a.CLAUDE_AGENT_SDK_MCP_NO_PREFIX,
    A =
      e.config.type === "claudeai-proxy" ||
      e.config.type === "http" ||
      e.config.type === "sse"
        ? e.config.toolPermissions
        : void 0;
  if (A) {
    let k = Object.keys(A).length;
    if (k > 0 && !d.some((ae) => A[ae.name] !== void 0))
      n(
        `[claudeai-mcp] ${e.name}: toolPermissions has ${k} entries but none matched upstream tool names \u2014 backend name drift?`,
        { level: "warn" },
      );
  }
  let L = isSchemaNormalizeEnabledFor(e.config),
    W = isSchemaApiValidateEnabledFor(e.config),
    I = 0,
    D = 0,
    j = 0,
    ee = 0,
    X = 0,
    me = [],
    V = 0,
    ie = 0,
    C = d.flatMap((k) => {
      let ae = uct(k.inputSchema),
        de;
      if (ae.outcome === "unchanged") de = k;
      else if (ae.outcome === "normalized" && L) {
        (I++,
          logMCPDebug(
            e.name,
            `Normalized input schema for tool "${k.name}" (flattened top-level ${ae.combinators.join("/")})`,
          ));
        let ve = k.description
          ? `${ae.note}

${k.description}`
          : ae.note;
        de = { ...k, inputSchema: ae.schema, description: ve };
      } else {
        if (ae.outcome === "normalized") D++;
        else j++;
        let ve =
          ae.outcome === "drop"
            ? ae.reason
            : `its input schema uses top-level ${ae.combinators.join("/")}, which the Anthropic API does not accept`;
        return (
          logMCPError(
            e.name,
            `Skipping tool "${k.name}": ${ve}. Other tools from this server remain available.`,
          ),
          []
        );
      }
      let se = dct(de.inputSchema);
      if (se.valid) return [de];
      if (!W) {
        if (se.check === "meta") V++;
        else ie++;
        return (
          logMCPDebug(
            e.name,
            `Tool "${k.name}" input schema would be rejected by the Anthropic API (${se.detail}); requests that include it may fail`,
          ),
          [de]
        );
      }
      if (se.check === "meta") ee++;
      else X++;
      if (A?.[k.name] !== "blocked" && vr(h ? k.name : rc(e.name, k.name)))
        me.push({ toolName: k.name, reason: se.detail });
      return (
        logMCPError(
          e.name,
          `Skipping tool "${k.name}": its input schema would be rejected by the Anthropic API (${se.detail}). Other tools from this server remain available.`,
        ),
        []
      );
    });
  if (c.seq > c.state.applied)
    ((c.state.applied = c.seq), (e.droppedTools = me));
  if (I > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_schema_normalized"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      normalizedCount: I,
      mcpServerName: T,
      ..._,
    });
  if (D > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_schema_normalize_gated"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      skippedCount: D,
      mcpServerName: T,
      ..._,
    });
  if (j > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_schema_unsupported"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      skippedCount: j,
      mcpServerName: T,
      ..._,
    });
  if (ee > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_schema_invalid"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      skippedCount: ee,
      mcpServerName: T,
      ..._,
    });
  if (X > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_property_key_invalid"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      skippedCount: X,
      mcpServerName: T,
      ..._,
    });
  if (V > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_schema_invalid_gated"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      keptCount: V,
      mcpServerName: T,
      ..._,
    });
  if (ie > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_property_key_invalid_gated"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      keptCount: ie,
      mcpServerName: T,
      ..._,
    });
  let E = () => oy(e.name, e.config);
  logMcpToolCallXmlInDescriptions(C, e.name, E(), p, e.instructions);
  let F = isFirstPartyDesignServerConfig(e.config),
    U = getOfficialPluginPromptOverrides(e.config),
    ne = e.config.pluginSource ? buildPluginTelemetryFieldsFromId(e.config.pluginSource, getPolicyPluginNames()) : void 0,
    Y = rS(e.config),
    fe = C.map((k) => {
      let ae = rc(e.name, k.name),
        de = k._meta?.["anthropic/maxResultSizeChars"],
        se = typeof de === "number" && Number.isFinite(de) && de > 0,
        ve = k._meta?.["anthropic/requiresUserInteraction"] === !0,
        ke = U?.tools?.[k.name] ?? k.description ?? "",
        De = yr(ke, `Tool "${k.name}" description`, e.name),
        Te =
          U?.search_hints?.[k.name] ??
          (typeof k._meta?.["anthropic/searchHint"] === "string"
            ? k._meta["anthropic/searchHint"]
            : void 0),
        Q = {
          ...MCP_TOOL_BASE,
          name: h ? k.name : ae,
          mcpInfo: {
            serverName: e.name,
            scope: e.config.scope,
            serverType: e.config.type ?? "stdio",
            ...(ne && { pluginTelemetry: ne }),
            displayName:
              "displayName" in e.config ? e.config.displayName : void 0,
            iconUrl: "iconUrl" in e.config ? e.config.iconUrl : void 0,
            serverInfoName: normalizeComparableText(e.serverInfo?.name ?? "") || void 0,
            ...(Y && { cliOwned: !0 }),
            toolName: k.name,
            title: k.annotations?.title?.replace(/\s+/g, " ").trim() || void 0,
            execution: k.execution,
            role: "role" in e.config ? e.config.role : void 0,
            effectiveMaxPermission: A?.[k.name],
          },
          isMcp: !0,
          searchHint: Te?.replace(/\s+/g, " ").trim() || void 0,
          alwaysLoad:
            e.config.alwaysLoad === !0 ||
            k._meta?.["anthropic/alwaysLoad"] === !0,
          async description() {
            return ke;
          },
          async prompt() {
            return De;
          },
          isConcurrencySafe() {
            return k.annotations?.readOnlyHint ?? !1;
          },
          isReadOnly() {
            return k.annotations?.readOnlyHint ?? !1;
          },
          readOnlyHint: k.annotations?.readOnlyHint,
          toAutoClassifierInput(z) {
            return mcpToolInputToAutoClassifierInput(z, k.name);
          },
          isDestructive() {
            return k.annotations?.destructiveHint ?? !1;
          },
          isOpenWorld() {
            return k.annotations?.openWorldHint ?? !1;
          },
          requiresUserInteraction() {
            return ve;
          },
          suppressesAlwaysAllowRule: () => ve || suppressDesignWriteAddRules(F, k.name),
          maxResultSizeChars: se ? Math.min(de, uBe) : MCP_TOOL_BASE.maxResultSizeChars,
          persistenceThresholdCeiling: se ? uBe : void 0,
          inputJSONSchema: applyParamDescriptions(k.inputSchema, U?.param_descriptions?.[k.name]),
          async checkPermissions(z, B) {
            let ye = denyTokenlessFirstPartyDesignWrite(F, k.name, z);
            if (ye) return ye;
            if (F) {
              let Ee = getDesignConsentProvider(),
                le =
                  (await Ee?.wouldNeedDesignConsent(
                    B.toolState.get(DesignSessionState),
                    B.credentials,
                  )) ?? null;
              if (le !== null && Ee && B.toolUseId) {
                let ue = recordFirstPartyDesignConsentAsk(B.toolUseId, le, consentAskCanReachUser(B));
                return buildFirstPartyDesignConsentAsk(Ee.consentPromptFor(le), z, ue);
              }
            }
            if (ve)
              return {
                behavior: "ask",
                message: "MCPTool requires permission.",
                suggestions: [],
                suppressAlwaysAllowRule: !0,
              };
            return {
              behavior: "passthrough",
              message: "MCPTool requires permission.",
              suggestions: suppressDesignWriteAddRules(F, k.name)
                ? []
                : [
                    {
                      type: "addRules",
                      rules: [{ toolName: ae, ruleContent: void 0 }],
                      behavior: "allow",
                      destination: "localSettings",
                    },
                  ],
            };
          },
          async call(z, B, ye, Ee, le) {
            let ue = ln(Ee),
              re = ue ? { "claudecode/toolUseId": ue } : {},
              be = !1;
            function Ae(we) {
              if (!le || !ue || be) return;
              le({ type: "progress", toolUseID: ue, data: we });
            }
            Ae({
              type: "mcp_progress",
              status: "started",
              serverName: e.name,
              toolName: k.name,
            });
            let Fe = Date.now(),
              w = e,
              O = !1,
              N =
                typeof z.__consentNonce === "string"
                  ? z.__consentNonce
                  : void 0;
            if ("__consentNonce" in z) {
              let { __consentNonce: we, ...xe } = z;
              z = xe;
            }
            let te = F ? takeFirstPartyDesignConsentAsk(ue, N) : null;
            if (F) withdrawForSharingWideningDesignMcpOp(B.toolState.get(DesignSessionState), F, k.name, z);
            let Se = async (we) => {
                for (let Me = 0; ; Me++)
                  try {
                    let _e = await ensureConnectedClient(e, { context: "MCP tool call" });
                    w = _e;
                    let Re = await callMCPToolWithUrlElicitationRetry({
                      client: _e,
                      clientConnection: e,
                      tool: k.name,
                      args: z,
                      meta: re,
                      signal: we,
                      imageLimits: getImageLimitsForModel(B.options.mainLoopModel),
                      toolExecution: k.execution,
                      taskRegistry: B.taskRegistry,
                      toolUseId: ue,
                      onProgress: le && ue ? Ae : void 0,
                      requestDialog: B.requestDialog,
                      storageV5: B.storageV5,
                      credentials: B.credentials,
                      hasResultSizeAnnotation: se,
                      onAwaitingUserInput: (tt) => {
                        O = tt;
                      },
                      ccrNeedsApprovalRetry:
                        "url" in e.config &&
                        UR(e.config.url) &&
                        ccrRetroactiveAskCanPrompt(B) &&
                        !(yB() && yB() !== "stdio")
                          ? {
                              canUseTool: ye,
                              tool: Q,
                              fullyQualifiedName: ae,
                              toolUseContext: B,
                              parentMessage: Ee,
                            }
                          : void 0,
                    });
                    if (Re.interrupted) throw new Ve(TOOL_CALL_INTERRUPTED_MESSAGE);
                    if (
                      (Ae({
                        type: "mcp_progress",
                        status: "completed",
                        serverName: e.name,
                        toolName: k.name,
                        elapsedTimeMs: Date.now() - Fe,
                      }),
                      !Re.isError)
                    )
                      act(k.name);
                    if (Me > 0) logFeatureOk("mcp_session_recovery");
                    let Ue = stripReservedMetaKeys(Re._meta);
                    return {
                      data: Re.content,
                      ...(Re.urlElicitationDeclined && {
                        urlElicitationDeclined: Re.urlElicitationDeclined,
                      }),
                      ...((Ue || Re.structuredContent || Re.resourceLinks) && {
                        mcpMeta: {
                          ...(Ue && { _meta: Ue }),
                          ...(Re.structuredContent && {
                            structuredContent: Re.structuredContent,
                          }),
                          ...(Re.resourceLinks && {
                            resourceLinks: Re.resourceLinks,
                          }),
                        },
                      }),
                    };
                  } catch (_e) {
                    if (_e instanceof McpSessionExpiredError && Me < 1) {
                      (logFeatureSad("mcp_session_recovery", _e.expiryKind),
                        logMCPDebug(
                          e.name,
                          `Retrying tool '${k.name}' after session recovery`,
                        ));
                      continue;
                    }
                    if (_e instanceof McpSessionExpiredError)
                      logFeatureBad("mcp_session_recovery", "session_retry_exhausted");
                    else if (Me > 0 && !we.aborted)
                      logFeatureBad("mcp_session_recovery", "retry_failed_other");
                    if (
                      (Ae({
                        type: "mcp_progress",
                        status: "failed",
                        serverName: e.name,
                        toolName: k.name,
                        elapsedTimeMs: Date.now() - Fe,
                      }),
                      !we.aborted)
                    )
                      recordReplyDegradedState(e.name, _e);
                    if (_e instanceof Error && !(_e instanceof R)) {
                      let Re = _e.constructor.name,
                        Ue = () => (we.aborted ? "other" : classifyMcpErrorSource(_e));
                      if (Re === "Error") {
                        let tt = formatConnectionError(_e, e.config);
                        throw Object.assign(new R(tt, tt.slice(0, 200)), {
                          mcpErrorSource: Ue(),
                        });
                      }
                      if (
                        Re === "McpError" &&
                        "code" in _e &&
                        typeof _e.code === "number"
                      )
                        throw Object.assign(
                          new R(_e.message, `McpError ${_e.code}`),
                          { mcpErrorSource: Ue() },
                        );
                    }
                    throw _e;
                  }
              },
              Pe = Se;
            if (F)
              Pe = withFirstPartyDesignConsentIntercept(Se, {
                designSession: B.toolState.get(DesignSessionState),
                approvedConsentBit: te?.bit ?? null,
                consentAskReachesUser: (te?.askReachesUser ?? !1) && consentAskCanReachUser(B),
                credentials: B.credentials,
              });
            if (Tt && !B.agentId && B.taskRegistry !== noopTaskRegistry && Q.name !== yB()) {
              let we = Tt.getMcpAutoBackgroundMs(e.config, {
                isNonInteractiveSession: B.options.isNonInteractiveSession,
              });
              if (we > 0)
                return Tt.callMcpToolWithAutoBackground({
                  run: Pe,
                  serverName: e.name,
                  toolName: k.name,
                  toolUseId: ue,
                  parentAbortController: B.abortController,
                  taskRegistry: B.taskRegistry,
                  autoBackgroundMs: we,
                  storageV5: B.storageV5,
                  credentials: B.credentials,
                  hasPendingElicitation: () =>
                    O ||
                    ((w.type === "connected"
                      ? w.transportErrorState?.pendingElicitations
                      : void 0) ?? 0) > 0,
                  onBackgrounded: () => {
                    be = !0;
                  },
                });
            }
            return Pe(B.abortController.signal);
          },
          userFacingName() {
            let z = (k.annotations?.title || k.name)
              .replace(/\s+/g, " ")
              .trim();
            return `${e.name} - ${z} (MCP)`;
          },
          ...(isClaudeInChromeMCPServer(e.name) &&
            ZN(e.config) && {
              ...eo().getClaudeInChromeMCPToolOverrides(k.name),
              builtinRenderFamily: "claude-in-chrome",
            }),
          ...(ZN(e.config) &&
            lq(e.name) && {
              ...to().getComputerUseMCPToolOverrides(k.name),
              builtinRenderFamily: "computer-use",
            }),
          ...(e.config.type === "sdk" && isClaudeBrowserMcpServerName(e.name)
            ? createHostHandledConsentPermissions(e.name, k.name)
            : {}),
          ...(isSlackSendTool(k.name) ? createSlackSendUiDescriptor() : {}),
        };
      if (
        isClaudeInChromeMCPServer(e.name) &&
        (k.name === "file_upload" || k.name === "browser_batch")
      ) {
        let z =
            !ZN(e.config) && !a.CLAUDE_CODE_REMOTE && a.CLAUDE_CODE_IS_COWORK,
          B = Q.call;
        Q.call = async (ye, Ee, le, ue, re) => {
          let {
              passThroughChromeFileUploadInput: be,
              prepareChromeFileUploadInput: Ae,
            } = await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
            Fe = z
              ? await be(k.name, ye ?? {}, getToolPermissionContext(Ee))
              : await Ae(k.name, ye ?? {}, getToolPermissionContext(Ee));
          if (Fe.error)
            throw new R(Fe.error, "Claude in Chrome file_upload path rejected");
          return B(Fe.input ?? ye, Ee, le, ue, re);
        };
      }
      if (isClaudeInChromeMCPServer(e.name) && e.config.type !== "sdk") {
        let z = Q.call;
        Q.call = async (B, ye, Ee, le, ue) => {
          let re = getPolicyDeniedReason(
            "allow_claude_browser_extension",
            "Claude in Chrome",
            "is",
          );
          if (re !== null)
            throw new R(re, "Claude in Chrome call refused by org policy");
          return z(B, ye, Ee, le, ue);
        };
      }
      let Ce = Q.call;
      return (
        (Q.call = async (z, B, ye, Ee, le) => {
          if (
            ((B.options.activeMcpServer = e.name),
            (B.options.activeMcpTool = k.name),
            e.config.pluginSource)
          )
            (recordPluginUsage(e.config.pluginSource),
              recordPluginActivity(e.config.pluginSource, "mcp", {
                kind: "mcp-server",
                name: e.name,
              }));
          let ue = E();
          if (ue) registerLoggableMcpServer(e.name);
          return Ce(
            stripTrailingInvokeSuffixFromArgs(
              z,
              k.name,
              e.name,
              ue,
              H("tengu_mcp_strip_trailing_xml_tags", !1),
              p,
            ),
            B,
            ye,
            Ee,
            le,
          );
        }),
        Q
      );
    }).filter(Oo);
  if (
    (logEvent("tengu_mcp_tools_listed", {
      transportType: fromEnum(e.config.type ?? "stdio"),
      listDurationMs: Date.now() - r,
      toolCount: fe.length,
      alwaysLoadCount: countMatching(fe, (k) => k.alwaysLoad === !0),
      discoverySource: fromEnum(o),
      ..._,
      mcpServerName: mcpNameForAnalytics_GATE_EVALUATED(normalizeMcpName(e.name), oy(e.name, e.config)),
    }),
    o === "live")
  )
    logFeatureOk("mcp_list_tools");
  if (ZN(e.config) && isClaudeInChromeMCPServer(e.name)) logChromeToolsAdded(fe.length, o);
  return fe;
}
var fetchToolsForClient = h7(
  async (e, t) => {
    if (e.type !== "connected") return [];
    let r = ir(),
      o = kr(e);
    try {
      if (!e.capabilities?.tools) {
        let _ = [];
        return (recordRawToolsForResult(_, []), _);
      }
      let c = Date.now(),
        d = await mt(
          asMcpSdkClient(e.client),
          e.name,
          e.config,
          "tools/list",
          ListToolsResultSchema,
          (_) => _.tools,
        );
      ((e.toolsListError = void 0), (e.discoveryAuthFailure = void 0));
      let p = hydrateToolsFromListing(e, d, c, "live", o);
      return (recordRawToolsForResult(p, d), p);
    } catch (c) {
      let d = formatConnectionError(c, e.config);
      if (e.config.type === "claudeai-proxy" && isListAuthError(c)) {
        if (
          (logEvent("tengu_mcp_server_needs_auth", {
            transportType: S("claudeai-proxy"),
            cause: S("discovery_tools_list"),
            ...Le(e.config, e.name),
          }),
          mE(r))
        )
          Lt(e.name, e.config.id, void 0, t);
        return (
          logFeatureSad("mcp_list_tools", "mcp_list_tools_needs_auth"),
          logMCPDebug(
            e.name,
            "tools/list 401/403 on claude.ai proxy \u2014 flagging needs-auth",
          ),
          (e.discoveryAuthFailure = !0),
          ur().toolLists.delete(getMcpServerConfigCacheKey(e.name, e.config)),
          []
        );
      }
      let p = e.config.type === "claudeai-proxy" && isClaudeAiBearerRejectedError(c),
        _ = p
          ? "mcp_list_tools_claudeai_bearer_rejected"
          : c instanceof McpError
            ? `mcp_list_tools_${br[c.code] ?? "mcperr_other"}`
            : d.includes("timed out")
              ? "mcp_list_tools_timeout"
              : "mcp_list_tools_failed";
      if (
        (logFeatureSad("mcp_list_tools", _),
        (p ? logMCPDebug : logMCPError)(e.name, `Failed to fetch tools: ${d}`),
        (e.toolsListError = d),
        p)
      )
        e.discoveryBearerRejected = !0;
      let h = [];
      if ((jt().toolsListErrorByResult.set(h, d), !p)) {
        let A = Le(e.config, e.name);
        logEvent("tengu_mcp_degraded", {
          reason: S("tools_list_failed"),
          transportType: fromEnum(e.config.type ?? "stdio"),
          ...A,
          mcpServerName: mcpNameForAnalytics_GATE_EVALUATED(normalizeMcpName(e.name), oy(e.name, e.config)),
        });
      }
      return (ur().toolLists.delete(getMcpServerConfigCacheKey(e.name, e.config)), h);
    }
  },
  (e) => getMcpServerConfigCacheKey(e.name, e.config),
  () => ur().toolLists,
);
function Dr(e, t, r, o, c, d) {
  let p = formatConnectionError(t, e.config),
    _ = e.config.type === "claudeai-proxy" && isListAuthError(t),
    T = e.config.type === "claudeai-proxy" && isClaudeAiBearerRejectedError(t);
  if (T) e.discoveryBearerRejected = !0;
  let h = _
    ? `${r}_needs_auth`
    : T
      ? `${r}_claudeai_bearer_rejected`
      : t instanceof McpError
        ? `${r}_${br[t.code] ?? "mcperr_other"}`
        : p.includes("timed out")
          ? `${r}_timeout`
          : `${r}_failed`;
  if ((o(h), (_ || T ? logMCPDebug : logMCPError)(e.name, `Failed to fetch ${d}: ${p}`), !_ && !T))
    logEvent("tengu_mcp_degraded", {
      reason: c,
      transportType: fromEnum(e.config.type ?? "stdio"),
      ...Le(e.config, e.name),
      mcpServerName: mcpNameForAnalytics_GATE_EVALUATED(normalizeMcpName(e.name), oy(e.name, e.config)),
    });
}
var fetchResourcesForClient = h7(
    async (e) => {
      if (e.type !== "connected") return [];
      try {
        if (!e.capabilities?.resources) {
          let o = [];
          return (recordRawResourcesForResult(o, []), o);
        }
        let t = await mt(
          asMcpSdkClient(e.client),
          e.name,
          e.config,
          "resources/list",
          ListResourcesResultSchema,
          (o) => o.resources,
        );
        logFeatureOk("mcp_list_resources");
        let r = t.map((o) => ({ ...o, server: e.name }));
        return (recordRawResourcesForResult(r, t), r);
      } catch (t) {
        (Dr(
          e,
          t,
          "mcp_list_resources",
          (o) => logFeatureSad("mcp_list_resources", o),
          S("resources_list_failed"),
          "resources",
        ),
          ur().resourceLists.delete(getMcpServerConfigCacheKey(e.name, e.config)));
        let r = [];
        if (t instanceof McpError && t.code === ErrorCode.MethodNotFound) recordRawResourcesForResult(r, []);
        else jt().discoveryFetchErrors.set(r, ge(t));
        return r;
      }
    },
    (e) => getMcpServerConfigCacheKey(e.name, e.config),
    () => ur().resourceLists,
  ),
  fetchResourceTemplatesForClient = h7(
    async (e) => {
      if (e.type !== "connected") return [];
      try {
        if (!e.capabilities?.resources) return [];
        let t = await mt(
          asMcpSdkClient(e.client),
          e.name,
          e.config,
          "resources/templates/list",
          ListResourceTemplatesResultSchema,
          (r) => r.resourceTemplates,
        );
        return (
          logEvent("tengu_mcp_resource_templates_fetched", {
            template_count: t.length,
          }),
          logFeatureOk("mcp_list_resource_templates"),
          t.map((r) => ({ ...r, server: e.name }))
        );
      } catch (t) {
        (ur().resourceTemplateLists.delete(getMcpServerConfigCacheKey(e.name, e.config)),
          logMCPDebug(e.name, `Failed to fetch resource templates: ${formatConnectionError(t, e.config)}`));
        let r = [];
        if (!(t instanceof McpError && t.code === ErrorCode.MethodNotFound))
          jt().discoveryFetchErrors.set(r, ge(t));
        return r;
      }
    },
    (e) => getMcpServerConfigCacheKey(e.name, e.config),
    () => ur().resourceTemplateLists,
  );
function refreshResourceTemplates(e, t) {
  let r = [];
  for (let o of e) {
    if (o.type !== "connected") continue;
    if (o.name in t) continue;
    r.push(fetchResourceTemplatesForClient(o).then((c) => ({ client: o, templates: c })));
  }
  return Promise.all(r);
}
async function completeResourceTemplate(e, t, r, o, c) {
  if (!e.capabilities?.completions) return [];
  try {
    let d = await asMcpSdkClient(e.client).complete({
      ref: { type: "ref/resource", uri: t },
      argument: { name: r, value: o },
      context: Object.keys(c).length > 0 ? { arguments: c } : void 0,
    });
    return (logFeatureOk("mcp_complete_resource_template"), d.completion.values);
  } catch (d) {
    return (
      logFeatureBad(
        "mcp_complete_resource_template",
        "mcp_complete_resource_template_failed",
      ),
      logMCPDebug(e.name, `Failed to complete resource template: ${formatConnectionError(d, e.config)}`),
      []
    );
  }
}
var fetchCommandsForClient = h7(
  async (e) => {
    if (e.type !== "connected") return [];
    try {
      if (!e.capabilities?.prompts) {
        let o = [];
        return (recordRawCommandsForResult(o, []), o);
      }
      let t = await mt(
        asMcpSdkClient(e.client),
        e.name,
        e.config,
        "prompts/list",
        ListPromptsResultSchema,
        (o) => o.prompts,
      );
      logFeatureOk("mcp_list_prompts");
      let r = hydrateCommandsFromListing(e, t);
      return (recordRawCommandsForResult(r, t), r);
    } catch (t) {
      (Dr(
        e,
        t,
        "mcp_list_prompts",
        (o) => logFeatureSad("mcp_list_prompts", o),
        S("prompts_list_failed"),
        "commands",
      ),
        ur().commandLists.delete(getMcpServerConfigCacheKey(e.name, e.config)));
      let r = [];
      if (t instanceof McpError && t.code === ErrorCode.MethodNotFound) recordRawCommandsForResult(r, []);
      else jt().discoveryFetchErrors.set(r, ge(t));
      return r;
    }
  },
  (e) => getMcpServerConfigCacheKey(e.name, e.config),
  () => ur().commandLists,
);
function hydrateCommandsFromListing(e, t) {
  let r = sanitizeDeep(t),
    o = e.config,
    c = (o.type === "http" || o.type === "sse") && pA(o.url),
    d = getOfficialPluginPromptOverrides(e.config);
  return r.map((p) => {
    let _ = Object.values(p.arguments ?? {}),
      T = _.map((A) => A.name),
      h = d?.prompts?.[p.name] ?? p.description;
    return {
      type: "prompt",
      name: "mcp__" + normalizeMcpName(e.name) + "__" + p.name,
      description: h ?? "",
      hasUserSpecifiedDescription: !!h,
      contentLength: 0,
      isEnabled: () => !0,
      isHidden: !1,
      isMcp: !0,
      progressMessage: "running",
      userFacingName() {
        return c ? p.name : `${e.name}:${p.name} (MCP)`;
      },
      aliases: c
        ? [`${e.name}:${p.name}`, `${e.name}:${p.name} (MCP)`]
        : void 0,
      argNames: T,
      source: "mcp",
      async getPromptForCommand(A, L) {
        let W = A.trim(),
          I = W ? W.split(/\s+/) : [];
        try {
          let D = _.filter((V, ie) => V.required && I[ie] === void 0).map(
            (V) => V.name,
          );
          if (D.length > 0)
            throw Error(
              `Missing required ${pluralize(D.length, "argument")}: ${D.join(", ")}. Usage: /mcp__${normalizeMcpName(e.name)}__${p.name} ${T.join(" ")}`,
            );
          let j = await ensureConnectedClient(e, {
              signal: L.abortController.signal,
              context: "MCP prompt command",
            }),
            ee = await asMcpSdkClient(j.client).getPrompt({
              name: p.name,
              arguments: ict(T, I),
            }),
            X = getImageLimitsForModel(L.options.mainLoopModel),
            me = await Promise.all(
              ee.messages.map((V) => transformResultContent(V.content, j.name, X, L.storageV5)),
            );
          return (logFeatureOk("mcp_get_prompt"), me.flat());
        } catch (D) {
          if (!yt(D))
            if (e.config.type === "claudeai-proxy" && isClaudeAiBearerRejectedError(D))
              (logFeatureSad("mcp_get_prompt", "mcp_get_prompt_claudeai_bearer_rejected"),
                logMCPDebug(
                  e.name,
                  `Error running command '${p.name}': ${formatConnectionError(D, e.config)}`,
                ));
            else
              (logFeatureBad("mcp_get_prompt", "mcp_get_prompt_failed"),
                logMCPError(
                  e.name,
                  `Error running command '${p.name}': ${formatConnectionError(D, e.config)}`,
                ));
          throw D;
        }
      },
    };
  });
}
async function callIdeRpc(e, t, r) {
  return (
    await callMCPTool({
      client: r,
      tool: e,
      args: t,
      signal: createAbortController().signal,
      imageLimits: CA,
      idleTimeoutMs: 0,
      storageV5: void 0,
      credentials: void 0,
    })
  ).content;
}
function inertReconnectShape(e, t) {
  return (
    logFeatureSad("mcp_reconnect", "mcp_reconnect_identity_changed"),
    {
      client: {
        name: e,
        type: "failed",
        config: t,
        error:
          "Reconnect cancelled: the account changed while connecting. Choose Reconnect again.",
        errorCode: "IDENTITY_CHANGED",
      },
      tools: [],
      commands: [],
    }
  );
}
async function reconnectMcpServerDistrusted(e, t, r, o) {
  if (!isDiscoveryCacheUsable()) return reconnectMcpServerImpl(e, t, r, o);
  let c = ir();
  if ((await i2(dropDiscoveryEntry(e, t)), xh(t) && ir() !== c)) return inertReconnectShape(e, t);
  return reconnectMcpServerImpl(e, t, r, o);
}
async function reconnectMcpServerImpl(e, t, r, o) {
  let c = ir(),
    d = xh(t),
    p = () => d && ir() !== c,
    _ = () => inertReconnectShape(e, t);
  try {
    if ((invalidateKeychainCache(), await clearServerCache(e, t), p())) return _();
    let T = connectToServer(e, t, void 0, r, o),
      h = await T;
    if (h.type === "needs-auth") {
      if (
        (logMCPDebug(
          e,
          "Reconnect returned 'needs-auth'; retrying once after cache clear",
        ),
        p())
      )
        return _();
      let me = getMcpServerConfigCacheKey(e, t);
      if (!isDiscoveryCacheEnabled() || ur().connections.get(me) === T) ur().connections.delete(me);
      h = await connectToServer(e, t, void 0, r, o);
    }
    if (p()) {
      if (h.type === "connected") await detachAndCloseConnection(h);
      return _();
    }
    if (h.type !== "connected")
      return (
        logFeatureSad("mcp_reconnect", "mcp_reconnect_not_connected"),
        { client: h, tools: [], commands: [] }
      );
    if (t.type !== "claudeai-proxy") removeMcpAuthCacheEntry(e, r);
    if (t.type === "http" || t.type === "sse") await CLt(e, t);
    gE(e);
    let A;
    if (isDiscoveryCacheEnabled()) A = await Qx(e, t);
    if (p()) return (await detachAndCloseConnection(h), _());
    let L = !!h.capabilities?.resources,
      [W, I, D, j] = await Promise.all([
        fetchToolsForClient(h, r),
        fetchCommandsForClient(h),
        isMcpSkillsEnabled() && L ? qe.fetchMcpSkillsForClient(h, r) : Promise.resolve([]),
        L ? fetchResourcesForClient(h) : Promise.resolve([]),
      ]);
    if (p()) return (await detachAndCloseConnection(h), _());
    if (h.discoveryAuthFailure)
      return (
        logFeatureSad("mcp_reconnect", "mcp_reconnect_needs_auth_discovery"),
        {
          client: { name: e, type: "needs-auth", config: t },
          tools: [],
          commands: [],
        }
      );
    if (t.type === "claudeai-proxy" && !h.discoveryBearerRejected) removeMcpAuthCacheEntry(e, r);
    if (
      t.type === "claudeai-proxy" &&
      !h.toolsListError &&
      !h.discoveryBearerRejected
    )
      markClaudeAiServerConnected(e, r);
    persistLiveListing(h, {
      tools: W,
      commands: I,
      resources: j,
      identityEpoch: c,
      grantLeg: A,
    });
    let ee = [...I, ...D],
      X = [];
    if (L) {
      if (![listMcpResourcesTool, readMcpResourceTool].some((V) => W.some((ie) => matchesToolName(ie, V.name))))
        X.push(listMcpResourcesTool, readMcpResourceTool, readMcpResourceDirTool);
    }
    if (h.discoveryBearerRejected)
      logFeatureSad("mcp_reconnect", "mcp_reconnect_bearer_rejected");
    else if (h.toolsListError)
      logFeatureSad("mcp_reconnect", "mcp_reconnect_tools_list_failed");
    else logFeatureOk("mcp_reconnect");
    return {
      client: h,
      tools: [...W, ...X],
      commands: ee,
      resources: j.length > 0 ? j : void 0,
      resourceTemplates: [],
    };
  } catch (T) {
    return (
      logFeatureBad("mcp_reconnect", "mcp_reconnect_failed"),
      logMCPError(e, `Error during reconnection: ${formatConnectionError(T, t)}`),
      {
        client: { name: e, type: "failed", config: t },
        tools: [],
        commands: [],
      }
    );
  }
}
async function pr(e, t, r) {
  await mapWithConcurrency(e, r, { concurrency: t });
}
async function awaitEachWithDeadline(e, t) {
  if (e.length === 0) return 0;
  let r,
    o = new Promise((c) => {
      r = setTimeout((d) => d("deadline"), t, c);
    });
  try {
    let c = await Promise.all(
      e.map((d) =>
        Promise.race([
          d.then(
            () => "settled",
            () => "settled",
          ),
          o,
        ]),
      ),
    );
    return countMatching(c, (d) => d === "deadline");
  } finally {
    clearTimeout(r);
  }
}
async function getMcpToolsCommandsAndResources(e, t, r, o) {
  let c = ir(),
    d = (C) => ir() !== c && xh(C),
    p = (C) => {
      if (!d(C.client.config)) e({ ...C, attemptEpoch: c });
    };
  ensureDiscoveryCacheAccount();
  let _ = !1,
    T = Object.entries(t ?? (await getAllMcpConfigs()).servers),
    h = [];
  for (let C of T)
    if (isMcpServerDisabled(C[0]))
      p({
        client: { name: C[0], type: "disabled", config: C[1] },
        tools: [],
        commands: [],
      });
    else h.push(C);
  let A = h.length,
    L = countMatching(h, ([C, E]) => E.type === "stdio"),
    W = countMatching(h, ([C, E]) => E.type === "sse"),
    I = countMatching(h, ([C, E]) => E.type === "http"),
    D = countMatching(h, ([C, E]) => E.type === "sse-ide"),
    j = countMatching(h, ([C, E]) => E.type === "ws-ide"),
    ee = h.filter(([C, E]) => isLocalMcpServer(E)),
    X = h.filter(([C, E]) => !isLocalMcpServer(E)),
    me = {
      totalServers: A,
      stdioCount: L,
      sseCount: W,
      httpCount: I,
      sseIdeCount: D,
      wsIdeCount: j,
    },
    V = [],
    ie = async ([C, E]) => {
      try {
        if (isMcpServerDisabled(C)) {
          p({
            client: { name: C, type: "disabled", config: E },
            tools: [],
            commands: [],
          });
          return;
        }
        if (isMcpServerBlockedAtConnectTime(C, E)) {
          (logMCPDebug(C, "Skipping connection (blocked by managed policy)"),
            p({
              client: { name: C, type: "failed", config: E, error: MCP_BLOCKED_BY_POLICY_MESSAGE },
              tools: [],
              commands: [],
            }));
          return;
        }
        if (cct(E)) {
          p({
            client: { name: C, type: "needs-auth", config: E },
            tools: createMcpAuthStubTools(C, E),
            commands: [],
          });
          return;
        }
        if (
          (E.type === "claudeai-proxy" ||
            E.type === "http" ||
            E.type === "sse") &&
          !rS(E) &&
          ((await isMcpAuthCached(C, E, r)) ||
            ((E.type === "http" || E.type === "sse") && sRe(C, E, await oRe())))
        ) {
          if (E.type !== "claudeai-proxy" && E.pluginSource === void 0)
            logMCPDebug(C, "Skipping connection (cached needs-auth)");
          p({
            client: { name: C, type: "needs-auth", config: E },
            tools: createMcpAuthStubTools(C, E),
            commands: [],
          });
          return;
        }
        if (
          (E.type === "stdio" || E.type === void 0) &&
          E.pluginSource !== void 0 &&
          (await isMcpAuthCached(C, E, r))
        ) {
          p({
            client: {
              name: C,
              type: "failed",
              config: E,
              error:
                "Skipping connection (recent failure cached; retries automatically in 15 min, or edit the plugin config to retry now)",
            },
            tools: [],
            commands: [],
          });
          return;
        }
        let F = (await hasLiveConnection(C, E))
            ? { kind: "miss", reason: "live-connection" }
            : await Hct(C, E),
          U = applyCapabilityServeTimeMiss(F);
        if (U.kind === "fresh" || U.kind === "stale") {
          (xt(), await evictStaleFailedConnectMemoForServe(C, E));
          let { entry: k, ageMs: ae } = U,
            de = {
              name: C,
              type: "cached",
              config: E,
              capabilities: k.capabilities,
              ...(k.serverInfo && {
                serverInfo: {
                  name: k.serverInfo.name,
                  version: k.serverInfo.version,
                },
              }),
              cacheSavedAt: k.savedAt,
            },
            se = hydrateToolsFromListing(de, k.tools, Date.now(), "cache", kr(de)),
            ve = hydrateCommandsFromListing(de, k.commands),
            ke = k.resources.map((Ce) => ({ ...Ce, server: C })),
            De = (k.templates ?? []).map((Ce) => ({ ...Ce, server: C })),
            Te = !!k.capabilities.resources || ke.length > 0,
            Q = [];
          if (Te && !_) ((_ = !0), Q.push(listMcpResourcesTool, readMcpResourceTool, readMcpResourceDirTool));
          if (
            (logEvent("tengu_mcp_discovery_source", {
              source: S(U.kind === "fresh" ? "cache_fresh" : "cache_stale"),
              transportType: fromEnum(E.type ?? "stdio"),
              entryAgeMs: ae,
              ...Le(E, C),
            }),
            logFeatureOk("mcp_discovery_cache"),
            ur().settledCachedDialFailures.delete(getMcpServerConfigCacheKey(C, E)),
            ur().refusedCachedRows.delete(getMcpServerConfigCacheKey(C, E)),
            p({
              client: de,
              tools: [...se, ...Q],
              commands: ve,
              resources: ke.length > 0 ? ke : void 0,
              resourceTemplates: De.length > 0 ? De : void 0,
            }),
            U.kind === "stale")
          )
            (async () => {
              let Ce = await Qx(C, E),
                z,
                B = async () => {
                  if ((z !== void 0 && isDialDisposed(z)) || ir() !== c) return;
                  (logFeatureSad("mcp_discovery_cache", "strike"),
                    await Z3e(C, E, { identityEpoch: c, grantLeg: Ce }));
                },
                ye = await Dct(C, E);
              if (!ye) return;
              if (isMcpServerDisabled(C)) {
                (await ye().catch(() => {}), dt(C, E, "disabled"));
                return;
              }
              if (isMcpServerBlockedAtConnectTime(C, E)) {
                (await ye().catch(() => {}), dt(C, E, "policy"));
                return;
              }
              let Ee = (re) => {
                  if (!(!(z !== void 0 && isDialDisposed(z)) && ir() === c)) return;
                  if (re.type !== "needs-auth")
                    ur().connections.delete(getMcpServerConfigCacheKey(C, E));
                  let Ae = jt().cachedFirstDialArmsRan;
                  if (Ae.has(re)) return;
                  if ((Ae.add(re), re.type === "needs-auth")) At(C, E);
                  else if (re.type === "failed") Ft(re, !1);
                },
                le = (re) => {
                  let be = jt().cachedFirstDialArmsRan;
                  if (be.has(re)) return;
                  (be.add(re), At(C, E));
                },
                ue = !1;
              try {
                ((z = connectToServer(C, E, me, r, o)),
                  jt().swrRefreshDialsInFlight.add(z),
                  z.then(
                    () => {
                      ue = !0;
                    },
                    () => {
                      ue = !0;
                    },
                  ));
                let re = await boundDial(z, {
                  serverName: C,
                  context: "MCP discovery-cache stale refresh",
                });
                if (re.type !== "connected") {
                  (Ee(re), await B());
                  return;
                }
                if (isDialDisposed(z) || ir() !== c) return;
                if (
                  k.negotiatedEra !== void 0 &&
                  re.protocolEra !== void 0 &&
                  re.protocolEra !== k.negotiatedEra
                ) {
                  if (
                    (logMCPDebug(
                      C,
                      "Discovery cache entry dropped: server negotiated a different protocol era on revalidation",
                    ),
                    await dropDiscoveryEntry(C, E).catch(() => {}),
                    !isDialDisposed(z) && ir() === c)
                  )
                    le(re);
                  return;
                }
                let be = !!re.capabilities?.resources;
                gE(C);
                let Ae = await Qx(C, E);
                if (isDialDisposed(z) || ir() !== c) return;
                let [Fe, w, O, N] = await Promise.all([
                    fetchToolsForClient(re, r),
                    fetchCommandsForClient(re),
                    fetchResourcesForClient(re),
                    be ? fetchResourceTemplatesForClient(re) : Promise.resolve([]),
                  ]),
                  te = getDiscoveryFetchError(N) === void 0 ? N : void 0;
                if (isDialDisposed(z) || je(z, C, E) || ir() !== c) return;
                if (!isMcpServerDisabled(C) && !isMcpServerBlockedAtConnectTime(C, E)) {
                  if (
                    !(await persistRawDiscoveryIfComplete(re, {
                      tools: Fe,
                      commands: w,
                      resources: O,
                      templates: te,
                      identityEpoch: c,
                      grantLeg: Ae,
                    }))
                  )
                    await B();
                }
                if (
                  !(z !== void 0 && isDialDisposed(z)) &&
                  !(z !== void 0 && je(z, C, E)) &&
                  ir() === c
                )
                  le(re);
              } catch {
                if (z !== void 0 && !ue) {
                  let re = z;
                  re.then(
                    (be) => {
                      if (be.type !== "connected")
                        (Ee(be), B().catch(() => {}));
                      else
                        (jt().swrRefreshDialsInFlight.delete(re),
                          (k.negotiatedEra !== void 0 &&
                          be.protocolEra !== void 0 &&
                          be.protocolEra !== k.negotiatedEra
                            ? dropDiscoveryEntry(C, E).catch(() => {})
                            : Promise.resolve()
                          ).then(() => {
                            if (!isDialDisposed(re) && ir() === c) le(be);
                          }));
                    },
                    () => {
                      B().catch(() => {});
                    },
                  );
                } else await B();
              } finally {
                if (z !== void 0 && ue) jt().swrRefreshDialsInFlight.delete(z);
                await ye().catch(() => {});
              }
            })();
          return;
        }
        let ne = connectToServer(C, E, me, r, o),
          Y = await ne,
          fe = connectToServer.cache?.get?.(getMcpServerConfigCacheKey(C, E)) === ne;
        if (isDiscoveryCacheEnabled() && isCacheOutcomeMiss(U))
          logEvent("tengu_mcp_discovery_source", {
            source: S(discoverySourceForMiss(U)),
            transportType: fromEnum(E.type ?? "stdio"),
            ...Le(E, C),
          });
        if (isDialDisposed(ne)) return;
        if (d(E)) {
          if (Y.type === "connected" && je(ne, C, E)) detachAndCloseConnection(Y);
          return;
        }
        if (Y.type !== "connected") {
          p({
            client: Y,
            tools: Y.type === "needs-auth" ? createMcpAuthStubTools(C, E) : [],
            commands: [],
          });
          return;
        }
        if (((Y.discoveryBearerRejected = void 0), E.type !== "claudeai-proxy"))
          removeMcpAuthCacheEntry(C, r);
        if (E.type === "http" || E.type === "sse") await CLt(C, E);
        V.push(
          (async () => {
            try {
              let k = !!Y.capabilities?.resources;
              gE(C);
              let ae = await Qx(C, E);
              if (isDiscoveryCacheEnabled() && (isDialDisposed(ne) || d(E))) {
                if (!isDialDisposed(ne) && je(ne, C, E)) detachAndCloseConnection(Y);
                return;
              }
              let [de, se, ve, ke, De] = await Promise.all([
                fetchToolsForClient(Y, r),
                fetchCommandsForClient(Y),
                isMcpSkillsEnabled() && k
                  ? qe.fetchMcpSkillsForClient(Y, r)
                  : Promise.resolve([]),
                k ? fetchResourcesForClient(Y) : Promise.resolve([]),
                k && S7(Y.config) ? fetchResourceTemplatesForClient(Y) : Promise.resolve([]),
              ]);
              if (d(E)) {
                if (je(ne, C, E)) detachAndCloseConnection(Y);
                return;
              }
              if (isDiscoveryCacheEnabled() && isDialDisposed(ne)) return;
              if (isDiscoveryCacheEnabled() && fe && je(ne, C, E)) {
                if (
                  connectToServer.cache?.get?.(getMcpServerConfigCacheKey(C, E)) === void 0 &&
                  asMcpSdkClient(Y.client).onclose !== void 0
                )
                  (detachAndCloseConnection(Y),
                    p({
                      client: {
                        name: C,
                        type: "failed",
                        config: E,
                        error: "Connection closed during discovery",
                        errorCode: "ConnectionClosed",
                      },
                      tools: [],
                      commands: [],
                    }));
                return;
              }
              if (Y.discoveryAuthFailure) {
                p({
                  client: { name: C, type: "needs-auth", config: E },
                  tools: createMcpAuthStubTools(C, E),
                  commands: [],
                });
                return;
              }
              if (E.type === "claudeai-proxy" && !Y.discoveryBearerRejected)
                removeMcpAuthCacheEntry(C, r);
              if (
                E.type === "claudeai-proxy" &&
                !Y.toolsListError &&
                !Y.discoveryBearerRejected
              )
                markClaudeAiServerConnected(C, r);
              let Te = [...se, ...ve];
              if (!k) recordRawResourcesForResult(ke, []);
              let Q = getDiscoveryFetchError(De) === void 0 ? De : void 0,
                z =
                  !isDiscoveryCacheEnabled() ||
                  isDialDisposed(ne) ||
                  je(ne, C, E) ||
                  ir() !== c ||
                  isMcpServerDisabled(C) ||
                  isMcpServerBlockedAtConnectTime(C, E)
                    ? void 0
                    : persistRawDiscoveryIfComplete(Y, {
                        tools: de,
                        commands: se,
                        resources: ke,
                        templates: Q,
                        identityEpoch: c,
                        grantLeg: ae,
                      }),
                B = [];
              if (k && !_) ((_ = !0), B.push(listMcpResourcesTool, readMcpResourceTool, readMcpResourceDirTool));
              (p({
                client: Y,
                tools: [...de, ...B],
                commands: Te,
                resources: ke.length > 0 ? ke : void 0,
                resourceTemplates: void 0,
              }),
                await z);
            } catch (k) {
              (logMCPError(C, `Error fetching tools/commands/resources: ${formatConnectionError(k, E)}`),
                p({
                  client: { name: C, type: "failed", config: E },
                  tools: [],
                  commands: [],
                }));
            }
          })(),
        );
      } catch (F) {
        (logMCPError(C, `Error fetching tools/commands/resources: ${formatConnectionError(F, E)}`),
          p({
            client: { name: C, type: "failed", config: E },
            tools: [],
            commands: [],
          }));
      }
    };
  (await Promise.all([pr(ee, getMcpServerConnectionBatchSize(), ie), pr(X, getRemoteMcpServerConnectionBatchSize(), ie)]),
    await Promise.all(V));
}
function prefetchAllMcpResources(e, t, r) {
  return new Promise((o) => {
    let c = 0,
      d = 0;
    if (((c = Object.keys(e).length), c === 0)) {
      o({ clients: [], tools: [], commands: [] });
      return;
    }
    let p = [],
      _ = [],
      T = [],
      h = !1,
      A = () => {
        if (h) return;
        h = !0;
        let L = T.reduce((W, I) => {
          let D =
            I.name.length +
            (I.description ?? "").length +
            (I.argumentHint ?? "").length;
          return W + D;
        }, 0);
        (logEvent("tengu_mcp_tools_commands_loaded", {
          tools_count: _.length,
          commands_count: T.length,
          commands_metadata_length: L,
        }),
          o({ clients: p, tools: _, commands: T }));
      };
    getMcpToolsCommandsAndResources(
      (L) => {
        if (
          (p.push(L.client),
          _.push(...L.tools),
          T.push(...L.commands),
          d++,
          d >= c)
        )
          A();
      },
      e,
      t,
      r,
    )
      .then(A)
      .catch((L) => {
        (logMCPError("prefetchAllMcpResources", `Failed to get MCP resources: ${l(L)}`),
          o({ clients: [], tools: [], commands: [] }));
      });
  });
}
async function transformResultContent(e, t, r, o, c = !1) {
  switch (e.type) {
    case "text": {
      let d = { type: "text", text: e.text };
      if (c) {
        let p = e._meta;
        if (p) d._meta = p;
      }
      return [d];
    }
    case "audio": {
      let d = e;
      return await Rt(
        Buffer.from(d.data, "base64"),
        d.mimeType,
        t,
        `[Audio from ${t}] `,
        o,
      );
    }
    case "image": {
      if (sr(e.mimeType)) {
        let { block: d } = await Bg({
          data: String(e.data),
          mediaType: e.mimeType,
          limits: r,
        });
        return [d];
      }
      return await Rt(
        Buffer.from(String(e.data), "base64"),
        e.mimeType,
        t,
        `[Image from ${t}] `,
        o,
      );
    }
    case "resource": {
      let d = e.resource,
        p = `[Resource from ${t} at ${d.uri}] `;
      if ("text" in d) return [{ type: "text", text: `${p}${d.text}` }];
      else if ("blob" in d)
        if (sr(d.mimeType)) {
          let { block: T } = await Bg({
              data: d.blob,
              mediaType: d.mimeType,
              limits: r,
            }),
            h = [];
          if (p) h.push({ type: "text", text: p });
          return (h.push(T), h);
        } else
          return await Rt(Buffer.from(d.blob, "base64"), d.mimeType, t, p, o);
      return [];
    }
    case "resource_link": {
      let d = e,
        p = `[Resource link: ${d.name}] ${d.uri}`;
      if (d.description) p += ` (${d.description})`;
      return [{ type: "text", text: p }];
    }
    default:
      return [];
  }
}
async function Rt(e, t, r, o, c) {
  let d = `mcp-${normalizeMcpName(r)}-blob-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    p = await persistBinaryContent(e, t, d, void 0, c);
  if ("error" in p)
    return [
      {
        type: "text",
        text: `${o}Binary content (${t || "unknown type"}, ${e.length} bytes) could not be saved to disk: ${p.error}`,
      },
    ];
  return [{ type: "text", text: formatBinaryContentSavedMessage(p.filepath, t, p.size, o) }];
}
function inferCompactSchema(e, t = 2) {
  if (e === null) return "null";
  if (Array.isArray(e)) {
    if (e.length === 0) return "[]";
    return `[${inferCompactSchema(e[0], t - 1)}]`;
  }
  if (typeof e === "object") {
    if (t <= 0) return "{...}";
    let o = Object.entries(e)
        .slice(0, 10)
        .map(([d, p]) => `${d}: ${inferCompactSchema(p, t - 1)}`),
      c = Object.keys(e).length > 10 ? ", ..." : "";
    return `{${o.join(", ")}${c}}`;
  }
  return typeof e;
}
async function transformMCPResult(e, t, r, o, c) {
  if (e && typeof e === "object") {
    if ("toolResult" in e)
      return { content: String(e.toolResult), type: "toolResult" };
    if ("structuredContent" in e && e.structuredContent !== void 0) {
      let p = b(e.structuredContent),
        _ = inferCompactSchema(e.structuredContent);
      if ("content" in e && Array.isArray(e.content)) {
        let T = e.content.filter(
          (h) => h && typeof h === "object" && "type" in h && h.type !== "text",
        );
        if (T.length > 0) {
          let h = (await Promise.all(T.map((A) => transformResultContent(A, r, o, c, !0)))).flat();
          if (h.length > 0) {
            let A = [...h, { type: "text", text: p }];
            return { content: A, type: "contentArray", schema: inferCompactSchema(stripTextBlockMeta(A)) };
          }
        }
      }
      return { content: p, type: "structuredContent", schema: _ };
    }
    if ("content" in e && Array.isArray(e.content)) {
      let p = (
        await Promise.all(e.content.map((_) => transformResultContent(_, r, o, c, !0)))
      ).flat();
      return { content: p, type: "contentArray", schema: inferCompactSchema(stripTextBlockMeta(p)) };
    }
  }
  let d = `MCP server "${r}" tool "${t}": unexpected response format`;
  throw (
    logMCPError(r, d),
    Object.assign(new R(d, "MCP tool unexpected response format"), {
      mcpErrorSource: "downstream_error",
    })
  );
}
function mr(e) {
  if (!e || typeof e === "string") return !1;
  return e.some((t) => t.type === "image");
}
async function processMCPResult(e, t, r, o, c, d, p) {
  let { content: _, type: T, schema: h } = await transformMCPResult(e, t, r, o, d);
  if (r === "ide") return _;
  if (c && !mr(_)) return _;
  if (!(await shouldTruncateOutput(_, p))) return _;
  let A = estimateContentTokens(_);
  if (a.ENABLE_MCP_LARGE_OUTPUT_FILES === !1)
    return (
      logEvent("tengu_mcp_large_result_handled", {
        outcome: S("truncated"),
        reason: S("env_disabled"),
        sizeEstimateTokens: A,
      }),
      await maybeTruncateOutput(_, p)
    );
  if (!_) return _;
  if (mr(_))
    return (
      logEvent("tengu_mcp_large_result_handled", {
        outcome: S("truncated"),
        reason: S("contains_images"),
        sizeEstimateTokens: A,
      }),
      await maybeTruncateOutput(_, p)
    );
  let L = Date.now(),
    W = `mcp-${normalizeMcpName(r)}-${normalizeMcpName(t)}-${L}`,
    I = stripTextBlockMeta(_),
    D = isMcpSubagentPromptEnabled() || H("tengu_mcp_singleton_unwrap", !0),
    j = Array.isArray(I) ? I.length : void 0,
    ee =
      D &&
      Array.isArray(I) &&
      I.length === 1 &&
      I[0]?.type === "text" &&
      !("annotations" in I[0]) &&
      !("_meta" in I[0])
        ? I[0].text
        : void 0,
    X = typeof I === "string" ? I : (ee ?? b(I, null, 2)),
    me = T === "toolResult" || ee !== void 0,
    V = me ? "text" : "json",
    ie;
  if (me) {
    let F = X.split(`
`);
    if (F.length > 1 && F.at(-1) === "") F.pop();
    let U = 0;
    for (let ne of F) if (ne.length > U) U = ne.length;
    ie = { count: F.length, maxLen: U };
  }
  let C = await tG(X, W, SS(), d);
  if (nG(C)) {
    let F = X.length;
    return (
      logEvent("tengu_mcp_large_result_handled", {
        outcome: S("truncated"),
        reason: S("persist_failed"),
        sizeEstimateTokens: A,
      }),
      `Error: result (${F.toLocaleString()} characters) exceeds maximum allowed tokens. Failed to save output to file: ${C.error}. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data.`
    );
  }
  logEvent("tengu_mcp_large_result_handled", {
    outcome: S("persisted"),
    reason: S("file_saved"),
    sizeEstimateTokens: A,
    persistedSizeChars: C.originalSize,
    resultType: fromEnum(T),
    blockCount: j,
    persistedAs: fromEnum(V),
  });
  let E = ee !== void 0 ? getPersistedFormatLabel("toolResult") : getPersistedFormatLabel(T, h);
  return formatTruncatedResultMessage(C.filepath, C.originalSize, E, void 0, ie);
}
function extractUrlElicitationsFromMcpError(e) {
  let t = e.data;
  return (
    t != null &&
    typeof t === "object" &&
    "elicitations" in t &&
    Array.isArray(t.elicitations)
      ? t.elicitations
      : []
  ).filter((o) => ElicitRequestURLParamsSchema.safeParse(o).success);
}
async function callMCPToolWithUrlElicitationRetry({
  client: e,
  clientConnection: t,
  tool: r,
  args: o,
  meta: c,
  signal: d,
  onProgress: p,
  callToolFn: _ = callMCPTool,
  requestDialog: T,
  hasResultSizeAnnotation: h = !1,
  imageLimits: A,
  toolExecution: L,
  taskRegistry: W,
  toolUseId: I,
  onAwaitingUserInput: D,
  ccrNeedsApprovalRetry: j,
  storageV5: ee,
  credentials: X,
}) {
  let V = !1;
  for (let ie = 0; ; ie++)
    try {
      let C = () =>
          _({
            client: e,
            tool: r,
            args: o,
            meta: c,
            signal: d,
            onProgress: p,
            hasResultSizeAnnotation: h,
            imageLimits: A,
            toolExecution: L,
            taskRegistry: W,
            toolUseId: I,
            storageV5: ee,
            credentials: X,
          }),
        E;
      if (!W9()) E = await C();
      else {
        let F;
        try {
          F = truncateOtelContent(b(o)).content;
        } catch {
          F = void 0;
        }
        E = await runInOtelSpan(
          "claude_code.mcp.rpc",
          {
            spanType: "mcp.rpc",
            attrs: {
              "rpc.system": "mcp",
              "rpc.service": e.name,
              "rpc.method": "tools/call",
              mcp_tool: r,
              attempt: ie,
              ...(F !== void 0 && { mcp_args: F }),
            },
            isExpectedError: (U) =>
              U instanceof McpError &&
              (U.code === ErrorCode.UrlElicitationRequired ||
                (U.code === CCR_NEEDS_APPROVAL_ERROR_CODE &&
                  typeof U.data === "object" &&
                  U.data !== null &&
                  "args_sha256" in U.data &&
                  !!j &&
                  !!I &&
                  !V &&
                  H("tengu_mcp_proxy_needs_approval_retry", !0))),
          },
          C,
        );
      }
      if (V) logFeatureOk("mcp_ccr_needs_approval");
      return E;
    } catch (C) {
      if (!(C instanceof McpError)) {
        if (V && !(C instanceof McpSessionExpiredError))
          logFeatureBad("mcp_ccr_needs_approval", "retry_failed");
        throw C;
      }
      if (
        C.code === CCR_NEEDS_APPROVAL_ERROR_CODE &&
        typeof C.data === "object" &&
        C.data !== null &&
        "args_sha256" in C.data &&
        j &&
        I &&
        !V &&
        H("tengu_mcp_proxy_needs_approval_retry", !0)
      ) {
        V = !0;
        let U = C.data ?? {},
          {
            canUseTool: ne,
            tool: Y,
            fullyQualifiedName: fe,
            toolUseContext: k,
            parentMessage: ae,
          } = j;
        (logMCPDebug(
          e.name,
          `Tool '${r}' returned -32003 needs_approval (tool_name=${U.tool_name}) \u2014 surfacing retroactive ` +
            "approval card",
        ),
          logEvent("tengu_mcp_proxy_needs_approval_retry", { attempt: ie }),
          D?.(!0));
        let de = {
            behavior: "ask",
            suppressAlwaysAllowRule: !0,
            message: `The ${fe} connector requires approval for this call.`,
            decisionReason: {
              type: "other",
              reason: "This connector call requires your approval to proceed.",
            },
          },
          se;
        try {
          se = await ne(Y, o, k, ae, I, de);
        } finally {
          D?.(!1);
        }
        if (d.aborted) throw new Ve();
        if (se.behavior === "allow") {
          if (se.updatedInput !== void 0 && !Qs(se.updatedInput, o))
            throw (
              logFeatureSad("mcp_ccr_needs_approval", "edited_input"),
              new R(
                `The approval for ${fe} was conditioned on edited arguments, which can't be applied on this retroactive card. To run with different arguments, deny and re-issue the call.`,
                "ccr_proxy_needs_approval_edited_input",
              )
            );
          continue;
        }
        if (se === de)
          throw (logFeatureSad("mcp_ccr_needs_approval", "no_prompt_surface"), C);
        throw (
          logFeatureOk("mcp_ccr_needs_approval"),
          new R(
            se.message || `Approval denied for ${fe}`,
            "ccr_proxy_needs_approval_denied",
          )
        );
      }
      if (C.code !== ErrorCode.UrlElicitationRequired) {
        if (V) logFeatureBad("mcp_ccr_needs_approval", "retry_failed");
        else if (C.code === CCR_NEEDS_APPROVAL_ERROR_CODE && j)
          logFeatureBad("mcp_ccr_needs_approval", "arm_not_fired");
        throw C;
      }
      if (ie - (V ? 1 : 0) >= 3) throw C;
      let E = extractUrlElicitationsFromMcpError(C),
        F = t.name;
      if (E.length === 0)
        throw (
          logMCPDebug(
            F,
            `Tool '${r}' returned -32042 but no valid elicitations in error data`,
          ),
          C
        );
      logMCPDebug(
        F,
        `Tool '${r}' requires URL elicitation (error -32042, attempt ${ie + 1}), processing ${E.length} elicitation(s)`,
      );
      for (let U of E) {
        let { elicitationId: ne } = U,
          Y = await runElicitationHooks(F, U, d);
        if (Y) {
          if (
            (logMCPDebug(F, `URL elicitation ${ne} resolved by hook: ${b(Y)}`),
            Y.action !== "accept")
          )
            return {
              content: `URL elicitation was ${Y.action === "decline" ? "declined" : Y.action + "ed"} by a hook. The tool "${r}" could not complete because it requires the user to open a URL.`,
              urlElicitationDeclined: { url: U.url },
              isError: !0,
            };
          continue;
        }
        let fe;
        D?.(!0);
        try {
          fe = T
            ? await T(MCP_URL_ELICITATION_DIALOG, { serverName: F, params: U }, { signal: d })
            : { action: "cancel" };
        } finally {
          D?.(!1);
        }
        let k = await runElicitationResultHooks(F, fe, d, "url", ne);
        if (k.action !== "accept")
          return (
            logMCPDebug(
              F,
              `User ${k.action === "decline" ? "declined" : k.action + "ed"} URL elicitation ${ne}`,
            ),
            {
              content: `URL elicitation was ${k.action === "decline" ? "declined" : k.action + "ed"} by the user. The tool "${r}" could not complete because it requires the user to open a URL.`,
              urlElicitationDeclined: { url: U.url },
              isError: !0,
            }
          );
        logMCPDebug(F, `Elicitation ${ne} completed, retrying tool call`);
      }
    }
}
function dn(e, t) {
  if (!e.isError) return;
  let r = "Unknown error";
  if (Array.isArray(e.content) && e.content.length > 0) {
    let c = e.content.flatMap((d) => {
      if (d == null || typeof d !== "object") return [];
      if ("text" in d) return [String(d.text)];
      if (d.type === "resource_link") {
        let p = d,
          _ = `[Resource link: ${p.name}] ${p.uri}`;
        if (p.description) _ += ` (${p.description})`;
        return [_];
      }
      return [];
    });
    if (c.length > 0)
      r = c.join(`
`);
  } else if ("error" in e) r = String(e.error);
  logMCPError(t, r);
  let o = stripReservedMetaKeys(e._meta);
  throw new McpToolCallError(r, "MCP tool returned error", o ? { _meta: o } : void 0);
}
function discoveryWireSchemas() {
  return {
    implementation: ImplementationSchema,
    serverCapabilities: ServerCapabilitiesSchema,
    tool: ToolSchema,
    prompt: PromptSchema,
    resource: ResourceSchema,
    resourceTemplate: ResourceTemplateSchema,
  };
}
function listToolsRaw(e, t) {
  return asMcpSdkClient(e).listTools(void 0, t);
}
function readResourceRaw(e, t, r) {
  return asMcpSdkClient(e).readResource({ uri: t }, r);
}
function invokeToolRaw(e, t, r) {
  return asMcpSdkClient(e).callTool(t, void 0, r);
}
async function callMCPTool({
  client: { client: e, name: t, config: r, transportErrorState: o },
  tool: c,
  args: d,
  meta: p,
  signal: _,
  onProgress: T,
  hasResultSizeAnnotation: h = !1,
  imageLimits: A,
  toolExecution: L,
  taskRegistry: W,
  toolUseId: I,
  idleTimeoutMs: D,
  isAuthRetry: j = !1,
  storageV5: ee,
  credentials: X,
}) {
  let me = asMcpSdkClient(e),
    V = Date.now(),
    ie = ir(),
    C,
    E = { armedAt: 0 };
  o?.activeCallWatchdogs.add(E);
  try {
    logMCPDebug(t, `Calling MCP tool: ${c}`);
    let F = D ?? getMcpToolIdleTimeoutMs(r),
      U = V,
      ne,
      Y = new Promise((Q, Ce) => {
        ne = Ce;
      });
    C = setInterval(() => {
      let Q = Math.floor((Date.now() - V) / 1000);
      if (
        (logMCPDebug(t, `Tool '${c}' still running (${Q}s elapsed)`),
        E.armedAt > 0 && Date.now() - E.armedAt > 90000)
      ) {
        (logMCPDebug(
          t,
          `Tool '${c}' aborting: transport error ${Math.floor((Date.now() - E.armedAt) / 1000)}s ago, response presumed lost`,
        ),
          ne(
            Object.assign(
              new R(
                `MCP server "${t}" transport dropped mid-call; response for tool "${c}" was lost`,
                "MCP transport lost mid-call",
              ),
              { mcpErrorSource: "downstream_unreachable" },
            ),
          ));
        return;
      }
      if (o?.pendingElicitations) U = Date.now();
      else if (o && o.lastElicitationClosedAt > U)
        U = o.lastElicitationClosedAt;
      if (F > 0 && Date.now() - U > F) {
        let Ce = Math.floor((Date.now() - U) / 1000);
        (logMCPDebug(
          t,
          `Tool '${c}' aborting: no response or progress notification for ${Ce}s (idle timeout ${Math.floor(F / 1000)}s)`,
        ),
          ne(
            Object.assign(
              new R(
                `MCP server "${t}" tool "${c}" sent no response or progress for ${Ce}s; aborting. If this server is configured in your MCP settings, set a per-server "timeout" (ms) to allow longer silent runs for just this server; otherwise set CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT (ms) globally (0 disables).`,
                "MCP tool idle timeout",
              ),
              { mcpErrorSource: "downstream_unreachable" },
            ),
          ));
      }
    }, 30000);
    let fe = getMcpToolTimeoutMs(r),
      k,
      ae = new Promise((Q, Ce) => {
        k = setTimeout(
          (z, B, ye, Ee) => {
            z(
              Object.assign(
                new R(
                  `MCP server "${B}" tool "${ye}" timed out after ${Math.floor(Ee / 1000)}s`,
                  "MCP tool timeout",
                ),
                { mcpErrorSource: "downstream_unreachable" },
              ),
            );
          },
          fe,
          Ce,
          t,
          c,
          fe,
        );
      }),
      de = () => {
        if (k) clearTimeout(k);
        if (C !== void 0) (clearInterval(C), (C = void 0));
        o?.activeCallWatchdogs.delete(E);
      },
      se = await Promise.race([
        me.callTool({ name: c, arguments: d, _meta: p }, CallToolResultSchema, {
          signal: _,
          timeout: fe,
          onprogress: (Q) => {
            if (((E.armedAt = 0), (U = Date.now()), T))
              T({
                type: "mcp_progress",
                status: "progress",
                serverName: t,
                toolName: c,
                progress: Q.progress,
                total: Q.total,
                progressMessage: Q.message,
              });
          },
        }),
        ae,
        Y,
      ]).finally(de);
    dn(se, t);
    let ve = Date.now() - V,
      ke =
        ve < 1000
          ? `${ve}ms`
          : ve < 60000
            ? `${Math.floor(ve / 1000)}s`
            : `${Math.floor(ve / 60000)}m ${Math.floor((ve % 60000) / 1000)}s`;
    logMCPDebug(t, `Tool '${c}' completed successfully in ${ke}`);
    let De = matchCodeIndexingToolByServerName(t);
    if (De)
      logEvent("tengu_code_indexing_tool_used", {
        tool: fromEnum(De),
        source: S("mcp"),
        success: !0,
      });
    let Te = await processMCPResult(se, c, t, A, h, ee, X);
    return (
      recordReplyDegradedState(t, void 0),
      {
        content: Te,
        _meta: se._meta,
        structuredContent: se.structuredContent,
        resourceLinks: collectResourceLinks(se.content),
      }
    );
  } catch (F) {
    if (!_.aborted) recordReplyDegradedState(t, F);
    if (C !== void 0) clearInterval(C);
    o?.activeCallWatchdogs.delete(E);
    let U = Date.now() - V;
    if (F instanceof Error && F.name !== "AbortError")
      logMCPDebug(t, `Tool '${c}' failed after ${Math.floor(U / 1000)}s: ${formatConnectionError(F, r)}`);
    if (F instanceof Error) {
      let Y = F instanceof McpError ? void 0 : "code" in F ? F.code : void 0,
        fe =
          (r.type === "http" || r.type === "sse" || r.type === "ws") &&
          !!r.headersHelper,
        k = Jse(r),
        ae =
          "errorCode" in F &&
          typeof F.errorCode === "string" &&
          !["invalid_grant", "invalid_client", "unauthorized_client"].includes(
            F.errorCode,
          ) &&
          /^HTTP 40[13]\b/.test(F.message),
        de = Y === 401 || F instanceof XA || ae || (Y === 403 && fe),
        se =
          (r.type === "http" || r.type === "sse") && !r.headersHelper && !i0(r)
            ? r
            : void 0,
        ve = !j && de && !fe && se !== void 0 && (await AUe(t, se));
      if ((fe || k || se !== void 0) && !j) {
        let Te = getMcpServerConfigCacheKey(t, r);
        if (ir() !== ie)
          throw new R(
            `MCP tool call to server "${t}" was aborted: the account changed before re-authentication`,
            "MCP tool call aborted: account changed before reauth",
          );
        let Q = ur().reauthInFlight,
          Ce = jt(),
          z = Q.get(Te),
          B = z !== void 0 && z.epoch === ie ? z.promise : void 0;
        Ce.reauthDecisionSinkForTest?.(
          B !== void 0 ? "joined" : z !== void 0 ? "stale_refused" : "started",
        );
        let ye =
          B !== void 0 && F instanceof McpError && F.code === ErrorCode.ConnectionClosed;
        if ((ye || (de && fe) || (de && k) || ve) && !isMcpServerDisabled(t) && !isMcpServerBlockedAtConnectTime(t, r)) {
          if (
            (logMCPDebug(
              t,
              fe
                ? `Tool '${c}' returned ${Y ?? 401}; re-running headersHelper and retrying once`
                : k
                  ? `Tool '${c}' returned ${Y ?? 401}; session credential rejected \u2014 reconnecting and retrying once`
                  : `Tool '${c}' returned ${Y ?? 401}; refresh token stored \u2014 reconnecting and retrying once`,
            ),
            ye)
          )
            logFeatureSad(
              fe ? "mcp_headers_helper" : "mcp_oauth_refresh",
              "collateral_rejoin",
            );
          if (!B) {
            (logFeatureSad(fe ? "mcp_headers_helper" : "mcp_oauth_refresh", "reauth_retry"),
              (me.onclose = void 0));
            let ue = ie;
            B = (async () => (await clearServerCache(t, r), connectToServer(t, r, void 0, void 0, X)))();
            let re = { promise: B, epoch: ue };
            (Q.set(Te, re),
              B.then((be) => {
                if (be.type === "connected" && ir() === ue) reauthReconnectEmitter.emit(t, r);
              })
                .finally(() => {
                  if (Q.get(Te) === re && !Ce.holdStaleReauthEntryForTest)
                    Q.delete(Te);
                })
                .catch(() => {}));
          }
          let le = await B;
          if (ir() !== ie) {
            if (le.type === "connected") await detachAndCloseConnection(le);
            throw new R(
              `MCP tool call to server "${t}" was aborted: the account changed during re-authentication`,
              "MCP tool call aborted: account changed during reauth",
            );
          }
          if (le.type === "connected" && (isMcpServerDisabled(t) || isMcpServerBlockedAtConnectTime(t, r))) await clearServerCache(t, r);
          else if (le.type === "connected")
            return callMCPTool({
              client: le,
              tool: c,
              args: d,
              meta: p,
              signal: _,
              onProgress: T,
              hasResultSizeAnnotation: h,
              imageLimits: A,
              toolExecution: L,
              taskRegistry: W,
              toolUseId: I,
              idleTimeoutMs: D,
              isAuthRetry: !0,
              storageV5: ee,
              credentials: X,
            });
          if (
            (logMCPDebug(
              t,
              `Auth reconnect returned '${le.type}'; falling through to needs-auth`,
            ),
            isDiscoveryCacheEnabled() && le.type !== "needs-auth")
          ) {
            let ue = connectToServer.cache?.get?.(Te);
            if (
              ue !== void 0 &&
              (await Be(ue)) === le &&
              connectToServer.cache?.get?.(Te) === ue
            )
              ur().connections.delete(Te);
          }
        }
      }
      if (de && k)
        throw (
          await clearServerCache(t, r),
          logMCPDebug(
            t,
            `Tool '${c}' rejected the session credential (${Y ?? 401}); failing the call and clearing the connection for a fresh retry later`,
          ),
          Object.assign(
            new R(
              `MCP server "${t}" rejected the session credential (HTTP ${Y ?? 401})`,
              "MCP server rejected the session credential",
            ),
            { mcpErrorSource: "other" },
          )
        );
      if (de) {
        logMCPDebug(t, "Tool call returned 401 Unauthorized - token may have expired");
        let Te = r.type === "claudeai-proxy" && r.eligible === !1,
          Q = Le(r, t),
          Ce = oy(t, r);
        throw (
          logEvent("tengu_mcp_tool_call_auth_error", {
            errorCode: fromNumber(Y ?? 401),
            transportType: fromEnum(r.type ?? "stdio"),
            authErrorKind: fromEnum(Te ? "not_connected" : "token_expired"),
            ...Q,
            mcpServerName: mcpNameForAnalytics_GATE_EVALUATED(normalizeMcpName(t), Ce),
            mcpToolName: uQ(normalizeMcpName(t), normalizeMcpName(c), Ce),
          }),
          new McpAuthError(
            t,
            Te
              ? `MCP server "${t}" needs to be connected in claude.ai (run /mcp to connect it)`
              : `MCP server "${t}" requires re-authorization (token expired)`,
          )
        );
      }
      let ke = isMcpSessionExpiredError(F),
        De =
          "code" in F &&
          F.code === -32000 &&
          F.message.includes("Connection closed") &&
          (r.type === "http" || r.type === "claudeai-proxy");
      if (ke || De) {
        logMCPDebug(
          t,
          `MCP session expired during tool call (${ke ? "stale session" : "connection closed"}), clearing connection cache for re-initialization`,
        );
        let Te = Le(r, t),
          Q = oy(t, r),
          Ce = uQ(normalizeMcpName(t), normalizeMcpName(c), Q);
        throw (
          logEvent("tengu_mcp_session_expired", {
            errorCode: Y !== void 0 ? fromNumber(Y) : void 0,
            transportType: fromEnum(r.type ?? "stdio"),
            ...Te,
            mcpServerName: mcpNameForAnalytics_GATE_EVALUATED(normalizeMcpName(t), Q),
            mcpToolName: Ce,
          }),
          await clearServerCache(t, r),
          new McpSessionExpiredError(t, ke ? "session_expired_404" : "connection_closed_http")
        );
      }
    }
    let ne = F;
    if (
      F instanceof AA ||
      ((ne?.name === "ZodError" || ne?.name === "$ZodError") &&
        Array.isArray(ne?.issues))
    )
      throw new McpResponseSchemaError(t, F);
    if (!(F instanceof Error) || F.name !== "AbortError") throw F;
    return { content: TOOL_CALL_INTERRUPTED_MESSAGE, interrupted: !0, isError: !0 };
  } finally {
    if (C !== void 0) clearInterval(C);
  }
}
function ln(e) {
  if (e.message.content[0]?.type !== "tool_use") return;
  return e.message.content[0].id;
}
async function setupSdkMcpClients(e, t, r) {
  let o = [],
    c = [],
    d = [];
  xt();
  let p = await Promise.allSettled(
    Object.entries(e).map(async ([T, h]) => {
      let A = new SdkMcpClientTransport(T, t),
        L = new ot(
          {
            name: "claude-code",
            title: "Claude Code",
            version:
              {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.263",
                FEEDBACK_CHANNEL:
                  "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-09-06T01:08:56Z",
                GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
                HOOKS_WORKER_URL:
                  "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "darwin",
              }.VERSION ?? "unknown",
            description: "Anthropic's agentic coding tool",
            websiteUrl: Wre,
          },
          { capabilities: {} },
        );
      try {
        await L.connect(A);
        let W = L.getServerCapabilities(),
          I = L.getInstructions(),
          D = capMcpInstructions(I, T),
          j = {
            type: "connected",
            serverInfo: L.getServerVersion(),
            name: T,
            capabilities: W || {},
            instructions: D,
            client: asMcpClient(L),
            config: { ...h, scope: "dynamic" },
            cleanup: async () => {
              await L.close();
            },
          },
          ee = getMcpServerConfigCacheKey(j.name, j.config);
        if ((ur().toolLists.delete(ee), isMcpSkillsEnabled()))
          qe.invalidateMcpSkillsForServer(ee);
        let X = [];
        if (W?.tools) {
          let V = await fetchToolsForClient(j, r);
          X.push(...V);
        }
        let me =
          isMcpSkillsEnabled() && W?.resources ? await qe.fetchMcpSkillsForClient(j, r) : [];
        return (logFeatureOk("mcp_sdk_connect"), { client: j, tools: X, commands: me });
      } catch (W) {
        return (
          logFeatureBad("mcp_sdk_connect", "mcp_sdk_connect_failed"),
          logMCPError(T, `Failed to connect SDK MCP server: ${W}`),
          {
            client: {
              type: "failed",
              name: T,
              config: { ...h, scope: "user" },
            },
            tools: [],
            commands: [],
          }
        );
      }
    }),
  );
  for (let T of p)
    if (T.status === "fulfilled")
      (o.push(T.value.client),
        c.push(...T.value.tools),
        d.push(...T.value.commands));
  if (o.some((T) => T.type === "connected" && !!T.capabilities?.resources)) {
    if (![listMcpResourcesTool, readMcpResourceTool].some((h) => c.some((A) => matchesToolName(A, h.name)))) c.push(listMcpResourcesTool, readMcpResourceTool, readMcpResourceDirTool);
  }
  return { clients: o, tools: c, commands: d };
}
async function cleanupConnectedMcpClients(e) {
  await Promise.all(
    e.map(async (t) => {
      if (t.type !== "connected") return;
      try {
        await t.cleanup();
      } catch (r) {
        n(`MCP client cleanup failed for ${t.name}: ${r}`, { level: "error" });
      }
    }),
  );
}
export {
  ClaudeAiProxyBearerRejectedError,
  GRANT_ELIGIBLE_DESIGN_WRITE_OPS,
  MCP_TREE_ID,
  applyCapabilityServeTimeMiss,
  areMcpConfigsEqual,
  awaitEachWithDeadline,
  buildFirstPartyDesignConsentAsk,
  buildSseStreamHeaders,
  callIdeRpc,
  callMCPTool,
  callMCPToolWithUrlElicitationRetry,
  capMcpInstructions,
  Qx as captureDiscoveryGrantLeg,
  ccrRetroactiveAskCanPrompt,
  cleanupConnectedMcpClients,
  clearServerCache,
  completeResourceTemplate,
  connectToServer,
  consentAskCanReachUser,
  createCcrProxyFetch,
  createClaudeAiProxyFetch,
  createCliOwnedBearerFetch,
  createFirstPartyApiMcpFetch,
  denyTokenlessFirstPartyDesignWrite,
  detachAndCloseConnection,
  discardMemoizedConnectResult,
  discoverySourceForMiss,
  discoveryWireSchemas,
  disposeServerConnectionDetached,
  dropDiscoveryEntry,
  emitMcpServerConnectionEvent,
  ensureConnectedClient,
  ensureDiscoveryCacheAccount,
  evictAllMcpMemosOnIdentityChange,
  evictStaleFailedConnectMemoForServe,
  extractUrlElicitationsFromMcpError,
  fetchCommandsForClient,
  fetchResourceTemplatesForClient,
  fetchResourcesForClient,
  fetchToolsForClient,
  getArmedRequestTimeoutMs,
  getDiscoveryFetchError,
  ir as getMcpIdentityEpoch,
  getMcpRequestTimeoutMs,
  getMcpServerConnectionBatchSize,
  getMcpToolIdleTimeoutMs,
  getMcpToolTimeoutMs,
  getMcpToolsCommandsAndResources,
  getRemoteMcpServerConnectionBatchSize,
  getRootsListResponse,
  getToolsListErrorForResult,
  hasLiveConnection,
  hasUnsettledDial,
  hydrateCommandsFromListing,
  hydrateToolsFromListing,
  inertReconnectShape,
  inferCompactSchema,
  invalidateMcpResourceListCaches,
  invokeToolRaw,
  isCacheOutcomeMiss,
  isDialDisposed,
  pA as isFirstPartyApiMcpUrl,
  isFirstPartyDesignServerConfig,
  isLocalMcpServer,
  isMcpAuthCached,
  isMcpSessionExpiredError,
  isSchemaApiValidateEnabledFor,
  isSchemaNormalizeEnabledFor,
  isTerminalConnectionError,
  listToolsRaw,
  mcpIdentityChangedSinceLastCheck,
  mcpToolInputToAutoClassifierInput,
  notifyMcpRootsListChanged,
  onMcpElicitRequest,
  onMcpElicitationComplete,
  onMcpNotification,
  onMcpPromptListChanged,
  onMcpResourceListChanged,
  onMcpToolListChanged,
  parseFirstPartyNeedsConsentBody,
  peekSettledConnection,
  persistLiveListing,
  persistRawDiscoveryIfComplete,
  persistRefreshedToolsIfPresent,
  prefetchAllMcpResources,
  processMCPResult,
  readResourceRaw,
  reconnectMcpServerDistrusted,
  reconnectMcpServerImpl,
  recordDiscoveryFetchErrorForResult,
  recordFirstPartyDesignConsentAsk,
  recordRawCommandsForResult,
  recordRawResourcesForResult,
  recordRawToolsForResult,
  refreshResourceTemplates,
  removeMcpAuthCacheEntry,
  runCachedFirstDialArms,
  sanitizeConnectErrorCodeForTelemetry,
  seedMcpIdentityCheck,
  serverReceivesPluginToolStagingRoot,
  setHoldStaleReauthEntryForTest,
  setMcpReauthDecisionSinkForTest,
  setupSdkMcpClients,
  suppressDesignWriteAddRules,
  takeFirstPartyDesignConsentAsk,
  takeSettledCachedDialFailure,
  transformMCPResult,
  transformResultContent,
  withFirstPartyDesignConsentIntercept,
  withdrawForSharingWideningDesignMcpOp,
  wrapFetchWithTimeout,
};
