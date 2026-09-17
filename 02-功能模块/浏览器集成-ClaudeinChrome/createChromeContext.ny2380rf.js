// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 200 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import "./chrome-tool-error-classifier.js";
import "../图片-截图-ComputerUse/chunk-mk8kjx9c.js";
import "../MCP客户端/chunk-tv3jbp8f.js";
import "../MCP客户端/mcp-protocol.js";
import "../MCP客户端/mcp-server.js";
import "../图片-截图-ComputerUse/chunk-csvzwhzk.js";
import { createClaudeForChromeMcpServer } from "../远程控制-Bridge/chrome-bridge-mcp-server.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { shutdownFirstPartyEventLogging, validateOAuthToken, getClaudeAIOAuthTokens, checkAndRefreshOAuthTokenIfNeeded, saveGlobalConfig, watchGlobalConfigThroughStorage, getGlobalConfig, seedInstallIDs, shutdownDatadog } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { initDefaultDebugLog, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { fileSuffixForOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureBad, withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getWebSocketTLSOptions, getWebSocketProxyUrl, configureGlobalAgents } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { getAPIProvider, isActualFirstPartyAnthropicBaseUrl } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { initializeAnalyticsSink } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-sink.js";
import { ASK_USER_QUESTION_TOOL_NAME } from "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import { pinStorageV5 } from "../../01-核心基础设施/核心工具-未归类/pin-storage-v5.js";
import { loadFastPathPolicy } from "../../01-核心基础设施/设置-配置/fast-path-policy-loader.js";
import { isPolicyAllowedInResponse } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-8sw91yn5.js";
import { fetchPolicyLimitsForBearer } from "../策略限制-PolicyLimits/policy-limits-client.js";
import { credentialsStoreFor } from "../认证-OAuth登录/credentials-store.js";
import { CLAUDE_IN_CHROME_URL } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getSecureSocketPath, getAllSocketPaths } from "./claude-in-chrome-host.js";
import { logChromeBridgeConnected, logChromeExtensionConnected, logChromeToolCallDisconnected } from "../Hooks钩子/chrome-telemetry-events.js";
import { StdioServerTransport } from "../MCP传输-stdio-SSE-HTTP/stdio-server-transport.js";
import "../MCP传输-stdio-SSE-HTTP/stdio-message-framing.js";
import { format } from "util";
var P =
    "https://github.com/anthropics/claude-code/issues/new?labels=bug,claude-in-chrome",
  U = new Set(["bridge_status", "error_type", "tool_name"]),
  b = ["ask", "skip_all_permission_checks", "follow_a_plan"];
