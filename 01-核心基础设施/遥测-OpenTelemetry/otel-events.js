// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, K, hrt, TDn, ke, ns, fv, fZ } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie, rs } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { createLazyValue } from "../共享小工具-未细化/lazy-value.js";
import { Jr, hv, Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { z, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { le, cr, nt } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { otelApiModule, otelCoreModule, runtimeEnvironment, getWorkflowAnalyticsAttributes, getOauthAccountInfo, getAuthenticatedAccountInfo, getOrCreateUserID } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getEnvEntrypoint } from "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import { getSessionAccessToken } from "../../02-功能模块/认证-OAuth登录/credential-file-descriptors.js";
import { decodeTokenClaims, encodeTaggedId } from "../../02-功能模块/Bridge-RemoteControl/chunk-4zd60pbm.js";
import { toESM } from "../共享小工具-未细化/chunk-2c9tjhwd.js";
var w = createLazyValue(() =>
  nt({
    sub: le()
      .optional()
      .catch(void 0),
    email: le()
      .optional()
      .catch(void 0),
    groups: cr(le())
      .optional()
      .catch(void 0),
  }).passthrough(),
);
function S(e) {
  let t = e.indexOf("."),
    r = e.indexOf(".", t + 1);
  if (t < 0 || r < 0) return null;
  try {
    let i = w().safeParse(
      z(Buffer.from(e.slice(t + 1, r), "base64url").toString("utf8")),
    );
    return i.success ? i.data : null;
  } catch {
    return null;
  }
}
function getJwtSubject(e) {
  return fv(e) ? S(e.jwt)?.sub || void 0 : void 0;
}
var g = Object.freeze({}),
  v = new j(() => ({ jwt: void 0, attrs: g }));
function getGatewayIdentityAttributes() {
  let e = ns(),
    t = fv(e) ? e.jwt : void 0,
    r = v.of(B().host);
  if (t === r.jwt) return r.attrs;
  if (((r.jwt = t), !t)) return (r.attrs = g);
  let i = S(t);
  if (!i) return (r.attrs = g);
  let o = { "identity.source": "gateway-oidc" };
  if (i.sub) o["user.id"] = i.sub;
  if (i.email) o["user.email"] = i.email;
  if (i.groups && i.groups.length > 0) o["user.groups"] = i.groups.join(",");
  return (r.attrs = Object.freeze(o));
}
var D = {
  OTEL_METRICS_INCLUDE_SESSION_ID: !0,
  OTEL_METRICS_INCLUDE_VERSION: !1,
  OTEL_METRICS_INCLUDE_ACCOUNT_UUID: !0,
  OTEL_METRICS_INCLUDE_ENTRYPOINT: !1,
  OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES: !0,
};
function p(e) {
  let t = D[e],
    r = process.env[e];
  if (r === void 0) return t;
  return Ie(r);
}
function C(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (r < 33 || r === 44 || r === 59 || r === 92 || r > 126) return !1;
  }
  return !0;
}
var R = 255,
  k = rs((e) => {
    if (!e) return {};
    let t = {};
    try {
      for (let r of e.split(",")) {
        let [i, o, ...u] = r.split("=");
        if (i === void 0 || o === void 0 || u.length > 0) continue;
        let s = i.trim(),
          c = o.trim().split(/^"|"$/).join("");
        if (s.length === 0 || s.length > R || !C(s))
          throw Error("invalid resource attribute key");
        if (c.length > R || !C(c))
          throw Error("invalid resource attribute value");
        t[s] = decodeURIComponent(c);
      }
    } catch {
      return {};
    }
    return t;
  });
