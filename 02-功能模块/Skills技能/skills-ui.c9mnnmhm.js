// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 249 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { isSafeMode, getSafeModeExitHint } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { bytesPerTokenForModel } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { S1, ay } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { jn } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { formatTokenEstimate } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { getSettingsForSource, updateSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { oa } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { useTerminalFocus } from "../../01-核心基础设施/共享小工具-未细化/clock-and-terminal-focus.js";
import { useAppStateSelector } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { useVirtualScrollViewportSize } from "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-state.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { getCommandName, an, J_t, clearCommandMemoizationCaches } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { useKeybindingDisplayText } from "../../01-核心基础设施/共享小工具-未细化/use-keybinding-display-text.js";
import { useGlobalExitKeybinding } from "../../01-核心基础设施/共享小工具-未细化/exit-keybinding-hooks.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { jp, Xd } from "../Vim模式/Vim模式.nnewe0gf.js";
import { NIt, iye } from "../插件系统/chunk-jwm9gdkd.js";
import "../../03-入口与运行时/会话UI(REPL)/scroll-box.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../插件系统/chunk-akd9b588.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import "../../01-核心基础设施/共享小工具-未细化/clipboard-copy.js";
import "../../01-核心基础设施/共享小工具-未细化/lazy-event-emitters.js";
import "../认证-OAuth登录/url-and-error-redaction.js";
import "../插件系统/chunk-rbjz1q03.js";
import "../插件系统/channel-gate.js";
import "../MCP客户端/chunk-4xr0rjb4.js";
import "../成本-Token统计/chunk-3nwwgatc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4bdjksjf.js";
import "../../01-核心基础设施/共享小工具-未细化/focusable-box.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import "../MCP客户端/mcp-error-messages.js";
import "../../01-核心基础设施/共享小工具-未细化/error-message.js";
import "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { ActionKeybindingHint } from "../../01-核心基础设施/共享小工具-未细化/action-keybinding-hint.js";
import "../../01-核心基础设施/共享小工具-未细化/bullet-item.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/remote-control-ui-strings.js";
import "../MCP客户端/plugin-reload-cache-impact.js";
import "../MCP客户端/skill-doctor-data.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-control-handlers.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-hosted-oauth-gate.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/chunk-j7khz57p.js";
import { re, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function et(ss) {
  return ss.workerInventory?.skills;
}
function ot(Yo) {
  return { value: Yo, label: `/${an(Yo)}` };
}
function tt() {}
function Oe(ts) {
  let K = _(18),
    { onExit: ze } = ts,
    h = useAppStateSelector(et),
    Wo;
  if (K[0] !== ze)
    ((Wo = () => ze("Skills dialog dismissed", { display: "system" })),
      (K[0] = ze),
      (K[1] = Wo));
  else Wo = K[1];
  let ee = Wo,
    Ce;
  if (K[2] !== h)
    ((Ce =
      h && h.length > 0
        ? `${h.length} ${pluralize(h.length, "skill")} loaded in the cloud session`
        : void 0),
      (K[2] = h),
      (K[3] = Ce));
  else Ce = K[3];
  let be;
  if (K[4] !== h)
    ((be =
      h && h.length > 0 && e(KeybindingHint, { chord: ["up", "down"], action: "navigate" })),
      (K[4] = h),
      (K[5] = be));
  else be = K[5];
  let zo;
  if (K[6] === MEMO_CACHE_SENTINEL)
    ((zo = e(KeybindingHint, { chord: "escape", action: "close" })), (K[6] = zo));
  else zo = K[6];
  let we;
  if (K[7] !== be)
    ((we = r(DotSeparatedList, { children: [be, zo] })), (K[7] = be), (K[8] = we));
  else we = K[8];
  let xe;
  if (K[9] !== ee || K[10] !== h)
    ((xe =
      h === void 0
        ? e(EmptyStateMessage, {
            hint: "It reports them at the start of each turn; /reload-skills re-scans its skill folders",
            children:
              "The cloud session hasn't reported which skills it loaded",
          })
        : h.length === 0
          ? e(EmptyStateMessage, {
              hint: "Skills come from the repo's .claude/skills and the plugins the session loaded",
              children: "No skills loaded in the cloud session",
            })
          : e(ve, {
              options: h.map(ot),
              visibleOptionCount: 10,
              hideIndexes: !0,
              onChange: tt,
              onCancel: ee,
            })),
      (K[9] = ee),
      (K[10] = h),
      (K[11] = xe));
  else xe = K[11];
  let Ho;
  if (K[12] === MEMO_CACHE_SENTINEL)
    ((Ho = e(o, {
      children: e(t, {
        dimColor: !0,
        wrap: "wrap-trim",
        children:
          "Read-only here: the cloud session sends skill names only, and per-skill toggles are this machine's setting \u2014 /skills in a local session changes those; /reload-skills re-scans the session's skill folders.",
      }),
    })),
      (K[12] = Ho));
  else Ho = K[12];
  let Zo;
  if (K[13] !== ee || K[14] !== Ce || K[15] !== we || K[16] !== xe)
    ((Zo = r(de, {
      title: "Skills",
      subtitle: Ce,
      onCancel: ee,
      color: "suggestion",
      inputGuide: we,
      children: [xe, Ho],
    })),
      (K[13] = ee),
      (K[14] = Ce),
      (K[15] = we),
      (K[16] = xe),
      (K[17] = Zo));
  else Zo = K[17];
  return Zo;
}
F();
function At(ae) {
  return (
    ae.type === "prompt" &&
    (ae.loadedFrom === "skills" ||
      ae.loadedFrom === "syncedSkills" ||
      ae.loadedFrom === "commands_DEPRECATED" ||
      ae.loadedFrom === "plugin" ||
      ae.loadedFrom === "mcp")
  );
}
function Xt(Mt) {
  return [Mt, J_t(Mt)];
}
function _t(xo, Oo) {
  return (
    E(xo.source, xo.loadedFrom).localeCompare(E(Oo.source, Oo.loadedFrom)) ||
    getCommandName(xo).localeCompare(getCommandName(Oo))
  );
}
function jt(Ws) {
  return Ws.name;
}
function Gt(zs) {
  return !zs;
}
function qt(Hs) {
  return Hs.source === "plugin";
}
var H = ["on", "name-only", "user-invocable-only", "off"],
  Lo = {
    on: { glyph: figures.tick, label: "on", color: "success" },
    "name-only": { glyph: figures.bullet, label: "name-only" },
    "user-invocable-only": {
      glyph: figures.circle,
      label: "user-only",
      color: "warning",
    },
    off: { glyph: figures.cross, label: "off", color: "error" },
  };
function $o(a, c) {
  let P = getSettingsForSource("policySettings")?.skillOverrides?.[c];
  if (P) return { value: P, source: "policy" };
  let w = getSettingsForSource("flagSettings")?.skillOverrides?.[c];
  if (w) return { value: w, source: "flag" };
  if (a.disableModelInvocation)
    return { value: "user-invocable-only", source: "author" };
  if (a.source === "plugin") return { value: "on", source: "plugin" };
  return;
}
function To(a) {
  return (
    getSettingsForSource("projectSettings")?.skillOverrides?.[a] ??
    getSettingsForSource("userSettings")?.skillOverrides?.[a]
  );
}
function E(a, c) {
  if (c === "syncedSkills") return S1;
  switch (a) {
    case "mcp":
    case "plugin":
      return a;
    case "memoryStore":
      return "memory store";
    case "bundled":
    case "builtin":
      return "built-in";
    default:
      return ay(a);
  }
}
function Ae(Es) {
  let i = _(89),
    { onExit: R, commands: He, bytesPerToken: Ye } = Es,
    { storageV5: eo } = useStorageV5Context(),
    [X, Ms] = d(!1),
    Pe;
  if (i[0] !== He || i[1] !== X) {
    bb0: {
      let oo = He.filter(At);
      if (X) {
        let st = new Map(oo.map(Xt));
        Pe = oo.sort(
          (nt, rt) =>
            (st.get(rt) ?? 0) - (st.get(nt) ?? 0) ||
            getCommandName(nt).localeCompare(getCommandName(rt)),
        );
        break bb0;
      }
      Pe = oo.sort(_t);
    }
    ((i[0] = He), (i[1] = X), (i[2] = Pe));
  } else Pe = i[2];
  let l = Pe,
    it;
  if (i[3] === MEMO_CACHE_SENTINEL)
    ((it = getSettingsForSource("localSettings")?.skillOverrides ?? {}), (i[3] = it));
  else it = i[3];
  let to = it,
    so;
  if (i[4] !== l) {
    so = new Map();
    for (const lt of l) {
      let at = To(lt.name);
      if (at) so.set(lt.name, at);
    }
    ((i[4] = l), (i[5] = so));
  } else so = i[5];
  let oe = so,
    no;
  if (i[6] !== l) {
    no = new Map();
    for (const ro of l) {
      let ct = $o(ro, ro.name);
      if (ct) no.set(ro, ct);
    }
    ((i[6] = l), (i[7] = no));
  } else no = i[7];
  let S = no,
    mt;
  if (i[8] !== S || i[9] !== oe || i[10] !== l)
    ((mt = () => {
      let io = {};
      for (const pe of l) {
        if (pe.name in io) {
          continue;
        }
        io[pe.name] =
          S.get(pe)?.value ?? to[pe.name] ?? oe.get(pe.name) ?? "on";
      }
      return io;
    }),
      (i[8] = S),
      (i[9] = oe),
      (i[10] = l),
      (i[11] = mt));
  else mt = i[11];
  let [te, Bs] = d(mt),
    [lo, Ks] = d(l[0]),
    ao = useTerminalFocus(),
    [v, Re] = d(!1),
    se = C(v),
    dt,
    ut;
  if (i[12] === MEMO_CACHE_SENTINEL)
    ((dt = () => {
      ((se.current = !1), Re(!1));
    }),
      (ut = ["c", "d"]),
      (i[12] = dt),
      (i[13] = ut));
  else ((dt = i[12]), (ut = i[13]));
  let pt;
  if (i[14] !== v)
    ((pt = { isActive: v, onExit: dt, passthroughCtrlKeys: ut }),
      (i[14] = v),
      (i[15] = pt));
  else pt = i[15];
  let {
    query: u,
    setQuery: j,
    cursorOffset: co,
    handleKeyDown: mo,
    handlePaste: uo,
  } = jp(pt);
  useGlobalExitKeybinding();
  let po;
  bb1: {
    if (!u) {
      po = l;
      break bb1;
    }
    let ne;
    if (i[16] !== u || i[17] !== l) {
      let fo = u.toLowerCase();
      ne = l.filter(
        (De) =>
          De.name.toLowerCase().includes(fo) ||
          (De.description ?? "").toLowerCase().includes(fo) ||
          E(De.source, De.loadedFrom).toLowerCase().includes(fo),
      );
      ((i[16] = u), (i[17] = l), (i[18] = ne));
    } else ne = i[18];
    po = ne;
  }
  let g = po,
    { rows: Ns } = useVirtualScrollViewportSize(useTerminalSize());
  const ne = Ns - 13;
  let ft;
  if (i[19] !== g.length || i[20] !== ne)
    ((ft = oa(ne, 4, g.length)),
      (i[19] = g.length),
      (i[20] = ne),
      (i[21] = ft));
  else ft = i[21];
  let go = ft,
    gt;
  if (i[22] !== g || i[23] !== lo || i[24] !== S)
    ((gt = () => {
      let fe = lo;
      if (!fe || !g.includes(fe)) {
        return;
      }
      if (S.has(fe)) {
        return;
      }
      Bs((ht) => {
        let As = ht[fe.name] ?? "on";
        let Js = H[(H.indexOf(As) + 1) % H.length];
        return { ...ht, [fe.name]: Js };
      });
    }),
      (i[22] = g),
      (i[23] = lo),
      (i[24] = S),
      (i[25] = gt));
  else gt = i[25];
  let ho = gt,
    kt = C(!1),
    yt;
  if (
    i[26] !== te ||
    i[27] !== S ||
    i[28] !== oe ||
    i[29] !== R ||
    i[30] !== l ||
    i[31] !== eo
  )
    ((yt = async () => {
      if (kt.current) {
        return;
      }
      kt.current = !0;
      let Xs = new Set(Array.from(S.keys(), jt));
      let St = new Set(Xs);
      let vt = {};
      let Ct = 0;
      let Fe = 0;
      for (const G of l) {
        if (St.has(G.name)) {
          continue;
        }
        St.add(G.name);
        let ko = te[G.name] ?? "on";
        let bt = oe.get(G.name) ?? "on";
        let _s = to[G.name] ?? bt;
        let wt = ko === bt ? void 0 : ko;
        if (wt !== to[G.name]) ((vt[G.name] = wt), Ct++);
        if (ko !== _s) Fe++;
      }
      if (Ct > 0) {
        let { error: xt } = await updateSettingsForSource(
          "localSettings",
          { skillOverrides: vt },
          void 0,
          eo,
        );
        if (xt) {
          R(`Failed to save skill overrides: ${xt.message}`, {
            display: "system",
          });
          return;
        }
        clearCommandMemoizationCaches();
      }
      R(Fe > 0 ? `Updated ${Fe} skill ${pluralize(Fe, "override")}` : "No changes", {
        display: "system",
      });
    }),
      (i[26] = te),
      (i[27] = S),
      (i[28] = oe),
      (i[29] = R),
      (i[30] = l),
      (i[31] = eo),
      (i[32] = yt));
  else yt = i[32];
  let yo = yt,
    Ot = useKeybindingDisplayText("confirm:no", "Settings", "esc"),
    js = useKeybindingDisplayText("settings:sortByTokens", "Settings", "t"),
    Pt;
  if (i[33] === MEMO_CACHE_SENTINEL) ((Pt = () => Ms(Gt)), (i[33] = Pt));
  else Pt = i[33];
  let Rt;
  if (i[34] !== ho)
    ((Rt = { "select:accept": ho, "settings:sortByTokens": Pt }),
      (i[34] = ho),
      (i[35] = Rt));
  else Rt = i[35];
  const So = !v && g.length > 0;
  let Dt;
  if (i[36] !== So)
    ((Dt = { context: "Settings", isActive: So }), (i[36] = So), (i[37] = Dt));
  else Dt = i[37];
  useKeybindings(Rt, Dt);
  let Ft;
  if (i[38] !== yo) ((Ft = { "confirm:no": yo }), (i[38] = yo), (i[39] = Ft));
  else Ft = i[39];
  const vo = !v;
  let Lt;
  if (i[40] !== vo)
    ((Lt = { context: "Settings", isActive: vo }), (i[40] = vo), (i[41] = Lt));
  else Lt = i[41];
  useKeybindings(Ft, Lt);
  let $t;
  if (i[42] !== mo || i[43] !== u || i[44] !== j)
    (($t = (b) => {
      if (se.current) {
        mo(b);
        return;
      }
      if (b.ctrl || b.meta) {
        return;
      }
      if (b.name === "backspace") {
        if (u)
          (b.preventDefault(), (se.current = !0), Re(!0), j(u.slice(0, -1)));
        return;
      }
      if (b.name.length > 1 && b.name !== "number") {
        return;
      }
      if (b.key.length >= 1 && b.key !== " ") {
        (b.preventDefault(), (se.current = !0), Re(!0));
        let Gs = b.key.startsWith("/") ? b.key.slice(1) : b.key;
        j(u + Gs);
      }
    }),
      (i[42] = mo),
      (i[43] = u),
      (i[44] = j),
      (i[45] = $t));
  else $t = i[45];
  let Co = $t,
    Tt;
  if (i[46] !== uo || i[47] !== u || i[48] !== j)
    ((Tt = (bo) => {
      if (se.current) {
        uo(bo);
        return;
      }
      let Le = bo.text.split(/\r\n|\r|\n/, 2)[0] ?? "";
      if (Le.length === 0) {
        return;
      }
      (bo.preventDefault(), (se.current = !0), Re(!0));
      let qs = Le.startsWith("/") ? Le.slice(1) : Le;
      j(u + qs);
    }),
      (i[46] = uo),
      (i[47] = u),
      (i[48] = j),
      (i[49] = Tt));
  else Tt = i[49];
  let wo = Tt;
  if (l.length === 0) {
    let q;
    if (i[50] !== R)
      ((q = () => R("Skills dialog dismissed", { display: "system" })),
        (i[50] = R),
        (i[51] = q));
    else q = i[51];
    let ie;
    if (i[52] === MEMO_CACHE_SENTINEL)
      ((ie = e(ActionKeybindingHint, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "close",
      })),
        (i[52] = ie));
    else ie = i[52];
    let Q;
    if (i[53] === MEMO_CACHE_SENTINEL)
      ((Q = e(EmptyStateMessage, {
        hint: isSafeMode()
          ? `Custom skills are disabled in safe mode \u2014 ${getSafeModeExitHint()} to load them`
          : "Create skills in .claude/skills/ or ~/.claude/skills/",
        children: "No skills found",
      })),
        (i[53] = Q));
    else Q = i[53];
    let W;
    if (i[54] !== q)
      ((W = e(de, {
        title: "Skills",
        onCancel: q,
        inputGuide: ie,
        children: Q,
      })),
        (i[54] = q),
        (i[55] = W));
    else W = i[55];
    return W;
  }
  let q;
  if (i[56] !== g.length || i[57] !== u || i[58] !== l.length)
    ((q = u
      ? `${g.length}/${l.length} ${pluralize(l.length, "skill")}`
      : `${l.length} ${pluralize(l.length, "skill")}`),
      (i[56] = g.length),
      (i[57] = u),
      (i[58] = l.length),
      (i[59] = q));
  else q = i[59];
  let Qs = q,
    Us = v
      ? "type to filter \xB7 \u2193/enter to select \xB7 esc to clear"
      : g.length === 0
        ? `/ to search, ${Ot} to close`
        : `enter/space to cycle, / to search, ${js} to sort, ${Ot} to close`;
  const ie = `${Qs}${X ? " \xB7 sorted by tokens" : ""} \xB7 ${Us}`;
  let Q;
  if (i[60] !== R)
    ((Q = () => R("Skills dialog dismissed", { display: "system" })),
      (i[60] = R),
      (i[61] = Q));
  else Q = i[61];
  let W;
  if (i[62] !== v || i[63] !== ao || i[64] !== co || i[65] !== u)
    ((W = e(Xd, {
      query: u,
      isFocused: v,
      isTerminalFocused: ao,
      cursorOffset: co,
      placeholder: "Search skills\u2026",
    })),
      (i[62] = v),
      (i[63] = ao),
      (i[64] = co),
      (i[65] = u),
      (i[66] = W));
  else W = i[66];
  let $e;
  if (
    i[67] !== Ye ||
    i[68] !== te ||
    i[69] !== g ||
    i[70] !== v ||
    i[71] !== S ||
    i[72] !== u ||
    i[73] !== X ||
    i[74] !== go
  )
    (($e =
      g.length === 0
        ? e(o, {
            marginTop: 1,
            children: e(EmptyStateMessage, { children: `No skills match "${u}"` }),
          })
        : e(
            iye,
            {
              visibleCount: go,
              isDisabled: v,
              wrap: !0,
              overflowHint: "count",
              onFocus: (Vs) => Ks(g[Vs]),
              children: g.map((le) =>
                e(
                  iye.Item,
                  {
                    children: e(Ne, {
                      skill: le,
                      lock: S.get(le),
                      state: S.get(le)?.value ?? te[le.name] ?? "on",
                      bytesPerToken: Ye,
                    }),
                  },
                  `${le.name}-${le.source}`,
                ),
              ),
            },
            X ? "tok" : "name",
          )),
      (i[67] = Ye),
      (i[68] = te),
      (i[69] = g),
      (i[70] = v),
      (i[71] = S),
      (i[72] = u),
      (i[73] = X),
      (i[74] = go),
      (i[75] = $e));
  else $e = i[75];
  let Te;
  if (i[76] !== l)
    ((Te =
      l.some(qt) &&
      e(o, {
        marginTop: 1,
        children: e(t, {
          dimColor: !0,
          children: "Plugin skills are managed via /plugin",
        }),
      })),
      (i[76] = l),
      (i[77] = Te));
  else Te = i[77];
  let It;
  if (i[78] === MEMO_CACHE_SENTINEL)
    ((It =
      isSafeMode() &&
      e(o, {
        marginTop: 1,
        children: r(t, {
          dimColor: !0,
          children: [
            "Custom skills are disabled in safe mode \u2014",
            " ",
            `${getSafeModeExitHint()} to load them`,
          ],
        }),
      })),
      (i[78] = It));
  else It = i[78];
  let Ie;
  if (
    i[79] !== Co ||
    i[80] !== wo ||
    i[81] !== W ||
    i[82] !== $e ||
    i[83] !== Te
  )
    ((Ie = r(o, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: Co,
      onPaste: wo,
      children: [W, $e, Te, It],
    })),
      (i[79] = Co),
      (i[80] = wo),
      (i[81] = W),
      (i[82] = $e),
      (i[83] = Te),
      (i[84] = Ie));
  else Ie = i[84];
  let Et;
  if (i[85] !== ie || i[86] !== Q || i[87] !== Ie)
    ((Et = e(de, {
      title: "Skills",
      subtitle: ie,
      onCancel: Q,
      isCancelActive: !1,
      hideInputGuide: !0,
      children: Ie,
    })),
      (i[85] = ie),
      (i[86] = Q),
      (i[87] = Ie),
      (i[88] = Et));
  else Et = i[88];
  return Et;
}
function Ne(Zs) {
  let z = _(23),
    { skill: O, lock: ge, state: Ys, bytesPerToken: Po } = Zs,
    en = NIt(),
    T = Lo[Ys],
    Bt;
  if (z[0] !== Po || z[1] !== O)
    ((Bt = formatTokenEstimate(J_t(O, Po))), (z[0] = Po), (z[1] = O), (z[2] = Bt));
  else Bt = z[2];
  let Ro = `${Bt} tok`,
    Ee;
  if (z[3] !== T.color || z[4] !== T.glyph || z[5] !== T.label || z[6] !== ge)
    ((Ee = ge
      ? e(t, { dimColor: !0, children: "\uD83D\uDD12 " + T.label.padEnd(9) })
      : r(t, { color: T.color, children: [T.glyph, " ", T.label.padEnd(9)] })),
      (z[3] = T.color),
      (z[4] = T.glyph),
      (z[5] = T.label),
      (z[6] = ge),
      (z[7] = Ee));
  else Ee = z[7];
  let Kt;
  if (z[8] === MEMO_CACHE_SENTINEL) ((Kt = e(t, { children: "  " })), (z[8] = Kt));
  else Kt = z[8];
  const Do = en ? "suggestion" : void 0;
  let Me;
  if (z[9] !== O.name || z[10] !== Do)
    ((Me = e(t, { color: Do, children: O.name })),
      (z[9] = O.name),
      (z[10] = Do),
      (z[11] = Me));
  else Me = z[11];
  let Be;
  if (z[12] !== O.loadedFrom || z[13] !== O.source)
    ((Be = E(O.source, O.loadedFrom)),
      (z[12] = O.loadedFrom),
      (z[13] = O.source),
      (z[14] = Be));
  else Be = z[14];
  const Fo = ge ? ` \xB7 locked by ${ge.source}` : "";
  let Ke;
  if (z[15] !== Be || z[16] !== Fo || z[17] !== Ro)
    ((Ke = r(t, {
      dimColor: !0,
      children: [" ", "\xB7 ", Be, " \xB7 ", Ro, Fo],
    })),
      (z[15] = Be),
      (z[16] = Fo),
      (z[17] = Ro),
      (z[18] = Ke));
  else Ke = z[18];
  let Nt;
  if (z[19] !== Ee || z[20] !== Me || z[21] !== Ke)
    ((Nt = r(o, { children: [Ee, Kt, Me, Ke] })),
      (z[19] = Ee),
      (z[20] = Me),
      (z[21] = Ke),
      (z[22] = Nt));
  else Nt = z[22];
  return Nt;
}
async function kn(a, c) {
  if (jn()) return e(Oe, { onExit: a });
  return e(Ae, {
    onExit: a,
    commands: c.options.commands,
    bytesPerToken: bytesPerTokenForModel(c.options.mainLoopModel),
  });
}
export { kn as call };
