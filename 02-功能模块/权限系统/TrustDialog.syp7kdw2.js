// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 241 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { VR, Dx, Aje } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { o, t, ct } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ae } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { qe, Bo, eu } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { useGlobalExitKeybinding } from "../../01-核心基础设施/共享小工具-未细化/exit-keybinding-hooks.js";
import { Pr, $s, an, getMcpConfigsByScope } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { shouldOfferTrustBackstop, getRepoHelperSources, getMarketplaceHelperSources } from "../../01-核心基础设施/设置-配置/marketplace-helper-sources.js";
import { ui, Gm, fa, $o } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { StatusIndicator } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { ConfirmPrompt } from "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import {
  getHookSettingsSourceFiles,
  collectAllowRules,
  collectAdditionalDirectories,
  getBashExecutionSourceFiles,
  formatListWithAnd,
  getOtelHeadersHelperSourceFiles,
  getAutoMemoryDirectorySourceFiles,
  getApiKeyHelperSourceFiles,
  getAwsCommandSourceFiles,
  getGcpCommandSourceFiles,
  getProxyAuthHelperSourceFiles,
  getDangerousEnvVarSourceFiles,
} from "../状态栏-主题/trust-dialog-settings.js";
import { PermissionDialogFrame } from "./permission-dialog.js";
import { isKbCohesionFixesEnabled } from "../../01-核心基础设施/共享小工具-未细化/kb-cohesion-fixes.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, V, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function Qt(Mt) {
  return Mt === qe || Mt.startsWith(qe + "(");
}
function Nt(Q) {
  return (
    Q.type === "prompt" &&
    Q.loadedFrom === "commands_DEPRECATED" &&
    (Q.source === "projectSettings" || Q.source === "localSettings") &&
    Q.allowedTools?.some(Qt)
  );
}
function Ut(Vt) {
  return Vt === qe || Vt.startsWith(qe + "(");
}
function Kt(b) {
  return (
    b.type === "prompt" &&
    (b.loadedFrom === "skills" || b.loadedFrom === "plugin") &&
    (b.source === "projectSettings" ||
      b.source === "localSettings" ||
      b.source === "plugin") &&
    b.allowedTools?.some(Ut)
  );
}
function qt(Eo) {
  return { ...Eo, hasTrustDialogAccepted: !0 };
}
function TrustDialog(wo) {
  let s = _(67),
    { onDone: I, commands: T } = wo,
    { storageV5: Ce } = useStorageV5Context(),
    it;
  if (s[0] === MEMO_CACHE_SENTINEL) ((it = getMcpConfigsByScope("project")), (s[0] = it));
  else it = s[0];
  let { servers: bo } = it,
    lt;
  if (s[1] === MEMO_CACHE_SENTINEL) ((lt = Object.keys(bo)), (s[1] = lt));
  else lt = s[1];
  let xe = lt.length > 0,
    ut;
  if (s[2] === MEMO_CACHE_SENTINEL) ((ut = getHookSettingsSourceFiles()), (s[2] = ut));
  else ut = s[2];
  let Se = ut.length > 0,
    pt;
  if (s[3] === MEMO_CACHE_SENTINEL) ((pt = getBashExecutionSourceFiles()), (s[3] = pt));
  else pt = s[3];
  let yo = pt,
    j = collectAllowRules(),
    B = j.sources.length > 0,
    A = collectAdditionalDirectories(),
    M = A.sources.length > 0,
    dt;
  if (s[4] === MEMO_CACHE_SENTINEL) ((dt = getApiKeyHelperSourceFiles()), (s[4] = dt));
  else dt = s[4];
  let De = dt.length > 0,
    ht;
  if (s[5] === MEMO_CACHE_SENTINEL) ((ht = getAwsCommandSourceFiles()), (s[5] = ht));
  else ht = s[5];
  let He = ht.length > 0,
    ft;
  if (s[6] === MEMO_CACHE_SENTINEL) ((ft = getGcpCommandSourceFiles()), (s[6] = ft));
  else ft = s[6];
  let ve = ft.length > 0,
    mt;
  if (s[7] === MEMO_CACHE_SENTINEL) ((mt = getOtelHeadersHelperSourceFiles()), (s[7] = mt));
  else mt = s[7];
  let Te = mt.length > 0,
    gt;
  if (s[8] === MEMO_CACHE_SENTINEL) ((gt = getProxyAuthHelperSourceFiles()), (s[8] = gt));
  else gt = s[8];
  let je = gt.length > 0,
    wt;
  if (s[9] === MEMO_CACHE_SENTINEL) {
    let bt = getMarketplaceHelperSources();
    let yt = getRepoHelperSources(bt);
    wt = {
      marketplaceHelperSources: bt,
      repoHelperSources: yt,
      offerBackstop: shouldOfferTrustBackstop(yt),
    };
    s[9] = wt;
  } else wt = s[9];
  let {
      marketplaceHelperSources: ko,
      repoHelperSources: kt,
      offerBackstop: Co,
    } = wt,
    Ae = ko.length > 0,
    G = kt.length > 0,
    Ct;
  if (s[10] === MEMO_CACHE_SENTINEL) ((Ct = getDangerousEnvVarSourceFiles()), (s[10] = Ct));
  else Ct = s[10];
  let Pe = Ct.length > 0,
    xt;
  if (s[11] === MEMO_CACHE_SENTINEL) ((xt = getAutoMemoryDirectorySourceFiles()), (s[11] = xt));
  else xt = s[11];
  let Re = xt.length > 0,
    St;
  if (s[12] !== T) ((St = T?.some(Nt) ?? !1), (s[12] = T), (s[13] = St));
  else St = s[13];
  let xo = St,
    Dt;
  if (s[14] !== T) ((Dt = T?.some(Kt) ?? !1), (s[14] = T), (s[15] = Dt));
  else Dt = s[15];
  let So = Dt,
    g = yo.length > 0 || xo || So,
    Ht;
  if (s[16] === MEMO_CACHE_SENTINEL) ((Ht = Bo()), (s[16] = Ht));
  else Ht = s[16];
  let vt = Ht,
    w = vt,
    _t,
    Tt;
  if (s[17] !== g)
    ((_t = () => {
      let Do = VR();
      logEvent("tengu_trust_dialog_shown", {
        isHomeDir: Do,
        hasMcpServers: xe,
        hasHooks: Se,
        hasBashExecution: g,
        hasProjectAllowRules: B,
        hasProjectAddDirs: M,
        hasApiKeyHelper: De,
        hasAwsCommands: He,
        hasGcpCommands: ve,
        hasOtelHeadersHelper: Te,
        hasProxyAuthHelper: je,
        hasMarketplaceHeadersHelper: Ae,
        hasRepoHeadersHelpers: G,
        hasDangerousEnvVars: Pe,
        hasAutoMemoryDirectory: Re,
      });
    }),
      (Tt = [xe, Se, g, B, M, De, He, ve, Te, je, Ae, G, Pe, Re]),
      (s[17] = g),
      (s[18] = _t),
      (s[19] = Tt));
  else ((_t = s[18]), (Tt = s[19]));
  E(_t, Tt);
  let K = C(!1),
    l = ui(),
    { refusedWithin: u, noteRefused: d, epoch: Ho } = $o(),
    jt;
  if (s[20] !== l || s[21] !== d || s[22] !== u)
    ((jt = function q() {
      if (l() || u()) {
        return (d(), !0);
      }
      return !1;
    }),
      (s[20] = l),
      (s[21] = d),
      (s[22] = u),
      (s[23] = jt));
  else jt = s[23];
  let q = jt,
    Ee = Gm(),
    Ie = fa(Ho),
    At;
  if (
    s[24] !== g ||
    s[25] !== w ||
    s[26] !== l ||
    s[27] !== d ||
    s[28] !== I ||
    s[29] !== u ||
    s[30] !== Ce
  )
    ((At = function c(vo) {
      if (K.current || $s()) {
        return;
      }
      if (l() || u()) {
        d();
        return;
      }
      if (((K.current = !0), vo === "exit")) {
        if (w) {
          (logFeatureBad("onboarding_trust_dialog", "gated_grants_backstop_declined"), I());
          return;
        }
        (logFeatureBad("onboarding_trust_dialog", "onboarding_trust_denied"), Pr(1));
        return;
      }
      let Pt = VR();
      if (
        (logFeatureOk("onboarding_trust_dialog"),
        logEvent("tengu_trust_dialog_accept", {
          isHomeDir: Pt,
          hasMcpServers: xe,
          hasHooks: Se,
          hasBashExecution: g,
          hasProjectAllowRules: B,
          hasProjectAddDirs: M,
          hasApiKeyHelper: De,
          hasAwsCommands: He,
          hasGcpCommands: ve,
          hasOtelHeadersHelper: Te,
          hasProxyAuthHelper: je,
          hasMarketplaceHeadersHelper: Ae,
          hasRepoHeadersHelpers: G,
          hasDangerousEnvVars: Pe,
          hasAutoMemoryDirectory: Re,
        }),
        Pt)
      )
        (Dx(!0), Aje(!0));
      else eu(qt, Ce);
      I();
    }),
      (s[24] = g),
      (s[25] = w),
      (s[26] = l),
      (s[27] = d),
      (s[28] = I),
      (s[29] = u),
      (s[30] = Ce),
      (s[31] = At));
  else At = s[31];
  let c = At,
    Rt;
  if (s[32] === MEMO_CACHE_SENTINEL)
    ((Rt = () => {
      ((K.current = !0), Pr(1));
    }),
      (s[32] = Rt));
  else Rt = s[32];
  let P = useGlobalExitKeybinding(Rt),
    Et;
  if (s[33] !== w || s[34] !== l || s[35] !== d || s[36] !== c || s[37] !== u)
    ((Et = () => {
      if (isKbCohesionFixesEnabled()) {
        c("exit");
        return;
      }
      if (w) {
        c("exit");
        return;
      }
      if (l() || u()) {
        d();
        return;
      }
      if (K.current || $s()) {
        return;
      }
      ((K.current = !0), Pr(0));
    }),
      (s[33] = w),
      (s[34] = l),
      (s[35] = d),
      (s[36] = c),
      (s[37] = u),
      (s[38] = Et));
  else Et = s[38];
  let It;
  if (s[39] === MEMO_CACHE_SENTINEL) ((It = { context: "Confirmation" }), (s[39] = It));
  else It = s[39];
  if ((useKeybinding("confirm:no", Et, It), vt && !Co)) {
    return (queueMicrotask(I), null);
  }
  const Be = PermissionDialogFrame,
    _o = "warning",
    To = "warning",
    jo = "Accessing workspace:",
    Fe = o,
    Ao = "column",
    Po = 1,
    Ro = 1;
  let ce, le, pe;
  if (s[40] === MEMO_CACHE_SENTINEL)
    ((ce = e(t, { bold: !0, children: an(ae().cwd()) })),
      (le = r(t, {
        children: [
          "Quick safety check: Is this a project you created or one you trust? (Like your own code, a well-known open source project, or work from your team). If not, take a moment to review what",
          "'",
          "s in this folder first.",
        ],
      })),
      (pe = r(t, {
        children: [
          "Claude Code",
          "'",
          "ll be able to read, edit, and execute files here.",
        ],
      })),
      (s[40] = ce),
      (s[41] = le),
      (s[42] = pe));
  else ((ce = s[40]), (le = s[41]), (pe = s[42]));
  const Me =
    (B || M || G) &&
    r(o, {
      flexDirection: "column",
      children: [
        B &&
          r(N, {
            children: [
              r(t, {
                bold: !0,
                color: "warning",
                children: [
                  e(StatusIndicator, { status: "warning", withSpace: !0 }),
                  "This folder pre-approves ",
                  j.rawCount,
                  " ",
                  pluralize(j.rawCount, "tool permission"),
                  " in",
                  " ",
                  formatListWithAnd(j.sources),
                  ":",
                ],
              }),
              r(t, {
                children: [
                  "  ",
                  j.rules.length > 0
                    ? formatListWithAnd(j.rules, 8)
                    : "(rule names contain unprintable characters)",
                ],
              }),
            ],
          }),
        M &&
          r(N, {
            children: [
              r(t, {
                bold: !0,
                color: "warning",
                children: [
                  e(StatusIndicator, { status: "warning", withSpace: !0 }),
                  "This folder adds ",
                  A.rawCount,
                  " ",
                  pluralize(A.rawCount, "directory", "directories"),
                  " ",
                  "to the workspace in",
                  " ",
                  formatListWithAnd(A.sources),
                  ":",
                ],
              }),
              r(t, {
                children: [
                  "  ",
                  A.dirs.length > 0
                    ? formatListWithAnd(A.dirs, 6)
                    : "(directory names contain unprintable characters)",
                ],
              }),
            ],
          }),
        G &&
          r(t, {
            bold: !0,
            color: "warning",
            children: [
              e(StatusIndicator, { status: "warning", withSpace: !0 }),
              "This folder runs commands to mint HTTP headers (headersHelper), declared in ",
              formatListWithAnd(kt),
            ],
          }),
        e(t, {
          dimColor: !0,
          children:
            "These will apply without asking. Only proceed if you trust this configuration.",
        }),
      ],
    });
  let Bt;
  if (s[43] === MEMO_CACHE_SENTINEL)
    ((Bt = e(t, {
      dimColor: !0,
      children: e(ct, {
        url: "https://code.claude.com/docs/en/security",
        children: "Security guide",
      }),
    })),
      (s[43] = Bt));
  else Bt = s[43];
  let de, he;
  if (s[44] !== c)
    ((de = () => c("enable_all")),
      (he = () => c("exit")),
      (s[44] = c),
      (s[45] = de),
      (s[46] = he));
  else ((de = s[45]), (he = s[46]));
  let fe;
  if (
    s[47] !== Ie.remountKey ||
    s[48] !== q ||
    s[49] !== Ee ||
    s[50] !== de ||
    s[51] !== he
  )
    ((fe = e(
      ConfirmPrompt,
      {
        refuseInput: q,
        openedAt: Ee,
        hideIndexes: !0,
        cancelFirst: !0,
        focus: "cancel",
        confirmLabel: "Yes, I trust this folder",
        cancelLabel: w ? "No, continue without these permissions" : "No, exit",
        onConfirm: de,
        onCancel: he,
      },
      Ie.remountKey,
    )),
      (s[47] = Ie.remountKey),
      (s[48] = q),
      (s[49] = Ee),
      (s[50] = de),
      (s[51] = he),
      (s[52] = fe));
  else fe = s[52];
  let me;
  if (s[53] !== P.keyName || s[54] !== P.pending)
    ((me = e(t, {
      dimColor: !0,
      children: P.pending
        ? r(N, { children: ["Press ", P.keyName, " again to exit"] })
        : r(DotSeparatedList, {
            children: [
              e(KeybindingHint, { chord: "enter", action: "confirm" }),
              e(KeybindingHint, { chord: "escape", action: "cancel" }),
            ],
          }),
    })),
      (s[53] = P.keyName),
      (s[54] = P.pending),
      (s[55] = me));
  else me = s[55];
  let ge;
  if (
    s[56] !== Fe ||
    s[57] !== ce ||
    s[58] !== le ||
    s[59] !== pe ||
    s[60] !== Me ||
    s[61] !== fe ||
    s[62] !== me
  )
    ((ge = r(Fe, {
      flexDirection: Ao,
      gap: Po,
      paddingTop: Ro,
      children: [ce, le, pe, Me, Bt, fe, me],
    })),
      (s[56] = Fe),
      (s[57] = ce),
      (s[58] = le),
      (s[59] = pe),
      (s[60] = Me),
      (s[61] = fe),
      (s[62] = me),
      (s[63] = ge));
  else ge = s[63];
  let Ft;
  if (s[64] !== Be || s[65] !== ge)
    ((Ft = e(Be, { color: _o, titleColor: To, title: jo, children: ge })),
      (s[64] = Be),
      (s[65] = ge),
      (s[66] = Ft));
  else Ft = s[66];
  return Ft;
}
export { TrustDialog };
