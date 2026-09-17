// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 254 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { AppRoot } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import { useStorageV5Context } from "../../01-核心基础设施/核心工具-未归类/storage-v5-context.js";
import { redactDeep, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { shouldSendMcpServerTelemetry, getGlobalConfig, getCurrentProjectConfig, deleteCurrentProjectConfigFields } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { R, l, A, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum, mcpNameForAnalytics_GATE_EVALUATED } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { writeToStdout } from "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logEventAsync } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOkAsync, logFeatureBadAsync } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { McpServerConfigSchema, formatServerDisplayName } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { getLocalSettingsValidationErrors, getSettingsForSource, updateSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { useTheme } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { Box, Text, render } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import {
  mapWithConcurrency,
  gracefulShutdown,
  sanitizeMessageText,
  isUnconfiguredMcpServer,
  formatMcpScopeLocation,
  formatMcpScopeDescription,
  normalizeMcpScope,
  getProjectMcpServerApprovalStatus,
  isMcpServerAllowedByPolicy,
  addMcpConfig,
  removeMcpConfig,
  readRawMcpJsonServersFromCwd,
  MCP_SETTINGS_SCOPES,
  isOrganizationProvidedMcpScope,
  getMcpConfigsByScope,
  getSettingsMcpConfigByName,
  getAllMcpConfigs,
  doesEnterpriseMcpConfigExist,
  isMcpServerDisabled,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { buildCliCommand } from "../插件系统/plugin-system-core.js";
import { isRestrictedToPluginOnly } from "../Skills技能/chunk-sapykxw7.js";
import { listMcpToolsRaw } from "./chunk-7wm8t84g.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { DotSeparatedList } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import { lE } from "../../01-核心基础设施/UI组件-TUI/chunk-dhg42t8r.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import "../../01-核心基础设施/UI组件-TUI/chunk-jjqazdgg.js";
import { McpConfigDiagnostics } from "./mcp-config-diagnostics.js";
import { flushAnalyticsSinks } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-p7jm635c.js";
import { awaitMcpPolicyColdStart, redactManagedMcpConfig, collectProjectMcpServerNames } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { RenderOnceAndExit, renderAndWaitForExit } from "../../01-核心基础设施/UI组件-TUI/one-shot-render.js";
import { printCliError, cliError, cliErrorAfterAnalyticsFlush, cliOkAfterAnalyticsFlush } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-4f55jpqh.js";
import { formatMcpConnectionError } from "./mcp-error-messages.js";
import { ActionKeybindingHint } from "../键位绑定-Keybindings/action-keybinding-hint.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { formatMcpServerNotFoundMessage, formatMcpServerNotFoundMessageWithPendingApproval } from "./mcp-server-not-found-message.js";
import { getThemeColor } from "../../01-核心基础设施/UI组件-TUI/theme-color.js";
import { getLocalSettingsErrorsBlockingWrite, getGatingSettingsErrors } from "../../01-核心基础设施/设置-配置/chunk-xy3cbvd8.js";
import { Dn, kn, E, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
import { stat as it } from "fs/promises";
F();
import { cwd as ct } from "process";
F();
function ot(Wt) {
  logForDebugging(`Failed to read existing MCP configs for Desktop import: ${l(Wt)}`, {
    level: "error",
  });
}
function st(Kt) {
  return Kt !== null;
}
function he(kt) {
  let T = _(50),
    { servers: V, scope: W, onDone: ce } = kt,
    qe;
  if (T[0] !== V) ((qe = Object.keys(V)), (T[0] = V), (T[1] = qe));
  else qe = T[1];
  let I = qe,
    Ge;
  if (T[2] === MEMO_CACHE_SENTINEL) ((Ge = {}), (T[2] = Ge));
  else Ge = T[2];
  let [z, At] = d(Ge),
    [re] = useTheme(),
    { storageV5: G } = useStorageV5Context(),
    Je,
    Ve;
  if (T[3] !== G)
    ((Je = () => {
      getAllMcpConfigs({ storageV5: G })
        .then((ae) => {
          let { servers: Tt } = ae;
          return At(Tt);
        })
        .catch(ot);
    }),
      (Ve = [G]),
      (T[3] = G),
      (T[4] = Je),
      (T[5] = Ve));
  else ((Je = T[4]), (Ve = T[5]));
  E(Je, Ve);
  let ae;
  if (T[6] !== z || T[7] !== I) {
    let oe;
    if (T[9] !== z) ((oe = (Ft) => z[Ft] !== void 0), (T[9] = z), (T[10] = oe));
    else oe = T[10];
    ae = I.filter(oe);
    ((T[6] = z), (T[7] = I), (T[8] = ae));
  } else ae = T[8];
  let q = ae,
    oe;
  if (T[11] !== z)
    ((oe = function se(le) {
      if (z[le] === void 0) {
        return le;
      }
      let $e = 1;
      while (z[`${le}_${$e}`] !== void 0) $e++;
      return `${le}_${$e}`;
    }),
      (T[11] = z),
      (T[12] = oe));
  else oe = T[12];
  let se = oe,
    We;
  if (T[13] !== se || T[14] !== W || T[15] !== G)
    ((We = async function ne(Ke, Nt) {
      try {
        return (await addMcpConfig(se(Ke), Nt, W, G), null);
      } catch (K) {
        let Ot = K;
        return { serverName: Ke, reason: l(Ot) };
      }
    }),
      (T[13] = se),
      (T[14] = W),
      (T[15] = G),
      (T[16] = We));
  else We = T[16];
  let ne = We,
    ie,
    X;
  if (
    T[17] !== ne ||
    T[18] !== ce ||
    T[19] !== W ||
    T[20] !== V ||
    T[21] !== re
  ) {
    let Re = async function Re(Dt) {
      let Qe = await Dt.flatMap((Xe) => {
        let Ye = V[Xe];
        return Ye ? [{ serverName: Xe, serverConfig: Ye }] : [];
      }).reduce(async (It, K) => {
        let { serverName: Bt, serverConfig: Ht } = K;
        return [...(await It), await ne(Bt, Ht)];
      }, Promise.resolve([]));
      let Ze = Qe.filter(st);
      ie({ importedCount: Qe.length - Ze.length, failures: Ze });
    };
    X = function X(Lt) {
      Re(Lt).catch((Ut) => {
        (writeToStdout(`
${getThemeColor("error", re)(l(Ut))}
`),
          ce(),
          gracefulShutdown());
      });
    };
    ie = (Ee) => {
      let { importedCount: ke, failures: zt } = Ee;
      if (ke > 0)
        writeToStdout(`
${getThemeColor("success", re)(`Successfully imported ${ke} MCP ${pluralize(ke, "server")} to ${W} config.`)}
`);
      else
        writeToStdout(`
No servers were imported.`);
      (zt.forEach((pe) => {
        let { serverName: qt, reason: Gt } = pe;
        writeToStdout(`
${getThemeColor("error", re)(`Could not import ${qt}: ${Gt}`)}
`);
      }),
        ce(),
        gracefulShutdown());
    };
    ((T[17] = ne),
      (T[18] = ce),
      (T[19] = W),
      (T[20] = V),
      (T[21] = re),
      (T[22] = ie),
      (T[23] = X));
  } else ((ie = T[22]), (X = T[23]));
  let K;
  if (T[24] !== ie)
    ((K = () => {
      ie({ importedCount: 0, failures: [] });
    }),
      (T[24] = ie),
      (T[25] = K));
  else K = T[25];
  let Q = K;
  const Ee = I.length;
  let pe;
  if (T[26] !== I.length)
    ((pe = pluralize(I.length, "server")), (T[26] = I.length), (T[27] = pe));
  else pe = T[27];
  const xe = `Found ${Ee} MCP ${pe} in Claude Desktop.`;
  let fe;
  if (T[28] !== q.length)
    ((fe =
      q.length > 0 &&
      e(Text, {
        color: "warning",
        children:
          "Note: Some servers already exist with the same name. If selected, they will be imported with a numbered suffix.",
      })),
      (T[28] = q.length),
      (T[29] = fe));
  else fe = T[29];
  let et;
  if (T[30] === MEMO_CACHE_SENTINEL)
    ((et = e(Text, { children: "Please select the servers you want to import:" })),
      (T[30] = et));
  else et = T[30];
  let me, ge;
  if (T[31] !== q || T[32] !== I) {
    me = I.map((Ae) => ({
      label: `${Ae}${q.includes(Ae) ? " (already exists)" : ""}`,
      value: Ae,
    }));
    let J;
    if (T[35] !== q) ((J = (Vt) => !q.includes(Vt)), (T[35] = q), (T[36] = J));
    else J = T[36];
    ge = I.filter(J);
    ((T[31] = q), (T[32] = I), (T[33] = me), (T[34] = ge));
  } else ((me = T[33]), (ge = T[34]));
  let J;
  if (T[37] !== Q || T[38] !== X || T[39] !== me || T[40] !== ge)
    ((J = e(lE, {
      options: me,
      defaultValue: ge,
      onSubmit: X,
      onCancel: Q,
      hideIndexes: !0,
    })),
      (T[37] = Q),
      (T[38] = X),
      (T[39] = me),
      (T[40] = ge),
      (T[41] = J));
  else J = T[41];
  let ve;
  if (T[42] !== Q || T[43] !== xe || T[44] !== fe || T[45] !== J)
    ((ve = r(de, {
      title: "Import MCP Servers from Claude Desktop",
      subtitle: xe,
      color: "success",
      onCancel: Q,
      hideInputGuide: !0,
      children: [fe, et, J],
    })),
      (T[42] = Q),
      (T[43] = xe),
      (T[44] = fe),
      (T[45] = J),
      (T[46] = ve));
  else ve = T[46];
  let tt;
  if (T[47] === MEMO_CACHE_SENTINEL)
    ((tt = e(Box, {
      paddingX: 1,
      children: e(Text, {
        dimColor: !0,
        italic: !0,
        children: r(DotSeparatedList, {
          children: [
            e(KeybindingHint, { chord: "space", action: "select" }),
            e(KeybindingHint, { chord: "enter", action: "confirm" }),
            e(ActionKeybindingHint, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel",
            }),
          ],
        }),
      }),
    })),
      (T[47] = tt));
  else tt = T[47];
  let rt;
  if (T[48] !== ve)
    ((rt = r(N, { children: [ve, tt] })), (T[48] = ve), (T[49] = rt));
  else rt = T[49];
  return rt;
}
function dt(Xr) {
  return Xr !== null;
}
function Pe() {
  return import.meta.require("./mcpClientModule.4cyej0np.js");
}
function Z() {
  return Pe().mcpAuthModule();
}
function De() {
  return Pe().mcpClientModule();
}
function at() {
  return Pe().mcpIsListAuthErrorModule();
}
function lt(h) {
  let s = h?.issues;
  if (Array.isArray(s) && s.length > 0) {
    let v = s[0],
      a = typeof v.message === "string" ? v.message : l(h),
      f =
        Array.isArray(v.path) && v.path.length > 0
          ? ` (at ${v.path.join(".")})`
          : "",
      m = s.length > 1 ? ` (+${s.length - 1} more)` : "";
    return sanitizeMessageText(a + f + m);
  }
  return sanitizeMessageText(l(h));
}
async function Ie(h, s, v) {
  try {
    let a = await De().connectToServer(h, s, void 0, v);
    if (a.type === "connected") {
      if (a.capabilities.tools)
        try {
          await listMcpToolsRaw(a, { timeout: 5000 });
        } catch (f) {
          if (at().isListAuthError(f))
            return { status: "! Needs authentication" };
          return {
            status: "! Connected \xB7 tools fetch failed",
            issue: lt(f),
          };
        }
      return { status: `${figures.tick} Connected` };
    } else if (a.type === "needs-auth")
      return { status: "! Needs authentication" };
    else if (isUnconfiguredMcpServer(a)) return { status: "- Not configured" };
    else if (a.type === "failed") {
      let f = formatMcpConnectionError(a);
      return {
        status: `${figures.cross} Failed to connect`,
        ...(f !== "" && { issue: f }),
      };
    } else return { status: `${figures.cross} Failed to connect` };
  } catch (a) {
    return { status: `${figures.cross} Connection error` };
  }
}
async function mcpServeHandler(
  { debug: h, verbose: s, transport: v, port: a, resultFormat: f },
  m,
) {
  let y = ct(),
    i = "stdio",
    k = "raw";
  await logEventAsync("tengu_mcp_start", { transport: fromEnum("stdio") });
  let M = 0;
  try {
    await it(y);
  } catch (g) {
    if (Rt(g))
      return (
        await logFeatureBadAsync("cli_mcp_serve", "cli_mcp_serve_cwd_missing"),
        cliErrorAfterAnalyticsFlush(`Error: Directory ${y} does not exist`)
      );
    throw g;
  }
  try {
    let { setup: g } = await import("../../03-入口与运行时/CLI入口-Commander/setup.sbdmcpy2.js");
    await g(y, "default", !1, !1, void 0, !1, void 0, void 0, void 0, m);
    let { SandboxManager: C } = await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
      O = C.getSandboxUnavailableReason();
    if (O) {
      if (C.isSandboxRequired())
        return (
          await logFeatureBadAsync(
            "cli_mcp_serve",
            "cli_mcp_serve_sandbox_required_unavailable",
          ),
          cliErrorAfterAnalyticsFlush(
            `Error: sandbox required but unavailable: ${O}
` +
              "  sandbox.failIfUnavailable is set \u2014 refusing to start without a working sandbox.",
          )
        );
      process.stderr.write(`
\u26A0 Sandbox disabled: ${O}
  Commands will run WITHOUT sandboxing. Network and filesystem restrictions will NOT be enforced.

`);
    } else {
      if (C.canMaskCredentialWarningFire()) C.checkDependencies();
      let j = C.getMaskCredentialWarning();
      if (j)
        process.stderr.write(`
\u26A0 ${j}

`);
    }
    {
      let { startMCPServer: j } = await import("../Teammates团队/startMCPServer.404m9js2.js");
      await j(y, h ?? !1, s ?? !1, m, "raw");
    }
    await logFeatureOkAsync("cli_mcp_serve");
  } catch (g) {
    return (
      await logFeatureBadAsync("cli_mcp_serve", "cli_mcp_serve_start_failed"),
      cliErrorAfterAnalyticsFlush(`Error: Failed to start MCP server: ${g}`)
    );
  }
}
async function mcpRemoveHandler(h, s, v, a) {
  let f = null,
    m = (M) => {
      let g = MCP_SETTINGS_SCOPES.find((C) => C === M);
      f = g ? (getMcpConfigsByScope(g).servers[s] ?? null) : null;
    },
    y = async () => {
      if (f && (f.type === "sse" || f.type === "http"))
        try {
          (await Z().clearServerTokensFromLocalStorage(s, f),
            await Z().clearMcpClientConfig(s, f));
        } catch (M) {
          logForDebugging(`mcp remove: secure-storage cleanup for "${s}" failed: ${l(M)}`, {
            level: "warn",
          });
        }
    },
    i;
  try {
    let M = shouldSendMcpServerTelemetry(s, getSettingsMcpConfigByName(s) ?? void 0);
    if (v.scope) {
      let g = normalizeMcpScope(v.scope);
      (await logEventAsync("tengu_mcp_delete", { name: mcpNameForAnalytics_GATE_EVALUATED(s, M), scope: fromEnum(g) }),
        m(g),
        await removeMcpConfig(s, g, a),
        await y(),
        (i = g));
    } else {
      let g = getCurrentProjectConfig(),
        C = getGlobalConfig(),
        O = await readRawMcpJsonServersFromCwd().catch((c) => {
          if (c instanceof R || A(c) !== void 0) throw c;
          return {};
        }),
        j = Object.hasOwn(O, s),
        b = [];
      if (g.mcpServers?.[s]) b.push("local");
      if (j) b.push("project");
      if (C.mcpServers?.[s]) b.push("user");
      if (b.length === 0) {
        await awaitMcpPolicyColdStart({ hasDynamicMcpConfig: !1 });
        let c = getSettingsMcpConfigByName(s)?.scope;
        if (c && isOrganizationProvidedMcpScope(c))
          return cliErrorAfterAnalyticsFlush(
            `MCP server "${s}" is provided by your organization (${c === "managed" ? "managed settings" : formatMcpScopeLocation("enterprise")}) and cannot be removed locally.`,
          );
        let w = [
          ...Object.keys(g.mcpServers ?? {}),
          ...Object.keys(O),
          ...Object.keys(C.mcpServers ?? {}),
        ];
        return (
          await logFeatureBadAsync("cli_mcp_remove", "cli_mcp_remove_not_found"),
          cliErrorAfterAnalyticsFlush(formatMcpServerNotFoundMessage(s, dedupe(w)))
        );
      } else if (b.length === 1) {
        let c = b[0];
        (await logEventAsync("tengu_mcp_delete", { name: mcpNameForAnalytics_GATE_EVALUATED(s, M), scope: fromEnum(c) }),
          m(c),
          await removeMcpConfig(s, c, a),
          await y(),
          (i = c));
      } else {
        (process.stderr.write(`MCP server "${s}" exists in multiple scopes:
`),
          b.forEach((w) => {
            process.stderr.write(`  - ${formatMcpScopeDescription(w)} (${formatMcpScopeLocation(w)})
`);
          }));
        let c = b
          .map((w) => buildCliCommand("mcp remove", s, `-s ${w}`))
          .filter((w) => w !== null);
        if (c.length > 0)
          (process.stderr.write(`
To remove from a specific scope, use:
`),
            c.forEach((w) =>
              process.stderr.write(`  ${w}
`),
            ));
        else
          process.stderr.write(`
Specify a scope with -s to remove from a specific one.
`);
        return (
          await logFeatureBadAsync("cli_mcp_remove", "cli_mcp_remove_ambiguous_scope"),
          cliErrorAfterAnalyticsFlush()
        );
      }
    }
  } catch (M) {
    return (await logFeatureBadAsync("cli_mcp_remove", "cli_mcp_remove_failed"), cliErrorAfterAnalyticsFlush(l(M)));
  }
  await logFeatureOkAsync("cli_mcp_remove");
  let k = v.scope ? s : `"${s}"`;
  await renderAndWaitForExit(
    h,
    r(Box, {
      flexDirection: "column",
      children: [
        r(Text, { children: ["Removed MCP server ", k, " from ", i, " config"] }),
        r(Text, { children: ["File modified: ", formatMcpScopeLocation(i)] }),
      ],
    }),
  );
}
function Be(h) {
  let s = new Map(),
    v = {};
  for (let [a, f] of Object.entries(h))
    if (
      f.scope === "local" ||
      f.scope === "user" ||
      f.scope === "project" ||
      f.scope === "enterprise" ||
      f.scope === "managed"
    ) {
      let m = s.get(f.scope);
      if (!m)
        ((m = getMcpConfigsByScope(f.scope, { expandVars: !1 }).servers), s.set(f.scope, m));
      let y = m[a] ?? f;
      if (y.scope !== "managed") {
        v[a] = y;
        continue;
      }
      let i = redactDeep(y);
      v[a] = "url" in i ? redactManagedMcpConfig(i, y.scope) : i;
    } else v[a] = redactDeep(f);
  return v;
}
function Ne({ name: h, server: s, status: v, issue: a }) {
  let f = a ? `${v} \u2014 ${a}` : v;
  if (s.type === "sse") return `${h}: ${s.url} (SSE) - ${f}`;
  if (s.type === "http") return `${h}: ${s.url} (HTTP) - ${f}`;
  if (s.type === "claudeai-proxy") return `${h}: ${s.url} - ${f}`;
  if (!s.type || s.type === "stdio") {
    let m = Array.isArray(s.args) ? s.args : [];
    return `${h}: ${s.command} ${m.join(" ")} - ${f}`;
  }
  return null;
}
function He(Vr) {
  let Fe = _(10),
    { promise: Wr } = Vr,
    Te = kn(Wr),
    we,
    Ce,
    be;
  if (Fe[0] !== Te) {
    let Kr = Te.map(Ne).filter(dt);
    Ce = RenderOnceAndExit;
    we = Text;
    be = Kr.join(`
`);
    ((Fe[0] = Te), (Fe[1] = we), (Fe[2] = Ce), (Fe[3] = be));
  } else ((we = Fe[1]), (Ce = Fe[2]), (be = Fe[3]));
  let Me;
  if (Fe[4] !== we || Fe[5] !== be)
    ((Me = e(we, { children: be })), (Fe[4] = we), (Fe[5] = be), (Fe[6] = Me));
  else Me = Fe[6];
  let nt;
  if (Fe[7] !== Ce || Fe[8] !== Me)
    ((nt = e(Ce, { children: Me })), (Fe[7] = Ce), (Fe[8] = Me), (Fe[9] = nt));
  else nt = Fe[9];
  return nt;
}
var Le = "\u23F8 Pending approval (run `claude` to approve)",
  pt = `${figures.cross} Rejected (see disabledMcpjsonServers in settings)`,
  Ue = "\u2298 Disabled for this project (re-enable via /mcp)";
async function mcpListHandler(h, s, v) {
  (await logEventAsync("tengu_mcp_list", {}), await awaitMcpPolicyColdStart({ hasDynamicMcpConfig: !1 }));
  let { servers: a, pendingProjectServers: f } = await getAllMcpConfigs({
    includePendingProjectServers: !0,
    storageV5: s,
    credentials: v,
  });
  await logFeatureOkAsync("cli_mcp_list");
  let m = e(McpConfigDiagnostics, {});
  if (Object.keys(a).length === 0) {
    (await renderAndWaitForExit(
      h,
      r(Box, {
        flexDirection: "column",
        children: [
          e(Text, {
            children:
              "No MCP servers configured. Use `claude mcp add` to add a server.",
          }),
          m,
        ],
      }),
    ),
      await gracefulShutdown(0));
    return;
  }
  let y = Be(a),
    i = mapWithConcurrency(
      Object.entries(a),
      async ([k, M]) => {
        let g = f.has(k)
          ? { status: Le }
          : isMcpServerDisabled(k)
            ? { status: Ue }
            : await Ie(k, M, s);
        return {
          name: k,
          server: y[k] ?? M,
          status: g.status,
          ...(g.issue !== void 0 && { issue: g.issue }),
        };
      },
      { concurrency: De().getMcpServerConnectionBatchSize() },
    );
  (h.render(
    e(Dn, {
      fallback: r(Text, {
        children: [
          "Checking MCP server health\u2026",
          `

`,
        ],
      }),
      children: r(Box, {
        flexDirection: "column",
        children: [e(He, { promise: i }), m],
      }),
    }),
  ),
    await h.waitUntilExit(),
    await gracefulShutdown(0));
}
async function mcpGetHandler(h, s, v, a) {
  (await logEventAsync("tengu_mcp_get", { name: mcpNameForAnalytics_GATE_EVALUATED(s, shouldSendMcpServerTelemetry(s, getSettingsMcpConfigByName(s) ?? void 0)) }),
    await awaitMcpPolicyColdStart({ hasDynamicMcpConfig: !1 }));
  let {
      servers: f,
      pendingProjectServers: m,
      rejectedProjectServers: y,
    } = await getAllMcpConfigs({
      includePendingProjectServers: !0,
      includeRejectedProjectServers: !0,
      storageV5: v,
      credentials: a,
    }),
    i = f[s] ?? null,
    k = m.has(s) ? "pending" : y.has(s) ? "rejected" : null;
  if (!i) {
    await logFeatureBadAsync("cli_mcp_get", "cli_mcp_get_not_found");
    let c = Object.keys(f).filter((w) => !m.has(w) && !y.has(w));
    return cliErrorAfterAnalyticsFlush(formatMcpServerNotFoundMessageWithPendingApproval(s, c, m.size > 0));
  }
  let M =
      k === "pending"
        ? { status: Le }
        : k === "rejected"
          ? { status: pt }
          : isMcpServerDisabled(s)
            ? { status: Ue }
            : await Ie(s, i, v),
    g = Be({ [s]: i })[s] ?? i,
    C = [
      `${s}:`,
      `  Scope: ${formatMcpScopeDescription(i.scope)}`,
      `  Status: ${M.status}`,
      ...(M.issue ? [`  Issue: ${M.issue}`] : []),
    ];
  if (
    (i.type === "sse" || i.type === "http") &&
    (g.type === "sse" || g.type === "http")
  ) {
    if ((C.push(`  Type: ${i.type}`), C.push(`  URL: ${g.url}`), g.headers)) {
      C.push("  Headers:");
      for (let [c, w] of Object.entries(g.headers)) C.push(`    ${c}: ${w}`);
    }
    if (i.oauth?.clientId || i.oauth?.callbackPort) {
      let c = [];
      if (i.oauth.clientId) {
        if (
          (c.push("client_id configured"),
          (await Z().getMcpClientConfig(s, i))?.clientSecret)
        )
          c.push("client_secret configured");
      }
      if (i.oauth.callbackPort) c.push(`callback_port ${i.oauth.callbackPort}`);
      C.push(`  OAuth: ${c.join(", ")}`);
    }
  } else if (i.type === "stdio" && g.type === "stdio") {
    (C.push("  Type: stdio"), C.push(`  Command: ${g.command}`));
    let c = Array.isArray(g.args) ? g.args : [];
    if ((C.push(`  Args: ${c.join(" ")}`), g.env)) {
      C.push("  Environment:");
      for (let [w, H] of Object.entries(g.env)) C.push(`    ${w}=${H}`);
    }
  }
  if (i.timeout !== void 0)
    C.push(
      `  Timeout: ${i.timeout}ms${i.timeout < 1000 ? " (ignored: below 1000ms minimum)" : ""}`,
    );
  let j =
      i.scope === "local" || i.scope === "project" || i.scope === "user"
        ? buildCliCommand("mcp remove", s, `-s ${i.scope}`)
        : null,
    b = null;
  if (j) b = `To remove this server, run: ${j}`;
  else if (
    i.scope === "user" ||
    i.scope === "project" ||
    i.scope === "local" ||
    i.scope === "enterprise"
  )
    b = `To remove this server, edit ${formatMcpScopeLocation(i.scope)}`;
  else if (i.scope === "managed")
    b =
      "This server is provided by your organization's managed settings and cannot be removed locally.";
  if (b) (C.push(""), C.push(b));
  (await logFeatureOkAsync("cli_mcp_get"),
    await renderAndWaitForExit(
      h,
      e(Text, {
        children: C.join(`
`),
      }),
    ),
    await gracefulShutdown(0));
}
async function mcpAddJsonHandler(h, s, v, a, f) {
  let m, y;
  try {
    m = normalizeMcpScope(a.scope);
    let i = xt(v, !1);
    if (i === null)
      logForDebugging("mcp add-json: user-provided JSON was empty, invalid, or null", {
        level: "error",
      });
    let M =
      a.clientSecret &&
      i &&
      typeof i === "object" &&
      "type" in i &&
      (i.type === "sse" || i.type === "http" || i.type === "streamable-http") &&
      "url" in i &&
      typeof i.url === "string" &&
      "oauth" in i &&
      i.oauth &&
      typeof i.oauth === "object" &&
      "clientId" in i.oauth
        ? await Z().readClientSecret()
        : void 0;
    await addMcpConfig(s, i, m, f);
    let g = McpServerConfigSchema().safeParse(i);
    if (
      ((y = (g.success ? g.data.type : void 0) ?? "stdio"),
      M &&
        i &&
        typeof i === "object" &&
        "type" in i &&
        (i.type === "sse" ||
          i.type === "http" ||
          i.type === "streamable-http") &&
        "url" in i &&
        typeof i.url === "string")
    ) {
      let j = await Z().saveMcpClientSecret(
        s,
        { type: i.type === "sse" ? "sse" : "http", url: i.url },
        M,
      );
      if (!j.success)
        process.stderr
          .write(`Server added, but the client secret could not be stored${j.warning ? ` (${j.warning})` : ""}. Re-run with --client-secret once secure storage is available.
`);
    }
    let C = m,
      O = y;
    await logEventAsync("tengu_mcp_add", { scope: fromEnum(C), source: S("json"), type: fromEnum(O) });
  } catch (i) {
    return (await logFeatureBadAsync("cli_mcp_add_json", "cli_mcp_add_json_failed"), cliErrorAfterAnalyticsFlush(l(i)));
  }
  (await logFeatureOkAsync("cli_mcp_add_json"),
    await renderAndWaitForExit(
      h,
      r(Text, {
        children: ["Added ", y, " MCP server ", s, " to ", m, " config"],
      }),
    ));
}
async function mcpAddFromDesktopHandler(h, s) {
  try {
    let v = normalizeMcpScope(h.scope),
      a = getCurrentPlatform();
    await logEventAsync("tengu_mcp_add", {
      scope: fromEnum(v),
      platform: fromEnum(a),
      source: S("desktop"),
    });
    let { readClaudeDesktopMcpServers: f } =
        await import("./readClaudeDesktopMcpServers.k2w4wb5c.js"),
      m = await f();
    if (Object.keys(m).length === 0)
      return (
        await logFeatureOkAsync("cli_mcp_add_from_desktop"),
        cliOkAfterAnalyticsFlush(
          "No MCP servers found in Claude Desktop configuration or configuration file does not exist.",
        )
      );
    await logFeatureOkAsync("cli_mcp_add_from_desktop");
    let { unmount: y } = await render(
      e(AppRoot, {
        session: B(),
        storageV5: s,
        children: e(he, {
          servers: m,
          scope: v,
          onDone: () => {
            y();
          },
        }),
      }),
      { exitOnCtrlC: !0, patchConsole: !1 },
    );
  } catch (v) {
    return (
      await logFeatureBadAsync("cli_mcp_add_from_desktop", "cli_mcp_add_from_desktop_failed"),
      cliErrorAfterAnalyticsFlush(l(v))
    );
  }
}
async function mcpResetChoicesHandler(h, s) {
  if (
    (await logEventAsync("tengu_mcp_reset_mcpjson_choices", {}),
    !(await deleteCurrentProjectConfigFields(
      [
        "enabledMcpjsonServers",
        "disabledMcpjsonServers",
        "enableAllProjectMcpServers",
      ],
      s,
    )))
  )
    return (
      printCliError(
        "Error: Failed to reset project choices: legacy approvals in ~/.claude.json could not be cleared (is the file writable?). Nothing was changed.",
      ),
      await logFeatureBadAsync(
        "cli_mcp_reset_choices",
        "cli_mcp_reset_choices_projectconfig_delete_failed",
      ),
      await flushAnalyticsSinks(),
      cliError()
    );
  let a = getSettingsForSource("localSettings");
  if (
    a
      ? a.enabledMcpjsonServers !== void 0 ||
        a.disabledMcpjsonServers !== void 0 ||
        a.enableAllProjectMcpServers !== void 0
      : getLocalSettingsValidationErrors().length > 0
  ) {
    if (a !== null && getLocalSettingsErrorsBlockingWrite().length > 0)
      return (
        printCliError(
          "Error: Failed to reset project choices: settings.local.json carries validation warnings, and rewriting it would delete the warned entries \u2014 run `claude doctor` to list them, fix them, then re-run (legacy approvals in ~/.claude.json were cleared; local settings were not)",
        ),
        await logFeatureBadAsync(
          "cli_mcp_reset_choices",
          "cli_mcp_reset_choices_settings_warnings_blocked",
        ),
        await flushAnalyticsSinks(),
        cliError()
      );
    let { error: y } = await updateSettingsForSource(
      "localSettings",
      {
        enabledMcpjsonServers: void 0,
        disabledMcpjsonServers: void 0,
        enableAllProjectMcpServers: void 0,
      },
      void 0,
      s,
    );
    if (y)
      return (
        printCliError(
          `Error: Failed to reset project choices: ${y.message} (legacy approvals in ~/.claude.json were cleared; local settings were not)`,
        ),
        await logFeatureBadAsync(
          "cli_mcp_reset_choices",
          "cli_mcp_reset_choices_settings_write_failed",
        ),
        await flushAnalyticsSinks(),
        cliError()
      );
  }
  await logFeatureOkAsync("cli_mcp_reset_choices");
  let m = null;
  try {
    let y = isRestrictedToPluginOnly("mcp");
    if (!doesEnterpriseMcpConfigExist()) {
      let {
          serverNames: i,
          pluginServerNames: k,
          rootServers: M,
        } = await collectProjectMcpServerNames(s),
        g = (b) => formatServerDisplayName(b, k.has(b)),
        C = [],
        O = [],
        j = 0;
      for (let b of i) {
        if (y && !k.has(b)) continue;
        let c = getProjectMcpServerApprovalStatus(b);
        if (c === "approved") {
          if (isMcpServerDisabled(b)) continue;
          let w = M[b];
          if (w && !isMcpServerAllowedByPolicy(b, w)) continue;
          C.push(g(b));
        } else if (c === "rejected") O.push(g(b));
        else j++;
      }
      m = {
        autoApprovedServers: C,
        stillRejectedServers: O,
        pendingCount: j,
        gatingErrors: getGatingSettingsErrors().length,
      };
    }
  } catch (y) {
    (logForDebugging(
      `mcp reset-project-choices: post-reset disclosure scan failed: ${l(y)}`,
      { level: "warn" },
    ),
      (m = null));
  }
  (h.render(
    e(RenderOnceAndExit, {
      children: r(Box, {
        flexDirection: "column",
        children: [
          e(Text, {
            children:
              "Project-scoped (.mcp.json) server approvals and rejections stored for this project have been reset.",
          }),
          m &&
            m.autoApprovedServers.length > 0 &&
            e(Text, {
              children: Oe(
                m.autoApprovedServers,
                "is still approved by other settings and will connect automatically without prompting.",
                "are still approved by other settings and will connect automatically without prompting.",
              ),
            }),
          m &&
            m.stillRejectedServers.length > 0 &&
            e(Text, {
              children: Oe(
                m.stillRejectedServers,
                "remains rejected by other settings and will not prompt.",
                "remain rejected by other settings and will not prompt.",
              ),
            }),
          m &&
            m.pendingCount > 0 &&
            (m.gatingErrors > 0
              ? e(Text, {
                  children:
                    "Settings errors are currently blocking the approval prompt \u2014 run `claude doctor` to list them, fix them, then restart Claude Code to be prompted.",
                })
              : e(Text, {
                  children:
                    "You will be prompted for approval next time you start Claude Code.",
                })),
        ],
      }),
    }),
  ),
    await h.waitUntilExit());
}
function Oe(h, s, v) {
  return h.length === 1
    ? `1 server (${h[0]}) ${s}`
    : `${h.length} servers (${h.join(", ")}) ${v}`;
}
export {
  mcpAddFromDesktopHandler,
  mcpAddJsonHandler,
  mcpGetHandler,
  mcpListHandler,
  mcpRemoveHandler,
  mcpResetChoicesHandler,
  mcpServeHandler,
};
