// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ije } from "../../00-第三方库/lodash/lodash.207999qb.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { cl, Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { Ge, Jt } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import { op } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { p_, _8e, rNe } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
var V = 2;
function L(s) {
  let e = s.trim().toLowerCase();
  if (e === "") return;
  if (e === "hold" || e === "tap" || e === "off") return e;
  return "invalid";
}
var I = async (s, e) => {
  if (!rNe()) {
    if (!cl())
      return {
        type: "text",
        value:
          "Voice mode requires a Claude.ai account. Please run /login to sign in.",
      };
    let t = op("allow_voice_mode", "Voice mode", "is");
    if (t) return { type: "text", value: t };
    return { type: "text", value: "Voice mode is not available." };
  }
  let a = Ge(),
    v = _8e(a),
    o = L(s);
  if (o === "invalid")
    return {
      type: "text",
      value: `Unknown mode: "${s.trim()}". Use hold, tap, or off.`,
    };
  if (o === "off" || (o === void 0 && v)) {
    if (
      (
        await Jt(
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
      i("tengu_voice_toggled", { enabled: !1 }),
      { type: "text", value: "Voice mode disabled." }
    );
  }
  let { isVoiceStreamAvailable: y } = await import("./isVoiceStreamAvailable.0q1zrfge.js"),
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
      await Jt(
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
  i("tengu_voice_toggled", { enabled: !0, tap_mode: l === "tap" });
  let g = p_("voice:pushToTalk", "Chat", "space"),
    w =
      l === "tap"
        ? `Tap ${g} (with input empty) to start, tap again to send.`
        : `Hold ${g} to record.`,
    n = Ije(a.language),
    p = ee(),
    f = p.voiceLangHintLastLanguage !== n.code,
    m = f ? 0 : (p.voiceLangHintShownCount ?? 0),
    u = !n.fellBackFrom && m < V,
    d = "";
  if (n.fellBackFrom)
    d = ` Note: "${n.fellBackFrom}" is not a supported dictation language; using English. Change it via /config.`;
  else if (u) d = ` Dictation language: ${n.code} (/config to change).`;
  if (f || u)
    await Te(
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
