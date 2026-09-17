// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { AS, ML, mv, ym } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { ge, l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum, fromSanitizer_SANITIZER_OUTPUT_ONLY } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { describeStorageError, jsonStringify, jsonParse, getFsSurface, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir, getSafeModeExitHint, xg } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { pluralize, countOccurrences, normalizeFullWidthDigits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { isEssentialTrafficOnly, logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { env as a, udsEnv } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useKeybinding, useKeybindings } from "../键位绑定-Keybindings/keybinding-hooks.js";
import { Vm } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { isFullscreen, Box, Text, Link, Ansi, useIsScreenReaderEnabled, measureElement } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  isFastModeEnabled,
  isFastModeAvailable,
  modelSupportsFastMode,
  bytesPerTokenForModel,
  renderModelName,
  hashForTelemetry,
  isBgSession,
  isUnattendedBgSession,
  getApiKeyFingerprint,
  isClaudeAISubscriber,
  hasStoredOAuthToken,
  getSubscriptionType,
  isConsumerSubscriber,
  DEFAULT_GLOBAL_CONFIG,
  saveGlobalConfig,
  getGlobalConfig,
  getCurrentProjectConfig,
  formatAutoUpdaterDisabledReason,
  getAutoUpdaterDisabledReason,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { wS } from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";
