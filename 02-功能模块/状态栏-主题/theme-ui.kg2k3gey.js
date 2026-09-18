// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 244 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { getSafeModeExitHint } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { getThemePalette, isValidThemeColorValue } from "./chunk-jz6b76hr.js";
import { useTheme, useThemeSetting, useCustomThemes } from "./chunk-w5jaj6kg.js";
import { useStorageV5Context } from "../../01-核心基础设施/核心工具-未归类/storage-v5-context.js";
import { isCustomizationDisabled } from "./chunk-dqyc6kge.js";
import { getThemesDir, customThemeRef, parseCustomThemeRef, saveCustomTheme, slugify } from "./custom-themes.js";
import { omitObjectKeys } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { FULL_BLOCK_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybinding } from "../键位绑定-Keybindings/keybinding-hooks.js";
import { DotSeparatedList } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { DimParenthetical, SearchablePickerDialog } from "../../03-入口与运行时/会话UI-REPL/会话UI-REPL.qs63rzfp.js";
import { hn } from "../../01-核心基础设施/UI组件-TUI/chunk-tp42fv8j.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../语法高亮-Markdown渲染/syntax-highlight-renderer.js";
import "../差异引擎-Diff/structured-diff.js";
import { ThemePicker } from "./theme-picker.js";
import "../../01-核心基础设施/UI组件-TUI/dashed-border-box.js";
import "../../01-核心基础设施/UI组件-TUI/empty-state-message.js";
import "../../01-核心基础设施/核心工具-未归类/use-settings.js";
import { Qr } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, V, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
F();
F();
import { sep } from "path";
function ir(Ir) {
  return Ir;
}
function mr(Vr) {
  return `No color named "${Vr}"`;
}
var ao = FULL_BLOCK_GLYPH + FULL_BLOCK_GLYPH;
function U(Mr) {
  let jr = _(2),
    { value: Ie } = Mr,
    Ro;
  if (jr[0] !== Ie)
    ((Ro = e(Text, { color: Ie, children: ao })), (jr[0] = Ie), (jr[1] = Ro));
  else Ro = jr[1];
  return Ro;
}
function Ee(Br) {
  let s = _(152),
    { initial: k, defaultBase: Ve, onDone: We, onCancel: ae } = Br,
    { storageV5: de } = useStorageV5Context(),
    [, Ze] = useTheme(),
    { customThemes: He, reloadCustomThemes: Se, setPreviewOverrides: u } = useCustomThemes(),
    eo = k !== void 0 && k.source !== "user",
    [Lo, Ar] = d(k && !eo ? "colors" : "name"),
    [l, wo] = d(k?.name ?? ""),
    [oo, Fr] = d(l.length),
    [f, Ur] = d(eo ? "" : (k?.slug ?? "")),
    xo;
  if (s[0] !== Ve || s[1] !== k?.base)
    ((xo = () => k?.base ?? Ve), (s[0] = Ve), (s[1] = k?.base), (s[2] = xo));
  else xo = s[2];
  let [h] = d(xo),
    Mo;
  if (s[3] !== h) ((Mo = getThemePalette(h)), (s[3] = h), (s[4] = Mo));
  else Mo = s[4];
  let v = Mo,
    jo;
  if (s[5] !== k?.overrides)
    ((jo = k?.overrides ?? {}), (s[5] = k?.overrides), (s[6] = jo));
  else jo = s[6];
  let [m, qr] = d(jo),
    Bo;
  if (s[7] !== v) ((Bo = Object.keys(v).sort()), (s[7] = v), (s[8] = Bo));
  else Bo = s[8];
  let Ae = Bo,
    [fe, Jr] = d(""),
    [a, ro] = d(null),
    [O, Ao] = d(""),
    [so, Fo] = d(0),
    Uo;
  if (s[9] !== Ae || s[10] !== fe) {
    let Qo = fe.toLowerCase();
    Uo = Qo ? Ae.filter((_r) => _r.toLowerCase().includes(Qo)) : Ae;
    ((s[9] = Ae), (s[10] = fe), (s[11] = Uo));
  } else Uo = s[11];
  let to = Uo,
    qo;
  if (s[12] !== He || s[13] !== l || s[14] !== f)
    ((qo = f || uo(l, He)),
      (s[12] = He),
      (s[13] = l),
      (s[14] = f),
      (s[15] = qo));
  else qo = s[15];
  let z = qo,
    Jo;
  if (s[16] !== m) ((Jo = Object.keys(m)), (s[16] = m), (s[17] = Jo));
  else Jo = s[17];
  let ye = Jo.length,
    Xo,
    _o;
  if (s[18] !== u)
    ((Xo = () => () => u(null)),
      (_o = [u]),
      (s[18] = u),
      (s[19] = Xo),
      (s[20] = _o));
  else ((Xo = s[19]), (_o = s[20]));
  E(Xo, _o);
  let zo;
  if (s[21] !== m || s[22] !== v)
    ((zo = function R(Ko) {
      return m[Ko] ?? v[Ko];
    }),
      (s[21] = m),
      (s[22] = v),
      (s[23] = zo));
  else zo = s[23];
  let R = zo,
    Yo;
  if (s[24] !== h || s[25] !== l || s[26] !== u || s[27] !== de)
    ((Yo = function S(Go, no) {
      (qr(no),
        u(no),
        saveCustomTheme(
          { slug: Go, name: l.trim(), base: h, overrides: no, source: "user" },
          de,
        ).catch((zr) => {
          logForDebugging(`[theme] save ${Go} failed: ${zr}`, { level: "warn" });
        }));
    }),
      (s[24] = h),
      (s[25] = l),
      (s[26] = u),
      (s[27] = de),
      (s[28] = Yo));
  else Yo = s[28];
  let S = Yo,
    Io;
  if (s[29] !== R)
    ((Io = function Te(Vo) {
      let Wo = R(Vo);
      (Ao(Wo), Fo(Wo.length), ro(Vo));
    }),
      (s[29] = R),
      (s[30] = Io));
  else Io = s[30];
  let Te = Io,
    Zo;
  if (
    s[31] !== S ||
    s[32] !== O ||
    s[33] !== a ||
    s[34] !== m ||
    s[35] !== v ||
    s[36] !== f
  )
    ((Zo = function be() {
      if (a === null || !isValidThemeColorValue(O)) {
        return;
      }
      (S(f, O === v[a] ? omitObjectKeys(m, a) : { ...m, [a]: O }), ro(null));
    }),
      (s[31] = S),
      (s[32] = O),
      (s[33] = a),
      (s[34] = m),
      (s[35] = v),
      (s[36] = f),
      (s[37] = Zo));
  else Zo = s[37];
  let be = Zo,
    Ho;
  if (s[38] !== m || s[39] !== u)
    ((Ho = function ee() {
      (u(m), ro(null));
    }),
      (s[38] = m),
      (s[39] = u),
      (s[40] = Ho));
  else Ho = s[40];
  let ee = Ho,
    So;
  if (s[41] !== S || s[42] !== m || s[43] !== f)
    ((So = function $e(er) {
      if (!(er in m)) {
        return;
      }
      S(f, omitObjectKeys(m, er));
    }),
      (s[41] = S),
      (s[42] = m),
      (s[43] = f),
      (s[44] = So));
  else So = s[44];
  let $e = So,
    or;
  if (s[45] !== a || s[46] !== m || s[47] !== u)
    ((or = function De(io) {
      if ((Ao(io), a && isValidThemeColorValue(io))) u({ ...m, [a]: io });
    }),
      (s[45] = a),
      (s[46] = m),
      (s[47] = u),
      (s[48] = or));
  else or = s[48];
  let De = or,
    rr;
  if (s[49] !== ee || s[50] !== a || s[51] !== ae)
    ((rr = () => {
      if (a !== null) ee();
      else ae();
    }),
      (s[49] = ee),
      (s[50] = a),
      (s[51] = ae),
      (s[52] = rr));
  else rr = s[52];
  const mo = Lo === "name" || a !== null;
  let sr;
  if (s[53] !== mo)
    ((sr = { context: "Settings", isActive: mo }), (s[53] = mo), (s[54] = sr));
  else sr = s[54];
  if ((useKeybinding("confirm:no", rr, sr), Lo === "name")) {
    let K;
    if (s[55] !== l) ((K = l.trim()), (s[55] = l), (s[56] = K));
    else K = s[56];
    let ke = K;
    let pe = ke.length > 0;
    const P = eo && k ? `Fork ${k.name} to your themes` : "New custom theme";
    let N;
    if (s[57] !== P)
      ((N = e(Text, { bold: !0, color: "permission", children: P })),
        (s[57] = P),
        (s[58] = N));
    else N = s[58];
    let L;
    if (s[59] === MEMO_CACHE_SENTINEL) ((L = e(Text, { children: "Name: " })), (s[59] = L));
    else L = s[59];
    let w;
    if (
      s[60] !== h ||
      s[61] !== z ||
      s[62] !== m ||
      s[63] !== Se ||
      s[64] !== Ze ||
      s[65] !== de ||
      s[66] !== ke ||
      s[67] !== pe
    )
      ((w = () => {
        if (!pe) {
          return;
        }
        (Ur(z),
          wo(ke),
          Ar("colors"),
          saveCustomTheme({ slug: z, name: ke, base: h, overrides: m, source: "user" }, de)
            .then(() => Se())
            .then(() => {
              Ze(customThemeRef(z));
            })
            .catch((Kr) => {
              logForDebugging(`[theme] save ${z} failed: ${Kr}`, { level: "warn" });
            }));
      }),
        (s[60] = h),
        (s[61] = z),
        (s[62] = m),
        (s[63] = Se),
        (s[64] = Ze),
        (s[65] = de),
        (s[66] = ke),
        (s[67] = pe),
        (s[68] = w));
    else w = s[68];
    let y;
    if (s[69] !== l || s[70] !== oo || s[71] !== ae || s[72] !== w)
      ((y = r(Box, {
        children: [
          L,
          e(hn, {
            value: l,
            onChange: wo,
            onSubmit: w,
            onExit: ae,
            placeholder: "my-theme",
            columns: 40,
            cursorOffset: oo,
            onChangeCursorOffset: Fr,
            disableCursorMovementForUpDownKeys: !0,
            disableEscapeDoublePress: !0,
            focus: !0,
            showCursor: !0,
          }),
        ],
      })),
        (s[69] = l),
        (s[70] = oo),
        (s[71] = ae),
        (s[72] = w),
        (s[73] = y));
    else y = s[73];
    let A;
    if (s[74] === MEMO_CACHE_SENTINEL) ((A = getThemesDir()), (s[74] = A));
    else A = s[74];
    let oe;
    if (s[75] !== h || s[76] !== z)
      ((oe = r(Text, {
        dimColor: !0,
        children: ["based on ", h, " \xB7 saved to ", A, sep, z, ".json"],
      })),
        (s[75] = h),
        (s[76] = z),
        (s[77] = oe));
    else oe = s[77];
    let Y;
    if (s[78] !== y || s[79] !== oe)
      ((Y = r(Box, { flexDirection: "column", children: [y, oe] })),
        (s[78] = y),
        (s[79] = oe),
        (s[80] = Y));
    else Y = s[80];
    let G;
    if (s[81] !== pe)
      ((G = pe && e(KeybindingHint, { chord: "enter", action: "continue" })),
        (s[81] = pe),
        (s[82] = G));
    else G = s[82];
    let Pe;
    if (s[83] === MEMO_CACHE_SENTINEL)
      ((Pe = e(KeybindingHint, { chord: "escape", action: "cancel" })), (s[83] = Pe));
    else Pe = s[83];
    let I;
    if (s[84] !== G)
      ((I = e(Text, { dimColor: !0, children: r(DotSeparatedList, { children: [G, Pe] }) })),
        (s[84] = G),
        (s[85] = I));
    else I = s[85];
    let ie;
    if (s[86] !== N || s[87] !== Y || s[88] !== I)
      ((ie = e(Qr, {
        color: "permission",
        children: r(Box, {
          flexDirection: "column",
          gap: 1,
          children: [N, Y, I],
        }),
      })),
        (s[86] = N),
        (s[87] = Y),
        (s[88] = I),
        (s[89] = ie));
    else ie = s[89];
    return ie;
  }
  if (a !== null) {
    let K;
    if (s[90] !== O) ((K = isValidThemeColorValue(O)), (s[90] = O), (s[91] = K));
    else K = s[91];
    let Fe = K;
    let P;
    if (s[92] !== l)
      ((P = e(Text, { bold: !0, color: "permission", children: l })),
        (s[92] = l),
        (s[93] = P));
    else P = s[93];
    const N = Fe ? O : v[a];
    let L;
    if (s[94] !== N) ((L = e(U, { value: N })), (s[94] = N), (s[95] = L));
    else L = s[95];
    let w;
    if (s[96] === MEMO_CACHE_SENTINEL) ((w = e(Text, { children: " " })), (s[96] = w));
    else w = s[96];
    let y;
    if (s[97] !== a)
      ((y = e(Text, { bold: !0, children: a })), (s[97] = a), (s[98] = y));
    else y = s[98];
    let A;
    if (s[99] !== L || s[100] !== y)
      ((A = r(Box, { children: [L, w, y] })),
        (s[99] = L),
        (s[100] = y),
        (s[101] = A));
    else A = s[101];
    const oe = v[a];
    let Y;
    if (s[102] !== oe)
      ((Y = r(Text, { dimColor: !0, children: ["preset: ", oe] })),
        (s[102] = oe),
        (s[103] = Y));
    else Y = s[103];
    let G;
    if (s[104] !== A || s[105] !== Y)
      ((G = r(Box, { flexDirection: "column", children: [A, Y] })),
        (s[104] = A),
        (s[105] = Y),
        (s[106] = G));
    else G = s[106];
    let Pe;
    if (s[107] === MEMO_CACHE_SENTINEL) ((Pe = e(Text, { children: "Value: " })), (s[107] = Pe));
    else Pe = s[107];
    let I;
    if (
      s[108] !== ee ||
      s[109] !== be ||
      s[110] !== so ||
      s[111] !== O ||
      s[112] !== De
    )
      ((I = r(Box, {
        children: [
          Pe,
          e(hn, {
            value: O,
            onChange: De,
            onSubmit: be,
            onExit: ee,
            placeholder: "rgb(r,g,b) \xB7 #rrggbb \xB7 ansi:red",
            columns: 40,
            cursorOffset: so,
            onChangeCursorOffset: Fo,
            disableCursorMovementForUpDownKeys: !0,
            disableEscapeDoublePress: !0,
            focus: !0,
            showCursor: !0,
          }),
        ],
      })),
        (s[108] = ee),
        (s[109] = be),
        (s[110] = so),
        (s[111] = O),
        (s[112] = De),
        (s[113] = I));
    else I = s[113];
    let ie;
    if (s[114] !== Fe)
      ((ie = Fe
        ? r(DotSeparatedList, {
            children: [
              e(KeybindingHint, { chord: "enter", action: "save" }),
              e(KeybindingHint, { chord: "escape", action: "cancel" }),
            ],
          })
        : "Accepts rgb(r,g,b), #rrggbb, ansi256(n), or ansi:name"),
        (s[114] = Fe),
        (s[115] = ie));
    else ie = s[115];
    let Ue;
    if (s[116] !== ie)
      ((Ue = e(Text, { dimColor: !0, children: ie })),
        (s[116] = ie),
        (s[117] = Ue));
    else Ue = s[117];
    let tr;
    if (s[118] !== P || s[119] !== G || s[120] !== I || s[121] !== Ue)
      ((tr = e(Qr, {
        color: "permission",
        children: r(Box, {
          flexDirection: "column",
          gap: 1,
          children: [P, G, I, Ue],
        }),
      })),
        (s[118] = P),
        (s[119] = G),
        (s[120] = I),
        (s[121] = Ue),
        (s[122] = tr));
    else tr = s[122];
    return tr;
  }
  const K = `${l} \xB7 based on ${h}`;
  let P;
  if (s[123] !== $e)
    ((P = {
      action: "reset",
      handler: (nr) => {
        if (nr) $e(nr);
      },
    }),
      (s[123] = $e),
      (s[124] = P));
  else P = s[124];
  let N;
  if (
    s[125] !== h ||
    s[126] !== l ||
    s[127] !== We ||
    s[128] !== m ||
    s[129] !== u ||
    s[130] !== f
  )
    ((N = () => {
      (u(null),
        We({ slug: f, name: l, base: h, overrides: m, source: "user" }));
    }),
      (s[125] = h),
      (s[126] = l),
      (s[127] = We),
      (s[128] = m),
      (s[129] = u),
      (s[130] = f),
      (s[131] = N));
  else N = s[131];
  let L;
  if (s[132] !== ye || s[133] !== f)
    ((L =
      ye > 0
        ? `${ye} ${pluralize(ye, "color")} customized \xB7 ${f}.json`
        : `editing ${f}.json`),
      (s[132] = ye),
      (s[133] = f),
      (s[134] = L));
  else L = s[134];
  let w;
  if (s[135] !== m || s[136] !== R)
    ((w = (co, Yr) => {
      let Gr = m[co] !== void 0;
      return r(Box, {
        children: [
          e(U, { value: R(co) }),
          e(Text, { children: " " }),
          e(Text, { color: Yr ? "suggestion" : void 0, children: co }),
          e(DimParenthetical, { when: Gr, children: "custom" }),
        ],
      });
    }),
      (s[135] = m),
      (s[136] = R),
      (s[137] = w));
  else w = s[137];
  let y;
  if (s[138] !== m || s[139] !== v || s[140] !== R)
    ((y = (Oe) =>
      r(Box, {
        flexDirection: "column",
        children: [
          r(Text, { children: ["current: ", e(U, { value: R(Oe) }), " ", R(Oe)] }),
          m[Oe] !== void 0 &&
            r(Text, {
              dimColor: !0,
              children: ["preset: ", e(U, { value: v[Oe] }), " ", v[Oe]],
            }),
        ],
      })),
      (s[138] = m),
      (s[139] = v),
      (s[140] = R),
      (s[141] = y));
  else y = s[141];
  let A;
  if (
    s[142] !== to ||
    s[143] !== fe ||
    s[144] !== Te ||
    s[145] !== K ||
    s[146] !== P ||
    s[147] !== N ||
    s[148] !== L ||
    s[149] !== w ||
    s[150] !== y
  )
    ((A = e(SearchablePickerDialog, {
      title: K,
      placeholder: "Filter color tokens\u2026",
      items: to,
      getKey: ir,
      initialQuery: fe,
      onQueryChange: Jr,
      onSelect: Te,
      onTab: P,
      onCancel: N,
      selectAction: "edit",
      cancelAction: "done",
      matchLabel: L,
      renderItem: w,
      renderPreview: y,
      emptyMessage: mr,
    })),
      (s[142] = to),
      (s[143] = fe),
      (s[144] = Te),
      (s[145] = K),
      (s[146] = P),
      (s[147] = N),
      (s[148] = L),
      (s[149] = w),
      (s[150] = y),
      (s[151] = A));
  else A = s[151];
  return A;
}
function uo(c, H) {
  let Q = slugify(c);
  if (!H.some((j) => j.slug === Q)) return Q;
  for (let j = 2; ; j++) {
    let q = `${Q}-${j}`;
    if (!H.some((re) => re.slug === q)) return q;
  }
}
function go(ls) {
  let M = _(25),
    { onDone: W } = ls,
    [fo, he] = useTheme(),
    { customThemes: po } = useCustomThemes(),
    cr;
  if (M[0] === MEMO_CACHE_SENTINEL) ((cr = { kind: "picker" }), (M[0] = cr));
  else cr = M[0];
  let [Qe, lr] = d(cr),
    ar;
  if (M[1] === MEMO_CACHE_SENTINEL) ((ar = isCustomizationDisabled("themes")), (M[1] = ar));
  else ar = M[1];
  let dr = ar,
    ho = useThemeSetting(),
    ur;
  if (M[2] !== ho) ((ur = parseCustomThemeRef(ho)), (M[2] = ho), (M[3] = ur));
  else ur = M[3];
  let qe = ur;
  if (Qe.kind === "editor") {
    let Z;
    if (M[4] !== W || M[5] !== he)
      ((Z = (fr) => {
        (he(customThemeRef(fr.slug)), W(`Using custom theme "${fr.name}"`));
      }),
        (M[4] = W),
        (M[5] = he),
        (M[6] = Z));
    else Z = M[6];
    let Re;
    if (M[7] === MEMO_CACHE_SENTINEL) ((Re = () => lr({ kind: "picker" })), (M[7] = Re));
    else Re = M[7];
    let me;
    if (M[8] !== fo || M[9] !== Qe.initial || M[10] !== Z)
      ((me = e(Ee, {
        initial: Qe.initial,
        defaultBase: fo,
        onDone: Z,
        onCancel: Re,
      })),
        (M[8] = fo),
        (M[9] = Qe.initial),
        (M[10] = Z),
        (M[11] = me));
    else me = M[11];
    return me;
  }
  let Z;
  if (M[12] !== po || M[13] !== W || M[14] !== he)
    ((Z = (Le) => {
      (he(Le),
        W(
          parseCustomThemeRef(Le)
            ? `Using custom theme "${po.find((as) => customThemeRef(as.slug) === Le)?.name ?? Le}"`
            : `Theme set to ${Le}`,
        ));
    }),
      (M[12] = po),
      (M[13] = W),
      (M[14] = he),
      (M[15] = Z));
  else Z = M[15];
  let Re;
  if (M[16] === MEMO_CACHE_SENTINEL)
    ((Re = dr ? void 0 : (ds) => lr({ kind: "editor", initial: ds })),
      (M[16] = Re));
  else Re = M[16];
  let me;
  if (M[17] !== qe)
    ((me = dr
      ? `Custom themes are disabled in safe mode \u2014 ${getSafeModeExitHint()} to create or edit them${qe ? `. Your saved theme "${qe}" is a custom theme; selecting a preset here replaces it` : ""}`
      : ""),
      (M[17] = qe),
      (M[18] = me));
  else me = M[18];
  let Je;
  if (M[19] !== W)
    ((Je = () => {
      W("Theme picker dismissed", { display: "system" });
    }),
      (M[19] = W),
      (M[20] = Je));
  else Je = M[20];
  let pr;
  if (M[21] !== Z || M[22] !== me || M[23] !== Je)
    ((pr = e(Qr, {
      color: "permission",
      children: e(ThemePicker, {
        onThemeSelect: Z,
        onCustomTheme: Re,
        helpText: me,
        onCancel: Je,
        skipExitHandling: !0,
      }),
    })),
      (M[21] = Z),
      (M[22] = me),
      (M[23] = Je),
      (M[24] = pr));
  else pr = M[24];
  return pr;
}
var ms = async (c, H) => e(go, { onDone: c });
export { ms as call };
