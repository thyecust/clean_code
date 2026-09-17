// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 254 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { POWERUP_DISCOVERY_COPY } from "../../01-核心基础设施/共享小工具-未细化/chunk-aeg1pn1f.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ConfirmPrompt } from "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import { POWERUP_LESSONS, PowerupsBrowser } from "./新手引导-Onboarding.pvn70hnm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tfspgges.js";
import { ProgressBar } from "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { WelcomeBanner } from "../../03-入口与运行时/CLI入口-Commander/welcome-banner.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../远程控制-Bridge/remote-control-ui-strings.js";
import { d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function PowerupDiscoveryStep(H) {
  let m = _(9),
    { onDone: n } = H,
    [J, K] = d(!1);
  if (J) {
    let f;
    if (m[0] !== n) ((f = e(PowerupsBrowser, { onExit: n })), (m[0] = n), (m[1] = f));
    else f = m[1];
    return f;
  }
  let f;
  if (m[2] !== n)
    ((f = function a(x) {
      if (
        (logEvent("tengu_powerup_discovery_shown", { arm: fromEnum("step"), action: fromEnum(x) }),
        x === "launch")
      )
        K(!0);
      else n();
    }),
      (m[2] = n),
      (m[3] = f));
  else f = m[3];
  let a = f,
    y;
  if (m[4] === MEMO_CACHE_SENTINEL) ((y = e(WelcomeBanner, {})), (m[4] = y));
  else y = m[4];
  let k;
  if (m[5] === MEMO_CACHE_SENTINEL)
    ((k = r(Box, {
      children: [
        e(Text, { bold: !0, children: POWERUP_DISCOVERY_COPY.heading }),
        r(Text, { dimColor: !0, children: [" 0/", POWERUP_LESSONS.length, " "] }),
        e(ProgressBar, {
          ratio: 0,
          width: 16,
          fillColor: "claude",
          emptyColor: "inactive",
        }),
      ],
    })),
      (m[5] = k));
  else k = m[5];
  let w;
  if (m[6] === MEMO_CACHE_SENTINEL)
    ((w = e(Box, { width: 70, children: e(Text, { children: POWERUP_DISCOVERY_COPY.body }) })),
      (m[6] = w));
  else w = m[6];
  let L;
  if (m[7] !== a)
    ((L = r(Box, {
      flexDirection: "column",
      children: [
        y,
        r(Box, {
          flexDirection: "column",
          gap: 1,
          paddingLeft: 1,
          marginTop: 1,
          children: [
            k,
            w,
            e(ConfirmPrompt, {
              confirmLabel: "Take the tour",
              cancelLabel: "Skip for now",
              onConfirm: () => a("launch"),
              onCancel: () => a("skip"),
            }),
          ],
        }),
      ],
    })),
      (m[7] = a),
      (m[8] = L));
  else L = m[8];
  return L;
}
export { PowerupDiscoveryStep };
