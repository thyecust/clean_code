// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 207 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { logEventAsync } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOkAsync, logFeatureBadAsync, logFeatureSadAsync } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { isFirstPartyProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { configHasAuthorizationHeader, isFirstPartyDesignUrl, getClaudeAIOAuthTokens, getClaudeAIOAuthTokensAsync } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getClaudeAiConnectorsUrl, buildClaudeAiMcpAuthUrl, getAllMcpConfigs, isMcpServerDisabled } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { buildCliCommand } from "../插件系统/plugin-system-core.js";
import { stopCapturingEarlyInput } from "../../01-核心基础设施/核心工具-未归类/early-input-capture.js";
import { exitAfterAnalyticsFlush, cliErrorAfterAnalyticsFlush, cliOkAfterAnalyticsFlush } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-4f55jpqh.js";
import { awaitMcpPolicyColdStart } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { formatHyperlink } from "../../01-核心基础设施/核心工具-字符串与文本/format-hyperlink.js";
import { formatMcpServerNotFoundMessageWithPendingApproval } from "./mcp-server-not-found-message.js";
import { classifyMcpServerAuth } from "./mcp-hosted-oauth-gate.js";
import { hasFirstPartyDesignAuth } from "../设计同步/chunk-jhs1bd0k.js";
import { tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import { createInterface } from "readline";
function y() {
  return import.meta.require("./mcpClientModule.4cyej0np.js");
}
function d() {
  return y().mcpAuthModule();
}
function m() {
  return y().mcpClientModule();
}
async function v(t, e, o, u) {
  await awaitMcpPolicyColdStart({ hasDynamicMcpConfig: !1 });
  let {
      servers: a,
      pendingProjectServers: r,
      rejectedProjectServers: i,
    } = await getAllMcpConfigs({
      includePendingProjectServers: !0,
      includeRejectedProjectServers: !0,
      storageV5: o,
      credentials: u,
    }),
    p = a[t];
  if (!p) {
    await logFeatureBadAsync(e, "not_found");
    let s = Object.keys(a).filter((n) => !r.has(n) && !i.has(n));
    return cliErrorAfterAnalyticsFlush(formatMcpServerNotFoundMessageWithPendingApproval(t, s, r.size > 0));
  }
  if (i.has(t))
    return (
      await logFeatureBadAsync(e, "rejected"),
      cliErrorAfterAnalyticsFlush(
        `"${t}" is from .mcp.json and was rejected. Run \`claude mcp reset-project-choices\` to review it again.`,
      )
    );
  if (r.has(t))
    return (
      await logFeatureBadAsync(e, "pending_approval"),
      cliErrorAfterAnalyticsFlush(
        `"${t}" is from .mcp.json and awaiting approval. Run \`claude\` in this directory to review it first.`,
      )
    );
  if (p.configError)
    return (
      await logFeatureBadAsync(e, "config_error"),
      cliErrorAfterAnalyticsFlush(`"${t}" has a configuration problem: ${p.configError}`)
    );
  return p;
}
async function C(t, e) {
  if (configHasAuthorizationHeader(t)) return "static_auth_header";
  if (isFirstPartyDesignUrl(t.url) && isFirstPartyProvider()) {
    let o;
    if (isHoverRestEnabled() && e !== void 0) o = (await getClaudeAIOAuthTokensAsync(e))?.accessToken;
    else o = getClaudeAIOAuthTokens()?.accessToken;
    if (o) return "first_party_auth";
    if (await hasFirstPartyDesignAuth(e)) return "first_party_design_auth";
  }
  return null;
}
function w(t, e) {
  return `${t ? "If the browser didn't open, visit:" : "Visit this URL to authorize:"}
  ${formatHyperlink(e, void 0, { assumeSupport: !0 })}

`;
}
async function mcpLoginHandler(t, e, o, u) {
  await logEventAsync("tengu_mcp_login", {});
  let a = await v(t, "cli_mcp_login", o, u),
    r = classifyMcpServerAuth(t, a);
  switch (r.kind) {
    case "claudeai-proxy": {
      let i = buildClaudeAiMcpAuthUrl(r.config);
      if (!i)
        return (
          await logFeatureBadAsync("cli_mcp_login", "claudeai_no_auth_url"),
          cliErrorAfterAnalyticsFlush(
            `Couldn't build the claude.ai authorization link for "${t}". Make sure you're signed in (\`claude login\`).`,
          )
        );
      if ((await logEventAsync("tengu_claudeai_mcp_auth_started", {}), e.browser))
        (process.stdout.write(`Opening browser to authorize "${t}"\u2026
`),
          await tryOpenUrlInBrowser(i));
      return (
        process.stdout.write(
          w(e.browser, i) +
            `Once authorized on claude.ai, the connector will be available the next time you start Claude Code.
`,
        ),
        await m().removeMcpAuthCacheEntry(t, o),
        await logFeatureOkAsync("cli_mcp_login"),
        cliOkAfterAnalyticsFlush()
      );
    }
    case "unsupported-transport":
      return (
        await logFeatureBadAsync("cli_mcp_login", "unsupported_transport"),
        cliErrorAfterAnalyticsFlush(
          `"${t}" doesn't support OAuth login \u2014 it's only available for HTTP and SSE servers.`,
        )
      );
    case "anthropic-hosted":
      return (
        await logFeatureBadAsync("cli_mcp_login", "anthropic_hosted_blocked"),
        cliErrorAfterAnalyticsFlush(r.message)
      );
    case "oauth": {
      let i = await C(r.config, u);
      if (i === "static_auth_header")
        return (
          await logFeatureBadAsync("cli_mcp_login", "static_auth_header"),
          cliErrorAfterAnalyticsFlush(
            `"${t}" authenticates with the \`Authorization\` header in its configuration, so there's no separate login. Update that header to change its credentials.`,
          )
        );
      if (i === "first_party_auth")
        return (
          await logFeatureBadAsync("cli_mcp_login", "first_party_auth"),
          cliErrorAfterAnalyticsFlush(
            `"${t}" authenticates automatically with your Claude login. Run \`claude login\` if you're not signed in.`,
          )
        );
      if (i === "first_party_design_auth")
        return (
          await logFeatureBadAsync("cli_mcp_login", "first_party_design_auth"),
          cliErrorAfterAnalyticsFlush(
            `"${t}" authenticates automatically with your stored /design-login credential. Run /design-login from an interactive session to re-authorize it.`,
          )
        );
      process.stdout.write(`Starting authentication for "${t}"\u2026
`);
      let p = "Or paste the redirect URL here: ",
        s = new AbortController(),
        n,
        g = !1,
        A = setInterval(() => {}, 60000),
        _ = new Promise((c, f) => {
          s.signal.addEventListener(
            "abort",
            () => f(new (d().AuthenticationCancelledError)()),
            { once: !0 },
          );
        });
      _.catch(() => {});
      try {
        (await d().revokeServerTokens(t, r.config, { preserveStepUpState: !0 }),
          await Promise.race([
            _,
            d().performMCPOAuthFlow(
              t,
              r.config,
              (c) => {
                if (
                  (process.stdout.write(
                    w(e.browser, c) +
                      `Waiting for authorization\u2026 (^C to cancel)
`,
                  ),
                  n)
                )
                  n.prompt();
              },
              s.signal,
              {
                skipBrowserOpen: !e.browser,
                onWaitingForCallback: (c) => {
                  if (!process.stdin.isTTY) {
                    ((g = !0), s.abort());
                    return;
                  }
                  if (!process.stdout.isTTY) return;
                  (stopCapturingEarlyInput(),
                    (n = createInterface({
                      input: process.stdin,
                      output: process.stdout,
                      prompt: p,
                    })),
                    n.on("SIGINT", () => s.abort()),
                    n.on("close", () => s.abort()),
                    n.on("line", (f) => {
                      let h = f.trim();
                      if (h && c(h)) return;
                      if (h)
                        process.stdout
                          .write(`That doesn't look like a redirect URL \u2014 paste the full address from your browser's address bar.
`);
                      n?.prompt();
                    }));
                },
              },
            ),
          ]));
      } catch (c) {
        if (c instanceof d().AuthenticationCancelledError) {
          if (g)
            return (
              await logFeatureBadAsync("cli_mcp_login", "no_tty_stdin"),
              cliErrorAfterAnalyticsFlush(
                `Couldn't complete authentication for "${t}": stdin isn't a terminal, so authentication can't be completed here. ` +
                  "Re-run in an interactive terminal \u2014 e.g. `ssh -t` \u2014 and paste the redirect URL when prompted.",
              )
            );
          return (await logFeatureSadAsync("cli_mcp_login", "cancelled"), exitAfterAnalyticsFlush(130));
        }
        return (
          await logFeatureBadAsync("cli_mcp_login", "oauth_flow_threw"),
          cliErrorAfterAnalyticsFlush(`Couldn't complete authentication for "${t}": ${l(c)}`)
        );
      } finally {
        if ((clearInterval(A), n))
          (n.close(),
            process.stdout.write(`
`));
      }
      return (
        await m().removeMcpAuthCacheEntry(t, o),
        await logFeatureOkAsync("cli_mcp_login"),
        cliOkAfterAnalyticsFlush(
          isMcpServerDisabled(t)
            ? `Authenticated with "${t}", but it's currently disabled. Enable it in /mcp for its tools to load.`
            : `Authenticated with "${t}". Its tools are now available in Claude Code.`,
        )
      );
    }
    default: {
      let i = r;
    }
  }
}
async function mcpLogoutHandler(t, e, o) {
  await logEventAsync("tengu_mcp_logout", {});
  let u = await v(t, "cli_mcp_logout", e, o),
    a = classifyMcpServerAuth(t, u);
  switch (a.kind) {
    case "claudeai-proxy":
      return (
        await logFeatureSadAsync("cli_mcp_logout", "claudeai_proxy"),
        cliOkAfterAnalyticsFlush(
          `"${t}" is a claude.ai connector \u2014 its credentials live on claude.ai, not this machine. ` +
            `Disconnect it at ${formatHyperlink(getClaudeAiConnectorsUrl())}`,
        )
      );
    case "unsupported-transport":
      return (
        await logFeatureBadAsync("cli_mcp_logout", "unsupported_transport"),
        cliErrorAfterAnalyticsFlush(
          `"${t}" doesn't use OAuth \u2014 there are no stored credentials to clear.`,
        )
      );
    case "anthropic-hosted":
      return (
        await d().revokeServerTokens(t, a.config),
        await logFeatureSadAsync("cli_mcp_logout", "anthropic_hosted"),
        cliOkAfterAnalyticsFlush(`Cleared local credentials for "${t}". ${a.message}`)
      );
    case "oauth": {
      (await d().revokeServerTokens(t, a.config), await logFeatureOkAsync("cli_mcp_logout"));
      let r = (await C(a.config, o)) === null ? buildCliCommand("mcp login", t) : null,
        i = r ? ` Run \`${r}\` to authenticate again.` : "";
      return cliOkAfterAnalyticsFlush(`Signed out of "${t}".${i}`);
    }
    default: {
      let r = a;
    }
  }
}
export { mcpLoginHandler, mcpLogoutHandler };
