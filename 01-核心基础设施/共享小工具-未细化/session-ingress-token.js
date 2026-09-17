// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _je, mae } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "./async-timeout-utils.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { isReviewOriginSession, OAUTH_TOKEN_WELL_KNOWN_PATH, API_KEY_WELL_KNOWN_PATH, SESSION_INGRESS_TOKEN_WELL_KNOWN_PATH, readWellKnownTokenFile } from "../../02-功能模块/认证-OAuth登录/credential-file-descriptors.js";
import { writeDiagnosticsEvent } from "./diagnostics-log.js";
var TOKEN_FILE_RETRY_DELAYS_MS = [250, 500, 500, 750, 1000];
function g() {
  return a.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? SESSION_INGRESS_TOKEN_WELL_KNOWN_PATH;
}
function C(o) {
  return (
    a.CLAUDE_CODE_REMOTE &&
    !a.CLAUDE_CODE_SESSION_ACCESS_TOKEN &&
    !a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR &&
    o.some((e) => e === "--sdk-url" || e.startsWith("--sdk-url=")) &&
    !isReviewOriginSession()
  );
}
var I = 250,
  w = 50;
function d() {
  return (
    readWellKnownTokenFile(OAUTH_TOKEN_WELL_KNOWN_PATH, "OAuth token").token !== null || readWellKnownTokenFile(API_KEY_WELL_KNOWN_PATH, "API key").token !== null
  );
}
async function waitForSessionIngressToken(
  o,
  { delaysMs: e = TOKEN_FILE_RETRY_DELAYS_MS, siblingGraceMs: t = I, siblingStepMs: f = w } = {},
) {
  if (!C(o)) return;
  let i = performance.now(),
    S = e.reduce((s, k) => s + k, 0),
    E = g(),
    { token: l, miss: _ } = readWellKnownTokenFile(E, "session ingress token"),
    r = 0;
  while (!l && r < e.length) {
    let s = e[r];
    (n(
      `[spare-claim] session ingress token file not readable yet (${_}), re-checking in ${s}ms (${r + 1}/${e.length})`,
      { level: "warn" },
    ),
      await sleep(s),
      r++,
      ({ token: l, miss: _ } = readWellKnownTokenFile(E, "session ingress token")));
  }
  if (!l) {
    writeDiagnosticsEvent("error", "cli_worker_lifecycle_claim_token_wait", {
      attempts: r,
      recovered: !1,
      last_miss: _ ?? "other",
      waited_ms: Math.round(performance.now() - i),
    });
    return;
  }
  let u = r > 0 ? Math.max(S - (performance.now() - i), t) : t,
    p = performance.now(),
    c = 0,
    m = d();
  while (!m && performance.now() - p < u) (await sleep(f), c++, (m = d()));
  if (r > 0 || c > 0)
    writeDiagnosticsEvent("info", "cli_worker_lifecycle_claim_token_wait", {
      attempts: r,
      recovered: !0,
      sibling_attempts: c,
      sibling_present: m,
      waited_ms: Math.round(performance.now() - i),
    });
}
function recoverSessionIngressToken() {
  let o = !!a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
  if (_je() !== null) return { recovered: !1, diag: { fd_env_set: o } };
  let { token: e, miss: t } = readWellKnownTokenFile(g(), "session ingress token");
  if (!e)
    return { recovered: !1, diag: { fd_env_set: o, last_miss: t ?? "other" } };
  return (
    mae(e),
    n("Session ingress token re-read from well-known file"),
    { recovered: !0, diag: { fd_env_set: o } }
  );
}
export { TOKEN_FILE_RETRY_DELAYS_MS, waitForSessionIngressToken, recoverSessionIngressToken };
