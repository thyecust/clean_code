// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  j,
  B,
  sc,
  _Dn,
  yDn,
  QXt,
  _rt,
  ke,
  eLn,
  ns,
  g_e,
} from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../共享小工具-未细化/chunk-h62vxw7j.js";
import { ud, YR, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { w_e } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import { pur, env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { getOauthConfig as Vt } from "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { logError as h } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { Br } from "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import {
  Or,
  populateOAuthAccountInfoIfNeeded as pRn,
  Nse,
  restoreGatewayAuth as gZe,
  primeStoredLogin as lvt,
  startupReadsStoredLogin as dvt,
  primeStoredLoginCopy as vRn,
  getForcedLoginMethod as R5,
  adminPolicyUnreadable as RZe,
  LRn,
  MRn,
  H,
  Bo,
  NR,
  ee,
  ARe,
  dx,
  CRe,
  QRn,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { da, primeRemoteManagedSettingsCache as Stt } from "../设置-配置/设置-配置.aqbb35ee.js";
import { SRt } from "../核心工具-路径与平台/chunk-fx8qr1md.js";
import { q } from "../共享小工具-未细化/chunk-7beprh8k.js";
import { getSettingsForSource as ye } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { loadExtraCACerts as Pie, loadMTLSClientMaterial as qq, configureGlobalMTLS as x0n, getProxyUrlWithSource as Oie, parseProxyUrl as Lie, describeInvalidProxyUrl as W8t, configureGlobalAgents as vb, clearProxyCache as Vq } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { Jir, getAPIProvider as Pe } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { hir } from "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
import { She, fnt } from "../../02-功能模块/Git-Worktree/chunk-bk9696gx.js";
import { primeWindowsCredManBackendEnabled as Jxn } from "../../02-功能模块/认证-OAuth登录/chunk-y7b7kf5n.js";
import { assertScrubSandboxAvailable as oAn } from "../核心工具-进程与信号/chunk-ckrdhhqd.js";
import {
  rw,
  Uv,
  jGn,
  Jun,
  Pr,
  uqn,
  Dqn,
  R4n,
  lVn,
  NXn,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isScratchpadEnabled as eA, ensureScratchpadDir as KFe } from "../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { MAe } from "./chunk-5qbcynds.js";
import { isPolicyLimitsEligible as lA } from "../../02-功能模块/策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { Bk, Ys } from "../提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { seedUserSettings as $An, primeSettings as UAn } from "../设置-配置/chunk-b536v45y.js";
import { primePlanSlugCollisions as lh } from "../../02-功能模块/计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import { goe, dR } from "./chunk-x7kby92q.js";
import { K0n } from "../共享小工具-未细化/chunk-5ss8pwgq.js";
import { Iv } from "../共享小工具-未细化/chunk-bfth4n1b.js";
import { primeWorkspaceRoots as h4t } from "../共享小工具-未细化/chunk-bgf8jybv.js";
import { WAn, qAn, zAn } from "../../02-功能模块/策略限制(PolicyLimits)/chunk-hpw6352m.js";
import { vnn, Rnn, c3e } from "../设置-配置/chunk-1pbaa558.js";
import { primeFileDescriptorCredentials as T$e } from "../共享小工具-未细化/chunk-fpak7ean.js";
import { Tw } from "../../02-功能模块/认证-OAuth登录/chunk-s51acx6w.js";
import { wot } from "../共享小工具-未细化/chunk-w7rbejjf.js";
import { I$ } from "../共享小工具-未细化/chunk-6eskfcpn.js";
import { fur, P } from "../核心工具-路径与平台/chunk-13kdp2ag.js";
function w() {
  let t = Or().providerCache;
  if (t.preconnectFired) return;
  if (
    ((t.preconnectFired = !0),
    Pe() !== "firstParty" || R5() === "gateway" || RZe())
  )
    return;
  if (
    a.HTTPS_PROXY ||
    a.https_proxy ||
    a.HTTP_PROXY ||
    a.http_proxy ||
    a.ANTHROPIC_UNIX_SOCKET ||
    a.CLAUDE_CODE_CLIENT_CERT ||
    a.CLAUDE_CODE_CLIENT_KEY
  )
    return;
  let r = a.ANTHROPIC_BASE_URL || Vt().BASE_API_URL;
  fetch(`${r.replace(/\/+$/, "")}/api/hello`, {
    method: "HEAD",
    signal: AbortSignal.timeout(1e4),
  }).catch(() => {});
}
class C {
  promise = void 0;
  telemetryInitialized = !1;
}
var A = new j(() => new C());
function y() {
  return A.of(B().host);
}
async function T(t = {}) {
  let r = Date.now();
  (q("info", "init_started"), Br("init_function_start"));
  let e = t.storageV5EnvPin;
  if (e?.backend !== void 0 && !w_e(e.configHome))
    (n(
      `CLAUDE_CONFIG_DIR no longer names ${e.configHome}, where the v5 storage backend was built at start-up; init() loads its config without it`,
      { level: "warn" },
    ),
      (e = { ...e, backend: void 0 }));
  e ??= K0n();
  try {
    let s = Date.now();
    if (M() && e?.backend !== void 0)
      (await h4t(e.backend),
        await Promise.all([ARe(e.backend), $An(e.backend, da())]));
    else await ARe();
    if (
      (q("info", "init_configs_enabled", { duration_ms: Date.now() - s }),
      Br("init_configs_enabled"),
      M() && e?.backend !== void 0)
    )
      Jxn(ee().cachedGrowthBookFeatures?.tengu_windows_credman === !0);
    if (M() && e?.backend !== void 0)
      (await Stt(e.backend), Br("init_remote_settings_primed"));
    let c = Tw(e?.backend);
    if (M() && c !== void 0)
      (await T$e(c),
        Br("init_fd_credentials_primed"),
        await vRn(c),
        Br("init_stored_login_primed"));
    g_e(Nse);
    let p = Date.now();
    if (
      (goe(),
      await oAn(),
      wot(),
      await Promise.all([Pie(), qq(), fur(), pur()]),
      await lVn(),
      await gZe(e?.backend !== void 0 && w_e(e.configHome) ? c : void 0),
      ns())
    )
      I$();
    (q("info", "init_safe_env_vars_applied", { duration_ms: Date.now() - p }),
      Br("init_safe_env_vars_applied"));
    let o = Iv(e),
      m = Tw(o);
    if (M() && o !== void 0) await h4t(o);
    if ((await UAn(o, da()), M() && o !== void 0)) await hir(o);
    if (
      (qAn({ storageV5: o, credentials: m }),
      LRn(m),
      MRn(o),
      M() && m !== void 0)
    ) {
      if ((await T$e(m), dvt())) await lvt(m);
    }
    if (
      (await WAn(o),
      NR(o),
      Dqn(o),
      Jun({ storageV5: o, credentials: m }),
      Br("init_after_graceful_shutdown"),
      Promise.all([import("../共享小工具-未细化/ATIS_REQUEST_HEADER.9bwp2jqb.js")]).then(([d]) => {
        d.onGrowthBookRefresh(() => {});
      }),
      Br("init_after_1p_event_logging"),
      Jir((i) => H(i, !1)),
      pRn(m, o).catch(h),
      Br("init_after_oauth_populate"),
      lh(o),
      import("../../02-功能模块/AutoMode-自动模式/chunk-15n5gf3t.js")
        .then((i) => i.primeUnattendedServingConsent())
        .catch(() => {}),
      fnt({ trustProbe: Bo }),
      She(),
      Rnn())
    )
      vnn();
    if (lA()) zAn();
    if (
      (Br("init_after_remote_settings_check"),
      QRn(o),
      CRe(o),
      M() && o !== void 0)
    )
      dx(o);
    let g = Date.now();
    (n("[init] configureGlobalMTLS starting"),
      x0n(),
      q("info", "init_mtls_configured", { duration_ms: Date.now() - g }),
      n("[init] configureGlobalMTLS complete"));
    let f = Oie();
    if (f && !Lie(f.value)) throw new ud(W8t(f.source, f.value));
    let S = Date.now();
    if (
      (n("[init] configureGlobalAgents starting"),
      vb(),
      q("info", "init_proxy_configured", { duration_ms: Date.now() - S }),
      n("[init] configureGlobalAgents complete"),
      Br("init_network_configured"),
      w(),
      Ie(process.env.CLAUDE_CODE_REMOTE))
    )
      try {
        // 原来指向 ./getAgentProxyEnv.25qhmvb6.js —— 那是个纯转出桶（无自身实现），已删除。
        // 该桶只是把 pfw3b51q 的 _gr / ygr / qit 转出为 initAgentProxy / getAgentProxyEnv /
        // PLACEHOLDER_CREDENTIAL_KEYS，这里直接用实现模块的原始名。
        let { _gr: i, ygr: d } =
            await import("../HTTP-网络层/HTTP-网络层.pfw3b51q.js"),
          { registerAgentProxyEnvFn: b } = await import("../核心工具-进程与信号/chunk-ckrdhhqd.js");
        (b(d), await i());
      } catch (i) {
        n(
          `[init] agent proxy init failed: ${i instanceof Error ? i.message : String(i)}; continuing without proxy`,
          { level: "warn" },
        );
      }
    if ((SRt(), P() === "windows" && !Ys())) {
      if (!Bk())
        (console.error(`Claude Code on Windows requires a shell tool. Git Bash was not found and the PowerShell tool is disabled (CLAUDE_CODE_USE_POWERSHELL_TOOL=0).
  - Install Git for Windows: https://git-scm.com/downloads/win, or
  - Remove CLAUDE_CODE_USE_POWERSHELL_TOOL from your environment or settings.`),
          process.exit(1));
      if ((await Uv()) === null)
        (console.error(`Claude Code on Windows requires either Git for Windows (for bash) or PowerShell. Install one of:
  - Git for Windows: https://git-scm.com/downloads/win
  - PowerShell 7: https://aka.ms/powershell
Or set CLAUDE_CODE_GIT_BASH_PATH to your bash.exe location.`),
          process.exit(1));
    }
    if (
      (Et(R4n),
      Et(async () => {
        let { cleanupSessionTeams: i } = await import("../../02-功能模块/Teammates团队/chunk-6b13bhw1.js");
        await i(o);
      }),
      eA())
    ) {
      let i = Date.now();
      try {
        let d = await KFe();
        q(
          "info",
          d === null
            ? "init_scratchpad_unavailable"
            : "init_scratchpad_created",
          { duration_ms: Date.now() - i },
        );
      } catch (d) {
        n(`init: ensureScratchpadDir failed: ${d}`, { level: "error" });
      }
    }
    return (
      sc(() => {
        if (eA())
          KFe().catch((i) =>
            n(`onSessionSwitch: ensureScratchpadDir failed: ${i}`, {
              level: "error",
            }),
          );
      }),
      jGn(),
      uqn(),
      NXn(),
      q("info", "init_completed", { duration_ms: Date.now() - r }),
      Br("init_function_end"),
      o
    );
  } catch (s) {
    if (s instanceof ud) {
      (process.stderr.write(`${s.message}
`),
        Pr(1));
      return;
    }
    if (s instanceof YR) {
      if (!ke() && t.showInvalidConfigDialog) {
        await t.showInvalidConfigDialog({ error: s });
        return;
      }
      (process.stderr.write(`Configuration error in ${s.filePath}: ${s.message}
`),
        Pr(1));
      return;
    } else throw s;
  }
}
function nJt(t) {
  return (y().promise ??= T(t));
}
function Qxe(t) {
  let r = y();
  if (Rnn()) {
    if (ke() && rw())
      _(r, t).catch((e) => {
        try {
          n(
            `[3P telemetry] Eager telemetry init failed (beta tracing): ${l(e)}`,
            { level: "error" },
          );
        } catch {}
      });
    (n(
      "[3P telemetry] Waiting for remote managed settings fetch before telemetry init",
    ),
      c3e()
        .then(async () => {
          (n(
            "[3P telemetry] Remote managed settings fetch settled, initializing telemetry",
          ),
            dR());
          let { captureAdmin3PSteeringSnapshot: e } =
            await import("../../02-功能模块/Bedrock-Vertex/chunk-bnft4099.js");
          e();
          let [s, c] = await Promise.all([Pie(), qq()]);
          if (s || c.changed) (Vq(), vb());
          await _(r, t);
        })
        .catch((e) => {
          if (_rt() && !r.telemetryInitialized)
            QXt(v() || O() ? "init_failed" : "not_configured");
          try {
            n(
              `[3P telemetry] Telemetry init failed (remote settings path): ${l(e)}`,
              { level: "error" },
            );
          } catch {}
        }));
  } else
    _(r, t).catch((e) => {
      try {
        n(`[3P telemetry] Telemetry init failed: ${l(e)}`, { level: "error" });
      } catch {}
    });
}
async function _(t, r) {
  if (t.telemetryInitialized) return;
  t.telemetryInitialized = !0;
  let e = "not_configured";
  try {
    await L(r);
  } catch (s) {
    if (((t.telemetryInitialized = !1), v())) e = "init_failed";
    throw s;
  } finally {
    QXt(e);
  }
}
function D(t) {
  return t.length > 0 && t.every((r) => r === "prometheus");
}
async function L(t) {
  let { initializeTelemetry: r } = await import("./flushTelemetry.jwarnhac.js"),
    { meter: e, metricsExporterKinds: s } = await r(t);
  if (e)
    (_Dn(
      e,
      (p, o) => {
        let m = e?.createCounter(p, o);
        return {
          add(g, f = {}) {
            let i = { ...MAe(), ...f };
            m?.add(g, i);
          },
        };
      },
      { omitUnits: D(s) },
    ),
      yDn()?.add(1, { start_type: eLn() }));
}
function E(t) {
  return (t || "")
    .trim()
    .split(",")
    .filter(Boolean)
    .map((r) => r.trim())
    .some((r) => r !== "none");
}
function v() {
  return (
    Ie(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) && E(a.OTEL_LOGS_EXPORTER)
  );
}
function O() {
  try {
    let t = ye("policySettings")?.env;
    if (!t) return !1;
    return (
      (Ie(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) ||
        Ie(t.CLAUDE_CODE_ENABLE_TELEMETRY)) &&
      (E(a.OTEL_LOGS_EXPORTER) || E(t.OTEL_LOGS_EXPORTER))
    );
  } catch {
    return !1;
  }
}
export { nJt, Qxe };
