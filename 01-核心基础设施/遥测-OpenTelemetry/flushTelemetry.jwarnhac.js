// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 60 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  otelApiModule,
  otelSemanticConventionsModule,
  otelCoreModule,
  otelResourcesModule,
  otelLogsApi,
  OtelLoggerProvider,
  OtelBatchLogRecordProcessor,
  TELEMETRY_LOG_PREFIX,
  TelemetryExportFailureReporter,
  getAuthHeadersAsync,
  withOAuth401Retry,
  buildGzippedBodyIfEnabled,
  withholdCredentialsForMisroutedHost,
  httpClient,
  refreshGatewayCredentialIfNeeded,
  isHostManagedProviderAuth,
  shouldUseWIFAuth,
  getAnthropicApiKeySafe,
  getClaudeAIOAuthTokens,
  handleOAuth401Error,
  isClaudeAISubscriber,
  hasProfileScope,
  is1PApiCustomer as cge,
  getSubscriptionType,
  getOtelHeadersFromHelper,
  getFeatureValue_CACHED_MAY_BE_STALE,
  checkHasTrustDialogAccepted,
  saveGlobalConfig,
  getGlobalConfig,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getCACertificates, getMTLSConfig, Hke, getUsableProxyUrl, shouldBypassProxy } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import {
  j,
  B,
  oHt,
  XXt,
  JXt,
  ADn,
  ZXt,
  d_e,
  eYt,
  CDn,
  vDn,
  RDn,
  kDn,
  ke,
  ns,
  fv,
} from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { getOauthConfig } from "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { l, Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { CLEANUP_DRAIN_TIMEOUT_MS, registerCleanup, jsonStringify, getHasFormattedOutput, logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isNonessentialTrafficRestricted, logError } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { omitBy } from "../设置-配置/设置-配置.aqbb35ee.js";
import { profileCheckpoint } from "../../03-入口与运行时/CLI入口-Commander/startup-profiler.js";
import { getSettings_DEPRECATED } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { getAPIProvider } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { getGatewayIdentityAttributes, otelContextManager } from "./otel-events.js";
import { isDetailedTracingEnabled, logPerfettoTracingInit, isEnhancedTelemetryBetaEnabled, endInteractionSpan } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getResolvedWIFBaseUrlSnapshot } from "../../02-功能模块/认证-OAuth登录/wif-credentials.js";
import { OtelDiagLogger } from "../共享小工具-未细化/otel-diag-logger.js";
import { bee } from "../../00-第三方库/_未识别/第三方库-OpenTelemetry/第三方库-OpenTelemetry.fy6ebeyr.js";
import { decodeTokenClaims } from "../../02-功能模块/Bridge-RemoteControl/chunk-4zd60pbm.js";
import { cB } from "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { getCurrentPlatform, getWslVersion } from "../核心工具-路径与平台/platform-detection.js";
import { getClientUserAgent } from "../共享小工具-未细化/user-agent.js";
import { toESM } from "../共享小工具-未细化/chunk-2c9tjhwd.js";
var C = toESM(otelApiModule(), 1);
var le = toESM(otelCoreModule(), 1),
  w = toESM(otelResourcesModule(), 1);
var re = toESM(otelCoreModule());
class de {
  export(e, t) {
    this._sendLogRecords(e, t);
  }
  shutdown() {
    return Promise.resolve();
  }
  _exportInfo(e) {
    return {
      resource: { attributes: e.resource.attributes },
      instrumentationScope: e.instrumentationScope,
      timestamp: re.hrTimeToMicroseconds(e.hrTime),
      traceId: e.spanContext?.traceId,
      spanId: e.spanContext?.spanId,
      traceFlags: e.spanContext?.traceFlags,
      severityText: e.severityText,
      severityNumber: e.severityNumber,
      body: e.body,
      attributes: e.attributes,
    };
  }
  _sendLogRecords(e, t) {
    for (let r of e) console.dir(this._exportInfo(r), { depth: 3 });
    t?.({ code: re.ExportResultCode.SUCCESS });
  }
}
var k = toESM(bee(), 1);
var Ge = toESM(otelCoreModule()),
  ze = toESM(otelResourcesModule());
var g = toESM(otelApiModule()),
  q = toESM(otelCoreModule());
var S = toESM(otelApiModule()),
  T = toESM(otelCoreModule()),
  x = toESM(otelSemanticConventionsModule());
var Ne = "exception";
class me {
  _spanContext;
  kind;
  parentSpanContext;
  attributes = {};
  links = [];
  events = [];
  startTime;
  resource;
  instrumentationScope;
  _droppedAttributesCount = 0;
  _droppedEventsCount = 0;
  _droppedLinksCount = 0;
  name;
  status = { code: S.SpanStatusCode.UNSET };
  endTime = [0, 0];
  _ended = !1;
  _duration = [-1, -1];
  _spanProcessor;
  _spanLimits;
  _attributeValueLengthLimit;
  _performanceStartTime;
  _performanceOffset;
  _startTimeProvided;
  constructor(e) {
    let t = Date.now();
    if (
      ((this._spanContext = e.spanContext),
      (this._performanceStartTime = T.otperformance.now()),
      (this._performanceOffset =
        t - (this._performanceStartTime + T.getTimeOrigin())),
      (this._startTimeProvided = e.startTime != null),
      (this._spanLimits = e.spanLimits),
      (this._attributeValueLengthLimit =
        this._spanLimits.attributeValueLengthLimit || 0),
      (this._spanProcessor = e.spanProcessor),
      (this.name = e.name),
      (this.parentSpanContext = e.parentSpanContext),
      (this.kind = e.kind),
      (this.links = e.links || []),
      (this.startTime = this._getTime(e.startTime ?? t)),
      (this.resource = e.resource),
      (this.instrumentationScope = e.scope),
      e.attributes != null)
    )
      this.setAttributes(e.attributes);
    this._spanProcessor.onStart(this, e.context);
  }
  spanContext() {
    return this._spanContext;
  }
  setAttribute(e, t) {
    if (t == null || this._isSpanEnded()) return this;
    if (e.length === 0)
      return (S.diag.warn(`Invalid attribute key: ${e}`), this);
    if (!T.isAttributeValue(t))
      return (S.diag.warn(`Invalid attribute value set for key: ${e}`), this);
    let { attributeCountLimit: r } = this._spanLimits;
    if (
      r !== void 0 &&
      Object.keys(this.attributes).length >= r &&
      !Object.prototype.hasOwnProperty.call(this.attributes, e)
    )
      return (this._droppedAttributesCount++, this);
    return ((this.attributes[e] = this._truncateToSize(t)), this);
  }
  setAttributes(e) {
    for (let [t, r] of Object.entries(e)) this.setAttribute(t, r);
    return this;
  }
  addEvent(e, t, r) {
    if (this._isSpanEnded()) return this;
    let { eventCountLimit: s } = this._spanLimits;
    if (s === 0)
      return (
        S.diag.warn("No events allowed."),
        this._droppedEventsCount++,
        this
      );
    if (s !== void 0 && this.events.length >= s) {
      if (this._droppedEventsCount === 0)
        S.diag.debug("Dropping extra events.");
      (this.events.shift(), this._droppedEventsCount++);
    }
    if (T.isTimeInput(t)) {
      if (!T.isTimeInput(r)) r = t;
      t = void 0;
    }
    let o = T.sanitizeAttributes(t);
    return (
      this.events.push({
        name: e,
        attributes: o,
        time: this._getTime(r),
        droppedAttributesCount: 0,
      }),
      this
    );
  }
  addLink(e) {
    return (this.links.push(e), this);
  }
  addLinks(e) {
    return (this.links.push(...e), this);
  }
  setStatus(e) {
    if (this._isSpanEnded()) return this;
    if (
      ((this.status = { ...e }),
      this.status.message != null && typeof e.message !== "string")
    )
      (S.diag.warn(
        `Dropping invalid status.message of type '${typeof e.message}', expected 'string'`,
      ),
        delete this.status.message);
    return this;
  }
  updateName(e) {
    if (this._isSpanEnded()) return this;
    return ((this.name = e), this);
  }
  end(e) {
    if (this._isSpanEnded()) {
      S.diag.error(
        `${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`,
      );
      return;
    }
    if (
      ((this._ended = !0),
      (this.endTime = this._getTime(e)),
      (this._duration = T.hrTimeDuration(this.startTime, this.endTime)),
      this._duration[0] < 0)
    )
      (S.diag.warn(
        "Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.",
        this.startTime,
        this.endTime,
      ),
        (this.endTime = this.startTime.slice()),
        (this._duration = [0, 0]));
    if (this._droppedEventsCount > 0)
      S.diag.warn(
        `Dropped ${this._droppedEventsCount} events because eventCountLimit reached`,
      );
    this._spanProcessor.onEnd(this);
  }
  _getTime(e) {
    if (typeof e === "number" && e <= T.otperformance.now())
      return T.hrTime(e + this._performanceOffset);
    if (typeof e === "number") return T.millisToHrTime(e);
    if (e instanceof Date) return T.millisToHrTime(e.getTime());
    if (T.isTimeInputHrTime(e)) return e;
    if (this._startTimeProvided) return T.millisToHrTime(Date.now());
    let t = T.otperformance.now() - this._performanceStartTime;
    return T.addHrTimes(this.startTime, T.millisToHrTime(t));
  }
  isRecording() {
    return this._ended === !1;
  }
  recordException(e, t) {
    let r = {};
    if (typeof e === "string") r[x.ATTR_EXCEPTION_MESSAGE] = e;
    else if (e) {
      if (e.code) r[x.ATTR_EXCEPTION_TYPE] = e.code.toString();
      else if (e.name) r[x.ATTR_EXCEPTION_TYPE] = e.name;
      if (e.message) r[x.ATTR_EXCEPTION_MESSAGE] = e.message;
      if (e.stack) r[x.ATTR_EXCEPTION_STACKTRACE] = e.stack;
    }
    if (r[x.ATTR_EXCEPTION_TYPE] || r[x.ATTR_EXCEPTION_MESSAGE])
      this.addEvent(Ne, r, t);
    else S.diag.warn(`Failed to record an exception ${e}`);
  }
  get duration() {
    return this._duration;
  }
  get ended() {
    return this._ended;
  }
  get droppedAttributesCount() {
    return this._droppedAttributesCount;
  }
  get droppedEventsCount() {
    return this._droppedEventsCount;
  }
  get droppedLinksCount() {
    return this._droppedLinksCount;
  }
  _isSpanEnded() {
    if (this._ended) {
      let e = Error(
        `Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`,
      );
      S.diag.warn(
        `Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`,
        e,
      );
    }
    return this._ended;
  }
  _truncateToLimitUtil(e, t) {
    if (e.length <= t) return e;
    return e.substring(0, t);
  }
  _truncateToSize(e) {
    let t = this._attributeValueLengthLimit;
    if (t <= 0)
      return (
        S.diag.warn(`Attribute value limit must be positive, got ${t}`),
        e
      );
    if (typeof e === "string") return this._truncateToLimitUtil(e, t);
    if (Array.isArray(e))
      return e.map((r) =>
        typeof r === "string" ? this._truncateToLimitUtil(r, t) : r,
      );
    return e;
  }
}
var ne = toESM(otelApiModule()),
  A = toESM(otelCoreModule());
