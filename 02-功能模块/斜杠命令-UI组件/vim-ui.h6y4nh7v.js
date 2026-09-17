// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 275 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../03-入口与运行时/会话UI(REPL)/scroll-box.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import "../插件系统/chunk-rbjz1q03.js";
import "../插件系统/channel-gate.js";
import "../../01-核心基础设施/共享小工具-未细化/feature-flag-version.js";
import "../../01-核心基础设施/共享小工具-未细化/main-loop-model.js";
import "../权限系统/chunk-4tar9p3n.js";
import "../Teammates团队/chunk-nhk351pe.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y2pwa8n5.js";
import "../跨会话消息(UDS)/chunk-t2esphmv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5pc36v8n.js";
import "../Skills技能/chunk-wwgqvtfr.js";
import "../自动更新-安装/chunk-brx72pf1.js";
import "../自动更新-安装/chunk-2g5h49pk.js";
import "../会话-历史-恢复/chunk-szqky9sa.js";
import "../跨会话消息(UDS)/chunk-qvnte9zp.js";
import { n4 } from "../设置-配置-UI/设置-配置-UI.kezhax6q.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/chunk-p2gj9dsf.js";
import "../状态栏-主题/chunk-rhjpq9s2.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import "../Memory-CLAUDE.md/chunk-54xx04er.js";
import "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import "../Memory-CLAUDE.md/claude-md-external-includes-dialog.js";
import "../推送通知(Push)/推送通知(Push).8ab67cqd.js";
import "../AutoMode-自动模式/chunk-15n5gf3t.js";
import "../Teammates团队/chunk-88ybhavr.js";
import "../Teammates团队/chunk-qy9488g9.js";
import "../../01-核心基础设施/设置-配置/chunk-bznmdnc2.js";
import "../成本-Token统计/chunk-3nwwgatc.js";
import "../MCP客户端/chunk-22bnxvxv.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "./chunk-y5mtnxtg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4bdjksjf.js";
import "../../01-核心基础设施/共享小工具-未细化/dashed-border-box.js";
import "../../01-核心基础设施/共享小工具-未细化/title-with-subtitle.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import "../../01-核心基础设施/共享小工具-未细化/input-guide.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import "../../01-核心基础设施/共享小工具-未细化/bullet-item.js";
import "../Bridge-RemoteControl/policy-limits-status.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ga0qgvpz.js";
import "../自动更新-安装/auto-updates-channel.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import "../../01-核心基础设施/设置-配置/chunk-992erern.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/chunk-qgx6a5a0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ch1x7wx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j86cs2ar.js";
var i = { vim: "Editor mode", "output-style": "Output style" };
function redirectMessageFor(n) {
  let s = n && i[n] ? n : "vim";
  return `/${s} moved \u2192 ${i[s]} in /config`;
}
var d = async (n, s, a, c) => {
  let m = redirectMessageFor(c);
  return r(o, {
    flexDirection: "column",
    children: [
      e(t, { color: "suggestion", children: m }),
      e(n4, { onClose: () => n(m), context: s, defaultTab: "Config" }),
    ],
  });
};
export { d as call, redirectMessageFor };
