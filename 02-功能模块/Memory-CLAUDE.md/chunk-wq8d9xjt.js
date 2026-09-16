// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { mi } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { St } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { Pt } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { Ge } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { Mr, Tn, wu, hQ } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { CIe } from "../AutoMode-自动模式/chunk-15n5gf3t.js";
import { Eo, XH } from "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import { YEt } from "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import { rf } from "../权限系统/chunk-qdy0h5k2.js";
import { uT, ATe, e$ } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Qn } from "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import { Eve } from "../Bridge-RemoteControl/chunk-9estzwf5.js";
import { hG } from "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import { yYe } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { sLt, Blt } from "../AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import { Olt, AIe, w2n, gSe } from "../../01-核心基础设施/设置-配置/chunk-bznmdnc2.js";
import { dAe } from "../Teammates团队/chunk-mrfx53ye.js";
import { G } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function E3e(n) {
  let o = n.trim();
  if (!o || !o.includes("=")) return null;
  let t = o.split(/\s+/);
  if (G(t, (s) => s.includes("=")) === 1) {
    let s = o.indexOf("="),
      f = o.slice(0, s);
    if (!f || /\s/.test(f)) return null;
    return [{ key: f, raw: o.slice(s + 1) }];
  }
  let e = [];
  for (let s of t) {
    let f = s.indexOf("=");
    if (f <= 0) return null;
    e.push({ key: s.slice(0, f), raw: s.slice(f + 1) });
  }
  return e;
}
function p(n, o) {
  let t = n.toLowerCase();
  return o.find((e) => e.id.toLowerCase() === t);
}
var k = new Map([
  ["agentsView", "/config (Agents view row)"],
  ["autoUpdatesChannel", "/channel"],
  ["showExternalIncludesDialog", "/config (External CLAUDE.md row)"],
]);
function m(n, o) {
  return (
    n.lock !== void 0 &&
    !n.lock.writableWhileLocked?.some(
      (t) => t.toLowerCase() === o.toLowerCase(),
    )
  );
}
async function TIe(n, o, t) {
  let e = c(o, t);
  await CIe().catch(() => {
    return;
  });
  let { settings: s } = gSe(e);
  if (
    n.some(({ key: l, raw: r }) => {
      let u = p(l, s);
      return u !== void 0 && u.lock?.source !== "managed" && m(u, r);
    })
  )
    (await Eve().catch(() => {}), (s = gSe(c(o, t)).settings));
  let d = [];
  for (let { key: l, raw: r } of n) d.push(await w(l, r, s));
  return d;
}
async function w(n, o, t) {
  let e = p(n, t);
  if (
    (i("tengu_config_shorthand", { key_hash: Tn(n), matched: e !== void 0 }),
    !e)
  )
    return {
      ok: !1,
      kind: "refusal",
      message: `${Qn(n)} isn't a /config setting. Run /config to see what's available.`,
    };
  let s = "searchText" in e ? e.searchText : e.label;
  if (m(e, o))
    return {
      ok: !1,
      kind: "locked",
      message: `Couldn't save ${s}: ${e.lock?.reason}`,
    };
  if (e.consentGated) {
    let f = ["false", "0", "off", "no"].includes(o.toLowerCase()),
      d = (e.type === "boolean" && f) || (e.lock !== void 0 && !m(e, o)),
      l = e.value === !0 || e.canWithdraw?.() === !0;
    if (d && !l)
      return { ok: !0, kind: "refusal", message: `${n} is already off.` };
    if (!(d && l))
      return {
        ok: !1,
        kind: "refusal",
        message: `${s} can't be enabled with key=value \u2014 open /config to change it from the panel.`,
      };
  }
  switch (e.type) {
    case "boolean": {
      let f = o.toLowerCase(),
        d = ["true", "1", "on", "yes"].includes(f),
        l = ["false", "0", "off", "no"].includes(f);
      if (!d && !l)
        return {
          ok: !1,
          kind: "refusal",
          message: `${s} takes true or false, not "${Qn(o)}".`,
        };
      let r = await e.onChange(d);
      if (r?.error) {
        if (r.error instanceof mi)
          return {
            ok: !1,
            kind: "refusal",
            message: `${s}: ${r.error.message}${r?.messageSuffix ?? ""}`,
          };
        return {
          ok: !1,
          kind: "save-failure",
          message: `Couldn't save ${s}: ${r.error.message}${r?.messageSuffix ?? ""}`,
        };
      }
      return {
        ok: !0,
        kind: "refusal",
        message: `Set ${s} to ${d ? "true" : "false"}${r?.messageSuffix ?? ""}`,
      };
    }
    case "enum":
    case "managedEnum": {
      let f = e.type === "managedEnum" ? e.coerce : void 0;
      if (!e.options && !f)
        return {
          ok: !1,
          kind: "refusal",
          message: `${s} can't be set with key=value \u2014 use ${k.get(e.id) ?? "/config"}.`,
        };
      let d = f
        ? f(o)
        : e.options?.find((r) => r.toLowerCase() === o.toLowerCase());
      if (d === void 0) {
        let r =
          e.type === "managedEnum" && e.optionsHint ? ` ${e.optionsHint}` : "";
        return {
          ok: !1,
          kind: "refusal",
          message: e.options
            ? `${s} takes one of: ${e.options.join(", ")}.${r}`
            : `${s} doesn't accept "${Qn(o)}".${r}`,
        };
      }
      let l = await e.onChange(d);
      if (l?.error) {
        if (l.error instanceof mi)
          return {
            ok: !1,
            kind: "refusal",
            message: `${s}: ${l.error.message}${l?.messageSuffix ?? ""}`,
          };
        return {
          ok: !1,
          kind: "save-failure",
          message: `Couldn't save ${s}: ${l.error.message}${l?.messageSuffix ?? ""}`,
        };
      }
      return {
        ok: !0,
        kind: "refusal",
        message: `Set ${s} to ${Qn(d)}${l?.messageSuffix ?? ""}`,
      };
    }
  }
}
function EIe(n, o) {
  if (!o) return n.message;
  switch (n.kind) {
    case "save-failure":
      return "Couldn't save this setting (detail withheld on this connection).";
    case "locked":
      return "Couldn't save this setting: a trusted policy owns it (detail withheld on this connection).";
    case "refusal":
      return n.message;
  }
}
function A3e(n) {
  let { settings: o } = gSe(c(n));
  return o
    .flatMap((t) => {
      if (t.consentGated) return [];
      let e =
        t.type === "boolean"
          ? "true|false"
          : t.options
            ? t.options.join("|")
            : t.type === "managedEnum" && t.coerce
              ? "<value>"
              : null;
      return e ? [`  ${t.id}=${e}`] : [];
    })
    .sort().join(`
`);
}
function Jgr(n, o) {
  let t = y.of(B().host).lookup(),
    e = o.indexOf("=");
  if (e === -1) {
    let l = o.toLowerCase();
    return t
      .filter((r) => r.id.toLowerCase().startsWith(l))
      .sort((r, u) => r.id.localeCompare(u.id))
      .map((r) => ({
        value: `${r.id}=`,
        description: r.options?.slice(0, 4).join(" | ") ?? r.hint,
        isFinal: !1,
        appendSpace: !1,
      }));
  }
  let s = o.slice(0, e),
    f = o.slice(e + 1).toLowerCase(),
    d = t.find((l) => l.id.toLowerCase() === s.toLowerCase());
  if (!d?.options) return [];
  return d.options
    .filter((l) => l.toLowerCase().startsWith(f))
    .map((l) => ({ value: `${d.id}=${l}`, isFinal: !0 }));
}
class S {
  keys = void 0;
  remoteWorkspace = !1;
  lookup() {
    if (this.remoteWorkspace !== Pt())
      ((this.remoteWorkspace = !this.remoteWorkspace), (this.keys = void 0));
    return ((this.keys ??= b()), this.keys);
  }
}
var y = new j(() => new S());
function b() {
  let n = {
      getAppState: () => ({
        thinkingEnabled: !1,
        verbose: !1,
        mainLoopModel: null,
        mainLoopModelForSession: null,
        fastMode: !1,
        promptSuggestionEnabled: !1,
        awaySummaryEnabled: !1,
        toolPermissionContext: rf(),
      }),
      setAppState: () => {},
      options: { mcpClients: [] },
    },
    { settings: o } = gSe(c(n));
  return o.flatMap((t) => {
    if (t.consentGated) return [];
    let e =
      t.type === "boolean"
        ? ["true", "false"]
        : "options" in t && t.options
          ? t.options
          : void 0;
    if (e || (t.type === "managedEnum" && t.coerce))
      return [
        {
          id: t.id,
          options: e,
          hint: t.type === "managedEnum" ? t.optionsHint : void 0,
        },
      ];
    return [];
  });
}
function c(n, o) {
  let t = n.getAppState(),
    e = { ...Ge(), ...Olt(), autoContinueAtUsageLimit: sLt() ?? !0 },
    s = AIe(),
    f = Eo("disableWorkflows", !1),
    d = Eo("enableWorkflows", !1),
    l =
      YEt() &&
      (f.value !== !0 || f.source === "userSettings") &&
      (d.source === "default" || d.source === "userSettings"),
    r = !dAe(),
    u = Blt(),
    h = yYe(),
    C = import.meta.require("../../01-核心基础设施/共享小工具-未细化/getBriefEnforceText.y2btb2kt.js").isBriefEntitled();
  return {
    globalConfig: s,
    settingsData: e,
    storageV5: n.storageV5,
    themeSetting: s.theme,
    currentOutputStyle: e?.outputStyle || uT,
    currentLanguage: e?.language,
    externalIncludesApproved: !1,
    thinkingEnabled: t.thinkingEnabled,
    verbose: t.verbose,
    mainLoopModel: t.mainLoopModel,
    currentModel: e$(t),
    isFastMode: Mr() ? t.fastMode : !1,
    promptSuggestionEnabled: t.promptSuggestionEnabled,
    awaySummaryEnabled: t.awaySummaryEnabled,
    showDefaultViewPicker: C,
    pushTogglesVisible: hG() && !St() && wu(),
    crossSessionInboxRowVisible: !1,
    isConnectedToIde: ATe(n.options.mcpClients),
    inAppSelection: !0,
    isFileCheckpointingAvailable: !a.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING,
    workflowsToggleable: l,
    workflowSizeGuidelineToggleable: r,
    autoContinueAtUsageLimitToggleable: u,
    artifactToggleable: h,
    shouldShowExternalIncludesToggle: !1,
    autoUpdaterDisabledReason: hQ(),
    modelSwitchHooks: n.session
      ? {
          session: n.session,
          readState: () => n.getAppState(),
          latestPick: { current: 0 },
          latestFastPick: { current: 0 },
        }
      : null,
    setAppState: (g) => n.setAppState(g),
    setTheme:
      o?.setTheme ??
      ((g) =>
        M() && n.storageV5 !== void 0
          ? XH("theme", g, n.storageV5)
          : XH("theme", g)),
    ...w2n,
  };
}
export { E3e, TIe, EIe, A3e, Jgr };
