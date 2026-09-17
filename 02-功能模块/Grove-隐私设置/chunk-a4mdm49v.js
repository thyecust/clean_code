// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { rs } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { getOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { _z } from "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { withOAuth401Retry, ICn, prepareApiRequest, ht, getClaudeAIOAuthTokenOrigin, getOauthAccountInfo, isConsumerSubscriber, H, Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isAxiosError } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { xn } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { s, c, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var v = 86400000,
  S = 3000,
  ZB = rs(
    async (t) => {
      try {
        return {
          success: !0,
          data: (
            await withOAuth401Retry(
              async () => {
                let o = await ht.get("/api/oauth/account/settings", {
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
          n(`Failed to fetch Grove settings: ${e}`, { level: "error" });
        return (ZB.cache.clear?.(), { success: !1 });
      }
    },
    () => "account",
  );
async function NDt(t) {
  try {
    (await withOAuth401Retry(
      async () => {
        let e = await ht.post(
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
      ZB.cache.clear?.(),
      logFeatureOk("api_grove_notice_mark_viewed"));
  } catch (e) {
    (n(
      `Failed to mark Grove notice viewed: ${e instanceof Error ? e.message : String(e)}`,
      { level: "error" },
    ),
      logFeatureBad("api_grove_notice_mark_viewed", "request_failed"));
  }
}
async function pIe(t, e) {
  try {
    (await withOAuth401Retry(
      async () => {
        let o = await ht.patch(
          "/api/oauth/account/settings",
          { grove_enabled: t },
          { credentials: e },
        );
        if (!o.ok) throw Error(`Failed to update Grove settings: ${o.reason}`);
        return o;
      },
      { credentials: e },
    ),
      ZB.cache.clear?.(),
      logFeatureOk("api_grove_settings_update"));
  } catch (o) {
    (n(`updateGroveSettings failed: ${String(o)}`, { level: "error" }),
      logFeatureBad("api_grove_settings_update", "request_failed"));
  }
}
async function dSe(t, e) {
  if (!isConsumerSubscriber()) return !1;
  let o = getOauthAccountInfo()?.accountUuid;
  if (!o) return !1;
  let u = ee().groveConfigCache?.[o],
    l = Date.now();
  if (!u)
    return (
      n(
        "Grove: No cache, fetching config in background (dialog skipped this session)",
      ),
      _(o, t, e),
      !1
    );
  if (l - u.timestamp > v)
    return (
      n(
        "Grove: Cache stale, returning cached data and refreshing in background",
      ),
      _(o, t, e),
      u.grove_enabled
    );
  return (n("Grove: Using fresh cached config"), u.grove_enabled);
}
async function _(t, e, o) {
  try {
    let r = await l7(o);
    if (!r.success) return;
    let u = r.data.grove_enabled,
      l = ee().groveConfigCache?.[t];
    if (l?.grove_enabled === u && Date.now() - l.timestamp <= v) return;
    await Te(
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
    n(`Grove: Failed to fetch and store config: ${r}`);
  }
}
var l7 = rs(
  async (t) => {
    try {
      let e = await withOAuth401Retry(
          async () => {
            let d = await ht.get("/api/claude_code_grove", {
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
      return (n(`Failed to fetch Grove notice config: ${e}`), { success: !1 });
    }
  },
  () => "config",
);
function FDt(t, e, o) {
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
async function qBn(t) {
  let [e, o] = await Promise.all([ZB(t), l7(t)]);
  if (FDt(e, o, !1)) {
    let u = o.success ? o.data : null;
    if (
      (logEvent("tengu_grove_print_viewed", {
        dismissable: u?.notice_is_grace_period,
      }),
      u === null || u.notice_is_grace_period)
    )
      (_z(`
An update to our Consumer Terms and Privacy Policy will take effect on October 8, 2025. Run \`claude\` to review the updated terms.

`),
        await NDt(t));
    else
      (_z(`
[ACTION REQUIRED] An update to our Consumer Terms and Privacy Policy has taken effect on October 8, 2025. You must run \`claude\` to review the updated terms.

`),
        await xn(1));
  }
}
class bnn {
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
async function wnn(t, e) {
  let o;
  try {
    o = await ht.post(
      "/v1/code/github/import-token",
      { token: t.reveal() },
      {
        headers: { "anthropic-beta": ICn.header },
        auth: "teleport-org",
        timeout: 15000,
        validateStatus: () => !0,
        credentials: e,
      },
    );
  } catch (r) {
    if (isAxiosError(r))
      return (
        n(`import-token network error: ${r.code ?? "unknown"}`, {
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
    n(`import-token returned ${o.status}`, { level: "error" }),
    { ok: !1, error: { kind: "server", status: o.status } }
  );
}
async function zBn(t) {
  try {
    return (await prepareApiRequest(t), !0);
  } catch {
    return !1;
  }
}
async function k(t, { timeout: e, isBackground: o }) {
  try {
    let r = await ht.get("/api/oauth/organizations/:orgUUID/sync/github/auth", {
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
async function Tnn(t) {
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
function c7() {
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
    if (t) this.status = E(ee(), t);
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
var b4 = new j(() => new G());
function b() {
  return H("tengu_cheerful_horizon", !1);
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
  Te(
    (r) =>
      E(r, o) === t
        ? r
        : { ...r, githubWebConnectionStatusCache: { ...o, status: t } },
    e,
  );
}
export { ZB, NDt, pIe, dSe, l7, FDt, qBn, bnn, wnn, zBn, Tnn, c7, b4 };
