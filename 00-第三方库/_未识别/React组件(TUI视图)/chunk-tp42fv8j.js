// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../react/react.zhnvc798.js";
import { useVoiceSelector } from "../../../01-核心基础设施/共享小工具-未细化/voice-state-provider.js";
import { useTerminalFocus } from "../../../01-核心基础设施/共享小工具-未细化/clock-and-terminal-focus.js";
import { useClock } from "../../../01-核心基础设施/共享小工具-未细化/use-clock.js";
import { useNotificationQueue } from "../../../03-入口与运行时/会话UI(REPL)/notification-queue.js";
import { invertText, chalk } from "../../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { useTheme } from "../../../02-功能模块/状态栏-主题/chunk-w5jaj6kg.js";
import { stripAnsi } from "../../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { o, t, jr, tn, bs } from "../../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { lF } from "../../ink/ink + react-reconciler.5rs3h07b.js";
import { NI, nK, Ape, fNe } from "../../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import { dd, _p, m9e, T0e, Fye } from "../../../02-功能模块/文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { p_ } from "../../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { NO_ANIMATION_INDEX, useReducedMotion } from "../../../01-核心基础设施/共享小工具-未细化/reduced-motion.js";
import { e, r } from "../../react/react.kwtapczy.js";
import { getThemeColor } from "../../../01-核心基础设施/共享小工具-未细化/theme-color.js";
import { E, V, C, d, F } from "../React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { dJn } from "../../../02-功能模块/图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { MEMO_CACHE_SENTINEL } from "../../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function nat(i, a) {
  let [c] = d(() =>
      i.map((h) => {
        let l = h.setup();
        return {
          effect: typeof l === "function" ? l : l.effect,
          dispose: typeof l === "function" ? void 0 : l.dispose,
          deps: null,
          cleanup: void 0,
        };
      }),
    ),
    m = C(a);
  (E(() => {
    m.current = a;
    let h = () => m.current,
      l = [];
    i.forEach((s, u) => {
      let f = c[u];
      if (!f) return;
      let T = s.deps ? s.deps(a) : [];
      if (f.deps !== null && it(f.deps, T)) return;
      l.push({ slot: f, deps: T });
    });
    for (let { slot: s } of l) (s.cleanup?.(), (s.cleanup = void 0));
    for (let { slot: s, deps: u } of l)
      ((s.deps = u), (s.cleanup = s.effect(a, h)));
  }),
    E(
      () => () => {
        for (let h of c)
          (h.cleanup?.(), (h.cleanup = void 0), (h.deps = null), h.dispose?.());
      },
      [c],
    ));
}
function it(i, a) {
  if (i.length !== a.length) return !1;
  for (let c = 0; c < i.length; c++) if (!Object.is(i[c], a[c])) return !1;
  return !0;
}
F();
var st = "clipboard-image-hint",
  rt = 1000,
  lt = 30000,
  be = {
    id: "clipboard-image-hint",
    deps: (i) => [
      i.isTerminalFocused,
      i.canPasteImages,
      i.addNotification,
      i.clock,
    ],
    setup() {
      let i = null,
        a = 0,
        c = null;
      return ({
        isTerminalFocused: m,
        canPasteImages: h,
        addNotification: l,
        clock: s,
      }) => {
        let u = i ?? m;
        if (((i = m), !h || !m || u)) return;
        return (
          c?.(),
          (c = s.setTimeout(async () => {
            c = null;
            let f = Date.now();
            if (f - a < lt) return;
            if (await dJn())
              ((a = f),
                l({
                  key: st,
                  kind: "contextual",
                  text: `Image in clipboard \xB7 ${p_("chat:imagePaste", "Chat", "ctrl+v")} to paste`,
                  priority: "immediate",
                  timeoutMs: 8000,
                }));
          }, rt)),
          () => {
            (c?.(), (c = null));
          }
        );
      };
    },
  };
