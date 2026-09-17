// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import {
  Kxe,
  Iae,
  Ra,
  TokenCache,
  ydr,
  GYt,
  resolveCredentialsFromConfig,
  dt,
  ge,
  l,
  Po,
  Rt,
} from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { gge, iBe, nS, Avt } from "./chunk-wk0e3dz4.js";
import { Cs } from "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import { getFederationCacheDir } from "../../01-核心基础设施/共享小工具-未细化/federation-cache-dir.js";
import { hashSha256 } from "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import { mkdir, readFile, stat as F } from "fs/promises";
import { join as b } from "path";
import { dirname } from "path";
var P = { "fail-closed": 5, "fail-open": 15 };
function E(e, t, r) {
  return (s) => withCredentialsLock(t, () => e(s), r);
}
async function withCredentialsLock(e, t, r = "fail-closed") {
  let s = dirname(e),
    o = P[r],
    c;
  try {
    c = await O(s, o, r);
  } catch (d) {
    if (r === "fail-closed" || d instanceof Ra) throw d;
    return (
      n(
        `wif: credentials lock unavailable at ${s} (${l(d)}); refreshing without cross-process serialization`,
      ),
      t()
    );
  }
  try {
    return (logEvent("tengu_wif_user_oauth_lock_acquired", { mode: fromEnum(r) }), await t());
  } finally {
    logEvent("tengu_wif_user_oauth_lock_released", { mode: fromEnum(r) });
    try {
      await c();
    } catch (d) {
      if (Po(d)) n(`wif: lock release failed: ${d}`);
      else logError(d);
    }
  }
}
async function O(e, t, r) {
  for (let s = 0; ; s++)
    try {
      return await Cs(e, {
        stale: 60000,
        update: 5000,
        onCompromised: (o) =>
          n(`WIF credentials lock compromised: ${o}`, { level: "error" }),
      });
    } catch (o) {
      if (o.code !== "ELOCKED") throw o;
      if (s >= t) {
        logEvent("tengu_wif_user_oauth_lock_retry_limit", { attempt: s, mode: fromEnum(r) });
        let c = new Ra(
          `Could not acquire credentials lock at ${e} after ${t} retries`,
        );
        throw (
          (c.cause = Object.assign(Error("credentials lock busy"), {
            code: "ELOCKED",
          })),
          c
        );
      }
      (logEvent("tengu_wif_user_oauth_lock_retry", { attempt: s, mode: fromEnum(r) }),
        await sleep(1000 + Math.random() * 1000));
    }
}
class T {
  credentialsPromise = void 0;
  tokenCachePromise = void 0;
  resolvedBaseUrlSnapshot = void 0;
  failedAccessTokens = new Set();
  reset() {
    ((this.credentialsPromise = void 0),
      (this.tokenCachePromise = void 0),
      (this.resolvedBaseUrlSnapshot = void 0),
      this.failedAccessTokens.clear());
  }
}
var D = new j(() => new T());
function w() {
  return D.of(B().host);
}
var x = 20;
function getResolvedWIFBaseUrlSnapshot() {
  return w().resolvedBaseUrlSnapshot;
}
function getWIFCredentials() {
  return A(w());
}
function A(e) {
  if (e.credentialsPromise === void 0)
    e.credentialsPromise = withFeatureTelemetry("wif_credentials_resolve", async () => {
      let t = await L();
      if (t === null) return ((e.resolvedBaseUrlSnapshot = null), null);
      let r = a.ANTHROPIC_BASE_URL || t.base_url,
        s = r || "https://api.anthropic.com",
        o = nS() === "env-quad",
        c = o ? await K(t, s) : await GYt(t),
        d = {
          ...t,
          base_url: r,
          ...(t.authentication.credentials_path || c === null
            ? {}
            : { authentication: { ...t.authentication, credentials_path: c } }),
        },
        [{ getUserAgent: m }, { getProxyFetchOptions: p }] = await Promise.all([
          import("./认证-OAuth登录.419zdfz3.js"),
          import("../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js"),
        ]),
        _ = resolveCredentialsFromConfig(d, {
          baseURL: s,
          fetch: (g, I) =>
            fetch(g, {
              ...I,
              ...p({ forAnthropicAPI: !0, url: String(g) }),
              signal: AbortSignal.timeout(1e4),
            }),
          userAgent: m(),
          onSafetyWarning: (g) => n(g, { level: "warn" }),
          onCacheWriteError: (g) => n(String(g), { level: "warn" }),
        });
      if (c && t.authentication.type === "user_oauth")
        _.provider = E(
          C(W(_.provider, c), c, "after-recorded-401", e.failedAccessTokens),
          c,
          "fail-closed",
        );
      else if (c && o)
        _.provider = E(
          C(_.provider, c, "always", e.failedAccessTokens),
          c,
          "fail-open",
        );
      return ((e.resolvedBaseUrlSnapshot = _.baseURL ?? null), _);
    }).catch((t) => {
      throw (
        n(`WIF credential resolution failed: ${l(t)}`, { level: "error" }),
        t instanceof Ra ? t : new Ra(l(t))
      );
    });
  return e.credentialsPromise;
}
async function invalidateWIFToken(e) {
  let t = w(),
    r = await R(t).catch(() => null);
  if (r === null) return;
  if (e) {
    if ((t.failedAccessTokens.add(e), t.failedAccessTokens.size > x))
      for (let s of t.failedAccessTokens) {
        t.failedAccessTokens.delete(s);
        break;
      }
  }
  r.invalidate();
}
function getWIFTokenCache() {
  return R(w());
}
function R(e) {
  return (
    (e.tokenCachePromise ??= A(e).then((t) => {
      if (t === null) return null;
      return new TokenCache(
        async (s) => {
          try {
            let o = await t.provider(s);
            return (logFeatureOk("wif_token_exchange"), o);
          } catch (o) {
            let c =
              o instanceof Ra
                ? o
                : new Ra(o instanceof Error ? o.message : String(o), null);
            if (c !== o) c.cause = o;
            throw (logFeatureBad("wif_token_exchange", H(c)), c);
          }
        },
        (s) => n(String(s), { level: "warn" }),
      );
    })),
    e.tokenCachePromise
  );
}
function C(e, t, r, s) {
  return async (o) => {
    if (!o?.forceRefresh) return e(o);
    if (r === "always" || s.size > 0)
      try {
        let c = await import("fs"),
          d = JSON.parse(await c.promises.readFile(t, "utf-8")),
          { access_token: m, expires_at: p } = d;
        if (
          typeof m === "string" &&
          m &&
          !s.has(m) &&
          (typeof p !== "number" || Date.now() / 1000 < p - Kxe)
        ) {
          let { logEvent: _ } = await import("../../01-核心基础设施/共享小工具-未细化/logEvent.q8d8f1jd.js"),
            { fromEnum: g } = await import("../../01-核心基础设施/共享小工具-未细化/analytics-fields.js");
          return (
            _("tengu_wif_user_oauth_refresh_race_resolved", { mode: g(r) }),
            n(
              "wif: adopting sibling-rotated access token from credentials file; skipping refresh grant",
            ),
            { token: m, expiresAt: typeof p === "number" ? p : null }
          );
        }
      } catch (c) {
        n(`wif: rotated-token adoption check failed: ${l(c)}`);
      }
    return e(o);
  };
}
function W(e, t) {
  let r = async () => {
    try {
      let s = await import("fs");
      return JSON.parse(await s.promises.readFile(t, "utf-8"));
    } catch {
      return null;
    }
  };
  return async (s) => {
    let c = (await r())?.refresh_token;
    try {
      return await e(s);
    } catch (d) {
      if (
        d instanceof Ra &&
        (d.statusCode === 400 || d.statusCode === 401) &&
        typeof d.body === "string" &&
        d.body.includes('"invalid_grant"') &&
        gge(d) === null &&
        typeof c === "string" &&
        c
      )
        try {
          let m = await r();
          if (m && m.refresh_token === c) {
            let { logEvent: p } = await import("../../01-核心基础设施/共享小工具-未细化/logEvent.q8d8f1jd.js");
            (await Iae(t, { ...m, refresh_token: void 0 }),
              p("tengu_wif_user_oauth_refresh_token_cleared", {}));
          }
        } catch (m) {
          if (Rt(m)) n(`wif: refresh-token cleanup write failed: ${m}`);
          else
            logError(dt(ge(m), "WIF: failed to clear stale user_oauth refresh_token"));
        }
      throw d;
    }
  };
}
function isWIFTransientExchangeError(e) {
  if (e instanceof Ra && typeof e.statusCode === "number")
    return e.statusCode >= 500 || e.statusCode === 429 || e.statusCode === 408;
  let t = e;
  for (let r = 0; r < 4 && t instanceof Error; r++) {
    if (t.name === "TimeoutError" || U(t)) return !0;
    t = t.cause;
  }
  return !1;
}
function U(e) {
  switch ("code" in e && typeof e.code === "string" ? e.code : "") {
    case "ECONNRESET":
    case "ECONNREFUSED":
    case "ECONNABORTED":
    case "ETIMEDOUT":
    case "EHOSTUNREACH":
    case "ENETUNREACH":
    case "ENETDOWN":
    case "ENOTFOUND":
    case "EAI_AGAIN":
    case "EPIPE":
    case "UND_ERR_SOCKET":
    case "UND_ERR_CONNECT_TIMEOUT":
    case "ELOCKED":
    case "ConnectionRefused":
    case "ConnectionClosed":
    case "FailedToOpenSocket":
    case "Timeout":
      return !0;
    default:
      return !1;
  }
}
function H(e) {
  if (iBe(e)) return "no_refresh_available";
  if (gge(e)) return "account_on_hold";
  if (typeof e.body === "string" && e.body.includes('"invalid_grant"'))
    return "invalid_grant";
  if (typeof e.statusCode === "number") {
    if (e.statusCode >= 500) return "http_5xx";
    if (e.statusCode >= 400) return "http_4xx";
  }
  let t = e.message.toLowerCase();
  if (t.includes("parse") || t.includes("json")) return "parse_failed";
  return "network_error";
}
function resetWIFCredentialState() {
  (w().reset(), Avt());
}
var k = (e) => process.env[e]?.trim() || void 0;
async function L() {
  if (nS() === "env-quad") {
    let e = k("ANTHROPIC_FEDERATION_RULE_ID"),
      t = k("ANTHROPIC_ORGANIZATION_ID");
    if (e && t) {
      let r = k("ANTHROPIC_IDENTITY_TOKEN_FILE");
      return {
        organization_id: t,
        workspace_id: k("ANTHROPIC_WORKSPACE_ID"),
        base_url: k("ANTHROPIC_BASE_URL"),
        authentication: {
          type: "oidc_federation",
          federation_rule_id: e,
          service_account_id: k("ANTHROPIC_SERVICE_ACCOUNT_ID"),
          identity_token: r ? { source: "file", path: r } : void 0,
          scope: k("ANTHROPIC_SCOPE"),
        },
      };
    }
  }
  return ydr();
}
async function K(e, t) {
  if (e.authentication.type !== "oidc_federation") return null;
  let r = e.authentication.identity_token?.path,
    s;
  if (r)
    try {
      s = (await readFile(r, "utf-8")).trim();
    } catch (d) {
      return (
        n(
          `wif: cannot read identity token at ${r} (${l(d)}); federation token cache disabled`,
        ),
        null
      );
    }
  else s = k("ANTHROPIC_IDENTITY_TOKEN");
  if (!s)
    return (n("wif: no identity token; federation token cache disabled"), null);
  let o = getFederationCacheDir();
  if (o === null)
    return (
      n("wif: no config directory; federation token cache disabled"),
      null
    );
  try {
    await mkdir(o, { recursive: !0, mode: 448 });
    {
      let d = await F(o),
        m = d.mode & 511;
      if (m & 63)
        return (
          n(
            `wif: ${o} is mode 0o${m.toString(8)} (filesystem ignores modes, or directory pre-existed shared); federation token cache disabled`,
          ),
          null
        );
      let p = process.getuid?.();
      if (p !== void 0 && d.uid !== p)
        return (
          n(
            `wif: ${o} is owned by uid ${d.uid}, not ${p}; federation token cache disabled`,
          ),
          null
        );
    }
  } catch (d) {
    return (
      n(`wif: cannot prepare ${o} (${l(d)}); federation token cache disabled`),
      null
    );
  }
  let c = hashSha256(
    JSON.stringify([
      e.authentication.federation_rule_id,
      e.organization_id,
      e.workspace_id ?? "",
      e.authentication.service_account_id ?? "",
      e.authentication.scope ?? "",
      t,
      hashSha256(s),
    ]),
  );
  return b(o, `${c}.json`);
}
export { withCredentialsLock, getResolvedWIFBaseUrlSnapshot, getWIFCredentials, invalidateWIFToken, getWIFTokenCache, isWIFTransientExchangeError, resetWIFCredentialState };
