// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 240 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { lit as S } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { formatTokens } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { useAppStateSelector } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import "../../01-核心基础设施/共享小工具-未细化/feature-flag-version.js";
import { useMainLoopModel } from "../../01-核心基础设施/共享小工具-未细化/main-loop-model.js";
import { isAutoCompactEnabled, resolveAutoCompactWindow, isUserConfiguredWindowSource } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { applyAutoCompactWindow } from "./chunk-5ed8c210.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function Mo(rt) {
  return rt.autoCompactWindow;
}
var y = 1e5,
  v = 1e5,
  b = 1e6,
  c = 0;
function uo(No) {
  let n = _(61),
    { onDone: g, context: no } = No,
    ro = useAppStateSelector(Mo),
    co = useMainLoopModel(),
    q,
    h,
    Q,
    w,
    a,
    Z,
    vo,
    P;
  if (n[0] !== ro || n[1] !== co) {
    ({ window: P, configured: h, source: a } = resolveAutoCompactWindow(co, ro));
    let z;
    if (n[10] === MEMO_CACHE_SENTINEL) ((z = isAutoCompactEnabled()), (n[10] = z));
    else z = n[10];
    Q = z;
    q = h > P;
    w = a === "env";
    Z =
      a === "env"
        ? "from CLAUDE_CODE_AUTO_COMPACT_WINDOW"
        : a === "settings"
          ? "from settings"
          : a === "unknown-model"
            ? "default for an unrecognized model"
            : a === "model-default"
              ? "default for this model"
              : "auto";
    vo = !isUserConfiguredWindowSource(a) ? c : Math.min(b, Math.max(v, Math.round(h / y) * y));
    ((n[0] = ro),
      (n[1] = co),
      (n[2] = q),
      (n[3] = h),
      (n[4] = Q),
      (n[5] = w),
      (n[6] = a),
      (n[7] = Z),
      (n[8] = vo),
      (n[9] = P));
  } else
    ((q = n[2]),
      (h = n[3]),
      (Q = n[4]),
      (w = n[5]),
      (a = n[6]),
      (Z = n[7]),
      (vo = n[8]),
      (P = n[9]));
  let ot = vo,
    [s, tt] = d(ot),
    [ao, et] = d(!1),
    z;
  if (n[11] !== w)
    ((z = function u($o) {
      if (w) {
        return;
      }
      (et(!0),
        tt((bo) => {
          if (bo === c) {
            return $o > 0 ? v : b;
          }
          let io = bo + $o * y;
          if (io < v) {
            return c;
          }
          if (io > b) {
            return c;
          }
          return io;
        }));
    }),
      (n[11] = w),
      (n[12] = z));
  else z = n[12];
  let u = z,
    Jo;
  if (n[13] !== q || n[14] !== P)
    ((Jo = q ? ` \xB7 capped to ${formatTokens(P)} by model` : ""),
      (n[13] = q),
      (n[14] = P),
      (n[15] = Jo));
  else Jo = n[15];
  let O = Jo,
    ko;
  if (n[16] !== O || n[17] !== h || n[18] !== a || n[19] !== Z)
    ((ko =
      a === "auto"
        ? "auto"
        : a === "experiment" || a === "clientdata"
          ? `auto (${formatTokens(h)} tokens)${O}`
          : `${formatTokens(h)} tokens (${Z})${O}`),
      (n[16] = O),
      (n[17] = h),
      (n[18] = a),
      (n[19] = Z),
      (n[20] = ko));
  else ko = n[20];
  let x = ko,
    G = C(!1),
    Do;
  if (n[21] !== ao || n[22] !== no || n[23] !== x || n[24] !== g || n[25] !== s)
    ((Do = function M() {
      if (G.current) {
        return;
      }
      if (!ao) {
        ((G.current = !0), g(`Auto-compact window unchanged: ${x}`));
        return;
      }
      G.current = !0;
      let nt = s === c ? "auto" : String(s);
      applyAutoCompactWindow(nt, no).then(g);
    }),
      (n[21] = ao),
      (n[22] = no),
      (n[23] = x),
      (n[24] = g),
      (n[25] = s),
      (n[26] = Do));
  else Do = n[26];
  let M = Do,
    H,
    K;
  if (n[27] !== u)
    ((H = () => u(1)),
      (K = () => u(-1)),
      (n[27] = u),
      (n[28] = H),
      (n[29] = K));
  else ((H = n[28]), (K = n[29]));
  let Lo;
  if (n[30] !== M || n[31] !== H || n[32] !== K)
    ((Lo = { "select:previous": H, "select:next": K, "select:accept": M }),
      (n[30] = M),
      (n[31] = H),
      (n[32] = K),
      (n[33] = Lo));
  else Lo = n[33];
  let Ro;
  if (n[34] === MEMO_CACHE_SENTINEL) ((Ro = { context: "Select" }), (n[34] = Ro));
  else Ro = n[34];
  useKeybindings(Lo, Ro);
  let Xo;
  if (n[35] !== u)
    ((Xo = { "tabs:next": () => u(1), "tabs:previous": () => u(-1) }),
      (n[35] = u),
      (n[36] = Xo));
  else Xo = n[36];
  let _o;
  if (n[37] === MEMO_CACHE_SENTINEL) ((_o = { context: "Tabs" }), (n[37] = _o));
  else _o = n[37];
  useKeybindings(Xo, _o);
  let Ao;
  if (n[38] !== s)
    ((Ao = s === c ? "auto" : `${formatTokens(s)} tokens`), (n[38] = s), (n[39] = Ao));
  else Ao = n[39];
  let so = Ao;
  const mo = `Current setting: ${x}`;
  let W;
  if (n[40] !== x || n[41] !== g)
    ((W = () => {
      if (G.current) {
        return;
      }
      ((G.current = !0), g(`Auto-compact window unchanged: ${x}`));
    }),
      (n[40] = x),
      (n[41] = g),
      (n[42] = W));
  else W = n[42];
  let Bo;
  if (n[43] === MEMO_CACHE_SENTINEL)
    ((Bo = e(t, {
      dimColor: !0,
      children: r(DotSeparatedList, {
        children: [
          e(KeybindingHint, { chord: ["up", "down"], action: "change" }),
          e(KeybindingHint, { chord: "enter", action: "apply" }),
          e(KeybindingHint, { chord: "escape", action: "cancel" }),
        ],
      }),
    })),
      (n[43] = Bo));
  else Bo = n[43];
  let Po;
  if (n[44] === MEMO_CACHE_SENTINEL)
    ((Po = e(t, {
      children:
        "This command configures when auto-compaction happens. The actual threshold is the minimum of this setting and your model's maximum context window.",
    })),
      (n[44] = Po));
  else Po = n[44];
  let zo;
  if (n[45] === MEMO_CACHE_SENTINEL)
    ((zo = r(t, {
      children: [
        "The auto setting picks a window tuned for your model and is",
        " ",
        e(t, { bold: !0, children: "strongly recommended" }),
        " for the best cost and performance. You can override it below.",
      ],
    })),
      (n[45] = zo));
  else zo = n[45];
  let T;
  if (n[46] !== Q)
    ((T =
      !Q &&
      e(t, {
        color: "warning",
        children: "Auto-compact is currently disabled (see /config)",
      })),
      (n[46] = Q),
      (n[47] = T));
  else T = n[47];
  let E;
  if (n[48] !== s)
    ((E =
      s !== c &&
      e(t, {
        color: "warning",
        children:
          "Overriding auto may result in high token usage, especially when resuming long sessions.",
      })),
      (n[48] = s),
      (n[49] = E));
  else E = n[49];
  let I;
  if (n[50] !== so || n[51] !== w)
    ((I = w
      ? e(t, {
          color: "warning",
          children:
            "CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting here.",
        })
      : r(o, {
          children: [
            e(t, { children: "Select auto-compact window: " }),
            e(t, { bold: !0, color: "suggestion", children: so }),
          ],
        })),
      (n[50] = so),
      (n[51] = w),
      (n[52] = I));
  else I = n[52];
  let N;
  if (n[53] !== T || n[54] !== E || n[55] !== I)
    ((N = r(o, {
      flexDirection: "column",
      gap: 1,
      children: [Po, zo, T, E, I],
    })),
      (n[53] = T),
      (n[54] = E),
      (n[55] = I),
      (n[56] = N));
  else N = n[56];
  let Go;
  if (n[57] !== mo || n[58] !== W || n[59] !== N)
    ((Go = e(de, {
      title: "Auto-compact window",
      subtitle: mo,
      onCancel: W,
      inputGuide: Bo,
      children: N,
    })),
      (n[57] = mo),
      (n[58] = W),
      (n[59] = N),
      (n[60] = Go));
  else Go = n[60];
  return Go;
}
var Eo = async (l, L, V) => {
  let R = V?.trim() || "";
  if (R) {
    let X = await applyAutoCompactWindow(R, L);
    return (l(X), null);
  }
  return (
    logEvent("tengu_autocompact_dialog_opened", { source: S("dialog") }),
    e(uo, { onDone: l, context: L })
  );
};
export { Eo as call };
