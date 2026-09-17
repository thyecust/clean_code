// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 271 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { HELP_FLAGS, INFO_SUBCOMMAND_ALIASES } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { mayHaveRemoteClient } from "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useTheme } from "../状态栏-主题/chunk-w5jaj6kg.js";
import "../../03-入口与运行时/会话UI-REPL/scroll-box.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import "../插件系统/chunk-rbjz1q03.js";
import "../插件系统/channel-gate.js";
import "../../01-核心基础设施/共享小工具-未细化/feature-flag-version.js";
import "../../01-核心基础设施/共享小工具-未细化/main-loop-model.js";
import { sanitizeForRelay } from "../远程控制-Bridge/chunk-5ne99rq3.js";
import "../权限系统/cross-session-inbound-gate.js";
import "../Teammates团队/peer-idle-notices.js";
import "../../01-核心基础设施/共享小工具-未细化/file-transfer-config.js";
import "../跨会话消息-UDS/uds-messaging.js";
import "../../01-核心基础设施/共享小工具-未细化/job-drafts.js";
import "../Skills技能/mcp-skill-cache.js";
import "../自动更新-安装/install-diagnostics.js";
import "../自动更新-安装/native-installer.js";
import "../会话-历史-恢复/retention-cleanup.js";
import "../跨会话消息-UDS/peer-file-transfer.js";
import { SettingsDialog } from "../设置-配置-UI/设置-配置-UI.kezhax6q.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../语法高亮-Markdown渲染/syntax-highlight-renderer.js";
import "../差异引擎-Diff/structured-diff.js";
import "../状态栏-主题/theme-picker.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import "../记忆-CLAUDE.md/chunk-54xx04er.js";
import "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import "../记忆-CLAUDE.md/claude-md-external-includes-dialog.js";
import "../推送通知-Push/推送通知-Push.8ab67cqd.js";
import "../自动模式-AutoMode/unattended-serving-consent.js";
import "../Teammates团队/chunk-88ybhavr.js";
import "../Teammates团队/backend-registry.js";
import "../../01-核心基础设施/设置-配置/settings-config-model.js";
import "../成本-Token统计/usage-transcript-scan.js";
import "../MCP客户端/usage-rate-limits.js";
import "../使用时长-Wellbeing/使用时长-Wellbeing.0s8r3ncd.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import { parseConfigShorthand, applyConfigShorthand, collapseShorthandResultOffBox, listConfigKeys } from "../记忆-CLAUDE.md/config-shorthand.js";
import "./status-info-rows.js";
import "../../01-核心基础设施/共享小工具-未细化/skill-usage-by-plugin.js";
import "../../01-核心基础设施/共享小工具-未细化/dashed-border-box.js";
import "../../01-核心基础设施/共享小工具-未细化/title-with-subtitle.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import "../../01-核心基础设施/共享小工具-未细化/input-guide.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import "../../01-核心基础设施/共享小工具-未细化/bullet-item.js";
import "../远程控制-Bridge/policy-limits-status.js";
import "../../01-核心基础设施/共享小工具-未细化/managed-settings-status.js";
import "../自动更新-安装/auto-updates-channel.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import "../远程控制-Bridge/remote-control-ui-strings.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import "../../01-核心基础设施/设置-配置/fast-mode.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/model-switch.js";
import "../../01-核心基础设施/共享小工具-未细化/propose-goal-feature-gate.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j86cs2ar.js";
import { E, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
var J = async (t, o, r) => {
  let s = r?.trim() || "";
  if (!s) return e(SettingsDialog, { onClose: t, context: o, defaultTab: "Config" });
  let n = s.toLowerCase();
  if (HELP_FLAGS.includes(n) || INFO_SUBCOMMAND_ALIASES.includes(n)) {
    t(
      `Run /config to open settings, or /config key=value to set one directly.
${listConfigKeys(o)}`,
      { display: "system" },
    );
    return;
  }
  let i = parseConfigShorthand(s);
  if (!i) {
    t(`Expected key=value, got "${sanitizeForRelay(s)}". Run /config to open settings.`, {
      display: "system",
    });
    return;
  }
  return e(c, { pairs: i, context: o, onDone: t });
};
function c(N) {
  let X = _(6),
    { pairs: a, context: m, onDone: l } = N,
    [, p] = useTheme(),
    d = C(!1),
    u,
    y;
  if (X[0] !== m || X[1] !== l || X[2] !== a || X[3] !== p)
    ((u = () => {
      if (d.current) {
        return;
      }
      ((d.current = !0),
        applyConfigShorthand(a, m, { setTheme: p }).then((k) =>
          l(
            k.map((j) => collapseShorthandResultOffBox(j, mayHaveRemoteClient(m.session))).join(`
`),
            { display: "system" },
          ),
        ));
    }),
      (y = [a, m, l, p]),
      (X[0] = m),
      (X[1] = l),
      (X[2] = a),
      (X[3] = p),
      (X[4] = u),
      (X[5] = y));
  else ((u = X[4]), (y = X[5]));
  return (E(u, y), null);
}
export { J as call };
