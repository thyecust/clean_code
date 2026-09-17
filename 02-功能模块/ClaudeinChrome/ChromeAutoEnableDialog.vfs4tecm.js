// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 134 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import { Te } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { mo } from "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import { ui, Gm, fa, $o } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { En } from "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { je } from "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function no() {
  i("tengu_chrome_auto_enable_prompt_shown", {});
}
function ChromeAutoEnableDialog(Co) {
  let n = _(29),
    { onDone: v, isDontAskMode: Q, isAutoMode: U } = Co,
    ko = Q === void 0 ? !1 : Q,
    vo = U === void 0 ? !1 : U,
    { storageV5: x } = _e(),
    X;
  if (n[0] === p) ((X = []), (n[0] = X));
  else X = n[0];
  E(no, X);
  let Z = C(!1),
    I = ui(mo),
    { refusedWithin: A, noteRefused: B, epoch: xo } = $o(),
    G;
  if (n[1] !== I || n[2] !== B || n[3] !== A)
    ((G = function a() {
      if (I() || A(mo)) {
        return (B(), !0);
      }
      return !1;
    }),
      (n[1] = I),
      (n[2] = B),
      (n[3] = A),
      (n[4] = G));
  else G = n[4];
  let a = G,
    O = Gm(),
    L = fa(xo, mo),
    R;
  if (n[5] !== v || n[6] !== a || n[7] !== x)
    ((R = function s(m) {
      if (Z.current) {
        return;
      }
      if (a()) {
        return;
      }
      if (
        ((Z.current = !0),
        Te(
          (Do) => ({
            ...Do,
            claudeInChromeDefaultEnabled: m,
            ...(m && { hasCompletedClaudeInChromeOnboarding: !0 }),
          }),
          x,
        ),
        m)
      )
        logFeatureOk("chrome_auto_enable_prompt");
      else logFeatureSad("chrome_auto_enable_prompt", "declined");
      v(m);
    }),
      (n[5] = v),
      (n[6] = a),
      (n[7] = x),
      (n[8] = R));
  else R = n[8];
  let s = R,
    u;
  if (n[9] !== s) ((u = () => s(!1)), (n[9] = s), (n[10] = u));
  else u = n[10];
  let M;
  if (n[11] === p)
    ((M = r(ue, {
      children: [
        e(D, { chord: "enter", action: "confirm" }),
        e(je, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "keep browser tools off",
        }),
      ],
    })),
      (n[11] = M));
  else M = n[11];
  let S;
  if (n[12] === p)
    ((S = e(t, {
      children:
        "Claude will use your Chrome browser by default \u2014 navigating sites, filling forms, and capturing screenshots in your existing session.",
    })),
      (n[12] = S));
  else S = n[12];
  const N = ko
    ? "This session is in Don't Ask mode, so browser actions that need approval are skipped rather than prompted."
    : vo
      ? "This session is in Auto mode, so an AI classifier approves routine browser actions \u2014 you are only prompted when it is unsure."
      : "Browser actions still go through Claude's regular permission prompts before they run.";
  let oo;
  if (n[13] === p)
    ((oo = e(t, { bold: !0, color: "permission", children: "/chrome" })),
      (n[13] = oo));
  else oo = n[13];
  let c;
  if (n[14] !== N)
    ((c = r(o, {
      flexDirection: "column",
      gap: 1,
      children: [
        S,
        r(t, {
          dimColor: !0,
          children: [
            N,
            " ",
            "Turn browser tools off for future sessions with",
            " ",
            oo,
            ".",
          ],
        }),
      ],
    })),
      (n[14] = N),
      (n[15] = c));
  else c = n[15];
  let d, h;
  if (n[16] !== s)
    ((d = () => s(!0)),
      (h = () => s(!1)),
      (n[16] = s),
      (n[17] = d),
      (n[18] = h));
  else ((d = n[17]), (h = n[18]));
  let b;
  if (
    n[19] !== L.remountKey ||
    n[20] !== a ||
    n[21] !== O ||
    n[22] !== d ||
    n[23] !== h
  )
    ((b = e(
      En,
      {
        refuseInput: a,
        openedAt: O,
        hideIndexes: !0,
        cancelFirst: !0,
        focus: "cancel",
        confirmLabel: "Yes, use my browser",
        cancelLabel: "No, keep browser tools off",
        onConfirm: d,
        onCancel: h,
      },
      L.remountKey,
    )),
      (n[19] = L.remountKey),
      (n[20] = a),
      (n[21] = O),
      (n[22] = d),
      (n[23] = h),
      (n[24] = b));
  else b = n[24];
  let eo;
  if (n[25] !== c || n[26] !== b || n[27] !== u)
    ((eo = r(de, {
      title: "Claude in Chrome extension detected",
      color: "permission",
      onCancel: u,
      inputGuide: M,
      children: [c, b],
    })),
      (n[25] = c),
      (n[26] = b),
      (n[27] = u),
      (n[28] = eo));
  else eo = n[28];
  return eo;
}
export { ChromeAutoEnableDialog };
