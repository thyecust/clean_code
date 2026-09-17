// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 260 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { ZB, dSe, l7 } from "./chunk-a4mdm49v.js";
import { OIt, DIt } from "../../01-核心基础设施/设置-配置/chunk-11v2vkwp.js";
import "../../01-核心基础设施/共享小工具-未细化/focusable-box.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
var d =
  "Review and manage your privacy settings at https://claude.ai/settings/data-privacy-controls";
async function C(t, o) {
  if (!(await dSe(o.storageV5, o.credentials))) return (t(d), null);
  let [r, l] = await Promise.all([ZB(o.credentials), l7(o.credentials)]);
  if (!r.success) return (t(d), null);
  let n = r.data,
    g = l.success ? l.data : null;
  async function u(a) {
    if (a === "escape" || a === "defer") {
      t("Privacy settings dialog dismissed", { display: "system" });
      return;
    }
    await c();
  }
  async function c() {
    let a = await ZB(o.credentials);
    if (!a.success) {
      t("Unable to retrieve updated privacy settings", { display: "system" });
      return;
    }
    let s = a.data,
      m = s.grove_enabled ? "true" : "false";
    if (
      (t(`"Help improve our AI models" set to ${m}.`),
      n.grove_enabled !== null && n.grove_enabled !== s.grove_enabled)
    )
      logEvent("tengu_grove_policy_toggled", {
        state: s.grove_enabled ?? void 0,
        location: S("settings"),
      });
  }
  if (n.grove_enabled !== null)
    return e(DIt, {
      settings: n,
      domainExcluded: g?.domain_excluded,
      onDone: c,
    });
  return e(OIt, { showIfAlreadyViewed: !0, onDone: u, location: "settings" });
}
export { C as call };
