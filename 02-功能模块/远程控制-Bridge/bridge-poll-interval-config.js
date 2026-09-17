// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getFeatureValue_CACHED_WITH_REFRESH } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { T, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var t = {
  poll_interval_ms_not_at_capacity: 2000,
  poll_interval_ms_at_capacity: 600000,
  non_exclusive_heartbeat_interval_ms: 0,
  multisession_poll_interval_ms_not_at_capacity: 2000,
  multisession_poll_interval_ms_partial_capacity: 2000,
  multisession_poll_interval_ms_at_capacity: 600000,
  reclaim_older_than_ms: 5000,
  session_keepalive_interval_v2_ms: 120000,
};
var a = { message: "must be 0 (disabled) or \u2265100ms" },
  l = createLazyValue(() =>
    c({
      poll_interval_ms_not_at_capacity: T().int().min(100),
      poll_interval_ms_at_capacity: T()
        .int()
        .refine((_) => _ === 0 || _ >= 100, a),
      non_exclusive_heartbeat_interval_ms: T().int().min(0).default(0),
      multisession_poll_interval_ms_not_at_capacity: T()
        .int()
        .min(100)
        .default(t.multisession_poll_interval_ms_not_at_capacity),
      multisession_poll_interval_ms_partial_capacity: T()
        .int()
        .min(100)
        .default(t.multisession_poll_interval_ms_partial_capacity),
      multisession_poll_interval_ms_at_capacity: T()
        .int()
        .refine((_) => _ === 0 || _ >= 100, a)
        .default(t.multisession_poll_interval_ms_at_capacity),
      reclaim_older_than_ms: T().int().min(1).default(5000),
      session_keepalive_interval_v2_ms: T().int().min(0).default(120000),
    })
      .refine(
        (_) =>
          _.non_exclusive_heartbeat_interval_ms > 0 ||
          _.poll_interval_ms_at_capacity > 0,
        {
          message:
            "at-capacity liveness requires non_exclusive_heartbeat_interval_ms > 0 or poll_interval_ms_at_capacity > 0",
        },
      )
      .refine(
        (_) =>
          _.non_exclusive_heartbeat_interval_ms > 0 ||
          _.multisession_poll_interval_ms_at_capacity > 0,
        {
          message:
            "at-capacity liveness requires non_exclusive_heartbeat_interval_ms > 0 or multisession_poll_interval_ms_at_capacity > 0",
        },
      ),
  );
function getBridgePollIntervalConfig() {
  let _ = getFeatureValue_CACHED_WITH_REFRESH("tengu_bridge_poll_interval_config", t, 300000),
    e = l().safeParse(_);
  return e.success ? e.data : t;
}
export { getBridgePollIntervalConfig };
