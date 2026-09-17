// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ns } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { getDefaultGcpRegion } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { truncateToCodeUnits, normalizeWhitespace } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { getVerifiedDaemonLock } from "../后台任务-Shell管理/daemon-lock.js";
import { isClaudeMdLoadingDisabled } from "../状态栏-主题/chunk-dqyc6kge.js";
import {
  getAwsRegionOrDefault,
  resolveAwsRegion,
  resolveAwsRegionWithSource,
  modelDisplayString,
  shouldUseWIFAuth,
  isAnthropicAuthEnabled,
  getAnthropicApiKeyWithSourceSafe,
  isOAuthRefreshKnownDead,
  isOAuthRefreshKnownDeadAsync,
  isClaudeAISubscriber,
  getOauthAccountInfo,
  getAccountInformation,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getSettingsSourceTitle, getEnabledSettingsSources } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { formatPathForDisplay } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { formatNumber } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { isPolicyHelperServingDefaultPayload, getSettingsForSource, getArmedHelperOutput, getMergedPolicySources, getManagedFileSettingsPresence, getPolicySettingsOrigin, getShadowedManagedSources } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { stripAnsi } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { getMTLSConfig, getProxyUrl, parseProxyUrl } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { THIRD_PARTY_PROVIDER_LABELS, getAPIProvider, getSecondaryProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { getProfileAccountInfo, describeProfileAuthSource } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { getLatchedFallbackModelInfo, formatAutoSwitchedModelNote, isJetBrainsIde, resolveIdeClientDisplayName, getIdeDisplayName, getMemoryFileCharLimit, getSessionMemoryFiles, getOversizedMemoryFiles } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getLauncherConfigError, isLauncherRunnable, getLauncherCommandString } from "../../01-核心基础设施/核心工具-进程与信号/process-wrapper-launcher.js";
