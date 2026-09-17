// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 286 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { isIdleAmberFinchEnabled } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../云会话-Teleport/remote-callout-dialog.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../认证-OAuth登录/console-profile-auth.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../终端-剪贴板/clipboard-copy.js";
import "../../01-核心基础设施/核心工具-未归类/authentication-status-box.js";
import "../向导UI-Wizard/向导UI-Wizard.7xe5wk62.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import "../../01-核心基础设施/UI组件-TUI/chunk-2x6t9gq6.js";
import "../模型接入-Bedrock-Vertex/bedrock-setup-wizard.js";
import { Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/UI组件-TUI/confirm-prompt.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/UI组件-TUI/one-shot-render.js";
import "../使用时长-Wellbeing/使用时长-Wellbeing.0s8r3ncd.js";
import "../../01-核心基础设施/UI组件-TUI/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/核心工具-未归类/expanded-content-context.js";
import "../../01-核心基础设施/核心工具-未归类/queued-message-context.js";
import "../认证-OAuth登录/chunk-xvt7fc9t.js";
import "../模型接入-Bedrock-Vertex/vertex-setup-wizard.js";
import "../../01-核心基础设施/核心工具-未归类/use-answer-refusal-state.js";
import "../../01-核心基础设施/设置-配置/managed-settings-approval-dialog.js";
import "../../01-核心基础设施/核心工具-未归类/standalone-security-dialog.js";
import "../../01-核心基础设施/核心工具-未归类/feature-flag-version.js";
import "../../01-核心基础设施/核心工具-未归类/main-loop-model.js";
import "../../01-核心基础设施/核心工具-进程与信号/session-relaunch.js";
import "../远程控制-Bridge/login-flow.js";
import { startExtraUsageFlow } from "../用量额度-限额/extra-usage-flow.js";
import { callUpgradeFromSurface } from "./upgrade-flow.js";
import "../权限系统/permission-dialog.js";
import "../认证-OAuth登录/oauth-login-completion.js";
import "../通知-Notifications/通知-Notifications.g4xng0pg.js";
import "../../01-核心基础设施/UI组件-TUI/titled-border-box.js";
import "../../01-核心基础设施/UI组件-TUI/error-message.js";
import "../../01-核心基础设施/UI组件-TUI/input-guide.js";
import "../../01-核心基础设施/UI组件-TUI/spinner-message-line.js";
import "../../01-核心基础设施/UI组件-TUI/progress-bar.js";
import "../../01-核心基础设施/UI组件-TUI/linkified-text.js";
import "../../01-核心基础设施/核心工具-未归类/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../远程控制-Bridge/remote-control-ui-strings.js";
import "../成本-Token统计/usage-credits-flow.js";
import "../认证-OAuth登录/oauth-login-flow.js";
import { d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
F();
function x(M) {
  let n = _(15),
    { onDone: a, context: s } = M,
    [h, L] = d(null);
  if (h) {
    return h;
  }
  let R;
  if (n[0] === MEMO_CACHE_SENTINEL)
    ((R = [
      ...(isIdleAmberFinchEnabled() ? [] : [{ label: "Upgrade to Max", value: "upgrade" }]),
      {
        label: "Add funds to continue with usage credits",
        value: "extra-usage",
      },
    ]),
      (n[0] = R));
  else R = n[0];
  let U = R,
    D;
  if (n[1] === MEMO_CACHE_SENTINEL)
    ((D = e(Box, {
      paddingX: 2,
      children: e(Text, {
        color: "error",
        children: "Your Claude Code trial has ended.",
      }),
    })),
      (n[1] = D));
  else D = n[1];
  let f;
  if (n[2] !== a) ((f = () => a()), (n[2] = a), (n[3] = f));
  else f = n[3];
  let u;
  if (n[4] !== a) ((u = () => a()), (n[4] = a), (n[5] = u));
  else u = n[5];
  let C;
  if (n[6] !== s || n[7] !== a)
    ((C = (O) => {
      if (
        (logEvent("tengu_pro_trial_expired_choice", {
          chose_upgrade: O === "upgrade",
        }),
        O === "upgrade")
      )
        callUpgradeFromSurface(a, s, "pro_trial_expired_dialog").then((W) => L(W));
      else startExtraUsageFlow(a, s).then((Y) => L(Y));
    }),
      (n[6] = s),
      (n[7] = a),
      (n[8] = C));
  else C = n[8];
  let g;
  if (n[9] !== u || n[10] !== C)
    ((g = e(Select, { options: U, onCancel: u, onChange: C })),
      (n[9] = u),
      (n[10] = C),
      (n[11] = g));
  else g = n[11];
  let P;
  if (n[12] !== f || n[13] !== g)
    ((P = r(Box, {
      flexDirection: "column",
      children: [
        D,
        e(de, { title: "What do you want to do?", onCancel: f, children: g }),
      ],
    })),
      (n[12] = f),
      (n[13] = g),
      (n[14] = P));
  else P = n[14];
  return P;
}
async function H(m, c) {
  return e(x, { onDone: m, context: c });
}
export { H as call };
