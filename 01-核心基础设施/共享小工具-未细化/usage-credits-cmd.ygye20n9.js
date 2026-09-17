// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 79 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { USAGE_CREDITS_ADMIN_REQUEST_NOTICE, resolveExtraUsageOutcome } from "../../02-功能模块/成本-Token统计/usage-credits-flow.js";
async function a(r, t) {
  let e = await resolveExtraUsageOutcome({ openInBrowser: ke() }, t.credentials);
  if (e.type === "message") return { type: "text", value: e.value };
  if (e.type === "confirm-admin-request") return { type: "text", value: USAGE_CREDITS_ADMIN_REQUEST_NOTICE };
  return {
    type: "text",
    value: e.opened
      ? `Browser opened to manage usage credits. If it didn't open, visit: ${e.url}`
      : `Visit ${e.url} to manage usage credits.`,
  };
}
export { a as call };