var at = [be];
function rat({ isTerminalFocused: i, canPasteImages: a }) {
  let { addNotification: c } = useNotificationQueue(),
    m = useClock();
  nat(at, {
    isTerminalFocused: i,
    canPasteImages: a,
    addNotification: c,
    clock: m,
  });
}
F();
function ee(i, a, c) {
  let m = stripAnsi(a)
      .split(
        `
`,
      )
      .map((s) => s.length),
    h = [],
    l = 0;
  for (let [s, u] of c.entries()) {
    let f = m[s] ?? 0;
    (h.push({ textStart: u, renderedStart: l, length: f }), (l += f + 1));
  }
  return i
    .map((s) => ({ ...s, start: Pe(h, s.start, !1), end: Pe(h, s.end, !0) }))
    .filter((s) => s.end > s.start);
}
function Pe(i, a, c) {
  let m = 0,
    h = i.length;
  while (m < h) {
    let s = (m + h) >>> 1,
      u = i[s].textStart;
    if (c ? u < a : u <= a) m = s + 1;
    else h = s;
  }
  let l = i[m - 1];
  return l ? l.renderedStart + Math.min(a - l.textStart, l.length) : 0;
}
function te(i, a) {
  if (a.length === 0) return [{ text: i, start: 0 }];
  let c = [...a].sort((l, s) => {
      if (l.start !== s.start) return l.start - s.start;
      return s.priority - l.priority;
    }),
    m = [],
    h = [];
  for (let l of c) {
    if (l.start === l.end) continue;
    if (
      !h.some(
        (u) =>
          (l.start >= u.start && l.start < u.end) ||
          (l.end > u.start && l.end <= u.end) ||
          (l.start <= u.start && l.end >= u.end),
      )
    )
      (m.push(l), h.push({ start: l.start, end: l.end }));
  }
  return new Ie(i).segment(m);
}
class Ie {
  text;
  tokens;
  visiblePos = 0;
  stringPos = 0;
  tokenIdx = 0;
  charIdx = 0;
  codes = [];
  constructor(i) {
    this.text = i;
    this.tokens = fNe(i);
  }
  segment(i) {
    let a = [];
    for (let m of i) {
      let h = this.segmentTo(m.start);
      if (h) a.push(h);
      let l = this.segmentTo(m.end);
      if (l) ((l.highlight = m), a.push(l));
    }
    let c = this.segmentTo(1 / 0);
    if (c) a.push(c);
    return a;
  }
  segmentTo(i) {
    if (this.tokenIdx >= this.tokens.length || i <= this.visiblePos)
      return null;
    let a = this.visiblePos;
    while (this.tokenIdx < this.tokens.length) {
      let f = this.tokens[this.tokenIdx];
      if (f.type !== "ansi") break;
      (this.codes.push(f), (this.stringPos += f.code.length), this.tokenIdx++);
    }
    let c = this.stringPos,
      m = [...this.codes];
    while (this.visiblePos < i && this.tokenIdx < this.tokens.length) {
      let f = this.tokens[this.tokenIdx];
      if (f.type === "ansi")
        (this.codes.push(f),
          (this.stringPos += f.code.length),
          this.tokenIdx++);
      else {
        let T = i - this.visiblePos,
          O = f.value.length - this.charIdx,
          y = Math.min(T, O);
        if (
          ((this.stringPos += y),
          (this.visiblePos += y),
          (this.charIdx += y),
          this.charIdx >= f.value.length)
        )
          (this.tokenIdx++, (this.charIdx = 0));
      }
    }
    if (this.stringPos === c) return null;
    let h = ve(m),
      l = ve(this.codes);
    this.codes = l;
    let s = NI(h),
      u = NI(Ape(l));
    return { text: s + this.text.substring(c, this.stringPos) + u, start: a };
  }
}
function ve(i) {
  return nK(i).filter((a) => a.code !== a.endCode);
}
F();
function X(io) {
  let co = _(3),
    {
      char: ke,
      index: ct,
      glimmerIndex: ht,
      messageColor: so,
      shimmerColor: ro,
    } = io,
    lo = ct === ht,
    ao = Math.abs(ct - ht) === 1;
  const Se = lo || ao ? ro : so;
  let dt;
  if (co[0] !== ke || co[1] !== Se)
    ((dt = e(t, { color: Se, children: ke })),
      (co[0] = ke),
      (co[1] = Se),
      (co[2] = dt));
  else dt = co[2];
  return dt;
}
function Pt(Ho) {
  return Ho.shimmerColor;
}
function Q(yo) {
  let D = _(23),
    { text: we, highlights: N } = yo,
    K;
  if (D[0] !== N || D[1] !== we) {
    let To = te(we, N);
    K = [[]];
    let j = 0;
    for (const mt of To) {
      let ft = mt.text.split(`
`);
      for (let oe = 0; oe < ft.length; oe++) {
        if (oe > 0) (K.push([]), (j = j + 1), j);
        let He = ft[oe];
        if (He.length > 0)
          K.at(-1).push({ text: He, highlight: mt.highlight, start: j });
        j = j + He.length;
      }
    }
    ((D[0] = N), (D[1] = we), (D[2] = K));
  } else K = D[2];
  let gt;
  if (D[3] !== N) ((gt = N.some(Pt)), (D[3] = N), (D[4] = gt));
  else gt = D[4];
  let ne = gt,
    se = 0,
    re = 1;
  if (ne) {
    let B = Infinity;
    let U = -Infinity;
    if (D[5] !== U || D[6] !== N || D[7] !== B) {
      for (const Ne of N) {
        if (Ne.shimmerColor)
          ((B = Math.min(B, Ne.start)), (U = Math.max(U, Ne.end)));
      }
      ((D[5] = U), (D[6] = N), (D[7] = B), (D[8] = B), (D[9] = U));
    } else ((B = D[8]), (U = D[9]));
    ((se = B - 10), (re = U - B + 20));
  }
  let xt;
  if (D[10] !== re || D[11] !== ne || D[12] !== K || D[13] !== se)
    ((xt = { lines: K, hasShimmer: ne, sweepStart: se, cycleLength: re }),
      (D[10] = re),
      (D[11] = ne),
      (D[12] = K),
      (D[13] = se),
      (D[14] = xt));
  else xt = D[14];
  let { lines: Re, hasShimmer: bo, sweepStart: Po, cycleLength: vo } = xt,
    Io = useReducedMotion(),
    Ct = bo && !Io,
    [Ee, ko] = bs(Ct ? 50 : null),
    Y = Ct ? Po + (Math.floor(ko / 50) % vo) : NO_ANIMATION_INDEX,
    le;
  if (D[15] !== Y || D[16] !== Re) {
    let J;
    if (D[18] !== Y)
      ((J = (yt, So) =>
        e(
          o,
          {
            children:
              yt.length === 0
                ? e(t, { children: " " })
                : yt.map((S, Tt) => {
                    if (S.highlight?.shimmerColor && S.highlight.color) {
                      return e(
                        t,
                        {
                          children: S.text
                            .split("")
                            .map((wo, bt) =>
                              e(
                                X,
                                {
                                  char: wo,
                                  index: S.start + bt,
                                  glimmerIndex: Y,
                                  messageColor: S.highlight.color,
                                  shimmerColor: S.highlight.shimmerColor,
                                },
                                bt,
                              ),
                            ),
                        },
                        Tt,
                      );
                    }
                    return e(
                      t,
                      {
                        color: S.highlight?.color,
                        dimColor: S.highlight?.dimColor,
                        underline: S.highlight?.underline,
                        children: e(jr, { children: S.text }),
                      },
                      Tt,
                    );
                  }),
          },
          So,
        )),
        (D[18] = Y),
        (D[19] = J));
    else J = D[19];
    le = Re.map(J);
    ((D[15] = Y), (D[16] = Re), (D[17] = le));
  } else le = D[17];
  let J;
  if (D[20] !== Ee || D[21] !== le)
    ((J = e(o, { ref: Ee, flexDirection: "column", children: le })),
      (D[20] = Ee),
      (D[21] = le),
      (D[22] = J));
  else J = D[22];
  return J;
}
function f9e(Uo) {
  let W = _(23),
    {
      inputState: It,
      children: ae,
      terminalFocus: Wo,
      invert: Go,
      hidePlaceholderText: Vo,
      cursorCellPainted: qo,
      ...g
    } = Uo,
    {
      handleKeyDown: zo,
      renderedValue: Oe,
      cursorLine: Me,
      cursorColumn: Ae,
    } = It;
  const De = Boolean(g.focus && g.showCursor),
    Be = !qo;
  let kt;
  if (W[0] !== Ae || W[1] !== Me || W[2] !== De || W[3] !== Be)
    ((kt = { line: Me, column: Ae, active: De, visible: Be }),
      (W[0] = Ae),
      (W[1] = Me),
      (W[2] = De),
      (W[3] = Be),
      (W[4] = kt));
  else kt = W[4];
  let Fe = _p(kt),
    St = C(null),
    wt;
  if (W[5] !== Fe)
    ((wt = (Ht) => {
      ((St.current = Ht), Fe(Ht));
    }),
      (W[5] = Fe),
      (W[6] = wt));
  else wt = W[6];
  let ce = wt,
    {
      handleKeyDown: Le,
      handlePaste: Ke,
      isPasting: Nt,
    } = Fye({
      onPaste: g.onPaste,
      handleKeyDown: (he) => {
        if (
          (g.onKeyDownBefore?.(he),
          he.defaultPrevented || he.didStopImmediatePropagation())
        ) {
          return;
        }
        zo(he);
      },
      onImagePaste: g.onImagePaste,
      onAudioPaste: g.onAudioPaste,
    }),
    { onIsPastingChange: _e } = g;
  E(() => {
    if (_e) _e(Nt);
  }, [Nt, _e]);
  let de = g.focus !== !1;
  dd(St, de);
  let Rt;
  if (W[7] === MEMO_CACHE_SENTINEL) ((Rt = lF()), (W[7] = Rt));
  else Rt = W[7];
  let Xo = Rt,
    Yo = tn(),
    { showPlaceholder: $o, renderedPlaceholder: Et } = ze({
      placeholder: g.placeholder,
      value: g.value,
      showCursor: g.showCursor && !Xo,
      focus: g.focus,
      terminalFocus: Wo,
      invert: Go,
      hidePlaceholderText: Vo || Yo,
    }),
    Ot;
  if (W[8] !== Le || W[9] !== Ke || W[10] !== de)
    ((Ot = de
      ? { tabIndex: 0, autoFocus: !0, onKeyDown: Le, onPaste: Ke }
      : {}),
      (W[8] = Le),
      (W[9] = Ke),
      (W[10] = de),
      (W[11] = Ot));
  else Ot = W[11];
  let me = Ot,
    Jo =
      (g.value && g.value.trim().indexOf(" ") === -1) ||
      (g.value && g.value.endsWith(" ")),
    Mt = Boolean(g.argumentHint && g.value && Jo && g.value.startsWith("/")),
    ue =
      g.showCursor && g.highlights
        ? g.highlights.filter(
            (je) =>
              je.dimColor ||
              g.cursorOffset < je.start ||
              g.cursorOffset >= je.end,
          )
        : g.highlights,
    Ue = ue && ue.length > 0 ? ee(ue, Oe, It.renderedRowStartOffsets) : ue;
  if (Ue && Ue.length > 0) {
    return r(o, {
      ref: ce,
      ...me,
      children: [
        e(o, {
          flexShrink: 0,
          "aria-preserve-whitespace": !0,
          children: e(Q, { text: Oe, highlights: Ue }),
        }),
        Mt &&
          r(t, {
            dimColor: !0,
            wrap: "truncate-end",
            children: [g.value?.endsWith(" ") ? "" : " ", g.argumentHint],
          }),
        ae,
      ],
    });
  }
  const We = o,
    Ge = t,
    Qo = "truncate-end",
    Ve =
      $o && Et
        ? e(jr, { children: Et })
        : e(t, {
            "aria-preserve-whitespace": !0,
            children: e(jr, { children: Oe }),
          }),
    qe =
      Mt &&
      r(t, {
        dimColor: !0,
        children: [g.value?.endsWith(" ") ? "" : " ", g.argumentHint],
      });
  let fe;
  if (
    W[12] !== Ge ||
    W[13] !== ae ||
    W[14] !== g ||
    W[15] !== Ve ||
    W[16] !== qe
  )
    ((fe = r(Ge, { wrap: Qo, dimColor: g.dimColor, children: [Ve, qe, ae] })),
      (W[12] = Ge),
      (W[13] = ae),
      (W[14] = g),
      (W[15] = Ve),
      (W[16] = qe),
      (W[17] = fe));
  else fe = W[17];
  let At;
  if (W[18] !== We || W[19] !== me || W[20] !== ce || W[21] !== fe)
    ((At = e(We, { ref: ce, ...me, children: fe })),
      (W[18] = We),
      (W[19] = me),
      (W[20] = ce),
      (W[21] = fe),
      (W[22] = At));
  else At = W[22];
  return At;
}
function ze({
  placeholder: i,
  value: a,
  showCursor: c,
  focus: m,
  terminalFocus: h = !0,
  invert: l = invertText,
  hidePlaceholderText: s = !1,
}) {
  let u = void 0;
  if (i) {
    if (s) u = c && m && h ? l(" ") : "";
    else if (((u = chalk.dim(i)), c && m && h))
      u = i.length > 0 ? l(i[0]) + chalk.dim(i.slice(1)) : l(" ");
  }
  let f = a.length === 0 && Boolean(i);
  return { renderedPlaceholder: u, showPlaceholder: f };
}
function _t(Fn) {
  return Fn.voiceState;
}
function jt(Ln) {
  return Ln;
}
function Ut(Kn) {
  return Kn;
}
function hn(n) {
  let L = _(54),
    [Xe] = useTheme(),
    R = useTerminalFocus(),
    Dt;
  if (L[0] === MEMO_CACHE_SENTINEL) ((Dt = lF()), (L[0] = Dt));
  else Dt = L[0];
  let pn = Dt,
    ge = tn(),
    Ye = useVoiceSelector(_t) === "recording",
    [$e, G] = T0e();
  const Je = !!n.onImagePaste;
  let Bt;
  if (L[1] !== R || L[2] !== Je)
    ((Bt = { isTerminalFocused: R, canPasteImages: Je }),
      (L[1] = R),
      (L[2] = Je),
      (L[3] = Bt));
  else Bt = L[3];
  rat(Bt);
  let Ft;
  if (L[4] !== G || L[5] !== R)
    ((Ft = !R ? jt : G ? () => chalk.hex(G.hex)(G.char) : pn ? Ut : invertText),
      (L[4] = G),
      (L[5] = R),
      (L[6] = Ft));
  else Ft = L[6];
  let q = Ft;
  const {
      value: Cn,
      onChange: yn,
      onSubmit: Tn,
      onExit: bn,
      onExitMessage: Pn,
      onEscapeMessage: vn,
      historyOnClear: In,
      onLeftArrowOnEmpty: kn,
      leftArrowConfirmHint: Sn,
      onHistoryReset: wn,
      onHistoryUp: Hn,
      onHistoryDown: Nn,
      focus: Rn,
      mask: En,
      multiline: On,
      disableBackslashReturn: Mn,
      clearOnSubmit: An,
      disableCtrlCClear: Dn,
    } = n,
    Qe = n.showCursor && !ge ? " " : "",
    Bn = n.highlightPastedText;
  let xe;
  if (L[7] !== Xe) ((xe = getThemeColor("text", Xe)), (L[7] = Xe), (L[8] = xe));
  else xe = L[8];
  let Lt;
  if (
    L[9] !== q ||
    L[10] !== ge ||
    L[11] !== n.clearOnSubmit ||
    L[12] !== n.columns ||
    L[13] !== n.cursorOffset ||
    L[14] !== n.disableBackslashReturn ||
    L[15] !== n.disableCtrlCClear ||
    L[16] !== n.disableCursorMovementForUpDownKeys ||
    L[17] !== n.disableEscapeDoublePress ||
    L[18] !== n.focus ||
    L[19] !== n.getInputMode ||
    L[20] !== n.getPastedContents ||
    L[21] !== n.highlightPastedText ||
    L[22] !== n.historyOnClear ||
    L[23] !== n.inlineGhostText ||
    L[24] !== n.inputFilter ||
    L[25] !== n.leftArrowConfirmHint ||
    L[26] !== n.mask ||
    L[27] !== n.maxVisibleLines ||
    L[28] !== n.multiline ||
    L[29] !== n.onChange ||
    L[30] !== n.onChangeCursorOffset ||
    L[31] !== n.onEscapeMessage ||
    L[32] !== n.onExit ||
    L[33] !== n.onExitMessage ||
    L[34] !== n.onHistoryDown ||
    L[35] !== n.onHistoryReset ||
    L[36] !== n.onHistoryUp ||
    L[37] !== n.onImagePaste ||
    L[38] !== n.onLeftArrowOnEmpty ||
    L[39] !== n.onSubmit ||
    L[40] !== n.value ||
    L[41] !== Qe ||
    L[42] !== xe
  )
    ((Lt = {
      value: Cn,
      onChange: yn,
      onSubmit: Tn,
      onExit: bn,
      onExitMessage: Pn,
      onEscapeMessage: vn,
      historyOnClear: In,
      onLeftArrowOnEmpty: kn,
      leftArrowConfirmHint: Sn,
      onHistoryReset: wn,
      onHistoryUp: Hn,
      onHistoryDown: Nn,
      focus: Rn,
      mask: En,
      multiline: On,
      disableBackslashReturn: Mn,
      clearOnSubmit: An,
      disableCtrlCClear: Dn,
      cursorChar: Qe,
      preserveTrailingWhitespace: ge,
      highlightPastedText: Bn,
      invert: q,
      themeText: xe,
      columns: n.columns,
      maxVisibleLines: n.maxVisibleLines,
      onImagePaste: n.onImagePaste,
      disableCursorMovementForUpDownKeys: n.disableCursorMovementForUpDownKeys,
      disableEscapeDoublePress: n.disableEscapeDoublePress,
      externalOffset: n.cursorOffset,
      onOffsetChange: n.onChangeCursorOffset,
      inputFilter: n.inputFilter,
      getPastedContents: n.getPastedContents,
      getInputMode: n.getInputMode,
      inlineGhostText: n.inlineGhostText,
      dim: chalk.dim,
    }),
      (L[9] = q),
      (L[10] = ge),
      (L[11] = n.clearOnSubmit),
      (L[12] = n.columns),
      (L[13] = n.cursorOffset),
      (L[14] = n.disableBackslashReturn),
      (L[15] = n.disableCtrlCClear),
      (L[16] = n.disableCursorMovementForUpDownKeys),
      (L[17] = n.disableEscapeDoublePress),
      (L[18] = n.focus),
      (L[19] = n.getInputMode),
      (L[20] = n.getPastedContents),
      (L[21] = n.highlightPastedText),
      (L[22] = n.historyOnClear),
      (L[23] = n.inlineGhostText),
      (L[24] = n.inputFilter),
      (L[25] = n.leftArrowConfirmHint),
      (L[26] = n.mask),
      (L[27] = n.maxVisibleLines),
      (L[28] = n.multiline),
      (L[29] = n.onChange),
      (L[30] = n.onChangeCursorOffset),
      (L[31] = n.onEscapeMessage),
      (L[32] = n.onExit),
      (L[33] = n.onExitMessage),
      (L[34] = n.onHistoryDown),
      (L[35] = n.onHistoryReset),
      (L[36] = n.onHistoryUp),
      (L[37] = n.onImagePaste),
      (L[38] = n.onLeftArrowOnEmpty),
      (L[39] = n.onSubmit),
      (L[40] = n.value),
      (L[41] = Qe),
      (L[42] = xe),
      (L[43] = Lt));
  else Lt = L[43];
  let Ze = m9e(Lt);
  const et = G != null;
  let pe;
  if (
    L[44] !== q ||
    L[45] !== R ||
    L[46] !== Ye ||
    L[47] !== n ||
    L[48] !== et ||
    L[49] !== Ze
  )
    ((pe = e(f9e, {
      inputState: Ze,
      terminalFocus: R,
      highlights: n.highlights,
      invert: q,
      hidePlaceholderText: Ye,
      cursorCellPainted: et,
      ...n,
    })),
      (L[44] = q),
      (L[45] = R),
      (L[46] = Ye),
      (L[47] = n),
      (L[48] = et),
      (L[49] = Ze),
      (L[50] = pe));
  else pe = L[50];
  let Kt;
  if (L[51] !== $e || L[52] !== pe)
    ((Kt = e(o, { ref: $e, children: pe })),
      (L[51] = $e),
      (L[52] = pe),
      (L[53] = Kt));
  else Kt = L[53];
  return Kt;
}
export { nat, rat, f9e, hn };
