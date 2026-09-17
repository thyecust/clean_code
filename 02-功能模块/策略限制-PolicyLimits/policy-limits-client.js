// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { j, B, hB, u8, Nm } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { sleep } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { OAUTH_BETA_HEADER, getOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { fromEnum, fromEnumOpt } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { l, A, W, Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { ABSENT_PARENT_TELEMETRY_CODE, describeStorageError, registerCleanup, jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  getAuthHeadersAsync,
  shouldUseWIFAuth,
  effectiveAuthTokenEnv,
  getAuthTokenSource,
  getApiKeyPrefixBucket,
  getAnthropicApiKeyWithSource,
  getConfiguredApiKeyHelper,
  getClaudeAIOAuthTokens,
  checkAndRefreshOAuthTokenIfNeededWithOutcome,
  isClaudeAISubscriber,
  getStoredOauthAccountInfo,
  getFeatureValue_CACHED_MAY_BE_STALE,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { hashCanonicalJson } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getAPIProvider, isActualFirstPartyAnthropicBaseUrl } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { POLICY_LIMITS_API_PATH } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import {
  isMainLoopActive,
  computeRetryDelayMs,
  verifySignedCacheJws,
  extractSignatureHeader,
  writeSignatureSidecar,
  deleteSignatureSidecars,
  pruneStaleSignatureSidecars,
  readStoredSignature,
  readAcceptedSignatureIat,
  recordAcceptedSignatureIat,
} from "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import {
  MAX_COMPLIANCE_TAINTS,
  countLossyComplianceTaints,
  EMPTY_POLICY_LIMITS_RESPONSE,
  POLICY_SERVER_ERROR_TYPES,
  POLICY_SERVER_ERROR_CODES,
  setSessionCache,
  setLastFetchOutcome,
  getLastFetchOutcome,
  detachPolicyLimitsBackend,
  getSessionCache,
  suppressDiskAdoption,
  getDiskAdoptionEpoch,
  liftDiskAdoptionSuppression,
  isDiskAdoptionSuppressed,
  getCachePath,
  isPolicyLimitsEligible,
  getPolicyLimitsIneligibleReason,
  loadCachedResponse,
  parseCachedResponse,
  projectPolicyLimitsBody,
  serverBodyOf,
  seedSessionCacheFromPrime,
  getResponseFromCache,
} from "../../01-核心基础设施/核心工具-字符串与文本/chunk-8sw91yn5.js";
import { getErrorReportingPolicyState } from "../反馈-错误上报/error-reporting-eligibility.js";
import { getClientUserAgent } from "../../01-核心基础设施/HTTP-网络层/user-agent.js";
import { dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { statSync } from "fs";
import { unlink, utimes, writeFile } from "fs/promises";
function N(e, t, r = {}) {
  let o = setInterval(e, t);
  if (r.unref) o.unref?.();
  return { [Symbol.dispose]: () => clearInterval(o) };
}
var he = 3;
function fe() {
  let e = getFeatureValue_CACHED_MAY_BE_STALE("tengu_zippy_gosling", 0);
  return typeof e === "number" && Number.isFinite(e) ? e : 0;
}
function createIntervalPoller(e, t, r = {}) {
  let o = 0,
    s = null,
    a = null,
    d = N(h, t, r);
  function p() {
    if ((s?.(), (s = null), a !== null)) (clearTimeout(a), (a = null));
  }
  function m() {
    ((o = 0), p(), e());
  }
  function h() {
    let _ = fe(),
      L = Math.max(Nm(), u8() ?? 0);
    if (!(_ > 0 && !isMainLoopActive() && Date.now() - L > _) || o >= he) {
      m();
      return;
    }
    (o++,
      (s ??= hB(() => {
        a ??= setTimeout(() => {
          (d[Symbol.dispose](), (d = N(h, t, r)), m());
        }, 0);
      })));
  }
  return {
    [Symbol.dispose]: () => {
      (d[Symbol.dispose](), p());
    },
  };
}
var ge = {
    begin: "-----SIGNED-CACHE-ROOTS-BEGIN-----",
    roots: [],
    end: "-----SIGNED-CACHE-ROOTS-END-----",
  },
  ie = ge.roots;
var oe = Object.freeze(ie.map((e) => Object.freeze({ ...e })));
async function re({
  kind: e,
  cachePath: t,
  bodySha: r,
  orgUuid: o,
  accountUuid: s,
  workspaceUuid: a,
}) {
  try {
    let d = { typ: e, aud: o, sub: s, ws: a },
      [p, m] = await Promise.all([readStoredSignature(t), readAcceptedSignatureIat(t, d)]),
      h = Date.now(),
      _ = verifySignedCacheJws({
        jws: p?.jws,
        kind: e,
        orgUuid: o,
        accountUuid: s,
        workspaceUuid: a,
        bodySha: r,
        highWaterIat: m,
        nowMs: h,
        roots: oe,
      });
    if (_.result === "valid" && _.issuedAt !== void 0)
      await recordAcceptedSignatureIat(t, d, Math.min(_.issuedAt, Math.floor(h / 1000)));
    logEvent("tengu_signed_cache_shadow", {
      cache: fromEnum(e),
      result: fromEnum(_.result),
      age_s: _.ageSeconds,
      cert_days_left: _.certDaysLeft,
      has_org_uuid: o !== void 0,
      has_account_uuid: s !== void 0,
      has_workspace_uuid: a !== void 0,
      ws_unanchored: _.wsUnanchored === !0,
    });
  } catch (d) {
    logForDebugging(`Signed cache: shadow check failed (${e}) - ${l(d)}`);
  }
}
function runSignedCacheShadowCheck(e, t, r, o) {
  try {
    let s = o();
    re({
      kind: e,
      cachePath: t,
      bodySha: r,
      orgUuid: s?.organizationUuid || void 0,
      accountUuid: s?.accountUuid || void 0,
      workspaceUuid: s?.workspaceUuid || void 0,
    }).catch(() => {});
  } catch {}
}
var K = 1e4,
  POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS = K + 2000,
  G = 5,
  Ee = 3600000,
  Le = 30000,
  POLICY_LIMITS_COLD_AWAIT_MS = 5000,
  FAIL_CLOSED_SHADOW_CACHE_TTL_MS = 86400000;
function se() {
  try {
    return Math.max(0, Date.now() - statSync(getCachePath()).mtimeMs);
  } catch {
    return;
  }
}
var ne = Date.now();
function ae(e) {
  let t = getSessionCache();
  if (!t) return e;
  let r = dedupe([...t.compliance_taints, ...e.compliance_taints]).slice(0, MAX_COMPLIANCE_TAINTS);
  if (r.length === t.compliance_taints.length) return t;
  return { ...t, compliance_taints: r };
}
function ue() {
  return `${getOauthConfig().BASE_API_URL}${POLICY_LIMITS_API_PATH}`;
}
function V() {
  try {
    return new URL(getOauthConfig().BASE_API_URL).host;
  } catch {
    return "unknown host";
  }
}
function Re(e) {
  return hashCanonicalJson(serverBodyOf(e));
}
function shouldAwaitPolicyLimitsOnStartup() {
  return isPolicyLimitsEligible() && loadCachedResponse() === null;
}
function Te() {
  let e = null;
  try {
    e = getAnthropicApiKeyWithSource({ skipRetrievingKeyFromApiKeyHelper: !0 }).key;
  } catch {}
  if (!e && shouldUseWIFAuth()) return "wif";
  if (isClaudeAISubscriber() && getClaudeAIOAuthTokens()?.accessToken) return "oauth";
  return e ? "api_key" : "oauth";
}
async function Ae(e, t, r) {
  let o = null;
  for (let s = 1; s <= G + 1; s++) {
    if (
      ((o = await ke(e, t)),
      (o.attempts = s),
      o.success || o.skipRetry || s > G)
    )
      return o;
    r(o);
    let a = computeRetryDelayMs(s);
    (logForDebugging(`Policy limits: Retry ${s}/${G} after ${a}ms`), await sleep(a));
  }
  return o;
}
async function ke(e, t) {
  let r;
  try {
    r = await checkAndRefreshOAuthTokenIfNeededWithOutcome({ credentials: t });
    let o = await getAuthHeadersAsync();
    if (o.error)
      return {
        success: !1,
        error: "Authentication required for policy limits",
        errorCode: "auth_failed",
        authUnavailableReason: o.reasonCode,
        tokenRefreshOutcome: r,
        skipRetry: !0,
      };
    let s = ue(),
      a = { ...o.headers, "User-Agent": getClientUserAgent() };
    if (e) a["If-None-Match"] = `"${e}"`;
    let d = await at.get(s, {
      headers: a,
      timeout: K,
      validateStatus: (h) => h === 200 || h === 304,
    });
    if (d.status === 304) {
      if (!e)
        return (
          logForDebugging("Policy limits: 304 to an unconditional request"),
          {
            success: !1,
            error: "Unexpected 304 Not Modified",
            errorCode: "request_failed",
            httpStatus: d.status,
            skipRetry: !0,
          }
        );
      return (
        logForDebugging("Policy limits: Using cached restrictions (304)"),
        { success: !0, response: null, etag: e, signature: extractSignatureHeader(d.headers) }
      );
    }
    let p = projectPolicyLimitsBody(d.data);
    if (!p.success) {
      let h = Ie(p.error.issues[0]?.path[0]),
        _ = (d.headers["content-type"] ?? "").toString().toLowerCase(),
        L = Oe.find(([T]) => _.includes(T))?.[1] ?? "other";
      return (
        logForDebugging(
          `Policy limits: Invalid response format - field=${h} ct=${L} - ${p.error.message}`,
        ),
        {
          success: !1,
          error: "Invalid policy limits format",
          errorCode: "parse_failed",
          parseErrorField: h,
          parseErrorContentType: L,
        }
      );
    }
    let m = countLossyComplianceTaints(d.data);
    if (m > 0)
      return (
        logForDebugging(
          `Policy limits: Fetched with ${m} malformed compliance_taints element(s) dropped`,
        ),
        {
          success: !0,
          response: p.data,
          parseErrorField: "compliance_taints",
          lossyComplianceTaints: !0,
          signature: extractSignatureHeader(d.headers),
        }
      );
    return (
      logForDebugging("Policy limits: Fetched successfully"),
      { success: !0, response: p.data, signature: extractSignatureHeader(d.headers) }
    );
  } catch (o) {
    let { kind: s, status: a, message: d } = Ps(o),
      p = extractServerErrorFields(o);
    switch (
      (logForDebugging(
        `Policy limits: fetch failed (${s}${a ? ` ${a}` : ""}) from ${V()} \u2014 ${d}`,
      ),
      s)
    ) {
      case "auth":
        return {
          success: !1,
          error: "Not authorized for policy limits",
          errorCode: "auth_failed",
          httpStatus: a,
          tokenRefreshOutcome: r,
          skipRetry: !0,
          ...p,
        };
      case "timeout":
        return {
          success: !1,
          error: "Policy limits request timeout",
          errorCode: "timeout",
        };
      case "network":
        return {
          success: !1,
          error: "Cannot connect to server",
          errorCode: "network_error",
        };
      default:
        return {
          success: !1,
          error: d,
          errorCode: "request_failed",
          httpStatus: a,
          skipRetry: a === 404,
          ...p,
        };
    }
  }
}
async function fetchPolicyLimitsForBearer(e, { timeoutMs: t = K } = {}) {
  if (getAPIProvider() !== "firstParty" || !isActualFirstPartyAnthropicBaseUrl()) return null;
  try {
    let r = await at.get(ue(), {
        headers: {
          Authorization: `Bearer ${e}`,
          "anthropic-beta": OAUTH_BETA_HEADER,
          "User-Agent": getClientUserAgent(),
        },
        timeout: t,
      }),
      o = projectPolicyLimitsBody(r.data);
    if (!o.success)
      return (
        logForDebugging(
          `Policy limits (bearer read): invalid response format \u2014 ${o.error.message}`,
        ),
        null
      );
    return o.data;
  } catch (r) {
    let { kind: o, status: s, message: a } = Ps(r);
    return (
      logForDebugging(
        `Policy limits (bearer read): fetch failed (${o}${s ? ` ${s}` : ""}) \u2014 ${a}`,
      ),
      null
    );
  }
}
function Ie(e) {
  if (e === void 0) return "root";
  return e === "restrictions" || e === "compliance_taints" || e === "defaults"
    ? e
    : "other";
}
var Oe = [
  ["text/html", "html"],
  ["application/json", "json"],
  ["text/json", "json"],
  ["text/", "text"],
];
function le() {
  return {
    has_custom_base_url: !isActualFirstPartyAnthropicBaseUrl(),
    has_auth_token: Boolean(effectiveAuthTokenEnv()),
    has_api_key_helper: Boolean(getConfiguredApiKeyHelper()),
    api_key_prefix: fromEnum(getApiKeyPrefixBucket()),
  };
}
function extractServerErrorFields(e) {
  let t = e?.response?.data?.error;
  if (!t || typeof t !== "object") return {};
  let r = typeof t.type === "string" ? t.type : void 0,
    o =
      typeof t.error_code === "string"
        ? t.error_code
        : typeof t.code === "string"
          ? t.code
          : void 0;
  return {
    serverErrorType: r === void 0 ? void 0 : POLICY_SERVER_ERROR_TYPES.includes(r) ? r : "other",
    serverErrorCode: o === void 0 ? void 0 : POLICY_SERVER_ERROR_CODES.includes(o) ? o : "other",
  };
}
var be = [
  "EACCES",
  "EPERM",
  "EROFS",
  "ENOSPC",
  "EDQUOT",
  "ENOENT",
  "ENOTDIR",
  "EISDIR",
  "EMFILE",
  "ENFILE",
  "EBUSY",
];
function pe(e) {
  return e !== void 0 && be.includes(e) ? e : "other";
}
function ce(e) {
  return pe(A(e));
}
function Fe(e) {
  let t = "telemetryCode" in e ? e.telemetryCode : void 0;
  return pe(t === "UnexpectedAbsent" || t === ABSENT_PARENT_TELEMETRY_CODE ? "ENOENT" : t);
}
function D() {
  return STORAGE_KEYS.state("policy-limits");
}
var de = 1048576;
async function primePolicyLimitsCache(e) {
  if (!isHoverRestEnabled() || e === void 0 || !isPolicyLimitsEligible()) return;
  try {
    let t = await e.read([{ key: D(), offset: 0, length: de + 1 }]);
    if (!t.ok) {
      logForDebugging(
        `Policy limits: prime read failed: ${t.error.code}; raw cache read stays`,
      );
      return;
    }
    let r = t.value.items[0];
    if (!r.found) {
      seedSessionCacheFromPrime(e, null);
      return;
    }
    if (r.totalBytes > de) {
      logForDebugging("Policy limits: prime skipped (oversize cache); raw cache read stays");
      return;
    }
    seedSessionCacheFromPrime(e, parseCachedResponse(Buffer.from(r.value).toString("utf-8")));
  } catch (t) {
    logForDebugging(`Policy limits: prime failed: ${l(t)}`);
  }
}
class PolicyLimitsClient {
  storageV5;
  credentials;
  used = !1;
  constructor(e = {}) {
    ((this.storageV5 = e.storageV5), (this.credentials = e.credentials));
  }
  adoptStartupServices(e) {
    if (e.storageV5 === void 0 && e.credentials === void 0)
      return "nothing to adopt";
    if (this.storageV5 !== void 0 || this.credentials !== void 0)
      return "already composed";
    if (this.used) return "already used";
    return (
      (this.storageV5 = e.storageV5),
      (this.credentials = e.credentials),
      "adopted"
    );
  }
  poller = null;
  cleanupRegistered = !1;
  loadingCompletePromise = null;
  loadingCompleteResolve = null;
  loadingTimeoutId = null;
  firstPromptStateLogged = !1;
  cacheWriteFailureLogged = !1;
  sessionGeneration = 0;
  serverConfirmedGeneration = -1;
  signedCacheShadowChecked = !1;
  cacheClearEpoch = 0;
  startupLoadState = "not_started";
  startupLoadClaimed = !1;
  startupLoadErrorCode;
  startupAwaitResult = "not_awaited";
  recordStartupAwaitResult(e) {
    this.startupAwaitResult = e;
  }
  stop() {
    if (
      (this.sessionGeneration++,
      suppressDiskAdoption(),
      this.stopBackgroundPolling(),
      setSessionCache(null),
      setLastFetchOutcome(null),
      detachPolicyLimitsBackend(),
      this.loadingCompleteResolve?.(),
      (this.loadingCompletePromise = null),
      (this.loadingCompleteResolve = null),
      this.loadingTimeoutId !== null)
    )
      (clearTimeout(this.loadingTimeoutId), (this.loadingTimeoutId = null));
  }
  initializeLoadingPromise() {
    if (this.loadingCompletePromise) return;
    if (isPolicyLimitsEligible())
      this.loadingCompletePromise = new Promise((e) => {
        ((this.loadingCompleteResolve = e),
          (this.loadingTimeoutId = setTimeout(
            (t) => {
              if (this.loadingCompleteResolve === t)
                (logForDebugging(
                  "Policy limits: Loading promise timed out, resolving anyway",
                ),
                  this.loadingCompleteResolve(),
                  (this.loadingCompleteResolve = null));
            },
            Le,
            e,
          )));
      });
  }
  async waitForLoad() {
    if (this.loadingCompletePromise) await this.loadingCompletePromise;
  }
  async saveCachedResponse(e, t, r) {
    if (this.sessionGeneration !== t)
      return (
        logForDebugging(
          "Policy limits: skipped saving a fetch that outlived the account session",
        ),
        "stale"
      );
    if (isHoverRestEnabled() && this.storageV5 !== void 0) {
      let o, s;
      try {
        let a = await this.storageV5.write(D(), jsonStringify(serverBodyOf(e), null, 2), {
          publishDiscipline: "inPlace",
          mode: 384,
        });
        if (a.ok)
          return (
            logForDebugging(`Policy limits: Saved to ${getCachePath()}`),
            await writeSignatureSidecar(getCachePath(), r),
            "saved"
          );
        ((o = describeStorageError(a.error)), (s = Fe(a.error)));
      } catch (a) {
        ((o = l(a)), (s = ce(a)));
      }
      return (this.recordCacheWriteFailure(o, s), "failed");
    }
    try {
      let o = getCachePath();
      return (
        await writeFile(o, jsonStringify(serverBodyOf(e), null, 2), { encoding: "utf-8", mode: 384 }),
        logForDebugging(`Policy limits: Saved to ${o}`),
        await writeSignatureSidecar(o, r),
        "saved"
      );
    } catch (o) {
      return (
        this.recordCacheWriteFailure(
          o instanceof Error ? o.message : "unknown error",
          ce(o),
        ),
        "failed"
      );
    }
  }
  recordCacheWriteFailure(e, t) {
    if (
      (logForDebugging(`Policy limits: Failed to save - ${e}`), !this.cacheWriteFailureLogged)
    )
      ((this.cacheWriteFailureLogged = !0),
        logEvent("tengu_policy_limits_cache_write_failed", { errno: fromEnum(t) }));
  }
  async fetchAndLoad(e, t = !1) {
    this.used = !0;
    let r = e === "policy_limits_load" && !this.startupLoadClaimed;
    if (r) this.startupLoadClaimed = !0;
    if (!isPolicyLimitsEligible()) return null;
    if (r) this.startupLoadState = "in_flight";
    let o = isDiskAdoptionSuppressed() ? null : loadCachedResponse(),
      s = o === EMPTY_POLICY_LIMITS_RESPONSE ? null : o,
      a = getDiskAdoptionEpoch(),
      d = se();
    if (s && !getSessionCache()) setSessionCache(s);
    let p = s ? Re(s) : void 0,
      m = this.cacheClearEpoch;
    if (!this.signedCacheShadowChecked) {
      if (((this.signedCacheShadowChecked = !0), p !== void 0))
        runSignedCacheShadowCheck("policy-limits", getCachePath(), p, getStoredOauthAccountInfo);
    }
    let h = Te(),
      _ = Date.now(),
      L = getLastFetchOutcome(),
      T = () => {
        let C = getLastFetchOutcome();
        return C !== null && C.success && C !== L;
      },
      q = !1,
      k = (C) => {
        if (((q = !0), !C.success && T())) return;
        this.recordFetchOutcome(m, C);
      },
      X = () =>
        k({
          success: !1,
          errorCode: "request_failed",
          httpStatus: null,
          host: V(),
          retrying: !1,
        }),
      E = this.sessionGeneration;
    try {
      let C = V(),
        c = await Ae(p, this.credentials, (S) => {
          if (getLastFetchOutcome()?.success) return;
          this.recordFetchOutcome(m, {
            success: !1,
            host: C,
            httpStatus: S.httpStatus ?? null,
            errorCode: S.errorCode ?? "request_failed",
            retrying: !0,
          });
        });
      if (this.sessionGeneration !== E) {
        if (r && this.startupLoadState === "in_flight")
          ((this.startupLoadState = "failed"),
            (this.startupLoadErrorCode = "session_changed"));
        return (
          logForDebugging(
            "Policy limits: Discarding a fetch that outlived the account session",
          ),
          getSessionCache()
        );
      }
      if (getDiskAdoptionEpoch() !== a)
        (logForDebugging(
          "Policy limits: the disk snapshot predates an account-boundary hold; not installable",
        ),
          (s = null));
      let I = c.success && c.response === null && !s,
        O = c.success && !I,
        U = I ? "spurious_304" : (c.errorCode ?? "request_failed"),
        Q = O ? void 0 : U;
      if (r)
        ((this.startupLoadState = O ? "succeeded" : "failed"),
          (this.startupLoadErrorCode = Q));
      let J = Date.now();
      if (
        (logEvent("tengu_policy_limits_fetch", {
          duration_ms: J - _,
          ms_since_startup: J - ne,
          success: O,
          had_cache: s !== null,
          cache_age_ms: d,
          attempts: c.attempts,
          is_load: e === "policy_limits_load",
          awaited: t,
          auth_type: fromEnum(h),
          error_code: fromEnumOpt(Q),
          token_source: fromEnum(getAuthTokenSource().source),
          ...le(),
          auth_unavailable_reason: fromEnumOpt(c.authUnavailableReason),
          token_refresh_outcome:
            h === "oauth" ? fromEnumOpt(c.tokenRefreshOutcome) : void 0,
          http_status: c.httpStatus,
          parse_error_field: fromEnumOpt(c.parseErrorField),
          parse_error_content_type: fromEnumOpt(c.parseErrorContentType),
          server_error_type: fromEnumOpt(c.serverErrorType),
          server_error_code: fromEnumOpt(c.serverErrorCode),
        }),
        !O)
      ) {
        k({
          success: !1,
          host: C,
          httpStatus: c.httpStatus ?? null,
          errorCode: U,
          retrying: !1,
        });
        let S = this.staleFallbackSource();
        if (S) {
          logForDebugging(
            I
              ? "Policy limits: 304 with no outstanding ETag \u2014 using stale cache"
              : "Policy limits: Using stale cache after fetch failure",
          );
          let R = ae(S);
          return (setSessionCache(R), logFeatureSad(e, I ? "spurious_304" : "stale_cache_used"), R);
        }
        if (
          (c.httpStatus === 404 || c.httpStatus === 304) &&
          getSessionCache() === null &&
          !getFeatureValue_CACHED_MAY_BE_STALE("tengu_rustling_orbit", !1)
        )
          return (
            logForDebugging(
              `Policy limits: ${c.httpStatus} with no cache, no restrictions for this session (not persisted)`,
            ),
            setSessionCache(EMPTY_POLICY_LIMITS_RESPONSE),
            (this.serverConfirmedGeneration = E),
            logFeatureSad(
              e,
              c.httpStatus === 404
                ? "route_missing_fail_open"
                : "unsolicited_304_fail_open",
            ),
            EMPTY_POLICY_LIMITS_RESPONSE
          );
        return (logFeatureBad(e, U), null);
      }
      let F = c.response;
      if (F === null || F === void 0) {
        if (!s) return (X(), logFeatureBad(e, "unexpected_error"), null);
        logForDebugging("Policy limits: Cache still valid (304 Not Modified)");
        let S = s,
          R = s.compliance_taints,
          te =
            this.serverConfirmedGeneration === E
              ? (getSessionCache()?.compliance_taints ?? [])
              : [];
        if (te.some((w) => !R.includes(w)) && countLossyComplianceTaints(serverBodyOf(s)) > 0)
          ((S = { ...s, compliance_taints: dedupe([...te, ...R]).slice(0, MAX_COMPLIANCE_TAINTS) }),
            logForDebugging(
              "Policy limits: lossy cached compliance_taints \u2014 kept the session taint set",
            ));
        (setSessionCache(S),
          (this.serverConfirmedGeneration = E),
          k({ success: !0, host: C }));
        try {
          if (isHoverRestEnabled() && this.storageV5 !== void 0) {
            if ((await this.storageV5.touch(D())).ok)
              (await writeSignatureSidecar(getCachePath(), c.signature),
                await pruneStaleSignatureSidecars(getCachePath(), this.cacheClearEpoch !== m));
          } else {
            let w = new Date();
            (await utimes(getCachePath(), w, w),
              await writeSignatureSidecar(getCachePath(), c.signature),
              await pruneStaleSignatureSidecars(getCachePath(), this.cacheClearEpoch !== m));
          }
        } catch {}
        return (logFeatureOk(e), S);
      }
      let P = F;
      if (c.lossyComplianceTaints) {
        let S = [
          ...(getSessionCache()?.compliance_taints ?? []),
          ...(s?.compliance_taints ?? []),
        ];
        if (S.length > 0)
          ((P = {
            ...P,
            compliance_taints: dedupe([...P.compliance_taints, ...S]).slice(0, MAX_COMPLIANCE_TAINTS),
          }),
            logForDebugging(
              "Policy limits: lossy compliance_taints \u2014 kept the known taint set",
            ));
      }
      (setSessionCache(P),
        (this.serverConfirmedGeneration = E),
        k({ success: !0, host: C }));
      let me = getDiskAdoptionEpoch(),
        ee = await this.saveCachedResponse(
          P,
          E,
          P === F ? c.signature : void 0,
        );
      if (this.sessionGeneration !== E) {
        if (ee !== "stale") {
          let S = await this.deleteCacheFile();
          if ((suppressDiskAdoption(), !S))
            logForDebugging(
              "Policy limits: could not remove a dead fetch's cache write; disk adoption suppressed until the next save",
            );
        }
        return (this.dropUnconfirmedSessionCache(), getSessionCache());
      }
      if (ee === "saved" && getDiskAdoptionEpoch() === me) liftDiskAdoptionSuppression();
      if (
        (logForDebugging(
          Object.keys(P.restrictions).length > 0
            ? "Policy limits: Applied new restrictions successfully"
            : "Policy limits: No restrictions (cached empty)",
        ),
        c.lossyComplianceTaints)
      )
        logFeatureSad(e, "lossy_compliance_taints");
      else logFeatureOk(e);
      return P;
    } catch {
      let C = this.sessionGeneration !== E;
      if (r && this.startupLoadState === "in_flight")
        ((this.startupLoadState = "failed"),
          (this.startupLoadErrorCode = C
            ? "session_changed"
            : "unexpected_error"));
      if (C) return getSessionCache();
      if (!q) X();
      let c = this.staleFallbackSource();
      if (c) {
        logForDebugging("Policy limits: Using stale cache after error");
        let x = ae(c);
        return (setSessionCache(x), logFeatureSad(e, "stale_cache_used"), x);
      }
      return (logFeatureBad(e, "unexpected_error"), null);
    }
  }
  logCacheStateAtFirstPrompt() {
    if (this.firstPromptStateLogged) return;
    this.firstPromptStateLogged = !0;
    let e = getPolicyLimitsIneligibleReason(),
      t = e === void 0,
      r = e === "custom_base_url" ? getPolicyLimitsIneligibleReason({ skipBaseUrlCheck: !0 }) === void 0 : t,
      o = getResponseFromCache() !== null,
      s = t ? se() : void 0,
      a = this.startupLoadState,
      d = this.startupAwaitResult,
      p = this.startupLoadErrorCode,
      m = fromEnum(getErrorReportingPolicyState());
    logEvent("tengu_policy_limits_cache_state_at_first_prompt", {
      eligible: t,
      ineligible_reason: fromEnumOpt(e),
      eligible_if_base_url_gate_removed: r,
      has_cache: o,
      cache_age_ms: s,
      would_fail_closed: t && (!o || (s ?? 1 / 0) > FAIL_CLOSED_SHADOW_CACHE_TTL_MS),
      token_source: fromEnum(getAuthTokenSource().source),
      ...le(),
      ms_since_startup: Date.now() - ne,
      load_state: fromEnum(a),
      startup_fetch_error_code: fromEnumOpt(p),
      startup_await_result: fromEnum(d),
      error_reporting_gate: m,
    });
  }
  async load({ startupAwaited: e = !1 } = {}) {
    if (((this.used = !0), isPolicyLimitsEligible() && !this.loadingCompletePromise))
      this.loadingCompletePromise = new Promise((r) => {
        this.loadingCompleteResolve = r;
      });
    let t = this.loadingCompleteResolve;
    try {
      if ((await this.fetchAndLoad("policy_limits_load", e), isPolicyLimitsEligible()))
        this.startBackgroundPolling();
    } finally {
      if (t) {
        if ((t(), this.loadingCompleteResolve === t)) {
          if (((this.loadingCompleteResolve = null), this.loadingTimeoutId))
            (clearTimeout(this.loadingTimeoutId),
              (this.loadingTimeoutId = null));
        }
      }
    }
  }
  async refresh() {
    if (((this.used = !0), this.stop(), this.initializeLoadingPromise(), !isPolicyLimitsEligible()))
      return;
    if (!(await this.deleteCacheFile()))
      logForDebugging(
        "Policy limits: could not remove the previous account's cache; disk adoption stays suppressed",
      );
    (this.dropUnconfirmedSessionCache(),
      await this.load(),
      logForDebugging("Policy limits: Refreshed after auth change"));
  }
  async clearCache() {
    if (((this.used = !0), this.stop(), !(await this.deleteCacheFile())))
      logForDebugging(
        "Policy limits: could not remove the previous account's cache; disk adoption stays suppressed",
      );
    this.dropUnconfirmedSessionCache();
  }
  recordFetchOutcome(e, t) {
    if (this.cacheClearEpoch === e) setLastFetchOutcome(t);
  }
  staleFallbackSource() {
    if (isDiskAdoptionSuppressed()) return getSessionCache();
    return loadCachedResponse() ?? getSessionCache();
  }
  dropUnconfirmedSessionCache() {
    if (
      getSessionCache() !== null &&
      this.serverConfirmedGeneration !== this.sessionGeneration
    )
      setSessionCache(null);
  }
  async deleteCacheFile() {
    if (
      (this.cacheClearEpoch++,
      await deleteSignatureSidecars(getCachePath()),
      isHoverRestEnabled() && this.storageV5 !== void 0)
    )
      try {
        await this.storageV5.delete(D());
      } catch {}
    try {
      return (await unlink(getCachePath()), !0);
    } catch (e) {
      return W(e);
    }
  }
  async poll() {
    if (!isPolicyLimitsEligible()) return;
    let e = getSessionCache(),
      t = e ? jsonStringify(e) : null;
    try {
      await this.fetchAndLoad("policy_limits_poll");
      let r = getSessionCache();
      if ((r ? jsonStringify(r) : null) !== t)
        logForDebugging("Policy limits: Changed during background poll");
    } catch {}
  }
  startBackgroundPolling() {
    if (((this.used = !0), this.poller !== null)) return;
    if (!isPolicyLimitsEligible()) return;
    if (
      ((this.poller = createIntervalPoller(() => void this.poll(), Ee, { unref: !0 })),
      !this.cleanupRegistered)
    )
      ((this.cleanupRegistered = !0), registerCleanup(() => this.stopBackgroundPolling()));
  }
  stopBackgroundPolling() {
    (this.poller?.[Symbol.dispose](), (this.poller = null));
  }
}
class DefaultPolicyLimitsClientSlot {
  client = void 0;
}
var defaultPolicyLimitsClientSlots = new j(() => new DefaultPolicyLimitsClientSlot());
function z() {
  return defaultPolicyLimitsClientSlots.of(B().host);
}
function v() {
  let e = z();
  return ((e.client ??= new PolicyLimitsClient()), e.client);
}
function composePolicyLimitsClient(e) {
  let t = z();
  if (t.client === void 0) {
    t.client = new PolicyLimitsClient(e);
    return;
  }
  let r = t.client.adoptStartupServices(e);
  switch (r) {
    case "nothing to adopt":
      logForDebugging(
        "Policy limits: default client already constructed; start-up composition skipped",
      );
      return;
    case "already used":
      (logForDebugging(
        "Policy limits: start-up composition came after the bare default client was used; it keeps running without the backend and credentials store",
        { level: "warn" },
      ),
        logEvent("tengu_policy_limits_late_composition", {}));
      return;
    case "already composed":
      logForDebugging(
        "Policy limits: default client already composed; later start-up composition skipped",
      );
      return;
    case "adopted":
      logForDebugging("Policy limits: start-up services adopted by the default client");
      return;
    default:
  }
}
function recordPolicyLimitsStartupAwaitResult(e) {
  v().recordStartupAwaitResult(e);
}
function _getDefaultPolicyLimitsClientForTesting() {
  return v();
}
function _resetPolicyLimitsForTesting() {
  (v().stop(), liftDiskAdoptionSuppression(), (z().client = void 0));
}
function initializePolicyLimitsLoadingPromise() {
  v().initializeLoadingPromise();
}
function waitForPolicyLimitsToLoad() {
  return v().waitForLoad();
}
function logPolicyLimitsCacheStateAtFirstPrompt() {
  v().logCacheStateAtFirstPrompt();
}
function loadPolicyLimits(e = {}) {
  return v().load(e);
}
function refreshPolicyLimits() {
  return v().refresh();
}
function clearPolicyLimitsCache() {
  return v().clearCache();
}
function startBackgroundPolling() {
  v().startBackgroundPolling();
}
function stopBackgroundPolling() {
  v().stopBackgroundPolling();
}
export {
  createIntervalPoller,
  runSignedCacheShadowCheck,
  POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS,
  POLICY_LIMITS_COLD_AWAIT_MS,
  FAIL_CLOSED_SHADOW_CACHE_TTL_MS,
  shouldAwaitPolicyLimitsOnStartup,
  fetchPolicyLimitsForBearer,
  extractServerErrorFields,
  primePolicyLimitsCache,
  PolicyLimitsClient,
  DefaultPolicyLimitsClientSlot,
  defaultPolicyLimitsClientSlots,
  composePolicyLimitsClient,
  recordPolicyLimitsStartupAwaitResult,
  _getDefaultPolicyLimitsClientForTesting,
  _resetPolicyLimitsForTesting,
  initializePolicyLimitsLoadingPromise,
  waitForPolicyLimitsToLoad,
  logPolicyLimitsCacheStateAtFirstPrompt,
  loadPolicyLimits,
  refreshPolicyLimits,
  clearPolicyLimitsCache,
  startBackgroundPolling,
  stopBackgroundPolling,
};
