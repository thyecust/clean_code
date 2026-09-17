// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 179 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { withDeadline } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { R, l, W, Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { We, z, nje, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { stripXmlTags, isEssentialTrafficOnly } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  si,
  getOrganizationUUID,
  getOAuthAccountOnHold,
  isOAuthRefreshKnownDead,
  getClaudeAIOAuthTokenOrigin,
  handleOAuth401Error,
  readFreshOAuthAccessToken,
  sameOwnerAccount,
  readFreshOAuthCredentialSnapshot,
  checkAndRefreshOAuthTokenIfNeeded,
  getStoredOAuthTokenExpiresAt,
  hasStoredOAuthRefreshToken,
  getStoredOauthAccountInfo,
  Te,
  ee,
  sy,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getProjectsDir, SKIP_PRECOMPACT_THRESHOLD } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { kd, snapshotGitEvidenceForBridge } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { isValidPathSegment, hasValidPathSegments, STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { SECURE_STORAGE_READ_FAILED_SENTINEL, getSecureStorage } from "../认证-OAuth登录/secure-storage.js";
import { setCseShimGate, toInfraSessionId, sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { isTeammate } from "../Teammates团队/teammate-context.js";
import { generateAdjectiveNounName } from "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import { getProcessStartTimeAsync } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { getBridgeTokenOverride, getBridgeAccessToken, getBridgeAccessTokenAsync, getBridgeBaseUrl, getBridgeSessionNamePrefix } from "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import { p6, F$e, lrr, Dve } from "./chunk-5ne99rq3.js";
import { retireBridgeHandle, setSelfBridgeTitle } from "../权限系统/chunk-1y2g140m.js";
import {
  getBridgeSession,
  updateBridgeSessionColorTag,
  isSessionTeleported,
  applyResolvedSessionName,
  serializeTranscriptMessages,
  isNoContentMessage,
  getMessageContentText,
  isCompactBoundaryMessage,
  sliceFromLastCompactBoundary,
  streamTranscriptLinesBackward,
  isSyncedTranscriptEntry,
  getMaterializedSessionFile,
  setInternalEventWriter,
  clearInternalEventWriter,
  setInternalEventReader,
  saveCustomTitle,
  writeHistorySuppression,
  isSessionHistorySuppressed,
  readHistorySuppressionFromDisk,
  SUPPRESSION_SCAN_MAX_LINES,
  isOwnTranscriptFile,
  getDerivedTranscriptPathForSession,
  matchesHistorySuppressionLine,
  holdSessionHistorySuppressionFor,
  isSessionHistorySuppressedFor,
  pinSessionId,
  holdPrecautionarySuppressionFor,
  markPrecautionClearResilientFor,
  markScanUncertaintyHoldFor,
  isScanUncertaintyHoldFor,
  claimPrecautionHoldForObservedCause,
  releaseScanUncertaintyHoldFor,
  isPrecautionarySuppressionHeldFor,
  isRowForeignToBridgeSession,
  isBridgeBindingForeign,
  getBridgeBoundConversationSid,
  isRemoteEgressSuppressedFor,
  clearBridgeSession,
  getCurrentSessionBridge,
  getCurrentSessionTitle,
  getCurrentSessionAiTitle,
  getCurrentSessionAgentColor,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { listRegisteredSessionRecords } from "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import { isPolicyAllowed, policyDenyKind, policyDeniedHint } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { getAgentTranscriptPath, listAgentIds } from "../Teammates团队/transcript-paths.js";
import { createDefaultToolPermissionContext } from "../权限系统/chunk-qdy0h5k2.js";
import { isBridgeEnabledBlocking, describeRemoteControlPolicyDenial, isCseShimEnabled, isBridgeStateFramesEnabled, isBridgeResumeRespectsLocalOwnerEnabled, isBridgeRestoredMatchMintEnabled } from "./chunk-9estzwf5.js";
import { AGENT_COLOR_NAMES } from "../../01-核心基础设施/共享小工具-未细化/agent-color-palette.js";
import { logBridgeSkip } from "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import { isPushNotificationsEnabled } from "./push-notification-tool.js";
import { PROACTIVE_ENROLLMENT_DISABLED_MESSAGE, getAttestationFilterPolicy, preflightTrustedDeviceBlocking } from "./chunk-tyce0p0b.js";
import { LOGIN_SLASH_COMMAND, REMOTE_CONTROL_ACCOUNT_UNVERIFIED_MESSAGE } from "./remote-control-messages.js";
import { globalFileIndexCache, generateFileSuggestions } from "../工具Glob-Grep-搜索/chunk-57axeagj.js";
import { createClientPresenceReporter } from "./client-presence.js";
import { hydratePushNotificationPreferences } from "../推送通知(Push)/推送通知(Push).8ab67cqd.js";
import { b_ } from "../策略限制(PolicyLimits)/chunk-hpw6352m.js";
import { readFileForRemote } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { buildWorkspaceDiffResponse } from "../Git-Worktree/chunk-qdn32vbw.js";
import { collectConversationText, generateSessionTitle } from "../会话-历史-恢复/session-title.js";
import { ndt, Yjn } from "./chunk-ga43tr2w.js";
import "./chunk-znhfst8k.js";
import "../../01-核心基础设施/共享小工具-未细化/reply-degraded-state.js";
import "./bridge-inbound-origin.js";
import { WorkSecretShapeError, parseWorkSecret, sessionIdsMatch, buildSessionApiUrl, registerWorker } from "../../01-核心基础设施/共享小工具-未细化/work-secret.js";
import { isBridgeStoreLogin, createBridgeOwnerPin, createBridgeTitleWriter } from "./chunk-1g5kqtqx.js";
import "../../03-入口与运行时/Headless-SDK模式/chunk-yb7jadvp.js";
import { getTokenSessionId, getTokenExpiry } from "./chunk-4zd60pbm.js";
import { isProcessRunning } from "../../01-核心基础设施/共享小工具-未细化/process-record.js";
import { runPaginatedScan, createPageBudget } from "../../01-核心基础设施/共享小工具-未细化/paginated-scan.js";
var gn = 3000;
async function gt(d, c) {
  if (!(await isBridgeStoreLogin(c)) || !getStoredOauthAccountInfo()?.accountUuid) return;
  return (s) => mn(s, d, c);
}
async function mn(d, c, s) {
  let r = await withDeadline(hn(c, s), gn).then(
    (h) => h ?? "unknown_timeout",
    () => "unknown_error",
  );
  return (
    n(`[bridge:signed-out] site=${d} verdict=${r}`),
    logEvent("tengu_bridge_token_absence_classified", { site: fromEnum(d), verdict: fromEnum(r) }),
    r
  );
}
async function hn(d, c) {
  let s = getSecureStorage(),
    r = await sy(d),
    h = !r?.accountUuid && Boolean(getStoredOauthAccountInfo()?.accountUuid);
  if (r?.accountUuid || h) {
    if ((await s.readAsync(c))?.claudeAiOauth?.refreshToken === "")
      return "refresh_token_dead";
    return h ? "unknown_identity_cached_only" : "unknown_identity_present";
  }
  let p = await s.readAsyncStrict?.(c);
  if (p === void 0 || p === SECURE_STORAGE_READ_FAILED_SENTINEL) return "unknown_store_unreadable";
  if (p?.claudeAiOauth?.refreshToken === "") return "refresh_token_dead";
  if (p?.claudeAiOauth !== void 0)
    return "unknown_identity_absent_token_present";
  return "signed_out";
}
async function mt(d) {
  let c = sessionIdBody(d),
    s = await listRegisteredSessionRecords().catch(() => {
      return;
    });
  if (s === void 0) {
    logFeatureSad("bridge_resume_guard", "registry_read_failed");
    return;
  }
  for (let r of s) {
    if (
      r.pid === process.pid ||
      r.bridgeSessionId === void 0 ||
      sessionIdBody(r.bridgeSessionId) !== c
    )
      continue;
    let h = r.procStartFt ?? r.procStart;
    if (h === void 0 || !isProcessRunning(r.pid)) continue;
    let p = await getProcessStartTimeAsync(r.pid, { skipCache: !0 });
    if (p === void 0) {
      n(
        `[bridge:repl] pid ${r.pid} advertises bridge session ${d} but its start token is unreadable \u2014 not treated as a holder`,
      );
      continue;
    }
    if (p === h) return { pid: r.pid, startedAt: r.startedAt };
  }
  return;
}
function ht() {
  try {
    if (
      getBridgeTokenOverride() === void 0 &&
      getClaudeAIOAuthTokenOrigin() === "store" &&
      hasStoredOAuthRefreshToken() &&
      !isOAuthRefreshKnownDead() &&
      getOAuthAccountOnHold() === null
    )
      return "unreachable";
  } catch {}
  return "rejected";
}
import { stat as Sn } from "fs/promises";
import { sep as yt } from "path";
var _t = 20;
async function Tt(d, c, s, r, h) {
  if (isSessionHistorySuppressed())
    return (
      n(
        "[persistence-sync] Refusing backfill: conversation carries a history-suppression taint",
      ),
      { uploadedMain: 0, uploadedSubagents: 0 }
    );
  let p = K(),
    k = getMaterializedSessionFile(),
    F = k !== null && isOwnTranscriptFile(p, k) ? k : getDerivedTranscriptPathForSession(p),
    [f, b] = await Promise.all([c.readMain(), c.readSubagents()]),
    w = new Set();
  for (let E of f?.events ?? []) {
    let P = E.payload.uuid;
    if (typeof P === "string") w.add(P);
  }
  for (let E of b?.events ?? []) {
    let P = E.payload.uuid;
    if (typeof P === "string") w.add(P);
  }
  n(`[persistence-sync] Server has ${w.size} events since compaction`);
  let S = (E) => {
    n(`[persistence-sync] Write failed: ${E}`);
  };
  if (p !== K())
    return (
      n(
        "[persistence-sync] Refusing backfill: session id changed since the scan anchor was pinned (mid-scan /resume) \u2014 pinned content is not the current conversation",
      ),
      { uploadedMain: 0, uploadedSubagents: 0 }
    );
  if (isRemoteEgressSuppressedFor(pinSessionId(p)))
    return (
      n(
        "[persistence-sync] Refusing backfill: foreign binding or suppression carrier present at the post-await re-consult",
      ),
      { uploadedMain: 0, uploadedSubagents: 0 }
    );
  let T = await bt(F, w, !0, r, h);
  if (T === "budget-exhausted") {
    let E = isPrecautionarySuppressionHeldFor(pinSessionId(p));
    if ((holdPrecautionarySuppressionFor(pinSessionId(p)), markPrecautionClearResilientFor(pinSessionId(p)), !E)) markScanUncertaintyHoldFor(pinSessionId(p));
    return (
      n(
        "[persistence-sync] Taint sweep budget exhausted: refusing this backfill (precautionary hold, no durable stamp)",
      ),
      { uploadedMain: 0, uploadedSubagents: 0 }
    );
  }
  if (T === "tainted")
    return (
      holdSessionHistorySuppressionFor(pinSessionId(p)),
      n(
        "[persistence-sync] Main transcript tainted: aborting sync (subagents included), healing the in-memory flag",
      ),
      { uploadedMain: 0, uploadedSubagents: 0 }
    );
  for (let E of T)
    d("transcript", E, {
      ...(isCompactBoundaryMessage(E) && {
        isCompaction: !0,
        preservedEventIds: E.compactMetadata?.preservedMessages?.uuids,
      }),
    }).catch(S);
  if (p !== K())
    return (
      n(
        "[persistence-sync] Skipping subagent backfill: session id changed during the main read (mid-sync /resume)",
      ),
      { uploadedMain: T.length, uploadedSubagents: 0 }
    );
  let C = 0;
  for (let { agentId: E, path: P } of await kn(s, r)) {
    let x = await bt(P, w, !1, r, h);
    if (x === "budget-exhausted") {
      let D = isPrecautionarySuppressionHeldFor(pinSessionId(p));
      if ((holdPrecautionarySuppressionFor(pinSessionId(p)), markPrecautionClearResilientFor(pinSessionId(p)), !D)) markScanUncertaintyHoldFor(pinSessionId(p));
      break;
    }
    if (x === "tainted") {
      holdSessionHistorySuppressionFor(pinSessionId(p));
      break;
    }
    for (let D of x)
      d("transcript", D, {
        ...(isCompactBoundaryMessage(D) && {
          isCompaction: !0,
          preservedEventIds: D.compactMetadata?.preservedMessages?.uuids,
        }),
        agentId: E,
      }).catch(S);
    C += x.length;
  }
  return (
    n(`[persistence-sync] Uploaded ${T.length} main + ${C} subagent entries`),
    { uploadedMain: T.length, uploadedSubagents: C }
  );
}
async function kn(d, c) {
  let r = (
      c !== void 0 ? await bn(c, d) : await Promise.all(d.map((f) => vt(f)))
    ).filter((f) => f !== null),
    h = r.filter((f) => f.size <= SKIP_PRECOMPACT_THRESHOLD),
    p = h.sort((f, b) => b.mtimeMs - f.mtimeMs).slice(0, _t),
    k = r.length - h.length,
    F = h.length - p.length;
  if (k > 0 || F > 0)
    n(
      `[persistence-sync] Subagent backfill capped: ${k} over ${SKIP_PRECOMPACT_THRESHOLD}B, ${F} beyond ${_t}-agent limit (live stream unaffected)`,
    );
  return p;
}
async function bt(d, c, s = !0, r, h) {
  let p = r ? At(d) : null,
    k = [],
    F = !1;
  try {
    let f = 0,
      b = r && p ? streamTranscriptLinesBackward(r, p) : nje(d);
    for await (let w of b) {
      if (matchesHistorySuppressionLine(w))
        return (
          n(
            "[persistence-sync] Refusing backfill: history-suppression entry in transcript",
          ),
          "tainted"
        );
      if (F) {
        if (++f >= SUPPRESSION_SCAN_MAX_LINES)
          return (
            n(
              "[persistence-sync] Refusing backfill: pre-boundary taint sweep exhausted its line budget without a verdict",
            ),
            "budget-exhausted"
          );
        continue;
      }
      let S;
      try {
        S = z(w);
      } catch {
        continue;
      }
      if (!isSyncedTranscriptEntry(S)) continue;
      if (isRowForeignToBridgeSession(S, h)) continue;
      if (!c.has(S.uuid)) k.push(S);
      if (isCompactBoundaryMessage(S)) {
        if (!s) break;
        F = !0;
      }
    }
  } catch (f) {
    if (W(f)) return [];
    throw f;
  }
  return k.reverse();
}
async function vt(d, c = getAgentTranscriptPath(d)) {
  try {
    let s = await Sn(c);
    return { agentId: d, path: c, size: s.size, mtimeMs: s.mtimeMs };
  } catch {
    return null;
  }
}
async function bn(d, c) {
  let s = c.map((f) => {
      let b = getAgentTranscriptPath(f);
      return { agentId: f, path: b, key: At(b) };
    }),
    r = (f) =>
      f !== null && f.namespace === "transcript" && f.agentId !== void 0
        ? f
        : null,
    h = (f) => [f.projectKey, f.sessionId, ...(f.agentRelPath ?? [])].join("/"),
    p = new Map();
  for (let { key: f } of s) {
    let b = r(f);
    if (b !== null)
      p.set(h(b), {
        projectKey: b.projectKey,
        sessionId: b.sessionId,
        ...(b.agentRelPath !== void 0 && { agentRelPath: b.agentRelPath }),
      });
  }
  let k = new Map(),
    F = createPageBudget();
  return (
    await Promise.all(
      [...p].map(
        async ([f, { projectKey: b, sessionId: w, agentRelPath: S }]) => {
          let T = new Map();
          k.set(f, T);
          let C = () => k.delete(f),
            E =
              S === void 0
                ? `session ${w}`
                : `session ${w} subtree ${S.join("/")}`;
          try {
            let P = await runPaginatedScan(
              (x) =>
                d.listEntries(
                  {
                    namespace: "transcript",
                    projectKey: b,
                    sessionId: w,
                    ...(S !== void 0 && { agentRelPath: S }),
                  },
                  { skipScopeStats: !0, ...(x !== void 0 && { cursor: x }) },
                ),
              (x) => {
                for (let D of x)
                  if (
                    D.kind === "key" &&
                    D.key.namespace === "transcript" &&
                    D.key.agentId !== void 0 &&
                    h(D.key) === f &&
                    D.size !== void 0 &&
                    D.mtimeMs !== void 0
                  )
                    T.set(D.key.agentId, { size: D.size, mtimeMs: D.mtimeMs });
              },
              { budget: F },
            );
            if (P.status !== "done")
              (n(
                `[persistence-sync] subagent listing for ${E} ${P.status === "error" ? `failed: ${We(P.error)}` : "was capped"} \u2014 its subagents are skipped`,
              ),
                C());
          } catch (P) {
            (n(
              `[persistence-sync] subagent listing for ${E} threw: ${l(P)} \u2014 its subagents are skipped`,
            ),
              C());
          }
        },
      ),
    ),
    Promise.all(
      s.map(async ({ agentId: f, path: b, key: w }) => {
        let S = r(w);
        if (S === null) return vt(f, b);
        let T = k.get(h(S)),
          C = T?.get(S.agentId);
        if (C === void 0 && T !== void 0)
          n(
            `[persistence-sync] subagent ${f} not in its folder's listing \u2014 skipped`,
          );
        return C === void 0 ? null : { agentId: f, path: b, ...C };
      }),
    )
  );
}
function At(d) {
  let c = getProjectsDir() + yt;
  if (!d.startsWith(c)) return null;
  let s = d.slice(c.length).split(yt);
  if (s.length === 2 && s[1].endsWith(".jsonl")) {
    let r = s[0],
      h = s[1].slice(0, -6);
    return isValidPathSegment(r) && isValidPathSegment(h) ? wt(STORAGE_KEYS.transcript(r, h)) : null;
  }
  if (
    s.length >= 4 &&
    s[2] === "subagents" &&
    s.at(-1).startsWith("agent-") &&
    s.at(-1).endsWith(".jsonl")
  ) {
    let r = s[0],
      h = s[1],
      p = s.slice(3, -1),
      k = s.at(-1).slice(6, -6);
    return isValidPathSegment(r) && isValidPathSegment(h) && isValidPathSegment(k) && (p.length === 0 || hasValidPathSegments(p))
      ? wt(STORAGE_KEYS.transcript(r, h, k, p.length > 0 ? p : void 0))
      : null;
  }
  return null;
}
function wt(d) {
  return kd(d) === void 0 ? d : null;
}
var wn = 2100;
function Rt(d) {
  let { sessionId: c, apiBaseUrl: s, requestFreshSecret: r } = d,
    h = Ct(d.secret, c);
  if (typeof h === "string")
    throw new R(`work secret rejected: ${h}`, "work secret rejected");
  let p = buildSessionApiUrl(s, c),
    k = null,
    F = !1;
  async function f() {
    if (!r)
      return (n("[bridge:work-secret] the host offers no refresh path"), null);
    let w;
    try {
      w = await r(c);
    } catch (C) {
      return (
        n(`[bridge:work-secret] host refresh request failed: ${l(C)}`, {
          level: "warn",
        }),
        null
      );
    }
    if (!w)
      return (n("[bridge:work-secret] host has no fresh secret yet"), null);
    let S = Ct(w, c);
    if (typeof S === "string")
      return (
        n(`[bridge:work-secret] fresh secret rejected: ${S}`, {
          level: "warn",
        }),
        null
      );
    let T = getTokenExpiry(S.session_ingress_token);
    if (
      k &&
      (S.session_ingress_token === k.secret.session_ingress_token ||
        (k.exp !== null && T !== null && T <= k.exp))
    )
      return (
        n(
          "[bridge:work-secret] host returned a secret no fresher than the registered one",
        ),
        null
      );
    return S;
  }
  async function b(w, S = !1) {
    let T = w.session_ingress_token,
      C;
    try {
      C = await registerWorker(p, T);
    } catch (x) {
      let { kind: D, status: j } = Ps(x);
      if (
        (n(
          `[bridge:work-secret] /worker/register failed kind=${D} status=${j ?? "none"}: ${l(x)}`,
          { level: "warn" },
        ),
        D === "other")
      )
        return { terminal: !0, reason: "malformed_response", status: 200 };
      if (j === void 0 || j === 408 || j === 429 || j >= 500) return null;
      if (S && (j === 401 || j === 403)) return ((F = !0), null);
      return { terminal: !0, reason: "request_rejected", status: j };
    }
    let E = getTokenExpiry(T);
    ((k = { secret: w, exp: E }), (F = !1));
    let P = E === null ? wn : Math.max(0, E - Math.floor(Date.now() / 1000));
    return (
      n(`[bridge:work-secret] registered worker epoch=${C} expires_in=${P}s`),
      { worker_jwt: T, api_base_url: s, expires_in: P, worker_epoch: C }
    );
  }
  return {
    async register(w, S) {
      if (w === "initial") return b(h);
      let T = await f();
      if (S?.stillWanted && !S.stillWanted())
        return (
          n(
            "[bridge:work-secret] bridge torn down or superseded while the host was asked; not registering",
          ),
          null
        );
      if (T) return b(T);
      let C =
        k !== null && k.exp !== null
          ? k.exp - Math.floor(Date.now() / 1000)
          : 0;
      if (
        k !== null &&
        !F &&
        S?.reuseHeldAboveS !== void 0 &&
        C > S.reuseHeldAboveS
      )
        return (
          n(
            `[bridge:work-secret] nothing fresher from the host; re-registering the held secret (${C}s left)`,
          ),
          b(k.secret, !0)
        );
      return null;
    },
  };
}
function Ct(d, c) {
  let s;
  try {
    s = parseWorkSecret(d);
  } catch (h) {
    return h instanceof WorkSecretShapeError ? h.message : "undecodable";
  }
  let r = getTokenSessionId(s.session_ingress_token);
  if (r === void 0) return "token carries no session_id claim";
  if (!sessionIdsMatch(r, c)) return "token is for a different session";
  return s;
}
var REPL_WORKSPACE_DIFF_COMPUTE_BUDGET = { perFileMs: 400, totalMs: 1500 },
  HEADLESS_BRIDGE_WORKSPACE_DIFF_COMPUTE_BUDGET = { perFileMs: 2000, totalMs: 6000 },
  vn = 60000;
async function initReplBridge(d) {
  let {
    getToolPermissionContext: c,
    host: s,
    workspaceDiffComputeBudget: r,
    getTools: h,
    onInboundMessage: p,
    onPermissionResponse: k,
    onInterrupt: F,
    onStopTask: f,
    onBackgroundTasks: b,
    getInitializeState: w,
    getCommands: S,
    isTurnLive: T,
    onDialogKindsDeclared: C,
    onClientInitialize: E,
    onSetModel: P,
    onSetMaxThinkingTokens: x,
    onSetPermissionMode: D,
    onApplyFlagSettings: j,
    onSetColor: Bt,
    onMcpAuthenticate: Ot,
    onMcpOauthCallbackUrl: Dt,
    onMcpReconnect: Pt,
    onMcpStatus: It,
    onBridgeInjectedMcp: Ft,
    onGetContextUsage: Ut,
    onGetUsage: Ht,
    onStateChange: G,
    initialMessages: de,
    getMessages: xt,
    initialName: $e,
    outboundOnly: Ge,
    tags: Lt,
    sessionGroupingId: je,
    reattachSessionId: Ne,
    reattachSequenceNum: Wt,
    reattachOrFail: $t,
    reviveInitiated: Gt,
    neverArchive: jt,
    recordAtEnable: Ke,
    onReattachPointerDead: Nt,
    localHolderGuard: Ee,
    suppressHistoryBackfill: ze,
    onHistoryBackfillSuppressed: Be,
    expectedAccount: qe,
    onAuthProven: Kt,
    enableSessionPersistence: zt,
    onTransportRebuilt: qt,
    storageV5: O,
    credentials: U,
    workSecret: Ve,
    onWorkSecretRefresh: Vt,
  } = d ?? {};
  (setCseShimGate(isCseShimEnabled), lrr(isBridgeStateFramesEnabled), Dve(getAttestationFilterPolicy));
  let v = pinSessionId(K()),
    Oe = getMaterializedSessionFile() ?? void 0,
    ke = Oe !== void 0 && v !== void 0 && !isOwnTranscriptFile(v, Oe),
    De = ke ? void 0 : Oe,
    _e = !1,
    I = Boolean(ze) || isSessionHistorySuppressed() || isPrecautionarySuppressionHeldFor(v) || isSessionHistorySuppressedFor(v),
    be = () => isRemoteEgressSuppressedFor(pinSessionId(K())),
    le = (e) => {
      if (I || isBridgeBindingForeign() || be()) return;
      let t = K();
      return t ? e(t) : void 0;
    };
  async function Xe(e, t, o) {
    if (((I = !0), (_e = !0), ke))
      logFeatureSad("rc_cross_account_suppression", "torn_entry_pair");
    else logFeatureOk("rc_cross_account_suppression");
    if (ke)
      (holdPrecautionarySuppressionFor(v),
        claimPrecautionHoldForObservedCause(v),
        n(
          `[bridge:repl] ${t} veto under a TORN entry pair (mid-/resume window): precautionary suppression only, no permanent taint write`,
          { level: "warn" },
        ));
    else await writeHistorySuppression(v, De, e, o, O);
  }
  let Pe = 0,
    Xt = {
      onTransportPersistenceReady: (e, t, o) => {
        let m = ++Pe;
        (async () => {
          try {
            if (I || be())
              n(
                "[bridge:repl] Persistence backfill suppressed (cross-account veto or foreign binding) \u2014 installing live writer only",
              );
            else {
              let _ = await listAgentIds(O);
              await Tt(e, t, _, O, o);
            }
          } catch (_) {
            n(`[bridge:repl] Persistence sync failed: ${l(_)}`, {
              level: "error",
            });
          }
          if (m !== Pe) {
            n(
              "[bridge:repl] Transport torn down during sync \u2014 skipping writer install",
            );
            return;
          }
          (setInternalEventWriter(
            (_, H, ie) => (
              e(_, H, ie).catch((Le) => {
                (logEvent("tengu_session_persistence_failed", {}),
                  n(`[bridge:repl] Internal event write failed: ${l(Le)}`, {
                    level: "error",
                  }));
              }),
              Promise.resolve()
            ),
            o,
          ),
            setInternalEventReader(t.readMain, t.readSubagents),
            n(
              "[bridge:repl] Session persistence enabled \u2014 transcript writer + hydrate readers registered",
            ));
        })();
      },
      onTransportPersistenceTeardown: () => {
        (Pe++, clearInternalEventWriter());
      },
    },
    ne = process.env.CLAUDE_BRIDGE_REATTACH_SESSION,
    B = ne ?? Ne,
    Ye = process.env.CLAUDE_BRIDGE_REATTACH_SEQ,
    Yt = process.env.CLAUDE_BRIDGE_REATTACH_GROUPING,
    Je = a.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT,
    Jt = a.CLAUDE_BRIDGE_REATTACH_OWNER_ORG,
    Qt = a.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL;
  if (ne)
    (delete process.env.CLAUDE_BRIDGE_REATTACH_SESSION,
      delete process.env.CLAUDE_BRIDGE_REATTACH_SEQ,
      delete process.env.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY,
      delete process.env.CLAUDE_BRIDGE_REATTACH_GROUPING,
      delete process.env.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT,
      delete process.env.CLAUDE_BRIDGE_REATTACH_OWNER_ORG,
      delete process.env.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL);
  let ce = ne ? (Ye ? Number.parseInt(Ye, 10) || void 0 : void 0) : Wt,
    oe = $t,
    se = ne ? "env" : Ne ? "option" : void 0,
    Qe = !1,
    Me,
    we = (e, t) => e !== void 0 && t !== void 0 && sessionIdBody(e) === sessionIdBody(t),
    A = Ke === void 0 ? getCurrentSessionBridge() : (Ke ?? void 0);
  if (!ne) {
    if (A) {
      let e = Boolean(A.ownerAccountUuid),
        t = e
          ? await sy(O).catch(() => {
              return;
            })
          : void 0,
        o =
          e &&
          sameOwnerAccount(t, {
            accountUuid: A.ownerAccountUuid,
            organizationUuid: A.ownerOrganizationUuid,
          });
      if (e && t?.accountUuid && !o)
        (await Xe(
          "restored_owner_mismatch",
          B ? "Host-directed" : "Restored-pointer",
          t.accountUuid,
        ),
          n(
            `[bridge:repl] ${B ? "Host-directed" : "Restored-pointer"} reattach vetoed: the credential store account changed since this conversation's pointer was persisted \u2014 minting fresh, history channels suppressed`,
            { level: "warn" },
          ),
          (B = void 0),
          (ce = void 0),
          (se = void 0));
      else {
        let m =
          e &&
          sameOwnerAccount(t, {
            accountUuid: A.ownerAccountUuid,
            organizationUuid: A.ownerOrganizationUuid,
          });
        if (A.noHistoryBackfill) I = !0;
        if (B && we(B, A.id)) B = A.id;
        if (!B) {
          if (((B = A.id), (ce = A.seq), !m || !isBridgeRestoredMatchMintEnabled())) oe = !0;
          ((se = m
            ? oe
              ? "restored_owner_match_pinned"
              : "restored_owner_match"
            : e
              ? "restored_identity_unreadable"
              : "restored_owner_unknown"),
            (Qe = !0),
            n(
              `[bridge:repl] Reattaching to persisted bridge session ${A.id} at seq ${A.seq} (${oe ? "reattach-or-fail" : "fresh-mint fallback"}, ${se})`,
            ));
        } else if (m) {
          if (!we(B, A.id))
            Me = {
              accountUuid: A.ownerAccountUuid,
              organizationUuid: A.ownerOrganizationUuid,
            };
        } else if (we(B, A.id))
          ((oe = !0),
            n(
              `[bridge:repl] Reattaching to the recorded bridge session ${A.id} as named by the carrier; owner unconfirmed \u2014 reattach-or-fail`,
            ));
        else
          ((I = !0),
            holdPrecautionarySuppressionFor(v),
            claimPrecautionHoldForObservedCause(v),
            n(
              "[bridge:repl] Host-directed reattach: this conversation\u2019s recorded owner could not be confirmed as the current login \u2014 attaching with history channels suppressed",
              { level: "warn" },
            ));
      }
    }
  }
  if (ne && B) {
    if (Qt) ((I = !0), holdPrecautionarySuppressionFor(v), claimPrecautionHoldForObservedCause(v));
    let e = await sy(O).catch(() => {
      return;
    });
    if (Je && e?.accountUuid) {
      if (!sameOwnerAccount(e, { accountUuid: Je, organizationUuid: Jt }))
        ((B = void 0),
          (ce = void 0),
          (se = void 0),
          await Xe("env_owner_mismatch", "Env-handoff", e.accountUuid),
          n(
            "[bridge:repl] Env-handoff reattach vetoed: the credential store account changed since the handoff was recorded \u2014 minting fresh, history channels suppressed",
            { level: "warn" },
          ));
    } else
      ((oe = !0),
        (se = "env_or_fail"),
        n(
          "[bridge:repl] Env-handoff reattach: owner identity unavailable \u2014 reattach-or-fail",
        ));
  }
  let Ze = we(B, A?.id);
  if (Ze) {
    if (A?.noHistoryBackfill) I = !0;
    ce ??= A?.seq;
  }
  let ue,
    et = () =>
      isScanUncertaintyHoldFor(v) &&
      !ze &&
      !_e &&
      !isSessionHistorySuppressed() &&
      !isSessionHistorySuppressedFor(v) &&
      A?.noHistoryBackfill !== !0 &&
      K() === v
        ? { uncertaintyOnly: !0 }
        : void 0;
  if (I) ((ue = et()), Be?.(ue));
  let tt = _e ? [] : p6(A?.declaredDialogKinds);
  if (tt.length > 0) C?.(tt, "restored");
  let Ie;
  if (B) Ie = ne ? Yt : Ze ? A?.groupingId : void 0;
  else Ie = je;
  if (!(await isBridgeEnabledBlocking()))
    return (
      logBridgeSkip("not_enabled", "[bridge:repl] Skipping: bridge not enabled"),
      null
    );
  let pe = isHoverRestEnabled() && U !== void 0;
  if (!(pe ? await getBridgeAccessTokenAsync(U) : getBridgeAccessToken()))
    return (
      logBridgeSkip("no_oauth", "[bridge:repl] Skipping: no OAuth tokens"),
      G?.("failed", LOGIN_SLASH_COMMAND, "auth"),
      null
    );
  let nt = async (e, t, o) => {
    let m = await readFreshOAuthCredentialSnapshot(O, U).catch(() => {
      return;
    });
    if (sameOwnerAccount(m, e)) return !0;
    return (logBridgeSkip(t, o), G?.("failed", REMOTE_CONTROL_ACCOUNT_UNVERIFIED_MESSAGE, "terminal"), !1);
  };
  if (
    qe &&
    !(await nt(
      qe,
      "revive_identity_recheck_failed",
      "[bridge:repl] Skipping: revive identity re-check failed (store changed or unreadable since the watcher validated)",
    ))
  )
    return null;
  await b_();
  let fe = policyDenyKind("allow_remote_control");
  if (fe === "cache_miss" || fe === "route_missing")
    return (
      logBridgeSkip(
        fe === "route_missing" ? "policy_route_missing" : "policy_unverified",
        `[bridge:repl] Skipping: allow_remote_control policy unverified (${fe})`,
      ),
      G?.(
        "failed",
        policyDeniedHint("allow_remote_control", "disabled by your organization's policy"),
        "terminal",
      ),
      null
    );
  if (fe === "org_denied")
    return (
      logBridgeSkip(
        "policy_denied",
        "[bridge:repl] Skipping: allow_remote_control policy not allowed",
      ),
      G?.("policy_disabled", describeRemoteControlPolicyDenial()),
      null
    );
  if (Ge && !isPolicyAllowed("allow_remote_sessions"))
    return (
      logBridgeSkip(
        "policy_denied",
        "[bridge:repl] Skipping mirror: allow_remote_sessions policy not allowed",
      ),
      G?.(
        "policy_disabled",
        "session mirroring is disabled by your organization's policy (allow_remote_sessions)",
      ),
      null
    );
  let rt = !1;
  if (Ee && Qe && B && isBridgeResumeRespectsLocalOwnerEnabled()) {
    let e = await mt(B);
    if (e) {
      if (Ee.mode === "decline")
        return (
          logBridgeSkip(
            "restored_pointer_held_locally",
            `[bridge:repl] Skipping: bridge session ${B} from the resumed transcript is still served by local pid ${e.pid} \u2014 not taking it over (/remote-control here moves it)`,
          ),
          logFeatureOk("bridge_resume_guard"),
          Ee.onDeclined(e),
          null
        );
      (n(
        `[bridge:repl] Explicit enable is taking over bridge session ${B} from local pid ${e.pid}`,
      ),
        (rt = !0));
    }
  }
  let ae = pinSessionId(K());
  if (!isSessionHistorySuppressed()) {
    let e = await readHistorySuppressionFromDisk(O);
    if (e === "found") holdSessionHistorySuppressionFor(ae);
    else if (e === "clean") releaseScanUncertaintyHoldFor(ae);
    else if (e === "torn") logFeatureSad("rc_cross_account_suppression", "scan_torn");
    else {
      logFeatureSad(
        "rc_cross_account_suppression",
        e === "budget-exhausted" ? "scan_budget_exhausted" : "scan_read_error",
      );
      let t = isPrecautionarySuppressionHeldFor(ae);
      if ((holdPrecautionarySuppressionFor(ae), markPrecautionClearResilientFor(ae), !t)) markScanUncertaintyHoldFor(ae);
    }
  }
  if (!I && (isSessionHistorySuppressed() || isPrecautionarySuppressionHeldFor(v) || isSessionHistorySuppressedFor(v) || K() !== v))
    ((I = !0), (ue = et()), Be?.(ue));
  if (!getBridgeTokenOverride()) {
    let e = ee();
    if (
      e.bridgeOauthDeadExpiresAt != null &&
      (e.bridgeOauthDeadFailCount ?? 0) >= 3 &&
      getStoredOAuthTokenExpiresAt() === e.bridgeOauthDeadExpiresAt
    )
      return (
        n(
          `[bridge:repl] Skipping: cross-process backoff (dead token seen ${e.bridgeOauthDeadFailCount} times)`,
        ),
        null
      );
    await checkAndRefreshOAuthTokenIfNeeded({ credentials: U, storageV5: O });
    let t = getStoredOAuthTokenExpiresAt();
    if (t !== null && t <= Date.now()) {
      (logBridgeSkip(
        "oauth_expired_unrefreshable",
        "[bridge:repl] Skipping: OAuth token expired and refresh failed (re-login required)",
      ),
        G?.("failed", LOGIN_SLASH_COMMAND, "auth"));
      let o = t;
      return (
        await Te(
          (m) => ({
            ...m,
            bridgeOauthDeadExpiresAt: o,
            bridgeOauthDeadFailCount:
              m.bridgeOauthDeadExpiresAt === o
                ? (m.bridgeOauthDeadFailCount ?? 0) + 1
                : 1,
          }),
          O,
        ),
        null
      );
    }
  }
  let ve = await preflightTrustedDeviceBlocking(U);
  if (ve)
    return (
      logBridgeSkip("trusted_device_unenrolled", `[bridge:repl] Skipping: ${ve}`),
      G?.("failed", ve, ve === PROACTIVE_ENROLLMENT_DISABLED_MESSAGE ? "terminal" : "auth"),
      null
    );
  let Q = getBridgeBaseUrl(),
    V = `${getBridgeSessionNamePrefix()}-${generateAdjectiveNounName()}`,
    Z = !1,
    N = !1;
  if ($e) ((V = $e), (Z = !0), (N = !0));
  else if (!I) {
    let e = le(getCurrentSessionTitle),
      t = le(getCurrentSessionAiTitle);
    if (e) ((V = e), (Z = !0), (N = !0));
    else if (t) ((V = t), (Z = !0));
    else if (de && de.length > 0)
      for (let o = de.length - 1; o >= 0; o--) {
        let m = de[o];
        if (!F$e(m) || isNoContentMessage(m)) continue;
        let _ = getMessageContentText(m.message.content);
        if (!_) continue;
        let H = Cn(_);
        if (!H) continue;
        ((V = H), (Z = !0));
        break;
      }
  }
  let X = 0,
    Ae,
    Y = null,
    Fe = 0,
    J = !1,
    Ue = !1,
    He,
    Zt = (e) => He?.bridgeSessionId === e && He.sessionId === K(),
    q = createBridgeTitleWriter({
      isOwnTitle: (e, t) => te.has(t),
      onRemoteTitleAdopted: (e, t) => {
        (setSelfBridgeTitle(e, t), (re = e));
      },
    }),
    ge = (e, t) => te.has(t) || q.hasSent(e, t),
    re,
    it = `${getBridgeSessionNamePrefix()}-${generateAdjectiveNounName()}`,
    te = new Set([V]),
    ot;
  if (I) {
    let e = K(),
      t = e ? getCurrentSessionAiTitle(e) : void 0;
    if (t) te.add(t);
    ot = e ? getCurrentSessionTitle(e) : void 0;
  }
  let st = Promise.resolve(),
    xe = (e, t, o, m) => {
      let _ = () => m && (isBridgeBindingForeign() || be()),
        H = () => !Ue;
      if (J || _() || isSessionTeleported(t)) return !1;
      return (
        (Z = !0),
        (V = e),
        te.add(e),
        setSelfBridgeTitle(t, e),
        n(`[bridge:repl] derived title from message ${o}: ${e}`),
        q
          .update(t, e, {
            baseUrl: Q,
            getAccessToken: getBridgeAccessToken,
            shouldSend: () => {
              if (J || _() || !H()) return !1;
              return !isSessionTeleported(t);
            },
          })
          .catch(() => {}),
        !0
      );
    },
    at = (e, t, o) => {
      if (J) return;
      let m = ++Fe,
        _ = X,
        H = AbortSignal.timeout(15000);
      generateSessionTitle(e, H, U).then(async (ie) => {
        let Le = () => {
            let Se = getCurrentSessionAiTitle(K());
            return Boolean(Se && !te.has(Se));
          },
          ft = () => {
            let Se = getCurrentSessionTitle(K());
            return (
              J || m !== Fe || Ae !== t || N || Boolean(Se && Se !== ot) || Le()
            );
          };
        if (!ie || ft()) return;
        let fn = pe ? await getBridgeAccessTokenAsync(U) : void 0,
          ye = await getBridgeSession(t, {
            baseUrl: Q,
            getAccessToken: pe ? () => fn : getBridgeAccessToken,
            credentials: U,
          }).catch(() => null);
        if (ft()) return;
        if (ye === null) return;
        if (ye.title && !ge(t, ye.title)) {
          (setSelfBridgeTitle(t, ye.title), q.noteRemoteTitle(t, ye.title), (re = t));
          return;
        }
        xe(ie, t, _, o);
      });
    },
    en = (e) => {
      let t = si(e);
      if (!t) return { ok: !1, error: "title must be non-empty" };
      if (((V = t), (Z = !0), (N = !0), te.add(t), te.add(e), Y)) {
        if (
          ((Y.selfTitle = t), q.noteRemoteTitle(Y.bridgeSessionId, t), e !== t)
        )
          q.noteRemoteTitle(Y.bridgeSessionId, e);
      }
      let o = isBridgeBindingForeign(),
        m = o ? getBridgeBoundConversationSid() : K();
      if (m)
        saveCustomTitle(m, t, o ? getDerivedTranscriptPathForSession(m) : void 0, "remote", O).catch((_) => {
          n(`saveCustomTitle: transcript append failed: ${l(_)}`);
        });
      else
        n(
          "[bridge:repl] Dropping inbound rename mirror: foreign binding with no bound-sid exposure \u2014 the live conversation is not the one the phone renamed",
        );
      if (!isTeammate() && !o)
        st = st.then(async () => {
          try {
            await applyResolvedSessionName(t, "user", O);
          } catch (_) {
            n(`onRenameSession: name propagation failed: ${l(_)}`);
          }
        });
      return { ok: !0 };
    },
    dt = (e) => {
      let t = K(),
        o = le(getCurrentSessionAiTitle);
      if (!o || ge(e, o)) return !1;
      let m = X;
      return (
        getBridgeSession(e, { baseUrl: Q, getAccessToken: getBridgeAccessToken })
          .catch(() => null)
          .then((_) => {
            if (N || re === e || getCurrentSessionTitle(K())) return;
            if (_ === null) return;
            if (_.title && !ge(e, _.title)) {
              (setSelfBridgeTitle(e, _.title), q.noteRemoteTitle(e, _.title), (re = e));
              return;
            }
            if (K() !== t || le(getCurrentSessionAiTitle) !== o) return;
            if ((Fe++, xe(o, e, m, !0)))
              He = { bridgeSessionId: e, sessionId: t };
          }),
        !0
      );
    },
    tn = () => {
      let e = Y?.bridgeSessionId;
      if (!e || J || Ue || N || re === e || getCurrentSessionTitle(K())) return;
      dt(e);
    },
    nn = (e, t) => {
      if (J) return !0;
      if (N || Zt(t) || re === t) return !0;
      let o = le(getCurrentSessionTitle);
      if (o) {
        if (!ge(t, o))
          getBridgeSession(t, { baseUrl: Q, getAccessToken: getBridgeAccessToken })
            .catch(() => null)
            .then((m) => {
              if (N || getCurrentSessionTitle(K()) !== o) return;
              if (m === null) return;
              if (m.title && !ge(t, m.title)) {
                (setSelfBridgeTitle(t, m.title), q.noteRemoteTitle(t, m.title), (re = t));
                return;
              }
              (xe(o, t, X, !0), (N = !0));
            });
        return !0;
      }
      if (dt(t)) return !0;
      if (Ae !== void 0 && Ae !== t) X = 0;
      if (((Ae = t), X++, X === 1 && !Z)) at(e, t, !1);
      else if (X === 3) {
        let m = I || isBridgeBindingForeign() || be() ? void 0 : xt?.(),
          _ = m ? collectConversationText(sliceFromLastCompactBoundary(m)) : e;
        at(_, t, m !== void 0);
      }
      return (X >= 3 && (Z || N)) || X >= 8;
    },
    rn = 200,
    lt = await getOrganizationUUID();
  if (!lt)
    return (
      logBridgeSkip("no_org_uuid", "[bridge:repl] Skipping: no org UUID"),
      G?.("failed", LOGIN_SLASH_COMMAND, "auth"),
      null
    );
  let on = pe ? await getBridgeAccessTokenAsync(U) : void 0,
    sn = await createBridgeOwnerPin({
      getAccessToken: pe ? () => on : getBridgeAccessToken,
      storageV5: O,
      credentials: U,
    }),
    an = await gt(O, U),
    ct = await ndt();
  if (ct)
    return (
      logBridgeSkip("version_too_old", `[bridge:repl] Skipping: ${ct}`, !0),
      G?.("failed", "run `claude update` to upgrade", "terminal"),
      null
    );
  let { branch: dn, gitRepoUrl: ln, defaultBranch: cn } = await snapshotGitEvidenceForBridge(),
    me;
  function ut() {
    if (((J = !0), me?.teardown(), Y)) (q.forget(Y.bridgeSessionId), retireBridgeHandle(Y, O));
  }
  if (Me) {
    if (
      !(await nt(
        Me,
        "host_target_owner_recheck_failed",
        "[bridge:repl] Skipping: the login changed (or became unreadable) between adjudicating this conversation\u2019s owner and connecting \u2014 not attaching it to the host\u2019s session",
      ))
    )
      return null;
    n(
      "[bridge:repl] Host-directed target on a recorded conversation: owner re-verified immediately before connecting",
    );
  }
  let pt;
  if (Ve !== void 0) {
    if (!B)
      return (
        n(
          "[bridge:repl] Skipping: work secret supplied but this init has no session to reattach (no target, or the target was vetoed)",
          { level: "error" },
        ),
        logBridgeSkip("work_secret_no_target", void 0, !0),
        G?.(
          "failed",
          "Remote Control could not attach: no session to attach the host credential to",
          "terminal",
        ),
        null
      );
    try {
      pt = Rt({
        secret: Ve,
        sessionId: B,
        apiBaseUrl: Q,
        requestFreshSecret: Vt,
      });
    } catch (e) {
      return (
        n(`[bridge:repl] Skipping: ${l(e)}`, { level: "error" }),
        logBridgeSkip("work_secret_rejected", void 0, !0),
        G?.("failed", `Remote Control could not attach: ${l(e)}`, "terminal"),
        null
      );
    }
    n(
      `[bridge:repl] Attaching ${B} with the host's work secret (worker-credential path)`,
    );
  }
  if (rt) logEvent("tengu_bridge_restored_pointer_takeover", {});
  let Re,
    un = 0,
    pn = createDefaultToolPermissionContext(),
    he,
    L = (Y = await Yjn({
      titleWriter: q,
      noHistoryBackfill: I && ue?.uncertaintyOnly !== !0,
      neutralFallbackTitle: it,
      onReattachGoneBounce: () => {
        (te.add(it), (I = !0), Be?.(), holdPrecautionarySuppressionFor(v), markPrecautionClearResilientFor(v), claimPrecautionHoldForObservedCause(v));
      },
      reattachSessionId: B,
      reattachSequenceNum: ce,
      reattachOrFail: oe,
      reattachOrigin: se,
      reviveInitiated: Gt,
      neverArchive: jt,
      onAuthProven: Kt,
      onReattachPointerDead: () => {
        if ((holdPrecautionarySuppressionFor(v), markPrecautionClearResilientFor(v), claimPrecautionHoldForObservedCause(v), !ke))
          clearBridgeSession(v, De, De ? { targetExists: !0 } : void 0, O);
        Nt?.();
      },
      baseUrl: Q,
      orgUUID: lt,
      title: V,
      ownerPin: sn,
      onOwnerChanged: ut,
      getAccessToken: getBridgeAccessToken,
      onAuth401: (e) => handleOAuth401Error(e, U, O),
      classifyFailedOAuthRefresh: ht,
      onReadFreshOAuthToken: () => readFreshOAuthAccessToken(U),
      onClassifyMissingOAuthToken: an,
      onProactiveRefresh: async () => {
        await checkAndRefreshOAuthTokenIfNeeded({ credentials: U, storageV5: O });
      },
      toSDKMessages: (e) => serializeTranscriptMessages(e, h?.()),
      initialHistoryCap: rn,
      initialMessages: I ? void 0 : de,
      gitRepoUrl: ln,
      branch: dn,
      defaultBranch: cn,
      onInboundMessage: p,
      onUserMessage: nn,
      onSessionEstablished: (e) => {
        if (
          (me?.teardown(),
          (me = createClientPresenceReporter(toInfraSessionId(e), Q, () => {
            let o = getBridgeAccessToken();
            if (!o || J) return null;
            return { Authorization: `Bearer ${o}` };
          })),
          isPushNotificationsEnabled() && !isEssentialTrafficOnly())
        )
          hydratePushNotificationPreferences(O);
        let t = getCurrentSessionAgentColor();
        if (t && t !== "default")
          updateBridgeSessionColorTag(e, t, AGENT_COLOR_NAMES, { baseUrl: Q, getAccessToken: getBridgeAccessToken });
      },
      onBeforePushTriggeringState: () => me?.pulseIfClientPresent(),
      onPermissionResponse: k,
      onInterrupt: F,
      onStopTask: f,
      onBackgroundTasks: b,
      getInitializeState: w,
      getCommands: S,
      isTurnLive: T,
      onDialogKindsDeclared: C,
      onClientInitialize: E,
      onSetModel: P,
      onSetMaxThinkingTokens: x,
      onSetPermissionMode: D,
      onApplyFlagSettings: j,
      onRenameSession: en,
      onSetColor: Bt,
      async onFileSuggestions(e) {
        return (await generateFileSuggestions(globalFileIndexCache, e, !0, O)).map((o) => ({ path: o.displayText }));
      },
      onReadFile: (e, t, o) => readFileForRemote(e, t, c?.() ?? createDefaultToolPermissionContext(), o, "repl_bridge"),
      onGetWorkspaceDiff: s
        ? (e) => {
            let t = c?.() ?? pn,
              o = he;
            if (
              ((he = void 0),
              o && o.permissionContext === t && Date.now() - o.settledAt <= vn)
            )
              return Promise.resolve(o.result);
            let m = Re;
            if (!m || m.permissionContext !== t) {
              let H = {
                sequence: ++un,
                permissionContext: t,
                pendingWaiters: 0,
                promise: buildWorkspaceDiffResponse(s, t, r)
                  .then((ie) => {
                    if (
                      H.pendingWaiters === 0 &&
                      !(he && he.sequence > H.sequence)
                    )
                      he = {
                        sequence: H.sequence,
                        settledAt: Date.now(),
                        permissionContext: t,
                        result: ie,
                      };
                    return ie;
                  })
                  .finally(() => {
                    if (Re === H) Re = void 0;
                  }),
              };
              ((Re = H), (m = H));
            }
            let _ = m;
            if (!e.aborted)
              (_.pendingWaiters++,
                e.addEventListener(
                  "abort",
                  () => {
                    _.pendingWaiters--;
                  },
                  { once: !0 },
                ));
            return _.promise;
          }
        : void 0,
      onMcpAuthenticate: Ot,
      onMcpOauthCallbackUrl: Dt,
      onMcpReconnect: Pt,
      onMcpStatus: It,
      onBridgeInjectedMcp: Ft,
      onGetContextUsage: Ut,
      onGetUsage: Ht,
      onStateChange: G,
      outboundOnly: Ge,
      tags: Lt,
      sessionGroupingId: Ie,
      requestedSessionGroupingId: je,
      onTransportRebuilt: qt,
      storageV5: O,
      credentialsStore: U,
      workSecretCredentials: pt,
      ...(zt ? Xt : {}),
    }));
  if (L) {
    let e = L.detachForHandoff?.bind(L);
    L.detachForHandoff = () => {
      (ut(), e?.());
    };
    let t = L.teardown.bind(L);
    if (
      ((L.teardown = async (o) => {
        ((Ue = !0), q.forget(L.bridgeSessionId), await t(o));
      }),
      J)
    )
      retireBridgeHandle(L, O);
    ((L.selfTitle = V), (L.adoptLocalAiTitle = tn), (L.ownerVetoed = _e));
  }
  return An(L, () => me);
}
function An(d, c) {
  if (!d) return (c()?.teardown(), null);
  let s = d.teardown.bind(d);
  return (
    (d.teardown = async (r) => {
      (c()?.teardown(), await s(r));
    }),
    d
  );
}
var Et = 50;
function Cn(d) {
  let c = stripXmlTags(d),
    r = (/^(.*?[.!?])\s/.exec(c)?.[1] ?? c).replace(/\s+/g, " ").trim();
  if (!r) return;
  return r.length > Et ? r.slice(0, Et - 1) + "\u2026" : r;
}
export {
  HEADLESS_BRIDGE_WORKSPACE_DIFF_COMPUTE_BUDGET,
  REPL_WORKSPACE_DIFF_COMPUTE_BUDGET,
  initReplBridge,
};