var M;
(function (e) {
  ((e[(e.NOT_RECORD = 0)] = "NOT_RECORD"),
    (e[(e.RECORD = 1)] = "RECORD"),
    (e[(e.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED"));
})(M || (M = {}));
class X {
  shouldSample() {
    return { decision: M.NOT_RECORD };
  }
  toString() {
    return "AlwaysOffSampler";
  }
}
class N {
  shouldSample() {
    return { decision: M.RECORD_AND_SAMPLED };
  }
  toString() {
    return "AlwaysOnSampler";
  }
}
var G = toESM(otelApiModule()),
  De = toESM(otelCoreModule());
class Y {
  _root;
  _remoteParentSampled;
  _remoteParentNotSampled;
  _localParentSampled;
  _localParentNotSampled;
  constructor(e) {
    if (((this._root = e.root), !this._root))
      (De.globalErrorHandler(
        Error("ParentBasedSampler must have a root sampler configured"),
      ),
        (this._root = new N()));
    ((this._remoteParentSampled = e.remoteParentSampled ?? new N()),
      (this._remoteParentNotSampled = e.remoteParentNotSampled ?? new X()),
      (this._localParentSampled = e.localParentSampled ?? new N()),
      (this._localParentNotSampled = e.localParentNotSampled ?? new X()));
  }
  shouldSample(e, t, r, s, o, i) {
    let c = G.trace.getSpanContext(e);
    if (!c || !G.isSpanContextValid(c))
      return this._root.shouldSample(e, t, r, s, o, i);
    if (c.isRemote) {
      if (c.traceFlags & G.TraceFlags.SAMPLED)
        return this._remoteParentSampled.shouldSample(e, t, r, s, o, i);
      return this._remoteParentNotSampled.shouldSample(e, t, r, s, o, i);
    }
    if (c.traceFlags & G.TraceFlags.SAMPLED)
      return this._localParentSampled.shouldSample(e, t, r, s, o, i);
    return this._localParentNotSampled.shouldSample(e, t, r, s, o, i);
  }
  toString() {
    return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
  }
}
var Be = toESM(otelApiModule());
class oe {
  _ratio;
  _upperBound;
  constructor(e = 0) {
    ((this._ratio = e),
      (this._ratio = this._normalize(e)),
      (this._upperBound = Math.floor(this._ratio * 4294967295)));
  }
  shouldSample(e, t) {
    return {
      decision:
        Be.isValidTraceId(t) && this._accumulate(t) < this._upperBound
          ? M.RECORD_AND_SAMPLED
          : M.NOT_RECORD,
    };
  }
  toString() {
    return `TraceIdRatioBased{${this._ratio}}`;
  }
  _normalize(e) {
    if (typeof e !== "number" || isNaN(e)) return 0;
    return e >= 1 ? 1 : e <= 0 ? 0 : e;
  }
  _accumulate(e) {
    let t = 0;
    for (let r = 0; r < e.length / 8; r++) {
      let s = r * 8,
        o = parseInt(e.slice(s, s + 8), 16);
      t = (t ^ o) >>> 0;
    }
    return t;
  }
}
var v;
(function (e) {
  ((e.AlwaysOff = "always_off"),
    (e.AlwaysOn = "always_on"),
    (e.ParentBasedAlwaysOff = "parentbased_always_off"),
    (e.ParentBasedAlwaysOn = "parentbased_always_on"),
    (e.ParentBasedTraceIdRatio = "parentbased_traceidratio"),
    (e.TraceIdRatio = "traceidratio"));
})(v || (v = {}));
var se = 1;
function ie() {
  return {
    sampler: he(),
    forceFlushTimeoutMillis: 30000,
    generalLimits: {
      attributeValueLengthLimit:
        A.getNumberFromEnv("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
      attributeCountLimit:
        A.getNumberFromEnv("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128,
    },
    spanLimits: {
      attributeValueLengthLimit:
        A.getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
      attributeCountLimit:
        A.getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? 128,
      linkCountLimit: A.getNumberFromEnv("OTEL_SPAN_LINK_COUNT_LIMIT") ?? 128,
      eventCountLimit: A.getNumberFromEnv("OTEL_SPAN_EVENT_COUNT_LIMIT") ?? 128,
      attributePerEventCountLimit:
        A.getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT") ?? 128,
      attributePerLinkCountLimit:
        A.getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT") ?? 128,
    },
  };
}
function he() {
  let e = A.getStringFromEnv("OTEL_TRACES_SAMPLER") ?? v.ParentBasedAlwaysOn;
  switch (e) {
    case v.AlwaysOn:
      return new N();
    case v.AlwaysOff:
      return new X();
    case v.ParentBasedAlwaysOn:
      return new Y({ root: new N() });
    case v.ParentBasedAlwaysOff:
      return new Y({ root: new X() });
    case v.TraceIdRatio:
      return new oe(Ue());
    case v.ParentBasedTraceIdRatio:
      return new Y({ root: new oe(Ue()) });
    default:
      return (
        ne.diag.error(
          `OTEL_TRACES_SAMPLER value "${e}" invalid, defaulting to "${v.ParentBasedAlwaysOn}".`,
        ),
        new Y({ root: new N() })
      );
  }
}
function Ue() {
  let e = A.getNumberFromEnv("OTEL_TRACES_SAMPLER_ARG");
  if (e == null)
    return (
      ne.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${se}.`),
      se
    );
  if (e < 0 || e > 1)
    return (
      ne.diag.error(
        `OTEL_TRACES_SAMPLER_ARG=${e} was given, but it is out of range ([0..1]), defaulting to ${se}.`,
      ),
      se
    );
  return e;
}
var J = toESM(otelCoreModule()),
  ct = 128,
  pt = 1 / 0;
function Fe(e) {
  let t = { sampler: he() },
    r = ie(),
    s = Object.assign({}, r, t, e);
  return (
    (s.generalLimits = Object.assign(
      {},
      r.generalLimits,
      e.generalLimits || {},
    )),
    (s.spanLimits = Object.assign({}, r.spanLimits, e.spanLimits || {})),
    s
  );
}
function $e(e) {
  let t = Object.assign({}, e.spanLimits);
  return (
    (t.attributeCountLimit =
      e.spanLimits?.attributeCountLimit ??
      e.generalLimits?.attributeCountLimit ??
      J.getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ??
      J.getNumberFromEnv("OTEL_ATTRIBUTE_COUNT_LIMIT") ??
      ct),
    (t.attributeValueLengthLimit =
      e.spanLimits?.attributeValueLengthLimit ??
      e.generalLimits?.attributeValueLengthLimit ??
      J.getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
      J.getNumberFromEnv("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
      pt),
    Object.assign({}, e, { spanLimits: t })
  );
}
var D = toESM(otelApiModule()),
  L = toESM(otelCoreModule());
class fe {
  _exporter;
  _maxExportBatchSize;
  _maxQueueSize;
  _scheduledDelayMillis;
  _exportTimeoutMillis;
  _isExporting = !1;
  _finishedSpans = [];
  _timer;
  _shutdownOnce;
  _droppedSpansCount = 0;
  constructor(e, t) {
    if (
      ((this._exporter = e),
      (this._maxExportBatchSize =
        typeof t?.maxExportBatchSize === "number"
          ? t.maxExportBatchSize
          : (L.getNumberFromEnv("OTEL_BSP_MAX_EXPORT_BATCH_SIZE") ?? 512)),
      (this._maxQueueSize =
        typeof t?.maxQueueSize === "number"
          ? t.maxQueueSize
          : (L.getNumberFromEnv("OTEL_BSP_MAX_QUEUE_SIZE") ?? 2048)),
      (this._scheduledDelayMillis =
        typeof t?.scheduledDelayMillis === "number"
          ? t.scheduledDelayMillis
          : (L.getNumberFromEnv("OTEL_BSP_SCHEDULE_DELAY") ?? 5000)),
      (this._exportTimeoutMillis =
        typeof t?.exportTimeoutMillis === "number"
          ? t.exportTimeoutMillis
          : (L.getNumberFromEnv("OTEL_BSP_EXPORT_TIMEOUT") ?? 30000)),
      (this._shutdownOnce = new L.BindOnceFuture(this._shutdown, this)),
      this._maxExportBatchSize > this._maxQueueSize)
    )
      (D.diag.warn(
        "BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize",
      ),
        (this._maxExportBatchSize = this._maxQueueSize));
  }
  forceFlush() {
    if (this._shutdownOnce.isCalled) return this._shutdownOnce.promise;
    return this._flushAll();
  }
  onStart(e, t) {}
  onEnd(e) {
    if (this._shutdownOnce.isCalled) return;
    if ((e.spanContext().traceFlags & D.TraceFlags.SAMPLED) === 0) return;
    this._addToBuffer(e);
  }
  shutdown() {
    return this._shutdownOnce.call();
  }
  _shutdown() {
    return Promise.resolve()
      .then(() => this.onShutdown())
      .then(() => this._flushAll())
      .then(() => this._exporter.shutdown());
  }
  _addToBuffer(e) {
    if (this._finishedSpans.length >= this._maxQueueSize) {
      if (this._droppedSpansCount === 0)
        D.diag.debug("maxQueueSize reached, dropping spans");
      this._droppedSpansCount++;
      return;
    }
    if (this._droppedSpansCount > 0)
      (D.diag.warn(
        `Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`,
      ),
        (this._droppedSpansCount = 0));
    (this._finishedSpans.push(e), this._maybeStartTimer());
  }
  _flushAll() {
    return new Promise((e, t) => {
      let r = [],
        s = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
      for (let o = 0, i = s; o < i; o++) r.push(this._flushOneBatch());
      Promise.all(r)
        .then(() => {
          e();
        })
        .catch(t);
    });
  }
  _flushOneBatch() {
    if ((this._clearTimer(), this._finishedSpans.length === 0))
      return Promise.resolve();
    return new Promise((e, t) => {
      let r = setTimeout(() => {
        t(Error("Timeout"));
      }, this._exportTimeoutMillis);
      D.context.with(L.suppressTracing(D.context.active()), () => {
        let s;
        if (this._finishedSpans.length <= this._maxExportBatchSize)
          ((s = this._finishedSpans), (this._finishedSpans = []));
        else s = this._finishedSpans.splice(0, this._maxExportBatchSize);
        let o = () =>
            this._exporter.export(s, (c) => {
              if ((clearTimeout(r), c.code === L.ExportResultCode.SUCCESS)) e();
              else
                t(c.error ?? Error("BatchSpanProcessor: span export failed"));
            }),
          i = null;
        for (let c = 0, p = s.length; c < p; c++) {
          let u = s[c];
          if (
            u.resource.asyncAttributesPending &&
            u.resource.waitForAsyncAttributes
          )
            ((i ??= []), i.push(u.resource.waitForAsyncAttributes()));
        }
        if (i === null) o();
        else
          Promise.all(i).then(o, (c) => {
            (L.globalErrorHandler(c), t(c));
          });
      });
    });
  }
  _maybeStartTimer() {
    if (this._isExporting) return;
    let e = () => {
      ((this._isExporting = !0),
        this._flushOneBatch()
          .finally(() => {
            if (((this._isExporting = !1), this._finishedSpans.length > 0))
              (this._clearTimer(), this._maybeStartTimer());
          })
          .catch((t) => {
            ((this._isExporting = !1), L.globalErrorHandler(t));
          }));
    };
    if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
    if (this._timer !== void 0) return;
    if (
      ((this._timer = setTimeout(() => e(), this._scheduledDelayMillis)),
      typeof this._timer !== "number")
    )
      this._timer.unref();
  }
  _clearTimer() {
    if (this._timer !== void 0)
      (clearTimeout(this._timer), (this._timer = void 0));
  }
}
class z extends fe {
  onShutdown() {}
}
class K {
  generateTraceId = Xe(16);
  generateSpanId = Xe(8);
}
var ae = Buffer.allocUnsafe(16);
function Xe(e) {
  return function () {
    for (let r = 0; r < e / 4; r++)
      ae.writeUInt32BE((Math.random() * 4294967296) >>> 0, r * 4);
    for (let r = 0; r < e; r++)
      if (ae[r] > 0) break;
      else if (r === e - 1) ae[e - 1] = 1;
    return ae.toString("hex", 0, e);
  };
}
class Ee {
  _sampler;
  _generalLimits;
  _spanLimits;
  _idGenerator;
  instrumentationScope;
  _resource;
  _spanProcessor;
  constructor(e, t, r, s) {
    let o = Fe(t);
    ((this._sampler = o.sampler),
      (this._generalLimits = o.generalLimits),
      (this._spanLimits = o.spanLimits),
      (this._idGenerator = t.idGenerator || new K()),
      (this._resource = r),
      (this._spanProcessor = s),
      (this.instrumentationScope = e));
  }
  startSpan(e, t = {}, r = g.context.active()) {
    if (t.root) r = g.trace.deleteSpan(r);
    let s = g.trace.getSpan(r);
    if (q.isTracingSuppressed(r))
      return (
        g.diag.debug("Instrumentation suppressed, returning Noop Span"),
        g.trace.wrapSpanContext(g.INVALID_SPAN_CONTEXT)
      );
    let o = s?.spanContext(),
      i = this._idGenerator.generateSpanId(),
      c,
      p,
      u;
    if (!o || !g.trace.isSpanContextValid(o))
      p = this._idGenerator.generateTraceId();
    else ((p = o.traceId), (u = o.traceState), (c = o));
    let d = t.kind ?? g.SpanKind.INTERNAL,
      m = (t.links ?? []).map((W) => ({
        context: W.context,
        attributes: q.sanitizeAttributes(W.attributes),
      })),
      O = q.sanitizeAttributes(t.attributes),
      E = this._sampler.shouldSample(r, p, e, d, O, m);
    u = E.traceState ?? u;
    let _ =
        E.decision === g.SamplingDecision.RECORD_AND_SAMPLED
          ? g.TraceFlags.SAMPLED
          : g.TraceFlags.NONE,
      R = { traceId: p, spanId: i, traceFlags: _, traceState: u };
    if (E.decision === g.SamplingDecision.NOT_RECORD)
      return (
        g.diag.debug(
          "Recording is off, propagating context in a non-recording span",
        ),
        g.trace.wrapSpanContext(R)
      );
    let F = q.sanitizeAttributes(Object.assign(O, E.attributes));
    return new me({
      resource: this._resource,
      scope: this.instrumentationScope,
      context: r,
      spanContext: R,
      name: e,
      kind: d,
      links: m,
      parentSpanContext: c,
      attributes: F,
      startTime: t.startTime,
      spanProcessor: this._spanProcessor,
      spanLimits: this._spanLimits,
    });
  }
  startActiveSpan(e, t, r, s) {
    let o, i, c;
    if (arguments.length < 2) return;
    else if (arguments.length === 2) c = t;
    else if (arguments.length === 3) ((o = t), (c = r));
    else ((o = t), (i = r), (c = s));
    let p = i ?? g.context.active(),
      u = this.startSpan(e, o, p),
      d = g.trace.setSpan(p, u);
    return g.context.with(d, c, void 0, u);
  }
  getGeneralLimits() {
    return this._generalLimits;
  }
  getSpanLimits() {
    return this._spanLimits;
  }
}
var He = toESM(otelCoreModule());
class _e {
  _spanProcessors;
  constructor(e) {
    this._spanProcessors = e;
  }
  forceFlush() {
    let e = [];
    for (let t of this._spanProcessors) e.push(t.forceFlush());
    return new Promise((t) => {
      Promise.all(e)
        .then(() => {
          t();
        })
        .catch((r) => {
          (He.globalErrorHandler(
            r || Error("MultiSpanProcessor: forceFlush failed"),
          ),
            t());
        });
    });
  }
  onStart(e, t) {
    for (let r of this._spanProcessors) r.onStart(e, t);
  }
  onEnd(e) {
    for (let t of this._spanProcessors) t.onEnd(e);
  }
  shutdown() {
    let e = [];
    for (let t of this._spanProcessors) e.push(t.shutdown());
    return new Promise((t, r) => {
      Promise.all(e).then(() => {
        t();
      }, r);
    });
  }
}
var V;
(function (e) {
  ((e[(e.resolved = 0)] = "resolved"),
    (e[(e.timeout = 1)] = "timeout"),
    (e[(e.error = 2)] = "error"),
    (e[(e.unresolved = 3)] = "unresolved"));
})(V || (V = {}));
class Z {
  _config;
  _tracers = new Map();
  _resource;
  _activeSpanProcessor;
  constructor(e = {}) {
    let t = Ge.merge({}, ie(), $e(e));
    ((this._resource = t.resource ?? ze.defaultResource()),
      (this._config = Object.assign({}, t, { resource: this._resource })));
    let r = [];
    if (e.spanProcessors?.length) r.push(...e.spanProcessors);
    this._activeSpanProcessor = new _e(r);
  }
  getTracer(e, t, r) {
    let s = `${e}@${t || ""}:${r?.schemaUrl || ""}`;
    if (!this._tracers.has(s))
      this._tracers.set(
        s,
        new Ee(
          { name: e, version: t, schemaUrl: r?.schemaUrl },
          this._config,
          this._resource,
          this._activeSpanProcessor,
        ),
      );
    return this._tracers.get(s);
  }
  forceFlush() {
    let e = this._config.forceFlushTimeoutMillis,
      t = this._activeSpanProcessor._spanProcessors.map(
        (r) =>
          new Promise((s) => {
            let o,
              i = setTimeout(() => {
                (s(
                  Error(
                    `Span processor did not completed within timeout period of ${e} ms`,
                  ),
                ),
                  (o = V.timeout));
              }, e);
            r.forceFlush()
              .then(() => {
                if ((clearTimeout(i), o !== V.timeout))
                  ((o = V.resolved), s(o));
              })
              .catch((c) => {
                (clearTimeout(i), (o = V.error), s(c));
              });
          }),
      );
    return new Promise((r, s) => {
      Promise.all(t)
        .then((o) => {
          let i = o.filter((c) => c !== V.resolved);
          if (i.length > 0) s(i);
          else r();
        })
        .catch((o) => s([o]));
    });
  }
  shutdown() {
    return this._activeSpanProcessor.shutdown();
  }
}
var te = toESM(otelCoreModule());
class ce {
  export(e, t) {
    return this._sendSpans(e, t);
  }
  shutdown() {
    return (this._sendSpans([]), this.forceFlush());
  }
  forceFlush() {
    return Promise.resolve();
  }
  _exportInfo(e) {
    return {
      resource: { attributes: e.resource.attributes },
      instrumentationScope: e.instrumentationScope,
      traceId: e.spanContext().traceId,
      parentSpanContext: e.parentSpanContext,
      traceState: e.spanContext().traceState?.serialize(),
      name: e.name,
      id: e.spanContext().spanId,
      kind: e.kind,
      timestamp: te.hrTimeToMicroseconds(e.startTime),
      duration: te.hrTimeToMicroseconds(e.duration),
      attributes: e.attributes,
      status: e.status,
      events: e.events,
      links: e.links,
    };
  }
  _sendSpans(e, t) {
    for (let r of e) console.dir(this._exportInfo(r), { depth: 3 });
    if (t) return t({ code: te.ExportResultCode.SUCCESS });
  }
}
var U = toESM(otelSemanticConventionsModule(), 1),
  tt = toESM(Hke(), 1);
import Pt from "http";
import Lt from "https";
var I = toESM(otelCoreModule(), 1),
  ge = toESM(bee(), 1);
var ut = 3600000,
  je = 86400000,
  Ve = "/api/claude_code/organizations/metrics_enabled";
class ue extends Error {}
async function lt() {
  let e = withholdCredentialsForMisroutedHost(await getAuthHeadersAsync(), `${getOauthConfig().BASE_API_URL}${Ve}`);
  if (e.error)
    throw new ue(
      "Auth error: no credential usable for the metrics opt-out check",
    );
  let t = await httpClient.get(Ve, {
    auth: "none",
    headers: e.headers,
    timeout: 5000,
    bypassEssentialTrafficOnly: !0,
    maxRedirects: 0,
  });
  if (!t.ok) throw new ue(`metrics_enabled unavailable: ${t.reason}`);
  if (typeof t.data?.metrics_logging_enabled !== "boolean")
    throw Error("metrics_enabled response missing metrics_logging_enabled");
  return t.data;
}
async function dt(e) {
  try {
    let t = await withOAuth401Retry(lt, {
      also403Revoked: !0,
      gateToSessionOAuthCredential: !0,
      oauthRefreshLatch: e,
    });
    return (
      logForDebugging(
        `${TELEMETRY_LOG_PREFIX} Metrics opt-out API response: enabled=${t.metrics_logging_enabled}`,
      ),
      logFeatureOk("api_metrics_opt_out_check"),
      { enabled: t.metrics_logging_enabled, hasError: !1 }
    );
  } catch (t) {
    return (
      logForDebugging(
        `${TELEMETRY_LOG_PREFIX} Failed to check metrics opt-out status: ${l(t)}`,
        t instanceof ue ? { level: "error" } : void 0,
      ),
      logFeatureBad("api_metrics_opt_out_check", "request_failed"),
      { enabled: !1, hasError: !0 }
    );
  }
}
var mt = new j(() => {
  let e = { attempted: !1 };
  return cB(() => dt(e), ut);
});
function ft() {
  return mt.of(B().host)();
}
async function Qe(e) {
  let t = await ft();
  if (t.hasError) return t;
  let r = getGlobalConfig().metricsStatusCache;
  if (r !== void 0 && r.enabled === t.enabled && Date.now() - r.timestamp < je)
    return t;
  return (
    await saveGlobalConfig(
      (o) => ({
        ...o,
        metricsStatusCache: { enabled: t.enabled, timestamp: Date.now() },
      }),
      e,
    ),
    t
  );
}
async function We(e) {
  if (isClaudeAISubscriber() && !hasProfileScope()) return { enabled: !1, hasError: !1 };
  let t = getGlobalConfig().metricsStatusCache;
  if (t) {
    if (Date.now() - t.timestamp > je) Qe(e).catch(logError);
    return { enabled: t.enabled, hasError: !1 };
  }
  return Qe(e);
}
function _t(e) {
  let { kind: t, status: r } = Ps(e);
  switch (t) {
    case "auth":
      return [r === 401 ? "http_401" : "http_403", r];
    case "timeout":
      return ["timeout"];
    case "network":
      return ["network_error"];
    default:
      if (r !== void 0 && r >= 500) return ["http_5xx", r];
      if (r !== void 0 && r >= 400) return ["http_4xx", r];
      return r !== void 0 ? ["unknown_error", r] : ["unknown_error"];
  }
}
function Ye(e) {
  let { status: t, message: r } = Ps(e);
  return t === void 0 ? r : `HTTP ${t}: ${r}`;
}
var Tt = 250;
function Ot() {
  return Math.max(
    0,
    Math.min(a.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS ?? CLEANUP_DRAIN_TIMEOUT_MS, CLEANUP_DRAIN_TIMEOUT_MS) - Tt,
  );
}
function Rt(e) {
  if (!at.isAxiosError(e)) return !1;
  let t = e.response?.status;
  if (t === 401) return !0;
  return (
    t === 403 &&
    typeof e.response?.data === "string" &&
    e.response.data.includes("OAuth token has been revoked")
  );
}
function St(e) {
  e.reportInFlightAtShutdown();
}
class Oe {
  endpoint;
  isAntEndpointOverride;
  timeout;
  storageV5;
  pendingExports = [];
  isShutdown = !1;
  reportedFailures = new Set();
  failures = new TelemetryExportFailureReporter("BigQuery metrics");
  successReported = !1;
  inFlight = 0;
  oauthRefreshAttempted = !1;
  constructor(e) {
    let t = `${getOauthConfig().BASE_API_URL}/api/claude_code/metrics`,
      r = void 0;
    ((this.isAntEndpointOverride = !1),
      (this.endpoint = t),
      (this.timeout = e.timeout || 5000),
      (this.storageV5 = e.storageV5));
  }
  async export(e, t) {
    if (this.isShutdown) {
      (logForDebugging(`${TELEMETRY_LOG_PREFIX} BigQuery metrics export arrived after shutdown, skipping`),
        t({ code: I.ExportResultCode.SUCCESS }));
      return;
    }
    let r = this.doExport(e, t);
    (this.pendingExports.push(r),
      r.finally(() => {
        let s = this.pendingExports.indexOf(r);
        if (s > -1) this.pendingExports.splice(s, 1);
      }));
  }
  async doExport(e, t) {
    try {
      if (!(checkHasTrustDialogAccepted() || ke())) {
        (logForDebugging(`${TELEMETRY_LOG_PREFIX} BigQuery metrics export: trust not established, skipping`),
          t({ code: I.ExportResultCode.SUCCESS }));
        return;
      }
      if (!this.dispatchHostMatchesEndpoint()) {
        (logForDebugging(
          `${TELEMETRY_LOG_PREFIX} BigQuery metrics export: WIF dispatch host differs from the metrics endpoint host, skipping`,
        ),
          t({ code: I.ExportResultCode.SUCCESS }));
        return;
      }
      let s = await getAuthHeadersAsync(),
        o = withholdCredentialsForMisroutedHost(s, this.endpoint).reasonCode === "misrouted_credential";
      if (o && !this.isAntEndpointOverride) {
        (logForDebugging(
          `${TELEMETRY_LOG_PREFIX} BigQuery metrics export: credential does not belong to the metrics endpoint host, skipping`,
        ),
          t({ code: I.ExportResultCode.SUCCESS }));
        return;
      }
      let i =
        withholdCredentialsForMisroutedHost(
          s,
          `${getOauthConfig().BASE_API_URL}/api/claude_code/organizations/metrics_enabled`,
        ).reasonCode === "misrouted_credential";
      if (!o && !i) {
        let m = await We(this.storageV5);
        if (m.hasError) {
          if (s.reasonCode === "wif_error")
            (this.reportFailure("wif_error"),
              this.failures.record(
                `metrics opt-out check failed (WIF exchange failed: ${s.error}); skipping export`,
              ));
          else
            this.failures.record(
              "metrics opt-out check failed; skipping export",
            );
          t({ code: I.ExportResultCode.SUCCESS });
          return;
        }
        if (!m.enabled) {
          (logForDebugging(
            `${TELEMETRY_LOG_PREFIX} BigQuery metrics export disabled by organization setting, skipping`,
          ),
            t({ code: I.ExportResultCode.SUCCESS }));
          return;
        }
      }
      let c = this.transformMetricsForInternal(e),
        p = withholdCredentialsForMisroutedHost(await getAuthHeadersAsync(), this.endpoint),
        u = p.reasonCode === "misrouted_credential";
      if (p.error && !u) {
        if (p.reasonCode === "wif_error") this.reportFailure("wif_error");
        (this.failures.record(p.error),
          t({ code: I.ExportResultCode.SUCCESS }));
        return;
      }
      let d;
      try {
        d = await this.postWithOAuth401Recovery(c, u ? {} : p.headers);
      } catch (m) {
        throw (this.reportFailure(..._t(m)), m);
      }
      if (
        (logForDebugging(`${TELEMETRY_LOG_PREFIX} BigQuery metrics exported successfully`),
        !this.successReported)
      )
        ((this.successReported = !0), logFeatureOk("internal_metrics_export"));
      (logForDebugging(`${TELEMETRY_LOG_PREFIX} BigQuery API Response: ${jsonStringify(d.data, null, 2)}`),
        t({ code: I.ExportResultCode.SUCCESS }));
    } catch (r) {
      let { kind: s, status: o } = Ps(r);
      if (s === "other" && o === void 0)
        logForDebugging(`${TELEMETRY_LOG_PREFIX} BigQuery metrics export threw before the request: ${Ye(r)}`, {
          level: "error",
        });
      (this.failures.record(Ye(r)), t({ code: I.ExportResultCode.SUCCESS }));
    }
  }
  reportFailure(e, t) {
    let r = `${e}:${t ?? ""}`;
    if (this.reportedFailures.has(r)) return;
    (this.reportedFailures.add(r),
      logFeatureBad("internal_metrics_export", e, t === void 0 ? {} : { http_status: t }));
  }
  dispatchHostMatchesEndpoint() {
    if (!(getAnthropicApiKeySafe() === null && shouldUseWIFAuth())) return !0;
    let e = getResolvedWIFBaseUrlSnapshot();
    if (e === void 0) return !1;
    return (
      (e === null ? "api.anthropic.com" : new URL(e).host) ===
      new URL(this.endpoint).host
    );
  }
  async postWithOAuth401Recovery(e, t) {
    let r = getClaudeAIOAuthTokens(),
      s =
        r?.accessToken &&
        r.refreshToken &&
        t.Authorization === `Bearer ${r.accessToken}`
          ? r.accessToken
          : void 0;
    this.inFlight++;
    try {
      return await this.postOnce(e, t);
    } catch (o) {
      if (!s || !Rt(o)) throw o;
      let i = getClaudeAIOAuthTokens()?.accessToken;
      if (i && i !== s)
        return await this.postOnce(e, { ...t, Authorization: `Bearer ${i}` });
      if (this.oauthRefreshAttempted) throw o;
      this.oauthRefreshAttempted = !0;
      try {
        await handleOAuth401Error(s, void 0, this.storageV5);
      } catch {
        throw o;
      }
      let c = getClaudeAIOAuthTokens()?.accessToken;
      if (!c || c === s) throw o;
      let p = await this.postOnce(e, { ...t, Authorization: `Bearer ${c}` });
      return ((this.oauthRefreshAttempted = !1), p);
    } finally {
      this.inFlight--;
    }
  }
  postOnce(e, t) {
    let r = { "Content-Type": "application/json", "User-Agent": getClientUserAgent(), ...t },
      s = buildGzippedBodyIfEnabled({ url: this.endpoint, payload: e, storageV5: this.storageV5 });
    return at.post(this.endpoint, s?.body ?? e, {
      timeout: this.timeout,
      maxRedirects: 0,
      headers: s ? { ...r, ...s.headers } : r,
    });
  }
  transformMetricsForInternal(e) {
    let t = e.resource.attributes,
      r = {
        "service.name": t["service.name"] || "claude-code",
        "service.version": t["service.version"] || "unknown",
        "os.type": t["os.type"] || "unknown",
        "os.version": t["os.version"] || "unknown",
        "host.arch": t["host.arch"] || "unknown",
        "aggregation.temporality":
          this.selectAggregationTemporality() ===
          ge.AggregationTemporality.DELTA
            ? "delta"
            : "cumulative",
      };
    if (t["wsl.version"]) r["wsl.version"] = t["wsl.version"];
    if (isClaudeAISubscriber()) {
      r["user.customer_type"] = "claude_ai";
      let o = getSubscriptionType();
      if (o) r["user.subscription_type"] = o;
    } else r["user.customer_type"] = "api";
    return {
      resource_attributes: r,
      metrics: e.scopeMetrics.flatMap((o) =>
        o.metrics.map((i) => ({
          name: i.descriptor.name,
          description: i.descriptor.description,
          unit: i.descriptor.unit,
          data_points: this.extractDataPoints(i),
        })),
      ),
    };
  }
  extractDataPoints(e) {
    return (e.dataPoints || [])
      .filter((r) => typeof r.value === "number")
      .map((r) => ({
        attributes: this.convertAttributes(r.attributes),
        value: r.value,
        timestamp: this.hrTimeToISOString(
          r.endTime || r.startTime || [Date.now() / 1000, 0],
        ),
      }));
  }
  async shutdown() {
    ((this.isShutdown = !0),
      await this.forceFlush(),
      logForDebugging(`${TELEMETRY_LOG_PREFIX} BigQuery metrics exporter shutdown complete`));
  }
  armShutdownReport() {
    let e = Ot();
    if (e <= 0) return;
    setTimeout(St, e, this).unref?.();
  }
  reportInFlightAtShutdown() {
    if (this.inFlight === 0) return;
    (logForDebugging(
      `${TELEMETRY_LOG_PREFIX} BigQuery metrics export still in flight at the shutdown budget (${this.inFlight})`,
    ),
      this.reportFailure("pending_at_shutdown"));
  }
  async forceFlush() {
    (await Promise.all(this.pendingExports),
      this.failures.logSummary(),
      logForDebugging(`${TELEMETRY_LOG_PREFIX} BigQuery metrics exporter flush complete`));
  }
  convertAttributes(e) {
    let t = {};
    if (e) {
      for (let [r, s] of Object.entries(e))
        if (s !== void 0 && s !== null) t[r] = String(s);
    }
    return t;
  }
  hrTimeToISOString(e) {
    let [t, r] = e;
    return new Date(t * 1000 + r / 1e6).toISOString();
  }
  selectAggregationTemporality() {
    return ge.AggregationTemporality.DELTA;
  }
}
var Re = toESM(otelCoreModule(), 1),
  Ke = 64,
  qe = { code: Re.ExportResultCode.SUCCESS };
function Je(e) {
  return { code: Re.ExportResultCode.FAILED, error: Error(e) };
}
function Ze() {}
class Se {
  delegate;
  buffer = [];
  shutDown = !1;
  setDelegate(e) {
    if (this.shutDown) {
      e.shutdown().catch(() => {});
      return;
    }
    this.delegate = e;
    let t = this.buffer;
    this.buffer = [];
    for (let r of t) e.export(r, Ze);
  }
  export(e, t) {
    if (this.shutDown) {
      t(Je("Exporter has been shut down"));
      return;
    }
    if (this.delegate) {
      this.delegate.export(e, t);
      return;
    }
    if (this.buffer.length >= Ke) this.buffer.shift();
    (this.buffer.push(e), t(qe));
  }
  async forceFlush() {
    if (this.delegate?.forceFlush) await this.delegate.forceFlush();
  }
  async shutdown() {
    if (((this.shutDown = !0), (this.buffer = []), this.delegate))
      await this.delegate.shutdown();
  }
}
class Le {
  delegate;
  buffer = [];
  shutDown = !1;
  setDelegate(e) {
    if (this.shutDown) {
      e.shutdown().catch(() => {});
      return;
    }
    this.delegate = e;
    let t = this.buffer;
    this.buffer = [];
    for (let r of t) e.export(r, Ze);
  }
  export(e, t) {
    if (this.shutDown) {
      t(Je("Exporter has been shut down"));
      return;
    }
    if (this.delegate) {
      this.delegate.export(e, t);
      return;
    }
    if (this.buffer.length >= Ke) this.buffer.shift();
    (this.buffer.push(e), t(qe));
  }
  async shutdown() {
    if (((this.shutDown = !0), (this.buffer = []), this.delegate))
      await this.delegate.shutdown();
  }
}
var At = 60000,
  rt = 5000,
  ot = 5000,
  Ae = 300000,
  wt = 3600000;
class xe extends Error {}
function Ce(e, t) {
  return new Promise((r, s) => {
    setTimeout((o, i) => o(new xe(i)), e, s, t).unref();
  });
}
function yt() {
  if (
    (C.context.setGlobalContextManager(otelContextManager),
    !a.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE)
  )
    process.env.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE = "delta";
  if (isDetailedTracingEnabled() && !d_e()) nt();
}
function st() {
  let e = CDn();
  if (e) return e;
  let t = getCurrentPlatform(),
    r = {
      [U.ATTR_SERVICE_NAME]: "claude-code",
      [U.ATTR_SERVICE_VERSION]: {
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
      }.VERSION,
    };
  if (t === "wsl") {
    let _ = getWslVersion();
    if (_) r["wsl.version"] = _;
  }
  let s = w.resourceFromAttributes(r),
    o = w.resourceFromAttributes(w.osDetector.detect().attributes || {}),
    i = w.hostDetector.detect(),
    c = i.attributes?.[U.SEMRESATTRS_HOST_ARCH]
      ? { [U.SEMRESATTRS_HOST_ARCH]: i.attributes[U.SEMRESATTRS_HOST_ARCH] }
      : {},
    p = w.resourceFromAttributes(c),
    u = getGatewayIdentityAttributes(),
    d = Object.keys(u).length > 0,
    m = w.envDetector.detect().attributes || {},
    O = w.resourceFromAttributes(
      d
        ? omitBy(m, (_, R) => R.startsWith("user.") || R.startsWith("identity."))
        : m,
    ),
    E = s.merge(o).merge(p).merge(O).merge(w.resourceFromAttributes(u));
  return (vDn(E), E);
}
function nt() {
  let e = st(),
    t = new Se(),
    r = new z(t, { scheduledDelayMillis: ot }),
    s = new Z({ resource: e, spanProcessors: [r] });
  (C.trace.setGlobalTracerProvider(s), eYt(s));
  let o = new Le(),
    i = new OtelLoggerProvider({
      resource: e,
      processors: [new OtelBatchLogRecordProcessor(o, { scheduledDelayMillis: rt })],
    });
  (otelLogsApi.setGlobalLoggerProvider(i), XXt(i));
  let c = otelLogsApi.getLogger(
    "com.anthropic.claude_code.events",
    {
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
    }.VERSION,
  );
  (JXt(c, "beta"),
    process.on("beforeExit", async () => {
      (await i.forceFlush().catch(() => {}),
        await s.forceFlush().catch(() => {}));
    }),
    process.on("exit", () => {
      (i.forceFlush().catch(() => {}), s.forceFlush().catch(() => {}));
    }),
    Ct(t, o).catch((p) =>
      logForDebugging(`Beta tracing exporter wiring failed: ${p}`, { level: "error" }),
    ));
}
async function Ct(e, t) {
  let r = a.BETA_TRACING_ENDPOINT;
  if (!r) return;
  let [{ OTLPTraceExporter: s }, { OTLPLogExporter: o }] = await Promise.all([
    import("./OTLPTraceExporter.dggrqe01.js"),
    import("./OTLPLogExporter.cq0wzx2t.js"),
  ]);
  (e.setDelegate(new s({ url: `${r}/v1/traces` })),
    t.setDelegate(new o({ url: `${r}/v1/logs` })));
}
async function xt() {}
function ve(e) {
  return (e || "")
    .trim()
    .split(",")
    .filter(Boolean)
    .map((t) => t.trim())
    .filter((t) => t !== "none");
}
function be(e) {
  let t = !1;
  return (r) => {
    let s = r.export.bind(r);
    return (
      (r.export = (o, i) =>
        s(o, (c) => {
          if (!t)
            ((t = !0),
              logForDebugging(
                `[3P telemetry] First ${e} export: ${c.code === le.ExportResultCode.SUCCESS ? "SUCCESS" : `FAILED (${c.error?.message ?? "unknown"})`}`,
              ));
          i(c);
        })),
      r
    );
  };
}
async function vt(e) {
  let t = a.OTEL_METRIC_EXPORT_INTERVAL ?? At;
  logForDebugging(
    `[3P telemetry] getOtlpReaders: types=${jsonStringify(e)}, interval=${t}, protocol=${a.OTEL_EXPORTER_OTLP_PROTOCOL}, endpoint=${a.OTEL_EXPORTER_OTLP_ENDPOINT}`,
  );
  let r = [];
  for (let o of e)
    if (o === "console") {
      let i = new k.ConsoleMetricExporter(),
        c = i.export.bind(i);
      ((i.export = (p, u) => {
        if (p.resource && p.resource.attributes)
          (logForDebugging(`
=== Resource Attributes ===`),
            logForDebugging(jsonStringify(p.resource.attributes)),
            logForDebugging(`===========================
`));
        return c(p, u);
      }),
        r.push(i));
    } else if (o === "otlp") {
      let i =
          a.OTEL_EXPORTER_OTLP_METRICS_PROTOCOL ||
          a.OTEL_EXPORTER_OTLP_PROTOCOL,
        c = Me("metrics");
      switch (i) {
        case "grpc": {
          let { OTLPMetricExporter: p } =
            await import("./chunk-tmz6n6ex.js").then((m) => toESM(m.default, 1));
          r.push(new p());
          break;
        }
        case "http/json": {
          let { OTLPMetricExporter: p } =
            await import("./chunk-ht8sg4yh.js").then((m) => toESM(m.default, 1));
          r.push(new p(c));
          break;
        }
        case "http/protobuf": {
          let { OTLPMetricExporter: p } = await import("../../02-功能模块/Protobuf-gRPC/OTLPMetricExporter.xk2et39h.js");
          r.push(new p(c));
          break;
        }
        default:
          throw Error(
            `Unknown protocol set in OTEL_EXPORTER_OTLP_METRICS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${i}`,
          );
      }
    } else if (o === "prometheus") {
      let { PrometheusExporter: i } = await import("./chunk-ng140cw6.js").then(
        (m) => toESM(m.default, 1),
      );
      r.push(new i());
    } else
      throw Error(
        `Unknown exporter type set in OTEL_METRICS_EXPORTER env var: ${o}`,
      );
  let s = be("metrics");
  return r.map((o) => {
    if ("export" in o)
      return new k.PeriodicExportingMetricReader({
        exporter: s(o),
        exportIntervalMillis: t,
      });
    return o;
  });
}
async function bt() {
  let e = ve(a.OTEL_LOGS_EXPORTER),
    t = a.OTEL_EXPORTER_OTLP_LOGS_PROTOCOL || a.OTEL_EXPORTER_OTLP_PROTOCOL,
    r = a.OTEL_EXPORTER_OTLP_ENDPOINT;
  logForDebugging(
    `[3P telemetry] getOtlpLogExporters: types=${jsonStringify(e)}, protocol=${t}, endpoint=${r}`,
  );
  let s = [];
  for (let o of e)
    if (o === "console") s.push(new de());
    else if (o === "otlp") {
      let i = Me("logs");
      switch (t) {
        case "grpc": {
          let { OTLPLogExporter: c } = await import("./chunk-s36v703y.js").then(
            (m) => toESM(m.default, 1),
          );
          s.push(new c());
          break;
        }
        case "http/json": {
          let { OTLPLogExporter: c } = await import("./OTLPLogExporter.cq0wzx2t.js");
          s.push(new c(i));
          break;
        }
        case "http/protobuf": {
          let { OTLPLogExporter: c } = await import("../../02-功能模块/Protobuf-gRPC/OTLPLogExporter.rv1gzm0a.js");
          s.push(new c(i));
          break;
        }
        default:
          throw Error(
            `Unknown protocol set in OTEL_EXPORTER_OTLP_LOGS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${t}`,
          );
      }
    } else
      throw Error(
        `Unknown exporter type set in OTEL_LOGS_EXPORTER env var: ${o}`,
      );
  return s.map(be("logs"));
}
async function It() {
  let e = ve(a.OTEL_TRACES_EXPORTER),
    t = [];
  for (let r of e)
    if (r === "console") t.push(new ce());
    else if (r === "otlp") {
      let s =
          a.OTEL_EXPORTER_OTLP_TRACES_PROTOCOL || a.OTEL_EXPORTER_OTLP_PROTOCOL,
        o = Me("traces");
      switch (s) {
        case "grpc": {
          let { OTLPTraceExporter: i } =
            await import("./chunk-dek1vcp3.js").then((m) => toESM(m.default, 1));
          t.push(new i());
          break;
        }
        case "http/json": {
          let { OTLPTraceExporter: i } = await import("./OTLPTraceExporter.dggrqe01.js");
          t.push(new i(o));
          break;
        }
        case "http/protobuf": {
          let { OTLPTraceExporter: i } = await import("../../02-功能模块/Protobuf-gRPC/OTLPTraceExporter.pre219yw.js");
          t.push(new i(o));
          break;
        }
        default:
          throw Error(
            `Unknown protocol set in OTEL_EXPORTER_OTLP_TRACES_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${s}`,
          );
      }
    } else
      throw Error(
        `Unknown exporter type set in OTEL_TRACES_EXPORTER env var: ${r}`,
      );
  return t.map(be("traces"));
}
function Mt() {
  return Ie(process.env.CLAUDE_CODE_ENABLE_TELEMETRY);
}
function Nt() {
  let e = getFeatureValue_CACHED_MAY_BE_STALE("tengu_cozy_dusk", Ae);
  return typeof e === "number" && Number.isFinite(e)
    ? Math.min(Math.max(e, Ae), wt)
    : Ae;
}
function Dt(e) {
  let t = new Oe({ storageV5: e });
  return (
    registerCleanup(() => t.armShutdownReport()),
    new k.PeriodicExportingMetricReader({
      exporter: t,
      exportIntervalMillis: Nt(),
    })
  );
}
function Bt() {
  if (isNonessentialTrafficRestricted()) return !1;
  let e = getSubscriptionType(),
    t = isClaudeAISubscriber() && (e === "enterprise" || e === "team");
  return cge() || t;
}
async function initializeTelemetry(e) {
  if (
    (profileCheckpoint("telemetry_init_start"),
    yt(),
    await xt(),
    C.propagation.setGlobalPropagator(new le.W3CTraceContextPropagator()),
    getHasFormattedOutput())
  )
    for (let p of [
      "OTEL_METRICS_EXPORTER",
      "OTEL_LOGS_EXPORTER",
      "OTEL_TRACES_EXPORTER",
    ]) {
      let u = process.env[p];
      if (u?.includes("console"))
        process.env[p] = u
          .split(",")
          .map((d) => d.trim())
          .filter((d) => d !== "console")
          .join(",");
    }
  (C.diag.setLogger(
    new OtelDiagLogger(),
    a.CLAUDE_CODE_IS_COWORK ? C.DiagLogLevel.WARN : C.DiagLogLevel.ERROR,
  ),
    logPerfettoTracingInit());
  let t = [],
    r = Mt(),
    s = r ? ve(a.OTEL_METRICS_EXPORTER) : [];
  if (
    (logForDebugging(
      `[3P telemetry] isTelemetryEnabled=${r} (CLAUDE_CODE_ENABLE_TELEMETRY=${process.env.CLAUDE_CODE_ENABLE_TELEMETRY})`,
    ),
    r)
  )
    t.push(...(await vt(s)));
  if (Bt()) t.push(Dt(e));
  let o = st();
  if (isDetailedTracingEnabled()) {
    if (!d_e()) nt();
    let p = new k.MeterProvider({ resource: o, views: [], readers: t });
    return (
      ZXt(p),
      registerCleanup(async () => {
        let d = a.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS ?? 2000;
        try {
          endInteractionSpan();
          let m = oHt(),
            O = d_e(),
            E = [p.shutdown()];
          if (m) E.push(m.forceFlush().then(() => m.shutdown()));
          if (O) E.push(O.forceFlush().then(() => O.shutdown()));
          await Promise.race([
            Promise.all(E),
            Ce(d, "OpenTelemetry shutdown timeout"),
          ]);
        } catch {}
      }),
      {
        meter: p.getMeter(
          "com.anthropic.claude_code",
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.263",
            FEEDBACK_CHANNEL:
              "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-09-06T01:08:56Z",
            GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
            HOOKS_WORKER_URL:
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "darwin",
          }.VERSION,
        ),
        metricsExporterKinds: s,
      }
    );
  }
  let i = new k.MeterProvider({ resource: o, views: [], readers: t });
  if ((ZXt(i), r)) {
    let p = await bt();
    if (
      (logForDebugging(`[3P telemetry] Created ${p.length} log exporter(s)`), p.length > 0)
    ) {
      let u = new OtelLoggerProvider({
        resource: o,
        processors: p.map(
          (m) =>
            new OtelBatchLogRecordProcessor(m, {
              scheduledDelayMillis: a.OTEL_LOGS_EXPORT_INTERVAL ?? rt,
            }),
        ),
      });
      (otelLogsApi.setGlobalLoggerProvider(u), XXt(u));
      let d = u.getLogger(
        "com.anthropic.claude_code.events",
        {
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
        }.VERSION,
      );
      (JXt(d, "org"),
        logForDebugging("[3P telemetry] Event logger set successfully"),
        process.on("beforeExit", async () => {
          (await u?.forceFlush(), await d_e()?.forceFlush());
        }),
        process.on("exit", () => {
          (u?.forceFlush(), d_e()?.forceFlush());
        }));
    }
  }
  if (r && isEnhancedTelemetryBetaEnabled()) {
    let p = await It();
    if (p.length > 0) {
      let u = p.map(
          (m) =>
            new z(m, {
              scheduledDelayMillis: a.OTEL_TRACES_EXPORT_INTERVAL ?? ot,
            }),
        ),
        d = new Z({ resource: o, spanProcessors: u });
      (C.trace.setGlobalTracerProvider(d),
        eYt(d),
        process.on("beforeExit", async () => {
          await d.forceFlush();
        }));
    }
  }
  return (
    registerCleanup(async () => {
      let p = a.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS ?? 2000;
      try {
        endInteractionSpan();
        let u = [i.shutdown()],
          d = oHt();
        if (d) u.push(d.shutdown());
        let m = d_e();
        if (m) u.push(m.shutdown());
        await Promise.race([
          Promise.all(u),
          Ce(p, "OpenTelemetry shutdown timeout"),
        ]);
      } catch (u) {
        if (u instanceof Error && u.message.includes("timeout"))
          logForDebugging(
            `
OpenTelemetry telemetry flush timed out after ${p}ms

To resolve this issue, you can:
1. Increase the timeout by setting CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS env var (e.g., 5000 for 5 seconds)
2. Check if your OpenTelemetry backend is experiencing scalability issues
3. Disable OpenTelemetry by unsetting CLAUDE_CODE_ENABLE_TELEMETRY env var

Current timeout: ${p}ms
`,
            { level: "error" },
          );
        throw u;
      }
    }),
    {
      meter: i.getMeter(
        "com.anthropic.claude_code",
        {
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
        }.VERSION,
      ),
      metricsExporterKinds: s,
    }
  );
}
async function flushTelemetry() {
  let e = ADn();
  if (!e) return;
  let t = a.CLAUDE_CODE_OTEL_FLUSH_TIMEOUT_MS ?? 5000;
  try {
    let r = [e.forceFlush()],
      s = oHt();
    if (s) r.push(s.forceFlush());
    let o = d_e();
    if (o) r.push(o.forceFlush());
    (await Promise.race([Promise.all(r), Ce(t, "OpenTelemetry flush timeout")]),
      logForDebugging("Telemetry flushed successfully"));
  } catch (r) {
    if (r instanceof xe)
      logForDebugging(
        `Telemetry flush timed out after ${t}ms. Some metrics may not be exported.`,
        { level: "warn" },
      );
    else logForDebugging(`Telemetry flush failed: ${l(r)}`, { level: "error" });
  }
}
function Ut() {
  let e = {},
    t = a.OTEL_EXPORTER_OTLP_HEADERS;
  if (t)
    for (let r of t.split(",")) {
      let [s, ...o] = r.split("=");
      if (s && o.length > 0) e[s.trim()] = o.join("=").trim();
    }
  return e;
}
function Me(e) {
  let t = getSettings_DEPRECATED(),
    r = {},
    s = ns();
  if (fv(s)) {
    let c = s.url;
    return (
      (r.url = `${c}/v1/${e}`),
      (r.headers = async () => {
        await refreshGatewayCredentialIfNeeded();
        let p = ns();
        if (!p || p.url !== c) return {};
        return { Authorization: `Bearer ${p.jwt}` };
      }),
      (r.httpAgentOptions = ye(c)),
      r
    );
  }
  let o = Ut(),
    i = kt(e, !!t?.otelHeadersHelper);
  if (t?.otelHeadersHelper)
    r.headers = async () => {
      let c = await getOtelHeadersFromHelper();
      return { ...o, ...c };
    };
  else if (i.send)
    return (
      (r.url = i.url),
      (r.headers = i.headers),
      (r.httpAgentOptions = ye(i.url)),
      r
    );
  else if (Object.keys(o).length > 0) r.headers = async () => o;
  return (
    (r.httpAgentOptions = ye(
      process.env[`OTEL_EXPORTER_OTLP_${e.toUpperCase()}_ENDPOINT`]?.trim() ||
        a.OTEL_EXPORTER_OTLP_ENDPOINT,
    )),
    r
  );
}
function kt(e, t) {
  let r = { send: !1 },
    s = (E) => {
      let _ = E ? decodeTokenClaims(E) : null,
        R = _ !== null && typeof _ === "object" && "aud" in _ ? _.aud : void 0;
      return (
        R === "claude-gateway" ||
        (Array.isArray(R) && R.includes("claude-gateway"))
      );
    },
    o = (E) => {
      try {
        if (!E || !new URL(E).host) return null;
        let _ = new URL(`${E.replace(/\/+$/, "")}/v1/${e}`);
        return (_.protocol === "https:" ||
          (_.protocol === "http:" && it(_.href))) &&
          !_.search &&
          !_.hash
          ? _.href
          : null;
      } catch {
        return null;
      }
    };
  if (!isHostManagedProviderAuth()) return r;
  let i = getAPIProvider();
  if (i !== "firstParty" && i !== "gateway") return r;
  if (!s(a.ANTHROPIC_AUTH_TOKEN)) return r;
  let c = { metrics: "METRICS", logs: "LOGS", traces: "TRACES" }[e],
    p = () =>
      !!a.OTEL_EXPORTER_OTLP_HEADERS || !!a[`OTEL_EXPORTER_OTLP_${c}_HEADERS`];
  if (t || p()) return r;
  let u = o(a.ANTHROPIC_BASE_URL);
  if (!u) return r;
  let d = a.OTEL_EXPORTER_OTLP_ENDPOINT,
    m =
      a[`OTEL_EXPORTER_OTLP_${c}_ENDPOINT`] ??
      (d && `${d}${d.endsWith("/") ? "" : "/"}v1/${e}`),
    O = null;
  try {
    O = m ? new URL(m).href : null;
  } catch {}
  if (O !== u) return r;
  return {
    send: !0,
    url: u,
    headers: async () => {
      let E = a.ANTHROPIC_AUTH_TOKEN;
      return E && s(E) && o(a.ANTHROPIC_BASE_URL) === u && !p()
        ? { Authorization: `Bearer ${E}` }
        : {};
    },
  };
}
function it(e) {
  if (!e) return !1;
  try {
    let t = new URL(e).hostname.toLowerCase();
    return (
      t === "localhost" ||
      t === "::1" ||
      t === "[::1]" ||
      /^127(\.\d{1,3}){3}$/.test(t)
    );
  } catch {
    return !1;
  }
}
function et(e, t) {
  if (Buffer.isBuffer(e)) return e;
  if (typeof e === "string")
    return typeof t === "string" ? Buffer.from(e, t) : Buffer.from(e);
  if (e instanceof Uint8Array) return Buffer.from(e);
  throw TypeError("OTLP request body chunk is not string or Uint8Array");
}
function we(e) {
  let t = e,
    r = t.addRequest.bind(t);
  return (
    (t.addRequest = function (o, ...i) {
      if (!o.getHeader("content-length") && !o.getHeader("transfer-encoding")) {
        let d = function () {
            ((o.write = p), (o.end = u));
          },
          m = function (O) {
            (d(),
              o.destroy(
                O instanceof Error
                  ? O
                  : TypeError("OTLP request body chunk conversion failed"),
              ));
          },
          c = [],
          p = o.write.bind(o),
          u = o.end.bind(o);
        ((o.write = function (E, _, R) {
          try {
            c.push(et(E, _));
          } catch (Q) {
            return (m(Q), !1);
          }
          let F = typeof _ === "function" ? _ : R;
          if (F) process.nextTick(F, null);
          return !0;
        }),
          (o.end = function (E, _, R) {
            if (E != null && typeof E !== "function")
              try {
                c.push(et(E, _));
              } catch (W) {
                return (m(W), o);
              }
            let F =
                typeof E === "function" ? E : typeof _ === "function" ? _ : R,
              Q = Buffer.concat(c);
            if (!o.headersSent)
              o.setHeader("Content-Length", String(Q.byteLength));
            return (d(), u(Q, F));
          }));
      }
      r(o, ...i);
    }),
    e
  );
}
function ye(e) {
  let t = getUsableProxyUrl(),
    r = !!(t && !it(e) && !(e && shouldBypassProxy(e))),
    s = RDn(r);
  if (s) return s;
  let o = getMTLSConfig(),
    i = getCACertificates(),
    c = { ...o, ...(i && { ca: i }) },
    p,
    u,
    d,
    m = (O) => {
      if (r) {
        if (!d)
          ((d = we(
            new tt.HttpsProxyAgent(t, { ...c, keepAlive: !0, maxSockets: 1 }),
          )),
            (d.options = { ...d.options, ...c }));
        return d;
      }
      if (O === "http:") {
        if (!p) p = we(new Pt.Agent({ keepAlive: !0, maxSockets: 1 }));
        return p;
      }
      if (!u) u = we(new Lt.Agent({ ...c, keepAlive: !0, maxSockets: 1 }));
      return u;
    };
  return (kDn(r, m), m);
}
export { flushTelemetry, initializeTelemetry };
