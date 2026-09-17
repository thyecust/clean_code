// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ie, Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { dt, ge, l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isSafeMode, getSafeModeExitHint } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { capitalize, pluralize, beforeFirst, truncateWithCharCount, formatShortText } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError, logMCPDebug } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  getMainLoopModel,
  getCanonicalName,
  bytesPerTokenForModel,
  hashForTelemetry,
  httpClient,
  configHasAuthorizationHeader,
  isMcpServerAuthenticated,
  isUnattendedBgSession,
  getClaudeAIOAuthTokens,
  getFeatureValue_CACHED_MAY_BE_STALE,
  saveGlobalConfig,
  getGlobalConfig,
  shouldSkipPluginAutoupdate,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { truncatePathMiddle, truncateToWidth, formatTokenEstimate, formatRelativeTimeAgo } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { cs } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import {
  CLAUDE_AI_SYNC_LABEL,
  describeSettingsSourceShort,
  getEnabledSettingsSources,
  USER_PROJECT_LOCAL_SETTINGS_SOURCES,
  sanitizeForDisplay as wr,
  sanitizeMultilineForDisplay,
  toHttpUrl,
  sanitizePluginManifest,
  removeInvisibleChars,
  getPluginDisplayName,
  toNonBlankString,
  sanitizeCommandRequest,
  isConnectedMcpServer,
  truncateWithEllipsis,
  toDisplayText,
  formatQuotedDisplayText,
  toErrorMessage,
  shouldAutoUpdateMarketplace,
  isReservedMarketplaceName,
  isLocalMarketplaceSource,
  stripMcpServerPrefix,
  normalizeToolDisplayName,
} from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { formatPathForDisplay } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { getSettingsForSource, getSettings_DEPRECATED, updateSettingsForSource, updateSettingsForSourceWithTransform } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { replaceControlChars } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { UP_ARROW_GLYPH, DOWN_ARROW_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { useTheme } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { Box, Text, Link } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useTerminalFocus } from "../../01-核心基础设施/共享小工具-未细化/clock-and-terminal-focus.js";
import { useClock } from "../../01-核心基础设施/共享小工具-未细化/use-clock.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { useFocusTrap } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { StatusIndicator } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { useHasVirtualScrollViewport, useVirtualScrollViewportSize } from "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-state.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { useKeybinding, useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { qp, ss } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import { useGlobalExitKeybinding } from "../../01-核心基础设施/共享小工具-未细化/exit-keybinding-hooks.js";
import { useStoreSelector } from "../../01-核心基础设施/共享小工具-未细化/use-store-selector.js";
import { useMcpConnections, useActivePlugins, useAppStateSession, useAppStateSelector, useSetAppState } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import {
  getPluginsDir,
  getPluginDataDir,
  getPluginDataDirSize,
  isValidCliNameToken,
  buildCliCommand,
  buildRunCommandHint,
  getErrorPluginId,
  UJ,
  formatPluginError,
  formatPluginWarning,
  formatPluginWarningGuidance,
} from "./plugin-system-core.js";
import {
  getCommandName,
  isMcpbFile,
  loadMcpServerUserConfig,
  saveMcpServerUserConfig,
  loadMcpbBundle,
  getPluginSource,
  findPluginById,
  loadPluginOptions,
  savePluginOptions,
  getUnconfiguredPluginOptions,
  getApiRequestState,
  estimateTokens,
  sanitizeDisplayTextWithoutRedaction,
  sanitizeDisplayText,
  sanitizeMessageText,
  isUnconfiguredMcpServer,
  getPluginChannelsNeedingConfig,
  getExistingSessionPluginCacheDir,
  parseMarketplaceSource,
  listClaudeAiMarketplaces,
  filterUnconfiguredMarketplaces,
  formatMarketplaceRowLabel,
  formatListedAsLabel,
  formatBrowseOnlyMarketplace,
  formatMarketplaceScopeLabel,
  formatMarketplaceSource,
  readClaudeAiMarketplaceRegistry,
  isNonInstallableClaudeAiPlugin,
  formatClaudeAiMarketplaceLabel,
  addClaudeAiMarketplace,
  buildPluginTelemetryFieldsFromId,
  parseEnabledPluginRecords,
  arePluginSettingsRecordsEqual,
  formatDependencyCountSuffix,
  createEnoentError,
  readLocalMarketplaceFile,
  MAX_MCP_TEXT_LENGTH,
  sanitizeLogValue,
  sanitizeForDisplay,
  getMcpServerTools,
  getMcpServerCommands,
  removeMcpServerTools,
  removeMcpServerCommands,
  omitKey,
  formatMcpScopeLocation,
  isDiscoveryCacheUsable,
  refreshPluginState,
  formatPluginInstallFailures,
  getMarketplaceSourceLabel,
  formatPluginId,
  loadMarketplaces,
  buildMarketplaceFailureNotice,
  getMarketplaceUpdateOutcome,
  getMarketplaceUpdateStatusIcon,
  formatMarketplaceUpdateSummary,
  getDeclaredMarketplaces,
  declareMarketplaceInSettings,
  getKnownMarketplaces,
  getKnownMarketplacesOrEmpty,
  findContainingSeedDir,
  addMarketplace,
  removeMarketplace,
  loadMarketplace,
  refreshMarketplace,
  setMarketplaceAutoUpdate,
  getInstalledPlugins,
  formatVersionLabel,
  isPluginInstalledInCurrentScope,
  isPluginInstalledForUser,
  installPluginFromMarketplace,
  loadAllPlugins,
  getClaudeAiMcpEverConnectedSet,
  getClaudeAiConnectorsUrl,
  buildClaudeAiMcpAuthUrl,
  isMcpDialBlockedByPolicy,
  mcpDialBlockCause,
  getMcpConfigByName,
  isMcpServerDisabled,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Qn } from "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import { stripBom, parseYaml, FRONTMATTER_PATTERN } from "../MCP客户端/chunk-3kmsshb6.js";
import { ig, y1e, vC, aXe, Ui } from "./chunk-ajtn749s.js";
import { isPluginBlockedByPolicy, areCommandPluginSourcesDisabledByPolicy, COMMAND_PLUGIN_SOURCES_DISABLED_MESSAGE, getPluginTrustMessage, getPluginSuggestionMarketplaces, isMarketplaceSourceDeclaredByPolicy } from "./plugin-source-policy.js";
import { mayHaveRemoteClient } from "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import { getPluginEditableScopes, editableScopeOf } from "../../01-核心基础设施/设置-配置/chunk-0y8rdjs7.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { SpinnerGlyph } from "../状态栏-主题/chunk-jrr487ty.js";
import { useVimModeInput, SearchInput } from "../Vim模式/Vim模式.nnewe0gf.js";
import {
  QPt,
  z8,
  yUn,
  c0e,
  tOt,
  uen,
  den,
  nOt,
  ek,
  ZWe,
  e9e,
  t9e,
  u0e,
} from "./chunk-akd9b588.js";
import { Qr, de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { XL } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import {
  bUn,
  dle,
  d0e,
  r9e,
  wUn,
  s9e,
  p0e,
  rOt,
  r4,
  f0e,
  m0e,
  Pye,
  g0e,
} from "./chunk-q8w2zntw.js";
import { redactManagedMcpConfig, normalizePluginRelevanceSignals, matchPluginRelevanceSignal } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { nl, ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { useListCursor, Table, SelectableRow, DimParenthetical, StatusLine, useMcpReconnect, useMcpToggleEnabled } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { getIdentityEpoch, isRemoteTransport, awaitDiscoveryCacheFlush } from "../MCP客户端/mcp-discovery-cache.js";
import { useCopyToClipboard, CopyFeedbackHint, CopyFallbackNotice } from "../../01-核心基础设施/共享小工具-未细化/clipboard-copy.js";
import { getFlaggedPlugins, markFlaggedPluginsSeen, clearFlaggedPlugin } from "../后台任务-Shell管理/chunk-n6g2zfwn.js";
import { getPluginInventory } from "../MCP客户端/chunk-4xr0rjb4.js";
import { useOnSettingsChange } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import { getSkillTokenCountsAccess } from "../成本-Token统计/usage-transcript-scan.js";
import { runPluginAutoupdateForMarketplaces, publishPluginAutoUpdateNotification } from "./plugin-autoupdate.js";
import { computeSkillUsageByPlugin } from "../../01-核心基础设施/共享小工具-未细化/skill-usage-by-plugin.js";
import { FocusableBox } from "../../01-核心基础设施/共享小工具-未细化/focusable-box.js";
import { BackgroundText } from "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import { getMcpClientFailureDetail, buildMcpReconnectResult, formatMcpReconnectError, formatMcpToggleError } from "../MCP客户端/mcp-error-messages.js";
import { ErrorMessage } from "../../01-核心基础设施/共享小工具-未细化/error-message.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import { ActionKeybindingHint } from "../../01-核心基础设施/共享小工具-未细化/action-keybinding-hint.js";
import { BulletItem } from "../../01-核心基础设施/共享小工具-未细化/bullet-item.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { refreshActivePlugins, getPluginReloadCacheImpact } from "../MCP客户端/plugin-reload-cache-impact.js";
import { resolveMissingDependencies, buildMissingDependencyNotice } from "./plugin-dependency-resolution.js";
import { getPluginSuggestionDiscoverShownCount, recordPluginSuggestionDiscoverShown } from "../CodeReview/ultrareview-tips.js";
import { padEndToWidth, padStartToWidth, buildSkillTableLayout, SkillDoctorStageError, collectSkillUsageData } from "../MCP客户端/skill-doctor-data.js";
import { getDisusedPlugins, getPluginDaysSinceLastUse } from "./plugin-disuse.js";
import { getThemeColor } from "../../01-核心基础设施/共享小工具-未细化/theme-color.js";
import { classifyMcpServerAuth } from "../../01-核心基础设施/共享小工具-未细化/mcp-hosted-oauth-gate.js";
import { formatServerDisabledHint, formatDisabledElsewhereMessage, formatMcpServerBlockedMessage } from "../MCP客户端/mcp-server-state-messages.js";
import { hasFirstPartyDesignAuth } from "../../01-核心基础设施/共享小工具-未细化/chunk-jhs1bd0k.js";
import { tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import {
  ew,
  Dn,
  Qt,
  L_,
  kn,
  re,
  De,
  E,
  vr,
  V,
  C,
  d,
  F,
} from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { isSkillDoctorEnabled } from "../../01-核心基础设施/设置-配置/early-access-feature-gates.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import {
  INLINE_PLUGIN_SOURCE,
  SKILLS_DIR_PLUGIN_SOURCE,
  SYNCED_PLUGIN_SOURCE,
  isNonMarketplacePluginSource,
  normalizePluginId,
  normalizePluginSourceName,
  getNonMarketplacePluginSource,
  splitPluginId,
  splitPluginIdOnLastAt,
  getPluginMarketplace,
  isEqualIgnoringCase,
  normalizeLookupKey,
  findKeyIgnoringCase,
  isOfficialMarketplace,
} from "./chunk-33bdfgmx.js";
import { s, O, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { countMatching, dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
async function Bl(a, k, v, b) {
  let w = await gy(a, k, v, b);
  if (
    (logEvent("tengu_plugin_install_auto_activate", {
      activated: w === null,
      ...(w !== null && { reason: fromEnum(w) }),
    }),
    w === null)
  )
    logFeatureOk("plugin_install_auto_activate");
  else if (w === "cache_impact")
    logFeatureSad("plugin_install_auto_activate", "cache_impact");
  else logFeatureBad("plugin_install_auto_activate", w);
  if (w === null) return "activated";
  if (w === "plugin_load_error") return "load-failed";
  return (k.markNeedsRefresh(), "reload-required");
}
async function gy(a, k, v, b) {
  let w = v;
  try {
    if ((await getPluginReloadCacheImpact(a())).wouldInvalidateCache) return "cache_impact";
    let A = await refreshActivePlugins(k, b),
      Q = await resolveMissingDependencies(A.errors, b);
    if (Q.installed.length > 0) {
      if ((await getPluginReloadCacheImpact(a())).wouldInvalidateCache) return "cache_impact";
      ((A = await refreshActivePlugins(k, b)), (w = [...w, ...Q.installed]));
    }
    if (A.error_count > A.errors.length) return "refresh_failed";
    if (A.errors.some((I) => fy(I, w))) return "plugin_load_error";
    return null;
  } catch (R) {
    return (
      logError(R),
      logForDebugging(`activatePluginsAfterInstall: falling back to needsRefresh: ${l(R)}`, {
        level: "error",
      }),
      "refresh_failed"
    );
  }
}
function fy(a, k) {
  if ("orphan" in a && a.orphan) return !1;
  if (getErrorPluginId(a) === void 0) return !1;
  let v =
      "pluginId" in a && a.pluginId
        ? a.pluginId
        : "plugin" in a && a.plugin
          ? a.plugin
          : void 0,
    b =
      v !== void 0 && v.includes("@")
        ? v
        : a.source.includes("@")
          ? a.source
          : (v ?? a.source);
  return b.includes("@") ? k.includes(b) : k.some((w) => beforeFirst(w, "@") === b);
}
F();
function Ol({
  inputValue: a,
  setInputValue: k,
  cursorOffset: v,
  setCursorOffset: b,
  error: w,
  setError: R,
  result: A,
  setResult: Q,
  setViewState: I,
  onAddComplete: j,
  cliMode: q = !1,
  autoAdd: X,
  claudeAiListing: B,
}) {
  let { storageV5: K, credentials: se } = useStorageV5Context(),
    fe = C(!1),
    [Fe, ze] = d(!1),
    [xe, we] = d(""),
    tt = async () => {
      let pt = a.trim();
      if (!pt) {
        R("Please enter a marketplace source");
        return;
      }
      let xt = await parseMarketplaceSource(pt);
      if (!xt) {
        R(
          "Invalid marketplace source format. Try: owner/repo, https://..., or ./path",
        );
        return;
      }
      if ("error" in xt) {
        R(xt.error);
        return;
      }
      R(null);
      try {
        (ze(!0), we(""));
        let { name: Je, resolvedSource: ae } = await addMarketplace(
            xt,
            (Lt) => {
              we(Lt);
            },
            K,
          ),
          { error: Re } = await declareMarketplaceInSettings(Je, { source: ae }, "userSettings", K);
        if (Re) throw Re;
        (refreshPluginState(K, se),
          logEvent("tengu_marketplace_added", {
            _PROTO_marketplace_name: Je,
            source_type: fromEnum(xt.source),
            repo_hash: xt.source === "github" ? hashForTelemetry(xt.repo) : void 0,
            is_official_marketplace: isOfficialMarketplace(Je),
          }));
        let Mt = [];
        try {
          Mt = (await resolveMissingDependencies((await loadAllPlugins(K, se)).errors, K)).installed;
        } catch (Lt) {
          logForDebugging(`marketplace add: dep auto-resolve skipped: ${l(Lt)}`, {
            level: "warn",
          });
        }
        if (Mt.length > 0) refreshPluginState(K, se);
        if ((await j(), we(""), ze(!1), q))
          Q(`Successfully added marketplace: ${Je}${formatDependencyCountSuffix(Mt)}`);
        else I({ type: "browse-marketplace", targetMarketplace: Je });
      } catch (Je) {
        let ae = ge(Je);
        if (
          (logForDebugging(`marketplace add failed: ${l(ae)}`, { level: "error" }),
          R(ae.message),
          we(""),
          ze(!1),
          q)
        )
          Q(`Error: ${ae.message}`);
        else Q(null);
      }
    };
  return (
    E(() => {
      if (X && a && !fe.current && !w && !A) ((fe.current = !0), tt());
    }, []),
    r(Box, {
      flexDirection: "column",
      children: [
        r(Box, {
          flexDirection: "column",
          paddingX: 1,
          borderStyle: "round",
          children: [
            e(Box, {
              marginBottom: 1,
              children: e(Text, { bold: !0, children: "Add Marketplace" }),
            }),
            r(Box, {
              flexDirection: "column",
              children: [
                B &&
                  r(Box, {
                    marginBottom: 1,
                    flexDirection: "column",
                    children: [
                      r(Text, {
                        children: [
                          "claude.ai lists",
                          " ",
                          e(Text, { bold: !0, children: wr(B.name) }),
                          " ",
                          "for your account:",
                        ],
                      }),
                      r(Text, { children: [" ", wr(B.source)] }),
                      e(Text, {
                        dimColor: !0,
                        children: "Type or paste its source below to add it.",
                      }),
                    ],
                  }),
                e(Text, { children: "Enter marketplace source:" }),
                e(Text, { dimColor: !0, children: "Examples:" }),
                e(Text, { dimColor: !0, children: " \xB7 owner/repo (GitHub)" }),
                e(Text, {
                  dimColor: !0,
                  children: " \xB7 git@github.com:owner/repo.git (SSH)",
                }),
                e(Text, {
                  dimColor: !0,
                  children: " \xB7 https://example.com/marketplace.json",
                }),
                e(Text, { dimColor: !0, children: " \xB7 ./path/to/marketplace" }),
                e(Box, {
                  marginTop: 1,
                  children: e(hn, {
                    value: a,
                    onChange: k,
                    onSubmit: tt,
                    columns: 80,
                    cursorOffset: v,
                    onChangeCursorOffset: b,
                    focus: !0,
                    showCursor: !0,
                  }),
                }),
              ],
            }),
            Fe &&
              r(Box, {
                marginTop: 1,
                children: [
                  e(SpinnerGlyph, {}),
                  e(Text, {
                    children:
                      wr(xe) || "Adding marketplace to configuration\u2026",
                  }),
                ],
              }),
            w && e(Box, { marginTop: 1, children: e(ErrorMessage, { error: sanitizeMultilineForDisplay(w) }) }),
            A && e(Box, { marginTop: 1, children: e(Text, { children: sanitizeMultilineForDisplay(A) }) }),
          ],
        }),
        e(Box, {
          marginLeft: 3,
          children: e(Text, {
            dimColor: !0,
            italic: !0,
            children: r(DotSeparatedList, {
              children: [
                e(KeybindingHint, { chord: "enter", action: "add" }),
                e(ActionKeybindingHint, {
                  action: "confirm:no",
                  context: "Settings",
                  fallback: "Esc",
                  description: "cancel",
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
F();
F();
F();
function Ld(a, k, v, b) {
  let w = {};
  for (let R of a) {
    let A = v[R],
      I = ((k[R] ?? "").split(/\r\n|\r|\n/, 1)[0] ?? "").trim();
    if (I === "") {
      if (A?.sensitive === !0 && b?.[R] !== void 0) continue;
      if (A?.type === "number") continue;
      if (A?.required !== !0 && b?.[R] === void 0) continue;
    }
    if (A?.type === "number") {
      let j = Number(I);
      w[R] = Number.isNaN(j) ? I : j;
    } else if (A?.type === "boolean") w[R] = Ie(I);
    else w[R] = I;
  }
  return w;
}
function Li(Ow) {
  let kr = _(24),
    {
      title: $d,
      subtitle: Dd,
      configSchema: ho,
      initialValues: ei,
      onSave: Bd,
      onCancel: Ad,
    } = Ow,
    yy;
  if (kr[0] !== ho) ((yy = Object.keys(ho)), (kr[0] = ho), (kr[1] = yy));
  else yy = kr[1];
  let Lo = yy,
    hy;
  if (kr[2] !== ho || kr[3] !== Lo || kr[4] !== ei)
    ((hy = () => {
      let ky = {};
      for (const Od of Lo) {
        let by = ho[Od]?.sensitive === !0 ? void 0 : ei?.[Od];
        ky[Od] = by === void 0 ? "" : String(by);
      }
      return ky;
    }),
      (kr[2] = ho),
      (kr[3] = Lo),
      (kr[4] = ei),
      (kr[5] = hy));
  else hy = kr[5];
  let [br, Nw] = d(hy),
    Sy;
  if (kr[6] !== ho || kr[7] !== Lo || kr[8] !== ei)
    ((Sy = Lo.map((Nl) => {
      let Ll = ho[Nl];
      let vy = Ll?.sensitive === !0;
      let wy = vy && ei?.[Nl] !== void 0;
      return {
        type: "text",
        key: Nl,
        label: Ll?.title || Nl,
        required: Ll?.required === !0 && !wy,
        mask: vy ? "*" : void 0,
        placeholder: wy ? "(unchanged)" : void 0,
        hint: () => Ll?.description,
      };
    })),
      (kr[6] = ho),
      (kr[7] = Lo),
      (kr[8] = ei),
      (kr[9] = Sy));
  else Sy = kr[9];
  let Nd = Sy;
  if (Lo.length === 0) {
    return null;
  }
  let Cy;
  if (kr[10] === MEMO_CACHE_SENTINEL)
    ((Cy = (_w, Fw) => Nw((Uw) => ({ ...Uw, [_w]: Fw }))), (kr[10] = Cy));
  else Cy = kr[10];
  let _l;
  if (
    kr[11] !== ho ||
    kr[12] !== Lo ||
    kr[13] !== ei ||
    kr[14] !== Bd ||
    kr[15] !== br
  )
    ((_l = () => Bd(Ld(Lo, br, ho, ei))),
      (kr[11] = ho),
      (kr[12] = Lo),
      (kr[13] = ei),
      (kr[14] = Bd),
      (kr[15] = br),
      (kr[16] = _l));
  else _l = kr[16];
  let Py;
  if (
    kr[17] !== Nd ||
    kr[18] !== Ad ||
    kr[19] !== Dd ||
    kr[20] !== _l ||
    kr[21] !== $d ||
    kr[22] !== br
  )
    ((Py = e(XL, {
      title: $d,
      subtitle: Dd,
      fields: Nd,
      values: br,
      onChange: Cy,
      onSubmit: _l,
      onCancel: Ad,
      submitLabel: "Save configuration",
    })),
      (kr[17] = Nd),
      (kr[18] = Ad),
      (kr[19] = Dd),
      (kr[20] = _l),
      (kr[21] = $d),
      (kr[22] = br),
      (kr[23] = Py));
  else Py = kr[23];
  return Py;
}
function mh(CC) {
  return Object.keys(CC.userConfig ?? {}).length > 0;
}
function gh(PC) {
  return { steps: PC };
}
function fh() {}
function yh(lh) {
  return (
    logForDebugging(`Failed to save plugin options: ${l(lh)}`, { level: "error" }),
    lh ?? Error("save failed")
  );
}
async function ns(a, k, v) {
  let { enabled: b, disabled: w } = await loadAllPlugins(k, v);
  return findPluginById([...b, ...w], a);
}
async function ph(a, k) {
  return (
    Object.keys(await getUnconfiguredPluginOptions(a, k)).length > 0 || (await getPluginChannelsNeedingConfig(a, k)).length > 0
  );
}
async function $a(a, k, v, b) {
  let w = await ns(a, v, b);
  if (!w || !(await ph(w, b))) return null;
  let R;
  for (let Q of getEnabledSettingsSources()) {
    let I = getSettingsForSource(Q)?.enabledPlugins?.[a];
    if (I !== void 0) R = I;
  }
  let A = R !== void 0 ? R === !1 : w.manifest.defaultEnabled === !1;
  return {
    type: "plugin-options",
    plugin: w,
    pluginId: a,
    depNote: k?.suffix ?? "",
    alreadyInstalled: !0,
    depsResolved: k?.changed ?? !1,
    installedDisabled: A,
    installedDisabledByDefault:
      R === void 0 && w.manifest.defaultEnabled === !1,
  };
}
function Mr(aC) {
  let Pa = _(22),
    { viewState: lC, onInstallComplete: _i, onFinish: _d } = aC,
    {
      plugin: pi,
      pluginId: _o,
      depNote: wa,
      alreadyInstalled: Ca,
      depsResolved: sC,
      installedDisabled: Fd,
      installedDisabledByDefault: Ud,
    } = lC,
    xr = Ca ? "Already installed" : "Installed",
    [cC, uC] = d(!1),
    Ty = C(!1),
    Iy,
    Ry;
  if (Pa[0] === MEMO_CACHE_SENTINEL)
    ((Iy = () => () => {
      Ty.current = !0;
    }),
      (Ry = []),
      (Pa[0] = Iy),
      (Pa[1] = Ry));
  else ((Iy = Pa[0]), (Ry = Pa[1]));
  E(Iy, Ry);
  let Sr = !Ca || Boolean(sC),
    Ey;
  if (Pa[2] !== Fd || Pa[3] !== Ud || Pa[4] !== _i || Pa[5] !== _o)
    ((Ey = async function Fi(dC) {
      if (!dC) {
        return "";
      }
      let My = _i ? await _i([_o]) : "reload-required";
      if (Fd) {
        let Dy = buildCliCommand("plugin enable", _o);
        let By = `enable it in /plugin${Dy ? ` or run: ${Dy}` : ""}.`;
        let Ay =
          My === "load-failed"
            ? " The plugin couldn't be loaded \u2014 see /plugin for details."
            : "";
        return Ud
          ? ` This plugin is disabled by default \u2014 ${By}${Ay}`
          : ` This plugin is disabled \u2014 ${By}${Ay}`;
      }
      switch (My) {
        case "activated": {
          return " Plugin is now active.";
        }
        case "load-failed": {
          return " The plugin couldn't be loaded \u2014 see /plugin for details.";
        }
        case "reload-required": {
          return " Run /reload-plugins to apply.";
        }
      }
    }),
      (Pa[2] = Fd),
      (Pa[3] = Ud),
      (Pa[4] = _i),
      (Pa[5] = _o),
      (Pa[6] = Ey));
  else Ey = Pa[6];
  let Fi = Ey;
  if (cC) {
    let ji;
    if (Pa[7] === MEMO_CACHE_SENTINEL)
      ((ji = e(SpinnerMessageLine, { message: "Activating plugin\u2026" })), (Pa[7] = ji));
    else ji = Pa[7];
    return ji;
  }
  let ji;
  if (
    Pa[8] !== Fi ||
    Pa[9] !== Ca ||
    Pa[10] !== Sr ||
    Pa[11] !== wa ||
    Pa[12] !== _d ||
    Pa[13] !== _i ||
    Pa[14] !== pi ||
    Pa[15] !== _o ||
    Pa[16] !== xr
  )
    ((ji = (pC, Oy, Vd) => {
      (async () => {
        uC(!0);
        let Fl = (mC) => {
          if (!Ty.current) _d(mC);
        };
        bb50: switch (pC) {
          case "configured": {
            let Ny = Boolean(Vd);
            let gC = Sr || Ny;
            Fl(
              `\u2713 ${Ny ? (Ca ? "Configured" : "Installed and configured") : xr} ${getPluginDisplayName(pi)}${wa}.${await Fi(gC)}`,
            );
            break bb50;
          }
          case "skipped": {
            let fC = Sr || Boolean(Vd);
            Fl(`\u2713 ${xr} ${getPluginDisplayName(pi)}${wa}.${await Fi(fC)}`);
            break bb50;
          }
          case "read-error": {
            Fl(
              `${xr} ${getPluginDisplayName(pi)}${wa}, but its saved options could not be read (${Oy}).${await Fi(Sr)}`,
            );
            break bb50;
          }
          case "error": {
            let Ly = !1;
            if (Sr || Boolean(Vd)) Ly = (await _i?.([_o])) === "load-failed";
            Fl(
              `${xr} but failed to save config: ${Oy}${Ly ? " The plugin couldn't be loaded \u2014 see /plugin for details." : ""}`,
            );
          }
        }
      })();
    }),
      (Pa[8] = Fi),
      (Pa[9] = Ca),
      (Pa[10] = Sr),
      (Pa[11] = wa),
      (Pa[12] = _d),
      (Pa[13] = _i),
      (Pa[14] = pi),
      (Pa[15] = _o),
      (Pa[16] = xr),
      (Pa[17] = ji));
  else ji = Pa[17];
  let _y;
  if (Pa[18] !== pi || Pa[19] !== _o || Pa[20] !== ji)
    ((_y = e(Tr, { plugin: pi, pluginId: _o, onDone: ji })),
      (Pa[18] = pi),
      (Pa[19] = _o),
      (Pa[20] = ji),
      (Pa[21] = _y));
  else _y = Pa[21];
  return _y;
}
function Tr(yC) {
  let mi = _(24),
    { plugin: ro, pluginId: ti, onDone: ni } = yC,
    { storageV5: Vl, credentials: Cr } = useStorageV5Context(),
    Fy;
  if (mi[0] !== Cr || mi[1] !== ro || mi[2] !== ti || mi[3] !== Vl)
    ((Fy = async function Ta() {
      let jd = [];
      let Uy = await getUnconfiguredPluginOptions(ro, Cr);
      if (Object.keys(Uy).length > 0)
        jd.push({
          key: "top-level",
          title: `Configure ${getPluginDisplayName(ro)}`,
          subtitle: "Plugin options",
          schema: Uy,
          load: () => loadPluginOptions(ti, Cr),
          save: (hC) => savePluginOptions(ti, hC, ro.manifest.userConfig, Vl),
        });
      let kC = await getPluginChannelsNeedingConfig(ro, Cr);
      for (const Pr of kC)
        jd.push({
          key: `channel:${Pr.server}`,
          title: `Configure ${Pr.displayName}`,
          subtitle: `Plugin: ${getPluginDisplayName(ro)}`,
          schema: Pr.configSchema,
          load: async () => (await loadMcpServerUserConfig(ti, Pr.server, Cr)) ?? void 0,
          save: (bC) => saveMcpServerUserConfig(ti, Pr.server, bC, Pr.configSchema, Vl),
        });
      return jd;
    }),
      (mi[0] = Cr),
      (mi[1] = ro),
      (mi[2] = ti),
      (mi[3] = Vl),
      (mi[4] = Fy));
  else Fy = mi[4];
  let Ta = Fy,
    Vy;
  if (
    mi[5] !== Ta ||
    mi[6] !== ro.manifest.channels ||
    mi[7] !== ro.manifest.userConfig ||
    mi[8] !== ti
  )
    ((Vy = () =>
      Object.keys(ro.manifest.userConfig ?? {}).length > 0 ||
      (ro.manifest.channels ?? []).some(mh)
        ? Ta().then(gh, (jy) => (Ea(ti, jy), { steps: [], error: l(jy) }))
        : { steps: [] }),
      (mi[5] = Ta),
      (mi[6] = ro.manifest.channels),
      (mi[7] = ro.manifest.userConfig),
      (mi[8] = ti),
      (mi[9] = Vy));
  else Vy = mi[9];
  let [Hi] = d(Vy),
    Hy = C(!1),
    [xC, wC] = d(!1);
  if (!(Hi instanceof Promise)) {
    let Ki;
    if (mi[10] !== ni || mi[11] !== Hi)
      ((Ki = e(Ir, { loaded: Hi, onDone: ni })),
        (mi[10] = ni),
        (mi[11] = Hi),
        (mi[12] = Ki));
    else Ki = mi[12];
    return Ki;
  }
  if (xC) {
    return null;
  }
  let Ki;
  if (mi[13] !== ni)
    ((Ki = () => {
      if (Hy.current) {
        return;
      }
      ((Hy.current = !0), wC(!0), ni("skipped", void 0, !1));
    }),
      (mi[13] = ni),
      (mi[14] = Ki));
  else Ki = mi[14];
  let Ky;
  if (mi[15] === MEMO_CACHE_SENTINEL)
    ((Ky = e(SpinnerMessageLine, { message: "Loading\u2026", dimColor: !0 })), (mi[15] = Ky));
  else Ky = mi[15];
  let jl;
  if (mi[16] !== Ki)
    ((jl = e(Er, { onCancel: Ki, children: Ky })),
      (mi[16] = Ki),
      (mi[17] = jl));
  else jl = mi[17];
  let Hl;
  if (mi[18] !== ni || mi[19] !== Hi)
    ((Hl = e(Zl, { steps: Hi, onDone: ni })),
      (mi[18] = ni),
      (mi[19] = Hi),
      (mi[20] = Hl));
  else Hl = mi[20];
  let qy;
  if (mi[21] !== jl || mi[22] !== Hl)
    ((qy = e(Dn, { fallback: jl, children: Hl })),
      (mi[21] = jl),
      (mi[22] = Hl),
      (mi[23] = qy));
  else qy = mi[23];
  return qy;
}
function Zl(TC) {
  let RC = _(3),
    { steps: IC, onDone: Hd } = TC,
    Kd = kn(IC),
    zy;
  if (RC[0] !== Kd || RC[1] !== Hd)
    ((zy = e(Ir, { loaded: Kd, onDone: Hd })),
      (RC[0] = Kd),
      (RC[1] = Hd),
      (RC[2] = zy));
  else zy = RC[2];
  return zy;
}
function Ir(EC) {
  let Vo = _(34),
    { loaded: MC, onDone: qd } = EC,
    { steps: Io, error: Fo } = MC,
    [Kl, $C] = d(0),
    ql = C(!1),
    zd = C(!1),
    zl = C(!1),
    Wy;
  if (Vo[0] !== qd)
    ((Wy = function ao(...Wl) {
      let DC = Wl;
      if (zd.current) {
        return;
      }
      ((zd.current = !0), qd(...DC));
    }),
      (Vo[0] = qd),
      (Vo[1] = Wy));
  else Wy = Vo[1];
  let ao = Wy,
    Wl;
  if (Vo[2] !== ao || Vo[3] !== Fo)
    ((Wl = () => {
      if (Fo !== void 0) ao("read-error", Fo);
      else ao("skipped");
    }),
      (Vo[2] = ao),
      (Vo[3] = Fo),
      (Vo[4] = Wl));
  else Wl = Vo[4];
  let Wd = vr(Wl),
    Gy;
  if (Vo[5] !== Fo || Vo[6] !== Wd || Vo[7] !== Io.length)
    ((Gy = () => {
      if (Fo !== void 0 || Io.length === 0) Wd();
    }),
      (Vo[5] = Fo),
      (Vo[6] = Wd),
      (Vo[7] = Io.length),
      (Vo[8] = Gy));
  else Gy = Vo[8];
  let Qy;
  if (Vo[9] !== Fo || Vo[10] !== Io.length)
    ((Qy = [Io.length, Fo]), (Vo[9] = Fo), (Vo[10] = Io.length), (Vo[11] = Qy));
  else Qy = Vo[11];
  E(Gy, Qy);
  let [jo, Yy] = d(null),
    Jy;
  if (Vo[12] !== ao || Vo[13] !== Io.length)
    ((Jy = (Xy, Zy) => {
      if (((zl.current = !1), Yy(null), Zy !== void 0)) {
        ao("error", l(Zy), ql.current);
        return;
      }
      if (Object.keys(Xy.values).length > 0) ql.current = !0;
      let eh = Xy.index + 1;
      if (eh < Io.length) $C(eh);
      else ao("configured", void 0, ql.current);
    }),
      (Vo[12] = ao),
      (Vo[13] = Io.length),
      (Vo[14] = Jy));
  else Jy = Vo[14];
  let Gd = vr(Jy),
    th;
  if (Vo[15] !== jo || Vo[16] !== Gd)
    ((th = () => {
      if (jo === null) {
        return;
      }
      let nh = jo;
      nh.saveOutcome.then((BC) => Gd(nh, BC));
    }),
      (Vo[15] = jo),
      (Vo[16] = Gd),
      (Vo[17] = th));
  else th = Vo[17];
  let oh;
  if (Vo[18] !== jo) ((oh = [jo]), (Vo[18] = jo), (Vo[19] = oh));
  else oh = Vo[19];
  if ((E(th, oh), Io.length === 0)) {
    return null;
  }
  let Hn = Io[Kl],
    ih;
  if (Vo[20] !== Hn || Vo[21] !== Kl || Vo[22] !== jo)
    ((ih = function Ia(rh) {
      if (zd.current || zl.current || jo !== null) {
        return;
      }
      ((zl.current = !0),
        Yy({
          index: Kl,
          values: rh,
          saveOutcome: (async () => Hn.save(rh))().then(fh, yh),
        }));
    }),
      (Vo[20] = Hn),
      (Vo[21] = Kl),
      (Vo[22] = jo),
      (Vo[23] = ih));
  else ih = Vo[23];
  let Ia = ih,
    Gl;
  if (Vo[24] !== ao)
    ((Gl = () => {
      if (zl.current) {
        return;
      }
      ao("skipped", void 0, ql.current);
    }),
      (Vo[24] = ao),
      (Vo[25] = Gl));
  else Gl = Vo[25];
  let ah;
  if (
    Vo[26] !== Hn.key ||
    Vo[27] !== Hn.load ||
    Vo[28] !== Hn.schema ||
    Vo[29] !== Hn.subtitle ||
    Vo[30] !== Hn.title ||
    Vo[31] !== Ia ||
    Vo[32] !== Gl
  )
    ((ah = e(
      Rr,
      {
        title: Hn.title,
        subtitle: Hn.subtitle,
        configSchema: Hn.schema,
        load: Hn.load,
        onSave: Ia,
        onCancel: Gl,
      },
      Hn.key,
    )),
      (Vo[26] = Hn.key),
      (Vo[27] = Hn.load),
      (Vo[28] = Hn.schema),
      (Vo[29] = Hn.subtitle),
      (Vo[30] = Hn.title),
      (Vo[31] = Ia),
      (Vo[32] = Gl),
      (Vo[33] = ah));
  else ah = Vo[33];
  return ah;
}
function Rr(Qd) {
  let Ra = _(14),
    Ho,
    Yl;
  if (Ra[0] !== Qd)
    (({ load: Yl, ...Ho } = Qd), (Ra[0] = Qd), (Ra[1] = Ho), (Ra[2] = Yl));
  else ((Ho = Ra[1]), (Yl = Ra[2]));
  let sh;
  if (Ra[3] !== Ho.title || Ra[4] !== Yl)
    ((sh = () =>
      Promise.resolve()
        .then(Yl)
        .catch((AC) => {
          Ea(Ho.title, AC);
        })),
      (Ra[3] = Ho.title),
      (Ra[4] = Yl),
      (Ra[5] = sh));
  else sh = Ra[5];
  let [Yd] = d(sh),
    Jl;
  if (Ra[6] !== Ho.onCancel)
    ((Jl = e(Er, { onCancel: Ho.onCancel })),
      (Ra[6] = Ho.onCancel),
      (Ra[7] = Jl));
  else Jl = Ra[7];
  let Xl;
  if (Ra[8] !== Ho || Ra[9] !== Yd)
    ((Xl = e(es, { dialog: Ho, saved: Yd })),
      (Ra[8] = Ho),
      (Ra[9] = Yd),
      (Ra[10] = Xl));
  else Xl = Ra[10];
  let ch;
  if (Ra[11] !== Jl || Ra[12] !== Xl)
    ((ch = e(Dn, { fallback: Jl, children: Xl })),
      (Ra[11] = Jl),
      (Ra[12] = Xl),
      (Ra[13] = ch));
  else ch = Ra[13];
  return ch;
}
function Ea(a, k) {
  logForDebugging(`Failed to read saved plugin options (${a}): ${l(k)}`, { level: "error" });
}
function es(OC) {
  let LC = _(3),
    { dialog: Jd, saved: NC } = OC,
    Zd = kn(NC),
    uh;
  if (LC[0] !== Jd || LC[1] !== Zd)
    ((uh = e(Li, { ...Jd, initialValues: Zd })),
      (LC[0] = Jd),
      (LC[1] = Zd),
      (LC[2] = uh));
  else uh = LC[2];
  return uh;
}
function Er(_C) {
  let VC = _(1),
    { onCancel: FC, children: UC } = _C,
    dh;
  if (VC[0] === MEMO_CACHE_SENTINEL) ((dh = { context: "Settings" }), (VC[0] = dh));
  else dh = VC[0];
  return (useKeybinding("confirm:no", FC, dh), UC ?? null);
}
F();
function qi(a) {
  return [
    ["Commands", a.commands.map((v) => v.name)],
    ["Agents", a.agents.map((v) => v.name)],
    ["Skills", a.skills.map((v) => v.name)],
    ["Hooks", a.hooks ?? []],
    ["MCP Servers", a.mcpServers ?? []],
    ["LSP Servers", a.lspServers ?? []],
  ].filter(([, v]) => v.length > 0);
}
function Da() {
  let ep = _(3),
    hh;
  if (ep[0] === MEMO_CACHE_SENTINEL) ((hh = getPluginTrustMessage()), (ep[0] = hh));
  else hh = ep[0];
  let kh = hh,
    bh;
  if (ep[1] === MEMO_CACHE_SENTINEL)
    ((bh = r(Text, { color: "claude", children: [figures.warning, " "] })),
      (ep[1] = bh));
  else bh = ep[1];
  let Sh;
  if (ep[2] === MEMO_CACHE_SENTINEL)
    ((Sh = r(Box, {
      marginBottom: 1,
      children: [
        bh,
        r(Text, {
          dimColor: !0,
          italic: !0,
          children: [
            "Make sure you trust a plugin before installing, updating, or using it. Anthropic does not control what MCP servers, files, or other software are included in plugins and cannot verify that they will work as intended or that they won't change. See each plugin's homepage for more information.",
            kh ? ` ${kh}` : "",
          ],
        }),
      ],
    })),
      (ep[2] = Sh));
  else Sh = ep[2];
  return Sh;
}
function fk(BP) {
  return BP ?? null;
}
function yk() {
  return null;
}
function hk(Tp) {
  let [Hh, LP] = Tp;
  return r(
    Text,
    { dimColor: !0, children: ["\xB7 ", Hh, ": ", LP.map(wr).join(", ")] },
    Hh,
  );
}
function kk() {
  return null;
}
function bk(Fa) {
  let [, WP] = Fa;
  return WP.length > 0;
}
function xk(Fa) {
  let [gk, GP] = Fa;
  return r(
    Text,
    { dimColor: !0, children: ["\xB7 ", gk, ": ", GP.map(wr).join(", ")] },
    gk,
  );
}
function Ua(a) {
  if (
    a.entry.source &&
    typeof a.entry.source === "object" &&
    "source" in a.entry.source &&
    a.entry.source.source === "github" &&
    typeof a.entry.source === "object" &&
    "repo" in a.entry.source
  )
    return a.entry.source.repo;
  return null;
}
function Vp(a, k) {
  let v = [
    { label: "Install for you (user scope)", action: "install-user" },
    {
      label: "Install for all collaborators on this repository (project scope)",
      action: "install-project",
    },
    {
      label: "Install for you, in this repo only (local scope)",
      action: "install-local",
    },
  ];
  if (a) v.push({ label: "Open homepage", action: "homepage" });
  if (k) v.push({ label: "View on GitHub", action: "github" });
  return (v.push({ label: "Back to plugin list", action: "back" }), v);
}
function ec(SP) {
  let gi = _(24),
    { selectedPlugin: Wn, isActive: tp, onInstall: Ba, onBack: op } = SP,
    [ko, ip] = d(0),
    [vh, vP] = d(Wn);
  if (vh !== Wn) (vP(Wn), ip(0));
  let rp;
  bb0: {
    if (!Wn) {
      let Ko;
      if (gi[0] === MEMO_CACHE_SENTINEL) ((Ko = []), (gi[0] = Ko));
      else Ko = gi[0];
      rp = Ko;
      break bb0;
    }
    let lp = Wn.entry.homepage;
    let Ko;
    if (gi[1] !== lp || gi[2] !== Wn) {
      let wP = Ua(Wn);
      Ko = Vp(lp, wP);
      ((gi[1] = lp), (gi[2] = Wn), (gi[3] = Ko));
    } else Ko = gi[3];
    rp = Ko;
  }
  let oi = rp,
    Ko;
  if (gi[4] !== ko)
    ((Ko = () => {
      if (ko > 0) ip(ko - 1);
    }),
      (gi[4] = ko),
      (gi[5] = Ko));
  else Ko = gi[5];
  let os;
  if (gi[6] !== ko || gi[7] !== oi)
    ((os = () => {
      if (ko < oi.length - 1) ip(ko + 1);
    }),
      (gi[6] = ko),
      (gi[7] = oi),
      (gi[8] = os));
  else os = gi[8];
  let rs;
  if (
    gi[9] !== ko ||
    gi[10] !== oi ||
    gi[11] !== op ||
    gi[12] !== Ba ||
    gi[13] !== Wn
  )
    ((rs = () => {
      if (!Wn) {
        return;
      }
      let $r = oi[ko]?.action;
      let wh = Wn.entry.homepage;
      let Ch = Ua(Wn);
      if ($r === "install-user") Ba(Wn, "user");
      else if ($r === "install-project") Ba(Wn, "project");
      else if ($r === "install-local") Ba(Wn, "local");
      else if ($r === "homepage" && wh) tryOpenUrlInBrowser(wh);
      else if ($r === "github" && Ch) tryOpenUrlInBrowser(`https://github.com/${Ch}`);
      else if ($r === "back") op();
    }),
      (gi[9] = ko),
      (gi[10] = oi),
      (gi[11] = op),
      (gi[12] = Ba),
      (gi[13] = Wn),
      (gi[14] = rs));
  else rs = gi[14];
  let Th;
  if (gi[15] !== Ko || gi[16] !== os || gi[17] !== rs)
    ((Th = { "select:previous": Ko, "select:next": os, "select:accept": rs }),
      (gi[15] = Ko),
      (gi[16] = os),
      (gi[17] = rs),
      (gi[18] = Th));
  else Th = gi[18];
  let Ih;
  if (gi[19] !== tp)
    ((Ih = { context: "Select", isActive: tp }), (gi[19] = tp), (gi[20] = Ih));
  else Ih = gi[20];
  useKeybindings(Th, Ih);
  const sp = vh === Wn ? ko : 0;
  let Rh;
  if (gi[21] !== oi || gi[22] !== sp)
    ((Rh = { detailsMenuOptions: oi, detailsMenuIndex: sp }),
      (gi[21] = oi),
      (gi[22] = sp),
      (gi[23] = Rh));
  else Rh = gi[23];
  return Rh;
}
function Lr(CP) {
  let jn = _(54),
    {
      title: cp,
      plugin: Nt,
      onEntryHelperShown: up,
      showMarketplace: dp,
      extraSection: pp,
      installError: zi,
      menuOptions: mp,
      detailsMenuIndex: Oa,
      isInstalling: Na,
      bylinePaddingLeft: gp,
    } = CP,
    as;
  if (jn[0] !== cp)
    ((as = e(Box, {
      marginBottom: 1,
      children: e(Text, { bold: !0, children: cp }),
    })),
      (jn[0] = cp),
      (jn[1] = as));
  else as = jn[1];
  let ls;
  if (jn[2] !== Nt.entry)
    ((ls = getPluginDisplayName(Nt.entry)), (jn[2] = Nt.entry), (jn[3] = ls));
  else ls = jn[3];
  let us;
  if (jn[4] !== ls)
    ((us = e(Text, { bold: !0, children: ls })), (jn[4] = ls), (jn[5] = us));
  else us = jn[5];
  let ds;
  if (jn[6] !== Nt.marketplaceName || jn[7] !== dp)
    ((ds =
      dp &&
      r(Text, { dimColor: !0, children: ["from ", wr(Nt.marketplaceName)] })),
      (jn[6] = Nt.marketplaceName),
      (jn[7] = dp),
      (jn[8] = ds));
  else ds = jn[8];
  let ps;
  if (jn[9] !== Nt.entry.version)
    ((ps =
      Nt.entry.version &&
      r(Text, { dimColor: !0, children: ["Version: ", wr(Nt.entry.version)] })),
      (jn[9] = Nt.entry.version),
      (jn[10] = ps));
  else ps = jn[10];
  let gs;
  if (jn[11] !== Nt.pluginId)
    ((gs = e(Ws, { pluginId: Nt.pluginId })),
      (jn[11] = Nt.pluginId),
      (jn[12] = gs));
  else gs = jn[12];
  let fs;
  if (jn[13] !== Nt.entry.description)
    ((fs =
      Nt.entry.description &&
      e(Box, {
        marginTop: 1,
        children: e(Text, { children: sanitizeMultilineForDisplay(Nt.entry.description) }),
      })),
      (jn[13] = Nt.entry.description),
      (jn[14] = fs));
  else fs = jn[14];
  let ys;
  if (jn[15] !== Nt.entry.author)
    ((ys =
      Nt.entry.author &&
      e(Box, {
        marginTop: 1,
        children: r(Text, {
          dimColor: !0,
          children: [
            "By:",
            " ",
            wr(
              typeof Nt.entry.author === "string"
                ? Nt.entry.author
                : Nt.entry.author.name,
            ),
          ],
        }),
      })),
      (jn[15] = Nt.entry.author),
      (jn[16] = ys));
  else ys = jn[16];
  let hs;
  if (
    jn[17] !== us ||
    jn[18] !== ds ||
    jn[19] !== ps ||
    jn[20] !== gs ||
    jn[21] !== fs ||
    jn[22] !== ys
  )
    ((hs = r(Box, {
      flexDirection: "column",
      marginBottom: 1,
      children: [us, ds, ps, gs, fs, ys],
    })),
      (jn[17] = us),
      (jn[18] = ds),
      (jn[19] = ps),
      (jn[20] = gs),
      (jn[21] = fs),
      (jn[22] = ys),
      (jn[23] = hs));
  else hs = jn[23];
  let bs;
  if (jn[24] !== zi || jn[25] !== up || jn[26] !== Nt)
    ((bs = e(Qs, { plugin: Nt, onEntryHelperShown: up, refreshKey: zi })),
      (jn[24] = zi),
      (jn[25] = up),
      (jn[26] = Nt),
      (jn[27] = bs));
  else bs = jn[27];
  let xs;
  if (jn[28] !== Nt.entry)
    ((xs = e(Xs, { entry: Nt.entry })), (jn[28] = Nt.entry), (jn[29] = xs));
  else xs = jn[29];
  let Eh;
  if (jn[30] === MEMO_CACHE_SENTINEL) ((Eh = e(Da, {})), (jn[30] = Eh));
  else Eh = jn[30];
  let Ss;
  if (jn[31] !== zi)
    ((Ss = zi && e(Box, { marginBottom: 1, children: e(ErrorMessage, { error: sanitizeMultilineForDisplay(zi) }) })),
      (jn[31] = zi),
      (jn[32] = Ss));
  else Ss = jn[32];
  let vs;
  if (jn[33] !== Oa || jn[34] !== Na || jn[35] !== mp) {
    let Wi;
    if (jn[37] !== Oa || jn[38] !== Na)
      ((Wi = (fp, PP) => {
        let ws = Oa === PP;
        return r(
          SelectableRow,
          {
            active: ws,
            children: [
              ws && e(Text, { "aria-hidden": !0, children: "> " }),
              !ws && e(Text, { "aria-hidden": !0, children: "  " }),
              e(Text, {
                bold: ws,
                children:
                  Na && fp.action.startsWith("install-")
                    ? "Installing\u2026"
                    : fp.label,
              }),
            ],
          },
          fp.action,
        );
      }),
        (jn[37] = Oa),
        (jn[38] = Na),
        (jn[39] = Wi));
    else Wi = jn[39];
    vs = mp.map(Wi);
    ((jn[33] = Oa), (jn[34] = Na), (jn[35] = mp), (jn[36] = vs));
  } else vs = jn[36];
  let Wi;
  if (jn[40] !== vs)
    ((Wi = e(Box, { flexDirection: "column", children: vs })),
      (jn[40] = vs),
      (jn[41] = Wi));
  else Wi = jn[41];
  let Mh;
  if (jn[42] === MEMO_CACHE_SENTINEL)
    ((Mh = e(Text, {
      dimColor: !0,
      children: r(DotSeparatedList, {
        children: [
          e(ActionKeybindingHint, {
            action: "select:accept",
            context: "Select",
            fallback: "Enter",
            description: "select",
          }),
          e(ActionKeybindingHint, {
            action: "confirm:no",
            context: "Settings",
            fallback: "Esc",
            description: "go back",
          }),
        ],
      }),
    })),
      (jn[42] = Mh));
  else Mh = jn[42];
  let Cs;
  if (jn[43] !== gp)
    ((Cs = e(Box, { marginTop: 1, paddingLeft: gp, children: Mh })),
      (jn[43] = gp),
      (jn[44] = Cs));
  else Cs = jn[44];
  let $h;
  if (
    jn[45] !== pp ||
    jn[46] !== as ||
    jn[47] !== bs ||
    jn[48] !== xs ||
    jn[49] !== Ss ||
    jn[50] !== Wi ||
    jn[51] !== Cs ||
    jn[52] !== hs
  )
    (($h = r(Box, {
      flexDirection: "column",
      children: [as, hs, bs, pp, xs, Eh, Ss, Wi, Cs],
    })),
      (jn[45] = pp),
      (jn[46] = as),
      (jn[47] = bs),
      (jn[48] = xs),
      (jn[49] = Ss),
      (jn[50] = Wi),
      (jn[51] = Cs),
      (jn[52] = hs),
      (jn[53] = $h));
  else $h = jn[53];
  return $h;
}
function _r(TP) {
  let Dr = _(12),
    { hasSelection: yp, canToggle: hp, canView: kp } = TP,
    Ps;
  if (Dr[0] !== yp)
    ((Ps =
      yp &&
      e(ActionKeybindingHint, {
        action: "plugin:install",
        context: "Plugin",
        fallback: "i",
        description: "install",
        bold: !0,
      })),
      (Dr[0] = yp),
      (Dr[1] = Ps));
  else Ps = Dr[1];
  let Dh;
  if (Dr[2] === MEMO_CACHE_SENTINEL) ((Dh = e(Text, { children: "Type to search" })), (Dr[2] = Dh));
  else Dh = Dr[2];
  let Ts;
  if (Dr[3] !== hp)
    ((Ts =
      hp &&
      e(ActionKeybindingHint, {
        action: "plugin:toggle",
        context: "Plugin",
        fallback: "Space",
        description: "toggle",
      })),
      (Dr[3] = hp),
      (Dr[4] = Ts));
  else Ts = Dr[4];
  let Is;
  if (Dr[5] !== kp)
    ((Is =
      kp &&
      e(ActionKeybindingHint, {
        action: "select:accept",
        context: "Select",
        fallback: "Enter",
        description: "view",
      })),
      (Dr[5] = kp),
      (Dr[6] = Is));
  else Is = Dr[6];
  let Bh;
  if (Dr[7] === MEMO_CACHE_SENTINEL)
    ((Bh = e(ActionKeybindingHint, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back",
    })),
      (Dr[7] = Bh));
  else Bh = Dr[7];
  let Ah;
  if (Dr[8] !== Ps || Dr[9] !== Ts || Dr[10] !== Is)
    ((Ah = e(Box, {
      marginTop: 1,
      children: e(Text, {
        dimColor: !0,
        italic: !0,
        children: r(DotSeparatedList, { children: [Ps, Dh, Ts, Is, Bh] }),
      }),
    })),
      (Dr[8] = Ps),
      (Dr[9] = Ts),
      (Dr[10] = Is),
      (Dr[11] = Ah));
  else Ah = Dr[11];
  return Ah;
}
function Ws(IP) {
  let EP = _(2),
    { pluginId: RP } = IP,
    bp = Ar(RP),
    Oh;
  if (EP[0] !== bp)
    ((Oh = e(Dn, { fallback: null, children: e(Gs, { entryPromise: bp }) })),
      (EP[0] = bp),
      (EP[1] = Oh));
  else Oh = EP[1];
  return Oh;
}
function Gs(MP) {
  let Nh = _(4),
    { entryPromise: $P } = MP,
    Rs = kn($P);
  if (!Rs?.last_updated) {
    return null;
  }
  let Lh;
  if (Nh[0] !== Rs.last_updated)
    ((Lh = Hp(Rs.last_updated)), (Nh[0] = Rs.last_updated), (Nh[1] = Lh));
  else Lh = Nh[1];
  let Es = Lh;
  if (Es === void 0) {
    return null;
  }
  let _h;
  if (Nh[2] !== Es)
    ((_h = r(Text, { dimColor: !0, children: ["Last updated: ", Es] })),
      (Nh[2] = Es),
      (Nh[3] = _h));
  else _h = Nh[3];
  return _h;
}
function Ar(xp) {
  let DP = _(3),
    { storageV5: Sp } = useStorageV5Context(),
    Fh;
  if (DP[0] !== xp || DP[1] !== Sp)
    ((Fh = tOt(xp, Sp).then(fk).catch(yk)),
      (DP[0] = xp),
      (DP[1] = Sp),
      (DP[2] = Fh));
  else Fh = DP[2];
  return Fh;
}
function Hp(a) {
  let k = new Date(a);
  if (Number.isNaN(k.getTime())) return;
  return k.toLocaleDateString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
function Qs(AP) {
  let Br = _(17),
    { plugin: so, onEntryHelperShown: vp, refreshKey: OP } = AP,
    wp = Ar(so.pluginId);
  const Cp = String(OP ?? "");
  let Ms;
  if (
    Br[0] !== vp ||
    Br[1] !== so.entry ||
    Br[2] !== so.pluginId ||
    Br[3] !== Cp
  )
    ((Ms = e(
      Or,
      {
        pluginId: so.pluginId,
        entry: so.entry,
        verb: "Installing",
        onShown: vp,
      },
      Cp,
    )),
      (Br[0] = vp),
      (Br[1] = so.entry),
      (Br[2] = so.pluginId),
      (Br[3] = Cp),
      (Br[4] = Ms));
  else Ms = Br[4];
  let Uh;
  if (Br[5] === MEMO_CACHE_SENTINEL)
    ((Uh = e(Text, { bold: !0, children: "Will install:" })), (Br[5] = Uh));
  else Uh = Br[5];
  let $s;
  if (Br[6] !== so.entry)
    (($s = e(Nr, { entry: so.entry })), (Br[6] = so.entry), (Br[7] = $s));
  else $s = Br[7];
  let Ds;
  if (Br[8] !== wp || Br[9] !== so.entry)
    ((Ds = e(Ys, { entryPromise: wp, marketplaceEntry: so.entry })),
      (Br[8] = wp),
      (Br[9] = so.entry),
      (Br[10] = Ds));
  else Ds = Br[10];
  let Bs;
  if (Br[11] !== $s || Br[12] !== Ds)
    ((Bs = e(Dn, { fallback: $s, children: Ds })),
      (Br[11] = $s),
      (Br[12] = Ds),
      (Br[13] = Bs));
  else Bs = Br[13];
  let Vh;
  if (Br[14] !== Ms || Br[15] !== Bs)
    ((Vh = r(Box, {
      flexDirection: "column",
      marginBottom: 1,
      children: [Ms, Uh, Bs],
    })),
      (Br[14] = Ms),
      (Br[15] = Bs),
      (Br[16] = Vh));
  else Vh = Br[16];
  return Vh;
}
function Ys(Tp) {
  let Ip = _(8),
    { entryPromise: NP, marketplaceEntry: La } = Tp,
    As = kn(NP),
    Os,
    Rp;
  if (Ip[0] !== As || Ip[1] !== La) {
    Rp = EARLY_RETURN_SENTINEL;
    bb0: {
      let jh = As?.components ? qi(As.components) : [];
      if (jh.length === 0) {
        let _a;
        if (Ip[4] !== La)
          ((_a = e(Nr, { entry: La })), (Ip[4] = La), (Ip[5] = _a));
        else _a = Ip[5];
        Rp = _a;
        break bb0;
      }
      Os = jh.map(hk);
    }
    ((Ip[0] = As), (Ip[1] = La), (Ip[2] = Os), (Ip[3] = Rp));
  } else ((Os = Ip[2]), (Rp = Ip[3]));
  if (Rp !== EARLY_RETURN_SENTINEL) return Rp;
  let _a;
  if (Ip[6] !== Os) ((_a = e(N, { children: Os })), (Ip[6] = Os), (Ip[7] = _a));
  else _a = Ip[7];
  return _a;
}
function Js(_P) {
  let fi = _(17),
    { consent: Ns, verb: Kh } = _P,
    Ep = Kh === void 0 ? "Installing" : Kh;
  if (Ns === null) {
    return null;
  }
  let qh;
  if (fi[0] !== Ns) ((qh = sanitizeCommandRequest(Ns)), (fi[0] = Ns), (fi[1] = qh));
  else qh = fi[1];
  let zo = qh,
    zh;
  if (fi[2] === MEMO_CACHE_SENTINEL)
    ((zh = e(StatusIndicator, { status: "warning", withSpace: !0 })), (fi[2] = zh));
  else zh = fi[2];
  let Ls;
  if (fi[3] !== Ep)
    ((Ls = r(Text, {
      color: "warning",
      children: [
        zh,
        Ep,
        " runs a local command and sends its output as headers to:",
      ],
    })),
      (fi[3] = Ep),
      (fi[4] = Ls));
  else Ls = fi[4];
  let _s;
  if (fi[5] !== zo.destination)
    ((_s = r(Text, { children: ["  ", zo.destination] })),
      (fi[5] = zo.destination),
      (fi[6] = _s));
  else _s = fi[6];
  let Fs;
  if (fi[7] !== zo.hiddenCharactersWarning)
    ((Fs =
      zo.hiddenCharactersWarning &&
      r(Text, { color: "error", children: ["  ", zo.hiddenCharactersWarning] })),
      (fi[7] = zo.hiddenCharactersWarning),
      (fi[8] = Fs));
  else Fs = fi[8];
  let Wh;
  if (fi[9] === MEMO_CACHE_SENTINEL)
    ((Wh = r(Text, { dimColor: !0, children: ["  ", "The command:"] })),
      (fi[9] = Wh));
  else Wh = fi[9];
  let Us;
  if (fi[10] !== zo.command)
    ((Us = r(Text, { children: ["  ", zo.command] })),
      (fi[10] = zo.command),
      (fi[11] = Us));
  else Us = fi[11];
  let Gh;
  if (fi[12] !== Ls || fi[13] !== _s || fi[14] !== Fs || fi[15] !== Us)
    ((Gh = r(Box, {
      flexDirection: "column",
      marginBottom: 1,
      children: [Ls, _s, Fs, Wh, Us],
    })),
      (fi[12] = Ls),
      (fi[13] = _s),
      (fi[14] = Fs),
      (fi[15] = Us),
      (fi[16] = Gh));
  else Gh = fi[16];
  return Gh;
}
function Xs(FP) {
  let Gi = _(14),
    { entry: Ro } = FP;
  if (typeof Ro.source !== "object" || Ro.source.source !== "command") {
    return null;
  }
  let Qh;
  if (Gi[0] === MEMO_CACHE_SENTINEL)
    ((Qh = e(Text, {
      dimColor: !0,
      children: "Installed by running a command on this machine:",
    })),
      (Gi[0] = Qh));
  else Qh = Gi[0];
  let Vs;
  if (Gi[1] !== Ro.source.command)
    ((Vs = e(Box, {
      paddingLeft: 2,
      children: e(Text, { children: Ro.source.command }),
    })),
      (Gi[1] = Ro.source.command),
      (Gi[2] = Vs));
  else Vs = Gi[2];
  let js;
  if (Gi[3] !== Ro.source)
    ((js = aXe(Ro.source)), (Gi[3] = Ro.source), (Gi[4] = js));
  else js = Gi[4];
  let Hs;
  if (Gi[5] !== js)
    ((Hs = e(Text, { dimColor: !0, children: js })), (Gi[5] = js), (Gi[6] = Hs));
  else Hs = Gi[6];
  let Yh;
  if (Gi[7] === MEMO_CACHE_SENTINEL)
    ((Yh = areCommandPluginSourcesDisabledByPolicy() && e(Text, { color: "warning", children: COMMAND_PLUGIN_SOURCES_DISABLED_MESSAGE })), (Gi[7] = Yh));
  else Yh = Gi[7];
  let Ks;
  if (Gi[8] !== Ro.source.mode)
    ((Ks =
      Ro.source.mode === "link" &&
      getCurrentPlatform() === "windows" &&
      e(Text, { color: "warning", children: y1e })),
      (Gi[8] = Ro.source.mode),
      (Gi[9] = Ks));
  else Ks = Gi[9];
  let Jh;
  if (Gi[10] !== Vs || Gi[11] !== Hs || Gi[12] !== Ks)
    ((Jh = r(Box, {
      marginBottom: 1,
      flexDirection: "column",
      children: [Qh, Vs, Hs, Yh, Ks],
    })),
      (Gi[10] = Vs),
      (Gi[11] = Hs),
      (Gi[12] = Ks),
      (Gi[13] = Jh));
  else Jh = Gi[13];
  return Jh;
}
function Fr(Mp) {
  let qs = _(5),
    $p = C(void 0),
    Xh;
  if (qs[0] === MEMO_CACHE_SENTINEL)
    ((Xh = () => {
      $p.current = void 0;
    }),
      (qs[0] = Xh));
  else Xh = qs[0];
  let Zh;
  if (qs[1] !== Mp) ((Zh = [Mp]), (qs[1] = Mp), (qs[2] = Zh));
  else Zh = qs[2];
  E(Xh, Zh);
  let tk;
  if (qs[3] === MEMO_CACHE_SENTINEL)
    ((tk = (UP) => {
      $p.current = UP;
    }),
      (qs[3] = tk));
  else tk = qs[3];
  let VP = tk,
    nk;
  if (qs[4] === MEMO_CACHE_SENTINEL) {
    let jP = () => $p.current ?? null;
    nk = { record: VP, pinned: jP };
    qs[4] = nk;
  } else nk = qs[4];
  return nk;
}
function Or(HP) {
  let ok = _(8),
    { pluginId: Dp, entry: Bp, verb: Ap, onShown: Op } = HP,
    { storageV5: Np } = useStorageV5Context(),
    ik;
  if (ok[0] !== Bp || ok[1] !== Dp || ok[2] !== Np)
    ((ik = g0e(Dp, Bp, Np).catch(kk)),
      (ok[0] = Bp),
      (ok[1] = Dp),
      (ok[2] = Np),
      (ok[3] = ik));
  else ik = ok[3];
  let Lp = ik,
    rk;
  if (ok[4] !== Lp || ok[5] !== Op || ok[6] !== Ap)
    ((rk = e(Dn, {
      fallback: null,
      children: e(Zs, { consentPromise: Lp, verb: Ap, onShown: Op }),
    })),
      (ok[4] = Lp),
      (ok[5] = Op),
      (ok[6] = Ap),
      (ok[7] = rk));
  else rk = ok[7];
  return rk;
}
function Zs(KP) {
  let ak = _(7),
    { consentPromise: qP, verb: _p, onShown: zs } = KP,
    Qi = kn(qP),
    lk,
    sk;
  if (ak[0] !== Qi || ak[1] !== zs)
    ((lk = () => {
      zs(Qi);
    }),
      (sk = [zs, Qi]),
      (ak[0] = Qi),
      (ak[1] = zs),
      (ak[2] = lk),
      (ak[3] = sk));
  else ((lk = ak[2]), (sk = ak[3]));
  E(lk, sk);
  let ck;
  if (ak[4] !== Qi || ak[5] !== _p)
    ((ck = e(Js, { consent: Qi, verb: _p })),
      (ak[4] = Qi),
      (ak[5] = _p),
      (ak[6] = ck));
  else ck = ak[6];
  return ck;
}
function Nr(Fa) {
  let uk = _(11),
    { entry: On } = Fa,
    dk,
    Fp;
  if (
    uk[0] !== On.agents ||
    uk[1] !== On.commands ||
    uk[2] !== On.hooks ||
    uk[3] !== On.lspServers ||
    uk[4] !== On.mcpServers ||
    uk[5] !== On.skills ||
    uk[6] !== On.source
  ) {
    Fp = EARLY_RETURN_SENTINEL;
    bb0: {
      let zP = [
        ["Commands", co(On.commands)],
        ["Agents", co(On.agents)],
        ["Skills", co(On.skills)],
        ["Hooks", co(On.hooks)],
        ["MCP Servers", co(On.mcpServers)],
        ["LSP Servers", co(On.lspServers)],
      ];
      let pk = zP.filter(bk);
      if (pk.length === 0) {
        const Up =
          typeof On.source === "object"
            ? "\xB7 Component summary not available for remote plugin"
            : "\xB7 Components will be discovered at installation";
        let mk;
        if (uk[9] !== Up)
          ((mk = e(Text, { dimColor: !0, children: Up })),
            (uk[9] = Up),
            (uk[10] = mk));
        else mk = uk[10];
        Fp = mk;
        break bb0;
      }
      dk = e(N, { children: pk.map(xk) });
    }
    ((uk[0] = On.agents),
      (uk[1] = On.commands),
      (uk[2] = On.hooks),
      (uk[3] = On.lspServers),
      (uk[4] = On.mcpServers),
      (uk[5] = On.skills),
      (uk[6] = On.source),
      (uk[7] = dk),
      (uk[8] = Fp));
  } else ((dk = uk[7]), (Fp = uk[8]));
  if (Fp !== EARLY_RETURN_SENTINEL) return Fp;
  return dk;
}
function co(a) {
  if (typeof a === "string") return [a];
  if (Array.isArray(a))
    return a.flatMap((k) =>
      typeof k === "string"
        ? [k]
        : k && typeof k === "object"
          ? Object.keys(k)
          : [],
    );
  if (a && typeof a === "object") return Object.keys(a);
  return [];
}
var Yi = (a) => a.error;
class ja {
  #n = Le();
  #e;
  constructor(a) {
    this.#e = { viewState: a, result: null, error: null };
  }
  subscribe = (a) => this.#n.subscribe(a);
  getSnapshot = () => this.#e;
  get viewState() {
    return this.#e.viewState;
  }
  get result() {
    return this.#e.result;
  }
  get error() {
    return this.#e.error;
  }
  setViewState = (a) => {
    this.#t({ viewState: a });
  };
  setResult = (a) => {
    this.#t({ result: a });
  };
  setError = (a) => {
    this.#t({ error: a });
  };
  #t(a) {
    let k = this.#e,
      v = { ...k, ...a };
    if (
      Object.is(v.viewState, k.viewState) &&
      v.result === k.result &&
      v.error === k.error
    )
      return;
    ((this.#e = v), this.#n.emit());
  }
}
F();
async function Kp({
  selectedForInstall: a,
  availablePlugins: k,
  setInstallingPlugins: v,
  setSelectedForInstall: b,
  setResult: w,
  setError: R,
  setParentViewState: A,
  onInstallComplete: Q,
  storageV5: I,
}) {
  if (a.size === 0) return;
  let j = k.filter((we) => a.has(we.pluginId));
  v(new Set(j.map((we) => we.pluginId)));
  let q = 0,
    X = 0,
    B = [],
    K = [],
    se = [],
    fe = [];
  for (let we of j) {
    if (
      typeof we.entry.source === "object" &&
      we.entry.source.source === "command"
    ) {
      (X++,
        B.push({
          name: we.entry.name,
          reason:
            "installed by running a command on this machine \u2014 open its details (Enter) to review the command and install it from there",
        }));
      continue;
    }
    let tt = await installPluginFromMarketplace({
      pluginId: we.pluginId,
      entry: we.entry,
      marketplaceName: we.marketplaceName,
      scope: "user",
      trigger: "bulk",
      storageV5: I,
    });
    if (tt.success) {
      if ((q++, fe.push(we.pluginId), tt.installedDisabled))
        (tt.installedDisabledByDefault ? K : se).push(we.entry.name);
    } else (X++, B.push({ name: we.entry.name, reason: tt.error }));
  }
  refreshPluginState(I);
  let Fe = q > 0 && Q ? await Q(fe) : "reload-required";
  (v(new Set()), b(new Set()));
  let ze =
      (K.length > 0
        ? ` Disabled by default \u2014 enable in /plugin: ${K.join(", ")}.`
        : "") +
      (se.length > 0 ? ` Disabled in your settings: ${se.join(", ")}.` : ""),
    xe = q - K.length - se.length;
  if (X === 0) {
    let we =
      Fe === "load-failed"
        ? " Some plugins couldn't be loaded \u2014 see /plugin for details."
        : xe === 0
          ? ""
          : Fe === "activated"
            ? ` ${xe === 1 ? "Plugin is" : "Plugins are"} now active.`
            : " Run /reload-plugins to activate.";
    w(`\u2713 Installed ${q} ${pluralize(q, "plugin")}.${we}${ze}`);
  } else if (q === 0) R(`Failed to install: ${formatPluginInstallFailures(B, !0)}`);
  else {
    let we =
      Fe === "load-failed"
        ? " Some installed plugins couldn't be loaded \u2014 see /plugin for details."
        : xe === 0
          ? ""
          : Fe === "activated"
            ? xe === 1
              ? " The successfully installed plugin is now active."
              : " Successfully installed plugins are now active."
            : " Run /reload-plugins to activate successfully installed plugins.";
    w(
      `\u2713 Installed ${q} of ${q + X} plugins. Failed: ${formatPluginInstallFailures(B, !1)}.${we}${ze}`,
    );
  }
  A({ type: "menu" });
}
async function zp({
  plugin: a,
  scope: k = "user",
  setIsInstalling: v,
  setInstallError: b,
  setViewState: w,
  setResult: R,
  setParentViewState: A,
  onInstallComplete: Q,
  consentedEntryHelper: I,
  storageV5: j,
}) {
  (v(!0), b(null));
  let q = await installPluginFromMarketplace({
    pluginId: a.pluginId,
    entry: a.entry,
    marketplaceName: a.marketplaceName,
    scope: k,
    trigger: "user",
    consentedEntryHelper: I,
    commandSourceConsent:
      typeof a.entry.source === "object" && a.entry.source.source === "command"
        ? { kind: "shown", command: vC(a.entry.source), pluginId: a.pluginId }
        : void 0,
    storageV5: j,
  });
  if (q.success) {
    let X = await ns(a.pluginId, j);
    if (X) {
      (v(!1),
        w({
          type: "plugin-options",
          plugin: X,
          pluginId: a.pluginId,
          depNote: q.depNote,
          installedDisabled: q.installedDisabled,
          installedDisabledByDefault: q.installedDisabledByDefault,
        }));
      return;
    }
    let B = Q ? await Q([a.pluginId]) : "reload-required";
    (R(
      q.installedDisabled
        ? B === "load-failed"
          ? `${q.message}. The plugin couldn't be loaded \u2014 see /plugin for details.`
          : q.message
        : B === "activated"
          ? `${q.message} Plugin is now active.`
          : B === "load-failed"
            ? `${q.message} The plugin couldn't be loaded \u2014 see /plugin for details.`
            : `${q.message} Run /reload-plugins to activate.`,
    ),
      A({ type: "menu" }));
  } else (v(!1), b(q.error));
}
F();
var Sk = 5;
function Ha({
  totalItems: a,
  maxVisible: k = Sk,
  selectedIndex: v = 0,
  firstSelectableIndex: b = 0,
}) {
  let w = a > k,
    R = C(0),
    A = V(() => {
      if (!w) return 0;
      let B = R.current;
      if (v < B) {
        let fe = v <= b ? 0 : v;
        return ((R.current = fe), fe);
      }
      if (v >= B + k) {
        let fe = v - k + 1;
        return ((R.current = fe), fe);
      }
      let K = Math.max(0, a - k),
        se = Math.min(B, K);
      return ((R.current = se), se);
    }, [v, k, w, a, b]),
    Q = A,
    I = Math.min(A + k, a),
    j = re(
      (B) => {
        if (!w) return B;
        return B.slice(Q, I);
      },
      [w, Q, I],
    ),
    q = re((B) => Q + B, [Q]),
    X = re(
      (B, K) => {
        let se = Math.max(0, Math.min(B, a - 1));
        K(se);
      },
      [a],
    );
  return {
    startIndex: Q,
    endIndex: I,
    needsPagination: w,
    getVisibleItems: j,
    toActualIndex: q,
    handleSelectionChange: X,
    scrollPosition: {
      current: v + 1,
      total: a,
      canScrollUp: A > 0,
      canScrollDown: A + k < a,
    },
  };
}
function Ka({
  screen: a,
  initialViewState: k,
  availablePlugins: v,
  loading: b,
  searchMarketplaceName: w,
  onInstallComplete: R,
  onSearchModeChange: A,
}) {
  let { storageV5: Q } = useStorageV5Context(),
    [I, j] = d(k),
    [q, X] = d(null),
    B = re((it) => {
      (X(it), j("plugin-details"));
    }, []),
    K = re(() => {
      (j("plugin-list"), X(null));
    }, []),
    se = I === "plugin-list",
    fe = se && !b,
    Fe = I === "plugin-details" && !!q && !b,
    ze = useStoreSelector(a, Yi),
    [xe, we] = d(!1),
    tt = () => we(!1),
    {
      query: pt,
      setQuery: xt,
      cursorOffset: Je,
      setCursorOffset: ae,
      handleKeyDown: Re,
      handlePaste: Mt,
    } = useVimModeInput({ isActive: se && xe && !b, onExit: tt, onExitUp: tt }),
    Lt = xe && pt !== "";
  (E(() => {
    A(Lt);
  }, [Lt, A]),
    E(() => () => A(!1), [A]));
  let We = useTerminalFocus(),
    { columns: nt } = useTerminalSize(),
    at = V(() => {
      if (!pt) return v;
      let it = pt.toLowerCase();
      return v.filter(
        (Ve) =>
          Ve.entry.name.toLowerCase().includes(it) ||
          Ve.entry.displayName?.toLowerCase().includes(it) ||
          Ve.entry.description?.toLowerCase().includes(it) ||
          (w && Ve.marketplaceName.toLowerCase().includes(it)),
      );
    }, [v, pt, w]),
    [Be, Ct] = d(0),
    [pe, tn] = d(new Set()),
    [Rt, sn] = d(new Set()),
    St = Ha({ totalItems: at.length, selectedIndex: Be });
  E(() => {
    Ct(0);
  }, [pt]);
  let [Wt, Ut] = d(!1),
    [zn, yt] = d(null),
    Yn = () =>
      Kp({
        selectedForInstall: pe,
        availablePlugins: v,
        setInstallingPlugins: sn,
        setSelectedForInstall: tn,
        setResult: a.setResult,
        setError: a.setError,
        setParentViewState: a.setViewState,
        onInstallComplete: R,
        storageV5: Q,
      }),
    fn = Fr(q),
    yn = (it, Ve = "user") =>
      zp({
        plugin: it,
        scope: Ve,
        consentedEntryHelper: fn.pinned(),
        setIsInstalling: Ut,
        setInstallError: yt,
        setViewState: j,
        setResult: a.setResult,
        setParentViewState: a.setViewState,
        onInstallComplete: R,
        storageV5: Q,
      });
  E(() => {
    if (ze) a.setResult(ze);
  }, [ze, a]);
  function Xn(it) {
    if (xe) {
      Re(it);
      return;
    }
    if (it.ctrl || it.meta || b) return;
    if (it.key === "/") (it.preventDefault(), we(!0), xt(""));
    else if (it.key.length === 1 && it.key !== " ")
      (it.preventDefault(), we(!0), xt(it.key));
  }
  function un(it) {
    if (xe) {
      Mt(it);
      return;
    }
    if (b) return;
    let Ve = (it.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (!Ve) return;
    (it.preventDefault(), we(!0), xt(Ve));
  }
  (useKeybindings(
    {
      "select:previous": () => {
        if (Be === 0) {
          if (!b && v.length > 0) we(!0);
        } else St.handleSelectionChange(Be - 1, Ct);
      },
      "select:next": () => {
        if (Be < at.length - 1) St.handleSelectionChange(Be + 1, Ct);
      },
      "select:accept": () => {
        if (Be < at.length) {
          let it = at[Be];
          if (it)
            if (it.isInstalled)
              a.setViewState({
                type: "manage-plugins",
                targetPlugin: it.entry.name,
                targetMarketplace: it.marketplaceName,
              });
            else (B(it), yt(null));
        }
      },
    },
    { context: "Select", isActive: fe && !xe },
  ),
    useKeybindings(
      {
        "plugin:toggle": () => {
          if (Be < at.length) {
            let it = at[Be];
            if (it && !it.isInstalled) {
              let Ve = new Set(pe);
              if (Ve.has(it.pluginId)) Ve.delete(it.pluginId);
              else Ve.add(it.pluginId);
              tn(Ve);
            }
          }
        },
        "plugin:install": () => {
          if (pe.size === 0) return !1;
          if (Rt.size > 0) return;
          Yn();
        },
      },
      { context: "Plugin", isActive: fe && !xe },
    ));
  let { detailsMenuOptions: Gt, detailsMenuIndex: Cn } = ec({
    selectedPlugin: q,
    isActive: Fe && !Wt,
    onInstall: yn,
    onBack: K,
  });
  return {
    viewState: I,
    setViewState: j,
    selectedPlugin: q,
    openDetails: B,
    closeDetails: K,
    recordEntryHelperShown: fn.record,
    isSearchMode: xe,
    setIsSearchMode: we,
    searchQuery: pt,
    setSearchQuery: xt,
    searchBoxProps: {
      query: pt,
      isFocused: xe,
      isTerminalFocused: We,
      width: nt - 4,
      cursorOffset: Je,
      onCursorOffsetChange: ae,
      onFocus: () => we(!0),
    },
    keyHintProps: {
      hasSelection: pe.size > 0,
      canToggle: Be < at.length && !at[Be]?.isInstalled,
      canView: Be < at.length,
    },
    filteredPlugins: at,
    selectedIndex: Be,
    setSelectedIndex: Ct,
    selectedForInstall: pe,
    setSelectedForInstall: tn,
    installingPlugins: Rt,
    pagination: St,
    detailsMenuIndex: Cn,
    isInstalling: Wt,
    installError: zn,
    detailsMenuOptions: Gt,
    handleListKeyDown: Xn,
    handleListPaste: un,
  };
}
function Rk() {}
function cc({
  screen: a,
  onInstallComplete: k,
  onSearchModeChange: v,
  targetMarketplace: b,
  targetPlugin: w,
}) {
  let { storageV5: R, credentials: A } = useStorageV5Context(),
    Q = useStoreSelector(a, Yi),
    { setError: I, setResult: j } = a,
    q = a.setViewState,
    [X, B] = d(null),
    [K, se] = d([]),
    [fe, Fe] = d([]),
    [ze, xe] = d(!0),
    [we, tt] = d("Loading\u2026"),
    [pt, xt] = d(null),
    {
      viewState: Je,
      setViewState: ae,
      selectedPlugin: Re,
      openDetails: Mt,
      closeDetails: Lt,
      recordEntryHelperShown: We,
      isSearchMode: nt,
      setIsSearchMode: at,
      searchQuery: Be,
      setSearchQuery: Ct,
      searchBoxProps: pe,
      keyHintProps: tn,
      filteredPlugins: Rt,
      selectedIndex: sn,
      setSelectedIndex: St,
      selectedForInstall: Wt,
      setSelectedForInstall: Ut,
      installingPlugins: zn,
      pagination: yt,
      detailsMenuIndex: Yn,
      isInstalling: fn,
      installError: yn,
      detailsMenuOptions: Xn,
      handleListKeyDown: un,
      handleListPaste: Gt,
    } = Ka({
      screen: a,
      initialViewState: "marketplace-list",
      availablePlugins: fe,
      loading: ze,
      searchMarketplaceName: !1,
      onInstallComplete: k,
      onSearchModeChange: v,
    }),
    [Cn, it] = d(null),
    [Ve, ne] = d(null),
    Ce = re(() => {
      if (Je === "plugin-list")
        if (b) q({ type: "manage-marketplaces", targetMarketplace: b });
        else if (K.length === 1) q({ type: "menu" });
        else (ae("marketplace-list"), B(null), Ut(new Set()), St(0));
      else if (Je === "plugin-details") Lt();
      else q({ type: "menu" });
    }, [Je, ae, Lt, b, q, K.length, Ut, St]);
  (useKeybinding("confirm:no", Ce, {
    context: "Settings",
    isActive: typeof Je === "string" && !(Je === "plugin-list" && nt),
  }),
    E(() => {
      let ie = !1;
      async function kt() {
        try {
          let $t = await getKnownMarketplaces(R),
            Dt;
          if (b && w && !isNonMarketplacePluginSource(b)) {
            tt(`Checking ${b} for new plugins\u2026`);
            let me = await d0e(b, $t[b], R);
            if ((dle(me.outcome), ie)) return;
            if ((tt("Loading\u2026"), me.outcome === "refresh-failed"))
              ((Dt = me.errorMessage),
                ne(
                  `Couldn't refresh marketplace "${b}" (${me.errorMessage}) \u2014 showing the cached catalog.`,
                ));
          }
          let { marketplaces: _t, failures: Ot } = await loadMarketplaces($t, R);
          if (ie) return;
          let bt = [];
          for (let { name: me, config: Ge, data: wt } of _t)
            if (wt) {
              let st = countMatching(wt.plugins, (Bt) => isPluginInstalledInCurrentScope(formatPluginId(Bt.name, me)));
              bt.push({
                name: me,
                totalPlugins: wt.plugins.length,
                installedCount: st,
                source: getMarketplaceSourceLabel(Ge.source),
              });
            }
          (bt.sort((me, Ge) => {
            if (me.name === "claude-plugin-directory") return -1;
            if (Ge.name === "claude-plugin-directory") return 1;
            return 0;
          }),
            se(bt));
          let te = countMatching(_t, (me) => me.data !== null),
            Ee = buildMarketplaceFailureNotice(Ot, te);
          if (Ee)
            if (Ee.type === "warning")
              it(Ee.message + ". Showing available marketplaces.");
            else throw Error(Ee.message);
          if (bt.length === 1 && !b && !w) {
            let me = bt[0];
            if (me) (B(me.name), ae("plugin-list"));
          }
          if (b && !bt.some((me) => me.name === b)) {
            let me = Ot.find((Ge) => Ge.name === b);
            I(
              me
                ? `Couldn't load marketplace "${formatShortText(b)}": ${me.error}`
                : `Marketplace "${formatShortText(b)}" not found`,
            );
          } else if (w) {
            let me = null;
            for (let { name: Ge, data: wt } of _t) {
              if (b && Ge !== b) continue;
              let st = wt?.plugins.find((xn) => xn.name === w);
              if (!st) continue;
              let Bt = formatPluginId(st.name, Ge);
              me = {
                entry: st,
                marketplaceName: Ge,
                pluginId: Bt,
                isInstalled: isPluginInstalledForUser(Bt),
              };
              break;
            }
            if (ie) return;
            if (me) {
              let Ge = me.pluginId;
              if (isPluginInstalledForUser(Ge)) {
                let st = await buildMissingDependencyNotice(Ge, R),
                  Bt = await $a(Ge, st, R, A);
                if (ie) return;
                if (Bt) ae(Bt);
                else if (st === null)
                  I(
                    `Plugin '${Ge}' is already installed globally. Use '/plugin' to manage existing plugins.`,
                  );
                else if (st.changed) {
                  let xn = await k([Ge]);
                  if (ie) return;
                  j(
                    `Plugin "${Ge}" is already installed${st.suffix}${xn === "load-failed" ? ". The plugin couldn't be loaded \u2014 see /plugin for details." : ""}`,
                  );
                } else j(`Plugin "${Ge}" is already installed${st.suffix}`);
              } else (B(me.marketplaceName), Mt(me));
            } else {
              let Ge = b ? `marketplace "${b}"` : "any marketplace",
                wt = Dt
                  ? `. The marketplace couldn't be refreshed (${Dt}), so its cached catalog may be out of date`
                  : "";
              I(`Plugin "${w}" not found in ${Ge}${wt}`);
            }
          } else if (b) (B(b), ae("plugin-list"));
        } catch ($t) {
          if (ie) return;
          I($t instanceof Error ? $t.message : "Failed to load marketplaces");
        } finally {
          if (!ie) xe(!1);
        }
      }
      return (
        kt(),
        () => {
          ie = !0;
        }
      );
    }, [I, j, ae, Mt, k, b, w, R, A]));
  let ke = C(0);
  if (
    (E(() => {
      if (!X) return;
      let ie = !1,
        kt = ++ke.current;
      async function $t(Dt) {
        (xe(!0), tt("Loading\u2026"));
        try {
          let _t = await loadMarketplace(Dt, R);
          if (ie) return;
          if (!_t) throw Error(`Failed to load marketplace: ${Dt}`);
          let Ot = [];
          for (let bt of _t.plugins) {
            let te = formatPluginId(bt.name, Dt);
            if (isPluginBlockedByPolicy(te)) continue;
            Ot.push({
              entry: bt,
              marketplaceName: Dt,
              pluginId: te,
              isInstalled: isPluginInstalledForUser(te),
            });
          }
          try {
            let bt = await c0e(R);
            if (ie) return;
            if ((xt(bt), bt))
              Ot.sort((te, Ee) => {
                let me = bt.get(te.pluginId) ?? 0,
                  Ge = bt.get(Ee.pluginId) ?? 0;
                if (me !== Ge) return Ge - me;
                return te.entry.name.localeCompare(Ee.entry.name);
              });
            else
              Ot.sort((te, Ee) => te.entry.name.localeCompare(Ee.entry.name));
          } catch (bt) {
            if (ie) return;
            (logForDebugging(`Failed to fetch install counts: ${l(bt)}`),
              Ot.sort((te, Ee) => te.entry.name.localeCompare(Ee.entry.name)));
          }
          (Fe(Ot), St(0), Ut(new Set()), at(!1), Ct(""));
        } catch (_t) {
          if (ie) return;
          I(_t instanceof Error ? _t.message : "Failed to load plugins");
        } finally {
          if (ke.current === kt) xe(!1);
        }
      }
      return (
        $t(X),
        () => {
          ie = !0;
        }
      );
    }, [X, I, Ct, St, Ut, at, R]),
    useKeybindings(
      {
        "select:previous": () => {
          if (sn > 0) St(sn - 1);
        },
        "select:next": () => {
          if (sn < K.length - 1) St(sn + 1);
        },
        "select:accept": () => {
          let ie = K[sn];
          if (ie) (B(ie.name), ae("plugin-list"));
        },
      },
      { context: "Select", isActive: Je === "marketplace-list" && !ze },
    ),
    typeof Je === "object" && Je.type === "plugin-options")
  )
    return e(Mr, {
      viewState: Je,
      onInstallComplete: k,
      onFinish: (ie) => {
        (j(ie), q({ type: "menu" }));
      },
    });
  if (ze) return e(SpinnerMessageLine, { message: we });
  if (Q) return e(ErrorMessage, { error: Q });
  if (Je === "marketplace-list") {
    if (K.length === 0)
      return r(Box, {
        flexDirection: "column",
        children: [
          e(Box, {
            marginBottom: 1,
            children: e(Text, { bold: !0, children: "Select marketplace" }),
          }),
          e(Text, { children: "No marketplaces configured." }),
          r(Text, {
            dimColor: !0,
            children: [
              "Add a marketplace first using ",
              "'Add marketplace'",
              ".",
            ],
          }),
          e(Box, {
            marginTop: 1,
            paddingLeft: 1,
            children: e(Text, {
              dimColor: !0,
              children: e(ActionKeybindingHint, {
                action: "confirm:no",
                context: "Settings",
                fallback: "Esc",
                description: "go back",
              }),
            }),
          }),
        ],
      });
    return r(Box, {
      flexDirection: "column",
      children: [
        e(Box, {
          marginBottom: 1,
          children: e(Text, { bold: !0, children: "Select marketplace" }),
        }),
        Cn &&
          e(Box, {
            marginBottom: 1,
            flexDirection: "column",
            children: r(Text, {
              color: "warning",
              children: [e(StatusIndicator, { status: "warning", withSpace: !0 }), Cn],
            }),
          }),
        K.map((ie, kt) =>
          r(
            SelectableRow,
            {
              active: sn === kt,
              flexDirection: "column",
              marginBottom: kt < K.length - 1 ? 1 : 0,
              children: [
                e(Box, {
                  children: r(Text, {
                    color: sn === kt ? "suggestion" : void 0,
                    children: [
                      r(Text, {
                        "aria-hidden": !0,
                        children: [sn === kt ? figures.pointer : " ", " "],
                      }),
                      wr(ie.name),
                    ],
                  }),
                }),
                e(Box, {
                  marginLeft: 2,
                  children: e(Text, {
                    dimColor: !0,
                    children: r(DotSeparatedList, {
                      children: [
                        r(N, {
                          children: [
                            ie.totalPlugins,
                            " ",
                            pluralize(ie.totalPlugins, "plugin"),
                            " available",
                          ],
                        }),
                        ie.installedCount > 0 &&
                          `${ie.installedCount} already installed`,
                        ie.source && wr(ie.source),
                      ],
                    }),
                  }),
                }),
              ],
            },
            ie.name,
          ),
        ),
        e(Box, {
          marginTop: 1,
          children: e(Text, {
            dimColor: !0,
            italic: !0,
            children: r(DotSeparatedList, {
              children: [
                e(ActionKeybindingHint, {
                  action: "select:accept",
                  context: "Select",
                  fallback: "Enter",
                  description: "select",
                }),
                e(ActionKeybindingHint, {
                  action: "confirm:no",
                  context: "Settings",
                  fallback: "Esc",
                  description: "go back",
                }),
              ],
            }),
          }),
        }),
      ],
    });
  }
  if (Je === "plugin-details" && Re)
    return r(Box, {
      flexDirection: "column",
      children: [
        Ve &&
          e(Box, {
            marginBottom: 1,
            flexDirection: "column",
            children: r(Text, {
              color: "warning",
              children: [e(StatusIndicator, { status: "warning", withSpace: !0 }), Ve],
            }),
          }),
        e(Lr, {
          onEntryHelperShown: We,
          title: "Plugin Details",
          plugin: Re,
          extraSection: e(Jp, { pluginId: Re.pluginId }),
          installError: yn,
          menuOptions: Xn,
          detailsMenuIndex: Yn,
          isInstalling: fn,
          bylinePaddingLeft: 1,
        }),
      ],
    });
  if (fe.length === 0)
    return r(Box, {
      flexDirection: "column",
      children: [
        e(Box, {
          marginBottom: 1,
          children: e(Text, { bold: !0, children: "Install plugins" }),
        }),
        e(EmptyStateMessage, {
          hint: "All plugins from this marketplace are already installed.",
          children: "No new plugins available to install.",
        }),
        e(Box, {
          marginLeft: 3,
          children: e(Text, {
            dimColor: !0,
            italic: !0,
            children: e(ActionKeybindingHint, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "go back",
            }),
          }),
        }),
      ],
    });
  let Oe = yt.getVisibleItems(Rt);
  return r(Box, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: un,
    onPaste: Gt,
    children: [
      r(Box, {
        children: [
          e(Text, { bold: !0, children: "Install Plugins" }),
          yt.needsPagination &&
            r(Text, {
              dimColor: !0,
              children: [
                " ",
                "(",
                yt.scrollPosition.current,
                "/",
                yt.scrollPosition.total,
                ")",
              ],
            }),
        ],
      }),
      e(Box, { marginBottom: 1, children: e(SearchInput, { ...pe }) }),
      Rt.length === 0 &&
        Be &&
        e(Box, {
          marginBottom: 1,
          children: r(EmptyStateMessage, { children: ['No plugins match "', Be, '"'] }),
        }),
      yt.scrollPosition.canScrollUp &&
        e(Box, {
          children: r(Text, {
            dimColor: !0,
            children: [" ", figures.arrowUp, " more above"],
          }),
        }),
      Oe.map((ie, kt) => {
        let $t = yt.toActualIndex(kt),
          Dt = sn === $t,
          _t = Wt.has(ie.pluginId),
          Ot = zn.has(ie.pluginId),
          bt = kt === Oe.length - 1,
          te = pt?.get(ie.pluginId);
        return r(
          SelectableRow,
          {
            active: Dt && !nt,
            flexDirection: "column",
            marginBottom: bt && !Q ? 0 : 1,
            children: [
              r(Box, {
                children: [
                  r(Text, {
                    "aria-hidden": !0,
                    color: Dt && !nt ? "suggestion" : void 0,
                    children: [Dt && !nt ? figures.pointer : " ", " "],
                  }),
                  r(Text, {
                    color: ie.isInstalled ? "success" : void 0,
                    children: [
                      ie.isInstalled
                        ? figures.tick
                        : Ot
                          ? figures.ellipsis
                          : _t
                            ? figures.radioOn
                            : figures.radioOff,
                      " ",
                      getPluginDisplayName(ie.entry),
                      ie.entry.category &&
                        r(Text, {
                          dimColor: !0,
                          children: [" ", "[", wr(ie.entry.category), "]"],
                        }),
                      ie.entry.tags?.includes("community-managed") &&
                        e(Text, {
                          dimColor: !0,
                          children: " [Community Managed]",
                        }),
                      isNonInstallableClaudeAiPlugin(ie.entry) &&
                        e(Text, {
                          dimColor: !0,
                          children: " [not installable on claude.ai yet]",
                        }),
                      e(DimParenthetical, { when: ie.isInstalled, children: "installed" }),
                      te !== void 0 &&
                        X === ig &&
                        r(Text, {
                          dimColor: !0,
                          children: [" \xB7 ", nOt(te), " installs"],
                        }),
                    ],
                  }),
                ],
              }),
              ie.entry.description &&
                r(Box, {
                  marginLeft: 4,
                  children: [
                    e(Text, {
                      dimColor: !0,
                      children: truncateToWidth(wr(ie.entry.description), 60),
                    }),
                    ie.entry.version &&
                      r(Text, {
                        dimColor: !0,
                        children: [" ", "\xB7 v", wr(ie.entry.version)],
                      }),
                  ],
                }),
            ],
          },
          ie.pluginId,
        );
      }),
      yt.scrollPosition.canScrollDown &&
        e(Box, {
          children: r(Text, {
            dimColor: !0,
            children: [" ", figures.arrowDown, " more below"],
          }),
        }),
      Q &&
        e(Box, {
          marginTop: 1,
          children: r(Text, {
            color: "error",
            children: [e(StatusIndicator, { status: "error", withSpace: !0 }), Q],
          }),
        }),
      e(_r, { ...tn }),
    ],
  });
}
function Jp(lI) {
  let yi = _(22),
    { pluginId: tc } = lI,
    { storageV5: nc } = useStorageV5Context(),
    [Eo, vk] = d(null),
    wk,
    Ck;
  if (yi[0] !== tc || yi[1] !== nc)
    ((wk = () => {
      vk(null);
      let Pk = !1;
      return (
        den(tc, getCanonicalName(getMainLoopModel()), nc)
          .then((cI) => {
            if (!Pk) vk(cI);
          })
          .catch(Rk),
        () => {
          Pk = !0;
        }
      );
    }),
      (Ck = [tc, nc]),
      (yi[0] = tc),
      (yi[1] = nc),
      (yi[2] = wk),
      (yi[3] = Ck));
  else ((wk = yi[2]), (Ck = yi[3]));
  if ((E(wk, Ck), Eo === null)) {
    return null;
  }
  let Tk = Eo.alwaysOn >= uen,
    oc;
  if (yi[4] !== Eo.isEstimate)
    ((oc = Eo.isEstimate && e(Text, { dimColor: !0, children: " (estimated)" })),
      (yi[4] = Eo.isEstimate),
      (yi[5] = oc));
  else oc = yi[5];
  let ic;
  if (yi[6] !== oc)
    ((ic = r(Text, { bold: !0, children: ["Context cost", oc, ":"] })),
      (yi[6] = oc),
      (yi[7] = ic));
  else ic = yi[7];
  const Wp = Tk ? "warning" : void 0,
    Gp = !Tk;
  let rc;
  if (yi[8] !== Eo.alwaysOn)
    ((rc = formatTokenEstimate(Eo.alwaysOn)), (yi[8] = Eo.alwaysOn), (yi[9] = rc));
  else rc = yi[9];
  let ac;
  if (yi[10] !== Wp || yi[11] !== Gp || yi[12] !== rc)
    ((ac = r(Text, {
      color: Wp,
      dimColor: Gp,
      children: ["\xB7 Every turn: ", rc, " tokens"],
    })),
      (yi[10] = Wp),
      (yi[11] = Gp),
      (yi[12] = rc),
      (yi[13] = ac));
  else ac = yi[13];
  let lc;
  if (yi[14] !== Eo.onInvoke)
    ((lc = formatTokenEstimate(Eo.onInvoke)), (yi[14] = Eo.onInvoke), (yi[15] = lc));
  else lc = yi[15];
  let sc;
  if (yi[16] !== lc)
    ((sc = r(Text, {
      dimColor: !0,
      children: ["\xB7 When invoked: ", lc, " tokens"],
    })),
      (yi[16] = lc),
      (yi[17] = sc));
  else sc = yi[17];
  let Ik;
  if (yi[18] !== sc || yi[19] !== ic || yi[20] !== ac)
    ((Ik = r(Box, {
      flexDirection: "column",
      marginBottom: 1,
      children: [ic, ac, sc],
    })),
      (yi[18] = sc),
      (yi[19] = ic),
      (yi[20] = ac),
      (yi[21] = Ik));
  else Ik = yi[21];
  return Ik;
}
F();
var Ek = (a) => a.result;
function dc({
  screen: a,
  onInstallComplete: k,
  onSearchModeChange: v,
  getSessionContext: b,
  grantedSuggestions: w,
  targetPlugin: R,
}) {
  let { storageV5: A, credentials: Q } = useStorageV5Context(),
    I = useStoreSelector(a, Yi),
    j = useStoreSelector(a, Ek),
    { setError: q, setResult: X } = a,
    B = a.setViewState,
    [K, se] = d([]),
    [fe, Fe] = d(!0),
    [ze, xe] = d("Loading\u2026"),
    [we, tt] = d(null),
    [pt, xt] = d(new Map()),
    {
      viewState: Je,
      setViewState: ae,
      selectedPlugin: Re,
      openDetails: Mt,
      closeDetails: Lt,
      recordEntryHelperShown: We,
      isSearchMode: nt,
      searchQuery: at,
      searchBoxProps: Be,
      keyHintProps: Ct,
      filteredPlugins: pe,
      selectedIndex: tn,
      selectedForInstall: Rt,
      installingPlugins: sn,
      pagination: St,
      detailsMenuIndex: Wt,
      isInstalling: Ut,
      installError: zn,
      detailsMenuOptions: yt,
      handleListKeyDown: Yn,
      handleListPaste: fn,
    } = Ka({
      screen: a,
      initialViewState: "plugin-list",
      availablePlugins: K,
      loading: fe,
      searchMarketplaceName: !0,
      onInstallComplete: k,
      onSearchModeChange: v,
    }),
    [yn, Xn] = d(null),
    [un, Gt] = d(null);
  E(() => {
    let Ve = !1;
    async function ne() {
      try {
        let Ce = await getKnownMarketplaces(A),
          { marketplaces: ke, failures: Oe } = await loadMarketplaces(Ce, A);
        if (Ve) return;
        let ie = [];
        for (let { name: te, data: Ee } of ke)
          if (Ee)
            for (let me of Ee.plugins) {
              let Ge = formatPluginId(me.name, te);
              ie.push({
                entry: me,
                marketplaceName: te,
                pluginId: Ge,
                isInstalled: isPluginInstalledInCurrentScope(Ge),
              });
            }
        let kt = ie.filter((te) => !te.isInstalled && !isPluginBlockedByPolicy(te.pluginId));
        try {
          let te = await c0e(A);
          if (Ve) return;
          if ((tt(te), te))
            kt.sort((Ee, me) => {
              let Ge = te.get(Ee.pluginId) ?? 0,
                wt = te.get(me.pluginId) ?? 0;
              if (Ge !== wt) return wt - Ge;
              return Ee.entry.name.localeCompare(me.entry.name);
            });
          else kt.sort((Ee, me) => Ee.entry.name.localeCompare(me.entry.name));
        } catch (te) {
          (logForDebugging(`Failed to fetch install counts: ${l(te)}`),
            kt.sort((Ee, me) => Ee.entry.name.localeCompare(me.entry.name)));
        }
        let $t = new Map();
        try {
          let te = b?.(),
            Ee = new Set(getPluginSuggestionMarketplaces());
          for (let me of kt) {
            if (!Ee.has(me.marketplaceName)) continue;
            if (me.marketplaceName !== ig) {
              let st = Ce[me.marketplaceName]?.source;
              if (!st || !isMarketplaceSourceDeclaredByPolicy(me.marketplaceName, st)) continue;
            }
            let Ge = normalizePluginRelevanceSignals(me.entry.name, me.entry.relevance);
            if (!Ge) continue;
            if (getPluginSuggestionDiscoverShownCount(me.pluginId) > 0 && !w?.has(me.pluginId)) continue;
            let wt = await matchPluginRelevanceSignal(Ge, te);
            if (wt) $t.set(me.pluginId, wt);
          }
        } catch (te) {
          logForDebugging(`Failed to compute plugin suggestions: ${l(te)}`);
        }
        if (Ve) return;
        xt($t);
        let Dt =
          $t.size > 0
            ? [
                ...kt.filter((te) => $t.has(te.pluginId)),
                ...kt.filter((te) => !$t.has(te.pluginId)),
              ]
            : kt;
        se(Dt);
        let _t = Object.keys(Ce).length;
        if (kt.length === 0) {
          let te = await getMarketplaceUpdateOutcome({
            configuredMarketplaceCount: _t,
            failedMarketplaceCount: Oe.length,
          });
          if (Ve) return;
          if (
            te === "all-plugins-installed" &&
            ie.length > 0 &&
            ie.every((Ee) => Ee.isInstalled && !isPluginInstalledForUser(Ee.pluginId)) &&
            !ie.some((Ee) => isPluginBlockedByPolicy(Ee.pluginId))
          )
            te = "all-plugins-project-installed";
          Gt(te);
        }
        let Ot = countMatching(ke, (te) => te.data !== null),
          bt = buildMarketplaceFailureNotice(Oe, Ot);
        if (bt)
          if (bt.type === "warning")
            Xn(
              bt.message +
                (kt.length > 0 ? ". Showing available plugins." : "."),
            );
          else throw Error(bt.message);
        if (R) {
          let te = ie.find((st) => st.entry.name === R),
            Ee = !1,
            me = !1,
            Ge = !1,
            wt = !1;
          if (!te) {
            for (let [st, Bt] of Object.entries(Ce)) {
              xe(`Checking ${st} for new plugins\u2026`);
              let xn = await bUn(st, Bt, A);
              if (Ve) return;
              if (xn === "refresh-failed") me = !0;
              else if (xn === "refreshed") wt = !0;
              if (xn !== "refreshed") continue;
              try {
                let ci = (await loadMarketplace(st, A)).plugins.find((io) => io.name === R);
                if (ci) {
                  let io = formatPluginId(ci.name, st);
                  ((te = {
                    entry: ci,
                    marketplaceName: st,
                    pluginId: io,
                    isInstalled: isPluginInstalledInCurrentScope(io),
                  }),
                    (Ee = !0),
                    logFeatureOk("plugin_install_catalog_refresh"));
                  break;
                }
              } catch (si) {
                ((Ge = !0),
                  logForDebugging(
                    `Post-refresh reload of marketplace '${st}' failed: ${l(si)}`,
                    { level: "warn" },
                  ));
              }
              if (Ve) return;
            }
            if (!Ee)
              if (me) logFeatureBad("plugin_install_catalog_refresh", "refresh_failed");
              else if (Ge) logFeatureBad("plugin_install_catalog_refresh", "reload_failed");
              else if (wt)
                logFeatureSad("plugin_install_catalog_refresh", "not_found_after_refresh");
              else logFeatureSad("plugin_install_catalog_refresh", "ineligible");
          }
          if (Ve) return;
          if (Ee && te && !te.isInstalled && !isPluginBlockedByPolicy(te.pluginId)) {
            let st = te;
            se((Bt) =>
              Bt.some((xn) => xn.pluginId === st.pluginId) ? Bt : [...Bt, st],
            );
          }
          if (te)
            if (isPluginInstalledForUser(te.pluginId)) {
              let st = await buildMissingDependencyNotice(te.pluginId, A),
                Bt = await $a(te.pluginId, st, A, Q);
              if (Ve) return;
              if (Bt) ae(Bt);
              else if (st === null)
                q(
                  `Plugin '${te.pluginId}' is already installed. Use '/plugin' to manage existing plugins.`,
                );
              else if (st.changed) {
                let xn = await k?.([te.pluginId]);
                if (Ve) return;
                X(
                  `Plugin "${te.pluginId}" is already installed${st.suffix}${xn === "load-failed" ? ". The plugin couldn't be loaded \u2014 see /plugin for details." : ""}`,
                );
              } else
                X(`Plugin "${te.pluginId}" is already installed${st.suffix}`);
            } else Mt(te);
          else q(`Plugin "${R}" not found in any marketplace`);
        }
      } catch (Ce) {
        if (Ve) return;
        q(Ce instanceof Error ? Ce.message : "Failed to load plugins");
      } finally {
        if (!Ve) Fe(!1);
      }
    }
    return (
      ne(),
      () => {
        Ve = !0;
      }
    );
  }, [q, X, ae, Mt, k, b, w, R, A, Q]);
  let Cn = C(!1);
  if (
    (E(() => {
      if (
        Cn.current ||
        fe ||
        I !== null ||
        j !== null ||
        Je !== "plugin-list" ||
        pt.size === 0
      )
        return;
      Cn.current = !0;
      let Ve = [...pt.keys()];
      for (let ne of Ve) w?.add(ne);
      recordPluginSuggestionDiscoverShown(Ve, A);
    }, [fe, I, j, Je, pt, w, A]),
    useKeybinding("confirm:no", Lt, {
      context: "Settings",
      isActive: Je === "plugin-details",
    }),
    useKeybinding(
      "confirm:no",
      () => {
        B({ type: "menu" });
      },
      { context: "Settings", isActive: Je === "plugin-list" && !nt },
    ),
    typeof Je === "object" && Je.type === "plugin-options")
  )
    return e(Mr, {
      viewState: Je,
      onInstallComplete: k,
      onFinish: (Ve) => {
        (X(Ve), B({ type: "menu" }));
      },
    });
  if (fe) return e(SpinnerMessageLine, { message: ze });
  if (I) return e(ErrorMessage, { error: I });
  if (Je === "plugin-details" && Re)
    return e(Lr, {
      onEntryHelperShown: We,
      title: "Plugin details",
      plugin: Re,
      showMarketplace: !0,
      installError: zn,
      menuOptions: yt,
      detailsMenuIndex: Wt,
      isInstalling: Ut,
    });
  if (K.length === 0)
    return r(Box, {
      flexDirection: "column",
      children: [
        e(Box, {
          marginBottom: 1,
          children: e(Text, { bold: !0, children: "Discover plugins" }),
        }),
        yn &&
          e(Box, {
            marginBottom: 1,
            children: e(StatusLine, { status: "warning", children: yn }),
          }),
        e(Zp, { reason: un }),
        e(Box, {
          marginTop: 1,
          children: e(Text, {
            dimColor: !0,
            italic: !0,
            children: e(ActionKeybindingHint, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "go back",
            }),
          }),
        }),
      ],
    });
  let it = St.getVisibleItems(pe);
  return r(Box, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: Yn,
    onPaste: fn,
    children: [
      r(Box, {
        children: [
          e(Text, { bold: !0, children: "Discover plugins" }),
          St.needsPagination &&
            r(Text, {
              dimColor: !0,
              children: [
                " ",
                "(",
                St.scrollPosition.current,
                "/",
                St.scrollPosition.total,
                ")",
              ],
            }),
        ],
      }),
      e(Box, { marginBottom: 1, children: e(SearchInput, { ...Be }) }),
      yn &&
        e(Box, {
          marginBottom: 1,
          children: e(StatusLine, { status: "warning", children: yn }),
        }),
      pe.length === 0 &&
        at &&
        e(Box, {
          marginBottom: 1,
          children: r(EmptyStateMessage, { children: ['No plugins match "', at, '"'] }),
        }),
      St.scrollPosition.canScrollUp &&
        e(Box, {
          children: r(Text, {
            dimColor: !0,
            children: [" ", figures.arrowUp, " more above"],
          }),
        }),
      it.map((Ve, ne) => {
        let Ce = St.toActualIndex(ne),
          ke = tn === Ce,
          Oe = Rt.has(Ve.pluginId),
          ie = sn.has(Ve.pluginId),
          kt = we?.get(Ve.pluginId),
          $t = pt.get(Ve.pluginId),
          Dt = ne === it.length - 1;
        return r(
          SelectableRow,
          {
            active: ke && !nt,
            flexDirection: "column",
            marginBottom: Dt ? 0 : 1,
            children: [
              r(Box, {
                children: [
                  r(Text, {
                    "aria-hidden": !0,
                    color: ke && !nt ? "suggestion" : void 0,
                    children: [ke && !nt ? figures.pointer : " ", " "],
                  }),
                  r(Text, {
                    children: [
                      ie ? figures.ellipsis : Oe ? figures.radioOn : figures.radioOff,
                      " ",
                      getPluginDisplayName(Ve.entry),
                      r(Text, {
                        dimColor: !0,
                        children: [" ", "\xB7 ", wr(Ve.marketplaceName)],
                      }),
                      $t &&
                        r(Text, {
                          dimColor: !0,
                          children: [" ", "\xB7 ", Mk($t)],
                        }),
                      Ve.entry.tags?.includes("community-managed") &&
                        e(Text, {
                          dimColor: !0,
                          children: " [Community Managed]",
                        }),
                      isNonInstallableClaudeAiPlugin(Ve.entry) &&
                        e(Text, {
                          dimColor: !0,
                          children: " [not installable on claude.ai yet]",
                        }),
                      kt !== void 0 &&
                        Ve.marketplaceName === ig &&
                        r(Text, {
                          dimColor: !0,
                          children: [" \xB7 ", nOt(kt), " installs"],
                        }),
                    ],
                  }),
                ],
              }),
              Ve.entry.description &&
                e(Box, {
                  marginLeft: 4,
                  children: e(Text, {
                    dimColor: !0,
                    children: truncateToWidth(wr(Ve.entry.description), 60),
                  }),
                }),
            ],
          },
          `${St.startIndex}-${Ve.pluginId}`,
        );
      }),
      St.scrollPosition.canScrollDown &&
        e(Box, {
          children: r(Text, {
            dimColor: !0,
            children: [" ", figures.arrowDown, " more below"],
          }),
        }),
      e(_r, { ...Ct }),
    ],
  });
}
function Zp(ZI) {
  let Ji = _(7),
    { reason: eR } = ZI;
  switch (eR) {
    case "git-not-installed": {
      let Nn;
      if (Ji[0] === MEMO_CACHE_SENTINEL)
        ((Nn = r(N, {
          children: [
            e(Text, {
              dimColor: !0,
              children: "Git is required to install marketplaces.",
            }),
            e(Text, {
              dimColor: !0,
              children: "Please install git and restart Claude Code.",
            }),
          ],
        })),
          (Ji[0] = Nn));
      else Nn = Ji[0];
      return Nn;
    }
    case "all-blocked-by-policy": {
      let Nn;
      if (Ji[1] === MEMO_CACHE_SENTINEL)
        ((Nn = r(N, {
          children: [
            e(Text, {
              dimColor: !0,
              children:
                "Your organization policy does not allow any external marketplaces.",
            }),
            e(Text, { dimColor: !0, children: "Contact your administrator." }),
          ],
        })),
          (Ji[1] = Nn));
      else Nn = Ji[1];
      return Nn;
    }
    case "policy-restricts-sources": {
      let Nn;
      if (Ji[2] === MEMO_CACHE_SENTINEL)
        ((Nn = r(N, {
          children: [
            e(Text, {
              dimColor: !0,
              children:
                "Your organization restricts which marketplaces can be added.",
            }),
            e(Text, {
              dimColor: !0,
              children:
                "Switch to the Marketplaces tab to view allowed sources.",
            }),
          ],
        })),
          (Ji[2] = Nn));
      else Nn = Ji[2];
      return Nn;
    }
    case "all-marketplaces-failed": {
      let Nn;
      if (Ji[3] === MEMO_CACHE_SENTINEL)
        ((Nn = r(N, {
          children: [
            e(Text, {
              dimColor: !0,
              children: "Failed to load marketplace data.",
            }),
            e(Text, { dimColor: !0, children: "Check your network connection." }),
          ],
        })),
          (Ji[3] = Nn));
      else Nn = Ji[3];
      return Nn;
    }
    case "all-plugins-installed": {
      let Nn;
      if (Ji[4] === MEMO_CACHE_SENTINEL)
        ((Nn = r(N, {
          children: [
            e(Text, {
              dimColor: !0,
              children: "All available plugins are already installed.",
            }),
            e(Text, {
              dimColor: !0,
              children: "Check for new plugins later or add more marketplaces.",
            }),
          ],
        })),
          (Ji[4] = Nn));
      else Nn = Ji[4];
      return Nn;
    }
    case "all-plugins-project-installed": {
      let Nn;
      if (Ji[5] === MEMO_CACHE_SENTINEL)
        ((Nn = r(N, {
          children: [
            e(Text, {
              dimColor: !0,
              children: "All available plugins are installed for this project.",
            }),
            e(Text, {
              dimColor: !0,
              children: "Use the Browse tab to install at user scope.",
            }),
          ],
        })),
          (Ji[5] = Nn));
      else Nn = Ji[5];
      return Nn;
    }
    case "no-marketplaces-configured":
    default: {
      let Nn;
      if (Ji[6] === MEMO_CACHE_SENTINEL)
        ((Nn = e(EmptyStateMessage, {
          hint: "Add a marketplace first using the Marketplaces tab.",
          children: "No plugins available.",
        })),
          (Ji[6] = Nn));
      else Nn = Ji[6];
      return Nn;
    }
  }
}
var uc = 32;
function Mk(a) {
  switch (a.signal) {
    case "cwd":
      return "suggested for this directory";
    case "cli":
      return `suggested for ${truncateToWidth(a.command, uc)} commands`;
    case "hosts":
      return `suggested for ${truncateToWidth(a.host, uc)}`;
    case "filesRead":
      return `suggested for ${Xp(a.file)}`;
    case "manifestDep":
      return `suggested from ${Xp(a.file)}`;
  }
}
function Xp(a) {
  return truncatePathMiddle(formatPathForDisplay(a).replaceAll("\\", "/"), uc);
}
F();
import { readdir, readFile as em } from "fs/promises";
import { homedir } from "os";
import * as Wo from "path";
var pc = 5,
  Bk = createLazyValue(() => c({ query: s().min(1), should_trigger: O() })),
  mc = async () => null;
async function Ak(a) {
  let k = [],
    v = [],
    b;
  try {
    b = await readdir(a);
  } catch (w) {
    if (W(w))
      return {
        queries: [],
        warnings: [
          `No evals/ folder found at ${a}. Create one with at least ${pc} <name>.md files (frontmatter: query, should_trigger).`,
        ],
      };
    throw w;
  }
  for (let w of b.filter((R) => R.endsWith(".md")).sort()) {
    let R = Wo.join(a, w),
      A;
    try {
      A = await em(R, "utf8");
    } catch (X) {
      v.push(`Could not read ${w}: ${l(X)}`);
      continue;
    }
    A = stripBom(A);
    let Q = A.match(FRONTMATTER_PATTERN);
    if (!Q) {
      v.push(
        `${w}: missing YAML frontmatter (expected ---\\nquery: \u2026\\nshould_trigger: \u2026\\n---).`,
      );
      continue;
    }
    let I;
    try {
      I = parseYaml(Q[1] ?? "");
    } catch (X) {
      v.push(`${w}: invalid YAML \u2014 ${l(X)}`);
      continue;
    }
    let j = Bk().safeParse(I);
    if (!j.success) {
      let X = j.error.issues
        .map((B) => `${B.path.join(".")}: ${B.message}`)
        .join("; ");
      v.push(`${w}: ${X}`);
      continue;
    }
    let q = A.slice(Q[0].length).trim();
    k.push({
      file: w,
      query: j.data.query,
      shouldTrigger: j.data.should_trigger,
      ...(q && { notes: q }),
    });
  }
  if (k.length > 0 && k.length < pc)
    v.push(
      `Only ${k.length} eval ${k.length === 1 ? "query" : "queries"} found; the spec recommends at least ${pc} for meaningful coverage.`,
    );
  return { queries: k, warnings: v };
}
async function Ok(a) {
  try {
    let k = await em(Wo.join(a, "SKILL.md"), "utf8"),
      v = stripBom(k).match(FRONTMATTER_PATTERN);
    if (!v) return "";
    let b = parseYaml(v[1] ?? "");
    if (
      b &&
      typeof b === "object" &&
      "description" in b &&
      typeof b.description === "string"
    )
      return b.description;
  } catch {}
  return "";
}
async function gc(a, k, v) {
  let b = a === "~" || a.startsWith("~/") ? Wo.join(homedir(), a.slice(1)) : a,
    w = Wo.resolve(b),
    R = Wo.basename(w),
    A = await Ok(w),
    Q = Wo.join(w, "evals"),
    { queries: I, warnings: j } = await Ak(Q),
    q = [];
  for (let X of I) {
    if (k.aborted) break;
    try {
      let B = await v({ skillName: R, description: A, query: X, signal: k });
      if (B === null) {
        q.push({
          query: X,
          modelWouldTrigger: null,
          reason:
            "Model evaluation not yet wired up \u2014 tracks the plugin evaluation framework.",
          verdict: "skipped",
        });
        continue;
      }
      q.push({
        query: X,
        modelWouldTrigger: B.wouldTrigger,
        reason: B.reason,
        verdict: B.wouldTrigger === X.shouldTrigger ? "pass" : "fail",
      });
    } catch (B) {
      (logForDebugging(`plugin eval: trigger test for ${X.file} threw: ${l(B)}`, {
        level: "error",
      }),
        q.push({
          query: X,
          modelWouldTrigger: null,
          reason: l(B),
          verdict: "fail",
        }));
    }
  }
  return {
    pluginName: R,
    pluginPath: w,
    evalsPath: Q,
    queries: I,
    warnings: j,
    triggerResults: q,
    passCount: countMatching(q, (X) => X.verdict === "pass"),
    failCount: countMatching(q, (X) => X.verdict === "fail"),
    skippedCount: countMatching(q, (X) => X.verdict === "skipped"),
  };
}
function fc(a) {
  let k = [];
  (k.push(`Evaluating ${a.pluginName} (${a.evalsPath})`), k.push(""));
  for (let v of a.warnings) k.push(`! ${v}`);
  if (a.warnings.length > 0) k.push("");
  if (a.queries.length === 0)
    return (
      k.push("No eval queries to run."),
      k.join(`
`)
    );
  k.push("Level 1 \u2014 trigger tests:");
  for (let v of a.triggerResults) {
    let b = v.verdict.toUpperCase().padEnd(7),
      w = v.query.shouldTrigger ? "trigger" : "skip";
    if (v.verdict === "skipped")
      k.push(`  [${b}] ${v.query.file} \u2014 expected ${w}`);
    else {
      let R = v.modelWouldTrigger ? "trigger" : "skip";
      if (
        (k.push(`  [${b}] ${v.query.file} \u2014 expected ${w}, got ${R}`),
        v.verdict === "fail")
      )
        k.push(`            ${v.reason}`);
    }
  }
  if ((k.push(""), a.skippedCount === a.triggerResults.length))
    k.push(
      "All trigger tests skipped \u2014 model evaluation not yet wired up.",
    );
  else
    k.push(
      `${a.passCount}/${a.passCount + a.failCount} trigger tests passed${a.skippedCount > 0 ? ` (${a.skippedCount} skipped)` : ""}.`,
    );
  return (
    k.push(""),
    k.push(
      "Level 2 \u2014 interplay tests: not yet implemented. Tracks the plugin evaluation framework.",
    ),
    k.join(`
`)
  );
}
function qa(vR) {
  let tm = _(6),
    { onComplete: Vr, target: jr } = vR,
    Nk;
  if (tm[0] === MEMO_CACHE_SENTINEL) ((Nk = new AbortController()), (tm[0] = Nk));
  else Nk = tm[0];
  let wR = C(Nk),
    Lk,
    _k;
  if (tm[1] !== Vr || tm[2] !== jr)
    ((Lk = () => {
      let Fk = wR.current;
      let nm = async function nm() {
        if (!jr) {
          Vr(`Usage: /plugin eval [path]

Run trigger evaluations for a skill against the queries in its evals/ folder.

Examples:
  /plugin eval ./my-skill
  /plugin eval ~/.claude/skills/pdf-tools

Each evals/*.md file needs frontmatter with \`query\` (string)
and \`should_trigger\` (boolean). The spec recommends at least five.

Or from the command line:
  claude plugin eval [path]`);
          return;
        }
        try {
          let Kr = await gc(jr, Fk.signal, mc);
          process.exitCode = Kr.failCount > 0 ? 1 : 0;
          let CR =
            Kr.queries.length === 0
              ? ""
              : Kr.failCount > 0
                ? `

${figures.cross} Evaluation failed`
                : Kr.skippedCount === Kr.queries.length
                  ? `

${figures.info} Eval queries validated; trigger tests pending model integration`
                  : `

${figures.tick} Evaluation passed`;
          Vr(fc(Kr) + CR);
        } catch (yc) {
          let Uk = yc;
          ((process.exitCode = 2),
            logForDebugging(`Plugin eval failed for ${jr}: ${l(Uk)}`, { level: "error" }),
            Vr(`${figures.cross} ${l(Uk)}`));
        }
      };
      return (nm(), () => Fk.abort());
    }),
      (_k = [Vr, jr]),
      (tm[1] = Vr),
      (tm[2] = jr),
      (tm[3] = Lk),
      (tm[4] = _k));
  else ((Lk = tm[3]), (_k = tm[4]));
  E(Lk, _k);
  let yc;
  if (tm[5] === MEMO_CACHE_SENTINEL)
    ((yc = e(Box, {
      flexDirection: "column",
      children: e(Text, { children: "Running evaluation\u2026" }),
    })),
      (tm[5] = yc));
  else yc = tm[5];
  return yc;
}
F();
import { basename } from "path";
function wc({
  setViewState: a,
  error: k,
  setError: v,
  setResult: b,
  exitState: w,
  onManageComplete: R,
  targetMarketplace: A,
  action: Q,
}) {
  let { storageV5: I, credentials: j } = useStorageV5Context(),
    [q, X] = d([]),
    [B, K] = d({ available: [], hosted: [], browseOnly: [] }),
    [se, fe] = d(null),
    Fe = C(null),
    [ze, xe] = d(!0),
    [we, tt] = d(0),
    [pt, xt] = d(!1),
    [Je, ae] = d(null),
    [Re, Mt] = d(null),
    [Lt, We] = d(null),
    [nt, at] = d("list"),
    [Be, Ct] = d(null),
    [pe, tn] = d(0),
    Rt = C(!1),
    sn = useClock(),
    St = C(void 0),
    Wt = C(!0);
  (E(
    () => () => {
      ((Wt.current = !1), St.current?.());
    },
    [],
  ),
    E(() => {
      async function ne() {
        try {
          let Ce = await getKnownMarketplaces(I),
            { enabled: ke, disabled: Oe } = await loadAllPlugins(I, j),
            ie = [...ke, ...Oe],
            { marketplaces: kt, failures: $t } = await loadMarketplaces(Ce, I),
            Dt = await listClaudeAiMarketplaces(j).catch(() => null);
          ((Fe.current = Dt),
            K({ ...filterUnconfiguredMarketplaces(Dt, Ce), browseOnly: Dt?.browseOnly ?? [] }));
          let _t = im(kt, $t, ie, await readClaudeAiMarketplaceRegistry());
          X(_t);
          let Ot = countMatching(kt, (te) => te.data !== null),
            bt = buildMarketplaceFailureNotice($t, Ot);
          if (bt)
            if (bt.type === "warning") ae(bt.message);
            else throw Error(bt.message);
          if (A && !Rt.current && !k) {
            Rt.current = !0;
            let te = _t.findIndex((Ee) => Ee.name === A);
            if (te >= 0) {
              let Ee = _t[te];
              if (Q) {
                tt(te + 1);
                let me = _t.map((Ge, wt) =>
                  wt === te
                    ? {
                        ...Ge,
                        pendingUpdate: Q === "update",
                        pendingRemove: Q === "remove",
                      }
                    : Ge,
                );
                (X(me), yt(me));
              } else if (Ee)
                (tt(te + 1), Ct(Ee), St.current?.(), at("details"));
            } else v(`Marketplace not found: ${A}`);
          }
        } catch (Ce) {
          let ke = toErrorMessage(Ce);
          (v(ke), ae(ke));
        } finally {
          xe(!1);
        }
      }
      ne();
    }, [A, Q, k]));
  let Ut = () => q.some((ne) => ne.pendingUpdate || ne.pendingRemove),
    zn = () => {
      let ne = countMatching(q, (ke) => ke.pendingUpdate),
        Ce = countMatching(q, (ke) => ke.pendingRemove);
      return { updateCount: ne, removeCount: Ce };
    },
    yt = async (ne) => {
      let Ce = ne || q,
        ke = nt === "details";
      (xt(!0), ae(null), Mt(null), We(null));
      try {
        let Oe = 0,
          ie = 0,
          kt = [],
          $t = [],
          Dt = new Set();
        for (let Tt of Ce) {
          if (Tt.pendingRemove) {
            if (Tt.installedPlugins.length > 0)
              await updateSettingsForSourceWithTransform(
                "userSettings",
                (nn) => {
                  let Oo = { ...nn?.enabledPlugins };
                  for (let Co of Tt.installedPlugins) {
                    let Po = formatPluginId(Co.name, Tt.name);
                    Oo[Po] = !1;
                  }
                  return { enabledPlugins: Oo };
                },
                void 0,
                I,
              );
            (await removeMarketplace(Tt.name, void 0, I, j),
              ie++,
              logEvent("tengu_marketplace_removed", {
                marketplace_name: Tt.name,
                plugins_uninstalled: Tt.installedPlugins.length,
              }));
            continue;
          }
          if (Tt.pendingUpdate) {
            try {
              await refreshMarketplace(Tt.name, I, (nn) => {
                We(nn);
              });
            } catch (nn) {
              if (nn instanceof Ui) {
                (kt.push(Tt.name),
                  logForDebugging(
                    `Marketplace ${Tt.name} not updated (managed policy): ${l(nn)}`,
                  ));
                continue;
              }
              ($t.push(Tt.name),
                logForDebugging(`Marketplace ${Tt.name} could not be refreshed: ${l(nn)}`, {
                  level: "warn",
                }));
              continue;
            }
            (Oe++,
              Dt.add(Tt.name.toLowerCase()),
              logEvent("tengu_marketplace_updated", { marketplace_name: Tt.name }));
          }
        }
        let _t = 0,
          Ot = 0,
          bt = 0,
          te = 0,
          Ee = 0,
          me = [],
          Ge = [];
        if (Dt.size > 0) {
          let {
            updated: Tt,
            blocked: nn,
            updateFailedCount: Oo,
            commandSourceSkipped: Co,
          } = await runPluginAutoupdateForMarketplaces(Dt, new Set(), { skipCommandSources: !0 }, I);
          ((_t = Tt.length),
            (Ge = Co),
            (Ot = countMatching(
              nn,
              (En) => En.type === "autoupdate-deferred-entry-helper",
            )),
            (bt = countMatching(nn, (En) => En.type === "autoupdate-disabled-by-policy")),
            (te = countMatching(nn, (En) => En.type === "autoupdate-blocked-by-pinner")),
            (Ee = Oo));
          let Po = nn.filter(
            (En) =>
              En.type !== "autoupdate-deferred-entry-helper" &&
              En.type !== "autoupdate-disabled-by-policy" &&
              En.type !== "autoupdate-blocked-by-pinner",
          );
          if (Po.length > 0 || Tt.length > 0) publishPluginAutoUpdateNotification(Tt, Po, [], { announce: !1 });
          me = Po.flatMap((En) =>
            "plugin" in En && typeof En.plugin === "string" ? [En.plugin] : [],
          );
        }
        if ((refreshPluginState(I, j), await R(), !Wt.current)) return;
        let wt = await getKnownMarketplaces(I),
          { enabled: st, disabled: Bt } = await loadAllPlugins(I, j);
        if (!Wt.current) return;
        let xn = [...st, ...Bt],
          { marketplaces: si, failures: ci } = await loadMarketplaces(wt, I);
        if (!Wt.current) return;
        K((Tt) => ({ ...Tt, ...filterUnconfiguredMarketplaces(Fe.current, wt) }));
        let io = im(si, ci, xn, await readClaudeAiMarketplaceRegistry());
        if ((X(io), tt((Tt) => Math.min(Tt, io.length)), ke && Be)) {
          let Tt = io.find((nn) => nn.name === Be.name);
          if (Tt) Ct(Tt);
        }
        let wo = [];
        if (Oe > 0 || kt.length > 0 || $t.length > 0 || te > 0 || Ee > 0)
          wo.push(
            formatMarketplaceUpdateSummary({
              updatedCount: Oe,
              updatedPluginCount: _t,
              deferredPluginCount: Ot,
              policyBlockedPluginCount: bt,
              policyRefusedMarketplaces: kt,
              failedMarketplaces: $t,
              pinnedPluginCount: te,
              failedPluginCount: Ee,
              failedPluginNames: me,
            }),
          );
        if (Ge.length > 0) {
          let Tt = Ge.length,
            nn = Tt > 1,
            Oo = Ge.find(isValidCliNameToken) ?? "",
            Co = `${nn ? "(and the others) " : ""}to review (add --scope for a project/local install)`,
            Po = `review and update ${nn ? "each" : "it"} individually from the command line`;
          wo.push(
            `${Tt} command-sourced ${pluralize(Tt, "plugin")} not updated here \u2014 ${buildRunCommandHint("plugin update", Oo, { tail: Co, fallback: Po })}`,
          );
        }
        if (ie > 0) wo.push(`Removed ${ie} ${pluralize(ie, "marketplace")}`);
        if (wo.length > 0) {
          let nn = `${getMarketplaceUpdateStatusIcon({ failedCount: $t.length + Ee, updatedCount: Oe + ie, policyRefusedCount: kt.length }) ?? figures.warning} ${wo.join(", ")}`;
          if (ke) Mt(nn);
          else {
            if (!Wt.current) return;
            (b(nn),
              St.current?.(),
              (St.current = sn.setTimeout(() => a({ type: "menu" }), 2000)));
          }
        } else if (!ke) {
          if (!Wt.current) return;
          a({ type: "menu" });
        }
      } catch (Oe) {
        let ie = toErrorMessage(Oe);
        if (!Wt.current) return;
        (ae(ie), v(ie));
      } finally {
        if (Wt.current) (xt(!1), We(null));
      }
    },
    Yn = async () => {
      if (!Be) return;
      let ne = q.map((Ce) =>
        Ce.name === Be.name ? { ...Ce, pendingRemove: !0 } : Ce,
      );
      (X(ne), await yt(ne));
    },
    fn = (ne) => {
      if (!ne) return [];
      let Ce = [
        { label: `Browse plugins (${ne.pluginCount ?? 0})`, value: "browse" },
        {
          label: "Update marketplace",
          secondaryLabel: ne.lastUpdated
            ? `(last updated ${new Date(ne.lastUpdated).toLocaleDateString()})`
            : void 0,
          value: "update",
        },
      ];
      if (!shouldSkipPluginAutoupdate())
        Ce.push({
          label: ne.autoUpdate ? "Disable auto-update" : "Enable auto-update",
          value: "toggle-auto-update",
        });
      return (Ce.push({ label: "Remove marketplace", value: "remove" }), Ce);
    },
    yn = async (ne) => {
      let Ce = !ne.autoUpdate;
      try {
        (await setMarketplaceAutoUpdate(ne.name, Ce, I),
          X((ke) =>
            ke.map((Oe) =>
              Oe.name === ne.name ? { ...Oe, autoUpdate: Ce } : Oe,
            ),
          ),
          Ct((ke) => (ke ? { ...ke, autoUpdate: Ce } : ke)));
      } catch (ke) {
        ae(toErrorMessage(ke));
      }
    };
  (useKeybinding(
    "confirm:no",
    () => {
      (St.current?.(), at("list"), tn(0));
    },
    {
      context: "Confirmation",
      isActive:
        !pt &&
        (nt === "details" ||
          nt === "confirm-remove" ||
          nt === "confirm-add-claudeai"),
    },
  ),
    useKeybinding(
      "confirm:no",
      () => {
        (St.current?.(),
          X((ne) =>
            ne.map((Ce) => ({ ...Ce, pendingUpdate: !1, pendingRemove: !1 })),
          ),
          tt(0));
      },
      { context: "Confirmation", isActive: !pt && nt === "list" && Ut() },
    ),
    useKeybinding(
      "confirm:no",
      () => {
        a({ type: "menu" });
      },
      { context: "Confirmation", isActive: !pt && nt === "list" && !Ut() },
    ),
    useKeybindings(
      {
        "select:previous": () => tt((ne) => Math.max(0, ne - 1)),
        "select:next": () => {
          let ne = q.length + B.available.length + B.hosted.length + 1;
          tt((Ce) => Math.min(ne - 1, Ce + 1));
        },
        "select:accept": () => {
          St.current?.();
          let ne = we - 1,
            Ce = B.available[ne - q.length],
            ke = B.hosted[ne - q.length - B.available.length];
          if (we === 0) a({ type: "add-marketplace" });
          else if (Ut()) yt();
          else if (Ce)
            a({
              type: "add-marketplace",
              claudeAiListing: { name: Ce.name, source: formatMarketplaceSource(Ce.source) },
            });
          else if (ke) (fe(ke), ae(null), at("confirm-add-claudeai"));
          else {
            let Oe = q[ne];
            if (Oe) (Ct(Oe), at("details"), tn(0));
          }
        },
      },
      { context: "Select", isActive: !pt && nt === "list" },
    ));
  function Xn(ne) {
    if (ne.ctrl || ne.meta || pt) return;
    let Ce = we - 1;
    if ((ne.key === "u" || ne.key === "U") && Ce >= 0)
      (ne.preventDefault(),
        St.current?.(),
        X((ke) =>
          ke.map((Oe, ie) =>
            ie === Ce
              ? {
                  ...Oe,
                  pendingUpdate: !Oe.pendingUpdate,
                  pendingRemove: Oe.pendingUpdate ? Oe.pendingRemove : !1,
                }
              : Oe,
          ),
        ));
    else if ((ne.key === "d" || ne.key === "D") && Ce >= 0) {
      let ke = q[Ce];
      if (ke)
        (ne.preventDefault(), Ct(ke), St.current?.(), at("confirm-remove"));
    }
  }
  useKeybindings(
    {
      "select:previous": () => tn((ne) => Math.max(0, ne - 1)),
      "select:next": () => {
        let ne = fn(Be);
        tn((Ce) => Math.min(ne.length - 1, Ce + 1));
      },
      "select:accept": () => {
        if ((St.current?.(), !Be)) return;
        let Ce = fn(Be)[pe];
        if (Ce?.value === "browse")
          a({ type: "browse-marketplace", targetMarketplace: Be.name });
        else if (Ce?.value === "update") {
          let ke = q.map((Oe) =>
            Oe.name === Be.name ? { ...Oe, pendingUpdate: !0 } : Oe,
          );
          (X(ke), yt(ke));
        } else if (Ce?.value === "toggle-auto-update") yn(Be);
        else if (Ce?.value === "remove") at("confirm-remove");
      },
    },
    { context: "Select", isActive: !pt && nt === "details" },
  );
  function un(ne) {
    if (ne.ctrl || ne.meta || pt) return;
    if (ne.key === "y" || ne.key === "Y")
      (ne.preventDefault(), St.current?.(), Yn());
    else if (ne.key === "n" || ne.key === "N")
      (ne.preventDefault(), St.current?.(), at("list"), Ct(null));
  }
  function Gt(ne) {
    if (ne.ctrl || ne.meta || pt) return;
    if ((ne.key === "y" || ne.key === "Y") && se) (ne.preventDefault(), Cn(se));
    else if (ne.key === "n" || ne.key === "N")
      (ne.preventDefault(), at("list"), fe(null));
  }
  async function Cn(ne) {
    (xt(!0), ae(null));
    try {
      let { name: Ce } = await addClaudeAiMarketplace(ne, {
        configured: await getKnownMarketplaces(I),
        credentials: j,
      });
      if (
        (logEvent("tengu_marketplace_added", { source_type: S("claudeai") }),
        refreshPluginState(I, j),
        await R(),
        !Wt.current)
      )
        return;
      (fe(null), a({ type: "browse-marketplace", targetMarketplace: Ce }));
    } catch (Ce) {
      if (Wt.current) ae(toErrorMessage(Ce));
    } finally {
      if (Wt.current) xt(!1);
    }
  }
  if (ze) return e(Text, { children: "Loading marketplaces\u2026" });
  if (
    q.length === 0 &&
    B.available.length === 0 &&
    B.hosted.length === 0 &&
    B.browseOnly.length === 0
  )
    return r(Box, {
      flexDirection: "column",
      children: [
        e(Box, {
          marginBottom: 1,
          children: e(Text, { bold: !0, children: "Manage marketplaces" }),
        }),
        r(SelectableRow, {
          active: !0,
          flexDirection: "row",
          gap: 1,
          children: [
            r(Text, {
              color: "suggestion",
              children: [
                r(Text, { "aria-hidden": !0, children: [figures.pointer, " "] }),
                "+",
              ],
            }),
            e(Text, {
              bold: !0,
              color: "suggestion",
              children: "Add Marketplace",
            }),
          ],
        }),
        e(Box, {
          marginTop: 1,
          children: e(Text, {
            dimColor: !0,
            italic: !0,
            children: w.pending
              ? r(N, { children: ["Press ", w.keyName, " again to go back"] })
              : r(DotSeparatedList, {
                  children: [
                    e(ActionKeybindingHint, {
                      action: "select:accept",
                      context: "Select",
                      fallback: "Enter",
                      description: "select",
                    }),
                    e(ActionKeybindingHint, {
                      action: "confirm:no",
                      context: "Confirmation",
                      fallback: "Esc",
                      description: "go back",
                    }),
                  ],
                }),
          }),
        }),
      ],
    });
  if (nt === "confirm-add-claudeai" && se)
    return r(FocusableBox, {
      onKeyDown: Gt,
      children: [
        r(Text, { bold: !0, children: ["Add marketplace ", wr(se.name), "?"] }),
        se.displayName !== se.name &&
          r(Text, {
            dimColor: !0,
            children: [
              wr(formatListedAsLabel(se.name, se.displayName) ?? ""),
              " ",
              "on claude.ai",
            ],
          }),
        r(Box, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            r(Text, {
              dimColor: !0,
              children: [
                "Install its plugins with ",
                "<plugin>",
                "@",
                wr(se.name),
              ],
            }),
            r(Text, {
              dimColor: !0,
              children: [
                "Hosted on claude.ai for",
                " ",
                se.scope === "org"
                  ? "your organization"
                  : se.scope === "account"
                    ? "you (your uploads)"
                    : "your account",
                ". Its plugins install from claude.ai.",
              ],
            }),
            pt &&
              e(Box, {
                marginTop: 1,
                children: e(Text, {
                  color: "claude",
                  children: "Adding marketplace\u2026",
                }),
              }),
            Je && e(Box, { marginTop: 1, children: e(ErrorMessage, { error: sanitizeMultilineForDisplay(Je) }) }),
            !pt &&
              e(Box, {
                marginTop: 1,
                children: r(Text, {
                  children: [
                    "Press ",
                    e(Text, { bold: !0, children: "y" }),
                    " to add or ",
                    e(Text, { bold: !0, children: "n" }),
                    " to cancel",
                  ],
                }),
              }),
          ],
        }),
      ],
    });
  if (nt === "confirm-remove" && Be) {
    let ne = Be.installedPlugins.length;
    return r(FocusableBox, {
      onKeyDown: un,
      children: [
        r(Text, {
          bold: !0,
          color: "warning",
          children: [
            "Remove marketplace",
            " ",
            e(Text, { italic: !0, children: wr(Be.name) }),
            "?",
          ],
        }),
        r(Box, {
          flexDirection: "column",
          children: [
            ne > 0 &&
              e(Box, {
                marginTop: 1,
                children: r(Text, {
                  color: "warning",
                  children: [
                    "This will also uninstall ",
                    ne,
                    " ",
                    pluralize(ne, "plugin"),
                    " from this marketplace:",
                  ],
                }),
              }),
            Be.installedPlugins.length > 0 &&
              e(Box, {
                flexDirection: "column",
                marginTop: 1,
                marginLeft: 2,
                children: Be.installedPlugins.map((Ce) =>
                  e(
                    BulletItem,
                    { children: e(Text, { dimColor: !0, children: wr(Ce.name) }) },
                    Ce.name,
                  ),
                ),
              }),
            e(Box, {
              marginTop: 1,
              children: r(Text, {
                children: [
                  "Press ",
                  e(Text, { bold: !0, children: "y" }),
                  " to confirm or ",
                  e(Text, { bold: !0, children: "n" }),
                  " to cancel",
                ],
              }),
            }),
          ],
        }),
      ],
    });
  }
  if (nt === "details" && Be) {
    let ne = Be.pendingUpdate || pt,
      Ce = fn(Be);
    return r(Box, {
      flexDirection: "column",
      children: [
        e(Text, { bold: !0, children: wr(Be.name) }),
        e(Text, { dimColor: !0, children: wr(Be.source) }),
        Be.note !== void 0 && e(Text, { color: "warning", children: wr(Be.note) }),
        e(Box, {
          marginTop: 1,
          children: r(Text, {
            children: [
              Be.pluginCount || 0,
              " available",
              " ",
              pluralize(Be.pluginCount || 0, "plugin"),
            ],
          }),
        }),
        Be.installedPlugins.length > 0 &&
          r(Box, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              r(Text, {
                bold: !0,
                children: [
                  "Installed plugins (",
                  Be.installedPlugins.length,
                  "):",
                ],
              }),
              e(Box, {
                flexDirection: "column",
                marginLeft: 1,
                children: Be.installedPlugins.map((ke) =>
                  r(
                    BulletItem,
                    {
                      children: [
                        wr(ke.name),
                        `
`,
                        e(Text, {
                          dimColor: !0,
                          children: sanitizeMultilineForDisplay(ke.manifest.description ?? ""),
                        }),
                      ],
                    },
                    ke.name,
                  ),
                ),
              }),
            ],
          }),
        ne &&
          r(Box, {
            marginTop: 1,
            flexDirection: "column",
            children: [
              e(Text, { color: "claude", children: "Updating marketplace\u2026" }),
              Lt && e(Text, { dimColor: !0, children: wr(Lt) }),
            ],
          }),
        !ne &&
          Re &&
          e(Box, {
            marginTop: 1,
            children: e(Text, { color: "claude", children: wr(Re) }),
          }),
        !ne && Je && e(Box, { marginTop: 1, children: e(ErrorMessage, { error: sanitizeMultilineForDisplay(Je) }) }),
        !ne &&
          e(Box, {
            flexDirection: "column",
            marginTop: 1,
            children: Ce.map((ke, Oe) => {
              if (!ke) return null;
              return r(
                nl,
                {
                  isFocused: Oe === pe,
                  children: [
                    ke.label,
                    ke.secondaryLabel &&
                      r(Text, {
                        dimColor: !0,
                        children: [" ", ke.secondaryLabel],
                      }),
                  ],
                },
                ke.value,
              );
            }),
          }),
        !ne &&
          !shouldSkipPluginAutoupdate() &&
          Be.autoUpdate &&
          e(Box, {
            marginTop: 1,
            children: e(Text, {
              dimColor: !0,
              children:
                "Auto-update enabled. Claude Code will automatically update this marketplace and its installed plugins.",
            }),
          }),
        e(Box, {
          marginTop: 1,
          children: e(Text, {
            dimColor: !0,
            italic: !0,
            children: ne
              ? e(N, { children: "Please wait\u2026" })
              : r(DotSeparatedList, {
                  children: [
                    e(ActionKeybindingHint, {
                      action: "select:accept",
                      context: "Select",
                      fallback: "Enter",
                      description: "select",
                    }),
                    e(ActionKeybindingHint, {
                      action: "confirm:no",
                      context: "Confirmation",
                      fallback: "Esc",
                      description: "go back",
                    }),
                  ],
                }),
          }),
        }),
      ],
    });
  }
  let { updateCount: it, removeCount: Ve } = zn();
  return r(FocusableBox, {
    onKeyDown: Xn,
    children: [
      e(Box, {
        marginBottom: 1,
        children: e(Text, { bold: !0, children: "Manage marketplaces" }),
      }),
      r(SelectableRow, {
        active: we === 0,
        flexDirection: "row",
        gap: 1,
        marginBottom: 1,
        children: [
          r(Text, {
            color: we === 0 ? "suggestion" : void 0,
            children: [
              r(Text, {
                "aria-hidden": !0,
                children: [we === 0 ? figures.pointer : " ", " "],
              }),
              "+",
            ],
          }),
          e(Text, {
            bold: !0,
            color: we === 0 ? "suggestion" : void 0,
            children: "Add Marketplace",
          }),
        ],
      }),
      r(Box, {
        flexDirection: "column",
        children: [
          q.map((ne, Ce) => {
            let ke = Ce + 1 === we,
              Oe = [];
            if (ne.pendingUpdate) Oe.push("UPDATE");
            if (ne.pendingRemove) Oe.push("REMOVE");
            return r(
              SelectableRow,
              {
                active: ke,
                flexDirection: "row",
                gap: 1,
                marginBottom: 1,
                children: [
                  r(Text, {
                    color: ke ? "suggestion" : void 0,
                    children: [
                      r(Text, {
                        "aria-hidden": !0,
                        children: [ke ? figures.pointer : " ", " "],
                      }),
                      ne.pendingRemove ? figures.cross : figures.bullet,
                    ],
                  }),
                  r(Box, {
                    flexDirection: "column",
                    flexGrow: 1,
                    children: [
                      r(Box, {
                        flexDirection: "row",
                        gap: 1,
                        children: [
                          r(Text, {
                            bold: !0,
                            strikethrough: ne.pendingRemove,
                            dimColor: ne.pendingRemove,
                            children: [
                              ne.name === "claude-plugins-official" &&
                                e(Text, { color: "claude", children: "\u273B " }),
                              wr(ne.name),
                              ne.name === "claude-plugins-official" &&
                                e(Text, { color: "claude", children: " \u273B" }),
                            ],
                          }),
                          Oe.length > 0 &&
                            r(Text, {
                              color: "warning",
                              children: ["[", Oe.join(", "), "]"],
                            }),
                        ],
                      }),
                      e(Text, { dimColor: !0, children: wr(ne.source) }),
                      ne.note !== void 0 &&
                        e(Text, { color: "warning", children: wr(ne.note) }),
                      r(Text, {
                        dimColor: !0,
                        children: [
                          ne.pluginCount !== void 0 &&
                            r(N, { children: [ne.pluginCount, " available"] }),
                          ne.installedPlugins.length > 0 &&
                            r(N, {
                              children: [
                                " \u2022 ",
                                ne.installedPlugins.length,
                                " installed",
                              ],
                            }),
                          ne.lastUpdated &&
                            r(N, {
                              children: [
                                " ",
                                "\u2022 Updated",
                                " ",
                                new Date(ne.lastUpdated).toLocaleDateString(),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              ne.name,
            );
          }),
          B.available.map((ne, Ce) => {
            let ke = q.length + Ce + 1 === we;
            return r(
              SelectableRow,
              {
                active: ke,
                flexDirection: "row",
                gap: 1,
                marginBottom: 1,
                children: [
                  r(Text, {
                    color: ke ? "suggestion" : void 0,
                    children: [
                      r(Text, {
                        "aria-hidden": !0,
                        children: [ke ? figures.pointer : " ", " "],
                      }),
                      "+",
                    ],
                  }),
                  r(Box, {
                    flexDirection: "column",
                    flexGrow: 1,
                    children: [
                      e(Text, { bold: !0, children: wr(ne.name) }),
                      r(Text, {
                        dimColor: !0,
                        children: [
                          wr(formatMarketplaceSource(ne.source)),
                          ` \xB7 available from claude.ai${ne.scope ? ` (${ne.scope})` : ""}`,
                          !Ut() && " \xB7 Enter to add",
                        ],
                      }),
                    ],
                  }),
                ],
              },
              `claudeai:${ne.name}`,
            );
          }),
          B.hosted.map((ne, Ce) => {
            let ke = q.length + B.available.length + Ce + 1 === we;
            return r(
              SelectableRow,
              {
                active: ke,
                flexDirection: "row",
                gap: 1,
                marginBottom: 1,
                children: [
                  r(Text, {
                    color: ke ? "suggestion" : void 0,
                    children: [
                      r(Text, {
                        "aria-hidden": !0,
                        children: [ke ? figures.pointer : " ", " "],
                      }),
                      "+",
                    ],
                  }),
                  r(Box, {
                    flexDirection: "column",
                    flexGrow: 1,
                    children: [
                      e(Text, { bold: !0, children: wr(ne.name) }),
                      r(Text, {
                        dimColor: !0,
                        children: [
                          `hosted on claude.ai (${formatMarketplaceScopeLabel(ne.scope)})`,
                          ne.displayName !== ne.name &&
                            ` \xB7 ${wr(formatListedAsLabel(ne.name, ne.displayName) ?? "")}`,
                          !Ut() && " \xB7 Enter to add",
                        ],
                      }),
                    ],
                  }),
                ],
              },
              `claudeai-hosted:${ne.marketplaceId}`,
            );
          }),
          B.browseOnly.map((ne) =>
            e(
              Box,
              {
                marginBottom: 1,
                paddingLeft: 4,
                children: r(Text, {
                  dimColor: !0,
                  children: [wr(formatBrowseOnlyMarketplace(ne)), " ", "\xB7 browse on claude.ai"],
                }),
              },
              `claudeai-browse:${ne.name}`,
            ),
          ),
        ],
      }),
      Ut() &&
        r(Box, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            r(Text, {
              children: [
                e(Text, { bold: !0, children: "Pending changes:" }),
                " ",
                e(Text, {
                  dimColor: !0,
                  children: e(ActionKeybindingHint, {
                    action: "select:accept",
                    context: "Select",
                    fallback: "Enter",
                    description: "apply",
                  }),
                }),
              ],
            }),
            it > 0 &&
              r(BulletItem, { children: ["Update ", it, " ", pluralize(it, "marketplace")] }),
            Ve > 0 &&
              r(BulletItem, {
                color: "warning",
                children: ["Remove ", Ve, " ", pluralize(Ve, "marketplace")],
              }),
          ],
        }),
      pt &&
        e(Box, {
          marginTop: 1,
          children: e(Text, {
            color: "claude",
            children: "Processing changes\u2026",
          }),
        }),
      Je && e(Box, { marginTop: 1, children: e(ErrorMessage, { error: sanitizeMultilineForDisplay(Je) }) }),
      e(rm, { exitState: w, hasPendingActions: Ut() }),
    ],
  });
}
function rm(cE) {
  let Xi = _(18),
    { exitState: hc, hasPendingActions: uo } = cE;
  if (hc.pending) {
    let Zi;
    if (Xi[0] !== hc.keyName)
      ((Zi = e(Box, {
        marginTop: 1,
        children: r(Text, {
          dimColor: !0,
          italic: !0,
          children: ["Press ", hc.keyName, " again to go back"],
        }),
      })),
        (Xi[0] = hc.keyName),
        (Xi[1] = Zi));
    else Zi = Xi[1];
    return Zi;
  }
  let Zi;
  if (Xi[2] !== uo)
    ((Zi =
      uo &&
      e(ActionKeybindingHint, {
        action: "select:accept",
        context: "Select",
        fallback: "Enter",
        description: "apply changes",
      })),
      (Xi[2] = uo),
      (Xi[3] = Zi));
  else Zi = Xi[3];
  let kc;
  if (Xi[4] !== uo)
    ((kc =
      !uo &&
      e(ActionKeybindingHint, {
        action: "select:accept",
        context: "Select",
        fallback: "Enter",
        description: "select",
      })),
      (Xi[4] = uo),
      (Xi[5] = kc));
  else kc = Xi[5];
  let bc;
  if (Xi[6] !== uo)
    ((bc = !uo && e(KeybindingHint, { chord: "u", action: "update" })),
      (Xi[6] = uo),
      (Xi[7] = bc));
  else bc = Xi[7];
  let xc;
  if (Xi[8] !== uo)
    ((xc = !uo && e(KeybindingHint, { chord: "d", action: "remove" })),
      (Xi[8] = uo),
      (Xi[9] = xc));
  else xc = Xi[9];
  const om = uo ? "cancel" : "go back";
  let Sc;
  if (Xi[10] !== om)
    ((Sc = e(ActionKeybindingHint, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: om,
    })),
      (Xi[10] = om),
      (Xi[11] = Sc));
  else Sc = Xi[11];
  let Vk;
  if (
    Xi[12] !== Zi ||
    Xi[13] !== kc ||
    Xi[14] !== bc ||
    Xi[15] !== xc ||
    Xi[16] !== Sc
  )
    ((Vk = e(Box, {
      marginTop: 1,
      children: e(Text, {
        dimColor: !0,
        italic: !0,
        children: r(DotSeparatedList, { children: [Zi, kc, bc, xc, Sc] }),
      }),
    })),
      (Xi[12] = Zi),
      (Xi[13] = kc),
      (Xi[14] = bc),
      (Xi[15] = xc),
      (Xi[16] = Sc),
      (Xi[17] = Vk));
  else Vk = Xi[17];
  return Vk;
}
function im(a, k, v, b) {
  let w = getDeclaredMarketplaces();
  return a
    .map(({ name: A, config: Q, data: I }) => {
      let j = v.filter((B) => B.source.endsWith(`@${A}`)),
        q = getMarketplaceSourceLabel(Q.source),
        X;
      if (Q.source.source === "claudeai") {
        q = formatClaudeAiMarketplaceLabel(b[A]);
        let B =
          I === null
            ? 0
            : countMatching(j, (K) => {
                let se = I.plugins.find((fe) => fe.name === K.name);
                return (
                  se !== void 0 &&
                  typeof se.source === "object" &&
                  se.source.source === "claudeai" &&
                  se.source.version !== "" &&
                  basename(K.path).replace(/\.zip$/, "") !== se.source.version
                );
              });
        X =
          k.find((K) => K.name === A)?.error ??
          (B > 0
            ? `${B} plugin ${pluralize(B, "update")} available \xB7 update the marketplace to apply`
            : void 0);
      }
      return {
        name: A,
        source: q,
        ...(X !== void 0 && { note: X }),
        lastUpdated: Q.lastUpdated,
        pluginCount: I?.plugins.length,
        installedPlugins: j,
        pendingUpdate: !1,
        pendingRemove: !1,
        autoUpdate: shouldAutoUpdateMarketplace(A, Q, w[A]?.autoUpdate),
      };
    })
    .sort((A, Q) => {
      if (A.name === "claude-plugin-directory") return -1;
      if (Q.name === "claude-plugin-directory") return 1;
      return A.name.localeCompare(Q.name);
    });
}
F();
F();
var Wa = Qt(!1);
function NIt() {
  return De(Wa);
}
function hm(bE) {
  let Qo = _(35),
    {
      children: xE,
      visibleCount: Cc,
      onSelect: am,
      onFocus: lm,
      isDisabled: Hk,
      wrap: Kk,
      overflowHint: qk,
      emptyMessage: Pc,
    } = bE,
    Tc = Hk === void 0 ? !1 : Hk,
    SE = Kk === void 0 ? !1 : Kk,
    zk = qk === void 0 ? "glyph" : qk,
    Wk = ew.toArray(xE),
    Go = Wk.length;
  const sm = SE ? "wrap" : "clamp";
  let Gk;
  if (
    Qo[0] !== Go ||
    Qo[1] !== Tc ||
    Qo[2] !== am ||
    Qo[3] !== sm ||
    Qo[4] !== Cc
  )
    ((Gk = {
      count: Go,
      visibleCount: Cc,
      isDisabled: Tc,
      edge: sm,
      onAccept: am,
    }),
      (Qo[0] = Go),
      (Qo[1] = Tc),
      (Qo[2] = am),
      (Qo[3] = sm),
      (Qo[4] = Cc),
      (Qo[5] = Gk));
  else Gk = Qo[5];
  const cm = useListCursor(Gk);
  let za, pn;
  if (Qo[6] !== cm)
    (({ containerRef: za, ...pn } = cm),
      (Qo[6] = cm),
      (Qo[7] = za),
      (Qo[8] = pn));
  else ((za = Qo[7]), (pn = Qo[8]));
  let Qk;
  if (Qo[9] !== lm) ((Qk = (vE) => lm?.(vE)), (Qo[9] = lm), (Qo[10] = Qk));
  else Qk = Qo[10];
  let um = vr(Qk),
    Yk;
  if (Qo[11] !== Go || Qo[12] !== um || Qo[13] !== pn.cursor)
    ((Yk = () => {
      if (Go > 0) um(pn.cursor);
    }),
      (Qo[11] = Go),
      (Qo[12] = um),
      (Qo[13] = pn.cursor),
      (Qo[14] = Yk));
  else Yk = Qo[14];
  let Jk;
  if (Qo[15] !== Go || Qo[16] !== pn.cursor)
    ((Jk = [pn.cursor, Go]),
      (Qo[15] = Go),
      (Qo[16] = pn.cursor),
      (Qo[17] = Jk));
  else Jk = Qo[17];
  if ((E(Yk, Jk), useFocusTrap(za, !Tc), Go === 0)) {
    let qr;
    if (Qo[18] !== Pc)
      ((qr = Pc && e(Text, { dimColor: !0, children: Pc })),
        (Qo[18] = Pc),
        (Qo[19] = qr));
    else qr = Qo[19];
    let Ic;
    if (Qo[20] !== za || Qo[21] !== qr)
      ((Ic = e(Box, {
        ref: za,
        flexDirection: "column",
        tabIndex: 0,
        children: qr,
      })),
        (Qo[20] = za),
        (Qo[21] = qr),
        (Qo[22] = Ic));
    else Ic = Qo[22];
    return Ic;
  }
  let hi = zk === "glyph" && Cc === 1 ? "count" : zk,
    Xk = Wk.slice(pn.windowStart, pn.windowEnd);
  const dm = Box,
    qr = "column",
    Ic = pn.bind;
  let Rc;
  if (Qo[23] !== hi || Qo[24] !== pn.moreAbove)
    ((Rc =
      hi === "count" &&
      pn.moreAbove > 0 &&
      e(Box, {
        paddingLeft: 2,
        children: r(Text, {
          dimColor: !0,
          children: [UP_ARROW_GLYPH, " ", pn.moreAbove, " more above"],
        }),
      })),
      (Qo[23] = hi),
      (Qo[24] = pn.moreAbove),
      (Qo[25] = Rc));
  else Rc = Qo[25];
  const fm = Xk.map((pm, mm) => {
    let gm = pn.windowStart + mm;
    let Zk = pn.isCursor(gm);
    let wE = mm === 0 && pn.moreAbove > 0;
    let CE = mm === Xk.length - 1 && pn.moreBelow > 0;
    return e(
      Wa.Provider,
      {
        value: Zk,
        children: e(nl, {
          isFocused: Zk,
          showScrollUp: hi === "glyph" && wE,
          showScrollDown: hi === "glyph" && CE,
          styled: !1,
          children: pm,
        }),
      },
      L_(pm) ? (pm.key ?? gm) : gm,
    );
  });
  let Ec;
  if (Qo[26] !== hi || Qo[27] !== pn.moreBelow)
    ((Ec =
      hi === "count" &&
      pn.moreBelow > 0 &&
      e(Box, {
        paddingLeft: 2,
        children: r(Text, {
          dimColor: !0,
          children: [DOWN_ARROW_GLYPH, " ", pn.moreBelow, " more below"],
        }),
      })),
      (Qo[26] = hi),
      (Qo[27] = pn.moreBelow),
      (Qo[28] = Ec));
  else Ec = Qo[28];
  let eb;
  if (
    Qo[29] !== dm ||
    Qo[30] !== pn.bind ||
    Qo[31] !== Rc ||
    Qo[32] !== fm ||
    Qo[33] !== Ec
  )
    ((eb = r(dm, { flexDirection: qr, ...Ic, children: [Rc, fm, Ec] })),
      (Qo[29] = dm),
      (Qo[30] = pn.bind),
      (Qo[31] = Rc),
      (Qo[32] = fm),
      (Qo[33] = Ec),
      (Qo[34] = eb));
  else eb = Qo[34];
  return eb;
}
function km(PE) {
  let TE = _(2),
    { children: ym } = PE,
    tb;
  if (TE[0] !== ym) ((tb = e(N, { children: ym })), (TE[0] = ym), (TE[1] = tb));
  else tb = TE[1];
  return tb;
}
var iye = Object.assign(hm, { Item: km });
F();
function oye(a, k) {
  let v = formatRelativeTimeAgo(new Date(a)),
    b = k !== void 0 ? ` \xB7 ${k} ${pluralize(k, "tool")}` : "";
  return {
    glyph: figures.radioOn,
    tone: "inactive",
    statusText: `cached ${v} \xB7 connects on first use${b}`,
  };
}
function zr(LE) {
  let Mc = _(9),
    {
      serverToolsCount: bm,
      serverPromptsCount: xm,
      serverResourcesCount: Sm,
    } = LE,
    ki;
  if (Mc[0] !== xm || Mc[1] !== Sm || Mc[2] !== bm) {
    ki = [];
    if (bm > 0) ki.push("tools");
    if (Sm > 0) ki.push("resources");
    if (xm > 0) ki.push("prompts");
    ((Mc[0] = xm), (Mc[1] = Sm), (Mc[2] = bm), (Mc[3] = ki));
  } else ki = Mc[3];
  let nb;
  if (Mc[4] === MEMO_CACHE_SENTINEL)
    ((nb = e(Text, { bold: !0, children: "Capabilities: " })), (Mc[4] = nb));
  else nb = Mc[4];
  let $c;
  if (Mc[5] !== ki)
    (($c = ki.length > 0 ? e(DotSeparatedList, { children: ki }) : "none"),
      (Mc[5] = ki),
      (Mc[6] = $c));
  else $c = Mc[6];
  let ob;
  if (Mc[7] !== $c)
    ((ob = r(Box, { children: [nb, e(Text, { color: "text", children: $c })] })),
      (Mc[7] = $c),
      (Mc[8] = ob));
  else ob = Mc[8];
  return ob;
}
function db() {
  return !1;
}
var MIt =
  "Can't authenticate MCP servers while no terminal is attached to this background session. Attach to it and try again.";
function Em() {
  return import.meta.require("../MCP客户端/mcpClientModule.4cyej0np.js");
}
function Yr() {
  return Em().mcpAuthModule();
}
function Oc() {
  return Em().mcpClientModule();
}
function ub(a, k, v) {
  if (a.type === "disabled")
    return r(Text, { children: [getThemeColor("inactive", v)(figures.radioOff), " disabled"] });
  if (a.type === "connected") {
    if (a.discoveryBearerRejected)
      return r(Text, {
        children: [
          e(StatusIndicator, { status: "warning", withSpace: !0 }),
          "connected \xB7 session token rejected",
        ],
      });
    if (a.toolsListError)
      return r(Text, {
        children: [
          e(StatusIndicator, { status: "warning", withSpace: !0 }),
          "connected \xB7 tools fetch failed",
        ],
      });
    if (a.capabilities?.tools && k === 0)
      return r(Text, {
        children: [
          e(StatusIndicator, { status: "warning", withSpace: !0 }),
          "connected \xB7 no tools",
        ],
      });
    return r(Text, {
      children: [e(StatusIndicator, { status: "success", withSpace: !0 }), "connected"],
    });
  }
  if (a.type === "cached") {
    let b = oye(a.cacheSavedAt, k);
    return r(Text, { children: [getThemeColor(b.tone, v)(b.glyph), " ", b.statusText] });
  }
  if (a.type === "pending")
    return r(Text, {
      children: [
        e(Text, { dimColor: !0, children: figures.radioOff }),
        " connecting\u2026",
      ],
    });
  if (a.type === "needs-auth")
    return r(Text, {
      children: [
        getThemeColor("warning", v)(figures.triangleUpOutline),
        " needs authentication",
      ],
    });
  if (a.errorCode === "UNCONFIGURED")
    return r(Text, {
      children: [
        e(Text, { dimColor: !0, children: figures.radioOff }),
        " not configured",
      ],
    });
  return r(Text, {
    children: [
      e(StatusIndicator, { status: "error", withSpace: !0 }),
      a.errorCode === "INVALID_CONFIG" ? "config issue" : "failed",
    ],
  });
}
function sye(bo) {
  let Si = _(23),
    bi = bo.server.config,
    Wr = (bi.type === "sse" || bi.type === "http") && !!getClaudeAIOAuthTokens()?.accessToken,
    ib;
  if (Si[0] !== bi || Si[1] !== Wr)
    ((ib =
      (bi.type === "sse" || bi.type === "http") && isMcpServerAuthenticated(bi, Wr) !== isMcpServerAuthenticated(bi, !0)),
      (Si[0] = bi),
      (Si[1] = Wr),
      (Si[2] = ib));
  else ib = Si[2];
  let wm = ib,
    rb;
  if (Si[3] !== wm)
    ((rb = () => (wm ? hasFirstPartyDesignAuth().catch(db) : null)), (Si[3] = wm), (Si[4] = rb));
  else rb = Si[4];
  let [Cm] = d(rb);
  const Pm = bo.borderless ? 1 : 0,
    Tm = String(bo.server.name);
  let ab;
  if (Si[5] !== Tm) ((ab = capitalize(Tm)), (Si[5] = Tm), (Si[6] = ab));
  else ab = Si[6];
  const Im = `${ab} MCP Server`;
  let lb, sb;
  if (Si[7] === MEMO_CACHE_SENTINEL)
    ((lb = e(DotSeparatedList, {
      children: e(ActionKeybindingHint, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "back",
      }),
    })),
      (sb = e(Text, { dimColor: !0, children: "Checking credentials\u2026" })),
      (Si[7] = lb),
      (Si[8] = sb));
  else ((lb = Si[7]), (sb = Si[8]));
  let Dc;
  if (Si[9] !== bo.borderless || Si[10] !== bo.onCancel || Si[11] !== Im)
    ((Dc = e(de, {
      title: Im,
      onCancel: bo.onCancel,
      hideBorder: bo.borderless,
      inputGuide: lb,
      children: sb,
    })),
      (Si[9] = bo.borderless),
      (Si[10] = bo.onCancel),
      (Si[11] = Im),
      (Si[12] = Dc));
  else Dc = Si[12];
  let Bc;
  if (Si[13] !== Pm || Si[14] !== Dc)
    ((Bc = e(Box, { flexDirection: "column", paddingX: Pm, children: Dc })),
      (Si[13] = Pm),
      (Si[14] = Dc),
      (Si[15] = Bc));
  else Bc = Si[15];
  let Ac;
  if (Si[16] !== Cm || Si[17] !== Wr || Si[18] !== bo)
    ((Ac = e(Rm, { ...bo, hasClaudeAiToken: Wr, designCredential: Cm })),
      (Si[16] = Cm),
      (Si[17] = Wr),
      (Si[18] = bo),
      (Si[19] = Ac));
  else Ac = Si[19];
  let cb;
  if (Si[20] !== Ac || Si[21] !== Bc)
    ((cb = e(Dn, { fallback: Bc, children: Ac })),
      (Si[20] = Ac),
      (Si[21] = Bc),
      (Si[22] = cb));
  else cb = Si[22];
  return cb;
}
function Rm({
  server: a,
  serverToolsCount: k,
  onViewTools: v,
  onCancel: b,
  onComplete: w,
  borderless: R = !1,
  hasClaudeAiToken: A,
  designCredential: Q,
}) {
  let I = re(
      (te, ...Ee) => w(typeof te === "string" ? Qn(te) : te, ...Ee),
      [w],
    ),
    j = useAppStateSession(),
    [q] = useTheme();
  useGlobalExitKeybinding();
  let { columns: X } = useTerminalSize(),
    [B, K] = d(!1),
    [se, fe] = d(null),
    Fe = useAppStateSelector((te) => te.mcp),
    ze = useSetAppState(),
    [xe, we] = d(null),
    [tt, pt] = d(!1),
    xt = C(null),
    [Je, ae] = d(!1),
    [Re, Mt] = d(null),
    [Lt, We] = d(!1),
    [nt, at] = d(!1),
    Be = xe || Re || (nt ? getClaudeAiConnectorsUrl() : null),
    { copiedVia: Ct, copy: pe } = useCopyToClipboard(Be),
    [tn, Rt] = d(""),
    [sn, St] = d(0),
    [Wt, Ut] = d(null);
  E(
    () => () => {
      xt.current?.abort();
    },
    [],
  );
  let zn = a.isAuthenticated || (isConnectedMcpServer(a.client) && k > 0),
    yt = useMcpReconnect(),
    Yn = re(async () => {
      (ae(!1), Mt(null), pt(!0));
      try {
        let te = await yt(a.name, { discardDiscovery: !1 }),
          Ee = te.client.type === "connected";
        if ((logEvent("tengu_claudeai_mcp_auth_completed", { success: Ee }), Ee))
          I(`Authentication successful. Connected to ${sanitizeDisplayTextWithoutRedaction(a.name)}.`);
        else if (te.client.type === "needs-auth")
          I(
            `Tried reconnecting, but ${sanitizeDisplayTextWithoutRedaction(a.name)} is still unauthorized. Make sure the browser sign-in completed, then try again from /mcp.`,
          );
        else {
          let me = te.client.type === "failed" ? getMcpClientFailureDetail(te.client) : "";
          if (mayHaveRemoteClient(j)) {
            if (me)
              logForDebugging(`mcp reconnect failed for ${Qn(a.name)}: ${me}`, {
                level: "error",
              });
            I(
              `Tried reconnecting to ${sanitizeDisplayTextWithoutRedaction(a.name)}, but the connection failed${me ? " (detail withheld on this connection)" : ""}. Restart Claude Code to retry.`,
            );
          } else {
            let Ge = me ? sanitizeDisplayText(me) : "";
            I(
              Ge
                ? `Tried reconnecting to ${sanitizeDisplayTextWithoutRedaction(a.name)}, but the connection failed: ${Ge}`
                : `Tried reconnecting to ${sanitizeDisplayTextWithoutRedaction(a.name)}, but the connection failed. Restart Claude Code to retry.`,
            );
          }
        }
      } catch (te) {
        (logEvent("tengu_claudeai_mcp_auth_completed", { success: !1 }),
          I(formatMcpReconnectError(te, a.name, { persistsOffBox: mayHaveRemoteClient(j) })));
      } finally {
        pt(!1);
      }
    }, [yt, a.name, I, j]),
    fn = re(async () => {
      (await Oc().clearServerCache(a.name, { ...a.config, scope: a.scope }),
        ze((te) => {
          let Ee = te.mcp.clients.map((st) =>
              st.name === a.name && st.type !== "disabled"
                ? { ...st, type: "needs-auth" }
                : st,
            ),
            me = removeMcpServerTools(te.mcp.tools, a.name),
            Ge = removeMcpServerCommands(te.mcp.commands, a.name),
            wt = omitKey(te.mcp.resources, a.name);
          return {
            ...te,
            mcp: {
              ...te.mcp,
              clients: Ee,
              tools: me,
              commands: Ge,
              resources: wt,
            },
          };
        }),
        logEvent("tengu_claudeai_mcp_clear_auth_completed", {}),
        I(`Disconnected from ${sanitizeDisplayTextWithoutRedaction(a.name)}.`),
        We(!1),
        at(!1));
    }, [a.name, a.config, a.scope, ze, I]);
  (useKeybinding(
    "confirm:no",
    () => {
      (xt.current?.abort(), (xt.current = null), K(!1), we(null));
    },
    { context: "Confirmation", isActive: B },
  ),
    useKeybinding(
      "confirm:no",
      () => {
        (ae(!1), Mt(null));
      },
      { context: "Confirmation", isActive: Je },
    ),
    useKeybinding(
      "confirm:no",
      () => {
        (We(!1), at(!1));
      },
      { context: "Confirmation", isActive: Lt },
    ));
  function yn(te) {
    if (te.key === "return" && Je) (te.preventDefault(), Yn());
    if (te.key === "return" && Lt) {
      if ((te.preventDefault(), isUnattendedBgSession())) {
        (We(!1), at(!1), fe(MIt));
        return;
      }
      if (nt) fn();
      else (at(!0), tryOpenUrlInBrowser(getClaudeAiConnectorsUrl()));
    }
    if (te.key === "c" && !te.ctrl && !te.meta && Be)
      (te.preventDefault(), pe(Be));
  }
  let Xn = capitalize(String(a.name)),
    un = getMcpServerCommands(Fe.commands, a.name).length,
    Gt = useMcpToggleEnabled(),
    Cn = re(() => {
      let te = mcpDialBlockCause(a.name, a.client.config);
      if (te === "managed-policy") return (fe(formatMcpServerBlockedMessage(a.name, te)), !0);
      let Ee = isMcpServerDisabled(a.name);
      if (a.client.type === "disabled" || Ee)
        return (
          fe(a.client.type === "disabled" ? formatServerDisabledHint(a.name) : formatDisabledElsewhereMessage(a.name)),
          !0
        );
      if (te) return (fe(formatMcpServerBlockedMessage(a.name, te)), !0);
      return (fe(null), !1);
    }, [a.client.type, a.name, a.client.config]),
    it = re(async () => {
      if (Cn()) return;
      let te =
        (a.config.type === "claudeai-proxy" ? buildClaudeAiMcpAuthUrl(a.config) : null) ?? getClaudeAiConnectorsUrl();
      (Mt(te), ae(!0), logEvent("tengu_claudeai_mcp_auth_started", {}), await tryOpenUrlInBrowser(te));
    }, [a.config, Cn]),
    Ve = re(() => {
      (We(!0), logEvent("tengu_claudeai_mcp_clear_auth_started", {}));
    }, []),
    ne = re(async () => {
      let te = a.client.type !== "disabled";
      try {
        if ((await Gt(a.name), a.config.type === "claudeai-proxy"))
          logEvent("tengu_claudeai_mcp_toggle", {
            new_state: S(te ? "disabled" : "enabled"),
          });
        b();
      } catch (Ee) {
        I(formatMcpToggleError(Ee, a.name, te ? "disable" : "enable", { persistsOffBox: mayHaveRemoteClient(j) }));
      }
    }, [a.client.type, a.config.type, a.name, Gt, b, I, j]),
    Ce = re(async () => {
      if (Cn()) return;
      let te = classifyMcpServerAuth(a.name, { ...a.config, scope: a.scope });
      if (te.kind === "anthropic-hosted") {
        fe(te.message);
        return;
      }
      if (te.kind !== "oauth") return;
      (K(!0), fe(null));
      let Ee = new AbortController();
      xt.current = Ee;
      try {
        let me = a.isAuthenticated
          ? await Yr().snapshotServerTokens(a.name, te.config)
          : void 0;
        (await Yr().performMCPOAuthFlow(a.name, te.config, we, Ee.signal, {
          onWaitingForCallback: (wt) => {
            Ut(() => wt);
          },
        }),
          logEvent("tengu_mcp_auth_config_authenticate", {
            wasAuthenticated: a.isAuthenticated,
          }));
        let Ge = await yt(a.name, { discardDiscovery: !1 });
        if (Ge.client.type === "connected") {
          if (me) await Yr().revokeReplacedServerTokens(a.name, te.config, me);
          let wt = zn
            ? `Authentication successful. Reconnected to ${sanitizeDisplayTextWithoutRedaction(a.name)}.`
            : `Authentication successful. Connected to ${sanitizeDisplayTextWithoutRedaction(a.name)}.`;
          I(wt);
        } else if (Ge.client.type === "needs-auth")
          I(
            `Got new credentials, but ${sanitizeDisplayTextWithoutRedaction(a.name)} rejected them on reconnect. Try re-authenticating, or restart Claude Code if it persists.`,
          );
        else {
          logMCPDebug(a.name, "Reconnection failed after authentication");
          let wt = Ge.client.type === "failed" ? getMcpClientFailureDetail(Ge.client) : "";
          if (mayHaveRemoteClient(j)) {
            if (wt)
              logForDebugging(`mcp post-auth reconnect failed for ${Qn(a.name)}: ${wt}`, {
                level: "error",
              });
            I(
              `Got new credentials, but reconnecting to ${sanitizeDisplayTextWithoutRedaction(a.name)} failed${wt ? " (detail withheld on this connection)" : ""}. Restart Claude Code to retry.`,
            );
          } else {
            let st = wt ? sanitizeDisplayText(wt) : "";
            I(
              st
                ? `Got new credentials, but reconnecting to ${sanitizeDisplayTextWithoutRedaction(a.name)} failed: ${st}`
                : `Got new credentials, but reconnecting to ${sanitizeDisplayTextWithoutRedaction(a.name)} failed. Restart Claude Code to retry.`,
            );
          }
        }
      } catch (me) {
        if (
          me instanceof Error &&
          !(me instanceof Yr().AuthenticationCancelledError)
        )
          fe(me.message);
      } finally {
        (K(!1), (xt.current = null), Ut(null), Rt(""), we(null));
      }
    }, [a.isAuthenticated, a.config, a.name, a.scope, I, yt, zn, Cn, j]),
    ke = async () => {
      if (a.config.type === "claudeai-proxy") return;
      if (a.config) {
        (await Yr().revokeServerTokens(a.name, a.config),
          logEvent("tengu_mcp_auth_config_clear", {}));
        let te = { ...a.config, scope: a.scope },
          Ee = getIdentityEpoch();
        if (isDiscoveryCacheUsable())
          await awaitDiscoveryCacheFlush(
            Oc()
              .dropDiscoveryEntry(a.name, te)
              .catch(() => {}),
          );
        if (!(isRemoteTransport(te) && getIdentityEpoch() !== Ee)) await Oc().clearServerCache(a.name, te);
        (ze((me) => {
          let Ge = me.mcp.clients.map((xn) =>
              xn.name === a.name && xn.type !== "disabled"
                ? { ...xn, type: "failed" }
                : xn,
            ),
            wt = removeMcpServerTools(me.mcp.tools, a.name),
            st = removeMcpServerCommands(me.mcp.commands, a.name),
            Bt = omitKey(me.mcp.resources, a.name);
          return {
            ...me,
            mcp: {
              ...me.mcp,
              clients: Ge,
              tools: wt,
              commands: st,
              resources: Bt,
            },
          };
        }),
          I(`Authentication cleared for ${sanitizeDisplayTextWithoutRedaction(a.name)}.`));
      }
    };
  if (B) {
    let te =
      a.config.type !== "claudeai-proxy" && a.config.oauth?.xaa
        ? " Authenticating via your identity provider"
        : " A browser window will open for authentication";
    return r(Box, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: yn,
      children: [
        r(Text, {
          color: "claude",
          children: ["Authenticating with ", a.name, "\u2026"],
        }),
        r(Box, { children: [e(SpinnerGlyph, {}), e(Text, { children: te })] }),
        xe &&
          r(Box, {
            flexDirection: "column",
            children: [
              r(Box, {
                children: [
                  r(Text, {
                    dimColor: !0,
                    children: [
                      "If your browser doesn't open automatically, copy this URL manually",
                      " ",
                    ],
                  }),
                  e(CopyFeedbackHint, { via: Ct }),
                ],
              }),
              e(CopyFallbackNotice, { via: Ct }),
              e(Link, { url: xe, assumeSupport: !0 }),
            ],
          }),
        B &&
          xe &&
          Wt &&
          r(Box, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              e(Text, {
                dimColor: !0,
                children:
                  "If the redirect page shows a connection error, paste the URL from your browser's address bar:",
              }),
              r(Box, {
                children: [
                  r(Text, { dimColor: !0, children: ["URL ", ">", " "] }),
                  e(hn, {
                    value: tn,
                    onChange: Rt,
                    onSubmit: (Ee) => {
                      (Wt(Ee.trim()), Rt(""));
                    },
                    cursorOffset: sn,
                    onChangeCursorOffset: St,
                    columns: X - 8,
                  }),
                ],
              }),
            ],
          }),
        e(Box, {
          marginLeft: 3,
          children: r(Text, {
            dimColor: !0,
            children: [
              "Return here after authenticating in your browser. Press",
              " ",
              e(KeybindingHint, { chord: "escape", action: "go back" }),
              ".",
            ],
          }),
        }),
      ],
    });
  }
  if (Je)
    return r(Box, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: yn,
      children: [
        r(Text, {
          color: "claude",
          children: ["Authenticating with ", a.name, "\u2026"],
        }),
        r(Box, {
          children: [
            e(SpinnerGlyph, {}),
            e(Text, {
              children: " A browser window will open for authentication",
            }),
          ],
        }),
        Re &&
          r(Box, {
            flexDirection: "column",
            children: [
              r(Box, {
                children: [
                  r(Text, {
                    dimColor: !0,
                    children: [
                      "If your browser doesn't open automatically, copy this URL manually",
                      " ",
                    ],
                  }),
                  e(CopyFeedbackHint, { via: Ct }),
                ],
              }),
              e(CopyFallbackNotice, { via: Ct }),
              e(Link, { url: Re, assumeSupport: !0 }),
            ],
          }),
        r(Box, {
          marginLeft: 3,
          flexDirection: "column",
          children: [
            r(Text, {
              color: "permission",
              children: [
                "Press ",
                e(Text, { bold: !0, children: "Enter" }),
                " after authenticating in your browser.",
              ],
            }),
            e(Text, {
              dimColor: !0,
              italic: !0,
              children: e(ActionKeybindingHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "back",
              }),
            }),
          ],
        }),
      ],
    });
  if (Lt)
    return r(Box, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: yn,
      children: [
        r(Text, {
          color: "claude",
          children: ["Clear authentication for ", a.name],
        }),
        nt
          ? r(N, {
              children: [
                e(Text, {
                  children:
                    'Find the MCP server in the browser and click "Disconnect".',
                }),
                r(Box, {
                  flexDirection: "column",
                  children: [
                    r(Box, {
                      children: [
                        r(Text, {
                          dimColor: !0,
                          children: [
                            "If your browser didn't open automatically, copy this URL manually",
                            " ",
                          ],
                        }),
                        e(CopyFeedbackHint, { via: Ct }),
                      ],
                    }),
                    e(CopyFallbackNotice, { via: Ct }),
                    e(Link, { url: getClaudeAiConnectorsUrl() }),
                  ],
                }),
                r(Box, {
                  marginLeft: 3,
                  flexDirection: "column",
                  children: [
                    r(Text, {
                      color: "permission",
                      children: [
                        "Press ",
                        e(Text, { bold: !0, children: "Enter" }),
                        " when done.",
                      ],
                    }),
                    e(Text, {
                      dimColor: !0,
                      italic: !0,
                      children: e(ActionKeybindingHint, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "back",
                      }),
                    }),
                  ],
                }),
              ],
            })
          : r(N, {
              children: [
                e(Text, {
                  children:
                    'This will open claude.ai in the browser. Find the MCP server in the list and click "Disconnect".',
                }),
                r(Box, {
                  marginLeft: 3,
                  flexDirection: "column",
                  children: [
                    r(Text, {
                      color: "permission",
                      children: [
                        "Press",
                        " ",
                        e(KeybindingHint, {
                          chord: "enter",
                          action: "open the browser",
                          bold: !0,
                        }),
                        ".",
                      ],
                    }),
                    e(Text, {
                      dimColor: !0,
                      italic: !0,
                      children: e(ActionKeybindingHint, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "back",
                      }),
                    }),
                  ],
                }),
              ],
            }),
      ],
    });
  if (tt)
    return r(Box, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      children: [
        r(Text, {
          color: "text",
          children: [
            "Connecting to ",
            e(Text, { bold: !0, children: a.name }),
            "\u2026",
          ],
        }),
        r(Box, {
          children: [
            e(SpinnerGlyph, {}),
            e(Text, { children: " Establishing connection to MCP server" }),
          ],
        }),
        e(Text, { dimColor: !0, children: "This may take a few moments." }),
      ],
    });
  let Oe = [];
  if (a.client.type === "disabled")
    Oe.push({ label: "Enable", value: "toggle-enabled" });
  if (isConnectedMcpServer(a.client) && k > 0) Oe.push({ label: "View tools", value: "tools" });
  let ie =
      (a.config.type === "sse" || a.config.type === "http") && configHasAuthorizationHeader(a.config),
    kt =
      (a.config.type === "sse" || a.config.type === "http") &&
      isMcpServerAuthenticated(a.config, A || (Q !== null && kn(Q))),
    $t =
      a.client.type === "failed" &&
      a.client.errorCode === "HEADERS_HELPER_AUTH_REJECTED",
    Dt =
      a.client.type === "disabled" || isMcpServerDisabled(a.name) || isMcpDialBlockedByPolicy(a.name, a.client.config);
  if (a.config.type === "claudeai-proxy") {
    if (a.client.type === "connected")
      Oe.push({ label: "Clear authentication", value: "claudeai-clear-auth" });
    else if (!Dt) Oe.push({ label: "Authenticate", value: "claudeai-auth" });
  } else {
    let te = !Dt && !kt && !$t;
    if (zn) {
      if (te) Oe.push({ label: "Re-authenticate", value: "reauth" });
      Oe.push({ label: "Clear authentication", value: "clear-auth" });
    } else if (te) Oe.push({ label: "Authenticate", value: "auth" });
  }
  let _t = a.config.type !== "claudeai-proxy" && !!a.config.headersHelper;
  if (a.client.type !== "disabled") {
    if (a.client.type !== "needs-auth" || _t || ie)
      Oe.push({ label: "Reconnect", value: "reconnectMcpServer" });
    Oe.push({ label: "Disable", value: "toggle-enabled" });
  }
  if (Oe.length === 0) Oe.push({ label: "Back", value: "back" });
  let Ot = ["reauth", "clear-auth", "claudeai-clear-auth"],
    bt =
      Oe[0] && Ot.includes(Oe[0].value)
        ? Oe.find((te) => !Ot.includes(te.value))?.value
        : void 0;
  return e(Box, {
    flexDirection: "column",
    paddingX: R ? 1 : 0,
    children: r(de, {
      title: `${Xn} MCP Server`,
      onCancel: b,
      hideBorder: R,
      inputGuide: r(DotSeparatedList, {
        children: [
          e(KeybindingHint, { chord: ["up", "down"], action: "navigate" }),
          e(KeybindingHint, { chord: "enter", action: "select" }),
          e(ActionKeybindingHint, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "back",
          }),
        ],
      }),
      children: [
        r(Box, {
          flexDirection: "column",
          gap: 0,
          children: [
            r(Table, {
              columns: [{ bold: !0 }, {}],
              children: [
                r(Table.Row, {
                  children: [e(N, { children: "Status:" }), ub(a.client, k, q)],
                }),
                (a.client.type === "failed" ||
                  a.client.type === "needs-auth") &&
                  a.client.error &&
                  r(Table.Row, {
                    children: [
                      e(N, { children: "Issue:" }),
                      e(Text, {
                        dimColor: !0,
                        children: sanitizeMessageText(
                          a.client.type === "failed" && a.client.displayDetail
                            ? `${a.client.error} ${a.client.displayDetail}`
                            : a.client.error,
                        ),
                      }),
                    ],
                  }),
                a.transport !== "claudeai-proxy" &&
                  r(Table.Row, {
                    children: [
                      e(N, { children: "Auth:" }),
                      zn
                        ? r(Text, {
                            children: [
                              e(StatusIndicator, { status: "success", withSpace: !0 }),
                              "authenticated",
                            ],
                          })
                        : r(Text, {
                            children: [
                              e(StatusIndicator, { status: "error", withSpace: !0 }),
                              "not authenticated",
                            ],
                          }),
                    ],
                  }),
                a.client.type === "connected" &&
                  a.client.protocolEra === "modern" &&
                  a.client.negotiatedProtocolVersion &&
                  r(Table.Row, {
                    children: [
                      e(N, { children: "Protocol:" }),
                      e(Text, {
                        dimColor: !0,
                        children: sanitizeLogValue(a.client.negotiatedProtocolVersion),
                      }),
                    ],
                  }),
                a.transport === "claudeai-proxy" &&
                  a.scope === "claudeai" &&
                  a.config.enterpriseManaged &&
                  r(Table.Row, {
                    children: [
                      e(N, { children: "Managed:" }),
                      e(Text, { dimColor: !0, children: "by your organization" }),
                    ],
                  }),
                r(Table.Row, {
                  children: [
                    e(N, { children: "URL:" }),
                    e(Text, { dimColor: !0, children: redactManagedMcpConfig(a.config, a.scope).url }),
                  ],
                }),
                r(Table.Row, {
                  children: [
                    e(N, { children: "Config location:" }),
                    e(Text, { dimColor: !0, children: formatMcpScopeLocation(a.scope) }),
                  ],
                }),
              ],
            }),
            isConnectedMcpServer(a.client) &&
              e(zr, {
                serverToolsCount: k,
                serverPromptsCount: un,
                serverResourcesCount: Fe.resources[a.name]?.length || 0,
              }),
            isConnectedMcpServer(a.client) &&
              k > 0 &&
              r(Box, {
                children: [
                  e(Text, { bold: !0, children: "Tools: " }),
                  r(Text, { dimColor: !0, children: [k, " ", pluralize(k, "tool")] }),
                ],
              }),
            a.client.type === "connected" &&
              a.client.discoveryBearerRejected &&
              r(Box, {
                flexDirection: "column",
                children: [
                  e(Text, { bold: !0, children: "Issue: " }),
                  e(Text, {
                    dimColor: !0,
                    children:
                      "claude.ai rejected the session token. Run /login, then reconnect.",
                  }),
                ],
              }),
            a.client.type === "connected" &&
              !a.client.discoveryBearerRejected &&
              a.client.toolsListError &&
              r(Box, {
                flexDirection: "column",
                children: [
                  e(Text, { bold: !0, children: "Issue: " }),
                  e(Text, { dimColor: !0, children: a.client.toolsListError }),
                ],
              }),
          ],
        }),
        se && e(Box, { children: e(ErrorMessage, { error: se }) }),
        Oe.length > 0 &&
          e(Box, {
            children: e(ve, {
              options: Oe,
              defaultFocusValue: bt,
              onChange: async (te) => {
                if (
                  isUnattendedBgSession() &&
                  (te === "auth" ||
                    te === "reauth" ||
                    te === "clear-auth" ||
                    te === "claudeai-auth" ||
                    te === "claudeai-clear-auth")
                ) {
                  fe(MIt);
                  return;
                }
                switch (te) {
                  case "tools":
                    v();
                    break;
                  case "auth":
                  case "reauth":
                    await Ce();
                    break;
                  case "clear-auth":
                    await ke();
                    break;
                  case "claudeai-auth":
                    await it();
                    break;
                  case "claudeai-clear-auth":
                    Ve();
                    break;
                  case "reconnectMcpServer":
                    pt(!0);
                    try {
                      let Ee = await yt(a.name);
                      if (a.config.type === "claudeai-proxy")
                        logEvent("tengu_claudeai_mcp_reconnect", {
                          success: Ee.client.type === "connected",
                        });
                      let { message: me } = buildMcpReconnectResult(
                        Ee,
                        a.name,
                        { persistsOffBox: mayHaveRemoteClient(j) },
                        { hasHeadersHelper: _t },
                      );
                      I(me);
                    } catch (Ee) {
                      if (a.config.type === "claudeai-proxy")
                        logEvent("tengu_claudeai_mcp_reconnect", { success: !1 });
                      I(formatMcpReconnectError(Ee, a.name, { persistsOffBox: mayHaveRemoteClient(j) }));
                    } finally {
                      pt(!1);
                    }
                    break;
                  case "toggle-enabled":
                    await ne();
                    break;
                  case "back":
                    b();
                    break;
                }
              },
              onCancel: b,
            }),
          }),
      ],
    }),
  });
}
F();
function pb(a, k, v) {
  if (a.type === "disabled")
    return r(Text, { children: [getThemeColor("inactive", v)(figures.radioOff), " disabled"] });
  if (a.type === "connected") {
    if (a.toolsListError)
      return r(Text, {
        children: [
          e(StatusIndicator, { status: "warning", withSpace: !0 }),
          "connected \xB7 tools fetch failed",
        ],
      });
    if (a.capabilities?.tools && k === 0)
      return r(Text, {
        children: [
          e(StatusIndicator, { status: "warning", withSpace: !0 }),
          "connected \xB7 no tools",
        ],
      });
    return r(Text, {
      children: [e(StatusIndicator, { status: "success", withSpace: !0 }), "connected"],
    });
  }
  if (a.type === "pending")
    return r(Text, {
      children: [
        e(StatusIndicator, { status: "pending", withSpace: !0 }),
        "connecting\u2026",
      ],
    });
  return r(Text, {
    children: [e(StatusIndicator, { status: "error", withSpace: !0 }), "failed"],
  });
}
function sit({
  server: a,
  serverToolsCount: k,
  onViewTools: v,
  onCancel: b,
  onComplete: w,
  borderless: R = !1,
}) {
  let A = re(
      (xe, ...we) => w(typeof xe === "string" ? Qn(xe) : xe, ...we),
      [w],
    ),
    Q = useAppStateSession(),
    [I] = useTheme(),
    j = useAppStateSelector((xe) => xe.mcp),
    q = useMcpReconnect(),
    X = useMcpToggleEnabled(),
    [B, K] = d(!1),
    se = re(async () => {
      let xe = a.client.type !== "disabled";
      try {
        (await X(a.name), b());
      } catch (we) {
        A(formatMcpToggleError(we, a.name, xe ? "disable" : "enable", { persistsOffBox: mayHaveRemoteClient(Q) }));
      }
    }, [a.client.type, a.name, X, b, A, Q]),
    fe = capitalize(String(a.name)),
    Fe = getMcpServerCommands(j.commands, a.name).length,
    ze = [];
  if (a.client.type !== "disabled" && k > 0)
    ze.push({ label: "View tools", value: "tools" });
  if (a.client.type !== "disabled")
    ze.push({ label: "Reconnect", value: "reconnectMcpServer" });
  if (
    (ze.push({
      label: a.client.type !== "disabled" ? "Disable" : "Enable",
      value: "toggle-enabled",
    }),
    B)
  )
    return r(de, {
      title: `${fe} MCP Server`,
      onCancel: () => {},
      hideBorder: R,
      hideInputGuide: !0,
      children: [
        r(Text, {
          color: "text",
          children: ["Reconnecting to ", e(Text, { bold: !0, children: a.name })],
        }),
        r(Box, {
          children: [
            e(SpinnerGlyph, {}),
            e(Text, { children: " Restarting MCP server process" }),
          ],
        }),
        e(Text, { dimColor: !0, children: "This may take a few moments." }),
      ],
    });
  return r(de, {
    title: `${fe} MCP Server`,
    onCancel: b,
    hideBorder: R,
    inputGuide: r(DotSeparatedList, {
      children: [
        e(KeybindingHint, { chord: ["up", "down"], action: "navigate" }),
        e(KeybindingHint, { chord: "enter", action: "select" }),
        e(ActionKeybindingHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "back",
        }),
      ],
    }),
    children: [
      r(Box, {
        flexDirection: "column",
        gap: 0,
        children: [
          r(Table, {
            columns: [{ bold: !0 }, {}],
            children: [
              r(Table.Row, {
                children: [e(N, { children: "Status:" }), pb(a.client, k, I)],
              }),
              r(Table.Row, {
                children: [
                  e(N, { children: "Command:" }),
                  e(Text, { dimColor: !0, children: a.config.command }),
                ],
              }),
              a.client.type === "connected" &&
                a.client.protocolEra === "modern" &&
                a.client.negotiatedProtocolVersion &&
                r(Table.Row, {
                  children: [
                    e(N, { children: "Protocol:" }),
                    e(Text, {
                      dimColor: !0,
                      children: sanitizeLogValue(a.client.negotiatedProtocolVersion),
                    }),
                  ],
                }),
              a.config.args &&
                a.config.args.length > 0 &&
                r(Table.Row, {
                  children: [
                    e(N, { children: "Args:" }),
                    e(Text, { dimColor: !0, children: a.config.args.join(" ") }),
                  ],
                }),
              r(Table.Row, {
                children: [
                  e(N, { children: "Config location:" }),
                  e(Text, {
                    dimColor: !0,
                    children: formatMcpScopeLocation(getMcpConfigByName(a.name)?.scope ?? "dynamic"),
                  }),
                ],
              }),
            ],
          }),
          isConnectedMcpServer(a.client) &&
            e(zr, {
              serverToolsCount: k,
              serverPromptsCount: Fe,
              serverResourcesCount: j.resources[a.name]?.length || 0,
            }),
          isConnectedMcpServer(a.client) &&
            k > 0 &&
            r(Box, {
              children: [
                e(Text, { bold: !0, children: "Tools: " }),
                r(Text, { dimColor: !0, children: [k, " ", pluralize(k, "tool")] }),
              ],
            }),
          a.client.type === "connected" &&
            a.client.toolsListError &&
            r(Box, {
              flexDirection: "column",
              children: [
                e(Text, { bold: !0, children: "Issue: " }),
                e(Text, { dimColor: !0, children: a.client.toolsListError }),
              ],
            }),
        ],
      }),
      e(Box, {
        children: e(ve, {
          options: ze,
          onChange: async (xe) => {
            if (xe === "tools") v();
            else if (xe === "reconnectMcpServer") {
              K(!0);
              try {
                let we = await q(a.name),
                  { message: tt } = buildMcpReconnectResult(we, a.name, { persistsOffBox: mayHaveRemoteClient(Q) });
                A?.(tt);
              } catch (we) {
                A?.(formatMcpReconnectError(we, a.name, { persistsOffBox: mayHaveRemoteClient(Q) }));
              } finally {
                K(!1);
              }
            } else if (xe === "toggle-enabled") await se();
          },
          onCancel: b,
        }),
      }),
    ],
  });
}
F();
var Fm = 1000,
  Um = 200;
function sWe(v$) {
  let Kn = _(45),
    { tool: Ft, server: Jr, onBack: Mm } = v$,
    [Ga, mb] = d(""),
    gb,
    Qa;
  if (Kn[0] !== Jr.name || Kn[1] !== Ft) {
    Qa = stripMcpServerPrefix(Ft.name, Jr.name);
    let w$ = Ft.userFacingName ? Ft.userFacingName({}) : Qa;
    gb = normalizeToolDisplayName(w$);
    ((Kn[0] = Jr.name), (Kn[1] = Ft), (Kn[2] = gb), (Kn[3] = Qa));
  } else ((gb = Kn[2]), (Qa = Kn[3]));
  let $m = gb,
    fb;
  if (Kn[4] !== Ft)
    ((fb = Ft.isReadOnly?.({}) ?? !1), (Kn[4] = Ft), (Kn[5] = fb));
  else fb = Kn[5];
  let Dm = fb,
    yb;
  if (Kn[6] !== Ft)
    ((yb = Ft.isDestructive?.({}) ?? !1), (Kn[6] = Ft), (Kn[7] = yb));
  else yb = Kn[7];
  let Bm = yb,
    hb;
  if (Kn[8] !== Ft)
    ((hb = Ft.isOpenWorld?.({}) ?? !1), (Kn[8] = Ft), (Kn[9] = hb));
  else hb = Kn[9];
  let Am = hb,
    kb,
    bb;
  if (Kn[10] !== Ft)
    ((kb = () => {
      let Nm = async function Nm() {
        try {
          let C$ = await Ft.description(
            {},
            {
              isNonInteractiveSession: !1,
              toolPermissionContext: {
                mode: "default",
                additionalWorkingDirectories: new Map(),
                alwaysAllowRules: {},
                alwaysDenyRules: {},
                alwaysAskRules: {},
                isBypassPermissionsModeAvailable: !1,
                mcpPermissionModeOverrides: {},
              },
              tools: [],
            },
          );
          mb(C$);
        } catch {
          mb("Failed to load description");
        }
      };
      Nm();
    }),
      (bb = [Ft]),
      (Kn[10] = Ft),
      (Kn[11] = kb),
      (Kn[12] = bb));
  else ((kb = Kn[11]), (bb = Kn[12]));
  E(kb, bb);
  let Nc;
  if (Kn[13] !== Dm)
    ((Nc = Dm && e(Text, { color: "success", children: " [read-only]" })),
      (Kn[13] = Dm),
      (Kn[14] = Nc));
  else Nc = Kn[14];
  let Lc;
  if (Kn[15] !== Bm)
    ((Lc = Bm && e(Text, { color: "error", children: " [destructive]" })),
      (Kn[15] = Bm),
      (Kn[16] = Lc));
  else Lc = Kn[16];
  let _c;
  if (Kn[17] !== Am)
    ((_c = Am && e(Text, { dimColor: !0, children: " [open-world]" })),
      (Kn[17] = Am),
      (Kn[18] = _c));
  else _c = Kn[18];
  let xb;
  if (Kn[19] !== $m || Kn[20] !== Nc || Kn[21] !== Lc || Kn[22] !== _c)
    ((xb = r(N, { children: [$m, Nc, Lc, _c] })),
      (Kn[19] = $m),
      (Kn[20] = Nc),
      (Kn[21] = Lc),
      (Kn[22] = _c),
      (Kn[23] = xb));
  else xb = Kn[23];
  let Lm = xb,
    Sb;
  if (Kn[24] === MEMO_CACHE_SENTINEL)
    ((Sb = e(ActionKeybindingHint, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "go back",
    })),
      (Kn[24] = Sb));
  else Sb = Kn[24];
  let vb;
  if (Kn[25] === MEMO_CACHE_SENTINEL)
    ((vb = e(Text, { bold: !0, children: "Tool name: " })), (Kn[25] = vb));
  else vb = Kn[25];
  let Fc;
  if (Kn[26] !== Qa)
    ((Fc = r(Box, { children: [vb, e(Text, { dimColor: !0, children: Qa })] })),
      (Kn[26] = Qa),
      (Kn[27] = Fc));
  else Fc = Kn[27];
  let wb;
  if (Kn[28] === MEMO_CACHE_SENTINEL)
    ((wb = e(Text, { bold: !0, children: "Full name: " })), (Kn[28] = wb));
  else wb = Kn[28];
  let Uc;
  if (Kn[29] !== Ft.name)
    ((Uc = r(Box, { children: [wb, e(Text, { dimColor: !0, children: Ft.name })] })),
      (Kn[29] = Ft.name),
      (Kn[30] = Uc));
  else Uc = Kn[30];
  let Vc;
  if (Kn[31] !== Ga)
    ((Vc =
      Ga &&
      r(Box, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          e(Text, { bold: !0, children: "Description:" }),
          e(Text, { wrap: "wrap", children: truncateWithCharCount(Ga, Fm) }),
          Ga.length > MAX_MCP_TEXT_LENGTH &&
            r(Text, {
              dimColor: !0,
              children: [
                "The model receives only about the first",
                " ",
                MAX_MCP_TEXT_LENGTH,
                " characters.",
              ],
            }),
        ],
      })),
      (Kn[31] = Ga),
      (Kn[32] = Vc));
  else Vc = Kn[32];
  let jc;
  if (Kn[33] !== Ft.inputJSONSchema)
    ((jc =
      Ft.inputJSONSchema &&
      Ft.inputJSONSchema.properties &&
      Object.keys(Ft.inputJSONSchema.properties).length > 0 &&
      r(Box, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          e(Text, { bold: !0, children: "Parameters:" }),
          e(Box, {
            marginLeft: 2,
            flexDirection: "column",
            children: Object.entries(Ft.inputJSONSchema.properties).map(
              (Xr) => {
                let [_m, vi] = Xr;
                let P$ = Ft.inputJSONSchema?.required?.includes(_m);
                return r(
                  BulletItem,
                  {
                    children: [
                      _m,
                      e(DimParenthetical, { when: P$ ?? !1, children: "required" }),
                      ":",
                      " ",
                      e(Text, {
                        dimColor: !0,
                        children:
                          typeof vi === "object" && vi && "type" in vi
                            ? String(vi.type)
                            : "unknown",
                      }),
                      typeof vi === "object" &&
                        vi &&
                        "description" in vi &&
                        r(Text, {
                          dimColor: !0,
                          children: [" - ", truncateWithCharCount(String(vi.description), Um)],
                        }),
                    ],
                  },
                  _m,
                );
              },
            ),
          }),
        ],
      })),
      (Kn[33] = Ft.inputJSONSchema),
      (Kn[34] = jc));
  else jc = Kn[34];
  let Xr;
  if (Kn[35] !== Fc || Kn[36] !== Uc || Kn[37] !== Vc || Kn[38] !== jc)
    ((Xr = r(Box, { flexDirection: "column", children: [Fc, Uc, Vc, jc] })),
      (Kn[35] = Fc),
      (Kn[36] = Uc),
      (Kn[37] = Vc),
      (Kn[38] = jc),
      (Kn[39] = Xr));
  else Xr = Kn[39];
  let Cb;
  if (Kn[40] !== Mm || Kn[41] !== Jr.name || Kn[42] !== Xr || Kn[43] !== Lm)
    ((Cb = e(de, {
      title: Lm,
      subtitle: Jr.name,
      onCancel: Mm,
      inputGuide: Sb,
      children: Xr,
    })),
      (Kn[40] = Mm),
      (Kn[41] = Jr.name),
      (Kn[42] = Xr),
      (Kn[43] = Lm),
      (Kn[44] = Cb));
  else Cb = Kn[44];
  return Cb;
}
F();
function $b(X$) {
  return X$.mcp.tools;
}
function Db(Z$, tD) {
  let nD = Z$.mcpInfo?.effectiveMaxPermission === "blocked" ? 1 : 0;
  let oD = tD.mcpInfo?.effectiveMaxPermission === "blocked" ? 1 : 0;
  return nD - oD;
}
function Bb(iD) {
  return iD.mcpInfo?.effectiveMaxPermission === "blocked";
}
function iWe(q$) {
  let wi = _(24),
    { server: Yo, onSelectTool: Vm, onBack: Zr } = q$,
    Hm = useAppStateSelector($b),
    Km;
  bb0: {
    if (!isConnectedMcpServer(Yo.client)) {
      let Ci;
      if (wi[0] === MEMO_CACHE_SENTINEL) ((Ci = []), (wi[0] = Ci));
      else Ci = wi[0];
      Km = Ci;
      break bb0;
    }
    let Ci;
    if (wi[1] !== Hm || wi[2] !== Yo.name)
      ((Ci = getMcpServerTools(Hm, Yo.name).sort(Db)),
        (wi[1] = Hm),
        (wi[2] = Yo.name),
        (wi[3] = Ci));
    else Ci = wi[3];
    Km = Ci;
  }
  let po = Km,
    Ya = countMatching(po, Bb),
    Ci;
  if (wi[4] !== Yo.name || wi[5] !== po) {
    let Ja;
    if (wi[7] !== Yo.name)
      ((Ja = (er, Pb) => {
        let z$ = stripMcpServerPrefix(er.name, Yo.name);
        let W$ = er.userFacingName ? er.userFacingName({}) : z$;
        let Tb = normalizeToolDisplayName(W$);
        let G$ = er.isReadOnly?.({}) ?? !1;
        let Q$ = er.isDestructive?.({}) ?? !1;
        let Y$ = er.isOpenWorld?.({}) ?? !1;
        let Ib = er.mcpInfo?.effectiveMaxPermission;
        if (Ib === "blocked") {
          return {
            label: Tb,
            value: Pb.toString(),
            disabled: !0,
            description: "disabled by your organization",
            descriptionColor: "warning",
          };
        }
        let ea = [];
        if (G$) ea.push("read-only");
        if (Q$) ea.push("destructive");
        if (Y$) ea.push("open-world");
        if (Ib === "ask") ea.push("ask-only");
        return {
          label: Tb,
          value: Pb.toString(),
          description: ea.length > 0 ? ea.join(", ") : void 0,
        };
      }),
        (wi[7] = Yo.name),
        (wi[8] = Ja));
    else Ja = wi[8];
    Ci = po.map(Ja);
    ((wi[4] = Yo.name), (wi[5] = po), (wi[6] = Ci));
  } else Ci = wi[6];
  let qm = Ci,
    Hc = po.length - Ya,
    Ja;
  if (wi[9] !== Ya || wi[10] !== Hc || wi[11] !== po.length)
    ((Ja =
      Ya > 0
        ? `${Hc} ${pluralize(Hc, "tool")} \xB7 ${Ya} disabled by your organization`
        : `${po.length} ${pluralize(po.length, "tool")}`),
      (wi[9] = Ya),
      (wi[10] = Hc),
      (wi[11] = po.length),
      (wi[12] = Ja));
  else Ja = wi[12];
  let zm = Ja;
  const Wm = `Tools for ${Yo.name}`;
  let Rb;
  if (wi[13] === MEMO_CACHE_SENTINEL)
    ((Rb = r(DotSeparatedList, {
      children: [
        e(KeybindingHint, { chord: ["up", "down"], action: "navigate" }),
        e(KeybindingHint, { chord: "enter", action: "select" }),
        e(ActionKeybindingHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "back",
        }),
      ],
    })),
      (wi[13] = Rb));
  else Rb = wi[13];
  let Kc;
  if (wi[14] !== Zr || wi[15] !== Vm || wi[16] !== po || wi[17] !== qm)
    ((Kc =
      po.length === 0
        ? e(EmptyStateMessage, { children: "No tools available" })
        : e(ve, {
            options: qm,
            onChange: (J$) => {
              let Eb = po[parseInt(J$)];
              if (Eb) Vm(Eb);
            },
            onCancel: Zr,
          })),
      (wi[14] = Zr),
      (wi[15] = Vm),
      (wi[16] = po),
      (wi[17] = qm),
      (wi[18] = Kc));
  else Kc = wi[18];
  let Mb;
  if (wi[19] !== Zr || wi[20] !== zm || wi[21] !== Wm || wi[22] !== Kc)
    ((Mb = e(de, {
      title: Wm,
      subtitle: zm,
      onCancel: Zr,
      inputGuide: Rb,
      children: Kc,
    })),
      (wi[19] = Zr),
      (wi[20] = zm),
      (wi[21] = Wm),
      (wi[22] = Kc),
      (wi[23] = Mb));
  else Mb = wi[23];
  return Mb;
}
F();
var Ab = new Set(["good", "warn", "poor"]);
function Ob(a) {
  return typeof a === "string" && Ab.has(a);
}
function Nb(a, k) {
  return ((a.skillHealthMap ??= Lb(k)), a.skillHealthMap);
}
async function Lb(a) {
  if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_skills_dashboard_enabled", !1)) return null;
  try {
    let k = await httpClient.get("/api/claude_code/skills", {
      auth: "async",
      timeout: 5000,
      validateStatus: () => !0,
      credentials: a,
    });
    if (!k.ok) return (logForDebugging(`Skill health fetch skipped: ${k.reason}`), null);
    if (k.status >= 400)
      return (logForDebugging(`Skill health fetch skipped: status ${k.status}`), null);
    let v = k.data?.skills;
    if (!Array.isArray(v)) return null;
    let b = new Map();
    for (let w of v)
      if (w.skill_name && Ob(w.health)) b.set(w.skill_name, w.health);
    return b;
  } catch (k) {
    return (logForDebugging(`Skill health fetch skipped: ${k}`), null);
  }
}
function Gm() {
  let { credentials: a } = useStorageV5Context(),
    [k, v] = d(null);
  return (
    E(() => {
      let b = !1;
      return (
        Nb(getApiRequestState(), a).then((w) => {
          if (!b && w) v(w);
        }),
        () => {
          b = !0;
        }
      );
    }, [a]),
    k
  );
}
import { readFile as _b } from "fs/promises";
import { join as Fb, resolve, sep as Ub } from "path";
async function Jm(a, k) {
  let v = Fb(k.path, "..", ".claude-plugin", "marketplace.json");
  if (isHoverRestEnabled() && a !== void 0 && (await Vb(a, k))) {
    let b = await readLocalMarketplaceFile(a, "workspace", v);
    if ("absent" in b) throw createEnoentError(v);
    return b.text;
  }
  return _b(v, "utf-8");
}
async function Vb(a, k) {
  let v = getExistingSessionPluginCacheDir();
  if (Ym(getPluginsDir(), k.path) || (v !== null && Ym(v, k.path))) return !1;
  let b = getNonMarketplacePluginSource(k.source);
  if (b !== void 0) return b === INLINE_PLUGIN_SOURCE;
  let w = getPluginMarketplace(k.source);
  if (w === void 0) return !1;
  let R = (await getKnownMarketplacesOrEmpty(a))[w];
  return R !== void 0 && isLocalMarketplaceSource(R.source) && findContainingSeedDir(R.installLocation) === void 0;
}
function Ym(a, k) {
  let v = resolve(a),
    b = resolve(k);
  return b === v || b.startsWith(v + Ub);
}
F();
function Xm(a, k) {
  let [v, b] = d(a);
  return (
    useOnSettingsChange(() => {
      let w = a();
      b((R) => (k(R, w) ? R : w));
    }),
    v
  );
}
function Jo(a) {
  return wr(jb(a));
}
function jb(a) {
  switch (a.type) {
    case "path-not-found":
      return `${formatQuotedDisplayText(a.component)} path not found: ${toDisplayText(a.path)}`;
    case "path-traversal":
      return `${formatQuotedDisplayText(a.component)} path escapes plugin directory: ${toDisplayText(a.path)}${a.reason ? ` \u2014 ${toDisplayText(a.reason)}` : ""}`;
    case "git-auth-failed":
      return `Git ${a.authType.toUpperCase()} authentication failed for ${toDisplayText(a.gitUrl)}`;
    case "git-timeout":
      return `Git ${formatQuotedDisplayText(a.operation)} timed out for ${toDisplayText(a.gitUrl)}`;
    case "network-error":
      return `Network error accessing ${toDisplayText(a.url)}${a.details ? `: ${formatQuotedDisplayText(a.details)}` : ""}`;
    case "manifest-parse-error":
      return `Failed to parse manifest at ${toDisplayText(a.manifestPath)}: ${formatQuotedDisplayText(a.parseError)}`;
    case "manifest-validation-error":
      return `Invalid manifest at ${toDisplayText(a.manifestPath)}: ${formatQuotedDisplayText(a.validationErrors.join(", "))}`;
    case "plugin-not-found":
      return `Plugin "${formatQuotedDisplayText(a.pluginId)}" not found in marketplace "${formatQuotedDisplayText(a.marketplace)}"`;
    case "marketplace-not-found":
      return a.registryReadFailed
        ? `Marketplace "${formatQuotedDisplayText(a.marketplace)}": the marketplace registry could not be read`
        : a.registrationHidden
          ? `Marketplace "${formatQuotedDisplayText(a.marketplace)}" is registered but was refused (see the debug log)`
          : `Marketplace "${formatQuotedDisplayText(a.marketplace)}" not found`;
    case "marketplace-load-failed":
      return `Failed to load marketplace "${formatQuotedDisplayText(a.marketplace)}": ${formatQuotedDisplayText(a.reason)}`;
    case "mcp-config-invalid":
      return `Invalid MCP server config for "${formatQuotedDisplayText(a.serverName)}": ${formatQuotedDisplayText(a.validationError)}`;
    case "hook-load-failed":
      return `Failed to load hooks from ${toDisplayText(a.hookPath)}: ${formatQuotedDisplayText(a.reason)}`;
    case "component-load-failed":
      return `Failed to load ${formatQuotedDisplayText(a.component)} from ${toDisplayText(a.path)}: ${formatQuotedDisplayText(a.reason)}`;
    case "mcpb-download-failed":
      return `Failed to download MCPB from ${toDisplayText(a.url)}: ${formatQuotedDisplayText(a.reason)}`;
    case "mcpb-extract-failed":
      return `Failed to extract MCPB ${toDisplayText(a.mcpbPath)}: ${formatQuotedDisplayText(a.reason)}`;
    case "mcpb-invalid-manifest":
      return `MCPB manifest invalid at ${toDisplayText(a.mcpbPath)}: ${formatQuotedDisplayText(a.validationError)}`;
    case "marketplace-blocked-by-policy":
      return a.blockedByBlocklist
        ? `Marketplace "${formatQuotedDisplayText(a.marketplace)}" is blocked by enterprise policy`
        : `Marketplace "${formatQuotedDisplayText(a.marketplace)}" is not in the allowed marketplace list`;
    case "dependency-unsatisfied":
      return a.reason === "not-enabled"
        ? `Dependency "${formatQuotedDisplayText(a.dependency)}" is disabled`
        : `Dependency "${formatQuotedDisplayText(a.dependency)}" is not installed`;
    case "dependency-version-unsatisfied":
      return `Requires "${formatQuotedDisplayText(a.dependency)}" ${formatQuotedDisplayText(a.required)}, installed ${formatQuotedDisplayText(a.installed ?? "version unknown")}`;
    case "lsp-config-invalid":
      return `Invalid LSP server config for "${formatQuotedDisplayText(a.serverName)}": ${formatQuotedDisplayText(a.validationError)}`;
    case "lsp-server-start-failed":
      return `LSP server "${formatQuotedDisplayText(a.serverName)}" failed to start: ${formatQuotedDisplayText(a.reason)}`;
    case "lsp-server-crashed":
      return a.signal
        ? `LSP server "${formatQuotedDisplayText(a.serverName)}" crashed with signal ${a.signal}`
        : `LSP server "${formatQuotedDisplayText(a.serverName)}" crashed with exit code ${a.exitCode ?? "unknown"}`;
    case "lsp-request-timeout":
      return `LSP server "${formatQuotedDisplayText(a.serverName)}" timed out on ${formatQuotedDisplayText(a.method)} after ${a.timeoutMs}ms`;
    case "lsp-request-failed":
      return `LSP server "${formatQuotedDisplayText(a.serverName)}" ${formatQuotedDisplayText(a.method)} failed: ${formatQuotedDisplayText(a.error)}`;
    case "plugin-cache-miss":
      return `Plugin "${formatQuotedDisplayText(a.plugin)}" not cached at ${toDisplayText(a.installPath)}`;
    case "plugin-not-installed":
      return `Plugin "${formatQuotedDisplayText(a.plugin)}" is enabled in project settings but isn't installed here`;
    case "autoupdate-deferred-entry-helper":
    case "autoupdate-disabled-by-policy":
      return a.message;
    case "autoupdate-blocked-by-pinner": {
      let v = a.heldAt ? ` at ${toDisplayText(a.heldAt)}` : "",
        b =
          a.disabledPinners.length > 0
            ? ` (${formatQuotedDisplayText(a.disabledPinners.join(", "))} ${a.disabledPinners.length === 1 ? "is" : "are"} disabled)`
            : "";
      return `Autoupdate held${v} \u2014 version constraint from ${formatQuotedDisplayText(a.blockedBy.join(", "))}${b}`;
    }
    case "generic-error":
      return truncateWithEllipsis(a.error);
  }
  return formatPluginError(a);
}
function ii(a) {
  let k = Hb(a);
  return k === null ? null : wr(k);
}
function Hb(a) {
  switch (a.type) {
    case "path-not-found":
      return "Check that the path in your manifest or marketplace config is correct";
    case "path-traversal":
      return a.reason
        ? "Files a plugin declares must resolve to a location inside the plugin (or, for a local marketplace, inside the marketplace). If a symlink points elsewhere, replace it with a copy of the file or point Claude Code at the directory that holds the real files; if the path could not be resolved, check that every link in it exists and is readable"
        : 'Paths in plugin.json must not use ".." to reference files outside the plugin directory';
    case "git-auth-failed":
      return a.authType === "ssh"
        ? "Configure SSH keys or use HTTPS URL instead"
        : "Configure credentials or use SSH URL instead";
    case "git-timeout":
    case "network-error":
      return "Check your internet connection and try again";
    case "manifest-parse-error":
      return "Check manifest file syntax in the plugin directory";
    case "manifest-validation-error":
      return "Check manifest file follows the required schema";
    case "plugin-not-found":
      return `Plugin may not exist in marketplace "${formatQuotedDisplayText(a.marketplace)}"`;
    case "marketplace-not-found":
      return a.registryReadFailed
        ? "Check known_marketplaces.json in the plugins directory, then run /reload-plugins"
        : a.registrationHidden
          ? "Remove and re-add the marketplace"
          : a.availableMarketplaces.length > 0
            ? `Available marketplaces: ${formatQuotedDisplayText(a.availableMarketplaces.join(", "))}`
            : "Add the marketplace first using /plugin marketplace add";
    case "mcp-config-invalid":
      return "Check MCP server configuration in .mcp.json or manifest";
    case "hook-load-failed":
      return "Check the plugin's hooks configuration and that its hooks file is readable";
    case "component-load-failed":
      return `Check ${formatQuotedDisplayText(a.component)} directory structure and file permissions`;
    case "mcpb-download-failed":
      return "Check your internet connection and URL accessibility";
    case "mcpb-extract-failed":
      return "Verify the MCPB file is valid and not corrupted";
    case "mcpb-invalid-manifest":
      return "Contact the plugin author about the invalid manifest";
    case "marketplace-blocked-by-policy":
      if (a.blockedByBlocklist)
        return "This marketplace source is explicitly blocked by your administrator";
      return a.allowedSources.length > 0
        ? `Allowed sources: ${formatQuotedDisplayText(a.allowedSources.join(", "))}`
        : "Contact your administrator to configure allowed marketplace sources";
    case "dependency-unsatisfied":
      return a.reason === "not-enabled"
        ? `Enable "${formatQuotedDisplayText(a.dependency)}" or uninstall "${formatQuotedDisplayText(a.plugin)}"`
        : `Install "${formatQuotedDisplayText(a.dependency)}" or uninstall "${formatQuotedDisplayText(a.plugin)}"`;
    case "dependency-version-unsatisfied":
      return `Update "${formatQuotedDisplayText(a.dependency)}" to satisfy ${formatQuotedDisplayText(a.required)}, or uninstall "${formatQuotedDisplayText(a.plugin)}"`;
    case "lsp-config-invalid":
      return "Check LSP server configuration in the plugin manifest";
    case "lsp-server-start-failed":
    case "lsp-server-crashed":
    case "lsp-request-timeout":
    case "lsp-request-failed":
      return "Check LSP server logs with --debug for details";
    case "plugin-cache-miss":
      return "Run /plugin to refresh the plugin cache";
    case "plugin-not-installed": {
      let v = buildCliCommand("plugin install", a.source, "--scope project");
      return v
        ? `Run \`${v}\` to install it for this project`
        : "Install it at project scope to fix this";
    }
    case "autoupdate-deferred-entry-helper":
    case "autoupdate-disabled-by-policy":
      return null;
    case "autoupdate-blocked-by-pinner": {
      let v =
        a.disabledPinners.length > 0 ? a.disabledPinners[0] : a.blockedBy[0];
      return v
        ? `Update or uninstall "${formatQuotedDisplayText(v)}" to unblock${a.disabledPinners.length > 0 ? " (it is currently disabled)" : ""}`
        : null;
    }
    case "marketplace-load-failed":
      return a.reason === "cache-miss"
        ? a.catalogReadFailed
          ? "The cached marketplace catalog could not be read; run /reload-plugins to refresh it"
          : "Run /reload-plugins to refresh the marketplace cache"
        : null;
    case "generic-error":
      return null;
  }
  let k = a;
  return null;
}
F();
function Xb(KD) {
  return KD.plugins.commands;
}
function Zb(qD) {
  return qD.mcp.commands;
}
function ex(zD) {
  return zD.mainLoopModel;
}
function tx(tg) {
  return r(
    Box,
    {
      flexDirection: "row",
      children: [
        e(Box, {
          width: 32,
          children: r(Text, { dimColor: !0, children: ["/", tg.name] }),
        }),
        r(Text, { dimColor: !0, children: ["~", tg.approxTokens, " tok/turn"] }),
      ],
    },
    tg.name,
  );
}
function nx(GD) {
  return GD.count > 0;
}
function ox(na) {
  return r(
    Box,
    {
      flexDirection: "row",
      children: [
        e(Box, {
          width: 32,
          children: r(Text, { dimColor: !0, children: ["/", na.name] }),
        }),
        r(Text, {
          dimColor: !0,
          children: [
            na.count,
            " ",
            pluralize(na.count, "use"),
            na.lastUsedAt !== null ? ` \xB7 last ${ag(na.lastUsedAt)}` : "",
          ],
        }),
      ],
    },
    na.name,
  );
}
function Xa(a, k) {
  let v = getGlobalConfig().skillUsage ?? {},
    b = [];
  for (let w of k) {
    if (w.type !== "prompt" || w.pluginInfo?.pluginManifest.name !== a)
      continue;
    let R =
      v[w.name] ?? (w.unqualifiedName != null ? v[w.unqualifiedName] : void 0);
    b.push({
      name: w.name,
      count: R?.usageCount ?? 0,
      lastUsedAt: R?.lastUsedAt ?? null,
    });
  }
  return (
    b.sort((w, R) => R.count - w.count),
    {
      skills: b,
      totalCount: b.reduce((w, R) => w + R.count, 0),
      skillCount: b.length,
    }
  );
}
function ag(a) {
  let k = Math.max(0, Math.floor((Date.now() - a) / 86400000));
  if (k === 0) return "today";
  if (k === 1) return "yesterday";
  return `${k}d ago`;
}
function Qc(jD) {
  let tr = _(20),
    { plugin: Mo } = jD,
    ta = useAppStateSelector(Xb),
    Zm = useAppStateSelector(Zb),
    eg = useAppStateSelector(ex),
    Kb;
  if (
    tr[0] !== Zm ||
    tr[1] !== eg ||
    tr[2] !== Mo.manifest.name ||
    tr[3] !== ta
  ) {
    let nr;
    if (tr[5] !== Mo.manifest.name)
      ((nr = (HD) => HD.pluginName === Mo.manifest.name),
        (tr[5] = Mo.manifest.name),
        (tr[6] = nr));
    else nr = tr[6];
    Kb = computeSkillUsageByPlugin([...ta, ...Zm], bytesPerTokenForModel(eg ?? void 0)).byPlugin.find(nr);
    ((tr[0] = Zm),
      (tr[1] = eg),
      (tr[2] = Mo.manifest.name),
      (tr[3] = ta),
      (tr[4] = Kb));
  } else Kb = tr[4];
  let Pi = Kb,
    nr;
  if (tr[7] !== Mo.manifest.name)
    ((nr = r(Text, { bold: !0, children: [Mo.manifest.name, " \xB7 Usage"] })),
      (tr[7] = Mo.manifest.name),
      (tr[8] = nr));
  else nr = tr[8];
  let qb, zb;
  if (tr[9] === MEMO_CACHE_SENTINEL)
    ((qb = e(Text, { bold: !0, children: "Skill-listing footprint" })),
      (zb = e(Text, {
        dimColor: !0,
        wrap: "wrap",
        children:
          "What this plugin's skill descriptions add to the system prompt (cached input after the first turn). Agents and MCP tools not yet counted.",
      })),
      (tr[9] = qb),
      (tr[10] = zb));
  else ((qb = tr[9]), (zb = tr[10]));
  let qc;
  if (tr[11] !== Pi)
    ((qc = r(Box, {
      flexDirection: "column",
      children: [
        qb,
        zb,
        Pi && Pi.skills.length > 0
          ? r(Box, {
              flexDirection: "column",
              marginTop: 1,
              children: [
                Pi.skills.map(tx),
                r(Box, {
                  flexDirection: "row",
                  marginTop: 1,
                  children: [
                    e(Box, { width: 32, children: e(Text, { children: "Total" }) }),
                    r(Text, {
                      children: [
                        Pi.skillCount,
                        " ",
                        pluralize(Pi.skillCount, "skill"),
                        " \xB7 ~",
                        Pi.approxTokens,
                        " tok/turn",
                      ],
                    }),
                  ],
                }),
              ],
            })
          : e(Text, {
              dimColor: !0,
              children: "No model-invocable skills loaded for this plugin",
            }),
      ],
    })),
      (tr[11] = Pi),
      (tr[12] = qc));
  else qc = tr[12];
  let zc;
  if (tr[13] !== Mo || tr[14] !== ta)
    ((zc = e(Wc, { plugin: Mo, commands: ta })),
      (tr[13] = Mo),
      (tr[14] = ta),
      (tr[15] = zc));
  else zc = tr[15];
  let Wb;
  if (tr[16] !== nr || tr[17] !== qc || tr[18] !== zc)
    ((Wb = r(Box, { flexDirection: "column", gap: 1, children: [nr, qc, zc] })),
      (tr[16] = nr),
      (tr[17] = qc),
      (tr[18] = zc),
      (tr[19] = Wb));
  else Wb = tr[19];
  return Wb;
}
function Wc(WD) {
  let rg = _(9),
    { plugin: ng, commands: og } = WD,
    Gb;
  if (rg[0] !== og || rg[1] !== ng.manifest.name)
    ((Gb = Xa(ng.manifest.name, og)),
      (rg[0] = og),
      (rg[1] = ng.manifest.name),
      (rg[2] = Gb));
  else Gb = rg[2];
  let xo = Gb,
    Qb,
    Yb;
  if (rg[3] === MEMO_CACHE_SENTINEL)
    ((Qb = e(Text, { bold: !0, children: "Activity" })),
      (Yb = e(Text, {
        dimColor: !0,
        wrap: "wrap",
        children:
          "Skill invocations on this machine. See /usage for cost attribution.",
      })),
      (rg[3] = Qb),
      (rg[4] = Yb));
  else ((Qb = rg[3]), (Yb = rg[4]));
  let Jb;
  if (rg[5] !== xo.skillCount || rg[6] !== xo.skills || rg[7] !== xo.totalCount)
    ((Jb = r(Box, {
      flexDirection: "column",
      children: [
        Qb,
        Yb,
        xo.totalCount === 0
          ? e(Text, { dimColor: !0, children: "No activity yet" })
          : r(Box, {
              flexDirection: "column",
              marginTop: 1,
              children: [
                xo.skills.filter(nx).map(ox),
                r(Box, {
                  flexDirection: "row",
                  marginTop: 1,
                  children: [
                    e(Box, { width: 32, children: e(Text, { children: "Total" }) }),
                    r(Text, {
                      children: [
                        xo.totalCount,
                        " ",
                        pluralize(xo.totalCount, "use"),
                        " across",
                        " ",
                        xo.skillCount,
                        " ",
                        pluralize(xo.skillCount, "skill"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
      ],
    })),
      (rg[5] = xo.skillCount),
      (rg[6] = xo.skills),
      (rg[7] = xo.totalCount),
      (rg[8] = Jb));
  else Jb = rg[8];
  return Jb;
}
var mg = { good: "success", warn: "warning", poor: "error" },
  gg = {
    on: { glyph: figures.tick, label: "on", color: "success" },
    "name-only": { glyph: figures.bullet, label: "name-only" },
    "user-invocable-only": {
      glyph: figures.circle,
      label: "user-only",
      color: "warning",
    },
    off: { glyph: figures.cross, label: "off", color: "error" },
  };
function Jc(lB) {
  let $e = _(207),
    { item: be, isSelected: lt, health: Yc } = lB,
    [mt] = useTheme();
  if (be.type === "plugin") {
    let $o;
    let Do;
    if (be.pendingToggle) {
      if ($e[0] !== be.pendingToggle || $e[1] !== mt)
        (($o = getThemeColor("suggestion", mt)(figures.arrowRight)),
          (Do =
            be.pendingToggle === "will-enable"
              ? "will enable"
              : "will disable"),
          ($e[0] = be.pendingToggle),
          ($e[1] = mt),
          ($e[2] = $o),
          ($e[3] = Do));
      else (($o = $e[2]), (Do = $e[3]));
    } else if (be.errorCount > 0) {
      if ($e[4] !== be.errorCount || $e[5] !== mt)
        (($o = getThemeColor("error", mt)(figures.cross)),
          (Do = `${be.errorCount} ${pluralize(be.errorCount, "error")}`),
          ($e[4] = be.errorCount),
          ($e[5] = mt),
          ($e[6] = $o),
          ($e[7] = Do));
      else (($o = $e[6]), (Do = $e[7]));
    } else if (!be.isEnabled) {
      if ($e[8] !== mt)
        (($o = getThemeColor("inactive", mt)(figures.radioOff)),
          (Do = "disabled"),
          ($e[8] = mt),
          ($e[9] = $o),
          ($e[10] = Do));
      else (($o = $e[9]), (Do = $e[10]));
    } else if ($e[11] !== mt)
      (($o = getThemeColor("success", mt)(figures.tick)),
        (Do = "enabled"),
        ($e[11] = mt),
        ($e[12] = $o),
        ($e[13] = Do));
    else (($o = $e[12]), (Do = $e[13]));
    const Ln = lt ? "suggestion" : void 0;
    let mn;
    if ($e[14] !== be) ((mn = getPluginDisplayName(be)), ($e[14] = be), ($e[15] = mn));
    else mn = $e[15];
    let on;
    if ($e[16] !== Ln || $e[17] !== mn)
      ((on = e(Text, { color: Ln, children: mn })),
        ($e[16] = Ln),
        ($e[17] = mn),
        ($e[18] = on));
    else on = $e[18];
    let gn;
    if ($e[19] !== Yc || $e[20] !== mt)
      ((gn = Yc && r(Text, { children: [" ", getThemeColor(mg[Yc], mt)(figures.bullet)] })),
        ($e[19] = Yc),
        ($e[20] = mt),
        ($e[21] = gn));
    else gn = $e[21];
    const vn = !lt;
    let wn;
    if ($e[22] === MEMO_CACHE_SENTINEL)
      ((wn = e(BackgroundText, {
        color: "userMessageBackground",
        textColor: "text",
        children: "Plugin",
      })),
        ($e[22] = wn));
    else wn = $e[22];
    let jt;
    if ($e[23] !== vn)
      ((jt = r(Text, { dimColor: vn, children: [" ", wn] })),
        ($e[23] = vn),
        ($e[24] = jt));
    else jt = $e[24];
    let rn;
    if ($e[25] !== be.marketplace)
      ((rn = r(Text, { dimColor: !0, children: [" \xB7 ", be.marketplace] })),
        ($e[25] = be.marketplace),
        ($e[26] = rn));
    else rn = $e[26];
    const Ht = !lt;
    let Xt;
    if ($e[27] !== $o || $e[28] !== Ht)
      ((Xt = r(Text, { dimColor: Ht, children: [" \xB7 ", $o, " "] })),
        ($e[27] = $o),
        ($e[28] = Ht),
        ($e[29] = Xt));
    else Xt = $e[29];
    const Kt = !lt;
    let Zt;
    if ($e[30] !== Do || $e[31] !== Kt)
      ((Zt = e(Text, { dimColor: Kt, children: Do })),
        ($e[30] = Do),
        ($e[31] = Kt),
        ($e[32] = Zt));
    else Zt = $e[32];
    let In;
    if ($e[33] !== be.activity)
      ((In =
        be.activity && be.activity.skillCount > 0
          ? r(Text, {
              dimColor: !0,
              children: [
                " ",
                "\xB7 ",
                be.activity.skillCount,
                " ",
                pluralize(be.activity.skillCount, "skill"),
                " \xB7",
                " ",
                be.activity.totalCount,
                " ",
                pluralize(be.activity.totalCount, "use"),
              ],
            })
          : null),
        ($e[33] = be.activity),
        ($e[34] = In));
    else In = $e[34];
    let Gn;
    if ($e[35] !== be.unusedDays)
      ((Gn =
        be.unusedDays !== void 0 &&
        r(Text, {
          dimColor: !0,
          children: [
            " ",
            "\xB7 not used in ",
            be.unusedDays,
            " ",
            pluralize(be.unusedDays, "day"),
          ],
        })),
        ($e[35] = be.unusedDays),
        ($e[36] = Gn));
    else Gn = $e[36];
    let So;
    if (
      $e[37] !== Xt ||
      $e[38] !== Zt ||
      $e[39] !== In ||
      $e[40] !== Gn ||
      $e[41] !== on ||
      $e[42] !== gn ||
      $e[43] !== jt ||
      $e[44] !== rn
    )
      ((So = r(Text, { children: [on, gn, jt, rn, Xt, Zt, In, Gn] })),
        ($e[37] = Xt),
        ($e[38] = Zt),
        ($e[39] = In),
        ($e[40] = Gn),
        ($e[41] = on),
        ($e[42] = gn),
        ($e[43] = jt),
        ($e[44] = rn),
        ($e[45] = So));
    else So = $e[45];
    let Za;
    if ($e[46] !== lt || $e[47] !== So)
      ((Za = e(nl, { isFocused: lt, styled: !1, children: So })),
        ($e[46] = lt),
        ($e[47] = So),
        ($e[48] = Za));
    else Za = $e[48];
    return Za;
  }
  if (be.type === "flagged-plugin") {
    let Ln;
    if ($e[49] !== mt)
      ((Ln = getThemeColor("warning", mt)(figures.warning)), ($e[49] = mt), ($e[50] = Ln));
    else Ln = $e[50];
    let lg = Ln;
    const mn = lt ? "suggestion" : void 0;
    let on;
    if ($e[51] !== be.name || $e[52] !== mn)
      ((on = e(Text, { color: mn, children: be.name })),
        ($e[51] = be.name),
        ($e[52] = mn),
        ($e[53] = on));
    else on = $e[53];
    const gn = !lt;
    let vn;
    if ($e[54] === MEMO_CACHE_SENTINEL)
      ((vn = e(BackgroundText, {
        color: "userMessageBackground",
        textColor: "text",
        children: "Plugin",
      })),
        ($e[54] = vn));
    else vn = $e[54];
    let wn;
    if ($e[55] !== gn)
      ((wn = r(Text, { dimColor: gn, children: [" ", vn] })),
        ($e[55] = gn),
        ($e[56] = wn));
    else wn = $e[56];
    let jt;
    if ($e[57] !== be.marketplace)
      ((jt = r(Text, { dimColor: !0, children: [" \xB7 ", be.marketplace] })),
        ($e[57] = be.marketplace),
        ($e[58] = jt));
    else jt = $e[58];
    const rn = !lt;
    let Ht;
    if ($e[59] !== lg || $e[60] !== rn)
      ((Ht = r(Text, { dimColor: rn, children: [" \xB7 ", lg, " "] })),
        ($e[59] = lg),
        ($e[60] = rn),
        ($e[61] = Ht));
    else Ht = $e[61];
    const Xt = !lt;
    let Kt;
    if ($e[62] !== Xt)
      ((Kt = e(Text, { dimColor: Xt, children: "removed" })),
        ($e[62] = Xt),
        ($e[63] = Kt));
    else Kt = $e[63];
    let Zt;
    if (
      $e[64] !== Kt ||
      $e[65] !== on ||
      $e[66] !== wn ||
      $e[67] !== jt ||
      $e[68] !== Ht
    )
      ((Zt = r(Text, { children: [on, wn, jt, Ht, Kt] })),
        ($e[64] = Kt),
        ($e[65] = on),
        ($e[66] = wn),
        ($e[67] = jt),
        ($e[68] = Ht),
        ($e[69] = Zt));
    else Zt = $e[69];
    let In;
    if ($e[70] !== lt || $e[71] !== Zt)
      ((In = e(nl, { isFocused: lt, styled: !1, children: Zt })),
        ($e[70] = lt),
        ($e[71] = Zt),
        ($e[72] = In));
    else In = $e[72];
    return In;
  }
  if (be.type === "failed-plugin") {
    let Ln;
    if ($e[73] !== mt)
      ((Ln = getThemeColor("error", mt)(figures.cross)), ($e[73] = mt), ($e[74] = Ln));
    else Ln = $e[74];
    let sg = Ln;
    const mn = be.errorCount;
    let on;
    if ($e[75] !== be.errorCount)
      ((on = pluralize(be.errorCount, "error")),
        ($e[75] = be.errorCount),
        ($e[76] = on));
    else on = $e[76];
    let cg = `failed to load \xB7 ${mn} ${on}`;
    const gn = lt ? "suggestion" : void 0;
    let vn;
    if ($e[77] !== be.name || $e[78] !== gn)
      ((vn = e(Text, { color: gn, children: be.name })),
        ($e[77] = be.name),
        ($e[78] = gn),
        ($e[79] = vn));
    else vn = $e[79];
    const wn = !lt;
    let jt;
    if ($e[80] === MEMO_CACHE_SENTINEL)
      ((jt = e(BackgroundText, {
        color: "userMessageBackground",
        textColor: "text",
        children: "Plugin",
      })),
        ($e[80] = jt));
    else jt = $e[80];
    let rn;
    if ($e[81] !== wn)
      ((rn = r(Text, { dimColor: wn, children: [" ", jt] })),
        ($e[81] = wn),
        ($e[82] = rn));
    else rn = $e[82];
    let Ht;
    if ($e[83] !== be.marketplace)
      ((Ht = r(Text, { dimColor: !0, children: [" \xB7 ", be.marketplace] })),
        ($e[83] = be.marketplace),
        ($e[84] = Ht));
    else Ht = $e[84];
    const Xt = !lt;
    let Kt;
    if ($e[85] !== sg || $e[86] !== Xt)
      ((Kt = r(Text, { dimColor: Xt, children: [" \xB7 ", sg, " "] })),
        ($e[85] = sg),
        ($e[86] = Xt),
        ($e[87] = Kt));
    else Kt = $e[87];
    const Zt = !lt;
    let In;
    if ($e[88] !== cg || $e[89] !== Zt)
      ((In = e(Text, { dimColor: Zt, children: cg })),
        ($e[88] = cg),
        ($e[89] = Zt),
        ($e[90] = In));
    else In = $e[90];
    let Gn;
    if (
      $e[91] !== Kt ||
      $e[92] !== In ||
      $e[93] !== vn ||
      $e[94] !== rn ||
      $e[95] !== Ht
    )
      ((Gn = r(Text, { children: [vn, rn, Ht, Kt, In] })),
        ($e[91] = Kt),
        ($e[92] = In),
        ($e[93] = vn),
        ($e[94] = rn),
        ($e[95] = Ht),
        ($e[96] = Gn));
    else Gn = $e[96];
    let So;
    if ($e[97] !== lt || $e[98] !== Gn)
      ((So = e(nl, { isFocused: lt, styled: !1, children: Gn })),
        ($e[97] = lt),
        ($e[98] = Gn),
        ($e[99] = So));
    else So = $e[99];
    return So;
  }
  if (be.type === "skill") {
    let Bo = gg[be.override];
    let Ln;
    if ($e[100] !== Bo.color || $e[101] !== Bo.glyph || $e[102] !== mt)
      ((Ln = Bo.color ? getThemeColor(Bo.color, mt)(Bo.glyph) : Bo.glyph),
        ($e[100] = Bo.color),
        ($e[101] = Bo.glyph),
        ($e[102] = mt),
        ($e[103] = Ln));
    else Ln = $e[103];
    let ug = Ln;
    const mn = lt ? "suggestion" : void 0;
    let on;
    if ($e[104] !== be.name || $e[105] !== mn)
      ((on = e(Text, { color: mn, children: be.name })),
        ($e[104] = be.name),
        ($e[105] = mn),
        ($e[106] = on));
    else on = $e[106];
    const gn = !lt;
    let vn;
    if ($e[107] === MEMO_CACHE_SENTINEL)
      ((vn = e(BackgroundText, {
        color: "userMessageBackground",
        textColor: "text",
        children: "Skill",
      })),
        ($e[107] = vn));
    else vn = $e[107];
    let wn;
    if ($e[108] !== gn)
      ((wn = r(Text, { dimColor: gn, children: [" ", vn] })),
        ($e[108] = gn),
        ($e[109] = wn));
    else wn = $e[109];
    let jt;
    if ($e[110] !== be.source)
      ((jt = r(Text, { dimColor: !0, children: [" \xB7 ", be.source] })),
        ($e[110] = be.source),
        ($e[111] = jt));
    else jt = $e[111];
    const rn = !lt;
    const Ht = be.lockSource ? "\uD83D\uDD12 " : "";
    let Xt;
    if ($e[112] !== ug || $e[113] !== rn || $e[114] !== Ht)
      ((Xt = r(Text, { dimColor: rn, children: [" ", "\xB7 ", Ht, ug, " "] })),
        ($e[112] = ug),
        ($e[113] = rn),
        ($e[114] = Ht),
        ($e[115] = Xt));
    else Xt = $e[115];
    const Kt = !lt;
    let Zt;
    if ($e[116] !== Bo.label || $e[117] !== Kt)
      ((Zt = e(Text, { dimColor: Kt, children: Bo.label })),
        ($e[116] = Bo.label),
        ($e[117] = Kt),
        ($e[118] = Zt));
    else Zt = $e[118];
    let In;
    if ($e[119] !== be.tokenEstimate)
      ((In = r(Text, {
        dimColor: !0,
        children: [" \xB7 ~", be.tokenEstimate, " tok"],
      })),
        ($e[119] = be.tokenEstimate),
        ($e[120] = In));
    else In = $e[120];
    let Gn;
    if ($e[121] !== be.usage)
      ((Gn = be.usage
        ? r(Text, {
            dimColor: !0,
            children: [
              " ",
              "\xB7 ",
              be.usage.count,
              "\xD7",
              " ",
              be.usage.daysSinceUse === 0
                ? "today"
                : `${be.usage.daysSinceUse}d`,
            ],
          })
        : e(Text, { color: "warning", children: " \xB7 never used" })),
        ($e[121] = be.usage),
        ($e[122] = Gn));
    else Gn = $e[122];
    let So;
    if (
      $e[123] !== Xt ||
      $e[124] !== Zt ||
      $e[125] !== In ||
      $e[126] !== Gn ||
      $e[127] !== on ||
      $e[128] !== wn ||
      $e[129] !== jt
    )
      ((So = r(Text, { children: [on, wn, jt, Xt, Zt, In, Gn] })),
        ($e[123] = Xt),
        ($e[124] = Zt),
        ($e[125] = In),
        ($e[126] = Gn),
        ($e[127] = on),
        ($e[128] = wn),
        ($e[129] = jt),
        ($e[130] = So));
    else So = $e[130];
    let Za;
    if ($e[131] !== lt || $e[132] !== So)
      ((Za = e(nl, { isFocused: lt, styled: !1, children: So })),
        ($e[131] = lt),
        ($e[132] = So),
        ($e[133] = Za));
    else Za = $e[133];
    return Za;
  }
  let _n, Fn;
  if (be.status === "connected") {
    if ($e[134] !== mt)
      ((_n = getThemeColor("success", mt)(figures.tick)),
        (Fn = "connected"),
        ($e[134] = mt),
        ($e[135] = _n),
        ($e[136] = Fn));
    else ((_n = $e[135]), (Fn = $e[136]));
  } else if (be.status === "cached" && be.client.type === "cached") {
    if ($e[137] !== be.client.cacheSavedAt || $e[138] !== mt) {
      let dg = oye(be.client.cacheSavedAt);
      ((_n = getThemeColor(dg.tone, mt)(dg.glyph)), (Fn = dg.statusText));
      (($e[137] = be.client.cacheSavedAt),
        ($e[138] = mt),
        ($e[139] = _n),
        ($e[140] = Fn));
    } else ((_n = $e[139]), (Fn = $e[140]));
  } else if (be.status === "disabled") {
    if ($e[141] !== mt)
      ((_n = getThemeColor("inactive", mt)(figures.radioOff)),
        (Fn = "disabled"),
        ($e[141] = mt),
        ($e[142] = _n),
        ($e[143] = Fn));
    else ((_n = $e[142]), (Fn = $e[143]));
  } else if (be.status === "pending") {
    if ($e[144] !== mt)
      ((_n = getThemeColor("inactive", mt)(figures.radioOff)),
        (Fn = "connecting\u2026"),
        ($e[144] = mt),
        ($e[145] = _n),
        ($e[146] = Fn));
    else ((_n = $e[145]), (Fn = $e[146]));
  } else if (be.status === "needs-auth") {
    if ($e[147] !== mt)
      ((_n = getThemeColor("warning", mt)(figures.triangleUpOutline)),
        (Fn = e(ActionKeybindingHint, {
          action: "select:accept",
          context: "Select",
          fallback: "Enter",
          description: "auth",
        })),
        ($e[147] = mt),
        ($e[148] = _n),
        ($e[149] = Fn));
    else ((_n = $e[148]), (Fn = $e[149]));
  } else if (be.status === "unconfigured") {
    if ($e[150] !== mt)
      ((_n = getThemeColor("inactive", mt)(figures.radioOff)),
        (Fn = "not configured"),
        ($e[150] = mt),
        ($e[151] = _n),
        ($e[152] = Fn));
    else ((_n = $e[151]), (Fn = $e[152]));
  } else if ($e[153] !== mt)
    ((_n = getThemeColor("error", mt)(figures.cross)),
      (Fn = "failed"),
      ($e[153] = mt),
      ($e[154] = _n),
      ($e[155] = Fn));
  else ((_n = $e[154]), (Fn = $e[155]));
  let pg = be.client.config,
    oa =
      pg?.type === "claudeai-proxy" &&
      pg.scope === "claudeai" &&
      pg.enterpriseManaged === !0;
  if (be.indented) {
    const Ln = !lt;
    let mn;
    if ($e[156] !== Ln)
      ((mn = e(Text, { dimColor: Ln, children: "\u2514 " })),
        ($e[156] = Ln),
        ($e[157] = mn));
    else mn = $e[157];
    const on = lt ? "suggestion" : void 0;
    let gn;
    if ($e[158] !== be.name || $e[159] !== on)
      ((gn = e(Text, { color: on, children: be.name })),
        ($e[158] = be.name),
        ($e[159] = on),
        ($e[160] = gn));
    else gn = $e[160];
    const vn = !lt;
    let wn;
    if ($e[161] === MEMO_CACHE_SENTINEL)
      ((wn = e(BackgroundText, {
        color: "userMessageBackground",
        textColor: "text",
        children: "MCP",
      })),
        ($e[161] = wn));
    else wn = $e[161];
    let jt;
    if ($e[162] !== vn)
      ((jt = r(Text, { dimColor: vn, children: [" ", wn] })),
        ($e[162] = vn),
        ($e[163] = jt));
    else jt = $e[163];
    const rn = !lt;
    let Ht;
    if ($e[164] !== _n || $e[165] !== rn)
      ((Ht = r(Text, { dimColor: rn, children: [" \xB7 ", _n, " "] })),
        ($e[164] = _n),
        ($e[165] = rn),
        ($e[166] = Ht));
    else Ht = $e[166];
    const Xt = !lt;
    let Kt;
    if ($e[167] !== Fn || $e[168] !== Xt)
      ((Kt = e(Text, { dimColor: Xt, children: Fn })),
        ($e[167] = Fn),
        ($e[168] = Xt),
        ($e[169] = Kt));
    else Kt = $e[169];
    let Zt;
    if ($e[170] !== oa || $e[171] !== lt)
      ((Zt = oa && e(Text, { dimColor: !lt, children: " \xB7 managed" })),
        ($e[170] = oa),
        ($e[171] = lt),
        ($e[172] = Zt));
    else Zt = $e[172];
    let In;
    if (
      $e[173] !== Kt ||
      $e[174] !== Zt ||
      $e[175] !== mn ||
      $e[176] !== gn ||
      $e[177] !== jt ||
      $e[178] !== Ht
    )
      ((In = r(Text, { children: [mn, gn, jt, Ht, Kt, Zt] })),
        ($e[173] = Kt),
        ($e[174] = Zt),
        ($e[175] = mn),
        ($e[176] = gn),
        ($e[177] = jt),
        ($e[178] = Ht),
        ($e[179] = In));
    else In = $e[179];
    let Gn;
    if ($e[180] !== lt || $e[181] !== In)
      ((Gn = e(nl, { isFocused: lt, styled: !1, children: In })),
        ($e[180] = lt),
        ($e[181] = In),
        ($e[182] = Gn));
    else Gn = $e[182];
    return Gn;
  }
  const Ln = lt ? "suggestion" : void 0;
  let mn;
  if ($e[183] !== be.name || $e[184] !== Ln)
    ((mn = e(Text, { color: Ln, children: be.name })),
      ($e[183] = be.name),
      ($e[184] = Ln),
      ($e[185] = mn));
  else mn = $e[185];
  const on = !lt;
  let gn;
  if ($e[186] === MEMO_CACHE_SENTINEL)
    ((gn = e(BackgroundText, {
      color: "userMessageBackground",
      textColor: "text",
      children: "MCP",
    })),
      ($e[186] = gn));
  else gn = $e[186];
  let vn;
  if ($e[187] !== on)
    ((vn = r(Text, { dimColor: on, children: [" ", gn] })),
      ($e[187] = on),
      ($e[188] = vn));
  else vn = $e[188];
  const wn = !lt;
  let jt;
  if ($e[189] !== _n || $e[190] !== wn)
    ((jt = r(Text, { dimColor: wn, children: [" \xB7 ", _n, " "] })),
      ($e[189] = _n),
      ($e[190] = wn),
      ($e[191] = jt));
  else jt = $e[191];
  const rn = !lt;
  let Ht;
  if ($e[192] !== Fn || $e[193] !== rn)
    ((Ht = e(Text, { dimColor: rn, children: Fn })),
      ($e[192] = Fn),
      ($e[193] = rn),
      ($e[194] = Ht));
  else Ht = $e[194];
  let Xt;
  if ($e[195] !== oa || $e[196] !== lt)
    ((Xt = oa && e(Text, { dimColor: !lt, children: " \xB7 managed" })),
      ($e[195] = oa),
      ($e[196] = lt),
      ($e[197] = Xt));
  else Xt = $e[197];
  let Kt;
  if (
    $e[198] !== Xt ||
    $e[199] !== mn ||
    $e[200] !== vn ||
    $e[201] !== jt ||
    $e[202] !== Ht
  )
    ((Kt = r(Text, { children: [mn, vn, jt, Ht, Xt] })),
      ($e[198] = Xt),
      ($e[199] = mn),
      ($e[200] = vn),
      ($e[201] = jt),
      ($e[202] = Ht),
      ($e[203] = Kt));
  else Kt = $e[203];
  let Zt;
  if ($e[204] !== lt || $e[205] !== Kt)
    ((Zt = e(nl, { isFocused: lt, styled: !1, children: Kt })),
      ($e[204] = lt),
      ($e[205] = Kt),
      ($e[206] = Zt));
  else Zt = $e[206];
  return Zt;
}
function or(a) {
  return a?.kind === "item" || a?.kind === "disabled-header";
}
function ix(a) {
  switch (a.type) {
    case "plugin":
      return a.isEnabled && a.errorCount > 0;
    case "failed-plugin":
    case "flagged-plugin":
      return !0;
    case "mcp":
      return (a.status === "needs-auth" || a.status === "failed") && !eu(a);
    case "skill":
      return !1;
  }
}
var Zc = ["on", "name-only", "user-invocable-only", "off"];
function hg(a, k) {
  if (k === "policy" || k === "flag") return a;
  if (k === "author") return a === "off" ? "user-invocable-only" : "off";
  let v = Zc.indexOf(a);
  return Zc[(v + 1) % Zc.length];
}
function fg(a) {
  return (
    (a.type === "plugin" && !a.isEnabled) ||
    (a.type === "mcp" && a.status === "disabled") ||
    (a.type === "skill" && a.override === "off")
  );
}
function eu(a) {
  return (
    a.type === "mcp" &&
    (a.status === "needs-auth" || a.status === "failed") &&
    a.everConnected === !1
  );
}
function kg(
  a,
  {
    searchQuery: k,
    favoriteIds: v,
    showDisabled: b,
    disusedDays: w,
    keepInPlaceIds: R,
  },
) {
  if (k) {
    let B = k.toLowerCase();
    return a
      .filter(
        (K) =>
          K.name.toLowerCase().includes(B) ||
          ("displayName" in K && K.displayName?.toLowerCase().includes(B)) ||
          ("description" in K && K.description?.toLowerCase().includes(B)),
      )
      .map((K) => ({ kind: "item", section: "main", item: K }));
  }
  let A = [],
    Q = null,
    I = (B, K) => {
      let se = Q?.section !== B;
      if (se) {
        if (A.length > 0 && A.at(-1)?.kind !== "disabled-header")
          A.push({ kind: "spacer" });
        if (B === "attention" || B === "favorites" || B === "disused")
          A.push({ kind: "section-header", section: B });
      }
      if (
        (B === "main" || B === "disabled") &&
        (se || Q?.item.scope !== K.scope)
      ) {
        if (!se) A.push({ kind: "spacer" });
        A.push({ kind: "scope-header", scope: K.scope });
      }
      let fe =
          !se &&
          K.type === "mcp" &&
          K.parentId !== void 0 &&
          ((Q?.item.type === "plugin" && Q.item.id === K.parentId) ||
            (Q?.item.type === "mcp" &&
              Q.item.indented &&
              Q.item.parentId === K.parentId)),
        Fe = K.type === "mcp" && K.indented && !fe ? { ...K, indented: !1 } : K;
      (A.push({ kind: "item", section: B, item: Fe }),
        (Q = { section: B, item: Fe }));
    },
    j = new Set();
  for (let B of a) if (ix(B)) (I("attention", B), j.add(B.id));
  for (let B of a)
    if (v.has(B.id) && !j.has(B.id)) (I("favorites", B), j.add(B.id));
  if (w && w.size > 0) {
    for (let B of a)
      if (B.type === "plugin" && B.isEnabled && w.has(B.id) && !j.has(B.id))
        (I("disused", { ...B, unusedDays: w.get(B.id) }), j.add(B.id));
  }
  let q = (B) => (fg(B) || eu(B)) && !R?.has(B.id);
  for (let B of a) if (!q(B) && !j.has(B.id)) I("main", B);
  let X = a.filter(q);
  if (X.length > 0) {
    if (A.length > 0) A.push({ kind: "spacer" });
    if (
      (A.push({
        kind: "disabled-header",
        disabledCount: countMatching(X, fg),
        unusedConnectorCount: countMatching(X, eu),
      }),
      b)
    )
      for (let B of X) I("disabled", B);
  }
  return A;
}
function tl(a) {
  return a.loadedFrom === "syncedSkills"
    ? `synced-skill:${a.source}:${a.name}`
    : `skill:${a.source}:${a.name}`;
}
var yg = "synced-skill:",
  rx = "skill:";
function bg(a) {
  return a.startsWith(yg) ? rx + a.slice(yg.length) : null;
}
function tu(a, k) {
  let v = new Set(),
    b = [];
  for (let R of k) {
    let A = tl(R);
    if (R.loadedFrom === "syncedSkills") b.push(A);
    else v.add(A);
  }
  let w = null;
  for (let R of b) {
    let A = bg(R);
    if (A !== null && a.has(A) && !a.has(R) && !v.has(A))
      ((w ??= new Set(a)), w.add(R));
  }
  return w ?? a;
}
function xg(a, k, v) {
  let b = tu(a, v),
    w = new Set(a);
  if (!b.has(k)) return (w.add(k), w);
  w.delete(k);
  let R = bg(k);
  if (
    R !== null &&
    !v.some((A) => A.loadedFrom !== "syncedSkills" && tl(A) === R)
  )
    w.delete(R);
  return w;
}
function kx(Sg) {
  let [dx, GA] = Sg;
  return e(
    BulletItem,
    { children: r(Text, { dimColor: !0, children: [dx, ": ", GA.join(", ")] }) },
    dx,
  );
}
var px = ["on", "name-only", "user-invocable-only", "off"];
function Pg(a, k) {
  let v = getSettingsForSource("localSettings")?.skillOverrides,
    b = getSettingsForSource("projectSettings")?.skillOverrides,
    w = getSettingsForSource("userSettings")?.skillOverrides,
    R = (I) => b?.[I] ?? w?.[I],
    A =
      R(a.cmdName) ??
      (a.unqualifiedName != null
        ? (v?.[a.unqualifiedName] ?? R(a.unqualifiedName))
        : void 0),
    Q =
      a.lockSource === "author"
        ? A === "off"
          ? "off"
          : "user-invocable-only"
        : (A ?? "on");
  return k === Q ? void 0 : k;
}
function mx(a) {
  switch (a) {
    case "flagged":
      return "Flagged";
    case "project":
      return "Project";
    case "local":
      return "Local";
    case "user":
      return "User";
    case "enterprise":
      return "Enterprise";
    case "managed":
      return "Managed";
    case "builtin":
    case "dynamic":
      return "Built-in";
    case "skills":
      return "Skills";
    default:
      return a;
  }
}
function Tg(Sg) {
  let ol = _(11),
    { plugin: nu, marketplace: ou } = Sg,
    [iu, qA] = d(null),
    [ru, zA] = d(null),
    ax,
    lx;
  if (ol[0] !== ou || ol[1] !== nu)
    ((ax = () => {
      let vg = !1;
      return (
        getPluginInventory(nu, ou)
          .then((WA) => {
            if (!vg) qA(WA);
          })
          .catch((sx) => {
            if (!vg)
              zA(
                sx instanceof Error ? sx.message : "Failed to load components",
              );
          }),
        () => {
          vg = !0;
        }
      );
    }),
      (lx = [nu, ou]),
      (ol[0] = ou),
      (ol[1] = nu),
      (ol[2] = ax),
      (ol[3] = lx));
  else ((ax = ol[2]), (lx = ol[3]));
  if ((E(ax, lx), ru)) {
    let il;
    if (ol[4] === MEMO_CACHE_SENTINEL)
      ((il = e(Text, { bold: !0, children: "Components:" })), (ol[4] = il));
    else il = ol[4];
    let ia;
    if (ol[5] !== ru)
      ((ia = r(Box, {
        flexDirection: "column",
        marginBottom: 1,
        children: [il, r(Text, { dimColor: !0, children: ["Error: ", ru] })],
      })),
        (ol[5] = ru),
        (ol[6] = ia));
    else ia = ol[6];
    return ia;
  }
  if (!iu) {
    return null;
  }
  let il, ia;
  if (ol[7] !== iu) {
    ia = EARLY_RETURN_SENTINEL;
    bb0: {
      let cx = qi(iu);
      if (cx.length === 0) {
        ia = null;
        break bb0;
      }
      let ux;
      if (ol[10] === MEMO_CACHE_SENTINEL)
        ((ux = e(Text, { bold: !0, children: "Installed components:" })),
          (ol[10] = ux));
      else ux = ol[10];
      il = r(Box, {
        flexDirection: "column",
        marginBottom: 1,
        children: [ux, cx.map(kx)],
      });
    }
    ((ol[7] = iu), (ol[8] = il), (ol[9] = ia));
  } else ((il = ol[8]), (ia = ol[9]));
  if (ia !== EARLY_RETURN_SENTINEL) return ia;
  return il;
}
async function gx(a, k, v) {
  let w = (await loadMarketplace(k, v))?.plugins.find((R) => R.name === a);
  if (w && typeof w.source === "string")
    return `Local plugins cannot be updated remotely. To update, modify the source at: ${w.source}`;
  return null;
}
function fx(a) {
  return a.filter((k) => !isPluginBlockedByPolicy(k.source));
}
function uu(QA) {
  let rl = _(15),
    { entries: Xo, color: Ti, noun: wg } = QA;
  if (Xo.length === 0) {
    return null;
  }
  const YA = Xo.length;
  let au;
  if (rl[0] !== Xo.length || rl[1] !== wg)
    ((au = pluralize(Xo.length, wg)), (rl[0] = Xo.length), (rl[1] = wg), (rl[2] = au));
  else au = rl[2];
  let su;
  if (rl[3] !== Ti || rl[4] !== Xo.length || rl[5] !== au)
    ((su = r(Text, { bold: !0, color: Ti, children: [YA, " ", au, ":"] })),
      (rl[3] = Ti),
      (rl[4] = Xo.length),
      (rl[5] = au),
      (rl[6] = su));
  else su = rl[6];
  let cu;
  if (rl[7] !== Ti || rl[8] !== Xo) {
    let al;
    if (rl[10] !== Ti)
      ((al = (Cg, JA) =>
        r(
          Box,
          {
            flexDirection: "column",
            marginLeft: 2,
            children: [
              e(Text, { color: Ti, children: Cg.message }),
              Cg.guidance &&
                r(Text, {
                  dimColor: !0,
                  italic: !0,
                  children: [figures.arrowRight, " ", Cg.guidance],
                }),
            ],
          },
          JA,
        )),
        (rl[10] = Ti),
        (rl[11] = al));
    else al = rl[11];
    cu = Xo.map(al);
    ((rl[7] = Ti), (rl[8] = Xo), (rl[9] = cu));
  } else cu = rl[9];
  let al;
  if (rl[12] !== su || rl[13] !== cu)
    ((al = r(Box, { flexDirection: "column", children: [su, cu] })),
      (rl[12] = su),
      (rl[13] = cu),
      (rl[14] = al));
  else al = rl[14];
  return al;
}
function pu({
  setViewState: a,
  setResult: k,
  onManageComplete: v,
  onSearchModeChange: b,
  targetPlugin: w,
  targetMarketplace: R,
  action: A,
  commands: Q,
}) {
  let { storageV5: I, credentials: j } = useStorageV5Context(),
    q = useAppStateSelector((T) => T.mcp.clients),
    X = useAppStateSelector((T) => T.mcp.tools),
    B = useAppStateSelector((T) => T.plugins.errors),
    K = useAppStateSelector((T) => T.plugins.warnings),
    se = getFlaggedPlugins(),
    fe = Gm(),
    [Fe, ze] = d(!1),
    xe = () => ze(!1),
    we = useTerminalFocus(),
    tt = useHasVirtualScrollViewport(),
    pt = useTerminalSize(),
    { columns: xt } = pt,
    { rows: Je } = useVirtualScrollViewportSize(pt),
    [ae, Re] = d("plugin-list"),
    {
      query: Mt,
      setQuery: Lt,
      cursorOffset: We,
      setCursorOffset: nt,
      handleKeyDown: at,
      handlePaste: Be,
    } = useVimModeInput({ isActive: ae === "plugin-list" && Fe, onExit: xe, onExitUp: xe }),
    Ct = Fe && Mt !== "";
  (E(() => {
    b(Ct);
  }, [Ct, b]),
    E(() => () => b(!1), [b]));
  let [pe, tn] = d(null),
    Rt = V(() => (pe ? s9e(pe.plugin.source) : null), [pe]),
    sn = Fr(Rt),
    [St, Wt] = d(0),
    [Ut, zn] = d([]),
    [yt, Yn] = d([]),
    fn = Xm(parseEnabledPluginRecords, arePluginSettingsRecordsEqual),
    [yn, Xn] = d(!0),
    [un, Gt] = d(0),
    [Cn, it] = d(() => new Set()),
    [Ve, ne] = d(new Map()),
    [Ce, ke] = d(!1),
    [Oe, ie] = d(null),
    [kt, $t] = d(null),
    [Dt, _t] = d(0),
    Ot = re(
      (T) => {
        ($t(T), ke(!1), tn(null), Re("plugin-list"), _t((Z) => Z + 1), v());
      },
      [v],
    ),
    bt = C(!1),
    te = C(new Set()),
    Ee = C(new Set()),
    me = C(void 0),
    Ge = useMcpToggleEnabled(),
    wt = re(() => {
      if (ae === "plugin-details") (Re("plugin-list"), tn(null), ie(null));
      else if (typeof ae === "object" && ae.type === "failed-plugin-details")
        (Re("plugin-list"), ie(null));
      else if (ae === "configuring") (Re("plugin-details"), ba(null));
      else if (ae === "plugin-usage") Re("plugin-details");
      else if (typeof ae === "object" && ae.type === "plugin-options")
        Ot(
          "Plugin enabled. Configuration skipped \u2014 run /reload-plugins to apply.",
        );
      else if (typeof ae === "object" && ae.type === "configuring-options")
        k("Configuration cancelled.");
      else if (typeof ae === "object" && ae.type === "flagged-detail")
        (Re("plugin-list"), ie(null));
      else if (typeof ae === "object" && ae.type === "mcp-detail")
        (Re("plugin-list"), ie(null));
      else if (typeof ae === "object" && ae.type === "skill-detail")
        (Re("plugin-list"), ie(null));
      else if (typeof ae === "object" && ae.type === "mcp-tools")
        Re({ type: "mcp-detail", client: ae.client });
      else if (typeof ae === "object" && ae.type === "mcp-tool-detail")
        Re({ type: "mcp-tools", client: ae.client });
      else {
        if (Ve.size > 0) {
          k("Run /reload-plugins to apply plugin changes.");
          return;
        }
        a({ type: "menu" });
      }
    }, [ae, a, Ve, k, Ot]);
  useKeybinding("confirm:no", wt, {
    context: "Settings",
    isActive:
      (ae !== "plugin-list" || !Fe) &&
      ae !== "confirm-project-uninstall" &&
      !(typeof ae === "object" && ae.type === "confirm-data-cleanup"),
  });
  let st = (T) => {
      if (T.type === "connected") return "connected";
      if (T.type === "cached") return "cached";
      if (T.type === "disabled") return "disabled";
      if (T.type === "pending") return "pending";
      if (T.type === "needs-auth") return "needs-auth";
      if (isUnconfiguredMcpServer(T)) return "unconfigured";
      return "failed";
    },
    Bt = V(() => {
      let T = getSettings_DEPRECATED(),
        Z = new Map();
      for (let qe of q)
        if (qe.name.startsWith("plugin:")) {
          let Pt = qe.name.split(":");
          if (Pt.length >= 3) {
            let Vt = Pt[1],
              dn = Pt.slice(2).join(":"),
              Un = Z.get(Vt) || [];
            (Un.push({ displayName: wr(dn), client: qe }), Z.set(Vt, Un));
          }
        }
      let oe = new Set(),
        le = [],
        ce = fn;
      for (let qe of yt) {
        let Pt = s9e(qe.plugin.source),
          Vt = Ve.get(Pt),
          dn =
            Vt !== void 0
              ? Vt === "will-disable"
              : p0e(Pt, qe.plugin.manifest, ce),
          Un = B.filter((Vn) => !UJ(Vn) && z8(Vn, Pt, qe.plugin.name));
        for (let Vn of Un) oe.add(Vn);
        let An = qe.plugin.isBuiltin ? "builtin" : qe.scope || "user",
          Ke = Q && isSkillDoctorEnabled() ? Xa(qe.plugin.manifest.name, Q) : void 0;
        le.push({
          item: {
            type: "plugin",
            id: Pt,
            name: qe.plugin.name,
            displayName: qe.plugin.manifest.displayName,
            description: qe.plugin.manifest.description,
            marketplace: qe.marketplace,
            scope: An,
            isEnabled: dn,
            errorCount: Un.length,
            errors: Un,
            plugin: qe.plugin,
            pendingEnable: qe.pendingEnable,
            pendingUpdate: qe.pendingUpdate,
            pendingToggle: Vt,
            activity: Ke
              ? { skillCount: Ke.skillCount, totalCount: Ke.totalCount }
              : void 0,
          },
          originalScope: An,
          childMcps: dn ? Z.get(qe.plugin.name) || [] : [],
        });
      }
      let He = new Map();
      for (let qe of B) {
        if (UJ(qe)) continue;
        let Pt = QPt(qe);
        if (!Pt && oe.has(qe)) continue;
        let Vt = Pt ? `orphan:${qe.source}` : qe.source,
          dn = He.get(Vt) || [];
        (dn.push(qe), He.set(Vt, dn));
      }
      let gt = getPluginEditableScopes(),
        Qe = [];
      for (let [qe, Pt] of He) {
        let Vt = qe.startsWith("orphan:") ? qe.slice(7) : qe;
        if (Vt in se) continue;
        let dn = splitPluginIdOnLastAt(Vt),
          Un = dn.name || Vt,
          An = dn.marketplace || getNonMarketplacePluginSource(Vt) || "unknown",
          Ke = editableScopeOf(gt, Vt),
          Vn = Ke === "flag" || Ke === void 0 ? "user" : Ke;
        Qe.push({
          type: "failed-plugin",
          id: qe,
          name: Un,
          marketplace: An,
          scope: Vn,
          errorCount: Pt.length,
          errors: Pt,
        });
      }
      let Ae = [],
        Ye = getClaudeAiMcpEverConnectedSet();
      for (let qe of q) {
        if (qe.name === "ide") continue;
        if (qe.name.startsWith("plugin:")) continue;
        Ae.push({
          type: "mcp",
          id: `mcp:${qe.name}`,
          name: qe.name,
          description: void 0,
          scope: qe.config.scope,
          status: st(qe),
          client: qe,
          everConnected:
            qe.config.type === "claudeai-proxy" ? Ye.has(qe.name) : void 0,
        });
      }
      let ot = [];
      if (Q) {
        let qe = new Set(
            yt
              .filter((Ke) => Ke.marketplace === SKILLS_DIR_PLUGIN_SOURCE)
              .map((Ke) => Ke.plugin.name),
          ),
          Pt = getGlobalConfig().skillUsage ?? {},
          Vt = Date.now(),
          dn = T.skillOverrides ?? {},
          Un = getSettingsForSource("policySettings")?.skillOverrides ?? {},
          An = getSettingsForSource("flagSettings")?.skillOverrides ?? {};
        for (let Ke of Q) {
          if (
            Ke.type !== "prompt" ||
            (Ke.loadedFrom !== "skills" &&
              Ke.loadedFrom !== "syncedSkills" &&
              Ke.loadedFrom !== "commands_DEPRECATED")
          )
            continue;
          let Vn = getCommandName(Ke);
          if (qe.has(Ke.name) || qe.has(Vn)) continue;
          let di = Un[Ke.name],
            Ed = An[Ke.name],
            Md =
              dn[Ke.name] ??
              (Ke.unqualifiedName != null ? dn[Ke.unqualifiedName] : void 0),
            va,
            hr;
          if (di) ((va = "policy"), (hr = di));
          else if (Ed) ((va = "flag"), (hr = Ed));
          else if (Ke.disableModelInvocation)
            ((va = "author"),
              (hr = Md === "off" ? "off" : "user-invocable-only"));
          else hr = Md ?? "on";
          ot.push({
            type: "skill",
            id: tl(Ke),
            cmdName: Ke.name,
            unqualifiedName: Ke.unqualifiedName,
            name: Vn,
            description: Ke.description,
            scope: "skills",
            source: Ke.loadedFrom === "syncedSkills" ? CLAUDE_AI_SYNC_LABEL : describeSettingsSourceShort(Ke.source),
            override: hr,
            whenToUse: Ke.whenToUse,
            skillRoot: Ke.skillRoot,
            allowedTools: Ke.allowedTools,
            lockSource: va,
            tokenEstimate: estimateTokens(
              [Ke.name, Ke.description, Ke.whenToUse].filter(Boolean).join(" "),
            ),
            usage: (() => {
              let Dl =
                Pt[Ke.name] ??
                (Ke.unqualifiedName ? Pt[Ke.unqualifiedName] : void 0);
              return Dl
                ? {
                    count: Dl.usageCount,
                    daysSinceUse: Math.max(
                      0,
                      Math.floor((Vt - Dl.lastUsedAt) / 86400000),
                    ),
                  }
                : void 0;
            })(),
          });
        }
      }
      let eo = {
          flagged: -1,
          project: 0,
          local: 1,
          user: 2,
          enterprise: 3,
          managed: 4,
          dynamic: 5,
          builtin: 6,
          skills: 7,
        },
        To = [],
        Pn = new Map();
      for (let { item: qe, originalScope: Pt, childMcps: Vt } of le) {
        let dn = qe.scope;
        if (!Pn.has(dn)) Pn.set(dn, []);
        Pn.get(dn).push(qe);
        for (let { displayName: Un, client: An } of Vt) {
          let Ke = Pt === "builtin" ? "user" : Pt;
          if (!Pn.has(Ke)) Pn.set(Ke, []);
          Pn.get(Ke).push({
            type: "mcp",
            id: `mcp:${An.name}`,
            name: Un,
            description: void 0,
            scope: Ke,
            status: st(An),
            client: An,
            indented: !0,
            parentId: qe.id,
          });
        }
      }
      for (let qe of Ae) {
        let Pt = qe.scope;
        if (!Pn.has(Pt)) Pn.set(Pt, []);
        Pn.get(Pt).push(qe);
      }
      if (ot.length > 0) Pn.set("skills", ot);
      for (let qe of Qe) {
        let Pt = qe.scope;
        if (!Pn.has(Pt)) Pn.set(Pt, []);
        Pn.get(Pt).push(qe);
      }
      for (let [qe, Pt] of Object.entries(se)) {
        let Vt = splitPluginId(qe),
          dn = Vt.name || qe,
          Un = Vt.marketplace || "unknown";
        if (!Pn.has("flagged")) Pn.set("flagged", []);
        Pn.get("flagged").push({
          type: "flagged-plugin",
          id: qe,
          name: dn,
          marketplace: Un,
          scope: "flagged",
          reason: "delisted",
          text: "Removed from marketplace",
          flaggedAt: Pt.flaggedAt,
        });
      }
      let $l = [...Pn.keys()].sort((qe, Pt) => (eo[qe] ?? 99) - (eo[Pt] ?? 99));
      for (let qe of $l) {
        let Pt = Pn.get(qe),
          Vt = [],
          dn = [],
          Un = [],
          An = 0;
        while (An < Pt.length) {
          let Ke = Pt[An];
          if (
            Ke.type === "plugin" ||
            Ke.type === "failed-plugin" ||
            Ke.type === "flagged-plugin"
          ) {
            let Vn = [Ke];
            An++;
            let di = Pt[An];
            while (di?.type === "mcp" && di.indented)
              (Vn.push(di), An++, (di = Pt[An]));
            Vt.push(Vn);
          } else if (Ke.type === "mcp" && !Ke.indented) (dn.push(Ke), An++);
          else if (Ke.type === "skill") (Un.push(Ke), An++);
          else An++;
        }
        (Vt.sort((Ke, Vn) => Ke[0].name.localeCompare(Vn[0].name)),
          dn.sort((Ke, Vn) => Ke.name.localeCompare(Vn.name)),
          Un.sort((Ke, Vn) => Ke.name.localeCompare(Vn.name)));
        for (let Ke of Vt) To.push(...Ke);
        (To.push(...dn), To.push(...Un));
      }
      return To;
    }, [yt, q, B, Ve, se, Q, un, fn]),
    xn = V(
      () => Bt.filter((T) => T.type === "flagged-plugin").map((T) => T.id),
      [Bt],
    );
  E(() => {
    if (xn.length > 0) markFlaggedPluginsSeen(xn, I);
  }, [xn, I]);
  let [si, ci] = d(() => new Set((getGlobalConfig().favoritePlugins ?? []).map(s9e))),
    io = V(
      () =>
        (Q ?? []).flatMap((T) =>
          T.type === "prompt"
            ? [{ name: T.name, source: T.source, loadedFrom: T.loadedFrom }]
            : [],
        ),
      [Q],
    ),
    wo = V(() => tu(si, io), [si, io]),
    Tt = re(
      (T) => {
        ci((Z) => {
          let oe = xg(Z, T, io);
          return (saveGlobalConfig((le) => ({ ...le, favoritePlugins: [...oe] }), I), oe);
        });
      },
      [io, I],
    ),
    [nn, Oo] = d(!1),
    [Co, Po] = d(() => new Map());
  E(() => {
    let T = !1;
    return (
      getDisusedPlugins().then((Z) => {
        if (T || Z.length === 0) return;
        Po(new Map(Z.map((oe) => [s9e(oe.pluginId), oe.daysSinceLastUse])));
      }),
      () => {
        T = !0;
      }
    );
  }, []);
  let En = re(
      (T, Z) => {
        if (Z === null || !Co.has(Z)) return;
        (logFeatureOk("cli_plugin_disuse_review"),
          logEvent("tengu_plugin_disuse_review_action", { action: fromEnum(T), ...buildPluginTelemetryFieldsFromId(Z) }),
          Po((oe) => {
            if (!oe.has(Z)) return oe;
            let le = new Map(oe);
            return (le.delete(Z), le);
          }));
      },
      [Co],
    ),
    Mn = V(
      () =>
        kg(Bt, {
          searchQuery: Mt,
          favoriteIds: wo,
          showDisabled: nn,
          disusedDays: Co,
          keepInPlaceIds: Cn,
        }),
      [Bt, Mt, wo, nn, Co, Cn],
    ),
    yr = re(
      (T, Z) => {
        let oe = Z === -1 ? Math.min(T, Mn.length - 1) : T;
        for (let le = oe; le >= 0 && le < Mn.length; le += Z)
          if (or(Mn[le])) return le;
        return -1;
      },
      [Mn],
    ),
    [Zn, No] = d(0),
    El = C(null);
  E(() => {
    if (Mn.length === 0) return;
    let T = El.current;
    if (T) {
      El.current = null;
      let Z = Mn.findIndex(
        (oe) =>
          oe.kind === "item" && oe.section === T.section && oe.item.id === T.id,
      );
      if (Z === -1)
        Z = Mn.findIndex((oe) => oe.kind === "item" && oe.item.id === T.id);
      if (Z !== -1) {
        No(Z);
        return;
      }
    }
    if (!or(Mn[Zn])) {
      let Z = yr(Zn, 1),
        oe = yr(Zn, -1);
      No(Z !== -1 ? Z : oe !== -1 ? oe : 0);
    }
  }, [Mn, Zn, yr]);
  let ey = tt ? Math.max(8, Je - 10) : 8,
    ty = V(() => Math.max(0, Mn.findIndex(or)), [Mn]),
    Oi = Ha({
      totalItems: Mn.length,
      selectedIndex: Zn,
      maxVisible: ey,
      firstSelectableIndex: ty,
    }),
    [ui, ha] = d(0),
    [Ni, ba] = d(null),
    [Kv, Ml] = d(!1),
    [Id, Rd] = d(!1);
  (E(() => {
    if (!pe) {
      Rd(!1);
      return;
    }
    async function T() {
      let oe = pe.plugin.manifest.mcpServers,
        le = !1;
      if (oe)
        le =
          (typeof oe === "string" && isMcpbFile(oe)) ||
          (Array.isArray(oe) &&
            oe.some((ce) => typeof ce === "string" && isMcpbFile(ce)));
      if (!le)
        try {
          let ce = await Jm(I, pe.plugin),
            He = jsonParse(cs(ce)),
            gt = splitPluginId(pe.plugin.source).name,
            Qe = He.plugins?.find(
              (Ae) => Ae.name === gt || Ae.name === pe.plugin.name,
            );
          if (Qe?.mcpServers) {
            let Ae = Qe.mcpServers;
            le =
              (typeof Ae === "string" && isMcpbFile(Ae)) ||
              (Array.isArray(Ae) &&
                Ae.some((Ye) => typeof Ye === "string" && isMcpbFile(Ye)));
          }
        } catch (ce) {
          logForDebugging(`Failed to read raw marketplace.json: ${ce}`);
        }
      if (!Z) Rd(le);
    }
    let Z = !1;
    return (
      T(),
      isHoverRestEnabled() && I !== void 0
        ? () => {
            Z = !0;
          }
        : void 0
    );
  }, [pe, I]),
    E(() => {
      let T = Dt > 0;
      async function Z() {
        if (!T) Xn(!0);
        try {
          let { enabled: oe, disabled: le } = await loadAllPlugins(I, j),
            ce = fx([...oe, ...le]),
            He = {};
          for (let Ye of ce) {
            let ot = getPluginMarketplace(Ye.source) ?? "local";
            if (!He[ot]) He[ot] = [];
            He[ot].push(Ye);
          }
          let gt = [],
            Qe = parseEnabledPluginRecords();
          for (let [Ye, ot] of Object.entries(He)) {
            let eo = countMatching(ot, (Pn) => {
                let $l = s9e(Pn.source);
                return p0e($l, Pn.manifest, Qe);
              }),
              To = ot.length - eo;
            gt.push({
              name: Ye,
              installedPlugins: ot,
              enabledCount: eo,
              disabledCount: To,
            });
          }
          (gt.sort((Ye, ot) => {
            if (Ye.name === "claude-plugin-directory") return -1;
            if (ot.name === "claude-plugin-directory") return 1;
            return Ye.name.localeCompare(ot.name);
          }),
            zn(gt));
          let Ae = [];
          for (let Ye of gt)
            for (let ot of Ye.installedPlugins) {
              let eo = ot.isBuiltin
                ? "builtin"
                : (ot.scope ?? rOt(ot.source).scope);
              Ae.push({
                plugin: ot,
                marketplace: Ye.name,
                scope: eo,
                pendingEnable: void 0,
                pendingUpdate: !1,
              });
            }
          if ((Yn(Ae), !T)) No(0);
        } finally {
          Xn(!1);
        }
      }
      Z();
    }, [Dt, I, j]),
    E(() => {
      if (bt.current) return;
      let T = Ut.length > 0 || Bt.some((Z) => Z.type === "failed-plugin");
      if (w && T && !yn) {
        let { name: Z, marketplace: oe } =
            R !== void 0 ? { name: w, marketplace: void 0 } : splitPluginId(normalizePluginId(w)),
          le = R ?? oe,
          ce = le === void 0 ? void 0 : normalizePluginSourceName(le),
          He = ce ? Ut.filter((Qe) => Qe.name === ce) : Ut;
        for (let Qe of He) {
          let Ae = Qe.installedPlugins.find(
            (Ye) => isEqualIgnoringCase(Ye.name, Z) || isEqualIgnoringCase(splitPluginId(Ye.source).name, Z),
          );
          if (Ae) {
            let Ye = Ae.scope ?? rOt(Ae.source).scope,
              ot = {
                plugin: Ae,
                marketplace: Qe.name,
                scope: Ye,
                pendingEnable: void 0,
                pendingUpdate: !1,
              };
            (tn(ot), Re("plugin-details"), (me.current = A), (bt.current = !0));
            return;
          }
        }
        let gt = Bt.find(
          (Qe) =>
            Qe.type === "failed-plugin" &&
            isEqualIgnoringCase(Qe.name, Z) &&
            (!ce || Qe.marketplace === ce),
        );
        if (gt && gt.type === "failed-plugin")
          (Re({
            type: "failed-plugin-details",
            plugin: {
              id: gt.id,
              name: gt.name,
              marketplace: gt.marketplace,
              errors: gt.errors,
              scope: gt.scope,
            },
          }),
            (bt.current = !0));
        if (!bt.current && A)
          ((bt.current = !0),
            k(`Plugin "${w}" is not installed in this project`));
      }
    }, [w, R, Ut, yn, Bt, A, k]));
  let xa = async (T) => {
      if (!pe) return;
      let Z = pe.scope || "user",
        oe = Z === "builtin";
      if (oe && (T === "update" || T === "uninstall")) {
        ie("Built-in plugins cannot be updated or uninstalled.");
        return;
      }
      if (!oe && !r9e(Z) && T !== "update") {
        ie(
          "This plugin is managed by your organization. Contact your admin to disable it.",
        );
        return;
      }
      (ke(!0), ie(null));
      try {
        let le = Rt,
          ce;
        switch (T) {
          case "enable": {
            let Ye = await f0e(le, void 0, I);
            if (!Ye.success) throw Error(Ye.message);
            break;
          }
          case "disable": {
            let Ye = await m0e(le, void 0, I);
            if (!Ye.success) throw Error(Ye.message);
            ce = Ye.reverseDependents;
            break;
          }
          case "uninstall": {
            if (oe) break;
            if (!r9e(Z)) break;
            if (wUn(le)) {
              (ke(!1), Re("confirm-project-uninstall"));
              return;
            }
            let Ye = getInstalledPlugins().plugins[le],
              eo = !Ye || Ye.length <= 1 ? await getPluginDataDirSize(le) : null;
            if (eo) {
              (ke(!1), Re({ type: "confirm-data-cleanup", size: eo }));
              return;
            }
            let To = await r4(le, Z, void 0, I);
            if (!To.success) throw Error(To.message);
            ce = To.reverseDependents;
            break;
          }
          case "update": {
            if (oe) break;
            let Ye = await Pye(
              le,
              Z,
              { explicit: !0, consentedEntryHelper: sn.pinned() },
              I,
            );
            switch (Ye.outcome) {
              case "failed":
                if (
                  Ye.failureCode === "entry_helper_unshown" ||
                  Ye.failureCode === "entry_helper_changed" ||
                  Ye.failureCode === "entry_archive_url_changed"
                )
                  Wt((ot) => ot + 1);
                throw Error(Ye.message);
              case "up_to_date":
              case "skipped":
                (k(Ye.message), await v(), a({ type: "menu" }));
                return;
              case "updated":
                break;
            }
            break;
          }
        }
        if (
          (refreshPluginState(I, j),
          ne((Ye) => {
            if (!Ye.has(le)) return Ye;
            let ot = new Map(Ye);
            return (ot.delete(le), ot);
          }),
          T === "disable" || T === "uninstall")
        )
          En(T, Rt);
        let He = p0e(le, pe.plugin.manifest, parseEnabledPluginRecords());
        if (T !== "uninstall" && T !== "update" && He) {
          (ke(!1), Re({ type: "plugin-options" }));
          return;
        }
        let gt =
            T === "enable"
              ? "Enabled"
              : T === "disable"
                ? "Disabled"
                : T === "update"
                  ? "Updated"
                  : "Uninstalled",
          Qe = ce && ce.length > 0 ? ` \xB7 required by ${ce.join(", ")}` : "",
          Ae = `${figures.tick} ${gt} ${getPluginDisplayName(pe.plugin)}${Qe}. Run /reload-plugins to apply.`;
        if (T === "update") (k(Ae), await v(), a({ type: "menu" }));
        else Ot(Ae);
      } catch (le) {
        ke(!1);
        let ce = le instanceof Error ? le.message : String(le);
        (ie(`Failed to ${T}: ${ce}`),
          logForDebugging(`Failed to ${T} plugin: ${ce}`, { level: "error" }));
      }
    },
    ny = vr(xa);
  E(() => {
    if (ae === "plugin-details" && pe && me.current) {
      let T = me.current;
      if (((me.current = void 0), T === "configure")) {
        let Z = pe.plugin.manifest.userConfig;
        if (Z && Object.keys(Z).length > 0)
          Re({ type: "configuring-options", schema: Z });
        else k(`Plugin "${getPluginSource(pe.plugin)}" declares no userConfig options.`);
        return;
      }
      ny(T);
    }
  }, [ae, pe, k]);
  let oy = re(async () => {
      let T = Mn[Zn];
      if (!or(T)) return;
      if (T.kind === "disabled-header") {
        Oo((oe) => !oe);
        return;
      }
      let Z = T.item;
      if (Z.type === "flagged-plugin") return;
      if (Z.type === "plugin") {
        let oe = Z.id,
          le = Ve.get(oe),
          ce = p0e(oe, Z.plugin.manifest, fn),
          He = Z.scope;
        if (He === "builtin" || r9e(He)) {
          if (Ee.current.has(oe)) return;
          (Ee.current.add(oe), it((Ae) => new Set(Ae).add(oe)));
          let Qe = new Map(Ve);
          if (le)
            (Qe.delete(oe),
              ie(null),
              (async () => {
                try {
                  let Ae =
                    le === "will-disable"
                      ? await f0e(oe, void 0, I)
                      : await m0e(oe, void 0, I);
                  if (!Ae.success && !Ae.alreadyInGoalState) {
                    (ne((Ye) => {
                      let ot = new Map(Ye);
                      return (ot.set(oe, le), ot);
                    }),
                      ie(Ae.message));
                    return;
                  }
                  refreshPluginState(I, j);
                } catch (Ae) {
                  (ne((Ye) => {
                    let ot = new Map(Ye);
                    return (ot.set(oe, le), ot);
                  }),
                    ie(`Failed to reverse the toggle: ${l(Ae)}`),
                    logError(
                      dt(
                        ge(Ae),
                        "/plugin: reversing a pending toggle on the list threw",
                      ),
                    ));
                } finally {
                  Ee.current.delete(oe);
                }
              })());
          else
            (Qe.set(oe, ce ? "will-disable" : "will-enable"),
              ie(null),
              (async () => {
                try {
                  let Ae = ce
                    ? await m0e(oe, void 0, I)
                    : await f0e(oe, void 0, I);
                  if (!Ae.success) {
                    (ne((Ye) => {
                      let ot = new Map(Ye);
                      return (ot.delete(oe), ot);
                    }),
                      ie(Ae.message));
                    return;
                  }
                  if ((refreshPluginState(I, j), ce)) En("disable", oe);
                } catch (Ae) {
                  (ne((Ye) => {
                    let ot = new Map(Ye);
                    return (ot.delete(oe), ot);
                  }),
                    ie(`Failed to toggle: ${l(Ae)}`),
                    logError(
                      dt(
                        ge(Ae),
                        "/plugin: toggling a plugin on the list threw",
                      ),
                    ));
                } finally {
                  Ee.current.delete(oe);
                }
              })());
          ne(Qe);
        }
      } else if (Z.type === "mcp") {
        ie(null);
        let oe = Z.client.type !== "disabled" ? "disable" : "enable";
        Ge(Z.client.name).catch((le) => {
          ie(formatMcpToggleError(le, Z.client.name, oe, { persistsOffBox: !1 }));
        });
      } else if (Z.type === "skill") {
        if (te.current.has(Z.id)) return;
        let oe = hg(Z.override, Z.lockSource);
        if (oe === Z.override) return;
        (te.current.add(Z.id), it((ce) => new Set(ce).add(Z.id)));
        let { error: le } = await updateSettingsForSource(
          "localSettings",
          { skillOverrides: { [Z.cmdName]: Pg(Z, oe) } },
          void 0,
          I,
        );
        if ((te.current.delete(Z.id), le)) {
          ie(le.message);
          return;
        }
        Gt((ce) => ce + 1);
      }
    }, [Zn, Mn, Ve, yt, Ge, En, I, j, fn]),
    iy = re(() => {
      let T = Mn[Zn];
      if (!or(T)) return;
      if (T.kind === "disabled-header") {
        Oo((oe) => !oe);
        return;
      }
      let Z = T.item;
      if (Z.type === "plugin") {
        let oe = yt.find((le) => le.plugin.source === Z.plugin.source);
        if (oe) (tn(oe), Re("plugin-details"), ha(0), ie(null), $t(null));
      } else if (Z.type === "flagged-plugin")
        (Re({
          type: "flagged-detail",
          plugin: {
            id: Z.id,
            name: Z.name,
            marketplace: Z.marketplace,
            reason: Z.reason,
            text: Z.text,
            flaggedAt: Z.flaggedAt,
          },
        }),
          ie(null));
      else if (Z.type === "failed-plugin")
        (Re({
          type: "failed-plugin-details",
          plugin: {
            id: Z.id,
            name: Z.name,
            marketplace: Z.marketplace,
            errors: Z.errors,
            scope: Z.scope,
          },
        }),
          ha(0),
          ie(null));
      else if (Z.type === "mcp")
        (Re({ type: "mcp-detail", client: Z.client }), ie(null));
      else if (Z.type === "skill")
        (Re({ type: "skill-detail", skill: Z }), ie(null));
    }, [Zn, Mn, yt]);
  useKeybindings(
    {
      "select:previous": () => {
        let T = yr(Zn - 1, -1);
        if (T === -1) {
          if (!yn && Bt.length > 0) ze(!0);
        } else Oi.handleSelectionChange(T, No);
      },
      "select:next": () => {
        let T = yr(Zn + 1, 1);
        if (T !== -1) Oi.handleSelectionChange(T, No);
      },
      "select:accept": iy,
    },
    { context: "Select", isActive: ae === "plugin-list" && !Fe },
  );
  let ry = re(() => {
    let T = Mn[Zn];
    if (T?.kind !== "item") return !1;
    ((El.current = { section: T.section, id: T.item.id }), Tt(T.item.id));
  }, [Mn, Zn, Tt]);
  useKeybindings(
    { "plugin:toggle": oy, "plugin:favorite": ry },
    { context: "Plugin", isActive: ae === "plugin-list" && !Fe },
  );
  let ly = re(() => {
    if (typeof ae !== "object" || ae.type !== "flagged-detail") return;
    (clearFlaggedPlugin(ae.plugin.id, I), Re("plugin-list"));
  }, [ae, I]);
  useKeybindings(
    { "select:accept": ly },
    {
      context: "Select",
      isActive: typeof ae === "object" && ae.type === "flagged-detail",
    },
  );
  let Sa = V(() => {
    if (ae !== "plugin-details" || !pe) return [];
    let T = Rt,
      Z = p0e(T, pe.plugin.manifest, fn),
      oe = pe.marketplace === "builtin",
      le = isNonMarketplacePluginSource(pe.marketplace),
      ce = [];
    if (
      (ce.push({
        label: Z ? "Disable plugin" : "Enable plugin",
        action: () => void xa(Z ? "disable" : "enable"),
      }),
      ce.push({
        label: wo.has(T) ? "Remove from favorites" : "Add to favorites",
        action: () => Tt(T),
      }),
      !oe && !le)
    ) {
      if (
        (ce.push({
          label: pe.pendingUpdate ? "Unmark for update" : "Mark for update",
          action: async () => {
            try {
              let Qe = await gx(splitPluginId(T).name, pe.marketplace, I);
              if (Qe) {
                ie(Qe);
                return;
              }
              let Ae = [...yt],
                Ye = Ae.findIndex(
                  (ot) => ot.plugin.source === pe.plugin.source,
                );
              if (Ye !== -1)
                ((Ae[Ye].pendingUpdate = !pe.pendingUpdate),
                  Yn(Ae),
                  tn({ ...pe, pendingUpdate: !pe.pendingUpdate }));
            } catch (Qe) {
              ie(
                Qe instanceof Error
                  ? Qe.message
                  : "Failed to check plugin update availability",
              );
            }
          },
        }),
        Id)
      )
        ce.push({
          label: "Configure",
          action: async () => {
            Ml(!0);
            try {
              let Qe = pe.plugin.manifest.mcpServers,
                Ae = null;
              if (typeof Qe === "string" && isMcpbFile(Qe)) Ae = Qe;
              else if (Array.isArray(Qe)) {
                for (let eo of Qe)
                  if (typeof eo === "string" && isMcpbFile(eo)) {
                    Ae = eo;
                    break;
                  }
              }
              if (!Ae) {
                (ie("No MCPB file found in plugin"), Ml(!1));
                return;
              }
              let Ye = Rt,
                ot = await loadMcpbBundle(Ae, pe.plugin.path, Ye, void 0, void 0, !0, I);
              if ("status" in ot && ot.status === "needs-config")
                (ba(ot), Re("configuring"));
              else ie("Failed to load MCPB for configuration");
            } catch (Qe) {
              let Ae = l(Qe);
              ie(`Failed to load configuration: ${Ae}`);
            } finally {
              Ml(!1);
            }
          },
        });
      if (
        pe.plugin.manifest.userConfig &&
        Object.keys(pe.plugin.manifest.userConfig).length > 0
      )
        ce.push({
          label: "Configure options",
          action: () => {
            Re({
              type: "configuring-options",
              schema: pe.plugin.manifest.userConfig,
            });
          },
        });
      (ce.push({ label: "Update now", action: () => void xa("update") }),
        ce.push({ label: "Uninstall", action: () => void xa("uninstall") }));
    }
    let He = toHttpUrl(pe.plugin.manifest.homepage);
    if (He) ce.push({ label: "Open homepage", action: () => void tryOpenUrlInBrowser(He) });
    let gt = toHttpUrl(pe.plugin.manifest.repository);
    if (gt) ce.push({ label: "View repository", action: () => void tryOpenUrlInBrowser(gt) });
    if (isSkillDoctorEnabled()) ce.push({ label: "Usage", action: () => Re("plugin-usage") });
    return (
      ce.push({
        label: "Back to plugin list",
        action: () => {
          (Re("plugin-list"), tn(null), ie(null));
        },
      }),
      ce
    );
  }, [ae, pe, Id, yt, wo, Tt, I, fn]);
  (useKeybindings(
    {
      "select:previous": () => {
        if (ui > 0) ha(ui - 1);
      },
      "select:next": () => {
        if (ui < Sa.length - 1) ha(ui + 1);
      },
      "select:accept": () => {
        if (Sa[ui]) Sa[ui].action();
      },
    },
    { context: "Select", isActive: ae === "plugin-details" && !!pe },
  ),
    useKeybindings(
      {
        "select:accept": () => {
          if (typeof ae === "object" && ae.type === "failed-plugin-details")
            (async () => {
              (ke(!0), ie(null));
              let T = ae.plugin.id,
                Z = ae.plugin.scope,
                oe = r9e(Z)
                  ? await r4(T, Z, !1, I)
                  : await r4(T, "user", !1, I),
                le = oe.success;
              if (!le) {
                for (let ce of USER_PROJECT_LOCAL_SETTINGS_SOURCES)
                  if (getSettingsForSource(ce)?.enabledPlugins?.[T] !== void 0)
                    (await updateSettingsForSourceWithTransform(
                      ce,
                      (gt) => ({
                        enabledPlugins: { ...gt?.enabledPlugins, [T]: void 0 },
                      }),
                      void 0,
                      I,
                    ),
                      (le = !0));
                refreshPluginState(I, j);
              }
              if (le) (await v(), ke(!1), Re("plugin-list"));
              else (ke(!1), ie(oe.message));
            })();
        },
      },
      {
        context: "Select",
        isActive:
          typeof ae === "object" &&
          ae.type === "failed-plugin-details" &&
          ae.plugin.scope !== "managed" &&
          !isNonMarketplacePluginSource(ae.plugin.marketplace),
      },
    ));
  function sy(T) {
    if (T.ctrl || T.meta || Ce) return;
    if (!pe) return;
    let Z = Rt;
    if (T.key === "y" || T.key === "Y" || T.key === "return")
      (T.preventDefault(),
        ke(!0),
        ie(null),
        (async () => {
          try {
            let { error: oe } = await updateSettingsForSourceWithTransform(
              "localSettings",
              (le) => ({ enabledPlugins: { ...le?.enabledPlugins, [Z]: !1 } }),
              void 0,
              I,
            );
            if (oe) {
              (ke(!1), ie(`Failed to write settings: ${oe.message}`));
              return;
            }
            (refreshPluginState(I, j),
              En("disable", Z),
              Ot(
                `${figures.tick} Disabled ${getPluginDisplayName(pe.plugin)} in .claude/settings.local.json. Run /reload-plugins to apply.`,
              ));
          } catch (oe) {
            (ke(!1), ie(l(oe)));
          }
        })());
    else if (T.key === "u" || T.key === "U")
      (T.preventDefault(),
        ke(!0),
        ie(null),
        (async () => {
          try {
            let oe = he(),
              le = (getInstalledPlugins().plugins[Z] ?? []).some(
                (He) => He.scope === "project" && He.projectPath === oe,
              ),
              ce;
            if (le) {
              let He = await r4(Z, "project", !1, I);
              if (!He.success) {
                (ke(!1), ie(He.message));
                return;
              }
              ce = He.message;
            } else {
              let { error: He } = await updateSettingsForSourceWithTransform(
                "projectSettings",
                (gt) => {
                  let Qe = gt?.enabledPlugins ?? {},
                    Ae = findKeyIgnoringCase(Object.keys(Qe), Z) ?? Z;
                  return { enabledPlugins: { ...Qe, [Ae]: void 0 } };
                },
                void 0,
                I,
              );
              if (He) {
                (ke(!1), ie(`Failed to write settings: ${He.message}`));
                return;
              }
              ce = `Removed ${getPluginDisplayName(pe.plugin)} from .claude/settings.json`;
            }
            (refreshPluginState(I, j),
              En("uninstall", Z),
              Ot(`${figures.tick} ${ce}. Run /reload-plugins to apply.`));
          } catch (oe) {
            (ke(!1), ie(l(oe)));
          }
        })());
    else if (T.key === "n" || T.key === "N" || T.key === "escape")
      (T.preventDefault(), Re("plugin-details"), ie(null));
  }
  function cy(T) {
    if (T.ctrl || T.meta || Ce) return;
    if (!pe) return;
    let Z = Rt,
      oe = pe.scope;
    if (!oe || oe === "builtin" || !r9e(oe)) return;
    let le = async (ce) => {
      (ke(!0), ie(null));
      try {
        let He = await r4(Z, oe, ce, I);
        if (!He.success) throw Error(He.message);
        (refreshPluginState(I, j), En("uninstall", Z));
        let gt = ce ? "" : " \xB7 data preserved";
        Ot(`${figures.tick} ${He.message}${gt}`);
      } catch (He) {
        (ke(!1), ie(He instanceof Error ? He.message : String(He)));
      }
    };
    if (T.key === "y" || T.key === "Y") (T.preventDefault(), le(!0));
    else if (T.key === "n" || T.key === "N") (T.preventDefault(), le(!1));
    else if (T.key === "escape")
      (T.preventDefault(), Re("plugin-details"), ie(null));
  }
  E(() => {
    No(0);
  }, [Mt]);
  function dy(T) {
    if (Fe) {
      at(T);
      return;
    }
    if (T.ctrl || T.meta) return;
    if (T.key === "/") (T.preventDefault(), ze(!0), Lt(""), No(0));
    else if (T.key.length === 1 && T.key !== " ")
      (T.preventDefault(), ze(!0), Lt(T.key), No(0));
  }
  function py(T) {
    if (Fe) {
      Be(T);
      return;
    }
    let Z = (T.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (!Z) return;
    (T.preventDefault(), ze(!0), Lt(Z), No(0));
  }
  if (yn) return e(Text, { children: "Loading installed plugins\u2026" });
  if (Bt.length === 0)
    return r(Box, {
      flexDirection: "column",
      children: [
        e(Box, {
          marginBottom: 1,
          children: e(Text, { bold: !0, children: "Manage plugins" }),
        }),
        kt &&
          e(Box, {
            marginBottom: 1,
            paddingLeft: 2,
            children: e(Text, { color: "success", children: kt }),
          }),
        e(EmptyStateMessage, { children: "No plugins or MCP servers installed." }),
        e(Box, {
          marginTop: 1,
          children: e(Text, {
            dimColor: !0,
            children: e(ActionKeybindingHint, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "go back",
            }),
          }),
        }),
      ],
    });
  if (typeof ae === "object" && ae.type === "plugin-options" && pe) {
    let T = Rt;
    return e(Tr, {
      plugin: pe.plugin,
      pluginId: T,
      onDone: (Z, oe, le) => {
        let ce = getPluginDisplayName(pe.plugin);
        switch (Z) {
          case "configured":
          case "skipped":
            Ot(
              Z === "configured" && le
                ? `${figures.tick} Enabled and configured ${ce}. Run /reload-plugins to apply.`
                : `${figures.tick} Enabled ${ce}. Run /reload-plugins to apply.`,
            );
            break;
          case "error":
          case "read-error":
            (ie(
              Z === "error"
                ? `Failed to save configuration: ${oe}`
                : `Configuration not applied: could not read the saved options (${oe})`,
            ),
              ke(!1),
              _t((He) => He + 1),
              Re("plugin-details"),
              v());
            break;
        }
      },
    });
  }
  if (typeof ae === "object" && ae.type === "configuring-options" && pe) {
    let T = Rt;
    return e(
      Rr,
      {
        title: `Configure ${getPluginDisplayName(pe.plugin)}`,
        subtitle: "Plugin options",
        configSchema: ae.schema,
        load: () => loadPluginOptions(T, j),
        onSave: async (Z) => {
          try {
            (await savePluginOptions(T, Z, ae.schema, I), refreshPluginState(I, j));
            let oe = Object.keys(Z).length > 0;
            if (oe) v();
            k(
              oe
                ? "Configuration saved. Run /reload-plugins for changes to take effect."
                : "No configuration changes.",
            );
          } catch (oe) {
            ie(`Failed to save configuration: ${l(oe)}`);
          }
          Re("plugin-details");
        },
        onCancel: () => Re("plugin-details"),
      },
      T,
    );
  }
  if (ae === "configuring" && Ni && pe) {
    let oe = function () {
        (ba(null), Re("plugin-details"));
      },
      T = Rt;
    async function Z(le) {
      if (!Ni || !pe) return;
      try {
        let ce = pe.plugin.manifest.mcpServers,
          He = null;
        if (typeof ce === "string" && isMcpbFile(ce)) He = ce;
        else if (Array.isArray(ce)) {
          for (let gt of ce)
            if (typeof gt === "string" && isMcpbFile(gt)) {
              He = gt;
              break;
            }
        }
        if (!He) {
          (ie("No MCPB file found"), Re("plugin-details"));
          return;
        }
        (await loadMcpbBundle(He, pe.plugin.path, T, void 0, le, void 0, I),
          ie(null),
          ba(null),
          Re("plugin-details"),
          k(
            "Configuration saved. Run /reload-plugins for changes to take effect.",
          ));
      } catch (ce) {
        let He = l(ce);
        (ie(`Failed to save configuration: ${He}`), Re("plugin-details"));
      }
    }
    return e(Li, {
      title: `Configure ${toNonBlankString(Ni.manifest.display_name) ?? Ni.manifest.name}`,
      subtitle: `Plugin: ${getPluginDisplayName(pe.plugin)}`,
      configSchema: Ni.configSchema,
      initialValues: Ni.existingConfig,
      onSave: Z,
      onCancel: oe,
    });
  }
  if (typeof ae === "object" && ae.type === "flagged-detail") {
    let T = ae.plugin;
    return r(Box, {
      flexDirection: "column",
      children: [
        e(Box, {
          children: r(Text, {
            bold: !0,
            children: [T.name, " @ ", T.marketplace],
          }),
        }),
        r(Box, {
          marginBottom: 1,
          children: [
            e(Text, { dimColor: !0, children: "Status: " }),
            e(Text, { color: "error", children: "Removed" }),
          ],
        }),
        r(Box, {
          marginBottom: 1,
          flexDirection: "column",
          children: [
            r(Text, {
              color: "error",
              children: ["Removed from marketplace \xB7 reason: ", T.reason],
            }),
            e(Text, { children: T.text }),
            r(Text, {
              dimColor: !0,
              children: [
                "Flagged on ",
                new Date(T.flaggedAt).toLocaleDateString(),
              ],
            }),
          ],
        }),
        e(Box, {
          marginTop: 1,
          flexDirection: "column",
          children: r(SelectableRow, {
            active: !0,
            children: [
              r(Text, { "aria-hidden": !0, children: [figures.pointer, " "] }),
              e(Text, { color: "suggestion", children: "Dismiss" }),
            ],
          }),
        }),
        r(DotSeparatedList, {
          children: [
            e(ActionKeybindingHint, {
              action: "select:accept",
              context: "Select",
              fallback: "Enter",
              description: "dismiss",
            }),
            e(ActionKeybindingHint, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "go back",
            }),
          ],
        }),
      ],
    });
  }
  if (ae === "plugin-usage" && pe) return e(Qc, { plugin: pe.plugin });
  if (ae === "confirm-project-uninstall" && pe)
    return r(FocusableBox, {
      onKeyDown: sy,
      children: [
        r(Text, {
          bold: !0,
          color: "warning",
          children: [
            getPluginDisplayName(pe.plugin),
            " is enabled in .claude/settings.json (shared with your team)",
          ],
        }),
        r(Box, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            e(Text, {
              children:
                "Disable it just for you in .claude/settings.local.json?",
            }),
            e(Text, {
              dimColor: !0,
              children:
                "The plugin stays installed for the project; only your local override changes.",
            }),
          ],
        }),
        Oe && e(Box, { marginTop: 1, children: e(ErrorMessage, { error: Oe }) }),
        e(Box, {
          marginTop: 1,
          children: Ce
            ? e(Text, { dimColor: !0, children: "Processing\u2026" })
            : r(DotSeparatedList, {
                children: [
                  e(KeybindingHint, { chord: "y", action: "disable for me", bold: !0 }),
                  e(KeybindingHint, {
                    chord: "u",
                    action: "uninstall for everyone",
                    bold: !0,
                  }),
                  e(KeybindingHint, {
                    chord: "escape",
                    action: "cancel",
                    bold: !0,
                    format: { keyCase: "lower" },
                  }),
                ],
              }),
        }),
      ],
    });
  if (typeof ae === "object" && ae.type === "confirm-data-cleanup" && pe)
    return r(FocusableBox, {
      onKeyDown: cy,
      children: [
        r(Text, {
          bold: !0,
          children: [
            getPluginDisplayName(pe.plugin),
            " has",
            " ",
            ae.size.human,
            " of persistent data",
          ],
        }),
        r(Box, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            e(Text, { children: "Delete it along with the plugin?" }),
            e(Text, { dimColor: !0, children: getPluginDataDir(Rt) }),
          ],
        }),
        Oe && e(Box, { marginTop: 1, children: e(ErrorMessage, { error: Oe }) }),
        e(Box, {
          marginTop: 1,
          children: Ce
            ? e(Text, { dimColor: !0, children: "Uninstalling\u2026" })
            : r(DotSeparatedList, {
                children: [
                  e(KeybindingHint, { chord: "y", action: "delete", bold: !0 }),
                  e(KeybindingHint, { chord: "n", action: "keep", bold: !0 }),
                  e(KeybindingHint, {
                    chord: "escape",
                    action: "cancel",
                    bold: !0,
                    format: { keyCase: "lower" },
                  }),
                ],
              }),
        }),
      ],
    });
  if (ae === "plugin-details" && pe) {
    let T = Rt,
      Z = p0e(T, pe.plugin.manifest, fn),
      oe = B.filter((Ae) => z8(Ae, T, pe.plugin.name)),
      le = oe
        .filter((Ae) => !UJ(Ae))
        .map((Ae) => ({ message: Jo(Ae), guidance: ii(Ae) })),
      ce = [
        ...oe.filter(UJ).map((Ae) => ({ message: Jo(Ae), guidance: ii(Ae) })),
        ...K.filter((Ae) => z8(Ae, T, pe.plugin.name)).map((Ae) => ({
          message: formatPluginWarning(Ae),
          guidance: formatPluginWarningGuidance(Ae),
        })),
      ],
      He = getPluginDaysSinceLastUse(pe.plugin.repository),
      gt =
        le.length === 0 && ce.length === 0
          ? null
          : r(Box, {
              flexDirection: "column",
              marginBottom: 1,
              children: [
                e(uu, { entries: le, color: "error", noun: "error" }),
                e(uu, { entries: ce, color: "warning", noun: "note" }),
              ],
            }),
      Qe = sanitizePluginManifest(pe.plugin.manifest);
    return r(Box, {
      flexDirection: "column",
      children: [
        e(Box, {
          children: r(Text, {
            bold: !0,
            children: [getPluginDisplayName(pe.plugin), " @", " ", wr(pe.marketplace)],
          }),
        }),
        r(Box, {
          children: [
            e(Text, { dimColor: !0, children: "Scope: " }),
            e(Text, { children: pe.scope || "user" }),
          ],
        }),
        Qe.version &&
          r(Box, {
            children: [
              e(Text, { dimColor: !0, children: "Version: " }),
              e(Text, { children: Qe.version }),
            ],
          }),
        Qe.description &&
          e(Box, {
            marginBottom: 1,
            children: e(Text, { children: Qe.description }),
          }),
        Qe.author &&
          r(Box, {
            children: [
              e(Text, { dimColor: !0, children: "Author: " }),
              e(Text, { children: Qe.author.name }),
            ],
          }),
        r(Box, {
          marginBottom: 1,
          children: [
            e(Text, { dimColor: !0, children: "Status: " }),
            e(Text, {
              color: Z ? "success" : "warning",
              children: Z ? "Enabled" : "Disabled",
            }),
            pe.pendingUpdate &&
              e(Text, {
                color: "suggestion",
                children: " \xB7 Marked for update",
              }),
            He !== null &&
              r(Text, {
                dimColor: !0,
                children: [
                  " ",
                  "\xB7 Last used:",
                  " ",
                  He === 0 ? "today" : `${He} ${pluralize(He, "day")} ago`,
                ],
              }),
          ],
        }),
        Rt && e(Or, { pluginId: Rt, verb: "Updating", onShown: sn.record }, St),
        e(Tg, { plugin: pe.plugin, marketplace: pe.marketplace }),
        gt,
        e(Box, {
          marginTop: 1,
          flexDirection: "column",
          children: Sa.map((Ae, Ye) => {
            let ot = Ye === ui;
            return r(
              SelectableRow,
              {
                active: ot,
                children: [
                  ot && r(Text, { "aria-hidden": !0, children: [figures.pointer, " "] }),
                  !ot && e(Text, { "aria-hidden": !0, children: "  " }),
                  e(Text, {
                    bold: ot,
                    color: Ae.label.includes("Uninstall")
                      ? "error"
                      : Ae.label.includes("Update")
                        ? "suggestion"
                        : void 0,
                    children: Ae.label,
                  }),
                ],
              },
              Ye,
            );
          }),
        }),
        Ce &&
          e(Box, {
            marginTop: 1,
            children: e(Text, { children: "Processing\u2026" }),
          }),
        Oe && e(Box, { marginTop: 1, children: e(ErrorMessage, { error: Oe }) }),
        e(Box, {
          marginTop: 1,
          children: e(Text, {
            dimColor: !0,
            italic: !0,
            children: r(DotSeparatedList, {
              children: [
                e(ActionKeybindingHint, {
                  action: "select:previous",
                  context: "Select",
                  fallback: "\u2191",
                  description: "navigate",
                }),
                e(ActionKeybindingHint, {
                  action: "select:accept",
                  context: "Select",
                  fallback: "Enter",
                  description: "select",
                }),
                e(ActionKeybindingHint, {
                  action: "confirm:no",
                  context: "Settings",
                  fallback: "Esc",
                  description: "go back",
                }),
              ],
            }),
          }),
        }),
      ],
    });
  }
  if (typeof ae === "object" && ae.type === "failed-plugin-details") {
    let T = ae.plugin,
      Z = T.errors[0],
      oe = Z ? Jo(Z) : "Failed to load";
    return r(Box, {
      flexDirection: "column",
      children: [
        r(Text, {
          children: [
            e(Text, { bold: !0, children: wr(T.name) }),
            r(Text, { dimColor: !0, children: [" ", "@ ", wr(T.marketplace)] }),
            r(Text, { dimColor: !0, children: [" (", T.scope, ")"] }),
          ],
        }),
        e(Text, { color: "error", children: oe }),
        T.scope === "managed"
          ? e(Box, {
              marginTop: 1,
              children: e(Text, {
                dimColor: !0,
                children:
                  "Managed by your organization \u2014 contact your admin",
              }),
            })
          : isNonMarketplacePluginSource(T.marketplace)
            ? null
            : r(SelectableRow, {
                active: !0,
                marginTop: 1,
                children: [
                  r(Text, {
                    "aria-hidden": !0,
                    color: "suggestion",
                    children: [figures.pointer, " "],
                  }),
                  e(Text, { bold: !0, children: "Remove" }),
                ],
              }),
        Ce && e(Text, { children: "Processing\u2026" }),
        e(ErrorMessage, { error: Oe }),
        isNonMarketplacePluginSource(T.marketplace) &&
          e(Box, {
            marginTop: 1,
            children: e(Text, { dimColor: !0, children: hx(T.marketplace) }),
          }),
        e(Box, {
          marginTop: 1,
          children: e(Text, {
            dimColor: !0,
            italic: !0,
            children: r(DotSeparatedList, {
              children: [
                T.scope !== "managed" &&
                  !isNonMarketplacePluginSource(T.marketplace) &&
                  e(ActionKeybindingHint, {
                    action: "select:accept",
                    context: "Select",
                    fallback: "Enter",
                    description: "remove",
                  }),
                e(ActionKeybindingHint, {
                  action: "confirm:no",
                  context: "Settings",
                  fallback: "Esc",
                  description: "go back",
                }),
              ],
            }),
          }),
        }),
      ],
    });
  }
  if (typeof ae === "object" && ae.type === "skill-detail") {
    let T = ae.skill,
      Z = [T.override, ...px.filter((le) => le !== T.override)],
      oe = async (le) => {
        if (le === T.override) return;
        let { error: ce } = await updateSettingsForSource(
          "localSettings",
          { skillOverrides: { [T.cmdName]: Pg(T, le) } },
          void 0,
          I,
        );
        if (ce) {
          ie(ce.message);
          return;
        }
        (it((He) => new Set(He).add(T.id)),
          Gt((He) => He + 1),
          Re({ type: "skill-detail", skill: { ...T, override: le } }));
      };
    return r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        e(Text, { bold: !0, children: T.name }),
        T.description && e(Text, { dimColor: !0, children: T.description }),
        T.whenToUse &&
          r(Text, { dimColor: !0, children: ["When to use: ", T.whenToUse] }),
        r(Text, {
          dimColor: !0,
          children: [
            "Source: ",
            T.source,
            " \xB7 ~",
            T.tokenEstimate,
            " tokens",
          ],
        }),
        r(Text, {
          dimColor: !0,
          children: [
            "Usage:",
            " ",
            T.usage
              ? `${T.usage.count}\xD7 \xB7 last used ${T.usage.daysSinceUse === 0 ? "today" : `${T.usage.daysSinceUse}d ago`}`
              : "never invoked",
          ],
        }),
        T.allowedTools &&
          T.allowedTools.length > 0 &&
          r(Text, {
            dimColor: !0,
            children: ["Allowed tools: ", yx(T.allowedTools)],
          }),
        T.skillRoot &&
          r(Text, { dimColor: !0, children: ["Path: ", T.skillRoot] }),
        T.lockSource === "policy" || T.lockSource === "flag"
          ? r(Text, {
              dimColor: !0,
              children: [
                "State: ",
                T.override,
                " (locked by ",
                T.lockSource,
                " settings)",
              ],
            })
          : r(Box, {
              flexDirection: "column",
              children: [
                r(Text, {
                  children: [
                    "State:",
                    T.lockSource === "author" &&
                      r(Text, {
                        dimColor: !0,
                        children: [
                          " ",
                          "(on/name-only locked by frontmatter disable-model-invocation)",
                        ],
                      }),
                  ],
                }),
                e(
                  iye,
                  {
                    visibleCount: 4,
                    onSelect: (le) => {
                      let ce = Z[le];
                      if (T.lockSource === "author" && ce !== "off") {
                        oe("user-invocable-only");
                        return;
                      }
                      oe(ce);
                    },
                    children: Z.map((le) => {
                      let ce =
                        T.lockSource === "author" &&
                        le !== "user-invocable-only" &&
                        le !== "off";
                      return e(
                        iye.Item,
                        {
                          children: r(Text, {
                            dimColor: ce,
                            children: [
                              le === T.override ? figures.radioOn : figures.radioOff,
                              " ",
                              le,
                              ce ? " (locked)" : "",
                            ],
                          }),
                        },
                        le,
                      );
                    }),
                  },
                  T.override,
                ),
              ],
            }),
        r(DotSeparatedList, {
          children: [
            e(KeybindingHint, { chord: "Enter", action: "set state" }),
            e(Text, { dimColor: !0, children: " \xB7 " }),
            e(KeybindingHint, { chord: "Esc", action: "go back" }),
          ],
        }),
      ],
    });
  }
  if (typeof ae === "object" && ae.type === "mcp-detail") {
    let T = ae.client,
      Z = getMcpServerTools(X, T.name).length,
      oe = () => {
        Re({ type: "mcp-tools", client: T });
      },
      le = () => {
        Re("plugin-list");
      },
      ce = (Qe) => {
        if (Qe) k(Qe);
        Re("plugin-list");
      },
      He = T.config.scope,
      gt = T.config.type ?? "stdio";
    if (gt === "stdio") {
      let Qe = {
        name: T.name,
        client: T,
        scope: He,
        transport: "stdio",
        config: T.config,
      };
      return e(sit, {
        server: Qe,
        serverToolsCount: Z,
        onViewTools: oe,
        onCancel: le,
        onComplete: ce,
        borderless: !0,
      });
    } else if (gt === "sse") {
      let Qe = {
        name: T.name,
        client: T,
        scope: He,
        transport: "sse",
        isAuthenticated: void 0,
        config: T.config,
      };
      return e(sye, {
        server: Qe,
        serverToolsCount: Z,
        onViewTools: oe,
        onCancel: le,
        onComplete: ce,
        borderless: !0,
      });
    } else if (gt === "http") {
      let Qe = {
        name: T.name,
        client: T,
        scope: He,
        transport: "http",
        isAuthenticated: void 0,
        config: T.config,
      };
      return e(sye, {
        server: Qe,
        serverToolsCount: Z,
        onViewTools: oe,
        onCancel: le,
        onComplete: ce,
        borderless: !0,
      });
    } else if (gt === "claudeai-proxy") {
      let Qe = {
        name: T.name,
        client: T,
        scope: He,
        transport: "claudeai-proxy",
        isAuthenticated: void 0,
        config: T.config,
      };
      return e(sye, {
        server: Qe,
        serverToolsCount: Z,
        onViewTools: oe,
        onCancel: le,
        onComplete: ce,
        borderless: !0,
      });
    }
    return r(Box, {
      flexDirection: "column",
      paddingX: 1,
      children: [
        r(Text, {
          color: "warning",
          children: ["No details view for ", T.name, " (transport: ", gt, ")."],
        }),
        e(DotSeparatedList, {
          children: e(ActionKeybindingHint, {
            action: "confirm:no",
            context: "Settings",
            fallback: "Esc",
            description: "go back",
          }),
        }),
      ],
    });
  }
  if (typeof ae === "object" && ae.type === "mcp-tools") {
    let T = ae.client,
      Z = T.config.scope,
      oe = T.config.type ?? "stdio",
      le;
    if (oe === "stdio")
      le = {
        name: T.name,
        client: T,
        scope: Z,
        transport: "stdio",
        config: T.config,
      };
    else if (oe === "sse")
      le = {
        name: T.name,
        client: T,
        scope: Z,
        transport: "sse",
        isAuthenticated: void 0,
        config: T.config,
      };
    else if (oe === "http")
      le = {
        name: T.name,
        client: T,
        scope: Z,
        transport: "http",
        isAuthenticated: void 0,
        config: T.config,
      };
    else
      le = {
        name: T.name,
        client: T,
        scope: Z,
        transport: "claudeai-proxy",
        isAuthenticated: void 0,
        config: T.config,
      };
    return e(iWe, {
      server: le,
      onSelectTool: (ce) => {
        Re({ type: "mcp-tool-detail", client: T, tool: ce });
      },
      onBack: () => Re({ type: "mcp-detail", client: T }),
    });
  }
  if (typeof ae === "object" && ae.type === "mcp-tool-detail") {
    let { client: T, tool: Z } = ae,
      oe = T.config.scope,
      le = T.config.type ?? "stdio",
      ce;
    if (le === "stdio")
      ce = {
        name: T.name,
        client: T,
        scope: oe,
        transport: "stdio",
        config: T.config,
      };
    else if (le === "sse")
      ce = {
        name: T.name,
        client: T,
        scope: oe,
        transport: "sse",
        isAuthenticated: void 0,
        config: T.config,
      };
    else if (le === "http")
      ce = {
        name: T.name,
        client: T,
        scope: oe,
        transport: "http",
        isAuthenticated: void 0,
        config: T.config,
      };
    else
      ce = {
        name: T.name,
        client: T,
        scope: oe,
        transport: "claudeai-proxy",
        isAuthenticated: void 0,
        config: T.config,
      };
    return e(sWe, {
      tool: Z,
      server: ce,
      onBack: () => Re({ type: "mcp-tools", client: T }),
    });
  }
  let my = Oi.getVisibleItems(Mn);
  return r(Box, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: dy,
    onPaste: py,
    children: [
      e(Box, {
        marginBottom: 1,
        children: e(SearchInput, {
          query: Mt,
          isFocused: Fe,
          isTerminalFocused: we,
          width: xt - 4,
          cursorOffset: We,
          onCursorOffsetChange: nt,
          onFocus: () => ze(!0),
        }),
      }),
      isSafeMode() &&
        e(Box, {
          marginBottom: 1,
          paddingLeft: 2,
          children: r(Text, {
            color: "warning",
            children: [
              "Safe mode: plugins are disabled this session \u2014 changes here save but won't load until safe mode is off.",
              " ",
              capitalize(getSafeModeExitHint()),
              " to re-enable.",
            ],
          }),
        }),
      kt &&
        e(Box, {
          marginBottom: 1,
          paddingLeft: 2,
          children: e(Text, { color: "success", children: kt }),
        }),
      Mn.length === 0 &&
        Mt &&
        e(Box, {
          marginBottom: 1,
          children: r(EmptyStateMessage, { children: ['No items match "', Mt, '"'] }),
        }),
      Oi.scrollPosition.canScrollUp &&
        e(Box, {
          children: r(Text, {
            dimColor: !0,
            children: [" ", figures.arrowUp, " more above"],
          }),
        }),
      my.map((T, Z) => {
        let oe = Oi.toActualIndex(Z),
          le = oe === Zn && !Fe;
        switch (T.kind) {
          case "spacer":
            return e(Box, { height: 1 }, `spacer:${oe}`);
          case "section-header":
            return e(
              Box,
              {
                paddingLeft: 2,
                children: e(Text, {
                  dimColor: T.section !== "attention",
                  color: T.section === "attention" ? "warning" : void 0,
                  bold: !0,
                  children:
                    T.section === "attention"
                      ? "Needs attention"
                      : T.section === "disused"
                        ? "Not used recently"
                        : "Favorites",
                }),
              },
              `section:${T.section}`,
            );
          case "scope-header":
            return e(
              Box,
              {
                paddingLeft: 4,
                children: e(Text, { dimColor: !0, children: mx(T.scope) }),
              },
              `scope:${oe}`,
            );
          case "disabled-header":
            return e(
              SelectableRow,
              {
                active: le,
                paddingLeft: 2,
                children: r(Text, {
                  color: le ? "suggestion" : void 0,
                  children: [
                    e(Text, {
                      "aria-hidden": !0,
                      children: le ? `${figures.pointer} ` : "  ",
                    }),
                    nn ? figures.arrowDown : figures.arrowRight,
                    " Show",
                    T.disabledCount > 0 &&
                      r(N, {
                        children: [
                          " ",
                          "disabled ",
                          r(Text, {
                            dimColor: !0,
                            children: ["(", T.disabledCount, ")"],
                          }),
                        ],
                      }),
                    T.disabledCount > 0 &&
                      T.unusedConnectorCount > 0 &&
                      " \xB7",
                    T.unusedConnectorCount > 0 &&
                      r(N, {
                        children: [
                          " ",
                          "unused claude.ai connectors",
                          " ",
                          r(Text, {
                            dimColor: !0,
                            children: ["(", T.unusedConnectorCount, ")"],
                          }),
                        ],
                      }),
                  ],
                }),
              },
              "section:disabled",
            );
          case "item":
            return e(
              Jc,
              {
                item: T.item,
                isSelected: le,
                health:
                  T.item.type === "plugin" ? fe?.get(T.item.name) : void 0,
              },
              `${T.section}:${T.item.id}`,
            );
        }
      }),
      Oi.scrollPosition.canScrollDown &&
        e(Box, {
          children: r(Text, {
            dimColor: !0,
            children: [" ", figures.arrowDown, " more below"],
          }),
        }),
      e(Box, {
        marginTop: 1,
        marginLeft: 1,
        children: e(Text, {
          dimColor: !0,
          italic: !0,
          children: r(DotSeparatedList, {
            children: [
              e(Text, { children: "Type to search" }),
              e(ActionKeybindingHint, {
                action: "plugin:toggle",
                context: "Plugin",
                fallback: "Space",
                description: "toggle",
              }),
              e(ActionKeybindingHint, {
                action: "plugin:favorite",
                context: "Plugin",
                fallback: "f",
                description: "favorite",
              }),
              e(ActionKeybindingHint, {
                action: "select:accept",
                context: "Select",
                fallback: "Enter",
                description: "view",
              }),
              e(ActionKeybindingHint, {
                action: "confirm:no",
                context: "Settings",
                fallback: "Esc",
                description: "go back",
              }),
            ],
          }),
        }),
      }),
      Oe &&
        e(Box, { marginTop: 1, marginLeft: 1, children: e(ErrorMessage, { error: Oe }) }),
      Ve.size > 0 &&
        e(Box, {
          marginLeft: 1,
          children: e(Text, {
            dimColor: !0,
            italic: !0,
            children: "Run /reload-plugins to apply changes",
          }),
        }),
    ],
  });
}
function yx(a) {
  return replaceControlChars(a.join(", "));
}
function hx(a) {
  switch (a) {
    case INLINE_PLUGIN_SOURCE:
      return "This --plugin-dir copy did not load (see above); nothing is running from it. Fix or drop the directory; edits take effect after /reload-plugins.";
    case SKILLS_DIR_PLUGIN_SOURCE:
      return "This skills-directory copy did not load (see above) \u2014 fix, delete or rename the directory; edits take effect after /reload-plugins.";
    case SYNCED_PLUGIN_SOURCE:
      return "This claude.ai copy did not load (see above) \u2014 remove or rename the plugin on claude.ai to clear it.";
  }
}
function mu(a) {
  if (!a) return { type: "menu" };
  let k = a.trim().split(/\s+/);
  switch (k[0]?.toLowerCase()) {
    case "help":
    case "--help":
    case "-h":
      return { type: "help" };
    case "list":
    case "ls": {
      let b = k.slice(1).find((w) => w === "--enabled" || w === "--disabled");
      if (b)
        return {
          type: "list",
          filter: b === "--enabled" ? "enabled" : "disabled",
        };
      return { type: "list" };
    }
    case "install":
    case "i": {
      let b = k[1];
      if (!b) return { type: "install" };
      let w = b.lastIndexOf("@");
      if (w > 0) {
        let A = b.slice(0, w),
          Q = b.slice(w + 1);
        return { type: "install", plugin: A, marketplace: Q };
      }
      if (
        !b.startsWith("@") &&
        (b.startsWith("http://") ||
          b.startsWith("https://") ||
          b.startsWith("file://") ||
          b.includes("/") ||
          b.includes("\\"))
      )
        return { type: "install", marketplace: b };
      return { type: "install", plugin: b };
    }
    case "manage":
      return { type: "manage" };
    case "stats": {
      if (isSkillDoctorEnabled()) return { type: "stats" };
      return { type: "menu" };
    }
    case "uninstall":
      return { type: "uninstall", plugin: k[1] };
    case "enable":
      return { type: "enable", plugin: k[1] };
    case "disable":
      return { type: "disable", plugin: k[1] };
    case "configure":
    case "config":
      return { type: "configure", plugin: k[1] };
    case "validate":
      return { type: "validate", path: k.slice(1).join(" ").trim() || void 0 };
    case "eval":
      return { type: "menu" };
    case "tag": {
      let b = new Set(["--push", "--dry-run", "--force", "-f"]),
        w = k.slice(1),
        R = w.filter((I) => I.startsWith("-")),
        A = w.filter((I) => !I.startsWith("-")),
        Q = R.find((I) => !b.has(I)) ?? A[1];
      return {
        type: "tag",
        path: A[0],
        push: R.includes("--push"),
        dryRun: R.includes("--dry-run"),
        force: R.includes("--force") || R.includes("-f"),
        ...(Q !== void 0 && { unknownFlag: Q }),
      };
    }
    case "marketplace":
    case "market": {
      let b = k[1]?.toLowerCase(),
        w = k.slice(2).join(" ");
      switch (b) {
        case "add":
          return { type: "marketplace", action: "add", target: w };
        case "remove":
        case "rm":
          return { type: "marketplace", action: "remove", target: w };
        case "update":
          return { type: "marketplace", action: "update", target: w };
        case "list":
          return { type: "marketplace", action: "list" };
        default:
          return { type: "marketplace" };
      }
    }
    default:
      return { type: "menu" };
  }
}
F();
function Ax(M0) {
  return M0.source;
}
function Ox($0) {
  return $0.usageCount > 0;
}
function Nx(Vg) {
  return r(
    Text,
    {
      children: [
        "  ",
        e(Text, { color: "warning", children: removeInvisibleChars(Vg.name) }),
        e(Text, {
          dimColor: !0,
          children: `  last used ${Vg.daysSinceLastUse} days ago`,
        }),
      ],
    },
    Vg.pluginId,
  );
}
function Nu(a) {
  return collectSkillUsageData(a).then(
    (k) => {
      if (k.rows.length === 0) logFeatureSad("cli_skill_doctor", "no_user_skills");
      else if (k.weekTokensNote !== null)
        logFeatureSad("cli_skill_doctor", "scan_policy_denied");
      else logFeatureOk("cli_skill_doctor");
      return { ok: !0, report: k };
    },
    (k) => {
      let v = k instanceof SkillDoctorStageError ? k.cause : k;
      return (
        logError(v),
        logFeatureBad(
          "cli_skill_doctor",
          k instanceof SkillDoctorStageError ? k.featureErrorCode : "render_failed",
        ),
        { ok: !1, message: l(v) }
      );
    },
  );
}
function kl(h0) {
  let ra = _(11),
    { getReport: Ig, onExit: k0 } = h0,
    bx;
  if (ra[0] !== Ig) ((bx = () => Ig()), (ra[0] = Ig), (ra[1] = bx));
  else bx = ra[1];
  let [Rg] = d(bx),
    [b0] = d(getSkillTokenCountsAccess),
    Sx;
  if (ra[2] === MEMO_CACHE_SENTINEL) ((Sx = { context: "Confirmation" }), (ra[2] = Sx));
  else Sx = ra[2];
  useKeybinding("confirm:no", k0, Sx);
  let vx;
  if (ra[3] === MEMO_CACHE_SENTINEL)
    ((vx = e(Text, { bold: !0, children: "Skills loaded this session" })),
      (ra[3] = vx));
  else vx = ra[3];
  const Eg = b0.allowed
    ? "Scanning local sessions\u2026"
    : "Computing skill usage\u2026";
  let wx;
  if (ra[4] !== Eg)
    ((wx = r(Box, {
      flexDirection: "column",
      children: [
        vx,
        e(Box, { marginTop: 1, children: e(Text, { dimColor: !0, children: Eg }) }),
      ],
    })),
      (ra[4] = Eg),
      (ra[5] = wx));
  else wx = ra[5];
  let Mg = wx,
    gu;
  if (ra[6] !== Rg)
    ((gu = e(Du, { reportPromise: Rg })), (ra[6] = Rg), (ra[7] = gu));
  else gu = ra[7];
  let Cx;
  if (ra[8] !== Mg || ra[9] !== gu)
    ((Cx = e(Dn, { fallback: Mg, children: gu })),
      (ra[8] = Mg),
      (ra[9] = gu),
      (ra[10] = Cx));
  else Cx = ra[10];
  return Cx;
}
function Du(x0) {
  let rr = _(22),
    { reportPromise: S0 } = x0,
    ll = kn(S0);
  if (!ll.ok) {
    let sl;
    if (rr[0] !== ll.message)
      ((sl = r(Text, {
        dimColor: !0,
        wrap: "wrap",
        children: [
          "Couldn't compute skill usage. Run with --debug for details. (",
          ll.message,
          ")",
        ],
      })),
        (rr[0] = ll.message),
        (rr[1] = sl));
    else sl = rr[1];
    return sl;
  }
  let {
      rows: ri,
      unusedOwned: $g,
      unusedFromPlugins: Dg,
      unusedFromMcp: Bg,
      unusedSynced: Ag,
      unusedMcpServers: Og,
      disusedPlugins: Ng,
      weekTokensNote: yu,
    } = ll.report,
    sl;
  if (rr[2] === MEMO_CACHE_SENTINEL)
    ((sl = e(Text, { bold: !0, children: "Skills loaded this session" })),
      (rr[2] = sl));
  else sl = rr[2];
  let hu;
  if (rr[3] !== ri)
    ((hu = e(Box, {
      flexDirection: "column",
      marginTop: 1,
      children: e(Bu, { rows: ri }),
    })),
      (rr[3] = ri),
      (rr[4] = hu));
  else hu = rr[4];
  let ku;
  if (rr[5] !== ri.length || rr[6] !== yu)
    ((ku =
      ri.length > 0 &&
      r(Box, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          r(Text, {
            dimColor: !0,
            wrap: "wrap",
            children: [
              "  ",
              "context = this skill's one-line listing in the system prompt, included every turn",
            ],
          }),
          r(Text, {
            dimColor: !0,
            wrap: "wrap",
            children: [
              "  ",
              "(dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)",
            ],
          }),
          yu === null
            ? r(Text, {
                dimColor: !0,
                wrap: "wrap",
                children: [
                  "  ",
                  "7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine",
                ],
              })
            : r(Text, {
                dimColor: !0,
                wrap: "wrap",
                children: ["  ", "7d tokens: ", yu],
              }),
        ],
      })),
      (rr[5] = ri.length),
      (rr[6] = yu),
      (rr[7] = ku));
  else ku = rr[7];
  let bu;
  if (
    rr[8] !== ri ||
    rr[9] !== Bg ||
    rr[10] !== Dg ||
    rr[11] !== Og ||
    rr[12] !== $g ||
    rr[13] !== Ag
  )
    ((bu = e(Au, {
      rows: ri,
      unusedOwned: $g,
      unusedSynced: Ag,
      unusedFromPlugins: Dg,
      unusedFromMcp: Bg,
      unusedMcpServers: Og,
    })),
      (rr[8] = ri),
      (rr[9] = Bg),
      (rr[10] = Dg),
      (rr[11] = Og),
      (rr[12] = $g),
      (rr[13] = Ag),
      (rr[14] = bu));
  else bu = rr[14];
  let xu;
  if (rr[15] !== Ng)
    ((xu = e(Ou, { disusedPlugins: Ng })), (rr[15] = Ng), (rr[16] = xu));
  else xu = rr[16];
  let Px;
  if (rr[17] !== hu || rr[18] !== ku || rr[19] !== bu || rr[20] !== xu)
    ((Px = r(Box, { flexDirection: "column", children: [sl, hu, ku, bu, xu] })),
      (rr[17] = hu),
      (rr[18] = ku),
      (rr[19] = bu),
      (rr[20] = xu),
      (rr[21] = Px));
  else Px = rr[21];
  return Px;
}
function Bu(v0) {
  let Su = _(7),
    { rows: cl } = v0;
  if (cl.length === 0) {
    let ul;
    if (Su[0] === MEMO_CACHE_SENTINEL)
      ((ul = e(Text, { dimColor: !0, children: "  (no skills loaded)" })),
        (Su[0] = ul));
    else ul = Su[0];
    return ul;
  }
  let ul;
  if (Su[1] !== cl) {
    let { cells: C0, widths: Zo } = buildSkillTableLayout(cl);
    const P0 = padEndToWidth("skill", Zo.name);
    const T0 = padEndToWidth("source", Zo.source);
    const I0 = padStartToWidth("context", Zo.context);
    const R0 = padStartToWidth("7d tokens", Zo.week);
    const Lg = Zo.uses + 1;
    let Tx;
    if (Su[3] !== Lg) ((Tx = padStartToWidth("uses", Lg)), (Su[3] = Lg), (Su[4] = Tx));
    else Tx = Su[4];
    const _g = `  ${P0}  ${T0}  ${I0}  ${R0}  ${Tx}  last used`;
    let Ix;
    if (Su[5] !== _g)
      ((Ix = e(Text, { dimColor: !0, children: _g })), (Su[5] = _g), (Su[6] = Ix));
    else Ix = Su[6];
    ul = r(Box, {
      flexDirection: "column",
      children: [
        Ix,
        cl.map((dl, Rx) => {
          let Fg = C0[Rx];
          return r(
            Text,
            {
              color: dl.usageCount === 0 ? "warning" : void 0,
              children: [
                `  ${padEndToWidth(dl.name, Zo.name)}  `,
                e(Text, { dimColor: !0, children: padEndToWidth(dl.source, Zo.source) }),
                `  ${padStartToWidth(Fg.context, Zo.context)}  ${padStartToWidth(Fg.week, Zo.week)}  ${padStartToWidth(String(dl.usageCount), Zo.uses)}\xD7  ${Fg.lastUsed}`,
              ],
            },
            `${Rx}:${dl.name}`,
          );
        }),
      ],
    });
    ((Su[1] = cl), (Su[2] = ul));
  } else ul = Su[2];
  return ul;
}
function Au(E0) {
  let sr = _(33),
    {
      rows: vu,
      unusedOwned: ar,
      unusedFromPlugins: aa,
      unusedFromMcp: pl,
      unusedSynced: Ri,
      unusedMcpServers: lr,
    } = E0;
  if (vu.length === 0) {
    return null;
  }
  let wu, Cu, ml, Pu, Tu, fl, yl, Iu;
  if (
    sr[0] !== aa ||
    sr[1] !== lr ||
    sr[2] !== ar.length ||
    sr[3] !== Ri.length
  ) {
    let Ex = dedupe(aa.map(Ax));
    let cr;
    if (sr[12] !== lr)
      ((cr = lr.length > 0 ? `, from ${lr.join(", ")}` : ""),
        (sr[12] = lr),
        (sr[13] = cr));
    else cr = sr[13];
    Cu = cr;
    ml = lr.length <= 1;
    wu = Box;
    Pu = "column";
    Tu = 1;
    if (sr[14] !== ar.length)
      ((fl =
        ar.length > 0 &&
        e(Text, {
          color: "warning",
          wrap: "wrap",
          children: `${ar.length} ${pluralize(ar.length, "skill")} loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`,
        })),
        (sr[14] = ar.length),
        (sr[15] = fl));
    else fl = sr[15];
    if (sr[16] !== Ri.length)
      ((yl =
        Ri.length > 0 &&
        e(Text, {
          color: "warning",
          wrap: "wrap",
          children: `${Ri.length} ${pluralize(Ri.length, "skill")} synced from claude.ai loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or turn ${Ri.length === 1 ? "it" : "them"} off on claude.ai \u2014 a deleted synced copy is re-downloaded on the next sync.`,
        })),
        (sr[16] = Ri.length),
        (sr[17] = yl));
    else yl = sr[17];
    Iu =
      aa.length > 0 &&
      e(Text, {
        color: "warning",
        wrap: "wrap",
        children: `${aa.length} plugin ${pluralize(aa.length, "skill")} loaded but never invoked, from ${Ex.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually \u2014 disable ${Ex.length === 1 ? "the plugin" : "those plugins"} in the Installed tab.`,
      });
    ((sr[0] = aa),
      (sr[1] = lr),
      (sr[2] = ar.length),
      (sr[3] = Ri.length),
      (sr[4] = wu),
      (sr[5] = Cu),
      (sr[6] = ml),
      (sr[7] = Pu),
      (sr[8] = Tu),
      (sr[9] = fl),
      (sr[10] = yl),
      (sr[11] = Iu));
  } else
    ((wu = sr[4]),
      (Cu = sr[5]),
      (ml = sr[6]),
      (Pu = sr[7]),
      (Tu = sr[8]),
      (fl = sr[9]),
      (yl = sr[10]),
      (Iu = sr[11]));
  let cr;
  if (sr[18] !== Cu || sr[19] !== ml || sr[20] !== pl.length)
    ((cr =
      pl.length > 0 &&
      e(Text, {
        color: "warning",
        wrap: "wrap",
        children: `${pl.length} MCP ${pluralize(pl.length, "skill")} loaded but never invoked${Cu}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk \u2014 turning ${ml ? "that server" : "those servers"} off in /mcp also removes ${ml ? "its" : "their"} tools.`,
      })),
      (sr[18] = Cu),
      (sr[19] = ml),
      (sr[20] = pl.length),
      (sr[21] = cr));
  else cr = sr[21];
  let Ru;
  if (sr[22] !== vu)
    ((Ru =
      vu.every(Ox) &&
      e(Text, {
        color: "success",
        children: "All loaded skills have been used at least once.",
      })),
      (sr[22] = vu),
      (sr[23] = Ru));
  else Ru = sr[23];
  let Mx;
  if (
    sr[24] !== wu ||
    sr[25] !== Pu ||
    sr[26] !== Tu ||
    sr[27] !== fl ||
    sr[28] !== yl ||
    sr[29] !== Iu ||
    sr[30] !== cr ||
    sr[31] !== Ru
  )
    ((Mx = r(wu, {
      flexDirection: Pu,
      marginTop: Tu,
      children: [fl, yl, Iu, cr, Ru],
    })),
      (sr[24] = wu),
      (sr[25] = Pu),
      (sr[26] = Tu),
      (sr[27] = fl),
      (sr[28] = yl),
      (sr[29] = Iu),
      (sr[30] = cr),
      (sr[31] = Ru),
      (sr[32] = Mx));
  else Mx = sr[32];
  return Mx;
}
function Ou(D0) {
  let hl = _(8),
    { disusedPlugins: Eu } = D0;
  if (Eu.length === 0) {
    return null;
  }
  let $x;
  if (hl[0] === MEMO_CACHE_SENTINEL)
    (($x = e(Text, { bold: !0, children: "Plugins not used recently" })),
      (hl[0] = $x));
  else $x = hl[0];
  let Mu;
  if (hl[1] !== Eu) ((Mu = Eu.map(Nx)), (hl[1] = Eu), (hl[2] = Mu));
  else Mu = hl[2];
  let $u;
  if (hl[3] !== Mu)
    (($u = e(Box, { flexDirection: "column", marginTop: 1, children: Mu })),
      (hl[3] = Mu),
      (hl[4] = $u));
  else $u = hl[4];
  let Dx;
  if (hl[5] === MEMO_CACHE_SENTINEL)
    ((Dx = e(Box, {
      marginTop: 1,
      children: r(Text, {
        dimColor: !0,
        children: ["  ", "Manage these in the Installed tab"],
      }),
    })),
      (hl[5] = Dx));
  else Dx = hl[5];
  let Bx;
  if (hl[6] !== $u)
    ((Bx = r(Box, {
      flexDirection: "column",
      marginTop: 1,
      children: [$x, $u, Dx],
    })),
      (hl[6] = $u),
      (hl[7] = Bx));
  else Bx = hl[7];
  return Bx;
}
F();
function Hx(H0) {
  return `${figures.warning} ${H0}`;
}
var bl = `Usage: /plugin tag [path] [--push] [--dry-run] [-f|--force]

Create a {name}--v{version} git tag for the plugin at <path> (default: .).
Validates plugin.json and any enclosing marketplace entry agree on the version.

For -m/--message and --remote, use the CLI: claude plugin tag --help`;
function xl(V0) {
  let Lx = _(9),
    {
      onComplete: Ei,
      path: _u,
      push: Fu,
      dryRun: Uu,
      force: ur,
      unknownFlag: dr,
    } = V0,
    _x,
    Fx;
  if (
    Lx[0] !== Uu ||
    Lx[1] !== ur ||
    Lx[2] !== Ei ||
    Lx[3] !== _u ||
    Lx[4] !== Fu ||
    Lx[5] !== dr
  )
    ((_x = () => {
      jg();
      async function jg() {
        if (dr !== void 0) {
          Ei(
            dr === "--help" || dr === "-h"
              ? bl
              : `${figures.cross} Unexpected argument "${dr}".

${bl}`,
          );
          return;
        }
        let Vu = await e9e(_u ?? ".", { force: ur });
        let mo = Vu.warnings.map(Hx);
        if (!Vu.ok) {
          (mo.push(`${figures.cross} ${Vu.error}`),
            Ei(
              mo.join(`
`),
            ));
          return;
        }
        let { plan: qn } = Vu;
        if (
          (mo.push(
            `Plugin:  ${qn.pluginName}`,
            `Version: ${qn.version} (from ${qn.versionFrom})`,
          ),
          qn.marketplace)
        )
          mo.push(
            `Marketplace entry: plugins[${qn.marketplace.entryIndex}] in ${qn.marketplace.path}` +
              (qn.marketplace.entryVersion
                ? ` (version: ${qn.marketplace.entryVersion})`
                : ""),
          );
        mo.push(`Tag:     ${qn.tag}`, "");
        let Ux = `git -C ${qn.gitRoot} push ${ur ? "--force " : ""}origin refs/tags/${qn.tag}`;
        if (Uu) {
          (mo.push(
            `${figures.tick} Dry run \u2014 would create tag ${qn.tag} at HEAD in ${qn.gitRoot}`,
            `  git -C ${qn.gitRoot} tag ${ur ? "-f " : ""}-a ${qn.tag} -m "${u0e(qn, void 0)}"`,
            `  ${Ux}`,
          ),
            Ei(
              mo.join(`
`),
            ));
          return;
        }
        let Hg = await t9e(qn, {
          push: Fu,
          force: ur,
          message: void 0,
          remote: "origin",
        });
        if (!Hg.ok) {
          (mo.push(`${figures.cross} ${Hg.error}`),
            Ei(
              mo.join(`
`),
            ));
          return;
        }
        (mo.push(`${figures.tick} Created tag ${qn.tag}`),
          mo.push(
            Hg.pushed ? `${figures.tick} Pushed to origin` : `  Push with: ${Ux}`,
          ),
          mo.push(
            "",
            "For -m/--message and --remote, use: claude plugin tag --help",
          ),
          Ei(
            mo.join(`
`),
          ));
      }
    }),
      (Fx = [Ei, _u, Fu, Uu, ur, dr]),
      (Lx[0] = Uu),
      (Lx[1] = ur),
      (Lx[2] = Ei),
      (Lx[3] = _u),
      (Lx[4] = Fu),
      (Lx[5] = dr),
      (Lx[6] = _x),
      (Lx[7] = Fx));
  else ((_x = Lx[6]), (Fx = Lx[7]));
  E(_x, Fx);
  let Vx;
  if (Lx[8] === MEMO_CACHE_SENTINEL)
    ((Vx = e(Box, {
      flexDirection: "column",
      children: e(Text, { children: "Preparing tag\u2026" }),
    })),
      (Lx[8] = Vx));
  else Vx = Lx[8];
  return Vx;
}
F();
function Jx(iO) {
  return iO.success;
}
function Zx(rO) {
  return rO.warnings.length > 0;
}
function vl(tO) {
  let Kx = _(5),
    { onComplete: la, path: sa } = tO,
    qx,
    zx;
  if (Kx[0] !== la || Kx[1] !== sa)
    ((qx = () => {
      let qg = async function qg() {
        if (!sa) {
          la(`Usage: /plugin validate <path>

Validate a plugin or marketplace manifest, or the skills, agents,
and commands in a directory.

Examples:
  /plugin validate .claude-plugin/plugin.json
  /plugin validate /path/to/plugin-directory
  /plugin validate .claude/skills
  /plugin validate .claude
  /plugin validate .

When given a directory, validates .claude-plugin/marketplace.json
or .claude-plugin/plugin.json (prefers marketplace if both exist).
With no manifest, the components are validated instead: a directory
named skills, agents, or commands validates its own; a directory
named .claude validates the ones inside it; any other directory
validates the ones under .claude, plus its top-level ones if a
.claude-plugin directory or a skills/<name>/SKILL.md marks it as a
plugin checkout.

Or from the command line:
  claude plugin validate <path>`);
          return;
        }
        try {
          let { manifest: ca, contents: Wx, resolvedPath: nO } = await ZWe(sa);
          let Kg = ca ? [ca, ...Wx] : Wx;
          let Et = ca
            ? `Validating ${ca.fileType} manifest: ${ca.filePath}

`
            : `Validating components in: ${nO}

`;
          for (const go of Kg) {
            if (go !== ca) {
              Et =
                Et +
                `Validating ${go.fileType}: ${go.filePath}

`;
              Et;
            }
            if (go.errors.length > 0)
              ((Et =
                Et +
                `${figures.cross} Found ${go.errors.length} ${pluralize(go.errors.length, "error")}:

`),
                Et,
                go.errors.forEach((Gx) => {
                  Et =
                    Et +
                    `  ${figures.pointer} ${Gx.path}: ${Gx.message}
`;
                  Et;
                }),
                (Et =
                  Et +
                  `
`),
                Et);
            if (go.warnings.length > 0)
              ((Et =
                Et +
                `${figures.warning} Found ${go.warnings.length} ${pluralize(go.warnings.length, "warning")}:

`),
                Et,
                go.warnings.forEach((Qx) => {
                  Et =
                    Et +
                    `  ${figures.pointer} ${Qx.path}: ${Qx.message}
`;
                  Et;
                }),
                (Et =
                  Et +
                  `
`),
                Et);
            if (go.notes !== void 0)
              (go.notes.forEach((oO) => {
                Et =
                  Et +
                  `  ${figures.pointer} ${oO}
`;
                Et;
              }),
                (Et =
                  Et +
                  `
`),
                Et);
          }
          if (Kg.every(Jx))
            ((Et =
              Et +
              (Kg.some(Zx)
                ? `${figures.tick} Validation passed with warnings
`
                : `${figures.tick} Validation passed
`)),
              Et,
              (process.exitCode = 0));
          else
            ((Et =
              Et +
              `${figures.cross} Validation failed
`),
              Et,
              (process.exitCode = 1));
          la(Et);
        } catch (ju) {
          let Yx = ju;
          ((process.exitCode = 2),
            logForDebugging(`Plugin validation failed unexpectedly for ${sa}: ${l(Yx)}`, {
              level: "error",
            }),
            la(
              `${figures.cross} Unexpected error during validation: ${ek(l(Yx), 200)}`,
            ));
        }
      };
      qg();
    }),
      (zx = [la, sa]),
      (Kx[0] = la),
      (Kx[1] = sa),
      (Kx[2] = qx),
      (Kx[3] = zx));
  else ((qx = Kx[2]), (zx = Kx[3]));
  E(qx, zx);
  let ju;
  if (Kx[4] === MEMO_CACHE_SENTINEL)
    ((ju = e(Box, {
      flexDirection: "column",
      children: e(Text, { children: "Running validation..." }),
    })),
      (Kx[4] = ju));
  else ju = Kx[4];
  return ju;
}
function wv() {
  return null;
}
function Cv(iN) {
  return `  \u2022 ${iN}`;
}
function Pv(fN) {
  return fN.plugins.errors;
}
function Tv(hN) {
  return hN.plugins.enabled;
}
function Iv(kN) {
  return kN.plugins.disabled;
}
function Rv(bN) {
  return bN.source;
}
function Ev(SN) {
  return SN.workerInventory?.plugins ?? null;
}
function Mv(vN) {
  return sanitizeForDisplay(vN);
}
function $v(KN) {
  return KN.plugins.errors;
}
function Dv(qN) {
  return qN.plugins.warnings;
}
function Av(zN) {
  return zN.plugins.enabled;
}
function Ov(WN) {
  return WN.plugins.disabled;
}
function Nv(GN) {
  return GN.plugins.installationStatus;
}
function Lv(QN) {
  return QN.status === "failed";
}
function _v(YN) {
  return YN.name;
}
function Fv(JN) {
  return JN.scope;
}
function Uv(XN) {
  return Math.max(0, XN - 1);
}
function Vv() {
  return new Set();
}
function Hv(iL) {
  return !UJ(iL);
}
function jv(kv) {
  let bv = countMatching(kv.plugins.errors, Hv);
  for (const rL of kv.plugins.installationStatus.marketplaces) {
    if (rL.status === "failed") bv++;
  }
  return bv;
}
function kd(tN) {
  let eS = _(5),
    { onComplete: ua } = tN,
    { storageV5: Hu } = useStorageV5Context(),
    tS,
    nS;
  if (eS[0] !== ua || eS[1] !== Hu)
    ((tS = () => {
      let Yg = async function Yg() {
        let oS = await getKnownMarketplaces(Hu);
        let zg = Object.keys(oS);
        let iS = await listClaudeAiMarketplaces().catch(wv);
        let { available: Wg, hosted: Gg } = filterUnconfiguredMarketplaces(iS, oS);
        let Qg = iS?.browseOnly ?? [];
        if (
          zg.length === 0 &&
          Wg.length === 0 &&
          Gg.length === 0 &&
          Qg.length === 0
        )
          ua("No marketplaces configured");
        else {
          let wl =
            zg.length > 0
              ? ["Configured marketplaces:", ...zg.map(Cv)]
              : ["No marketplaces configured"];
          if (Wg.length > 0 || Gg.length > 0 || Qg.length > 0)
            wl.push("From claude.ai:");
          for (const Ku of Wg)
            wl.push(
              `  \u2022 ${wr(Ku.name)} (available from claude.ai${Ku.scope ? `, ${Ku.scope}` : ""} \u2014 not added) \xB7 ${wr(formatMarketplaceSource(Ku.source))}`,
            );
          for (const rS of Gg)
            wl.push(
              `  \u2022 ${wr(formatMarketplaceRowLabel(rS))} \u2014 hosted on claude.ai, ${formatMarketplaceScopeLabel(rS.scope)} \xB7 not added`,
            );
          for (const nN of Qg)
            wl.push(`  \u2022 ${wr(formatBrowseOnlyMarketplace(nN))} (browse on claude.ai)`);
          ua(
            wl.join(`
`),
          );
        }
      };
      Yg().catch((oN) => ua(`Error loading marketplaces: ${l(oN)}`));
    }),
      (nS = [ua, Hu]),
      (eS[0] = ua),
      (eS[1] = Hu),
      (eS[2] = tS),
      (eS[3] = nS));
  else ((tS = eS[2]), (nS = eS[3]));
  E(tS, nS);
  let aS;
  if (eS[4] === MEMO_CACHE_SENTINEL)
    ((aS = e(Text, { children: "Loading marketplaces..." })), (eS[4] = aS));
  else aS = eS[4];
  return aS;
}
function xd(rN) {
  let lS = _(8),
    { onComplete: da, filter: pa } = rN,
    qu = useAppStateSelector(Pv),
    Cl = useAppStateSelector(Tv),
    zu = useAppStateSelector(Iv),
    sS,
    cS;
  if (
    lS[0] !== Cl ||
    lS[1] !== pa ||
    lS[2] !== zu ||
    lS[3] !== qu ||
    lS[4] !== da
  )
    ((sS = () => {
      let uS = getInstalledPlugins();
      let dS = Object.keys(uS.plugins).sort();
      if (dS.length === 0) {
        da("No plugins installed. Use `/plugin install` to install a plugin.");
        return;
      }
      let aN = getPluginEditableScopes();
      let lN = new Set(Cl.map(Rv));
      let pS = ["Installed plugins:"];
      let mS = 0;
      for (const Mi of dS) {
        let sN = beforeFirst(Mi, "@");
        let Jg = aN.has(Mi);
        if (pa !== void 0 && (pa === "enabled") !== Jg) {
          continue;
        }
        let gS = qu.some(
          (Wu) =>
            !UJ(Wu) &&
            (Wu.source === Mi || ("plugin" in Wu && Wu.plugin === sN)),
        );
        let cN = gS
          ? `${figures.cross} failed to load`
          : Jg
            ? `${figures.tick} enabled`
            : `${figures.cross} disabled`;
        let uN =
          !gS && Jg !== lN.has(Mi)
            ? " \u2014 run /reload-plugins to apply"
            : "";
        let mN = (
          Cl.find((dN) => dN.source === Mi) ?? zu.find((pN) => pN.source === Mi)
        )?.manifest.version;
        for (const Xg of uS.plugins[Mi] ?? []) {
          let fS = formatVersionLabel(Xg.version, mN);
          let gN = fS ? `${fS}, ${Xg.scope}` : Xg.scope;
          (pS.push(`  \u2022 ${Mi} (${gN}) ${cN}${uN}`), mS++);
        }
      }
      if (mS === 0) {
        da(`No ${pa} plugins.`);
        return;
      }
      da(
        pS.join(`
`),
      );
    }),
      (cS = [da, qu, Cl, zu, pa]),
      (lS[0] = Cl),
      (lS[1] = pa),
      (lS[2] = zu),
      (lS[3] = qu),
      (lS[4] = da),
      (lS[5] = sS),
      (lS[6] = cS));
  else ((sS = lS[5]), (cS = lS[6]));
  E(sS, cS);
  let yS;
  if (lS[7] === MEMO_CACHE_SENTINEL)
    ((yS = e(Text, { children: "Loading plugins..." })), (lS[7] = yS));
  else yS = lS[7];
  return yS;
}
function Sd() {
  return null;
}
function vd() {
  let xN = _(1),
    hS;
  if (xN[0] === MEMO_CACHE_SENTINEL)
    ((hS = e(Box, {
      marginTop: 1,
      children: e(StatusLine, {
        status: "info",
        children: "Skills are now managed here under the Skills section.",
      }),
    })),
      (xN[0] = hS));
  else hS = xN[0];
  return hS;
}
function wd() {
  let Gu = _(7),
    Pl = useAppStateSelector(Ev),
    Qu;
  if (Gu[0] !== Pl)
    ((Qu =
      Pl === null
        ? "The cloud session hasn't reported which plugins it loaded (it does at the start of each turn)."
        : Pl.length === 0
          ? "The cloud session loaded no plugins."
          : `The cloud session loaded: ${Pl.map(Mv).join(", ")}.`),
      (Gu[0] = Pl),
      (Gu[1] = Qu));
  else Qu = Gu[1];
  let Yu;
  if (Gu[2] !== Qu)
    ((Yu = e(StatusLine, { status: "info", children: Qu })),
      (Gu[2] = Qu),
      (Gu[3] = Yu));
  else Yu = Gu[3];
  let kS;
  if (Gu[4] === MEMO_CACHE_SENTINEL)
    ((kS = e(Text, {
      dimColor: !0,
      wrap: "wrap-trim",
      children:
        "Changes here update this machine's plugins and future cloud sessions (/cloud-plugins decides whether they are sent), and reach a running cloud session only when this machine next attaches to it (or on your first Yes in /cloud-plugins); /reload-plugins re-reads the running session's own.",
    })),
      (Gu[4] = kS));
  else kS = Gu[4];
  let bS;
  if (Gu[5] !== Yu)
    ((bS = r(Box, { marginTop: 1, flexDirection: "column", children: [Yu, kS] })),
      (Gu[5] = Yu),
      (Gu[6] = bS));
  else bS = Gu[6];
  return bS;
}
function Cd() {
  let wN = _(1),
    xS;
  if (wN[0] === MEMO_CACHE_SENTINEL)
    ((xS = e(Box, {
      marginTop: 1,
      children: e(StatusLine, {
        status: "info",
        children:
          "/skill-doctor moved \u2014 skill usage and context costs now live in this Stats tab.",
      }),
    })),
      (wN[0] = xS));
  else xS = wN[0];
  return xS;
}
function Pd(a) {
  let k = [],
    v = [
      { source: "userSettings", scope: "user" },
      { source: "projectSettings", scope: "project" },
      { source: "localSettings", scope: "local" },
    ];
  for (let { source: R, scope: A } of v)
    if (getSettingsForSource(R)?.extraKnownMarketplaces?.[a]) k.push({ source: R, scope: A });
  let b = getSettingsForSource("policySettings"),
    w = Boolean(b?.extraKnownMarketplaces?.[a]);
  return { editableSources: k, isInPolicy: w };
}
function qf(a) {
  let { editableSources: k, isInPolicy: v } = Pd(a);
  if (k.length > 0)
    return { kind: "remove-extra-marketplace", name: a, sources: k };
  if (v) return { kind: "managed-only", name: a };
  return {
    kind: "navigate",
    tab: "marketplaces",
    viewState: {
      type: "manage-marketplaces",
      targetMarketplace: a,
      action: "remove",
    },
  };
}
function Sv(a) {
  return {
    kind: "navigate",
    tab: "installed",
    viewState: {
      type: "manage-plugins",
      targetPlugin: a.name,
      ...(a.marketplace !== void 0 && { targetMarketplace: a.marketplace }),
      ...(a.marketplace !== void 0 &&
        !isReservedMarketplaceName(a.marketplace) && { action: "uninstall" }),
    },
  };
}
var vv = new Set(["git-auth-failed", "git-timeout", "network-error"]);
function zf(a) {
  return (
    a.type === "marketplace-not-found" ||
    a.type === "marketplace-load-failed" ||
    a.type === "marketplace-blocked-by-policy"
  );
}
function Gf(a) {
  if (vv.has(a.type)) return !0;
  if (a.type === "marketplace-load-failed" && a.reason === "cache-miss")
    return !0;
  if (a.type === "marketplace-not-found") return !0;
  return !1;
}
function Qf(a, k, v) {
  let b = getNonMarketplacePluginSource(a.source),
    w = "marketplace" in a ? a.marketplace : void 0,
    R = k ?? (b || getPluginMarketplace(a.source) !== void 0 ? splitPluginIdOnLastAt(a.source).name : void 0),
    A = b ?? w ?? getPluginMarketplace(a.source);
  return {
    key: R === void 0 ? void 0 : normalizeLookupKey(A ? `${R}@${A}` : R),
    label: R === void 0 ? a.source : A ? `${R} @ ${A}` : R,
    scope:
      editableScopeOf(v, a.source) ?? (R !== void 0 && b ? editableScopeOf(v, `${R}@${b}`) : void 0),
    named: R !== void 0,
  };
}
function Yf(a, k, v, b, w, R, A, Q, I) {
  let j = [];
  for (let B of R) {
    let K = "pluginId" in B ? B.pluginId : "plugin" in B ? B.plugin : void 0;
    j.push({
      label: K ?? B.source,
      message: Jo(B),
      guidance: ii(B) ?? "Restart to retry loading plugins",
      action: { kind: "none" },
    });
  }
  let q = new Set();
  for (let B of a) {
    q.add(B.name);
    let K = qf(B.name),
      se = Pd(B.name),
      fe = se.isInPolicy ? "managed" : se.editableSources[0]?.scope;
    j.push({
      label: B.name,
      message: B.error ?? "Installation failed",
      guidance:
        K.kind === "managed-only"
          ? "Managed by your organization \u2014 contact your admin"
          : void 0,
      action: K,
      scope: fe,
    });
  }
  for (let B of k) {
    let K = "marketplace" in B ? B.marketplace : B.source;
    if (q.has(K)) continue;
    q.add(K);
    let se = qf(K),
      fe = Pd(K),
      Fe = fe.isInPolicy ? "managed" : fe.editableSources[0]?.scope;
    j.push({
      label: K,
      message: Jo(B),
      guidance:
        se.kind === "managed-only"
          ? "Managed by your organization \u2014 contact your admin"
          : ii(B),
      action: se,
      scope: Fe,
    });
  }
  for (let B of w) {
    if (q.has(B.name)) continue;
    (q.add(B.name),
      j.push({
        label: B.name,
        message: B.error,
        action: { kind: "remove-installed-marketplace", name: B.name },
      }));
  }
  let X = new Set();
  for (let B of v) {
    let K = Qf(B, getErrorPluginId(B), Q);
    if (K.key !== void 0 && X.has(K.key)) continue;
    if (K.key !== void 0) X.add(K.key);
    let se = UJ(B);
    j.push({
      label: K.label,
      message: Jo(B),
      guidance: ii(B),
      action: K.named && !se ? Sv(yUn(B, I)) : { kind: "none" },
      isAdvisory: se || void 0,
      scope: K.scope,
    });
  }
  for (let B of b)
    j.push({
      label: B.source,
      message: Jo(B),
      guidance: ii(B),
      action: { kind: "none" },
    });
  for (let B of A) {
    let K = Qf(B, "plugin" in B ? B.plugin : void 0, Q),
      se = K.key ?? normalizeLookupKey(B.source),
      fe = "plugin" in B ? se : `${B.type}:${se}`;
    if (X.has(fe)) continue;
    (X.add(fe),
      j.push({
        label: K.label,
        message: formatPluginWarning(B),
        guidance: formatPluginWarningGuidance(B),
        action: { kind: "none" },
        scope: K.scope,
        isAdvisory: !0,
      }));
  }
  return j;
}
function Jf(a, k, v) {
  for (let { source: b } of k)
    updateSettingsForSourceWithTransform(
      b,
      (w) => {
        if (!w) return null;
        let R = {};
        if (w.extraKnownMarketplaces?.[a])
          R.extraKnownMarketplaces = {
            ...w.extraKnownMarketplaces,
            [a]: void 0,
          };
        if (w.enabledPlugins) {
          let A = `@${a}`,
            Q = !1,
            I = { ...w.enabledPlugins };
          for (let j in I) if (j.endsWith(A)) ((I[j] = void 0), (Q = !0));
          if (Q) R.enabledPlugins = I;
        }
        return Object.keys(R).length > 0 ? R : null;
      },
      void 0,
      v,
    );
}
function Td(CN) {
  let to = _(27),
    { setViewState: Ju, setActiveTab: PN, markPluginsChanged: SS } = CN,
    { storageV5: ai, credentials: Zg } = useStorageV5Context(),
    TN = useAppStateSelector($v),
    IN = useAppStateSelector(Dv),
    RN = useAppStateSelector(Av),
    EN = useAppStateSelector(Ov),
    MN = useAppStateSelector(Nv),
    $N = useSetAppState(),
    [ef, tf] = d(0),
    [Xu, nf] = d(null),
    vS;
  if (to[0] === MEMO_CACHE_SENTINEL) ((vS = []), (to[0] = vS));
  else vS = to[0];
  let [DN, wS] = d(vS),
    CS,
    PS;
  if (to[1] !== ai)
    ((CS = () => {
      (async () => {
        try {
          let BN = await getKnownMarketplaces(ai);
          let { failures: AN } = await loadMarketplaces(BN, ai);
          wS(AN);
        } catch {}
      })();
    }),
      (PS = [ai]),
      (to[1] = ai),
      (to[2] = CS),
      (to[3] = PS));
  else ((CS = to[2]), (PS = to[3]));
  E(CS, PS);
  let TS = MN.marketplaces.filter(Lv),
    ON = new Set(TS.map(_v)),
    IS = [],
    RS = [],
    ES = [],
    MS = [];
  for (const $i of TN) {
    if (Gf($i)) IS.push($i);
    else if (zf($i)) {
      if (!ON.has($i.marketplace)) RS.push($i);
    } else if (getErrorPluginId($i) !== void 0) ES.push($i);
    else MS.push($i);
  }
  let pr = Yf(TS, RS, ES, MS, DN, IS, IN, getPluginEditableScopes(), [...RN, ...EN]),
    $S;
  if (to[4] !== Ju)
    (($S = () => {
      Ju({ type: "menu" });
    }),
      (to[4] = Ju),
      (to[5] = $S));
  else $S = to[5];
  let DS;
  if (to[6] === MEMO_CACHE_SENTINEL) ((DS = { context: "Confirmation" }), (to[6] = DS));
  else DS = to[6];
  useKeybinding("confirm:no", $S, DS);
  let VN = () => {
      let BS = pr[ef];
      if (!BS) {
        return;
      }
      let { action: fo } = BS;
      bb54: switch (fo.kind) {
        case "navigate": {
          (PN(fo.tab), Ju(fo.viewState));
          break bb54;
        }
        case "remove-extra-marketplace": {
          let NN = fo.sources.map(Fv).join(", ");
          (Jf(fo.name, fo.sources, ai),
            refreshPluginState(ai, Zg),
            $N((Tl) => ({
              ...Tl,
              plugins: {
                ...Tl.plugins,
                errors: Tl.plugins.errors.filter(
                  (AS) => !("marketplace" in AS && AS.marketplace === fo.name),
                ),
                installationStatus: {
                  ...Tl.plugins.installationStatus,
                  marketplaces:
                    Tl.plugins.installationStatus.marketplaces.filter(
                      (LN) => LN.name !== fo.name,
                    ),
                },
              },
            })),
            nf(`${figures.tick} Removed "${fo.name}" from ${NN} settings`),
            SS());
          break bb54;
        }
        case "remove-installed-marketplace": {
          (async () => {
            try {
              (await removeMarketplace(fo.name, void 0, ai, Zg),
                refreshPluginState(ai, Zg),
                wS((FN) => FN.filter((UN) => UN.name !== fo.name)),
                nf(`${figures.tick} Removed marketplace "${fo.name}"`),
                SS());
            } catch (_N) {
              let of = _N;
              nf(
                `Failed to remove "${fo.name}": ${of instanceof Error ? of.message : String(of)}`,
              );
            }
          })();
          break bb54;
        }
        case "managed-only": {
          break bb54;
        }
        case "none":
      }
    },
    OS;
  if (to[7] === MEMO_CACHE_SENTINEL) ((OS = () => tf(Uv)), (to[7] = OS));
  else OS = to[7];
  const rf = pr.length > 0;
  let NS;
  if (to[8] !== rf)
    ((NS = { context: "Select", isActive: rf }), (to[8] = rf), (to[9] = NS));
  else NS = to[9];
  useKeybindings(
    {
      "select:previous": OS,
      "select:next": () => tf((jN) => Math.min(pr.length - 1, jN + 1)),
      "select:accept": VN,
    },
    NS,
  );
  let ma = Math.min(ef, Math.max(0, pr.length - 1));
  if (ma !== ef) tf(ma);
  let af = pr[ma]?.action,
    sf = af && af.kind !== "none" && af.kind !== "managed-only";
  if (pr.length === 0) {
    let Zu;
    if (to[10] === MEMO_CACHE_SENTINEL)
      ((Zu = e(Box, {
        marginLeft: 1,
        children: e(EmptyStateMessage, { children: "No plugin errors" }),
      })),
        (to[10] = Zu));
    else Zu = to[10];
    let ed;
    if (to[11] === MEMO_CACHE_SENTINEL)
      ((ed = r(Box, {
        flexDirection: "column",
        children: [
          Zu,
          e(Box, {
            marginTop: 1,
            children: e(Text, {
              dimColor: !0,
              italic: !0,
              children: e(ActionKeybindingHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "go back",
              }),
            }),
          }),
        ],
      })),
        (to[11] = ed));
    else ed = to[11];
    return ed;
  }
  const cf = Box,
    Zu = "column",
    ed = 1;
  let LS;
  if (to[12] !== ma)
    ((LS = (Di, _S) => {
      let Il = _S === ma;
      let FS = Di.isAdvisory ? "warning" : "error";
      let HN = Il ? figures.pointer : Di.isAdvisory ? figures.triangleUpOutline : figures.cross;
      return r(
        SelectableRow,
        {
          active: Il,
          marginLeft: 1,
          flexDirection: "column",
          children: [
            r(Text, {
              children: [
                r(Text, {
                  "aria-hidden": Il,
                  color: Il ? "suggestion" : FS,
                  children: [HN, " "],
                }),
                e(Text, { bold: Il, children: wr(Di.label) }),
                Di.scope &&
                  r(Text, { dimColor: !0, children: [" (", Di.scope, ")"] }),
              ],
            }),
            e(Box, {
              marginLeft: 3,
              children: e(Text, {
                color: FS,
                wrap: "wrap-trim",
                children: sanitizeMultilineForDisplay(Di.message),
              }),
            }),
            Di.guidance &&
              e(Box, {
                marginLeft: 3,
                children: e(Text, {
                  dimColor: !0,
                  italic: !0,
                  wrap: "wrap-trim",
                  children: sanitizeMultilineForDisplay(Di.guidance),
                }),
              }),
          ],
        },
        _S,
      );
    }),
      (to[12] = ma),
      (to[13] = LS));
  else LS = to[13];
  const uf = pr.map(LS);
  let td;
  if (to[14] !== Xu)
    ((td =
      Xu &&
      e(Box, {
        marginLeft: 1,
        children: e(Text, { color: "claude", children: wr(Xu) }),
      })),
      (to[14] = Xu),
      (to[15] = td));
  else td = to[15];
  let US;
  if (to[16] === MEMO_CACHE_SENTINEL)
    ((US = e(ActionKeybindingHint, {
      action: "select:previous",
      context: "Select",
      fallback: "\u2191",
      description: "navigate",
    })),
      (to[16] = US));
  else US = to[16];
  let nd;
  if (to[17] !== sf)
    ((nd =
      sf &&
      e(ActionKeybindingHint, {
        action: "select:accept",
        context: "Select",
        fallback: "Enter",
        description: "resolve",
      })),
      (to[17] = sf),
      (to[18] = nd));
  else nd = to[18];
  let VS;
  if (to[19] === MEMO_CACHE_SENTINEL)
    ((VS = e(ActionKeybindingHint, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "go back",
    })),
      (to[19] = VS));
  else VS = to[19];
  let od;
  if (to[20] !== nd)
    ((od = e(Box, {
      children: e(Text, {
        dimColor: !0,
        italic: !0,
        children: r(DotSeparatedList, { children: [US, nd, VS] }),
      }),
    })),
      (to[20] = nd),
      (to[21] = od));
  else od = to[21];
  let jS;
  if (to[22] !== cf || to[23] !== uf || to[24] !== td || to[25] !== od)
    ((jS = r(cf, { flexDirection: Zu, gap: ed, children: [uf, td, od] })),
      (to[22] = cf),
      (to[23] = uf),
      (to[24] = td),
      (to[25] = od),
      (to[26] = jS));
  else jS = to[26];
  return jS;
}
function Xf(a) {
  switch (a.type) {
    case "help":
      return { type: "help" };
    case "validate":
      return { type: "validate", path: a.path };
    case "eval":
      return { type: "eval", target: a.target };
    case "tag":
      return {
        type: "tag",
        path: a.path,
        push: a.push,
        dryRun: a.dryRun,
        force: a.force,
        unknownFlag: a.unknownFlag,
      };
    case "install":
      if (a.marketplace)
        return {
          type: "browse-marketplace",
          targetMarketplace: a.marketplace,
          targetPlugin: a.plugin,
        };
      if (a.plugin) return { type: "discover-plugins", targetPlugin: a.plugin };
      return { type: "discover-plugins" };
    case "manage":
      return { type: "manage-plugins" };
    case "stats":
      return { type: "stats" };
    case "uninstall":
      return {
        type: "manage-plugins",
        targetPlugin: a.plugin,
        action: "uninstall",
      };
    case "enable":
      return {
        type: "manage-plugins",
        targetPlugin: a.plugin,
        action: "enable",
      };
    case "disable":
      return {
        type: "manage-plugins",
        targetPlugin: a.plugin,
        action: "disable",
      };
    case "configure":
      return {
        type: "manage-plugins",
        targetPlugin: a.plugin,
        action: "configure",
      };
    case "list":
      return { type: "plugin-list", filter: a.filter };
    case "marketplace":
      if (a.action === "list") return { type: "marketplace-list" };
      if (a.action === "add")
        return { type: "add-marketplace", initialValue: a.target };
      if (a.action === "remove")
        return {
          type: "manage-marketplaces",
          targetMarketplace: a.target,
          action: "remove",
        };
      if (a.action === "update")
        return {
          type: "manage-marketplaces",
          targetMarketplace: a.target,
          action: "update",
        };
      return { type: "menu" };
    case "menu":
    default:
      return { type: "discover-plugins" };
  }
}
function Zf(a) {
  if (a.type === "manage-plugins") return "installed";
  if (a.type === "stats") return "stats";
  if (a.type === "manage-marketplaces") return "marketplaces";
  return "discover";
}
function aWe(ZN) {
  let At = _(127),
    {
      onComplete: qt,
      args: df,
      showMcpRedirectMessage: pf,
      showSkillsRedirectMessage: mf,
      showSkillDoctorRedirectMessage: gf,
      getSessionContext: hf,
      getSkillStatsInputs: fr,
      commands: kf,
      getReloadCacheImpactOptions: id,
      cloudSession: bf,
    } = ZN,
    Rl,
    HS;
  if (At[0] !== df)
    ((Rl = mu(df)), (HS = Xf(Rl)), (At[0] = df), (At[1] = Rl), (At[2] = HS));
  else ((Rl = At[1]), (HS = At[2]));
  let Bi = HS,
    KS;
  if (At[3] !== Bi) ((KS = () => new ja(Bi)), (At[3] = Bi), (At[4] = KS));
  else KS = At[4];
  let [Jn] = d(KS),
    { viewState: Pe, result: vo, error: ga } = useStoreSelector(Jn),
    { setViewState: no, setResult: li, setError: fa } = Jn,
    [xf] = d(Vv),
    vf = C(null),
    qS;
  if (At[5] !== fr)
    ((qS = () => {
      if (vf.current === null) {
        if (!fr) {
          throw Error("Stats tab rendered without getSkillStatsInputs");
        }
        vf.current = Nu(fr());
      }
      return vf.current;
    }),
      (At[5] = fr),
      (At[6] = qS));
  else qS = At[6];
  let wf = qS,
    zS;
  if (At[7] !== Bi) ((zS = Zf(Bi)), (At[7] = Bi), (At[8] = zS));
  else zS = At[8];
  let [Ai, rd] = d(zS),
    [Pf, Tf] = d(Pe.type === "add-marketplace" ? Pe.initialValue || "" : ""),
    [If, WS] = d(0),
    [Rf, eL] = d(Bi.type === "add-marketplace" && !!Bi.initialValue),
    GS;
  if (At[9] !== no)
    ((GS = (Ef) => {
      if (Ef.type === "add-marketplace") {
        let QS = Ef.initialValue ?? "";
        (Tf(QS), WS(QS.length), eL(!1));
      }
      no(Ef);
    }),
      (At[9] = no),
      (At[10] = GS));
  else GS = At[10];
  let Mf = GS,
    [$f, Df] = d(!1),
    ya = useActivePlugins(),
    Bf = useMcpConnections(),
    { storageV5: ad } = useStorageV5Context(),
    YS = useAppStateSelector(jv),
    Af = YS > 0 ? `Errors (${YS})` : "Errors",
    Of = useGlobalExitKeybinding(),
    Nf =
      Rl.type === "marketplace" && Rl.action === "add" && Rl.target !== void 0,
    XS;
  if (At[11] !== fr)
    ((XS = fr !== void 0 && isSkillDoctorEnabled()), (At[11] = fr), (At[12] = XS));
  else XS = At[12];
  let Lf = XS,
    ZS;
  if (At[13] !== ya)
    ((ZS = () => {
      ya.markNeedsRefresh();
    }),
      (At[13] = ya),
      (At[14] = ZS));
  else ZS = At[14];
  let oo = ZS,
    ev;
  if (
    At[15] !== ya ||
    At[16] !== id ||
    At[17] !== oo ||
    At[18] !== Bf ||
    At[19] !== ad
  )
    ((ev = async (tL) => {
      if (!id) {
        return (oo(), "reload-required");
      }
      return Bl(
        () => ({ ...id(), mcpClients: Bf.get().clients, storageV5: ad }),
        ya,
        tL,
        ad,
      );
    }),
      (At[15] = ya),
      (At[16] = id),
      (At[17] = oo),
      (At[18] = Bf),
      (At[19] = ad),
      (At[20] = ev));
  else ev = At[20];
  let ld = ev,
    tv;
  if (At[21] !== Jn)
    ((tv = (nL) => {
      let ov = nL;
      bb70: switch ((rd(ov), Jn.setError(null), ov)) {
        case "discover": {
          Jn.setViewState({ type: "discover-plugins" });
          break bb70;
        }
        case "installed": {
          Jn.setViewState({ type: "manage-plugins" });
          break bb70;
        }
        case "marketplaces": {
          Jn.setViewState({ type: "manage-marketplaces" });
          break bb70;
        }
        case "errors": {
          break bb70;
        }
        case "stats":
      }
    }),
      (At[21] = Jn),
      (At[22] = tv));
  else tv = At[22];
  let _f = tv,
    iv,
    rv;
  if (At[23] !== qt || At[24] !== vo || At[25] !== Pe.type)
    ((iv = () => {
      if (Pe.type === "menu" && !vo) qt();
    }),
      (rv = [Pe.type, vo, qt]),
      (At[23] = qt),
      (At[24] = vo),
      (At[25] = Pe.type),
      (At[26] = iv),
      (At[27] = rv));
  else ((iv = At[26]), (rv = At[27]));
  E(iv, rv);
  let av = C(Pe.type),
    lv,
    cv;
  if (At[28] !== Pe.type)
    ((lv = () => {
      if (Pe.type === av.current) {
        return;
      }
      av.current = Pe.type;
      let uv = {
        "browse-marketplace": "discover",
        "manage-plugins": "installed",
        "manage-marketplaces": "marketplaces",
      }[Pe.type];
      if (uv) rd(uv);
    }),
      (cv = [Pe.type]),
      (At[28] = Pe.type),
      (At[29] = lv),
      (At[30] = cv));
  else ((lv = At[29]), (cv = At[30]));
  E(lv, cv);
  let dv;
  if (At[31] !== Jn)
    ((dv = () => {
      (rd("marketplaces"),
        Jn.setViewState({ type: "manage-marketplaces" }),
        Tf(""),
        Jn.setError(null));
    }),
      (At[31] = Jn),
      (At[32] = dv));
  else dv = At[32];
  let oL = dv;
  const Ff = Pe.type === "add-marketplace";
  let pv;
  if (At[33] !== Ff)
    ((pv = { context: "Settings", isActive: Ff }),
      (At[33] = Ff),
      (At[34] = pv));
  else pv = At[34];
  useKeybinding("confirm:no", oL, pv);
  let mv, gv;
  if (At[35] !== qt || At[36] !== vo)
    ((mv = () => {
      if (vo) qt(vo);
    }),
      (gv = [vo, qt]),
      (At[35] = qt),
      (At[36] = vo),
      (At[37] = mv),
      (At[38] = gv));
  else ((mv = At[37]), (gv = At[38]));
  E(mv, gv);
  let fv, yv;
  if (At[39] !== qt || At[40] !== Pe.type)
    ((fv = () => {
      if (Pe.type === "help") qt();
    }),
      (yv = [Pe.type, qt]),
      (At[39] = qt),
      (At[40] = Pe.type),
      (At[41] = fv),
      (At[42] = yv));
  else ((fv = At[41]), (yv = At[42]));
  if ((E(fv, yv), Pe.type === "help")) {
    let ln;
    if (At[43] === MEMO_CACHE_SENTINEL)
      ((ln = r(Box, {
        flexDirection: "column",
        children: [
          e(Text, { bold: !0, children: "Plugin Command Usage:" }),
          e(Text, { children: " " }),
          e(Text, { dimColor: !0, children: "Installation:" }),
          e(Text, { children: " /plugin install - Browse and install plugins" }),
          r(Text, {
            children: [
              " ",
              "/plugin install <marketplace> - Install from specific marketplace",
            ],
          }),
          e(Text, {
            children: " /plugin install <plugin> - Install specific plugin",
          }),
          r(Text, {
            children: [
              " ",
              "/plugin install <plugin>@<market> - Install plugin from marketplace",
            ],
          }),
          e(Text, { children: " " }),
          e(Text, { dimColor: !0, children: "Management:" }),
          r(Text, {
            children: [
              " ",
              "/plugin list [--enabled|--disabled] - List installed plugins",
            ],
          }),
          e(Text, { children: " /plugin manage - Manage installed plugins" }),
          isSkillDoctorEnabled() &&
            e(Text, {
              children: " /plugin stats - Show skill usage and context costs",
            }),
          e(Text, { children: " /plugin enable <plugin> - Enable a plugin" }),
          e(Text, { children: " /plugin disable <plugin> - Disable a plugin" }),
          e(Text, {
            children: " /plugin configure <plugin> - Set userConfig options",
          }),
          e(Text, {
            children: " /plugin uninstall <plugin> - Uninstall a plugin",
          }),
          e(Text, { children: " " }),
          e(Text, { dimColor: !0, children: "Marketplaces:" }),
          e(Text, {
            children: " /plugin marketplace - Marketplace management menu",
          }),
          e(Text, { children: " /plugin marketplace add - Add a marketplace" }),
          r(Text, {
            children: [
              " ",
              "/plugin marketplace add <path/url> - Add marketplace directly",
            ],
          }),
          e(Text, {
            children: " /plugin marketplace update - Update marketplaces",
          }),
          r(Text, {
            children: [
              " ",
              "/plugin marketplace update <name> - Update specific marketplace",
            ],
          }),
          e(Text, {
            children: " /plugin marketplace remove - Remove a marketplace",
          }),
          r(Text, {
            children: [
              " ",
              "/plugin marketplace remove <name> - Remove specific marketplace",
            ],
          }),
          e(Text, {
            children: " /plugin marketplace list - List all marketplaces",
          }),
          e(Text, { children: " " }),
          e(Text, { dimColor: !0, children: "Validation:" }),
          r(Text, {
            children: [
              " ",
              "/plugin validate <path> - Validate a manifest file or directory",
            ],
          }),
          r(Text, {
            children: [
              " ",
              "/plugin tag [path] [--push] [--dry-run] [-f] - Create a release tag for the plugin",
            ],
          }),
          e(Text, { children: " " }),
          e(Text, { dimColor: !0, children: "Other:" }),
          e(Text, { children: " /plugin - Main plugin menu" }),
          e(Text, { children: " /plugin help - Show this help" }),
          e(Text, { children: " /plugins - Alias for /plugin" }),
        ],
      })),
        (At[43] = ln));
    else ln = At[43];
    return ln;
  }
  if (Pe.type === "validate") {
    let ln;
    if (At[44] !== qt || At[45] !== Pe.path)
      ((ln = e(vl, { onComplete: qt, path: Pe.path })),
        (At[44] = qt),
        (At[45] = Pe.path),
        (At[46] = ln));
    else ln = At[46];
    return ln;
  }
  if (Pe.type === "eval") {
    let ln;
    if (At[47] !== qt || At[48] !== Pe.target)
      ((ln = e(qa, { onComplete: qt, target: Pe.target })),
        (At[47] = qt),
        (At[48] = Pe.target),
        (At[49] = ln));
    else ln = At[49];
    return ln;
  }
  if (Pe.type === "tag") {
    let ln;
    if (
      At[50] !== qt ||
      At[51] !== Pe.dryRun ||
      At[52] !== Pe.force ||
      At[53] !== Pe.path ||
      At[54] !== Pe.push ||
      At[55] !== Pe.unknownFlag
    )
      ((ln = e(xl, {
        onComplete: qt,
        path: Pe.path,
        push: Pe.push,
        dryRun: Pe.dryRun,
        force: Pe.force,
        unknownFlag: Pe.unknownFlag,
      })),
        (At[50] = qt),
        (At[51] = Pe.dryRun),
        (At[52] = Pe.force),
        (At[53] = Pe.path),
        (At[54] = Pe.push),
        (At[55] = Pe.unknownFlag),
        (At[56] = ln));
    else ln = At[56];
    return ln;
  }
  if (Pe.type === "marketplace-list") {
    let ln;
    if (At[57] !== qt)
      ((ln = e(kd, { onComplete: qt })), (At[57] = qt), (At[58] = ln));
    else ln = At[58];
    return ln;
  }
  if (Pe.type === "plugin-list") {
    let ln;
    if (At[59] !== qt || At[60] !== Pe.filter)
      ((ln = e(xd, { onComplete: qt, filter: Pe.filter })),
        (At[59] = qt),
        (At[60] = Pe.filter),
        (At[61] = ln));
    else ln = At[61];
    return ln;
  }
  if (Pe.type === "add-marketplace") {
    let ln;
    if (
      At[62] !== Rf ||
      At[63] !== Nf ||
      At[64] !== If ||
      At[65] !== ga ||
      At[66] !== Pf ||
      At[67] !== oo ||
      At[68] !== vo ||
      At[69] !== fa ||
      At[70] !== li ||
      At[71] !== no ||
      At[72] !== Pe.claudeAiListing
    )
      ((ln = e(Ol, {
        inputValue: Pf,
        setInputValue: Tf,
        cursorOffset: If,
        setCursorOffset: WS,
        error: ga,
        setError: fa,
        result: vo,
        setResult: li,
        setViewState: no,
        onAddComplete: oo,
        cliMode: Nf,
        autoAdd: Rf,
        claudeAiListing: Pe.claudeAiListing,
      })),
        (At[62] = Rf),
        (At[63] = Nf),
        (At[64] = If),
        (At[65] = ga),
        (At[66] = Pf),
        (At[67] = oo),
        (At[68] = vo),
        (At[69] = fa),
        (At[70] = li),
        (At[71] = no),
        (At[72] = Pe.claudeAiListing),
        (At[73] = ln));
    else ln = At[73];
    return ln;
  }
  let ln;
  if (
    At[74] !== Ai ||
    At[75] !== bf ||
    At[76] !== pf ||
    At[77] !== gf ||
    At[78] !== mf
  )
    ((ln = bf
      ? e(wd, {})
      : pf && Ai === "installed"
        ? e(Sd, {})
        : mf && Ai === "installed"
          ? e(vd, {})
          : gf && Ai === "stats"
            ? e(Cd, {})
            : void 0),
      (At[74] = Ai),
      (At[75] = bf),
      (At[76] = pf),
      (At[77] = gf),
      (At[78] = mf),
      (At[79] = ln));
  else ln = At[79];
  let ud;
  if (
    At[80] !== ld ||
    At[81] !== hf ||
    At[82] !== xf ||
    At[83] !== Jn ||
    At[84] !== Pe.targetMarketplace ||
    At[85] !== Pe.targetPlugin ||
    At[86] !== Pe.type
  )
    ((ud = e(
      ss,
      {
        id: "discover",
        title: "Discover",
        children:
          Pe.type === "browse-marketplace"
            ? e(cc, {
                screen: Jn,
                onInstallComplete: ld,
                onSearchModeChange: Df,
                targetMarketplace: Pe.targetMarketplace,
                targetPlugin: Pe.targetPlugin,
              })
            : e(dc, {
                screen: Jn,
                onInstallComplete: ld,
                onSearchModeChange: Df,
                getSessionContext: hf,
                grantedSuggestions: xf,
                targetPlugin:
                  Pe.type === "discover-plugins" ? Pe.targetPlugin : void 0,
              }),
      },
      "discover",
    )),
      (At[80] = ld),
      (At[81] = hf),
      (At[82] = xf),
      (At[83] = Jn),
      (At[84] = Pe.targetMarketplace),
      (At[85] = Pe.targetPlugin),
      (At[86] = Pe.type),
      (At[87] = ud));
  else ud = At[87];
  const Uf = Pe.type === "manage-plugins" ? Pe.targetPlugin : void 0,
    Vf = Pe.type === "manage-plugins" ? Pe.targetMarketplace : void 0,
    jf = Pe.type === "manage-plugins" ? Pe.action : void 0;
  let pd;
  if (
    At[88] !== kf ||
    At[89] !== oo ||
    At[90] !== li ||
    At[91] !== no ||
    At[92] !== Uf ||
    At[93] !== Vf ||
    At[94] !== jf
  )
    ((pd = e(
      ss,
      {
        id: "installed",
        title: "Installed",
        children: e(pu, {
          setViewState: no,
          setResult: li,
          onManageComplete: oo,
          onSearchModeChange: Df,
          commands: kf,
          targetPlugin: Uf,
          targetMarketplace: Vf,
          action: jf,
        }),
      },
      "installed",
    )),
      (At[88] = kf),
      (At[89] = oo),
      (At[90] = li),
      (At[91] = no),
      (At[92] = Uf),
      (At[93] = Vf),
      (At[94] = jf),
      (At[95] = pd));
  else pd = At[95];
  const Hf = Pe.type === "manage-marketplaces" ? Pe.targetMarketplace : void 0,
    Kf = Pe.type === "manage-marketplaces" ? Pe.action : void 0;
  let md;
  if (
    At[96] !== ga ||
    At[97] !== Of ||
    At[98] !== oo ||
    At[99] !== Mf ||
    At[100] !== fa ||
    At[101] !== li ||
    At[102] !== Hf ||
    At[103] !== Kf
  )
    ((md = e(
      ss,
      {
        id: "marketplaces",
        title: "Marketplaces",
        children: e(wc, {
          setViewState: Mf,
          error: ga,
          setError: fa,
          setResult: li,
          exitState: Of,
          onManageComplete: oo,
          targetMarketplace: Hf,
          action: Kf,
        }),
      },
      "marketplaces",
    )),
      (At[96] = ga),
      (At[97] = Of),
      (At[98] = oo),
      (At[99] = Mf),
      (At[100] = fa),
      (At[101] = li),
      (At[102] = Hf),
      (At[103] = Kf),
      (At[104] = md));
  else md = At[104];
  let gd;
  if (At[105] !== oo || At[106] !== no)
    ((gd = e(Td, {
      setViewState: no,
      setActiveTab: rd,
      markPluginsChanged: oo,
    })),
      (At[105] = oo),
      (At[106] = no),
      (At[107] = gd));
  else gd = At[107];
  let fd;
  if (At[108] !== Af || At[109] !== gd)
    ((fd = e(ss, { id: "errors", title: Af, children: gd }, "errors")),
      (At[108] = Af),
      (At[109] = gd),
      (At[110] = fd));
  else fd = At[110];
  let yd;
  if (At[111] !== wf || At[112] !== no || At[113] !== Lf)
    ((yd = Lf
      ? [
          e(
            ss,
            {
              id: "stats",
              title: "Stats",
              children: e(kl, {
                getReport: wf,
                onExit: () => no({ type: "menu" }),
              }),
            },
            "stats",
          ),
        ]
      : []),
      (At[111] = wf),
      (At[112] = no),
      (At[113] = Lf),
      (At[114] = yd));
  else yd = At[114];
  let hd;
  if (
    At[115] !== ud ||
    At[116] !== pd ||
    At[117] !== md ||
    At[118] !== fd ||
    At[119] !== yd
  )
    ((hd = [ud, pd, md, fd, ...yd]),
      (At[115] = ud),
      (At[116] = pd),
      (At[117] = md),
      (At[118] = fd),
      (At[119] = yd),
      (At[120] = hd));
  else hd = At[120];
  let hv;
  if (
    At[121] !== Ai ||
    At[122] !== $f ||
    At[123] !== _f ||
    At[124] !== ln ||
    At[125] !== hd
  )
    ((hv = e(Qr, {
      color: "suggestion",
      children: e(qp, {
        title: "Plugins",
        selectedTab: Ai,
        onTabChange: _f,
        color: "suggestion",
        disableNavigation: $f,
        banner: ln,
        children: hd,
      }),
    })),
      (At[121] = Ai),
      (At[122] = $f),
      (At[123] = _f),
      (At[124] = ln),
      (At[125] = hd),
      (At[126] = hv));
  else hv = At[126];
  return hv;
}
export { oye, MIt, sye, sit, sWe, iWe, NIt, iye, aWe };
