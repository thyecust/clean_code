// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 76 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { saveGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
var o = "https://slack.com/marketplace/A08SF47R6P4-claude";
async function p(e, a) {
  if (
    (logEvent("tengu_install_slack_app_clicked", {}),
    await saveGlobalConfig(
      (t) => ({
        ...t,
        slackAppInstallCount: (t.slackAppInstallCount ?? 0) + 1,
      }),
      a.storageV5,
    ),
    await tryOpenUrlInBrowser(o))
  )
    return {
      type: "text",
      value: "Opening Slack app installation page in browser\u2026",
    };
  else return { type: "text", value: `Couldn't open browser. Visit: ${o}` };
}
export { p as call };
