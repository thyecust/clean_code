// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { lit as S } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { us, Ux, WL } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { getMainLoopModel, fvt } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { te, truncateToWidth } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { o, t, ct, jr, tn, zye, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { v9e } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { Tf } from "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import { vt } from "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import { Xw, ma } from "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import { Os } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { Rs } from "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import { dd, _p } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { ks } from "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { Ne, Ze } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { Ka } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { tO } from "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import { je } from "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { L_, re, E, vr, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { L } from "../Teammates团队/chunk-mrfx53ye.js";
import { Z3 } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { G } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { p, en } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function ui(l = Xw) {
  let s = C(Date.now());
  return re(() => ma(s.current, l), [l]);
}
function Gm() {
  return C(Date.now()).current;
}
function fa(l, s = Xw) {
  let a = Un(s, l);
  return { remountKey: a ? "settled" : "held", settled: a };
}
function c9e() {
  let [l, s] = d(0),
    a = re(() => s((u) => u + 1), []);
  return { epoch: l, noteAttempt: a };
}
function $o() {
  let l = C(null),
    { epoch: s, noteAttempt: a } = c9e(),
    u = re((v = Xw) => l.current !== null && ma(l.current, v), []),
    c = re(() => {
      ((l.current = Date.now()), a());
    }, [a]);
  return { refusedWithin: u, noteRefused: c, epoch: s };
}
F();
F();
function cE(l) {
  if (typeof l === "string") return l;
  if (typeof l === "number") return String(l);
  if (!l) return "";
  if (Array.isArray(l)) return l.map(cE).join("");
  if (L_(l)) return cE(l.props.children);
  return "";
}
function ea(kf) {
  return String(kf.value);
}
function na() {
  return null;
}
function ta() {
  return "";
}
function oa() {
  return null;
}
function ra() {
  return "";
}
function ia() {
  return "";
}
function la() {
  return null;
}
function sa() {
  return "";
}
function ua() {
  return "";
}
function aa() {
  return null;
}
function ca() {
  return "";
}
function da() {
  return null;
}
function pa() {
  return null;
}
function va() {
  return "";
}
function ba(Mf) {
  return Mf.type !== "input";
}
function xa() {
  return "";
}
function ha() {
  return null;
}
function ga(Nf) {
  return String(Nf.value);
}
function ya() {
  return null;
}
function Ta() {
  return null;
}
function Oa() {
  return "";
}
function Sa() {
  return null;
}
function wa() {
  return "";
}
function Ia() {
  return "";
}
function Ca() {
  return null;
}
function ka() {
  return null;
}
function Ma() {
  return null;
}
function Da() {
  return "";
}
function Va() {
  return "";
}
function Aa() {
  return "";
}
function Ra() {
  return "";
}
function Fa() {
  return null;
}
function Ea() {
  return null;
}
function Pa() {
  return null;
}
function Na(Wf) {
  return Wf.type !== "input";
}
function Wa() {
  return "";
}
function $a($f, Lf) {
  return $f - Lf;
}
function La(Uf) {
  return String(Uf + 1);
}
function Ua() {
  return null;
}
function _a() {
  return "";
}
function ja() {
  return null;
}
function Ba() {
  return null;
}
function za() {
  return "";
}
function Ga() {
  return "";
}
function Ha(Yf) {
  return Yf.slice(0, -1);
}
function dn(As) {
  let Fs = _(3),
    [ki, yf] = d(As),
    Po = C(As),
    Es;
  if (Fs[0] === p)
    ((Es = (Of) => {
      ((Po.current = Of(Po.current)), yf(Po.current));
    }),
      (Fs[0] = Es));
  else Es = Fs[0];
  let Sf = Es,
    Ps;
  if (Fs[1] !== ki) ((Ps = [ki, Po, Sf]), (Fs[1] = ki), (Fs[2] = Ps));
  else Ps = Fs[2];
  return Ps;
}
function qn() {
  return dn("");
}
function mo(l) {
  if (l.length <= 1) return l[0] ?? "";
  if (l.length === 2) return `${l[0]} or ${l[1]}`;
  return `${l.slice(0, -1).join(", ")}, or ${l.at(-1)}`;
}
var Sr = 300;
function Zu(l) {
  return ` \u2026 +${l} more characters`;
}
function ml(l) {
  if (l.length <= Sr) return l;
  let s = us(l, Sr);
  if (s === l) return l;
  let a = [...l].length - Sr;
  return s + Zu(a);
}
function wr(No, Ns) {
  let Wo = _(17),
    kn = Ns === void 0 ? Xw : Ns,
    Mi = ui(kn),
    Ws;
  if (Wo[0] !== No || Wo[1] !== Mi || Wo[2] !== kn)
    ((Ws = No === void 0 ? Mi : () => ma(No, kn)),
      (Wo[0] = No),
      (Wo[1] = Mi),
      (Wo[2] = kn),
      (Wo[3] = Ws));
  else Ws = Wo[3];
  let It = Ws,
    { refusedWithin: Ct, noteRefused: kt } = $o(),
    $s;
  if (Wo[4] !== It || Wo[5] !== kt || Wo[6] !== Ct || Wo[7] !== kn)
    (($s = () => {
      if (It() || Ct(kn)) {
        return (kt(), !0);
      }
      return !1;
    }),
      (Wo[4] = It),
      (Wo[5] = kt),
      (Wo[6] = Ct),
      (Wo[7] = kn),
      (Wo[8] = $s));
  else $s = Wo[8];
  let Di = $s,
    Ls;
  if (Wo[9] !== It || Wo[10] !== kt || Wo[11] !== Ct || Wo[12] !== kn)
    ((Ls = () => {
      if (!It() && !Ct(kn)) {
        return !1;
      }
      return (kt(), !0);
    }),
      (Wo[9] = It),
      (Wo[10] = kt),
      (Wo[11] = Ct),
      (Wo[12] = kn),
      (Wo[13] = Ls));
  else Ls = Wo[13];
  let Vi = Ls,
    Us;
  if (Wo[14] !== Di || Wo[15] !== Vi)
    ((Us = { refuse: Di, refuseCharacter: Vi }),
      (Wo[14] = Di),
      (Wo[15] = Vi),
      (Wo[16] = Us));
  else Us = Wo[16];
  return Us;
}
function X8(wf) {
  let mn = _(63),
    {
      options: Te,
      onChange: Lo,
      onFocus: lt,
      onCancel: st,
      isDisabled: _s,
      disableSelection: js,
      defaultValue: Mt,
      refuseInput: ro,
    } = wf,
    sn = _s === void 0 ? !1 : _s,
    Je = js === void 0 ? !1 : js,
    [Uo, Dt, Ke] = qn(),
    [_o, io] = d(null),
    Bs;
  if (mn[0] === p) ((Bs = fvt()), (mn[0] = Bs));
  else Bs = mn[0];
  let Ai = Bs,
    [Vt, lo, Fn] = dn(null),
    Ks;
  if (mn[1] !== Te)
    ((Ks = Te.map(ea).join("\x00")), (mn[1] = Te), (mn[2] = Ks));
  else Ks = mn[2];
  let jo = Ks,
    [zs, If] = d(jo);
  if (zs !== jo) (If(jo), Fn(na), Ke(ta));
  let [ut, Ri, Bn] = dn(null);
  if (zs !== jo && ut !== null) (Bn(oa), Ke(ra));
  let $e = ut !== null && Te[ut - 1]?.type === "input" ? Te[ut - 1] : null,
    Gs = C(null);
  (dd(Gs, !sn), Rs("select", !!st && !sn));
  let Hs;
  if (
    mn[3] !== Je ||
    mn[4] !== $e ||
    mn[5] !== Lo ||
    mn[6] !== lt ||
    mn[7] !== Te ||
    mn[8] !== Ke ||
    mn[9] !== Fn ||
    mn[10] !== Bn
  )
    ((Hs = (Fi) => {
      if (Je) {
        return;
      }
      if ($e) {
        if (Fi === "") {
          io("Enter some text, or Escape for the list.");
          return;
        }
        if (Lo?.($e.value) === !1) {
          return;
        }
        (Ke(ia), Bn(la));
        return;
      }
      let At = Number.parseInt(Fi, 10);
      if (!Number.isFinite(At) || At < 1 || At > Te.length) {
        (io(
          `Invalid selection "${Fi}". Enter a number between 1 and ${Te.length}.`,
        ),
          Ke(sa));
        return;
      }
      let Rt = Te[At - 1];
      if (Rt.disabled) {
        (io(`Option ${At} is disabled.`), Ke(ua));
        return;
      }
      if (Rt.type === "input") {
        (Bn(() => At), Fn(aa));
        let qs = Rt.initialValue ?? "";
        (Ke(() => qs), Rt.onChange(qs), lt?.(Rt.value));
        return;
      }
      if (Lo?.(Rt.value) === !1) {
        return;
      }
      (Ke(ca), Fn(da));
    }),
      (mn[3] = Je),
      (mn[4] = $e),
      (mn[5] = Lo),
      (mn[6] = lt),
      (mn[7] = Te),
      (mn[8] = Ke),
      (mn[9] = Fn),
      (mn[10] = Bn),
      (mn[11] = Hs));
  else Hs = mn[11];
  let Bo = Hs,
    Js;
  if (
    mn[12] !== Dt ||
    mn[13] !== Je ||
    mn[14] !== lo ||
    mn[15] !== $e ||
    mn[16] !== Ri ||
    mn[17] !== sn ||
    mn[18] !== st ||
    mn[19] !== lt ||
    mn[20] !== Te ||
    mn[21] !== ro ||
    mn[22] !== Ke ||
    mn[23] !== Fn ||
    mn[24] !== Bn ||
    mn[25] !== Bo
  )
    ((Js = (Ce) => {
      if (sn) {
        return;
      }
      if (Ce.key === "escape" && Ce.name === "escape") {
        if ((Ce.preventDefault(), $e)) {
          (Bn(pa), Ke(va));
          let Xs = Te.find(ba) ?? Te[0];
          if (Xs) lt?.(Xs.value);
          return;
        }
        st?.();
        return;
      }
      if (Je) {
        return;
      }
      if (Ce.key === "return" && Ce.name === "return") {
        if ((Ce.preventDefault(), ro?.())) {
          return;
        }
        if ($e || Dt.current.length > 0) {
          Bo(Dt.current);
          return;
        }
        if (Ai && lo.current !== null) Bo(String(lo.current + 1));
        return;
      }
      if (Ce.key === "backspace" || Ce.key === "delete") {
        Ce.preventDefault();
        let Ys = Dt.current.slice(0, -1);
        if ($e && $e.onChange(Ys) === !1) {
          return;
        }
        Ke(() => Ys);
        return;
      }
      if (
        Ai &&
        !$e &&
        Ri.current === null &&
        (Ce.name === "up" || Ce.name === "down")
      ) {
        if ((Ce.preventDefault(), ro?.())) {
          return;
        }
        (io(null), Ke(xa));
        let Ko = Te.length;
        if (Ko === 0) {
          return;
        }
        let Qs = lo.current;
        let Zs =
          Qs === null
            ? Ce.name === "down"
              ? 0
              : Ko - 1
            : (Qs + (Ce.name === "down" ? 1 : -1) + Ko) % Ko;
        Fn(() => Zs);
        let eu = Te[Zs];
        if (eu) lt?.(eu.value);
        return;
      }
      if ($e) {
        if (Ce.key.length === 1 && !Ce.ctrl && !Ce.meta) {
          Ce.preventDefault();
          let nu = Dt.current + Ce.key;
          if ($e.onChange(nu) === !1) {
            return;
          }
          Ke(() => nu);
        }
        return;
      }
      let tu = Ux(Ce.key);
      if (/^[0-9]$/.test(tu)) {
        if ((Ce.preventDefault(), ro?.())) {
          return;
        }
        (io(null), Ke((Cf) => Cf + tu), Fn(ha));
      }
    }),
      (mn[12] = Dt),
      (mn[13] = Je),
      (mn[14] = lo),
      (mn[15] = $e),
      (mn[16] = Ri),
      (mn[17] = sn),
      (mn[18] = st),
      (mn[19] = lt),
      (mn[20] = Te),
      (mn[21] = ro),
      (mn[22] = Ke),
      (mn[23] = Fn),
      (mn[24] = Bn),
      (mn[25] = Bo),
      (mn[26] = Js));
  else Js = mn[26];
  let Ei = Js,
    ou;
  if (
    mn[27] !== Uo ||
    mn[28] !== $e ||
    mn[29] !== ut ||
    mn[30] !== st ||
    mn[31] !== Te.length
  )
    ((ou = $e
      ? `Enter text for option ${ut} (${cE($e.label)}), or Escape for the list: ${Uo}`
      : `Select with numbers [1-${Te.length}]${Ai ? " or up / down arrow keys" : ""}. Then ${mo(["Enter to submit", ...(st ? ["Escape to cancel"] : [])])}: ${Uo}`),
      (mn[27] = Uo),
      (mn[28] = $e),
      (mn[29] = ut),
      (mn[30] = st),
      (mn[31] = Te.length),
      (mn[32] = ou));
  else ou = mn[32];
  let Ft = ou,
    zo;
  if (mn[33] !== Ft) ((zo = te(Ft)), (mn[33] = Ft), (mn[34] = zo));
  else zo = mn[34];
  const Pi = !sn && !Je && Vt === null;
  let ru;
  if (mn[35] !== zo || mn[36] !== Pi)
    ((ru = { line: 0, column: zo, active: Pi, visible: !0 }),
      (mn[35] = zo),
      (mn[36] = Pi),
      (mn[37] = ru));
  else ru = mn[37];
  let Ni = _p(ru),
    Go;
  if (mn[38] !== Ei || mn[39] !== sn)
    ((Go = sn ? {} : { tabIndex: 0, onKeyDown: Ei }),
      (mn[38] = Ei),
      (mn[39] = sn),
      (mn[40] = Go));
  else Go = mn[40];
  let Ho;
  if (
    mn[41] !== Mt ||
    mn[42] !== Je ||
    mn[43] !== Vt ||
    mn[44] !== sn ||
    mn[45] !== Te
  ) {
    let at;
    if (mn[47] !== Mt || mn[48] !== Je || mn[49] !== Vt || mn[50] !== sn)
      ((at = (Wi, iu) =>
        e(
          jt,
          {
            index: iu + 1,
            option: Wi,
            selected: Mt !== void 0 && Wi.value === Mt,
            focused: Vt === iu && !sn && !Je,
          },
          String(Wi.value),
        )),
        (mn[47] = Mt),
        (mn[48] = Je),
        (mn[49] = Vt),
        (mn[50] = sn),
        (mn[51] = at));
    else at = mn[51];
    Ho = Te.map(at);
    ((mn[41] = Mt),
      (mn[42] = Je),
      (mn[43] = Vt),
      (mn[44] = sn),
      (mn[45] = Te),
      (mn[46] = Ho));
  } else Ho = mn[46];
  let at;
  if (mn[52] !== _o)
    ((at = _o && e(t, { children: _o })), (mn[52] = _o), (mn[53] = at));
  else at = mn[53];
  let qo;
  if (mn[54] !== Ni || mn[55] !== Je || mn[56] !== Ft)
    ((qo = !Je && e(o, { ref: Ni, children: e(t, { children: Ft }) })),
      (mn[54] = Ni),
      (mn[55] = Je),
      (mn[56] = Ft),
      (mn[57] = qo));
  else qo = mn[57];
  let lu;
  if (mn[58] !== Go || mn[59] !== Ho || mn[60] !== at || mn[61] !== qo)
    ((lu = r(o, {
      ref: Gs,
      flexDirection: "column",
      ...Go,
      children: [Ho, at, qo],
    })),
      (mn[58] = Go),
      (mn[59] = Ho),
      (mn[60] = at),
      (mn[61] = qo),
      (mn[62] = lu));
  else lu = mn[62];
  return lu;
}
function fOt(Df) {
  let ke = _(91),
    {
      options: ie,
      defaultValue: Jo,
      onChange: $i,
      onSubmit: Li,
      onFocus: dt,
      onCancel: ft,
      isDisabled: su,
      submitButtonText: Ui,
      refuseInput: Kn,
    } = Df,
    uu;
  if (ke[0] !== Jo)
    ((uu = Jo === void 0 ? [] : Jo), (ke[0] = Jo), (ke[1] = uu));
  else uu = ke[1];
  let vn = uu,
    un = su === void 0 ? !1 : su,
    [Xo, Et, Me] = qn(),
    [Yo, Mn] = d(null),
    au;
  if (ke[2] === p) ((au = fvt()), (ke[2] = au));
  else au = ke[2];
  let so = au,
    [Pt, uo, xn] = dn(null),
    [En, Qo, bn] = dn(null),
    cu;
  if (ke[3] !== ie)
    ((cu = ie.map(ga).join("\x00")), (ke[3] = ie), (ke[4] = cu));
  else cu = ke[4];
  let Zo = cu,
    [du, Vf] = d(Zo);
  if (du !== Zo) (Vf(Zo), xn(ya), bn(Ta), Me(Oa));
  let fu;
  if (ke[5] !== vn || ke[6] !== ie)
    ((fu = () =>
      new Set(
        ie.flatMap((pu, Af) =>
          !pu.disabled && vn.includes(pu.value) ? [Af] : [],
        ),
      )),
      (ke[5] = vn),
      (ke[6] = ie),
      (ke[7] = fu));
  else fu = ke[7];
  let _i = fu,
    [pt, mu] = d(null),
    er = C(!1),
    ao = C(!1),
    vu;
  if (ke[8] !== Li || ke[9] !== pt)
    ((vu = () => {
      if (pt !== null) {
        let Rf = [...pt];
        (mu(null), (er.current = !1), Li?.(Rf));
      }
    }),
      (ke[8] = Li),
      (ke[9] = pt),
      (ke[10] = vu));
  else vu = ke[10];
  let bu;
  if (ke[11] !== pt) ((bu = [pt]), (ke[11] = pt), (ke[12] = bu));
  else bu = ke[12];
  E(vu, bu);
  let [Ye, nr, Dn] = dn(null);
  if (du !== Zo && Ye !== null) (Dn(Sa), Me(wa));
  let Pe = Ye && ie[Ye.index - 1]?.type === "input" ? ie[Ye.index - 1] : null,
    xu = C(null);
  (dd(xu, !un), Rs("multi-select", !!ft && !un));
  let hu;
  if (
    ke[13] !== $i ||
    ke[14] !== Me ||
    ke[15] !== xn ||
    ke[16] !== Dn ||
    ke[17] !== bn
  )
    ((hu = (gu) => {
      if (((er.current = !0), $i?.([...gu]) === !1)) {
        er.current = !1;
        return;
      }
      (mu(gu), Me(Ia), Dn(Ca), xn(ka), bn(Ma));
    }),
      (ke[13] = $i),
      (ke[14] = Me),
      (ke[15] = xn),
      (ke[16] = Dn),
      (ke[17] = bn),
      (ke[18] = hu));
  else hu = ke[18];
  let Pn = hu,
    yu;
  if (
    ke[19] !== vn ||
    ke[20] !== Pn ||
    ke[21] !== Pe ||
    ke[22] !== Ye ||
    ke[23] !== dt ||
    ke[24] !== ie ||
    ke[25] !== Me ||
    ke[26] !== xn ||
    ke[27] !== Dn ||
    ke[28] !== bn
  )
    ((yu = (Tu) => {
      if (Pe && Ye) {
        if (Tu === "") {
          Mn("Enter some text, or Escape for the list.");
          return;
        }
        Pn([...Ye.stashed, Pe.value]);
        return;
      }
      let ji = Tu.trim();
      if (ji === "") {
        Pn(vn);
        return;
      }
      let Ou = ji.split(/[\s,]+/).filter(Boolean);
      if (Ou.length === 0) {
        Pn(vn);
        return;
      }
      let Su = new Set();
      let Bi = [];
      let mt = null;
      for (const tr of Ou) {
        if (!/^\d+$/.test(tr)) {
          (Mn(
            `Invalid selection "${tr}". Enter numbers between 1 and ${ie.length}, comma- or space-separated.`,
          ),
            Me(Da));
          return;
        }
        let bt = Number.parseInt(tr, 10);
        if (Su.has(bt)) {
          continue;
        }
        if ((Su.add(bt), bt < 1 || bt > ie.length)) {
          (Mn(
            `Invalid selection "${tr}". Enter numbers between 1 and ${ie.length}, comma- or space-separated.`,
          ),
            Me(Va));
          return;
        }
        let or = ie[bt - 1];
        if (or.disabled) {
          (Mn(`Option ${bt} is disabled.`), Me(Aa));
          return;
        }
        if (or.type === "input") {
          if (mt) {
            (Mn("Only one free-text option can be included per selection."),
              Me(Ra));
            return;
          }
          mt = { index: bt, opt: or };
          continue;
        }
        Bi.push(or.value);
      }
      if (mt?.opt) {
        (Dn(() => ({ index: mt.index, stashed: Bi, raw: ji })), xn(Fa), bn(Ea));
        let wu = mt.opt.initialValue ?? "";
        (Me(() => wu), mt.opt.onChange(wu), dt?.(mt.opt.value));
        return;
      }
      Pn(Bi);
    }),
      (ke[19] = vn),
      (ke[20] = Pn),
      (ke[21] = Pe),
      (ke[22] = Ye),
      (ke[23] = dt),
      (ke[24] = ie),
      (ke[25] = Me),
      (ke[26] = xn),
      (ke[27] = Dn),
      (ke[28] = bn),
      (ke[29] = yu));
  else yu = ke[29];
  let rr = yu,
    Iu;
  if (
    ke[30] !== Et ||
    ke[31] !== _i ||
    ke[32] !== Pn ||
    ke[33] !== uo ||
    ke[34] !== Pe ||
    ke[35] !== Ye ||
    ke[36] !== nr ||
    ke[37] !== un ||
    ke[38] !== ft ||
    ke[39] !== dt ||
    ke[40] !== ie ||
    ke[41] !== Kn ||
    ke[42] !== Me ||
    ke[43] !== xn ||
    ke[44] !== Dn ||
    ke[45] !== bn ||
    ke[46] !== rr ||
    ke[47] !== Qo
  )
    ((Iu = (he) => {
      if (un) {
        return;
      }
      if (he.key === "escape" && he.name === "escape") {
        if ((he.preventDefault(), Ye)) {
          let { raw: Ff } = Ye;
          (Dn(Pa), Me(() => Ff));
          let Cu = ie.find(Na) ?? ie[0];
          if (Cu) dt?.(Cu.value);
          return;
        }
        ft?.();
        return;
      }
      if (he.key === "return" && he.name === "return") {
        if ((he.preventDefault(), ao.current)) {
          (Kn?.(),
            (ao.current = !1),
            Me(Wa),
            Mn(
              "Part of that entry arrived before the list was ready \u2014 enter your selection again.",
            ));
          return;
        }
        if (Kn?.()) {
          return;
        }
        if (er.current) {
          return;
        }
        if (so && !Pe && Et.current.length === 0 && Qo.current !== null) {
          let ku = [...Qo.current].sort($a);
          if (ku.length === 0) Pn([]);
          else rr(ku.map(La).join(" "));
          return;
        }
        rr(Et.current);
        return;
      }
      if (he.key === "backspace" || he.key === "delete") {
        he.preventDefault();
        let Mu = Et.current;
        let Ki = Mu.slice(0, -1);
        if (Pe && Pe.onChange(Ki) === !1) {
          return;
        }
        if ((Me(() => Ki), !Pe && Mu !== Ki)) bn(Ua);
        return;
      }
      if (
        so &&
        !Pe &&
        nr.current === null &&
        (he.name === "up" || he.name === "down")
      ) {
        if ((he.preventDefault(), Kn?.())) {
          return;
        }
        (Mn(null), Me(_a), (ao.current = !1));
        let ir = ie.length;
        if (ir === 0) {
          return;
        }
        let Du = uo.current;
        let Vu =
          Du === null
            ? he.name === "down"
              ? 0
              : ir - 1
            : (Du + (he.name === "down" ? 1 : -1) + ir) % ir;
        xn(() => Vu);
        let Au = ie[Vu];
        if (Au) dt?.(Au.value);
        return;
      }
      if (
        so &&
        !Pe &&
        nr.current === null &&
        uo.current !== null &&
        WL(he.key) === " "
      ) {
        if ((he.preventDefault(), Kn?.())) {
          return;
        }
        let co = uo.current;
        let Ru = ie[co];
        if (!Ru) {
          return;
        }
        if (Ru.disabled) {
          Mn(`Option ${co + 1} is disabled.`);
          return;
        }
        (Mn(null),
          bn((Ef) => {
            let lr = new Set(Ef ?? _i());
            if (lr.has(co)) lr.delete(co);
            else lr.add(co);
            return lr;
          }));
        return;
      }
      if (Pe) {
        if (he.key.length === 1 && !he.ctrl && !he.meta) {
          he.preventDefault();
          let Fu = Et.current + he.key;
          if (Pe.onChange(Fu) === !1) {
            return;
          }
          Me(() => Fu);
        }
        return;
      }
      let Eu = WL(Ux(he.key)).replace("\uFF0C", ",").replace("\u3001", ",");
      if (/^[0-9, ]$/.test(Eu)) {
        if ((he.preventDefault(), ao.current)) {
          Kn?.();
          return;
        }
        if (Kn?.()) {
          ao.current = !0;
          return;
        }
        (Mn(null), Me((Pf) => Pf + Eu), xn(ja), bn(Ba));
      }
    }),
      (ke[30] = Et),
      (ke[31] = _i),
      (ke[32] = Pn),
      (ke[33] = uo),
      (ke[34] = Pe),
      (ke[35] = Ye),
      (ke[36] = nr),
      (ke[37] = un),
      (ke[38] = ft),
      (ke[39] = dt),
      (ke[40] = ie),
      (ke[41] = Kn),
      (ke[42] = Me),
      (ke[43] = xn),
      (ke[44] = Dn),
      (ke[45] = bn),
      (ke[46] = rr),
      (ke[47] = Qo),
      (ke[48] = Iu));
  else Iu = ke[48];
  let zi = Iu,
    Pu;
  if (
    ke[49] !== Xo ||
    ke[50] !== vn ||
    ke[51] !== Pe ||
    ke[52] !== Ye?.index ||
    ke[53] !== ft ||
    ke[54] !== ie.length ||
    ke[55] !== Ui ||
    ke[56] !== En
  )
    ((Pu = Pe
      ? `Enter text for option ${Ye?.index} (${cE(Pe.label)}), or Escape for the list: ${Xo}`
      : `Select with numbers [1-${ie.length}] (comma- or space-separated for several)${so ? " or up / down arrow keys" : ""}. Then ${mo([...(so ? ["Space to toggle"] : []), `Enter to ${Ui ?? "submit"}`, ...(vn.length > 0 && En === null ? ["bare Enter for defaults"] : []), ...(ft ? ["Escape to cancel"] : [])])}: ${Xo}`),
      (ke[49] = Xo),
      (ke[50] = vn),
      (ke[51] = Pe),
      (ke[52] = Ye?.index),
      (ke[53] = ft),
      (ke[54] = ie.length),
      (ke[55] = Ui),
      (ke[56] = En),
      (ke[57] = Pu));
  else Pu = ke[57];
  let Nt = Pu,
    sr;
  if (ke[58] !== Nt) ((sr = te(Nt)), (ke[58] = Nt), (ke[59] = sr));
  else sr = ke[59];
  const Gi = !un && Pt === null;
  let Nu;
  if (ke[60] !== sr || ke[61] !== Gi)
    ((Nu = { line: 0, column: sr, active: Gi, visible: !0 }),
      (ke[60] = sr),
      (ke[61] = Gi),
      (ke[62] = Nu));
  else Nu = ke[62];
  let Hi = _p(Nu),
    Wu;
  if (ke[63] !== vn) ((Wu = new Set(vn)), (ke[63] = vn), (ke[64] = Wu));
  else Wu = ke[64];
  let fo = Wu,
    ur;
  if (ke[65] !== zi || ke[66] !== un)
    ((ur = un ? {} : { tabIndex: 0, onKeyDown: zi }),
      (ke[65] = zi),
      (ke[66] = un),
      (ke[67] = ur));
  else ur = ke[67];
  let ar;
  if (
    ke[68] !== fo ||
    ke[69] !== Pt ||
    ke[70] !== un ||
    ke[71] !== ie ||
    ke[72] !== En
  ) {
    let xt;
    if (ke[74] !== fo || ke[75] !== Pt || ke[76] !== un || ke[77] !== En)
      ((xt = (qi, Ji) =>
        e(
          jt,
          {
            index: Ji + 1,
            option: qi,
            selected: En ? En.has(Ji) : fo.has(qi.value),
            focused: Pt === Ji && !un,
          },
          String(qi.value),
        )),
        (ke[74] = fo),
        (ke[75] = Pt),
        (ke[76] = un),
        (ke[77] = En),
        (ke[78] = xt));
    else xt = ke[78];
    ar = ie.map(xt);
    ((ke[68] = fo),
      (ke[69] = Pt),
      (ke[70] = un),
      (ke[71] = ie),
      (ke[72] = En),
      (ke[73] = ar));
  } else ar = ke[73];
  let xt;
  if (ke[79] !== Yo)
    ((xt = Yo && e(t, { children: Yo })), (ke[79] = Yo), (ke[80] = xt));
  else xt = ke[80];
  let cr;
  if (ke[81] !== Nt)
    ((cr = e(t, { children: Nt })), (ke[81] = Nt), (ke[82] = cr));
  else cr = ke[82];
  let dr;
  if (ke[83] !== Hi || ke[84] !== cr)
    ((dr = e(o, { ref: Hi, children: cr })),
      (ke[83] = Hi),
      (ke[84] = cr),
      (ke[85] = dr));
  else dr = ke[85];
  let $u;
  if (ke[86] !== ur || ke[87] !== ar || ke[88] !== xt || ke[89] !== dr)
    (($u = r(o, {
      ref: xu,
      flexDirection: "column",
      ...ur,
      children: [ar, xt, dr],
    })),
      (ke[86] = ur),
      (ke[87] = ar),
      (ke[88] = xt),
      (ke[89] = dr),
      (ke[90] = $u));
  else $u = ke[90];
  return $u;
}
function jt(_f) {
  let $t = _(16),
    { index: Xi, option: Wt, selected: jf, focused: Yi } = _f,
    Lu;
  if ($t[0] !== Yi)
    ((Lu = { line: 0, column: 0, active: Yi, visible: !0 }),
      ($t[0] = Yi),
      ($t[1] = Lu));
  else Lu = $t[1];
  let Qi = _p(Lu),
    Uu;
  if ($t[2] !== Wt.label)
    ((Uu = cE(Wt.label)), ($t[2] = Wt.label), ($t[3] = Uu));
  else Uu = $t[3];
  let Bf = Uu,
    Kf = Wt.description ? ` \u2014 ${Wt.description}` : "";
  const Zi = `${Bf}${Kf}`;
  let _u;
  if ($t[4] !== Zi) ((_u = ml(Zi)), ($t[4] = Zi), ($t[5] = _u));
  else _u = $t[5];
  let el = _u;
  const tl = Wt.disabled ? "(disabled)" : null,
    ol = jf ? "(selected)" : null;
  let ju;
  if ($t[6] !== tl || $t[7] !== ol)
    ((ju = [tl, ol].filter(Boolean)), ($t[6] = tl), ($t[7] = ol), ($t[8] = ju));
  else ju = $t[8];
  let Bu = ju.join(" ");
  const rl = Bu ? `${Bu} ` : "";
  let fr;
  if ($t[9] !== el || $t[10] !== Xi || $t[11] !== rl)
    ((fr = r(t, { children: [Xi, ". ", rl, el] })),
      ($t[9] = el),
      ($t[10] = Xi),
      ($t[11] = rl),
      ($t[12] = fr));
  else fr = $t[12];
  let Ku;
  if ($t[13] !== Qi || $t[14] !== fr)
    ((Ku = e(o, { ref: Qi, children: fr })),
      ($t[13] = Qi),
      ($t[14] = fr),
      ($t[15] = Ku));
  else Ku = $t[15];
  return Ku;
}
function mOt(zf) {
  let an = _(43),
    {
      confirmLabel: il,
      cancelLabel: ll,
      onConfirm: sl,
      onCancel: Lt,
      refuseInput: Ut,
      openedAt: Gf,
      windowMs: Hf,
    } = zf,
    [qf, ul, zn] = qn(),
    [pr, zu] = d(null),
    Gu = C(null);
  (dd(Gu, !0), Rs("select", !0));
  let { refuse: al, refuseCharacter: cl } = wr(Gf, Hf),
    Hu;
  if (an[0] !== Ut || an[1] !== al)
    ((Hu = function Gn() {
      return (Ut?.() ?? !1) || al();
    }),
      (an[0] = Ut),
      (an[1] = al),
      (an[2] = Hu));
  else Hu = an[2];
  let Gn = Hu,
    qu;
  if (an[3] !== Ut || an[4] !== cl)
    ((qu = function po() {
      return (Ut?.() ?? !1) || cl();
    }),
      (an[3] = Ut),
      (an[4] = cl),
      (an[5] = qu));
  else qu = an[5];
  let po = qu,
    Ju;
  if (an[6] !== Lt || an[7] !== sl || an[8] !== Gn || an[9] !== zn)
    ((Ju = (Jf) => {
      let Hn = Jf.trim().toLowerCase();
      if ((Hn === "y" || Hn === "yes" || Hn === "n" || Hn === "no") && Gn()) {
        zn(za);
        return;
      }
      if (Hn === "y" || Hn === "yes") {
        return sl();
      }
      if (Hn === "n" || Hn === "no") {
        return Lt();
      }
      (zu("Please answer y or n."), zn(Ga));
    }),
      (an[6] = Lt),
      (an[7] = sl),
      (an[8] = Gn),
      (an[9] = zn),
      (an[10] = Ju));
  else Ju = an[10];
  let dl = Ju,
    Xu;
  if (
    an[11] !== ul ||
    an[12] !== Lt ||
    an[13] !== Gn ||
    an[14] !== po ||
    an[15] !== zn ||
    an[16] !== dl
  )
    ((Xu = (cn) => {
      if (cn.key === "escape" && cn.name === "escape") {
        if ((cn.preventDefault(), Gn())) {
          return;
        }
        return Lt();
      }
      if (cn.key === "return" && cn.name === "return") {
        return (cn.preventDefault(), dl(ul.current));
      }
      if (cn.key === "backspace" || cn.key === "delete") {
        (cn.preventDefault(), zn(Ha));
        return;
      }
      if (cn.key.length === 1 && !cn.ctrl && !cn.meta) {
        if ((cn.preventDefault(), po())) {
          return;
        }
        (zu(null), zn((Xf) => Xf + cn.key));
      }
    }),
      (an[11] = ul),
      (an[12] = Lt),
      (an[13] = Gn),
      (an[14] = po),
      (an[15] = zn),
      (an[16] = dl),
      (an[17] = Xu));
  else Xu = an[17];
  let fl = Xu,
    _t = `Enter y/n: ${qf}`,
    mr;
  if (an[18] !== _t) ((mr = te(_t)), (an[18] = _t), (an[19] = mr));
  else mr = an[19];
  let Yu;
  if (an[20] !== mr)
    ((Yu = { line: 0, column: mr, active: !0, visible: !0 }),
      (an[20] = mr),
      (an[21] = Yu));
  else Yu = an[21];
  let pl = _p(Yu),
    br;
  if (an[22] !== il) ((br = cE(il)), (an[22] = il), (an[23] = br));
  else br = an[23];
  let xr;
  if (an[24] !== br)
    ((xr = r(t, { children: ["y. ", br] })), (an[24] = br), (an[25] = xr));
  else xr = an[25];
  let hr;
  if (an[26] !== ll) ((hr = cE(ll)), (an[26] = ll), (an[27] = hr));
  else hr = an[27];
  let gr;
  if (an[28] !== hr)
    ((gr = r(t, { children: ["n. ", hr] })), (an[28] = hr), (an[29] = gr));
  else gr = an[29];
  let yr;
  if (an[30] !== pr)
    ((yr = pr && e(t, { children: pr })), (an[30] = pr), (an[31] = yr));
  else yr = an[31];
  let Tr;
  if (an[32] !== _t)
    ((Tr = e(t, { children: _t })), (an[32] = _t), (an[33] = Tr));
  else Tr = an[33];
  let Or;
  if (an[34] !== pl || an[35] !== Tr)
    ((Or = e(o, { ref: pl, children: Tr })),
      (an[34] = pl),
      (an[35] = Tr),
      (an[36] = Or));
  else Or = an[36];
  let Qu;
  if (
    an[37] !== fl ||
    an[38] !== gr ||
    an[39] !== yr ||
    an[40] !== Or ||
    an[41] !== xr
  )
    ((Qu = r(o, {
      ref: Gu,
      flexDirection: "column",
      tabIndex: 0,
      onKeyDown: fl,
      children: [xr, gr, yr, Or],
    })),
      (an[37] = fl),
      (an[38] = gr),
      (an[39] = yr),
      (an[40] = Or),
      (an[41] = xr),
      (an[42] = Qu));
  else Qu = an[42];
  return Qu;
}
F();
function nl(lp) {
  let gn = _(42),
    {
      isFocused: ht,
      isSelected: qa,
      children: Ir,
      description: Cr,
      showScrollDown: vl,
      showScrollUp: bl,
      styled: Ja,
      disabled: Xa,
      declareCursor: sp,
      onClick: xl,
      onHoverChange: kr,
    } = lp,
    Bt = qa === void 0 ? !1 : qa,
    Kt = Ja === void 0 ? !0 : Ja,
    Qe = Xa === void 0 ? !1 : Xa,
    [up, ap] = d(!1),
    Ya = !Qe && xl !== void 0,
    zt = !Qe && (xl !== void 0 || kr !== void 0),
    Qa;
  if (gn[0] !== kr)
    ((Qa = (Za) => {
      (ap(Za), kr?.(Za));
    }),
      (gn[0] = kr),
      (gn[1] = Qa));
  else Qa = gn[1];
  let Gt = Qa,
    ec;
  if (gn[2] !== Qe || gn[3] !== ht || gn[4] !== Bt || gn[5] !== Kt)
    ((ec = function hl() {
      if (Qe) {
        return "inactive";
      }
      if (!Kt) {
        return;
      }
      if (Bt) {
        return "success";
      }
      if (ht) {
        return "suggestion";
      }
    }),
      (gn[2] = Qe),
      (gn[3] = ht),
      (gn[4] = Bt),
      (gn[5] = Kt),
      (gn[6] = ec));
  else ec = gn[6];
  let hl = ec,
    gl = hl();
  const yl = ht && !Qe && sp !== !1;
  let nc;
  if (gn[7] !== yl)
    ((nc = { line: 0, column: 0, active: yl }), (gn[7] = yl), (gn[8] = nc));
  else nc = gn[8];
  let Tl = _p(nc);
  const Ol = Ya ? xl : void 0;
  let Mr;
  if (gn[9] !== zt || gn[10] !== Gt)
    ((Mr = zt ? () => Gt(!0) : void 0),
      (gn[9] = zt),
      (gn[10] = Gt),
      (gn[11] = Mr));
  else Mr = gn[11];
  let Dr;
  if (gn[12] !== zt || gn[13] !== Gt)
    ((Dr = zt ? () => Gt(!1) : void 0),
      (gn[12] = zt),
      (gn[13] = Gt),
      (gn[14] = Dr));
  else Dr = gn[14];
  const Sl = up && Ya;
  let Vr;
  if (
    gn[15] !== Qe ||
    gn[16] !== ht ||
    gn[17] !== vl ||
    gn[18] !== bl ||
    gn[19] !== Sl
  )
    ((Vr = e(o, {
      flexShrink: 0,
      children: e(Pr, {
        disabled: Qe,
        isFocused: ht,
        showScrollUp: bl,
        showScrollDown: vl,
        hovered: Sl,
      }),
    })),
      (gn[15] = Qe),
      (gn[16] = ht),
      (gn[17] = vl),
      (gn[18] = bl),
      (gn[19] = Sl),
      (gn[20] = Vr));
  else Vr = gn[20];
  let Ar;
  if (gn[21] !== Ir || gn[22] !== Qe || gn[23] !== Kt || gn[24] !== gl)
    ((Ar = Kt ? e(t, { color: gl, dimColor: Qe, children: Ir }) : Ir),
      (gn[21] = Ir),
      (gn[22] = Qe),
      (gn[23] = Kt),
      (gn[24] = gl),
      (gn[25] = Ar));
  else Ar = gn[25];
  let Rr;
  if (gn[26] !== Qe || gn[27] !== Bt)
    ((Rr =
      Bt &&
      !Qe &&
      e(t, { "aria-label": "(selected)", color: "success", children: L.tick })),
      (gn[26] = Qe),
      (gn[27] = Bt),
      (gn[28] = Rr));
  else Rr = gn[28];
  let Fr;
  if (gn[29] !== Vr || gn[30] !== Ar || gn[31] !== Rr)
    ((Fr = r(o, { flexDirection: "row", gap: 1, children: [Vr, Ar, Rr] })),
      (gn[29] = Vr),
      (gn[30] = Ar),
      (gn[31] = Rr),
      (gn[32] = Fr));
  else Fr = gn[32];
  let Er;
  if (gn[33] !== Cr)
    ((Er =
      Cr &&
      e(o, {
        paddingLeft: 2,
        children: e(t, { color: "inactive", children: Cr }),
      })),
      (gn[33] = Cr),
      (gn[34] = Er));
  else Er = gn[34];
  let tc;
  if (
    gn[35] !== Tl ||
    gn[36] !== Dr ||
    gn[37] !== Fr ||
    gn[38] !== Er ||
    gn[39] !== Ol ||
    gn[40] !== Mr
  )
    ((tc = r(o, {
      ref: Tl,
      flexDirection: "column",
      onClick: Ol,
      onMouseEnter: Mr,
      onMouseLeave: Dr,
      children: [Fr, Er],
    })),
      (gn[35] = Tl),
      (gn[36] = Dr),
      (gn[37] = Fr),
      (gn[38] = Er),
      (gn[39] = Ol),
      (gn[40] = Mr),
      (gn[41] = tc));
  else tc = gn[41];
  return tc;
}
function Pr(cp) {
  let Ht = _(6),
    {
      disabled: dp,
      isFocused: fp,
      showScrollUp: pp,
      showScrollDown: mp,
      hovered: vp,
    } = cp;
  if (dp) {
    let Le;
    if (Ht[0] === p)
      ((Le = e(t, { "aria-hidden": !0, children: " " })), (Ht[0] = Le));
    else Le = Ht[0];
    return Le;
  }
  if (fp) {
    let Le;
    if (Ht[1] === p)
      ((Le = e(t, {
        "aria-hidden": !0,
        color: "suggestion",
        children: L.pointer,
      })),
        (Ht[1] = Le));
    else Le = Ht[1];
    return Le;
  }
  if (mp) {
    let Le;
    if (Ht[2] === p)
      ((Le = e(t, {
        "aria-label": "(more below)",
        dimColor: !0,
        children: L.arrowDown,
      })),
        (Ht[2] = Le));
    else Le = Ht[2];
    return Le;
  }
  if (pp) {
    let Le;
    if (Ht[3] === p)
      ((Le = e(t, {
        "aria-label": "(more above)",
        dimColor: !0,
        children: L.arrowUp,
      })),
        (Ht[3] = Le));
    else Le = Ht[3];
    return Le;
  }
  if (vp) {
    let Le;
    if (Ht[4] === p)
      ((Le = e(t, { "aria-hidden": !0, dimColor: !0, children: L.pointer })),
        (Ht[4] = Le));
    else Le = Ht[4];
    return Le;
  }
  let Le;
  if (Ht[5] === p)
    ((Le = e(t, { "aria-hidden": !0, children: " " })), (Ht[5] = Le));
  else Le = Ht[5];
  return Le;
}
F();
F();
function vo(Ip) {
  let Wr = _(15),
    { imageId: oc, backgroundColor: gt, isSelected: rc } = Ip,
    Jn = rc === void 0 ? !1 : rc,
    Nr = Os((Cp) => Cp.storedImagePaths.get(oc) ?? null) ?? null,
    yt = `[Image #${oc}]`,
    ic;
  if (Wr[0] !== Nr)
    ((ic = Nr && Tf() ? tO(Nr) : null), (Wr[0] = Nr), (Wr[1] = ic));
  else ic = Wr[1];
  let $r = ic;
  if ($r) {
    let Tt, Lr;
    if (Wr[2] !== gt || Wr[3] !== yt || Wr[4] !== Jn)
      ((Tt = e(t, { backgroundColor: gt, inverse: Jn, children: yt })),
        (Lr = e(t, {
          backgroundColor: gt,
          inverse: Jn,
          bold: Jn,
          children: yt,
        })),
        (Wr[2] = gt),
        (Wr[3] = yt),
        (Wr[4] = Jn),
        (Wr[5] = Tt),
        (Wr[6] = Lr));
    else ((Tt = Wr[5]), (Lr = Wr[6]));
    let lc;
    if (Wr[7] !== $r || Wr[8] !== Tt || Wr[9] !== Lr)
      ((lc = e(ct, { url: $r, fallback: Tt, children: Lr })),
        (Wr[7] = $r),
        (Wr[8] = Tt),
        (Wr[9] = Lr),
        (Wr[10] = lc));
    else lc = Wr[10];
    return lc;
  }
  let Tt;
  if (Wr[11] !== gt || Wr[12] !== yt || Wr[13] !== Jn)
    ((Tt = e(t, { backgroundColor: gt, inverse: Jn, children: yt })),
      (Wr[11] = gt),
      (Wr[12] = yt),
      (Wr[13] = Jn),
      (Wr[14] = Tt));
  else Tt = Wr[14];
  return Tt;
}
function qB(Ap) {
  let Rp = _(9),
    {
      isFocused: wl,
      isSelected: Il,
      children: Cl,
      description: kl,
      shouldShowDownArrow: Ml,
      shouldShowUpArrow: Dl,
      declareCursor: Vl,
      onClick: Al,
    } = Ap,
    sc;
  if (
    Rp[0] !== Cl ||
    Rp[1] !== Vl ||
    Rp[2] !== kl ||
    Rp[3] !== wl ||
    Rp[4] !== Il ||
    Rp[5] !== Al ||
    Rp[6] !== Ml ||
    Rp[7] !== Dl
  )
    ((sc = e(nl, {
      isFocused: wl,
      isSelected: Il,
      description: kl,
      showScrollDown: Ml,
      showScrollUp: Dl,
      styled: !1,
      declareCursor: Vl,
      onClick: Al,
      children: Cl,
    })),
      (Rp[0] = Cl),
      (Rp[1] = Vl),
      (Rp[2] = kl),
      (Rp[3] = wl),
      (Rp[4] = Il),
      (Rp[5] = Al),
      (Rp[6] = Ml),
      (Rp[7] = Dl),
      (Rp[8] = sc));
  else sc = Rp[8];
  return sc;
}
function $c(om) {
  return om.type === "image";
}
function Hl(l, s, a, u) {
  let c = 2 + s + 2;
  return Math.max(1, l - c - a - u);
}
function Y8(Qp) {
  let me = _(103),
    {
      option: le,
      isFocused: se,
      isSelected: qt,
      shouldShowDownArrow: Rl,
      shouldShowUpArrow: Fl,
      maxIndexWidth: Xn,
      index: El,
      hideIndex: uc,
      inputValue: ge,
      onInputChange: Nn,
      onSubmit: Ur,
      onExit: _r,
      layout: bo,
      children: Pl,
      showLabel: ac,
      onOpenEditor: Br,
      resetCursorOnUpdate: cc,
      canPasteImage: Nl,
      onImagePaste: Wn,
      pastedContents: Kr,
      onRemoveImage: $n,
      imagesSelected: fn,
      selectedImageIndex: dc,
      onImagesSelectedChange: Vn,
      onSelectedImageIndexChange: Ot,
      extraChromeWidth: fc,
      onClick: Wl,
    } = Qp,
    $l = uc === void 0 ? !1 : uc,
    Zp = ac === void 0 ? !1 : ac,
    Jt = cc === void 0 ? !1 : cc,
    yn = dc === void 0 ? 0 : dc,
    Ll = fc === void 0 ? 0 : fc,
    pc;
  if (me[0] !== Kr)
    ((pc = Kr ? Object.values(Kr).filter($c) : []), (me[0] = Kr), (me[1] = pc));
  else pc = me[1];
  let Oe = pc,
    zr = Zp || le.showLabelWithValue === !0,
    [Yn, xo] = d(ge.length),
    Xt = C(!1),
    mc;
  if (me[2] !== ge.length || me[3] !== se || me[4] !== Jt)
    ((mc = () => {
      if (Jt && se) {
        if (Xt.current) Xt.current = !1;
        else xo(ge.length);
      }
    }),
      (me[2] = ge.length),
      (me[3] = se),
      (me[4] = Jt),
      (me[5] = mc));
  else mc = me[5];
  let vc;
  if (me[6] !== ge || me[7] !== se || me[8] !== Jt)
    ((vc = [Jt, se, ge]),
      (me[6] = ge),
      (me[7] = se),
      (me[8] = Jt),
      (me[9] = vc));
  else vc = me[9];
  E(mc, vc);
  let bc;
  if (me[10] !== ge || me[11] !== Nn || me[12] !== Br)
    ((bc = () => {
      Br?.(ge, Nn);
    }),
      (me[10] = ge),
      (me[11] = Nn),
      (me[12] = Br),
      (me[13] = bc));
  else bc = me[13];
  const Ul = se && !!Br;
  let xc;
  if (me[14] !== Ul)
    ((xc = { context: "Chat", isActive: Ul }), (me[14] = Ul), (me[15] = xc));
  else xc = me[15];
  Ne("chat:externalEditor", bc, xc);
  let hc;
  if (me[16] !== Nl || me[17] !== Wn)
    ((hc = () => {
      if (!Wn) {
        return;
      }
      if (Nl?.() === !1) {
        return;
      }
      Z3(Ka(getMainLoopModel())).then((Gr) => {
        if (Gr)
          Wn(Gr.base64, { mediaType: Gr.mediaType, dimensions: Gr.dimensions });
      });
    }),
      (me[16] = Nl),
      (me[17] = Wn),
      (me[18] = hc));
  else hc = me[18];
  const _l = se && !!Wn;
  let gc;
  if (me[19] !== _l)
    ((gc = { context: "Chat", isActive: _l }), (me[19] = _l), (me[20] = gc));
  else gc = me[20];
  Ne("chat:imagePaste", hc, gc);
  let yc;
  if (me[21] !== Oe || me[22] !== $n)
    ((yc = () => {
      if (Oe.length > 0 && $n) $n(Oe.at(-1).id);
    }),
      (me[21] = Oe),
      (me[22] = $n),
      (me[23] = yc));
  else yc = me[23];
  const jl = se && !fn && ge === "" && Oe.length > 0 && !!$n;
  let Tc;
  if (me[24] !== jl)
    ((Tc = { context: "Attachments", isActive: jl }),
      (me[24] = jl),
      (me[25] = Tc));
  else Tc = me[25];
  Ne("attachments:remove", yc, Tc);
  let Hr, qr;
  if (me[26] !== Oe.length || me[27] !== Ot || me[28] !== yn)
    ((Hr = () => {
      if (Oe.length > 1) Ot?.((yn + 1) % Oe.length);
    }),
      (qr = () => {
        if (Oe.length > 1) Ot?.((yn - 1 + Oe.length) % Oe.length);
      }),
      (me[26] = Oe.length),
      (me[27] = Ot),
      (me[28] = yn),
      (me[29] = Hr),
      (me[30] = qr));
  else ((Hr = me[29]), (qr = me[30]));
  let Jr;
  if (
    me[31] !== Oe ||
    me[32] !== Vn ||
    me[33] !== $n ||
    me[34] !== Ot ||
    me[35] !== yn
  )
    ((Jr = () => {
      let Oc = Oe[yn];
      if (Oc && $n) {
        if ($n(Oc.id) === !1) {
          return;
        }
        if (Oe.length <= 1) Vn?.(!1);
        else Ot?.(Math.min(yn, Oe.length - 2));
      }
    }),
      (me[31] = Oe),
      (me[32] = Vn),
      (me[33] = $n),
      (me[34] = Ot),
      (me[35] = yn),
      (me[36] = Jr));
  else Jr = me[36];
  let Xr;
  if (me[37] !== Vn)
    ((Xr = () => {
      Vn?.(!1);
    }),
      (me[37] = Vn),
      (me[38] = Xr));
  else Xr = me[38];
  let Sc;
  if (me[39] !== Hr || me[40] !== qr || me[41] !== Jr || me[42] !== Xr)
    ((Sc = {
      "attachments:next": Hr,
      "attachments:previous": qr,
      "attachments:remove": Jr,
      "attachments:exit": Xr,
    }),
      (me[39] = Hr),
      (me[40] = qr),
      (me[41] = Jr),
      (me[42] = Xr),
      (me[43] = Sc));
  else Sc = me[43];
  const Bl = se && !!fn;
  let wc;
  if (me[44] !== Bl)
    ((wc = { context: "Attachments", isActive: Bl }),
      (me[44] = Bl),
      (me[45] = wc));
  else wc = me[45];
  Ze(Sc, wc);
  let Ic, Cc;
  if (me[46] !== fn || me[47] !== se || me[48] !== Vn)
    ((Ic = () => {
      if (!se && fn) Vn?.(!1);
    }),
      (Cc = [se, fn, Vn]),
      (me[46] = fn),
      (me[47] = se),
      (me[48] = Vn),
      (me[49] = Ic),
      (me[50] = Cc));
  else ((Ic = me[49]), (Cc = me[50]));
  E(Ic, Cc);
  let Yt = bo === "expanded" ? Xn + 3 : Xn + 4,
    { columns: Kl } = ks(Se()),
    zl =
      zr && typeof le.label === "string"
        ? te(le.label) + te(le.labelValueSeparator ?? ", ")
        : 0,
    kc;
  if (me[51] !== Kl || me[52] !== Ll || me[53] !== zl || me[54] !== Xn)
    ((kc = Hl(Kl, Xn, zl, Ll)),
      (me[51] = Kl),
      (me[52] = Ll),
      (me[53] = zl),
      (me[54] = Xn),
      (me[55] = kc));
  else kc = me[55];
  let Yr = kc;
  const Gl = bo === "compact" ? 0 : void 0;
  let Qr;
  if (me[56] !== $l || me[57] !== El || me[58] !== Xn)
    ((Qr =
      !$l &&
      e(o, {
        flexShrink: 0,
        children: e(t, { dimColor: !0, children: `${El}.`.padEnd(Xn + 2) }),
      })),
      (me[56] = $l),
      (me[57] = El),
      (me[58] = Xn),
      (me[59] = Qr));
  else Qr = me[59];
  let Zr;
  if (
    me[60] !== Yn ||
    me[61] !== fn ||
    me[62] !== ge ||
    me[63] !== se ||
    me[64] !== _r ||
    me[65] !== Wn ||
    me[66] !== Nn ||
    me[67] !== Ur ||
    me[68] !== le ||
    me[69] !== zr ||
    me[70] !== Yr
  )
    ((Zr = zr
      ? se
        ? r(N, {
            children: [
              r(t, {
                color: "suggestion",
                children: [le.label, le.labelValueSeparator ?? ", "],
              }),
              e(hn, {
                value: ge,
                onChange: (Mc) => {
                  if (le.onChange(Mc) === !1) {
                    return;
                  }
                  ((Xt.current = !0), Nn(Mc));
                },
                onSubmit: Ur,
                onExit: _r,
                placeholder: le.placeholder,
                focus: !fn,
                showCursor: !0,
                multiline: !0,
                cursorOffset: Yn,
                onChangeCursorOffset: xo,
                columns: Yr,
                onImagePaste: Wn,
                onPaste: (Dc) => {
                  let Vc = ge.slice(0, Yn);
                  let em = ge.slice(Yn);
                  let Ac = Vc + Dc + em;
                  if (le.onChange(Ac) === !1) {
                    return;
                  }
                  ((Xt.current = !0), Nn(Ac), xo(Vc.length + Dc.length));
                },
              }),
            ],
          })
        : r(t, {
            children: [
              le.label,
              ge ? (le.labelValueSeparator ?? ", ") : null,
              ge || null,
            ],
          })
      : se
        ? e(hn, {
            value: ge,
            onChange: (Rc) => {
              if (le.onChange(Rc) === !1) {
                return;
              }
              ((Xt.current = !0), Nn(Rc));
            },
            onSubmit: Ur,
            onExit: _r,
            placeholder:
              le.placeholder ||
              (typeof le.label === "string" ? le.label : void 0),
            focus: !fn,
            showCursor: !0,
            multiline: !0,
            cursorOffset: Yn,
            onChangeCursorOffset: xo,
            columns: Yr,
            onImagePaste: Wn,
            onPaste: (Fc) => {
              let Ec = ge.slice(0, Yn);
              let nm = ge.slice(Yn);
              let Pc = Ec + Fc + nm;
              if (le.onChange(Pc) === !1) {
                return;
              }
              ((Xt.current = !0), Nn(Pc), xo(Ec.length + Fc.length));
            },
          })
        : e(t, {
            color: ge ? void 0 : "inactive",
            children: ge || le.placeholder || le.label,
          })),
      (me[60] = Yn),
      (me[61] = fn),
      (me[62] = ge),
      (me[63] = se),
      (me[64] = _r),
      (me[65] = Wn),
      (me[66] = Nn),
      (me[67] = Ur),
      (me[68] = le),
      (me[69] = zr),
      (me[70] = Yr),
      (me[71] = Zr));
  else Zr = me[71];
  let ei;
  if (me[72] !== Pl || me[73] !== Gl || me[74] !== Qr || me[75] !== Zr)
    ((ei = r(o, {
      flexDirection: "row",
      flexShrink: Gl,
      children: [Qr, Pl, Zr],
    })),
      (me[72] = Pl),
      (me[73] = Gl),
      (me[74] = Qr),
      (me[75] = Zr),
      (me[76] = ei));
  else ei = me[76];
  let ni;
  if (
    me[77] !== se ||
    me[78] !== qt ||
    me[79] !== Wl ||
    me[80] !== Rl ||
    me[81] !== Fl ||
    me[82] !== ei
  )
    ((ni = e(qB, {
      isFocused: se,
      isSelected: qt,
      shouldShowDownArrow: Rl,
      shouldShowUpArrow: Fl,
      declareCursor: !1,
      onClick: Wl,
      children: ei,
    })),
      (me[77] = se),
      (me[78] = qt),
      (me[79] = Wl),
      (me[80] = Rl),
      (me[81] = Fl),
      (me[82] = ei),
      (me[83] = ni));
  else ni = me[83];
  let ti;
  if (
    me[84] !== Yt ||
    me[85] !== se ||
    me[86] !== qt ||
    me[87] !== le.description ||
    me[88] !== le.dimDescription
  )
    ((ti =
      le.description &&
      e(o, {
        paddingLeft: Yt,
        children: e(t, {
          dimColor: le.dimDescription !== !1,
          color: qt ? "success" : se ? "suggestion" : void 0,
          children: le.description,
        }),
      })),
      (me[84] = Yt),
      (me[85] = se),
      (me[86] = qt),
      (me[87] = le.description),
      (me[88] = le.dimDescription),
      (me[89] = ti));
  else ti = me[89];
  let oi;
  if (
    me[90] !== Yt ||
    me[91] !== Oe ||
    me[92] !== fn ||
    me[93] !== se ||
    me[94] !== yn
  )
    ((oi =
      Oe.length > 0 &&
      r(o, {
        flexDirection: "row",
        gap: 1,
        paddingLeft: Yt,
        children: [
          Oe.map((Nc, tm) =>
            e(vo, { imageId: Nc.id, isSelected: !!fn && tm === yn }, Nc.id),
          ),
          e(o, {
            flexGrow: 1,
            justifyContent: "flex-start",
            flexDirection: "row",
            children: e(t, {
              dimColor: !0,
              children: fn
                ? r(ue, {
                    children: [
                      Oe.length > 1 &&
                        r(N, {
                          children: [
                            e(je, {
                              action: "attachments:next",
                              context: "Attachments",
                              fallback: "\u2192",
                              description: "next",
                            }),
                            e(je, {
                              action: "attachments:previous",
                              context: "Attachments",
                              fallback: "\u2190",
                              description: "prev",
                            }),
                          ],
                        }),
                      e(je, {
                        action: "attachments:remove",
                        context: "Attachments",
                        fallback: "backspace",
                        description: "remove",
                      }),
                      e(je, {
                        action: "attachments:exit",
                        context: "Attachments",
                        fallback: "esc",
                        description: "cancel",
                      }),
                    ],
                  })
                : se
                  ? e(D, { chord: "down", action: "select", parens: !0 })
                  : null,
            }),
          }),
        ],
      })),
      (me[90] = Yt),
      (me[91] = Oe),
      (me[92] = fn),
      (me[93] = se),
      (me[94] = yn),
      (me[95] = oi));
  else oi = me[95];
  let ri;
  if (me[96] !== bo)
    ((ri = bo === "expanded" && e(t, { children: " " })),
      (me[96] = bo),
      (me[97] = ri));
  else ri = me[97];
  let Wc;
  if (me[98] !== ni || me[99] !== ti || me[100] !== oi || me[101] !== ri)
    ((Wc = r(o, {
      flexDirection: "column",
      flexShrink: 0,
      children: [ni, ti, oi, ri],
    })),
      (me[98] = ni),
      (me[99] = ti),
      (me[100] = oi),
      (me[101] = ri),
      (me[102] = Wc));
  else Wc = me[102];
  return Wc;
}
F();
var ii = ({
  isDisabled: l = !1,
  disableSelection: s = !1,
  state: a,
  options: u,
  isMultiSelect: c = !1,
  onUpFromFirstItem: v,
  onDownFromLastItem: h,
  onInputModeToggle: T,
  inputValues: g,
  imagesSelected: w = !1,
  onEnterImageSelection: A,
  onExitImageSelection: W,
  hasInkFocus: ae = !0,
}) => {
  let { focusDirection: K } = zye();
  Rs("select", !!a.onCancel);
  let ee = V(
      () => u.find((U) => U.value === a.focusedValue)?.type === "input",
      [u, a.focusedValue],
    ),
    xe = V(() => {
      let y = {};
      if (!ee)
        ((y["select:next"] = () => {
          let U = u.at(-1);
          if (U && a.getFocusedValue() === U.value) {
            if (h) {
              h();
              return;
            }
          }
          a.focusNextOption();
        }),
          (y["select:previous"] = () => {
            let U = u[0];
            if (U && a.getFocusedValue() === U.value) {
              if (v) {
                v();
                return;
              }
            }
            a.focusPreviousOption();
          }),
          (y["select:accept"] = () => {
            if (s === !0) return;
            let U = a.getFocusedValue();
            if (U === void 0) return;
            let z = u.find((q) => q.value === U);
            if (z?.disabled === !0) return;
            if (z?.type === "input") return;
            (a.selectFocusedOption?.(), a.onChange?.(U));
          }));
      if (a.onCancel)
        y["select:cancel"] = () => {
          a.onCancel();
        };
      return y;
    }, [u, a, h, v, ee, s, K]);
  return (
    Ze(xe, { context: "Select", isActive: !l && !0 }),
    {
      handleKeyDown: (y) => {
        if (l) return;
        let U = Ux(y.key),
          z = a.getFocusedValue(),
          q = u.find((I) => I.value === z),
          M = q?.type === "input";
        if (y.key === "tab") {
          if ((y.preventDefault(), T && z !== void 0)) T(z);
          return;
        }
        if (M) {
          if (w) {
            if (y.key === "up") (y.preventDefault(), W?.());
            return;
          }
          if (y.key === "down" && A?.()) {
            y.stopImmediatePropagation();
            return;
          }
          if (y.key === "down" || (y.ctrl && y.key === "n")) {
            if (h) {
              let I = u.at(-1);
              if (I && z === I.value) {
                (h(), y.stopImmediatePropagation());
                return;
              }
            }
            (a.focusNextOption(), y.stopImmediatePropagation());
            return;
          }
          if (y.key === "up" || (y.ctrl && y.key === "p")) {
            if (v) {
              let I = u[0];
              if (I && z === I.value) {
                (v(), y.stopImmediatePropagation());
                return;
              }
            }
            (a.focusPreviousOption(), y.stopImmediatePropagation());
            return;
          }
          return;
        }
        if (ee) {
          if (y.key === "down" || (y.ctrl && y.key === "n")) {
            if (h) {
              let I = u.at(-1);
              if (I && z === I.value) {
                (h(), y.stopImmediatePropagation());
                return;
              }
            }
            (a.focusNextOption(), y.stopImmediatePropagation());
            return;
          }
          if (y.key === "up" || (y.ctrl && y.key === "p")) {
            if (v) {
              let I = u[0];
              if (I && z === I.value) {
                (v(), y.stopImmediatePropagation());
                return;
              }
            }
            (a.focusPreviousOption(), y.stopImmediatePropagation());
            return;
          }
        }
        if (y.key === "pagedown") {
          (y.preventDefault(), a.focusNextPage());
          return;
        }
        if (y.key === "pageup") {
          (y.preventDefault(), a.focusPreviousPage());
          return;
        }
        if (s !== !0) {
          if (c && WL(y.key) === " " && z !== void 0) {
            if (q?.disabled !== !0)
              (y.preventDefault(), a.selectFocusedOption?.(), a.onChange?.(z));
            return;
          }
          if (s !== "numeric" && /^[0-9]$/.test(U)) {
            y.preventDefault();
            let I = parseInt(U) - 1;
            if (I >= 0 && I < a.options.length) {
              let P = a.options[I];
              if (P.disabled === !0) return;
              if (P.type === "input") {
                if ((g?.get(P.value) ?? "").trim()) {
                  a.onChange?.(P.value);
                  return;
                }
                if (P.allowEmptySubmitToCancel) {
                  a.onChange?.(P.value);
                  return;
                }
                a.focusOption(P.value);
                return;
              }
              a.onChange?.(P.value);
              return;
            }
          }
        }
      },
    }
  );
};
F();
F();
import { isDeepStrictEqual } from "util";
F();
function qm(l) {
  let [s] = d(() => ({ value: Lc(l) ? l() : l })),
    [a, u] = d(s.value),
    c = re(
      (h) => {
        let T = Uc(h) ? h(s.value) : h;
        if (Object.is(T, s.value)) return;
        ((s.value = T), u(() => T));
      },
      [s],
    ),
    v = re(() => s.value, [s]);
  return [a, c, v];
}
function Lc(l) {
  return typeof l === "function";
}
function Uc(l) {
  return typeof l === "function";
}
class ho extends Map {
  first;
  last;
  constructor(l) {
    let s = [],
      a,
      u,
      c,
      v = 0;
    for (let h of l) {
      let T = { value: h.value, previous: c, next: void 0, index: v };
      if (c) c.next = T;
      ((a ||= T), (u = T), s.push([h.value, T]), v++, (c = T));
    }
    super(s);
    ((this.first = a), (this.last = u));
  }
}
var jc = (l, s) => {
    switch (s.type) {
      case "focus-next-option": {
        if (l.focusedValue === void 0) return l;
        let a = l.optionMap.get(l.focusedValue);
        if (!a) return l;
        let u = a.next || l.optionMap.first;
        if (!u) return l;
        if (!a.next && u === l.optionMap.first)
          return {
            ...l,
            focusedValue: u.value,
            visibleFromIndex: 0,
            visibleToIndex: l.visibleOptionCount,
          };
        if (!(u.index >= l.visibleToIndex))
          return { ...l, focusedValue: u.value };
        let v = Math.min(l.optionMap.size, l.visibleToIndex + 1),
          h = v - l.visibleOptionCount;
        return {
          ...l,
          focusedValue: u.value,
          visibleFromIndex: h,
          visibleToIndex: v,
        };
      }
      case "focus-previous-option": {
        if (l.focusedValue === void 0) return l;
        let a = l.optionMap.get(l.focusedValue);
        if (!a) return l;
        let u = a.previous || l.optionMap.last;
        if (!u) return l;
        if (!a.previous && u === l.optionMap.last) {
          let T = l.optionMap.size,
            g = Math.max(0, T - l.visibleOptionCount);
          return {
            ...l,
            focusedValue: u.value,
            visibleFromIndex: g,
            visibleToIndex: T,
          };
        }
        if (!(u.index <= l.visibleFromIndex))
          return { ...l, focusedValue: u.value };
        let v = Math.max(0, l.visibleFromIndex - 1),
          h = v + l.visibleOptionCount;
        return {
          ...l,
          focusedValue: u.value,
          visibleFromIndex: v,
          visibleToIndex: h,
        };
      }
      case "focus-next-page": {
        if (l.focusedValue === void 0) return l;
        let a = l.optionMap.get(l.focusedValue);
        if (!a) return l;
        let u = Math.min(l.optionMap.size - 1, a.index + l.visibleOptionCount),
          c = l.optionMap.first;
        while (c && c.index < u)
          if (c.next) c = c.next;
          else break;
        if (!c) return l;
        let v = Math.min(l.optionMap.size, c.index + 1),
          h = Math.max(0, v - l.visibleOptionCount);
        return {
          ...l,
          focusedValue: c.value,
          visibleFromIndex: h,
          visibleToIndex: v,
        };
      }
      case "focus-previous-page": {
        if (l.focusedValue === void 0) return l;
        let a = l.optionMap.get(l.focusedValue);
        if (!a) return l;
        let u = Math.max(0, a.index - l.visibleOptionCount),
          c = l.optionMap.first;
        while (c && c.index < u)
          if (c.next) c = c.next;
          else break;
        if (!c) return l;
        let v = Math.max(0, c.index),
          h = Math.min(l.optionMap.size, v + l.visibleOptionCount);
        return {
          ...l,
          focusedValue: c.value,
          visibleFromIndex: v,
          visibleToIndex: h,
        };
      }
      case "reset":
        return s.state;
      case "set-focus": {
        if (l.focusedValue === s.value) return l;
        let a = l.optionMap.get(s.value);
        if (!a) return l;
        if (a.index >= l.visibleFromIndex && a.index < l.visibleToIndex)
          return { ...l, focusedValue: s.value };
        let u, c;
        if (a.index < l.visibleFromIndex)
          ((u = a.index),
            (c = Math.min(l.optionMap.size, u + l.visibleOptionCount)));
        else
          ((c = Math.min(l.optionMap.size, a.index + 1)),
            (u = Math.max(0, c - l.visibleOptionCount)));
        return {
          ...l,
          focusedValue: s.value,
          visibleFromIndex: u,
          visibleToIndex: c,
        };
      }
    }
  },
  Jl = ({
    visibleOptionCount: l,
    options: s,
    initialFocusValue: a,
    currentViewport: u,
  }) => {
    let c = typeof l === "number" ? Math.min(l, s.length) : s.length,
      v = new ho(s),
      h = a !== void 0 && v.get(a),
      T = h ? a : v.first?.value,
      g = 0,
      w = c;
    if (h) {
      let A = h.index;
      if (u)
        if (A >= u.visibleFromIndex && A < u.visibleToIndex) {
          if (((g = u.visibleFromIndex), (w = Math.min(v.size, g + c)), A >= w))
            ((w = Math.min(v.size, A + 1)), (g = Math.max(0, w - c)));
          if (w - g < c) g = Math.max(0, w - c);
        } else if (A < u.visibleFromIndex) {
          if (((g = A), (w = Math.min(v.size, g + c)), w - g < c))
            g = Math.max(0, w - c);
        } else ((w = Math.min(v.size, A + 1)), (g = Math.max(0, w - c)));
      else if (A >= c)
        ((w = Math.min(v.size, A + 1)), (g = Math.max(0, w - c)));
      ((g = Math.max(0, Math.min(g, v.size - 1))),
        (w = Math.min(v.size, Math.max(c, w))));
    }
    return {
      optionMap: v,
      visibleOptionCount: c,
      focusedValue: T,
      visibleFromIndex: g,
      visibleToIndex: w,
    };
  };
