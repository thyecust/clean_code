// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 210 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { EO, f$, dj, Rf, ya } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { $9e } from "./ccr-recap.js";
async function S(e) {
  if (
    !e.messages.some(
      (s) =>
        (s.type === "assistant" && !s.isApiErrorMessage && !f$(s)) ||
        (s.type === "user" && s.isCompactSummary) ||
        (dj(s) && !EO(Rf(s) ?? "")),
    )
  )
    return null;
  let [
      { fetchSystemPromptParts: a },
      { getToolPermissionContext: n },
      { getMainLoopModel: t, getRuntimeMainLoopModel: o },
      { asSystemPrompt: d },
    ] = await Promise.all([
      import("./fetchSystemPromptParts.kqatsmq3.js"),
      import("./chunk-fjrcf22x.js"),
      import("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
      import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
    ]),
    l = n(e),
    m = o({ permissionMode: l.mode, mainLoopModel: t() }),
    { customSystemPrompt: r, appendSystemPrompt: p } = e.options,
    {
      defaultSystemPrompt: u,
      userContext: C,
      systemContext: h,
    } = await a({
      session: e.session,
      tools: e.options.tools,
      mainLoopModel: m,
      additionalWorkingDirectories: Array.from(
        l.additionalWorkingDirectories.keys(),
      ),
      customSystemPrompt: r,
      excludeDynamicSections: e.options.excludeDynamicSections,
      cacheBreakerPhrase: e.options.cacheBreakerPhrase,
      analysisOnly: !0,
      storageV5: e.storageV5,
      credentials: e.credentials,
    }),
    k = d([
      ...(typeof r === "string" ? [r] : Array.isArray(r) ? r : u),
      ...(p ? [p] : []),
    ]),
    c = e.messages.at(-1),
    P = ya(
      c?.type === "assistant" && c.message.stop_reason === null
        ? e.messages.slice(0, -1)
        : e.messages,
    );
  return {
    systemPrompt: k,
    userContext: C,
    systemContext: h,
    toolUseContext: { ...e, options: { ...e.options, mainLoopModel: m } },
    forkContextMessages: P,
    advisorModel: e.getAdvisorSetting(),
  };
}
var b = async (e, i) => {
    let a = !1,
      n = !1,
      t = await $9e(i.abortController.signal, async () => {
        try {
          let o = await S(i);
          return ((a = o !== null), o);
        } catch (o) {
          throw ((n = !0), o);
        }
      });
    switch (t.kind) {
      case "ok":
        if (t.capped) logFeatureSad("recap_command", "capped", { fallback_params: a });
        else logFeatureOk("recap_command", { fallback_params: a });
        return { type: "text", value: t.text };
      case "api-error":
        return (
          logFeatureBad("recap_command", "api_error", { fallback_params: a }),
          { type: "text", value: t.text }
        );
      case "no-turn":
        return {
          type: "text",
          value: "Nothing to recap yet \u2014 send a message first.",
        };
      case "aborted":
        return { type: "text", value: "Recap cancelled." };
      case "failed":
        return (
          logFeatureBad("recap_command", n ? "fallback_rebuild_failed" : "failed", {
            fallback_params: a,
          }),
          {
            type: "text",
            value: "Couldn't generate a recap. Run with --debug for details.",
          }
        );
    }
  },
  M = {
    type: "local",
    name: "recap",
    description: "Generate a one-line session recap now",
    supportsNonInteractive: !0,
    thinClientDispatch: "post-text",
    load: () => Promise.resolve({ call: b }),
  },
  F = M;
export { F as default };
