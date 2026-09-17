// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 134 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/核心工具-未归类/storage-v5-context.js";
import { saveGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { DotSeparatedList } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import { REFUSE_INPUT_WINDOW_MS } from "../../01-核心基础设施/核心工具-未归类/recent-window.js";
import { useIsMountRecent, useMountTime, useSettleAfterChange, useRefusedInputWindow } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { ConfirmPrompt } from "../../01-核心基础设施/UI组件-TUI/confirm-prompt.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { ActionKeybindingHint } from "../键位绑定-Keybindings/action-keybinding-hint.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, C, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
F();
function no() {
  logEvent("tengu_chrome_auto_enable_prompt_shown", {});
}
function ChromeAutoEnableDialog(Co) {
  let n = _(29),
    { onDone: v, isDontAskMode: Q, isAutoMode: U } = Co,
    ko = Q === void 0 ? !1 : Q,
    vo = U === void 0 ? !1 : U,
    { storageV5: x } = useStorageV5Context(),
    X;
  if (n[0] === MEMO_CACHE_SENTINEL) ((X = []), (n[0] = X));
  else X = n[0];
  E(no, X);
  let Z = C(!1),
    I = useIsMountRecent(REFUSE_INPUT_WINDOW_MS),
    { refusedWithin: A, noteRefused: B, epoch: xo } = useRefusedInputWindow(),
    G;
  if (n[1] !== I || n[2] !== B || n[3] !== A)
    ((G = function a() {
      if (I() || A(REFUSE_INPUT_WINDOW_MS)) {
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
    O = useMountTime(),
    L = useSettleAfterChange(xo, REFUSE_INPUT_WINDOW_MS),
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
        saveGlobalConfig(
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
  if (n[11] === MEMO_CACHE_SENTINEL)
    ((M = r(DotSeparatedList, {
      children: [
        e(KeybindingHint, { chord: "enter", action: "confirm" }),
        e(ActionKeybindingHint, {
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
  if (n[12] === MEMO_CACHE_SENTINEL)
    ((S = e(Text, {
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
  if (n[13] === MEMO_CACHE_SENTINEL)
    ((oo = e(Text, { bold: !0, color: "permission", children: "/chrome" })),
      (n[13] = oo));
  else oo = n[13];
  let c;
  if (n[14] !== N)
    ((c = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        S,
        r(Text, {
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
      ConfirmPrompt,
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
