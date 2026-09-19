// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { CLAUDE_BULLET_GLYPH, RIGHT_ARROW_GLYPH, HORIZONTAL_LINE_GLYPH, PROGRESS_BAR_CELL_GLYPH, getBrailleSpinnerFrames } from "../权限系统/chunk-e4pfvp7x.js";
import { getMarketingNameForModel } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getStringWidth, truncateToWidth, formatDuration, formatBarElapsed, formatTokens } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { isFullscreenActive } from "../终端环境探测-TUI-tmux/终端环境探测-TUI-tmux.5pkb0sjc.js";
import { Box, Text, useInterval } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { StatusIndicator } from "../../01-核心基础设施/UI组件-TUI/chunk-dsg6bce8.js";
import { useHasVirtualScrollViewport, useVirtualScrollViewportSize } from "../../01-核心基础设施/UI组件-TUI/virtual-scroll-viewport-state.js";
import { useTerminalSize } from "../../01-核心基础设施/UI组件-TUI/use-terminal-size.js";
import { parseWorkflowScript } from "./workflow-script.js";
import { useReducedMotion } from "../../01-核心基础设施/UI组件-TUI/reduced-motion.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { isTerminalTaskStatus, figures, sanitizeDisplayName } from "../Teammates团队/chunk-mrfx53ye.js";
import { countMatching } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
function formatModelLabel(n, i) {
  let a = (s) => getMarketingNameForModel(s) ?? sanitizeDisplayName(s);
  if (i != null) return `${n == null ? "" : `${a(n)} `}${RIGHT_ARROW_GLYPH} ${a(i)}`;
  return n != null ? a(n) : "";
}
F();
function Nn(zo) {
  return zo.state === "done";
}
function Gn(Fo) {
  return Fo.state === "error";
}
function On(Wn) {
  return Wn.state === "start" || Wn.state === "progress";
}
function _n(qo) {
  return qo.state === "done";
}
function jn(Ko) {
  return Ko.state === "error";
}
function zn(Yo, Bo) {
  return e(Text, { dimColor: !0, children: Yo }, Bo);
}
function collectWorkflowProgressEvents(n) {
  let i = new Map(),
    a = [],
    s = new Map();
  for (let l of n)
    if (l.type === "workflow_agent") i.set(l.index, l);
    else if (l.type === "workflow_log") a.push(l.message);
    else if (l.type === "workflow_phase")
      s.set(l.index, { title: l.title, kind: l.kind });
  return {
    agents: [...i.values()].sort((l, u) => l.index - u.index),
    logs: a,
    phaseTitles: s,
  };
}
function ue(n, i) {
  if (!n.some((s) => s.phaseIndex != null)) return null;
  let a = new Map();
  for (let s of n) {
    let l = s.phaseIndex ?? 0,
      u = a.get(l);
    if (!u) {
      let c = i.get(l);
      ((u = {
        phaseIndex: l,
        title: c?.title ?? `Phase ${l}`,
        kind: c?.kind,
        agents: [],
      }),
        a.set(l, u));
    }
    u.agents.push(s);
  }
  return [...a.values()].sort((s, l) => s.phaseIndex - l.phaseIndex);
}
function ne(Eo) {
  let S = _(32),
    { row: m, isLast: No } = Eo,
    Rt = No ? "\u2514\u2500" : "\u251C\u2500",
    H = m.state === "start" || m.state === "progress",
    J,
    Q;
  bb0: switch (m.state) {
    case "done": {
      ((J = figures.tick), (Q = "success"));
      break bb0;
    }
    case "error": {
      ((J = figures.cross), (Q = "error"));
      break bb0;
    }
    case "start":
    case "progress": {
      ((J = "\u27F3"), (Q = void 0));
    }
  }
  let w;
  if (
    S[0] !== H ||
    S[1] !== m.agentType ||
    S[2] !== m.durationMs ||
    S[3] !== m.fallbackModel ||
    S[4] !== m.model ||
    S[5] !== m.tokens ||
    S[6] !== m.toolCalls
  ) {
    w = [];
    if (m.agentType != null) w.push(m.agentType);
    if (m.model != null || m.fallbackModel != null) {
      let P;
      if (S[8] !== m.fallbackModel || S[9] !== m.model)
        ((P = formatModelLabel(m.model, m.fallbackModel)),
          (S[8] = m.fallbackModel),
          (S[9] = m.model),
          (S[10] = P));
      else P = S[10];
      w.push(P);
    }
    if (m.tokens != null) {
      let P;
      if (S[11] !== m.tokens)
        ((P = formatTokens(m.tokens)), (S[11] = m.tokens), (S[12] = P));
      else P = S[12];
      w.push(`${P} tok`);
    }
    if (m.toolCalls != null && m.toolCalls > 0) {
      const P = m.toolCalls;
      let z;
      if (S[13] !== m.toolCalls)
        ((z = pluralize(m.toolCalls, "tool")), (S[13] = m.toolCalls), (S[14] = z));
      else z = S[14];
      w.push(`${P} ${z}`);
    }
    if (m.durationMs != null) {
      let P;
      if (S[15] !== m.durationMs)
        ((P = formatDuration(m.durationMs)), (S[15] = m.durationMs), (S[16] = P));
      else P = S[16];
      w.push(P);
    }
    if (H && w.length === 0) w.push("\u2026running");
    ((S[0] = H),
      (S[1] = m.agentType),
      (S[2] = m.durationMs),
      (S[3] = m.fallbackModel),
      (S[4] = m.model),
      (S[5] = m.tokens),
      (S[6] = m.toolCalls),
      (S[7] = w));
  } else w = S[7];
  let P;
  if (S[17] !== J || S[18] !== Q)
    ((P = e(Text, { color: Q, children: J })),
      (S[17] = J),
      (S[18] = Q),
      (S[19] = P));
  else P = S[19];
  let z;
  if (S[20] !== w)
    ((z =
      w.length > 0 &&
      r(Text, { dimColor: !0, children: ["  ", w.join(" \xB7 ")] })),
      (S[20] = w),
      (S[21] = z));
  else z = S[21];
  let Pe;
  if (S[22] !== m.error || S[23] !== m.state)
    ((Pe =
      m.state === "error" &&
      m.error &&
      r(Text, { color: "error", children: [" ", "\u2014", " ", m.error] })),
      (S[22] = m.error),
      (S[23] = m.state),
      (S[24] = Pe));
  else Pe = S[24];
  let Cn;
  if (
    S[25] !== H ||
    S[26] !== m.label ||
    S[27] !== P ||
    S[28] !== z ||
    S[29] !== Pe ||
    S[30] !== Rt
  )
    ((Cn = e(Box, {
      paddingLeft: 1,
      children: r(Text, {
        dimColor: H,
        children: [Rt, " ", P, " ", m.label, z, Pe],
      }),
    })),
      (S[25] = H),
      (S[26] = m.label),
      (S[27] = P),
      (S[28] = z),
      (S[29] = Pe),
      (S[30] = Rt),
      (S[31] = Cn));
  else Cn = S[31];
  return Cn;
}
function Fe(Go) {
  let A = _(42),
    { group: b, verbose: Y, width: St } = Go,
    Tn;
  if (A[0] !== b.agents)
    ((Tn = b.agents.filter(Nn)), (A[0] = b.agents), (A[1] = Tn));
  else Tn = A[1];
  let Mt = Tn,
    Wt,
    M,
    E,
    wn,
    B;
  if (A[2] !== Mt.length || A[3] !== b.agents || A[4] !== Y) {
    let An = b.agents.filter(Gn);
    let Oo = b.agents.filter(On);
    B = b.agents.length;
    M = Mt.length;
    E = An.length;
    Wt = M + E === B && B > 0;
    wn = Y ? b.agents : [...An, ...Oo];
    ((A[2] = Mt.length),
      (A[3] = b.agents),
      (A[4] = Y),
      (A[5] = Wt),
      (A[6] = M),
      (A[7] = E),
      (A[8] = wn),
      (A[9] = B));
  } else ((Wt = A[5]), (M = A[6]), (E = A[7]), (wn = A[8]), (B = A[9]));
  let ee = wn,
    ie = b.agents[0]?.model,
    Rn;
  if (A[10] !== ie || A[11] !== b.agents)
    ((Rn =
      ie && b.agents.every((_o) => _o.model === ie) ? formatModelLabel(ie, void 0) : void 0),
      (A[10] = ie),
      (A[11] = b.agents),
      (A[12] = Rn));
  else Rn = A[12];
  let Sn = Rn,
    $t = Wt ? (E > 0 ? figures.cross : figures.tick) : "\u27F3",
    Dt = Wt ? (E > 0 ? "error" : "success") : void 0;
  const It = b.kind === "child" ? "permission" : "subtle";
  let Ce;
  if (A[13] !== b.title)
    ((Ce = e(Text, { bold: !0, children: b.title })),
      (A[13] = b.title),
      (A[14] = Ce));
  else Ce = A[14];
  let Te;
  if (A[15] !== Dt || A[16] !== $t)
    ((Te = e(Text, { color: Dt, children: $t })),
      (A[15] = Dt),
      (A[16] = $t),
      (A[17] = Te));
  else Te = A[17];
  const vt = Sn && ` \xB7 ${Sn}`;
  let we;
  if (A[18] !== E)
    ((we =
      E > 0 &&
      r(Text, { color: "error", children: [" ", "\xB7", " ", E, " failed"] })),
      (A[18] = E),
      (A[19] = we));
  else we = A[19];
  let Ae;
  if (A[20] !== M || A[21] !== vt || A[22] !== we || A[23] !== B)
    ((Ae = r(Text, { dimColor: !0, children: [M, "/", B, vt, we] })),
      (A[20] = M),
      (A[21] = vt),
      (A[22] = we),
      (A[23] = B),
      (A[24] = Ae));
  else Ae = A[24];
  let Re;
  if (A[25] !== Ce || A[26] !== Te || A[27] !== Ae)
    ((Re = e(Box, {
      paddingX: 1,
      children: r(Text, { children: [Ce, "  ", Te, " ", Ae] }),
    })),
      (A[25] = Ce),
      (A[26] = Te),
      (A[27] = Ae),
      (A[28] = Re));
  else Re = A[28];
  let Me;
  if (A[29] !== M || A[30] !== Y)
    ((Me =
      !Y &&
      M > 0 &&
      e(Box, {
        paddingLeft: 1,
        children: r(Text, {
          dimColor: !0,
          children: [e(StatusIndicator, { status: "success" }), " ", M, " done"],
        }),
      })),
      (A[29] = M),
      (A[30] = Y),
      (A[31] = Me));
  else Me = A[31];
  let We;
  if (A[32] !== ee) {
    let le;
    if (A[34] !== ee.length)
      ((le = (Mn, jo) =>
        e(ne, { row: Mn, isLast: jo === ee.length - 1 }, Mn.index)),
        (A[34] = ee.length),
        (A[35] = le));
    else le = A[35];
    We = ee.map(le);
    ((A[32] = ee), (A[33] = We));
  } else We = A[33];
  let le;
  if (
    A[36] !== Re ||
    A[37] !== Me ||
    A[38] !== We ||
    A[39] !== It ||
    A[40] !== St
  )
    ((le = r(Box, {
      flexDirection: "column",
      borderStyle: "single",
      borderColor: It,
      alignSelf: "flex-start",
      width: St,
      children: [Re, Me, We],
    })),
      (A[36] = Re),
      (A[37] = Me),
      (A[38] = We),
      (A[39] = It),
      (A[40] = St),
      (A[41] = le));
  else le = A[41];
  return le;
}
var jt = 8;
function Ue(Uo) {
  let W = _(26),
    { agents: C, verbose: Lt } = Uo,
    $n;
  if (W[0] !== C || W[1] !== Lt)
    (($n = Lt ? C : C.slice(-jt)), (W[0] = C), (W[1] = Lt), (W[2] = $n));
  else $n = W[2];
  let U = $n,
    D = C.length - U.length,
    Dn;
  if (W[3] !== C) ((Dn = countMatching(C, _n)), (W[3] = C), (W[4] = Dn));
  else Dn = W[4];
  let Et = Dn,
    $e = countMatching(C, jn);
  const Xo = C.length;
  let De;
  if (W[5] !== C.length)
    ((De = pluralize(C.length, "agent")), (W[5] = C.length), (W[6] = De));
  else De = W[6];
  let Ie;
  if (W[7] !== $e)
    ((Ie =
      $e > 0 &&
      r(Text, { color: "error", children: [" ", "\xB7", " ", $e, " failed"] })),
      (W[7] = $e),
      (W[8] = Ie));
  else Ie = W[8];
  let ve;
  if (W[9] !== C.length || W[10] !== Et || W[11] !== De || W[12] !== Ie)
    ((ve = r(Text, {
      children: [Xo, " ", De, " ", "\xB7", " ", Et, " done", Ie],
    })),
      (W[9] = C.length),
      (W[10] = Et),
      (W[11] = De),
      (W[12] = Ie),
      (W[13] = ve));
  else ve = W[13];
  let Le;
  if (W[14] !== D || W[15] !== U) {
    let X;
    if (W[17] !== D || W[18] !== U.length)
      ((X = (In, Zo) =>
        e(ne, { row: In, isLast: Zo === U.length - 1 && D === 0 }, In.index)),
        (W[17] = D),
        (W[18] = U.length),
        (W[19] = X));
    else X = W[19];
    Le = U.map(X);
    ((W[14] = D), (W[15] = U), (W[16] = Le));
  } else Le = W[16];
  let X;
  if (W[20] !== D)
    ((X =
      D > 0 &&
      e(Box, {
        paddingLeft: 1,
        children: r(Text, {
          dimColor: !0,
          children: ["\u2514\u2500 \xB7 \xB7 \xB7 +", D, " more"],
        }),
      })),
      (W[20] = D),
      (W[21] = X));
  else X = W[21];
  let vn;
  if (W[22] !== ve || W[23] !== Le || W[24] !== X)
    ((vn = r(Box, { flexDirection: "column", children: [ve, Le, X] })),
      (W[22] = ve),
      (W[23] = Le),
      (W[24] = X),
      (W[25] = vn));
  else vn = W[25];
  return vn;
}
function WorkflowProgressView(Vo) {
  let _t = _(18),
    { collected: Ho, verbose: Ee, width: Nt } = Vo,
    { agents: Z, logs: q, phaseTitles: Gt } = Ho;
  if (Z.length === 0 && q.length === 0) {
    return null;
  }
  let Ne, Ge, Oe, _e, je;
  if (
    _t[0] !== Z ||
    _t[1] !== q ||
    _t[2] !== Gt ||
    _t[3] !== Ee ||
    _t[4] !== Nt
  ) {
    let ze = ue(Z, Gt);
    let ce;
    if (_t[10] !== q) ((ce = q.at(-1)), (_t[10] = q), (_t[11] = ce));
    else ce = _t[11];
    let Ln = ce;
    let En = q.slice(-3, -1);
    Ne = Box;
    Ge = "column";
    Oe =
      Ln &&
      e(Box, {
        marginBottom: ze || Z.length > 0 ? 1 : 0,
        children: r(Text, { children: [figures.pointer, " ", Ln] }),
      });
    _e = ze
      ? e(Box, {
          flexDirection: "column",
          children: ze.map((Jo, Qo) =>
            r(N, {
              children: [
                e(Fe, { group: Jo, verbose: Ee, width: Nt }),
                Qo < ze.length - 1 &&
                  e(Box, {
                    paddingLeft: 3,
                    children: e(Text, { dimColor: !0, children: "\u2193" }),
                  }),
              ],
            }),
          ),
        })
      : Z.length > 0
        ? e(Ue, { agents: Z, verbose: Ee })
        : null;
    je =
      En.length > 0 &&
      e(Box, {
        flexDirection: "column",
        paddingLeft: 3,
        marginTop: 1,
        children: En.map(zn),
      });
    ((_t[0] = Z),
      (_t[1] = q),
      (_t[2] = Gt),
      (_t[3] = Ee),
      (_t[4] = Nt),
      (_t[5] = Ne),
      (_t[6] = Ge),
      (_t[7] = Oe),
      (_t[8] = _e),
      (_t[9] = je));
  } else ((Ne = _t[5]), (Ge = _t[6]), (Oe = _t[7]), (_e = _t[8]), (je = _t[9]));
  let ce;
  if (
    _t[12] !== Ne ||
    _t[13] !== Ge ||
    _t[14] !== Oe ||
    _t[15] !== _e ||
    _t[16] !== je
  )
    ((ce = r(Ne, { flexDirection: Ge, children: [Oe, _e, je] })),
      (_t[12] = Ne),
      (_t[13] = Ge),
      (_t[14] = Oe),
      (_t[15] = _e),
      (_t[16] = je),
      (_t[17] = ce));
  else ce = _t[17];
  return ce;
}
F();
function fo() {
  return Date.now();
}
var R = 4,
  gn = 80;