function buildOtelResourceAttributes() {
  let e = getOrCreateUserID(),
    t = K(),
    r = getGatewayIdentityAttributes(),
    i = Object.keys(r).length > 0,
    o = {};
  if (p("OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES"))
    for (let [s, c] of Object.entries(k(a.OTEL_RESOURCE_ATTRIBUTES))) {
      if (i && (s.startsWith("user.") || s.startsWith("identity."))) continue;
      o[s] = c;
    }
  if (((o["user.id"] = e), p("OTEL_METRICS_INCLUDE_SESSION_ID"))) {
    if (((o["session.id"] = t), a.CLAUDE_CODE_REMOTE_SESSION_ID))
      o["ccr.session.id"] = a.CLAUDE_CODE_REMOTE_SESSION_ID;
  }
  if (p("OTEL_METRICS_INCLUDE_VERSION"))
    o["app.version"] = {
      ISSUES_EXPLAINER:
        "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.263",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-06T01:08:56Z",
      GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
      HOOKS_WORKER_URL:
        "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "darwin",
    }.VERSION;
  if (p("OTEL_METRICS_INCLUDE_ENTRYPOINT")) {
    let s = getEnvEntrypoint();
    if (s) o["app.entrypoint"] = s;
  }
  let u = getAuthenticatedAccountInfo() ?? getOauthAccountInfo() ?? U();
  if (u) {
    let { organizationUuid: s, emailAddress: c, accountUuid: d } = u;
    if (s) o["organization.id"] = s;
    if (c) o["user.email"] = c;
    if (d && p("OTEL_METRICS_INCLUDE_ACCOUNT_UUID")) {
      o["user.account_uuid"] = d;
      let l = a.CLAUDE_CODE_ACCOUNT_TAGGED_ID || encodeTaggedId("user", d);
      if (l) o["user.account_id"] = l;
    }
  }
  if ((Object.assign(o, r), runtimeEnvironment.terminal)) o["terminal.type"] = runtimeEnvironment.terminal;
  return o;
}
var L = new j(() => ({ token: void 0, identity: null }));
function U() {
  if (!a.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  let e = getSessionAccessToken();
  if (!e) return null;
  let t = L.of(B().host);
  if (e === t.token) return t.identity;
  t.token = e;
  let r = decodeTokenClaims(e.replace(/^sk-ant-[a-z0-9]+-/, ""));
  if (typeof r !== "object" || r === null) return (t.identity = null);
  let i = r,
    o = (s) => (typeof s === "string" && s.length > 0 ? s : void 0),
    u = i.act ?? {};
  return (t.identity = {
    organizationUuid: o(i.organization_uuid),
    accountUuid: o(i.account_uuid),
    emailAddress: o(i.account_email) ?? o(u.email),
  });
}
var E = toESM(otelApiModule(), 1);
import { AsyncLocalStorage } from "async_hooks";
class b {
  als = new AsyncLocalStorage();
  active() {
    return this.als.getStore() ?? E.ROOT_CONTEXT;
  }
  with(e, t, r, ...i) {
    let o = r == null ? t : t.bind(r);
    return this.als.run(e, o, ...i);
  }
  enterWith(e) {
    this.als.enterWith(e);
  }
  bind(e, t) {
    if (typeof t === "function") {
      let r = (...i) => this.with(e, () => t(...i));
      return (
        Object.defineProperty(r, "length", {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: t.length,
        }),
        r
      );
    }
    return t;
  }
  enable() {
    return this;
  }
  disable() {
    return (this.als.disable(), this);
  }
}
var otelContextManager = new b();
class I {
  current = void 0;
}
var h = new j(() => new I());
function setCurrentSpanContext(e) {
  h.of(B().host).current = e;
}
function getCurrentSpanContext() {
  return h.of(B().host).current;
}
function getActiveOtelContext() {
  let e = otelContextManager.active();
  if (e !== E.ROOT_CONTEXT) return e;
  return getCurrentSpanContext() ?? e;
}
var f = toESM(otelApiModule(), 1),
  A = toESM(otelCoreModule(), 1);
class x {
  nextSequence = 0;
  warnedNoEventLogger = !1;
}
var M = new j(() => new x());
function P() {
  return a.OTEL_LOG_USER_PROMPTS;
}
function redactPromptUnlessEnabled(e) {
  return P() ? e : "<REDACTED>";
}
function shouldLogAssistantResponses() {
  return a.OTEL_LOG_ASSISTANT_RESPONSES ?? a.OTEL_LOG_USER_PROMPTS;
}
var F = new A.W3CTraceContextPropagator();
function G() {
  let e = getActiveOtelContext(),
    t = f.trace.getSpanContext(e);
  if (t && f.isSpanContextValid(t)) return e;
  if (ke() && a.TRACEPARENT)
    return F.extract(
      e,
      { traceparent: a.TRACEPARENT, tracestate: a.TRACESTATE },
      f.defaultTextMapGetter,
    );
  return;
}
async function emitOtelEvent(e, t = {}, r) {
  let i = M.of(B().host),
    o = {
      ...buildOtelResourceAttributes(),
      "event.name": e,
      "event.timestamp": new Date().toISOString(),
      "event.sequence": i.nextSequence++,
    },
    u = fZ();
  if (u) o["prompt.id"] = u;
  let s = a.CLAUDE_CODE_WORKSPACE_HOST_PATHS;
  if (s) o["workspace.host_paths"] = s.split("|");
  Object.assign(o, getWorkflowAnalyticsAttributes(r));
  for (let [O, y] of Object.entries(t)) if (y !== void 0) o[O] = y;
  let c = new Date(),
    d = G(),
    l = {
      timestamp: c,
      observedTimestamp: c,
      body: `claude_code.${e}`,
      attributes: o,
      ...(d && { context: d }),
    },
    T = hrt();
  if (T) {
    T.emit(l);
    return;
  }
  if (!TDn(l) && !i.warnedNoEventLogger)
    ((i.warnedNoEventLogger = !0),
      n(`[3P telemetry] Event dropped (no event logger initialized): ${e}`, {
        level: "warn",
      }));
}
function emitPermissionModeChanged(e) {
  if (e.from === e.to) return;
  emitOtelEvent("permission_mode_changed", {
    from_mode: e.from,
    to_mode: e.to,
    ...(e.trigger && { trigger: e.trigger }),
  });
}
function emitCompactionEvent(e) {
  emitOtelEvent("compaction", {
    trigger: e.trigger,
    success: String(e.success),
    duration_ms: String(Math.round(e.durationMs)),
    ...(e.preTokens !== void 0 && { pre_tokens: String(e.preTokens) }),
    ...(e.postTokens !== void 0 && { post_tokens: String(e.postTokens) }),
    ...(e.error && { error: e.error }),
    ...(e.precomputeReuse && { precompute_reuse: e.precomputeReuse }),
  });
}
function emitRetentionSweepEvent(e) {
  emitOtelEvent("retention_sweep", {
    result: e.result,
    period_days: String(e.periodDays),
    used_default: String(e.usedDefault),
    ...(e.skipReason && { skip_reason: e.skipReason }),
    ...(e.transcriptsDeleted !== void 0 && {
      transcripts_deleted: String(e.transcriptsDeleted),
    }),
    ...(e.transcriptsExemptedDesktop !== void 0 && {
      transcripts_exempted_desktop: String(e.transcriptsExemptedDesktop),
    }),
    ...(e.sessionFilesDeleted !== void 0 && {
      session_files_deleted: String(e.sessionFilesDeleted),
    }),
    ...(e.artifactsDeleted !== void 0 && {
      artifacts_deleted: String(e.artifactsDeleted),
    }),
    ...(e.filesRetainedFresh !== void 0 && {
      files_retained_fresh: String(e.filesRetainedFresh),
    }),
    ...(e.filesPastCutoff !== void 0 && {
      files_past_cutoff: String(e.filesPastCutoff),
    }),
    ...(e.errorCount !== void 0 && { error_count: String(e.errorCount) }),
    ...(e.historyEntriesPruned !== void 0 && {
      history_entries_pruned: String(e.historyEntriesPruned),
    }),
  });
}
var _ = !1;
function emitInternalErrorEvent(e) {
  if (_) return;
  _ = !0;
  try {
    let t = e.name !== "Error" ? e.name : e.constructor?.name || "Error";
    emitOtelEvent("internal_error", { error_name: hv(t) ?? "Error", error_code: Jr(e) });
  } finally {
    _ = !1;
  }
}
function emitAtMentionEvent(e) {
  emitOtelEvent("at_mention", { mention_type: e.mentionType, success: String(e.success) });
}
function emitAuthEvent(e) {
  let t = e.error !== void 0 ? Ps(e.error) : null;
  emitOtelEvent("auth", {
    action: e.action,
    success: String(e.success),
    auth_method: e.authMethod,
    ...(t && {
      error_category: t.kind,
      ...(t.status !== void 0 && { status_code: String(t.status) }),
    }),
  });
}
export {
  getJwtSubject,
  getGatewayIdentityAttributes,
  buildOtelResourceAttributes,
  otelContextManager,
  setCurrentSpanContext,
  getCurrentSpanContext,
  getActiveOtelContext,
  redactPromptUnlessEnabled,
  shouldLogAssistantResponses,
  emitOtelEvent,
  emitPermissionModeChanged,
  emitCompactionEvent,
  emitRetentionSweepEvent,
  emitInternalErrorEvent,
  emitAtMentionEvent,
  emitAuthEvent,
};
