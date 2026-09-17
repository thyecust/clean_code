// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 167 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  SUPPORTED_PROTOCOL_VERSIONS,
  METHOD_NOT_FOUND_ERROR_CODE,
  ResultSchema,
  JSONRPCMessageSchema,
  ImplementationSchema,
  ServerCapabilitiesSchema,
  InitializeResultSchema,
  DiscoverResultSchema,
  ResourceSchema,
  ResourceTemplateSchema,
  ListResourcesResultSchema,
  ListResourceTemplatesResultSchema,
  PromptSchema,
  ListPromptsResultSchema,
  ToolSchema,
  ListToolsResultSchema,
  CompatibilityCallToolResultSchema,
  ElicitRequestURLParamsSchema,
  ElicitRequestParamsSchema,
} from "./mcp-protocol-schemas.js";
import {
  OAuthError,
  ProtocolErrorCode,
  SdkError,
  SdkHttpError,
  ErrorCode,
  ProtocolError,
  isJSONRPCRequest,
  isJSONRPCNotification,
  isJSONRPCResultResponse,
  isJSONRPCErrorResponse,
  ReadBuffer,
  deserializeMessage,
  serializeMessage,
  createFetchWithInit,
  AjvJsonSchemaValidator,
  UnauthorizedError,
  Client,
  SSEClientTransport,
  StreamableHTTPClientTransport,
} from "./chunk-78r8f7dw.js";
import "../认证-OAuth登录/pkce-challenge.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import {
  Qs,
  j,
  B,
  K,
  he,
  sn,
  ke,
  yB,
  brt,
  Mrt,
  Lx,
  Nrt,
} from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { sleep, withDeadline } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { DEFAULT_IMAGE_LIMITS, getCurrentToolResultsDir } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { getOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { CLAUDE_CODE_URL, persistToolResultToFile, isPersistError } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { MCP_URL_ELICITATION_DIALOG, getMcpNeedsAuthCachePath, getMcpNeedsAuthCacheStateKey, readMcpNeedsAuthCache, invalidateMcpNeedsAuthCache, createMcpAuthStubTools, initMcpDiscoveryCacheKillSwitch } from "./mcp-auth-cache.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum, fromEnumOpt, fromNumber, mcpNameForAnalytics_GATE_EVALUATED } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  getMCPUserAgent,
  hashForTelemetry,
  isComputerUseMcpServer,
  readStoredMcpOAuth,
  hasAuthorizationHeader,
  configHasAuthorizationHeader,
  isFirstPartyDesignUrl as pA,
  configProvidesOwnAuth,
  hasStoredRefreshToken,
  needsMcpServerAuth,
  isStdioMcpServer,
  isToolDetailsLoggingEnabled,
  getMcpServerKeyHash,
  shouldSendMcpServerTelemetry,
  getSampledMcpToolName,
  getVersionForAnalytics,
  redactSensitiveText,
  getClaudeAIOAuthTokens,
  handleOAuth401Error,
  getClaudeAIOAuthTokensAsync,
  readFreshOAuthAccessToken,
  checkAndRefreshOAuthTokenIfNeeded,
  getFeatureValue_CACHED_MAY_BE_STALE,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Ve, yt, R, ge, l, pot } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { describeStorageError, registerCleanup, jsonStringify, sanitizeUrl, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize, truncateToCodeUnits, beforeFirst } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logMCPError, logMCPDebug } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { MAX_TIMER_DELAY_MS, buildMcpToolName } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/共享小工具-未细化/diagnostics-log.js";
import { _xt, jo, yxt, Qie } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { getFileStorage } from "../../01-核心基础设施/共享小工具-未细化/file-storage.js";
import { normalizeComparableText, sanitizeDeep } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { getWebSocketTLSOptions, getWebSocketProxyUrl, getProxyFetchOptions } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { isFirstPartyProvider, shouldPropagateTraceContext } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { isPolicyAllowed, getPolicyDeniedReason } from "../../01-核心基础设施/共享小工具-未细化/compliance-taints-store.js";
import { registerChildProcess } from "../../01-核心基础设施/核心工具-进程与信号/sdk-memory-summary.js";
import { getMcpClientState, isCliOwnedMcpConfig, hasCliOwnedBearerProvider, getCliOwnedBearerToken, isSessionIngressUrl, isBridgeCarrierServer, isCcrProxyConfig, getMcpServerOrigin } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
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
  isMcpRpcTracingEnabled,
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
  MCP_PROTOCOL_VERSION_2025_11_25,
  MCP_PROTOCOL_VERSION_2026_07_28,
  REOPEN_REFETCH_REASON,
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
  isMcpTasksEnabled,
  getMcpClientCapabilities,
  isMcpStatelessSkipInitEnabled,
  getMcpDiscoverProjectionPrior,
  markClaudeAiServerConnected,
  isMcpServerBlockedAtConnectTime,
  getAllMcpConfigs,
  isMcpServerDisabled,
  matchCodeIndexingToolByServerName,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { createAbortController } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { getPluginToolStagingDir } from "../../01-核心基础设施/核心工具-路径与平台/temp-directory.js";
