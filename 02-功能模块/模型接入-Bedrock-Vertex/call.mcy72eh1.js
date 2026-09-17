// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 263 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { RelaunchConfirmationWizard } from "../../01-核心基础设施/核心工具-未归类/relaunch-confirmation-wizard.js";
import "../向导UI-Wizard/向导UI-Wizard.7xe5wk62.js";
import "../../01-核心基础设施/UI组件-TUI/confirm-prompt.js";
import { VertexSetupWizard } from "./vertex-setup-wizard.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/UI组件-TUI/one-shot-render.js";
import "../使用时长-Wellbeing/使用时长-Wellbeing.0s8r3ncd.js";
import "../../01-核心基础设施/UI组件-TUI/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/核心工具-未归类/expanded-content-context.js";
import "../../01-核心基础设施/核心工具-未归类/queued-message-context.js";
import "../../01-核心基础设施/UI组件-TUI/error-message.js";
import "../../01-核心基础设施/UI组件-TUI/input-guide.js";
import "../../01-核心基础设施/UI组件-TUI/spinner-message-line.js";
import "../../01-核心基础设施/UI组件-TUI/progress-bar.js";
import "../../01-核心基础设施/UI组件-TUI/linkified-text.js";
import "../../01-核心基础设施/核心工具-未归类/use-settings.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import "../远程控制-Bridge/remote-control-ui-strings.js";
async function m(o) {
  return (
    logEvent("tengu_vertex_setup_started", {}),
    e(RelaunchConfirmationWizard, {
      Wizard: VertexSetupWizard,
      cancelledEvent: "tengu_vertex_setup_cancelled",
      onDone: o,
    })
  );
}
export { m as call };
