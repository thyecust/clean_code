// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { createBatchedSender, DATADOG_CLIENT_TOKEN } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isAxiosError } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { externalHttp } from "./external-http.js";
import { isErrorReportingAllowed } from "./error-reporting-eligibility.js";
import { randomUUID } from "crypto";
var c = "https://browser-intake-us5-datadoghq.com/api/v2/logs",
  p = 30000,
  g = 25,
  u = 1e4,
  o = 100;
function m() {
  return a.CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS || p;
}
async function f(e) {
  if (!isErrorReportingAllowed()) {
    logForDebugging(
      `dd-error-tracking: compliance verdict now blocks reporting; dropping batch=${e.length}`,
      { level: "warn" },
    );
    return;
  }
  let r = jsonStringify(e),
    s = new URLSearchParams({
      ddsource: "browser",
      "dd-api-key": DATADOG_CLIENT_TOKEN,
      "dd-evp-origin": "browser",
      "dd-evp-origin-version": {
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
      "dd-request-id": randomUUID(),
    });
  try {
    await externalHttp.post(`${c}?${s}`, r, {
      headers: { "Content-Type": "application/json" },
      timeout: u,
    });
  } catch (t) {
    if (isAxiosError(t) && t.response)
      logForDebugging(
        `dd-error-tracking: intake responded ${t.response.status} (batch=${e.length})`,
        { level: "warn" },
      );
    else logForDebugging(`dd-error-tracking: intake failed: ${l(t)}`, { level: "warn" });
  }
}
class i {
  reportsEnqueued = 0;
  capSentinelSent = !1;
  cachedUserBucket = void 0;
  sender = createBatchedSender({ maxBatchSize: g, getFlushIntervalMs: m, post: f });
}
var E = new j(() => new i());
function errorTrackingClient() {
  return E.of(B().host);
}
function isErrorTrackingCapReached() {
  return errorTrackingClient().reportsEnqueued >= o;
}
function h(e) {
  return {
    ...e,
    message: `ErrorTrackingCapReached: per-process cap of ${o} hit, dropping further reports`,
    error: {
      kind: "ErrorTrackingCapReached",
      message: `per-process cap of ${o} hit`,
      stack: `ErrorTrackingCapReached
    at enqueueErrorLog (src/services/errorTracking/client.ts)`,
      fingerprint: "cap-reached-sentinel",
      handling: "handled",
    },
    error_frames: void 0,
  };
}
function enqueueErrorLog(e) {
  let r = errorTrackingClient();
  if (r.reportsEnqueued >= o) return;
  if ((r.reportsEnqueued++, r.reportsEnqueued === o && !r.capSentinelSent))
    ((r.capSentinelSent = !0),
      logForDebugging(
        `dd-error-tracking: per-process report cap reached (${o}); dropping further reports`,
        { level: "warn" },
      ),
      r.sender.enqueue(h(e)));
  else r.sender.enqueue(e);
}
async function shutdownErrorTracking() {
  await errorTrackingClient().sender.shutdown();
}
export { errorTrackingClient, isErrorTrackingCapReached, enqueueErrorLog, shutdownErrorTracking };
