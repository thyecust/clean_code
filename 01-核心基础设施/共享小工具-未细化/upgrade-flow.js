// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ns } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logError } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { fetchOAuthProfileWithToken, getClaudeAIOAuthTokens, isClaudeAISubscriber, getOauthAccountInfo } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { withAutoResumeRecheck } from "../../02-功能模块/状态管理-AppState/状态管理-AppState.wyzjbwp5.js";
import { runPostLoginHooks, loginCompletion, Login } from "../../02-功能模块/远程控制-Bridge/login-flow.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { tryOpenUrlInBrowser } from "../核心工具-路径与平台/open-external-url.js";
function m(t) {
  return `https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${t}`;
}
async function callUpgradeCommand(t, r) {
  return callUpgradeFromSurface(t, r, "upgrade_command");
}
async function callUpgradeFromSurface(t, r, l) {
  let u = withAutoResumeRecheck(t),
    c = m(l);
  try {
    if (isClaudeAISubscriber()) {
      let o = getClaudeAIOAuthTokens(),
        n = !1;
      if (o?.subscriptionType && o?.rateLimitTier)
        n =
          o.subscriptionType === "max" &&
          o.rateLimitTier === "default_claude_max_20x";
      else if (o?.accessToken) {
        let i = await fetchOAuthProfileWithToken(o.accessToken);
        n =
          i?.organization?.organization_type === "claude_max" &&
          i?.organization?.rate_limit_tier === "default_claude_max_20x";
      }
      if (n)
        return (
          setTimeout(
            u,
            0,
            "You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account.",
          ),
          null
        );
    }
    await tryOpenUrlInBrowser(c);
    let a = getOauthAccountInfo(),
      s = a && {
        accountUuid: a.accountUuid,
        organizationUuid: a.organizationUuid,
      },
      p = ns();
    return e(Login, {
      startingMessage:
        "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",
      onDone: async (o, n, i) => {
        let d = await runPostLoginHooks(r, o, {
          setAppState: i,
          previousAccount: s,
          previousGatewayAuth: p,
        });
        u(...loginCompletion(r, o, d));
      },
    });
  } catch (a) {
    (logError(a),
      setTimeout(
        u,
        0,
        `Failed to open browser. Please visit ${c} to upgrade.`,
      ));
  }
  return null;
}
export { callUpgradeCommand, callUpgradeFromSurface };