function Pt(fr) {
  let Fn = _(2),
    Un;
  if (Fn[0] === MEMO_CACHE_SENTINEL) ((Un = getBrailleSpinnerFrames()), (Fn[0] = Un));
  else Un = Fn[0];
  let zt = Un,
    [gr, hr] = d(0),
    br = useReducedMotion(),
    Xn;
  if (Fn[1] === MEMO_CACHE_SENTINEL)
    ((Xn = () => hr((xr) => (xr + 1) % zt.length)), (Fn[1] = Xn));
  else Xn = Fn[1];
  return (useInterval(Xn, fr && !br ? gn : null), zt[gr % zt.length]);
}
function Ct(yr) {
  let de = _(14),
    { done: Ft, total: Ze, running: Zn } = yr,
    qn;
  if (de[0] !== Ft || de[1] !== Ze)
    ((qn = Ze > 0 ? Math.round((Ft / Ze) * R) : 0),
      (de[0] = Ft),
      (de[1] = Ze),
      (de[2] = qn));
  else qn = de[2];
  let kr = qn,
    oe = Math.min(Zn ? R - 1 : R, Math.max(0, kr)),
    me = Zn ? Math.min(R - oe, 1) : 0,
    qe = R - oe - me,
    Ut = Pt(me > 0),
    Ke;
  if (de[3] !== oe)
    ((Ke = oe > 0 && e(Text, { color: "success", children: PROGRESS_BAR_CELL_GLYPH.repeat(oe) })),
      (de[3] = oe),
      (de[4] = Ke));
  else Ke = de[4];
  let Ve;
  if (de[5] !== Ut || de[6] !== me)
    ((Ve = me > 0 && e(Text, { color: "success", children: Ut })),
      (de[5] = Ut),
      (de[6] = me),
      (de[7] = Ve));
  else Ve = de[7];
  let He;
  if (de[8] !== qe)
    ((He =
      qe > 0 &&
      e(Text, { color: "subtle", dimColor: !0, children: PROGRESS_BAR_CELL_GLYPH.repeat(qe) })),
      (de[8] = qe),
      (de[9] = He));
  else He = de[9];
  let Kn;
  if (de[10] !== Ke || de[11] !== Ve || de[12] !== He)
    ((Kn = r(Text, { children: [Ke, Ve, He] })),
      (de[10] = Ke),
      (de[11] = Ve),
      (de[12] = He),
      (de[13] = Kn));
  else Kn = de[13];
  return Kn;
}
var PROMPT_RESERVED_ROWS = 9,
  hn = 12;
