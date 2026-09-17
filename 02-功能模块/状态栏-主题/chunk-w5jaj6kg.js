// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getThemePalette, mergeThemeOverrides } from "./chunk-jz6b76hr.js";
import { m4 } from "../../00-第三方库/_未识别/chunk-hm8z9h7j.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { getThemeStore, getCachedCustomThemes, parseCustomThemeRef, loadCustomThemes, watchCustomThemes } from "./custom-themes.js";
import { resolveSetting, saveUserIntentSetting } from "../上下文压缩-Compact/resolve-user-intent-setting.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { resolveSystemTheme, subscribeSystemThemeChange } from "../../01-核心基础设施/共享小工具-未细化/theme-resolution.js";
import { Qt, re, De, E, V, d, At, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
var be = () => De(m4),
  useStdin = be;
F();
var B = "dark",
  l = Qt({
    themeSetting: B,
    setThemeSetting: () => {},
    setPreviewTheme: () => {},
    savePreview: () => {},
    cancelPreview: () => {},
    currentTheme: B,
    resolvedTheme: getThemePalette(B),
    activeThemeOverrides: void 0,
    customThemes: [],
    activeCustomTheme: void 0,
    reloadCustomThemes: () => Promise.resolve(),
    setPreviewOverrides: () => {},
  });
function getStoredThemeSetting() {
  return resolveSetting("theme", "dark").value;
}
function ThemeProvider(Pt) {
  let r = _(52),
    { children: ie, initialState: U, onThemeSave: G } = Pt,
    { storageV5: y } = useStorageV5Context(),
    Ce;
  if (r[0] !== G || r[1] !== y)
    ((Ce = (Ie) => (G ? G(Ie) : saveUserIntentSetting("theme", Ie, y))),
      (r[0] = G),
      (r[1] = y),
      (r[2] = Ce));
  else Ce = r[2];
  let P = Ce,
    [g, Le] = d(U ?? getStoredThemeSetting),
    [s, q] = d(null),
    [Rt, St] = d(null),
    [oe, xt] = d(getCachedCustomThemes),
    Oe;
  if (r[3] === MEMO_CACHE_SENTINEL) ((Oe = getThemeStore()), (r[3] = Oe));
  else Oe = r[3];
  let Ne = Oe.pluginThemes,
    le = At(Ne.subscribe, Ne.getState),
    Ae;
  if (r[4] !== le || r[5] !== oe)
    ((Ae = [...oe, ...le]), (r[4] = le), (r[5] = oe), (r[6] = Ae));
  else Ae = r[6];
  let R = Ae,
    He;
  if (r[7] !== U || r[8] !== g)
    ((He = () => ((U ?? g) === "auto" ? resolveSystemTheme() : "dark")),
      (r[7] = U),
      (r[8] = g),
      (r[9] = He));
  else He = r[9];
  let [kt, I] = d(He),
    m = s ?? g,
    Ee;
  if (r[10] !== y) ((Ee = () => loadCustomThemes(y).then(xt)), (r[10] = y), (r[11] = Ee));
  else Ee = r[11];
  let h = Ee,
    Me,
    Ve;
  if (r[12] !== h)
    ((Me = () => (h(), watchCustomThemes(() => void h()))),
      (Ve = [h]),
      (r[12] = h),
      (r[13] = Me),
      (r[14] = Ve));
  else ((Me = r[13]), (Ve = r[14]));
  E(Me, Ve);
  let { internal_querier: L } = useStdin(),
    Ye,
    Ue;
  if (r[15] !== m)
    ((Ye = () => {
      if (m !== "auto") {
        return;
      }
      return (I(resolveSystemTheme()), subscribeSystemThemeChange(() => I(resolveSystemTheme())));
    }),
      (Ue = [m]),
      (r[15] = m),
      (r[16] = Ye),
      (r[17] = Ue));
  else ((Ye = r[16]), (Ue = r[17]));
  E(Ye, Ue);
  let Ge, qe;
  if (r[18] !== m || r[19] !== L)
    ((Ge = () => {
      if (m !== "auto" || !L) {
        return;
      }
      let Fe;
      let Xe = !1;
      return (
        import("./watchSystemTheme.qkv4sk2f.js").then((D) => {
          let { watchSystemTheme: Kt } = D;
          if (Xe) {
            return;
          }
          Fe = Kt(L, I);
        }),
        () => {
          ((Xe = !0), Fe?.());
        }
      );
    }),
      (qe = [m, L]),
      (r[18] = m),
      (r[19] = L),
      (r[20] = Ge),
      (r[21] = qe));
  else ((Ge = r[20]), (qe = r[21]));
  E(Ge, qe);
  let D;
  if (r[22] !== m) ((D = parseCustomThemeRef(m)), (r[22] = m), (r[23] = D));
  else D = r[23];
  let O = D,
    Ze;
  if (r[24] !== O || r[25] !== R)
    ((Ze = O ? R.find((wt) => wt.slug === O) : void 0),
      (r[24] = O),
      (r[25] = R),
      (r[26] = Ze));
  else Ze = r[26];
  let S = Ze,
    x = S ? S.base : m === "auto" ? kt : O ? "dark" : m,
    k = Rt ?? S?.overrides,
    ze;
  if (r[27] !== k || r[28] !== x)
    ((ze = mergeThemeOverrides(getThemePalette(x), k)), (r[27] = k), (r[28] = x), (r[29] = ze));
  else ze = r[29];
  let me = ze,
    X;
  if (r[30] !== P)
    ((X = (de) => {
      if ((Le(de), q(null), de === "auto")) I(resolveSystemTheme());
      P(de);
    }),
      (r[30] = P),
      (r[31] = X));
  else X = r[31];
  let Be;
  if (r[32] === MEMO_CACHE_SENTINEL)
    ((Be = (Je) => {
      if ((q(Je), Je === "auto")) I(resolveSystemTheme());
    }),
      (r[32] = Be));
  else Be = r[32];
  let Z;
  if (r[33] !== P || r[34] !== s)
    ((Z = () => {
      if (s !== null) (Le(s), q(null), P(s));
    }),
      (r[33] = P),
      (r[34] = s),
      (r[35] = Z));
  else Z = r[35];
  let z;
  if (r[36] !== s)
    ((z = () => {
      if (s !== null) q(null);
    }),
      (r[36] = s),
      (r[37] = z));
  else z = r[37];
  let Qe;
  if (
    r[38] !== S ||
    r[39] !== k ||
    r[40] !== x ||
    r[41] !== R ||
    r[42] !== h ||
    r[43] !== me ||
    r[44] !== X ||
    r[45] !== Z ||
    r[46] !== z ||
    r[47] !== g
  )
    ((Qe = {
      themeSetting: g,
      setThemeSetting: X,
      setPreviewTheme: Be,
      savePreview: Z,
      cancelPreview: z,
      currentTheme: x,
      resolvedTheme: me,
      activeThemeOverrides: k,
      customThemes: R,
      activeCustomTheme: S,
      reloadCustomThemes: h,
      setPreviewOverrides: St,
    }),
      (r[38] = S),
      (r[39] = k),
      (r[40] = x),
      (r[41] = R),
      (r[42] = h),
      (r[43] = me),
      (r[44] = X),
      (r[45] = Z),
      (r[46] = z),
      (r[47] = g),
      (r[48] = Qe));
  else Qe = r[48];
  let ue = Qe,
    We;
  if (r[49] !== ie || r[50] !== ue)
    ((We = e(l.Provider, { value: ue, children: ie })),
      (r[49] = ie),
      (r[50] = ue),
      (r[51] = We));
  else We = r[51];
  return We;
}
function useTheme() {
  let bt = _(3),
    { currentTheme: se, setThemeSetting: ce } = De(l),
    $e;
  if (bt[0] !== se || bt[1] !== ce)
    (($e = [se, ce]), (bt[0] = se), (bt[1] = ce), (bt[2] = $e));
  else $e = bt[2];
  return $e;
}
function useThemeSetting() {
  return De(l).themeSetting;
}
function usePreviewTheme() {
  let Ct = _(4),
    { setPreviewTheme: he, savePreview: ae, cancelPreview: ge } = De(l),
    je;
  if (Ct[0] !== ge || Ct[1] !== ae || Ct[2] !== he)
    ((je = { setPreviewTheme: he, savePreview: ae, cancelPreview: ge }),
      (Ct[0] = ge),
      (Ct[1] = ae),
      (Ct[2] = he),
      (Ct[3] = je));
  else je = Ct[3];
  return je;
}
function useResolvedTheme() {
  return De(l).resolvedTheme;
}
function useActiveThemeOverrides() {
  return De(l).activeThemeOverrides;
}
function useCustomThemes() {
  let It = _(5),
    {
      customThemes: pe,
      activeCustomTheme: ve,
      reloadCustomThemes: Te,
      setPreviewOverrides: fe,
    } = De(l),
    et;
  if (It[0] !== ve || It[1] !== pe || It[2] !== Te || It[3] !== fe)
    ((et = {
      customThemes: pe,
      activeCustomTheme: ve,
      reloadCustomThemes: Te,
      setPreviewOverrides: fe,
    }),
      (It[0] = ve),
      (It[1] = pe),
      (It[2] = Te),
      (It[3] = fe),
      (It[4] = et));
  else et = It[4];
  return et;
}
F();
var ot = 10,
  lt = { ring: [], mode: { type: "idle" } };
function mt(t, n) {
  switch (n.type) {
    case "kill": {
      if (n.text.length === 0)
        return t.mode.type === "idle" ? t : { ...t, mode: { type: "idle" } };
      return {
        ring:
          t.mode.type === "killing" && t.ring.length > 0
            ? [
                n.direction === "prepend"
                  ? n.text + t.ring[0]
                  : t.ring[0] + n.text,
                ...t.ring.slice(1),
              ]
            : [n.text, ...t.ring].slice(0, ot),
        mode: { type: "killing" },
      };
    }
    case "yank":
      return {
        ...t,
        mode: { type: "yanked", start: n.start, length: n.length, index: 0 },
      };
    case "yankPop": {
      if (t.mode.type !== "yanked" || t.ring.length <= 1) return t;
      let i = (t.mode.index + 1) % t.ring.length;
      return { ...t, mode: { ...t.mode, index: i } };
    }
    case "updateYankLength":
      if (t.mode.type !== "yanked") return t;
      return { ...t, mode: { ...t.mode, length: n.length } };
    case "interrupt":
      if (t.mode.type === "idle") return t;
      return { ...t, mode: { type: "idle" } };
  }
}
function getCurrentKillRingText(t) {
  return t.ring[0] ?? "";
}
function getNextKillRingEntry(t) {
  if (t.mode.type !== "yanked" || t.ring.length <= 1) return null;
  let n = (t.mode.index + 1) % t.ring.length,
    { start: i, length: u } = t.mode;
  return { text: t.ring[n] ?? "", start: i, length: u };
}
function createKillRing() {
  let t = lt;
  return {
    get state() {
      return t;
    },
    dispatch(n) {
      t = mt(t, n);
    },
  };
}
var N = Qt(null);
function KillRingProvider(Et) {
  let tt = _(5),
    { handle: J, children: ye } = Et,
    nt;
  if (tt[0] !== J) ((nt = () => J ?? createKillRing()), (tt[0] = J), (tt[1] = nt));
  else nt = tt[1];
  let [Mt] = d(nt);
  const Pe = J ?? Mt;
  let rt;
  if (tt[2] !== ye || tt[3] !== Pe)
    ((rt = e(N.Provider, { value: Pe, children: ye })),
      (tt[2] = ye),
      (tt[3] = Pe),
      (tt[4] = rt));
  else rt = tt[4];
  return rt;
}
function useKillRing() {
  let it = De(N);
  if (!it) {
    throw ReferenceError(
      "useKillRing cannot be called outside of a <KillRingProvider /> (mounted around every Ink root by src/ink.ts)",
    );
  }
  return it;
}
export { useStdin, getStoredThemeSetting, ThemeProvider, useTheme, useThemeSetting, usePreviewTheme, useResolvedTheme, useActiveThemeOverrides, useCustomThemes, getCurrentKillRingText, getNextKillRingEntry, createKillRing, KillRingProvider, useKillRing };
