// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { watchGlobalConfigThroughStorage, seedInstallIDs } from "./认证-OAuth登录.419zdfz3.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { sleep } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { getClaudeConfigDir } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { R, l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, jsonParse, initDefaultDebugLog, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getFileStorage } from "../../01-核心基础设施/文件存储-原子写入/file-storage.js";
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { pickBy } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { EXTERNAL_PERMISSION_MODES, normalizePermissionModeAlias } from "../权限系统/chunk-e4pfvp7x.js";
import { isDaemonWorkerRegistryEnabled } from "../多会话视图-Fleet/agent-view-feature-gates.js";
import { pinStorageV5 } from "../../01-核心基础设施/核心工具-未归类/pin-storage-v5.js";
import { credentialsStoreFor } from "./credentials-store.js";
import { getBridgeTokenOverride } from "../远程控制-Bridge/chunk-203p0p9a.js";
import { REMOTE_CONTROL_NOT_LOGGED_IN_MESSAGE } from "../远程控制-Bridge/remote-control-messages.js";
import { updateDaemonConfig, normalizeRemoteControlEntries, scheduledTasksFileSchema, runScheduledWorker } from "../权限系统/chunk-3kjwvb3e.js";
import { PERMANENT_FAILURE_EXIT_CODE, TEMP_FAILURE_EXIT_CODE } from "../../01-核心基础设施/核心工具-其他/exit-codes.js";
import { s, T, O, c, X, ai } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { randomUUID } from "crypto";
import { join as ee } from "path";
function ae(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "type" in e &&
    (e.type === "token_update" || e.type === "auth_401_result")
  );
}
function ue(e) {
  return (
    typeof e === "object" && e !== null && "type" in e && e.type === "auth_401"
  );
}
var ce = 300000,
  K = 240000,
  de = 300000,
  le = 30000,
  pe = 86400000;
