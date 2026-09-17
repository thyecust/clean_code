// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 72 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { lZ } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { lit as S } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { BRIEF_TOOL_NAME } from "../../01-核心基础设施/核心工具-未归类/chunk-q599wyee.js";
import { isBriefEntitled } from "../../01-核心基础设施/核心工具-未归类/chunk-1p3batyk.js";
import { O, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var r = createLazyValue(() => c({ enable_slash_command: O() })),
  n = { enable_slash_command: !1 };
function a() {
  let t = getFeatureValue_CACHED_MAY_BE_STALE("tengu_kairos_brief_config", n),
    o = r().safeParse(t);
  return o.success ? o.data : n;
}
var l = {
    type: "local-jsx",
    name: "brief",
    description: "Toggle brief-only mode",
    isEnabled: () => a().enable_slash_command,
    immediate: !0,
    load: () =>
      Promise.resolve({
        async call(t, o) {
          let e = !o.getAppState().isBriefOnly;
          if (e && !isBriefEntitled())
            return (
              logEvent("tengu_brief_mode_toggled", {
                enabled: !1,
                gated: !0,
                source: S("slash_command"),
              }),
              t("Brief tool is not enabled for your account", {
                display: "system",
              }),
              null
            );
          (lZ(e),
            o.onQueryEvent?.({
              type: "apply_flag_settings",
              settings: { isBriefOnly: e },
            }),
            logEvent("tengu_brief_mode_toggled", {
              enabled: e,
              gated: !1,
              source: S("slash_command"),
            }));
          let s = [
            `<system-reminder>
${e ? `Brief mode is now enabled. Use the ${BRIEF_TOOL_NAME} tool for all user-facing output \u2014 plain text outside it is hidden from the user's view.` : `Brief mode is now disabled. The ${BRIEF_TOOL_NAME} tool is no longer available \u2014 reply with plain text.`}
</system-reminder>`,
          ];
          return (
            t(e ? "Brief-only mode enabled" : "Brief-only mode disabled", {
              display: "system",
              metaMessages: s,
            }),
            null
          );
        },
      }),
  },
  h = l;
export { h as default };
