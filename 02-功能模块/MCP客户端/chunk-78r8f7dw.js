// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  rGe,
  qIe,
  cce,
  oGe,
  uce,
  zIe,
  Fct,
  sGe,
  kSe,
  VA,
  Grn,
  $ct,
  Uct,
  DLt,
  VIe,
  Bct,
  lI,
  KIe,
  KA,
  lM,
  cM,
  jct,
  DS,
  xSe,
  Wct,
  Gct,
  iGe,
  aGe,
  c2,
  qrn,
  qct,
  LLt,
  zct,
  MLt,
  HSe,
  dce,
  pce,
  NLt,
  FLt,
  $Lt,
  ULt,
  Vct,
  ISe,
  XIe,
  Kct,
  BLt,
  xee,
  Xct,
  jLt,
  WLt,
  Yct,
  GLt,
  PSe,
  OSe,
  Jct,
  Qct,
  Zct,
  DSe,
  fce,
  LSe,
  YIe,
  qLt,
  Hee,
  zLt,
  JIe,
  lGe,
  VLt,
  KLt,
  XLt,
  YLt,
  JLt,
  QLt,
  ZLt,
  eMt,
  eut,
  tMt,
  nMt,
  rMt,
  oMt,
  sMt,
  iMt,
  aMt,
  lMt,
  cMt,
  QIe,
  uMt,
  ZIe,
  dMt,
  pMt,
  cGe,
  uGe,
  dGe,
  fMt,
  mMt,
  gMt,
  pGe,
  hMt,
  _Mt,
  yMt,
  SMt,
  bMt,
  MSe,
  wMt,
  NSe,
  mce,
  fGe,
  TMt,
  EMt,
  AMt,
  tut,
  nut,
  CMt,
  vMt,
  RMt,
  kMt,
  xMt,
  HMt,
  IMt,
  PMt,
  OMt,
  ePe,
  DMt,
  LMt,
  MMt,
  NMt,
  FMt,
  rut,
  mGe,
  gGe,
  out,
  sut,
  iut,
  $Mt,
  aut,
  lut,
  UMt,
  BMt,
  cut,
  hGe,
  tPe,
  nPe,
  jMt,
  WMt,
  GMt,
  qMt,
  zMt,
  VMt,
  KMt,
  XMt,
  YMt,
  JMt,
  QMt,
  ZMt,
  eNt,
  zrn,
  tNt,
  FSe,
  Vrn,
  rPe,
  Krn,
  Xrn,
  _Ge,
  Yrn,
  Jrn,
  Qrn,
  Zrn,
  eon,
  $Se,
  ton,
  non,
  ron,
  oon,
  son,
  ion,
  uut,
  gce,
  nNt,
  USe,
  BSe,
  rNt,
  jSe,
  oNt,
  sNt,
  dut,
  aon,
  lon,
} from "./chunk-5wa92x7d.js";
import { generatePkceChallenge } from "../认证-OAuth登录/pkce-challenge.js";
import { hce } from "../../00-第三方库/_未识别/第三方库-Nodepolyfill/chunk-5y6047zm.js";
import { RGe } from "../../00-第三方库/_未识别/第三方库-其他/chunk-10wtfjv0.js";
import {
  yhe,
  lW,
  gIn,
  w7t,
  s,
  ncr,
  Nke,
  T,
  O,
  Uf,
  se,
  v,
  c,
  it,
  $e,
  Ko,
  cW,
  fe,
  X,
  k,
  Ho,
  Hb,
  ai,
} from "../../00-第三方库/zod/zod.5ef0bk11.js";
var {
    create: _o,
    defineProperty: pr,
    getOwnPropertyDescriptor: vo,
    getOwnPropertyNames: yo,
    getPrototypeOf: bo,
  } = Object,
  Ro = Object.prototype.hasOwnProperty,
  K = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  vs = (e, t) => {
    let r = {};
    for (var a in e) pr(r, a, { get: e[a], enumerable: !0 });
    if (t) pr(r, Symbol.toStringTag, { value: "Module" });
    return r;
  },
  wo = (e, t, r, a) => {
    if ((t && typeof t === "object") || typeof t === "function") {
      for (var o = yo(t), n = 0, i = o.length, u; n < i; n++)
        if (((u = o[n]), !Ro.call(e, u) && u !== r))
          pr(e, u, {
            get: ((l) => t[l]).bind(null, u),
            enumerable: !(a = vo(t, u)) || a.enumerable,
          });
    }
    return e;
  },
  Sr = (e, t, r) => (
    (r = e != null ? _o(bo(e)) : {}),
    wo(
      t || !e || !e.__esModule
        ? pr(r, "default", { value: e, enumerable: !0 })
        : r,
      e,
    )
  );
var xr = Symbol.for("mcp.sdk.errorBrands");
function et(e, t) {
  let r = new Set(),
    a = t;
  while (typeof a === "function") {
    let o = a.mcpBrand;
    if (
      Object.prototype.hasOwnProperty.call(a, "mcpBrand") &&
      typeof o === "string"
    )
      r.add(o);
    a = Object.getPrototypeOf(a);
  }
  if (r.size === 0) return;
  Object.defineProperty(e, xr, { value: r, enumerable: !1, configurable: !0 });
}
function Te(e, t) {
  try {
    if (
      typeof t === "object" &&
      t !== null &&
      Object.prototype.hasOwnProperty.call(e, "mcpBrand") &&
      typeof e.mcpBrand === "string" &&
      Object.prototype.hasOwnProperty.call(t, xr)
    ) {
      let r = t[xr];
      if (r && typeof r.has === "function" && r.has(e.mcpBrand)) return !0;
    }
  } catch {}
  return Function.prototype[Symbol.hasInstance].call(e, t);
}
var OAuthErrorCode = (function (e) {
    return (
      (e.InvalidRequest = "invalid_request"),
      (e.InvalidClient = "invalid_client"),
      (e.InvalidGrant = "invalid_grant"),
      (e.UnauthorizedClient = "unauthorized_client"),
      (e.UnsupportedGrantType = "unsupported_grant_type"),
      (e.InvalidScope = "invalid_scope"),
      (e.AccessDenied = "access_denied"),
      (e.ServerError = "server_error"),
      (e.TemporarilyUnavailable = "temporarily_unavailable"),
      (e.UnsupportedResponseType = "unsupported_response_type"),
      (e.UnsupportedTokenType = "unsupported_token_type"),
      (e.InvalidToken = "invalid_token"),
      (e.MethodNotAllowed = "method_not_allowed"),
      (e.TooManyRequests = "too_many_requests"),
      (e.InvalidClientMetadata = "invalid_client_metadata"),
      (e.InvalidRedirectUri = "invalid_redirect_uri"),
      (e.InsufficientScope = "insufficient_scope"),
      (e.InvalidTarget = "invalid_target"),
      e
    );
  })({}),
  OAuthError = class e extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.OAuthError" });
    }
    static [Symbol.hasInstance](t) {
      return Te(this, t);
    }
    static isInstance(t) {
      if (typeof this !== "function")
        throw TypeError(
          "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`",
        );
      return Te(this, t);
    }
    constructor(t, r, a) {
      super(r);
      ((this.code = t),
        (this.errorUri = a),
        (this.name = "OAuthError"),
        et(this, new.target));
    }
    toResponseObject() {
      let t = { error: this.code, error_description: this.message };
      if (this.errorUri) t.error_uri = this.errorUri;
      return t;
    }
    static fromResponse(t) {
      return new e(t.error, t.error_description ?? t.error, t.error_uri);
    }
  },
  ProtocolErrorCode = (function (e) {
    return (
      (e.NotConnected = "NOT_CONNECTED"),
      (e.AlreadyConnected = "ALREADY_CONNECTED"),
      (e.NotInitialized = "NOT_INITIALIZED"),
      (e.CapabilityNotSupported = "CAPABILITY_NOT_SUPPORTED"),
      (e.RequestTimeout = "REQUEST_TIMEOUT"),
      (e.ConnectionClosed = "CONNECTION_CLOSED"),
      (e.SendFailed = "SEND_FAILED"),
      (e.InvalidResult = "INVALID_RESULT"),
      (e.UnsupportedResultType = "UNSUPPORTED_RESULT_TYPE"),
      (e.InputRequiredRoundsExceeded = "INPUT_REQUIRED_ROUNDS_EXCEEDED"),
      (e.ListPaginationExceeded = "LIST_PAGINATION_EXCEEDED"),
      (e.MethodNotSupportedByProtocolVersion =
        "METHOD_NOT_SUPPORTED_BY_PROTOCOL_VERSION"),
      (e.EraNegotiationFailed = "ERA_NEGOTIATION_FAILED"),
      (e.ClientHttpNotImplemented = "CLIENT_HTTP_NOT_IMPLEMENTED"),
      (e.ClientHttpAuthentication = "CLIENT_HTTP_AUTHENTICATION"),
      (e.ClientHttpForbidden = "CLIENT_HTTP_FORBIDDEN"),
      (e.ClientHttpUnexpectedContent = "CLIENT_HTTP_UNEXPECTED_CONTENT"),
      (e.ClientHttpFailedToOpenStream = "CLIENT_HTTP_FAILED_TO_OPEN_STREAM"),
      (e.ClientHttpFailedToTerminateSession =
        "CLIENT_HTTP_FAILED_TO_TERMINATE_SESSION"),
      e
    );
  })({}),
  SdkError = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkError" });
    }
    static [Symbol.hasInstance](e) {
      return Te(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function")
        throw TypeError(
          "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`",
        );
      return Te(this, e);
    }
    constructor(e, t, r) {
      super(t);
      ((this.code = e),
        (this.data = r),
        (this.name = "SdkError"),
        et(this, new.target));
    }
  },
  SdkHttpError = class extends SdkError {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkHttpError" });
    }
    constructor(e, t, r) {
      super(e, t, r);
      this.name = "SdkHttpError";
    }
    get status() {
      return this.data.status;
    }
    get statusText() {
      return this.data.statusText;
    }
  };
function Vs(e) {
  let t = typeof e === "string" ? new URL(e) : new URL(e.href);
  return ((t.hash = ""), t);
}
function Fs({ requestedResource: e, configuredResource: t }) {
  let r = typeof e === "string" ? new URL(e) : new URL(e.href),
    a = typeof t === "string" ? new URL(t) : new URL(t.href);
  if (r.origin !== a.origin) return !1;
  if (r.pathname.length < a.pathname.length) return !1;
  let o = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/",
    n = a.pathname.endsWith("/") ? a.pathname : a.pathname + "/";
  return o.startsWith(n);
}
var Hs = "2026-07-28",
  Wr = [Hs];
function Ae(e) {
  return e >= Hs;
}
function Yr(e) {
  return e.filter((t) => !Ae(t));
}
function Bt(e) {
  return e.filter((t) => Ae(t));
}
function xs(e) {
  let t = e.structuredContent;
  if (t === void 0) return e;
  if (!(typeof t !== "object" || t === null || Array.isArray(t))) return e;
  if (e.content?.some((r) => r.type === "text") ?? !1) return e;
  return {
    ...e,
    content: [...(e.content ?? []), { type: "text", text: JSON.stringify(t) }],
  };
}
var Ks = ["task", "inputRequests", "requestState"];
function $o(e) {
  if (
    e === null ||
    typeof e !== "object" ||
    Array.isArray(e) ||
    e.content !== void 0 ||
    Ks.some((t) => t in e)
  )
    return e;
  return { ...e, content: [] };
}
function Eo() {
  let e = Hb(() => $e([s(), T(), O(), Uf(), fe(s(), e), v(e)])),
    t = fe(s(), e),
    r = $e([s(), T().int()]),
    a = s(),
    o = c({ ttl: T().optional() }),
    n = c({ taskId: s() }),
    i = it({
      progressToken: r.optional(),
      "io.modelcontextprotocol/related-task": n.optional(),
    }),
    u = c({ _meta: i.optional() }),
    l = u.extend({ task: o.optional() }),
    d = c({ method: s(), params: u.loose().optional() }),
    m = c({ _meta: i.optional() }),
    _ = c({ method: s(), params: m.loose().optional() }),
    P = it({ _meta: i.optional() }),
    z = $e([s(), T().int()]),
    y = P.strict(),
    b = m.extend({ requestId: z.optional(), reason: s().optional() }),
    f = _.extend({ method: k("notifications/cancelled"), params: b }),
    h = c({
      src: s(),
      mimeType: s().optional(),
      sizes: v(s()).optional(),
      theme: X(["light", "dark"]).optional(),
    }),
    g = c({ icons: v(h).optional() }),
    p = c({ name: s(), title: s().optional() }),
    w = p.extend({
      ...p.shape,
      ...g.shape,
      version: s(),
      websiteUrl: s().optional(),
      description: s().optional(),
    }),
    C = cW(c({ applyDefaults: O().optional() }), t),
    R = ai(
      (ye) => {
        if (
          ye &&
          typeof ye === "object" &&
          !Array.isArray(ye) &&
          Object.keys(ye).length === 0
        )
          return { form: {} };
        return ye;
      },
      cW(c({ form: C.optional(), url: t.optional() }), t.optional()),
    ),
    S = it({
      list: t.optional(),
      cancel: t.optional(),
      requests: it({
        sampling: it({ createMessage: t.optional() }).optional(),
        elicitation: it({ create: t.optional() }).optional(),
      }).optional(),
    }),
    q = it({
      list: t.optional(),
      cancel: t.optional(),
      requests: it({ tools: it({ call: t.optional() }).optional() }).optional(),
    }),
    L = c({
      experimental: fe(s(), t).optional(),
      sampling: c({ context: t.optional(), tools: t.optional() }).optional(),
      elicitation: R.optional(),
      roots: c({ listChanged: O().optional() }).optional(),
      tasks: S.optional(),
      extensions: fe(s(), t).optional(),
    }),
    x = u.extend({ protocolVersion: s(), capabilities: L, clientInfo: w }),
    j = d.extend({ method: k("initialize"), params: x }),
    F = c({
      experimental: fe(s(), t).optional(),
      logging: t.optional(),
      completions: t.optional(),
      prompts: c({ listChanged: O().optional() }).optional(),
      resources: c({
        subscribe: O().optional(),
        listChanged: O().optional(),
      }).optional(),
      tools: c({ listChanged: O().optional() }).optional(),
      tasks: q.optional(),
      extensions: fe(s(), t).optional(),
    }),
    B = P.extend({
      protocolVersion: s(),
      capabilities: F,
      serverInfo: w,
      instructions: s().optional(),
    }),
    G = _.extend({
      method: k("notifications/initialized"),
      params: m.optional(),
    }),
    ae = d.extend({ method: k("ping"), params: u.optional() }),
    le = c({ progress: T(), total: Ho(T()), message: Ho(s()) }),
    ie = c({ ...m.shape, ...le.shape, progressToken: r }),
    me = _.extend({ method: k("notifications/progress"), params: ie }),
    oe = u.extend({ cursor: a.optional() }),
    M = d.extend({ params: oe.optional() }),
    U = P.extend({ nextCursor: a.optional() }),
    H = c({ uri: s(), mimeType: Ho(s()), _meta: fe(s(), se()).optional() }),
    E = H.extend({ text: s() }),
    N = s().refine(
      (ye) => {
        try {
          return (atob(ye), !0);
        } catch {
          return !1;
        }
      },
      { message: "Invalid Base64 string" },
    ),
    A = H.extend({ blob: N }),
    J = X(["user", "assistant"]),
    W = c({
      audience: v(J).optional(),
      priority: T().min(0).max(1).optional(),
      lastModified: lW({ offset: !0 }).optional(),
    }),
    re = c({
      ...p.shape,
      ...g.shape,
      uri: s(),
      description: Ho(s()),
      mimeType: Ho(s()),
      size: Ho(T()),
      annotations: W.optional(),
      _meta: Ho(it({})),
    }),
    Q = c({
      ...p.shape,
      ...g.shape,
      uriTemplate: s(),
      description: Ho(s()),
      mimeType: Ho(s()),
      annotations: W.optional(),
      _meta: Ho(it({})),
    }),
    ce = M.extend({ method: k("resources/list") }),
    be = U.extend({ resources: v(re) }),
    I = M.extend({ method: k("resources/templates/list") }),
    D = U.extend({ resourceTemplates: v(Q) }),
    V = u.extend({ uri: s() }),
    Y = V,
    Z = d.extend({ method: k("resources/read"), params: Y }),
    ee = P.extend({ contents: v($e([E, A])) }),
    de = _.extend({
      method: k("notifications/resources/list_changed"),
      params: m.optional(),
    }),
    Se = V,
    _e = d.extend({ method: k("resources/subscribe"), params: Se }),
    pe = V,
    ue = d.extend({ method: k("resources/unsubscribe"), params: pe }),
    ze = m.extend({ uri: s() }),
    ge = _.extend({ method: k("notifications/resources/updated"), params: ze }),
    Ne = c({ name: s(), description: Ho(s()), required: Ho(O()) }),
    ke = c({
      ...p.shape,
      ...g.shape,
      description: Ho(s()),
      arguments: Ho(v(Ne)),
      _meta: Ho(it({})),
    }),
    Me = M.extend({ method: k("prompts/list") }),
    Le = U.extend({ prompts: v(ke) }),
    Ue = u.extend({ name: s(), arguments: fe(s(), s()).optional() }),
    He = d.extend({ method: k("prompts/get"), params: Ue }),
    xe = c({
      type: k("text"),
      text: s(),
      annotations: W.optional(),
      _meta: fe(s(), se()).optional(),
    }),
    Ke = c({
      type: k("image"),
      data: N,
      mimeType: s(),
      annotations: W.optional(),
      _meta: fe(s(), se()).optional(),
    }),
    Je = c({
      type: k("audio"),
      data: N,
      mimeType: s(),
      annotations: W.optional(),
      _meta: fe(s(), se()).optional(),
    }),
    pt = c({
      type: k("tool_use"),
      name: s(),
      id: s(),
      input: fe(s(), se()),
      _meta: fe(s(), se()).optional(),
    }),
    De = c({
      type: k("resource"),
      resource: $e([E, A]),
      annotations: W.optional(),
      _meta: fe(s(), se()).optional(),
    }),
    St = re.extend({ type: k("resource_link") }),
    Ce = $e([xe, Ke, Je, St, De]),
    rt = c({ role: J, content: Ce }),
    st = P.extend({ description: s().optional(), messages: v(rt) }),
    Ge = _.extend({
      method: k("notifications/prompts/list_changed"),
      params: m.optional(),
    }),
    gt = c({
      title: s().optional(),
      readOnlyHint: O().optional(),
      destructiveHint: O().optional(),
      idempotentHint: O().optional(),
      openWorldHint: O().optional(),
    }),
    at = c({
      taskSupport: X(["required", "optional", "forbidden"]).optional(),
    }),
    Be = c({
      ...p.shape,
      ...g.shape,
      description: s().optional(),
      inputSchema: c({
        type: k("object"),
        properties: fe(s(), e).optional(),
        required: v(s()).optional(),
      }).catchall(se()),
      outputSchema: c({
        type: k("object"),
        properties: fe(s(), e).optional(),
        required: v(s()).optional(),
      })
        .catchall(se())
        .optional(),
      annotations: gt.optional(),
      execution: at.optional(),
      _meta: fe(s(), se()).optional(),
    }),
    ot = M.extend({ method: k("tools/list") }),
    nt = U.extend({ tools: v(Be) }),
    ct = P.extend({
      content: v(Ce),
      structuredContent: fe(s(), se()).optional(),
      isError: O().optional(),
    }),
    ve = l.extend({ name: s(), arguments: fe(s(), se()).optional() }),
    _t = d.extend({ method: k("tools/call"), params: ve }),
    Zt = _.extend({
      method: k("notifications/tools/list_changed"),
      params: m.optional(),
    }),
    lt = X([
      "debug",
      "info",
      "notice",
      "warning",
      "error",
      "critical",
      "alert",
      "emergency",
    ]),
    vt = u.extend({ level: lt }),
    yt = d.extend({ method: k("logging/setLevel"), params: vt }),
    bt = m.extend({ level: lt, logger: s().optional(), data: se() }),
    Rt = _.extend({ method: k("notifications/message"), params: bt }),
    wt = c({ name: s().optional() }),
    $t = c({
      hints: v(wt).optional(),
      costPriority: T().min(0).max(1).optional(),
      speedPriority: T().min(0).max(1).optional(),
      intelligencePriority: T().min(0).max(1).optional(),
    }),
    Et = c({ mode: X(["auto", "required", "none"]).optional() }),
    Qt = c({
      type: k("tool_result"),
      toolUseId: s().describe(
        "The unique identifier for the corresponding tool call.",
      ),
      content: v(Ce),
      structuredContent: c({}).loose().optional(),
      isError: O().optional(),
      _meta: fe(s(), se()).optional(),
    }),
    Pt = Ko("type", [xe, Ke, Je]),
    Ve = Ko("type", [xe, Ke, Je, pt, Qt]),
    Tt = c({
      role: J,
      content: $e([Ve, v(Ve)]),
      _meta: fe(s(), se()).optional(),
    }),
    zt = l.extend({
      messages: v(Tt),
      modelPreferences: $t.optional(),
      systemPrompt: s().optional(),
      includeContext: X(["none", "thisServer", "allServers"]).optional(),
      temperature: T().optional(),
      maxTokens: T().int(),
      stopSequences: v(s()).optional(),
      metadata: t.optional(),
      tools: v(Be).optional(),
      toolChoice: Et.optional(),
    }),
    Ct = d.extend({ method: k("sampling/createMessage"), params: zt }),
    kt = P.extend({
      model: s(),
      stopReason: Ho(X(["endTurn", "stopSequence", "maxTokens"]).or(s())),
      role: J,
      content: Pt,
    }),
    qt = P.extend({
      model: s(),
      stopReason: Ho(
        X(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(s()),
      ),
      role: J,
      content: $e([Ve, v(Ve)]),
    }),
    It = c({
      type: k("boolean"),
      title: s().optional(),
      description: s().optional(),
      default: O().optional(),
    }),
    Ot = c({
      type: k("string"),
      title: s().optional(),
      description: s().optional(),
      minLength: T().optional(),
      maxLength: T().optional(),
      format: X(["email", "uri", "date", "date-time"]).optional(),
      default: s().optional(),
    }),
    Nt = c({
      type: X(["number", "integer"]),
      title: s().optional(),
      description: s().optional(),
      minimum: T().optional(),
      maximum: T().optional(),
      default: T().optional(),
    }),
    Mt = c({
      type: k("string"),
      title: s().optional(),
      description: s().optional(),
      enum: v(s()),
      default: s().optional(),
    }),
    jt = c({
      type: k("string"),
      title: s().optional(),
      description: s().optional(),
      oneOf: v(c({ const: s(), title: s() })),
      default: s().optional(),
    }),
    At = c({
      type: k("string"),
      title: s().optional(),
      description: s().optional(),
      enum: v(s()),
      enumNames: v(s()).optional(),
      default: s().optional(),
    }),
    Lt = $e([Mt, jt]),
    We = c({
      type: k("array"),
      title: s().optional(),
      description: s().optional(),
      minItems: T().optional(),
      maxItems: T().optional(),
      items: c({ type: k("string"), enum: v(s()) }),
      default: v(s()).optional(),
    }),
    Ye = c({
      type: k("array"),
      title: s().optional(),
      description: s().optional(),
      minItems: T().optional(),
      maxItems: T().optional(),
      items: c({ anyOf: v(c({ const: s(), title: s() })) }),
      default: v(s()).optional(),
    }),
    er = $e([We, Ye]),
    tr = $e([At, Lt, er]),
    Ee = $e([tr, It, Ot, Nt]),
    Pe = l.extend({
      mode: k("form").optional(),
      message: s(),
      requestedSchema: c({
        type: k("object"),
        properties: fe(s(), Ee),
        required: v(s()).optional(),
      }).catchall(se()),
    }),
    Ut = l.extend({
      mode: k("url"),
      message: s(),
      elicitationId: s(),
      url: s().url(),
    }),
    qe = $e([Pe, Ut]),
    rr = d.extend({ method: k("elicitation/create"), params: qe }),
    sr = m.extend({ elicitationId: s() }),
    ar = _.extend({
      method: k("notifications/elicitation/complete"),
      params: sr,
    }),
    or = P.extend({
      action: X(["accept", "decline", "cancel"]),
      content: ai(
        (ye) => (ye === null ? void 0 : ye),
        fe(s(), $e([s(), T(), O(), v(s())])).optional(),
      ),
    }),
    nr = c({ type: k("ref/resource"), uri: s() }),
    ir = c({ type: k("ref/prompt"), name: s() }),
    cr = u.extend({
      ref: $e([ir, nr]),
      argument: c({ name: s(), value: s() }),
      context: c({ arguments: fe(s(), s()).optional() }).optional(),
    }),
    Dt = d.extend({ method: k("completion/complete"), params: cr }),
    lr = P.extend({
      completion: it({
        values: v(s()).max(100),
        total: Ho(T().int()),
        hasMore: Ho(O()),
      }),
    }),
    ur = c({
      uri: s().startsWith("file://"),
      name: s().optional(),
      _meta: fe(s(), se()).optional(),
    }),
    ut = d.extend({ method: k("roots/list"), params: u.optional() }),
    Vt = P.extend({ roots: v(ur) }),
    dr = _.extend({
      method: k("notifications/roots/list_changed"),
      params: m.optional(),
    }),
    hr = it({ ttl: T().optional(), pollInterval: T().optional() }),
    mr = X(["working", "input_required", "completed", "failed", "cancelled"]),
    Fe = c({
      taskId: s(),
      status: mr,
      ttl: $e([T(), Uf()]),
      createdAt: s(),
      lastUpdatedAt: s(),
      pollInterval: Ho(T()),
      statusMessage: Ho(s()),
    }),
    Re = P.extend({ task: Fe }),
    fr = m.merge(Fe),
    Xe = _.extend({ method: k("notifications/tasks/status"), params: fr }),
    dt = d.extend({
      method: k("tasks/get"),
      params: u.extend({ taskId: s() }),
    }),
    ht = P.merge(Fe),
    mt = d.extend({
      method: k("tasks/result"),
      params: u.extend({ taskId: s() }),
    }),
    Ur = P.loose(),
    we = M.extend({ method: k("tasks/list") }),
    he = U.extend({ tasks: v(Fe) }),
    Ze = d.extend({
      method: k("tasks/cancel"),
      params: u.extend({ taskId: s() }),
    });
  return {
    JSONValueSchema: e,
    JSONObjectSchema: t,
    ProgressTokenSchema: r,
    CursorSchema: a,
    TaskMetadataSchema: o,
    RelatedTaskMetadataSchema: n,
    RequestMetaSchema: i,
    BaseRequestParamsSchema: u,
    TaskAugmentedRequestParamsSchema: l,
    RequestSchema: d,
    NotificationsParamsSchema: m,
    NotificationSchema: _,
    ResultSchema: P,
    RequestIdSchema: z,
    EmptyResultSchema: y,
    CancelledNotificationParamsSchema: b,
    CancelledNotificationSchema: f,
    IconSchema: h,
    IconsSchema: g,
    BaseMetadataSchema: p,
    ImplementationSchema: w,
    ClientTasksCapabilitySchema: S,
    ServerTasksCapabilitySchema: q,
    ClientCapabilitiesSchema: L,
    InitializeRequestParamsSchema: x,
    InitializeRequestSchema: j,
    ServerCapabilitiesSchema: F,
    InitializeResultSchema: B,
    InitializedNotificationSchema: G,
    PingRequestSchema: ae,
    ProgressSchema: le,
    ProgressNotificationParamsSchema: ie,
    ProgressNotificationSchema: me,
    PaginatedRequestParamsSchema: oe,
    PaginatedRequestSchema: M,
    PaginatedResultSchema: U,
    ResourceContentsSchema: H,
    TextResourceContentsSchema: E,
    BlobResourceContentsSchema: A,
    RoleSchema: J,
    AnnotationsSchema: W,
    ResourceSchema: re,
    ResourceTemplateSchema: Q,
    ListResourcesRequestSchema: ce,
    ListResourcesResultSchema: be,
    ListResourceTemplatesRequestSchema: I,
    ListResourceTemplatesResultSchema: D,
    ResourceRequestParamsSchema: V,
    ReadResourceRequestParamsSchema: Y,
    ReadResourceRequestSchema: Z,
    ReadResourceResultSchema: ee,
    ResourceListChangedNotificationSchema: de,
    SubscribeRequestParamsSchema: Se,
    SubscribeRequestSchema: _e,
    UnsubscribeRequestParamsSchema: pe,
    UnsubscribeRequestSchema: ue,
    ResourceUpdatedNotificationParamsSchema: ze,
    ResourceUpdatedNotificationSchema: ge,
    PromptArgumentSchema: Ne,
    PromptSchema: ke,
    ListPromptsRequestSchema: Me,
    ListPromptsResultSchema: Le,
    GetPromptRequestParamsSchema: Ue,
    GetPromptRequestSchema: He,
    TextContentSchema: xe,
    ImageContentSchema: Ke,
    AudioContentSchema: Je,
    ToolUseContentSchema: pt,
    EmbeddedResourceSchema: De,
    ResourceLinkSchema: St,
    ContentBlockSchema: Ce,
    PromptMessageSchema: rt,
    GetPromptResultSchema: st,
    PromptListChangedNotificationSchema: Ge,
    ToolAnnotationsSchema: gt,
    ToolExecutionSchema: at,
    ToolSchema: Be,
    ListToolsRequestSchema: ot,
    ListToolsResultSchema: nt,
    CallToolResultSchema: ct,
    CallToolRequestParamsSchema: ve,
    CallToolRequestSchema: _t,
    ToolListChangedNotificationSchema: Zt,
    LoggingLevelSchema: lt,
    SetLevelRequestParamsSchema: vt,
    SetLevelRequestSchema: yt,
    LoggingMessageNotificationParamsSchema: bt,
    LoggingMessageNotificationSchema: Rt,
    ModelHintSchema: wt,
    ModelPreferencesSchema: $t,
    ToolChoiceSchema: Et,
    ToolResultContentSchema: Qt,
    SamplingContentSchema: Pt,
    SamplingMessageContentBlockSchema: Ve,
    SamplingMessageSchema: Tt,
    CreateMessageRequestParamsSchema: zt,
    CreateMessageRequestSchema: Ct,
    CreateMessageResultSchema: kt,
    CreateMessageResultWithToolsSchema: qt,
    BooleanSchemaSchema: It,
    StringSchemaSchema: Ot,
    NumberSchemaSchema: Nt,
    UntitledSingleSelectEnumSchemaSchema: Mt,
    TitledSingleSelectEnumSchemaSchema: jt,
    LegacyTitledEnumSchemaSchema: At,
    SingleSelectEnumSchemaSchema: Lt,
    UntitledMultiSelectEnumSchemaSchema: We,
    TitledMultiSelectEnumSchemaSchema: Ye,
    MultiSelectEnumSchemaSchema: er,
    EnumSchemaSchema: tr,
    PrimitiveSchemaDefinitionSchema: Ee,
    ElicitRequestFormParamsSchema: Pe,
    ElicitRequestURLParamsSchema: Ut,
    ElicitRequestParamsSchema: qe,
    ElicitRequestSchema: rr,
    ElicitationCompleteNotificationParamsSchema: sr,
    ElicitationCompleteNotificationSchema: ar,
    ElicitResultSchema: or,
    ResourceTemplateReferenceSchema: nr,
    PromptReferenceSchema: ir,
    CompleteRequestParamsSchema: cr,
    CompleteRequestSchema: Dt,
    CompleteResultSchema: lr,
    RootSchema: ur,
    ListRootsRequestSchema: ut,
    ListRootsResultSchema: Vt,
    RootsListChangedNotificationSchema: dr,
    TaskCreationParamsSchema: hr,
    TaskStatusSchema: mr,
    TaskSchema: Fe,
    CreateTaskResultSchema: Re,
    TaskStatusNotificationParamsSchema: fr,
    TaskStatusNotificationSchema: Xe,
    GetTaskRequestSchema: dt,
    GetTaskResultSchema: ht,
    GetTaskPayloadRequestSchema: mt,
    GetTaskPayloadResultSchema: Ur,
    ListTasksRequestSchema: we,
    ListTasksResultSchema: he,
    CancelTaskRequestSchema: Ze,
    CancelTaskResultSchema: P.merge(Fe),
    ClientRequestSchema: $e([
      ae,
      j,
      Dt,
      yt,
      He,
      Me,
      ce,
      I,
      Z,
      _e,
      ue,
      _t,
      ot,
      dt,
      mt,
      we,
      Ze,
    ]),
    ClientNotificationSchema: $e([f, me, G, dr, Xe]),
    ClientResultSchema: $e([y, kt, qt, or, Vt, ht, he, Re]),
    ServerRequestSchema: $e([ae, Ct, rr, ut, dt, mt, we, Ze]),
    ServerNotificationSchema: $e([f, me, Rt, ge, de, Zt, Ge, Xe, ar]),
    ServerResultSchema: $e([y, B, lr, st, Le, be, D, ee, ct, nt, ht, he, Re]),
    CallToolResultWireSchema: se()
      .superRefine((ye, go) => {
        if (
          typeof ye !== "object" ||
          ye === null ||
          Array.isArray(ye) ||
          ye.content !== void 0
        )
          return;
        for (let _s of Ks)
          if (_s in ye) {
            go.addIssue({
              code: "custom",
              message: `content is required when the body carries '${_s}' \u2014 another result family cannot default into an empty tools/call success`,
            });
            return;
          }
      })
      .transform($o)
      .pipe(ct),
  };
}
var Po;
function Js() {
  return (Po ??= Eo());
}
function Gs(e) {
  return e.type !== "object";
}
var To = new Set(["const", "enum", "default", "examples"]),
  zo = new Set([
    "properties",
    "patternProperties",
    "$defs",
    "definitions",
    "dependentSchemas",
  ]);
function Co(e) {
  let t = typeof e.$schema === "string" ? e.$schema : void 0;
  if (e.$id !== void 0)
    return {
      ...(t !== void 0 && { $schema: t }),
      type: "object",
      properties: { result: e },
      required: ["result"],
    };
  let r = (a, o) => {
    if (Array.isArray(a)) return a.map((i) => r(i, !1));
    if (a === null || typeof a !== "object") return a;
    if (!o && a.$id !== void 0) return a;
    let n = {};
    for (let [i, u] of Object.entries(a))
      if (o) n[i] = r(u, !1);
      else if ((i === "$ref" || i === "$dynamicRef") && typeof u === "string")
        n[i] =
          u === "#"
            ? "#/properties/result"
            : u.startsWith("#/")
              ? `#/properties/result${u.slice(1)}`
              : u;
      else if (To.has(i)) n[i] = u;
      else if (zo.has(i)) n[i] = r(u, !0);
      else n[i] = r(u, !1);
    return n;
  };
  return {
    ...(t !== void 0 && { $schema: t }),
    type: "object",
    properties: { result: r(e, !1) },
    required: ["result"],
  };
}
var Bs = {
    ping: null,
    initialize: null,
    "completion/complete": null,
    "logging/setLevel": null,
    "prompts/get": null,
    "prompts/list": null,
    "resources/list": null,
    "resources/templates/list": null,
    "resources/read": null,
    "resources/subscribe": null,
    "resources/unsubscribe": null,
    "tools/call": null,
    "tools/list": null,
    "tasks/get": null,
    "tasks/result": null,
    "tasks/list": null,
    "tasks/cancel": null,
    "sampling/createMessage": null,
    "elicitation/create": null,
    "roots/list": null,
  },
  Ws = {
    "notifications/cancelled": null,
    "notifications/progress": null,
    "notifications/initialized": null,
    "notifications/roots/list_changed": null,
    "notifications/tasks/status": null,
    "notifications/message": null,
    "notifications/resources/updated": null,
    "notifications/resources/list_changed": null,
    "notifications/tools/list_changed": null,
    "notifications/prompts/list_changed": null,
    "notifications/elicitation/complete": null,
  },
  ko = {
    ping: null,
    initialize: null,
    "completion/complete": null,
    "logging/setLevel": null,
    "prompts/get": null,
    "prompts/list": null,
    "resources/list": null,
    "resources/templates/list": null,
    "resources/read": null,
    "resources/subscribe": null,
    "resources/unsubscribe": null,
    "tools/call": null,
    "tools/list": null,
    "sampling/createMessage": null,
    "elicitation/create": null,
    "roots/list": null,
  },
  gr;
function Xr() {
  if (gr) return gr;
  let e = Js();
  return (
    (gr = {
      requestSchemas: {
        ping: e.PingRequestSchema,
        initialize: e.InitializeRequestSchema,
        "completion/complete": e.CompleteRequestSchema,
        "logging/setLevel": e.SetLevelRequestSchema,
        "prompts/get": e.GetPromptRequestSchema,
        "prompts/list": e.ListPromptsRequestSchema,
        "resources/list": e.ListResourcesRequestSchema,
        "resources/templates/list": e.ListResourceTemplatesRequestSchema,
        "resources/read": e.ReadResourceRequestSchema,
        "resources/subscribe": e.SubscribeRequestSchema,
        "resources/unsubscribe": e.UnsubscribeRequestSchema,
        "tools/call": e.CallToolRequestSchema,
        "tools/list": e.ListToolsRequestSchema,
        "tasks/get": e.GetTaskRequestSchema,
        "tasks/result": e.GetTaskPayloadRequestSchema,
        "tasks/list": e.ListTasksRequestSchema,
        "tasks/cancel": e.CancelTaskRequestSchema,
        "sampling/createMessage": e.CreateMessageRequestSchema,
        "elicitation/create": e.ElicitRequestSchema,
        "roots/list": e.ListRootsRequestSchema,
      },
      notificationSchemas: {
        "notifications/cancelled": e.CancelledNotificationSchema,
        "notifications/progress": e.ProgressNotificationSchema,
        "notifications/initialized": e.InitializedNotificationSchema,
        "notifications/roots/list_changed":
          e.RootsListChangedNotificationSchema,
        "notifications/tasks/status": e.TaskStatusNotificationSchema,
        "notifications/message": e.LoggingMessageNotificationSchema,
        "notifications/resources/updated": e.ResourceUpdatedNotificationSchema,
        "notifications/resources/list_changed":
          e.ResourceListChangedNotificationSchema,
        "notifications/tools/list_changed": e.ToolListChangedNotificationSchema,
        "notifications/prompts/list_changed":
          e.PromptListChangedNotificationSchema,
        "notifications/elicitation/complete":
          e.ElicitationCompleteNotificationSchema,
      },
      resultSchemas: {
        ping: e.EmptyResultSchema,
        initialize: e.InitializeResultSchema,
        "completion/complete": e.CompleteResultSchema,
        "logging/setLevel": e.EmptyResultSchema,
        "prompts/get": e.GetPromptResultSchema,
        "prompts/list": e.ListPromptsResultSchema,
        "resources/list": e.ListResourcesResultSchema,
        "resources/templates/list": e.ListResourceTemplatesResultSchema,
        "resources/read": e.ReadResourceResultSchema,
        "resources/subscribe": e.EmptyResultSchema,
        "resources/unsubscribe": e.EmptyResultSchema,
        "tools/call": e.CallToolResultWireSchema,
        "tools/list": e.ListToolsResultSchema,
        "sampling/createMessage": e.CreateMessageResultWithToolsSchema,
        "elicitation/create": e.ElicitResultSchema,
        "roots/list": e.ListRootsResultSchema,
      },
    }),
    gr
  );
}
function Ys(e) {
  return Object.prototype.hasOwnProperty.call(Bs, e);
}
function Xs(e) {
  return Object.prototype.hasOwnProperty.call(Ws, e);
}
function qo(e) {
  return Object.prototype.hasOwnProperty.call(ko, e);
}
function Io(e) {
  return qo(e) ? Xr().resultSchemas[e] : void 0;
}
function Oo(e) {
  return Ys(e) ? Xr().requestSchemas[e] : void 0;
}
function No(e) {
  return Xs(e) ? Xr().notificationSchemas[e] : void 0;
}
var Tl = Object.keys(Bs),
  zl = Object.keys(Ws);
function Kr(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function _r(e, t) {
  if (e === void 0) return { ok: !1, reason: "not-in-era" };
  let r = e.safeParse(t);
  return r.success
    ? { ok: !0, value: r.data }
    : { ok: !1, reason: "invalid", message: String(r.error) };
}
var qs = { ok: !1, reason: "not-in-era" };
function Is(e) {
  return Kr(e) && Kr(e.outputSchema) && Gs(e.outputSchema);
}
function Os(e) {
  return e;
}
var Zr = {
  era: "2025-11-25",
  hasRequestMethod: Ys,
  hasNotificationMethod: Xs,
  validateRequest: (e, t) => _r(Oo(e), t),
  validateResult: (e, t) => _r(Io(e), t),
  validateNotification: (e, t) => _r(No(e), t),
  hasInputRequestMethod: () => !1,
  validateInputRequest: () => qs,
  validateInputResponse: () => qs,
  samplingResultVariant: (e, t) => {
    let r = Js();
    return _r(
      e ? r.CreateMessageResultWithToolsSchema : r.CreateMessageResultSchema,
      t,
    );
  },
  outboundEnvelope: (e) => {
    return;
  },
  validateEnvelopeMeta: (e) => [],
  projectCallToolResult(e, t) {
    let r = xs(e),
      a = r.structuredContent;
    if (a === void 0) return r;
    let o = typeof a !== "object" || a === null || Array.isArray(a),
      n = t !== void 0 && Gs(t);
    if (!o && !n) return r;
    return { ...r, structuredContent: { result: a } };
  },
  decodeResult(e, t) {
    if (Kr(t) && "resultType" in t) {
      let r = { ...t };
      return (delete r.resultType, { kind: "complete", result: Os(r) });
    }
    return { kind: "complete", result: Os(t) };
  },
  encodeResult(e, t) {
    if (e !== "tools/list") return t;
    let r = t.tools;
    if (!Array.isArray(r) || !r.some((a) => Is(a))) return t;
    return {
      ...t,
      tools: r.map((a) =>
        Is(a) ? { ...a, outputSchema: Co(a.outputSchema) } : a,
      ),
    };
  },
  encodeErrorCode: (e) => (e === -32002 ? -32602 : e),
  checkInboundEnvelope: (e) => {
    return;
  },
};
function Mo() {
  let e = Hb(() => $e([s(), T(), O(), Uf(), fe(s(), e), v(e)])),
    t = fe(s(), e),
    r = $e([s(), T().int()]),
    a = s(),
    o = $e([s(), T().int()]),
    n = X(["user", "assistant"]),
    i = X([
      "debug",
      "info",
      "notice",
      "warning",
      "error",
      "critical",
      "alert",
      "emergency",
    ]),
    u = s().refine(
      (he) => {
        try {
          return (atob(he), !0);
        } catch {
          return !1;
        }
      },
      { message: "Invalid Base64 string" },
    ),
    l = c({ ttl: T().optional() }),
    d = c({ taskId: s() }),
    m = it({
      progressToken: r.optional(),
      "io.modelcontextprotocol/related-task": d.optional(),
    }),
    _ = c({ _meta: m.optional() }),
    P = _.extend({ task: l.optional() }),
    z = c({ _meta: m.optional() }),
    y = c({ method: s(), params: z.loose().optional() }),
    b = c({
      src: s(),
      mimeType: s().optional(),
      sizes: v(s()).optional(),
      theme: X(["light", "dark"]).optional(),
    }),
    f = c({ icons: v(b).optional() }),
    h = c({ name: s(), title: s().optional() }),
    g = h.extend({
      ...h.shape,
      ...f.shape,
      version: s(),
      websiteUrl: s().optional(),
      description: s().optional(),
    }),
    p = cW(c({ applyDefaults: O().optional() }), t),
    w = ai(
      (he) => {
        if (
          he &&
          typeof he === "object" &&
          !Array.isArray(he) &&
          Object.keys(he).length === 0
        )
          return { form: {} };
        return he;
      },
      cW(c({ form: p.optional(), url: t.optional() }), t.optional()),
    ),
    C = it({
      list: t.optional(),
      cancel: t.optional(),
      requests: it({
        sampling: it({ createMessage: t.optional() }).optional(),
        elicitation: it({ create: t.optional() }).optional(),
      }).optional(),
    }),
    R = it({
      list: t.optional(),
      cancel: t.optional(),
      requests: it({ tools: it({ call: t.optional() }).optional() }).optional(),
    }),
    S = c({
      experimental: fe(s(), t).optional(),
      sampling: c({ context: t.optional(), tools: t.optional() }).optional(),
      elicitation: w.optional(),
      roots: c({ listChanged: O().optional() }).optional(),
      tasks: C.optional(),
      extensions: fe(s(), t).optional(),
    }),
    q = c({
      experimental: fe(s(), t).optional(),
      logging: t.optional(),
      completions: t.optional(),
      prompts: c({ listChanged: O().optional() }).optional(),
      resources: c({
        subscribe: O().optional(),
        listChanged: O().optional(),
      }).optional(),
      tools: c({ listChanged: O().optional() }).optional(),
      tasks: R.optional(),
      extensions: fe(s(), t).optional(),
    }),
    L = c({ progress: T(), total: Ho(T()), message: Ho(s()) }),
    x = c({ ...z.shape, ...L.shape, progressToken: r }),
    j = y.extend({ method: k("notifications/progress"), params: x }),
    F = z.extend({ level: i, logger: s().optional(), data: se() }),
    B = y.extend({ method: k("notifications/message"), params: F }),
    G = c({ uri: s(), mimeType: Ho(s()), _meta: fe(s(), se()).optional() }),
    ae = G.extend({ text: s() }),
    le = G.extend({ blob: u }),
    ie = c({
      audience: v(n).optional(),
      priority: T().min(0).max(1).optional(),
      lastModified: lW({ offset: !0 }).optional(),
    }),
    me = c({
      ...h.shape,
      ...f.shape,
      uri: s(),
      description: Ho(s()),
      mimeType: Ho(s()),
      size: Ho(T()),
      annotations: ie.optional(),
      _meta: Ho(it({})),
    }),
    oe = c({
      ...h.shape,
      ...f.shape,
      uriTemplate: s(),
      description: Ho(s()),
      mimeType: Ho(s()),
      annotations: ie.optional(),
      _meta: Ho(it({})),
    }),
    M = y.extend({
      method: k("notifications/resources/list_changed"),
      params: z.optional(),
    }),
    U = z.extend({ uri: s() }),
    H = y.extend({ method: k("notifications/resources/updated"), params: U }),
    E = c({ name: s(), description: Ho(s()), required: Ho(O()) }),
    N = c({
      ...h.shape,
      ...f.shape,
      description: Ho(s()),
      arguments: Ho(v(E)),
      _meta: Ho(it({})),
    }),
    A = y.extend({
      method: k("notifications/prompts/list_changed"),
      params: z.optional(),
    }),
    J = c({
      type: k("text"),
      text: s(),
      annotations: ie.optional(),
      _meta: fe(s(), se()).optional(),
    }),
    W = c({
      type: k("image"),
      data: u,
      mimeType: s(),
      annotations: ie.optional(),
      _meta: fe(s(), se()).optional(),
    }),
    re = c({
      type: k("audio"),
      data: u,
      mimeType: s(),
      annotations: ie.optional(),
      _meta: fe(s(), se()).optional(),
    }),
    Q = c({
      type: k("tool_use"),
      name: s(),
      id: s(),
      input: fe(s(), se()),
      _meta: fe(s(), se()).optional(),
    }),
    ce = c({
      type: k("resource"),
      resource: $e([ae, le]),
      annotations: ie.optional(),
      _meta: fe(s(), se()).optional(),
    }),
    be = me.extend({ type: k("resource_link") }),
    I = $e([J, W, re, be, ce]),
    D = c({ role: n, content: I }),
    V = c({
      title: s().optional(),
      readOnlyHint: O().optional(),
      destructiveHint: O().optional(),
      idempotentHint: O().optional(),
      openWorldHint: O().optional(),
    }),
    Y = y.extend({
      method: k("notifications/tools/list_changed"),
      params: z.optional(),
    }),
    Z = c({ name: s().optional() }),
    ee = c({
      hints: v(Z).optional(),
      costPriority: T().min(0).max(1).optional(),
      speedPriority: T().min(0).max(1).optional(),
      intelligencePriority: T().min(0).max(1).optional(),
    }),
    de = c({ mode: X(["auto", "required", "none"]).optional() }),
    Se = c({
      type: k("boolean"),
      title: s().optional(),
      description: s().optional(),
      default: O().optional(),
    }),
    _e = c({
      type: k("string"),
      title: s().optional(),
      description: s().optional(),
      minLength: T().optional(),
      maxLength: T().optional(),
      format: X(["email", "uri", "date", "date-time"]).optional(),
      default: s().optional(),
    }),
    pe = c({
      type: X(["number", "integer"]),
      title: s().optional(),
      description: s().optional(),
      minimum: T().optional(),
      maximum: T().optional(),
      default: T().optional(),
    }),
    ue = c({
      type: k("string"),
      title: s().optional(),
      description: s().optional(),
      enum: v(s()),
      default: s().optional(),
    }),
    ze = c({
      type: k("string"),
      title: s().optional(),
      description: s().optional(),
      oneOf: v(c({ const: s(), title: s() })),
      default: s().optional(),
    }),
    ge = c({
      type: k("string"),
      title: s().optional(),
      description: s().optional(),
      enum: v(s()),
      enumNames: v(s()).optional(),
      default: s().optional(),
    }),
    Ne = $e([ue, ze]),
    ke = c({
      type: k("array"),
      title: s().optional(),
      description: s().optional(),
      minItems: T().optional(),
      maxItems: T().optional(),
      items: c({ type: k("string"), enum: v(s()) }),
      default: v(s()).optional(),
    }),
    Me = c({
      type: k("array"),
      title: s().optional(),
      description: s().optional(),
      minItems: T().optional(),
      maxItems: T().optional(),
      items: c({ anyOf: v(c({ const: s(), title: s() })) }),
      default: v(s()).optional(),
    }),
    Le = $e([ke, Me]),
    Ue = $e([ge, Ne, Le]),
    He = $e([Ue, Se, _e, pe]),
    xe = P.extend({
      mode: k("form").optional(),
      message: s(),
      requestedSchema: c({
        type: k("object"),
        properties: fe(s(), He),
        required: v(s()).optional(),
      }).catchall(se()),
    }),
    Ke = c({ type: k("ref/resource"), uri: s() }),
    Je = c({ type: k("ref/prompt"), name: s() }),
    pt = c({
      uri: s().startsWith("file://"),
      name: s().optional(),
      _meta: fe(s(), se()).optional(),
    }),
    De = S.shape,
    St = c({
      experimental: De.experimental,
      sampling: De.sampling,
      elicitation: De.elicitation,
      roots: De.roots,
      extensions: De.extensions,
    }),
    Ce = q.shape,
    rt = c({
      experimental: Ce.experimental,
      logging: Ce.logging,
      completions: Ce.completions,
      prompts: Ce.prompts,
      resources: Ce.resources,
      tools: Ce.tools,
      extensions: Ce.extensions,
    }),
    st = it({
      progressToken: r.optional(),
      [cce]: s(),
      [oGe]: g.optional(),
      [zIe]: St,
      [sGe]: i.optional(),
    }),
    Ge = c({
      ...h.shape,
      ...f.shape,
      description: s().optional(),
      inputSchema: it({ $schema: s().optional(), type: k("object") }),
      outputSchema: it({ $schema: s().optional() }).optional(),
      annotations: V.optional(),
      _meta: fe(s(), se()).optional(),
    }),
    gt = c({
      type: k("tool_result"),
      toolUseId: s(),
      content: v(I),
      structuredContent: se().optional(),
      isError: O().optional(),
      _meta: fe(s(), se()).optional(),
    }),
    at = $e([J, W, re, Q, gt]),
    Be = c({
      role: n,
      content: $e([at, v(at)]),
      _meta: fe(s(), se()).optional(),
    }),
    ot = s(),
    nt = it({ [uce]: g.optional().catch(void 0) }),
    ct = nt.optional();
  function ve(he) {
    return it({ _meta: ct, resultType: ot.default("complete"), ...he });
  }
  let _t = ve({}),
    Zt = ve({ nextCursor: a.optional() }),
    lt = ve({
      content: v(I),
      structuredContent: se().optional(),
      isError: O().optional(),
    }),
    vt = ve({
      ttlMs: T().int().min(0),
      cacheScope: X(["public", "private"]),
      tools: v(Ge),
      nextCursor: a.optional(),
    }),
    yt = ve({
      ttlMs: T().int().min(0),
      cacheScope: X(["public", "private"]),
      prompts: v(N),
      nextCursor: a.optional(),
    }),
    bt = ve({ description: s().optional(), messages: v(D) }),
    Rt = ve({
      ttlMs: T().int().min(0),
      cacheScope: X(["public", "private"]),
      resources: v(me),
      nextCursor: a.optional(),
    }),
    wt = ve({
      ttlMs: T().int().min(0),
      cacheScope: X(["public", "private"]),
      resourceTemplates: v(oe),
      nextCursor: a.optional(),
    }),
    $t = ve({
      ttlMs: T().int().min(0),
      cacheScope: X(["public", "private"]),
      contents: v($e([ae, le])),
    }),
    Et = ve({
      completion: c({
        values: v(s()).max(100),
        total: T().int().optional(),
        hasMore: O().optional(),
      }).loose(),
    }),
    Qt = ve({ ttlMs: T().int().min(0), cacheScope: X(["public", "private"]) }),
    Pt = ve({
      ttlMs: T().int().min(0).catch(0),
      cacheScope: X(["public", "private"]).catch("private"),
      supportedVersions: v(s()),
      capabilities: rt,
      instructions: s().optional(),
    }),
    Ve = c({
      messages: v(Be),
      modelPreferences: ee.optional(),
      systemPrompt: s().optional(),
      includeContext: X(["none", "thisServer", "allServers"]).optional(),
      temperature: T().optional(),
      maxTokens: T().int(),
      stopSequences: v(s()).optional(),
      metadata: t.optional(),
      tools: v(Ge).optional(),
      toolChoice: de.optional(),
    }),
    Tt = c({ method: k("sampling/createMessage"), params: Ve }),
    zt = c({
      method: k("roots/list"),
      params: c({ _meta: fe(s(), se()).optional() }).optional(),
    }),
    Ct = c({ ...Be.shape, model: s(), stopReason: s().optional() }),
    kt = c({ roots: v(pt) }),
    qt = c({
      action: X(["accept", "decline", "cancel"]),
      content: fe(s(), $e([s(), T(), O(), v(s())])).optional(),
    }),
    It = c({ mode: k("url"), message: s(), url: s().url() }),
    Ot = $e([xe, It]),
    Nt = c({ method: k("elicitation/create"), params: Ot }),
    Mt = $e([Tt, zt, Nt]),
    jt = $e([Ct, kt, qt]),
    At = fe(s(), Mt),
    Lt = fe(s(), jt),
    We = ve({ inputRequests: At.optional(), requestState: s().optional() }),
    Ye = { inputResponses: Lt.optional(), requestState: s().optional() },
    er = c({ _meta: st, ...Ye }),
    tr = it({ progressToken: r.optional() });
  function Ee(he, Ze) {
    return c({ method: k(he), params: c({ _meta: st, ...Ze }) });
  }
  function Pe(he, Ze) {
    return c({
      method: k(he),
      params: c({ _meta: tr.optional(), ...Ze }).optional(),
    });
  }
  let Ut = { name: s(), arguments: fe(s(), se()).optional(), ...Ye },
    qe = { cursor: a.optional() },
    rr = Ee("tools/call", Ut),
    sr = Ee("tools/list", qe),
    ar = Ee("prompts/list", qe),
    or = Ee("prompts/get", {
      name: s(),
      arguments: fe(s(), s()).optional(),
      ...Ye,
    }),
    nr = Ee("resources/list", qe),
    ir = Ee("resources/templates/list", qe),
    cr = Ee("resources/read", { uri: s(), ...Ye }),
    Dt = {
      ref: $e([Je, Ke]),
      argument: c({ name: s(), value: s() }),
      context: c({ arguments: fe(s(), s()).optional() }).optional(),
    },
    lr = Ee("completion/complete", Dt),
    ur = Ee("server/discover", {}),
    ut = c({
      toolsListChanged: O().optional(),
      promptsListChanged: O().optional(),
      resourcesListChanged: O().optional(),
      resourceSubscriptions: v(s()).optional(),
    }),
    Vt = { notifications: ut },
    dr = Ee("subscriptions/listen", Vt),
    hr = nt.extend({ "io.modelcontextprotocol/subscriptionId": o }),
    mr = it({ _meta: hr, resultType: ot.default("complete") }),
    Fe = {
      "tools/call": Pe("tools/call", Ut),
      "tools/list": Pe("tools/list", qe),
      "prompts/get": Pe("prompts/get", {
        name: s(),
        arguments: fe(s(), s()).optional(),
      }),
      "prompts/list": Pe("prompts/list", qe),
      "resources/list": Pe("resources/list", qe),
      "resources/templates/list": Pe("resources/templates/list", qe),
      "resources/read": Pe("resources/read", { uri: s() }),
      "completion/complete": Pe("completion/complete", Dt),
      "server/discover": Pe("server/discover", {}),
      "subscriptions/listen": Pe("subscriptions/listen", Vt),
    };
  function Re(he) {
    return it({ _meta: ct, ...he });
  }
  let fr = {
      "tools/call": Re({
        content: v(I),
        structuredContent: se().optional(),
        isError: O().optional(),
      }),
      "tools/list": Re({
        ttlMs: T().int().min(0),
        cacheScope: X(["public", "private"]),
        tools: v(Ge),
        nextCursor: a.optional(),
      }),
      "prompts/get": Re({ description: s().optional(), messages: v(D) }),
      "prompts/list": Re({
        ttlMs: T().int().min(0),
        cacheScope: X(["public", "private"]),
        prompts: v(N),
        nextCursor: a.optional(),
      }),
      "resources/list": Re({
        ttlMs: T().int().min(0),
        cacheScope: X(["public", "private"]),
        resources: v(me),
        nextCursor: a.optional(),
      }),
      "resources/templates/list": Re({
        ttlMs: T().int().min(0),
        cacheScope: X(["public", "private"]),
        resourceTemplates: v(oe),
        nextCursor: a.optional(),
      }),
      "resources/read": Re({
        ttlMs: T().int().min(0),
        cacheScope: X(["public", "private"]),
        contents: v($e([ae, le])),
      }),
      "completion/complete": Re({
        completion: c({
          values: v(s()).max(100),
          total: T().int().optional(),
          hasMore: O().optional(),
        }).loose(),
      }),
      "server/discover": Re({
        ttlMs: T().int().min(0).catch(0),
        cacheScope: X(["public", "private"]).catch("private"),
        supportedVersions: v(s()),
        capabilities: rt,
        instructions: s().optional(),
      }),
      "subscriptions/listen": Re({}),
    },
    Xe = it({ "io.modelcontextprotocol/subscriptionId": o.optional() }),
    dt = c({
      method: k("notifications/subscriptions/acknowledged"),
      params: c({ _meta: Xe.optional(), notifications: ut }),
    }),
    ht = c({ _meta: Xe.optional(), requestId: o, reason: s().optional() }),
    mt = c({ method: k("notifications/cancelled"), params: ht }),
    Ur = {
      "notifications/cancelled": mt,
      "notifications/progress": j,
      "notifications/message": B,
      "notifications/resources/updated": H,
      "notifications/resources/list_changed": M,
      "notifications/tools/list_changed": Y,
      "notifications/prompts/list_changed": A,
      "notifications/subscriptions/acknowledged": dt,
    },
    we = (he) =>
      c({ jsonrpc: k("2.0"), id: $e([s(), T().int()]), result: he }).strict();
  return {
    JSONValueSchema: e,
    JSONObjectSchema: t,
    ProgressTokenSchema: r,
    CursorSchema: a,
    RequestIdSchema: o,
    RoleSchema: n,
    LoggingLevelSchema: i,
    TaskMetadataSchema: l,
    RelatedTaskMetadataSchema: d,
    RequestMetaSchema: m,
    BaseRequestParamsSchema: _,
    TaskAugmentedRequestParamsSchema: P,
    NotificationsParamsSchema: z,
    NotificationSchema: y,
    IconSchema: b,
    IconsSchema: f,
    BaseMetadataSchema: h,
    ImplementationSchema: g,
    ClientTasksCapabilitySchema: C,
    ServerTasksCapabilitySchema: R,
    ClientCapabilitiesSchema: S,
    ServerCapabilitiesSchema: q,
    ProgressSchema: L,
    ProgressNotificationParamsSchema: x,
    ProgressNotificationSchema: j,
    LoggingMessageNotificationParamsSchema: F,
    LoggingMessageNotificationSchema: B,
    ResourceContentsSchema: G,
    TextResourceContentsSchema: ae,
    BlobResourceContentsSchema: le,
    AnnotationsSchema: ie,
    ResourceSchema: me,
    ResourceTemplateSchema: oe,
    ResourceListChangedNotificationSchema: M,
    ResourceUpdatedNotificationParamsSchema: U,
    ResourceUpdatedNotificationSchema: H,
    PromptArgumentSchema: E,
    PromptSchema: N,
    PromptListChangedNotificationSchema: A,
    TextContentSchema: J,
    ImageContentSchema: W,
    AudioContentSchema: re,
    ToolUseContentSchema: Q,
    EmbeddedResourceSchema: ce,
    ResourceLinkSchema: be,
    ContentBlockSchema: I,
    PromptMessageSchema: D,
    ToolAnnotationsSchema: V,
    ToolListChangedNotificationSchema: Y,
    ModelHintSchema: Z,
    ModelPreferencesSchema: ee,
    ToolChoiceSchema: de,
    BooleanSchemaSchema: Se,
    StringSchemaSchema: _e,
    NumberSchemaSchema: pe,
    UntitledSingleSelectEnumSchemaSchema: ue,
    TitledSingleSelectEnumSchemaSchema: ze,
    LegacyTitledEnumSchemaSchema: ge,
    SingleSelectEnumSchemaSchema: Ne,
    UntitledMultiSelectEnumSchemaSchema: ke,
    TitledMultiSelectEnumSchemaSchema: Me,
    MultiSelectEnumSchemaSchema: Le,
    EnumSchemaSchema: Ue,
    PrimitiveSchemaDefinitionSchema: He,
    ElicitRequestFormParamsSchema: xe,
    ResourceTemplateReferenceSchema: Ke,
    PromptReferenceSchema: Je,
    RootSchema: pt,
    ClientCapabilities2026Schema: St,
    ServerCapabilities2026Schema: rt,
    RequestMetaEnvelopeSchema: st,
    ToolSchema: Ge,
    ToolResultContentSchema: gt,
    SamplingMessageContentBlockSchema: at,
    SamplingMessageSchema: Be,
    ResultTypeSchema: ot,
    ResultMetaSchema: nt,
    ResultSchema: _t,
    PaginatedResultSchema: Zt,
    CallToolResultSchema: lt,
    ListToolsResultSchema: vt,
    ListPromptsResultSchema: yt,
    GetPromptResultSchema: bt,
    ListResourcesResultSchema: Rt,
    ListResourceTemplatesResultSchema: wt,
    ReadResourceResultSchema: $t,
    CompleteResultSchema: Et,
    CacheableResultSchema: Qt,
    DiscoverResultSchema: Pt,
    CreateMessageRequestParamsSchema: Ve,
    CreateMessageRequestSchema: Tt,
    ListRootsRequestSchema: zt,
    CreateMessageResultSchema: Ct,
    ListRootsResultSchema: kt,
    ElicitResultSchema: qt,
    ElicitRequestURLParamsSchema: It,
    ElicitRequestParamsSchema: Ot,
    ElicitRequestSchema: Nt,
    InputRequestSchema: Mt,
    InputResponseSchema: jt,
    InputRequestsSchema: At,
    InputResponsesSchema: Lt,
    InputRequiredResultSchema: We,
    InputResponseRequestParamsSchema: er,
    CallToolRequestSchema: rr,
    ListToolsRequestSchema: sr,
    ListPromptsRequestSchema: ar,
    GetPromptRequestSchema: or,
    ListResourcesRequestSchema: nr,
    ListResourceTemplatesRequestSchema: ir,
    ReadResourceRequestSchema: cr,
    CompleteRequestSchema: lr,
    DiscoverRequestSchema: ur,
    SubscriptionFilterSchema: ut,
    SubscriptionsListenRequestSchema: dr,
    SubscriptionsListenResultMetaSchema: hr,
    SubscriptionsListenResultSchema: mr,
    dispatchRequestSchemas: Fe,
    dispatchResultSchemas: fr,
    NotificationMetaSchema: Xe,
    SubscriptionsAcknowledgedNotificationSchema: dt,
    CancelledNotificationParamsSchema: ht,
    CancelledNotificationSchema: mt,
    notificationSchemas2026: Ur,
    JSONRPCResultResponseSchema: we(_t),
    CallToolResultResponseSchema: we($e([lt, We])),
    ListToolsResultResponseSchema: we(vt),
    ListPromptsResultResponseSchema: we(yt),
    GetPromptResultResponseSchema: we($e([bt, We])),
    ListResourcesResultResponseSchema: we(Rt),
    ListResourceTemplatesResultResponseSchema: we(wt),
    ReadResourceResultResponseSchema: we($e([$t, We])),
    CompleteResultResponseSchema: we(Et),
    DiscoverResultResponseSchema: we(Pt),
  };
}
var jo;
function Qe() {
  return (jo ??= Mo());
}
var Ao = [
  "tools/list",
  "prompts/list",
  "resources/list",
  "resources/templates/list",
  "resources/read",
  "server/discover",
];
function Lo(e) {
  return Ao.includes(e);
}
var Qr = Symbol("modelcontextprotocol.resultCacheHintFallback");
function Uo(e) {
  return e[Qr];
}
function Zs(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0;
}
function Qs(e) {
  return e === "public" || e === "private";
}
var ErrorCode = (function (e) {
    return (
      (e[(e.ParseError = -32700)] = "ParseError"),
      (e[(e.InvalidRequest = -32600)] = "InvalidRequest"),
      (e[(e.MethodNotFound = -32601)] = "MethodNotFound"),
      (e[(e.InvalidParams = -32602)] = "InvalidParams"),
      (e[(e.InternalError = -32603)] = "InternalError"),
      (e[(e.ResourceNotFound = -32002)] = "ResourceNotFound"),
      (e[(e.MissingRequiredClientCapability = -32021)] =
        "MissingRequiredClientCapability"),
      (e[(e.UnsupportedProtocolVersion = -32022)] =
        "UnsupportedProtocolVersion"),
      (e[(e.UrlElicitationRequired = -32042)] = "UrlElicitationRequired"),
      e
    );
  })({}),
  ProtocolError = class e extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.ProtocolError" });
    }
    static [Symbol.hasInstance](t) {
      return Te(this, t);
    }
    static isInstance(t) {
      if (typeof this !== "function")
        throw TypeError(
          "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`",
        );
      return Te(this, t);
    }
    constructor(t, r, a) {
      super(r);
      ((this.code = t),
        (this.data = a),
        (this.name = "ProtocolError"),
        et(this, new.target));
    }
    static fromError(t, r, a) {
      if (t === ErrorCode.UrlElicitationRequired && a) {
        let o = a;
        if (o.elicitations) return new ta(o.elicitations, r);
      }
      if (t === ErrorCode.UnsupportedProtocolVersion && a) {
        let o = a;
        if (Array.isArray(o.supported) && typeof o.requested === "string")
          return new wr({ supported: o.supported, requested: o.requested }, r);
      }
      if (t === ErrorCode.InvalidParams || t === ErrorCode.ResourceNotFound) {
        let o = a;
        if (
          typeof o?.uri === "string" &&
          (t === ErrorCode.ResourceNotFound || Object.keys(o).length === 1)
        )
          return new ea(o.uri, r);
      }
      if (t === ErrorCode.MissingRequiredClientCapability && a) {
        let o = a;
        if (
          o.requiredCapabilities !== null &&
          typeof o.requiredCapabilities === "object" &&
          !Array.isArray(o.requiredCapabilities)
        )
          return new ra({ requiredCapabilities: o.requiredCapabilities }, r);
      }
      return new e(t, r, a);
    }
  },
  ea = class extends ProtocolError {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.ResourceNotFoundError",
      });
    }
    constructor(e, t = `Resource not found: ${e}`) {
      super(ErrorCode.InvalidParams, t, { uri: e });
    }
    get uri() {
      return this.data.uri;
    }
  },
  ta = class extends ProtocolError {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.UrlElicitationRequiredError",
      });
    }
    constructor(e, t = `URL elicitation${e.length > 1 ? "s" : ""} required`) {
      super(ErrorCode.UrlElicitationRequired, t, { elicitations: e });
    }
    get elicitations() {
      return this.data?.elicitations ?? [];
    }
  },
  wr = class extends ProtocolError {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.UnsupportedProtocolVersionError",
      });
    }
    constructor(e, t = `Unsupported protocol version: ${e.requested}`) {
      super(ErrorCode.UnsupportedProtocolVersion, t, e);
    }
    get supported() {
      return this.data.supported;
    }
    get requested() {
      return this.data.requested;
    }
  },
  ra = class extends ProtocolError {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.MissingRequiredClientCapabilityError",
      });
    }
    constructor(
      e,
      t = `Missing required client capabilities: ${Object.keys(e.requiredCapabilities).join(", ")}`,
    ) {
      super(ErrorCode.MissingRequiredClientCapability, t, e);
    }
    get requiredCapabilities() {
      return this.data.requiredCapabilities;
    }
  },
  Do = 0,
  Vo = "private",
  Fo = ["tools/call", "prompts/get", "resources/read"];
function xo(e, t) {
  let r = t.resultType;
  if (r === void 0) return { ...t, resultType: "complete" };
  if (r === "complete") return t;
  if (Fo.includes(e)) return t;
  throw new ProtocolError(
    ErrorCode.InternalError,
    `Handler for ${e} returned resultType '${String(r)}', but results of ${e} only support 'complete' on protocol revision 2026-07-28`,
  );
}
function Jo(e, t) {
  let r = Uo(t);
  if (t.resultType !== "complete" || !Lo(e)) return r === void 0 ? t : Zo(t);
  let a = t,
    o = Zs(a.ttlMs) ? a.ttlMs : Yo(r),
    n = Qs(a.cacheScope) ? a.cacheScope : Xo(r),
    i = { ...a, ttlMs: o, cacheScope: n };
  return (delete i[Qr], i);
}
function Bo(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function Wo(e, t) {
  if (t === void 0) return e;
  let r = e._meta;
  if (r === void 0) return { ...e, _meta: { [uce]: t } };
  if (!Bo(r)) return e;
  if (r[uce] !== void 0) return e;
  return { ...e, _meta: { ...r, [uce]: t } };
}
function Yo(e) {
  return e !== void 0 && Zs(e.ttlMs) ? e.ttlMs : Do;
}
function Xo(e) {
  return e !== void 0 && Qs(e.cacheScope) ? e.cacheScope : Vo;
}
function Zo(e) {
  let t = { ...e };
  return (delete t[Qr], t);
}
var Qo = ["elicitation/create", "sampling/createMessage", "roots/list"],
  vr;
function sa() {
  if (vr) return vr;
  let e = Qe();
  return (
    (vr = {
      request: {
        "elicitation/create": c({
          method: k("elicitation/create"),
          params: e.ElicitRequestParamsSchema,
        }),
        "sampling/createMessage": c({
          method: k("sampling/createMessage"),
          params: e.CreateMessageRequestParamsSchema,
        }),
        "roots/list": c({ method: k("roots/list"), params: it({}).optional() }),
      },
      response: {
        "elicitation/create": e.ElicitResultSchema,
        "sampling/createMessage": e.CreateMessageResultSchema,
        "roots/list": e.ListRootsResultSchema,
      },
    }),
    vr
  );
}
function aa(e) {
  return Qo.includes(e);
}
function Dr(e) {
  return aa(e) ? sa().request[e] : void 0;
}
function en(e) {
  return aa(e) ? sa().response[e] : void 0;
}
var es = {
    "tools/call": null,
    "tools/list": null,
    "prompts/get": null,
    "prompts/list": null,
    "resources/list": null,
    "resources/templates/list": null,
    "resources/read": null,
    "completion/complete": null,
    "server/discover": null,
    "subscriptions/listen": null,
  },
  oa = {
    "notifications/cancelled": null,
    "notifications/progress": null,
    "notifications/message": null,
    "notifications/resources/updated": null,
    "notifications/resources/list_changed": null,
    "notifications/tools/list_changed": null,
    "notifications/prompts/list_changed": null,
    "notifications/subscriptions/acknowledged": null,
  };
function na(e) {
  return Object.prototype.hasOwnProperty.call(es, e);
}
function ia(e) {
  return Object.prototype.hasOwnProperty.call(oa, e);
}
function tn(e) {
  return Object.prototype.hasOwnProperty.call(es, e);
}
function rn(e) {
  return na(e) ? Qe().dispatchRequestSchemas[e] : void 0;
}
function sn(e) {
  return tn(e) ? Qe().dispatchResultSchemas[e] : void 0;
}
function an(e) {
  return ia(e) ? Qe().notificationSchemas2026[e] : void 0;
}
var Cl = Object.keys(es),
  kl = Object.keys(oa);
function xt(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function Ft(e, t) {
  if (e === void 0) return { ok: !1, reason: "not-in-era" };
  let r = e.safeParse(t);
  return r.success
    ? { ok: !0, value: r.data }
    : { ok: !1, reason: "invalid", message: String(r.error) };
}
var on = { ok: !1, reason: "not-in-era" },
  nn = [cce, zIe];
function cn(e, t) {
  let r = t,
    a = !1,
    o = () => {
      if (!a) ((r = { ...r }), (a = !0));
      return r;
    },
    n = t.tools;
  if (
    e === "tools/list" &&
    Array.isArray(n) &&
    n.some((u) => xt(u) && "execution" in u)
  )
    o().tools = n.map((u) => {
      if (!xt(u) || !("execution" in u)) return u;
      let l = { ...u };
      return (delete l.execution, l);
    });
  let i = t.capabilities;
  if (xt(i) && "tasks" in i) {
    let u = { ...i };
    (delete u.tasks, (o().capabilities = u));
  }
  return r;
}
var ln = "io.modelcontextprotocol/tasks",
  un = new Set([
    "working",
    "input_required",
    "completed",
    "failed",
    "cancelled",
  ]);
function dn(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return !1;
  return (
    typeof e.taskId === "string" &&
    e.taskId.length > 0 &&
    un.has(e.status) &&
    typeof e.createdAt === "string" &&
    typeof e.lastUpdatedAt === "string" &&
    (e.ttlMs === null || typeof e.ttlMs === "number") &&
    (e.pollIntervalMs === void 0 || typeof e.pollIntervalMs === "number")
  );
}
var ts = {
    era: "2026-07-28",
    hasRequestMethod: na,
    hasNotificationMethod: ia,
    hasInputRequestMethod: (e) => Dr(e) !== void 0,
    validateRequest: (e, t) => Ft(rn(e), t),
    validateResult: (e, t) => Ft(sn(e), t),
    validateNotification: (e, t) => Ft(an(e), t),
    validateInputRequest: (e, t) => Ft(Dr(e), t),
    validateInputResponse: (e, t) => Ft(en(e), t),
    samplingResultVariant: () => on,
    outboundEnvelope(e) {
      return {
        [cce]: e.protocolVersion,
        [oGe]: e.clientInfo,
        [zIe]: e.clientCapabilities,
        ...(e.logLevel !== void 0 && { [sGe]: e.logLevel }),
      };
    },
    validateEnvelopeMeta(e) {
      let t = [];
      for (let a of nn) if (!(a in e)) t.push({ key: a, problem: "missing" });
      let r = Qe().RequestMetaEnvelopeSchema.safeParse(e);
      if (!r.success)
        for (let a of r.error.issues) {
          let o = a.path.map(String),
            n = o.length > 0 ? o.join(".") : "_meta";
          if (
            o.length === 1 &&
            t.some((i) => i.key === n && i.problem === "missing")
          )
            continue;
          t.push({ key: n, problem: a.message });
        }
      return t;
    },
    projectCallToolResult: (e) => xs(e),
    inputRequestSchema: Dr,
    decodeResult(e, t) {
      if (!xt(t))
        return {
          kind: "invalid",
          error: new SdkError(
            ProtocolErrorCode.InvalidResult,
            `Invalid result for ${e}: not an object`,
            { method: e },
          ),
        };
      let r = t.resultType;
      if (r === void 0)
        return {
          kind: "invalid",
          error: new SdkError(
            ProtocolErrorCode.InvalidResult,
            `Invalid result for ${e}: missing required resultType \u2014 servers implementing protocol revision 2026-07-28 MUST include it (the absent-means-complete bridge applies only to earlier-revision servers)`,
            { method: e, violation: "missing-resultType" },
          ),
        };
      if (typeof r !== "string")
        return {
          kind: "invalid",
          error: new SdkError(
            ProtocolErrorCode.InvalidResult,
            `Invalid result for ${e}: non-string resultType`,
            { method: e, resultType: r },
          ),
        };
      if (r === "input_required") {
        let i = t.inputRequests,
          u = xt(i) ? i : {},
          l = t.requestState;
        if (Object.keys(u).length === 0 && typeof l !== "string")
          return {
            kind: "invalid",
            error: new SdkError(
              ProtocolErrorCode.InvalidResult,
              `Invalid result for ${e}: input_required carries neither inputRequests nor requestState (every input_required result must include at least one of the two)`,
              { method: e, violation: "input-required-missing-both" },
            ),
          };
        return {
          kind: "input_required",
          inputRequests: u,
          ...(typeof l === "string" && { requestState: l }),
        };
      }
      if (r === "task") return { kind: "task", result: t };
      if (r !== "complete")
        return {
          kind: "invalid",
          error: new SdkError(
            ProtocolErrorCode.UnsupportedResultType,
            `Unsupported result type '${r}' for ${e}`,
            { resultType: r, method: e },
          ),
        };
      let a = hn(),
        o = Object.hasOwn(a, e) ? a[e] : void 0;
      if (o !== void 0) {
        let i = o.safeParse(t);
        if (!i.success)
          return {
            kind: "invalid",
            error: new SdkError(
              ProtocolErrorCode.InvalidResult,
              `Invalid result for ${e}: ${i.error}`,
              { method: e },
            ),
          };
      }
      let n = { ...t };
      return (delete n.resultType, { kind: "complete", result: n });
    },
    encodeResult(e, t, r) {
      return Wo(Jo(e, xo(e, cn(e, t))), r);
    },
    encodeErrorCode: (e) => (e === -32002 ? -32602 : e),
    checkInboundEnvelope(e) {
      if (e.envelope === void 0)
        return "Request is missing the required _meta envelope for protocol revision 2026-07-28 (io.modelcontextprotocol/protocolVersion, io.modelcontextprotocol/clientCapabilities)";
      let t = Qe().RequestMetaEnvelopeSchema.safeParse(e.envelope);
      if (!t.success)
        return `Invalid _meta envelope for protocol revision 2026-07-28: ${t.error.issues.map((r) => r.message).join("; ")}`;
    },
  },
  yr;
function hn() {
  if (yr) return yr;
  let e = Qe();
  return (
    (yr = {
      "tools/call": e.CallToolResultSchema,
      "tools/list": e.ListToolsResultSchema,
      "prompts/get": e.GetPromptResultSchema,
      "prompts/list": e.ListPromptsResultSchema,
      "resources/list": e.ListResourcesResultSchema,
      "resources/templates/list": e.ListResourceTemplatesResultSchema,
      "resources/read": e.ReadResourceResultSchema,
      "completion/complete": e.CompleteResultSchema,
      "server/discover": e.DiscoverResultSchema,
    }),
    yr
  );
}
var $r = "2026-07-28";
function je(e) {
  return e !== void 0 && Ae(e) ? ts : Zr;
}
function Ns(e) {
  if (e.revision !== void 0) return je(e.revision).era;
  return e.era === "modern" ? ts.era : Zr.era;
}
function Vr(e) {
  return ca.some((t) => t.hasRequestMethod(e));
}
function Fr(e) {
  return ca.some((t) => t.hasNotificationMethod(e));
}
var ca = [Zr, ts],
  mn = vs({
    AnnotationsSchema: () => fce,
    AudioContentSchema: () => dGe,
    BaseMetadataSchema: () => dce,
    BaseRequestParamsSchema: () => lI,
    BlobResourceContentsSchema: () => Zct,
    BooleanSchemaSchema: () => rut,
    CallToolRequestParamsSchema: () => TMt,
    CallToolRequestSchema: () => EMt,
    CallToolResultSchema: () => mce,
    CancelTaskRequestSchema: () => eon,
    CancelTaskResultSchema: () => $Se,
    CancelledNotificationParamsSchema: () => LLt,
    CancelledNotificationSchema: () => zct,
    ClientCapabilitiesSchema: () => $Lt,
    ClientNotificationSchema: () => non,
    ClientRequestSchema: () => ton,
    ClientResultSchema: () => ron,
    ClientTasksCapabilitySchema: () => NLt,
    CompatibilityCallToolResultSchema: () => fGe,
    CompleteRequestParamsSchema: () => KMt,
    CompleteRequestSchema: () => XMt,
    CompleteResultSchema: () => YMt,
    ContentBlockSchema: () => pGe,
    CreateMessageRequestParamsSchema: () => LMt,
    CreateMessageRequestSchema: () => MMt,
    CreateMessageResultSchema: () => NMt,
    CreateMessageResultWithToolsSchema: () => FMt,
    CreateTaskResultSchema: () => Vrn,
    CursorSchema: () => Uct,
    DiscoverRequestSchema: () => BLt,
    DiscoverResultSchema: () => xee,
    ElicitRequestFormParamsSchema: () => hGe,
    ElicitRequestParamsSchema: () => nPe,
    ElicitRequestSchema: () => jMt,
    ElicitRequestURLParamsSchema: () => tPe,
    ElicitResultSchema: () => qMt,
    ElicitationCompleteNotificationParamsSchema: () => WMt,
    ElicitationCompleteNotificationSchema: () => GMt,
    EmbeddedResourceSchema: () => mMt,
    EmptyResultSchema: () => qct,
    EnumSchemaSchema: () => BMt,
    GetPromptRequestParamsSchema: () => dMt,
    GetPromptRequestSchema: () => pMt,
    GetPromptResultSchema: () => _Mt,
    GetTaskPayloadRequestSchema: () => Yrn,
    GetTaskPayloadResultSchema: () => Jrn,
    GetTaskRequestSchema: () => Xrn,
    GetTaskResultSchema: () => _Ge,
    IconSchema: () => MLt,
    IconsSchema: () => HSe,
    ImageContentSchema: () => uGe,
    ImplementationSchema: () => pce,
    InitializeRequestParamsSchema: () => ULt,
    InitializeRequestSchema: () => Vct,
    InitializeResultSchema: () => XIe,
    InitializedNotificationSchema: () => Kct,
    JSONArraySchema: () => Grn,
    JSONObjectSchema: () => VA,
    JSONRPCErrorResponseSchema: () => aGe,
    JSONRPCMessageSchema: () => c2,
    JSONRPCNotificationSchema: () => Gct,
    JSONRPCRequestSchema: () => Wct,
    JSONRPCResponseSchema: () => qrn,
    JSONRPCResultResponseSchema: () => iGe,
    JSONValueSchema: () => kSe,
    LegacyTitledEnumSchemaSchema: () => iut,
    ListChangedOptionsBaseSchema: () => tut,
    ListPromptsRequestSchema: () => uMt,
    ListPromptsResultSchema: () => ZIe,
    ListResourceTemplatesRequestSchema: () => zLt,
    ListResourceTemplatesResultSchema: () => JIe,
    ListResourcesRequestSchema: () => qLt,
    ListResourcesResultSchema: () => Hee,
    ListRootsRequestSchema: () => QMt,
    ListRootsResultSchema: () => ZMt,
    ListTasksRequestSchema: () => Qrn,
    ListTasksResultSchema: () => Zrn,
    ListToolsRequestSchema: () => wMt,
    ListToolsResultSchema: () => NSe,
    LoggingLevelSchema: () => nut,
    LoggingMessageNotificationParamsSchema: () => RMt,
    LoggingMessageNotificationSchema: () => kMt,
    ModelHintSchema: () => xMt,
    ModelPreferencesSchema: () => HMt,
    MultiSelectEnumSchemaSchema: () => UMt,
    NotificationSchema: () => cM,
    NotificationsParamsSchema: () => lM,
    NumberSchemaSchema: () => gGe,
    PaginatedRequestParamsSchema: () => GLt,
    PaginatedRequestSchema: () => PSe,
    PaginatedResultSchema: () => OSe,
    PingRequestSchema: () => Xct,
    PrimitiveSchemaDefinitionSchema: () => cut,
    ProgressNotificationParamsSchema: () => WLt,
    ProgressNotificationSchema: () => Yct,
    ProgressSchema: () => jLt,
    ProgressTokenSchema: () => $ct,
    PromptArgumentSchema: () => cMt,
    PromptListChangedNotificationSchema: () => yMt,
    PromptMessageSchema: () => hMt,
    PromptReferenceSchema: () => VMt,
    PromptSchema: () => QIe,
    ReadResourceRequestParamsSchema: () => VLt,
    ReadResourceRequestSchema: () => KLt,
    ReadResourceResultSchema: () => XLt,
    RelatedTaskMetadataSchema: () => VIe,
    RequestIdSchema: () => xSe,
    RequestMetaSchema: () => Bct,
    RequestSchema: () => KA,
    ResourceContentsSchema: () => Jct,
    ResourceLinkSchema: () => gMt,
    ResourceListChangedNotificationSchema: () => YLt,
    ResourceRequestParamsSchema: () => lGe,
    ResourceSchema: () => LSe,
    ResourceTemplateReferenceSchema: () => zMt,
    ResourceTemplateSchema: () => YIe,
    ResourceUpdatedNotificationParamsSchema: () => aMt,
    ResourceUpdatedNotificationSchema: () => lMt,
    ResultMetaObjectSchema: () => jct,
    ResultSchema: () => DS,
    RoleSchema: () => DSe,
    RootSchema: () => JMt,
    RootsListChangedNotificationSchema: () => eNt,
    SamplingContentSchema: () => OMt,
    SamplingMessageContentBlockSchema: () => ePe,
    SamplingMessageSchema: () => DMt,
    ServerCapabilitiesSchema: () => ISe,
    ServerNotificationSchema: () => son,
    ServerRequestSchema: () => oon,
    ServerResultSchema: () => ion,
    ServerTasksCapabilitySchema: () => FLt,
    SetLevelRequestParamsSchema: () => CMt,
    SetLevelRequestSchema: () => vMt,
    SingleSelectEnumSchemaSchema: () => $Mt,
    StringSchemaSchema: () => mGe,
    SubscribeRequestParamsSchema: () => JLt,
    SubscribeRequestSchema: () => QLt,
    SubscriptionFilterSchema: () => eut,
    SubscriptionsAcknowledgedNotificationParamsSchema: () => rMt,
    SubscriptionsAcknowledgedNotificationSchema: () => oMt,
    SubscriptionsListenRequestParamsSchema: () => tMt,
    SubscriptionsListenRequestSchema: () => nMt,
    SubscriptionsListenResultMetaSchema: () => sMt,
    SubscriptionsListenResultSchema: () => iMt,
    TaskAugmentedRequestParamsSchema: () => KIe,
    TaskCreationParamsSchema: () => zrn,
    TaskMetadataSchema: () => DLt,
    TaskSchema: () => FSe,
    TaskStatusNotificationParamsSchema: () => rPe,
    TaskStatusNotificationSchema: () => Krn,
    TaskStatusSchema: () => tNt,
    TextContentSchema: () => cGe,
    TextResourceContentsSchema: () => Qct,
    TitledMultiSelectEnumSchemaSchema: () => lut,
    TitledSingleSelectEnumSchemaSchema: () => sut,
    ToolAnnotationsSchema: () => SMt,
    ToolChoiceSchema: () => IMt,
    ToolExecutionSchema: () => bMt,
    ToolListChangedNotificationSchema: () => AMt,
    ToolResultContentSchema: () => PMt,
    ToolSchema: () => MSe,
    ToolUseContentSchema: () => fMt,
    UnsubscribeRequestParamsSchema: () => ZLt,
    UnsubscribeRequestSchema: () => eMt,
    UntitledMultiSelectEnumSchemaSchema: () => aut,
    UntitledSingleSelectEnumSchemaSchema: () => out,
  });
var isJSONRPCRequest = (e) => Wct.safeParse(e).success,
  isJSONRPCNotification = (e) => Gct.safeParse(e).success,
  isJSONRPCResultResponse = (e) => iGe.safeParse(e).success,
  isJSONRPCErrorResponse = (e) => aGe.safeParse(e).success;
var la = (e) =>
  typeof e === "object" &&
  e !== null &&
  !Array.isArray(e) &&
  e.resultType === "input_required";
var rs = (e) => Vct.safeParse(e).success,
  ua = (e) => Kct.safeParse(e).success;
var fn = "Mcp-Param-",
  Ms = "x-mcp-header",
  pn = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
  Sn = new Set(["string", "integer", "boolean", "number"]);
function ss(e) {
  let t = [],
    r = new Map(),
    a = (n, i, u) => {
      if (n === null || typeof n !== "object") return;
      let l = n;
      if (Ms in l) {
        if (!u || i.length === 0)
          return `${br(i)}: x-mcp-header is only permitted on properties statically reachable via a chain of 'properties' keys (not under items, additionalProperties, oneOf/anyOf/allOf/not, if/then/else, or $ref)`;
        let m = l[Ms];
        if (typeof m !== "string" || m.length === 0)
          return `${br(i)}: x-mcp-header MUST be a non-empty string`;
        if (!pn.test(m))
          return `${br(i)}: x-mcp-header '${m}' is not a valid RFC 9110 token (no spaces, control characters or HTTP delimiters)`;
        let _ = typeof l.type === "string" ? l.type : void 0;
        if (_ === void 0 || !Sn.has(_))
          return `${br(i)}: x-mcp-header is only permitted on primitive-typed properties (string, integer, boolean); got ${_ ?? "<none>"}`;
        let P = m.toLowerCase(),
          z = r.get(P);
        if (z !== void 0)
          return `x-mcp-header '${m}' is not case-insensitively unique (also declared as '${z}')`;
        (r.set(P, m), t.push({ path: i, headerName: m, type: _ }));
      }
      let d = l.properties;
      if (d !== null && typeof d === "object")
        for (let [m, _] of Object.entries(d)) {
          let P = a(_, [...i, m], u);
          if (P !== void 0) return P;
        }
      for (let m of gn) {
        let _ = l[m];
        if (_ === void 0) continue;
        let P = Array.isArray(_)
          ? _
          : _ !== null && typeof _ === "object" && _n.has(m)
            ? Object.values(_)
            : [_];
        for (let z of P) {
          let y = a(z, [...i, `<${m}>`], !1);
          if (y !== void 0) return y;
        }
      }
    },
    o = a(e, [], !0);
  return o === void 0
    ? { valid: !0, declarations: t }
    : { valid: !1, reason: o };
}
var gn = [
    "items",
    "prefixItems",
    "contains",
    "additionalProperties",
    "unevaluatedProperties",
    "unevaluatedItems",
    "propertyNames",
    "patternProperties",
    "dependentSchemas",
    "oneOf",
    "anyOf",
    "allOf",
    "not",
    "if",
    "then",
    "else",
    "$defs",
    "definitions",
  ],
  _n = new Set([
    "patternProperties",
    "dependentSchemas",
    "$defs",
    "definitions",
  ]);
function br(e) {
  return e.length === 0 ? "<root>" : e.join(".");
}
var da = "=?base64?",
  ha = "?=";
function vn(e) {
  if (typeof e === "string") return e;
  if (typeof e === "boolean") return e ? "true" : "false";
  if (typeof e === "number") {
    if (!Number.isFinite(e)) return;
    if (Number.isInteger(e) && !Number.isSafeInteger(e)) return;
    return String(e);
  }
}
function yn(e) {
  if (e.length === 0) return !0;
  if (e.startsWith(da) && e.endsWith(ha)) return !0;
  if (e !== e.trim()) return !0;
  for (let t = 0; t < e.length; t++) {
    let r = e.codePointAt(t);
    if (r === 9 || (r >= 32 && r <= 126)) continue;
    return !0;
  }
  return !1;
}
function bn(e) {
  let t = new TextEncoder().encode(e),
    r = "";
  for (let a of t) r += String.fromCodePoint(a);
  return btoa(r);
}
function Er(e) {
  return yn(e) ? `${da}${bn(e)}${ha}` : e;
}
function Rn(e, t) {
  let r = e;
  for (let a of t) {
    if (r === null || typeof r !== "object") return;
    r = r[a];
  }
  return r;
}
function ma(e, t) {
  let r = {};
  for (let a of e) {
    let o = Rn(t, a.path);
    if (o === void 0 || o === null) continue;
    let n = vn(o);
    if (n === void 0) continue;
    r[`${fn}${a.headerName}`] = Er(n);
  }
  return r;
}
var ft = -32020,
  ql = [
    {
      rung: "http-method",
      order: 1,
      evaluatedAt: "edge",
      codes: [-32000],
      conformance: [],
      rationale:
        "The modern era is POST-only; GET/DELETE are body-less 2025-era session operations and are method-routed to legacy serving (405 when legacy serving is not configured), before any body is read.",
    },
    {
      rung: "jsonrpc-shape",
      order: 2,
      evaluatedAt: "edge",
      codes: [ErrorCode.InvalidRequest],
      conformance: ["server-stateless"],
      rationale:
        "The body must be a JSON-RPC request or notification: posted responses and batch arrays containing a modern or invalid element are rejected before classification (element-wise batch rule); all-legacy arrays stay legacy traffic.",
    },
    {
      rung: "era-classification",
      order: 3,
      evaluatedAt: "edge",
      codes: [ft, ErrorCode.UnsupportedProtocolVersion],
      conformance: [
        "server-stateless",
        "http-header-validation",
        "http-custom-header-server-validation",
      ],
      rationale:
        "Body-primary era classification with the protocol-version header as a cross-check; a header/body disagreement is rejected with -32020 (HeaderMismatch), and an envelope-less request on a modern-only endpoint is answered with the unsupported-protocol-version error naming the supported revisions.",
    },
    {
      rung: "envelope",
      order: 4,
      evaluatedAt: "edge",
      codes: [ErrorCode.InvalidParams],
      conformance: ["server-stateless"],
      rationale:
        "A present envelope claim with a malformed envelope \u2014 and a missing envelope on a request whose protocol-version header names a modern revision \u2014 is an invalid-params rejection naming the offending or missing key(s); never a silent fall back to legacy handling. This is the only place an invalid-params rejection maps to HTTP 400.",
    },
    {
      rung: "method-registry",
      order: 5,
      evaluatedAt: "dispatch",
      codes: [ErrorCode.MethodNotFound],
      conformance: ["server-stateless"],
      rationale:
        "Method existence outranks parameter validity: a method absent from the negotiated revision\u2019s registry (or with no handler installed) answers method-not-found before params or capabilities are looked at.",
    },
    {
      rung: "request-params",
      order: 6,
      evaluatedAt: "dispatch",
      codes: [ErrorCode.InvalidParams],
      conformance: [],
      rationale:
        "Per-method params validation; emitted in-band by the dispatch layer (HTTP 200), never via the ladder status table.",
    },
    {
      rung: "standard-header-validation",
      order: 7,
      evaluatedAt: "pre-dispatch",
      codes: [ft],
      conformance: ["http-header-validation"],
      rationale:
        "SEP-2243 standard `Mcp-Method` / `Mcp-Name` headers \u2014 presence, sentinel decoding, and `Mcp-Name` \u2194 body cross-check \u2014 are validated by the HTTP entry on a modern-classified request after the supported-revision gate and before dispatch. The classifier\u2019s own header-mismatch cells (protocol-version, `Mcp-Method` mismatch) stay on the edge `era-classification` rung; this rung carries the entry-layer presence/`Mcp-Name` half. Evaluated before the capability gate, the factory call, and the `Mcp-Param-*` rung so a request that fails several rungs is answered by the standard-header rung first. The documented order (after method-registry 5 and request-params 6) is NOT the observed precedence: serveModern evaluates this rung immediately after the supported-revision gate, so a request that also fails a dispatch rung is answered here before the dispatch rungs (5\u20136) are consulted.",
    },
    {
      rung: "client-capabilities",
      order: 8,
      evaluatedAt: "pre-dispatch",
      codes: [ErrorCode.MissingRequiredClientCapability],
      conformance: ["server-stateless"],
      rationale:
        "The capability requirement is checked by the HTTP entry, pre-dispatch, against the validated envelope the classifier produced \u2014 pinning the spec-mandated HTTP 400 independently of how dispatch- and handler-produced errors are mapped. The documented order (after method resolution and params validation) is preserved observably only while the requirement table is empty: once a served method gains a requirement entry, a request that is missing the capability and would also fail a dispatch rung is answered by this gate first, so the entry must consult the method registry before the gate if the documented precedence is to stay observable.",
    },
    {
      rung: "param-header-validation",
      order: 9,
      evaluatedAt: "pre-dispatch",
      codes: [ft],
      conformance: ["http-custom-header-server-validation"],
      rationale:
        "SEP-2243 `Mcp-Param-*` headers are validated against the named tool\u2019s `x-mcp-header` declarations and the body `arguments` after the tool registry is known and before dispatch reaches the handler; a missing/disagreeing/malformed header is rejected 400 / -32020 with the same shape as the standard-header cross-checks. The documented order (after method resolution and params validation) is preserved observably only when the body `arguments` would otherwise validate: the check runs pre-dispatch, so a `tools/call` that fails BOTH this rung and a dispatch-time rung (e.g. order-6 `request-params`, -32602) is answered by this gate first with 400 / -32020, not by the earlier-ordered rung.",
    },
  ],
  Il = {
    [ErrorCode.ParseError]: 400,
    [ErrorCode.InvalidRequest]: 400,
    [ErrorCode.MethodNotFound]: 404,
    [ErrorCode.UnsupportedProtocolVersion]: 400,
    [ErrorCode.MissingRequiredClientCapability]: 400,
    [ft]: 400,
  };
function Pr(e, t) {
  return w7t(e, t);
}
function Ht(e) {
  return new Set(e.flatMap((t) => Object.keys(t.shape)));
}
function Jr(e) {
  if (e == null) return !1;
  let t = typeof e;
  if (t !== "object" && t !== "function") return !1;
  if (!("~standard" in e)) return !1;
  return typeof e["~standard"]?.validate === "function";
}
var js = !1,
  Gr = "draft-2020-12";
function wn(e, t = "input") {
  let r = e["~standard"],
    a;
  if (r.jsonSchema) a = r.jsonSchema[t]({ target: Gr });
  else if (r.vendor === "zod") {
    if (!("_zod" in e))
      throw Error(
        "Schema appears to be from zod 3, which the SDK cannot convert to JSON Schema. Upgrade to zod >=4.2.0, or wrap your JSON Schema with fromJsonSchema().",
      );
    if (!js)
      ((js = !0),
        console.warn(
          "[mcp-sdk] Your zod version does not implement `~standard.jsonSchema` (added in zod 4.2.0). Falling back to z.toJSONSchema(). Upgrade to zod >=4.2.0 to silence this warning.",
        ));
    a = yhe(e, { target: Gr, io: t });
  } else
    throw Error(
      `Schema library "${r.vendor}" does not implement StandardJSONSchemaV1 (\`~standard.jsonSchema\`). Upgrade to a version that does, or wrap your JSON Schema with fromJsonSchema().`,
    );
  if (t === "output") {
    if (a.type !== void 0) return a;
    return fa(a) ? { type: "object", ...a } : a;
  }
  if (a.type !== void 0 && a.type !== "object")
    throw Error(
      `MCP tool and prompt schemas must describe objects (got type: ${JSON.stringify(a.type)}). Wrap your schema in z.object({...}) or equivalent.`,
    );
  return { type: "object", ...a };
}
function fa(e) {
  if (
    "properties" in e ||
    "patternProperties" in e ||
    "additionalProperties" in e ||
    "required" in e
  )
    return !0;
  for (let t of ["oneOf", "anyOf", "allOf"]) {
    let r = e[t];
    if (Array.isArray(r) && r.length > 0)
      return r.every(
        (a) =>
          a !== null && typeof a === "object" && (a.type === "object" || fa(a)),
      );
  }
  return !1;
}
function $n(e) {
  if (!e.path?.length) return e.message;
  return `${e.path.map((t) => String(typeof t === "object" ? t.key : t)).join(".")}: ${e.message}`;
}
async function Hr(e, t) {
  let r = await e["~standard"].validate(t);
  if (r.issues && r.issues.length > 0)
    return { success: !1, error: r.issues.map((a) => $n(a)).join(", ") };
  return { success: !0, data: r.value };
}
function En(e) {
  let t = yhe(e, { target: Gr, io: "input" });
  return typeof t.pattern === "string" ? t.pattern : void 0;
}
var Pn = /\\\.\\d\{(\d+)\}/;
function Tn(e) {
  let t = Pn.exec(e),
    r = [void 0, -1, 0];
  if (t) r.push(Number(t[1]));
  return [!1, !0].flatMap((a) =>
    [!1, !0].flatMap((o) =>
      r.map((n) => lW({ local: a, offset: o, precision: n })),
    ),
  );
}
function zn(e, t) {
  let r;
  switch (e) {
    case "email":
      r = [ncr()];
      break;
    case "uri":
      r = [Nke()];
      break;
    case "date":
      r = [gIn()];
      break;
    case "date-time":
      r = Tn(t);
      break;
  }
  return new Set(r.map((a) => En(a)).filter((a) => a !== void 0));
}
function Cn(e, t, r) {
  if (r !== "zod") return !0;
  return zn(e, t).has(t);
}
function Jt(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function kn(e) {
  try {
    return wn(e, "input");
  } catch (t) {
    let r = t instanceof Error ? t.message : String(t);
    throw new ProtocolError(
      ErrorCode.InvalidParams,
      `Elicitation requestedSchema must describe an object with flat primitive properties: ${r}`,
    );
  }
}
var qn = new Set([
  "$comment",
  "deprecated",
  "description",
  "examples",
  "readOnly",
  "title",
  "writeOnly",
]);
function as(e) {
  return qn.has(e) || e.startsWith("x-");
}
var In = new Set(["$schema", ...Object.keys(hGe.shape.requestedSchema.shape)]),
  As = {
    string: Ht([mGe, out, sut, iut]),
    number: Ht([gGe]),
    integer: Ht([gGe]),
    boolean: Ht([rut]),
    array: Ht([aut, lut]),
  },
  On = new Set(mGe.shape.format.unwrap().options);
function Nn(e, t, r, a) {
  if (!Jt(e)) return e;
  let o =
    typeof e.type === "string" && Object.hasOwn(As, e.type)
      ? As[e.type]
      : void 0;
  if (o === void 0) return e;
  let n = {};
  for (let [i, u] of Object.entries(e))
    if (o.has(i) || as(i)) n[i] = u;
    else if (
      i === "pattern" &&
      e.type === "string" &&
      typeof e.format === "string"
    ) {
      if (!On.has(e.format)) n[i] = u;
      else if (typeof u !== "string" || !Cn(e.format, u, r))
        a.push(`${t}.${i}`);
    } else a.push(`${t}.${i}`);
  return n;
}
function Mn(e, t) {
  let r = {},
    a = [];
  for (let [o, n] of Object.entries(e))
    if (o === "properties" && Jt(n))
      r[o] = Object.fromEntries(
        Object.entries(n).map(([i, u]) => [i, Nn(u, `properties.${i}`, t, a)]),
      );
    else if (In.has(o)) r[o] = n;
    else if (!as(o)) a.push(o);
  if (a.length > 0)
    throw new ProtocolError(
      ErrorCode.InvalidParams,
      `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${a.join(", ")}`,
    );
  return r;
}
function jn(e, t) {
  if (!Jt(e.properties)) return t;
  let r = Object.entries(e.properties)
    .filter(([, a]) => !Pr(cut, a).success)
    .map(([a]) => `properties.${a}`);
  return r.length > 0 ? r.join(", ") : t;
}
function Br(e, t, r = "") {
  if (Array.isArray(e) && Array.isArray(t))
    return e.flatMap((a, o) => Br(a, t[o], `${r}[${o}]`));
  if (!Jt(e) || !Jt(t)) return [];
  return Object.entries(e).flatMap(([a, o]) => {
    let n = r ? `${r}.${a}` : a;
    if (!Object.prototype.hasOwnProperty.call(t, a)) return as(a) ? [] : [n];
    return Br(o, t[a], n);
  });
}
function An(e) {
  if (!Jr(e.requestedSchema))
    return { ...e, mode: "form", requestedSchema: e.requestedSchema };
  let t = e.requestedSchema["~standard"].vendor,
    r = Mn(kn(e.requestedSchema), t),
    a = Pr(hGe.shape.requestedSchema, r);
  if (!a.success)
    throw new ProtocolError(
      ErrorCode.InvalidParams,
      `Elicitation requestedSchema only supports flat primitive properties (string, number, integer, boolean, and string enums): ${jn(r, a.error.message)}`,
    );
  let o = Br(r, a.data);
  if (o.length > 0)
    throw new ProtocolError(
      ErrorCode.InvalidParams,
      `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${o.join(", ")}`,
    );
  let n = (a.data.required ?? []).filter(
    (i) => !Object.prototype.hasOwnProperty.call(a.data.properties, i),
  );
  if (n.length > 0)
    throw new ProtocolError(
      ErrorCode.InvalidParams,
      `Elicitation requestedSchema lists required properties that are not defined in properties: ${n.join(", ")}`,
    );
  return { ...e, mode: "form", requestedSchema: a.data };
}
function Ln(e) {
  let t = e.inputRequests !== void 0 && Object.keys(e.inputRequests).length > 0,
    r = typeof e.requestState === "string";
  if (!t && !r)
    throw TypeError(
      "inputRequired() requires at least one of inputRequests (with at least one entry) or requestState (spec: every InputRequiredResult MUST include at least one of the two)",
    );
  return {
    resultType: "input_required",
    ...(e.inputRequests !== void 0 && { inputRequests: e.inputRequests }),
    ...(e.requestState !== void 0 && { requestState: e.requestState }),
  };
}
var Ol = Object.assign(Ln, {
  elicit(e) {
    try {
      return { method: "elicitation/create", params: An(e) };
    } catch (t) {
      throw t instanceof ProtocolError ? TypeError(t.message, { cause: t }) : t;
    }
  },
  elicitUrl(e) {
    return { method: "elicitation/create", params: { ...e, mode: "url" } };
  },
  createMessage(e) {
    return { method: "sampling/createMessage", params: e };
  },
  listRoots() {
    return { method: "roots/list" };
  },
});
var Un = !0,
  Dn = 10,
  Vn = 250;
function pa(e) {
  return { autoFulfill: e?.autoFulfill ?? Un, maxRounds: e?.maxRounds ?? Dn };
}
function Fn(e, t, r) {
  let a = t !== void 0 && Object.keys(t).length > 0;
  if (!a && r === void 0) return e;
  return {
    ...e,
    ...(a && { inputResponses: t }),
    ...(r !== void 0 && { requestState: r }),
  };
}
function Hn(e, t) {
  return `Multi-round-trip request '${e}' still required input after ${t} rounds (inputRequired.maxRounds)`;
}
function xn(e, t) {
  return new Promise((r, a) => {
    if (t?.aborted) {
      a(
        t.reason instanceof SdkError
          ? t.reason
          : new SdkError(ProtocolErrorCode.RequestTimeout, String(t.reason)),
      );
      return;
    }
    let o = setTimeout(() => {
        (t?.removeEventListener("abort", n), r());
      }, e),
      n = () => {
        (clearTimeout(o),
          a(
            t?.reason instanceof SdkError
              ? t.reason
              : new SdkError(ProtocolErrorCode.RequestTimeout, String(t?.reason)),
          ));
      };
    t?.addEventListener("abort", n, { once: !0 });
  });
}
function Kn(e) {
  let t = new AbortController(),
    r = () => t.abort(e?.reason);
  if ((e?.addEventListener("abort", r, { once: !0 }), e?.aborted))
    t.abort(e.reason);
  return {
    signal: t.signal,
    abort: (a) => t.abort(a),
    dispose: () => e?.removeEventListener("abort", r),
  };
}
async function Jn(e) {
  let {
      config: t,
      method: r,
      originalParams: a,
      requestOptions: o,
      hooks: n,
      signal: i,
    } = e,
    u = e.flowStartedAt ?? Date.now(),
    l = e.firstPayload,
    d = 0;
  while (!0) {
    if (((d += 1), d > t.maxRounds))
      throw new SdkError(ProtocolErrorCode.InputRequiredRoundsExceeded, Hn(r, t.maxRounds), {
        rounds: t.maxRounds,
        lastResult: {
          inputRequests: l.inputRequests,
          ...(l.requestState !== void 0 && { requestState: l.requestState }),
        },
      });
    o.onprogress?.({
      progress: d,
      message: `Fulfilling input required by '${r}' (round ${d})`,
    });
    let m = Object.entries(l.inputRequests ?? {}),
      _;
    if (m.length > 0) {
      let y = Kn(i);
      try {
        let b = await Promise.all(
          m.map(async ([f, h]) => {
            try {
              return [f, await n.dispatchInputRequest(f, h, y.signal)];
            } catch (g) {
              throw (y.abort(g), g);
            }
          }),
        );
        _ = Object.fromEntries(b);
      } finally {
        y.dispose();
      }
    } else await xn(Vn, i);
    let P = { ...(o.timeout !== void 0 && { timeout: o.timeout }) };
    if (o.maxTotalTimeout !== void 0) {
      let y = Date.now() - u,
        b = o.maxTotalTimeout - y;
      if (b <= 0)
        throw new SdkError(ProtocolErrorCode.RequestTimeout, "Maximum total timeout exceeded", {
          maxTotalTimeout: o.maxTotalTimeout,
          totalElapsed: y,
        });
      P.maxTotalTimeout = b;
    }
    let z = await n.retry(Fn(a, _, l.requestState), P);
    if (la(z)) {
      l = {
        inputRequests: z.inputRequests ?? {},
        ...(z.requestState !== void 0 && { requestState: z.requestState }),
      };
      continue;
    }
    return z;
  }
}
var Gn = [
    "AnnotationsSchema",
    "AudioContentSchema",
    "BaseMetadataSchema",
    "BlobResourceContentsSchema",
    "BooleanSchemaSchema",
    "CallToolRequestSchema",
    "CallToolRequestParamsSchema",
    "CallToolResultSchema",
    "CancelledNotificationSchema",
    "CancelledNotificationParamsSchema",
    "CancelTaskRequestSchema",
    "CancelTaskResultSchema",
    "ClientCapabilitiesSchema",
    "ClientNotificationSchema",
    "ClientRequestSchema",
    "ClientResultSchema",
    "CompatibilityCallToolResultSchema",
    "CompleteRequestSchema",
    "CompleteRequestParamsSchema",
    "CompleteResultSchema",
    "ContentBlockSchema",
    "CreateMessageRequestSchema",
    "CreateMessageRequestParamsSchema",
    "CreateMessageResultSchema",
    "CreateMessageResultWithToolsSchema",
    "CreateTaskResultSchema",
    "CursorSchema",
    "DiscoverRequestSchema",
    "DiscoverResultSchema",
    "ElicitationCompleteNotificationSchema",
    "ElicitationCompleteNotificationParamsSchema",
    "ElicitRequestSchema",
    "ElicitRequestFormParamsSchema",
    "ElicitRequestParamsSchema",
    "ElicitRequestURLParamsSchema",
    "ElicitResultSchema",
    "EmbeddedResourceSchema",
    "EmptyResultSchema",
    "EnumSchemaSchema",
    "GetPromptRequestSchema",
    "GetPromptRequestParamsSchema",
    "GetPromptResultSchema",
    "GetTaskPayloadRequestSchema",
    "GetTaskPayloadResultSchema",
    "GetTaskRequestSchema",
    "GetTaskResultSchema",
    "IconSchema",
    "IconsSchema",
    "ImageContentSchema",
    "ImplementationSchema",
    "InitializedNotificationSchema",
    "InitializeRequestSchema",
    "InitializeRequestParamsSchema",
    "InitializeResultSchema",
    "JSONArraySchema",
    "JSONObjectSchema",
    "JSONRPCErrorResponseSchema",
    "JSONRPCMessageSchema",
    "JSONRPCNotificationSchema",
    "JSONRPCRequestSchema",
    "JSONRPCResponseSchema",
    "JSONRPCResultResponseSchema",
    "JSONValueSchema",
    "LegacyTitledEnumSchemaSchema",
    "ListPromptsRequestSchema",
    "ListPromptsResultSchema",
    "ListResourcesRequestSchema",
    "ListResourcesResultSchema",
    "ListResourceTemplatesRequestSchema",
    "ListResourceTemplatesResultSchema",
    "ListRootsRequestSchema",
    "ListRootsResultSchema",
    "ListTasksRequestSchema",
    "ListTasksResultSchema",
    "ListToolsRequestSchema",
    "ListToolsResultSchema",
    "LoggingLevelSchema",
    "LoggingMessageNotificationSchema",
    "LoggingMessageNotificationParamsSchema",
    "ModelHintSchema",
    "ModelPreferencesSchema",
    "MultiSelectEnumSchemaSchema",
    "NotificationSchema",
    "NumberSchemaSchema",
    "PaginatedRequestSchema",
    "PaginatedRequestParamsSchema",
    "PaginatedResultSchema",
    "PingRequestSchema",
    "PrimitiveSchemaDefinitionSchema",
    "ProgressSchema",
    "ProgressNotificationSchema",
    "ProgressNotificationParamsSchema",
    "ProgressTokenSchema",
    "PromptSchema",
    "PromptArgumentSchema",
    "PromptListChangedNotificationSchema",
    "PromptMessageSchema",
    "PromptReferenceSchema",
    "ReadResourceRequestSchema",
    "ReadResourceRequestParamsSchema",
    "ReadResourceResultSchema",
    "RelatedTaskMetadataSchema",
    "RequestSchema",
    "RequestIdSchema",
    "RequestMetaSchema",
    "ResourceSchema",
    "ResourceContentsSchema",
    "ResourceLinkSchema",
    "ResourceListChangedNotificationSchema",
    "ResourceRequestParamsSchema",
    "ResourceTemplateSchema",
    "ResourceTemplateReferenceSchema",
    "ResourceUpdatedNotificationSchema",
    "ResourceUpdatedNotificationParamsSchema",
    "ResultMetaObjectSchema",
    "ResultSchema",
    "RoleSchema",
    "RootSchema",
    "RootsListChangedNotificationSchema",
    "SamplingContentSchema",
    "SamplingMessageSchema",
    "SamplingMessageContentBlockSchema",
    "ServerCapabilitiesSchema",
    "ServerNotificationSchema",
    "ServerRequestSchema",
    "ServerResultSchema",
    "SetLevelRequestSchema",
    "SetLevelRequestParamsSchema",
    "SingleSelectEnumSchemaSchema",
    "StringSchemaSchema",
    "SubscribeRequestSchema",
    "SubscribeRequestParamsSchema",
    "SubscriptionFilterSchema",
    "SubscriptionsAcknowledgedNotificationSchema",
    "SubscriptionsAcknowledgedNotificationParamsSchema",
    "SubscriptionsListenRequestSchema",
    "SubscriptionsListenRequestParamsSchema",
    "SubscriptionsListenResultSchema",
    "SubscriptionsListenResultMetaSchema",
    "TaskAugmentedRequestParamsSchema",
    "TaskCreationParamsSchema",
    "TaskMetadataSchema",
    "TaskSchema",
    "TaskStatusSchema",
    "TaskStatusNotificationSchema",
    "TaskStatusNotificationParamsSchema",
    "TextContentSchema",
    "TextResourceContentsSchema",
    "TitledMultiSelectEnumSchemaSchema",
    "TitledSingleSelectEnumSchemaSchema",
    "ToolSchema",
    "ToolAnnotationsSchema",
    "ToolChoiceSchema",
    "ToolExecutionSchema",
    "ToolListChangedNotificationSchema",
    "ToolResultContentSchema",
    "ToolUseContentSchema",
    "UnsubscribeRequestSchema",
    "UnsubscribeRequestParamsSchema",
    "UntitledMultiSelectEnumSchemaSchema",
    "UntitledSingleSelectEnumSchemaSchema",
  ],
  Bn = {
    IdJagTokenExchangeResponseSchema: rNt,
    OAuthClientInformationFullSchema: dut,
    OAuthClientInformationSchema: sNt,
    OAuthClientMetadataSchema: oNt,
    OAuthClientRegistrationErrorSchema: aon,
    OAuthErrorResponseSchema: jSe,
    OAuthMetadataSchema: gce,
    OAuthProtectedResourceMetadataSchema: uut,
    OAuthTokenRevocationRequestSchema: lon,
    OAuthTokensSchema: BSe,
    OpenIdProviderDiscoveryMetadataSchema: USe,
    OpenIdProviderMetadataSchema: nNt,
  },
  Sa = {},
  ga = {};
function _a(e, t) {
  let r = e.slice(0, -6);
  ((Sa[r] = t), (ga[r] = (a) => t.safeParse(a).success));
}
for (let e of Gn) _a(e, mn[e]);
for (let [e, t] of Object.entries(Bn)) _a(e, t);
var Wn = Object.freeze(Sa),
  va = Object.freeze(ga);
function Yn(e) {
  switch (e) {
    case "initialize":
    case "notifications/initialized":
      return je(void 0);
    case "server/discover":
      return je($r);
    default:
      return;
  }
}
var Tr = 60000,
  Xn = [cce, oGe, zIe, sGe],
  Zn = ["inputResponses", "requestState"];
function Ls(e, t) {
  let r = e.params;
  if (!Kt(r)) return { message: e, lifted: {} };
  let a = r._meta,
    o = Kt(a) ? Xn.filter((l) => l in a) : [],
    n = t === "request" ? Zn.filter((l) => l in r) : [];
  if (o.length === 0 && n.length === 0) return { message: e, lifted: {} };
  let i = {},
    u = { ...r };
  if (o.length > 0 && Kt(a)) {
    let l = {},
      d = { ...a };
    for (let m of o) ((l[m] = a[m]), delete d[m]);
    if (((i.envelope = l), Object.keys(d).length > 0)) u._meta = d;
    else delete u._meta;
  }
  for (let l of n) {
    if (l === "inputResponses") i.inputResponses = u[l];
    if (l === "requestState") i.requestState = u[l];
    delete u[l];
  }
  return { message: { ...e, params: u }, lifted: i };
}
function Us(e, t) {
  let r = e.validateResult(t, void 0);
  if (!r.ok && r.reason === "not-in-era") return;
  return {
    "~standard": {
      version: 1,
      vendor: "mcp-wire-codec",
      validate(a) {
        let o = e.validateResult(t, a);
        if (o.ok) return { value: o.value };
        return {
          issues: [
            {
              message: o.reason === "invalid" ? o.message : `not-in-era: ${t}`,
            },
          ],
        };
      },
    },
  };
}
function os(e) {
  return () => e;
}
var Qn = os(void 0),
  ei,
  ya = class {
    _transport;
    _requestMessageId = 0;
    _requestHandlers = new Map();
    _requestHandlerAbortControllers = new Map();
    _notificationHandlers = new Map();
    _responseHandlers = new Map();
    _progressHandlers = new Map();
    _timeoutInfo = new Map();
    _pendingDebouncedNotifications = new Set();
    _negotiatedProtocolVersion;
    static {
      ei = (e, t) => {
        e._negotiatedProtocolVersion = t;
      };
    }
    _supportedProtocolVersions;
    onclose;
    onerror;
    fallbackRequestHandler;
    fallbackNotificationHandler;
    constructor(e) {
      ((this._options = e),
        (this._supportedProtocolVersions = e?.supportedProtocolVersions ?? qIe),
        this.setNotificationHandler("notifications/cancelled", (t) => {
          this._oncancel(t);
        }),
        this.setNotificationHandler("notifications/progress", (t) => {
          this._onprogress(t);
        }),
        this.setRequestHandler("ping", (t) => ({})));
    }
    _shouldDropInbound(e) {}
    _outboundMetaEnvelope() {}
    _envelopeOutbound(e) {
      let t = this._outboundMetaEnvelope();
      if (t === void 0) return e;
      let r = e.params ?? {};
      return { ...e, params: { ...r, _meta: { ...t, ...r._meta } } };
    }
    _resolveNonCompleteResult(e, t) {
      return Promise.reject(
        new SdkError(
          ProtocolErrorCode.UnsupportedResultType,
          `Unsupported result type '${e.kind}' for ${t.request.method}`,
          { resultType: e.kind, method: t.request.method },
        ),
      );
    }
    _getRequestHandler(e) {
      return this._requestHandlers.get(e);
    }
    async _oncancel(e) {
      if (!e.params.requestId) return;
      this._requestHandlerAbortControllers
        .get(e.params.requestId)
        ?.abort(e.params.reason);
    }
    _setupTimeout(e, t, r, a, o = !1) {
      this._timeoutInfo.set(e, {
        timeoutId: setTimeout(a, t),
        startTime: Date.now(),
        timeout: t,
        maxTotalTimeout: r,
        resetTimeoutOnProgress: o,
        onTimeout: a,
      });
    }
    _resetTimeout(e) {
      let t = this._timeoutInfo.get(e);
      if (!t) return !1;
      let r = Date.now() - t.startTime;
      if (t.maxTotalTimeout && r >= t.maxTotalTimeout)
        throw (
          this._timeoutInfo.delete(e),
          new SdkError(ProtocolErrorCode.RequestTimeout, "Maximum total timeout exceeded", {
            maxTotalTimeout: t.maxTotalTimeout,
            totalElapsed: r,
          })
        );
      return (
        clearTimeout(t.timeoutId),
        (t.timeoutId = setTimeout(t.onTimeout, t.timeout)),
        !0
      );
    }
    _cleanupTimeout(e) {
      let t = this._timeoutInfo.get(e);
      if (t) (clearTimeout(t.timeoutId), this._timeoutInfo.delete(e));
    }
    async connect(e) {
      this._transport = e;
      let t = this.transport?.onclose;
      this._transport.onclose = () => {
        try {
          t?.();
        } finally {
          this._onclose();
        }
      };
      let r = this.transport?.onerror;
      this._transport.onerror = (o) => {
        (r?.(o), this._onerror(o));
      };
      let a = this._transport?.onmessage;
      ((this._transport.onmessage = (o, n) => {
        if ((a?.(o, n), isJSONRPCResultResponse(o) || isJSONRPCErrorResponse(o))) this._onresponse(o);
        else if (isJSONRPCRequest(o)) this._onrequest(o, n);
        else if (isJSONRPCNotification(o)) this._onnotification(o, n);
        else this._onerror(Error(`Unknown message type: ${JSON.stringify(o)}`));
      }),
        e.setSupportedProtocolVersions?.(this._supportedProtocolVersions),
        await this._transport.start());
    }
    _onclose() {
      let e = this._responseHandlers;
      ((this._responseHandlers = new Map()),
        this._progressHandlers.clear(),
        this._pendingDebouncedNotifications.clear());
      for (let a of this._timeoutInfo.values()) clearTimeout(a.timeoutId);
      this._timeoutInfo.clear();
      let t = this._requestHandlerAbortControllers;
      this._requestHandlerAbortControllers = new Map();
      let r = new SdkError(ProtocolErrorCode.ConnectionClosed, "Connection closed");
      this._transport = void 0;
      try {
        this.onclose?.();
      } finally {
        for (let a of e.values()) a(r);
        for (let a of t.values()) a.abort(r);
      }
    }
    _onerror(e) {
      this.onerror?.(e);
    }
    _onnotification(e, t) {
      let { message: r } = Ls(e, "notification"),
        a = this._negotiatedWireCodec();
      if (t?.classification === void 0 && this._shouldDropInbound(e) === "drop")
        return;
      if (t?.classification !== void 0) {
        let i = Ns(t.classification);
        if (i !== a.era) {
          this._onerror(
            Error(
              `Era mismatch on inbound notification '${r.method}': classified as ${i} but this instance serves ${a.era}`,
            ),
          );
          return;
        }
      }
      if (Fr(r.method) && !a.hasNotificationMethod(r.method)) return;
      let o = this._notificationHandlers.get(r.method),
        n = this.fallbackNotificationHandler;
      if (o === void 0 && n === void 0) return;
      Promise.resolve()
        .then(() => (o === void 0 ? n(r) : o(r, a)))
        .catch((i) =>
          this._onerror(Error(`Uncaught error in notification handler: ${i}`)),
        );
    }
    _onrequest(e, t) {
      let { message: r, lifted: a } = Ls(e, "request"),
        o = this._negotiatedWireCodec();
      if (
        t?.classification === void 0 &&
        this._shouldDropInbound(e) === "drop"
      ) {
        this._onerror(
          Error(
            `Dropped inbound request '${e.method}': not servable on this connection's protocol era`,
          ),
        );
        return;
      }
      let n = this._transport,
        i = (b, f, h) => {
          let g = {
            jsonrpc: "2.0",
            id: r.id,
            error: { code: b, message: f, ...(h !== void 0 && { data: h }) },
          };
          n?.send(g).catch((p) =>
            this._onerror(Error(`Failed to send an error response: ${p}`)),
          );
        };
      if (t?.classification !== void 0) {
        let b = Ns(t.classification);
        if (b !== o.era) {
          this._onerror(
            Error(
              `Era mismatch on inbound request '${r.method}': classified as ${b} but this instance serves ${o.era}`,
            ),
          );
          let f = t.classification.revision ?? b;
          i(
            ErrorCode.UnsupportedProtocolVersion,
            `Unsupported protocol version: ${f}`,
            { supported: this._supportedProtocolVersions, requested: f },
          );
          return;
        }
      }
      if (Vr(r.method) && !o.hasRequestMethod(r.method)) {
        i(ErrorCode.MethodNotFound, "Method not found");
        return;
      }
      let u =
        this._requestHandlers.get(r.method) ?? this.fallbackRequestHandler;
      if (u === void 0) {
        i(ErrorCode.MethodNotFound, "Method not found");
        return;
      }
      let l = o.checkInboundEnvelope(a);
      if (l !== void 0) {
        i(ErrorCode.InvalidParams, l);
        return;
      }
      let d = (b, f) =>
          this._notificationViaCodec(this._resolveOutboundCodec(b.method), b, {
            ...f,
            relatedRequestId: r.id,
          }),
        m = (b, f, h) =>
          this._requestWithSchemaViaCodec(
            this._resolveOutboundCodec(b.method),
            b,
            f,
            { ...h, relatedRequestId: r.id },
          ),
        _ = new AbortController();
      this._requestHandlerAbortControllers.set(r.id, _);
      let P = a.inputResponses === void 0 ? void 0 : ti(a.inputResponses),
        z = {
          sessionId: n?.sessionId,
          mcpReq: {
            id: r.id,
            method: r.method,
            _meta: r.params?._meta,
            ...(a.envelope !== void 0 && { envelope: a.envelope }),
            ...(P !== void 0 && { inputResponses: P.accepted }),
            ...(P !== void 0 &&
              P.droppedKeys.length > 0 && {
                droppedInputResponseKeys: P.droppedKeys,
              }),
            requestState: a.requestState === void 0 ? Qn : os(a.requestState),
            signal: _.signal,
            send: (b, f, h) => {
              let g = this._resolveOutboundCodec(b.method);
              if ((this._assertOutboundRequestInEra(g, b.method), Jr(f)))
                return m(b, f, h);
              let p = Us(g, b.method);
              if (p === void 0)
                throw TypeError(
                  `'${b.method}' is not a spec method; pass a result schema as the second argument to ctx.mcpReq.send().`,
                );
              return m(b, p, f);
            },
            notify: d,
          },
          http: t?.authInfo ? { authInfo: t.authInfo } : void 0,
        },
        y = this.buildContext(z, t);
      Promise.resolve()
        .then(() => u(r, y))
        .then(
          async (b) => {
            if (_.signal.aborted) return;
            let f;
            try {
              f = o.encodeResult(r.method, b, this._outboundServerInfo());
            } catch (g) {
              (this._onerror(
                Error(`Failed to encode result for ${r.method}: ${g}`),
              ),
                i(ErrorCode.InternalError, "Internal error"));
              return;
            }
            let h = { result: f, jsonrpc: "2.0", id: r.id };
            await n?.send(h);
          },
          async (b) => {
            if (_.signal.aborted) return;
            let f = Number.isSafeInteger(b.code) ? b.code : ErrorCode.InternalError,
              h = {
                jsonrpc: "2.0",
                id: r.id,
                error: {
                  code: o.encodeErrorCode(f),
                  message: b.message ?? "Internal error",
                  ...(b.data !== void 0 && { data: b.data }),
                },
              };
            await n?.send(h);
          },
        )
        .catch((b) => this._onerror(Error(`Failed to send response: ${b}`)))
        .finally(() => {
          if (this._requestHandlerAbortControllers.get(r.id) === _)
            this._requestHandlerAbortControllers.delete(r.id);
        });
    }
    _onprogress(e) {
      let { progressToken: t, ...r } = e.params,
        a = Number(t),
        o = this._progressHandlers.get(a);
      if (!o) {
        this._onerror(
          Error(
            `Received a progress notification for an unknown token: ${JSON.stringify(e)}`,
          ),
        );
        return;
      }
      let n = this._responseHandlers.get(a),
        i = this._timeoutInfo.get(a);
      if (i && n && i.resetTimeoutOnProgress)
        try {
          this._resetTimeout(a);
        } catch (u) {
          (this._responseHandlers.delete(a),
            this._progressHandlers.delete(a),
            this._cleanupTimeout(a),
            n(u));
          return;
        }
      o(r);
    }
    _onresponse(e) {
      let t = Number(e.id),
        r = this._responseHandlers.get(t);
      if (r === void 0) {
        this._onerror(
          Error(
            `Received a response for an unknown message ID: ${JSON.stringify(e)}`,
          ),
        );
        return;
      }
      if (
        (this._responseHandlers.delete(t),
        this._cleanupTimeout(t),
        this._progressHandlers.delete(t),
        isJSONRPCResultResponse(e))
      )
        r(e);
      else r(ProtocolError.fromError(e.error.code, e.error.message, e.error.data));
    }
    get transport() {
      return this._transport;
    }
    async close() {
      await this._transport?.close();
    }
    request(e, t, r) {
      let a = this._resolveOutboundCodec(e.method);
      if ((this._assertOutboundRequestInEra(a, e.method), Jr(t)))
        return this._requestWithSchemaViaCodec(a, e, t, r);
      let o = Us(a, e.method);
      if (o === void 0)
        throw TypeError(
          `'${e.method}' is not a spec method; pass a result schema as the second argument to request().`,
        );
      return this._requestWithSchemaViaCodec(a, e, o, t);
    }
    _negotiatedWireCodec() {
      return je(this._negotiatedProtocolVersion);
    }
    _wireCodec() {
      return this._negotiatedWireCodec();
    }
    _resolveOutboundCodec(e) {
      if (this._negotiatedProtocolVersion === void 0) {
        let t = Yn(e);
        if (t) return t;
      }
      return this._negotiatedWireCodec();
    }
    _assertOutboundRequestInEra(e, t) {
      if (t.startsWith("tasks/")) return;
      if (Vr(t) && !e.hasRequestMethod(t))
        throw new SdkError(
          ProtocolErrorCode.MethodNotSupportedByProtocolVersion,
          `Method '${t}' is not supported by the negotiated protocol version (wire era ${e.era})`,
          { method: t, era: e.era },
        );
    }
    _requestWithSchema(e, t, r) {
      let a = this._resolveOutboundCodec(e.method);
      return (
        this._assertOutboundRequestInEra(a, e.method),
        this._requestWithSchemaViaCodec(a, e, t, r)
      );
    }
    _requestWithSchemaViaCodec(e, t, r, a) {
      let {
          relatedRequestId: o,
          resumptionToken: n,
          onresumptiontoken: i,
          headers: u,
        } = a ?? {},
        l = Date.now(),
        d,
        m;
      return new Promise((_, P) => {
        let z = (R) => {
          P(R);
        };
        if (!this._transport) {
          z(Error("Not connected"));
          return;
        }
        if (this._options?.enforceStrictCapabilities === !0)
          try {
            this.assertCapabilityForMethod(t.method);
          } catch (R) {
            z(R);
            return;
          }
        if (a?.signal?.aborted) {
          let R = a.signal.reason;
          throw R instanceof SdkError ? R : new SdkError(ProtocolErrorCode.RequestTimeout, String(R));
        }
        let y =
            e.era === $r && this._transport.hasPerRequestStream === !0
              ? new AbortController()
              : void 0,
          b = this._requestMessageId++;
        m = b;
        let f = { ...t, jsonrpc: "2.0", id: b };
        if (a?.onprogress)
          (this._progressHandlers.set(b, a.onprogress),
            (f.params = {
              ...t.params,
              _meta: { ...t.params?._meta, progressToken: b },
            }));
        let h = this._envelopeOutbound(f),
          g = !1,
          p = (R) => {
            if (g) return;
            if ((this._progressHandlers.delete(b), y === void 0))
              this._transport
                ?.send(
                  this._envelopeOutbound({
                    jsonrpc: "2.0",
                    method: "notifications/cancelled",
                    params: { requestId: b, reason: String(R) },
                  }),
                  {
                    relatedRequestId: o,
                    resumptionToken: n,
                    onresumptiontoken: i,
                  },
                )
                .catch((S) =>
                  this._onerror(Error(`Failed to send cancellation: ${S}`)),
                );
            else y.abort();
            P(R instanceof SdkError ? R : new SdkError(ProtocolErrorCode.RequestTimeout, String(R)));
          };
        (this._responseHandlers.set(b, (R) => {
          if (a?.signal?.aborted) return;
          if (((g = !0), R instanceof Error)) return P(R);
          let S;
          try {
            S = e.decodeResult(t.method, R.result);
          } catch (L) {
            return P(L instanceof Error ? L : Error(String(L)));
          }
          if (S.kind === "invalid") return P(S.error);
          if (S.kind === "task") {
            if (
              a?.allowTask === !0 &&
              this._capabilities?.extensions?.[ln] !== void 0 &&
              dn(S.result)
            )
              return _(S.result);
            return P(
              new SdkError(
                ProtocolErrorCode.UnsupportedResultType,
                `Unsupported result type 'task' for ${t.method}`,
                { method: t.method },
              ),
            );
          }
          if (S.kind === "input_required") {
            if (a?.allowInputRequired === !0) return _(ni(S));
            let L = {
              codec: e,
              request: t,
              resultSchema: r,
              options: a,
              flowStartedAt: l,
              retry: (x, j) =>
                this._requestWithSchemaViaCodec(
                  e,
                  x === void 0
                    ? { method: t.method }
                    : { method: t.method, params: x },
                  r,
                  j,
                ),
            };
            return _(this._resolveNonCompleteResult(S, L));
          }
          let q = S.result;
          Hr(r, q).then((L) => {
            if (L.success) _(L.data);
            else
              P(
                new SdkError(
                  ProtocolErrorCode.InvalidResult,
                  `Invalid result for ${t.method}: ${L.error}`,
                ),
              );
          }, P);
        }),
          (d = () => p(a?.signal?.reason)),
          a?.signal?.addEventListener("abort", d, { once: !0 }));
        let w = a?.timeout ?? Tr,
          C = () =>
            p(new SdkError(ProtocolErrorCode.RequestTimeout, "Request timed out", { timeout: w }));
        (this._setupTimeout(
          b,
          w,
          a?.maxTotalTimeout,
          C,
          a?.resetTimeoutOnProgress ?? !1,
        ),
          this._transport
            .send(h, {
              relatedRequestId: o,
              resumptionToken: n,
              onresumptiontoken: i,
              headers: u,
              requestSignal: y?.signal,
            })
            .catch((R) => {
              (this._progressHandlers.delete(b), P(R));
            }));
      }).finally(() => {
        if (d) a?.signal?.removeEventListener("abort", d);
        if (m !== void 0)
          (this._responseHandlers.delete(m), this._cleanupTimeout(m));
      });
    }
    async notification(e, t) {
      return this._notificationViaCodec(
        this._resolveOutboundCodec(e.method),
        e,
        t,
      );
    }
    async _notificationViaCodec(e, t, r) {
      if (!this._transport) throw new SdkError(ProtocolErrorCode.NotConnected, "Not connected");
      if (Fr(t.method) && !e.hasNotificationMethod(t.method))
        throw new SdkError(
          ProtocolErrorCode.MethodNotSupportedByProtocolVersion,
          `Notification '${t.method}' is not supported by the negotiated protocol version (wire era ${e.era})`,
          { method: t.method, era: e.era },
        );
      this.assertNotificationCapability(t.method);
      let a = this._envelopeOutbound({ jsonrpc: "2.0", ...t });
      if (
        (this._options?.debouncedNotificationMethods ?? []).includes(
          t.method,
        ) &&
        !t.params &&
        !r?.relatedRequestId
      ) {
        if (this._pendingDebouncedNotifications.has(t.method)) return;
        (this._pendingDebouncedNotifications.add(t.method),
          Promise.resolve().then(() => {
            if (
              (this._pendingDebouncedNotifications.delete(t.method),
              !this._transport)
            )
              return;
            this._transport?.send(a, r).catch((o) => this._onerror(o));
          }));
        return;
      }
      await this._transport.send(a, r);
    }
    setRequestHandler(e, t, r) {
      this.assertRequestHandlerCapability(e);
      let a;
      if (typeof t === "function") {
        if (!Vr(e))
          throw TypeError(
            `'${e}' is not a spec request method; pass schemas as the second argument to setRequestHandler().`,
          );
        a = (o, n) => {
          let i = this._negotiatedWireCodec(),
            u = i.validateRequest(e, o);
          if (!u.ok && u.reason === "not-in-era")
            u = i.validateInputRequest(e, o);
          if (!u.ok) {
            if (u.reason === "not-in-era")
              throw new ProtocolError(
                ErrorCode.InternalError,
                `No wire schema for ${e} in the resolved era`,
              );
            throw Error(u.message);
          }
          return Promise.resolve(t(u.value, n));
        };
      } else if (r)
        a = async (o, n) => {
          let i = await Hr(t.params, { ...o.params });
          if (!i.success)
            throw new ProtocolError(
              ErrorCode.InvalidParams,
              `Invalid params for ${e}: ${i.error}`,
            );
          return r(i.data, n);
        };
      else throw TypeError("setRequestHandler: handler is required");
      this._requestHandlers.set(e, this._wrapHandler(e, a));
    }
    _wrapHandler(e, t) {
      return t;
    }
    _outboundServerInfo() {}
    removeRequestHandler(e) {
      this._requestHandlers.delete(e);
    }
    assertCanSetRequestHandler(e) {
      if (this._requestHandlers.has(e))
        throw Error(
          `A request handler for ${e} already exists, which would be overridden`,
        );
    }
    setNotificationHandler(e, t, r) {
      if (typeof t === "function") {
        if (!Fr(e))
          throw TypeError(
            `'${e}' is not a spec notification method; pass schemas as the second argument to setNotificationHandler().`,
          );
        this._notificationHandlers.set(e, (a, o) => {
          let n = o.validateNotification(e, a);
          if (!n.ok) {
            if (n.reason === "not-in-era")
              throw new ProtocolError(
                ErrorCode.InternalError,
                `No wire schema for ${e} in the resolved era`,
              );
            throw Error(n.message);
          }
          return Promise.resolve(t(n.value));
        });
        return;
      }
      if (!r) throw TypeError("setNotificationHandler: handler is required");
      this._notificationHandlers.set(e, async (a) => {
        let o = await Hr(t.params, { ...a.params });
        if (!o.success)
          throw new ProtocolError(
            ErrorCode.InvalidParams,
            `Invalid params for notification ${e}: ${o.error}`,
          );
        await r(o.data, a);
      });
    }
    removeNotificationHandler(e) {
      this._notificationHandlers.delete(e);
    }
  };
function Kt(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function ba(e, t) {
  let r = { ...e };
  for (let a in t) {
    let o = a,
      n = t[o];
    if (n === void 0) continue;
    let i = r[o];
    r[o] = Kt(i) && Kt(n) ? { ...i, ...n } : n;
  }
  return r;
}
function Rr(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function ti(e) {
  let t = {},
    r = [];
  if (!Rr(e)) return { accepted: t, droppedKeys: r };
  for (let [a, o] of Object.entries(e)) {
    if (!Rr(o) || "method" in o || "result" in o) {
      r.push(a);
      continue;
    }
    t[a] = o;
  }
  return { accepted: t, droppedKeys: r };
}
function Ds(e) {
  throw new SdkError(
    ProtocolErrorCode.SendFailed,
    `ctx.mcpReq.${e} is not available while fulfilling an embedded input request: the request is fulfilled locally and has no related peer request`,
  );
}
function ri(e, t, r, a, o) {
  return {
    sessionId: o,
    mcpReq: {
      id: e,
      method: t,
      _meta: r?._meta,
      requestState: os(void 0),
      signal: a,
      send: () => Ds("send"),
      notify: () => Ds("notify"),
    },
  };
}
async function si(e, t, r, a, o) {
  if (!Rr(a) || typeof a.method !== "string")
    throw new SdkError(
      ProtocolErrorCode.InvalidResult,
      `Invalid input request '${r}': each inputRequests entry must be an embedded request object with a method`,
      { key: r },
    );
  let n = a.method;
  if (!t.hasInputRequestMethod(n))
    throw new SdkError(
      ProtocolErrorCode.InvalidResult,
      `Invalid input request '${r}': '${n}' is not an embedded request the ${t.era} revision defines (expected elicitation/create, sampling/createMessage, or roots/list)`,
      { key: r, method: n },
    );
  let i = e.getRequestHandler(n);
  if (i === void 0)
    throw new SdkError(
      ProtocolErrorCode.CapabilityNotSupported,
      `Cannot fulfil input request '${r}': no handler is registered for '${n}' on this client. Declare the corresponding capability and register a handler, or handle input_required results manually.`,
      { key: r, method: n },
    );
  let u = Rr(a.params) ? a.params : void 0;
  return await i(
    { jsonrpc: "2.0", id: r, method: n, ...(u !== void 0 && { params: u }) },
    e.buildContext(ri(r, n, u, o, e.sessionId)),
  );
}
function oi(e, t) {
  return {
    ...(e?.signal !== void 0 && { signal: e.signal }),
    ...(e?.onprogress !== void 0 && { onprogress: e.onprogress }),
    ...(e?.resetTimeoutOnProgress !== void 0 && {
      resetTimeoutOnProgress: e.resetTimeoutOnProgress,
    }),
    ...(e?.headers !== void 0 && { headers: e.headers }),
    ...(t.timeout !== void 0 && { timeout: t.timeout }),
    ...(t.maxTotalTimeout !== void 0 && { maxTotalTimeout: t.maxTotalTimeout }),
    allowInputRequired: !0,
  };
}
function Ra(e, t, r, a) {
  let { codec: o, request: n, options: i, flowStartedAt: u } = a,
    l = {
      inputRequests: r.inputRequests,
      ...(r.requestState !== void 0 && { requestState: r.requestState }),
    },
    d = {
      dispatchInputRequest: (m, _, P) => si(e, o, m, _, P),
      retry: (m, _) => a.retry(m, oi(i, _)),
    };
  return Jn({
    config: t,
    method: n.method,
    originalParams: n.params,
    firstPayload: l,
    flowStartedAt: u,
    signal: i?.signal,
    requestOptions: {
      ...(i?.timeout !== void 0 && { timeout: i.timeout }),
      ...(i?.maxTotalTimeout !== void 0 && {
        maxTotalTimeout: i.maxTotalTimeout,
      }),
      ...(i?.onprogress !== void 0 && { onprogress: i.onprogress }),
    },
    hooks: d,
  });
}
function ni(e) {
  return {
    resultType: "input_required",
    inputRequests: e.inputRequests,
    ...(e.requestState !== void 0 && { requestState: e.requestState }),
  };
}
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var ii = K((e) => {
    var t =
        /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
      r = /\\([\u000b\u0020-\u00ff])/g,
      a = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
    e.parse = o;
    function o(u) {
      if (!u) throw TypeError("argument string is required");
      var l = typeof u === "object" ? n(u) : u;
      if (typeof l !== "string")
        throw TypeError("argument string is required to be a string");
      var d = l.indexOf(";"),
        m = d !== -1 ? l.slice(0, d).trim() : l.trim();
      if (!a.test(m)) throw TypeError("invalid media type");
      var _ = new i(m.toLowerCase());
      if (d !== -1) {
        var P, z, y;
        t.lastIndex = d;
        while ((z = t.exec(l))) {
          if (z.index !== d) throw TypeError("invalid parameter format");
          if (
            ((d += z[0].length),
            (P = z[1].toLowerCase()),
            (y = z[2]),
            y.charCodeAt(0) === 34)
          ) {
            if (((y = y.slice(1, -1)), y.indexOf("\\") !== -1))
              y = y.replace(r, "$1");
          }
          _.parameters[P] = y;
        }
        if (d !== l.length) throw TypeError("invalid parameter format");
      }
      return _;
    }
    function n(u) {
      var l;
      if (typeof u.getHeader === "function") l = u.getHeader("content-type");
      else if (typeof u.headers === "object")
        l = u.headers && u.headers["content-type"];
      if (typeof l !== "string")
        throw TypeError("content-type header is missing from object");
      return l;
    }
    function i(u) {
      ((this.parameters = Object.create(null)), (this.type = u));
    }
  }),
  ci = Sr(ii(), 1);
function wa(e) {
  if (!e) return;
  try {
    return ci.parse(e).type;
  } catch {
    let t = (e.split(";", 1)[0] ?? "").trim().toLowerCase();
    if (t === "" || e.slice(t.length).includes(",")) return;
    return t;
  }
}
var $a = 10485760,
  ReadBuffer = class {
    _buffer;
    _maxBufferSize;
    constructor(e) {
      this._maxBufferSize = e?.maxBufferSize ?? $a;
    }
    append(e) {
      if ((this._buffer?.length ?? 0) + e.length > this._maxBufferSize)
        throw (
          this.clear(),
          Error(
            `ReadBuffer exceeded maximum size of ${this._maxBufferSize} bytes`,
          )
        );
      this._buffer = this._buffer ? Buffer.concat([this._buffer, e]) : e;
    }
    readMessage() {
      while (this._buffer) {
        let e = this._buffer.indexOf(`
`);
        if (e === -1) return null;
        let t = this._buffer.toString("utf8", 0, e).replace(/\r$/, "");
        this._buffer = this._buffer.subarray(e + 1);
        try {
          return deserializeMessage(t);
        } catch (r) {
          if (r instanceof SyntaxError) continue;
          throw r;
        }
      }
      return null;
    }
    clear() {
      this._buffer = void 0;
    }
  };
function deserializeMessage(e) {
  return c2.parse(JSON.parse(e));
}
function serializeMessage(e) {
  return (
    JSON.stringify(e) +
    `
`
  );
}
function Gt(e) {
  if (!e) return {};
  if (e instanceof Headers) return Object.fromEntries(e.entries());
  if (Array.isArray(e)) return Object.fromEntries(e);
  return { ...e };
}
function createFetchWithInit(e = fetch, t) {
  if (!t) return e;
  return async (r, a) =>
    e(r, {
      ...t,
      ...a,
      headers: a?.headers ? { ...Gt(t.headers), ...Gt(a.headers) } : t.headers,
    });
}
var zr = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.regexpCode =
        e.getEsmExportName =
        e.getProperty =
        e.safeStringify =
        e.stringify =
        e.strConcat =
        e.addCodeArg =
        e.str =
        e._ =
        e.nil =
        e._Code =
        e.Name =
        e.IDENTIFIER =
        e._CodeOrName =
          void 0));
    var t = class {};
    ((e._CodeOrName = t), (e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i));
    var r = class extends t {
      constructor(h) {
        super();
        if (!e.IDENTIFIER.test(h))
          throw Error("CodeGen: name must be a valid identifier");
        this.str = h;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return !1;
      }
      get names() {
        return { [this.str]: 1 };
      }
    };
    e.Name = r;
    var a = class extends t {
      constructor(h) {
        super();
        this._items = typeof h === "string" ? [h] : h;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1) return !1;
        let h = this._items[0];
        return h === "" || h === '""';
      }
      get str() {
        var h;
        return (h = this._str) !== null && h !== void 0
          ? h
          : (this._str = this._items.reduce((g, p) => `${g}${p}`, ""));
      }
      get names() {
        var h;
        return (h = this._names) !== null && h !== void 0
          ? h
          : (this._names = this._items.reduce((g, p) => {
              if (p instanceof r) g[p.str] = (g[p.str] || 0) + 1;
              return g;
            }, {}));
      }
    };
    ((e._Code = a), (e.nil = new a("")));
    function o(h, ...g) {
      let p = [h[0]],
        w = 0;
      while (w < g.length) (u(p, g[w]), p.push(h[++w]));
      return new a(p);
    }
    e._ = o;
    let n = new a("+");
    function i(h, ...g) {
      let p = [z(h[0])],
        w = 0;
      while (w < g.length) (p.push(n), u(p, g[w]), p.push(n, z(h[++w])));
      return (l(p), new a(p));
    }
    e.str = i;
    function u(h, g) {
      if (g instanceof a) h.push(...g._items);
      else if (g instanceof r) h.push(g);
      else h.push(_(g));
    }
    e.addCodeArg = u;
    function l(h) {
      let g = 1;
      while (g < h.length - 1) {
        if (h[g] === n) {
          let p = d(h[g - 1], h[g + 1]);
          if (p !== void 0) {
            h.splice(g - 1, 3, p);
            continue;
          }
          h[g++] = "+";
        }
        g++;
      }
    }
    function d(h, g) {
      if (g === '""') return h;
      if (h === '""') return g;
      if (typeof h == "string") {
        if (g instanceof r || h[h.length - 1] !== '"') return;
        if (typeof g != "string") return `${h.slice(0, -1)}${g}"`;
        if (g[0] === '"') return h.slice(0, -1) + g.slice(1);
        return;
      }
      if (typeof g == "string" && g[0] === '"' && !(h instanceof r))
        return `"${h}${g.slice(1)}`;
    }
    function m(h, g) {
      return g.emptyStr() ? h : h.emptyStr() ? g : i`${h}${g}`;
    }
    e.strConcat = m;
    function _(h) {
      return typeof h == "number" || typeof h == "boolean" || h === null
        ? h
        : z(Array.isArray(h) ? h.join(",") : h);
    }
    function P(h) {
      return new a(z(h));
    }
    e.stringify = P;
    function z(h) {
      return JSON.stringify(h)
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = z;
    function y(h) {
      return typeof h == "string" && e.IDENTIFIER.test(h)
        ? new a(`.${h}`)
        : o`[${h}]`;
    }
    e.getProperty = y;
    function b(h) {
      if (typeof h == "string" && e.IDENTIFIER.test(h)) return new a(`${h}`);
      throw Error(
        `CodeGen: invalid export name: ${h}, use explicit $id name mapping`,
      );
    }
    e.getEsmExportName = b;
    function f(h) {
      return new a(h.toString());
    }
    e.regexpCode = f;
  }),
  Ea = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ValueScope =
        e.ValueScopeName =
        e.Scope =
        e.varKinds =
        e.UsedValueState =
          void 0));
    let t = zr();
    var r = class extends Error {
        constructor(l) {
          super(`CodeGen: "code" for ${l} not defined`);
          this.value = l.value;
        }
      },
      a;
    ((function (l) {
      ((l[(l.Started = 0)] = "Started"), (l[(l.Completed = 1)] = "Completed"));
    })(a || (e.UsedValueState = a = {})),
      (e.varKinds = {
        const: new t.Name("const"),
        let: new t.Name("let"),
        var: new t.Name("var"),
      }));
    var o = class {
      constructor({ prefixes: l, parent: d } = {}) {
        ((this._names = {}), (this._prefixes = l), (this._parent = d));
      }
      toName(l) {
        return l instanceof t.Name ? l : this.name(l);
      }
      name(l) {
        return new t.Name(this._newName(l));
      }
      _newName(l) {
        let d = this._names[l] || this._nameGroup(l);
        return `${l}${d.index++}`;
      }
      _nameGroup(l) {
        var d, m;
        if (
          ((m =
            (d = this._parent) === null || d === void 0
              ? void 0
              : d._prefixes) === null || m === void 0
            ? void 0
            : m.has(l)) ||
          (this._prefixes && !this._prefixes.has(l))
        )
          throw Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
        return (this._names[l] = { prefix: l, index: 0 });
      }
    };
    e.Scope = o;
    var n = class extends t.Name {
      constructor(l, d) {
        super(d);
        this.prefix = l;
      }
      setValue(l, { property: d, itemIndex: m }) {
        ((this.value = l), (this.scopePath = t._`.${new t.Name(d)}[${m}]`));
      }
    };
    e.ValueScopeName = n;
    let i = t._`\n`;
    var u = class extends o {
      constructor(l) {
        super(l);
        ((this._values = {}),
          (this._scope = l.scope),
          (this.opts = { ...l, _n: l.lines ? i : t.nil }));
      }
      get() {
        return this._scope;
      }
      name(l) {
        return new n(l, this._newName(l));
      }
      value(l, d) {
        var m;
        if (d.ref === void 0)
          throw Error("CodeGen: ref must be passed in value");
        let _ = this.toName(l),
          { prefix: P } = _,
          z = (m = d.key) !== null && m !== void 0 ? m : d.ref,
          y = this._values[P];
        if (y) {
          let h = y.get(z);
          if (h) return h;
        } else y = this._values[P] = new Map();
        y.set(z, _);
        let b = this._scope[P] || (this._scope[P] = []),
          f = b.length;
        return (
          (b[f] = d.ref),
          _.setValue(d, { property: P, itemIndex: f }),
          _
        );
      }
      getValue(l, d) {
        let m = this._values[l];
        if (!m) return;
        return m.get(d);
      }
      scopeRefs(l, d = this._values) {
        return this._reduceValues(d, (m) => {
          if (m.scopePath === void 0)
            throw Error(`CodeGen: name "${m}" has no value`);
          return t._`${l}${m.scopePath}`;
        });
      }
      scopeCode(l = this._values, d, m) {
        return this._reduceValues(
          l,
          (_) => {
            if (_.value === void 0)
              throw Error(`CodeGen: name "${_}" has no value`);
            return _.value.code;
          },
          d,
          m,
        );
      }
      _reduceValues(l, d, m = {}, _) {
        let P = t.nil;
        for (let z in l) {
          let y = l[z];
          if (!y) continue;
          let b = (m[z] = m[z] || new Map());
          y.forEach((f) => {
            if (b.has(f)) return;
            b.set(f, a.Started);
            let h = d(f);
            if (h) {
              let g = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              P = t._`${P}${g} ${f} = ${h};${this.opts._n}`;
            } else if ((h = _ === null || _ === void 0 ? void 0 : _(f)))
              P = t._`${P}${h}${this.opts._n}`;
            else throw new r(f);
            b.set(f, a.Completed);
          });
        }
        return P;
      }
    };
    e.ValueScope = u;
  }),
  te = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.or =
        e.and =
        e.not =
        e.CodeGen =
        e.operators =
        e.varKinds =
        e.ValueScopeName =
        e.ValueScope =
        e.Scope =
        e.Name =
        e.regexpCode =
        e.stringify =
        e.getProperty =
        e.nil =
        e.strConcat =
        e.str =
        e._ =
          void 0));
    let t = zr(),
      r = Ea();
    var a = zr();
    (Object.defineProperty(e, "_", {
      enumerable: !0,
      get: function () {
        return a._;
      },
    }),
      Object.defineProperty(e, "str", {
        enumerable: !0,
        get: function () {
          return a.str;
        },
      }),
      Object.defineProperty(e, "strConcat", {
        enumerable: !0,
        get: function () {
          return a.strConcat;
        },
      }),
      Object.defineProperty(e, "nil", {
        enumerable: !0,
        get: function () {
          return a.nil;
        },
      }),
      Object.defineProperty(e, "getProperty", {
        enumerable: !0,
        get: function () {
          return a.getProperty;
        },
      }),
      Object.defineProperty(e, "stringify", {
        enumerable: !0,
        get: function () {
          return a.stringify;
        },
      }),
      Object.defineProperty(e, "regexpCode", {
        enumerable: !0,
        get: function () {
          return a.regexpCode;
        },
      }),
      Object.defineProperty(e, "Name", {
        enumerable: !0,
        get: function () {
          return a.Name;
        },
      }));
    var o = Ea();
    (Object.defineProperty(e, "Scope", {
      enumerable: !0,
      get: function () {
        return o.Scope;
      },
    }),
      Object.defineProperty(e, "ValueScope", {
        enumerable: !0,
        get: function () {
          return o.ValueScope;
        },
      }),
      Object.defineProperty(e, "ValueScopeName", {
        enumerable: !0,
        get: function () {
          return o.ValueScopeName;
        },
      }),
      Object.defineProperty(e, "varKinds", {
        enumerable: !0,
        get: function () {
          return o.varKinds;
        },
      }),
      (e.operators = {
        GT: new t._Code(">"),
        GTE: new t._Code(">="),
        LT: new t._Code("<"),
        LTE: new t._Code("<="),
        EQ: new t._Code("==="),
        NEQ: new t._Code("!=="),
        NOT: new t._Code("!"),
        OR: new t._Code("||"),
        AND: new t._Code("&&"),
        ADD: new t._Code("+"),
      }));
    var n = class {
        optimizeNodes() {
          return this;
        }
        optimizeNames(E, N) {
          return this;
        }
      },
      i = class extends n {
        constructor(E, N, A) {
          super();
          ((this.varKind = E), (this.name = N), (this.rhs = A));
        }
        render({ es5: E, _n: N }) {
          let A = E ? r.varKinds.var : this.varKind,
            J = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
          return `${A} ${this.name}${J};` + N;
        }
        optimizeNames(E, N) {
          if (!E[this.name.str]) return;
          if (this.rhs) this.rhs = G(this.rhs, E, N);
          return this;
        }
        get names() {
          return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
        }
      },
      u = class extends n {
        constructor(E, N, A) {
          super();
          ((this.lhs = E), (this.rhs = N), (this.sideEffects = A));
        }
        render({ _n: E }) {
          return `${this.lhs} = ${this.rhs};` + E;
        }
        optimizeNames(E, N) {
          if (
            this.lhs instanceof t.Name &&
            !E[this.lhs.str] &&
            !this.sideEffects
          )
            return;
          return ((this.rhs = G(this.rhs, E, N)), this);
        }
        get names() {
          return B(
            this.lhs instanceof t.Name ? {} : { ...this.lhs.names },
            this.rhs,
          );
        }
      },
      l = class extends u {
        constructor(E, N, A, J) {
          super(E, A, J);
          this.op = N;
        }
        render({ _n: E }) {
          return `${this.lhs} ${this.op}= ${this.rhs};` + E;
        }
      },
      d = class extends n {
        constructor(E) {
          super();
          ((this.label = E), (this.names = {}));
        }
        render({ _n: E }) {
          return `${this.label}:` + E;
        }
      },
      m = class extends n {
        constructor(E) {
          super();
          ((this.label = E), (this.names = {}));
        }
        render({ _n: E }) {
          return `break${this.label ? ` ${this.label}` : ""};` + E;
        }
      },
      _ = class extends n {
        constructor(E) {
          super();
          this.error = E;
        }
        render({ _n: E }) {
          return `throw ${this.error};` + E;
        }
        get names() {
          return this.error.names;
        }
      },
      P = class extends n {
        constructor(E) {
          super();
          this.code = E;
        }
        render({ _n: E }) {
          return `${this.code};` + E;
        }
        optimizeNodes() {
          return `${this.code}` ? this : void 0;
        }
        optimizeNames(E, N) {
          return ((this.code = G(this.code, E, N)), this);
        }
        get names() {
          return this.code instanceof t._CodeOrName ? this.code.names : {};
        }
      },
      z = class extends n {
        constructor(E = []) {
          super();
          this.nodes = E;
        }
        render(E) {
          return this.nodes.reduce((N, A) => N + A.render(E), "");
        }
        optimizeNodes() {
          let { nodes: E } = this,
            N = E.length;
          while (N--) {
            let A = E[N].optimizeNodes();
            if (Array.isArray(A)) E.splice(N, 1, ...A);
            else if (A) E[N] = A;
            else E.splice(N, 1);
          }
          return E.length > 0 ? this : void 0;
        }
        optimizeNames(E, N) {
          let { nodes: A } = this,
            J = A.length;
          while (J--) {
            let W = A[J];
            if (W.optimizeNames(E, N)) continue;
            (ae(E, W.names), A.splice(J, 1));
          }
          return A.length > 0 ? this : void 0;
        }
        get names() {
          return this.nodes.reduce((E, N) => F(E, N.names), {});
        }
      },
      y = class extends z {
        render(E) {
          return "{" + E._n + super.render(E) + "}" + E._n;
        }
      },
      b = class extends z {},
      f = class extends y {};
    f.kind = "else";
    var h = class E extends y {
      constructor(N, A) {
        super(A);
        this.condition = N;
      }
      render(N) {
        let A = `if(${this.condition})` + super.render(N);
        if (this.else) A += "else " + this.else.render(N);
        return A;
      }
      optimizeNodes() {
        super.optimizeNodes();
        let N = this.condition;
        if (N === !0) return this.nodes;
        let A = this.else;
        if (A) {
          let J = A.optimizeNodes();
          A = this.else = Array.isArray(J) ? new f(J) : J;
        }
        if (A) {
          if (N === !1) return A instanceof E ? A : A.nodes;
          if (this.nodes.length) return this;
          return new E(le(N), A instanceof E ? [A] : A.nodes);
        }
        if (N === !1 || !this.nodes.length) return;
        return this;
      }
      optimizeNames(N, A) {
        var J;
        if (
          ((this.else =
            (J = this.else) === null || J === void 0
              ? void 0
              : J.optimizeNames(N, A)),
          !(super.optimizeNames(N, A) || this.else))
        )
          return;
        return ((this.condition = G(this.condition, N, A)), this);
      }
      get names() {
        let N = super.names;
        if ((B(N, this.condition), this.else)) F(N, this.else.names);
        return N;
      }
    };
    h.kind = "if";
    var g = class extends y {};
    g.kind = "for";
    var p = class extends g {
        constructor(E) {
          super();
          this.iteration = E;
        }
        render(E) {
          return `for(${this.iteration})` + super.render(E);
        }
        optimizeNames(E, N) {
          if (!super.optimizeNames(E, N)) return;
          return ((this.iteration = G(this.iteration, E, N)), this);
        }
        get names() {
          return F(super.names, this.iteration.names);
        }
      },
      w = class extends g {
        constructor(E, N, A, J) {
          super();
          ((this.varKind = E), (this.name = N), (this.from = A), (this.to = J));
        }
        render(E) {
          let N = E.es5 ? r.varKinds.var : this.varKind,
            { name: A, from: J, to: W } = this;
          return `for(${N} ${A}=${J}; ${A}<${W}; ${A}++)` + super.render(E);
        }
        get names() {
          return B(B(super.names, this.from), this.to);
        }
      },
      C = class extends g {
        constructor(E, N, A, J) {
          super();
          ((this.loop = E),
            (this.varKind = N),
            (this.name = A),
            (this.iterable = J));
        }
        render(E) {
          return (
            `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` +
            super.render(E)
          );
        }
        optimizeNames(E, N) {
          if (!super.optimizeNames(E, N)) return;
          return ((this.iterable = G(this.iterable, E, N)), this);
        }
        get names() {
          return F(super.names, this.iterable.names);
        }
      },
      R = class extends y {
        constructor(E, N, A) {
          super();
          ((this.name = E), (this.args = N), (this.async = A));
        }
        render(E) {
          return (
            `${this.async ? "async " : ""}function ${this.name}(${this.args})` +
            super.render(E)
          );
        }
      };
    R.kind = "func";
    var S = class extends z {
      render(E) {
        return "return " + super.render(E);
      }
    };
    S.kind = "return";
    var q = class extends y {
        render(E) {
          let N = "try" + super.render(E);
          if (this.catch) N += this.catch.render(E);
          if (this.finally) N += this.finally.render(E);
          return N;
        }
        optimizeNodes() {
          var E, N;
          return (
            super.optimizeNodes(),
            (E = this.catch) === null || E === void 0 || E.optimizeNodes(),
            (N = this.finally) === null || N === void 0 || N.optimizeNodes(),
            this
          );
        }
        optimizeNames(E, N) {
          var A, J;
          return (
            super.optimizeNames(E, N),
            (A = this.catch) === null || A === void 0 || A.optimizeNames(E, N),
            (J = this.finally) === null ||
              J === void 0 ||
              J.optimizeNames(E, N),
            this
          );
        }
        get names() {
          let E = super.names;
          if (this.catch) F(E, this.catch.names);
          if (this.finally) F(E, this.finally.names);
          return E;
        }
      },
      L = class extends y {
        constructor(E) {
          super();
          this.error = E;
        }
        render(E) {
          return `catch(${this.error})` + super.render(E);
        }
      };
    L.kind = "catch";
    var x = class extends y {
      render(E) {
        return "finally" + super.render(E);
      }
    };
    x.kind = "finally";
    var j = class {
      constructor(E, N = {}) {
        ((this._values = {}),
          (this._blockStarts = []),
          (this._constants = {}),
          (this.opts = {
            ...N,
            _n: N.lines
              ? `
`
              : "",
          }),
          (this._extScope = E),
          (this._scope = new r.Scope({ parent: E })),
          (this._nodes = [new b()]));
      }
      toString() {
        return this._root.render(this.opts);
      }
      name(E) {
        return this._scope.name(E);
      }
      scopeName(E) {
        return this._extScope.name(E);
      }
      scopeValue(E, N) {
        let A = this._extScope.value(E, N);
        return (
          (this._values[A.prefix] || (this._values[A.prefix] = new Set())).add(
            A,
          ),
          A
        );
      }
      getScopeValue(E, N) {
        return this._extScope.getValue(E, N);
      }
      scopeRefs(E) {
        return this._extScope.scopeRefs(E, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(E, N, A, J) {
        let W = this._scope.toName(N);
        if (A !== void 0 && J) this._constants[W.str] = A;
        return (this._leafNode(new i(E, W, A)), W);
      }
      const(E, N, A) {
        return this._def(r.varKinds.const, E, N, A);
      }
      let(E, N, A) {
        return this._def(r.varKinds.let, E, N, A);
      }
      var(E, N, A) {
        return this._def(r.varKinds.var, E, N, A);
      }
      assign(E, N, A) {
        return this._leafNode(new u(E, N, A));
      }
      add(E, N) {
        return this._leafNode(new l(E, e.operators.ADD, N));
      }
      code(E) {
        if (typeof E == "function") E();
        else if (E !== t.nil) this._leafNode(new P(E));
        return this;
      }
      object(...E) {
        let N = ["{"];
        for (let [A, J] of E) {
          if (N.length > 1) N.push(",");
          if ((N.push(A), A !== J || this.opts.es5))
            (N.push(":"), (0, t.addCodeArg)(N, J));
        }
        return (N.push("}"), new t._Code(N));
      }
      if(E, N, A) {
        if ((this._blockNode(new h(E)), N && A))
          this.code(N).else().code(A).endIf();
        else if (N) this.code(N).endIf();
        else if (A) throw Error('CodeGen: "else" body without "then" body');
        return this;
      }
      elseIf(E) {
        return this._elseNode(new h(E));
      }
      else() {
        return this._elseNode(new f());
      }
      endIf() {
        return this._endBlockNode(h, f);
      }
      _for(E, N) {
        if ((this._blockNode(E), N)) this.code(N).endFor();
        return this;
      }
      for(E, N) {
        return this._for(new p(E), N);
      }
      forRange(
        E,
        N,
        A,
        J,
        W = this.opts.es5 ? r.varKinds.var : r.varKinds.let,
      ) {
        let re = this._scope.toName(E);
        return this._for(new w(W, re, N, A), () => J(re));
      }
      forOf(E, N, A, J = r.varKinds.const) {
        let W = this._scope.toName(E);
        if (this.opts.es5) {
          let re = N instanceof t.Name ? N : this.var("_arr", N);
          return this.forRange("_i", 0, t._`${re}.length`, (Q) => {
            (this.var(W, t._`${re}[${Q}]`), A(W));
          });
        }
        return this._for(new C("of", J, W, N), () => A(W));
      }
      forIn(E, N, A, J = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(E, t._`Object.keys(${N})`, A);
        let W = this._scope.toName(E);
        return this._for(new C("in", J, W, N), () => A(W));
      }
      endFor() {
        return this._endBlockNode(g);
      }
      label(E) {
        return this._leafNode(new d(E));
      }
      break(E) {
        return this._leafNode(new m(E));
      }
      return(E) {
        let N = new S();
        if ((this._blockNode(N), this.code(E), N.nodes.length !== 1))
          throw Error('CodeGen: "return" should have one node');
        return this._endBlockNode(S);
      }
      try(E, N, A) {
        if (!N && !A)
          throw Error('CodeGen: "try" without "catch" and "finally"');
        let J = new q();
        if ((this._blockNode(J), this.code(E), N)) {
          let W = this.name("e");
          ((this._currNode = J.catch = new L(W)), N(W));
        }
        if (A) ((this._currNode = J.finally = new x()), this.code(A));
        return this._endBlockNode(L, x);
      }
      throw(E) {
        return this._leafNode(new _(E));
      }
      block(E, N) {
        if ((this._blockStarts.push(this._nodes.length), E))
          this.code(E).endBlock(N);
        return this;
      }
      endBlock(E) {
        let N = this._blockStarts.pop();
        if (N === void 0) throw Error("CodeGen: not in self-balancing block");
        let A = this._nodes.length - N;
        if (A < 0 || (E !== void 0 && A !== E))
          throw Error(`CodeGen: wrong number of nodes: ${A} vs ${E} expected`);
        return ((this._nodes.length = N), this);
      }
      func(E, N = t.nil, A, J) {
        if ((this._blockNode(new R(E, N, A)), J)) this.code(J).endFunc();
        return this;
      }
      endFunc() {
        return this._endBlockNode(R);
      }
      optimize(E = 1) {
        while (E-- > 0)
          (this._root.optimizeNodes(),
            this._root.optimizeNames(this._root.names, this._constants));
      }
      _leafNode(E) {
        return (this._currNode.nodes.push(E), this);
      }
      _blockNode(E) {
        (this._currNode.nodes.push(E), this._nodes.push(E));
      }
      _endBlockNode(E, N) {
        let A = this._currNode;
        if (A instanceof E || (N && A instanceof N))
          return (this._nodes.pop(), this);
        throw Error(
          `CodeGen: not in block "${N ? `${E.kind}/${N.kind}` : E.kind}"`,
        );
      }
      _elseNode(E) {
        let N = this._currNode;
        if (!(N instanceof h)) throw Error('CodeGen: "else" without "if"');
        return ((this._currNode = N.else = E), this);
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        let E = this._nodes;
        return E[E.length - 1];
      }
      set _currNode(E) {
        let N = this._nodes;
        N[N.length - 1] = E;
      }
    };
    e.CodeGen = j;
    function F(E, N) {
      for (let A in N) E[A] = (E[A] || 0) + (N[A] || 0);
      return E;
    }
    function B(E, N) {
      return N instanceof t._CodeOrName ? F(E, N.names) : E;
    }
    function G(E, N, A) {
      if (E instanceof t.Name) return J(E);
      if (!W(E)) return E;
      return new t._Code(
        E._items.reduce((re, Q) => {
          if (Q instanceof t.Name) Q = J(Q);
          if (Q instanceof t._Code) re.push(...Q._items);
          else re.push(Q);
          return re;
        }, []),
      );
      function J(re) {
        let Q = A[re.str];
        if (Q === void 0 || N[re.str] !== 1) return re;
        return (delete N[re.str], Q);
      }
      function W(re) {
        return (
          re instanceof t._Code &&
          re._items.some(
            (Q) => Q instanceof t.Name && N[Q.str] === 1 && A[Q.str] !== void 0,
          )
        );
      }
    }
    function ae(E, N) {
      for (let A in N) E[A] = (E[A] || 0) - (N[A] || 0);
    }
    function le(E) {
      return typeof E == "boolean" || typeof E == "number" || E === null
        ? !E
        : t._`!${H(E)}`;
    }
    e.not = le;
    let ie = U(e.operators.AND);
    function me(...E) {
      return E.reduce(ie);
    }
    e.and = me;
    let oe = U(e.operators.OR);
    function M(...E) {
      return E.reduce(oe);
    }
    e.or = M;
    function U(E) {
      return (N, A) =>
        N === t.nil ? A : A === t.nil ? N : t._`${H(N)} ${E} ${H(A)}`;
    }
    function H(E) {
      return E instanceof t.Name ? E : t._`(${E})`;
    }
  }),
  ne = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.checkStrictMode =
        e.getErrorPath =
        e.Type =
        e.useFunc =
        e.setEvaluated =
        e.evaluatedPropsToName =
        e.mergeEvaluated =
        e.eachItem =
        e.unescapeJsonPointer =
        e.escapeJsonPointer =
        e.escapeFragment =
        e.unescapeFragment =
        e.schemaRefOrVal =
        e.schemaHasRulesButRef =
        e.schemaHasRules =
        e.checkUnknownRules =
        e.alwaysValidSchema =
        e.toHash =
          void 0));
    let t = te(),
      r = zr();
    function a(R) {
      let S = {};
      for (let q of R) S[q] = !0;
      return S;
    }
    e.toHash = a;
    function o(R, S) {
      if (typeof S == "boolean") return S;
      if (Object.keys(S).length === 0) return !0;
      return (n(R, S), !i(S, R.self.RULES.all));
    }
    e.alwaysValidSchema = o;
    function n(R, S = R.schema) {
      let { opts: q, self: L } = R;
      if (!q.strictSchema) return;
      if (typeof S === "boolean") return;
      let x = L.RULES.keywords;
      for (let j in S) if (!x[j]) C(R, `unknown keyword: "${j}"`);
    }
    e.checkUnknownRules = n;
    function i(R, S) {
      if (typeof R == "boolean") return !R;
      for (let q in R) if (S[q]) return !0;
      return !1;
    }
    e.schemaHasRules = i;
    function u(R, S) {
      if (typeof R == "boolean") return !R;
      for (let q in R) if (q !== "$ref" && S.all[q]) return !0;
      return !1;
    }
    e.schemaHasRulesButRef = u;
    function l({ topSchemaRef: R, schemaPath: S }, q, L, x) {
      if (!x) {
        if (typeof q == "number" || typeof q == "boolean") return q;
        if (typeof q == "string") return t._`${q}`;
      }
      return t._`${R}${S}${(0, t.getProperty)(L)}`;
    }
    e.schemaRefOrVal = l;
    function d(R) {
      return P(decodeURIComponent(R));
    }
    e.unescapeFragment = d;
    function m(R) {
      return encodeURIComponent(_(R));
    }
    e.escapeFragment = m;
    function _(R) {
      if (typeof R == "number") return `${R}`;
      return R.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    e.escapeJsonPointer = _;
    function P(R) {
      return R.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    e.unescapeJsonPointer = P;
    function z(R, S) {
      if (Array.isArray(R)) for (let q of R) S(q);
      else S(R);
    }
    e.eachItem = z;
    function y({
      mergeNames: R,
      mergeToName: S,
      mergeValues: q,
      resultToName: L,
    }) {
      return (x, j, F, B) => {
        let G =
          F === void 0
            ? j
            : F instanceof t.Name
              ? (j instanceof t.Name ? R(x, j, F) : S(x, j, F), F)
              : j instanceof t.Name
                ? (S(x, F, j), j)
                : q(j, F);
        return B === t.Name && !(G instanceof t.Name) ? L(x, G) : G;
      };
    }
    e.mergeEvaluated = {
      props: y({
        mergeNames: (R, S, q) =>
          R.if(t._`${q} !== true && ${S} !== undefined`, () => {
            R.if(
              t._`${S} === true`,
              () => R.assign(q, !0),
              () =>
                R.assign(q, t._`${q} || {}`).code(
                  t._`Object.assign(${q}, ${S})`,
                ),
            );
          }),
        mergeToName: (R, S, q) =>
          R.if(t._`${q} !== true`, () => {
            if (S === !0) R.assign(q, !0);
            else (R.assign(q, t._`${q} || {}`), f(R, q, S));
          }),
        mergeValues: (R, S) => (R === !0 ? !0 : { ...R, ...S }),
        resultToName: b,
      }),
      items: y({
        mergeNames: (R, S, q) =>
          R.if(t._`${q} !== true && ${S} !== undefined`, () =>
            R.assign(q, t._`${S} === true ? true : ${q} > ${S} ? ${q} : ${S}`),
          ),
        mergeToName: (R, S, q) =>
          R.if(t._`${q} !== true`, () =>
            R.assign(q, S === !0 ? !0 : t._`${q} > ${S} ? ${q} : ${S}`),
          ),
        mergeValues: (R, S) => (R === !0 ? !0 : Math.max(R, S)),
        resultToName: (R, S) => R.var("items", S),
      }),
    };
    function b(R, S) {
      if (S === !0) return R.var("props", !0);
      let q = R.var("props", t._`{}`);
      if (S !== void 0) f(R, q, S);
      return q;
    }
    e.evaluatedPropsToName = b;
    function f(R, S, q) {
      Object.keys(q).forEach((L) =>
        R.assign(t._`${S}${(0, t.getProperty)(L)}`, !0),
      );
    }
    e.setEvaluated = f;
    let h = {};
    function g(R, S) {
      return R.scopeValue("func", {
        ref: S,
        code: h[S.code] || (h[S.code] = new r._Code(S.code)),
      });
    }
    e.useFunc = g;
    var p;
    (function (R) {
      ((R[(R.Num = 0)] = "Num"), (R[(R.Str = 1)] = "Str"));
    })(p || (e.Type = p = {}));
    function w(R, S, q) {
      if (R instanceof t.Name) {
        let L = S === p.Num;
        return q
          ? L
            ? t._`"[" + ${R} + "]"`
            : t._`"['" + ${R} + "']"`
          : L
            ? t._`"/" + ${R}`
            : t._`"/" + ${R}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return q ? (0, t.getProperty)(R).toString() : "/" + _(R);
    }
    e.getErrorPath = w;
    function C(R, S, q = R.opts.strictSchema) {
      if (!q) return;
      if (((S = `strict mode: ${S}`), q === !0)) throw Error(S);
      R.self.logger.warn(S);
    }
    e.checkStrictMode = C;
  }),
  Ie = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = {
        data: new t.Name("data"),
        valCxt: new t.Name("valCxt"),
        instancePath: new t.Name("instancePath"),
        parentData: new t.Name("parentData"),
        parentDataProperty: new t.Name("parentDataProperty"),
        rootData: new t.Name("rootData"),
        dynamicAnchors: new t.Name("dynamicAnchors"),
        vErrors: new t.Name("vErrors"),
        errors: new t.Name("errors"),
        this: new t.Name("this"),
        self: new t.Name("self"),
        scope: new t.Name("scope"),
        json: new t.Name("json"),
        jsonPos: new t.Name("jsonPos"),
        jsonLen: new t.Name("jsonLen"),
        jsonPart: new t.Name("jsonPart"),
      };
    e.default = r;
  }),
  kr = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.extendErrors =
        e.resetErrorsCount =
        e.reportExtraError =
        e.reportError =
        e.keyword$DataError =
        e.keywordError =
          void 0));
    let t = te(),
      r = ne(),
      a = Ie();
    ((e.keywordError = {
      message: ({ keyword: f }) => t.str`must pass "${f}" keyword validation`,
    }),
      (e.keyword$DataError = {
        message: ({ keyword: f, schemaType: h }) =>
          h
            ? t.str`"${f}" keyword must be ${h} ($data)`
            : t.str`"${f}" keyword is invalid ($data)`,
      }));
    function o(f, h = e.keywordError, g, p) {
      let { it: w } = f,
        { gen: C, compositeRule: R, allErrors: S } = w,
        q = _(f, h, g);
      if (p !== null && p !== void 0 ? p : R || S) l(C, q);
      else d(w, t._`[${q}]`);
    }
    e.reportError = o;
    function n(f, h = e.keywordError, g) {
      let { it: p } = f,
        { gen: w, compositeRule: C, allErrors: R } = p;
      if ((l(w, _(f, h, g)), !(C || R))) d(p, a.default.vErrors);
    }
    e.reportExtraError = n;
    function i(f, h) {
      (f.assign(a.default.errors, h),
        f.if(t._`${a.default.vErrors} !== null`, () =>
          f.if(
            h,
            () => f.assign(t._`${a.default.vErrors}.length`, h),
            () => f.assign(a.default.vErrors, null),
          ),
        ));
    }
    e.resetErrorsCount = i;
    function u({
      gen: f,
      keyword: h,
      schemaValue: g,
      data: p,
      errsCount: w,
      it: C,
    }) {
      if (w === void 0) throw Error("ajv implementation error");
      let R = f.name("err");
      f.forRange("i", w, a.default.errors, (S) => {
        if (
          (f.const(R, t._`${a.default.vErrors}[${S}]`),
          f.if(t._`${R}.instancePath === undefined`, () =>
            f.assign(
              t._`${R}.instancePath`,
              (0, t.strConcat)(a.default.instancePath, C.errorPath),
            ),
          ),
          f.assign(t._`${R}.schemaPath`, t.str`${C.errSchemaPath}/${h}`),
          C.opts.verbose)
        )
          (f.assign(t._`${R}.schema`, g), f.assign(t._`${R}.data`, p));
      });
    }
    e.extendErrors = u;
    function l(f, h) {
      let g = f.const("err", h);
      (f.if(
        t._`${a.default.vErrors} === null`,
        () => f.assign(a.default.vErrors, t._`[${g}]`),
        t._`${a.default.vErrors}.push(${g})`,
      ),
        f.code(t._`${a.default.errors}++`));
    }
    function d(f, h) {
      let { gen: g, validateName: p, schemaEnv: w } = f;
      if (w.$async) g.throw(t._`new ${f.ValidationError}(${h})`);
      else (g.assign(t._`${p}.errors`, h), g.return(!1));
    }
    let m = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema"),
    };
    function _(f, h, g) {
      let { createErrors: p } = f.it;
      if (p === !1) return t._`{}`;
      return P(f, h, g);
    }
    function P(f, h, g = {}) {
      let { gen: p, it: w } = f,
        C = [z(w, g), y(f, g)];
      return (b(f, h, C), p.object(...C));
    }
    function z({ errorPath: f }, { instancePath: h }) {
      let g = h ? t.str`${f}${(0, r.getErrorPath)(h, r.Type.Str)}` : f;
      return [
        a.default.instancePath,
        (0, t.strConcat)(a.default.instancePath, g),
      ];
    }
    function y(
      { keyword: f, it: { errSchemaPath: h } },
      { schemaPath: g, parentSchema: p },
    ) {
      let w = p ? h : t.str`${h}/${f}`;
      if (g) w = t.str`${w}${(0, r.getErrorPath)(g, r.Type.Str)}`;
      return [m.schemaPath, w];
    }
    function b(f, { params: h, message: g }, p) {
      let { keyword: w, data: C, schemaValue: R, it: S } = f,
        { opts: q, propertyName: L, topSchemaRef: x, schemaPath: j } = S;
      if (
        (p.push(
          [m.keyword, w],
          [m.params, typeof h == "function" ? h(f) : h || t._`{}`],
        ),
        q.messages)
      )
        p.push([m.message, typeof g == "function" ? g(f) : g]);
      if (q.verbose)
        p.push(
          [m.schema, R],
          [m.parentSchema, t._`${x}${j}`],
          [a.default.data, C],
        );
      if (L) p.push([m.propertyName, L]);
    }
  }),
  li = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.boolOrEmptySchema = e.topBoolOrEmptySchema = void 0));
    let t = kr(),
      r = te(),
      a = Ie(),
      o = { message: "boolean schema is false" };
    function n(l) {
      let { gen: d, schema: m, validateName: _ } = l;
      if (m === !1) u(l, !1);
      else if (typeof m == "object" && m.$async === !0)
        d.return(a.default.data);
      else (d.assign(r._`${_}.errors`, null), d.return(!0));
    }
    e.topBoolOrEmptySchema = n;
    function i(l, d) {
      let { gen: m, schema: _ } = l;
      if (_ === !1) (m.var(d, !1), u(l));
      else m.var(d, !0);
    }
    e.boolOrEmptySchema = i;
    function u(l, d) {
      let { gen: m, data: _ } = l,
        P = {
          gen: m,
          keyword: "false schema",
          data: _,
          schema: !1,
          schemaCode: !1,
          schemaValue: !1,
          params: {},
          it: l,
        };
      (0, t.reportError)(P, o, void 0, d);
    }
  }),
  Pa = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getRules = e.isJSONType = void 0));
    let t = new Set([
      "string",
      "number",
      "integer",
      "boolean",
      "null",
      "object",
      "array",
    ]);
    function r(o) {
      return typeof o == "string" && t.has(o);
    }
    e.isJSONType = r;
    function a() {
      let o = {
        number: { type: "number", rules: [] },
        string: { type: "string", rules: [] },
        array: { type: "array", rules: [] },
        object: { type: "object", rules: [] },
      };
      return {
        types: { ...o, integer: !0, boolean: !0, null: !0 },
        rules: [{ rules: [] }, o.number, o.string, o.array, o.object],
        post: { rules: [] },
        all: {},
        keywords: {},
      };
    }
    e.getRules = a;
  }),
  Ta = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.shouldUseRule = e.shouldUseGroup = e.schemaHasRulesForType = void 0));
    function t({ schema: o, self: n }, i) {
      let u = n.RULES.types[i];
      return u && u !== !0 && r(o, u);
    }
    e.schemaHasRulesForType = t;
    function r(o, n) {
      return n.rules.some((i) => a(o, i));
    }
    e.shouldUseGroup = r;
    function a(o, n) {
      var i;
      return (
        o[n.keyword] !== void 0 ||
        ((i = n.definition.implements) === null || i === void 0
          ? void 0
          : i.some((u) => o[u] !== void 0))
      );
    }
    e.shouldUseRule = a;
  }),
  Cr = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.reportTypeError =
        e.checkDataTypes =
        e.checkDataType =
        e.coerceAndCheckDataType =
        e.getJSONTypes =
        e.getSchemaTypes =
        e.DataType =
          void 0));
    let t = Pa(),
      r = Ta(),
      a = kr(),
      o = te(),
      n = ne();
    var i;
    (function (p) {
      ((p[(p.Correct = 0)] = "Correct"), (p[(p.Wrong = 1)] = "Wrong"));
    })(i || (e.DataType = i = {}));
    function u(p) {
      let w = l(p.type);
      if (w.includes("null")) {
        if (p.nullable === !1)
          throw Error("type: null contradicts nullable: false");
      } else {
        if (!w.length && p.nullable !== void 0)
          throw Error('"nullable" cannot be used without "type"');
        if (p.nullable === !0) w.push("null");
      }
      return w;
    }
    e.getSchemaTypes = u;
    function l(p) {
      let w = Array.isArray(p) ? p : p ? [p] : [];
      if (w.every(t.isJSONType)) return w;
      throw Error("type must be JSONType or JSONType[]: " + w.join(","));
    }
    e.getJSONTypes = l;
    function d(p, w) {
      let { gen: C, data: R, opts: S } = p,
        q = _(w, S.coerceTypes),
        L =
          w.length > 0 &&
          !(
            q.length === 0 &&
            w.length === 1 &&
            (0, r.schemaHasRulesForType)(p, w[0])
          );
      if (L) {
        let x = b(w, R, S.strictNumbers, i.Wrong);
        C.if(x, () => {
          if (q.length) P(p, w, q);
          else h(p);
        });
      }
      return L;
    }
    e.coerceAndCheckDataType = d;
    let m = new Set(["string", "number", "integer", "boolean", "null"]);
    function _(p, w) {
      return w
        ? p.filter((C) => m.has(C) || (w === "array" && C === "array"))
        : [];
    }
    function P(p, w, C) {
      let { gen: R, data: S, opts: q } = p,
        L = R.let("dataType", o._`typeof ${S}`),
        x = R.let("coerced", o._`undefined`);
      if (q.coerceTypes === "array")
        R.if(
          o._`${L} == 'object' && Array.isArray(${S}) && ${S}.length == 1`,
          () =>
            R.assign(S, o._`${S}[0]`)
              .assign(L, o._`typeof ${S}`)
              .if(b(w, S, q.strictNumbers), () => R.assign(x, S)),
        );
      R.if(o._`${x} !== undefined`);
      for (let F of C)
        if (m.has(F) || (F === "array" && q.coerceTypes === "array")) j(F);
      (R.else(),
        h(p),
        R.endIf(),
        R.if(o._`${x} !== undefined`, () => {
          (R.assign(S, x), z(p, x));
        }));
      function j(F) {
        switch (F) {
          case "string":
            R.elseIf(o._`${L} == "number" || ${L} == "boolean"`)
              .assign(x, o._`"" + ${S}`)
              .elseIf(o._`${S} === null`)
              .assign(x, o._`""`);
            return;
          case "number":
            R.elseIf(
              o._`${L} == "boolean" || ${S} === null
              || (${L} == "string" && ${S} && ${S} == +${S})`,
            ).assign(x, o._`+${S}`);
            return;
          case "integer":
            R.elseIf(
              o._`${L} === "boolean" || ${S} === null
              || (${L} === "string" && ${S} && ${S} == +${S} && !(${S} % 1))`,
            ).assign(x, o._`+${S}`);
            return;
          case "boolean":
            R.elseIf(o._`${S} === "false" || ${S} === 0 || ${S} === null`)
              .assign(x, !1)
              .elseIf(o._`${S} === "true" || ${S} === 1`)
              .assign(x, !0);
            return;
          case "null":
            (R.elseIf(o._`${S} === "" || ${S} === 0 || ${S} === false`),
              R.assign(x, null));
            return;
          case "array":
            R.elseIf(
              o._`${L} === "string" || ${L} === "number"
              || ${L} === "boolean" || ${S} === null`,
            ).assign(x, o._`[${S}]`);
        }
      }
    }
    function z({ gen: p, parentData: w, parentDataProperty: C }, R) {
      p.if(o._`${w} !== undefined`, () => p.assign(o._`${w}[${C}]`, R));
    }
    function y(p, w, C, R = i.Correct) {
      let S = R === i.Correct ? o.operators.EQ : o.operators.NEQ,
        q;
      switch (p) {
        case "null":
          return o._`${w} ${S} null`;
        case "array":
          q = o._`Array.isArray(${w})`;
          break;
        case "object":
          q = o._`${w} && typeof ${w} == "object" && !Array.isArray(${w})`;
          break;
        case "integer":
          q = L(o._`!(${w} % 1) && !isNaN(${w})`);
          break;
        case "number":
          q = L();
          break;
        default:
          return o._`typeof ${w} ${S} ${p}`;
      }
      return R === i.Correct ? q : (0, o.not)(q);
      function L(x = o.nil) {
        return (0, o.and)(
          o._`typeof ${w} == "number"`,
          x,
          C ? o._`isFinite(${w})` : o.nil,
        );
      }
    }
    e.checkDataType = y;
    function b(p, w, C, R) {
      if (p.length === 1) return y(p[0], w, C, R);
      let S,
        q = (0, n.toHash)(p);
      if (q.array && q.object) {
        let L = o._`typeof ${w} != "object"`;
        ((S = q.null ? L : o._`!${w} || ${L}`),
          delete q.null,
          delete q.array,
          delete q.object);
      } else S = o.nil;
      if (q.number) delete q.integer;
      for (let L in q) S = (0, o.and)(S, y(L, w, C, R));
      return S;
    }
    e.checkDataTypes = b;
    let f = {
      message: ({ schema: p }) => `must be ${p}`,
      params: ({ schema: p, schemaValue: w }) =>
        typeof p == "string" ? o._`{type: ${p}}` : o._`{type: ${w}}`,
    };
    function h(p) {
      let w = g(p);
      (0, a.reportError)(w, f);
    }
    e.reportTypeError = h;
    function g(p) {
      let { gen: w, data: C, schema: R } = p,
        S = (0, n.schemaRefOrVal)(p, R, "type");
      return {
        gen: w,
        keyword: "type",
        data: C,
        schema: R.type,
        schemaCode: S,
        schemaValue: S,
        parentSchema: R,
        params: {},
        it: p,
      };
    }
  }),
  ui = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.assignDefaults = void 0));
    let t = te(),
      r = ne();
    function a(n, i) {
      let { properties: u, items: l } = n.schema;
      if (i === "object" && u) for (let d in u) o(n, d, u[d].default);
      else if (i === "array" && Array.isArray(l))
        l.forEach((d, m) => o(n, m, d.default));
    }
    e.assignDefaults = a;
    function o(n, i, u) {
      let { gen: l, compositeRule: d, data: m, opts: _ } = n;
      if (u === void 0) return;
      let P = t._`${m}${(0, t.getProperty)(i)}`;
      if (d) {
        (0, r.checkStrictMode)(n, `default is ignored for: ${P}`);
        return;
      }
      let z = t._`${P} === undefined`;
      if (_.useDefaults === "empty")
        z = t._`${z} || ${P} === null || ${P} === ""`;
      l.if(z, t._`${P} = ${(0, t.stringify)(u)}`);
    }
  }),
  Oe = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.validateUnion =
        e.validateArray =
        e.usePattern =
        e.callValidateCode =
        e.schemaProperties =
        e.allSchemaProperties =
        e.noPropertyInData =
        e.propertyInData =
        e.isOwnProperty =
        e.hasPropFunc =
        e.reportMissingProp =
        e.checkMissingProp =
        e.checkReportMissingProp =
          void 0));
    let t = te(),
      r = ne(),
      a = Ie(),
      o = ne();
    function n(p, w) {
      let { gen: C, data: R, it: S } = p;
      C.if(_(C, R, w, S.opts.ownProperties), () => {
        (p.setParams({ missingProperty: t._`${w}` }, !0), p.error());
      });
    }
    e.checkReportMissingProp = n;
    function i({ gen: p, data: w, it: { opts: C } }, R, S) {
      return (0, t.or)(
        ...R.map((q) =>
          (0, t.and)(_(p, w, q, C.ownProperties), t._`${S} = ${q}`),
        ),
      );
    }
    e.checkMissingProp = i;
    function u(p, w) {
      (p.setParams({ missingProperty: w }, !0), p.error());
    }
    e.reportMissingProp = u;
    function l(p) {
      return p.scopeValue("func", {
        ref: Object.prototype.hasOwnProperty,
        code: t._`Object.prototype.hasOwnProperty`,
      });
    }
    e.hasPropFunc = l;
    function d(p, w, C) {
      return t._`${l(p)}.call(${w}, ${C})`;
    }
    e.isOwnProperty = d;
    function m(p, w, C, R) {
      let S = t._`${w}${(0, t.getProperty)(C)} !== undefined`;
      return R ? t._`${S} && ${d(p, w, C)}` : S;
    }
    e.propertyInData = m;
    function _(p, w, C, R) {
      let S = t._`${w}${(0, t.getProperty)(C)} === undefined`;
      return R ? (0, t.or)(S, (0, t.not)(d(p, w, C))) : S;
    }
    e.noPropertyInData = _;
    function P(p) {
      return p ? Object.keys(p).filter((w) => w !== "__proto__") : [];
    }
    e.allSchemaProperties = P;
    function z(p, w) {
      return P(w).filter((C) => !(0, r.alwaysValidSchema)(p, w[C]));
    }
    e.schemaProperties = z;
    function y(
      {
        schemaCode: p,
        data: w,
        it: { gen: C, topSchemaRef: R, schemaPath: S, errorPath: q },
        it: L,
      },
      x,
      j,
      F,
    ) {
      let B = F ? t._`${p}, ${w}, ${R}${S}` : w,
        G = [
          [a.default.instancePath, (0, t.strConcat)(a.default.instancePath, q)],
          [a.default.parentData, L.parentData],
          [a.default.parentDataProperty, L.parentDataProperty],
          [a.default.rootData, a.default.rootData],
        ];
      if (L.opts.dynamicRef)
        G.push([a.default.dynamicAnchors, a.default.dynamicAnchors]);
      let ae = t._`${B}, ${C.object(...G)}`;
      return j !== t.nil ? t._`${x}.call(${j}, ${ae})` : t._`${x}(${ae})`;
    }
    e.callValidateCode = y;
    let b = t._`new RegExp`;
    function f({ gen: p, it: { opts: w } }, C) {
      let R = w.unicodeRegExp ? "u" : "",
        { regExp: S } = w.code,
        q = S(C, R);
      return p.scopeValue("pattern", {
        key: q.toString(),
        ref: q,
        code: t._`${S.code === "new RegExp" ? b : (0, o.useFunc)(p, S)}(${C}, ${R})`,
      });
    }
    e.usePattern = f;
    function h(p) {
      let { gen: w, data: C, keyword: R, it: S } = p,
        q = w.name("valid");
      if (S.allErrors) {
        let x = w.let("valid", !0);
        return (L(() => w.assign(x, !1)), x);
      }
      return (w.var(q, !0), L(() => w.break()), q);
      function L(x) {
        let j = w.const("len", t._`${C}.length`);
        w.forRange("i", 0, j, (F) => {
          (p.subschema(
            { keyword: R, dataProp: F, dataPropType: r.Type.Num },
            q,
          ),
            w.if((0, t.not)(q), x));
        });
      }
    }
    e.validateArray = h;
    function g(p) {
      let { gen: w, schema: C, keyword: R, it: S } = p;
      if (!Array.isArray(C)) throw Error("ajv implementation error");
      if (C.some((x) => (0, r.alwaysValidSchema)(S, x)) && !S.opts.unevaluated)
        return;
      let q = w.let("valid", !1),
        L = w.name("_valid");
      (w.block(() =>
        C.forEach((x, j) => {
          let F = p.subschema(
            { keyword: R, schemaProp: j, compositeRule: !0 },
            L,
          );
          if ((w.assign(q, t._`${q} || ${L}`), !p.mergeValidEvaluated(F, L)))
            w.if((0, t.not)(q));
        }),
      ),
        p.result(
          q,
          () => p.reset(),
          () => p.error(!0),
        ));
    }
    e.validateUnion = g;
  }),
  di = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.validateKeywordUsage =
        e.validSchemaType =
        e.funcKeywordCode =
        e.macroKeywordCode =
          void 0));
    let t = te(),
      r = Ie(),
      a = Oe(),
      o = kr();
    function n(z, y) {
      let { gen: b, keyword: f, schema: h, parentSchema: g, it: p } = z,
        w = y.macro.call(p.self, h, g, p),
        C = m(b, f, w);
      if (p.opts.validateSchema !== !1) p.self.validateSchema(w, !0);
      let R = b.name("valid");
      (z.subschema(
        {
          schema: w,
          schemaPath: t.nil,
          errSchemaPath: `${p.errSchemaPath}/${f}`,
          topSchemaRef: C,
          compositeRule: !0,
        },
        R,
      ),
        z.pass(R, () => z.error(!0)));
    }
    e.macroKeywordCode = n;
    function i(z, y) {
      var b;
      let {
        gen: f,
        keyword: h,
        schema: g,
        parentSchema: p,
        $data: w,
        it: C,
      } = z;
      d(C, y);
      let R = m(
          f,
          h,
          !w && y.compile ? y.compile.call(C.self, g, p, C) : y.validate,
        ),
        S = f.let("valid");
      (z.block$data(S, q),
        z.ok((b = y.valid) !== null && b !== void 0 ? b : S));
      function q() {
        if (y.errors === !1) {
          if ((j(), y.modifying)) u(z);
          F(() => z.error());
        } else {
          let B = y.async ? L() : x();
          if (y.modifying) u(z);
          F(() => l(z, B));
        }
      }
      function L() {
        let B = f.let("ruleErrs", null);
        return (
          f.try(
            () => j(t._`await `),
            (G) =>
              f.assign(S, !1).if(
                t._`${G} instanceof ${C.ValidationError}`,
                () => f.assign(B, t._`${G}.errors`),
                () => f.throw(G),
              ),
          ),
          B
        );
      }
      function x() {
        let B = t._`${R}.errors`;
        return (f.assign(B, null), j(t.nil), B);
      }
      function j(B = y.async ? t._`await ` : t.nil) {
        let G = C.opts.passContext ? r.default.this : r.default.self,
          ae = !(("compile" in y && !w) || y.schema === !1);
        f.assign(
          S,
          t._`${B}${(0, a.callValidateCode)(z, R, G, ae)}`,
          y.modifying,
        );
      }
      function F(B) {
        var G;
        f.if((0, t.not)((G = y.valid) !== null && G !== void 0 ? G : S), B);
      }
    }
    e.funcKeywordCode = i;
    function u(z) {
      let { gen: y, data: b, it: f } = z;
      y.if(f.parentData, () =>
        y.assign(b, t._`${f.parentData}[${f.parentDataProperty}]`),
      );
    }
    function l(z, y) {
      let { gen: b } = z;
      b.if(
        t._`Array.isArray(${y})`,
        () => {
          (b
            .assign(
              r.default.vErrors,
              t._`${r.default.vErrors} === null ? ${y} : ${r.default.vErrors}.concat(${y})`,
            )
            .assign(r.default.errors, t._`${r.default.vErrors}.length`),
            (0, o.extendErrors)(z));
        },
        () => z.error(),
      );
    }
    function d({ schemaEnv: z }, y) {
      if (y.async && !z.$async) throw Error("async keyword in sync schema");
    }
    function m(z, y, b) {
      if (b === void 0) throw Error(`keyword "${y}" failed to compile`);
      return z.scopeValue(
        "keyword",
        typeof b == "function"
          ? { ref: b }
          : { ref: b, code: (0, t.stringify)(b) },
      );
    }
    function _(z, y, b = !1) {
      return (
        !y.length ||
        y.some((f) =>
          f === "array"
            ? Array.isArray(z)
            : f === "object"
              ? z && typeof z == "object" && !Array.isArray(z)
              : typeof z == f || (b && typeof z > "u"),
        )
      );
    }
    e.validSchemaType = _;
    function P({ schema: z, opts: y, self: b, errSchemaPath: f }, h, g) {
      if (Array.isArray(h.keyword) ? !h.keyword.includes(g) : h.keyword !== g)
        throw Error("ajv implementation error");
      let p = h.dependencies;
      if (
        p === null || p === void 0
          ? void 0
          : p.some((w) => !Object.prototype.hasOwnProperty.call(z, w))
      )
        throw Error(
          `parent schema must have dependencies of ${g}: ${p.join(",")}`,
        );
      if (h.validateSchema) {
        if (!h.validateSchema(z[g])) {
          let w =
            `keyword "${g}" value is invalid at path "${f}": ` +
            b.errorsText(h.validateSchema.errors);
          if (y.validateSchema === "log") b.logger.error(w);
          else throw Error(w);
        }
      }
    }
    e.validateKeywordUsage = P;
  }),
  hi = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.extendSubschemaMode =
        e.extendSubschemaData =
        e.getSubschema =
          void 0));
    let t = te(),
      r = ne();
    function a(
      i,
      {
        keyword: u,
        schemaProp: l,
        schema: d,
        schemaPath: m,
        errSchemaPath: _,
        topSchemaRef: P,
      },
    ) {
      if (u !== void 0 && d !== void 0)
        throw Error('both "keyword" and "schema" passed, only one allowed');
      if (u !== void 0) {
        let z = i.schema[u];
        return l === void 0
          ? {
              schema: z,
              schemaPath: t._`${i.schemaPath}${(0, t.getProperty)(u)}`,
              errSchemaPath: `${i.errSchemaPath}/${u}`,
            }
          : {
              schema: z[l],
              schemaPath: t._`${i.schemaPath}${(0, t.getProperty)(u)}${(0, t.getProperty)(l)}`,
              errSchemaPath: `${i.errSchemaPath}/${u}/${(0, r.escapeFragment)(l)}`,
            };
      }
      if (d !== void 0) {
        if (m === void 0 || _ === void 0 || P === void 0)
          throw Error(
            '"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"',
          );
        return { schema: d, schemaPath: m, topSchemaRef: P, errSchemaPath: _ };
      }
      throw Error('either "keyword" or "schema" must be passed');
    }
    e.getSubschema = a;
    function o(
      i,
      u,
      { dataProp: l, dataPropType: d, data: m, dataTypes: _, propertyName: P },
    ) {
      if (m !== void 0 && l !== void 0)
        throw Error('both "data" and "dataProp" passed, only one allowed');
      let { gen: z } = u;
      if (l !== void 0) {
        let { errorPath: b, dataPathArr: f, opts: h } = u;
        (y(z.let("data", t._`${u.data}${(0, t.getProperty)(l)}`, !0)),
          (i.errorPath = t.str`${b}${(0, r.getErrorPath)(l, d, h.jsPropertySyntax)}`),
          (i.parentDataProperty = t._`${l}`),
          (i.dataPathArr = [...f, i.parentDataProperty]));
      }
      if (m !== void 0) {
        if ((y(m instanceof t.Name ? m : z.let("data", m, !0)), P !== void 0))
          i.propertyName = P;
      }
      if (_) i.dataTypes = _;
      function y(b) {
        ((i.data = b),
          (i.dataLevel = u.dataLevel + 1),
          (i.dataTypes = []),
          (u.definedProperties = new Set()),
          (i.parentData = u.data),
          (i.dataNames = [...u.dataNames, b]));
      }
    }
    e.extendSubschemaData = o;
    function n(
      i,
      {
        jtdDiscriminator: u,
        jtdMetadata: l,
        compositeRule: d,
        createErrors: m,
        allErrors: _,
      },
    ) {
      if (d !== void 0) i.compositeRule = d;
      if (m !== void 0) i.createErrors = m;
      if (_ !== void 0) i.allErrors = _;
      ((i.jtdDiscriminator = u), (i.jtdMetadata = l));
    }
    e.extendSubschemaMode = n;
  }),
  za = K((e, t) => {
    t.exports = function r(a, o) {
      if (a === o) return !0;
      if (a && o && typeof a == "object" && typeof o == "object") {
        if (a.constructor !== o.constructor) return !1;
        var n, i, u;
        if (Array.isArray(a)) {
          if (((n = a.length), n != o.length)) return !1;
          for (i = n; i-- !== 0;) if (!r(a[i], o[i])) return !1;
          return !0;
        }
        if (a.constructor === RegExp)
          return a.source === o.source && a.flags === o.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === o.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === o.toString();
        if (((u = Object.keys(a)), (n = u.length), n !== Object.keys(o).length))
          return !1;
        for (i = n; i-- !== 0;)
          if (!Object.prototype.hasOwnProperty.call(o, u[i])) return !1;
        for (i = n; i-- !== 0;) {
          var l = u[i];
          if (!r(a[l], o[l])) return !1;
        }
        return !0;
      }
      return a !== a && o !== o;
    };
  }),
  mi = K((e, t) => {
    var r = (t.exports = function (n, i, u) {
      if (typeof i == "function") ((u = i), (i = {}));
      u = i.cb || u;
      var l = typeof u == "function" ? u : u.pre || function () {},
        d = u.post || function () {};
      a(i, l, d, n, "", n);
    });
    ((r.keywords = {
      additionalItems: !0,
      items: !0,
      contains: !0,
      additionalProperties: !0,
      propertyNames: !0,
      not: !0,
      if: !0,
      then: !0,
      else: !0,
    }),
      (r.arrayKeywords = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }),
      (r.propsKeywords = {
        $defs: !0,
        definitions: !0,
        properties: !0,
        patternProperties: !0,
        dependencies: !0,
      }),
      (r.skipKeywords = {
        default: !0,
        enum: !0,
        const: !0,
        required: !0,
        maximum: !0,
        minimum: !0,
        exclusiveMaximum: !0,
        exclusiveMinimum: !0,
        multipleOf: !0,
        maxLength: !0,
        minLength: !0,
        pattern: !0,
        format: !0,
        maxItems: !0,
        minItems: !0,
        uniqueItems: !0,
        maxProperties: !0,
        minProperties: !0,
      }));
    function a(n, i, u, l, d, m, _, P, z, y) {
      if (l && typeof l == "object" && !Array.isArray(l)) {
        i(l, d, m, _, P, z, y);
        for (var b in l) {
          var f = l[b];
          if (Array.isArray(f)) {
            if (b in r.arrayKeywords)
              for (var h = 0; h < f.length; h++)
                a(n, i, u, f[h], d + "/" + b + "/" + h, m, d, b, l, h);
          } else if (b in r.propsKeywords) {
            if (f && typeof f == "object")
              for (var g in f)
                a(n, i, u, f[g], d + "/" + b + "/" + o(g), m, d, b, l, g);
          } else if (b in r.keywords || (n.allKeys && !(b in r.skipKeywords)))
            a(n, i, u, f, d + "/" + b, m, d, b, l);
        }
        u(l, d, m, _, P, z, y);
      }
    }
    function o(n) {
      return n.replace(/~/g, "~0").replace(/\//g, "~1");
    }
  }),
  qr = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getSchemaRefs =
        e.resolveUrl =
        e.normalizeId =
        e._getFullPath =
        e.getFullPath =
        e.inlineRef =
          void 0));
    let t = ne(),
      r = za(),
      a = mi(),
      o = new Set([
        "type",
        "format",
        "pattern",
        "maxLength",
        "minLength",
        "maxProperties",
        "minProperties",
        "maxItems",
        "minItems",
        "maximum",
        "minimum",
        "uniqueItems",
        "multipleOf",
        "required",
        "enum",
        "const",
      ]);
    function n(f, h = !0) {
      if (typeof f == "boolean") return !0;
      if (h === !0) return !u(f);
      if (!h) return !1;
      return l(f) <= h;
    }
    e.inlineRef = n;
    let i = new Set([
      "$ref",
      "$recursiveRef",
      "$recursiveAnchor",
      "$dynamicRef",
      "$dynamicAnchor",
    ]);
    function u(f) {
      for (let h in f) {
        if (i.has(h)) return !0;
        let g = f[h];
        if (Array.isArray(g) && g.some(u)) return !0;
        if (typeof g == "object" && u(g)) return !0;
      }
      return !1;
    }
    function l(f) {
      let h = 0;
      for (let g in f) {
        if (g === "$ref") return 1 / 0;
        if ((h++, o.has(g))) continue;
        if (typeof f[g] == "object") (0, t.eachItem)(f[g], (p) => (h += l(p)));
        if (h === 1 / 0) return 1 / 0;
      }
      return h;
    }
    function d(f, h = "", g) {
      if (g !== !1) h = P(h);
      return m(f, f.parse(h));
    }
    e.getFullPath = d;
    function m(f, h) {
      return f.serialize(h).split("#")[0] + "#";
    }
    e._getFullPath = m;
    let _ = /#\/?$/;
    function P(f) {
      return f ? f.replace(_, "") : "";
    }
    e.normalizeId = P;
    function z(f, h, g) {
      return ((g = P(g)), f.resolve(h, g));
    }
    e.resolveUrl = z;
    let y = /^[a-z_][-a-z0-9._]*$/i;
    function b(f, h) {
      if (typeof f == "boolean") return {};
      let { schemaId: g, uriResolver: p } = this.opts,
        w = P(f[g] || h),
        C = { "": w },
        R = d(p, w, !1),
        S = {},
        q = new Set();
      return (
        a(f, { allKeys: !0 }, (j, F, B, G) => {
          if (G === void 0) return;
          let ae = R + F,
            le = C[G];
          if (typeof j[g] == "string") le = ie.call(this, j[g]);
          (me.call(this, j.$anchor),
            me.call(this, j.$dynamicAnchor),
            (C[F] = le));
          function ie(oe) {
            let M = this.opts.uriResolver.resolve;
            if (((oe = P(le ? M(le, oe) : oe)), q.has(oe))) throw x(oe);
            q.add(oe);
            let U = this.refs[oe];
            if (typeof U == "string") U = this.refs[U];
            if (typeof U == "object") L(j, U.schema, oe);
            else if (oe !== P(ae))
              if (oe[0] === "#") (L(j, S[oe], oe), (S[oe] = j));
              else this.refs[oe] = ae;
            return oe;
          }
          function me(oe) {
            if (typeof oe == "string") {
              if (!y.test(oe)) throw Error(`invalid anchor "${oe}"`);
              ie.call(this, `#${oe}`);
            }
          }
        }),
        S
      );
      function L(j, F, B) {
        if (F !== void 0 && !r(j, F)) throw x(B);
      }
      function x(j) {
        return Error(`reference "${j}" resolves to more than one schema`);
      }
    }
    e.getSchemaRefs = b;
  }),
  Wt = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getData = e.KeywordCxt = e.validateFunctionCode = void 0));
    let t = li(),
      r = Cr(),
      a = Ta(),
      o = Cr(),
      n = ui(),
      i = di(),
      u = hi(),
      l = te(),
      d = Ie(),
      m = qr(),
      _ = ne(),
      P = kr();
    function z(I) {
      if (R(I)) {
        if ((q(I), C(I))) {
          h(I);
          return;
        }
      }
      y(I, () => (0, t.topBoolOrEmptySchema)(I));
    }
    e.validateFunctionCode = z;
    function y(
      { gen: I, validateName: D, schema: V, schemaEnv: Y, opts: Z },
      ee,
    ) {
      if (Z.code.es5)
        I.func(D, l._`${d.default.data}, ${d.default.valCxt}`, Y.$async, () => {
          (I.code(l._`"use strict"; ${p(V, Z)}`), f(I, Z), I.code(ee));
        });
      else
        I.func(D, l._`${d.default.data}, ${b(Z)}`, Y.$async, () =>
          I.code(p(V, Z)).code(ee),
        );
    }
    function b(I) {
      return l._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${I.dynamicRef ? l._`, ${d.default.dynamicAnchors}={}` : l.nil}}={}`;
    }
    function f(I, D) {
      I.if(
        d.default.valCxt,
        () => {
          if (
            (I.var(
              d.default.instancePath,
              l._`${d.default.valCxt}.${d.default.instancePath}`,
            ),
            I.var(
              d.default.parentData,
              l._`${d.default.valCxt}.${d.default.parentData}`,
            ),
            I.var(
              d.default.parentDataProperty,
              l._`${d.default.valCxt}.${d.default.parentDataProperty}`,
            ),
            I.var(
              d.default.rootData,
              l._`${d.default.valCxt}.${d.default.rootData}`,
            ),
            D.dynamicRef)
          )
            I.var(
              d.default.dynamicAnchors,
              l._`${d.default.valCxt}.${d.default.dynamicAnchors}`,
            );
        },
        () => {
          if (
            (I.var(d.default.instancePath, l._`""`),
            I.var(d.default.parentData, l._`undefined`),
            I.var(d.default.parentDataProperty, l._`undefined`),
            I.var(d.default.rootData, d.default.data),
            D.dynamicRef)
          )
            I.var(d.default.dynamicAnchors, l._`{}`);
        },
      );
    }
    function h(I) {
      let { schema: D, opts: V, gen: Y } = I;
      y(I, () => {
        if (V.$comment && D.$comment) G(I);
        if (
          (j(I),
          Y.let(d.default.vErrors, null),
          Y.let(d.default.errors, 0),
          V.unevaluated)
        )
          g(I);
        (L(I), ae(I));
      });
    }
    function g(I) {
      let { gen: D, validateName: V } = I;
      ((I.evaluated = D.const("evaluated", l._`${V}.evaluated`)),
        D.if(l._`${I.evaluated}.dynamicProps`, () =>
          D.assign(l._`${I.evaluated}.props`, l._`undefined`),
        ),
        D.if(l._`${I.evaluated}.dynamicItems`, () =>
          D.assign(l._`${I.evaluated}.items`, l._`undefined`),
        ));
    }
    function p(I, D) {
      let V = typeof I == "object" && I[D.schemaId];
      return V && (D.code.source || D.code.process)
        ? l._`/*# sourceURL=${V} */`
        : l.nil;
    }
    function w(I, D) {
      if (R(I)) {
        if ((q(I), C(I))) {
          S(I, D);
          return;
        }
      }
      (0, t.boolOrEmptySchema)(I, D);
    }
    function C({ schema: I, self: D }) {
      if (typeof I == "boolean") return !I;
      for (let V in I) if (D.RULES.all[V]) return !0;
      return !1;
    }
    function R(I) {
      return typeof I.schema != "boolean";
    }
    function S(I, D) {
      let { schema: V, gen: Y, opts: Z } = I;
      if (Z.$comment && V.$comment) G(I);
      (F(I), B(I));
      let ee = Y.const("_errs", d.default.errors);
      (L(I, ee), Y.var(D, l._`${ee} === ${d.default.errors}`));
    }
    function q(I) {
      ((0, _.checkUnknownRules)(I), x(I));
    }
    function L(I, D) {
      if (I.opts.jtd) return ie(I, [], !1, D);
      let V = (0, r.getSchemaTypes)(I.schema);
      ie(I, V, !(0, r.coerceAndCheckDataType)(I, V), D);
    }
    function x(I) {
      let { schema: D, errSchemaPath: V, opts: Y, self: Z } = I;
      if (
        D.$ref &&
        Y.ignoreKeywordsWithRef &&
        (0, _.schemaHasRulesButRef)(D, Z.RULES)
      )
        Z.logger.warn(`$ref: keywords ignored in schema at path "${V}"`);
    }
    function j(I) {
      let { schema: D, opts: V } = I;
      if (D.default !== void 0 && V.useDefaults && V.strictSchema)
        (0, _.checkStrictMode)(I, "default is ignored in the schema root");
    }
    function F(I) {
      let D = I.schema[I.opts.schemaId];
      if (D) I.baseId = (0, m.resolveUrl)(I.opts.uriResolver, I.baseId, D);
    }
    function B(I) {
      if (I.schema.$async && !I.schemaEnv.$async)
        throw Error("async schema in sync schema");
    }
    function G({ gen: I, schemaEnv: D, schema: V, errSchemaPath: Y, opts: Z }) {
      let ee = V.$comment;
      if (Z.$comment === !0) I.code(l._`${d.default.self}.logger.log(${ee})`);
      else if (typeof Z.$comment == "function") {
        let de = l.str`${Y}/$comment`,
          Se = I.scopeValue("root", { ref: D.root });
        I.code(
          l._`${d.default.self}.opts.$comment(${ee}, ${de}, ${Se}.schema)`,
        );
      }
    }
    function ae(I) {
      let {
        gen: D,
        schemaEnv: V,
        validateName: Y,
        ValidationError: Z,
        opts: ee,
      } = I;
      if (V.$async)
        D.if(
          l._`${d.default.errors} === 0`,
          () => D.return(d.default.data),
          () => D.throw(l._`new ${Z}(${d.default.vErrors})`),
        );
      else {
        if ((D.assign(l._`${Y}.errors`, d.default.vErrors), ee.unevaluated))
          le(I);
        D.return(l._`${d.default.errors} === 0`);
      }
    }
    function le({ gen: I, evaluated: D, props: V, items: Y }) {
      if (V instanceof l.Name) I.assign(l._`${D}.props`, V);
      if (Y instanceof l.Name) I.assign(l._`${D}.items`, Y);
    }
    function ie(I, D, V, Y) {
      let {
          gen: Z,
          schema: ee,
          data: de,
          allErrors: Se,
          opts: _e,
          self: pe,
        } = I,
        { RULES: ue } = pe;
      if (
        ee.$ref &&
        (_e.ignoreKeywordsWithRef || !(0, _.schemaHasRulesButRef)(ee, ue))
      ) {
        Z.block(() => re(I, "$ref", ue.all.$ref.definition));
        return;
      }
      if (!_e.jtd) oe(I, D);
      Z.block(() => {
        for (let ge of ue.rules) ze(ge);
        ze(ue.post);
      });
      function ze(ge) {
        if (!(0, a.shouldUseGroup)(ee, ge)) return;
        if (ge.type) {
          if (
            (Z.if((0, o.checkDataType)(ge.type, de, _e.strictNumbers)),
            me(I, ge),
            D.length === 1 && D[0] === ge.type && V)
          )
            (Z.else(), (0, o.reportTypeError)(I));
          Z.endIf();
        } else me(I, ge);
        if (!Se) Z.if(l._`${d.default.errors} === ${Y || 0}`);
      }
    }
    function me(I, D) {
      let {
        gen: V,
        schema: Y,
        opts: { useDefaults: Z },
      } = I;
      if (Z) (0, n.assignDefaults)(I, D.type);
      V.block(() => {
        for (let ee of D.rules)
          if ((0, a.shouldUseRule)(Y, ee))
            re(I, ee.keyword, ee.definition, D.type);
      });
    }
    function oe(I, D) {
      if (I.schemaEnv.meta || !I.opts.strictTypes) return;
      if ((M(I, D), !I.opts.allowUnionTypes)) U(I, D);
      H(I, I.dataTypes);
    }
    function M(I, D) {
      if (!D.length) return;
      if (!I.dataTypes.length) {
        I.dataTypes = D;
        return;
      }
      (D.forEach((V) => {
        if (!N(I.dataTypes, V))
          J(I, `type "${V}" not allowed by context "${I.dataTypes.join(",")}"`);
      }),
        A(I, D));
    }
    function U(I, D) {
      if (D.length > 1 && !(D.length === 2 && D.includes("null")))
        J(I, "use allowUnionTypes to allow union type keyword");
    }
    function H(I, D) {
      let V = I.self.RULES.all;
      for (let Y in V) {
        let Z = V[Y];
        if (typeof Z == "object" && (0, a.shouldUseRule)(I.schema, Z)) {
          let { type: ee } = Z.definition;
          if (ee.length && !ee.some((de) => E(D, de)))
            J(I, `missing type "${ee.join(",")}" for keyword "${Y}"`);
        }
      }
    }
    function E(I, D) {
      return I.includes(D) || (D === "number" && I.includes("integer"));
    }
    function N(I, D) {
      return I.includes(D) || (D === "integer" && I.includes("number"));
    }
    function A(I, D) {
      let V = [];
      for (let Y of I.dataTypes)
        if (N(D, Y)) V.push(Y);
        else if (D.includes("integer") && Y === "number") V.push("integer");
      I.dataTypes = V;
    }
    function J(I, D) {
      let V = I.schemaEnv.baseId + I.errSchemaPath;
      ((D += ` at "${V}" (strictTypes)`),
        (0, _.checkStrictMode)(I, D, I.opts.strictTypes));
    }
    var W = class {
      constructor(I, D, V) {
        if (
          ((0, i.validateKeywordUsage)(I, D, V),
          (this.gen = I.gen),
          (this.allErrors = I.allErrors),
          (this.keyword = V),
          (this.data = I.data),
          (this.schema = I.schema[V]),
          (this.$data =
            D.$data && I.opts.$data && this.schema && this.schema.$data),
          (this.schemaValue = (0, _.schemaRefOrVal)(
            I,
            this.schema,
            V,
            this.$data,
          )),
          (this.schemaType = D.schemaType),
          (this.parentSchema = I.schema),
          (this.params = {}),
          (this.it = I),
          (this.def = D),
          this.$data)
        )
          this.schemaCode = I.gen.const("vSchema", be(this.$data, I));
        else if (
          ((this.schemaCode = this.schemaValue),
          !(0, i.validSchemaType)(this.schema, D.schemaType, D.allowUndefined))
        )
          throw Error(`${V} value must be ${JSON.stringify(D.schemaType)}`);
        if ("code" in D ? D.trackErrors : D.errors !== !1)
          this.errsCount = I.gen.const("_errs", d.default.errors);
      }
      result(I, D, V) {
        this.failResult((0, l.not)(I), D, V);
      }
      failResult(I, D, V) {
        if ((this.gen.if(I), V)) V();
        else this.error();
        if (D) {
          if ((this.gen.else(), D(), this.allErrors)) this.gen.endIf();
        } else if (this.allErrors) this.gen.endIf();
        else this.gen.else();
      }
      pass(I, D) {
        this.failResult((0, l.not)(I), void 0, D);
      }
      fail(I) {
        if (I === void 0) {
          if ((this.error(), !this.allErrors)) this.gen.if(!1);
          return;
        }
        if ((this.gen.if(I), this.error(), this.allErrors)) this.gen.endIf();
        else this.gen.else();
      }
      fail$data(I) {
        if (!this.$data) return this.fail(I);
        let { schemaCode: D } = this;
        this.fail(
          l._`${D} !== undefined && (${(0, l.or)(this.invalid$data(), I)})`,
        );
      }
      error(I, D, V) {
        if (D) {
          (this.setParams(D), this._error(I, V), this.setParams({}));
          return;
        }
        this._error(I, V);
      }
      _error(I, D) {
        (I ? P.reportExtraError : P.reportError)(this, this.def.error, D);
      }
      $dataError() {
        (0, P.reportError)(this, this.def.$dataError || P.keyword$DataError);
      }
      reset() {
        if (this.errsCount === void 0)
          throw Error('add "trackErrors" to keyword definition');
        (0, P.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(I) {
        if (!this.allErrors) this.gen.if(I);
      }
      setParams(I, D) {
        if (D) Object.assign(this.params, I);
        else this.params = I;
      }
      block$data(I, D, V = l.nil) {
        this.gen.block(() => {
          (this.check$data(I, V), D());
        });
      }
      check$data(I = l.nil, D = l.nil) {
        if (!this.$data) return;
        let { gen: V, schemaCode: Y, schemaType: Z, def: ee } = this;
        if ((V.if((0, l.or)(l._`${Y} === undefined`, D)), I !== l.nil))
          V.assign(I, !0);
        if (Z.length || ee.validateSchema) {
          if ((V.elseIf(this.invalid$data()), this.$dataError(), I !== l.nil))
            V.assign(I, !1);
        }
        V.else();
      }
      invalid$data() {
        let { gen: I, schemaCode: D, schemaType: V, def: Y, it: Z } = this;
        return (0, l.or)(ee(), de());
        function ee() {
          if (V.length) {
            if (!(D instanceof l.Name)) throw Error("ajv implementation error");
            let Se = Array.isArray(V) ? V : [V];
            return l._`${(0, o.checkDataTypes)(Se, D, Z.opts.strictNumbers, o.DataType.Wrong)}`;
          }
          return l.nil;
        }
        function de() {
          if (Y.validateSchema) {
            let Se = I.scopeValue("validate$data", { ref: Y.validateSchema });
            return l._`!${Se}(${D})`;
          }
          return l.nil;
        }
      }
      subschema(I, D) {
        let V = (0, u.getSubschema)(this.it, I);
        ((0, u.extendSubschemaData)(V, this.it, I),
          (0, u.extendSubschemaMode)(V, I));
        let Y = { ...this.it, ...V, items: void 0, props: void 0 };
        return (w(Y, D), Y);
      }
      mergeEvaluated(I, D) {
        let { it: V, gen: Y } = this;
        if (!V.opts.unevaluated) return;
        if (V.props !== !0 && I.props !== void 0)
          V.props = _.mergeEvaluated.props(Y, I.props, V.props, D);
        if (V.items !== !0 && I.items !== void 0)
          V.items = _.mergeEvaluated.items(Y, I.items, V.items, D);
      }
      mergeValidEvaluated(I, D) {
        let { it: V, gen: Y } = this;
        if (V.opts.unevaluated && (V.props !== !0 || V.items !== !0))
          return (Y.if(D, () => this.mergeEvaluated(I, l.Name)), !0);
      }
    };
    e.KeywordCxt = W;
    function re(I, D, V, Y) {
      let Z = new W(I, V, D);
      if ("code" in V) V.code(Z, Y);
      else if (Z.$data && V.validate) (0, i.funcKeywordCode)(Z, V);
      else if ("macro" in V) (0, i.macroKeywordCode)(Z, V);
      else if (V.compile || V.validate) (0, i.funcKeywordCode)(Z, V);
    }
    let Q = /^\/(?:[^~]|~0|~1)*$/,
      ce = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function be(I, { dataLevel: D, dataNames: V, dataPathArr: Y }) {
      let Z, ee;
      if (I === "") return d.default.rootData;
      if (I[0] === "/") {
        if (!Q.test(I)) throw Error(`Invalid JSON-pointer: ${I}`);
        ((Z = I), (ee = d.default.rootData));
      } else {
        let pe = ce.exec(I);
        if (!pe) throw Error(`Invalid JSON-pointer: ${I}`);
        let ue = +pe[1];
        if (((Z = pe[2]), Z === "#")) {
          if (ue >= D) throw Error(_e("property/index", ue));
          return Y[D - ue];
        }
        if (ue > D) throw Error(_e("data", ue));
        if (((ee = V[D - ue]), !Z)) return ee;
      }
      let de = ee,
        Se = Z.split("/");
      for (let pe of Se)
        if (pe)
          ((ee = l._`${ee}${(0, l.getProperty)((0, _.unescapeJsonPointer)(pe))}`),
            (de = l._`${de} && ${ee}`));
      return de;
      function _e(pe, ue) {
        return `Cannot access ${pe} ${ue} levels up, current level is ${D}`;
      }
    }
    e.getData = be;
  }),
  Ir = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = class extends Error {
      constructor(r) {
        super("validation failed");
        ((this.errors = r), (this.ajv = this.validation = !0));
      }
    };
    e.default = t;
  }),
  Yt = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = qr();
    var r = class extends Error {
      constructor(a, o, n, i) {
        super(i || `can't resolve reference ${n} from id ${o}`);
        ((this.missingRef = (0, t.resolveUrl)(a, o, n)),
          (this.missingSchema = (0, t.normalizeId)(
            (0, t.getFullPath)(a, this.missingRef),
          )));
      }
    };
    e.default = r;
  }),
  Or = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.resolveSchema =
        e.getCompilingSchema =
        e.resolveRef =
        e.compileSchema =
        e.SchemaEnv =
          void 0));
    let t = te(),
      r = Ir(),
      a = Ie(),
      o = qr(),
      n = ne(),
      i = Wt();
    var u = class {
      constructor(h) {
        var g;
        ((this.refs = {}), (this.dynamicAnchors = {}));
        let p;
        if (typeof h.schema == "object") p = h.schema;
        ((this.schema = h.schema),
          (this.schemaId = h.schemaId),
          (this.root = h.root || this),
          (this.baseId =
            (g = h.baseId) !== null && g !== void 0
              ? g
              : (0, o.normalizeId)(
                  p === null || p === void 0 ? void 0 : p[h.schemaId || "$id"],
                )),
          (this.schemaPath = h.schemaPath),
          (this.localRefs = h.localRefs),
          (this.meta = h.meta),
          (this.$async = p === null || p === void 0 ? void 0 : p.$async),
          (this.refs = {}));
      }
    };
    e.SchemaEnv = u;
    function l(h) {
      let g = _.call(this, h);
      if (g) return g;
      let p = (0, o.getFullPath)(this.opts.uriResolver, h.root.baseId),
        { es5: w, lines: C } = this.opts.code,
        { ownProperties: R } = this.opts,
        S = new t.CodeGen(this.scope, { es5: w, lines: C, ownProperties: R }),
        q;
      if (h.$async)
        q = S.scopeValue("Error", {
          ref: r.default,
          code: t._`require("ajv/dist/runtime/validation_error").default`,
        });
      let L = S.scopeName("validate");
      h.validateName = L;
      let x = {
          gen: S,
          allErrors: this.opts.allErrors,
          data: a.default.data,
          parentData: a.default.parentData,
          parentDataProperty: a.default.parentDataProperty,
          dataNames: [a.default.data],
          dataPathArr: [t.nil],
          dataLevel: 0,
          dataTypes: [],
          definedProperties: new Set(),
          topSchemaRef: S.scopeValue(
            "schema",
            this.opts.code.source === !0
              ? { ref: h.schema, code: (0, t.stringify)(h.schema) }
              : { ref: h.schema },
          ),
          validateName: L,
          ValidationError: q,
          schema: h.schema,
          schemaEnv: h,
          rootId: p,
          baseId: h.baseId || p,
          schemaPath: t.nil,
          errSchemaPath: h.schemaPath || (this.opts.jtd ? "" : "#"),
          errorPath: t._`""`,
          opts: this.opts,
          self: this,
        },
        j;
      try {
        (this._compilations.add(h),
          (0, i.validateFunctionCode)(x),
          S.optimize(this.opts.code.optimize));
        let F = S.toString();
        if (
          ((j = `${S.scopeRefs(a.default.scope)}return ${F}`),
          this.opts.code.process)
        )
          j = this.opts.code.process(j, h);
        let B = Function(
          `${a.default.self}`,
          `${a.default.scope}`,
          j,
        )(this, this.scope.get());
        if (
          (this.scope.value(L, { ref: B }),
          (B.errors = null),
          (B.schema = h.schema),
          (B.schemaEnv = h),
          h.$async)
        )
          B.$async = !0;
        if (this.opts.code.source === !0)
          B.source = {
            validateName: L,
            validateCode: F,
            scopeValues: S._values,
          };
        if (this.opts.unevaluated) {
          let { props: G, items: ae } = x;
          if (
            ((B.evaluated = {
              props: G instanceof t.Name ? void 0 : G,
              items: ae instanceof t.Name ? void 0 : ae,
              dynamicProps: G instanceof t.Name,
              dynamicItems: ae instanceof t.Name,
            }),
            B.source)
          )
            B.source.evaluated = (0, t.stringify)(B.evaluated);
        }
        return ((h.validate = B), h);
      } catch (F) {
        if ((delete h.validate, delete h.validateName, j))
          this.logger.error("Error compiling schema, function code:", j);
        throw F;
      } finally {
        this._compilations.delete(h);
      }
    }
    e.compileSchema = l;
    function d(h, g, p) {
      var w;
      p = (0, o.resolveUrl)(this.opts.uriResolver, g, p);
      let C = h.refs[p];
      if (C) return C;
      let R = z.call(this, h, p);
      if (R === void 0) {
        let S = (w = h.localRefs) === null || w === void 0 ? void 0 : w[p],
          { schemaId: q } = this.opts;
        if (S) R = new u({ schema: S, schemaId: q, root: h, baseId: g });
      }
      if (R === void 0) return;
      return (h.refs[p] = m.call(this, R));
    }
    e.resolveRef = d;
    function m(h) {
      if ((0, o.inlineRef)(h.schema, this.opts.inlineRefs)) return h.schema;
      return h.validate ? h : l.call(this, h);
    }
    function _(h) {
      for (let g of this._compilations) if (P(g, h)) return g;
    }
    e.getCompilingSchema = _;
    function P(h, g) {
      return (
        h.schema === g.schema && h.root === g.root && h.baseId === g.baseId
      );
    }
    function z(h, g) {
      let p;
      while (typeof (p = this.refs[g]) == "string") g = p;
      return p || this.schemas[g] || y.call(this, h, g);
    }
    function y(h, g) {
      let p = this.opts.uriResolver.parse(g),
        w = (0, o._getFullPath)(this.opts.uriResolver, p),
        C = (0, o.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
      if (Object.keys(h.schema).length > 0 && w === C)
        return f.call(this, p, h);
      let R = (0, o.normalizeId)(w),
        S = this.refs[R] || this.schemas[R];
      if (typeof S == "string") {
        let q = y.call(this, h, S);
        if (
          typeof (q === null || q === void 0 ? void 0 : q.schema) !== "object"
        )
          return;
        return f.call(this, p, q);
      }
      if (typeof (S === null || S === void 0 ? void 0 : S.schema) !== "object")
        return;
      if (!S.validate) l.call(this, S);
      if (R === (0, o.normalizeId)(g)) {
        let { schema: q } = S,
          { schemaId: L } = this.opts,
          x = q[L];
        if (x) C = (0, o.resolveUrl)(this.opts.uriResolver, C, x);
        return new u({ schema: q, schemaId: L, root: h, baseId: C });
      }
      return f.call(this, p, S);
    }
    e.resolveSchema = y;
    let b = new Set([
      "properties",
      "patternProperties",
      "enum",
      "dependencies",
      "definitions",
    ]);
    function f(h, { baseId: g, schema: p, root: w }) {
      var C;
      if (((C = h.fragment) === null || C === void 0 ? void 0 : C[0]) !== "/")
        return;
      for (let q of h.fragment.slice(1).split("/")) {
        if (typeof p === "boolean") return;
        let L = p[(0, n.unescapeFragment)(q)];
        if (L === void 0) return;
        p = L;
        let x = typeof p === "object" && p[this.opts.schemaId];
        if (!b.has(q) && x) g = (0, o.resolveUrl)(this.opts.uriResolver, g, x);
      }
      let R;
      if (
        typeof p != "boolean" &&
        p.$ref &&
        !(0, n.schemaHasRulesButRef)(p, this.RULES)
      ) {
        let q = (0, o.resolveUrl)(this.opts.uriResolver, g, p.$ref);
        R = y.call(this, w, q);
      }
      let { schemaId: S } = this.opts;
      if (
        ((R = R || new u({ schema: p, schemaId: S, root: w, baseId: g })),
        R.schema !== R.root.schema)
      )
        return R;
    }
  }),
  fi = K((e, t) => {
    t.exports = {
      $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
      description:
        "Meta-schema for $data reference (JSON AnySchema extension proposal)",
      type: "object",
      required: ["$data"],
      properties: {
        $data: {
          type: "string",
          anyOf: [
            { format: "relative-json-pointer" },
            { format: "json-pointer" },
          ],
        },
      },
      additionalProperties: !1,
    };
  }),
  Ca = K((e, t) => {
    let r = RegExp.prototype.test.bind(
        /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu,
      ),
      a = RegExp.prototype.test.bind(
        /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u,
      );
    function o(y) {
      let b = "",
        f = 0,
        h = 0;
      for (h = 0; h < y.length; h++) {
        if (((f = y[h].charCodeAt(0)), f === 48)) continue;
        if (!(
          (f >= 48 && f <= 57) ||
          (f >= 65 && f <= 70) ||
          (f >= 97 && f <= 102)
        ))
          return "";
        b += y[h];
        break;
      }
      for (h += 1; h < y.length; h++) {
        if (
          ((f = y[h].charCodeAt(0)),
          !(
            (f >= 48 && f <= 57) ||
            (f >= 65 && f <= 70) ||
            (f >= 97 && f <= 102)
          ))
        )
          return "";
        b += y[h];
      }
      return b;
    }
    let n = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function i(y) {
      return ((y.length = 0), !0);
    }
    function u(y, b, f) {
      if (y.length) {
        let h = o(y);
        if (h !== "") b.push(h);
        else return ((f.error = !0), !1);
        y.length = 0;
      }
      return !0;
    }
    function l(y) {
      let b = 0,
        f = { error: !1, address: "", zone: "" },
        h = [],
        g = [],
        p = !1,
        w = !1,
        C = u;
      for (let R = 0; R < y.length; R++) {
        let S = y[R];
        if (S === "[" || S === "]") continue;
        if (S === ":") {
          if (p === !0) w = !0;
          if (!C(g, h, f)) break;
          if (++b > 7) {
            f.error = !0;
            break;
          }
          if (R > 0 && y[R - 1] === ":") p = !0;
          h.push(":");
          continue;
        } else if (S === "%") {
          if (!C(g, h, f)) break;
          C = i;
        } else {
          g.push(S);
          continue;
        }
      }
      if (g.length)
        if (C === i) f.zone = g.join("");
        else if (w) h.push(g.join(""));
        else h.push(o(g));
      return ((f.address = h.join("")), f);
    }
    function d(y) {
      if (m(y, ":") < 2) return { host: y, isIPV6: !1 };
      let b = l(y);
      if (!b.error) {
        let { address: f, address: h } = b;
        if (b.zone) ((f += "%" + b.zone), (h += "%25" + b.zone));
        return { host: f, isIPV6: !0, escapedHost: h };
      } else return { host: y, isIPV6: !1 };
    }
    function m(y, b) {
      let f = 0;
      for (let h = 0; h < y.length; h++) if (y[h] === b) f++;
      return f;
    }
    function _(y) {
      let b = y,
        f = [],
        h = -1,
        g = 0;
      while ((g = b.length)) {
        if (g === 1)
          if (b === ".") break;
          else if (b === "/") {
            f.push("/");
            break;
          } else {
            f.push(b);
            break;
          }
        else if (g === 2) {
          if (b[0] === ".") {
            if (b[1] === ".") break;
            else if (b[1] === "/") {
              b = b.slice(2);
              continue;
            }
          } else if (b[0] === "/") {
            if (b[1] === "." || b[1] === "/") {
              f.push("/");
              break;
            }
          }
        } else if (g === 3) {
          if (b === "/..") {
            if (f.length !== 0) f.pop();
            f.push("/");
            break;
          }
        }
        if (b[0] === ".") {
          if (b[1] === ".") {
            if (b[2] === "/") {
              b = b.slice(3);
              continue;
            }
          } else if (b[1] === "/") {
            b = b.slice(2);
            continue;
          }
        } else if (b[0] === "/") {
          if (b[1] === ".") {
            if (b[2] === "/") {
              b = b.slice(2);
              continue;
            } else if (b[2] === ".") {
              if (b[3] === "/") {
                if (((b = b.slice(3)), f.length !== 0)) f.pop();
                continue;
              }
            }
          }
        }
        if ((h = b.indexOf("/", 1)) === -1) {
          f.push(b);
          break;
        } else (f.push(b.slice(0, h)), (b = b.slice(h)));
      }
      return f.join("");
    }
    function P(y, b) {
      let f = b !== !0 ? escape : unescape;
      if (y.scheme !== void 0) y.scheme = f(y.scheme);
      if (y.userinfo !== void 0) y.userinfo = f(y.userinfo);
      if (y.host !== void 0) y.host = f(y.host);
      if (y.path !== void 0) y.path = f(y.path);
      if (y.query !== void 0) y.query = f(y.query);
      if (y.fragment !== void 0) y.fragment = f(y.fragment);
      return y;
    }
    function z(y) {
      let b = [];
      if (y.userinfo !== void 0) (b.push(y.userinfo), b.push("@"));
      if (y.host !== void 0) {
        let f = unescape(y.host);
        if (!a(f)) {
          let h = d(f);
          if (h.isIPV6 === !0) f = `[${h.escapedHost}]`;
          else f = y.host;
        }
        b.push(f);
      }
      if (typeof y.port === "number" || typeof y.port === "string")
        (b.push(":"), b.push(String(y.port)));
      return b.length ? b.join("") : void 0;
    }
    t.exports = {
      nonSimpleDomain: n,
      recomposeAuthority: z,
      normalizeComponentEncoding: P,
      removeDotSegments: _,
      isIPv4: a,
      isUUID: r,
      normalizeIPv6: d,
      stringArrayToHexStripped: o,
    };
  }),
  pi = K((e, t) => {
    let { isUUID: r } = Ca(),
      a = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,
      o = ["http", "https", "ws", "wss", "urn", "urn:uuid"];
    function n(S) {
      return o.indexOf(S) !== -1;
    }
    function i(S) {
      if (S.secure === !0) return !0;
      else if (S.secure === !1) return !1;
      else if (S.scheme)
        return (
          S.scheme.length === 3 &&
          (S.scheme[0] === "w" || S.scheme[0] === "W") &&
          (S.scheme[1] === "s" || S.scheme[1] === "S") &&
          (S.scheme[2] === "s" || S.scheme[2] === "S")
        );
      else return !1;
    }
    function u(S) {
      if (!S.host) S.error = S.error || "HTTP URIs must have a host.";
      return S;
    }
    function l(S) {
      let q = String(S.scheme).toLowerCase() === "https";
      if (S.port === (q ? 443 : 80) || S.port === "") S.port = void 0;
      if (!S.path) S.path = "/";
      return S;
    }
    function d(S) {
      return (
        (S.secure = i(S)),
        (S.resourceName = (S.path || "/") + (S.query ? "?" + S.query : "")),
        (S.path = void 0),
        (S.query = void 0),
        S
      );
    }
    function m(S) {
      if (S.port === (i(S) ? 443 : 80) || S.port === "") S.port = void 0;
      if (typeof S.secure === "boolean")
        ((S.scheme = S.secure ? "wss" : "ws"), (S.secure = void 0));
      if (S.resourceName) {
        let [q, L] = S.resourceName.split("?");
        ((S.path = q && q !== "/" ? q : void 0),
          (S.query = L),
          (S.resourceName = void 0));
      }
      return ((S.fragment = void 0), S);
    }
    function _(S, q) {
      if (!S.path) return ((S.error = "URN can not be parsed"), S);
      let L = S.path.match(a);
      if (L) {
        let x = q.scheme || S.scheme || "urn";
        ((S.nid = L[1].toLowerCase()), (S.nss = L[2]));
        let j = R(`${x}:${q.nid || S.nid}`);
        if (((S.path = void 0), j)) S = j.parse(S, q);
      } else S.error = S.error || "URN can not be parsed.";
      return S;
    }
    function P(S, q) {
      if (S.nid === void 0) throw Error("URN without nid cannot be serialized");
      let L = q.scheme || S.scheme || "urn",
        x = S.nid.toLowerCase(),
        j = R(`${L}:${q.nid || x}`);
      if (j) S = j.serialize(S, q);
      let F = S,
        B = S.nss;
      return ((F.path = `${x || q.nid}:${B}`), (q.skipEscape = !0), F);
    }
    function z(S, q) {
      let L = S;
      if (
        ((L.uuid = L.nss),
        (L.nss = void 0),
        !q.tolerant && (!L.uuid || !r(L.uuid)))
      )
        L.error = L.error || "UUID is not valid.";
      return L;
    }
    function y(S) {
      let q = S;
      return ((q.nss = (S.uuid || "").toLowerCase()), q);
    }
    let b = { scheme: "http", domainHost: !0, parse: u, serialize: l },
      f = { scheme: "https", domainHost: b.domainHost, parse: u, serialize: l },
      h = { scheme: "ws", domainHost: !0, parse: d, serialize: m },
      g = {
        scheme: "wss",
        domainHost: h.domainHost,
        parse: h.parse,
        serialize: h.serialize,
      },
      C = {
        http: b,
        https: f,
        ws: h,
        wss: g,
        urn: { scheme: "urn", parse: _, serialize: P, skipNormalize: !0 },
        "urn:uuid": {
          scheme: "urn:uuid",
          parse: z,
          serialize: y,
          skipNormalize: !0,
        },
      };
    Object.setPrototypeOf(C, null);
    function R(S) {
      return (S && (C[S] || C[S.toLowerCase()])) || void 0;
    }
    t.exports = {
      wsIsSecure: i,
      SCHEMES: C,
      isValidSchemeName: n,
      getSchemeHandler: R,
    };
  }),
  Si = K((e, t) => {
    let {
        normalizeIPv6: r,
        removeDotSegments: a,
        recomposeAuthority: o,
        normalizeComponentEncoding: n,
        isIPv4: i,
        nonSimpleDomain: u,
      } = Ca(),
      { SCHEMES: l, getSchemeHandler: d } = pi();
    function m(g, p) {
      if (typeof g === "string") g = y(f(g, p), p);
      else if (typeof g === "object") g = f(y(g, p), p);
      return g;
    }
    function _(g, p, w) {
      let C = w ? Object.assign({ scheme: "null" }, w) : { scheme: "null" },
        R = P(f(g, C), f(p, C), C, !0);
      return ((C.skipEscape = !0), y(R, C));
    }
    function P(g, p, w, C) {
      let R = {};
      if (!C) ((g = f(y(g, w), w)), (p = f(y(p, w), w)));
      if (((w = w || {}), !w.tolerant && p.scheme))
        ((R.scheme = p.scheme),
          (R.userinfo = p.userinfo),
          (R.host = p.host),
          (R.port = p.port),
          (R.path = a(p.path || "")),
          (R.query = p.query));
      else {
        if (p.userinfo !== void 0 || p.host !== void 0 || p.port !== void 0)
          ((R.userinfo = p.userinfo),
            (R.host = p.host),
            (R.port = p.port),
            (R.path = a(p.path || "")),
            (R.query = p.query));
        else {
          if (!p.path)
            if (((R.path = g.path), p.query !== void 0)) R.query = p.query;
            else R.query = g.query;
          else {
            if (p.path[0] === "/") R.path = a(p.path);
            else {
              if (
                (g.userinfo !== void 0 ||
                  g.host !== void 0 ||
                  g.port !== void 0) &&
                !g.path
              )
                R.path = "/" + p.path;
              else if (!g.path) R.path = p.path;
              else
                R.path = g.path.slice(0, g.path.lastIndexOf("/") + 1) + p.path;
              R.path = a(R.path);
            }
            R.query = p.query;
          }
          ((R.userinfo = g.userinfo), (R.host = g.host), (R.port = g.port));
        }
        R.scheme = g.scheme;
      }
      return ((R.fragment = p.fragment), R);
    }
    function z(g, p, w) {
      if (typeof g === "string")
        ((g = unescape(g)), (g = y(n(f(g, w), !0), { ...w, skipEscape: !0 })));
      else if (typeof g === "object") g = y(n(g, !0), { ...w, skipEscape: !0 });
      if (typeof p === "string")
        ((p = unescape(p)), (p = y(n(f(p, w), !0), { ...w, skipEscape: !0 })));
      else if (typeof p === "object") p = y(n(p, !0), { ...w, skipEscape: !0 });
      return g.toLowerCase() === p.toLowerCase();
    }
    function y(g, p) {
      let w = {
          host: g.host,
          scheme: g.scheme,
          userinfo: g.userinfo,
          port: g.port,
          path: g.path,
          query: g.query,
          nid: g.nid,
          nss: g.nss,
          uuid: g.uuid,
          fragment: g.fragment,
          reference: g.reference,
          resourceName: g.resourceName,
          secure: g.secure,
          error: "",
        },
        C = Object.assign({}, p),
        R = [],
        S = d(C.scheme || w.scheme);
      if (S && S.serialize) S.serialize(w, C);
      if (w.path !== void 0)
        if (!C.skipEscape) {
          if (((w.path = escape(w.path)), w.scheme !== void 0))
            w.path = w.path.split("%3A").join(":");
        } else w.path = unescape(w.path);
      if (C.reference !== "suffix" && w.scheme) R.push(w.scheme, ":");
      let q = o(w);
      if (q !== void 0) {
        if (C.reference !== "suffix") R.push("//");
        if ((R.push(q), w.path && w.path[0] !== "/")) R.push("/");
      }
      if (w.path !== void 0) {
        let L = w.path;
        if (!C.absolutePath && (!S || !S.absolutePath)) L = a(L);
        if (q === void 0 && L[0] === "/" && L[1] === "/")
          L = "/%2F" + L.slice(2);
        R.push(L);
      }
      if (w.query !== void 0) R.push("?", w.query);
      if (w.fragment !== void 0) R.push("#", w.fragment);
      return R.join("");
    }
    let b =
      /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    function f(g, p) {
      let w = Object.assign({}, p),
        C = {
          scheme: void 0,
          userinfo: void 0,
          host: "",
          port: void 0,
          path: "",
          query: void 0,
          fragment: void 0,
        },
        R = !1;
      if (w.reference === "suffix")
        if (w.scheme) g = w.scheme + ":" + g;
        else g = "//" + g;
      let S = g.match(b);
      if (S) {
        if (
          ((C.scheme = S[1]),
          (C.userinfo = S[3]),
          (C.host = S[4]),
          (C.port = parseInt(S[5], 10)),
          (C.path = S[6] || ""),
          (C.query = S[7]),
          (C.fragment = S[8]),
          isNaN(C.port))
        )
          C.port = S[5];
        if (C.host)
          if (i(C.host) === !1) {
            let L = r(C.host);
            ((C.host = L.host.toLowerCase()), (R = L.isIPV6));
          } else R = !0;
        if (
          C.scheme === void 0 &&
          C.userinfo === void 0 &&
          C.host === void 0 &&
          C.port === void 0 &&
          C.query === void 0 &&
          !C.path
        )
          C.reference = "same-document";
        else if (C.scheme === void 0) C.reference = "relative";
        else if (C.fragment === void 0) C.reference = "absolute";
        else C.reference = "uri";
        if (
          w.reference &&
          w.reference !== "suffix" &&
          w.reference !== C.reference
        )
          C.error = C.error || "URI is not a " + w.reference + " reference.";
        let q = d(w.scheme || C.scheme);
        if (!w.unicodeSupport && (!q || !q.unicodeSupport)) {
          if (
            C.host &&
            (w.domainHost || (q && q.domainHost)) &&
            R === !1 &&
            u(C.host)
          )
            try {
              C.host = URL.domainToASCII(C.host.toLowerCase());
            } catch (L) {
              C.error =
                C.error ||
                "Host's domain name can not be converted to ASCII: " + L;
            }
        }
        if (!q || (q && !q.skipNormalize)) {
          if (g.indexOf("%") !== -1) {
            if (C.scheme !== void 0) C.scheme = unescape(C.scheme);
            if (C.host !== void 0) C.host = unescape(C.host);
          }
          if (C.path) C.path = escape(unescape(C.path));
          if (C.fragment)
            C.fragment = encodeURI(decodeURIComponent(C.fragment));
        }
        if (q && q.parse) q.parse(C, w);
      } else C.error = C.error || "URI can not be parsed.";
      return C;
    }
    let h = {
      SCHEMES: l,
      normalize: m,
      resolve: _,
      resolveComponent: P,
      equal: z,
      serialize: y,
      parse: f,
    };
    ((t.exports = h), (t.exports.default = h), (t.exports.fastUri = h));
  }),
  gi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Si();
    ((t.code = 'require("ajv/dist/runtime/uri").default'), (e.default = t));
  }),
  ka = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.CodeGen =
        e.Name =
        e.nil =
        e.stringify =
        e.str =
        e._ =
        e.KeywordCxt =
          void 0));
    var t = Wt();
    Object.defineProperty(e, "KeywordCxt", {
      enumerable: !0,
      get: function () {
        return t.KeywordCxt;
      },
    });
    var r = te();
    (Object.defineProperty(e, "_", {
      enumerable: !0,
      get: function () {
        return r._;
      },
    }),
      Object.defineProperty(e, "str", {
        enumerable: !0,
        get: function () {
          return r.str;
        },
      }),
      Object.defineProperty(e, "stringify", {
        enumerable: !0,
        get: function () {
          return r.stringify;
        },
      }),
      Object.defineProperty(e, "nil", {
        enumerable: !0,
        get: function () {
          return r.nil;
        },
      }),
      Object.defineProperty(e, "Name", {
        enumerable: !0,
        get: function () {
          return r.Name;
        },
      }),
      Object.defineProperty(e, "CodeGen", {
        enumerable: !0,
        get: function () {
          return r.CodeGen;
        },
      }));
    let a = Ir(),
      o = Yt(),
      n = Pa(),
      i = Or(),
      u = te(),
      l = qr(),
      d = Cr(),
      m = ne(),
      _ = fi(),
      P = gi(),
      z = (M, U) => new RegExp(M, U);
    z.code = "new RegExp";
    let y = ["removeAdditional", "useDefaults", "coerceTypes"],
      b = new Set([
        "validate",
        "serialize",
        "parse",
        "wrapper",
        "root",
        "schema",
        "keyword",
        "pattern",
        "formats",
        "validate$data",
        "func",
        "obj",
        "Error",
      ]),
      f = {
        errorDataPath: "",
        format: "`validateFormats: false` can be used instead.",
        nullable: '"nullable" keyword is supported by default.',
        jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
        extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
        missingRefs:
          "Pass empty schema with $id that should be ignored to ajv.addSchema.",
        processCode:
          "Use option `code: {process: (code, schemaEnv: object) => string}`",
        sourceCode: "Use option `code: {source: true}`",
        strictDefaults: "It is default now, see option `strict`.",
        strictKeywords: "It is default now, see option `strict`.",
        uniqueItems: '"uniqueItems" keyword is always validated.',
        unknownFormats:
          "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
        cache: "Map is used as cache, schema object as key.",
        serialize: "Map is used as cache, schema object as key.",
        ajvErrors: "It is default now.",
      },
      h = {
        ignoreKeywordsWithRef: "",
        jsPropertySyntax: "",
        unicode:
          '"minLength"/"maxLength" account for unicode characters by default.',
      },
      g = 200;
    function p(M) {
      var U,
        H,
        E,
        N,
        A,
        J,
        W,
        re,
        Q,
        ce,
        be,
        I,
        D,
        V,
        Y,
        Z,
        ee,
        de,
        Se,
        _e,
        pe,
        ue,
        ze,
        ge,
        Ne;
      let ke = M.strict,
        Me = (U = M.code) === null || U === void 0 ? void 0 : U.optimize,
        Le = Me === !0 || Me === void 0 ? 1 : Me || 0,
        Ue =
          (E = (H = M.code) === null || H === void 0 ? void 0 : H.regExp) !==
            null && E !== void 0
            ? E
            : z,
        He = (N = M.uriResolver) !== null && N !== void 0 ? N : P.default;
      return {
        strictSchema:
          (J = (A = M.strictSchema) !== null && A !== void 0 ? A : ke) !==
            null && J !== void 0
            ? J
            : !0,
        strictNumbers:
          (re = (W = M.strictNumbers) !== null && W !== void 0 ? W : ke) !==
            null && re !== void 0
            ? re
            : !0,
        strictTypes:
          (ce = (Q = M.strictTypes) !== null && Q !== void 0 ? Q : ke) !==
            null && ce !== void 0
            ? ce
            : "log",
        strictTuples:
          (I = (be = M.strictTuples) !== null && be !== void 0 ? be : ke) !==
            null && I !== void 0
            ? I
            : "log",
        strictRequired:
          (V = (D = M.strictRequired) !== null && D !== void 0 ? D : ke) !==
            null && V !== void 0
            ? V
            : !1,
        code: M.code
          ? { ...M.code, optimize: Le, regExp: Ue }
          : { optimize: Le, regExp: Ue },
        loopRequired: (Y = M.loopRequired) !== null && Y !== void 0 ? Y : g,
        loopEnum: (Z = M.loopEnum) !== null && Z !== void 0 ? Z : g,
        meta: (ee = M.meta) !== null && ee !== void 0 ? ee : !0,
        messages: (de = M.messages) !== null && de !== void 0 ? de : !0,
        inlineRefs: (Se = M.inlineRefs) !== null && Se !== void 0 ? Se : !0,
        schemaId: (_e = M.schemaId) !== null && _e !== void 0 ? _e : "$id",
        addUsedSchema:
          (pe = M.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema:
          (ue = M.validateSchema) !== null && ue !== void 0 ? ue : !0,
        validateFormats:
          (ze = M.validateFormats) !== null && ze !== void 0 ? ze : !0,
        unicodeRegExp:
          (ge = M.unicodeRegExp) !== null && ge !== void 0 ? ge : !0,
        int32range: (Ne = M.int32range) !== null && Ne !== void 0 ? Ne : !0,
        uriResolver: He,
      };
    }
    var w = class {
      constructor(M = {}) {
        ((this.schemas = {}),
          (this.refs = {}),
          (this.formats = {}),
          (this._compilations = new Set()),
          (this._loading = {}),
          (this._cache = new Map()),
          (M = this.opts = { ...M, ...p(M) }));
        let { es5: U, lines: H } = this.opts.code;
        ((this.scope = new u.ValueScope({
          scope: {},
          prefixes: b,
          es5: U,
          lines: H,
        })),
          (this.logger = F(M.logger)));
        let E = M.validateFormats;
        if (
          ((M.validateFormats = !1),
          (this.RULES = (0, n.getRules)()),
          C.call(this, f, M, "NOT SUPPORTED"),
          C.call(this, h, M, "DEPRECATED", "warn"),
          (this._metaOpts = x.call(this)),
          M.formats)
        )
          q.call(this);
        if ((this._addVocabularies(), this._addDefaultMetaSchema(), M.keywords))
          L.call(this, M.keywords);
        if (typeof M.meta == "object") this.addMetaSchema(M.meta);
        (S.call(this), (M.validateFormats = E));
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        let { $data: M, meta: U, schemaId: H } = this.opts,
          E = _;
        if (H === "id") ((E = { ..._ }), (E.id = E.$id), delete E.$id);
        if (U && M) this.addMetaSchema(E, E[H], !1);
      }
      defaultMeta() {
        let { meta: M, schemaId: U } = this.opts;
        return (this.opts.defaultMeta =
          typeof M == "object" ? M[U] || M : void 0);
      }
      validate(M, U) {
        let H;
        if (typeof M == "string") {
          if (((H = this.getSchema(M)), !H))
            throw Error(`no schema with key or ref "${M}"`);
        } else H = this.compile(M);
        let E = H(U);
        if (!("$async" in H)) this.errors = H.errors;
        return E;
      }
      compile(M, U) {
        let H = this._addSchema(M, U);
        return H.validate || this._compileSchemaEnv(H);
      }
      compileAsync(M, U) {
        if (typeof this.opts.loadSchema != "function")
          throw Error("options.loadSchema should be a function");
        let { loadSchema: H } = this.opts;
        return E.call(this, M, U);
        async function E(Q, ce) {
          await N.call(this, Q.$schema);
          let be = this._addSchema(Q, ce);
          return be.validate || A.call(this, be);
        }
        async function N(Q) {
          if (Q && !this.getSchema(Q)) await E.call(this, { $ref: Q }, !0);
        }
        async function A(Q) {
          try {
            return this._compileSchemaEnv(Q);
          } catch (ce) {
            if (!(ce instanceof o.default)) throw ce;
            return (
              J.call(this, ce),
              await W.call(this, ce.missingSchema),
              A.call(this, Q)
            );
          }
        }
        function J({ missingSchema: Q, missingRef: ce }) {
          if (this.refs[Q])
            throw Error(
              `AnySchema ${Q} is loaded but ${ce} cannot be resolved`,
            );
        }
        async function W(Q) {
          let ce = await re.call(this, Q);
          if (!this.refs[Q]) await N.call(this, ce.$schema);
          if (!this.refs[Q]) this.addSchema(ce, Q, U);
        }
        async function re(Q) {
          let ce = this._loading[Q];
          if (ce) return ce;
          try {
            return await (this._loading[Q] = H(Q));
          } finally {
            delete this._loading[Q];
          }
        }
      }
      addSchema(M, U, H, E = this.opts.validateSchema) {
        if (Array.isArray(M)) {
          for (let A of M) this.addSchema(A, void 0, H, E);
          return this;
        }
        let N;
        if (typeof M === "object") {
          let { schemaId: A } = this.opts;
          if (((N = M[A]), N !== void 0 && typeof N != "string"))
            throw Error(`schema ${A} must be string`);
        }
        return (
          (U = (0, l.normalizeId)(U || N)),
          this._checkUnique(U),
          (this.schemas[U] = this._addSchema(M, H, U, E, !0)),
          this
        );
      }
      addMetaSchema(M, U, H = this.opts.validateSchema) {
        return (this.addSchema(M, U, !0, H), this);
      }
      validateSchema(M, U) {
        if (typeof M == "boolean") return !0;
        let H;
        if (((H = M.$schema), H !== void 0 && typeof H != "string"))
          throw Error("$schema must be a string");
        if (((H = H || this.opts.defaultMeta || this.defaultMeta()), !H))
          return (
            this.logger.warn("meta-schema not available"),
            (this.errors = null),
            !0
          );
        let E = this.validate(H, M);
        if (!E && U) {
          let N = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log") this.logger.error(N);
          else throw Error(N);
        }
        return E;
      }
      getSchema(M) {
        let U;
        while (typeof (U = R.call(this, M)) == "string") M = U;
        if (U === void 0) {
          let { schemaId: H } = this.opts,
            E = new i.SchemaEnv({ schema: {}, schemaId: H });
          if (((U = i.resolveSchema.call(this, E, M)), !U)) return;
          this.refs[M] = U;
        }
        return U.validate || this._compileSchemaEnv(U);
      }
      removeSchema(M) {
        if (M instanceof RegExp)
          return (
            this._removeAllSchemas(this.schemas, M),
            this._removeAllSchemas(this.refs, M),
            this
          );
        switch (typeof M) {
          case "undefined":
            return (
              this._removeAllSchemas(this.schemas),
              this._removeAllSchemas(this.refs),
              this._cache.clear(),
              this
            );
          case "string": {
            let U = R.call(this, M);
            if (typeof U == "object") this._cache.delete(U.schema);
            return (delete this.schemas[M], delete this.refs[M], this);
          }
          case "object": {
            let U = M;
            this._cache.delete(U);
            let H = M[this.opts.schemaId];
            if (H)
              ((H = (0, l.normalizeId)(H)),
                delete this.schemas[H],
                delete this.refs[H]);
            return this;
          }
          default:
            throw Error("ajv.removeSchema: invalid parameter");
        }
      }
      addVocabulary(M) {
        for (let U of M) this.addKeyword(U);
        return this;
      }
      addKeyword(M, U) {
        let H;
        if (typeof M == "string") {
          if (((H = M), typeof U == "object"))
            (this.logger.warn(
              "these parameters are deprecated, see docs for addKeyword",
            ),
              (U.keyword = H));
        } else if (typeof M == "object" && U === void 0) {
          if (((U = M), (H = U.keyword), Array.isArray(H) && !H.length))
            throw Error(
              "addKeywords: keyword must be string or non-empty array",
            );
        } else throw Error("invalid addKeywords parameters");
        if ((G.call(this, H, U), !U))
          return ((0, m.eachItem)(H, (N) => ae.call(this, N)), this);
        ie.call(this, U);
        let E = {
          ...U,
          type: (0, d.getJSONTypes)(U.type),
          schemaType: (0, d.getJSONTypes)(U.schemaType),
        };
        return (
          (0, m.eachItem)(
            H,
            E.type.length === 0
              ? (N) => ae.call(this, N, E)
              : (N) => E.type.forEach((A) => ae.call(this, N, E, A)),
          ),
          this
        );
      }
      getKeyword(M) {
        let U = this.RULES.all[M];
        return typeof U == "object" ? U.definition : !!U;
      }
      removeKeyword(M) {
        let { RULES: U } = this;
        (delete U.keywords[M], delete U.all[M]);
        for (let H of U.rules) {
          let E = H.rules.findIndex((N) => N.keyword === M);
          if (E >= 0) H.rules.splice(E, 1);
        }
        return this;
      }
      addFormat(M, U) {
        if (typeof U == "string") U = new RegExp(U);
        return ((this.formats[M] = U), this);
      }
      errorsText(
        M = this.errors,
        { separator: U = ", ", dataVar: H = "data" } = {},
      ) {
        if (!M || M.length === 0) return "No errors";
        return M.map((E) => `${H}${E.instancePath} ${E.message}`).reduce(
          (E, N) => E + U + N,
        );
      }
      $dataMetaSchema(M, U) {
        let H = this.RULES.all;
        M = JSON.parse(JSON.stringify(M));
        for (let E of U) {
          let N = E.split("/").slice(1),
            A = M;
          for (let J of N) A = A[J];
          for (let J in H) {
            let W = H[J];
            if (typeof W != "object") continue;
            let { $data: re } = W.definition,
              Q = A[J];
            if (re && Q) A[J] = oe(Q);
          }
        }
        return M;
      }
      _removeAllSchemas(M, U) {
        for (let H in M) {
          let E = M[H];
          if (!U || U.test(H)) {
            if (typeof E == "string") delete M[H];
            else if (E && !E.meta) (this._cache.delete(E.schema), delete M[H]);
          }
        }
      }
      _addSchema(
        M,
        U,
        H,
        E = this.opts.validateSchema,
        N = this.opts.addUsedSchema,
      ) {
        let A,
          { schemaId: J } = this.opts;
        if (typeof M == "object") A = M[J];
        else if (this.opts.jtd) throw Error("schema must be object");
        else if (typeof M != "boolean")
          throw Error("schema must be object or boolean");
        let W = this._cache.get(M);
        if (W !== void 0) return W;
        H = (0, l.normalizeId)(A || H);
        let re = l.getSchemaRefs.call(this, M, H);
        if (
          ((W = new i.SchemaEnv({
            schema: M,
            schemaId: J,
            meta: U,
            baseId: H,
            localRefs: re,
          })),
          this._cache.set(W.schema, W),
          N && !H.startsWith("#"))
        ) {
          if (H) this._checkUnique(H);
          this.refs[H] = W;
        }
        if (E) this.validateSchema(M, !0);
        return W;
      }
      _checkUnique(M) {
        if (this.schemas[M] || this.refs[M])
          throw Error(`schema with key or id "${M}" already exists`);
      }
      _compileSchemaEnv(M) {
        if (M.meta) this._compileMetaSchema(M);
        else i.compileSchema.call(this, M);
        if (!M.validate) throw Error("ajv implementation error");
        return M.validate;
      }
      _compileMetaSchema(M) {
        let U = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, M);
        } finally {
          this.opts = U;
        }
      }
    };
    ((w.ValidationError = a.default),
      (w.MissingRefError = o.default),
      (e.default = w));
    function C(M, U, H, E = "error") {
      for (let N in M) {
        let A = N;
        if (A in U) this.logger[E](`${H}: option ${N}. ${M[A]}`);
      }
    }
    function R(M) {
      return ((M = (0, l.normalizeId)(M)), this.schemas[M] || this.refs[M]);
    }
    function S() {
      let M = this.opts.schemas;
      if (!M) return;
      if (Array.isArray(M)) this.addSchema(M);
      else for (let U in M) this.addSchema(M[U], U);
    }
    function q() {
      for (let M in this.opts.formats) {
        let U = this.opts.formats[M];
        if (U) this.addFormat(M, U);
      }
    }
    function L(M) {
      if (Array.isArray(M)) {
        this.addVocabulary(M);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (let U in M) {
        let H = M[U];
        if (!H.keyword) H.keyword = U;
        this.addKeyword(H);
      }
    }
    function x() {
      let M = { ...this.opts };
      for (let U of y) delete M[U];
      return M;
    }
    let j = { log() {}, warn() {}, error() {} };
    function F(M) {
      if (M === !1) return j;
      if (M === void 0) return console;
      if (M.log && M.warn && M.error) return M;
      throw Error("logger must implement log, warn and error methods");
    }
    let B = /^[a-z_$][a-z0-9_$:-]*$/i;
    function G(M, U) {
      let { RULES: H } = this;
      if (
        ((0, m.eachItem)(M, (E) => {
          if (H.keywords[E]) throw Error(`Keyword ${E} is already defined`);
          if (!B.test(E)) throw Error(`Keyword ${E} has invalid name`);
        }),
        !U)
      )
        return;
      if (U.$data && !("code" in U || "validate" in U))
        throw Error('$data keyword must have "code" or "validate" function');
    }
    function ae(M, U, H) {
      var E;
      let N = U === null || U === void 0 ? void 0 : U.post;
      if (H && N) throw Error('keyword with "post" flag cannot have "type"');
      let { RULES: A } = this,
        J = N ? A.post : A.rules.find(({ type: re }) => re === H);
      if (!J) ((J = { type: H, rules: [] }), A.rules.push(J));
      if (((A.keywords[M] = !0), !U)) return;
      let W = {
        keyword: M,
        definition: {
          ...U,
          type: (0, d.getJSONTypes)(U.type),
          schemaType: (0, d.getJSONTypes)(U.schemaType),
        },
      };
      if (U.before) le.call(this, J, W, U.before);
      else J.rules.push(W);
      ((A.all[M] = W),
        (E = U.implements) === null ||
          E === void 0 ||
          E.forEach((re) => this.addKeyword(re)));
    }
    function le(M, U, H) {
      let E = M.rules.findIndex((N) => N.keyword === H);
      if (E >= 0) M.rules.splice(E, 0, U);
      else (M.rules.push(U), this.logger.warn(`rule ${H} is not defined`));
    }
    function ie(M) {
      let { metaSchema: U } = M;
      if (U === void 0) return;
      if (M.$data && this.opts.$data) U = oe(U);
      M.validateSchema = this.compile(U, !0);
    }
    let me = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
    };
    function oe(M) {
      return { anyOf: [M, me] };
    }
  }),
  _i = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = {
      keyword: "id",
      code() {
        throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
      },
    };
    e.default = t;
  }),
  ns = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.callRef = e.getValidate = void 0));
    let t = Yt(),
      r = Oe(),
      a = te(),
      o = Ie(),
      n = Or(),
      i = ne(),
      u = {
        keyword: "$ref",
        schemaType: "string",
        code(m) {
          let { gen: _, schema: P, it: z } = m,
            { baseId: y, schemaEnv: b, validateName: f, opts: h, self: g } = z,
            { root: p } = b;
          if ((P === "#" || P === "#/") && y === p.baseId) return C();
          let w = n.resolveRef.call(g, p, y, P);
          if (w === void 0) throw new t.default(z.opts.uriResolver, y, P);
          if (w instanceof n.SchemaEnv) return R(w);
          return S(w);
          function C() {
            if (b === p) return d(m, f, b, b.$async);
            let q = _.scopeValue("root", { ref: p });
            return d(m, a._`${q}.validate`, p, p.$async);
          }
          function R(q) {
            d(m, l(m, q), q, q.$async);
          }
          function S(q) {
            let L = _.scopeValue(
                "schema",
                h.code.source === !0
                  ? { ref: q, code: (0, a.stringify)(q) }
                  : { ref: q },
              ),
              x = _.name("valid"),
              j = m.subschema(
                {
                  schema: q,
                  dataTypes: [],
                  schemaPath: a.nil,
                  topSchemaRef: L,
                  errSchemaPath: P,
                },
                x,
              );
            (m.mergeEvaluated(j), m.ok(x));
          }
        },
      };
    function l(m, _) {
      let { gen: P } = m;
      return _.validate
        ? P.scopeValue("validate", { ref: _.validate })
        : a._`${P.scopeValue("wrapper", { ref: _ })}.validate`;
    }
    e.getValidate = l;
    function d(m, _, P, z) {
      let { gen: y, it: b } = m,
        { allErrors: f, schemaEnv: h, opts: g } = b,
        p = g.passContext ? o.default.this : a.nil;
      if (z) w();
      else C();
      function w() {
        if (!h.$async) throw Error("async schema referenced by sync schema");
        let q = y.let("valid");
        (y.try(
          () => {
            if (
              (y.code(a._`await ${(0, r.callValidateCode)(m, _, p)}`), S(_), !f)
            )
              y.assign(q, !0);
          },
          (L) => {
            if (
              (y.if(a._`!(${L} instanceof ${b.ValidationError})`, () =>
                y.throw(L),
              ),
              R(L),
              !f)
            )
              y.assign(q, !1);
          },
        ),
          m.ok(q));
      }
      function C() {
        m.result(
          (0, r.callValidateCode)(m, _, p),
          () => S(_),
          () => R(_),
        );
      }
      function R(q) {
        let L = a._`${q}.errors`;
        (y.assign(
          o.default.vErrors,
          a._`${o.default.vErrors} === null ? ${L} : ${o.default.vErrors}.concat(${L})`,
        ),
          y.assign(o.default.errors, a._`${o.default.vErrors}.length`));
      }
      function S(q) {
        var L;
        if (!b.opts.unevaluated) return;
        let x =
          (L = P === null || P === void 0 ? void 0 : P.validate) === null ||
          L === void 0
            ? void 0
            : L.evaluated;
        if (b.props !== !0)
          if (x && !x.dynamicProps) {
            if (x.props !== void 0)
              b.props = i.mergeEvaluated.props(y, x.props, b.props);
          } else {
            let j = y.var("props", a._`${q}.evaluated.props`);
            b.props = i.mergeEvaluated.props(y, j, b.props, a.Name);
          }
        if (b.items !== !0)
          if (x && !x.dynamicItems) {
            if (x.items !== void 0)
              b.items = i.mergeEvaluated.items(y, x.items, b.items);
          } else {
            let j = y.var("items", a._`${q}.evaluated.items`);
            b.items = i.mergeEvaluated.items(y, j, b.items, a.Name);
          }
      }
    }
    ((e.callRef = d), (e.default = u));
  }),
  qa = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = _i(),
      r = ns(),
      a = [
        "$schema",
        "$id",
        "$defs",
        "$vocabulary",
        { keyword: "$comment" },
        "definitions",
        t.default,
        r.default,
      ];
    e.default = a;
  }),
  vi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = t.operators,
      a = {
        maximum: { okStr: "<=", ok: r.LTE, fail: r.GT },
        minimum: { okStr: ">=", ok: r.GTE, fail: r.LT },
        exclusiveMaximum: { okStr: "<", ok: r.LT, fail: r.GTE },
        exclusiveMinimum: { okStr: ">", ok: r.GT, fail: r.LTE },
      },
      o = {
        keyword: Object.keys(a),
        type: "number",
        schemaType: "number",
        $data: !0,
        error: {
          message: ({ keyword: n, schemaCode: i }) =>
            t.str`must be ${a[n].okStr} ${i}`,
          params: ({ keyword: n, schemaCode: i }) =>
            t._`{comparison: ${a[n].okStr}, limit: ${i}}`,
        },
        code(n) {
          let { keyword: i, data: u, schemaCode: l } = n;
          n.fail$data(t._`${u} ${a[i].fail} ${l} || isNaN(${u})`);
        },
      };
    e.default = o;
  }),
  yi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = {
        keyword: "multipleOf",
        type: "number",
        schemaType: "number",
        $data: !0,
        error: {
          message: ({ schemaCode: a }) => t.str`must be multiple of ${a}`,
          params: ({ schemaCode: a }) => t._`{multipleOf: ${a}}`,
        },
        code(a) {
          let { gen: o, data: n, schemaCode: i, it: u } = a,
            l = u.opts.multipleOfPrecision,
            d = o.let("res"),
            m = l
              ? t._`Math.abs(Math.round(${d}) - ${d}) > 1e-${l}`
              : t._`${d} !== parseInt(${d})`;
          a.fail$data(t._`(${i} === 0 || (${d} = ${n}/${i}, ${m}))`);
        },
      };
    e.default = r;
  }),
  bi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    function t(r) {
      let a = r.length,
        o = 0,
        n = 0,
        i;
      while (n < a)
        if ((o++, (i = r.charCodeAt(n++)), i >= 55296 && i <= 56319 && n < a)) {
          if (((i = r.charCodeAt(n)), (i & 64512) === 56320)) n++;
        }
      return o;
    }
    ((e.default = t),
      (t.code = 'require("ajv/dist/runtime/ucs2length").default'));
  }),
  Ri = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      a = bi(),
      o = {
        keyword: ["maxLength", "minLength"],
        type: "string",
        schemaType: "number",
        $data: !0,
        error: {
          message({ keyword: n, schemaCode: i }) {
            let u = n === "maxLength" ? "more" : "fewer";
            return t.str`must NOT have ${u} than ${i} characters`;
          },
          params: ({ schemaCode: n }) => t._`{limit: ${n}}`,
        },
        code(n) {
          let { keyword: i, data: u, schemaCode: l, it: d } = n,
            m = i === "maxLength" ? t.operators.GT : t.operators.LT,
            _ =
              d.opts.unicode === !1
                ? t._`${u}.length`
                : t._`${(0, r.useFunc)(n.gen, a.default)}(${u})`;
          n.fail$data(t._`${_} ${m} ${l}`);
        },
      };
    e.default = o;
  }),
  wi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Oe(),
      r = ne(),
      a = te(),
      o = {
        keyword: "pattern",
        type: "string",
        schemaType: "string",
        $data: !0,
        error: {
          message: ({ schemaCode: n }) => a.str`must match pattern "${n}"`,
          params: ({ schemaCode: n }) => a._`{pattern: ${n}}`,
        },
        code(n) {
          let {
              gen: i,
              data: u,
              $data: l,
              schema: d,
              schemaCode: m,
              it: _,
            } = n,
            P = _.opts.unicodeRegExp ? "u" : "";
          if (l) {
            let { regExp: z } = _.opts.code,
              y =
                z.code === "new RegExp"
                  ? a._`new RegExp`
                  : (0, r.useFunc)(i, z),
              b = i.let("valid");
            (i.try(
              () => i.assign(b, a._`${y}(${m}, ${P}).test(${u})`),
              () => i.assign(b, !1),
            ),
              n.fail$data(a._`!${b}`));
          } else {
            let z = (0, t.usePattern)(n, d);
            n.fail$data(a._`!${z}.test(${u})`);
          }
        },
      };
    e.default = o;
  }),
  $i = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = {
        keyword: ["maxProperties", "minProperties"],
        type: "object",
        schemaType: "number",
        $data: !0,
        error: {
          message({ keyword: a, schemaCode: o }) {
            let n = a === "maxProperties" ? "more" : "fewer";
            return t.str`must NOT have ${n} than ${o} properties`;
          },
          params: ({ schemaCode: a }) => t._`{limit: ${a}}`,
        },
        code(a) {
          let { keyword: o, data: n, schemaCode: i } = a,
            u = o === "maxProperties" ? t.operators.GT : t.operators.LT;
          a.fail$data(t._`Object.keys(${n}).length ${u} ${i}`);
        },
      };
    e.default = r;
  }),
  Ei = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Oe(),
      r = te(),
      a = ne(),
      o = {
        keyword: "required",
        type: "object",
        schemaType: "array",
        $data: !0,
        error: {
          message: ({ params: { missingProperty: n } }) =>
            r.str`must have required property '${n}'`,
          params: ({ params: { missingProperty: n } }) =>
            r._`{missingProperty: ${n}}`,
        },
        code(n) {
          let {
              gen: i,
              schema: u,
              schemaCode: l,
              data: d,
              $data: m,
              it: _,
            } = n,
            { opts: P } = _;
          if (!m && u.length === 0) return;
          let z = u.length >= P.loopRequired;
          if (_.allErrors) y();
          else b();
          if (P.strictRequired) {
            let g = n.parentSchema.properties,
              { definedProperties: p } = n.it;
            for (let w of u)
              if (
                (g === null || g === void 0 ? void 0 : g[w]) === void 0 &&
                !p.has(w)
              ) {
                let C = `required property "${w}" is not defined at "${_.schemaEnv.baseId + _.errSchemaPath}" (strictRequired)`;
                (0, a.checkStrictMode)(_, C, _.opts.strictRequired);
              }
          }
          function y() {
            if (z || m) n.block$data(r.nil, f);
            else for (let g of u) (0, t.checkReportMissingProp)(n, g);
          }
          function b() {
            let g = i.let("missing");
            if (z || m) {
              let p = i.let("valid", !0);
              (n.block$data(p, () => h(g, p)), n.ok(p));
            } else
              (i.if((0, t.checkMissingProp)(n, u, g)),
                (0, t.reportMissingProp)(n, g),
                i.else());
          }
          function f() {
            i.forOf("prop", l, (g) => {
              (n.setParams({ missingProperty: g }),
                i.if((0, t.noPropertyInData)(i, d, g, P.ownProperties), () =>
                  n.error(),
                ));
            });
          }
          function h(g, p) {
            (n.setParams({ missingProperty: g }),
              i.forOf(
                g,
                l,
                () => {
                  (i.assign(p, (0, t.propertyInData)(i, d, g, P.ownProperties)),
                    i.if((0, r.not)(p), () => {
                      (n.error(), i.break());
                    }));
                },
                r.nil,
              ));
          }
        },
      };
    e.default = o;
  }),
  Pi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = {
        keyword: ["maxItems", "minItems"],
        type: "array",
        schemaType: "number",
        $data: !0,
        error: {
          message({ keyword: a, schemaCode: o }) {
            let n = a === "maxItems" ? "more" : "fewer";
            return t.str`must NOT have ${n} than ${o} items`;
          },
          params: ({ schemaCode: a }) => t._`{limit: ${a}}`,
        },
        code(a) {
          let { keyword: o, data: n, schemaCode: i } = a,
            u = o === "maxItems" ? t.operators.GT : t.operators.LT;
          a.fail$data(t._`${n}.length ${u} ${i}`);
        },
      };
    e.default = r;
  }),
  is = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = za();
    ((t.code = 'require("ajv/dist/runtime/equal").default'), (e.default = t));
  }),
  Ti = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Cr(),
      r = te(),
      a = ne(),
      o = is(),
      n = {
        keyword: "uniqueItems",
        type: "array",
        schemaType: "boolean",
        $data: !0,
        error: {
          message: ({ params: { i, j: u } }) =>
            r.str`must NOT have duplicate items (items ## ${u} and ${i} are identical)`,
          params: ({ params: { i, j: u } }) => r._`{i: ${i}, j: ${u}}`,
        },
        code(i) {
          let {
            gen: u,
            data: l,
            $data: d,
            schema: m,
            parentSchema: _,
            schemaCode: P,
            it: z,
          } = i;
          if (!d && !m) return;
          let y = u.let("valid"),
            b = _.items ? (0, t.getSchemaTypes)(_.items) : [];
          (i.block$data(y, f, r._`${P} === false`), i.ok(y));
          function f() {
            let w = u.let("i", r._`${l}.length`),
              C = u.let("j");
            (i.setParams({ i: w, j: C }),
              u.assign(y, !0),
              u.if(r._`${w} > 1`, () => (h() ? g : p)(w, C)));
          }
          function h() {
            return (
              b.length > 0 && !b.some((w) => w === "object" || w === "array")
            );
          }
          function g(w, C) {
            let R = u.name("item"),
              S = (0, t.checkDataTypes)(
                b,
                R,
                z.opts.strictNumbers,
                t.DataType.Wrong,
              ),
              q = u.const("indices", r._`{}`);
            u.for(r._`;${w}--;`, () => {
              if (
                (u.let(R, r._`${l}[${w}]`),
                u.if(S, r._`continue`),
                b.length > 1)
              )
                u.if(r._`typeof ${R} == "string"`, r._`${R} += "_"`);
              u.if(r._`typeof ${q}[${R}] == "number"`, () => {
                (u.assign(C, r._`${q}[${R}]`),
                  i.error(),
                  u.assign(y, !1).break());
              }).code(r._`${q}[${R}] = ${w}`);
            });
          }
          function p(w, C) {
            let R = (0, a.useFunc)(u, o.default),
              S = u.name("outer");
            u.label(S).for(r._`;${w}--;`, () =>
              u.for(r._`${C} = ${w}; ${C}--;`, () =>
                u.if(r._`${R}(${l}[${w}], ${l}[${C}])`, () => {
                  (i.error(), u.assign(y, !1).break(S));
                }),
              ),
            );
          }
        },
      };
    e.default = n;
  }),
  zi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      a = is(),
      o = {
        keyword: "const",
        $data: !0,
        error: {
          message: "must be equal to constant",
          params: ({ schemaCode: n }) => t._`{allowedValue: ${n}}`,
        },
        code(n) {
          let { gen: i, data: u, $data: l, schemaCode: d, schema: m } = n;
          if (l || (m && typeof m == "object"))
            n.fail$data(t._`!${(0, r.useFunc)(i, a.default)}(${u}, ${d})`);
          else n.fail(t._`${m} !== ${u}`);
        },
      };
    e.default = o;
  }),
  Ci = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      a = is(),
      o = {
        keyword: "enum",
        schemaType: "array",
        $data: !0,
        error: {
          message: "must be equal to one of the allowed values",
          params: ({ schemaCode: n }) => t._`{allowedValues: ${n}}`,
        },
        code(n) {
          let {
            gen: i,
            data: u,
            $data: l,
            schema: d,
            schemaCode: m,
            it: _,
          } = n;
          if (!l && d.length === 0)
            throw Error("enum must have non-empty array");
          let P = d.length >= _.opts.loopEnum,
            z,
            y = () =>
              z !== null && z !== void 0
                ? z
                : (z = (0, r.useFunc)(i, a.default)),
            b;
          if (P || l) ((b = i.let("valid")), n.block$data(b, f));
          else {
            if (!Array.isArray(d)) throw Error("ajv implementation error");
            let g = i.const("vSchema", m);
            b = (0, t.or)(...d.map((p, w) => h(g, w)));
          }
          n.pass(b);
          function f() {
            (i.assign(b, !1),
              i.forOf("v", m, (g) =>
                i.if(t._`${y()}(${u}, ${g})`, () => i.assign(b, !0).break()),
              ));
          }
          function h(g, p) {
            let w = d[p];
            return typeof w === "object" && w !== null
              ? t._`${y()}(${u}, ${g}[${p}])`
              : t._`${u} === ${w}`;
          }
        },
      };
    e.default = o;
  }),
  Ia = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = vi(),
      r = yi(),
      a = Ri(),
      o = wi(),
      n = $i(),
      i = Ei(),
      u = Pi(),
      l = Ti(),
      d = zi(),
      m = Ci(),
      _ = [
        t.default,
        r.default,
        a.default,
        o.default,
        n.default,
        i.default,
        u.default,
        l.default,
        { keyword: "type", schemaType: ["string", "array"] },
        { keyword: "nullable", schemaType: "boolean" },
        d.default,
        m.default,
      ];
    e.default = _;
  }),
  Oa = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.validateAdditionalItems = void 0));
    let t = te(),
      r = ne(),
      a = {
        keyword: "additionalItems",
        type: "array",
        schemaType: ["boolean", "object"],
        before: "uniqueItems",
        error: {
          message: ({ params: { len: n } }) =>
            t.str`must NOT have more than ${n} items`,
          params: ({ params: { len: n } }) => t._`{limit: ${n}}`,
        },
        code(n) {
          let { parentSchema: i, it: u } = n,
            { items: l } = i;
          if (!Array.isArray(l)) {
            (0, r.checkStrictMode)(
              u,
              '"additionalItems" is ignored when "items" is not an array of schemas',
            );
            return;
          }
          o(n, l);
        },
      };
    function o(n, i) {
      let { gen: u, schema: l, data: d, keyword: m, it: _ } = n;
      _.items = !0;
      let P = u.const("len", t._`${d}.length`);
      if (l === !1)
        (n.setParams({ len: i.length }), n.pass(t._`${P} <= ${i.length}`));
      else if (typeof l == "object" && !(0, r.alwaysValidSchema)(_, l)) {
        let y = u.var("valid", t._`${P} <= ${i.length}`);
        (u.if((0, t.not)(y), () => z(y)), n.ok(y));
      }
      function z(y) {
        u.forRange("i", i.length, P, (b) => {
          if (
            (n.subschema(
              { keyword: m, dataProp: b, dataPropType: r.Type.Num },
              y,
            ),
            !_.allErrors)
          )
            u.if((0, t.not)(y), () => u.break());
        });
      }
    }
    ((e.validateAdditionalItems = o), (e.default = a));
  }),
  Na = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.validateTuple = void 0));
    let t = te(),
      r = ne(),
      a = Oe(),
      o = {
        keyword: "items",
        type: "array",
        schemaType: ["object", "array", "boolean"],
        before: "uniqueItems",
        code(i) {
          let { schema: u, it: l } = i;
          if (Array.isArray(u)) return n(i, "additionalItems", u);
          if (((l.items = !0), (0, r.alwaysValidSchema)(l, u))) return;
          i.ok((0, a.validateArray)(i));
        },
      };
    function n(i, u, l = i.schema) {
      let { gen: d, parentSchema: m, data: _, keyword: P, it: z } = i;
      if ((f(m), z.opts.unevaluated && l.length && z.items !== !0))
        z.items = r.mergeEvaluated.items(d, l.length, z.items);
      let y = d.name("valid"),
        b = d.const("len", t._`${_}.length`);
      l.forEach((h, g) => {
        if ((0, r.alwaysValidSchema)(z, h)) return;
        (d.if(t._`${b} > ${g}`, () =>
          i.subschema({ keyword: P, schemaProp: g, dataProp: g }, y),
        ),
          i.ok(y));
      });
      function f(h) {
        let { opts: g, errSchemaPath: p } = z,
          w = l.length,
          C = w === h.minItems && (w === h.maxItems || h[u] === !1);
        if (g.strictTuples && !C) {
          let R = `"${P}" is ${w}-tuple, but minItems or maxItems/${u} are not specified or different at path "${p}"`;
          (0, r.checkStrictMode)(z, R, g.strictTuples);
        }
      }
    }
    ((e.validateTuple = n), (e.default = o));
  }),
  ki = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Na(),
      r = {
        keyword: "prefixItems",
        type: "array",
        schemaType: ["array"],
        before: "uniqueItems",
        code: (a) => (0, t.validateTuple)(a, "items"),
      };
    e.default = r;
  }),
  qi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      a = Oe(),
      o = Oa(),
      n = {
        keyword: "items",
        type: "array",
        schemaType: ["object", "boolean"],
        before: "uniqueItems",
        error: {
          message: ({ params: { len: i } }) =>
            t.str`must NOT have more than ${i} items`,
          params: ({ params: { len: i } }) => t._`{limit: ${i}}`,
        },
        code(i) {
          let { schema: u, parentSchema: l, it: d } = i,
            { prefixItems: m } = l;
          if (((d.items = !0), (0, r.alwaysValidSchema)(d, u))) return;
          if (m) (0, o.validateAdditionalItems)(i, m);
          else i.ok((0, a.validateArray)(i));
        },
      };
    e.default = n;
  }),
  Ii = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      a = {
        keyword: "contains",
        type: "array",
        schemaType: ["object", "boolean"],
        before: "uniqueItems",
        trackErrors: !0,
        error: {
          message: ({ params: { min: o, max: n } }) =>
            n === void 0
              ? t.str`must contain at least ${o} valid item(s)`
              : t.str`must contain at least ${o} and no more than ${n} valid item(s)`,
          params: ({ params: { min: o, max: n } }) =>
            n === void 0
              ? t._`{minContains: ${o}}`
              : t._`{minContains: ${o}, maxContains: ${n}}`,
        },
        code(o) {
          let { gen: n, schema: i, parentSchema: u, data: l, it: d } = o,
            m,
            _,
            { minContains: P, maxContains: z } = u;
          if (d.opts.next) ((m = P === void 0 ? 1 : P), (_ = z));
          else m = 1;
          let y = n.const("len", t._`${l}.length`);
          if ((o.setParams({ min: m, max: _ }), _ === void 0 && m === 0)) {
            (0, r.checkStrictMode)(
              d,
              '"minContains" == 0 without "maxContains": "contains" keyword ignored',
            );
            return;
          }
          if (_ !== void 0 && m > _) {
            ((0, r.checkStrictMode)(
              d,
              '"minContains" > "maxContains" is always invalid',
            ),
              o.fail());
            return;
          }
          if ((0, r.alwaysValidSchema)(d, i)) {
            let p = t._`${y} >= ${m}`;
            if (_ !== void 0) p = t._`${p} && ${y} <= ${_}`;
            o.pass(p);
            return;
          }
          d.items = !0;
          let b = n.name("valid");
          if (_ === void 0 && m === 1) h(b, () => n.if(b, () => n.break()));
          else if (m === 0) {
            if ((n.let(b, !0), _ !== void 0)) n.if(t._`${l}.length > 0`, f);
          } else (n.let(b, !1), f());
          o.result(b, () => o.reset());
          function f() {
            let p = n.name("_valid"),
              w = n.let("count", 0);
            h(p, () => n.if(p, () => g(w)));
          }
          function h(p, w) {
            n.forRange("i", 0, y, (C) => {
              (o.subschema(
                {
                  keyword: "contains",
                  dataProp: C,
                  dataPropType: r.Type.Num,
                  compositeRule: !0,
                },
                p,
              ),
                w());
            });
          }
          function g(p) {
            if ((n.code(t._`${p}++`), _ === void 0))
              n.if(t._`${p} >= ${m}`, () => n.assign(b, !0).break());
            else if (
              (n.if(t._`${p} > ${_}`, () => n.assign(b, !1).break()), m === 1)
            )
              n.assign(b, !0);
            else n.if(t._`${p} >= ${m}`, () => n.assign(b, !0));
          }
        },
      };
    e.default = a;
  }),
  cs = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0));
    let t = te(),
      r = ne(),
      a = Oe();
    e.error = {
      message: ({ params: { property: l, depsCount: d, deps: m } }) => {
        let _ = d === 1 ? "property" : "properties";
        return t.str`must have ${_} ${m} when property ${l} is present`;
      },
      params: ({
        params: { property: l, depsCount: d, deps: m, missingProperty: _ },
      }) => t._`{property: ${l},
    missingProperty: ${_},
    depsCount: ${d},
    deps: ${m}}`,
    };
    let o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(l) {
        let [d, m] = n(l);
        (i(l, d), u(l, m));
      },
    };
    function n({ schema: l }) {
      let d = {},
        m = {};
      for (let _ in l) {
        if (_ === "__proto__") continue;
        let P = Array.isArray(l[_]) ? d : m;
        P[_] = l[_];
      }
      return [d, m];
    }
    function i(l, d = l.schema) {
      let { gen: m, data: _, it: P } = l;
      if (Object.keys(d).length === 0) return;
      let z = m.let("missing");
      for (let y in d) {
        let b = d[y];
        if (b.length === 0) continue;
        let f = (0, a.propertyInData)(m, _, y, P.opts.ownProperties);
        if (
          (l.setParams({
            property: y,
            depsCount: b.length,
            deps: b.join(", "),
          }),
          P.allErrors)
        )
          m.if(f, () => {
            for (let h of b) (0, a.checkReportMissingProp)(l, h);
          });
        else
          (m.if(t._`${f} && (${(0, a.checkMissingProp)(l, b, z)})`),
            (0, a.reportMissingProp)(l, z),
            m.else());
      }
    }
    e.validatePropertyDeps = i;
    function u(l, d = l.schema) {
      let { gen: m, data: _, keyword: P, it: z } = l,
        y = m.name("valid");
      for (let b in d) {
        if ((0, r.alwaysValidSchema)(z, d[b])) continue;
        (m.if(
          (0, a.propertyInData)(m, _, b, z.opts.ownProperties),
          () => {
            let f = l.subschema({ keyword: P, schemaProp: b }, y);
            l.mergeValidEvaluated(f, y);
          },
          () => m.var(y, !0),
        ),
          l.ok(y));
      }
    }
    ((e.validateSchemaDeps = u), (e.default = o));
  }),
  Oi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      a = {
        keyword: "propertyNames",
        type: "object",
        schemaType: ["object", "boolean"],
        error: {
          message: "property name must be valid",
          params: ({ params: o }) => t._`{propertyName: ${o.propertyName}}`,
        },
        code(o) {
          let { gen: n, schema: i, data: u, it: l } = o;
          if ((0, r.alwaysValidSchema)(l, i)) return;
          let d = n.name("valid");
          (n.forIn("key", u, (m) => {
            (o.setParams({ propertyName: m }),
              o.subschema(
                {
                  keyword: "propertyNames",
                  data: m,
                  dataTypes: ["string"],
                  propertyName: m,
                  compositeRule: !0,
                },
                d,
              ),
              n.if((0, t.not)(d), () => {
                if ((o.error(!0), !l.allErrors)) n.break();
              }));
          }),
            o.ok(d));
        },
      };
    e.default = a;
  }),
  Ma = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Oe(),
      r = te(),
      a = Ie(),
      o = ne(),
      n = {
        keyword: "additionalProperties",
        type: ["object"],
        schemaType: ["boolean", "object"],
        allowUndefined: !0,
        trackErrors: !0,
        error: {
          message: "must NOT have additional properties",
          params: ({ params: i }) =>
            r._`{additionalProperty: ${i.additionalProperty}}`,
        },
        code(i) {
          let {
            gen: u,
            schema: l,
            parentSchema: d,
            data: m,
            errsCount: _,
            it: P,
          } = i;
          if (!_) throw Error("ajv implementation error");
          let { allErrors: z, opts: y } = P;
          if (
            ((P.props = !0),
            y.removeAdditional !== "all" && (0, o.alwaysValidSchema)(P, l))
          )
            return;
          let b = (0, t.allSchemaProperties)(d.properties),
            f = (0, t.allSchemaProperties)(d.patternProperties);
          (h(), i.ok(r._`${_} === ${a.default.errors}`));
          function h() {
            u.forIn("key", m, (R) => {
              if (!b.length && !f.length) w(R);
              else u.if(g(R), () => w(R));
            });
          }
          function g(R) {
            let S;
            if (b.length > 8) {
              let q = (0, o.schemaRefOrVal)(P, d.properties, "properties");
              S = (0, t.isOwnProperty)(u, q, R);
            } else if (b.length)
              S = (0, r.or)(...b.map((q) => r._`${R} === ${q}`));
            else S = r.nil;
            if (f.length)
              S = (0, r.or)(
                S,
                ...f.map((q) => r._`${(0, t.usePattern)(i, q)}.test(${R})`),
              );
            return (0, r.not)(S);
          }
          function p(R) {
            u.code(r._`delete ${m}[${R}]`);
          }
          function w(R) {
            if (
              y.removeAdditional === "all" ||
              (y.removeAdditional && l === !1)
            ) {
              p(R);
              return;
            }
            if (l === !1) {
              if ((i.setParams({ additionalProperty: R }), i.error(), !z))
                u.break();
              return;
            }
            if (typeof l == "object" && !(0, o.alwaysValidSchema)(P, l)) {
              let S = u.name("valid");
              if (y.removeAdditional === "failing")
                (C(R, S, !1),
                  u.if((0, r.not)(S), () => {
                    (i.reset(), p(R));
                  }));
              else if ((C(R, S), !z)) u.if((0, r.not)(S), () => u.break());
            }
          }
          function C(R, S, q) {
            let L = {
              keyword: "additionalProperties",
              dataProp: R,
              dataPropType: o.Type.Str,
            };
            if (q === !1)
              Object.assign(L, {
                compositeRule: !0,
                createErrors: !1,
                allErrors: !1,
              });
            i.subschema(L, S);
          }
        },
      };
    e.default = n;
  }),
  Ni = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Wt(),
      r = Oe(),
      a = ne(),
      o = Ma(),
      n = {
        keyword: "properties",
        type: "object",
        schemaType: "object",
        code(i) {
          let { gen: u, schema: l, parentSchema: d, data: m, it: _ } = i;
          if (
            _.opts.removeAdditional === "all" &&
            d.additionalProperties === void 0
          )
            o.default.code(
              new t.KeywordCxt(_, o.default, "additionalProperties"),
            );
          let P = (0, r.allSchemaProperties)(l);
          for (let h of P) _.definedProperties.add(h);
          if (_.opts.unevaluated && P.length && _.props !== !0)
            _.props = a.mergeEvaluated.props(u, (0, a.toHash)(P), _.props);
          let z = P.filter((h) => !(0, a.alwaysValidSchema)(_, l[h]));
          if (z.length === 0) return;
          let y = u.name("valid");
          for (let h of z) {
            if (b(h)) f(h);
            else {
              if (
                (u.if((0, r.propertyInData)(u, m, h, _.opts.ownProperties)),
                f(h),
                !_.allErrors)
              )
                u.else().var(y, !0);
              u.endIf();
            }
            (i.it.definedProperties.add(h), i.ok(y));
          }
          function b(h) {
            return (
              _.opts.useDefaults && !_.compositeRule && l[h].default !== void 0
            );
          }
          function f(h) {
            i.subschema(
              { keyword: "properties", schemaProp: h, dataProp: h },
              y,
            );
          }
        },
      };
    e.default = n;
  }),
  Mi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Oe(),
      r = te(),
      a = ne(),
      o = ne(),
      n = {
        keyword: "patternProperties",
        type: "object",
        schemaType: "object",
        code(i) {
          let { gen: u, schema: l, data: d, parentSchema: m, it: _ } = i,
            { opts: P } = _,
            z = (0, t.allSchemaProperties)(l),
            y = z.filter((C) => (0, a.alwaysValidSchema)(_, l[C]));
          if (
            z.length === 0 ||
            (y.length === z.length && (!_.opts.unevaluated || _.props === !0))
          )
            return;
          let b = P.strictSchema && !P.allowMatchingProperties && m.properties,
            f = u.name("valid");
          if (_.props !== !0 && !(_.props instanceof r.Name))
            _.props = (0, o.evaluatedPropsToName)(u, _.props);
          let { props: h } = _;
          g();
          function g() {
            for (let C of z) {
              if (b) p(C);
              if (_.allErrors) w(C);
              else (u.var(f, !0), w(C), u.if(f));
            }
          }
          function p(C) {
            for (let R in b)
              if (new RegExp(C).test(R))
                (0, a.checkStrictMode)(
                  _,
                  `property ${R} matches pattern ${C} (use allowMatchingProperties)`,
                );
          }
          function w(C) {
            u.forIn("key", d, (R) => {
              u.if(r._`${(0, t.usePattern)(i, C)}.test(${R})`, () => {
                let S = y.includes(C);
                if (!S)
                  i.subschema(
                    {
                      keyword: "patternProperties",
                      schemaProp: C,
                      dataProp: R,
                      dataPropType: o.Type.Str,
                    },
                    f,
                  );
                if (_.opts.unevaluated && h !== !0)
                  u.assign(r._`${h}[${R}]`, !0);
                else if (!S && !_.allErrors)
                  u.if((0, r.not)(f), () => u.break());
              });
            });
          }
        },
      };
    e.default = n;
  }),
  ji = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = ne(),
      r = {
        keyword: "not",
        schemaType: ["object", "boolean"],
        trackErrors: !0,
        code(a) {
          let { gen: o, schema: n, it: i } = a;
          if ((0, t.alwaysValidSchema)(i, n)) {
            a.fail();
            return;
          }
          let u = o.name("valid");
          (a.subschema(
            {
              keyword: "not",
              compositeRule: !0,
              createErrors: !1,
              allErrors: !1,
            },
            u,
          ),
            a.failResult(
              u,
              () => a.reset(),
              () => a.error(),
            ));
        },
        error: { message: "must NOT be valid" },
      };
    e.default = r;
  }),
  Ai = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: !0,
      code: Oe().validateUnion,
      error: { message: "must match a schema in anyOf" },
    };
    e.default = t;
  }),
  Li = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      a = {
        keyword: "oneOf",
        schemaType: "array",
        trackErrors: !0,
        error: {
          message: "must match exactly one schema in oneOf",
          params: ({ params: o }) => t._`{passingSchemas: ${o.passing}}`,
        },
        code(o) {
          let { gen: n, schema: i, parentSchema: u, it: l } = o;
          if (!Array.isArray(i)) throw Error("ajv implementation error");
          if (l.opts.discriminator && u.discriminator) return;
          let d = i,
            m = n.let("valid", !1),
            _ = n.let("passing", null),
            P = n.name("_valid");
          (o.setParams({ passing: _ }),
            n.block(z),
            o.result(
              m,
              () => o.reset(),
              () => o.error(!0),
            ));
          function z() {
            d.forEach((y, b) => {
              let f;
              if ((0, r.alwaysValidSchema)(l, y)) n.var(P, !0);
              else
                f = o.subschema(
                  { keyword: "oneOf", schemaProp: b, compositeRule: !0 },
                  P,
                );
              if (b > 0)
                n.if(t._`${P} && ${m}`)
                  .assign(m, !1)
                  .assign(_, t._`[${_}, ${b}]`)
                  .else();
              n.if(P, () => {
                if ((n.assign(m, !0), n.assign(_, b), f))
                  o.mergeEvaluated(f, t.Name);
              });
            });
          }
        },
      };
    e.default = a;
  }),
  Ui = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = ne(),
      r = {
        keyword: "allOf",
        schemaType: "array",
        code(a) {
          let { gen: o, schema: n, it: i } = a;
          if (!Array.isArray(n)) throw Error("ajv implementation error");
          let u = o.name("valid");
          n.forEach((l, d) => {
            if ((0, t.alwaysValidSchema)(i, l)) return;
            let m = a.subschema({ keyword: "allOf", schemaProp: d }, u);
            (a.ok(u), a.mergeEvaluated(m));
          });
        },
      };
    e.default = r;
  }),
  Di = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      a = {
        keyword: "if",
        schemaType: ["object", "boolean"],
        trackErrors: !0,
        error: {
          message: ({ params: n }) => t.str`must match "${n.ifClause}" schema`,
          params: ({ params: n }) => t._`{failingKeyword: ${n.ifClause}}`,
        },
        code(n) {
          let { gen: i, parentSchema: u, it: l } = n;
          if (u.then === void 0 && u.else === void 0)
            (0, r.checkStrictMode)(
              l,
              '"if" without "then" and "else" is ignored',
            );
          let d = o(l, "then"),
            m = o(l, "else");
          if (!d && !m) return;
          let _ = i.let("valid", !0),
            P = i.name("_valid");
          if ((z(), n.reset(), d && m)) {
            let b = i.let("ifClause");
            (n.setParams({ ifClause: b }), i.if(P, y("then", b), y("else", b)));
          } else if (d) i.if(P, y("then"));
          else i.if((0, t.not)(P), y("else"));
          n.pass(_, () => n.error(!0));
          function z() {
            let b = n.subschema(
              {
                keyword: "if",
                compositeRule: !0,
                createErrors: !1,
                allErrors: !1,
              },
              P,
            );
            n.mergeEvaluated(b);
          }
          function y(b, f) {
            return () => {
              let h = n.subschema({ keyword: b }, P);
              if ((i.assign(_, P), n.mergeValidEvaluated(h, _), f))
                i.assign(f, t._`${b}`);
              else n.setParams({ ifClause: b });
            };
          }
        },
      };
    function o(n, i) {
      let u = n.schema[i];
      return u !== void 0 && !(0, r.alwaysValidSchema)(n, u);
    }
    e.default = a;
  }),
  Vi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = ne(),
      r = {
        keyword: ["then", "else"],
        schemaType: ["object", "boolean"],
        code({ keyword: a, parentSchema: o, it: n }) {
          if (o.if === void 0)
            (0, t.checkStrictMode)(n, `"${a}" without "if" is ignored`);
        },
      };
    e.default = r;
  }),
  ja = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Oa(),
      r = ki(),
      a = Na(),
      o = qi(),
      n = Ii(),
      i = cs(),
      u = Oi(),
      l = Ma(),
      d = Ni(),
      m = Mi(),
      _ = ji(),
      P = Ai(),
      z = Li(),
      y = Ui(),
      b = Di(),
      f = Vi();
    function h(g = !1) {
      let p = [
        _.default,
        P.default,
        z.default,
        y.default,
        b.default,
        f.default,
        u.default,
        l.default,
        i.default,
        d.default,
        m.default,
      ];
      if (g) p.push(r.default, o.default);
      else p.push(t.default, a.default);
      return (p.push(n.default), p);
    }
    e.default = h;
  }),
  Fi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = {
        keyword: "format",
        type: ["number", "string"],
        schemaType: "string",
        $data: !0,
        error: {
          message: ({ schemaCode: a }) => t.str`must match format "${a}"`,
          params: ({ schemaCode: a }) => t._`{format: ${a}}`,
        },
        code(a, o) {
          let {
              gen: n,
              data: i,
              $data: u,
              schema: l,
              schemaCode: d,
              it: m,
            } = a,
            { opts: _, errSchemaPath: P, schemaEnv: z, self: y } = m;
          if (!_.validateFormats) return;
          if (u) b();
          else f();
          function b() {
            let h = n.scopeValue("formats", {
                ref: y.formats,
                code: _.code.formats,
              }),
              g = n.const("fDef", t._`${h}[${d}]`),
              p = n.let("fType"),
              w = n.let("format");
            (n.if(
              t._`typeof ${g} == "object" && !(${g} instanceof RegExp)`,
              () =>
                n
                  .assign(p, t._`${g}.type || "string"`)
                  .assign(w, t._`${g}.validate`),
              () => n.assign(p, t._`"string"`).assign(w, g),
            ),
              a.fail$data((0, t.or)(C(), R())));
            function C() {
              if (_.strictSchema === !1) return t.nil;
              return t._`${d} && !${w}`;
            }
            function R() {
              let S = z.$async
                  ? t._`(${g}.async ? await ${w}(${i}) : ${w}(${i}))`
                  : t._`${w}(${i})`,
                q = t._`(typeof ${w} == "function" ? ${S} : ${w}.test(${i}))`;
              return t._`${w} && ${w} !== true && ${p} === ${o} && !${q}`;
            }
          }
          function f() {
            let h = y.formats[l];
            if (!h) {
              C();
              return;
            }
            if (h === !0) return;
            let [g, p, w] = R(h);
            if (g === o) a.pass(S());
            function C() {
              if (_.strictSchema === !1) {
                y.logger.warn(q());
                return;
              }
              throw Error(q());
              function q() {
                return `unknown format "${l}" ignored in schema at path "${P}"`;
              }
            }
            function R(q) {
              let L =
                  q instanceof RegExp
                    ? (0, t.regexpCode)(q)
                    : _.code.formats
                      ? t._`${_.code.formats}${(0, t.getProperty)(l)}`
                      : void 0,
                x = n.scopeValue("formats", { key: l, ref: q, code: L });
              if (typeof q == "object" && !(q instanceof RegExp))
                return [q.type || "string", q.validate, t._`${x}.validate`];
              return ["string", q, x];
            }
            function S() {
              if (typeof h == "object" && !(h instanceof RegExp) && h.async) {
                if (!z.$async) throw Error("async format in sync schema");
                return t._`await ${w}(${i})`;
              }
              return typeof p == "function"
                ? t._`${w}(${i})`
                : t._`${w}.test(${i})`;
            }
          }
        },
      };
    e.default = r;
  }),
  Aa = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = [Fi().default];
    e.default = t;
  }),
  La = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.contentVocabulary = e.metadataVocabulary = void 0),
      (e.metadataVocabulary = [
        "title",
        "description",
        "default",
        "deprecated",
        "readOnly",
        "writeOnly",
        "examples",
      ]),
      (e.contentVocabulary = [
        "contentMediaType",
        "contentEncoding",
        "contentSchema",
      ]));
  }),
  Hi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = qa(),
      r = Ia(),
      a = ja(),
      o = Aa(),
      n = La(),
      i = [
        t.default,
        r.default,
        (0, a.default)(),
        o.default,
        n.metadataVocabulary,
        n.contentVocabulary,
      ];
    e.default = i;
  }),
  xi = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.DiscrError = void 0));
    var t;
    (function (r) {
      ((r.Tag = "tag"), (r.Mapping = "mapping"));
    })(t || (e.DiscrError = t = {}));
  }),
  Ua = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = xi(),
      a = Or(),
      o = Yt(),
      n = ne(),
      i = {
        keyword: "discriminator",
        type: "object",
        schemaType: "object",
        error: {
          message: ({ params: { discrError: u, tagName: l } }) =>
            u === r.DiscrError.Tag
              ? `tag "${l}" must be string`
              : `value of tag "${l}" must be in oneOf`,
          params: ({ params: { discrError: u, tag: l, tagName: d } }) =>
            t._`{error: ${u}, tag: ${d}, tagValue: ${l}}`,
        },
        code(u) {
          let { gen: l, data: d, schema: m, parentSchema: _, it: P } = u,
            { oneOf: z } = _;
          if (!P.opts.discriminator)
            throw Error("discriminator: requires discriminator option");
          let y = m.propertyName;
          if (typeof y != "string")
            throw Error("discriminator: requires propertyName");
          if (m.mapping) throw Error("discriminator: mapping is not supported");
          if (!z) throw Error("discriminator: requires oneOf keyword");
          let b = l.let("valid", !1),
            f = l.const("tag", t._`${d}${(0, t.getProperty)(y)}`);
          (l.if(
            t._`typeof ${f} == "string"`,
            () => h(),
            () =>
              u.error(!1, { discrError: r.DiscrError.Tag, tag: f, tagName: y }),
          ),
            u.ok(b));
          function h() {
            let w = p();
            l.if(!1);
            for (let C in w)
              (l.elseIf(t._`${f} === ${C}`), l.assign(b, g(w[C])));
            (l.else(),
              u.error(!1, {
                discrError: r.DiscrError.Mapping,
                tag: f,
                tagName: y,
              }),
              l.endIf());
          }
          function g(w) {
            let C = l.name("valid"),
              R = u.subschema({ keyword: "oneOf", schemaProp: w }, C);
            return (u.mergeEvaluated(R, t.Name), C);
          }
          function p() {
            var w;
            let C = {},
              R = q(_),
              S = !0;
            for (let j = 0; j < z.length; j++) {
              let F = z[j];
              if (
                (F === null || F === void 0 ? void 0 : F.$ref) &&
                !(0, n.schemaHasRulesButRef)(F, P.self.RULES)
              ) {
                let G = F.$ref;
                if (
                  ((F = a.resolveRef.call(
                    P.self,
                    P.schemaEnv.root,
                    P.baseId,
                    G,
                  )),
                  F instanceof a.SchemaEnv)
                )
                  F = F.schema;
                if (F === void 0)
                  throw new o.default(P.opts.uriResolver, P.baseId, G);
              }
              let B =
                (w = F === null || F === void 0 ? void 0 : F.properties) ===
                  null || w === void 0
                  ? void 0
                  : w[y];
              if (typeof B != "object")
                throw Error(
                  `discriminator: oneOf subschemas (or referenced schemas) must have "properties/${y}"`,
                );
              ((S = S && (R || q(F))), L(B, j));
            }
            if (!S) throw Error(`discriminator: "${y}" must be required`);
            return C;
            function q({ required: j }) {
              return Array.isArray(j) && j.includes(y);
            }
            function L(j, F) {
              if (j.const) x(j.const, F);
              else if (j.enum) for (let B of j.enum) x(B, F);
              else
                throw Error(
                  `discriminator: "properties/${y}" must have "const" or "enum"`,
                );
            }
            function x(j, F) {
              if (typeof j != "string" || j in C)
                throw Error(
                  `discriminator: "${y}" values must be unique strings`,
                );
              C[j] = F;
            }
          }
        },
      };
    e.default = i;
  }),
  Ji = K((e, t) => {
    t.exports = {
      $schema: "http://json-schema.org/draft-07/schema#",
      $id: "http://json-schema.org/draft-07/schema#",
      title: "Core schema meta-schema",
      definitions: {
        schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } },
        nonNegativeInteger: { type: "integer", minimum: 0 },
        nonNegativeIntegerDefault0: {
          allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }],
        },
        simpleTypes: {
          enum: [
            "array",
            "boolean",
            "integer",
            "null",
            "number",
            "object",
            "string",
          ],
        },
        stringArray: {
          type: "array",
          items: { type: "string" },
          uniqueItems: !0,
          default: [],
        },
      },
      type: ["object", "boolean"],
      properties: {
        $id: { type: "string", format: "uri-reference" },
        $schema: { type: "string", format: "uri" },
        $ref: { type: "string", format: "uri-reference" },
        $comment: { type: "string" },
        title: { type: "string" },
        description: { type: "string" },
        default: !0,
        readOnly: { type: "boolean", default: !1 },
        examples: { type: "array", items: !0 },
        multipleOf: { type: "number", exclusiveMinimum: 0 },
        maximum: { type: "number" },
        exclusiveMaximum: { type: "number" },
        minimum: { type: "number" },
        exclusiveMinimum: { type: "number" },
        maxLength: { $ref: "#/definitions/nonNegativeInteger" },
        minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        pattern: { type: "string", format: "regex" },
        additionalItems: { $ref: "#" },
        items: {
          anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
          default: !0,
        },
        maxItems: { $ref: "#/definitions/nonNegativeInteger" },
        minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        uniqueItems: { type: "boolean", default: !1 },
        contains: { $ref: "#" },
        maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
        minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: { $ref: "#" },
        definitions: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {},
        },
        properties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {},
        },
        patternProperties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          propertyNames: { format: "regex" },
          default: {},
        },
        dependencies: {
          type: "object",
          additionalProperties: {
            anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }],
          },
        },
        propertyNames: { $ref: "#" },
        const: !0,
        enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 },
        type: {
          anyOf: [
            { $ref: "#/definitions/simpleTypes" },
            {
              type: "array",
              items: { $ref: "#/definitions/simpleTypes" },
              minItems: 1,
              uniqueItems: !0,
            },
          ],
        },
        format: { type: "string" },
        contentMediaType: { type: "string" },
        contentEncoding: { type: "string" },
        if: { $ref: "#" },
        then: { $ref: "#" },
        else: { $ref: "#" },
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" },
      },
      default: !0,
    };
  }),
  Da = K((e, t) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.MissingRefError =
        e.ValidationError =
        e.CodeGen =
        e.Name =
        e.nil =
        e.stringify =
        e.str =
        e._ =
        e.KeywordCxt =
        e.Ajv =
          void 0));
    let r = ka(),
      a = Hi(),
      o = Ua(),
      n = Ji(),
      i = ["/properties"],
      u = "http://json-schema.org/draft-07/schema";
    var l = class extends r.default {
      _addVocabularies() {
        if (
          (super._addVocabularies(),
          a.default.forEach((z) => this.addVocabulary(z)),
          this.opts.discriminator)
        )
          this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        if ((super._addDefaultMetaSchema(), !this.opts.meta)) return;
        let z = this.opts.$data ? this.$dataMetaSchema(n, i) : n;
        (this.addMetaSchema(z, u, !1),
          (this.refs["http://json-schema.org/schema"] = u));
      }
      defaultMeta() {
        return (this.opts.defaultMeta =
          super.defaultMeta() || (this.getSchema(u) ? u : void 0));
      }
    };
    ((e.Ajv = l),
      (t.exports = e = l),
      (t.exports.Ajv = l),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = l));
    var d = Wt();
    Object.defineProperty(e, "KeywordCxt", {
      enumerable: !0,
      get: function () {
        return d.KeywordCxt;
      },
    });
    var m = te();
    (Object.defineProperty(e, "_", {
      enumerable: !0,
      get: function () {
        return m._;
      },
    }),
      Object.defineProperty(e, "str", {
        enumerable: !0,
        get: function () {
          return m.str;
        },
      }),
      Object.defineProperty(e, "stringify", {
        enumerable: !0,
        get: function () {
          return m.stringify;
        },
      }),
      Object.defineProperty(e, "nil", {
        enumerable: !0,
        get: function () {
          return m.nil;
        },
      }),
      Object.defineProperty(e, "Name", {
        enumerable: !0,
        get: function () {
          return m.Name;
        },
      }),
      Object.defineProperty(e, "CodeGen", {
        enumerable: !0,
        get: function () {
          return m.CodeGen;
        },
      }));
    var _ = Ir();
    Object.defineProperty(e, "ValidationError", {
      enumerable: !0,
      get: function () {
        return _.default;
      },
    });
    var P = Yt();
    Object.defineProperty(e, "MissingRefError", {
      enumerable: !0,
      get: function () {
        return P.default;
      },
    });
  }),
  Va = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.dynamicAnchor = void 0));
    let t = te(),
      r = Ie(),
      a = Or(),
      o = ns(),
      n = {
        keyword: "$dynamicAnchor",
        schemaType: "string",
        code: (l) => i(l, l.schema),
      };
    function i(l, d) {
      let { gen: m, it: _ } = l;
      _.schemaEnv.root.dynamicAnchors[d] = !0;
      let P = t._`${r.default.dynamicAnchors}${(0, t.getProperty)(d)}`,
        z = _.errSchemaPath === "#" ? _.validateName : u(l);
      m.if(t._`!${P}`, () => m.assign(P, z));
    }
    e.dynamicAnchor = i;
    function u(l) {
      let { schemaEnv: d, schema: m, self: _ } = l.it,
        { root: P, baseId: z, localRefs: y, meta: b } = d.root,
        { schemaId: f } = _.opts,
        h = new a.SchemaEnv({
          schema: m,
          schemaId: f,
          root: P,
          baseId: z,
          localRefs: y,
          meta: b,
        });
      return (a.compileSchema.call(_, h), (0, o.getValidate)(l, h));
    }
    e.default = n;
  }),
  Fa = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.dynamicRef = void 0));
    let t = te(),
      r = Ie(),
      a = ns(),
      o = {
        keyword: "$dynamicRef",
        schemaType: "string",
        code: (i) => n(i, i.schema),
      };
    function n(i, u) {
      let { gen: l, keyword: d, it: m } = i;
      if (u[0] !== "#")
        throw Error(`"${d}" only supports hash fragment reference`);
      let _ = u.slice(1);
      if (m.allErrors) P();
      else {
        let y = l.let("valid", !1);
        (P(y), i.ok(y));
      }
      function P(y) {
        if (m.schemaEnv.root.dynamicAnchors[_]) {
          let b = l.let(
            "_v",
            t._`${r.default.dynamicAnchors}${(0, t.getProperty)(_)}`,
          );
          l.if(b, z(b, y), z(m.validateName, y));
        } else z(m.validateName, y)();
      }
      function z(y, b) {
        return b
          ? () =>
              l.block(() => {
                ((0, a.callRef)(i, y), l.let(b, !0));
              })
          : () => (0, a.callRef)(i, y);
      }
    }
    ((e.dynamicRef = n), (e.default = o));
  }),
  Gi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Va(),
      r = ne(),
      a = {
        keyword: "$recursiveAnchor",
        schemaType: "boolean",
        code(o) {
          if (o.schema) (0, t.dynamicAnchor)(o, "");
          else
            (0, r.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
        },
      };
    e.default = a;
  }),
  Bi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Fa(),
      r = {
        keyword: "$recursiveRef",
        schemaType: "string",
        code: (a) => (0, t.dynamicRef)(a, a.schema),
      };
    e.default = r;
  }),
  Wi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Va(),
      r = Fa(),
      a = Gi(),
      o = Bi(),
      n = [t.default, r.default, a.default, o.default];
    e.default = n;
  }),
  Yi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = cs(),
      r = {
        keyword: "dependentRequired",
        type: "object",
        schemaType: "object",
        error: t.error,
        code: (a) => (0, t.validatePropertyDeps)(a),
      };
    e.default = r;
  }),
  Xi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = cs(),
      r = {
        keyword: "dependentSchemas",
        type: "object",
        schemaType: "object",
        code: (a) => (0, t.validateSchemaDeps)(a),
      };
    e.default = r;
  }),
  Zi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = ne(),
      r = {
        keyword: ["maxContains", "minContains"],
        type: "array",
        schemaType: "number",
        code({ keyword: a, parentSchema: o, it: n }) {
          if (o.contains === void 0)
            (0, t.checkStrictMode)(n, `"${a}" without "contains" is ignored`);
        },
      };
    e.default = r;
  }),
  Qi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Yi(),
      r = Xi(),
      a = Zi(),
      o = [t.default, r.default, a.default];
    e.default = o;
  }),
  ec = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      a = Ie(),
      o = {
        keyword: "unevaluatedProperties",
        type: "object",
        schemaType: ["boolean", "object"],
        trackErrors: !0,
        error: {
          message: "must NOT have unevaluated properties",
          params: ({ params: n }) =>
            t._`{unevaluatedProperty: ${n.unevaluatedProperty}}`,
        },
        code(n) {
          let { gen: i, schema: u, data: l, errsCount: d, it: m } = n;
          if (!d) throw Error("ajv implementation error");
          let { allErrors: _, props: P } = m;
          if (P instanceof t.Name)
            i.if(t._`${P} !== true`, () =>
              i.forIn("key", l, (f) => i.if(y(P, f), () => z(f))),
            );
          else if (P !== !0)
            i.forIn("key", l, (f) =>
              P === void 0 ? z(f) : i.if(b(P, f), () => z(f)),
            );
          ((m.props = !0), n.ok(t._`${d} === ${a.default.errors}`));
          function z(f) {
            if (u === !1) {
              if ((n.setParams({ unevaluatedProperty: f }), n.error(), !_))
                i.break();
              return;
            }
            if (!(0, r.alwaysValidSchema)(m, u)) {
              let h = i.name("valid");
              if (
                (n.subschema(
                  {
                    keyword: "unevaluatedProperties",
                    dataProp: f,
                    dataPropType: r.Type.Str,
                  },
                  h,
                ),
                !_)
              )
                i.if((0, t.not)(h), () => i.break());
            }
          }
          function y(f, h) {
            return t._`!${f} || !${f}[${h}]`;
          }
          function b(f, h) {
            let g = [];
            for (let p in f) if (f[p] === !0) g.push(t._`${h} !== ${p}`);
            return (0, t.and)(...g);
          }
        },
      };
    e.default = o;
  }),
  tc = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      a = {
        keyword: "unevaluatedItems",
        type: "array",
        schemaType: ["boolean", "object"],
        error: {
          message: ({ params: { len: o } }) =>
            t.str`must NOT have more than ${o} items`,
          params: ({ params: { len: o } }) => t._`{limit: ${o}}`,
        },
        code(o) {
          let { gen: n, schema: i, data: u, it: l } = o,
            d = l.items || 0;
          if (d === !0) return;
          let m = n.const("len", t._`${u}.length`);
          if (i === !1) (o.setParams({ len: d }), o.fail(t._`${m} > ${d}`));
          else if (typeof i == "object" && !(0, r.alwaysValidSchema)(l, i)) {
            let P = n.var("valid", t._`${m} <= ${d}`);
            (n.if((0, t.not)(P), () => _(P, d)), o.ok(P));
          }
          l.items = !0;
          function _(P, z) {
            n.forRange("i", z, m, (y) => {
              if (
                (o.subschema(
                  {
                    keyword: "unevaluatedItems",
                    dataProp: y,
                    dataPropType: r.Type.Num,
                  },
                  P,
                ),
                !l.allErrors)
              )
                n.if((0, t.not)(P), () => n.break());
            });
          }
        },
      };
    e.default = a;
  }),
  rc = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = ec(),
      r = tc(),
      a = [t.default, r.default];
    e.default = a;
  }),
  sc = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = qa(),
      r = Ia(),
      a = ja(),
      o = Wi(),
      n = Qi(),
      i = rc(),
      u = Aa(),
      l = La(),
      d = [
        o.default,
        t.default,
        r.default,
        (0, a.default)(!0),
        u.default,
        l.metadataVocabulary,
        l.contentVocabulary,
        n.default,
        i.default,
      ];
    e.default = d;
  }),
  ac = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/schema",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/core": !0,
        "https://json-schema.org/draft/2020-12/vocab/applicator": !0,
        "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
        "https://json-schema.org/draft/2020-12/vocab/validation": !0,
        "https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
        "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
        "https://json-schema.org/draft/2020-12/vocab/content": !0,
      },
      $dynamicAnchor: "meta",
      title: "Core and Validation specifications meta-schema",
      allOf: [
        { $ref: "meta/core" },
        { $ref: "meta/applicator" },
        { $ref: "meta/unevaluated" },
        { $ref: "meta/validation" },
        { $ref: "meta/meta-data" },
        { $ref: "meta/format-annotation" },
        { $ref: "meta/content" },
      ],
      type: ["object", "boolean"],
      $comment:
        "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
      properties: {
        definitions: {
          $comment: '"definitions" has been replaced by "$defs".',
          type: "object",
          additionalProperties: { $dynamicRef: "#meta" },
          deprecated: !0,
          default: {},
        },
        dependencies: {
          $comment:
            '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',
          type: "object",
          additionalProperties: {
            anyOf: [
              { $dynamicRef: "#meta" },
              { $ref: "meta/validation#/$defs/stringArray" },
            ],
          },
          deprecated: !0,
          default: {},
        },
        $recursiveAnchor: {
          $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".',
          $ref: "meta/core#/$defs/anchorString",
          deprecated: !0,
        },
        $recursiveRef: {
          $comment: '"$recursiveRef" has been replaced by "$dynamicRef".',
          $ref: "meta/core#/$defs/uriReferenceString",
          deprecated: !0,
        },
      },
    };
  }),
  oc = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/applicator",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/applicator": !0,
      },
      $dynamicAnchor: "meta",
      title: "Applicator vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        prefixItems: { $ref: "#/$defs/schemaArray" },
        items: { $dynamicRef: "#meta" },
        contains: { $dynamicRef: "#meta" },
        additionalProperties: { $dynamicRef: "#meta" },
        properties: {
          type: "object",
          additionalProperties: { $dynamicRef: "#meta" },
          default: {},
        },
        patternProperties: {
          type: "object",
          additionalProperties: { $dynamicRef: "#meta" },
          propertyNames: { format: "regex" },
          default: {},
        },
        dependentSchemas: {
          type: "object",
          additionalProperties: { $dynamicRef: "#meta" },
          default: {},
        },
        propertyNames: { $dynamicRef: "#meta" },
        if: { $dynamicRef: "#meta" },
        then: { $dynamicRef: "#meta" },
        else: { $dynamicRef: "#meta" },
        allOf: { $ref: "#/$defs/schemaArray" },
        anyOf: { $ref: "#/$defs/schemaArray" },
        oneOf: { $ref: "#/$defs/schemaArray" },
        not: { $dynamicRef: "#meta" },
      },
      $defs: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: { $dynamicRef: "#meta" },
        },
      },
    };
  }),
  nc = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/unevaluated",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
      },
      $dynamicAnchor: "meta",
      title: "Unevaluated applicator vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        unevaluatedItems: { $dynamicRef: "#meta" },
        unevaluatedProperties: { $dynamicRef: "#meta" },
      },
    };
  }),
  ic = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/content",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/content": !0,
      },
      $dynamicAnchor: "meta",
      title: "Content vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        contentEncoding: { type: "string" },
        contentMediaType: { type: "string" },
        contentSchema: { $dynamicRef: "#meta" },
      },
    };
  }),
  cc = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/core",
      $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/core": !0 },
      $dynamicAnchor: "meta",
      title: "Core vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        $id: {
          $ref: "#/$defs/uriReferenceString",
          $comment: "Non-empty fragments not allowed.",
          pattern: "^[^#]*#?$",
        },
        $schema: { $ref: "#/$defs/uriString" },
        $ref: { $ref: "#/$defs/uriReferenceString" },
        $anchor: { $ref: "#/$defs/anchorString" },
        $dynamicRef: { $ref: "#/$defs/uriReferenceString" },
        $dynamicAnchor: { $ref: "#/$defs/anchorString" },
        $vocabulary: {
          type: "object",
          propertyNames: { $ref: "#/$defs/uriString" },
          additionalProperties: { type: "boolean" },
        },
        $comment: { type: "string" },
        $defs: {
          type: "object",
          additionalProperties: { $dynamicRef: "#meta" },
        },
      },
      $defs: {
        anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" },
        uriString: { type: "string", format: "uri" },
        uriReferenceString: { type: "string", format: "uri-reference" },
      },
    };
  }),
  lc = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/format-annotation",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
      },
      $dynamicAnchor: "meta",
      title: "Format vocabulary meta-schema for annotation results",
      type: ["object", "boolean"],
      properties: { format: { type: "string" } },
    };
  }),
  uc = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/meta-data",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
      },
      $dynamicAnchor: "meta",
      title: "Meta-data vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        title: { type: "string" },
        description: { type: "string" },
        default: !0,
        deprecated: { type: "boolean", default: !1 },
        readOnly: { type: "boolean", default: !1 },
        writeOnly: { type: "boolean", default: !1 },
        examples: { type: "array", items: !0 },
      },
    };
  }),
  dc = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/validation",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/validation": !0,
      },
      $dynamicAnchor: "meta",
      title: "Validation vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        type: {
          anyOf: [
            { $ref: "#/$defs/simpleTypes" },
            {
              type: "array",
              items: { $ref: "#/$defs/simpleTypes" },
              minItems: 1,
              uniqueItems: !0,
            },
          ],
        },
        const: !0,
        enum: { type: "array", items: !0 },
        multipleOf: { type: "number", exclusiveMinimum: 0 },
        maximum: { type: "number" },
        exclusiveMaximum: { type: "number" },
        minimum: { type: "number" },
        exclusiveMinimum: { type: "number" },
        maxLength: { $ref: "#/$defs/nonNegativeInteger" },
        minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
        pattern: { type: "string", format: "regex" },
        maxItems: { $ref: "#/$defs/nonNegativeInteger" },
        minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
        uniqueItems: { type: "boolean", default: !1 },
        maxContains: { $ref: "#/$defs/nonNegativeInteger" },
        minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 },
        maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
        minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
        required: { $ref: "#/$defs/stringArray" },
        dependentRequired: {
          type: "object",
          additionalProperties: { $ref: "#/$defs/stringArray" },
        },
      },
      $defs: {
        nonNegativeInteger: { type: "integer", minimum: 0 },
        nonNegativeIntegerDefault0: {
          $ref: "#/$defs/nonNegativeInteger",
          default: 0,
        },
        simpleTypes: {
          enum: [
            "array",
            "boolean",
            "integer",
            "null",
            "number",
            "object",
            "string",
          ],
        },
        stringArray: {
          type: "array",
          items: { type: "string" },
          uniqueItems: !0,
          default: [],
        },
      },
    };
  }),
  hc = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = ac(),
      r = oc(),
      a = nc(),
      o = ic(),
      n = cc(),
      i = lc(),
      u = uc(),
      l = dc(),
      d = ["/properties"];
    function m(_) {
      return (
        [t, r, a, o, n, P(this, i), u, P(this, l)].forEach((z) =>
          this.addMetaSchema(z, void 0, !1),
        ),
        this
      );
      function P(z, y) {
        return _ ? z.$dataMetaSchema(y, d) : y;
      }
    }
    e.default = m;
  }),
  mc = K((e, t) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.MissingRefError =
        e.ValidationError =
        e.CodeGen =
        e.Name =
        e.nil =
        e.stringify =
        e.str =
        e._ =
        e.KeywordCxt =
        e.Ajv2020 =
          void 0));
    let r = ka(),
      a = sc(),
      o = Ua(),
      n = hc(),
      i = "https://json-schema.org/draft/2020-12/schema";
    var u = class extends r.default {
      constructor(P = {}) {
        super({ ...P, dynamicRef: !0, next: !0, unevaluated: !0 });
      }
      _addVocabularies() {
        if (
          (super._addVocabularies(),
          a.default.forEach((P) => this.addVocabulary(P)),
          this.opts.discriminator)
        )
          this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        let { $data: P, meta: z } = this.opts;
        if (!z) return;
        (n.default.call(this, P),
          (this.refs["http://json-schema.org/schema"] = i));
      }
      defaultMeta() {
        return (this.opts.defaultMeta =
          super.defaultMeta() || (this.getSchema(i) ? i : void 0));
      }
    };
    ((e.Ajv2020 = u),
      (t.exports = e = u),
      (t.exports.Ajv2020 = u),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = u));
    var l = Wt();
    Object.defineProperty(e, "KeywordCxt", {
      enumerable: !0,
      get: function () {
        return l.KeywordCxt;
      },
    });
    var d = te();
    (Object.defineProperty(e, "_", {
      enumerable: !0,
      get: function () {
        return d._;
      },
    }),
      Object.defineProperty(e, "str", {
        enumerable: !0,
        get: function () {
          return d.str;
        },
      }),
      Object.defineProperty(e, "stringify", {
        enumerable: !0,
        get: function () {
          return d.stringify;
        },
      }),
      Object.defineProperty(e, "nil", {
        enumerable: !0,
        get: function () {
          return d.nil;
        },
      }),
      Object.defineProperty(e, "Name", {
        enumerable: !0,
        get: function () {
          return d.Name;
        },
      }),
      Object.defineProperty(e, "CodeGen", {
        enumerable: !0,
        get: function () {
          return d.CodeGen;
        },
      }));
    var m = Ir();
    Object.defineProperty(e, "ValidationError", {
      enumerable: !0,
      get: function () {
        return m.default;
      },
    });
    var _ = Yt();
    Object.defineProperty(e, "MissingRefError", {
      enumerable: !0,
      get: function () {
        return _.default;
      },
    });
  }),
  fc = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.formatNames = e.fastFormats = e.fullFormats = void 0));
    function t(j, F) {
      return { validate: j, compare: F };
    }
    ((e.fullFormats = {
      date: t(n, i),
      time: t(l(!0), d),
      "date-time": t(P(!0), z),
      "iso-time": t(l(), m),
      "iso-date-time": t(P(), y),
      duration:
        /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: h,
      "uri-reference":
        /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      "uri-template":
        /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
      email:
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname:
        /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex: x,
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment":
        /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      "relative-json-pointer":
        /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      byte: p,
      int32: { type: "number", validate: R },
      int64: { type: "number", validate: S },
      float: { type: "number", validate: q },
      double: { type: "number", validate: q },
      password: !0,
      binary: !0,
    }),
      (e.fastFormats = {
        ...e.fullFormats,
        date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, i),
        time: t(
          /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
          d,
        ),
        "date-time": t(
          /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
          z,
        ),
        "iso-time": t(
          /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
          m,
        ),
        "iso-date-time": t(
          /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
          y,
        ),
        uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
        "uri-reference":
          /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
        email:
          /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
      }),
      (e.formatNames = Object.keys(e.fullFormats)));
    function r(j) {
      return j % 4 === 0 && (j % 100 !== 0 || j % 400 === 0);
    }
    let a = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
      o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function n(j) {
      let F = a.exec(j);
      if (!F) return !1;
      let B = +F[1],
        G = +F[2],
        ae = +F[3];
      return (
        G >= 1 && G <= 12 && ae >= 1 && ae <= (G === 2 && r(B) ? 29 : o[G])
      );
    }
    function i(j, F) {
      if (!(j && F)) return;
      if (j > F) return 1;
      if (j < F) return -1;
      return 0;
    }
    let u = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function l(j) {
      return function (B) {
        let G = u.exec(B);
        if (!G) return !1;
        let ae = +G[1],
          le = +G[2],
          ie = +G[3],
          me = G[4],
          oe = G[5] === "-" ? -1 : 1,
          M = +(G[6] || 0),
          U = +(G[7] || 0);
        if (M > 23 || U > 59 || (j && !me)) return !1;
        if (ae <= 23 && le <= 59 && ie < 60) return !0;
        let H = le - U * oe,
          E = ae - M * oe - (H < 0 ? 1 : 0);
        return (E === 23 || E === -1) && (H === 59 || H === -1) && ie < 61;
      };
    }
    function d(j, F) {
      if (!(j && F)) return;
      let B = new Date("2020-01-01T" + j).valueOf(),
        G = new Date("2020-01-01T" + F).valueOf();
      if (!(B && G)) return;
      return B - G;
    }
    function m(j, F) {
      if (!(j && F)) return;
      let B = u.exec(j),
        G = u.exec(F);
      if (!(B && G)) return;
      if (((j = B[1] + B[2] + B[3]), (F = G[1] + G[2] + G[3]), j > F)) return 1;
      if (j < F) return -1;
      return 0;
    }
    let _ = /t|\s/i;
    function P(j) {
      let F = l(j);
      return function (G) {
        let ae = G.split(_);
        return ae.length === 2 && n(ae[0]) && F(ae[1]);
      };
    }
    function z(j, F) {
      if (!(j && F)) return;
      let B = new Date(j).valueOf(),
        G = new Date(F).valueOf();
      if (!(B && G)) return;
      return B - G;
    }
    function y(j, F) {
      if (!(j && F)) return;
      let [B, G] = j.split(_),
        [ae, le] = F.split(_),
        ie = i(B, ae);
      if (ie === void 0) return;
      return ie || d(G, le);
    }
    let b = /\/|:/,
      f =
        /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function h(j) {
      return b.test(j) && f.test(j);
    }
    let g =
      /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function p(j) {
      return ((g.lastIndex = 0), g.test(j));
    }
    let w = -2147483648,
      C = 2147483647;
    function R(j) {
      return Number.isInteger(j) && j <= C && j >= w;
    }
    function S(j) {
      return Number.isInteger(j);
    }
    function q() {
      return !0;
    }
    let L = /[^\\]\\Z/;
    function x(j) {
      if (L.test(j)) return !1;
      try {
        return (new RegExp(j), !0);
      } catch (F) {
        return !1;
      }
    }
  }),
  pc = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.formatLimitDefinition = void 0));
    let t = Da(),
      r = te(),
      a = r.operators,
      o = {
        formatMaximum: { okStr: "<=", ok: a.LTE, fail: a.GT },
        formatMinimum: { okStr: ">=", ok: a.GTE, fail: a.LT },
        formatExclusiveMaximum: { okStr: "<", ok: a.LT, fail: a.GTE },
        formatExclusiveMinimum: { okStr: ">", ok: a.GT, fail: a.LTE },
      },
      n = {
        message: ({ keyword: u, schemaCode: l }) =>
          r.str`should be ${o[u].okStr} ${l}`,
        params: ({ keyword: u, schemaCode: l }) =>
          r._`{comparison: ${o[u].okStr}, limit: ${l}}`,
      };
    e.formatLimitDefinition = {
      keyword: Object.keys(o),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: n,
      code(u) {
        let { gen: l, data: d, schemaCode: m, keyword: _, it: P } = u,
          { opts: z, self: y } = P;
        if (!z.validateFormats) return;
        let b = new t.KeywordCxt(P, y.RULES.all.format.definition, "format");
        if (b.$data) f();
        else h();
        function f() {
          let p = l.scopeValue("formats", {
              ref: y.formats,
              code: z.code.formats,
            }),
            w = l.const("fmt", r._`${p}[${b.schemaCode}]`);
          u.fail$data(
            (0, r.or)(
              r._`typeof ${w} != "object"`,
              r._`${w} instanceof RegExp`,
              r._`typeof ${w}.compare != "function"`,
              g(w),
            ),
          );
        }
        function h() {
          let p = b.schema,
            w = y.formats[p];
          if (!w || w === !0) return;
          if (
            typeof w != "object" ||
            w instanceof RegExp ||
            typeof w.compare != "function"
          )
            throw Error(
              `"${_}": format "${p}" does not define "compare" function`,
            );
          let C = l.scopeValue("formats", {
            key: p,
            ref: w,
            code: z.code.formats
              ? r._`${z.code.formats}${(0, r.getProperty)(p)}`
              : void 0,
          });
          u.fail$data(g(C));
        }
        function g(p) {
          return r._`${p}.compare(${d}, ${m}) ${o[_].fail} 0`;
        }
      },
      dependencies: ["format"],
    };
    let i = (u) => (u.addKeyword(e.formatLimitDefinition), u);
    e.default = i;
  }),
  Sc = K((e, t) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let r = fc(),
      a = pc(),
      o = te(),
      n = new o.Name("fullFormats"),
      i = new o.Name("fastFormats"),
      u = (d, m = { keywords: !0 }) => {
        if (Array.isArray(m)) return (l(d, m, r.fullFormats, n), d);
        let [_, P] =
          m.mode === "fast" ? [r.fastFormats, i] : [r.fullFormats, n];
        if ((l(d, m.formats || r.formatNames, _, P), m.keywords))
          (0, a.default)(d);
        return d;
      };
    u.get = (d, m = "full") => {
      let _ = (m === "fast" ? r.fastFormats : r.fullFormats)[d];
      if (!_) throw Error(`Unknown format "${d}"`);
      return _;
    };
    function l(d, m, _, P) {
      var z, y;
      ((z = (y = d.opts.code).formats) !== null && z !== void 0) ||
        (y.formats = o._`require("ajv-formats/dist/formats").${P}`);
      for (let b of m) d.addFormat(b, _[b]);
    }
    ((t.exports = e = u),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = u));
  }),
  gc = Da(),
  _c = mc(),
  vc = Sr(Sc(), 1),
  yc = new Set([
    "https://json-schema.org/draft/2020-12/schema",
    "http://json-schema.org/draft/2020-12/schema",
  ]),
  bc = vc.default;
function Rc() {
  let e = new _c.Ajv2020({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0,
  });
  return (bc(e), e);
}
var AjvJsonSchemaValidator = class {
    _ajv;
    _userAjv;
    constructor(e) {
      ((this._userAjv = e !== void 0), (this._ajv = e));
    }
    get ajv() {
      return (this._ajv ??= Rc());
    }
    getValidator(e) {
      if (
        !this._userAjv &&
        "$schema" in e &&
        typeof e.$schema === "string" &&
        !yc.has(e.$schema.replace(/#$/, ""))
      ) {
        let a = e.$schema.slice(0, 200);
        throw Error(
          `JSON Schema declares an unsupported dialect ("$schema": "${a}"). The default validator supports JSON Schema 2020-12 only; pass a pre-configured Ajv instance to AjvJsonSchemaValidator(ajv) to validate other dialects.`,
        );
      }
      let t = this.ajv,
        r =
          "$id" in e && typeof e.$id === "string"
            ? (t.getSchema(e.$id) ?? t.compile(e))
            : t.compile(e);
      return (a) =>
        r(a)
          ? { valid: !0, data: a, errorMessage: void 0 }
          : { valid: !1, data: void 0, errorMessage: t.errorsText(r.errors) };
    }
  },
  xl = gc.Ajv;
var Ha = !1;
var Xt = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.OAuthClientFlowError",
      });
    }
    static [Symbol.hasInstance](e) {
      return Te(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function")
        throw TypeError(
          "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`",
        );
      return Te(this, e);
    }
    constructor(e) {
      super(e);
      ((this.name = new.target.name), et(this, new.target));
    }
  },
  IssuerMismatchError = class extends Xt {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.IssuerMismatchError",
      });
    }
    kind;
    expected;
    received;
    constructor(e, t, r) {
      super(
        `Issuer mismatch in ${e === "metadata" ? "authorization server metadata (RFC 8414 \xA73.3)" : "authorization response (RFC 9207)"}: expected ${JSON.stringify(t)}, received ${JSON.stringify(r)}`,
      );
      ((this.kind = e), (this.expected = t), (this.received = r));
    }
  },
  RegistrationRejectedError = class extends Xt {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.RegistrationRejectedError",
      });
    }
    status;
    body;
    submittedMetadata;
    constructor(e) {
      super(
        `Dynamic Client Registration rejected (HTTP ${e.status}): ${e.body}`,
      );
      ((this.status = e.status),
        (this.body = e.body),
        (this.submittedMetadata = e.submittedMetadata));
    }
  },
  oo = class extends Xt {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.InsecureTokenEndpointError",
      });
    }
    tokenEndpoint;
    constructor(e) {
      super(
        `Refusing to send credentials to non-https token endpoint '${e}'. OAuth token requests MUST use TLS (localhost / 127.0.0.1 / ::1 are exempt).`,
      );
      this.tokenEndpoint = e;
    }
  },
  ls = class extends Xt {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.AuthorizationServerMismatchError",
      });
    }
    constructor(e, t) {
      super(
        `Authorization server changed between redirect and callback (redirected to ${JSON.stringify(e)}, callback resolved ${JSON.stringify(t)}); refusing to send authorization_code/code_verifier to a different token endpoint`,
      );
      ((this.recordedIssuer = e), (this.currentIssuer = t));
    }
  },
  xa = class extends Xt {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.InsufficientScopeError",
      });
    }
    requiredScope;
    resourceMetadataUrl;
    errorDescription;
    constructor(e) {
      super(
        `Insufficient scope${e.requiredScope ? `: required "${e.requiredScope}"` : ""}`,
      );
      ((this.requiredScope = e.requiredScope),
        (this.resourceMetadataUrl = e.resourceMetadataUrl),
        (this.errorDescription = e.errorDescription));
    }
  };
function Ka(e, t, r) {
  if (e === void 0) return;
  if (e.issuer === void 0) {
    if (r?.canPersistStamp !== !1)
      console.warn(
        "[mcp-sdk] SEP-2352: stored OAuth credential has no 'issuer' stamp (pre-upgrade storage or provider not round-tripping the value). SEP-2352 isolation is inactive for this read; ensure your provider round-trips the issuer field.",
      );
    return e;
  }
  return no(e.issuer, t) ? e : void 0;
}
function no(e, t) {
  return (
    e === t ||
    (e.endsWith("/") && e.slice(0, -1) === t) ||
    (t.endsWith("/") && t.slice(0, -1) === e)
  );
}
function io(e) {
  if (e == null) return !1;
  let t = e;
  return (
    typeof t.tokens === "function" && typeof t.clientInformation === "function"
  );
}
async function wc(e, t, r) {
  let { resourceMetadataUrl: a, scope: o } = tt(t.response);
  if (
    (await auth(e, {
      serverUrl: t.serverUrl,
      resourceMetadataUrl: a,
      scope: o,
      fetchFn: t.fetchFn,
      ...r,
    })) !== "AUTHORIZED"
  )
    throw new UnauthorizedError();
}
function co(e, t) {
  return {
    token: async () => (await e.tokens())?.access_token,
    onUnauthorized: async (r) => wc(e, r, t),
  };
}
var UnauthorizedError = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.UnauthorizedError" });
  }
  static [Symbol.hasInstance](e) {
    return Te(this, e);
  }
  static isInstance(e) {
    if (typeof this !== "function")
      throw TypeError(
        "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`",
      );
    return Te(this, e);
  }
  constructor(e) {
    super(e ?? "Unauthorized");
    ((this.name = "UnauthorizedError"), et(this, new.target));
  }
};
function Ar(e) {
  return e?.authorization_response_iss_parameter_supported === !0;
}
function Lr({ iss: e, expectedIssuer: t, issParameterSupported: r }) {
  if (t === void 0) return;
  if (e === void 0) {
    if (r) throw new IssuerMismatchError("authorization_response", t, void 0);
    return;
  }
  if (e !== t) throw new IssuerMismatchError("authorization_response", t, e);
}
function us(...e) {
  let t = new Set();
  for (let r of e) {
    if (!r) continue;
    for (let a of r.split(/\s+/)) if (a) t.add(a);
  }
  return t.size > 0 ? [...t].join(" ") : void 0;
}
function $c(e, t) {
  if (!e) return !1;
  let r = new Set((t ?? "").split(/\s+/).filter(Boolean));
  for (let a of e.split(/\s+/)) if (a && !r.has(a)) return !0;
  return !1;
}
async function lo(e, t, r, a, o) {
  if (typeof e === "string") return { authorizationCode: e, iss: t };
  let n = e.get("iss") ?? void 0,
    i = e.get("code");
  if (i) return { authorizationCode: i, iss: n };
  let u = (await r.discoveryState?.())?.authorizationServerMetadata;
  if (!u)
    try {
      u = (await discoverOAuthServerInfo(a, o)).authorizationServerMetadata;
    } catch {
      u = void 0;
    }
  if (!u)
    throw new UnauthorizedError(
      "Authorization callback failed and the issuer could not be verified",
    );
  Lr({ iss: n, expectedIssuer: u.issuer, issParameterSupported: Ar(u) });
  let l = e.get("error");
  if (l)
    throw new OAuthError(
      l,
      e.get("error_description") ?? l,
      e.get("error_uri") ?? void 0,
    );
  throw new UnauthorizedError("Authorization callback contained neither `code` nor `error`");
}
function Ec(e) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(e);
}
var ds = "code",
  hs = "S256";
function Pc(e, t) {
  let r = e.client_secret !== void 0;
  if (
    "token_endpoint_auth_method" in e &&
    e.token_endpoint_auth_method &&
    Ec(e.token_endpoint_auth_method) &&
    (t.length === 0 || t.includes(e.token_endpoint_auth_method))
  )
    return e.token_endpoint_auth_method;
  if (t.length === 0) return r ? "client_secret_basic" : "none";
  if (r && t.includes("client_secret_basic")) return "client_secret_basic";
  if (r && t.includes("client_secret_post")) return "client_secret_post";
  if (t.includes("none")) return "none";
  return r ? "client_secret_post" : "none";
}
function Tc(e, t, r, a) {
  let { client_id: o, client_secret: n } = t;
  switch (e) {
    case "client_secret_basic":
      zc(o, n, r);
      return;
    case "client_secret_post":
      Cc(o, n, a);
      return;
    case "none":
      kc(o, a);
      return;
    default:
      throw Error(`Unsupported client authentication method: ${e}`);
  }
}
function zc(e, t, r) {
  if (!t)
    throw Error("client_secret_basic authentication requires a client_secret");
  let a = btoa(`${e}:${t}`);
  r.set("Authorization", `Basic ${a}`);
}
function Cc(e, t, r) {
  if ((r.set("client_id", e), t)) r.set("client_secret", t);
}
function kc(e, t) {
  t.set("client_id", e);
}
function uo(e) {
  return e === "localhost" || e === "127.0.0.1" || e === "[::1]" || e === "::1";
}
function qc(e) {
  let t = new URL(String(e));
  if (t.protocol !== "https:" && !uo(t.hostname)) throw new oo(t.href);
  return t;
}
function Ic(e) {
  for (let t of e ?? []) {
    let r;
    try {
      r = new URL(t);
    } catch {
      continue;
    }
    if (r.protocol !== "http:" && r.protocol !== "https:") return "native";
    if (uo(r.hostname)) return "native";
  }
  return "web";
}
function Oc(e) {
  let t = e.clientMetadata;
  return {
    ...t,
    grant_types:
      t.grant_types ??
      (e.redirectUrl === void 0
        ? void 0
        : ["authorization_code", "refresh_token"]),
    application_type: t.application_type ?? Ic(t.redirect_uris),
  };
}
async function Ja(e) {
  let t = e instanceof Response ? e.status : void 0,
    r = e instanceof Response ? await e.text() : e;
  try {
    let a = jSe.parse(JSON.parse(r));
    return OAuthError.fromResponse(a);
  } catch (a) {
    let o = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${a}. Raw body: ${r}`;
    return new OAuthError(OAuthErrorCode.ServerError, o);
  }
}
async function auth(e, t) {
  try {
    return await ms(e, t);
  } catch (r) {
    if (r instanceof OAuthError) {
      if (r.code === OAuthErrorCode.InvalidClient || r.code === OAuthErrorCode.UnauthorizedClient)
        return (
          await e.invalidateCredentials?.("client"),
          await e.invalidateCredentials?.("tokens"),
          await ms(e, t)
        );
      else if (r.code === OAuthErrorCode.InvalidGrant)
        return (await e.invalidateCredentials?.("tokens"), await ms(e, t));
    }
    throw r;
  }
}
function Nc(e) {
  let {
      requestedScope: t,
      resourceMetadata: r,
      authServerMetadata: a,
      clientMetadata: o,
    } = e,
    n = t || r?.scopes_supported?.join(" ") || o.scope;
  if (
    n &&
    a?.scopes_supported?.includes("offline_access") &&
    !n.split(" ").includes("offline_access") &&
    o.grant_types?.includes("refresh_token")
  )
    n = `${n} offline_access`;
  return n;
}
async function ms(
  e,
  {
    serverUrl: t,
    authorizationCode: r,
    iss: a,
    scope: o,
    resourceMetadataUrl: n,
    fetchFn: i,
    skipIssuerMetadataValidation: u,
    forceReauthorization: l,
  },
) {
  let d = Oc(e),
    m = await e.discoveryState?.(),
    _,
    P,
    z,
    y,
    b = n;
  if (!b && m?.resourceMetadataUrl) b = new URL(m.resourceMetadataUrl);
  if (m?.authorizationServerUrl) {
    if (
      ((P = m.authorizationServerUrl),
      (_ = m.resourceMetadata),
      (z =
        m.authorizationServerMetadata ??
        (await discoverAuthorizationServerMetadata(P, { fetchFn: i, skipIssuerValidation: u }))),
      !_)
    )
      try {
        _ = await discoverOAuthProtectedResourceMetadata(t, { resourceMetadataUrl: b }, i);
      } catch (j) {
        if (j instanceof TypeError) throw j;
      }
    if (z !== m.authorizationServerMetadata || _ !== m.resourceMetadata)
      await e.saveDiscoveryState?.({
        authorizationServerUrl: String(P),
        resourceMetadataUrl: b?.toString(),
        resourceMetadata: _,
        authorizationServerMetadata: z,
      });
  } else {
    let j = await discoverOAuthServerInfo(t, {
      resourceMetadataUrl: b,
      fetchFn: i,
      skipIssuerMetadataValidation: u,
    });
    ((P = j.authorizationServerUrl),
      (z = j.authorizationServerMetadata),
      (_ = j.resourceMetadata),
      (y = {
        authorizationServerUrl: String(P),
        resourceMetadataUrl: b?.toString(),
        resourceMetadata: _,
        authorizationServerMetadata: z,
      }));
  }
  let f = z?.issuer ?? String(P),
    h = { issuer: f };
  if ((await e.saveAuthorizationServerUrl?.(f), r !== void 0)) {
    let j = m?.authorizationServerMetadata?.issuer ?? m?.authorizationServerUrl;
    if (j === void 0) {
      if (e.saveDiscoveryState !== void 0)
        throw new ls(
          "discoveryState was not available on the callback leg; ensure your provider persists discoveryState alongside codeVerifier",
          f,
        );
      console.warn(
        "[mcp-sdk] OAuthClientProvider does not implement saveDiscoveryState()/discoveryState(); the SEP-2352 callback-leg authorization-server binding cannot be checked. Implement discoveryState (persist alongside codeVerifier) \u2014 see docs/migration/upgrade-to-v2.md \xA7SEP-2352.",
      );
    } else if (!no(j, f)) throw new ls(j, f);
  }
  if (y) await e.saveDiscoveryState?.(y);
  let g = await jc(t, e, _);
  if (g) await e.saveResourceUrl?.(String(g));
  let p = Nc({
      requestedScope: o,
      resourceMetadata: _,
      authServerMetadata: z,
      clientMetadata: e.clientMetadata,
    }),
    w = await Promise.resolve(e.clientInformation(h)),
    C = Ka(w, f, { canPersistStamp: e.saveClientInformation !== void 0 });
  if (C === void 0 && w?.issuer && e.saveClientInformation === void 0)
    throw new ls(w.issuer, f);
  if (C && C.issuer === void 0)
    ((C = { ...C, issuer: f }), await e.saveClientInformation?.(C, h));
  if (!C) {
    if (r !== void 0)
      throw Error(
        "Existing OAuth client information is required when exchanging an authorization code",
      );
    let j = z?.client_id_metadata_document_supported === !0,
      F = e.clientMetadataUrl;
    if (F && !Mc(F))
      throw new OAuthError(
        OAuthErrorCode.InvalidClientMetadata,
        `clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${F}`,
      );
    if (j && F)
      ((C = { client_id: F, issuer: f }),
        await e.saveClientInformation?.(C, h));
    else {
      if (!e.saveClientInformation)
        throw Error(
          "OAuth client information must be saveable for dynamic registration",
        );
      ((C = {
        ...(await Fc(P, {
          metadata: z,
          clientMetadata: d,
          scope: p,
          fetchFn: i,
        })),
        issuer: f,
      }),
        await e.saveClientInformation(C, h));
    }
  }
  let R = !e.redirectUrl;
  if (r !== void 0 || R) {
    if (r !== void 0)
      Lr({ iss: a, expectedIssuer: z?.issuer, issParameterSupported: Ar(z) });
    let j = await Vc(e, P, {
      metadata: z,
      resource: g,
      authorizationCode: r,
      iss: a,
      scope: p,
      fetchFn: i,
    });
    return (await e.saveTokens({ ...j, issuer: f }, h), "AUTHORIZED");
  }
  let S = Ka(await e.tokens(h), f);
  if (S && S.issuer === void 0)
    ((S = { ...S, issuer: f }), await e.saveTokens(S, h));
  if (S?.refresh_token && !l)
    try {
      let j = await refreshAuthorization(P, {
        metadata: z,
        clientInformation: C,
        refreshToken: S.refresh_token,
        resource: g,
        addClientAuthentication: e.addClientAuthentication,
        fetchFn: i,
      });
      return (await e.saveTokens({ ...j, issuer: f }, h), "AUTHORIZED");
    } catch (j) {
      if (j instanceof oo) throw j;
      if (!(j instanceof OAuthError) || j.code === OAuthErrorCode.ServerError);
      else throw j;
    }
  let q = e.state ? await e.state() : void 0,
    { authorizationUrl: L, codeVerifier: x } = await startAuthorization(P, {
      metadata: z,
      clientInformation: C,
      state: q,
      redirectUrl: e.redirectUrl,
      scope: p,
      resource: g,
    });
  return (
    await e.saveCodeVerifier(x),
    await e.redirectToAuthorization(L),
    "REDIRECT"
  );
}
function Mc(e) {
  if (!e) return !1;
  try {
    let t = new URL(e);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return !1;
  }
}
async function jc(e, t, r) {
  let a = Vs(e);
  if (t.validateResourceURL) return await t.validateResourceURL(a, r?.resource);
  if (!r) return;
  if (!Fs({ requestedResource: a, configuredResource: r.resource }))
    throw Error(
      `Protected resource ${r.resource} does not match expected ${a} (or origin)`,
    );
  return new URL(r.resource);
}
function tt(e) {
  let t = e.headers.get("WWW-Authenticate");
  if (!t) return {};
  let [r, a] = t.split(" ");
  if (r?.toLowerCase() !== "bearer" || !a) return {};
  let o = Nr(e, "resource_metadata") || void 0,
    n;
  if (o)
    try {
      n = new URL(o);
    } catch {}
  let i = Nr(e, "scope") || void 0,
    u = Nr(e, "error") || void 0,
    l = Nr(e, "error_description") || void 0;
  return { resourceMetadataUrl: n, scope: i, error: u, errorDescription: l };
}
function Nr(e, t) {
  let r = e.headers.get("WWW-Authenticate");
  if (!r) return null;
  let a = new RegExp(String.raw`${t}=(?:"([^"]+)"|([^\s,]+))`),
    o = r.match(a);
  if (o) {
    let n = o[1] || o[2];
    if (n) return n;
  }
  return null;
}
async function discoverOAuthProtectedResourceMetadata(e, t, r = fetch) {
  let a = await Uc(e, "oauth-protected-resource", r, {
    protocolVersion: t?.protocolVersion,
    metadataUrl: t?.resourceMetadataUrl,
  });
  if (!a || a.status === 404)
    throw (
      await a?.text?.().catch(() => {}),
      Error(
        "Resource server does not implement OAuth 2.0 Protected Resource Metadata.",
      )
    );
  if (!a.ok)
    throw (
      await a.text?.().catch(() => {}),
      Error(
        `HTTP ${a.status} trying to load well-known OAuth protected resource metadata.`,
      )
    );
  return uut.parse(await a.json());
}
async function ho(e, t, r = fetch) {
  try {
    return await r(e, { headers: t });
  } catch (a) {
    if (!(a instanceof TypeError) || !Ha) throw a;
    if (t)
      try {
        return await r(e, {});
      } catch (o) {
        if (!(o instanceof TypeError)) throw o;
        return;
      }
    return;
  }
}
function Ac(e, t = "", r = {}) {
  if (t.endsWith("/")) t = t.slice(0, -1);
  return r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
}
async function Ga(e, t, r = fetch) {
  return await ho(e, { "MCP-Protocol-Version": t }, r);
}
function Lc(e, t) {
  if (!e) return !0;
  if (t === "/") return !1;
  return (e.status >= 400 && e.status < 500) || e.status === 502;
}
async function Uc(e, t, r, a) {
  let o = new URL(e),
    n = a?.protocolVersion ?? rGe,
    i;
  if (a?.metadataUrl) i = new URL(a.metadataUrl);
  else {
    let l = Ac(t, o.pathname);
    ((i = new URL(l, a?.metadataServerUrl ?? o)), (i.search = o.search));
  }
  let u = await Ga(i, n, r);
  if (!a?.metadataUrl && Lc(u, o.pathname))
    u = await Ga(new URL(`/.well-known/${t}`, o), n, r);
  return u;
}
function Dc(e) {
  let t = typeof e === "string" ? new URL(e) : e,
    r = t.pathname !== "/",
    a = [];
  if (!r)
    return (
      a.push(
        {
          url: new URL("/.well-known/oauth-authorization-server", t.origin),
          type: "oauth",
        },
        {
          url: new URL("/.well-known/openid-configuration", t.origin),
          type: "oidc",
        },
      ),
      a
    );
  let o = t.pathname;
  if (o.endsWith("/")) o = o.slice(0, -1);
  return (
    a.push(
      {
        url: new URL(`/.well-known/oauth-authorization-server${o}`, t.origin),
        type: "oauth",
      },
      {
        url: new URL(`/.well-known/openid-configuration${o}`, t.origin),
        type: "oidc",
      },
      {
        url: new URL(`${o}/.well-known/openid-configuration`, t.origin),
        type: "oidc",
      },
    ),
    a
  );
}
async function discoverAuthorizationServerMetadata(
  e,
  {
    fetchFn: t = fetch,
    protocolVersion: r = rGe,
    skipIssuerValidation: a = !1,
  } = {},
) {
  let o = { "MCP-Protocol-Version": r, Accept: "application/json" },
    n = Dc(e);
  for (let { url: i, type: u } of n) {
    let l = await ho(i, o, t);
    if (!l) continue;
    if (!l.ok) {
      if (
        (await l.text?.().catch(() => {}),
        (l.status >= 400 && l.status < 500) || l.status === 502)
      )
        continue;
      throw Error(
        `HTTP ${l.status} trying to load ${u === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${i}`,
      );
    }
    let d =
      u === "oauth" ? gce.parse(await l.json()) : USe.parse(await l.json());
    if (!a) {
      let m = typeof e === "string" ? e : e.href;
      if (!(d.issuer === m || (m.endsWith("/") && d.issuer === m.slice(0, -1))))
        throw new IssuerMismatchError("metadata", m, d.issuer);
    }
    return d;
  }
}
async function discoverOAuthServerInfo(e, t) {
  let r, a;
  try {
    if (
      ((r = await discoverOAuthProtectedResourceMetadata(
        e,
        { resourceMetadataUrl: t?.resourceMetadataUrl },
        t?.fetchFn,
      )),
      r.authorization_servers && r.authorization_servers.length > 0)
    )
      a = r.authorization_servers[0];
  } catch (n) {
    if (n instanceof TypeError) throw n;
  }
  if (!a) a = String(new URL("/", e));
  let o = await discoverAuthorizationServerMetadata(a, {
    fetchFn: t?.fetchFn,
    skipIssuerValidation: t?.skipIssuerMetadataValidation,
  });
  return {
    authorizationServerUrl: a,
    authorizationServerMetadata: o,
    resourceMetadata: r,
  };
}
async function startAuthorization(
  e,
  {
    metadata: t,
    clientInformation: r,
    redirectUrl: a,
    scope: o,
    state: n,
    resource: i,
  },
) {
  let u;
  if (t) {
    if (
      ((u = new URL(t.authorization_endpoint)),
      !t.response_types_supported.includes(ds))
    )
      throw Error(
        `Incompatible auth server: does not support response type ${ds}`,
      );
    if (
      t.code_challenge_methods_supported &&
      !t.code_challenge_methods_supported.includes(hs)
    )
      throw Error(
        `Incompatible auth server: does not support code challenge method ${hs}`,
      );
  } else u = new URL("/authorize", e);
  let l = await generatePkceChallenge(),
    { code_verifier: d, code_challenge: m } = l;
  if (
    (u.searchParams.set("response_type", ds),
    u.searchParams.set("client_id", r.client_id),
    u.searchParams.set("code_challenge", m),
    u.searchParams.set("code_challenge_method", hs),
    u.searchParams.set("redirect_uri", String(a)),
    n)
  )
    u.searchParams.set("state", n);
  if (o) u.searchParams.set("scope", o);
  if (o?.split(" ").includes("offline_access"))
    u.searchParams.append("prompt", "consent");
  if (i) u.searchParams.set("resource", i.href);
  return { authorizationUrl: u, codeVerifier: d };
}
function mo(e, t, r) {
  return new URLSearchParams({
    grant_type: "authorization_code",
    code: e,
    code_verifier: t,
    redirect_uri: String(r),
  });
}
async function gs(
  e,
  {
    metadata: t,
    tokenRequestParams: r,
    clientInformation: a,
    addClientAuthentication: o,
    resource: n,
    fetchFn: i,
  },
) {
  let u = qc(t?.token_endpoint ?? new URL("/token", e)),
    l = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    });
  if (n) r.set("resource", n.href);
  if (o) await o(l, r, u, t);
  else if (a)
    Tc(Pc(a, t?.token_endpoint_auth_methods_supported ?? []), a, l, r);
  let d = await (i ?? fetch)(u, { method: "POST", headers: l, body: r });
  if (!d.ok) throw await Ja(d);
  let m = await d.json();
  try {
    return BSe.parse(m);
  } catch (_) {
    if (typeof m === "object" && m !== null && "error" in m)
      throw await Ja(JSON.stringify(m));
    throw _;
  }
}
async function exchangeAuthorization(
  e,
  {
    metadata: t,
    clientInformation: r,
    authorizationCode: a,
    iss: o,
    codeVerifier: n,
    redirectUri: i,
    resource: u,
    addClientAuthentication: l,
    fetchFn: d,
  },
) {
  return (
    Lr({ iss: o, expectedIssuer: t?.issuer, issParameterSupported: Ar(t) }),
    gs(e, {
      metadata: t,
      tokenRequestParams: mo(a, n, i),
      clientInformation: r,
      addClientAuthentication: l,
      resource: u,
      fetchFn: d,
    })
  );
}
async function refreshAuthorization(
  e,
  {
    metadata: t,
    clientInformation: r,
    refreshToken: a,
    resource: o,
    addClientAuthentication: n,
    fetchFn: i,
  },
) {
  return {
    refresh_token: a,
    ...(await gs(e, {
      metadata: t,
      tokenRequestParams: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: a,
      }),
      clientInformation: r,
      addClientAuthentication: n,
      resource: o,
      fetchFn: i,
    })),
  };
}
async function Vc(
  e,
  t,
  {
    metadata: r,
    resource: a,
    authorizationCode: o,
    iss: n,
    scope: i,
    fetchFn: u,
  } = {},
) {
  if (o !== void 0)
    Lr({ iss: n, expectedIssuer: r?.issuer, issParameterSupported: Ar(r) });
  let l = i ?? e.clientMetadata.scope,
    d;
  if (e.prepareTokenRequest) d = await e.prepareTokenRequest(l);
  if (!d) {
    if (!o)
      throw Error(
        "Either provider.prepareTokenRequest() or authorizationCode is required",
      );
    if (!e.redirectUrl)
      throw Error("redirectUrl is required for authorization_code flow");
    d = mo(o, await e.codeVerifier(), e.redirectUrl);
  }
  let m = await e.clientInformation({ issuer: r?.issuer ?? String(t) });
  return gs(t, {
    metadata: r,
    tokenRequestParams: d,
    clientInformation: m ?? void 0,
    addClientAuthentication: e.addClientAuthentication,
    resource: a,
    fetchFn: u,
  });
}
async function Fc(e, { metadata: t, clientMetadata: r, scope: a, fetchFn: o }) {
  let n;
  if (t) {
    if (!t.registration_endpoint)
      throw Error(
        "Incompatible auth server: does not support dynamic client registration",
      );
    n = new URL(t.registration_endpoint);
  } else n = new URL("/register", e);
  let i = { ...r, ...(a === void 0 ? {} : { scope: a }) },
    u = await (o ?? fetch)(n, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(i),
    });
  if (!u.ok)
    throw new RegistrationRejectedError({
      status: u.status,
      body: await u.text(),
      submittedMetadata: i,
    });
  return dut.parse(await u.json());
}
var Mr = new Set([
    "tools/list",
    "prompts/list",
    "resources/list",
    "resources/templates/list",
    "server/discover",
  ]),
  Hc = class {
    _entries = new Map();
    _maxEntries;
    _stamp = 0;
    _cappedSize = 0;
    constructor(e) {
      this._maxEntries = e?.maxEntries ?? 512;
    }
    get size() {
      return this._entries.size;
    }
    get(e) {
      return this._entries.get(fs(e));
    }
    set(e, t) {
      let r = fs(e),
        a = Mr.has(e.method),
        o = !this._entries.has(r);
      if (
        !a &&
        o &&
        this._maxEntries > 0 &&
        this._cappedSize >= this._maxEntries
      ) {
        for (let i of this._entries.keys())
          if (!Mr.has(i.slice(0, i.indexOf("\x00")))) {
            (this._entries.delete(i), this._cappedSize--);
            break;
          }
      }
      let n = ++this._stamp;
      if ((this._entries.set(r, { ...t, stamp: n }), o && !a))
        this._cappedSize++;
      return n;
    }
    delete(e) {
      if (this._entries.delete(fs(e)) && !Mr.has(e.method)) this._cappedSize--;
    }
    evict(e) {
      let t = `${e}\x00`,
        r = Mr.has(e);
      for (let a of this._entries.keys())
        if (a.startsWith(t)) {
          if ((this._entries.delete(a), !r)) this._cappedSize--;
        }
    }
    clear() {
      (this._entries.clear(), (this._cappedSize = 0));
    }
  };
function fs(e) {
  return `${e.method}\x00${JSON.stringify([e.partition ?? "", e.params ?? ""])}`;
}
function ps(e, t) {
  return t === void 0 ? e : `${e}\x00${t}`;
}
var xc = 86400000,
  Kc = class {
    _evictionGeneration = new Map();
    _toolIndex;
    _toolOutputValidatorIndex;
    _serverIdentity = "";
    constructor(e, t, r = () => {}, a = "", o = Date.now) {
      ((this._store = e),
        (this._isUserSupplied = t),
        (this._reportError = r),
        (this._cachePartition = a),
        (this._now = o));
    }
    now() {
      return this._now();
    }
    setServerIdentity(e) {
      this._serverIdentity = e;
    }
    _partitionFor(e) {
      return JSON.stringify([
        this._serverIdentity,
        e === "public" ? "" : this._cachePartition,
      ]);
    }
    async _probe(e, t) {
      let r = { method: e, params: t ?? "" },
        a = this._partitionFor("private"),
        o = await this._store.get({ ...r, partition: a });
      if (o !== void 0) return o;
      let n = this._partitionFor("public");
      if (n === a) return;
      let i = await this._store.get({ ...r, partition: n });
      return i?.scope === "public" ? i : void 0;
    }
    async evict(e) {
      (this._evictionGeneration.set(
        e,
        (this._evictionGeneration.get(e) ?? 0) + 1,
      ),
        await this._deleteBoth(e, ""));
    }
    async _deleteBoth(e, t) {
      let r = this._partitionFor("private"),
        a = this._partitionFor("public");
      try {
        await this._store.delete({ method: e, params: t, partition: r });
      } catch (o) {
        this._reportError(o);
      }
      if (a !== r)
        try {
          await this._store.delete({ method: e, params: t, partition: a });
        } catch (o) {
          this._reportError(o);
        }
    }
    async evictKey(e, t) {
      let r = ps(e, t),
        a = this._evictionGeneration.get(r);
      if (a !== void 0) this._evictionGeneration.set(r, a + 1);
      await this._deleteBoth(e, t);
    }
    captureGeneration(e, t) {
      let r = ps(e, t),
        a = this._evictionGeneration.get(r) ?? 0;
      return (this._evictionGeneration.set(r, a), a);
    }
    async write(e, t, r, a) {
      if ((this._evictionGeneration.get(ps(e, a?.params)) ?? 0) !== r) return;
      let o = a?.params ?? "",
        n = this._partitionFor("private"),
        i = this._partitionFor("public"),
        u = (a?.scope ?? "private") === "public" ? i : n;
      try {
        await this._store.set(
          { method: e, params: o, partition: u },
          { value: Jc(t), expiresAt: a?.expiresAt, scope: a?.scope },
        );
      } catch (l) {
        this._reportError(l);
      }
      if (i !== n)
        try {
          await this._store.delete({
            method: e,
            params: o,
            partition: u === n ? i : n,
          });
        } catch (l) {
          this._reportError(l);
        }
    }
    async read(e, t) {
      let r = await this._probe(e, t);
      if (r?.expiresAt === void 0 || !(r.expiresAt > this.now())) return;
      try {
        let a = JSON.parse(r.value);
        if (typeof a !== "object" || a === null || Array.isArray(a))
          throw TypeError("cached document is not an object");
        return { value: a };
      } catch (a) {
        (this._reportError(a), await this._deleteBoth(e, t ?? ""));
        return;
      }
    }
    resetForReconnect() {
      if (!this._isUserSupplied) this._store.clear();
      (this._evictionGeneration.clear(),
        (this._toolIndex = void 0),
        (this._toolOutputValidatorIndex = void 0),
        (this._serverIdentity = ""));
    }
    async toolDefinition(e) {
      let t = await this._probe("tools/list");
      if (t === void 0) {
        this._toolIndex = void 0;
        return;
      }
      if (this._toolIndex?.stamp !== t.stamp) {
        let r = this._decodeListTools(t),
          a = new Map();
        if (r !== void 0) for (let o of r.tools) a.set(o.name, o);
        this._toolIndex = { stamp: t.stamp, byName: a };
      }
      return this._toolIndex.byName.get(e);
    }
    async outputValidator(e, t) {
      let r = await this._probe("tools/list");
      if (r === void 0) {
        this._toolOutputValidatorIndex = void 0;
        return;
      }
      if (this._toolOutputValidatorIndex?.stamp !== r.stamp) {
        let a = this._decodeListTools(r) ?? { tools: [] },
          o = new Map();
        for (let n of a.tools) {
          let i = t(n);
          if (i !== void 0) o.set(n.name, i);
        }
        this._toolOutputValidatorIndex = { stamp: r.stamp, byName: o };
      }
      return this._toolOutputValidatorIndex.byName.get(e);
    }
    _decodeListTools(e) {
      try {
        let t = JSON.parse(e.value);
        if (
          !Array.isArray(t?.tools) ||
          !t.tools.every((r) => r !== null && typeof r === "object")
        )
          throw TypeError(
            "cached tools/list document has a malformed tools array",
          );
        return t;
      } catch (t) {
        this._reportError(t);
        return;
      }
    }
  };
function Jc(e) {
  let t;
  try {
    t = JSON.stringify(e);
  } catch (r) {
    throw TypeError(
      `cache value is not JSON-serializable: ${r instanceof Error ? r.message : String(r)}`,
    );
  }
  if (typeof t !== "string")
    throw TypeError(
      "cache value is not JSON-serializable: it has no JSON representation",
    );
  return t;
}
var Gc = -32022,
  Bc = new Set([-32001, -32020, -32021]);
function Wc(e, t) {
  switch (e.kind) {
    case "result":
      return Yc(e.result, t);
    case "rpc-error":
      return fo(e, t);
    case "http-error":
      return Xc(e, t);
    case "network-error":
      return Ba(e.error, t);
    case "auth-required":
      return { kind: "error", error: e.error };
    case "closed":
      if (t.transportKind === "stdio") return { kind: "legacy" };
      return Ba(
        Error("Connection closed during the version negotiation probe"),
        t,
      );
    case "timeout":
      if (t.transportKind === "stdio") return { kind: "legacy" };
      return {
        kind: "error",
        error: new SdkError(
          ProtocolErrorCode.RequestTimeout,
          `Version negotiation probe timed out after ${e.timeoutMs}ms`,
          { timeout: e.timeoutMs },
        ),
      };
    case "id-mismatch":
    case "malformed":
    case "stream-end":
      return { kind: "legacy" };
  }
}
function Yc(e, t) {
  let r = je($r).validateResult("server/discover", e);
  if (!r.ok) return { kind: "legacy" };
  let a = r.value.supportedVersions,
    o = t.clientModernVersions.find((n) => a.includes(n));
  if (o !== void 0) return { kind: "modern", version: o, discover: r.value };
  if (t.fallbackAvailable) return { kind: "legacy" };
  return {
    kind: "error",
    error: new wr({ supported: [...a], requested: t.requestedVersion }),
  };
}
function fo(e, t) {
  let { code: r, message: a, data: o } = e;
  if (r === Gc) {
    let n = el(o);
    if (n === void 0) return { kind: "legacy" };
    let i = new wr({ supported: n, requested: tl(o) ?? t.requestedVersion }, a),
      u = Bt(n),
      l = t.clientModernVersions.find((d) => u.includes(d));
    if (l !== void 0) return { kind: "corrective", version: l, error: i };
    if (u.length > 0) return { kind: "error", error: i };
    return t.fallbackAvailable
      ? { kind: "legacy" }
      : { kind: "error", error: i };
  }
  if (Bc.has(r)) return { kind: "legacy" };
  return { kind: "legacy" };
}
function Xc(e, t) {
  let r = rl(e.body);
  if (r !== void 0) return fo(r, t);
  return { kind: "legacy" };
}
function Ba(e, t) {
  if (t.environment === "browser" && Zc(e)) return { kind: "legacy" };
  return {
    kind: "error",
    error: new SdkError(
      ProtocolErrorCode.EraNegotiationFailed,
      `Version negotiation probe failed: ${Qc(e)}`,
      { cause: e },
    ),
  };
}
function Zc(e) {
  return (
    e instanceof TypeError || (e instanceof Error && e.name === "TypeError")
  );
}
function Qc(e) {
  return e instanceof Error ? e.message : String(e);
}
function el(e) {
  if (typeof e !== "object" || e === null) return;
  let t = e.supported;
  if (
    !Array.isArray(t) ||
    t.length === 0 ||
    !t.every((r) => typeof r === "string")
  )
    return;
  return t;
}
function tl(e) {
  if (typeof e !== "object" || e === null) return;
  let t = e.requested;
  return typeof t === "string" ? t : void 0;
}
function rl(e) {
  if (e === void 0 || e === "") return;
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return;
  }
  if (typeof t !== "object" || t === null) return;
  let r = t.error;
  if (typeof r !== "object" || r === null) return;
  let { code: a, message: o, data: n } = r;
  if (typeof a !== "number") return;
  return { code: a, message: typeof o === "string" ? o : "", data: n };
}
var sl = "legacy";
function al(e, t) {
  let r = e?.mode ?? sl;
  if (r === "legacy") return { kind: "legacy" };
  let a = e?.probe ?? {};
  if (typeof r === "object") {
    if (!Ae(r.pin))
      throw TypeError(
        `versionNegotiation: { pin: '${r.pin}' } is not a modern protocol revision \u2014 pinning is for 2026-07-28 and later; omit versionNegotiation (or use mode: 'legacy') for 2025-era servers.`,
      );
    return { kind: "pin", version: r.pin, probe: a };
  }
  let o = t ? Bt(t) : [];
  return {
    kind: "auto",
    modernVersions: o.length > 0 ? o : [...Wr],
    fallbackAvailable: t ? Yr(t).length > 0 : !0,
    probe: a,
  };
}
function Wa() {
  let e = globalThis;
  return e.window !== void 0 && e.document !== void 0 ? "browser" : "node";
}
function Ya(e) {
  return "stderr" in e && "pid" in e ? "stdio" : "http";
}
var ol = class e {
    _pending;
    _probeCounter = 0;
    _transportKind;
    _issuedIds = new Set();
    _errorSinceSend;
    _savedOnMessage;
    _savedOnError;
    _savedOnClose;
    _closeDelivered = !1;
    constructor(t) {
      ((this._transport = t),
        (this._savedOnMessage = t.onmessage),
        (this._savedOnError = t.onerror),
        (this._savedOnClose = t.onclose));
    }
    static async open(t, r) {
      let a = new e(t);
      ((a._transportKind = r),
        (t.onmessage = (o) => {
          let n = a._pending;
          if (n !== void 0 && (isJSONRPCResultResponse(o) || isJSONRPCErrorResponse(o)) && o.id === n.id) {
            if (((a._pending = void 0), isJSONRPCResultResponse(o)))
              n.resolve({ kind: "response", result: o.result });
            else n.resolve({ kind: "response", error: o.error });
            return;
          }
          if (
            n !== void 0 &&
            a._transportKind === "http" &&
            (isJSONRPCResultResponse(o) || isJSONRPCErrorResponse(o)) &&
            !a._issuedIds.has(o.id)
          ) {
            a._pending = void 0;
            let i = Xa(JSON.stringify(o.id)),
              u = Error(
                `server/discover probe reply did not echo the request id (expected ${JSON.stringify(n.id)}, got ${i}) \u2014 treating the server as pre-2026-07-28`,
              );
            ((u.name = "McpProbeIdMismatchError"),
              a._savedOnError?.(u),
              n.resolve({ kind: "id-mismatch" }));
            return;
          }
        }),
        (t.onerror = (o) => {
          if (a._pending !== void 0 && a._errorSinceSend === void 0)
            a._errorSinceSend = o;
          let n = a._pending;
          if (n !== void 0 && a._transportKind === "http" && Za(o))
            setTimeout(() => {
              if (a._pending !== n) return;
              a._pending = void 0;
              let i = Error(
                `server/discover probe reply failed JSON-RPC message decoding (${Xa(o instanceof Error ? o.message : String(o))}) \u2014 treating the server as pre-2026-07-28`,
              );
              ((i.name = "McpProbeMalformedReplyError"),
                a._savedOnError?.(i),
                n.resolve({ kind: "malformed" }));
            }, 0);
          a._savedOnError?.(o);
        }),
        (t.onclose = () => {
          let o = a._pending;
          if (o !== void 0)
            ((a._pending = void 0), o.resolve({ kind: "closed" }));
          ((a._closeDelivered = !0), a._savedOnClose?.());
        }));
      try {
        await t.start();
      } catch (o) {
        throw (a.detach(), o);
      }
      return a;
    }
    async exchange(t, r) {
      let a = `server-discover-probe-${++this._probeCounter}`;
      return (
        this._issuedIds.add(a),
        (this._errorSinceSend = void 0),
        new Promise((o) => {
          let n = !1,
            i = (l) => {
              if (n) return;
              if (((n = !0), clearTimeout(u), this._pending?.id === a))
                this._pending = void 0;
              o(l);
            },
            u = setTimeout(() => i({ kind: "timeout" }), r);
          ((this._pending = { id: a, resolve: i }),
            this._transport
              .send(t(a), {
                onRequestStreamEnd: () => {
                  setTimeout(() => {
                    let l = this._errorSinceSend;
                    if (l !== void 0 && !Za(l)) {
                      i({
                        kind: "send-error",
                        error: l instanceof Error ? l : Error(String(l)),
                      });
                      return;
                    }
                    i({ kind: "stream-end" });
                  }, 0);
                },
              })
              .catch((l) => i({ kind: "send-error", error: l })));
        })
      );
    }
    detach() {
      if (
        ((this._pending = void 0),
        (this._transport.onmessage = this._savedOnMessage),
        (this._transport.onerror = this._savedOnError),
        this._closeDelivered && this._savedOnClose !== void 0)
      ) {
        let t = this._savedOnClose,
          r = this._transport,
          a = !1,
          o = () => {
            if (!a) {
              a = !0;
              return;
            }
            t();
          };
        ((r.onclose = o),
          Ss.set(r, () => {
            if (r.onclose === o) r.onclose = t;
          }));
      } else this._transport.onclose = this._savedOnClose;
    }
    release() {
      this.detach();
      let t = this._transport,
        r = t.start,
        a = !0;
      t.start = async function () {
        if (a) {
          ((a = !1), (t.start = r));
          return;
        }
        return r.call(t);
      };
    }
  },
  Ss = new WeakMap();
function Xa(e) {
  let t = String(e);
  if (t.length <= 200) return t;
  let r = (t.charCodeAt(199) & 64512) === 55296 ? 199 : 200;
  return `${t.slice(0, r)}\u2026 [truncated]`;
}
function Za(e) {
  if (e instanceof SyntaxError) return !0;
  return (
    typeof e === "object" &&
    e !== null &&
    (e.name === "ZodError" || Array.isArray(e.issues))
  );
}
function Qa(e) {
  let t = Ss.get(e);
  (Ss.delete(e), t?.());
}
function nl(e, t, r, a) {
  return {
    jsonrpc: "2.0",
    id: e,
    method: "server/discover",
    params: {
      _meta: je(t).outboundEnvelope({
        protocolVersion: t,
        clientInfo: r,
        clientCapabilities: a,
      }),
    },
  };
}
function il(e, t) {
  switch (e.kind) {
    case "response":
      return e.error === void 0
        ? { kind: "result", result: e.result }
        : { kind: "rpc-error", ...e.error };
    case "send-error": {
      let r = e.error;
      if (r instanceof SdkHttpError) {
        let a = r.data?.text;
        return {
          kind: "http-error",
          status: r.data.status,
          body: typeof a === "string" ? a : void 0,
        };
      }
      if (
        r instanceof UnauthorizedError ||
        (r instanceof Error && r.name === "UnauthorizedError")
      )
        return { kind: "auth-required", error: r };
      return { kind: "network-error", error: r };
    }
    case "closed":
      return { kind: "closed" };
    case "id-mismatch":
      return { kind: "id-mismatch" };
    case "malformed":
      return { kind: "malformed" };
    case "stream-end":
      return { kind: "stream-end" };
    case "timeout":
      return { kind: "timeout", timeoutMs: t };
  }
}
async function po(e, t) {
  let r = e.probe.timeoutMs ?? t.defaultTimeoutMs,
    a = Math.max(0, e.probe.maxRetries ?? 0),
    o = e.kind === "pin" ? [e.version] : e.modernVersions,
    n = e.kind === "auto" && e.fallbackAvailable,
    i = await ol.open(t.transport, t.transportKind),
    u = async () => {
      let d = o[0],
        m = !1,
        _ = a;
      for (;;) {
        let P = await i.exchange(
          (b) => nl(b, d, t.clientInfo, t.capabilities),
          r,
        );
        if (P.kind === "timeout" && _ > 0) {
          _--;
          continue;
        }
        let z = il(P, r);
        if (z.kind === "timeout") t.transport._anthropicProbeTimedOut = !0;
        let y = Wc(z, {
          clientModernVersions: o,
          requestedVersion: d,
          fallbackAvailable: n,
          environment: t.environment,
          transportKind: t.transportKind,
        });
        switch (y.kind) {
          case "modern":
            return { era: "modern", version: y.version, discover: y.discover };
          case "corrective":
            if (m) throw y.error;
            ((m = !0), (d = y.version));
            continue;
          case "legacy": {
            if (
              z.kind === "id-mismatch" ||
              z.kind === "malformed" ||
              z.kind === "stream-end"
            )
              t.transport._anthropicProbeLegacyEvidence = z.kind;
            let b =
              z.kind === "closed"
                ? "the connection closed during the server/discover probe"
                : void 0;
            if (e.kind === "pin")
              throw new SdkError(
                ProtocolErrorCode.EraNegotiationFailed,
                b === void 0
                  ? `Version negotiation failed: the server did not offer pinned protocol version ${e.version} via server/discover (no fallback in pin mode)`
                  : `Version negotiation failed: ${b} before the server offered pinned protocol version ${e.version} (no fallback in pin mode)`,
              );
            if (!e.fallbackAvailable)
              throw new SdkError(
                ProtocolErrorCode.EraNegotiationFailed,
                b === void 0
                  ? "Version negotiation failed: the server gave no modern evidence and this client supports no pre-2026-07-28 protocol version to fall back to"
                  : `Version negotiation failed: ${b} and this client supports no pre-2026-07-28 protocol version to fall back to`,
              );
            if (b !== void 0 && t.disposableProbe !== !0)
              throw new SdkError(
                ProtocolErrorCode.EraNegotiationFailed,
                `Version negotiation failed: ${b} (this transport probed in place \u2014 the disposable sibling probe requires the SDK's base StdioClientTransport)`,
              );
            return { era: "legacy" };
          }
          case "error":
            throw y.error;
        }
      }
    },
    l;
  try {
    l = await u();
  } catch (d) {
    throw (i.detach(), d);
  }
  return (i.release(), l);
}
function cl(e) {
  let t = Object.getPrototypeOf(e);
  if (t === null || !Object.prototype.hasOwnProperty.call(t, "_dispose"))
    return;
  let r = e._serverParams;
  return typeof r === "object" && r !== null && typeof r.command === "string"
    ? r
    : void 0;
}
async function ll(e, t, r, a) {
  let n = new t.constructor({ ...r, stderr: "ignore" }),
    i = t.close,
    u = !1,
    l,
    d = new Promise((_, P) => {
      l = () => P(eo());
    });
  t.close = async function () {
    return ((u = !0), l?.(), i.call(t));
  };
  let m;
  try {
    let _ = po(e, {
      ...a,
      transport: n,
      transportKind: "stdio",
      disposableProbe: !0,
    });
    (_.catch(() => {}), (m = await Promise.race([_, d])));
  } finally {
    (await ul(n), (t.close = i));
  }
  if (u) throw eo();
  return m;
}
function eo() {
  return new SdkError(
    ProtocolErrorCode.EraNegotiationFailed,
    "Version negotiation failed: the transport was closed during the server/discover probe",
  );
}
async function ul(e) {
  try {
    let t = e._dispose;
    await (typeof t === "function" ? t.call(e) : e.close());
  } catch {}
}
function to(e) {
  let t = e._meta?.[uce];
  return va.Implementation(t) ? t : void 0;
}
function jr(e, t) {
  if (!e || t === null || typeof t !== "object") return;
  if (e.type === "object" && e.properties && typeof e.properties === "object") {
    let r = t,
      a = e.properties;
    for (let o of Object.keys(a)) {
      let n = a[o];
      if (r[o] === void 0 && Object.prototype.hasOwnProperty.call(n, "default"))
        r[o] = n.default;
      if (r[o] !== void 0) jr(n, r[o]);
    }
  }
  if (Array.isArray(e.anyOf)) {
    for (let r of e.anyOf) if (typeof r !== "boolean") jr(r, t);
  }
  if (Array.isArray(e.oneOf)) {
    for (let r of e.oneOf) if (typeof r !== "boolean") jr(r, t);
  }
}
function dl(e) {
  if (!e) return { supportsFormMode: !1, supportsUrlMode: !1 };
  let t = e.form !== void 0,
    r = e.url !== void 0;
  return { supportsFormMode: t || (!t && !r), supportsUrlMode: r };
}
function hl(e) {
  if (typeof e === "object" && e !== null) {
    if (
      e.kind === "legacy" &&
      !("supportedVersions" in e) &&
      !("discover" in e)
    )
      return e;
    if (e.kind === "modern" && xee.safeParse(e.discover).success) return e;
  }
  throw new SdkError(
    ProtocolErrorCode.EraNegotiationFailed,
    "connect({ prior }): unrecognized prior \u2014 expected { kind: 'modern', discover } or { kind: 'legacy' }",
  );
}
var ro = {
    "notifications/tools/list_changed": ["tools/list"],
    "notifications/prompts/list_changed": ["prompts/list"],
    "notifications/resources/list_changed": [
      "resources/list",
      "resources/templates/list",
    ],
  },
  ml = 64,
  Client = class extends ya {
    _serverCapabilities;
    _serverVersion;
    _capabilities;
    _instructions;
    _jsonSchemaValidator;
    _cache;
    _defaultCacheTtlMs;
    _listMaxPages;
    _listChangedDebounceTimers = new Map();
    _listChangedConfig;
    _enforceStrictCapabilities;
    _versionNegotiation;
    _supportedProtocolVersionsOption;
    _inputRequiredDriverConfig;
    _listenState = new Map();
    _nextListenId = 0;
    _autoOpenedSubscription;
    _discoverResult;
    _resetConnectionState() {
      if (
        ((this._negotiatedProtocolVersion = void 0),
        (this._serverCapabilities = void 0),
        (this._serverVersion = void 0),
        (this._instructions = void 0),
        (this._discoverResult = void 0),
        (this._autoOpenedSubscription = void 0),
        this._listenState.size > 0)
      ) {
        let e = new SdkError(
          ProtocolErrorCode.ConnectionClosed,
          "subscriptions/listen: client reconnected or closed; subscription state from the previous connection was reset",
        );
        for (let t of this._listenState.values())
          t.settle({ cause: "remote", error: e });
      }
      this._listenState.clear();
      for (let e of this._listChangedDebounceTimers.values()) clearTimeout(e);
      (this._listChangedDebounceTimers.clear(),
        this._cache.resetForReconnect());
    }
    async close() {
      try {
        await super.close();
      } finally {
        this._resetConnectionState();
      }
    }
    constructor(e, t) {
      super(t);
      if (
        ((this._clientInfo = e),
        (this._capabilities = t?.capabilities ? { ...t.capabilities } : {}),
        (this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new AjvJsonSchemaValidator()),
        (this._enforceStrictCapabilities = t?.enforceStrictCapabilities ?? !1),
        (this._versionNegotiation = t?.versionNegotiation),
        (this._supportedProtocolVersionsOption = t?.supportedProtocolVersions),
        (this._inputRequiredDriverConfig = pa(t?.inputRequired)),
        (this._cache = new Kc(
          t?.responseCacheStore ?? new Hc(),
          t?.responseCacheStore !== void 0,
          (r) => this._reportStoreError(r),
          t?.cachePartition ?? "",
        )),
        (this._defaultCacheTtlMs = t?.defaultCacheTtlMs ?? 0),
        (this._listMaxPages = t?.listMaxPages ?? ml),
        t?.listChanged)
      )
        this._listChangedConfig = t.listChanged;
    }
    buildContext(e, t) {
      return e;
    }
    _shouldDropInbound(e) {
      if (
        this._negotiatedProtocolVersion !== void 0 &&
        Ae(this._negotiatedProtocolVersion) &&
        isJSONRPCRequest(e)
      )
        return "drop";
    }
    _outboundMetaEnvelope() {
      let e = this._negotiatedProtocolVersion;
      if (e === void 0) return;
      return this._wireCodec().outboundEnvelope({
        protocolVersion: e,
        clientInfo: this._clientInfo,
        clientCapabilities: this._capabilities,
      });
    }
    _resolveNonCompleteResult(e, t) {
      if (!this._inputRequiredDriverConfig.autoFulfill)
        return Promise.reject(
          new SdkError(
            ProtocolErrorCode.UnsupportedResultType,
            `Unsupported result type 'input_required' for ${t.request.method}: multi-round-trip auto-fulfilment is not enabled on this instance \u2014 pass allowInputRequired: true to handle it manually, or enable inputRequired.autoFulfill`,
            { resultType: "input_required", method: t.request.method },
          ),
        );
      return Ra(
        {
          getRequestHandler: (r) => this._getRequestHandler(r),
          buildContext: (r) => this.buildContext(r, void 0),
          sessionId: this.transport?.sessionId,
        },
        this._inputRequiredDriverConfig,
        e,
        t,
      );
    }
    _setupListChangedHandlers(e) {
      if (e.tools && this._serverCapabilities?.tools?.listChanged)
        this._setupListChangedHandler(
          "tools",
          "notifications/tools/list_changed",
          e.tools,
          async () =>
            (await this.listTools(void 0, { cacheMode: "refresh" })).tools,
        );
      if (e.prompts && this._serverCapabilities?.prompts?.listChanged)
        this._setupListChangedHandler(
          "prompts",
          "notifications/prompts/list_changed",
          e.prompts,
          async () =>
            (await this.listPrompts(void 0, { cacheMode: "refresh" })).prompts,
        );
      if (e.resources && this._serverCapabilities?.resources?.listChanged)
        this._setupListChangedHandler(
          "resources",
          "notifications/resources/list_changed",
          e.resources,
          async () =>
            (await this.listResources(void 0, { cacheMode: "refresh" }))
              .resources,
        );
    }
    registerCapabilities(e) {
      if (this.transport)
        throw Error(
          "Cannot register capabilities after connecting to transport",
        );
      this._capabilities = ba(this._capabilities, e);
    }
    setVersionNegotiation(e) {
      if (this.transport)
        throw Error(
          "Cannot configure version negotiation after connecting to transport",
        );
      this._versionNegotiation = e;
    }
    _wrapHandler(e, t) {
      if (e === "elicitation/create")
        return async (r, a) => {
          let o = je(this._negotiatedProtocolVersion),
            n = o.validateRequest("elicitation/create", r);
          if (!n.ok && n.reason === "not-in-era")
            n = o.validateInputRequest("elicitation/create", r);
          if (!n.ok)
            throw new ProtocolError(
              n.reason === "not-in-era" ? ErrorCode.InternalError : ErrorCode.InvalidParams,
              n.reason === "not-in-era"
                ? "No wire schema for elicitation/create in the resolved era"
                : `Invalid elicitation request: ${n.message}`,
            );
          let { params: i } = n.value;
          i.mode = i.mode ?? "form";
          let { supportsFormMode: u, supportsUrlMode: l } = dl(
            this._capabilities.elicitation,
          );
          if (i.mode === "form" && !u)
            throw new ProtocolError(
              ErrorCode.InvalidParams,
              "Client does not support form-mode elicitation requests",
            );
          if (i.mode === "url" && !l)
            throw new ProtocolError(
              ErrorCode.InvalidParams,
              "Client does not support URL-mode elicitation requests",
            );
          let d = await t(r, a),
            m = o.validateResult("elicitation/create", d);
          if (!m.ok && m.reason === "not-in-era")
            m = o.validateInputResponse("elicitation/create", d);
          if (!m.ok)
            throw new ProtocolError(
              m.reason === "not-in-era" ? ErrorCode.InternalError : ErrorCode.InvalidParams,
              m.reason === "not-in-era"
                ? "No wire schema for elicitation/create in the resolved era"
                : `Invalid elicitation result: ${m.message}`,
            );
          let _ = m.value,
            P = i.mode === "form" ? i.requestedSchema : void 0;
          if (
            i.mode === "form" &&
            _.action === "accept" &&
            _.content &&
            P &&
            this._capabilities.elicitation?.form?.applyDefaults
          )
            try {
              jr(P, _.content);
            } catch {}
          return _;
        };
      if (e === "sampling/createMessage")
        return async (r, a) => {
          let o = je(this._negotiatedProtocolVersion),
            n = o.validateRequest("sampling/createMessage", r);
          if (!n.ok && n.reason === "not-in-era")
            n = o.validateInputRequest("sampling/createMessage", r);
          if (!n.ok)
            throw new ProtocolError(
              n.reason === "not-in-era" ? ErrorCode.InternalError : ErrorCode.InvalidParams,
              n.reason === "not-in-era"
                ? "No wire schema for sampling/createMessage in the resolved era"
                : `Invalid sampling request: ${n.message}`,
            );
          let { params: i } = n.value,
            u = await t(r, a),
            l = Boolean(i.tools || i.toolChoice),
            d = o.samplingResultVariant(l, u);
          if (!d.ok && d.reason === "not-in-era")
            d = o.validateInputResponse("sampling/createMessage", u);
          if (!d.ok)
            throw new ProtocolError(
              d.reason === "not-in-era" ? ErrorCode.InternalError : ErrorCode.InvalidParams,
              d.reason === "not-in-era"
                ? "No result schema for sampling/createMessage in the resolved era"
                : `Invalid sampling result: ${d.message}`,
            );
          return d.value;
        };
      return t;
    }
    assertCapability(e, t) {
      if (!this._serverCapabilities?.[e])
        throw new SdkError(
          ProtocolErrorCode.CapabilityNotSupported,
          `Server does not support ${e} (required for ${t})`,
        );
    }
    async connect(e, t) {
      if (t?.prior != null) return this._connectFromPrior(e, hl(t.prior), t);
      let r = al(
        this._versionNegotiation,
        this._supportedProtocolVersionsOption,
      );
      if (r.kind !== "legacy") return this._connectNegotiated(e, r, t);
      return this._connectPlainLegacy(e, t);
    }
    async _connectPlainLegacy(e, t) {
      if ((await super.connect(e), e.sessionId !== void 0)) {
        let r = this._negotiatedProtocolVersion;
        if (r !== void 0) e.setProtocolVersion?.(r);
        return;
      }
      (this._resetConnectionState(), await this._legacyHandshake(e, t));
    }
    async _legacyHandshake(e, t) {
      let r = Yr(this._supportedProtocolVersions);
      try {
        let a = r[0];
        if (a === void 0)
          throw new SdkError(
            ProtocolErrorCode.EraNegotiationFailed,
            "Cannot run the initialize handshake: supportedProtocolVersions contains no pre-2026-07-28 protocol version",
          );
        let o = await this.request(
          {
            method: "initialize",
            params: {
              protocolVersion: a,
              capabilities: this._capabilities,
              clientInfo: this._clientInfo,
            },
          },
          t,
        );
        if (o === void 0)
          throw Error(`Server sent invalid initialize result: ${o}`);
        if (!r.includes(o.protocolVersion))
          throw Error(
            `Server's protocol version is not supported: ${o.protocolVersion}`,
          );
        if (
          ((this._serverCapabilities = o.capabilities),
          (this._serverVersion = o.serverInfo),
          this._cache.setServerIdentity(this._deriveServerIdentity(e)),
          e.setProtocolVersion)
        )
          e.setProtocolVersion(o.protocolVersion);
        if (
          ((this._instructions = o.instructions),
          await this.notification({ method: "notifications/initialized" }),
          (this._negotiatedProtocolVersion = o.protocolVersion),
          this._listChangedConfig)
        )
          this._setupListChangedHandlers(this._listChangedConfig);
      } catch (a) {
        throw (this.close(), a);
      }
    }
    async _connectNegotiated(e, t, r) {
      if (e.sessionId !== void 0) {
        await super.connect(e);
        let o = this._negotiatedProtocolVersion;
        if (o !== void 0 && e.setProtocolVersion) e.setProtocolVersion(o);
        return;
      }
      this._resetConnectionState();
      let a;
      try {
        let o = Ya(e),
          n = {
            clientInfo: this._clientInfo,
            capabilities: this._capabilities,
            environment: Wa(),
            defaultTimeoutMs: r?.timeout ?? Tr,
          },
          i = o === "stdio" ? cl(e) : void 0;
        a =
          i === void 0
            ? await po(t, { ...n, transport: e, transportKind: o })
            : await ll(t, e, i, n);
      } catch (o) {
        throw (await e.close().catch(() => {}), Qa(e), o);
      }
      if ((Qa(e), await super.connect(e), a.era === "legacy")) {
        await this._legacyHandshake(e, r);
        return;
      }
      if (
        ((this._serverCapabilities = a.discover.capabilities),
        (this._serverVersion = to(a.discover)),
        this._cache.setServerIdentity(this._deriveServerIdentity(e)),
        (this._instructions = a.discover.instructions),
        (this._discoverResult = a.discover),
        (this._negotiatedProtocolVersion = a.version),
        e.setProtocolVersion)
      )
        e.setProtocolVersion(a.version);
      if (this._listChangedConfig) {
        let o = this._listChangedConfig,
          n = this._serverCapabilities,
          i = {
            ...(o.tools && n?.tools?.listChanged && { tools: o.tools }),
            ...(o.prompts && n?.prompts?.listChanged && { prompts: o.prompts }),
            ...(o.resources &&
              n?.resources?.listChanged && { resources: o.resources }),
          },
          u = !0;
        try {
          this._setupListChangedHandlers(i);
        } catch (d) {
          ((u = !1), this.onerror?.(d instanceof Error ? d : Error(String(d))));
        }
        let l = u
          ? {
              ...(i.tools && { toolsListChanged: !0 }),
              ...(i.prompts && { promptsListChanged: !0 }),
              ...(i.resources && { resourcesListChanged: !0 }),
            }
          : {};
        if (Object.keys(l).length > 0) {
          let d = new AbortController(),
            m = () => d.abort(r?.signal?.reason);
          if (r?.signal?.aborted) m();
          r?.signal?.addEventListener("abort", m);
          try {
            this._autoOpenedSubscription = await this.listen(l, {
              timeout: r?.timeout,
              signal: d.signal,
            });
          } catch (_) {
            if (r?.signal?.aborted)
              throw (await this.close().catch(() => {}), _);
            this.onerror?.(_ instanceof Error ? _ : Error(String(_)));
          } finally {
            r?.signal?.removeEventListener("abort", m);
          }
        }
      }
    }
    async _connectFromPrior(e, t, r) {
      if (t.kind === "legacy") return this._connectPlainLegacy(e, r);
      let a = t.discover;
      this._resetConnectionState();
      let o = this._supportedProtocolVersionsOption,
        n = (o && Bt(o).length > 0 ? Bt(o) : Wr).find((i) =>
          a.supportedVersions.includes(i),
        );
      if (n === void 0)
        throw new SdkError(
          ProtocolErrorCode.EraNegotiationFailed,
          "connect({ prior }) with a modern verdict requires a 2026-07-28+ mutual protocol version; the supplied DiscoverResult and this client's supportedProtocolVersions have no modern overlap. For a server known to be legacy, pass prior: { kind: 'legacy' } to skip the probe and initialize directly, or use versionNegotiation: { mode: 'auto' } to re-probe with legacy fallback.",
        );
      if (
        (await super.connect(e),
        (this._discoverResult = a),
        (this._serverCapabilities = a.capabilities),
        (this._serverVersion = to(a)),
        this._cache.setServerIdentity(this._deriveServerIdentity(e)),
        (this._instructions = a.instructions),
        (this._negotiatedProtocolVersion = n),
        e.setProtocolVersion?.(n),
        this._listChangedConfig)
      )
        try {
          this._setupListChangedHandlers(this._listChangedConfig);
        } catch (i) {
          this.onerror?.(i instanceof Error ? i : Error(String(i)));
        }
    }
    getServerCapabilities() {
      return this._serverCapabilities;
    }
    getServerVersion() {
      return this._serverVersion;
    }
    _deriveServerIdentity(e) {
      let t = this._serverVersion;
      if (t !== void 0) return `${t.name}@${t.version}`;
      return (
        e.sessionId ??
        `anonymous:${Date.now()}-${Math.random().toString(36).slice(2)}`
      );
    }
    getNegotiatedProtocolVersion() {
      return this._negotiatedProtocolVersion;
    }
    getProtocolEra() {
      let e = this._negotiatedProtocolVersion;
      if (e === void 0) return;
      return Ae(e) ? "modern" : "legacy";
    }
    getInstructions() {
      return this._instructions;
    }
    getDiscoverResult() {
      return this._discoverResult;
    }
    assertCapabilityForMethod(e) {
      switch (e) {
        case "logging/setLevel":
          if (!this._serverCapabilities?.logging)
            throw new SdkError(
              ProtocolErrorCode.CapabilityNotSupported,
              `Server does not support logging (required for ${e})`,
            );
          break;
        case "prompts/get":
        case "prompts/list":
          if (!this._serverCapabilities?.prompts)
            throw new SdkError(
              ProtocolErrorCode.CapabilityNotSupported,
              `Server does not support prompts (required for ${e})`,
            );
          break;
        case "resources/list":
        case "resources/templates/list":
        case "resources/read":
        case "resources/subscribe":
        case "resources/unsubscribe":
          if (!this._serverCapabilities?.resources)
            throw new SdkError(
              ProtocolErrorCode.CapabilityNotSupported,
              `Server does not support resources (required for ${e})`,
            );
          if (
            e === "resources/subscribe" &&
            !this._serverCapabilities.resources.subscribe
          )
            throw new SdkError(
              ProtocolErrorCode.CapabilityNotSupported,
              `Server does not support resource subscriptions (required for ${e})`,
            );
          break;
        case "tools/call":
        case "tools/list":
          if (!this._serverCapabilities?.tools)
            throw new SdkError(
              ProtocolErrorCode.CapabilityNotSupported,
              `Server does not support tools (required for ${e})`,
            );
          break;
        case "completion/complete":
          if (!this._serverCapabilities?.completions)
            throw new SdkError(
              ProtocolErrorCode.CapabilityNotSupported,
              `Server does not support completions (required for ${e})`,
            );
          break;
        case "initialize":
          break;
        case "server/discover":
          break;
        case "ping":
          break;
      }
    }
    assertNotificationCapability(e) {
      switch (e) {
        case "notifications/roots/list_changed":
          if (!this._capabilities.roots?.listChanged)
            throw new SdkError(
              ProtocolErrorCode.CapabilityNotSupported,
              `Client does not support roots list changed notifications (required for ${e})`,
            );
          break;
        case "notifications/initialized":
          break;
        case "notifications/cancelled":
          break;
        case "notifications/progress":
          break;
      }
    }
    assertRequestHandlerCapability(e) {
      switch (e) {
        case "sampling/createMessage":
          if (!this._capabilities.sampling)
            throw new SdkError(
              ProtocolErrorCode.CapabilityNotSupported,
              `Client does not support sampling capability (required for ${e})`,
            );
          break;
        case "elicitation/create":
          if (!this._capabilities.elicitation)
            throw new SdkError(
              ProtocolErrorCode.CapabilityNotSupported,
              `Client does not support elicitation capability (required for ${e})`,
            );
          break;
        case "roots/list":
          if (!this._capabilities.roots)
            throw new SdkError(
              ProtocolErrorCode.CapabilityNotSupported,
              `Client does not support roots capability (required for ${e})`,
            );
          break;
        case "ping":
          break;
      }
    }
    async ping(e) {
      return this.request({ method: "ping" }, e);
    }
    async discover(e) {
      let t = await this._requestWithSchema(
        { method: "server/discover" },
        xee,
        e,
      );
      return ((this._discoverResult = t), t);
    }
    async complete(e, t) {
      return this.request({ method: "completion/complete", params: e }, t);
    }
    async setLoggingLevel(e, t) {
      return this.request(
        { method: "logging/setLevel", params: { level: e } },
        t,
      );
    }
    async getPrompt(e, t) {
      return this.request({ method: "prompts/get", params: e }, t);
    }
    async listPrompts(e, t) {
      if (
        !this._serverCapabilities?.prompts &&
        !this._enforceStrictCapabilities
      )
        return (
          console.debug(
            "Client.listPrompts() called but server does not advertise prompts capability - returning empty list",
          ),
          { prompts: [] }
        );
      if (e?.cursor !== void 0)
        return this.request({ method: "prompts/list", params: e }, t);
      let r = await this._serveFromCache("prompts/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("prompts/list", e, t, (a, o) =>
        a.prompts.push(...o.prompts),
      );
    }
    async listResources(e, t) {
      if (
        !this._serverCapabilities?.resources &&
        !this._enforceStrictCapabilities
      )
        return (
          console.debug(
            "Client.listResources() called but server does not advertise resources capability - returning empty list",
          ),
          { resources: [] }
        );
      if (e?.cursor !== void 0)
        return this.request({ method: "resources/list", params: e }, t);
      let r = await this._serveFromCache("resources/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("resources/list", e, t, (a, o) =>
        a.resources.push(...o.resources),
      );
    }
    async listResourceTemplates(e, t) {
      if (
        !this._serverCapabilities?.resources &&
        !this._enforceStrictCapabilities
      )
        return (
          console.debug(
            "Client.listResourceTemplates() called but server does not advertise resources capability - returning empty list",
          ),
          { resourceTemplates: [] }
        );
      if (e?.cursor !== void 0)
        return this.request(
          { method: "resources/templates/list", params: e },
          t,
        );
      let r = await this._serveFromCache("resources/templates/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("resources/templates/list", e, t, (a, o) =>
        a.resourceTemplates.push(...o.resourceTemplates),
      );
    }
    async _listAllPages(e, t, r, a, o) {
      let n = r?.cacheMode === "bypass",
        i = this._cache.captureGeneration(e),
        u = await this.request(
          { method: e, ...(t && { params: { ...t } }) },
          r,
        ),
        l = u.nextCursor,
        d = new Set(),
        m = 1;
      while (l !== void 0 && !d.has(l)) {
        if (this._listMaxPages !== 0 && m >= this._listMaxPages)
          throw new SdkError(
            ProtocolErrorCode.ListPaginationExceeded,
            `${e}: exceeded listMaxPages (${this._listMaxPages}); server pagination did not terminate`,
            { method: e, listMaxPages: this._listMaxPages },
          );
        d.add(l);
        let _ = await this.request(
          { method: e, params: { ...t, cursor: l } },
          r,
        );
        (a(u, _), (l = _.nextCursor), m++);
      }
      if ((delete u.nextCursor, o?.(u), n)) return u;
      return (await this._cache.write(e, u, i, this._freshness(u)), u);
    }
    _freshness(e, t) {
      let r = e,
        a = typeof r.ttlMs === "number" ? r.ttlMs : this._defaultCacheTtlMs,
        o = r.cacheScope === "public" ? "public" : "private";
      return {
        expiresAt: this._cache.now() + Math.min(Math.max(0, a), xc),
        scope: o,
        params: t,
      };
    }
    async _serveFromCache(e, t, r) {
      if (r?.cacheMode === "bypass" || r?.cacheMode === "refresh") return;
      let a = await this._cache
        .read(e, t)
        .catch((o) => void this._reportStoreError(o));
      if (a !== void 0) {
        if (r?.signal?.aborted) {
          let o = r.signal.reason;
          throw o instanceof SdkError ? o : new SdkError(ProtocolErrorCode.RequestTimeout, String(o));
        }
        return a.value;
      }
    }
    _reportStoreError(e) {
      this.onerror?.(e instanceof Error ? e : Error(String(e)));
    }
    _compileOutputValidator(e) {
      if (!e.outputSchema) return;
      try {
        return {
          ok: !0,
          validator: this._jsonSchemaValidator.getValidator(e.outputSchema),
        };
      } catch (t) {
        return { ok: !1, compileError: t };
      }
    }
    async _resolveXMcpHeaderScan(e, t) {
      let r = t ?? (await this._cache.toolDefinition(e));
      return r === void 0 ? void 0 : ss(r.inputSchema);
    }
    async readResource(e, t) {
      let r = await this._serveFromCache("resources/read", e.uri, t);
      if (r !== void 0) return r;
      let a = this._cache.captureGeneration("resources/read", e.uri),
        o = await this.request({ method: "resources/read", params: e }, t);
      if (t?.cacheMode !== "bypass") {
        let n = this._freshness(o, e.uri);
        if (n.expiresAt > this._cache.now())
          await this._cache.write("resources/read", o, a, n);
        else if (t?.cacheMode === "refresh")
          await this._cache.evictKey("resources/read", e.uri);
      }
      return o;
    }
    async subscribeResource(e, t) {
      return this.request({ method: "resources/subscribe", params: e }, t);
    }
    async unsubscribeResource(e, t) {
      return this.request({ method: "resources/unsubscribe", params: e }, t);
    }
    async listen(e, t) {
      if (this.transport === void 0)
        throw new SdkError(ProtocolErrorCode.NotConnected, "Not connected");
      let r = this._negotiatedProtocolVersion;
      if (r === void 0 || !Ae(r))
        throw new SdkError(
          ProtocolErrorCode.MethodNotSupportedByProtocolVersion,
          `subscriptions/listen requires a 2026-07-28-era connection (negotiated: ${r ?? "none"}). On a 2025-era connection, change notifications are delivered unsolicited: use ClientOptions.listChanged and resources/subscribe instead.`,
          { method: "subscriptions/listen", protocolVersion: r },
        );
      if (t?.signal?.aborted) {
        let g = t.signal.reason;
        throw g instanceof SdkError ? g : new SdkError(ProtocolErrorCode.RequestTimeout, String(g));
      }
      let a = new AbortController(),
        o = `listen:${this._nextListenId++}`,
        n = "opening",
        i,
        u,
        l,
        d,
        m = new Promise((g, p) => {
          ((l = g), (d = p));
        });
      m.catch(() => {});
      let _,
        P = new Promise((g) => {
          _ = g;
        }),
        z = (g) => {
          if (n === "closed") return;
          let p = n === "opening";
          if (i !== void 0) (clearTimeout(i), (i = void 0));
          if ("ack" in g) {
            ((n = "open"), l(g.ack));
            return;
          }
          if (((n = "closed"), u !== void 0))
            t?.signal?.removeEventListener("abort", u);
          if ((this._listenState.delete(o), a.abort(), _(g.cause), p))
            d(
              g.error ??
                new SdkError(
                  ProtocolErrorCode.ConnectionClosed,
                  "subscriptions/listen closed before the server acknowledged",
                ),
            );
        },
        y = async () => {
          (a.abort(),
            await this.notification({
              method: "notifications/cancelled",
              params: { requestId: o },
            }).catch(() => {}));
        },
        b = async () => {
          if (n === "closed") return;
          (z({ cause: "local" }), await y());
        };
      this._listenState.set(o, { settle: z });
      let f = t?.timeout ?? Tr;
      if (
        ((i = setTimeout(() => {
          (z({
            cause: "remote",
            error: new SdkError(
              ProtocolErrorCode.RequestTimeout,
              "subscriptions/listen ack timed out",
              { timeout: f },
            ),
          }),
            y().catch(() => {}));
        }, f)),
        t?.signal)
      ) {
        let g = t.signal;
        ((u = () => {
          if (n === "closed") return;
          let p = g.reason;
          (z({
            cause: "local",
            error: p instanceof Error ? p : Error(String(p ?? "Aborted")),
          }),
            y().catch(() => {}));
        }),
          g.addEventListener("abort", u, { once: !0 }));
      }
      let h = {
        jsonrpc: "2.0",
        id: o,
        method: "subscriptions/listen",
        params: {
          _meta: { ...this._outboundMetaEnvelope() },
          notifications: e,
        },
      };
      try {
        await this.transport.send(h, {
          requestSignal: a.signal,
          onRequestStreamEnd: () =>
            z({
              cause: "remote",
              error: Error("subscriptions/listen: stream ended"),
            }),
        });
      } catch (g) {
        z({
          cause: "remote",
          error: g instanceof Error ? g : Error(String(g)),
        });
      }
      return { honoredFilter: await m, close: b, closed: P };
    }
    get autoOpenedSubscription() {
      return this._autoOpenedSubscription;
    }
    _onnotification(e, t) {
      let r = Object.hasOwn(ro, e.method) ? ro[e.method] : void 0;
      if (e.method === "notifications/resources/updated") {
        let a = e.params?.uri;
        if (typeof a === "string") this._cache.evictKey("resources/read", a);
      } else if (r !== void 0) for (let a of r) this._cache.evict(a);
      if (e.method === "notifications/subscriptions/acknowledged") {
        let a = e.params?._meta?.[Fct],
          o = typeof a === "string" ? this._listenState.get(a) : void 0;
        if (o !== void 0) {
          let n = this._wireCodec().validateNotification(
            "notifications/subscriptions/acknowledged",
            e,
          );
          o.settle({ ack: n.ok ? n.value.params.notifications : {} });
          return;
        }
      }
      if (e.method === "notifications/cancelled") {
        let a = e.params?.requestId,
          o = typeof a === "string" ? this._listenState.get(a) : void 0;
        if (o !== void 0) {
          o.settle({
            cause: "remote",
            error: Error(
              "subscriptions/listen: server cancelled the subscription",
            ),
          });
          return;
        }
      }
      super._onnotification(e, t);
    }
    _onresponse(e) {
      let t = e.id,
        r = typeof t === "string" ? this._listenState.get(t) : void 0;
      if (r !== void 0) {
        if (isJSONRPCErrorResponse(e))
          r.settle({
            cause: "remote",
            error: ProtocolError.fromError(e.error.code, e.error.message, e.error.data),
          });
        else
          r.settle({
            cause: "graceful",
            error: new SdkError(
              ProtocolErrorCode.ConnectionClosed,
              "subscriptions/listen: server closed the subscription gracefully before acknowledging",
            ),
          });
        return;
      }
      super._onresponse(e);
    }
    _onclose() {
      if (this._listenState.size > 0) {
        let e = new SdkError(ProtocolErrorCode.ConnectionClosed, "Connection closed");
        for (let t of this._listenState.values())
          t.settle({ cause: "remote", error: e });
        this._listenState.clear();
      }
      super._onclose();
    }
    async callTool(e, t) {
      let r = this.getProtocolEra() === "modern" && Wa() !== "browser",
        a = async () => {
          if (!r) return t;
          let l;
          try {
            l = await this._resolveXMcpHeaderScan(e.name, t?.toolDefinition);
          } catch (m) {
            this._reportStoreError(m);
          }
          if (!l?.valid || l.declarations.length === 0) return t;
          let d = ma(l.declarations, e.arguments);
          return Object.keys(d).length === 0
            ? t
            : { ...t, headers: { ...t?.headers, ...d } };
        },
        o =
          t?.toolDefinition === void 0
            ? await this._cache
                .outputValidator(e.name, (l) => this._compileOutputValidator(l))
                .catch((l) => void this._reportStoreError(l))
            : this._compileOutputValidator(t.toolDefinition),
        n = () => {
          if (o === void 0 || o.ok) return;
          let l = o.compileError,
            d = (l instanceof Error ? l.message : String(l)).slice(0, 200);
          throw new ProtocolError(
            ErrorCode.InvalidParams,
            `Tool '${e.name}' has an invalid outputSchema: ${d}`,
          );
        };
      n();
      let i;
      try {
        i = await this.request({ method: "tools/call", params: e }, await a());
      } catch (l) {
        let d = l instanceof ProtocolError && l.code === ft;
        if (!r || !d || t?.toolDefinition !== void 0) throw l;
        let m = {
          signal: t?.signal,
          timeout: t?.timeout,
          cacheMode: "refresh",
        };
        (await this._cache.evict("tools/list"),
          await this.listTools(void 0, m).catch((_) =>
            this._reportStoreError(_),
          ),
          (o = await this._cache
            .outputValidator(e.name, (_) => this._compileOutputValidator(_))
            .catch((_) => void this._reportStoreError(_))),
          n(),
          (i = await this.request(
            { method: "tools/call", params: e },
            await a(),
          )));
      }
      if (t?.allowTask === !0 && i.resultType === "task") return i;
      let u = o !== void 0 && o.ok ? o.validator : void 0;
      if (u) {
        if (i.structuredContent === void 0 && !i.isError)
          throw new ProtocolError(
            ErrorCode.InvalidRequest,
            `Tool ${e.name} has an output schema but did not return structured content`,
          );
        if (i.structuredContent !== void 0 && !i.isError)
          try {
            let l = u(i.structuredContent);
            if (!l.valid)
              throw new ProtocolError(
                ErrorCode.InvalidParams,
                `Structured content does not match the tool's output schema: ${l.errorMessage}`,
              );
          } catch (l) {
            if (l instanceof ProtocolError) throw l;
            throw new ProtocolError(
              ErrorCode.InvalidParams,
              `Failed to validate structured content: ${l instanceof Error ? l.message : String(l)}`,
            );
          }
      }
      return i;
    }
    async listTools(e, t) {
      if (!this._serverCapabilities?.tools && !this._enforceStrictCapabilities)
        return (
          console.debug(
            "Client.listTools() called but server does not advertise tools capability - returning empty list",
          ),
          { tools: [] }
        );
      if (e?.cursor !== void 0) {
        let a = await this.request({ method: "tools/list", params: e }, t);
        return (this._excludeInvalidXMcpHeaderTools(a), a);
      }
      let r = await this._serveFromCache("tools/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages(
        "tools/list",
        e,
        t,
        (a, o) => a.tools.push(...o.tools),
        (a) => this._excludeInvalidXMcpHeaderTools(a),
      );
    }
    _excludeInvalidXMcpHeaderTools(e) {
      if (
        this.getProtocolEra() !== "modern" ||
        !this.transport ||
        Ya(this.transport) === "stdio"
      )
        return;
      let t = e.tools.filter((r) => {
        let a = ss(r.inputSchema);
        if (!a.valid)
          return (
            console.warn(
              `[mcp-sdk] excluding tool '${r.name}' from tools/list: invalid x-mcp-header declaration \u2014 ${a.reason}`,
            ),
            !1
          );
        return !0;
      });
      if (t.length !== e.tools.length) e.tools = t;
    }
    _setupListChangedHandler(e, t, r, a) {
      let o = Pr(tut, r);
      if (!o.success)
        throw Error(`Invalid ${e} listChanged options: ${o.error.message}`);
      if (typeof r.onChanged !== "function")
        throw TypeError(
          `Invalid ${e} listChanged options: onChanged must be a function`,
        );
      let { autoRefresh: n, debounceMs: i } = o.data,
        { onChanged: u } = r,
        l = async () => {
          if (!n) {
            u(null, null);
            return;
          }
          try {
            u(null, await a());
          } catch (m) {
            u(m instanceof Error ? m : Error(String(m)), null);
          }
        },
        d = () => {
          if (i) {
            let m = this._listChangedDebounceTimers.get(e);
            if (m) clearTimeout(m);
            let _ = setTimeout(l, i);
            this._listChangedDebounceTimers.set(e, _);
          } else l();
        };
      this.setNotificationHandler(t, d);
    }
    async sendRootsListChanged() {
      return this.notification({ method: "notifications/roots/list_changed" });
    }
  };
var fl = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.SseError" });
    }
    static [Symbol.hasInstance](e) {
      return Te(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function")
        throw TypeError(
          "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`",
        );
      return Te(this, e);
    }
    constructor(e, t, r) {
      super(`SSE error: ${t}`);
      ((this.code = e), (this.event = r), et(this, new.target));
    }
  },
  SSEClientTransport = class {
    _eventSource;
    _endpoint;
    _abortController;
    _url;
    _resourceMetadataUrl;
    _scope;
    _eventSourceInit;
    _requestInit;
    _authProvider;
    _oauthProvider;
    _skipIssuerMetadataValidation;
    _fetch;
    _fetchWithInit;
    _protocolVersion;
    onclose;
    onerror;
    onmessage;
    constructor(e, t) {
      if (
        ((this._url = e),
        (this._resourceMetadataUrl = void 0),
        (this._scope = void 0),
        (this._eventSourceInit = t?.eventSourceInit),
        (this._requestInit = t?.requestInit),
        (this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation),
        io(t?.authProvider))
      )
        ((this._oauthProvider = t.authProvider),
          (this._authProvider = co(t.authProvider, {
            skipIssuerMetadataValidation: t.skipIssuerMetadataValidation,
          })));
      else this._authProvider = t?.authProvider;
      ((this._fetch = t?.fetch),
        (this._fetchWithInit = createFetchWithInit(t?.fetch, t?.requestInit)));
    }
    _last401Response;
    async _commonHeaders() {
      let e = {},
        t = await this._authProvider?.token();
      if (t) e.Authorization = `Bearer ${t}`;
      if (this._protocolVersion)
        e["mcp-protocol-version"] = this._protocolVersion;
      let r = Gt(this._requestInit?.headers);
      return new Headers({ ...e, ...r });
    }
    _startOrAuth() {
      let e = this?._eventSourceInit?.fetch ?? this._fetch ?? fetch;
      return new Promise((t, r) => {
        ((this._eventSource = new hce(this._url.href, {
          ...this._eventSourceInit,
          fetch: async (a, o) => {
            let n = await this._commonHeaders();
            n.set("Accept", "text/event-stream");
            let i = await e(a, { ...o, headers: n });
            if (i.status === 401) {
              if (
                ((this._last401Response = i), i.headers.has("www-authenticate"))
              ) {
                let { resourceMetadataUrl: u, scope: l } = tt(i);
                ((this._resourceMetadataUrl = u), (this._scope = l));
              }
            }
            return i;
          },
        })),
          (this._abortController = new AbortController()),
          (this._eventSource.onerror = (a) => {
            if (a.code === 401 && this._authProvider) {
              if (this._authProvider.onUnauthorized && this._last401Response) {
                let i = this._last401Response;
                ((this._last401Response = void 0),
                  this._eventSource?.close(),
                  this._authProvider
                    .onUnauthorized({
                      response: i,
                      serverUrl: this._url,
                      fetchFn: this._fetchWithInit,
                    })
                    .then(
                      () => this._startOrAuth().then(t, r),
                      (u) => {
                        (this.onerror?.(u), r(u));
                      },
                    ));
                return;
              }
              let n = new UnauthorizedError();
              (r(n), this.onerror?.(n));
              return;
            }
            let o = new fl(a.code, a.message, a);
            (r(o), this.onerror?.(o));
          }),
          (this._eventSource.onopen = () => {}),
          this._eventSource.addEventListener("endpoint", (a) => {
            let o = a;
            try {
              if (
                ((this._endpoint = new URL(o.data, this._url)),
                this._endpoint.origin !== this._url.origin)
              )
                throw Error(
                  `Endpoint origin does not match connection origin: ${this._endpoint.origin}`,
                );
            } catch (n) {
              (r(n), this.onerror?.(n), this.close());
              return;
            }
            t();
          }),
          (this._eventSource.onmessage = (a) => {
            let o = a,
              n;
            try {
              n = c2.parse(JSON.parse(o.data));
            } catch (i) {
              this.onerror?.(i);
              return;
            }
            this.onmessage?.(n);
          }));
      });
    }
    async start() {
      if (this._eventSource)
        throw Error(
          "SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.",
        );
      return await this._startOrAuth();
    }
    async finishAuth(e, t) {
      if (!this._oauthProvider)
        throw new UnauthorizedError("finishAuth requires an OAuthClientProvider");
      let { authorizationCode: r, iss: a } = await lo(
        e,
        t,
        this._oauthProvider,
        this._url,
        {
          fetchFn: this._fetchWithInit,
          resourceMetadataUrl: this._resourceMetadataUrl,
        },
      );
      if (
        (await auth(this._oauthProvider, {
          serverUrl: this._url,
          authorizationCode: r,
          iss: a,
          resourceMetadataUrl: this._resourceMetadataUrl,
          scope: this._scope,
          fetchFn: this._fetchWithInit,
          skipIssuerMetadataValidation: this._skipIssuerMetadataValidation,
        })) !== "AUTHORIZED"
      )
        throw new UnauthorizedError("Failed to authorize");
    }
    async close() {
      (this._abortController?.abort(),
        this._eventSource?.close(),
        this.onclose?.());
    }
    async send(e) {
      return this._send(e, !1);
    }
    async _send(e, t) {
      if (!this._endpoint) throw new SdkError(ProtocolErrorCode.NotConnected, "Not connected");
      try {
        let r = await this._commonHeaders();
        r.set("content-type", "application/json");
        let a = {
            ...this._requestInit,
            method: "POST",
            headers: r,
            body: JSON.stringify(e),
            signal: this._abortController?.signal,
          },
          o = await (this._fetch ?? fetch)(this._endpoint, a);
        if (!o.ok) {
          if (o.status === 401 && this._authProvider) {
            if (o.headers.has("www-authenticate")) {
              let { resourceMetadataUrl: i, scope: u } = tt(o);
              ((this._resourceMetadataUrl = i), (this._scope = u));
            }
            if (this._authProvider.onUnauthorized && !t)
              return (
                await this._authProvider.onUnauthorized({
                  response: o,
                  serverUrl: this._url,
                  fetchFn: this._fetchWithInit,
                }),
                await o.text?.().catch(() => {}),
                this._send(e, !0)
              );
            if ((await o.text?.().catch(() => {}), t))
              throw new SdkHttpError(
                ProtocolErrorCode.ClientHttpAuthentication,
                "Server returned 401 after re-authentication",
                { status: 401, statusText: o.statusText },
              );
            throw new UnauthorizedError();
          }
          let n = await o.text?.().catch(() => null);
          throw Error(`Error POSTing to endpoint (HTTP ${o.status}): ${n}`);
        }
        await o.text?.().catch(() => {});
      } catch (r) {
        throw (this.onerror?.(r), r);
      }
    }
    setProtocolVersion(e) {
      this._protocolVersion = e;
    }
  },
  pl = 1,
  Sl = {
    initialReconnectionDelay: 1000,
    maxReconnectionDelay: 30000,
    reconnectionDelayGrowFactor: 1.5,
    maxRetries: 2,
  },
  gl = new Set([
    "authorization",
    "content-type",
    "mcp-protocol-version",
    "mcp-method",
    "mcp-name",
    "mcp-session-id",
  ]);
function so(e, t) {
  if (typeof AbortSignal.any === "function") return AbortSignal.any([e, t]);
  let r = new AbortController();
  if (e.aborted) return (r.abort(e.reason), r.signal);
  if (t.aborted) return (r.abort(t.reason), r.signal);
  let a = () => {
    (e.removeEventListener("abort", o), t.removeEventListener("abort", n));
  };
  function o() {
    (a(), r.abort(e.reason));
  }
  function n() {
    (a(), r.abort(t.reason));
  }
  return (
    e.addEventListener("abort", o, { once: !0 }),
    t.addEventListener("abort", n, { once: !0 }),
    r.signal
  );
}
var StreamableHTTPClientTransport = class {
  _abortController;
  _url;
  _resourceMetadataUrl;
  _scope;
  _requestInit;
  _authProvider;
  _oauthProvider;
  _skipIssuerMetadataValidation;
  _fetch;
  _fetchWithInit;
  _sessionId;
  _reconnectionOptions;
  _protocolVersion;
  _onInsufficientScope;
  _maxStepUpRetries;
  _serverRetryMs;
  _reconnectionScheduler;
  _cancelReconnection;
  onclose;
  onerror;
  onmessage;
  hasPerRequestStream = !0;
  constructor(e, t) {
    if (
      ((this._url = e),
      (this._resourceMetadataUrl = void 0),
      (this._scope = void 0),
      (this._requestInit = t?.requestInit),
      (this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation),
      io(t?.authProvider))
    )
      ((this._oauthProvider = t.authProvider),
        (this._authProvider = co(t.authProvider, {
          skipIssuerMetadataValidation: t.skipIssuerMetadataValidation,
        })));
    else this._authProvider = t?.authProvider;
    ((this._fetch = t?.fetch),
      (this._fetchWithInit = createFetchWithInit(t?.fetch, t?.requestInit)),
      (this._sessionId = t?.sessionId),
      (this._protocolVersion = t?.protocolVersion),
      (this._reconnectionOptions = t?.reconnectionOptions ?? Sl),
      (this._reconnectionScheduler = t?.reconnectionScheduler),
      (this._onInsufficientScope = t?.onInsufficientScope ?? "reauthorize"),
      (this._maxStepUpRetries = Math.max(0, t?.maxStepUpRetries ?? pl)));
  }
  async _stepUpAuthorize(e, t) {
    if (this._onInsufficientScope === "throw")
      throw new xa({
        requiredScope: e.scope,
        resourceMetadataUrl: e.resourceMetadataUrl,
        errorDescription: e.errorDescription,
      });
    if (!this._oauthProvider)
      throw new xa({
        requiredScope: e.scope,
        resourceMetadataUrl: e.resourceMetadataUrl,
        errorDescription: e.errorDescription,
      });
    if (t >= this._maxStepUpRetries)
      throw new SdkHttpError(
        ProtocolErrorCode.ClientHttpForbidden,
        `Server returned 403 insufficient_scope after step-up re-authorization (retry limit ${this._maxStepUpRetries} reached)`,
        { status: 403, statusText: e.statusText ?? "Forbidden", text: e.text },
      );
    if (e.resourceMetadataUrl)
      this._resourceMetadataUrl = e.resourceMetadataUrl;
    let r = await this._oauthProvider.tokens(),
      a = us(this._scope, r?.scope, e.scope);
    this._scope = a;
    let o = $c(a, r?.scope);
    return auth(this._oauthProvider, {
      serverUrl: this._url,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: a,
      forceReauthorization: o,
      fetchFn: this._fetchWithInit,
      skipIssuerMetadataValidation: this._skipIssuerMetadataValidation,
    });
  }
  async _commonHeaders() {
    let e = {},
      t = await this._authProvider?.token();
    if (t) e.Authorization = `Bearer ${t}`;
    if (this._sessionId) e["mcp-session-id"] = this._sessionId;
    if (this._protocolVersion)
      e["mcp-protocol-version"] = this._protocolVersion;
    let r = Gt(this._requestInit?.headers);
    return new Headers({ ...e, ...r });
  }
  _applyBodyDerivedHeaders(e, t) {
    if (Array.isArray(t) || !isJSONRPCRequest(t)) return;
    let r = t.params?._meta?.[cce];
    if (typeof r !== "string") return;
    (e.set("mcp-protocol-version", r), e.set("mcp-method", t.method));
    let a = t.params,
      o =
        t.method === "resources/read"
          ? typeof a?.uri === "string"
            ? a.uri
            : void 0
          : typeof a?.name === "string"
            ? a.name
            : void 0;
    if (o !== void 0) e.set("mcp-name", Er(o));
    let n =
      t.method.startsWith("tasks/") && typeof a?.taskId === "string"
        ? a.taskId
        : void 0;
    if (n !== void 0) e.set("mcp-name", Er(n));
  }
  _isModernEnvelopedRequest(e) {
    if (Array.isArray(e) || !isJSONRPCRequest(e)) return !1;
    let t = e.params?._meta?.[cce];
    return typeof t === "string" && Ae(t);
  }
  async _startOrAuthSse(e, t = !1, r = 0) {
    let { resumptionToken: a, requestSignal: o } = e,
      n = () =>
        this._abortController?.signal.aborted === !0 || o?.aborted === !0;
    try {
      let i = await this._commonHeaders(),
        u = [
          ...(i
            .get("accept")
            ?.split(",")
            .map((_) => _.trim().toLowerCase()) ?? []),
          "text/event-stream",
        ];
      if ((i.set("accept", [...new Set(u)].join(", ")), a))
        i.set("last-event-id", a);
      let l = this._abortController?.signal,
        d = o !== void 0 && l !== void 0 ? so(l, o) : (o ?? l),
        m = await (this._fetch ?? fetch)(this._url, {
          ...this._requestInit,
          method: "GET",
          headers: i,
          signal: d,
        });
      if (!m.ok) {
        if (m.status === 401 && this._authProvider) {
          if (m.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: _, scope: P } = tt(m);
            ((this._resourceMetadataUrl = _),
              (this._scope = us(this._scope, P)));
          }
          if (this._authProvider.onUnauthorized && !t)
            return (
              await this._authProvider.onUnauthorized({
                response: m,
                serverUrl: this._url,
                fetchFn: this._fetchWithInit,
              }),
              await m.text?.().catch(() => {}),
              this._startOrAuthSse(e, !0, r)
            );
          if ((await m.text?.().catch(() => {}), t))
            throw new SdkHttpError(
              ProtocolErrorCode.ClientHttpAuthentication,
              "Server returned 401 after re-authentication",
              { status: 401, statusText: m.statusText },
            );
          throw new UnauthorizedError();
        }
        if (m.status === 403) {
          let {
            resourceMetadataUrl: _,
            scope: P,
            error: z,
            errorDescription: y,
          } = tt(m);
          if (z === "insufficient_scope") {
            let b = await m.text?.().catch(() => null);
            if (
              (await this._stepUpAuthorize(
                {
                  scope: P,
                  resourceMetadataUrl: _,
                  errorDescription: y,
                  statusText: m.statusText,
                  text: b,
                },
                r,
              )) !== "AUTHORIZED"
            )
              throw new UnauthorizedError();
            return this._startOrAuthSse(e, t, r + 1);
          }
        }
        if ((await m.text?.().catch(() => {}), m.status === 405)) {
          e.onRequestStreamEnd?.();
          return;
        }
        throw new SdkHttpError(
          ProtocolErrorCode.ClientHttpFailedToOpenStream,
          `Failed to open SSE stream: ${m.statusText}`,
          { status: m.status, statusText: m.statusText },
        );
      }
      this._handleSseStream(m.body, e, !0);
    } catch (i) {
      if (!n()) this.onerror?.(i);
      throw i;
    }
  }
  _getNextReconnectionDelay(e) {
    if (this._serverRetryMs !== void 0) return this._serverRetryMs;
    let t = this._reconnectionOptions.initialReconnectionDelay,
      r = this._reconnectionOptions.reconnectionDelayGrowFactor,
      a = this._reconnectionOptions.maxReconnectionDelay;
    return Math.min(t * Math.pow(r, e), a);
  }
  _scheduleReconnection(e, t = 0) {
    let r = this._reconnectionOptions.maxRetries;
    if (t >= r) {
      (this.onerror?.(Error(`Maximum reconnection attempts (${r}) exceeded.`)),
        e.onRequestStreamEnd?.());
      return;
    }
    let a = this._getNextReconnectionDelay(t),
      o = () => {
        if (
          ((this._cancelReconnection = void 0),
          this._abortController?.signal.aborted || e.requestSignal?.aborted)
        )
          return;
        this._startOrAuthSse(e).catch((n) => {
          if (this._abortController?.signal.aborted || e.requestSignal?.aborted)
            return;
          this.onerror?.(
            Error(
              `Failed to reconnect SSE stream: ${n instanceof Error ? n.message : String(n)}`,
            ),
          );
          try {
            this._scheduleReconnection(e, t + 1);
          } catch (i) {
            this.onerror?.(i instanceof Error ? i : Error(String(i)));
          }
        });
      };
    if (this._reconnectionScheduler) {
      let n = this._reconnectionScheduler(o, a, t);
      this._cancelReconnection = typeof n === "function" ? n : void 0;
    } else {
      let n = setTimeout(o, a);
      this._cancelReconnection = () => clearTimeout(n);
    }
  }
  _handleSseStream(e, t, r) {
    if (!e) {
      t.onRequestStreamEnd?.();
      return;
    }
    let {
        onresumptiontoken: a,
        replayMessageId: o,
        requestSignal: n,
        onRequestStreamEnd: i,
      } = t,
      u = () =>
        this._abortController?.signal.aborted === !0 || n?.aborted === !0,
      l,
      d = !1,
      m = !1;
    (async () => {
      try {
        let P = e
          .pipeThrough(new TextDecoderStream())
          .pipeThrough(
            new RGe({
              onRetry: (z) => {
                this._serverRetryMs = z;
              },
            }),
          )
          .getReader();
        while (!0) {
          let { value: z, done: y } = await P.read();
          if (y) break;
          if (z.id) ((l = z.id), (d = !0), a?.(z.id));
          if (!z.data) continue;
          if (!z.event || z.event === "message")
            try {
              let b = c2.parse(JSON.parse(z.data));
              if (isJSONRPCResultResponse(b) || isJSONRPCErrorResponse(b)) {
                if (((m = !0), o !== void 0)) b.id = o;
              }
              this.onmessage?.(b);
            } catch (b) {
              this.onerror?.(b);
            }
        }
        if ((r || d) && !m && this._abortController && !u())
          this._scheduleReconnection(
            {
              resumptionToken: l,
              onresumptiontoken: a,
              replayMessageId: o,
              requestSignal: n,
              onRequestStreamEnd: i,
            },
            0,
          );
        else if (!u()) i?.();
      } catch (P) {
        if (u()) return;
        if (
          (this.onerror?.(Error(`SSE stream disconnected: ${P}`)),
          (r || d) && !m && this._abortController && !u())
        )
          try {
            this._scheduleReconnection(
              {
                resumptionToken: l,
                onresumptiontoken: a,
                replayMessageId: o,
                requestSignal: n,
                onRequestStreamEnd: i,
              },
              0,
            );
          } catch (z) {
            (this.onerror?.(
              Error(
                `Failed to reconnect: ${z instanceof Error ? z.message : String(z)}`,
              ),
            ),
              i?.());
          }
        else i?.();
      }
    })();
  }
  async start() {
    if (this._abortController)
      throw Error(
        "StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.",
      );
    this._abortController = new AbortController();
  }
  async finishAuth(e, t) {
    if (!this._oauthProvider)
      throw new UnauthorizedError("finishAuth requires an OAuthClientProvider");
    let { authorizationCode: r, iss: a } = await lo(
      e,
      t,
      this._oauthProvider,
      this._url,
      {
        fetchFn: this._fetchWithInit,
        resourceMetadataUrl: this._resourceMetadataUrl,
      },
    );
    if (
      (await auth(this._oauthProvider, {
        serverUrl: this._url,
        authorizationCode: r,
        iss: a,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit,
        skipIssuerMetadataValidation: this._skipIssuerMetadataValidation,
      })) !== "AUTHORIZED"
    )
      throw new UnauthorizedError("Failed to authorize");
  }
  async close() {
    try {
      this._cancelReconnection?.();
    } finally {
      ((this._cancelReconnection = void 0),
        this._abortController?.abort(),
        this.onclose?.());
    }
  }
  async send(e, t) {
    return this._send(e, t, !1);
  }
  async _send(e, t, r, a = 0) {
    try {
      let { resumptionToken: o, onresumptiontoken: n } = t || {};
      if (o) {
        this._startOrAuthSse({
          resumptionToken: o,
          replayMessageId: isJSONRPCRequest(e) ? e.id : void 0,
          requestSignal: t?.requestSignal,
        }).catch((f) => this.onerror?.(f));
        return;
      }
      let i = await this._commonHeaders();
      this._applyBodyDerivedHeaders(i, e);
      let u = Array.isArray(e) ? e.some((f) => rs(f)) : rs(e);
      if (u) i.delete("mcp-session-id");
      if (t?.headers !== void 0)
        for (let [f, h] of Object.entries(t.headers)) {
          if (gl.has(f.toLowerCase())) continue;
          i.set(f, h);
        }
      i.set("content-type", "application/json");
      let l = [
        ...(i
          .get("accept")
          ?.split(",")
          .map((f) => f.trim().toLowerCase()) ?? []),
        "application/json",
        "text/event-stream",
      ];
      i.set("accept", [...new Set(l)].join(", "));
      let d = this._abortController?.signal,
        m =
          t?.requestSignal !== void 0 && d !== void 0
            ? so(d, t.requestSignal)
            : (t?.requestSignal ?? d),
        _ = {
          ...this._requestInit,
          method: "POST",
          headers: i,
          body: JSON.stringify(e),
          signal: m,
        },
        P = await (this._fetch ?? fetch)(this._url, _);
      if (u && P.ok)
        this._sessionId = P.headers.get("mcp-session-id") || void 0;
      if (!P.ok) {
        if (P.status === 401 && this._authProvider) {
          if (P.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: h, scope: g } = tt(P);
            ((this._resourceMetadataUrl = h),
              (this._scope = us(this._scope, g)));
          }
          if (this._authProvider.onUnauthorized && !r)
            return (
              await this._authProvider.onUnauthorized({
                response: P,
                serverUrl: this._url,
                fetchFn: this._fetchWithInit,
              }),
              await P.text?.().catch(() => {}),
              this._send(e, t, !0, a)
            );
          if ((await P.text?.().catch(() => {}), r))
            throw new SdkHttpError(
              ProtocolErrorCode.ClientHttpAuthentication,
              "Server returned 401 after re-authentication",
              { status: 401, statusText: P.statusText },
            );
          throw new UnauthorizedError();
        }
        let f = await P.text?.().catch(() => null);
        if (P.status === 403) {
          let {
            resourceMetadataUrl: h,
            scope: g,
            error: p,
            errorDescription: w,
          } = tt(P);
          if (p === "insufficient_scope") {
            if (
              (await this._stepUpAuthorize(
                {
                  scope: g,
                  resourceMetadataUrl: h,
                  errorDescription: w,
                  statusText: P.statusText,
                  text: f,
                },
                a,
              )) !== "AUTHORIZED"
            )
              throw new UnauthorizedError();
            return this._send(e, t, r, a + 1);
          }
        }
        if (
          P.status === 400 &&
          typeof f === "string" &&
          this._isModernEnvelopedRequest(e)
        )
          try {
            let h = c2.parse(JSON.parse(f)),
              g = (Array.isArray(e) ? e : [e]).filter((p) => isJSONRPCRequest(p));
            if (isJSONRPCErrorResponse(h) && g.some((p) => p.id === h.id)) {
              this.onmessage?.(h);
              return;
            }
          } catch {}
        throw new SdkHttpError(
          ProtocolErrorCode.ClientHttpNotImplemented,
          `Error POSTing to endpoint: ${f}`,
          { status: P.status, statusText: P.statusText, text: f },
        );
      }
      if (P.status === 202) {
        if ((await P.text?.().catch(() => {}), ua(e)))
          this._startOrAuthSse({ resumptionToken: void 0 }).catch((f) =>
            this.onerror?.(f),
          );
        return;
      }
      let z = (Array.isArray(e) ? e : [e]).some(
          (f) => "method" in f && "id" in f && f.id !== void 0,
        ),
        y = P.headers.get("content-type"),
        b = wa(y);
      if (z)
        if (b === "text/event-stream")
          this._handleSseStream(
            P.body,
            {
              onresumptiontoken: n,
              requestSignal: t?.requestSignal,
              onRequestStreamEnd: t?.onRequestStreamEnd,
            },
            !1,
          );
        else if (b === "application/json") {
          let f = await P.json(),
            h = Array.isArray(f) ? f.map((g) => c2.parse(g)) : [c2.parse(f)];
          for (let g of h) this.onmessage?.(g);
        } else
          throw (
            await P.text?.().catch(() => {}),
            new SdkError(
              ProtocolErrorCode.ClientHttpUnexpectedContent,
              `Unexpected content type: ${y}`,
              { contentType: y },
            )
          );
      else await P.text?.().catch(() => {});
    } catch (o) {
      if (t?.requestSignal?.aborted !== !0) this.onerror?.(o);
      throw o;
    }
  }
  get sessionId() {
    return this._sessionId;
  }
  async terminateSession() {
    if (!this._sessionId) return;
    try {
      let e = await this._commonHeaders(),
        t = {
          ...this._requestInit,
          method: "DELETE",
          headers: e,
          signal: this._abortController?.signal,
        },
        r = await (this._fetch ?? fetch)(this._url, t);
      if ((await r.text?.().catch(() => {}), !r.ok && r.status !== 405))
        throw new SdkHttpError(
          ProtocolErrorCode.ClientHttpFailedToTerminateSession,
          `Failed to terminate session: ${r.statusText}`,
          { status: r.status, statusText: r.statusText },
        );
      this._sessionId = void 0;
    } catch (e) {
      throw (this.onerror?.(e), e);
    }
  }
  setProtocolVersion(e) {
    this._protocolVersion = e;
  }
  get protocolVersion() {
    return this._protocolVersion;
  }
  async resumeStream(e, t) {
    await this._startOrAuthSse({
      resumptionToken: e,
      onresumptiontoken: t?.onresumptiontoken,
    });
  }
};
export {
  OAuthErrorCode,
  OAuthError,
  ProtocolErrorCode,
  SdkError,
  SdkHttpError,
  ErrorCode,
  ProtocolError,
  isJSONRPCRequest,
  isJSONRPCNotification,
  isJSONRPCResultResponse,
  isJSONRPCErrorResponse,
  ReadBuffer,
  deserializeMessage,
  serializeMessage,
  createFetchWithInit,
  AjvJsonSchemaValidator,
  IssuerMismatchError,
  RegistrationRejectedError,
  UnauthorizedError,
  auth,
  discoverOAuthProtectedResourceMetadata,
  discoverAuthorizationServerMetadata,
  discoverOAuthServerInfo,
  startAuthorization,
  exchangeAuthorization,
  refreshAuthorization,
  Client,
  SSEClientTransport,
  StreamableHTTPClientTransport,
};