function T(e) {
  return b.some((r) => r === e);
}
function R() {
  if (a.USE_LOCAL_OAUTH || a.LOCAL_BRIDGE) return "ws://localhost:8765";
  if (a.USE_STAGING_OAUTH) return "wss://bridge-staging.claudeusercontent.com";
  return "wss://bridge.claudeusercontent.com";
}
function L() {
  return a.USE_LOCAL_OAUTH || a.LOCAL_BRIDGE;
}
function createChromeContext(e, r) {
  let {
      availabilityFunnel: o = !1,
      storageV5: c,
      credentials: u,
      bearerGate: v,
    } = r,
    m = new x(),
    I = e?.CLAUDE_CODE_REMOTE_SESSION_ID ?? a.CLAUDE_CODE_REMOTE_SESSION_ID,
    h,
    _ = R();
  m.info(`Bridge URL: ${_}`);
  let C,
    p = !1,
    y =
      e?.CLAUDE_CHROME_PERMISSION_MODE ??
      process.env.CLAUDE_CHROME_PERMISSION_MODE,
    O;
  if (y)
    if (T(y)) O = y;
    else
      m.warn(
        `Invalid CLAUDE_CHROME_PERMISSION_MODE "${y}". Valid values: ${b.join(", ")}`,
      );
  return {
    serverName: "Claude in Chrome",
    logger: m,
    socketPath: getSecureSocketPath(),
    getSocketPaths: getAllSocketPaths,
    clientTypeId: "claude-code",
    onAuthenticationError: () => {
      m.warn(
        "Authentication error occurred. Please ensure you are logged into the Claude browser extension with the same claude.ai account as Claude Code.",
      );
    },
    onToolCallDisconnected: () => {
      if (o) logChromeToolCallDisconnected(p);
      if (p)
        return `Browser extension is not connected: the OAuth token Claude Code is using belongs to a different claude.ai account than the one Claude Code is logged in as. If CLAUDE_CODE_OAUTH_TOKEN is set in your shell or CI profile, unset it (or re-mint it for this account), then run /logout and /login in Claude Code and make sure the browser extension is signed into the same claude.ai account. If you continue to experience issues, please report a bug: ${P}`;
      return `Browser extension is not connected. Please ensure the Claude browser extension is installed and running (${CLAUDE_IN_CHROME_URL}), and that you are logged into claude.ai with the same account as Claude Code. If this is your first time connecting to Chrome, you may need to restart Chrome for the installation to take effect. If you continue to experience issues, please report a bug: ${P}`;
    },
    onExtensionPaired: (t, s) => {
      if (o) logChromeExtensionConnected();
      (saveGlobalConfig((d) => {
        if (
          d.chromeExtension?.pairedDeviceId === t &&
          d.chromeExtension?.pairedDeviceName === s
        )
          return d;
        return {
          ...d,
          chromeExtension: { pairedDeviceId: t, pairedDeviceName: s },
        };
      }, c),
        m.info(`Paired with "${s}" (${t.slice(0, 8)})`));
    },
    getPersistedDeviceId: () => getGlobalConfig().chromeExtension?.pairedDeviceId,
    askUserToolName: ASK_USER_QUESTION_TOOL_NAME,
    ...(h !== void 0 && { getScreenshotSaveDir: () => h }),
    bridgeConfig: {
      url: _,
      getUserId: async () => {
        let t =
          getGlobalConfig().oauthAccount?.accountUuid ||
          process.env.CLAUDE_CODE_ACCOUNT_UUID;
        if (getAPIProvider() !== "firstParty") return ((p = !1), t);
        await checkAndRefreshOAuthTokenIfNeeded({ credentials: u, storageV5: c }).catch(() => {});
        let s = getClaudeAIOAuthTokens()?.accessToken;
        if (!s) return ((p = !1), t);
        if (C?.token !== s) {
          let g = await validateOAuthToken(s).catch(() => {
            return;
          });
          if (!g?.account_uuid) return ((p = !1), t);
          C = { token: s, accountUuid: g.account_uuid.toLowerCase() };
        }
        let d = C.accountUuid,
          l = t !== void 0 && t.toLowerCase() !== d;
        if (l && !p)
          (logEvent("tengu_chrome_bridge_account_mismatch", {
            has_env_token: Boolean(a.CLAUDE_CODE_OAUTH_TOKEN),
            persisted_from_config: Boolean(getGlobalConfig().oauthAccount?.accountUuid),
          }),
            m.warn(
              "The OAuth token in use resolves to a different claude.ai account than the persisted Claude Code login. Using the token-derived account for the browser bridge. If CLAUDE_CODE_OAUTH_TOKEN is set, unset it or re-mint it for this account, then /logout and /login.",
            ));
        return ((p = l), d);
      },
      getOAuthToken: async () => {
        await checkAndRefreshOAuthTokenIfNeeded({ credentials: u, storageV5: c }).catch(() => {});
        let t = getClaudeAIOAuthTokens()?.accessToken ?? "";
        if (t && !(await v(t))) return "";
        return t;
      },
      getWsOptions: () => {
        let t = getWebSocketTLSOptions(),
          s = getWebSocketProxyUrl(_);
        if (!t && !s) return;
        return { ...t, ...(s && { proxy: s }) };
      },
      ...(L() && { devUserId: "dev_user_local" }),
    },
    ...(O && { initialPermissionMode: O }),
    ...!1,
    trackEvent: (t, s) => {
      if (o && t === "chrome_bridge_connection_succeeded") {
        let l = s?.status;
        logChromeBridgeConnected(l === "paired" || l === "waiting" ? l : void 0);
      }
      let d = {};
      if (s)
        for (let [l, g] of Object.entries(s)) {
          let S = l === "status" ? "bridge_status" : l;
          if (typeof g === "boolean" || typeof g === "number") d[S] = g;
          else if (typeof g === "string" && U.has(S)) d[S] = g;
        }
      logEvent(t, d);
    },
  };
}
var B = 3000;
async function F(e) {
  let r = w();
  if (r) return r;
  await checkAndRefreshOAuthTokenIfNeeded(e).catch(() => {});
  let o = getClaudeAIOAuthTokens()?.accessToken;
  if (!o) return { denied: !1, unverified: "no_oauth_token", verified: null };
  return A(o, e);
}
function w() {
  if (a.CLAUDE_CODE_CHROME_MCP_ORG_DENIED)
    return { denied: !0, cause: "parent_org_policy" };
  if (getAPIProvider() !== "firstParty")
    return { denied: !1, unverified: "third_party_provider", verified: null };
  if (!isActualFirstPartyAnthropicBaseUrl() || fileSuffixForOauthConfig() === "-local-oauth")
    return { denied: !1, unverified: "custom_base_url", verified: null };
  return null;
}
async function A(e, { timeoutMs: r } = {}) {
  let o = w();
  if (o) return o;
  let c = await fetchPolicyLimitsForBearer(e, { timeoutMs: r });
  if (!c)
    return { denied: !1, unverified: "policy_unverified", verified: null };
  return isPolicyAllowedInResponse(c, "allow_claude_browser_extension")
    ? { denied: !1, unverified: null, verified: { bearer: e } }
    : { denied: !0, cause: "org_policy" };
}
function V(e) {
  let r = e?.bearer,
    o = new Set();
  return async (c) => {
    if (c === r) return !0;
    if (o.has(c)) return !1;
    let u = await A(c);
    if (u.denied)
      return (
        o.add(c),
        logForDebugging(`[Claude in Chrome] ${D} (bridge token withheld)`, { level: "warn" }),
        !1
      );
    if (u.verified) r = u.verified.bearer;
    else logForDebugging(`[Claude in Chrome] ${k(u.unverified)}`, { level: "warn" });
    return !0;
  };
}
var D = "Claude in Chrome is disabled by your organization policy.";
function k(e) {
  switch (e) {
    case "third_party_provider":
    case "custom_base_url":
      return "Organization Claude in Chrome policy not read: third-party provider or custom ANTHROPIC_BASE_URL. Continuing; the extension enforces the org setting.";
    case "no_oauth_token":
      return "Organization Claude in Chrome policy not read: no claude.ai sign-in. Continuing; the extension enforces the org setting.";
    case "policy_unverified":
      return "Couldn't read your organization's Claude in Chrome policy (network or server error). Continuing; the extension enforces the org setting.";
  }
}
async function runClaudeInChromeMcpServer(e) {
  return withFeatureTelemetry("chrome_mcp_server_start", async () => {
    let r = await loadFastPathPolicy(e);
    if (r)
      process.stderr.write(`${r}
`);
    initializeAnalyticsSink();
    let o = pinStorageV5(e),
      c = credentialsStoreFor(o);
    if (isHoverRestEnabled() && o !== void 0) {
      (initDefaultDebugLog({ storageV5: o }), watchGlobalConfigThroughStorage(o));
      let { primeFastPathCredentials: C } = await import("../认证-OAuth登录/primeFastPathCredentials.eb5w3wem.js");
      (await C(c), await seedInstallIDs(o));
    }
    configureGlobalAgents();
    let u = await F({ credentials: c, storageV5: o, timeoutMs: B });
    if (u.denied)
      (process.stderr.write(`${D}
`),
        logFeatureBad("chrome_mcp_server_start", u.cause),
        await shutdownFirstPartyEventLogging(),
        await shutdownDatadog(),
        process.exit(1));
    if (!u.verified)
      logForDebugging(`[Claude in Chrome] ${k(u.unverified)}`, { level: "warn" });
    let v = createChromeContext(void 0, {
        storageV5: o,
        credentials: c,
        bearerGate: V(u.verified),
      }),
      m = createClaudeForChromeMcpServer(v),
      I = new StdioServerTransport(),
      h = !1,
      _ = async () => {
        if (h) return;
        ((h = !0), await shutdownFirstPartyEventLogging(), await shutdownDatadog(), process.exit(0));
      };
    (process.stdin.on("end", () => void _()),
      process.stdin.on("error", () => void _()),
      logForDebugging("[Claude in Chrome] Starting MCP server"),
      await m.connect(I),
      logForDebugging("[Claude in Chrome] MCP server started"));
  });
}
class x {
  silly(e, ...r) {
    logForDebugging(format(e, ...r), { level: "debug" });
  }
  debug(e, ...r) {
    logForDebugging(format(e, ...r), { level: "debug" });
  }
  info(e, ...r) {
    logForDebugging(format(e, ...r), { level: "info" });
  }
  warn(e, ...r) {
    logForDebugging(format(e, ...r), { level: "warn" });
  }
  error(e, ...r) {
    logForDebugging(format(e, ...r), { level: "error" });
  }
}
export { createChromeContext, runClaudeInChromeMcpServer };
