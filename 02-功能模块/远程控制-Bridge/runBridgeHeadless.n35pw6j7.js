// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 172 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { buildClaudeAiSessionUrl } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { sleep, withDeadline, raceWithAbortSignal } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad, logFeatureBadAsync, withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { parseConfigInteger, isInProtectedNamespace } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { normalizePermissionModeAlias, ASCII_SPINNER_FRAMES, CHECK_MARK_GLYPH, CROSS_MARK_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { Ve, R, dt, l, A, dot, Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, jsonParse, changeWorkingDirectory, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize, normalizeWhitespace } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { isEssentialTrafficOnly, getNonessentialTrafficDisabledEnvVar, logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { BUILD_TOOL_COMMANDS, isVerifiablePath, findCommandsOnPath, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { getLauncherConfigError } from "../../01-核心基础设施/核心工具-进程与信号/process-wrapper-launcher.js";
import { resolveWrappedClaudeInvocation } from "../../01-核心基础设施/共享小工具-未细化/claude-launcher-invocation.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/共享小工具-未细化/diagnostics-log.js";
import { getStringWidth, truncateToWidth, formatDuration } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { ENVIRONMENTS_BETA, readBoundedFile, sanitizeSessionName, getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { redactGitRemoteCredentials } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { pickBy, invalidateAllSettings, isSettingsSourceEnabled, PROJECT_LOCAL_SETTINGS_SOURCES, buildMcpToolName, collectMcpToolPermissionRules, HOST_PROFILE_LEVELS, REMOTE_CONTROL_SHARE_HOST_PROFILE_KEY } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import {
  drainRegisteredWriteQueues,
  getMdmSettings,
  getHkcuSettings,
  getWslInheritsWindowsSettings,
  replaceMdmSettings,
  loadMdmSettingsFromOs,
  getSettingsParseErrorsForSource,
  getSettingsForSource,
  getAllPolicyTierSettings,
  getPolicySettingsLoadErrors,
} from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { splitToolRuleList } from "../工具Bash-Shell/permission-rule-parsing.js";
import { generateAdjectiveNounName } from "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import { validateBridgeId, toCompatSessionId, toInfraSessionId, sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { CLAUDE_CODE_REMOTE_SERVER_NAME, buildCcrMetaServerConfig, buildCcrSessionMetaUrl, getTrustedIngressOrigin } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import {
  ensureBridgeSpawnRootDir,
  REMOTE_CONTROL_CLI_TAG,
  REMOTE_CONTROL_AUTO_TAG,
  buildSessionEventsRequest,
  createAgentWorktree,
  getAgentWorktreeChanges,
  unlockAgentWorktree,
  removeAgentWorktree,
  MCP_SETTINGS_SCOPES,
  getMcpConfigsByScope,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getClaudeTempDir } from "../../01-核心基础设施/核心工具-路径与平台/temp-directory.js";
