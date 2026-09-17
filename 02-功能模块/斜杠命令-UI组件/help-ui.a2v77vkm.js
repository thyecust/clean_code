// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 251 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { o, t, ct } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { truncate } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { useKeybindingDisplayText } from "../../01-核心基础设施/共享小工具-未细化/use-keybinding-display-text.js";
import { useGlobalExitKeybinding } from "../../01-核心基础设施/共享小工具-未细化/exit-keybinding-hooks.js";
import { Sk, formatDescriptionWithSource } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { useVirtualScrollViewportSize } from "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-state.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import "../../03-入口与运行时/会话UI(REPL)/scroll-box.js";
import { qp, ss, Jd } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { pHe } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tfspgges.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import { Qr } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { V, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function xo(Wo, Xo) {
  return Wo.name.localeCompare(Xo.name);
}
function f(Io) {
  let mo = _(14),
    {
      commands: g,
      maxHeight: Uo,
      columns: Jo,
      title: j,
      onCancel: oo,
      emptyMessage: W,
    } = Io,
    { headerFocused: eo, focusHeader: to } = Jd(),
    O = Math.max(1, Jo - 10),
    no = Math.max(1, Math.floor((Uo - 10) / 2)),
    Co;
  if (mo[0] !== g || mo[1] !== O) {
    let yo = new Set();
    let w;
    if (mo[3] !== O)
      ((w = (so) => ({
        label: `/${so.name}`,
        value: so.name,
        description: truncate(formatDescriptionWithSource(so), O, !0),
      })),
        (mo[3] = O),
        (mo[4] = w));
    else w = mo[4];
    Co = g
      .filter((go) => {
        if (yo.has(go.name)) {
          return !1;
        }
        return (yo.add(go.name), !0);
      })
      .sort(xo)
      .map(w);
    ((mo[0] = g), (mo[1] = O), (mo[2] = Co));
  } else Co = mo[2];
  let ao = Co,
    w;
  if (
    mo[5] !== g.length ||
    mo[6] !== W ||
    mo[7] !== to ||
    mo[8] !== eo ||
    mo[9] !== oo ||
    mo[10] !== ao ||
    mo[11] !== j ||
    mo[12] !== no
  )
    ((w = e(o, {
      flexDirection: "column",
      paddingY: 1,
      children:
        g.length === 0 && W
          ? e(EmptyStateMessage, { children: W })
          : r(N, {
              children: [
                e(t, { children: j }),
                e(o, {
                  marginTop: 1,
                  children: e(ve, {
                    options: ao,
                    visibleOptionCount: no,
                    onCancel: oo,
                    disableSelection: !0,
                    hideIndexes: !0,
                    layout: "compact-vertical",
                    onUpFromFirstItem: to,
                    isDisabled: eo,
                  }),
                }),
              ],
            }),
    })),
      (mo[5] = g.length),
      (mo[6] = W),
      (mo[7] = to),
      (mo[8] = eo),
      (mo[9] = oo),
      (mo[10] = ao),
      (mo[11] = j),
      (mo[12] = no),
      (mo[13] = w));
  else w = mo[13];
  return w;
}
var lo = 44;
function D() {
  let X = _(8),
    { rows: Qo } = useTerminalSize(),
    v = Qo < lo;
  const io = v ? 0 : 1,
    ro = v ? 0 : 1;
  let bo;
  if (X[0] === MEMO_CACHE_SENTINEL)
    ((bo = e(o, {
      flexShrink: 0,
      children: e(t, {
        children:
          "Claude understands your codebase, makes edits with your permission, and executes commands \u2014 right from your terminal.",
      }),
    })),
      (X[0] = bo));
  else bo = X[0];
  let q;
  if (X[1] !== v)
    ((q =
      !v &&
      e(o, {
        children: r(t, {
          dimColor: !0,
          children: [
            "New here? Run ",
            e(t, { color: "suggestion", children: "/powerup" }),
            " to learn the features most people miss.",
          ],
        }),
      })),
      (X[1] = v),
      (X[2] = q));
  else q = X[2];
  let So;
  if (X[3] === MEMO_CACHE_SENTINEL)
    ((So = r(o, {
      flexDirection: "column",
      children: [
        e(o, {
          flexShrink: 0,
          children: e(t, { bold: !0, children: "Shortcuts" }),
        }),
        e(pHe, { gap: 2, fixedWidth: !0 }),
      ],
    })),
      (X[3] = So));
  else So = X[3];
  let No;
  if (X[4] !== io || X[5] !== ro || X[6] !== q)
    ((No = r(o, {
      flexDirection: "column",
      paddingY: io,
      gap: ro,
      children: [bo, q, So],
    })),
      (X[4] = io),
      (X[5] = ro),
      (X[6] = q),
      (X[7] = No));
  else No = X[7];
  return No;
}
function Mo(fo) {
  return (
    fo.type !== "prompt" || fo.source === "builtin" || fo.source === "bundled"
  );
}
var ho = 44;
function Q(he) {
  let n = _(41),
    { onClose: co, commands: x } = he,
    z = useTerminalSize(),
    { rows: Ce, columns: c } = useVirtualScrollViewportSize(z),
    d = Ce,
    To;
  if (n[0] !== z.rows)
    ((To = z.rows >= ho && Sk()), (n[0] = z.rows), (n[1] = To));
  else To = n[1];
  let po = To,
    Ho;
  if (n[2] !== co)
    ((Ho = () => co("Help dialog dismissed", { display: "system" })),
      (n[2] = co),
      (n[3] = Ho));
  else Ho = n[3];
  let l = Ho,
    Ro;
  if (n[4] === MEMO_CACHE_SENTINEL) ((Ro = { context: "Help" }), (n[4] = Ro));
  else Ro = n[4];
  useKeybinding("help:dismiss", l, Ro);
  let b = useGlobalExitKeybinding(l),
    uo = useKeybindingDisplayText("help:dismiss", "Help", "esc"),
    ko = Mo,
    Oo;
  if (n[5] !== x) {
    let M;
    if (n[7] === MEMO_CACHE_SENTINEL) ((M = (wo) => ko(wo) && !wo.isHidden), (n[7] = M));
    else M = n[7];
    Oo = x.filter(M);
    ((n[5] = x), (n[6] = Oo));
  } else Oo = n[6];
  let B = Oo,
    M;
  if (n[8] !== x) {
    let P;
    if (n[10] === MEMO_CACHE_SENTINEL) ((P = (vo) => !ko(vo) && !vo.isHidden), (n[10] = P));
    else P = n[10];
    M = x.filter(P);
    ((n[8] = x), (n[9] = M));
  } else M = n[9];
  let E = M,
    P;
  if (n[11] === MEMO_CACHE_SENTINEL)
    ((P = e(
      ss,
      { id: "general", title: "General", children: e(D, {}) },
      "general",
    )),
      (n[11] = P));
  else P = n[11];
  let S;
  if (n[12] !== B || n[13] !== l || n[14] !== c || n[15] !== E || n[16] !== d) {
    S = [P];
    let h;
    if (n[18] !== B || n[19] !== l || n[20] !== c || n[21] !== d)
      ((h = e(
        ss,
        {
          id: "commands",
          title: "Commands",
          children: e(f, {
            commands: B,
            maxHeight: d,
            columns: c,
            title: "Browse default commands",
            onCancel: l,
          }),
        },
        "commands",
      )),
        (n[18] = B),
        (n[19] = l),
        (n[20] = c),
        (n[21] = d),
        (n[22] = h));
    else h = n[22];
    S.push(h);
    let L;
    if (n[23] !== l || n[24] !== c || n[25] !== E || n[26] !== d)
      ((L = e(
        ss,
        {
          id: "custom",
          title: "Custom commands",
          children: e(f, {
            commands: E,
            maxHeight: d,
            columns: c,
            title: "Browse custom commands",
            emptyMessage: "No custom commands found",
            onCancel: l,
          }),
        },
        "custom",
      )),
        (n[23] = l),
        (n[24] = c),
        (n[25] = E),
        (n[26] = d),
        (n[27] = L));
    else L = n[27];
    S.push(L);
    ((n[12] = B),
      (n[13] = l),
      (n[14] = c),
      (n[15] = E),
      (n[16] = d),
      (n[17] = S));
  } else S = n[17];
  let h;
  if (n[28] !== S)
    ((h = e(qp, {
      title: "Help",
      color: "professionalBlue",
      defaultTab: "general",
      children: S,
    })),
      (n[28] = S),
      (n[29] = h));
  else h = n[29];
  let L;
  if (n[30] === MEMO_CACHE_SENTINEL)
    ((L = e(o, {
      marginTop: 1,
      flexShrink: 0,
      children: r(t, {
        children: [
          "For more help:",
          " ",
          e(ct, { url: "https://code.claude.com/docs/en/overview" }),
        ],
      }),
    })),
      (n[30] = L));
  else L = n[30];
  let G;
  if (n[31] !== po)
    ((G =
      po &&
      e(o, {
        marginTop: 1,
        flexShrink: 0,
        children: e(t, {
          dimColor: !0,
          children:
            "Something else? Use /feedback to report bugs or request features.",
        }),
      })),
      (n[31] = po),
      (n[32] = G));
  else G = n[32];
  let K;
  if (n[33] !== uo || n[34] !== b.keyName || n[35] !== b.pending)
    ((K = e(o, {
      marginTop: 1,
      flexShrink: 0,
      children: e(t, {
        dimColor: !0,
        children: b.pending
          ? r(N, { children: ["Press ", b.keyName, " again to exit"] })
          : r(t, { italic: !0, children: [uo, " to cancel"] }),
      }),
    })),
      (n[33] = uo),
      (n[34] = b.keyName),
      (n[35] = b.pending),
      (n[36] = K));
  else K = n[36];
  let Do;
  if (n[37] !== K || n[38] !== h || n[39] !== G)
    ((Do = e(o, {
      flexDirection: "column",
      children: r(Qr, { color: "professionalBlue", children: [h, L, G, K] }),
    })),
      (n[37] = K),
      (n[38] = h),
      (n[39] = G),
      (n[40] = Do));
  else Do = n[40];
  return Do;
}
var Te = async (a, { options: { commands: m } }) =>
  e(Q, { commands: m, onClose: a });
export { Te as call };
