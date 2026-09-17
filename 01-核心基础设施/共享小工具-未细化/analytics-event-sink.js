// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { stripProtoFields, attachAnalyticsSink } from "./analytics-event-queue.js";
import {
  maskModelIdIfConfidential,
  maskModelIdsInPayload,
  getMainLoopModel,
  isServedCatalogMaskHydrated,
  ensureServedCatalogMaskHydrated,
  isAnalyticsSinkDisabled,
  getEventSampleRate,
  logFirstPartyEvent,
  logFirstPartyEventAsync,
  getFeatureValue_CACHED_MAY_BE_STALE,
  trackDatadogEvent,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
var m = "tengu_log_datadog_events";
function s() {
  if (isAnalyticsSinkDisabled("datadog")) return !1;
  try {
    return getFeatureValue_CACHED_MAY_BE_STALE(m, !1);
  } catch {
    return !1;
  }
}
function f(t) {
  try {
    maskModelIdIfConfidential(getMainLoopModel());
  } catch {}
  return maskModelIdsInPayload(t);
}
function d(t, o, e) {
  let a = f(o),
    r = e !== null ? { ...a, sample_rate: e } : a;
  if (s()) trackDatadogEvent(t, stripProtoFields(r));
  logFirstPartyEvent(t, r);
}
var i = !1;
function u(t, o) {
  if (i) {
    n(
      `logEvent reentered while collecting metadata \u2014 dropped ${t}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,
      { level: "error" },
    );
    return;
  }
  i = !0;
  try {
    let e = getEventSampleRate(t);
    if (e === 0) return;
    if (isServedCatalogMaskHydrated()) {
      d(t, o, e);
      return;
    }
    let a = () => {
      i = !0;
      try {
        d(t, o, e);
      } finally {
        i = !1;
      }
    };
    ensureServedCatalogMaskHydrated().then(a, a);
  } finally {
    i = !1;
  }
}
async function g(t, o) {
  let e = getEventSampleRate(t);
  if (e === 0) return;
  if (!isServedCatalogMaskHydrated()) await ensureServedCatalogMaskHydrated();
  let a = f(o),
    r = e !== null ? { ...a, sample_rate: e } : a,
    l = [];
  if (s()) l.push(trackDatadogEvent(t, stripProtoFields(r)));
  (l.push(logFirstPartyEventAsync(t, r)), await Promise.all(l));
}
function initializeAnalyticsSink() {
  attachAnalyticsSink({ logEvent: u, logEventAsync: g });
}
export { initializeAnalyticsSink };
