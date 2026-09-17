// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, ld, ns, fv } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../共享小工具-未细化/chunk-h62vxw7j.js";
import { sleep, withTimeout, withDeadline } from "../共享小工具-未细化/async-timeout-utils.js";
import { getInkInstanceRegistry } from "../共享小工具-未细化/ink-instance-registry.js";
import { Dte, Pr, $s, kl, i5n } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { be } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import { createLazyValue } from "../共享小工具-未细化/lazy-value.js";
import { OAUTH_BETA_HEADER, getOauthConfig } from "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { lit as S } from "../共享小工具-未细化/analytics-fields.js";
import { l, W, Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { We, Et, b, z, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../共享小工具-未细化/analytics-event-queue.js";
import {
  pRe,
  fRn,
  fRe,
  OUe,
  mRe,
  evt,
  DUe,
  gRe,
  C6,
  isProfileRemoteSettingsCredential,
  getAnthropicApiKeyWithSourceSafe,
  getAnthropicApiKeyWithSource,
  getClaudeAIOAuthTokens,
  getClaudeAIOAuthTokenOriginAsync,
  handleOAuth401Error,
  checkAndRefreshOAuthTokenIfNeeded,
  isClaudeAISubscriber,
  getStoredOauthAccountInfo,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { O_NOFOLLOW_NONBLOCK_FLAGS } from "../共享小工具-未细化/open-flags.js";
import { qt } from "../共享小工具-未细化/chunk-km6n9zrg.js";
import { Ce } from "../../02-功能模块/Teammates团队/chunk-qe04h4c5.js";
import {
  Za,
  bke,
  jU,
  j5,
  YRt,
  _lr,
  HELPER_CONSENT_STATE_ID,
  getHelperConsentPath,
  helperConsentDigest,
  stripReservedKeys,
  getSyncCacheResetEpoch,
  getRemoteManagedSettingsConsentedBaseline,
  markRemoteManagedSettingsConsented,
  setSessionCache,
  isRemoteManagedSettingsVerified,
  markPolicySettingsNotified,
  getIneligibleReason,
  setLastLoadStatus,
  getRemoteSettingsPathOverride,
  isEvalPolicySnapshotOnly,
  getSettingsPath,
  getMockRemoteSettingsValue,
  getMockRemoteSettingsFixturePath,
  remoteSettingsFileWritten,
  unverifiedRemoteCacheWithholdsProvisions,
  getRemoteManagedSettingsRawCache,
  getRemoteManagedSettingsSyncFromCache,
  Tke,
  Bq,
  t2e,
} from "./设置-配置.aqbb35ee.js";
import { Uhe } from "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import { U5t, Tar } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { vvt, mir, gir } from "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
import { commitExit } from "../共享小工具-未细化/exit-commit-state.js";
import { mJn } from "../遥测-OpenTelemetry/chunk-5qbcynds.js";
import { nU, Cve, lse, KJe, XJe } from "../核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import { Fy } from "../../02-功能模块/会话-历史-恢复/chunk-m1xj4s02.js";
import { I4t, P4t } from "../../02-功能模块/策略限制(PolicyLimits)/chunk-hpw6352m.js";
import { matchesOAuthBaseUrlHost, resetRemoteSettingsSyncCache, isRemoteSettingsEligible, hasTeamOrEnterpriseSubscription } from "../共享小工具-未细化/remote-settings-eligibility.js";
import { s, T, se, c, fe, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getClientUserAgent } from "../共享小工具-未细化/user-agent.js";
var Te = 5000;
class Q {
  updates = new Fy();
  owner;
  constructor(e) {
    this.owner = e;
  }
  supersede(e, t, o) {
    let r = this.owner;
    ((this.owner = o),
      this.updates.enqueue({ settings: e, baseline: t }),
      r("superseded"));
  }
  settle(e) {
    (this.updates.done(), this.owner(e));
  }
}
class ee {
  replRequester = null;
  requesterWaiters = [];
  noConsentSurface = !1;
  pendingReview = null;
  registerRequester(e) {
    if (((this.replRequester = e), e && this.requesterWaiters.length > 0)) {
      let t = this.requesterWaiters;
      this.requesterWaiters = [];
      for (let o of t) o(e);
    }
  }
  addWaiter(e) {
    this.requesterWaiters.push(e);
  }
  dropWaiter(e) {
    this.requesterWaiters = this.requesterWaiters.filter((t) => t !== e);
  }
  review(e, t, o) {
    return new Promise((r) => {
      if (this.pendingReview) {
        this.pendingReview.supersede(t, o, r);
        return;
      }
      let a = new Q(r);
      ((this.pendingReview = a),
        logEvent("tengu_managed_settings_security_dialog_shown", {}));
      let u;
      try {
        u = e(t, o, a.updates);
      } catch {
        u = Promise.resolve("deferred_no_consent_surface");
      }
      u.then(
        (p) => this.close(a, p),
        () => this.close(a, "deferred_no_consent_surface"),
      );
    });
  }
  close(e, t) {
    if (((this.pendingReview = null), t === "approved"))
      (logEvent("tengu_managed_settings_security_dialog_accepted", {}),
        logFeatureOk("remote_managed_settings_security_check"));
    else if (t === "rejected")
      logEvent("tengu_managed_settings_security_dialog_rejected", {});
    e.settle(t);
  }
  startupConsentRelease = null;
  fireStartupConsentRelease() {
    let e = this.startupConsentRelease;
    if (e) ((this.startupConsentRelease = null), e());
  }
  consentNeededRelease = null;
  async fireConsentNeededRelease() {
    let e = this.consentNeededRelease;
    if (e) ((this.consentNeededRelease = null), await e());
  }
  consentHandoffHolds = new Set();
  consentHandoffSignal = Le();
  consentHandoffRevealActive = !1;
}
var Ae = new j(() => new ee());
function F() {
  return Ae.of(B().host);
}
function te() {
  return getInkInstanceRegistry().pendingStandaloneRender !== null;
}
function Enn(e) {
  F().registerRequester(e);
}
function ne(e) {
  let t = F();
  return (
    (t.startupConsentRelease = e),
    () => {
      if (t.startupConsentRelease === e) t.startupConsentRelease = null;
    }
  );
}
function Ann() {
  let e = F(),
    t = Symbol("consent-handoff-hold");
  if ((e.consentHandoffHolds.add(t), e.consentHandoffHolds.size === 1))
    e.consentHandoffSignal.emit();
  return () => {
    if (e.consentHandoffHolds.delete(t) && e.consentHandoffHolds.size === 0)
      e.consentHandoffSignal.emit();
  };
}
function glt() {
  return F().consentHandoffHolds.size > 0;
}
function Cnn() {
  return F().consentHandoffRevealActive;
}
function VBn(e) {
  return F().consentHandoffSignal.subscribe(e);
}
function KBn(e) {
  let t = F();
  return (
    (t.consentNeededRelease = e),
    () => {
      if (t.consentNeededRelease === e) t.consentNeededRelease = null;
    }
  );
}
function XBn() {
  F().noConsentSurface = !0;
}
function re() {
  return F().noConsentSurface;
}
async function X() {
  let e = F(),
    t,
    o = new Promise((a) => {
      ((t = a), e.addWaiter(a));
    }),
    r = await withTimeout(
      o,
      Te,
      "managed-settings security dialog requester wait timed out",
    ).catch(() => null);
  if (r === null) e.dropWaiter(t);
  return r;
}
async function oe(e, t, o) {
  if (!t || !j5(jU(t))) return "no_check_needed";
  if (!_lr(e, t)) return "no_check_needed";
  if (!ld()) return "deferred_non_interactive";
  let r = e.source === "consented_payload" ? e.settings : e.consentedPayload,
    a = F();
  if (a.replRequester)
    if (a.consentNeededRelease) {
      let w = null;
      try {
        ((w = Ann()), await a.fireConsentNeededRelease());
        let _ = a.replRequester;
        if (_)
          return ((a.consentHandoffRevealActive = !0), await a.review(_, t, r));
        if (getInkInstanceRegistry().has(process.stdout)) {
          let v = await X();
          if (v)
            return (
              (a.consentHandoffRevealActive = !0),
              await a.review(v, t, r)
            );
        }
        return "deferred_no_consent_surface";
      } finally {
        ((a.consentHandoffRevealActive = !1), w?.());
      }
    } else return a.review(a.replRequester, t, r);
  if (a.noConsentSurface) return "deferred_no_consent_surface";
  let u = getInkInstanceRegistry();
  if (u.has(process.stdout)) {
    a.fireStartupConsentRelease();
    let w = await X();
    if (w) return a.review(w, t, r);
  }
  if (o === void 0 || a.noConsentSurface) return "deferred_no_consent_surface";
  logEvent("tengu_managed_settings_security_dialog_shown", {});
  let p = u.has(process.stdout),
    d = o(t, p, r);
  if (!p) u.claimForStandaloneRender(d);
  let R;
  try {
    R = await d;
  } catch (w) {
    throw (
      logFeatureBad("remote_managed_settings_security_check", "dialog_unavailable"),
      w
    );
  }
  if (
    (logEvent(
      R === "approved"
        ? "tengu_managed_settings_security_dialog_accepted"
        : "tengu_managed_settings_security_dialog_rejected",
      {},
    ),
    R === "approved")
  )
    logFeatureOk("remote_managed_settings_security_check");
  return R;
}
var Oe = "Managed settings were not approved; exiting without applying them.";
function ie(e) {
  switch (e) {
    case "rejected":
      if (process.stderr.isTTY && !$s()) (commitExit(), Dte(Oe));
      return (Pr(1), !1);
    case "deferred_no_consent_surface":
      return !1;
    case "superseded":
      return !1;
    case "approved":
    case "no_check_needed":
    case "deferred_non_interactive":
      return !0;
  }
}
import { createHash } from "crypto";
import {
  open as Ke,
  readFile,
  rm as Je,
  unlink,
  writeFile,
} from "fs/promises";
import { join as xe } from "path";
var He = "remote-settings-consent.json",
  ce = "remote-settings-consent",
  L = 1,
  De = 20,
  Ne = 86400000,
  I = 1048576,
  Ue = createLazyValue(() =>
    c({ accountUuid: s(), dangerousSettingsHash: s(), updatedAt: T() }),
  ),
  Be = createLazyValue(() => c({ version: k(L), records: fe(s(), se()) })),
  ze = createLazyValue(() => c({ version: T().gt(L) }));
function de() {
  return xe(be(), He);
}
function x() {
  return { records: new Map(), newerVersion: !1, unreadable: !0 };
}
function ae() {
  return (
    n(
      `Remote settings: Consent records file exceeds ${I} bytes; treating it as unreadable`,
    ),
    x()
  );
}
async function ue(e) {
  let t;
  if (isHoverRestEnabled() && e !== void 0) {
    let o;
    try {
      o = await e.readText([{ key: Ce.state(ce), offset: 0, length: I + 1 }]);
    } catch (a) {
      return (n(`Remote settings: Consent records unreadable - ${l(a)}`), x());
    }
    if (!o.ok)
      return (
        n(`Remote settings: Consent records unreadable - ${We(o.error)}`),
        x()
      );
    let r = o.value.items[0];
    if (!r.found)
      return { records: new Map(), newerVersion: !1, unreadable: !1 };
    if (r.totalBytes > I) return ae();
    t = r.value;
  } else {
    let o = de();
    try {
      if (O_NOFOLLOW_NONBLOCK_FLAGS === 0) {
        let a = await qt().lstat(o);
        if (a !== void 0 && !a.isFile) return x();
      }
      let r = await qt().readTail(o, I + 1, { noFollow: !0 });
      if (r.length > I) return ae();
      t = r.toString("utf8");
    } catch (r) {
      return { records: new Map(), newerVersion: !1, unreadable: !W(r) };
    }
  }
  try {
    let o = z(t),
      r = Be().safeParse(o);
    if (!r.success)
      return {
        records: new Map(),
        newerVersion: ze().safeParse(o).success,
        unreadable: !1,
      };
    let a = new Map();
    for (let [u, p] of Object.entries(r.data.records)) {
      let d = Ue().safeParse(p);
      if (d.success) a.set(u, d.data);
    }
    return { records: a, newerVersion: !1, unreadable: !1 };
  } catch {
    return { records: new Map(), newerVersion: !1, unreadable: !1 };
  }
}
async function le(e, t) {
  let { records: o } = await ue(t),
    r = o.get(e.organizationUuid);
  if (!r || r.accountUuid !== e.accountUuid) return null;
  return r.dangerousSettingsHash;
}
async function ge(e, t, o) {
  try {
    let { records: r, newerVersion: a, unreadable: u } = await ue(o);
    if (a || u) {
      n(
        `Remote settings: Consent records file is ${a ? "from a newer version" : "unreadable"}; not overwriting it`,
      );
      return;
    }
    let p = jU(t),
      d = r.get(e.organizationUuid),
      R = d?.accountUuid === e.accountUuid,
      w = !j5(p);
    if (w && !(d && R)) return;
    let _ = w && d ? d.dangerousSettingsHash : YRt(p),
      v = Date.now();
    if (R && d.dangerousSettingsHash === _ && v - d.updatedAt < Ne) return;
    r.delete(e.organizationUuid);
    let P = [...r]
      .sort(([, C], [, U]) => U.updatedAt - C.updatedAt)
      .slice(0, De - 1);
    P.unshift([
      e.organizationUuid,
      { accountUuid: e.accountUuid, dangerousSettingsHash: _, updatedAt: v },
    ]);
    let E = b({ version: L, records: Object.fromEntries(P) });
    if (isHoverRestEnabled() && o !== void 0) {
      let C = await o.write(Ce.state(ce), E, { mode: 384 });
      if (!C.ok)
        n(`Remote settings: Failed to record org consent - ${We(C.error)}`);
      return;
    }
    await qt().atomicWrite(de(), E, 384);
  } catch (r) {
    n(`Remote settings: Failed to record org consent - ${l(r)}`);
  }
}
var me = createLazyValue(() => c({ uuid: s(), checksum: s(), settings: fe(s(), se()) }));
var Ve = 1e4,
  Ye = 5,
  Xe = 3600000,
  Qe = 30000;
class pe {
  poller = null;
  loadingCompletePromise = null;
  loadingCompleteResolve = null;
  fetchSettledPromise = null;
  fetchSettledResolve = null;
  signedCacheShadowChecked = !1;
  createBarrier(e) {
    ((this.fetchSettledPromise = new Promise((t) => {
      ((this.fetchSettledResolve = t), e?.(t));
    })),
      (this.loadingCompletePromise = new Promise((t) => {
        this.loadingCompleteResolve = t;
      })));
  }
  releaseLoadBarrier() {
    (this.loadingCompleteResolve?.(), (this.loadingCompleteResolve = null));
  }
  releaseBarrier() {
    (this.releaseLoadBarrier(),
      this.fetchSettledResolve?.(),
      (this.fetchSettledResolve = null));
  }
  detachBarrier() {
    let e = this.loadingCompleteResolve,
      t = this.fetchSettledResolve;
    if (
      ((this.loadingCompleteResolve = null),
      (this.loadingCompletePromise = null),
      (this.fetchSettledResolve = null),
      (this.fetchSettledPromise = null),
      !e && !t)
    )
      return null;
    return () => {
      (e?.(), t?.());
    };
  }
  startPoller(e) {
    this.poller = e;
  }
  stopPoller() {
    (this.poller?.[Symbol.dispose](), (this.poller = null));
  }
}
var Ze = new j(() => new pe());
function O() {
  return Ze.of(B().host);
}
function vnn() {
  ye();
  let e = O();
  if (e.loadingCompletePromise) return;
  if (isRemoteSettingsEligible())
    e.createBarrier((t) => {
      setTimeout(
        (o, r) => {
          if (r.fetchSettledResolve === o) {
            if (te()) {
              n(
                "Remote settings: Loading promise timeout deferred \u2014 consent dialog pending",
              );
              return;
            }
            (n(
              "Remote settings: Loading promise timed out, resolving anyway (load and fetch barriers)",
            ),
              r.releaseBarrier());
          }
        },
        Qe,
        t,
        e,
      );
    });
}
function et() {
  let e = ns();
  if (e) return `${e.url}/managed/settings`;
  return `${getOauthConfig().BASE_API_URL}/api/claude_code/settings`;
}
function K(e) {
  if (!e) return e;
  return Tke(e, "remote managed settings").settings ?? {};
}
function Se(e, t, o) {
  let r = stripReservedKeys(e),
    a = Tke(r, t),
    u = r;
  if (!a.settings && Object.keys(r).length > 0 && !tt(u))
    return (
      n(
        "Remote settings: Settings validation failed - no fields could be salvaged",
      ),
      {
        rejected: {
          success: !1,
          error: o,
          errorKind: "invalid_settings",
          skipRetry: !0,
        },
      }
    );
  if (a.errors.length > 0)
    n(
      `Remote settings: Payload contains ${a.errors.length} invalid entries; applying the salvaged subset`,
    );
  return { settings: r, salvagedSettings: nt(u, a) };
}
function tt(e) {
  let t = Object.keys(e);
  return t.length > 0 && t.every((o) => t2e.some((r) => r === o));
}
function Re(e, t) {
  let o = e;
  for (let r of t2e) if (r in t && !(r in o)) o = { ...o, [r]: t[r] };
  return o;
}
function nt(e, t) {
  let o = t.errors.length > 0 ? (t.settings ?? {}) : void 0;
  return o === void 0 ? void 0 : Re(o, e);
}
async function rt(e) {
  let t = getMockRemoteSettingsValue();
  if (t === void 0) return null;
  if (t === "fail")
    return {
      success: !1,
      error: "mocked fetch failure",
      errorKind: "unknown_error",
      skipRetry: !0,
    };
  if (t === "empty")
    return {
      success: !0,
      settings: {},
      checksum: void 0,
      consentIdentity: await V(e),
    };
  try {
    let o = getMockRemoteSettingsFixturePath(),
      r = o !== void 0 ? await readFile(o, "utf-8") : t,
      a = z(r);
    if (!a || typeof a !== "object" || Array.isArray(a))
      return {
        success: !1,
        error: "mock JSON parse failed",
        errorKind: "parse_error",
        skipRetry: !0,
      };
    let u = Se(a, "mock remote settings", "mock JSON parse failed");
    if ("rejected" in u) return u.rejected;
    return { success: !0, ...u, checksum: "mock", consentIdentity: await V(e) };
  } catch {
    return {
      success: !1,
      error: "mock JSON parse failed",
      errorKind: "parse_error",
      skipRetry: !0,
    };
  }
}
function Rnn() {
  return isRemoteSettingsEligible();
}
async function _ee() {
  let e = O();
  if (e.loadingCompletePromise) await e.loadingCompletePromise;
}
async function c3e() {
  let e = O();
  if (e.fetchSettledPromise) await e.fetchSettledPromise;
}
function fIe() {
  return isRemoteSettingsEligible() && !getRemoteManagedSettingsSyncFromCache();
}
function knn() {
  return !Uhe() && isRemoteSettingsEligible() && unverifiedRemoteCacheWithholdsProvisions();
}
function ye() {
  i5n(async () => {
    if (knn()) await c3e();
    else if (fIe()) await _ee();
  });
}
async function ot(e) {
  let t = ns();
  if (t) {
    let r = await ke(t, e);
    return {
      headers: { Authorization: `Bearer ${t.jwt}` },
      consentIdentity: ve(t, r),
      pinnedFingerprint: r,
    };
  }
  if (isClaudeAISubscriber() && hasTeamOrEnterpriseSubscription()) {
    let r = getClaudeAIOAuthTokens();
    if (r?.accessToken)
      return {
        headers: {
          Authorization: `Bearer ${r.accessToken}`,
          "anthropic-beta": OAUTH_BETA_HEADER,
        },
        accessToken: r.accessToken,
        consentIdentity: await G(e),
      };
  }
  try {
    let { key: r } = getAnthropicApiKeyWithSource({ skipRetrievingKeyFromApiKeyHelper: !0 });
    if (r) return { headers: { "x-api-key": r } };
  } catch {}
  if (isProfileRemoteSettingsCredential()) {
    if (mir())
      return (
        n(
          "Remote settings: the settings endpoint rejected the profile credential after a forced refresh; not fetching with it again until the next sign-in or restart",
        ),
        {
          headers: {},
          error:
            "Remote settings: the settings endpoint rejected the profile credential after a forced refresh; not fetching with it again until the next sign-in or restart",
          profileError: !0,
        }
      );
    try {
      let { getWIFCredentials: r, getWIFTokenCache: a } =
          await import("../../02-功能模块/认证-OAuth登录/chunk-x3rm9w4b.js"),
        [u, p] = await Promise.all([a(), r()]);
      if (u !== null) {
        if (!matchesOAuthBaseUrlHost(p?.baseURL)) {
          let R = `Remote settings: profile base URL ${p?.baseURL ?? "(unknown)"} is not the settings endpoint's host; not fetching with the profile credential`;
          return (n(R), { headers: {}, error: R, profileError: !0 });
        }
        let d = await u.getToken();
        return {
          headers: { ...p?.extraHeaders, Authorization: `Bearer ${d}` },
          accessToken: d,
          profileBearer: !0,
          consentIdentity: _e(),
        };
      }
    } catch (r) {
      let a = `Remote settings: profile credential unavailable: ${l(r)}`;
      n(a, { level: "error" });
      let { isWIFTransientExchangeError: u } =
        await import("../../02-功能模块/认证-OAuth登录/chunk-x3rm9w4b.js");
      return { headers: {}, error: a, profileError: !0, retryable: u(r) };
    }
  }
  let o = getClaudeAIOAuthTokens();
  if (o?.accessToken)
    return {
      headers: {
        Authorization: `Bearer ${o.accessToken}`,
        "anthropic-beta": OAUTH_BETA_HEADER,
      },
      accessToken: o.accessToken,
      consentIdentity: await G(e),
    };
  return { headers: {}, error: "No authentication available" };
}
async function G(e) {
  let t = getStoredOauthAccountInfo();
  if ((await getClaudeAIOAuthTokenOriginAsync(e)) !== "store") return;
  return t?.organizationUuid
    ? { organizationUuid: t.organizationUuid, accountUuid: t.accountUuid }
    : void 0;
}
function _e() {
  let e = vvt(),
    t = getStoredOauthAccountInfo();
  return e?.organizationUuid &&
    e.accountEmail &&
    t?.organizationUuid === e.organizationUuid &&
    t.emailAddress === e.accountEmail &&
    t.accountUuid
    ? { organizationUuid: e.organizationUuid, accountUuid: t.accountUuid }
    : void 0;
}
var we = "gateway:",
  st = 256;
function ve(e, t) {
  if (!fv(e) || !t || t === fRn) return;
  let o;
  try {
    o = new URL(e.url);
  } catch {
    return;
  }
  if (o.protocol !== "https:") return;
  let r = `${o.origin}${o.pathname === "/" ? "" : o.pathname}`,
    a = mJn(e) ?? "";
  return {
    organizationUuid: `${we}${r}#${t}`,
    accountUuid:
      a.length > st ? `sha256:${createHash("sha256").update(a).digest("hex")}` : a,
  };
}
async function ke(e, t) {
  return mRe(pRe(new URL(e.url)), t);
}
async function V(e) {
  let t = ns();
  if (t)
    return ve(
      t,
      await ke(t, e).catch(() => {
        return;
      }),
    );
  if (getAnthropicApiKeyWithSourceSafe({ skipRetrievingKeyFromApiKeyHelper: !0 }).key === null && isProfileRemoteSettingsCredential())
    return _e();
  return G(e);
}
async function J(e, t, o, r) {
  if (!e) return;
  let a = e.organizationUuid.startsWith(we) ? await V(r) : getStoredOauthAccountInfo();
  if (
    a?.organizationUuid !== e.organizationUuid ||
    a.accountUuid !== e.accountUuid
  ) {
    n(
      "Remote settings: consent identity no longer matches the fetch identity; not recording org consent",
    );
    return;
  }
  await ge(e, t, o);
}
function A(e) {
  if (getSyncCacheResetEpoch() === e) return !1;
  return (
    n(
      "Remote settings: Cache was reset (login/logout) during this fetch; discarding its result",
    ),
    logFeatureSad("remote_managed_settings_pull", "reset_during_fetch"),
    !0
  );
}
function H(e) {
  return e.httpStatus !== void 0
    ? `${e.errorKind}/${e.httpStatus}`
    : e.errorKind;
}
async function it(e, t = {}) {
  let o = await rt(t.credentials);
  if (o) return o;
  let r = null,
    a = (ns() && !t.background) || t.singleAttempt ? 0 : Ye;
  for (let u = 1; u <= a + 1; u++) {
    if (((r = await Pe(e, !1, t.credentials)), r.success)) return r;
    if (r.skipRetry) return r;
    if (u > a) return r;
    let p = nU(u);
    (n(
      `Remote settings: Retry ${u}/${a} after ${p}ms (${H({ errorKind: r.errorKind ?? "unknown_error", ...(r.httpStatus !== void 0 && { httpStatus: r.httpStatus }) })})`,
    ),
      await sleep(p));
  }
  return r;
}
async function Pe(e, t = !1, o) {
  let r,
    a = !1,
    u,
    p = (d) => (
      n(
        `Remote settings: Fetch attempt failed (${H({ errorKind: d.errorKind ?? "unknown_error", ...(d.httpStatus !== void 0 && { httpStatus: d.httpStatus }) })})`,
      ),
      d
    );
  try {
    (await checkAndRefreshOAuthTokenIfNeeded({ credentials: o }), await C6(o));
    let d = await ot(o);
    if (
      ((r = d.accessToken),
      (a = d.profileBearer === !0),
      (u = d.consentIdentity),
      d.error)
    )
      return p({
        success: !1,
        error: d.profileError
          ? d.error
          : "Authentication required for remote settings",
        errorKind: d.profileError
          ? "profile_credential_error"
          : "no_auth_available",
        skipRetry: !(d.profileError && d.retryable),
      });
    let R = et(),
      w = {
        ...d.headers,
        "User-Agent": getClientUserAgent(),
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      };
    if (e) w["If-None-Match"] = `"${e}"`;
    let _ = gRe(d.pinnedFingerprint, R),
      v = await at.get(R, {
        headers: w,
        timeout: Ve,
        ...(_ && { httpsAgent: _ }),
        validateStatus: (C) => C === 200 || C === 204 || C === 304 || C === 404,
      });
    if (v.status === 304) {
      if (!e)
        return (
          n("Remote settings: 304 to an unconditional request"),
          {
            success: !1,
            error: "Unexpected 304 Not Modified",
            errorKind: "unknown_error",
            httpStatus: 304,
            skipRetry: !0,
          }
        );
      return (
        n("Remote settings: Using cached settings (304)"),
        {
          success: !0,
          settings: null,
          checksum: e,
          signature: Cve(v.headers),
          consentIdentity: u,
        }
      );
    }
    if (v.status === 204 || v.status === 404)
      return (
        n(`Remote settings: No settings found (${v.status})`),
        { success: !0, settings: {}, checksum: void 0, consentIdentity: u }
      );
    let P = me().safeParse(v.data);
    if (!P.success)
      return (
        n(`Remote settings: Invalid response format - ${P.error.message}`),
        {
          success: !1,
          error: "Invalid remote settings format",
          errorKind: "parse_error",
          skipRetry: !0,
        }
      );
    let E = Se(
      P.data.settings,
      "remote managed settings",
      "Invalid settings structure",
    );
    if ("rejected" in E) return E.rejected;
    return (
      n("Remote settings: Fetched successfully"),
      {
        success: !0,
        ...E,
        checksum: P.data.checksum,
        signature: Cve(v.headers),
        consentIdentity: u,
      }
    );
  } catch (d) {
    let R = l(d?.cause);
    if (l(d).includes(fRe))
      return p({
        success: !1,
        error: "Cloud gateway TLS pin is in a symlinked credentials file",
        errorKind: "gateway_pin_refused",
        skipRetry: !0,
      });
    if (l(d).includes(OUe))
      return p({
        success: !1,
        error:
          "Cloud gateway TLS pin could not be read from the credentials file",
        errorKind: "gateway_pin_unreadable",
      });
    if (l(d).includes(evt) || R.includes(evt)) {
      let P = DUe(d);
      return p({
        success: !1,
        error: "Cloud gateway TLS certificate does not match stored pin",
        errorKind: "gateway_cert_mismatch",
        ...(P && { gatewayPinMismatch: P }),
        skipRetry: !0,
      });
    }
    let { kind: w, status: _, message: v } = Ps(d);
    if (_ === 404)
      return { success: !0, settings: {}, checksum: "", consentIdentity: u };
    switch (w) {
      case "auth": {
        let P = {
          success: !1,
          error: "Not authorized for remote settings",
          errorKind: _ === 401 ? "http_401" : "http_403",
          skipRetry: !0,
        };
        if (_ === 401 && r && !t) {
          let E;
          if (a) {
            let { getWIFTokenCache: C, invalidateWIFToken: U } =
              await import("../../02-功能模块/认证-OAuth登录/chunk-x3rm9w4b.js");
            (await U(r),
              (E = await C()
                .then((Me) => Me?.getToken())
                .catch(() => {
                  return;
                })));
          } else (await handleOAuth401Error(r, o), (E = getClaudeAIOAuthTokens()?.accessToken));
          if (E && E !== r)
            return (
              p(P),
              logEvent("tengu_remote_settings_401_force_refresh_retry", {}),
              Pe(e, !0, o)
            );
        }
        if (_ === 401 && a && t) gir(!0);
        return p(P);
      }
      case "timeout":
        return p({
          success: !1,
          error: "Remote settings request timeout",
          errorKind: "timeout",
        });
      case "network":
        return p({
          success: !1,
          error: "Cannot connect to server",
          errorKind: "network_error",
        });
      default:
        return p({
          success: !1,
          error: v,
          errorKind:
            _ !== void 0 && _ >= 500
              ? "http_5xx"
              : _ !== void 0 && _ >= 400
                ? "http_4xx"
                : "unknown_error",
          ...(_ !== void 0 && _ >= 400 && { httpStatus: _ }),
        });
    }
  }
}
async function he(e, t, o) {
  let r = b(e, null, 2),
    a = helperConsentDigest(e);
  if (isHoverRestEnabled() && t !== void 0 && !getRemoteSettingsPathOverride()) {
    let u = await t.write(Ce.state("remote-settings"), r, {
      publishDiscipline: "inPlace",
      mode: 384,
      flush: !0,
    });
    if (!u.ok) {
      n(`Remote settings: Failed to save - ${We(u.error)}`);
      return;
    }
    if (
      (n("Remote settings: Saved via storage backend"),
      remoteSettingsFileWritten("cache", r),
      await lse(getSettingsPath(), o),
      a !== void 0)
    ) {
      let p = await t.write(Ce.state(HELPER_CONSENT_STATE_ID), a, {
        publishDiscipline: "inPlace",
        mode: 384,
      });
      if (
        (n(
          p.ok
            ? "Remote settings: Saved helper consent via storage backend"
            : `Remote settings: Failed to save helper consent - ${We(p.error)}`,
        ),
        p.ok)
      )
        remoteSettingsFileWritten("helperConsent", a);
    }
    return;
  }
  try {
    let u = getSettingsPath(),
      p = await Ke(u, "w", 384);
    try {
      (await p.writeFile(r, { encoding: "utf-8" }), await p.datasync());
    } finally {
      await p.close();
    }
    n(`Remote settings: Saved to ${u}`);
  } catch (u) {
    n(
      `Remote settings: Failed to save - ${u instanceof Error ? u.message : "unknown error"}`,
    );
    return;
  }
  if (isHoverRestEnabled() && !getRemoteSettingsPathOverride()) remoteSettingsFileWritten("cache", r);
  if ((await lse(getSettingsPath(), o), a === void 0)) return;
  try {
    if ((await writeFile(getHelperConsentPath(), a, { mode: 384 }), isHoverRestEnabled() && !getRemoteSettingsPathOverride()))
      remoteSettingsFileWritten("helperConsent", a);
  } catch (u) {
    n(`Remote settings: Failed to save helper consent - ${l(u)}`);
  }
}
async function hlt(e) {
  (UDt(), resetRemoteSettingsSyncCache(), Za(), O().detachBarrier()?.());
  let t =
    isHoverRestEnabled() && e !== void 0
      ? await e.delete(Ce.state(HELPER_CONSENT_STATE_ID)).then((o) => (o.ok ? void 0 : We(o.error)))
      : await Je(getHelperConsentPath(), { force: !0 }).then(() => {
          return;
        }, l);
  if (t !== void 0) {
    n(`Remote settings: Failed to remove helper consent - ${t}`);
    return;
  }
  if (isHoverRestEnabled() && !getRemoteSettingsPathOverride()) remoteSettingsFileWritten("helperConsent", null);
  if (getRemoteSettingsPathOverride()) return;
  if ((await KJe(getSettingsPath()), isHoverRestEnabled() && e !== void 0)) {
    if ((await e.delete(Ce.state("remote-settings"))).ok) remoteSettingsFileWritten("cache", null);
    return;
  }
  try {
    let o = getSettingsPath();
    await unlink(o);
  } catch (o) {
    if (isHoverRestEnabled() && !W(o)) return;
  }
  if (isHoverRestEnabled()) remoteSettingsFileWritten("cache", null);
}
async function Y(e = {}) {
  try {
    return await ct(e);
  } finally {
    let t = () => Bq().settings;
    (Tar(t), U5t(t));
  }
}
async function ct(e) {
  if (!isRemoteSettingsEligible()) return { settings: null, fetchSucceeded: !0 };
  let t = getRemoteSettingsPathOverride();
  if (t || isEvalPolicySnapshotOnly())
    return (
      n(
        t
          ? `Remote settings: Using override file ${t} (CLAUDE_CODE_REMOTE_SETTINGS_PATH), skipping API fetch`
          : "Remote settings: confined evaluation child \u2014 serving the harness-written policy snapshot, no fetch",
      ),
      { settings: getRemoteManagedSettingsSyncFromCache(), fetchSucceeded: !0 }
    );
  let o = getRemoteManagedSettingsRawCache(),
    r = isRemoteManagedSettingsVerified(),
    a = o ? bke(o) : void 0,
    u = getSyncCacheResetEpoch(),
    p = O();
  if (!p.signedCacheShadowChecked) {
    if (((p.signedCacheShadowChecked = !0), a !== void 0))
      P4t("managed-settings", getSettingsPath(), a, getStoredOauthAccountInfo);
  }
  try {
    let d = await it(a, e);
    if (A(u)) return { settings: null, fetchSucceeded: !1 };
    if (!d.success) {
      logFeatureBad(
        "remote_managed_settings_pull",
        d.errorKind ?? "remote_managed_settings_fetch_failed",
      );
      let _ = {
        errorKind: d.errorKind ?? "unknown_error",
        message: d.error ?? "Unknown error",
        ...(d.httpStatus !== void 0 && { httpStatus: d.httpStatus }),
        ...(d.gatewayPinMismatch && {
          gatewayPinMismatch: d.gatewayPinMismatch,
        }),
      };
      if (o)
        return (
          n(`Remote settings: Using stale cache after fetch failure (${H(_)})`),
          setSessionCache(o),
          { settings: o, fetchSucceeded: !1, failure: _ }
        );
      return (
        n(`Remote settings: Fetch failed (${H(_)}) and no cached settings`),
        { settings: null, fetchSucceeded: !1, failure: _ }
      );
    }
    if (d.settings === null && o && o === getRemoteManagedSettingsConsentedBaseline()) {
      (n("Remote settings: Cache still valid (304 Not Modified)"),
        setSessionCache(o, { verified: !0 }),
        await lse(getSettingsPath(), d.signature));
      let _ = A(u);
      if ((await XJe(getSettingsPath(), _), _))
        return { settings: null, fetchSucceeded: !1 };
      if (!r) {
        if ((await q(), A(u))) return { settings: null, fetchSucceeded: !1 };
        if (o === getRemoteManagedSettingsConsentedBaseline()) {
          if (
            (await J(d.consentIdentity, K(o), e.storageV5, e.credentials), A(u))
          )
            return { settings: null, fetchSucceeded: !1 };
        }
      }
      return (
        logFeatureOk("remote_managed_settings_pull", { status: S("not_modified") }),
        { settings: o, fetchSucceeded: !0 }
      );
    }
    let R = d.settings ?? o ?? {};
    if (Object.keys(R).length > 0) {
      let _ = d.consentIdentity
          ? await le(d.consentIdentity, e.storageV5)
          : null,
        v = K(getRemoteManagedSettingsConsentedBaseline()),
        P =
          _ !== null
            ? {
                source: "org_record",
                dangerousSettingsHash: _,
                consentedPayload: v,
              }
            : { source: "consented_payload", settings: v },
        E = K(R),
        C = await oe(P, E, e.showSecurityDialog);
      if (A(u)) return { settings: null, fetchSucceeded: !1 };
      if (!ie(C)) {
        if (C === "superseded")
          return (
            n(
              "Remote settings: A newer fetch took over the pending consent review; leaving the decision to it",
            ),
            { settings: o, fetchSucceeded: !0 }
          );
        if (C === "deferred_no_consent_surface") {
          if (re())
            (n(
              "Remote settings: Consent prompt deferred to the next interactive session (this command cannot host it); keeping the consented baseline",
            ),
              logFeatureSad("remote_managed_settings_pull", "consent_deferred_no_surface"));
          else
            (n(
              "Remote settings: No consent surface in this interactive session; keeping the consented baseline",
            ),
              logFeatureBad(
                "remote_managed_settings_pull",
                "remote_managed_settings_no_consent_surface",
              ));
          return { settings: o, fetchSucceeded: !1 };
        }
        return (
          n(
            "Remote settings: User rejected new settings, using cached settings",
          ),
          { settings: o, fetchSucceeded: !0 }
        );
      }
      if ((setSessionCache(R, { verified: !0 }), !r)) {
        if ((await q(), A(u))) return { settings: null, fetchSucceeded: !1 };
      }
      switch (C) {
        case "approved":
        case "no_check_needed":
          if (
            (markRemoteManagedSettingsConsented(R),
            await J(d.consentIdentity, E, e.storageV5, e.credentials),
            A(u))
          )
            return { settings: null, fetchSucceeded: !1 };
          (await he(
            d.salvagedSettings ?? (d.settings === null ? Re(E ?? {}, R) : R),
            e.storageV5,
            d.salvagedSettings === void 0 && d.settings !== null
              ? d.signature
              : void 0,
          ),
            n("Remote settings: Applied new settings successfully"),
            logFeatureOk("remote_managed_settings_pull", { status: S("updated") }));
          break;
        case "deferred_non_interactive":
          (n(
            "Remote settings: Applied for this non-interactive run; consent deferred \u2014 not persisting the disk cache as consented",
          ),
            logFeatureOk("remote_managed_settings_pull", {
              status: S("applied_consent_deferred"),
            }));
          break;
        case "rejected":
        case "deferred_no_consent_surface":
        case "superseded":
          break;
      }
      return { settings: R, fetchSucceeded: !0 };
    }
    if ((setSessionCache(R, { verified: !0 }), !r)) {
      if ((await q(), A(u))) return { settings: null, fetchSucceeded: !1 };
    }
    if (
      (markRemoteManagedSettingsConsented(R), await J(d.consentIdentity, R, e.storageV5, e.credentials), A(u))
    )
      return { settings: null, fetchSucceeded: !1 };
    return (
      await he({}, e.storageV5, d.signature),
      n("Remote settings: Saved empty sentinel (404 response)"),
      logFeatureOk("remote_managed_settings_pull", { status: S("no_content") }),
      { settings: R, fetchSucceeded: !0 }
    );
  } catch {
    if (A(u)) return { settings: null, fetchSucceeded: !1 };
    logFeatureBad("remote_managed_settings_pull", "remote_managed_settings_unexpected");
    let d = {
      errorKind: "unknown_error",
      message: "Unexpected error while applying remote settings",
    };
    if (o)
      return (
        n("Remote settings: Using stale cache after error"),
        setSessionCache(o),
        { settings: o, fetchSucceeded: !1, failure: d }
      );
    return { settings: null, fetchSucceeded: !1, failure: d };
  }
}
function D(e) {
  if (!isRemoteSettingsEligible()) {
    let t = getIneligibleReason();
    if (t) setLastLoadStatus({ state: "ineligible", reason: t });
    return;
  }
  if (e.fetchSucceeded) {
    setLastLoadStatus({
      state: "ok",
      hasSettings: e.settings !== null && Object.keys(e.settings).length > 0,
    });
    return;
  }
  if (e.failure) {
    let t = e.settings !== null && Object.keys(e.settings).length > 0;
    setLastLoadStatus(
      t
        ? {
            state: "stale_cache",
            failure: e.failure,
            transportEnvWithheld: !isRemoteManagedSettingsVerified(),
          }
        : { state: "failed", failure: e.failure },
    );
  }
}
async function _lt(e, t, o) {
  ye();
  let r = O();
  if (isRemoteSettingsEligible() && !r.loadingCompletePromise) r.createBarrier();
  let a = r.fetchSettledResolve,
    u = getSyncCacheResetEpoch();
  if (getRemoteManagedSettingsSyncFromCache() && r.loadingCompleteResolve) r.releaseLoadBarrier();
  try {
    let {
      settings: p,
      fetchSucceeded: d,
      failure: R,
    } = await Y({ ...o, showSecurityDialog: e, storageV5: t });
    if (getSyncCacheResetEpoch() === u) D({ settings: p, fetchSucceeded: d, failure: R });
    if (getSyncCacheResetEpoch() === u && isRemoteSettingsEligible() && !getRemoteSettingsPathOverride() && !isEvalPolicySnapshotOnly()) Fe(e, t, o?.credentials);
    if (p !== null) N();
    return d;
  } finally {
    Ee(a);
  }
}
function Ee(e) {
  let t = O();
  if (t.fetchSettledResolve && t.fetchSettledResolve === e) t.releaseBarrier();
}
async function mIe(e, t, o) {
  return (await xnn(e, t, o)).fetchSucceeded;
}
var dt = 5000;
async function YBn(e, t, o) {
  let r,
    a = new Promise((p) => {
      r = ne(() => p("consent_pending"));
    }),
    u = mIe(e, t, o).then(
      (p) => (p ? "refreshed" : "failed"),
      (p) => (logError(p), "failed"),
    );
  try {
    let p = await withDeadline(Promise.race([u, a]), dt);
    if (p === void 0)
      return (
        logFeatureSad("remote_managed_settings_startup_await", "deadline_expired"),
        "timed_out"
      );
    return p;
  } finally {
    r?.();
  }
}
async function xnn(e, t, o) {
  (UDt(), resetRemoteSettingsSyncCache());
  let r = getSyncCacheResetEpoch(),
    a = O(),
    u = a.detachBarrier();
  if (!isRemoteSettingsEligible())
    return (
      u?.(),
      D({ settings: null, fetchSucceeded: !0 }),
      N(),
      U5t(() => Bq().settings),
      { fetchSucceeded: !0 }
    );
  vnn();
  let p = a.fetchSettledResolve;
  if (u)
    if (a.fetchSettledPromise) a.fetchSettledPromise.then(u);
    else u();
  let d, R;
  try {
    ((R = await Y({ showSecurityDialog: e, storageV5: t, credentials: o })),
      (d = {
        fetchSucceeded: R.fetchSucceeded,
        ...(R.failure && { failure: R.failure }),
      }));
  } finally {
    Ee(p);
  }
  if ((n("Remote settings: Refreshed after auth change"), getSyncCacheResetEpoch() !== r))
    return (
      n(
        "Remote settings: Refresh superseded by a login/logout reset; not notifying",
      ),
      d
    );
  if ((D(R), !getRemoteSettingsPathOverride())) Fe(e, t, o);
  return (N(), d);
}
function N() {
  try {
    (markPolicySettingsNotified(), kl.notifyChange("policySettings"));
  } catch (e) {
    logError(e);
  }
}
async function q() {
  try {
    let [
      {
        applyConfigEnvironmentVariables: e,
        applySafeConfigEnvironmentVariables: t,
      },
      { checkHasTrustDialogAccepted: o },
      { captureAdmin3PSteeringSnapshot: r },
    ] = await Promise.all([
      import("./getAppliedGlobalConfigEnv.zewdj9m8.js"),
      import("./getCurrentProjectConfig.s8843fs9.js"),
      import("../../02-功能模块/Bedrock-Vertex/chunk-bnft4099.js"),
    ]);
    if (o()) e();
    else {
      t();
      let [
        { clearProxyCache: a, configureGlobalAgents: u },
        { clearCACertsCache: p, loadExtraCACerts: d },
        { clearMTLSCache: R, loadMTLSClientMaterial: w },
      ] = await Promise.all([
        import("../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js"),
        import("../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js"),
        import("../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js"),
      ]);
      (a(), p(), R(), await Promise.all([d(), w()]), u());
    }
    r();
  } catch (e) {
    logError(e);
  }
}
var ut =
  "Your organization requires remote managed settings to load, but they could not be loaded. Run `claude auth login` to re-authenticate, check your network connection, or contact your administrator.";
async function $Dt(e) {
  try {
    if (await e()) return { valid: !0 };
  } catch (t) {
    logError(t);
  }
  return { valid: !1, message: ut };
}
async function lt(e, t, o) {
  if (!isRemoteSettingsEligible()) return;
  let r = getRemoteManagedSettingsSyncFromCache(),
    a = r ? b(r) : null,
    u = getSyncCacheResetEpoch();
  try {
    let p = await Y({
      background: !0,
      showSecurityDialog: e,
      storageV5: t,
      credentials: o,
    });
    if (getSyncCacheResetEpoch() !== u) {
      n(
        "Remote settings: Background poll superseded by a login/logout reset; not notifying",
      );
      return;
    }
    if (p.fetchSucceeded) D(p);
    let d = getRemoteManagedSettingsSyncFromCache();
    if ((d ? b(d) : null) !== a)
      (n("Remote settings: Changed during background poll"), N());
  } catch {}
}
function Fe(e, t, o) {
  let r = O();
  if (r.poller !== null) return;
  if (!isRemoteSettingsEligible()) return;
  let u = I4t(() => void lt(e, t, o), Xe, { unref: !0 });
  (r.startPoller(u), Et(u));
}
function UDt() {
  O().stopPoller();
}
export {
  Enn,
  Ann,
  glt,
  Cnn,
  VBn,
  KBn,
  XBn,
  vnn,
  Rnn,
  _ee,
  c3e,
  fIe,
  knn,
  hlt,
  _lt,
  mIe,
  YBn,
  xnn,
  $Dt,
  UDt,
};
