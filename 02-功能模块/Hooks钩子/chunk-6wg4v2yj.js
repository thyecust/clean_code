// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { Ve, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { sleep, fullJitterBackoffMs } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { j, MA, d8, mp } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Et, b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { iu } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { WZ, R$n } from "../Bridge-RemoteControl/chunk-sc8n0cp3.js";
import { yW } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { getGlobalClaudeFile, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { ot } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { C_, yi, Ow, parseSettingsFileUncached } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import {
  GOe,
  iT,
  Kf,
  y4e,
  MGn,
  sUt,
  S4e,
  Gft,
  Ih,
  Awe,
  Y7,
  Cwe,
  vwe,
  iUt,
  b4e,
  aUt,
  jun,
  NGn,
  lUt,
  isRemoteToolServingMuted,
  onServingMuteRecheck,
  pT,
  $X,
  Sde,
  vne,
  Rht,
  an,
  ZM,
  q7n,
  dpe,
  z7n,
  nAe,
  C9t,
  vY,
  RY,
  V7n,
  K7n,
  WMe,
  X7n,
  rAe,
  Y7n,
  J7n,
  Q7n,
  Zyt,
  iXn,
  qMe,
  aXn,
  eK,
  d_n,
  lXn,
  cXn,
  wT,
  hre,
  iD,
  tSt,
  nSt,
  zMe,
  pXn,
  H9t,
  evaluateHookIfCondition,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { io } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { findGitRootUncached } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { Ee } from "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { getSettingsFilePathForSource, getSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { I6 } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isViolinWoodEnabledCached, isViolinAmatiEnabledCached } from "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import { subprocessEnv } from "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import { hD } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { untrustedDeviceHint } from "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import { primeUnattendedServingConsent } from "../AutoMode-自动模式/chunk-15n5gf3t.js";
import { p2n, m2n } from "../远程工具执行/chunk-66axrkvh.js";
import { xC, moe } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import { kS } from "../Bridge-RemoteControl/chunk-x379yyxb.js";
import { NOT_HELD_STATE } from "../../01-核心基础设施/共享小工具-未细化/chunk-hkdjw6ht.js";
import { f$n, cye } from "./chunk-y7gz94r8.js";
import { parseThinClientReply } from "../../01-核心基础设施/共享小工具-未细化/parse-thin-client-reply.js";
import { logRemoteToolsEvent } from "../../01-核心基础设施/共享小工具-未细化/remote-tools-logger.js";
import { truncateWithEllipsis } from "../../01-核心基础设施/共享小工具-未细化/truncate-with-ellipsis.js";
import { defineDialog } from "../对话框-确认UI/对话框-确认UI.4ggnfbtb.js";
import { s, T, v, c, it, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function Ke() {
  let e = new Map();
  return {
    known(o) {
      let d = Math.max(e.get(o) ?? 0, 1);
      return (e.set(o, d), d);
    },
    next(o) {
      let d = (e.get(o) ?? 0) + 1;
      return (e.set(o, d), d);
    },
  };
}
function Je() {
  return {
    consentPin: R$n(),
    generations: Ke(),
    pointedToCommand: { shown: !1 },
    setAsideSessions: new Set(),
    decided: Le(),
  };
}
var z_e = new j(Je);
var Xe = /^[a-z_]+:\[?[^/]*\]?$/;
function re(e) {
  let d = [
      e.launchDirReal,
      e.launchDir,
      e.projectDir,
      ...(e.projectDirReal !== void 0 ? [e.projectDirReal] : []),
      ...(e.sync !== void 0
        ? [e.sync.rootReal, ...(e.sync.root !== void 0 ? [e.sync.root] : [])]
        : []),
      ...e.extraReach,
    ].filter((r) => !Xe.test(r)),
    t = d.find((r) => !r.startsWith("/"));
  if (t !== void 0)
    return (
      n(
        `[deviceHooks] reach: a root that is not an absolute path (${JSON.stringify(t)}) \u2014 everything on this machine counts as in the cloud session's reach`,
        { level: "warn" },
      ),
      ["/"]
    );
  return d.map((r) => Kf(r.replace(/\/+$/, "")) || "/");
}
function ke(e, o) {
  return (e.length === 1 && e[0] === "/") || o.some((d) => !d.startsWith("/"));
}
function Ye(e, o) {
  let d = re(o);
  return ke(d, e) || e.some((t) => d.some((r) => iT(r, Kf(t))));
}
function ve(e, o) {
  let d = re(o);
  return ke(d, e) || e.some((t) => d.some((r) => iT(Kf(t), r)));
}
function Qe(e) {
  switch (e.type) {
    case "command":
      return e.args === void 0 ? e.command : [e.command, ...e.args].join(" ");
    case "http":
      return e.url;
    case "prompt":
    case "agent":
      return e.prompt;
    case "mcp_tool":
      return `${e.server}/${e.tool}`;
    case "script":
      return e.file ?? H9t(e.script ?? "");
  }
}
function Q(e) {
  return io(Qe(e), { maxCodeUnits: 200 });
}
async function Se(e, o, d, t = {}) {
  let r = [
    ...(t.sourceFile !== void 0 ? [t.sourceFile] : []),
    ...(t.pluginRoot !== void 0 ? [t.pluginRoot] : []),
  ];
  for (let H of r) {
    let O = await d.realpath(H).catch(() => null);
    if (O === null || ve([H, O], o) || (H === t.pluginRoot && Ye([H, O], o)))
      return {
        kind: "source_in_reach",
        notice: `"${Q(e)}" is configured in a place the cloud session can write on this machine (${io(H, { maxCodeUnits: 200 })}), so it is not run for the cloud session from this machine.`,
      };
  }
  if (e.type !== "command") return { kind: "not_command", hookType: e.type };
  let k = GOe(e, {
    home: d.home,
    projectDir: o.projectDir,
    hookCwd: o.launchDirReal,
    defaultShell: d.defaultShell,
    shellPrefix: d.shellPrefix,
    ...(t.pluginRoot !== void 0 && { pluginRoot: t.pluginRoot }),
  });
  if (k.kind !== "script")
    return {
      kind: "opaque",
      reason: k.reason,
      notice: `"${Q(e)}" is not a single script this machine can pin, so it is not run for the cloud session from this machine: it would run whatever it names in the checkout, which the session may have written. Point it at one script outside the checkout (under ~/.claude, say).`,
    };
  let R = io(k.rawPath, { maxCodeUnits: 200 }),
    { located: _, digest: C } = await Ze(k.resolvedPath, o, d, t.resolved);
  if (_.realPath === null || C === null || !C.ok)
    return {
      kind: "unverifiable",
      rawPath: R,
      notice: `${R} could not be read and pinned (missing, too large, not a regular file, more than one hard link, or it resolves to a file this machine does not read as a hook script), so its hook is not run for the cloud session from this machine.`,
    };
  let M = {
    pinnedTarget: {
      path: k.resolvedPath,
      realPath: _.realPath,
      sha256: C.sha256,
    },
    bytes: C.bytes,
    rawPath: R,
    interpreter: k.interpreter,
    site: k.site,
  };
  if (ve([k.resolvedPath, _.realPath], o))
    return {
      kind: "script_in_reach",
      ...M,
      notice: `"${Q(e)}" sits where the cloud session can write on this machine (the checkout, the synced directory or a sandbox write inlet), so it is not run for the cloud session from this machine. Move the script outside the checkout (under ~/.claude, say).`,
    };
  return { kind: "script_outside_reach", ...M };
}
async function Ze(e, o, d, t) {
  let r = t?.get(e);
  if (r) return r;
  let k = (async () => {
    let R = await MGn(e, o, d),
      _ = R.realPath === null ? null : await sUt(R.realPath, d);
    return { located: R, digest: _ };
  })();
  return (t?.set(e, k), k);
}
function _e() {
  return {
    stickyRoots: new Set(),
    pinnedScopes: new Set(),
    pinnedRoots: new Map(),
    syncRoots: new Set(),
    reachBaseline: null,
    commonRoots: null,
  };
}
function Re(e) {
  let o = { ...en(e.launchDir), ...e.deps },
    { memory: d } = e;
  ((d.reachBaseline ??= new Map(yi.map((D) => [D, o.scopeWriteEntries(D)]))),
    (d.commonRoots ??= o.commonWriteRoots()));
  let { reachBaseline: t, commonRoots: r, syncRoots: k, stickyRoots: R } = d,
    _ = (D) => {
      (k.add(D),
        o.realpath(D).then(
          (M) => k.add(M),
          () => {},
        ));
    },
    C = async () => {
      let D = o.addedDirectories().flatMap((M) => {
        try {
          return [ot(M, e.launchDir)];
        } catch {
          return [];
        }
      });
      return [
        ...D,
        ...(await Promise.all(D.map((M) => o.realpath(M).catch(() => M)))),
      ];
    };
  return {
    noteSyncRoot: _,
    async current() {
      let D = !1,
        M = (p) =>
          o.realpath(p).then(
            (S) => (S.startsWith("/") ? S : p),
            () => ((D = !0), p),
          ),
        H = await M(e.launchDir),
        O = await M(e.projectDir),
        A = null;
      try {
        A = e.syncRoot();
      } catch {
        D = !0;
      }
      if (A !== null) (k.add(A), k.add(await M(A)));
      let F = A === null ? void 0 : { rootReal: await M(A), root: A },
        w = dedupe([
          e.projectDir,
          O,
          ...(e.repoRoot !== null ? [e.repoRoot, await M(e.repoRoot)] : []),
          ...k,
          ...(await C()),
        ]),
        E = await M(e.configHome);
      if (
        (await Awe({
          stickyRoots: R,
          pinnedScopes: d.pinnedScopes,
          pinnedRoots: d.pinnedRoots,
          baseRoots: [
            ...Gft({ launchDir: e.launchDir, launchDirReal: H }),
            ...w,
          ],
          reachBaseline: t,
          scopeSettingsFile: o.scopeSettingsFile,
          realpath: o.realpath,
          commonRoots: () => r,
          scopeRoots: o.scopeWriteRoots,
        }).catch(() => {
          D = !0;
        }),
        D)
      )
        n(
          "cloud session reach: a base root did not resolve (or sync state could not be read); every hook is treated as in reach for this answer",
          { level: "warn" },
        );
      return {
        launchDir: e.launchDir,
        launchDirReal: H,
        configHomeReal: E,
        projectDir: e.projectDir,
        projectDirReal: O,
        ...(F !== void 0 && { sync: F }),
        extraReach: D ? ["/"] : dedupe([...w, ...R]),
      };
    },
  };
}
function en(e) {
  return {
    realpath: rAe().realpath,
    commonWriteRoots: () => Sde(e),
    scopeWriteRoots: (o, d) => vne(e, o, d),
    scopeWriteEntries: (o) => {
      let d = $X(o, e),
        t = getSettingsFilePathForSource(o);
      if (o === "policySettings" || !t) return d;
      let r = parseSettingsFileUncached(t, o === "flagSettings" ? (MA() ?? d8()) : void 0);
      if (r.errors.some((k) => (k.severity ?? "fatal") === "fatal"))
        return (
          n(
            `cloud session reach: the ${o} settings file could not be read or parsed at attach; its write grants are unknown, so every hook counts as in the session's reach`,
            { level: "warn" },
          ),
          [S4e]
        );
      return dedupe([...$X(o, e, r.settings), ...d]);
    },
    scopeSettingsFile: (o) => getSettingsFilePathForSource(o) ?? null,
    addedDirectories: () => mp(),
  };
}
function nn() {
  let e = new Map();
  return {
    reachFor(o) {
      let d = e.get(o);
      if (d !== void 0) return d;
      let t = _e();
      return (e.set(o, t), t);
    },
  };
}
var Cst = new j(nn);
import { randomUUID } from "crypto";
var tn = createLazyValue(() =>
    it({
      status: X(["announced", "withdrawn"]),
      passthrough_declined: X(["policy", "pending"])
        .optional()
        .catch(void 0),
      worker_epoch: T()
        .int()
        .positive()
        .max(Number.MAX_SAFE_INTEGER)
        .optional()
        .catch(void 0),
      protocol_version: T()
        .nullable()
        .optional()
        .catch(void 0),
      ignored_tools: v(s())
        .optional()
        .catch(void 0),
      passthrough_adopted: T()
        .int()
        .nonnegative()
        .optional()
        .catch(void 0),
    }),
  ),
  rn = 15000,
  Gae = "unverified_sender";
function sn(e) {
  if (e instanceof hre) return { kind: "failed", reason: "post_failed" };
  if (e instanceof wT) return { kind: "failed", reason: "no_answer" };
  if (e instanceof Ve) return { kind: "failed", reason: "aborted" };
  let o = l(e);
  if (o.startsWith("Unsupported control request subtype"))
    return { kind: "unsupported" };
  if (
    o.startsWith("remote_tools_disabled:") ||
    o.startsWith("invalid_announce:")
  )
    return { kind: "refused", reason: o };
  if (o.startsWith("remote_tools_not_ready:"))
    return { kind: "retry", reason: o };
  if (o.startsWith("stale_worker_epoch"))
    return { kind: "retry", reason: "stale_worker_epoch" };
  return { kind: "failed", reason: o };
}
async function Ce(e, o, d = {}) {
  primeUnattendedServingConsent();
  let t = new AbortController();
  try {
    let r = await e.postControlRequest(He(o), {
        signal: d.signal ? AbortSignal.any([d.signal, t.signal]) : t.signal,
        ...(d.timeoutMs !== void 0 && { timeoutMs: d.timeoutMs }),
        ...(d.answerExpected === !1 && { answerExpected: !1 }),
        background: !0,
        onEchoed: (R) => {
          if (R === "unverified") t.abort();
        },
      }).response,
      k = parseThinClientReply("remote_tools_announce", tn(), r);
    if (k === null) return { kind: "failed", reason: "unreadable_ack" };
    return {
      kind: "announced",
      status: k.status,
      ...(k.passthrough_declined !== void 0 && {
        passthroughDeclined: k.passthrough_declined,
      }),
      workerEpoch: k.worker_epoch,
      protocolVersion: k.protocol_version,
      ignoredTools: k.ignored_tools ?? [],
      ...(k.passthrough_adopted !== void 0 && {
        passthroughAdopted: k.passthrough_adopted,
      }),
    };
  } catch (r) {
    return t.signal.aborted ? { kind: "refused", reason: Gae } : sn(r);
  }
}
function He(e) {
  return {
    subtype: "remote_tools_announce",
    instance_id: e.instance_id,
    ...(e.worker_epoch !== void 0 && { worker_epoch: e.worker_epoch }),
    host: e.host,
    tools: e.tools.map((o) => ({
      ...o,
      refused_input_fields: [...o.refused_input_fields],
      protocol_versions: [...o.protocol_versions],
    })),
    passthrough: [...e.passthrough],
    plumbing: [...e.plumbing],
  };
}
function cn(e) {
  return e.slice(0, 200).replace(/[^\x20-\x7e]/g, "?");
}
var dn = 4,
  De = 2000,
  Pe = 1048576;
function ln(e) {
  if (e.passthrough.length === 0 || b(He(e)).length <= Pe)
    return { body: e, trimmed: !1 };
  return { body: { ...e, passthrough: [] }, trimmed: !0 };
}
function un(e) {
  let { passthroughAdopted: o, ...d } = e;
  return d;
}
var Te = 1500;
function Ie(e) {
  let o = (N) =>
      e.backoffMs !== void 0
        ? e.backoffMs[N]
        : N < dn
          ? fullJitterBackoffMs({ baseMs: De, attempt: N, floorMs: (De * 2 ** N) / 2 })
          : void 0,
    d =
      e.setTimer ??
      ((N, I) => {
        let U = setTimeout(N, I);
        return { clear: () => clearTimeout(U) };
      }),
    t = !1,
    r = !1,
    k = null,
    R = 0,
    _ = null,
    C = null,
    D = null,
    M = !1,
    H,
    O = null,
    A = 0,
    F = 0,
    w = async (N) => {
      if (E(N) || N === "reconnected") F = 0;
      let I = e.session(),
        U = e.build();
      if (I === null || U === void 0 || !e.workerLive()) {
        k = S(k, N);
        return;
      }
      let { body: G, trimmed: x } = ln(U);
      if (x && !M)
        ((M = !0),
          logFeatureSad("remote_tools_client_announce", "passthrough_over_frame"),
          n(
            `[remoteToolsAnnounce] the announce with this machine's ${U.passthrough.length} MCP tools is larger than the worker reads (${Pe} chars); announcing without them \u2014 they stay on the device bridge`,
            { level: "warn" },
          ));
      ((k = null), W(), (r = !0), (H = G));
      let q = await Ce(I, G, {
        ...(e.signal && { signal: e.signal }),
        timeoutMs: rn,
      });
      if (((r = !1), t)) return;
      let V = x && q.kind === "announced" ? un(q) : q,
        ie = V.kind === "failed" && V.reason === "no_answer",
        K = V.kind === "refused" && V.reason === Gae;
      F = ie || K ? F + 1 : 0;
      let ne =
        ie && F > 1
          ? { kind: "refused", reason: "no_answer_parked" }
          : K && F === 1
            ? { kind: "retry", reason: Gae }
            : V;
      switch (
        (n(
          `[remoteToolsAnnounce] ${N}: ${ne.kind}${"reason" in ne ? ` (${cn(ne.reason)})` : ""}`,
        ),
        e.onOutcome?.(ne, N),
        ne.kind)
      ) {
        case "announced":
          (L(), (A = 0));
          break;
        case "refused":
        case "unsupported":
          (L(),
            (A = 0),
            (O =
              ne.kind === "refused" && ne.reason === "no_answer_parked"
                ? "silence"
                : "refusal"));
          break;
        case "retry":
          if (
            (ne.reason === "stale_worker_epoch" && ++A === 1) ||
            ne.reason === Gae
          )
            k ??= "retry";
          else B();
          break;
        case "failed":
          B();
          break;
      }
      let J = k;
      if (J !== null) {
        if (((k = null), O === null || p(J))) ((O = null), L(), w(J));
      }
    },
    E = (N) => N === "worker_init" || N === "tools_changed",
    p = (N) => E(N) || (O === "silence" && N === "reconnected"),
    S = (N, I) => (N !== null && E(N) && !E(I) ? N : I),
    L = () => {
      ((R = 0), _?.clear(), (_ = null));
    },
    W = () => {
      (D?.clear(), (D = null), (C = null));
    },
    ee = (N, I) => {
      if (C !== null && C.ms <= I) {
        C = { reason: S(C.reason, N), ms: C.ms };
        return;
      }
      let U = C?.reason ?? null;
      (W(),
        (C = { reason: S(U, N), ms: I }),
        (D = d(() => {
          let G = C;
          if (((D = null), (C = null), G !== null)) z.requestAnnounce(G.reason);
        }, I)));
    },
    B = () => {
      let N = _ === null ? o(R) : void 0;
      if (N === void 0) return;
      ((R += 1),
        (_ = d(() => {
          if (((_ = null), !t)) w("retry");
        }, N)));
    },
    z = {
      requestAnnounce(N, I) {
        if (t) return;
        if (I?.coalesceMs !== void 0 && I.coalesceMs > 0) {
          ee(N, I.coalesceMs);
          return;
        }
        let U = C === null ? N : S(C.reason, N);
        if ((W(), p(U))) O = null;
        if (((R = 0), O !== null)) return;
        if ((_?.clear(), (_ = null), r)) {
          k = S(k, U);
          return;
        }
        w(U);
      },
      outstanding: () => r || k !== null,
      workerLive() {
        if (t || r || k === null || O !== null) return;
        let N = k;
        ((k = null), _?.clear(), (_ = null), w(N));
      },
      async withdraw() {
        if (t) return;
        ((t = !0), _?.clear(), W());
        let N = e.session(),
          I = H === void 0 ? void 0 : (e.build() ?? H);
        if (N === null || I === void 0 || !e.workerLive()) return;
        await Ce(
          N,
          { ...I, tools: [], passthrough: [], plumbing: [] },
          {
            signal: AbortSignal.timeout(Te),
            timeoutMs: Te,
            answerExpected: !1,
          },
        );
      },
      dispose() {
        ((t = !0), _?.clear(), (_ = null), W());
      },
    };
  return z;
}
function Me({ serving: e, manager: o, observer: d }) {
  let t = new Map();
  return {
    onServedChannelRequest: (r) => {
      let k = new AbortController();
      t.set(r.requestId, k);
      let R = { ...r, signal: AbortSignal.any([r.signal, k.signal]) };
      pn(R, e, o, d)
        .catch((_) => {
          (logError(_), o()?.releaseServedChannelRequest(r.requestId));
        })
        .finally(() => t.delete(r.requestId));
    },
    onServedChannelRequestCancelled: () => {},
    abandonInHand: () => {
      for (let [r, k] of t) (k.abort(), o()?.releaseServedChannelRequest(r));
      t.clear();
    },
  };
}
async function pn(e, o, d, t) {
  let r = (D) => {
      (n(
        `[servedChannel] ${e.subtype} ${kS(e.requestId)} not answered here: ${D}`,
      ),
        d()?.releaseServedChannelRequest(e.requestId));
    },
    k = o();
  if (k === null) return r("nothing serving");
  let R = e.subtype === "remote_tool_call" ? p2n(e.request) : void 0,
    _ =
      t !== void 0 && R !== void 0 && R.instance_id === k.instanceId
        ? { observer: t, leg: R }
        : void 0;
  xe(() => _?.observer.legStarted(_.leg));
  let C;
  try {
    C = await mn(e, k, R);
  } finally {
    xe(() => _?.observer.legAnswered(_.leg, C?.result));
  }
  if (C === void 0) return r("not this client's to answer");
  if (e.signal.aborted) return;
  if (d()?.respondToServedChannelRequest(e.requestId, C) !== !0)
    n(
      `[servedChannel] ${e.subtype} ${kS(e.requestId)} answered after it was withdrawn \u2014 result dropped`,
    );
}
function xe(e) {
  try {
    e();
  } catch (o) {
    logError(o);
  }
}
async function mn(e, o, d) {
  let t = {
    signal: e.signal,
    requestId: e.requestId,
    ageMs: e.ageMs,
    workerEpoch: e.workerEpoch,
  };
  switch (e.subtype) {
    case "remote_tool_call":
      return d === void 0 ? void 0 : o.serveSessionToolCall(d, t);
    case "remote_plumbing_call": {
      let r = m2n(e.request);
      return r === void 0 ? void 0 : o.servePlumbingCall(r, t);
    }
    case "remote_tools_probe":
      return e.request.instance_id === o.instanceId ? o.answerProbe() : void 0;
  }
}
var de = (e) =>
    e.tools.length + e.plumbing.length + (e.passthrough?.length ?? 0) === 0,
  fn = new Set([
    "aborted",
    "invalid_announce",
    "no_answer",
    "no_answer_parked",
    "post_failed",
    "remote_tools_disabled",
    "remote_tools_not_ready",
    "stale_worker_epoch",
    "unreadable_ack",
    Gae,
  ]);
function gn(e) {
  let o = /^[a-z_]+(?=:|$)/.exec(e)?.[0];
  return o !== void 0 && fn.has(o) ? o : "other";
}
function vn(e) {
  if (e.kind === "announced") {
    logFeatureOk("remote_tools_client_announce");
    return;
  }
  logFeatureSad(
    "remote_tools_client_announce",
    e.kind === "unsupported" ? "unsupported" : `${e.kind}_${gn(e.reason)}`,
  );
}
function Rst(e) {
  let o = `cc-${randomUUID()}`,
    d = null,
    t = !1,
    r = null,
    k = null,
    R = () => {},
    _,
    C,
    D,
    M,
    H,
    O,
    A = !1,
    F = !1,
    w = !1,
    E = Ie({
      session: e.manager,
      workerLive: () => e.manager()?.workerLive() ?? !1,
      build: () => {
        let x = d?.servedTools?.();
        if (x === void 0) return;
        return ((A = de(x)), (O = _ ?? H), e.buildAnnounce(x, o, _));
      },
      onOutcome: (x, q) => {
        let V = O;
        if (((H = void 0), x.kind === "announced")) {
          if (x.workerEpoch !== void 0 && (_ === void 0 || x.workerEpoch >= _))
            _ = x.workerEpoch;
          else if (x.workerEpoch !== _)
            logRemoteToolsEvent(void 0, "epoch ratchet ignored", {
              heard: x.workerEpoch,
              kept: _,
            });
          ((C = x.passthroughDeclined === "pending" ? void 0 : x.workerEpoch),
            (D = void 0),
            (M = void 0),
            (F = A));
        } else if (
          ((C = void 0),
          x.kind === "refused" && x.reason === "no_answer_parked")
        )
          M = V;
        else if (x.kind === "refused" || x.kind === "unsupported") {
          if (((D = V), x.kind === "refused" && x.reason === Gae && !w))
            ((w = !0),
              e.onNotice?.(
                "announce_unverified",
                pT.announce_unverified(untrustedDeviceHint()),
              ));
        } else if (x.kind === "retry" && x.reason === "stale_worker_epoch")
          _ = void 0;
        (vn(x), e.onAnnounceOutcome?.(x, q));
      },
      ...(e.signal && { signal: e.signal }),
      ...e.announcer,
    }),
    p = (x) => {
      if (t) {
        x.dispose();
        return;
      }
      if (
        ((d = x),
        S(),
        (R =
          x.onServedToolsChanged?.((q) => {
            (S(),
              L("tools_changed", {
                coalesceMs:
                  q === void 0 || q === "adopted" || q === "redescribed"
                    ? 0
                    : Zyt[q],
              }));
          }) ?? R),
        r !== null)
      ) {
        let { reason: q, opts: V } = r;
        ((r = null), L(q, V));
      }
    },
    S = () => {
      if (t) return;
      let x = d?.servedTools?.();
      e.manager()?.markServing(x !== void 0 && !de(x));
    },
    L = (x, q) => {
      if (d === null) {
        r = { reason: x, ...(q && { opts: q }) };
        return;
      }
      if (x === "attached") S();
      if (
        (x === "reconnected" && C !== void 0) ||
        (x === "attached" && (C !== void 0 || H !== void 0))
      ) {
        n(
          `[servedChannel] ${x}: nothing to announce \u2014 worker epoch ${C ?? H} already has (or is being told) this machine's tools`,
        );
        return;
      }
      if (
        x === "worker_init" &&
        q?.workerEpoch !== void 0 &&
        (q.workerEpoch === C ||
          q.workerEpoch === D ||
          q.workerEpoch === M ||
          q.workerEpoch === H ||
          (_ !== void 0 && q.workerEpoch < _))
      )
        return;
      if (((C = void 0), x === "reconnected")) M = void 0;
      if (x === "worker_init") {
        H = q?.workerEpoch;
        let V =
          q?.workerEpoch === void 0 || _ === void 0 || q.workerEpoch === _;
        if (q?.workerEpoch !== void 0) _ = q.workerEpoch;
        if (V && E.outstanding()) return;
      } else if (x === "tools_changed") ((D = void 0), (M = void 0));
      E.requestAnnounce(x, {
        ...(q?.coalesceMs !== void 0 && { coalesceMs: q.coalesceMs }),
      });
    },
    W = e.createServingContext({
      sessionId: e.sessionId,
      instanceId: o,
      ...(e.onNotice && { onNotice: e.onNotice }),
    }),
    ee =
      W instanceof Promise
        ? W.then(p).catch((x) => {
            logError(x);
          })
        : Promise.resolve(p(W)),
    B = () => {},
    z = () => (
      (k ??= (async () => {
        ((t = !0), B());
        let x = d?.servedTools?.(),
          q = x === void 0 || de(x),
          V = F && A && q ? Promise.resolve(E.dispose()) : E.withdraw();
        (e.manager()?.markServing(!1),
          await ee,
          R(),
          await V,
          d?.dispose(),
          E.dispose());
      })()),
      k
    ),
    {
      abandonInHand: N,
      onServedChannelRequest: I,
      ...U
    } = Me({
      serving: () => (t ? null : d),
      manager: e.manager,
      observer: e.onServedCall,
    }),
    G = {
      instanceId: o,
      callbacks: {
        ...U,
        onServedChannelRequest: (x) =>
          I?.({ ...x, workerEpoch: x.workerEpoch ?? _ }),
        onWorkerLive: () => E.workerLive(),
        onWorkerGone: () => {
          C = void 0;
        },
      },
      requestAnnounce: L,
      heldServedCall: (x) =>
        t || d === null ? NOT_HELD_STATE : (d.heldServedCall?.(x) ?? NOT_HELD_STATE),
      servedHost: () => (t ? void 0 : d?.servedTools?.()?.host),
      close: z,
    };
  if (
    ((B =
      e.onRevoked?.((x) => {
        (n(
          `[servedChannel] serving revoked on this machine (${x}) \u2014 closing the channel`,
        ),
          N(),
          e.manager()?.giveUpKeptServedResults(),
          z());
      }) ?? B),
    t)
  )
    B();
  return G;
}
import { realpath as te } from "fs/promises";
import { isAbsolute } from "path";
import { posix } from "path";
function yn(e, o) {
  let d = e.replace(/\/+$/, "");
  if (!d.startsWith("/") || d === "") return [];
  let t =
      o !== "" && o !== "/" && (d === o || d.startsWith(`${o}/`))
        ? d.slice(o.length)
        : null,
    r = t === "" ? "/" : t;
  return t === null
    ? [d]
    : [d, `~${r}`, `$HOME${r}`, `$HOME"${r}`, `\${HOME}${r}`, `\${HOME}"${r}`];
}
var le = String.raw`(?:^|[;&|({!]|\b(?:then|do|else|if|elif|while|until)\b)[ \t]*(?:\w+=\S*[ \t]+){0,4}(?:(?:env|nice|nohup|exec|time|builtin|xargs|command(?![ \t]+-[vV]))[ \t]+(?:-\S+(?:[ \t]+\d+)?[ \t]+){0,4}(?:\w+=\S*[ \t]+){0,4})?`,
  kn =
    /(?:^|[\s"'=(`:;&|<>])\.\.?\/|\bprocess\.cwd\(\)|\bos\.getcwd\(\)|\bPath\.cwd\(\)|\bDir\.pwd\b|\bgit\b[^\n]{0,12}\brev-parse\b[^\n]{0,6}--show-toplevel\b/im,
  Sn = /\$PWD\b|\$\{PWD\b|\$\(pwd(?:[ \t]+-[LP])?\)|`pwd`/im,
  _n = /^#![^\n]*\b(?:python[0-9.]*|node|ruby|perl)\b/i,
  Rn = new RegExp(
    String.raw`${le}(?:source|\.)[ \t]+(?!["']?[/~$])["']?[^\s"']`,
    "im",
  ),
  wn = new RegExp(
    String.raw`${le}(?:(?:bash|sh|zsh|dash)[ \t]+(?:-[euxv]+[ \t]+){0,3}|(?:python3?|node|ruby|perl)[ \t]+)(?!["']?[/~$-])["']?[\w.][\w./-]*`,
    "im",
  ),
  Cn =
    /\b(?:ba|z|da)?sh[ \t]+(?:(?:--?[a-z][a-z-]*|-o[ \t]+[a-z]+)[ \t]+)*-[a-z]*c[a-z]*[ \t]+(?:(?:--?[a-bd-z][a-z-]*|-o[ \t]+[a-z]+)[ \t]+)*(["'])([\s\S]*?)\1/gi,
  bn = new RegExp(
    String.raw`${le}(?:make|gmake|npm|npx|pnpm|yarn|bun|bunx|uv|pip3?|poetry|pytest|tox|nox|cargo|rake|bundle|gradle|gradlew|mvn|go[ \t]+(?:generate|run|test|build|vet)|just|task|pre-commit|eslint|prettier|jest|vitest|webpack|vite|tsc|cmake|bazel|composer|deno[ \t]+task)(?=[ \t]|$)`,
    "im",
  ),
  En = /\bCLAUDE_PROJECT_DIR\b/i,
  Dn = /^[ \t]*#.*$/gm;
function Ae(e, o, d, t) {
  if (e.includes(0)) return;
  let r = e.toString("utf8"),
    k =
      t !== void 0 && t !== null
        ? /^(?:bash|sh|zsh|dash)$/i.test(t)
        : !_n.test(r),
    R = r.indexOf(`
`),
    _ = r.startsWith("#!") ? r.slice(2, R === -1 ? void 0 : R) : "",
    C = Kf(
      (
        _ +
        `
` +
        r.replace(Dn, "")
      ).replace(
        Cn,
        (M, H, O) => `sh
${O}
`,
      ),
    ),
    D = dedupe(o)
      .flatMap((M) => yn(M, d))
      .find((M) =>
        new RegExp(
          `(?<![\\w./~$-])${iu(Kf(M))}${M.endsWith("/") ? "" : "(?![\\w.-])"}`,
        ).test(C),
      );
  if (D !== void 0) return `it names ${D.replace('"', "")}`;
  if (En.test(C)) return "it reads $CLAUDE_PROJECT_DIR";
  if (kn.test(C) || (k && Sn.test(C)))
    return "it addresses its working directory (the launch directory, for a forwarded hook)";
  if (k && (Rn.test(C) || wn.test(C)))
    return "it runs or sources a file by a relative name (looked up in the launch directory)";
  if (k && bn.test(C))
    return "it runs project tooling that reads the checkout (make, npm, pytest, cargo\u2026)";
  return;
}
var ue = 128,
  Oe = d_n,
  pe = 8,
  Tn = 512,
  Hn = 600,
  Pn = ["gh-api-readonly", "ruff-autofix"],
  oe = {
    user: "your user settings",
    local: "this checkout's settings.local.json",
    flag: "the --settings file",
  };
function me(e, o, d) {
  let t =
    o.type === "command"
      ? `${o.shell ?? d}\x00${o.command}\x00${b(o.args ?? null)}`
      : o.url;
  return `${e.event}\x00${e.matcher ?? ""}\x00${o.type}\x00${t}\x00${o.if ?? ""}`;
}
function qe(e) {
  return e !== void 0 && e > 0 ? Math.min(e, Hn) : void 0;
}
async function ae(e, o) {
  try {
    let d = await e.realpath(o);
    return d.startsWith("/") ? d : o;
  } catch {
    return o;
  }
}
async function In(e, o) {
  let d = o.opts.sync?.rootReal;
  if (
    e.settingsFile === null ||
    (d === void 0 && o.roots.extraReach.length === 0)
  )
    return null;
  let t = e.settingsFile,
    r;
  try {
    r = await o.deps.realpath(t);
  } catch {
    return "source_in_sync_root";
  }
  let k = [t, r].map(Kf),
    _ = [
      ...(d !== void 0 ? [d] : []),
      ...(o.opts.sync?.root !== void 0 ? [o.opts.sync.root] : []),
      ...o.roots.extraReach,
    ]
      .map((H) => Kf(H.replace(/\/+$/, "")))
      .filter((H) => k.some((O) => iT(O, H))),
    C = k.flatMap((H) =>
      _.flatMap((O) =>
        iT(H, O) ? [H === O ? "" : H.slice(O.length + 1)] : [],
      ),
    );
  if (C.length === 0) return null;
  let D = Kf(o.roots.configHomeReal);
  if (_.some((H) => H === D || iT(H, D) || H.split("/").includes(".claude")))
    return "sync_root_is_config_dir";
  return C.some((H) => !H.split("/").some((O) => O.startsWith(".")))
    ? "source_in_sync_root"
    : null;
}
function xn(e, o) {
  let d =
    o === "source_in_sync_root"
      ? "the file sits where the cloud session can write on this machine (the synced directory or a sandbox write inlet), so the session could rewrite it (or it could no longer be resolved on this machine)"
      : "a directory the cloud session can write on this machine is a Claude config directory";
  return `Hooks from ${io(e.settingsFile ?? "", { maxCodeUnits: 200 })} are not offered to the cloud session: ${d}.`;
}
function $e(e) {
  return Object.entries(e.hooks).flatMap(([o, d]) =>
    (d ?? []).flatMap((t) =>
      t.hooks.map((r) => ({
        source: e,
        event: o,
        matcher: t.matcher,
        hook: r,
      })),
    ),
  );
}
function Fe(e, o) {
  let d = e.trim().split(/ +/);
  return o === null
    ? d.length === 1
    : (o === "python3" || o === "python") && d.length === 2;
}
function Mn(e) {
  return C_.includes(e);
}
var An = new Set(["/usr/bin/env", "/bin/env"]);
function On(e) {
  let o = e.subarray(0, 512).toString("utf8");
  if (!o.startsWith("#!")) return null;
  let d = o.indexOf(`
`),
    t = o
      .slice(2, d === -1 ? void 0 : d)
      .replace(/^[ \t]+|[ \t]+$/g, "")
      .split(/[ \t]+/),
    r = t[0];
  if (r === void 0 || r === "") return null;
  if (t.some((C) => /[^\x21-\x7e]/.test(C))) return "unjudgeable";
  if (!r.startsWith("/") || he.test(r)) return "unjudgeable";
  let k = jun;
  if (!An.has(Kf(posix.normalize(r))))
    return t.slice(1).every(k) ? posix.normalize(r) : "unjudgeable";
  let R = t[1] === "-S" ? t.slice(2) : t.slice(1),
    _ = R[0];
  if (
    _ === void 0 ||
    _.startsWith("-") ||
    _.includes("=") ||
    !R.slice(1).every(k)
  )
    return "unjudgeable";
  if (_.startsWith("/")) return he.test(_) ? "unjudgeable" : posix.normalize(_);
  return /^[\w.+-]+$/.test(_) ? null : "unjudgeable";
}
var he = /(?:^|\/)\.\.(?:\/|$)/,
  $n =
    /^\/dev\/(?:null|zero|full|u?random|tty\d*|pts(?:\/.*)?|ptmx|std(?:in|out|err)|fd(?:\/.*)?|dtracehelper|autofs_nowait)$/;
async function Ne(e, o, d = !1, t = !1) {
  if (!ZM(e.event))
    return {
      kind: "held",
      reason: `event_${(Mn(e.event) ? q7n(e.event) : null) ?? "container_internal"}`,
    };
  let { hook: r } = e;
  if (r.type !== "command" && r.type !== "http")
    return { kind: "held", reason: "kind_unsupported" };
  let k = r.cloud === "device" && e.source.source !== "local",
    R =
      r.cloud === "device" && e.source.source === "local"
        ? ' (Its cloud: "device" mark is not honoured in a file inside the checkout; mark it in your user settings instead.)'
        : "",
    _ = z7n(e.event, e.matcher);
  if (d)
    return _
      ? { kind: "held", reason: "after_edit" }
      : { kind: "forward", event: e.event, hook: r };
  if (_ && r.cloud === "skip") return { kind: "held", reason: "after_edit" };
  if (r.cloud === "skip")
    return {
      kind: "held",
      reason: "author_skip",
      notice: `This entry for "${Q(r)}" in ${oe[e.source.source]} is marked cloud: "skip" (or a value this version does not recognise) and stays on this machine.`,
    };
  let C,
    D,
    M,
    H = !1,
    O = !1,
    A = !1,
    F = !1,
    w,
    E,
    p =
      _ && k
        ? `This entry for "${Q(r)}" in ${oe[e.source.source]} is marked cloud: "device" but runs after a file edit, which this version never forwards; it runs in local sessions only.`
        : void 0;
  if (r.type === "command") {
    let S = await Se(r, o.reach, o.deps, { resolved: o.resolved });
    if (
      ((O = S.kind === "opaque" && S.reason === "private_dotdir"),
      (A = S.kind === "opaque" && S.reason === "shell_prefix"),
      S.kind === "unverifiable")
    )
      ((H = !0),
        (D = {
          kind: "held",
          reason: "unverifiable_target",
          notice: `This entry for ${io(S.rawPath, { maxCodeUnits: 200 })} in ${oe[e.source.source]} could not be read and pinned at start-up (missing, too large, not a regular file, more than one hard link, or it resolves to a file this machine does not read as a hook script), so it is not offered to the cloud session.`,
        }));
    else if (
      S.kind === "script_in_reach" ||
      S.kind === "script_outside_reach"
    ) {
      H = !0;
      let L = S.kind === "script_in_reach";
      if (((C = S.pinnedTarget), L && !k))
        M = {
          kind: "held",
          reason: "in_reach",
          notice: `This entry for "${Q(r)}" in ${oe[e.source.source]} sits where the cloud session can write on this machine (the checkout, the synced directory or a sandbox write inlet), so it is not offered to the cloud session. Move the script outside the checkout (under ~/.claude, say) to have it forwarded; marking it cloud: "device" instead runs it for cloud sessions from this path \u2014 the entry file is pinned, but anything it loads from the checkout is whatever the session last wrote there, run on this machine outside the sandbox.${R}`,
        };
      let W = re(o.reach),
        ee = [
          ...(S.site.form === "exec" &&
          S.site.slot === "arg0" &&
          r.command.startsWith("/")
            ? [he.test(r.command) ? "unjudgeable" : posix.normalize(r.command)]
            : []),
          ...(S.interpreter === null
            ? [On(S.bytes)].filter((I) => I !== null)
            : []),
        ],
        B;
      for (let I of ee) {
        if (I === "unjudgeable") {
          B = {
            path: "the interpreter it names",
            why: 'cannot be vouched for from here (a relative interpreter or one spelled with "..", env with options, or a #! line that hands the interpreter a file of its own)',
          };
          break;
        }
        let U = await o.deps.realpath(I).catch(() => null);
        if (U === null) {
          B = {
            path: io(I, { maxCodeUnits: 200 }),
            why: "cannot be located on this machine",
          };
          break;
        }
        if ([I, U].some((G) => W.some((x) => y4e(G, x)))) {
          B = {
            path: io(I, { maxCodeUnits: 200 }),
            why: "sits where the cloud session can write on this machine (a sandbox write inlet covers it)",
          };
          break;
        }
      }
      if (B !== void 0 && !L)
        if (k) F = !0;
        else
          M = {
            kind: "held",
            reason: "interpreter_unvouched",
            notice: `This entry for "${Q(r)}" in ${oe[e.source.source]} runs its script with ${B.path}, which ${B.why}, so it is not offered to the cloud session. Name the interpreter by its bare name (python3, bash\u2026) or one outside what the session can write; marking it cloud: "device" instead runs it as written.${R}`,
          };
      if (((F = F || (L && k)), !L)) {
        let I = Ae(
          S.bytes,
          [
            o.reach.launchDir,
            o.reach.launchDirReal,
            o.reach.projectDir,
            ...(o.reach.projectDirReal !== void 0
              ? [o.reach.projectDirReal]
              : []),
            ...(o.reach.sync !== void 0
              ? [
                  o.reach.sync.rootReal,
                  ...(o.reach.sync.root !== void 0 ? [o.reach.sync.root] : []),
                ]
              : []),
            ...o.reach.extraReach,
          ].filter((U) => !$n.test(U)),
          o.deps.home,
          S.interpreter,
        );
        if (I !== void 0 && !k && M === void 0)
          M = {
            kind: "held",
            reason: "loads_from_reach",
            notice: `This entry for "${Q(r)}" in ${oe[e.source.source]} is a script outside the checkout, but ${I} \u2014 code or data the cloud session can write \u2014 so it is not offered to the cloud session. Marking it cloud: "device" runs it anyway (you vouch for what it loads); otherwise have it load its helpers by an absolute path outside the checkout.${R}`,
          };
        else if (I !== void 0 && k) F = !0;
      }
      if (k && o.opts.optInPins !== void 0) {
        let I = `${S.pinnedTarget.realPath}\x00${S.pinnedTarget.sha256}`,
          U = o.opts.optInPins.get(S.pinnedTarget.path);
        if (U === void 0 || (!L && U !== I))
          o.opts.optInPins.set(S.pinnedTarget.path, I);
        else if (U !== I)
          ((D = {
            kind: "held",
            reason: "unverifiable_target",
            notice: `This entry for "${Q(r)}" in ${oe[e.source.source]} is marked cloud: "device" and its script, which sits where the cloud session can write, changed since this session pinned it; it is not offered again until you relaunch claude --cloud \u2014 review the file first, since the cloud session may have written it.`,
          }),
            (C = void 0),
            (F = !1));
      }
      let z = t
          ? void 0
          : (o.deps.findTemplateByDigest ?? f$n)(S.pinnedTarget.sha256),
        N = k && !_ ? void 0 : z;
      if (
        k &&
        z !== void 0 &&
        r.args === void 0 &&
        !r.if &&
        !r.async &&
        !r.asyncRewake &&
        !r.once &&
        Fe(r.command, S.interpreter)
      )
        w = z.template.id;
      if (N) {
        let { template: I, label: U } = N,
          G = (o.opts.refusedTemplateIds ?? []).includes(I.id),
          x = !G && (o.opts.enabledTemplateIds ?? Pn).includes(I.id);
        if (G)
          p = _
            ? `${I.filename} is an after-edit hook, so it is not forwarded either: it does not run for this cloud session, only in local ones.`
            : void 0;
        else if (!x)
          p = _
            ? `${I.filename} is not run in the cloud in this version, and as an after-edit hook it is not forwarded either, so it only runs in local sessions.`
            : `${I.filename} is not run in the cloud in this version; it runs on this machine instead.`;
        else if (I.event !== e.event)
          p = `${I.filename} is configured on ${e.event}; the cloud runs it only on ${I.event}, so it runs on this machine instead.`;
        else if (U === "legacy" && !o.opts.allowLegacyTemplateDigests)
          p = `${I.filename} is an older copy of ${I.id}; the cloud will not run it. Update it from dotfiles.`;
        else if (
          r.args !== void 0 ||
          r.if ||
          r.async ||
          r.asyncRewake ||
          r.once ||
          !Fe(r.command, S.interpreter)
        )
          p = `${I.filename} is run in a way the cloud cannot reproduce (arguments, a condition, async or once), so it runs on this machine instead.`;
        else if (
          e.matcher !== void 0 &&
          !nAe(e.matcher) &&
          (!We(e.matcher) || !dpe.test(e.matcher))
        )
          p = void 0;
        else if (!C9t(e.matcher, I.matcher))
          p = `${I.filename} is configured with the matcher "${io(e.matcher ?? "", { maxCodeUnits: 200 })}" and the cloud runs it on "${I.matcher}", so it runs on this machine instead.`;
        else {
          let q = qe(r.timeout);
          E = {
            entry: {
              wire: {
                template: I.id,
                digest: S.pinnedTarget.sha256,
                event: e.event,
                ...(!nAe(e.matcher) && { matcher: e.matcher }),
                ...(q !== void 0 && { timeout_s: q }),
              },
              local: {
                templateId: I.id,
                label: U,
                scriptRealPath: S.pinnedTarget.realPath,
                bytes: S.bytes,
                userMatcher: e.matcher,
                source: e.source.source,
              },
            },
            ...(U === "legacy" && {
              legacyNotice: `${I.filename} is an older copy of ${I.id}; the cloud will run that copy. Update it from dotfiles to get fixes.`,
            }),
            ...(e.matcher !== void 0 &&
              !nAe(e.matcher) &&
              !C9t(I.matcher, e.matcher) && {
                narrowNotice: `${I.filename} is configured with the matcher "${io(e.matcher, { maxCodeUnits: 200 })}"; in the cloud it runs on "${I.matcher}" only.`,
              }),
          };
        }
        if (E === void 0 && _ && x)
          p = `${(p ?? `${I.filename} cannot move to the cloud here.`).replace(/(?:, so|; it) (?:it )?runs on this machine instead\.$/, ".").replace(/\.$/, "")}, and as an after-edit hook it is not forwarded either: it runs in local sessions only.`;
      }
    }
  }
  if (E !== void 0) {
    let S = [E.legacyNotice, E.narrowNotice]
      .filter((L) => L !== void 0)
      .join(" ");
    return {
      kind: "template",
      entry: E.entry,
      event: e.event,
      hook: r,
      ...(S !== "" && { notice: S }),
    };
  }
  if (_)
    return {
      kind: "held",
      reason: "after_edit",
      ...(p !== void 0 && { notice: p }),
    };
  if (D !== void 0) return D;
  if (e.matcher !== void 0 && !We(e.matcher))
    return { kind: "held", reason: "over_cap" };
  if (e.matcher !== void 0 && !nAe(e.matcher) && !dpe.test(e.matcher))
    return {
      kind: "held",
      reason: "pattern_matcher",
      notice: `"${Q(r)}" is configured with the pattern matcher "${io(e.matcher, { maxCodeUnits: 200 })}", which a cloud session cannot take, so it is not offered to it and runs in local sessions only. Use a plain list such as Edit|Write for it to run for cloud sessions too.`,
    };
  if (M !== void 0) return M;
  if (r.type === "command" && !H) {
    if (!k)
      return {
        kind: "held",
        reason: "unpinned_command",
        notice: A
          ? `This entry for "${Q(r)}" in ${oe[e.source.source]} would run wrapped in your CLAUDE_CODE_SHELL_PREFIX, so this machine cannot pin what actually runs and it is not offered to the cloud session. Marking it cloud: "device" runs it for cloud sessions anyway (through the prefix when that names an absolute wrapper outside what the session can write; without it otherwise).${R}`
          : O
            ? `This entry for "${Q(r)}" in ${oe[e.source.source]} names a script under a dot-directory this feature never reads or pins (of those, only ~/.claude and ~/.config are), so it is not offered to the cloud session. Move the script to one of those, or elsewhere outside the checkout, to have it forwarded; marking it cloud: "device" instead runs the command as written for cloud sessions, unpinned.${R}`
            : `This entry for "${Q(r)}" in ${oe[e.source.source]} is not a single script this machine can pin, so it is not offered to the cloud session. Point it at one script outside the checkout (under ~/.claude, say) to have it forwarded; marking it cloud: "device" instead runs the command as written for cloud sessions \u2014 nothing is pinned, so whatever it names in the checkout is whatever the session last wrote there, run on this machine outside the sandbox.${R}`,
      };
    F = !0;
  }
  return {
    kind: "forward",
    event: e.event,
    hook: r,
    ...(C !== void 0 && { pinnedTarget: C }),
    ...(F && { authorOptIn: !0 }),
    ...(k && { cloudDevice: !0 }),
    ...(w !== void 0 && { templateTwinId: w }),
    ...(p !== void 0 && { notice: p }),
  };
}
function We(e) {
  return e.length <= Tn && !/[\p{Cc}\p{Cf}]/u.test(e);
}
function je(e) {
  return `${e} is configured more than once; the cloud runs it once.`;
}
function Fn() {
  return {
    forwarded: [],
    templates: [],
    held: [],
    heldCounts: {
      after_edit: 0,
      kind_unsupported: 0,
      plugin: 0,
      managed: 0,
      other: 0,
    },
    notices: [],
  };
}
async function nIt(e, o, d) {
  let t = Fn();
  if (e.kind === "none") return t;
  let r = {
      launchDirReal: await ae(d, o.launchDir),
      projectDirReal: await ae(d, o.projectDir),
      configHomeReal: await ae(d, o.configHome),
      extraReach: dedupe(
        (
          await Promise.all(
            [
              ...(o.repoRoot !== void 0 ? [o.repoRoot] : []),
              ...(o.extraReachRoots ?? []),
            ].map(async (p) => [p, await ae(d, p)]),
          )
        ).flat(),
      ),
    },
    k = {
      opts: o,
      deps: d,
      roots: r,
      reach: {
        launchDir: o.launchDir,
        launchDirReal: r.launchDirReal,
        configHomeReal: r.configHomeReal,
        projectDir: o.projectDir,
        projectDirReal: r.projectDirReal,
        ...(o.sync !== void 0 && { sync: o.sync }),
        extraReach: r.extraReach,
      },
      resolved: new Map(),
    },
    R = (p, S) => {
      if (
        (t.held.push({
          event: p.event,
          ...(p.matcher !== void 0 && {
            matcher: io(p.matcher, { maxCodeUnits: 200 }),
          }),
          source: p.source.source,
          command: Q(p.hook),
          reason: S,
        }),
        S === "after_edit")
      )
        t.heldCounts.after_edit += 1;
      else if (S === "kind_unsupported") t.heldCounts.kind_unsupported += 1;
      else t.heldCounts.other += 1;
    },
    _ = new Set(),
    C = (p) => {
      if (p !== void 0 && !_.has(p)) (_.add(p), t.notices.push(p));
    },
    D = (p) => {
      if (_.delete(p)) t.notices = t.notices.filter((S) => S !== p);
    },
    M = new Map(),
    H = new Map(),
    O = new Map(),
    A = new Set(),
    F = new Set(),
    w = new Map();
  if (
    [
      o.launchDir,
      o.configHome,
      o.sync?.rootReal,
      o.sync?.root,
      ...(o.extraReachRoots ?? []),
    ].some((p) => p !== void 0 && !p.startsWith("/"))
  ) {
    C(
      "Hooks stay on this machine: its paths are not POSIX paths this version can reason about.",
    );
    for (let p of e.sources) for (let S of $e(p)) R(S, "unverifiable_target");
    return t;
  }
  for (let p of e.sources) {
    let S = await In(p, k),
      L = $e(p);
    if (S !== null && L.length > 0) C(xn(p, S));
    for (let W of L) {
      let ee = await Ne(W, k, S !== null);
      if (S !== null) {
        R(
          W,
          ee.kind === "held" &&
            (ee.reason.startsWith("event_") ||
              ee.reason === "kind_unsupported" ||
              ee.reason === "after_edit")
            ? ee.reason
            : S,
        );
        continue;
      }
      if (ee.kind === "held") {
        (C(ee.notice), R(W, ee.reason));
        continue;
      }
      let B = ee;
      if (B.kind === "template") {
        let { entry: K } = B,
          ne = me(W, B.hook, d.defaultShell),
          J = w.get(K.local.templateId),
          se = H.get(ne),
          fe = J !== void 0 && (J.site.matcher ?? "") === (W.matcher ?? ""),
          Ge = J !== void 0 ? fe : t.templates.length < pe;
        if (se !== void 0 && Ge) {
          if ((R(se.site, "duplicate"), A.add(se.index), se.notice !== void 0))
            D(se.notice);
          H.delete(ne);
        }
        if (J !== void 0 && !fe) {
          if (((B = await Ne(W, k, !1, !0)), B.kind === "held")) {
            (R(W, B.reason), C(B.notice));
            continue;
          }
        } else if (J !== void 0) {
          R(J.site, "duplicate");
          let ge = me(J.site, J.hook, d.defaultShell);
          if (ge !== ne) O.delete(ge);
          if (
            (O.set(ne, { index: J.index, templateId: K.local.templateId }),
            (t.templates[J.index] = K),
            J.notice !== void 0)
          )
            D(J.notice);
          (w.set(K.local.templateId, {
            index: J.index,
            site: W,
            hook: B.hook,
            ...(B.notice !== void 0 && { notice: B.notice }),
          }),
            C(je(K.local.templateId)),
            C(B.notice));
          continue;
        } else if (t.templates.length >= pe) {
          (R(W, "over_cap"),
            C(
              `Only ${pe} templates can run in the cloud session; the rest stay on this machine.`,
            ));
          continue;
        } else {
          (w.set(K.local.templateId, {
            index: t.templates.length,
            site: W,
            hook: B.hook,
            ...(B.notice !== void 0 && { notice: B.notice }),
          }),
            O.set(ne, {
              index: t.templates.length,
              templateId: K.local.templateId,
            }),
            t.templates.push(K),
            C(B.notice));
          continue;
        }
      }
      if (B.kind !== "forward") continue;
      let z = B,
        N = qe(z.hook.timeout),
        I = {
          wire: {
            id: "",
            event: W.event,
            ...(!nAe(W.matcher) && { matcher: W.matcher }),
            kind: z.hook.type,
            ...(N !== void 0 && { timeout_s: N }),
            source: p.source,
            ...(z.hook.if && { has_condition: !0 }),
            ...(z.pinnedTarget !== void 0 && { target_pinned: !0 }),
            ...(z.authorOptIn && { author_opt_in: !0 }),
          },
          local: {
            hook: z.hook,
            matcher: W.matcher,
            event: z.event,
            source: p.source,
            ...(z.pinnedTarget !== void 0 && { pinnedTarget: z.pinnedTarget }),
            ...(z.cloudDevice && { cloudOptIn: !0 }),
            ...(z.templateTwinId !== void 0 && {
              templateTwinId: z.templateTwinId,
            }),
          },
        },
        U = me(W, z.hook, d.defaultShell),
        G = O.get(U),
        x = (M.get(W.event) ?? 0) < Oe,
        q = H.has(U) || (t.forwarded.length < ue && x);
      if (G !== void 0 && q) {
        let K = w.get(G.templateId);
        if (K !== void 0 && K.index === G.index) {
          if ((R(K.site, "duplicate"), K.notice !== void 0)) D(K.notice);
          (D(je(G.templateId)), w.delete(G.templateId));
        }
        (F.add(G.index), O.delete(U));
      }
      let V = H.get(U);
      if (V !== void 0) {
        R(V.site, "duplicate");
        let K = t.forwarded[V.index].wire.id;
        if (
          ((t.forwarded[V.index] = { ...I, wire: { ...I.wire, id: K } }),
          V.notice !== void 0)
        )
          D(V.notice);
        (H.set(U, {
          index: V.index,
          site: W,
          ...(z.notice !== void 0 && { notice: z.notice }),
        }),
          C(z.notice));
        continue;
      }
      if (t.forwarded.length >= ue) {
        (R(W, "over_cap"),
          C(
            `Only the first ${ue} hooks are offered to the cloud session; the rest stay on this machine.`,
          ));
        continue;
      }
      if (!x) {
        (R(W, "over_cap"),
          C(
            `Only the first ${Oe} ${W.event} hooks are offered to the cloud session; the rest stay on this machine.`,
          ));
        continue;
      }
      let ie = M.get(W.event) ?? 0;
      (M.set(W.event, ie + 1),
        H.set(U, {
          index: t.forwarded.length,
          site: W,
          ...(z.notice !== void 0 && { notice: z.notice }),
        }),
        C(z.notice),
        t.forwarded.push({
          ...I,
          wire: { ...I.wire, id: aXn(o.instanceId, W.event, ie) },
        }));
    }
  }
  ((t.forwarded = t.forwarded.filter((p, S) => !A.has(S))),
    (t.templates = t.templates.filter((p, S) => !F.has(S))));
  let E = new Map(
    t.templates.map((p) => [
      `${p.wire.template}\x00${p.wire.event}`,
      p.wire.template,
    ]),
  );
  return (
    (t.forwarded = t.forwarded.filter((p) => {
      let S = p.local.templateTwinId,
        L = S === void 0 ? void 0 : E.get(`${S}\x00${p.wire.event}`);
      if (
        S === void 0 ||
        L === void 0 ||
        !C9t(cye(S)?.matcher ?? "", p.local.matcher ?? "*")
      )
        return !0;
      return (
        t.held.push({
          event: p.wire.event,
          ...(p.local.matcher !== void 0 && {
            matcher: io(p.local.matcher, { maxCodeUnits: 200 }),
          }),
          source: p.local.source,
          command: Q(p.local.hook),
          reason: "duplicate",
        }),
        (t.heldCounts.other += 1),
        C(
          `"${Q(p.local.hook)}" is the same script the cloud already runs as ${L}; it is not also run on this machine.`,
        ),
        !1
      );
    })),
    t
  );
}
function Wn(e) {
  let o = e.forwarded + e.templateNames.length;
  return `${o === 1 ? "One of your hooks" : `${o} of your hooks`} could run for cloud sessions started from this machine \u2014 run /hooks to decide (nothing from this machine runs for them until you do).`;
}
function rIt(e) {
  return e.CLAUDE_CODE_SHELL_PREFIX?.trim() || void 0;
}
var Ue = 30000;
function jn(
  e,
  o,
  d = async (t) => ({ real: await te(t), aliased: await aUt(t) }),
) {
  let t = {
    path: e,
    real: null,
    env: o === void 0 ? void 0 : { ...o },
    locate: () => {
      ((t.retryAt = void 0),
        d(e).then(
          ({ real: r, aliased: k }) => {
            if (((t.real = k ? "unresolvable" : r), k))
              t.retryAt = Date.now() + Ue;
          },
          (r) => {
            if (
              ((t.real = "unresolvable"),
              r?.code !== "ENOENT" && r?.code !== "ENOTDIR")
            )
              t.retryAt = Date.now() + Ue;
          },
        ));
    },
  };
  return (t.locate(), t);
}
function Ln(e, o = Date.now()) {
  if (e.retryAt !== void 0 && o >= e.retryAt) e.locate?.();
}
function P6e(e) {
  return (
    (e.legacyConfigFile ??= jn(getGlobalClaudeFile(), NGn(e, moe()))),
    Ln(e.legacyConfigFile),
    e.legacyConfigFile
  );
}
function oIt(e, o, d = (t) => getSettingsForSource(t)?.env) {
  let t = (k) =>
      e.pinnedScopes.has(k) ||
      (k === "userSettings" && e.everInReach.has("user")) ||
      (k === "flagSettings" && e.everInReach.has("flag")),
    r =
      o.env !== void 0 &&
      typeof o.real === "string" &&
      o.real !== "unresolvable" &&
      isAbsolute(o.path) &&
      !Ih([o.path, o.real], [...e.stickyRoots]);
  return Object.assign(
    {},
    r ? o.env : {},
    ...yi.filter((k) => !Ow.has(k) && !t(k)).map((k) => d(k) ?? {}),
  );
}
function sIt(e, o) {
  let d = setTimeout(e, o);
  return (d.unref(), { clear: () => clearTimeout(d) });
}
function Est() {
  return (
    P() !== "windows" && isViolinWoodEnabledCached() && isViolinAmatiEnabledCached() && !a.CLAUDE_CODE_DISABLE_HOOK_FORWARDING
  );
}
function qn(e) {
  let o = null,
    d = !1,
    t = new Set();
  return {
    state: () => o,
    setState(r) {
      o = d ? null : r;
    },
    async handleForwardedHook(r) {
      if (d) return;
      try {
        let k = await e.servicer.serve(r, o);
        if (d) return;
        if (k.kind === "silent") {
          if (
            k.reason === "not_mine" ||
            k.reason === "no_state" ||
            k.reason === "withdrawn"
          )
            e.release(r.requestId);
          return;
        }
        e.respond(r.requestId, k.answer);
      } catch (k) {
        if ((e.logError(k), eK(r.callbackId)?.event === "PreToolUse" && !d))
          try {
            e.respond(r.requestId, {
              hookSpecificOutput: {
                hookEventName: "PreToolUse",
                permissionDecision: "deny",
                permissionDecisionReason:
                  "A hook on your machine could not be run for this call (internal error); retry",
              },
            });
          } catch {}
      }
    },
    handleCancelled(r, k) {
      if (d || !e.servicer.cancel(r, k) || k !== "worker") return;
      for (let R of t) R();
    },
    onStoppedWhileRunning(r) {
      return (t.add(r), () => t.delete(r));
    },
    async dispose() {
      ((d = !0),
        (o = null),
        t.clear(),
        e.servicer.cancelAll(),
        await e.staging.dispose());
    },
  };
}
function Be({
  launchDir: e,
  memory: o,
  getTools: d,
  respond: t,
  release: r,
  onLine: k,
  trustAccepted: R = I6,
  isMuted: _,
}) {
  let C = () => null,
    D = X7n(Y7n(), () => [...(C()?.cloudWritableRoots ?? [e]), ...Rht(e)]),
    M = Et(() => D.dispose()),
    H = e;
  te(e).then(
    (p) => {
      H = p;
    },
    () => {},
  );
  let O = { ...subprocessEnv() };
  lUt(o, P6e(o).env);
  let A = o.senderFor(e),
    F = () => {
      let p = subprocessEnv();
      return Cwe({
        attached: O,
        beforeSettings: xC(),
        ownEnv: oIt(A, P6e(o)),
        childrenSee: (S) => Object.hasOwn(p, S),
      });
    },
    w = lXn({
      memory: o.servicerFor(e),
      now: Date.now,
      setTimer: sIt,
      trustAccepted: R,
      ...(_ && { isMuted: _ }),
      pin: rAe(),
      staging: D,
      run: (p, S, L) => yW(S.launchDir, () => Q7n(p, S, J7n, L)),
      evaluateCondition: (p, S) => evaluateHookIfCondition(p, S, d(), S.cwd),
      parseTarget: (p) => {
        let S = F();
        return GOe(p, {
          home: vwe(S),
          hookCwd: H,
          projectDir: e,
          defaultShell: hD(),
          shellPrefix: rIt(S),
        });
      },
      emptyTranscriptPath: () => D.placeholder("cloud-transcript.jsonl"),
      defaultTimeoutMs: cXn,
      onLine: (p, S) => k({ line: p, level: S }),
      telemetry: (p) => {
        let S = Bn(p.outcome);
        if (S === "ok") logFeatureOk("device_hooks_serve");
        else if (S === "sad") logFeatureSad("device_hooks_serve", p.outcome);
        else if (S === "bad") logFeatureBad("device_hooks_serve", p.outcome);
        logEvent("tengu_device_hook_served", {
          event: fromEnumOpt(p.event),
          kind: fromEnumOpt(p.kind),
          outcome: fromEnum(p.outcome),
          exit_class: fromEnumOpt(p.exitClass),
          duration_ms: p.durationMs,
          translated_paths: p.translatedPaths,
          replay: p.replay,
          blocked: p.blocked,
          staged: p.staged,
          repinned: p.repinned,
          waited_ms: p.waitedMs,
        });
      },
      debug: (p) => n(p),
      logError: logError,
      extraWritableRoots: () => Rht(e),
      hostEnv: F,
      childEnvironment: (p, S) => iUt(p, S, subprocessEnv()),
      placePath: Y7,
      resolveProgram: b4e,
      defaultShell: () => hD(),
    }),
    E = qn({
      servicer: w,
      staging: { dispose: () => (M(), D.dispose()) },
      respond: t,
      release: r,
      logError: (p) => {
        (logError(p), logFeatureBad("device_hooks_serve", "serve_threw"));
      },
    });
  return (
    (C = E.state),
    n("[deviceHooks] device hook session created for this attach"),
    E
  );
}
var Un = {
  stageVerifiedBytes: "always",
  repinChangedScripts: !1,
  wireLabel: "basename",
  denyUnjudgeablePaths: !1,
  runWithUntranslatedPaths: !1,
  timeoutFailsClosed: !1,
};
function ze({
  launchDir: e,
  memory: o,
  cloudSessionId: d,
  session: t,
  sendControlRequest: r,
  syncRoot: k,
  servingMuted: R,
  onLine: _,
  storageV5: C,
}) {
  let D = rAe().openNoFollow,
    M = te(e).catch(() => e),
    H = findGitRootUncached(e) ?? e,
    O = o.senderFor(e),
    A = { ...subprocessEnv() };
  lUt(o, P6e(o).env);
  let F = () => {
    let w = subprocessEnv();
    return Cwe({
      attached: A,
      beforeSettings: xC(),
      ownEnv: oIt(O, P6e(o)),
      childrenSee: (E) => Object.hasOwn(w, E),
    });
  };
  return pXn({
    memory: O,
    now: Date.now,
    setTimer: sIt,
    capture: () => tSt(nSt()),
    buildInventory: ({
      captured: w,
      instanceId: E,
      syncRoot: p,
      reachRoots: S,
      withoutTemplates: L,
    }) => {
      let W = F();
      return nIt(
        w,
        {
          instanceId: E,
          launchDir: e,
          projectDir: e,
          configHome: be(),
          ...(p !== null && { sync: { rootReal: p.real, root: p.root } }),
          ...(H !== e && { repoRoot: H }),
          extraReachRoots: S,
          allowLegacyTemplateDigests: !0,
          refusedTemplateIds: [...L],
          optInPins: O.optInPins,
        },
        {
          realpath: te,
          open: D,
          home: vwe(W),
          defaultShell: hD(),
          shellPrefix: rIt(W),
        },
      );
    },
    mintInstanceId: () => iXn(),
    displayName: qMe(),
    cloudSessionId: d,
    launchDir: e,
    launchDirReal: () => M,
    realpath: te,
    projectRoot: H,
    syncRoot: async () => {
      let w = k();
      return w === null ? null : { root: w, real: await te(w).catch(() => w) };
    },
    servingMuted: R,
    commonWriteRoots: () => Sde(e),
    scopeWriteRoots: (w, E) => vne(e, w, E),
    scopeWriteEntries: (w) => $X(w, e),
    scopeSettingsFile: (w) => getSettingsFilePathForSource(w) ?? null,
    sendRequest: async (w, { timeoutMs: E }) => {
      try {
        return await r(w, { timeoutMs: E, background: !0 });
      } catch (p) {
        let S = iD(p);
        if (S === "timeout" || S === "aborted")
          throw Error("timeout: no answer from the cloud worker in time");
        if (S === "disconnected" || S === "not_connected")
          throw Error("disconnected: the session stream is not connected");
        throw p;
      }
    },
    ensureConsent: K7n({
      deps: RY(C),
      pin: o.consentPin,
      onNotAsked: (w) => {
        (logEvent("tengu_device_hooks_consent_notice", {}),
          _({ line: Wn(w), level: "info" }));
      },
      isStoreInReach: (w) => WMe(vY(), w, te),
      onUntrustedStore: (w) => {
        let E = an(vY());
        _({
          line:
            w === "writable"
              ? `The saved answer about this machine's hooks is ignored here: this cloud session can itself write ${E}. Decide for it in /hooks.`
              : `The saved answer about this machine's hooks is ignored here: ${E} could not be located to check who can write it. Decide for this session in /hooks.`,
          level: "warning",
        });
      },
    }),
    arm: (w) => t.setState(w),
    onLine: _,
    telemetry: (w) => {
      if (w.trigger === "renewal" && w.outcome === "registered") return;
      switch (
        (logEvent("tengu_device_hooks_client_register", {
          outcome: fromEnum(w.outcome),
          trigger: fromEnum(w.trigger),
          forwarded: w.forwarded,
          templates: w.templates,
          held_after_edit: w.heldAfterEdit,
          held_other: w.heldOther,
          accepted: w.accepted,
          ignored: w.ignored,
          attempt: w.attempt,
        }),
        w.outcome)
      ) {
        case "registered":
        case "unregistered":
        case "nothing_to_offer":
        case "dormant":
        case "no_consent":
        case "muted":
          logFeatureOk("device_hooks_client_register", { forwarded: w.forwarded });
          break;
        case "not_ready":
        case "stale_epoch":
        case "superseded":
        case "failed":
        case "consent_distrusted":
          logFeatureSad("device_hooks_client_register", w.outcome);
          break;
        default:
          logFeatureBad("device_hooks_client_register", w.outcome);
      }
    },
    lapseTelemetry: (w) => logEvent("tengu_device_hooks_lapse_line", { kind: fromEnum(w) }),
    reachPinnedTelemetry: (w) =>
      logEvent("tengu_device_hooks_reach_pinned", { source: fromEnum(w) }),
    sourcePinnedTelemetry: (w) =>
      logEvent("tengu_device_hooks_source_pinned", {
        source: fromEnum(w.source),
        changed: w.changed,
        appeared: w.appeared,
        vanished: w.vanished,
      }),
    servicerDefaults: Un,
  });
}
function Bn(e) {
  switch (e) {
    case "answered":
    case "event_mismatch":
    case "condition_false":
    case "cancelled":
    case "muted":
      return "ok";
    case "not_mine":
    case "cached":
    case "withdrawn_replay":
    case "same_invocation":
      return null;
    case "unknown_id":
    case "replay_mismatch":
    case "event_name_mismatch":
    case "input_too_large":
    case "overloaded":
    case "stale":
    case "invalid_input":
    case "unsupported_kind":
    case "no_roots":
    case "untrusted":
    case "in_reach_refused":
    case "pin_refused":
    case "pin_changed":
    case "pin_unreadable":
    case "untranslated_skipped":
    case "condition_error":
    case "no_slot":
    case "too_late":
    case "run_error":
      return "sad";
    case "staging_failed":
    case "decide_error":
      return "bad";
    default:
      return e;
  }
}
import { realpath as zn } from "fs/promises";
function Ast(e) {
  let o = {
      realpath: zn,
      repoRootOf: findGitRootUncached,
      consentPath: WZ,
      configHome: be,
      ...e.deps,
    },
    { launchDir: d, memory: t } = e,
    r = null,
    k = () =>
      (r ??= (async () => {
        let R = (O) => o.realpath(O).catch(() => O),
          _ = await R(d),
          C = dedupe([d, _].map((O) => o.repoRootOf(O)).filter((O) => O !== null)),
          D = dedupe((await Promise.all(C.map(R))).concat(C)),
          [M = null] = C;
        return {
          tracker: Re({
            launchDir: d,
            projectDir: d,
            repoRoot: M,
            configHome: o.configHome(),
            syncRoot: e.syncRoot,
            memory: t,
            ...(o.tracker !== void 0 && { deps: o.tracker }),
          }),
          launchRoots: dedupe([d, _, ...D]),
          repoRoots: D,
        };
      })());
  return {
    async judge() {
      try {
        let { tracker: R, launchRoots: _, repoRoots: C } = await k(),
          D = await R.current();
        if (e.syncElsewhere !== !1) return "unknown";
        let M = [...re(D), ...C];
        if (M.some((F) => F === S4e || !F.startsWith("/"))) return "unknown";
        let H = o.consentPath();
        if (!H.startsWith("/")) return "unknown";
        let O = await WMe(H, M, o.realpath);
        if (O === !1) return "outside";
        if (O === "unresolvable") return "unknown";
        let A = [H, await o.realpath(H).catch(() => H)];
        if (Ih(A, _)) return "in_launch_dir";
        return Ih(A, [...t.syncRoots]) ? "in_sync_root" : "in_other_root";
      } catch {
        return "unknown";
      }
    },
  };
}
var Vn = new Set([
  "userSettings",
  "localSettings",
  "flagSettings",
  "projectSettings",
  "policySettings",
]);
function vst(e) {
  let o = e.createSession ?? Be,
    d = e.createSender ?? ze,
    t = e.isServingMuted ?? isRemoteToolServingMuted,
    r = t(),
    k = o({
      launchDir: e.launchDir,
      memory: e.memory,
      getTools: e.getTools,
      respond: (E, p) => e.manager()?.respondToForwardedHook(E, p) ?? !1,
      release: (E) => e.manager()?.releaseForwardedHook(E),
      onLine: e.onLine,
      ...(e.trustAccepted && { trustAccepted: e.trustAccepted }),
      isMuted: () => r,
    }),
    R = d({
      launchDir: e.launchDir,
      memory: e.memory,
      cloudSessionId: e.cloudSessionId,
      session: k,
      sendControlRequest: (E, p) => {
        let S = e.manager();
        if (S === null)
          return Promise.reject(
            Error("[RemoteSessionManager] Cannot send: not connected"),
          );
        return S.sendControlRequest(E, p);
      },
      syncRoot: e.syncRoot,
      servingMuted: r,
      onLine: e.onLine,
      storageV5: e.storageV5,
    }),
    _ = (e.onServingMuteRecheck ?? onServingMuteRecheck)(() => {
      try {
        let E = t();
        if (E === r) return;
        if (E) ((r = !0), R.servingMute(!0));
        else (R.servingMute(!1), (r = !1));
      } catch (E) {
        logError(E);
      }
    }),
    C = e.registerCleanup(() => R.unregister(zMe)),
    D = e.subscribeSettingsChanges((E) => {
      if (Vn.has(E)) R.settingsChanged();
    }),
    M = k.onStoppedWhileRunning(() =>
      R.requestRegistration("stopped_while_running"),
    ),
    O = (e.subscribeConsent ?? ((E) => V7n(e.memory.consentAnnounced, E)))(
      (E) => R.consentDecided(E),
    ),
    A = (E) => () => {
      try {
        R.requestRegistration(E);
      } catch (p) {
        logError(p);
      }
    },
    F = e.memory.noteAttached(e.launchDir),
    w = !1;
  return {
    callbacks: {
      onForwardedHookCallback: (E) => {
        k.handleForwardedHook(E);
        let p = eK(E.callbackId)?.instanceId,
          { registeredInstanceId: S, instanceId: L } = R.snapshot();
        if (p !== void 0 && (p === S || p === L)) R.activity();
      },
      onForwardedHookCancelled: (E, p) => {
        k.handleCancelled(E, p);
      },
    },
    onStreamConnected: A("connected"),
    onWorkerInit: A("init"),
    onWorkerUp: A("worker_up"),
    onTurnInFlight: () => R.turnInFlight(),
    onTurnEnded: () => R.turnEnded(),
    beforeSend: () => R.ensureRegistered(),
    snapshot: () => R.snapshot(),
    dispose: () => {
      if (w) return;
      ((w = !0), F(), _(), D(), M(), O(), C());
      let E = R.unregister(zMe);
      R.dispose();
      let p = e.registerCleanup(() => E);
      (E.then(p, p), k.dispose());
    },
  };
}
var Wz = defineDialog({
  kind: "cloud_sync_offline",
  payload: createLazyValue(() =>
    c({
      folder: s(),
      title: s(),
      body: s(),
      attempts: T().int().nonnegative(),
      lastError: s().optional(),
    }),
  ),
  result: createLazyValue(() => X(["continue", "unanswered"])),
  default: "unanswered",
  hideWhile: [],
});
function kst({ folder: e, attempts: o, lastError: d }) {
  let t = d === void 0 ? void 0 : truncateWithEllipsis(d.replace(/\s+/g, " ").trim());
  return {
    folder: e,
    title: pT["sync_offline.title"],
    body: pT["sync_offline.body"],
    attempts: o,
    ...(t !== void 0 && t !== "" && { lastError: t }),
  };
}
var Gn = 300000,
  Kn = [400, 1200],
  Jn = 5000,
  Xn =
    "Switch permission modes away and back once to keep this session's mode: it couldn't be saved on the server, so the session may fall back to default after idling.",
  Yn =
    "Switch permission modes away and back once: this session's mode couldn't be saved on the server.",
  Qn =
    "This session's permission mode couldn't be saved: the server says the session isn't active. Switch modes away and back once it is.";
function Zn(e) {
  return (
    e.outcome === "failed" &&
    (e.cause === "network" ||
      (e.cause === "http" && (e.status >= 500 || e.status === 429)))
  );
}
function xst({
  manager: e,
  mode: o,
  surface: d,
  sessionId: t,
  superseded: r,
  observedMode: k,
  seededModeReported: R,
  onRefused: _,
  onGaveUp: C,
}) {
  let D = (A) => {
      logEvent("tengu_remote_create_permission_mode_push", {
        surface: fromEnum(d),
        mode: fromEnum(o),
        kind: fromEnum(A.kind),
        posted_mode: fromEnum(A.postedMode),
        outcome: fromEnum(A.outcome),
        ...("cause" in A && { cause: fromEnum(A.cause) }),
        ...("status" in A && { status: A.status }),
        ...(A.attempt !== void 0 && { attempt: A.attempt }),
        session_id: Ee(t),
      });
    },
    M = () => {
      let A = k?.();
      return (
        r() || (A !== void 0 && A !== o && (A !== "default" || (R?.() ?? !1)))
      );
    },
    H = async (A, F, w = Date.now(), E = 1) => {
      let p = new AbortController(),
        S = e.postControlRequest(
          { subtype: "set_permission_mode", mode: A },
          {
            answerExpected: !1,
            background: !0,
            timeoutMs: Gn,
            signal: p.signal,
          },
        );
      S.response.catch(() => {});
      let L = await S.posted;
      if (
        (D({ ...L, kind: F, postedMode: A, attempt: E }),
        L.outcome === "accepted")
      )
        return { result: L, response: S.response };
      if ((p.abort(), M()))
        return (
          D({ kind: F, postedMode: A, outcome: "superseded" }),
          { result: L, response: null }
        );
      let W = Kn[E - 1];
      if (W !== void 0 && Zn(L) && Date.now() - w < Jn) {
        if ((await sleep(W), !M())) return H(A, F, w, E + 1);
        return (
          D({ kind: F, postedMode: A, outcome: "superseded" }),
          { result: L, response: null }
        );
      }
      if (
        (D({ kind: F, postedMode: A, outcome: "gave_up" }),
        logFeatureBad("remote_create_mode_push", `${F}_gave_up`),
        !(L.outcome === "failed" && L.cause === "closed"))
      )
        C?.(L.outcome === "session_inactive" ? Qn : F === "push" ? Xn : Yn);
      return { result: L, response: null };
    },
    O = (A) => {
      A.then(
        () => {
          (D({ kind: "push", postedMode: o, outcome: "taken" }),
            logFeatureOk("remote_create_mode_push"),
            n(
              `[remote] The session took its create's ${o} permission mode as a live request`,
            ));
        },
        (F) => {
          let w = iD(F);
          if (
            (n(
              `[remote] The create's ${o} permission mode push was not taken (${w}): ${io(l(F), { maxCodeUnits: 200 })}`,
            ),
            w !== "server_error")
          ) {
            (D({ kind: "push", postedMode: o, outcome: "unanswered" }),
              logFeatureSad("remote_create_mode_push", "unanswered"));
            return;
          }
          if (
            (D({ kind: "push", postedMode: o, outcome: "refused" }),
            logFeatureSad("remote_create_mode_push", "refused"),
            M() || (o !== "auto" && o !== "acceptEdits"))
          )
            return;
          let E = H("default", "converge");
          (E.then(({ response: p }) =>
            p?.catch((S) => {
              n(
                `[remote] The default mode sent after that refusal was not taken either: ${io(l(S), { maxCodeUnits: 200 })}`,
              );
            }),
          ),
            _?.(E.then(({ result: p }) => p)));
        },
      );
    };
  return H(o, "push").then(({ result: A, response: F }) => {
    if (F !== null) O(F);
    return A;
  });
}
var Hst = "Cloud session may be unresponsive. Attempting to reconnect\u2026";
function Ist(e) {
  return e ? 180000 : 60000;
}
export {
  z_e,
  nIt,
  rIt,
  P6e,
  oIt,
  sIt,
  Est,
  Ast,
  Cst,
  vst,
  Gae,
  Rst,
  Wz,
  kst,
  xst,
  Hst,
  Ist,
};
