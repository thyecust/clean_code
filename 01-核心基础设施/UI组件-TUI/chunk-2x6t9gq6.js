// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { getStringWidth } from "../核心工具-字符串与文本/ansi-text-utils.js";
import { Box, Text } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybinding, useKeybindings } from "../../02-功能模块/键位绑定-Keybindings/keybinding-hooks.js";
import { DotSeparatedList } from "../核心工具-未归类/chunk-ff1hq6qq.js";
import { hn } from "./chunk-tp42fv8j.js";
import { de } from "./chunk-92g8hxqw.js";
import { KeybindingHint } from "../../02-功能模块/键位绑定-Keybindings/keybinding-display.js";
import { ErrorMessage } from "./error-message.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { V, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../内嵌资源与模块互操作/chunk-2c9tjhwd.js";
F();
function Be(lo) {
  return getStringWidth(lo.label);
}
function Ie(co) {
  return co !== null;
}
function XL(Ye) {
  let n = _(107),
    {
      title: Pt,
      subtitle: Ut,
      fields: m,
      values: s,
      onChange: A,
      onSubmit: Bt,
      onCancel: C,
      submitLabel: re,
    } = Ye,
    It = re === void 0 ? "Save" : re,
    k = m.length + 1,
    [l, _e] = d(0),
    ie;
  if (n[0] !== m[0] || n[1] !== s)
    ((ie = () => {
      let se = m[0];
      return se?.type === "text" ? (s[se.key] ?? "").length : 0;
    }),
      (n[0] = m[0]),
      (n[1] = s),
      (n[2] = ie));
  else ie = n[2];
  let [tt, le] = d(ie),
    a = l < m.length ? m[l] : null,
    je = a?.type === "text",
    ce;
  if (n[3] !== m) ((ce = Math.max(...m.map(Be))), (n[3] = m), (n[4] = ce));
  else ce = n[4];
  let et = ce,
    ae;
  if (n[5] !== s)
    ((ae = function ot(O) {
      if (O.type !== "text") {
        return null;
      }
      let me = s[O.key] ?? "";
      if (O.required && me.trim() === "") {
        return `${O.label} is required`;
      }
      return O.validate ? O.validate(me, s) : null;
    }),
      (n[5] = s),
      (n[6] = ae));
  else ae = n[6];
  let ot = ae,
    pe;
  if (n[7] !== ot || n[8] !== m)
    ((pe = m.map(ot).find(Ie)), (n[7] = ot), (n[8] = m), (n[9] = pe));
  else pe = n[9];
  let S = pe,
    ge;
  if (n[10] !== m || n[11] !== l || n[12] !== k || n[13] !== s)
    ((ge = function y(Ke) {
      let Lt = Math.max(0, Math.min(k - 1, Ke));
      if (Lt === l) {
        return;
      }
      _e(Lt);
      let he = m[Lt];
      if (he?.type === "text") le((s[he.key] ?? "").length);
    }),
      (n[10] = m),
      (n[11] = l),
      (n[12] = k),
      (n[13] = s),
      (n[14] = ge));
  else ge = n[14];
  let y = ge,
    ye;
  if (n[15] !== S || n[16] !== Bt)
    ((ye = function T() {
      if (S) {
        return;
      }
      Bt();
    }),
      (n[15] = S),
      (n[16] = Bt),
      (n[17] = ye));
  else ye = n[17];
  let T = ye,
    be;
  if (n[18] !== a || n[19] !== A || n[20] !== s)
    ((be = function G(to) {
      if (a?.type !== "select") {
        return;
      }
      let nt = a.options;
      let eo = s[a.key] ?? nt[0]?.value ?? "";
      let no = nt.findIndex((oo) => oo.value === eo);
      let xe = nt[(no + to + nt.length) % nt.length];
      if (xe) A(a.key, xe.value);
    }),
      (n[18] = a),
      (n[19] = A),
      (n[20] = s),
      (n[21] = be));
  else be = n[21];
  let G = be,
    ut,
    dt;
  if (n[22] !== l || n[23] !== y)
    ((dt = () => y(l - 1)),
      (ut = () => y(l + 1)),
      (n[22] = l),
      (n[23] = y),
      (n[24] = ut),
      (n[25] = dt));
  else ((ut = n[24]), (dt = n[25]));
  let gt;
  if (n[26] !== l || n[27] !== y || n[28] !== k || n[29] !== T)
    ((gt = () => {
      if (l === k - 1) T();
      else y(l + 1);
    }),
      (n[26] = l),
      (n[27] = y),
      (n[28] = k),
      (n[29] = T),
      (n[30] = gt));
  else gt = n[30];
  let ve;
  if (n[31] !== C || n[32] !== ut || n[33] !== gt || n[34] !== dt)
    ((ve = {
      "select:previous": dt,
      "select:next": ut,
      "select:accept": gt,
      "select:cancel": C,
    }),
      (n[31] = C),
      (n[32] = ut),
      (n[33] = gt),
      (n[34] = dt),
      (n[35] = ve));
  else ve = n[35];
  const Nt = !je;
  let fe;
  if (n[36] !== Nt)
    ((fe = { context: "Select", isActive: Nt }), (n[36] = Nt), (n[37] = fe));
  else fe = n[37];
  useKeybindings(ve, fe);
  let Ce;
  if (n[38] === MEMO_CACHE_SENTINEL) ((Ce = { context: "Settings" }), (n[38] = Ce));
  else Ce = n[38];
  useKeybinding("confirm:no", C, Ce);
  let ke;
  if (n[39] !== G)
    ((ke = { "tabs:previous": () => G(-1), "tabs:next": () => G(1) }),
      (n[39] = G),
      (n[40] = ke));
  else ke = n[40];
  const Ot = a?.type === "select";
  let Fe;
  if (n[41] !== Ot)
    ((Fe = { context: "Tabs", isActive: Ot }), (n[41] = Ot), (n[42] = Fe));
  else Fe = n[42];
  useKeybindings(ke, Fe);
  let H = a ? (s[a.key] ?? "") : "",
    Re;
  if (n[43] !== a || n[44] !== H || n[45] !== s)
    ((Re = a?.type === "text" && a.validate ? a.validate(H, s) : null),
      (n[43] = a),
      (n[44] = H),
      (n[45] = s),
      (n[46] = Re));
  else Re = n[46];
  let B = Re,
    Te;
  if (n[47] !== B || n[48] !== a || n[49] !== H || n[50] !== s)
    ((Te = !B && a?.hint ? a.hint(H, s) : void 0),
      (n[47] = B),
      (n[48] = a),
      (n[49] = H),
      (n[50] = s),
      (n[51] = Te));
  else Te = n[51];
  let ht = Te,
    yt;
  if (
    n[52] !== tt ||
    n[53] !== m ||
    n[54] !== l ||
    n[55] !== et ||
    n[56] !== y ||
    n[57] !== C ||
    n[58] !== A ||
    n[59] !== T ||
    n[60] !== s
  ) {
    let W;
    if (
      n[62] !== tt ||
      n[63] !== m.length ||
      n[64] !== l ||
      n[65] !== et ||
      n[66] !== y ||
      n[67] !== C ||
      n[68] !== A ||
      n[69] !== T ||
      n[70] !== s
    )
      ((W = (bt, rt) => {
        let ro = rt === l;
        let io = s[bt.key] ?? "";
        return e(
          Et,
          {
            field: bt,
            value: io,
            isFocused: ro,
            labelWidth: et,
            cursor: tt,
            setCursor: le,
            onChange: (so) => A(bt.key, so),
            onCancel: C,
            onUp: () => y(rt - 1),
            onDown: () => y(rt + 1),
            onEnter: () => {
              if (rt === m.length - 1) T();
              else y(rt + 1);
            },
          },
          bt.key,
        );
      }),
        (n[62] = tt),
        (n[63] = m.length),
        (n[64] = l),
        (n[65] = et),
        (n[66] = y),
        (n[67] = C),
        (n[68] = A),
        (n[69] = T),
        (n[70] = s),
        (n[71] = W));
    else W = n[71];
    yt = m.map(W);
    ((n[52] = tt),
      (n[53] = m),
      (n[54] = l),
      (n[55] = et),
      (n[56] = y),
      (n[57] = C),
      (n[58] = A),
      (n[59] = T),
      (n[60] = s),
      (n[61] = yt));
  } else yt = n[61];
  const W = l === k - 1 ? "suggestion" : void 0,
    Gt = l === k - 1 ? figures.pointer : " ";
  let xt;
  if (n[72] !== W || n[73] !== Gt)
    ((xt = r(Text, { color: W, children: [Gt, " "] })),
      (n[72] = W),
      (n[73] = Gt),
      (n[74] = xt));
  else xt = n[74];
  const Ht = l === k - 1,
    Vt = !!S;
  let vt;
  if (n[75] !== It || n[76] !== Ht || n[77] !== Vt)
    ((vt = e(Text, { bold: Ht, dimColor: Vt, children: It })),
      (n[75] = It),
      (n[76] = Ht),
      (n[77] = Vt),
      (n[78] = vt));
  else vt = n[78];
  let ft;
  if (n[79] !== S || n[80] !== l || n[81] !== k)
    ((ft =
      S && l === k - 1 && r(Text, { color: "error", children: [" \xB7 ", S] })),
      (n[79] = S),
      (n[80] = l),
      (n[81] = k),
      (n[82] = ft));
  else ft = n[82];
  let Ct;
  if (n[83] !== xt || n[84] !== vt || n[85] !== ft)
    ((Ct = r(Box, { marginTop: 1, children: [xt, vt, ft] })),
      (n[83] = xt),
      (n[84] = vt),
      (n[85] = ft),
      (n[86] = Ct));
  else Ct = n[86];
  let kt;
  if (n[87] !== B || n[88] !== ht)
    ((kt = e(Box, {
      marginTop: 1,
      minHeight: 1,
      children: B
        ? e(ErrorMessage, { error: B })
        : ht
          ? e(Text, { dimColor: !0, children: ht })
          : e(Text, { children: " " }),
    })),
      (n[87] = B),
      (n[88] = ht),
      (n[89] = kt));
  else kt = n[89];
  let we;
  if (n[90] === MEMO_CACHE_SENTINEL)
    ((we = e(KeybindingHint, { chord: ["up", "down"], action: "move" })), (n[90] = we));
  else we = n[90];
  let Ft;
  if (n[91] !== a?.type)
    ((Ft =
      a?.type === "select" &&
      e(KeybindingHint, { chord: ["left", "right"], action: "change" })),
      (n[91] = a?.type),
      (n[92] = Ft));
  else Ft = n[92];
  let De, Ee;
  if (n[93] === MEMO_CACHE_SENTINEL)
    ((De = e(KeybindingHint, { chord: "enter", action: "continue" })),
      (Ee = e(KeybindingHint, { chord: "escape", action: "cancel" })),
      (n[93] = De),
      (n[94] = Ee));
  else ((De = n[93]), (Ee = n[94]));
  let Rt;
  if (n[95] !== Ft)
    ((Rt = e(Box, {
      marginTop: 1,
      children: e(Text, {
        dimColor: !0,
        children: r(DotSeparatedList, { children: [we, Ft, De, Ee] }),
      }),
    })),
      (n[95] = Ft),
      (n[96] = Rt));
  else Rt = n[96];
  let Tt;
  if (n[97] !== yt || n[98] !== Ct || n[99] !== kt || n[100] !== Rt)
    ((Tt = r(Box, { flexDirection: "column", children: [yt, Ct, kt, Rt] })),
      (n[97] = yt),
      (n[98] = Ct),
      (n[99] = kt),
      (n[100] = Rt),
      (n[101] = Tt));
  else Tt = n[101];
  let Me;
  if (n[102] !== C || n[103] !== Ut || n[104] !== Tt || n[105] !== Pt)
    ((Me = e(de, {
      title: Pt,
      subtitle: Ut,
      onCancel: C,
      hideInputGuide: !0,
      isCancelActive: !1,
      children: Tt,
    })),
      (n[102] = C),
      (n[103] = Ut),
      (n[104] = Tt),
      (n[105] = Pt),
      (n[106] = Me));
  else Me = n[106];
  return Me;
}
function Et(ao) {
  let w = _(44),
    {
      field: i,
      value: b,
      isFocused: M,
      labelWidth: Wt,
      cursor: $t,
      setCursor: zt,
      onChange: Jt,
      onCancel: Qt,
      onUp: Xt,
      onDown: Yt,
      onEnter: Zt,
    } = ao,
    Ae;
  if (w[0] !== i.label || w[1] !== Wt)
    ((Ae = " ".repeat(Math.max(0, Wt - getStringWidth(i.label)))),
      (w[0] = i.label),
      (w[1] = Wt),
      (w[2] = Ae));
  else Ae = w[2];
  let _t = Ae,
    Se;
  if (w[3] !== i.required || w[4] !== i.type || w[5] !== b)
    ((Se = i.type === "text" && i.required && b.trim() === ""),
      (w[3] = i.required),
      (w[4] = i.type),
      (w[5] = b),
      (w[6] = Se));
  else Se = w[6];
  let jt = Se;
  const Kt = M ? "suggestion" : void 0,
    ee = M ? figures.pointer : " ";
  let qe;
  if (w[7] !== Kt || w[8] !== ee)
    ((qe = r(Text, { color: Kt, children: [ee, " "] })),
      (w[7] = Kt),
      (w[8] = ee),
      (w[9] = qe));
  else qe = w[9];
  let z = qe;
  const oe = !M;
  let wt;
  if (w[10] !== jt)
    ((wt = jt ? e(Text, { color: "error", children: "*" }) : " "),
      (w[10] = jt),
      (w[11] = wt));
  else wt = w[11];
  let Pe;
  if (w[12] !== i.label || w[13] !== _t || w[14] !== oe || w[15] !== wt)
    ((Pe = r(Text, { dimColor: oe, children: [i.label, wt, _t, " "] })),
      (w[12] = i.label),
      (w[13] = _t),
      (w[14] = oe),
      (w[15] = wt),
      (w[16] = Pe));
  else Pe = w[16];
  let J = Pe;
  if (i.type === "select") {
    let I;
    if (w[17] !== i.options || w[18] !== b)
      ((I = i.options.find((mo) => mo.value === b) ?? i.options[0]),
        (w[17] = i.options),
        (w[18] = b),
        (w[19] = I));
    else I = w[19];
    let Dt = I;
    let N;
    if (w[20] !== M || w[21] !== Dt?.label || w[22] !== b)
      ((N = M
        ? r(Text, {
            children: [
              r(Text, { dimColor: !0, children: [figures.triangleLeft, " "] }),
              Dt?.label ?? b,
              r(Text, { dimColor: !0, children: [" ", figures.triangleRight] }),
            ],
          })
        : e(Text, { children: Dt?.label ?? b })),
        (w[20] = M),
        (w[21] = Dt?.label),
        (w[22] = b),
        (w[23] = N));
    else N = w[23];
    let Ue;
    if (w[24] !== J || w[25] !== z || w[26] !== N)
      ((Ue = r(Box, { children: [z, J, N] })),
        (w[24] = J),
        (w[25] = z),
        (w[26] = N),
        (w[27] = Ue));
    else Ue = w[27];
    return Ue;
  }
  let I;
  if (
    w[28] !== $t ||
    w[29] !== i.mask ||
    w[30] !== i.placeholder ||
    w[31] !== M ||
    w[32] !== Qt ||
    w[33] !== Jt ||
    w[34] !== Yt ||
    w[35] !== Zt ||
    w[36] !== Xt ||
    w[37] !== zt ||
    w[38] !== b
  )
    ((I = M
      ? e(hn, {
          value: b,
          onChange: Jt,
          onSubmit: () => Zt(),
          onExit: Qt,
          onHistoryUp: Xt,
          onHistoryDown: Yt,
          placeholder: i.placeholder,
          mask: i.mask,
          columns: 60,
          cursorOffset: $t,
          onChangeCursorOffset: zt,
          disableCursorMovementForUpDownKeys: !0,
          disableEscapeDoublePress: !0,
          focus: !0,
          showCursor: !0,
        })
      : b
        ? e(Text, { children: i.mask ? i.mask.repeat(Math.min(getStringWidth(b), 60)) : b })
        : e(Text, { dimColor: !0, children: i.placeholder ?? "" })),
      (w[28] = $t),
      (w[29] = i.mask),
      (w[30] = i.placeholder),
      (w[31] = M),
      (w[32] = Qt),
      (w[33] = Jt),
      (w[34] = Yt),
      (w[35] = Zt),
      (w[36] = Xt),
      (w[37] = zt),
      (w[38] = b),
      (w[39] = I));
  else I = w[39];
  let N;
  if (w[40] !== J || w[41] !== z || w[42] !== I)
    ((N = r(Box, { children: [z, J, I] })),
      (w[40] = J),
      (w[41] = z),
      (w[42] = I),
      (w[43] = N));
  else N = w[43];
  return N;
}
export { XL };