function te() {
  return STORAGE_KEYS.state("daemon-auth-cooldown");
}
function fe() {
  return STORAGE_KEYS.state("daemon-auth-status");
}
function createDaemonAuth(e, t, y = () => !0, d, p) {
  let u,
    h = !1,
    f = null,
    k = new Set(),
    w = null,
    v = null;
  function g() {
    return (v ??= import("./认证-OAuth登录.419zdfz3.js"));
  }
  function S(r) {
    let i = { type: "token_update", accessToken: r };
    for (let A of k)
      try {
        A.send(i);
      } catch {}
  }
  async function C() {
    let i = await (await g()).getClaudeAIOAuthTokensAsync(p);
    if (i?.accessToken && i.accessToken !== u?.accessToken)
      ((u = {
        accessToken: i.accessToken,
        scopes: i.scopes,
        subscriptionType: i.subscriptionType ?? null,
        rateLimitTier: i.rateLimitTier ?? null,
      }),
        S(u.accessToken));
    x(i?.expiresAt ?? null);
  }
  let D;
  function N(r) {
    if (((D = r), w || e.aborted)) return;
    if (f) (clearTimeout(f), (f = null));
    (t("auth: no token found, will re-check keychain every 30s"),
      (w = setInterval(function () {
        g()
          .then(async (A) => {
            A.clearOAuthTokenCache();
            let a = await A.getClaudeAIOAuthTokensAsync(p),
              o;
            if (
              a?.accessToken &&
              a.accessToken !== D &&
              a.expiresAt &&
              a.expiresAt > Date.now()
            )
              o = "auth: token found via keychain re-check";
            else if (
              a?.refreshToken &&
              (await A.checkAndRefreshOAuthTokenIfNeeded({
                credentials: p,
                storageV5: d,
              }))
            )
              o = "auth: token refreshed via keychain re-check retry";
            if (o) {
              if ((await C(), u && w)) (clearInterval(w), (w = null), t(o));
            }
          })
          .catch((A) => t(`auth: keychain re-check error: ${A}`));
      }, le)),
      w.unref());
  }
  function x(r) {
    if (f) (clearTimeout(f), (f = null));
    if (!r || e.aborted) return;
    let i = Math.min(Math.max(r - Date.now() - K, 5000), pe);
    (t(`auth: scheduling proactive refresh in ${Math.round(i / 1000)}s`),
      (f = setTimeout(Y, i)),
      f.unref());
  }
  async function Y() {
    if (e.aborted) return;
    try {
      t("auth: proactive refresh starting");
      let r = await g(),
        i = u?.accessToken,
        A = await r.checkAndRefreshOAuthTokenIfNeeded({
          credentials: p,
          storageV5: d,
        });
      r.clearOAuthTokenCache();
      let a = await r.getClaudeAIOAuthTokensAsync(p),
        o = a?.expiresAt ?? null,
        B = o === null || o > Date.now() + ce;
      if (
        a?.accessToken &&
        (A || a.accessToken !== i || B) &&
        (o === null || o > Date.now() + K)
      ) {
        (await C(),
          t(
            A
              ? "auth: proactive refresh succeeded"
              : "auth: token still valid (cross-process refresh or not yet due)",
          ));
        return;
      }
      if (a?.accessToken && o !== null && o > Date.now()) {
        (t(
          "auth: proactive refresh failed, retrying in ~60s (token still valid)",
        ),
          x(Date.now() + 60000 + K));
        return;
      }
      t("auth: proactive refresh failed, signalling re-auth required");
      let E = a?.accessToken ?? i;
      ((u = void 0), await L(), N(E));
    } catch (r) {
      (t(`auth: proactive refresh error: ${r}`), x(Date.now() + 60000 + K));
    }
  }
  async function _(r) {
    if (h) return (t("auth: 401 ignored (3P provider active, no OAuth)"), !1);
    t("auth: handling 401");
    let i = await g();
    if (await i.handleOAuth401Error(r, p, d))
      return (
        i.clearOAuthTokenCache(),
        await C(),
        t("auth: 401 recovery succeeded"),
        !0
      );
    (t("auth: 401 recovery failed, signalling re-auth required"),
      (u = void 0),
      await L(),
      i.clearOAuthTokenCache());
    let a = await i.getClaudeAIOAuthTokensAsync(p);
    if (a?.accessToken !== void 0 && a.accessToken !== r)
      return (await C(), !0);
    return (N(r), !1);
  }
  let I = null;
  function L() {
    if (I) return I;
    return (
      (I = U().finally(() => {
        I = null;
      })),
      I
    );
  }
  async function U() {
    let r = await g();
    if (r.getAnthropicApiKey()) {
      t("auth: browser login skipped (API key auth available)");
      return;
    }
    if (r.isUsing3PServices() && !y()) {
      t("auth: browser login skipped (3P provider, no OAuth-consuming worker)");
      return;
    }
    let i = getClaudeConfigDir(),
      A = ee(i, "daemon-auth-cooldown"),
      a = ee(i, "daemon-auth-status.json");
    try {
      let o;
      if (isHoverRestEnabled() && d !== void 0) {
        let E = await d.read([te()]);
        if (!E.ok)
          throw new R(
            `v5 cooldown read failed: ${E.error.code}${"telemetryCode" in E.error && E.error.telemetryCode ? ` (${E.error.telemetryCode})` : ""}`,
            "daemon-auth v5 cooldown read failed",
          );
        let Q = E.value.items[0];
        o = Q.found ? Buffer.from(Q.value).toString("utf8") : null;
      } else o = await getFileStorage().read(A);
      let B = o === null ? NaN : parseInt(o, 10);
      if (!Number.isNaN(B) && Date.now() - B < de) {
        t("auth: browser login skipped (cooldown)");
        return;
      }
    } catch (o) {
      if (!W(o)) t(`auth: cooldown read error: ${o}`);
    }
    try {
      if ((await getFileStorage().mkdir(i), isHoverRestEnabled() && d !== void 0)) {
        let o = await d.write(te(), String(Date.now()), {
          publishDiscipline: "inPlace",
        });
        if (!o.ok)
          throw new R(
            `v5 cooldown write failed: ${o.error.code}${"telemetryCode" in o.error && o.error.telemetryCode ? ` (${o.error.telemetryCode})` : ""}`,
            "daemon-auth v5 cooldown write failed",
          );
      } else await getFileStorage().write(A, String(Date.now()));
    } catch (o) {
      t(`auth: cooldown write error: ${o}`);
    }
    try {
      let { execFileNoThrow: o } = await import("../工作树-Git/git-exec-hardening.js");
      o("osascript", [
        "-e",
        'display notification "Your Claude assistant needs re-authentication" with title "Claude"',
      ]);
    } catch {}
    try {
      if (isHoverRestEnabled() && d !== void 0) {
        let o = await d.write(
          fe(),
          jsonStringify({ status: "auth_required", since: Date.now() }),
          { publishDiscipline: "inPlace" },
        );
        if (!o.ok)
          throw new R(
            `v5 status write failed: ${o.error.code}${"telemetryCode" in o.error && o.error.telemetryCode ? ` (${o.error.telemetryCode})` : ""}`,
            "daemon-auth v5 status write failed",
          );
      } else
        await getFileStorage().write(a, jsonStringify({ status: "auth_required", since: Date.now() }));
    } catch (o) {
      t(`auth: status write error: ${o}`);
    }
    t(
      "auth: headless daemon cannot complete OAuth \u2014 run `claude auth login` to refresh",
    );
  }
  function j(r) {
    if (!ue(r)) return;
    _(r.failedToken)
      .then((i) => {
        for (let A of k)
          try {
            let a = {
              type: "auth_401_result",
              refreshed: i,
              requestId: r.requestId,
            };
            A.send(a);
          } catch {}
      })
      .catch((i) => {
        t(`auth: 401 handler error: ${i}`);
        for (let A of k)
          try {
            let a = {
              type: "auth_401_result",
              refreshed: !1,
              requestId: r.requestId,
            };
            A.send(a);
          } catch {}
      });
  }
  function J(r) {
    if ((k.add(r), r.on("message", j), u))
      try {
        let i = { type: "token_update", accessToken: u.accessToken };
        r.send(i);
      } catch {}
  }
  function G(r) {
    (r.removeListener("message", j), k.delete(r));
  }
  let F = (async () => {
    if (e.aborted) return;
    try {
      let r = await g(),
        i = await r.getClaudeAIOAuthTokensAsync(p);
      if (!i?.accessToken && r.isUsing3PServices()) {
        ((h = !0), t("auth: 3P provider active, skipping OAuth refresh loop"));
        return;
      }
      if (i?.accessToken)
        ((u = {
          accessToken: i.accessToken,
          scopes: i.scopes,
          subscriptionType: i.subscriptionType ?? null,
          rateLimitTier: i.rateLimitTier ?? null,
        }),
          x(i.expiresAt ?? null));
      (await r.checkAndRefreshOAuthTokenIfNeeded({
        credentials: p,
        storageV5: d,
      }),
        await C());
    } catch (r) {
      t(`auth: init error: ${r}`);
    }
  })();
  return (
    F.then(() => {
      if (e.aborted || u || h) return;
      N();
    }),
    e.addEventListener(
      "abort",
      () => {
        if (f) (clearTimeout(f), (f = null));
        if (w) (clearInterval(w), (w = null));
      },
      { once: !0 },
    ),
    {
      ready: F,
      getAccessToken() {
        return u?.accessToken;
      },
      getAuthSnapshot() {
        return u;
      },
      attachWorker: J,
      detachWorker: G,
      dispose: q,
      [Symbol.dispose]: q,
    }
  );
  function q() {
    if (f) (clearTimeout(f), (f = null));
    if (w) (clearInterval(w), (w = null));
    for (let r of k) r.removeListener("message", j);
    k.clear();
  }
}
function re(e, t, y) {
  if (typeof process.send === "function") {
    let f = function (k) {
        let w = h.get(k);
        if (w) (h.delete(k), w.resolve(!1));
      },
      u = e;
    process.on("message", (k) => {
      if (!ae(k)) return;
      if (k.type === "token_update") u = k.accessToken;
    });
    let h = new Map();
    return (
      process.on("message", (k) => {
        if (
          typeof k === "object" &&
          k !== null &&
          "type" in k &&
          k.type === "auth_401_result"
        ) {
          let w = k,
            v = h.get(w.requestId);
          if (v)
            (clearTimeout(v.timer),
              h.delete(w.requestId),
              v.resolve(w.refreshed));
        }
      }),
      process.channel?.unref(),
      {
        getAccessToken() {
          return u;
        },
        reportAuth401(k) {
          let w = randomUUID(),
            v = { type: "auth_401", failedToken: k, requestId: w };
          return new Promise((g) => {
            let S = setTimeout(f, 30000, w);
            (S.unref(), h.set(w, { resolve: g, timer: S }));
            try {
              process.send(v);
            } catch {
              (clearTimeout(S), h.delete(w), g(!1));
            }
          });
        },
      }
    );
  }
  let d = null;
  async function p() {
    return (d ??= await import("./认证-OAuth登录.419zdfz3.js"));
  }
  return (
    p(),
    {
      getAccessToken() {
        return d?.getClaudeAIOAuthTokens()?.accessToken;
      },
      async reportAuth401(u) {
        return (await p()).handleOAuth401Error(u, t, y);
      },
    }
  );
}
function H(e) {
  return (
    typeof e === "object" && e !== null && "type" in e && e.type === "shutdown"
  );
}
function oe(e) {
  if (!H(e) || typeof e !== "object" || e === null || !("cause" in e)) return;
  return e.cause === "upgrade" || e.cause === "reload" || e.cause === "yield"
    ? e.cause
    : void 0;
}
var V = createLazyValue(() =>
    c({
      dir: s(),
      name: s().optional(),
      spawnMode: X(["same-dir", "worktree"]).default("same-dir"),
      capacity: T().int().positive().default(32),
      permissionMode: ai(normalizePermissionModeAlias, X(EXTERNAL_PERMISSION_MODES)).optional(),
      sandbox: O().default(!1),
      sessionTimeoutSeconds: T().int().positive().optional(),
      createSessionOnStart: O().default(!1),
    }).strict(),
  ),
  me = 60000,
  ke = 500,
  ne = async (e, t, y, d, p, u) => {
    let h = V().parse(e),
      { initializeErrorLogSink: f } = await import("../../01-核心基础设施/遥测-OpenTelemetry/initializeErrorLogSink.64dfk6kr.js"),
      { initializeAnalyticsSink: k } = await import("../../01-核心基础设施/遥测-OpenTelemetry/initializeAnalyticsSink.3hb68836.js");
    (f(), k());
    let w = () => getBridgeTokenOverride() ?? d.getAccessToken();
    if (!w()) (y(REMOTE_CONTROL_NOT_LOGGED_IN_MESSAGE), process.exit(1));
    let [
      {
        initializeGrowthBook: g,
        getFeatureValue_CACHED_MAY_BE_STALE: S,
        getUserAttributes: C,
      },
      { flushAnalyticsSinks: D },
      { populateOAuthAccountInfoIfNeeded: N },
    ] = await Promise.all([
      import("../../01-核心基础设施/核心工具-未归类/ATIS_REQUEST_HEADER.9bwp2jqb.js"),
      import("../../01-核心基础设施/遥测-OpenTelemetry/chunk-p7jm635c.js"),
      import("./认证-OAuth登录.419zdfz3.js"),
    ]);
    if (
      (await N(u, p).catch((a) => {
        logForDebugging(
          `[daemon:remoteControl] oauthAccount backfill failed (${a instanceof Error ? a.name : typeof a})`,
        );
      }),
      !C().organizationUUID)
    )
      logForDebugging(
        "[daemon:remoteControl] no org identity; GrowthBook not initialized, gates serve cached/default values",
      );
    else
      g().catch((a) => {
        logForDebugging(
          `[daemon:remoteControl] GrowthBook init failed (${a instanceof Error ? a.name : typeof a}); feature gates keep serving the disk cache`,
          { level: "error" },
        );
      });
    let { runBridgeHeadless: x, BridgeHeadlessPermanentError: Y } =
        await import("../远程控制-Bridge/runBridgeHeadless.n35pw6j7.js"),
      _ = null,
      I = !1,
      L = (a) => {
        if (typeof process.send !== "function") return;
        try {
          process.send({ type: "rc_busy", busy: a });
        } catch {}
      },
      U = () => {
        if (_ !== null) (clearInterval(_), (_ = null));
      },
      j = (a) => {
        let o = a > 0;
        if (o !== I) ((I = o), L(o));
        if (o) {
          if (_ === null) ((_ = setInterval((B) => B(!0), me, L)), _.unref?.());
        } else U();
      },
      J = S("tengu_daemon_upgrade_defer_busy", !0),
      G = null,
      F = () => {},
      q = new Promise((a) => {
        F = a;
      }),
      r = (a) => {
        if (H(a)) ((G = oe(a) ?? null), F());
      };
    process.on("message", r);
    let i = async () => (await Promise.race([q, sleep(ke)]), G),
      A = !1;
    try {
      await x(
        {
          dir: h.dir,
          name: h.name,
          spawnMode: h.spawnMode,
          capacity: h.capacity,
          permissionMode: h.permissionMode,
          sandbox: h.sandbox,
          createSessionOnStart: h.createSessionOnStart,
          getAccessToken: w,
          onAuth401: d.reportAuth401,
          log: y,
          storageV5: p,
          credentials: u,
          onBusyChange: j,
          persistActiveSessionsOnShutdown: J,
          awaitShutdownCause: i,
        },
        t,
      );
    } catch (a) {
      if (!(a instanceof Y)) throw a;
      (y(a.message), (A = !0));
    } finally {
      (U(), process.off("message", r), await D());
    }
    if (A) process.exit(PERMANENT_FAILURE_EXIT_CODE);
  };
