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
import { $6, bBe, O5t, Rq, wBe } from "../../02-功能模块/认证-OAuth登录/chunk-7rf7w8yf.js";
import { writeDiagnosticsEvent } from "./diagnostics-log.js";
var $Jt = [250, 500, 500, 750, 1000];
function g() {
  return a.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Rq;
}
function C(o) {
  return (
    a.CLAUDE_CODE_REMOTE &&
    !a.CLAUDE_CODE_SESSION_ACCESS_TOKEN &&
    !a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR &&
    o.some((e) => e === "--sdk-url" || e.startsWith("--sdk-url=")) &&
    !$6()
  );
}
var I = 250,
  w = 50;
function d() {
  return (
    wBe(bBe, "OAuth token").token !== null || wBe(O5t, "API key").token !== null
  );
}
async function G1n(
  o,
  { delaysMs: e = $Jt, siblingGraceMs: t = I, siblingStepMs: f = w } = {},
) {
  if (!C(o)) return;
  let i = performance.now(),
    S = e.reduce((s, k) => s + k, 0),
    E = g(),
    { token: l, miss: _ } = wBe(E, "session ingress token"),
    r = 0;
  while (!l && r < e.length) {
    let s = e[r];
    (n(
      `[spare-claim] session ingress token file not readable yet (${_}), re-checking in ${s}ms (${r + 1}/${e.length})`,
      { level: "warn" },
    ),
      await sleep(s),
      r++,
      ({ token: l, miss: _ } = wBe(E, "session ingress token")));
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
function q1n() {
  let o = !!a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
  if (_je() !== null) return { recovered: !1, diag: { fd_env_set: o } };
  let { token: e, miss: t } = wBe(g(), "session ingress token");
  if (!e)
    return { recovered: !1, diag: { fd_env_set: o, last_miss: t ?? "other" } };
  return (
    mae(e),
    n("Session ingress token re-read from well-known file"),
    { recovered: !0, diag: { fd_env_set: o } }
  );
}
export { $Jt, G1n, q1n };
