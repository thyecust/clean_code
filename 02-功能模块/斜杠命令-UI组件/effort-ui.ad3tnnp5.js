// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 243 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { repeatString } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { HELP_FLAGS } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { zC } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { jn } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { te } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import {
  im,
  GG,
  FN,
  ib,
  sA,
  HJe,
  gve,
  Anr,
  $N,
  VH,
  UN,
  KH,
  tse,
  NT,
} from "../权限系统/chunk-t3b7pg2x.js";
import { isPromptCacheWarm } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { gw } from "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t, tn, bs } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useAppStateSelector, useSetAppState } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { useHasVirtualScrollViewport } from "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-state.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { K1n, g6e, Jot } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { X8 } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { formatKeybindingChord, KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import { WA, Vx, Sv, Qr } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/feature-flag-version.js";
import { useMainLoopModel } from "../../01-核心基础设施/共享小工具-未细化/main-loop-model.js";
import { formatEffortUsageText, parseEffortArgument, formatEffortStatus, runEffortCommand } from "./effort-level.js";
import { ModelOrEffortSwitchDialog } from "../../01-核心基础设施/共享小工具-未细化/switch-confirm-dialog.js";
import { TitleWithSubtitle } from "../../01-核心基础设施/共享小工具-未细化/title-with-subtitle.js";
import { InputGuide } from "../../01-核心基础设施/共享小工具-未细化/input-guide.js";
import { qf } from "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { NO_ANIMATION_INDEX, useReducedMotion } from "../../01-核心基础设施/共享小工具-未细化/reduced-motion.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/chunk-qgx6a5a0.js";
import { Nl, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
function Cr(hl) {
  return hl.ultracode;
}
function Nr(xl) {
  return xl.cacheMissAckedAtOutputTokens;
}
function $r(_l) {
  return _l.cacheMissAckedAtOutputTokens;
}
function Er(Hl) {
  return Hl.ultracode;
}
function Pr(Bl) {
  return Math.max(0, Bl - 1);
}
function Ar(ql) {
  return ql.cacheMissAckedAtOutputTokens;
}
function Ir(Kl) {
  return Kl.ultracode;
}
function fn(ul) {
  let { onDone: dl } = ul,
    fl = qf(),
    ml = useAppStateSelector(Cr),
    gl = useMainLoopModel(),
    { message: pl } = formatEffortStatus(fl, gl, ml);
  return (dl(pl), null);
}
async function Q(n, c, l, u, f = !0) {
  let b = await runEffortCommand(n, c, f, u);
  l(b.message);
}
function mn(bl) {
  let Ee = _(24),
    { args: be, getMessages: Eo, onDone: ve, storageV5: vt } = bl,
    xe = qf(),
    Po = useAppStateSelector(Nr),
    $e = useMainLoopModel(),
    xt = useSetAppState(),
    Mn;
  if (Ee[0] !== be || Ee[1] !== $e)
    ((Mn = parseEffortArgument(be, $e)), (Ee[0] = be), (Ee[1] = $e), (Ee[2] = Mn));
  else Mn = Ee[2];
  let B = Mn,
    wn;
  if (
    Ee[3] !== Po ||
    Ee[4] !== xe ||
    Ee[5] !== Eo ||
    Ee[6] !== $e ||
    Ee[7] !== B
  )
    ((wn = () => B !== null && tse(B.value, xe, $e, Po, isPromptCacheWarm(Eo()))),
      (Ee[3] = Po),
      (Ee[4] = xe),
      (Ee[5] = Eo),
      (Ee[6] = $e),
      (Ee[7] = B),
      (Ee[8] = wn));
  else wn = Ee[8];
  let [et, vl] = d(wn),
    Sn,
    kn;
  if (
    Ee[9] !== be ||
    Ee[10] !== ve ||
    Ee[11] !== et ||
    Ee[12] !== xt ||
    Ee[13] !== vt ||
    Ee[14] !== B
  )
    ((Sn = () => {
      if (et && B !== null) {
        return;
      }
      Q(be, xt, ve, vt);
    }),
      (kn = [et, B, be, xt, ve, vt]),
      (Ee[9] = be),
      (Ee[10] = ve),
      (Ee[11] = et),
      (Ee[12] = xt),
      (Ee[13] = vt),
      (Ee[14] = B),
      (Ee[15] = Sn),
      (Ee[16] = kn));
  else ((Sn = Ee[15]), (kn = Ee[16]));
  if ((E(Sn, kn), et && B !== null)) {
    let Cn;
    if (Ee[17] === MEMO_CACHE_SENTINEL) ((Cn = () => vl(!1)), (Ee[17] = Cn));
    else Cn = Ee[17];
    let yt;
    if (Ee[18] !== xe || Ee[19] !== ve)
      ((yt = () =>
        ve(`Kept effort level as ${xe !== void 0 ? $N(xe) : "auto"}`)),
        (Ee[18] = xe),
        (Ee[19] = ve),
        (Ee[20] = yt));
    else yt = Ee[20];
    let Nn;
    if (Ee[21] !== yt || Ee[22] !== B.value)
      ((Nn = e(ModelOrEffortSwitchDialog, {
        kind: "effort",
        model: null,
        effort: B.value,
        onConfirm: Cn,
        onCancel: yt,
      })),
        (Ee[21] = yt),
        (Ee[22] = B.value),
        (Ee[23] = Nn));
    else Nn = Ee[23];
    return Nn;
  }
  return null;
}
var br = 42,
  vr = 14,
  xr = [1, 10, 20, 30, 40],
  yr = [5, 5, 5, 6],
  lo = [
    { value: "low", label: "low", color: "warning" },
    { value: "medium", label: "medium", color: "success" },
    { value: "high", label: "high", color: "permission" },
    { value: "xhigh", label: "xhigh", color: "autoAccept-shimmer" },
    { value: "max", label: "max", color: "rainbow-animated" },
  ],
  Mr = 3,
  wr = "Higher effort levels are restricted by your organization.";
function Sr(n) {
  let c = Math.min(Math.max(n, 1), lo.length),
    l = lo.slice(0, c),
    u = yr.slice(0, c - 1),
    f = xr.slice(0, c);
  if (c === lo.length)
    return { levels: l, width: br, trianglePositions: f, spacers: u };
  let b = so(l, u),
    m = Math.max(b[c - 1] + l[c - 1].label.length, vr);
  return { levels: l, width: m, trianglePositions: f, spacers: u };
}
function so(n, c) {
  return n.map((l, u) =>
    n.slice(0, u).reduce((f, b, m) => f + b.label.length + c[m], 0),
  );
}
function co(n) {
  return n !== void 0 && K1n() && g6e(n, KH(n)) !== null;
}
function io(n, c) {
  let l = KH(n);
  if (c === "max" && FN(n)) {
    let f = g6e(n, "max");
    return f === null ? GG : `${GG} (${Jot(f)})`;
  }
  if (c === l)
    return gve(n) === null
      ? "The default effort for this model"
      : "The default effort for this model, set by your organization";
  let u = g6e(n, c);
  return u === null ? "" : `${Jot(u)} the estimated cost of ${l} (the default)`;
}
function getSliderGeometry(n) {
  let c = n ? HJe(n) : null,
    l = Sr(c ? im.indexOf(c) + 1 : im.length),
    u = n && Anr(n) ? wr : void 0,
    f =
      n && gve(n) !== null
        ? `Your organization's default effort for this model is ${KH(n)}.`
        : void 0,
    b = [u, f].filter((i) => i !== void 0),
    m = b.length > 0 ? b.join(" ") : void 0;
  if (ib(n)) {
    let O = l.width + 3,
      L = 17,
      X = [
        ...l.levels,
        { value: "ultracode", label: "ultracode", color: "violet-ripple" },
      ],
      pe = O + Math.floor(4),
      k = [...l.spacers, pe - l.width],
      se = so(X, k);
    return {
      levels: X,
      width: O + 17,
      trianglePositions: [...l.trianglePositions, O + Math.floor(8.5)],
      labelStarts: se,
      spacers: k,
      trackChars: "\u2500".repeat(l.width + 1) + "\u2506" + "\u2500".repeat(18),
      accentStart: l.width + 2,
      sublabel: { text: "xhigh + workflows", start: O },
      orgNote: m,
    };
  }
  let w = so(l.levels, l.spacers);
  return {
    levels: l.levels,
    width: l.width,
    trianglePositions: l.trianglePositions,
    labelStarts: w,
    spacers: l.spacers,
    trackChars: "\u2500".repeat(l.width),
    orgNote: m,
  };
}
var ao = "#d0b4ff";
function uo(yl) {
  let Pe = _(13),
    { level: ie, selected: Ml } = yl,
    A = ie.label;
  if (!Ml) {
    if (ie.color === "violet-ripple") {
      let R;
      if (Pe[0] !== A)
        ((R = e(t, { color: le, children: A })), (Pe[0] = A), (Pe[1] = R));
      else R = Pe[1];
      return R;
    }
    let R;
    if (Pe[2] !== A)
      ((R = e(t, { dimColor: !0, children: A })), (Pe[2] = A), (Pe[3] = R));
    else R = Pe[3];
    return R;
  }
  if (ie.color === "violet-ripple") {
    let R;
    if (Pe[4] !== A)
      ((R = e(t, { bold: !0, backgroundColor: qe, color: ke, children: A })),
        (Pe[4] = A),
        (Pe[5] = R));
    else R = Pe[5];
    return R;
  }
  if (ie.color === "rainbow-animated") {
    let R;
    if (Pe[6] !== A) ((R = e(fo, { text: A })), (Pe[6] = A), (Pe[7] = R));
    else R = Pe[7];
    return R;
  }
  if (ie.color === "autoAccept-shimmer") {
    let R;
    if (Pe[8] !== A) ((R = e(mo, { text: A })), (Pe[8] = A), (Pe[9] = R));
    else R = Pe[9];
    return R;
  }
  let R;
  if (Pe[10] !== ie.color || Pe[11] !== A)
    ((R = e(t, { bold: !0, color: ie.color, children: A })),
      (Pe[10] = ie.color),
      (Pe[11] = A),
      (Pe[12] = R));
  else R = Pe[12];
  return R;
}
function fo(wl) {
  let $n = _(5),
    { text: Ao } = wl,
    Sl = useReducedMotion(),
    [, kl] = bs(Sl ? null : 100),
    Io = Math.floor(kl / 100),
    Mt;
  if ($n[0] !== Ao) ((Mt = [...Ao]), ($n[0] = Ao), ($n[1] = Mt));
  else Mt = $n[1];
  let En;
  if ($n[2] !== Io || $n[3] !== Mt)
    ((En = e(t, {
      bold: !0,
      children: Mt.map((Cl, Pn) =>
        e(t, { color: zC(Pn + Io), children: Cl }, Pn),
      ),
    })),
      ($n[2] = Io),
      ($n[3] = Mt),
      ($n[4] = En));
  else En = $n[4];
  return En;
}
var Zo = 80,
  Uo = 0.03,
  it = 20,
  en = -2,
  on = -1,
  nn = 0,
  at = 1,
  ee = 2,
  rn = 3,
  ln = 4,
  sn = 5,
  ke = "rgb(255,255,255)",
  ut = ao,
  cn = [62, 22, 118],
  kr = [140, 80, 240],
  RIPPLE_RAMP = Array.from({ length: 8 }, (n, c) => {
    let l = c / 7,
      u = (f) => Math.round(cn[f] + (kr[f] - cn[f]) * l);
    return `rgb(${u(0)},${u(1)},${u(2)})`;
  }),
  qe = RIPPLE_RAMP.at(-1),
  le = qe;
function rippleDistance(n, c, l) {
  let u = n - l,
    f = (c - ee) * 2;
  return Math.sqrt(u * u + f * f);
}
function rippleLevel(n, c) {
  if (n > c.travel) return null;
  let l = (((n - c.travel) % it) + it) % it,
    u = (1 + Math.cos((2 * Math.PI * l) / it)) / 2;
  return Math.min(RIPPLE_RAMP.length - 1, Math.round(u * (RIPPLE_RAMP.length - 1)));
}
function UltraRippleText($l) {
  let An = _(10),
    {
      text: Oo,
      col: Lo,
      row: Ro,
      ripple: wt,
      dimColor: Do,
      bold: St,
      coveredColor: Go,
    } = $l,
    Ae;
  if (An[0] !== Lo || An[1] !== wt || An[2] !== Ro || An[3] !== Oo) {
    Ae = [];
    let In = 0;
    for (const On of Oo) {
      let Ln = rippleLevel(rippleDistance(Lo + In, Ro, wt.originCol), wt);
      let Vo = Ae.at(-1);
      if (Vo && Vo.level === Ln) Vo.text = Vo.text + On;
      else Ae.push({ text: On, level: Ln });
      In++;
    }
    ((An[0] = Lo), (An[1] = wt), (An[2] = Ro), (An[3] = Oo), (An[4] = Ae));
  } else Ae = An[4];
  let Rn;
  if (An[5] !== St || An[6] !== Go || An[7] !== Do || An[8] !== Ae)
    ((Rn = e(t, {
      children: Ae.map((kt, Dn) => {
        if (kt.level === null) {
          return e(t, { dimColor: Do, bold: St, children: kt.text }, Dn);
        }
        return e(
          t,
          {
            backgroundColor: RIPPLE_RAMP[kt.level],
            color: Go ?? ke,
            bold: St,
            children: kt.text,
          },
          Dn,
        );
      }),
    })),
      (An[5] = St),
      (An[6] = Go),
      (An[7] = Do),
      (An[8] = Ae),
      (An[9] = Rn));
  else Rn = An[9];
  return Rn;
}
function mo(El) {
  let Vn = _(5),
    { text: Ct } = El,
    Gn = useReducedMotion(),
    [, Pl] = bs(Gn ? null : 100),
    Al = Ct.length + 4,
    tt = Gn ? NO_ANIMATION_INDEX : Math.floor(Pl / 100) % Al,
    Nt;
  if (Vn[0] !== Ct) ((Nt = [...Ct]), (Vn[0] = Ct), (Vn[1] = Nt));
  else Nt = Vn[1];
  let Fn;
  if (Vn[2] !== tt || Vn[3] !== Nt)
    ((Fn = e(t, {
      bold: !0,
      children: Nt.map((Il, $t) => {
        let Tn = $t === tt;
        let Ol = $t === tt - 1 || $t === tt + 1;
        return e(
          t,
          { color: Tn ? ao : "autoAccept", bold: Tn || Ol, children: Il },
          $t,
        );
      }),
    })),
      (Vn[2] = tt),
      (Vn[3] = Nt),
      (Vn[4] = Fn));
  else Fn = Vn[4];
  return Fn;
}
function ft(n, c, l, u) {
  if (sA(n, c, l)) {
    let y = u.levels.findIndex((S) => S.value === "ultracode");
    if (y !== -1) return y;
  }
  let f = jn() ? void 0 : VH(),
    b = UN(n) ? void 0 : c,
    m = f === null ? void 0 : (f ?? b);
  if (m !== void 0) {
    let y = u.levels.findIndex((S) => S.value === m);
    if (y !== -1) return y;
  }
  let w = NT(n, m),
    i = u.levels.findIndex((y) => y.value === w);
  return i === -1 ? Mr : i;
}
function gn(Ie) {
  let Xn = _(4);
  if (tn()) {
    let ot;
    if (Xn[0] !== Ie) ((ot = e(po, { ...Ie })), (Xn[0] = Ie), (Xn[1] = ot));
    else ot = Xn[1];
    return ot;
  }
  let ot;
  if (Xn[2] !== Ie) ((ot = e(go, { ...Ie })), (Xn[2] = Ie), (Xn[3] = ot));
  else ot = Xn[3];
  return ot;
}
function go(Ll) {
  let g = _(170),
    { getMessages: Fo, onDone: oe, storageV5: Oe } = Ll,
    Le = qf(),
    To = useAppStateSelector($r),
    Xo = useAppStateSelector(Er),
    H = useMainLoopModel(),
    Re = useSetAppState(),
    _n;
  if (g[0] !== H) ((_n = getSliderGeometry(H)), (g[0] = H), (g[1] = _n));
  else _n = g[1];
  let s = _n,
    Hn;
  if (g[2] !== Le || g[3] !== s || g[4] !== H || g[5] !== Xo)
    ((Hn = ft(H, Le, Xo, s)),
      (g[2] = Le),
      (g[3] = s),
      (g[4] = H),
      (g[5] = Xo),
      (g[6] = Hn));
  else Hn = g[6];
  let Rl = Hn,
    [Dl, Bn] = d(Rl),
    I = Math.min(Dl, s.levels.length - 1),
    [Y, Jn] = d(null),
    { columns: Gl } = useTerminalSize(),
    Vl = useHasVirtualScrollViewport(),
    De = s.levels[I].value === "ultracode",
    nt = useReducedMotion(),
    [, _o] = bs(De && !nt && Y === null ? Zo : null),
    [Ho, zn] = d(null);
  if (!De || nt) {
    if (Ho !== null) zn(null);
  } else if (Ho === null) zn(_o);
  let Bo = De ? _o - (Ho ?? _o) : 0,
    qn;
  if (
    g[7] !== s.trianglePositions ||
    g[8] !== nt ||
    g[9] !== Bo ||
    g[10] !== I ||
    g[11] !== De
  )
    ((qn =
      De && !nt
        ? { travel: Bo * Uo, originCol: s.trianglePositions[I] }
        : null),
      (g[7] = s.trianglePositions),
      (g[8] = nt),
      (g[9] = Bo),
      (g[10] = I),
      (g[11] = De),
      (g[12] = qn));
  else qn = g[12];
  let a = qn,
    Kn,
    Yn,
    Qn;
  if (g[13] === MEMO_CACHE_SENTINEL)
    ((Kn = formatKeybindingChord([gw("left"), gw("right")])),
      (Yn = formatKeybindingChord([gw("enter")])),
      (Qn = formatKeybindingChord([gw("escape")])),
      (g[13] = Kn),
      (g[14] = Yn),
      (g[15] = Qn));
  else ((Kn = g[13]), (Yn = g[14]), (Qn = g[15]));
  let Wn = `${Kn} to adjust \xB7 ${Yn} to confirm \xB7 s for this session only \xB7 ${Qn} to cancel`,
    Ge = C(!1),
    Zn;
  if (
    g[16] !== To ||
    g[17] !== Le ||
    g[18] !== s.levels ||
    g[19] !== Fo ||
    g[20] !== H ||
    g[21] !== oe ||
    g[22] !== I ||
    g[23] !== Re ||
    g[24] !== Oe
  )
    ((Zn = function ae(Un) {
      if (Ge.current) {
        return;
      }
      let Et = s.levels[I];
      let Fl = Et.value === "ultracode" ? "xhigh" : Et.value;
      if (tse(Fl, Le, H, To, isPromptCacheWarm(Fo()))) {
        Jn({ level: Et.value, persistAsDefault: Un });
        return;
      }
      ((Ge.current = !0), Q(Et.value, Re, oe, Oe, Un));
    }),
      (g[16] = To),
      (g[17] = Le),
      (g[18] = s.levels),
      (g[19] = Fo),
      (g[20] = H),
      (g[21] = oe),
      (g[22] = I),
      (g[23] = Re),
      (g[24] = Oe),
      (g[25] = Zn));
  else Zn = g[25];
  let ae = Zn,
    er;
  if (g[26] !== s.levels.length || g[27] !== oe || g[28] !== ae)
    ((er = function rt(de) {
      if (de.key === "left") (de.preventDefault(), Bn(Pr));
      else if (de.key === "right")
        (de.preventDefault(),
          Bn((Tl) => Math.min(s.levels.length - 1, Tl + 1)));
      else if (de.key === "return") (de.preventDefault(), ae(!0));
      else if (de.key === "escape") {
        if ((de.preventDefault(), Ge.current)) {
          return;
        }
        ((Ge.current = !0), oe("Cancelled"));
      }
    }),
      (g[26] = s.levels.length),
      (g[27] = oe),
      (g[28] = ae),
      (g[29] = er));
  else er = g[29];
  let rt = er,
    tr;
  if (g[30] !== ae)
    ((tr = { "effortSlider:thisSessionOnly": () => ae(!1) }),
      (g[30] = ae),
      (g[31] = tr));
  else tr = g[31];
  const Jo = Y === null;
  let or;
  if (g[32] !== Jo)
    ((or = { context: "EffortSlider", isActive: Jo }),
      (g[32] = Jo),
      (g[33] = or));
  else or = g[33];
  if ((useKeybindings(tr, or), Y !== null)) {
    const Ve = Y.level === "ultracode" ? "xhigh" : Y.level;
    let fe;
    if (
      g[34] !== oe ||
      g[35] !== Y.level ||
      g[36] !== Y.persistAsDefault ||
      g[37] !== Re ||
      g[38] !== Oe
    )
      ((fe = () => {
        if (Ge.current) {
          return;
        }
        ((Ge.current = !0), Q(Y.level, Re, oe, Oe, Y.persistAsDefault));
      }),
        (g[34] = oe),
        (g[35] = Y.level),
        (g[36] = Y.persistAsDefault),
        (g[37] = Re),
        (g[38] = Oe),
        (g[39] = fe));
    else fe = g[39];
    let lt;
    if (g[40] === MEMO_CACHE_SENTINEL) ((lt = () => Jn(null)), (g[40] = lt));
    else lt = g[40];
    let Pt;
    if (g[41] !== Ve || g[42] !== fe)
      ((Pt = e(ModelOrEffortSwitchDialog, {
        kind: "effort",
        model: null,
        effort: Ve,
        onConfirm: fe,
        onCancel: lt,
      })),
        (g[41] = Ve),
        (g[42] = fe),
        (g[43] = Pt));
    else Pt = g[43];
    return Pt;
  }
  let ne = s.trianglePositions[I],
    Fe,
    At,
    me,
    st,
    Ot,
    Lt,
    Ve;
  if (g[44] !== s.accentStart || g[45] !== s.trackChars || g[46] !== ne) {
    me = s.trackChars.slice(0, ne);
    Fe = s.trackChars.slice(ne + 1);
    let Rt = s.accentStart ?? s.trackChars.length;
    Ot = me.slice(0, Math.min(me.length, Rt));
    st = me.slice(Math.min(me.length, Rt));
    Lt = ne >= Rt;
    let nr = Math.max(0, Rt - ne - 1);
    At = Fe.slice(0, nr);
    Ve = Fe.slice(nr);
    ((g[44] = s.accentStart),
      (g[45] = s.trackChars),
      (g[46] = ne),
      (g[47] = Fe),
      (g[48] = At),
      (g[49] = me),
      (g[50] = st),
      (g[51] = Ot),
      (g[52] = Lt),
      (g[53] = Ve));
  } else
    ((Fe = g[47]),
      (At = g[48]),
      (me = g[49]),
      (st = g[50]),
      (Ot = g[51]),
      (Lt = g[52]),
      (Ve = g[53]));
  let Dt = Ve;
  const fe = s.width - 6 - 7;
  let lt;
  if (g[54] !== fe) ((lt = repeatString(" ", fe)), (g[54] = fe), (g[55] = lt));
  else lt = g[55];
  let Gt = lt;
  const Pt = s.labelStarts.at(-1);
  let rr;
  if (g[56] !== s.levels)
    ((rr = s.levels.at(-1)), (g[56] = s.levels), (g[57] = rr));
  else rr = g[57];
  let Vt = Pt + rr.label.length;
  const zo = s.width - Vt;
  let lr;
  if (g[58] !== zo) ((lr = repeatString(" ", zo)), (g[58] = zo), (g[59] = lr));
  else lr = g[59];
  let ct = lr,
    Ft = s.levels[I].value,
    sr;
  if (g[60] !== Ft || g[61] !== H || g[62] !== a)
    ((sr = a || !co(H) ? null : Ft === "ultracode" ? "" : io(H, Ft)),
      (g[60] = Ft),
      (g[61] = H),
      (g[62] = a),
      (g[63] = sr));
  else sr = g[63];
  let Tt = sr,
    cr;
  if (g[64] !== s.spacers)
    ((cr = (Xl) => " ".repeat(s.spacers[Xl])),
      (g[64] = s.spacers),
      (g[65] = cr));
  else cr = g[65];
  let Te = cr,
    W = Vl ? Vx + Sv : WA,
    G = Math.max(s.width, Gl),
    ir;
  if (g[66] !== W) ((ir = " ".repeat(W)), (g[66] = W), (g[67] = ir));
  else ir = g[67];
  let Xe = ir,
    h = Math.max(0, Math.floor((G - s.width) / 2)),
    ar;
  if (g[68] !== h) ((ar = " ".repeat(h)), (g[68] = h), (g[69] = ar));
  else ar = g[69];
  let J = ar,
    ur;
  if (g[70] !== G || g[71] !== s.width || g[72] !== h)
    ((ur = " ".repeat(Math.max(0, G - h - s.width))),
      (g[70] = G),
      (g[71] = s.width),
      (g[72] = h),
      (g[73] = ur));
  else ur = g[73];
  let z = ur;
  const jo = a ? -W : void 0,
    qo = a ? G : void 0;
  let Xt;
  if (g[74] !== Xe || g[75] !== G || g[76] !== W || g[77] !== a || g[78] !== h)
    ((Xt = a
      ? e(UltraRippleText, {
          text: `${Xe}Effort${" ".repeat(Math.max(0, G - W - 6))}`,
          col: -h,
          row: en,
          ripple: a,
        })
      : "Effort"),
      (g[74] = Xe),
      (g[75] = G),
      (g[76] = W),
      (g[77] = a),
      (g[78] = h),
      (g[79] = Xt));
  else Xt = g[79];
  let _t;
  if (g[80] !== Xt)
    ((_t = e(TitleWithSubtitle, { children: Xt })), (g[80] = Xt), (g[81] = _t));
  else _t = g[81];
  let Ht;
  if (g[82] !== G || g[83] !== a || g[84] !== h)
    ((Ht = a
      ? e(UltraRippleText, { text: " ".repeat(G), col: -h, row: on, ripple: a })
      : e(o, { height: 1 })),
      (g[82] = G),
      (g[83] = a),
      (g[84] = h),
      (g[85] = Ht));
  else Ht = g[85];
  let Bt;
  if (g[86] !== J || g[87] !== z || g[88] !== a || g[89] !== h || g[90] !== Gt)
    ((Bt = e(o, {
      children: a
        ? e(UltraRippleText, {
            text: `${J}Faster${Gt}Smarter${z}`,
            col: -h,
            row: nn,
            ripple: a,
          })
        : r(N, {
            children: [
              e(t, { children: "Faster" }),
              e(t, { children: Gt }),
              e(t, { children: "Smarter" }),
            ],
          }),
    })),
      (g[86] = J),
      (g[87] = z),
      (g[88] = a),
      (g[89] = h),
      (g[90] = Gt),
      (g[91] = Bt));
  else Bt = g[91];
  let Jt;
  if (
    g[92] !== Dt ||
    g[93] !== Fe ||
    g[94] !== At ||
    g[95] !== me ||
    g[96] !== st ||
    g[97] !== Ot ||
    g[98] !== J ||
    g[99] !== Lt ||
    g[100] !== z ||
    g[101] !== a ||
    g[102] !== h ||
    g[103] !== ne
  )
    ((Jt = e(o, {
      children: a
        ? r(N, {
            children: [
              e(UltraRippleText, {
                text: `${J}${me}`,
                col: -h,
                row: at,
                ripple: a,
                dimColor: !0,
                coveredColor: ut,
              }),
              e(t, {
                bold: !0,
                backgroundColor: qe,
                color: ke,
                children: "\u25B2",
              }),
              e(UltraRippleText, {
                text: `${Fe}${z}`,
                col: ne + 1,
                row: at,
                ripple: a,
                dimColor: !0,
                coveredColor: ut,
              }),
            ],
          })
        : r(N, {
            children: [
              e(t, { dimColor: !0, children: Ot }),
              st ? e(t, { color: le, children: st }) : null,
              e(t, { bold: !0, color: Lt ? le : void 0, children: "\u25B2" }),
              e(t, { dimColor: !0, children: At }),
              Dt ? e(t, { color: le, children: Dt }) : null,
            ],
          }),
    })),
      (g[92] = Dt),
      (g[93] = Fe),
      (g[94] = At),
      (g[95] = me),
      (g[96] = st),
      (g[97] = Ot),
      (g[98] = J),
      (g[99] = Lt),
      (g[100] = z),
      (g[101] = a),
      (g[102] = h),
      (g[103] = ne),
      (g[104] = Jt));
  else Jt = g[104];
  let zt;
  if (g[105] !== J || g[106] !== a || g[107] !== h)
    ((zt = a && e(UltraRippleText, { text: J, col: -h, row: ee, ripple: a })),
      (g[105] = J),
      (g[106] = a),
      (g[107] = h),
      (g[108] = zt));
  else zt = g[108];
  let jt;
  if (
    g[109] !== s.labelStarts ||
    g[110] !== s.levels ||
    g[111] !== s.spacers ||
    g[112] !== a ||
    g[113] !== I ||
    g[114] !== Te
  ) {
    let ye;
    if (
      g[116] !== s.labelStarts ||
      g[117] !== s.spacers ||
      g[118] !== a ||
      g[119] !== I ||
      g[120] !== Te
    )
      ((ye = (dr, ge) =>
        r(N, {
          children: [
            ge > 0 &&
              (a
                ? e(UltraRippleText, {
                    text: Te(ge - 1),
                    col: s.labelStarts[ge] - s.spacers[ge - 1],
                    row: ee,
                    ripple: a,
                  })
                : e(t, { children: Te(ge - 1) })),
            a && I !== ge
              ? e(UltraRippleText, {
                  text: dr.label,
                  col: s.labelStarts[ge],
                  row: ee,
                  ripple: a,
                  dimColor: !0,
                })
              : e(uo, { level: dr, selected: I === ge }),
          ],
        })),
        (g[116] = s.labelStarts),
        (g[117] = s.spacers),
        (g[118] = a),
        (g[119] = I),
        (g[120] = Te),
        (g[121] = ye));
    else ye = g[121];
    jt = s.levels.map(ye);
    ((g[109] = s.labelStarts),
      (g[110] = s.levels),
      (g[111] = s.spacers),
      (g[112] = a),
      (g[113] = I),
      (g[114] = Te),
      (g[115] = jt));
  } else jt = g[115];
  let ye;
  if (g[122] !== Vt || g[123] !== ct || g[124] !== z || g[125] !== a)
    ((ye = a
      ? e(UltraRippleText, { text: `${ct}${z}`, col: Vt, row: ee, ripple: a })
      : ct
        ? e(t, { children: ct })
        : null),
      (g[122] = Vt),
      (g[123] = ct),
      (g[124] = z),
      (g[125] = a),
      (g[126] = ye));
  else ye = g[126];
  let qt;
  if (g[127] !== zt || g[128] !== jt || g[129] !== ye)
    ((qt = r(o, { children: [zt, jt, ye] })),
      (g[127] = zt),
      (g[128] = jt),
      (g[129] = ye),
      (g[130] = qt));
  else qt = g[130];
  let Kt;
  if (
    g[131] !== s.sublabel ||
    g[132] !== J ||
    g[133] !== z ||
    g[134] !== a ||
    g[135] !== h
  )
    ((Kt = s.sublabel
      ? e(o, {
          children: a
            ? e(UltraRippleText, {
                text: `${J}${" ".repeat(s.sublabel.start)}${s.sublabel.text}${z}`,
                col: -h,
                row: rn,
                ripple: a,
                dimColor: !0,
              })
            : r(N, {
                children: [
                  e(t, { children: " ".repeat(s.sublabel.start) }),
                  e(t, { dimColor: !0, children: s.sublabel.text }),
                ],
              }),
        })
      : null),
      (g[131] = s.sublabel),
      (g[132] = J),
      (g[133] = z),
      (g[134] = a),
      (g[135] = h),
      (g[136] = Kt));
  else Kt = g[136];
  let Yt;
  if (g[137] !== Tt || g[138] !== s.levels || g[139] !== I)
    ((Yt =
      Tt !== null
        ? e(o, { minHeight: 2, children: e(t, { dimColor: !0, children: Tt }) })
        : s.levels[I]?.value === "max"
          ? e(o, { children: e(t, { dimColor: !0, children: GG }) })
          : null),
      (g[137] = Tt),
      (g[138] = s.levels),
      (g[139] = I),
      (g[140] = Yt));
  else Yt = g[140];
  let Qt;
  if (g[141] !== s.orgNote || g[142] !== a)
    ((Qt =
      s.orgNote && !a
        ? e(o, { children: e(t, { dimColor: !0, children: s.orgNote }) })
        : null),
      (g[141] = s.orgNote),
      (g[142] = a),
      (g[143] = Qt));
  else Qt = g[143];
  let Wt;
  if (
    g[144] !== Bt ||
    g[145] !== Jt ||
    g[146] !== qt ||
    g[147] !== Kt ||
    g[148] !== Yt ||
    g[149] !== Qt
  )
    ((Wt = r(o, {
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      children: [Bt, Jt, qt, Kt, Yt, Qt],
    })),
      (g[144] = Bt),
      (g[145] = Jt),
      (g[146] = qt),
      (g[147] = Kt),
      (g[148] = Yt),
      (g[149] = Qt),
      (g[150] = Wt));
  else Wt = g[150];
  let Zt;
  if (g[151] !== G || g[152] !== a || g[153] !== h)
    ((Zt = a
      ? e(UltraRippleText, { text: " ".repeat(G), col: -h, row: ln, ripple: a })
      : e(o, { height: 1 })),
      (g[151] = G),
      (g[152] = a),
      (g[153] = h),
      (g[154] = Zt));
  else Zt = g[154];
  let Ut;
  if (
    g[155] !== Xe ||
    g[156] !== G ||
    g[157] !== W ||
    g[158] !== a ||
    g[159] !== h
  )
    ((Ut = e(InputGuide, {
      children: a
        ? e(UltraRippleText, {
            text: `${Xe}${Wn}${" ".repeat(Math.max(0, G - W - te(Wn)))}`,
            col: -h,
            row: sn,
            ripple: a,
            dimColor: !0,
          })
        : r(DotSeparatedList, {
            children: [
              e(KeybindingHint, { chord: ["left", "right"], action: "adjust" }),
              e(KeybindingHint, { chord: "enter", action: "confirm" }),
              e(t, { children: "s for this session only" }),
              e(KeybindingHint, { chord: "escape", action: "cancel" }),
            ],
          }),
    })),
      (g[155] = Xe),
      (g[156] = G),
      (g[157] = W),
      (g[158] = a),
      (g[159] = h),
      (g[160] = Ut));
  else Ut = g[160];
  let fr;
  if (
    g[161] !== rt ||
    g[162] !== jo ||
    g[163] !== qo ||
    g[164] !== _t ||
    g[165] !== Ht ||
    g[166] !== Wt ||
    g[167] !== Zt ||
    g[168] !== Ut
  )
    ((fr = e(Qr, {
      children: r(o, {
        flexDirection: "column",
        tabIndex: 0,
        autoFocus: !0,
        onKeyDown: rt,
        marginX: jo,
        width: qo,
        children: [_t, Ht, Wt, Zt, Ut],
      }),
    })),
      (g[161] = rt),
      (g[162] = jo),
      (g[163] = qo),
      (g[164] = _t),
      (g[165] = Ht),
      (g[166] = Wt),
      (g[167] = Zt),
      (g[168] = Ut),
      (g[169] = fr));
  else fr = g[169];
  return fr;
}
function dn(n, c, l) {
  if (c.value === "ultracode") return l ?? "";
  if (co(n)) return io(n, c.value);
  return c.value === "max" ? GG : "";
}
function po(Jl) {
  let q = _(39),
    { getMessages: Ko, onDone: re, storageV5: _e } = Jl,
    eo = qf(),
    Yo = useAppStateSelector(Ar),
    zl = useAppStateSelector(Ir),
    j = useMainLoopModel(),
    He = useSetAppState(),
    mr;
  if (q[0] !== j) ((mr = getSliderGeometry(j)), (q[0] = j), (q[1] = mr));
  else mr = q[1];
  let T = mr,
    jl = ft(j, eo, zl, T),
    [Be, gr] = d(null),
    Je = C(!1);
  if (Be !== null) {
    const ze = Be === "ultracode" ? "xhigh" : Be;
    let Z;
    if (q[2] !== re || q[3] !== Be || q[4] !== He || q[5] !== _e)
      ((Z = () => {
        if (Je.current) {
          return;
        }
        ((Je.current = !0), Q(Be, He, re, _e));
      }),
        (q[2] = re),
        (q[3] = Be),
        (q[4] = He),
        (q[5] = _e),
        (q[6] = Z));
    else Z = q[6];
    let Me;
    if (q[7] === MEMO_CACHE_SENTINEL) ((Me = () => gr(null)), (q[7] = Me));
    else Me = q[7];
    let we;
    if (q[8] !== ze || q[9] !== Z)
      ((we = e(ModelOrEffortSwitchDialog, {
        kind: "effort",
        model: null,
        effort: ze,
        onConfirm: Z,
        onCancel: Me,
      })),
        (q[8] = ze),
        (q[9] = Z),
        (q[10] = we));
    else we = q[10];
    return we;
  }
  let ze;
  if (q[11] !== T.levels || q[12] !== T.sublabel?.text || q[13] !== j) {
    let Z;
    if (q[15] !== T.sublabel?.text || q[16] !== j)
      ((Z = (to) => {
        let pr = dn(j, to, T.sublabel?.text);
        return {
          label: pr === "" ? to.label : `${to.label} (${pr})`,
          value: to.value,
        };
      }),
        (q[15] = T.sublabel?.text),
        (q[16] = j),
        (q[17] = Z));
    else Z = q[17];
    ze = T.levels.map(Z);
    ((q[11] = T.levels), (q[12] = T.sublabel?.text), (q[13] = j), (q[14] = ze));
  } else ze = q[14];
  let Qo = ze,
    Wo = T.levels[Math.min(jl, T.levels.length - 1)].value,
    Z;
  if (q[18] === MEMO_CACHE_SENTINEL) ((Z = e(TitleWithSubtitle, { children: "Effort" })), (q[18] = Z));
  else Z = q[18];
  let Me;
  if (q[19] !== T.orgNote)
    ((Me = T.orgNote ? e(t, { children: T.orgNote }) : null),
      (q[19] = T.orgNote),
      (q[20] = Me));
  else Me = q[20];
  let we;
  if (
    q[21] !== Yo ||
    q[22] !== eo ||
    q[23] !== Ko ||
    q[24] !== j ||
    q[25] !== re ||
    q[26] !== He ||
    q[27] !== _e
  )
    ((we = (oo) => {
      if (Je.current) {
        return;
      }
      if (tse(oo === "ultracode" ? "xhigh" : oo, eo, j, Yo, isPromptCacheWarm(Ko()))) {
        gr(oo);
        return;
      }
      ((Je.current = !0), Q(oo, He, re, _e));
    }),
      (q[21] = Yo),
      (q[22] = eo),
      (q[23] = Ko),
      (q[24] = j),
      (q[25] = re),
      (q[26] = He),
      (q[27] = _e),
      (q[28] = we));
  else we = q[28];
  let no;
  if (q[29] !== re)
    ((no = () => {
      if (Je.current) {
        return;
      }
      ((Je.current = !0), re("Cancelled"));
    }),
      (q[29] = re),
      (q[30] = no));
  else no = q[30];
  let ro;
  if (q[31] !== Wo || q[32] !== Qo || q[33] !== we || q[34] !== no)
    ((ro = e(X8, {
      options: Qo,
      defaultValue: Wo,
      onChange: we,
      onCancel: no,
    })),
      (q[31] = Wo),
      (q[32] = Qo),
      (q[33] = we),
      (q[34] = no),
      (q[35] = ro));
  else ro = q[35];
  let hr;
  if (q[36] !== Me || q[37] !== ro)
    ((hr = e(Qr, {
      children: r(o, { flexDirection: "column", children: [Z, Me, ro] }),
    })),
      (q[36] = Me),
      (q[37] = ro),
      (q[38] = hr));
  else hr = q[38];
  return hr;
}
async function il(n, c, l) {
  if (((l = l?.trim() || ""), HELP_FLAGS.includes(l))) {
    n(formatEffortUsageText());
    return;
  }
  if (l === "current" || l === "status") return e(fn, { onDone: n });
  if (!l)
    return e(gn, {
      onDone: n,
      getMessages: () => c.getMessages?.() ?? c.messages,
      storageV5: c.storageV5,
    });
  return e(mn, {
    args: l,
    onDone: n,
    getMessages: () => c.getMessages?.() ?? c.messages,
    storageV5: c.storageV5,
  });
}
export {
  RIPPLE_RAMP,
  UltraRippleText,
  il as call,
  getSliderGeometry,
  rippleDistance,
  rippleLevel,
};
