// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useActiveKeybindingContext } from "../键位绑定(Keybindings)/keybinding-context.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { updateSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { useKeybindingDisplayText } from "../../01-核心基础设施/共享小工具-未细化/use-keybinding-display-text.js";
import { useTheme, useThemeSetting, usePreviewTheme, useCustomThemes } from "./chunk-w5jaj6kg.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { customThemeRef, parseCustomThemeRef } from "./custom-themes.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { useGlobalExitKeybinding } from "../../01-核心基础设施/共享小工具-未细化/exit-keybinding-hooks.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { useAppStateSelector, useSetAppState } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { xn } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { WWe, KZt } from "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import { StructuredDiff } from "../Diff引擎/structured-diff.js";
import { DashedBorderBox } from "../../01-核心基础设施/共享小工具-未细化/dashed-border-box.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function xt(Et) {
  return Et.settings.syntaxHighlightingDisabled;
}
function vt() {}
function St(k) {
  return {
    label:
      k.source === "user"
        ? `${k.name} (custom)`
        : `${k.name} (from ${k.source.plugin})`,
    value: customThemeRef(k.slug),
  };
}
var g = "__new_custom_theme__";
function ThemePicker(Bt) {
  let i = _(89),
    {
      onThemeSelect: ge,
      showIntroText: je,
      helpText: qe,
      showHelpTextBelow: Ee,
      hideEscToCancel: Je,
      skipExitHandling: Me,
      onCancel: fe,
      onCustomTheme: l,
    } = Bt,
    H = je === void 0 ? !1 : je,
    m = qe === void 0 ? "" : qe,
    u = Ee === void 0 ? !1 : Ee,
    pe = Je === void 0 ? !1 : Je,
    A = Me === void 0 ? !1 : Me,
    { storageV5: be } = useStorageV5Context(),
    [xe] = useTheme(),
    C = useThemeSetting(),
    { columns: Yt } = useTerminalSize(),
    Oe;
  if (i[0] === MEMO_CACHE_SENTINEL) ((Oe = WWe()), (i[0] = Oe));
  else Oe = i[0];
  let ye = Oe,
    Qe;
  if (i[1] !== xe)
    ((Qe = ye === null ? KZt(xe) : null), (i[1] = xe), (i[2] = Qe));
  else Qe = i[2];
  let R = Qe,
    { setPreviewTheme: Ce, savePreview: b, cancelPreview: s } = usePreviewTheme(),
    G = useAppStateSelector(xt) ?? !1,
    ke = useSetAppState();
  useActiveKeybindingContext("ThemePicker");
  let Te = useKeybindingDisplayText("theme:toggleSyntaxHighlighting", "ThemePicker", "ctrl+t"),
    We;
  if (i[3] !== ke || i[4] !== be || i[5] !== G)
    ((We = () => {
      if (ye === null) {
        let Ze = !G;
        (updateSettingsForSource("userSettings", { syntaxHighlightingDisabled: Ze }, void 0, be),
          ke((Ke) => ({
            ...Ke,
            settings: { ...Ke.settings, syntaxHighlightingDisabled: Ze },
          })));
      }
    }),
      (i[3] = ke),
      (i[4] = be),
      (i[5] = G),
      (i[6] = We));
  else We = i[6];
  let et;
  if (i[7] === MEMO_CACHE_SENTINEL) ((et = { context: "ThemePicker" }), (i[7] = et));
  else et = i[7];
  useKeybinding("theme:toggleSyntaxHighlighting", We, et);
  let I = useGlobalExitKeybinding(A ? vt : void 0),
    { customThemes: x } = useCustomThemes(),
    [De, jt] = d(C),
    tt;
  if (i[8] !== De) ((tt = parseCustomThemeRef(De)), (i[8] = De), (i[9] = tt));
  else tt = i[9];
  let V = tt,
    ot;
  if (i[10] !== x || i[11] !== V)
    ((ot = V ? x.find((qt) => qt.slug === V) : void 0),
      (i[10] = x),
      (i[11] = V),
      (i[12] = ot));
  else ot = i[12];
  let c = ot,
    we = useKeybindingDisplayText("theme:editCustom", "ThemePicker", "ctrl+e"),
    it;
  if (i[13] !== c || i[14] !== l || i[15] !== b)
    ((it = () => {
      if (c && l) (b(), l(c));
    }),
      (i[13] = c),
      (i[14] = l),
      (i[15] = b),
      (i[16] = it));
  else it = i[16];
  let nt;
  if (i[17] === MEMO_CACHE_SENTINEL) ((nt = { context: "ThemePicker" }), (i[17] = nt));
  else nt = i[17];
  useKeybinding("theme:editCustom", it, nt);
  let lt, st, rt, at, mt, ct, dt;
  if (i[18] === MEMO_CACHE_SENTINEL)
    ((lt = { label: "Auto (match terminal)", value: "auto" }),
      (st = { label: "Dark mode", value: "dark" }),
      (rt = { label: "Light mode", value: "light" }),
      (at = {
        label: "Dark mode (colorblind-friendly)",
        value: "dark-daltonized",
      }),
      (mt = {
        label: "Light mode (colorblind-friendly)",
        value: "light-daltonized",
      }),
      (ct = { label: "Dark mode (ANSI colors only)", value: "dark-ansi" }),
      (dt = { label: "Light mode (ANSI colors only)", value: "light-ansi" }),
      (i[18] = lt),
      (i[19] = st),
      (i[20] = rt),
      (i[21] = at),
      (i[22] = mt),
      (i[23] = ct),
      (i[24] = dt));
  else
    ((lt = i[18]),
      (st = i[19]),
      (rt = i[20]),
      (at = i[21]),
      (mt = i[22]),
      (ct = i[23]),
      (dt = i[24]));
  let ht;
  if (i[25] !== x || i[26] !== l) {
    let h;
    if (i[28] !== l)
      ((h = l ? [{ label: "New custom theme\u2026", value: g }] : []),
        (i[28] = l),
        (i[29] = h));
    else h = i[29];
    ht = [lt, st, rt, at, mt, ct, dt, ...x.map(St), ...h];
    ((i[25] = x), (i[26] = l), (i[27] = ht));
  } else ht = i[27];
  let X = ht,
    h;
  if (i[30] !== H)
    ((h = H
      ? e(t, { children: "Let's get started." })
      : e(t, { bold: !0, color: "permission", children: "Theme" })),
      (i[30] = H),
      (i[31] = h));
  else h = i[31];
  let gt;
  if (i[32] === MEMO_CACHE_SENTINEL)
    ((gt = e(t, {
      bold: !0,
      children: "Choose the text style that looks best with your terminal",
    })),
      (i[32] = gt));
  else gt = i[32];
  let z;
  if (i[33] !== m || i[34] !== u)
    ((z = m && !u && e(t, { dimColor: !0, children: m })),
      (i[33] = m),
      (i[34] = u),
      (i[35] = z));
  else z = i[35];
  let B;
  if (i[36] !== z)
    ((B = r(o, { flexDirection: "column", children: [gt, z] })),
      (i[36] = z),
      (i[37] = B));
  else B = i[37];
  let Y;
  if (i[38] !== s || i[39] !== Ce)
    ((Y = (Le) => {
      if ((jt(Le), Le === g)) s();
      else Ce(Le);
    }),
      (i[38] = s),
      (i[39] = Ce),
      (i[40] = Y));
  else Y = i[40];
  let j;
  if (i[41] !== s || i[42] !== l || i[43] !== ge || i[44] !== b)
    ((j = (ft) => {
      if (ft === g) {
        (s(), l?.(void 0));
        return;
      }
      (b(), ge(ft));
    }),
      (i[41] = s),
      (i[42] = l),
      (i[43] = ge),
      (i[44] = b),
      (i[45] = j));
  else j = i[45];
  let q;
  if (i[46] !== s || i[47] !== fe || i[48] !== A)
    ((q = A
      ? () => {
          (s(), fe?.());
        }
      : async () => {
          (s(), await xn(0));
        }),
      (i[46] = s),
      (i[47] = fe),
      (i[48] = A),
      (i[49] = q));
  else q = i[49];
  const Pe = Math.min(X.length, 12);
  let E;
  if (
    i[50] !== Y ||
    i[51] !== j ||
    i[52] !== q ||
    i[53] !== Pe ||
    i[54] !== X ||
    i[55] !== C
  )
    ((E = e(ve, {
      options: X,
      onFocus: Y,
      onChange: j,
      onCancel: q,
      visibleOptionCount: Pe,
      defaultValue: C,
      defaultFocusValue: C,
    })),
      (i[50] = Y),
      (i[51] = j),
      (i[52] = q),
      (i[53] = Pe),
      (i[54] = X),
      (i[55] = C),
      (i[56] = E));
  else E = i[56];
  let J;
  if (i[57] !== h || i[58] !== B || i[59] !== E)
    ((J = r(o, { flexDirection: "column", gap: 1, children: [h, B, E] })),
      (i[57] = h),
      (i[58] = B),
      (i[59] = E),
      (i[60] = J));
  else J = i[60];
  let ut;
  if (i[61] === MEMO_CACHE_SENTINEL)
    ((ut = {
      oldStart: 1,
      newStart: 1,
      oldLines: 3,
      newLines: 3,
      lines: [
        " function greet() {",
        '-  console.log("Hello, World!");',
        '+  console.log("Hello, Claude!");',
        " }",
      ],
    }),
      (i[61] = ut));
  else ut = i[61];
  const He = Yt - 6;
  let M;
  if (i[62] !== He)
    ((M = e(DashedBorderBox, {
      paddingX: 0,
      children: e(StructuredDiff, {
        patch: ut,
        dim: !1,
        filePath: "demo.js",
        firstLine: null,
        width: He,
      }),
    })),
      (i[62] = He),
      (i[63] = M));
  else M = i[63];
  const $e =
    ye === "env"
      ? `Syntax highlighting disabled (via CLAUDE_CODE_SYNTAX_HIGHLIGHT=${a.CLAUDE_CODE_SYNTAX_HIGHLIGHT})`
      : G
        ? `Syntax highlighting disabled (${Te} to enable)`
        : R
          ? `Syntax theme: ${R.theme}${R.source ? ` (from ${R.source})` : ""} (${Te} to disable)`
          : `Syntax highlighting enabled (${Te} to disable)`;
  let O;
  if (i[64] !== $e)
    ((O = r(t, { dimColor: !0, children: [" ", $e] })),
      (i[64] = $e),
      (i[65] = O));
  else O = i[65];
  let Q;
  if (i[66] !== M || i[67] !== O)
    ((Q = r(o, { flexDirection: "column", width: "100%", children: [M, O] })),
      (i[66] = M),
      (i[67] = O),
      (i[68] = Q));
  else Q = i[68];
  let pt;
  if (i[69] !== J || i[70] !== Q)
    ((pt = r(o, { flexDirection: "column", gap: 1, children: [J, Q] })),
      (i[69] = J),
      (i[70] = Q),
      (i[71] = pt));
  else pt = i[71];
  let W = pt;
  if (!H) {
    let Z;
    if (i[72] !== W)
      ((Z = e(o, { flexDirection: "column", children: W })),
        (i[72] = W),
        (i[73] = Z));
    else Z = i[73];
    let K;
    if (i[74] !== m || i[75] !== u)
      ((K =
        u &&
        m &&
        e(o, { marginLeft: 3, children: e(t, { dimColor: !0, children: m }) })),
        (i[74] = m),
        (i[75] = u),
        (i[76] = K));
    else K = i[76];
    let ee;
    if (
      i[77] !== we ||
      i[78] !== I ||
      i[79] !== c ||
      i[80] !== pe ||
      i[81] !== l
    )
      ((ee =
        !pe &&
        e(o, {
          children: e(t, {
            dimColor: !0,
            italic: !0,
            children: I.pending
              ? r(N, { children: ["Press ", I.keyName, " again to exit"] })
              : r(DotSeparatedList, {
                  children: [
                    e(KeybindingHint, { chord: "enter", action: "select" }),
                    c && l && e(KeybindingHint, { chord: we, action: "edit" }),
                    e(KeybindingHint, { chord: "escape", action: "cancel" }),
                  ],
                }),
          }),
        })),
        (i[77] = we),
        (i[78] = I),
        (i[79] = c),
        (i[80] = pe),
        (i[81] = l),
        (i[82] = ee));
    else ee = i[82];
    let te;
    if (i[83] !== K || i[84] !== ee)
      ((te = r(o, { marginTop: 1, children: [K, ee] })),
        (i[83] = K),
        (i[84] = ee),
        (i[85] = te));
    else te = i[85];
    let bt;
    if (i[86] !== Z || i[87] !== te)
      ((bt = r(N, { children: [Z, te] })),
        (i[86] = Z),
        (i[87] = te),
        (i[88] = bt));
    else bt = i[88];
    return bt;
  }
  return W;
}
export { ThemePicker };
