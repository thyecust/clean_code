// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 207 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { qs } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { ki, wn, ul } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { In } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { i0, pA, Yt, Qi } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { jV, fY, vE, Uo } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Aa } from "../插件系统/chunk-7s6mt1vg.js";
import { CF } from "../../01-核心基础设施/共享小工具-未细化/chunk-t31b4117.js";
import { ys, di, dO } from "../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js";
import { V0 } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { Qg } from "../../01-核心基础设施/共享小工具-未细化/chunk-awxpn5er.js";
import { zat } from "../../01-核心基础设施/共享小工具-未细化/chunk-k4m00mjj.js";
import { sI } from "../../01-核心基础设施/共享小工具-未细化/chunk-g2fqhcwj.js";
import { TF } from "../../01-核心基础设施/共享小工具-未细化/chunk-jhs1bd0k.js";
import { Gr } from "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import { createInterface as S } from "readline";
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
  await V0({ hasDynamicMcpConfig: !1 });
  let {
      servers: a,
      pendingProjectServers: r,
      rejectedProjectServers: i,
    } = await vE({
      includePendingProjectServers: !0,
      includeRejectedProjectServers: !0,
      storageV5: o,
      credentials: u,
    }),
    p = a[t];
  if (!p) {
    await wn(e, "not_found");
    let s = Object.keys(a).filter((n) => !r.has(n) && !i.has(n));
    return di(zat(t, s, r.size > 0));
  }
  if (i.has(t))
    return (
      await wn(e, "rejected"),
      di(
        `"${t}" is from .mcp.json and was rejected. Run \`claude mcp reset-project-choices\` to review it again.`,
      )
    );
  if (r.has(t))
    return (
      await wn(e, "pending_approval"),
      di(
        `"${t}" is from .mcp.json and awaiting approval. Run \`claude\` in this directory to review it first.`,
      )
    );
  if (p.configError)
    return (
      await wn(e, "config_error"),
      di(`"${t}" has a configuration problem: ${p.configError}`)
    );
  return p;
}
async function C(t, e) {
  if (i0(t)) return "static_auth_header";
  if (pA(t.url) && In()) {
    let o;
    if (M() && e !== void 0) o = (await Qi(e))?.accessToken;
    else o = Yt()?.accessToken;
    if (o) return "first_party_auth";
    if (await TF(e)) return "first_party_design_auth";
  }
  return null;
}
function w(t, e) {
  return `${t ? "If the browser didn't open, visit:" : "Visit this URL to authorize:"}
  ${Qg(e, void 0, { assumeSupport: !0 })}

`;
}
async function q(t, e, o, u) {
  await qs("tengu_mcp_login", {});
  let a = await v(t, "cli_mcp_login", o, u),
    r = sI(t, a);
  switch (r.kind) {
    case "claudeai-proxy": {
      let i = fY(r.config);
      if (!i)
        return (
          await wn("cli_mcp_login", "claudeai_no_auth_url"),
          di(
            `Couldn't build the claude.ai authorization link for "${t}". Make sure you're signed in (\`claude login\`).`,
          )
        );
      if ((await qs("tengu_claudeai_mcp_auth_started", {}), e.browser))
        (process.stdout.write(`Opening browser to authorize "${t}"\u2026
`),
          await Gr(i));
      return (
        process.stdout.write(
          w(e.browser, i) +
            `Once authorized on claude.ai, the connector will be available the next time you start Claude Code.
`,
        ),
        await m().removeMcpAuthCacheEntry(t, o),
        await ki("cli_mcp_login"),
        dO()
      );
    }
    case "unsupported-transport":
      return (
        await wn("cli_mcp_login", "unsupported_transport"),
        di(
          `"${t}" doesn't support OAuth login \u2014 it's only available for HTTP and SSE servers.`,
        )
      );
    case "anthropic-hosted":
      return (
        await wn("cli_mcp_login", "anthropic_hosted_blocked"),
        di(r.message)
      );
    case "oauth": {
      let i = await C(r.config, u);
      if (i === "static_auth_header")
        return (
          await wn("cli_mcp_login", "static_auth_header"),
          di(
            `"${t}" authenticates with the \`Authorization\` header in its configuration, so there's no separate login. Update that header to change its credentials.`,
          )
        );
      if (i === "first_party_auth")
        return (
          await wn("cli_mcp_login", "first_party_auth"),
          di(
            `"${t}" authenticates automatically with your Claude login. Run \`claude login\` if you're not signed in.`,
          )
        );
      if (i === "first_party_design_auth")
        return (
          await wn("cli_mcp_login", "first_party_design_auth"),
          di(
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
                  (CF(),
                    (n = S({
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
              await wn("cli_mcp_login", "no_tty_stdin"),
              di(
                `Couldn't complete authentication for "${t}": stdin isn't a terminal, so authentication can't be completed here. ` +
                  "Re-run in an interactive terminal \u2014 e.g. `ssh -t` \u2014 and paste the redirect URL when prompted.",
              )
            );
          return (await ul("cli_mcp_login", "cancelled"), ys(130));
        }
        return (
          await wn("cli_mcp_login", "oauth_flow_threw"),
          di(`Couldn't complete authentication for "${t}": ${l(c)}`)
        );
      } finally {
        if ((clearInterval(A), n))
          (n.close(),
            process.stdout.write(`
`));
      }
      return (
        await m().removeMcpAuthCacheEntry(t, o),
        await ki("cli_mcp_login"),
        dO(
          Uo(t)
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
async function G(t, e, o) {
  await qs("tengu_mcp_logout", {});
  let u = await v(t, "cli_mcp_logout", e, o),
    a = sI(t, u);
  switch (a.kind) {
    case "claudeai-proxy":
      return (
        await ul("cli_mcp_logout", "claudeai_proxy"),
        dO(
          `"${t}" is a claude.ai connector \u2014 its credentials live on claude.ai, not this machine. ` +
            `Disconnect it at ${Qg(jV())}`,
        )
      );
    case "unsupported-transport":
      return (
        await wn("cli_mcp_logout", "unsupported_transport"),
        di(
          `"${t}" doesn't use OAuth \u2014 there are no stored credentials to clear.`,
        )
      );
    case "anthropic-hosted":
      return (
        await d().revokeServerTokens(t, a.config),
        await ul("cli_mcp_logout", "anthropic_hosted"),
        dO(`Cleared local credentials for "${t}". ${a.message}`)
      );
    case "oauth": {
      (await d().revokeServerTokens(t, a.config), await ki("cli_mcp_logout"));
      let r = (await C(a.config, o)) === null ? Aa("mcp login", t) : null,
        i = r ? ` Run \`${r}\` to authenticate again.` : "";
      return dO(`Signed out of "${t}".${i}`);
    }
    default: {
      let r = a;
    }
  }
}
export { q as mcpLoginHandler, G as mcpLogoutHandler };
