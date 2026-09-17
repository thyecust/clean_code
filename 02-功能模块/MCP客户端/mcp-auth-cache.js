// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { getFileStorage } from "../../01-核心基础设施/共享小工具-未细化/file-storage.js";
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { ke, Nn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { We, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { jt, wQ } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logMCPError, logMCPDebug } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { rc } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import {
  sanitizeDisplayTextWithoutRedaction,
  sanitizeDisplayTextWithRedaction,
  sanitizeDisplayText,
  AUTHENTICATE_TOOL_NAME,
  COMPLETE_AUTHENTICATION_TOOL_NAME,
  setDiscoveryCacheKillSwitch,
  hasDiscoveryCacheKillSwitch,
  isMcpDialBlockedByPolicy,
  mcpDialBlockCause,
  isMcpServerDisabled,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { tfe, IH } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { classifyMcpServerAuth } from "../../01-核心基础设施/共享小工具-未细化/mcp-hosted-oauth-gate.js";
import { formatPolicyBlockedMessage, formatProjectApprovalMessage } from "./mcp-server-state-messages.js";
import { ir } from "./chunk-g4gdwpa0.js";
import { defineDialog } from "../对话框-确认UI/对话框-确认UI.4ggnfbtb.js";
import { s, c, qd } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var MCP_URL_ELICITATION_DIALOG = defineDialog({
  kind: "mcp_url_elicitation",
  payload: createLazyValue(() =>
    qd(
      (t) =>
        typeof t === "object" &&
        t !== null &&
        "serverName" in t &&
        "params" in t,
    ),
  ),
  result: createLazyValue(() => qd((t) => typeof t === "object" && t !== null)),
  default: { action: "cancel" },
});
import { join as L } from "path";
function getMcpNeedsAuthCachePath() {
  return L(getClaudeConfigDir(), "mcp-needs-auth-cache.json");
}
function getMcpNeedsAuthCacheStateKey() {
  return STORAGE_KEYS.state("mcp-needs-auth-cache");
}
function readMcpNeedsAuthCache(t) {
  let e = jt();
  if (!e.authCacheRead)
    e.authCacheRead =
      isHoverRestEnabled() && t !== void 0
        ? U(t)
        : getFileStorage()
            .read(getMcpNeedsAuthCachePath())
            .then((r) => z(r))
            .catch(() => ({}));
  return e.authCacheRead;
}
async function U(t) {
  try {
    let e = await t.read([getMcpNeedsAuthCacheStateKey()]);
    if (!e.ok) return {};
    let r = e.value.items[0];
    if (!r.found) return {};
    return z(Buffer.from(r.value).toString("utf8"));
  } catch {
    return {};
  }
}
function invalidateMcpNeedsAuthCache() {
  jt().authCacheRead = null;
}
function clearMcpNeedsAuthCache(t) {
  if (((jt().authCacheRead = null), isHoverRestEnabled() && t !== void 0)) {
    t.delete(getMcpNeedsAuthCacheStateKey())
      .then((e) => {
        if (!e.ok)
          n(`mcp needs-auth cache delete failed: ${We(e.error)}`, {
            level: "error",
          });
      })
      .catch(() => {});
    return;
  }
  getFileStorage()
    .delete(getMcpNeedsAuthCachePath())
    .catch(() => {});
}
function T() {
  return import.meta.require("./mcpClientModule.4cyej0np.js");
}
function b() {
  return T().mcpAuthModule();
}
function w() {
  return T().mcpClientModule();
}
var D = createLazyValue(() => c({})),
  v = createLazyValue(() =>
    c({
      callback_url: s().describe(
        "The full callback URL from the browser address bar after authorizing, e.g. http://localhost:<port>/callback?code=...&state=...",
      ),
    }),
  );
function I() {
  return a.isSSH() || a.CLAUDE_CODE_REMOTE || Nn();
}
function x(t) {
  try {
    let e = new URL(t).searchParams.get("redirect_uri");
    if (e) return e;
  } catch {}
  return "http://localhost:<port>/callback";
}
function createMcpAuthStubTools(t, e) {
  if (ke()) return [];
  return [j(t, e), B(t, e)];
}
function k(t) {
  return (t !== void 0 ? IH(t) : tfe())
    ? "callable inside the REPL environment (this surface routes MCP tools through the REPL rather than advertising them as top-level tools)"
    : "available automatically";
}
function O(t) {
  return IH(t)
    ? "The server's tools are now callable inside the REPL environment (this surface routes MCP tools through the REPL rather than advertising them as top-level tools)."
    : "The server's tools should now be available.";
}
function j(t, e) {
  let r = e.type ?? "stdio",
    g = wQ(e),
    p = g ? `${r} at ${sanitizeDisplayTextWithRedaction(g, 256)}` : r,
    f =
      `The "${sanitizeDisplayTextWithoutRedaction(t)}" MCP server (${p}) is installed but requires authentication. ` +
      "Call this tool to start the OAuth flow \u2014 you'll receive an authorization URL to share with the user. " +
      `Once the user completes authorization in their browser, the server's real tools will become ${k()}.`;
  return {
    name: rc(t, AUTHENTICATE_TOOL_NAME),
    isMcp: !0,
    mcpInfo: { serverName: t, toolName: AUTHENTICATE_TOOL_NAME, serverType: r, isAuthStub: !0 },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    toAutoClassifierInput: () => t,
    userFacingName: () => `${t} - authenticate (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Authenticate ${t} MCP server`,
    async description() {
      return f;
    },
    async prompt() {
      return f;
    },
    get inputSchema() {
      return D();
    },
    async checkPermissions(h) {
      return { behavior: "allow", updatedInput: h };
    },
    async call(h, i) {
      let y = mcpDialBlockCause(t, e);
      if (y === "managed-policy")
        return {
          data: {
            status: "error",
            message: `${formatPolicyBlockedMessage(t)}. Only an organization admin can change this; do not retry or ask the user to enable it.`,
          },
        };
      if (isMcpServerDisabled(t))
        return {
          data: {
            status: "error",
            message: `MCP server ${sanitizeDisplayTextWithoutRedaction(t)} is disabled. Ask the user to enable it in /mcp before authenticating.`,
          },
        };
      if (y === "project-approval")
        return {
          data: {
            status: "error",
            message: `${formatProjectApprovalMessage(t)}. Ask the user to approve it; do not retry until they have.`,
          },
        };
      let d = classifyMcpServerAuth(t, e);
      if (d.kind === "claudeai-proxy")
        return {
          data: {
            status: "unsupported",
            message: `This is a claude.ai MCP connector. Ask the user to run /mcp and select "${sanitizeDisplayTextWithoutRedaction(t)}" to authenticate.`,
          },
        };
      if (d.kind === "unsupported-transport")
        return {
          data: {
            status: "unsupported",
            message: `Server "${sanitizeDisplayTextWithoutRedaction(t)}" uses ${r} transport which does not support OAuth from this tool. Ask the user to run /mcp and authenticate manually.`,
          },
        };
      if (d.kind === "anthropic-hosted")
        return {
          data: { status: "unsupported", message: sanitizeDisplayText(d.message, 1024, "none") },
        };
      let u,
        _ = new Promise((o) => {
          u = o;
        }),
        R = b().performMCPOAuthFlow(t, d.config, (o) => u?.(o), void 0, {
          skipBrowserOpen: !0,
        });
      b().setActiveOAuthPromise(t, R);
      let P = ir();
      R.then(async () => {
        if (ir() !== P) {
          logMCPDebug(
            t,
            "OAuth completed after an identity change; discarding without reconnecting",
          );
          return;
        }
        if ((clearMcpNeedsAuthCache(i.storageV5), isMcpServerDisabled(t) || isMcpDialBlockedByPolicy(t, e))) {
          logMCPDebug(
            t,
            "OAuth completed but the server is now disabled or policy-blocked; not reconnecting",
          );
          return;
        }
        let o = await w().reconnectMcpServerImpl(
          t,
          e,
          i.storageV5,
          i.credentials,
        );
        if (ir() !== P) {
          logMCPDebug(
            t,
            "OAuth completed after an identity change; discarding the stale reconnect",
          );
          return;
        }
        let A = i.getMcp().clients.some((C) => C.name === t),
          S = i.session.mcpSessionWiring.connections();
        if (!A || S === void 0 || isMcpServerDisabled(t) || isMcpDialBlockedByPolicy(t, e)) {
          (logMCPDebug(
            t,
            "OAuth completed after the server was removed, disabled, or policy-blocked; discarding the fresh connection",
          ),
            w()
              .clearServerCache(t, e)
              .catch((C) => logMCPDebug(t, `Orphan-connection cleanup failed: ${l(C)}`)));
          return;
        }
        (S.adoptServer(t, o, { appendIfAbsent: !1 }),
          logMCPDebug(t, `OAuth complete, reconnected with ${o.tools.length} tool(s)`));
      }).catch((o) => {
        logMCPError(t, `OAuth flow failed after tool-triggered start: ${l(o)}`);
      });
      try {
        let o = await Promise.race([_, R.then(() => null)]);
        if (o) {
          let A = rc(t, COMPLETE_AUTHENTICATION_TOOL_NAME),
            S = x(o),
            C = I()
              ? `

This session is remote, so after authorizing the browser will try to load \`${S}?code=...\` and show a connection error \u2014 that's expected. Ask the user to copy the full URL from the browser's address bar and paste it into chat, then call \`${A}\` with that URL as \`callback_url\`.`
              : `

If the browser shows a connection error on the redirect page, ask the user to paste the full URL from the address bar and call \`${A}\` with it.`;
          return {
            data: {
              status: "auth_url",
              authUrl: o,
              message: `Ask the user to open this URL in their browser to authorize the ${sanitizeDisplayTextWithoutRedaction(t)} MCP server:

${o}

Once they complete the flow, the server's tools will become ${k(i.options.tools)}.${C}`,
            },
          };
        }
        return {
          data: {
            status: "auth_url",
            message: `Authentication completed silently for ${sanitizeDisplayTextWithoutRedaction(t)}. ${O(i.options.tools)}`,
          },
        };
      } catch (o) {
        return {
          data: {
            status: "error",
            message: `Failed to start OAuth flow for ${sanitizeDisplayTextWithoutRedaction(t)}: ${sanitizeDisplayTextWithRedaction(l(o), 200)}. Ask the user to run /mcp and authenticate manually.`,
          },
        };
      }
    },
    mapToolResultToToolResultBlockParam(h, i) {
      return { tool_use_id: i, type: "tool_result", content: h.message };
    },
  };
}
function B(t, e) {
  let r = rc(t, AUTHENTICATE_TOOL_NAME),
    g =
      `Complete an in-progress OAuth flow for the "${sanitizeDisplayTextWithoutRedaction(t)}" MCP server by submitting the callback URL. Call \`${r}\` first to start the flow and get the authorization URL. ` +
      "After the user authorizes in their browser, the browser is redirected to a `http://localhost:<port>/callback?code=...&state=...` URL \u2014 " +
      "on remote sessions that page fails to load, but the URL in the address bar is still valid. Pass that full URL here as `callback_url`.";
  return {
    name: rc(t, COMPLETE_AUTHENTICATION_TOOL_NAME),
    isMcp: !0,
    mcpInfo: {
      serverName: t,
      toolName: COMPLETE_AUTHENTICATION_TOOL_NAME,
      serverType: e.type ?? "stdio",
      isAuthStub: !0,
    },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    toAutoClassifierInput: () => t,
    userFacingName: () => `${t} - complete authentication (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Complete authentication for ${t} MCP server`,
    async description() {
      return g;
    },
    async prompt() {
      return g;
    },
    get inputSchema() {
      return v();
    },
    async checkPermissions(p) {
      return { behavior: "allow", updatedInput: p };
    },
    async call(p, f) {
      let { callback_url: h } = p,
        i = b().getOAuthCallbackSubmitter(t);
      if (!i)
        return {
          data: {
            status: "error",
            message: `No OAuth flow is in progress for ${sanitizeDisplayTextWithoutRedaction(t)}. Call \`${r}\` first, then retry with the callback URL.`,
          },
        };
      let y = !1;
      try {
        let u = new URL(h);
        y = u.searchParams.has("code") || u.searchParams.has("error");
      } catch {}
      if (!y)
        return {
          data: {
            status: "error",
            message:
              "Invalid callback URL: missing authorization code. Ask the user to paste the full redirect URL from their browser's address bar, including the `?code=...&state=...` query string.",
          },
        };
      let d = b().getActiveOAuthPromise(t);
      i(h);
      try {
        return (
          await d,
          {
            data: {
              status: "success",
              message: `Authentication complete for ${sanitizeDisplayTextWithoutRedaction(t)}. ${O(f.options.tools)}`,
            },
          }
        );
      } catch (u) {
        if (u instanceof b().AuthenticationCancelledError)
          return {
            data: {
              status: "error",
              message: `The OAuth flow for ${sanitizeDisplayTextWithoutRedaction(t)} was cancelled (a newer attempt may have superseded it). Call \`${r}\` again to restart.`,
            },
          };
        return {
          data: {
            status: "error",
            message: `Authentication failed for ${sanitizeDisplayTextWithoutRedaction(t)}: ${sanitizeDisplayTextWithRedaction(l(u), 200)}`,
          },
        };
      }
    },
    mapToolResultToToolResultBlockParam(p, f) {
      return { tool_use_id: f, type: "tool_result", content: p.message };
    },
  };
}
function initMcpDiscoveryCacheKillSwitch() {
  if (hasDiscoveryCacheKillSwitch()) return;
  let t = !1,
    e;
  setDiscoveryCacheKillSwitch(() => {
    if (!t)
      ((t = !0), (e = getFeatureValue_CACHED_MAY_BE_STALE("tengu_mcp_discovery_cache_enable", null) ?? void 0));
    return e;
  });
}
export { MCP_URL_ELICITATION_DIALOG, getMcpNeedsAuthCachePath, getMcpNeedsAuthCacheStateKey, readMcpNeedsAuthCache, invalidateMcpNeedsAuthCache, clearMcpNeedsAuthCache, createMcpAuthStubTools, initMcpDiscoveryCacheKillSwitch };