import { agentProxyEnv, subprocessEnv, shouldUseMcpAllowlistEnv } from "../../01-核心基础设施/核心工具-进程与信号/subprocess-env-scrub.js";
import { emitOtelEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/otel-events.js";
import { isMcpServerUrlMissing, hashMcpServerConfig, getMcpServerConfigCacheKey } from "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import { mTt } from "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import { getMcpSdkGeneration } from "../../01-核心基础设施/共享小工具-未细化/mcp-sdk-generation.js";
import { CCR_TURN_ID_HEADER, getCcrTurnId } from "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import { MCP_TOOL_BASE } from "../../01-核心基础设施/共享小工具-未细化/mcp-tool-base.js";
import { DesignSessionState, deletePlansForProject, PLAN_INVALIDATING_OPERATIONS, deleteApprovedPlansForProject, deleteVerifiedProjectGrantsForProject, markProjectForRecard } from "../Memory-CLAUDE.md/chunk-9b6sc1gb.js";
import { getAdditionalWorkingDirectories } from "../../01-核心基础设施/共享小工具-未细化/additional-working-directories.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-elicitation-dialogs.js";
import { handleElicitationRequestV2, runElicitationHooksV2, runElicitationResultHooksV2 } from "./mcp-elicitation-handlers-v2.js";
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
  resolveAccountTokenAndRecord,
  getIdentityEpoch as ir,
  bumpIdentityEpoch,
  isCurrentIdentityEpoch,
  markIdentityChanged,
  getPresentedCredentialLog,
  setAccountResolver,
  setEraResolver,
  hasAccountResolver,
  isRemoteTransport,
  isDiscoveryCacheEligible,
  evictMemoizedDiscoveryCachePaths,
  getDiscoveryCacheLegToken as Qx,
  checkDiscoveryCacheAdmission,
  recordPresentedHeaders,
  awaitDiscoveryCacheFlush,
  writeDiscoveryCacheEntry,
  mergeDiscoveryCacheTools,
  recordDiscoveryCacheStrike,
  deleteDiscoveryCacheEntry,
  acquireDiscoveryCacheRefreshLock,
} from "./mcp-discovery-cache.js";
import "../../01-核心基础设施/共享小工具-未细化/oauth-callback.js";
import { redactHeaders, redactUrl, formatErrorWithCode, formatConnectionError, redactErrorForLogging, rethrowFetchError } from "../认证-OAuth登录/url-and-error-redaction.js";
import { iI, wLt, yct, z3e } from "../认证-OAuth登录/chunk-naqnacd3.js";
import "../认证-OAuth登录/xaa-idp-login.js";
import { recordReplyDegradedState } from "../../01-核心基础设施/共享小工具-未细化/reply-degraded-state.js";
import { isClaudeAiBearerRejectedError, isListAuthError } from "../../01-核心基础设施/共享小工具-未细化/auth-error-guards.js";
import { isClaudeBrowserMcpServerName, createHostHandledConsentPermissions } from "../../01-核心基础设施/共享小工具-未细化/claude-browser-mcp-server.js";
import { isSlackSendTool, createSlackSendUiDescriptor } from "../../01-核心基础设施/共享小工具-未细化/slack-send-tool.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-hosted-oauth-gate.js";
import { noopTaskRegistry } from "../工具WebFetch-WebSearch/noop-task-registry.js";
import { SdkMcpClientTransport } from "../../01-核心基础设施/共享小工具-未细化/sdk-mcp-transports.js";
import { stripTextBlockMeta, estimateContentTokens, shouldTruncateOutput, maybeTruncateOutput } from "../../01-核心基础设施/共享小工具-未细化/mcp-output-truncation.js";
import "./mcp-elicitation-request-handler.js";
import { logChromeToolsAdded } from "../Hooks钩子/chrome-telemetry-events.js";
import { collectResourceLinks, stripReservedMetaKeys } from "../../01-核心基础设施/共享小工具-未细化/mcp-tool-result-fields.js";
import { getDesignAuthResolver, hasFirstPartyDesignAuth, FirstPartyDesignNeedsConsentError, getDesignConsentProvider, setPendingScopeExpansionNotice } from "../../01-核心基础设施/共享小工具-未细化/chunk-jhs1bd0k.js";
import { hasChannelCapability } from "../../01-核心基础设施/共享小工具-未细化/has-channel-capability.js";
import { resolveProxyFetchOptions } from "../../01-核心基础设施/共享小工具-未细化/proxy-fetch-options.js";
import { splitPluginId } from "../插件系统/chunk-33bdfgmx.js";
import { isMcpSkillsEnabled, isMcpSkillsCapable } from "./mcp-skills-extension.js";
import { asMcpClient, asMcpSdkClient } from "../../01-核心基础设施/共享小工具-未细化/mcp-client-type-casts.js";
import { buildImageBlock } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { shortenMcpTaskId } from "./mcp-task-id.js";
import { getMcpTimeoutMs } from "../../01-核心基础设施/共享小工具-未细化/mcp-timeouts.js";
import { isClaudeInChromeMCPServer } from "../../01-核心基础设施/共享小工具-未细化/claude-in-chrome-mcp-constants.js";
import { normalizeMcpName } from "../../01-核心基础设施/共享小工具-未细化/mcp-name-normalization.js";
import { AA, s, T, v, c, it, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { Jke } from "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { isRecord } from "../../01-核心基础设施/共享小工具-未细化/is-record.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { toESM } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var Xn = toESM(_xt(), 1);
import ln from "process";
import { PassThrough } from "stream";
var cr =
  ln.platform === "win32"
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
function un() {
  let e = {};
  for (let t of cr) {
    let o = ln.env[t];
    if (o === void 0) continue;
    if (o.startsWith("()")) continue;
    e[t] = o;
  }
  return e;
}
var pn = class {
  _process;
  _readBuffer;
  _serverParams;
  _stderrStream = null;
  onclose;
  onerror;
  onmessage;
  constructor(e) {
    if (
      ((this._serverParams = e),
      (this._readBuffer = new ReadBuffer({ maxBufferSize: e.maxBufferSize })),
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
        ((this._process = Xn.default(
          this._serverParams.command,
          this._serverParams.args ?? [],
          {
            env: { ...un(), ...this._serverParams.env },
            stdio: ["pipe", "pipe", this._serverParams.stderr ?? "inherit"],
            shell: !1,
            windowsHide: ln.platform === "win32",
            cwd: this._serverParams.cwd,
          },
        )),
        this._process.on("error", (o) => {
          (t(o), this.onerror?.(o));
        }),
        this._process.on("spawn", () => {
          e();
        }),
        this._process.on("close", (o) => {
          ((this._process = void 0), this.onclose?.());
        }),
        this._process.stdin?.on("error", (o) => {
          this.onerror?.(o);
        }),
        this._process.stdout?.on("data", (o) => {
          try {
            (this._readBuffer.append(o), this.processReadBuffer());
          } catch (r) {
            (this.onerror?.(r), this.close().catch(() => {}));
          }
        }),
        this._process.stdout?.on("error", (o) => {
          this.onerror?.(o);
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
  async _dispose() {
    let e = this._process;
    if (
      ((this._process = void 0),
      e && e.exitCode === null && e.signalCode === null)
    ) {
      let t = new Promise((o) => e.once("exit", () => o()));
      try {
        e.stdin?.end();
      } catch {}
      try {
        e.kill("SIGTERM");
      } catch {}
      if (
        (await Promise.race([
          t,
          new Promise((o) => setTimeout(o, 1000).unref()),
        ]),
        e.exitCode === null && e.signalCode === null)
      )
        try {
          e.kill("SIGKILL");
        } catch {}
      await t;
    }
    try {
      e?.stdout?.destroy();
    } catch {}
    try {
      e?.stdin?.destroy();
    } catch {}
    try {
      e?.stderr?.destroy();
    } catch {}
    this._readBuffer.clear();
  }
  async close() {
    if (this._process) {
      let e = this._process;
      this._process = void 0;
      let t = new Promise((o) => {
        e.once("close", () => {
          o();
        });
      });
      try {
        e.stdin?.end();
      } catch {}
      if (
        (await Promise.race([
          t,
          new Promise((o) => setTimeout(o, 2000).unref()),
        ]),
        e.exitCode === null)
      ) {
        try {
          e.kill("SIGTERM");
        } catch {}
        await Promise.race([
          t,
          new Promise((o) => setTimeout(o, 2000).unref()),
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
      if (!this._process?.stdin) throw new SdkError(ProtocolErrorCode.NotConnected, "Not connected");
      let o = serializeMessage(e);
      if (this._process.stdin.write(o)) t();
      else this._process.stdin.once("drain", t);
    });
  }
};
import { randomUUID } from "crypto";
import { Readable as Cr } from "stream";
import { pathToFileURL } from "url";
var dr = MAX_MCP_HTTP_BODY_BYTES,
  mn = "without an SSE event boundary";
class Zn extends Error {
  constructor(e) {
    super(
      `streamed >${Math.round(e / 1024 / 1024)}MB ${mn}. The server is likely returning non-protocol data. Disconnecting to prevent unbounded memory growth.`,
    );
    this.name = "HttpBodyOverflowError";
  }
}
function lr(e) {
  let t = 0,
    o = 0,
    r = !1;
  return new TransformStream({
    transform(d, p) {
      let h = -1;
      for (let C = 0; C < d.length; C++) {
        let A = d[C];
        if (r && A === 10) {
          r = !1;
          continue;
        }
        if (((r = !1), A === 10 || A === 13)) {
          if (o === 0) h = C;
          ((o = 0), (r = A === 13));
        } else o++;
      }
      if (((t = h >= 0 ? d.length - 1 - h : t + d.length), t > e)) {
        p.error(new Zn(e));
        return;
      }
      p.enqueue(d);
    },
  });
}
function vt(e) {
  return async (t, o) => {
    let r = await e(t, o);
    if (!r.body || r.body.locked || r.status < 200 || r.status > 599) return r;
    let d = r.body.pipeThrough(lr(dr)),
      p = new Response(d, {
        status: r.status,
        statusText: r.statusText,
        headers: r.headers,
      });
    return (
      Object.defineProperty(p, "url", { value: r.url }),
      Object.defineProperty(p, "redirected", { value: r.redirected }),
      Object.defineProperty(p, "type", { value: r.type }),
      p
    );
  };
}
import { createHash } from "crypto";
class At extends Error {
  constructor(e) {
    super(
      `wrote >${Math.round(e / 1024 / 1024)}MB to stdout without a JSON-RPC message boundary. The server is likely writing logs or other non-protocol data to stdout instead of stderr. Disconnecting to prevent unbounded memory growth.`,
    );
    this.name = "StdoutOverflowError";
  }
}
class hn {
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
        this.onOverflow(new At(this.capBytes)));
      return;
    }
    (this.chunks.push(e), (this.byteLength += e.length));
  }
  readMessage() {
    if (this.overflowed) {
      if (this.overflowThrown) return null;
      throw ((this.overflowThrown = !0), new At(this.capBytes));
    }
    if (this.chunks.length === 0) return null;
    let e = this.chunks.at(-1),
      t = e.indexOf(10);
    if (t === -1) return null;
    let o = this.chunks.length === 1 ? e : Buffer.concat(this.chunks),
      r = o.length - e.length + t,
      d = o.toString("utf8", 0, r).replace(/\r$/, ""),
      p = o.subarray(r + 1);
    return (
      (this.chunks = p.length > 0 ? [p] : []),
      (this.byteLength = p.length),
      deserializeMessage(d)
    );
  }
  clear() {
    ((this.chunks = []), (this.byteLength = 0));
  }
}
class St extends pn {
  overflowError;
  _startCompleted = !1;
  constructor(e) {
    super({ ...e, maxBufferSize: MAX_MCP_HTTP_BODY_BYTES });
    this._readBuffer = new hn(MAX_MCP_HTTP_BODY_BYTES, (t) => {
      ((this.overflowError = t), queueMicrotask(() => void this.close()));
    });
  }
  async start() {
    if (
      (await super.start(),
      (this._startCompleted = !0),
      !(this._readBuffer instanceof hn))
    )
      throw Error(
        "BoundedStdioClientTransport: _readBuffer is no longer the BoundedReadBuffer \u2014 " +
          "the SDK transport internals this subclass relies on have changed; re-verify the stdout bound.",
      );
  }
}
var mr = 64;
class Qn {
  #e = new Map();
  record(e, t) {
    if (this.#e.size >= mr) {
      let o = this.#e.keys().next().value;
      if (o !== void 0) this.#e.delete(o);
    }
    this.#e.set(e, t);
  }
  consume(e) {
    let t = this.#e.get(e);
    return (this.#e.delete(e), t);
  }
  get size() {
    return this.#e.size;
  }
  reset() {
    this.#e.clear();
  }
}
var fr = new j(() => new Qn());
function eo() {
  return fr.of(B().host);
}
function to(e) {
  let t = createHash("sha256")
    .update(
      JSON.stringify(
        Object.entries(e.env ?? {}).sort(([o], [r]) =>
          o < r ? -1 : o > r ? 1 : 0,
        ),
      ),
    )
    .digest("hex")
    .slice(0, 16);
  return [e.command, e.cwd ?? "", t, ...(e.args ?? [])].join("\x00");
}
function no(e) {
  return eo().consume(to(e));
}
var fn = Object.getOwnPropertyDescriptor(pn.prototype, "_dispose");
if (typeof fn?.value === "function") {
  let e = fn.value;
  Object.defineProperty(St.prototype, "_dispose", {
    ...fn,
    value: function () {
      let o = this,
        { _process: r, _serverParams: d } = o;
      if (d !== void 0 && this._startCompleted)
        eo().record(
          to(d),
          r === void 0 || r.exitCode !== null || r.signalCode !== null
            ? "hard_closed"
            : "survived",
        );
      return e.call(this);
    },
  });
}
function Tt(e) {
  return e.type === "claudeai-proxy" && e.stateless === !0 && isMcpStatelessSkipInitEnabled();
}
function oo(e) {
  if (!Tt(e) || e.type !== "claudeai-proxy") return;
  if (e.cachedInitResponse == null) return;
  let t = InitializeResultSchema.safeParse(e.cachedInitResponse);
  if (!t.success) {
    logForDebugging(
      `[claudeai-mcp] cached_init_response for ${e.id} failed InitializeResult validation \u2014 falling back to real initialize`,
    );
    return;
  }
  if (!SUPPORTED_PROTOCOL_VERSIONS.includes(t.data.protocolVersion)) {
    logForDebugging(
      `[claudeai-mcp] cached_init_response for ${e.id} carries unsupported protocolVersion ${sanitizeLogValue(t.data.protocolVersion)} \u2014 falling back to real initialize`,
    );
    return;
  }
  return t.data;
}
var yr = createLazyValue(() =>
  it({
    supportedVersions: v(s()),
    capabilities: it({}),
    serverInfo: it({ name: s(), version: s() }).optional(),
  }),
);
function ro(e) {
  if (!Tt(e) || e.type !== "claudeai-proxy") return;
  if (e.discoverSupport === "legacy") return "method-not-found";
  if (e.discoverSupport !== "supported") return;
  if (e.cachedDiscoverResponse == null) return;
  let t = yr().safeParse(e.cachedDiscoverResponse);
  if (!t.success) {
    logForDebugging(
      `[claudeai-mcp] cached_discover_response for ${e.id} failed DiscoverResult shape check \u2014 not serving the cached body`,
    );
    return;
  }
  return { result: t.data };
}
function gn(e, t, o) {
  let r = e.send.bind(e);
  e.send = async (d, p) => {
    if (
      isJSONRPCRequest(d) &&
      d.method === "server/discover" &&
      (o !== void 0 || t !== void 0)
    ) {
      let h =
        o !== void 0 && o !== "method-not-found"
          ? { jsonrpc: "2.0", id: d.id, result: o.result }
          : {
              jsonrpc: "2.0",
              id: d.id,
              error: { code: METHOD_NOT_FOUND_ERROR_CODE, message: "Method not found" },
            };
      queueMicrotask(() => e.onmessage?.(h));
      return;
    }
    if (t !== void 0 && isJSONRPCRequest(d) && d.method === "initialize") {
      let h = { jsonrpc: "2.0", id: d.id, result: t };
      queueMicrotask(() => e.onmessage?.(h));
      return;
    }
    if (isJSONRPCNotification(d) && d.method === "notifications/initialized") return;
    return r(d, p);
  };
}
function so(e, t) {
  let o = new URL(t).href;
  return async (r, d) => {
    if ((d?.method ?? "GET").toUpperCase() !== "GET") return e(r, d);
    let p =
      typeof r === "object" && r !== null && "url" in r ? r.url : String(r);
    if (new URL(p).href === o)
      return new Response(null, {
        status: 405,
        statusText: "Method Not Allowed",
      });
    return e(r, d);
  };
}
import { dirname } from "path";
function Eo(e) {
  return asMcpClient(e);
}
function Xe(e) {
  return asMcpSdkClient(e);
}
var wt = import.meta.require("../Skills技能/fetchMcpSkillsForClient.er0bhc4y.js");
var yn = null,
  Bt = null,
  It = null,
  _n = import.meta.require("./getMcpAutoBackgroundMs.7m99c5cf.js");
function Po(e) {
  return (
    e instanceof SdkHttpError &&
    (e.code === ProtocolErrorCode.ClientHttpFailedToOpenStream ||
      e.message.includes("Failed to open SSE stream"))
  );
}
function isMcpSessionExpiredError(e) {
  if (e instanceof McpSessionExpiredError) return !0;
  if (e instanceof ProtocolError) return !1;
  let t = e instanceof SdkHttpError ? e.status : "code" in e ? e.code : void 0;
  if (t === 404) return !Po(e);
  return (
    t === 400 &&
    /Server not initialized|No valid session ID|Mcp-Session-Id header is required/i.test(
      e.message,
    )
  );
}
function capMcpInstructions(e, t) {
  if (!e) return e;
  return Mo(e, "Server instructions", t);
}
function Mo(e, t, o) {
  if (e.length <= MAX_MCP_TEXT_LENGTH) return e;
  if (o !== void 0) logMCPDebug(o, `${t} truncated from ${e.length} to ${MAX_MCP_TEXT_LENGTH} chars`);
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
var Er = 1e8,
  io = 20,
  ko = [250, 500, 1000];
function isRetryableListError(e) {
  if (isListAuthError(e)) return !1;
  if (e instanceof iI) return !1;
  if (isClaudeAiBearerRejectedError(e)) return !1;
  if (e instanceof DOMException && e.name === "TimeoutError") return !1;
  if (e instanceof SdkHttpError && e.status >= 400 && e.status < 500) return !1;
  if (
    e instanceof Error &&
    !(e instanceof ProtocolError) &&
    "code" in e &&
    typeof e.code === "number" &&
    e.code >= 400 &&
    e.code < 500
  )
    return !1;
  if (e instanceof SdkError && e.code === ProtocolErrorCode.RequestTimeout) return !1;
  if (e instanceof SdkError && e.code === ProtocolErrorCode.ListPaginationExceeded) return !1;
  if (e instanceof ProtocolError)
    return (
      e.code !== -32001 &&
      e.code !== ErrorCode.MethodNotFound &&
      e.code !== ErrorCode.InvalidRequest &&
      e.code !== ErrorCode.InvalidParams &&
      e.code !== ErrorCode.UnsupportedProtocolVersion &&
      e.code !== ErrorCode.MissingRequiredClientCapability
    );
  return !0;
}
function Gt(e) {
  return "transport" in e && e.transport === void 0;
}
async function nn(e, t, o, r, d, p) {
  let h = !1;
  for (let C = 0; ; C++) {
    let A = [],
      w,
      F = 0,
      z = !1;
    try {
      do {
        let Q = await e.request(
          { method: r, ...(w && { params: { cursor: w } }) },
          d,
          { timeout: getMcpTimeoutMs() },
        );
        F++;
        let O = p(Q);
        if (O) A.push(...O);
        if (((w = Q.nextCursor), w && F >= io)) {
          z = !0;
          break;
        }
      } while (w);
      if (z)
        logMCPDebug(t, `${r} still returning nextCursor after ${io} pages; stopping`);
      if (F > 1) Jt(r, F, A.length, z ? "capped" : "complete");
      return A;
    } catch (Q) {
      if (F > 0 && !h) ((h = !0), Jt(r, F, A.length, "error"));
      let O = ko[C];
      if (O === void 0 || !isRetryableListError(Q) || Gt(e)) throw Q;
      if (
        (logMCPDebug(t, `${r} failed (${formatConnectionError(Q, o)}); retrying in ${O}ms`),
        await sleep(O),
        Gt(e))
      )
        throw Q;
    }
  }
}
function Jt(e, t, o, r, d = "pages") {
  logEvent("tengu_mcp_list_paginated", {
    method: fromEnum(e),
    pageCount: t,
    itemCount: o,
    outcome: fromEnum(r),
    source: fromEnum(d),
  });
}
async function Pr(e, t, o) {
  for (let r = 0; ; r++)
    try {
      let d = await e.listTools(void 0, {
        timeout: getMcpTimeoutMs(),
        cacheMode: "refresh",
      });
      return (
        Jt("tools/list", void 0, d.tools.length, "complete", "aggregate"),
        d.tools
      );
    } catch (d) {
      let p = ko[r];
      if (p === void 0 || !isRetryableListError(d)) {
        if (d instanceof SdkError && d.code === ProtocolErrorCode.ListPaginationExceeded)
          Jt("tools/list", void 0, 0, "capped", "aggregate");
        throw d;
      }
      if (Gt(e)) throw d;
      if (
        (logMCPDebug(t, `tools/list failed (${formatConnectionError(d, o)}); retrying in ${p}ms`),
        await sleep(p),
        Gt(e))
      )
        throw d;
    }
}
var LISTEN_REOPEN_DELAYS_MS = [1000, 2000, 4000],
  wr = 1e4,
  vr = 5000,
  Mr = 3600000,
  br = 5,
  kr = 21600000,
  Rr = 5000,
  Ar = createLazyValue(() =>
    c({
      windowMax: T().int().min(1).max(100).optional(),
      parkDelayMinutes: T().min(1).max(1440).optional(),
    }),
  );
function On(e, t, o) {
  let r = getMcpClientState().listChangedRefetchHandlers,
    d = r.get(e) ?? {};
  ((d[t] = o), r.set(e, d));
}
function Ir(e, t, o, r) {
  let d = getMcpClientState().listChangedRefetchHandlers.get(e);
  if (d === void 0) return;
  let p = [
    ["toolsListChanged", "tools"],
    ["promptsListChanged", "prompts"],
    ["resourcesListChanged", "resources"],
  ];
  for (let [h, C] of p) {
    let A = r[h] ? d[C] : void 0;
    if (A === void 0) continue;
    (async () => A(REOPEN_REFETCH_REASON))().catch((w) => {
      logMCPDebug(t, `post-reopen list refetch failed: ${formatConnectionError(w, o)}`);
    });
  }
}
function armListenStreamReopen(e, t, o, r, d) {
  let p = r ?? e.autoOpenedSubscription;
  if (p === void 0 && e.getProtocolEra?.() !== "modern") return;
  if (p === void 0)
    logMCPDebug(
      t,
      "no auto-opened subscriptions/listen on a modern connection; running the listen open through the reopen machinery (no-op if the server advertises no listChanged capability)",
    );
  Or(e, t, o, p, d).catch((h) => {
    logMCPDebug(t, `subscriptions/listen re-open watcher stopped: ${formatConnectionError(h, o)}`);
  });
}
async function Or(e, t, o, r, d) {
  let p = r,
    h = 0,
    C = [],
    A = r === void 0 ? "connect" : "remote";
  for (;;) {
    if (p !== void 0) {
      let F = Date.now(),
        z = await p.closed;
      if (z === "local") return;
      if (e.transport === void 0) return;
      if (Date.now() - F >= wr) h = 0;
      ((A = z), (C = C.filter((Te) => Date.now() - Te < Mr)));
      let Q = Ar().safeParse(getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_listen_reopen_park_tuning", null)),
        O = Q.success ? Q.data : {},
        ne = O.windowMax ?? br,
        le =
          O.parkDelayMinutes !== void 0
            ? Math.round(O.parkDelayMinutes * 60000)
            : kr;
      if (
        C.length >= ne &&
        h < LISTEN_REOPEN_DELAYS_MS.length &&
        getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_listen_reopen_park", !0)
      ) {
        (logMCPDebug(
          t,
          `subscriptions/listen reopened ${C.length} times in the trailing window (the server keeps killing held streams); parking re-listen`,
        ),
          logEvent("tengu_mcp_listen_reopen", {
            mcpServerKeyHash: getMcpServerKeyHash(t),
            outcome: S("parked"),
            attempts: C.length,
            trigger: fromEnum(A),
            discoverSource: fromEnumOpt(d),
          }));
        let Te = Date.now() + Math.round(le * (0.8 + Math.random() * 0.4));
        while (Date.now() < Te) {
          if ((await sleep(Math.min(Rr, Te - Date.now())), e.transport === void 0))
            return;
          if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_listen_reopen_park", !0)) break;
        }
        h = 0;
      } else if (z === "graceful") {
        if (h >= LISTEN_REOPEN_DELAYS_MS.length)
          logMCPDebug(
            t,
            "subscriptions/listen keeps closing gracefully; giving up on re-listen",
          );
        else if (
          (logMCPDebug(
            t,
            "subscriptions/listen closed gracefully (server shutdown); re-listening after the redeploy grace window",
          ),
          await sleep(vr),
          e.transport === void 0)
        )
          return;
      } else
        logMCPDebug(
          t,
          h >= LISTEN_REOPEN_DELAYS_MS.length
            ? "subscriptions/listen stream keeps dropping; giving up on re-listen"
            : "subscriptions/listen stream dropped (remote); attempting to re-listen",
        );
    }
    let w = await Lr(e, t, o, h, A, d);
    if (w === void 0) return;
    (C.push(Date.now()),
      Ir(e, t, o, w.filter),
      (p = w.subscription),
      (h = w.delayIndex + 1));
  }
}
function Ro(e) {
  let t = e.getServerCapabilities(),
    o = {
      ...(t?.tools?.listChanged && { toolsListChanged: !0 }),
      ...(t?.prompts?.listChanged && { promptsListChanged: !0 }),
      ...(t?.resources?.listChanged && { resourcesListChanged: !0 }),
    };
  return Object.keys(o).length === 0 ? void 0 : o;
}
async function Lr(e, t, o, r, d, p) {
  let h = Ro(e);
  if (h === void 0) return;
  for (let A = r; A < LISTEN_REOPEN_DELAYS_MS.length; A++) {
    if (e.transport === void 0) return;
    if ((await sleep(LISTEN_REOPEN_DELAYS_MS[A] ?? 0), e.transport === void 0)) return;
    try {
      let w = await e.listen(h, { timeout: getMcpTimeoutMs() });
      return (
        logMCPDebug(
          t,
          d === "connect"
            ? `Opened subscriptions/listen stream from zero (connect-time listen never established; attempt ${A + 1})`
            : `Re-opened subscriptions/listen stream (attempt ${A + 1})`,
        ),
        logEvent("tengu_mcp_listen_reopen", {
          mcpServerKeyHash: getMcpServerKeyHash(t),
          outcome: d === "connect" ? S("opened_from_zero") : S("reopened"),
          attempts: A + 1,
          trigger: fromEnum(d),
          discoverSource: fromEnumOpt(p),
        }),
        { subscription: w, delayIndex: A, filter: h }
      );
    } catch (w) {
      logMCPDebug(t, `subscriptions/listen re-open attempt ${A + 1} failed: ${formatConnectionError(w, o)}`);
    }
  }
  if (e.transport === void 0) return;
  let C = Math.max(0, LISTEN_REOPEN_DELAYS_MS.length - r);
  logEvent("tengu_mcp_listen_reopen", {
    mcpServerKeyHash: getMcpServerKeyHash(t),
    outcome: C === 0 ? S("budget_exhausted") : S("gave_up"),
    attempts: C,
    trigger: fromEnum(d),
    discoverSource: fromEnumOpt(p),
  });
  return;
}
function getMcpToolTimeoutMs(e) {
  let o =
    (e?.timeout !== void 0 && e.timeout >= 1000 ? e.timeout : void 0) ??
    a.MCP_TOOL_TIMEOUT ??
    Er;
  return Math.min(Math.max(o, 1000), MAX_TIMER_DELAY_MS);
}
var xr = 300000,
  Nr = 1800000,
  Fr = new Set(["sse-ide", "ws-ide", "sdk"]);
function getMcpToolIdleTimeoutMs(e) {
  let t = e?.type ?? "stdio";
  if (Fr.has(t)) return 0;
  let o = a.CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT ?? (t === "stdio" ? Nr : xr);
  if (o <= 0) return 0;
  let r = e?.timeout !== void 0 && e.timeout >= 1000 ? e.timeout : 0;
  return Math.min(Math.max(o, r, 1000), getMcpToolTimeoutMs(e));
}
var Br = () => import.meta.require("../ClaudeinChrome/getClaudeInChromeMCPToolOverrides.9f9wpf77.js"),
  Ur = () => import.meta.require("../图片-截图-ComputerUse/buildSessionContext.s2wedcct.js"),
  MCP_TREE_ID = "v2",
  jr = 900000,
  zr = 14400000,
  qr = 90000,
  Vr = 60000;
async function isMcpAuthCached(e, t, o) {
  let d = (await readMcpNeedsAuthCache(o))[e];
  if (!d) return !1;
  if (t.type === "claudeai-proxy" && d.id !== t.id) return !1;
  if ((t.type === "stdio" || t.type === void 0) && t.pluginSource === void 0)
    return !1;
  if (
    (t.type === "stdio" || t.type === void 0) &&
    t.pluginSource !== void 0 &&
    d.id !== hashMcpServerConfig(t)
  )
    return !1;
  if (
    (t.type === "http" || t.type === "sse") &&
    t.pluginSource !== void 0 &&
    d.id !== void 0
  )
    return !1;
  let p =
      t.type === "claudeai-proxy" ||
      (t.pluginSource !== void 0 &&
        (t.type === "http" || t.type === "sse") &&
        !configProvidesOwnAuth(t)),
    h = d.ttlMs ?? (p ? zr : jr),
    C = Date.now() - d.timestamp;
  return C > -Vr && C < h;
}
async function Io(e, t) {
  let o = await e.write(getMcpNeedsAuthCacheStateKey(), jsonStringify(t), { publishDiscipline: "inPlace" });
  if (!o.ok)
    logMCPDebug("auth-cache", `needs-auth cache v5 write failed: ${describeStorageError(o.error)}`);
  return o.ok;
}
function Ln(e, t, o, r) {
  let d = getMcpClientState();
  d.authCacheWriteChain = d.authCacheWriteChain
    .then(async () => {
      let p = await readMcpNeedsAuthCache(r);
      if (
        ((p[e] = {
          timestamp: Date.now(),
          ...(t && { id: t }),
          ...(o !== void 0 && { ttlMs: o }),
        }),
        isHoverRestEnabled() && r !== void 0)
      ) {
        if (!(await Io(r, p))) return;
      } else {
        let h = getFileStorage(),
          C = getMcpNeedsAuthCachePath();
        (await h.mkdir(dirname(C)), await h.write(C, jsonStringify(p)));
      }
      invalidateMcpNeedsAuthCache();
    })
    .catch(() => {});
}
function removeMcpAuthCacheEntry(e, t) {
  let o = getMcpClientState(),
    r = o.authCacheWriteChain
      .then(async () => {
        let d = await readMcpNeedsAuthCache(t);
        if (!(e in d)) return;
        if ((delete d[e], isHoverRestEnabled() && t !== void 0)) {
          if (!(await Io(t, d))) return;
        } else await getFileStorage().write(getMcpNeedsAuthCachePath(), jsonStringify(d));
        invalidateMcpNeedsAuthCache();
      })
      .catch(() => {});
  return ((o.authCacheWriteChain = r), r);
}
function evictAllMcpMemosOnIdentityChange(e = new Set(), t = !0) {
  if (!isDiscoveryCacheEnabled()) return;
  if (t) markIdentityChanged();
  bumpIdentityEpoch();
  let o = (r) => {
    if (r) Jke(r, e);
  };
  if (!getMcpClientState().holdStaleReauthEntryForTest) ur().reauthInFlight.clear();
  (o(connectToServer.cache),
    o(fetchToolsForClient.cache),
    o(fetchCommandsForClient.cache),
    o(fetchResourcesForClient.cache),
    o(fetchResourceTemplatesForClient.cache),
    wt.invalidateMcpSkillsExcept(e));
}
function et(e, t) {
  let o = getMcpServerBaseUrl(e),
    r = t ? { mcpServerKeyHash: getMcpServerKeyHash(t) } : {};
  if (o) return { mcpServerBaseUrl: o, ...r };
  return r;
}
function emitMcpServerConnectionEvent(e, t, o) {
  let r = isToolDetailsLoggingEnabled(),
    d = t.pluginSource ? splitPluginId(t.pluginSource) : void 0,
    p = d && (isOfficialPluginScope(getPluginScope(d.name, d.marketplace, null)) || r);
  emitOtelEvent("mcp_server_connection", {
    status: o.status,
    transport_type: t.type ?? "stdio",
    server_scope: t.scope,
    duration_ms: String(Math.round(o.durationMs)),
    is_plugin: d !== void 0,
    ...(d && {
      plugin_id_hash: getPluginIdHash(d.name, d.marketplace),
      "plugin.name": p ? d.name : THIRD_PARTY_PLUGIN_LABEL,
    }),
    ...(o.errorCode && { error_code: String(sanitizeConnectErrorCodeForTelemetry(o.errorCode)) }),
    ...(r && { server_name: e, ...(o.error && { error: o.error }) }),
  });
}
async function Do(e, t, o, r, d, p, h, C) {
  ensureDiscoveryCacheAccount();
  let A = r instanceof AA,
    w = A ? r.issues[0] : void 0,
    F = w
      ? `Server OAuth metadata invalid: ${w.path.join(".") || "(root)"} \u2014 ${w.message}`
      : void 0;
  (logEvent("tengu_mcp_server_needs_auth", {
    transportType: fromEnum(o),
    ...(h ?? {}),
    ...(A && { cause: S("discovery_schema") }),
    ...et(t, e),
  }),
    logMCPDebug(
      e,
      `Authentication required for ${{ sse: "SSE", http: "HTTP", "claudeai-proxy": "claude.ai proxy" }[o]} server`,
    ));
  let Q = d && (t.type === "http" || t.type === "sse") && (await hasStoredRefreshToken(e, t)),
    O = p === void 0 || isCurrentIdentityEpoch(p);
  if (O) Ln(e, t.type === "claudeai-proxy" ? t.id : void 0, Q ? qr : void 0, C);
  if (isDiscoveryCacheUsable())
    if (O) await awaitDiscoveryCacheFlush(deleteDiscoveryCacheEntry(e, t));
    else
      logMCPDebug(
        e,
        "Discovery cache 401/403 purge skipped: identity changed since this connect round started (the current entry belongs to the new principal)",
      );
  return (
    logFeatureSad("mcp_connect", "mcp_connect_needs_auth"),
    { name: e, type: "needs-auth", config: t, error: F }
  );
}
var Kr = {
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
function zt({
  name: e,
  serverRef: t,
  transportType: o,
  errorCode: r,
  message: d,
  negotiation: p,
  displayDetail: h,
}) {
  logEvent("tengu_mcp_server_connection_failed", {
    transportType: fromEnum(o),
    errorCode: fromEnum(r),
    sdkGeneration: fromEnum(getMcpSdkGeneration()),
    negotiationMode: p.negotiationMode,
    probeFellBack: p.probeFellBack,
    listenSuppressed: p.listenSuppressed,
    negotiationDenylisted: p.negotiationDenylisted,
    discoverSource: p.discoverSource,
    listingPriorBurned: p.listingPriorBurned,
    ...et(t, e),
  });
  let { severity: C, featureErrorCode: A } = Kr[r];
  if (C === "bad") logFeatureBad("mcp_connect", A);
  else logFeatureSad("mcp_connect", A);
  return (
    logMCPError(e, d),
    {
      name: e,
      type: "failed",
      config: t,
      error: d,
      ...(h !== void 0 && { displayDetail: h }),
      errorCode: r,
    }
  );
}
function Gr(e, t, o, r, d, p) {
  let h = "api.anthropic.com";
  try {
    if ("url" in o) h = new URL(o.url).host;
  } catch {}
  let C = `HTTP ${d ?? 401}`,
    A = isFirstPartyDesignServerConfig(o),
    w;
  switch (e) {
    case "design_credential":
      w =
        d === 403
          ? `${h} rejected your /design-login credential (HTTP 403). Check that your account has access to Claude Design, or run /design-login to re-authorize it and retry.`
          : `${h} rejected your /design-login credential (${C}). Run /design-login to re-authorize it and retry.`;
      break;
    case "none":
      w = `${h} needs a claude.ai sign-in and Claude Code had no usable credential to send (${C}). Run ${A ? "/design-login" : "/login"} and retry.`;
      break;
    case "design_scoped_login":
    case "login": {
      if (d === 403 && A)
        w =
          e === "design_scoped_login"
            ? `${h} rejected your claude.ai login for Claude Design (HTTP 403) even though that login already includes Claude Design permissions, so this is most likely an account or project access problem. Check that your account has access to Claude Design; if it does, run /design-login and retry.`
            : `${h} rejected your claude.ai login for Claude Design (HTTP 403), most likely because a /login token carries no Claude Design access. Run /design-login and retry, or check that your account has access to Claude Design.`;
      else
        w =
          d === 403
            ? `${h} rejected your claude.ai login (HTTP 403). Your token ` +
              `may be missing a scope this server needs \u2014 run ${"/login"} and retry, or check that your account has access.`
            : `${h} rejected your claude.ai login (${C}). Run /login and retry.`;
      break;
    }
    default:
      return e;
  }
  return zt({
    name: t,
    serverRef: o,
    transportType: r,
    errorCode: "FIRST_PARTY_AUTH_REJECTED",
    message: w,
    negotiation: p,
  });
}
async function lo({
  name: e,
  serverRef: t,
  transportType: o,
  error: r,
  statusCode: d,
  sawAuthChallenge: p,
  hasUserAuthHeader: h,
  helperMintsAuthHeader: C,
  cliOwnedBearer: A,
  useFirstPartyAuth: w,
  firstPartyBearer: F,
  negotiation: z,
  roundEpoch: Q,
  storageV5: O,
}) {
  if (!(r instanceof UnauthorizedError || (r instanceof AA && p) || d === 401 || d === 403))
    return;
  if (h) {
    let le = sanitizeMessageText(
      r instanceof SdkHttpError && typeof r.data?.text === "string"
        ? r.data.text
        : r.message,
    );
    return zt({
      name: e,
      serverRef: t,
      transportType: o,
      negotiation: z,
      errorCode: "AUTH_HEADER_REJECTED",
      message:
        `Server rejected the configured Authorization header (HTTP ${d ?? 401}). ` +
        "Check that the token is valid for this MCP endpoint \u2014 OAuth fallback is " +
        "disabled when headers.Authorization is set.",
      ...(le !== "" && { displayDetail: `Error detail: ${le}` }),
    });
  }
  if (C) {
    let le = sanitizeMessageText(r.message);
    return zt({
      name: e,
      serverRef: t,
      transportType: o,
      negotiation: z,
      errorCode: "HEADERS_HELPER_AUTH_REJECTED",
      message:
        `Server rejected the Authorization header minted by the configured headersHelper (HTTP ${d ?? 401}). ` +
        "Check that the helper command returns a valid credential for this MCP endpoint \u2014 OAuth fallback is " +
        "disabled when the helper supplies Authorization.",
      ...(le !== "" && { displayDetail: `Error detail: ${le}` }),
    });
  }
  if (A)
    return zt({
      name: e,
      serverRef: t,
      transportType: o,
      negotiation: z,
      errorCode: "CLI_OWNED_BEARER_REJECTED",
      message: `Server rejected the session credential (HTTP ${d ?? 401}). It will be retried when the session credential is refreshed.`,
    });
  if (w) return Gr(F ?? "none", e, t, o, d, z);
  return Do(e, t, o, r, r instanceof UnauthorizedError || d === 401, Q, z, O);
}
function createCcrProxyFetch(e) {
  return async (t, o) => {
    let r = new Headers(o?.headers);
    if (!r.has("Authorization")) {
      let p = getSessionAccessToken();
      if (p) (getPresentedCredentialLog().record(p), r.set("Authorization", `Bearer ${p}`));
    }
    let d = getCcrTurnId();
    if ((r.delete(CCR_TURN_ID_HEADER), d)) r.set(CCR_TURN_ID_HEADER, d);
    return e(t, { ...o, headers: r });
  };
}
function createCliOwnedBearerFetch(e, t) {
  return async (o, r) => {
    let d = new Headers(r?.headers);
    if (!d.has("Authorization")) {
      let p = getCliOwnedBearerToken(t);
      if (p) (getPresentedCredentialLog().record(p), d.set("Authorization", `Bearer ${p}`));
    }
    return e(o, { ...r, headers: d, redirect: "error" });
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
  return async (o, r) => {
    let d = async () => {
      await checkAndRefreshOAuthTokenIfNeeded({ credentials: t });
      let z = isHoverRestEnabled() && t !== void 0 ? await getClaudeAIOAuthTokensAsync(t) : getClaudeAIOAuthTokens();
      if (!z) throw Error("No claude.ai OAuth token available");
      let Q = new Headers(r?.headers);
      return (
        getPresentedCredentialLog().record(z.accessToken),
        Q.set("Authorization", `Bearer ${z.accessToken}`),
        { response: await e(o, { ...r, headers: Q }), sentToken: z.accessToken }
      );
    };
    async function p(z) {
      if (
        z.status >= 400 &&
        z.headers.get("content-type")?.includes("text/event-stream")
      ) {
        let Q = await z.text(),
          O = Q.split(
            `
`,
          ).find((ne) => ne.startsWith("data: "));
        return new Response(O ? O.slice(6) : Q, {
          status: z.status,
          statusText: z.statusText,
          headers: z.headers,
        });
      }
      return z;
    }
    let { response: h, sentToken: C } = await d();
    if (h.status !== 401) return p(h);
    let A = h.headers.get("X-Mcp-Error-Code") ?? void 0;
    if (A)
      return (
        logEvent("tengu_mcp_claudeai_proxy_401", {
          tokenChanged: !1,
          proxyErrorCode: A,
        }),
        h
      );
    let w = await handleOAuth401Error(C, t).catch(() => !1);
    if ((logEvent("tengu_mcp_claudeai_proxy_401", { tokenChanged: w }), !w)) {
      let z = isHoverRestEnabled() && t !== void 0 ? await readFreshOAuthAccessToken(t) : getClaudeAIOAuthTokens()?.accessToken;
      if (!z || z === C) throw new ClaudeAiProxyBearerRejectedError();
    }
    let F = (await d()).response;
    if (F.status === 401 && !F.headers.get("X-Mcp-Error-Code")) throw new ClaudeAiProxyBearerRejectedError();
    return p(F);
  };
}
async function Qr(e, t) {
  if (new URL(e).pathname.startsWith("/v1/design/")) {
    let r = await getDesignAuthResolver()?.(t);
    if (r?.ok) {
      if (r.expanded)
        (setPendingScopeExpansionNotice(
          "Added user:design:read and user:design:write to your claude.ai login (for the Design MCP connector).",
        ),
          logEvent("tengu_mcp_first_party_scope_expanded", {
            pathPrefix: S("/v1/design/"),
          }));
      return { accessToken: r.accessToken, bearer: r.bearer };
    }
  }
  await checkAndRefreshOAuthTokenIfNeeded({ credentials: t });
  let o = isHoverRestEnabled() && t !== void 0 ? await getClaudeAIOAuthTokensAsync(t) : getClaudeAIOAuthTokens();
  if (!o?.accessToken) return;
  return {
    accessToken: o.accessToken,
    bearer: o.scopes?.includes("user:design:read")
      ? "design_scoped_login"
      : "login",
  };
}
async function parseFirstPartyNeedsConsentBody(e) {
  let t = getDesignConsentProvider();
  if (t === null) return null;
  let o;
  try {
    o = await e.clone().json();
  } catch {
    return null;
  }
  if (o == null || typeof o !== "object" || o.error !== "needs_consent")
    return null;
  let r = o.consent;
  return t.isConsentBit(r) ? r : null;
}
function withdrawForSharingWideningDesignMcpOp(e, t, o, r) {
  if (!t || !PLAN_INVALIDATING_OPERATIONS.has(o)) return;
  let d = r.project_id;
  if (typeof d === "string" && d.length > 0)
    (deleteApprovedPlansForProject(e, d), deletePlansForProject(e, d), deleteVerifiedProjectGrantsForProject(e, d), markProjectForRecard(e, d));
}
var GRANT_ELIGIBLE_DESIGN_WRITE_OPS = new Set(["write_files", "create_support_js", "copy_files"]);
function denyTokenlessFirstPartyDesignWrite(e, t, o) {
  if (!e || !GRANT_ELIGIBLE_DESIGN_WRITE_OPS.has(t)) return null;
  let r = o?.plan_token;
  if (typeof r === "string" && r.length > 0) return null;
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
var os = new Set([...GRANT_ELIGIBLE_DESIGN_WRITE_OPS, "finalize_plan", "delete_files", ...PLAN_INVALIDATING_OPERATIONS]);
function suppressDesignWriteAddRules(e, t) {
  return e && os.has(t);
}
function buildFirstPartyDesignConsentAsk(e, t, o) {
  return {
    behavior: "ask",
    message: e,
    updatedInput: { ...t, __consentNonce: o },
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
    !configHasAuthorizationHeader(e)
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
var is = 100;
function recordFirstPartyDesignConsentAsk(e, t, o) {
  let r = getMcpClientState().firstPartyDesignConsentAsks,
    d = r.get(e),
    p = d !== void 0 && d.bit === t,
    h = p ? d.nonce : randomUUID();
  (r.delete(e),
    r.set(e, {
      bit: t,
      nonce: h,
      askReachesUser: p ? d.askReachesUser && o : o,
    }));
  while (r.size > is) {
    let C = r.keys().next().value;
    if (C === void 0) break;
    r.delete(C);
  }
  return h;
}
function takeFirstPartyDesignConsentAsk(e, t) {
  if (e === void 0) return null;
  let o = getMcpClientState().firstPartyDesignConsentAsks,
    r = o.get(e) ?? null;
  if ((o.delete(e), r === null || t === void 0 || r.nonce !== t)) return null;
  return { bit: r.bit, askReachesUser: r.askReachesUser };
}
function withFirstPartyDesignConsentIntercept(e, t) {
  let {
    designSession: o,
    approvedConsentBit: r,
    consentAskReachesUser: d,
    credentials: p,
  } = t;
  return async (h) => {
    let C = getDesignConsentProvider();
    try {
      let A = await e(h);
      if (r !== null && !h.aborted) C?.seedDesignConsentBit(o, r, !0);
      return A;
    } catch (A) {
      if (!(A instanceof FirstPartyDesignNeedsConsentError) || !C) throw A;
      let w = A.consent;
      if (w !== r)
        throw (
          C.seedDesignConsentBit(o, w, !1),
          new R(
            `${C.consentPromptFor(w)} The user hasn't granted this yet \u2014 ask them to retry (the prompt will show on the next call) or run /design consent.`,
            "first-party design MCP needs_consent (not shown)",
          )
        );
      if (!d)
        throw (
          C.seedDesignConsentBit(o, w, !1),
          new R(
            `${C.consentPromptFor(w)} The user hasn't granted this \u2014 run /design consent to grant it (it can't be approved automatically in this permission mode).`,
            "first-party design MCP needs_consent (no prompt)",
          )
        );
      return (await C.postDesignConsent(o, w, p), e(h));
    }
  };
}
function createFirstPartyApiMcpFetch(e, t, o) {
  return async (r, d) => {
    if (new Headers(d?.headers).has("Authorization") || !pA(r) || !isFirstPartyProvider())
      return e(r, d);
    let h = async () => {
        let O = await Qr(r, t);
        if (((o.last = O?.bearer ?? "none"), !O))
          return { response: await e(r, d), sentToken: void 0 };
        let ne = O.accessToken;
        getPresentedCredentialLog().record(ne);
        let le = {
          ...Object.fromEntries(new Headers(d?.headers)),
          Authorization: `Bearer ${ne}`,
        };
        return { response: await e(r, { ...d, headers: le }), sentToken: ne };
      },
      C = async (O) => {
        if (O.response.status === 403 && O.sentToken) {
          let ne = await parseFirstPartyNeedsConsentBody(O.response);
          if (ne !== null) throw new FirstPartyDesignNeedsConsentError(ne);
        }
      },
      A = await h();
    await C(A);
    let { response: w, sentToken: F } = A;
    if (w.status !== 401 || !F) return w;
    if (!(await handleOAuth401Error(F, t).catch(() => !1))) {
      let O = isHoverRestEnabled() && t !== void 0 ? await readFreshOAuthAccessToken(t) : getClaudeAIOAuthTokens()?.accessToken;
      if (!O || O === F) return w;
    }
    let Q;
    try {
      Q = await h();
    } catch {
      return w;
    }
    return (await C(Q), Q.response);
  };
}
function buildSseStreamHeaders(e, t, o) {
  let r = new Headers({
    "User-Agent": getMCPUserAgent(),
    "Accept-Encoding": "identity",
    ...t,
  });
  new Headers(e).forEach((d, p) => r.set(p, d));
  for (let [d, p] of Object.entries(o)) r.set(d, p);
  return (r.set("Accept", "text/event-stream"), r);
}
var ps = new Set(["image/jpeg", "image/png", "image/gif", "image/webp"]);
function mo(e) {
  if (!e) return !1;
  let t = beforeFirst(e, ";").trim().toLowerCase();
  return ps.has(t === "image/jpg" ? "image/jpeg" : t);
}
var fo = 60000;
function getMcpRequestTimeoutMs(e) {
  let o =
    (e?.timeout !== void 0 && e.timeout >= 1000 ? e.timeout : void 0) ??
    a.MCP_TOOL_TIMEOUT;
  return o !== void 0 ? Math.min(Math.max(o, fo), MAX_TIMER_DELAY_MS) : fo;
}
function getArmedRequestTimeoutMs(e) {
  return Math.max(getMcpRequestTimeoutMs(e), getMcpTimeoutMs());
}
var fs = "application/json, text/event-stream";
function En(e) {
  return async (t, o) => {
    try {
      return await e(t, o);
    } catch (r) {
      rethrowFetchError(r, t);
    }
  };
}
function wrapFetchWithTimeout(e, t) {
  let o = getArmedRequestTimeoutMs(t);
  return async (r, d) => {
    if ((d?.method ?? "GET").toUpperCase() === "GET") return e(r, d);
    let h = new Headers(d?.headers);
    if (!h.has("accept")) h.set("accept", fs);
    if (shouldPropagateTraceContext()) {
      let F = getCurrentTraceparent();
      if (F && !h.has("traceparent")) h.set("traceparent", F);
    }
    let C = new AbortController(),
      A = setTimeout(
        (F) =>
          F.abort(new DOMException("The operation timed out.", "TimeoutError")),
        o,
        C,
      );
    A.unref?.();
    let w = d?.signal;
    if (w?.aborted) C.abort(w.reason);
    else w?.addEventListener("abort", () => C.abort(w.reason), { once: !0 });
    try {
      return await e(r, { ...d, headers: h, signal: C.signal });
    } finally {
      clearTimeout(A);
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
var ys = ["mcp__ide__executeCode", "mcp__ide__getDiagnostics"];
function No(e) {
  return !e.startsWith("mcp__ide__") || ys.includes(e);
}
function _s(e) {
  return No(e.name);
}
function on(e, t) {
  let o = getFeatureValue_CACHED_MAY_BE_STALE(e, []);
  if (!Array.isArray(o) || o.length === 0) return !1;
  if (o.includes("*")) return !0;
  if (!("url" in t) || typeof t.url !== "string") return !1;
  try {
    let r = new URL(t.url).hostname.toLowerCase();
    return o.some((d) => {
      if (typeof d !== "string" || d === "") return !1;
      let p = d.toLowerCase();
      return r === p || r.endsWith(`.${p}`);
    });
  } catch {
    return !1;
  }
}
function isSchemaNormalizeEnabledFor(e) {
  return on("tengu_mcp_normalize_root_combinators", e);
}
function isSchemaApiValidateEnabledFor(e) {
  return on("tengu_mcp_drop_invalid_tool_schemas", e);
}
function setHoldStaleReauthEntryForTest(e) {
  if (e) throw Error("setHoldStaleReauthEntryForTest is test-only");
  getMcpClientState().holdStaleReauthEntryForTest = e;
}
function setMcpReauthDecisionSinkForTest(e) {
  getMcpClientState().reauthDecisionSinkForTest = e;
}
function getRootsListResponse(e = !1) {
  let t = [];
  if (e)
    try {
      t = [getPluginToolStagingDir()];
    } catch (d) {
      logForDebugging(`MCP: staging root unavailable, omitted from roots/list: ${l(d)}`);
    }
  let o = new Set(),
    r = [];
  for (let d of [he(), ...getAdditionalWorkingDirectories(), ...t]) {
    let p = pathToFileURL(d).href;
    if (o.has(p)) continue;
    (o.add(p), r.push({ uri: p }));
  }
  return { roots: r };
}
var Es = new Set(["documents"]);
function serverReceivesPluginToolStagingRoot(e) {
  if (getCurrentPlatform() === "windows") return !1;
  if (!e.pluginSource) return !1;
  try {
    return Es.has(splitPluginId(e.pluginSource).name.toLowerCase());
  } catch {
    return !1;
  }
}
function notifyMcpRootsListChanged() {
  for (let e of ur().liveClients)
    e.sendRootsListChanged().catch((t) => {
      logForDebugging(`MCP: failed to send roots/list_changed: ${formatErrorWithCode(t)}`);
    });
}
var Ps = new Set(Object.values(ProtocolErrorCode)),
  ws = new Set([
    "http://json-schema.org/draft-04/schema",
    "https://json-schema.org/draft-04/schema",
    "http://json-schema.org/draft-06/schema",
    "https://json-schema.org/draft-06/schema",
    "http://json-schema.org/draft-07/schema",
    "https://json-schema.org/draft-07/schema",
    "http://json-schema.org/draft/2019-09/schema",
    "https://json-schema.org/draft/2019-09/schema",
    "http://json-schema.org/schema",
    "https://json-schema.org/schema",
  ]);
class LegacyDialectToleratingValidator {
  inner = new AjvJsonSchemaValidator();
  getValidator(e) {
    let t = e.$schema;
    if (t !== void 0 && ws.has(t.replace(/#$/, ""))) {
      let { $schema: o, ...r } = e;
      return this.inner.getValidator(r);
    }
    return this.inner.getValidator(e);
  }
}
var vs = [
    ["ECONNRESET", "Connection reset - server may have crashed or restarted"],
    ["ETIMEDOUT", "Connection timeout - network issue or server unresponsive"],
    ["ECONNREFUSED", "Connection refused - server may be down"],
    ["EPIPE", "Broken pipe - server closed connection unexpectedly"],
    ["EHOSTUNREACH", "Host unreachable - network connectivity issue"],
    ["ESRCH", "Process not found - stdio server process terminated"],
    ["spawn", "Failed to spawn process - check command and permissions"],
  ],
  bs = 3000,
  ks = 5000,
  Rs = 5000,
  Is = new Set(["http", "claudeai-proxy", "ccr-proxy", "stdio"]);
function Ht() {
  let e = getMcpTimeoutMs();
  return Math.max(e - Rs, Math.floor(e / 3));
}
function resolveMcpNegotiationTransportKind(e, { inProcess: t, ccrProxy: o }) {
  if (t) return "in-process";
  switch (e) {
    case "http":
      return o ? "ccr-proxy" : "http";
    case "sse":
      return "sse";
    case "ws":
      return "ws";
    case "sse-ide":
    case "ws-ide":
      return "ide";
    case "claudeai-proxy":
      return "claudeai-proxy";
    case "sdk":
      return "sdk-control";
    case "stdio":
    case void 0:
      return "stdio";
  }
}
function isMcpNegotiationDenylisted(e) {
  return on("tengu_mcp_negotiation_server_denylist", e);
}
function isMcpListenDenylisted(e) {
  return on("tengu_mcp_listen_server_denylist", e);
}
function getMcpVersionNegotiation(e, t, o) {
  let r = a.MCP_PROTOCOL_NEGOTIATION,
    d = r === "legacy" || r === "auto" ? r : void 0;
  if (r !== void 0 && d === void 0)
    logForDebugging(
      `MCP_PROTOCOL_NEGOTIATION=${r} is invalid; expected 'legacy' or 'auto' \u2014 ignoring`,
      { level: "warn" },
    );
  if (d === "legacy") return { mode: "legacy" };
  let p = { timeoutMs: Math.min(ks, Math.floor(getMcpTimeoutMs() / 3)) };
  if (d === "auto") {
    if (!Is.has(e)) return { mode: "legacy" };
    let C = { timeoutMs: Math.min(bs, Math.floor(getMcpTimeoutMs() / 3)) };
    return e === "stdio"
      ? { mode: "auto", probe: C }
      : { mode: "auto", probe: p };
  }
  let h = (() => {
    switch (e) {
      case "http":
        return getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_protocol_negotiation_http", !1) === !0
          ? { mode: "auto", probe: p }
          : { mode: "legacy" };
      case "claudeai-proxy":
        return getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_protocol_negotiation_claudeai", !1) === !0
          ? { mode: "auto", probe: p }
          : { mode: "legacy" };
      case "stdio":
        return { mode: "legacy" };
      case "ccr-proxy":
        return getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_protocol_negotiation_ccr", !1) === !0
          ? { mode: "auto", probe: p }
          : { mode: "legacy" };
      case "sse":
      case "ws":
      case "ide":
      case "in-process":
      case "sdk-control":
        return { mode: "legacy" };
    }
  })();
  if (h.mode === "auto" && t !== void 0 && (o ?? isMcpNegotiationDenylisted(t))) {
    let C = "a url-less server (the '*' entry)";
    if ("url" in t && typeof t.url === "string")
      try {
        C = new URL(t.url).hostname;
      } catch {
        C = "a server with an unparseable url";
      }
    return (
      logForDebugging(
        `MCP era negotiation denylist matched ${C}; the legacy handshake applies`,
      ),
      { mode: "legacy" }
    );
  }
  return h;
}
var Ls = createLazyValue(() => it({ cacheScope: k("public"), ttlMs: T().positive() }));
function getListingDiscoverPrior(e) {
  if (e.type !== "claudeai-proxy" || e.stateless === !0) return;
  let t = getMcpDiscoverProjectionPrior();
  if (t === "off") return;
  if (getMcpClientState().burnedListingDiscoverPriors.has(e.id)) return;
  if (e.discoverSupport === "legacy") return { kind: "legacy" };
  if (
    t !== "all" ||
    e.discoverSupport !== "supported" ||
    e.cachedDiscoverResponse == null
  )
    return;
  let o = DiscoverResultSchema.safeParse(e.cachedDiscoverResponse);
  if (!o.success) {
    logForDebugging(
      `[claudeai-mcp] cached_discover_response for ${e.id} failed DiscoverResult validation \u2014 probing on the wire`,
    );
    return;
  }
  if (!o.data.supportedVersions.includes(MCP_PROTOCOL_VERSION_2026_07_28)) {
    logForDebugging(
      `[claudeai-mcp] cached_discover_response for ${e.id} lists no protocol version this client speaks \u2014 probing on the wire`,
    );
    return;
  }
  if (!Ls().safeParse(e.cachedDiscoverResponse).success) {
    logForDebugging(
      `[claudeai-mcp] cached_discover_response for ${e.id} is not declared publicly cacheable \u2014 probing on the wire`,
    );
    return;
  }
  return { kind: "modern", discover: o.data };
}
function burnListingDiscoverPrior(e) {
  if (e.type === "claudeai-proxy") getMcpClientState().burnedListingDiscoverPriors.add(e.id);
}
function Ot(e) {
  return e === "initialize" || e === "tools/list";
}
function Ho(e, t) {
  if (
    e === ErrorCode.UnsupportedProtocolVersion ||
    e === ErrorCode.MissingRequiredClientCapability
  )
    return "rpc_era";
  if (e === ErrorCode.InvalidRequest || (e === ErrorCode.MethodNotFound && Ot(t)))
    return "rpc_session";
  return;
}
function listingPriorRejectionReason(e, t) {
  if (e instanceof ProtocolError) return Ho(e.code, t);
  if (e instanceof SdkHttpError) {
    if (e.status === 400 || ((e.status === 404 || e.status === 405) && Ot(t)))
      return "http_4xx";
  }
  return;
}
function wn(e) {
  let t = new R(e, "MCP connection timeout");
  if (getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_connect_timeout_retry", !0))
    return Object.assign(t, { code: "CONNECT_TIMEOUT" });
  return t;
}
var connectToServer = lct(
  async (e, t, o, r, d) => {
    Fn();
    let p = Date.now(),
      h = ir(),
      C = getAdditionalWorkingDirectories(),
      A = t.type ?? "stdio";
    if ((writeDiagnosticsEvent("info", "mcp_connect_starting", { transport: A }), isMcpServerUrlMissing(t))) {
      let E = t.configError ?? "No URL configured for this server";
      return (
        logMCPDebug(e, E),
        writeDiagnosticsEvent("info", "mcp_connect_skipped", {
          transport: A,
          reason: "unconfigured",
        }),
        {
          name: e,
          type: "failed",
          config: t,
          error: E,
          errorCode: "UNCONFIGURED",
        }
      );
    }
    {
      let E = t.configError;
      if (!E && "url" in t)
        try {
          new URL(t.url);
        } catch {
          E =
            "'url' is not a valid URL. Update the server's config and reconnect.";
        }
      if (E)
        return (
          logEvent("tengu_mcp_server_config_invalid", {
            transportType: fromEnum(t.type ?? "stdio"),
            field: S("url"),
            source: S(t.configError ? "loader" : "connect"),
          }),
          logMCPDebug(e, E),
          logMCPError(e, E),
          writeDiagnosticsEvent("warn", "mcp_connect_failed", {
            transport: A,
            duration_ms: Date.now() - p,
            reason: "invalid_config",
          }),
          logFeatureBad("mcp_connect", "mcp_connect_invalid_config"),
          {
            name: e,
            type: "failed",
            config: t,
            error: E,
            errorCode: "INVALID_CONFIG",
          }
        );
    }
    let w,
      F,
      z = !1,
      Q = !1,
      O,
      ne,
      le,
      Te,
      Me,
      $e,
      N,
      re = (E) => {
        (($e = E), (N = fromEnumOpt(E)));
      },
      I = !1,
      L = !1,
      Se = () => {
        if (ie?.mode !== "auto" || !ne) return;
        return fromEnumOpt(no(ne));
      },
      ie,
      _e = isMcpListenDenylisted(t),
      ee = isMcpNegotiationDenylisted(t),
      W = () => {
        if (ie?.mode !== "auto" || Te !== void 0) return;
        let E = O?._anthropicProbeLegacyEvidence;
        if (E === "id-mismatch") Te = S("probe_id_mismatch");
        else if (E === "malformed") Te = S("probe_malformed");
        else if (E === "stream-end") Te = S("probe_stream_end");
        if (Te !== void 0)
          logMCPDebug(
            e,
            `era probe classified the server legacy in-SDK (${String(E)}); the 2025 handshake was used for this connect attempt`,
          );
      };
    try {
      let Ue = function () {
          let D = Date.now();
          for (let _ of Ae.activeCallWatchdogs)
            if (_.armedAt === 0) _.armedAt = D;
        },
        E = isBridgeCarrierServer(e, t),
        ue = hasCliOwnedBearerProvider(t),
        ae = (t.type === "sse" || t.type === "http") && configHasAuthorizationHeader(t),
        se =
          t.type === "sse" || t.type === "http" || t.type === "ws"
            ? await fct(e, t)
            : {},
        Ie =
          (t.type === "sse" || t.type === "http") &&
          !!t.headersHelper &&
          hasAuthorizationHeader(se),
        Ce =
          (t.type === "sse" || t.type === "http") &&
          !ae &&
          !Ie &&
          !ue &&
          !E &&
          pA(t.url) &&
          isFirstPartyProvider() &&
          (!!(isHoverRestEnabled() && d !== void 0 ? await getClaudeAIOAuthTokensAsync(d) : getClaudeAIOAuthTokens())?.accessToken ||
            (await hasFirstPartyDesignAuth(d)));
      if (Ce)
        logEvent("tengu_mcp_first_party_auto_auth", {
          transportType: fromEnum(t.type),
          ...et(t, e),
        });
      let Be = {};
      if (t.type === "sse") {
        recordPresentedHeaders(t.headers, se);
        let D = ae || Ie || Ce || ue ? void 0 : new z3e(e, t);
        F = D;
        let _ = await resolveProxyFetchOptions(t.url),
          U = vt(En(createFetchWithInit(void 0, _)));
        if (D) U = yct(U, D);
        if (((U = wrapFetchWithTimeout(U, t)), Ce)) U = createFirstPartyApiMcpFetch(U, d, Be);
        let Y = {
            authProvider: D,
            skipIssuerMetadataValidation: !0,
            fetch: U,
            requestInit: {
              ..._,
              headers: {
                "User-Agent": getMCPUserAgent(),
                "Accept-Encoding": "identity",
                ...se,
              },
            },
          },
          Re = En(async (qe, Je) => {
            let Ke = {},
              st = await D?.tokens();
            if (st) Ke.Authorization = `Bearer ${st.access_token}`;
            let He = await resolveProxyFetchOptions(String(qe));
            return fetch(qe, {
              ...Je,
              ...He,
              headers: buildSseStreamHeaders(Je?.headers, Ke, se),
            });
          });
        ((Y.eventSourceInit = {
          fetch: vt(D ? yct(Re, D) : Ce ? createFirstPartyApiMcpFetch(Re, d, Be) : Re),
        }),
          (O = new SSEClientTransport(new URL(t.url), Y)),
          logMCPDebug(e, "SSE transport initialized, awaiting connection"));
      } else if (t.type === "sse-ide") {
        logMCPDebug(e, `Setting up SSE-IDE transport to ${redactUrl(t.url)}`);
        let D = {
          fetch: vt(globalThis.fetch),
          requestInit: {
            headers: { "User-Agent": getMCPUserAgent(), "Accept-Encoding": "identity" },
          },
        };
        O = new SSEClientTransport(new URL(t.url), D);
      } else if (t.type === "ws-ide") {
        let D = getWebSocketTLSOptions();
        getPresentedCredentialLog().record(t.authToken);
        let _ = {
            "User-Agent": getMCPUserAgent(),
            ...(t.authToken && {
              "X-Claude-Code-Ide-Authorization": t.authToken,
            }),
          },
          U = new globalThis.WebSocket(t.url, {
            protocols: ["mcp"],
            headers: _,
            proxy: getWebSocketProxyUrl(t.url),
            tls: D || void 0,
          });
        O = new ASe(U, (Y) => JSONRPCMessageSchema.parse(Y));
      } else if (t.type === "ws") {
        (recordPresentedHeaders(t.headers, se),
          logMCPDebug(e, `Initializing WebSocket transport to ${redactUrl(t.url)}`));
        let D = getWebSocketTLSOptions(),
          _ = E ? getSessionAccessToken() : null;
        getPresentedCredentialLog().record(_ ?? void 0);
        let U = {
            "User-Agent": getMCPUserAgent(),
            ...(_ && { Authorization: `Bearer ${_}` }),
            ...se,
          },
          Y = redactHeaders(U);
        logMCPDebug(
          e,
          `WebSocket transport options: ${jsonStringify({ url: redactUrl(t.url), headers: Y, hasSessionAuth: !!_ })}`,
        );
        let fe = new globalThis.WebSocket(t.url, {
          protocols: ["mcp"],
          headers: U,
          proxy: getWebSocketProxyUrl(t.url),
          tls: D || void 0,
        });
        O = new ASe(fe, (Re) => JSONRPCMessageSchema.parse(Re));
      } else if (t.type === "http") {
        (recordPresentedHeaders(t.headers, se),
          logMCPDebug(e, `Initializing HTTP transport to ${redactUrl(t.url)}`),
          logMCPDebug(e, `Node version: ${process.version}, Platform: darwin`),
          logMCPDebug(
            e,
            `Environment: ${jsonStringify({ NODE_OPTIONS: a.NODE_OPTIONS || "not set", UV_THREADPOOL_SIZE: a.UV_THREADPOOL_SIZE || "default", HTTP_PROXY: sanitizeUrl(a.HTTP_PROXY || "not set"), HTTPS_PROXY: sanitizeUrl(a.HTTPS_PROXY || "not set"), NO_PROXY: a.NO_PROXY || "not set" })}`,
          ));
        let D = ae || Ie || Ce || ue ? void 0 : new z3e(e, t);
        F = D;
        let _ = await resolveProxyFetchOptions(t.url),
          U = vt(En(createFetchWithInit(void 0, _)));
        if (D) U = yct(U, D);
        if (((U = wrapFetchWithTimeout(U, t)), Ce)) U = createFirstPartyApiMcpFetch(U, d, Be);
        if (E) U = createCcrProxyFetch(U);
        if (ue) U = createCliOwnedBearerFetch(U, t);
        let Y = {
            authProvider: D,
            skipIssuerMetadataValidation: !0,
            fetch: U,
            requestInit: {
              ..._,
              headers: {
                "User-Agent": getMCPUserAgent(),
                "Accept-Encoding": "identity",
                ...se,
              },
            },
          },
          fe = Y.requestInit?.headers ? redactHeaders(Y.requestInit.headers) : void 0;
        (logMCPDebug(
          e,
          `HTTP transport options: ${jsonStringify({ url: redactUrl(t.url), headers: fe, hasAuthProvider: !!D, timeoutMs: getArmedRequestTimeoutMs(t) })}`,
        ),
          (le = () => new StreamableHTTPClientTransport(new URL(t.url), Y)),
          (O = le()),
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
          !(isHoverRestEnabled() && d !== void 0 ? await getClaudeAIOAuthTokensAsync(d) : getClaudeAIOAuthTokens()))
        )
          throw Error("No claude.ai OAuth token found");
        let _ = getOauthConfig(),
          U = `${_.MCP_PROXY_URL}${_.MCP_PROXY_PATH.replace("{server_id}", t.id)}`;
        logMCPDebug(e, `Using claude.ai proxy at ${U}`);
        let Y = createClaudeAiProxyFetch(vt(globalThis.fetch), d),
          fe = getProxyFetchOptions({ url: U }),
          qe = {
            fetch: Tt(t) ? so(wrapFetchWithTimeout(Y, t), U) : wrapFetchWithTimeout(Y, t),
            requestInit: {
              ...fe,
              headers: {
                "User-Agent": getMCPUserAgent(),
                "Accept-Encoding": "identity",
                "X-Mcp-Client-Session-Id": K(),
              },
            },
          };
        ((le = () => new StreamableHTTPClientTransport(new URL(U), qe)),
          (O = le()),
          logMCPDebug(e, "claude.ai proxy transport created successfully"));
      } else if (isStdioMcpServer(t) && isClaudeInChromeMCPServer(e)) {
        let { isClaudeInChromeAllowed: D } =
          await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js");
        if (!D())
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
        let { createChromeContext: _ } = await import("../ClaudeinChrome/createChromeContext.ny2380rf.js"),
          { createChromeSocketClient: U, createClaudeForChromeMcpServer: Y } =
            await import("../../01-核心基础设施/共享小工具-未细化/createChromeSocketClient.s4c4rtzf.js"),
          { createLinkedTransportPair: fe } =
            await import("../../01-核心基础设施/共享小工具-未细化/createLinkedTransportPair.qtywxtch.js"),
          { setChromeBinding: Re } = await import("../ClaudeinChrome/setChromeBinding.wm1nbm73.js"),
          { registerChromeTabGroupCleanup: qe } =
            await import("../权限系统/registerChromeTabGroupCleanup.epxd464c.js"),
          Je = _(t.env, {
            availabilityFunnel: !0,
            credentials: d,
            bearerGate: async () => D(),
          }),
          Ke = U(Je);
        (Re(Je, Ke), qe(), (w = Y(Je, Ke)));
        let [st, He] = fe();
        (await w.connect(He),
          (O = st),
          logMCPDebug(e, "In-process Chrome MCP server started"));
      } else if (isStdioMcpServer(t) && isComputerUseMcpServer(e)) {
        let { createComputerUseMcpServerForCli: D } =
            await import("../图片-截图-ComputerUse/runComputerUseMcpServer.cvpyez80.js"),
          { createLinkedTransportPair: _ } =
            await import("../../01-核心基础设施/共享小工具-未细化/createLinkedTransportPair.qtywxtch.js");
        w = await D();
        let [U, Y] = _();
        (await w.connect(Y),
          (O = U),
          logMCPDebug(e, "In-process Computer Use MCP server started"));
      } else if (t.type === "stdio" || !t.type) {
        let D = a.CLAUDE_CODE_SHELL_PREFIX || t.command,
          _ = a.CLAUDE_CODE_SHELL_PREFIX
            ? [jo([t.command, ...t.args])]
            : t.args,
          {
            command: U,
            args: Y,
            pending: fe,
            capped: Re,
          } = isMcpServerUsedByHooks(e)
            ? { command: D, args: _, pending: !1, capped: !1 }
            : yxt("mcp", D, _);
        ((z = fe), (Q = Re));
        let qe = shouldUseMcpAllowlistEnv() ? { ...un(), ...agentProxyEnv() } : subprocessEnv(),
          {
            CLAUDE_CODE_CHILD_SESSION: Je,
            CLAUDE_CODE_CHROME_MCP_ORG_DENIED: Ke,
            ...st
          } = qe;
        ((ne = {
          command: U,
          args: Y,
          env: {
            ...st,
            CLAUDE_PROJECT_DIR: sn(),
            CLAUDE_CODE_SESSION_ID: K(),
            CLAUDECODE: "1",
            ...t.env,
            ...(!isPolicyAllowed("allow_claude_browser_extension") && {
              CLAUDE_CODE_CHROME_MCP_ORG_DENIED: "1",
            }),
          },
          stderr: "pipe",
        }),
          (O = new St(ne)));
      } else throw Error(`Unsupported server type: ${t.type}`);
      let De,
        Oe,
        Fe = "",
        X = () => {
          if (t.type === "stdio" || !t.type) {
            let D = O;
            if (D.stderr instanceof Cr)
              ((Oe = D.stderr),
                (De = (_) => {
                  if (Fe.length < 67108864)
                    try {
                      Fe += _.toString();
                    } catch {}
                }),
                Oe.on("data", De));
          }
        };
      (X(),
        (ie = getMcpVersionNegotiation(
          resolveMcpNegotiationTransportKind(t.type, { inProcess: w !== void 0, ccrProxy: isCcrProxyConfig(t) }),
          t,
          ee,
        )),
        (Me = ie.mode === "auto" ? getListingDiscoverPrior(t) : void 0));
      let de = (D) => {
          let _ = new Client(
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
              websiteUrl: CLAUDE_CODE_URL,
            },
            {
              capabilities: getMcpClientCapabilities(),
              jsonSchemaValidator: new LegacyDialectToleratingValidator(),
              versionNegotiation: D,
              ...(_e
                ? {}
                : {
                    listChanged: {
                      tools: {
                        autoRefresh: !1,
                        debounceMs: 0,
                        onChanged: () => {},
                      },
                      prompts: {
                        autoRefresh: !1,
                        debounceMs: 0,
                        onChanged: () => {},
                      },
                      resources: {
                        autoRefresh: !1,
                        debounceMs: 0,
                        onChanged: () => {},
                      },
                    },
                  }),
            },
          );
          return (
            _.setRequestHandler(
              "roots/list",
              async () => (
                logMCPDebug(e, "Received ListRoots request from server"),
                getRootsListResponse(serverReceivesPluginToolStagingRoot(t))
              ),
            ),
            _
          );
        },
        V = de(ie);
      if (t.type === "http") logMCPDebug(e, "Client created, setting up request handler");
      if (
        (logMCPDebug(e, `Starting connection with timeout of ${getMcpTimeoutMs()}ms`),
        t.type === "http")
      ) {
        logMCPDebug(e, `Testing basic HTTP connectivity to ${redactUrl(t.url)}`);
        try {
          let D = new URL(t.url),
            _ = redactUrl(D.href),
            U = URL.canParse(_) ? new URL(_) : void 0;
          if (
            (logMCPDebug(
              e,
              U
                ? `Parsed URL: host=${U.hostname}, port=${U.port || "default"}, protocol=${U.protocol}`
                : `Parsed URL: ${_}`,
            ),
            D.hostname === "127.0.0.1" || D.hostname === "localhost")
          )
            logMCPDebug(e, `Using loopback address: ${D.hostname}`);
        } catch {
          logMCPDebug(e, `Failed to parse URL: ${redactUrl(t.url)}`);
        }
      }
      let Pe = oo(t),
        be = ro(t);
      if (Tt(t)) {
        if (
          (logMCPDebug(
            e,
            Pe
              ? "Stateless claudeai-proxy \u2014 resolving MCP initialize from cached projection"
              : "Stateless claudeai-proxy \u2014 no cached projection; real initialize, GET SSE suppressed",
          ),
          be !== void 0)
        )
          logMCPDebug(
            e,
            be === "method-not-found"
              ? "Stateless claudeai-proxy \u2014 server/discover resolved locally as legacy (method-not-found)"
              : "Stateless claudeai-proxy \u2014 resolving server/discover from cached projection",
          );
        gn(O, Pe, be);
      }
      let Ee = (D) => {
        let _ = D instanceof SdkHttpError ? D.status : void 0;
        return (
          D instanceof UnauthorizedError ||
          (D instanceof Error && D.name === "UnauthorizedError") ||
          (D instanceof AA && F?.sawAuthChallenge === !0) ||
          D instanceof iI ||
          (t.type === "claudeai-proxy" && isClaudeAiBearerRejectedError(D)) ||
          _ === 401 ||
          _ === 403
        );
      };
      if (ie.mode === "auto")
        re(
          Me !== void 0
            ? Me.kind === "modern"
              ? "listing_body"
              : "listing_legacy"
            : Tt(t) && (be !== void 0 || Pe !== void 0)
              ? "stateless_local"
              : "wire",
        );
      let te,
        Ye =
          Me !== void 0
            ? (async (D, _) => {
                if (
                  (logMCPDebug(
                    e,
                    D.kind === "modern"
                      ? "claude.ai proxy \u2014 adopting the /v1/mcp_servers discover projection (2026-07-28 era; no server/discover round trip)"
                      : "claude.ai proxy \u2014 /v1/mcp_servers projects a legacy peer; skipping the server/discover probe",
                  ),
                  await V.connect(_, { timeout: Ht(), prior: D }),
                  D.kind !== "modern" || _e)
                )
                  return;
                let U = Ro(V);
                if (U === void 0) return;
                try {
                  let Y = await V.listen(U, { timeout: Ht() });
                  if (V.transport === void 0) return;
                  te = Y;
                } catch (Y) {
                  if (Ee(Y) || listingPriorRejectionReason(Y, "subscriptions/listen") !== void 0)
                    throw Y;
                  logMCPDebug(
                    e,
                    `connect-time subscriptions/listen did not establish (${truncateToCodeUnits(formatConnectionError(Y, t), 200)}); proceeding without it`,
                  );
                }
              })(Me, O)
            : ie.mode === "auto"
              ? V.connect(O, { timeout: Ht() })
              : V.connect(O, { timeout: getMcpTimeoutMs() }),
        ze = !1,
        ye = new Promise((D, _) => {
          let U = setTimeout(() => {
            ze = !0;
            let Y = Date.now() - p;
            if (
              (logMCPDebug(
                e,
                `Connection timeout triggered after ${Y}ms (limit: ${getMcpTimeoutMs()}ms)`,
              ),
              w)
            )
              w.close().catch(() => {});
            (O?.close().catch(() => {}),
              _(wn(`MCP server "${e}" connection timed out after ${getMcpTimeoutMs()}ms`)));
          }, getMcpTimeoutMs());
          Ye.then(
            () => {
              clearTimeout(U);
            },
            (Y) => {
              clearTimeout(U);
            },
          );
        });
      try {
        try {
          await Promise.race([Ye, ye]);
        } catch (_) {
          let U =
              ie?.mode === "auto" &&
              _ instanceof SdkError &&
              _.code === ProtocolErrorCode.EraNegotiationFailed,
            Y =
              ie?.mode === "auto" &&
              _ instanceof SdkError &&
              _.code === ProtocolErrorCode.RequestTimeout &&
              O?._anthropicProbeTimedOut === !0;
          if (U) {
            let He = _.data;
            if (
              (typeof He === "object" && He !== null && "cause" in He
                ? He.cause
                : _.cause) instanceof iI
            )
              throw _;
          }
          let fe = Me !== void 0 && le !== void 0 && !ze && !Ee(_),
            Re = { mode: "legacy" };
          if (fe && Me !== void 0 && le) {
            let He =
                listingPriorRejectionReason(
                  _,
                  Me.kind === "modern" ? "subscriptions/listen" : "initialize",
                ) ??
                (_ instanceof SdkError && _.code === ProtocolErrorCode.EraNegotiationFailed
                  ? "rpc_era"
                  : void 0),
              lt = truncateToCodeUnits(formatConnectionError(_, t), 200);
            if (He !== void 0)
              (logMCPDebug(
                e,
                `the upstream rejected a connect built from the /v1/mcp_servers discover projection (${lt}); discarding the projection for this connector and re-probing server/discover on a fresh transport`,
              ),
                burnListingDiscoverPrior(t),
                (I = !0),
                logEvent("tengu_mcp_listing_prior_rejected", {
                  phase: S("connect"),
                  priorKind: fromEnum(Me.kind),
                  reason: fromEnum(He),
                  transportType: S("claudeai-proxy"),
                  ...et(t, e),
                }));
            else
              logMCPDebug(
                e,
                `connect built from the /v1/mcp_servers discover projection failed (${lt}); retrying this dial with a wire probe, projection kept`,
              );
            ((L = !0),
              (Me = void 0),
              re("wire"),
              (te = void 0),
              (Re = ie ?? Re),
              await O.close().catch(() => {}),
              (O = le()));
          } else if (U && (t.type === "stdio" || !t.type) && ne !== void 0) {
            if (
              (logMCPDebug(
                e,
                "version negotiation probe closed the stdio server (rmcp-class pre-init hard close); respawning pinned legacy",
              ),
              (Te = S("closed")),
              await O.close().catch(() => {}),
              De && Oe)
            )
              Oe.off("data", De);
            if (Fe) (logMCPDebug(e, `Probe-closed server stderr: ${Fe}`), (Fe = ""));
            ((O = new St(ne)), X());
          } else if ((U || Y) && le !== void 0) {
            if (
              (logMCPDebug(
                e,
                Y
                  ? `version negotiation probe timed out on the ${t.type ?? "http"} transport; reconnecting pinned legacy within the remaining budget`
                  : `version negotiation probe failed on the ${t.type ?? "http"} transport; reconnecting pinned legacy`,
              ),
              (Te = Y ? S("probe_timeout") : S("probe_failed")),
              await O.close().catch(() => {}),
              (O = le()),
              Tt(t))
            )
              gn(O, Pe);
          } else throw _;
          V = de(Re);
          let qe = Math.max(1000, getMcpTimeoutMs() - (Date.now() - p)),
            Je = V.connect(O, {
              timeout: Re.mode === "auto" ? Math.min(qe, Ht()) : qe,
            }),
            Ke = O,
            st = !1;
          try {
            await Promise.race([
              Je,
              new Promise((He, lt) => {
                let Rt = setTimeout(
                  (cn, dn, sr) => {
                    ((st = !0),
                      cn.close().catch(() => {}),
                      dn(
                        wn(
                          `MCP server "${sr}" connection timed out after ${getMcpTimeoutMs()}ms`,
                        ),
                      ));
                  },
                  qe,
                  Ke,
                  lt,
                  e,
                );
                Je.then(
                  () => clearTimeout(Rt),
                  () => clearTimeout(Rt),
                );
              }),
            ]);
          } catch (He) {
            let lt = st,
              Rt = Ee(He);
            if (Y && !Rt && !lt) {
              let dn = truncateToCodeUnits(formatConnectionError(He, t), 200);
              throw (
                logMCPDebug(
                  e,
                  `pinned-legacy retry after the probe timeout failed typed (${dn}); preserving the timeout classification so the connect stays ladder-retryable`,
                ),
                _
              );
            }
            let cn =
              He instanceof SdkError &&
              He.code === ProtocolErrorCode.RequestTimeout &&
              Ke._anthropicProbeTimedOut === !0;
            if (
              L &&
              !Rt &&
              !lt &&
              He instanceof SdkError &&
              (He.code === ProtocolErrorCode.EraNegotiationFailed || cn)
            ) {
              if (!I) throw _;
              throw (
                logMCPDebug(
                  e,
                  `wire probe after discarding the listing projection failed (${truncateToCodeUnits(formatConnectionError(He, t), 200)}); booking a retryable connect timeout so the next dial re-probes prior-free with the legacy rescue`,
                ),
                wn(`MCP server "${e}" connection timed out after ${getMcpTimeoutMs()}ms`)
              );
            }
            throw He;
          }
        }
        if ((W(), Fe)) (logMCPError(e, `Server stderr: ${Fe}`), (Fe = ""));
        if (De && Oe) (Oe.off("data", De), Oe.resume());
        let D = Date.now() - p;
        if (
          (logMCPDebug(
            e,
            `Successfully connected (transport: ${t.type || "stdio"}) in ${D}ms`,
          ),
          _e)
        ) {
          if (V.getProtocolEra?.() === "modern")
            logMCPDebug(
              e,
              "subscriptions/listen suppressed by the listen denylist; list_changed delivery is off for this connection",
            );
        } else armListenStreamReopen(V, e, t, te, $e);
        if ((t.type === "stdio" || !t.type) && O instanceof St && O.pid) {
          if ((registerChildProcess("mcp_stdio", O.pid), z)) Qie("mcp", O.pid, () => isMcpServerUsedByHooks(e));
          if (Q || z) trackMcpServerProcess(e, O.pid);
        }
      } catch (D) {
        W();
        let _ = D;
        if (_ instanceof SdkError && _.code === ProtocolErrorCode.EraNegotiationFailed) {
          let fe = _.data,
            Re =
              typeof fe === "object" && fe !== null && "cause" in fe
                ? fe.cause
                : _.cause;
          if (Re != null) _ = Re;
        }
        let U = Date.now() - p,
          Y = {
            negotiationMode: fromEnumOpt(ie?.mode),
            probeFellBack: Te,
            listenSuppressed: _e,
            negotiationDenylisted: ee,
            discoverSource: N,
            listingPriorBurned: I,
          };
        if (O instanceof St && O.overflowError) {
          if ((logMCPError(e, O.overflowError.message), Fe))
            logMCPError(e, `Server stderr: ${Fe}`);
          throw O.overflowError;
        }
        if (t.type === "sse" && _ instanceof Error) {
          (logMCPDebug(
            e,
            `SSE Connection failed after ${U}ms: ${jsonStringify({ url: redactUrl(t.url), error: formatConnectionError(_, t), errorType: _.constructor.name, stack: redactErrorForLogging(_, t) === _ ? _.stack : void 0 })}`,
          ),
            logMCPError(e, redactErrorForLogging(_, t)));
          let fe = await lo({
            name: e,
            serverRef: t,
            transportType: "sse",
            error: _,
            statusCode: _ instanceof SdkHttpError ? _.status : _.code,
            sawAuthChallenge: F?.sawAuthChallenge === !0,
            hasUserAuthHeader: ae,
            helperMintsAuthHeader: Ie,
            cliOwnedBearer: ue,
            useFirstPartyAuth: Ce,
            firstPartyBearer: Be.last,
            negotiation: Y,
            roundEpoch: h,
            storageV5: r,
          });
          if (fe) return fe;
        } else if (t.type === "http" && _ instanceof Error) {
          let fe = _;
          (logMCPDebug(
            e,
            `HTTP Connection failed after ${U}ms: ${formatConnectionError(_, t)} (code: ${fe.code || "none"}, errno: ${fe.errno || "none"})`,
          ),
            logMCPError(e, redactErrorForLogging(_, t)));
          let Re = await lo({
            name: e,
            serverRef: t,
            transportType: "http",
            error: _,
            statusCode: _ instanceof SdkHttpError ? _.status : _.code,
            sawAuthChallenge: F?.sawAuthChallenge === !0,
            hasUserAuthHeader: ae,
            helperMintsAuthHeader: Ie,
            cliOwnedBearer: ue,
            useFirstPartyAuth: Ce,
            firstPartyBearer: Be.last,
            negotiation: Y,
            roundEpoch: h,
            storageV5: r,
          });
          if (Re) return Re;
        } else if (t.type === "claudeai-proxy" && _ instanceof Error) {
          if (
            (logMCPDebug(
              e,
              `claude.ai proxy connection failed after ${U}ms: ${formatConnectionError(_, t)}`,
            ),
            !isClaudeAiBearerRejectedError(_))
          )
            logMCPError(e, redactErrorForLogging(_, t));
          let fe = _ instanceof SdkHttpError ? _.status : _.code;
          if (isClaudeAiBearerRejectedError(_)) {
            (logEvent("tengu_mcp_server_connection_failed", {
              transportType: S("claudeai-proxy"),
              errorCode: S("CLAUDEAI_BEARER_REJECTED"),
              sdkGeneration: fromEnum(getMcpSdkGeneration()),
              negotiationMode: Y.negotiationMode,
              probeFellBack: Y.probeFellBack,
              listenSuppressed: Y.listenSuppressed,
              negotiationDenylisted: Y.negotiationDenylisted,
              discoverSource: Y.discoverSource,
              listingPriorBurned: Y.listingPriorBurned,
              ...et(t, e),
            }),
              logFeatureSad("mcp_connect", "mcp_connect_claudeai_bearer_rejected"));
            let Re = getMcpServerConfigCacheKey(e, t),
              qe = {
                name: e,
                type: "failed",
                config: t,
                error: _.message,
                errorCode: "CLAUDEAI_BEARER_REJECTED",
              },
              Je = ur().connections.get(Re);
            if (Je)
              Je.then(
                (Ke) => {
                  if (Ke === qe && ur().connections.get(Re) === Je)
                    ur().connections.delete(Re);
                },
                () => {},
              );
            return qe;
          }
          if (fe === 401 || fe === 403)
            return Do(e, t, "claudeai-proxy", void 0, !1, h, Y, r);
        } else if (t.type === "sse-ide" || t.type === "ws-ide")
          logEvent("tengu_mcp_ide_server_connection_failed", {
            connectionDurationMs: U,
          });
        if (w) w.close().catch(() => {});
        if ((O.close().catch(() => {}), Fe)) logMCPError(e, `Server stderr: ${Fe}`);
        throw _;
      }
      let ve = V.getServerCapabilities(),
        xe = V.getServerVersion(),
        Ze = getOfficialPluginPromptOverrides(t),
        Le = getOverriddenServerInstructions(Ze, e) ?? V.getInstructions(),
        ot = capMcpInstructions(Le, e);
      if (
        (logMCPDebug(
          e,
          `Connection established with capabilities: ${jsonStringify({ hasTools: !!ve?.tools, hasPrompts: !!ve?.prompts, hasResources: !!ve?.resources, hasResourceSubscribe: !!ve?.resources?.subscribe, serverVersion: xe || "unknown", protocolEra: V.getProtocolEra(), negotiatedProtocolVersion: V.getNegotiatedProtocolVersion() })}`,
        ),
        logForDebugging(
          `[MCP] Server "${e}" connected with subscribe=${!!ve?.resources?.subscribe}`,
        ),
        V.setRequestHandler(
          "elicitation/create",
          async (D) => (
            logMCPDebug(e, `Elicitation request received during initialization: ${jsonStringify(D)}`),
            { action: "cancel" }
          ),
        ),
        t.type === "sse-ide" || t.type === "ws-ide")
      ) {
        let D = Date.now() - p;
        (logEvent("tengu_mcp_ide_server_connection_succeeded", {
          connectionDurationMs: D,
          serverVersion: getVersionForAnalytics(xe?.version),
        }),
          notifyIdeConnected(V).catch((_) => {
            logMCPError(e, `Failed to send ide_connected notification: ${formatConnectionError(_, t)}`);
          }));
      }
      let Qe = Date.now(),
        rt = !1,
        Ne = V.onerror,
        dt = V.onclose,
        ut = 3,
        Ae = {
          consecutiveErrors: 0,
          activeCallWatchdogs: new Set(),
          pendingElicitations: 0,
          lastElicitationClosedAt: 0,
        },
        pt = !1,
        at = (D) => {
          if (pt) return;
          ((pt = !0),
            logMCPDebug(e, `Closing transport (${D})`),
            V.close().catch((_) => {
              logMCPDebug(e, `Error during close: ${formatConnectionError(_, t)}`);
            }));
        },
        gt = Me?.kind,
        _t = gt !== void 0,
        bt = new Map(),
        Ct,
        $t = () => {
          if (((_t = !1), bt.clear(), Ct !== void 0))
            (clearTimeout(Ct), (Ct = void 0));
        },
        zn = (D) => (gt === "modern" || D === "rpc_era" ? D : void 0),
        qn = (D, _, U) => {
          ($t(),
            burnListingDiscoverPrior(t),
            logMCPDebug(
              e,
              `${_} on a connection built from the /v1/mcp_servers discover projection was rejected (${U}); discarding the projection for this connector \u2014 the next dial probes server/discover on the wire`,
            ),
            logEvent("tengu_mcp_listing_prior_rejected", {
              phase: S("post_connect"),
              priorKind: fromEnumOpt(gt),
              reason: fromEnum(D),
              transportType: S("claudeai-proxy"),
              ...et(t, e),
            }),
            setTimeout(at, 0, "listing discover projection rejected"));
        },
        Vn = () => {
          if (Ct !== void 0) clearTimeout(Ct);
          ((Ct = setTimeout($t, getMcpTimeoutMs())), Ct.unref());
        },
        Kn = (D, _) => {
          if (Ot(D) && !_) $t();
        };
      if (_t && V.transport) {
        Vn();
        let D = V.transport,
          _ = D.send.bind(D);
        D.send = async (U, Y) => {
          let fe = _t && isJSONRPCRequest(U) ? U : void 0;
          if (fe !== void 0) {
            if ((bt.set(fe.id, fe.method), Ot(fe.method))) Vn();
          }
          try {
            await _(U, Y);
          } catch (Re) {
            if (fe !== void 0 && _t) {
              let qe = fe.method;
              bt.delete(fe.id);
              let Je = zn(listingPriorRejectionReason(Re, qe));
              if (Je !== void 0) qn(Je, qe, truncateToCodeUnits(formatConnectionError(Re, t), 200));
              else Kn(qe, isRetryableListError(Re));
            }
            throw Re;
          }
        };
      }
      if (
        ((V.onerror = (D) => {
          let _ = t.type || "stdio";
          if (_ === "stdio" && D instanceof SyntaxError) {
            logMCPError(e, `Ignoring non-JSON line on stdout: ${D.message}`);
            return;
          }
          if (D instanceof FirstPartyDesignNeedsConsentError) return;
          if (_ === "stdio" && D instanceof At) {
            if ((logMCPError(e, D.message), (rt = !0), at("stdout overflow"), Ne)) Ne(D);
            return;
          }
          if (
            (_ === "sse" ||
              _ === "sse-ide" ||
              _ === "http" ||
              _ === "claudeai-proxy") &&
            D.message.includes(mn)
          ) {
            if ((logMCPError(e, D.message), (rt = !0), at("http body overflow"), Ne))
              Ne(D);
            return;
          }
          if (
            (_ === "sse" || _ === "http" || _ === "claudeai-proxy") &&
            D instanceof SyntaxError
          ) {
            if (
              ((rt = !0),
              Ue(),
              at("malformed JSON-RPC message (response truncated)"),
              Ne)
            )
              Ne(D);
            return;
          }
          let U = Date.now() - Qe;
          if (
            ((rt = !0),
            logMCPDebug(
              e,
              `${_.toUpperCase()} connection dropped after ${Math.floor(U / 1000)}s uptime`,
            ),
            D.message)
          ) {
            let Y = vs.find(([fe]) => D.message.includes(fe))?.[1];
            logMCPDebug(e, Y ?? `Connection error: ${formatConnectionError(D, t)}`);
          }
          if (
            (_ === "http" || _ === "claudeai-proxy") &&
            V.transport?.sessionId !== void 0 &&
            isMcpSessionExpiredError(D)
          ) {
            if (
              (logMCPDebug(
                e,
                "MCP session expired (server no longer recognizes session ID), triggering reconnection",
              ),
              at("session expired"),
              Ne)
            )
              Ne(D);
            return;
          }
          if (
            (_ === "http" || _ === "claudeai-proxy") &&
            V.transport?.sessionId !== void 0 &&
            D instanceof SdkHttpError &&
            D.status === 404 &&
            Po(D)
          )
            logFeatureSad("mcp_session_recovery", "get_stream_404_not_reinit");
          if (_ === "sse" || _ === "http" || _ === "claudeai-proxy") {
            if (D.message.includes("Maximum reconnection attempts")) {
              if (
                (logMCPDebug(
                  e,
                  "SSE GET-stream reconnection exhausted; leaving transport up (POST still works)",
                ),
                (Ae.consecutiveErrors = 0),
                Ue(),
                Ne)
              )
                Ne(D);
              return;
            }
            if (isTerminalConnectionError(D)) {
              if (
                (Ae.consecutiveErrors++,
                Ue(),
                logMCPDebug(e, `Terminal connection error ${Ae.consecutiveErrors}/${ut}`),
                Ae.consecutiveErrors >= ut)
              )
                ((Ae.consecutiveErrors = 0),
                  at("max consecutive terminal errors"));
            } else Ae.consecutiveErrors = 0;
          }
          if (Ne) Ne(D);
        }),
        V.transport)
      ) {
        let D = V.transport.onmessage;
        V.transport.onmessage = (_, U) => {
          if (Ae.consecutiveErrors !== 0) Ae.consecutiveErrors = 0;
          if (_t && (isJSONRPCResultResponse(_) || isJSONRPCErrorResponse(_)) && _.id !== void 0) {
            let Y = bt.get(_.id);
            if (Y !== void 0)
              if ((bt.delete(_.id), isJSONRPCResultResponse(_))) {
                if (Ot(Y)) $t();
              } else {
                let fe = zn(Ho(_.error.code, Y));
                if (fe !== void 0) {
                  (D?.(_, U), qn(fe, Y, `JSON-RPC ${_.error.code}`));
                  return;
                }
                Kn(Y, isRetryableListError(new ProtocolError(_.error.code, _.error.message)));
              }
          }
          D?.(_, U);
        };
      }
      V.onclose = () => {
        let D = Date.now() - Qe,
          _ = t.type ?? "unknown";
        (logMCPDebug(
          e,
          `${_.toUpperCase()} connection closed after ${Math.floor(D / 1000)}s (${rt ? "with errors" : "cleanly"})`,
        ),
          emitMcpServerConnectionEvent(e, t, { status: "disconnected", durationMs: D }));
        let U = getMcpServerConfigCacheKey(e, t);
        if (
          (ur().liveClients.delete(V),
          ur().toolLists.delete(U),
          ur().resourceLists.delete(U),
          ur().resourceTemplateLists.delete(U),
          ur().commandLists.delete(U),
          isMcpSkillsEnabled())
        )
          wt.invalidateMcpSkillsForServer(U);
        if (
          (ur().connections.delete(U),
          logMCPDebug(e, "Cleared connection cache for reconnection"),
          dt)
        )
          dt();
      };
      let Wn = async () => {
          if (w) {
            try {
              await w.close();
            } catch (D) {
              logMCPDebug(e, `Error closing in-process server: ${D}`);
            }
            try {
              await V.close();
            } catch (D) {
              logMCPDebug(e, `Error closing client: ${formatConnectionError(D, t)}`);
            }
            return;
          }
          if (t.type === "stdio" || !t.type)
            try {
              let _ = O.pid;
              if (_) {
                logMCPDebug(e, "Sending SIGINT to MCP server process");
                try {
                  process.kill(_, "SIGINT");
                } catch (U) {
                  logMCPDebug(e, `Error sending SIGINT: ${U}`);
                  return;
                }
                await new Promise(async (U) => {
                  let Y = !1,
                    fe = () => {
                      if (Y) return;
                      ((Y = !0), clearInterval(qe), clearTimeout(Je), U());
                    },
                    Re = (Ke) => {
                      try {
                        return (process.kill(Ke, 0), !0);
                      } catch {
                        return !1;
                      }
                    },
                    qe = setInterval(
                      (Ke, st, He, lt) => {
                        if (!Ke(st))
                          (logMCPDebug(He, "MCP server process exited cleanly"), lt());
                      },
                      50,
                      Re,
                      _,
                      e,
                      fe,
                    ),
                    Je = setTimeout(
                      (Ke, st) => {
                        (logMCPDebug(
                          Ke,
                          "Cleanup timeout reached, stopping process monitoring",
                        ),
                          st());
                      },
                      600,
                      e,
                      fe,
                    );
                  try {
                    if ((await sleep(100), !Y)) {
                      if (!Re(_)) {
                        fe();
                        return;
                      }
                      logMCPDebug(
                        e,
                        "SIGINT failed, sending SIGTERM to MCP server process",
                      );
                      try {
                        process.kill(_, "SIGTERM");
                      } catch (Ke) {
                        (logMCPDebug(e, `Error sending SIGTERM: ${Ke}`), fe());
                        return;
                      }
                      if ((await sleep(400), !Y))
                        if (!Re(_)) fe();
                        else {
                          logMCPDebug(
                            e,
                            "SIGTERM failed, sending SIGKILL to MCP server process",
                          );
                          try {
                            process.kill(_, "SIGKILL");
                          } catch (Ke) {
                            logMCPDebug(e, `Error sending SIGKILL: ${Ke}`);
                          }
                        }
                    }
                    fe();
                  } catch {
                    fe();
                  }
                });
              }
            } catch (D) {
              logMCPDebug(e, `Error terminating process: ${D}`);
            }
          try {
            await V.close();
          } catch (D) {
            logMCPDebug(e, `Error closing client: ${formatConnectionError(D, t)}`);
          }
        },
        or = registerCleanup(Wn),
        rr = async () => {
          (ur().liveClients.delete(V), or?.(), await Wn());
        };
      if ((ur().liveClients.add(V), getAdditionalWorkingDirectories() !== C))
        V.sendRootsListChanged().catch(() => {});
      let an = Date.now() - p;
      (emitMcpServerConnectionEvent(e, t, { status: "connected", durationMs: an }),
        logEvent("tengu_mcp_server_connection_succeeded", {
          connectionDurationMs: an,
          transportType: fromEnum(t.type ?? "stdio"),
          sdkGeneration: fromEnum(getMcpSdkGeneration()),
          negotiationMode: fromEnumOpt(ie?.mode),
          scope: fromEnum(t.scope),
          protocolEra: fromEnumOpt(V.getProtocolEra()),
          negotiatedProtocolVersion: ri(V.getNegotiatedProtocolVersion()),
          probeFellBack: Te,
          discoverSource: N,
          listingPriorBurned: I,
          probeSibling: Se(),
          listenSuppressed: _e,
          negotiationDenylisted: ee,
          isPlugin: t.pluginSource !== void 0,
          totalServers: o?.totalServers,
          stdioCount: o?.stdioCount,
          sseCount: o?.sseCount,
          httpCount: o?.httpCount,
          sseIdeCount: o?.sseIdeCount,
          wsIdeCount: o?.wsIdeCount,
          ...et(t, e),
        }),
        logFeatureOk("mcp_connect"),
        writeDiagnosticsEvent("info", "mcp_connect_complete", { transport: A, duration_ms: an }));
      let Yn = {
        name: e,
        client: Eo(V),
        type: "connected",
        capabilities: ve ?? {},
        serverInfo: xe,
        instructions: ot,
        negotiatedProtocolVersion: V.getNegotiatedProtocolVersion(),
        protocolEra: V.getProtocolEra(),
        config: t,
        cleanup: rr,
        transportErrorState: Ae,
      };
      evictMemoizedDiscoveryCachePaths(e);
      try {
        Nrt()?.(Yn);
      } catch (D) {
        logMCPError(
          e,
          `connected-client wiring failed (placeholder retained, adoption will retry): ${l(D)}`,
        );
      }
      return Yn;
    } catch (E) {
      let ue = Date.now() - p,
        ae = formatConnectionError(E, t),
        se = E instanceof Error ? E.cause : void 0,
        Ie =
          (E instanceof SdkHttpError ? E.status : void 0) ??
          (E && typeof E === "object" && "code" in E ? E.code : void 0) ??
          (se && typeof se === "object" && "code" in se ? se.code : void 0),
        Ce =
          E instanceof iI
            ? "ISSUER_ECHO_DENIED"
            : Ie !== void 0
              ? String(Ie)
              : void 0;
      if (
        E instanceof SdkError &&
        E.code === ProtocolErrorCode.RequestTimeout &&
        getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_connect_timeout_retry", !0)
      )
        Ce = "CONNECT_TIMEOUT";
      if (
        t.type === "http" &&
        Ce === "404" &&
        O?.sessionId === void 0 &&
        !isCcrProxyConfig(t)
      )
        ((Ce = "ENDPOINT_NOT_FOUND"),
          (ae = `MCP endpoint not found at ${getMcpServerOrigin(t) ?? "(unparseable url)"}. Check the URL in your MCP config.`));
      emitMcpServerConnectionEvent(e, t, { status: "failed", durationMs: ue, errorCode: Ce, error: ae });
      let Be =
        Ce === "ENOENT" && (t.type === "stdio" || t.type === void 0)
          ? "mcp_connect_spawn_enoent"
          : Ce === "ENDPOINT_NOT_FOUND"
            ? "mcp_connect_endpoint_not_found"
            : void 0;
      if (Be !== void 0) logFeatureBad("mcp_connect", Be);
      else {
        let De =
          Ce === "ECONNREFUSED"
            ? "mcp_connect_refused"
            : ae.includes("timed out")
              ? "mcp_connect_timeout"
              : "mcp_connect_failed";
        logFeatureSad("mcp_connect", `${De}_${t.type ?? "stdio"}`);
      }
      if (
        (logEvent("tengu_mcp_server_connection_failed", {
          connectionDurationMs: ue,
          negotiationMode: fromEnumOpt(ie?.mode),
          listenSuppressed: _e,
          negotiationDenylisted: ee,
          probeFellBack: Te,
          discoverSource: N,
          listingPriorBurned: I,
          probeSibling: Se(),
          errorCode: sanitizeConnectErrorCodeForTelemetry(Ce),
          errorClassName: pot(E),
          errorMessageHash: hashForTelemetry(redactSensitiveText(ae)),
          totalServers: o?.totalServers || 1,
          stdioCount: o?.stdioCount || (t.type === "stdio" ? 1 : 0),
          sseCount: o?.sseCount || (t.type === "sse" ? 1 : 0),
          httpCount: o?.httpCount || (t.type === "http" ? 1 : 0),
          sseIdeCount: o?.sseIdeCount || (t.type === "sse-ide" ? 1 : 0),
          wsIdeCount: o?.wsIdeCount || (t.type === "ws-ide" ? 1 : 0),
          transportType: fromEnum(t.type ?? "stdio"),
          sdkGeneration: fromEnum(getMcpSdkGeneration()),
          scope: fromEnum(t.scope),
          isPlugin: t.pluginSource !== void 0,
          ...et(t, e),
        }),
        logMCPDebug(
          e,
          `Connection failed after ${ue}ms${Ce !== void 0 ? ` (${Ce})` : ""}: ${ae}`,
        ),
        logMCPError(e, `Connection failed${Ce !== void 0 ? ` (${Ce})` : ""}: ${ae}`),
        writeDiagnosticsEvent("error", "mcp_connect_failed", {
          transport: A,
          duration_ms: ue,
          ...(Ce === "CONNECT_TIMEOUT" && { reason: "timeout" }),
        }),
        w)
      )
        w.close().catch(() => {});
      if (
        (t.type === "stdio" || t.type === void 0) &&
        t.pluginSource !== void 0
      )
        Ln(e, hashMcpServerConfig(t), void 0, r);
      return { name: e, type: "failed", config: t, error: ae, errorCode: Ce };
    }
  },
  getMcpServerConfigCacheKey,
  () => ur().connections,
);
function Ns() {
  return getMcpVersionNegotiation("http").mode === "auto" ? "modern" : "legacy";
}
function ensureDiscoveryCacheAccount() {
  if ((initMcpDiscoveryCacheKillSwitch(), setEraResolver(Ns), hasAccountResolver())) return;
  setAccountResolver(pct);
}
function Fn() {
  if (Lx()) return;
  Mrt(ensureConnectedClient);
}
function kn(e, t) {
  try {
    cachedRowAdoptEmitter.emit(e, t);
  } catch (o) {
    logMCPDebug(e, `cached-row adopt subscriber threw: ${l(o)}`);
  }
}
function $n(e, t) {
  if (t) logFeatureSad("mcp_discovery_cache", "lazy_dial_failed");
  ur().settledCachedDialFailures.set(getMcpServerConfigCacheKey(e.name, e.config), {
    failure: e,
    ownStrike: t,
  });
  try {
    cachedRowDialFailedEmitter.emit(e, t);
  } catch (o) {
    logMCPDebug(e.name, `cached-row dial-failed subscriber threw: ${l(o)}`);
  }
}
function takeSettledCachedDialFailure(e, t) {
  let o = ur().settledCachedDialFailures,
    r = getMcpServerConfigCacheKey(e, t),
    d = o.get(r);
  return (o.delete(r), d);
}
async function hasUnsettledDial(e, t) {
  let o = connectToServer.cache?.get?.(getMcpServerConfigCacheKey(e, t));
  return o !== void 0 && (await ht(o)) === void 0;
}
function Zt(e, t, o) {
  let r = getMcpServerConfigCacheKey(e, t);
  if (ur().refusedCachedRows.has(r)) return;
  if ((ur().refusedCachedRows.add(r), o === "policy")) dropDiscoveryEntry(e, t).catch(() => {});
  $n(
    {
      name: e,
      type: "failed",
      config: t,
      error: o === "policy" ? MCP_BLOCKED_BY_POLICY_MESSAGE : MCP_DISABLED_IN_MCP_MESSAGE,
      errorCode: o === "policy" ? "POLICY_BLOCKED" : "DISABLED",
    },
    !1,
  );
}
async function hasLiveConnection(e, t) {
  let o = getMcpServerConfigCacheKey(e, t),
    r = ur().connections.get(o);
  if (!r) return !1;
  if ((await ht(r))?.type !== "connected") return !1;
  return !getMcpClientState().swrRefreshDialsInFlight.has(r);
}
async function evictStaleFailedConnectMemoForServe(e, t) {
  let o = getMcpServerConfigCacheKey(e, t),
    r = ur().connections.get(o);
  if (!r) return;
  let d = await ht(r);
  if (d === void 0 || d.type === "connected") return;
  if (ur().connections.get(o) === r) ur().connections.delete(o);
}
async function ht(e) {
  return withDeadline(
    e.catch(() => {
      return;
    }),
    0,
  );
}
async function peekSettledConnection(e, t) {
  let o = connectToServer.cache?.get?.(getMcpServerConfigCacheKey(e, t));
  return o === void 0 ? void 0 : ht(o);
}
function Un(e) {
  if (
    (ur().connections.delete(e),
    ur().toolLists.delete(e),
    ur().resourceLists.delete(e),
    ur().resourceTemplateLists.delete(e),
    ur().commandLists.delete(e),
    isMcpSkillsEnabled())
  )
    wt.invalidateMcpSkillsForServer(e);
}
async function clearServerCache(e, t) {
  ensureDiscoveryCacheAccount();
  let o = getMcpServerConfigCacheKey(e, t),
    r = ur().connections.get(o);
  if (r) {
    let d = await ht(r);
    if (d === void 0) disposeServerConnectionDetached(e, t, r);
    else if (d.type === "connected") await detachAndCloseConnection(d);
    let p = ur().connections.get(o);
    if (p !== void 0 && p !== r) return;
  }
  Un(o);
}
function detachAndCloseConnection(e) {
  if (((Xe(e.client).onclose = void 0), isDiscoveryCacheEnabled())) {
    let t = getMcpServerConfigCacheKey(e.name, e.config),
      o = connectToServer.cache?.get?.(t);
    if (o !== void 0)
      ht(o).then((r) => {
        if (r === e && connectToServer.cache?.get?.(t) === o) Un(t);
      });
  }
  return e.cleanup().catch(() => {});
}
function disposeServerConnectionDetached(e, t, o) {
  ensureDiscoveryCacheAccount();
  let r = getMcpServerConfigCacheKey(e, t),
    d = ur().connections.get(r);
  if (o !== void 0 && d !== o) return;
  if (d) getMcpClientState().supersededDials.add(d);
  if ((Un(r), d))
    d.then(
      (p) => {
        if (p.type !== "connected") return;
        detachAndCloseConnection(p);
      },
      () => {},
    );
}
async function dropDiscoveryEntry(e, t) {
  (ensureDiscoveryCacheAccount(), await deleteDiscoveryCacheEntry(e, t));
}
async function discardMemoizedConnectResult(e, t) {
  let o = getMcpServerConfigCacheKey(e, t);
  if (!isDiscoveryCacheEnabled()) return (ur().connections.delete(o), !0);
  let r = ur().connections.get(o);
  if (r !== void 0) {
    let d = await ht(r);
    if (d === void 0 || d.type === "connected") return !1;
    if (ur().connections.get(o) !== r) return !1;
  }
  return (ur().connections.delete(o), !0);
}
function invalidateMcpResourceListCaches(e) {
  let t = getMcpServerConfigCacheKey(e.name, e.config);
  (ur().resourceLists.delete(t), ur().resourceTemplateLists.delete(t));
}
function onMcpElicitRequest(e, t) {
  Xe(e.client).setRequestHandler("elicitation/create", (o, r) =>
    t(o, { signal: r.mcpReq.signal }),
  );
}
function onMcpElicitationComplete(e, t) {
  Xe(e.client).setNotificationHandler(
    "notifications/elicitation/complete",
    (o) => t(o.params.elicitationId),
  );
}
function onMcpToolListChanged(e, t) {
  let o = Xe(e.client);
  (On(o, "tools", t),
    o.setNotificationHandler("notifications/tools/list_changed", t));
}
function onMcpPromptListChanged(e, t) {
  let o = Xe(e.client);
  (On(o, "prompts", t),
    o.setNotificationHandler("notifications/prompts/list_changed", t));
}
function onMcpResourceListChanged(e, t) {
  let o = Xe(e.client);
  (On(o, "resources", t),
    o.setNotificationHandler("notifications/resources/list_changed", t));
}
function onMcpNotification(e, t, o) {
  let r = t.shape.method.value,
    d = Xe(e.client);
  if (d.getProtocolEra?.() === "modern") {
    let p = d.getNegotiatedProtocolVersion?.(),
      h = p === void 0 ? void 0 : sanitizeLogValue(p);
    logForDebugging(
      `[MCP] ${e.name}: skipping ${r} handler registration \u2014 this connection negotiated ${h ? `protocol revision ${h}` : "a modern-era protocol revision"}, which has no delivery path for unsolicited custom notifications`,
      { level: "warn" },
    );
    return;
  }
  d.setNotificationHandler(r, { params: t.shape.params }, (p) =>
    o({ method: r, params: p }),
  );
}
async function ensureConnectedClient(e, t) {
  if (e.type === "connected" && e.config.type === "sdk") return e;
  if (isMcpServerBlockedAtConnectTime(e.name, e.config)) {
    if (e.type === "cached") Zt(e.name, e.config, "policy");
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
    if (e.type === "cached") Zt(e.name, e.config, "disabled");
    throw new R(
      `MCP server "${e.name}" is disabled \u2014 re-enable it via /mcp to use its tools`,
      "MCP server disabled",
    );
  }
  let o = ir(),
    r = connectToServer(e.name, e.config);
  if (e.type === "cached")
    r.then(
      (p) => runCachedFirstDialArms(p, r, o),
      () => {},
    );
  let d = await boundDial(r, {
    signal: t?.signal,
    timeoutMs: t?.timeoutMs,
    serverName: e.name,
    context: t?.context ?? "MCP connection",
  });
  if (d.type !== "connected") {
    if (d.type === "needs-auth")
      throw Object.assign(
        new R(
          `MCP server "${e.name}" needs authentication`,
          "MCP server needs authentication",
        ),
        { mcpErrorSource: "user_auth" },
      );
    let p = d.type === "failed" ? d.errorCode : void 0;
    throw Object.assign(
      new R(
        `MCP server "${e.name}" is not connected${isDiscoveryCacheEnabled() && d.type === "failed" && d.error ? `: ${sanitizeDisplayText(d.error)}` : ""}`,
        "MCP server not connected",
      ),
      {
        mcpErrorSource: classifyMcpErrorSource(
          Object.assign(Error("MCP dial failed"), {
            code: p !== void 0 && /^-?\d+$/.test(p) ? Number(p) : p,
          }),
        ),
      },
    );
  }
  return d;
}
function Pt(e, t, o) {
  let r = connectToServer.cache;
  if (!r?.get) return !1;
  return r.get(getMcpServerConfigCacheKey(t, o)) !== e;
}
function isDialDisposed(e) {
  return getMcpClientState().supersededDials.has(e);
}
function runCachedFirstDialArms(e, t, o) {
  let r = getMcpClientState().cachedFirstDialArmsRan;
  if (r.has(e)) return;
  r.add(e);
  let d = getMcpServerConfigCacheKey(e.name, e.config),
    p = ur().connections.get(d),
    h = ir() !== o,
    C = p === void 0 && h;
  if (isDialDisposed(t) || (p !== void 0 && p !== t) || C) {
    if (!isDialDisposed(t) && h && e.type === "connected") detachAndCloseConnection(e);
    return;
  }
  if (e.type === "connected" || e.type === "needs-auth") {
    kn(e.name, e.config);
    return;
  }
  if ((ur().connections.delete(d), e.type === "failed"))
    $n(e, !getMcpClientState().swrRefreshDialsInFlight.has(t));
}
function areMcpConfigsEqual(e, t) {
  return hashMcpServerConfig(e) === hashMcpServerConfig(t);
}
var Hs = [
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
  let t = Hs.find((o) => o === e);
  if (t !== void 0) return fromEnum(t);
  return mTt(e) ?? S("other");
}
var Vo = {
  [ProtocolErrorCode.ConnectionClosed]: "connection_closed",
  [ProtocolErrorCode.RequestTimeout]: "request_timeout",
  [ProtocolErrorCode.ListPaginationExceeded]: "list_pagination_exceeded",
  [-32000]: "connection_closed",
  [-32001]: "request_timeout",
  [CCR_NEEDS_APPROVAL_ERROR_CODE]: "ccr_needs_approval",
  [ErrorCode.ParseError]: "parse_error",
  [ErrorCode.InvalidRequest]: "invalid_request",
  [ErrorCode.MethodNotFound]: "method_not_found",
  [ErrorCode.InvalidParams]: "invalid_params",
  [ErrorCode.InternalError]: "internal_error",
};
function mcpToolInputToAutoClassifierInput(e, t) {
  let o = Object.keys(e);
  if (o.length === 0) return t;
  return o
    .map((r) => {
      let d = e[r],
        p = typeof d === "object" && d !== null ? JSON.stringify(d) : String(d);
      return `${r}=${p}`;
    })
    .join(" ");
}
function Ko(e) {
  let t = getMcpClientState().droppedToolsSeqByConnection,
    o = t.get(e) ?? { started: 0, applied: 0 };
  return (t.set(e, o), (o.started += 1), { seq: o.started, state: o });
}
function getToolsListErrorForResult(e) {
  return getMcpClientState().toolsListErrorByResult.get(e);
}
function getDiscoveryFetchError(e) {
  return getMcpClientState().discoveryFetchErrors.get(e);
}
function Wo() {
  ensureDiscoveryCacheAccount();
  let e = resolveAccountTokenAndRecord();
  return isAccountTokenUnresolved(e) ? void 0 : e.token;
}
function seedMcpIdentityCheck() {
  let e = getMcpClientState();
  if (e.identitySeedAttempted) return;
  e.identitySeedAttempted = !0;
  let t = Wo();
  if (t !== void 0) e.identityBaseline = t;
}
function mcpIdentityChangedSinceLastCheck() {
  let e = Wo(),
    t = getMcpClientState();
  if (e === void 0) return ((t.identityBaseline = void 0), !0);
  if (t.identityBaseline === void 0) return ((t.identityBaseline = e), !0);
  if (t.identityBaseline === e) return !1;
  return ((t.identityBaseline = e), !0);
}
function recordRawToolsForResult(e, t) {
  if (!isDiscoveryCacheEnabled()) return;
  let o = getMcpClientState();
  (o.rawToolsByResult.set(e, t), o.rawFetchedAtByResult.set(e, Date.now()));
}
function recordRawCommandsForResult(e, t) {
  if (!isDiscoveryCacheEnabled()) return;
  let o = getMcpClientState();
  (o.rawCommandsByResult.set(e, t), o.rawFetchedAtByResult.set(e, Date.now()));
}
function recordRawResourcesForResult(e, t) {
  if (!isDiscoveryCacheEnabled()) return;
  let o = getMcpClientState();
  (o.rawResourcesByResult.set(e, t), o.rawFetchedAtByResult.set(e, Date.now()));
}
function recordDiscoveryFetchErrorForResult(e, t) {
  getMcpClientState().discoveryFetchErrors.set(e, t);
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
  let o = getMcpClientState();
  if (o.persistedDiscoveryRounds.has(t.tools)) return !0;
  if (!isCurrentIdentityEpoch(t.identityEpoch)) return !0;
  let r = o.rawToolsByResult.get(t.tools),
    d = o.rawCommandsByResult.get(t.commands),
    p = o.rawResourcesByResult.get(t.resources);
  if (r === void 0 || d === void 0 || p === void 0 || t.templates === void 0)
    return !1;
  let h = Math.min(
    o.rawFetchedAtByResult.get(t.tools) ?? Number.POSITIVE_INFINITY,
    o.rawFetchedAtByResult.get(t.commands) ?? Number.POSITIVE_INFINITY,
    o.rawFetchedAtByResult.get(t.resources) ?? Number.POSITIVE_INFINITY,
  );
  if (!Number.isFinite(h)) return !0;
  let C = h,
    A = [t.tools, t.commands, t.resources].map((F) => [
      F,
      o.rawFetchedAtByResult.get(F),
    ]);
  (o.rawToolsByResult.delete(t.tools),
    o.rawCommandsByResult.delete(t.commands),
    o.rawResourcesByResult.delete(t.resources),
    o.rawFetchedAtByResult.delete(t.tools),
    o.rawFetchedAtByResult.delete(t.commands),
    o.rawFetchedAtByResult.delete(t.resources),
    o.persistedDiscoveryRounds.add(t.tools));
  let w = await writeDiscoveryCacheEntry(
    e.name,
    e.config,
    {
      ...(e.serverInfo && {
        serverInfo: { name: e.serverInfo.name, version: e.serverInfo.version },
      }),
      ...(e.protocolEra !== void 0 && { negotiatedEra: e.protocolEra }),
      capabilities: e.capabilities,
      tools: r,
      commands: d,
      resources: p,
      templates: t.templates.map(({ server: F, ...z }) => z),
    },
    { identityEpoch: t.identityEpoch, grantLeg: t.grantLeg, now: C },
  );
  if (w === "terminal") return (o.persistedDiscoveryRounds.delete(t.tools), !1);
  if (w === "transient") {
    (o.rawToolsByResult.set(t.tools, r),
      o.rawCommandsByResult.set(t.commands, d),
      o.rawResourcesByResult.set(t.resources, p));
    for (let [F, z] of A) if (z !== void 0) o.rawFetchedAtByResult.set(F, z);
    o.persistedDiscoveryRounds.delete(t.tools);
  }
  return !0;
}
async function persistRefreshedToolsIfPresent(e, t, o) {
  if ((ensureDiscoveryCacheAccount(), !isCurrentIdentityEpoch(o.identityEpoch))) return;
  let r = getMcpClientState(),
    d = r.rawToolsByResult.get(t),
    p = r.rawFetchedAtByResult.get(t);
  if (d === void 0 || p === void 0) return;
  await mergeDiscoveryCacheTools(e.name, e.config, d, {
    identityEpoch: o.identityEpoch,
    grantLeg: o.grantLeg,
    fetchedAt: p,
  });
}
async function persistLiveListing(e, t) {
  if (!isDiscoveryCacheEnabled() || !isDiscoveryCacheEligible(e.config) || isMcpServerDisabled(e.name) || isMcpServerBlockedAtConnectTime(e.name, e.config)) return;
  try {
    let o = !!e.capabilities?.resources;
    if (!o) recordRawResourcesForResult(t.resources, []);
    let r = o ? await fetchResourceTemplatesForClient(e) : [];
    if (
      (await peekSettledConnection(e.name, e.config)) !== e ||
      isMcpServerDisabled(e.name) ||
      isMcpServerBlockedAtConnectTime(e.name, e.config)
    )
      return;
    await persistRawDiscoveryIfComplete(e, { ...t, templates: getDiscoveryFetchError(r) === void 0 ? r : void 0 });
  } catch (o) {
    logMCPDebug(e.name, `Discovery cache write-through skipped: ${l(o)}`);
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
function hydrateToolsFromListing(e, t, o, r, d) {
  let p = sanitizeDeep(t),
    h = getMcpServerBaseUrl(e.config),
    C = et(e.config, e.name),
    A = mcpNameForAnalytics_GATE_EVALUATED(normalizeMcpName(e.name), shouldSendMcpServerTelemetry(e.name, e.config));
  if (p.length === 0 && r === "live")
    logEvent("tengu_mcp_degraded", {
      reason: S("connected_zero_tools"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      mcpServerName: A,
      ...C,
    });
  let w = e.config.type === "sdk" && a.CLAUDE_AGENT_SDK_MCP_NO_PREFIX,
    F =
      e.config.type === "claudeai-proxy" ||
      e.config.type === "http" ||
      e.config.type === "sse"
        ? e.config.toolPermissions
        : void 0;
  if (F) {
    let E = Object.keys(F).length;
    if (E > 0 && !p.some((ue) => F[ue.name] !== void 0))
      logForDebugging(
        `[claudeai-mcp] ${e.name}: toolPermissions has ${E} entries but none matched upstream tool names \u2014 backend name drift?`,
        { level: "warn" },
      );
  }
  let z = isSchemaNormalizeEnabledFor(e.config),
    Q = isSchemaApiValidateEnabledFor(e.config),
    O = 0,
    ne = 0,
    le = 0,
    Te = 0,
    Me = 0,
    $e = [],
    N = 0,
    re = 0,
    I = p.flatMap((E) => {
      let ue = uct(E.inputSchema),
        ae;
      if (ue.outcome === "unchanged") ae = E;
      else if (ue.outcome === "normalized" && z) {
        (O++,
          logMCPDebug(
            e.name,
            `Normalized input schema for tool "${E.name}" (flattened top-level ${ue.combinators.join("/")})`,
          ));
        let Ie = E.description
          ? `${ue.note}

${E.description}`
          : ue.note;
        ae = { ...E, inputSchema: ue.schema, description: Ie };
      } else {
        if (ue.outcome === "normalized") ne++;
        else le++;
        let Ie =
          ue.outcome === "drop"
            ? ue.reason
            : `its input schema uses top-level ${ue.combinators.join("/")}, which the Anthropic API does not accept`;
        return (
          logMCPError(
            e.name,
            `Skipping tool "${E.name}": ${Ie}. Other tools from this server remain available.`,
          ),
          []
        );
      }
      let se = dct(ae.inputSchema);
      if (se.valid) return [ae];
      if (!Q) {
        if (se.check === "meta") N++;
        else re++;
        return (
          logMCPDebug(
            e.name,
            `Tool "${E.name}" input schema would be rejected by the Anthropic API (${se.detail}); requests that include it may fail`,
          ),
          [ae]
        );
      }
      if (se.check === "meta") Te++;
      else Me++;
      if (F?.[E.name] !== "blocked" && No(w ? E.name : buildMcpToolName(e.name, E.name)))
        $e.push({ toolName: E.name, reason: se.detail });
      return (
        logMCPError(
          e.name,
          `Skipping tool "${E.name}": its input schema would be rejected by the Anthropic API (${se.detail}). Other tools from this server remain available.`,
        ),
        []
      );
    });
  if (d.seq > d.state.applied)
    ((d.state.applied = d.seq), (e.droppedTools = $e));
  if (O > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_schema_normalized"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      normalizedCount: O,
      mcpServerName: A,
      ...C,
    });
  if (ne > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_schema_normalize_gated"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      skippedCount: ne,
      mcpServerName: A,
      ...C,
    });
  if (le > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_schema_unsupported"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      skippedCount: le,
      mcpServerName: A,
      ...C,
    });
  if (Te > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_schema_invalid"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      skippedCount: Te,
      mcpServerName: A,
      ...C,
    });
  if (Me > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_property_key_invalid"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      skippedCount: Me,
      mcpServerName: A,
      ...C,
    });
  if (N > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_schema_invalid_gated"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      keptCount: N,
      mcpServerName: A,
      ...C,
    });
  if (re > 0)
    logEvent("tengu_mcp_degraded", {
      reason: S("tool_property_key_invalid_gated"),
      transportType: fromEnum(e.config.type ?? "stdio"),
      keptCount: re,
      mcpServerName: A,
      ...C,
    });
  let L = () => shouldSendMcpServerTelemetry(e.name, e.config);
  logMcpToolCallXmlInDescriptions(I, e.name, L(), h, e.instructions);
  let Se = isFirstPartyDesignServerConfig(e.config),
    ie = getOfficialPluginPromptOverrides(e.config),
    _e = e.config.pluginSource ? buildPluginTelemetryFieldsFromId(e.config.pluginSource, getPolicyPluginNames()) : void 0,
    ee = isCliOwnedMcpConfig(e.config),
    W = I.map((E) => {
      let ue = buildMcpToolName(e.name, E.name),
        ae = E._meta?.["anthropic/maxResultSizeChars"],
        se = typeof ae === "number" && Number.isFinite(ae) && ae > 0,
        Ie = E._meta?.["anthropic/requiresUserInteraction"] === !0,
        Ce = ie?.tools?.[E.name] ?? E.description ?? "",
        Be = Mo(Ce, `Tool "${E.name}" description`, e.name),
        De =
          ie?.search_hints?.[E.name] ??
          (typeof E._meta?.["anthropic/searchHint"] === "string"
            ? E._meta["anthropic/searchHint"]
            : void 0),
        Oe = {
          ...MCP_TOOL_BASE,
          name: w ? E.name : ue,
          mcpInfo: {
            serverName: e.name,
            scope: e.config.scope,
            serverType: e.config.type ?? "stdio",
            ...(_e && { pluginTelemetry: _e }),
            displayName:
              "displayName" in e.config ? e.config.displayName : void 0,
            iconUrl: "iconUrl" in e.config ? e.config.iconUrl : void 0,
            serverInfoName: normalizeComparableText(e.serverInfo?.name ?? "") || void 0,
            ...(ee && { cliOwned: !0 }),
            toolName: E.name,
            title: E.annotations?.title?.replace(/\s+/g, " ").trim() || void 0,
            execution: E.execution,
            role: "role" in e.config ? e.config.role : void 0,
            effectiveMaxPermission: F?.[E.name],
          },
          isMcp: !0,
          searchHint: De?.replace(/\s+/g, " ").trim() || void 0,
          alwaysLoad:
            e.config.alwaysLoad === !0 ||
            E._meta?.["anthropic/alwaysLoad"] === !0,
          async description() {
            return Ce;
          },
          async prompt() {
            return Be;
          },
          isConcurrencySafe() {
            return E.annotations?.readOnlyHint ?? !1;
          },
          isReadOnly() {
            return E.annotations?.readOnlyHint ?? !1;
          },
          readOnlyHint: E.annotations?.readOnlyHint,
          toAutoClassifierInput(X) {
            return mcpToolInputToAutoClassifierInput(X, E.name);
          },
          isDestructive() {
            return E.annotations?.destructiveHint ?? !1;
          },
          isOpenWorld() {
            return E.annotations?.openWorldHint ?? !1;
          },
          requiresUserInteraction() {
            return Ie;
          },
          suppressesAlwaysAllowRule: () => Ie || suppressDesignWriteAddRules(Se, E.name),
          maxResultSizeChars: se ? Math.min(ae, uBe) : MCP_TOOL_BASE.maxResultSizeChars,
          persistenceThresholdCeiling: se ? uBe : void 0,
          inputJSONSchema: applyParamDescriptions(E.inputSchema, ie?.param_descriptions?.[E.name]),
          async checkPermissions(X, de) {
            let V = denyTokenlessFirstPartyDesignWrite(Se, E.name, X);
            if (V) return V;
            if (Se) {
              let Pe = getDesignConsentProvider(),
                be =
                  (await Pe?.wouldNeedDesignConsent(
                    de.toolState.get(DesignSessionState),
                    de.credentials,
                  )) ?? null;
              if (be !== null && Pe && de.toolUseId) {
                let Ee = recordFirstPartyDesignConsentAsk(de.toolUseId, be, consentAskCanReachUser(de));
                return buildFirstPartyDesignConsentAsk(Pe.consentPromptFor(be), X, Ee);
              }
            }
            if (Ie)
              return {
                behavior: "ask",
                message: "MCPTool requires permission.",
                suggestions: [],
                suppressAlwaysAllowRule: !0,
              };
            return {
              behavior: "passthrough",
              message: "MCPTool requires permission.",
              suggestions: suppressDesignWriteAddRules(Se, E.name)
                ? []
                : [
                    {
                      type: "addRules",
                      rules: [{ toolName: ue, ruleContent: void 0 }],
                      behavior: "allow",
                      destination: "localSettings",
                    },
                  ],
            };
          },
          async call(X, de, V, Pe, be) {
            let Ee = ni(Pe),
              te = Ee ? { "claudecode/toolUseId": Ee } : {},
              je = !1;
            function Ye(Ne) {
              if (!be || !Ee || je) return;
              be({ type: "progress", toolUseID: Ee, data: Ne });
            }
            Ye({
              type: "mcp_progress",
              status: "started",
              serverName: e.name,
              toolName: E.name,
            });
            let ze = Date.now(),
              ye = e,
              ve = !1,
              xe =
                typeof X.__consentNonce === "string"
                  ? X.__consentNonce
                  : void 0;
            if ("__consentNonce" in X) {
              let { __consentNonce: Ne, ...dt } = X;
              X = dt;
            }
            let Ze = Se ? takeFirstPartyDesignConsentAsk(Ee, xe) : null;
            if (Se) withdrawForSharingWideningDesignMcpOp(de.toolState.get(DesignSessionState), Se, E.name, X);
            let Le,
              ot = async (Ne) => {
                for (let ut = 0; ; ut++)
                  try {
                    let Ae = await ensureConnectedClient(e, { context: "MCP tool call" });
                    ye = Ae;
                    let Ue = await callMCPToolWithUrlElicitationRetry({
                      client: Ae,
                      clientConnection: e,
                      tool: E.name,
                      args: X,
                      meta: te,
                      signal: Ne,
                      imageLimits: getImageLimitsForModel(de.options.mainLoopModel),
                      toolExecution: E.execution,
                      taskRegistry: de.taskRegistry,
                      toolUseId: Ee,
                      onProgress: be && Ee ? Ye : void 0,
                      requestDialog: de.requestDialog,
                      storageV5: de.storageV5,
                      credentials: de.credentials,
                      hasResultSizeAnnotation: se,
                      onAwaitingUserInput: (_t) => {
                        ve = _t;
                      },
                      taskBackground: Le,
                      disallowTasks:
                        de.agentId !== void 0 ||
                        (de.options.isNonInteractiveSession && Le === void 0),
                      ccrNeedsApprovalRetry:
                        "url" in e.config &&
                        isSessionIngressUrl(e.config.url) &&
                        ccrRetroactiveAskCanPrompt(de) &&
                        !(yB() && yB() !== "stdio")
                          ? {
                              canUseTool: V,
                              tool: Oe,
                              fullyQualifiedName: ue,
                              toolUseContext: de,
                              parentMessage: Pe,
                            }
                          : void 0,
                    });
                    if (Ue.interrupted) throw new Ve(TOOL_CALL_INTERRUPTED_MESSAGE);
                    if (
                      (Ye({
                        type: "mcp_progress",
                        status: "completed",
                        serverName: e.name,
                        toolName: E.name,
                        elapsedTimeMs: Date.now() - ze,
                      }),
                      !Ue.isError)
                    )
                      act(E.name);
                    if (ut > 0) logFeatureOk("mcp_session_recovery");
                    let pt = stripReservedMetaKeys(Ue._meta),
                      at = void 0,
                      gt = pt || at ? { ...pt, ...at } : void 0;
                    return {
                      data: Ue.content,
                      ...(Ue.urlElicitationDeclined && {
                        urlElicitationDeclined: Ue.urlElicitationDeclined,
                      }),
                      ...((gt || Ue.structuredContent || Ue.resourceLinks) && {
                        mcpMeta: {
                          ...(gt && { _meta: gt }),
                          ...(Ue.structuredContent && {
                            structuredContent: Ue.structuredContent,
                          }),
                          ...(Ue.resourceLinks && {
                            resourceLinks: Ue.resourceLinks,
                          }),
                        },
                      }),
                    };
                  } catch (Ae) {
                    if (Ae instanceof McpSessionExpiredError && ut < 1) {
                      (logFeatureSad("mcp_session_recovery", Ae.expiryKind),
                        logMCPDebug(
                          e.name,
                          `Retrying tool '${E.name}' after session recovery`,
                        ));
                      continue;
                    }
                    if (Ae instanceof McpSessionExpiredError)
                      logFeatureBad("mcp_session_recovery", "session_retry_exhausted");
                    else if (ut > 0 && !Ne.aborted)
                      logFeatureBad("mcp_session_recovery", "retry_failed_other");
                    if (
                      (Ye({
                        type: "mcp_progress",
                        status: "failed",
                        serverName: e.name,
                        toolName: E.name,
                        elapsedTimeMs: Date.now() - ze,
                      }),
                      !Ne.aborted)
                    )
                      recordReplyDegradedState(e.name, Ae);
                    if (Ae instanceof Error && !(Ae instanceof R)) {
                      let Ue = Ae.constructor.name,
                        pt = () => (Ne.aborted ? "other" : classifyMcpErrorSource(Ae));
                      if (Ue === "Error") {
                        let at = formatConnectionError(Ae, e.config);
                        throw Object.assign(new R(at, at.slice(0, 200)), {
                          mcpErrorSource: pt(),
                        });
                      }
                      if (
                        "code" in Ae &&
                        (((Ue === "McpError" || Ue === "ProtocolError") &&
                          typeof Ae.code === "number") ||
                          ((Ue === "SdkError" || Ue === "SdkHttpError") &&
                            (typeof Ae.code === "number" ||
                              (typeof Ae.code === "string" &&
                                Ps.has(Ae.code)))))
                      )
                        throw Object.assign(
                          new R(Ae.message, `${Ue} ${Ae.code}`),
                          { mcpErrorSource: pt() },
                        );
                    }
                    throw Ae;
                  }
              },
              Qe = ot;
            if (Se)
              Qe = withFirstPartyDesignConsentIntercept(ot, {
                designSession: de.toolState.get(DesignSessionState),
                approvedConsentBit: Ze?.bit ?? null,
                consentAskReachesUser: (Ze?.askReachesUser ?? !1) && consentAskCanReachUser(de),
                credentials: de.credentials,
              });
            let rt = !de.agentId && de.taskRegistry !== noopTaskRegistry && Oe.name !== yB();
            if (_n && rt) {
              let Ne = _n.getMcpAutoBackgroundMs(e.config, {
                isNonInteractiveSession: de.options.isNonInteractiveSession,
              });
              if (Ne > 0) {
                let dt = { becameTask: !1 };
                return _n.callMcpToolWithAutoBackground({
                  run: Qe,
                  serverName: e.name,
                  toolName: E.name,
                  toolUseId: Ee,
                  parentAbortController: de.abortController,
                  taskRegistry: de.taskRegistry,
                  autoBackgroundMs: Ne,
                  storageV5: de.storageV5,
                  credentials: de.credentials,
                  hasPendingElicitation: () =>
                    ve ||
                    ((ye.type === "connected"
                      ? ye.transportErrorState?.pendingElicitations
                      : void 0) ?? 0) > 0,
                  onBackgrounded: () => {
                    je = !0;
                  },
                  share: dt,
                });
              }
            }
            return Qe(de.abortController.signal);
          },
          userFacingName() {
            let X = (E.annotations?.title || E.name)
              .replace(/\s+/g, " ")
              .trim();
            return `${e.name} - ${X} (MCP)`;
          },
          ...(isClaudeInChromeMCPServer(e.name) &&
            isStdioMcpServer(e.config) && {
              ...Br().getClaudeInChromeMCPToolOverrides(E.name),
              builtinRenderFamily: "claude-in-chrome",
            }),
          ...(isStdioMcpServer(e.config) &&
            isComputerUseMcpServer(e.name) && {
              ...Ur().getComputerUseMCPToolOverrides(E.name),
              builtinRenderFamily: "computer-use",
            }),
          ...(e.config.type === "sdk" && isClaudeBrowserMcpServerName(e.name)
            ? createHostHandledConsentPermissions(e.name, E.name)
            : {}),
          ...(isSlackSendTool(E.name) ? createSlackSendUiDescriptor() : {}),
        };
      if (
        isClaudeInChromeMCPServer(e.name) &&
        (E.name === "file_upload" || E.name === "browser_batch")
      ) {
        let X =
            !isStdioMcpServer(e.config) && !a.CLAUDE_CODE_REMOTE && a.CLAUDE_CODE_IS_COWORK,
          de = Oe.call;
        Oe.call = async (V, Pe, be, Ee, te) => {
          let {
              passThroughChromeFileUploadInput: je,
              prepareChromeFileUploadInput: Ye,
            } = await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
            ze = X
              ? await je(E.name, V ?? {}, getToolPermissionContext(Pe))
              : await Ye(E.name, V ?? {}, getToolPermissionContext(Pe));
          if (ze.error)
            throw new R(ze.error, "Claude in Chrome file_upload path rejected");
          return de(ze.input ?? V, Pe, be, Ee, te);
        };
      }
      if (isClaudeInChromeMCPServer(e.name) && e.config.type !== "sdk") {
        let X = Oe.call;
        Oe.call = async (de, V, Pe, be, Ee) => {
          let te = getPolicyDeniedReason(
            "allow_claude_browser_extension",
            "Claude in Chrome",
            "is",
          );
          if (te !== null)
            throw new R(te, "Claude in Chrome call refused by org policy");
          return X(de, V, Pe, be, Ee);
        };
      }
      let Fe = Oe.call;
      return (
        (Oe.call = async (X, de, V, Pe, be) => {
          if (
            ((de.options.activeMcpServer = e.name),
            (de.options.activeMcpTool = E.name),
            e.config.pluginSource)
          )
            (recordPluginUsage(e.config.pluginSource),
              recordPluginActivity(e.config.pluginSource, "mcp", {
                kind: "mcp-server",
                name: e.name,
              }));
          let Ee = L();
          if (Ee) registerLoggableMcpServer(e.name);
          return Fe(
            stripTrailingInvokeSuffixFromArgs(
              X,
              E.name,
              e.name,
              Ee,
              getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_strip_trailing_xml_tags", !1),
              h,
            ),
            de,
            V,
            Pe,
            be,
          );
        }),
        Oe
      );
    }).filter(_s);
  if (
    (logEvent("tengu_mcp_tools_listed", {
      transportType: fromEnum(e.config.type ?? "stdio"),
      listDurationMs: Date.now() - o,
      toolCount: W.length,
      alwaysLoadCount: countMatching(W, (E) => E.alwaysLoad === !0),
      discoverySource: fromEnum(r),
      ...C,
      mcpServerName: mcpNameForAnalytics_GATE_EVALUATED(normalizeMcpName(e.name), shouldSendMcpServerTelemetry(e.name, e.config)),
    }),
    r === "live")
  )
    logFeatureOk("mcp_list_tools");
  if (isStdioMcpServer(e.config) && isClaudeInChromeMCPServer(e.name)) logChromeToolsAdded(W.length, r);
  return W;
}
var fetchToolsForClient = h7(
  async (e, t) => {
    if (e.type !== "connected") return [];
    let o = ir(),
      r = Ko(e);
    try {
      if (!e.capabilities?.tools) {
        let A = [];
        return (recordRawToolsForResult(A, []), A);
      }
      let d = Date.now(),
        p = Xe(e.client),
        h =
          p.getProtocolEra?.() === "modern"
            ? await Pr(p, e.name, e.config)
            : await nn(p, e.name, e.config, "tools/list", ListToolsResultSchema, (A) => A.tools);
      ((e.toolsListError = void 0), (e.discoveryAuthFailure = void 0));
      let C = hydrateToolsFromListing(e, h, d, "live", r);
      return (recordRawToolsForResult(C, h), C);
    } catch (d) {
      let p = formatConnectionError(d, e.config);
      if (e.config.type === "claudeai-proxy" && isListAuthError(d)) {
        if (
          (logEvent("tengu_mcp_server_needs_auth", {
            transportType: S("claudeai-proxy"),
            cause: S("discovery_tools_list"),
            ...et(e.config, e.name),
          }),
          isCurrentIdentityEpoch(o))
        )
          Ln(e.name, e.config.id, void 0, t);
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
      let h = e.config.type === "claudeai-proxy" && isClaudeAiBearerRejectedError(d),
        C = h
          ? "mcp_list_tools_claudeai_bearer_rejected"
          : (d instanceof ProtocolError || d instanceof SdkError) && !(d instanceof SdkHttpError)
            ? `mcp_list_tools_${Vo[d.code] ?? "mcperr_other"}`
            : p.includes("timed out")
              ? "mcp_list_tools_timeout"
              : "mcp_list_tools_failed";
      if (
        (logFeatureSad("mcp_list_tools", C),
        (h ? logMCPDebug : logMCPError)(e.name, `Failed to fetch tools: ${p}`),
        (e.toolsListError = p),
        h)
      )
        e.discoveryBearerRejected = !0;
      let w = [];
      if ((getMcpClientState().toolsListErrorByResult.set(w, p), !h)) {
        let F = et(e.config, e.name);
        logEvent("tengu_mcp_degraded", {
          reason: S("tools_list_failed"),
          transportType: fromEnum(e.config.type ?? "stdio"),
          ...F,
          mcpServerName: mcpNameForAnalytics_GATE_EVALUATED(normalizeMcpName(e.name), shouldSendMcpServerTelemetry(e.name, e.config)),
        });
      }
      return (ur().toolLists.delete(getMcpServerConfigCacheKey(e.name, e.config)), w);
    }
  },
  (e) => getMcpServerConfigCacheKey(e.name, e.config),
  () => ur().toolLists,
);
function Xo(e, t, o, r, d, p) {
  let h = formatConnectionError(t, e.config),
    C = e.config.type === "claudeai-proxy" && isListAuthError(t),
    A = e.config.type === "claudeai-proxy" && isClaudeAiBearerRejectedError(t);
  if (A) e.discoveryBearerRejected = !0;
  let w = C
    ? `${o}_needs_auth`
    : A
      ? `${o}_claudeai_bearer_rejected`
      : (t instanceof ProtocolError || t instanceof SdkError) && !(t instanceof SdkHttpError)
        ? `${o}_${Vo[t.code] ?? "mcperr_other"}`
        : h.includes("timed out")
          ? `${o}_timeout`
          : `${o}_failed`;
  if ((r(w), (C || A ? logMCPDebug : logMCPError)(e.name, `Failed to fetch ${p}: ${h}`), !C && !A))
    logEvent("tengu_mcp_degraded", {
      reason: d,
      transportType: fromEnum(e.config.type ?? "stdio"),
      ...et(e.config, e.name),
      mcpServerName: mcpNameForAnalytics_GATE_EVALUATED(normalizeMcpName(e.name), shouldSendMcpServerTelemetry(e.name, e.config)),
    });
}
var fetchResourcesForClient = h7(
    async (e) => {
      if (e.type !== "connected") return [];
      try {
        if (!e.capabilities?.resources) {
          let r = [];
          return (recordRawResourcesForResult(r, []), r);
        }
        let t = await nn(
          Xe(e.client),
          e.name,
          e.config,
          "resources/list",
          ListResourcesResultSchema,
          (r) => r.resources,
        );
        logFeatureOk("mcp_list_resources");
        let o = t.map((r) => ({ ...r, server: e.name }));
        return (recordRawResourcesForResult(o, t), o);
      } catch (t) {
        (Xo(
          e,
          t,
          "mcp_list_resources",
          (r) => logFeatureSad("mcp_list_resources", r),
          S("resources_list_failed"),
          "resources",
        ),
          ur().resourceLists.delete(getMcpServerConfigCacheKey(e.name, e.config)));
        let o = [];
        if (t instanceof ProtocolError && t.code === ErrorCode.MethodNotFound) recordRawResourcesForResult(o, []);
        else getMcpClientState().discoveryFetchErrors.set(o, ge(t));
        return o;
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
        let t = await nn(
          Xe(e.client),
          e.name,
          e.config,
          "resources/templates/list",
          ListResourceTemplatesResultSchema,
          (o) => o.resourceTemplates,
        );
        return (
          logEvent("tengu_mcp_resource_templates_fetched", {
            template_count: t.length,
          }),
          logFeatureOk("mcp_list_resource_templates"),
          t.map((o) => ({ ...o, server: e.name }))
        );
      } catch (t) {
        (ur().resourceTemplateLists.delete(getMcpServerConfigCacheKey(e.name, e.config)),
          logMCPDebug(e.name, `Failed to fetch resource templates: ${formatConnectionError(t, e.config)}`));
        let o = [];
        if (!(t instanceof ProtocolError && t.code === ErrorCode.MethodNotFound))
          getMcpClientState().discoveryFetchErrors.set(o, ge(t));
        return o;
      }
    },
    (e) => getMcpServerConfigCacheKey(e.name, e.config),
    () => ur().resourceTemplateLists,
  );
function refreshResourceTemplates(e, t) {
  let o = [];
  for (let r of e) {
    if (r.type !== "connected") continue;
    if (r.name in t) continue;
    o.push(fetchResourceTemplatesForClient(r).then((d) => ({ client: r, templates: d })));
  }
  return Promise.all(o);
}
async function completeResourceTemplate(e, t, o, r, d) {
  if (!e.capabilities?.completions) return [];
  try {
    let p = await Xe(e.client).complete({
      ref: { type: "ref/resource", uri: t },
      argument: { name: o, value: r },
      context: Object.keys(d).length > 0 ? { arguments: d } : void 0,
    });
    return (logFeatureOk("mcp_complete_resource_template"), p.completion.values);
  } catch (p) {
    return (
      logFeatureBad(
        "mcp_complete_resource_template",
        "mcp_complete_resource_template_failed",
      ),
      logMCPDebug(e.name, `Failed to complete resource template: ${formatConnectionError(p, e.config)}`),
      []
    );
  }
}
var fetchCommandsForClient = h7(
  async (e) => {
    if (e.type !== "connected") return [];
    try {
      if (!e.capabilities?.prompts) {
        let r = [];
        return (recordRawCommandsForResult(r, []), r);
      }
      let t = await nn(
        Xe(e.client),
        e.name,
        e.config,
        "prompts/list",
        ListPromptsResultSchema,
        (r) => r.prompts,
      );
      logFeatureOk("mcp_list_prompts");
      let o = hydrateCommandsFromListing(e, t);
      return (recordRawCommandsForResult(o, t), o);
    } catch (t) {
      (Xo(
        e,
        t,
        "mcp_list_prompts",
        (r) => logFeatureSad("mcp_list_prompts", r),
        S("prompts_list_failed"),
        "commands",
      ),
        ur().commandLists.delete(getMcpServerConfigCacheKey(e.name, e.config)));
      let o = [];
      if (t instanceof ProtocolError && t.code === ErrorCode.MethodNotFound) recordRawCommandsForResult(o, []);
      else getMcpClientState().discoveryFetchErrors.set(o, ge(t));
      return o;
    }
  },
  (e) => getMcpServerConfigCacheKey(e.name, e.config),
  () => ur().commandLists,
);
function hydrateCommandsFromListing(e, t) {
  let o = sanitizeDeep(t),
    r = e.config,
    d = (r.type === "http" || r.type === "sse") && pA(r.url),
    p = getOfficialPluginPromptOverrides(e.config);
  return o.map((h) => {
    let C = Object.values(h.arguments ?? {}),
      A = C.map((F) => F.name),
      w = p?.prompts?.[h.name] ?? h.description;
    return {
      type: "prompt",
      name: "mcp__" + normalizeMcpName(e.name) + "__" + h.name,
      description: w ?? "",
      hasUserSpecifiedDescription: !!w,
      contentLength: 0,
      isEnabled: () => !0,
      isHidden: !1,
      isMcp: !0,
      progressMessage: "running",
      userFacingName() {
        return d ? h.name : `${e.name}:${h.name} (MCP)`;
      },
      aliases: d
        ? [`${e.name}:${h.name}`, `${e.name}:${h.name} (MCP)`]
        : void 0,
      argNames: A,
      source: "mcp",
      async getPromptForCommand(F, z) {
        let Q = F.trim(),
          O = Q ? Q.split(/\s+/) : [];
        try {
          let ne = C.filter((N, re) => N.required && O[re] === void 0).map(
            (N) => N.name,
          );
          if (ne.length > 0)
            throw Error(
              `Missing required ${pluralize(ne.length, "argument")}: ${ne.join(", ")}. Usage: /mcp__${normalizeMcpName(e.name)}__${h.name} ${A.join(" ")}`,
            );
          let le = await ensureConnectedClient(e, {
              signal: z.abortController.signal,
              context: "MCP prompt command",
            }),
            Te = await Xe(le.client).getPrompt({
              name: h.name,
              arguments: ict(A, O),
            }),
            Me = getImageLimitsForModel(z.options.mainLoopModel),
            $e = await Promise.all(
              Te.messages.map((N) => transformResultContent(N.content, le.name, Me, z.storageV5)),
            );
          return (logFeatureOk("mcp_get_prompt"), $e.flat());
        } catch (ne) {
          if (!yt(ne))
            if (e.config.type === "claudeai-proxy" && isClaudeAiBearerRejectedError(ne))
              (logFeatureSad("mcp_get_prompt", "mcp_get_prompt_claudeai_bearer_rejected"),
                logMCPDebug(
                  e.name,
                  `Error running command '${h.name}': ${formatConnectionError(ne, e.config)}`,
                ));
            else
              (logFeatureBad("mcp_get_prompt", "mcp_get_prompt_failed"),
                logMCPError(
                  e.name,
                  `Error running command '${h.name}': ${formatConnectionError(ne, e.config)}`,
                ));
          throw ne;
        }
      },
    };
  });
}
async function callIdeRpc(e, t, o) {
  return (
    await callMCPTool({
      client: o,
      tool: e,
      args: t,
      signal: createAbortController().signal,
      imageLimits: DEFAULT_IMAGE_LIMITS,
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
async function reconnectMcpServerDistrusted(e, t, o, r) {
  if (!isDiscoveryCacheUsable()) return reconnectMcpServerImpl(e, t, o, r);
  let d = ir();
  if ((await awaitDiscoveryCacheFlush(dropDiscoveryEntry(e, t)), isRemoteTransport(t) && ir() !== d)) return inertReconnectShape(e, t);
  return reconnectMcpServerImpl(e, t, o, r);
}
async function reconnectMcpServerImpl(e, t, o, r) {
  let d = ir(),
    p = isRemoteTransport(t),
    h = () => p && ir() !== d,
    C = () => inertReconnectShape(e, t);
  try {
    if ((invalidateKeychainCache(), await clearServerCache(e, t), h())) return C();
    let A = connectToServer(e, t, void 0, o, r),
      w = await A;
    if (w.type === "needs-auth") {
      if (
        (logMCPDebug(
          e,
          "Reconnect returned 'needs-auth'; retrying once after cache clear",
        ),
        h())
      )
        return C();
      let $e = getMcpServerConfigCacheKey(e, t);
      if (!isDiscoveryCacheEnabled() || ur().connections.get($e) === A) ur().connections.delete($e);
      w = await connectToServer(e, t, void 0, o, r);
    }
    if (h()) {
      if (w.type === "connected") await detachAndCloseConnection(w);
      return C();
    }
    if (w.type !== "connected")
      return (
        logFeatureSad("mcp_reconnect", "mcp_reconnect_not_connected"),
        { client: w, tools: [], commands: [] }
      );
    if (t.type !== "claudeai-proxy") removeMcpAuthCacheEntry(e, o);
    if (t.type === "http" || t.type === "sse") await wLt(e, t);
    evictMemoizedDiscoveryCachePaths(e);
    let F;
    if (isDiscoveryCacheEnabled()) F = await Qx(e, t);
    if (h()) return (await detachAndCloseConnection(w), C());
    let z = !!w.capabilities?.resources,
      [Q, O, ne, le] = await Promise.all([
        fetchToolsForClient(w, o),
        fetchCommandsForClient(w),
        isMcpSkillsEnabled() && z ? wt.fetchMcpSkillsForClient(w, o) : Promise.resolve([]),
        z ? fetchResourcesForClient(w) : Promise.resolve([]),
      ]);
    if (h()) return (await detachAndCloseConnection(w), C());
    if (w.discoveryAuthFailure)
      return (
        logFeatureSad("mcp_reconnect", "mcp_reconnect_needs_auth_discovery"),
        {
          client: { name: e, type: "needs-auth", config: t },
          tools: [],
          commands: [],
        }
      );
    if (t.type === "claudeai-proxy" && !w.discoveryBearerRejected) removeMcpAuthCacheEntry(e, o);
    if (
      t.type === "claudeai-proxy" &&
      !w.toolsListError &&
      !w.discoveryBearerRejected
    )
      markClaudeAiServerConnected(e, o);
    persistLiveListing(w, {
      tools: Q,
      commands: O,
      resources: le,
      identityEpoch: d,
      grantLeg: F,
    });
    let Te = [...O, ...ne],
      Me = [];
    if (z) {
      if (![listMcpResourcesTool, readMcpResourceTool].some((N) => Q.some((re) => matchesToolName(re, N.name))))
        Me.push(listMcpResourcesTool, readMcpResourceTool, readMcpResourceDirTool);
    }
    if (w.discoveryBearerRejected)
      logFeatureSad("mcp_reconnect", "mcp_reconnect_bearer_rejected");
    else if (w.toolsListError)
      logFeatureSad("mcp_reconnect", "mcp_reconnect_tools_list_failed");
    else logFeatureOk("mcp_reconnect");
    return {
      client: w,
      tools: [...Q, ...Me],
      commands: Te,
      resources: le.length > 0 ? le : void 0,
      resourceTemplates: [],
    };
  } catch (A) {
    return (
      logFeatureBad("mcp_reconnect", "mcp_reconnect_failed"),
      logMCPError(e, `Error during reconnection: ${formatConnectionError(A, t)}`),
      {
        client: { name: e, type: "failed", config: t },
        tools: [],
        commands: [],
      }
    );
  }
}
async function Co(e, t, o) {
  await mapWithConcurrency(e, o, { concurrency: t });
}
async function awaitEachWithDeadline(e, t) {
  if (e.length === 0) return 0;
  let o,
    r = new Promise((d) => {
      o = setTimeout((p) => p("deadline"), t, d);
    });
  try {
    let d = await Promise.all(
      e.map((p) =>
        Promise.race([
          p.then(
            () => "settled",
            () => "settled",
          ),
          r,
        ]),
      ),
    );
    return countMatching(d, (p) => p === "deadline");
  } finally {
    clearTimeout(o);
  }
}
async function getMcpToolsCommandsAndResources(e, t, o, r) {
  let d = ir(),
    p = (I) => ir() !== d && isRemoteTransport(I),
    h = (I) => {
      if (!p(I.client.config)) e({ ...I, attemptEpoch: d });
    };
  ensureDiscoveryCacheAccount();
  let C = !1,
    A = Object.entries(t ?? (await getAllMcpConfigs()).servers),
    w = [];
  for (let I of A)
    if (isMcpServerDisabled(I[0]))
      h({
        client: { name: I[0], type: "disabled", config: I[1] },
        tools: [],
        commands: [],
      });
    else w.push(I);
  let F = w.length,
    z = countMatching(w, ([I, L]) => L.type === "stdio"),
    Q = countMatching(w, ([I, L]) => L.type === "sse"),
    O = countMatching(w, ([I, L]) => L.type === "http"),
    ne = countMatching(w, ([I, L]) => L.type === "sse-ide"),
    le = countMatching(w, ([I, L]) => L.type === "ws-ide"),
    Te = w.filter(([I, L]) => isLocalMcpServer(L)),
    Me = w.filter(([I, L]) => !isLocalMcpServer(L)),
    $e = {
      totalServers: F,
      stdioCount: z,
      sseCount: Q,
      httpCount: O,
      sseIdeCount: ne,
      wsIdeCount: le,
    },
    N = [],
    re = async ([I, L]) => {
      try {
        if (isMcpServerDisabled(I)) {
          h({
            client: { name: I, type: "disabled", config: L },
            tools: [],
            commands: [],
          });
          return;
        }
        if (isMcpServerBlockedAtConnectTime(I, L)) {
          (logMCPDebug(I, "Skipping connection (blocked by managed policy)"),
            h({
              client: { name: I, type: "failed", config: L, error: MCP_BLOCKED_BY_POLICY_MESSAGE },
              tools: [],
              commands: [],
            }));
          return;
        }
        if (cct(L)) {
          h({
            client: { name: I, type: "needs-auth", config: L },
            tools: createMcpAuthStubTools(I, L),
            commands: [],
          });
          return;
        }
        if (
          (L.type === "claudeai-proxy" ||
            L.type === "http" ||
            L.type === "sse") &&
          !isCliOwnedMcpConfig(L) &&
          ((await isMcpAuthCached(I, L, o)) ||
            ((L.type === "http" || L.type === "sse") && needsMcpServerAuth(I, L, await readStoredMcpOAuth())))
        ) {
          if (L.type !== "claudeai-proxy" && L.pluginSource === void 0)
            logMCPDebug(I, "Skipping connection (cached needs-auth)");
          h({
            client: { name: I, type: "needs-auth", config: L },
            tools: createMcpAuthStubTools(I, L),
            commands: [],
          });
          return;
        }
        if (
          (L.type === "stdio" || L.type === void 0) &&
          L.pluginSource !== void 0 &&
          (await isMcpAuthCached(I, L, o))
        ) {
          h({
            client: {
              name: I,
              type: "failed",
              config: L,
              error:
                "Skipping connection (recent failure cached; retries automatically in 15 min, or edit the plugin config to retry now)",
            },
            tools: [],
            commands: [],
          });
          return;
        }
        let Se = (await hasLiveConnection(I, L))
            ? { kind: "miss", reason: "live-connection" }
            : await checkDiscoveryCacheAdmission(I, L),
          ie = applyCapabilityServeTimeMiss(Se);
        if (ie.kind === "fresh" || ie.kind === "stale") {
          (Fn(), await evictStaleFailedConnectMemoForServe(I, L));
          let { entry: E, ageMs: ue } = ie,
            ae = {
              name: I,
              type: "cached",
              config: L,
              capabilities: E.capabilities,
              ...(E.serverInfo && {
                serverInfo: {
                  name: E.serverInfo.name,
                  version: E.serverInfo.version,
                },
              }),
              cacheSavedAt: E.savedAt,
            },
            se = hydrateToolsFromListing(ae, E.tools, Date.now(), "cache", Ko(ae)),
            Ie = hydrateCommandsFromListing(ae, E.commands),
            Ce = E.resources.map((Fe) => ({ ...Fe, server: I })),
            Be = (E.templates ?? []).map((Fe) => ({ ...Fe, server: I })),
            De = !!E.capabilities.resources || Ce.length > 0,
            Oe = [];
          if (De && !C) ((C = !0), Oe.push(listMcpResourcesTool, readMcpResourceTool, readMcpResourceDirTool));
          if (
            (logEvent("tengu_mcp_discovery_source", {
              source: S(ie.kind === "fresh" ? "cache_fresh" : "cache_stale"),
              transportType: fromEnum(L.type ?? "stdio"),
              entryAgeMs: ue,
              ...et(L, I),
            }),
            logFeatureOk("mcp_discovery_cache"),
            ur().settledCachedDialFailures.delete(getMcpServerConfigCacheKey(I, L)),
            ur().refusedCachedRows.delete(getMcpServerConfigCacheKey(I, L)),
            h({
              client: ae,
              tools: [...se, ...Oe],
              commands: Ie,
              resources: Ce.length > 0 ? Ce : void 0,
              resourceTemplates: Be.length > 0 ? Be : void 0,
            }),
            ie.kind === "stale")
          )
            (async () => {
              let Fe = await Qx(I, L),
                X,
                de = async () => {
                  if ((X !== void 0 && isDialDisposed(X)) || ir() !== d) return;
                  (logFeatureSad("mcp_discovery_cache", "strike"),
                    await recordDiscoveryCacheStrike(I, L, { identityEpoch: d, grantLeg: Fe }));
                },
                V = await acquireDiscoveryCacheRefreshLock(I, L);
              if (!V) return;
              if (isMcpServerDisabled(I)) {
                (await V().catch(() => {}), Zt(I, L, "disabled"));
                return;
              }
              if (isMcpServerBlockedAtConnectTime(I, L)) {
                (await V().catch(() => {}), Zt(I, L, "policy"));
                return;
              }
              let Pe = (te) => {
                  if (!(!(X !== void 0 && isDialDisposed(X)) && ir() === d)) return;
                  if (te.type !== "needs-auth")
                    ur().connections.delete(getMcpServerConfigCacheKey(I, L));
                  let Ye = getMcpClientState().cachedFirstDialArmsRan;
                  if (Ye.has(te)) return;
                  if ((Ye.add(te), te.type === "needs-auth")) kn(I, L);
                  else if (te.type === "failed") $n(te, !1);
                },
                be = (te) => {
                  let je = getMcpClientState().cachedFirstDialArmsRan;
                  if (je.has(te)) return;
                  (je.add(te), kn(I, L));
                },
                Ee = !1;
              try {
                ((X = connectToServer(I, L, $e, o, r)),
                  getMcpClientState().swrRefreshDialsInFlight.add(X),
                  X.then(
                    () => {
                      Ee = !0;
                    },
                    () => {
                      Ee = !0;
                    },
                  ));
                let te = await boundDial(X, {
                  serverName: I,
                  context: "MCP discovery-cache stale refresh",
                });
                if (te.type !== "connected") {
                  (Pe(te), await de());
                  return;
                }
                if (isDialDisposed(X) || ir() !== d) return;
                if (
                  E.negotiatedEra !== void 0 &&
                  te.protocolEra !== void 0 &&
                  te.protocolEra !== E.negotiatedEra
                ) {
                  if (
                    (logMCPDebug(
                      I,
                      "Discovery cache entry dropped: server negotiated a different protocol era on revalidation",
                    ),
                    await dropDiscoveryEntry(I, L).catch(() => {}),
                    !isDialDisposed(X) && ir() === d)
                  )
                    be(te);
                  return;
                }
                let je = !!te.capabilities?.resources;
                evictMemoizedDiscoveryCachePaths(I);
                let Ye = await Qx(I, L);
                if (isDialDisposed(X) || ir() !== d) return;
                let [ze, ye, ve, xe] = await Promise.all([
                    fetchToolsForClient(te, o),
                    fetchCommandsForClient(te),
                    fetchResourcesForClient(te),
                    je ? fetchResourceTemplatesForClient(te) : Promise.resolve([]),
                  ]),
                  Ze = getDiscoveryFetchError(xe) === void 0 ? xe : void 0;
                if (isDialDisposed(X) || Pt(X, I, L) || ir() !== d) return;
                if (!isMcpServerDisabled(I) && !isMcpServerBlockedAtConnectTime(I, L)) {
                  if (
                    !(await persistRawDiscoveryIfComplete(te, {
                      tools: ze,
                      commands: ye,
                      resources: ve,
                      templates: Ze,
                      identityEpoch: d,
                      grantLeg: Ye,
                    }))
                  )
                    await de();
                }
                if (
                  !(X !== void 0 && isDialDisposed(X)) &&
                  !(X !== void 0 && Pt(X, I, L)) &&
                  ir() === d
                )
                  be(te);
              } catch {
                if (X !== void 0 && !Ee) {
                  let te = X;
                  te.then(
                    (je) => {
                      if (je.type !== "connected")
                        (Pe(je), de().catch(() => {}));
                      else
                        (getMcpClientState().swrRefreshDialsInFlight.delete(te),
                          (E.negotiatedEra !== void 0 &&
                          je.protocolEra !== void 0 &&
                          je.protocolEra !== E.negotiatedEra
                            ? dropDiscoveryEntry(I, L).catch(() => {})
                            : Promise.resolve()
                          ).then(() => {
                            if (!isDialDisposed(te) && ir() === d) be(je);
                          }));
                    },
                    () => {
                      de().catch(() => {});
                    },
                  );
                } else await de();
              } finally {
                if (X !== void 0 && Ee) getMcpClientState().swrRefreshDialsInFlight.delete(X);
                await V().catch(() => {});
              }
            })();
          return;
        }
        let _e = connectToServer(I, L, $e, o, r),
          ee = await _e,
          W = connectToServer.cache?.get?.(getMcpServerConfigCacheKey(I, L)) === _e;
        if (isDiscoveryCacheEnabled() && isCacheOutcomeMiss(ie))
          logEvent("tengu_mcp_discovery_source", {
            source: S(discoverySourceForMiss(ie)),
            transportType: fromEnum(L.type ?? "stdio"),
            ...et(L, I),
          });
        if (isDialDisposed(_e)) return;
        if (p(L)) {
          if (ee.type === "connected" && Pt(_e, I, L)) detachAndCloseConnection(ee);
          return;
        }
        if (ee.type !== "connected") {
          h({
            client: ee,
            tools: ee.type === "needs-auth" ? createMcpAuthStubTools(I, L) : [],
            commands: [],
          });
          return;
        }
        if (
          ((ee.discoveryBearerRejected = void 0), L.type !== "claudeai-proxy")
        )
          removeMcpAuthCacheEntry(I, o);
        if (L.type === "http" || L.type === "sse") await wLt(I, L);
        N.push(
          (async () => {
            try {
              let E = !!ee.capabilities?.resources;
              evictMemoizedDiscoveryCachePaths(I);
              let ue = await Qx(I, L);
              if (isDiscoveryCacheEnabled() && (isDialDisposed(_e) || p(L))) {
                if (!isDialDisposed(_e) && Pt(_e, I, L)) detachAndCloseConnection(ee);
                return;
              }
              let [ae, se, Ie, Ce, Be] = await Promise.all([
                fetchToolsForClient(ee, o),
                fetchCommandsForClient(ee),
                isMcpSkillsEnabled() && E
                  ? wt.fetchMcpSkillsForClient(ee, o)
                  : Promise.resolve([]),
                E ? fetchResourcesForClient(ee) : Promise.resolve([]),
                E && isDiscoveryCacheEligible(ee.config) ? fetchResourceTemplatesForClient(ee) : Promise.resolve([]),
              ]);
              if (p(L)) {
                if (Pt(_e, I, L)) detachAndCloseConnection(ee);
                return;
              }
              if (isDiscoveryCacheEnabled() && isDialDisposed(_e)) return;
              if (isDiscoveryCacheEnabled() && W && Pt(_e, I, L)) {
                if (
                  connectToServer.cache?.get?.(getMcpServerConfigCacheKey(I, L)) === void 0 &&
                  Xe(ee.client).onclose !== void 0
                )
                  (detachAndCloseConnection(ee),
                    h({
                      client: {
                        name: I,
                        type: "failed",
                        config: L,
                        error: "Connection closed during discovery",
                        errorCode: "ConnectionClosed",
                      },
                      tools: [],
                      commands: [],
                    }));
                return;
              }
              if (ee.discoveryAuthFailure) {
                h({
                  client: { name: I, type: "needs-auth", config: L },
                  tools: createMcpAuthStubTools(I, L),
                  commands: [],
                });
                return;
              }
              if (L.type === "claudeai-proxy" && !ee.discoveryBearerRejected)
                removeMcpAuthCacheEntry(I, o);
              if (
                L.type === "claudeai-proxy" &&
                !ee.toolsListError &&
                !ee.discoveryBearerRejected
              )
                markClaudeAiServerConnected(I, o);
              let De = [...se, ...Ie];
              if (!E) recordRawResourcesForResult(Ce, []);
              let Oe = getDiscoveryFetchError(Be) === void 0 ? Be : void 0,
                X =
                  !isDiscoveryCacheEnabled() ||
                  isDialDisposed(_e) ||
                  Pt(_e, I, L) ||
                  ir() !== d ||
                  isMcpServerDisabled(I) ||
                  isMcpServerBlockedAtConnectTime(I, L)
                    ? void 0
                    : persistRawDiscoveryIfComplete(ee, {
                        tools: ae,
                        commands: se,
                        resources: Ce,
                        templates: Oe,
                        identityEpoch: d,
                        grantLeg: ue,
                      }),
                de = [];
              if (E && !C) ((C = !0), de.push(listMcpResourcesTool, readMcpResourceTool, readMcpResourceDirTool));
              (h({
                client: ee,
                tools: [...ae, ...de],
                commands: De,
                resources: Ce.length > 0 ? Ce : void 0,
                resourceTemplates: void 0,
              }),
                await X);
            } catch (E) {
              (logMCPError(I, `Error fetching tools/commands/resources: ${formatConnectionError(E, L)}`),
                h({
                  client: { name: I, type: "failed", config: L },
                  tools: [],
                  commands: [],
                }));
            }
          })(),
        );
      } catch (Se) {
        (logMCPError(I, `Error fetching tools/commands/resources: ${formatConnectionError(Se, L)}`),
          h({
            client: { name: I, type: "failed", config: L },
            tools: [],
            commands: [],
          }));
      }
    };
  (await Promise.all([Co(Te, getMcpServerConnectionBatchSize(), re), Co(Me, getRemoteMcpServerConnectionBatchSize(), re)]),
    await Promise.all(N));
}
function prefetchAllMcpResources(e, t, o) {
  return new Promise((r) => {
    let d = 0,
      p = 0;
    if (((d = Object.keys(e).length), d === 0)) {
      r({ clients: [], tools: [], commands: [] });
      return;
    }
    let h = [],
      C = [],
      A = [],
      w = !1,
      F = () => {
        if (w) return;
        w = !0;
        let z = A.reduce((Q, O) => {
          let ne =
            O.name.length +
            (O.description ?? "").length +
            (O.argumentHint ?? "").length;
          return Q + ne;
        }, 0);
        (logEvent("tengu_mcp_tools_commands_loaded", {
          tools_count: C.length,
          commands_count: A.length,
          commands_metadata_length: z,
        }),
          r({ clients: h, tools: C, commands: A }));
      };
    getMcpToolsCommandsAndResources(
      (z) => {
        if (
          (h.push(z.client),
          C.push(...z.tools),
          A.push(...z.commands),
          p++,
          p >= d)
        )
          F();
      },
      e,
      t,
      o,
    )
      .then(F)
      .catch((z) => {
        (logMCPError("prefetchAllMcpResources", `Failed to get MCP resources: ${l(z)}`),
          r({ clients: [], tools: [], commands: [] }));
      });
  });
}
async function transformResultContent(e, t, o, r, d = !1) {
  switch (e.type) {
    case "text": {
      let p = { type: "text", text: e.text };
      if (d) {
        let h = e._meta;
        if (h) p._meta = h;
      }
      return [p];
    }
    case "audio": {
      let p = e;
      return await Mn(
        Buffer.from(p.data, "base64"),
        p.mimeType,
        t,
        `[Audio from ${t}] `,
        r,
      );
    }
    case "image": {
      if (mo(e.mimeType)) {
        let { block: p } = await buildImageBlock({
          data: String(e.data),
          mediaType: e.mimeType,
          limits: o,
        });
        return [p];
      }
      return await Mn(
        Buffer.from(String(e.data), "base64"),
        e.mimeType,
        t,
        `[Image from ${t}] `,
        r,
      );
    }
    case "resource": {
      let p = e.resource,
        h = `[Resource from ${t} at ${p.uri}] `;
      if ("text" in p) return [{ type: "text", text: `${h}${p.text}` }];
      else if ("blob" in p)
        if (mo(p.mimeType)) {
          let { block: A } = await buildImageBlock({
              data: p.blob,
              mediaType: p.mimeType,
              limits: o,
            }),
            w = [];
          if (h) w.push({ type: "text", text: h });
          return (w.push(A), w);
        } else
          return await Mn(Buffer.from(p.blob, "base64"), p.mimeType, t, h, r);
      return [];
    }
    case "resource_link": {
      let p = e,
        h = `[Resource link: ${p.name}] ${p.uri}`;
      if (p.description) h += ` (${p.description})`;
      return [{ type: "text", text: h }];
    }
    default:
      return [];
  }
}
async function Mn(e, t, o, r, d) {
  let p = `mcp-${normalizeMcpName(o)}-blob-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    h = await persistBinaryContent(e, t, p, void 0, d);
  if ("error" in h)
    return [
      {
        type: "text",
        text: `${r}Binary content (${t || "unknown type"}, ${e.length} bytes) could not be saved to disk: ${h.error}`,
      },
    ];
  return [{ type: "text", text: formatBinaryContentSavedMessage(h.filepath, t, h.size, r) }];
}
function inferCompactSchema(e, t = 2) {
  if (e === null) return "null";
  if (Array.isArray(e)) {
    if (e.length === 0) return "[]";
    return `[${inferCompactSchema(e[0], t - 1)}]`;
  }
  if (typeof e === "object") {
    if (t <= 0) return "{...}";
    let r = Object.entries(e)
        .slice(0, 10)
        .map(([p, h]) => `${p}: ${inferCompactSchema(h, t - 1)}`),
      d = Object.keys(e).length > 10 ? ", ..." : "";
    return `{${r.join(", ")}${d}}`;
  }
  return typeof e;
}
async function transformMCPResult(e, t, o, r, d) {
  if (e && typeof e === "object") {
    if ("toolResult" in e)
      return { content: String(e.toolResult), type: "toolResult" };
    if ("structuredContent" in e && e.structuredContent !== void 0) {
      let h = jsonStringify(e.structuredContent),
        C = inferCompactSchema(e.structuredContent);
      if ("content" in e && Array.isArray(e.content)) {
        let A = e.content.filter(
          (w) => w && typeof w === "object" && "type" in w && w.type !== "text",
        );
        if (A.length > 0) {
          let w = (await Promise.all(A.map((F) => transformResultContent(F, o, r, d, !0)))).flat();
          if (w.length > 0) {
            let F = [...w, { type: "text", text: h }];
            return { content: F, type: "contentArray", schema: inferCompactSchema(stripTextBlockMeta(F)) };
          }
        }
      }
      return { content: h, type: "structuredContent", schema: C };
    }
    if ("content" in e && Array.isArray(e.content)) {
      let h = (
        await Promise.all(e.content.map((C) => transformResultContent(C, o, r, d, !0)))
      ).flat();
      return { content: h, type: "contentArray", schema: inferCompactSchema(stripTextBlockMeta(h)) };
    }
  }
  let p = `MCP server "${o}" tool "${t}": unexpected response format`;
  throw (
    logMCPError(o, p),
    Object.assign(new R(p, "MCP tool unexpected response format"), {
      mcpErrorSource: "downstream_error",
    })
  );
}
function To(e) {
  if (!e || typeof e === "string") return !1;
  return e.some((t) => t.type === "image");
}
async function processMCPResult(e, t, o, r, d, p, h) {
  let { content: C, type: A, schema: w } = await transformMCPResult(e, t, o, r, p);
  if (o === "ide") return C;
  if (d && !To(C)) return C;
  if (!(await shouldTruncateOutput(C, h))) return C;
  let F = estimateContentTokens(C);
  if (a.ENABLE_MCP_LARGE_OUTPUT_FILES === !1)
    return (
      logEvent("tengu_mcp_large_result_handled", {
        outcome: S("truncated"),
        reason: S("env_disabled"),
        sizeEstimateTokens: F,
      }),
      await maybeTruncateOutput(C, h)
    );
  if (!C) return C;
  if (To(C))
    return (
      logEvent("tengu_mcp_large_result_handled", {
        outcome: S("truncated"),
        reason: S("contains_images"),
        sizeEstimateTokens: F,
      }),
      await maybeTruncateOutput(C, h)
    );
  let z = Date.now(),
    Q = `mcp-${normalizeMcpName(o)}-${normalizeMcpName(t)}-${z}`,
    O = stripTextBlockMeta(C),
    ne = isMcpSubagentPromptEnabled() || getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_singleton_unwrap", !0),
    le = Array.isArray(O) ? O.length : void 0,
    Te =
      ne &&
      Array.isArray(O) &&
      O.length === 1 &&
      O[0]?.type === "text" &&
      !("annotations" in O[0]) &&
      !("_meta" in O[0])
        ? O[0].text
        : void 0,
    Me = typeof O === "string" ? O : (Te ?? jsonStringify(O, null, 2)),
    $e = A === "toolResult" || Te !== void 0,
    N = $e ? "text" : "json",
    re;
  if ($e) {
    let Se = Me.split(`
`);
    if (Se.length > 1 && Se.at(-1) === "") Se.pop();
    let ie = 0;
    for (let _e of Se) if (_e.length > ie) ie = _e.length;
    re = { count: Se.length, maxLen: ie };
  }
  let I = await persistToolResultToFile(Me, Q, getCurrentToolResultsDir(), p);
  if (isPersistError(I)) {
    let Se = Me.length;
    return (
      logEvent("tengu_mcp_large_result_handled", {
        outcome: S("truncated"),
        reason: S("persist_failed"),
        sizeEstimateTokens: F,
      }),
      `Error: result (${Se.toLocaleString()} characters) exceeds maximum allowed tokens. Failed to save output to file: ${I.error}. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data.`
    );
  }
  logEvent("tengu_mcp_large_result_handled", {
    outcome: S("persisted"),
    reason: S("file_saved"),
    sizeEstimateTokens: F,
    persistedSizeChars: I.originalSize,
    resultType: fromEnum(A),
    blockCount: le,
    persistedAs: fromEnum(N),
  });
  let L = Te !== void 0 ? getPersistedFormatLabel("toolResult") : getPersistedFormatLabel(A, w);
  return formatTruncatedResultMessage(I.filepath, I.originalSize, L, void 0, re);
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
  ).filter((r) => ElicitRequestURLParamsSchema.safeParse(r).success);
}
async function callMCPToolWithUrlElicitationRetry({
  client: e,
  clientConnection: t,
  tool: o,
  args: r,
  meta: d,
  signal: p,
  onProgress: h,
  callToolFn: C = callMCPTool,
  requestDialog: A,
  hasResultSizeAnnotation: w = !1,
  imageLimits: F,
  toolExecution: z,
  taskRegistry: Q,
  toolUseId: O,
  onAwaitingUserInput: ne,
  ccrNeedsApprovalRetry: le,
  storageV5: Te,
  credentials: Me,
  taskBackground: $e,
  disallowTasks: N,
}) {
  let I = !1,
    L = (Se) =>
      Se.code === CCR_NEEDS_APPROVAL_ERROR_CODE &&
      typeof Se.data === "object" &&
      Se.data !== null &&
      "args_sha256" in Se.data &&
      !!le &&
      !!O &&
      !I &&
      getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_proxy_needs_approval_retry", !0);
  for (let Se = 0; ; Se++)
    try {
      let ie = () =>
          C({
            client: e,
            tool: o,
            args: r,
            meta: d,
            signal: p,
            onProgress: h,
            hasResultSizeAnnotation: w,
            imageLimits: F,
            toolExecution: z,
            taskRegistry: Q,
            toolUseId: O,
            storageV5: Te,
            credentials: Me,
            requestDialog: A,
            taskBackground: $e,
            disallowTasks: N,
          }),
        _e;
      if (!isMcpRpcTracingEnabled()) _e = await ie();
      else {
        let ee;
        try {
          ee = truncateOtelContent(jsonStringify(r)).content;
        } catch {
          ee = void 0;
        }
        _e = await runInOtelSpan(
          "claude_code.mcp.rpc",
          {
            spanType: "mcp.rpc",
            attrs: {
              "rpc.system": "mcp",
              "rpc.service": e.name,
              "rpc.method": "tools/call",
              mcp_tool: o,
              attempt: Se,
              ...(ee !== void 0 && { mcp_args: ee }),
            },
            isExpectedError: (W) =>
              W instanceof ProtocolError && (W.code === ErrorCode.UrlElicitationRequired || L(W)),
          },
          ie,
        );
      }
      if (I) logFeatureOk("mcp_ccr_needs_approval");
      return _e;
    } catch (ie) {
      if (!(ie instanceof ProtocolError)) {
        if (I && !(ie instanceof McpSessionExpiredError))
          logFeatureBad("mcp_ccr_needs_approval", "retry_failed");
        throw ie;
      }
      if (L(ie) && le && O) {
        I = !0;
        let W = ie.data,
          E =
            typeof W === "object" &&
            W !== null &&
            "tool_name" in W &&
            typeof W.tool_name === "string"
              ? W.tool_name
              : void 0,
          {
            canUseTool: ue,
            tool: ae,
            fullyQualifiedName: se,
            toolUseContext: Ie,
            parentMessage: Ce,
          } = le;
        (logMCPDebug(
          e.name,
          `Tool '${o}' returned -32003 needs_approval (tool_name=${E}) \u2014 surfacing retroactive ` +
            "approval card",
        ),
          logEvent("tengu_mcp_proxy_needs_approval_retry", { attempt: Se }),
          ne?.(!0));
        let Be = {
            behavior: "ask",
            suppressAlwaysAllowRule: !0,
            message: `The ${se} connector requires approval for this call.`,
            decisionReason: {
              type: "other",
              reason: "This connector call requires your approval to proceed.",
            },
          },
          De;
        try {
          De = await ue(ae, r, Ie, Ce, O, Be);
        } finally {
          ne?.(!1);
        }
        if (p.aborted) throw new Ve();
        if (De.behavior === "allow") {
          if (De.updatedInput !== void 0 && !Qs(De.updatedInput, r))
            throw (
              logFeatureSad("mcp_ccr_needs_approval", "edited_input"),
              new R(
                `The approval for ${se} was conditioned on edited arguments, which can't be applied on this retroactive card. To run with different arguments, deny and re-issue the call.`,
                "ccr_proxy_needs_approval_edited_input",
              )
            );
          continue;
        }
        if (De === Be)
          throw (logFeatureSad("mcp_ccr_needs_approval", "no_prompt_surface"), ie);
        throw (
          logFeatureOk("mcp_ccr_needs_approval"),
          new R(
            De.message || `Approval denied for ${se}`,
            "ccr_proxy_needs_approval_denied",
          )
        );
      }
      if (ie.code !== ErrorCode.UrlElicitationRequired) {
        if (I) logFeatureBad("mcp_ccr_needs_approval", "retry_failed");
        else if (ie.code === CCR_NEEDS_APPROVAL_ERROR_CODE && le)
          logFeatureBad("mcp_ccr_needs_approval", "arm_not_fired");
        throw ie;
      }
      if (Se - (I ? 1 : 0) >= 3) throw ie;
      let _e = extractUrlElicitationsFromMcpError(ie),
        ee = t.name;
      if (_e.length === 0)
        throw (
          logMCPDebug(
            ee,
            `Tool '${o}' returned -32042 but no valid elicitations in error data`,
          ),
          ie
        );
      logMCPDebug(
        ee,
        `Tool '${o}' requires URL elicitation (error -32042, attempt ${Se + 1}), processing ${_e.length} elicitation(s)`,
      );
      for (let W of _e) {
        let { elicitationId: E } = W,
          ue = await runElicitationHooksV2(ee, W, p);
        if (ue) {
          if (
            (logMCPDebug(ee, `URL elicitation ${E} resolved by hook: ${jsonStringify(ue)}`),
            ue.action !== "accept")
          )
            return {
              content: `URL elicitation was ${ue.action === "decline" ? "declined" : ue.action + "ed"} by a hook. The tool "${o}" could not complete because it requires the user to open a URL.`,
              urlElicitationDeclined: { url: W.url },
              isError: !0,
            };
          continue;
        }
        let ae;
        ne?.(!0);
        try {
          ae = A
            ? await A(MCP_URL_ELICITATION_DIALOG, { serverName: ee, params: W }, { signal: p })
            : { action: "cancel" };
        } finally {
          ne?.(!1);
        }
        let se = await runElicitationResultHooksV2(ee, ae, p, "url", E);
        if (se.action !== "accept")
          return (
            logMCPDebug(
              ee,
              `User ${se.action === "decline" ? "declined" : se.action + "ed"} URL elicitation ${E}`,
            ),
            {
              content: `URL elicitation was ${se.action === "decline" ? "declined" : se.action + "ed"} by the user. The tool "${o}" could not complete because it requires the user to open a URL.`,
              urlElicitationDeclined: { url: W.url },
              isError: !0,
            }
          );
        logMCPDebug(ee, `Elicitation ${E} completed, retrying tool call`);
      }
    }
}
function ei(e, t) {
  if (!e.isError) return;
  let o = "Unknown error";
  if (Array.isArray(e.content) && e.content.length > 0) {
    let d = e.content.flatMap((p) => {
      if (p == null || typeof p !== "object") return [];
      if ("text" in p) return [String(p.text)];
      if (p.type === "resource_link") {
        let h = p,
          C = `[Resource link: ${h.name}] ${h.uri}`;
        if (h.description) C += ` (${h.description})`;
        return [C];
      }
      return [];
    });
    if (d.length > 0)
      o = d.join(`
`);
  } else if ("error" in e) o = String(e.error);
  logMCPError(t, o);
  let r = stripReservedMetaKeys(e._meta);
  throw new McpToolCallError(o, "MCP tool returned error", r ? { _meta: r } : void 0);
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
  return Xe(e).request({ method: "tools/list" }, ListToolsResultSchema, {
    ...t,
    cacheMode: "bypass",
  });
}
function readResourceRaw(e, t, o) {
  return Xe(e).readResource({ uri: t }, { ...o, cacheMode: "bypass" });
}
function invokeToolRaw(e, t, o) {
  let r = t;
  return Xe(e).callTool(r, o);
}
var er = 60000,
  tr = { allowTask: !0 },
  ul = createLazyValue(() => it({ resultType: k("task") }));
function createSep2663TaskBinding(e, { taskId: t, requestDialog: o }) {
  let r = Xe(e.client);
  return {
    request: (p, h, C) =>
      r.request({ method: p, params: h }, ResultSchema, {
        ...tr,
        signal: C.signal,
        headers: C.headers,
        timeout: er,
      }),
    resolveInputRequest: (p, h, C) =>
      nr({
        key: p,
        inputRequest: h,
        task: { taskId: t },
        connected: e,
        signal: C,
        requestDialog: o,
        transportErrorState: void 0,
      }),
  };
}
async function nr({
  key: e,
  inputRequest: t,
  task: o,
  connected: r,
  signal: d,
  requestDialog: p,
  transportErrorState: h,
}) {
  let C = r.name;
  switch (t.method) {
    case "elicitation/create": {
      let A = ElicitRequestParamsSchema.safeParse(t.params);
      if (!A.success) {
        logMCPDebug(
          C,
          `Task ${o.taskId}: input request '${e}' carries invalid elicitation params: ${A.error.message}`,
        );
        return;
      }
      if (!p || ke())
        throw (
          logMCPDebug(
            C,
            `Task ${o.taskId}: input request '${e}' needs an elicitation surface this ${p ? "non-interactive session" : "call"} has none of; leaving the task running for a session that has one`,
          ),
          new It.TaskInputUnservableError(
            `task ${o.taskId} input request '${e}' cannot be surfaced in this session`,
          )
        );
      return handleElicitationRequestV2({
        connected: r,
        params: A.data,
        signal: d,
        requestDialog: p,
        transportErrorState: h,
      });
    }
    case "roots/list":
      return getRootsListResponse(serverReceivesPluginToolStagingRoot(r.config));
    default:
      logMCPDebug(
        C,
        `Task ${o.taskId}: input request '${e}' has unsupported method ${t.method}`,
      );
      return;
  }
}
async function callMCPTool({
  client: e,
  tool: t,
  args: o,
  meta: r,
  signal: d,
  onProgress: p,
  hasResultSizeAnnotation: h = !1,
  imageLimits: C,
  toolExecution: A,
  taskRegistry: w,
  toolUseId: F,
  idleTimeoutMs: z,
  isAuthRetry: Q = !1,
  storageV5: O,
  credentials: ne,
  requestDialog: le,
  taskBackground: Te,
  disallowTasks: Me,
}) {
  let { client: $e, name: N, config: re, transportErrorState: I } = e,
    L = Xe($e),
    Se = Date.now(),
    ie = ir(),
    _e,
    ee = { armedAt: 0 };
  I?.activeCallWatchdogs.add(ee);
  try {
    logMCPDebug(N, `Calling MCP tool: ${t}`);
    let W = z ?? getMcpToolIdleTimeoutMs(re),
      E = Se,
      ue,
      ae = new Promise((ye, ve) => {
        ue = ve;
      });
    _e = setInterval(() => {
      let ye = Math.floor((Date.now() - Se) / 1000);
      if (
        (logMCPDebug(N, `Tool '${t}' still running (${ye}s elapsed)`),
        ee.armedAt > 0 && Date.now() - ee.armedAt > 90000)
      ) {
        (logMCPDebug(
          N,
          `Tool '${t}' aborting: transport error ${Math.floor((Date.now() - ee.armedAt) / 1000)}s ago, response presumed lost`,
        ),
          ue(
            Object.assign(
              new R(
                `MCP server "${N}" transport dropped mid-call; response for tool "${t}" was lost`,
                "MCP transport lost mid-call",
              ),
              { mcpErrorSource: "downstream_unreachable" },
            ),
          ));
        return;
      }
      if (I?.pendingElicitations) E = Date.now();
      else if (I && I.lastElicitationClosedAt > E)
        E = I.lastElicitationClosedAt;
      if (W > 0 && Date.now() - E > W) {
        let ve = Math.floor((Date.now() - E) / 1000);
        (logMCPDebug(
          N,
          `Tool '${t}' aborting: no response or progress notification for ${ve}s (idle timeout ${Math.floor(W / 1000)}s)`,
        ),
          ue(
            Object.assign(
              new R(
                `MCP server "${N}" tool "${t}" sent no response or progress for ${ve}s; aborting. If this server is configured in your MCP settings, set a per-server "timeout" (ms) to allow longer silent runs for just this server; otherwise set CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT (ms) globally (0 disables).`,
                "MCP tool idle timeout",
              ),
              { mcpErrorSource: "downstream_unreachable" },
            ),
          ));
      }
    }, 30000);
    let se = getMcpToolTimeoutMs(re),
      Ie,
      Ce = new Promise((ye, ve) => {
        Ie = setTimeout(
          (xe, Ze, Le, ot) => {
            xe(
              Object.assign(
                new R(
                  `MCP server "${Ze}" tool "${Le}" timed out after ${Math.floor(ot / 1000)}s`,
                  "MCP tool timeout",
                ),
                { mcpErrorSource: "downstream_unreachable" },
              ),
            );
          },
          se,
          ve,
          N,
          t,
          se,
        );
      }),
      Be = () => {
        if (Ie) clearTimeout(Ie);
        if (_e !== void 0) (clearInterval(_e), (_e = void 0));
        I?.activeCallWatchdogs.delete(ee);
      },
      De = Me === !0 || brt() || (ke() && Te === void 0),
      Oe = (ye, ve, xe) => {
        ((ee.armedAt = 0),
          (E = Date.now()),
          p?.({
            type: "mcp_progress",
            status: ye,
            serverName: N,
            toolName: t,
            progress: xe,
            progressMessage: ve,
          }));
      },
      Fe = async () => {
        let xe = isMcpTasksEnabled() && !De && L.getProtocolEra() === "modern",
          Ze = {},
          Le = r;
        return await L.callTool(
          { name: t, arguments: o, _meta: Le },
          {
            ...Ze,
            signal: d,
            timeout: se,
            onprogress: (Qe) => {
              if (((ee.armedAt = 0), (E = Date.now()), p))
                p({
                  type: "mcp_progress",
                  status: "progress",
                  serverName: N,
                  toolName: t,
                  progress: Qe.progress,
                  total: Qe.total,
                  progressMessage: Qe.message,
                });
            },
          },
        );
      },
      X,
      de = (ye, ve, xe) => {
        let Ze = Bt.mcpTransportFingerprint(e.config),
          {
            registryId: Le,
            driveAbort: ot,
            ttlExpiresAt: Qe,
            killed: rt,
          } = Bt.registerOrAdoptSep2663Task({
            taskRegistry: xe,
            task: ye,
            serverName: N,
            toolName: t,
            toolUseId: F,
            transportFingerprint: Ze,
            adoptRegistryId: ve.share.registryId,
            storageV5: ve.storageV5,
          });
        ((ve.share.becameTask = !0),
          ve.onBackgrounded(),
          logMCPDebug(
            N,
            rt
              ? `Tool '${t}' returned task ${ye.taskId} after background task ${Le} was stopped; cancelling it`
              : `Tool '${t}' returned task ${ye.taskId} (${ye.status}); backgrounded as ${Le}`,
          ));
        let Ne = (ut, Ae) => createSep2663TaskBinding(ut, { taskId: Ae, requestDialog: le });
        Bt.startSep2663BackgroundDrive({
          taskRegistry: xe,
          registryId: Le,
          serverName: N,
          toolName: t,
          mcpTaskId: ye.taskId,
          pollIntervalMs: ye.pollIntervalMs,
          ttlExpiresAt: Qe,
          driveAbort: ot,
          initialBinding: Ne(e, ye.taskId),
          initialConfig: e.config,
          bindingFactory: Ne,
          transportFingerprint: Ze,
          storageV5: ve.storageV5,
          credentials: ve.credentials,
        });
        let dt = isRecord(ye._meta) ? ye._meta[It.AGENT_TASK_META_KEY] : void 0;
        return {
          ...Bt.buildSep2663PlaceholderResult({
            serverName: N,
            toolName: t,
            registryId: Le,
            mcpTaskId: ye.taskId,
            stopped: rt,
            modelImmediateResponse: It.parseAgentTaskMeta(ye._meta)
              ?.modelImmediateResponse,
          }),
          ...(!rt &&
            dt !== void 0 && { _meta: { [It.AGENT_TASK_META_KEY]: dt } }),
        };
      },
      V = async (ye) => {
        (logMCPDebug(
          N,
          `Tool '${t}' returned task ${ye.taskId} (${ye.status}); polling inline`,
        ),
          Oe(
            "progress",
            yn.boundMcpStatusMessage(ye.statusMessage) ??
              `Task ${shortenMcpTaskId(ye.taskId)} ${ye.status}`,
            0,
          ));
        let ve = 0,
          xe = await It.driveMcpTask({
            errorText: (Le) => formatConnectionError(Le, re),
            task: ye,
            signal: Pe.signal,
            log: (Le) => logMCPDebug(N, Le),
            request: (Le, ot, Qe) =>
              L.request({ method: Le, params: ot }, ResultSchema, {
                ...tr,
                signal: Qe.signal,
                headers: Qe.headers,
                timeout: er,
              }),
            onStatus: (Le) => {
              ((ve += 1),
                Oe(
                  "progress",
                  yn.boundMcpStatusMessage(Le.statusMessage) ??
                    `Task ${shortenMcpTaskId(Le.taskId)} ${Le.status.replace("_", " ")}`,
                  ve,
                ));
            },
            resolveInputRequest: (Le, ot) =>
              nr({
                key: Le,
                inputRequest: ot,
                task: ye,
                connected: e,
                signal: Pe.signal,
                requestDialog: le,
                transportErrorState: I,
              }),
          });
        if (xe.status === "completed")
          return (logMCPDebug(N, `Task ${ye.taskId} completed`), CompatibilityCallToolResultSchema.parse(xe.result));
        let Ze = yn.boundMcpStatusMessage(xe.error.message) ?? "";
        if (
          (logMCPDebug(
            N,
            `Task ${ye.taskId} ended without a result: ${xe.error.kind} \u2014 ${Ze}`,
          ),
          d.aborted)
        )
          throw new Ve();
        throw new R(
          `MCP server "${N}" task for tool "${t}" ${xe.error.kind === "cancelled" || xe.error.kind === "input_unservable" ? "was cancelled" : "failed"}: ${Ze}`,
          "MCP task did not complete",
        );
      },
      Pe = new AbortController(),
      be = () => Pe.abort();
    d.addEventListener("abort", be, { once: !0 });
    let Ee = await Promise.race([Fe(), Ce, ae]).finally(() => {
      (d.removeEventListener("abort", be), be(), Be());
    });
    if (X) return (recordReplyDegradedState(N, void 0), X);
    ei(Ee, N);
    let te = Date.now() - Se,
      je =
        te < 1000
          ? `${te}ms`
          : te < 60000
            ? `${Math.floor(te / 1000)}s`
            : `${Math.floor(te / 60000)}m ${Math.floor((te % 60000) / 1000)}s`;
    logMCPDebug(N, `Tool '${t}' completed successfully in ${je}`);
    let Ye = matchCodeIndexingToolByServerName(N);
    if (Ye)
      logEvent("tengu_code_indexing_tool_used", {
        tool: fromEnum(Ye),
        source: S("mcp"),
        success: !0,
      });
    let ze = await processMCPResult(Ee, t, N, C, h, O, ne);
    return (
      recordReplyDegradedState(N, void 0),
      {
        content: ze,
        _meta: Ee._meta,
        structuredContent: Ee.structuredContent,
        resourceLinks: collectResourceLinks(Ee.content),
      }
    );
  } catch (W) {
    if (!d.aborted) recordReplyDegradedState(N, W);
    if (_e !== void 0) clearInterval(_e);
    I?.activeCallWatchdogs.delete(ee);
    let E = Date.now() - Se;
    if (d?.aborted !== !0 && W instanceof Error && W.name !== "AbortError")
      logMCPDebug(N, `Tool '${t}' failed after ${Math.floor(E / 1000)}s: ${formatConnectionError(W, re)}`);
    if (W instanceof Error) {
      let ae =
          W instanceof ProtocolError
            ? void 0
            : W instanceof SdkHttpError
              ? W.status
              : "code" in W && typeof W.code === "number"
                ? W.code
                : void 0,
        se =
          (re.type === "http" || re.type === "sse" || re.type === "ws") &&
          !!re.headersHelper,
        Ie = hasCliOwnedBearerProvider(re),
        Ce =
          W instanceof OAuthError
            ? W.code
            : "errorCode" in W && typeof W.errorCode === "string"
              ? W.errorCode
              : void 0,
        Be =
          Ce !== void 0 &&
          !["invalid_grant", "invalid_client", "unauthorized_client"].includes(
            Ce,
          ) &&
          /^HTTP 40[13]\b/.test(W.message),
        De = ae === 401 || W instanceof UnauthorizedError || Be || (ae === 403 && se),
        Oe =
          (re.type === "http" || re.type === "sse") &&
          !re.headersHelper &&
          !configHasAuthorizationHeader(re)
            ? re
            : void 0,
        Fe = !Q && De && !se && Oe !== void 0 && (await hasStoredRefreshToken(N, Oe));
      if ((se || Ie || Oe !== void 0) && !Q) {
        let V = getMcpServerConfigCacheKey(N, re);
        if (ir() !== ie)
          throw new R(
            `MCP tool call to server "${N}" was aborted: the account changed before re-authentication`,
            "MCP tool call aborted: account changed before reauth",
          );
        let Pe = ur().reauthInFlight,
          be = getMcpClientState(),
          Ee = Pe.get(V),
          te = Ee !== void 0 && Ee.epoch === ie ? Ee.promise : void 0;
        be.reauthDecisionSinkForTest?.(
          te !== void 0
            ? "joined"
            : Ee !== void 0
              ? "stale_refused"
              : "started",
        );
        let je =
          te !== void 0 &&
          ((W instanceof SdkError && W.code === ProtocolErrorCode.ConnectionClosed) ||
            (W instanceof ProtocolError && W.code === -32000));
        if ((je || (De && se) || (De && Ie) || Fe) && !isMcpServerDisabled(N) && !isMcpServerBlockedAtConnectTime(N, re)) {
          if (
            (logMCPDebug(
              N,
              se
                ? `Tool '${t}' returned ${ae ?? 401}; re-running headersHelper and retrying once`
                : Ie
                  ? `Tool '${t}' returned ${ae ?? 401}; session credential rejected \u2014 reconnecting and retrying once`
                  : `Tool '${t}' returned ${ae ?? 401}; refresh token stored \u2014 reconnecting and retrying once`,
            ),
            je)
          )
            logFeatureSad(
              se ? "mcp_headers_helper" : "mcp_oauth_refresh",
              "collateral_rejoin",
            );
          if (!te) {
            (logFeatureSad(se ? "mcp_headers_helper" : "mcp_oauth_refresh", "reauth_retry"),
              (L.onclose = void 0));
            let ye = ie;
            te = (async () => (
              await clearServerCache(N, re),
              connectToServer(N, re, void 0, void 0, ne)
            ))();
            let ve = { promise: te, epoch: ye };
            (Pe.set(V, ve),
              te
                .then((xe) => {
                  if (xe.type === "connected" && ir() === ye) reauthReconnectEmitter.emit(N, re);
                })
                .finally(() => {
                  if (Pe.get(V) === ve && !be.holdStaleReauthEntryForTest)
                    Pe.delete(V);
                })
                .catch(() => {}));
          }
          let ze = await te;
          if (ir() !== ie) {
            if (ze.type === "connected") await detachAndCloseConnection(ze);
            throw new R(
              `MCP tool call to server "${N}" was aborted: the account changed during re-authentication`,
              "MCP tool call aborted: account changed during reauth",
            );
          }
          if (ze.type === "connected" && (isMcpServerDisabled(N) || isMcpServerBlockedAtConnectTime(N, re))) await clearServerCache(N, re);
          else if (ze.type === "connected")
            return callMCPTool({
              client: ze,
              tool: t,
              args: o,
              meta: r,
              signal: d,
              onProgress: p,
              hasResultSizeAnnotation: h,
              imageLimits: C,
              toolExecution: A,
              taskRegistry: w,
              requestDialog: le,
              taskBackground: Te,
              toolUseId: F,
              idleTimeoutMs: z,
              isAuthRetry: !0,
              storageV5: O,
              credentials: ne,
              disallowTasks: Me,
            });
          if (
            (logMCPDebug(
              N,
              `Auth reconnect returned '${ze.type}'; falling through to needs-auth`,
            ),
            isDiscoveryCacheEnabled() && ze.type !== "needs-auth")
          ) {
            let ye = connectToServer.cache?.get?.(V);
            if (
              ye !== void 0 &&
              (await ht(ye)) === ze &&
              connectToServer.cache?.get?.(V) === ye
            )
              ur().connections.delete(V);
          }
        }
      }
      if (De && Ie)
        throw (
          await clearServerCache(N, re),
          logMCPDebug(
            N,
            `Tool '${t}' rejected the session credential (${ae ?? 401}); failing the call and clearing the connection for a fresh retry later`,
          ),
          Object.assign(
            new R(
              `MCP server "${N}" rejected the session credential (HTTP ${ae ?? 401})`,
              "MCP server rejected the session credential",
            ),
            { mcpErrorSource: "other" },
          )
        );
      if (De) {
        logMCPDebug(N, "Tool call returned 401 Unauthorized - token may have expired");
        let V = re.type === "claudeai-proxy" && re.eligible === !1,
          Pe = et(re, N),
          be = shouldSendMcpServerTelemetry(N, re);
        throw (
          logEvent("tengu_mcp_tool_call_auth_error", {
            errorCode: fromNumber(ae ?? 401),
            transportType: fromEnum(re.type ?? "stdio"),
            authErrorKind: fromEnum(V ? "not_connected" : "token_expired"),
            ...Pe,
            mcpServerName: mcpNameForAnalytics_GATE_EVALUATED(normalizeMcpName(N), be),
            mcpToolName: getSampledMcpToolName(normalizeMcpName(N), normalizeMcpName(t), be),
          }),
          new McpAuthError(
            N,
            V
              ? `MCP server "${N}" needs to be connected in claude.ai (run /mcp to connect it)`
              : `MCP server "${N}" requires re-authorization (token expired)`,
          )
        );
      }
      let X = isMcpSessionExpiredError(W),
        de =
          ((W instanceof SdkError && W.code === ProtocolErrorCode.ConnectionClosed) ||
            (W instanceof ProtocolError &&
              W.code === -32000 &&
              W.message.includes("Connection closed"))) &&
          (re.type === "http" || re.type === "claudeai-proxy");
      if (X || de) {
        logMCPDebug(
          N,
          `MCP session expired during tool call (${X ? "stale session" : "connection closed"}), clearing connection cache for re-initialization`,
        );
        let V = et(re, N),
          Pe = shouldSendMcpServerTelemetry(N, re),
          be = getSampledMcpToolName(normalizeMcpName(N), normalizeMcpName(t), Pe);
        throw (
          logEvent("tengu_mcp_session_expired", {
            errorCode: ae !== void 0 ? fromNumber(ae) : void 0,
            transportType: fromEnum(re.type ?? "stdio"),
            ...V,
            mcpServerName: mcpNameForAnalytics_GATE_EVALUATED(normalizeMcpName(N), Pe),
            mcpToolName: be,
          }),
          await clearServerCache(N, re),
          new McpSessionExpiredError(N, X ? "session_expired_404" : "connection_closed_http")
        );
      }
    }
    let ue = W;
    if (
      (W instanceof SdkError && W.code === ProtocolErrorCode.InvalidResult) ||
      W instanceof AA ||
      ((ue?.name === "ZodError" || ue?.name === "$ZodError") &&
        Array.isArray(ue?.issues))
    )
      throw new McpResponseSchemaError(N, W);
    if (
      !(W instanceof Error && W.name === "AbortError") &&
      !(d?.aborted === !0 && W instanceof SdkError)
    )
      throw W;
    return { content: TOOL_CALL_INTERRUPTED_MESSAGE, interrupted: !0, isError: !0 };
  } finally {
    if (_e !== void 0) clearInterval(_e);
  }
}
function ni(e) {
  if (e.message.content[0]?.type !== "tool_use") return;
  return e.message.content[0].id;
}
async function setupSdkMcpClients(e, t, o) {
  let r = [],
    d = [],
    p = [];
  Fn();
  let h = await Promise.allSettled(
    Object.entries(e).map(async ([A, w]) => {
      let F = new SdkMcpClientTransport(A, t),
        z = new Client(
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
            websiteUrl: CLAUDE_CODE_URL,
          },
          {
            capabilities: {},
            jsonSchemaValidator: new LegacyDialectToleratingValidator(),
            versionNegotiation: getMcpVersionNegotiation("sdk-control"),
          },
        );
      try {
        await z.connect(F);
        let Q = z.getServerCapabilities(),
          O = z.getInstructions(),
          ne = capMcpInstructions(O, A),
          le = {
            type: "connected",
            serverInfo: z.getServerVersion(),
            name: A,
            capabilities: Q || {},
            instructions: ne,
            negotiatedProtocolVersion: z.getNegotiatedProtocolVersion(),
            protocolEra: z.getProtocolEra(),
            client: Eo(z),
            config: { ...w, scope: "dynamic" },
            cleanup: async () => {
              await z.close();
            },
          },
          Te = getMcpServerConfigCacheKey(le.name, le.config);
        if ((ur().toolLists.delete(Te), isMcpSkillsEnabled()))
          wt.invalidateMcpSkillsForServer(Te);
        let Me = [];
        if (Q?.tools) {
          let N = await fetchToolsForClient(le, o);
          Me.push(...N);
        }
        let $e =
          isMcpSkillsEnabled() && Q?.resources ? await wt.fetchMcpSkillsForClient(le, o) : [];
        return (logFeatureOk("mcp_sdk_connect"), { client: le, tools: Me, commands: $e });
      } catch (Q) {
        return (
          logFeatureBad("mcp_sdk_connect", "mcp_sdk_connect_failed"),
          logMCPError(A, `Failed to connect SDK MCP server: ${Q}`),
          {
            client: {
              type: "failed",
              name: A,
              config: { ...w, scope: "user" },
            },
            tools: [],
            commands: [],
          }
        );
      }
    }),
  );
  for (let A of h)
    if (A.status === "fulfilled")
      (r.push(A.value.client),
        d.push(...A.value.tools),
        p.push(...A.value.commands));
  if (r.some((A) => A.type === "connected" && !!A.capabilities?.resources)) {
    if (![listMcpResourcesTool, readMcpResourceTool].some((w) => d.some((F) => matchesToolName(F, w.name)))) d.push(listMcpResourcesTool, readMcpResourceTool, readMcpResourceDirTool);
  }
  return { clients: r, tools: d, commands: p };
}
async function cleanupConnectedMcpClients(e) {
  await Promise.all(
    e.map(async (t) => {
      if (t.type !== "connected") return;
      try {
        await t.cleanup();
      } catch (o) {
        logForDebugging(`MCP client cleanup failed for ${t.name}: ${o}`, { level: "error" });
      }
    }),
  );
}
var oi = [MCP_PROTOCOL_VERSION_2026_07_28, MCP_PROTOCOL_VERSION_2025_11_25, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"];
function ri(e) {
  if (e === void 0) return;
  let t = oi.find((o) => o === e);
  return t === void 0 ? S("other") : fromEnum(t);
}
export {
  ClaudeAiProxyBearerRejectedError,
  GRANT_ELIGIBLE_DESIGN_WRITE_OPS,
  LISTEN_REOPEN_DELAYS_MS,
  LegacyDialectToleratingValidator,
  MCP_TREE_ID,
  applyCapabilityServeTimeMiss,
  areMcpConfigsEqual,
  armListenStreamReopen,
  awaitEachWithDeadline,
  buildFirstPartyDesignConsentAsk,
  buildSseStreamHeaders,
  burnListingDiscoverPrior,
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
  createSep2663TaskBinding,
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
  getListingDiscoverPrior,
  ir as getMcpIdentityEpoch,
  getMcpRequestTimeoutMs,
  getMcpServerConnectionBatchSize,
  getMcpToolIdleTimeoutMs,
  getMcpToolTimeoutMs,
  getMcpToolsCommandsAndResources,
  getMcpVersionNegotiation,
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
  isMcpListenDenylisted,
  isMcpNegotiationDenylisted,
  isMcpSessionExpiredError,
  isRetryableListError,
  isSchemaApiValidateEnabledFor,
  isSchemaNormalizeEnabledFor,
  isTerminalConnectionError,
  listToolsRaw,
  listingPriorRejectionReason,
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
  resolveMcpNegotiationTransportKind,
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
