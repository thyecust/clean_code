// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { authStateStore } from "../Vim模式/Vim模式.nnewe0gf.js";
import { qP, Tz, c_e, ns, bje } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { REMOTE_CALLOUT_DIALOG } from "../../01-核心基础设施/共享小工具-未细化/remote-callout-dialog.js";
import { resetUserData, isBgSession, removeDiscardedGatewayCredential, sameOwnerAccount, getOauthAccountInfo, getScreenReaderEnvOverrides, refreshGrowthBookAfterAuthChange } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { ge, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { yieldToEventLoop } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { isExiting } from "../../01-核心基础设施/共享小工具-未细化/exit-commit-state.js";
import { readStoredTrustedDeviceToken, clearTrustedDeviceToken, enrollTrustedDevice } from "./chunk-tyce0p0b.js";
import { REMOTE_CONTROL_DISCONNECTED_MESSAGE } from "./remote-control-messages.js";
import { notifyRoomAccountChanged } from "../Artifact发布-渲染/chunk-rr78st95.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { getConversationMessages, gracefulShutdown, relatchTenguSandboxGbConfig, findLastAssistantMessage, createSystemInfoMessage, stripThinkingBlocks, isTranscriptPersistenceDisabled } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getOrgMemoryIdentity, clearOrgMemoryCredential, onOrgMemoryAuthCompletion, clearOrgMemoryDiscoveryCaches, clearOrgMemoryDiscoveryAccountState } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { getToolPermissionContext, getSessionEffort } from "../权限系统/chunk-fjrcf22x.js";
import { applyConfigEnvironmentVariables } from "../../01-核心基础设施/遥测-OpenTelemetry/settings-env-application.js";
import { buildCarriableSessionFlags, collectUncarriableLaunchReasons, buildCarriableRuleFlags } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import { refreshPolicyLimits } from "../策略限制(PolicyLimits)/policy-limits-client.js";
import { acquireConsentHandoffHold, setConsentNeededRelease, clearRemoteManagedSettings, tryRefreshRemoteManagedSettings, refreshRemoteManagedSettings } from "../../01-核心基础设施/设置-配置/remote-managed-settings.js";
import { useHasVirtualScrollViewport } from "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-state.js";
import { Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { useSetAppState } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { useGlobalExitKeybinding } from "../../01-核心基础设施/共享小工具-未细化/exit-keybinding-hooks.js";
import { removeNotificationFromState } from "../../03-入口与运行时/会话UI(REPL)/notification-queue.js";
import { WA, Vx, de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { OAuthLoginScreen } from "../认证-OAuth登录/chunk-xvt7fc9t.js";
import { showStandaloneSecurityDialog } from "../../01-核心基础设施/共享小工具-未细化/standalone-security-dialog.js";
import { useMainLoopModel } from "../../01-核心基础设施/共享小工具-未细化/main-loop-model.js";
import { hasPolicyDiverged } from "../../01-核心基础设施/共享小工具-未细化/chunk-22525f7p.js";
import { resetAuthCachesAfterLogin, runAutoModeGateCheck, rearmAutoModeCheck } from "../../01-核心基础设施/共享小工具-未细化/chunk-8r3h1dwe.js";
import { persistTranscriptLeafCheckpoint, relaunchClaudeCode } from "../../01-核心基础设施/核心工具-进程与信号/session-relaunch.js";
import { ActionKeybindingHint } from "../../01-核心基础设施/共享小工具-未细化/action-keybinding-hint.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { BRIDGE_FAILED_ERROR } from "./remote-control-ui-strings.js";
import { C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function runOrgMemoryAuthBoundary() {
  onOrgMemoryAuthCompletion(getOrgMemoryIdentity());
}
async function runPostLoginHooks(o, s, i) {
  if (
    (o.onChangeAPIKey(), o.applyMessageOp({ type: "update", updater: stripThinkingBlocks }), !s)
  )
    return { bridgeDisconnected: !1, accountSwitched: !1, relaunching: !1 };
  let u = ns(),
    c = u !== null && u !== i.previousGatewayAuth;
  if (getAPIProvider() === "gateway") {
    let f = i.onConsentNeeded,
      W = { release: null },
      Z = f ? setConsentNeededRelease(() => ((W.release ??= acquireConsentHandoffHold()), f())) : null;
    try {
      let A;
      try {
        A = await refreshRemoteManagedSettings(showStandaloneSecurityDialog, o.storageV5, o.credentials);
      } finally {
        Z?.();
      }
      let H = ns(),
        k = ue(H);
      if (
        c &&
        !A.fetchSucceeded &&
        A.failure?.errorKind === "gateway_cert_mismatch"
      )
        return await le(o, H, formatGatewayPinMismatchError(k, A.failure.gatewayPinMismatch));
      if (!A.fetchSucceeded || hasPolicyDiverged()) {
        let V = A.fetchSucceeded ? void 0 : A.failure;
        return (await fe(o, formatGatewayRestartNotice(k, V, c), (ee) => formatGatewayExitNotice(k, V, ee, c)), D);
      }
      if (isExiting()) return D;
      (resetAuthCachesAfterLogin("gateway"), applyConfigEnvironmentVariables(), relatchTenguSandboxGbConfig());
    } finally {
      if (!isExiting()) W.release?.();
    }
  } else tryRefreshRemoteManagedSettings(showStandaloneSecurityDialog, o.storageV5, o.credentials);
  (c_e(), refreshPolicyLimits(), resetUserData(), refreshGrowthBookAfterAuthChange());
  let { setAppState: g } = i,
    y = authStateStore.of(o.session),
    m = () => y.credentialsPersisted(),
    w = i.previousAccount,
    E = getOauthAccountInfo(),
    S = sameOwnerAccount(w, E),
    { replBridgeEnabled: T, replBridgeOutboundOnly: N } = o.getAppState(),
    v = w?.accountUuid !== void 0 && !S,
    O = v && T && !N;
  if (v)
    g((f) => {
      if (!(f.replBridgeEnabled || f.replBridgeError !== void 0)) return f;
      return (
        logForDebugging(
          "[bridge:repl] Account changed via /login \u2014 disconnecting Remote Control session",
        ),
        {
          ...f,
          replBridgeEnabled: !1,
          replBridgeExplicit: !1,
          replBridgeOutboundOnly: !1,
          replBridgeError: void 0,
          replBridgeErrorKind: void 0,
          notifications: removeNotificationFromState(f.notifications, BRIDGE_FAILED_ERROR),
        }
      );
    });
  if ((clearOrgMemoryCredential(), clearOrgMemoryDiscoveryCaches(), notifyRoomAccountChanged(E), v))
    if (
      (clearOrgMemoryDiscoveryAccountState(),
      i.setAppState((f) => ({
        ...f,
        replBridgeSessionGroupingId: void 0,
        replBridgeInitialName: void 0,
        ultrareviewOverageConfirmed: !1,
      })),
      o.dialogStore)
    )
      o.dialogStore.dismissKind(REMOTE_CALLOUT_DIALOG.kind);
    else
      logError(
        Error(
          "runPostLoginHooks: no dialog store to dismiss a pending Remote Control callout on account switch",
        ),
      );
  if (S && (await readStoredTrustedDeviceToken()))
    (logForDebugging(
      "[trusted-device] Same account+org re-login with existing token, skipping re-enrollment",
    ),
      m());
  else {
    clearTrustedDeviceToken();
    let f = enrollTrustedDevice({ credentials: o.credentials }).then(m, m);
    if (i.awaitEnrollment) await f;
  }
  let { host: x } = o.session,
    Y = o.getAppState();
  return (
    rearmAutoModeCheck(x),
    runAutoModeGateCheck(x, getToolPermissionContext(o), g, Y.fastMode),
    runOrgMemoryAuthBoundary(),
    y.loginCompleted(),
    { bridgeDisconnected: O, accountSwitched: v, relaunching: !1 }
  );
}
var se = 16;
function j(o) {
  return `${o.slice(0, se)}\u2026`;
}
function ue(o) {
  try {
    return o ? new URL(o.url).hostname : "gateway";
  } catch {
    return o?.url ?? "gateway";
  }
}
var D = { bridgeDisconnected: !1, accountSwitched: !1, relaunching: !0 };
async function le(o, s, i) {
  for (let g = bje(); g; g = bje()) await g.catch(() => {});
  let u = ns();
  if (
    (await removeDiscardedGatewayCredential(u && s && u.url === s.url ? u : s, o.credentials),
    await clearRemoteManagedSettings(o.storageV5),
    isExiting())
  )
    return { ...D, gatewayLoginError: i };
  let c = !isTranscriptPersistenceDisabled();
  if (c) await persistTranscriptLeafCheckpoint(o.messages, o.storageV5);
  return (
    await gracefulShutdown(0, "other", {
      finalMessage: `${i}
This session is ending so that nothing from that gateway stays half-applied. Start claude again${c ? " to continue (your conversation can be resumed)" : ""} and sign in once that is fixed.`,
    }),
    { ...D, gatewayLoginError: i }
  );
}
function formatGatewayPinMismatchError(o, s) {
  let i =
    s?.presentedFingerprint && s.pinnedFingerprint
      ? `TLS certificate ${j(s.presentedFingerprint)} instead of the one you trusted (${j(s.pinnedFingerprint)})`
      : "a different TLS certificate from the one you trusted";
  return `Cloud gateway sign-in was not completed: on the first request after sign-in, ${o} presented ${i}. No gateway credentials were kept. Usually this means the gateway runs several nodes behind one address that serve different certificates (they must all serve the same one), or something on the network path is intercepting TLS.`;
}
function me(o, s) {
  switch (o.errorKind) {
    case "timeout":
      return "the request timed out";
    case "network_error":
      return "couldn't connect to the gateway";
    case "http_401":
      return s
        ? "the gateway did not accept the new credential"
        : "the gateway did not accept this session's credential";
    case "http_403":
      return "the gateway refused them for this account: Claude Code may not be enabled for your organization; contact your administrator";
    case "no_auth_available":
      return "no credential was on hand for the request";
    case "profile_credential_error":
      return "the profile credential could not authenticate the request (details with --debug)";
    case "http_4xx":
    case "http_5xx":
      return o.httpStatus === void 0
        ? "the gateway answered with an unexpected status"
        : `the gateway answered HTTP ${o.httpStatus}`;
    case "parse_error":
    case "invalid_settings":
      return "the gateway's response was not valid managed settings";
    case "gateway_cert_mismatch":
      return "the gateway's TLS certificate did not match the one you trusted";
    case "gateway_pin_refused":
      return "the credentials file that keeps the gateway's TLS pin is a symlink, which is not followed";
    case "gateway_pin_unreadable":
      return "the credentials file that keeps the gateway's TLS pin could not be read (try again)";
    case "unknown_error":
      return "something unexpected went wrong (details with --debug)";
  }
}
function Q(o, s, i) {
  if (s) {
    let u = me(s, i);
    return i
      ? `Signed in to Cloud gateway ${o}, but couldn't load your organization's managed settings (${u})`
      : `Couldn't reload your organization's managed settings from Cloud gateway ${o} (${u})`;
  }
  return i
    ? `Signed in to Cloud gateway ${o}`
    : `Your organization's managed settings on Cloud gateway ${o} changed`;
}
function formatGatewayRestartNotice(o, s, i, u = !isTranscriptPersistenceDisabled()) {
  let c = u
      ? "\u2026"
      : " (this conversation is not saved, so it starts fresh)\u2026",
    g = Q(o, s, i);
  return s
    ? `${g}. Restarting Claude Code to retry${c}`
    : `${g}. Restarting Claude Code to apply ${i ? "your organization's managed settings" : "them"}${c}`;
}
function formatGatewayExitNotice(o, s, i, u, c = !isTranscriptPersistenceDisabled()) {
  return `${Q(o, s, u)}. ${s ? "Claude Code has to restart to retry" : `Claude Code has to restart to apply ${u ? "your organization's managed settings" : "them"}`}, and ${i}, so this session is ending instead. Your sign-in is saved: start claude again the same way${c ? " (add --continue to return to this conversation)" : ""}.`;
}
async function fe(o, s, i) {
  if (isExiting()) return;
  let u = (m) => gracefulShutdown(0, "other", { finalMessage: i(m) });
  if ((await persistTranscriptLeafCheckpoint(getConversationMessages(o), o.storageV5), isExiting())) return;
  if (isBgSession())
    return u(
      "a background session cannot restart itself (sign in from a session started directly with `claude`)",
    );
  let c = getToolPermissionContext(o),
    g = collectUncarriableLaunchReasons(c, qP());
  if (g.length > 0)
    return u(
      `this session has restrictions a restart can't carry over (${g.join("; ")})`,
    );
  let y = {
    proactivityLevel: o.getProactivityLevel(),
    toolPermissionContext: c,
  };
  try {
    await relaunchClaudeCode(
      {
        freshIfNoTranscript: !0,
        extraArgs: [...buildCarriableSessionFlags(c, getSessionEffort(o)), ...buildCarriableRuleFlags(c, Tz())],
        proactivity: y,
        env: getScreenReaderEnvOverrides(),
        preSpawn: () =>
          process.stdout.write(`
${s}
`),
      },
      o.storageV5,
    );
  } catch (m) {
    return (logError(ge(m)), u(`it could not restart itself (${l(m)})`));
  }
}
function loginCompletion(o, s, i, { envTokenWasSet: u = !1, envWarningOnce: c } = {}) {
  if (i.gatewayLoginError !== void 0 || i.relaunching)
    return [i.gatewayLoginError];
  let g = s ? loginAutoContinueOptions(o, i) : void 0,
    y = envTokenWarningRoute({
      envTokenWasSet: u,
      gatewayActive: getAPIProvider() === "gateway",
      willAutoQuery: g?.shouldQuery === !0,
    });
  if (y === "out-of-band" && c && !c.delivered)
    ((c.delivered = !0),
      o.applyMessageOp({ type: "append", messages: [createSystemInfoMessage(LOGIN_SUCCESS_ENV_OVERRIDE_WARNING, "notice")] }));
  return [
    buildLoginDoneMessage(s, {
      bridgeDisconnected: i.bridgeDisconnected,
      includeEnvTokenWarning: y === "inline",
    }),
    g,
  ];
}
function loginAutoContinueOptions(o, s) {
  if (s.accountSwitched || s.relaunching) return;
  let i = findLastAssistantMessage(o.messages);
  if (i?.isApiErrorMessage && i.error === "authentication_failed")
    return { display: "system", shouldQuery: !0 };
  return;
}
var q =
  "but if that variable is set in your shell profile or a Claude Code settings file, new `claude` sessions will keep using the old token until you remove it there.";
function getLoginConsentHandoffMessage() {
  return "Signed in. Review your organization's managed settings to continue.";
}
function getLoginStartingMessage() {
  return a.CLAUDE_CODE_OAUTH_TOKEN
    ? `Warning: CLAUDE_CODE_OAUTH_TOKEN is set in your environment. This session will switch to your new credentials after logging in, ${q}`
    : void 0;
}
var LOGIN_SUCCESS_ENV_OVERRIDE_WARNING = `Note: CLAUDE_CODE_OAUTH_TOKEN was set in your environment when /login started. This session will use your new credentials, ${q}`;
function envTokenWarningRoute(o) {
  if (!o.envTokenWasSet || o.gatewayActive) return "none";
  return o.willAutoQuery ? "out-of-band" : "inline";
}
function buildLoginDoneMessage(o, s) {
  if (!o) return "Login interrupted";
  let i = s.bridgeDisconnected
    ? `Login successful. ${REMOTE_CONTROL_DISCONNECTED_MESSAGE}`
    : "Login successful";
  return s.includeEnvTokenWarning
    ? `${i}

${LOGIN_SUCCESS_ENV_OVERRIDE_WARNING}`
    : i;
}
async function call(o, s) {
  let i = getLoginStartingMessage(),
    u = i !== void 0,
    c = getOauthAccountInfo(),
    g = c && {
      accountUuid: c.accountUuid,
      organizationUuid: c.organizationUuid,
    },
    y = ns(),
    m = { delivered: !1 };
  return e(Login, {
    startingMessage: i,
    onDone: async (w, E, S) => {
      let T = !1,
        N = await runPostLoginHooks(s, w, {
          setAppState: S,
          previousAccount: g,
          previousGatewayAuth: y,
          onConsentNeeded: () => (
            (T = !0),
            o(getLoginConsentHandoffMessage(), { display: "system" }),
            yieldToEventLoop()
          ),
        }),
        v = loginCompletion(s, w, N, { envTokenWasSet: u, envWarningOnce: m });
      if (T) {
        let [O] = v;
        if (O)
          s.applyMessageOp({ type: "append", messages: [createSystemInfoMessage(O, "notice")] });
        return;
      }
      o(...v);
    },
  });
}
function Login(R) {
  let b = _(23),
    X = useMainLoopModel(),
    z = useSetAppState(),
    yt = useHasVirtualScrollViewport(),
    [G, wt] = d(!1),
    te;
  if (b[0] === MEMO_CACHE_SENTINEL) ((te = () => wt(!0)), (b[0] = te));
  else te = b[0];
  let St = te,
    ne = C(!1),
    oe;
  if (b[1] !== X || b[2] !== R || b[3] !== z)
    ((oe = (Ct) => {
      if (ne.current) {
        return;
      }
      ((ne.current = !0), R.onDone(Ct, X, z));
    }),
      (b[1] = X),
      (b[2] = R),
      (b[3] = z),
      (b[4] = oe));
  else oe = b[4];
  let M = oe,
    re;
  if (b[5] !== G || b[6] !== M)
    ((re = () => M(G)), (b[5] = G), (b[6] = M), (b[7] = re));
  else re = b[7];
  let P = re,
    ie;
  if (b[8] === MEMO_CACHE_SENTINEL) ((ie = { context: "Settings" }), (b[8] = ie));
  else ie = b[8];
  useKeybinding("confirm:no", P, ie);
  let L = useGlobalExitKeybinding();
  const J = G && !L.pending;
  let I;
  if (b[9] !== L.keyName || b[10] !== L.pending)
    ((I = L.pending
      ? r(Text, { children: ["Press ", L.keyName, " again to exit"] })
      : e(ActionKeybindingHint, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "cancel",
        })),
      (b[9] = L.keyName),
      (b[10] = L.pending),
      (b[11] = I));
  else I = b[11];
  let B;
  if (b[12] !== M) ((B = () => M(!0)), (b[12] = M), (b[13] = B));
  else B = b[13];
  const K = yt ? Vx : WA;
  let U;
  if (b[14] !== R.startingMessage || b[15] !== B || b[16] !== K)
    ((U = e(OAuthLoginScreen, {
      onDone: B,
      onAuthSuccess: St,
      startingMessage: R.startingMessage,
      urlOutdent: K,
    })),
      (b[14] = R.startingMessage),
      (b[15] = B),
      (b[16] = K),
      (b[17] = U));
  else U = b[17];
  let ae;
  if (b[18] !== P || b[19] !== J || b[20] !== I || b[21] !== U)
    ((ae = e(de, {
      title: "Login",
      onCancel: P,
      color: "permission",
      isCancelActive: !1,
      hideInputGuide: J,
      inputGuide: I,
      children: U,
    })),
      (b[18] = P),
      (b[19] = J),
      (b[20] = I),
      (b[21] = U),
      (b[22] = ae));
  else ae = b[22];
  return ae;
}
export { runOrgMemoryAuthBoundary, runPostLoginHooks, formatGatewayPinMismatchError, formatGatewayRestartNotice, formatGatewayExitNotice, loginCompletion, loginAutoContinueOptions, getLoginConsentHandoffMessage, getLoginStartingMessage, LOGIN_SUCCESS_ENV_OVERRIDE_WARNING, envTokenWarningRoute, buildLoginDoneMessage, call, Login };
