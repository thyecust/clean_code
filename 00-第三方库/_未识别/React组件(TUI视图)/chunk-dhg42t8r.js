// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { dd } from "../../../02-功能模块/文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { Ux, WL } from "../../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { _ } from "../../react/react.zhnvc798.js";
import { o, t, tn } from "../../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { Rs } from "../../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import { fOt, qB, Y8, qm, gOt, u9e, d9e } from "../../../02-功能模块/交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { e, r } from "../../react/react.kwtapczy.js";
import { re, C, d, F } from "../React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { L } from "../../../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
F();
F();
import { isDeepStrictEqual } from "util";
function ie({
  isDisabled: u = !1,
  visibleOptionCount: W = 5,
  options: f,
  defaultValue: U = [],
  onChange: K,
  onCancel: q,
  onFocus: Y,
  submitButtonText: T,
  onSubmit: m,
  onDownFromLastItem: E,
  hideIndexes: Z = !1,
  refuseSubmitFocus: A,
}) {
  let [ee, N, O] = qm(U),
    [te, V, ne] = qm(!1),
    [c, G] = d(f);
  if (f !== c && !isDeepStrictEqual(f, c)) (N(U), G(f));
  let [oe, X] = d(() => {
      let n = new Map();
      return (
        f.forEach((l) => {
          if (l.type === "input" && l.initialValue)
            n.set(l.value, l.initialValue);
        }),
        n
      );
    }),
    x = re(
      (n) => {
        let l = typeof n === "function" ? n(O()) : n;
        if (K?.(l) === !1) return;
        N(l);
      },
      [O, N, K],
    ),
    M = re(
      (n) => {
        if (f.find((l) => l.value === n)?.disabled === !0) return;
        x((l) => (l.includes(n) ? l.filter((v) => v !== n) : [...l, n]));
      },
      [f, x],
    ),
    y = gOt({ visibleOptionCount: W, options: f, onFocus: Y });
  Rs("multi-select");
  let s = re(
    (n, l) => {
      let v = f.find((h) => h.value === n);
      if (v?.type === "input" && v.onChange(l) === !1) return;
      (X((h) => {
        let k = new Map(h);
        return (k.set(n, l), k);
      }),
        x((h) => {
          if (l) {
            if (!h.includes(n)) return [...h, n];
            return h;
          } else return h.filter((k) => k !== n);
        }));
    },
    [f, x],
  );
  return {
    ...y,
    focusOption: (n) => {
      (V(!1), y.focusOption(n));
    },
    selectedValues: ee,
    getSelectedValues: O,
    inputValues: oe,
    isSubmitFocused: te,
    updateInputValue: s,
    toggleValue: M,
    onCancel: q,
    handleKeyDown: (n) => {
      if (u) return;
      let l = Ux(n.key),
        v = y.getFocusedValue(),
        k = f.find((I) => I.value === v)?.type === "input",
        b = ne();
      if (k) {
        if (!(
          n.key === "up" ||
          n.key === "down" ||
          n.key === "escape" ||
          n.key === "tab" ||
          n.key === "return" ||
          (n.ctrl && (n.key === "n" || n.key === "p" || n.key === "return"))
        ))
          return;
      }
      let S = f.at(-1)?.value;
      if (n.key === "tab" && !n.shift) {
        if ((n.preventDefault(), T && m && v === S && !b)) {
          if (A?.()) return;
          V(!0);
        } else if (!b) y.focusNextOption();
        return;
      }
      if (n.key === "tab" && n.shift) {
        if ((n.preventDefault(), T && m && b)) (V(!1), y.focusOption(S));
        else y.focusPreviousOption();
        return;
      }
      if (
        n.key === "down" ||
        (n.ctrl && n.key === "n") ||
        (!n.ctrl && !n.shift && n.key === "j")
      ) {
        if ((n.preventDefault(), b && E)) E();
        else if (T && m && v === S && !b) {
          if (A?.()) return;
          V(!0);
        } else if (!T && E && v === S) E();
        else if (!b) y.focusNextOption();
        return;
      }
      if (
        n.key === "up" ||
        (n.ctrl && n.key === "p") ||
        (!n.ctrl && !n.shift && n.key === "k")
      ) {
        if ((n.preventDefault(), T && m && b)) (V(!1), y.focusOption(S));
        else y.focusPreviousOption();
        return;
      }
      if (n.key === "pagedown") {
        (n.preventDefault(), y.focusNextPage());
        return;
      }
      if (n.key === "pageup") {
        (n.preventDefault(), y.focusPreviousPage());
        return;
      }
      if (n.key === "return" || WL(n.key) === " ") {
        if ((n.preventDefault(), n.ctrl && n.key === "return" && k && m)) {
          m(O());
          return;
        }
        if (n.key === "return" && b && m) {
          m(O());
          return;
        }
        if (n.key === "return" && !T && m) {
          m(O());
          return;
        }
        if (!b && v !== void 0) M(v);
        return;
      }
      if (!Z && /^[0-9]$/.test(l)) {
        n.preventDefault();
        let I = parseInt(l) - 1;
        if (I >= 0 && I < f.length) M(f[I].value);
        return;
      }
      if (n.key === "escape") (q(), n.stopImmediatePropagation());
    },
  };
}
function Je(Vt) {
  return Vt.description;
}
function Qe() {}
function lE(i) {
  let Re = _(12);
  if (tn()) {
    let J;
    if (
      Re[0] !== i.defaultValue ||
      Re[1] !== i.isDisabled ||
      Re[2] !== i.onCancel ||
      Re[3] !== i.onChange ||
      Re[4] !== i.onFocus ||
      Re[5] !== i.onSubmit ||
      Re[6] !== i.options ||
      Re[7] !== i.refuseInput ||
      Re[8] !== i.submitButtonText
    )
      ((J = e(fOt, {
        options: i.options,
        defaultValue: i.defaultValue,
        onChange: i.onChange,
        onSubmit: i.onSubmit,
        onFocus: i.onFocus,
        onCancel: i.onCancel,
        isDisabled: i.isDisabled,
        submitButtonText: i.submitButtonText,
        refuseInput: i.refuseInput,
      })),
        (Re[0] = i.defaultValue),
        (Re[1] = i.isDisabled),
        (Re[2] = i.onCancel),
        (Re[3] = i.onChange),
        (Re[4] = i.onFocus),
        (Re[5] = i.onSubmit),
        (Re[6] = i.options),
        (Re[7] = i.refuseInput),
        (Re[8] = i.submitButtonText),
        (Re[9] = J));
    else J = Re[9];
    return J;
  }
  let J;
  if (Re[10] !== i) ((J = e(he, { ...i })), (Re[10] = i), (Re[11] = J));
  else J = Re[11];
  return J;
}
function he(gt) {
  let w = _(58),
    {
      isDisabled: We,
      visibleOptionCount: Ke,
      options: D,
      defaultValue: se,
      onCancel: j,
      onChange: be,
      onFocus: Te,
      submitButtonText: P,
      onSubmit: R,
      onDownFromLastItem: ke,
      onOpenEditor: Oe,
      hideIndexes: Ae,
      canPasteImage: Se,
      onImagePaste: Ie,
      pastedContents: Ve,
      onRemoveImage: xe,
      refuseSubmitFocus: De,
    } = gt,
    p = We === void 0 ? !1 : We,
    ht = Ke === void 0 ? 5 : Ke,
    Ne;
  if (w[0] !== se) ((Ne = se === void 0 ? [] : se), (w[0] = se), (w[1] = Ne));
  else Ne = w[1];
  let we = Ne,
    H = Ae === void 0 ? !1 : Ae,
    bt = D.some(Je);
  const Ce = d9e(ht, bt ? "compact-vertical" : "compact");
  let je;
  if (
    w[2] !== we ||
    w[3] !== H ||
    w[4] !== p ||
    w[5] !== j ||
    w[6] !== be ||
    w[7] !== ke ||
    w[8] !== Te ||
    w[9] !== R ||
    w[10] !== D ||
    w[11] !== De ||
    w[12] !== P ||
    w[13] !== Ce
  )
    ((je = {
      isDisabled: p,
      visibleOptionCount: Ce,
      options: D,
      defaultValue: we,
      onChange: be,
      onCancel: j,
      onFocus: Te,
      submitButtonText: P,
      onSubmit: R,
      onDownFromLastItem: ke,
      hideIndexes: H,
      refuseSubmitFocus: De,
    }),
      (w[2] = we),
      (w[3] = H),
      (w[4] = p),
      (w[5] = j),
      (w[6] = be),
      (w[7] = ke),
      (w[8] = Te),
      (w[9] = R),
      (w[10] = D),
      (w[11] = De),
      (w[12] = P),
      (w[13] = Ce),
      (w[14] = je));
  else je = w[14];
  let a = ie(je),
    He = C(null);
  dd(He, !p);
  let [Fe, ze] = d(!1),
    z = u9e(),
    Le;
  if (w[15] !== p || w[16] !== z || w[17] !== a)
    ((Le = (le) =>
      p || le.disabled === !0
        ? void 0
        : (Tt) => {
            if (z(Tt)) {
              return;
            }
            if (le.type === "input") a.focusOption(le.value);
            else a.toggleValue(le.value);
          }),
      (w[15] = p),
      (w[16] = z),
      (w[17] = a),
      (w[18] = Le));
  else Le = w[18];
  let ae = Le,
    ue,
    de,
    ce,
    fe,
    pe,
    Q,
    me;
  if (
    w[19] !== Se ||
    w[20] !== ae ||
    w[21] !== H ||
    w[22] !== p ||
    w[23] !== j ||
    w[24] !== Ie ||
    w[25] !== Oe ||
    w[26] !== xe ||
    w[27] !== D.length ||
    w[28] !== Ve ||
    w[29] !== a
  ) {
    let Ue = D.length.toString().length;
    de = o;
    fe = "column";
    pe = He;
    if (w[37] !== p || w[38] !== a.handleKeyDown)
      ((Q = p ? {} : { tabIndex: 0, onKeyDown: a.handleKeyDown }),
        (w[37] = p),
        (w[38] = a.handleKeyDown),
        (w[39] = Q));
    else Q = w[39];
    ue = o;
    me = "column";
    ce = a.visibleOptions.map((g, kt) => {
      let Ee = !p && a.focusedValue === g.value && !a.isSubmitFocused;
      let ye = a.selectedValues.includes(g.value);
      let _e = g.index === a.visibleFromIndex;
      let $e = g.index === a.visibleToIndex - 1;
      let qe = a.visibleToIndex < D.length;
      let Ge = a.visibleFromIndex > 0;
      let Xe = a.visibleFromIndex + kt + 1;
      if (g.type === "input") {
        let Ot = a.inputValues.get(g.value) || "";
        return e(
          o,
          {
            gap: 1,
            children: e(Y8, {
              option: g,
              onClick: ae(g),
              isFocused: Ee,
              isSelected: !1,
              shouldShowDownArrow: qe && $e,
              shouldShowUpArrow: Ge && _e,
              maxIndexWidth: Ue,
              index: Xe,
              inputValue: Ot,
              onInputChange: (St) => {
                a.updateInputValue(g.value, St);
              },
              onSubmit: Qe,
              onExit: () => {
                j();
              },
              layout: "compact",
              onOpenEditor: Oe,
              canPasteImage: Se,
              onImagePaste: Ie,
              pastedContents: Ve,
              onRemoveImage: xe,
              extraChromeWidth: 4,
              children: r(t, {
                color: ye ? "success" : void 0,
                children: ["[", ye ? L.tick : " ", "]", " "],
              }),
            }),
          },
          String(g.value),
        );
      }
      return e(
        o,
        {
          gap: 1,
          children: r(qB, {
            isFocused: Ee,
            isSelected: !1,
            shouldShowDownArrow: qe && $e,
            shouldShowUpArrow: Ge && _e,
            description: g.description,
            onClick: ae(g),
            children: [
              !H && e(t, { dimColor: !0, children: `${Xe}.`.padEnd(Ue) }),
              r(t, {
                color: ye ? "success" : void 0,
                children: ["[", ye ? L.tick : " ", "]"],
              }),
              e(t, { color: Ee ? "suggestion" : void 0, children: g.label }),
            ],
          }),
        },
        String(g.value),
      );
    });
    ((w[19] = Se),
      (w[20] = ae),
      (w[21] = H),
      (w[22] = p),
      (w[23] = j),
      (w[24] = Ie),
      (w[25] = Oe),
      (w[26] = xe),
      (w[27] = D.length),
      (w[28] = Ve),
      (w[29] = a),
      (w[30] = ue),
      (w[31] = de),
      (w[32] = ce),
      (w[33] = fe),
      (w[34] = pe),
      (w[35] = Q),
      (w[36] = me));
  } else
    ((ue = w[30]),
      (de = w[31]),
      (ce = w[32]),
      (fe = w[33]),
      (pe = w[34]),
      (Q = w[35]),
      (me = w[36]));
  let ve;
  if (w[40] !== ue || w[41] !== ce || w[42] !== me)
    ((ve = e(ue, { flexDirection: me, children: ce })),
      (w[40] = ue),
      (w[41] = ce),
      (w[42] = me),
      (w[43] = ve));
  else ve = w[43];
  let ge;
  if (
    w[44] !== p ||
    w[45] !== R ||
    w[46] !== z ||
    w[47] !== a ||
    w[48] !== P ||
    w[49] !== Fe
  )
    ((ge =
      P &&
      R &&
      r(o, {
        marginTop: 0,
        gap: 1,
        onClick: p
          ? void 0
          : (It) => {
              if (z(It)) {
                return;
              }
              R(a.getSelectedValues());
            },
        onMouseEnter: () => ze(!0),
        onMouseLeave: () => ze(!1),
        children: [
          !p && a.isSubmitFocused
            ? e(t, { color: "suggestion", children: L.pointer })
            : !p && Fe
              ? e(t, { dimColor: !0, children: L.pointer })
              : e(t, { children: " " }),
          e(o, {
            marginLeft: 3,
            children: e(t, {
              color: !p && a.isSubmitFocused ? "suggestion" : void 0,
              bold: !0,
              children: P,
            }),
          }),
        ],
      })),
      (w[44] = p),
      (w[45] = R),
      (w[46] = z),
      (w[47] = a),
      (w[48] = P),
      (w[49] = Fe),
      (w[50] = ge));
  else ge = w[50];
  let Be;
  if (
    w[51] !== de ||
    w[52] !== fe ||
    w[53] !== pe ||
    w[54] !== Q ||
    w[55] !== ve ||
    w[56] !== ge
  )
    ((Be = r(de, { flexDirection: fe, ref: pe, ...Q, children: [ve, ge] })),
      (w[51] = de),
      (w[52] = fe),
      (w[53] = pe),
      (w[54] = Q),
      (w[55] = ve),
      (w[56] = ge),
      (w[57] = Be));
  else Be = w[57];
  return Be;
}
export { lE };
