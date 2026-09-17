// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { M } from "./01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { lit as S } from "./01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { kHt, Wxe, Gxe, sdr, xHt } from "./01-核心基础设施/共享小工具-未细化/chunk-0cy1k3q5.js";
import { getBuildRefName } from "./01-核心基础设施/共享小工具-未细化/build-ref-name.js";
import { HHt } from "./01-核心基础设施/共享小工具-未细化/chunk-qdhvxsk2.js";
function et() {
  try {
    process.cwd();
    return;
  } catch (a) {
    let t =
      a instanceof Error && "code" in a && typeof a.code === "string"
        ? a.code
        : void 0;
    if (t === "ENOENT")
      return "The current directory no longer exists (it was deleted or moved). Start Claude Code from an existing directory.";
    return `Can't read the current directory${t ? ` (${t})` : ""}. Start Claude Code from a different directory.`;
  }
}
process.env.NoDefaultCurrentDirectoryInExePath = "1";
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
HHt();
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  let a = process.env.NODE_OPTIONS || "";
  process.env.NODE_OPTIONS = a
    ? `${a} --max-old-space-size=8192`
    : "--max-old-space-size=8192";
}
function it(a) {
  for (let t = 0; t < a.length; t++) {
    let w = a[t];
    if (
      w === "--debug" ||
      w === "-d" ||
      w === "--debug-to-stderr" ||
      w === "-d2e" ||
      w.startsWith("--debug=") ||
      w.startsWith("--debug-file=")
    )
      continue;
    if (w === "--debug-file" && t + 1 < a.length) {
      t++;
      continue;
    }
    return !1;
  }
  return !0;
}
function Dt(a) {
  let t,
    w,
    m,
    x,
    n,
    l,
    D = [];
  for (let h = 0; h < a.length; h++) {
    let B = a[h],
      G = B.indexOf("="),
      [L, I] = G > 0 ? [B.slice(0, G), B.slice(G + 1)] : [B, void 0],
      F = I !== void 0 || h + 1 < a.length;
    if (L === "--dangerously-skip-permissions") t = "bypassPermissions";
    else if (L === "--allow-dangerously-skip-permissions") l = !0;
    else if (L === "--permission-mode" && F) t = I ?? a[++h];
    else if (L === "--inherit-permission-mode" && F) w = I ?? a[++h];
    else if (L === "--model" && F) m = I ?? a[++h];
    else if (L === "--effort" && F) x = I ?? a[++h];
    else if (L === "--agent" && F) n = I ?? a[++h];
    else D.push(B);
  }
  let U = t ?? w;
  return {
    dispatchDefaults:
      U || m || x || n || l
        ? {
            permissionMode: U,
            ...(!t && w && { permissionModeInherited: !0 }),
            model: m,
            effort: x,
            agent: n,
            allowBypass: l,
          }
        : void 0,
    rest: D,
  };
}
async function Lt() {
  let a = xHt(process.argv);
  if (a) (console.error(a), process.exit(1));
  let t = process.argv.slice(2);
  if (
    (t.length === 1 || (t.length === 2 && t[1] === "--verbose")) &&
    (t[0] === "--version" || t[0] === "-v" || t[0] === "-V")
  ) {
    if (
      (console.log(
        `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION} (Claude Code)${getBuildRefName()}`,
      ),
      t.length === 2 &&
        {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.GIT_SHA)
    )
      console.log(
        `Commit: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.GIT_SHA}`,
      );
    return;
  }
  let w = et();
  if (w) (console.error(w), process.exit(1));
  let { profileCheckpoint: m } = await import("./01-核心基础设施/共享小工具-未细化/getBootstrapEntry.4n2kvc7t.js");
  m("cli_entry");
  let n =
    !(t[0] === "--preload" || t[0] === "--bg-spare") &&
    process.env.CLAUDE_CODE_HOVER_REST
      ? (await import("./01-核心基础设施/共享小工具-未细化/adoptStorageV5EnvPin.xsnaqgwj.js")).pinStorageV5FromEnv()
      : void 0;
  if (process.argv[2] === "--claude-in-chrome-mcp") {
    m("cli_claude_in_chrome_mcp_path");
    let { runClaudeInChromeMcpServer: e } = await import("./02-功能模块/ClaudeinChrome/createChromeContext.ny2380rf.js");
    await e(n);
    return;
  } else if (process.argv[2] === "--chrome-native-host") {
    m("cli_chrome_native_host_path");
    let { runChromeNativeHost: e } = await import("./02-功能模块/ClaudeinChrome/runChromeNativeHost.fbbevkgf.js");
    await e();
    return;
  } else if (process.argv[2] === "--computer-use-mcp") {
    m("cli_computer_use_mcp_path");
    let { runComputerUseMcpServer: e } = await import("./02-功能模块/图片-截图-ComputerUse/runComputerUseMcpServer.cvpyez80.js");
    await e(n);
    return;
  }
  if (t[0] === "--daemon-worker") {
    let { loadFastPathPolicy: e } = await import("./01-核心基础设施/共享小工具-未细化/runFastPathPolicyHelper.vgxesh6m.js"),
      r = await e(n);
    if (r)
      process.stderr.write(`${r}
`);
    let { runDaemonWorker: o } = await import("./01-核心基础设施/共享小工具-未细化/WORKER_KINDS.hp7zdndz.js");
    await o(t[1], n);
    return;
  }
  if (t[0] === "--bg-pty-host") {
    let { ensureFastPathSettingsLoaded: e } =
      await import("./01-核心基础设施/共享小工具-未细化/runFastPathPolicyHelper.vgxesh6m.js");
    try {
      await e(n);
    } catch (o) {
      process.stderr
        .write(`ptyHost: settings bootstrap threw (continuing; supervisor already gated): ${o?.stack ?? String(o)}
`);
    }
    let { runPtyHost: r } = await import("./02-功能模块/语音-音频/runPtyHost.rdr8zhtx.js");
    await r(t.slice(1));
    return;
  }
  if (t[0] === "--bg-spare") {
    let { ensureFastPathSettingsLoaded: e } =
      await import("./01-核心基础设施/共享小工具-未细化/runFastPathPolicyHelper.vgxesh6m.js");
    await e(void 0);
    let { runBgSpare: r } = await import("./01-核心基础设施/共享小工具-未细化/runBgSpare.jwa5ndmd.js");
    await r(t.slice(1));
    return;
  }
  if (t[0] === "--preload") {
    let { ensureFastPathSettingsLoaded: e } =
      await import("./01-核心基础设施/共享小工具-未细化/runFastPathPolicyHelper.vgxesh6m.js");
    await e(void 0);
    let { runPreload: r } = await import("./03-入口与运行时/CLI入口-Commander/runPreload.b1nzv31f.js");
    await r(t.slice(1));
    return;
  }
  {
    let e = sdr(t);
    if (e !== null) {
      m("cli_daemon_path");
      let { ensureFastPathSettingsLoaded: r } =
        await import("./01-核心基础设施/共享小工具-未细化/runFastPathPolicyHelper.vgxesh6m.js");
      await r(n);
      let { initSinks: o } = await import("./02-功能模块/Bridge-RemoteControl/initSinks.6cfazjmq.js");
      o();
      let { daemonMain: v } = await import("./02-功能模块/后台任务-Shell管理/daemonMain.sesbvnxj.js");
      await v(e, n);
      return;
    }
  }
  if (
    t[0] === "logs" ||
    t[0] === "attach" ||
    t[0] === "stop" ||
    t[0] === "kill" ||
    t[0] === "respawn" ||
    t[0] === "rm" ||
    t.includes("--bg") ||
    t.includes("--background")
  ) {
    m("cli_bg_path");
    let { loadFastPathPolicy: e } = await import("./01-核心基础设施/共享小工具-未细化/runFastPathPolicyHelper.vgxesh6m.js");
    {
      let i = await e(n),
        u = ["logs", "stop", "kill", "rm"].includes(t[0] ?? "");
      if (i)
        if (u)
          process.stderr.write(`${i}
`);
        else {
          let { exitWithError: c } = await import("./01-核心基础设施/共享小工具-未细化/getStdoutDrainBudgetMs.41d1vrrp.js");
          c(i);
        }
    }
    let r = await import("./01-核心基础设施/共享小工具-未细化/AGENT_VIEW_RELAUNCH_ENV_KEY.2qggy62y.js");
    if ((await r.ensureFleetGateHydrated(), !r.isAgentsFleetEnabled())) {
      let i = t[0],
        u =
          i !== void 0 &&
          ["logs", "attach", "stop", "kill", "respawn", "rm"].includes(i)
            ? i
            : (t.find(
                (c) =>
                  c === "--bg" ||
                  c === "--background" ||
                  c === "--routine" ||
                  c.startsWith("--routine="),
              ) ?? "--bg");
      return r.fleetGateRejected(u);
    }
    let [
        o,
        { pinStorageV5: v },
        { initDefaultDebugLog: R },
        { seedInstallIDs: k, watchGlobalConfigThroughStorage: E },
      ] = await Promise.all([
        import("./02-功能模块/后台任务-Shell管理/spawnBgSession.z23xfr2c.js"),
        import("./01-核心基础设施/共享小工具-未细化/pinStorageV5.xt5bqpq9.js"),
        import("./02-功能模块/云会话-Teleport/logForDebugging.yzt1kswr.js"),
        import("./01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js"),
      ]),
      s = v(n);
    if (M() && s !== void 0) {
      (R({ storageV5: s }), E(s));
      let [
          { credentialsStoreFor: i },
          { setGrowthBookCredentials: u, setGrowthBookStorageBackend: c },
          { composePolicyLimitsClient: C, primePolicyLimitsCache: _ },
          { primeFastPathCredentials: A },
        ] = await Promise.all([
          import("./01-核心基础设施/共享小工具-未细化/credentialsStoreFor.r7prg4pg.js"),
          import("./01-核心基础设施/共享小工具-未细化/ATIS_REQUEST_HEADER.9bwp2jqb.js"),
          import("./01-核心基础设施/共享小工具-未细化/POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS.hw6w9yxm.js"),
          import("./01-核心基础设施/共享小工具-未细化/primeFastPathCredentials.eb5w3wem.js"),
        ]),
        O = i(s);
      (u(O),
        c(s),
        C({ storageV5: s, credentials: O }),
        await A(O),
        await _(s),
        await k(s));
    }
    switch (t[0]) {
      case "logs":
      case "attach":
      case "stop":
      case "kill":
      case "respawn":
      case "rm": {
        let [
          { initializeAnalyticsSink: i },
          { shutdownDatadog: C },
          { sleep: _ },
        ] = await Promise.all([
          import("./01-核心基础设施/共享小工具-未细化/initializeAnalyticsSink.3hb68836.js"),
          import("./01-核心基础设施/共享小工具-未细化/DATADOG_CLIENT_TOKEN.kkspbfqc.js"),
          import("./01-核心基础设施/共享小工具-未细化/withTimeout.0mr4qg1r.js"),
        ]);
        if ((i(), t[0] === "logs")) await o.logsHandler(t[1], s);
        else if (t[0] === "attach") await o.attachHandler(t[1], s);
        else if (t[0] === "respawn") await o.respawnHandler(t[1], s);
        else if (t[0] === "rm") await o.rmHandler(t[1], s);
        else await o.stopHandler(t[1], s);
        return (
          await Promise.race([
            Promise.all([C()]),
            _(500, void 0, { unref: !0 }),
          ]).catch(() => {}),
          process.exit(process.exitCode ?? 0)
        );
      }
      default: {
        let [
          { initializeAnalyticsSink: i },
          { shutdownDatadog: C },
          { logEvent: _ },
          { sleep: A },
        ] = await Promise.all([
          import("./01-核心基础设施/共享小工具-未细化/initializeAnalyticsSink.3hb68836.js"),
          import("./01-核心基础设施/共享小工具-未细化/DATADOG_CLIENT_TOKEN.kkspbfqc.js"),
          import("./01-核心基础设施/共享小工具-未细化/logEvent.q8d8f1jd.js"),
          import("./01-核心基础设施/共享小工具-未细化/withTimeout.0mr4qg1r.js"),
        ]);
        (i(),
          _("tengu_background", { via_flag: !0, via: S("flag") }),
          await o.handleBgFlag(t, s),
          await Promise.race([
            Promise.all([C()]),
            A(500, void 0, { unref: !0 }),
          ]).catch(() => {}),
          process.exit(process.exitCode ?? 0));
      }
    }
    return;
  }
  let l = kHt(t);
  l.config.restricted ||= ["1", "true", "yes", "on"].includes(
    (process.env.CLAUDE_CODE_RESTRICTED ?? "").toLowerCase().trim(),
  );
  let { dispatchDefaults: D, rest: U } = Dt(l.rest),
    h = l.hasAgentsPositional && it(U);
  if ((h || (it(t) && process.stdin.isTTY)) && process.stdout.isTTY) {
    let { startCapturingEarlyInput: e, consumeEarlyInput: r } =
      await import("./01-核心基础设施/共享小工具-未细化/startCapturingEarlyInput.cq2gda4e.js");
    e();
    let [{ startMdmRawRead: o }, { startKeychainPrefetch: v }] =
      await Promise.all([
        import("./01-核心基础设施/共享小工具-未细化/getMdmRawReadPromise.c91w9436.js"),
        import("./01-核心基础设施/共享小工具-未细化/KEYCHAIN_PREFETCH_FASTPATH_BUDGET_MS.1fb6y1wa.js"),
      ]);
    (o(), v());
    let {
        enableConfigs: R,
        getGlobalConfig: k,
        seedInstallIDs: E,
      } = await import("./01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js"),
      s = !1,
      i = !1;
    try {
      (await R(M() ? n?.backend : void 0),
        (i = k().defaultToAgentsView === !0),
        (s = h || i));
    } catch {}
    if (s) {
      if (l.config.settings) {
        let { loadSettingsFromFlag: y } = await import("./01-核心基础设施/共享小工具-未细化/loadSettingsFromFlag.tbz185gf.js");
        y(l.config.settings);
      }
      if (l.config.pluginDir.length > 0 || l.config.pluginDirNoMcp.length > 0) {
        let [
          { setInlinePlugins: y, setInlinePluginsNoMcp: P },
          { clearPluginCache: g },
        ] = await Promise.all([
          import("./02-功能模块/AppState-状态管理/getOriginalCwd.mg2gq0d6.js"),
          import("./02-功能模块/插件系统/clearPluginCache.zqb4jr60.js"),
        ]);
        (y(l.config.pluginDir),
          P(l.config.pluginDirNoMcp),
          g("claude agents --plugin-dir"));
      }
      let { loadFastPathPolicy: u } = await import("./01-核心基础设施/共享小工具-未细化/runFastPathPolicyHelper.vgxesh6m.js"),
        c = await u(n);
      if (c) {
        let { exitWithError: y } = await import("./01-核心基础设施/共享小工具-未细化/getStdoutDrainBudgetMs.41d1vrrp.js");
        y(c);
      }
      {
        let {
          areSideloadFlagsDisabledByPolicy: y,
          sideloadFlagsBlockedMessage: P,
        } = await import("./02-功能模块/插件系统/COMMAND_PLUGIN_SOURCES_DISABLED_MESSAGE.63vb87ah.js");
        if (y()) {
          let g = [];
          if (l.config.pluginDir.length > 0) g.push("--plugin-dir");
          if (l.config.pluginDirNoMcp.length > 0) g.push("--plugin-dir-no-mcp");
          if (g.length > 0) {
            let { exitWithError: b } = await import("./01-核心基础设施/共享小工具-未细化/getStdoutDrainBudgetMs.41d1vrrp.js");
            b(P(g));
          }
        }
      }
      let {
        isAgentsFleetEnabled: C,
        ensureFleetGateHydrated: _,
        fleetGateRejected: A,
        consumeAgentViewRelaunchMarker: O,
      } = await import("./01-核心基础设施/共享小工具-未细化/AGENT_VIEW_RELAUNCH_ENV_KEY.2qggy62y.js");
      if ((await _({ kickGrowthBook: !1 }), C())) {
        let [
            { applyFleetViewHostWindowsEnv: y },
            { createRoot: P },
            { getBaseRenderOptions: g },
            { resolve: b },
            {
              getRootSession: j,
              setCliSessionConfigCarried: Y,
              setIsInteractive: z,
              setRestrictedSession: V,
              setSessionStartType: ct,
            },
            { cliCarriesSessionConfig: lt },
            { pinStorageV5: pt },
          ] = await Promise.all([
            import("./01-核心基础设施/共享小工具-未细化/FleetViewScreen.w73yzmz1.js"),
            import("./02-功能模块/Daemon-守护服务/createRoot.pw1402cq.js"),
            import("./02-功能模块/Daemon-守护服务/getBaseRenderOptions.caxv2veh.js"),
            import("path"),
            import("./02-功能模块/AppState-状态管理/getOriginalCwd.mg2gq0d6.js"),
            import("./01-核心基础设施/共享小工具-未细化/FORK_RESTRICTED_LAUNCH_FLAGS_DESCRIPTION.etv8bjdx.js"),
            import("./01-核心基础设施/共享小工具-未细化/pinStorageV5.xt5bqpq9.js"),
          ]),
          p = pt(n),
          H;
        if (M() && p !== void 0) {
          let [
            { credentialsStoreFor: d },
            { setGrowthBookCredentials: T, setGrowthBookStorageBackend: N },
            { primeFastPathCredentials: q },
          ] = await Promise.all([
            import("./01-核心基础设施/共享小工具-未细化/credentialsStoreFor.r7prg4pg.js"),
            import("./01-核心基础设施/共享小工具-未细化/ATIS_REQUEST_HEADER.9bwp2jqb.js"),
            import("./01-核心基础设施/共享小工具-未细化/primeFastPathCredentials.eb5w3wem.js"),
          ]);
          ((H = d(p)), T(H), N(p), await q(H), await E(p));
        }
        import("./01-核心基础设施/共享小工具-未细化/USER_INTENT_SETTING_KEYS.n7htbc2y.js").then(({ resolveSetting: d }) => {
          let { value: T } = d("theme", "dark");
          if (T.startsWith("custom:"))
            import("./01-核心基础设施/共享小工具-未细化/readThemesFromPathAsync.8qkrh8yt.js").then((N) => N.loadCustomThemes(p));
        });
        let dt = O();
        (z(!0),
          Y(lt({ ...l.config, ...D })),
          V(l.config.restricted),
          ct("agents_view"));
        let J = () => {};
        process.on("unhandledRejection", J);
        let Q = Promise.resolve(),
          X = () => {},
          mt = new Promise((d) => {
            X = d;
          });
        (setImmediate(async () => {
          if (M() && p !== void 0)
            try {
              let [
                { credentialsStoreFor: d },
                { composePolicyLimitsClient: T, primePolicyLimitsCache: N },
              ] = await Promise.all([
                import("./01-核心基础设施/共享小工具-未细化/credentialsStoreFor.r7prg4pg.js"),
                import("./01-核心基础设施/共享小工具-未细化/POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS.hw6w9yxm.js"),
              ]);
              (T({ storageV5: p, credentials: d(p) }), await N(p));
            } catch (d) {
              import("./02-功能模块/云会话-Teleport/logForDebugging.yzt1kswr.js").then(({ logForDebugging: T }) =>
                T(
                  `Policy limits: start-up composition on the agents path failed: ${d instanceof Error ? d.message : String(d)}`,
                  { level: "warn" },
                ),
              );
            }
          ((Q = Promise.all([
            import("./01-核心基础设施/核心工具-进程与信号/flushAnalyticsSinks.tbwzvw9n.js"),
            import("./01-核心基础设施/共享小工具-未细化/initializeErrorLogSink.64dfk6kr.js"),
            import("./01-核心基础设施/共享小工具-未细化/initializeAnalyticsSink.3hb68836.js"),
            import("./01-核心基础设施/共享小工具-未细化/logEvent.q8d8f1jd.js"),
            import("./02-功能模块/Teammates团队/isAgentSwarmsEnabled.1azwg587.js"),
            import("./01-核心基础设施/共享小工具-未细化/ATIS_REQUEST_HEADER.9bwp2jqb.js"),
            import("./01-核心基础设施/遥测-OpenTelemetry/init.22tn6x0a.js"),
            import("./01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js"),
            import("./01-核心基础设施/设置-配置/getAppliedGlobalConfigEnv.zewdj9m8.js"),
            import("./01-核心基础设施/共享小工具-未细化/parseGitHubRepository.3ng6714h.js"),
            import("./02-功能模块/云会话-Teleport/logForDebugging.yzt1kswr.js"),
          ])
            .then(
              ([
                { setupGracefulShutdown: d },
                { initializeErrorLogSink: T },
                { initializeAnalyticsSink: N },
                { logEvent: Et },
                { captureTeammateModeSnapshotIfEnabled: Ct },
                { initializeGrowthBook: _t },
                { initializeTelemetryAfterTrust: Pt },
                {
                  checkHasTrustDialogAccepted: tt,
                  watchGlobalConfigThroughStorage: vt,
                },
                { applyConfigEnvironmentVariables: St },
                { setRepoDetectionGuards: yt },
                { initDefaultDebugLog: At },
              ]) => {
                if (
                  (d({ storageV5: p, credentials: H }),
                  yt({ trustProbe: tt }),
                  _t().catch(() => {}),
                  T(),
                  N(),
                  M() && p !== void 0)
                )
                  (At({ storageV5: p }), vt(p));
                return (
                  mt.then(() => {
                    if (tt()) (St(), Pt(p));
                  }),
                  Et("tengu_fleetview", {
                    defaultToAgentsView: i,
                    relaunch: dt,
                  }),
                  Ct()
                );
              },
            )
            .finally(() => process.off("unhandledRejection", J))),
            import("./02-功能模块/会话-历史-恢复/startBackgroundHousekeeping.t1hjzkg6.js").then((d) =>
              d.startBackgroundHousekeeping(j().host, p),
            ));
        }),
          r(),
          y());
        let W =
          D?.permissionMode === "bypassPermissions" || D?.allowBypass
            ? await import("./02-功能模块/权限系统/applyBypassPolicyGate.baa1cgm7.js")
            : void 0;
        W?.refuseBypassUnderRoot(D);
        let Z = W?.applyBypassPolicyGate(D) ?? D,
          K = await P(g(!1)),
          { ensureAgentsWorkspaceTrust: ut, agentsTrustDecision: gt } =
            await import("./02-功能模块/权限系统/ensureAgentsWorkspaceTrust.f9t4zxp4.js");
        if ((await ut(K, gt(), p), X(), W))
          await W.ensureAgentsBypassConsent(K, Z, p);
        let ft = await import("./01-核心基础设施/共享小工具-未细化/AGENT_VIEW_RELAUNCH_ENV_KEY.2qggy62y.js"),
          wt = {
            cwdFilter: l.cwdFilter,
            dispatchExtraArgs: Gxe(Wxe(l.config, b)),
            dispatchDefaults: Z,
            entryChannel: ft.isListReturnRelaunch()
              ? "list_return"
              : h
                ? "cli_agents"
                : "default_home",
            storageV5: p,
            credentials: H,
          };
        {
          let { mountFleetViewWithComposerBack: d } =
            await import("./02-功能模块/Fleet多会话视图/Fleet多会话视图.r6bvyjj3.js");
          await d(K, wt);
        }
        await Q.catch(() => {});
        let { gracefulShutdown: ht } = await import("./01-核心基础设施/核心工具-进程与信号/flushAnalyticsSinks.tbwzvw9n.js");
        await ht(0, "other", { suppressResumeHint: !0 });
        return;
      }
      if (h) return A("claude agents");
    }
  }
  if (t[0] === "self-hosted-runner") {
    m("cli_self_hosted_runner_path");
    let e = t[1];
    if (e === "orchestrator") {
      let { selfHostedRunnerOrchestratorMain: o } =
        await import("./02-功能模块/自托管Runner/selfHostedRunnerOrchestratorMain.vr7sj1xj.js");
      await o(t.slice(2));
      return;
    }
    if (e === "setup") {
      let { selfHostedRunnerSetupMain: o } =
        await import("./02-功能模块/工具TodoWrite-Tasks/工具TodoWrite-Tasks.6rz6gx06.js");
      await o(t.slice(2), n);
      return;
    }
    if (e === "doctor") {
      let { selfHostedRunnerDoctorMain: o } =
        await import("./02-功能模块/自托管Runner/selfHostedRunnerDoctorMain.x315agam.js");
      await o(t.slice(2), n);
      return;
    }
    if (e === "code-sign") {
      let { selfHostedRunnerCodeSignMain: o } =
        await import("./02-功能模块/自托管Runner/GIT_PROXY_CRED_HELPER_CONTENT.pcspxqeg.js");
      await o(t.slice(2));
      return;
    }
    if (e === "decode-token") {
      let { selfHostedRunnerDecodeTokenMain: o } =
        await import("./02-功能模块/自托管Runner/selfHostedRunnerDecodeTokenMain.thmjygk0.js");
      await o(t.slice(2));
      return;
    }
    let { selfHostedRunnerMain: r } = await import("./02-功能模块/自托管Runner/自托管Runner.9rwvsyx9.js");
    await r(t.slice(1));
    return;
  }
  if (
    (t.includes("--tmux") || t.includes("--tmux=classic")) &&
    (t.includes("-w") ||
      t.includes("--worktree") ||
      t.some((e) => e.startsWith("--worktree=")))
  ) {
    m("cli_tmux_worktree_fast_path");
    let { enableConfigs: e, seedInstallIDs: r } =
      await import("./01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js");
    await e(M() ? n?.backend : void 0);
    let { isWorktreeModeEnabled: o } = await import("./01-核心基础设施/共享小工具-未细化/isWorktreeModeEnabled.p77rzdj8.js");
    if (o()) {
      let [
          { execIntoTmuxWorktree: v },
          { pinStorageV5: R },
          { initDefaultDebugLog: k },
        ] = await Promise.all([
          import("./02-功能模块/Git-Worktree/IDENTITY_CHANGED_SUMMARY.fc8k0hbw.js"),
          import("./01-核心基础设施/共享小工具-未细化/pinStorageV5.xt5bqpq9.js"),
          import("./02-功能模块/云会话-Teleport/logForDebugging.yzt1kswr.js"),
        ]),
        E = R(n),
        s;
      if (M() && E !== void 0) {
        k({ storageV5: E });
        let [
          { credentialsStoreFor: c },
          { setGrowthBookCredentials: C, setGrowthBookStorageBackend: _ },
          { primeFastPathCredentials: A },
        ] = await Promise.all([
          import("./01-核心基础设施/共享小工具-未细化/credentialsStoreFor.r7prg4pg.js"),
          import("./01-核心基础设施/共享小工具-未细化/ATIS_REQUEST_HEADER.9bwp2jqb.js"),
          import("./01-核心基础设施/共享小工具-未细化/primeFastPathCredentials.eb5w3wem.js"),
        ]);
        ((s = c(E)), C(s), _(E), await A(s), await r(E));
      }
      let i = await v(t, E, s);
      if (i.handled) return;
      let { exitWithError: u } = await import("./01-核心基础设施/共享小工具-未细化/getStdoutDrainBudgetMs.41d1vrrp.js");
      u(i.error);
    }
  }
  if (t.length === 1 && (t[0] === "--update" || t[0] === "--upgrade"))
    process.argv = [process.argv[0], process.argv[1], "update"];
  let G = t.indexOf("--");
  if ((G === -1 ? t : t.slice(0, G)).includes("--bare"))
    process.env.CLAUDE_CODE_SIMPLE = "1";
  let {
    NON_REPL_SUBCOMMANDS: L,
    isMcpServeInvocation: I,
    isPluginEvalInvocation: F,
    isRemoteControlInvocation: ot,
    isAgentsJsonInvocation: rt,
  } = await import("./02-功能模块/Bridge-RemoteControl/NON_REPL_SUBCOMMANDS.ce1ven8w.js");
  if (
    !L.has(process.argv[2] ?? "") &&
    !I(process.argv.slice(2)) &&
    !F(process.argv.slice(2)) &&
    !ot(process.argv.slice(2)) &&
    !rt(process.argv.slice(2))
  ) {
    let { startCapturingEarlyInput: e } = await import("./01-核心基础设施/共享小工具-未细化/startCapturingEarlyInput.cq2gda4e.js");
    e();
  }
  let [{ startMdmRawRead: st }, { startKeychainPrefetch: at }] =
    await Promise.all([
      import("./01-核心基础设施/共享小工具-未细化/getMdmRawReadPromise.c91w9436.js"),
      import("./01-核心基础设施/共享小工具-未细化/KEYCHAIN_PREFETCH_FASTPATH_BUDGET_MS.1fb6y1wa.js"),
    ]);
  (st(), at(), m("cli_before_main_import"));
  let { main: nt } = await import("./03-入口与运行时/CLI入口-Commander/main.vdzfymn2.js");
  (m("cli_after_main_import"), await nt(n), m("cli_after_main_complete"));
}
Lt();
