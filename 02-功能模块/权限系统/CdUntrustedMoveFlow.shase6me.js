// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 244 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { isPathTrusted } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { parseSettingsFileUncached, resolveLocalSettingsStoreRoot } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { findCanonicalGitRootUncached } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { Box, Text, Link, useTimeout } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { REFUSE_INPUT_WINDOW_MS, isRecent } from "../../01-核心基础设施/共享小工具-未细化/recent-window.js";
import { StatusIndicator } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { sanitizeForDisplay } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ConfirmPrompt } from "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import { NewMcpServerDialog, NewMcpServersDialog, getPendingMcpServers } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { getPermissionRulesFromSettings } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { getToolPermissionContext } from "./chunk-fjrcf22x.js";
import { recordDirectoryTrust, validateCdTarget, cdRuleRefusalMessage, relocateSession, reapplyProjectSettingsAfterTrustChange, withGatedGrantsApplied } from "../记忆-CLAUDE.md/chunk-br7dq41d.js";
import {
  hasHookSettings,
  collectAllowRules,
  collectAdditionalDirectories,
  formatListWithAnd,
  hasOtelHeadersHelper,
  hasApiKeyHelper,
  hasAwsAuthCommands,
  hasGcpAuthCommand,
  hasProxyAuthHelper,
} from "../状态栏-主题/trust-dialog-settings.js";
import { PermissionDialogFrame } from "./permission-dialog.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { getGatingSettingsErrors } from "../../01-核心基础设施/设置-配置/chunk-xy3cbvd8.js";
import { C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
import { resolve as so } from "path";
F();
import { join as le, resolve as ao } from "path";
function de(s, { backstop: a = !1 } = {}) {
  return (
    s.allowRules.sources.length > 0 ||
    s.additionalDirectories.sources.length > 0 ||
    (!a && (s.hookSources.length > 0 || s.commandHelperSources.length > 0))
  );
}
function ge() {
  return {
    allowRules: collectAllowRules(),
    additionalDirectories: collectAdditionalDirectories(),
    hookSources: [],
    commandHelperSources: [],
  };
}
function Oe(s) {
  let a = ao(s),
    l = resolveLocalSettingsStoreRoot(a, findCanonicalGitRootUncached),
    c = parseSettingsFileUncached(le(a, ".claude", "settings.json")).settings,
    u = le(l, ".claude", "settings.local.json"),
    h = le(a, ".claude", "settings.local.json"),
    v = [parseSettingsFileUncached(u).settings, ...(h === u ? [] : [parseSettingsFileUncached(h).settings])].filter(
      (S) => S !== null,
    ),
    w =
      v.length === 0
        ? null
        : {
            permissions: {
              additionalDirectories: v.flatMap(
                (S) => S.permissions?.additionalDirectories ?? [],
              ),
            },
          },
    g = { projectSettings: c, localSettings: w },
    G = {
      sources: [
        ["projectSettings", ".claude/settings.json"],
        ["localSettings", ".claude/settings.local.json"],
      ],
      read: (S) => g[S] ?? null,
      rules: (S) =>
        S === "localSettings"
          ? v.flatMap((io) => getPermissionRulesFromSettings(io, S))
          : getPermissionRulesFromSettings(g[S] ?? null, S),
    },
    i = (S) => hasApiKeyHelper(S) || hasAwsAuthCommands(S) || hasGcpAuthCommand(S) || hasOtelHeadersHelper(S) || hasProxyAuthHelper(S),
    m = [],
    ae = [];
  if (hasHookSettings(c)) m.push(".claude/settings.json");
  if (v.some(hasHookSettings)) m.push(".claude/settings.local.json");
  if (i(c)) ae.push(".claude/settings.json");
  if (v.some(i)) ae.push(".claude/settings.local.json");
  return {
    allowRules: collectAllowRules(G),
    additionalDirectories: collectAdditionalDirectories(G),
    hookSources: m,
    commandHelperSources: ae,
  };
}
function Po() {
  try {
    return ge();
  } catch (We) {
    let xt = We;
    logForDebugging(
      `/cd: reading the project settings for the backstop prompt failed: ${xt}`,
      { level: "error" },
    );
    return;
  }
}
function Do(Nt) {
  logForDebugging(`/cd: persisting trust failed: ${Nt}`, { level: "error" });
}
function E(pt) {
  let Le = _(7),
    { message: Fe, args: He, onDone: mt } = pt;
  useTimeout(mt, 0);
  let pe;
  if (Le[0] !== He)
    ((pe = r(Text, { dimColor: !0, children: [figures.pointer, " /cd ", He] })),
      (Le[0] = He),
      (Le[1] = pe));
  else pe = Le[1];
  let me;
  if (Le[2] !== Fe)
    ((me = e(ToolResultRow, { children: e(Text, { children: Fe }) })),
      (Le[2] = Fe),
      (Le[3] = me));
  else me = Le[3];
  let co;
  if (Le[4] !== pe || Le[5] !== me)
    ((co = r(Box, { flexDirection: "column", children: [pe, me] })),
      (Le[4] = pe),
      (Le[5] = me),
      (Le[6] = co));
  else co = Le[6];
  return co;
}
function CdTrustPrompt(ft) {
  let R = _(33),
    {
      directory: Xe,
      trustRoot: fe,
      disclosures: oe,
      backstop: lo,
      onConfirm: Ae,
      onCancel: Ve,
    } = ft,
    k = lo === void 0 ? !1 : lo,
    uo = C(!1),
    go;
  if (R[0] === MEMO_CACHE_SENTINEL) ((go = Date.now()), (R[0] = go));
  else go = R[0];
  let ht = C(go),
    po;
  if (R[1] === MEMO_CACHE_SENTINEL)
    ((po = (yt) => {
      if (uo.current || isRecent(ht.current, REFUSE_INPUT_WINDOW_MS)) {
        return;
      }
      ((uo.current = !0), yt());
    }),
      (R[1] = po));
  else po = R[1];
  let fo = po;
  const Be = k ? "Now in a new directory:" : "Moving to a new directory:";
  let he;
  if (R[2] !== Xe) ((he = sanitizeForDisplay(Xe)), (R[2] = Xe), (R[3] = he));
  else he = R[3];
  let ye;
  if (R[4] !== he)
    ((ye = e(Text, { bold: !0, children: he })), (R[4] = he), (R[5] = ye));
  else ye = R[5];
  let ve;
  if (R[6] !== fe)
    ((ve =
      fe != null &&
      r(Text, {
        children: [
          "This directory is part of the repository at",
          " ",
          e(Text, { bold: !0, children: sanitizeForDisplay(fe) }),
          ". Trusting it trusts that whole repository, including its other worktrees and subdirectories.",
        ],
      })),
      (R[6] = fe),
      (R[7] = ve));
  else ve = R[7];
  let Ce;
  if (R[8] !== k)
    ((Ce = k
      ? e(Text, {
          children:
            "Its settings declare project permission rules and/or additional directories. They apply only if you trust this directory explicitly (it is trusted through a parent directory so far).",
        })
      : r(N, {
          children: [
            r(Text, {
              children: [
                "This session hasn",
                "'",
                "t worked here before. Is this a directory you created or one you trust?",
              ],
            }),
            r(Text, {
              children: [
                "Claude Code",
                "'",
                "ll be able to read, edit, and execute files here.",
              ],
            }),
          ],
        })),
      (R[8] = k),
      (R[9] = Ce));
  else Ce = R[9];
  let Se;
  if (R[10] !== k || R[11] !== oe)
    ((Se =
      oe !== void 0 &&
      de(oe, { backstop: k }) &&
      e(Je, { disclosures: oe, backstop: k })),
      (R[10] = k),
      (R[11] = oe),
      (R[12] = Se));
  else Se = R[12];
  let ho;
  if (R[13] === MEMO_CACHE_SENTINEL)
    ((ho = e(Text, {
      dimColor: !0,
      children: e(Link, {
        url: "https://code.claude.com/docs/en/security",
        children: "Security guide",
      }),
    })),
      (R[13] = ho));
  else ho = R[13];
  const Ue = k ? "Yes, trust it and apply them" : "Yes, move here",
    Ee = k ? "No, keep them off" : "No, stay put";
  let we;
  if (R[14] !== Ae) ((we = () => fo(Ae)), (R[14] = Ae), (R[15] = we));
  else we = R[15];
  let je;
  if (R[16] !== Ve) ((je = () => fo(Ve)), (R[16] = Ve), (R[17] = je));
  else je = R[17];
  let Re;
  if (R[18] !== Ue || R[19] !== Ee || R[20] !== we || R[21] !== je)
    ((Re = e(ConfirmPrompt, {
      hideIndexes: !0,
      cancelFirst: !0,
      focus: "cancel",
      confirmLabel: Ue,
      cancelLabel: Ee,
      onConfirm: we,
      onCancel: je,
      windowMs: REFUSE_INPUT_WINDOW_MS,
    })),
      (R[18] = Ue),
      (R[19] = Ee),
      (R[20] = we),
      (R[21] = je),
      (R[22] = Re));
  else Re = R[22];
  let yo;
  if (R[23] === MEMO_CACHE_SENTINEL)
    ((yo = e(Text, {
      dimColor: !0,
      children: r(DotSeparatedList, {
        children: [
          e(KeybindingHint, { chord: "enter", action: "confirm" }),
          e(KeybindingHint, { chord: "escape", action: "cancel" }),
        ],
      }),
    })),
      (R[23] = yo));
  else yo = R[23];
  let Me;
  if (
    R[24] !== Re ||
    R[25] !== ye ||
    R[26] !== ve ||
    R[27] !== Ce ||
    R[28] !== Se
  )
    ((Me = r(Box, {
      flexDirection: "column",
      gap: 1,
      paddingTop: 1,
      children: [ye, ve, Ce, Se, ho, Re, yo],
    })),
      (R[24] = Re),
      (R[25] = ye),
      (R[26] = ve),
      (R[27] = Ce),
      (R[28] = Se),
      (R[29] = Me));
  else Me = R[29];
  let vo;
  if (R[30] !== Me || R[31] !== Be)
    ((vo = e(PermissionDialogFrame, {
      color: "warning",
      titleColor: "warning",
      title: Be,
      children: Me,
    })),
      (R[30] = Me),
      (R[31] = Be),
      (R[32] = vo));
  else vo = R[32];
  return vo;
}
function Je(vt) {
  let q = _(22),
    { disclosures: Ct, backstop: X } = vt,
    {
      allowRules: b,
      additionalDirectories: P,
      hookSources: be,
      commandHelperSources: Pe,
    } = Ct,
    De;
  if (q[0] !== b.rawCount || q[1] !== b.rules || q[2] !== b.sources)
    ((De =
      b.sources.length > 0 &&
      r(Text, {
        bold: !0,
        color: "warning",
        children: [
          e(StatusIndicator, { status: "warning", withSpace: !0 }),
          "This directory pre-approves ",
          b.rawCount,
          " ",
          pluralize(b.rawCount, "tool permission", "tool permissions"),
          " ",
          "in ",
          formatListWithAnd(b.sources),
          ":",
          " ",
          formatListWithAnd(b.rules, 8),
        ],
      })),
      (q[0] = b.rawCount),
      (q[1] = b.rules),
      (q[2] = b.sources),
      (q[3] = De));
  else De = q[3];
  let Te;
  if (q[4] !== P.dirs || q[5] !== P.rawCount || q[6] !== P.sources)
    ((Te =
      P.sources.length > 0 &&
      r(Text, {
        bold: !0,
        color: "warning",
        children: [
          e(StatusIndicator, { status: "warning", withSpace: !0 }),
          "This directory grants access to ",
          P.rawCount,
          " ",
          "additional",
          " ",
          pluralize(P.rawCount, "directory", "directories"),
          " ",
          "in ",
          formatListWithAnd(P.sources),
          ":",
          " ",
          formatListWithAnd(P.dirs, 6),
        ],
      })),
      (q[4] = P.dirs),
      (q[5] = P.rawCount),
      (q[6] = P.sources),
      (q[7] = Te));
  else Te = q[7];
  let Ge;
  if (q[8] !== X || q[9] !== be)
    ((Ge =
      !X &&
      be.length > 0 &&
      r(Text, {
        bold: !0,
        color: "warning",
        children: [
          e(StatusIndicator, { status: "warning", withSpace: !0 }),
          "This directory configures hooks that run commands, declared in",
          " ",
          formatListWithAnd(be),
        ],
      })),
      (q[8] = X),
      (q[9] = be),
      (q[10] = Ge));
  else Ge = q[10];
  let Ne;
  if (q[11] !== X || q[12] !== Pe)
    ((Ne =
      !X &&
      Pe.length > 0 &&
      r(Text, {
        bold: !0,
        color: "warning",
        children: [
          e(StatusIndicator, { status: "warning", withSpace: !0 }),
          "This directory runs commands on the session",
          "'",
          "s behalf (auth / header helpers), declared in",
          " ",
          formatListWithAnd(Pe),
        ],
      })),
      (q[11] = X),
      (q[12] = Pe),
      (q[13] = Ne));
  else Ne = q[13];
  const Ye = X
    ? "These apply to this session only if you trust it. Only proceed if you trust this configuration."
    : "These will apply to this session as soon as you move. Only proceed if you trust this configuration.";
  let ke;
  if (q[14] !== Ye)
    ((ke = e(Text, { dimColor: !0, children: Ye })), (q[14] = Ye), (q[15] = ke));
  else ke = q[15];
  let Co;
  if (
    q[16] !== De ||
    q[17] !== Te ||
    q[18] !== Ge ||
    q[19] !== Ne ||
    q[20] !== ke
  )
    ((Co = r(Box, { flexDirection: "column", children: [De, Te, Ge, Ne, ke] })),
      (q[16] = De),
      (q[17] = Te),
      (q[18] = Ge),
      (q[19] = Ne),
      (q[20] = ke),
      (q[21] = Co));
  else Co = q[21];
  return Co;
}
async function ut(s, a, l) {
  let c = (l ?? "").trim();
  if (!c)
    return e(E, {
      message: "Usage: /cd <path>",
      args: "",
      onDone: () => s("Usage: /cd <path>"),
    });
  let u = await validateCdTarget(c, getToolPermissionContext(a));
  switch (u.result) {
    case "not_found": {
      let i = `Couldn't find a directory at ${chalk.bold(u.path)}.`;
      return e(E, { message: i, args: c, onDone: () => s(i) });
    }
    case "not_a_directory": {
      let i = `${chalk.bold(u.path)} is not a directory. Did you mean ${chalk.bold(u.parent)}?`;
      return e(E, { message: i, args: c, onDone: () => s(i) });
    }
    case "same": {
      let i = `Already in ${chalk.bold(sanitizeForDisplay(u.directory))}.`;
      return e(E, { message: i, args: c, onDone: () => s(i) });
    }
    case "blocked_by_rule": {
      let i = cdRuleRefusalMessage(u.directory, u.check, chalk.bold, { display: sanitizeForDisplay });
      return e(E, { message: i, args: c, onDone: () => s(i) });
    }
    case "ok":
      break;
  }
  let h = u.directory,
    v = async () => {
      let i;
      try {
        i = await relocateSession(a.session, h, "cd_command", a.storageV5);
      } catch (m) {
        return (
          logForDebugging(`/cd relocate failed: ${m}`, { level: "error" }),
          s(
            `Couldn't move to ${chalk.bold(sanitizeForDisplay(h))} \u2014 the directory may no longer exist, or the session couldn't be moved. Staying in ${chalk.bold(sanitizeForDisplay(getCwd()))}.`,
          ),
          null
        );
      }
      try {
        a.retireDepartedAdditionalDirectories?.(
          i.departedAdditionalDirectories,
        );
      } catch (m) {
        logForDebugging(
          `/cd: retiring the previous project's additional directories failed (continuing): ${m}`,
          { level: "error" },
        );
      }
      return {
        modelMessage: i.modelMessage,
        pending: await Mo(a),
        projectGrantsGated: i.projectGrantsGated,
        gatedNotice: i.gatedNotice,
      };
    },
    w = async (i, m) => {
      if ((await bo(a), m?.persistFailed))
        logFeatureBad("mcp_project_approval_dialog", "mcp_approval_persist_failed");
      else if (m) logFeatureOk("mcp_project_approval_dialog");
      s(
        m?.persistFailed
          ? `Moved to ${chalk.bold(sanitizeForDisplay(h))}. One or more of your MCP server choices could not be saved (check permissions on .claude/settings.local.json) \u2014 you will be asked again next time.`
          : `Moved to ${chalk.bold(sanitizeForDisplay(h))}`,
        { display: "system", metaMessages: [i] },
      );
    };
  if (isPathTrusted(h)) {
    let i = await v();
    if (i === null) return null;
    if (i.projectGrantsGated) return e(ne, { outcome: i, onComplete: w });
    if (i.pending.pendingServers.length === 0)
      return (await w(i.modelMessage), null);
    return e(Y, {
      pending: i.pending,
      onComplete: (m) => void w(i.modelMessage, m),
    });
  }
  let g = findCanonicalGitRootUncached(so(h)),
    G;
  try {
    G = Oe(h);
  } catch (i) {
    logForDebugging(
      `/cd: reading the target's project settings for the trust prompt failed: ${i}`,
      { level: "error" },
    );
  }
  return e(CdUntrustedMoveFlow, {
    directory: h,
    trustRoot: g != null && g !== so(h) ? g : void 0,
    disclosures: G,
    onConfirm: async () => (
      await recordDirectoryTrust(h, a.storageV5).catch((i) => {
        logForDebugging(`/cd: persisting trust failed: ${i}`, { level: "error" });
      }),
      v()
    ),
    onComplete: w,
    onCancel: () => {
      s(`Staying in ${chalk.bold(sanitizeForDisplay(getCwd()))}`);
    },
  });
}
async function Mo(s) {
  let a = { pendingServers: [], pluginServerNames: new Set() };
  try {
    let l = await getPendingMcpServers(s.storageV5);
    if (l.pendingServers.length > 0 && getGatingSettingsErrors().length > 0)
      return (
        logForDebugging(
          "/cd: project MCP servers await approval but a settings file has errors; leaving them pending",
          { level: "warn" },
        ),
        a
      );
    return l;
  } catch (l) {
    return (
      logForDebugging(
        `/cd: collecting the new directory's project MCP servers failed (continuing without approvals): ${l}`,
        { level: "error" },
      ),
      a
    );
  }
}
async function bo(s) {
  try {
    await s.reloadPlugins?.();
  } catch (a) {
    logForDebugging(
      `/cd: refreshing plugins/MCP for the new directory failed (continuing): ${a}`,
      { level: "error" },
    );
  }
}
function Y(St) {
  let qe = _(11),
    { pending: J, onComplete: I } = St,
    [A, ...wt] = J.pendingServers;
  if (A !== void 0 && wt.length === 0) {
    let V;
    if (qe[0] !== A || qe[1] !== J.pluginServerNames)
      ((V = J.pluginServerNames.has(A)),
        (qe[0] = A),
        (qe[1] = J.pluginServerNames),
        (qe[2] = V));
    else V = qe[2];
    let So;
    if (qe[3] !== I || qe[4] !== A || qe[5] !== V)
      ((So = e(NewMcpServerDialog, { serverName: A, isPluginServer: V, onDone: I })),
        (qe[3] = I),
        (qe[4] = A),
        (qe[5] = V),
        (qe[6] = So));
    else So = qe[6];
    return So;
  }
  let V;
  if (
    qe[7] !== I ||
    qe[8] !== J.pendingServers ||
    qe[9] !== J.pluginServerNames
  )
    ((V = e(NewMcpServersDialog, {
      serverNames: J.pendingServers,
      pluginServerNames: J.pluginServerNames,
      onDone: I,
    })),
      (qe[7] = I),
      (qe[8] = J.pendingServers),
      (qe[9] = J.pluginServerNames),
      (qe[10] = V));
  else V = qe[10];
  return V;
}
function CdUntrustedMoveFlow(jt) {
  let te = _(18),
    {
      directory: Ie,
      trustRoot: Ke,
      disclosures: Qe,
      onConfirm: Ze,
      onComplete: H,
      onCancel: ze,
    } = jt,
    [T, Rt] = d(null);
  if (T !== null) {
    if (T.projectGrantsGated) {
      let M;
      if (te[0] !== T || te[1] !== H)
        ((M = e(ne, { outcome: T, onComplete: H })),
          (te[0] = T),
          (te[1] = H),
          (te[2] = M));
      else M = te[2];
      return M;
    }
    let M;
    if (te[3] !== T.modelMessage || te[4] !== H)
      ((M = (Mt) => void H(T.modelMessage, Mt)),
        (te[3] = T.modelMessage),
        (te[4] = H),
        (te[5] = M));
    else M = te[5];
    let re;
    if (te[6] !== T.pending || te[7] !== M)
      ((re = e(Y, { pending: T.pending, onComplete: M })),
        (te[6] = T.pending),
        (te[7] = M),
        (te[8] = re));
    else re = te[8];
    return re;
  }
  let M;
  if (te[9] !== H || te[10] !== Ze)
    ((M = () => {
      Ze().then((se) => {
        if (se === null) {
          return;
        }
        if (!se.projectGrantsGated && se.pending.pendingServers.length === 0) {
          return H(se.modelMessage);
        }
        Rt(se);
      });
    }),
      (te[9] = H),
      (te[10] = Ze),
      (te[11] = M));
  else M = te[11];
  let re;
  if (
    te[12] !== Ie ||
    te[13] !== Qe ||
    te[14] !== ze ||
    te[15] !== M ||
    te[16] !== Ke
  )
    ((re = e(CdTrustPrompt, {
      directory: Ie,
      trustRoot: Ke,
      disclosures: Qe,
      onConfirm: M,
      onCancel: ze,
    })),
      (te[12] = Ie),
      (te[13] = Qe),
      (te[14] = ze),
      (te[15] = M),
      (te[16] = Ke),
      (te[17] = re));
  else re = te[17];
  return re;
}
function ne(We) {
  let B = _(25),
    { outcome: j, onComplete: K } = We,
    { storageV5: eo } = useStorageV5Context(),
    [oo, bt] = d(j.modelMessage),
    [Pt, Dt] = d(!j.projectGrantsGated),
    [O] = d(getCwd),
    wo;
  if (B[0] !== O) ((wo = () => findCanonicalGitRootUncached(O)), (B[0] = O), (B[1] = wo));
  else wo = B[1];
  let [to] = d(wo),
    [ro] = d(Po);
  if (!Pt) {
    let U;
    if (B[2] !== K || B[3] !== j.pending.pendingServers.length)
      ((U = (jo) => {
        if ((bt(jo), Dt(!0), j.pending.pendingServers.length === 0)) K(jo);
      }),
        (B[2] = K),
        (B[3] = j.pending.pendingServers.length),
        (B[4] = U));
    else U = B[4];
    let Z = U;
    const z = to != null && to !== O ? to : void 0;
    let $e;
    if (B[5] !== O || B[6] !== Z || B[7] !== j || B[8] !== eo)
      (($e = () => {
        recordDirectoryTrust(O, eo)
          .catch(Do)
          .then(() => {
            try {
              reapplyProjectSettingsAfterTrustChange();
            } catch (W) {
              let Tt = W;
              logForDebugging(
                `/cd: re-applying the project settings after the trust change failed: ${Tt}`,
                { level: "error" },
              );
            }
            Z(withGatedGrantsApplied(j));
          });
      }),
        (B[5] = O),
        (B[6] = Z),
        (B[7] = j),
        (B[8] = eo),
        (B[9] = $e));
    else $e = B[9];
    let W;
    if (B[10] !== Z || B[11] !== j.modelMessage)
      ((W = () => Z(j.modelMessage)),
        (B[10] = Z),
        (B[11] = j.modelMessage),
        (B[12] = W));
    else W = B[12];
    let Ro;
    if (
      B[13] !== O ||
      B[14] !== ro ||
      B[15] !== z ||
      B[16] !== $e ||
      B[17] !== W
    )
      ((Ro = e(CdTrustPrompt, {
        backstop: !0,
        directory: O,
        trustRoot: z,
        disclosures: ro,
        onConfirm: $e,
        onCancel: W,
      })),
        (B[13] = O),
        (B[14] = ro),
        (B[15] = z),
        (B[16] = $e),
        (B[17] = W),
        (B[18] = Ro));
    else Ro = B[18];
    return Ro;
  }
  if (j.pending.pendingServers.length === 0) {
    return null;
  }
  let U;
  if (B[19] !== oo || B[20] !== K)
    ((U = (Gt) => void K(oo, Gt)), (B[19] = oo), (B[20] = K), (B[21] = U));
  else U = B[21];
  let z;
  if (B[22] !== j.pending || B[23] !== U)
    ((z = e(Y, { pending: j.pending, onComplete: U })),
      (B[22] = j.pending),
      (B[23] = U),
      (B[24] = z));
  else z = B[24];
  return z;
}
export { CdTrustPrompt, CdUntrustedMoveFlow, ut as call };