function gOt({
  visibleOptionCount: l = 5,
  options: s,
  onFocus: a,
  focusValue: u,
}) {
  let [c, v, h] = qm(() =>
      Jl({ visibleOptionCount: l, options: s, initialFocusValue: u }),
    ),
    T = re(
      (Y) => {
        v((Ie) => jc(Ie, Y));
      },
      [v],
    ),
    g = vr((Y) => a?.(Y)),
    w = C(void 0),
    [A, W] = d(s),
    [ae, K] = d(l),
    ee = s !== A && !isDeepStrictEqual(s, A),
    xe = l !== ae;
  if (ee || xe) {
    let Y = h();
    if (
      (T({
        type: "reset",
        state: Jl({
          visibleOptionCount: l,
          options: s,
          initialFocusValue: ee ? (u ?? Y.focusedValue) : (Y.focusedValue ?? u),
          currentViewport: {
            visibleFromIndex: Y.visibleFromIndex,
            visibleToIndex: Y.visibleToIndex,
          },
        }),
      }),
      ee)
    )
      W(s);
    if (xe) K(l);
  }
  let X = re(
      (Y) => {
        T(Y);
        let Ie = li(h().focusedValue, s);
        if (Ie !== void 0 && Ie !== w.current) ((w.current = Ie), a?.(Ie));
      },
      [T, h, s, a],
    ),
    y = re(() => {
      X({ type: "focus-next-option" });
    }, [X]),
    U = re(() => {
      X({ type: "focus-previous-option" });
    }, [X]),
    z = re(() => {
      X({ type: "focus-next-page" });
    }, [X]),
    q = re(() => {
      X({ type: "focus-previous-page" });
    }, [X]),
    M = re(
      (Y) => {
        if (Y !== void 0) X({ type: "set-focus", value: Y });
      },
      [X],
    ),
    I = V(
      () =>
        s
          .map((Y, Ie) => ({ ...Y, index: Ie }))
          .slice(c.visibleFromIndex, c.visibleToIndex),
      [s, c.visibleFromIndex, c.visibleToIndex],
    ),
    P = V(() => li(c.focusedValue, s), [c.focusedValue, s]),
    Ve = re(() => li(h().focusedValue, s), [h, s]);
  return (
    E(() => {
      if (P === void 0) {
        w.current = void 0;
        return;
      }
      if (P !== w.current) ((w.current = P), g(P));
    }, [P]),
    E(() => {
      if (u !== void 0) T({ type: "set-focus", value: u });
    }, [u, T]),
    {
      focusedValue: P,
      getFocusedValue: Ve,
      visibleFromIndex: c.visibleFromIndex,
      visibleToIndex: c.visibleToIndex,
      visibleOptions: I,
      focusNextOption: y,
      focusPreviousOption: U,
      focusNextPage: z,
      focusPreviousPage: q,
      focusOption: M,
      options: s,
    }
  );
}
function li(l, s) {
  if (l === void 0) return;
  if (s.some((a) => a.value === l)) return l;
  return s[0]?.value;
}
function si({
  visibleOptionCount: l = 5,
  options: s,
  defaultValue: a,
  selectedValue: u,
  onChange: c,
  onCancel: v,
  onFocus: h,
  focusValue: T,
}) {
  let [g, w] = d(a),
    A = gOt({ visibleOptionCount: l, options: s, onFocus: h, focusValue: T }),
    { getFocusedValue: W } = A,
    ae = re(() => {
      w(W());
    }, [W]);
  return {
    ...A,
    value: u !== void 0 ? u : g,
    selectFocusedOption: ae,
    onChange: c,
    onCancel: v,
  };
}
F();
function Bc(l, s, a) {
  return l.isWindowActivation || a - s < v9e;
}
function u9e() {
  let l = vt(),
    [s] = d(() => l.now());
  return re(
    (a) => {
      let u = l.now();
      if (!Bc(a, s, u)) return !1;
      let c = a.isWindowActivation ? S("window_activation") : S("mount_settle");
      return (
        n(
          `Select: dropped stray click (${a.isWindowActivation ? "window-activation click" : `${u - s}ms after mount`})`,
        ),
        i("tengu_select_stray_click_dropped", { reason: c }),
        a.dropAsStray(),
        !0
      );
    },
    [l, s],
  );
}
function zd(qv) {
  return qv.type === "input";
}
function Gd(Jv) {
  return Jv.description;
}
function Hd(Xv) {
  return Xv.type === "image";
}
function qd(Yv) {
  return Yv.type === "image";
}
function Jd() {
  return { bold: !0 };
}
function Xd(Qv) {
  return Qv.type === "image";
}
function Yd(Zv) {
  return Zv.type === "image";
}
function Qd(eb) {
  return eb.type === "input";
}
function Zd(nb) {
  return nb.description;
}
function ef(tb) {
  return tb.type === "image";
}
var vs = Symbol("NO_COMMITTED_ROW");
function ve(ne) {
  let Kc = _(11);
  if (tn()) {
    const Qt =
      ne.selectedValue === vs
        ? ne.defaultValue
        : (ne.selectedValue ?? ne.defaultValue);
    let zc;
    if (
      Kc[0] !== ne.disableSelection ||
      Kc[1] !== ne.isDisabled ||
      Kc[2] !== ne.onCancel ||
      Kc[3] !== ne.onChange ||
      Kc[4] !== ne.onFocus ||
      Kc[5] !== ne.options ||
      Kc[6] !== ne.refuseInput ||
      Kc[7] !== Qt
    )
      ((zc = e(X8, {
        options: ne.options,
        onChange: ne.onChange,
        onFocus: ne.onFocus,
        onCancel: ne.onCancel,
        isDisabled: ne.isDisabled,
        disableSelection: ne.disableSelection,
        refuseInput: ne.refuseInput,
        defaultValue: Qt,
      })),
        (Kc[0] = ne.disableSelection),
        (Kc[1] = ne.isDisabled),
        (Kc[2] = ne.onCancel),
        (Kc[3] = ne.onChange),
        (Kc[4] = ne.onFocus),
        (Kc[5] = ne.options),
        (Kc[6] = ne.refuseInput),
        (Kc[7] = Qt),
        (Kc[8] = zc));
    else zc = Kc[8];
    return zc;
  }
  let Qt;
  if (Kc[9] !== ne) ((Qt = e(Ii, { ...ne })), (Kc[9] = ne), (Kc[10] = Qt));
  else Qt = Kc[10];
  return Qt;
}
function Ii(Qm) {
  let Ue = _(98),
    {
      isDisabled: Gc,
      hideIndexes: Hc,
      visibleOptionCount: qc,
      highlightText: we,
      options: Z,
      defaultValue: Xl,
      selectedValue: Yl,
      onCancel: Tn,
      onChange: Qn,
      onFocus: Ql,
      defaultFocusValue: Zl,
      layout: Jc,
      disableSelection: Xc,
      inlineDescriptions: Yc,
      inputChromeWidth: Qc,
      onUpFromFirstItem: es,
      onDownFromLastItem: ns,
      onInputModeToggle: ts,
      onOpenEditor: go,
      canPasteImage: yo,
      onImagePaste: To,
      pastedContents: ze,
      onRemoveImage: Oo,
    } = Qm,
    nn = Gc === void 0 ? !1 : Gc,
    be = Hc === void 0 ? !1 : Hc,
    Zm = qc === void 0 ? 5 : qc,
    Zt = Jc === void 0 ? "compact" : Jc,
    ai = Xc === void 0 ? !1 : Xc,
    Ln = Yc === void 0 ? !1 : Yc,
    So = Qc === void 0 ? 0 : Qc,
    [Zn, wo] = d(!1),
    [Io, ci] = d(0),
    Zc;
  if (Ue[0] !== Z)
    ((Zc = () => {
      let ed = new Map();
      return (
        Z.forEach((di) => {
          if (di.type === "input" && di.initialValue)
            ed.set(di.value, di.initialValue);
        }),
        ed
      );
    }),
      (Ue[0] = Z),
      (Ue[1] = Zc));
  else Zc = Ue[1];
  let [on, fi] = d(Zc),
    nd;
  if (Ue[2] === p) ((nd = new Map()), (Ue[2] = nd));
  else nd = Ue[2];
  let td = C(nd),
    od,
    rd;
  if (Ue[3] !== on || Ue[4] !== Z)
    ((od = () => {
      for (const St of Z) {
        if (St.type === "input" && St.initialValue !== void 0) {
          let id = td.current.get(St.value) ?? "";
          let ev = on.get(St.value) ?? "";
          let os = St.initialValue;
          if (os !== id && ev === id)
            fi((nv) => {
              let ld = new Map(nv);
              return (ld.set(St.value, os), ld);
            });
          td.current.set(St.value, os);
        }
      }
    }),
      (rd = [Z, on]),
      (Ue[3] = on),
      (Ue[4] = Z),
      (Ue[5] = od),
      (Ue[6] = rd));
  else ((od = Ue[5]), (rd = Ue[6]));
  E(od, rd);
  let tv = Zt === "compact" && !Ln && !Z.some(zd) && Z.some(Gd),
    { columns: Co } = ks(Se());
  const rs = d9e(Zm, tv ? "compact-vertical" : Zt);
  let sd;
  if (
    Ue[7] !== Zl ||
    Ue[8] !== Xl ||
    Ue[9] !== Tn ||
    Ue[10] !== Qn ||
    Ue[11] !== Ql ||
    Ue[12] !== Z ||
    Ue[13] !== Yl ||
    Ue[14] !== rs
  )
    ((sd = {
      visibleOptionCount: rs,
      options: Z,
      defaultValue: Xl,
      selectedValue: Yl,
      onChange: Qn,
      onCancel: Tn,
      onFocus: Ql,
      focusValue: Zl,
    }),
      (Ue[7] = Zl),
      (Ue[8] = Xl),
      (Ue[9] = Tn),
      (Ue[10] = Qn),
      (Ue[11] = Ql),
      (Ue[12] = Z),
      (Ue[13] = Yl),
      (Ue[14] = rs),
      (Ue[15] = sd));
  else sd = Ue[15];
  let b = si(sd),
    [is, ud] = d(!0),
    ls = u9e(),
    ad;
  if (Ue[16] !== ai || Ue[17] !== nn || Ue[18] !== ls || Ue[19] !== b)
    ((ad = (pi) =>
      nn || ai === !0 || pi.disabled === !0
        ? void 0
        : (ov) => {
            if (ls(ov)) {
              return;
            }
            if (pi.type === "input") b.focusOption(pi.value);
            else b.onChange?.(pi.value);
          }),
      (Ue[16] = ai),
      (Ue[17] = nn),
      (Ue[18] = ls),
      (Ue[19] = b),
      (Ue[20] = ad));
  else ad = Ue[20];
  let On = ad;
  const ss = ai || (be ? "numeric" : !1);
  let mi;
  if (Ue[21] !== ze)
    ((mi = () => {
      if (ze && Object.values(ze).some(Hd)) {
        let rv = G(Object.values(ze), qd);
        return (wo(!0), ci(rv - 1), !0);
      }
      return !1;
    }),
      (Ue[21] = ze),
      (Ue[22] = mi));
  else mi = Ue[22];
  let cd;
  if (Ue[23] === p)
    ((cd = () => {
      wo(!1);
    }),
      (Ue[23] = cd));
  else cd = Ue[23];
  let fd;
  if (
    Ue[24] !== is ||
    Ue[25] !== Zn ||
    Ue[26] !== on ||
    Ue[27] !== nn ||
    Ue[28] !== ns ||
    Ue[29] !== ts ||
    Ue[30] !== es ||
    Ue[31] !== Z ||
    Ue[32] !== b ||
    Ue[33] !== ss ||
    Ue[34] !== mi
  )
    ((fd = {
      isDisabled: nn,
      hasInkFocus: is,
      disableSelection: ss,
      state: b,
      options: Z,
      isMultiSelect: !1,
      onUpFromFirstItem: es,
      onDownFromLastItem: ns,
      onInputModeToggle: ts,
      inputValues: on,
      imagesSelected: Zn,
      onEnterImageSelection: mi,
      onExitImageSelection: cd,
    }),
      (Ue[24] = is),
      (Ue[25] = Zn),
      (Ue[26] = on),
      (Ue[27] = nn),
      (Ue[28] = ns),
      (Ue[29] = ts),
      (Ue[30] = es),
      (Ue[31] = Z),
      (Ue[32] = b),
      (Ue[33] = ss),
      (Ue[34] = mi),
      (Ue[35] = fd));
  else fd = Ue[35];
  let { handleKeyDown: as } = ii(fd),
    pd = C(null);
  dd(pd, !nn);
  let vi, bi, xi, ko;
  if (
    Ue[36] !== Co ||
    Ue[37] !== yo ||
    Ue[38] !== On ||
    Ue[39] !== as ||
    Ue[40] !== be ||
    Ue[41] !== we ||
    Ue[42] !== Zn ||
    Ue[43] !== Ln ||
    Ue[44] !== So ||
    Ue[45] !== on ||
    Ue[46] !== nn ||
    Ue[47] !== Zt ||
    Ue[48] !== Tn ||
    Ue[49] !== Qn ||
    Ue[50] !== To ||
    Ue[51] !== go ||
    Ue[52] !== Oo ||
    Ue[53] !== Z ||
    Ue[54] !== ze ||
    Ue[55] !== Io ||
    Ue[56] !== b.focusedValue ||
    Ue[57] !== b.options ||
    Ue[58] !== b.value ||
    Ue[59] !== b.visibleFromIndex ||
    Ue[60] !== b.visibleOptions ||
    Ue[61] !== b.visibleToIndex
  ) {
    ko = en;
    bb0: {
      let nt = {
        container: () => ({
          flexDirection: "column",
          ref: pd,
          ...(nn
            ? {}
            : {
                tabIndex: 0,
                onKeyDown: as,
                onFocus: () => ud(!0),
                onBlur: () => ud(!1),
              }),
        }),
        highlightedText: Jd,
      };
      if (Zt === "expanded") {
        let Sn;
        if (Ue[66] !== be || Ue[67] !== b.options)
          ((Sn = be ? 0 : b.options.length.toString().length),
            (Ue[66] = be),
            (Ue[67] = b.options),
            (Ue[68] = Sn));
        else Sn = Ue[68];
        let iv = Sn;
        ko = e(o, {
          ...nt.container(),
          children: b.visibleOptions.map((de, lv) => {
            let md = de.index === b.visibleFromIndex;
            let vd = de.index === b.visibleToIndex - 1;
            let bd = b.visibleToIndex < Z.length;
            let xd = b.visibleFromIndex > 0;
            let sv = b.visibleFromIndex + lv + 1;
            let cs = !nn && b.focusedValue === de.value;
            let ds = b.value === de.value;
            if (de.type === "input") {
              let uv = on.has(de.value)
                ? on.get(de.value)
                : de.initialValue || "";
              return e(
                Y8,
                {
                  option: de,
                  onClick: On(de),
                  isFocused: cs,
                  isSelected: ds,
                  shouldShowDownArrow: bd && vd,
                  shouldShowUpArrow: xd && md,
                  maxIndexWidth: iv,
                  index: sv,
                  hideIndex: be,
                  extraChromeWidth: So,
                  inputValue: uv,
                  onInputChange: (av) => {
                    fi((cv) => {
                      let hd = new Map(cv);
                      return (hd.set(de.value, av), hd);
                    });
                  },
                  onSubmit: (dv) => {
                    let fv = ze && Object.values(ze).some(Xd);
                    if (dv.trim() || fv || de.allowEmptySubmitToCancel)
                      Qn?.(de.value);
                    else Tn?.();
                  },
                  onExit: Tn,
                  layout: "expanded",
                  showLabel: Ln,
                  onOpenEditor: go,
                  resetCursorOnUpdate: de.resetCursorOnUpdate,
                  canPasteImage: yo,
                  onImagePaste: To,
                  pastedContents: ze,
                  onRemoveImage: Oo,
                  imagesSelected: Zn,
                  selectedImageIndex: Io,
                  onImagesSelectedChange: wo,
                  onSelectedImageIndexChange: ci,
                },
                String(de.value),
              );
            }
            let gd = de.label;
            if (typeof de.label === "string" && we && de.label.includes(we)) {
              let fs = de.label;
              let yd = fs.indexOf(we);
              gd = r(N, {
                children: [
                  fs.slice(0, yd),
                  e(t, { ...nt.highlightedText(), children: we }),
                  fs.slice(yd + we.length),
                ],
              });
            }
            let ps = de.disabled === !0;
            let Td = ps ? void 0 : ds ? "success" : cs ? "suggestion" : void 0;
            return r(
              o,
              {
                flexDirection: "column",
                flexShrink: 0,
                children: [
                  e(qB, {
                    isFocused: cs,
                    isSelected: ds,
                    shouldShowDownArrow: bd && vd,
                    shouldShowUpArrow: xd && md,
                    onClick: On(de),
                    children: e(t, { dimColor: ps, color: Td, children: gd }),
                  }),
                  de.description &&
                    e(o, {
                      paddingLeft: 2,
                      children: e(t, {
                        dimColor: ps || de.dimDescription !== !1,
                        color: Td,
                        children: e(jr, { children: de.description }),
                      }),
                    }),
                  e(t, { children: " " }),
                ],
              },
              String(de.value),
            );
          }),
        });
        break bb0;
      }
      if (Zt === "compact-vertical") {
        let Sn;
        if (Ue[69] !== be || Ue[70] !== b.options)
          ((Sn = be ? 0 : b.options.length.toString().length),
            (Ue[69] = be),
            (Ue[70] = b.options),
            (Ue[71] = Sn));
        else Sn = Ue[71];
        let ms = Sn;
        ko = e(o, {
          ...nt.container(),
          children: b.visibleOptions.map((fe, pv) => {
            let Od = fe.index === b.visibleFromIndex;
            let Sd = fe.index === b.visibleToIndex - 1;
            let wd = b.visibleToIndex < Z.length;
            let Id = b.visibleFromIndex > 0;
            let Cd = b.visibleFromIndex + pv + 1;
            let hi = !nn && b.focusedValue === fe.value;
            let gi = b.value === fe.value;
            if (fe.type === "input") {
              let mv = on.has(fe.value)
                ? on.get(fe.value)
                : fe.initialValue || "";
              return e(
                Y8,
                {
                  option: fe,
                  onClick: On(fe),
                  isFocused: hi,
                  isSelected: gi,
                  shouldShowDownArrow: wd && Sd,
                  shouldShowUpArrow: Id && Od,
                  maxIndexWidth: ms,
                  index: Cd,
                  hideIndex: be,
                  extraChromeWidth: So,
                  inputValue: mv,
                  onInputChange: (vv) => {
                    fi((bv) => {
                      let kd = new Map(bv);
                      return (kd.set(fe.value, vv), kd);
                    });
                  },
                  onSubmit: (xv) => {
                    let hv = ze && Object.values(ze).some(Yd);
                    if (xv.trim() || hv || fe.allowEmptySubmitToCancel)
                      Qn?.(fe.value);
                    else Tn?.();
                  },
                  onExit: Tn,
                  layout: "compact",
                  showLabel: Ln,
                  onOpenEditor: go,
                  resetCursorOnUpdate: fe.resetCursorOnUpdate,
                  canPasteImage: yo,
                  onImagePaste: To,
                  pastedContents: ze,
                  onRemoveImage: Oo,
                  imagesSelected: Zn,
                  selectedImageIndex: Io,
                  onImagesSelectedChange: wo,
                  onSelectedImageIndexChange: ci,
                },
                String(fe.value),
              );
            }
            let Md = fe.label;
            if (typeof fe.label === "string" && we && fe.label.includes(we)) {
              let bs = fe.label;
              let Dd = bs.indexOf(we);
              Md = r(N, {
                children: [
                  bs.slice(0, Dd),
                  e(t, { ...nt.highlightedText(), children: we }),
                  bs.slice(Dd + we.length),
                ],
              });
            }
            let yi = fe.disabled === !0;
            return r(
              o,
              {
                flexDirection: "column",
                flexShrink: 0,
                children: [
                  e(qB, {
                    isFocused: hi,
                    isSelected: gi,
                    shouldShowDownArrow: wd && Sd,
                    shouldShowUpArrow: Id && Od,
                    onClick: On(fe),
                    children: r(N, {
                      children: [
                        !be &&
                          e(t, {
                            dimColor: !0,
                            children: `${Cd}.`.padEnd(ms + 1),
                          }),
                        e(t, {
                          dimColor: yi,
                          color: yi
                            ? void 0
                            : gi
                              ? "success"
                              : hi
                                ? "suggestion"
                                : void 0,
                          children: Md,
                        }),
                      ],
                    }),
                  }),
                  fe.description &&
                    e(o, {
                      paddingLeft: be ? 4 : ms + 4,
                      children: e(t, {
                        dimColor: yi || fe.dimDescription !== !1,
                        color: yi
                          ? void 0
                          : gi
                            ? "success"
                            : hi
                              ? "suggestion"
                              : void 0,
                        children: e(jr, { children: fe.description }),
                      }),
                    }),
                ],
              },
              String(fe.value),
            );
          }),
        });
        break bb0;
      }
      let Sn;
      if (Ue[72] !== be || Ue[73] !== b.options)
        ((Sn = be ? 0 : b.options.length.toString().length),
          (Ue[72] = be),
          (Ue[73] = b.options),
          (Ue[74] = Sn));
      else Sn = Ue[74];
      let tt = Sn;
      let gv = Z.some(Qd);
      let yv = !Ln && !gv && Z.some(Zd);
      if (yv) {
        let ot, Mo;
        if (
          Ue[75] !== Co ||
          Ue[76] !== be ||
          Ue[77] !== tt ||
          Ue[78] !== Z ||
          Ue[79] !== b.value
        ) {
          ot = be ? 0 : tt + 2;
          let Do;
          if (Ue[82] !== ot || Ue[83] !== Z || Ue[84] !== b.value) {
            let Vd;
            if (Ue[86] !== ot || Ue[87] !== b.value)
              ((Vd = (xs) => {
                if (xs.type === "input") {
                  return 0;
                }
                let Tv = b.value === xs.value ? 2 : 0;
                return 2 + ot + te(cE(xs.label)) + Tv;
              }),
                (Ue[86] = ot),
                (Ue[87] = b.value),
                (Ue[88] = Vd));
            else Vd = Ue[88];
            Do = Math.max(...Z.map(Vd));
            ((Ue[82] = ot), (Ue[83] = Z), (Ue[84] = b.value), (Ue[85] = Do));
          } else Do = Ue[85];
          Mo = Math.min(Do, Math.floor(Co * Vs));
          ((Ue[75] = Co),
            (Ue[76] = be),
            (Ue[77] = tt),
            (Ue[78] = Z),
            (Ue[79] = b.value),
            (Ue[80] = ot),
            (Ue[81] = Mo));
        } else ((ot = Ue[80]), (Mo = Ue[81]));
        let Vv = b.visibleOptions.map((it, Ov) => {
          let Sv = it.index === b.visibleFromIndex;
          let wv = it.index === b.visibleToIndex - 1;
          let Iv = b.visibleToIndex < Z.length;
          let Cv = b.visibleFromIndex > 0;
          let kv = b.visibleFromIndex + Ov + 1;
          let Mv = !nn && b.focusedValue === it.value;
          let Ad = b.value === it.value;
          let Dv = it.disabled === !0;
          let Rd = Ad ? 2 : 0;
          let Vo = cE(it.label);
          let eo = it.label;
          let Fd = Mo - 2 - ot - Rd;
          if (te(Vo) > Fd) ((Vo = truncateToWidth(Vo, Fd)), (eo = Vo));
          if (typeof eo === "string" && we && eo.includes(we)) {
            let hs = eo;
            let Ed = hs.indexOf(we);
            eo = r(N, {
              children: [
                hs.slice(0, Ed),
                e(t, { ...nt.highlightedText(), children: we }),
                hs.slice(Ed + we.length),
              ],
            });
          }
          return {
            option: it,
            index: kv,
            label: eo,
            labelWidth: 2 + ot + te(Vo) + Rd,
            isFocused: Mv,
            isSelected: Ad,
            isOptionDisabled: Dv,
            shouldShowDownArrow: Iv && wv,
            shouldShowUpArrow: Cv && Sv,
          };
        });
        let Do;
        if (Ue[89] !== On || Ue[90] !== be || Ue[91] !== tt || Ue[92] !== Mo)
          ((Do = (ye) => {
            if (ye.option.type === "input") {
              return null;
            }
            let Pd = Mo - ye.labelWidth;
            return r(
              Ci,
              {
                isFocused: ye.isFocused,
                shouldShowDownArrow: ye.shouldShowDownArrow,
                shouldShowUpArrow: ye.shouldShowUpArrow,
                onClick: On(ye.option),
                children: [
                  r(o, {
                    flexDirection: "row",
                    flexShrink: 0,
                    children: [
                      e(t, { children: " " }),
                      r(t, {
                        dimColor: ye.isOptionDisabled,
                        color: ye.isOptionDisabled
                          ? void 0
                          : ye.isSelected
                            ? "success"
                            : ye.isFocused
                              ? "suggestion"
                              : void 0,
                        children: [
                          !be &&
                            e(t, {
                              dimColor: !0,
                              children: `${ye.index}.`.padEnd(tt + 2),
                            }),
                          ye.label,
                        ],
                      }),
                      ye.isSelected &&
                        r(t, { children: [" ", e(et, { status: "success" })] }),
                      Pd > 0 && e(t, { children: " ".repeat(Pd) }),
                    ],
                  }),
                  e(o, {
                    flexGrow: 1,
                    marginLeft: 2,
                    children: e(t, {
                      wrap: "wrap",
                      dimColor:
                        ye.option.descriptionColor === void 0 &&
                        (ye.isOptionDisabled ||
                          ye.option.dimDescription !== !1),
                      color: ye.isOptionDisabled
                        ? ye.option.descriptionColor
                        : ye.isSelected
                          ? "success"
                          : ye.isFocused
                            ? "suggestion"
                            : ye.option.descriptionColor,
                      children: e(jr, {
                        children: ye.option.description || " ",
                      }),
                    }),
                  }),
                ],
              },
              String(ye.option.value),
            );
          }),
            (Ue[89] = On),
            (Ue[90] = be),
            (Ue[91] = tt),
            (Ue[92] = Mo),
            (Ue[93] = Do));
        else Do = Ue[93];
        ko = e(o, { ...nt.container(), children: Vv.map(Do) });
        break bb0;
      }
      vi = o;
      bi = nt.container();
      xi = b.visibleOptions.map((J, Nd) => {
        if (J.type === "input") {
          let Av = on.has(J.value) ? on.get(J.value) : J.initialValue || "";
          let Rv = J.index === b.visibleFromIndex;
          let Fv = J.index === b.visibleToIndex - 1;
          let Ev = b.visibleToIndex < Z.length;
          let Pv = b.visibleFromIndex > 0;
          let Nv = b.visibleFromIndex + Nd + 1;
          let Wv = !nn && b.focusedValue === J.value;
          let $v = b.value === J.value;
          return e(
            Y8,
            {
              option: J,
              onClick: On(J),
              isFocused: Wv,
              isSelected: $v,
              shouldShowDownArrow: Ev && Fv,
              shouldShowUpArrow: Pv && Rv,
              maxIndexWidth: tt,
              index: Nv,
              hideIndex: be,
              extraChromeWidth: So,
              inputValue: Av,
              onInputChange: (Lv) => {
                fi((Uv) => {
                  let Wd = new Map(Uv);
                  return (Wd.set(J.value, Lv), Wd);
                });
              },
              onSubmit: (_v) => {
                let jv = ze && Object.values(ze).some(ef);
                if (_v.trim() || jv || J.allowEmptySubmitToCancel)
                  Qn?.(J.value);
                else Tn?.();
              },
              onExit: Tn,
              layout: "compact",
              showLabel: Ln,
              onOpenEditor: go,
              resetCursorOnUpdate: J.resetCursorOnUpdate,
              canPasteImage: yo,
              onImagePaste: To,
              pastedContents: ze,
              onRemoveImage: Oo,
              imagesSelected: Zn,
              selectedImageIndex: Io,
              onImagesSelectedChange: wo,
              onSelectedImageIndexChange: ci,
            },
            String(J.value),
          );
        }
        let $d = J.label;
        if (typeof J.label === "string" && we && J.label.includes(we)) {
          let gs = J.label;
          let Ld = gs.indexOf(we);
          $d = r(N, {
            children: [
              gs.slice(0, Ld),
              e(t, { ...nt.highlightedText(), children: we }),
              gs.slice(Ld + we.length),
            ],
          });
        }
        let Bv = J.index === b.visibleFromIndex;
        let Kv = J.index === b.visibleToIndex - 1;
        let zv = b.visibleToIndex < Z.length;
        let Gv = b.visibleFromIndex > 0;
        let Hv = b.visibleFromIndex + Nd + 1;
        let ys = !nn && b.focusedValue === J.value;
        let Ts = b.value === J.value;
        let Ao = J.disabled === !0;
        return r(
          qB,
          {
            isFocused: ys,
            isSelected: Ts,
            shouldShowDownArrow: zv && Kv,
            shouldShowUpArrow: Gv && Bv,
            onClick: On(J),
            children: [
              r(o, {
                flexDirection: "row",
                flexShrink: 0,
                children: [
                  !be &&
                    e(t, { dimColor: !0, children: `${Hv}.`.padEnd(tt + 2) }),
                  r(t, {
                    dimColor: Ao,
                    color: Ao
                      ? void 0
                      : Ts
                        ? "success"
                        : ys
                          ? "suggestion"
                          : void 0,
                    children: [
                      $d,
                      Ln &&
                        J.description &&
                        r(t, {
                          dimColor: Ao || J.dimDescription !== !1,
                          children: [" ", J.description],
                        }),
                    ],
                  }),
                ],
              }),
              !Ln &&
                J.description &&
                e(o, {
                  flexShrink: 99,
                  marginLeft: 2,
                  children: e(t, {
                    wrap: "wrap-trim",
                    dimColor: Ao || J.dimDescription !== !1,
                    color: Ao
                      ? void 0
                      : Ts
                        ? "success"
                        : ys
                          ? "suggestion"
                          : void 0,
                    children: e(jr, { children: J.description }),
                  }),
                }),
            ],
          },
          String(J.value),
        );
      });
    }
    ((Ue[36] = Co),
      (Ue[37] = yo),
      (Ue[38] = On),
      (Ue[39] = as),
      (Ue[40] = be),
      (Ue[41] = we),
      (Ue[42] = Zn),
      (Ue[43] = Ln),
      (Ue[44] = So),
      (Ue[45] = on),
      (Ue[46] = nn),
      (Ue[47] = Zt),
      (Ue[48] = Tn),
      (Ue[49] = Qn),
      (Ue[50] = To),
      (Ue[51] = go),
      (Ue[52] = Oo),
      (Ue[53] = Z),
      (Ue[54] = ze),
      (Ue[55] = Io),
      (Ue[56] = b.focusedValue),
      (Ue[57] = b.options),
      (Ue[58] = b.value),
      (Ue[59] = b.visibleFromIndex),
      (Ue[60] = b.visibleOptions),
      (Ue[61] = b.visibleToIndex),
      (Ue[62] = vi),
      (Ue[63] = bi),
      (Ue[64] = xi),
      (Ue[65] = ko));
  } else ((vi = Ue[62]), (bi = Ue[63]), (xi = Ue[64]), (ko = Ue[65]));
  if (ko !== en) return ko;
  let Sn;
  if (Ue[94] !== vi || Ue[95] !== bi || Ue[96] !== xi)
    ((Sn = e(vi, { ...bi, children: xi })),
      (Ue[94] = vi),
      (Ue[95] = bi),
      (Ue[96] = xi),
      (Ue[97] = Sn));
  else Sn = Ue[97];
  return Sn;
}
var Ds = 8,
  Vs = 0.6;
