// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 273 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { getRemoteTransport } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { buildSessionContext } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import "../成本-Token统计/usage-transcript-scan.js";
import "../../03-入口与运行时/会话UI-REPL/scroll-box.js";
import "../../01-核心基础设施/UI组件-TUI/chunk-yhkvt9ba.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/UI组件-TUI/one-shot-render.js";
import "../使用时长-Wellbeing/使用时长-Wellbeing.0s8r3ncd.js";
import "../../01-核心基础设施/UI组件-TUI/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/核心工具-未归类/expanded-content-context.js";
import "../../01-核心基础设施/核心工具-未归类/queued-message-context.js";
import { PluginsDialog } from "../插件系统/chunk-jwm9gdkd.js";
import "../插件系统/chunk-akd9b588.js";
import "../../01-核心基础设施/UI组件-TUI/chunk-2x6t9gq6.js";
import "../终端-剪贴板/clipboard-copy.js";
import "../../01-核心基础设施/核心工具-并发与缓存/lazy-event-emitters.js";
import "../认证-OAuth登录/url-and-error-redaction.js";
import "../插件系统/chunk-rbjz1q03.js";
import "../插件系统/channel-gate.js";
import "../MCP客户端/chunk-4xr0rjb4.js";
import "../Skills技能/skill-usage-by-plugin.js";
import "../../01-核心基础设施/UI组件-TUI/focusable-box.js";
import "../../01-核心基础设施/UI组件-TUI/background-text.js";
import "../../01-核心基础设施/UI组件-TUI/empty-state-message.js";
import "../MCP客户端/mcp-error-messages.js";
import "../../01-核心基础设施/UI组件-TUI/error-message.js";
import "../../01-核心基础设施/UI组件-TUI/spinner-message-line.js";
import "../../01-核心基础设施/UI组件-TUI/progress-bar.js";
import "../../01-核心基础设施/UI组件-TUI/linkified-text.js";
import "../../01-核心基础设施/核心工具-未归类/use-settings.js";
import "../../01-核心基础设施/UI组件-TUI/bullet-item.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import "../远程控制-Bridge/remote-control-ui-strings.js";
import "../MCP客户端/plugin-reload-cache-impact.js";
import { buildSkillDoctorContext } from "../MCP客户端/skill-doctor-data.js";
import "../../01-核心基础设施/核心工具-未归类/mcp-control-handlers.js";
import "../MCP客户端/mcp-hosted-oauth-gate.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/chunk-j7khz57p.js";
async function r(t, o, s) {
  let n = getRemoteTransport() !== null;
  return e(PluginsDialog, {
    onComplete: t,
    args: s,
    commands: o.options.commands,
    cloudSession: n,
    getSessionContext: () => buildSessionContext(o.messages, o.readFileState),
    getSkillStatsInputs: () => buildSkillDoctorContext(o),
    getReloadCacheImpactOptions: n
      ? void 0
      : () => ({
          model: o.options.mainLoopModel,
          dynamicMcpConfig: o.options.dynamicMcpConfig,
        }),
  });
}
export { r as call };