async function addRemoteControlEntry(e, t, y) {
  return withFeatureTelemetry("daemon_rc_add", async () => {
    let d = "added";
    return (
      await updateDaemonConfig(
        (p) => {
          let u = normalizeRemoteControlEntries(p.remoteControl),
            h = u.findIndex((f) => f.dir === e.dir);
          if (h >= 0) {
            let f = pickBy(e, (k) => k !== void 0);
            ((u[h] = { ...u[h], ...f }), (d = "updated"));
          } else (u.push(e), (d = "added"));
          p.remoteControl = u;
        },
        t,
        y,
      ),
      d
    );
  });
}
async function removeRemoteControlEntry(e, t, y) {
  return withFeatureTelemetry("daemon_rc_remove", async () => {
    await updateDaemonConfig(
      (d) => {
        let p = normalizeRemoteControlEntries(d.remoteControl),
          u = p.filter((h) => h.dir !== e);
        if (u.length === p.length) return !1;
        if (u.length === 0) delete d.remoteControl;
        else d.remoteControl = u;
      },
      t,
      y,
    );
  });
}
var se = createLazyValue(() => c({ intervalSeconds: T().positive().default(30) }).strict()),
  WORKER_KINDS = {
    heartbeat: { schema: se, run: ye, needsOAuth: !1 },
    scheduled: { schema: scheduledTasksFileSchema, run: runScheduledWorker, needsOAuth: !0 },
    remoteControl: { schema: V, run: ne, needsOAuth: !0 },
  };
