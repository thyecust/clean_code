// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ns } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isBgSession, getOauthAccountInfo, getSubscriptionType } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { R4 } from "../../02-功能模块/AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import { N8, MHe, Kz } from "../../02-功能模块/Bridge-RemoteControl/chunk-3b6ct3yp.js";
import { tst } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { iSe, U9e, aSe } from "../../02-功能模块/成本-Token统计/chunk-f1ehes3v.js";
var s = import.meta.require("../../02-功能模块/用量额度-限额/ExtraUsageDialog.fybj08bs.js").ExtraUsageDialog;
async function startExtraUsageFlow(u, n) {
  let t = R4(u);
  if (s && U9e()) return e(s, { onDone: t });
  let o = await aSe({ openInBrowser: !0 }, n.credentials);
  if (o.type === "message") return (t(o.value), null);
  if (o.type === "confirm-admin-request") {
    if (isBgSession()) return (t(iSe), null);
    return e(tst, {
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
  return e(Kz, {
    startingMessage:
      "Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",
    onDone: async (a, d, c) => {
      let g = await N8(n, a, {
        setAppState: c,
        previousAccount: m,
        previousGatewayAuth: l,
      });
      t(...MHe(n, a, g));
    },
  });
}
export { startExtraUsageFlow };
