// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { getSettingsForSource } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { pg } from "../../00-第三方库/semver/chunk-jm5cswvd.js";
import { isSemverAtLeast, isSemverAtMost } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { toESM } from "./chunk-2c9tjhwd.js";
var t = toESM(pg(), 1);
var u = new Set(["update", "install", "doctor"]);
function l({
  currentVersion: e,
  requiredMinimumVersion: r,
  requiredMaximumVersion: i,
  topLevelCommand: a,
}) {
  if (!r && !i) return null;
  if (a !== void 0 && u.has(a)) return null;
  if (!t.parse(e)) return null;
  if (r) {
    let o = t.parse(r)?.version;
    if (!o)
      logForDebugging(
        `requiredMinimumVersion '${r}' is not a valid semver version \u2014 ignoring`,
        { level: "error" },
      );
    else if (!isSemverAtLeast(e, o))
      return `Claude Code ${e} is older than the minimum version required by your organization (${r}).
Update Claude Code using your organization's approved method, then try again. If automatic updates are available, \`claude update\` may also work.`;
  }
  if (i) {
    let o = t.parse(i)?.version;
    if (!o)
      logForDebugging(
        `requiredMaximumVersion '${i}' is not a valid semver version \u2014 ignoring`,
        { level: "error" },
      );
    else if (!isSemverAtMost(e, o))
      return `Claude Code ${e} is newer than the maximum version allowed by your organization (${i}).
Your organization requires version ${i} or older. Install an approved version using your organization's approved method. \`claude install <version>\` may also work.`;
  }
  return null;
}
function checkVersionPolicyForCommand(e) {
  try {
    let r = e.parent ? e : null;
    while (r?.parent?.parent) r = r.parent;
    let i = getSettingsForSource("policySettings");
    return l({
      currentVersion: {
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
      }.VERSION,
      requiredMinimumVersion: i?.requiredMinimumVersion,
      requiredMaximumVersion: i?.requiredMaximumVersion,
      topLevelCommand: r?.name(),
    });
  } catch (r) {
    return (logError(r), null);
  }
}
function checkVersionPolicy() {
  try {
    let e = getSettingsForSource("policySettings");
    return l({
      currentVersion: {
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
      }.VERSION,
      requiredMinimumVersion: e?.requiredMinimumVersion,
      requiredMaximumVersion: e?.requiredMaximumVersion,
      topLevelCommand: void 0,
    });
  } catch (e) {
    return (logError(e), null);
  }
}
export { checkVersionPolicyForCommand, checkVersionPolicy };