async function ye(e, t, y, d) {
  let { intervalSeconds: p } = se().parse(e);
  y(`heartbeat worker started (interval=${p}s)`);
  while (!t.aborted) if ((await sleep(p * 1000, t), !t.aborted)) y("heartbeat");
}
function we(e, t) {
  let y = () => t.abort();
  (e.on("SIGTERM", y),
    e.on("SIGINT", y),
    e.on("message", (d) => {
      if (H(d)) t.abort();
    }));
}
async function runDaemonWorker(e, t) {
  if (!e || !(e in WORKER_KINDS))
    (process.stderr.write(`unknown worker kind: ${e}
`),
      process.exit(2));
  if (e !== "heartbeat" && !isDaemonWorkerRegistryEnabled())
    (process.stderr.write(`worker kind '${e}' is not available.
`),
      process.exit(2));
  let y = WORKER_KINDS[e],
    d = [];
  for await (let v of process.stdin) d.push(v);
  let p;
  try {
    p = jsonParse(Buffer.concat(d).toString("utf8"));
  } catch (v) {
    (process.stderr.write(`invalid config JSON on stdin: ${l(v)}
`),
      process.exit(2));
  }
  let u = y.schema().safeParse(p.config);
  if (!u.success)
    (process.stderr.write(`config validation failed: ${u.error.message}
`),
      process.exit(2));
  let h = new AbortController();
  (we(process, h), ge(h));
  let f = pinStorageV5(t),
    k = credentialsStoreFor(f),
    w = re(p.initialAccessToken, k, f);
  if (isHoverRestEnabled() && f !== void 0) {
    (initDefaultDebugLog({ storageV5: f }), watchGlobalConfigThroughStorage(f));
    let [
      { composePolicyLimitsClient: v, primePolicyLimitsCache: g },
      { primeFastPathCredentials: S },
      { setGrowthBookCredentials: C, setGrowthBookStorageBackend: D },
    ] = await Promise.all([
      import("../../01-核心基础设施/核心工具-未归类/POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS.hw6w9yxm.js"),
      import("./primeFastPathCredentials.eb5w3wem.js"),
      import("../../01-核心基础设施/核心工具-未归类/ATIS_REQUEST_HEADER.9bwp2jqb.js"),
    ]);
    (v({ storageV5: f, credentials: k }),
      C(k),
      D(f),
      await S(k),
      await g(f),
      await seedInstallIDs(f));
  }
  try {
    await y.run(
      u.data,
      h.signal,
      (v) =>
        process.stdout.write(
          v +
            `
`,
        ),
      w,
      f,
      k,
    );
  } catch (v) {
    if (ve(v) === 429)
      (process.stdout.write(`rate limited (429): ${l(v)}
`),
        process.exit(TEMP_FAILURE_EXIT_CODE));
    throw v;
  }
}
function ve(e) {
  let t = e;
  for (let y = 0; t != null && y < 8; y++) {
    let d = t.status;
    if (typeof d === "number") return d;
    let p = t.response?.status;
    if (typeof p === "number") return p;
    t = t.cause;
  }
  return;
}
var Te = 30000;
function Ae(e) {
  try {
    return (process.kill(e, 0), !0);
  } catch {
    return !1;
  }
}
function ge(e, t) {
  let y = {
      ppid: () => process.ppid,
      isAlive: Ae,
      log: (h) =>
        process.stdout.write(
          h +
            `
`,
        ),
      onGone: () => process.exit(0),
      intervalMs: Te,
      exitGraceMs: 2000,
      ...t,
    },
    d = y.ppid();
  if (d <= 1) return;
  let p = !1,
    u = setInterval(() => {
      if (p) return;
      if (!(!y.isAlive(d) || (getCurrentPlatform() !== "windows" && y.ppid() !== d))) return;
      ((p = !0),
        clearInterval(u),
        y.log("parent supervisor gone \u2014 exiting"),
        e.abort(),
        setTimeout(y.onGone, y.exitGraceMs).unref());
    }, y.intervalMs);
  return (u.unref(), u);
}
export { createDaemonAuth, addRemoteControlEntry, removeRemoteControlEntry, WORKER_KINDS, runDaemonWorker };
