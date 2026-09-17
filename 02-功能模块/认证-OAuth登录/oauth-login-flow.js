// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { getOauthConfig } from "./chunk-9g2q4bjq.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { resolveRefreshTokenExpiresAt, shouldUseClaudeAIAuth, parseScopes, buildAuthUrl, exchangeCodeForTokens, fetchProfileInfo } from "./认证-OAuth登录.419zdfz3.js";
import { isAccountOnHoldEnabled, ACCOUNT_ON_HOLD_ERROR_CODE, sanitizeAccountOnHoldUrl, OAuthCallbackError } from "./chunk-wk0e3dz4.js";
import { emitAuthEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/otel-events.js";
import { tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import { createServer } from "http";
var w = 200;
class u {
  localServer;
  port = 0;
  promiseResolver = null;
  promiseRejecter = null;
  expectedState = null;
  pendingResponse = null;
  callbackPath;
  constructor(e = "/callback") {
    ((this.localServer = createServer()), (this.callbackPath = e));
  }
  async start(e) {
    return new Promise((t, r) => {
      (this.localServer.once("error", (o) => {
        (logFeatureBad("oauth_callback_listener", "oauth_callback_server_start_failed"),
          r(Error(`Failed to start OAuth callback server: ${o.message}`)));
      }),
        this.localServer.listen(e ?? 0, "127.0.0.1", () => {
          let o = this.localServer.address();
          ((this.port = o.port), t(this.port));
        }));
    });
  }
  getPort() {
    return this.port;
  }
  hasPendingResponse() {
    return this.pendingResponse !== null;
  }
  async waitForAuthorization(e, t) {
    return new Promise((r, o) => {
      ((this.promiseResolver = r),
        (this.promiseRejecter = o),
        (this.expectedState = e),
        this.startLocalListener(t));
    });
  }
  handleSuccessRedirect(e, t) {
    if (!this.pendingResponse) return;
    if (t) {
      (t(this.pendingResponse, e),
        (this.pendingResponse = null),
        logEvent("tengu_oauth_automatic_redirect", { custom_handler: !0 }));
      return;
    }
    let r = shouldUseClaudeAIAuth(e) ? getOauthConfig().CLAUDEAI_SUCCESS_URL : getOauthConfig().CONSOLE_SUCCESS_URL;
    (this.pendingResponse.writeHead(302, { Location: r }),
      this.pendingResponse.end(),
      (this.pendingResponse = null),
      logEvent("tengu_oauth_automatic_redirect", {}));
  }
  handleErrorRedirect() {
    if (!this.pendingResponse) return;
    let e = getOauthConfig().CLAUDEAI_SUCCESS_URL;
    (this.pendingResponse.writeHead(302, { Location: e }),
      this.pendingResponse.end(),
      (this.pendingResponse = null),
      logEvent("tengu_oauth_automatic_redirect_error", {}));
  }
  startLocalListener(e) {
    (this.localServer.on("request", this.handleRedirect.bind(this)),
      this.localServer.on("error", this.handleError.bind(this)),
      e());
  }
  handleRedirect(e, t) {
    let r = new URL(e.url || "", `http://${e.headers.host || "localhost"}`);
    if (r.pathname !== this.callbackPath) {
      (t.writeHead(404), t.end());
      return;
    }
    let o = r.searchParams.get("code") ?? void 0,
      n = r.searchParams.get("state") ?? void 0,
      s = r.searchParams.get("error") ?? void 0;
    if (!o && s && isAccountOnHoldEnabled()) {
      this.respondToErrorCallback({
        error: s,
        errorDescription: r.searchParams.get("error_description") ?? void 0,
        errorUri: r.searchParams.get("error_uri") ?? void 0,
        state: n,
        res: t,
      });
      return;
    }
    this.validateAndRespond(o, n, t);
  }
  validateAndRespond(e, t, r) {
    if (!e) {
      (logFeatureBad("oauth_callback_listener", "oauth_callback_no_code"),
        r.writeHead(400),
        r.end("Authorization code not found"),
        this.reject(Error("No authorization code received")));
      return;
    }
    if (this.rejectOnStateMismatch(t, r)) return;
    ((this.pendingResponse = r), logFeatureOk("oauth_callback_listener"), this.resolve(e));
  }
  respondToErrorCallback({
    error: e,
    errorDescription: t,
    errorUri: r,
    state: o,
    res: n,
  }) {
    if (this.rejectOnStateMismatch(o, n)) return;
    let s = t === ACCOUNT_ON_HOLD_ERROR_CODE;
    (logFeatureBad(
      "oauth_callback_listener",
      s ? "oauth_callback_account_on_hold" : "oauth_callback_authorize_error",
    ),
      n.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" }),
      n.end(
        s
          ? "Your account is on hold. You can close this window."
          : "Sign-in was canceled or failed. You can close this window.",
      ),
      this.reject(
        new OAuthCallbackError(R(e), t === void 0 ? void 0 : R(t), s ? sanitizeAccountOnHoldUrl(r) : void 0),
      ));
  }
  rejectOnStateMismatch(e, t) {
    if (e === this.expectedState) return !1;
    return (
      logFeatureBad("oauth_callback_listener", "oauth_callback_state_mismatch"),
      t.writeHead(400),
      t.end("Invalid state parameter"),
      this.reject(Error("Invalid state parameter")),
      !0
    );
  }
  handleError(e) {
    (logFeatureBad("oauth_callback_listener", "oauth_callback_server_error"),
      logError(e),
      this.close(),
      this.reject(e));
  }
  resolve(e) {
    if (this.promiseResolver)
      (this.promiseResolver(e),
        (this.promiseResolver = null),
        (this.promiseRejecter = null));
  }
  reject(e) {
    if (this.promiseRejecter)
      (this.promiseRejecter(e),
        (this.promiseResolver = null),
        (this.promiseRejecter = null));
  }
  close() {
    if (this.pendingResponse) this.handleErrorRedirect();
    if (this.localServer)
      (this.localServer.removeAllListeners(), this.localServer.close());
  }
  [Symbol.dispose]() {
    this.close();
  }
}
function R(e) {
  return truncateToCodeUnits(e.replace(/[\p{Cc}\p{Cf}\u2028\u2029]/gu, ""), w);
}
import { createHash, randomBytes } from "crypto";
function d(e) {
  return e
    .toString("base64")
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}
function C() {
  return d(randomBytes(32));
}
function A(e) {
  let t = createHash("sha256");
  return (t.update(e), d(t.digest()));
}
function S() {
  return d(randomBytes(32));
}
class OAuthLoginFlow {
  codeVerifier;
  authCodeListener = null;
  port = null;
  manualAuthCodeResolver = null;
  constructor() {
    this.codeVerifier = C();
  }
  async startOAuthFlow(e, t) {
    ((this.authCodeListener = new u()),
      (this.port = await this.authCodeListener.start()));
    let r = A(this.codeVerifier),
      o = S(),
      n = {
        codeChallenge: r,
        state: o,
        port: this.port,
        loginWithClaudeAi: t?.loginWithClaudeAi,
        inferenceOnly: t?.inferenceOnly,
        orgUUID: t?.orgUUID,
        loginHint: t?.loginHint,
        loginMethod: t?.loginMethod,
        oauthClient: t?.oauthClient,
      },
      s = buildAuthUrl({ ...n, isManual: !0 }),
      p = buildAuthUrl({ ...n, isManual: !1 }),
      k = await this.waitForAuthorizationCode(o, async () => {
        if (t?.skipBrowserOpen) await e(s, p);
        else (await e(s), await tryOpenUrlInBrowser(p));
      }),
      l = this.authCodeListener?.hasPendingResponse() ?? !1;
    logEvent("tengu_oauth_auth_code_received", { automatic: l });
    try {
      let a = await exchangeCodeForTokens(k, {
          state: o,
          codeVerifier: this.codeVerifier,
          port: this.port,
          useManualRedirect: !l,
          expiresIn: t?.expiresIn,
          clientId: t?.oauthClient?.clientId,
        }),
        c = t?.skipProfileFetch ? null : await fetchProfileInfo(a.access_token);
      if (l) {
        let m = parseScopes(a.scope),
          g = t?.successRedirectUrl;
        if (g)
          this.authCodeListener?.handleSuccessRedirect(m, (v) => {
            (v.writeHead(302, { Location: g }), v.end());
          });
        else this.authCodeListener?.handleSuccessRedirect(m);
      }
      return (
        logFeatureOk("oauth_login"),
        this.formatTokens(a, {
          subscriptionType: c?.subscriptionType ?? null,
          rateLimitTier: c?.rateLimitTier ?? null,
          profile: c?.rawProfile,
          clientId: t?.oauthClient?.clientId,
        })
      );
    } catch (a) {
      if ((logFeatureBad("oauth_login", "oauth_login_failed"), l))
        this.authCodeListener?.handleErrorRedirect();
      if (!t?.inferenceOnly && !t?.oauthClient)
        emitAuthEvent({ action: "login", success: !1, authMethod: "oauth", error: a });
      throw a;
    } finally {
      this.authCodeListener?.close();
    }
  }
  async waitForAuthorizationCode(e, t) {
    return new Promise((r, o) => {
      ((this.manualAuthCodeResolver = r),
        this.authCodeListener
          ?.waitForAuthorization(e, t)
          .then((n) => {
            ((this.manualAuthCodeResolver = null), r(n));
          })
          .catch((n) => {
            ((this.manualAuthCodeResolver = null), o(n));
          }));
    });
  }
  handleManualAuthCodeInput(e) {
    if (this.manualAuthCodeResolver)
      (this.manualAuthCodeResolver(e.authorizationCode),
        (this.manualAuthCodeResolver = null),
        this.authCodeListener?.close());
  }
  formatTokens(
    e,
    { subscriptionType: t, rateLimitTier: r, profile: o, clientId: n },
  ) {
    return {
      accessToken: e.access_token,
      refreshToken: e.refresh_token,
      expiresAt: Date.now() + e.expires_in * 1000,
      refreshTokenExpiresAt: resolveRefreshTokenExpiresAt(e.refresh_token_expires_in, !0),
      scopes: parseScopes(e.scope),
      subscriptionType: t,
      rateLimitTier: r,
      profile: o,
      clientId: n,
      tokenAccount: e.account
        ? {
            uuid: e.account.uuid,
            emailAddress: e.account.email_address,
            organizationUuid: e.organization?.uuid,
            organizationName: e.organization?.name,
            workspaceId: e.workspace?.id,
            workspaceName: e.workspace?.name,
          }
        : void 0,
    };
  }
  cleanup() {
    (this.authCodeListener?.close(), (this.manualAuthCodeResolver = null));
  }
}
export { OAuthLoginFlow };
