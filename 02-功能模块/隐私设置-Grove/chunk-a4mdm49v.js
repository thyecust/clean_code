// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { rs } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { getOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { writeToStderr } from "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { withOAuth401Retry, CCR_BYOC_BETA_HEADER, prepareApiRequest, httpClient, getClaudeAIOAuthTokenOrigin, getOauthAccountInfo, isConsumerSubscriber, getFeatureValue_CACHED_MAY_BE_STALE, saveGlobalConfig, getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isAxiosError } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { gracefulShutdown } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { s, c, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var v = 86400000,
  S = 3000,
  getAccountSettings = rs(
    async (t) => {
      try {
        return {
          success: !0,
          data: (
            await withOAuth401Retry(
              async () => {
                let o = await httpClient.get("/api/oauth/account/settings", {
                  timeout: S,
                  credentials: t,
                });
                if (!o.ok)
                  throw Error(`Failed to get Grove settings: ${o.reason}`);
                return o;
              },
              { credentials: t },
            )
          ).data,
        };
      } catch (e) {
        if (
          !(e instanceof Error) ||
          !/data-residency|essential-traffic-only|no-auth/.test(e.message)
        )
          logForDebugging(`Failed to fetch Grove settings: ${e}`, { level: "error" });
        return (getAccountSettings.cache.clear?.(), { success: !1 });
      }
    },
    () => "account",
  );
