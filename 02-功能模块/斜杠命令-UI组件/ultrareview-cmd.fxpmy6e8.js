// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 212 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { isDesktopHostEntrypoint } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { parseUltrareviewArgs, ultrareviewLaunchAcknowledgementNudge, runUltrareviewHeadless } from "../代码审查/代码审查.ddrd6y06.js";
var m = async (o, r, t) => {
  let a = t ? `/${t}` : "/ultrareview",
    { scopeArgs: s, applyFixes: n, postReview: i } = parseUltrareviewArgs(o),
    e = await runUltrareviewHeadless(s, {
      confirm: !0,
      singlePass: !0,
      withholdOverageConsent: !0,
      applyFixes: n,
      postReview: i === !0,
      overageConfirmed: r.isUltrareviewOverageConfirmed(),
      markOverageConfirmed: () => r.markUltrareviewOverageConfirmed(),
      context: r,
      invocation: a,
    });
  switch (e.status) {
    case "launched":
      return { type: "query", value: e.message, prompt: ultrareviewLaunchAcknowledgementNudge(n) };
    case "needs-confirm": {
      let l = isDesktopHostEntrypoint()
        ? "Run /ultrareview to confirm and launch the cloud review."
        : 'Run "claude ultrareview" from your terminal to consent and launch, or use /ultrareview in an interactive Claude Code session.';
      return {
        type: "text",
        value: `${e.body} ${a} can't show the billing confirmation in this session. ${l}`,
      };
    }
    case "blocked":
      return {
        type: "text",
        value: e.actionUrl
          ? `${e.message}
  \u2192 ${e.actionUrl}`
          : e.message,
      };
    case "error":
      return { type: "text", value: e.message };
  }
};
export { m as call };
