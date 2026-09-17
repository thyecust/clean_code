// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getNodeConfigProviderModule } from "../../01-核心基础设施/共享小工具-未细化/node-config-provider.js";
import { getUrlParserModule } from "../../01-核心基础设施/共享小工具-未细化/url-parser.js";
import "./chunk-z7ktsccq.js";
import { getPropertyProviderModule } from "../../02-功能模块/模型接入-Bedrock-Vertex/smithy-property-provider.js";
import { toESM, initESM } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
import { Buffer as ae } from "buffer";
import { request } from "http";
function httpRequest(e) {
  return new Promise((t, n) => {
    let o = request({
      method: "GET",
      ...e,
      hostname: e.hostname?.replace(/^\[(.+)\]$/, "$1"),
    });
    (o.on("error", (r) => {
      (n(
        Object.assign(
          new A.ProviderError("Unable to connect to instance metadata service"),
          r,
        ),
      ),
        o.destroy());
    }),
      o.on("timeout", () => {
        (n(new A.ProviderError("TimeoutError from instance metadata service")),
          o.destroy());
      }),
      o.on("response", (r) => {
        let { statusCode: a = 400 } = r;
        if (a < 200 || 300 <= a)
          (n(
            Object.assign(
              new A.ProviderError(
                "Error response received from instance metadata service",
              ),
              { statusCode: a },
            ),
          ),
            o.destroy());
        let m = [];
        (r.on("data", (s) => {
          m.push(s);
        }),
          r.on("end", () => {
            (t(ae.concat(m)), o.destroy());
          }));
      }),
      o.end());
  });
}
var A;
var S = initESM(() => {
  A = toESM(getPropertyProviderModule());
});
var N = (e) =>
    Boolean(e) &&
    typeof e === "object" &&
    typeof e.AccessKeyId === "string" &&
    typeof e.SecretAccessKey === "string" &&
    typeof e.Token === "string" &&
    typeof e.Expiration === "string",
  g = (e) => ({
    accessKeyId: e.AccessKeyId,
    secretAccessKey: e.SecretAccessKey,
    sessionToken: e.Token,
    expiration: new Date(e.Expiration),
    ...(e.AccountId && { accountId: e.AccountId }),
  });
var O = () => {};
var C = ({ maxRetries: e = 0, timeout: t = 1000 }) => ({
  maxRetries: e,
  timeout: t,
});
var h = () => {};
var _ = (e, t) => {
  let n = e();
  for (let o = 0; o < t; o++) n = n.catch(e);
  return n;
};
var D = () => {};
import { parse } from "url";
var T,
  ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
  ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
  k = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
  fromContainerMetadata = (e = {}) => {
    let { timeout: t, maxRetries: n } = C(e);
    return () =>
      _(async () => {
        let o = await fe({ logger: e.logger }),
          r = JSON.parse(await ce(t, o));
        if (!N(r))
          throw new T.CredentialsProviderError(
            "Invalid response received from instance metadata service.",
            { logger: e.logger },
          );
        return g(r);
      }, n);
  },
  ce = async (e, t) => {
    if (process.env[k])
      t.headers = { ...t.headers, Authorization: process.env[k] };
    return (await httpRequest({ ...t, timeout: e })).toString();
  },
  de = "169.254.170.2",
  le,
  me,
  fe = async ({ logger: e }) => {
    if (process.env[ENV_CMDS_RELATIVE_URI]) return { hostname: de, path: process.env[ENV_CMDS_RELATIVE_URI] };
    if (process.env[ENV_CMDS_FULL_URI]) {
      let t = parse(process.env[ENV_CMDS_FULL_URI]);
      if (!t.hostname || !(t.hostname in le))
        throw new T.CredentialsProviderError(
          `${t.hostname} is not a valid container metadata service hostname`,
          { tryNextLink: !1, logger: e },
        );
      if (!t.protocol || !(t.protocol in me))
        throw new T.CredentialsProviderError(
          `${t.protocol} is not a valid container metadata service protocol`,
          { tryNextLink: !1, logger: e },
        );
      return { ...t, port: t.port ? parseInt(t.port, 10) : void 0 };
    }
    throw new T.CredentialsProviderError(
      `The container metadata credential provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment variable is set`,
      { tryNextLink: !1, logger: e },
    );
  };
var V = initESM(() => {
  S();
  O();
  h();
  D();
  ((T = toESM(getPropertyProviderModule())),
    (le = { localhost: !0, "127.0.0.1": !0 }),
    (me = { "http:": !0, "https:": !0 }));
});
var U, v;
var W = initESM(() => {
  U = toESM(getPropertyProviderModule());
  v = class v extends U.CredentialsProviderError {
    tryNextLink;
    name = "InstanceMetadataV1FallbackError";
    constructor(e, t = !0) {
      super(e, t);
      ((this.tryNextLink = t), Object.setPrototypeOf(this, v.prototype));
    }
  };
});
var u;
var B = initESM(() => {
  (function (e) {
    ((e.IPv4 = "http://169.254.169.254"), (e.IPv6 = "http://[fd00:ec2::254]"));
  })(u || (u = {}));
});
var K;
var G = initESM(() => {
  K = {
    environmentVariableSelector: (e) => e.AWS_EC2_METADATA_SERVICE_ENDPOINT,
    configFileSelector: (e) => e.ec2_metadata_service_endpoint,
    default: void 0,
  };
});
var l;
var M = initESM(() => {
  (function (e) {
    ((e.IPv4 = "IPv4"), (e.IPv6 = "IPv6"));
  })(l || (l = {}));
});
var Ee = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE",
  Ie = "ec2_metadata_service_endpoint_mode",
  q;
