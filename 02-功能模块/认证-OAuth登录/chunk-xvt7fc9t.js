// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { LONG_LIVED_OAUTH_TOKEN_TTL_SECONDS, CLAUDE_AI_INFERENCE_SCOPE } from "./chunk-9g2q4bjq.js";
import { lit as S } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  getErrorTelemetryFields,
  revokeOAuthToken,
  fetchAndStoreUserRoles,
  normalizeGatewayUrl,
  assertGatewayHostIsPrivate,
  probeTlsFingerprint,
  GATEWAY_PIN_STORE_SYMLINK_ERROR,
  GATEWAY_PIN_STORE_UNREADABLE_ERROR,
  readGatewayTrustPin,
  extractFingerprintMismatch,
  createPinnedHttpsAgent,
  persistGatewayTlsPin,
  getGatewayTokenResponseSchema,
  getOAuthErrorCode,
  persistGatewayCredential,
  getPolicyForcedLoginConfig,
  getConfiguredAwsAuthRefresh,
  isAwsAuthRefreshFromProjectSettings,
  refreshAwsAuth,
  clearAwsCredentialsCache,
  resetAwsAuthRefreshCooldown,
  getOauthAccountInfo,
  validateForceLoginOrg,
  getForcedLoginMethod,
  gatewaySignInScreenConfigured,
  policyUnreadableForEnforcement,
  checkHasTrustDialogAccepted,
  saveGlobalConfig,
} from "./认证-OAuth登录.419zdfz3.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { le, Zt, nt } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { getSettings_DEPRECATED } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { externalHttp } from "../../01-核心基础设施/共享小工具-未细化/external-http.js";
import { formatAccountOnHoldSignInMessage, sanitizeAccountOnHoldUrl, OAuthCallbackError, isAccountOnHoldCallbackError } from "./chunk-wk0e3dz4.js";
import { getSecureStorage } from "./secure-storage.js";
import { getProactivityBaselineState } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { sanitizeTextForDisplay } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { getMouseMode, isFullscreenActive } from "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { getNativeCopyModifierKey } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { kG } from "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import { CONSOLE_OAUTH_CLIENT_ID, CONSOLE_PROFILE_OAUTH_SCOPES, doesProfileLoginRefusalPermitFallback, getProfileLoginRefusalCauseSummary, resolveConsoleProfileLoginTarget, saveConsoleProfileLogin, isRefreshTokenStoredInProfile } from "./console-profile-auth.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useHasVirtualScrollViewport } from "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-state.js";
import { qA } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { Box, Text, Link, useApp, useTimeout } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useClock } from "../../01-核心基础设施/共享小工具-未细化/use-clock.js";
import { useCopyToClipboard, CopyFeedbackHint, CopyFallbackNotice } from "../../01-核心基础设施/共享小工具-未细化/clipboard-copy.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { useAppStateSelectorUnchecked } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { AuthenticationStatusBox } from "../../01-核心基础设施/共享小工具-未细化/authentication-status-box.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { Sv } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { BedrockSetupWizard } from "../Bedrock-Vertex/bedrock-setup-wizard.js";
import { Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { ConfirmPrompt } from "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import { SpinnerGlyph } from "../状态栏-主题/chunk-jrr487ty.js";
import { VertexSetupWizard } from "../Bedrock-Vertex/vertex-setup-wizard.js";
import { finalizeOAuthLogin, applyOAuthLoginIdentity, refreshAuthStateAfterLogin } from "./oauth-login-completion.js";
import { showNotification } from "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { OAuthLoginFlow } from "./oauth-login-flow.js";
import { isHeadlessEnvironment, tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import { re, E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { getClientUserAgent } from "../../01-核心基础设施/共享小工具-未细化/user-agent.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
class ye extends Error {
  fallbackCures;
  causeSummary;
  constructor(s, c) {
    super(s, { cause: c.cause });
    ((this.fallbackCures = c.fallbackCures),
      (this.causeSummary = c.fallbackCures ? c.causeSummary : null));
  }
}
async function dt(s, c, M = {}) {
  try {
    let H = await Wt(s, c, M);
    return (logFeatureOk("oauth_console_profile_login"), H);
  } catch (H) {
    if (H instanceof ye && H.fallbackCures)
      logFeatureSad("oauth_console_profile_login", "refused_fell_back");
    else
      logFeatureBad("oauth_console_profile_login", H instanceof ye ? "refused" : "error");
    throw H;
  }
}
async function Wt(s, c, { loginHint: M, loginMethod: H, orgUUID: D }) {
  try {
    await resolveConsoleProfileLoginTarget();
  } catch (U) {
    let Q = doesProfileLoginRefusalPermitFallback(U);
    if (Q === null) throw U;
    let se = getProfileLoginRefusalCauseSummary(U);
    throw new ye(
      l(U),
      Q && se !== null
        ? { fallbackCures: !0, causeSummary: se, cause: U }
        : { fallbackCures: !1, cause: U },
    );
  }
  let T = await s.startOAuthFlow(c, {
      loginWithClaudeAi: !1,
      oauthClient: { clientId: CONSOLE_OAUTH_CLIENT_ID, scopes: CONSOLE_PROFILE_OAUTH_SCOPES },
      loginHint: M,
      loginMethod: H,
      orgUUID: D,
    }),
    z = jt(T);
  if (z instanceof Error) throw (await ut(T), z);
  await Xt(await Vt());
  let ee = await applyOAuthLoginIdentity(T, {}),
    R;
  try {
    let U = T.tokenAccount;
    R = await saveConsoleProfileLogin({
      accessToken: T.accessToken,
      refreshToken: z.refreshToken,
      expiresAtMs: z.expiresAtMs,
      scopes: T.scopes,
      organizationUuid: U?.organizationUuid ?? T.profile?.organization.uuid,
      organizationName: U?.organizationName ?? T.profile?.organization.name,
      accountEmail: U?.emailAddress ?? T.profile?.account.email,
      workspaceId: U?.workspaceId,
      workspaceName: U?.workspaceName,
    });
  } catch (U) {
    if (!(await isRefreshTokenStoredInProfile(z.refreshToken))) await ut(T);
    throw U;
  }
  return (
    await fetchAndStoreUserRoles(T.accessToken).catch((U) => logForDebugging(String(U), { level: "error" })),
    await refreshAuthStateAfterLogin({ ...ee }),
    R
  );
}
async function Vt() {
  if (getAPIProvider() !== "firstParty") return null;
  let s = getSecureStorage();
  s.invalidateCache?.();
  let c = (await s.readAsync())?.claudeAiOauth;
  return c?.refreshToken
    ? { refreshToken: c.refreshToken, clientId: c.clientId }
    : null;
}
async function Xt(s) {
  if (s === null) return;
  await revokeOAuthToken(s.refreshToken, s.clientId);
  try {
    await getSecureStorage().mutate((c) => ({ ...c, claudeAiOauth: void 0 }));
  } catch (c) {
    logForDebugging(
      `Console profile login: could not clear the replaced claude.ai login record: ${l(c)}`,
      { level: "error" },
    );
  }
}
function jt(s) {
  if (!s.scopes.includes(CLAUDE_AI_INFERENCE_SCOPE))
    return Error(
      "The organization didn't grant inference access to this sign-in, so Claude Code can't use it.",
    );
  if (!s.refreshToken)
    return Error(
      "The sign-in came back without a refresh token, so it would stop working within hours. Try again.",
    );
  if (s.expiresAt === null || !Number.isFinite(s.expiresAt))
    return Error(
      "The sign-in came back without the token's expiry, so it can't be refreshed on time. Try again.",
    );
  return { refreshToken: s.refreshToken, expiresAtMs: s.expiresAt };
}
async function ut(s) {
  if (s.refreshToken) await revokeOAuthToken(s.refreshToken, CONSOLE_OAUTH_CLIENT_ID);
}
F();
var uo = "urn:ietf:params:oauth:grant-type:device_code",
  fo = "claude_code",
  go = new Set([
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "CERT_UNTRUSTED",
  ]),
  _t =
    "The gateway's TLS certificate changed during sign-in: it no longer matches the one you trusted. Aborting without storing credentials; start the sign-in again to review the new certificate.";
function Ve(s) {
  let c = l(s);
  if (c.includes(GATEWAY_PIN_STORE_SYMLINK_ERROR))
    return "Claude Code's credentials file (where a gateway's TLS pin is kept) is a symlink, which it does not follow. Replace the link with the file itself and try again.";
  if (c.includes(GATEWAY_PIN_STORE_UNREADABLE_ERROR))
    return "Claude Code's credentials file (where a gateway's TLS pin is kept) could not be read. Try again; if it keeps failing, check the file.";
  if (extractFingerprintMismatch(s) !== void 0) return _t;
  return c;
}
function mo(s) {
  let c = A(s) ?? A(s?.cause),
    M = l(s);
  if (!(
    (c !== void 0 && go.has(c)) ||
    /self[- ]?signed certificate|unable to (verify the first|get (local )?issuer) certificate|certificate not trusted/i.test(
      M,
    )
  ))
    return null;
  return (
    "Could not verify the gateway's TLS certificate. If your gateway uses a private CA or self-signed certificate: Claude Code reads your OS trust " +
    "store by default on the native binary and Node \u226522.15, so if the CA is " +
    "already installed there, upgrade to a current runtime. Otherwise set " +
    "NODE_EXTRA_CA_CERTS to the CA certificate PEM file before starting \u2014 " +
    "e.g. `export NODE_EXTRA_CA_CERTS=/path/to/ca.pem` \u2014 or add it under " +
    "`env.NODE_EXTRA_CA_CERTS` in your user settings (~/.claude/settings.json)."
  );
}
var po = createLazyValue(() =>
  nt({
    device_authorization_endpoint: le().optional(),
    token_endpoint: le().optional(),
  }),
);
function ht(s, c, M) {
  if (c) {
    try {
      if (new URL(c).origin === new URL(s).origin) return c;
    } catch {}
    logForDebugging(
      `[gateway-login] ignoring advertised endpoint ${c} (not same-origin with ${s}); using ${M}`,
    );
  }
  return `${s}${M}`;
}
var ho = createLazyValue(() =>
  nt({
    device_code: le(),
    user_code: le(),
    verification_uri: le(),
    verification_uri_complete: le().optional(),
    expires_in: Zt(),
    interval: Zt().optional(),
  }),
);
function Xe({ onDone: s, onCancel: c, initialUrl: M, screenLocked: H }) {
  let { credentials: D } = useStorageV5Context(),
    [T, z] = d({ state: "url_input" }),
    ee = M ?? void 0,
    R = C(0);
  E(
    () => () => {
      R.current += 1;
    },
    [],
  );
  let U = H ? () => z({ state: "url_input" }) : c;
  function Q() {
    ((R.current += 1), U());
  }
  async function se(j) {
    let G = ++R.current;
    z({ state: "connecting" });
    try {
      let v = normalizeGatewayUrl(j);
      if ((await assertGatewayHostIsPrivate(v), G !== R.current)) return;
      let Y = await externalHttp.get(`${v}/.well-known/oauth-authorization-server`, {
        headers: { "User-Agent": getClientUserAgent() },
        timeout: 1e4,
      });
      if (G !== R.current) return;
      let P = po().safeParse(Y.data),
        oe = P.success ? P.data : void 0,
        K = {
          deviceAuthorizationEndpoint: ht(
            v,
            oe?.device_authorization_endpoint,
            "/oauth/device_authorization",
          ),
          tokenEndpoint: ht(v, oe?.token_endpoint, "/oauth/token"),
        },
        { hostname: V, fingerprint: w } = await probeTlsFingerprint(v);
      if (G !== R.current) return;
      let B = await readGatewayTrustPin(V, D);
      if (G !== R.current) return;
      if (B === w) await fe(v, K, w);
      else
        z({
          state: "trust_prompt",
          url: v,
          hostname: V,
          fingerprint: w,
          previouslyPinned: B,
          endpoints: K,
        });
    } catch (v) {
      if (G !== R.current) return;
      let Y = mo(v);
      z(
        Y
          ? { state: "error", message: Y, detail: l(v) }
          : { state: "error", message: Ve(v) },
      );
    }
  }
  async function fe(j, G, v) {
    let Y = ++R.current;
    z({ state: "connecting" });
    try {
      let P = createPinnedHttpsAgent(v, G.deviceAuthorizationEndpoint),
        { data: oe } = await externalHttp.post(
          G.deviceAuthorizationEndpoint,
          new URLSearchParams({ surface: fo }).toString(),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "User-Agent": getClientUserAgent(),
            },
            timeout: 1e4,
            maxRedirects: 0,
            ...(P && { httpsAgent: P }),
          },
        );
      if (Y !== R.current) return;
      let K = ho().safeParse(oe);
      if (!K.success)
        throw Error(
          "gateway device authorization endpoint returned malformed response",
        );
      let V = K.data;
      (tryOpenUrlInBrowser(V.verification_uri_complete ?? V.verification_uri),
        z({
          state: "polling",
          url: j,
          userCode: V.user_code,
          verificationUri: V.verification_uri,
        }),
        await de(j, G.tokenEndpoint, V.device_code, V.interval ?? 5, Y, v));
    } catch (P) {
      if (Y !== R.current) return;
      z({ state: "error", message: Ve(P) });
    }
  }
  async function de(j, G, v, Y, P, oe) {
    let K = Math.max(1, Y);
    while (P === R.current) {
      if ((await sleep(K * 1000), P !== R.current)) return;
      try {
        let V = createPinnedHttpsAgent(oe, G),
          { data: w } = await externalHttp.post(
            G,
            new URLSearchParams({ grant_type: uo, device_code: v }).toString(),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": getClientUserAgent(),
              },
              timeout: 1e4,
              maxRedirects: 0,
              ...(V && { httpsAgent: V }),
            },
          );
        if (P !== R.current) return;
        let B = getGatewayTokenResponseSchema().safeParse(w);
        if (!B.success)
          throw Error("gateway token endpoint returned malformed response");
        await te(j, G, B.data, P);
        return;
      } catch (V) {
        if (P !== R.current) return;
        let w = getOAuthErrorCode(V);
        if (w === "authorization_pending") continue;
        if (w === "slow_down") {
          K += 5;
          continue;
        }
        if (w === "expired_token") {
          z({
            state: "error",
            message:
              "Sign-in timed out before the browser flow completed. Try again.",
          });
          return;
        }
        if (w === "access_denied") {
          z({ state: "error", message: "Sign-in was denied in the browser." });
          return;
        }
        z({ state: "error", message: Ve(V) });
        return;
      }
    }
  }
  async function te(j, G, v, Y) {
    let P = {
        url: j,
        jwt: v.access_token,
        expiresAt: Date.now() + v.expires_in * 1000,
        tokenEndpoint: G,
        ...(v.refresh_token && { idpRefreshToken: v.refresh_token }),
      },
      { hostname: oe, fingerprint: K } = await probeTlsFingerprint(j);
    if (Y !== R.current) return;
    let V = await readGatewayTrustPin(oe, D);
    if (Y !== R.current) return;
    if (V !== K) {
      z({ state: "error", message: _t });
      return;
    }
    try {
      await persistGatewayCredential(P, D);
    } catch (w) {
      if (Y !== R.current) return;
      let B = l(w);
      (logForDebugging(`[gateway-login] secureStorage write failed: ${B}`, {
        level: "error",
      }),
        z({ state: "error", message: B }));
      return;
    }
    if (Y !== R.current) return;
    s();
  }
  let I = T.state === "url_input";
  switch (
    (useKeybinding(
      "confirm:yes",
      () => {
        if (ee) se(ee);
      },
      { context: "Confirmation", isActive: I },
    ),
    useKeybinding("confirm:no", H ? () => {} : c, {
      context: "Confirmation",
      isActive: I,
    }),
    T.state)
  ) {
    case "url_input":
      if (!ee)
        return r(Box, {
          flexDirection: "column",
          gap: 1,
          children: [
            e(Text, { bold: !0, children: "Cloud gateway" }),
            e(Text, {
              color: "warning",
              children:
                "Gateway login is required by your organization's policy, but no gateway URL is configured. Contact your IT administrator.",
            }),
          ],
        });
      return r(Box, {
        flexDirection: "column",
        gap: 1,
        children: [
          e(Text, { bold: !0, children: "Cloud gateway" }),
          e(Text, {
            children:
              "Your organization's gateway URL (set by managed settings):",
          }),
          e(Box, {
            borderDimColor: !0,
            borderStyle: "round",
            paddingLeft: 1,
            children: e(Text, { children: ee }),
          }),
          r(Text, {
            dimColor: !0,
            children: [
              "Press Enter to connect",
              H ? "" : " \xB7 Esc to cancel",
            ],
          }),
        ],
      });
    case "polling":
      return e(yt, {
        userCode: T.userCode,
        verificationUri: T.verificationUri,
        onCancel: Q,
      });
    case "connecting":
      return e(wt, { label: "Connecting to gateway\u2026", onCancel: Q });
    case "trust_prompt":
      return r(Box, {
        flexDirection: "column",
        gap: 1,
        children: [
          r(Text, {
            bold: !0,
            children: [
              "Trust gateway ",
              e(Text, { color: "suggestion", children: T.hostname }),
              "?",
            ],
          }),
          T.previouslyPinned
            ? e(Text, {
                color: "warning",
                children:
                  "The TLS certificate for this gateway has changed since you last connected. Only continue if your administrator has confirmed a certificate rotation.",
              })
            : e(Text, {
                children:
                  "You haven't connected to this gateway before. Once trusted, it can push settings to this machine that execute commands and change your environment. Only continue if this is your organization's gateway.",
              }),
          r(Text, {
            dimColor: !0,
            children: [
              "Certificate fingerprint (SHA-256): ",
              T.fingerprint.slice(0, 16),
              "\u2026",
            ],
          }),
          e(ConfirmPrompt, {
            hideIndexes: !0,
            confirmLabel: "Yes, trust this gateway",
            cancelLabel: H ? "No, go back" : "No, cancel login",
            focus: "cancel",
            onConfirm: () => {
              let j = R.current;
              persistGatewayTlsPin(T.hostname, T.fingerprint, D)
                .then(() => {
                  if (j !== R.current) return;
                  return fe(T.url, T.endpoints, T.fingerprint);
                })
                .catch((G) => {
                  if (j !== R.current) return;
                  z({ state: "error", message: l(G) });
                });
            },
            onCancel: Q,
          }),
        ],
      });
    case "error":
      return e(Ct, { message: T.message, detail: T.detail, onCancel: U });
  }
}
function yt(or) {
  let we = _(13),
    { userCode: ft, verificationUri: gt, onCancel: rr } = or,
    Kt;
  if (we[0] === MEMO_CACHE_SENTINEL) ((Kt = { context: "Confirmation" }), (we[0] = Kt));
  else Kt = we[0];
  useKeybinding("confirm:no", rr, Kt);
  let qt, Jt;
  if (we[1] === MEMO_CACHE_SENTINEL)
    ((qt = e(Text, { bold: !0, children: "Cloud gateway \xB7 sign in" })),
      (Jt = e(Text, {
        children:
          "A browser window should have opened. After signing in with your identity provider, confirm this code on the verification page:",
      })),
      (we[1] = qt),
      (we[2] = Jt));
  else ((qt = we[1]), (Jt = we[2]));
  let ze;
  if (we[3] !== ft)
    ((ze = e(Box, {
      borderDimColor: !0,
      borderStyle: "round",
      paddingX: 2,
      children: e(Text, { bold: !0, color: "suggestion", children: ft }),
    })),
      (we[3] = ft),
      (we[4] = ze));
  else ze = we[4];
  let Qt;
  if (we[5] === MEMO_CACHE_SENTINEL)
    ((Qt = e(Text, { dimColor: !0, children: "Browser didn't open? Visit:" })),
      (we[5] = Qt));
  else Qt = we[5];
  let Be;
  if (we[6] !== gt)
    ((Be = r(Box, {
      flexDirection: "column",
      children: [Qt, e(Text, { dimColor: !0, wrap: "wrap", children: gt })],
    })),
      (we[6] = gt),
      (we[7] = Be));
  else Be = we[7];
  let eo, to;
  if (we[8] === MEMO_CACHE_SENTINEL)
    ((eo = r(Box, {
      gap: 1,
      children: [
        e(SpinnerGlyph, {}),
        e(Text, {
          dimColor: !0,
          children: "Waiting for sign-in to complete in your browser\u2026",
        }),
      ],
    })),
      (to = e(Text, { dimColor: !0, children: "Press Esc to cancel" })),
      (we[8] = eo),
      (we[9] = to));
  else ((eo = we[8]), (to = we[9]));
  let oo;
  if (we[10] !== ze || we[11] !== Be)
    ((oo = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [qt, Jt, ze, Be, eo, to],
    })),
      (we[10] = ze),
      (we[11] = Be),
      (we[12] = oo));
  else oo = we[12];
  return oo;
}
function wt(nr) {
  let Ee = _(7),
    { label: mt, onCancel: ir } = nr,
    ro;
  if (Ee[0] === MEMO_CACHE_SENTINEL) ((ro = { context: "Confirmation" }), (Ee[0] = ro));
  else ro = Ee[0];
  useKeybinding("confirm:no", ir, ro);
  let no;
  if (Ee[1] === MEMO_CACHE_SENTINEL) ((no = e(SpinnerGlyph, {})), (Ee[1] = no));
  else no = Ee[1];
  let He;
  if (Ee[2] !== mt)
    ((He = r(Box, { gap: 1, children: [no, e(Text, { children: mt })] })),
      (Ee[2] = mt),
      (Ee[3] = He));
  else He = Ee[3];
  let io;
  if (Ee[4] === MEMO_CACHE_SENTINEL)
    ((io = e(Text, { dimColor: !0, children: "Press Esc to cancel" })),
      (Ee[4] = io));
  else io = Ee[4];
  let ao;
  if (Ee[5] !== He)
    ((ao = r(Box, { flexDirection: "column", gap: 1, children: [He, io] })),
      (Ee[5] = He),
      (Ee[6] = ao));
  else ao = Ee[6];
  return ao;
}
function Ct(ar) {
  let Oe = _(9),
    { message: pt, detail: Ye, onCancel: sr } = ar,
    so;
  if (Oe[0] === MEMO_CACHE_SENTINEL) ((so = { context: "Confirmation" }), (Oe[0] = so));
  else so = Oe[0];
  useKeybinding("confirm:no", sr, so);
  let $e;
  if (Oe[1] !== pt)
    (($e = r(Text, { color: "error", children: ["Error: ", pt] })),
      (Oe[1] = pt),
      (Oe[2] = $e));
  else $e = Oe[2];
  let We;
  if (Oe[3] !== Ye)
    ((We = Ye && e(Text, { dimColor: !0, children: Ye })),
      (Oe[3] = Ye),
      (Oe[4] = We));
  else We = Oe[4];
  let co;
  if (Oe[5] === MEMO_CACHE_SENTINEL)
    ((co = e(Text, { dimColor: !0, children: "Press Esc to go back" })),
      (Oe[5] = co));
  else co = Oe[5];
  let lo;
  if (Oe[6] !== $e || Oe[7] !== We)
    ((lo = r(Box, { flexDirection: "column", gap: 1, children: [$e, We, co] })),
      (Oe[6] = $e),
      (Oe[7] = We),
      (Oe[8] = lo));
  else lo = Oe[8];
  return lo;
}
var qe = "Paste code here if prompted > ",
  Le = "The recommended sign-in isn't available on this machine";
