// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, bi } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { formatSingleLineLabel } from "../策略限制-PolicyLimits/chunk-8sw91yn5.js";
import { l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getFileStorage } from "../../01-核心基础设施/共享小工具-未细化/file-storage.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { getSettingsForSource, getAllPolicyTierSettings, getDurablePolicyTierSettings } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { getFeatureValue_CACHED_MAY_BE_STALE, checkGate_CACHED_OR_BLOCKING } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isViolinWoodEnabled, isViolinWoodEnabledCached } from "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import { s, c, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { homedir, hostname } from "os";
import { dirname, join as y } from "path";
function a(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/(\.(local|lan|home|localdomain))+$/, "");
}
var f = "tengu_violin_fret";
async function w() {
  try {
    return await checkGate_CACHED_OR_BLOCKING(f);
  } catch {
    return !1;
  }
}
function C() {
  try {
    return getFeatureValue_CACHED_MAY_BE_STALE(f, !1);
  } catch {
    return !1;
  }
}
async function isUnattendedServingEnabled() {
  return (await isViolinWoodEnabled()) && (await w());
}
function isUnattendedServingEnabledCached() {
  return isViolinWoodEnabledCached() && C();
}
var UNATTENDED_SERVING_CONSENT_VERSION = 1,
  UNATTENDED_SERVING_CONSENT_TERMS = "unattended-serving:v1:auto-arm-classifier",
  E = "unattended-serving-consent.json",
  _ = createLazyValue(() =>
    c({
      version: k(UNATTENDED_SERVING_CONSENT_VERSION),
      choice: X(["accepted", "declined"]),
      terms: s(),
      decidedAt: s(),
      hostname: s(),
    }),
  );
function g() {
  return y(homedir(), ".claude", "state", E);
}
function unattendedServingMachineName(e = hostname()) {
  return formatSingleLineLabel(a(e));
}
function p() {
  return {
    readText: async () => {
      try {
        return await getFileStorage().read(g());
      } catch (e) {
        if (W(e)) return;
        throw e;
      }
    },
    writeText: async (e) => {
      let t = g();
      (await getFileStorage().mkdir(dirname(t), 448), await getFileStorage().atomicWrite(t, e, 384));
    },
    now: () => new Date(),
    hostname: hostname,
  };
}
async function readUnattendedServingConsent(e) {
  let t = e === void 0 ? i() : void 0,
    r = Date.now(),
    o = t?.writes,
    { choice: d, unreadable: S, staleYes: h } = await A(e ?? p());
  if (
    t !== void 0 &&
    o === t.writes &&
    (t.view === void 0 || !u(t) || r >= t.view.readAt)
  ) {
    if (
      ((t.view = { choice: d, readAt: r, unreadable: S, staleYes: h === !0 }),
      u(t))
    )
      t.staleUnresolved = !1;
  }
  return d;
}
async function A(e) {
  let t;
  try {
    t = await e.readText();
  } catch (r) {
    return (
      logForDebugging(`unattended-serving consent: store unreadable (${l(r)})`, {
        level: "warn",
      }),
      { choice: "unset", unreadable: !0 }
    );
  }
  if (t === void 0) return { choice: "unset", unreadable: !1 };
  try {
    let r = _().safeParse(jsonParse(t));
    if (!r.success) return { choice: "unset", unreadable: !0 };
    let o =
      r.data.choice === "declined" ||
      (a(r.data.hostname) === a(e.hostname()) && r.data.terms === UNATTENDED_SERVING_CONSENT_TERMS);
    return {
      choice: o ? r.data.choice : "unset",
      unreadable: !1,
      staleYes: !o && r.data.choice === "accepted",
    };
  } catch {
    return { choice: "unset", unreadable: !0 };
  }
}
async function writeUnattendedServingConsent(e, t) {
  let r = t === void 0 ? i() : void 0,
    o = t ?? p();
  try {
    if (
      (await o.writeText(
        jsonStringify(
          {
            version: UNATTENDED_SERVING_CONSENT_VERSION,
            choice: e,
            terms: UNATTENDED_SERVING_CONSENT_TERMS,
            decidedAt: o.now().toISOString(),
            hostname: a(o.hostname()),
          },
          null,
          2,
        ) +
          `
`,
      ),
      r !== void 0)
    )
      ((r.writes += 1),
        (r.view = {
          choice: e,
          readAt: Date.now(),
          unreadable: !1,
          staleYes: !1,
        }),
        (r.staleUnresolved = !1));
    return !0;
  } catch (d) {
    return (
      logForDebugging(`unattended-serving consent: answer not saved (${l(d)})`, {
        level: "warn",
      }),
      !1
    );
  }
}
var T = 3000,
  D = new j(() => ({
    view: void 0,
    refresh: void 0,
    refreshStartedAt: void 0,
    abandoned: void 0,
    staleUnresolved: !1,
    writes: 0,
  }));