var H = initESM(() => {
  M();
  q = {
    environmentVariableSelector: (e) => e[Ee],
    configFileSelector: (e) => e[Ie],
    default: l.IPv4,
  };
});
var P,
  Y,
  getInstanceMetadataEndpoint = async () => Y.parseUrl((await _e()) || (await Te())),
  _e = async () => P.loadConfig(K)(),
  Te = async () => {
    let e = await P.loadConfig(q)();
    switch (e) {
      case l.IPv4:
        return u.IPv4;
      case l.IPv6:
        return u.IPv6;
      default:
        throw Error(
          `Unsupported endpoint mode: ${e}. Select from ${Object.values(l)}`,
        );
    }
  };
var R = initESM(() => {
  B();
  G();
  M();
  H();
  ((P = toESM(getNodeConfigProviderModule())), (Y = toESM(getUrlParserModule())));
});
var b = (e, t) => {
  let n = 300 + Math.floor(Math.random() * 300),
    o = new Date(Date.now() + n * 1000);
  t.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(o)}.
For more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html`);
  let r = e.originalExpiration ?? e.expiration;
  return { ...e, ...(r ? { originalExpiration: r } : {}), expiration: o };
};
var j = () => {};
var J = (e, t = {}) => {
  let n = t?.logger || console,
    o;
  return async () => {
    let r;
    try {
      if (
        ((r = await e()), r.expiration && r.expiration.getTime() < Date.now())
      )
        r = b(r, n);
    } catch (a) {
      if (o) (n.warn("Credential renew failed: ", a), (r = b(o, n)));
      else throw a;
    }
    return ((o = r), r);
  };
};
var z = initESM(() => {
  j();
});
var Q,
  L,
  ee = "/latest/meta-data/iam/security-credentials/",
  ue = "/latest/api/token",
  F = "AWS_EC2_METADATA_V1_DISABLED",
  X = "ec2_metadata_v1_disabled",
  Z = "x-aws-ec2-metadata-token",
  fromInstanceMetadata = (e = {}) => J(Ae(e), { logger: e.logger }),
  Ae = (e = {}) => {
    let t = !1,
      { logger: n, profile: o } = e,
      { timeout: r, maxRetries: a } = C(e),
      m = async (s, f) => {
        if (t || f.headers?.[Z] == null) {
          let i = !1,
            c = !1,
            ne = await Q.loadConfig(
              {
                environmentVariableSelector: (d) => {
                  let E = d[F];
                  if (((c = !!E && E !== "false"), E === void 0))
                    throw new L.CredentialsProviderError(
                      `${F} not set in env, checking config file next.`,
                      { logger: e.logger },
                    );
                  return c;
                },
                configFileSelector: (d) => {
                  let E = d[X];
                  return ((i = !!E && E !== "false"), i);
                },
                default: !1,
              },
              { profile: o },
            )();
          if (e.ec2MetadataV1Disabled || ne) {
            let d = [];
            if (e.ec2MetadataV1Disabled)
              d.push(
                "credential provider initialization (runtime option ec2MetadataV1Disabled)",
              );
            if (i) d.push(`config file profile (${X})`);
            if (c) d.push(`process environment variable (${F})`);
            throw new v(
              `AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${d.join(", ")}].`,
            );
          }
        }
        let re = (
          await _(async () => {
            let i;
            try {
              i = await Ne(f);
            } catch (c) {
              if (c.statusCode === 401) t = !1;
              throw c;
            }
            return i;
          }, s)
        ).trim();
        return _(async () => {
          let i;
          try {
            i = await ge(re, f, e);
          } catch (c) {
            if (c.statusCode === 401) t = !1;
            throw c;
          }
          return i;
        }, s);
      };
    return async () => {
      let s = await getInstanceMetadataEndpoint();
      if (t)
        return (
          n?.debug(
            "AWS SDK Instance Metadata",
            "using v1 fallback (no token fetch)",
          ),
          m(a, { ...s, timeout: r })
        );
      else {
        let f;
        try {
          f = (await Se({ ...s, timeout: r })).toString();
        } catch (I) {
          if (I?.statusCode === 400)
            throw Object.assign(I, {
              message: "EC2 Metadata token request returned error",
            });
          else if (
            I.message === "TimeoutError" ||
            [403, 404, 405].includes(I.statusCode)
          )
            t = !0;
          return (
            n?.debug(
              "AWS SDK Instance Metadata",
              "using v1 fallback (initial)",
            ),
            m(a, { ...s, timeout: r })
          );
        }
        return m(a, { ...s, headers: { [Z]: f }, timeout: r });
      }
    };
  },
  Se = async (e) =>
    httpRequest({
      ...e,
      path: ue,
      method: "PUT",
      headers: { "x-aws-ec2-metadata-token-ttl-seconds": "21600" },
    }),
  Ne = async (e) => (await httpRequest({ ...e, path: ee })).toString(),
  ge = async (e, t, n) => {
    let o = JSON.parse((await httpRequest({ ...t, path: ee + e })).toString());
    if (!N(o))
      throw new L.CredentialsProviderError(
        "Invalid response received from instance metadata service.",
        { logger: n.logger },
      );
    return g(o);
  };
var te = initESM(() => {
  W();
  S();
  O();
  h();
  D();
  R();
  z();
  ((Q = toESM(getNodeConfigProviderModule())), (L = toESM(getPropertyProviderModule())));
});
var oe = () => {};
var Ce = initESM(() => {
  S();
  R();
  V();
  te();
  h();
  oe();
});
Ce();
export {
  ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI,
  fromContainerMetadata,
  fromInstanceMetadata,
  getInstanceMetadataEndpoint,
  httpRequest,
};
