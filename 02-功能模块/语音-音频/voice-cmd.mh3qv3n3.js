// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 77 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Ije } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { isAnthropicAuthEnabled, saveGlobalConfig, getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getInitialSettings, updateSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { policyDeniedReason } from "../策略限制-PolicyLimits/chunk-8sw91yn5.js";
import { getKeybindingChord, isVoiceEnabled, isVoiceModeAvailable } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
var V = 2;
function L(s) {
  let e = s.trim().toLowerCase();
  if (e === "") return;
  if (e === "hold" || e === "tap" || e === "off") return e;
  return "invalid";
}
var I = async (s, e) => {
  if (!isVoiceModeAvailable()) {
    if (!isAnthropicAuthEnabled())
      return {
        type: "text",
        value:
          "Voice mode requires a Claude.ai account. Please run /login to sign in.",
      };
    let t = policyDeniedReason("allow_voice_mode", "Voice mode", "is");
    if (t) return { type: "text", value: t };
    return { type: "text", value: "Voice mode is not available." };
  }
  let a = getInitialSettings(),
    v = isVoiceEnabled(a),
    o = L(s);
  if (o === "invalid")
    return {
      type: "text",
      value: `Unknown mode: "${s.trim()}". Use hold, tap, or off.`,
    };
  if (o === "off" || (o === void 0 && v)) {
    if (
      (
        await updateSettingsForSource(
          "userSettings",
          { voiceEnabled: !1, voice: { ...a.voice, enabled: !1 } },
          void 0,
          e.storageV5,
        )
      ).error
    )
      return {
        type: "text",
        value:
          "Failed to update settings. Check your settings file for syntax errors.",
      };
    return (
      logEvent("tengu_voice_toggled", { enabled: !1 }),
      { type: "text", value: "Voice mode disabled." }
    );
  }
  let { isVoiceStreamAvailable: y } = await import("./chunk-6098r6ax.js"),
    { checkRecordingAvailability: h } = await import("./checkRecordingAvailability.sby0acpc.js"),
    r = await h(e.session.host, { probeForwarded: !0 });
  if (!r.available)
    return {
      type: "text",
      value: r.reason ?? "Voice mode is not available in this environment.",
    };
  if (!y())
    return {
      type: "text",
      value:
        "Voice mode requires a Claude.ai account. Please run /login to sign in.",
    };
  let { checkVoiceDependencies: b, requestMicrophonePermission: C } =
      await import("./checkRecordingAvailability.sby0acpc.js"),
    c = await b(e.session.host);
  if (!c.available)
    return {
      type: "text",
      value: `No audio recording tool found.${
        c.installCommand
          ? `
Install audio recording tools? Run: ${c.installCommand}`
          : `
Install SoX manually for audio recording.`
      }`,
    };
  if (!(await C(e.session.host))) {
    let t;
    return (
      (t = "System Settings \u2192 Privacy & Security \u2192 Microphone"),
      {
        type: "text",
        value: `Microphone access is denied. To enable it, go to ${t}, then run /voice again.`,
      }
    );
  }
  let l = o === "hold" || o === "tap" ? o : (a.voice?.mode ?? "hold");
  if (
    (
      await updateSettingsForSource(
        "userSettings",
        { voiceEnabled: !0, voice: { ...a.voice, enabled: !0, mode: l } },
        void 0,
        e.storageV5,
      )
    ).error
  )
    return {
      type: "text",
      value:
        "Failed to update settings. Check your settings file for syntax errors.",
    };
  logEvent("tengu_voice_toggled", { enabled: !0, tap_mode: l === "tap" });
  let g = getKeybindingChord("voice:pushToTalk", "Chat", "space"),
    w =
      l === "tap"
        ? `Tap ${g} (with input empty) to start, tap again to send.`
        : `Hold ${g} to record.`,
    n = Ije(a.language),
    p = getGlobalConfig(),
    f = p.voiceLangHintLastLanguage !== n.code,
    m = f ? 0 : (p.voiceLangHintShownCount ?? 0),
    u = !n.fellBackFrom && m < V,
    d = "";
  if (n.fellBackFrom)
    d = ` Note: "${n.fellBackFrom}" is not a supported dictation language; using English. Change it via /config.`;
  else if (u) d = ` Dictation language: ${n.code} (/config to change).`;
  if (f || u)
    await saveGlobalConfig(
      (t) => ({
        ...t,
        voiceLangHintShownCount: m + (u ? 1 : 0),
        voiceLangHintLastLanguage: n.code,
      }),
      e.storageV5,
    );
  let S = r.note ? ` ${r.note}` : "";
  return { type: "text", value: `Voice mode enabled (${l}). ${w}${d}${S}` };
};
export { I as call };
