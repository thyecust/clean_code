// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Lm } from "../../00-第三方库/@aws-sdk/chunk-w3axq133.js";
import { fromSso } from "./sso-token-provider.js";
import { nu } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { lhe } from "../../00-第三方库/@aws-sdk/chunk-zdrvwe5r.js";
import { awsSdkCoreClientModule } from "../../01-核心基础设施/共享小工具-未细化/aws-sdk-core-client.js";
import { getPropertyProviderModule } from "./smithy-property-provider.js";
import { toESM } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var a = toESM(awsSdkCoreClientModule());
var c = nu(),
  d = Lm(),
  l = getPropertyProviderModule(),
  u = awsSdkCoreClientModule(),
  S = lhe();
var g = (e) => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`;
var r = g;
var s = toESM(getPropertyProviderModule()),
  createEnvSigningNameTokenProvider =
    ({ logger: e, signingName: n } = {}) =>
    async () => {
      if ((e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !n))
        throw new s.TokenProviderError(
          "Please pass 'signingName' to compute environment variable key",
          { logger: e },
        );
      let t = r(n);
      if (!(t in process.env))
        throw new s.TokenProviderError(
          `Token not present in '${t}' environment variable`,
          { logger: e },
        );
      let o = { token: process.env[t] };
      return (a.setTokenFeature(o, "BEARER_SERVICE_ENV_VARS", "3"), o);
    };
var i = toESM(getPropertyProviderModule());
var createMemoizedTokenProvider = (e = {}) =>
  i.memoize(
    i.chain(fromSso(e), async () => {
      throw new i.TokenProviderError(
        "Could not load token from any providers",
        !1,
      );
    }),
    (n) =>
      n.expiration !== void 0 && n.expiration.getTime() - Date.now() < 300000,
    (n) => n.expiration !== void 0,
  );
export { createEnvSigningNameTokenProvider, createMemoizedTokenProvider };