import { resolveWrappedClaudeInvocation } from "../../03-入口与运行时/CLI入口-Commander/claude-launcher-invocation.js";
import { getSettingsWithMcpErrors } from "../../01-核心基础设施/设置-配置/chunk-xy3cbvd8.js";
import { getInstallationDiagnostics } from "../自动更新-安装/install-diagnostics.js";
import { checkInstall } from "../自动更新-安装/native-installer.js";
import { retentionCleanupSkipReason } from "../会话-历史-恢复/retention-cleanup.js";
import { partitionSettingsErrors } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { getPolicyLimitsStatus, formatPolicyLimitsStatus, shouldReportPolicyLimits } from "../远程控制-Bridge/policy-limits-status.js";
import { getManagedSettingsStatus, shouldReportManagedSettingsStatus, formatManagedSettingsStatus } from "../../01-核心基础设施/设置-配置/managed-settings-status.js";
import { r } from "../../00-第三方库/react/react.kwtapczy.js";
import { getThemeColor } from "../../01-核心基础设施/UI组件-TUI/theme-color.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
function splitAnthropicOnlyStatusSections(s) {
  let e = s.map((l) => l.filter((i) => !i.antOnly));
  return (e.push(s.flatMap((l) => l.filter((i) => i.antOnly))), e);
}
function tUn() {
  return [];
}
function nUn() {
  return [];
}
function buildIdeStatusRows(s, e = null, l) {
  let i = s?.find((o) => o.name === "ide");
  if (e) {
    let o = getIdeDisplayName(e.ideType),
      n = isJetBrainsIde(e.ideType) ? "plugin" : "extension";
    if (e.error)
      return [
        {
          label: "IDE",
          value: r(Text, {
            children: [
              getThemeColor("error", l)(figures.cross),
              " Error installing ",
              o,
              " ",
              n,
              ": ",
              e.error,
              `
`,
              "Please restart your IDE and try again.",
            ],
          }),
        },
      ];
    if (e.installed)
      if (i && i.type === "connected")
        if (e.installedVersion !== i.serverInfo?.version)
          return [
            {
              label: "IDE",
              value: `Connected to ${o} ${n} version ${e.installedVersion} (server version: ${i.serverInfo?.version})`,
            },
          ];
        else
          return [
            {
              label: "IDE",
              value: `Connected to ${o} ${n} version ${e.installedVersion}`,
            },
          ];
      else return [{ label: "IDE", value: `Installed ${o} ${n}` }];
  } else if (i) {
    let o = resolveIdeClientDisplayName(i) ?? "IDE";
    if (i.type === "connected")
      return [{ label: "IDE", value: `Connected to ${o} extension` }];
    else
      return [
        {
          label: "IDE",
          value: `${getThemeColor("error", l)(figures.cross)} Not connected to ${o}`,
        },
      ];
  }
  return [];
}
function buildMcpServersStatusRow(s = [], e) {
  let l = s.filter((n) => n.name !== "ide");
  if (!l.length) return [];
  let i = {
    connected: 0,
    cached: 0,
    pending: 0,
    needsAuth: 0,
    disabled: 0,
    failed: 0,
  };
  for (let n of l)
    switch (n.type) {
      case "connected":
        i.connected++;
        break;
      case "cached":
        i.cached++;
        break;
      case "pending":
        i.pending++;
        break;
      case "needs-auth":
        i.needsAuth++;
        break;
      case "disabled":
        i.disabled++;
        break;
      case "failed":
        i.failed++;
        break;
      default:
    }
  let o = [];
  if (i.connected) o.push(getThemeColor("success", e)(`${i.connected} connected`));
  if (i.cached) o.push(getThemeColor("inactive", e)(`${i.cached} cached`));
  if (i.needsAuth) o.push(getThemeColor("warning", e)(`${i.needsAuth} need auth`));
  if (i.pending) o.push(getThemeColor("inactive", e)(`${i.pending} pending`));
  if (i.disabled) o.push(getThemeColor("inactive", e)(`${i.disabled} disabled`));
  if (i.failed) o.push(getThemeColor("error", e)(`${i.failed} failed`));
  return [
    {
      label: "MCP servers",
      value: `${o.join(", ")} ${getThemeColor("inactive", e)("\xB7 /mcp")}`,
    },
  ];
}
async function getLargeMemoryFileWarnings(s, e, l) {
  if (isClaudeMdLoadingDisabled()) return [];
  let i = await getSessionMemoryFiles(s, !1, e, l),
    o = getOversizedMemoryFiles(i),
    n = [],
    u = getMemoryFileCharLimit();
  return (
    o.forEach((p) => {
      let c = formatPathForDisplay(p.path);
      n.push(
        `Large ${c} will impact performance (${formatNumber(p.content.length)} chars > ${formatNumber(u)})`,
      );
    }),
    n
  );
}
function S(s = "remote") {
  let e = getMergedPolicySources();
  if (!e) return null;
  return `Enterprise managed settings (${e.map((i) => (i === "remote" ? s : g(i))).join(" + ")}, merged)`;
}
function buildSettingsSourcesStatusRows() {
  let s = getEnabledSettingsSources(),
    e = getArmedHelperOutput(),
    o = [
      {
        label: "Setting sources",
        value: s
          .filter((c) => {
            if (c === "policySettings" && e.composes !== "none") return !0;
            let d = getSettingsForSource(c);
            return d !== null && Object.keys(d).length > 0;
          })
          .map((c) => {
            if (c === "policySettings") {
              if (e.composes !== "none") {
                let f = isPolicyHelperServingDefaultPayload(),
                  m = f
                    ? "default settings payload"
                    : e.composes === "tier"
                      ? "helper"
                      : "remote helper",
                  h = e.mergedOver ? `${m} merged over ${g(e.mergedOver)}` : m;
                return (
                  (e.composes === "remoteSlot" && !f ? S(h) : null) ??
                  `Enterprise managed settings (${h})`
                );
              }
              let d = getPolicySettingsOrigin();
              if (d === null) return null;
              return S() ?? v(d);
            }
            return getSettingsSourceTitle(c);
          })
          .filter((c) => c !== null),
      },
    ],
    n = getShadowedManagedSources();
  if (n.length > 0) o.push({ label: "Skipped sources", value: n.map(v) });
  let u = getManagedSettingsStatus();
  if (u && shouldReportManagedSettingsStatus(u))
    o.push({ label: "Managed settings (remote)", value: formatManagedSettingsStatus(u) });
  let p = getPolicyLimitsStatus();
  if (shouldReportPolicyLimits(p)) o.push({ label: "Organization policy", value: formatPolicyLimitsStatus(p) });
  return o;
}
function g(s) {
  switch (s) {
    case "helper":
    case "remote":
    case "plist":
      return s;
    case "hklm":
      return "HKLM";
    case "file": {
      let { hasBase: e, hasDropIns: l } = getManagedFileSettingsPresence();
      if (e && l) return "file + drop-ins";
      return l ? "drop-ins" : "file";
    }
    case "parent":
      return "parent process";
    case "hkcu":
      return "HKCU";
  }
}
function v(s) {
  return `Enterprise managed settings (${g(s)})`;
}
async function getAutoUpdateWarningMessages() {
  return (await checkInstall()).filter((e) => e.type !== "error").map((e) => e.message);
}
async function getLauncherDiagnostics(s) {
  let e = getLauncherCommandString(),
    l = getLauncherConfigError();
  if (!e && !l) return [];
  let i = [];
  if (l)
    return (
      i.push(
        `${l} \u2014 nothing will run unwrapped: new background sessions are refused unless a background service that validated an earlier value is still serving them (\`claude daemon status\` shows it)`,
      ),
      i
    );
  let o = resolveWrappedClaudeInvocation();
  if (
    (i.push(
      `Self-exec: \`${[o.cmd, ...o.prefixArgs].join(" ")}\` (CLAUDE_CODE_PROCESS_WRAPPER)`,
    ),
    !(await isLauncherRunnable()))
  )
    i.push(
      `The launcher \`${o.cmd}\` cannot run right now (deleted or not executable) \u2014 new background sessions are refused until it is restored; a background service that validated it earlier keeps serving its existing sessions (\`claude daemon status\`)`,
    );
  let n = await getVerifiedDaemonLock(1, s).catch(() => null);
  if (!n) return i;
  let [{ controlRequest: u }, { BG_PROTO: p }] = await Promise.all([
      import("../守护服务-Daemon/chunk-9fpz6abc.js"),
      import("../后台任务-Shell管理/chunk-7wsy8vxb.js"),
    ]),
    c = await u({ proto: p, op: "nudge" }).catch(() => null),
    d =
      c?.ok && c.op === "nudge"
        ? (c.processWrapper ?? "")
        : (n.processWrapper ?? ""),
    f = truncateToCodeUnits(normalizeWhitespace(stripAnsi(d)), 200);
  if (n.origin === "service")
    i.push(
      `The installed background service predates launcher support and runs outside \`${o.cmd}\`; its sessions are covered, the service process itself is not \u2014 a launcher-aware \`claude daemon install\` will close this`,
    );
  if (d !== e)
    i.push(
      `The running background service launches sessions via \`${f || "(no launcher)"}\`, but this session resolves \`${e}\` \u2014 restart it (and your running claude sessions) to converge`,
    );
  return i;
}
async function getSettingsAndUpdateWarnings(s) {
  let e = await getInstallationDiagnostics({ storageV5: s }),
    l = [],
    { statusNotices: i, invalidEntries: o } = partitionSettingsErrors(getSettingsWithMcpErrors().errors);
  if (o.length > 0) {
    let u = dedupe(o.map((c) => c.file)).join(", ");
    l.push(`Found invalid entries in: ${u}.`);
    let p = await retentionCleanupSkipReason(s);
    if (p === "settings_unknowable" || p === "settings_invalid_key_set")
      l.push(
        "Transcript retention cleanup is paused until the settings errors above are fixed (cleanupPeriodDays cannot be determined reliably).",
      );
  }
  for (let n of i) l.push(n.message);
  if (
    (e.warnings.forEach((n) => {
      l.push(n.issue);
    }),
    e.hasUpdatePermissions === !1)
  )
    l.push("No write permissions for auto-updates");
  return l;
}
function fetchOAuthRefreshKnownDeadStatus(s) {
  if (!(isHoverRestEnabled() && s !== void 0)) return;
  return (async () => ({ refreshKnownDead: isAnthropicAuthEnabled() && (await isOAuthRefreshKnownDeadAsync(s)) }))().catch(
    () => ({ refreshKnownDead: !1 }),
  );
}
function buildAccountStatusRows(s) {
  let e = getAccountInformation();
  if (!e) return [];
  let l = [];
  if (s !== void 0 && isHoverRestEnabled() ? s.refreshKnownDead : isAnthropicAuthEnabled() && isOAuthRefreshKnownDead()) {
    l.push({ label: "Login", value: "Expired \u2014 log in again" });
    let n = getOauthAccountInfo();
    if (n?.organizationName && !a.IS_DEMO)
      l.push({ label: "Organization", value: n.organizationName });
    if (n?.emailAddress && !a.IS_DEMO)
      l.push({ label: "Email", value: n.emailAddress });
    return l;
  }
  if (e.subscription)
    l.push({ label: "Login method", value: `${e.subscription} account` });
  let i = " \xB7 not in use",
    o = isClaudeAISubscriber();
  if (e.tokenSource) {
    let n =
      e.tokenSource === "claude.ai" ||
      e.tokenSource === "CLAUDE_CODE_OAUTH_TOKEN" ||
      e.tokenSource === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR" ||
      e.tokenSource === "CCR_OAUTH_TOKEN_FILE";
    l.push({
      label: "Auth token",
      value: n && e.apiKeySource && !o ? `${e.tokenSource}${i}` : e.tokenSource,
    });
  }
  if (e.apiKeySource)
    l.push({
      label: "API key",
      value: o ? `${e.apiKeySource}${i}` : e.apiKeySource,
    });
  if (shouldUseWIFAuth()) l.push({ label: "Profile", value: describeProfileAuthSource() });
  if (shouldUseWIFAuth() && getAnthropicApiKeyWithSourceSafe({ skipRetrievingKeyFromApiKeyHelper: !0 }).key === null) {
    let n = getProfileAccountInfo();
    if (!a.IS_DEMO) {
      if (n?.organizationName || n?.organizationUuid)
        l.push({
          label: "Organization",
          value: [n.organizationName, n.organizationUuid]
            .filter(Boolean)
            .join(" \xB7 "),
        });
      if (n?.accountEmail) l.push({ label: "Email", value: n.accountEmail });
    }
  }
  if (e.organization && !a.IS_DEMO)
    l.push({ label: "Organization", value: e.organization });
  if (e.email && !a.IS_DEMO) l.push({ label: "Email", value: e.email });
  return l;
}
function buildProviderStatusRows() {
  let s = getAPIProvider(),
    e = [];
  if (s !== "firstParty") {
    let o = getSecondaryProvider(),
      n = o ? `${THIRD_PARTY_PROVIDER_LABELS[s]} + ${THIRD_PARTY_PROVIDER_LABELS[o]}` : THIRD_PARTY_PROVIDER_LABELS[s];
    e.push({ label: "API provider", value: n });
  }
  if (s === "firstParty") {
    let o = a.ANTHROPIC_BASE_URL;
    if (o) e.push({ label: "Anthropic base URL", value: o });
  } else if (s === "bedrock") {
    let o = a.ANTHROPIC_BEDROCK_BASE_URL;
    if (o) e.push({ label: "Bedrock base URL", value: o });
    e.push({ label: "AWS region", value: b() });
    let n = a.ANTHROPIC_BEDROCK_SERVICE_TIER;
    if (n) e.push({ label: "Bedrock service tier", value: n });
    if (a.CLAUDE_CODE_SKIP_BEDROCK_AUTH) e.push({ value: "AWS auth skipped" });
  } else if (s === "vertex") {
    let o = a.ANTHROPIC_VERTEX_BASE_URL;
    if (o) e.push({ label: "Vertex base URL", value: o });
    let n = a.ANTHROPIC_VERTEX_PROJECT_ID;
    if (n) e.push({ label: "GCP project", value: n });
    if (
      (e.push({ label: "Default region", value: getDefaultGcpRegion() }),
      a.CLAUDE_CODE_SKIP_VERTEX_AUTH)
    )
      e.push({ value: "GCP auth skipped" });
  } else if (s === "foundry") {
    let o = a.ANTHROPIC_FOUNDRY_BASE_URL;
    if (o) e.push({ label: "Microsoft Foundry base URL", value: o });
    let n = a.ANTHROPIC_FOUNDRY_RESOURCE;
    if (n) e.push({ label: "Microsoft Foundry resource", value: n });
    if (a.CLAUDE_CODE_SKIP_FOUNDRY_AUTH)
      e.push({ value: "Microsoft Foundry auth skipped" });
  } else if (s === "anthropicAws") {
    let o = a.ANTHROPIC_AWS_BASE_URL;
    if (o) e.push({ label: "Claude Platform on AWS base URL", value: o });
    let n = a.ANTHROPIC_AWS_WORKSPACE_ID;
    if (n) e.push({ label: "Workspace ID", value: n });
    if (
      (e.push({ label: "AWS region", value: getAwsRegionOrDefault() }),
      a.CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH)
    )
      e.push({ value: "Claude Platform on AWS auth skipped" });
  } else if (s === "anthropicGoogleCloud") {
    let o = a.ANTHROPIC_GOOGLE_CLOUD_BASE_URL;
    if (o)
      e.push({ label: "Claude Platform on Google Cloud base URL", value: o });
    let n = a.ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID;
    if (n) e.push({ label: "Workspace ID", value: n });
    let u = a.ANTHROPIC_GOOGLE_CLOUD_PROJECT || a.GOOGLE_CLOUD_PROJECT;
    if (u) e.push({ label: "GCP project", value: u });
    if (
      (e.push({
        label: "GCP location",
        value: a.ANTHROPIC_GOOGLE_CLOUD_LOCATION || "global",
      }),
      a.CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH)
    )
      e.push({ value: "Claude Platform on Google Cloud auth skipped" });
  } else if (s === "gateway") {
    let o = ns();
    if (o) e.push({ label: "Gateway URL", value: o.url });
  }
  if (s === "mantle" || getSecondaryProvider() === "mantle") {
    let o = a.ANTHROPIC_BEDROCK_MANTLE_BASE_URL;
    if (o) e.push({ label: "Amazon Bedrock (Mantle) base URL", value: o });
    if (s === "mantle") e.push({ label: "AWS region", value: b() });
    if (a.CLAUDE_CODE_SKIP_MANTLE_AUTH)
      e.push({ value: "Amazon Bedrock (Mantle) auth skipped" });
  }
  let l = getProxyUrl();
  if (l)
    e.push({
      label: "Proxy",
      value: parseProxyUrl(l)
        ? l
        : `${l.replace(/\p{Cc}/gu, "")} (invalid \u2014 ignored; fix or unset the proxy env var)`,
    });
  let i = getMTLSConfig();
  if (a.NODE_EXTRA_CA_CERTS)
    e.push({ label: "Additional CA cert(s)", value: a.NODE_EXTRA_CA_CERTS });
  if (i) {
    if (i.cert && a.CLAUDE_CODE_CLIENT_CERT)
      e.push({ label: "mTLS client cert", value: a.CLAUDE_CODE_CLIENT_CERT });
    if (i.key && a.CLAUDE_CODE_CLIENT_KEY)
      e.push({ label: "mTLS client key", value: a.CLAUDE_CODE_CLIENT_KEY });
  }
  return e;
}
function b() {
  let { region: s, source: e } = resolveAwsRegionWithSource();
  switch (e) {
    case "env":
      return s;
    case "shared-config":
      return `${s} (from AWS config)`;
    case "env-invalid":
    case "default":
      return (
        resolveAwsRegion(),
        e === "env-invalid"
          ? `${s} (default \u2014 region env var invalid, ignored; fix or unset AWS_REGION / AWS_DEFAULT_REGION)`
          : `${s} (default \u2014 set AWS_REGION or add a region to your AWS config)`
      );
  }
}
function formatModelRowValue(s) {
  let e = modelDisplayString(s);
  {
    let l = getLatchedFallbackModelInfo();
    if (l !== void 0) return `${e} (${formatAutoSwitchedModelNote(modelDisplayString(l.previousModel))})`;
  }
  return e;
}
export { splitAnthropicOnlyStatusSections, tUn, nUn, buildIdeStatusRows, buildMcpServersStatusRow, getLargeMemoryFileWarnings, buildSettingsSourcesStatusRows, getAutoUpdateWarningMessages, getLauncherDiagnostics, getSettingsAndUpdateWarnings, fetchOAuthRefreshKnownDeadStatus, buildAccountStatusRows, buildProviderStatusRows, formatModelRowValue };
