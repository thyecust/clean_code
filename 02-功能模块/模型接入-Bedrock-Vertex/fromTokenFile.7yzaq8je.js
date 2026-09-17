// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { HA } from "../../00-第三方库/@aws-sdk/chunk-z7ktsccq.js";
import { awsSdkCoreClientModule } from "../../01-核心基础设施/共享小工具-未细化/aws-sdk-core-client.js";
import { getPropertyProviderModule } from "./smithy-property-provider.js";
import { toESM } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var d = toESM(awsSdkCoreClientModule()),
  a = toESM(getPropertyProviderModule()),
  m = toESM(HA());
import { readFileSync } from "fs";
var fromWebToken = (e) => async (t) => {
  e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
  let {
      roleArn: o,
      roleSessionName: r,
      webIdentityToken: s,
      providerId: n,
      policyArns: g,
      policy: p,
      durationSeconds: E,
    } = e,
    { roleAssumerWithWebIdentity: i } = e;
  if (!i) {
    let { getDefaultRoleAssumerWithWebIdentity: f } =
      await import("../../00-第三方库/@aws-sdk/chunk-mkw5nmp8.js").then((m) => toESM(m.default));
    i = f(
      {
        ...e.clientConfig,
        credentialProviderLogger: e.logger,
        parentClientConfig: {
          ...t?.callerClientConfig,
          ...e.parentClientConfig,
        },
      },
      e.clientPlugins,
    );
  }
  return i({
    RoleArn: o,
    RoleSessionName: r ?? `aws-sdk-js-session-${Date.now()}`,
    WebIdentityToken: s,
    ProviderId: n,
    PolicyArns: g,
    Policy: p,
    DurationSeconds: E,
  });
};
var c = "AWS_WEB_IDENTITY_TOKEN_FILE",
  S = "AWS_ROLE_ARN",
  N = "AWS_ROLE_SESSION_NAME",
  fromTokenFile =
    (e = {}) =>
    async (t) => {
      e.logger?.debug(
        "@aws-sdk/credential-provider-web-identity - fromTokenFile",
      );
      let o = e?.webIdentityTokenFile ?? process.env[c],
        r = e?.roleArn ?? process.env[S],
        s = e?.roleSessionName ?? process.env[N];
      if (!o || !r)
        throw new a.CredentialsProviderError(
          "Web identity configuration not specified",
          { logger: e.logger },
        );
      let n = await fromWebToken({
        ...e,
        webIdentityToken:
          m.externalDataInterceptor?.getTokenRecord?.()[o] ??
          readFileSync(o, { encoding: "ascii" }),
        roleArn: r,
        roleSessionName: s,
      })(t);
      if (o === process.env[c])
        d.setCredentialFeature(n, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
      return n;
    };
export { fromTokenFile, fromWebToken };