function To(s) {
  let c = Math.round(s / 86400);
  if (c < 1) return "less than a day";
  if (c === 365) return "1 year";
  return `${c} ${pluralize(c, "day")}`;
}
function OAuthLoginScreen({
  onDone: s,
  onAuthSuccess: c,
  onAccountOnHold: M,
  startingMessage: H,
  mode: D = "login",
  expiresIn: T,
  forceLoginMethod: z,
  urlOutdent: ee = 0,
}) {
  let R = useHasVirtualScrollViewport(),
    { storageV5: U, credentials: Q } = useStorageV5Context(),
    se = useAppStateSelectorUnchecked((q) => q.proactivityLevel),
    fe = useAppStateSelectorUnchecked((q) => q.toolPermissionContext),
    de = (R ? Sv : 0) + ee,
    te = getSettings_DEPRECATED() || {},
    I = getForcedLoginMethod() === "gateway",
    { forceLoginGatewayUrl: j } = getPolicyForcedLoginConfig(),
    G = te.forceLoginMethod === "gateway" && !I ? void 0 : te.forceLoginMethod,
    v = z ?? G,
    Y = gatewaySignInScreenConfigured(),
    P =
      v === "claudeai"
        ? "Login method pre-selected: Subscription Plan (Claude Pro/Max)"
        : v === "console"
          ? "Login method pre-selected: API usage billing (Anthropic Console)"
          : null,
    oe = null,
    K = qA(),
    V = useClock(),
    [w, B] = d(() => {
      if (D === "setup-token") return { state: "ready_to_start" };
      if (v === "claudeai" || v === "console")
        return { state: "ready_to_start" };
      if (Y) return { state: "gateway_setup" };
      return { state: "idle" };
    }),
    [Ue, Ae] = d(""),
    [It, Qe] = d(0),
    [he] = d(() => new OAuthLoginFlow()),
    [ge, Mt] = d(() => D === "setup-token" || v === "claudeai"),
    [et, Ft] = d(!1),
    [Nt, tt] = d(null),
    Gt = policyUnreadableForEnforcement(),
    Ie =
      getAPIProvider() === "firstParty" &&
      !Gt &&
      te.forceLoginOrgUUID === void 0 &&
      v !== "claudeai",
    zt =
      te.forceLoginMethod !== void 0 &&
      ge !== (te.forceLoginMethod === "claudeai"),
    Me =
      typeof te.forceLoginOrgUUID === "string" && !zt
        ? te.forceLoginOrgUUID
        : void 0,
    [xe, Fe] = d(!1),
    {
      copiedVia: ot,
      copy: rt,
      reset: it,
    } = useCopyToClipboard(w.state === "waiting_for_login" ? w.url : null),
    Bt = useTerminalSize().columns - qe.length - 1,
    [Ht] = d(() => isFullscreenActive() && getMouseMode() !== "off");
  (E(() => {
    if (v === "claudeai") logEvent("tengu_oauth_claudeai_forced", {});
    else if (v === "console") logEvent("tengu_oauth_console_forced", {});
    else if (Y && !0 && D !== "setup-token")
      logEvent("tengu_oauth_gateway_forced", {});
  }, [v, Y, D]),
    useTimeout(
      () => {
        if (w.state === "about_to_retry") B(w.nextState);
      },
      w.state === "about_to_retry" ? 1000 : null,
      [w],
    ),
    useKeybinding(
      "confirm:yes",
      () => {
        (logEvent(
          w.state === "gateway_done"
            ? "tengu_oauth_gateway_done"
            : "tengu_oauth_success",
          { loginWithClaudeAi: ge },
        ),
          s());
      },
      {
        context: "Confirmation",
        isActive:
          (w.state === "success" && D !== "setup-token") ||
          w.state === "gateway_done",
      },
    ));
  let Yt = useApp(),
    at = C(!1);
  (useKeybinding(
    "confirm:yes",
    () => {
      if (at.current) return;
      ((at.current = !0),
        saveGlobalConfig(
          (q) => ({
            ...q,
            hasCompletedOnboarding: !0,
            lastOnboardingVersion: {
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
          }),
          U,
        ).then(() => {
          Yt.exit();
          let q =
            se !== void 0 && fe !== void 0
              ? getProactivityBaselineState({ proactivityLevel: se, toolPermissionContext: fe })
              : void 0;
          import("./execRelaunch.ewkdrr0a.js").then((X) =>
            X.execRelaunch(q ? { proactivity: q } : {}),
          );
        }));
    },
    {
      context: "Confirmation",
      isActive: w.state === "bedrock_done" || w.state === "vertex_done",
    },
  ),
    useKeybinding("confirm:yes", () => B({ state: "platform_setup" }), {
      context: "Confirmation",
      isActive: w.state === "aws_refresh_done",
    }),
    useKeybinding(
      "confirm:yes",
      () => {
        if (w.state === "error" && w.toRetry)
          (Ae(""), B({ state: "about_to_retry", nextState: w.toRetry }));
      },
      { context: "Confirmation", isActive: w.state === "error" && !!w.toRetry },
    ),
    useKeybinding("confirm:yes", () => B({ state: "idle" }), {
      context: "Confirmation",
      isActive: w.state === "account_on_hold" && D !== "setup-token",
    }),
    E(() => {
      if (/^c+$/.test(Ue) && w.state === "waiting_for_login" && xe)
        (Ae(""), rt(w.url));
    }, [Ue, w, xe, rt]));
  async function $t(q, X) {
    if (!q.trim()) {
      (Ae(""), Qe(0));
      return;
    }
    try {
      let [L, ne] = q.split("#");
      if (!L || !ne) {
        B({
          state: "error",
          message: "Invalid code. Please make sure the full code was copied",
          toRetry: { state: "waiting_for_login", url: X },
        });
        return;
      }
      (logEvent("tengu_oauth_manual_entry", {}),
        he.handleManualAuthCodeInput({ authorizationCode: L, state: ne }));
    } catch (L) {
      (logError(L),
        B({
          state: "error",
          message: l(L),
          toRetry: { state: "waiting_for_login", url: X },
        }));
    }
  }
  let st = re(async () => {
      let q = (X) => {
        if ((it(), Fe(!1), B({ state: "waiting_for_login", url: X }), isHeadlessEnvironment()))
          Fe(!0);
        else V.setTimeout(() => Fe(!0), 3000);
      };
      tt(null);
      try {
        if (
          (logEvent("tengu_oauth_flow_start", { loginWithClaudeAi: ge }),
          et && D !== "setup-token")
        ) {
          if (!Ie)
            throw Error(
              "Settings on this machine pin the login method or organization, so signing in without an API key is not available here.",
            );
          try {
            (await dt(he, async (L) => q(L), { orgUUID: Me }),
              B({ state: "success" }),
              c?.(),
              showNotification(
                {
                  message: "Claude Code login successful",
                  notificationType: "auth_success",
                },
                K,
                { storageV5: U, credentials: Q },
              ));
            return;
          } catch (L) {
            if (!(L instanceof ye) || !L.fallbackCures) throw L;
            let ne = sanitizeTextForDisplay(l(L));
            (tt({
              cause: L.causeSummary !== null ? sanitizeTextForDisplay(L.causeSummary) : ne,
              message: ne,
            }),
              logForDebugging(
                `Keyless Console sign-in unavailable here, continuing with the API-key sign-in: ${ne}`,
                { level: "warn" },
              ));
          }
        }
        let X = await he
          .startOAuthFlow(async (L) => q(L), {
            loginWithClaudeAi: ge,
            inferenceOnly: D === "setup-token",
            expiresIn: D === "setup-token" ? (T ?? LONG_LIVED_OAUTH_TOKEN_TTL_SECONDS) : void 0,
            orgUUID: Me,
          })
          .catch((L) => {
            if (L instanceof OAuthCallbackError) throw L;
            let ne = L.message.includes("Token exchange failed"),
              lt = kG(L);
            throw (
              B({
                state: "error",
                message:
                  lt ??
                  (ne
                    ? "Failed to exchange authorization code for access token. Please try again."
                    : L.message),
                toRetry:
                  D === "setup-token"
                    ? { state: "ready_to_start" }
                    : { state: "idle" },
              }),
              logEvent("tengu_oauth_token_exchange_error", {
                ...getErrorTelemetryFields(L),
                ssl_error: lt !== null,
              }),
              L
            );
          });
        if (D === "setup-token")
          (B({
            state: "success",
            token: X.accessToken,
            expiresAt: X.expiresAt ?? void 0,
          }),
            c?.());
        else {
          await finalizeOAuthLogin(X, { storageV5: U, credentials: Q });
          let L = await validateForceLoginOrg(Q);
          if (!L.valid) throw Error(L.message);
          (B({ state: "success" }),
            c?.(),
            showNotification(
              {
                message: "Claude Code login successful",
                notificationType: "auth_success",
              },
              K,
              { storageV5: U, credentials: Q },
            ));
        }
      } catch (X) {
        if (isAccountOnHoldCallbackError(X)) {
          (B({ state: "account_on_hold", message: formatAccountOnHoldSignInMessage(sanitizeAccountOnHoldUrl(X.errorUri)) }),
            logEvent("tengu_oauth_error", { account_on_hold: !0 }));
          return;
        }
        let L = X instanceof OAuthCallbackError ? X.displayMessage : l(X),
          ne = kG(X);
        (B({
          state: "error",
          message: ne ?? L,
          toRetry: { state: D === "setup-token" ? "ready_to_start" : "idle" },
        }),
          logEvent("tengu_oauth_error", { ...getErrorTelemetryFields(X), ssl_error: ne !== null }));
      }
    }, [he, ge, et, Ie, D, T, Me, K, V, c, U, Q, it]),
    Ge = C(!1);
  return (
    E(() => {
      if (w.state === "ready_to_start" && !Ge.current)
        ((Ge.current = !0),
          process.nextTick(
            (q, X) => {
              q().finally(() => {
                X.current = !1;
              });
            },
            st,
            Ge,
          ));
    }, [w.state, st]),
    useTimeout(
      () => {
        (logEvent("tengu_oauth_success", { loginWithClaudeAi: ge }), s());
      },
      D === "setup-token" && w.state === "success" ? 500 : null,
      [D, w, ge, s],
    ),
    useTimeout(
      () => M?.(),
      D === "setup-token" && w.state === "account_on_hold" ? 500 : null,
      [D, w, M],
    ),
    E(
      () => () => {
        he.cleanup();
      },
      [he],
    ),
    r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        w.state === "waiting_for_login" &&
          xe &&
          r(
            Box,
            {
              flexDirection: "column",
              gap: 1,
              paddingBottom: 1,
              marginX: de ? -de : void 0,
              children: [
                r(Box, {
                  flexDirection: "column",
                  paddingX: de,
                  children: [
                    r(Box, {
                      children: [
                        r(Text, {
                          dimColor: !0,
                          children: [
                            "Browser didn't open? Use the url below to sign in",
                            " ",
                          ],
                        }),
                        e(CopyFeedbackHint, { via: ot }),
                      ],
                    }),
                    e(CopyFallbackNotice, { via: ot }),
                  ],
                }),
                e(Box, {
                  children: e(Link, {
                    url: w.url,
                    assumeSupport: !0,
                    children: e(Text, { dimColor: !0, children: w.url }),
                  }),
                }),
                Ht &&
                  e(Box, {
                    paddingX: de,
                    children: r(Text, {
                      dimColor: !0,
                      children: [
                        "Hold ",
                        getNativeCopyModifierKey(),
                        " while selecting to use your terminal's native copy",
                      ],
                    }),
                  }),
              ],
            },
            "urlToCopy",
          ),
        D === "setup-token" &&
          w.state === "success" &&
          w.token &&
          r(
            Box,
            {
              flexDirection: "column",
              gap: 1,
              paddingTop: 1,
              children: [
                e(Text, {
                  color: "success",
                  children:
                    "\u2713 Long-lived authentication token created successfully!",
                }),
                r(Box, {
                  flexDirection: "column",
                  gap: 1,
                  children: [
                    r(Text, {
                      children: [
                        "Your OAuth token (valid for",
                        " ",
                        To(
                          w.expiresAt !== void 0 && Number.isFinite(w.expiresAt)
                            ? Math.round((w.expiresAt - Date.now()) / 1000)
                            : (T ?? LONG_LIVED_OAUTH_TOKEN_TTL_SECONDS),
                        ),
                        "):",
                      ],
                    }),
                    e(Text, { color: "warning", children: w.token }),
                    e(Text, {
                      dimColor: !0,
                      children:
                        "Store this token securely. You won't be able to see it again.",
                    }),
                    e(Text, {
                      dimColor: !0,
                      children:
                        "Use this token by setting: export CLAUDE_CODE_OAUTH_TOKEN=<token>",
                    }),
                  ],
                }),
              ],
            },
            "tokenOutput",
          ),
        e(Box, {
          flexDirection: "column",
          gap: 1,
          children: e(Ut, {
            oauthStatus: w,
            mode: D,
            startingMessage: H,
            forcedMethodMessage: P,
            gatewayUnsupportedWarning: null,
            forceLoginGatewayUrl: j,
            gatewayScreenLocked: v === "gateway",
            keyMintFallbackReason: Nt,
            showPastePrompt: xe,
            pastedCode: Ue,
            setPastedCode: Ae,
            cursorOffset: It,
            setCursorOffset: Qe,
            textInputColumns: Bt,
            handleSubmitCode: $t,
            setOAuthStatus: B,
            setLoginWithClaudeAi: Mt,
            setConsoleProfileLogin: Ft,
            consoleProfileLoginAllowed: Ie,
            onAuthSuccess: c,
          }),
        }),
      ],
    })
  );
}
function Je(tn) {
  let bt = _(4),
    { onComplete: Re } = tn,
    _o;
  if (bt[0] !== Re)
    ((_o = () => {
      let wo = getConfiguredAwsAuthRefresh();
      if (!wo) {
        Re(!1);
        return;
      }
      if (isAwsAuthRefreshFromProjectSettings() && !checkHasTrustDialogAccepted()) {
        Re(!1);
        return;
      }
      let kt = new AbortController();
      return (
        refreshAwsAuth(wo, kt.signal).then((Co) => {
          if (kt.signal.aborted) {
            return;
          }
          if (Co) (clearAwsCredentialsCache(), resetAwsAuthRefreshCooldown());
          Re(Co);
        }),
        () => kt.abort()
      );
    }),
      (bt[0] = Re),
      (bt[1] = _o));
  else _o = bt[1];
  let bo;
  if (bt[2] === MEMO_CACHE_SENTINEL) ((bo = []), (bt[2] = bo));
  else bo = bt[2];
  E(_o, bo);
  let ko;
  if (bt[3] === MEMO_CACHE_SENTINEL)
    ((ko = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(Box, {
          children: [
            e(SpinnerGlyph, {}),
            e(Text, { children: "Running awsAuthRefresh\u2026" }),
          ],
        }),
        e(AuthenticationStatusBox, {}),
      ],
    })),
      (bt[3] = ko));
  else ko = bt[3];
  return ko;
}
function Ut(on) {
  let u = _(114),
    {
      oauthStatus: W,
      mode: be,
      startingMessage: vo,
      forcedMethodMessage: je,
      gatewayUnsupportedWarning: Ke,
      forceLoginGatewayUrl: At,
      gatewayScreenLocked: xt,
      keyMintFallbackReason: me,
      showPastePrompt: ke,
      pastedCode: Tt,
      setPastedCode: Et,
      cursorOffset: Pt,
      setCursorOffset: St,
      textInputColumns: Ot,
      handleSubmitCode: Rt,
      setOAuthStatus: k,
      setLoginWithClaudeAi: Ce,
      setConsoleProfileLogin: pe,
      consoleProfileLoginAllowed: Dt,
      onAuthSuccess: Lt,
    } = on;
  switch (W.state) {
    case "idle": {
      const a = vo
        ? vo
        : "Claude Code can be used with your Claude subscription or billed based on API usage through your Console account.";
      let b;
      if (u[0] !== a)
        ((b = e(Text, { bold: !0, children: a })), (u[0] = a), (u[1] = b));
      else b = u[1];
      let O;
      if (u[2] !== Ke)
        ((O = Ke && e(Text, { color: "warning", children: Ke })),
          (u[2] = Ke),
          (u[3] = O));
      else O = u[3];
      let J;
      if (u[4] === MEMO_CACHE_SENTINEL)
        ((J = e(Text, { children: "Select login method:" })), (u[4] = J));
      else J = u[4];
      let ae;
      if (u[5] === MEMO_CACHE_SENTINEL)
        ((ae = {
          label: r(Text, {
            children: [
              "Claude account with subscription \xB7",
              " ",
              e(Text, { dimColor: !0, children: "Pro, Max, Team, or Enterprise" }),
              !1,
            ],
          }),
          value: "claudeai",
        }),
          (u[5] = ae));
      else ae = u[5];
      let ce;
      if (u[6] === MEMO_CACHE_SENTINEL)
        ((ce = {
          label: r(Text, {
            children: [
              "Anthropic Console account \xB7",
              " ",
              e(Text, { dimColor: !0, children: "API usage billing" }),
            ],
          }),
          value: "console",
        }),
          (u[6] = ce));
      else ce = u[6];
      let ie;
      if (u[7] === MEMO_CACHE_SENTINEL)
        ((ie = [
          ae,
          ce,
          {
            label: r(Text, {
              children: [
                "3rd-party platform \xB7",
                " ",
                e(Text, {
                  dimColor: !0,
                  children: "Amazon Bedrock, Microsoft Foundry, or Vertex AI",
                }),
              ],
            }),
            value: "platform",
          },
        ]),
          (u[7] = ie));
      else ie = u[7];
      let ue;
      if (u[8] !== Dt || u[9] !== pe || u[10] !== Ce || u[11] !== k)
        ((ue = e(Box, {
          children: e(Select, {
            options: ie,
            onChange: (Ao) => {
              if (Ao === "platform")
                (logEvent("tengu_oauth_platform_selected", {}),
                  k({ state: "platform_setup" }));
              else if (Ao === "claudeai")
                (logEvent("tengu_oauth_claudeai_selected", {}),
                  Ce(!0),
                  pe(!1),
                  k({ state: "ready_to_start" }));
              else if (Dt)
                (logEvent("tengu_oauth_console_selected", {}),
                  k({ state: "console_method" }));
              else
                (logEvent("tengu_oauth_console_selected", {}),
                  Ce(!1),
                  pe(!1),
                  k({ state: "ready_to_start" }));
            },
          }),
        })),
          (u[8] = Dt),
          (u[9] = pe),
          (u[10] = Ce),
          (u[11] = k),
          (u[12] = ue));
      else ue = u[12];
      let De;
      if (u[13] !== b || u[14] !== O || u[15] !== ue)
        ((De = r(Box, {
          flexDirection: "column",
          gap: 1,
          children: [b, O, J, ue],
        })),
          (u[13] = b),
          (u[14] = O),
          (u[15] = ue),
          (u[16] = De));
      else De = u[16];
      return De;
    }
    case "gateway_setup": {
      let a;
      if (u[17] !== Lt || u[18] !== k)
        ((a = () => {
          (Lt?.(), k({ state: "gateway_done" }));
        }),
          (u[17] = Lt),
          (u[18] = k),
          (u[19] = a));
      else a = u[19];
      let b;
      if (u[20] !== k)
        ((b = () => k({ state: "idle" })), (u[20] = k), (u[21] = b));
      else b = u[21];
      let O;
      if (u[22] !== At || u[23] !== xt || u[24] !== a || u[25] !== b)
        ((O = e(Xe, {
          initialUrl: At,
          screenLocked: xt,
          onDone: a,
          onCancel: b,
        })),
          (u[22] = At),
          (u[23] = xt),
          (u[24] = a),
          (u[25] = b),
          (u[26] = O));
      else O = u[26];
      return O;
    }
    case "gateway_done": {
      let a;
      if (u[27] === MEMO_CACHE_SENTINEL)
        ((a = e(Text, {
          color: "success",
          children: "Connected to Cloud gateway.",
        })),
          (u[27] = a));
      else a = u[27];
      let b;
      if (u[28] === MEMO_CACHE_SENTINEL)
        ((b = r(Box, {
          flexDirection: "column",
          gap: 1,
          marginTop: 1,
          children: [
            a,
            r(Text, {
              dimColor: !0,
              children: [
                "Press ",
                e(Text, { bold: !0, children: "Enter" }),
                " to continue.",
              ],
            }),
          ],
        })),
          (u[28] = b));
      else b = u[28];
      return b;
    }
    case "console_method": {
      let a, b;
      if (u[29] === MEMO_CACHE_SENTINEL)
        ((a = e(Text, { bold: !0, children: "Anthropic Console account" })),
          (b = e(Text, { children: "How do you want to sign in?" })),
          (u[29] = a),
          (u[30] = b));
      else ((a = u[29]), (b = u[30]));
      let O;
      if (u[31] === MEMO_CACHE_SENTINEL)
        ((O = {
          label: r(Text, {
            children: [
              "Sign in with your Console account",
              " ",
              e(Text, { dimColor: !0, children: "(recommended)" }),
            ],
          }),
          value: "wif",
        }),
          (u[31] = O));
      else O = u[31];
      let J;
      if (u[32] === MEMO_CACHE_SENTINEL)
        ((J = e(Text, { dimColor: !0, children: "(legacy)" })), (u[32] = J));
      else J = u[32];
      let ae;
      if (u[33] === MEMO_CACHE_SENTINEL)
        ((ae = [
          O,
          {
            label: r(Text, {
              children: [
                "Create an API key ",
                J,
                " \xB7",
                " ",
                e(Text, {
                  dimColor: !0,
                  children: "adds a key to your Console workspace",
                }),
              ],
            }),
            value: "api-key",
          },
          { label: "Go back", value: "back" },
        ]),
          (u[33] = ae));
      else ae = u[33];
      let ce;
      if (u[34] !== k)
        ((ce = () => k({ state: "idle" })), (u[34] = k), (u[35] = ce));
      else ce = u[35];
      let ie;
      if (u[36] !== pe || u[37] !== Ce || u[38] !== k)
        ((ie = (xo) => {
          if (xo === "back") {
            k({ state: "idle" });
            return;
          }
          if ((Ce(!1), xo === "wif"))
            (logEvent("tengu_oauth_console_token_selected", {}), pe(!0));
          else (logEvent("tengu_oauth_console_api_key_selected", {}), pe(!1));
          k({ state: "ready_to_start" });
        }),
          (u[36] = pe),
          (u[37] = Ce),
          (u[38] = k),
          (u[39] = ie));
      else ie = u[39];
      let ue;
      if (u[40] !== ce || u[41] !== ie)
        ((ue = r(Box, {
          flexDirection: "column",
          gap: 1,
          children: [
            a,
            b,
            e(Box, {
              children: e(Select, { options: ae, onCancel: ce, onChange: ie }),
            }),
          ],
        })),
          (u[40] = ce),
          (u[41] = ie),
          (u[42] = ue));
      else ue = u[42];
      return ue;
    }
    case "platform_setup": {
      let a;
      if (u[43] === MEMO_CACHE_SENTINEL) ((a = getConfiguredAwsAuthRefresh()), (u[43] = a));
      else a = u[43];
      let rn = a;
      let b;
      if (u[44] === MEMO_CACHE_SENTINEL)
        ((b = e(Text, { bold: !0, children: "Using 3rd-party platforms" })),
          (u[44] = b));
      else b = u[44];
      let O, J;
      if (u[45] === MEMO_CACHE_SENTINEL)
        ((O = {
          label: r(Text, {
            children: [
              "Amazon Bedrock \xB7 ",
              e(Text, { dimColor: !0, children: "interactive setup" }),
            ],
          }),
          value: "bedrock",
        }),
          (J = rn
            ? [
                {
                  label: r(Text, {
                    children: [
                      "Claude Platform on AWS \xB7",
                      " ",
                      e(Text, { dimColor: !0, children: "refresh credentials" }),
                    ],
                  }),
                  value: "aws_refresh",
                },
              ]
            : []),
          (u[45] = O),
          (u[46] = J));
      else ((O = u[45]), (J = u[46]));
      let ae;
      if (u[47] === MEMO_CACHE_SENTINEL)
        ((ae = {
          label: r(Text, {
            children: [
              "Microsoft Foundry \xB7 ",
              e(Text, { dimColor: !0, children: "opens docs" }),
            ],
          }),
          value: "foundry",
        }),
          (u[47] = ae));
      else ae = u[47];
      let ce;
      if (u[48] === MEMO_CACHE_SENTINEL)
        ((ce = [
          O,
          ...J,
          ae,
          {
            label: r(Text, {
              children: [
                "Google Vertex AI \xB7 ",
                e(Text, { dimColor: !0, children: "interactive setup" }),
              ],
            }),
            value: "vertex",
          },
          { label: "Go back", value: "back" },
        ]),
          (u[48] = ce));
      else ce = u[48];
      let ie;
      if (u[49] !== k)
        ((ie = e(Select, {
          options: ce,
          onChange: (nn) => {
            bb97: switch (nn) {
              case "bedrock": {
                (logEvent("tengu_oauth_bedrock_wizard_launched", {}),
                  k({ state: "bedrock_wizard" }));
                break bb97;
              }
              case "aws_refresh": {
                (logEvent("tengu_oauth_aws_refresh_launched", {}),
                  k({ state: "aws_refresh_running" }));
                break bb97;
              }
              case "foundry": {
                (logEvent("tengu_oauth_platform_docs_opened", {
                  platform: S("foundry"),
                }),
                  tryOpenUrlInBrowser("https://code.claude.com/docs/en/microsoft-foundry"),
                  k({ state: "idle" }));
                break bb97;
              }
              case "vertex": {
                (logEvent("tengu_oauth_vertex_wizard_launched", {}),
                  k({ state: "vertex_wizard" }));
                break bb97;
              }
              default: {
                k({ state: "idle" });
              }
            }
          },
          onCancel: () => k({ state: "idle" }),
        })),
          (u[49] = k),
          (u[50] = ie));
      else ie = u[50];
      let ue;
      if (u[51] === MEMO_CACHE_SENTINEL)
        ((ue = r(Text, {
          dimColor: !0,
          children: [
            "Foundry: ",
            e(Link, {
              url: "https://code.claude.com/docs/en/microsoft-foundry",
              children: "https://code.claude.com/docs/en/microsoft-foundry",
            }),
          ],
        })),
          (u[51] = ue));
      else ue = u[51];
      let De;
      if (u[52] !== ie)
        ((De = r(Box, {
          flexDirection: "column",
          gap: 1,
          children: [b, ie, ue],
        })),
          (u[52] = ie),
          (u[53] = De));
      else De = u[53];
      return De;
    }
    case "aws_refresh_running": {
      let a;
      if (u[54] !== k)
        ((a = e(Je, {
          onComplete: (an) => k({ state: "aws_refresh_done", ok: an }),
        })),
          (u[54] = k),
          (u[55] = a));
      else a = u[55];
      return a;
    }
    case "aws_refresh_done": {
      let a;
      if (u[56] !== W.ok)
        ((a = W.ok
          ? e(Text, { color: "success", children: "AWS credentials refreshed." })
          : e(Text, {
              color: "error",
              children:
                "awsAuthRefresh failed. Check the command in your settings and try running it in a separate terminal.",
            })),
          (u[56] = W.ok),
          (u[57] = a));
      else a = u[57];
      let b;
      if (u[58] === MEMO_CACHE_SENTINEL)
        ((b = r(Text, {
          dimColor: !0,
          children: [
            "Press ",
            e(Text, { bold: !0, children: "Enter" }),
            " to continue.",
          ],
        })),
          (u[58] = b));
      else b = u[58];
      let O;
      if (u[59] !== a)
        ((O = r(Box, { flexDirection: "column", gap: 1, children: [a, b] })),
          (u[59] = a),
          (u[60] = O));
      else O = u[60];
      return O;
    }
    case "bedrock_wizard": {
      let a;
      if (u[61] !== k)
        ((a = e(BedrockSetupWizard, {
          onComplete: (sn) => k({ state: "bedrock_done", message: sn }),
          onCancel: () => k({ state: "platform_setup" }),
        })),
          (u[61] = k),
          (u[62] = a));
      else a = u[62];
      return a;
    }
    case "bedrock_done":
    case "vertex_done": {
      let a;
      if (u[63] !== W.message)
        ((a = e(Text, { color: "success", children: W.message })),
          (u[63] = W.message),
          (u[64] = a));
      else a = u[64];
      let b;
      if (u[65] === MEMO_CACHE_SENTINEL)
        ((b = r(Text, {
          dimColor: !0,
          children: [
            "Press ",
            e(Text, { bold: !0, children: "Enter" }),
            " to restart Claude Code.",
          ],
        })),
          (u[65] = b));
      else b = u[65];
      let O;
      if (u[66] !== a)
        ((O = r(Box, { flexDirection: "column", gap: 1, children: [a, b] })),
          (u[66] = a),
          (u[67] = O));
      else O = u[67];
      return O;
    }
    case "vertex_wizard": {
      let a;
      if (u[68] !== k)
        ((a = e(VertexSetupWizard, {
          onComplete: (cn) => k({ state: "vertex_done", message: cn }),
          onCancel: () => k({ state: "platform_setup" }),
        })),
          (u[68] = k),
          (u[69] = a));
      else a = u[69];
      return a;
    }
    case "waiting_for_login": {
      let a;
      if (u[70] !== je)
        ((a = je && e(Box, { children: e(Text, { dimColor: !0, children: je }) })),
          (u[70] = je),
          (u[71] = a));
      else a = u[71];
      let b;
      if (u[72] !== me)
        ((b =
          me &&
          e(Box, {
            children: e(Text, {
              dimColor: !0,
              children: `${Le} (${me.cause}), so this sign-in will create an API key.`,
            }),
          })),
          (u[72] = me),
          (u[73] = b));
      else b = u[73];
      let O;
      if (u[74] !== ke)
        ((O =
          !ke &&
          r(Box, {
            children: [
              e(SpinnerGlyph, {}),
              e(Text, { children: "Opening browser to sign in\u2026" }),
            ],
          })),
          (u[74] = ke),
          (u[75] = O));
      else O = u[75];
      let J;
      if (
        u[76] !== Pt ||
        u[77] !== Rt ||
        u[78] !== W.url ||
        u[79] !== Tt ||
        u[80] !== St ||
        u[81] !== Et ||
        u[82] !== ke ||
        u[83] !== Ot
      )
        ((J =
          ke &&
          r(Box, {
            children: [
              e(Text, { children: qe }),
              e(hn, {
                value: Tt,
                onChange: Et,
                onSubmit: (ln) => Rt(ln, W.url),
                cursorOffset: Pt,
                onChangeCursorOffset: St,
                columns: Ot,
                mask: "*",
              }),
            ],
          })),
          (u[76] = Pt),
          (u[77] = Rt),
          (u[78] = W.url),
          (u[79] = Tt),
          (u[80] = St),
          (u[81] = Et),
          (u[82] = ke),
          (u[83] = Ot),
          (u[84] = J));
      else J = u[84];
      let ae;
      if (u[85] !== a || u[86] !== b || u[87] !== O || u[88] !== J)
        ((ae = r(Box, {
          flexDirection: "column",
          gap: 1,
          children: [a, b, O, J],
        })),
          (u[85] = a),
          (u[86] = b),
          (u[87] = O),
          (u[88] = J),
          (u[89] = ae));
      else ae = u[89];
      return ae;
    }
    case "creating_api_key": {
      let a;
      if (u[90] === MEMO_CACHE_SENTINEL)
        ((a = e(Box, {
          flexDirection: "column",
          gap: 1,
          children: r(Box, {
            children: [
              e(SpinnerGlyph, {}),
              e(Text, { children: "Creating API key for Claude Code\u2026" }),
            ],
          }),
        })),
          (u[90] = a));
      else a = u[90];
      return a;
    }
    case "about_to_retry": {
      let a;
      if (u[91] === MEMO_CACHE_SENTINEL)
        ((a = e(Box, {
          flexDirection: "column",
          gap: 1,
          children: e(Text, { color: "permission", children: "Retrying\u2026" }),
        })),
          (u[91] = a));
      else a = u[91];
      return a;
    }
    case "success": {
      let a;
      if (u[92] !== be || u[93] !== W.token)
        ((a =
          be === "setup-token" && W.token
            ? null
            : r(N, {
                children: [
                  getOauthAccountInfo()?.emailAddress
                    ? r(Text, {
                        dimColor: !0,
                        children: [
                          "Logged in as",
                          " ",
                          e(Text, { children: getOauthAccountInfo()?.emailAddress }),
                        ],
                      })
                    : null,
                  r(Text, {
                    color: "success",
                    children: [
                      "Login successful. Press ",
                      e(Text, { bold: !0, children: "Enter" }),
                      " to continue\u2026",
                    ],
                  }),
                ],
              })),
          (u[92] = be),
          (u[93] = W.token),
          (u[94] = a));
      else a = u[94];
      let b;
      if (u[95] !== a)
        ((b = e(Box, { flexDirection: "column", children: a })),
          (u[95] = a),
          (u[96] = b));
      else b = u[96];
      return b;
    }
    case "account_on_hold": {
      let a;
      if (u[97] !== W.message)
        ((a = e(Text, { color: "warning", children: W.message })),
          (u[97] = W.message),
          (u[98] = a));
      else a = u[98];
      let b;
      if (u[99] !== be)
        ((b =
          be !== "setup-token" &&
          r(Text, {
            dimColor: !0,
            children: [
              "Press ",
              e(Text, { bold: !0, children: "Enter" }),
              " to go back to login options.",
            ],
          })),
          (u[99] = be),
          (u[100] = b));
      else b = u[100];
      let O;
      if (u[101] !== a || u[102] !== b)
        ((O = r(Box, { flexDirection: "column", gap: 1, children: [a, b] })),
          (u[101] = a),
          (u[102] = b),
          (u[103] = O));
      else O = u[103];
      return O;
    }
    case "error": {
      let a;
      if (u[104] !== W.message)
        ((a = r(Text, { color: "error", children: ["OAuth error: ", W.message] })),
          (u[104] = W.message),
          (u[105] = a));
      else a = u[105];
      let b;
      if (u[106] !== me)
        ((b = me && e(Text, { dimColor: !0, children: `${Le}: ${me.message}` })),
          (u[106] = me),
          (u[107] = b));
      else b = u[107];
      let O;
      if (u[108] !== W.toRetry)
        ((O =
          W.toRetry &&
          e(Box, {
            marginTop: 1,
            children: r(Text, {
              color: "permission",
              children: [
                "Press ",
                e(Text, { bold: !0, children: "Enter" }),
                " to retry.",
              ],
            }),
          })),
          (u[108] = W.toRetry),
          (u[109] = O));
      else O = u[109];
      let J;
      if (u[110] !== a || u[111] !== b || u[112] !== O)
        ((J = r(Box, { flexDirection: "column", gap: 1, children: [a, b, O] })),
          (u[110] = a),
          (u[111] = b),
          (u[112] = O),
          (u[113] = J));
      else J = u[113];
      return J;
    }
    default: {
      return null;
    }
  }
}
export { OAuthLoginScreen };
