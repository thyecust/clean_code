// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ns } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isBgSession, getOauthAccountInfo, getSubscriptionType } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { withAutoResumeRecheck } from "../../02-功能模块/状态管理-AppState/状态管理-AppState.wyzjbwp5.js";
import { runPostLoginHooks, loginCompletion, Login } from "../../02-功能模块/远程控制-Bridge/login-flow.js";
import { UsageCreditsAdminRequestDialog } from "../../03-入口与运行时/会话UI-REPL/会话UI-REPL.qs63rzfp.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { USAGE_CREDITS_ADMIN_REQUEST_NOTICE, canBuyUsageCreditsInApp, resolveExtraUsageOutcome } from "../../02-功能模块/成本-Token统计/usage-credits-flow.js";
var s = import.meta.require("../../02-功能模块/用量额度-限额/ExtraUsageDialog.fybj08bs.js").ExtraUsageDialog;
async function startExtraUsageFlow(u, n) {
  let t = withAutoResumeRecheck(u);
  if (s && canBuyUsageCreditsInApp()) return e(s, { onDone: t });
  let o = await resolveExtraUsageOutcome({ openInBrowser: !0 }, n.credentials);
  if (o.type === "message") return (t(o.value), null);
  if (o.type === "confirm-admin-request") {
    if (isBgSession()) return (t(USAGE_CREDITS_ADMIN_REQUEST_NOTICE), null);
    return e(UsageCreditsAdminRequestDialog, {
      extraUsage: o.extraUsage,
      wouldTakeAnswer: () => !0,
      onDone: t,
    });
  }
  let i = getSubscriptionType();
  if (i === "team" || i === "enterprise")
    return (
      t(
        o.opened
          ? `Opened ${o.url} in your browser to manage usage credits for your organization.`
          : `Visit ${o.url} to manage usage credits for your organization.`,
      ),
      null
    );
  if (!o.opened) return (t(`Visit ${o.url} to manage usage credits.`), null);
  let r = getOauthAccountInfo(),
    m = r && {
      accountUuid: r.accountUuid,
      organizationUuid: r.organizationUuid,
    },
    l = ns();
  return e(Login, {
    startingMessage:
      "Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",
    onDone: async (a, d, c) => {
      let g = await runPostLoginHooks(n, a, {
        setAppState: c,
        previousAccount: m,
        previousGatewayAuth: l,
      });
      t(...loginCompletion(n, a, g));
    },
  });
}
export { startExtraUsageFlow };
