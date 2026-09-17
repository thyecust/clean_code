// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { RL, cZ } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "./analytics-event-queue.js";
import { lit as S } from "./analytics-fields.js";
import { getModelForAnalytics, renderDefaultModelSetting } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logError } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { getRemoteTransport, hasRemoteControlChannel } from "../安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { updateSettingsForSource } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { stripAnsi } from "./text-sanitization.js";
import { stripLongContextTags } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { baseModelSupportsAdvisor, isValidAdvisorModelString, getAdvisorModelAliases, isAdvisorModelPendingCreditsConsent, getAdvisorCreditsNotice, isAdvisorCapableForBaseModel } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
function formatAdvisorConsentHint(t, n = !1) {
  return `${getAdvisorCreditsNotice(t)} Run /model fable${n ? " in an interactive terminal session" : ""} to review and enable, then set it as the advisor.`;
}
function applyAdvisorModelSetting(t, n, a, l, s = !0, g = !1) {
  let r = hasRemoteControlChannel(),
    e = t === "off" ? void 0 : stripLongContextTags(t),
    f = e === void 0 || isValidAdvisorModelString(e);
  if (
    (logEvent("tengu_advisor_command", {
      advisor:
        e === void 0
          ? S("off")
          : f
            ? getModelForAnalytics(t)
            : isAdvisorModelPendingCreditsConsent(e)
              ? S("consent_pending")
              : S("invalid"),
      remote: r,
    }),
    !r && getRemoteTransport())
  )
    return "The advisor can't be changed from this client \u2014 this connection is view-only or has no control channel";
  let m = r
    ? " (this session only)"
    : s
      ? ""
      : " for this session \u2014 run /advisor in the terminal to change your default";
  if (e === void 0) {
    if (
      (a((o) =>
        o.advisorModel === void 0 ? o : { ...o, advisorModel: void 0 },
      ),
      r)
    )
      getRemoteTransport()
        ?.sendControlRequest({
          subtype: "apply_flag_settings",
          settings: { advisorModel: null },
        })
        .catch(logError);
    else if ((c(""), s))
      updateSettingsForSource("userSettings", { advisorModel: void 0 }, void 0, l);
    return `Advisor disabled${m}`;
  }
  if (!f) {
    if (isAdvisorModelPendingCreditsConsent(e)) return formatAdvisorConsentHint(e, g);
    let o = [...getAdvisorModelAliases(), "off"].join(", ");
    return `${stripAnsi(renderDefaultModelSetting(e))} cannot be used as an advisor. Valid options: ${o}`;
  }
  if ((a((o) => (o.advisorModel === e ? o : { ...o, advisorModel: e })), r))
    getRemoteTransport()
      ?.sendControlRequest({
        subtype: "apply_flag_settings",
        settings: { advisorModel: e },
      })
      .catch(logError);
  else if ((c(e), s)) updateSettingsForSource("userSettings", { advisorModel: e }, void 0, l);
  let v = stripAnsi(renderDefaultModelSetting(e)),
    u = stripAnsi(renderDefaultModelSetting(n)),
    d = `Advisor set to ${v}${m}`;
  if (!baseModelSupportsAdvisor(n))
    d += `
Note: the current main model (${u}) does not support the advisor. It will activate when you switch to a supported main model.`;
  else if (!isAdvisorCapableForBaseModel(n, e))
    d += `
Note: ${v} is less capable than the current main model (${u}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;
  return d;
}
function c(t) {
  cZ({ ...(RL() ?? {}), advisorModel: t });
}
export { formatAdvisorConsentHint, applyAdvisorModelSetting };