function useWorkflowDialogLayout(Xt) {
  let Hn = _(9),
    Vn = useTerminalSize(),
    { rows: I } = useVirtualScrollViewportSize(Vn),
    Zt = useHasVirtualScrollViewport(),
    Jn;
  if (Hn[0] !== Zt || Hn[1] !== Xt || Hn[2] !== I)
    ((Jn = Zt ? I : isFullscreenActive() ? Math.floor(I / 2) : Xt ? Math.max(hn, I - PROMPT_RESERVED_ROWS) : I),
      (Hn[0] = Zt),
      (Hn[1] = Xt),
      (Hn[2] = I),
      (Hn[3] = Jn));
  else Jn = Hn[3];
  let qt = Jn,
    { columns: Je } = Vn,
    Kt = Math.max(24, Je - 6),
    Qn;
  if (Hn[4] !== qt || Hn[5] !== Je || Hn[6] !== I || Hn[7] !== Kt)
    ((Qn = { availableRows: qt, width: Kt, rows: I, columns: Je }),
      (Hn[4] = qt),
      (Hn[5] = Je),
      (Hn[6] = I),
      (Hn[7] = Kt),
      (Hn[8] = Qn));
  else Qn = Hn[8];
  return Qn;
}
function useWorkflowElapsedMs(Qe) {
  let wr = _(1),
    Pr = Qe.status === "running",
    [Cr, Tr] = d(fo),
    Yn;
  if (wr[0] === MEMO_CACHE_SENTINEL) ((Yn = () => Tr(Date.now())), (wr[0] = Yn));
  else Yn = wr[0];
  return (
    useInterval(Yn, Pr ? 1000 : null),
    Math.max(0, (Qe.endTime ?? Cr) - Qe.startTime - (Qe.totalPausedMs ?? 0))
  );
}
var be = 17;
function WorkflowPhaseRow(Rr) {
  let O = _(28),
    {
      index: Sr,
      title: Vt,
      done: Mr,
      total: Bn,
      status: eo,
      selected: to,
      trailing: no,
    } = Rr,
    K = to === void 0 ? !1 : to,
    oo = no === void 0 ? "" : no,
    pe = eo === "done",
    fe = eo === "failed",
    ro = pe || fe,
    Ht = K ? "permission" : pe ? "success" : fe ? "error" : "subtle",
    ge = K ? figures.pointer : " ",
    he = pe ? figures.tick : fe ? figures.cross : String(Sr),
    Wr = getStringWidth(ge) + 1 + getStringWidth(he) + 1,
    Jt = Math.max(1, be - Wr),
    so;
  if (O[0] !== Vt || O[1] !== Jt)
    ((so = truncateToWidth(Vt, Jt)), (O[0] = Vt), (O[1] = Jt), (O[2] = so));
  else so = O[2];
  let Ye = so,
    $r = `${ge} ${he} ${Ye}`,
    Qt = Math.max(0, be - getStringWidth($r)),
    Yt = Bn > 0 ? `${Mr}/${Bn}` : "";
  const Bt = K ? "permission" : void 0;
  let Be;
  if (O[3] !== ge || O[4] !== Bt)
    ((Be = e(Text, { color: Bt, children: ge })),
      (O[3] = ge),
      (O[4] = Bt),
      (O[5] = Be));
  else Be = O[5];
  let tt;
  if (O[6] !== Ht || O[7] !== he)
    ((tt = e(Text, { color: Ht, children: he })),
      (O[6] = Ht),
      (O[7] = he),
      (O[8] = tt));
  else tt = O[8];
  const en = K ? "permission" : pe ? "success" : fe ? "error" : void 0,
    tn = !K && !ro;
  let nt;
  if (O[9] !== Ye || O[10] !== en || O[11] !== tn)
    ((nt = e(Text, { color: en, dimColor: tn, children: Ye })),
      (O[9] = Ye),
      (O[10] = en),
      (O[11] = tn),
      (O[12] = nt));
  else nt = O[12];
  let ot;
  if (O[13] !== Qt) ((ot = " ".repeat(Qt)), (O[13] = Qt), (O[14] = ot));
  else ot = O[14];
  let rt;
  if (O[15] !== ot || O[16] !== Be || O[17] !== tt || O[18] !== nt)
    ((rt = r(Text, {
      wrap: "truncate-end",
      children: [Be, " ", tt, " ", nt, ot],
    })),
      (O[15] = ot),
      (O[16] = Be),
      (O[17] = tt),
      (O[18] = nt),
      (O[19] = rt));
  else rt = O[19];
  const nn = K ? "permission" : pe ? "success" : fe ? "error" : void 0,
    on = !K && !ro,
    rn = oo ? `  ${oo}` : "";
  let st;
  if (O[20] !== Yt || O[21] !== nn || O[22] !== on || O[23] !== rn)
    ((st = r(Text, {
      wrap: "truncate-end",
      color: nn,
      dimColor: on,
      children: [Yt, rn],
    })),
      (O[20] = Yt),
      (O[21] = nn),
      (O[22] = on),
      (O[23] = rn),
      (O[24] = st));
  else st = O[24];
  let ao;
  if (O[25] !== rt || O[26] !== st)
    ((ao = r(Box, { children: [rt, st] })),
      (O[25] = rt),
      (O[26] = st),
      (O[27] = ao));
  else ao = O[27];
  return ao;
}
function WorkflowStatusBar(Dr) {
  let re = _(23),
    {
      name: at,
      done: it,
      total: lt,
      running: sn,
      elapsedMs: ct,
      complete: Ir,
      dotState: vr,
      phaseText: io,
      selected: lo,
    } = Dr,
    j = lo === void 0 ? !1 : lo,
    co;
  if (re[0] !== ct)
    ((co = ct !== void 0 ? formatBarElapsed(ct) : void 0), (re[0] = ct), (re[1] = co));
  else co = re[1];
  let uo = co,
    an = Ir ? ` \xB7 ${figures.ellipsis} to view` : "",
    ln = vr === "failed" ? "error" : "success",
    ut;
  if (re[2] !== ln)
    ((ut = e(Text, { color: ln, children: CLAUDE_BULLET_GLYPH })), (re[2] = ln), (re[3] = ut));
  else ut = re[3];
  let dt;
  if (re[4] !== at || re[5] !== j)
    ((dt = at
      ? r(Text, { color: j ? "claude" : void 0, bold: j, children: [at, " "] })
      : null),
      (re[4] = at),
      (re[5] = j),
      (re[6] = dt));
  else dt = re[6];
  let mt;
  if (re[7] !== it || re[8] !== sn || re[9] !== lt)
    ((mt = e(Ct, { done: it, total: lt, running: sn })),
      (re[7] = it),
      (re[8] = sn),
      (re[9] = lt),
      (re[10] = mt));
  else mt = re[10];
  const cn = !j,
    un = io ? ` \xB7 ${io}` : "",
    dn = ` \xB7 ${it}/${lt} agents`,
    mn = uo ? ` \xB7 ${uo}` : "";
  let pt;
  if (
    re[11] !== an ||
    re[12] !== j ||
    re[13] !== cn ||
    re[14] !== un ||
    re[15] !== dn ||
    re[16] !== mn
  )
    ((pt = r(Text, { dimColor: cn, bold: j, children: [un, dn, mn, an] })),
      (re[11] = an),
      (re[12] = j),
      (re[13] = cn),
      (re[14] = un),
      (re[15] = dn),
      (re[16] = mn),
      (re[17] = pt));
  else pt = re[17];
  let mo;
  if (re[18] !== pt || re[19] !== ut || re[20] !== dt || re[21] !== mt)
    ((mo = r(Text, { wrap: "truncate-end", children: [ut, " ", dt, mt, pt] })),
      (re[18] = pt),
      (re[19] = ut),
      (re[20] = dt),
      (re[21] = mt),
      (re[22] = mo));
  else mo = re[22];
  return mo;
}
function WorkflowHeader(Lr) {
  let V = _(18),
    { name: pn, subtext: fn, stats: ft, width: se } = Lr,
    gt;
  if (V[0] !== se)
    ((gt = HORIZONTAL_LINE_GLYPH.repeat(Math.max(1, se))), (V[0] = se), (V[1] = gt));
  else gt = V[1];
  let ht;
  if (V[2] !== gt)
    ((ht = e(Text, { color: "text", wrap: "truncate-end", children: gt })),
      (V[2] = gt),
      (V[3] = ht));
  else ht = V[3];
  let bt;
  if (V[4] !== pn)
    ((bt = r(Text, {
      bold: !0,
      color: "permission",
      wrap: "truncate-end",
      children: [" ", pn],
    })),
      (V[4] = pn),
      (V[5] = bt));
  else bt = V[5];
  let xt;
  if (V[6] !== fn)
    ((xt = e(Box, {
      flexGrow: 1,
      flexShrink: 1,
      overflow: "hidden",
      children: r(Text, {
        dimColor: !0,
        wrap: "truncate-end",
        children: [" ", fn],
      }),
    })),
      (V[6] = fn),
      (V[7] = xt));
  else xt = V[7];
  let yt;
  if (V[8] !== ft)
    ((yt = ft
      ? e(Box, {
          flexShrink: 0,
          children: r(Text, { dimColor: !0, children: [ft, " "] }),
        })
      : null),
      (V[8] = ft),
      (V[9] = yt));
  else yt = V[9];
  let kt;
  if (V[10] !== xt || V[11] !== yt || V[12] !== se)
    ((kt = r(Box, { width: se, overflow: "hidden", children: [xt, yt] })),
      (V[10] = xt),
      (V[11] = yt),
      (V[12] = se),
      (V[13] = kt));
  else kt = V[13];
  let po;
  if (V[14] !== ht || V[15] !== bt || V[16] !== kt)
    ((po = r(Box, { flexDirection: "column", children: [ht, bt, kt] })),
      (V[14] = ht),
      (V[15] = bt),
      (V[16] = kt),
      (V[17] = po));
  else po = V[17];
  return po;
}
function At(n) {
  let i = countMatching(n.agents, (f) => f.state === "done"),
    a = countMatching(n.agents, (f) => f.state === "error"),
    s = n.agents.length,
    l = i + a === s && s > 0,
    u = 0,
    c = 1 / 0,
    g = 0;
  for (let f of n.agents) {
    if (f.tokens) u += f.tokens;
    if (f.startedAt != null) {
      if (f.startedAt < c) c = f.startedAt;
      let y = f.lastProgressAt ?? f.startedAt;
      if (y > g) g = y;
    }
  }
  let h = c < 1 / 0 ? g - c : 0;
  return {
    title: n.title,
    status: l ? (a > 0 ? "failed" : "done") : "running",
    agents: n.agents,
    doneCount: i,
    totalCount: s,
    tokens: u,
    durationMs: h,
  };
}
function go(n) {
  return {
    title: n,
    status: "not-started",
    agents: [],
    doneCount: 0,
    totalCount: 0,
    tokens: 0,
    durationMs: 0,
  };
}
function bn(n) {
  return n.toLowerCase().trim();
}
function ho(n, i) {
  let a = bn(n),
    s = bn(i);
  if (!a || !s) return a === s;
  return a === s || a.startsWith(s) || s.startsWith(a);
}
function bo(n, i) {
  let a = new Set(),
    s = [];
  function l(u) {
    for (let c of i) {
      if (a.has(c)) continue;
      if (ho(u, c.title)) return (a.add(c), c);
    }
    return;
  }
  for (let u of n ?? []) {
    let c = l(u.title);
    s.push(c ? At(c) : go(u.title));
  }
  for (let u of i) if (!a.has(u)) s.push(At(u));
  return s;
}
function buildWorkflowPhaseGroups(n) {
  let i = collectWorkflowProgressEvents(n.workflowProgress),
    a = ue(i.agents, i.phaseTitles) ?? [],
    s = bo(n.phases, a);
  if (s.length === 0 && i.agents.length > 0)
    return [At({ phaseIndex: 0, title: "Agents", agents: i.agents })];
  return s;
}
var xe = 16;
function lZt(n, i) {
  return null;
}
var xn = xe + 8,
  Tt = "aeiou",
  xo = new Map([
    ["commit", "committing"],
    ["submit", "submitting"],
    ["format", "formatting"],
    ["edit", "editing"],
    ["exit", "exiting"],
    ["setup", null],
    ["cleanup", null],
    ["init", null],
  ]),
  yo = /^[A-Za-z]{3,12}$/;