function i() {
  return bi(D);
}
function unattendedServingConsentView() {
  let e = i();
  if (!u(e)) M(e);
  return e.view?.choice ?? "unset";
}
function u(e, t = Date.now()) {
  if (e.view === void 0) return !1;
  let r = t - e.view.readAt;
  return r >= 0 && r <= T;
}
var N = 1500;
function P(e, t) {
  if (e.refresh !== t || e.abandoned !== void 0) return !1;
  return (
    (e.refresh = void 0),
    (e.refreshStartedAt = void 0),
    (e.abandoned = t),
    t.finally(() => {
      if (e.abandoned === t) e.abandoned = void 0;
    }),
    !0
  );
}
function M(e) {
  if (e.refresh !== void 0) {
    if (
      (e.refreshStartedAt !== void 0 &&
        performance.now() - e.refreshStartedAt <= N) ||
      !P(e, e.refresh)
    )
      return e.refresh;
  }
  e.refreshStartedAt = performance.now();
  let t = readUnattendedServingConsent()
    .catch(() => {
      return;
    })
    .finally(() => {
      if (e.refresh === t)
        ((e.refresh = void 0), (e.refreshStartedAt = void 0));
    });
  return ((e.refresh = t), t);
}
function R() {
  return unattendedServingConsentView() === "accepted";
}
function managedSettingsForbidUnattendedServing() {
  return unattendedServingForbiddenBy() !== void 0;
}
function unattendedServingForbiddenBy() {
  let e = (t) => t?.remoteTools?.allowUnattendedServing === !1;
  return getAllPolicyTierSettings().some(e) || getDurablePolicyTierSettings().some(e) || e(getSettingsForSource("policySettings"))
    ? "managed"
    : e(getSettingsForSource("userSettings"))
      ? "user"
      : void 0;
}
function primeUnattendedServingConsent() {
  unattendedServingConsentView();
}
function F() {
  return i().view !== void 0;
}
function I() {
  return i().view?.unreadable === !0;
}
function unattendedServingConsentMayHoldYes() {
  let { view: e } = i();
  return e?.unreadable === !0 || e?.staleYes === !0;
}
function unattendedServingConsentPending() {
  try {
    let e = unattendedServingConsentView();
    return (
      managedSettingsForbidUnattendedServing() ||
      i().staleUnresolved ||
      (isUnattendedServingEnabledCached() ? !R() : !F() || I() || e === "declined")
    );
  } catch (e) {
    return (
      logForDebugging(
        `unattended-serving consent: read failed, call treated as unconsented (${l(e)})`,
        { level: "warn" },
      ),
      !0
    );
  }
}
export { isUnattendedServingEnabled, isUnattendedServingEnabledCached, UNATTENDED_SERVING_CONSENT_VERSION, UNATTENDED_SERVING_CONSENT_TERMS, unattendedServingMachineName, readUnattendedServingConsent, writeUnattendedServingConsent, unattendedServingConsentView, managedSettingsForbidUnattendedServing, unattendedServingForbiddenBy, primeUnattendedServingConsent, unattendedServingConsentMayHoldYes, unattendedServingConsentPending };
