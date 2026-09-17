// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 242 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { l, cc } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { getProTrialDurationDays, startProTrial } from "../../01-核心基础设施/共享小工具-未细化/chunk-f4zey5rf.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { yo } from "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { zB } from "../../03-入口与运行时/CLI入口-Commander/chunk-nhpr06js.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import { d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function ProTrialStartScreen(L) {
  let s = _(11),
    { onDone: u, storageV5: C, credentials: P } = L,
    [a, B] = d("idle"),
    H;
  if (s[0] !== P || s[1] !== u || s[2] !== a || s[3] !== C)
    ((H = {
      "confirm:yes": () => {
        if (a === "starting") {
          return;
        }
        if (a === "error") {
          u();
          return;
        }
        (B("starting"),
          logEvent("tengu_pro_trial_start_pressed", {}),
          startProTrial(C, P)
            .then(() => {
              (logEvent("tengu_pro_trial_start_ok", {}), u());
            })
            .catch((S) => {
              if (cc(S))
                n(`Failed to start pro trial: ${l(S)}`, { level: "error" });
              else logError(S);
              (logEvent("tengu_pro_trial_start_error", {}), B("error"));
            }));
      },
    }),
      (s[0] = P),
      (s[1] = u),
      (s[2] = a),
      (s[3] = C),
      (s[4] = H));
  else H = s[4];
  let R;
  if (s[5] === MEMO_CACHE_SENTINEL) ((R = { context: "Confirmation" }), (s[5] = R));
  else R = s[5];
  useKeybindings(H, R);
  let D;
  if (s[6] === MEMO_CACHE_SENTINEL) ((D = getProTrialDurationDays()), (s[6] = D));
  else D = s[6];
  let Y = D,
    b;
  if (s[7] === MEMO_CACHE_SENTINEL) ((b = e(zB, {})), (s[7] = b));
  else b = s[7];
  let j;
  if (s[8] === MEMO_CACHE_SENTINEL)
    ((j = e(t, {
      children:
        Y !== null
          ? `Your Pro plan includes ${Y} days of Claude Code.`
          : "Your Pro plan includes a Claude Code trial.",
    })),
      (s[8] = j));
  else j = s[8];
  let v;
  if (s[9] !== a)
    ((v = r(o, {
      flexDirection: "column",
      paddingX: 1,
      gap: 1,
      children: [
        b,
        j,
        a === "starting"
          ? r(o, {
              children: [
                e(yo, {}),
                e(t, { children: " Starting your trial\u2026" }),
              ],
            })
          : a === "error"
            ? r(t, {
                color: "error",
                children: [
                  "Couldn't start your trial. Press ",
                  e(t, { bold: !0, children: "Enter" }),
                  " to continue.",
                ],
              })
            : r(t, {
                color: "permission",
                children: [
                  "Press ",
                  e(t, { bold: !0, children: "Enter" }),
                  " to start your trial",
                ],
              }),
      ],
    })),
      (s[9] = a),
      (s[10] = v));
  else v = s[10];
  return v;
}
export { ProTrialStartScreen };