import { setAttestationFilterPolicy, REMOTE_IO_WARNING_PREFIX } from "./chunk-5ne99rq3.js";
import { isBridgeEnvReregisterEnabled, isCcrV2SendEventsEnabled, isCcrV2SessionCrudEnabled, isBridgeServerSessionConfigEnabled } from "./chunk-9estzwf5.js";
import { debugTruncate, debugBody, describeAxiosError, parseRetryAfterHeader, extractErrorDetail } from "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import { getAttestationFilterPolicy, getTrustedDeviceToken, withUntrustedDeviceRecovery } from "./chunk-tyce0p0b.js";
import { getBridgeAccessToken, getBridgeAccessTokenAsync, getBridgeSessionNamePrefix } from "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import { REMOTE_CONTROL_SUBSCRIPTION_REQUIRED_MESSAGE, REMOTE_CONTROL_NOT_LOGGED_IN_MESSAGE, BRIDGE_WORK_STATE_QUEUED } from "./remote-control-messages.js";
import "../自动更新-安装/install-diagnostics.js";
import { lockCurrentVersion } from "../自动更新-安装/native-installer.js";
import { removeGuiHostEntrypoint, removeRestrictedEnvVars } from "../../01-核心基础设施/共享小工具-未细化/session-env-scrubbing.js";
import { NESTED_SESSION_MARKER_ENV_VARS, NON_INHERITED_SESSION_ENV_VARS } from "../编排-Workflow/session-env-vars.js";
import { eI } from "../../00-第三方库/qrcode/chunk-x46ksw6d.js";
import { getBridgePollIntervalConfig } from "../../01-核心基础设施/共享小工具-未细化/bridge-poll-interval-config.js";
import { parseWorkSecret, sessionIdsMatch, buildSessionApiUrl, registerWorker } from "../../01-核心基础设施/共享小工具-未细化/work-secret.js";
import { resolveBridgeDaemonOwner, createBridgeTitleWriter } from "./chunk-1g5kqtqx.js";
import { isPlainObject, parsePlist } from "../../01-核心基础设施/共享小工具-未细化/plist-parser.js";
import { RECENT_ACTIVITY_WINDOW_MS, formatClockTime, buildSessionWebUrl, formatCodeAnywhereMessage, formatContinueCodingMessage, RERUN_REMOTE_CONTROL_CLI_MESSAGE, formatTerminalHyperlink } from "./remote-control-ui-strings.js";
import { trySetRawMode } from "../../01-核心基础设施/共享小工具-未细化/try-set-raw-mode.js";
import { appendClaudeCodeArgs } from "../../01-核心基础设施/共享小工具-未细化/claude-code-args.js";
import { getCooContextProperties } from "../../01-核心基础设施/共享小工具-未细化/coo-context-properties.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j86cs2ar.js";
import { REMOTE_CONTROL_DISABLED_BY_POLICY_MESSAGE } from "./remote-control-policy-messages.js";
import { createTokenRefreshScheduler } from "./chunk-4zd60pbm.js";
import { s, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getCurrentPlatform, getLinuxDistroInfo } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { getClientUserAgent } from "../../01-核心基础设施/共享小工具-未细化/user-agent.js";
import { countMatching, dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { randomUUID } from "crypto";
import { homedir, hostname } from "os";
import { basename, join as zn, resolve } from "path";
class Le extends Error {
  status;
  errorType;
  constructor(e, t, o) {
    super(e);
    ((this.name = "BridgeFatalError"), (this.status = t), (this.errorType = o));
  }
}
function Xt(e) {
  function t(w) {
    e.onDebug?.(w);
  }
  let o = 0,
    d = 100;
  async function p(w) {
    let _ = {
        Authorization: `Bearer ${w}`,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "anthropic-beta": ENVIRONMENTS_BETA.header,
        "x-environment-runner-version": e.runnerVersion,
        "User-Agent": getClientUserAgent(),
      },
      T = await e.getTrustedDeviceToken?.();
    if (T) _["X-Trusted-Device-Token"] = T;
    return _;
  }
  function r() {
    let w = e.getAccessToken();
    if (!w) throw Error(REMOTE_CONTROL_SUBSCRIPTION_REQUIRED_MESSAGE);
    return w;
  }
  async function C(w, _) {
    let T = r(),
      E = await w(T);
    if (E.status !== 401) return E;
    if (!e.onAuth401)
      return (t(`[bridge:api] ${_}: 401 received, no refresh handler`), E);
    if (
      (t(`[bridge:api] ${_}: 401 received, attempting token refresh`),
      await e.onAuth401(T))
    ) {
      t(`[bridge:api] ${_}: Token refreshed, retrying request`);
      let N = r(),
        ue = await w(N);
      if (ue.status !== 401) return ue;
      t(`[bridge:api] ${_}: Retry after refresh also got 401`);
    } else t(`[bridge:api] ${_}: Token refresh failed`);
    return E;
  }
  return {
    async registerBridgeEnvironment(w, _) {
      return withFeatureTelemetry(
        "bridge_environment_register",
        async () => {
          t(`[bridge:api] POST /v1/environments/bridge bridgeId=${w.bridgeId}`);
          let T = {
              machine_name: w.machineName,
              ...(w.machineId != null && { machine_id: w.machineId }),
              directory: w.dir,
              branch: w.branch,
              git_repo_url: redactGitRemoteCredentials(w.gitRepoUrl),
              max_sessions: w.maxSessions,
              metadata: { worker_type: w.workerType },
              ...(w.hostProfile && { host: w.hostProfile }),
              ...(w.reuseEnvironmentId && {
                environment_id: w.reuseEnvironmentId,
              }),
            },
            E = await C(
              async (W) =>
                at.post(`${e.baseUrl}/v1/environments/bridge`, T, {
                  headers: await p(W),
                  timeout: 15000,
                  signal: _,
                  validateStatus: (N) => N < 500,
                }),
              "Registration",
            );
          return (
            wt(E.status, E.data, "Registration", E.headers),
            t(
              `[bridge:api] POST /v1/environments/bridge -> ${E.status} environment_id=${E.data.environment_id}`,
            ),
            t(
              `[bridge:api] >>> ${debugBody({ ...T, ...(T.host && { host: { tools: T.host.tools.length, mcp: T.host.mcp_servers?.length ?? 0 } }) })}`,
            ),
            t(`[bridge:api] <<< ${debugBody(E.data)}`),
            E.data
          );
        },
        ar,
      );
    },
    async pollForWork(w, _, T, E, W) {
      validateBridgeId(w, "environmentId");
      let N = o;
      o = 0;
      let ue = {};
      if (E !== void 0) ue.reclaim_older_than_ms = E;
      if (W !== void 0) ue.poll_interval_ms = W;
      let ne = await at.get(`${e.baseUrl}/v1/environments/${w}/work/poll`, {
        headers: await p(_),
        params: Object.keys(ue).length > 0 ? ue : void 0,
        timeout: 1e4,
        signal: T,
        validateStatus: (Pe) => Pe < 500,
      });
      if ((wt(ne.status, ne.data, "Poll", ne.headers), !ne.data)) {
        if (((o = N + 1), o === 1 || o % d === 0))
          t(
            `[bridge:api] GET .../work/poll -> ${ne.status} (no work, ${o} consecutive empty polls)`,
          );
        return null;
      }
      return (
        t(
          `[bridge:api] GET .../work/poll -> ${ne.status} workId=${ne.data.id} type=${ne.data.data?.type}${ne.data.data?.id ? ` sessionId=${ne.data.data.id}` : ""}`,
        ),
        t(`[bridge:api] <<< ${debugBody(ne.data)}`),
        ne.data
      );
    },
    async acknowledgeWork(w, _, T) {
      (validateBridgeId(w, "environmentId"),
        validateBridgeId(_, "workId"),
        t(`[bridge:api] POST .../work/${_}/ack`));
      let E = await at.post(
        `${e.baseUrl}/v1/environments/${w}/work/${_}/ack`,
        {},
        { headers: await p(T), timeout: 1e4, validateStatus: (W) => W < 500 },
      );
      (wt(E.status, E.data, "Acknowledge"),
        t(`[bridge:api] POST .../work/${_}/ack -> ${E.status}`));
    },
    async stopWork(w, _, T, E) {
      (validateBridgeId(w, "environmentId"),
        validateBridgeId(_, "workId"),
        t(`[bridge:api] POST .../work/${_}/stop force=${E}`));
      let W = await at.post(
        `${e.baseUrl}/v1/environments/${w}/work/${_}/stop`,
        { force: E },
        { headers: await p(T), timeout: 1e4, validateStatus: (N) => N < 500 },
      );
      (wt(W.status, W.data, "StopWork"),
        t(`[bridge:api] POST .../work/${_}/stop -> ${W.status}`));
    },
    async deregisterEnvironment(w) {
      (validateBridgeId(w, "environmentId"),
        t(`[bridge:api] DELETE /v1/environments/bridge/${w}`));
      let _ = await C(
        async (T) =>
          at.delete(`${e.baseUrl}/v1/environments/bridge/${w}`, {
            headers: await p(T),
            timeout: 1e4,
            validateStatus: (E) => E < 500,
          }),
        "Deregister",
      );
      (wt(_.status, _.data, "Deregister"),
        t(`[bridge:api] DELETE /v1/environments/bridge/${w} -> ${_.status}`));
    },
    async archiveSession(w) {
      validateBridgeId(w, "sessionId");
      let _ = e.useCcrV2SessionCrud?.()
        ? `/v1/code/sessions/${toInfraSessionId(w)}/archive`
        : `/v1/sessions/${toCompatSessionId(w)}/archive`;
      t(`[bridge:api] POST ${_}`);
      let T = await C(
        async (E) =>
          at.post(
            `${e.baseUrl}${_}`,
            {},
            {
              headers: await p(E),
              timeout: 1e4,
              validateStatus: (W) => W < 500,
            },
          ),
        "ArchiveSession",
      );
      if (T.status === 409) {
        t(`[bridge:api] POST ${_} -> 409 (already archived)`);
        return;
      }
      (wt(T.status, T.data, "ArchiveSession"),
        t(`[bridge:api] POST ${_} -> ${T.status}`));
    },
    async reconnectSession(w, _, T) {
      return withFeatureTelemetry(
        "bridge_session_reconnect",
        async () => {
          (validateBridgeId(w, "environmentId"),
            validateBridgeId(_, "sessionId"),
            t(
              `[bridge:api] POST /v1/environments/${w}/bridge/reconnect session_id=${_}`,
            ));
          let E = await C(
            async (W) =>
              at.post(
                `${e.baseUrl}/v1/environments/${w}/bridge/reconnect`,
                { session_id: _ },
                {
                  headers: await p(W),
                  timeout: 1e4,
                  signal: T,
                  validateStatus: (N) => N < 500,
                },
              ),
            "ReconnectSession",
          );
          (wt(E.status, E.data, "ReconnectSession"),
            t(`[bridge:api] POST .../bridge/reconnect -> ${E.status}`));
        },
        ar,
      );
    },
    async heartbeatWork(w, _, T) {
      (validateBridgeId(w, "environmentId"),
        validateBridgeId(_, "workId"),
        t(`[bridge:api] POST .../work/${_}/heartbeat`));
      let E = await at.post(
        `${e.baseUrl}/v1/environments/${w}/work/${_}/heartbeat`,
        {},
        { headers: await p(T), timeout: 1e4, validateStatus: (W) => W < 500 },
      );
      return (
        wt(E.status, E.data, "Heartbeat"),
        t(
          `[bridge:api] POST .../work/${_}/heartbeat -> ${E.status} lease_extended=${E.data.lease_extended} state=${E.data.state}`,
        ),
        E.data
      );
    },
    async sendPermissionResponseEvent(w, _, T) {
      validateBridgeId(w, "sessionId");
      let { url: E, body: W } = buildSessionEventsRequest(
        e.baseUrl,
        w,
        [_],
        e.useCcrV2Routing?.() ?? !0,
      );
      t(`[bridge:api] POST ${E} type=${_.type}`);
      let N = await at.post(E, W, {
        headers: await p(T),
        timeout: 1e4,
        validateStatus: (ue) => ue < 500,
      });
      (wt(N.status, N.data, "SendPermissionResponseEvent"),
        t(`[bridge:api] POST ${E} -> ${N.status}`),
        t(`[bridge:api] >>> ${debugBody(W)}`),
        t(`[bridge:api] <<< ${debugBody(N.data)}`));
    },
  };
}
function wt(e, t, o, d) {
  if (e === 200 || e === 204) return;
  let p = extractErrorDetail(t),
    r = Wr(t);
  switch (e) {
    case 401:
      throw new Le(
        `${o}: Authentication failed (401)${p ? `: ${p}` : ""}. ${REMOTE_CONTROL_SUBSCRIPTION_REQUIRED_MESSAGE}`,
        401,
        r,
      );
    case 403:
      throw new Le(
        yt(r)
          ? "Remote Control session expired."
          : `${o}: Access denied (403)${p ? `: ${p}` : ""}. Check your organization permissions.`,
        403,
        r,
      );
    case 404:
      throw new Le(
        p ??
          `${o}: Not found (404). Remote Control may not be available for this organization.`,
        404,
        r,
      );
    case 410:
      throw new Le(
        p ?? "Remote Control session expired.",
        410,
        r ?? "environment_expired",
      );
    case 429: {
      let C = parseRetryAfterHeader(
        typeof d?.["retry-after"] === "string" ? d["retry-after"] : void 0,
      );
      throw Object.assign(
        Error(`${o}: Rate limited (429). Polling too frequently.`),
        C !== void 0 ? { status: e, retryAfterMs: C } : { status: e },
      );
    }
    default:
      throw Object.assign(
        Error(`${o}: Failed with status ${e}${p ? `: ${p}` : ""}`),
        { status: e },
      );
  }
}
function yt(e) {
  if (!e) return !1;
  return e.includes("expired") || e.includes("lifetime");
}
function Kt(e) {
  return e.status === 403 && e.message.includes("external_poll_sessions");
}
function ar(e) {
  if (e instanceof Le) return e.status === 401 ? "auth_failed" : "http_error";
  if (e instanceof Error) {
    if (e.message === REMOTE_CONTROL_SUBSCRIPTION_REQUIRED_MESSAGE) return "no_token";
    if ("status" in e && typeof e.status === "number") return "http_error";
  }
  return "request_failed";
}
function Wr(e) {
  if (e && typeof e === "object") {
    if (
      "error" in e &&
      e.error &&
      typeof e.error === "object" &&
      "type" in e.error &&
      typeof e.error.type === "string"
    )
      return e.error.type;
  }
  return;
}
import { createHash } from "crypto";
import {
  lstat,
  mkdtemp,
  rm as tn,
  writeFile,
} from "fs/promises";
import { join as Qt } from "path";
var Fr = /^[a-zA-Z0-9_-]{1,64}$/;
function dr(e, t = CLAUDE_CODE_REMOTE_SERVER_NAME) {
  if (!("tools" in e) || e.tools === void 0) return [];
  if (!Array.isArray(e.tools))
    return (
      logForDebugging("[bridge:meta-mcp] meta tools[] is not an array", { level: "warn" }),
      null
    );
  let o = [];
  for (let r of e.tools) {
    if (
      r === null ||
      typeof r !== "object" ||
      !("name" in r) ||
      typeof r.name !== "string" ||
      !Fr.test(r.name)
    )
      return (
        logForDebugging("[bridge:meta-mcp] injected tools[] entry is malformed", {
          level: "warn",
        }),
        null
      );
    o.push({
      name: r.name,
      ...("permission_policy" in r &&
        typeof r.permission_policy === "string" && {
          permission_policy: r.permission_policy,
        }),
    });
  }
  let { allow: d } = collectMcpToolPermissionRules({ [t]: { type: "http", tools: o } }),
    p = buildMcpToolName(t, "");
  return d.map((r) => (r.startsWith(p) ? r.slice(p.length) : r));
}
import { spawn } from "child_process";
import { createWriteStream } from "fs";
import { rm as qr } from "fs/promises";
import { dirname, join as lr } from "path";
import { createInterface } from "readline";
var Gr = 10,
  zr = 10;
function Rt(e) {
  return e.replace(/[^a-zA-Z0-9_-]/g, "_");
}
var Yr = {
  Read: "Reading",
  Write: "Writing",
  Edit: "Editing",
  MultiEdit: "Editing",
  Bash: "Running",
  Glob: "Searching",
  Grep: "Searching",
  WebFetch: "Fetching",
  WebSearch: "Searching",
  Task: "Running task",
  FileReadTool: "Reading",
  FileWriteTool: "Writing",
  FileEditTool: "Editing",
  GlobTool: "Searching",
  GrepTool: "Searching",
  BashTool: "Running",
  NotebookEditTool: "Editing notebook",
  LSP: "LSP",
};
function Xr(e, t) {
  let o = Yr[e] ?? e,
    d =
      t.file_path ??
      t.filePath ??
      t.pattern ??
      t.command?.slice(0, 60) ??
      t.url ??
      t.query ??
      "";
  if (d) return `${o} ${d}`;
  return o;
}
function Kr(e, t, o) {
  let d;
  try {
    d = jsonParse(e);
  } catch {
    return [];
  }
  if (!d || typeof d !== "object") return [];
  let p = d,
    r = [],
    C = Date.now();
  switch (p.type) {
    case "assistant": {
      let w = p.message;
      if (!w) break;
      let _ = w.content;
      if (!Array.isArray(_)) break;
      for (let T of _) {
        if (!T || typeof T !== "object") continue;
        let E = T;
        if (E.type === "tool_use") {
          let W = E.name ?? "Tool",
            N = E.input ?? {},
            ue = Xr(W, N);
          (r.push({ type: "tool_start", summary: ue, timestamp: C }),
            o(`[bridge:activity] sessionId=${t} tool_use name=${W} ${Qr(N)}`));
        } else if (E.type === "text") {
          let W = E.text ?? "";
          if (W.length > 0)
            (r.push({ type: "text", summary: W.slice(0, 80), timestamp: C }),
              o(`[bridge:activity] sessionId=${t} text "${W.slice(0, 100)}"`));
        }
      }
      break;
    }
    case "result": {
      let w = p.subtype;
      if (w === "success")
        (r.push({ type: "result", summary: "Session completed", timestamp: C }),
          o(`[bridge:activity] sessionId=${t} result subtype=success`));
      else if (w) {
        let T = p.errors?.[0] ?? `Error: ${w}`;
        (r.push({ type: "error", summary: T, timestamp: C }),
          o(
            `[bridge:activity] sessionId=${t} result subtype=${w} error="${T}"`,
          ));
      } else o(`[bridge:activity] sessionId=${t} result subtype=undefined`);
      break;
    }
    default:
      break;
  }
  return r;
}
function Jr(e) {
  if (e.parent_tool_use_id != null || e.isSynthetic || e.isReplay) return;
  let o = e.message?.content,
    d;
  if (typeof o === "string") d = o;
  else if (Array.isArray(o)) {
    for (let p of o)
      if (p && typeof p === "object" && p.type === "text") {
        d = p.text;
        break;
      }
  }
  return ((d = d?.trim()), d ? d : void 0);
}
function Qr(e) {
  let t = [];
  for (let [o, d] of Object.entries(e)) {
    if (typeof d === "string") t.push(`${o}="${d.slice(0, 100)}"`);
    if (t.length >= 3) break;
  }
  return t.join(" ");
}
function Jt(e) {
  return {
    spawn(t, o) {
      let d = Rt(t.sessionId),
        p;
      if (e.debugFile) {
        let j = e.debugFile.lastIndexOf(".");
        if (j > 0) p = `${e.debugFile.slice(0, j)}-${d}${e.debugFile.slice(j)}`;
        else p = `${e.debugFile}-${d}`;
      } else if (e.verbose) p = lr(getClaudeTempDir(), `bridge-session-${d}.log`);
      let r = null,
        C;
      if (e.debugFile)
        ((C = lr(dirname(e.debugFile), `bridge-transcript-${d}.jsonl`)),
          (r = createWriteStream(C, { flags: "a" })),
          r.on("error", (j) => {
            (e.onDebug(`[bridge:session] Transcript write error: ${j.message}`),
              (r = null));
          }),
          e.onDebug(`[bridge:session] Transcript log: ${C}`));
      let w = [
          ...e.scriptArgs,
          "--print",
          "--sdk-url",
          t.sdkUrl,
          "--session-id",
          t.sessionId,
          "--input-format",
          "stream-json",
          "--output-format",
          "stream-json",
          "--replay-user-messages",
          `--resume=${t.sdkUrl}`,
          ...(e.verbose ? ["--verbose"] : []),
          ...(p ? ["--debug-file", p] : []),
          ...(e.permissionMode ? ["--permission-mode", e.permissionMode] : []),
        ],
        _ = w.length,
        T = t.serverConfig,
        E = T?.mcpConfig;
      if (E) w.push(`--mcp-config=${E.path}`);
      if (T?.appendSystemPrompt)
        w.push(`--append-system-prompt-file=${T.appendSystemPrompt.path}`);
      if (T) w.push(...T.extraArgs);
      let W = w.length - _;
      w.push(...t.modelArgs);
      let N = T?.dir,
        ue = () => {
          let j = N;
          return (
            (N = void 0),
            j
              ? qr(j, { recursive: !0, force: !0 }).catch(() => {})
              : Promise.resolve()
          );
        },
        ne = e.ownerIdentity,
        Pe = {
          CLAUDE_CODE_OAUTH_TOKEN: void 0,
          CLAUDE_CODE_ENVIRONMENT_KIND: "bridge",
          ...(e.sandbox && { CLAUDE_CODE_FORCE_SANDBOX: "1" }),
          CLAUDE_CODE_SESSION_ACCESS_TOKEN: t.accessToken,
          CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID: ne?.accountUuid,
          CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID: ne?.organizationUuid,
          CLAUDE_CODE_BRIDGE_MCP_CARRIER: T ? "1" : void 0,
          CLAUDE_CODE_BRIDGE_PROMPT_SHA256: T?.appendSystemPrompt?.sha256,
          CLAUDE_CODE_WORKER_EPOCH: String(t.workerEpoch),
          CLAUDE_CODE_RESUME_INTERRUPTED_TURN: t.workerEpoch > 1 ? "1" : void 0,
          CLAUDE_CODE_RESUME_FROM_SESSION: void 0,
          CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR: void 0,
          CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR: void 0,
          CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR: void 0,
          CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR: void 0,
          CLAUDE_BG_AUTH_SNAPSHOT_PATH: void 0,
          CLAUDE_CODE_ACCOUNT_UUID: void 0,
          CLAUDE_CODE_ORGANIZATION_UUID: void 0,
          CLAUDE_CODE_USER_EMAIL: void 0,
          CCR_SESSION_ACCOUNT_EMAIL: void 0,
          SESSION_INGRESS_URL: E ? E.ingressUrl : void 0,
          CLAUDE_CODE_EXIT_AFTER_STOP_DELAY: void 0,
        },
        ae = {
          ...e.env,
          ...Object.fromEntries(NON_INHERITED_SESSION_ENV_VARS.map((j) => [j, void 0])),
          ...Object.fromEntries(NESTED_SESSION_MARKER_ENV_VARS.map((j) => [j, e.env[j]])),
          ...Pe,
        },
        ce = new Set([...NON_INHERITED_SESSION_ENV_VARS, ...Object.keys(Pe)]);
      for (let j of Object.keys(ae))
        if (!ce.has(j) && ce.has(j.toUpperCase())) delete ae[j];
      if (
        (removeRestrictedEnvVars(ae),
        removeGuiHostEntrypoint(ae),
        e.onDebug(
          `[bridge:session] Spawning sessionId=${t.sessionId} sdkUrl=${t.sdkUrl} accessToken=${t.accessToken ? "present" : "MISSING"}`,
        ),
        e.onDebug(
          `[bridge:session] Child args: ${w.slice(0, _).join(" ")}${W > 0 ? ` (+${W} server-config args, mcpConfig=${E ? "present" : "unset"}, appendPrompt=${T?.appendSystemPrompt ? "present" : "unset"})` : ""}${t.modelArgs.length > 0 ? ` (+${t.modelArgs.length} model args)` : ""}`,
        ),
        p)
      )
        e.onDebug(`[bridge:session] Debug log: ${p}`);
      let I;
      try {
        I = spawn(e.execPath, w, {
          cwd: o,
          stdio: ["pipe", "pipe", "pipe"],
          env: ae,
          windowsHide: !0,
        });
      } catch (j) {
        throw (ue(), j);
      }
      e.onDebug(`[bridge:session] sessionId=${t.sessionId} pid=${I.pid}`);
      let X = [],
        ge = null,
        D = [],
        Ke = !1,
        We = !1;
      if (I.stderr)
        createInterface({ input: I.stderr }).on("line", (Se) => {
          if (Se.startsWith(REMOTE_IO_WARNING_PREFIX)) {
            let $e = normalizeWhitespace(Se.slice(REMOTE_IO_WARNING_PREFIX.length));
            if (e.onChildWarning) e.onChildWarning(t.sessionId, $e);
            else
              process.stderr.write(
                REMOTE_IO_WARNING_PREFIX +
                  $e +
                  `
`,
              );
            return;
          }
          if (e.verbose)
            process.stderr.write(
              Se +
                `
`,
            );
          if (D.length >= zr) D.shift();
          D.push(Se);
        });
      if (I.stdout)
        createInterface({ input: I.stdout }).on("line", (Se) => {
          if (r)
            r.write(
              Se +
                `
`,
            );
          if (
            (e.onDebug(`[bridge:ws] sessionId=${t.sessionId} <<< ${debugTruncate(Se)}`),
            e.verbose)
          )
            process.stderr.write(
              Se +
                `
`,
            );
          let $e = Kr(Se, t.sessionId, e.onDebug);
          for (let fe of $e) {
            if (X.length >= Gr) X.shift();
            (X.push(fe),
              (ge = fe),
              e.onActivity?.(t.sessionId, fe),
              t.onActivity?.(fe));
          }
          {
            let fe;
            try {
              fe = jsonParse(Se);
            } catch {}
            if (fe && typeof fe === "object") {
              let Ae = fe;
              if (Ae.type === "control_request") {
                if (
                  Ae.request?.subtype === "can_use_tool" &&
                  e.onPermissionRequest
                )
                  e.onPermissionRequest(t.sessionId, fe, t.accessToken);
              } else if (Ae.type === "user" && !We && t.onFirstUserMessage) {
                let Oe = Jr(Ae);
                if (Oe) ((We = !0), t.onFirstUserMessage(Oe));
              }
            }
          }
        });
      let Je = new Promise((j) => {
          (I.on("close", (Se, $e) => {
            if (r) (r.end(), (r = null));
            let fe;
            if ($e === "SIGTERM" || $e === "SIGINT")
              (e.onDebug(
                `[bridge:session] sessionId=${t.sessionId} interrupted signal=${$e} pid=${I.pid}`,
              ),
                (fe = "interrupted"));
            else if (Se === 0)
              (e.onDebug(
                `[bridge:session] sessionId=${t.sessionId} completed exit_code=0 pid=${I.pid}`,
              ),
                (fe = "completed"));
            else
              (e.onDebug(
                `[bridge:session] sessionId=${t.sessionId} failed exit_code=${Se} pid=${I.pid}`,
              ),
                (fe = "failed"));
            ue().then(() => j(fe));
          }),
            I.on("error", (Se) => {
              (e.onDebug(
                `[bridge:session] sessionId=${t.sessionId} spawn error: ${Se.message}`,
              ),
                D.push(`spawn error: ${Se.message}`),
                ue().then(() => j("failed")));
            }));
        }),
        et = {
          sessionId: t.sessionId,
          done: Je,
          activities: X,
          accessToken: t.accessToken,
          lastStderr: D,
          get currentActivity() {
            return ge;
          },
          kill() {
            if (!I.killed)
              (e.onDebug(
                `[bridge:session] Sending SIGTERM to sessionId=${t.sessionId} pid=${I.pid}`,
              ),
                I.kill("SIGTERM"));
          },
          forceKill() {
            if (!Ke && I.pid)
              ((Ke = !0),
                e.onDebug(
                  `[bridge:session] Sending SIGKILL to sessionId=${t.sessionId} pid=${I.pid}`,
                ),
                I.kill("SIGKILL"));
          },
          writeStdin(j) {
            if (I.stdin && !I.stdin.destroyed)
              (e.onDebug(`[bridge:ws] sessionId=${t.sessionId} >>> ${debugTruncate(j)}`),
                I.stdin.write(j));
          },
          updateAccessToken(j) {
            ((et.accessToken = j),
              et.writeStdin(
                jsonStringify({
                  type: "update_environment_variables",
                  variables: { CLAUDE_CODE_SESSION_ACCESS_TOKEN: j },
                }) +
                  `
`,
              ),
              e.onDebug(
                `[bridge:session] Sent token refresh via stdin for sessionId=${t.sessionId}`,
              ));
          },
        };
      return et;
    },
  };
}
var fr = new Set(["model", "fallback-model"]),
  rn = new Set([...fr, "effort", "disallowed-tools", "disallowedTools"]),
  nn = new Set(["disallowed-tools", "disallowedTools"]),
  sn = "append-system-prompt",
  on = new Set(),
  an = "mcp.json",
  dn = "append-system-prompt.txt",
  mr = {
    extraArgs: [],
    appendSystemPrompt: null,
    disallowedTools: [],
    mcpConfigJson: null,
    metaMountUrl: null,
    autoAllowTools: [],
    ignoredMcpServers: 0,
    metaDropReason: null,
  };
function ln(e, t) {
  let {
      extraArgs: o,
      appendSystemPrompt: d,
      disallowedTools: p,
    } = wr(e.claude_code_args),
    { meta: r, ignored: C, dropped: w } = cn(e.mcp_config, t);
  if (!r)
    return {
      ...mr,
      extraArgs: o,
      appendSystemPrompt: d,
      disallowedTools: p,
      ignoredMcpServers: C,
      metaDropReason: w,
    };
  let _ =
    r.autoAllowTools.length > 0
      ? [`--allowedTools=${r.autoAllowTools.map((T) => buildMcpToolName(CLAUDE_CODE_REMOTE_SERVER_NAME, T)).join(",")}`]
      : [];
  return {
    extraArgs: [...o, ..._],
    appendSystemPrompt: d,
    disallowedTools: p,
    mcpConfigJson: r.json,
    metaMountUrl: r.url,
    autoAllowTools: r.autoAllowTools,
    ignoredMcpServers: C,
    metaDropReason: null,
  };
}
function wr(e) {
  if (!e)
    return { extraArgs: [], appendSystemPrompt: null, disallowedTools: [] };
  let t = {},
    o = null,
    d = [],
    p = 0;
  for (let [w, _] of Object.entries(e))
    if (rn.has(w)) {
      if (((t[w] = _), nn.has(w) && typeof _ === "string")) d.push(...splitToolRuleList([_]));
    } else if (w === sn) o = typeof _ === "string" && _ ? _ : null;
    else p++;
  let r = [],
    C = appendClaudeCodeArgs(r, t, on, (w) =>
      logForDebugging(`[bridge:server-config] skipped ${w} claude_code_arg`),
    );
  return (
    logForDebugging(
      `[bridge:server-config] claude_code_args applied=${C} append_prompt=${o ? "present" : "unset"} disallowed_tools=${d.length} not_allowlisted=${p}`,
    ),
    { extraArgs: r, appendSystemPrompt: o, disallowedTools: d }
  );
}
function _r(e) {
  if (!e) return [];
  let t = pickBy(e, (o, d) => fr.has(d));
  return wr(t).extraArgs;
}
function cn(e, t) {
  if (!e) return { meta: null, ignored: 0, dropped: null };
  let o = un(e.content);
  if (!o) return { meta: null, ignored: 0, dropped: "undecodable" };
  let d = countMatching(Object.keys(o), (T) => T !== CLAUDE_CODE_REMOTE_SERVER_NAME);
  if (d > 0)
    logForDebugging(
      `[bridge:server-config] ignoring ${d} other server(s) in mcp_config (only ${CLAUDE_CODE_REMOTE_SERVER_NAME} is honored)`,
    );
  let p = o[CLAUDE_CODE_REMOTE_SERVER_NAME];
  if (p === void 0)
    return (
      logForDebugging("[bridge:server-config] mcp_config carries no meta entry"),
      { meta: null, ignored: d, dropped: "no_meta_entry" }
    );
  if (
    p === null ||
    typeof p !== "object" ||
    !("type" in p) ||
    p.type !== "http" ||
    !("url" in p) ||
    typeof p.url !== "string"
  )
    return (
      logForDebugging("[bridge:server-config] meta entry is not http", { level: "warn" }),
      { meta: null, ignored: d, dropped: "not_http" }
    );
  let r = getTrustedIngressOrigin(t.apiBaseUrl);
  if (!r)
    return (
      logForDebugging(
        "[bridge:server-config] apiBaseUrl is not a trusted ingress origin; dropping meta entry",
        { level: "warn" },
      ),
      { meta: null, ignored: d, dropped: "untrusted_origin" }
    );
  let C = buildCcrSessionMetaUrl(p.url, r, t.sessionId);
  if (!C)
    return (
      logForDebugging(
        "[bridge:server-config] meta url is not this session's meta proxy route on the bridge origin",
        { level: "warn" },
      ),
      { meta: null, ignored: d, dropped: "route_mismatch" }
    );
  let w = dr(p);
  if (!w) return { meta: null, ignored: d, dropped: "bad_tools" };
  return {
    meta: {
      json: jsonStringify({ mcpServers: { [CLAUDE_CODE_REMOTE_SERVER_NAME]: buildCcrMetaServerConfig(C, t.sessionId) } }),
      url: C,
      autoAllowTools: w,
    },
    ignored: d,
    dropped: null,
  };
}
function un(e) {
  let t;
  try {
    t = jsonParse(Buffer.from(e, "base64").toString("utf8"));
  } catch {
    return (
      logForDebugging("[bridge:server-config] mcp_config did not decode", { level: "warn" }),
      null
    );
  }
  if (
    t === null ||
    typeof t !== "object" ||
    !("mcpServers" in t) ||
    t.mcpServers === null ||
    typeof t.mcpServers !== "object" ||
    Array.isArray(t.mcpServers)
  )
    return (
      logForDebugging("[bridge:server-config] mcp_config has no mcpServers", {
        level: "warn",
      }),
      null
    );
  return t.mcpServers;
}
async function pn(e, t) {
  if (!e.mcpConfigJson && !e.appendSystemPrompt)
    return e.extraArgs.length > 0 ? { extraArgs: e.extraArgs } : void 0;
  let o = await gn(t.sessionId);
  try {
    let d;
    if (e.mcpConfigJson) {
      let r = Qt(o, an);
      (await writeFile(r, e.mcpConfigJson, { flag: "wx", mode: 384 }),
        (d = { path: r, ingressUrl: t.apiBaseUrl }));
    }
    let p;
    if (e.appendSystemPrompt) {
      let r = Qt(o, dn),
        C = Buffer.from(e.appendSystemPrompt, "utf8");
      (await writeFile(r, C, { flag: "wx", mode: 384 }),
        (p = { path: r, sha256: createHash("sha256").update(C).digest("hex") }));
    }
    return {
      extraArgs: e.extraArgs,
      dir: o,
      mcpConfig: d,
      appendSystemPrompt: p,
    };
  } catch (d) {
    throw (await Zt(o), d);
  }
}
async function gn(e) {
  for (let t = 0; ; t++)
    try {
      let o = await ensureBridgeSpawnRootDir(),
        d = await lstat(o);
      if (!d.isDirectory()) throw Error("bridge spawn root is not a directory");
      if (getCurrentPlatform() !== "windows") {
        if (
          (typeof process.getuid === "function" &&
            d.uid !== process.getuid()) ||
          (d.mode & 63) !== 0
        )
          throw Error("bridge spawn root has unexpected owner or mode");
      }
      let p = await mkdtemp(Qt(o, `${Rt(e)}-`)),
        r = await lstat(o).catch(() => null);
      if (r?.dev !== d.dev || r.ino !== d.ino)
        throw (
          await Zt(p),
          Error("bridge spawn root changed identity during mkdtemp")
        );
      return p;
    } catch (o) {
      if (t > 0 || A(o) !== "ENOENT") throw o;
    }
}
async function Zt(e) {
  await tn(e, { recursive: !0, force: !0 }).catch(() => {});
}
async function hr(e) {
  if (e?.dir) await Zt(e.dir);
}
function fn(e, t) {
  (logForDebugging(
    `[bridge:server-config] not applied sessionId=${e}: gate_off (tengu_bridge_apply_server_session_config=false)`,
    { level: "warn" },
  ),
    logEvent("tengu_bridge_server_config_rejected", { ...t, reason: S("gate_off") }),
    logFeatureSad("bridge_server_session_config", "gate_off", t));
}
async function br(e, t) {
  let o = {
    carried_args: Boolean(e.claude_code_args),
    carried_mcp: Boolean(e.mcp_config),
  };
  if (!t.enabled) {
    fn(t.sessionId, o);
    return;
  }
  let d = mr,
    p,
    r;
  try {
    ((d = ln(e, t)), (p = await pn(d, t)));
  } catch (_) {
    r = l(_);
  }
  let C = {
    ...o,
    extra_args: d.extraArgs.length,
    append_prompt: d.appendSystemPrompt !== null,
    meta_mcp: d.mcpConfigJson !== null,
    auto_allow: d.autoAllowTools.length,
    ignored_mcp: d.ignoredMcpServers,
    ...(d.metaDropReason !== null && { meta_drop: fromEnum(d.metaDropReason) }),
  };
  if (r !== void 0) {
    (logForDebugging(`[bridge:server-config] not applied sessionId=${t.sessionId}: ${r}`, {
      level: "warn",
    }),
      logEvent("tengu_bridge_server_config_rejected", {
        ...C,
        reason: S("prepare_failed"),
      }),
      logFeatureBad("bridge_server_session_config", "prepare_failed", C));
    return;
  }
  if (!p) {
    (logForDebugging(
      `[bridge:server-config] nothing applied sessionId=${t.sessionId}: every carried value was rejected`,
      { level: "warn" },
    ),
      logEvent("tengu_bridge_server_config_rejected", {
        ...C,
        reason: S("nothing_applied"),
      }),
      logFeatureSad("bridge_server_session_config", "nothing_applied", C));
    return;
  }
  let w = d.mcpConfigJson
    ? "present"
    : d.metaDropReason
      ? `dropped:${d.metaDropReason}`
      : "unset";
  if (
    (logForDebugging(
      `[bridge:server-config] applied sessionId=${t.sessionId} args=${d.extraArgs.length} appendPrompt=${d.appendSystemPrompt ? "present" : "unset"} metaMcp=${w} autoAllow=${d.autoAllowTools.length}`,
      { level: d.metaDropReason ? "warn" : "debug" },
    ),
    logEvent("tengu_bridge_server_config_applied", C),
    d.metaDropReason !== null)
  )
    logFeatureSad("bridge_server_session_config", "meta_mcp_not_verified", C);
  else logFeatureOk("bridge_server_session_config", C);
  return p;
}
var mn = { type: "utf8", errorCorrectionLevel: "L", small: !0 };
function vr(e) {
  let t = e.write ?? ((k) => process.stdout.write(k)),
    o = e.verbose,
    d = 0,
    p = "idle",
    r = "Ready",
    C = null,
    w = "",
    _ = "",
    T = "",
    E = "",
    W = "",
    N = null,
    ue = [],
    ne = !1,
    Pe = "",
    ae = null,
    ce = 0,
    I = 0,
    X = 1,
    ge = null,
    D = "single-session",
    Ke = new Map(),
    We = null,
    Je = 0;
  function et(k) {
    let J = process.stdout.columns || 80,
      de = 0;
    for (let be of k.split(`
`)) {
      if (be.length === 0) {
        de++;
        continue;
      }
      let Te = getStringWidth(be);
      de += Math.max(1, Math.ceil(Te / J));
    }
    if (
      k.endsWith(`
`)
    )
      de--;
    return de;
  }
  function j(k) {
    (t(k), (d += et(k)));
  }
  function Se() {
    if (d <= 0) return;
    (t(`\x1B[${d}A`), t("\x1B[J"), (d = 0));
  }
  function $e(k) {
    if ((Se(), t(k), p === "reconnecting" && C)) He(C.delayStr, C.elapsedStr);
    else De();
  }
  function fe(k) {
    if (k === Pe) return;
    ((Pe = k),
      eI(k, mn)
        .then((J) => {
          ((ue = J.split(
            `
`,
          ).filter((de) => de.length > 0)),
            De());
        })
        .catch((J) => {
          logForDebugging(`QR code generation failed: ${J}`, { level: "error" });
        }));
  }
  function Ae() {
    Se();
    let k = ASCII_SPINNER_FRAMES[Je % ASCII_SPINNER_FRAMES.length],
      J = "";
    if (w) J += chalk.dim(" \xB7 ") + chalk.dim(w);
    if (_) J += chalk.dim(" \xB7 ") + chalk.dim(_);
    j(`${chalk.yellow(k)} ${chalk.yellow("Connecting")}${J}
`);
  }
  function Oe() {
    (xe(),
      Ae(),
      (We = setInterval(() => {
        (Je++, Ae());
      }, 150)));
  }
  function xe() {
    if (We) (clearInterval(We), (We = null));
  }
  function He(k, J) {
    if (ne)
      for (let be of ue)
        j(`${chalk.dim(be)}
`);
    let de = ASCII_SPINNER_FRAMES[Je % ASCII_SPINNER_FRAMES.length];
    (Je++,
      j(`${chalk.yellow(de)} ${chalk.yellow("Reconnecting")} ${chalk.dim("\xB7")} ${chalk.dim(`retrying in ${k}`)} ${chalk.dim("\xB7")} ${chalk.dim(`disconnected ${J}`)}
`));
  }
  function De() {
    if (p === "reconnecting" || p === "failed") return;
    Se();
    let k = p === "idle";
    if (ne)
      for (let ze of ue)
        j(`${chalk.dim(ze)}
`);
    let J = CHECK_MARK_GLYPH,
      de = k ? chalk.green : chalk.cyan,
      Te = (k ? chalk.green : chalk.cyan)(r),
      Fe = "";
    if (w) Fe += chalk.dim(" \xB7 ") + chalk.dim(w);
    if (_ && D !== "worktree") Fe += chalk.dim(" \xB7 ") + chalk.dim(_);
    if (
      (j(`${de(J)} ${Te}${Fe}
`),
      X > 1)
    ) {
      let ze =
        D === "worktree"
          ? "New sessions will be created in an isolated worktree"
          : "New sessions will be created in the current directory";
      j(`    ${chalk.dim(`Capacity: ${I}/${X} \xB7 ${ze}`)}
`);
      for (let [, rt] of Ke) {
        let Ye = rt.title ? truncateToWidth(rt.title, 35) : chalk.dim("Attached"),
          Ce = formatTerminalHyperlink(Ye, rt.url),
          Ie = rt.activity,
          Ee =
            Ie && Ie.type !== "result" && Ie.type !== "error"
              ? chalk.dim(` ${truncateToWidth(Ie.summary, 40)}`)
              : "";
        j(`    ${Ce}${Ee}
`);
      }
    }
    if (X === 1) {
      let ze =
        D === "single-session"
          ? "Single session \xB7 exits when complete"
          : D === "worktree"
            ? `Capacity: ${I}/1 \xB7 New sessions will be created in an isolated worktree`
            : `Capacity: ${I}/1 \xB7 New sessions will be created in the current directory`;
      j(`    ${chalk.dim(ze)}
`);
    }
    if (X === 1 && !k && ae && Date.now() - ce < RECENT_ACTIVITY_WINDOW_MS)
      j(`  ${chalk.dim(truncateToWidth(ae, 60))}
`);
    let ot = N ?? E;
    if (ot) {
      j(`
`);
      let ze = k ? formatCodeAnywhereMessage(ot) : formatContinueCodingMessage(ot),
        rt = ne
          ? chalk.dim.italic("space to hide QR code")
          : chalk.dim.italic("space to show QR code"),
        Ye = ge ? chalk.dim.italic(" \xB7 w to toggle spawn mode") : "";
      (j(`${chalk.dim(ze)}
`),
        j(`${rt}${Ye}
`));
    }
  }
  return {
    printBanner(k, J) {
      if (((W = k.sessionIngressUrl), (E = buildSessionWebUrl(J, W)), fe(E), o))
        t(
          chalk.dim("Remote Control") +
            ` v${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}
`,
        );
      if (o) {
        if (k.spawnMode !== "single-session")
          (t(
            chalk.dim("Spawn mode: ") +
              `${k.spawnMode}
`,
          ),
            t(
              chalk.dim("Max concurrent sessions: ") +
                `${k.maxSessions}
`,
            ));
        t(
          chalk.dim("Environment ID: ") +
            `${J}
`,
        );
      }
      if (k.sandbox)
        t(
          chalk.dim("Sandbox: ") +
            `${chalk.green("Enabled")}
`,
        );
      if (k.livePreviewPorts && k.livePreviewPorts.size > 0) {
        let de = [...k.livePreviewPorts].sort((be, Te) => be - Te).join(", ");
        t(
          chalk.yellow(`\u26A0  Live preview enabled: 127.0.0.1 ${pluralize(k.livePreviewPorts.size, "port")} ${de} ${k.livePreviewPorts.size > 1 ? "are" : "is"} reachable from this session's livepreview URL while Remote Control is running.
`),
        );
      }
      (t(`
`),
        Oe());
    },
    logSessionStart(k, J) {
      if (o) {
        let de = truncateToWidth(J, 80);
        $e(
          chalk.dim(`[${formatClockTime()}]`) +
            ` Session started: ${chalk.white(`"${de}"`)} (${chalk.dim(k)})
`,
        );
      }
    },
    logSessionComplete(k, J) {
      $e(
        chalk.dim(`[${formatClockTime()}]`) +
          ` Session ${chalk.green("completed")} (${formatDuration(J)}) ${chalk.dim(k)}
`,
      );
    },
    logSessionFailed(k, J) {
      $e(
        chalk.dim(`[${formatClockTime()}]`) +
          ` Session ${chalk.red("failed")}: ${J} ${chalk.dim(k)}
`,
      );
    },
    logStatus(k) {
      $e(
        chalk.dim(`[${formatClockTime()}]`) +
          ` ${k}
`,
      );
    },
    logVerbose(k) {
      if (o)
        $e(
          chalk.dim(`[${formatClockTime()}] ${k}`) +
            `
`,
        );
    },
    logError(k) {
      $e(
        chalk.red(`[${formatClockTime()}] Error: ${k}`) +
          `
`,
      );
    },
    logWarning(k) {
      $e(
        chalk.yellow(`[${formatClockTime()}] Warning: ${k}`) +
          `
`,
      );
    },
    logReconnected(k) {
      ((C = null),
        $e(
          chalk.dim(`[${formatClockTime()}]`) +
            ` ${chalk.green("Reconnected")} after ${formatDuration(k)}
`,
        ));
    },
    setRepoInfo(k, J) {
      ((w = k), (_ = J));
    },
    setDebugLogPath(k) {
      T = k;
    },
    updateIdleStatus() {
      (xe(),
        (p = "idle"),
        (r = "Ready"),
        (ae = null),
        (ce = 0),
        (N = null),
        fe(E),
        De());
    },
    setAttached(k) {
      if (
        (xe(),
        (p = "attached"),
        (r = "Connected"),
        (ae = null),
        (ce = 0),
        X <= 1)
      )
        ((N = buildClaudeAiSessionUrl(k, W)), fe(N));
      De();
    },
    updateReconnectingStatus(k, J) {
      (xe(),
        Se(),
        (p = "reconnecting"),
        (C = { delayStr: k, elapsedStr: J }),
        He(k, J));
    },
    updateFailedStatus(k) {
      (xe(), Se(), (p = "failed"));
      let J = "";
      if (w) J += chalk.dim(" \xB7 ") + chalk.dim(w);
      if (_) J += chalk.dim(" \xB7 ") + chalk.dim(_);
      if (
        (j(`${chalk.red(CROSS_MARK_GLYPH)} ${chalk.red("Remote Control Failed")}${J}
`),
        j(`${chalk.dim(RERUN_REMOTE_CONTROL_CLI_MESSAGE)}
`),
        k)
      )
        j(`${chalk.red(k)}
`);
    },
    updateSessionStatus(k, J, de, be) {
      if (de.type === "tool_start") ((ae = de.summary), (ce = Date.now()));
      De();
    },
    clearStatus(k) {
      if ((xe(), Se(), k?.final)) C = null;
    },
    detachTerminal() {
      t = () => {};
    },
    toggleQr() {
      ((ne = !ne), De());
    },
    updateSessionCount(k, J, de) {
      if (I === k && X === J && D === de) return;
      ((I = k), (X = J), (D = de));
    },
    setSpawnModeDisplay(k) {
      if (ge === k) return;
      if (((ge = k), k)) D = k;
    },
    addSession(k, J) {
      Ke.set(k, { url: J });
    },
    updateSessionActivity(k, J) {
      let de = Ke.get(k);
      if (!de) return;
      de.activity = J;
    },
    setSessionTitle(k, J) {
      let de = Ke.get(k);
      if (!de) return;
      let be = sanitizeSessionName(J);
      if (((de.title = be), p === "reconnecting" || p === "failed")) return;
      if (X === 1) ((p = "titled"), (r = truncateToWidth(be, 40)));
      De();
    },
    removeSession(k) {
      Ke.delete(k);
    },
    refreshDisplay() {
      if (p === "reconnecting" || p === "failed") return;
      De();
    },
  };
}
function yr(e) {
  let t = new AbortController();
  function o() {
    (t.abort(), (t = new AbortController()));
  }
  function d() {
    let p = new AbortController(),
      r = () => p.abort();
    if (e.aborted || t.signal.aborted)
      return (p.abort(), { signal: p.signal, cleanup: () => {} });
    e.addEventListener("abort", r, { once: !0 });
    let C = t.signal;
    return (
      C.addEventListener("abort", r, { once: !0 }),
      {
        signal: p.signal,
        cleanup: () => {
          (e.removeEventListener("abort", r),
            C.removeEventListener("abort", r));
        },
      }
    );
  }
  return { signal: d, wake: o };
}
import { readdir, readFile, stat as hn } from "fs/promises";
import { release } from "os";
import { join as vn } from "path";
var yn = 1500,
  $r = 262144,
  En = 32,
  $n = 16,
  kn = /^[a-z0-9][a-z0-9+._-]{0,31}(@[0-9][0-9A-Za-z.+_-]{0,23})?$/,
  jt = /^[0-9][0-9A-Za-z.+_-]{0,23}$/,
  Pn = /^[a-z0-9_]{1,16}$/,
  An = /^[a-z0-9._-]{1,24}$/,
  Rn = /^[A-Za-z0-9_.-]{1,64}$/,
  kr = [
    "swift",
    "xcodebuild",
    "xcrun",
    "pod",
    "fastlane",
    "carthage",
    "adb",
    "emulator",
    "sdkmanager",
    "flutter",
    "dart",
    "xcodes",
    "kubectl",
    "helm",
    "terraform",
    "bazel",
    "bazelisk",
    "nix",
    "conda",
    "mamba",
    "pipx",
    "podman",
    "nerdctl",
    "nvidia-smi",
    "psql",
    "mysql",
    "redis-cli",
    ...BUILD_TOOL_COMMANDS,
  ],
  Tn = new Set([
    "xcodebuild",
    "swift",
    "swiftc",
    "xcrun",
    "git",
    "make",
    "clang",
    "clang++",
    "gcc",
    "g++",
    "python3",
    "pip3",
  ]),
  Cn = "/System/Library/CoreServices/SystemVersion.plist",
  Er = "/Applications",
  In = "/Library/Developer/CommandLineTools/usr/bin",
  Mn = "/usr/local/cuda/version.json",
  Dn = "/proc/driver/nvidia/version",
  On = createLazyValue(() => c({ cuda: c({ version: s() }) }));
function Pr() {
  let e = getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_host_profile", "off");
  return HOST_PROFILE_LEVELS.find((t) => t === e) ?? "off";
}
function er(e) {
  if (xn()) return "off";
  let t = (r) => r?.remoteControl?.shareHostProfile,
    o = [
      ...getAllPolicyTierSettings(),
      getSettingsForSource("policySettings"),
      getSettingsForSource("flagSettings"),
      getSettingsForSource("userSettings"),
    ].map(t),
    d = HOST_PROFILE_LEVELS.find((r) => o.includes(r)) ?? e,
    p = [d, ...PROJECT_LOCAL_SETTINGS_SOURCES.filter(isSettingsSourceEnabled).map((r) => t(getSettingsForSource(r)))];
  return HOST_PROFILE_LEVELS.find((r) => p.includes(r)) ?? d;
}
function xn() {
  return [
    ...getPolicySettingsLoadErrors(),
    ...getSettingsParseErrorsForSource("flagSettings"),
    ...getSettingsParseErrorsForSource("userSettings"),
    ...PROJECT_LOCAL_SETTINGS_SOURCES.filter(isSettingsSourceEnabled).flatMap((t) => getSettingsParseErrorsForSource(t)),
  ].some((t) => {
    if (t.path === "") return !0;
    if (t.statusOnly) return !1;
    if (t.severity !== "warning") return !0;
    return (
      t.path === REMOTE_CONTROL_SHARE_HOST_PROFILE_KEY ||
      t.path === "remoteControl" ||
      t.path.startsWith("remoteControl.")
    );
  });
}
async function Ar(e) {
  if (e === void 0) return;
  try {
    let t = Pr();
    if (t === "off") return;
    let o = await loadMdmSettingsFromOs();
    invalidateAllSettings();
    let d = er(t),
      p = { mdm: getMdmSettings(), hkcu: getHkcuSettings(), wslInherits: getWslInheritsWindowsSettings() },
      r;
    replaceMdmSettings(o.mdm, o.hkcu, o.wslInherits);
    try {
      (invalidateAllSettings(), (r = er(t)));
    } finally {
      (replaceMdmSettings(p.mdm, p.hkcu, p.wslInherits), invalidateAllSettings());
    }
    let C = HOST_PROFILE_LEVELS.find((w) => w === d || w === r) ?? "off";
    if (C === "off") return;
    if (C === "basic" && e.mcp_servers !== void 0) {
      let { mcp_servers: w, ..._ } = e;
      return _;
    }
    return e;
  } catch (t) {
    logError(t);
    return;
  }
}
async function tr(e) {
  try {
    let t = Pr();
    if (t === "off") return;
    let o = er(t);
    if (o === "off") {
      logEvent("tengu_bridge_host_profile_collect", { outcome: S("disabled") });
      return;
    }
    return await Bn({ includeMcpServers: o === "full", signal: e });
  } catch (t) {
    logError(t);
    return;
  }
}
async function Bn({ includeMcpServers: e, signal: t }) {
  let o = Date.now(),
    d = Un();
  try {
    if (d === void 0) return;
    let p = { pathTools: new Set(), mcpServers: [] },
      r = [Nn(d, p), Fn(p), findCommandsOnPath(kr, p.pathTools)];
    if (d === "darwin") r.push(Ln(p), Wn(p));
    if (d === "linux") r.push(jn(p));
    if (e) r.push(Hn(p));
    let C = withDeadline(
        Promise.all(
          r.map((W) =>
            W.catch((N) => {
              logError(N);
            }),
          ),
        ).then(() => !0),
        yn,
      ).then((W) => W === !0),
      w = !1,
      _ =
        t === void 0
          ? await C
          : await raceWithAbortSignal(C, t, () => new Ve()).catch(() => ((w = !0), !1)),
      T = qn(d, p),
      E = {
        platform: d,
        ...(Pn.test("arm64") && { arch: "arm64" }),
        ...(p.osVersion !== void 0 && { os_version: p.osVersion }),
        ...(p.distro !== void 0 && { distro: p.distro }),
        ...(getCurrentPlatform() === "wsl" && { wsl: !0 }),
        tools: T,
        ...(e && { mcp_servers: p.mcpServers.slice(0, $n) }),
        collected_at: new Date().toISOString(),
      };
    if (
      (logEvent("tengu_bridge_host_profile_collect", {
        outcome: _ ? S("ok") : w ? S("aborted") : S("partial"),
        duration_ms: Date.now() - o,
        tools_count: E.tools.length,
        mcp_count: E.mcp_servers?.length ?? 0,
        platform: fromEnumOpt(d),
        arch: fromEnumOpt("arm64"),
        wsl: E.wsl === !0,
      }),
      _)
    )
      logFeatureOk("bridge_host_profile");
    else if (!w) logFeatureSad("bridge_host_profile", "deadline");
    return E;
  } catch (p) {
    (logError(p),
      logEvent("tengu_bridge_host_profile_collect", {
        outcome: S("error"),
        duration_ms: Date.now() - o,
        platform: fromEnumOpt(d),
        arch: fromEnumOpt("arm64"),
      }),
      logFeatureBad("bridge_host_profile", "error"));
    return;
  }
}
function Un() {
  switch ("darwin") {
    case "darwin":
    case "linux":
    case "win32":
      return "darwin";
    default:
      return;
  }
}
async function Nn(e, t) {
  switch (e) {
    case "darwin":
      t.osVersion = await Rr(Cn, "ProductVersion");
      return;
    case "linux": {
      let o = await getLinuxDistroInfo();
      if (o?.linuxDistroVersion && jt.test(o.linuxDistroVersion))
        t.osVersion = o.linuxDistroVersion;
      let d = o?.linuxDistroId?.toLowerCase();
      if (d && An.test(d)) t.distro = d;
      return;
    }
    case "win32": {
      let o = release();
      if (jt.test(o)) t.osVersion = o;
      return;
    }
  }
}
async function Rr(e, t) {
  let o = await readBoundedFile(e, $r);
  if (o === null) return;
  let d = parsePlist(o),
    p = isPlainObject(d) ? d[t] : void 0;
  return typeof p === "string" && jt.test(p) ? p : void 0;
}
async function Ln(e) {
  let t;
  try {
    t = await readdir(Er);
  } catch {
    return;
  }
  let o = t
    .filter((r) => /^Xcode.*\.app$/.test(r))
    .sort((r, C) => C.localeCompare(r, void 0, { numeric: !0 }));
  if (o.length === 0) return;
  let d = o.includes("Xcode.app") ? "Xcode.app" : o[0],
    p = await Rr(
      vn(Er, d, "Contents", "version.plist"),
      "CFBundleShortVersionString",
    );
  e.xcode = p === void 0 ? "xcode" : `xcode@${p}`;
}
async function Wn(e) {
  if (await Tr(In)) e.clt = "clt";
}
async function Fn(e) {
  let t = a.ANDROID_HOME ?? a.ANDROID_SDK_ROOT;
  if (t === void 0 || !(await isVerifiablePath(t)) || !(await Tr(t))) return;
  e.androidSdk = "android-sdk";
}
async function jn(e) {
  let t = await readBoundedFile(Mn, $r);
  if (t !== null) {
    let o = On().safeParse(xt(t, !1));
    e.cuda =
      o.success && jt.test(o.data.cuda.version)
        ? `cuda@${o.data.cuda.version}`
        : "cuda";
    return;
  }
  try {
    (await readFile(Dn, "utf8"), (e.cuda = "cuda"));
  } catch {}
}
async function Tr(e) {
  try {
    return (await hn(e)).isDirectory();
  } catch {
    return !1;
  }
}
async function Hn(e) {
  let t = new Set();
  for (let o of MCP_SETTINGS_SCOPES) {
    if (o === "project") continue;
    let d;
    try {
      d = Object.keys(getMcpConfigsByScope(o, { expandVars: !1 }).servers);
    } catch (r) {
      logForDebugging(`[bridge:host-profile] could not read ${o} MCP config: ${l(r)}`, {
        level: "warn",
      });
      continue;
    }
    let p = o === "managed" ? "enterprise" : o;
    for (let r of d) {
      if (!Rn.test(r) || t.has(r)) continue;
      (t.add(r), e.mcpServers.push({ name: r, scope: p }));
    }
  }
}
function qn(e, t) {
  let o = e !== "darwin" || t.xcode !== void 0 || t.clt !== void 0,
    d = kr.filter((r) => t.pathTools.has(r) && (o || !Tn.has(r))),
    p = [
      t.xcode,
      t.clt,
      ...d.filter((r) => r === "swift"),
      t.androidSdk,
      t.cuda,
      ...d.filter((r) => r !== "swift"),
    ].filter((r) => r !== void 0 && kn.test(r));
  return dedupe(p).slice(0, En);
}
var Ht = 3,
  Ut = 5;
async function Cr({
  api: e,
  config: t,
  environmentId: o,
  activeSessions: d,
  attempt: p,
  signal: r,
}) {
  logForDebugging(
    `[bridge:poll] Poll returned 404; re-registering environment ${o} (attempt ${p}/${Ht})`,
    { level: "warn" },
  );
  let C;
  try {
    let { hostProfile: T, ...E } = t,
      W = await Ar(T);
    ((t.hostProfile = W),
      (C = await e.registerBridgeEnvironment(
        { ...E, ...(W && { hostProfile: W }), reuseEnvironmentId: o },
        r,
      )));
  } catch (T) {
    let E = Ir(T);
    if (
      (logForDebugging(
        `[bridge:poll] Re-registration of ${o} ${E ? "rejected" : "failed transiently"}: ${l(T)}`,
        { level: E ? "error" : "warn" },
      ),
      r.aborted)
    )
      return { outcome: "transient" };
    if (
      (logEvent("tengu_bridge_env_reregister", {
        attempt: p,
        outcome: E ? S("register_rejected") : S("register_transient"),
      }),
      E)
    )
      return (
        logFeatureBad("bridge_env_reregister", "register_rejected"),
        { outcome: "fatal" }
      );
    return { outcome: "transient", retryAfterMs: Vn(T) };
  }
  if (C.environment_id !== o)
    return (
      logForDebugging(
        `[bridge:poll] Re-registration returned ${C.environment_id}, not ${o}; sessions attached to ${o} cannot be reconnected`,
        { level: "warn" },
      ),
      logEvent("tengu_bridge_env_reregister", { attempt: p, outcome: S("replaced") }),
      logFeatureBad("bridge_env_reregister", "replaced"),
      await e
        .deregisterEnvironment(C.environment_id)
        .catch((T) =>
          logForDebugging(
            `[bridge:poll] Failed to delete replacement environment ${C.environment_id}: ${l(T)}`,
            { level: "warn" },
          ),
        ),
      { outcome: "fatal" }
    );
  let w = [...d.keys()];
  (logEvent("tengu_bridge_env_reregister", {
    attempt: p,
    outcome: S("reregistered"),
    active_sessions: w.length,
  }),
    writeDiagnosticsEvent("info", "bridge_env_reregistered", {
      attempt: p,
      active_sessions: w.length,
    }),
    logForDebugging(
      `[bridge:poll] Environment ${o} re-registered in place; re-queuing ${w.length} session(s)`,
      { level: "info" },
    ));
  let _ = [];
  for (let T of w) {
    if (r.aborted) break;
    if (!d.has(T)) continue;
    if ((await Nt(e, o, T, r)) !== "done") _.push(T);
  }
  return {
    outcome: "reregistered",
    environmentSecret: C.environment_secret,
    pendingRequeues: _,
  };
}
async function Nt(e, t, o, d) {
  try {
    return (await e.reconnectSession(t, o, d), "done");
  } catch (p) {
    let r = Ir(p);
    if (
      (logForDebugging(
        `[bridge:poll] reconnectSession(${o}) after re-registration ${r ? "rejected" : "failed transiently"}: ${l(p)}`,
        { level: "warn" },
      ),
      r)
    )
      return "done";
    return d.aborted ? "aborted" : "retry";
  }
}
function Vn(e) {
  return e &&
    typeof e === "object" &&
    "retryAfterMs" in e &&
    typeof e.retryAfterMs === "number"
    ? e.retryAfterMs
    : void 0;
}
function Ir(e) {
  if (e instanceof Le) return !0;
  if (
    e &&
    typeof e === "object" &&
    "status" in e &&
    typeof e.status === "number"
  )
    return (
      e.status >= 400 && e.status < 500 && e.status !== 408 && e.status !== 429
    );
  return !1;
}
var Yn = {
    connInitialMs: 2000,
    connCapMs: 120000,
    connGiveUpMs: 600000,
    generalInitialMs: 500,
    generalCapMs: 30000,
    generalGiveUpMs: 600000,
  },
  Xn = 1000,
  xr = 32;
function Mr(e) {
  return e.connCapMs * 2;
}
function ir(e) {
  return `${e.replace(/[.!?]?\s*$/, ".")} Re-run \`claude remote-control\` to reconnect.`;
}
function qt(e) {
  if (e instanceof Le) return e.status === 404 || e.status === 410;
  return /environment .* not found/i.test(l(e));
}
function Kn(e, t, o) {
  try {
    return e.spawn(t, o);
  } catch (d) {
    let p = l(d);
    return (
      logError(dt(Error(`Session spawn failed: ${p}`), "Session spawn failed")),
      p
    );
  }
}
async function Br(e, t, o, d, p, r, C, w = Yn, _, T, E) {
  let W = new AbortController();
  if (C.aborted) W.abort();
  else C.addEventListener("abort", () => W.abort(), { once: !0 });
  let N = W.signal,
    ue = o,
    ne = 0,
    Pe = !1,
    ae = new Map(),
    ce = new Map((e.initialSessionRequeues ?? []).map((v) => [v, 0])),
    I = !1,
    X = (v, V) => {
      let L = sessionIdBody(v),
        O = !1;
      for (let F of [...ce.keys()]) if (sessionIdBody(F) === L) (ce.delete(F), (O = !0));
      if (!O) return;
      if (V) I = !0;
      if (ce.size === 0)
        if (I) logFeatureSad("bridge_shutdown_requeue", "requeue_dropped");
        else logFeatureOk("bridge_shutdown_requeue");
    },
    ge = !1,
    D = new Map(),
    Ke = (v) => {
      let V = sessionIdBody(v);
      for (let L of D.keys()) if (sessionIdBody(L) === V) return !0;
      return !1;
    },
    We = new Set();
  function Je(v, V) {
    let L = We.size;
    if (V) We.add(v);
    else We.delete(v);
    if (We.size !== L) e.onBusyChange?.(We.size);
  }
  let et = new Map(),
    j = new Map(),
    Se = new Map(),
    $e = new Map(),
    fe = new Set(),
    Ae = new Map(),
    Oe = new Set(),
    xe = new Set(),
    He = new Set(),
    De = new Map(),
    k,
    J = _ ? toCompatSessionId(_) : void 0;
  if (J && E) De.set(J, new Set([E]));
  let de = 0,
    be = new Map(),
    Te = yr(N);
  async function Fe() {
    let v = !1,
      V = !1,
      L = [];
    for (let [O, F] of D) {
      let re = j.get(O),
        ee = F.accessToken;
      if (!re || !ee) continue;
      try {
        (await d.heartbeatWork(t, re, ee), (v = !0));
      } catch (me) {
        if (
          (logForDebugging(
            `[bridge:heartbeat] Failed for sessionId=${O} workId=${re}: ${l(me)}`,
          ),
          me instanceof Le)
        )
          if (
            (logEvent("tengu_bridge_heartbeat_error", {
              status: me.status,
              error_type: S(
                me.status === 401 || me.status === 403
                  ? "auth_failed"
                  : "fatal",
              ),
            }),
            me.status === 401 || me.status === 403)
          )
            L.push(O);
          else V = !0;
      }
    }
    for (let O of L) {
      r.logVerbose(
        `Session ${O} token expired \u2014 re-queuing via bridge/reconnect`,
      );
      try {
        (await d.reconnectSession(t, O),
          logForDebugging(
            `[bridge:heartbeat] Re-queued sessionId=${O} via bridge/reconnect`,
          ));
      } catch (F) {
        if (qt(F)) {
          logForDebugging(
            `[bridge:heartbeat] reconnectSession(${O}) skipped \u2014 resource gone: ${l(F)}`,
          );
          continue;
        }
        (r.logError(`Failed to refresh session ${O} token: ${l(F)}`),
          logForDebugging(`[bridge:heartbeat] reconnectSession(${O}) failed: ${l(F)}`, {
            level: "error",
          }));
      }
    }
    if (V) return "fatal";
    if (L.length > 0) return "auth_failed";
    return v ? "ok" : "failed";
  }
  async function ot() {
    for (let [v, V] of ce) {
      if (N.aborted) return;
      if (Ke(v)) {
        X(v, !1);
        continue;
      }
      let L = await Nt(d, t, v, N);
      if (L === "aborted") return;
      if (L === "done") X(v, !1);
      else if (V + 1 >= Ut)
        (logForDebugging(
          `[bridge:poll] Giving up startup re-queue of sessionId=${v} after ${Ut} attempts`,
          { level: "warn" },
        ),
          X(v, !0));
      else ce.set(v, V + 1);
    }
    for (let [v, V] of ae) {
      if (N.aborted) return;
      if (!D.has(v)) {
        ae.delete(v);
        continue;
      }
      let L = await Nt(d, t, v, N);
      if (L === "aborted") return;
      if (L === "done") ae.delete(v);
      else if (V + 1 >= Ut)
        (ae.delete(v),
          logForDebugging(
            `[bridge:poll] Giving up re-queuing sessionId=${v} after ${Ut} attempts; left to token refresh`,
            { level: "warn" },
          ),
          logEvent("tengu_bridge_env_reregister", {
            requeue_attempts: V + 1,
            outcome: S("requeue_dropped"),
          }),
          logFeatureSad("bridge_env_reregister", "requeue_dropped"));
      else ae.set(v, V + 1);
    }
  }
  let ze = T
      ? createTokenRefreshScheduler({
          getAccessToken: T,
          onRefresh: (v, V) => {
            if (!D.get(v)) return;
            (r.logVerbose(`Refreshing session ${v} token via bridge/reconnect`),
              d.reconnectSession(t, v).catch((O) => {
                (r.logError(`Failed to refresh session ${v} token: ${l(O)}`),
                  logForDebugging(`[bridge:token] reconnectSession(${v}) failed: ${l(O)}`, {
                    level: "error",
                  }));
              }));
          },
          label: "bridge",
        })
      : null,
    rt = Date.now(),
    Ye = new Set();
  function Ce(v) {
    (Ye.add(v), v.finally(() => Ye.delete(v)));
  }
  let Ie = 0,
    pe = 0,
    Ee = null,
    Be = null,
    le = null,
    Qe = 0,
    je = null,
    ut = !1,
    ft = !1;
  if (
    (logForDebugging(
      `[bridge:work] Starting poll loop spawnMode=${e.spawnMode} maxSessions=${e.maxSessions} environmentId=${t}`,
    ),
    writeDiagnosticsEvent("info", "bridge_loop_started", {
      max_sessions: e.maxSessions,
      spawn_mode: e.spawnMode,
    }),
    r.printBanner(e, t),
    r.updateSessionCount(0, e.maxSessions, e.spawnMode),
    _)
  )
    r.setAttached(_);
  function Ct() {
    r.updateSessionCount(D.size, e.maxSessions, e.spawnMode);
    for (let [ee, me] of D) {
      let Ze = me.currentActivity;
      if (Ze) r.updateSessionActivity(Se.get(ee) ?? ee, Ze);
    }
    if (D.size === 0) {
      if (!ut) ((ut = !0), r.updateIdleStatus());
      return;
    }
    ut = !1;
    let [v, V] = [...D.entries()].pop(),
      L = et.get(v);
    if (!L) return;
    let O = V.currentActivity;
    if (!O || O.type === "result" || O.type === "error") {
      if (e.maxSessions > 1) r.refreshDisplay();
      return;
    }
    let F = formatDuration(Date.now() - L),
      re = V.activities
        .filter((ee) => ee.type === "tool_start")
        .slice(-5)
        .map((ee) => ee.summary);
    r.updateSessionStatus(v, F, O, re);
  }
  function nt() {
    (_t(), Ct(), (je = setInterval(Ct, Xn)));
  }
  function _t() {
    if (je) (clearInterval(je), (je = null));
  }
  function zt(v, V, L) {
    return (O) => {
      let F = j.get(v);
      (D.delete(v),
        Je(v, !1),
        et.delete(v),
        j.delete(v),
        $e.get(v)?.stop(),
        $e.delete(v));
      let re = Se.get(v) ?? v;
      if (
        (Se.delete(v),
        r.removeSession(re),
        He.delete(re),
        k?.forget(re),
        re === J && E)
      )
        De.set(re, new Set([E]));
      else De.delete(re);
      (be.delete(v), ze?.cancel(v), Te.wake());
      let ee = Date.now() - V;
      (logForDebugging(
        `[bridge:session] sessionId=${v} workId=${F ?? "unknown"} exited status=${O} duration=${formatDuration(ee)}`,
      ),
        logEvent("tengu_bridge_session_done", { status: fromEnum(O), duration_ms: ee }),
        writeDiagnosticsEvent("info", "bridge_session_done", { status: O, duration_ms: ee }),
        r.clearStatus(),
        _t());
      let me =
          L.lastStderr.length > 0
            ? L.lastStderr.join(`
`)
            : void 0,
        Ze;
      switch (O) {
        case "completed":
          r.logSessionComplete(v, ee);
          break;
        case "failed":
          if (!N.aborted)
            if (
              ((Ze = me ?? "Process exited with error"),
              r.logSessionFailed(v, Ze),
              !me || Ze.includes("transport closed"))
            )
              logForDebugging(`Bridge session failed: ${Ze}`, { level: "error" });
            else
              logError(
                dt(
                  Error(`Bridge session failed: ${Ze}`),
                  "Bridge session failed",
                ),
              );
          break;
        case "interrupted":
          r.logVerbose(`Session ${v} interrupted`);
          break;
      }
      if (O !== "interrupted" && F)
        (fe.add(F), Ce(Lt(d, t, F, ue, r, w.stopWorkBaseDelayMs)));
      let U = O === "failed" && !N.aborted && !ft;
      if (U) (Oe.add(v), (ge = !0));
      let Re = Ae.get(v);
      if (Re)
        if ((Ae.delete(v), U)) {
          if (
            (r.logStatus(
              `kept worktree ${Re.worktreePath} \xB7 session crashed`,
            ),
            Ze?.includes("transport closed"))
          )
            xe.add(Re.worktreePath);
        } else Ce(nr(Re, r, { storageV5: e.storageV5 }));
      if (O !== "interrupted" && !N.aborted)
        if (e.spawnMode !== "single-session") {
          if (O === "completed")
            Ce(
              d
                .archiveSession(re)
                .catch((he) =>
                  r.logVerbose(`Failed to archive session ${v}: ${l(he)}`),
                ),
            );
          logForDebugging(
            `[bridge:session] Session ${O}, returning to idle (multi-session mode)`,
          );
        } else {
          (logForDebugging(
            `[bridge:session] Session ${O}, aborting poll loop to tear down environment`,
          ),
            W.abort());
          return;
        }
      if (!N.aborted) nt();
    };
  }
  if (!_) nt();
  function Et() {
    let v = Oe.size;
    if (
      (r.logStatus(
        v > 0
          ? `${v} ${pluralize(v, "session")} ended while this machine was offline \u2014 the environment was cleaned up on the server and can't be resumed.`
          : "This environment was cleaned up while the machine was offline and can't be resumed.",
      ),
      xe.size > 0)
    )
      r.logStatus(
        `Your work is safe \u2014 worktrees kept: ${[...xe].join(", ")}`,
      );
    r.logStatus("Run `claude remote-control` to start a fresh environment.");
  }
  while (!N.aborted) {
    let v = getBridgePollIntervalConfig();
    try {
      let V =
          D.size >= e.maxSessions
            ? v.multisession_poll_interval_ms_at_capacity
            : D.size > 0
              ? v.multisession_poll_interval_ms_partial_capacity
              : v.multisession_poll_interval_ms_not_at_capacity,
        L = await d.pollForWork(t, ue, N, v.reclaim_older_than_ms, V);
      if (Ee !== null || Be !== null) {
        let U = Date.now() - (Ee ?? Be ?? Date.now());
        (r.logReconnected(U),
          logForDebugging(`[bridge:poll] Reconnected after ${formatDuration(U)}`),
          logEvent("tengu_bridge_reconnected", { disconnected_ms: U }),
          (ut = !1));
      }
      if (
        ((Ie = 0),
        (pe = 0),
        (Ee = null),
        (Be = null),
        (le = null),
        (ge = !1),
        Pe)
      )
        ((Pe = !1),
          logEvent("tengu_bridge_env_reregister", {
            attempt: ne,
            outcome: S("recovered"),
          }),
          logFeatureOk("bridge_env_reregister"));
      if (((ne = 0), !L)) {
        if (ae.size > 0 || ce.size > 0) await ot();
        if (D.size >= e.maxSessions) {
          let Re = v.multisession_poll_interval_ms_at_capacity;
          if (v.non_exclusive_heartbeat_interval_ms > 0) {
            logEvent("tengu_bridge_heartbeat_mode_entered", {
              active_sessions: D.size,
              heartbeat_interval_ms: v.non_exclusive_heartbeat_interval_ms,
            });
            let he = Re > 0 ? Date.now() + Re : null,
              Ue = "ok",
              st = 0;
            while (
              !N.aborted &&
              D.size >= e.maxSessions &&
              (he === null || Date.now() < he)
            ) {
              let qe = getBridgePollIntervalConfig();
              if (qe.non_exclusive_heartbeat_interval_ms <= 0) break;
              let pt = Te.signal();
              if (((Ue = await Fe()), Ue === "auth_failed" || Ue === "fatal")) {
                pt.cleanup();
                break;
              }
              (st++,
                await sleep(qe.non_exclusive_heartbeat_interval_ms, pt.signal),
                pt.cleanup());
            }
            let lt =
              Ue === "auth_failed" || Ue === "fatal"
                ? Ue
                : N.aborted
                  ? "shutdown"
                  : D.size < e.maxSessions
                    ? "capacity_changed"
                    : he !== null && Date.now() >= he
                      ? "poll_due"
                      : "config_disabled";
            if (
              (logEvent("tengu_bridge_heartbeat_mode_exited", {
                reason: fromEnum(lt),
                heartbeat_cycles: st,
                active_sessions: D.size,
              }),
              lt === "poll_due")
            )
              logForDebugging(
                `[bridge:poll] Heartbeat poll_due after ${st} cycles \u2014 falling through to pollForWork`,
              );
            if (Ue === "auth_failed" || Ue === "fatal") {
              let qe = Te.signal();
              (await sleep(
                Re > 0 ? Re : v.non_exclusive_heartbeat_interval_ms,
                qe.signal,
              ),
                qe.cleanup());
            }
          } else if (Re > 0) {
            let he = Te.signal();
            (await sleep(Re, he.signal), he.cleanup());
          }
        } else {
          let Re = v.non_exclusive_heartbeat_interval_ms,
            he = Re > 0 ? Re : Qe > 0 ? 60000 : 0;
          if (D.size > 0 && he > 0 && Date.now() - Qe >= he) {
            if ((await Fe()) === "ok") Qe = Date.now();
          }
          let Ue =
            D.size > 0
              ? v.multisession_poll_interval_ms_partial_capacity
              : v.multisession_poll_interval_ms_not_at_capacity;
          await sleep(Ue, N);
        }
        continue;
      }
      let F = D.size >= e.maxSessions;
      if (fe.has(L.id) && L.state === BRIDGE_WORK_STATE_QUEUED)
        (fe.delete(L.id),
          logForDebugging(
            `[bridge:work] Previously completed workId=${L.id} was re-queued by the server, handling as new work`,
          ));
      if (fe.has(L.id)) {
        if (
          (logForDebugging(
            `[bridge:work] Skipping already-completed workId=${L.id} state=${L.state}`,
          ),
          F)
        ) {
          let U = Te.signal();
          if (v.non_exclusive_heartbeat_interval_ms > 0)
            (await Fe(),
              await sleep(v.non_exclusive_heartbeat_interval_ms, U.signal));
          else if (v.multisession_poll_interval_ms_at_capacity > 0)
            await sleep(v.multisession_poll_interval_ms_at_capacity, U.signal);
          U.cleanup();
        } else await sleep(1000, N);
        continue;
      }
      let re;
      try {
        re = parseWorkSecret(L.secret);
      } catch (U) {
        let Re = l(U);
        if (
          (r.logError(`Failed to decode work secret for workId=${L.id}: ${Re}`),
          logEvent("tengu_bridge_work_secret_failed", {}),
          fe.add(L.id),
          Ce(Lt(d, t, L.id, ue, r, w.stopWorkBaseDelayMs)),
          F)
        ) {
          let he = Te.signal();
          if (v.non_exclusive_heartbeat_interval_ms > 0)
            (await Fe(),
              await sleep(v.non_exclusive_heartbeat_interval_ms, he.signal));
          else if (v.multisession_poll_interval_ms_at_capacity > 0)
            await sleep(v.multisession_poll_interval_ms_at_capacity, he.signal);
          he.cleanup();
        }
        continue;
      }
      let ee = async () => {
          logForDebugging(`[bridge:work] Acknowledging workId=${L.id}`);
          try {
            await d.acknowledgeWork(t, L.id, re.session_ingress_token);
          } catch (U) {
            logForDebugging(`[bridge:work] Acknowledge failed workId=${L.id}: ${l(U)}`);
          }
        },
        me = () => {
          if (v.non_exclusive_heartbeat_interval_ms <= 0 && Qe === 0) return;
          ((Qe = Date.now()),
            Ce(
              d
                .heartbeatWork(t, L.id, re.session_ingress_token)
                .then(() => logFeatureOk("bridge_work_heartbeat"))
                .catch((U) => {
                  (logFeatureSad("bridge_work_heartbeat", "initial_failed"),
                    logForDebugging(
                      `[bridge:work] Initial heartbeat failed workId=${L.id}: ${l(U)}`,
                    ));
                }),
            ));
        },
        Ze = L.data.type;
      switch (L.data.type) {
        case "healthcheck":
          (await ee(),
            logForDebugging("[bridge:work] Healthcheck received"),
            r.logVerbose("Healthcheck received"));
          break;
        case "session": {
          let U = L.data.id;
          try {
            validateBridgeId(U, "session_id");
          } catch {
            (await ee(), r.logError(`Invalid session_id received: ${U}`));
            break;
          }
          let Re = D.get(U);
          if (Re) {
            (ae.delete(U),
              X(U, !1),
              Re.updateAccessToken(re.session_ingress_token),
              $e.get(U)?.updateAccessToken(re.session_ingress_token),
              j.set(U, L.id),
              ze?.schedule(U, re.session_ingress_token),
              logForDebugging(
                `[bridge:work] Updated access token for existing sessionId=${U} workId=${L.id}`,
              ),
              await ee(),
              me());
            break;
          }
          if (D.size >= e.maxSessions) {
            logForDebugging(
              `[bridge:work] At capacity (${D.size}/${e.maxSessions}), cannot spawn new session for workId=${L.id}`,
            );
            break;
          }
          (await ee(), me());
          let he = Date.now(),
            Ue = buildSessionApiUrl(e.apiBaseUrl, U),
            st;
          for (let ve = 1; ve <= 2; ve++)
            try {
              ((st = await registerWorker(Ue, re.session_ingress_token)),
                logForDebugging(
                  `[bridge:session] CCR v2: registered worker sessionId=${U} epoch=${st} attempt=${ve}`,
                ),
                logFeatureOk("bridge_register_worker"));
              break;
            } catch (Ne) {
              let Ge = l(Ne);
              if (ve < 2) {
                if (
                  (logForDebugging(
                    `[bridge:session] CCR v2: registerWorker attempt ${ve} failed, retrying: ${Ge}`,
                  ),
                  await sleep(2000, N),
                  N.aborted)
                )
                  break;
                continue;
              }
              (r.logError(
                `CCR v2 worker registration failed for session ${U}: ${Ge}`,
              ),
                logFeatureBad("bridge_register_worker", "request_failed"));
              let { kind: ct, status: B } = Ps(Ne);
              if (ct !== "other" && ((B ?? 0) < 500 || B === 503))
                logForDebugging(`registerWorker failed: ${Ge}`, { level: "error" });
              else
                logError(
                  dt(
                    Error(`registerWorker failed: ${Ge}`),
                    "registerWorker failed",
                  ),
                );
              (fe.add(L.id), Ce(Lt(d, t, L.id, ue, r, w.stopWorkBaseDelayMs)));
            }
          if (st === void 0) break;
          let { spawnMode: lt, dir: qe } = e,
            pt = 0;
          if (lt === "worktree" && (_ === void 0 || !sessionIdsMatch(U, _))) {
            let ve = Date.now();
            try {
              let Ne = await createAgentWorktree(`bridge-${Rt(U)}`, { storageV5: e.storageV5 });
              ((pt = Date.now() - ve),
                Ae.set(U, {
                  worktreePath: Ne.worktreePath,
                  worktreeBranch: Ne.worktreeBranch,
                  gitRoot: Ne.gitRoot,
                  hookBased: Ne.hookBased,
                  headCommit: Ne.headCommit,
                }),
                (qe = Ne.worktreePath),
                logForDebugging(
                  `[bridge:session] Created worktree for sessionId=${U} at ${Ne.worktreePath}`,
                ));
            } catch (Ne) {
              let Ge = l(Ne);
              (r.logError(`Failed to create worktree for session ${U}: ${Ge}`),
                logForDebugging(`Worktree creation failed for session ${U}: ${Ge}`, {
                  level: "error",
                }),
                fe.add(L.id),
                Ce(Lt(d, t, L.id, ue, r, w.stopWorkBaseDelayMs)));
              break;
            }
          }
          logForDebugging(`[bridge:session] Spawning sessionId=${U} sdkUrl=${Ue}`);
          let ke = toCompatSessionId(U),
            Pt = ++de;
          be.set(U, Pt);
          let vt =
              re.claude_code_args || re.mcp_config
                ? await br(re, {
                    sessionId: U,
                    apiBaseUrl: e.apiBaseUrl,
                    enabled: isBridgeServerSessionConfigEnabled(),
                  })
                : void 0,
            Yt = vt === void 0 ? _r(re.claude_code_args) : [],
            gt = Kn(
              p,
              {
                sessionId: U,
                sdkUrl: Ue,
                accessToken: re.session_ingress_token,
                workerEpoch: st,
                serverConfig: vt,
                modelArgs: Yt,
                onActivity: (ve) => {
                  switch (ve.type) {
                    case "tool_start":
                    case "text":
                      Je(U, !0);
                      break;
                    case "result":
                    case "error":
                      Je(U, !1);
                      break;
                  }
                },
                onFirstUserMessage: (ve) => {
                  if (He.has(ke)) return;
                  He.add(ke);
                  let Ne = truncateToWidth(ve.replace(/\s+/g, " ").trim(), os);
                  (r.setSessionTitle(ke, Ne),
                    logForDebugging(`[bridge:title] derived title for ${ke}: ${Ne}`),
                    import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js")
                      .then(async ({ getBridgeSession: Ge }) => {
                        k ??= createBridgeTitleWriter({
                          isOwnTitle: (oe, _e) => De.get(oe)?.has(_e) ?? !1,
                          onRemoteTitleAdopted: (oe, _e) =>
                            r.setSessionTitle(oe, _e),
                        });
                        let ct = await Ge(ke, { baseUrl: e.apiBaseUrl });
                        if (ct === null || be.get(U) !== Pt) return;
                        let B = De.get(ke);
                        if (
                          ct.title &&
                          !B?.has(ct.title) &&
                          !k.hasSent(ke, ct.title)
                        ) {
                          (r.setSessionTitle(ke, ct.title),
                            k.noteRemoteTitle(ke, ct.title),
                            logForDebugging(
                              `[bridge:title] remote rename for ${ke}: ${ct.title}`,
                            ));
                          return;
                        }
                        (De.set(ke, (B ?? new Set()).add(Ne)),
                          await k.update(ke, Ne, { baseUrl: e.apiBaseUrl }));
                      })
                      .catch((Ge) =>
                        logForDebugging(
                          `[bridge:title] failed to update title for ${ke}: ${Ge}`,
                          { level: "error" },
                        ),
                      ));
                },
              },
              qe,
            );
          if (typeof gt === "string") {
            (r.logError(`Failed to spawn session ${U}: ${gt}`), Ce(hr(vt)));
            let ve = Ae.get(U);
            if (ve)
              (Ae.delete(U),
                Ce(nr(ve, r, { force: !0, storageV5: e.storageV5 })));
            (fe.add(L.id), Ce(Lt(d, t, L.id, ue, r, w.stopWorkBaseDelayMs)));
            break;
          }
          let At = gt,
            It = Date.now() - he;
          (logEvent("tengu_bridge_session_started", {
            active_sessions: D.size,
            spawn_mode: fromEnum(lt),
            in_worktree: Ae.has(U),
            spawn_duration_ms: It,
            worktree_create_ms: pt,
            inProtectedNamespace: isInProtectedNamespace(),
            ...getCooContextProperties(),
          }),
            writeDiagnosticsEvent("info", "bridge_session_started", {
              spawn_mode: lt,
              in_worktree: Ae.has(U),
              spawn_duration_ms: It,
              worktree_create_ms: pt,
            }),
            D.set(U, At),
            X(U, !1),
            e.onSessionServiced?.(U),
            j.set(U, L.id),
            Se.set(U, ke),
            Oe.delete(U),
            xe.delete(qe));
          let Mt = Date.now();
          (et.set(U, Mt), r.logSessionStart(U, `Session ${U}`));
          let mt = Rt(U),
            bt;
          if (e.debugFile) {
            let ve = e.debugFile.lastIndexOf(".");
            if (ve > 0)
              bt = `${e.debugFile.slice(0, ve)}-${mt}${e.debugFile.slice(ve)}`;
            else bt = `${e.debugFile}-${mt}`;
          } else if (e.verbose) bt = zn(getClaudeTempDir(), `bridge-session-${mt}.log`);
          if (bt) r.logVerbose(`Debug log: ${bt}`);
          (r.addSession(ke, buildClaudeAiSessionUrl(ke, e.sessionIngressUrl, { from: "cli" })),
            nt(),
            r.setAttached(ke),
            ls(ke, e.apiBaseUrl)
              .then((ve) => {
                if (ve && be.get(U) === Pt && !He.has(ke)) {
                  if (
                    (r.setSessionTitle(ke, ve),
                    logForDebugging(`[bridge:title] server title for ${ke}: ${ve}`),
                    !De.get(ke)?.has(ve))
                  )
                    He.add(ke);
                }
              })
              .catch((ve) =>
                logForDebugging(`[bridge:title] failed to fetch title for ${ke}: ${ve}`, {
                  level: "error",
                }),
              ),
            ze?.schedule(U, re.session_ingress_token),
            At.done.then(zt(U, Mt, At)));
          break;
        }
        default:
          (await ee(), logForDebugging(`[bridge:work] Unknown work type: ${Ze}, skipping`));
          break;
      }
      if (F) {
        let U = Te.signal();
        if (v.non_exclusive_heartbeat_interval_ms > 0)
          (await Fe(),
            await sleep(v.non_exclusive_heartbeat_interval_ms, U.signal));
        else if (v.multisession_poll_interval_ms_at_capacity > 0)
          await sleep(v.multisession_poll_interval_ms_at_capacity, U.signal);
        U.cleanup();
      }
    } catch (V) {
      if (N.aborted) break;
      if (V instanceof Le) {
        if (
          V.status === 404 &&
          !yt(V.errorType) &&
          !(ge && D.size === 0) &&
          isBridgeEnvReregisterEnabled()
        )
          if (ne < Ht) {
            (ne++,
              r.logVerbose(
                `Server no longer has this environment \u2014 re-registering (attempt ${ne}/${Ht})`,
              ));
            let O = await Cr({
              api: d,
              config: e,
              environmentId: t,
              activeSessions: D,
              attempt: ne,
              signal: N,
            });
            if (N.aborted) break;
            if (O.outcome !== "fatal") {
              if (O.outcome === "reregistered") {
                ((ue = O.environmentSecret), (Pe = !0));
                let F = new Map(ae);
                ae.clear();
                for (let re of O.pendingRequeues)
                  ae.set(re, (F.get(re) ?? 0) + 1);
              }
              (r.logVerbose(
                O.outcome === "reregistered"
                  ? "Environment re-registered; resuming poll."
                  : "Re-registration failed; retrying after backoff.",
              ),
                await sleep(
                  Math.max(
                    Vt(w.connInitialMs * ne),
                    Math.min(
                      O.outcome === "transient" ? (O.retryAfterMs ?? 0) : 0,
                      w.connCapMs,
                    ),
                  ),
                  N,
                ));
              continue;
            }
          } else
            (logEvent("tengu_bridge_env_reregister", {
              attempt: ne,
              outcome: S("gave_up"),
            }),
              logFeatureBad("bridge_env_reregister", "gave_up"));
        if (((ft = !0), V.status !== 401 && yt(V.errorType)))
          r.logStatus(ir(V.message));
        else if (Kt(V)) logForDebugging(`[bridge:work] Suppressed 403 error: ${V.message}`);
        else if (qt(V) && Oe.size > 0) Et();
        else
          (r.logError(V.message),
            logForDebugging(`[bridge:work] Fatal bridge error: ${V.message}`, {
              level: "error",
            }));
        (logEvent("tengu_bridge_fatal_error", {
          status: V.status,
          error_type: V.errorType === void 0 ? void 0 : dot(V.errorType),
        }),
          writeDiagnosticsEvent(yt(V.errorType) ? "info" : "error", "bridge_fatal_error", {
            status: V.status,
            error_type: V.errorType,
          }));
        break;
      }
      let L = describeAxiosError(V);
      if (Qn(V) || Zn(V)) {
        let O = Date.now();
        if (le !== null && O - le > Mr(w))
          (logForDebugging(
            `[bridge:work] Detected system sleep (${Math.round((O - le) / 1000)}s gap), resetting error budget`,
          ),
            writeDiagnosticsEvent("info", "bridge_poll_sleep_detected", { gapMs: O - le }),
            (Ee = null),
            (Ie = 0),
            (Be = null),
            (pe = 0));
        if (((le = O), !Ee)) Ee = O;
        let F = O - Ee;
        if (F >= w.connGiveUpMs) {
          (r.logError(
            `Server unreachable for ${Math.round(F / 60000)} minutes, giving up.`,
          ),
            logEvent("tengu_bridge_poll_give_up", {
              error_type: S("connection"),
              elapsed_ms: F,
            }),
            writeDiagnosticsEvent("error", "bridge_poll_give_up", {
              error_type: "connection",
              elapsed_ms: F,
            }),
            (ft = !0));
          break;
        }
        ((Be = null),
          (pe = 0),
          (Ie = Ie ? Math.min(Ie * 2, w.connCapMs) : w.connInitialMs));
        let re = Vt(Ie);
        if (
          (r.logVerbose(
            `Connection error, retrying in ${Wt(re)} (${Math.round(F / 1000)}s elapsed): ${L}`,
          ),
          r.updateReconnectingStatus(Wt(re), formatDuration(F)),
          getBridgePollIntervalConfig().non_exclusive_heartbeat_interval_ms > 0)
        )
          await Fe();
        await sleep(re, N);
      } else {
        let O = Date.now();
        if (le !== null && O - le > Mr(w))
          (logForDebugging(
            `[bridge:work] Detected system sleep (${Math.round((O - le) / 1000)}s gap), resetting error budget`,
          ),
            writeDiagnosticsEvent("info", "bridge_poll_sleep_detected", { gapMs: O - le }),
            (Ee = null),
            (Ie = 0),
            (Be = null),
            (pe = 0));
        if (((le = O), !Be)) Be = O;
        let F = O - Be;
        if (F >= w.generalGiveUpMs) {
          (r.logError(
            `Persistent errors for ${Math.round(F / 60000)} minutes, giving up.`,
          ),
            logEvent("tengu_bridge_poll_give_up", {
              error_type: S("general"),
              elapsed_ms: F,
            }),
            writeDiagnosticsEvent("error", "bridge_poll_give_up", {
              error_type: "general",
              elapsed_ms: F,
            }),
            (ft = !0));
          break;
        }
        ((Ee = null),
          (Ie = 0),
          (pe = pe ? Math.min(pe * 2, w.generalCapMs) : w.generalInitialMs));
        let re = Vt(pe);
        if (
          (r.logVerbose(
            `Poll failed, retrying in ${Wt(re)} (${Math.round(F / 1000)}s elapsed): ${L}`,
          ),
          r.updateReconnectingStatus(Wt(re), formatDuration(F)),
          getBridgePollIntervalConfig().non_exclusive_heartbeat_interval_ms > 0)
        )
          await Fe();
        await sleep(re, N);
      }
    }
  }
  (_t(), r.clearStatus({ final: !0 }));
  let ht = Date.now() - rt;
  (logEvent("tengu_bridge_shutdown", {
    active_sessions: D.size,
    loop_duration_ms: ht,
  }),
    writeDiagnosticsEvent("info", "bridge_shutdown", {
      active_sessions: D.size,
      loop_duration_ms: ht,
    }));
  let $t = new Set(D.keys());
  if (_ && ![...Oe].some((v) => sessionIdsMatch(v, _))) $t.add(_);
  let Ft = new Map(Se);
  if (
    (await (async () => {
      if (D.size === 0 && ce.size === 0) return;
      let v =
        e.persistActiveSessionsOnShutdown &&
        e.preserveOnShutdown &&
        !ft &&
        e.ownsPointer
          ? await e.awaitShutdownCause?.()
          : null;
      if (v !== "upgrade" && v !== "reload" && v !== "yield") return;
      let {
        readBridgePointer: V,
        writeBridgePointer: L,
        MAX_POINTER_ACTIVE_SESSION_IDS: O,
        PERSISTED_SESSION_RESUME_WINDOW_MS: F,
        isPersistedStampFresh: re,
      } = await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js");
      await (e.enqueuePointerWrite ?? ((me) => me()))(async () => {
        let me = await V(e.dir, { noClear: !0 }, e.storageV5);
        if (!me) return;
        let { ageMs: Ze, ...U } = me,
          Re = [...D.keys()],
          he = Date.now(),
          Ue = e.initialSessionRequeuesPersistedAt,
          lt =
            Ue !== void 0 && re(Ue, he, F)
              ? [...ce.keys()].filter((qe) => !Ke(qe))
              : [];
        await L(
          e.dir,
          {
            ...U,
            activeSessionIds: [
              ...Re.filter((qe) => We.has(qe)),
              ...lt,
              ...Re.filter((qe) => !We.has(qe)),
            ].slice(0, O),
            activeSessionIdsPersistedAt:
              lt.length > 0 && Ue !== void 0 ? Math.min(he, Ue) : he,
          },
          e.storageV5,
        );
      });
    })(),
    D.size > 0)
  ) {
    (logForDebugging(`[bridge:shutdown] Shutting down ${D.size} active session(s)`),
      r.logStatus(`Shutting down ${D.size} active session(s)\u2026`));
    let v = new Map(j);
    for (let [O, F] of D.entries())
      (logForDebugging(`[bridge:shutdown] Sending SIGTERM to sessionId=${O}`), F.kill());
    let V = Promise.allSettled(
        [...v.entries()].map(([O, F]) =>
          d
            .stopWork(t, F, ue, !0)
            .then(() => logFeatureOk("bridge_work_stop"))
            .catch((re) => {
              if (qt(re)) logFeatureSad("bridge_work_stop", "env_gone");
              else
                logFeatureBad(
                  "bridge_work_stop",
                  re instanceof Le && re.status === 403
                    ? "shutdown_403"
                    : "shutdown_failed",
                );
              r.logVerbose(
                `Failed to stop work ${F} for session ${O}: ${l(re)}`,
              );
            }),
        ),
      ),
      L = new AbortController();
    (await Promise.race([
      Promise.allSettled([...D.values()].map((O) => O.done)),
      sleep(w.shutdownGraceMs ?? 30000, L.signal),
    ]),
      L.abort());
    for (let [O, F] of D.entries())
      (logForDebugging(`[bridge:shutdown] Force-killing stuck sessionId=${O}`),
        F.forceKill());
    if ((ze?.cancelAll(), Ae.size > 0)) {
      let O = [...Ae.values()];
      (Ae.clear(),
        logForDebugging(`[bridge:shutdown] Cleaning up ${O.length} worktree(s)`),
        await Promise.allSettled(
          O.map((F) => nr(F, r, { storageV5: e.storageV5 })),
        ));
    }
    await V;
  }
  if (Ye.size > 0) await Promise.allSettled([...Ye]);
  if (e.preserveOnShutdown && !ft) {
    (r.logStatus(
      e.spawnMode === "single-session" && _
        ? `Resume this session by running \`claude remote-control ${e.ownsPointer ? "--continue" : `--session-id ${_}`}\``
        : "Environment preserved. Restart `claude remote-control` to reconnect existing sessions.",
    ),
      logForDebugging(
        `[bridge:shutdown] Skipping archive+deregister to allow resume (env ${t}, spawnMode ${e.spawnMode})`,
      ));
    return;
  }
  if ($t.size > 0)
    (logForDebugging(`[bridge:shutdown] Archiving ${$t.size} session(s)`),
      await Promise.allSettled(
        [...$t].map((v) =>
          d
            .archiveSession(Ft.get(v) ?? toCompatSessionId(v))
            .catch((V) =>
              r.logVerbose(`Failed to archive session ${v}: ${l(V)}`),
            ),
        ),
      ));
  try {
    (await d.deregisterEnvironment(t),
      logForDebugging("[bridge:shutdown] Environment deregistered, bridge offline"),
      r.logVerbose("Environment deregistered."));
  } catch (v) {
    r.logVerbose(`Failed to deregister environment: ${l(v)}`);
  }
  if (e.ownsPointer) {
    let { clearBridgePointer: v } = await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js");
    await (e.enqueuePointerWrite ?? ((L) => L()))(async () => {
      ((e.pointerCleared = !0), await v(e.dir, e.storageV5));
    });
  }
  r.logVerbose("Environment offline.");
}
var Jn = new Set([
  "ECONNREFUSED",
  "ECONNRESET",
  "ETIMEDOUT",
  "ECONNABORTED",
  "ENETUNREACH",
  "EHOSTUNREACH",
  "ERR_SOCKET_CLOSED",
  "ERR_PROXY_TUNNEL",
]);
function Qn(e) {
  if (
    e &&
    typeof e === "object" &&
    "code" in e &&
    typeof e.code === "string" &&
    Jn.has(e.code)
  )
    return !0;
  return !1;
}
function Zn(e) {
  return (
    !!e &&
    typeof e === "object" &&
    "code" in e &&
    typeof e.code === "string" &&
    e.code === "ERR_BAD_RESPONSE"
  );
}
function Vt(e) {
  return Math.max(0, e + e * 0.25 * (2 * Math.random() - 1));
}
function Wt(e) {
  return e >= 1000 ? `${(e / 1000).toFixed(1)}s` : `${Math.round(e)}ms`;
}
async function Lt(e, t, o, d, p, r = 1000) {
  for (let w = 1; w <= 3; w++)
    try {
      (await e.stopWork(t, o, d, !1),
        logForDebugging(`[bridge:work] stopWork succeeded for workId=${o} on attempt ${w}/3`),
        logFeatureOk("bridge_work_stop"));
      return;
    } catch (_) {
      if (_ instanceof Le) {
        if (Kt(_))
          (logForDebugging(`[bridge:work] Suppressed stopWork 403 for ${o}: ${_.message}`),
            logFeatureSad("bridge_work_stop", "fatal_403"));
        else if (qt(_))
          (logForDebugging(
            `[bridge:work] stopWork skipped for ${o} \u2014 environment gone: ${_.message}`,
          ),
            logFeatureSad("bridge_work_stop", "env_gone"));
        else
          (p.logError(`Failed to stop work ${o}: ${_.message}`),
            logFeatureBad(
              "bridge_work_stop",
              _.status === 401
                ? "fatal_401"
                : _.status === 403
                  ? "fatal_403"
                  : "fatal_other",
            ));
        writeDiagnosticsEvent("error", "bridge_stop_work_failed", { attempts: w, fatal: !0 });
        return;
      }
      let T = l(_);
      if (w < 3) {
        let E = Vt(r * Math.pow(2, w - 1));
        (p.logVerbose(
          `Failed to stop work ${o} (attempt ${w}/3), retrying in ${Wt(E)}: ${T}`,
        ),
          await sleep(E));
      } else
        (p.logError(`Failed to stop work ${o} after 3 attempts: ${T}`),
          writeDiagnosticsEvent("error", "bridge_stop_work_failed", { attempts: 3 }),
          logFeatureBad("bridge_work_stop", "retries_exhausted"));
    }
}
async function nr(e, t, o) {
  let d = o?.force || (e.hookBased && e.headCommit === void 0),
    {
      dirty: p,
      commitsAhead: r,
      gitError: C,
    } = d
      ? { dirty: !1, commitsAhead: 0, gitError: !1 }
      : await getAgentWorktreeChanges(e.worktreePath, e.headCommit, { hookBased: e.hookBased });
  if (p || r > 0) {
    let _ = `${r} ${pluralize(r, "commit")}`,
      T = C
        ? "git error checking changes"
        : p && r > 0
          ? `uncommitted changes \xB7 ${_}`
          : p
            ? "uncommitted changes"
            : _;
    if (e.gitRoot) await unlockAgentWorktree(e.worktreePath, e.gitRoot);
    (t.logStatus(`kept worktree ${e.worktreePath} \xB7 ${T}`),
      logForDebugging(
        `[bridge:worktree] kept ${e.worktreePath} dirty=${p} commitsAhead=${r} gitError=${!!C}`,
      ));
    return;
  }
  switch (
    (
      await removeAgentWorktree(
        e.worktreePath,
        e.worktreeBranch,
        e.gitRoot,
        e.hookBased,
        "bridge",
        void 0,
        void 0,
        { storageV5: o?.storageV5 },
      )
    ).outcome
  ) {
    case "removed":
      t.logStatus(`removed worktree ${e.worktreePath}`);
      break;
    case "left_in_place":
      t.logStatus(
        `worktree directory left at ${e.worktreePath} (git no longer recognized it)`,
      );
      break;
    case "failed":
      t.logStatus(`worktree removal failed, kept: ${e.worktreePath}`);
      break;
  }
}
var es = ["session", "same-dir", "worktree"];
function ts(e) {
  if (e === "session") return "single-session";
  if (e === "same-dir") return "same-dir";
  if (e === "worktree") return "worktree";
  return `--spawn requires one of: ${es.join(", ")} (got: ${e ?? "<missing>"})`;
}
function rs(e) {
  let t = e === void 0 ? NaN : parseConfigInteger(e);
  if (isNaN(t) || t < 1)
    return `--capacity requires a positive integer (got: ${e ?? "<missing>"})`;
  return t;
}
function ns(e) {
  let t = e === void 0 ? NaN : Number(e);
  if (!Number.isInteger(t) || t < 1024 || t > 65535)
    return `--preview-port requires an integer in [1024, 65535] (got: ${e ?? "<missing>"})`;
  return t;
}
function ss(e) {
  let t = !1,
    o = !1,
    d,
    p,
    r,
    C,
    w,
    _ = !1,
    T,
    E,
    W,
    N,
    ue = !1,
    ne = !1,
    Pe = [];
  for (let ce = 0; ce < e.length; ce++) {
    let I = e[ce];
    if (I === "--help" || I === "-h") _ = !0;
    else if (I === "--verbose" || I === "-v") t = !0;
    else if (I === "--sandbox") o = !0;
    else if (I === "--no-sandbox") o = !1;
    else if (I === "--debug-file" && ce + 1 < e.length) d = resolve(e[++ce]);
    else if (I.startsWith("--debug-file=")) d = resolve(I.slice(13));
    else if (I === "--permission-mode" && ce + 1 < e.length) p = normalizePermissionModeAlias(e[++ce]);
    else if (I.startsWith("--permission-mode=")) p = normalizePermissionModeAlias(I.slice(18));
    else if (I === "--name" && ce + 1 < e.length) r = e[++ce];
    else if (I.startsWith("--name=")) r = I.slice(7);
    else if (I === "--remote-control-session-name-prefix" && ce + 1 < e.length)
      w = e[++ce];
    else if (I.startsWith("--remote-control-session-name-prefix="))
      w = I.slice(37);
    else if (I === "--session-id" && ce + 1 < e.length) {
      if (((N = e[++ce]), !N)) return ae("--session-id requires a value");
    } else if (I.startsWith("--session-id=")) {
      if (((N = I.slice(13)), !N)) return ae("--session-id requires a value");
    } else if (I === "--continue" || I === "-c") ue = !0;
    else if (I === "--spawn" || I.startsWith("--spawn=")) {
      if (T !== void 0) return ae("--spawn may only be specified once");
      let X = I.startsWith("--spawn=") ? I.slice(8) : e[++ce],
        ge = ts(X);
      if (ge === "single-session" || ge === "same-dir" || ge === "worktree")
        T = ge;
      else return ae(ge);
    } else if (I === "--capacity" || I.startsWith("--capacity=")) {
      if (E !== void 0) return ae("--capacity may only be specified once");
      let X = I.startsWith("--capacity=") ? I.slice(11) : e[++ce],
        ge = rs(X);
      if (typeof ge === "number") E = ge;
      else return ae(ge);
    } else if (I === "--create-session-in-dir") W = !0;
    else if (I === "--no-create-session-in-dir") W = !1;
    else if (I === "--enable-live-preview") ne = !0;
    else if (I === "--preview-port" || I.startsWith("--preview-port=")) {
      let X = I.startsWith("--preview-port=") ? I.slice(15) : e[++ce],
        ge = ns(X);
      if (typeof ge === "number") Pe.push(ge);
      else return ae(ge);
    } else
      return ae(`Unknown argument: ${I}
Run 'claude remote-control --help' for usage.`);
  }
  if (T === "single-session" && E !== void 0)
    return ae(
      "--capacity cannot be used with --spawn=session (single-session mode has fixed capacity 1).",
    );
  if ((N || ue) && (T !== void 0 || E !== void 0 || W !== void 0))
    return ae(
      "--session-id and --continue cannot be used with --spawn, --capacity, or --create-session-in-dir.",
    );
  if (N && ue)
    return ae("--session-id and --continue cannot be used together.");
  if (ne || Pe.length > 0)
    return ae(
      "--enable-live-preview and --preview-port are not available in this build.",
    );
  if (isEssentialTrafficOnly() && (ne || Pe.length > 0))
    return ae(
      `--enable-live-preview is unavailable while nonessential network traffic is disabled (${getNonessentialTrafficDisabledEnvVar() ?? "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC"} is set).`,
    );
  if (ne && Pe.length === 0)
    return ae(
      "--enable-live-preview requires at least one --preview-port <port>.",
    );
  if (!ne && Pe.length > 0)
    return ae(
      "--preview-port requires --enable-live-preview (the tunnel is off by default).",
    );
  return {
    verbose: t,
    sandbox: o,
    debugFile: d,
    permissionMode: p,
    name: r,
    project: C,
    sessionNamePrefix: w,
    spawnMode: T,
    capacity: E,
    createSessionInDir: W,
    sessionId: N,
    continueSession: ue,
    enableLivePreview: ne,
    previewPorts: Pe,
    help: _,
  };
  function ae(ce) {
    return {
      verbose: t,
      sandbox: o,
      debugFile: d,
      permissionMode: p,
      name: r,
      project: C,
      sessionNamePrefix: w,
      spawnMode: T,
      capacity: E,
      createSessionInDir: W,
      sessionId: N,
      continueSession: ue,
      enableLivePreview: ne,
      previewPorts: Pe,
      help: _,
      error: ce,
    };
  }
}
async function is() {
  let { EXTERNAL_PERMISSION_MODES: e } = await import("../权限系统/chunk-e4pfvp7x.js"),
    o = `
Remote Control - Control local sessions from claude.ai/code or the Claude mobile app

USAGE
  claude remote-control [options]
OPTIONS
  --name <name>                    Name for the session (shown in claude.ai/code)
  --remote-control-session-name-prefix <prefix>
                                   Prefix for auto-generated session names
                                   (default: hostname; env:
                                   CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX)
  -c, --continue                   Reattach to the session \`claude remote-control\`
                                   last recorded for this directory (or one of its
                                   git worktrees) instead of creating a new one.
                                   Exits with an error if nothing was recorded
                                   here within roughly the last 4 hours
  --session-id <id>                Reattach to a specific session by ID (cannot be
                                   used with spawn flags or --continue)
  --permission-mode <mode>         Permission mode for spawned sessions
                                   (${e.join(", ")})
  --debug-file <path>              Write debug logs to file
  -v, --verbose                    Enable verbose output
  -h, --help                       Show this help
  --spawn <mode>                   Spawn mode: same-dir, worktree, session
                                   (default: same-dir)
  --capacity <N>                   Max concurrent sessions in worktree or
                                   same-dir mode (default: ${xr})
  --[no-]create-session-in-dir     Pre-create a session in the current
                                   directory; in worktree mode this session
                                   stays in cwd while on-demand sessions get
                                   isolated worktrees (default: on)

DESCRIPTION
  Remote Control allows you to control sessions on your local device from
  claude.ai/code (https://claude.ai/code) or the Claude mobile app. Run
  this command in the directory you want to work in, then connect from
  your phone or a browser.

  Remote Control runs as a persistent server that accepts multiple concurrent
  sessions in the current directory. One session is pre-created on start so
  you have somewhere to type immediately. Use --spawn=worktree to isolate
  each on-demand session in its own git worktree, or --spawn=session for
  the classic single-session mode (exits when that session ends). Press 'w'
  during runtime to toggle between same-dir and worktree.

NOTES
  - You must be logged in with a Claude account that has a subscription
  - Run \`claude\` first in the directory to accept the workspace trust dialog
  - Worktree mode requires a git repository or WorktreeCreate/WorktreeRemove hooks
`;
  console.log(o);
}
var os = 80;
async function as(e) {
  let t = isHoverRestEnabled() && e !== void 0 ? await getBridgeAccessTokenAsync(e) : getBridgeAccessToken();
  if (!t) return null;
  let o = isCcrV2SessionCrudEnabled(),
    d;
  if (!o) {
    let { getOrganizationUUID: r } = await import("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js");
    d = (await r()) ?? void 0;
  }
  let p = await getTrustedDeviceToken().catch(() => {
    return;
  });
  return { accessToken: t, useV2: o, orgUUID: d, trustedDeviceToken: p };
}
async function ds(e, t, o) {
  try {
    let { getFeatureValue_CACHED_MAY_BE_STALE: d } =
      await import("../../01-核心基础设施/共享小工具-未细化/ATIS_REQUEST_HEADER.9bwp2jqb.js");
    if (!d("tengu_bridge_unarchive_on_resume", !0)) return !1;
    let p = await as(o);
    if (!p) return !1;
    let { accessToken: r, useV2: C, orgUUID: w, trustedDeviceToken: _ } = p,
      { unarchiveCodeSession: T } = await import("./code-session-api.js"),
      E = await T(t, r, e, 1e4, {
        useV2: C,
        orgUUID: w,
        trustedDeviceToken: _,
      });
    if (E === "untrusted_device") {
      let W = await withUntrustedDeviceRecovery(
        _,
        (N) => T(t, r, e, 1e4, { useV2: C, orgUUID: w, trustedDeviceToken: N }),
        o,
      );
      if (W !== void 0) E = W;
    }
    if (typeof E === "number" && E < 300)
      return (
        logFeatureOk("bridge_session_unarchive"),
        logForDebugging(
          `[bridge:init] Unarchived reaped session ${e} before reattach (status=${String(E)})`,
        ),
        !0
      );
    if (E === 409)
      return (
        logForDebugging(
          `[bridge:init] Session ${e} already active (unarchived by another client) \u2014 resuming without a mutation to compensate`,
        ),
        !1
      );
    return (
      logFeatureBad("bridge_session_unarchive", typeof E === "number" ? `http_${E}` : E),
      logForDebugging(
        `[bridge:init] Unarchive of reaped session ${e} failed (status=${String(E)}) \u2014 keeping prior reattach behavior`,
        { level: "warn" },
      ),
      !1
    );
  } catch (d) {
    return (
      logForDebugging(`[bridge:init] unarchiveBridgeSessionIfNeeded(${e}) failed: ${l(d)}`, {
        level: "warn",
      }),
      !1
    );
  }
}
async function ls(e, t) {
  let { getBridgeSession: o } = await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js");
  return (await o(e, { baseUrl: t }))?.title || void 0;
}
function Ur(e, t, o, d, p, r, C, w, _, T) {
  let E = setInterval(
    (W, N, ue, ne, Pe, ae, ce, I, X, ge) =>
      void N().then((D) =>
        ce(() => {
          if (ae.aborted || ge()) return Promise.resolve(!1);
          if (
            ne.activeSessionIds !== void 0 &&
            (ne.activeSessionIdsPersistedAt === void 0 ||
              !X(ne.activeSessionIdsPersistedAt, Date.now(), I))
          )
            (delete ne.activeSessionIds, delete ne.activeSessionIdsPersistedAt);
          return W(ue, { ...ne, procStart: D }, Pe);
        }),
      ),
    3600000,
    e,
    t,
    o,
    d,
    p,
    r,
    C,
    w,
    _,
    T,
  );
  return (E.unref?.(), E);
}
async function bridgeMain(e, t, o) {
  let d = ss(e);
  if (d.help) {
    await is();
    return;
  }
  if (d.error) (console.error(`Error: ${d.error}`), process.exit(1));
  let p = getLauncherConfigError();
  if (p) {
    (logFeatureBad("agent_launcher", "remote_control_refused"),
      console.error(
        `Error: ${p} \u2014 Remote Control sessions are not started unwrapped; fix the launcher, then retry`,
      ));
    let { exitAfterAnalyticsFlush: B } = await import("../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js");
    return B(1);
  }
  (lockCurrentVersion(), setAttestationFilterPolicy(getAttestationFilterPolicy));
  let {
    verbose: r,
    sandbox: C,
    debugFile: w,
    permissionMode: _,
    name: T,
    project: E,
    sessionNamePrefix: W,
    spawnMode: N,
    capacity: ue,
    createSessionInDir: ne,
    sessionId: Pe,
    continueSession: ae,
    enableLivePreview: ce,
    previewPorts: I,
  } = d;
  if (W) process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX = W;
  let X = Pe,
    ge;
  if (_ !== void 0) {
    let { PERMISSION_MODES: B, PERMISSION_MODE_MANUAL_ALIAS: oe } =
      await import("../权限系统/chunk-e4pfvp7x.js");
    if (!B.includes(_)) {
      let K = B.map((se) => (se === "default" ? oe : se));
      (console.error(
        `Error: Invalid permission mode '${_}'. Valid modes: ${K.join(", ")}`,
      ),
        process.exit(1));
    }
  }
  let D = resolve("."),
    { enableConfigs: Ke, checkHasTrustDialogAccepted: We } =
      await import("../../01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js");
  await Ke();
  let { initSinks: Je } = await import("./initSinks.6cfazjmq.js");
  Je();
  let { setOriginalCwd: et, setCwdState: j } =
    await import("../状态管理-AppState/getOriginalCwd.mg2gq0d6.js");
  if ((et(D), j(D), !We())) {
    let B = homedir() === getCwd();
    (console.error(
      B
        ? `Error: Workspace not trusted. ${D} is your home directory, and for security home-directory trust is never saved, so running \`claude\` here first won't help. Run \`claude rc\` from a project directory instead (run \`claude\` there once to accept the trust dialog).`
        : `Error: Workspace not trusted. Please run \`claude\` in ${D} first to review and accept the workspace trust dialog.`,
    ),
      process.exit(1));
  }
  let { clearOAuthTokenCache: Se, checkAndRefreshOAuthTokenIfNeeded: $e } =
      await import("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
    {
      getBridgeAccessToken: fe,
      getBridgeAccessTokenAsync: Ae,
      getBridgeBaseUrl: Oe,
    } = await import("../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js"),
    xe = isHoverRestEnabled() && o !== void 0;
  if (!(xe ? await Ae(o) : fe())) (console.error(REMOTE_CONTROL_NOT_LOGGED_IN_MESSAGE), process.exit(1));
  let {
    getGlobalConfig: De,
    saveGlobalConfig: k,
    getCurrentProjectConfig: J,
    saveCurrentProjectConfig: de,
  } = await import("../../01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js");
  if (!De().remoteDialogSeen) {
    let oe = (await import("readline")).createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    console.log(`
Take this session with you and pick up right where you left off on any device.
Open the Code tab in the Claude mobile app, or visit claude.ai/code in a browser.

The session keeps running on this machine. Use your other devices as a remote
control. Press Ctrl+C to stop.
`);
    let _e = await new Promise((K) => {
      oe.question("Enable Remote Control? (y/n) ", K);
    });
    if ((oe.close(), _e.toLowerCase() !== "y" && _e.toLowerCase() !== "yes"))
      process.exit(0);
    await k((K) => {
      if (K.remoteDialogSeen) return K;
      return { ...K, remoteDialogSeen: !0 };
    }, t);
  }
  if (ae) {
    let { readBridgePointerAcrossWorktrees: B } =
        await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js"),
      oe = await B(D, t);
    if (!oe)
      (console.error(
        "Error: No recent session found in this directory or its worktrees. Run `claude remote-control` to start a new one.",
      ),
        process.exit(1));
    let { pointer: _e, dir: K } = oe,
      se = Math.round(_e.ageMs / 60000),
      Me = se < 60 ? `${se}m` : `${Math.round(se / 60)}h`,
      it = K !== D ? ` from worktree ${K}` : "";
    (console.error(`Resuming session ${_e.sessionId} (${Me} ago)${it}\u2026`),
      (X = _e.sessionId),
      (ge = K));
  }
  let be = Oe();
  if (
    be.startsWith("http://") &&
    !be.includes("localhost") &&
    !be.includes("127.0.0.1")
  )
    (console.error(
      "Error: Remote Control base URL uses HTTP. Only HTTPS or localhost HTTP is allowed.",
    ),
      process.exit(1));
  let Te = be,
    {
      snapshotGitEvidenceForBridge: Fe,
      findGitRoot: ot,
      redactGitRemoteCredentials: ze,
    } = await import("../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js"),
    { hasWorktreeCreateHook: rt } = await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
    Ye = rt() || ot(D) !== null,
    Ce = J().remoteControlSpawnMode;
  if (Ce === "worktree" && !Ye)
    (console.error(
      "Warning: Saved spawn mode is worktree but this directory is not a git repository. Falling back to same-dir.",
    ),
      (Ce = void 0),
      await de((B) => {
        if (B.remoteControlSpawnMode === void 0) return B;
        return { ...B, remoteControlSpawnMode: void 0 };
      }, t));
  if (!Ce && Ye && N === void 0 && !X && process.stdin.isTTY) {
    let oe = (await import("readline")).createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    console.log(
      `
Remote Control is launching in spawn mode, which lets you start new sessions in this project from claude.ai/code or the Claude mobile app. Learn more: https://code.claude.com/docs/en/remote-control

Spawn mode for this project:
` +
        `  [1] same-dir \u2014 sessions share the current directory (default)
` +
        `  [2] worktree \u2014 each session gets an isolated git worktree

` +
        `This can be changed later or explicitly set with --spawn=same-dir or --spawn=worktree.
`,
    );
    let _e = await new Promise((se) => {
      oe.question("Choose [1/2] (default: 1): ", se);
    });
    oe.close();
    let K = _e.trim() === "2" ? "worktree" : "same-dir";
    ((Ce = K),
      logEvent("tengu_bridge_spawn_mode_chosen", { spawn_mode: fromEnum(K) }),
      await de((se) => {
        if (se.remoteControlSpawnMode === K) return se;
        return { ...se, remoteControlSpawnMode: K };
      }, t));
  }
  let Ie, pe;
  if (X) ((pe = "single-session"), (Ie = "resume"));
  else if (N !== void 0) ((pe = N), (Ie = "flag"));
  else if (Ce !== void 0) ((pe = Ce), (Ie = "saved"));
  else ((pe = "same-dir"), (Ie = "gate_default"));
  let Ee = pe === "single-session" ? 1 : (ue ?? xr),
    Be = ne ?? !0,
    le,
    Qe,
    je,
    ut,
    ft = !1,
    Ct = !1,
    nt,
    _t = !1;
  if (!X && Be) {
    let {
        readBridgePointer: B,
        PERSISTED_SESSION_RESUME_WINDOW_MS: oe,
        isPersistedStampFresh: _e,
      } = await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js"),
      K = await B(D, void 0, t);
    if (K) {
      let { isProcessRunning: se } =
        await import("../../01-核心基础设施/共享小工具-未细化/process-record.js"),
      { isSameProcessAsync: Me } =
        await import("../../01-核心基础设施/核心工具-进程与信号/process-identity.js");
      if (
        K.pid !== void 0 &&
        K.pid !== process.pid &&
        se(K.pid) &&
        (await Me(K.pid, K.procStart))
      )
        ((_t = !0),
          logForDebugging(
            `[bridge:init] Pointer writer pid ${K.pid} still running; registering a fresh env and deferring pointer write`,
          ));
      else if (K.source === "standalone") {
        if (
          ((le = K.environmentId),
          (Qe = K.sessionId),
          K.activeSessionIdsPersistedAt !== void 0 &&
            _e(K.activeSessionIdsPersistedAt, Date.now(), oe))
        )
          ((je = K.activeSessionIds), (ut = K.activeSessionIdsPersistedAt));
        logForDebugging(
          `[bridge:init] Found prior environment ${le} in pointer (ageMs=${K.ageMs}); requesting reuse on registration`,
        );
      }
    }
  }
  if (pe === "worktree" && !Ye)
    (console.error(
      "Error: Worktree mode requires a git repository or WorktreeCreate hooks configured. Use --spawn=session for single-session mode.",
    ),
      process.exit(1));
  let zt = tr(),
    { branch: Et, gitRepoUrl: ht, defaultBranch: $t } = await Fe(),
    Ft = hostname(),
    { getOrCreateRemoteControlMachineId: or } =
      await import("../../01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js"),
    v = await or(t),
    V = randomUUID(),
    { handleOAuth401Error: L } = await import("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
    O = Xt({
      baseUrl: be,
      getAccessToken: fe,
      runnerVersion: {
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
      onDebug: logForDebugging,
      onAuth401: (B) => L(B, o, t),
      getTrustedDeviceToken: getTrustedDeviceToken,
      useCcrV2Routing: isCcrV2SendEventsEnabled,
      useCcrV2SessionCrud: isCcrV2SessionCrudEnabled,
    }),
    F = le,
    re;
  if (X) {
    let {
        readBridgePointer: B,
        PERSISTED_SESSION_RESUME_WINDOW_MS: oe,
        isPersistedStampFresh: _e,
      } = await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js"),
      K = ge ?? D,
      se = await B(K, { noClear: !0 }, t);
    if (se?.pid !== void 0 && se.pid !== process.pid) {
      let { isProcessRunning: Bt } =
        await import("../../01-核心基础设施/共享小工具-未细化/process-record.js"),
      { isSameProcessAsync: Lr } =
        await import("../../01-核心基础设施/核心工具-进程与信号/process-identity.js");
      if (Bt(se.pid) && (await Lr(se.pid, se.procStart))) {
        if (sessionIdsMatch(se.sessionId, X))
          (console.error(
            `Error: Session ${X} is already being served by another \`claude remote-control\` instance (pid ${se.pid}) in ${K}. Use that terminal, or stop it first.`,
          ),
            process.exit(1));
        ((_t = !0), (re = se));
      }
    }
    if (
      !_t &&
      se?.source === "standalone" &&
      se.activeSessionIds?.length &&
      se.activeSessionIdsPersistedAt !== void 0 &&
      _e(se.activeSessionIdsPersistedAt, Date.now(), oe) &&
      K === D
    )
      ((le = se.environmentId),
        (je = se.activeSessionIds),
        (ut = se.activeSessionIdsPersistedAt));
    try {
      validateBridgeId(X, "sessionId");
    } catch {
      (console.error(
        `Error: Invalid session ID "${X}". Session IDs must not contain unsafe characters.`,
      ),
        process.exit(1));
    }
    (await $e({ credentials: o, storageV5: t }), Se());
    let { getBridgeSessionOrStatus: Me } = await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
      it = xe ? await Ae(o) : void 0,
      { session: tt, notFound: Dt } = await Me(X, {
        baseUrl: be,
        getAccessToken: xe ? () => it : fe,
        credentials: o,
      });
    if (!tt) {
      if (Dt && ge) {
        let { clearBridgePointer: Bt } = await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js");
        await Bt(ge, t);
      }
      (console.error(
        Dt
          ? `Error: Session ${X} not found. It may have been archived or expired.`
          : `Error: Could not reach the server to look up session ${X}. Check your network or run \`claude /login\`, then try again.`,
      ),
        process.exit(1));
    }
    if (!tt.environment_id) {
      if (ge) {
        let { clearBridgePointer: Bt } = await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js");
        await Bt(ge, t);
      }
      (console.error(
        `Error: Session ${X} has no environment_id. It may never have been attached to a bridge.`,
      ),
        process.exit(1));
    }
    if (((F = tt.environment_id), re && F === re.environmentId))
      (console.error(
        `Error: Environment ${F} is already being served by another \`claude remote-control\` instance (pid ${re.pid}) in ${ge ?? D}. Use that terminal, or stop it first.`,
      ),
        process.exit(1));
    ((ft = tt.status === "archived"),
      logForDebugging(`[bridge:init] Resuming session ${X} on environment ${F}`));
  }
  let ee = {
    dir: D,
    machineName: Ft,
    machineId: v,
    branch: Et,
    gitRepoUrl: ht,
    maxSessions: Ee,
    spawnMode: pe,
    verbose: r,
    sandbox: C,
    bridgeId: V,
    workerType: "claude_code",
    environmentId: randomUUID(),
    reuseEnvironmentId: F,
    hostProfile: await zt,
    apiBaseUrl: be,
    sessionIngressUrl: Te,
    debugFile: w,
    livePreviewPorts: ce ? new Set(I) : void 0,
    storageV5: t,
  };
  (logForDebugging(
    `[bridge:init] bridgeId=${V}${F ? ` reuseEnvironmentId=${F}` : ""} dir=${D} branch=${Et} gitRepoUrl=${ze(ht)} machine=${Ft}`,
  ),
    logForDebugging(`[bridge:init] apiBaseUrl=${be} sessionIngressUrl=${Te}`),
    logForDebugging(`[bridge:init] sandbox=${C}${w ? ` debugFile=${w}` : ""}`));
  let me, Ze;
  try {
    let B = await O.registerBridgeEnvironment(ee);
    ((me = B.environment_id), (Ze = B.environment_secret));
  } catch (B) {
    (logEvent("tengu_bridge_registration_failed", {
      status: B instanceof Le ? B.status : void 0,
    }),
      console.error(
        B instanceof Le && B.status === 404
          ? "Remote Control environments are not available for your account."
          : B instanceof Le && B.status !== 401 && yt(B.errorType)
            ? `Error: ${ir(B.message)}`
            : `Error: ${l(B)}`,
      ),
      process.exit(1));
  }
  if (le && !X)
    if (me !== le) {
      (logForDebugging(
        `Bridge env reuse mismatch: requested ${le}, backend returned ${me}.`,
        { level: "warn" },
      ),
        console.warn(
          "Warning: Could not reuse the previous environment. Existing claude.ai/code sessions from the previous run will not reconnect.",
        ));
      let { clearBridgePointer: B } = await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js");
      await B(D, t);
    } else {
      let { writeBridgePointer: B, readBridgePointer: oe } =
          await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js"),
        { ownProcStartAsync: _e } = await import("../../01-核心基础设施/核心工具-进程与信号/process-identity.js");
      if (
        ((ee.preserveOnShutdown = await B(
          D,
          {
            sessionId: Qe ?? "",
            environmentId: me,
            source: "standalone",
            pid: process.pid,
            procStart: await _e(),
            ...(je?.length && {
              activeSessionIds: je,
              activeSessionIdsPersistedAt: ut,
            }),
          },
          t,
        )),
        (ee.ownsPointer = ee.preserveOnShutdown),
        ee.preserveOnShutdown)
      ) {
        let K = await oe(D, { noClear: !0 }, t);
        if (K && K.pid !== void 0 && K.pid !== process.pid)
          (logForDebugging(
            `[bridge:init] Lost pointer write race to pid ${K.pid}; backing off`,
            { level: "error" },
          ),
            console.error(
              `Error: Another \`claude remote-control\` instance (pid ${K.pid}) is already running in this directory. Exiting to avoid a split-brain conflict.`,
            ),
            process.exit(1));
      }
      if (((nt = Qe), nt)) {
        let K = toInfraSessionId(nt),
          se = K === nt ? [nt] : [nt, K],
          Me = !1,
          it = [];
        for (let tt of se)
          try {
            (await O.reconnectSession(me, tt),
              logForDebugging(
                `[bridge:init] Adopted session ${tt} re-queued via bridge/reconnect`,
              ),
              (Me = !0));
            break;
          } catch (Dt) {
            (it.push(Dt),
              logForDebugging(`[bridge:init] reconnectSession(${tt}) failed: ${l(Dt)}`));
          }
        if (!Me)
          if (it.length > 0 && it.every((tt) => tt instanceof Le)) nt = void 0;
          else
            logForDebugging(
              "[bridge:init] reconnectSession transient failure; session will be picked up passively once its lease expires",
              { level: "warn" },
            );
      }
    }
  let U;
  if (X)
    if (F && me !== F)
      (logForDebugging(
        `Bridge resume env mismatch: requested ${F}, backend returned ${me}. Falling back to fresh session.`,
        { level: "error" },
      ),
        console.warn(
          `Warning: Could not resume session ${X} \u2014 its environment has expired. Creating a fresh session instead.`,
        ));
    else {
      if (ft) Ct = await ds(X, be, o);
      let B = toInfraSessionId(X),
        oe = B === X ? [X] : [X, B],
        _e = !1,
        K;
      for (let se of oe)
        try {
          (await O.reconnectSession(me, se),
            logForDebugging(`[bridge:init] Session ${se} re-queued via bridge/reconnect`),
            (U = X),
            (_e = !0),
            (ee.preserveOnShutdown = !0),
            (ee.ownsPointer = !1));
          break;
        } catch (Me) {
          ((K = Me),
            logForDebugging(`[bridge:init] reconnectSession(${se}) failed: ${l(Me)}`));
        }
      if (!_e) {
        let se = K,
          Me = se instanceof Le;
        if (Ct && Me)
          await logFeatureBadAsync(
            "bridge_session_unarchive",
            "abandoned_after_fatal_reconnect",
          );
        if (ge && Me) {
          let { clearBridgePointer: tt } = await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js");
          await tt(ge, t);
        }
        console.error(
          Me
            ? se instanceof Le && se.status !== 401 && yt(se.errorType)
              ? `Error: ${ir(se.message)}`
              : `Error: ${l(se)}`
            : `Error: Failed to reconnect session ${X}: ${l(se)}
The session may still be resumable \u2014 try running the same command again.`,
        );
        let { exitAfterAnalyticsFlush: it } =
          await import("../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js");
        await it(1);
      }
    }
  logForDebugging(`[bridge:init] Registered, server environmentId=${me}`);
  let Re = getBridgePollIntervalConfig();
  (logEvent("tengu_bridge_started", {
    max_sessions: ee.maxSessions,
    has_debug_file: !!ee.debugFile,
    sandbox: ee.sandbox,
    verbose: ee.verbose,
    heartbeat_interval_ms: Re.non_exclusive_heartbeat_interval_ms,
    spawn_mode: fromEnum(ee.spawnMode),
    spawn_mode_source: fromEnum(Ie),
    pre_create_session: Be,
    worktree_available: Ye,
  }),
    writeDiagnosticsEvent("info", "bridge_started", {
      max_sessions: ee.maxSessions,
      sandbox: ee.sandbox,
      spawn_mode: ee.spawnMode,
    }));
  let he = vr({ verbose: r }),
    Ue = await resolveBridgeDaemonOwner(fe),
    st = resolveWrappedClaudeInvocation({ pinToCurrentBinary: !0 }),
    lt = Jt({
      execPath: st.cmd,
      scriptArgs: st.prefixArgs,
      env: process.env,
      verbose: r,
      sandbox: C,
      debugFile: w,
      permissionMode: _,
      onDebug: logForDebugging,
      onActivity: (B, oe) => {
        logForDebugging(`[bridge:activity] sessionId=${B} ${oe.type} ${oe.summary}`);
      },
      onPermissionRequest: (B, oe, _e) => {
        logForDebugging(
          `[bridge:perm] sessionId=${B} tool=${oe.request.tool_name} request_id=${oe.request_id} (not auto-approving)`,
        );
      },
      onChildWarning: (B, oe) => he.logWarning(`${oe} (${B})`),
      ownerIdentity: Ue,
    }),
    { parseGitHubRepository: qe } = await import("../../01-核心基础设施/共享小工具-未细化/parseGitHubRepository.3ng6714h.js"),
    pt = ht ? qe(ht) : null,
    ke = pt ? pt.split("/").pop() : basename(D);
  he.setRepoInfo(ke, Et);
  let Pt = pe !== "single-session" && Ye;
  if (Pt) he.setSpawnModeDisplay(pe);
  let vt = (B) => {
      if (B[0] === 3 || B[0] === 4) {
        process.emit("SIGINT");
        return;
      }
      if (B[0] === 32) {
        he.toggleQr();
        return;
      }
      if (B[0] === 119) {
        if (!Pt) return;
        let oe = ee.spawnMode === "same-dir" ? "worktree" : "same-dir";
        ((ee.spawnMode = oe),
          logEvent("tengu_bridge_spawn_mode_toggled", { spawn_mode: fromEnum(oe) }),
          he.logStatus(
            oe === "worktree"
              ? "Spawn mode: worktree (new sessions get isolated git worktrees)"
              : "Spawn mode: same-dir (new sessions share the current directory)",
          ),
          he.setSpawnModeDisplay(oe),
          he.refreshDisplay(),
          de((_e) => {
            if (_e.remoteControlSpawnMode === oe) return _e;
            return { ..._e, remoteControlSpawnMode: oe };
          }, t));
        return;
      }
    },
    { markPrintModeSignalHandlersRegistered: Yt } =
      await import("../../01-核心基础设施/核心工具-进程与信号/flushAnalyticsSinks.tbwzvw9n.js");
  if (process.stdin.isTTY)
    (trySetRawMode(process.stdin, !0),
      process.stdin.resume(),
      process.stdin.on("data", vt));
  let gt = new AbortController(),
    At = () => {
      (logForDebugging("[bridge:shutdown] SIGINT received, shutting down"), gt.abort());
    },
    It = () => {
      (logForDebugging("[bridge:shutdown] SIGTERM received, shutting down"), gt.abort());
    },
    Mt = () => {
      (logForDebugging("[bridge:shutdown] SIGHUP received, shutting down"),
        he.detachTerminal(),
        process.stdin.off("data", vt),
        process.stdin.pause(),
        gt.abort());
    };
  (Yt(),
    process.on("SIGINT", At),
    process.on("SIGTERM", It),
    process.on("SIGHUP", Mt));
  let mt = U ?? nt ?? null,
    bt;
  if (Be && !U && !nt) {
    let B = T ?? `${getBridgeSessionNamePrefix()}-${generateAdjectiveNounName()}`,
      { createBridgeSession: oe } = await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js");
    try {
      let _e = xe ? await Ae(o) : void 0;
      if (
        ((mt = await oe({
          environmentId: me,
          title: B,
          events: [],
          gitRepoUrl: ht,
          branch: Et,
          defaultBranch: $t,
          signal: gt.signal,
          baseUrl: be,
          getAccessToken: xe ? () => _e : fe,
          credentials: o,
          permissionMode: _,
          tags: [REMOTE_CONTROL_CLI_TAG],
        })),
        mt)
      ) {
        if (!T) bt = B;
        logForDebugging(`[bridge:init] Created initial session ${mt}`);
      }
    } catch (_e) {
      logForDebugging(`[bridge:init] Session creation failed (non-fatal): ${l(_e)}`);
    }
  }
  let ve = null,
    Ne = mt ?? (ee.preserveOnShutdown ? (Qe ?? "") : null),
    Ge = null;
  if (Ne !== null && !_t) {
    let {
        writeBridgePointer: B,
        createBridgePointerWriteQueue: oe,
        PERSISTED_SESSION_RESUME_WINDOW_MS: _e,
        isPersistedStampFresh: K,
      } = await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js"),
      { ownProcStartAsync: se } = await import("../../01-核心基础设施/核心工具-进程与信号/process-identity.js"),
      Me = oe();
    if (
      ((ee.enqueuePointerWrite = Me),
      (Ge = {
        sessionId: Ne,
        environmentId: me,
        source: "standalone",
        pid: process.pid,
        procStart: await se(),
        ...(me === le &&
          je?.length && {
            activeSessionIds: je,
            activeSessionIdsPersistedAt: ut,
          }),
      }),
      await B(ee.dir, Ge, t))
    )
      ((ee.preserveOnShutdown = !0),
        (ee.ownsPointer = !0),
        (ve = Ur(
          B,
          se,
          ee.dir,
          Ge,
          t,
          gt.signal,
          Me,
          _e,
          K,
          () => ee.pointerCleared === !0,
        )));
  }
  let ct = ee.enqueuePointerWrite ?? ((B) => B());
  if (ee.ownsPointer && Ge !== null && me === le && je?.length) {
    let B = Ge,
      oe = je,
      { writeBridgePointer: _e } = await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js");
    ee.onSessionServiced = (K) => {
      if (B.activeSessionIds === void 0) {
        oe = [];
        return;
      }
      let se = sessionIdBody(K),
        Me = oe.filter((tt) => sessionIdBody(tt) !== se);
      if (Me.length === oe.length) return;
      if (((oe = Me), Me.length > 0)) B.activeSessionIds = Me;
      else (delete B.activeSessionIds, delete B.activeSessionIdsPersistedAt);
      let it = { ...B };
      ct(() => _e(ee.dir, it, t));
    };
  }
  try {
    await Br(
      ee,
      me,
      Ze,
      O,
      lt,
      he,
      gt.signal,
      void 0,
      mt ?? void 0,
      async () => (
        Se(),
        await $e({ credentials: o, storageV5: t }),
        xe ? await Ae(o) : fe()
      ),
      bt,
    );
  } finally {
    if (ve !== null) clearInterval(ve);
    if (
      (process.off("SIGINT", At),
      process.off("SIGTERM", It),
      process.off("SIGHUP", Mt),
      process.stdin.off("data", vt),
      process.stdin.isTTY)
    )
      trySetRawMode(process.stdin, !1);
    process.stdin.pause();
  }
  await drainRegisteredWriteQueues();
  try {
    process.exit(0);
  } catch (B) {
    process.kill(process.pid, "SIGKILL");
  }
}
class BridgeHeadlessPermanentError extends Error {
  constructor(e) {
    super(e);
    this.name = "BridgeHeadlessPermanentError";
  }
}
function cs(e, t) {
  if (!e) return null;
  let o = t ?? "Remote Control is disabled by your organization\u2019s policy.";
  if (e === "org_denied") return new BridgeHeadlessPermanentError(o);
  if (e === "route_missing")
    return new R(o, "Remote Control denied: policy route not served (404)");
  return new R(o, "Remote Control denied: policy cache miss (transient)");
}
async function runBridgeHeadless(e, t) {
  let { dir: o, log: d } = e,
    p = getLauncherConfigError();
  if (p)
    throw new R(
      `${p} \u2014 Remote Control sessions are not started unwrapped; the worker retries once the launcher is fixed`,
      "Remote Control worker refused: corporate launcher unresolvable (transient)",
    );
  changeWorkingDirectory(o);
  let { setOriginalCwd: r, setCwdState: C } =
    await import("../状态管理-AppState/getOriginalCwd.mg2gq0d6.js");
  (r(o), C(o));
  let { enableConfigs: w, checkHasTrustDialogAccepted: _ } =
    await import("../../01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js");
  await w();
  let { initSinks: T } = await import("./initSinks.6cfazjmq.js");
  T();
  let { getSettingsWithErrors: E } = await import("../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js");
  if (E().settings.disableRemoteControl === !0) throw new BridgeHeadlessPermanentError(REMOTE_CONTROL_DISABLED_BY_POLICY_MESSAGE);
  let { composePolicyLimitsClient: W, primePolicyLimitsCache: N } =
    await import("../../01-核心基础设施/共享小工具-未细化/POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS.hw6w9yxm.js");
  (W({ storageV5: e.storageV5 }), await N(e.storageV5));
  let { loadPolicyLimits: ue } = await import("../../01-核心基础设施/共享小工具-未细化/POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS.hw6w9yxm.js"),
    { policyDeniedReason: ne, policyDenyKind: Pe } =
      await import("../策略限制-PolicyLimits/chunk-8sw91yn5.js");
  await ue();
  let ae = cs(
    Pe("allow_remote_control"),
    ne("allow_remote_control", "Remote Control", "is"),
  );
  if (ae) throw ae;
  if (!_())
    throw new BridgeHeadlessPermanentError(
      homedir() === getCwd()
        ? `Workspace not trusted: ${o} is the home directory, whose trust is never saved \u2014 running \`claude\` there first won't help. Run Remote Control from a project directory instead.`
        : `Workspace not trusted: ${o}. Run \`claude\` in that directory first to accept the trust dialog.`,
    );
  if (!e.getAccessToken()) throw Error(REMOTE_CONTROL_NOT_LOGGED_IN_MESSAGE);
  let { getBridgeBaseUrl: ce } = await import("../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js"),
    I = ce();
  if (
    I.startsWith("http://") &&
    !I.includes("localhost") &&
    !I.includes("127.0.0.1")
  )
    throw new BridgeHeadlessPermanentError(
      "Remote Control base URL uses HTTP. Only HTTPS or localhost HTTP is allowed.",
    );
  let X = I,
    { snapshotGitEvidenceForBridge: ge, findGitRoot: D } =
      await import("../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js"),
    { hasWorktreeCreateHook: Ke } = await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js");
  if (e.spawnMode === "worktree") {
    if (!(Ke() || D(o) !== null))
      throw new BridgeHeadlessPermanentError(
        `Worktree mode requires a git repository or WorktreeCreate hooks. Directory ${o} has neither.`,
      );
  }
  let We = tr(t),
    { branch: Je, gitRepoUrl: et, defaultBranch: j } = await ge(),
    Se = hostname(),
    { getOrCreateRemoteControlMachineId: $e } =
      await import("../../01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js"),
    fe = await $e(e.storageV5),
    Ae = randomUUID(),
    Oe,
    xe = !1,
    He = [],
    De;
  {
    let {
        readBridgePointer: pe,
        PERSISTED_SESSION_RESUME_WINDOW_MS: Ee,
        isPersistedStampFresh: Be,
      } = await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js"),
      le = await pe(o, void 0, e.storageV5);
    if (le) {
      let { isProcessRunning: Qe } =
        await import("../../01-核心基础设施/共享小工具-未细化/process-record.js"),
      { isSameProcessAsync: je } =
        await import("../../01-核心基础设施/核心工具-进程与信号/process-identity.js");
      if (
        le.pid !== void 0 &&
        le.pid !== process.pid &&
        Qe(le.pid) &&
        (await je(le.pid, le.procStart))
      )
        ((xe = !0),
          d(
            `pointer writer pid ${le.pid} still running; registering fresh env, deferring pointer write`,
          ));
      else if (le.source === "standalone") {
        if (
          ((Oe = le.environmentId),
          e.persistActiveSessionsOnShutdown &&
            le.activeSessionIdsPersistedAt !== void 0 &&
            Be(le.activeSessionIdsPersistedAt, Date.now(), Ee))
        )
          ((He = le.activeSessionIds ?? []),
            (De = le.activeSessionIdsPersistedAt));
        d(
          `found prior environment ${Oe} in pointer (ageMs=${le.ageMs}); requesting reuse on registration`,
        );
      }
    }
  }
  let k = {
      dir: o,
      machineName: Se,
      machineId: fe,
      branch: Je,
      gitRepoUrl: et,
      maxSessions: e.capacity,
      spawnMode: e.spawnMode,
      verbose: !1,
      sandbox: e.sandbox,
      bridgeId: Ae,
      workerType: "claude_code",
      environmentId: randomUUID(),
      reuseEnvironmentId: Oe,
      hostProfile: await We,
      apiBaseUrl: I,
      sessionIngressUrl: X,
      storageV5: e.storageV5,
      onBusyChange: e.onBusyChange,
      persistActiveSessionsOnShutdown: e.persistActiveSessionsOnShutdown,
      awaitShutdownCause: e.awaitShutdownCause,
    },
    J = Xt({
      baseUrl: I,
      getAccessToken: e.getAccessToken,
      runnerVersion: {
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
      onDebug: d,
      onAuth401: e.onAuth401,
      getTrustedDeviceToken: getTrustedDeviceToken,
      useCcrV2Routing: isCcrV2SendEventsEnabled,
      useCcrV2SessionCrud: isCcrV2SessionCrudEnabled,
    }),
    de,
    be;
  try {
    let pe = await J.registerBridgeEnvironment(k);
    ((de = pe.environment_id), (be = pe.environment_secret));
  } catch (pe) {
    throw Error(`Bridge registration failed: ${l(pe)}`, { cause: pe });
  }
  let Te = [],
    Fe = [];
  if (de === Oe && He.length > 0) {
    d(
      `re-queuing ${He.length} session(s) interrupted by the previous shutdown`,
    );
    let pe = !1;
    for (let [Ee, Be] of He.entries()) {
      if (t.aborted) {
        ((pe = !0), (Te = He.slice(Ee)));
        break;
      }
      let le = await Nt(J, de, Be, t);
      if ((d(`re-queue ${Be}: ${le}`), le === "aborted")) {
        ((pe = !0), (Te = He.slice(Ee)));
        break;
      }
      if (le === "retry") Fe.push(Be);
    }
    if (!pe && Fe.length === 0) logFeatureOk("bridge_shutdown_requeue");
  } else if (He.length > 0) logFeatureBad("bridge_shutdown_requeue", "env_reuse_declined");
  if (Fe.length > 0 || Te.length > 0)
    ((k.initialSessionRequeues = [...Te, ...Fe]),
      (k.initialSessionRequeuesPersistedAt = De));
  let ot = us(d),
    ze = await resolveBridgeDaemonOwner(e.getAccessToken),
    rt = resolveWrappedClaudeInvocation({ pinToCurrentBinary: !0 }),
    Ye = Jt({
      execPath: rt.cmd,
      scriptArgs: rt.prefixArgs,
      env: process.env,
      verbose: !1,
      sandbox: e.sandbox,
      permissionMode: e.permissionMode,
      onDebug: d,
      onChildWarning: (pe, Ee) => ot.logWarning(`${Ee} (${pe})`),
      ownerIdentity: ze,
    });
  ot.printBanner(k, de);
  let Ce;
  if (e.createSessionOnStart) {
    let { createBridgeSession: pe } = await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js");
    try {
      let Ee = await pe({
        environmentId: de,
        title: e.name,
        events: [],
        gitRepoUrl: et,
        branch: Je,
        defaultBranch: j,
        signal: t,
        baseUrl: I,
        getAccessToken: e.getAccessToken,
        permissionMode: e.permissionMode,
        tags: [REMOTE_CONTROL_AUTO_TAG],
      });
      if (Ee) ((Ce = Ee), d(`created initial session ${Ee}`));
    } catch (Ee) {
      d(`session pre-creation failed (non-fatal): ${l(Ee)}`);
    }
  }
  let Ie = null;
  if (!xe) {
    if (Oe && de !== Oe)
      d(
        `env reuse mismatch: requested ${Oe}, backend returned ${de}; existing sessions will not reconnect`,
      );
    let {
        writeBridgePointer: pe,
        createBridgePointerWriteQueue: Ee,
        PERSISTED_SESSION_RESUME_WINDOW_MS: Be,
        isPersistedStampFresh: le,
      } = await import("./PERSISTED_SESSION_RESUME_WINDOW_MS.p4tjt1zq.js"),
      { ownProcStartAsync: Qe } = await import("../../01-核心基础设施/核心工具-进程与信号/process-identity.js"),
      je = {
        sessionId: Ce ?? "",
        environmentId: de,
        source: "standalone",
        pid: process.pid,
        procStart: await Qe(),
        ...(Te.length > 0 && {
          activeSessionIds: Te,
          activeSessionIdsPersistedAt: De,
        }),
      };
    if (
      ((k.preserveOnShutdown = await pe(o, je, e.storageV5)),
      (k.ownsPointer = k.preserveOnShutdown),
      k.preserveOnShutdown)
    )
      ((k.enqueuePointerWrite = Ee()),
        (Ie = Ur(
          pe,
          Qe,
          o,
          je,
          e.storageV5,
          t,
          k.enqueuePointerWrite,
          Be,
          le,
          () => k.pointerCleared === !0,
        )));
  }
  try {
    await Br(k, de, be, J, Ye, ot, t, void 0, Ce, async () =>
      e.getAccessToken(),
    );
  } finally {
    if (Ie) clearInterval(Ie);
  }
}
function us(e) {
  let t = () => {};
  return {
    printBanner: (o, d) =>
      e(
        `registered environmentId=${d} dir=${o.dir} spawnMode=${o.spawnMode} capacity=${o.maxSessions}`,
      ),
    logSessionStart: (o, d) => e(`session start ${o}`),
    logSessionComplete: (o, d) => e(`session complete ${o} (${d}ms)`),
    logSessionFailed: (o, d) => e(`session failed ${o}: ${d}`),
    logStatus: e,
    logVerbose: e,
    logError: (o) => e(`error: ${o}`),
    logWarning: (o) => e(`warning: ${o}`),
    logReconnected: (o) => e(`reconnected after ${o}ms`),
    addSession: (o, d) => e(`session attached ${o}`),
    removeSession: (o) => e(`session detached ${o}`),
    updateIdleStatus: t,
    updateReconnectingStatus: t,
    updateSessionStatus: t,
    updateSessionActivity: t,
    updateSessionCount: t,
    updateFailedStatus: t,
    setSpawnModeDisplay: t,
    setRepoInfo: t,
    setDebugLogPath: t,
    setAttached: t,
    setSessionTitle: t,
    clearStatus: t,
    toggleQr: t,
    refreshDisplay: t,
    detachTerminal: t,
  };
}
export {
  BridgeHeadlessPermanentError,
  bridgeMain,
  runBridgeHeadless,
};
