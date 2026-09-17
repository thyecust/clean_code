// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 252 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { identity as _m, K, $p, Bw, s_e, Nn, kz } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { wa } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { Iu, R, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { deviceToolNoticesTo } from "../../01-核心基础设施/共享小工具-未细化/chunk-sdeyn1dg.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { Ise, RCt, iKt } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isViolinWoodEnabledCached } from "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import { Ht } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { showScreen } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-cq8x5zt4.js";
import { Uot } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { hit } from "../../01-核心基础设施/共享小工具-未细化/chunk-ctr3zhmb.js";
function de(r) {
  if (!(r instanceof Iu)) return null;
  let e = r.formattedMessage;
  return e.startsWith(RCt)
    ? {
        reason: "not_found",
        message: `${e} \u2014 it doesn't match a cloud session you can access from this organization.`,
      }
    : e.startsWith(iKt)
      ? { reason: "invalid_id", message: e }
      : null;
}
function ce(r) {
  let e = de(r);
  if (e === null) {
    n(
      `[attachRemote] preflight fetchSession failed (continuing via WS): ${l(r)}`,
    );
    return;
  }
  throw (
    logEvent("tengu_remote_attach_session_rejected", { reason: fromEnum(e.reason) }),
    new R(
      e.message,
      "cloud attach refused: the id names no session of this account, or is malformed",
      e.reason,
    )
  );
}
async function attachRemote(r, e, c, t) {
  let [
      { prepareApiRequest: U, fetchSession: I },
      { getClaudeAIOAuthTokens: B, handleOAuth401Error: F },
      { launchRepl: V },
      { getCommands: j, filterCommandsForRemoteMode: x },
      { getDefaultAppState: D },
      { isDebugMode: W },
      {
        consumePrefetchedHistory: q,
        gateSeed: G,
        partialSeedNotice: L,
        reportPrefetchOutcome: X,
      },
    ] = await Promise.all([
      import("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
      import("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
      import("../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js"),
      import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
      import("../后台任务-Shell管理/chunk-c7mzes79.js"),
      import("./logForDebugging.yzt1kswr.js"),
      import("./gateSeed.n4c26dmt.js"),
    ]),
    z = q(e, t?.credentials),
    m = await U(t?.credentials).catch((a) => {
      throw Error(`auth setup failed: ${l(a)}`);
    }),
    v = () => B()?.accessToken ?? m.accessToken,
    h = { sessionId: K(), cwd: Bw(), isRemoteMode: Nn() },
    [
      {
        pullsBackToThisMachine: J,
        registerAttachedDevice: Y,
        resolveAttachDeviceBinding: Q,
        servedToolsForAttach: Z,
      },
      { deviceHooksProcessMemories: ee },
    ] = await Promise.all([
      import("./pullsBackToThisMachine.gztq23vf.js"),
      import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
    ]),
    C = I(e, m),
    g = t?.viewerOnly
      ? Promise.resolve({ status: "disabled" })
      : Q({
          sessionId: e,
          storageV5: t?.storageV5,
          session: C.then((a) => ({
            archived: a.session_status === "archived",
            boundDeviceId: a.bound_device_uuid,
          })),
        }),
    _ = () => {},
    te = new Promise((a) => {
      _ = a;
    }),
    f = Y({
      sessionId: e,
      getAccessToken: v,
      orgUuid: m.orgUUID,
      binding: g,
      storageV5: t?.storageV5,
      dirSync: te,
      onNotice: deviceToolNoticesTo(c),
      servedSettingsChanged: ee.of(c.host).servedSettingsChanged,
    }),
    b =
      t?.viewerOnly || !isViolinWoodEnabledCached()
        ? void 0
        : await Z({
            sessionId: e,
            binding: g,
            deviceBridge: f,
            onNotice: deviceToolNoticesTo(c),
          }),
    p = !1,
    oe = new AbortController();
  try {
    (kz(!0), $p(_m(e), "remote_attach"));
    let a = C.then(
      async (o) => {
        if (o.session_status === "archived")
          throw (
            logEvent("tengu_remote_attach_session_rejected", {
              reason: S("archived"),
            }),
            Error(`Cloud session ${e} is archived and cannot accept new messages.
View it at ${wa(e, void 0, { from: "cli", m: "0" })}`)
          );
        if (o.session_context.cwd && !p) {
          if ((await Uot(o.session_context.cwd, "attachRemote")) && !p)
            s_e(o.session_context.cwd);
        }
      },
      (o) => ce(o),
    );
    a.catch(() => {});
    let A = wa(e, void 0, { from: "cli", m: "0" }),
      w = isViolinWoodEnabledCached(),
      P = hit("attach", A, w),
      y = {
        ...D(),
        ...t?.initialStateOverride,
        remoteSessionUrl: A,
        replBridgeEnabled: !1,
        replBridgeOutboundOnly: !1,
        replBridgeExplicit: !1,
      },
      E =
        t?.viewerOnly || !isViolinWoodEnabledCached()
          ? Promise.resolve({
              handle: void 0,
              elsewhere: void 0,
              maybeElsewhere: void 0,
            })
          : import("../文件同步-Sync/createLaptopDirSyncSession.ga37sg6g.js")
              .then(
                async ({
                  attachLaptopDirSyncSession: o,
                  dirSyncElsewhereLine: d,
                  dirSyncElsewhereLookup: ae,
                }) => {
                  let N = await o(e, {
                      boundToThisMachine: J(g),
                      credentials: t?.credentials,
                      host: c.host,
                      storageV5: t?.storageV5,
                    }),
                    H =
                      N === void 0
                        ? (await ae(e, t?.storageV5)).kind
                        : "nowhere";
                  return {
                    handle: N,
                    elsewhere: H === "elsewhere" ? d() : void 0,
                    maybeElsewhere: H !== "nowhere",
                  };
                },
              )
              .catch(
                (o) => (
                  n(`[attachRemote] directory-sync lookup failed: ${l(o)}`, {
                    level: "warn",
                  }),
                  { handle: void 0, elsewhere: void 0, maybeElsewhere: !0 }
                ),
              );
    E.then(({ handle: o }) => _(o !== void 0));
    let ne = Promise.resolve(void 0),
      [se, T, { handle: re, elsewhere: O, maybeElsewhere: k }, M] =
        await Promise.all([j(h.cwd, t?.storageV5).then(x), z, E, ne]);
    X(T);
    let s = G(T);
    ((y.hasRemoteReplyChannel = !1),
      (y.workerInventory = s?.lastWorkerInventory ?? null));
    let ie = {
      sessionId: e,
      getAccessToken: v,
      orgUuid: m.orgUUID,
      viewerOnly: t?.viewerOnly ?? !1,
      isAttachToExisting: !0,
      preflightCheck: a,
      deviceNotBoundNotice: f.notice,
      ...(b && { servedTools: b }),
      heldServedCall: f.heldServedCall,
      ...(isViolinWoodEnabledCached() &&
        !t?.viewerOnly && {
          eventSigner: import("./deviceEventSignerFor.14ybgam1.js").then(
            ({ deviceEventSignerOnceBoundHere: o }) =>
              o(
                g.then(
                  (d) => (d.status === "bound" ? d.deviceId : void 0),
                  () => {
                    return;
                  },
                ),
                t?.credentials,
              ),
            Ise,
          ),
        }),
      onAuth401: (o) => F(o, t?.credentials, t?.storageV5),
      dirSync: re,
      ...(k !== void 0 && { dirSyncElsewhere: k }),
      ...(M && { homeSeed: M, homeSeedHoldsFirstSend: !1 }),
      initialSequenceNum: s?.maxSequenceNum,
      seedNestedUuidAliases: s?.nestedUuidAliases,
      seedReplyChannelToolUseIds: s?.replyChannelToolUseIds,
      seedActiveGoal: s?.lastActiveGoal ?? (s?.complete ? null : void 0),
      seedAutocompactState: s?.lastAutocompactState,
      seedPermissionMode: s?.lastWorkerPermissionMode,
    };
    await V(
      r,
      {
        getFpsMetrics: () => {
          return;
        },
        initialState: y,
        session: c,
        storageV5: t?.storageV5,
        credentials: t?.credentials,
        fleetNudgeStore: t?.fleetNudgeStore,
      },
      {
        debug: W(),
        commands: se,
        initialTools: [],
        initialMessages: [
          ...(w ? [] : [P]),
          ...(s ? (s.complete ? s.messages : [L(e), ...s.messages]) : []),
          ...(w ? [P] : []),
          ...(O === void 0 ? [] : [le(O)]),
        ],
        mcpClients: [],
        remoteSessionConfig: ie,
        autoConnectIdeFlag: t?.autoConnectIdeFlag,
        disableSlashCommands: t?.disableSlashCommands,
        onDetachToCaller: () => r.unmount(),
        thinkingConfig: { type: "adaptive" },
      },
      async (o, d) => {
        (showScreen(o, d), await o.waitUntilExit());
      },
    );
  } finally {
    ((p = !0),
      oe.abort(),
      await f.stop(),
      kz(h.isRemoteMode),
      $p(h.sessionId, "remote_attach", null, { cwd: h.cwd }));
  }
}
function le(r) {
  return Ht(r, "warning");
}
export { attachRemote };