import { execFileNoThrowWithCwd } from "../工作树-Git/git-exec-hardening.js";
import { getRemoteTransport, isRemoteActive } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { getStringWidth, formatDuration, formatNumber, formatTokens, formatRelativeTimeAgo, formatResetText } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { listedProjectKey } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { getFileStorage } from "../../01-核心基础设施/文件存储-原子写入/file-storage.js";
import { isValidPathSegment, STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { ake } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { getSettingsForSource, getInitialSettings, updateSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { stripAnsi } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { LEFT_ARROW_GLYPH, WARNING_GLYPH, getPermissionModeTitle } from "../权限系统/chunk-e4pfvp7x.js";
import { NOTIFICATION_CHANNELS } from "../图片-截图-ComputerUse/settings-option-values.js";
import { getComplianceTaints } from "../../01-核心基础设施/核心工具-未归类/compliance-taints-store.js";
import { getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { formatComplianceTaintLabel, isKnownComplianceTaint, normalizeComplianceTaints } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { isCustomizationDisabled } from "../状态栏-主题/chunk-dqyc6kge.js";
import { applyForegroundColor, getColorEscapePrefix } from "../状态栏-主题/chunk-jz6b76hr.js";
import { useTheme, useThemeSetting } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { useStorageV5Context } from "../../01-核心基础设施/核心工具-未归类/storage-v5-context.js";
import { parseCustomThemeRef } from "../状态栏-主题/custom-themes.js";
import { resolveSetting } from "../上下文压缩-Compact/resolve-user-intent-setting.js";
import { useTerminalFocus } from "../../01-核心基础设施/终端与时钟/clock-and-terminal-focus.js";
import { useClock } from "../../01-核心基础设施/终端与时钟/use-clock.js";
import { DotSeparatedList } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import { useGlobalExitKeybinding } from "../键位绑定-Keybindings/exit-keybinding-hooks.js";
import { useTerminalSize } from "../../01-核心基础设施/UI组件-TUI/use-terminal-size.js";
import { useHasVirtualScrollViewport, useVirtualScrollViewportSize } from "../../01-核心基础设施/UI组件-TUI/virtual-scroll-viewport-state.js";
import { useSession } from "../../01-核心基础设施/核心工具-未归类/session-context.js";
import { useFocusTrap } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { qp, ss, Jd } from "../../01-核心基础设施/UI组件-TUI/chunk-yhkvt9ba.js";
import { isChannelsEnabled } from "../插件系统/chunk-rbjz1q03.js";
import { isCrossSessionMessagingEnabled } from "../跨会话消息-UDS/chunk-rfb3s38d.js";
import { isChannelsPolicyBlocked } from "../插件系统/channel-gate.js";
import { useAppStateSession, useAppStateSelector, useSetAppState, useAppState } from "../../01-核心基础设施/核心工具-未归类/app-state-context.js";
import { useMainLoopModelOverride } from "../../01-核心基础设施/核心工具-未归类/main-loop-model.js";
import { SYNTHETIC_MODEL_NAME } from "../远程控制-Bridge/chunk-5ne99rq3.js";
import {
  formatCostSummary,
  DEFAULT_OUTPUT_STYLE_NAME,
  BUILT_IN_OUTPUT_STYLES,
  getAllOutputStyles,
  getOverageIncludedModels,
  getRateLimitPromoNotices,
  hasWeeklyScopedModelLimits,
  getModelWeeklyLimitRows,
  getUnifiedRateLimitWindows,
  haveLimitsBeenObserved,
  hasConnectedIdeClient,
  getFeedbackDraftsSetting,
  isTranscriptMessage,
  getCurrentSessionDisplayTitle,
  getSessionMemoryFiles,
  getExternalInstructionIncludes,
  hasExternalInstructionIncludes,
  isExpandedSettingsUiEnabled,
  formatCurrencyAmount,
  USAGE_CREDITS_COMMAND,
  OUTPUT_STYLE_SECTION_NAME,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { areWorkflowsAvailable } from "../编排-Workflow/workflow-feature-gates.js";
import { getProjectsDir } from "../Teammates团队/transcript-paths.js";
import { getClaudeTempDir } from "../../01-核心基础设施/核心工具-路径与平台/temp-directory.js";
import { isArtifactConfigToggleable } from "../制品发布-Artifact/chunk-01ymf0ar.js";
import { ensurePolicyLimitsLoadedForDiagnostic } from "../远程控制-Bridge/chunk-9estzwf5.js";
import { isPushNotificationsEnabled, isInputNeededPushEnabled } from "../远程控制-Bridge/push-notification-tool.js";
import { formatCronSchedule } from "../后台任务-Shell管理/scheduled-tasks.js";
import { isAgentsFleetEnabled } from "../多会话视图-Fleet/agent-view-feature-gates.js";
import { getUdsInboxUnavailableReason } from "../跨会话消息-UDS/uds-messaging.js";
import { githubConnectionStatusStore } from "../隐私设置-Grove/chunk-a4mdm49v.js";
import { isWebSetupEnabled } from "../斜杠命令-框架/chunk-a4vej95c.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { StatusIndicator } from "../../01-核心基础设施/UI组件-TUI/chunk-dsg6bce8.js";
import { flattenNodeText, useStateWithGetter, Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { Table, ModelPicker, SelectableRow } from "../../03-入口与运行时/会话UI-REPL/会话UI-REPL.qs63rzfp.js";
import { useNotificationQueue } from "../../03-入口与运行时/会话UI-REPL/notification-queue.js";
import { hn } from "../../01-核心基础设施/UI组件-TUI/chunk-tp42fv8j.js";
import { ThemePicker } from "../状态栏-主题/theme-picker.js";
import { useVimModeInput, SearchInput } from "../Vim模式/Vim模式.nnewe0gf.js";
import { WA, Vx, Sv, Qr, de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { RemoteHomeSettingsDialog } from "../记忆-CLAUDE.md/chunk-54xx04er.js";
import { recordExternalIncludesDecision, ClaudeMdExternalIncludesDialog } from "../记忆-CLAUDE.md/claude-md-external-includes-dialog.js";
import { getEffectiveAutoContinueAtUsageLimit, isAutoContinueSettingUserControlled } from "../状态管理-AppState/状态管理-AppState.wyzjbwp5.js";
import { getPushReachability, subscribePushReachability, subscribePushPreferencesHydrated } from "../推送通知-Push/推送通知-Push.8ab67cqd.js";
import { formatNotificationChannelLabel, getSecuritySensitiveSettings, getEffectiveConfig, createSettingsViewModel } from "../../01-核心基础设施/设置-配置/settings-config-model.js";
import { getUsagePatternsAccess, collectRecentUsageSummary } from "../成本-Token统计/usage-transcript-scan.js";
import { seedUtilization, loadPlanRateLimits } from "../MCP客户端/usage-rate-limits.js";
import { SpinnerGlyph } from "../状态栏-主题/chunk-jrr487ty.js";
import {
  splitAnthropicOnlyStatusSections,
  tUn,
  nUn,
  buildIdeStatusRows,
  buildMcpServersStatusRow,
  getLargeMemoryFileWarnings,
  buildSettingsSourcesStatusRows,
  getAutoUpdateWarningMessages,
  getLauncherDiagnostics,
  getSettingsAndUpdateWarnings,
  fetchOAuthRefreshKnownDeadStatus,
  buildAccountStatusRows,
  buildProviderStatusRows,
  formatModelRowValue,
} from "../斜杠命令-UI组件/status-info-rows.js";
import { computeSkillUsageByPlugin } from "../Skills技能/skill-usage-by-plugin.js";
import { TitleWithSubtitle } from "../../01-核心基础设施/核心工具-未归类/title-with-subtitle.js";
import { ProgressBar } from "../../01-核心基础设施/UI组件-TUI/progress-bar.js";
import { ActionKeybindingHint } from "../键位绑定-Keybindings/action-keybinding-hint.js";
import { BulletItem } from "../../01-核心基础设施/UI组件-TUI/bullet-item.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { toSingleLineDisplayText } from "../../01-核心基础设施/模型目录-ModelCatalog/model-switch.js";
import { isAgentsViewAvailable } from "../后台任务-Shell管理/chunk-531ast3t.js";
import { resolveThemePalette } from "../../01-核心基础设施/UI组件-TUI/theme-resolution.js";
import {
  Nl,
  Dn,
  kn,
  re,
  E,
  dn,
  V,
  C,
  d,
  At,
  WFt,
  F,
} from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { isSkillDoctorEnabled } from "../../01-核心基础设施/设置-配置/early-access-feature-gates.js";
import { figures, formatWorkflowSizeGuidelineLabel, isWorkflowSizeGuidelineConfigured } from "../Teammates团队/chunk-mrfx53ye.js";
import { quotePowerShellLiteral } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { DEFAULT_MAX_PAGES, runPaginatedScan } from "../../01-核心基础设施/核心工具-其他/paginated-scan.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { getBuildRefName } from "../../01-核心基础设施/核心工具-其他/build-ref-name.js";
import { toESM, commonJS, MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var Pm = commonJS(function (Oi) {
  (function (s) {
    ((s.black = "\x1B[30m"),
      (s.red = "\x1B[31m"),
      (s.green = "\x1B[32m"),
      (s.yellow = "\x1B[33m"),
      (s.blue = "\x1B[34m"),
      (s.magenta = "\x1B[35m"),
      (s.cyan = "\x1B[36m"),
      (s.lightgray = "\x1B[37m"),
      (s.default = "\x1B[39m"),
      (s.darkgray = "\x1B[90m"),
      (s.lightred = "\x1B[91m"),
      (s.lightgreen = "\x1B[92m"),
      (s.lightyellow = "\x1B[93m"),
      (s.lightblue = "\x1B[94m"),
      (s.lightmagenta = "\x1B[95m"),
      (s.lightcyan = "\x1B[96m"),
      (s.white = "\x1B[97m"),
      (s.reset = "\x1B[0m"));
    function c(m, T) {
      return T === void 0 ? m : T + m + s.reset;
    }
    ((s.colored = c),
      (s.plot = function (m, T = void 0) {
        if (typeof m[0] == "number") m = [m];
        T = typeof T < "u" ? T : {};
        let R = typeof T.min < "u" ? T.min : m[0][0],
          v = typeof T.max < "u" ? T.max : m[0][0];
        for (let X = 0; X < m.length; X++)
          for (let J = 0; J < m[X].length; J++)
            ((R = Math.min(R, m[X][J])), (v = Math.max(v, m[X][J])));
        let A = [
            "\u253C",
            "\u2524",
            "\u2576",
            "\u2574",
            "\u2500",
            "\u2570",
            "\u256D",
            "\u256E",
            "\u256F",
            "\u2502",
          ],
          H = Math.abs(v - R),
          B = typeof T.offset < "u" ? T.offset : 3,
          Y = typeof T.padding < "u" ? T.padding : "           ",
          G = typeof T.height < "u" ? T.height : H,
          j = typeof T.colors < "u" ? T.colors : [],
          O = H !== 0 ? G / H : 1,
          q = Math.round(R * O),
          Z = Math.round(v * O),
          Q = Math.abs(Z - q),
          se = 0;
        for (let X = 0; X < m.length; X++) se = Math.max(se, m[X].length);
        se = se + B;
        let ce = typeof T.symbols < "u" ? T.symbols : A,
          K =
            typeof T.format < "u"
              ? T.format
              : function (X) {
                  return (Y + X.toFixed(2)).slice(-Y.length);
                },
          I = Array(Q + 1);
        for (let X = 0; X <= Q; X++) {
          I[X] = Array(se);
          for (let J = 0; J < se; J++) I[X][J] = " ";
        }
        for (let X = q; X <= Z; ++X) {
          let J = K(Q > 0 ? v - ((X - q) * H) / Q : X, X - q);
          ((I[X - q][Math.max(B - J.length, 0)] = J),
            (I[X - q][B - 1] = X == 0 ? ce[0] : ce[1]));
        }
        for (let X = 0; X < m.length; X++) {
          let J = j[X % j.length],
            me = Math.round(m[X][0] * O) - q;
          I[Q - me][B - 1] = c(ce[0], J);
          for (let he = 0; he < m[X].length - 1; he++) {
            let Re = Math.round(m[X][he + 0] * O) - q,
              Ie = Math.round(m[X][he + 1] * O) - q;
            if (Re == Ie) I[Q - Re][he + B] = c(ce[4], J);
            else {
              ((I[Q - Ie][he + B] = c(Re > Ie ? ce[5] : ce[6], J)),
                (I[Q - Re][he + B] = c(Re > Ie ? ce[7] : ce[8], J)));
              let qe = Math.min(Re, Ie),
                ke = Math.max(Re, Ie);
              for (let Xe = qe + 1; Xe < ke; Xe++)
                I[Q - Xe][he + B] = c(ce[9], J);
            }
          }
        }
        return I.map(function (X) {
          return X.join("");
        }).join(`
`);
      }));
  })(typeof Oi > "u" ? (Oi.asciichart = {}) : Oi);
});
F();
F();
function gr(s, c, m) {
  if (getAPIProvider() !== "firstParty" || !isConsumerSubscriber() || !isWebSetupEnabled()) return;
  let T = githubConnectionStatusStore.of(s);
  return { current: () => T.peek(c, m), settled: T.read(c, m) };
}
function $u(s) {
  switch (s) {
    case "connected":
      return [{ label: "Claude Code on the web", value: "GitHub connected" }];
    case "not_connected":
      return [
        {
          label: "Claude Code on the web",
          value: "Not set up \xB7 /web-setup to connect GitHub",
        },
      ];
    case "unknown":
    case void 0:
      return [];
  }
}
function Ff(Rb) {
  return Rb.mainLoopModel;
}
function Uf(Ib) {
  return Ib.mcp;
}
function Wf(_b) {
  return _b.id;
}
function jf(Pb) {
  return Pb.project.cwd;
}
function Hf(Ob) {
  return Ob.length > 0;
}
function Vf(Nb, Zu) {
  return [
    Zu > 0 &&
      r(
        Table.Row,
        { children: [e(N, { children: " " }), e(N, { children: "" })] },
        `gap-${Zu}`,
      ),
    ...Nb.map((Hu, Bb) => {
      let { label: Lf, value: $b } = Hu;
      return r(
        Table.Row,
        {
          children: [
            e(N, { children: Lf !== void 0 ? `${Lf}:` : "" }),
            e(Dr, { value: $b }),
          ],
        },
        `${Zu}-${Bb}`,
      );
    }),
  ];
}
function Gf(td, Wb) {
  return r(
    Box,
    {
      flexDirection: "row",
      gap: 1,
      paddingX: 1,
      children: [
        e(StatusIndicator, { status: "warning" }),
        typeof td === "string" ? e(Text, { wrap: "wrap", children: td }) : td,
      ],
    },
    Wb,
  );
}
function od({ sessionId: s, cwd: c, accountStatus: m, webSetupStatus: T }) {
  let R = a.CLAUDE_CODE_TMUX_SESSION,
    v = getRemoteTransport()?.sessionId,
    H = getCurrentSessionDisplayTitle(s) ?? e(Text, { dimColor: !0, children: "/rename to add a name" }),
    B = ym(),
    Y = "";
  if (B.length > 0) {
    let G = B.map((O) =>
        O.kind === "plugin"
          ? `plugin:${O.name}@${O.marketplace}`
          : `server:${O.name}`,
      ).join(", "),
      j =
        getAPIProvider() !== "firstParty"
          ? "not available on third-party providers"
          : !isChannelsEnabled()
            ? "not currently available"
            : isChannelsPolicyBlocked(getSettingsForSource("policySettings"))
              ? "blocked by org policy"
              : void 0;
    Y = j
      ? `Configured but not active (${j}): ${G}`
      : `Listening for messages from ${G}`;
  }
  return [
    {
      label: "Version",
      value: `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}${getBuildRefName()}`,
    },
    ...[],
    { label: "Session name", value: H },
    { label: v === s ? "Cloud session ID" : "Session ID", value: s },
    ...(v !== void 0 && v !== s
      ? [{ label: "Cloud session ID", value: v }]
      : []),
    {
      label: "Session kind",
      value: !isBgSession()
        ? "interactive"
        : isUnattendedBgSession()
          ? "background job \xB7 unattended"
          : "background job \xB7 attached",
    },
    ...(R ? [{ label: "tmux session", value: R }] : []),
    ...(Y ? [{ label: "Channels", value: Y }] : []),
    ...(isCrossSessionMessagingEnabled() && udsEnv.CLAUDE_CODE_MESSAGING_SOCKET
      ? [
          {
            label: "Peer address",
            value: `uds:${udsEnv.CLAUDE_CODE_MESSAGING_SOCKET}`,
          },
        ]
      : []),
    ...(isCrossSessionMessagingEnabled() && !udsEnv.CLAUDE_CODE_MESSAGING_SOCKET && getUdsInboxUnavailableReason() !== void 0
      ? [
          {
            label: "Peer address",
            value: `unavailable \u2014 ${getUdsInboxUnavailableReason()} (details in the --debug log)`,
          },
        ]
      : []),
    ...(AS()
      ? [
          {
            label: "Memory",
            value: "Paused for this session \xB7 /pause-memory to resume",
          },
        ]
      : []),
    { label: "cwd", value: c },
    ...buildAccountStatusRows(m),
    ...$u(T),
    ...$f(),
    ...buildProviderStatusRows(),
  ];
}
function $f() {
  let s = getComplianceTaints();
  return s.length > 0
    ? [{ label: "Compliance", value: normalizeComplianceTaints(s).map((c) => (isKnownComplianceTaint(c) ? formatComplianceTaintLabel(c) : c)) }]
    : [];
}
function nd({ mainLoopModel: s, mcp: c, theme: m, context: T }) {
  return [
    { label: "Model", value: formatModelRowValue(s) },
    ...nUn(),
    ...(isRemoteActive()
      ? []
      : [
          ...buildIdeStatusRows(c.clients, T.options.ideInstallationStatus, m),
          ...buildMcpServersStatusRow(c.clients, m),
          ...tUn(),
        ]),
    ...buildSettingsSourcesStatusRows(),
  ];
}
async function xr(s, c, m) {
  return (
    await Promise.all([getAutoUpdateWarningMessages(), getSettingsAndUpdateWarnings(c), getLauncherDiagnostics(c), isRemoteActive() ? [] : getLargeMemoryFileWarnings(s, c, m)])
  ).flat();
}
function Dr(vb) {
  let hr = _(8),
    { value: Ct } = vb;
  if (Array.isArray(Ct)) {
    let nn;
    if (hr[0] !== Ct) {
      let Js;
      if (hr[2] !== Ct.length)
        ((Js = (xb, wf) =>
          r(Text, { children: [xb, wf < Ct.length - 1 ? "," : ""] }, wf)),
          (hr[2] = Ct.length),
          (hr[3] = Js));
      else Js = hr[3];
      nn = Ct.map(Js);
      ((hr[0] = Ct), (hr[1] = nn));
    } else nn = hr[1];
    let Js;
    if (hr[4] !== nn)
      ((Js = e(Box, {
        flexWrap: "wrap",
        columnGap: 1,
        flexShrink: 99,
        children: nn,
      })),
        (hr[4] = nn),
        (hr[5] = Js));
    else Js = hr[5];
    return Js;
  }
  if (typeof Ct === "string") {
    let nn;
    if (hr[6] !== Ct)
      ((nn = e(Text, { children: Ct })), (hr[6] = Ct), (hr[7] = nn));
    else nn = hr[7];
    return nn;
  }
  return Ct;
}
function Zs(Mb) {
  let ao = _(23),
    { context: Gn, diagnosticsPromise: Fu, getWebSetupRead: Uu } = Mb,
    kf;
  if (ao[0] !== Gn.credentials)
    ((kf = () => fetchOAuthRefreshKnownDeadStatus(Gn.credentials)), (ao[0] = Gn.credentials), (ao[1] = kf));
  else kf = ao[1];
  let [Wu] = d(kf),
    Df;
  if (ao[2] !== Uu) ((Df = () => Uu()), (ao[2] = Uu), (ao[3] = Df));
  else Df = ao[3];
  let [Oo] = d(Df),
    Tf;
  if (ao[4] !== Oo) ((Tf = () => Oo?.current()), (ao[4] = Oo), (ao[5] = Tf));
  else Tf = ao[5];
  let [ju, Eb] = d(Tf),
    vf,
    xf;
  if (ao[6] !== Oo)
    ((vf = () => {
      let Mf = !0;
      return (
        Oo?.settled.then(() => {
          if (Mf) Eb(Oo.current());
        }),
        () => {
          Mf = !1;
        }
      );
    }),
      (xf = [Oo]),
      (ao[6] = Oo),
      (ao[7] = vf),
      (ao[8] = xf));
  else ((vf = ao[7]), (xf = ao[8]));
  E(vf, xf);
  let Kn = useHasVirtualScrollViewport() ? 1 : void 0,
    yr;
  if (ao[9] !== Wu || ao[10] !== Gn || ao[11] !== ju)
    ((yr = e(Dn, {
      fallback: null,
      children: e(Tr, {
        context: Gn,
        accountStatusRead: Wu,
        webSetupStatus: ju,
      }),
    })),
      (ao[9] = Wu),
      (ao[10] = Gn),
      (ao[11] = ju),
      (ao[12] = yr));
  else yr = ao[12];
  let Sr;
  if (ao[13] !== Fu)
    ((Sr = e(Dn, { fallback: null, children: e(vr, { promise: Fu }) })),
      (ao[13] = Fu),
      (ao[14] = Sr));
  else Sr = ao[14];
  let br;
  if (ao[15] !== Kn || ao[16] !== yr || ao[17] !== Sr)
    ((br = r(Box, {
      flexDirection: "column",
      gap: 1,
      flexGrow: Kn,
      children: [yr, Sr],
    })),
      (ao[15] = Kn),
      (ao[16] = yr),
      (ao[17] = Sr),
      (ao[18] = br));
  else br = ao[18];
  let Ef;
  if (ao[19] === MEMO_CACHE_SENTINEL)
    ((Ef = e(Text, {
      dimColor: !0,
      children: e(ActionKeybindingHint, {
        action: "confirm:no",
        context: "Settings",
        fallback: "Esc",
        description: "cancel",
      }),
    })),
      (ao[19] = Ef));
  else Ef = ao[19];
  let Af;
  if (ao[20] !== Kn || ao[21] !== br)
    ((Af = r(Box, {
      flexDirection: "column",
      gap: 1,
      flexGrow: Kn,
      children: [br, Ef],
    })),
      (ao[20] = Kn),
      (ao[21] = br),
      (ao[22] = Af));
  else Af = ao[22];
  return Af;
}
function Tr(Hu) {
  let Qs = _(15),
    { context: Vu, accountStatusRead: Rf, webSetupStatus: Gu } = Hu,
    Ku = Rf === void 0 ? void 0 : kn(Rf),
    Ab = useAppStateSelector(Ff),
    zu = useMainLoopModelOverride() ?? Ab,
    Yu = useAppStateSelector(Uf),
    [qu] = useTheme(),
    Xu = useSession(Wf),
    Ju = useSession(jf),
    If;
  if (
    Qs[0] !== Ku ||
    Qs[1] !== Vu ||
    Qs[2] !== Ju ||
    Qs[3] !== zu ||
    Qs[4] !== Yu ||
    Qs[5] !== Xu ||
    Qs[6] !== qu ||
    Qs[7] !== Gu
  )
    ((If = splitAnthropicOnlyStatusSections([
      od({ sessionId: Xu, cwd: Ju, accountStatus: Ku, webSetupStatus: Gu }),
      nd({ mainLoopModel: zu, mcp: Yu, theme: qu, context: Vu }),
    ])),
      (Qs[0] = Ku),
      (Qs[1] = Vu),
      (Qs[2] = Ju),
      (Qs[3] = zu),
      (Qs[4] = Yu),
      (Qs[5] = Xu),
      (Qs[6] = qu),
      (Qs[7] = Gu),
      (Qs[8] = If));
  else If = Qs[8];
  let Qu = If,
    _f;
  if (Qs[9] === MEMO_CACHE_SENTINEL)
    ((_f =
      isRemoteActive() &&
      r(Text, {
        dimColor: !0,
        children: [
          "Model and cwd are the",
          " ",
          getRemoteTransport()?.sessionId ? "cloud" : "remote",
          " session's; the other rows describe this terminal. /mcp asks the session too.",
        ],
      })),
      (Qs[9] = _f));
  else _f = Qs[9];
  let Pf;
  if (Qs[10] === MEMO_CACHE_SENTINEL) ((Pf = [{ bold: !0 }, { width: "fill" }]), (Qs[10] = Pf));
  else Pf = Qs[10];
  let Cr;
  if (Qs[11] !== Qu)
    ((Cr = Qu.filter(Hf).flatMap(Vf)), (Qs[11] = Qu), (Qs[12] = Cr));
  else Cr = Qs[12];
  let Of;
  if (Qs[13] !== Cr)
    ((Of = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [_f, e(Table, { columns: Pf, children: Cr })],
    })),
      (Qs[13] = Cr),
      (Qs[14] = Of));
  else Of = Qs[14];
  return Of;
}
function vr(Fb) {
  let ed = _(5),
    { promise: Ub } = Fb,
    wr = kn(Ub);
  if (wr.length === 0) {
    return null;
  }
  let Nf;
  if (ed[0] === MEMO_CACHE_SENTINEL)
    ((Nf = e(Text, { bold: !0, children: "System diagnostics" })), (ed[0] = Nf));
  else Nf = ed[0];
  let kr;
  if (ed[1] !== wr) ((kr = wr.map(Gf)), (ed[1] = wr), (ed[2] = kr));
  else kr = ed[2];
  let Bf;
  if (ed[3] !== kr)
    ((Bf = r(Box, {
      flexDirection: "column",
      paddingBottom: 1,
      children: [Nf, kr],
    })),
      (ed[3] = kr),
      (ed[4] = Bf));
  else Bf = ed[4];
  return Bf;
}
F();
F();
function Pr(qb) {
  let Lo = _(17),
    { currentVersion: Er, onChoice: zn } = qb,
    Kf;
  if (Lo[0] !== zn)
    ((Kf = function ei(Xb) {
      zn(Xb);
    }),
      (Lo[0] = zn),
      (Lo[1] = Kf));
  else Kf = Lo[1];
  let ei = Kf,
    zf;
  if (Lo[2] !== zn)
    ((zf = function ti() {
      zn("cancel");
    }),
      (Lo[2] = zn),
      (Lo[3] = zf));
  else zf = Lo[3];
  let ti = zf,
    Ar;
  if (Lo[4] !== Er)
    ((Ar = r(Text, {
      children: [
        "The stable channel may have an older version than what you're currently running (",
        Er,
        ").",
      ],
    })),
      (Lo[4] = Er),
      (Lo[5] = Ar));
  else Ar = Lo[5];
  let Yf;
  if (Lo[6] === MEMO_CACHE_SENTINEL)
    ((Yf = e(Text, {
      dimColor: !0,
      children: "How would you like to handle this?",
    })),
      (Lo[6] = Yf));
  else Yf = Lo[6];
  let qf;
  if (Lo[7] === MEMO_CACHE_SENTINEL)
    ((qf = {
      label: "Allow possible downgrade to stable version",
      value: "downgrade",
    }),
      (Lo[7] = qf));
  else qf = Lo[7];
  const sd = `Stay on current version (${Er}) until stable catches up`;
  let Rr;
  if (Lo[8] !== sd)
    ((Rr = [qf, { label: sd, value: "stay" }]), (Lo[8] = sd), (Lo[9] = Rr));
  else Rr = Lo[9];
  let _r;
  if (Lo[10] !== ei || Lo[11] !== Rr)
    ((_r = e(Select, { options: Rr, onChange: ei })),
      (Lo[10] = ei),
      (Lo[11] = Rr),
      (Lo[12] = _r));
  else _r = Lo[12];
  let Xf;
  if (Lo[13] !== ti || Lo[14] !== Ar || Lo[15] !== _r)
    ((Xf = r(de, {
      title: "Switch to Stable Channel",
      onCancel: ti,
      color: "permission",
      hideBorder: !0,
      hideInputGuide: !0,
      children: [Ar, Yf, _r],
    })),
      (Lo[13] = ti),
      (Lo[14] = Ar),
      (Lo[15] = _r),
      (Lo[16] = Xf));
  else Xf = Lo[16];
  return Xf;
}
F();
function rg() {
  return ii(BUILT_IN_OUTPUT_STYLES);
}
var sg = "Default",
  ig =
    "Claude completes coding tasks efficiently and provides concise responses";
function ii(s) {
  return Object.entries(s).map(([c, m]) => ({
    label: m?.name ?? sg,
    value: c,
    description: m?.description ?? ig,
  }));
}
function Fr(dC) {
  let ni = _(14),
    {
      initialStyle: id,
      onComplete: rd,
      onCancel: ad,
      isStandaloneCommand: Jf,
    } = dC,
    ld = useSession(),
    { storageV5: cd } = useStorageV5Context(),
    Qf;
  if (ni[0] !== ld.project.cwd || ni[1] !== cd)
    ((Qf = () => getAllOutputStyles(ld.project.cwd, cd).then(ii).catch(rg)),
      (ni[0] = ld.project.cwd),
      (ni[1] = cd),
      (ni[2] = Qf));
  else Qf = ni[2];
  let [ud] = d(Qf);
  const md = !Jf,
    pd = !Jf;
  let Zf;
  if (ni[3] === MEMO_CACHE_SENTINEL)
    ((Zf = e(Box, {
      marginTop: 1,
      children: e(Text, {
        dimColor: !0,
        children: "This changes how Claude Code communicates with you",
      }),
    })),
      (ni[3] = Zf));
  else Zf = ni[3];
  let eg;
  if (ni[4] === MEMO_CACHE_SENTINEL)
    ((eg = e(Text, { dimColor: !0, children: "Loading output styles\u2026" })),
      (ni[4] = eg));
  else eg = ni[4];
  let Or;
  if (ni[5] !== id || ni[6] !== rd || ni[7] !== ud)
    ((Or = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        Zf,
        e(Dn, {
          fallback: eg,
          children: e($r, {
            styleOptionsPromise: ud,
            initialStyle: id,
            onComplete: rd,
          }),
        }),
      ],
    })),
      (ni[5] = id),
      (ni[6] = rd),
      (ni[7] = ud),
      (ni[8] = Or));
  else Or = ni[8];
  let tg;
  if (ni[9] !== ad || ni[10] !== md || ni[11] !== pd || ni[12] !== Or)
    ((tg = e(de, {
      title: "Preferred output style",
      onCancel: ad,
      hideInputGuide: md,
      hideBorder: pd,
      children: Or,
    })),
      (ni[9] = ad),
      (ni[10] = md),
      (ni[11] = pd),
      (ni[12] = Or),
      (ni[13] = tg));
  else tg = ni[13];
  return tg;
}
function $r(mC) {
  let si = _(15),
    { styleOptionsPromise: pC, initialStyle: lo, onComplete: fd } = mC,
    Xn = kn(pC),
    og;
  if (si[0] !== lo || si[1] !== Xn)
    ((og = isCustomizationDisabled("outputStyles") && !Xn.some((fC) => fC.value === lo)),
      (si[0] = lo),
      (si[1] = Xn),
      (si[2] = og));
  else og = si[2];
  let gd = og,
    Lr;
  if (si[3] !== lo || si[4] !== gd)
    ((Lr =
      gd &&
      e(Text, {
        dimColor: !0,
        children: `Your saved output style "${lo}" is a custom style disabled in safe mode \u2014 ${getSafeModeExitHint()} to use it; selecting a style here replaces it`,
      })),
      (si[3] = lo),
      (si[4] = gd),
      (si[5] = Lr));
  else Lr = si[5];
  let Nr;
  if (si[6] !== fd) ((Nr = (gC) => fd(gC)), (si[6] = fd), (si[7] = Nr));
  else Nr = si[7];
  let Br;
  if (si[8] !== lo || si[9] !== Xn || si[10] !== Nr)
    ((Br = e(Select, {
      options: Xn,
      onChange: Nr,
      visibleOptionCount: 10,
      defaultValue: lo,
    })),
      (si[8] = lo),
      (si[9] = Xn),
      (si[10] = Nr),
      (si[11] = Br));
  else Br = si[11];
  let ng;
  if (si[12] !== Lr || si[13] !== Br)
    ((ng = r(N, { children: [Lr, Br] })),
      (si[12] = Lr),
      (si[13] = Br),
      (si[14] = ng));
  else ng = si[14];
  return ng;
}
F();
function Hr(xC) {
  let sn = _(13),
    { initialLanguage: ag, onComplete: hd, onCancel: MC } = xC,
    [Ur, EC] = d(ag),
    [yd, AC] = d((ag ?? "").length),
    lg;
  if (sn[0] === MEMO_CACHE_SENTINEL) ((lg = { context: "Settings" }), (sn[0] = lg));
  else lg = sn[0];
  useKeybinding("confirm:no", MC, lg);
  let cg;
  if (sn[1] !== Ur || sn[2] !== hd)
    ((cg = function ri() {
      let RC = Ur?.trim();
      hd(RC || void 0);
    }),
      (sn[1] = Ur),
      (sn[2] = hd),
      (sn[3] = cg));
  else cg = sn[3];
  let ri = cg,
    ug;
  if (sn[4] === MEMO_CACHE_SENTINEL)
    ((ug = e(Text, {
      children: "Enter your preferred response and voice language:",
    })),
      (sn[4] = ug));
  else ug = sn[4];
  let dg;
  if (sn[5] === MEMO_CACHE_SENTINEL) ((dg = e(Text, { children: figures.pointer })), (sn[5] = dg));
  else dg = sn[5];
  const Sd = Ur ?? "";
  let Wr;
  if (sn[6] !== yd || sn[7] !== ri || sn[8] !== Sd)
    ((Wr = r(Box, {
      flexDirection: "row",
      gap: 1,
      children: [
        dg,
        e(hn, {
          value: Sd,
          onChange: EC,
          onSubmit: ri,
          focus: !0,
          showCursor: !0,
          placeholder: `e.g., Japanese, \u65E5\u672C\u8A9E, Espa\xF1ol${figures.ellipsis}`,
          columns: 60,
          cursorOffset: yd,
          onChangeCursorOffset: AC,
        }),
      ],
    })),
      (sn[6] = yd),
      (sn[7] = ri),
      (sn[8] = Sd),
      (sn[9] = Wr));
  else Wr = sn[9];
  let mg;
  if (sn[10] === MEMO_CACHE_SENTINEL)
    ((mg = e(Text, {
      dimColor: !0,
      children: "Leave empty for default (English)",
    })),
      (sn[10] = mg));
  else mg = sn[10];
  let pg;
  if (sn[11] !== Wr)
    ((pg = r(Box, { flexDirection: "column", gap: 1, children: [ug, Wr, mg] })),
      (sn[11] = Wr),
      (sn[12] = pg));
  else pg = sn[12];
  return pg;
}
F();
function Eg(QC) {
  return Math.max(0, QC - 1);
}
function Ag() {}
function ea(qC) {
  let Qe = _(43),
    {
      channel: bd,
      showInputNeededRow: Jn,
      showDoneRow: Qn,
      inputNeededEnabled: Cd,
      doneEnabled: wd,
      onCycleChannel: kd,
      onToggleInputNeeded: Dd,
      onToggleDone: Td,
      onClose: vd,
    } = qC,
    [Zn, fg] = d(0),
    gg = C(null);
  useFocusTrap(gg, !0);
  let hg;
  if (Qe[0] !== bd) ((hg = formatNotificationChannelLabel(bd)), (Qe[0] = bd), (Qe[1] = hg));
  else hg = Qe[1];
  const xd = `\u2039 ${hg} \u203A`;
  let Vr;
  if (Qe[2] !== kd || Qe[3] !== xd)
    ((Vr = { id: "channel", label: "Channel", value: xd, activate: kd }),
      (Qe[2] = kd),
      (Qe[3] = xd),
      (Qe[4] = Vr));
  else Vr = Qe[4];
  let Gr;
  if (Qe[5] !== Cd || Qe[6] !== Dd || Qe[7] !== Jn)
    ((Gr = Jn
      ? [
          {
            id: "inputNeeded",
            label: "Notify when Claude needs you",
            value: String(Cd),
            activate: Dd,
          },
        ]
      : []),
      (Qe[5] = Cd),
      (Qe[6] = Dd),
      (Qe[7] = Jn),
      (Qe[8] = Gr));
  else Gr = Qe[8];
  let Kr;
  if (Qe[9] !== wd || Qe[10] !== Td || Qe[11] !== Qn)
    ((Kr = Qn
      ? [
          {
            id: "done",
            label: "Notify when Claude is done",
            value: String(wd),
            activate: Td,
          },
        ]
      : []),
      (Qe[9] = wd),
      (Qe[10] = Td),
      (Qe[11] = Qn),
      (Qe[12] = Kr));
  else Kr = Qe[12];
  let yg;
  if (Qe[13] !== Vr || Qe[14] !== Gr || Qe[15] !== Kr)
    ((yg = [Vr, ...Gr, ...Kr]),
      (Qe[13] = Vr),
      (Qe[14] = Gr),
      (Qe[15] = Kr),
      (Qe[16] = yg));
  else yg = Qe[16];
  let co = yg,
    Sg;
  if (Qe[17] !== Zn || Qe[18] !== co)
    ((Sg = function Bo() {
      co[Zn]?.activate();
    }),
      (Qe[17] = Zn),
      (Qe[18] = co),
      (Qe[19] = Sg));
  else Sg = Qe[19];
  let Bo = Sg,
    bg;
  if (Qe[20] === MEMO_CACHE_SENTINEL) ((bg = () => fg(Eg)), (Qe[20] = bg));
  else bg = Qe[20];
  let zr;
  if (Qe[21] !== co.length)
    ((zr = () => fg((XC) => Math.min(co.length - 1, XC + 1))),
      (Qe[21] = co.length),
      (Qe[22] = zr));
  else zr = Qe[22];
  let Cg;
  if (Qe[23] !== Bo || Qe[24] !== zr)
    ((Cg = { "select:previous": bg, "select:next": zr, "select:accept": Bo }),
      (Qe[23] = Bo),
      (Qe[24] = zr),
      (Qe[25] = Cg));
  else Cg = Qe[25];
  let wg;
  if (Qe[26] === MEMO_CACHE_SENTINEL) ((wg = { context: "Select", isActive: !0 }), (Qe[26] = wg));
  else wg = Qe[26];
  useKeybindings(Cg, wg);
  let kg;
  if (Qe[27] !== Bo)
    ((kg = function ai(Dg) {
      if (Dg.key === " ") (Dg.preventDefault(), Bo());
    }),
      (Qe[27] = Bo),
      (Qe[28] = kg));
  else kg = Qe[28];
  let ai = kg,
    Tg;
  if (Qe[29] === MEMO_CACHE_SENTINEL)
    ((Tg = r(DotSeparatedList, {
      children: [
        e(KeybindingHint, { chord: ["up", "down"], action: "navigate" }),
        e(KeybindingHint, { chord: "enter", action: "change" }),
        e(ActionKeybindingHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "close",
        }),
      ],
    })),
      (Qe[29] = Tg));
  else Tg = Qe[29];
  let Yr;
  if (Qe[30] !== Zn || Qe[31] !== co)
    ((Yr = co.map((Md, JC) => {
      let qr = JC === Zn;
      return r(
        SelectableRow,
        {
          active: qr,
          children: [
            e(Box, {
              width: 34,
              flexShrink: 0,
              marginRight: 1,
              children: r(Text, {
                color: qr ? "suggestion" : void 0,
                wrap: "truncate-end",
                children: [
                  r(Text, {
                    "aria-hidden": !0,
                    children: [qr ? figures.pointer : " ", " "],
                  }),
                  Md.label,
                ],
              }),
            }),
            e(Text, {
              color: qr ? "suggestion" : void 0,
              wrap: "truncate-end",
              children: Md.value,
            }),
          ],
        },
        Md.id,
      );
    })),
      (Qe[30] = Zn),
      (Qe[31] = co),
      (Qe[32] = Yr));
  else Yr = Qe[32];
  let Jr;
  if (Qe[33] !== Qn || Qe[34] !== Jn)
    ((Jr = (Jn || Qn) && e(rn, {})),
      (Qe[33] = Qn),
      (Qe[34] = Jn),
      (Qe[35] = Jr));
  else Jr = Qe[35];
  let Zr;
  if (Qe[36] !== ai || Qe[37] !== Yr || Qe[38] !== Jr)
    ((Zr = r(Box, {
      flexDirection: "column",
      ref: gg,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: ai,
      children: [Yr, Jr],
    })),
      (Qe[36] = ai),
      (Qe[37] = Yr),
      (Qe[38] = Jr),
      (Qe[39] = Zr));
  else Zr = Qe[39];
  let vg;
  if (Qe[40] !== vd || Qe[41] !== Zr)
    ((vg = e(de, {
      title: "Notifications",
      onCancel: vd,
      hideBorder: !0,
      inputGuide: Tg,
      children: Zr,
    })),
      (Qe[40] = vd),
      (Qe[41] = Zr),
      (Qe[42] = vg));
  else vg = Qe[42];
  return vg;
}
function rn() {
  let ZC = _(1);
  if (At(subscribePushReachability, getPushReachability, Ag)?.has_active_channel !== !1) {
    return null;
  }
  let Mg;
  if (ZC[0] === MEMO_CACHE_SENTINEL)
    ((Mg = r(Text, {
      color: "warning",
      wrap: "truncate-end",
      children: [
        "  ",
        WARNING_GLYPH,
        " No mobile registered \xB7",
        " ",
        e(Link, {
          url: "https://claude.com/download#mobile",
          children: "get the app",
        }),
        " and turn on notif",
      ],
    })),
      (ZC[0] = Mg));
  else Mg = ZC[0];
  return Mg;
}
var ta = [
    "Appearance",
    "Model & output",
    "Display",
    "Input & controls",
    "Connections",
    "Advanced",
    "Experimental",
    "Internal",
  ],
  Rd = new Set(["Advanced", "Experimental", "Internal"]),
  li = [
    {
      id: "autoUpdatesChannel",
      isSet: ({ settingsData: s }) => s?.autoUpdatesChannel !== void 0,
    },
    {
      id: "worktreeBaseRef",
      isSet: ({ settingsData: s }) => s?.worktree?.baseRef !== void 0,
    },
    {
      id: "gitignore",
      isSet: ({ globalConfig: s }) =>
        s.respectGitignore !== DEFAULT_GLOBAL_CONFIG.respectGitignore,
    },
    {
      id: "copyFullResponse",
      isSet: ({ globalConfig: s }) =>
        s.copyFullResponse !== DEFAULT_GLOBAL_CONFIG.copyFullResponse,
    },
    {
      id: "recap",
      isSet: ({ settingsData: s }) => s?.awaySummaryEnabled !== void 0,
    },
  ],
  Rg = new Set(li.map((s) => s.id));
function oa(s) {
  return Rg.has(s);
}
function Id(s, c) {
  return s === "Advanced"
    ? oa(c)
      ? "ADVANCED \u2014 MOVING TO SETTINGS.JSON"
      : "ADVANCED"
    : s.toUpperCase();
}
var _d = {
    Appearance: ["theme", "language", "reduceMotion"],
    "Model & output": [
      "model",
      "fast",
      "switchModelsOnFlag",
      "autoContinueAtUsageLimit",
      "outputStyle",
      "defaultView",
      "verbose",
      "autoCompact",
      "thinking",
      "permissionMode",
      "useAutoModeDuringPlan",
    ],
    Display: [
      "autoScroll",
      "progressBar",
      "tips",
      "turnDuration",
      "timeFormat",
      "prStatus",
      "externalEditorContext",
    ],
    "Input & controls": [
      "editor",
      "askUserQuestionTimeout",
      "modelProposedGoals",
      "copyOnSelect",
      "promptSuggestionEnabled",
      "agentsView",
      "checkpoints",
      "workflows",
      "workflowKeywordTriggerEnabled",
      "artifacts",
    ],
    Connections: [
      "notifChannel",
      "inputNeededNotifEnabled",
      "agentPushNotifEnabled",
      "autoConnectIde",
      "autoInstallIdeExtension",
      "diffTool",
      "chrome",
      "remoteControl",
      "remoteHomeSettings",
      "dialogExpiry",
      "crossSessionInbound",
      "showExternalIncludesDialog",
      "apiKey",
    ],
    Advanced: li.map((s) => s.id),
    Experimental: [
      "precomputeCompactionEnabled",
      "timestamps",
      "showStatusInTerminalTab",
      "teammateMode",
    ],
    Internal: [
      ...[],
      "snipEnabled",
      "snipDebug",
      "doneMeansMerged",
      "autoUploadSessions",
      "autoAddRemoteControlDaemonWorker",
      "autofixPrMode",
    ],
  },
  Ig = new Map(ta.flatMap((s) => _d[s].map((c) => [c, s]))),
  Ed = new Map(ta.flatMap((s, c) => _d[s].map((m, T) => [m, c * 1000 + T])));
function ts(s) {
  return Ig.get(s) ?? "Advanced";
}
var Ad = ta.indexOf("Advanced") * 1000 + 999;
function Pd(s) {
  return s
    .map((c, m) => ({ item: c, i: m }))
    .sort((c, m) => {
      let T = (Ed.get(c.item.id) ?? Ad) - (Ed.get(m.item.id) ?? Ad);
      return T !== 0 ? T : c.i - m.i;
    })
    .map(({ item: c }) => c);
}
var _g = /^[a-z][A-Za-z0-9]{0,63}$/,
  Pg = /^[A-Za-z0-9_-]{1,64}$/,
  Og = new Set(["Allowed", "Not allowed"]);
function na(s) {
  return _g.test(s) ? fromSanitizer_SANITIZER_OUTPUT_ONLY(s) : S("nonconforming");
}
function Ld(s) {
  return Pg.test(s) || Og.has(s) ? fromSanitizer_SANITIZER_OUTPUT_ONLY(s) : S("nonconforming");
}
function Gg() {
  return "";
}
function Kg() {
  return "";
}
function zg(Uk) {
  return Uk.slice(0, -1);
}
function Yg(Hd, Wk) {
  return r(Text, { children: [Wk + 1, ". ", Hd.label, ": ", Hd.value] }, Hd.id);
}
function Hg(s, c) {
  if (getStringWidth(s) <= c) return s;
  let m = Math.max(1, c - 1),
    T = 0,
    R = 0;
  while (R < s.length) {
    let v = s.charCodeAt(R),
      A = v >= 55296 && v <= 56319 ? 2 : 1,
      H = getStringWidth(s.slice(R, R + A));
    if (T + H > m) break;
    ((T += H), (R += A));
  }
  return s.slice(0, R) + "\u2026";
}
function da(s) {
  return s.map((c) => c.id).join("\x00");
}
function ga({
  onClose: s,
  context: c,
  setTabsHidden: m,
  onIsSearchModeChange: T,
  contentHeight: R,
}) {
  let v = isFullscreen(),
    { storageV5: A, credentials: H } = useStorageV5Context(),
    B = useSession(),
    Y = useAppState(),
    G = useAppStateSession(),
    { addNotification: j } = useNotificationQueue(),
    O = C(0),
    q = C(0),
    { headerFocused: Z, focusHeader: Q } = Jd(),
    se = useHasVirtualScrollViewport(),
    [, ce] = useTheme(),
    K = useThemeSetting(),
    [I, X] = d(getEffectiveConfig),
    J = C(I),
    [me, he] = d(() => ({
      ...getInitialSettings(),
      ...getSecuritySensitiveSettings(),
      feedbackDrafts: getFeedbackDraftsSetting(),
      autoContinueAtUsageLimit: getEffectiveAutoContinueAtUsageLimit(),
    })),
    Re = C(getInitialSettings()),
    [Ie, qe] = d(me?.outputStyle || DEFAULT_OUTPUT_STYLE_NAME),
    ke = C(Ie),
    [Xe, Et] = d(() => getCurrentProjectConfig().hasClaudeMdExternalIncludesApproved === !0),
    [mt, Kt] = d(me?.language),
    tr = C(mt),
    [fe, He, Je] = useStateWithGetter(0),
    [, Rt] = d(0),
    rt = C(null),
    ft = C(""),
    [Ue, Lt] = d(0),
    at = useIsScreenReaderEnabled(),
    [tt, zt] = d(!at),
    qo = useTerminalFocus(),
    { rows: Fn, columns: ro } = useTerminalSize(),
    or = C(null),
    [nr, Lp] = d(1),
    Tu = Math.min(44, Math.max(14, ro - 16)),
    Np = R ?? Math.min(Math.floor(Fn * 0.8), 30),
    Us = !isRemoteActive()
      ? null
      : getRemoteTransport()?.sessionId !== void 0
        ? "Changes here update this machine's settings and future cloud sessions, not the running one."
        : "Changes here update this machine's settings, not the running remote session.",
    Bp = Us === null ? 0 : Math.ceil((Us.length + 2) / Math.max(1, ro - 4)),
    Xo = Math.max(5, Np - 8 - nr - Bp),
    Ws = useAppStateSelector((k) => k.mainLoopModel),
    $p = useAppStateSelector((k) => k.mainLoopModelForSession),
    vu = useMainLoopModelOverride() ?? Ws,
    Fp = useAppStateSelector((k) => k.verbose),
    xu = useAppStateSelector((k) => k.thinkingEnabled),
    Mu = useAppStateSelector((k) => (isFastModeEnabled() ? k.fastMode : !1)),
    Up = useAppStateSelector((k) => k.promptSuggestionEnabled),
    Wp = useAppStateSelector((k) => k.awaySummaryEnabled),
    Hp = import.meta.require("../../01-核心基础设施/核心工具-未归类/chunk-1p3batyk.js").isBriefEntitled(),
    Vp = useSetAppState(),
    [Eu, Gp] = d({}),
    Kp = C(xu);
  E(() => subscribePushPreferencesHydrated(() => X(getEffectiveConfig())), []);
  let [Un, js] = d(!1),
    [Jo, Hs] = d(null),
    [Fe, De] = d(null),
    [Au, Ru] = d(null);
  dn(() => {
    if (!or.current) return;
    let k = measureElement(or.current).height;
    if (k !== nr) Lp(k);
  }, [Z, tt, ro, Fn, nr, Fe]);
  let [sr, ir] = d(0),
    {
      query: Yt,
      setQuery: Vs,
      cursorOffset: zp,
      handleKeyDown: Iu,
      handlePaste: Yp,
    } = useVimModeInput({
      isActive: tt && Fe === null && !Z,
      onExit: () => zt(!1),
      onExitUp: Q,
      passthroughCtrlKeys: ["c", "d"],
    }),
    _u = !Z;
  E(() => {
    T(_u);
  }, [_u, T]);
  let Xp = hasConnectedIdeClient(c.options.mcpClients),
    Jp = !a.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING,
    Pu = resolveSetting("disableWorkflows", !1),
    Ou = resolveSetting("enableWorkflows", !1),
    Qp =
      areWorkflowsAvailable() &&
      (Pu.value !== !0 || Pu.source === "userSettings") &&
      (Ou.source === "default" || Ou.source === "userSettings"),
    Zp = !isWorkflowSizeGuidelineConfigured(),
    ef = isAutoContinueSettingUserControlled(),
    tf = isArtifactConfigToggleable(),
    Lu = kn(getSessionMemoryFiles(B, !0, A, H)),
    of = hasExternalInstructionIncludes(Lu),
    bt = getAutoUpdaterDisabledReason(),
    rr = isPushNotificationsEnabled() && !isEssentialTrafficOnly() && hasStoredOAuthToken(),
    {
      settings: Po,
      helpers: {
        onChangeMainModelConfig: nf,
        changeNotifChannel: sf,
        changeInputNeededNotif: rf,
        changeAgentPushNotif: cf,
      },
    } = createSettingsViewModel({
      globalConfig: I,
      settingsData: me,
      themeSetting: K,
      currentOutputStyle: Ie,
      currentLanguage: mt,
      externalIncludesApproved: Xe,
      thinkingEnabled: xu,
      verbose: Fp,
      mainLoopModel: Ws,
      currentModel: vu,
      isFastMode: Mu,
      promptSuggestionEnabled: Up,
      awaySummaryEnabled: Wp,
      showDefaultViewPicker: Hp,
      pushTogglesVisible: rr,
      crossSessionInboxRowVisible: isCrossSessionMessagingEnabled(),
      isConnectedToIde: Xp,
      inAppSelection: v,
      isFileCheckpointingAvailable: Jp,
      workflowsToggleable: Qp,
      workflowSizeGuidelineToggleable: Zp,
      autoContinueAtUsageLimitToggleable: ef,
      artifactToggleable: tf,
      shouldShowExternalIncludesToggle: of,
      autoUpdaterDisabledReason: bt,
      storageV5: A,
      modelSwitchHooks: {
        session: G,
        readState: Y.getState,
        latestPick: O,
        latestFastPick: q,
      },
      setAppState: Vp,
      setTheme: ce,
      setGlobalConfig: X,
      setSettingsData: he,
      setChanges: Gp,
    }),
    ot = isExpandedSettingsUiEnabled(),
    we = V(() => {
      let k = ot ? Pd(Po) : Po;
      if (!Yt) return k;
      let oe = Yt.toLowerCase();
      return k.filter((ne) => {
        if (ne.id.toLowerCase().includes(oe)) return !0;
        if (
          ("searchText" in ne ? ne.searchText : ne.label)
            .toLowerCase()
            .includes(oe)
        )
          return !0;
        if (ne.type === "enum")
          return ne.options.some((Ae) => Ae.toLowerCase().includes(oe));
        return !1;
      });
    }, [Po, Yt, ot]);
  E(() => {
    let k = rt.current;
    if (at || k === null) return;
    if (tt || !we.some((ne) => ne.id === k)) {
      rt.current = null;
      return;
    }
    let oe = da(we);
    if (oe !== ft.current) {
      ft.current = oe;
      let ne = we.findIndex((le) => le.id === k);
      if (ne !== -1 && ne !== fe) He(ne);
      return;
    }
    if (we[fe]?.id !== k) rt.current = null;
  }, [at, fe, tt, we]);
  let Ks =
      At(subscribePushReachability, getPushReachability, () => {
        return;
      })?.has_active_channel === !1
        ? 1
        : 0,
    Wn = Math.max(1, ro - 2 * (se ? Sv + Vx : WA)),
    uf = Math.max(1, Wn - 7),
    ar = Hg(Yt, uf),
    df = Math.min(zp, ar.length),
    lr =
      countOccurrences(
        Vm(ma, Math.max(1, Wn - 2)),
        `
`,
      ) + 1,
    cr =
      Jo === null
        ? 0
        : countOccurrences(
            Vm(Jo, Math.max(1, Wn - 2)),
            `
`,
          ) + 1,
    ur = V(() => {
      let k = new Map();
      for (let oe of Po)
        if (oe.lock !== void 0)
          k.set(
            oe.id,
            countOccurrences(
              Vm(oe.lock.reason, Math.max(1, Wn - 4)),
              `
`,
            ) + 1,
          );
      return k;
    }, [Po, Wn]),
    mf = [...ur].map(([k, oe]) => `${k}=${oe}`).join(","),
    Hn = re(
      (k) => {
        if (
          (k === "inputNeededNotifEnabled" || k === "agentPushNotifEnabled") &&
          Ks > 0
        )
          return Ks;
        if (k === "thinking" && Un) return lr;
        return (k === "remoteHomeSettings" ? cr : 0) + (ur.get(k) ?? 0);
      },
      [Ks, Un, lr, cr, ur],
    ),
    Zo = V(() => pa(we, Ue, Xo, ot, Hn), [we, Ue, Xo, ot, Hn]),
    zs = re((k) => Vd(we, k, Xo, ot, Hn), [we, Xo, ot, Hn]),
    [pf, ff] = d(Yt);
  if (Yt !== pf) (ff(Yt), He(0), Lt(0));
  let dr = `${Ks}:${Un ? lr : 0}:${cr}:${mf}`,
    [gf, hf] = d(dr);
  if (dr !== gf)
    (hf(dr),
      Lt((k) => {
        if (fe < k) return fe;
        if (fe >= k + Zo) return zs(fe);
        return k;
      }));
  E(() => {
    if (fe >= we.length) {
      let k = Math.max(0, we.length - 1);
      (He(k), Lt(zs(k)));
      return;
    }
    Lt((k) => {
      if (fe < k) return fe;
      if (fe >= k + Zo) return zs(fe);
      return k;
    });
  }, [we.length, fe, He, Zo, zs]);
  let Nu = re(() => {
    if (Fe !== null) return;
    let k = Object.entries(Eu).map(
        ([Ae, Xs]) => (
          logEvent("tengu_config_changed", {
            key: Ae,
            setting: Ae,
            value: hashForTelemetry(String(Xs)),
          }),
          `Set ${Ae} to ${chalk.bold(Xs)}`
        ),
      ),
      oe = xg() ? void 0 : a.ANTHROPIC_API_KEY,
      ne = Boolean(
        oe && J.current.customApiKeyResponses?.approved?.includes(getApiKeyFingerprint(oe)),
      ),
      le = Boolean(oe && I.customApiKeyResponses?.approved?.includes(getApiKeyFingerprint(oe)));
    if (ne !== le)
      (k.push(`${le ? "Enabled" : "Disabled"} custom API key`),
        logEvent("tengu_config_changed", {
          key: S("env.ANTHROPIC_API_KEY"),
          setting: S("env.ANTHROPIC_API_KEY"),
          value: le,
        }));
    if (I.theme !== J.current.theme) k.push(`Set theme to ${chalk.bold(I.theme)}`);
    if (I.preferredNotifChannel !== J.current.preferredNotifChannel)
      k.push(`Set notifications to ${chalk.bold(I.preferredNotifChannel)}`);
    if (Ie !== ke.current) k.push(`Set output style to ${chalk.bold(Ie)}`);
    if (mt !== tr.current)
      k.push(`Set response language to ${chalk.bold(mt ?? "Default (English)")}`);
    if (I.editorMode !== J.current.editorMode)
      k.push(`Set editor mode to ${chalk.bold(I.editorMode || "emacs")}`);
    if (I.diffTool !== J.current.diffTool)
      k.push(`Set diff tool to ${chalk.bold(I.diffTool)}`);
    if (I.autoConnectIde !== J.current.autoConnectIde)
      k.push(
        `${I.autoConnectIde ? "Enabled" : "Disabled"} auto-connect to IDE`,
      );
    if (I.autoInstallIdeExtension !== J.current.autoInstallIdeExtension)
      k.push(
        `${I.autoInstallIdeExtension ? "Enabled" : "Disabled"} auto-install IDE extension`,
      );
    if (I.autoCompactEnabled !== J.current.autoCompactEnabled)
      k.push(`${I.autoCompactEnabled ? "Enabled" : "Disabled"} auto-compact`);
    if (I.autoScrollEnabled !== J.current.autoScrollEnabled)
      k.push(`${I.autoScrollEnabled ? "Enabled" : "Disabled"} auto-scroll`);
    if (I.respectGitignore !== J.current.respectGitignore)
      k.push(
        `${I.respectGitignore ? "Enabled" : "Disabled"} respect .gitignore in file picker`,
      );
    if (I.copyFullResponse !== J.current.copyFullResponse)
      k.push(
        `${I.copyFullResponse ? "Enabled" : "Disabled"} always copy full response`,
      );
    if (I.copyOnSelect !== J.current.copyOnSelect)
      k.push(`${I.copyOnSelect ? "Enabled" : "Disabled"} copy on select`);
    if (I.leftArrowOpensAgents !== J.current.leftArrowOpensAgents)
      k.push(
        `${(I.leftArrowOpensAgents ?? !0) ? "Enabled" : "Disabled"} ${LEFT_ARROW_GLYPH} opens agents`,
      );
    if (I.defaultToAgentsView !== J.current.defaultToAgentsView)
      k.push(
        `${I.defaultToAgentsView ? "Enabled" : "Disabled"} open agents view by default`,
      );
    if (I.terminalProgressBarEnabled !== J.current.terminalProgressBarEnabled)
      k.push(
        `${I.terminalProgressBarEnabled ? "Enabled" : "Disabled"} terminal progress bar`,
      );
    if (I.showStatusInTerminalTab !== J.current.showStatusInTerminalTab)
      k.push(
        `${I.showStatusInTerminalTab ? "Enabled" : "Disabled"} terminal tab status`,
      );
    if (I.showTurnDuration !== J.current.showTurnDuration)
      k.push(`${I.showTurnDuration ? "Enabled" : "Disabled"} turn duration`);
    if (I.showMessageTimestamps !== J.current.showMessageTimestamps)
      k.push(
        `${I.showMessageTimestamps ? "Enabled" : "Disabled"} message timestamps`,
      );
    if (I.remoteControlAtStartup !== J.current.remoteControlAtStartup) {
      let Ae =
        I.remoteControlAtStartup === void 0
          ? "Reset Remote Control to default"
          : `${I.remoteControlAtStartup ? "Enabled" : "Disabled"} Remote Control for all sessions`;
      k.push(Ae);
    }
    if (me?.autoUpdatesChannel !== Re.current?.autoUpdatesChannel)
      k.push(
        `Set auto-update channel to ${chalk.bold(me?.autoUpdatesChannel === "rc" ? "slow" : (me?.autoUpdatesChannel ?? "latest"))}`,
      );
    if (k.length > 0)
      s(
        k.join(`
`),
      );
    else s("Config dialog dismissed", { display: "system" });
  }, [
    Fe,
    Eu,
    I,
    Ws,
    Ie,
    mt,
    me?.autoUpdatesChannel,
    isFastModeEnabled() ? me?.fastMode : void 0,
    s,
  ]);
  useKeybinding("confirm:no", Nu, {
    context: "Settings",
    isActive: Fe === null && !tt && !Z && !at,
  });
  let mr = re(
      (k) =>
        ot &&
        k.type === "managedEnum" &&
        k.id === "showExternalIncludesDialog" &&
        Xe,
      [ot, Xe],
    ),
    Sf = re(
      (k) =>
        li
          .find((oe) => oe.id === k)
          ?.isSet({ settingsData: me, globalConfig: I }) ?? !1,
      [me, I],
    ),
    pr = re(
      (k, oe) => {
        let ne = k.onChange(oe),
          le = (Ae) => {
            if (Ae && "error" in Ae && Ae.error) {
              j({
                key: "config-change-refused",
                kind: "warning",
                text: Ae.error.message,
                color: "warning",
                priority: "immediate",
              });
              return;
            }
            logEvent("tengu_config_changed", { setting: na(k.id), value: Ld(oe) });
          };
        if (ne instanceof Promise) {
          ne.then(le);
          return;
        }
        le(ne);
      },
      [j],
    ),
    on = V(() => {
      let k = Po.find((oe) => oe.id === Au);
      return k && k.type === "enum" ? k : void 0;
    }, [Po, Au]),
    fr = re(() => {
      (Ru(null), De(null), m(!1));
    }, [m]),
    Ys = re(() => {
      let k = we[Je()];
      if (!k || !k.onChange) return;
      if (rt.current !== null && rt.current !== k.id) {
        let oe = da(we);
        if (oe !== ft.current) {
          ((rt.current = null), (ft.current = oe));
          return;
        }
        rt.current = null;
      }
      if (k.lock !== void 0) {
        if (k.lock.source === "managed") return;
        ((rt.current = k.id),
          (ft.current = da(we)),
          ensurePolicyLimitsLoadedForDiagnostic()
            .catch(() => {})
            .finally(() => Rt((oe) => oe + 1)));
        return;
      }
      if (rt.current === k.id) {
        ((rt.current = null), Rt((oe) => oe + 1));
        return;
      }
      if (k.id === "remoteHomeSettings" && k.value === !1) {
        (De("RemoteHomeSettings"), m(!0));
        return;
      }
      if (k.type === "boolean") {
        let oe = !k.value,
          ne = k.onChange(oe);
        if (k.id === "remoteHomeSettings")
          (Hs(null),
            Promise.resolve(ne).then((le) => {
              if (le?.error) Hs(le.error.message);
              else if (le?.messageSuffix) Hs(`Saved${le.messageSuffix}`);
            }));
        if (
          (Promise.resolve(ne)
            .then((le) => {
              if (k.id === "remoteHomeSettings") return;
              if (le && "error" in le && le.error) {
                j({
                  key: "config-change-refused",
                  kind: "warning",
                  text: le.error.message,
                  color: "warning",
                  priority: "immediate",
                });
                return;
              }
              if (le && le.messageSuffix)
                j({
                  key: "config-change-note",
                  kind: "feedback",
                  text: le.messageSuffix.replace(/^ \u00B7 /, ""),
                  priority: "immediate",
                });
            })
            .catch((le) => {
              (logError(ge(le)),
                j({
                  key: "config-change-refused",
                  kind: "warning",
                  text: `Setting change failed: ${toSingleLineDisplayText(l(le))}`,
                  color: "warning",
                  priority: "immediate",
                }));
            }),
          logEvent("tengu_config_changed", { setting: na(k.id), value: oe }),
          k.id === "thinking")
        ) {
          if (oe === Kp.current) js(!1);
          else if (c.messages.some((Ae) => Ae.type === "assistant")) js(!0);
        }
        return;
      }
      if (mr(k)) {
        (recordExternalIncludesDecision(!1, "config_toggle", A), Et(!1));
        return;
      }
      if (k.id === "agentsView") {
        (ir(0), De("AgentsView"), m(!0));
        return;
      }
      if (k.id === "notifChannel" && k.type === "managedEnum") {
        (De("Notifications"), m(!0));
        return;
      }
      if (
        k.id === "theme" ||
        k.id === "model" ||
        k.id === "showExternalIncludesDialog" ||
        k.id === "outputStyle" ||
        k.id === "language"
      )
        switch (k.id) {
          case "theme":
            (De("Theme"), m(!0));
            return;
          case "model":
            (De("Model"), m(!0));
            return;
          case "showExternalIncludesDialog":
            (De("ExternalIncludes"), m(!0));
            return;
          case "outputStyle":
            (De("OutputStyle"), m(!0));
            return;
          case "language":
            (De("Language"), m(!0));
            return;
        }
      if (k.id === "autoUpdatesChannel") {
        if (bt) {
          (De("EnableAutoUpdates"), m(!0));
          return;
        }
        if ((me?.autoUpdatesChannel ?? "latest") === "latest")
          (De("ChannelDowngrade"), m(!0));
        else
          (updateSettingsForSource(
            "userSettings",
            { autoUpdatesChannel: void 0, minimumVersion: void 0 },
            void 0,
            A,
          ),
            he((ne) => ({
              ...ne,
              autoUpdatesChannel: void 0,
              minimumVersion: void 0,
            })),
            logEvent("tengu_autoupdate_channel_changed", { channel: S("latest") }));
        return;
      }
      if (k.type === "enum" && k.pickToCommit) {
        (Ru(k.id), De("EnumPicker"), m(!0));
        return;
      }
      if (k.type === "enum") {
        let ne = (k.options.indexOf(k.value) + 1) % k.options.length;
        pr(k, k.options[ne]);
        return;
      }
    }, [j, bt, pr, mr, we, Je, me?.autoUpdatesChannel, m, A]),
    qs = (k) => {
      js(!1);
      let oe = Math.max(0, Math.min(we.length - 1, Je() + k));
      He(oe);
      let ne = (le) => (le === "thinking" ? 0 : Hn(le));
      Lt((le) => {
        if (oe < le) return oe;
        let Ae = pa(we, le, Xo, ot, ne);
        if (oe >= le + Ae) return Vd(we, oe, Xo, ot, ne);
        return le;
      });
    };
  useKeybindings(
    {
      "select:previous": () => {
        if (Je() === 0) (js(!1), zt(!0), Lt(0));
        else qs(-1);
      },
      "select:next": () => qs(1),
      "scroll:lineUp": () => qs(-1),
      "scroll:lineDown": () => qs(1),
      "select:accept": () => Ys(),
      "settings:search": () => {
        (zt(!0), Vs(""));
      },
    },
    { context: "Settings", isActive: Fe === null && !tt && !Z && !at },
  );
  let Vn = V(
      () => [
        ...(isAgentsViewAvailable()
          ? [
              {
                id: "leftArrowOpensAgents",
                label: `${LEFT_ARROW_GLYPH} opens agents`,
                value: I.leftArrowOpensAgents ?? !0,
              },
            ]
          : []),
        ...(isAgentsFleetEnabled()
          ? [
              {
                id: "defaultToAgentsView",
                label: "Start in agent view",
                value: I.defaultToAgentsView ?? !1,
              },
            ]
          : []),
      ],
      [I.leftArrowOpensAgents, I.defaultToAgentsView],
    ),
    Bu = re(
      (k) => {
        let oe = Vn[k ?? sr];
        if (!oe) return;
        let ne = !oe.value;
        if (oe.id === "leftArrowOpensAgents")
          (saveGlobalConfig((le) => ({ ...le, leftArrowOpensAgents: ne }), A),
            X((le) => ({ ...le, leftArrowOpensAgents: ne })));
        else
          (saveGlobalConfig((le) => ({ ...le, defaultToAgentsView: ne }), A),
            X((le) => ({ ...le, defaultToAgentsView: ne })));
        logEvent("tengu_config_changed", { setting: fromEnum(oe.id), value: ne });
      },
      [Vn, sr, A],
    );
  useKeybindings(
    {
      "select:previous": () => ir((k) => Math.max(0, k - 1)),
      "select:next": () => ir((k) => Math.min(Vn.length - 1, k + 1)),
      "select:accept": () => Bu(),
    },
    { context: "Settings", isActive: Fe === "AgentsView" && !at },
  );
  let bf = re(
    (k) => {
      if (Fe !== null) return;
      if (Z) return;
      if (tt) {
        if ((Iu(k), k.key === "escape")) {
          if ((k.preventDefault(), Yt.length > 0)) Vs("");
          else zt(!1);
          return;
        }
        if (k.key === "return" || k.key === "down")
          (k.preventDefault(), zt(!1), He(0), Lt(0));
        return;
      }
      if (k.key === "left" || k.key === "right" || k.key === "tab") {
        (k.preventDefault(), Ys());
        return;
      }
      if (k.ctrl || k.meta) return;
      if (k.key.length === 1 && k.key !== " ")
        (k.preventDefault(), zt(!0), Vs(k.key === "/" ? "" : k.key));
    },
    [Fe, Z, tt, Yt, Vs, Iu, He, Ys],
  );
  return e(Box, {
    flexDirection: "column",
    width: "100%",
    ...(at ? {} : { tabIndex: 0, autoFocus: !Z, onKeyDown: bf, onPaste: Yp }),
    children:
      Fe === "Theme"
        ? r(N, {
            children: [
              e(ThemePicker, {
                onThemeSelect: (k) => {
                  (ce(k), De(null), m(!1));
                },
                onCancel: () => {
                  (De(null), m(!1));
                },
                helpText: isCustomizationDisabled("themes")
                  ? `Custom themes are disabled in safe mode \u2014 ${getSafeModeExitHint()} to load them${parseCustomThemeRef(K) ? `. Your saved theme "${parseCustomThemeRef(K)}" is a custom theme; selecting a preset here replaces it` : ""}`
                  : "",
                hideEscToCancel: !0,
                skipExitHandling: !0,
              }),
              e(Box, {
                children: e(Text, {
                  dimColor: !0,
                  italic: !0,
                  children: r(DotSeparatedList, {
                    children: [
                      e(KeybindingHint, { chord: "enter", action: "select" }),
                      e(ActionKeybindingHint, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "cancel",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        : Fe === "Model"
          ? r(N, {
              children: [
                e(ModelPicker, {
                  initial: Ws,
                  sessionModel: $p,
                  skipSettingsWrite: !0,
                  onSelect: (k, oe) => {
                    (Promise.resolve(nf(k, oe))
                      .then((ne) => {
                        if (ne && "error" in ne && ne.error)
                          j({
                            key: "model-switch-blocked",
                            kind: "warning",
                            text: ne.error.message,
                            color: "warning",
                            priority: "immediate",
                          });
                      })
                      .catch((ne) => {
                        (logError(ge(ne)),
                          j({
                            key: "model-switch-blocked",
                            kind: "warning",
                            text: `Model switch failed: ${toSingleLineDisplayText(l(ne))}`,
                            color: "warning",
                            priority: "immediate",
                          }));
                      }),
                      De(null),
                      m(!1));
                  },
                  onCancel: () => {
                    (De(null), m(!1));
                  },
                  showFastModeNotice: isFastModeEnabled() ? Mu && modelSupportsFastMode(vu) && isFastModeAvailable() : !1,
                }),
                e(Text, {
                  dimColor: !0,
                  children: r(DotSeparatedList, {
                    children: [
                      e(KeybindingHint, { chord: "enter", action: "confirm" }),
                      e(ActionKeybindingHint, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "cancel",
                      }),
                    ],
                  }),
                }),
              ],
            })
          : Fe === "RemoteHomeSettings"
            ? e(RemoteHomeSettingsDialog, {
                configHome: getClaudeConfigDir(),
                storageV5: A,
                origin: "config_panel",
                onDone: (k) => {
                  if (
                    (Hs(
                      k === "not_saved"
                        ? "Could not turn this on: forwarding settings to cloud sessions is not enabled for you right now"
                        : null,
                    ),
                    k === "forward")
                  )
                    logEvent("tengu_config_changed", {
                      setting: S("remoteHomeSettings"),
                      value: !0,
                    });
                  if (k === "forward" || k === "keep_local")
                    X((oe) => ({
                      ...oe,
                      remoteHomeSettingsMode: getGlobalConfig().remoteHomeSettingsMode,
                    }));
                  (De(null), m(!1));
                },
              })
            : Fe === "ExternalIncludes"
              ? r(N, {
                  children: [
                    e(ClaudeMdExternalIncludesDialog, {
                      onDone: () => {
                        (Et(getCurrentProjectConfig().hasClaudeMdExternalIncludesApproved === !0),
                          De(null),
                          m(!1));
                      },
                      externalIncludes: getExternalInstructionIncludes(Lu),
                    }),
                    e(Text, {
                      dimColor: !0,
                      children: r(DotSeparatedList, {
                        children: [
                          e(KeybindingHint, { chord: "enter", action: "confirm" }),
                          e(ActionKeybindingHint, {
                            action: "confirm:no",
                            context: "Confirmation",
                            fallback: "Esc",
                            description: "disable external includes",
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              : Fe === "OutputStyle"
                ? r(N, {
                    children: [
                      e(Fr, {
                        initialStyle: Ie,
                        onComplete: (k) => {
                          (qe(k ?? DEFAULT_OUTPUT_STYLE_NAME),
                            De(null),
                            m(!1),
                            ML().delete(OUTPUT_STYLE_SECTION_NAME),
                            mv("output_style"),
                            updateSettingsForSource("localSettings", { outputStyle: k }, void 0, A),
                            logEvent("tengu_output_style_changed", {
                              style: k ?? DEFAULT_OUTPUT_STYLE_NAME,
                              source: S("config_panel"),
                              settings_source: S("localSettings"),
                            }));
                        },
                        onCancel: () => {
                          (De(null), m(!1));
                        },
                      }),
                      e(Text, {
                        dimColor: !0,
                        children: r(DotSeparatedList, {
                          children: [
                            e(KeybindingHint, { chord: "enter", action: "confirm" }),
                            e(ActionKeybindingHint, {
                              action: "confirm:no",
                              context: "Confirmation",
                              fallback: "Esc",
                              description: "cancel",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : Fe === "Language"
                  ? r(N, {
                      children: [
                        e(Hr, {
                          initialLanguage: mt,
                          onComplete: (k) => {
                            (Kt(k),
                              De(null),
                              m(!1),
                              updateSettingsForSource("userSettings", { language: k }, void 0, A),
                              logEvent("tengu_language_changed", {
                                language: k ?? "default",
                                source: S("config_panel"),
                              }));
                          },
                          onCancel: () => {
                            (De(null), m(!1));
                          },
                        }),
                        e(Text, {
                          dimColor: !0,
                          children: r(DotSeparatedList, {
                            children: [
                              e(KeybindingHint, { chord: "enter", action: "confirm" }),
                              e(ActionKeybindingHint, {
                                action: "confirm:no",
                                context: "Settings",
                                fallback: "Esc",
                                description: "cancel",
                              }),
                            ],
                          }),
                        }),
                      ],
                    })
                  : Fe === "AgentsView"
                    ? r(de, {
                        title: "Agents view",
                        onCancel: () => {
                          (De(null), m(!1));
                        },
                        hideBorder: !0,
                        hideInputGuide: !0,
                        children: [
                          at
                            ? e(fa, {
                                rows: Vn.map((k) => ({
                                  id: k.id,
                                  label: k.label,
                                  value: String(k.value),
                                })),
                                onSelect: (k) => Bu(k),
                                onCancel: () => {
                                  (De(null), m(!1));
                                },
                                cancelHint: "Escape to close",
                              })
                            : e(Box, {
                                flexDirection: "column",
                                children: Vn.map((k, oe) => {
                                  let ne = oe === sr;
                                  return r(
                                    SelectableRow,
                                    {
                                      active: ne,
                                      children: [
                                        e(Box, {
                                          width: Tu,
                                          flexShrink: 0,
                                          marginRight: 1,
                                          children: r(Text, {
                                            color: ne ? "suggestion" : void 0,
                                            wrap: "truncate-end",
                                            children: [
                                              r(Text, {
                                                "aria-hidden": !0,
                                                children: [
                                                  ne ? figures.pointer : " ",
                                                  " ",
                                                ],
                                              }),
                                              k.label,
                                            ],
                                          }),
                                        }),
                                        e(Text, {
                                          color: ne ? "suggestion" : void 0,
                                          children: String(k.value),
                                        }),
                                      ],
                                    },
                                    k.id,
                                  );
                                }),
                              }),
                          !at &&
                            e(Text, {
                              dimColor: !0,
                              children: r(DotSeparatedList, {
                                children: [
                                  e(KeybindingHint, {
                                    chord: ["enter", "space"],
                                    action: "toggle",
                                  }),
                                  e(ActionKeybindingHint, {
                                    action: "confirm:no",
                                    context: "Confirmation",
                                    fallback: "Esc",
                                    description: "close",
                                  }),
                                ],
                              }),
                            }),
                        ],
                      })
                    : Fe === "EnumPicker" && on
                      ? r(N, {
                          children: [
                            e(de, {
                              title: on.label,
                              onCancel: fr,
                              hideBorder: !0,
                              hideInputGuide: !0,
                              children: e(Select, {
                                options: on.options.map((k) => ({
                                  label: k,
                                  value: k,
                                })),
                                defaultValue: String(on.value),
                                defaultFocusValue: String(on.value),
                                onChange: (k) => {
                                  (fr(), pr(on, k));
                                },
                                onCancel: fr,
                              }),
                            }),
                            e(Text, {
                              dimColor: !0,
                              children: r(DotSeparatedList, {
                                children: [
                                  e(KeybindingHint, { chord: "enter", action: "confirm" }),
                                  e(ActionKeybindingHint, {
                                    action: "confirm:no",
                                    context: "Settings",
                                    fallback: "Esc",
                                    description: "cancel",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        })
                      : Fe === "EnableAutoUpdates"
                        ? e(de, {
                            title: "Enable Auto-Updates",
                            onCancel: () => {
                              (De(null), m(!1));
                            },
                            hideBorder: !0,
                            hideInputGuide: !0,
                            children:
                              bt?.type !== "config"
                                ? r(N, {
                                    children: [
                                      e(Text, {
                                        children:
                                          bt?.type === "env"
                                            ? "Auto-updates are controlled by an environment variable and cannot be changed here."
                                            : "Auto-updates are disabled in development builds.",
                                      }),
                                      bt?.type === "env" &&
                                        r(Text, {
                                          dimColor: !0,
                                          children: [
                                            "Unset ",
                                            bt.envVar,
                                            " to re-enable auto-updates.",
                                          ],
                                        }),
                                    ],
                                  })
                                : e(Select, {
                                    options: [
                                      {
                                        label: "Enable with latest channel",
                                        value: "latest",
                                      },
                                      {
                                        label: "Enable with stable channel",
                                        value: "stable",
                                      },
                                    ],
                                    onChange: (k) => {
                                      let oe = k;
                                      (De(null),
                                        m(!1),
                                        saveGlobalConfig(
                                          (ne) => ({ ...ne, autoUpdates: !0 }),
                                          A,
                                        ),
                                        X((ne) => ({ ...ne, autoUpdates: !0 })),
                                        updateSettingsForSource(
                                          "userSettings",
                                          {
                                            autoUpdatesChannel: oe,
                                            minimumVersion: void 0,
                                          },
                                          void 0,
                                          A,
                                        ),
                                        he((ne) => ({
                                          ...ne,
                                          autoUpdatesChannel: oe,
                                          minimumVersion: void 0,
                                        })),
                                        logEvent("tengu_autoupdate_enabled", {
                                          channel: fromEnum(oe),
                                        }));
                                    },
                                  }),
                          })
                        : Fe === "ChannelDowngrade"
                          ? e(Pr, {
                              currentVersion: {
                                ISSUES_EXPLAINER:
                                  "report the issue at https://github.com/anthropics/claude-code/issues",
                                PACKAGE_URL: "@anthropic-ai/claude-code",
                                README_URL:
                                  "https://code.claude.com/docs/en/overview",
                                VERSION: "2.1.263",
                                FEEDBACK_CHANNEL:
                                  "https://github.com/anthropics/claude-code/issues",
                                BUILD_TIME: "2026-09-06T01:08:56Z",
                                GIT_SHA:
                                  "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
                                HOOKS_WORKER_URL:
                                  "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                                DD_SOURCEMAP_GROUP: "darwin",
                              }.VERSION,
                              onChoice: (k) => {
                                if ((De(null), m(!1), k === "cancel")) return;
                                let oe = { autoUpdatesChannel: "stable" };
                                if (k === "stay")
                                  oe.minimumVersion = {
                                    ISSUES_EXPLAINER:
                                      "report the issue at https://github.com/anthropics/claude-code/issues",
                                    PACKAGE_URL: "@anthropic-ai/claude-code",
                                    README_URL:
                                      "https://code.claude.com/docs/en/overview",
                                    VERSION: "2.1.263",
                                    FEEDBACK_CHANNEL:
                                      "https://github.com/anthropics/claude-code/issues",
                                    BUILD_TIME: "2026-09-06T01:08:56Z",
                                    GIT_SHA:
                                      "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
                                    HOOKS_WORKER_URL:
                                      "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                                    DD_SOURCEMAP_GROUP: "darwin",
                                  }.VERSION;
                                (updateSettingsForSource("userSettings", oe, void 0, A),
                                  he((ne) => ({ ...ne, ...oe })),
                                  logEvent("tengu_autoupdate_channel_changed", {
                                    channel: S("stable"),
                                    minimum_version_set: k === "stay",
                                  }));
                              },
                            })
                          : Fe === "Notifications"
                            ? e(ea, {
                                channel: I.preferredNotifChannel,
                                showInputNeededRow: rr && isInputNeededPushEnabled(),
                                showDoneRow: rr,
                                inputNeededEnabled:
                                  I.inputNeededNotifEnabled ?? !1,
                                doneEnabled: I.agentPushNotifEnabled ?? !1,
                                onCycleChannel: () => {
                                  let k = NOTIFICATION_CHANNELS.indexOf(I.preferredNotifChannel),
                                    oe = NOTIFICATION_CHANNELS[(k + 1) % NOTIFICATION_CHANNELS.length];
                                  (sf(oe),
                                    logEvent("tengu_config_changed", {
                                      setting: S("notifChannel"),
                                      value: fromEnum(oe),
                                    }));
                                },
                                onToggleInputNeeded: () => {
                                  let k = !(I.inputNeededNotifEnabled ?? !1);
                                  (rf(k),
                                    logEvent("tengu_config_changed", {
                                      setting: S("inputNeededNotifEnabled"),
                                      value: k,
                                    }));
                                },
                                onToggleDone: () => {
                                  let k = !(I.agentPushNotifEnabled ?? !1);
                                  (cf(k),
                                    logEvent("tengu_config_changed", {
                                      setting: S("agentPushNotifEnabled"),
                                      value: k,
                                    }));
                                },
                                onClose: () => {
                                  (De(null), m(!1));
                                },
                              })
                            : at
                              ? r(Box, {
                                  flexDirection: "column",
                                  children: [
                                    e(fa, {
                                      rows: we.map((k) => ({
                                        id: k.id,
                                        label:
                                          "labelBoldSuffix" in k
                                            ? k.label + k.labelBoldSuffix
                                            : k.label,
                                        value: Vg(k, {
                                          autoUpdaterDisabledReason: bt,
                                          revampSections: ot,
                                        }),
                                      })),
                                      onSelect: (k) => {
                                        (He(k), Ys());
                                      },
                                      onCancel: Nu,
                                      cancelHint: "Escape to save and close",
                                    }),
                                    Un && e(Text, { children: ma }),
                                    we.some(
                                      (k) =>
                                        k.id === "inputNeededNotifEnabled" ||
                                        k.id === "agentPushNotifEnabled",
                                    ) && e(rn, {}),
                                    Jo !== null &&
                                      we.some(
                                        (k) => k.id === "remoteHomeSettings",
                                      ) &&
                                      e(Text, { children: Jo }),
                                  ],
                                })
                              : r(Box, {
                                  flexDirection: "column",
                                  gap: 1,
                                  marginY: se ? void 0 : 1,
                                  children: [
                                    r(Box, {
                                      flexDirection: "column",
                                      children: [
                                        e(SearchInput, {
                                          query: ar,
                                          isFocused: tt && !Z,
                                          isTerminalFocused: qo,
                                          cursorOffset: df,
                                          placeholder: "Search settings\u2026",
                                        }),
                                        Us !== null &&
                                          e(Text, {
                                            dimColor: !0,
                                            wrap: "wrap-trim",
                                            children: Us,
                                          }),
                                      ],
                                    }),
                                    e(Box, {
                                      flexDirection: "column",
                                      children:
                                        we.length === 0
                                          ? r(Text, {
                                              dimColor: !0,
                                              italic: !0,
                                              wrap: "truncate-end",
                                              children: [
                                                'No settings match "',
                                                ar,
                                                '"',
                                              ],
                                            })
                                          : r(N, {
                                              children: [
                                                Ue > 0 &&
                                                  r(Text, {
                                                    dimColor: !0,
                                                    children: [
                                                      figures.arrowUp,
                                                      " ",
                                                      Ue,
                                                      " more above",
                                                    ],
                                                  }),
                                                we
                                                  .slice(Ue, Ue + Zo)
                                                  .map((k, oe) => {
                                                    let ne = Ue + oe,
                                                      le =
                                                        ne === fe && !Z && !tt,
                                                      Ae = ot
                                                        ? ts(k.id)
                                                        : void 0,
                                                      Xs =
                                                        Ae !== void 0 &&
                                                        (ne === 0 ||
                                                          ts(
                                                            we[ne - 1]?.id ??
                                                              "",
                                                          ) !== Ae),
                                                      Nt =
                                                        Ae !== void 0 &&
                                                        Rd.has(Ae) &&
                                                        (Ae !== "Advanced" ||
                                                          oa(k.id)) &&
                                                        !le;
                                                    return r(
                                                      Nl,
                                                      {
                                                        children: [
                                                          Xs &&
                                                            e(Box, {
                                                              marginTop:
                                                                ne === Ue
                                                                  ? 0
                                                                  : 1,
                                                              children: e(Text, {
                                                                dimColor: !0,
                                                                wrap: "truncate-end",
                                                                children: Id(
                                                                  Ae,
                                                                  k.id,
                                                                ),
                                                              }),
                                                            }),
                                                          r(SelectableRow, {
                                                            active: le,
                                                            children: [
                                                              e(Box, {
                                                                width: Tu,
                                                                flexShrink: 0,
                                                                marginRight: 1,
                                                                children: r(Text, {
                                                                  color: le
                                                                    ? "suggestion"
                                                                    : void 0,
                                                                  dimColor: Nt,
                                                                  wrap: "truncate-end",
                                                                  children: [
                                                                    r(Text, {
                                                                      "aria-hidden":
                                                                        !0,
                                                                      children:
                                                                        [
                                                                          le
                                                                            ? figures.pointer
                                                                            : " ",
                                                                          " ",
                                                                        ],
                                                                    }),
                                                                    k.label,
                                                                    "labelBoldSuffix" in
                                                                      k &&
                                                                      e(Text, {
                                                                        bold: !0,
                                                                        children:
                                                                          k.labelBoldSuffix,
                                                                      }),
                                                                  ],
                                                                }),
                                                              }),
                                                              r(
                                                                Box,
                                                                {
                                                                  flexGrow: 1,
                                                                  minWidth: 0,
                                                                  children: [
                                                                    Ae ===
                                                                      "Advanced" &&
                                                                      Sf(
                                                                        k.id,
                                                                      ) &&
                                                                      e(Text, {
                                                                        color:
                                                                          "warning",
                                                                        dimColor:
                                                                          Nt,
                                                                        wrap: "truncate-end",
                                                                        children:
                                                                          "\u2192 settings.json ",
                                                                      }),
                                                                    k.type ===
                                                                    "boolean"
                                                                      ? e(Text, {
                                                                          color:
                                                                            le
                                                                              ? "suggestion"
                                                                              : void 0,
                                                                          dimColor:
                                                                            Nt,
                                                                          wrap: "truncate-end",
                                                                          children:
                                                                            k.value.toString(),
                                                                        })
                                                                      : k.id ===
                                                                          "theme"
                                                                        ? e(Text, {
                                                                            color:
                                                                              le
                                                                                ? "suggestion"
                                                                                : void 0,
                                                                            dimColor:
                                                                              Nt,
                                                                            wrap: "truncate-end",
                                                                            children:
                                                                              Gd[
                                                                                k.value.toString()
                                                                              ] ??
                                                                              k.value.toString(),
                                                                          })
                                                                        : !ot &&
                                                                            k.id ===
                                                                              "notifChannel"
                                                                          ? e(
                                                                              Text,
                                                                              {
                                                                                color:
                                                                                  le
                                                                                    ? "suggestion"
                                                                                    : void 0,
                                                                                dimColor:
                                                                                  Nt,
                                                                                wrap: "truncate-end",
                                                                                children:
                                                                                  e(
                                                                                    ha,
                                                                                    {
                                                                                      value:
                                                                                        k.value.toString(),
                                                                                    },
                                                                                  ),
                                                                              },
                                                                            )
                                                                          : k.id ===
                                                                              "permissionMode"
                                                                            ? e(
                                                                                Text,
                                                                                {
                                                                                  color:
                                                                                    le
                                                                                      ? "suggestion"
                                                                                      : void 0,
                                                                                  dimColor:
                                                                                    Nt,
                                                                                  wrap: "truncate-end",
                                                                                  children:
                                                                                    getPermissionModeTitle(
                                                                                      k.value,
                                                                                    ),
                                                                                },
                                                                              )
                                                                            : k.id ===
                                                                                "workflowSizeGuideline"
                                                                              ? e(
                                                                                  Text,
                                                                                  {
                                                                                    color:
                                                                                      le
                                                                                        ? "suggestion"
                                                                                        : void 0,
                                                                                    dimColor:
                                                                                      Nt,
                                                                                    wrap: "truncate-end",
                                                                                    children:
                                                                                      formatWorkflowSizeGuidelineLabel(
                                                                                        k.value.toString(),
                                                                                        k.isDefaultValue ??
                                                                                          !1,
                                                                                      ),
                                                                                  },
                                                                                )
                                                                              : k.id ===
                                                                                    "autoUpdatesChannel" &&
                                                                                  bt
                                                                                ? r(
                                                                                    Text,
                                                                                    {
                                                                                      color:
                                                                                        le
                                                                                          ? "suggestion"
                                                                                          : void 0,
                                                                                      dimColor:
                                                                                        Nt,
                                                                                      wrap: "truncate-end",
                                                                                      children:
                                                                                        [
                                                                                          "disabled",
                                                                                          " ",
                                                                                          r(
                                                                                            Text,
                                                                                            {
                                                                                              dimColor:
                                                                                                !0,
                                                                                              children:
                                                                                                [
                                                                                                  "(",
                                                                                                  formatAutoUpdaterDisabledReason(
                                                                                                    bt,
                                                                                                  ),
                                                                                                  ")",
                                                                                                ],
                                                                                            },
                                                                                          ),
                                                                                        ],
                                                                                    },
                                                                                  )
                                                                                : e(
                                                                                    Text,
                                                                                    {
                                                                                      color:
                                                                                        le
                                                                                          ? "suggestion"
                                                                                          : void 0,
                                                                                      dimColor:
                                                                                        Nt,
                                                                                      wrap: "truncate-end",
                                                                                      children:
                                                                                        k.value.toString(),
                                                                                    },
                                                                                  ),
                                                                    ot &&
                                                                      k.lock ===
                                                                        void 0 &&
                                                                      ((k.type ===
                                                                        "enum" &&
                                                                        k.pickToCommit ===
                                                                          !0) ||
                                                                        (k.type ===
                                                                          "managedEnum" &&
                                                                          !mr(
                                                                            k,
                                                                          ) &&
                                                                          (k.id !==
                                                                            "autoUpdatesChannel" ||
                                                                            bt !==
                                                                              null ||
                                                                            (me?.autoUpdatesChannel ??
                                                                              "latest") ===
                                                                              "latest"))) &&
                                                                      e(Text, {
                                                                        color:
                                                                          le
                                                                            ? "suggestion"
                                                                            : "permission",
                                                                        dimColor:
                                                                          Nt,
                                                                        children: ` ${figures.pointerSmall}`,
                                                                      }),
                                                                  ],
                                                                },
                                                                le
                                                                  ? "selected"
                                                                  : "unselected",
                                                              ),
                                                            ],
                                                          }),
                                                          (k.id ===
                                                            "inputNeededNotifEnabled" ||
                                                            k.id ===
                                                              "agentPushNotifEnabled") &&
                                                            e(rn, {}),
                                                          Un &&
                                                            k.id ===
                                                              "thinking" &&
                                                            e(Box, {
                                                              paddingLeft: 2,
                                                              children: e(Text, {
                                                                color:
                                                                  "warning",
                                                                children: ma,
                                                              }),
                                                            }),
                                                          Jo !== null &&
                                                            k.id ===
                                                              "remoteHomeSettings" &&
                                                            e(Box, {
                                                              paddingLeft: 2,
                                                              children: e(Text, {
                                                                color:
                                                                  "warning",
                                                                children: Jo,
                                                              }),
                                                            }),
                                                          k.lock !== void 0 &&
                                                            e(Box, {
                                                              paddingLeft: 4,
                                                              children: e(Text, {
                                                                dimColor: !0,
                                                                children:
                                                                  k.lock.reason,
                                                              }),
                                                            }),
                                                        ],
                                                      },
                                                      k.id,
                                                    );
                                                  }),
                                                Ue + Zo < we.length &&
                                                  r(Text, {
                                                    dimColor: !0,
                                                    children: [
                                                      figures.arrowDown,
                                                      " ",
                                                      we.length - Ue - Zo,
                                                      " ",
                                                      "more below",
                                                    ],
                                                  }),
                                              ],
                                            }),
                                    }),
                                    e(Box, {
                                      ref: or,
                                      flexDirection: "column",
                                      flexShrink: 0,
                                      children: Z
                                        ? e(Text, {
                                            dimColor: !0,
                                            children: r(DotSeparatedList, {
                                              children: [
                                                e(KeybindingHint, {
                                                  chord: [
                                                    "left",
                                                    "right",
                                                    "tab",
                                                  ],
                                                  action: "switch",
                                                  format: { keyCase: "lower" },
                                                }),
                                                e(KeybindingHint, {
                                                  chord: "down",
                                                  action: "return",
                                                }),
                                                e(ActionKeybindingHint, {
                                                  action: "confirm:no",
                                                  context: "Settings",
                                                  fallback: "Esc",
                                                  description: "close",
                                                }),
                                              ],
                                            }),
                                          })
                                        : tt
                                          ? e(Text, {
                                              dimColor: !0,
                                              children: r(DotSeparatedList, {
                                                children: [
                                                  e(Text, {
                                                    children: "Type to filter",
                                                  }),
                                                  e(KeybindingHint, {
                                                    chord: ["enter", "down"],
                                                    action: "select",
                                                  }),
                                                  e(KeybindingHint, {
                                                    chord: "up",
                                                    action: "tabs",
                                                  }),
                                                  e(ActionKeybindingHint, {
                                                    action: "confirm:no",
                                                    context: "Settings",
                                                    fallback: "Esc",
                                                    description: "clear",
                                                  }),
                                                ],
                                              }),
                                            })
                                          : e(Text, {
                                              dimColor: !0,
                                              children: r(DotSeparatedList, {
                                                children: [
                                                  we[fe]?.lock === void 0
                                                    ? e(KeybindingHint, {
                                                        chord: [
                                                          "enter",
                                                          "space",
                                                        ],
                                                        action: "change",
                                                      })
                                                    : we[fe]?.lock?.source ===
                                                        "policy" &&
                                                      e(KeybindingHint, {
                                                        chord: [
                                                          "enter",
                                                          "space",
                                                        ],
                                                        action: "retry",
                                                      }),
                                                  e(ActionKeybindingHint, {
                                                    action: "settings:search",
                                                    context: "Settings",
                                                    fallback: "/",
                                                    description: "search",
                                                  }),
                                                  e(ActionKeybindingHint, {
                                                    action: "confirm:no",
                                                    context: "Settings",
                                                    fallback: "Esc",
                                                    description: "close",
                                                  }),
                                                ],
                                              }),
                                            }),
                                    }),
                                  ],
                                }),
  });
}
function Vd(s, c, m, T, R) {
  if (s.length === 0) return 0;
  let v = Math.min(Math.max(0, c), s.length - 1),
    A = v;
  while (A > 0) {
    let H = pa(s, A - 1, m, T, R);
    if (A - 1 + H - 1 < v) break;
    A--;
  }
  return A;
}
function pa(s, c, m, T, R) {
  let v = c > 0 ? 1 : 0,
    A = 0;
  for (let H = c; H < s.length; H++) {
    let B = s[H].id,
      Y = 1 + R(B);
    if (T) {
      let j = ts(B),
        O = H === 0 ? void 0 : ts(s[H - 1].id);
      if (j !== O) Y += H === c ? 1 : 2;
    }
    let G = H + 1 < s.length ? 1 : 0;
    if (A > 0 && v + Y + G > m) break;
    ((v += Y), A++);
  }
  return Math.max(1, A);
}
var ma =
    "Changing thinking mode mid-conversation will increase latency and may reduce quality.",
  Gd = {
    auto: "Auto (match terminal)",
    dark: "Dark mode",
    light: "Light mode",
    "dark-daltonized": "Dark mode (colorblind-friendly)",
    "light-daltonized": "Light mode (colorblind-friendly)",
    "dark-ansi": "Dark mode (ANSI colors only)",
    "light-ansi": "Light mode (ANSI colors only)",
  };
function ha(Lk) {
  let sa = _(4),
    { value: Lg } = Lk;
  switch (Lg) {
    case "auto": {
      return "Auto";
    }
    case "iterm2": {
      let Bt;
      if (sa[0] === MEMO_CACHE_SENTINEL)
        ((Bt = r(Text, {
          children: ["iTerm2 ", e(Text, { dimColor: !0, children: "(OSC 9)" })],
        })),
          (sa[0] = Bt));
      else Bt = sa[0];
      return Bt;
    }
    case "terminal_bell": {
      let Bt;
      if (sa[1] === MEMO_CACHE_SENTINEL)
        ((Bt = r(Text, {
          children: [
            "Terminal Bell ",
            e(Text, { dimColor: !0, children: "(\\a)" }),
          ],
        })),
          (sa[1] = Bt));
      else Bt = sa[1];
      return Bt;
    }
    case "kitty": {
      let Bt;
      if (sa[2] === MEMO_CACHE_SENTINEL)
        ((Bt = r(Text, {
          children: ["Kitty ", e(Text, { dimColor: !0, children: "(OSC 99)" })],
        })),
          (sa[2] = Bt));
      else Bt = sa[2];
      return Bt;
    }
    case "ghostty": {
      let Bt;
      if (sa[3] === MEMO_CACHE_SENTINEL)
        ((Bt = r(Text, {
          children: ["Ghostty ", e(Text, { dimColor: !0, children: "(OSC 777)" })],
        })),
          (sa[3] = Bt));
      else Bt = sa[3];
      return Bt;
    }
    case "iterm2_with_bell": {
      return "iTerm2 w/ Bell";
    }
    case "notifications_disabled": {
      return "Disabled";
    }
    default: {
      return Lg;
    }
  }
}
function Vg(s, c) {
  let m = String(s.value);
  if (s.lock !== void 0) return `${m} (${s.lock.reason})`;
  if (s.id === "theme") return Gd[m] ?? m;
  if (s.id === "permissionMode") return getPermissionModeTitle(s.value);
  if (s.id === "workflowSizeGuideline") return formatWorkflowSizeGuidelineLabel(m, s.isDefaultValue ?? !1);
  if (s.id === "autoUpdatesChannel" && c.autoUpdaterDisabledReason)
    return `disabled (${formatAutoUpdaterDisabledReason(c.autoUpdaterDisabledReason)})`;
  if (s.id === "notifChannel" && !c.revampSections) return flattenNodeText(ha({ value: m }));
  return m;
}
function fa(Nk) {
  let an = _(20),
    { rows: Xt, onSelect: Nd, onCancel: Bd, cancelHint: $d } = Nk,
    [Fd, Bk] = d(""),
    ui = C(""),
    [ia, Ud] = d(null),
    Ng = C(null);
  useFocusTrap(Ng, !0);
  let Bg;
  if (an[0] === MEMO_CACHE_SENTINEL)
    ((Bg = ($k) => {
      ((ui.current = $k(ui.current)), Bk(ui.current));
    }),
      (an[0] = Bg));
  else Bg = an[0];
  let ra = Bg,
    $g;
  if (an[1] !== Nd || an[2] !== Xt.length)
    (($g = (Fg) => {
      let aa = Number.parseInt(Fg, 10);
      if (!Number.isFinite(aa) || aa < 1 || aa > Xt.length) {
        (Ud(
          `Invalid selection "${Fg}". Enter a number between 1 and ${Xt.length}.`,
        ),
          ra(Gg));
        return;
      }
      (Ud(null), ra(Kg), Nd(aa - 1));
    }),
      (an[1] = Nd),
      (an[2] = Xt.length),
      (an[3] = $g));
  else $g = an[3];
  let Wd = $g,
    Ug;
  if (an[4] !== Bd || an[5] !== Wd)
    ((Ug = ($t) => {
      if ($t.key === "escape") {
        ($t.preventDefault(), Bd());
        return;
      }
      if ($t.key === "return") {
        if (($t.preventDefault(), ui.current.length > 0)) Wd(ui.current);
        return;
      }
      if ($t.key === "backspace" || $t.key === "delete") {
        ($t.preventDefault(), ra(zg));
        return;
      }
      let Wg = normalizeFullWidthDigits($t.key);
      if (/^[0-9]$/.test(Wg) && !$t.ctrl && !$t.meta)
        ($t.preventDefault(), Ud(null), ra((Fk) => Fk + Wg));
    }),
      (an[4] = Bd),
      (an[5] = Wd),
      (an[6] = Ug));
  else Ug = an[6];
  let jd = Ug,
    la;
  if (an[7] !== Xt) ((la = Xt.map(Yg)), (an[7] = Xt), (an[8] = la));
  else la = an[8];
  let ca;
  if (an[9] !== ia)
    ((ca = ia && e(Text, { children: ia })), (an[9] = ia), (an[10] = ca));
  else ca = an[10];
  let ua;
  if (an[11] !== Fd || an[12] !== $d || an[13] !== Xt.length)
    ((ua = r(Text, {
      children: [
        "Enter a number to change [1-",
        Xt.length,
        "], or ",
        $d,
        ": ",
        Fd,
      ],
    })),
      (an[11] = Fd),
      (an[12] = $d),
      (an[13] = Xt.length),
      (an[14] = ua));
  else ua = an[14];
  let jg;
  if (an[15] !== jd || an[16] !== la || an[17] !== ca || an[18] !== ua)
    ((jg = r(Box, {
      ref: Ng,
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: jd,
      children: [la, ca, ua],
    })),
      (an[15] = jd),
      (an[16] = la),
      (an[17] = ca),
      (an[18] = ua),
      (an[19] = jg));
  else jg = an[19];
  return jg;
}
F();
F();
function eh(eD) {
  return eD.plugins.commands;
}
function th(tD) {
  return tD.mcp.commands;
}
function oh(oD) {
  return oD.mainLoopModel;
}
function nh(di) {
  return r(
    Box,
    {
      flexDirection: "row",
      children: [
        e(Box, {
          width: 28,
          children: e(Text, { dimColor: !0, children: di.pluginName }),
        }),
        r(Text, {
          dimColor: !0,
          children: [
            di.skillCount,
            " ",
            pluralize(di.skillCount, "skill"),
            " \xB7 ~",
            di.approxTokens,
            " ",
            "tok/turn",
          ],
        }),
      ],
    },
    di.pluginName,
  );
}
function mi() {
  let os = _(15),
    Kd = useAppStateSelector(eh),
    zd = useAppStateSelector(th),
    Zk = useAppStateSelector(oh),
    Yd = useMainLoopModelOverride() ?? Zk,
    qg;
  if (os[0] !== zd || os[1] !== Yd || os[2] !== Kd)
    ((qg = computeSkillUsageByPlugin([...Kd, ...zd], bytesPerTokenForModel(Yd ?? void 0))),
      (os[0] = zd),
      (os[1] = Yd),
      (os[2] = Kd),
      (os[3] = qg));
  else qg = os[3];
  let $o = qg;
  if ($o.byPlugin.length === 0) {
    return null;
  }
  let Xg, Jg;
  if (os[4] === MEMO_CACHE_SENTINEL)
    ((Xg = e(Text, { bold: !0, children: "Plugin skill-listing footprint" })),
      (Jg = e(Text, {
        dimColor: !0,
        wrap: "wrap",
        children:
          "What each plugin's skill descriptions add to the system prompt (cached input after the first turn). Agents and MCP tools not yet counted.",
      })),
      (os[4] = Xg),
      (os[5] = Jg));
  else ((Xg = os[4]), (Jg = os[5]));
  let ya;
  if (os[6] !== $o.byPlugin)
    ((ya = $o.byPlugin.map(nh)), (os[6] = $o.byPlugin), (os[7] = ya));
  else ya = os[7];
  let Qg;
  if (os[8] === MEMO_CACHE_SENTINEL)
    ((Qg = e(Box, { width: 28, children: e(Text, { children: "Total" }) })),
      (os[8] = Qg));
  else Qg = os[8];
  const qd = $o.overBudget
    ? " (capped at the listing budget; per-plugin figures above are pre-truncation)"
    : "";
  let Sa;
  if (os[9] !== $o.totalTokens || os[10] !== qd)
    ((Sa = r(Box, {
      flexDirection: "row",
      marginTop: 1,
      children: [
        Qg,
        r(Text, { children: ["~", $o.totalTokens, " tok/turn", qd] }),
      ],
    })),
      (os[9] = $o.totalTokens),
      (os[10] = qd),
      (os[11] = Sa));
  else Sa = os[11];
  let Zg;
  if (os[12] !== ya || os[13] !== Sa)
    ((Zg = r(Box, {
      flexDirection: "column",
      marginTop: 1,
      children: [
        Xg,
        Jg,
        r(Box, { flexDirection: "column", marginTop: 1, children: [ya, Sa] }),
      ],
    })),
      (os[12] = ya),
      (os[13] = Sa),
      (os[14] = Zg));
  else Zg = os[14];
  return Zg;
}
F();
function Ih(kD) {
  return (logError(kD), { day: vi, week: vi });
}
function _h(vD, xD) {
  return `${vD}% of your usage came from subagents under "${xD}"`;
}
function Ph(MD, ED) {
  return `${MD}% of your usage came from /${ED}`;
}
function Oh(AD, RD) {
  return `${AD}% of your usage came from the plugin "${RD}"`;
}
function Lh(ID, _D) {
  return `${ID}% of your usage came from the MCP server "${_D}"`;
}
function Nh(PD) {
  return `/${PD}`;
}
var um = {
    cache_miss: {
      headline: (s) => `${s}% of your usage hit a >100k-token cache miss`,
      body: "Uncached input is expensive, and often happens when sending a message to a session that has gone idle. /compact before stepping away keeps the cold-start small.",
    },
    long_context: {
      headline: (s) => `${s}% of your usage was at >150k context`,
      body: "Longer sessions are more expensive even when cached. /compact mid-task, /clear when switching to new tasks.",
    },
    subagent_heavy: {
      headline: (s) => `${s}% of your usage came from subagent-heavy sessions`,
      body: "Each subagent runs its own requests. Be deliberate about spawning them \u2014 and consider configuring a cheaper model for simpler subagents.",
    },
    high_parallel: {
      headline: (s) =>
        `${s}% of your usage was while 4+ sessions ran in parallel`,
      body: "All sessions share one limit. If you don't need them all at once, queueing uses it more evenly.",
    },
    cron: {
      headline: (s) =>
        `${s}% of your usage came from sessions active for 8+ hours`,
      body: "These are often background/loop sessions. Continuous usage can add up quickly so make sure it is intentional.",
    },
  },
  hs = 10,
  vi = {
    totalCost: 0,
    requestCount: 0,
    sessionCount: 0,
    behaviors: [],
    agents: [],
    skills: [],
    plugins: [],
    mcpServers: [],
    loops: [],
  },
  fo = 8,
  xi = 28,
  Mi = 6;
function Ei(SD) {
  let bD = _(2),
    { maxWidth: Qd } = SD,
    sh;
  if (bD[0] !== Qd)
    ((sh = e(el, { maxWidth: Qd })), (bD[0] = Qd), (bD[1] = sh));
  else sh = bD[1];
  return sh;
}
function el(CD) {
  let un = _(14),
    { maxWidth: ns } = CD,
    { storageV5: Zd } = useStorageV5Context(),
    [rs] = d(getUsagePatternsAccess),
    ih;
  if (un[0] !== Zd || un[1] !== rs.allowed)
    ((ih = () => (rs.allowed ? collectRecentUsageSummary(Zd).catch(Ih) : null)),
      (un[0] = Zd),
      (un[1] = rs.allowed),
      (un[2] = ih));
  else ih = un[2];
  let [ba] = d(ih);
  if (ba === null || !rs.allowed) {
    let pi;
    if (un[3] === MEMO_CACHE_SENTINEL) ((pi = e(Ho, { withSubtitle: !1 })), (un[3] = pi));
    else pi = un[3];
    const as = rs.allowed ? null : rs.reason;
    let mn;
    if (un[4] !== as)
      ((mn = e(Text, { dimColor: !0, wrap: "wrap", children: as })),
        (un[4] = as),
        (un[5] = mn));
    else mn = un[5];
    let rh;
    if (un[6] !== ns || un[7] !== mn)
      ((rh = r(Box, {
        flexDirection: "column",
        children: [pi, e(Box, { marginTop: 1, width: ns, children: mn })],
      })),
        (un[6] = ns),
        (un[7] = mn),
        (un[8] = rh));
    else rh = un[8];
    return rh;
  }
  let pi;
  if (un[9] === MEMO_CACHE_SENTINEL) ((pi = e(Ho, {})), (un[9] = pi));
  else pi = un[9];
  let as;
  if (un[10] === MEMO_CACHE_SENTINEL)
    ((as = r(Box, {
      flexDirection: "column",
      children: [
        pi,
        e(Box, {
          marginTop: 1,
          children: e(Text, {
            dimColor: !0,
            children: "Scanning local sessions\u2026",
          }),
        }),
      ],
    })),
      (un[10] = as));
  else as = un[10];
  let wD = as,
    mn;
  if (un[11] !== ns || un[12] !== ba)
    ((mn = e(Dn, {
      fallback: wD,
      children: e(tl, { maxWidth: ns, scanPromise: ba }),
    })),
      (un[11] = ns),
      (un[12] = ba),
      (un[13] = mn));
  else mn = un[13];
  return mn;
}
function Sn(s) {
  if (s.totalCost === 0) return [];
  return s.behaviors.filter((c) => (c.cost / s.totalCost) * 100 >= hs);
}
function po(s) {
  return (
    s.agents.length > 0 ||
    s.skills.length > 0 ||
    s.plugins.length > 0 ||
    s.mcpServers.length > 0 ||
    s.loops.length > 0
  );
}
function tl(DD) {
  let Zt = _(35),
    { maxWidth: Fo, scanPromise: TD } = DD,
    Qt = kn(TD),
    [Ca, ah] = d("day"),
    lh;
  if (Zt[0] !== Qt.day)
    ((lh = Sn(Qt.day).length > 0 || po(Qt.day)),
      (Zt[0] = Qt.day),
      (Zt[1] = lh));
  else lh = Zt[1];
  let ch = lh,
    uh;
  if (Zt[2] !== Qt.week)
    ((uh = Sn(Qt.week).length > 0 || po(Qt.week)),
      (Zt[2] = Qt.week),
      (Zt[3] = uh));
  else uh = Zt[3];
  let dh = uh,
    em = ch || dh,
    mh;
  if (Zt[4] === MEMO_CACHE_SENTINEL)
    ((mh = {
      "settings:periodDay": () => ah("day"),
      "settings:periodWeek": () => ah("week"),
    }),
      (Zt[4] = mh));
  else mh = Zt[4];
  let ph;
  if (Zt[5] !== em)
    ((ph = { context: "Settings", isActive: em }), (Zt[5] = em), (Zt[6] = ph));
  else ph = Zt[6];
  if ((useKeybindings(mh, ph), !ch && !dh)) {
    return null;
  }
  let nt = Ca === "day" ? Qt.day : Qt.week,
    wa,
    ka,
    fi,
    hi,
    Da,
    Ta,
    va,
    xa,
    Ea;
  if (Zt[7] !== Fo || Zt[8] !== Ca || Zt[9] !== nt) {
    let fh = Sn(nt);
    ka = Box;
    Ea = "column";
    if (Zt[19] === MEMO_CACHE_SENTINEL) ((fi = e(Ho, {})), (Zt[19] = fi));
    else fi = Zt[19];
    const Uo = Ca === "day" ? "24h" : "7d";
    if (Zt[20] !== Uo)
      ((hi = e(Box, {
        marginTop: 1,
        children: r(Text, {
          dimColor: !0,
          wrap: "wrap",
          children: [
            "Last ",
            Uo,
            " \xB7 these are independent characteristics of your usage, not a breakdown",
          ],
        }),
      })),
        (Zt[20] = Uo),
        (Zt[21] = hi));
    else hi = Zt[21];
    wa = Box;
    Da = 1;
    Ta = "column";
    va = 1;
    xa =
      fh.length === 0 && !po(nt)
        ? r(Text, {
            dimColor: !0,
            children: [
              "Nothing over ",
              hs,
              "% in this period \u2014 try the other window.",
            ],
          })
        : r(N, {
            children: [
              fh.map((gh) =>
                e(
                  nl,
                  { stat: gh, totalCost: nt.totalCost, maxWidth: Fo },
                  gh.key,
                ),
              ),
              e(to, {
                top: nt.agents[0],
                maxWidth: Fo,
                headline: _h,
                body: "If this runs frequently, consider configuring its subagents with a cheaper model or tightening their prompts.",
              }),
              e(to, {
                top: nt.skills[0],
                maxWidth: Fo,
                headline: Ph,
                body: "Heavy skills can be scoped down or run with a cheaper model via skill frontmatter.",
              }),
              e(to, {
                top: nt.plugins[0],
                maxWidth: Fo,
                headline: Oh,
                body: "Review what this plugin contributes \u2014 its agents, skills, and MCP tools all count toward your limit.",
              }),
              e(to, {
                top: nt.mcpServers[0],
                maxWidth: Fo,
                headline: Lh,
                body: "MCP tool results stay in context for the rest of the session. /compact to flush them, or disable servers you don't need.",
              }),
              !po(nt)
                ? r(Box, {
                    flexDirection: "column",
                    children: [
                      e(Text, {
                        bold: !0,
                        children: "Skills, subagents, plugins, and MCP servers",
                      }),
                      e(Text, {
                        dimColor: !0,
                        wrap: "wrap",
                        children:
                          "No attribution data yet \xB7 accumulates as you use Claude",
                      }),
                    ],
                  })
                : r(N, {
                    children: [
                      e(eo, { title: "Skills", rows: nt.skills, label: Nh }),
                      e(eo, { title: "Subagents", rows: nt.agents }),
                      e(eo, { title: "Plugins", rows: nt.plugins }),
                      e(eo, { title: "MCP servers", rows: nt.mcpServers }),
                      e(ol, { rows: nt.loops, maxWidth: Fo }),
                    ],
                  }),
            ],
          });
    ((Zt[7] = Fo),
      (Zt[8] = Ca),
      (Zt[9] = nt),
      (Zt[10] = wa),
      (Zt[11] = ka),
      (Zt[12] = fi),
      (Zt[13] = hi),
      (Zt[14] = Da),
      (Zt[15] = Ta),
      (Zt[16] = va),
      (Zt[17] = xa),
      (Zt[18] = Ea));
  } else
    ((wa = Zt[10]),
      (ka = Zt[11]),
      (fi = Zt[12]),
      (hi = Zt[13]),
      (Da = Zt[14]),
      (Ta = Zt[15]),
      (va = Zt[16]),
      (xa = Zt[17]),
      (Ea = Zt[18]));
  let Uo;
  if (
    Zt[22] !== wa ||
    Zt[23] !== Da ||
    Zt[24] !== Ta ||
    Zt[25] !== va ||
    Zt[26] !== xa
  )
    ((Uo = e(wa, { marginTop: Da, flexDirection: Ta, gap: va, children: xa })),
      (Zt[22] = wa),
      (Zt[23] = Da),
      (Zt[24] = Ta),
      (Zt[25] = va),
      (Zt[26] = xa),
      (Zt[27] = Uo));
  else Uo = Zt[27];
  let hh;
  if (Zt[28] === MEMO_CACHE_SENTINEL)
    ((hh = e(Box, {
      marginTop: 1,
      children: e(Text, {
        dimColor: !0,
        children: r(DotSeparatedList, {
          children: [
            e(ActionKeybindingHint, {
              action: "settings:periodDay",
              context: "Settings",
              fallback: "d",
              description: "day",
            }),
            e(ActionKeybindingHint, {
              action: "settings:periodWeek",
              context: "Settings",
              fallback: "w",
              description: "week",
            }),
          ],
        }),
      }),
    })),
      (Zt[28] = hh));
  else hh = Zt[28];
  let yh;
  if (
    Zt[29] !== ka ||
    Zt[30] !== fi ||
    Zt[31] !== hi ||
    Zt[32] !== Uo ||
    Zt[33] !== Ea
  )
    ((yh = r(ka, { flexDirection: Ea, children: [fi, hi, Uo, hh] })),
      (Zt[29] = ka),
      (Zt[30] = fi),
      (Zt[31] = hi),
      (Zt[32] = Uo),
      (Zt[33] = Ea),
      (Zt[34] = yh));
  else yh = Zt[34];
  return yh;
}
function Ho(OD) {
  let om = _(5),
    { withSubtitle: Sh } = OD,
    tm = Sh === void 0 ? !0 : Sh,
    bh;
  if (om[0] === MEMO_CACHE_SENTINEL)
    ((bh = e(Text, {
      bold: !0,
      wrap: "wrap",
      children: "What's contributing to your limits usage?",
    })),
      (om[0] = bh));
  else bh = om[0];
  let Aa;
  if (om[1] !== tm)
    ((Aa =
      tm &&
      e(Text, {
        dimColor: !0,
        wrap: "wrap",
        children:
          "Approximate, based on local sessions on this machine \u2014 does not include other devices or claude.ai",
      })),
      (om[1] = tm),
      (om[2] = Aa));
  else Aa = om[2];
  let Ch;
  if (om[3] !== Aa)
    ((Ch = r(Box, { flexDirection: "column", children: [bh, Aa] })),
      (om[3] = Aa),
      (om[4] = Ch));
  else Ch = om[4];
  return Ch;
}
function eo(LD) {
  let pn = _(23),
    { title: yi, rows: Si, label: ls } = LD;
  if (Si.length === 0) {
    return null;
  }
  let Ra, Ia, bi, _a, Ci;
  if (pn[0] !== ls || pn[1] !== Si || pn[2] !== yi) {
    let ND = Si.slice(0, fo);
    Ci = Si.length - fo;
    Ra = Box;
    Ia = "column";
    let uo;
    if (pn[8] !== yi)
      ((uo = e(Text, { children: yi })), (pn[8] = yi), (pn[9] = uo));
    else uo = pn[9];
    let wi;
    if (pn[10] === MEMO_CACHE_SENTINEL)
      ((wi = e(Text, { dimColor: !0, children: "% of usage" })), (pn[10] = wi));
    else wi = pn[10];
    if (pn[11] !== uo)
      ((bi = r(Box, {
        width: xi + Mi,
        justifyContent: "space-between",
        children: [uo, wi],
      })),
        (pn[11] = uo),
        (pn[12] = bi));
    else bi = pn[12];
    let wh;
    if (pn[13] !== ls)
      ((wh = (Pa) =>
        r(
          Box,
          {
            children: [
              e(Box, {
                width: xi,
                children: e(Text, {
                  dimColor: !0,
                  wrap: "truncate-end",
                  children: ls ? ls(Pa.name) : Pa.name,
                }),
              }),
              e(Box, {
                width: Mi,
                justifyContent: "flex-end",
                children: r(Text, { dimColor: !0, children: [Pa.pct, "%"] }),
              }),
            ],
          },
          Pa.name,
        )),
        (pn[13] = ls),
        (pn[14] = wh));
    else wh = pn[14];
    _a = ND.map(wh);
    ((pn[0] = ls),
      (pn[1] = Si),
      (pn[2] = yi),
      (pn[3] = Ra),
      (pn[4] = Ia),
      (pn[5] = bi),
      (pn[6] = _a),
      (pn[7] = Ci));
  } else ((Ra = pn[3]), (Ia = pn[4]), (bi = pn[5]), (_a = pn[6]), (Ci = pn[7]));
  let uo;
  if (pn[15] !== Ci)
    ((uo =
      Ci > 0 && r(Text, { dimColor: !0, children: ["\u2026 ", Ci, " more"] })),
      (pn[15] = Ci),
      (pn[16] = uo));
  else uo = pn[16];
  let wi;
  if (
    pn[17] !== Ra ||
    pn[18] !== Ia ||
    pn[19] !== bi ||
    pn[20] !== _a ||
    pn[21] !== uo
  )
    ((wi = r(Ra, { flexDirection: Ia, children: [bi, _a, uo] })),
      (pn[17] = Ra),
      (pn[18] = Ia),
      (pn[19] = bi),
      (pn[20] = _a),
      (pn[21] = uo),
      (pn[22] = wi));
  else wi = pn[22];
  return wi;
}
var ds = 10,
  ms = 6,
  ps = 8,
  jo = 9,
  fs = 9,
  gs = ds + ms + ps + jo + fs,
  dm = gs + 24;
function mm(s) {
  if (s.isDynamic) return "dynamic";
  if (!s.cron) return "?";
  let c = s.cron.match(
    /^(?:(?:\*\/(\d+)|(\*)) \* \* \* \*|0 (?:\*\/(\d+)|(\*)) \* \* \*|0 0 (?:\*\/(\d+)|(\*)) \* \*|(\d{1,2}) (\d{1,2}) \* \* \*)$/,
  );
  if (c) {
    if (c[1] || c[2]) return `${c[1] ?? 1}m`;
    if (c[3] || c[4]) return `${c[3] ?? 1}h`;
    if (c[5] || c[6]) return `${c[5] ?? 1}d`;
    return `at ${c[8].padStart(2, "0")}:${c[7].padStart(2, "0")}`;
  }
  return formatCronSchedule(s.cron).toLowerCase();
}
function ol(BD) {
  let mo = _(28),
    { rows: ki, maxWidth: kh } = BD;
  if (ki.length === 0) {
    return null;
  }
  let fn = kh >= dm,
    $D = fn ? gs : gs - jo,
    cs = Math.max(12, kh - $D),
    Oa,
    La,
    Di,
    Na,
    Ti;
  if (mo[0] !== cs || mo[1] !== ki || mo[2] !== fn) {
    let FD = ki.slice(0, fo);
    Ti = ki.length - fo;
    let UD = new Date();
    Oa = Box;
    La = "column";
    let gn;
    if (mo[8] === MEMO_CACHE_SENTINEL) ((gn = e(Text, { children: "Loops" })), (mo[8] = gn));
    else gn = mo[8];
    let yn;
    if (mo[9] !== cs)
      ((yn = e(Box, { width: cs, children: gn })), (mo[9] = cs), (mo[10] = yn));
    else yn = mo[10];
    let Dh, Th, vh;
    if (mo[11] === MEMO_CACHE_SENTINEL)
      ((Dh = e(Le, { width: ds, text: "every" })),
        (Th = e(Le, { width: ms, text: "runs" })),
        (vh = e(Le, { width: ps, text: "tokens" })),
        (mo[11] = Dh),
        (mo[12] = Th),
        (mo[13] = vh));
    else ((Dh = mo[11]), (Th = mo[12]), (vh = mo[13]));
    let Ba;
    if (mo[14] !== fn)
      ((Ba = fn && e(Le, { width: jo, text: "per run" })),
        (mo[14] = fn),
        (mo[15] = Ba));
    else Ba = mo[15];
    let xh;
    if (mo[16] === MEMO_CACHE_SENTINEL)
      ((xh = e(Le, { width: fs, text: "last run" })), (mo[16] = xh));
    else xh = mo[16];
    if (mo[17] !== yn || mo[18] !== Ba)
      ((Di = r(Box, { children: [yn, Dh, Th, vh, Ba, xh] })),
        (mo[17] = yn),
        (mo[18] = Ba),
        (mo[19] = Di));
    else Di = mo[19];
    Na = FD.map((Ft) =>
      r(
        Box,
        {
          children: [
            e(Box, {
              width: cs,
              children: e(Text, {
                dimColor: !0,
                wrap: "truncate-end",
                children: Ft.prompt,
              }),
            }),
            e(Le, { width: ds, text: mm(Ft) }),
            e(Le, { width: ms, text: String(Ft.runs) }),
            e(Le, { width: ps, text: formatTokens(Ft.tokens) }),
            fn &&
              e(Le, {
                width: jo,
                text:
                  Ft.runs > 0 && Ft.tokens > 0
                    ? formatTokens(Math.round(Ft.tokens / Ft.runs))
                    : "\u2013",
              }),
            e(Le, {
              width: fs,
              text:
                Ft.lastRunMs > 0
                  ? formatRelativeTimeAgo(new Date(Ft.lastRunMs), { now: UD })
                  : "\u2013",
            }),
          ],
        },
        Ft.prompt,
      ),
    );
    ((mo[0] = cs),
      (mo[1] = ki),
      (mo[2] = fn),
      (mo[3] = Oa),
      (mo[4] = La),
      (mo[5] = Di),
      (mo[6] = Na),
      (mo[7] = Ti));
  } else ((Oa = mo[3]), (La = mo[4]), (Di = mo[5]), (Na = mo[6]), (Ti = mo[7]));
  let gn;
  if (mo[20] !== Ti)
    ((gn =
      Ti > 0 && r(Text, { dimColor: !0, children: ["\u2026 ", Ti, " more"] })),
      (mo[20] = Ti),
      (mo[21] = gn));
  else gn = mo[21];
  let yn;
  if (
    mo[22] !== Oa ||
    mo[23] !== La ||
    mo[24] !== Di ||
    mo[25] !== Na ||
    mo[26] !== gn
  )
    ((yn = r(Oa, { flexDirection: La, children: [Di, Na, gn] })),
      (mo[22] = Oa),
      (mo[23] = La),
      (mo[24] = Di),
      (mo[25] = Na),
      (mo[26] = gn),
      (mo[27] = yn));
  else yn = mo[27];
  return yn;
}
function Le(WD) {
  let Mh = _(5),
    { width: nm, text: sm } = WD,
    $a;
  if (Mh[0] !== sm)
    (($a = e(Text, { dimColor: !0, wrap: "truncate-end", children: sm })),
      (Mh[0] = sm),
      (Mh[1] = $a));
  else $a = Mh[1];
  let Eh;
  if (Mh[2] !== $a || Mh[3] !== nm)
    ((Eh = e(Box, { width: nm, justifyContent: "flex-end", children: $a })),
      (Mh[2] = $a),
      (Mh[3] = nm),
      (Mh[4] = Eh));
  else Eh = Mh[4];
  return Eh;
}
function to(jD) {
  let Fa = _(12),
    { top: Wo, maxWidth: im, headline: rm, body: am } = jD;
  if (!Wo || Wo.pct < hs) {
    return null;
  }
  let Ua;
  if (Fa[0] !== rm || Fa[1] !== Wo.name || Fa[2] !== Wo.pct)
    ((Ua = rm(Wo.pct, Wo.name)),
      (Fa[0] = rm),
      (Fa[1] = Wo.name),
      (Fa[2] = Wo.pct),
      (Fa[3] = Ua));
  else Ua = Fa[3];
  let Wa;
  if (Fa[4] !== Ua)
    ((Wa = e(Text, { wrap: "wrap", children: Ua })), (Fa[4] = Ua), (Fa[5] = Wa));
  else Wa = Fa[5];
  let ja;
  if (Fa[6] !== am)
    ((ja = e(Box, {
      paddingLeft: 1,
      children: e(Text, { dimColor: !0, wrap: "wrap", children: am }),
    })),
      (Fa[6] = am),
      (Fa[7] = ja));
  else ja = Fa[7];
  let Ah;
  if (Fa[8] !== im || Fa[9] !== Wa || Fa[10] !== ja)
    ((Ah = r(Box, { flexDirection: "column", width: im, children: [Wa, ja] })),
      (Fa[8] = im),
      (Fa[9] = Wa),
      (Fa[10] = ja),
      (Fa[11] = Ah));
  else Ah = Fa[11];
  return Ah;
}
function nl(HD) {
  let Ga = _(22),
    { stat: Ha, totalCost: lm, maxWidth: cm } = HD,
    us = um[Ha.key],
    Ka,
    za,
    Ya,
    qa,
    Xa,
    Ja;
  if (Ga[0] !== cm || Ga[1] !== us || Ga[2] !== Ha.cost || Ga[3] !== lm) {
    let GD = Math.round((Ha.cost / lm) * 100);
    za = Box;
    Xa = "column";
    Ja = cm;
    Ka = Text;
    Ya = "wrap";
    qa = us.headline(GD);
    ((Ga[0] = cm),
      (Ga[1] = us),
      (Ga[2] = Ha.cost),
      (Ga[3] = lm),
      (Ga[4] = Ka),
      (Ga[5] = za),
      (Ga[6] = Ya),
      (Ga[7] = qa),
      (Ga[8] = Xa),
      (Ga[9] = Ja));
  } else
    ((Ka = Ga[4]),
      (za = Ga[5]),
      (Ya = Ga[6]),
      (qa = Ga[7]),
      (Xa = Ga[8]),
      (Ja = Ga[9]));
  let Qa;
  if (Ga[10] !== Ka || Ga[11] !== Ya || Ga[12] !== qa)
    ((Qa = e(Ka, { wrap: Ya, children: qa })),
      (Ga[10] = Ka),
      (Ga[11] = Ya),
      (Ga[12] = qa),
      (Ga[13] = Qa));
  else Qa = Ga[13];
  let Za;
  if (Ga[14] !== us.body)
    ((Za = e(Box, {
      paddingLeft: 1,
      children: e(Text, { dimColor: !0, wrap: "wrap", children: us.body }),
    })),
      (Ga[14] = us.body),
      (Ga[15] = Za));
  else Za = Ga[15];
  let Rh;
  if (
    Ga[16] !== za ||
    Ga[17] !== Xa ||
    Ga[18] !== Ja ||
    Ga[19] !== Qa ||
    Ga[20] !== Za
  )
    ((Rh = r(za, { flexDirection: Xa, width: Ja, children: [Qa, Za] })),
      (Ga[16] = za),
      (Ga[17] = Xa),
      (Ga[18] = Ja),
      (Ga[19] = Qa),
      (Ga[20] = Za),
      (Ga[21] = Rh));
  else Rh = Ga[21];
  return Rh;
}
function Sy(xm) {
  return xm.enrichError === null ? xm : { ...xm, enrichError: null };
}
function by(gy) {
  return { text: gy.text, color: gy.variant };
}
function Cy(wm) {
  let { title: H0, displayName: V0, limit: G0 } = wm;
  return { bar: V0, title: H0, limit: G0, alwaysShowDateInReset: !0 };
}
function so(w0) {
  let st = _(41),
    {
      title: ys,
      limit: k0,
      maxWidth: sl,
      showTimeInReset: Bh,
      alwaysShowDateInReset: $h,
      extraSubtext: pm,
      trailingLines: Ss,
      subtextOverride: Fh,
    } = w0,
    fm = Bh === void 0 ? !0 : Bh,
    gm = $h === void 0 ? !1 : $h,
    { utilization: il, resets_at: rl } = k0;
  if (il === null) {
    return null;
  }
  let bs = `${Math.floor(il)}% used`,
    lt;
  if (rl) {
    let wt;
    if (st[0] !== gm || st[1] !== rl || st[2] !== fm)
      ((wt = formatResetText(rl, !0, fm, gm)),
        (st[0] = gm),
        (st[1] = rl),
        (st[2] = fm),
        (st[3] = wt));
    else wt = st[3];
    lt = `Resets ${wt}`;
  }
  if (pm) {
    if (lt) lt = `${pm} \xB7 ${lt}`;
    else lt = pm;
  }
  if (Fh !== void 0) lt = Fh;
  if (sl >= 62) {
    let wt;
    if (st[4] !== ys)
      ((wt = e(Text, { bold: !0, children: ys })), (st[4] = ys), (st[5] = wt));
    else wt = st[5];
    const Vo = il / 100;
    let go;
    if (st[6] !== Vo)
      ((go = e(ProgressBar, {
        ratio: Vo,
        width: 50,
        fillColor: "rate_limit_fill",
        emptyColor: "rate_limit_empty",
      })),
        (st[6] = Vo),
        (st[7] = go));
    else go = st[7];
    let ho;
    if (st[8] !== bs)
      ((ho = e(Text, { children: bs })), (st[8] = bs), (st[9] = ho));
    else ho = st[9];
    let Go;
    if (st[10] !== go || st[11] !== ho)
      ((Go = r(Box, { flexDirection: "row", gap: 1, children: [go, ho] })),
        (st[10] = go),
        (st[11] = ho),
        (st[12] = Go));
    else Go = st[12];
    let So;
    if (st[13] !== lt)
      ((So = lt && e(Text, { dimColor: !0, children: lt })),
        (st[13] = lt),
        (st[14] = So));
    else So = st[14];
    let bo;
    if (st[15] !== Ss)
      ((bo = e(_i, { lines: Ss })), (st[15] = Ss), (st[16] = bo));
    else bo = st[16];
    let Ai;
    if (st[17] !== wt || st[18] !== Go || st[19] !== So || st[20] !== bo)
      ((Ai = r(Box, {
        flexDirection: "column",
        flexShrink: 0,
        children: [wt, Go, So, bo],
      })),
        (st[17] = wt),
        (st[18] = Go),
        (st[19] = So),
        (st[20] = bo),
        (st[21] = Ai));
    else Ai = st[21];
    return Ai;
  } else {
    let wt;
    if (st[22] !== ys)
      ((wt = e(Text, { bold: !0, children: ys })), (st[22] = ys), (st[23] = wt));
    else wt = st[23];
    let Vo;
    if (st[24] !== lt)
      ((Vo =
        lt &&
        r(N, {
          children: [
            e(Text, { children: " " }),
            r(Text, { dimColor: !0, children: ["\xB7 ", lt] }),
          ],
        })),
        (st[24] = lt),
        (st[25] = Vo));
    else Vo = st[25];
    let go;
    if (st[26] !== wt || st[27] !== Vo)
      ((go = r(Text, { children: [wt, Vo] })),
        (st[26] = wt),
        (st[27] = Vo),
        (st[28] = go));
    else go = st[28];
    let ho;
    if (st[29] !== Ss)
      ((ho = e(_i, { lines: Ss })), (st[29] = Ss), (st[30] = ho));
    else ho = st[30];
    const Go = il / 100;
    let So;
    if (st[31] !== sl || st[32] !== Go)
      ((So = e(ProgressBar, {
        ratio: Go,
        width: sl,
        fillColor: "rate_limit_fill",
        emptyColor: "rate_limit_empty",
      })),
        (st[31] = sl),
        (st[32] = Go),
        (st[33] = So));
    else So = st[33];
    let bo;
    if (st[34] !== bs)
      ((bo = e(Text, { children: bs })), (st[34] = bs), (st[35] = bo));
    else bo = st[35];
    let Ai;
    if (st[36] !== go || st[37] !== ho || st[38] !== So || st[39] !== bo)
      ((Ai = r(Box, {
        flexDirection: "column",
        flexShrink: 0,
        children: [go, ho, So, bo],
      })),
        (st[36] = go),
        (st[37] = ho),
        (st[38] = So),
        (st[39] = bo),
        (st[40] = Ai));
    else Ai = st[40];
    return Ai;
  }
}
function _i({ lines: s }) {
  return (s ?? []).map((c, m) =>
    e(Text, { dimColor: !c.color, color: c.color, children: c.text }, m),
  );
}
function Pi() {
  let ll = _(6),
    { columns: D0 } = useTerminalSize(),
    T0 = D0 - 2,
    al = Math.min(T0, 80),
    Uh;
  if (ll[0] === MEMO_CACHE_SENTINEL) ((Uh = isClaudeAISubscriber()), (ll[0] = Uh));
  else Uh = ll[0];
  let v0 = Uh,
    Wh;
  if (ll[1] === MEMO_CACHE_SENTINEL) ((Wh = getRemoteTransport()), (ll[1] = Wh));
  else Wh = ll[1];
  let x0 = Wh !== null,
    jh,
    Hh;
  if (ll[2] === MEMO_CACHE_SENTINEL)
    ((jh = e(Ll, { isThinClient: x0 })),
      (Hh = isSkillDoctorEnabled() ? e(mi, {}) : null),
      (ll[2] = jh),
      (ll[3] = Hh));
  else ((jh = ll[2]), (Hh = ll[3]));
  let Vh;
  if (ll[4] !== al)
    ((Vh = e(Box, {
      flexDirection: "column",
      width: "100%",
      children: r(Box, {
        flexDirection: "column",
        gap: 1,
        flexShrink: 0,
        children: [
          jh,
          Hh,
          getAPIProvider() === "gateway"
            ? e(Ol, { maxWidth: al })
            : v0
              ? e($l, { maxWidth: al })
              : e(Text, {
                  dimColor: !0,
                  children: e(ActionKeybindingHint, {
                    action: "confirm:no",
                    context: "Settings",
                    fallback: "Esc",
                    description: "cancel",
                  }),
                }),
        ],
      }),
    })),
      (ll[4] = al),
      (ll[5] = Vh));
  else Vh = ll[5];
  return Vh;
}
function Ol(M0) {
  let cl = _(6),
    { maxWidth: hm } = M0,
    Gh;
  if (cl[0] === MEMO_CACHE_SENTINEL) ((Gh = getUnifiedRateLimitWindows()), (cl[0] = Gh));
  else Gh = cl[0];
  let Sm = Gh.overage,
    ul;
  if (cl[1] !== hm)
    ((ul = Sm
      ? e(so, {
          title: "Spend limit",
          limit: {
            utilization: Math.round(Sm.utilization * 100),
            resets_at: new Date(Sm.resets_at * 1000).toISOString(),
          },
          maxWidth: hm,
          alwaysShowDateInReset: !0,
        })
      : haveLimitsBeenObserved()
        ? null
        : e(Text, {
            dimColor: !0,
            children: "Spend limit \xB7 shown once your gateway reports one",
          })),
      (cl[1] = hm),
      (cl[2] = ul));
  else ul = cl[2];
  let Kh;
  if (cl[3] === MEMO_CACHE_SENTINEL)
    ((Kh = e(Text, {
      dimColor: !0,
      children: e(ActionKeybindingHint, {
        action: "confirm:no",
        context: "Settings",
        fallback: "Esc",
        description: "cancel",
      }),
    })),
      (cl[3] = Kh));
  else Kh = cl[3];
  let zh;
  if (cl[4] !== ul)
    ((zh = r(Box, { flexDirection: "column", gap: 1, children: [ul, Kh] })),
      (cl[4] = ul),
      (cl[5] = zh));
  else zh = cl[5];
  return zh;
}
function Ll(E0) {
  let Ri = _(10),
    { isThinClient: dl } = E0,
    Yh;
  if (Ri[0] === MEMO_CACHE_SENTINEL) ((Yh = stripAnsi(formatCostSummary())), (Ri[0] = Yh));
  else Yh = Ri[0];
  let A0 = Yh,
    qh;
  if (Ri[1] !== dl)
    ((qh = () => (dl ? Im() : null)), (Ri[1] = dl), (Ri[2] = qh));
  else qh = Ri[2];
  let [ml] = d(qh);
  const bm = dl ? " (remote)" : "";
  let pl;
  if (Ri[3] !== bm)
    ((pl = r(TitleWithSubtitle, { children: ["Session", bm] })), (Ri[3] = bm), (Ri[4] = pl));
  else pl = Ri[4];
  let fl;
  if (Ri[5] !== ml)
    ((fl = ml
      ? e(Dn, {
          fallback: e(Text, {
            dimColor: !0,
            children: "Loading remote cost\u2026",
          }),
          children: e(Bl, { costPromise: ml }),
        })
      : e(Text, { dimColor: !0, children: A0 })),
      (Ri[5] = ml),
      (Ri[6] = fl));
  else fl = Ri[6];
  let Xh;
  if (Ri[7] !== pl || Ri[8] !== fl)
    ((Xh = r(Box, { flexDirection: "column", gap: 1, children: [pl, fl] })),
      (Ri[7] = pl),
      (Ri[8] = fl),
      (Ri[9] = Xh));
  else Xh = Ri[9];
  return Xh;
}
function Bl(R0) {
  let _0 = _(2),
    { costPromise: I0 } = R0;
  const Cm = kn(I0);
  let Jh;
  if (_0[0] !== Cm)
    ((Jh = e(Text, { dimColor: !0, children: Cm })), (_0[0] = Cm), (_0[1] = Jh));
  else Jh = _0[1];
  return Jh;
}
async function Im() {
  let s = getRemoteTransport();
  if (!s) return "Remote cost unavailable";
  try {
    return (await s.sendControlRequest({ subtype: "get_session_cost" })).text;
  } catch (c) {
    return `Remote cost unavailable (${l(c)})`;
  }
}
var vn = "Failed to load usage data";
function _m(s, c) {
  if (s === void 0) return "";
  return ` as of ${formatRelativeTimeAgo(new Date(s), { now: c })}`;
}
function $l(wm) {
  let $e = _(62),
    { maxWidth: kt } = wm,
    { storageV5: Cs, credentials: km } = useStorageV5Context(),
    Qh;
  if ($e[0] !== Cs) ((Qh = () => seedUtilization(Cs)), ($e[0] = Cs), ($e[1] = Qh));
  else Qh = $e[1];
  let [Co] = d(Qh),
    Zh;
  if (
    $e[2] !== Co?.fetchedAtMs ||
    $e[3] !== Co?.source ||
    $e[4] !== Co?.utilization
  )
    ((Zh = () => ({
      utilization: Co?.utilization ?? null,
      source: Co?.source ?? null,
      fetchedAtMs: Co?.fetchedAtMs,
      enrichError: null,
    })),
      ($e[2] = Co?.fetchedAtMs),
      ($e[3] = Co?.source),
      ($e[4] = Co?.utilization),
      ($e[5] = Zh));
  else Zh = $e[5];
  let [P0, Dm] = d(Zh),
    { utilization: Oe, enrichError: Ut } = P0,
    [Ii, gl] = d(null),
    [hl, ey] = d(!0),
    ty;
  if ($e[6] !== km || $e[7] !== Cs)
    ((ty = async () => {
      (ey(!0), gl(null), Dm(Sy));
      let Ve = await loadPlanRateLimits(Cs, km);
      bb34: switch (Ve.status) {
        case "ok": {
          (Dm({
            utilization: Ve.utilization,
            source: "ok",
            fetchedAtMs: void 0,
            enrichError: null,
          }),
            logFeatureOk("usage_plan_limits"));
          break bb34;
        }
        case "empty_response": {
          (logFeatureBad("usage_plan_limits", "empty_response"), gl(vn));
          break bb34;
        }
        case "seeded": {
          let O0 = new Date();
          (Dm((yl) => {
            let oy = yl.utilization === null;
            let sy =
              Ve.seedSource === "headers"
                ? "headers"
                : oy
                  ? "persisted"
                  : yl.source;
            let iy =
              Ve.seedSource === "headers"
                ? void 0
                : oy
                  ? Ve.seedFetchedAtMs
                  : yl.fetchedAtMs;
            return {
              utilization:
                Ve.seedSource === "headers"
                  ? Ve.utilization
                  : (yl.utilization ?? Ve.utilization),
              source: sy,
              fetchedAtMs: iy,
              enrichError:
                Ve.seedSource === "persisted"
                  ? `Showing last-known usage${sy === "persisted" ? _m(iy, O0) : ""}${Ve.rateLimitedVia !== null ? " (rate limited \u2014 try again in a moment)" : " (could not refresh)"}`
                  : Ve.rateLimitedVia !== null
                    ? hasWeeklyScopedModelLimits(Ve.utilization.limits)
                      ? "Partial usage data (rate limited \u2014 try again in a moment)"
                      : "Per-model breakdown unavailable (rate limited \u2014 try again in a moment)"
                    : "Could not refresh usage data",
            };
          }),
            logFeatureSad(
              "usage_plan_limits",
              Ve.rateLimitedVia === null
                ? "refresh_failed_seeded"
                : Ve.rateLimitedVia === "envelope"
                  ? "rate_limited_seeded_envelope"
                  : "rate_limited_seeded_http_429",
            ));
          break bb34;
        }
        case "unavailable": {
          if (Ve.rateLimitedVia !== null)
            (gl(
              "Usage endpoint is rate limited. Please try again in a moment.",
            ),
              logFeatureBad(
                "usage_plan_limits",
                Ve.rateLimitedVia === "envelope"
                  ? "rate_limited_envelope"
                  : "rate_limited_http_429",
              ));
          else
            (gl(Ve.responseBody ? `${vn}: ${Ve.responseBody}` : vn),
              logFeatureBad("usage_plan_limits", "load_failed"));
        }
      }
      ey(!1);
    }),
      ($e[6] = km),
      ($e[7] = Cs),
      ($e[8] = ty));
  else ty = $e[8];
  let bn = ty,
    ry,
    ay;
  if ($e[9] !== bn)
    ((ry = () => {
      bn();
    }),
      (ay = [bn]),
      ($e[9] = bn),
      ($e[10] = ry),
      ($e[11] = ay));
  else ((ry = $e[10]), (ay = $e[11]));
  E(ry, ay);
  let ly;
  if ($e[12] !== bn)
    ((ly = () => {
      bn();
    }),
      ($e[12] = bn),
      ($e[13] = ly));
  else ly = $e[13];
  const Tm = (!!Ii || !!Ut) && !hl;
  let cy;
  if ($e[14] !== Tm)
    ((cy = { context: "Settings", isActive: Tm }),
      ($e[14] = Tm),
      ($e[15] = cy));
  else cy = $e[15];
  if ((useKeybinding("settings:retry", ly, cy), Ii)) {
    let oo;
    if ($e[16] !== Ii)
      ((oo = r(Text, { color: "error", children: ["Error: ", Ii] })),
        ($e[16] = Ii),
        ($e[17] = oo));
    else oo = $e[17];
    let no;
    if ($e[18] === MEMO_CACHE_SENTINEL)
      ((no = e(Text, {
        dimColor: !0,
        children: r(DotSeparatedList, {
          children: [
            e(ActionKeybindingHint, {
              action: "settings:retry",
              context: "Settings",
              fallback: "r",
              description: "retry",
            }),
            e(ActionKeybindingHint, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "cancel",
            }),
          ],
        }),
      })),
        ($e[18] = no));
    else no = $e[18];
    let Cn;
    if ($e[19] !== oo)
      ((Cn = r(Box, { flexDirection: "column", gap: 1, children: [oo, no] })),
        ($e[19] = oo),
        ($e[20] = Cn));
    else Cn = $e[20];
    return Cn;
  }
  if (!Oe) {
    let oo;
    if ($e[21] === MEMO_CACHE_SENTINEL)
      ((oo = e(Text, { dimColor: !0, children: "Loading usage data\u2026" })),
        ($e[21] = oo));
    else oo = $e[21];
    let no;
    if ($e[22] === MEMO_CACHE_SENTINEL)
      ((no = r(Box, {
        flexDirection: "column",
        gap: 1,
        children: [
          oo,
          e(Text, {
            dimColor: !0,
            children: e(ActionKeybindingHint, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "cancel",
            }),
          }),
        ],
      })),
        ($e[22] = no));
    else no = $e[22];
    return no;
  }
  let oo;
  if ($e[23] === MEMO_CACHE_SENTINEL) ((oo = getSubscriptionType()), ($e[23] = oo));
  else oo = $e[23];
  let vm = oo,
    L0 = vm === "max" || vm === "team" || vm === null,
    Sl,
    no,
    Cn,
    Cl;
  if (
    $e[24] !== kt ||
    $e[25] !== Oe.five_hour ||
    $e[26] !== Oe.limits ||
    $e[27] !== Oe.seven_day ||
    $e[28] !== Oe.seven_day_sonnet
  ) {
    let N0 = getRateLimitPromoNotices();
    let F0 = (B0) =>
      N0.filter(($0) => $0.bar.toLowerCase() === B0.toLowerCase()).map(by);
    let U0 = [
      {
        bar: "five_hour",
        title: "Current session",
        limit: Oe.five_hour,
        alwaysShowDateInReset: !1,
      },
      {
        bar: "seven_day",
        title: "Current week (all models)",
        limit: Oe.seven_day,
        alwaysShowDateInReset: !0,
      },
      ...(L0
        ? [
            {
              bar: "seven_day_sonnet",
              title: "Current week (Sonnet only)",
              limit: Oe.seven_day_sonnet,
              alwaysShowDateInReset: !0,
            },
          ]
        : []),
      ...getModelWeeklyLimitRows(Oe.limits, getOverageIncludedModels()).map(Cy),
    ];
    Sl = Box;
    no = "column";
    Cn = 1;
    Cl = U0.map((ws) => {
      let { bar: W0, title: dy, limit: my, alwaysShowDateInReset: j0 } = ws;
      return (
        my &&
        e(
          so,
          {
            title: dy,
            limit: my,
            maxWidth: kt,
            alwaysShowDateInReset: j0,
            trailingLines: F0(W0),
          },
          dy,
        )
      );
    });
    (($e[24] = kt),
      ($e[25] = Oe.five_hour),
      ($e[26] = Oe.limits),
      ($e[27] = Oe.seven_day),
      ($e[28] = Oe.seven_day_sonnet),
      ($e[29] = Sl),
      ($e[30] = no),
      ($e[31] = Cn),
      ($e[32] = Cl));
  } else ((Sl = $e[29]), (no = $e[30]), (Cn = $e[31]), (Cl = $e[32]));
  let ws;
  if ($e[33] !== kt || $e[34] !== Oe.cinder_cove)
    ((ws =
      Oe.cinder_cove &&
      e(so, {
        title: "Claude Code and Cowork credit",
        limit: Oe.cinder_cove,
        maxWidth: kt,
        subtextOverride: Oe.cinder_cove.resets_at
          ? `One-time credit \xB7 Expires ${new Date(Oe.cinder_cove.resets_at).toLocaleDateString("en-US", { month: "long", day: "numeric" })}`
          : "One-time credit",
      })),
      ($e[33] = kt),
      ($e[34] = Oe.cinder_cove),
      ($e[35] = ws));
  else ws = $e[35];
  let wl;
  if ($e[36] !== kt)
    ((wl = e(Ei, { maxWidth: kt })), ($e[36] = kt), ($e[37] = wl));
  else wl = $e[37];
  let kl;
  if ($e[38] !== kt || $e[39] !== Oe.extra_usage)
    ((kl =
      Oe.extra_usage && e(Fl, { extraUsage: Oe.extra_usage, maxWidth: kt })),
      ($e[38] = kt),
      ($e[39] = Oe.extra_usage),
      ($e[40] = kl));
  else kl = $e[40];
  let Dl;
  if ($e[41] !== Ut)
    ((Dl = Ut && e(Text, { dimColor: !0, children: Ut })),
      ($e[41] = Ut),
      ($e[42] = Dl));
  else Dl = $e[42];
  let Tl;
  if ($e[43] !== Ut || $e[44] !== hl)
    ((Tl = hl && !Ut && e(Text, { dimColor: !0, children: "Refreshing\u2026" })),
      ($e[43] = Ut),
      ($e[44] = hl),
      ($e[45] = Tl));
  else Tl = $e[45];
  let vl;
  if ($e[46] !== Ut)
    ((vl =
      Ut &&
      e(ActionKeybindingHint, {
        action: "settings:retry",
        context: "Settings",
        fallback: "r",
        description: "retry",
      })),
      ($e[46] = Ut),
      ($e[47] = vl));
  else vl = $e[47];
  let py;
  if ($e[48] === MEMO_CACHE_SENTINEL)
    ((py = e(ActionKeybindingHint, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "cancel",
    })),
      ($e[48] = py));
  else py = $e[48];
  let xl;
  if ($e[49] !== vl)
    ((xl = e(Text, { dimColor: !0, children: r(DotSeparatedList, { children: [vl, py] }) })),
      ($e[49] = vl),
      ($e[50] = xl));
  else xl = $e[50];
  let fy;
  if (
    $e[51] !== Sl ||
    $e[52] !== no ||
    $e[53] !== Cn ||
    $e[54] !== Cl ||
    $e[55] !== ws ||
    $e[56] !== wl ||
    $e[57] !== kl ||
    $e[58] !== Dl ||
    $e[59] !== Tl ||
    $e[60] !== xl
  )
    ((fy = r(Sl, {
      flexDirection: no,
      gap: Cn,
      children: [Cl, ws, wl, kl, Dl, Tl, xl],
    })),
      ($e[51] = Sl),
      ($e[52] = no),
      ($e[53] = Cn),
      ($e[54] = Cl),
      ($e[55] = ws),
      ($e[56] = wl),
      ($e[57] = kl),
      ($e[58] = Dl),
      ($e[59] = Tl),
      ($e[60] = xl),
      ($e[61] = fy));
  else fy = $e[61];
  return fy;
}
var Do = "Usage credits";
function Fl(K0) {
  let wo = _(27),
    { extraUsage: Ke, maxWidth: Mm } = K0,
    Ml = getSubscriptionType(),
    Em = Ml === "pro" || Ml === "max";
  if (!Em && !(Ml === "team" || Ml === "enterprise")) {
    return null;
  }
  if (!Ke.is_enabled) {
    if (Em && USAGE_CREDITS_COMMAND.isEnabled()) {
      let Wt;
      if (wo[0] === MEMO_CACHE_SENTINEL)
        ((Wt = e(TitleWithSubtitle, {
          subtitle: "Usage credits are off \xB7 /usage-credits to turn them on",
          children: Do,
        })),
          (wo[0] = Wt));
      else Wt = wo[0];
      return Wt;
    }
    return null;
  }
  let ko = Ke.currency ?? "USD";
  if (Ke.monthly_limit === null) {
    if (Em) {
      let Wt;
      if (wo[1] === MEMO_CACHE_SENTINEL)
        ((Wt = e(TitleWithSubtitle, { subtitle: "Unlimited", children: Do })), (wo[1] = Wt));
      else Wt = wo[1];
      return Wt;
    }
    if (typeof Ke.used_credits !== "number") {
      return null;
    }
    let Wt;
    if (wo[2] !== ko || wo[3] !== Ke.used_credits)
      ((Wt = formatCurrencyAmount(Ke.used_credits, ko)),
        (wo[2] = ko),
        (wo[3] = Ke.used_credits),
        (wo[4] = Wt));
    else Wt = wo[4];
    const Ds = `${Wt} spent`;
    let wn;
    if (wo[5] !== Ds)
      ((wn = e(TitleWithSubtitle, { subtitle: Ds, children: Do })),
        (wo[5] = Ds),
        (wo[6] = wn));
    else wn = wo[6];
    return wn;
  }
  if (typeof Ke.used_credits !== "number") {
    return null;
  }
  let Am =
      Ke.utilization ??
      (Ke.monthly_limit > 0
        ? Math.max(0, Math.min(100, (Ke.used_credits / Ke.monthly_limit) * 100))
        : 100),
    Wt;
  if (wo[7] !== ko || wo[8] !== Ke.used_credits)
    ((Wt = formatCurrencyAmount(Ke.used_credits, ko)),
      (wo[7] = ko),
      (wo[8] = Ke.used_credits),
      (wo[9] = Wt));
  else Wt = wo[9];
  let z0 = Wt,
    Ds;
  if (wo[10] !== ko || wo[11] !== Ke.monthly_limit)
    ((Ds = formatCurrencyAmount(Ke.monthly_limit, ko)),
      (wo[10] = ko),
      (wo[11] = Ke.monthly_limit),
      (wo[12] = Ds));
  else Ds = wo[12];
  let Y0 = Ds,
    El,
    wn,
    Al,
    Il;
  if (wo[13] !== Am) {
    let hy = new Date();
    let q0 = new Date(hy.getFullYear(), hy.getMonth() + 1, 1);
    El = so;
    Il = Do;
    wn = Am;
    Al = q0.toISOString();
    ((wo[13] = Am), (wo[14] = El), (wo[15] = wn), (wo[16] = Al), (wo[17] = Il));
  } else ((El = wo[14]), (wn = wo[15]), (Al = wo[16]), (Il = wo[17]));
  let _l;
  if (wo[18] !== wn || wo[19] !== Al)
    ((_l = { utilization: wn, resets_at: Al }),
      (wo[18] = wn),
      (wo[19] = Al),
      (wo[20] = _l));
  else _l = wo[20];
  const Rm = `${z0} / ${Y0} spent`;
  let yy;
  if (
    wo[21] !== El ||
    wo[22] !== Mm ||
    wo[23] !== Il ||
    wo[24] !== _l ||
    wo[25] !== Rm
  )
    ((yy = e(El, {
      title: Il,
      limit: _l,
      showTimeInReset: !1,
      alwaysShowDateInReset: !0,
      extraSubtext: Rm,
      maxWidth: Mm,
    })),
      (wo[21] = El),
      (wo[22] = Mm),
      (wo[23] = Il),
      (wo[24] = _l),
      (wo[25] = Rm),
      (wo[26] = yy));
  else yy = wo[26];
  return yy;
}
var xp = toESM(Pm(), 1);
F();
function wy(s) {
  let c = s
    .map((m) => m.messageCount)
    .filter((m) => m > 0)
    .sort((m, T) => m - T);
  if (c.length === 0) return null;
  return {
    p25: c[Math.floor(c.length * 0.25)],
    p50: c[Math.floor(c.length * 0.5)],
    p75: c[Math.floor(c.length * 0.75)],
  };
}
function Li(s, c = {}) {
  let { terminalWidth: m = 80, showMonthLabels: T = !0 } = c,
    R = 4,
    v = m - 4,
    A = Math.min(52, Math.max(10, v)),
    H = new Map();
  for (let K of s) H.set(K.date, K);
  let B = wy(s),
    Y = new Date();
  Y.setHours(0, 0, 0, 0);
  let G = new Date(Y);
  G.setDate(Y.getDate() - Y.getDay());
  let j = new Date(G);
  j.setDate(j.getDate() - (A - 1) * 7);
  let O = Array.from({ length: 7 }, () => Array(A).fill("")),
    q = [],
    Z = -1,
    Q = new Date(j);
  for (let K = 0; K < A; K++)
    for (let I = 0; I < 7; I++) {
      if (Q > Y) {
        ((O[I][K] = " "), Q.setDate(Q.getDate() + 1));
        continue;
      }
      let X = ky(Q),
        J = H.get(X);
      if (I === 0) {
        let he = Q.getMonth();
        if (he !== Z) (q.push({ month: he, week: K }), (Z = he));
      }
      let me = Dy(J?.messageCount || 0, B);
      ((O[I][K] = Ty(me)), Q.setDate(Q.getDate() + 1));
    }
  let se = [];
  if (T) {
    let K = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      I = q.map((me) => me.month),
      X = Math.floor(A / Math.max(I.length, 1)),
      J = I.map((me) => K[me].padEnd(X)).join("");
    se.push("    " + J);
  }
  let ce = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (let K = 0; K < 7; K++) {
    let X =
      ([1, 3, 5].includes(K) ? ce[K].padEnd(3) : "   ") + " " + O[K].join("");
    se.push(X);
  }
  return (
    se.push(""),
    se.push(
      "    Less " +
        [To("\u2591"), To("\u2592"), To("\u2593"), To("\u2588")].join(" ") +
        " More",
    ),
    se.join(`
`)
  );
}
function ky(s) {
  let c = s.getFullYear(),
    m = String(s.getMonth() + 1).padStart(2, "0"),
    T = String(s.getDate()).padStart(2, "0");
  return `${c}-${m}-${T}`;
}
function Dy(s, c) {
  if (s === 0 || !c) return 0;
  if (s >= c.p75) return 4;
  if (s >= c.p50) return 3;
  if (s >= c.p25) return 2;
  return 1;
}
var To = chalk.hex("#da7756");
function Ty(s) {
  switch (s) {
    case 0:
      return chalk.gray("\xB7");
    case 1:
      return To("\u2591");
    case 2:
      return To("\u2592");
    case 3:
      return To("\u2593");
    case 4:
      return To("\u2588");
    default:
      return chalk.gray("\xB7");
  }
}
import { spawn } from "child_process";
import { mkdir, unlink, writeFile } from "fs/promises";
import { join as Om } from "path";
async function Lm(s, c) {
  try {
    let m = Om(getClaudeTempDir(), "screenshots");
    await mkdir(m, { recursive: !0, mode: 448 });
    let T = Om(m, `screenshot-${Date.now()}.png`),
      { ansiToPng: R } = await import("../图片-截图-ComputerUse/ansiToPng.5cwtw2dv.js"),
      v = R(s, c);
    await writeFile(T, v);
    let A;
    try {
      A = await Ay(T);
    } catch (H) {
      return (
        logError(H),
        logFeatureBad("clipboard_write", "copy_failed"),
        {
          success: !1,
          message: `Failed to copy screenshot: ${H instanceof Error ? H.message : "Unknown error"}`,
        }
      );
    } finally {
      await unlink(T).catch(() => {});
    }
    if (A.success) logFeatureOk("clipboard_write");
    else logFeatureBad("clipboard_write", "copy_failed");
    return A;
  } catch (m) {
    return (
      logError(m),
      logFeatureBad("clipboard_write", "render_failed"),
      {
        success: !1,
        message: `Failed to copy screenshot: ${m instanceof Error ? m.message : "Unknown error"}`,
      }
    );
  }
}
async function Ay(s) {
  let c = getCurrentPlatform();
  if (c === "macos") {
    let T = `set the clipboard to (read (POSIX file "${s.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}") as \xABclass PNGf\xBB)`,
      R = await execFileNoThrowWithCwd("osascript", ["-e", T], { timeout: 5000 });
    if (R.code === 0)
      return { success: !0, message: "Screenshot copied to clipboard" };
    return { success: !1, message: `Failed to copy to clipboard: ${R.stderr}` };
  }
  if (c === "linux") {
    if (
      (await Ry("xclip", [
        "-selection",
        "clipboard",
        "-t",
        "image/png",
        "-i",
        s,
      ])) === 0
    )
      return { success: !0, message: "Screenshot copied to clipboard" };
    return {
      success: !1,
      message:
        "Failed to copy to clipboard. Please install xclip: sudo apt install xclip",
    };
  }
  if (c === "windows") {
    let m = `Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.Clipboard]::SetImage([System.Drawing.Image]::FromFile(${quotePowerShellLiteral(s, "the screenshot temp path (override with CLAUDE_CODE_TMPDIR)")}))`,
      T = await execFileNoThrowWithCwd("powershell", ["-NoProfile", "-Command", m], {
        timeout: 5000,
      });
    if (T.code === 0)
      return { success: !0, message: "Screenshot copied to clipboard" };
    return { success: !1, message: `Failed to copy to clipboard: ${T.stderr}` };
  }
  return {
    success: !1,
    message: `Screenshot to clipboard is not supported on ${c}`,
  };
}
function Ry(s, c, m = 5000) {
  return new Promise((T) => {
    let R;
    try {
      R = spawn(s, c, {
        cwd: void 0,
        detached: !0,
        stdio: "ignore",
        windowsHide: !0,
      });
    } catch {
      T(null);
      return;
    }
    wS(R.pid);
    let v = !1;
    function A(B) {
      if (v) return;
      ((v = !0), clearTimeout(H), T(B));
    }
    let H = setTimeout(() => {
      (R.kill("SIGKILL"), A(null));
    }, m);
    (R.once("exit", (B) => A(B)), R.once("error", () => A(null)), R.unref());
  });
}
import { basename, join as Ao, sep as Gm } from "path";
import { join as Iy } from "path";
var Ko = 5,
  _y = 1,
  $i = 5,
  Py = "stats-cache.json",
  Ni = null;
async function Fm(s) {
  while (Ni) await Ni;
  let c;
  Ni = new Promise((m) => {
    c = m;
  });
  try {
    return await s();
  } finally {
    ((Ni = null), c?.());
  }
}
function Um() {
  return Iy(getClaudeConfigDir(), Py);
}
function Mn() {
  return {
    version: Ko,
    lastComputedDate: null,
    dailyActivity: [],
    dailyModelTokens: [],
    dailyModelTokensVersion: $i,
    modelUsage: {},
    totalSessions: 0,
    totalMessages: 0,
    longestSession: null,
    firstSessionDate: null,
    hourCounts: {},
    shotDistribution: {},
  };
}
function Oy(s) {
  if (typeof s.version !== "number" || s.version < _y || s.version > Ko)
    return null;
  if (
    !Array.isArray(s.dailyActivity) ||
    !Array.isArray(s.dailyModelTokens) ||
    typeof s.totalSessions !== "number" ||
    typeof s.totalMessages !== "number"
  )
    return null;
  return {
    version: Ko,
    lastComputedDate: s.lastComputedDate ?? null,
    dailyActivity: s.dailyActivity,
    dailyModelTokens: s.dailyModelTokens,
    dailyModelTokensVersion: s.dailyModelTokensVersion,
    modelUsage: s.modelUsage ?? {},
    totalSessions: s.totalSessions,
    totalMessages: s.totalMessages,
    longestSession: s.longestSession ?? null,
    firstSessionDate: s.firstSessionDate ?? null,
    hourCounts: s.hourCounts ?? {},
    shotDistribution: s.shotDistribution,
  };
}
async function Wm(s) {
  let c = Um();
  try {
    let m;
    if (s !== void 0) {
      let v = await s.read([STORAGE_KEYS.state("stats-cache")]);
      if (!v.ok) return (logForDebugging(`Failed to load stats cache: ${describeStorageError(v.error)}`), Mn());
      if (!v.value.items[0].found)
        return (logForDebugging("Failed to load stats cache: not found"), Mn());
      m = Buffer.from(v.value.items[0].value).toString("utf8");
    } else m = await getFileStorage().read(c);
    let T = jsonParse(m);
    if (T.version !== Ko) {
      let v = Oy(T);
      if (!v)
        return (
          logForDebugging(
            `Stats cache version ${T.version} not migratable (expected ${Ko}), returning empty cache`,
          ),
          Mn()
        );
      logForDebugging(`Migrated stats cache from v${T.version} to v${Ko}`);
      let A = $m(v);
      return (await En(A, s), A);
    }
    if (
      !Array.isArray(T.dailyActivity) ||
      !Array.isArray(T.dailyModelTokens) ||
      typeof T.totalSessions !== "number" ||
      typeof T.totalMessages !== "number"
    )
      return (
        logForDebugging("Stats cache has invalid structure, returning empty cache"),
        Mn()
      );
    return $m(T);
  } catch (m) {
    return (logForDebugging(`Failed to load stats cache: ${l(m)}`), Mn());
  }
}
async function En(s, c) {
  let m = Um();
  try {
    let T = jsonStringify(s, null, 2);
    if (c !== void 0) {
      let v = await c.write(STORAGE_KEYS.state("stats-cache"), T, {
        mode: 384,
        publishDiscipline: "atomic",
      });
      if (!v.ok) {
        logForDebugging(`Failed to save stats cache: ${describeStorageError(v.error)}`, { level: "error" });
        return;
      }
      logForDebugging(
        `Stats cache saved successfully (lastComputedDate: ${s.lastComputedDate})`,
      );
      return;
    }
    let R = getClaudeConfigDir();
    (await getFileStorage().mkdir(R),
      await getFileStorage().atomicWrite(m, T, 384),
      logForDebugging(
        `Stats cache saved successfully (lastComputedDate: ${s.lastComputedDate})`,
      ));
  } catch (T) {
    logForDebugging(`Failed to save stats cache: ${l(T)}`, { level: "error" });
  }
}
function Wl(s, c, m) {
  let T = new Map();
  for (let O of s.dailyActivity) T.set(O.date, { ...O });
  for (let O of c.dailyActivity) {
    let q = T.get(O.date);
    if (q)
      ((q.messageCount += O.messageCount),
        (q.sessionCount += O.sessionCount),
        (q.toolCallCount += O.toolCallCount));
    else T.set(O.date, { ...O });
  }
  let R = new Map();
  for (let O of s.dailyModelTokens) R.set(O.date, { ...O.tokensByModel });
  for (let O of c.dailyModelTokens) {
    let q = R.get(O.date);
    if (q)
      for (let [Z, Q] of Object.entries(O.tokensByModel))
        q[Z] = (q[Z] || 0) + Q;
    else R.set(O.date, { ...O.tokensByModel });
  }
  let v = { ...s.modelUsage };
  for (let [O, q] of Object.entries(c.modelUsage))
    if (v[O])
      v[O] = {
        inputTokens: v[O].inputTokens + q.inputTokens,
        outputTokens: v[O].outputTokens + q.outputTokens,
        cacheReadInputTokens:
          v[O].cacheReadInputTokens + q.cacheReadInputTokens,
        cacheCreationInputTokens:
          v[O].cacheCreationInputTokens + q.cacheCreationInputTokens,
        webSearchRequests: v[O].webSearchRequests + q.webSearchRequests,
        costUSD: v[O].costUSD + q.costUSD,
        contextWindow: Math.max(v[O].contextWindow, q.contextWindow),
        maxOutputTokens: Math.max(v[O].maxOutputTokens, q.maxOutputTokens),
      };
    else v[O] = { ...q };
  let A = { ...s.hourCounts };
  for (let [O, q] of Object.entries(c.hourCounts)) {
    let Z = parseInt(O, 10);
    A[Z] = (A[Z] || 0) + q;
  }
  let H = s.totalSessions + c.sessionStats.length,
    B = s.totalMessages + c.totalMessages,
    Y = s.longestSession;
  for (let O of c.sessionStats) if (!Y || O.duration > Y.duration) Y = O;
  let G = s.firstSessionDate;
  for (let O of c.sessionStats) if (!G || O.timestamp < G) G = O.timestamp;
  return {
    version: Ko,
    lastComputedDate: m,
    dailyActivity: Array.from(T.values()).sort((O, q) =>
      O.date.localeCompare(q.date),
    ),
    dailyModelTokens: Array.from(R.entries())
      .map(([O, q]) => ({ date: O, tokensByModel: q }))
      .sort((O, q) => O.date.localeCompare(q.date)),
    dailyModelTokensVersion: s.dailyModelTokensVersion,
    modelUsage: v,
    totalSessions: H,
    totalMessages: B,
    longestSession: Y,
    firstSessionDate: G,
    hourCounts: A,
  };
}
function vo(s) {
  let m = s.toISOString().split("T")[0];
  if (!m) throw Error("Invalid ISO date string");
  return m;
}
function Fi() {
  return vo(new Date());
}
function Hm() {
  let s = new Date();
  return (s.setDate(s.getDate() - 1), vo(s));
}
function xo(s, c) {
  return s < c;
}
function Ee(s) {
  return typeof s === "number" && Number.isFinite(s) ? s : void 0;
}
function xn(s) {
  return typeof s === "object" && s !== null && !Array.isArray(s);
}
function Bi(s) {
  return s in Object.prototype;
}
var Ly = /^\d{4}-\d{2}-\d{2}/,
  By = /^\d{4}-\d{2}-\d{2}$/;
function Ul(s) {
  if (typeof s !== "string" || !By.test(s)) return null;
  let c = new Date(s);
  return Number.isFinite(c.getTime()) && c.toISOString().startsWith(s)
    ? s
    : null;
}
function Bm(s) {
  return typeof s === "string" && Ly.test(s) && Number.isFinite(Date.parse(s))
    ? s
    : null;
}
function $m(s) {
  let c = {};
  for (let [B, Y] of Object.entries(xn(s.modelUsage) ? s.modelUsage : {})) {
    if (Bi(B)) continue;
    let G = xn(Y) ? Y : void 0;
    c[B] = {
      ...G,
      inputTokens: Ee(G?.inputTokens) ?? 0,
      outputTokens: Ee(G?.outputTokens) ?? 0,
      cacheReadInputTokens: Ee(G?.cacheReadInputTokens) ?? 0,
      cacheCreationInputTokens: Ee(G?.cacheCreationInputTokens) ?? 0,
      webSearchRequests: Ee(G?.webSearchRequests) ?? 0,
      costUSD: Ee(G?.costUSD) ?? 0,
      contextWindow: Ee(G?.contextWindow) ?? 0,
      maxOutputTokens: Ee(G?.maxOutputTokens) ?? 0,
    };
  }
  let m = {};
  for (let [B, Y] of Object.entries(xn(s.hourCounts) ? s.hourCounts : {})) {
    let G = parseInt(B, 10);
    if (Number.isNaN(G)) continue;
    m[G] = Ee(Y) ?? 0;
  }
  let T = [];
  for (let B of s.dailyModelTokens) {
    let Y = Ul(B?.date);
    if (Y === null) continue;
    let G = {};
    for (let [j, O] of Object.entries(
      xn(B.tokensByModel) ? B.tokensByModel : {},
    )) {
      if (Bi(j)) continue;
      G[j] = Ee(O) ?? 0;
    }
    T.push({ date: Y, tokensByModel: G });
  }
  let R = [];
  for (let B of s.dailyActivity) {
    let Y = Ul(B?.date);
    if (Y === null) continue;
    R.push({
      date: Y,
      messageCount: Ee(B.messageCount) ?? 0,
      sessionCount: Ee(B.sessionCount) ?? 0,
      toolCallCount: Ee(B.toolCallCount) ?? 0,
    });
  }
  let v;
  if (xn(s.shotDistribution)) {
    v = {};
    for (let [B, Y] of Object.entries(s.shotDistribution)) {
      let G = parseInt(B, 10);
      if (Number.isNaN(G)) continue;
      v[G] = Ee(Y) ?? 0;
    }
  }
  let A = xn(s.longestSession)
      ? {
          sessionId:
            typeof s.longestSession.sessionId === "string"
              ? s.longestSession.sessionId
              : "",
          timestamp: Bm(s.longestSession.timestamp) ?? "",
          duration: Ee(s.longestSession.duration) ?? 0,
          messageCount: Ee(s.longestSession.messageCount) ?? 0,
        }
      : null,
    H = Ul(s.lastComputedDate);
  if (H === null) {
    for (let B of [R, T])
      for (let Y of B) if (H === null || H < Y.date) H = Y.date;
  }
  if (H === null)
    return (
      logForDebugging(
        `Stats cache has no usable date (lastComputedDate: ${String(s.lastComputedDate)}); resetting aggregates for a full rescan`,
      ),
      {
        ...Mn(),
        version: s.version,
        dailyModelTokensVersion: Ee(s.dailyModelTokensVersion),
        shotDistribution: v && {},
      }
    );
  return {
    version: s.version,
    lastComputedDate: H,
    firstSessionDate: Bm(s.firstSessionDate),
    dailyModelTokensVersion: Ee(s.dailyModelTokensVersion),
    dailyModelTokens: T,
    dailyActivity: R,
    modelUsage: c,
    hourCounts: m,
    shotDistribution: v,
    totalSessions: Ee(s.totalSessions) ?? 0,
    totalMessages: Ee(s.totalMessages) ?? 0,
    longestSession: A,
  };
}
function vs(s) {
  return (
    (s.inputTokens || 0) +
    (s.outputTokens || 0) +
    (s.cacheReadInputTokens || 0) +
    (s.cacheCreationInputTokens || 0)
  );
}
async function Ts(s, c = {}, m, T) {
  let { fromDate: R, toDate: v } = c,
    A = getFsSurface(),
    H = new Map(),
    B = new Map(),
    Y = [],
    G = new Map(),
    j = 0,
    O = {},
    q = void 0,
    Z = new Set(),
    Q = 20;
  for (let se = 0; se < s.length; se += Q) {
    let ce = s.slice(se, se + Q),
      K = await Promise.all(
        ce.map(async (I) => {
          try {
            if (R)
              try {
                let J = isHoverRestEnabled() && m !== void 0 ? T?.get(I) : void 0,
                  me = vo(J !== void 0 ? new Date(J) : (await A.stat(I)).mtime);
                if (xo(me, R))
                  return {
                    sessionFile: I,
                    entries: null,
                    error: null,
                    skipped: !0,
                  };
              } catch {}
            let X = await ake(I);
            return { sessionFile: I, entries: X, error: null, skipped: !1 };
          } catch (X) {
            return { sessionFile: I, entries: null, error: X, skipped: !1 };
          }
        }),
      );
    for (let { sessionFile: I, entries: X, error: J, skipped: me } of K) {
      if (me) continue;
      if (J || !X) {
        logForDebugging(`Failed to read session file ${I}: ${l(J)}`);
        continue;
      }
      let he = basename(I, ".jsonl"),
        Re = [];
      for (let fe of X) if (isTranscriptMessage(fe)) Re.push(fe);
      if (Re.length === 0) continue;
      let Ie = I.includes(`${Gm}subagents${Gm}`),
        qe = Ie ? Re : Re.filter((fe) => !fe.isSidechain);
      if (qe.length === 0) continue;
      let ke = qe[0],
        Xe = qe.at(-1),
        Et = new Date(ke.timestamp),
        mt = new Date(Xe.timestamp);
      if (isNaN(Et.getTime()) || isNaN(mt.getTime())) {
        logForDebugging(`Skipping session with invalid timestamp: ${I}`);
        continue;
      }
      let Kt = vo(Et);
      if (v && xo(v, Kt)) continue;
      let tr = !R || !xo(Kt, R);
      if (!Ie && tr) {
        let fe = mt.getTime() - Et.getTime();
        Y.push({
          sessionId: he,
          duration: fe,
          messageCount: qe.length,
          timestamp: ke.timestamp,
        });
        let He = H.get(Kt);
        if (!He)
          ((He = {
            date: Kt,
            messageCount: 0,
            sessionCount: 0,
            toolCallCount: 0,
          }),
            H.set(Kt, He));
        He.sessionCount++;
        let Je = Et.getHours();
        G.set(Je, (G.get(Je) || 0) + 1);
      }
      for (let fe of qe) {
        let He = new Date(fe.timestamp);
        if (isNaN(He.getTime())) continue;
        let Je = vo(He);
        if (R && xo(Je, R)) continue;
        if (v && xo(v, Je)) continue;
        let Rt = H.get(Je);
        if (!Rt && !Ie)
          ((Rt = {
            date: Je,
            messageCount: 0,
            sessionCount: 0,
            toolCallCount: 0,
          }),
            H.set(Je, Rt));
        if (!Ie) {
          if ((j++, Rt)) Rt.messageCount++;
        }
        if (fe.type === "assistant") {
          let rt = fe.message?.content;
          if (Array.isArray(rt)) {
            for (let ft of rt)
              if (ft.type === "tool_use" && Rt) Rt.toolCallCount++;
          }
          if (fe.message?.usage) {
            let ft = fe.message.usage,
              Ue = fe.message.model || "unknown";
            if (Ue === SYNTHETIC_MODEL_NAME || Bi(Ue)) continue;
            if (!O[Ue])
              O[Ue] = {
                inputTokens: 0,
                outputTokens: 0,
                cacheReadInputTokens: 0,
                cacheCreationInputTokens: 0,
                webSearchRequests: 0,
                costUSD: 0,
                contextWindow: 0,
                maxOutputTokens: 0,
              };
            let Lt = Ee(ft.input_tokens) ?? 0,
              at = Ee(ft.output_tokens) ?? 0,
              tt = Ee(ft.cache_read_input_tokens) ?? 0,
              zt = Ee(ft.cache_creation_input_tokens) ?? 0,
              qo = O[Ue];
            ((qo.inputTokens += Lt),
              (qo.outputTokens += at),
              (qo.cacheReadInputTokens += tt),
              (qo.cacheCreationInputTokens += zt));
            let Fn = Lt + at + tt + zt;
            if (Fn > 0) {
              let ro = B.get(Je) || {};
              ((ro[Ue] = (ro[Ue] || 0) + Fn), B.set(Je, ro));
            }
          }
        }
      }
    }
  }
  return {
    dailyActivity: Array.from(H.values()).sort((se, ce) =>
      se.date.localeCompare(ce.date),
    ),
    dailyModelTokens: Array.from(B.entries())
      .map(([se, ce]) => ({ date: se, tokensByModel: ce }))
      .sort((se, ce) => se.date.localeCompare(ce.date)),
    modelUsage: O,
    sessionStats: Y,
    hourCounts: Object.fromEntries(G),
    totalMessages: j,
    ...{},
  };
}
async function zm(s) {
  let c = getProjectsDir();
  if (isHoverRestEnabled() && s !== void 0) return Fy(s, c);
  let m = getFsSurface(),
    T;
  try {
    T = await m.readdir(c);
  } catch (A) {
    if (W(A)) return { files: [] };
    throw A;
  }
  let R = T.filter((A) => A.isDirectory()).map((A) => Ao(c, A.name));
  return {
    files: (
      await Promise.all(
        R.map(async (A) => {
          try {
            let H = await m.readdir(A),
              B = H.filter((j) => j.isFile() && j.name.endsWith(".jsonl")).map(
                (j) => Ao(A, j.name),
              ),
              Y = H.filter((j) => j.isDirectory()),
              G = await Promise.all(
                Y.map(async (j) => {
                  let O = Ao(A, j.name, "subagents");
                  try {
                    return (await m.readdir(O))
                      .filter(
                        (Z) =>
                          Z.isFile() &&
                          Z.name.endsWith(".jsonl") &&
                          Z.name.startsWith("agent-"),
                      )
                      .map((Z) => Ao(O, Z.name));
                  } catch {
                    return [];
                  }
                }),
              );
            return [...B, ...G.flat()];
          } catch (H) {
            return (logForDebugging(`Failed to read project directory ${A}: ${l(H)}`), []);
          }
        }),
      )
    ).flat(),
  };
}
async function Fy(s, c) {
  let m = new Map(),
    T = new Set(),
    R = (G) => {
      if (isValidPathSegment(G)) return !0;
      if (!T.has(G))
        (T.add(G),
          logForDebugging(
            `stats: skipped listed transcript name ${jsonStringify(G)}: not a single path segment`,
          ));
      return !1;
    },
    v = (G, j, O) =>
      runPaginatedScan(
        (q) =>
          s.listEntries(G, {
            skipScopeStats: !0,
            ...(q !== void 0 && { cursor: q }),
          }),
        j,
        { ...(O !== void 0 && { budget: O }) },
      ),
    A = new Set(),
    H = await v({ namespace: "transcript" }, (G) => {
      for (let j of G) {
        let O = listedProjectKey(j, R);
        if (O !== void 0) A.add(O);
      }
    });
  if (H.status === "error")
    throw Error("stats: transcript project listing failed");
  if (H.status === "capped")
    throw Error("stats: transcript project listing unfinished at the page cap");
  let B = { pagesLeft: DEFAULT_MAX_PAGES + A.size };
  return {
    files: (
      await Promise.all(
        [...A].map(async (G) => {
          let j = Ao(c, G),
            O = [],
            q = new Set(),
            Z = new Set(),
            Q = await v(
              { namespace: "transcript", projectKey: G },
              (K) => {
                for (let I of K)
                  if (
                    I.kind === "key" &&
                    I.key.namespace === "transcript" &&
                    I.key.agentId === void 0 &&
                    I.key.journal !== !0 &&
                    !q.has(I.key.sessionId) &&
                    R(I.key.sessionId)
                  ) {
                    q.add(I.key.sessionId);
                    let X = Ao(j, `${I.key.sessionId}.jsonl`);
                    if ((O.push(X), I.mtimeMs !== void 0)) m.set(X, I.mtimeMs);
                  } else if (
                    I.kind === "scope" &&
                    I.scope.namespace === "transcript" &&
                    I.scope.sessionId !== void 0 &&
                    R(I.scope.sessionId)
                  )
                    Z.add(I.scope.sessionId);
              },
              B,
            );
          if (Q.status === "error")
            return (
              logForDebugging(
                `Failed to read project directory ${j}: storage listing failed`,
              ),
              []
            );
          if (Q.status === "capped")
            logForDebugging(
              `stats: transcript listing of ${j} cut short at the page cap or budget; keeping what was listed`,
            );
          let se = getFsSurface(),
            ce = await Promise.all(
              [...Z].map(async (K) => {
                let I = Ao(j, K, "subagents");
                try {
                  return (await se.readdir(I))
                    .filter(
                      (J) =>
                        J.isFile() &&
                        J.name.endsWith(".jsonl") &&
                        J.name.startsWith("agent-"),
                    )
                    .map((J) => Ao(I, J.name));
                } catch {
                  return [];
                }
              }),
            );
          return [...O, ...ce.flat()];
        }),
      )
    ).flat(),
    mtimeMsByFile: m,
  };
}
function Uy(s, c) {
  let m = new Map();
  for (let K of s.dailyActivity) m.set(K.date, { ...K });
  if (c)
    for (let K of c.dailyActivity) {
      let I = m.get(K.date);
      if (I)
        ((I.messageCount += K.messageCount),
          (I.sessionCount += K.sessionCount),
          (I.toolCallCount += K.toolCallCount));
      else m.set(K.date, { ...K });
    }
  let T = new Map();
  for (let K of s.dailyModelTokens) T.set(K.date, { ...K.tokensByModel });
  if (c)
    for (let K of c.dailyModelTokens) {
      let I = T.get(K.date);
      if (I)
        for (let [X, J] of Object.entries(K.tokensByModel))
          I[X] = (I[X] || 0) + J;
      else T.set(K.date, { ...K.tokensByModel });
    }
  let R = { ...s.modelUsage };
  if (c)
    for (let [K, I] of Object.entries(c.modelUsage))
      if (R[K])
        R[K] = {
          inputTokens: R[K].inputTokens + I.inputTokens,
          outputTokens: R[K].outputTokens + I.outputTokens,
          cacheReadInputTokens:
            R[K].cacheReadInputTokens + I.cacheReadInputTokens,
          cacheCreationInputTokens:
            R[K].cacheCreationInputTokens + I.cacheCreationInputTokens,
          webSearchRequests: R[K].webSearchRequests + I.webSearchRequests,
          costUSD: R[K].costUSD + I.costUSD,
          contextWindow: Math.max(R[K].contextWindow, I.contextWindow),
          maxOutputTokens: Math.max(R[K].maxOutputTokens, I.maxOutputTokens),
        };
      else R[K] = { ...I };
  let v = new Map();
  for (let [K, I] of Object.entries(s.hourCounts)) v.set(parseInt(K, 10), I);
  if (c)
    for (let [K, I] of Object.entries(c.hourCounts)) {
      let X = parseInt(K, 10);
      v.set(X, (v.get(X) || 0) + I);
    }
  let A = Array.from(m.values()).sort((K, I) => K.date.localeCompare(I.date)),
    H = Ym(A),
    B = Array.from(T.entries())
      .map(([K, I]) => ({ date: K, tokensByModel: I }))
      .sort((K, I) => K.date.localeCompare(I.date)),
    Y = s.totalSessions + (c?.sessionStats.length || 0),
    G = s.totalMessages + (c?.totalMessages || 0),
    j = s.longestSession;
  if (c) {
    for (let K of c.sessionStats) if (!j || K.duration > j.duration) j = K;
  }
  let O = s.firstSessionDate,
    q = null;
  if (c)
    for (let K of c.sessionStats) {
      if (!O || K.timestamp < O) O = K.timestamp;
      if (!q || K.timestamp > q) q = K.timestamp;
    }
  if (!q && A.length > 0) q = A.at(-1).date;
  let Z =
      A.length > 0
        ? A.reduce((K, I) => (I.messageCount > K.messageCount ? I : K)).date
        : null,
    Q =
      v.size > 0
        ? Array.from(v.entries()).reduce((K, [I, X]) =>
            X > K[1] ? [I, X] : K,
          )[0]
        : null,
    se =
      O && q
        ? Math.ceil(
            (new Date(q).getTime() - new Date(O).getTime()) / 86400000,
          ) + 1
        : 0;
  return {
    totalSessions: Y,
    totalMessages: G,
    totalDays: se,
    activeDays: m.size,
    streaks: H,
    dailyActivity: A,
    dailyModelTokens: B,
    longestSession: j,
    modelUsage: R,
    firstSessionDate: O,
    lastSessionDate: q,
    peakActivityDay: Z,
    peakActivityHour: Q,
  };
}
var Wy = 7;
async function jy(s) {
  let { files: c, mtimeMsByFile: m } = await zm(s);
  if (c.length === 0) return Xm();
  let T = await Fm(async () => {
      let A = await Wm(s),
        H = Fi(),
        B = Hm(),
        Y =
          A.lastComputedDate !== null &&
          A.lastComputedDate >= H &&
          A.lastComputedDate <= jl(H, Wy);
      if (Y)
        logForDebugging(
          `Stats watermark ${A.lastComputedDate} is ahead of ${H}; skipping the dailyModelTokens rebuild until the clock catches up`,
        );
      if ((A.dailyModelTokensVersion ?? 0) < $i && !Y) {
        let j =
            A.lastComputedDate && xo(B, A.lastComputedDate)
              ? B
              : A.lastComputedDate,
          O = [];
        if (j)
          (logForDebugging(`Rebuilding stats dailyModelTokens through ${j}`),
            (O = (await Ts(c, { toDate: j }, s, m)).dailyModelTokens));
        ((A = {
          ...A,
          lastComputedDate: j,
          dailyModelTokens: O,
          dailyModelTokensVersion: $i,
        }),
          await En(A, s));
      }
      let G = A;
      if (!A.lastComputedDate) {
        logForDebugging("Stats cache empty, processing all historical data");
        let j = await Ts(c, { toDate: B }, s, m);
        if (Km(j)) ((G = Wl(A, j, B)), await En(G, s));
      } else if (xo(A.lastComputedDate, B)) {
        let j = Vy(A.lastComputedDate);
        logForDebugging(`Stats cache stale (${A.lastComputedDate}), processing ${j} to ${B}`);
        let O = await Ts(c, { fromDate: j, toDate: B }, s, m);
        if (Km(O)) ((G = Wl(A, O, B)), await En(G, s));
        else ((G = { ...A, lastComputedDate: B }), await En(G, s));
      }
      return G;
    }),
    R = Fi(),
    v = await Ts(c, { fromDate: R, toDate: R }, s, m);
  return Uy(T, v);
}
async function Wi(s, c) {
  if (s === "all") return jy(c);
  let { files: m, mtimeMsByFile: T } = await zm(c);
  if (m.length === 0) return Xm();
  let R = new Date(),
    v = s === "7d" ? 7 : 30,
    A = new Date(R);
  A.setDate(R.getDate() - v + 1);
  let H = vo(A),
    B = await Ts(m, { fromDate: H }, c, T);
  return Hy(B);
}
function Hy(s) {
  let c = s.dailyActivity.slice().sort((O, q) => O.date.localeCompare(q.date)),
    m = s.dailyModelTokens.slice().sort((O, q) => O.date.localeCompare(q.date)),
    T = Ym(c),
    R = null;
  for (let O of s.sessionStats) if (!R || O.duration > R.duration) R = O;
  let v = null,
    A = null;
  for (let O of s.sessionStats) {
    if (!v || O.timestamp < v) v = O.timestamp;
    if (!A || O.timestamp > A) A = O.timestamp;
  }
  let H =
      c.length > 0
        ? c.reduce((O, q) => (q.messageCount > O.messageCount ? q : O)).date
        : null,
    B = Object.entries(s.hourCounts),
    Y =
      B.length > 0
        ? parseInt(
            B.reduce((O, [q, Z]) =>
              Z > parseInt(O[1].toString()) ? [q, Z] : O,
            )[0],
            10,
          )
        : null,
    G =
      v && A
        ? Math.ceil(
            (new Date(A).getTime() - new Date(v).getTime()) / 86400000,
          ) + 1
        : 0;
  return {
    totalSessions: s.sessionStats.length,
    totalMessages: s.totalMessages,
    totalDays: G,
    activeDays: s.dailyActivity.length,
    streaks: T,
    dailyActivity: c,
    dailyModelTokens: m,
    longestSession: R,
    modelUsage: s.modelUsage,
    firstSessionDate: v,
    lastSessionDate: A,
    peakActivityDay: H,
    peakActivityHour: Y,
  };
}
function jl(s, c) {
  let m = new Date(s);
  return (m.setUTCDate(m.getUTCDate() + c), vo(m));
}
function Vy(s) {
  return jl(s, 1);
}
function Ym(s) {
  if (s.length === 0)
    return {
      currentStreak: 0,
      longestStreak: 0,
      currentStreakStart: null,
      longestStreakStart: null,
      longestStreakEnd: null,
    };
  let c = 0,
    m = null,
    T = Fi(),
    R = new Set(s.map((Y) => Y.date));
  while (R.has(T)) (c++, (m = T), (T = jl(T, -1)));
  let v = 0,
    A = null,
    H = null,
    B = Array.from(R).sort();
  if (B.length > 0) {
    let Y = 1,
      G = B[0];
    for (let j = 1; j < B.length; j++) {
      let O = new Date(B[j - 1]),
        q = new Date(B[j]);
      if (Math.round((q.getTime() - O.getTime()) / 86400000) === 1) Y++;
      else {
        if (Y > v) ((v = Y), (A = G), (H = B[j - 1]));
        ((Y = 1), (G = B[j]));
      }
    }
    if (Y > v) ((v = Y), (A = G), (H = B.at(-1)));
  }
  return {
    currentStreak: c,
    longestStreak: v,
    currentStreakStart: m,
    longestStreakStart: A,
    longestStreakEnd: H,
  };
}
function Xm() {
  return {
    totalSessions: 0,
    totalMessages: 0,
    totalDays: 0,
    activeDays: 0,
    streaks: {
      currentStreak: 0,
      longestStreak: 0,
      currentStreakStart: null,
      longestStreakStart: null,
      longestStreakEnd: null,
    },
    dailyActivity: [],
    dailyModelTokens: [],
    longestSession: null,
    modelUsage: {},
    firstSessionDate: null,
    lastSessionDate: null,
    peakActivityDay: null,
    peakActivityHour: null,
  };
}
function Km(s) {
  return (
    s.sessionStats.length > 0 ||
    s.dailyActivity.length > 0 ||
    s.dailyModelTokens.length > 0
  );
}
function xS() {
  return new Map();
}
function MS(jv) {
  return Math.max(jv - 2, 0);
}
function ES(dp) {
  let [Hv] = dp;
  return Hv;
}
function RS(Sp, Vv) {
  return r(
    Text,
    {
      children: [
        Vv > 0 ? " \xB7 " : "",
        e(Ansi, { children: Sp.coloredBullet }),
        " ",
        Sp.model,
      ],
    },
    Sp.model,
  );
}
function du(s) {
  return new Date(`${s}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
var Zi = { "7d": "Last 7 days", "30d": "Last 30 days", all: "All time" },
  Ns = ["all", "7d", "30d"];
function kp(s) {
  let c = Ns.indexOf(s);
  return Ns[(c + 1) % Ns.length];
}
function Dp(s) {
  return Wi("all", s)
    .then((c) => {
      if (!c || c.totalSessions === 0) return { type: "empty" };
      return { type: "success", data: c };
    })
    .catch((c) => ({
      type: "error",
      message: c instanceof Error ? c.message : "Failed to load stats",
    }));
}
var SS = {
  todaySeconds: 0,
  weekSeconds: 0,
  longestStretchMs: 0,
  lastWeekSessions: { count: 0, medianMs: 0, averageMs: 0, longestMs: 0 },
};
function Tp(s) {
  return Promise.resolve(SS);
}
function er(Cv) {
  let An = _(14),
    { onClose: Jm } = Cv,
    { storageV5: xs } = useStorageV5Context(),
    Gy;
  if (An[0] !== xs) ((Gy = Dp(xs)), (An[0] = xs), (An[1] = Gy));
  else Gy = An[1];
  let Qm = Gy,
    Ky;
  if (An[2] !== xs) ((Ky = Tp(xs)), (An[2] = xs), (An[3] = Ky));
  else Ky = An[3];
  let Zm = Ky,
    { rows: wv } = useVirtualScrollViewportSize(useTerminalSize()),
    ep = Math.max(8, Math.min(wv - 4, 31)),
    zy;
  if (An[4] !== Jm)
    ((zy = () => Jm("Stats dialog dismissed", { display: "system" })),
      (An[4] = Jm),
      (An[5] = zy));
  else zy = An[5];
  let Yy;
  if (An[6] === MEMO_CACHE_SENTINEL) ((Yy = { context: "Settings" }), (An[6] = Yy));
  else Yy = An[6];
  useKeybinding("confirm:no", zy, Yy);
  let qy;
  if (An[7] === MEMO_CACHE_SENTINEL)
    ((qy = r(Box, {
      marginTop: 1,
      children: [
        e(SpinnerGlyph, {}),
        e(Text, { children: " Loading your Claude Code stats\u2026" }),
      ],
    })),
      (An[7] = qy));
  else qy = An[7];
  let Hl;
  if (An[8] !== Zm || An[9] !== Qm)
    ((Hl = e(Dn, {
      fallback: qy,
      children: e(mu, { allTimePromise: Qm, activeTimePromise: Zm }),
    })),
      (An[8] = Zm),
      (An[9] = Qm),
      (An[10] = Hl));
  else Hl = An[10];
  let Xy;
  if (An[11] !== ep || An[12] !== Hl)
    ((Xy = e(Box, { flexDirection: "column", minHeight: ep, children: Hl })),
      (An[11] = ep),
      (An[12] = Hl),
      (An[13] = Xy));
  else Xy = An[13];
  return Xy;
}
function mu(kv) {
  let it = _(50),
    { allTimePromise: Dv, activeTimePromise: Tv } = kv,
    { storageV5: tp } = useStorageV5Context(),
    jt = kn(Dv),
    Ms = kn(Tv),
    [Dt, vv] = d("all"),
    [zo] = d(xS),
    [Es, xv] = WFt(),
    [Mv, Qy] = d(null),
    Zy = C(null),
    eS;
  if (it[0] !== Dt || it[1] !== zo || it[2] !== tp)
    ((eS = function ji() {
      let Yo = kp(Zy.current ?? Dt);
      if (((Zy.current = Yo), Yo !== "all" && !zo.has(Yo))) {
        let Ev = Wi(Yo, tp).catch(() => (zo.delete(Yo), null));
        zo.set(Yo, Ev);
      }
      (Qy(Yo),
        xv(() => {
          (vv(Yo), Qy(null));
        }));
    }),
      (it[0] = Dt),
      (it[1] = zo),
      (it[2] = tp),
      (it[3] = eS));
  else eS = it[3];
  let ji = eS,
    As = Mv ?? Dt,
    [Rs, Av] = d("Overview"),
    [tS, Rv] = d(null),
    op = useClock(),
    oS;
  if (it[4] !== Dt || it[5] !== zo)
    ((oS = Dt === "all" ? null : (zo.get(Dt) ?? null)),
      (it[4] = Dt),
      (it[5] = zo),
      (it[6] = oS));
  else oS = it[6];
  let nS = oS,
    Iv = nS ? kn(nS) : null,
    Ht =
      Dt === "all"
        ? jt.type === "success"
          ? jt.data
          : null
        : (Iv ?? (jt.type === "success" ? jt.data : null)),
    Vl = jt.type === "success" ? jt.data : null,
    { headerFocused: Gl, focusHeader: np } = Jd(),
    sS;
  if (
    it[7] !== Rs ||
    it[8] !== Ms ||
    it[9] !== op ||
    it[10] !== ji ||
    it[11] !== Ht ||
    it[12] !== np
  )
    ((sS = function ut(Ro) {
      if (Ro.key === "up") {
        (Ro.preventDefault(), np());
        return;
      }
      if (Ro.key === "r" && !Ro.ctrl && !Ro.meta) {
        (Ro.preventDefault(), ji());
        return;
      }
      if (Ro.ctrl && Ro.key === "s" && Ht)
        (Ro.preventDefault(), vp(Ht, Ms, Rs, Rv, op));
    }),
      (it[7] = Rs),
      (it[8] = Ms),
      (it[9] = op),
      (it[10] = ji),
      (it[11] = Ht),
      (it[12] = np),
      (it[13] = sS));
  else sS = it[13];
  let ut = sS;
  if (jt.type === "error") {
    let ht;
    if (it[14] !== jt.message)
      ((ht = r(Text, {
        color: "error",
        children: ["Failed to load stats: ", jt.message],
      })),
        (it[14] = jt.message),
        (it[15] = ht));
    else ht = it[15];
    let yt;
    if (it[16] !== ut || it[17] !== ht)
      ((yt = e(Box, {
        marginTop: 1,
        tabIndex: 0,
        autoFocus: !0,
        onKeyDown: ut,
        children: ht,
      })),
        (it[16] = ut),
        (it[17] = ht),
        (it[18] = yt));
    else yt = it[18];
    return yt;
  }
  if (jt.type === "empty") {
    let ht;
    if (it[19] === MEMO_CACHE_SENTINEL)
      ((ht = e(Text, {
        color: "warning",
        children: "No stats available yet. Start using Claude Code!",
      })),
        (it[19] = ht));
    else ht = it[19];
    let yt;
    if (it[20] !== ut)
      ((yt = e(Box, {
        marginTop: 1,
        tabIndex: 0,
        autoFocus: !0,
        onKeyDown: ut,
        children: ht,
      })),
        (it[20] = ut),
        (it[21] = yt));
    else yt = it[21];
    return yt;
  }
  if (!Ht || !Vl) {
    let ht, yt;
    if (it[22] === MEMO_CACHE_SENTINEL)
      ((ht = e(SpinnerGlyph, {})),
        (yt = e(Text, { children: " Loading stats\u2026" })),
        (it[22] = ht),
        (it[23] = yt));
    else ((ht = it[22]), (yt = it[23]));
    let Rn;
    if (it[24] !== ut)
      ((Rn = r(Box, {
        marginTop: 1,
        tabIndex: 0,
        autoFocus: !0,
        onKeyDown: ut,
        children: [ht, yt],
      })),
        (it[24] = ut),
        (it[25] = Rn));
    else Rn = it[25];
    return Rn;
  }
  let ht;
  if (it[26] === MEMO_CACHE_SENTINEL) ((ht = (_v) => Av(_v)), (it[26] = ht));
  else ht = it[26];
  let yt;
  if (
    it[27] !== Ms ||
    it[28] !== Vl ||
    it[29] !== Dt ||
    it[30] !== Ht ||
    it[31] !== Es ||
    it[32] !== As
  )
    ((yt = e(ss, {
      title: "Overview",
      children: e(hu, {
        stats: Ht,
        allTimeStats: Vl,
        activeTimeStats: Ms,
        dateRange: Dt,
        selectorRange: As,
        isLoading: Es,
      }),
    })),
      (it[27] = Ms),
      (it[28] = Vl),
      (it[29] = Dt),
      (it[30] = Ht),
      (it[31] = Es),
      (it[32] = As),
      (it[33] = yt));
  else yt = it[33];
  let Rn;
  if (it[34] !== Ht || it[35] !== Es || it[36] !== As)
    ((Rn = e(ss, {
      title: "Models",
      children: e(Su, { stats: Ht, selectorRange: As, isLoading: Es }),
    })),
      (it[34] = Ht),
      (it[35] = Es),
      (it[36] = As),
      (it[37] = Rn));
  else Rn = it[37];
  let Kl;
  if (it[38] !== Rs || it[39] !== Gl || it[40] !== yt || it[41] !== Rn)
    ((Kl = e(Box, {
      flexDirection: "row",
      gap: 1,
      marginBottom: 1,
      children: r(qp, {
        initialHeaderFocused: !0,
        title: null,
        color: "claude",
        selectedTab: Rs,
        onTabChange: ht,
        disableNavigation: Gl,
        children: [yt, Rn],
      }),
    })),
      (it[38] = Rs),
      (it[39] = Gl),
      (it[40] = yt),
      (it[41] = Rn),
      (it[42] = Kl));
  else Kl = it[42];
  const sp = Gl ? "\u2193 stats" : "\u2191 tabs",
    ip = tS ? ` \xB7 ${tS}` : "";
  let zl;
  if (it[43] !== sp || it[44] !== ip)
    ((zl = e(Box, {
      paddingLeft: 2,
      children: r(Text, {
        dimColor: !0,
        children: [sp, " \xB7 r to cycle dates \xB7 ctrl+s to copy", ip],
      }),
    })),
      (it[43] = sp),
      (it[44] = ip),
      (it[45] = zl));
  else zl = it[45];
  let iS;
  if (it[46] !== ut || it[47] !== zl || it[48] !== Kl)
    ((iS = r(Box, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: ut,
      children: [Kl, zl],
    })),
      (it[46] = ut),
      (it[47] = zl),
      (it[48] = Kl),
      (it[49] = iS));
  else iS = it[49];
  return iS;
}
function Bs(Pv) {
  let Yl = _(9),
    { dateRange: rp, isLoading: lp } = Pv,
    ql;
  if (Yl[0] !== rp)
    ((ql = Ns.map((Xl, Ov) =>
      r(
        Text,
        {
          children: [
            Ov > 0 && e(Text, { dimColor: !0, children: " \xB7 " }),
            Xl === rp
              ? e(Text, { bold: !0, color: "claude", children: Zi[Xl] })
              : e(Text, { dimColor: !0, children: Zi[Xl] }),
          ],
        },
        Xl,
      ),
    )),
      (Yl[0] = rp),
      (Yl[1] = ql));
  else ql = Yl[1];
  let Jl;
  if (Yl[2] !== ql) ((Jl = e(Box, { children: ql })), (Yl[2] = ql), (Yl[3] = Jl));
  else Jl = Yl[3];
  let Ql;
  if (Yl[4] !== lp) ((Ql = lp && e(SpinnerGlyph, {})), (Yl[4] = lp), (Yl[5] = Ql));
  else Ql = Yl[5];
  let rS;
  if (Yl[6] !== Jl || Yl[7] !== Ql)
    ((rS = r(Box, { marginBottom: 1, gap: 1, children: [Jl, Ql] })),
      (Yl[6] = Jl),
      (Yl[7] = Ql),
      (Yl[8] = rS));
  else rS = Yl[8];
  return rS;
}
function Bn(s) {
  let c = Object.entries(s).sort(([, m], [, T]) => vs(T) - vs(m));
  return { modelEntries: c, totalTokens: c.reduce((m, [, T]) => m + vs(T), 0) };
}
function pu(s) {
  let c = 0,
    m = 0,
    T = 0,
    R = 0;
  for (let v of Object.values(s))
    ((c += v.inputTokens || 0),
      (m += v.outputTokens || 0),
      (T += v.cacheReadInputTokens || 0),
      (R += v.cacheCreationInputTokens || 0));
  return (
    `Input ${formatNumber(c)} \xB7 Output ${formatNumber(m)} \xB7 ` +
    `Cache read ${formatNumber(T)} \xB7 Cache write ${formatNumber(R)}`
  );
}
function fu(s, c) {
  if (c <= 0) return "0.0";
  return ((vs(s) / c) * 100).toFixed(1);
}
function gu(s) {
  return (
    `Cache: ${formatNumber(s.cacheReadInputTokens || 0)} read \xB7 ` +
    `${formatNumber(s.cacheCreationInputTokens || 0)} write`
  );
}
function hu(Lv) {
  let Me = _(102),
    {
      stats: xe,
      allTimeStats: io,
      dateRange: Zl,
      selectorRange: Hi,
      isLoading: Gi,
    } = Lv,
    { columns: Ki } = useTerminalSize(),
    ec,
    tc,
    oc,
    zi,
    nc,
    sc,
    Yi,
    ic,
    rc,
    ac,
    lc,
    cc,
    dc,
    mc,
    qi,
    In;
  if (
    Me[0] !== io.dailyActivity ||
    Me[1] !== Zl ||
    Me[2] !== Gi ||
    Me[3] !== Hi ||
    Me[4] !== xe ||
    Me[5] !== Ki
  ) {
    let { modelEntries: Nv, totalTokens: Is } = Bn(xe.modelUsage);
    In = Is;
    let aS = Nv[0];
    let On;
    if (Me[22] !== xe) ((On = yu(xe)), (Me[22] = xe), (Me[23] = On));
    else On = Me[23];
    zi = On;
    nc = Zl === "7d" ? 7 : Zl === "30d" ? 30 : xe.totalDays;
    oc = Box;
    dc = "column";
    mc = 1;
    if (Me[24] !== io.dailyActivity || Me[25] !== Ki)
      ((qi =
        io.dailyActivity.length > 0 &&
        e(Box, {
          flexDirection: "column",
          marginBottom: 1,
          children: e(Ansi, {
            children: Li(io.dailyActivity, { terminalWidth: Ki }),
          }),
        })),
        (Me[24] = io.dailyActivity),
        (Me[25] = Ki),
        (Me[26] = qi));
    else qi = Me[26];
    if (Me[27] !== Gi || Me[28] !== Hi)
      ((Yi = e(Bs, { dateRange: Hi, isLoading: Gi })),
        (Me[27] = Gi),
        (Me[28] = Hi),
        (Me[29] = Yi));
    else Yi = Me[29];
    tc = Box;
    ac = "row";
    lc = 4;
    cc = 1;
    ec = Box;
    sc = "column";
    ic = 28;
    rc =
      aS &&
      r(Text, {
        wrap: "truncate",
        children: [
          "Favorite model:",
          " ",
          e(Text, { color: "claude", bold: !0, children: renderModelName(aS[0]) }),
        ],
      });
    ((Me[0] = io.dailyActivity),
      (Me[1] = Zl),
      (Me[2] = Gi),
      (Me[3] = Hi),
      (Me[4] = xe),
      (Me[5] = Ki),
      (Me[6] = ec),
      (Me[7] = tc),
      (Me[8] = oc),
      (Me[9] = zi),
      (Me[10] = nc),
      (Me[11] = sc),
      (Me[12] = Yi),
      (Me[13] = ic),
      (Me[14] = rc),
      (Me[15] = ac),
      (Me[16] = lc),
      (Me[17] = cc),
      (Me[18] = dc),
      (Me[19] = mc),
      (Me[20] = qi),
      (Me[21] = In));
  } else
    ((ec = Me[6]),
      (tc = Me[7]),
      (oc = Me[8]),
      (zi = Me[9]),
      (nc = Me[10]),
      (sc = Me[11]),
      (Yi = Me[12]),
      (ic = Me[13]),
      (rc = Me[14]),
      (ac = Me[15]),
      (lc = Me[16]),
      (cc = Me[17]),
      (dc = Me[18]),
      (mc = Me[19]),
      (qi = Me[20]),
      (In = Me[21]));
  let Is;
  if (Me[30] !== ec || Me[31] !== sc || Me[32] !== ic || Me[33] !== rc)
    ((Is = e(ec, { flexDirection: sc, width: ic, children: rc })),
      (Me[30] = ec),
      (Me[31] = sc),
      (Me[32] = ic),
      (Me[33] = rc),
      (Me[34] = Is));
  else Is = Me[34];
  let On;
  if (Me[35] !== In) ((On = formatNumber(In)), (Me[35] = In), (Me[36] = On));
  else On = Me[36];
  let pc;
  if (Me[37] !== On)
    ((pc = e(Box, {
      flexDirection: "column",
      width: 28,
      children: r(Text, {
        wrap: "truncate",
        children: [
          "Total tokens:",
          " ",
          e(Text, { color: "claude", children: On }),
        ],
      }),
    })),
      (Me[37] = On),
      (Me[38] = pc));
  else pc = Me[38];
  let gc;
  if (
    Me[39] !== tc ||
    Me[40] !== Is ||
    Me[41] !== pc ||
    Me[42] !== ac ||
    Me[43] !== lc ||
    Me[44] !== cc
  )
    ((gc = r(tc, {
      flexDirection: ac,
      gap: lc,
      marginBottom: cc,
      children: [Is, pc],
    })),
      (Me[39] = tc),
      (Me[40] = Is),
      (Me[41] = pc),
      (Me[42] = ac),
      (Me[43] = lc),
      (Me[44] = cc),
      (Me[45] = gc));
  else gc = Me[45];
  let hc;
  if (Me[46] !== xe.totalSessions)
    ((hc = formatNumber(xe.totalSessions)), (Me[46] = xe.totalSessions), (Me[47] = hc));
  else hc = Me[47];
  let yc;
  if (Me[48] !== hc)
    ((yc = e(Box, {
      flexDirection: "column",
      width: 28,
      children: r(Text, {
        wrap: "truncate",
        children: ["Sessions:", " ", e(Text, { color: "claude", children: hc })],
      }),
    })),
      (Me[48] = hc),
      (Me[49] = yc));
  else yc = Me[49];
  let Sc;
  if (Me[50] !== xe.longestSession)
    ((Sc =
      xe.longestSession &&
      r(Text, {
        wrap: "truncate",
        children: [
          "Longest session:",
          " ",
          e(Text, { color: "claude", children: formatDuration(xe.longestSession.duration) }),
        ],
      })),
      (Me[50] = xe.longestSession),
      (Me[51] = Sc));
  else Sc = Me[51];
  let bc;
  if (Me[52] !== Sc)
    ((bc = e(Box, { flexDirection: "column", width: 28, children: Sc })),
      (Me[52] = Sc),
      (Me[53] = bc));
  else bc = Me[53];
  let Cc;
  if (Me[54] !== yc || Me[55] !== bc)
    ((Cc = r(Box, { flexDirection: "row", gap: 4, children: [yc, bc] })),
      (Me[54] = yc),
      (Me[55] = bc),
      (Me[56] = Cc));
  else Cc = Me[56];
  let wc;
  if (Me[57] !== xe.activeDays)
    ((wc = e(Text, { color: "claude", children: xe.activeDays })),
      (Me[57] = xe.activeDays),
      (Me[58] = wc));
  else wc = Me[58];
  let kc;
  if (Me[59] !== nc)
    ((kc = r(Text, { color: "subtle", children: ["/", nc] })),
      (Me[59] = nc),
      (Me[60] = kc));
  else kc = Me[60];
  let Dc;
  if (Me[61] !== wc || Me[62] !== kc)
    ((Dc = e(Box, {
      flexDirection: "column",
      width: 28,
      children: r(Text, { wrap: "truncate", children: ["Active days: ", wc, kc] }),
    })),
      (Me[61] = wc),
      (Me[62] = kc),
      (Me[63] = Dc));
  else Dc = Me[63];
  let Tc;
  if (Me[64] !== xe.streaks.longestStreak)
    ((Tc = e(Text, {
      color: "claude",
      bold: !0,
      children: xe.streaks.longestStreak,
    })),
      (Me[64] = xe.streaks.longestStreak),
      (Me[65] = Tc));
  else Tc = Me[65];
  const cp = xe.streaks.longestStreak === 1 ? "day" : "days";
  let vc;
  if (Me[66] !== Tc || Me[67] !== cp)
    ((vc = e(Box, {
      flexDirection: "column",
      width: 28,
      children: r(Text, {
        wrap: "truncate",
        children: ["Longest streak:", " ", Tc, " ", cp],
      }),
    })),
      (Me[66] = Tc),
      (Me[67] = cp),
      (Me[68] = vc));
  else vc = Me[68];
  let xc;
  if (Me[69] !== Dc || Me[70] !== vc)
    ((xc = r(Box, { flexDirection: "row", gap: 4, children: [Dc, vc] })),
      (Me[69] = Dc),
      (Me[70] = vc),
      (Me[71] = xc));
  else xc = Me[71];
  let Mc;
  if (Me[72] !== xe.peakActivityDay)
    ((Mc =
      xe.peakActivityDay &&
      r(Text, {
        wrap: "truncate",
        children: [
          "Most active day:",
          " ",
          e(Text, { color: "claude", children: du(xe.peakActivityDay) }),
        ],
      })),
      (Me[72] = xe.peakActivityDay),
      (Me[73] = Mc));
  else Mc = Me[73];
  let Ec;
  if (Me[74] !== Mc)
    ((Ec = e(Box, { flexDirection: "column", width: 28, children: Mc })),
      (Me[74] = Mc),
      (Me[75] = Ec));
  else Ec = Me[75];
  let Ac;
  if (Me[76] !== io.streaks.currentStreak)
    ((Ac = e(Text, {
      color: "claude",
      bold: !0,
      children: io.streaks.currentStreak,
    })),
      (Me[76] = io.streaks.currentStreak),
      (Me[77] = Ac));
  else Ac = Me[77];
  const up = io.streaks.currentStreak === 1 ? "day" : "days";
  let Rc;
  if (Me[78] !== Ac || Me[79] !== up)
    ((Rc = e(Box, {
      flexDirection: "column",
      width: 28,
      children: r(Text, {
        wrap: "truncate",
        children: ["Current streak:", " ", Ac, " ", up],
      }),
    })),
      (Me[78] = Ac),
      (Me[79] = up),
      (Me[80] = Rc));
  else Rc = Me[80];
  let Ic;
  if (Me[81] !== Ec || Me[82] !== Rc)
    ((Ic = r(Box, { flexDirection: "row", gap: 4, children: [Ec, Rc] })),
      (Me[81] = Ec),
      (Me[82] = Rc),
      (Me[83] = Ic));
  else Ic = Me[83];
  let _c;
  if (Me[84] !== xe.modelUsage || Me[85] !== In)
    ((_c =
      In > 0 &&
      e(Text, { color: "subtle", wrap: "truncate", children: pu(xe.modelUsage) })),
      (Me[84] = xe.modelUsage),
      (Me[85] = In),
      (Me[86] = _c));
  else _c = Me[86];
  let lS;
  if (Me[87] === MEMO_CACHE_SENTINEL)
    ((lS =
      null &&
      r(N, {
        children: [
          e(Box, {
            marginTop: 1,
            children: e(Text, { children: "Shot distribution" }),
          }),
          r(Box, {
            flexDirection: "row",
            gap: 4,
            children: [
              e(Box, {
                flexDirection: "column",
                width: 28,
                children: r(Text, {
                  wrap: "truncate",
                  children: [
                    null.buckets[0].label,
                    ":",
                    " ",
                    e(Text, { color: "claude", children: null.buckets[0].count }),
                    r(Text, {
                      color: "subtle",
                      children: [" (", null.buckets[0].pct, "%)"],
                    }),
                  ],
                }),
              }),
              e(Box, {
                flexDirection: "column",
                width: 28,
                children: r(Text, {
                  wrap: "truncate",
                  children: [
                    null.buckets[1].label,
                    ":",
                    " ",
                    e(Text, { color: "claude", children: null.buckets[1].count }),
                    r(Text, {
                      color: "subtle",
                      children: [" (", null.buckets[1].pct, "%)"],
                    }),
                  ],
                }),
              }),
            ],
          }),
          r(Box, {
            flexDirection: "row",
            gap: 4,
            children: [
              e(Box, {
                flexDirection: "column",
                width: 28,
                children: r(Text, {
                  wrap: "truncate",
                  children: [
                    null.buckets[2].label,
                    ":",
                    " ",
                    e(Text, { color: "claude", children: null.buckets[2].count }),
                    r(Text, {
                      color: "subtle",
                      children: [" (", null.buckets[2].pct, "%)"],
                    }),
                  ],
                }),
              }),
              e(Box, {
                flexDirection: "column",
                width: 28,
                children: r(Text, {
                  wrap: "truncate",
                  children: [
                    null.buckets[3].label,
                    ":",
                    " ",
                    e(Text, { color: "claude", children: null.buckets[3].count }),
                    r(Text, {
                      color: "subtle",
                      children: [" (", null.buckets[3].pct, "%)"],
                    }),
                  ],
                }),
              }),
            ],
          }),
          e(Box, {
            flexDirection: "row",
            gap: 4,
            children: e(Box, {
              flexDirection: "column",
              width: 28,
              children: r(Text, {
                wrap: "truncate",
                children: [
                  "Avg/session:",
                  " ",
                  e(Text, { color: "claude", children: null.avgShots }),
                ],
              }),
            }),
          }),
        ],
      })),
      (Me[87] = lS));
  else lS = Me[87];
  let Pc;
  if (Me[88] !== zi)
    ((Pc =
      zi &&
      e(Box, {
        marginTop: 1,
        children: e(Text, { color: "suggestion", children: zi }),
      })),
      (Me[88] = zi),
      (Me[89] = Pc));
  else Pc = Me[89];
  let cS;
  if (
    Me[90] !== oc ||
    Me[91] !== Yi ||
    Me[92] !== gc ||
    Me[93] !== Cc ||
    Me[94] !== xc ||
    Me[95] !== Ic ||
    Me[96] !== _c ||
    Me[97] !== Pc ||
    Me[98] !== dc ||
    Me[99] !== mc ||
    Me[100] !== qi
  )
    ((cS = r(oc, {
      flexDirection: dc,
      marginTop: mc,
      children: [qi, Yi, gc, Cc, xc, Ic, _c, null, lS, Pc],
    })),
      (Me[90] = oc),
      (Me[91] = Yi),
      (Me[92] = gc),
      (Me[93] = Cc),
      (Me[94] = xc),
      (Me[95] = Ic),
      (Me[96] = _c),
      (Me[97] = Pc),
      (Me[98] = dc),
      (Me[99] = mc),
      (Me[100] = qi),
      (Me[101] = cS));
  else cS = Me[101];
  return cS;
}
var bS = [
    { name: "The Little Prince", tokens: 22000 },
    { name: "The Old Man and the Sea", tokens: 35000 },
    { name: "A Christmas Carol", tokens: 37000 },
    { name: "Animal Farm", tokens: 39000 },
    { name: "Fahrenheit 451", tokens: 60000 },
    { name: "The Great Gatsby", tokens: 62000 },
    { name: "Slaughterhouse-Five", tokens: 64000 },
    { name: "Brave New World", tokens: 83000 },
    { name: "The Catcher in the Rye", tokens: 95000 },
    { name: "Harry Potter and the Philosopher's Stone", tokens: 103000 },
    { name: "The Hobbit", tokens: 123000 },
    { name: "1984", tokens: 123000 },
    { name: "To Kill a Mockingbird", tokens: 130000 },
    { name: "Pride and Prejudice", tokens: 156000 },
    { name: "Dune", tokens: 244000 },
    { name: "Moby-Dick", tokens: 268000 },
    { name: "Crime and Punishment", tokens: 274000 },
    { name: "A Game of Thrones", tokens: 381000 },
    { name: "Anna Karenina", tokens: 468000 },
    { name: "Don Quixote", tokens: 520000 },
    { name: "The Lord of the Rings", tokens: 576000 },
    { name: "The Count of Monte Cristo", tokens: 603000 },
    { name: "Les Mis\xE9rables", tokens: 689000 },
    { name: "War and Peace", tokens: 730000 },
  ],
  CS = [
    { name: "a TED talk", minutes: 18 },
    { name: "an episode of The Office", minutes: 22 },
    { name: "listening to Abbey Road", minutes: 47 },
    { name: "a yoga class", minutes: 60 },
    { name: "a World Cup soccer match", minutes: 90 },
    { name: "a half marathon (average time)", minutes: 120 },
    { name: "the movie Inception", minutes: 148 },
    { name: "watching Titanic", minutes: 195 },
    { name: "a transatlantic flight", minutes: 420 },
    { name: "a full night of sleep", minutes: 480 },
  ];
function yu(s) {
  let c = [],
    m = 0;
  for (let R of Object.values(s.modelUsage))
    m += (R.inputTokens || 0) + (R.outputTokens || 0);
  if (m > 0) {
    let R = bS.filter((v) => m >= v.tokens);
    for (let v of R) {
      let A = m / v.tokens;
      if (A >= 2)
        c.push(
          `Your input and output are ~${Math.floor(A)}x the tokens in ${v.name}`,
        );
      else
        c.push(`Your input and output are about as many tokens as ${v.name}`);
    }
  }
  if (s.longestSession) {
    let R = s.longestSession.duration / 60000;
    for (let v of CS) {
      let A = R / v.minutes;
      if (A >= 2)
        c.push(
          `Your longest session is ~${Math.floor(A)}x longer than ${v.name}`,
        );
    }
  }
  if (c.length === 0) return "";
  let T = Math.floor(Math.random() * c.length);
  return c[T];
}
function Su(dp) {
  let Nn = _(61),
    { stats: _s, selectorRange: Xi, isLoading: Ji } = dp,
    { headerFocused: mp, focusHeader: pp } = Jd(),
    [Tt, uS] = d(0),
    { columns: fp } = useTerminalSize(),
    Oc,
    Lc,
    Nc,
    Bc,
    $c,
    xt,
    Fc,
    Wc,
    jc,
    Hc,
    Vc,
    Qi,
    gp,
    Gc,
    Kc,
    zc,
    Yc,
    qc,
    Xc,
    Jc,
    Qc;
  if (
    Nn[0] !== pp ||
    Nn[1] !== mp ||
    Nn[2] !== Ji ||
    Nn[3] !== Tt ||
    Nn[4] !== Xi ||
    Nn[5] !== _s.dailyModelTokens ||
    Nn[6] !== _s.modelUsage ||
    Nn[7] !== fp
  ) {
    gp = EARLY_RETURN_SENTINEL;
    bb0: {
      let { modelEntries: Ps, totalTokens: dS } = Bn(_s.modelUsage);
      xt = Ps;
      let hp = function hp(Zc) {
        if (mp) {
          return;
        }
        if (Zc.key === "down" && Tt < xt.length - 4) {
          (Zc.preventDefault(), uS((Bv) => Math.min(Bv + 2, xt.length - 4)));
          return;
        }
        if (Zc.key === "up") {
          if ((Zc.preventDefault(), Tt > 0)) uS(MS);
          else pp();
        }
      };
      if (xt.length === 0) {
        let Io;
        if (Nn[29] === MEMO_CACHE_SENTINEL)
          ((Io = e(Box, {
            children: e(Text, {
              color: "subtle",
              children: "No model usage data available",
            }),
          })),
            (Nn[29] = Io));
        else Io = Nn[29];
        gp = Io;
        break bb0;
      }
      let eu = bu(_s.dailyModelTokens, xt.map(ES), fp);
      let yp = xt.slice(Tt, Tt + 4);
      let mS = Math.ceil(yp.length / 2);
      let $v = yp.slice(0, mS);
      let Fv = yp.slice(mS);
      $c = Tt > 0;
      Bc = Tt < xt.length - 4;
      Fc = xt.length > 4;
      Nc = Box;
      Xc = "column";
      Jc = 1;
      Qc = 0;
      jc = !0;
      Hc = hp;
      Vc =
        eu &&
        r(Box, {
          flexDirection: "column",
          marginBottom: 1,
          children: [
            e(Text, { bold: !0, children: "Tokens per Day" }),
            e(Ansi, { children: eu.chart }),
            e(Text, { color: "subtle", children: eu.xAxisLabels }),
            e(Box, { children: eu.legend.map(RS) }),
          ],
        });
      if (Nn[30] !== Ji || Nn[31] !== Xi)
        ((Qi = e(Bs, { dateRange: Xi, isLoading: Ji })),
          (Nn[30] = Ji),
          (Nn[31] = Xi),
          (Nn[32] = Qi));
      else Qi = Nn[32];
      Lc = Box;
      zc = "row";
      Yc = 4;
      qc = e(Box, {
        flexDirection: "column",
        width: 36,
        children: $v.map((Io) => {
          let [pS, Uv] = Io;
          return e(Ls, { model: pS, usage: Uv, totalTokens: dS }, pS);
        }),
      });
      Oc = Box;
      Wc = "column";
      Gc = 36;
      Kc = Fv.map((Os) => {
        let [fS, Wv] = Os;
        return e(Ls, { model: fS, usage: Wv, totalTokens: dS }, fS);
      });
    }
    ((Nn[0] = pp),
      (Nn[1] = mp),
      (Nn[2] = Ji),
      (Nn[3] = Tt),
      (Nn[4] = Xi),
      (Nn[5] = _s.dailyModelTokens),
      (Nn[6] = _s.modelUsage),
      (Nn[7] = fp),
      (Nn[8] = Oc),
      (Nn[9] = Lc),
      (Nn[10] = Nc),
      (Nn[11] = Bc),
      (Nn[12] = $c),
      (Nn[13] = xt),
      (Nn[14] = Fc),
      (Nn[15] = Wc),
      (Nn[16] = jc),
      (Nn[17] = Hc),
      (Nn[18] = Vc),
      (Nn[19] = Qi),
      (Nn[20] = gp),
      (Nn[21] = Gc),
      (Nn[22] = Kc),
      (Nn[23] = zc),
      (Nn[24] = Yc),
      (Nn[25] = qc),
      (Nn[26] = Xc),
      (Nn[27] = Jc),
      (Nn[28] = Qc));
  } else
    ((Oc = Nn[8]),
      (Lc = Nn[9]),
      (Nc = Nn[10]),
      (Bc = Nn[11]),
      ($c = Nn[12]),
      (xt = Nn[13]),
      (Fc = Nn[14]),
      (Wc = Nn[15]),
      (jc = Nn[16]),
      (Hc = Nn[17]),
      (Vc = Nn[18]),
      (Qi = Nn[19]),
      (gp = Nn[20]),
      (Gc = Nn[21]),
      (Kc = Nn[22]),
      (zc = Nn[23]),
      (Yc = Nn[24]),
      (qc = Nn[25]),
      (Xc = Nn[26]),
      (Jc = Nn[27]),
      (Qc = Nn[28]));
  if (gp !== EARLY_RETURN_SENTINEL) return gp;
  let Ps;
  if (Nn[33] !== Oc || Nn[34] !== Wc || Nn[35] !== Gc || Nn[36] !== Kc)
    ((Ps = e(Oc, { flexDirection: Wc, width: Gc, children: Kc })),
      (Nn[33] = Oc),
      (Nn[34] = Wc),
      (Nn[35] = Gc),
      (Nn[36] = Kc),
      (Nn[37] = Ps));
  else Ps = Nn[37];
  let Io;
  if (
    Nn[38] !== Lc ||
    Nn[39] !== Ps ||
    Nn[40] !== zc ||
    Nn[41] !== Yc ||
    Nn[42] !== qc
  )
    ((Io = r(Lc, { flexDirection: zc, gap: Yc, children: [qc, Ps] })),
      (Nn[38] = Lc),
      (Nn[39] = Ps),
      (Nn[40] = zc),
      (Nn[41] = Yc),
      (Nn[42] = qc),
      (Nn[43] = Io));
  else Io = Nn[43];
  let Os;
  if (
    Nn[44] !== Bc ||
    Nn[45] !== $c ||
    Nn[46] !== xt ||
    Nn[47] !== Tt ||
    Nn[48] !== Fc
  )
    ((Os =
      Fc &&
      e(Box, {
        marginTop: 1,
        children: r(Text, {
          color: "subtle",
          children: [
            $c ? figures.arrowUp : " ",
            " ",
            Bc ? figures.arrowDown : " ",
            " ",
            Tt + 1,
            "-",
            Math.min(Tt + 4, xt.length),
            " of",
            " ",
            xt.length,
            " models",
            " ",
            e(KeybindingHint, { chord: ["up", "down"], action: "scroll", parens: !0 }),
          ],
        }),
      })),
      (Nn[44] = Bc),
      (Nn[45] = $c),
      (Nn[46] = xt),
      (Nn[47] = Tt),
      (Nn[48] = Fc),
      (Nn[49] = Os));
  else Os = Nn[49];
  let gS;
  if (
    Nn[50] !== Nc ||
    Nn[51] !== jc ||
    Nn[52] !== Hc ||
    Nn[53] !== Vc ||
    Nn[54] !== Qi ||
    Nn[55] !== Io ||
    Nn[56] !== Os ||
    Nn[57] !== Xc ||
    Nn[58] !== Jc ||
    Nn[59] !== Qc
  )
    ((gS = r(Nc, {
      flexDirection: Xc,
      marginTop: Jc,
      tabIndex: Qc,
      autoFocus: jc,
      onKeyDown: Hc,
      children: [Vc, Qi, Io, Os],
    })),
      (Nn[50] = Nc),
      (Nn[51] = jc),
      (Nn[52] = Hc),
      (Nn[53] = Vc),
      (Nn[54] = Qi),
      (Nn[55] = Io),
      (Nn[56] = Os),
      (Nn[57] = Xc),
      (Nn[58] = Jc),
      (Nn[59] = Qc),
      (Nn[60] = gS));
  else gS = Nn[60];
  return gS;
}
function Ls(Gv) {
  let Vt = _(27),
    { model: bp, usage: Mt, totalTokens: Cp } = Gv,
    hS;
  if (Vt[0] !== Cp || Vt[1] !== Mt)
    ((hS = fu(Mt, Cp)), (Vt[0] = Cp), (Vt[1] = Mt), (Vt[2] = hS));
  else hS = Vt[2];
  let wp = hS,
    tu;
  if (Vt[3] !== bp) ((tu = renderModelName(bp)), (Vt[3] = bp), (Vt[4] = tu));
  else tu = Vt[4];
  let ou;
  if (Vt[5] !== tu)
    ((ou = e(Text, { bold: !0, children: tu })), (Vt[5] = tu), (Vt[6] = ou));
  else ou = Vt[6];
  let nu;
  if (Vt[7] !== wp)
    ((nu = r(Text, { color: "subtle", children: ["(", wp, "%)"] })),
      (Vt[7] = wp),
      (Vt[8] = nu));
  else nu = Vt[8];
  let su;
  if (Vt[9] !== ou || Vt[10] !== nu)
    ((su = r(BulletItem, { children: [ou, " ", nu] })),
      (Vt[9] = ou),
      (Vt[10] = nu),
      (Vt[11] = su));
  else su = Vt[11];
  let iu;
  if (Vt[12] !== Mt.inputTokens)
    ((iu = formatNumber(Mt.inputTokens)), (Vt[12] = Mt.inputTokens), (Vt[13] = iu));
  else iu = Vt[13];
  let ru;
  if (Vt[14] !== Mt.outputTokens)
    ((ru = formatNumber(Mt.outputTokens)), (Vt[14] = Mt.outputTokens), (Vt[15] = ru));
  else ru = Vt[15];
  let au;
  if (Vt[16] !== iu || Vt[17] !== ru)
    ((au = r(Text, {
      color: "subtle",
      wrap: "truncate",
      children: ["  ", "In: ", iu, " \xB7 Out:", " ", ru],
    })),
      (Vt[16] = iu),
      (Vt[17] = ru),
      (Vt[18] = au));
  else au = Vt[18];
  let cu;
  if (Vt[19] !== Mt) ((cu = gu(Mt)), (Vt[19] = Mt), (Vt[20] = cu));
  else cu = Vt[20];
  let uu;
  if (Vt[21] !== cu)
    ((uu = r(Text, { color: "subtle", wrap: "truncate", children: ["  ", cu] })),
      (Vt[21] = cu),
      (Vt[22] = uu));
  else uu = Vt[22];
  let yS;
  if (Vt[23] !== uu || Vt[24] !== su || Vt[25] !== au)
    ((yS = r(Box, { flexDirection: "column", children: [su, au, uu] })),
      (Vt[23] = uu),
      (Vt[24] = su),
      (Vt[25] = au),
      (Vt[26] = yS));
  else yS = Vt[26];
  return yS;
}
function bu(s, c, m) {
  if (s.length < 2 || c.length === 0) return null;
  let T = 7,
    R = m - T,
    v = Math.min(52, Math.max(20, R)),
    A;
  if (s.length >= v) A = s.slice(-v);
  else {
    let Q = Math.floor(v / s.length);
    A = [];
    for (let se of s) for (let ce = 0; ce < Q; ce++) A.push(se);
  }
  let H = resolveThemePalette(resolveSetting("theme", "dark").value),
    B = [getColorEscapePrefix(H.suggestion), getColorEscapePrefix(H.success), getColorEscapePrefix(H.warning)],
    Y = [],
    G = [],
    j = c.slice(0, 3),
    O = [H.suggestion, H.success, H.warning];
  for (let Q of j) {
    let se = A.map((ce) => ce.tokensByModel[Q] || 0);
    if (se.some((ce) => ce > 0))
      (Y.push(se),
        G.push({
          model: renderModelName(Q),
          coloredBullet: applyForegroundColor(figures.bullet, O[(Y.length - 1) % O.length]),
        }));
  }
  if (Y.length === 0) return null;
  let q = xp.plot(Y, {
      height: 8,
      colors: B.slice(0, Y.length),
      format: (Q) => {
        let se;
        if (Q >= 999950000) se = (Q / 1e9).toFixed(1) + "B";
        else if (Q >= 1e6) se = (Q / 1e6).toFixed(1) + "M";
        else if (Q >= 1000) se = (Q / 1000).toFixed(0) + "k";
        else se = Q.toFixed(0);
        return se.padStart(6);
      },
    }),
    Z = kS(A, A.length, T);
  return { chart: q, legend: G, xAxisLabels: Z };
}
function kS(s, c, m) {
  if (s.length === 0) return "";
  let T = Math.min(4, Math.max(2, Math.floor(s.length / 8))),
    R = s.length - 6,
    v = Math.floor(R / (T - 1)) || 1,
    A = [];
  for (let Y = 0; Y < T; Y++) {
    let G = Math.min(Y * v, s.length - 1),
      j = du(s[G].date);
    A.push({ pos: G, label: j });
  }
  let H = " ".repeat(m),
    B = 0;
  for (let { pos: Y, label: G } of A) {
    let j = Math.max(1, Y - B);
    ((H += " ".repeat(j) + G), (B = Y + G.length));
  }
  return H;
}
async function vp(s, c, m, T, R) {
  T("copying\u2026");
  let v = DS(s, c, m),
    A = await Lm(v);
  (T(A.success ? "copied!" : "copy failed"), R.setTimeout(() => T(null), 2000));
}
function DS(s, c, m) {
  let T = [];
  if (m === "Overview") T.push(...TS(s, c));
  else T.push(...vS(s));
  while (T.length > 0 && stripAnsi(T.at(-1)).trim() === "") T.pop();
  if (T.length > 0) {
    let R = T.at(-1),
      v = getStringWidth(R),
      A = m === "Overview" ? 70 : 80,
      H = "/stats",
      B = Math.max(2, A - v - 6);
    T[T.length - 1] = R + " ".repeat(B) + chalk.gray("/stats");
  }
  return T.join(`
`);
}
function TS(s, c) {
  let m = [],
    T = resolveThemePalette(resolveSetting("theme", "dark").value),
    R = (ce) => applyForegroundColor(ce, T.claude),
    v = 18,
    A = 40,
    H = 18,
    B = (ce, K, I, X) => {
      let J = (ce + ":").padEnd(18),
        me = J.length + K.length,
        he = Math.max(2, 40 - me),
        Re = (I + ":").padEnd(18);
      return J + R(K) + " ".repeat(he) + Re + R(X);
    };
  if (s.dailyActivity.length > 0)
    (m.push(Li(s.dailyActivity, { terminalWidth: 56 })), m.push(""));
  let { modelEntries: Y, totalTokens: G } = Bn(s.modelUsage),
    j = Y[0];
  if (j) m.push(B("Favorite model", renderModelName(j[0]), "Total tokens", formatNumber(G)));
  (m.push(""),
    m.push(
      B(
        "Sessions",
        formatNumber(s.totalSessions),
        "Longest session",
        s.longestSession ? formatDuration(s.longestSession.duration) : "N/A",
      ),
    ));
  let O = `${s.streaks.currentStreak} ${s.streaks.currentStreak === 1 ? "day" : "days"}`,
    q = `${s.streaks.longestStreak} ${s.streaks.longestStreak === 1 ? "day" : "days"}`;
  m.push(B("Current streak", O, "Longest streak", q));
  let Z = `${s.activeDays}/${s.totalDays}`,
    Q =
      s.peakActivityHour !== null
        ? `${s.peakActivityHour}:00-${s.peakActivityHour + 1}:00`
        : "N/A";
  if ((m.push(B("Active days", Z, "Peak hour", Q)), G > 0))
    m.push(chalk.gray(pu(s.modelUsage)));
  m.push("");
  let se = yu(s);
  return (
    m.push(R(se)),
    m.push(chalk.gray(`Stats from the last ${s.totalDays} days`)),
    m
  );
}
function vS(s) {
  let c = [],
    { modelEntries: m, totalTokens: T } = Bn(s.modelUsage);
  if (m.length === 0)
    return (c.push(chalk.gray("No model usage data available")), c);
  let R = m[0],
    v = bu(
      s.dailyModelTokens,
      m.map(([H]) => H),
      80,
    );
  if (v) {
    (c.push(chalk.bold("Tokens per Day")),
      c.push(v.chart),
      c.push(chalk.gray(v.xAxisLabels)));
    let H = v.legend.map((B) => `${B.coloredBullet} ${B.model}`).join(" \xB7 ");
    (c.push(H), c.push(""));
  }
  (c.push(
    `${figures.star} Favorite: ${chalk.magenta.bold(renderModelName(R?.[0] || ""))} \xB7 ${figures.circle} Total: ${chalk.magenta(formatNumber(T))} tokens`,
  ),
    c.push(""));
  let A = m.slice(0, 3);
  for (let [H, B] of A) {
    let Y = fu(B, T);
    (c.push(`${figures.bullet} ${chalk.bold(renderModelName(H))} ${chalk.gray(`(${Y}%)`)}`),
      c.push(
        chalk.dim(`  In: ${formatNumber(B.inputTokens)} \xB7 Out: ${formatNumber(B.outputTokens)}`),
      ),
      c.push(chalk.dim(`  ${gu(B)}`)));
  }
  return c;
}
function US() {
  return [];
}
function SettingsDialog(cx) {
  let Gt = _(34),
    { onClose: _o, context: ze, defaultTab: Mp } = cx,
    [$s, ux] = d(Mp),
    [$n, dx] = d(!1),
    [px, fx] = d(!1),
    [gx] = d(!1),
    hx = useHasVirtualScrollViewport(),
    { rows: IS } = useVirtualScrollViewportSize(useTerminalSize()),
    Ep = hx ? IS + 1 : Math.max(15, Math.min(Math.floor(IS * 0.8), 30)),
    Fs = useSession(),
    _S;
  if (Gt[0] !== ze.credentials || Gt[1] !== ze.storageV5 || Gt[2] !== Fs)
    ((_S = () => xr(Fs, ze.storageV5, ze.credentials).catch(US)),
      (Gt[0] = ze.credentials),
      (Gt[1] = ze.storageV5),
      (Gt[2] = Fs),
      (Gt[3] = _S));
  else _S = Gt[3];
  let [Ap] = d(_S),
    Rp = C(null),
    PS;
  if (Gt[4] !== ze.credentials || Gt[5] !== ze.storageV5 || Gt[6] !== Fs)
    ((PS = () => {
      if (Rp.current === null)
        Rp.current = gr(Fs.host, ze.credentials, ze.storageV5);
      return Rp.current;
    }),
      (Gt[4] = ze.credentials),
      (Gt[5] = ze.storageV5),
      (Gt[6] = Fs),
      (Gt[7] = PS));
  else PS = Gt[7];
  let Ip = PS;
  useGlobalExitKeybinding();
  let OS;
  if (Gt[8] !== _o || Gt[9] !== $n)
    ((OS = () => {
      if ($n) {
        return;
      }
      _o("Settings dialog dismissed", { display: "system" });
    }),
      (Gt[8] = _o),
      (Gt[9] = $n),
      (Gt[10] = OS));
  else OS = Gt[10];
  let yx = OS;
  const _p =
    !$n &&
    !($s === "Config" && px) &&
    !($s === "Gates" && gx) &&
    $s !== "Stats";
  let LS;
  if (Gt[11] !== _p)
    ((LS = { context: "Settings", isActive: _p }),
      (Gt[11] = _p),
      (Gt[12] = LS));
  else LS = Gt[12];
  useKeybinding("confirm:no", yx, LS);
  let Cu;
  if (Gt[13] !== ze || Gt[14] !== Ap || Gt[15] !== Ip)
    ((Cu = e(
      ss,
      {
        title: "Status",
        children: e(Zs, {
          context: ze,
          diagnosticsPromise: Ap,
          getWebSetupRead: Ip,
        }),
      },
      "status",
    )),
      (Gt[13] = ze),
      (Gt[14] = Ap),
      (Gt[15] = Ip),
      (Gt[16] = Cu));
  else Cu = Gt[16];
  let ku;
  if (Gt[17] !== Ep || Gt[18] !== ze || Gt[19] !== _o)
    ((ku = e(
      ss,
      {
        title: "Config",
        children: e(Dn, {
          fallback: null,
          children: e(ga, {
            context: ze,
            onClose: _o,
            setTabsHidden: dx,
            onIsSearchModeChange: fx,
            contentHeight: Ep,
          }),
        }),
      },
      "config",
    )),
      (Gt[17] = Ep),
      (Gt[18] = ze),
      (Gt[19] = _o),
      (Gt[20] = ku));
  else ku = Gt[20];
  let NS;
  if (Gt[21] === MEMO_CACHE_SENTINEL)
    ((NS = e(ss, { title: "Usage", children: e(Pi, {}) }, "usage")),
      (Gt[21] = NS));
  else NS = Gt[21];
  let Du;
  if (Gt[22] !== _o)
    ((Du = e(
      ss,
      { title: "Stats", children: e(er, { onClose: _o }) },
      "stats",
    )),
      (Gt[22] = _o),
      (Gt[23] = Du));
  else Du = Gt[23];
  let BS;
  if (Gt[24] === MEMO_CACHE_SENTINEL) ((BS = []), (Gt[24] = BS));
  else BS = Gt[24];
  let $S;
  if (Gt[25] !== Cu || Gt[26] !== ku || Gt[27] !== Du)
    (($S = [Cu, ku, NS, Du, ...BS]),
      (Gt[25] = Cu),
      (Gt[26] = ku),
      (Gt[27] = Du),
      (Gt[28] = $S));
  else $S = Gt[28];
  let Pp = $S;
  const Op = Mp !== "Config" && Mp !== "Gates";
  let FS;
  if (Gt[29] !== $s || Gt[30] !== Op || Gt[31] !== Pp || Gt[32] !== $n)
    ((FS = e(Qr, {
      color: "permission",
      children: e(qp, {
        title: "Settings",
        color: "permission",
        selectedTab: $s,
        onTabChange: ux,
        hidden: $n,
        initialHeaderFocused: Op,
        children: Pp,
      }),
    })),
      (Gt[29] = $s),
      (Gt[30] = Op),
      (Gt[31] = Pp),
      (Gt[32] = $n),
      (Gt[33] = FS));
  else FS = Gt[33];
  return FS;
}
export { SettingsDialog };
