// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 83 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { _t } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Jt, G5t } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { sA } from "../权限系统/chunk-t3b7pg2x.js";
import { ce, Qc, kJe } from "../权限系统/chunk-fjrcf22x.js";
import { Yc } from "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import { soe } from "../Teammates团队/chunk-eey53z5b.js";
function u(e, o) {
  if (e !== Yc) return !1;
  if (o.options.isNonInteractiveSession) return !1;
  if (ce(o).shouldAvoidPermissionPrompts) return !1;
  if (_t()) return !1;
  if (soe()) return !1;
  if (sA(o.options.mainLoopModel, Qc(o), kJe(o))) return !1;
  return !o.session.workflowUsageConsent.isGranted() && !G5t();
}
async function d(e, o) {
  if ((e.grant(), G5t())) return;
  let { error: r } = await Jt(
    "userSettings",
    { skipWorkflowUsageWarning: !0 },
    void 0,
    o,
  );
  if (r) {
    n(`Failed to persist skipWorkflowUsageWarning: ${r.message}`, {
      level: "error",
    });
    return;
  }
  i("tengu_workflow_usage_warning_accepted", {});
}
export {
  d as recordWorkflowUsageConsent,
  u as workflowNeedsUsageConsentPrompt,
};
