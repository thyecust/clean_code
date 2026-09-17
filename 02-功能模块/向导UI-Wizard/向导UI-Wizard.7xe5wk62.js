// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Box } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { useGlobalExitKeybinding } from "../../01-核心基础设施/共享小工具-未细化/exit-keybinding-hooks.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { InputGuide } from "../../01-核心基础设施/共享小工具-未细化/input-guide.js";
import { ActionKeybindingHint } from "../../01-核心基础设施/共享小工具-未细化/action-keybinding-hint.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, re, De, E, V, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function Bt(Xt) {
  return Xt + 1;
}
function St(Yt) {
  return Yt.slice(0, -1);
}
function Dt(Zt) {
  return Zt - 1;
}
var R = Qt(null);
function WizardProvider(At) {
  let s = _(39),
    {
      steps: c,
      stepProps: tt,
      initialData: S,
      onComplete: j,
      onCancel: f,
      children: et,
      title: ot,
      showStepCounter: zt,
    } = At,
    Wt;
  if (s[0] !== S) ((Wt = S === void 0 ? {} : S), (s[0] = S), (s[1] = Wt));
  else Wt = s[1];
  let Ht = Wt,
    rt = zt === void 0 ? !0 : zt,
    [i, G] = d(0),
    [g, vt] = d(Ht),
    [b, Lt] = d(!1),
    Tt;
  if (s[2] === MEMO_CACHE_SENTINEL) ((Tt = []), (s[2] = Tt));
  else Tt = s[2];
  let [h, k] = d(Tt);
  useGlobalExitKeybinding();
  let Ct, Pt;
  if (s[3] !== b || s[4] !== j || s[5] !== g)
    ((Ct = () => {
      if (b) (k([]), j(g));
    }),
      (Pt = [b, g, j]),
      (s[3] = b),
      (s[4] = j),
      (s[5] = g),
      (s[6] = Ct),
      (s[7] = Pt));
  else ((Ct = s[6]), (Pt = s[7]));
  E(Ct, Pt);
  let yt;
  if (s[8] !== i || s[9] !== h || s[10] !== c.length)
    ((yt = () => {
      if (i < c.length - 1) {
        if (h.length > 0) k((Ot) => [...Ot, i]);
        G(Bt);
      } else Lt(!0);
    }),
      (s[8] = i),
      (s[9] = h),
      (s[10] = c.length),
      (s[11] = yt));
  else yt = s[11];
  let it = yt,
    bt;
  if (s[12] !== i || s[13] !== h || s[14] !== f)
    ((bt = () => {
      if (h.length > 0) {
        let kt = h.at(-1);
        if (kt !== void 0) (k(St), G(kt));
      } else if (i > 0) G(Dt);
      else if (f) f();
    }),
      (s[12] = i),
      (s[13] = h),
      (s[14] = f),
      (s[15] = bt));
  else bt = s[15];
  let nt = bt,
    Rt;
  if (s[16] !== i || s[17] !== c.length)
    ((Rt = (at) => {
      if (at >= 0 && at < c.length) (k((qt) => [...qt, i]), G(at));
    }),
      (s[16] = i),
      (s[17] = c.length),
      (s[18] = Rt));
  else Rt = s[18];
  let st = Rt,
    Nt;
  if (s[19] !== f)
    ((Nt = () => {
      if ((k([]), f)) f();
    }),
      (s[19] = f),
      (s[20] = Nt));
  else Nt = s[20];
  let ct = Nt,
    wt;
  if (s[21] === MEMO_CACHE_SENTINEL)
    ((wt = (Ft) => {
      vt((Jt) => ({ ...Jt, ...Ft }));
    }),
      (s[21] = wt));
  else wt = s[21];
  let Ut = wt,
    Vt;
  if (
    s[22] !== ct ||
    s[23] !== i ||
    s[24] !== nt ||
    s[25] !== it ||
    s[26] !== st ||
    s[27] !== rt ||
    s[28] !== c.length ||
    s[29] !== ot ||
    s[30] !== g
  )
    ((Vt = {
      currentStepIndex: i,
      totalSteps: c.length,
      wizardData: g,
      setWizardData: vt,
      updateWizardData: Ut,
      goNext: it,
      goBack: nt,
      goToStep: st,
      cancel: ct,
      title: ot,
      showStepCounter: rt,
    }),
      (s[22] = ct),
      (s[23] = i),
      (s[24] = nt),
      (s[25] = it),
      (s[26] = st),
      (s[27] = rt),
      (s[28] = c.length),
      (s[29] = ot),
      (s[30] = g),
      (s[31] = Vt));
  else Vt = s[31];
  let lt = Vt,
    M = c[i];
  if (!M || b) {
    return null;
  }
  let A;
  if (s[32] !== M || s[33] !== et || s[34] !== tt)
    ((A = et || e(M, { ...tt })),
      (s[32] = M),
      (s[33] = et),
      (s[34] = tt),
      (s[35] = A));
  else A = s[35];
  let It;
  if (s[36] !== lt || s[37] !== A)
    ((It = e(R.Provider, { value: lt, children: A })),
      (s[36] = lt),
      (s[37] = A),
      (s[38] = It));
  else It = s[38];
  return It;
}
F();
function useWizard() {
  let n = De(R);
  if (!n) throw Error("useWizard must be used within a WizardProvider");
  return n;
}
function WizardStepFrame(ze) {
  let L = _(14),
    { title: We, color: $t, children: dt, subtitle: pt, footerText: ft } = ze,
    ut = $t === void 0 ? "suggestion" : $t,
    {
      currentStepIndex: H,
      totalSteps: ve,
      title: Te,
      showStepCounter: Ce,
      goBack: mt,
    } = useWizard(),
    Pe = We || Te || "Wizard",
    ye = Ce !== !1 ? ` (${H + 1}/${ve})` : "";
  const gt = `${Pe}${ye}`;
  let O;
  if (L[0] !== dt || L[1] !== ut || L[2] !== mt || L[3] !== pt || L[4] !== gt)
    ((O = e(de, {
      title: gt,
      subtitle: pt,
      onCancel: mt,
      color: ut,
      hideInputGuide: !0,
      isCancelActive: !1,
      children: dt,
    })),
      (L[0] = dt),
      (L[1] = ut),
      (L[2] = mt),
      (L[3] = pt),
      (L[4] = gt),
      (L[5] = O));
  else O = L[5];
  let q;
  if (L[6] !== H || L[7] !== ft)
    ((q =
      ft ??
      r(DotSeparatedList, {
        children: [
          e(KeybindingHint, { chord: ["up", "down"], action: "navigate" }),
          e(KeybindingHint, { chord: "enter", action: "select" }),
          e(ActionKeybindingHint, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: H > 0 ? "go back" : "cancel",
          }),
        ],
      })),
      (L[6] = H),
      (L[7] = ft),
      (L[8] = q));
  else q = L[8];
  let J;
  if (L[9] !== q)
    ((J = e(Box, {
      marginLeft: 2,
      marginTop: 1,
      children: e(InputGuide, { children: q }),
    })),
      (L[9] = q),
      (L[10] = J));
  else J = L[10];
  let jt;
  if (L[11] !== O || L[12] !== J)
    ((jt = r(N, { children: [O, J] })), (L[11] = O), (L[12] = J), (L[13] = jt));
  else jt = L[13];
  return jt;
}
export { WizardProvider, useWizard, WizardStepFrame };
