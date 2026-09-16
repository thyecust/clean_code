// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { R, mi } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { S, u } from "../共享小工具-未细化/chunk-w76kejwn.js";
import { Cz, lZ, ML, mv } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../共享小工具-未细化/chunk-h62vxw7j.js";
import {
  bt,
  Mr,
  Jy,
  RR,
  Q$e,
  db,
  pb,
  QH,
  Rr,
  Cse,
  WC,
  fq,
  H,
  Te,
  ee,
  YUe,
  yq,
  es,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { xg } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import { a } from "./chunk-zqr5ctyf.js";
import { i } from "../共享小工具-未细化/chunk-an83zrbx.js";
import { y, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Nr, XBe } from "./设置-配置.aqbb35ee.js";
import { Pt } from "../安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { Ge, Jt, Hq, eke, Let, tke } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { xb } from "../共享小工具-未细化/chunk-jjr7hzzf.js";
import { ly, DP, E1, _c, Eb } from "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import { NU, ARt, Mge, CRt, jet } from "../../02-功能模块/图片-截图-ComputerUse/chunk-x87xxkp4.js";
import { RP } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { XH } from "../../02-功能模块/上下文压缩-Compact/chunk-mxt9bjz3.js";
import { OYe, DCe, jfe, vTt, Xer, Yer } from "../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { Dc, gAn } from "../共享小工具-未细化/chunk-15vfjgmh.js";
import { Yk, iA, zG } from "../../02-功能模块/权限系统/chunk-t3b7pg2x.js";
import {
  lqn,
  dmt,
  hV,
  lH,
  pLe,
  UO,
  Jf,
  Vv,
  Ym,
  Qht,
  QKe,
  rgn,
  z_t,
  hpe,
  Tpe,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Xr } from "../../02-功能模块/状态栏-主题/chunk-dqyc6kge.js";
import { aU } from "../共享小工具-未细化/chunk-97crm80y.js";
import { Qn } from "../../02-功能模块/Bridge-RemoteControl/chunk-5ne99rq3.js";
import { KG, lb, E4t, FAn } from "../../02-功能模块/Bridge-RemoteControl/chunk-9estzwf5.js";
import { Qbt } from "../../02-功能模块/Bridge-RemoteControl/chunk-3j7ezsr7.js";
import { yFe, Fqt } from "../../02-功能模块/Artifact发布-渲染/chunk-01ymf0ar.js";
import { zs } from "../共享小工具-未细化/chunk-k2rb4dgd.js";
import { zr } from "../../02-功能模块/Teammates团队/chunk-3k2smxfn.js";
import { ny } from "../共享小工具-未细化/chunk-6smvq03f.js";
import { JDt, C3e, Kle, hSe, QDt, ZDt } from "../../02-功能模块/AutoMode-自动模式/chunk-15n5gf3t.js";
import { Zb } from "../../02-功能模块/状态栏-主题/chunk-q7ekqy5h.js";
import { Ult } from "../../02-功能模块/AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import { Vnn } from "../../02-功能模块/推送通知(Push)/推送通知(Push).8ab67cqd.js";
import { Pft, Iun, Pun } from "../../02-功能模块/Teammates团队/chunk-88ybhavr.js";
import { c4e } from "../../02-功能模块/Teammates团队/chunk-qy9488g9.js";
import { Xnn } from "../核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import { A4 } from "./chunk-992erern.js";
import { p7, P_, Rl, rI, Znn, ern, t2, n2, Qle } from "../模型目录-ModelCatalog/chunk-qgx6a5a0.js";
import { Lee } from "../../02-功能模块/后台任务-Shell管理/chunk-531ast3t.js";
import { _dt } from "../共享小工具-未细化/chunk-ch1x7wx1.js";
import { Y_n, bSt, Tre } from "../../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
import { Dcr } from "../共享小工具-未细化/chunk-xcc43dkx.js";
function F(l, r) {
  return hpe() ? r : l;
}
function YDt(l) {
  switch (l) {
    case "terminal_bell":
      return "bell";
    case "iterm2_with_bell":
      return "iterm2+bell";
    case "notifications_disabled":
      return "none";
    default:
      return l;
  }
}
var ne = ["never", "60s", "5m", "10m"],
  ae = ["default", "60s", "5m", "10m", "never"],
  se = ["default", ...XBe];
function Olt() {
  return {
    ...!1,
    askUserQuestionTimeout: eke(),
    dialogExpiry: Let(),
    crossSessionInbound: ie("crossSessionInbound")?.value,
    modelProposedGoals: tke(),
    enableArtifact: yFe().enabled,
  };
}
function ie(l) {
  return Hq(l).find((r) => Nr(r.source));
}
function W(l) {
  let r = ie(l)?.source;
  return r !== void 0 && r !== "userSettings";
}
function Oe(l) {
  return (
    l === "model" ||
    l === "fast" ||
    l === "thinking" ||
    l === "useAutoModeDuringPlan" ||
    l === "autoCompact" ||
    l === "autoContinueAtUsageLimit" ||
    l === "precomputeCompactionEnabled" ||
    l === "checkpoints" ||
    l === "outputStyle" ||
    l === "defaultView"
  );
}
function AIe() {
  let l = ee(),
    r = Ge();
  return {
    ...l,
    theme: r.theme ?? l.theme,
    editorMode: r.editorMode ?? l.editorMode,
    verbose: r.verbose ?? l.verbose,
    preferredNotifChannel: r.preferredNotifChannel ?? l.preferredNotifChannel,
    autoCompactEnabled: r.autoCompactEnabled ?? l.autoCompactEnabled,
    autoScrollEnabled: r.autoScrollEnabled ?? l.autoScrollEnabled,
    fileCheckpointingEnabled:
      r.fileCheckpointingEnabled ?? l.fileCheckpointingEnabled,
    showTurnDuration: r.showTurnDuration ?? l.showTurnDuration,
    showMessageTimestamps: r.showMessageTimestamps ?? l.showMessageTimestamps,
    terminalProgressBarEnabled:
      r.terminalProgressBarEnabled ?? l.terminalProgressBarEnabled,
    todoFeatureEnabled: r.todoFeatureEnabled ?? l.todoFeatureEnabled,
    teammateMode: r.teammateMode ?? l.teammateMode,
    remoteControlAtStartup: YUe(),
    autoUploadSessions: r.autoUploadSessions ?? l.autoUploadSessions,
    inputNeededNotifEnabled:
      r.inputNeededNotifEnabled ?? l.inputNeededNotifEnabled,
    agentPushNotifEnabled: r.agentPushNotifEnabled ?? l.agentPushNotifEnabled,
  };
}
function Pe() {
  let l = Cse();
  return [
    "default",
    ...RP.filter(
      (r) => (l || !r.includes("fable")) && !Znn(r) && !ern(r) && Rr(r),
    ),
  ];
}
var Ie = new Map([
  ["jp", "ja"],
  ["kr", "ko"],
  ["cn", "zh"],
  ["tw", "zh-Hant"],
]);
function De(l) {
  let r = Qn(l).trim();
  if (!r || r.toLowerCase() === "default") return "default";
  if (r.length <= 3) {
    let f = r.toLowerCase(),
      D = Ie.get(f) ?? f;
    try {
      let I = Dcr().of(D);
      if (I && I !== D) return I;
    } catch {}
  }
  return r
    .split(/\s+/)
    .map((f) => f.charAt(0).toUpperCase() + f.slice(1).toLowerCase())
    .join(" ");
}
var B = () => {},
  w2n = { setGlobalConfig: B, setSettingsData: B, setChanges: B };
function Fe(l) {
  return ((zs.orgMemoryWritesRowSeen ||= l), zs.orgMemoryWritesRowSeen);
}
function Ne(l) {
  return ((zs.orgMemoryReadRowSeen ||= l), zs.orgMemoryReadRowSeen);
}
var U = {
    accepted: "Allowed",
    declined: "Not allowed",
    unset: "Not asked yet",
  },
  xe =
    "Turned off by your organization's settings (remoteTools.allowUnattendedServing)",
  Ue =
    "Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";
function re() {
  return QDt() === "user" ? Ue : xe;
}
function Le(l) {
  return ((zs.remoteHomeSettingsRowSeen ||= l), zs.remoteHomeSettingsRowSeen);
}
function gSe(l) {
  let {
    globalConfig: r,
    settingsData: f,
    themeSetting: D,
    currentOutputStyle: I,
    currentLanguage: le,
    externalIncludesApproved: de,
    thinkingEnabled: ue,
    verbose: ce,
    mainLoopModel: ge,
    currentModel: V,
    isFastMode: fe,
    promptSuggestionEnabled: pe,
    awaySummaryEnabled: me,
    showDefaultViewPicker: be,
    pushTogglesVisible: Se,
    crossSessionInboxRowVisible: he,
    isConnectedToIde: Ce,
    inAppSelection: ye,
    isFileCheckpointingAvailable: _e,
    workflowsToggleable: j,
    workflowSizeGuidelineToggleable: we,
    autoContinueAtUsageLimitToggleable: Ee,
    artifactToggleable: ve,
    shouldShowExternalIncludesToggle: ke,
    autoUpdaterDisabledReason: Me,
    modelSwitchHooks: C,
    setAppState: A,
    setTheme: Ae,
    setGlobalConfig: p,
    setSettingsData: m,
    setChanges: w,
    storageV5: v,
  } = l;
  function h(e) {
    return M() && v !== void 0
      ? Jt("userSettings", e, void 0, v)
      : Jt("userSettings", e);
  }
  function L(e) {
    return M() && v !== void 0
      ? Jt("localSettings", e, void 0, v)
      : Jt("localSettings", e);
  }
  function k(e, o) {
    if (M() && v !== void 0) XH(e, o, v);
    else XH(e, o);
  }
  function E(e) {
    if (M() && v !== void 0) Te(e, v);
    else Te(e);
  }
  async function z(e, o) {
    let t = ge,
      s = Qle(e, o);
    i("tengu_config_model_changed", { from_model: bt(t), to_model: bt(e) });
    let d = n2(e),
      c = "";
    if (C) {
      let { session: T, readState: N } = C;
      if (UO(T) || Vv.of(T).pending > 0) {
        let te = ++C.latestPick.current,
          P = await Ym(T, () => P_(T, N, e, "command"));
        if (te !== C.latestPick.current) return;
        if (P.decision !== "proceed")
          return (
            g("model_switch", "blocked_by_hook"),
            {
              error: new mi(
                rI(
                  e,
                  P.decision === "ask"
                    ? `${P.reason ?? "confirmation required"} (run /model to confirm)`
                    : P.reason,
                  P.messages,
                ),
                "model switch blocked by a PreModelSwitch hook",
              ),
            }
          );
        if (P.messages.length > 0)
          c = ` \xB7 ${P.messages.map(Rl).join(" \xB7 ")}`;
      }
      Jf(T, N(), e, "command");
    }
    if (s?.fromUltracode) iA(v);
    else if (s !== void 0) zG(s.level, t2(e), void 0, v);
    if ((Cz(), Mr())) QH();
    let b = !1,
      _ = !1;
    (A(
      (T) => (
        (b = !!T.fastMode),
        (_ = Mr() ? db(e, T.fastMode) : b),
        {
          ...T,
          mainLoopModel: e,
          mainLoopModelForSession: null,
          ...(s !== void 0 && {
            sessionEffort: Yk(s.level),
            ultracode: s.ultracode,
          }),
          ...(_ !== b && { fastMode: _ }),
        }
      ),
    ),
      pb(b, _));
    let O = p7(b, _, e);
    w((T) => {
      let N =
        WC(e) +
        O +
        c +
        (d ? " \xB7 this session only \u2014 /model to set up" : "");
      if ("model" in T) {
        let { model: te, ...P } = T;
        return { ...P, model: N };
      }
      return { ...T, model: N };
    });
    let oe = d ? void 0 : await h({ model: e ?? void 0 }),
      G = O + c;
    if (oe?.error) return { error: oe.error, ...(G && { messageSuffix: G }) };
    if (G) return { messageSuffix: G };
  }
  function Y(e) {
    (k("verbose", e),
      p((o) => ({ ...o, verbose: e })),
      A((o) => ({ ...o, verbose: e })),
      w((o) => {
        if ("verbose" in o) {
          let { verbose: t, ...s } = o;
          return s;
        }
        return { ...o, verbose: e };
      }));
  }
  function K(e) {
    (k("preferredNotifChannel", e),
      p((o) => ({ ...o, preferredNotifChannel: e })));
  }
  function Q(e) {
    (k("inputNeededNotifEnabled", e),
      p((o) => ({ ...o, inputNeededNotifEnabled: e })),
      Vnn(),
      i("tengu_push_notif_pref_changed", {
        key: S("inputNeededNotifEnabled"),
        value: e,
      }));
  }
  function q(e) {
    (k("agentPushNotifEnabled", e),
      p((o) => ({ ...o, agentPushNotifEnabled: e })),
      Vnn(),
      i("tengu_push_notif_pref_changed", {
        key: S("agentPushNotifEnabled"),
        value: e,
      }));
  }
  let J = Tre(r.workflowSizeGuideline);
  function X(e) {
    if (e !== "false") {
      let t = E4t();
      if (t !== null)
        return {
          error: new R(t, "Remote Control setting locked by org policy"),
        };
    }
    if (e === "default")
      (k("remoteControlAtStartup", void 0),
        E((t) => {
          if (t.remoteControlAtStartup === void 0) return t;
          let s = { ...t };
          return (delete s.remoteControlAtStartup, s);
        }),
        p((t) => ({ ...t, remoteControlAtStartup: void 0 })));
    else {
      let t = e === "true";
      (k("remoteControlAtStartup", t),
        p((s) => ({ ...s, remoteControlAtStartup: t })));
    }
    let o = yq();
    A((t) => FAn(t, o));
    return;
  }
  function Re() {
    let e = E4t();
    if (e !== null)
      return {
        id: "remoteControl",
        label: "Enable Remote Control for all sessions",
        value: "disabled",
        lock: {
          reason: e,
          source: KG() ? "managed" : "policy",
          writableWhileLocked: ["false"],
        },
        options: ["true", "false", "default"],
        type: "managedEnum",
        onChange(o) {
          if (o !== "false")
            return {
              error: new R(e, "Remote Control setting locked by org policy"),
            };
          return X(o);
        },
      };
    return {
      id: "remoteControl",
      label: "Enable Remote Control for all sessions",
      value:
        r.remoteControlAtStartup === void 0
          ? "default"
          : String(r.remoteControlAtStartup),
      options: ["true", "false", "default"],
      type: "enum",
      onChange: X,
    };
  }
  let Z = [
    {
      id: "autoCompact",
      label: "Auto-compact",
      value: r.autoCompactEnabled,
      type: "boolean",
      onChange(e) {
        (k("autoCompactEnabled", e),
          p((o) => ({ ...o, autoCompactEnabled: e })),
          i("tengu_auto_compact_setting_changed", { enabled: e }));
      },
    },
    ...(Ee
      ? [
          {
            id: "autoContinueAtUsageLimit",
            label: "Continue automatically at usage limit",
            value: f?.autoContinueAtUsageLimit ?? !0,
            type: "boolean",
            consentGated: !0,
            async onChange(e) {
              m((t) => ({ ...t, autoContinueAtUsageLimit: e }));
              let o = await h({ autoContinueAtUsageLimit: e });
              if (o?.error) {
                let t = Ult();
                return (
                  m((s) => ({ ...s, autoContinueAtUsageLimit: t })),
                  { error: o.error }
                );
              }
              i("tengu_quota_auto_resume_setting_changed", { enabled: e });
            },
          },
        ]
      : []),
    ...(Le(aU() || r.remoteHomeSettingsMode === "forward")
      ? [
          {
            id: "remoteHomeSettings",
            label: "Use this machine's settings in cloud sessions",
            value: r.remoteHomeSettingsMode === "forward",
            isDefaultValue: !ARt.some((e) => e === r.remoteHomeSettingsMode),
            consentGated: !0,
            type: "boolean",
            onChange(e) {
              if (e)
                return {
                  error: new mi(
                    "Turn this on from the /config panel, which shows what will be sent",
                  ),
                };
              let o = "keep_local",
                t = r.remoteHomeSettingsMode;
              return (
                p((s) => ({ ...s, remoteHomeSettingsMode: o })),
                Qht(o, M() ? v : void 0).then((s) => {
                  switch (s) {
                    case "written":
                      return;
                    case "unconfirmed":
                      return {
                        messageSuffix:
                          " (could not confirm it was written to the config file; check /config after restarting Claude Code)",
                      };
                    case "refused":
                      return (
                        p((d) => ({ ...d, remoteHomeSettingsMode: t })),
                        {
                          error: new mi(
                            "Cloud settings forwarding is not available right now; nothing was changed",
                          ),
                        }
                      );
                  }
                })
              );
            },
          },
        ]
      : []),
    ...(JDt() || Kle() !== "unset" || ZDt()
      ? [
          {
            id: "unattendedServing",
            label: "Unattended commands from cloud sessions on this computer",
            value: U[Kle()],
            options: [U.declined, U.accepted],
            type: "enum",
            pickToCommit: !0,
            consentGated: !0,
            canWithdraw: () => Kle() === "accepted" || ZDt(),
            ...(hSe() && {
              lock: {
                reason: re(),
                source: "managed",
                writableWhileLocked: [U.declined],
              },
            }),
            onChange(e) {
              let o = e === U.accepted ? "accepted" : "declined";
              if (o === "accepted" && hSe()) return { error: new mi(re()) };
              let t =
                o === "accepted"
                  ? "accepted"
                  : Kle() === "accepted"
                    ? "revoked"
                    : "declined";
              return C3e(o).then((s) => {
                if ((p((d) => ({ ...d })), !s))
                  return {
                    error: new mi(
                      "The answer could not be saved; nothing was changed",
                    ),
                  };
                i("tengu_served_unattended_consent", {
                  action: u(t),
                  surface: S("cli"),
                });
                return;
              });
            },
          },
        ]
      : []),
    ...(dmt()
      ? [
          {
            id: "switchModelsOnFlag",
            label: lqn,
            value: f?.switchModelsOnFlag ?? !0,
            type: "boolean",
            onChange(e) {
              (h({ switchModelsOnFlag: e }),
                m((o) => ({ ...o, switchModelsOnFlag: e })),
                i("tengu_refusal_fallback_setting_changed", { enabled: e }));
            },
          },
        ]
      : []),
    ...[],
    {
      id: "tips",
      label: "Show tips",
      value: f?.spinnerTipsEnabled ?? !0,
      type: "boolean",
      onChange(e) {
        (L({ spinnerTipsEnabled: e }),
          m((o) => ({ ...o, spinnerTipsEnabled: e })),
          i("tengu_tips_setting_changed", { enabled: e }));
      },
    },
    ...(rgn()
      ? [
          {
            id: "feedbackDrafts",
            label: "Claude-drafted feedback",
            value: f?.feedbackDrafts ?? "notify",
            options: ["notify", "quiet", "off"],
            type: "enum",
            onChange(e) {
              let o = e;
              (z_t(o, { storageV5: v, via: "config" }),
                m((t) => ({ ...t, feedbackDrafts: o })));
            },
          },
        ]
      : []),
    {
      id: "reduceMotion",
      label: "Reduce motion",
      value: f?.prefersReducedMotion ?? !1,
      type: "boolean",
      onChange(e) {
        (L({ prefersReducedMotion: e }),
          m((o) => ({ ...o, prefersReducedMotion: e })),
          A((o) => ({
            ...o,
            settings: { ...o.settings, prefersReducedMotion: e },
          })),
          i("tengu_reduce_motion_setting_changed", { enabled: e }));
      },
    },
    {
      id: "thinking",
      label: "Thinking mode",
      value: ue ?? !0,
      type: "boolean",
      onChange(e) {
        (A((o) => ({ ...o, thinkingEnabled: e })),
          h({ alwaysThinkingEnabled: e ? void 0 : !1 }),
          i("tengu_thinking_toggled", { enabled: e }),
          y("thinking_toggle"));
      },
    },
    ...(Mr() && Jy()
      ? [
          {
            id: "fast",
            label: `Fast mode (${RR()})`,
            value: !!fe,
            type: "boolean",
            async onChange(e) {
              let o = (t, s, d) => {
                if (s) {
                  let b = !1;
                  if (
                    (A((_) => {
                      let O = A4(_);
                      return ((b = O !== void 0 && O !== t), _);
                    }),
                    b)
                  )
                    return {
                      error: new mi(
                        "Fast mode was not enabled: the model changed while PreModelSwitch hooks ran; try again",
                        "fast mode promotion stale after hooks",
                      ),
                    };
                }
                (QH(), h({ fastMode: !0 }));
                let c;
                return (
                  A((b) => {
                    let _ = A4(b),
                      O = _ !== void 0 && (!s || _ === t);
                    if (O && C) Jf(C.session, b, _, "command");
                    return (
                      (c = O ? _ : void 0),
                      {
                        ...b,
                        ...(O && {
                          mainLoopModel: _,
                          mainLoopModelForSession: null,
                        }),
                        fastMode: !0,
                      }
                    );
                  }),
                  w((b) => ({
                    ...b,
                    ...(c !== void 0 && { model: c ?? Q$e() }),
                    "Fast mode": "ON",
                  })),
                  d ? { messageSuffix: d } : void 0
                );
              };
              if (e && C && (UO(C.session) || Vv.of(C.session).pending > 0)) {
                let { session: t, readState: s } = C,
                  d = ++C.latestFastPick.current;
                return Ym(t, async () => {
                  let c = A4(s());
                  if (c === void 0 || !UO(t)) {
                    if (d !== C.latestFastPick.current) return;
                    return o(void 0, !1, "");
                  }
                  let b = await P_(t, s, c, "command");
                  if (d !== C.latestFastPick.current) return;
                  if (b.decision !== "proceed")
                    return (
                      g("model_switch", "blocked_by_hook"),
                      {
                        error: new mi(
                          rI(
                            c,
                            b.decision === "ask"
                              ? `${b.reason ?? "confirmation required"} (run /model to switch, then enable fast mode)`
                              : b.reason,
                            b.messages,
                          ),
                          "model switch blocked by a PreModelSwitch hook",
                        ),
                      }
                    );
                  return o(
                    c,
                    !0,
                    b.messages.length > 0
                      ? ` \xB7 ${b.messages.map(Rl).join(" \xB7 ")}`
                      : "",
                  );
                });
              }
              if (e) return o(void 0, !1, "");
              else {
                let t = () => {
                  (QH(),
                    h({ fastMode: void 0 }),
                    A((s) => ({ ...s, fastMode: !1 })),
                    w((s) => ({ ...s, "Fast mode": "OFF" })));
                };
                if (C && Vv.of(C.session).pending > 0)
                  await Ym(C.session, async () => t());
                else t();
              }
            },
          },
        ]
      : []),
    ...(H("tengu_chomp_inflection", !1)
      ? [
          {
            id: "promptSuggestionEnabled",
            label: "Prompt suggestions",
            value: pe,
            type: "boolean",
            onChange(e) {
              (A((o) => ({ ...o, promptSuggestionEnabled: e })),
                h({ promptSuggestionEnabled: e ? void 0 : !1 }));
            },
          },
        ]
      : []),
    {
      id: "recap",
      label: "Session recap",
      value: me,
      type: "boolean",
      onChange(e) {
        (A((o) => ({ ...o, awaySummaryEnabled: e })),
          h({ awaySummaryEnabled: e ? void 0 : !1 }),
          m((o) => ({ ...o, awaySummaryEnabled: e ? void 0 : !1 })));
      },
    },
    ...(_e
      ? [
          {
            id: "checkpoints",
            label: "Rewind code (checkpoints)",
            value: r.fileCheckpointingEnabled,
            type: "boolean",
            onChange(e) {
              (k("fileCheckpointingEnabled", e),
                p((o) => ({ ...o, fileCheckpointingEnabled: e })),
                i("tengu_file_history_snapshots_setting_changed", {
                  enabled: e,
                }));
            },
          },
        ]
      : []),
    ...(Ne(Xer())
      ? [
          {
            id: "orgMemoryRead",
            label:
              "Synced project memory (this directory; applies next session)",
            value: es().orgMemoryRead ?? !0,
            type: "boolean",
            onChange(e) {
              (Yer(e, v), p((o) => ({ ...o })));
            },
          },
        ]
      : []),
    ...(Fe(!OYe() && (DCe() || es().orgMemoryWrites === !0))
      ? [
          {
            id: "orgMemoryWrites",
            label:
              es().orgMemoryRead === !1
                ? "Synced project memory writes (enable reads first)"
                : "Synced project memory writes (this directory; applies next session)",
            value: jfe(),
            canWithdraw: () => es().orgMemoryWrites === !0,
            type: "boolean",
            consentGated: !0,
            onChange(e) {
              let o = e && !jfe() && es().orgMemoryWrites === !0;
              (vTt(o ? !1 : e, v), p((t) => ({ ...t })));
            },
          },
        ]
      : []),
    ...(j
      ? [
          {
            id: "workflows",
            label: "Dynamic workflows",
            value:
              f?.disableWorkflows === !0 ? !1 : (f?.enableWorkflows ?? gAn()),
            type: "boolean",
            onChange(e) {
              let o = e === gAn() ? void 0 : e;
              (h({ enableWorkflows: o, disableWorkflows: void 0 }),
                m((t) => ({
                  ...t,
                  enableWorkflows: o,
                  disableWorkflows: void 0,
                })),
                w((t) => ({ ...t, workflows: e ? "on" : "off" })));
            },
          },
          {
            id: "workflowKeywordTriggerEnabled",
            label: "Ultracode keyword trigger",
            value: f?.workflowKeywordTriggerEnabled ?? !0,
            type: "boolean",
            onChange(e) {
              let o = e ? void 0 : !1;
              (h({ workflowKeywordTriggerEnabled: o }),
                m((t) => ({ ...t, workflowKeywordTriggerEnabled: o })),
                w((t) => ({
                  ...t,
                  ultracodeKeywordTrigger: e ? "on" : "off",
                })));
            },
          },
        ]
      : []),
    ...(we && (j || Dc())
      ? [
          {
            id: "workflowSizeGuideline",
            label: "Dynamic workflow size",
            value: J.size,
            isDefaultValue: J.isDefault,
            options: [...Y_n],
            type: "enum",
            onChange(e) {
              let o = bSt(e) ?? "unrestricted";
              (E((t) => {
                if (t.workflowSizeGuideline === o) return t;
                return { ...t, workflowSizeGuideline: o };
              }),
                p((t) => ({ ...t, workflowSizeGuideline: o })),
                w((t) => ({ ...t, workflowSizeGuideline: o })));
            },
          },
        ]
      : []),
    ...(ve
      ? [
          {
            id: "artifacts",
            label: "Artifacts",
            value: f?.enableArtifact ?? Fqt(),
            type: "boolean",
            async onChange(e) {
              let o = e === Fqt() ? void 0 : e;
              m((s) => ({ ...s, enableArtifact: e }));
              let t = await h({ enableArtifact: o, disableArtifact: void 0 });
              if (t?.error)
                return (
                  m((s) => ({ ...s, enableArtifact: yFe().enabled })),
                  { error: t.error }
                );
              w((s) => ({ ...s, artifacts: e ? "on" : "off" }));
            },
          },
        ]
      : []),
    {
      id: "verbose",
      label: F("Verbose output", "Verbose"),
      value: ce,
      type: "boolean",
      onChange: Y,
    },
    {
      id: "progressBar",
      label: "Terminal progress bar",
      value: r.terminalProgressBarEnabled,
      type: "boolean",
      onChange(e) {
        (k("terminalProgressBarEnabled", e),
          p((o) => ({ ...o, terminalProgressBarEnabled: e })),
          i("tengu_terminal_progress_bar_setting_changed", { enabled: e }));
      },
    },
    ...(H("tengu_terminal_sidebar", !1)
      ? [
          {
            id: "showStatusInTerminalTab",
            label: "Show status in terminal tab",
            value: r.showStatusInTerminalTab ?? !1,
            type: "boolean",
            onChange(e) {
              (E((o) => ({ ...o, showStatusInTerminalTab: e })),
                p((o) => ({ ...o, showStatusInTerminalTab: e })),
                i("tengu_terminal_tab_status_setting_changed", { enabled: e }));
            },
          },
        ]
      : []),
    {
      id: "turnDuration",
      label: "Show turn duration",
      value: r.showTurnDuration,
      type: "boolean",
      onChange(e) {
        (k("showTurnDuration", e),
          p((o) => ({ ...o, showTurnDuration: e })),
          i("tengu_show_turn_duration_setting_changed", { enabled: e }));
      },
    },
    ...(H("tengu_sepia_moth", !1)
      ? [
          {
            id: "precomputeCompactionEnabled",
            label: "Precompute compaction",
            value: f?.precomputeCompactionEnabled ?? pLe(),
            type: "boolean",
            onChange(e) {
              (h({ precomputeCompactionEnabled: e }),
                m((o) => ({ ...o, precomputeCompactionEnabled: e })),
                i("tengu_precompute_compaction_setting_changed", {
                  enabled: e,
                }));
            },
          },
        ]
      : []),
    ...(H("tengu_silk_hinge", !1)
      ? [
          {
            id: "timestamps",
            label: "Show message timestamps",
            value: r.showMessageTimestamps,
            type: "boolean",
            onChange(e) {
              (k("showMessageTimestamps", e),
                p((o) => ({ ...o, showMessageTimestamps: e })),
                A((o) => ({ ...o, showMessageTimestamps: e })),
                i("tengu_show_message_timestamps_setting_changed", {
                  enabled: e,
                }));
            },
          },
        ]
      : []),
    {
      id: "timeFormat",
      label: "Time format",
      value: Xnn(f?.timeFormat ?? "auto"),
      options: [...Mge],
      type: "enum",
      pickToCommit: !0,
      onChange(e) {
        let o = Mge.find((t) => t === e);
        if (!o) return;
        (h({ timeFormat: o }),
          m((t) => ({ ...t, timeFormat: o })),
          w((t) => ({ ...t, timeFormat: o })),
          i("tengu_time_format_setting_changed", { value: u(o) }));
      },
    },
    {
      id: "permissionMode",
      label: "Default permission mode",
      value: f?.permissions?.defaultMode || "default",
      options: (() => {
        let e = ["default", "plan"],
          o = ly,
          t = ["bypassPermissions"];
        return [...e, ...o.filter((s) => !e.includes(s) && !t.includes(s))];
      })(),
      type: "enum",
      async onChange(e) {
        let o = Eb(e),
          t = E1(o) ? _c(o) : o,
          s = f?.permissions?.defaultMode;
        (m((c) => ({
          ...c,
          permissions: { ...c?.permissions, defaultMode: t },
        })),
          w((c) => ({ ...c, permissionMode: e })));
        let d = await h({ permissions: { defaultMode: t } });
        if (d.error)
          return (
            m((c) => ({
              ...c,
              permissions: { ...c?.permissions, defaultMode: s },
            })),
            w((c) => {
              let { permissionMode: b, ..._ } = c;
              return _;
            }),
            n(
              `Failed to update default permission mode setting: ${d.error.message}`,
              { level: "error" },
            ),
            { error: d.error }
          );
      },
    },
    {
      id: "worktreeBaseRef",
      label: "Worktree base ref",
      value: f?.worktree?.baseRef ?? "fresh",
      options: ["fresh", "head"],
      type: "enum",
      async onChange(e) {
        let o = e,
          t = f?.worktree?.baseRef;
        (m((d) => ({ ...d, worktree: { ...d?.worktree, baseRef: o } })),
          w((d) => ({ ...d, worktreeBaseRef: o })));
        let s = await h({ worktree: { baseRef: o } });
        if (s.error)
          return (
            m((d) => ({ ...d, worktree: { ...d?.worktree, baseRef: t } })),
            w((d) => {
              let { worktreeBaseRef: c, ...b } = d;
              return b;
            }),
            n(
              `Failed to update worktree.baseRef in user settings: ${s.error.message}`,
              { level: "error" },
            ),
            { error: s.error }
          );
      },
    },
    {
      id: "useAutoModeDuringPlan",
      label: "Use auto mode during plan",
      value: f?.useAutoModeDuringPlan ?? !0,
      type: "boolean",
      onChange(e) {
        (h({ useAutoModeDuringPlan: e }),
          m((o) => ({ ...o, useAutoModeDuringPlan: e })),
          A((o) => {
            let t = QKe(o.toolPermissionContext);
            if (t === o.toolPermissionContext) return o;
            return { ...o, toolPermissionContext: t };
          }),
          w((o) => ({ ...o, "Use auto mode during plan": e })));
      },
    },
    {
      id: "gitignore",
      label: "Respect .gitignore in file picker",
      value: r.respectGitignore,
      type: "boolean",
      onChange(e) {
        (E((o) => ({ ...o, respectGitignore: e })),
          p((o) => ({ ...o, respectGitignore: e })),
          i("tengu_respect_gitignore_setting_changed", { enabled: e }));
      },
    },
    {
      id: "copyFullResponse",
      label: "Skip the /copy picker",
      value: r.copyFullResponse,
      type: "boolean",
      onChange(e) {
        (E((o) => ({ ...o, copyFullResponse: e })),
          p((o) => ({ ...o, copyFullResponse: e })));
      },
    },
    ...(ye
      ? [
          {
            id: "copyOnSelect",
            label: "Copy on select",
            value: r.copyOnSelect ?? !0,
            type: "boolean",
            onChange(e) {
              (E((o) => ({ ...o, copyOnSelect: e })),
                p((o) => ({ ...o, copyOnSelect: e })));
            },
          },
          {
            id: "autoScroll",
            label: F("Auto-scroll", "Auto-scroll output"),
            value: r.autoScrollEnabled,
            type: "boolean",
            onChange(e) {
              (k("autoScrollEnabled", e),
                p((o) => ({ ...o, autoScrollEnabled: e })));
            },
          },
        ]
      : []),
    ...(hpe()
      ? ny() || Lee()
        ? [
            {
              id: "agentsView",
              label: "Agents view",
              value:
                (Lee() && (r.leftArrowOpensAgents ?? !0)) ||
                (ny() && (r.defaultToAgentsView ?? !1))
                  ? "on"
                  : "off",
              type: "managedEnum",
              onChange() {},
            },
          ]
        : []
      : [
          ...(ny()
            ? [
                {
                  id: "defaultToAgentsView",
                  label: "Open agents view by default",
                  value: r.defaultToAgentsView ?? !1,
                  type: "boolean",
                  onChange(e) {
                    (E((o) => ({ ...o, defaultToAgentsView: e })),
                      p((o) => ({ ...o, defaultToAgentsView: e })));
                  },
                },
              ]
            : []),
          ...(Lee()
            ? [
                {
                  id: "leftArrowOpensAgents",
                  label: `${DP} opens agents`,
                  value: r.leftArrowOpensAgents ?? !0,
                  type: "boolean",
                  onChange(e) {
                    (E((o) => ({ ...o, leftArrowOpensAgents: e })),
                      p((o) => ({ ...o, leftArrowOpensAgents: e })));
                  },
                },
              ]
            : []),
        ]),
    ...[],
    Me
      ? {
          id: "autoUpdatesChannel",
          label: "Auto-update channel",
          value: "disabled",
          type: "managedEnum",
          onChange() {},
        }
      : {
          id: "autoUpdatesChannel",
          label: "Auto-update channel",
          value:
            f?.autoUpdatesChannel === "rc"
              ? "slow"
              : (f?.autoUpdatesChannel ?? "latest"),
          type: "managedEnum",
          onChange() {},
        },
    {
      id: "theme",
      label: "Theme",
      value: Xr("themes") && Zb(D) ? `${D} (disabled in safe mode)` : D,
      type: "managedEnum",
      options: CRt,
      optionsHint: "For custom themes, use /theme.",
      onChange: Ae,
    },
    ...(hpe()
      ? [
          {
            id: "notifChannel",
            label: "Notifications",
            value: YDt(r.preferredNotifChannel),
            type: "managedEnum",
            options: [...NU],
            onChange: K,
          },
        ]
      : [
          {
            id: "notifChannel",
            label: "Local notifications",
            value: r.preferredNotifChannel,
            options: [...NU],
            type: "enum",
            onChange: K,
          },
          ...(Se
            ? [
                ...(Qbt()
                  ? [
                      {
                        id: "inputNeededNotifEnabled",
                        label: "Push when actions required",
                        value: r.inputNeededNotifEnabled ?? !1,
                        type: "boolean",
                        onChange: Q,
                      },
                    ]
                  : []),
                {
                  id: "agentPushNotifEnabled",
                  label: "Push when Claude decides",
                  value: r.agentPushNotifEnabled ?? !1,
                  type: "boolean",
                  onChange: q,
                },
              ]
            : []),
        ]),
    {
      id: "outputStyle",
      label: "Output style",
      value:
        Xr("outputStyles") && !Object.hasOwn(hV, I)
          ? `${I} (disabled in safe mode)`
          : I,
      type: "managedEnum",
      options: Object.keys(hV),
      optionsHint: "For custom styles, open /config.",
      async onChange(e) {
        (m((t) => ({ ...t, outputStyle: e })),
          ML().delete(Tpe),
          mv("output_style"));
        let o = await L({ outputStyle: e });
        if (o?.error) return { error: o.error };
      },
    },
    ...(be
      ? [
          {
            id: "defaultView",
            label: "Default view",
            value:
              f?.defaultView === void 0 ? "default" : String(f.defaultView),
            options: ["transcript", "chat", "default"],
            type: "enum",
            onChange(e) {
              let o = e === "default" ? void 0 : e;
              (L({ defaultView: o }), m((s) => ({ ...s, defaultView: o })));
              let t = o === "chat";
              (lZ(t),
                A((s) => {
                  if (s.isBriefOnly === t) return s;
                  return { ...s, isBriefOnly: t };
                }),
                w((s) => ({ ...s, "Default view": e })),
                i("tengu_default_view_setting_changed", {
                  value: u(o ?? "unset"),
                }));
            },
          },
        ]
      : []),
    {
      id: "language",
      label: "Language",
      value: le ?? "Default (English)",
      type: "managedEnum",
      coerce: De,
      optionsHint:
        "Any language name or ISO code (e.g. 'ja'); use 'default' for English.",
      async onChange(e) {
        let o = e.toLowerCase() === "default" ? void 0 : e;
        m((s) => ({ ...s, language: o }));
        let t = await h({ language: o });
        if (t?.error) return { error: t.error };
      },
    },
    {
      id: "editor",
      label: "Editor mode",
      value: r.editorMode === "emacs" ? "normal" : r.editorMode || "normal",
      options: ["normal", "vim"],
      type: "enum",
      onChange(e) {
        let o = e;
        (k("editorMode", o),
          p((t) => ({ ...t, editorMode: o })),
          i("tengu_editor_mode_changed", {
            mode: u(o),
            source: S("config_panel"),
          }));
      },
    },
    ...(W("askUserQuestionTimeout")
      ? []
      : [
          {
            id: "askUserQuestionTimeout",
            label: "Question auto-continue timeout",
            consentGated: !0,
            value: f?.askUserQuestionTimeout ?? eke() ?? "never",
            options: [...ne],
            type: "enum",
            async onChange(e) {
              let o = ne.find((d) => d === e);
              if (!o) return;
              let t = f.askUserQuestionTimeout;
              m((d) => ({ ...d, askUserQuestionTimeout: o }));
              let s = await h({ askUserQuestionTimeout: o });
              if (s?.error)
                return (
                  m((d) => ({ ...d, askUserQuestionTimeout: t })),
                  { error: s.error }
                );
              i("tengu_ask_user_question_timeout_changed", {
                value: u(o),
                source: S("config_panel"),
              });
            },
          },
        ]),
    ...(_dt()
      ? [
          {
            id: "modelProposedGoals",
            label: "Claude-proposed goals",
            value: f?.modelProposedGoals ?? tke(),
            options: [...jet],
            type: "enum",
            consentGated: !0,
            async onChange(e) {
              let o = jet.find((s) => s === e);
              if (!o) return;
              m((s) => ({ ...s, modelProposedGoals: o }));
              let t = await h({ modelProposedGoals: o });
              if (t?.error) return { error: t.error };
              i("tengu_model_proposed_goals_changed", {
                value: u(o),
                source: S("config_panel"),
              });
            },
          },
        ]
      : []),
    {
      id: "externalEditorContext",
      label: F(
        "Show last response in external editor",
        "Show responses in IDE",
      ),
      value: r.externalEditorContext ?? !1,
      type: "boolean",
      onChange(e) {
        (E((o) => ({ ...o, externalEditorContext: e })),
          p((o) => ({ ...o, externalEditorContext: e })),
          i("tengu_external_editor_context_changed", { enabled: e }));
      },
    },
    {
      id: "prStatus",
      label: F("Show PR status footer", "Show PR status"),
      value: r.prStatusFooterEnabled ?? !0,
      type: "boolean",
      onChange(e) {
        (E((o) => {
          if (o.prStatusFooterEnabled === e) return o;
          return { ...o, prStatusFooterEnabled: e };
        }),
          p((o) => ({ ...o, prStatusFooterEnabled: e })),
          i("tengu_pr_status_footer_setting_changed", { enabled: e }));
      },
    },
    {
      id: "model",
      label: "Model",
      value: V === null ? "Default (recommended)" : xb(V),
      type: "managedEnum",
      options: Pe(),
      optionsHint: "For a specific model ID, use /model.",
      onChange(e) {
        let o = e === "default" ? null : e;
        if (n2(o))
          return (
            g("model_fable_consent", "config_shorthand_blocked"),
            {
              error: new mi(
                "needs usage-credits consent \u2014 run /model first",
              ),
            }
          );
        return z(o);
      },
    },
    ...(Ce
      ? [
          {
            id: "diffTool",
            label: "Diff tool",
            value: r.diffTool ?? "auto",
            options: ["terminal", "auto"],
            type: "enum",
            onChange(e) {
              let o = e;
              (E((t) => ({ ...t, diffTool: o })),
                p((t) => ({ ...t, diffTool: o })),
                i("tengu_diff_tool_changed", {
                  tool: u(o),
                  source: S("config_panel"),
                }));
            },
          },
        ]
      : []),
    ...(!lH()
      ? [
          {
            id: "autoConnectIde",
            label: "Auto-connect to IDE (external terminal)",
            value: r.autoConnectIde ?? !1,
            type: "boolean",
            onChange(e) {
              (E((o) => ({ ...o, autoConnectIde: e })),
                p((o) => ({ ...o, autoConnectIde: e })),
                i("tengu_auto_connect_ide_changed", {
                  enabled: e,
                  source: S("config_panel"),
                }));
            },
          },
        ]
      : []),
    ...(lH()
      ? [
          {
            id: "autoInstallIdeExtension",
            label: "Auto-install IDE extension",
            value: r.autoInstallIdeExtension ?? !0,
            type: "boolean",
            onChange(e) {
              (E((o) => ({ ...o, autoInstallIdeExtension: e })),
                p((o) => ({ ...o, autoInstallIdeExtension: e })),
                i("tengu_auto_install_ide_extension_changed", {
                  enabled: e,
                  source: S("config_panel"),
                }));
            },
          },
        ]
      : []),
    {
      id: "chrome",
      label: F("Claude in Chrome enabled by default", "Claude in Chrome"),
      value: r.claudeInChromeDefaultEnabled ?? !1,
      type: "boolean",
      onChange(e) {
        (E((o) => ({ ...o, claudeInChromeDefaultEnabled: e })),
          p((o) => ({ ...o, claudeInChromeDefaultEnabled: e })),
          i("tengu_claude_in_chrome_setting_changed", { enabled: e }));
      },
    },
    ...(zr()
      ? (() => {
          let e = Iun();
          return [
            {
              id: "teammateMode",
              label: e ? `Teammate mode [overridden: ${e}]` : "Teammate mode",
              value: r.teammateMode ?? Pft,
              options: ["auto", "tmux", "iterm2", "in-process"],
              type: "enum",
              onChange(t) {
                if (
                  t !== "auto" &&
                  t !== "tmux" &&
                  t !== "iterm2" &&
                  t !== "in-process"
                )
                  return;
                (Pun(t),
                  c4e(),
                  k("teammateMode", t),
                  p((s) => ({ ...s, teammateMode: t })),
                  i("tengu_teammate_mode_changed", { mode: u(t) }));
              },
            },
          ];
        })()
      : []),
    ...(lb() || KG() ? [Re()] : []),
    ...(W("dialogExpiry")
      ? []
      : [
          {
            id: "dialogExpiry",
            label: "Dialog expiry",
            consentGated: !0,
            value: f.dialogExpiry ?? "default",
            options: [...ae],
            type: "enum",
            async onChange(e) {
              let o = ae.find((c) => c === e);
              if (!o) return;
              let t = o === "default" ? void 0 : o,
                s = f.dialogExpiry;
              m((c) => ({ ...c, dialogExpiry: t }));
              let d = await h({ dialogExpiry: t });
              if (d?.error)
                return (
                  m((c) => ({ ...c, dialogExpiry: s })),
                  { error: d.error }
                );
              i("tengu_dialog_expiry_changed", {
                value: u(o),
                source: S("config_panel"),
              });
            },
          },
        ]),
    ...(he && !W("crossSessionInbound")
      ? [
          {
            id: "crossSessionInbound",
            label: "Messages from your other sessions",
            consentGated: !0,
            pickToCommit: !0,
            value: f.crossSessionInbound ?? "default",
            options: [...se],
            type: "enum",
            async onChange(e) {
              let o = se.find((c) => c === e);
              if (!o) return;
              let t = o === "default" ? void 0 : o,
                s = f.crossSessionInbound;
              m((c) => ({ ...c, crossSessionInbound: t }));
              let d = await h({ crossSessionInbound: t });
              if (d?.error)
                return (
                  m((c) => ({ ...c, crossSessionInbound: s })),
                  { error: d.error }
                );
              i("tengu_cross_session_inbound_changed", {
                value: u(o),
                source: S("config_panel"),
              });
            },
          },
        ]
      : []),
    ...[],
    ...(lb(), []),
    ...[],
    ...(ke
      ? [
          {
            id: "showExternalIncludesDialog",
            label: F("External CLAUDE.md includes", "External CLAUDE.md files"),
            value: de ? "true" : "false",
            type: "managedEnum",
            onChange() {},
          },
        ]
      : []),
    ...(a.ANTHROPIC_API_KEY && !xg()
      ? [
          {
            id: "apiKey",
            consentGated: !0,
            label: "Use custom API key: ",
            labelBoldSuffix: fq(a.ANTHROPIC_API_KEY),
            searchText: "Use custom API key",
            value: Boolean(
              a.ANTHROPIC_API_KEY &&
              r.customApiKeyResponses?.approved?.includes(
                fq(a.ANTHROPIC_API_KEY),
              ),
            ),
            type: "boolean",
            onChange(e) {
              (E((o) => {
                let t = { ...o };
                if (!t.customApiKeyResponses)
                  t.customApiKeyResponses = { approved: [], rejected: [] };
                if (!t.customApiKeyResponses.approved)
                  t.customApiKeyResponses = {
                    ...t.customApiKeyResponses,
                    approved: [],
                  };
                if (!t.customApiKeyResponses.rejected)
                  t.customApiKeyResponses = {
                    ...t.customApiKeyResponses,
                    rejected: [],
                  };
                if (a.ANTHROPIC_API_KEY) {
                  let s = fq(a.ANTHROPIC_API_KEY);
                  if (e)
                    t.customApiKeyResponses = {
                      ...t.customApiKeyResponses,
                      approved: [
                        ...(t.customApiKeyResponses.approved ?? []).filter(
                          (d) => d !== s,
                        ),
                        s,
                      ],
                      rejected: (t.customApiKeyResponses.rejected ?? []).filter(
                        (d) => d !== s,
                      ),
                    };
                  else
                    t.customApiKeyResponses = {
                      ...t.customApiKeyResponses,
                      approved: (t.customApiKeyResponses.approved ?? []).filter(
                        (d) => d !== s,
                      ),
                      rejected: [
                        ...(t.customApiKeyResponses.rejected ?? []).filter(
                          (d) => d !== s,
                        ),
                        s,
                      ],
                    };
                }
                return t;
              }),
                p(AIe()));
            },
          },
        ]
      : []),
  ];
  return {
    settings: Pt() ? Z.filter((e) => !Oe(e.id)) : Z,
    helpers: {
      onChangeMainModelConfig: z,
      onChangeVerbose: Y,
      changeNotifChannel: K,
      changeInputNeededNotif: Q,
      changeAgentPushNotif: q,
    },
  };
}
export { YDt, Olt, AIe, w2n, gSe };