function d9e(ob, Ud) {
  let _d = Ud === void 0 ? "compact" : Ud,
    { rows: rb } = ks(Se()),
    ib = _d === "expanded" ? 3 : _d === "compact" ? 1 : 2,
    lb = Math.max(1, Math.floor((rb - Ds) / ib));
  return Math.min(ob, lb);
}
function Ci(sb) {
  let Ro = _(19),
    {
      isFocused: no,
      shouldShowDownArrow: Ss,
      shouldShowUpArrow: ws,
      onClick: Ti,
      children: Is,
    } = sb,
    [Cs, jd] = d(!1),
    _n = Ti !== void 0,
    Bd;
  if (Ro[0] !== no)
    ((Bd = { line: 0, column: 0, active: no }), (Ro[0] = no), (Ro[1] = Bd));
  else Bd = Ro[1];
  let Ms = _p(Bd),
    Oi;
  if (Ro[2] !== _n)
    ((Oi = _n ? () => jd(!0) : void 0), (Ro[2] = _n), (Ro[3] = Oi));
  else Oi = Ro[3];
  let Si;
  if (Ro[4] !== _n)
    ((Si = _n ? () => jd(!1) : void 0), (Ro[4] = _n), (Ro[5] = Si));
  else Si = Ro[5];
  let wi;
  if (
    Ro[6] !== _n ||
    Ro[7] !== Cs ||
    Ro[8] !== no ||
    Ro[9] !== Ss ||
    Ro[10] !== ws
  )
    ((wi = e(o, {
      flexShrink: 0,
      children: no
        ? e(t, { color: "suggestion", children: L.pointer })
        : Ss
          ? e(t, { dimColor: !0, children: L.arrowDown })
          : ws
            ? e(t, { dimColor: !0, children: L.arrowUp })
            : _n && Cs
              ? e(t, { dimColor: !0, children: L.pointer })
              : e(t, { children: " " }),
    })),
      (Ro[6] = _n),
      (Ro[7] = Cs),
      (Ro[8] = no),
      (Ro[9] = Ss),
      (Ro[10] = ws),
      (Ro[11] = wi));
  else wi = Ro[11];
  let Kd;
  if (
    Ro[12] !== Is ||
    Ro[13] !== Ms ||
    Ro[14] !== Ti ||
    Ro[15] !== Oi ||
    Ro[16] !== Si ||
    Ro[17] !== wi
  )
    ((Kd = r(o, {
      ref: Ms,
      flexDirection: "row",
      flexShrink: 0,
      onClick: Ti,
      onMouseEnter: Oi,
      onMouseLeave: Si,
      children: [wi, Is],
    })),
      (Ro[12] = Is),
      (Ro[13] = Ms),
      (Ro[14] = Ti),
      (Ro[15] = Oi),
      (Ro[16] = Si),
      (Ro[17] = wi),
      (Ro[18] = Kd));
  else Kd = Ro[18];
  return Kd;
}
export {
  cE,
  ui,
  Gm,
  fa,
  c9e,
  $o,
  X8,
  fOt,
  mOt,
  nl,
  qB,
  Y8,
  qm,
  gOt,
  u9e,
  vs,
  ve,
  d9e,
};