function Po(n) {
  if (!yo.test(n)) return n;
  let i = n.toLowerCase(),
    a = xo.get(i);
  if (a !== void 0) return a === null ? n : n[0] + a.slice(1);
  if (i.endsWith("ing")) return n;
  if (i.endsWith("ie")) return `${n.slice(0, -2)}ying`;
  if (i.endsWith("e") && !i.endsWith("ee") && !i.endsWith("ye"))
    return `${n.slice(0, -1)}ing`;
  let s = i.at(-1);
  if (
    i.length <= 4 &&
    !Tt.includes(i.at(-3)) &&
    Tt.includes(i.at(-2)) &&
    !Tt.includes(s) &&
    !"wxy".includes(s)
  )
    return `${n}${s}ing`;
  return `${n}ing`;
}
var wt = " & ";
function formatCompactPhaseTitle(n) {
  let { titles: i, positionStart: a, totalPhases: s } = n,
    l = i.map(Po);
  if (l.length === 1) return `${truncateToWidth(l[0] ?? "", xe)} (${a}/${s})`;
  if (l.length === 2) {
    let c = l.map((h) => truncateToWidth(h, xe)).join(wt),
      g = Math.floor((xn - wt.length) / 2);
    return getStringWidth(c) <= xn ? c : l.map((h) => truncateToWidth(h, g)).join(wt);
  }
  let u = ` +${l.length - 1}`;
  return truncateToWidth(l[0] ?? "", xe - getStringWidth(u)) + u;
}
function countPhaseAgents(n, i) {
  let a = 0,
    s = 0;
  for (let l of n) ((a += l.doneCount), (s += l.totalCount));
  return { doneAgents: a, totalAgents: Math.max(i, s, a) };
}
function getWorkflowDescription(n) {
  if (n.script.length > 0) {
    let i = parseWorkflowScript(n.script);
    if (!("error" in i) && i.meta.description) return i.meta.description;
  }
  return n.description || n.summary || "";
}
function buildWorkflowHeaderProps(n, i, a, s) {
  let l =
      n.status === "completed"
        ? " \xB7 done"
        : n.status === "killed"
          ? " \xB7 stopped"
          : n.status === "paused"
            ? " \xB7 paused"
            : isTerminalTaskStatus(n.status)
              ? " \xB7 failed"
              : "",
    u = i,
    c = `${a.doneAgents}/${a.totalAgents} ${pluralize(a.totalAgents, "agent")} \xB7 ${formatBarElapsed(s)}${l}`;
  return {
    name: n.workflowName ?? n.summary ?? n.description,
    subtext: u,
    stats: c,
  };
}
function summarizeWorkflowAgents(n, i = 0) {
  let a = 0,
    s = 0,
    l = 0,
    u = 0,
    c = !1;
  for (let f of n) {
    if (f.type !== "workflow_agent") continue;
    if ((a++, f.state === "done")) (s++, u++);
    else if (f.state === "error") (l++, u++);
    else if (f.state === "start" || f.state === "progress") {
      if (((c = !0), f.startedAt !== void 0 || f.queuedAt === void 0)) u++;
    }
  }
  let g = Math.max(i, a),
    h = !c && a > 0 && s + l >= g;
  return {
    done: s,
    failedCount: l,
    running: c,
    total: g,
    started: u,
    complete: h,
  };
}
export {
  formatModelLabel,
  collectWorkflowProgressEvents,
  WorkflowProgressView,
  PROMPT_RESERVED_ROWS,
  useWorkflowDialogLayout,
  useWorkflowElapsedMs,
  WorkflowPhaseRow,
  WorkflowStatusBar,
  WorkflowHeader,
  buildWorkflowPhaseGroups,
  lZt,
  formatCompactPhaseTitle,
  countPhaseAgents,
  getWorkflowDescription,
  buildWorkflowHeaderProps,
  summarizeWorkflowAgents,
};
