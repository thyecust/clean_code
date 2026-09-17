// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { LONG_LIVED_OAUTH_TOKEN_TTL_SECONDS, SETUP_TOKEN_DEFAULT_EXPIRY_DAYS } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { writeToStdout } from "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { getMaxOutputTokens, isAnthropicAuthEnabled, validateForceLoginMethod } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOkAsync, logFeatureBadAsync, logFeatureSadAsync } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { replaceControlChars } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { getBridgeDoctorInfo } from "../远程控制-Bridge/chunk-9estzwf5.js";
import { Box, Text, createRoot } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { exitAfterAnalyticsFlush } from "../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js";
import { AppRoot } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import { resolveCappedConfigInteger, MAX_BASH_OUTPUT_CHARS, DEFAULT_BASH_OUTPUT_CHARS, TASK_MAX_OUTPUT_LENGTH_UPPER_LIMIT, DEFAULT_TASK_MAX_OUTPUT_LENGTH } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { handleReplAppStateChange, partitionSettingsErrors } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { getInstallationDiagnostics } from "../自动更新-安装/install-diagnostics.js";
import { getBaseRenderOptions } from "../../01-核心基础设施/共享小工具-未细化/base-render-options.js";
import { WelcomeBanner } from "../../03-入口与运行时/CLI入口-Commander/welcome-banner.js";
import { getPolicyLimitsStatus, formatPolicyLimitsStatus } from "../远程控制-Bridge/policy-limits-status.js";
import { getManagedSettingsStatus, isManagedSettingsFetchInProgress, formatManagedSettingsStatus } from "../../01-核心基础设施/共享小工具-未细化/managed-settings-status.js";
import { getAutoUpdatesChannel } from "../自动更新-安装/auto-updates-channel.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { getSettingsWithMcpErrors } from "../../01-核心基础设施/设置-配置/chunk-xy3cbvd8.js";
import { cwd as k } from "process";
import { stripVTControlCharacters } from "util";
import { createInterface } from "readline";
function confirmYesNo(c, d = process.stdin) {
  let n = () => {},
    f = new Promise((m) => {
      n = m;
    }),
    l = createInterface({ input: d, output: process.stdout });
  return (
    l.question(`${c} [y/N] `, (m) => {
      let p = m.trim().toLowerCase();
      (n(p === "y" || p === "yes"), l.close());
    }),
    l.once("close", () => n(!1)),
    f
  );
}
function createSubcommandRoot() {
  return createRoot({ ...getBaseRenderOptions(!1), patchConsole: !1 });
}
function E(c) {
  return { ok: !0, days: SETUP_TOKEN_DEFAULT_EXPIRY_DAYS, seconds: LONG_LIVED_OAUTH_TOKEN_TTL_SECONDS };
}
async function setupTokenHandler(c, d) {
  logEvent("tengu_setup_token_command", {});
  let n = E(d?.expiresInDays);
  if (!n.ok) {
    (c.unmount(),
      process.stderr.write(`${n.message}
`),
      await logFeatureBadAsync("cli_setup_token", n.errorCode),
      await exitAfterAnalyticsFlush(1));
    return;
  }
  let f = validateForceLoginMethod(!0);
  if (!f.valid)
    (c.unmount(),
      process.stderr.write(`${f.message}
setup-token creates a long-lived Claude.ai subscription token, which this policy does not permit.
`),
      await logFeatureBadAsync("cli_setup_token", "force_login_method_refused"),
      await exitAfterAnalyticsFlush(1));
  let l = !isAnthropicAuthEnabled(),
    { ConsoleOAuthFlow: m } = await import("./ConsoleOAuthFlow.n1ybswzm.js"),
    p = B(),
    g = !1;
  if (
    (await new Promise((_) => {
      c.render(
        e(AppRoot, {
          session: p,
          onChangeAppState: (y) => handleReplAppStateChange(y, p),
          children: r(Box, {
            flexDirection: "column",
            gap: 1,
            children: [
              e(WelcomeBanner, {}),
              l &&
                r(Box, {
                  flexDirection: "column",
                  children: [
                    e(Text, {
                      color: "warning",
                      children:
                        "Warning: You already have authentication configured via environment variable or API key helper.",
                    }),
                    e(Text, {
                      color: "warning",
                      children:
                        "The setup-token command will create a new OAuth token which you can use instead.",
                    }),
                  ],
                }),
              r(Box, {
                paddingLeft: 1,
                flexDirection: "column",
                gap: 1,
                children: [
                  r(Text, {
                    bold: !0,
                    children: [
                      "This will guide you through long-lived (",
                      n.days === 365 ? "1-year" : `${n.days}-day`,
                      ") auth token setup for your Claude account. Claude subscription required.",
                    ],
                  }),
                  e(m, {
                    onDone: () => {
                      _();
                    },
                    onAccountOnHold: () => {
                      ((g = !0), _());
                    },
                    mode: "setup-token",
                    expiresIn: n.seconds,
                    urlOutdent: 1,
                  }),
                ],
              }),
            ],
          }),
        }),
      );
    }),
    c.unmount(),
    g)
  ) {
    (await logFeatureBadAsync("cli_setup_token", "account_on_hold"), await exitAfterAnalyticsFlush(1));
    return;
  }
  (await logFeatureOkAsync("cli_setup_token"), await exitAfterAnalyticsFlush(0));
}
async function doctorHandler(c) {
  logEvent("tengu_doctor_command", {});
  let d;
  try {
    let n = await getInstallationDiagnostics({ probeKeychain: !0, storageV5: c }),
      f = getAutoUpdatesChannel(),
      l = [
        "Claude Code doctor",
        "",
        `Running: ${n.installationType} (${n.version})`,
        ...({
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.GIT_SHA
          ? [
              `Commit: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.GIT_SHA.slice(0, 12)}`,
            ]
          : []),
        "Platform: darwin-arm64",
        ...(n.packageManager
          ? [`Package manager: ${u(n.packageManager)}`]
          : []),
        `Path: ${u(n.installationPath)}`,
        ...(n.invokedBinary !== n.installationPath
          ? [`Invoked: ${u(n.invokedBinary)}`]
          : []),
        `Config install method: ${u(n.configInstallMethod)}`,
        `Search: ${n.ripgrepStatus.working ? "OK" : "Not working"} (${n.ripgrepStatus.mode === "embedded" ? "bundled" : u(n.ripgrepStatus.systemPath || "system")})`,
        `Auto-updates: ${n.packageManager ? "Managed by package manager" : u(n.autoUpdates)}`,
        `Auto-update channel: ${f === "rc" ? "slow" : f}`,
        `Last update attempt: ${I(n.lastUpdateResult)}`,
      ],
      m = getManagedSettingsStatus();
    if (m) l.push(`Managed settings (remote): ${u(formatManagedSettingsStatus(m))}`);
    else if (isManagedSettingsFetchInProgress())
      l.push(
        "Managed settings (remote): checking\u2026 (fetch in progress; re-run in a moment)",
      );
    {
      let {
          waitForPolicyLimitsToLoad: s,
          POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS: h,
        } = await import("../../01-核心基础设施/共享小工具-未细化/POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS.hw6w9yxm.js"),
        { getLastFetchOutcome: w } = await import("../策略限制-PolicyLimits/chunk-8sw91yn5.js"),
        T = !1,
        A = s().then(() => {
          T = !0;
        }),
        S = Date.now() + h;
      while (!T && w() === null && Date.now() < S)
        await Promise.race([A, sleep(200)]);
    }
    let p = l.push("Organization policy: \u2026") - 1,
      { statusNotices: g, invalidEntries: _ } = partitionSettingsErrors(getSettingsWithMcpErrors().errors);
    if (_.length > 0) {
      l.push("", chalk.yellow("Invalid settings"));
      for (let s of _) {
        let h = [s.file, s.path]
          .flatMap((w) => (w ? [u(w)] : []))
          .join(" \u203A ");
        l.push(
          `- ${h ? `${h}: ` : ""}${u(s.message)}${
            s.suggestion
              ? `
  Suggested fix: ${u(s.suggestion)}`
              : ""
          }`,
        );
      }
    }
    if (g.length > 0) {
      l.push("");
      for (let s of g) l.push(`- ${u(s.message)}`);
    }
    let y = [
      { name: "BASH_MAX_OUTPUT_LENGTH", default: DEFAULT_BASH_OUTPUT_CHARS, upperLimit: MAX_BASH_OUTPUT_CHARS },
      { name: "TASK_MAX_OUTPUT_LENGTH", default: DEFAULT_TASK_MAX_OUTPUT_LENGTH, upperLimit: TASK_MAX_OUTPUT_LENGTH_UPPER_LIMIT },
      { name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS", ...getMaxOutputTokens("claude-opus-4-6") },
    ]
      .map((s) => ({
        name: s.name,
        ...resolveCappedConfigInteger(s.name, process.env[s.name], s.default, s.upperLimit),
      }))
      .filter((s) => s.status !== "valid");
    if (y.length > 0) {
      l.push("", chalk.yellow("Environment variables"));
      for (let s of y) l.push(`- ${s.name}: ${u(s.message ?? s.status)}`);
    }
    if (n.multipleInstallations.length > 1) {
      l.push("", chalk.yellow("Multiple installations found"));
      for (let s of n.multipleInstallations)
        l.push(`- ${u(`${s.type} at ${s.path}`)}`);
    }
    try {
      let s = await getBridgeDoctorInfo();
      if ((l.push("", "Remote Control"), s.inRemoteSession))
        l.push(
          "Inside a cloud session \u2014 Remote Control is unavailable here. Use it from the local session instead.",
        );
      else {
        l.push(
          u(
            s.disabledReason ??
              "Control this session from claude.ai/code or the Claude mobile app",
          ),
        );
        for (let h of s.checks.filter((w) => !w.ok))
          l.push(u(`- ${h.label}${h.detail ? ` (${h.detail})` : ""}`));
      }
    } catch {
      await logFeatureSadAsync("cli_doctor", "bridge_info_unavailable");
    }
    if (
      ((l[p] = `Organization policy: ${u(formatPolicyLimitsStatus(getPolicyLimitsStatus()))}`), n.warnings.length > 0)
    ) {
      l.push(
        "",
        chalk.yellow(
          `${n.warnings.length} ${pluralize(n.warnings.length, "warning")} found`,
        ),
      );
      for (let s of n.warnings) l.push(`- ${u(s.issue)}`, `  Fix: ${u(s.fix)}`);
    } else l.push("", "No installation issues found.");
    (l.push(
      "",
      "For a full setup checkup that can also fix issues, run /doctor in a Claude Code session.",
    ),
      writeToStdout(
        l.join(`
`) +
          `
`,
      ),
      (d = {
        warnings: n.warnings.length,
        settings_errors: _.length,
        env_var_issues: y.length,
        multiple_installs: n.multipleInstallations.length > 1,
        ripgrep_working: n.ripgrepStatus.working,
      }));
  } catch (n) {
    throw (await logFeatureBadAsync("cli_doctor", "diagnostic_failed"), n);
  }
  (await logFeatureOkAsync("cli_doctor", d), await exitAfterAnalyticsFlush(0));
}
function u(c) {
  return replaceControlChars(stripVTControlCharacters(c)).replaceAll("`", "");
}
function I(c) {
  if (!c) return "none recorded";
  let d = u(c.timestamp.slice(0, 10));
  switch (c.outcome) {
    case "success":
      return c.version_to
        ? `success \u2192 ${u(c.version_to)} (${d})`
        : `success (${d})`;
    case "failed":
      return `failed (${u(c.status)}) \u2014 ${d}`;
  }
}
async function installHandler(c, d, n) {
  if (a.DISABLE_UPDATES)
    (process.stdout
      .write(`Updates are disabled by your administrator. Contact your IT team to get the latest version.
`),
      process.exit(0));
  let { setup: f } = await import("../../03-入口与运行时/CLI入口-Commander/setup.sbdmcpy2.js");
  await f(k(), "default", !1, !1, void 0, !1, void 0, void 0, void 0, n);
  let { install: l } = await import("../自动更新-安装/install.914sz9hm.js");
  await new Promise((m) => {
    let p = [];
    if (c) p.push(c);
    if (d.force) p.push("--force");
    l.call(
      async (g) => {
        if (g.includes("failed")) await logFeatureBadAsync("cli_install", "cli_install_failed");
        else await logFeatureOkAsync("cli_install");
        (await exitAfterAnalyticsFlush(g.includes("failed") ? 1 : 0), m());
      },
      { storageV5: n },
      p,
    );
  });
}
export { confirmYesNo, createSubcommandRoot, setupTokenHandler, doctorHandler, installHandler };