async function markGroveNoticeViewed(t) {
  try {
    (await withOAuth401Retry(
      async () => {
        let e = await httpClient.post(
          "/api/oauth/account/grove_notice_viewed",
          {},
          { credentials: t },
        );
        if (!e.ok)
          throw Error(`Failed to mark Grove notice viewed: ${e.reason}`);
        return e;
      },
      { credentials: t },
    ),
      getAccountSettings.cache.clear?.(),
      logFeatureOk("api_grove_notice_mark_viewed"));
  } catch (e) {
    (logForDebugging(
      `Failed to mark Grove notice viewed: ${e instanceof Error ? e.message : String(e)}`,
      { level: "error" },
    ),
      logFeatureBad("api_grove_notice_mark_viewed", "request_failed"));
  }
}
async function updateGroveSettings(t, e) {
  try {
    (await withOAuth401Retry(
      async () => {
        let o = await httpClient.patch(
          "/api/oauth/account/settings",
          { grove_enabled: t },
          { credentials: e },
        );
        if (!o.ok) throw Error(`Failed to update Grove settings: ${o.reason}`);
        return o;
      },
      { credentials: e },
    ),
      getAccountSettings.cache.clear?.(),
      logFeatureOk("api_grove_settings_update"));
  } catch (o) {
    (logForDebugging(`updateGroveSettings failed: ${String(o)}`, { level: "error" }),
      logFeatureBad("api_grove_settings_update", "request_failed"));
  }
}
async function shouldShowGroveNotice(t, e) {
  if (!isConsumerSubscriber()) return !1;
  let o = getOauthAccountInfo()?.accountUuid;
  if (!o) return !1;
  let u = getGlobalConfig().groveConfigCache?.[o],
    l = Date.now();
  if (!u)
    return (
      logForDebugging(
        "Grove: No cache, fetching config in background (dialog skipped this session)",
      ),
      _(o, t, e),
      !1
    );
  if (l - u.timestamp > v)
    return (
      logForDebugging(
        "Grove: Cache stale, returning cached data and refreshing in background",
      ),
      _(o, t, e),
      u.grove_enabled
    );
  return (logForDebugging("Grove: Using fresh cached config"), u.grove_enabled);
}
async function _(t, e, o) {
  try {
    let r = await getGroveConfig(o);
    if (!r.success) return;
    let u = r.data.grove_enabled,
      l = getGlobalConfig().groveConfigCache?.[t];
    if (l?.grove_enabled === u && Date.now() - l.timestamp <= v) return;
    await saveGlobalConfig(
      (d) => ({
        ...d,
        groveConfigCache: {
          ...d.groveConfigCache,
          [t]: { grove_enabled: u, timestamp: Date.now() },
        },
      }),
      e,
    );
  } catch (r) {
    logForDebugging(`Grove: Failed to fetch and store config: ${r}`);
  }
}
var getGroveConfig = rs(
  async (t) => {
    try {
      let e = await withOAuth401Retry(
          async () => {
            let d = await httpClient.get("/api/claude_code_grove", {
              timeout: S,
              credentials: t,
            });
            if (!d.ok)
              throw Error(`Failed to fetch Grove notice config: ${d.reason}`);
            return d;
          },
          { credentials: t },
        ),
        {
          grove_enabled: o,
          domain_excluded: r,
          notice_is_grace_period: u,
          notice_reminder_frequency: l,
        } = e.data;
      return {
        success: !0,
        data: {
          grove_enabled: o,
          domain_excluded: r ?? !1,
          notice_is_grace_period: u ?? !0,
          notice_reminder_frequency: l,
        },
      };
    } catch (e) {
      return (logForDebugging(`Failed to fetch Grove notice config: ${e}`), { success: !1 });
    }
  },
  () => "config",
);
function isGroveNoticeDue(t, e, o) {
  if (!t.success || !e.success) return !1;
  let r = t.data,
    u = e.data;
  if (r.grove_enabled !== null) return !1;
  if (o) return !0;
  if (!u.notice_is_grace_period) return !0;
  let d = u.notice_reminder_frequency;
  if (d !== null && r.grove_notice_viewed_at) {
    let p = new Date(r.grove_notice_viewed_at).getTime();
    if (isNaN(p))
      return (
        logError(
          Error(
            `Invalid grove_notice_viewed_at from API: ${r.grove_notice_viewed_at}`,
          ),
        ),
        !0
      );
    return Math.floor((Date.now() - p) / 86400000) >= d;
  } else {
    let p = r.grove_notice_viewed_at;
    return p === null || p === void 0;
  }
}
async function printGroveNotice(t) {
  let [e, o] = await Promise.all([getAccountSettings(t), getGroveConfig(t)]);
  if (isGroveNoticeDue(e, o, !1)) {
    let u = o.success ? o.data : null;
    if (
      (logEvent("tengu_grove_print_viewed", {
        dismissable: u?.notice_is_grace_period,
      }),
      u === null || u.notice_is_grace_period)
    )
      (writeToStderr(`
An update to our Consumer Terms and Privacy Policy will take effect on October 8, 2025. Run \`claude\` to review the updated terms.

`),
        await markGroveNoticeViewed(t));
    else
      (writeToStderr(`
[ACTION REQUIRED] An update to our Consumer Terms and Privacy Policy has taken effect on October 8, 2025. You must run \`claude\` to review the updated terms.

`),
        await gracefulShutdown(1));
  }
}
class RedactedGitHubToken {
  #e;
  constructor(t) {
    this.#e = t;
  }
  reveal() {
    return this.#e;
  }
  toString() {
    return "[REDACTED:gh-token]";
  }
  toJSON() {
    return "[REDACTED:gh-token]";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "[REDACTED:gh-token]";
  }
}
async function importGitHubToken(t, e) {
  let o;
  try {
    o = await httpClient.post(
      "/v1/code/github/import-token",
      { token: t.reveal() },
      {
        headers: { "anthropic-beta": CCR_BYOC_BETA_HEADER.header },
        auth: "teleport-org",
        timeout: 15000,
        validateStatus: () => !0,
        credentials: e,
      },
    );
  } catch (r) {
    if (isAxiosError(r))
      return (
        logForDebugging(`import-token network error: ${r.code ?? "unknown"}`, {
          level: "error",
        }),
        { ok: !1, error: { kind: "network" } }
      );
    return { ok: !1, error: { kind: "not_signed_in" } };
  }
  if (!o.ok) return { ok: !1, error: { kind: "not_signed_in" } };
  if (o.status === 200) return { ok: !0, result: o.data };
  if (o.status === 400) return { ok: !1, error: { kind: "invalid_token" } };
  if (o.status === 401) return { ok: !1, error: { kind: "not_signed_in" } };
  return (
    logForDebugging(`import-token returned ${o.status}`, { level: "error" }),
    { ok: !1, error: { kind: "server", status: o.status } }
  );
}
async function canPrepareApiRequest(t) {
  try {
    return (await prepareApiRequest(t), !0);
  } catch {
    return !1;
  }
}
async function k(t, { timeout: e, isBackground: o }) {
  try {
    let r = await httpClient.get("/api/oauth/organizations/:orgUUID/sync/github/auth", {
      auth: "teleport-org",
      timeout: e,
      isBackground: o,
      validateStatus: () => !0,
      credentials: t,
    });
    if (!r.ok || r.status !== 200) return null;
    let u = r.data?.auth_source;
    return {
      isAuthenticated: r.data?.is_authenticated === !0,
      authSource: u === "oauth" || u === "cli_import" ? u : null,
    };
  } catch {
    return null;
  }
}
async function getGitHubAuthSource(t) {
  let e = await k(t, { timeout: 1e4, isBackground: !1 });
  return e?.isAuthenticated ? e.authSource : null;
}
async function C(t) {
  let e = await k(t, { timeout: 3000, isBackground: !0 });
  if (e === null)
    return (logFeatureSad("api_github_connection_status", "request_failed"), "unknown");
  return (
    logFeatureOk("api_github_connection_status"),
    e.isAuthenticated ? "connected" : "not_connected"
  );
}
function getClaudeAiCodeBaseUrl() {
  return `${getOauthConfig().CLAUDE_AI_ORIGIN}/code`;
}
class G {
  inFlight = void 0;
  status = void 0;
  generation = 0;
  async read(t, e) {
    if ((this.seedFromPersisted(), this.inFlight)) await this.inFlight;
    else if (!b()) await this.fetch(t, e);
    return this.status ?? "unknown";
  }
  peek(t, e) {
    if (
      (this.seedFromPersisted(),
      this.status === void 0 && !this.inFlight && !b())
    )
      this.fetch(t, e);
    return this.status;
  }
  markConnected(t) {
    (this.generation++,
      (this.inFlight = void 0),
      (this.status = "connected"),
      w("connected", t));
  }
  clear() {
    (this.generation++, (this.inFlight = void 0), (this.status = void 0));
  }
  seedFromPersisted() {
    if (this.status !== void 0 || this.inFlight) return;
    let t = A();
    if (t) this.status = E(getGlobalConfig(), t);
  }
  fetch(t, e) {
    let o = this.generation,
      r = C(t).then(
        (u) => {
          this.settle(o, u, e);
        },
        (u) => {
          (logError(u), this.settle(o, "unknown", e));
        },
      );
    return ((this.inFlight = r), r);
  }
  settle(t, e, o) {
    if (t !== this.generation) return;
    if (((this.inFlight = void 0), e === "unknown")) {
      this.status ??= e;
      return;
    }
    ((this.status = e), w(e, o));
  }
}
var githubConnectionStatusStore = new j(() => new G());
function b() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_cheerful_horizon", !1);
}
var P = createLazyValue(() =>
  c({
    accountUuid: s(),
    orgUuid: s(),
    status: X(["connected", "not_connected"]),
  }),
);
function A() {
  let t = getOauthAccountInfo();
  if (!t?.organizationUuid) return;
  let e = a.CLAUDE_CODE_ORGANIZATION_UUID;
  if (e && e !== t.organizationUuid) return;
  if (getClaudeAIOAuthTokenOrigin() !== "store") return;
  return { accountUuid: t.accountUuid, orgUuid: t.organizationUuid };
}
function E(t, e) {
  let o = P().safeParse(t.githubWebConnectionStatusCache);
  if (
    !o.success ||
    o.data.accountUuid !== e.accountUuid ||
    o.data.orgUuid !== e.orgUuid
  )
    return;
  return o.data.status;
}
function w(t, e) {
  let o = A();
  if (!o) return;
  saveGlobalConfig(
    (r) =>
      E(r, o) === t
        ? r
        : { ...r, githubWebConnectionStatusCache: { ...o, status: t } },
    e,
  );
}
export { getAccountSettings, markGroveNoticeViewed, updateGroveSettings, shouldShowGroveNotice, getGroveConfig, isGroveNoticeDue, printGroveNotice, RedactedGitHubToken, importGitHubToken, canPrepareApiRequest, getGitHubAuthSource, getClaudeAiCodeBaseUrl, githubConnectionStatusStore };
