// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../react/react.zhnvc798.js";
import { VirtualScrollViewportStateContext, useHasVirtualScrollViewport, useVirtualScrollViewportSize, useScrollViewport, useClaimScrollBox } from "../../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-state.js";
import { useTerminalSize } from "../../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { te } from "../../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { ScrollBox } from "../../../03-入口与运行时/会话UI(REPL)/scroll-box.js";
import { useCursorDeclaration } from "../../../02-功能模块/文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { o, t, zye, Od } from "../../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybindings } from "../../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { BackgroundText } from "../../../01-核心基础设施/共享小工具-未细化/background-text.js";
import { e, r } from "../../react/react.kwtapczy.js";
import { Qt, re, De, dn, V, C, d, F } from "../React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function wt(en) {
  return [en.props.id ?? en.props.title, en.props.title];
}
function vt(eo) {
  return eo + 1;
}
function kt(no) {
  return no - 1;
}
function xt(to, Pe) {
  let [, it] = Pe;
  return to + (it ? te(it) : 0) + 2 + 1;
}
var m = Qt({
  selectedTab: void 0,
  width: void 0,
  headerFocused: !1,
  focusHeader: () => {},
  blurHeader: () => {},
  registerOptIn: () => () => {},
});
function qp(Pe) {
  let l = _(45),
    {
      title: oe,
      color: Fn,
      defaultTab: Hn,
      children: G,
      hidden: f,
      useFullWidth: Ee,
      selectedTab: Mn,
      onTabChange: On,
      banner: se,
      disableNavigation: y,
      initialHeaderFocused: An,
      contentHeight: ie,
      navFromContent: Bn,
    } = Pe,
    Ne = An === void 0 ? !0 : An,
    Pt = Bn === void 0 ? !1 : Bn,
    { columns: Pn } = useTerminalSize(),
    x = G.map(wt),
    En = Hn ? x.findIndex((Et) => Hn === Et[0]) : 0,
    Ke = Mn !== void 0,
    [Nt, Kt] = d(En !== -1 ? En : 0),
    Nn = Ke ? x.findIndex((Wt) => Wt[0] === Mn) : -1,
    A = Ke ? (Nn !== -1 ? Nn : 0) : Nt,
    ae = De(VirtualScrollViewportStateContext),
    T = useScrollViewport(),
    D = useClaimScrollBox(),
    We = C(null),
    [le, Vt] = d(0),
    Kn;
  if (l[0] !== le)
    ((Kn = () => {
      let Wn = We.current ? Od(We.current).height : 0;
      if (Wn !== le) Vt(Wn);
    }),
      (l[0] = le),
      (l[1] = Kn));
  else Kn = l[1];
  dn(Kn);
  let U = (f ? 0 : 2) + le,
    Vn,
    jn;
  if (l[2] !== D || l[3] !== U)
    ((Vn = () => {
      if (!D) {
        return;
      }
      return (D(U), () => D(null));
    }),
      (jn = [D, U]),
      (l[2] = D),
      (l[3] = U),
      (l[4] = Vn),
      (l[5] = jn));
  else ((Vn = l[4]), (jn = l[5]));
  dn(Vn, jn);
  let Gn;
  if (l[6] === MEMO_CACHE_SENTINEL) ((Gn = { rows: 0, columns: 0 }), (l[6] = Gn));
  else Gn = l[6];
  let { rows: jt } = useVirtualScrollViewportSize(Gn),
    R = D !== null && T !== null,
    Ve = T?.attach,
    je = R ? jt - U : void 0,
    Un;
  if (l[7] !== ae || l[8] !== R)
    ((Un = ae && R ? { ...ae, claimScrollBox: null } : null),
      (l[7] = ae),
      (l[8] = R),
      (l[9] = Un));
  else Un = l[9];
  let Ge = Un,
    spatial = !1,
    Ue = C(null),
    { focus: Ye, blur: inkBlur } = zye(),
    [B, Y] = d(Ne),
    Yn;
  if (l[10] !== Ye)
    ((Yn = () => {
      if (!1 && Ue.current) Ye(Ue.current);
      Y(!0);
    }),
      (l[10] = Ye),
      (l[11] = Yn));
  else Yn = l[11];
  let _n = Yn,
    qn;
  if (l[12] === MEMO_CACHE_SENTINEL)
    ((qn = () => {
      Y(!1);
    }),
      (l[12] = qn));
  else qn = l[12];
  let Gt = qn,
    [Ut, zn] = d(0),
    Jn;
  if (l[13] === MEMO_CACHE_SENTINEL) ((Jn = () => (zn(vt), () => zn(kt))), (l[13] = Jn));
  else Jn = l[13];
  let Yt = Jn,
    q = Ut > 0,
    Ln = B || !q,
    Zn = (Qn) => {
      let Xn = x[Qn]?.[0];
      if (Ke && On && Xn) On(Xn);
      else Kt(Qn);
      _n();
    },
    de = (_t) => {
      Zn((A + x.length + _t) % x.length);
    };
  const _e = !f && !y && Ln;
  let $n;
  if (l[14] !== _e)
    (($n = { context: "Tabs", isActive: _e }), (l[14] = _e), (l[15] = $n));
  else $n = l[15];
  useKeybindings({ "tabs:next": () => de(1), "tabs:previous": () => de(-1) }, $n);
  let et;
  if (l[16] !== y || l[17] !== B || l[18] !== f || l[19] !== q)
    ((et = (ce) => {
      if (f || y) {
        return;
      }
      if (!q) {
        return;
      }
      if (ce.key === "up" || ce.key === "down") {
        if ((ce.preventDefault(), B && ce.key === "down")) Y(!1);
      }
    }),
      (l[16] = y),
      (l[17] = B),
      (l[18] = f),
      (l[19] = q),
      (l[20] = et));
  else et = l[20];
  let nt = et;
  const qe = !0 && Pt && !B && q && !f && !y;
  let tt;
  if (l[21] !== qe)
    ((tt = { context: "Tabs", isActive: qe }), (l[21] = qe), (l[22] = tt));
  else tt = l[22];
  useKeybindings({ "tabs:next": () => de(1), "tabs:previous": () => de(-1) }, tt);
  let qt = oe ? te(oe) + 1 : 0,
    zt = x.reduce(xt, 0),
    Jt = qt + zt,
    ot = Ee ? Math.max(0, Pn - Jt) : 0,
    z = Ee ? Pn : void 0;
  const ze = o,
    Lt = "column",
    Je = !1 ? void 0 : 0,
    Le = !1 ? void 0 : Ne,
    Qe = !1 ? void 0 : nt,
    Xe = T ? 0 : void 0,
    $e =
      !f &&
      r(o, {
        ref: !1 ? Ue : void 0,
        tabIndex: !1 ? 0 : void 0,
        autoFocus: !1 ? Ne : void 0,
        onFocus: !1 ? () => Y(!0) : void 0,
        onBlur: !1 ? () => Y(!1) : void 0,
        onKeyDown: !1 ? nt : void 0,
        flexDirection: "row",
        gap: 1,
        flexShrink: T ? 0 : void 0,
        alignSelf: !1 && !Ee ? "flex-start" : void 0,
        children: [
          oe !== void 0 && e(t, { bold: !0, color: Fn, children: oe }),
          x.map((Xt, rt) => {
            let [Zt, $t] = Xt;
            return e(
              JWe,
              {
                title: $t,
                isCurrent: A === rt,
                headerFocused: Ln && !y,
                color: Fn,
                onClick: y ? void 0 : () => Zn(rt),
              },
              Zt,
            );
          }),
          ot > 0 && e(t, { children: " ".repeat(ot) }),
        ],
      });
  let ue;
  if (l[23] !== se)
    ((ue =
      se != null &&
      e(o, { ref: We, flexDirection: "column", flexShrink: 0, children: se })),
      (l[23] = se),
      (l[24] = ue));
  else ue = l[24];
  let fe;
  if (
    l[25] !== Ve ||
    l[26] !== Ge ||
    l[27] !== G ||
    l[28] !== ie ||
    l[29] !== z ||
    l[30] !== f ||
    l[31] !== T ||
    l[32] !== R ||
    l[33] !== je ||
    l[34] !== A
  )
    ((fe = R
      ? e(o, {
          width: z,
          marginTop: f ? 0 : 1,
          flexShrink: 0,
          children: e(
            ScrollBox,
            {
              ref: Ve,
              flexDirection: "column",
              flexShrink: 0,
              maxHeight: je,
              stickyScroll: !1,
              children: e(VirtualScrollViewportStateContext, { value: Ge, children: G }),
            },
            A,
          ),
        })
      : e(o, {
          width: z,
          marginTop: f ? 0 : 1,
          height: ie,
          overflowY: ie !== void 0 ? "hidden" : void 0,
          flexShrink: T ? 0 : void 0,
          children: G,
        })),
      (l[25] = Ve),
      (l[26] = Ge),
      (l[27] = G),
      (l[28] = ie),
      (l[29] = z),
      (l[30] = f),
      (l[31] = T),
      (l[32] = R),
      (l[33] = je),
      (l[34] = A),
      (l[35] = fe));
  else fe = l[35];
  let st;
  if (
    l[36] !== ze ||
    l[37] !== Je ||
    l[38] !== Le ||
    l[39] !== Qe ||
    l[40] !== Xe ||
    l[41] !== $e ||
    l[42] !== ue ||
    l[43] !== fe
  )
    ((st = r(ze, {
      flexDirection: Lt,
      tabIndex: Je,
      autoFocus: Le,
      onKeyDown: Qe,
      flexShrink: Xe,
      children: [$e, ue, fe],
    })),
      (l[36] = ze),
      (l[37] = Je),
      (l[38] = Le),
      (l[39] = Qe),
      (l[40] = Xe),
      (l[41] = $e),
      (l[42] = ue),
      (l[43] = fe),
      (l[44] = st));
  else st = l[44];
  return e(m.Provider, {
    value: {
      selectedTab: x[A][0],
      width: z,
      headerFocused: B,
      focusHeader: _n,
      blurHeader: Gt,
      registerOptIn: Yt,
    },
    children: st,
  });
}
function JWe(oo) {
  let me = _(15),
    { title: he, isCurrent: P, headerFocused: at, color: pe, onClick: be } = oo,
    [nn, lt] = d(!1),
    tn = be !== void 0;
  const on = P && at;
  let dt;
  if (me[0] !== on)
    ((dt = { line: 0, column: 1, active: on }), (me[0] = on), (me[1] = dt));
  else dt = me[1];
  let rn = useCursorDeclaration(dt),
    sn = pe && P && at,
    ct,
    ut;
  if (me[2] === MEMO_CACHE_SENTINEL)
    ((ct = () => lt(!0)), (ut = () => lt(!1)), (me[2] = ct), (me[3] = ut));
  else ((ct = me[2]), (ut = me[3]));
  let we;
  if (
    me[4] !== tn ||
    me[5] !== pe ||
    me[6] !== sn ||
    me[7] !== nn ||
    me[8] !== P ||
    me[9] !== he
  )
    ((we = sn
      ? e(BackgroundText, { color: pe, bold: !0, padded: !0, children: he })
      : r(t, {
          inverse: P,
          bold: P,
          underline: nn && tn,
          children: [" ", he, " "],
        })),
      (me[4] = tn),
      (me[5] = pe),
      (me[6] = sn),
      (me[7] = nn),
      (me[8] = P),
      (me[9] = he),
      (me[10] = we));
  else we = me[10];
  let ft;
  if (me[11] !== rn || me[12] !== be || me[13] !== we)
    ((ft = e(o, {
      ref: rn,
      onClick: be,
      onMouseEnter: ct,
      onMouseLeave: ut,
      children: we,
    })),
      (me[11] = rn),
      (me[12] = be),
      (me[13] = we),
      (me[14] = ft));
  else ft = me[14];
  return ft;
}
function ss(ro) {
  let co = _(4),
    { title: so, id: io, children: an } = ro,
    { selectedTab: ao, width: ln } = De(m),
    lo = useHasVirtualScrollViewport();
  if (ao !== (io ?? so)) {
    return null;
  }
  const cn = lo ? 0 : void 0;
  let ht;
  if (co[0] !== an || co[1] !== cn || co[2] !== ln)
    ((ht = e(o, { width: ln, flexShrink: cn, children: an })),
      (co[0] = an),
      (co[1] = cn),
      (co[2] = ln),
      (co[3] = ht));
  else ht = co[3];
  return ht;
}
function a0e() {
  let { width: uo } = De(m);
  return uo;
}
function Jd() {
  let pt = _(6),
    {
      headerFocused: un,
      focusHeader: fn,
      blurHeader: hn,
      registerOptIn: ve,
    } = De(m),
    bt;
  if (pt[0] !== ve) ((bt = [ve]), (pt[0] = ve), (pt[1] = bt));
  else bt = pt[1];
  dn(ve, bt);
  let mt;
  if (pt[2] !== hn || pt[3] !== fn || pt[4] !== un)
    ((mt = { headerFocused: un, focusHeader: fn, blurHeader: hn }),
      (pt[2] = hn),
      (pt[3] = fn),
      (pt[4] = un),
      (pt[5] = mt));
  else mt = pt[5];
  return mt;
}
export { qp, JWe, ss, a0e, Jd };
