// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, ke } from "../lodash/lodash.2x3q7cfh.js";
import { Ie, po, rs } from "../lodash/lodash.207999qb.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../lodash/lodash.0vqzb8ad.js";
import { getFsSurface, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { hasNodeOption } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Mnt, default as at } from "../axios/axios.t0fczzmz.js";
import { a_ } from "../which-isexe/isexe.knmpyrza.js";
import { serializeAsyncCalls } from "../../01-核心基础设施/核心工具-并发与缓存/async-serialization.js";
import { isLoopbackHostname } from "../../01-核心基础设施/核心工具-路径与平台/is-loopback-hostname.js";
import { dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { toESM, commonJS, importMetaRequire } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var De = commonJS(function (S) {
  var It =
      (S && S.__createBinding) ||
      (Object.create
        ? function (e, t, r, o) {
            if (o === void 0) o = r;
            var s = Object.getOwnPropertyDescriptor(t, r);
            if (
              !s ||
              ("get" in s ? !t.__esModule : s.writable || s.configurable)
            )
              s = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              };
            Object.defineProperty(e, o, s);
          }
        : function (e, t, r, o) {
            if (o === void 0) o = r;
            e[o] = t[r];
          }),
    Dt =
      (S && S.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    Oe =
      (S && S.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var r in e)
            if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r))
              It(t, e, r);
        }
        return (Dt(t, e), t);
      };
  Object.defineProperty(S, "__esModule", { value: !0 });
  S.req = S.json = S.toBuffer = void 0;
  var Ut = Oe(importMetaRequire("http")),
    Nt = Oe(importMetaRequire("https"));
  async function He(e) {
    let t = 0,
      r = [];
    for await (let o of e) ((t += o.length), r.push(o));
    return Buffer.concat(r, t);
  }
  S.toBuffer = He;
  async function $t(e) {
    let r = (await He(e)).toString("utf8");
    try {
      return JSON.parse(r);
    } catch (o) {
      let s = o;
      throw ((s.message += ` (input: ${r})`), s);
    }
  }
  S.json = $t;
  function Ft(e, t = {}) {
    let o = (
        (typeof e === "string" ? e : e.href).startsWith("https:") ? Nt : Ut
      ).request(e, t),
      s = new Promise((i, c) => {
        o.once("response", i).once("error", c).end();
      });
    return ((o.then = s.then.bind(s)), o);
  }
  S.req = Ft;
});
var H0n = commonJS(function (v) {
  var Ne =
      (v && v.__createBinding) ||
      (Object.create
        ? function (e, t, r, o) {
            if (o === void 0) o = r;
            var s = Object.getOwnPropertyDescriptor(t, r);
            if (
              !s ||
              ("get" in s ? !t.__esModule : s.writable || s.configurable)
            )
              s = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              };
            Object.defineProperty(e, o, s);
          }
        : function (e, t, r, o) {
            if (o === void 0) o = r;
            e[o] = t[r];
          }),
    Mt =
      (v && v.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    $e =
      (v && v.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var r in e)
            if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r))
              Ne(t, e, r);
        }
        return (Mt(t, e), t);
      },
    Bt =
      (v && v.__exportStar) ||
      function (e, t) {
        for (var r in e)
          if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r))
            Ne(t, e, r);
      };
  Object.defineProperty(v, "__esModule", { value: !0 });
  v.Agent = void 0;
  var jt = $e(importMetaRequire("net")),
    Ue = $e(importMetaRequire("http")),
    qt = importMetaRequire("https");
  Bt(De(), v);
  var I = Symbol("AgentBaseInternalState");
  class Fe extends Ue.Agent {
    constructor(e) {
      super(e);
      this[I] = {};
    }
    isSecureEndpoint(e) {
      if (e) {
        if (typeof e.secureEndpoint === "boolean") return e.secureEndpoint;
        if (typeof e.protocol === "string") return e.protocol === "https:";
      }
      let { stack: t } = Error();
      if (typeof t !== "string") return !1;
      return t
        .split(
          `
`,
        )
        .some(
          (r) =>
            r.indexOf("(https.js:") !== -1 || r.indexOf("node:https:") !== -1,
        );
    }
    incrementSockets(e) {
      if (this.maxSockets === 1 / 0 && this.maxTotalSockets === 1 / 0)
        return null;
      if (!this.sockets[e]) this.sockets[e] = [];
      let t = new jt.Socket({ writable: !1 });
      return (this.sockets[e].push(t), this.totalSocketCount++, t);
    }
    decrementSockets(e, t) {
      if (!this.sockets[e] || t === null) return;
      let r = this.sockets[e],
        o = r.indexOf(t);
      if (o !== -1) {
        if ((r.splice(o, 1), this.totalSocketCount--, r.length === 0))
          delete this.sockets[e];
      }
    }
    getName(e) {
      if (
        typeof e.secureEndpoint === "boolean"
          ? e.secureEndpoint
          : this.isSecureEndpoint(e)
      )
        return qt.Agent.prototype.getName.call(this, e);
      return super.getName(e);
    }
    createSocket(e, t, r) {
      let o = { ...t, secureEndpoint: this.isSecureEndpoint(t) },
        s = this.getName(o),
        i = this.incrementSockets(s);
      Promise.resolve()
        .then(() => this.connect(e, o))
        .then(
          (c) => {
            if ((this.decrementSockets(s, i), c instanceof Ue.Agent))
              try {
                return c.addRequest(e, o);
              } catch (u) {
                return r(u);
              }
            ((this[I].currentSocket = c), super.createSocket(e, t, r));
          },
          (c) => {
            (this.decrementSockets(s, i), r(c));
          },
        );
    }
    createConnection() {
      let e = this[I].currentSocket;
      if (((this[I].currentSocket = void 0), !e))
        throw Error("No socket was returned in the `connect()` function");
      return e;
    }
    get defaultPort() {
      return this[I].defaultPort ?? (this.protocol === "https:" ? 443 : 80);
    }
    set defaultPort(e) {
      if (this[I]) this[I].defaultPort = e;
    }
    get protocol() {
      return this[I].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
    }
    set protocol(e) {
      if (this[I]) this[I].protocol = e;
    }
  }
  v.Agent = Fe;
});
var Me = commonJS(function (q) {
  var Kt =
    (q && q.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(q, "__esModule", { value: !0 });
  q.parseProxyResponse = void 0;
  var Wt = Kt(Mnt()),
    z = (0, Wt.default)("https-proxy-agent:parse-proxy-response");
  function Yt(e) {
    return new Promise((t, r) => {
      let o = 0,
        s = [];
      function i() {
        let p = e.read();
        if (p) d(p);
        else e.once("readable", i);
      }
      function c() {
        (e.removeListener("end", u),
          e.removeListener("error", l),
          e.removeListener("readable", i));
      }
      function u() {
        (c(),
          z("onend"),
          r(Error("Proxy connection ended before receiving CONNECT response")));
      }
      function l(p) {
        (c(), z("onerror %o", p), r(p));
      }
      function d(p) {
        (s.push(p), (o += p.length));
        let m = Buffer.concat(s, o),
          T = m.indexOf(`\r
\r
`);
        if (T === -1) {
          (z("have not received end of HTTP headers yet..."), i());
          return;
        }
        let A = m.slice(0, T).toString("ascii").split(`\r
`),
          b = A.shift();
        if (!b)
          return (
            e.destroy(),
            r(Error("No header received from proxy CONNECT response"))
          );
        let F = b.split(" "),
          M = +F[1],
          k = F.slice(2).join(" "),
          R = {};
        for (let U of A) {
          if (!U) continue;
          let E = U.indexOf(":");
          if (E === -1)
            return (
              e.destroy(),
              r(Error(`Invalid header from proxy CONNECT response: "${U}"`))
            );
          let P = U.slice(0, E).toLowerCase(),
            O = U.slice(E + 1).trimStart(),
            h = R[P];
          if (typeof h === "string") R[P] = [h, O];
          else if (Array.isArray(h)) h.push(O);
          else R[P] = O;
        }
        (z("got proxy server response: %o %o", b, R),
          c(),
          t({
            connect: { statusCode: M, statusText: k, headers: R },
            buffered: m,
          }));
      }
      (e.on("error", l), e.on("end", u), i());
    });
  }
  q.parseProxyResponse = Yt;
});
var Hke = commonJS(function (L) {
  var Xt =
      (L && L.__createBinding) ||
      (Object.create
        ? function (e, t, r, o) {
            if (o === void 0) o = r;
            var s = Object.getOwnPropertyDescriptor(t, r);
            if (
              !s ||
              ("get" in s ? !t.__esModule : s.writable || s.configurable)
            )
              s = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              };
            Object.defineProperty(e, o, s);
          }
        : function (e, t, r, o) {
            if (o === void 0) o = r;
            e[o] = t[r];
          }),
    zt =
      (L && L.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    Ke =
      (L && L.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var r in e)
            if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r))
              Xt(t, e, r);
        }
        return (zt(t, e), t);
      },
    We =
      (L && L.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(L, "__esModule", { value: !0 });
  L.HttpsProxyAgent = void 0;
  var V = Ke(importMetaRequire("net")),
    Be = Ke(importMetaRequire("tls")),
    Vt = We(importMetaRequire("assert")),
    Gt = We(Mnt()),
    Qt = H0n(),
    Jt = importMetaRequire("url"),
    Zt = Me(),
    W = (0, Gt.default)("https-proxy-agent"),
    je = (e) => {
      if (e.servername === void 0 && e.host && !V.isIP(e.host))
        return { ...e, servername: e.host };
      return e;
    };
  class se extends Qt.Agent {
    constructor(e, t) {
      super(t);
      ((this.options = { path: void 0 }),
        (this.proxy = typeof e === "string" ? new Jt.URL(e) : e),
        (this.proxyHeaders = t?.headers ?? {}),
        W("Creating new HttpsProxyAgent instance: %o", this.proxy.href));
      let r = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
        o = this.proxy.port
          ? parseInt(this.proxy.port, 10)
          : this.proxy.protocol === "https:"
            ? 443
            : 80;
      this.connectOpts = {
        ALPNProtocols: ["http/1.1"],
        ...(t ? qe(t, "headers") : null),
        host: r,
        port: o,
      };
    }
    async connect(e, t) {
      let { proxy: r } = this;
      if (!t.host) throw TypeError('No "host" provided');
      let o;
      if (r.protocol === "https:")
        (W("Creating `tls.Socket`: %o", this.connectOpts),
          (o = Be.connect(je(this.connectOpts))));
      else
        (W("Creating `net.Socket`: %o", this.connectOpts),
          (o = V.connect(this.connectOpts)));
      let s =
          typeof this.proxyHeaders === "function"
            ? this.proxyHeaders()
            : { ...this.proxyHeaders },
        i = V.isIPv6(t.host) ? `[${t.host}]` : t.host,
        c = `CONNECT ${i}:${t.port} HTTP/1.1\r
`;
      if (r.username || r.password) {
        let m = `${decodeURIComponent(r.username)}:${decodeURIComponent(r.password)}`;
        s["Proxy-Authorization"] = `Basic ${Buffer.from(m).toString("base64")}`;
      }
      if (((s.Host = `${i}:${t.port}`), !s["Proxy-Connection"]))
        s["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      for (let m of Object.keys(s))
        c += `${m}: ${s[m]}\r
`;
      let u = (0, Zt.parseProxyResponse)(o);
      o.write(`${c}\r
`);
      let { connect: l, buffered: d } = await u;
      if (
        (e.emit("proxyConnect", l),
        this.emit("proxyConnect", l, e),
        l.statusCode === 200)
      ) {
        if ((e.once("socket", en), t.secureEndpoint))
          return (
            W("Upgrading socket connection to TLS"),
            Be.connect({ ...qe(je(t), "host", "path", "port"), socket: o })
          );
        return o;
      }
      o.destroy();
      let p = new V.Socket({ writable: !1 });
      return (
        (p.readable = !0),
        e.once("socket", (m) => {
          (W("Replaying proxy buffer for failed request"),
            (0, Vt.default)(m.listenerCount("data") > 0),
            m.push(d),
            m.push(null));
        }),
        p
      );
    }
  }
  se.protocols = ["http", "https"];
  L.HttpsProxyAgent = se;
  function en(e) {
    e.resume();
  }
  function qe(e, ...t) {
    let r = {},
      o;
    for (o in e) if (!t.includes(o)) r[o] = e[o];
    return r;
  }
});
var UQ = commonJS(function (cn) {
  cn.HttpAuthLocation = void 0;
  (function (e) {
    ((e.HEADER = "header"), (e.QUERY = "query"));
  })(cn.HttpAuthLocation || (cn.HttpAuthLocation = {}));
  cn.HttpApiKeyAuthLocation = void 0;
  (function (e) {
    ((e.HEADER = "header"), (e.QUERY = "query"));
  })(cn.HttpApiKeyAuthLocation || (cn.HttpApiKeyAuthLocation = {}));
  cn.EndpointURLScheme = void 0;
  (function (e) {
    ((e.HTTP = "http"), (e.HTTPS = "https"));
  })(cn.EndpointURLScheme || (cn.EndpointURLScheme = {}));
  cn.AlgorithmId = void 0;
  (function (e) {
    ((e.MD5 = "md5"),
      (e.CRC32 = "crc32"),
      (e.CRC32C = "crc32c"),
      (e.SHA1 = "sha1"),
      (e.SHA256 = "sha256"));
  })(cn.AlgorithmId || (cn.AlgorithmId = {}));
  var tn = (e) => {
      let t = [];
      if (e.sha256 !== void 0)
        t.push({
          algorithmId: () => cn.AlgorithmId.SHA256,
          checksumConstructor: () => e.sha256,
        });
      if (e.md5 != null)
        t.push({
          algorithmId: () => cn.AlgorithmId.MD5,
          checksumConstructor: () => e.md5,
        });
      return {
        addChecksumAlgorithm(r) {
          t.push(r);
        },
        checksumAlgorithms() {
          return t;
        },
      };
    },
    nn = (e) => {
      let t = {};
      return (
        e.checksumAlgorithms().forEach((r) => {
          t[r.algorithmId()] = r.checksumConstructor();
        }),
        t
      );
    },
    rn = (e) => tn(e),
    on = (e) => nn(e);
  cn.FieldPosition = void 0;
  (function (e) {
    ((e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER"));
  })(cn.FieldPosition || (cn.FieldPosition = {}));
  var sn = "__smithy_context";
  cn.IniSectionType = void 0;
  (function (e) {
    ((e.PROFILE = "profile"),
      (e.SSO_SESSION = "sso-session"),
      (e.SERVICES = "services"));
  })(cn.IniSectionType || (cn.IniSectionType = {}));
  cn.RequestHandlerProtocol = void 0;
  (function (e) {
    ((e.HTTP_0_9 = "http/0.9"),
      (e.HTTP_1_0 = "http/1.0"),
      (e.TDS_8_0 = "tds/8.0"));
  })(cn.RequestHandlerProtocol || (cn.RequestHandlerProtocol = {}));
  cn.SMITHY_CONTEXT_KEY = sn;
  cn.getDefaultClientConfiguration = rn;
  cn.resolveDefaultRuntimeConfig = on;
});
var nu = commonJS(function (mn) {
  var fn = UQ(),
    dn = (e) => ({
      setHttpHandler(t) {
        e.httpHandler = t;
      },
      httpHandler() {
        return e.httpHandler;
      },
      updateHttpClientConfig(t, r) {
        e.httpHandler?.updateHttpClientConfig(t, r);
      },
      httpHandlerConfigs() {
        return e.httpHandler.httpHandlerConfigs();
      },
    }),
    pn = (e) => ({ httpHandler: e.httpHandler() });
  class Ye {
    name;
    kind;
    values;
    constructor({
      name: e,
      kind: t = fn.FieldPosition.HEADER,
      values: r = [],
    }) {
      ((this.name = e), (this.kind = t), (this.values = r));
    }
    add(e) {
      this.values.push(e);
    }
    set(e) {
      this.values = e;
    }
    remove(e) {
      this.values = this.values.filter((t) => t !== e);
    }
    toString() {
      return this.values
        .map((e) => (e.includes(",") || e.includes(" ") ? `"${e}"` : e))
        .join(", ");
    }
    get() {
      return this.values;
    }
  }
  class Xe {
    entries = {};
    encoding;
    constructor({ fields: e = [], encoding: t = "utf-8" }) {
      (e.forEach(this.setField.bind(this)), (this.encoding = t));
    }
    setField(e) {
      this.entries[e.name.toLowerCase()] = e;
    }
    getField(e) {
      return this.entries[e.toLowerCase()];
    }
    removeField(e) {
      delete this.entries[e.toLowerCase()];
    }
    getByType(e) {
      return Object.values(this.entries).filter((t) => t.kind === e);
    }
  }
  class G {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(e) {
      ((this.method = e.method || "GET"),
        (this.hostname = e.hostname || "localhost"),
        (this.port = e.port),
        (this.query = e.query || {}),
        (this.headers = e.headers || {}),
        (this.body = e.body),
        (this.protocol = e.protocol
          ? e.protocol.slice(-1) !== ":"
            ? `${e.protocol}:`
            : e.protocol
          : "https:"),
        (this.path = e.path
          ? e.path.charAt(0) !== "/"
            ? `/${e.path}`
            : e.path
          : "/"),
        (this.username = e.username),
        (this.password = e.password),
        (this.fragment = e.fragment));
    }
    static clone(e) {
      let t = new G({ ...e, headers: { ...e.headers } });
      if (t.query) t.query = hn(t.query);
      return t;
    }
    static isInstance(e) {
      if (!e) return !1;
      let t = e;
      return (
        "method" in t &&
        "protocol" in t &&
        "hostname" in t &&
        "path" in t &&
        typeof t.query === "object" &&
        typeof t.headers === "object"
      );
    }
    clone() {
      return G.clone(this);
    }
  }
  function hn(e) {
    return Object.keys(e).reduce((t, r) => {
      let o = e[r];
      return { ...t, [r]: Array.isArray(o) ? [...o] : o };
    }, {});
  }
  class ze {
    statusCode;
    reason;
    headers;
    body;
    constructor(e) {
      ((this.statusCode = e.statusCode),
        (this.reason = e.reason),
        (this.headers = e.headers || {}),
        (this.body = e.body));
    }
    static isInstance(e) {
      if (!e) return !1;
      let t = e;
      return typeof t.statusCode === "number" && typeof t.headers === "object";
    }
  }
  function gn(e) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(e);
  }
  mn.Field = Ye;
  mn.Fields = Xe;
  mn.HttpRequest = G;
  mn.HttpResponse = ze;
  mn.getHttpHandlerExtensionConfiguration = dn;
  mn.isValidHostname = gn;
  mn.resolveHttpHandlerRuntimeConfig = pn;
});
var E0n = commonJS(function (vn) {
  var Ve = (e) => encodeURIComponent(e).replace(/[!'()*]/g, Sn),
    Sn = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
    Pn = (e) => e.split("/").map(Ve).join("/");
  vn.escapeUri = Ve;
  vn.escapeUriPath = Pn;
});
var A0n = commonJS(function (Rn) {
  var he = E0n();
  function Ln(e) {
    let t = [];
    for (let r of Object.keys(e).sort()) {
      let o = e[r];
      if (((r = he.escapeUri(r)), Array.isArray(o)))
        for (let s = 0, i = o.length; s < i; s++)
          t.push(`${r}=${he.escapeUri(o[s])}`);
      else {
        let s = r;
        if (o || typeof o === "string") s += `=${he.escapeUri(o)}`;
        t.push(s);
      }
    }
    return t.join("&");
  }
  Rn.buildQueryString = Ln;
});
var EA = commonJS(function (qn) {
  var Ze = nu(),
    et = A0n(),
    Q = importMetaRequire("http"),
    J = importMetaRequire("https"),
    tt = importMetaRequire("stream"),
    ge = importMetaRequire("http2"),
    Hn = ["ECONNRESET", "EPIPE", "ETIMEDOUT"],
    nt = (e) => {
      let t = {};
      for (let r of Object.keys(e)) {
        let o = e[r];
        t[r] = Array.isArray(o) ? o.join(",") : o;
      }
      return t;
    },
    _ = {
      setTimeout: (e, t) => setTimeout(e, t),
      clearTimeout: (e) => clearTimeout(e),
    },
    Ge = 1000,
    kn = (e, t, r = 0) => {
      if (!r) return -1;
      let o = (s) => {
        let i = _.setTimeout(() => {
            (e.destroy(),
              t(
                Object.assign(
                  Error(
                    `@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${r} ms.`,
                  ),
                  { name: "TimeoutError" },
                ),
              ));
          }, r - s),
          c = (u) => {
            if (u?.connecting)
              u.on("connect", () => {
                _.clearTimeout(i);
              });
            else _.clearTimeout(i);
          };
        if (e.socket) c(e.socket);
        else e.on("socket", c);
      };
      if (r < 2000) return (o(0), 0);
      return _.setTimeout(o.bind(null, Ge), Ge);
    },
    In = (e, t, r = 0, o, s) => {
      if (r)
        return _.setTimeout(() => {
          let i = `@smithy/node-http-handler - [${o ? "ERROR" : "WARN"}] a request has exceeded the configured ${r} ms requestTimeout.`;
          if (o) {
            let c = Object.assign(Error(i), {
              name: "TimeoutError",
              code: "ETIMEDOUT",
            });
            (e.destroy(c), t(c));
          } else
            ((i +=
              " Init client requestHandler with throwOnRequestTimeout=true to turn this into an error."),
              s?.warn?.(i));
        }, r);
      return -1;
    },
    Dn = 3000,
    Un = (e, { keepAlive: t, keepAliveMsecs: r }, o = Dn) => {
      if (t !== !0) return -1;
      let s = () => {
        if (e.socket) e.socket.setKeepAlive(t, r || 0);
        else
          e.on("socket", (i) => {
            i.setKeepAlive(t, r || 0);
          });
      };
      if (o === 0) return (s(), 0);
      return _.setTimeout(s, o);
    },
    Qe = 3000,
    Nn = (e, t, r = 0) => {
      let o = (s) => {
        let i = r - s,
          c = () => {
            (e.destroy(),
              t(
                Object.assign(
                  Error(
                    `@smithy/node-http-handler - the request socket timed out after ${r} ms of inactivity (configured by client requestHandler).`,
                  ),
                  { name: "TimeoutError" },
                ),
              ));
          };
        if (e.socket)
          (e.socket.setTimeout(i, c),
            e.on("close", () => e.socket?.removeListener("timeout", c)));
        else e.setTimeout(i, c);
      };
      if (0 < r && r < 6000) return (o(0), 0);
      return _.setTimeout(o.bind(null, r === 0 ? 0 : Qe), Qe);
    },
    Je = 6000;
  async function rt(e, t, r = Je, o = !1) {
    let s = t.headers ?? {},
      i = s.Expect || s.expect,
      c = -1,
      u = !0;
    if (!o && i === "100-continue")
      u = await Promise.race([
        new Promise((l) => {
          c = Number(_.setTimeout(() => l(!0), Math.max(Je, r)));
        }),
        new Promise((l) => {
          (e.on("continue", () => {
            (_.clearTimeout(c), l(!0));
          }),
            e.on("response", () => {
              (_.clearTimeout(c), l(!1));
            }),
            e.on("error", () => {
              (_.clearTimeout(c), l(!1));
            }));
        }),
      ]);
    if (u) $n(e, t.body);
  }
  function $n(e, t) {
    if (t instanceof tt.Readable) {
      t.pipe(e);
      return;
    }
    if (t) {
      if (Buffer.isBuffer(t) || typeof t === "string") {
        e.end(t);
        return;
      }
      let r = t;
      if (
        typeof r === "object" &&
        r.buffer &&
        typeof r.byteOffset === "number" &&
        typeof r.byteLength === "number"
      ) {
        e.end(Buffer.from(r.buffer, r.byteOffset, r.byteLength));
        return;
      }
      e.end(Buffer.from(t));
      return;
    }
    e.end();
  }
  var Fn = 0;
  class Z {
    config;
    configProvider;
    socketWarningTimestamp = 0;
    externalAgent = !1;
    metadata = { handlerProtocol: "http/1.1" };
    static create(e) {
      if (typeof e?.handle === "function") return e;
      return new Z(e);
    }
    static checkSocketUsage(e, t, r = console) {
      let { sockets: o, requests: s, maxSockets: i } = e;
      if (typeof i !== "number" || i === 1 / 0) return t;
      let c = 15000;
      if (Date.now() - c < t) return t;
      if (o && s)
        for (let u in o) {
          let l = o[u]?.length ?? 0,
            d = s[u]?.length ?? 0;
          if (l >= i && d >= 2 * i)
            return (
              r?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${l} and ${d} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`),
              Date.now()
            );
        }
      return t;
    }
    constructor(e) {
      this.configProvider = new Promise((t, r) => {
        if (typeof e === "function")
          e()
            .then((o) => {
              t(this.resolveDefaultConfig(o));
            })
            .catch(r);
        else t(this.resolveDefaultConfig(e));
      });
    }
    resolveDefaultConfig(e) {
      let {
          requestTimeout: t,
          connectionTimeout: r,
          socketTimeout: o,
          socketAcquisitionWarningTimeout: s,
          httpAgent: i,
          httpsAgent: c,
          throwOnRequestTimeout: u,
        } = e || {},
        l = !0,
        d = 50;
      return {
        connectionTimeout: r,
        requestTimeout: t,
        socketTimeout: o,
        socketAcquisitionWarningTimeout: s,
        throwOnRequestTimeout: u,
        httpAgent: (() => {
          if (i instanceof Q.Agent || typeof i?.destroy === "function")
            return ((this.externalAgent = !0), i);
          return new Q.Agent({ keepAlive: !0, maxSockets: 50, ...i });
        })(),
        httpsAgent: (() => {
          if (c instanceof J.Agent || typeof c?.destroy === "function")
            return ((this.externalAgent = !0), c);
          return new J.Agent({ keepAlive: !0, maxSockets: 50, ...c });
        })(),
        logger: console,
      };
    }
    destroy() {
      (this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy());
    }
    async handle(e, { abortSignal: t, requestTimeout: r } = {}) {
      if (!this.config) this.config = await this.configProvider;
      return new Promise((o, s) => {
        let i = this.config,
          c = void 0,
          u = [],
          l = async (h) => {
            (await c, u.forEach(_.clearTimeout), o(h));
          },
          d = async (h) => {
            (await c, u.forEach(_.clearTimeout), s(h));
          };
        if (t?.aborted) {
          let h = Error("Request aborted");
          ((h.name = "AbortError"), d(h));
          return;
        }
        let p = e.protocol === "https:",
          m = e.headers ?? {},
          T = (m.Expect ?? m.expect) === "100-continue",
          A = p ? i.httpsAgent : i.httpAgent;
        if (T && !this.externalAgent)
          A = new (p ? J.Agent : Q.Agent)({ keepAlive: !1, maxSockets: 1 / 0 });
        u.push(
          _.setTimeout(
            () => {
              this.socketWarningTimestamp = Z.checkSocketUsage(
                A,
                this.socketWarningTimestamp,
                i.logger,
              );
            },
            i.socketAcquisitionWarningTimeout ??
              (i.requestTimeout ?? 2000) + (i.connectionTimeout ?? 1000),
          ),
        );
        let b = et.buildQueryString(e.query || {}),
          F = void 0;
        if (e.username != null || e.password != null) {
          let h = e.username ?? "",
            C = e.password ?? "";
          F = `${h}:${C}`;
        }
        let M = e.path;
        if (b) M += `?${b}`;
        if (e.fragment) M += `#${e.fragment}`;
        let k = e.hostname ?? "";
        if (k[0] === "[" && k.endsWith("]")) k = e.hostname.slice(1, -1);
        else k = e.hostname;
        let R = {
            headers: e.headers,
            host: k,
            method: e.method,
            path: M,
            port: e.port,
            agent: A,
            auth: F,
          },
          E = (p ? J.request : Q.request)(R, (h) => {
            let C = new Ze.HttpResponse({
              statusCode: h.statusCode || -1,
              reason: h.statusMessage,
              headers: nt(h.headers),
              body: h,
            });
            l({ response: C });
          });
        if (
          (E.on("error", (h) => {
            if (Hn.includes(h.code))
              d(Object.assign(h, { name: "TimeoutError" }));
            else d(h);
          }),
          t)
        ) {
          let h = () => {
            E.destroy();
            let C = Error("Request aborted");
            ((C.name = "AbortError"), d(C));
          };
          if (typeof t.addEventListener === "function") {
            let C = t;
            (C.addEventListener("abort", h, { once: !0 }),
              E.once("close", () => C.removeEventListener("abort", h)));
          } else t.onabort = h;
        }
        let P = r ?? i.requestTimeout;
        (u.push(kn(E, d, i.connectionTimeout)),
          u.push(In(E, d, P, i.throwOnRequestTimeout, i.logger ?? console)),
          u.push(Nn(E, d, i.socketTimeout)));
        let O = R.agent;
        if (typeof O === "object" && "keepAlive" in O)
          u.push(
            Un(E, { keepAlive: O.keepAlive, keepAliveMsecs: O.keepAliveMsecs }),
          );
        c = rt(E, e, P, this.externalAgent).catch(
          (h) => (u.forEach(_.clearTimeout), s(h)),
        );
      });
    }
    updateHttpClientConfig(e, t) {
      ((this.config = void 0),
        (this.configProvider = this.configProvider.then((r) => ({
          ...r,
          [e]: t,
        }))));
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
  }
  class ot {
    sessions = [];
    constructor(e) {
      this.sessions = e ?? [];
    }
    poll() {
      if (this.sessions.length > 0) return this.sessions.shift();
    }
    offerLast(e) {
      this.sessions.push(e);
    }
    contains(e) {
      return this.sessions.includes(e);
    }
    remove(e) {
      this.sessions = this.sessions.filter((t) => t !== e);
    }
    [Symbol.iterator]() {
      return this.sessions[Symbol.iterator]();
    }
    destroy(e) {
      for (let t of this.sessions)
        if (t === e) {
          if (!t.destroyed) t.destroy();
        }
    }
  }
  class st {
    constructor(e) {
      if (
        ((this.config = e),
        this.config.maxConcurrency && this.config.maxConcurrency <= 0)
      )
        throw RangeError("maxConcurrency must be greater than zero.");
    }
    config;
    sessionCache = new Map();
    lease(e, t) {
      let r = this.getUrlString(e),
        o = this.sessionCache.get(r);
      if (o) {
        let u = o.poll();
        if (u && !this.config.disableConcurrency) return u;
      }
      let s = ge.connect(r);
      if (this.config.maxConcurrency)
        s.settings(
          { maxConcurrentStreams: this.config.maxConcurrency },
          (u) => {
            if (u)
              throw Error(
                "Fail to set maxConcurrentStreams to " +
                  this.config.maxConcurrency +
                  "when creating new session for " +
                  e.destination.toString(),
              );
          },
        );
      s.unref();
      let i = () => {
        (s.destroy(), this.deleteSession(r, s));
      };
      if (
        (s.on("goaway", i),
        s.on("error", i),
        s.on("frameError", i),
        s.on("close", () => this.deleteSession(r, s)),
        t.requestTimeout)
      )
        s.setTimeout(t.requestTimeout, i);
      let c = this.sessionCache.get(r) || new ot();
      return (c.offerLast(s), this.sessionCache.set(r, c), s);
    }
    deleteSession(e, t) {
      let r = this.sessionCache.get(e);
      if (!r) return;
      if (!r.contains(t)) return;
      (r.remove(t), this.sessionCache.set(e, r));
    }
    release(e, t) {
      let r = this.getUrlString(e);
      this.sessionCache.get(r)?.offerLast(t);
    }
    destroy() {
      for (let [e, t] of this.sessionCache) {
        for (let r of t) {
          if (!r.destroyed) r.destroy();
          t.remove(r);
        }
        this.sessionCache.delete(e);
      }
    }
    setMaxConcurrentStreams(e) {
      if (e && e <= 0)
        throw RangeError("maxConcurrentStreams must be greater than zero.");
      this.config.maxConcurrency = e;
    }
    setDisableConcurrentStreams(e) {
      this.config.disableConcurrency = e;
    }
    getUrlString(e) {
      return e.destination.toString();
    }
  }
  class me {
    config;
    configProvider;
    metadata = { handlerProtocol: "h2" };
    connectionManager = new st({});
    static create(e) {
      if (typeof e?.handle === "function") return e;
      return new me(e);
    }
    constructor(e) {
      this.configProvider = new Promise((t, r) => {
        if (typeof e === "function")
          e()
            .then((o) => {
              t(o || {});
            })
            .catch(r);
        else t(e || {});
      });
    }
    destroy() {
      this.connectionManager.destroy();
    }
    async handle(e, { abortSignal: t, requestTimeout: r } = {}) {
      if (!this.config) {
        if (
          ((this.config = await this.configProvider),
          this.connectionManager.setDisableConcurrentStreams(
            this.config.disableConcurrentStreams || !1,
          ),
          this.config.maxConcurrentStreams)
        )
          this.connectionManager.setMaxConcurrentStreams(
            this.config.maxConcurrentStreams,
          );
      }
      let { requestTimeout: o, disableConcurrentStreams: s } = this.config,
        i = r ?? o;
      return new Promise((c, u) => {
        let l = !1,
          d = void 0,
          p = async (x) => {
            (await d, c(x));
          },
          m = async (x) => {
            (await d, u(x));
          };
        if (t?.aborted) {
          l = !0;
          let x = Error("Request aborted");
          ((x.name = "AbortError"), m(x));
          return;
        }
        let { hostname: T, method: A, port: b, protocol: F, query: M } = e,
          k = "";
        if (e.username != null || e.password != null) {
          let x = e.username ?? "",
            H = e.password ?? "";
          k = `${x}:${H}@`;
        }
        let R = `${F}//${k}${T}${b ? `:${b}` : ""}`,
          U = { destination: new URL(R) },
          E = this.connectionManager.lease(U, {
            requestTimeout: this.config?.sessionTimeout,
            disableConcurrentStreams: s || !1,
          }),
          P = (x) => {
            if (s) this.destroySession(E);
            ((l = !0), m(x));
          },
          O = et.buildQueryString(M || {}),
          h = e.path;
        if (O) h += `?${O}`;
        if (e.fragment) h += `#${e.fragment}`;
        let C = E.request({
          ...e.headers,
          [ge.constants.HTTP2_HEADER_PATH]: h,
          [ge.constants.HTTP2_HEADER_METHOD]: A,
        });
        if (
          (E.ref(),
          C.on("response", (x) => {
            let H = new Ze.HttpResponse({
              statusCode: x[":status"] || -1,
              headers: nt(x),
              body: C,
            });
            if (((l = !0), p({ response: H }), s))
              (E.close(), this.connectionManager.deleteSession(R, E));
          }),
          i)
        )
          C.setTimeout(i, () => {
            C.close();
            let x = Error(
              `Stream timed out because of no activity for ${i} ms`,
            );
            ((x.name = "TimeoutError"), P(x));
          });
        if (t) {
          let x = () => {
            C.close();
            let H = Error("Request aborted");
            ((H.name = "AbortError"), P(H));
          };
          if (typeof t.addEventListener === "function") {
            let H = t;
            (H.addEventListener("abort", x, { once: !0 }),
              C.once("close", () => H.removeEventListener("abort", x)));
          } else t.onabort = x;
        }
        (C.on("frameError", (x, H, Tt) => {
          P(
            Error(
              `Frame type id ${x} in stream id ${Tt} has failed with code ${H}.`,
            ),
          );
        }),
          C.on("error", P),
          C.on("aborted", () => {
            P(
              Error(
                `HTTP/2 stream is abnormally aborted in mid-communication with result code ${C.rstCode}.`,
              ),
            );
          }),
          C.on("close", () => {
            if ((E.unref(), s)) E.destroy();
            if (!l)
              P(
                Error("Unexpected error: http2 request did not get a response"),
              );
          }),
          (d = rt(C, e, i)));
      });
    }
    updateHttpClientConfig(e, t) {
      ((this.config = void 0),
        (this.configProvider = this.configProvider.then((r) => ({
          ...r,
          [e]: t,
        }))));
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
    destroySession(e) {
      if (!e.destroyed) e.destroy();
    }
  }
  class it extends tt.Writable {
    bufferedBytes = [];
    _write(e, t, r) {
      (this.bufferedBytes.push(e), r());
    }
  }
  var Mn = (e) => {
      if (Bn(e)) return jn(e);
      return new Promise((t, r) => {
        let o = new it();
        (e.pipe(o),
          e.on("error", (s) => {
            (o.end(), r(s));
          }),
          o.on("error", r),
          o.on("finish", function () {
            let s = new Uint8Array(Buffer.concat(this.bufferedBytes));
            t(s);
          }));
      });
    },
    Bn = (e) =>
      typeof ReadableStream === "function" && e instanceof ReadableStream;
  async function jn(e) {
    let t = [],
      r = e.getReader(),
      o = !1,
      s = 0;
    while (!o) {
      let { done: u, value: l } = await r.read();
      if (l) (t.push(l), (s += l.length));
      o = u;
    }
    let i = new Uint8Array(s),
      c = 0;
    for (let u of t) (i.set(u, c), (c += u.length));
    return i;
  }
  qn.DEFAULT_REQUEST_TIMEOUT = Fn;
  qn.NodeHttp2Handler = me;
  qn.NodeHttpHandler = Z;
  qn.streamCollector = Mn;
});
var _e = ["bundled", "system"],
  te = new Set();
function N(e) {
  if (te.has(e)) return !1;
  return (te.add(e), !0);
}
class Te {
  extraCACerts = null;
  certificates = rs(() => bt(this));
}
var St = new j(() => new Te());
function re() {
  return St.of(B().host);
}
var loadExtraCACerts = serializeAsyncCalls(async () => {
  let e = re(),
    t = a.NODE_EXTRA_CA_CERTS;
  if (!t) {
    if (e.extraCACerts !== null) return ((e.extraCACerts = null), ne(e), !0);
    return !1;
  }
  try {
    let r = await getFsSurface().readFile(t, { encoding: "utf8" });
    if (e.extraCACerts?.path === t && e.extraCACerts.content === r) return !1;
    e.extraCACerts = { path: t, content: r };
  } catch (r) {
    if (
      (logForDebugging(`CA certs: Failed to read NODE_EXTRA_CA_CERTS file (${t}): ${r}`, {
        level: "error",
      }),
      N("read_failed"))
    )
      logFeatureBad("ca_certs_load", "read_failed");
    if (e.extraCACerts === null) return !1;
    e.extraCACerts = null;
  }
  return (ne(e), !0);
});
function Pt() {
  let e = a.CLAUDE_CODE_CERT_STORE;
  if (e) {
    let t = [];
    for (let r of e.split(",")) {
      let o = r.trim().toLowerCase();
      if (o === "bundled" || o === "system") {
        if (!t.includes(o)) t.push(o);
      } else if (o) {
        if (
          (logForDebugging(
            `CA certs: unrecognized CLAUDE_CODE_CERT_STORE source '${o}', ignoring`,
            { level: "warn" },
          ),
          N("parse_skip"))
        )
          logFeatureSad("ca_certs_load", "parse_skip");
      }
    }
    if (t.length === 0 && N("parse_all_invalid"))
      logFeatureSad("ca_certs_load", "parse_all_invalid");
    return t.length > 0 ? t : _e;
  }
  if (hasNodeOption("--use-system-ca") || hasNodeOption("--use-openssl-ca")) return ["system"];
  return _e;
}
function vt(e) {
  let { X509Certificate: t } = importMetaRequire("crypto"),
    r = Date.now(),
    o = 0,
    s = e.filter((i) => {
      try {
        let c = new t(i),
          u = new Date(c.validTo).getTime();
        if (Number.isNaN(u) || u > r) return !0;
        return (o++, !1);
      } catch {
        return !0;
      }
    });
  if (o > 0) {
    if (
      (logForDebugging(`CA certs: Dropped ${o} expired certificate(s) from system store`),
      N("expired_dropped"))
    )
      logFeatureSad("ca_certs_load", "expired_dropped", { dropped_count: o });
  }
  return s;
}
function getCACertificates() {
  return re().certificates();
}
function bt(e) {
  let t = Pt(),
    r = a.NODE_EXTRA_CA_CERTS,
    o = t.includes("bundled"),
    s = t.includes("system");
  logForDebugging(`CA certs: stores=${t.join(",")}, extraCertsPath=${r}`);
  let i = importMetaRequire("tls"),
    c = i.getCACertificates;
  if (!o && s && !c) {
    if (
      (logForDebugging(
        "CA certs: stores=system but system CA API unavailable, deferring to runtime",
      ),
      N("system_api_unavailable"))
    )
      logFeatureSad("ca_certs_load", "system_api_unavailable");
    return;
  }
  let u = [];
  if (o)
    (u.push(...i.rootCertificates),
      logForDebugging(
        `CA certs: Loaded ${i.rootCertificates.length} bundled root certificates`,
      ));
  if (s)
    try {
      let d = c?.("system");
      if (d && d.length > 0) {
        let p = vt(d);
        (u.push(...p),
          logForDebugging(`CA certs: Loaded ${p.length} system CA certificates`));
      } else if (
        (logForDebugging(`CA certs: system store ${c ? "returned empty" : "unavailable"}`),
        !o)
      )
        u.push(...i.rootCertificates);
    } catch (d) {
      if (
        (logForDebugging(`CA certs: Failed to load system CA certificates: ${d}`, {
          level: "error",
        }),
        N("system_store_failed"))
      )
        logFeatureSad("ca_certs_load", "system_store_failed");
      if (!o) u.push(...i.rootCertificates);
    }
  if (r) {
    if (e.extraCACerts?.path !== r)
      try {
        let d = getFsSurface().readFileSync(r, { encoding: "utf8" });
        e.extraCACerts = { path: r, content: d };
      } catch (d) {
        if (
          (logForDebugging(`CA certs: Failed to read NODE_EXTRA_CA_CERTS file (${r}): ${d}`, {
            level: "error",
          }),
          N("read_failed"))
        )
          logFeatureBad("ca_certs_load", "read_failed");
      }
    if (e.extraCACerts?.path === r)
      (u.push(e.extraCACerts.content),
        logForDebugging(
          `CA certs: Appended extra certificates from NODE_EXTRA_CA_CERTS (${r})`,
        ));
  }
  let l = u.length > 0 ? dedupe(u) : void 0;
  if (te.size === 0 && N("ok"))
    logFeatureOk("ca_certs_load", {
      cert_count: l?.length ?? 0,
      store_bundled: o,
      store_system: s,
      extra_configured: Boolean(r),
    });
  return l;
}
function clearCACertsCache() {
  ne(re());
}
function ne(e) {
  (e.certificates.cache.clear?.(), logForDebugging("Cleared CA certificates cache"));
}
import { createPrivateKey, X509Certificate as Lt } from "crypto";
import { Agent as Rt } from "https";
class be {
  clientCert = null;
  clientKey = null;
  config = rs(() => kt(this));
  agentCache = null;
}
var Ot = new j(() => new be());
function K() {
  return Ot.of(B().host);
}
var oe = "-----BEGIN ";
function we(e) {
  let t = e.lastIndexOf(oe);
  if (t === -1) return !1;
  let r = e.indexOf("-----", t + oe.length);
  if (r === -1) return !1;
  let o = e.slice(t + oe.length, r);
  return e.includes(`-----END ${o}-----`, r);
}
var PEM_CERT_BLOCK_RE = /-----BEGIN CERTIFICATE-----[\s\S]*?-----END CERTIFICATE-----/g;
function Ht(e, t) {
  let r;
  try {
    r = createPrivateKey({
      key: t,
      ...(a.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE && {
        passphrase: a.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE,
      }),
    });
  } catch {
    return !1;
  }
  let o = !1,
    s = !1;
  for (let i of e.match(PEM_CERT_BLOCK_RE) ?? [])
    try {
      if (new Lt(i).checkPrivateKey(r)) return !1;
      o = !0;
    } catch {
      s = !0;
    }
  return o && !s;
}
var Se = 1048576;
function Le(e, t) {
  if (!e.isFile() || e.size > Se)
    return (
      logForDebugging(`mTLS: Ignoring ${t} \u2014 not a regular file or over ${Se} bytes`, {
        level: "error",
      }),
      !1
    );
  return !0;
}
function Pe(e, t) {
  try {
    if (!Le(getFsSurface().statSync(e), t)) return null;
    let r = getFsSurface().readFileSync(e, { encoding: "utf8" });
    if (!we(r))
      return (
        logForDebugging(`mTLS: Ignoring incomplete ${t} \u2014 no PEM block`, {
          level: "error",
        }),
        null
      );
    return (logForDebugging(`mTLS: Loaded ${t}`), { path: e, content: r });
  } catch (r) {
    return (logForDebugging(`mTLS: Failed to load ${t}: ${r}`, { level: "error" }), null);
  }
}
async function ve(e, t) {
  try {
    if (!Le(await getFsSurface().stat(e), t)) return null;
    let r = await getFsSurface().readFile(e, { encoding: "utf8" });
    if (!we(r))
      return (
        logForDebugging(`mTLS: Ignoring incomplete ${t} \u2014 no PEM block`, {
          level: "error",
        }),
        null
      );
    return (logForDebugging(`mTLS: Loaded ${t}`), { path: e, content: r });
  } catch (r) {
    return (logForDebugging(`mTLS: Failed to load ${t}: ${r}`, { level: "error" }), null);
  }
}
var loadMTLSClientMaterial = serializeAsyncCalls(async () => {
  let e = K(),
    t = a.CLAUDE_CODE_CLIENT_CERT,
    r = a.CLAUDE_CODE_CLIENT_KEY,
    [o, s] = await Promise.all([
      t ? ve(t, "client certificate from CLAUDE_CODE_CLIENT_CERT") : null,
      r ? ve(r, "client key from CLAUDE_CODE_CLIENT_KEY") : null,
    ]),
    i = Boolean((t && !o) || (r && !s)),
    c = Boolean(!i && o && s && Ht(o.content, s.content));
  if (c)
    logForDebugging(
      "mTLS: Ignoring mismatched client cert/key pair \u2014 mid-rotation read",
      { level: "error" },
    );
  let u = i || c,
    l = t ? (u ? e.clientCert : o) : null,
    d = r ? (u ? e.clientKey : s) : null,
    p =
      e.clientCert?.path !== l?.path ||
      e.clientCert?.content !== l?.content ||
      e.clientKey?.path !== d?.path ||
      e.clientKey?.content !== d?.content;
  if (((e.clientCert = l), (e.clientKey = d), p)) Re(e);
  return { changed: p, readFailed: u, mismatched: c };
});
function getLoadedMTLSPaths() {
  let e = K();
  return { certPath: e.clientCert?.path, keyPath: e.clientKey?.path };
}
function getMTLSConfig() {
  return K().config();
}
function kt(e) {
  let t = {},
    r = a.CLAUDE_CODE_CLIENT_CERT;
  if (r) {
    if (e.clientCert?.path !== r)
      e.clientCert =
        Pe(r, "client certificate from CLAUDE_CODE_CLIENT_CERT") ??
        e.clientCert;
    if (e.clientCert?.path === r) t.cert = e.clientCert.content;
  }
  let o = a.CLAUDE_CODE_CLIENT_KEY;
  if (o) {
    if (e.clientKey?.path !== o)
      e.clientKey =
        Pe(o, "client key from CLAUDE_CODE_CLIENT_KEY") ?? e.clientKey;
    if (e.clientKey?.path === o) t.key = e.clientKey.content;
  }
  let s = a.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE;
  if (s) ((t.passphrase = s), logForDebugging("mTLS: Using client key passphrase"));
  if (Object.keys(t).length === 0) return;
  return t;
}
function getMTLSAgent() {
  let e = K(),
    t = getMTLSConfig(),
    r = getCACertificates();
  if (e.agentCache && e.agentCache.config === t && e.agentCache.ca === r)
    return e.agentCache.agent;
  let o;
  if (t || r) {
    let s = { ...t, ...(r && { ca: r }), keepAlive: !0 };
    (logForDebugging("mTLS: Creating HTTPS agent with custom certificates"), (o = new Rt(s)));
  }
  return ((e.agentCache = { config: t, ca: r, agent: o }), o);
}
function getWebSocketTLSOptions() {
  let e = getMTLSConfig(),
    t = getCACertificates();
  if (!e && !t) return;
  return { ...e, ...(t && { ca: t }) };
}
function getTLSFetchOptions() {
  let e = getMTLSConfig(),
    t = getCACertificates();
  if (!e && !t) return {};
  return { tls: { ...e, ...(t && { ca: t }) } };
}
function clearMTLSCache() {
  Re(K());
}
function Re(e) {
  (e.config.cache.clear?.(),
    (e.agentCache = null),
    logForDebugging("Cleared mTLS configuration cache"));
}
function configureGlobalMTLS() {
  if (!getMTLSConfig()) return;
  if (a.NODE_EXTRA_CA_CERTS)
    logForDebugging(
      "NODE_EXTRA_CA_CERTS detected - Node.js will automatically append to built-in CAs",
    );
}
var Ee = toESM(EA(), 1);
import { isIP } from "net";
function id(e, t) {
  return e;
}
import { domainToASCII } from "url";
var ut = /[\u3002\uFF0E\uFF61]/g,
  zn = /[\uFF1A\uFE55\uFE13]/g;
function c2e(e) {
  return e.replace(ut, ".").replace(zn, ":");
}
var lt = /^(0|[1-9]\d{0,2})(\.(0|[1-9]\d{0,2})){3}$/,
  Vn = /^(0x[0-9a-f]*|\d+)$/,
  ft =
    /[\x00-\x20\x7f#%/<>?@\\^|]|[\u180E\u206A-\u206F\u{2F868}\u{2F874}\u{2F91F}\u{2F95F}\u{2F9BF}]/u,
  Gn =
    /[\u00AD\u034F\u180B-\u180D\u180F\u200B\u2060\u2064\uFE00-\uFE0F\uFEFF\u{1BCA0}-\u{1BCA3}\u{E0100}-\u{E01EF}]/gu;
function dt(e) {
  let t = e;
  if (t.includes("%"))
    try {
      t = decodeURIComponent(t);
    } catch {
      return e.normalize("NFKC").toLowerCase();
    }
  return t
    .replace(Gn, "")
    .replace(ut, ".")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\.$/, "");
}
function u2e(e) {
  if (ft.test(e)) return "";
  let t = domainToASCII(e);
  if (!lt.test(t)) return t;
  let r = dt(e);
  return r === t ? t : r;
}
function qlr(e) {
  return !ft.test(e) && lt.test(domainToASCII(e));
}
function zlr(e) {
  let t = dt(e),
    r = t.split(".");
  return r.length <= 4 && r.every((o) => Vn.test(o)) ? t : null;
}
function ye(e) {
  let t = c2e(e.toLowerCase()).replace(/\.+$/, ""),
    r = u2e(t);
  return r !== "" ? r.replace(/\.+$/, "") : t;
}
function ht(e, t) {
  let r;
  if (e.startsWith("*.")) r = `*.${ye(e.slice(2))}`;
  else r = ye(e);
  let o = ye(t);
  if (r === "*") return !0;
  if (r === o) return !0;
  if (r.startsWith("*.") && o.endsWith(r.slice(1))) return !0;
  return !1;
}
function v0n(e, t) {
  return ht(t, e);
}
function R0n(e, t) {
  for (let r of t) if (ht(r, e)) return !0;
  return !1;
}
function $tt(e, t) {
  let r = t.lastIndexOf("/");
  if (r < 0) return !1;
  let o = t.slice(0, r),
    s = t.slice(r + 1);
  if (!/^\d+$/.test(s)) return !1;
  let i = parseInt(s, 10),
    c = pt(o);
  if (!c) return !1;
  if (c.zone) return !1;
  let u = pt(e);
  if (!u) return !1;
  let l = Jn(u.bytes),
    d = c.bytes;
  if (l.length !== d.length) return !1;
  let p = d.length * 8;
  if (i < 0 || i > p) return !1;
  return Qn(l, d, i);
}
function Qn(e, t, r) {
  let o = r >> 3;
  for (let c = 0; c < o; c++) if (e[c] !== t[c]) return !1;
  let s = r & 7;
  if (s === 0) return !0;
  let i = (255 << (8 - s)) & 255;
  return ((e[o] ?? 0) & i) === ((t[o] ?? 0) & i);
}
function Jn(e) {
  if (e.length !== 16) return e;
  for (let t = 0; t < 10; t++) if (e[t] !== 0) return e;
  if (e[10] !== 255 || e[11] !== 255) return e;
  return e.slice(12);
}
function pt(e) {
  if (e === "") return null;
  let t = "",
    r = e,
    o = e.indexOf("%");
  if (o >= 0) ((t = e.slice(o + 1)), (r = e.slice(0, o)));
  if (r.includes(":")) {
    let i = Zn(r);
    return i ? { bytes: i, zone: t } : null;
  }
  if (t) return null;
  let s = gt(r);
  return s ? { bytes: s, zone: "" } : null;
}
function gt(e) {
  let t = e.split(".");
  if (t.length !== 4) return null;
  let r = new Uint8Array(4);
  for (let o = 0; o < 4; o++) {
    let s = t[o];
    if (s === void 0 || s === "" || !/^\d{1,3}$/.test(s)) return null;
    if (s.length > 1 && s.startsWith("0")) return null;
    let i = parseInt(s, 10);
    if (i > 255) return null;
    r[o] = i;
  }
  return r;
}
function Zn(e) {
  let t = null,
    r = e,
    o = e.lastIndexOf(":");
  if (o >= 0 && e.slice(o + 1).includes(".")) {
    if (((t = gt(e.slice(o + 1))), !t)) return null;
    r = e.slice(0, o + 1);
  }
  let s = r.split("::");
  if (s.length > 2) return null;
  let i = [],
    c = (l, d) => {
      if (l === "") return [];
      let p = l.split(":"),
        m = [];
      for (let T = 0; T < p.length; T++) {
        let A = p[T];
        if (A === "" && d && T === p.length - 1) continue;
        if (A === void 0 || A === "" || !/^[0-9a-fA-F]{1,4}$/.test(A))
          return null;
        m.push(parseInt(A, 16));
      }
      return m;
    };
  if (s.length === 1) {
    let l = s[0] ?? "",
      d = c(l, t !== null);
    if (!d) return null;
    i.push(...d);
    let p = t ? 6 : 8;
    if (i.length !== p) return null;
  } else {
    let l = s[0] ?? "",
      d = s[1] ?? "",
      p = c(l, !1),
      m = c(d, t !== null);
    if (!p || !m) return null;
    let T = t ? 2 : 0,
      A = 8 - p.length - m.length - T;
    if (A < 1) return null;
    i.push(...p);
    for (let b = 0; b < A; b++) i.push(0);
    if ((i.push(...m), i.length + T !== 8)) return null;
  }
  let u = new Uint8Array(16);
  for (let l = 0; l < i.length; l++) {
    let d = i[l];
    if (d === void 0) return null;
    ((u[l * 2] = (d >> 8) & 255), (u[l * 2 + 1] = d & 255));
  }
  if (t)
    ((u[12] = t[0] ?? 0),
      (u[13] = t[1] ?? 0),
      (u[14] = t[2] ?? 0),
      (u[15] = t[3] ?? 0));
  return u;
}
var mt = toESM(Hke(), 1);
class Ce extends Error {
  connectStatus;
  headers;
  code = "ERR_PROXY_TUNNEL";
  constructor(e, t) {
    super("proxy refused the connection");
    this.connectStatus = e;
    this.headers = t;
    this.name = "ProxyConnectRefusedError";
  }
}
function G5(e) {
  return e === 0 ? "unreadable reply" : `HTTP ${e}`;
}
function KU(e) {
  for (let t = e, r = 0; r < 4; r++) {
    if (t instanceof Ce) return t;
    if (typeof t !== "object" || t === null || !("cause" in t)) return;
    t = t.cause;
  }
  return;
}
class bkt extends mt.HttpsProxyAgent {
  async connect(...[e, t]) {
    let r,
      o = (c) => {
        if (c.statusCode !== 200) r = c;
      };
    e.once("proxyConnect", o);
    let s;
    try {
      s = await super.connect(e, t);
    } finally {
      e.removeListener("proxyConnect", o);
    }
    if (r === void 0) return s;
    s.destroy();
    let i = r.statusCode;
    throw new Ce(
      Number.isInteger(i) && i >= 100 && i <= 599 ? i : 0,
      r.headers,
    );
  }
}
class Et {
  keepAliveDisabled = !1;
  agents = rs(or);
  proxyAuthHelperConfig = {
    helper: void 0,
    fromProjectOrLocal: !1,
    trustAccepted: () => !1,
  };
  proxyAuthCache = null;
  proxyAuthPendingChallenge = void 0;
}
var er = new j(() => new Et());
function D() {
  return er.of(B().host);
}
function disableKeepAlive() {
  D().keepAliveDisabled = !0;
}
function tr(e) {
  switch (e.family) {
    case 0:
    case 4:
    case 6:
      return e.family;
    case "IPv6":
      return 6;
    case "IPv4":
    case void 0:
      return 4;
    default:
      throw Error(`Unsupported address family: ${e.family}`);
  }
}
var nr = ["https_proxy", "HTTPS_PROXY", "http_proxy", "HTTP_PROXY"];
function getProxyUrlWithSource(e = process.env) {
  let t = nr.find((o) => e[o]),
    r = t ? e[t] : void 0;
  return t && r ? { value: r, source: t } : void 0;
}
function getProxyUrl(e = process.env) {
  return getProxyUrlWithSource(e)?.value;
}
function parseProxyUrl(e) {
  try {
    let t = new URL(e);
    return t.host ? t : void 0;
  } catch {
    return;
  }
}
function describeInvalidProxyUrl(e, t) {
  let r = t.replace(/\p{Cc}/gu, "");
  return `Invalid proxy URL in ${e}: "${r}" cannot be parsed as a URL.
Proxy settings must be a complete URL including the scheme, e.g. "http://proxy.example.com:8080".
Fix or unset ${e} and restart Claude Code.`;
}
var Ct = id(new Set(), (e) => e.clear());
function getUsableProxyUrl(e = process.env) {
  let t = getProxyUrlWithSource(e);
  if (!t) return;
  if (!parseProxyUrl(t.value)) {
    let r = `${t.source}=${t.value}`;
    if (!Ct.has(r)) (Ct.add(r), console.error(describeInvalidProxyUrl(t.source, t.value)));
    return;
  }
  return t.value;
}
function noProxyUnion(e) {
  let { no_proxy: t, NO_PROXY: r } = e;
  if (t && r && t !== r) return `${t},${r}`;
  return t || r;
}
function getNoProxy(e = process.env) {
  if (e.no_proxy === "*" || e.NO_PROXY === "*") return "*";
  return noProxyUnion(e);
}
function shouldBypassProxy(e, t = getNoProxy()) {
  if (!t) return !1;
  if (t === "*") return !0;
  try {
    let r = new URL(e),
      o = r.hostname.toLowerCase(),
      s = r.protocol === "https:" || r.protocol === "wss:",
      i = r.port || (s ? "443" : "80"),
      c = `${o}:${i}`;
    return t
      .split(/[,\s]+/)
      .filter(Boolean)
      .some((l) => {
        if (((l = l.toLowerCase().trim()), l.includes(":"))) return c === l;
        if (l.startsWith(".")) {
          let d = l;
          return o === l.substring(1) || o.endsWith(d);
        }
        return o === l;
      });
  } catch {
    return !1;
  }
}
function xt(e, t) {
  if (shouldBypassProxy(e, t)) return !0;
  if (!t) return !1;
  let r;
  try {
    r = new URL(e).hostname.replace(/^\[|\]$/g, "");
  } catch {
    return !1;
  }
  if (isIP(r) === 0) return !1;
  return t
    .split(/[,\s]+/)
    .filter(Boolean)
    .some((o) => {
      if (o.includes("/")) return $tt(r, o);
      let s = isIP(o);
      if (s === 0) return !1;
      return $tt(r, `${o}/${s === 4 ? 32 : 128}`);
    });
}
function At(e) {
  let t = getMTLSConfig(),
    r = getCACertificates(),
    o = {
      ...(t && { cert: t.cert, key: t.key, passphrase: t.passphrase }),
      ...(r && { ca: r }),
    },
    s = { ...o };
  if (a.CLAUDE_CODE_PROXY_RESOLVES_HOSTS)
    s.lookup = (c, u, l) => {
      l(null, c, tr(u));
    };
  let i = new bkt(e, s);
  return ((i.options = { ...i.options, ...o }), i);
}
function rr(e) {
  return D().agents(e);
}
function or(e) {
  let t = importMetaRequire("undici"),
    r = getMTLSConfig(),
    o = getCACertificates(),
    s = {
      httpProxy: e,
      httpsProxy: e,
      noProxy: getNoProxy({ no_proxy: a.no_proxy, NO_PROXY: a.NO_PROXY }),
    };
  if (r || o) {
    let i = {
      ...(r && { cert: r.cert, key: r.key, passphrase: r.passphrase }),
      ...(o && { ca: o }),
    };
    ((s.connect = i), (s.requestTls = i));
  }
  return new t.EnvHttpProxyAgent(s);
}
function getWebSocketProxyUrl(e) {
  let t = getUsableProxyUrl();
  if (!t) return;
  try {
    if (isLoopbackHostname(new URL(e).hostname)) return;
  } catch {}
  if (shouldBypassProxy(e)) return;
  return t;
}
var sr = 300000;
function _setProxyAuthHelperConfig(e) {
  D().proxyAuthHelperConfig = e;
}
function getConfiguredProxyAuthHelper() {
  if (!a.CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER) return;
  return D().proxyAuthHelperConfig.helper;
}
function _t(e) {
  return getConfiguredProxyAuthHelper() !== void 0 && e.proxyAuthHelperConfig.fromProjectOrLocal;
}
function ir() {
  let e = a.CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS;
  if (e !== void 0 && e >= 0) return e;
  return sr;
}
async function getProxyAuthFromHelper() {
  let e = getConfiguredProxyAuthHelper();
  if (!e) return null;
  let t = D();
  if (_t(t) && !ke() && !t.proxyAuthHelperConfig.trustAccepted())
    return (
      logForDebugging(
        "proxyAuthHelper configured in project/local settings but workspace trust not yet accepted \u2014 skipping",
        { level: "warn" },
      ),
      null
    );
  let r = t.proxyAuthPendingChallenge;
  if (!r && t.proxyAuthCache && Date.now() - t.proxyAuthCache.timestamp < ir())
    return t.proxyAuthCache.value;
  t.proxyAuthPendingChallenge = void 0;
  let o = getProxyUrl(),
    s;
  try {
    s = o ? new URL(o).hostname : void 0;
  } catch {
    s = void 0;
  }
  let i = await a_(e, {
    timeout: 30000,
    reject: !1,
    useToolMemoryCgroup: !1,
    env: {
      ...process.env,
      ...(o && { CLAUDE_CODE_PROXY_URL: o }),
      ...(s && { CLAUDE_CODE_PROXY_HOST: s }),
      ...(r && { CLAUDE_CODE_PROXY_AUTHENTICATE: r }),
    },
  });
  if (i.failed || !i.stdout?.trim()) {
    let u = i.timedOut
        ? "timed out"
        : i.failed
          ? `exited ${i.exitCode}`
          : "did not return a value",
      l = i.stderr?.trim();
    return (
      console.error(`proxyAuthHelper failed: ${l ? `${u}: ${l}` : u}`),
      t.proxyAuthCache?.value ?? null
    );
  }
  let c = i.stdout.trim();
  return ((t.proxyAuthCache = { value: c, timestamp: Date.now() }), c);
}
function cr() {
  return D().proxyAuthCache?.value ?? null;
}
function clearProxyAuthHelperCache(e) {
  let t = D();
  ((t.proxyAuthCache = null), (t.proxyAuthPendingChallenge = e));
}
function prefetchProxyAuthFromHelperIfSafe() {
  if (!getConfiguredProxyAuthHelper()) return;
  let e = D();
  if (_t(e) && !e.proxyAuthHelperConfig.trustAccepted()) return;
  getProxyAuthFromHelper();
}
function getProxyFetchOptions(e) {
  let t = process.env.API_FORCE_IDLE_TIMEOUT,
    r = e.forAnthropicAPI && !Ie(t) && (e.hasBodyIdleWatchdog || po(t)),
    o = {
      ...(D().keepAliveDisabled && { keepalive: !1 }),
      ...(r && { timeout: !1 }),
    };
  if (e.forAnthropicAPI) {
    let i = a.ANTHROPIC_UNIX_SOCKET;
    if (i) return { ...o, unix: i };
  }
  let s = getUsableProxyUrl();
  if (s) {
    if (e.url && shouldBypassProxy(e.url)) return { ...o, ...getTLSFetchOptions() };
    let i = cr();
    return {
      ...o,
      proxy: i ? { url: s, headers: { "Proxy-Authorization": i } } : s,
      ...getTLSFetchOptions(),
    };
  }
  if (e.fallbackProxy) {
    if (e.url && (xt(e.url, e.fallbackProxy.noProxy) || xt(e.url, getNoProxy())))
      return { ...o, ...getTLSFetchOptions() };
    let i = getTLSFetchOptions();
    return {
      ...o,
      proxy: e.fallbackProxy.url,
      ...(e.fallbackProxy.ca
        ? { tls: { ...i.tls, ca: e.fallbackProxy.ca } }
        : i),
    };
  }
  return { ...o, ...getTLSFetchOptions() };
}
var ee,
  xe = !1;
function configureGlobalAgents() {
  let e = getProxyUrlWithSource(),
    t = getUsableProxyUrl(),
    r = getMTLSAgent();
  if (ee !== void 0) (at.interceptors.request.eject(ee), (ee = void 0));
  if (
    ((at.defaults.proxy = void 0),
    (at.defaults.httpAgent = void 0),
    (at.defaults.httpsAgent = void 0),
    e)
  )
    at.defaults.proxy = !1;
  if (t) {
    let o = At(t);
    ((ee = at.interceptors.request.use((s) => {
      if (s.url && shouldBypassProxy(s.url))
        if (((s.httpsAgent ??= r), s.httpsAgent)) s.httpAgent = void 0;
        else (delete s.httpsAgent, delete s.httpAgent);
      else ((s.httpsAgent = o), (s.httpAgent = o));
      return s;
    })),
      importMetaRequire("undici").setGlobalDispatcher(rr(t)),
      (xe = !0));
  } else {
    if (xe) {
      let o = importMetaRequire("undici");
      (o.setGlobalDispatcher(new o.Agent()), (xe = !1));
    }
    if (r) at.defaults.httpsAgent = r;
  }
}
function resolveStsEndpointForProxyUrl(e) {
  return (
    a.AWS_ENDPOINT_URL_STS ||
    a.AWS_ENDPOINT_URL ||
    `https://sts.${e}.amazonaws.com`
  );
}
async function getAWSClientProxyConfig(e) {
  let t = await getAWSProxyRequestHandler(e);
  if (!t) return {};
  let { defaultProvider: r } = await import("../@aws-sdk/defaultProvider.27d886dy.js");
  return {
    requestHandler: t,
    credentials: r({
      clientConfig: { requestHandler: t },
      parentClientConfig: {
        requestHandler: t,
        ...(e.region !== void 0 && { region: e.region }),
      },
    }),
  };
}
async function getAWSProxyRequestHandler(e) {
  let t = getUsableProxyUrl(),
    r = e.requestTimeoutMs !== void 0 && {
      requestTimeout: e.requestTimeoutMs,
      throwOnRequestTimeout: !0,
    };
  if (!t || (e.url && shouldBypassProxy(e.url))) {
    let s = getMTLSAgent();
    if (!s) return null;
    return new Ee.NodeHttpHandler({ httpsAgent: s, ...r });
  }
  let o = At(t);
  return new Ee.NodeHttpHandler({ httpAgent: o, httpsAgent: o, ...r });
}
function clearProxyCache() {
  (D().agents.cache.clear?.(), logForDebugging("Cleared proxy agent cache"));
}
export {
  UQ,
  nu,
  E0n,
  A0n,
  EA,
  id,
  loadExtraCACerts,
  getCACertificates,
  clearCACertsCache,
  c2e,
  u2e,
  qlr,
  zlr,
  v0n,
  R0n,
  $tt,
  PEM_CERT_BLOCK_RE,
  loadMTLSClientMaterial,
  getLoadedMTLSPaths,
  getMTLSConfig,
  getMTLSAgent,
  getWebSocketTLSOptions,
  getTLSFetchOptions,
  clearMTLSCache,
  configureGlobalMTLS,
  H0n,
  Hke,
  G5,
  KU,
  bkt,
  disableKeepAlive,
  getProxyUrlWithSource,
  getProxyUrl,
  parseProxyUrl,
  describeInvalidProxyUrl,
  getUsableProxyUrl,
  noProxyUnion,
  getNoProxy,
  shouldBypassProxy,
  getWebSocketProxyUrl,
  _setProxyAuthHelperConfig,
  getConfiguredProxyAuthHelper,
  getProxyAuthFromHelper,
  clearProxyAuthHelperCache,
  prefetchProxyAuthFromHelperIfSafe,
  getProxyFetchOptions,
  configureGlobalAgents,
  resolveStsEndpointForProxyUrl,
  getAWSClientProxyConfig,
  getAWSProxyRequestHandler,
  clearProxyCache,
};
