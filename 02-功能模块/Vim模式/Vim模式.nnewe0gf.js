// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ie, Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { j, Gt, uOn, aMn, lMn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { A, Jr } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { repeatString, countOccurrences, normalizeIdeographicSpaces } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { CLAUDE_BULLET_GLYPH, SEARCH_PREFIX_GLYPH, LOZENGE_OUTLINE_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { Zd } from "../../00-第三方库/_未识别/chunk-hm8z9h7j.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { useResolvedTheme, getCurrentKillRingText, getNextKillRingEntry, useKillRing } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { isSemverGreaterThan, isSemverAtLeast, getVersionForAnalytics, isClaudeAISubscriber, getSubscriptionName, getGlobalConfig, isAutoUpdaterDisabled } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { formatPathForDisplay } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { execFileNoThrowWithCwd } from "../工作树-Git/git-exec-hardening.js";
import { getStringWidth, wrapAnsi, truncatePathMiddle, truncateToWidth, truncateStartToWidth, truncateToWidthNoEllipsis, truncate } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { getInitialSettings, getSecuritySensitiveSetting } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { THIRD_PARTY_PROVIDER_LABELS, getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { resolveSetting } from "../上下文压缩-Compact/resolve-user-intent-setting.js";
import { Box, Text, Link, useAnimationFrame, useInterval, useTimeout } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { getNativeCopyModifierKey, getClipboardCopyStrategy, probeLinuxClipboardTool, getOsc52Utf8PasteWarning } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { lF } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { getClaimRegistry } from "../../01-核心基础设施/共享小工具-未细化/host-claim-registry.js";
import { useClock } from "../../01-核心基础设施/共享小工具-未细化/use-clock.js";
import {
  useCursorDeclaration,
  supportsShiftEnter,
  hasUsedBackslashReturn,
  isWordChar,
  isWhitespace,
  isPunctuation,
  TextCursor,
  useTextInput,
  quantizeToEighth,
  interpolateColor,
  formatRgbColor,
  useVoiceLevelMeter,
} from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { useStoreSelector } from "../../01-核心基础设施/共享小工具-未细化/use-store-selector.js";
import { useAppStateSelector, useSetAppState } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { shouldShowNotification, useNotificationQueue } from "../../03-入口与运行时/会话UI-REPL/notification-queue.js";
import { getConnectedIdeClient, isVoiceEnabled, hasVoiceAuth, isVoiceModeAllowed } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { useKeybindingContext } from "../键位绑定-Keybindings/keybinding-context.js";
import { useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { registerMcpNotificationHandler } from "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import { useSession } from "../../01-核心基础设施/共享小工具-未细化/session-context.js";
import { useHasNonAutocompleteOverlay } from "../../01-核心基础设施/共享小工具-未细化/overlay-registry.js";
import { useVoiceSelector, useVoiceSetState, useVoiceGetState } from "../../01-核心基础设施/共享小工具-未细化/voice-state-provider.js";
import { formatKeybindingKeyForPlatform, keybindingStore, getActiveKeybindings, getKeybindingPlatform, isSameKeySpec } from "../键位绑定-Keybindings/键位绑定-Keybindings.sanfja6a.js";
import {
  applyLocalUpdate,
  localInstallExists,
  getRemainingStartupDelay,
  isAutoUpdateCheckThrottled,
  getMaxVersion,
  getMaxVersionConfig,
  shouldForceDowngrade,
  getMaxVersionExternalMessage,
  shouldSkipVersion,
  fetchNpmPackageVersion,
  fetchVersionFromGcs,
  fetchVersionHomebrewOrGcs,
  getUpdateRestoreFailure,
  applyGlobalUpdate,
} from "../自动更新-安装/auto-updater.js";
import { recordUpdateResult, getHomebrewCaskName, getPackageManager, hasDetectedInstallType, detectInstallType } from "../自动更新-安装/install-diagnostics.js";
import { ManifestSignatureError, StallTimeoutError, StagedBinaryChecksumError, installLatest, removeInstalledSymlink } from "../自动更新-安装/native-installer.js";
import { StatusIndicator, shouldReduceMotion } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import { useSettings } from "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { getAutoUpdatesChannel } from "../自动更新-安装/auto-updates-channel.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Yl, re, E, vr, dn, V, C, d, At, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { pg } from "../../00-第三方库/semver/chunk-jm5cswvd.js";
import { s, T, c, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getGraphemeSegmenter, getFirstGrapheme, getLastGrapheme, countGraphemes, countWords } from "../../01-核心基础设施/共享小工具-未细化/intl-text-utils.js";
import { getBuildRefName } from "../../01-核心基础设施/共享小工具-未细化/build-ref-name.js";
import { toESM, MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
class Wo {
  #e = { credentialsPersisted: 0, loginCompleted: 0 };
  #t = Le();
  subscribe = (l) => this.#t.subscribe(l);
  getSnapshot = () => this.#e;
  credentialsPersisted() {
    ((this.#e = {
      ...this.#e,
      credentialsPersisted: this.#e.credentialsPersisted + 1,
    }),
      this.#t.emit());
  }
  loginCompleted() {
    ((this.#e = { ...this.#e, loginCompleted: this.#e.loginCompleted + 1 }),
      this.#t.emit());
  }
}
var authStateStore = new Gt(() => new Wo());
F();
var bn = /\s+/g,
  na = 5;
function Qo(l) {
  if (l.startsWith("file-")) return "+";
  if (l.startsWith("mcp-resource-")) return LOZENGE_OUTLINE_GLYPH;
  if (l.startsWith("mcp-template")) return LOZENGE_OUTLINE_GLYPH;
  if (l.startsWith("agent-")) return "*";
  return "+";
}
function Zo(l, b, x = !1) {
  let O = l.toLowerCase();
  if (O.length !== l.length) return [];
  let R = O.indexOf(b);
  if (R !== -1) return ts(l, [[R, R + b.length]]);
  if (x) return [];
  let v = [],
    w = 0;
  for (let S of b) {
    let M = O.indexOf(S, w);
    if (M === -1) return [];
    let D = M + S.length,
      P = v.at(-1);
    if (P && P[1] === M) P[1] = D;
    else v.push([M, D]);
    w = D;
  }
  return ts(l, v);
}
function Nt(vl) {
  let Ui = _(13),
    {
      text: kt,
      query: Wr,
      color: mn,
      isSelected: Kr,
      bold: gn,
      contiguousOnly: Ko,
    } = vl,
    Wi,
    jo;
  if (
    Ui[0] !== gn ||
    Ui[1] !== mn ||
    Ui[2] !== Ko ||
    Ui[3] !== Kr ||
    Ui[4] !== Wr ||
    Ui[5] !== kt
  ) {
    jo = EARLY_RETURN_SENTINEL;
    bb0: {
      let Ki = Wr ? Zo(kt, Wr, Ko) : [];
      if (Ki.length === 0) {
        const Fo = !Kr;
        let ji;
        if (Ui[8] !== gn || Ui[9] !== mn || Ui[10] !== Fo || Ui[11] !== kt)
          ((ji = e(Text, { color: mn, dimColor: Fo, bold: gn, children: kt })),
            (Ui[8] = gn),
            (Ui[9] = mn),
            (Ui[10] = Fo),
            (Ui[11] = kt),
            (Ui[12] = ji));
        else ji = Ui[12];
        jo = ji;
        break bb0;
      }
      let Fi = [];
      let Bo = ($o, $i, Bi) => {
        if ($o >= $i) {
          return;
        }
        Fi.push(
          e(
            Text,
            {
              color: mn,
              dimColor: !Bi && !Kr,
              bold: gn || Bi,
              children: kt.slice($o, $i),
            },
            $o,
          ),
        );
      };
      let Ho = 0;
      for (const [Hi, Gi] of Ki) (Bo(Ho, Hi, !1), Bo(Hi, Gi, !0), (Ho = Gi));
      Bo(Ho, kt.length, !1);
      Wi = e(N, { children: Fi });
    }
    ((Ui[0] = gn),
      (Ui[1] = mn),
      (Ui[2] = Ko),
      (Ui[3] = Kr),
      (Ui[4] = Wr),
      (Ui[5] = kt),
      (Ui[6] = Wi),
      (Ui[7] = jo));
  } else ((Wi = Ui[6]), (jo = Ui[7]));
  if (jo !== EARLY_RETURN_SENTINEL) return jo;
  return Wi;
}
function qr(l) {
  return (
    l.startsWith("file-") ||
    l.startsWith("mcp-resource-") ||
    l.startsWith("mcp-template") ||
    l.startsWith("agent-")
  );
}
var ns = Yl(function (Tl) {
  let Ue = _(95),
    { item: fe, maxColumnWidth: Cl, isSelected: $e, allowWrap: qi } = Tl,
    Go = qi === void 0 ? !0 : qi,
    _t = useTerminalSize().columns;
  if (qr(fe.id)) {
    let Nn;
    if (Ue[0] !== fe.id) ((Nn = Qo(fe.id)), (Ue[0] = fe.id), (Ue[1] = Nn));
    else Nn = Ue[1];
    let zi = Nn;
    let qo = $e ? "suggestion" : void 0;
    let zo = !$e;
    let Rl = fe.id.startsWith("file-");
    let wl = fe.id.startsWith("mcp-resource-");
    let Mt;
    if (Ue[2] !== fe.id)
      ((Mt = fe.id.startsWith("mcp-template-value::")),
        (Ue[2] = fe.id),
        (Ue[3] = Mt));
    else Mt = Ue[3];
    let jr = Mt;
    let Sl = fe.id.startsWith("mcp-template::");
    let Yi = fe.description ? 3 : 0;
    let hn;
    if (Rl || Sl || jr) {
      let tt;
      if (Ue[4] !== fe.description)
        ((tt = fe.description ? Math.min(20, getStringWidth(fe.description)) : 0),
          (Ue[4] = fe.description),
          (Ue[5] = tt));
      else tt = Ue[5];
      let kl = tt;
      let Fr = _t - 2 - 4 - Yi - kl;
      let Pn;
      if (Ue[6] !== jr || Ue[7] !== fe.displayText || Ue[8] !== Fr)
        ((Pn = jr ? truncateStartToWidth(fe.displayText, Fr) : truncatePathMiddle(fe.displayText, Fr)),
          (Ue[6] = jr),
          (Ue[7] = fe.displayText),
          (Ue[8] = Fr),
          (Ue[9] = Pn));
      else Pn = Ue[9];
      hn = Pn;
    } else if (wl) {
      let tt;
      if (Ue[10] !== fe.displayText)
        ((tt = truncateToWidth(fe.displayText, 30)),
          (Ue[10] = fe.displayText),
          (Ue[11] = tt));
      else tt = Ue[11];
      hn = tt;
    } else hn = fe.displayText;
    let _l = _t - 2 - getStringWidth(hn) - Yi - 4;
    let Dn;
    if (fe.description) {
      let Yo = Math.max(0, _l);
      let tt;
      if (Ue[12] !== fe.description || Ue[13] !== Yo)
        ((tt = truncateToWidth(fe.description.replace(bn, " "), Yo)),
          (Ue[12] = fe.description),
          (Ue[13] = Yo),
          (Ue[14] = tt));
      else tt = Ue[14];
      let Il = tt;
      Dn = `${zi} ${hn} \u2013 ${Il}`;
    } else Dn = `${zi} ${hn}`;
    let tt;
    if (Ue[15] !== zo || Ue[16] !== Dn || Ue[17] !== qo)
      ((tt = e(Text, { color: qo, dimColor: zo, wrap: "truncate", children: Dn })),
        (Ue[15] = zo),
        (Ue[16] = Dn),
        (Ue[17] = qo),
        (Ue[18] = tt));
    else tt = Ue[18];
    return tt;
  }
  let Ml =
      fe.description || fe.tag || fe.kind !== void 0 || fe.sourceTag
        ? Math.floor(_t * 0.4)
        : _t - 4,
    it = Math.min(Cl ?? getStringWidth(fe.displayText) + 5, Ml),
    ft = fe.color || ($e ? "suggestion" : void 0),
    Et = !$e,
    Nn;
  if (Ue[19] !== fe.id)
    ((Nn = fe.id.startsWith("emoji:")), (Ue[19] = fe.id), (Ue[20] = Nn));
  else Nn = Ue[20];
  let Xi = Nn,
    Ht = Xi ? ($e ? `${figures.pointer} ` : "  ") : "",
    Xo = getStringWidth(Ht),
    Je = Xi && $e,
    He = fe.displayText;
  if (getStringWidth(He) > it - 2) {
    let Mt;
    if (Ue[21] !== it || Ue[22] !== He)
      ((Mt =
        He.includes("/") || He.includes("\\")
          ? truncateStartToWidth(He, it - 2)
          : truncateToWidth(He, it - 2)),
        (Ue[21] = it),
        (Ue[22] = He),
        (Ue[23] = Mt));
    else Mt = Ue[23];
    He = Mt;
  }
  let Mt;
  if (Ue[24] !== it || Ue[25] !== He || Ue[26] !== Xo)
    ((Mt = " ".repeat(Math.max(0, it - getStringWidth(He) - Xo))),
      (Ue[24] = it),
      (Ue[25] = He),
      (Ue[26] = Xo),
      (Ue[27] = Mt));
  else Mt = Ue[27];
  let Wn = Mt,
    qt = fe.tag ? `[${fe.tag}] ` : "",
    $r = getStringWidth(qt),
    zt,
    Vt,
    Lt,
    tt,
    Pn;
  if (Ue[28] !== fe) {
    let { kindLaneText: Br, kindLabel: Ji, sourceText: Kn } = zr(fe);
    Vt = Br;
    Lt = Kn;
    zt = Ji === "skill" ? "skill" : Ji === "agent" ? "background" : void 0;
    tt = getStringWidth(Vt);
    Pn = getStringWidth(Lt);
    ((Ue[28] = fe),
      (Ue[29] = zt),
      (Ue[30] = Vt),
      (Ue[31] = Lt),
      (Ue[32] = tt),
      (Ue[33] = Pn));
  } else
    ((zt = Ue[29]), (Vt = Ue[30]), (Lt = Ue[31]), (tt = Ue[32]), (Pn = Ue[33]));
  let Hr = tt + Pn,
    Gr = Math.max(0, _t - it - $r - Hr - 4),
    jn,
    Fn,
    $n,
    Br,
    Kn;
  if (
    Ue[34] !== Go ||
    Ue[35] !== Je ||
    Ue[36] !== _t ||
    Ue[37] !== Gr ||
    Ue[38] !== it ||
    Ue[39] !== He ||
    Ue[40] !== $e ||
    Ue[41] !== fe.description ||
    Ue[42] !== fe.query ||
    Ue[43] !== zt ||
    Ue[44] !== Vt ||
    Ue[45] !== Hr ||
    Ue[46] !== Wn ||
    Ue[47] !== Ht ||
    Ue[48] !== Et ||
    Ue[49] !== Lt ||
    Ue[50] !== qt ||
    Ue[51] !== $r ||
    Ue[52] !== ft
  ) {
    Kn = EARLY_RETURN_SENTINEL;
    bb0: {
      let Qi = fe.description ? fe.description.replace(bn, " ").trim() : "";
      let [El, Zi] = Go ? es(Qi, Gr) : [truncateToWidth(Qi, Gr), ""];
      jn = $e ? "suggestion" : void 0;
      let Yt;
      if (Ue[58] !== Je || Ue[59] !== Ht || Ue[60] !== Et || Ue[61] !== ft)
        ((Yt = Ht
          ? e(Text, { color: ft, dimColor: Et, bold: Je, children: Ht })
          : null),
          (Ue[58] = Je),
          (Ue[59] = Ht),
          (Ue[60] = Et),
          (Ue[61] = ft),
          (Ue[62] = Yt));
      else Yt = Ue[62];
      let Xt;
      if (
        Ue[63] !== Je ||
        Ue[64] !== He ||
        Ue[65] !== $e ||
        Ue[66] !== fe.query ||
        Ue[67] !== ft
      )
        ((Xt = e(Nt, {
          text: He,
          query: fe.query,
          color: ft,
          isSelected: $e,
          bold: Je,
        })),
          (Ue[63] = Je),
          (Ue[64] = He),
          (Ue[65] = $e),
          (Ue[66] = fe.query),
          (Ue[67] = ft),
          (Ue[68] = Xt));
      else Xt = Ue[68];
      let Jt;
      if (Ue[69] !== Je || Ue[70] !== Wn || Ue[71] !== Et || Ue[72] !== ft)
        ((Jt = e(Text, { color: ft, dimColor: Et, bold: Je, children: Wn })),
          (Ue[69] = Je),
          (Ue[70] = Wn),
          (Ue[71] = Et),
          (Ue[72] = ft),
          (Ue[73] = Jt));
      else Jt = Ue[73];
      let Bn;
      if (Ue[74] !== zt || Ue[75] !== Vt)
        ((Bn = Vt
          ? e(Text, { color: zt, dimColor: zt === void 0, children: Vt })
          : null),
          (Ue[74] = zt),
          (Ue[75] = Vt),
          (Ue[76] = Bn));
      else Bn = Ue[76];
      let ea;
      if (Ue[77] !== qt)
        ((ea = qt ? e(Text, { dimColor: !0, children: qt }) : null),
          (Ue[77] = qt),
          (Ue[78] = ea));
      else ea = Ue[78];
      let ta;
      if (Ue[79] !== Lt)
        ((ta = Lt ? e(Text, { dimColor: !0, children: Lt }) : null),
          (Ue[79] = Lt),
          (Ue[80] = ta));
      else ta = Ue[80];
      Fn = r(Text, {
        wrap: "truncate",
        children: [
          Yt,
          Xt,
          Jt,
          Bn,
          ea,
          ta,
          e(Nt, {
            text: El,
            query: fe.query,
            color: jn,
            isSelected: $e,
            bold: Je,
            contiguousOnly: !0,
          }),
        ],
      });
      if (!Zi) {
        Kn = Fn;
        break bb0;
      }
      $n = it + $r + Hr;
      Br = truncateToWidth(Zi, Math.max(0, _t - $n - 4));
    }
    ((Ue[34] = Go),
      (Ue[35] = Je),
      (Ue[36] = _t),
      (Ue[37] = Gr),
      (Ue[38] = it),
      (Ue[39] = He),
      (Ue[40] = $e),
      (Ue[41] = fe.description),
      (Ue[42] = fe.query),
      (Ue[43] = zt),
      (Ue[44] = Vt),
      (Ue[45] = Hr),
      (Ue[46] = Wn),
      (Ue[47] = Ht),
      (Ue[48] = Et),
      (Ue[49] = Lt),
      (Ue[50] = qt),
      (Ue[51] = $r),
      (Ue[52] = ft),
      (Ue[53] = jn),
      (Ue[54] = Fn),
      (Ue[55] = $n),
      (Ue[56] = Br),
      (Ue[57] = Kn));
  } else
    ((jn = Ue[53]), (Fn = Ue[54]), ($n = Ue[55]), (Br = Ue[56]), (Kn = Ue[57]));
  if (Kn !== EARLY_RETURN_SENTINEL) return Kn;
  let Jo = Br,
    Yt;
  if (Ue[81] !== $n) ((Yt = " ".repeat($n)), (Ue[81] = $n), (Ue[82] = Yt));
  else Yt = Ue[82];
  let Xt;
  if (
    Ue[83] !== Je ||
    Ue[84] !== jn ||
    Ue[85] !== Jo ||
    Ue[86] !== $e ||
    Ue[87] !== fe.query
  )
    ((Xt = e(Nt, {
      text: Jo,
      query: fe.query,
      color: jn,
      isSelected: $e,
      bold: Je,
      contiguousOnly: !0,
    })),
      (Ue[83] = Je),
      (Ue[84] = jn),
      (Ue[85] = Jo),
      (Ue[86] = $e),
      (Ue[87] = fe.query),
      (Ue[88] = Xt));
  else Xt = Ue[88];
  let Jt;
  if (Ue[89] !== Yt || Ue[90] !== Xt)
    ((Jt = r(Text, { wrap: "truncate", children: [Yt, Xt] })),
      (Ue[89] = Yt),
      (Ue[90] = Xt),
      (Ue[91] = Jt));
  else Jt = Ue[91];
  let Bn;
  if (Ue[92] !== Fn || Ue[93] !== Jt)
    ((Bn = r(Box, { flexDirection: "column", children: [Fn, Jt] })),
      (Ue[92] = Fn),
      (Ue[93] = Jt),
      (Ue[94] = Bn));
  else Bn = Ue[94];
  return Bn;
});
function SuggestionList({
  suggestions: l,
  selectedSuggestion: b,
  maxColumnWidth: x,
  emptyMessage: O,
  overlay: R,
  noPad: v,
  onSelect: w,
  hoveredId: S,
  onHoverChange: M,
}) {
  let { rows: D, columns: P } = useTerminalSize(),
    H = R ? na : Math.max(1, Math.min(Math.max(6, Math.floor(D / 2)), D - 3));
  if (l.length === 0) {
    if (!O) return null;
    let ne = v ? 0 : Math.max(0, H - 1);
    return r(Box, {
      flexDirection: "column",
      justifyContent: R ? void 0 : "flex-end",
      children: [
        e(EmptyStateMessage, { children: O }),
        Array.from({ length: ne }, (be, ge) =>
          e(Text, { children: " " }, `pad-${ge}`),
        ),
      ],
    });
  }
  let B = x ?? Math.max(...l.map((ne) => getStringWidth(ne.displayText))) + 5,
    q = H >= 2,
    ie = l.map((ne) => (q ? ra(ne, P, B) : 1)),
    Te = Math.max(0, Math.min(b, l.length - 1)),
    Z = Te,
    me = Te + 1,
    G = ie[Te] ?? 1,
    oe = 0,
    J = Math.floor(H / 2);
  while (Z > 0 && G < H && oe + (ie[Z - 1] ?? 1) <= J)
    (Z--, (oe += ie[Z] ?? 1));
  G += oe;
  while (me < l.length && G + (ie[me] ?? 1) <= H) ((G += ie[me] ?? 1), me++);
  while (Z > 0 && G + (ie[Z - 1] ?? 1) <= H) (Z--, (G += ie[Z] ?? 1));
  let ye = l.slice(Z, me),
    de = v ? 0 : Math.max(0, H - G),
    ce = l[b]?.id,
    he = S != null && l.some((ne) => ne.id === S) ? S : void 0;
  return r(Box, {
    flexDirection: "column",
    justifyContent: R ? void 0 : "flex-end",
    onMouseLeave: w ? () => M?.(null) : void 0,
    children: [
      ye.map((ne, be) => {
        let ge = Z + be,
          Y = e(
            ns,
            {
              item: ne,
              maxColumnWidth: B,
              isSelected: ne.id === (he ?? ce),
              allowWrap: q,
            },
            ne.id,
          );
        if (!w) return Y;
        return e(
          Box,
          {
            onMouseEnter: () => M?.(ne.id),
            onClick: () => w(ge, ne.id),
            children: Y,
          },
          ne.id,
        );
      }),
      Array.from({ length: de }, (ne, be) =>
        e(Text, { children: " " }, `pad-${be}`),
      ),
    ],
  });
}
var MemoizedSuggestionList = Yl(SuggestionList);
function zr(l) {
  let x =
      l.kind === void 0 || l.kind === "action"
        ? ""
        : l.kind === "info"
          ? "config"
          : l.kind,
    O = l.kind === void 0 ? "" : x + repeatString(" ", 7 - getStringWidth(x)),
    R = l.sourceTag ? `[${l.sourceTag}] ` : "";
  return { kindLaneText: O, kindLabel: x, sourceText: R };
}
function ra(l, b, x) {
  if (qr(l.id) || !l.description) return 1;
  let O = Math.min(x, Math.floor(b * 0.4)),
    R = l.tag ? getStringWidth(`[${l.tag}] `) : 0,
    { kindLaneText: v, sourceText: w } = zr(l),
    S = Math.max(0, b - O - R - getStringWidth(v) - getStringWidth(w) - 4);
  if (S <= 0) return 1;
  let M = l.description.replace(bn, " ").trim();
  return getStringWidth(M) > S ? 2 : 1;
}
function es(l, b) {
  if (b <= 0 || getStringWidth(l) <= b) return [l, ""];
  let x = truncateToWidthNoEllipsis(l, b),
    O = l.slice(x.length);
  if (O.startsWith(" ")) return [x, O.trimStart()];
  let R = x.lastIndexOf(" ");
  if (R > 0) return [x.slice(0, R), l.slice(R + 1)];
  return [x, O];
}
var oa = /[^\u0020-\u02ff]/;
function ts(l, b) {
  if (b.length === 0 || !oa.test(l)) return b;
  let x = new Set();
  for (let { index: R } of getGraphemeSegmenter().segment(l)) x.add(R);
  let O = [];
  for (let [R, v] of b) {
    let w = R;
    while (w > 0 && !x.has(w)) w--;
    let S = v;
    while (S < l.length && !x.has(S)) S++;
    let M = O.at(-1);
    if (M && w <= M[1]) M[1] = Math.max(M[1], S);
    else O.push([w, S]);
  }
  return O;
}
F();
function isVimModeEnabled() {
  return resolveSetting("editorMode", "normal").value === "vim";
}
function getNewlineKeyHint() {
  if (supportsShiftEnter()) return "shift + \u23CE for newline";
  return hasUsedBackslashReturn()
    ? "\\\u23CE for newline"
    : "backslash (\\) + return (\u23CE) for newline";
}
var sa = new Set([
  "escape",
  "return",
  "enter",
  "tab",
  "backspace",
  "delete",
  "up",
  "down",
  "left",
  "right",
  "pageup",
  "pagedown",
  "home",
  "end",
  "insert",
  "clear",
  "center",
  "undefined",
  "mouse",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "f10",
  "f11",
  "f12",
]);
function shouldPrependSpace(l, b) {
  if (b.ctrl || b.meta) return !1;
  if (sa.has(l)) return !1;
  return l.length > 0 && !/^\s/.test(l);
}
function startsWithPunctuation(l) {
  return l.length > 0 && ".,?!:;)]".includes(l.charAt(0));
}
F();
function Pt(l, b, x) {
  let O = b;
  for (let R = 0; R < x; R++) {
    let v = ia(l, O);
    if (v.equals(O)) break;
    O = v;
  }
  return O;
}
function ia(l, b) {
  switch (l) {
    case "h":
      return b.left();
    case "l":
    case " ":
      return b.right();
    case "j":
      return b.downLogicalLine();
    case "k":
      return b.upLogicalLine();
    case "gj":
      return b.down();
    case "gk":
      return b.up();
    case "w":
      return b.nextVimWord();
    case "b":
      return b.prevVimWord();
    case "e":
      return b.endOfVimWord();
    case "W":
      return b.nextWORD();
    case "B":
      return b.prevWORD();
    case "E":
      return b.endOfWORD();
    case "0":
      return b.startOfLogicalLine();
    case "^":
      return b.firstNonBlankInLogicalLine();
    case "$":
      return b.lastCharInLogicalLine();
    case "G":
      return b.startOfLastLine();
    default:
      return b;
  }
}
function Yr(l) {
  return "eE$".includes(l);
}
function rs(l) {
  return "jkG".includes(l) || l === "gg";
}
var aa = {
  "(": ["(", ")"],
  ")": ["(", ")"],
  b: ["(", ")"],
  "[": ["[", "]"],
  "]": ["[", "]"],
  "{": ["{", "}"],
  "}": ["{", "}"],
  B: ["{", "}"],
  "<": ["<", ">"],
  ">": ["<", ">"],
  '"': ['"', '"'],
  "'": ["'", "'"],
  "`": ["`", "`"],
};
function Hn(l, b, x, O) {
  if (x === "w") return ss(l, b, O, isWordChar);
  if (x === "W") return ss(l, b, O, (v) => !isWhitespace(v));
  let R = aa[x];
  if (R) {
    let [v, w] = R;
    return v === w ? ua(l, b, v, O) : la(l, b, v, w, O);
  }
  return null;
}
function ss(l, b, x, O) {
  let R = [];
  for (let { segment: q, index: ie } of getGraphemeSegmenter().segment(l))
    R.push({ segment: q, index: ie });
  if (R.length === 0) return null;
  let v = R.length - 1;
  for (let q = 0; q < R.length; q++) {
    let ie = R[q],
      Te = q + 1 < R.length ? R[q + 1].index : l.length;
    if (b >= ie.index && b < Te) {
      v = q;
      break;
    }
  }
  let w = (q) => R[q]?.segment ?? "",
    S = (q) => (q < R.length ? R[q].index : l.length),
    M = (q) => isWhitespace(w(q)),
    D = (q) => O(w(q)),
    P = (q) => isPunctuation(w(q)),
    H = v,
    B = v;
  if (D(v)) {
    while (H > 0 && D(H - 1)) H--;
    while (B < R.length && D(B)) B++;
  } else if (M(v)) {
    while (H > 0 && M(H - 1)) H--;
    while (B < R.length && M(B)) B++;
    return { start: S(H), end: S(B) };
  } else if (P(v)) {
    while (H > 0 && P(H - 1)) H--;
    while (B < R.length && P(B)) B++;
  }
  if (!x) {
    if (B < R.length && M(B)) while (B < R.length && M(B)) B++;
    else if (H > 0 && M(H - 1)) while (H > 0 && M(H - 1)) H--;
  }
  return { start: S(H), end: S(B) };
}
function ua(l, b, x, O) {
  let R =
      l.lastIndexOf(
        `
`,
        b - 1,
      ) + 1,
    v = l.indexOf(
      `
`,
      b,
    ),
    w = v === -1 ? l.length : v,
    S = l.slice(R, w),
    M = b - R,
    D = [];
  for (let P = 0; P < S.length; P++) if (S[P] === x) D.push(P);
  for (let P = 0; P < D.length - 1; P += 2) {
    let H = D[P],
      B = D[P + 1];
    if (H <= M && M <= B)
      return O
        ? { start: R + H + 1, end: R + B }
        : { start: R + H, end: R + B + 1 };
  }
  return null;
}
function la(l, b, x, O, R) {
  let v = 0,
    w = -1;
  for (let M = b; M >= 0; M--)
    if (l[M] === O && M !== b) v++;
    else if (l[M] === x) {
      if (v === 0) {
        w = M;
        break;
      }
      v--;
    }
  if (w === -1) return null;
  v = 0;
  let S = -1;
  for (let M = w + 1; M < l.length; M++)
    if (l[M] === x) v++;
    else if (l[M] === O) {
      if (v === 0) {
        S = M;
        break;
      }
      v--;
    }
  if (S === -1) return null;
  return R ? { start: w + 1, end: S } : { start: w, end: S + 1 };
}
function Dt(l, b, x, O) {
  let R = Pt(b, O.cursor, x);
  if (R.equals(O.cursor) && !Yr(b)) return;
  let v = Xr(O.cursor, R, b, l, x);
  if (v.from === v.to) {
    if (l === "change" || l === "yank") O.setRegister("", !1);
    if (l === "change")
      (O.enterInsert(v.from),
        Ot(O, { type: "operator", op: l, motion: b, count: x }));
    return;
  }
  (Qt(l, v.from, v.to, O, v.linewise),
    Ot(O, { type: "operator", op: l, motion: b, count: x }));
}
function Gn(l, b, x, O, R) {
  let v = R.cursor.findCharacter(x, b, O);
  if (v === null) return;
  let w = new TextCursor(R.cursor.measuredText, v),
    S = ca(R.cursor, w, b);
  (Qt(l, S.from, S.to, R),
    R.setLastFind(b, x),
    Ot(R, { type: "operatorFind", op: l, find: b, char: x, count: O }));
}
function qn(l, b, x, O, R) {
  let v = Hn(R.text, R.cursor.offset, x, b === "inner");
  if (!v) return;
  (Qt(l, v.start, v.end, R),
    Ot(R, { type: "operatorTextObj", op: l, objType: x, scope: b, count: O }));
}
function Ut(l, b, x) {
  if (b < 1) return;
  let O = x.text,
    R = O.split(`
`),
    v = countOccurrences(
      O.slice(0, x.cursor.offset),
      `
`,
    ),
    w = Math.min(b, R.length - v),
    S = x.cursor.startOfLogicalLine().offset,
    M = S;
  for (let P = 0; P < w; P++) {
    let H = O.indexOf(
      `
`,
      M,
    );
    M = H === -1 ? O.length : H + 1;
  }
  let D = O.slice(S, M);
  if (
    !D.endsWith(`
`)
  )
    D =
      D +
      `
`;
  if ((x.setRegister(D, !0), l === "yank")) x.setOffset(S);
  else if (l === "delete") {
    let P = S,
      H = M;
    if (
      H === O.length &&
      P > 0 &&
      O[P - 1] ===
        `
`
    )
      P -= 1;
    let B = O.slice(0, P) + O.slice(H);
    x.setText(B || "");
    let q = Math.max(0, B.length - (getLastGrapheme(B).length || 1));
    x.setOffset(Math.min(P, q));
  } else if (l === "change")
    if (R.length === 1) (x.setText(""), x.enterInsert(0));
    else {
      let P = R.slice(0, v),
        H = R.slice(v + w),
        B = [...P, "", ...H].join(`
`);
      (x.setText(B), x.enterInsert(S));
    }
  Ot(x, { type: "operator", op: l, motion: l[0], count: b });
}
function zn(l, b) {
  let x = b.cursor.offset;
  if (x >= b.text.length) return;
  let O = is(b, l);
  if (O === x) return;
  let R = b.text.slice(x, O),
    v = b.text.slice(0, x) + b.text.slice(O);
  (b.setRegister(R, !1),
    b.setText(v),
    b.setOffset(snapOffsetOffNewline(v, x)),
    b.recordChange({ type: "x", count: l }));
}
function Yn(l, b) {
  let x = b.cursor.offset,
    O = is(b, l);
  if (O > x)
    (b.setRegister(b.text.slice(x, O), !1),
      b.setText(b.text.slice(0, x) + b.text.slice(O)));
  (b.enterInsert(x), b.recordChange({ type: "substitute", count: l }));
}
function Xn(l, b, x) {
  let O = x.cursor.offset,
    R = x.text;
  for (let v = 0; v < b && O < R.length; v++) {
    let w = getFirstGrapheme(R.slice(O)).length || 1;
    ((R = R.slice(0, O) + l + R.slice(O + w)), (O += l.length));
  }
  (x.setText(R),
    x.setOffset(Math.max(0, O - l.length)),
    x.recordChange({ type: "replace", char: l, count: b }));
}
function Jn(l, b) {
  let x = b.cursor.offset;
  if (x >= b.text.length) return;
  let O = b.text,
    R = x,
    v = 0;
  while (R < O.length && v < l) {
    let w = getFirstGrapheme(O.slice(R)),
      S = w.length,
      M = w === w.toUpperCase() ? w.toLowerCase() : w.toUpperCase();
    ((O = O.slice(0, R) + M + O.slice(R + S)), (R += M.length), v++);
  }
  (b.setText(O),
    b.setOffset(R),
    b.recordChange({ type: "toggleCase", count: l }));
}
function Qn(l, b) {
  let O = b.text.split(`
`),
    { line: R } = b.cursor.getPosition();
  if (R >= O.length - 1) return;
  let v = Math.min(l, O.length - R - 1),
    w = O[R],
    S = w.length;
  for (let P = 1; P <= v; P++) {
    let H = (O[R + P] ?? "").trimStart();
    if (H.length > 0) {
      if (!w.endsWith(" ") && w.length > 0) w += " ";
      w += H;
    }
  }
  let M = [...O.slice(0, R), w, ...O.slice(R + v + 1)],
    D = M.join(`
`);
  (b.setText(D),
    b.setOffset(Wt(M, R) + S),
    b.recordChange({ type: "join", count: l }));
}
function xn(l, b, x) {
  let O = x.getRegister();
  if (!O) return;
  x.recordChange({ type: "paste", after: l, count: b });
  let R = x.getRegisterIsLinewise(),
    v =
      R &&
      O.endsWith(`
`)
        ? O.slice(0, -1)
        : O;
  if (R) {
    let S = x.text.split(`
`),
      { line: M } = x.cursor.getPosition(),
      D = l ? M + 1 : M,
      P = v.split(`
`),
      H = [];
    for (let ie = 0; ie < b; ie++) H.push(...P);
    let B = [...S.slice(0, D), ...H, ...S.slice(D)],
      q = B.join(`
`);
    (x.setText(q), x.setOffset(Wt(B, D)));
  } else {
    let w = v.repeat(b),
      S = x.cursor.offset,
      M =
        x.text[S] ===
          `
` &&
        (S === 0 ||
          x.text[S - 1] ===
            `
`),
      D =
        l && S < x.text.length && !M ? x.cursor.measuredText.nextOffset(S) : S,
      P = x.text.slice(0, D) + w + x.text.slice(D),
      H = w.includes(`
`)
        ? snapOffsetOffNewline(P, D)
        : D + w.length - (getLastGrapheme(w).length || 1);
    (x.setText(P), x.setOffset(H));
  }
}
function Zn(l, b, x) {
  let R = x.text.split(`
`),
    { line: v } = x.cursor.getPosition(),
    w = Math.min(b, R.length - v);
  Qr(R, v, v + w - 1, l);
  let S = R.join(`
`),
    D = ((R[v] ?? "").match(/^\s*/)?.[0] ?? "").length;
  (x.setText(S),
    x.setOffset(Wt(R, v) + D),
    x.recordChange({ type: "indent", dir: l, count: b }));
}
function yn(l, b) {
  let O = b.text.split(`
`),
    { line: R } = b.cursor.getPosition(),
    v = l === "below" ? R + 1 : R,
    w = [...O.slice(0, v), "", ...O.slice(v)],
    S = w.join(`
`);
  (b.setText(S),
    b.enterInsert(Wt(w, v)),
    b.recordChange({ type: "openLine", direction: l }));
}
function Ot(l, b) {
  if (b.op !== "yank") l.recordChange(b);
}
function is(l, b) {
  let x = l.cursor;
  for (let O = 0; O < b && !x.isAtEnd(); O++) {
    if (
      l.text[x.offset] ===
      `
`
    )
      break;
    x = x.right();
  }
  return x.offset;
}
function Wt(l, b) {
  return (
    l.slice(0, b).join(`
`).length + (b > 0 ? 1 : 0)
  );
}
function Xr(l, b, x, O, R) {
  let v = Math.min(l.offset, b.offset),
    w = Math.max(l.offset, b.offset),
    S = !1;
  if (O === "change" && (x === "w" || x === "W")) {
    let M = l;
    for (let P = 0; P < R - 1; P++)
      M = x === "w" ? M.nextVimWord() : M.nextWORD();
    let D = x === "w" ? M.endOfVimWord() : M.endOfWORD();
    w = l.measuredText.nextOffset(D.offset);
  } else if (rs(x)) {
    S = !0;
    let M = l.text,
      D = M.indexOf(
        `
`,
        w,
      );
    if (D === -1) {
      if (
        ((w = M.length),
        v > 0 &&
          M[v - 1] ===
            `
`)
      )
        v -= 1;
    } else w = D + 1;
  } else if (
    Yr(x) &&
    l.offset <= b.offset &&
    l.text[w] !==
      `
`
  )
    w = l.measuredText.nextOffset(w);
  return (
    (v = l.snapOutOfPlaceholder(v, "start")),
    (w = l.snapOutOfPlaceholder(w, "end")),
    { from: v, to: w, linewise: S }
  );
}
function ca(l, b, x) {
  let O = Math.max(l.offset, b.offset),
    R = l.snapOutOfPlaceholder(Math.min(l.offset, b.offset), "start"),
    v = l.snapOutOfPlaceholder(l.measuredText.nextOffset(O), "end");
  return { from: R, to: v };
}
function Qt(l, b, x, O, R = !1) {
  let v = O.text.slice(b, x);
  if (
    R &&
    !v.endsWith(`
`)
  )
    v =
      v +
      `
`;
  if ((O.setRegister(v, R), l === "yank")) O.setOffset(b);
  else if (l === "delete") {
    let w = O.text.slice(0, b) + O.text.slice(x);
    (O.setText(w), O.setOffset(snapOffsetOffNewline(w, b)));
  } else if (l === "change") {
    let w = O.text.slice(0, b) + O.text.slice(x);
    (O.setText(w), O.enterInsert(b));
  }
}
function snapOffsetOffNewline(l, b) {
  if (
    l[b] ===
      `
` &&
    b > 0 &&
    l[b - 1] !==
      `
`
  )
    return b - (getLastGrapheme(l.slice(0, b)).length || 1);
  if (
    b >= l.length &&
    !l.endsWith(`
`)
  )
    return Math.max(0, l.length - (getLastGrapheme(l).length || 1));
  return b;
}
function as(l, b) {
  if (b === 0) return 0;
  let x = l.lastIndexOf(
    `
`,
    b - 1,
  );
  return x === -1 ? 0 : x + 1;
}
function er(l, b) {
  if (b) {
    let x = countOccurrences(
      l,
      `
`,
    );
    return l.endsWith(`
`)
      ? x
      : x + 1;
  }
  return countGraphemes(l);
}
function On(l, b, x) {
  let O = l.text;
  if (x) {
    let w = as(O, l.cursor.offset),
      S = w;
    for (let M = 0; M < b; M++) {
      let D = O.indexOf(
        `
`,
        S,
      );
      if (D === -1) {
        S = O.length;
        break;
      }
      S = D + 1;
    }
    return { from: w, to: S };
  }
  let R = l.cursor.offset,
    v = R;
  for (let w = 0; w < b && v < O.length; w++)
    v = l.cursor.measuredText.nextOffset(v);
  return { from: R, to: v };
}
function tr(l, b, x) {
  let O = Math.min(l, b.cursor.offset),
    R = Math.max(l, b.cursor.offset);
  if (!x) return { from: O, to: b.cursor.measuredText.nextOffset(R) };
  let v = b.text,
    w = as(v, O),
    S = v.indexOf(
      `
`,
      R,
    ),
    M = S === -1 ? v.length : S + 1;
  return { from: w, to: M };
}
function Qr(l, b, x, O) {
  for (let v = b; v <= x; v++) {
    let w = l[v] ?? "";
    if (O === ">") l[v] = "  " + w;
    else if (w.startsWith("  ")) l[v] = w.slice(2);
    else if (w.startsWith("\t")) l[v] = w.slice(1);
    else {
      let S = 0;
      while (S < w.length && S < 2 && /\s/.test(w[S])) S++;
      l[v] = w.slice(S);
    }
  }
}
function us(l, b) {
  let x = Math.min(l, b.cursor.offset),
    O = Math.max(l, b.cursor.offset),
    R = b.text,
    v = countOccurrences(
      R.slice(0, x),
      `
`,
    ),
    w =
      countOccurrences(
        R.slice(x, O),
        `
`,
      ) + 1,
    S = R.split(`
`),
    M = Math.max(1, Math.min(w - 1, S.length - v - 1));
  if (v >= S.length - 1) return;
  let D = S[v],
    P = D.length;
  for (let B = 1; B <= M; B++) {
    let q = (S[v + B] ?? "").trimStart();
    if (q.length > 0) {
      if (!D.endsWith(" ") && D.length > 0) D += " ";
      D += q;
    }
  }
  let H = [...S.slice(0, v), D, ...S.slice(v + M + 1)];
  (b.setText(
    H.join(`
`),
  ),
    b.setOffset(Wt(H, v) + P),
    b.recordChange({ type: "join", count: M }));
}
function ls(l, b, x, O) {
  let R = Math.min(x, O.cursor.offset),
    v = Math.max(x, O.cursor.offset),
    w = O.text,
    S = countOccurrences(
      w.slice(0, R),
      `
`,
    ),
    M =
      S +
      countOccurrences(
        w.slice(R, v),
        `
`,
      ),
    D = w.split(`
`);
  for (let q = 0; q < b; q++) Qr(D, S, M, l);
  let P = D.join(`
`),
    B = ((D[S] ?? "").match(/^\s*/)?.[0] ?? "").length;
  (O.setText(P),
    O.setOffset(Wt(D, S) + B),
    O.recordChange({
      type: "visualIndent",
      dir: l,
      count: b,
      lines: M - S + 1,
    }));
}
function cs(l, b, x, O) {
  let R = O.text,
    v = R.split(`
`),
    w = countOccurrences(
      R.slice(0, O.cursor.offset),
      `
`,
    ),
    S = Math.min(w + x - 1, v.length - 1);
  for (let P = 0; P < b; P++) Qr(v, w, S, l);
  let M = v.join(`
`),
    D = ((v[w] ?? "").match(/^\s*/)?.[0] ?? "").length;
  (O.setText(M), O.setOffset(Wt(v, w) + D));
}
function fs(l, b, x, O, R, v = !1) {
  if (R && l === "change") {
    let w = O.text.slice(b, x),
      S = w;
    if (
      !S.endsWith(`
`)
    )
      S += `
`;
    O.setRegister(S, !0);
    let M = O.text.slice(0, b),
      D = O.text.slice(x),
      P =
        D !== "" ||
        (w.endsWith(`
`) &&
          !v);
    (O.setText(
      M +
        (P
          ? `
`
          : "") +
        D,
    ),
      O.enterInsert(b));
    return;
  }
  if (R && l === "delete") {
    let w = O.text.slice(b, x);
    if (
      !w.endsWith(`
`)
    )
      w += `
`;
    O.setRegister(w, !0);
    let S = b;
    if (
      x === O.text.length &&
      b > 0 &&
      O.text[b - 1] ===
        `
`
    )
      S -= 1;
    let M = O.text.slice(0, S) + O.text.slice(x);
    O.setText(M);
    let D = Math.max(0, M.length - (getLastGrapheme(M).length || 1));
    O.setOffset(Math.min(S, D));
    return;
  }
  Qt(l, b, x, O, R);
}
function ds(l, b, x, O) {
  let { from: R, to: v } = tr(b, x, O),
    w = er(x.text.slice(R, v), O),
    S =
      O &&
      x.text.endsWith(`
`) &&
      Math.max(b, x.cursor.offset) >= x.text.length;
  (fs(l, R, v, x, O, S),
    Ot(x, { type: "visualOp", op: l, span: w, linewise: O }));
}
function ps(l, b, x, O) {
  let { from: R, to: v } = On(O, b, x);
  if (R === v) return;
  fs(l, R, v, O, x);
}
function ms(l, b, x, O) {
  let { from: R, to: v } = On(O, l, b);
  if (R === v && !b) return;
  let w = O.text.slice(R, v),
    S = w;
  if (
    b &&
    !S.endsWith(`
`)
  )
    S += `
`;
  O.setRegister(S, b);
  let M = O.text.slice(v),
    D =
      b &&
      (M !== "" ||
        w.endsWith(`
`))
        ? `
` + M
        : M,
    P = O.text.slice(0, R) + x + D;
  O.setText(P);
  let H = getLastGrapheme(x);
  O.setOffset(Math.max(R, R + x.length - (H.length || 1)));
}
function gs(l, b, x, O) {
  let R = O.text.slice(b, x),
    v = "";
  for (let { segment: S } of getGraphemeSegmenter().segment(R))
    v +=
      S ===
      `
`
        ? `
`
        : l;
  let w = O.text.slice(0, b) + v + O.text.slice(x);
  (O.setText(w), O.setOffset(b));
}
function hs(l, b, x, O) {
  let { from: R, to: v } = tr(b, x, O),
    w = er(x.text.slice(R, v), O);
  (gs(l, R, v, x),
    x.recordChange({ type: "visualReplace", char: l, span: w, linewise: O }));
}
function xs(l, b, x, O) {
  let { from: R, to: v } = On(O, b, x);
  if (R === v) return;
  gs(l, R, v, O);
}
function ys(l, b, x, O) {
  let R = O.text.slice(b, x),
    v = "";
  for (let { segment: S } of getGraphemeSegmenter().segment(R))
    if (l === "upper") v += S.toUpperCase();
    else if (l === "lower") v += S.toLowerCase();
    else v += S === S.toUpperCase() ? S.toLowerCase() : S.toUpperCase();
  let w = O.text.slice(0, b) + v + O.text.slice(x);
  (O.setText(w), O.setOffset(b));
}
function Os(l, b, x, O) {
  let { from: R, to: v } = tr(b, x, O),
    w = er(x.text.slice(R, v), O);
  (ys(l, R, v, x),
    x.recordChange({ type: "visualCase", caseOp: l, span: w, linewise: O }));
}
function vs(l, b, x, O) {
  let { from: R, to: v } = On(O, b, x);
  if (R === v) return;
  ys(l, R, v, O);
}
function Ts(l, b, x) {
  let O = b.getRegister();
  if (!O) return;
  let { from: R, to: v } = tr(l, b, x),
    w = er(b.text.slice(R, v), x),
    S = Rs(O, R, v, b, x);
  b.recordChange({ type: "visualPaste", content: S, span: w, linewise: x });
}
function Cs(l, b, x, O) {
  let { from: R, to: v } = On(O, b, x);
  if (R === v && !x) return;
  Rs(l, R, v, O, x);
}
function Rs(l, b, x, O, R) {
  let v = O.text.slice(b, x).endsWith(`
`),
    w = l.endsWith(`
`)
      ? l.slice(0, -1)
      : l;
  if (
    v &&
    !w.endsWith(`
`)
  )
    w += `
`;
  let S = O.text.slice(b, x);
  if (
    R &&
    !S.endsWith(`
`)
  )
    S += `
`;
  O.setRegister(S, R);
  let M = O.text.slice(0, b) + w + O.text.slice(x);
  if (
    (O.setText(M),
    R ||
      w.endsWith(`
`))
  )
    O.setOffset(b);
  else {
    let D = getLastGrapheme(w);
    O.setOffset(Math.max(b, b + w.length - (D.length || 1)));
  }
  return w;
}
function nr(l, b, x) {
  let O = b === 1 ? x.cursor.startOfLastLine() : x.cursor.goToLine(b);
  if (O.equals(x.cursor)) return;
  let R = Xr(x.cursor, O, "G", l, b);
  (Qt(l, R.from, R.to, x, R.linewise),
    Ot(x, { type: "operator", op: l, motion: "G", count: b }));
}
function rr(l, b, x) {
  let O = b === 1 ? x.cursor.startOfFirstLine() : x.cursor.goToLine(b);
  if (O.equals(x.cursor)) return;
  let R = Xr(x.cursor, O, "gg", l, b);
  (Qt(l, R.from, R.to, x, R.linewise),
    Ot(x, { type: "operator", op: l, motion: "gg", count: b }));
}
var ws = 1000;
function fa(l) {
  let b = new Map();
  for (let [x, O] of Object.entries(l)) {
    if (typeof O !== "string" || O.toLowerCase() !== "<esc>") continue;
    let R = x.normalize("NFC");
    if (!/^[^\p{C}\p{Z}]{2}$/u.test(R) || countGraphemes(R) !== 2) continue;
    b.set(R, "<Esc>");
  }
  return b;
}
function Zr() {
  return fa(getSecuritySensitiveSetting("vimInsertModeRemaps")[0] ?? {});
}
var sr = { d: "delete", c: "change", y: "yank" };
function eo(l) {
  return l in sr;
}
var ir = new Set([
    "h",
    "l",
    " ",
    "j",
    "k",
    "w",
    "b",
    "e",
    "W",
    "B",
    "E",
    "0",
    "^",
    "$",
  ]),
  ar = new Set(["f", "F", "t", "T"]),
  ur = { i: "inner", a: "around" };
function to(l) {
  return l in ur;
}
var no = new Set([
    "w",
    "W",
    '"',
    "'",
    "`",
    "(",
    ")",
    "b",
    "[",
    "]",
    "{",
    "}",
    "B",
    "<",
    ">",
  ]),
  Ss = 1e4;
function ks() {
  return { mode: "INSERT", insertedText: "" };
}
function _s() {
  return { lastFind: null, register: "", registerIsLinewise: !1 };
}
function ro(l, b, x) {
  switch (l.type) {
    case "idle":
      return pa(b, x);
    case "count":
      return ma(l, b, x);
    case "operator":
      return ga(l, b, x);
    case "operatorCount":
      return ha(l, b, x);
    case "operatorFind":
      return ba(l, b, x);
    case "operatorTextObj":
      return xa(l, b, x);
    case "find":
      return ya(l, b, x);
    case "g":
      return Oa(l, b, x);
    case "operatorG":
      return va(l, b, x);
    case "replace":
      return Ta(l, b, x);
    case "indent":
      return Ca(l, b, x);
  }
}
var da = Object.assign(Object.create(null), {
  g: (l) => ({ next: { type: "g", count: l } }),
  r: (l) => ({ next: { type: "replace", count: l } }),
  ">": (l) => ({ next: { type: "indent", dir: ">", count: l } }),
  "<": (l) => ({ next: { type: "indent", dir: "<", count: l } }),
  "~": (l, b) => ({ execute: () => Jn(l, b) }),
  x: (l, b) => ({ execute: () => zn(l, b) }),
  s: (l, b) => ({ execute: () => Yn(l, b) }),
  S: (l, b) => ({ execute: () => Ut("change", l, b) }),
  J: (l, b) => ({ execute: () => Qn(l, b) }),
  p: (l, b) => ({ execute: () => xn(!0, l, b) }),
  P: (l, b) => ({ execute: () => xn(!1, l, b) }),
  D: (l, b) => ({ execute: () => Dt("delete", "$", 1, b) }),
  C: (l, b) => ({ execute: () => Dt("change", "$", 1, b) }),
  Y: (l, b) => ({ execute: () => Ut("yank", l, b) }),
  G: (l, b) => ({
    execute: () => {
      if (l === 1) b.setOffset(b.cursor.startOfLastLine().offset);
      else b.setOffset(b.cursor.goToLine(l).offset);
    },
  }),
  ".": (l, b) => ({ execute: () => b.onDotRepeat?.() }),
  ";": (l, b) => ({ execute: () => lr(!1, l, b) }),
  ",": (l, b) => ({ execute: () => lr(!0, l, b) }),
  u: (l, b) => ({ execute: () => b.onUndo?.() }),
  i: (l, b) => ({ execute: () => b.enterInsert(b.cursor.offset) }),
  I: (l, b) => ({
    execute: () => b.enterInsert(b.cursor.firstNonBlankInLogicalLine().offset),
  }),
  a: (l, b) => ({
    execute: () => {
      let x = b.cursor.isAtEnd() ? b.cursor.offset : b.cursor.right().offset;
      b.enterInsert(x);
    },
  }),
  A: (l, b) => ({
    execute: () => b.enterInsert(b.cursor.endOfLogicalLine().offset),
  }),
  o: (l, b) => ({ execute: () => yn("below", b) }),
  O: (l, b) => ({ execute: () => yn("above", b) }),
});
function Is(l, b, x) {
  if (eo(l)) return { next: { type: "operator", op: sr[l], count: b } };
  if (ir.has(l))
    return {
      execute: () => {
        let O = Pt(l, x.cursor, b);
        x.setOffset(O.offset);
      },
    };
  if (ar.has(l)) return { next: { type: "find", find: l, count: b } };
  return da[l]?.(b, x) ?? null;
}
function Es(l, b, x, O) {
  if (to(x))
    return { next: { type: "operatorTextObj", op: l, count: b, scope: ur[x] } };
  if (ar.has(x))
    return { next: { type: "operatorFind", op: l, count: b, find: x } };
  if (ir.has(x)) return { execute: () => Dt(l, x, b, O) };
  if (x === "G") return { execute: () => nr(l, b, O) };
  if (x === "g") return { next: { type: "operatorG", op: l, count: b } };
  return null;
}
function pa(l, b) {
  if (/[1-9]/.test(l))
    return { next: { type: "count", count: parseInt(l, 10) } };
  if (l === "0")
    return { execute: () => b.setOffset(b.cursor.startOfLogicalLine().offset) };
  let x = Is(l, 1, b);
  if (x) return x;
  return {};
}
function ma(l, b, x) {
  if (/[0-9]/.test(b))
    return { next: { type: "count", count: oo(l.count, b) } };
  let O = Is(b, l.count, x);
  if (O) return O;
  return { next: { type: "idle" } };
}
function ga(l, b, x) {
  if (b === l.op[0]) return { execute: () => Ut(l.op, l.count, x) };
  if (/[0-9]/.test(b))
    return {
      next: {
        type: "operatorCount",
        op: l.op,
        count: l.count,
        motionCount: parseInt(b, 10),
      },
    };
  let O = Es(l.op, l.count, b, x);
  if (O) return O;
  return { next: { type: "idle" } };
}
function ha(l, b, x) {
  if (/[0-9]/.test(b))
    return { next: { ...l, motionCount: oo(l.motionCount, b) } };
  let O = l.count * l.motionCount;
  if (b === l.op[0]) return { execute: () => Ut(l.op, O, x) };
  let R = Es(l.op, O, b, x);
  if (R) return R;
  return { next: { type: "idle" } };
}
function ba(l, b, x) {
  return { execute: () => Gn(l.op, l.find, b, l.count, x) };
}
function xa(l, b, x) {
  if (no.has(b)) return { execute: () => qn(l.op, l.scope, b, l.count, x) };
  return { next: { type: "idle" } };
}
function ya(l, b, x) {
  return {
    execute: () => {
      let O = x.cursor.findCharacter(b, l.find, l.count);
      if (O !== null) (x.setOffset(O), x.setLastFind(l.find, b));
    },
  };
}
function Oa(l, b, x) {
  if (b === "j" || b === "k")
    return {
      execute: () => {
        let O = Pt(`g${b}`, x.cursor, l.count);
        x.setOffset(O.offset);
      },
    };
  if (b === "g") {
    if (l.count > 1)
      return {
        execute: () => {
          let O = x.text.split(`
`),
            R = Math.min(l.count - 1, O.length - 1),
            v = 0;
          for (let w = 0; w < R; w++) v += (O[w]?.length ?? 0) + 1;
          x.setOffset(v);
        },
      };
    return { execute: () => x.setOffset(x.cursor.startOfFirstLine().offset) };
  }
  return { next: { type: "idle" } };
}
function va(l, b, x) {
  if (b === "j" || b === "k")
    return { execute: () => Dt(l.op, `g${b}`, l.count, x) };
  if (b === "g") return { execute: () => rr(l.op, l.count, x) };
  return { next: { type: "idle" } };
}
function Ta(l, b, x) {
  if (b === "") return { next: { type: "idle" } };
  return { execute: () => Xn(b, l.count, x) };
}
function Ca(l, b, x) {
  if (b === l.dir) return { execute: () => Zn(l.dir, l.count, x) };
  return { next: { type: "idle" } };
}
function lr(l, b, x) {
  let O = x.getLastFind();
  if (!O) return;
  let R = O.type;
  if (l) R = { f: "F", F: "f", t: "T", T: "t" }[R];
  let v = x.cursor.findCharacter(O.char, R, b);
  if (v !== null) x.setOffset(v);
}
function Vs(l, b, x) {
  switch (l.type) {
    case "idle":
      return wa(b, x);
    case "count":
      return Sa(l, b, x);
    case "find":
      return ka(l, b, x);
    case "g":
      return _a(l, b, x);
    case "replace":
      if (b === "") return { next: { type: "idle" } };
      return { exit: "replace", char: b };
    case "textObject":
      return Ia(l, b, x);
  }
}
var Ra = Object.assign(Object.create(null), {
  x: () => ({ exit: "operator", op: "delete" }),
  s: () => ({ exit: "operator", op: "change" }),
  X: () => ({ exit: "operator", op: "delete", forceLinewise: !0 }),
  D: () => ({ exit: "operator", op: "delete", forceLinewise: !0 }),
  C: () => ({ exit: "operator", op: "change", forceLinewise: !0 }),
  S: () => ({ exit: "operator", op: "change", forceLinewise: !0 }),
  R: () => ({ exit: "operator", op: "change", forceLinewise: !0 }),
  Y: () => ({ exit: "operator", op: "yank", forceLinewise: !0 }),
  r: () => ({ next: { type: "replace" } }),
  "~": () => ({ exit: "case", op: "toggle" }),
  u: () => ({ exit: "case", op: "lower" }),
  U: () => ({ exit: "case", op: "upper" }),
  p: () => ({ exit: "paste" }),
  P: () => ({ exit: "paste" }),
  ">": (l) => ({ exit: "indent", dir: ">", count: l }),
  "<": (l) => ({ exit: "indent", dir: "<", count: l }),
  v: () => ({ exit: "toggleKind", key: "v" }),
  V: () => ({ exit: "toggleKind", key: "V" }),
  o: () => ({ exit: "swap" }),
  J: () => ({ exit: "join" }),
  $: (l, b) => ({
    next: { type: "idle" },
    move: () => b.setOffset(b.cursor.endOfLogicalLine().offset),
  }),
  g: (l) => ({ next: { type: "g", count: l } }),
  G: (l, b) => ({
    next: { type: "idle" },
    move: () => {
      let x = l === 1 ? b.cursor.startOfLastLine() : b.cursor.goToLine(l);
      b.setOffset(x.offset);
    },
  }),
  ";": (l, b) => ({ next: { type: "idle" }, move: () => lr(!1, l, b) }),
  ",": (l, b) => ({ next: { type: "idle" }, move: () => lr(!0, l, b) }),
});
function Ls(l, b, x) {
  if (eo(l)) return { exit: "operator", op: sr[l] };
  let O = Ra[l];
  if (O) return O(b, x);
  if (to(l)) return { next: { type: "textObject", scope: ur[l], count: b } };
  if (ir.has(l))
    return {
      next: { type: "idle" },
      move: () => x.setOffset(Pt(l, x.cursor, b).offset),
    };
  if (ar.has(l)) return { next: { type: "find", find: l, count: b } };
  return null;
}
function wa(l, b) {
  if (/[1-9]/.test(l))
    return { next: { type: "count", count: parseInt(l, 10) } };
  if (l === "0")
    return {
      next: { type: "idle" },
      move: () => b.setOffset(b.cursor.startOfLogicalLine().offset),
    };
  return Ls(l, 1, b) ?? { next: { type: "idle" } };
}
function Sa(l, b, x) {
  if (/[0-9]/.test(b))
    return { next: { type: "count", count: oo(l.count, b) } };
  return Ls(b, l.count, x) ?? { next: { type: "idle" } };
}
function ka(l, b, x) {
  return {
    next: { type: "idle" },
    move: () => {
      let O = x.cursor.findCharacter(b, l.find, l.count);
      if (O !== null) (x.setOffset(O), x.setLastFind(l.find, b));
    },
  };
}
function _a(l, b, x) {
  if (b === "j" || b === "k")
    return {
      next: { type: "idle" },
      move: () => x.setOffset(Pt(`g${b}`, x.cursor, l.count).offset),
    };
  if (b === "g")
    return {
      next: { type: "idle" },
      move: () => {
        let O =
          l.count > 1
            ? x.cursor.goToLine(l.count)
            : x.cursor.startOfFirstLine();
        x.setOffset(O.offset);
      },
    };
  return { next: { type: "idle" } };
}
function Ia(l, b, x) {
  if (no.has(b)) {
    let O = Hn(x.text, x.cursor.offset, b, l.scope === "inner");
    if (O) return { exit: "selectRange", start: O.start, end: O.end };
  }
  return { next: { type: "idle" } };
}
function oo(l, b) {
  return Math.min(l * 10 + parseInt(b, 10), Ss);
}
var so = new Set([
  "backspace",
  "delete",
  "tab",
  "home",
  "end",
  "pageup",
  "pagedown",
  "insert",
  "clear",
  "enter",
  "center",
  "undefined",
  "mouse",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "f10",
  "f11",
  "f12",
]);
function io(l) {
  if (!l) return !1;
  switch (l.type) {
    case "openLine":
    case "substitute":
      return !0;
    case "operator":
    case "operatorFind":
    case "operatorTextObj":
    case "visualOp":
      return l.op === "change";
    default:
      return !1;
  }
}
function ao(l) {
  let {
      value: b,
      onChange: x,
      columns: O,
      disableEscapeDoublePress: R,
      onModeChange: v,
      onUndo: w,
      onOpenHistorySearch: S,
      onToggleHelp: M,
      onHistoryUp: D,
      onHistoryDown: P,
      inputFilter: H,
    } = l,
    B = C(ks()),
    [q, ie] = d("INSERT"),
    [Te, Z] = d(null),
    me = C(null),
    G = C(Ma()),
    oe = C(null),
    J = C(null);
  function ye(I, z) {
    let K = B.current;
    if (K.mode === "INSERT" && !z.ctrl && !z.meta && [...z.key].length === 1)
      B.current = { mode: "INSERT", insertedText: K.insertedText + I };
  }
  function de(I, z, K, X) {
    for (let Ve of I.keys())
      if (Ve.startsWith(z)) {
        me.current = { char: z, at: Date.now(), offsetAfter: K, recorded: X };
        return;
      }
  }
  let ce = re(() => {
      me.current = null;
    }, []),
    he = re(
      (I, z) => {
        if (z !== void 0) I.setOffset(z);
        ((me.current = null),
          (J.current = null),
          (B.current = { mode: "INSERT", insertedText: "" }),
          ie("INSERT"),
          Z(null),
          v?.("INSERT"));
      },
      [v],
    ),
    ne = re(
      (I, z) => {
        let K = B.current;
        if (K.mode === "INSERT") {
          let X = oe.current,
            Ve = X === J.current;
          if (X?.type === "visualOp" && X.op === "change" && Ve)
            oe.current = {
              type: "visualChange",
              span: X.span,
              linewise: X.linewise,
              text: K.insertedText ?? "",
            };
          else if (K.insertedText && io(X) && X.type !== "visualOp" && Ve)
            oe.current = { ...X, insertedText: K.insertedText };
          else if (K.insertedText || (z?.claimEmptyInsert && !io(X)))
            oe.current = { type: "insert", text: K.insertedText };
          let W = z?.buffer ? z.buffer.offset : I.offset,
            ve = z?.buffer ? z.buffer.text : b.normalize("NFC");
          if (
            W > 0 &&
            ve[W - 1] !==
              `
`
          )
            I.setOffset(W - 1);
          else if (z?.buffer) I.setOffset(W);
        }
        ((B.current = { mode: "NORMAL", command: { type: "idle" } }),
          ie("NORMAL"),
          Z(null),
          v?.("NORMAL"));
      },
      [v, b],
    ),
    be = re(
      (I, z) => {
        B.current = {
          mode: "VISUAL",
          kind: z,
          anchor: I,
          command: { type: "idle" },
        };
        let K = z === "line" ? "VISUAL LINE" : "VISUAL";
        (ie(K), Z(I), v?.(K));
      },
      [v],
    );
  function ge(I, z, K = !1) {
    return {
      cursor: I,
      text: I.text,
      setText: (X) => x(X),
      setOffset: (X) => z.setOffset(X),
      enterInsert: (X) => he(z, X),
      getRegister: () => G.current.register,
      getRegisterIsLinewise: () => G.current.registerIsLinewise,
      setRegister: (X, Ve) => {
        ((G.current.register = X), (G.current.registerIsLinewise = Ve));
      },
      getLastFind: () => G.current.lastFind,
      setLastFind: (X, Ve) => {
        G.current.lastFind = { type: X, char: Ve };
      },
      recordChange: K
        ? () => {}
        : (X) => {
            if (((oe.current = X), io(X) && B.current.mode === "INSERT"))
              J.current = X;
          },
    };
  }
  function Y(I, z) {
    let K = I.text;
    return {
      ...I,
      setText: (X) => {
        ((K = X), I.setText(X));
      },
      enterInsert: (X) => {
        let Ve = K.slice(0, X) + z + K.slice(X);
        (I.setText(Ve), I.setOffset(X + z.length - (getLastGrapheme(z).length || 1)));
      },
    };
  }
  function ue(I, z, K) {
    if ("insertedText" in I && I.insertedText !== void 0)
      K = Y(K, I.insertedText);
    switch (I.type) {
      case "insert":
        if (I.text) {
          let X = z.insert(I.text);
          (K.setText(X.text), K.setOffset(X.offset));
        }
        break;
      case "x":
        zn(I.count, K);
        break;
      case "substitute":
        Yn(I.count, K);
        break;
      case "replace":
        Xn(I.char, I.count, K);
        break;
      case "toggleCase":
        Jn(I.count, K);
        break;
      case "indent":
        Zn(I.dir, I.count, K);
        break;
      case "join":
        Qn(I.count, K);
        break;
      case "openLine":
        yn(I.direction, K);
        break;
      case "operator":
        if (I.motion === I.op[0]) Ut(I.op, I.count, K);
        else if (I.motion === "gg") rr(I.op, I.count, K);
        else if (I.motion === "G") nr(I.op, I.count, K);
        else Dt(I.op, I.motion, I.count, K);
        break;
      case "operatorFind":
        Gn(I.op, I.find, I.char, I.count, K);
        break;
      case "operatorTextObj":
        qn(I.op, I.scope, I.objType, I.count, K);
        break;
      case "visualOp":
        ps(I.op, I.span, I.linewise, K);
        break;
      case "visualReplace":
        xs(I.char, I.span, I.linewise, K);
        break;
      case "visualCase":
        vs(I.caseOp, I.span, I.linewise, K);
        break;
      case "visualPaste":
        Cs(I.content, I.span, I.linewise, K);
        break;
      case "visualIndent":
        cs(I.dir, I.count, I.lines, K);
        break;
      case "visualChange":
        ms(I.span, I.linewise, I.text, K);
        break;
      case "paste":
        xn(I.after, I.count, K);
        break;
    }
  }
  function se(I) {
    let z = oe.current;
    if (!z) return;
    let K = TextCursor.fromText(b, O, I.offset);
    ue(z, K, ge(K, I, !0));
  }
  function Ee(I, z) {
    let K = b.normalize("NFC"),
      X = z.offset,
      Ve = () => {
        let ve = oe.current;
        if (!ve) return;
        let Ne = TextCursor.fromText(K, O, X);
        ue(ve, Ne, {
          ...ge(Ne, z, !0),
          text: K,
          setText: (ae) => {
            ((K = ae), x(ae));
          },
          setOffset: (ae) => {
            ((X = ae), z.setOffset(ae));
          },
          enterInsert: (ae) => {
            ((X = ae), he(z, ae));
          },
        });
      },
      W = [...I];
    for (let ve = 0; ve < W.length; ve++) {
      if (B.current.mode === "INSERT") {
        let Re = W.slice(ve).join(""),
          ke = Zr();
        if (ke.size > 0 && ke.has(Re.normalize("NFC"))) {
          (logFeatureOk("vim_insert_remap"),
            ne(z, { buffer: { text: K, offset: X }, claimEmptyInsert: !0 }));
          return;
        }
        let je = TextCursor.fromText(K, O, X).insert(Re);
        (x(je.text),
          z.setOffset(je.offset),
          (B.current = {
            mode: "INSERT",
            insertedText: B.current.insertedText + Re,
          }));
        let ze = getLastGrapheme(je.text.slice(0, je.offset));
        if (ze && Re.endsWith(ze)) de(ke, ze, je.offset, !0);
        return;
      }
      let Ne = B.current;
      if (Ne.mode !== "NORMAL") return;
      let ae = W[ve];
      if (
        (ae === "v" || ae === "V") &&
        (Ne.command.type === "idle" || Ne.command.type === "count")
      ) {
        be(X, ae === "V" ? "line" : "char");
        return;
      }
      let le = TextCursor.fromText(K, O, X),
        xe = {
          ...ge(le, z, !1),
          text: K,
          setText: (Re) => {
            ((K = Re), x(Re));
          },
          setOffset: (Re) => {
            ((X = Re), z.setOffset(Re));
          },
          enterInsert: (Re) => {
            ((X = Re), he(z, Re));
          },
          onDotRepeat: Ve,
        },
        Ce = ro(Ne.command, ae, xe);
      if (Ce.execute) Ce.execute();
      if (B.current.mode === "NORMAL") {
        if (Ce.next) B.current = { mode: "NORMAL", command: Ce.next };
        else if (Ce.execute)
          B.current = { mode: "NORMAL", command: { type: "idle" } };
      }
    }
  }
  function Oe(I, z) {
    let K = B.current,
      X = TextCursor.fromText(b, O, z.offset),
      Ve = () => H?.(I.key, I);
    if (!(
      I.name === "left" &&
      !I.ctrl &&
      !I.meta &&
      !I.fn &&
      !I.superKey &&
      !I.shift
    ))
      z.disarmLeftArrowConfirm?.();
    let W = me.current;
    if (((me.current = null), I.ctrl || I.meta)) {
      if (K.mode === "VISUAL") {
        (Ve(), ne(z), I.preventDefault());
        return;
      }
      z.handleKeyDown(I);
      return;
    }
    if (I.name === "escape") {
      if ((Ve(), K.mode === "NORMAL"))
        B.current = { mode: "NORMAL", command: { type: "idle" } };
      else if (K.mode === "VISUAL" && K.command.type !== "idle")
        B.current = { ...K, command: { type: "idle" } };
      else ne(z);
      if (!R) I.preventDefault();
      return;
    }
    if (I.name === "return" && K.mode !== "VISUAL") {
      z.handleKeyDown(I);
      return;
    }
    if (K.mode === "INSERT") {
      if (I.name === "backspace" || I.name === "delete") {
        if (K.insertedText.length > 0)
          B.current = {
            mode: "INSERT",
            insertedText: K.insertedText.slice(
              0,
              -(getLastGrapheme(K.insertedText).length || 1),
            ),
          };
      }
      let xe = Zr();
      if (xe.size > 0) {
        let Ce = I.key.normalize("NFC"),
          Re = [...Ce].length,
          ke = Re === 1,
          je = (ke || I.name === "") && !so.has(I.name);
        if (
          je &&
          Re <= 2 &&
          W &&
          xe.has(W.char + getFirstGrapheme(Ce)) &&
          Date.now() - W.at <= ws &&
          z.offset === W.offsetAfter &&
          X.text.startsWith(W.char, X.offset - W.char.length)
        ) {
          if ((Ve(), W.recorded && K.insertedText.endsWith(W.char)))
            B.current = {
              mode: "INSERT",
              insertedText: K.insertedText.slice(0, -W.char.length),
            };
          let Do = X.offset - W.char.length,
            Uo = X.text.slice(0, Do) + X.text.slice(X.offset);
          (x(Uo),
            logFeatureOk("vim_insert_remap"),
            ne(z, { buffer: { text: Uo, offset: Do }, claimEmptyInsert: !0 }),
            I.preventDefault());
          return;
        }
        if (je && !ke && xe.has(Ce)) {
          (Ve(),
            logFeatureOk("vim_insert_remap"),
            ne(z, { claimEmptyInsert: !0 }),
            I.preventDefault());
          return;
        }
        let An = je ? getLastGrapheme(Ce) : "";
        if (An) de(xe, An, z.offset + Ce.length, [...I.key].length === 1);
      }
      z.handleKeyDown(I);
      return;
    }
    if (K.mode === "VISUAL") {
      let xe = { ...ge(X, z, !1), onUndo: w, onDotRepeat: () => se(z) },
        Ce = K.command.type === "idle" || K.command.type === "count",
        Re = I.key;
      if (I.name === "left") Re = Ce ? "h" : "";
      else if (I.name === "right") Re = Ce ? "l" : "";
      else if (I.name === "up") Re = Ce ? "k" : "";
      else if (I.name === "down") Re = Ce ? "j" : "";
      else if (I.name === "return")
        Re = Ce
          ? "j"
          : `
`;
      else if (I.name === "backspace") Re = Ce ? "h" : "";
      else if (I.name === "delete")
        Re = Ce && K.command.type !== "count" ? "x" : "";
      else if (I.key === "" || so.has(I.name)) {
        I.preventDefault();
        return;
      } else if ([...I.key].length > 1) {
        I.preventDefault();
        return;
      }
      Ve();
      let ke = Vs(K.command, Re, xe),
        je = K.kind === "line";
      if ("next" in ke)
        (ke.move?.(),
          (B.current = {
            mode: "VISUAL",
            kind: K.kind,
            anchor: K.anchor,
            command: ke.next,
          }));
      else
        switch (ke.exit) {
          case "operator":
            if (
              (ds(ke.op, K.anchor, xe, je || ke.forceLinewise === !0),
              B.current.mode === "VISUAL")
            )
              ne(z);
            break;
          case "replace":
            (hs(ke.char, K.anchor, xe, je), ne(z));
            break;
          case "case":
            (Os(ke.op, K.anchor, xe, je), ne(z));
            break;
          case "paste":
            if (xe.getRegister()) (Ts(K.anchor, xe, je), ne(z));
            else B.current = { ...K, command: { type: "idle" } };
            break;
          case "join":
            (us(K.anchor, xe), ne(z));
            break;
          case "indent":
            (ls(ke.dir, ke.count, K.anchor, xe), ne(z));
            break;
          case "swap": {
            let ze = X.offset;
            (z.setOffset(K.anchor),
              (B.current = {
                mode: "VISUAL",
                kind: K.kind,
                anchor: ze,
                command: { type: "idle" },
              }),
              Z(ze));
            break;
          }
          case "selectRange": {
            let ze =
              ke.end > ke.start ? X.measuredText.prevOffset(ke.end) : ke.start;
            (z.setOffset(ze),
              (B.current = {
                mode: "VISUAL",
                kind: K.kind,
                anchor: ke.start,
                command: { type: "idle" },
              }),
              Z(ke.start));
            break;
          }
          default: {
            let ze = ke.key === "V" ? "line" : "char";
            if (ze === K.kind) ne(z);
            else be(K.anchor, ze);
            break;
          }
        }
      I.preventDefault();
      return;
    }
    if (K.mode !== "NORMAL") return;
    if (
      K.command.type === "idle" &&
      !I.shift &&
      (I.name === "up" ||
        I.name === "down" ||
        (I.name === "left" && X.text === ""))
    ) {
      z.handleKeyDown(I);
      return;
    }
    if (K.command.type === "idle" && I.key === "?" && M) {
      (M(), I.preventDefault());
      return;
    }
    if ((Ve(), K.command.type === "idle" && I.key === "/" && S)) {
      (S(), I.preventDefault());
      return;
    }
    if (K.command.type === "idle") {
      if (I.key === "k") {
        let xe = X.text.indexOf(`
`);
        if (xe === -1 || X.offset <= xe) {
          (D?.(), I.preventDefault());
          return;
        }
      }
      if (I.key === "j") {
        let xe = X.text.lastIndexOf(`
`);
        if (xe === -1 || X.offset > xe) {
          (P?.(), I.preventDefault());
          return;
        }
      }
    }
    let ve = { ...ge(X, z, !1), onUndo: w, onDotRepeat: () => se(z) },
      Ne =
        K.command.type === "idle" ||
        K.command.type === "count" ||
        K.command.type === "operator" ||
        K.command.type === "operatorCount",
      ae = I.key;
    if (I.name === "left") ae = "h";
    else if (I.name === "right") ae = "l";
    else if (I.name === "up") ae = "k";
    else if (I.name === "down") ae = "j";
    else if (Ne && I.name === "backspace") ae = "h";
    else if (Ne && K.command.type !== "count" && I.name === "delete") ae = "x";
    else if (I.key === "" || so.has(I.name)) return;
    else if ([...I.key].length > 1) {
      (Ee(I.key, z), I.preventDefault());
      return;
    }
    if (
      (ae === "v" || ae === "V") &&
      (K.command.type === "idle" || K.command.type === "count")
    ) {
      be(X.offset, ae === "V" ? "line" : "char");
      return;
    }
    let le = ro(K.command, ae, ve);
    if (le.execute) le.execute();
    if (B.current.mode === "NORMAL") {
      if (le.next) B.current = { mode: "NORMAL", command: le.next };
      else if (le.execute)
        B.current = { mode: "NORMAL", command: { type: "idle" } };
    }
    I.preventDefault();
  }
  let we = re(
    (I, z) => {
      if (((me.current = null), (J.current = null), I === "INSERT"))
        ((B.current = { mode: "INSERT", insertedText: "" }), Z(null));
      else if (I === "NORMAL")
        ((B.current = { mode: "NORMAL", command: { type: "idle" } }), Z(null));
      else {
        let K = I === "VISUAL LINE" ? "line" : "char",
          X = z.offset;
        ((B.current = {
          mode: "VISUAL",
          kind: K,
          anchor: X,
          command: { type: "idle" },
        }),
          Z(X));
      }
      (ie(I), v?.(I));
    },
    [v],
  );
  return {
    handleKeyDown: Oe,
    mode: q,
    setMode: we,
    visualAnchor: Te,
    recordInsertedText: ye,
    cancelPendingRemap: ce,
  };
}
function useVimTextInput(l) {
  let { inputFilter: b } = l,
    x = C(null),
    O = ao({
      value: l.value,
      onChange: (v) => {
        if (v === "" && l.value !== "") x.current?.();
        l.onChange(v);
      },
      columns: l.columns,
      disableEscapeDoublePress: l.disableEscapeDoublePress,
      onModeChange: l.onModeChange,
      onUndo:
        l.onUndo &&
        (() => {
          (x.current?.(), l.onUndo?.());
        }),
      onOpenHistorySearch: l.onOpenHistorySearch,
      onToggleHelp: l.onToggleHelp,
      onHistoryUp:
        l.onHistoryUp &&
        (() => {
          (x.current?.(), l.onHistoryUp?.());
        }),
      onHistoryDown:
        l.onHistoryDown &&
        (() => {
          (x.current?.(), l.onHistoryDown?.());
        }),
      inputFilter: b,
    }),
    R = useTextInput({
      ...l,
      selectionAnchor: O.visualAnchor,
      selectionLinewise: O.mode === "VISUAL LINE",
      inputFilter: (v, w) => {
        let S = b ? b(v, w) : v;
        return (O.recordInsertedText(S, w), S);
      },
    });
  return (
    (x.current = R.noteKeystrokeEmptied ?? null),
    {
      ...R,
      handleKeyDown: (v) => O.handleKeyDown(v, R),
      mode: O.mode,
      setMode: (v) => O.setMode(v, R),
      cancelPendingRemap: O.cancelPendingRemap,
    }
  );
}
function Ma() {
  let l = aMn();
  if (l) return l;
  let b = _s();
  return (lMn(b), b);
}
function Ea(l) {
  if (l.ctrl && (l.key === "k" || l.key === "u" || l.key === "w")) return !0;
  if ((l.meta || l.ctrl) && l.key === "backspace") return !0;
  if (l.meta && !l.ctrl && l.key.toLowerCase() === "d") return !0;
  return !1;
}
function Va(l) {
  return (l.ctrl || l.meta) && l.key === "y";
}
var La = new Set([
  "pageup",
  "pagedown",
  "insert",
  "wheelup",
  "wheeldown",
  "mouse",
  "clear",
  "enter",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "f10",
  "f11",
  "f12",
]);
function useVimModeInput({
  isActive: l,
  onExit: b,
  onCancel: x,
  onExitUp: O,
  onExitDown: R,
  columns: v,
  passthroughCtrlKeys: w = [],
  initialQuery: S = "",
  buffer: M,
  backspaceExitsOnEmpty: D = !0,
  multiline: P = !1,
  onSpaceOnEmpty: H,
  onTabOnEmpty: B,
  honorEditorMode: q = !1,
}) {
  let ie = useKillRing(),
    { columns: Te } = useTerminalSize(),
    Z = v ?? Te,
    [me, G] = d(S),
    [oe, J] = d(S.length),
    ye = useStoreSelector(M, (W) => W.query),
    de = useStoreSelector(M, (W) => W.cursorOffset),
    ce = ye ?? me,
    he = de ?? oe,
    ne = C(me),
    be = C(oe),
    ge = V(
      () =>
        M
          ? {
              get current() {
                return M.getSnapshot().query;
              },
              set current(W) {
                M.setQueryAndCursor(W, M.getSnapshot().cursorOffset);
              },
            }
          : ne,
      [M],
    ),
    Y = V(
      () =>
        M
          ? {
              get current() {
                return M.getSnapshot().cursorOffset;
              },
              set current(W) {
                M.setQueryAndCursor(M.getSnapshot().query, W);
              },
            }
          : be,
      [M],
    ),
    ue = re(
      (W) => {
        if (M) {
          M.setQueryAndCursor(W, M.getSnapshot().cursorOffset);
          return;
        }
        ((ne.current = W), G(W));
      },
      [M],
    ),
    se = re(
      (W) => {
        if (M) {
          M.setQueryAndCursor(M.getSnapshot().query, W);
          return;
        }
        ((be.current = W), J(W));
      },
      [M],
    ),
    Ee = re(
      (W) => {
        (ue(W), se(W.length));
      },
      [ue, se],
    ),
    Oe = re(
      (W) => {
        if (!l || !P || W.name !== "return") return !1;
        let ve = Y.current;
        return (ve > 0 && ge.current[ve - 1] === "\\") || W.shift || W.meta;
      },
      [l, P],
    ),
    we = (W) => {
      if (!l) return;
      let ve = ge.current,
        Ne = Y.current,
        ae = TextCursor.fromText(ve, Z, Ne);
      if (!Ea(W) && !Va(W)) ie.dispatch({ type: "interrupt" });
      if (W.ctrl && w.includes(W.key.toLowerCase())) return;
      if (W.name === "return") {
        if ((W.preventDefault(), Oe(W))) {
          if (ve[Ne - 1] === "\\") {
            ue(
              ve.slice(0, Ne - 1) +
                `
` +
                ve.slice(Ne),
            );
            return;
          }
          (ue(
            ve.slice(0, Ne) +
              `
` +
              ve.slice(Ne),
          ),
            se(Ne + 1));
          return;
        }
        b();
        return;
      }
      if (
        P &&
        (W.name === "enter" ||
          (W.ctrl && !W.shift && !W.meta && W.name === "j"))
      ) {
        W.preventDefault();
        let le = ae.insert(`
`);
        (ue(le.text), se(le.offset));
        return;
      }
      if (W.name === "down") {
        if ((W.preventDefault(), P)) {
          let le = ae.down();
          if (!le.equals(ae)) {
            se(le.offset);
            return;
          }
        }
        if (R) R();
        else if (!P) b();
        return;
      }
      if (W.name === "up") {
        if ((W.preventDefault(), P)) {
          let le = ae.up();
          if (!le.equals(ae)) {
            se(le.offset);
            return;
          }
        }
        if (O) O();
        return;
      }
      if (W.name === "escape") {
        if ((W.preventDefault(), x)) x();
        else if (ve.length > 0) (ue(""), se(0));
        else b();
        return;
      }
      if (W.name === "backspace") {
        if ((W.preventDefault(), W.meta || W.ctrl)) {
          let { cursor: xe, killed: Ce } = ae.backwardKillWord();
          (ie.dispatch({ type: "kill", text: Ce, direction: "prepend" }),
            ue(xe.text),
            se(xe.offset));
          return;
        }
        if (ve.length === 0) {
          if (D) (x ?? b)();
          return;
        }
        let le = ae.backspace();
        (ue(le.text), se(le.offset));
        return;
      }
      if (W.name === "delete") {
        W.preventDefault();
        let le = ae.del();
        (ue(le.text), se(le.offset));
        return;
      }
      if (W.name === "left" && (W.ctrl || W.meta || W.fn)) {
        (W.preventDefault(), se(ae.backwardWord().offset));
        return;
      }
      if (W.name === "right" && (W.ctrl || W.meta || W.fn)) {
        (W.preventDefault(), se(ae.forwardWord().offset));
        return;
      }
      if (W.name === "left") {
        W.preventDefault();
        let le = ae.left();
        se(le.offset);
        return;
      }
      if (W.name === "right") {
        W.preventDefault();
        let le = ae.right();
        se(le.offset);
        return;
      }
      if (W.name === "home") {
        (W.preventDefault(), se(ae.startOfLine().offset));
        return;
      }
      if (W.name === "end") {
        (W.preventDefault(), se(ae.endOfLine().offset));
        return;
      }
      if (W.ctrl) {
        switch ((W.preventDefault(), W.key.toLowerCase())) {
          case "a":
            se(ae.startOfLogicalLine().offset);
            return;
          case "e":
            se(ae.endOfLogicalLine().offset);
            return;
          case "b":
            se(ae.left().offset);
            return;
          case "f":
            se(ae.right().offset);
            return;
          case "d": {
            if (ve.length === 0) {
              (x ?? b)();
              return;
            }
            let le = ae.del();
            (ue(le.text), se(le.offset));
            return;
          }
          case "h": {
            if (ve.length === 0) {
              if (D) (x ?? b)();
              return;
            }
            let le = ae.backspace();
            (ue(le.text), se(le.offset));
            return;
          }
          case "k": {
            let { cursor: le, killed: xe } = ae.deleteToLineEnd();
            (ie.dispatch({ type: "kill", text: xe, direction: "append" }),
              ue(le.text),
              se(le.offset));
            return;
          }
          case "u": {
            let { cursor: le, killed: xe } = ae.deleteToLineStart();
            (ie.dispatch({ type: "kill", text: xe, direction: "prepend" }),
              ue(le.text),
              se(le.offset));
            return;
          }
          case "w": {
            let { cursor: le, killed: xe } = ae.deleteWORDBefore();
            (ie.dispatch({ type: "kill", text: xe, direction: "prepend" }),
              ue(le.text),
              se(le.offset));
            return;
          }
          case "y": {
            let le = getCurrentKillRingText(ie.state);
            if (le.length > 0) {
              let xe = ae.offset,
                Ce = ae.insert(le);
              (ie.dispatch({ type: "yank", start: xe, length: le.length }),
                ue(Ce.text),
                se(Ce.offset));
            }
            return;
          }
          case "g":
          case "c":
            if (x) {
              x();
              return;
            }
        }
        return;
      }
      if (W.meta) {
        switch ((W.preventDefault(), W.key.toLowerCase())) {
          case "b":
            se(ae.backwardWord().offset);
            return;
          case "f":
            se(ae.forwardWord().offset);
            return;
          case "d": {
            let { cursor: le, killed: xe } = ae.killWord();
            (ie.dispatch({ type: "kill", text: xe, direction: "append" }),
              ue(le.text),
              se(le.offset));
            return;
          }
          case "y": {
            let le = getNextKillRingEntry(ie.state);
            if (le) {
              let { text: xe, start: Ce, length: Re } = le;
              ie.dispatch({ type: "yankPop" });
              let ke = ve.slice(0, Ce),
                je = ve.slice(Ce + Re),
                ze = ke + xe + je,
                An = Ce + xe.length;
              (ie.dispatch({ type: "updateYankLength", length: xe.length }),
                ue(ze),
                se(An));
            }
            return;
          }
        }
        return;
      }
      if (W.name === "tab") {
        if ((W.preventDefault(), B && ve === "")) B();
        return;
      }
      if (H && W.key === " " && ve === "") {
        (W.preventDefault(), H());
        return;
      }
      if (W.key.length >= 1 && !La.has(W.name)) {
        W.preventDefault();
        let le = ae.insert(W.key);
        (ue(le.text), se(le.offset));
      }
    },
    I = q && isVimModeEnabled(),
    z = ao({
      value: ce,
      onChange: ue,
      columns: Z,
      onHistoryUp: O,
      onHistoryDown: R,
    }),
    K = { handleKeyDown: we, offset: he, setOffset: se };
  return {
    query: ce,
    queryRef: ge,
    setQuery: Ee,
    cursorOffset: he,
    cursorOffsetRef: Y,
    willInsertNewline: Oe,
    setCursorOffset: se,
    handleKeyDown: (W) => {
      if (!I) {
        we(W);
        return;
      }
      if (!l) return;
      if (W.name === "escape" && z.mode === "NORMAL") {
        (z.handleKeyDown(W, K), we(W));
        return;
      }
      z.handleKeyDown(W, K);
    },
    handlePaste: (W) => {
      if (!l || W.text.length === 0) return;
      (W.preventDefault(), z.cancelPendingRemap());
      let ve = P
        ? W.text.replace(
            /\r\n|\r/g,
            `
`,
          )
        : (W.text.split(/\r\n|\r|\n/, 2)[0] ?? "");
      if (ve.length === 0) return;
      let ae = TextCursor.fromText(ge.current, Z, Y.current).insert(ve);
      (ue(ae.text), se(ae.offset));
    },
    vimMode: I ? z.mode : void 0,
  };
}
F();
function buildTextLayout(l, b) {
  let x = Math.max(1, Math.floor(b) || 1),
    O = b > 0 ? wrapAnsi(l, x, { hard: !0, trim: !1 }) : l,
    R = [],
    v = 0,
    w = -1,
    S = O.split(`
`);
  for (let M = 0; M < S.length; M++) {
    let D = S[M] ?? "";
    if (D.length === 0) {
      if (
        ((w = l.indexOf(
          `
`,
          w + 1,
        )),
        w !== -1)
      ) {
        let q = w;
        R.push(
          fr({
            text: D,
            startOffset: q,
            isPrecededByNewline: cr(l, q, M === 0),
            endsWithNewline: !0,
          }),
        );
      } else {
        let q = l.length;
        R.push(
          fr({
            text: D,
            startOffset: q,
            isPrecededByNewline: cr(l, q, M === 0),
            endsWithNewline: !1,
          }),
        );
      }
      continue;
    }
    let P = l.indexOf(D, v);
    if (P === -1) {
      let q = v;
      (R.push(
        fr({
          text: D,
          startOffset: q,
          isPrecededByNewline: cr(l, q, M === 0),
          endsWithNewline: !1,
        }),
      ),
        (v = q + D.length));
      continue;
    }
    v = P + D.length;
    let H = P + D.length,
      B =
        H < l.length &&
        l[H] ===
          `
`;
    if (B) w = H;
    R.push(
      fr({
        text: D,
        startOffset: P,
        isPrecededByNewline: cr(l, P, M === 0),
        endsWithNewline: B,
      }),
    );
  }
  return Object.freeze({ text: l, columns: x, lines: Object.freeze(R) });
}
function Aa(l, b) {
  let x = Ds(b, 0, Math.max(0, l.lines.length - 1));
  return (
    l.lines[x] ?? {
      text: "",
      startOffset: 0,
      isPrecededByNewline: !0,
      endsWithNewline: !1,
    }
  );
}
function Ns(l, b) {
  if (l.lines.length === 0) return { line: 0, column: 0 };
  let x = Ds(b, 0, l.text.length);
  for (let v = 0; v < l.lines.length; v++) {
    let w = l.lines[v],
      S = l.lines[v + 1];
    if (x >= w.startOffset && (!S || x < S.startOffset)) {
      let M = x - w.startOffset,
        D;
      if (w.isPrecededByNewline) D = As(w.text, M);
      else {
        let P = w.text.length - w.text.trimStart().length;
        if (M < P) D = 0;
        else D = As(w.text.slice(P), M - P);
      }
      return { line: v, column: D };
    }
  }
  let O = l.lines.length - 1,
    R = l.lines[O];
  return { line: O, column: getStringWidth(R.text) };
}
function Ps(l, b, x) {
  if (l.lines.length === 0) return 0;
  let O = Aa(l, b);
  if (O.text.length === 0 && O.endsWithNewline) return O.startOffset;
  let R = O.isPrecededByNewline ? 0 : O.text.length - O.text.trimStart().length,
    v = Na(O.text.slice(R), Math.max(0, x)) + R;
  return O.startOffset + v;
}
function As(l, b) {
  if (b <= 0) return 0;
  if (b >= l.length) return getStringWidth(l);
  return getStringWidth(l.slice(0, b));
}
function Na(l, b) {
  if (b <= 0 || l.length === 0) return 0;
  let x = 0,
    O = 0;
  for (let R of l) {
    let v = getStringWidth(R);
    if (x + v > b) break;
    ((x += v), (O += R.length));
  }
  return O;
}
function cr(l, b, x) {
  if (x) return !0;
  return (
    b > 0 &&
    l[b - 1] ===
      `
`
  );
}
function fr(l) {
  return Object.freeze(l);
}
function Ds(l, b, x) {
  return l < b ? b : l > x ? x : l;
}
function SearchInput({
  query: l,
  placeholder: b = "Search\u2026",
  isFocused: x,
  isTerminalFocused: O,
  prefix: R = SEARCH_PREFIX_GLYPH,
  width: v,
  cursorOffset: w,
  borderless: S = !1,
  highlights: M = [],
  dimRange: D,
  cursorChar: P,
  prefixDim: H = !1,
  prefixColor: B,
  onCursorOffsetChange: q,
  onFocus: ie,
  wrapColumns: Te,
}) {
  let Z = w ?? l.length,
    me = S ? 0 : 2,
    G = S ? 0 : 1,
    oe = `${R} ${l}`,
    J = R.length + 1,
    ye = V(() => buildTextLayout(oe, Te ?? 0), [oe, Te]),
    de = V(lF, []),
    ce =
      a.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT &&
      a.CLAUDE_CODE_SESSION_KIND !== "bg",
    he = Ns(ye, J + Z),
    ne = useCursorDeclaration({
      line: G + he.line,
      column: me + he.column,
      active: x,
      visible: P === void 0 && !ce,
    }),
    be = O && !(de && !ce && P === void 0);
  return e(Box, {
    ref: ne,
    flexShrink: 0,
    borderStyle: S ? void 0 : "round",
    borderColor: x ? "suggestion" : void 0,
    borderDimColor: !x,
    paddingX: S ? 0 : 1,
    width: v,
    onClick:
      q || ie
        ? (Y) => {
            if (!x) {
              ie?.();
              return;
            }
            if (!l || !q) return;
            let ue = Y.localRow - G;
            if (ue < 0) return;
            let se = Math.max(0, Y.localCol - me),
              Ee = Ps(ye, ue, se);
            q(Math.max(0, Math.min(l.length, Ee - J)));
          }
        : void 0,
    children: r(Text, {
      dimColor: !x,
      children: [
        e(Text, { dimColor: H, color: B, children: R }),
        " ",
        x
          ? l
            ? Pa(l, M, D, be ? Z : -1, P)
            : be
              ? r(N, {
                  children: [
                    P ?? e(Text, { inverse: !0, children: b.charAt(0) }),
                    e(Text, { dimColor: !0, children: P ? b : b.slice(1) }),
                  ],
                })
              : e(Text, { dimColor: !0, children: b })
          : l
            ? e(Text, { children: l })
            : e(Text, { children: b }),
      ],
    }),
  });
}
function Pa(l, b, x, O, R) {
  let v = (P) => b.some(([H, B]) => P >= H && P < B),
    w = (P) => !!x && P >= x[0] && P < x[1],
    S = new Set([0, l.length]);
  for (let [P, H] of b) (S.add(P), S.add(H));
  if (x) (S.add(x[0]), S.add(x[1]));
  if (O >= 0) (S.add(O), S.add(O + 1));
  let M = [...S].sort((P, H) => P - H),
    D = [];
  for (let P = 0; P < M.length - 1; P++) {
    let H = M[P],
      B = M[P + 1],
      q = H < l.length ? l.slice(H, B) : " ";
    if (!q) continue;
    let ie = H === O,
      Te =
        ie &&
        q ===
          `
`;
    D.push(
      ie && R
        ? r(
            Text,
            {
              children: [
                R,
                Te
                  ? `
`
                  : null,
              ],
            },
            H,
          )
        : e(
            Text,
            {
              color: v(H) ? "suggestion" : void 0,
              dimColor: w(H),
              inverse: ie,
              children: Te
                ? ` 
`
                : q,
            },
            H,
          ),
    );
  }
  return D;
}
function shouldClearSelectionForKey(l) {
  if (l.wheelUp || l.wheelDown || l.escape) return !1;
  if (l.pageUp || l.pageDown) return !1;
  if ((l.home || l.end) && l.ctrl) return !1;
  if (
    (l.leftArrow ||
      l.rightArrow ||
      l.upArrow ||
      l.downArrow ||
      l.home ||
      l.end) &&
    (l.shift || l.meta || l.super)
  )
    return !1;
  return !0;
}
function Da(l) {
  if (l.name === "escape" || l.name === "pageup" || l.name === "pagedown")
    return !1;
  if ((l.name === "home" || l.name === "end") && l.ctrl) return !1;
  if (
    (l.name === "left" ||
      l.name === "right" ||
      l.name === "up" ||
      l.name === "down" ||
      l.name === "home" ||
      l.name === "end") &&
    (l.shift || l.meta || l.superKey)
  )
    return !1;
  return !0;
}
function createSelectionKeyDownHandler(l, b) {
  return (x) => {
    if (!l.hasSelection()) return;
    if (x.key === "c" && !x.meta && (x.ctrl || x.superKey)) {
      if (b) l.clearSelection();
      else l.copySelection();
      x.consume();
      return;
    }
    if (Da(x)) l.clearSelection();
  };
}
function useSelectionClearKeybinding(l, b = !0) {
  useKeybindings(
    {
      "selection:clear": () => {
        if (!l.hasSelection()) return !1;
        l.clearSelection();
      },
    },
    { context: "Scroll", isActive: b },
  );
}
F();
function buildSelectionCopiedNotification(l) {
  let b = getClipboardCopyStrategy(),
    x = countGraphemes(l),
    O = x === 1 ? "char" : "chars",
    R;
  switch (b) {
    case "native":
      R = `copied ${x} ${O} to clipboard`;
      break;
    case "tmux-buffer":
      R = `copied ${x} ${O} to tmux buffer \xB7 paste with prefix + ]`;
      break;
    case "osc52":
      R = `sent ${x} ${O} via OSC 52 \xB7 if paste fails, hold ${getNativeCopyModifierKey()} while selecting for native copy`;
      break;
  }
  let v = getOsc52Utf8PasteWarning(l);
  if (v) R = `\u26A0 ${v} \xB7 ${R}`;
  return {
    key: "selection-copied",
    kind: "feedback",
    text: R,
    color: "suggestion",
    priority: "immediate",
    timeoutMs: v ? 6000 : b === "native" ? 2000 : 4000,
  };
}
function useCopyOnSelect(l, b, x) {
  let O = C(!1),
    R = C(null),
    [v] = d(() => ({
      peek: () => R.current,
      invalidate: () => {
        R.current = null;
      },
    })),
    w = vr((S) => x?.(S));
  return (
    E(() => {
      if (!b) return;
      return (
        probeLinuxClipboardTool(),
        l.subscribe(() => {
          let M = l.getState(),
            D = l.hasSelection();
          if (M?.isDragging) {
            ((O.current = !1), (R.current = null));
            return;
          }
          if (!D) {
            ((O.current = !1), (R.current = null));
            return;
          }
          if (O.current) {
            R.current = null;
            return;
          }
          if (!(getGlobalConfig().copyOnSelect ?? !0)) return;
          let H = l.copySelectionNoClear();
          if (!H || !H.trim()) {
            O.current = !0;
            return;
          }
          ((O.current = !0), (R.current = H), logFeatureOk("clipboard_write"), w(H));
        })
      );
    }, [b, l]),
    v
  );
}
function useSelectionBackgroundColor(l) {
  let b = useResolvedTheme();
  E(() => {
    l.setSelectionBgColor(b.selectionBg);
  }, [l, b.selectionBg]);
}
class Us {
  packageManagerUpdateLastFailedAt = 0;
  packageManagerLatestVersion = null;
  fastIconHintShown = !1;
  memorySelectorLastPath = void 0;
  ultraEffortObserved = null;
  recordPackageManagerUpdateFailure(l) {
    this.packageManagerUpdateLastFailedAt = l;
  }
  recordPackageManagerLatestVersion(l) {
    this.packageManagerLatestVersion = l;
  }
  markFastIconHintShown() {
    this.fastIconHintShown = !0;
  }
  rememberMemorySelectorPath(l) {
    this.memorySelectorLastPath = l;
  }
  recordUltraEffort(l) {
    this.ultraEffortObserved = l;
  }
}
var sessionStateStore = new j(() => new Us());
F();
import Ua from "path";
var Wa = "at_mentioned",
  Ka = createLazyValue(() =>
    c({
      method: k(Wa),
      params: c({
        filePath: s(),
        lineStart: T().optional(),
        lineEnd: T().optional(),
      }),
    }),
  );
function useIdeAtMentionNotification(l, b) {
  let x = V(() => getConnectedIdeClient(l), [l]),
    O = C(void 0);
  E(() => {
    if (((O.current = x), !x)) return;
    registerMcpNotificationHandler(x, Ka(), (R) => {
      if (O.current !== x) return;
      try {
        let v = R.params,
          w = v.lineStart !== void 0 ? v.lineStart + 1 : void 0,
          S = v.lineEnd !== void 0 ? v.lineEnd + 1 : void 0;
        (b({ filePath: v.filePath, lineStart: w, lineEnd: S }),
          logFeatureOk("ide_at_mention"));
      } catch (v) {
        (logError(v), logFeatureBad("ide_at_mention", "ide_at_mention_failed"));
      }
    });
  }, [x, b]);
}
function formatAtMention(l, b) {
  let x = Ua.relative(getCwd(), l.filePath),
    O;
  if (l.lineStart && l.lineEnd)
    O =
      l.lineStart === l.lineEnd
        ? `@${x}#L${l.lineStart} `
        : `@${x}#L${l.lineStart}-${l.lineEnd} `;
  else O = `@${x} `;
  if (b !== void 0 && !/\s/.test(b)) O = ` ${O}`;
  return O;
}
F();
function useLoginCompleted() {
  let l = useSession();
  return useStoreSelector(authStateStore.of(l), (b) => b.loginCompleted);
}
function useVoiceAvailable() {
  let l = useAppStateSelector((O) => isVoiceEnabled(O.settings)),
    b = useLoginCompleted(),
    x = V(() => l && hasVoiceAuth(), [b, l]);
  return (
    E(() => {
      if (!getClaimRegistry().claim("voice_init_gate")) return;
      logEvent("tengu_voice_init_gate", {
        user_intent_store: l,
        user_intent_disk: isVoiceEnabled(getInitialSettings()),
        has_voice_auth: hasVoiceAuth(),
        voice_mode_allowed: isVoiceModeAllowed(),
        auth_version: b,
      });
    }, []),
    x && isVoiceModeAllowed()
  );
}
F();
function eu(jf) {
  return jf.voiceState;
}
function tu(Ff) {
  return Ff.settings.voice?.mode ?? "hold";
}
function nu(Qs) {
  if (!Qs.voiceWarmingUp) {
    return Qs;
  }
  return { ...Qs, voiceWarmingUp: !1 };
}
function ru(ei) {
  if (!ei.awaitingVoiceSubmitDoubleTap) {
    return ei;
  }
  return { ...ei, awaitingVoiceSubmitDoubleTap: !1 };
}
function ou(ti) {
  if (!ti.voiceWarmingUp) {
    return ti;
  }
  return { ...ti, voiceWarmingUp: !1 };
}
function su(ni) {
  if (!ni.awaitingVoiceSubmitDoubleTap) {
    return ni;
  }
  return { ...ni, awaitingVoiceSubmitDoubleTap: !1 };
}
function iu(ri) {
  if (!ri.awaitingVoiceSubmitDoubleTap) {
    return ri;
  }
  return { ...ri, awaitingVoiceSubmitDoubleTap: !1 };
}
function au(oi) {
  if (!oi.voiceWarmingUp) {
    return oi;
  }
  return { ...oi, voiceWarmingUp: !1 };
}
function uu(si) {
  if (si.voiceWarmingUp) {
    return si;
  }
  return { ...si, voiceWarmingUp: !0 };
}
var Za = import.meta.require("../语音-音频/useVoice.ekf7rmy1.js"),
  nn = 120,
  ii = 2000,
  ai = 5,
  xr = 2,
  ui = 300;
function li(l, b) {
  if ((l.key === "return" ? "enter" : l.key.toLowerCase()) !== b.key) return !1;
  if (l.ctrl !== b.ctrl) return !1;
  if (l.shift !== b.shift) return !1;
  if (l.meta !== (b.alt || b.meta)) return !1;
  if (l.superKey !== b.super) return !1;
  return !0;
}
function ci(l) {
  return keybindingStore.changed.subscribe(l);
}
function fi() {
  return getActiveKeybindings(keybindingStore);
}
function useVoiceComposer({ composer: l, isActive: b = !0 }) {
  let { addNotification: x } = useNotificationQueue(),
    O = useVoiceSetState(),
    R = useVoiceGetState(),
    v = C(null),
    w = C(""),
    S = C(null),
    M = re(
      (G, { char: oe = " ", anchor: J = !1, floor: ye = 0 } = {}) => {
        let { value: de, cursorOffset: ce } = l,
          he = de.slice(0, ce),
          ne = de.slice(ce),
          be = oe === " " ? normalizeIdeographicSpaces(he) : he,
          ge = 0;
        while (ge < be.length && be[be.length - 1 - ge] === oe) ge++;
        let Y = Math.max(0, Math.min(ge - ye, G)),
          ue = ge - Y,
          se = he.slice(0, he.length - Y),
          Ee = "";
        if (J) {
          if (
            ((v.current = se),
            (w.current = ne),
            ne.length > 0 && !/^\s/.test(ne))
          )
            Ee = " ";
        }
        let Oe = se + Ee + ne;
        if (J) S.current = Oe;
        if (Oe === de && Y === 0) return ue;
        return (l.setValueWithCursor(Oe, se.length), ue);
      },
      [l],
    ),
    D = re(() => {
      let G = v.current;
      if (G === null) return;
      let oe = w.current;
      ((v.current = null),
        (w.current = ""),
        l.setValueWithCursor(G + oe, G.length));
    }, [l]),
    P = useVoiceAvailable(),
    H = useAppStateSelector((G) => G.settings.voice?.autoSubmit === !0),
    B = useAppStateSelector((G) => G.settings.voice?.mode ?? "hold"),
    q = useVoiceSelector((G) => G.voiceState),
    ie = useVoiceSelector((G) => G.voiceInterimTranscript);
  (E(() => {
    if (b && R().voiceState === "recording" && v.current === null) {
      let { value: G, cursorOffset: oe } = l;
      ((v.current = G.slice(0, oe)),
        (w.current = G.slice(oe)),
        (S.current = G));
    }
    if (q === "idle")
      ((v.current = null), (w.current = ""), (S.current = null));
  }, [q, R, l, b]),
    E(() => {
      if (v.current === null) return;
      let G = v.current,
        oe = w.current;
      if (l.value !== S.current) return;
      let J = G.length > 0 && !/\s$/.test(G) && ie.length > 0,
        ye = oe.length > 0 && !/^\s/.test(oe),
        de = J ? " " : "",
        ce = ye ? " " : "",
        he = G + de + ie + ce + oe,
        ne = G.length + de.length + ie.length;
      (l.setValueWithCursor(he, ne), (S.current = he));
    }, [ie, l]));
  let Te = re(
      (G) => {
        let oe = v.current;
        if (oe === null) {
          logFeatureBad("voice_transcript_insert", "no_anchor");
          return;
        }
        let J = w.current;
        if (l.value !== S.current) {
          logFeatureSad("voice_transcript_insert", "input_diverged");
          return;
        }
        let ye = oe.length > 0 && !/\s$/.test(oe) && G.length > 0,
          de = J.length > 0 && !/^\s/.test(J) && G.length > 0,
          ce = ye ? " " : "",
          he = de ? " " : "",
          ne = oe + ce + G + he + J,
          be = oe.length + ce.length + G.length;
        (l.setValueWithCursor(ne, be),
          (S.current = ne),
          logFeatureOk("voice_transcript_insert"),
          (v.current = oe + ce + G));
        let ge = B === "tap" || H,
          Y = l.submit !== void 0 && ge && countWords(G) >= 3 && l.submit(ne, !0);
        O((ue) => {
          let se = l.submit !== void 0 && B !== "tap" && !Y;
          if (ue.awaitingVoiceSubmitDoubleTap === se) return ue;
          return { ...ue, awaitingVoiceSubmitDoubleTap: se };
        });
      },
      [l, O, H, B],
    ),
    Z = Za.useVoice({
      onTranscript: Te,
      onError: (G) => {
        x({
          key: "voice-error",
          kind: "warning",
          text: G,
          color: "error",
          priority: "immediate",
          timeoutMs: 1e4,
        });
      },
      enabled: P,
      focusMode: !1,
      mode: B,
    }),
    me = V(() => {
      if (v.current === null) return null;
      if (ie.length === 0) return null;
      let G = v.current,
        oe = G.length > 0 && !/\s$/.test(G) && ie.length > 0,
        J = G.length + (oe ? 1 : 0),
        ye = J + ie.length;
      return { start: J, end: ye };
    }, [ie]);
  return (
    dn(() => {
      l.setInterimRange?.(me);
    }, [l, me]),
    {
      stripTrailing: M,
      resetAnchor: D,
      handleKeyEvent: Z.handleKeyEvent,
      cancelRecording: Z.cancelRecording,
      interimRange: me,
    }
  );
}
function useVoiceKeybindings(Vf) {
  let Zt = _(32),
    {
      voiceHandleKeyEvent: vn,
      voiceCancelRecording: Ws,
      stripTrailing: mt,
      resetAnchor: dr,
      isActive: Ks,
      composer: Kt,
    } = Vf,
    ht = useVoiceGetState(),
    nt = useVoiceSetState(),
    ja = useKeybindingContext(),
    js = useHasNonAutocompleteOverlay(),
    uo = useVoiceAvailable(),
    lo = useVoiceSelector(eu),
    co = useAppStateSelector(tu),
    pr = useClock(),
    Lf = At(ci, fi),
    Fs = ja ? ja.bindings : Lf,
    $s;
  bb0: {
    if (!uo) {
      $s = null;
      break bb0;
    }
    let jt = null;
    if (Zt[0] !== Fs || Zt[1] !== jt) {
      for (const fo of Fs) {
        if (fo.context !== "Chat") {
          continue;
        }
        if (fo.chord.length !== 1) {
          continue;
        }
        let Bs = fo.chord[0];
        if (!Bs) {
          continue;
        }
        if (fo.action === "voice:pushToTalk") jt = Bs;
        else if (jt !== null && isSameKeySpec(Bs, jt)) jt = null;
      }
      ((Zt[0] = Fs), (Zt[1] = jt), (Zt[2] = jt));
    } else jt = Zt[2];
    $s = jt;
  }
  let qe = $s,
    Fa;
  if (Zt[3] !== qe)
    ((Fa = qe ? formatKeybindingKeyForPlatform(qe, getKeybindingPlatform()) : null), (Zt[3] = qe), (Zt[4] = Fa));
  else Fa = Zt[4];
  let Hs = Fa,
    Ae =
      qe !== null &&
      qe.key.length === 1 &&
      !qe.ctrl &&
      !qe.alt &&
      !qe.shift &&
      !qe.meta &&
      !qe.super
        ? qe.key
        : null,
    Tt = C(0),
    mr = C(0),
    Gs = C(0),
    po = C(!1),
    rt = C(null),
    gr = C(0),
    at = C(null),
    $a,
    Ba;
  if (Zt[5] !== nt || Zt[6] !== lo)
    (($a = () => {
      if (lo !== "recording") ((po.current = !1), (Gs.current = 0), nt(nu));
      else {
        if (((gr.current = 0), at.current)) (at.current(), (at.current = null));
        nt(ru);
      }
    }),
      (Ba = [lo, nt]),
      (Zt[5] = nt),
      (Zt[6] = lo),
      (Zt[7] = $a),
      (Zt[8] = Ba));
  else (($a = Zt[7]), (Ba = Zt[8]));
  E($a, Ba);
  let Ha, Ga;
  if (Zt[9] === MEMO_CACHE_SENTINEL)
    ((Ha = () => () => {
      if (at.current) (at.current(), (at.current = null));
    }),
      (Ga = []),
      (Zt[9] = Ha),
      (Zt[10] = Ga));
  else ((Ha = Zt[9]), (Ga = Zt[10]));
  E(Ha, Ga);
  let qa;
  if (Zt[11] !== nt)
    ((qa = function tn() {
      if (Tt.current === 0) {
        return;
      }
      if (rt.current) (rt.current(), (rt.current = null));
      ((Tt.current = 0), (mr.current = 0), nt(ou));
    }),
      (Zt[11] = nt),
      (Zt[12] = qa));
  else qa = Zt[12];
  let tn = qa,
    za;
  if (
    Zt[13] !== Ae ||
    Zt[14] !== pr ||
    Zt[15] !== Kt ||
    Zt[16] !== ht ||
    Zt[17] !== Ks ||
    Zt[18] !== js ||
    Zt[19] !== dr ||
    Zt[20] !== tn ||
    Zt[21] !== nt ||
    Zt[22] !== mt ||
    Zt[23] !== Ws ||
    Zt[24] !== uo ||
    Zt[25] !== vn ||
    Zt[26] !== qe ||
    Zt[27] !== co
  )
    ((za = (Ke) => {
      if (!uo) {
        return;
      }
      if (!Ks || js) {
        return;
      }
      if (Ke.key === "escape" && ht().voiceState === "recording") {
        (Ke.stopImmediatePropagation(), Ws(), dr());
        return;
      }
      if (
        co !== "tap" &&
        Kt.submit !== void 0 &&
        ht().awaitingVoiceSubmitDoubleTap
      ) {
        let Af = Kt.submit;
        let Nf = () => {
          if (((gr.current = 0), at.current))
            (at.current(), (at.current = null));
        };
        let qs = () => {
          (Nf(), nt(su));
        };
        let Pf =
          Ae !== null &&
          !Ke.ctrl &&
          !Ke.meta &&
          !Ke.shift &&
          (Ae === " " ? normalizeIdeographicSpaces(Ke.key) : Ke.key)[0] === Ae;
        let Df = Kt.cursorOffset === Kt.value.length;
        if (!Pf || !Df) qs();
        else if (at.current !== null) qs();
        else if (ht().voiceState === "idle") {
          let Ya = Date.now();
          let zs = gr.current;
          if (zs !== 0 && Ya - zs <= ui) {
            (Ke.stopImmediatePropagation(),
              (gr.current = 0),
              (at.current = pr.setTimeout(() => {
                at.current = null;
                let Xa = ht();
                if (
                  Xa.voiceState !== "idle" ||
                  !Xa.awaitingVoiceSubmitDoubleTap
                ) {
                  return;
                }
                let mo = Kt.value;
                let Uf =
                  mo.endsWith(Ae) || (Ae === " " && mo.endsWith("\u3000"))
                    ? mo.slice(0, -1)
                    : mo;
                if (!Af(Uf, !0)) {
                  return;
                }
                nt(iu);
              }, nn)));
            return;
          }
          if (zs !== 0) qs();
          else gr.current = Ya;
        }
      }
      if (qe === null) {
        return;
      }
      let ut;
      if (Ae !== null) {
        let hr = Ae === " " ? normalizeIdeographicSpaces(Ke.key) : Ke.key;
        ut =
          !Ke.ctrl &&
          !Ke.meta &&
          !Ke.shift &&
          hr[0] === Ae &&
          (hr.length === 1 || hr === Ae.repeat(hr.length))
            ? hr.length
            : null;
      } else ut = li(Ke, qe) ? 1 : null;
      if (ut === null) {
        tn();
        return;
      }
      if (co === "tap") {
        let Ja = ht().voiceState;
        if (Ja === "processing") {
          if (Ae === null) Ke.stopImmediatePropagation();
          return;
        }
        let Ys = Ja === "idle";
        if (Ys && Kt.value.length > 0) {
          return;
        }
        Ke.stopImmediatePropagation();
        let Wf = Tt.current === 0;
        if (((Tt.current = Tt.current + ut), rt.current)) rt.current();
        if (
          ((rt.current = pr.setTimeout(() => {
            ((rt.current = null), tn());
          }, nn)),
          !Wf)
        ) {
          if (Ae !== null) mt(ut, { char: Ae, floor: 0 });
          return;
        }
        if (Ys) {
          if (Ae !== null) mt(ut, { char: Ae, anchor: !0 });
          else mt(0, { anchor: !0 });
        } else if (Ae !== null) mt(ut, { char: Ae, floor: 0 });
        if ((vn(), Ys && ht().voiceState === "idle")) dr();
        return;
      }
      let br = ht().voiceState;
      if (po.current && br !== "idle") {
        if ((Ke.stopImmediatePropagation(), Ae !== null))
          mt(ut, { char: Ae, floor: Gs.current });
        vn();
        return;
      }
      if (br === "recording") {
        if (Ae === null) Ke.stopImmediatePropagation();
        return;
      }
      if (br === "processing" && Ae === null) {
        Ke.stopImmediatePropagation();
        return;
      }
      let Kf = Tt.current;
      if (
        ((Tt.current = Tt.current + ut),
        Ae === null || (br === "idle" && Tt.current >= ai))
      ) {
        if ((Ke.stopImmediatePropagation(), rt.current))
          (rt.current(), (rt.current = null));
        if (((Tt.current = 0), (po.current = !0), nt(au), Ae !== null))
          ((Gs.current = mt(mr.current + ut, { char: Ae, anchor: !0 })),
            (mr.current = 0),
            vn());
        else (mt(0, { anchor: !0 }), vn(ii));
        if (ht().voiceState === "idle") ((po.current = !1), dr());
        return;
      }
      if (Kf >= xr)
        (Ke.stopImmediatePropagation(),
          mt(ut, { char: Ae, floor: mr.current }));
      else mr.current = mr.current + ut;
      if (br === "idle" && Tt.current >= xr) nt(uu);
      if (rt.current) rt.current();
      rt.current = pr.setTimeout(() => {
        ((rt.current = null), tn());
      }, nn);
    }),
      (Zt[13] = Ae),
      (Zt[14] = pr),
      (Zt[15] = Kt),
      (Zt[16] = ht),
      (Zt[17] = Ks),
      (Zt[18] = js),
      (Zt[19] = dr),
      (Zt[20] = tn),
      (Zt[21] = nt),
      (Zt[22] = mt),
      (Zt[23] = Ws),
      (Zt[24] = uo),
      (Zt[25] = vn),
      (Zt[26] = qe),
      (Zt[27] = co),
      (Zt[28] = za));
  else za = Zt[28];
  let Js = za,
    Qa;
  if (Zt[29] !== Js || Zt[30] !== Hs)
    ((Qa = { handleKeyDown: Js, voiceKeyDisplay: Hs }),
      (Zt[29] = Js),
      (Zt[30] = Hs),
      (Zt[31] = Qa));
  else Qa = Zt[31];
  return Qa;
}
function getLayoutModeForWidth(l) {
  if (l >= 70) return "horizontal";
  return "compact";
}
function truncatePathSegments(l, b) {
  if (getStringWidth(l) <= b) return l;
  let x = "/",
    O = "\u2026",
    R = 1,
    v = 1,
    w = l.split(x),
    S = w[0] || "",
    M = w.at(-1) || "",
    D = getStringWidth(S),
    P = getStringWidth(M);
  if (w.length === 1) return truncateToWidth(l, b);
  if (S === "" && R + v + P >= b) return `${x}${truncateToWidth(M, Math.max(1, b - v))}`;
  if (S !== "" && R * 2 + v + P >= b)
    return `${O}${x}${truncateToWidth(M, Math.max(1, b - R - v))}`;
  if (w.length === 2) {
    let q = b - R - v - P;
    return `${truncateToWidthNoEllipsis(S, q)}${O}${x}${M}`;
  }
  let H = b - D - P - R - 2 * v;
  if (H <= 0) {
    let q = Math.max(0, b - P - R - 2 * v);
    return `${truncateToWidthNoEllipsis(S, q)}${x}${O}${x}${M}`;
  }
  let B = [];
  for (let q = w.length - 2; q > 0; q--) {
    let ie = w[q];
    if (ie && getStringWidth(ie) + v <= H) (B.unshift(ie), (H -= getStringWidth(ie) + v));
    else break;
  }
  if (B.length === 0) return `${S}${x}${O}${x}${M}`;
  return `${S}${x}${O}${x}${B.join(x)}${x}${M}`;
}
function getFooterInfo() {
  let l =
      a.DEMO_VERSION ??
      `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}${getBuildRefName()}`,
    b = uOn(),
    x = a.DEMO_VERSION ? "/code/claude" : formatPathForDisplay(getCwd()),
    O = a.CLAUDE_CODE_HIDE_CWD
      ? ""
      : b
        ? `${x} in ${b.replace(/^https?:\/\//, "")}`
        : x,
    R = getAPIProvider(),
    v = R !== "firstParty" ? THIRD_PARTY_PROVIDER_LABELS[R] : isClaudeAISubscriber() ? getSubscriptionName() : "API Usage Billing",
    w = getInitialSettings().agent;
  return { version: l, cwd: O, billingType: v, agentName: w };
}
function layoutModelAndBilling(l, b, x) {
  if (getStringWidth(l) + 3 + getStringWidth(b) > x)
    return {
      shouldSplit: !0,
      truncatedModel: truncate(l, x),
      truncatedBilling: truncate(b, x),
    };
  return {
    shouldSplit: !1,
    truncatedModel: truncate(l, Math.max(x - getStringWidth(b) - 3, 10)),
    truncatedBilling: b,
  };
}
function mu(md) {
  return md.settings.voice?.mode ?? "hold";
}
var gi = { r: 153, g: 153, b: 153 },
  hi = { r: 185, g: 185, b: 185 },
  bi = 2;
function VoiceStatusIndicator(fd) {
  let di = _(3),
    { voiceState: dd } = fd,
    pd = useAppStateSelector(mu);
  switch (dd) {
    case "recording": {
      if (pd === "tap") {
        let Ft;
        if (di[0] === MEMO_CACHE_SENTINEL)
          ((Ft = r(Text, {
            children: [
              r(Text, { color: "error", children: [CLAUDE_BULLET_GLYPH, " REC"] }),
              e(Text, { dimColor: !0, children: " \xB7 tap to send" }),
            ],
          })),
            (di[0] = Ft));
        else Ft = di[0];
        return Ft;
      }
      let Ft;
      if (di[1] === MEMO_CACHE_SENTINEL)
        ((Ft = e(Text, { dimColor: !0, children: "listening\u2026" })),
          (di[1] = Ft));
      else Ft = di[1];
      return Ft;
    }
    case "processing": {
      let Ft;
      if (di[2] === MEMO_CACHE_SENTINEL) ((Ft = e(xo, {})), (di[2] = Ft));
      else Ft = di[2];
      return Ft;
    }
    case "idle": {
      return null;
    }
  }
}
function VoiceCursorChar() {
  let gd = _(2),
    [, yr] = useVoiceLevelMeter(),
    lu;
  if (gd[0] !== yr)
    ((lu = yr ? e(Text, { color: yr.hex, children: yr.char }) : null),
      (gd[0] = yr),
      (gd[1] = lu));
  else lu = gd[1];
  return lu;
}
function VoiceWarmupHint() {
  let hd = _(1),
    fu;
  if (hd[0] === MEMO_CACHE_SENTINEL)
    ((fu = e(Text, { dimColor: !0, children: "keep holding\u2026" })),
      (hd[0] = fu));
  else fu = hd[0];
  return fu;
}
function xo() {
  let go = _(8),
    bd = useSettings(),
    du = shouldReduceMotion(bd.prefersReducedMotion),
    [pi, xd] = useAnimationFrame(du ? null : 50);
  if (du) {
    let Or;
    if (go[0] === MEMO_CACHE_SENTINEL)
      ((Or = e(Text, { color: "warning", children: "Voice: processing\u2026" })),
        (go[0] = Or));
    else Or = go[0];
    return Or;
  }
  let yd = xd / 1000,
    ho = (Math.sin((yd * Math.PI * 2) / bi) + 1) / 2,
    Or;
  if (go[1] !== ho) {
    let Od = Zd() ? quantizeToEighth(ho) : ho;
    Or = formatRgbColor(interpolateColor(gi, hi, Od));
    ((go[1] = ho), (go[2] = Or));
  } else Or = go[2];
  let mi = Or,
    bo;
  if (go[3] !== mi)
    ((bo = e(Text, { color: mi, children: "Voice: processing\u2026" })),
      (go[3] = mi),
      (go[4] = bo));
  else bo = go[4];
  let pu;
  if (go[5] !== pi || go[6] !== bo)
    ((pu = e(Box, { ref: pi, children: bo })),
      (go[5] = pi),
      (go[6] = bo),
      (go[7] = pu));
  else pu = go[7];
  return pu;
}
F();
F();
import { basename, dirname } from "path";
F();
var rn = toESM(pg(), 1);
function xi(l) {
  return `${rn.major(l, { loose: !0 })}.${rn.minor(l, { loose: !0 })}.${rn.patch(l, { loose: !0 })}`;
}
function Tn(
  l,
  b = {
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
  }.VERSION,
) {
  return V(() => {
    if (!l) return null;
    let x = xi(l);
    return x === xi(b) ? null : x;
  }, [l, b]);
}
var Ri = 2;
function Ro({
  isUpdating: l,
  onChangeIsUpdating: b,
  showSuccessMessage: x,
  verbose: O,
}) {
  let { storageV5: R } = useStorageV5Context(),
    v = useAppStateSelector((me) => me.autoUpdaterResult),
    w = useSetAppState(),
    [S, M] = d({}),
    [D, P] = d(!1),
    H = Tn(v?.version);
  E(() => {
    localInstallExists().then(P);
  }, []);
  let B = C(l),
    q = C(v?.status),
    ie = C(v?.consecutiveExeLockFailures ?? 0);
  E(() => {
    ((B.current = l),
      (q.current = v?.status),
      (ie.current = v?.consecutiveExeLockFailures ?? 0));
  });
  let Te = re(async () => {
    if (B.current) return;
    if (q.current === "no_permissions") {
      logForDebugging(
        "AutoUpdater: Skipping update check (no_permissions persists this session)",
      );
      return;
    }
    if (ie.current >= Ri) {
      logForDebugging(
        "AutoUpdater: Skipping update check (claude.exe locked by another process; damped for this session)",
      );
      return;
    }
    if (isAutoUpdaterDisabled()) return;
    if (isAutoUpdateCheckThrottled()) return;
    let me = {
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
      }.VERSION,
      G = getAutoUpdatesChannel(),
      oe = await fetchNpmPackageVersion(G),
      { maxVersion: J, forceDowngradeEnabled: ye } = await getMaxVersionConfig(),
      de = null,
      ce = !1;
    if (ye && J) {
      if (((ce = shouldForceDowngrade(me, J, "auto_updater")), ce)) de = J;
    }
    if (!de && oe) {
      if (J && isSemverGreaterThan(oe, J))
        if (
          (logForDebugging(
            `AutoUpdater: maxVersion ${J} is set, capping update from ${oe} to ${J}`,
          ),
          isSemverGreaterThan(J, me))
        )
          de = J;
        else
          logForDebugging(
            `AutoUpdater: current version ${me} is already at or above maxVersion ${J}, skipping update`,
          );
      else if (isSemverGreaterThan(oe, me)) de = oe;
    }
    if ((M({ global: me, latest: de ?? oe }), !de || shouldSkipVersion(de))) return;
    if (ce)
      logEvent("tengu_auto_updater_forced_downgrade", {
        from_version: getVersionForAnalytics(me),
        to_version: getVersionForAnalytics(de),
      });
    let he = Date.now();
    b(!0);
    let ne = getGlobalConfig();
    if (
      ne.installMethod !== "native" &&
      !Ie(process.env.DISABLE_INSTALLATION_CHECKS)
    )
      await removeInstalledSymlink();
    let be = await detectInstallType();
    if (
      (logForDebugging(`AutoUpdater: Detected installation type: ${be}`),
      be === "development")
    ) {
      (logForDebugging("AutoUpdater: Cannot auto-update development build"), b(!1));
      return;
    }
    let ge, Y, ue;
    if (be === "npm-local")
      (logForDebugging("AutoUpdater: Using local update method"),
        (Y = "local"),
        (ge = await applyLocalUpdate(G, de, R)));
    else if (be === "npm-global")
      (logForDebugging("AutoUpdater: Using global update method"),
        (Y = "global"),
        (ue = await applyGlobalUpdate(de, R)),
        (ge = ue.status));
    else if (be === "native") {
      (logForDebugging("AutoUpdater: Unexpected native installation in non-native updater"),
        b(!1));
      return;
    } else {
      logForDebugging("AutoUpdater: Unknown installation type, falling back to config");
      let Ee = ne.installMethod === "local";
      if (((Y = Ee ? "local" : "global"), Ee)) ge = await applyLocalUpdate(G, de, R);
      else ((ue = await applyGlobalUpdate(de, R)), (ge = ue.status));
    }
    b(!1);
    let se = ue?.failureHint;
    if (ge !== "in_progress")
      recordUpdateResult(
        {
          timestamp: new Date().toISOString(),
          path: Y === "local" ? "npm-local" : "npm-global",
          outcome: ge === "success" ? "success" : "failed",
          status: ge,
          version_from: me,
          version_to: de,
          error_code:
            ge === "install_failed" && getUpdateRestoreFailure()
              ? "update_apply_restore_failed"
              : se === "windows_running_exe_lock"
                ? "update_apply_exe_locked"
                : null,
        },
        R,
      );
    if (ge === "success")
      logEvent("tengu_auto_updater_success", {
        fromVersion: getVersionForAnalytics(me),
        toVersion: getVersionForAnalytics(de),
        durationMs: Date.now() - he,
        wasMigrated: Y === "local",
        installationType: fromEnum(be),
      });
    else if (ge !== "in_progress")
      logEvent("tengu_auto_updater_fail", {
        fromVersion: getVersionForAnalytics(me),
        attemptedVersion: getVersionForAnalytics(de),
        status: ge,
        durationMs: Date.now() - he,
        wasMigrated: Y === "local",
        installationType: fromEnum(be),
      });
    w((Ee) => {
      let Oe = Ee.autoUpdaterResult,
        we = Oe?.consecutiveExeLockFailures ?? 0,
        I =
          ge === "in_progress"
            ? we
            : se === "windows_running_exe_lock"
              ? we + 1
              : 0;
      if (
        Oe?.version === de &&
        Oe?.status === ge &&
        Oe?.failureHint === se &&
        (Oe?.consecutiveExeLockFailures ?? 0) === I
      )
        return Ee;
      return {
        ...Ee,
        autoUpdaterResult: {
          version: de,
          status: ge,
          failureHint: se,
          consecutiveExeLockFailures: I,
        },
      };
    });
  }, [w, R]);
  if (
    (E(() => {
      Te();
    }, [Te]),
    useInterval(Te, 1800000),
    !v?.version && (!S.global || !S.latest))
  )
    return null;
  if (!v?.version && !l) return null;
  let Z = v?.status === "install_failed" ? getUpdateRestoreFailure() : null;
  return r(Box, {
    flexDirection: "row",
    gap: 1,
    children: [
      O &&
        r(Text, {
          dimColor: !0,
          wrap: "truncate",
          children: [
            "globalVersion: ",
            S.global,
            " \xB7 latestVersion:",
            " ",
            S.latest,
          ],
        }),
      l
        ? e(N, {
            children: e(Box, {
              children: e(Text, {
                color: "text",
                dimColor: !0,
                wrap: "truncate",
                children: "Auto-updating\u2026",
              }),
            }),
          })
        : v?.status === "success" &&
          x &&
          H &&
          r(Text, {
            color: "success",
            wrap: "truncate",
            children: [
              e(StatusIndicator, { status: "success", withSpace: !0 }),
              "Update installed \xB7 Restart to apply",
            ],
          }),
      v?.status === "no_permissions" &&
        r(Text, {
          color: "error",
          wrap: "truncate",
          children: [
            e(StatusIndicator, { status: "error", withSpace: !0 }),
            "Auto-update failed: no write permission to npm prefix \xB7 Run",
            " ",
            e(Text, { bold: !0, children: "claude doctor" }),
          ],
        }),
      v?.status === "install_failed" &&
        (Z
          ? Z.preservedPath
            ? r(Box, {
                flexDirection: "column",
                children: [
                  r(Text, {
                    color: "error",
                    wrap: "truncate",
                    children: [
                      e(StatusIndicator, { status: "error", withSpace: !0 }),
                      "Update failed and ",
                      basename(Z.originalPath),
                      " could not be restored \u2014 it was preserved at:",
                    ],
                  }),
                  dirname(Z.preservedPath) === dirname(Z.originalPath)
                    ? r(Text, {
                        color: "error",
                        wrap: "truncate",
                        children: [
                          Z.preservedPath,
                          " \xB7 rename it back to",
                          " ",
                          basename(Z.originalPath),
                          " or run",
                          " ",
                          r(Text, {
                            bold: !0,
                            children: [
                              "npm i -g ",
                              {
                                ISSUES_EXPLAINER:
                                  "report the issue at https://github.com/anthropics/claude-code/issues",
                                PACKAGE_URL: "@anthropic-ai/claude-code",
                                README_URL:
                                  "https://code.claude.com/docs/en/overview",
                                VERSION: "2.1.263",
                                FEEDBACK_CHANNEL:
                                  "https://github.com/anthropics/claude-code/issues",
                                BUILD_TIME: "2026-09-06T01:08:56Z",
                                GIT_SHA:
                                  "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
                                HOOKS_WORKER_URL:
                                  "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                                DD_SOURCEMAP_GROUP: "darwin",
                              }.PACKAGE_URL,
                            ],
                          }),
                        ],
                      })
                    : r(Text, {
                        color: "error",
                        wrap: "truncate",
                        children: [
                          Z.preservedPath,
                          " \xB7 reinstall with",
                          " ",
                          r(Text, {
                            bold: !0,
                            children: [
                              "npm i -g ",
                              {
                                ISSUES_EXPLAINER:
                                  "report the issue at https://github.com/anthropics/claude-code/issues",
                                PACKAGE_URL: "@anthropic-ai/claude-code",
                                README_URL:
                                  "https://code.claude.com/docs/en/overview",
                                VERSION: "2.1.263",
                                FEEDBACK_CHANNEL:
                                  "https://github.com/anthropics/claude-code/issues",
                                BUILD_TIME: "2026-09-06T01:08:56Z",
                                GIT_SHA:
                                  "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
                                HOOKS_WORKER_URL:
                                  "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                                DD_SOURCEMAP_GROUP: "darwin",
                              }.PACKAGE_URL,
                            ],
                          }),
                        ],
                      }),
                ],
              })
            : r(Text, {
                color: "error",
                wrap: "truncate",
                children: [
                  e(StatusIndicator, { status: "error", withSpace: !0 }),
                  "Update failed and ",
                  basename(Z.originalPath),
                  " could not be restored (no preserved copy found) \xB7 reinstall with",
                  " ",
                  r(Text, {
                    bold: !0,
                    children: [
                      "npm i -g ",
                      {
                        ISSUES_EXPLAINER:
                          "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://code.claude.com/docs/en/overview",
                        VERSION: "2.1.263",
                        FEEDBACK_CHANNEL:
                          "https://github.com/anthropics/claude-code/issues",
                        BUILD_TIME: "2026-09-06T01:08:56Z",
                        GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
                        HOOKS_WORKER_URL:
                          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                        DD_SOURCEMAP_GROUP: "darwin",
                      }.PACKAGE_URL,
                    ],
                  }),
                ],
              })
          : v.failureHint === "windows_running_exe_lock"
            ? r(Text, {
                color: "error",
                wrap: "truncate",
                children: [
                  e(StatusIndicator, { status: "error", withSpace: !0 }),
                  "Auto-update failed: claude.exe in use (close other Claude Code sessions, including VS Code) \xB7 Run",
                  " ",
                  e(Text, { bold: !0, children: "claude doctor" }),
                ],
              })
            : r(Text, {
                color: "error",
                wrap: "truncate",
                children: [
                  e(StatusIndicator, { status: "error", withSpace: !0 }),
                  "Auto-update failed \xB7 Try ",
                  e(Text, { bold: !0, children: "claude doctor" }),
                  " or",
                  " ",
                  e(Text, {
                    bold: !0,
                    children: D
                      ? `cd ~/.claude/local && npm update ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL}`
                      : `npm i -g ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL}`,
                  }),
                ],
              })),
    ],
  });
}
F();
function Eu(l) {
  if (l instanceof ManifestSignatureError) return "signature_verification";
  if (l instanceof StagedBinaryChecksumError) return "checksum_mismatch";
  let b = l instanceof Error ? l.message : String(l),
    x = A(l);
  if (
    l instanceof StallTimeoutError ||
    x === "ETIMEDOUT" ||
    x === "ECONNABORTED" ||
    b.includes("Download timed out") ||
    b.includes("timeout")
  )
    return "timeout";
  if (b.includes("Checksum mismatch")) return "checksum_mismatch";
  if (b.includes("ENOENT") || b.includes("not found")) return "not_found";
  if (b.includes("EACCES") || b.includes("permission"))
    return "permission_denied";
  if (b.includes("ENOSPC")) return "disk_full";
  if (b.includes("npm")) return "npm_error";
  if (
    b.includes("network") ||
    b.includes("ECONNREFUSED") ||
    b.includes("ENOTFOUND")
  )
    return "network_error";
  let O = b.toLowerCase();
  if (
    b.includes("ENOEXEC") ||
    O.includes("exec format error") ||
    O.includes("bad cpu type") ||
    O.includes("cannot execute binary") ||
    O.includes("code signature") ||
    O.includes("gatekeeper") ||
    O.includes("killed: 9")
  )
    return "exec_format";
  if (
    O.includes("virus") ||
    O.includes("quarantine") ||
    O.includes("defender") ||
    O.includes(
      "operation did not complete successfully because the file contains",
    )
  )
    return "av_quarantine";
  if (
    b.includes("EXDEV") ||
    b.includes("EEXIST") ||
    b.includes("EBUSY") ||
    O.includes("rename") ||
    O.includes("move failed") ||
    O.includes("cross-device")
  )
    return "swap_failure";
  return "unknown";
}
function Vu(l) {
  if (l.wasUpdated) return "tengu_native_auto_updater_success";
  if (l.skippedUnverifiedRelease)
    return "tengu_native_auto_updater_skipped_unverified_release";
  return "tengu_native_auto_updater_up_to_date";
}
function wo({
  isUpdating: l,
  onChangeIsUpdating: b,
  showSuccessMessage: x,
  verbose: O,
}) {
  let { storageV5: R } = useStorageV5Context(),
    v = useAppStateSelector((G) => G.autoUpdaterResult),
    w = useSetAppState(),
    [S, M] = d({
      current: {
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
      }.VERSION,
    }),
    [D, P] = d(null),
    H = Tn(v?.version),
    B = getAutoUpdatesChannel();
  async function q() {
    if (l) return;
    if (v?.status === "success") return;
    if (isAutoUpdaterDisabled()) return;
    let G = await getMaxVersion();
    if (
      G &&
      isSemverGreaterThan(
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
        }.VERSION,
        G,
      )
    ) {
      let J = await getMaxVersionExternalMessage();
      P(J ?? "affects your version");
    }
    if (isAutoUpdateCheckThrottled()) return;
    b(!0);
    let oe = Date.now();
    logEvent("tengu_native_auto_updater_start", {});
    try {
      let J = await installLatest(B, !1, R),
        ye = {
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
        }.VERSION,
        de = Date.now() - oe;
      if (J.lockFailed) {
        logEvent("tengu_native_auto_updater_lock_contention", { latency_ms: de });
        return;
      }
      if (
        (M({ current: ye, latest: J.latestVersion }),
        logEvent(Vu(J), { latency_ms: de }),
        J.wasUpdated)
      )
        (recordUpdateResult(
          {
            timestamp: new Date().toISOString(),
            path: "native",
            outcome: "success",
            status: "success",
            version_from: ye,
            version_to: J.latestVersion ?? null,
            error_code: null,
          },
          R,
        ),
          w((ce) => {
            let he = ce.autoUpdaterResult;
            if (he?.version === J.latestVersion && he?.status === "success")
              return ce;
            return {
              ...ce,
              autoUpdaterResult: {
                version: J.latestVersion,
                status: "success",
              },
            };
          }));
    } catch (J) {
      let ye = Date.now() - oe,
        de = J instanceof Error ? J.message : String(J);
      (logForDebugging(`Native auto-updater failed: ${de}`, { level: "error" }),
        recordUpdateResult(
          {
            timestamp: new Date().toISOString(),
            path: "native",
            outcome: "failed",
            status: "install_failed",
            version_from: {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.263",
              FEEDBACK_CHANNEL:
                "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-09-06T01:08:56Z",
              GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
              HOOKS_WORKER_URL:
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              DD_SOURCEMAP_GROUP: "darwin",
            }.VERSION,
            version_to: null,
            error_code: null,
          },
          R,
        ));
      let ce = Eu(J),
        he = Jr(J) ?? "none";
      (logEvent("tengu_native_auto_updater_fail", {
        latency_ms: ye,
        error_code: he,
        error_timeout: ce === "timeout",
        error_checksum: ce === "checksum_mismatch",
        error_signature: ce === "signature_verification",
        error_not_found: ce === "not_found",
        error_permission: ce === "permission_denied",
        error_disk_full: ce === "disk_full",
        error_npm: ce === "npm_error",
        error_network: ce === "network_error",
        error_swap_failure: ce === "swap_failure",
        error_exec_format: ce === "exec_format",
        error_av_quarantine: ce === "av_quarantine",
      }),
        w((ne) => {
          let be = ne.autoUpdaterResult;
          if (be?.version === null && be?.status === "install_failed")
            return ne;
          return {
            ...ne,
            autoUpdaterResult: { version: null, status: "install_failed" },
          };
        }));
    } finally {
      b(!1);
    }
  }
  let ie = vr(q);
  (E(() => {
    ie();
  }, [B]),
    useInterval(() => void q(), 1800000));
  let Te = !!v?.status,
    Z = !!S.current && !!S.latest;
  if (!(!!D || Te || (l && Z))) return null;
  return r(Box, {
    flexDirection: "row",
    gap: 1,
    children: [
      O &&
        r(Text, {
          dimColor: !0,
          wrap: "truncate",
          children: ["current: ", S.current, " \xB7 ", B, ": ", S.latest],
        }),
      l
        ? e(Box, {
            children: e(Text, {
              dimColor: !0,
              wrap: "truncate",
              children: "Checking for updates",
            }),
          })
        : v?.status === "success" &&
          x &&
          H &&
          r(Text, {
            color: "success",
            wrap: "truncate",
            children: [
              e(StatusIndicator, { status: "success", withSpace: !0 }),
              "Update installed \xB7 Restart to update",
            ],
          }),
      v?.status === "install_failed" &&
        r(Text, {
          color: "error",
          wrap: "truncate",
          children: [
            e(StatusIndicator, { status: "error", withSpace: !0 }),
            "Auto-update failed \xB7 Run ",
            e(Text, { bold: !0, children: "claude doctor" }),
          ],
        }),
      D && !1,
    ],
  });
}
F();
import { homedir } from "os";
import { join as Yu } from "path";
function Xu(Qp) {
  return Qp.autoUpdaterResult;
}
function Ju(Ei) {
  return Ei.autoUpdaterResult?.status === "install_failed"
    ? { ...Ei, autoUpdaterResult: null }
    : Ei;
}
function Li(l, b) {
  switch (l) {
    case "homebrew":
      return ["brew", "upgrade", "--cask", b ?? "claude-code"];
    case "winget": {
      let x = process.env.LOCALAPPDATA;
      return [
        x ? Yu(x, "Microsoft", "WindowsApps", "winget.exe") : "winget",
        "upgrade",
        "--id",
        "Anthropic.ClaudeCode",
        "--exact",
        "--silent",
        "--disable-interactivity",
      ];
    }
    default:
      return null;
  }
}
function Ni(l, b) {
  switch (l) {
    case "homebrew":
      return `brew upgrade ${b ?? "claude-code"}`;
    case "winget":
      return "winget upgrade Anthropic.ClaudeCode";
    case "mise":
      return "mise upgrade claude";
    case "apk":
      return "apk upgrade claude-code";
    default:
      return "your package manager update command";
  }
}
var Nr = 1800000;
function Pr($p) {
  let Qe = _(39),
    {
      isUpdating: un,
      onChangeIsUpdating: So,
      showSuccessMessage: Bp,
      verbose: kn,
    } = $p,
    wt = useAppStateSelector(Xu),
    Lr = useSetAppState(),
    cn = sessionStateStore.of(useSession().host),
    [Hp, Lu] = d(cn.packageManagerLatestVersion),
    [Bt, Gp] = d("unknown"),
    [wi, qp] = d(null),
    Au;
  if (Qe[0] !== un) ((Au = () => un), (Qe[0] = un), (Qe[1] = Au));
  else Au = Qe[1];
  let Si = vr(Au),
    Nu,
    Pu;
  if (Qe[2] === MEMO_CACHE_SENTINEL)
    ((Nu = () => {
      getPackageManager().then((Du) => {
        if ((Gp(Du), Du === "homebrew")) qp(getHomebrewCaskName());
      });
    }),
      (Pu = []),
      (Qe[2] = Nu),
      (Qe[3] = Pu));
  else ((Nu = Qe[2]), (Pu = Qe[3]));
  E(Nu, Pu);
  let Uu;
  if (
    Qe[4] !== wt?.status ||
    Qe[5] !== un ||
    Qe[6] !== So ||
    Qe[7] !== Si ||
    Qe[8] !== Lr ||
    Qe[9] !== cn
  )
    ((Uu = async () => {
      if (un) {
        return;
      }
      if (wt?.status === "success") {
        return;
      }
      if (isAutoUpdaterDisabled()) {
        return;
      }
      if (isAutoUpdateCheckThrottled()) {
        return;
      }
      if (wt?.status === "install_failed") {
        if (Date.now() - cn.packageManagerUpdateLastFailedAt < Nr) {
          return;
        }
        Lr(Ju);
      }
      let [zp, _n] = await Promise.all([getAutoUpdatesChannel(), getPackageManager()]);
      let ki = zp;
      let _o = null;
      if (_n === "homebrew")
        ((_o = getHomebrewCaskName()),
          (ki = _o === "claude-code@latest" ? "latest" : "stable"));
      let lt =
        _n === "homebrew" ? await fetchVersionHomebrewOrGcs(_o ?? "claude-code", ki) : await fetchVersionFromGcs(ki);
      let fn = await getMaxVersion();
      let Wu = !1;
      if (fn && lt && isSemverGreaterThan(lt, fn)) {
        if (
          (logForDebugging(
            `PackageManagerAutoUpdater: maxVersion ${fn} is set, capping update from ${lt} to ${fn}`,
          ),
          isSemverAtLeast(
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.263",
              FEEDBACK_CHANNEL:
                "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-09-06T01:08:56Z",
              GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
              HOOKS_WORKER_URL:
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              DD_SOURCEMAP_GROUP: "darwin",
            }.VERSION,
            fn,
          ))
        ) {
          (logForDebugging(
            `PackageManagerAutoUpdater: current version ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION} is already at or above maxVersion ${fn}, skipping update`,
          ),
            cn.recordPackageManagerLatestVersion(null),
            Lu(null));
          return;
        }
        ((lt = fn), (Wu = !0));
      }
      let Ku =
        lt &&
        !isSemverAtLeast(
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.263",
            FEEDBACK_CHANNEL:
              "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-09-06T01:08:56Z",
            GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
            HOOKS_WORKER_URL:
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "darwin",
          }.VERSION,
          lt,
        ) &&
        !shouldSkipVersion(lt);
      let ju = Ku ? lt : null;
      if ((cn.recordPackageManagerLatestVersion(ju), Lu(ju), !Ku)) {
        return;
      }
      logForDebugging(
        `PackageManagerAutoUpdater: Update available ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION} -> ${lt}`,
      );
      let Yp = Ie(process.env.CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE);
      let Fu = Li(_n, _o);
      if (!Yp || !Fu || Wu) {
        return;
      }
      if (Si()) {
        return;
      }
      So(!0);
      let Xp = Date.now();
      let _i = { pm_homebrew: _n === "homebrew", pm_winget: _n === "winget" };
      logEvent("tengu_pkg_manager_auto_updater_start", _i);
      let [$u, ...Jp] = Fu;
      let In = await execFileNoThrowWithCwd($u, Jp, {
        cwd: homedir(),
        timeout: 300000,
        env:
          _n === "homebrew"
            ? { ...process.env, HOMEBREW_NO_AUTO_UPDATE: "" }
            : void 0,
      });
      let Bu = Date.now() - Xp;
      if ((So(!1), In.code === 0))
        (logEvent("tengu_pkg_manager_auto_updater_success", { ..._i, latency_ms: Bu }),
          Lr((Ii) => {
            let Hu = Ii.autoUpdaterResult;
            if (Hu?.version === lt && Hu?.status === "success") {
              return Ii;
            }
            return {
              ...Ii,
              autoUpdaterResult: { version: lt, status: "success" },
            };
          }));
      else
        (logForDebugging(
          `PackageManagerAutoUpdater: ${$u} exited ${In.code}: ${In.stderr || In.error || In.stdout}`,
        ),
          logEvent("tengu_pkg_manager_auto_updater_fail", {
            ..._i,
            latency_ms: Bu,
            exit_code: In.code,
          }),
          cn.recordPackageManagerUpdateFailure(Date.now()),
          Lr((Mi) => {
            if (Mi.autoUpdaterResult?.status === "install_failed") {
              return Mi;
            }
            return {
              ...Mi,
              autoUpdaterResult: { version: lt, status: "install_failed" },
            };
          }));
    }),
      (Qe[4] = wt?.status),
      (Qe[5] = un),
      (Qe[6] = So),
      (Qe[7] = Si),
      (Qe[8] = Lr),
      (Qe[9] = cn),
      (Qe[10] = Uu));
  else Uu = Qe[10];
  let Io = vr(Uu),
    Gu;
  if (Qe[11] !== Io)
    ((Gu = () => {
      Io();
    }),
      (Qe[11] = Io),
      (Qe[12] = Gu));
  else Gu = Qe[12];
  let qu;
  if (Qe[13] === MEMO_CACHE_SENTINEL) ((qu = []), (Qe[13] = qu));
  else qu = Qe[13];
  if ((E(Gu, qu), useInterval(Io, Nr), wt?.status === "success")) {
    if (!Bp) {
      return null;
    }
    let st;
    if (Qe[14] !== wt || Qe[15] !== kn)
      ((st =
        kn &&
        r(Text, {
          dimColor: !0,
          wrap: "truncate",
          children: [
            "current: ",
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.263",
              FEEDBACK_CHANNEL:
                "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-09-06T01:08:56Z",
              GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
              HOOKS_WORKER_URL:
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              DD_SOURCEMAP_GROUP: "darwin",
            }.VERSION,
            " \xB7 latest:",
            " ",
            wt.version,
          ],
        })),
        (Qe[14] = wt),
        (Qe[15] = kn),
        (Qe[16] = st));
    else st = Qe[16];
    const dt = Bt !== "unknown" && ` via ${Bt}`;
    let St;
    if (Qe[17] !== dt)
      ((St = r(Text, {
        color: "success",
        wrap: "truncate",
        children: ["\u2713 Update installed", dt, " \xB7 Restart to apply"],
      })),
        (Qe[17] = dt),
        (Qe[18] = St));
    else St = Qe[18];
    let pn;
    if (Qe[19] !== st || Qe[20] !== St)
      ((pn = r(Box, { flexDirection: "row", gap: 1, children: [st, St] })),
        (Qe[19] = st),
        (Qe[20] = St),
        (Qe[21] = pn));
    else pn = Qe[21];
    return pn;
  }
  if (un) {
    const st = Bt === "unknown" ? "Updating\u2026" : `Updating via ${Bt}\u2026`;
    let dt;
    if (Qe[22] !== st)
      ((dt = e(Text, { dimColor: !0, wrap: "truncate", children: st })),
        (Qe[22] = st),
        (Qe[23] = dt));
    else dt = Qe[23];
    return dt;
  }
  let Mo = wt?.status === "install_failed";
  if ((!Hp && !Mo) || Bt === "unknown") {
    return null;
  }
  let st;
  if (Qe[24] !== kn)
    ((st =
      kn &&
      r(Text, {
        dimColor: !0,
        wrap: "truncate",
        children: [
          "currentVersion: ",
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.263",
            FEEDBACK_CHANNEL:
              "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-09-06T01:08:56Z",
            GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
            HOOKS_WORKER_URL:
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "darwin",
          }.VERSION,
        ],
      })),
      (Qe[24] = kn),
      (Qe[25] = st));
  else st = Qe[25];
  let dt;
  if (Qe[26] !== wi || Qe[27] !== Bt)
    ((dt = Ni(Bt, wi)), (Qe[26] = wi), (Qe[27] = Bt), (Qe[28] = dt));
  else dt = Qe[28];
  let St;
  if (Qe[29] !== dt)
    ((St = e(Text, { bold: !0, children: dt })), (Qe[29] = dt), (Qe[30] = St));
  else St = Qe[30];
  let pn;
  if (Qe[31] !== Mo)
    ((pn = Mo && e(Text, { dimColor: !0, children: " (auto-update failed)" })),
      (Qe[31] = Mo),
      (Qe[32] = pn));
  else pn = Qe[32];
  let Vo;
  if (Qe[33] !== pn || Qe[34] !== St)
    ((Vo = r(Text, {
      color: "warning",
      wrap: "truncate",
      children: ["Update available! Run:", " ", St, pn],
    })),
      (Qe[33] = pn),
      (Qe[34] = St),
      (Qe[35] = Vo));
  else Vo = Qe[35];
  let zu;
  if (Qe[36] !== Vo || Qe[37] !== st)
    ((zu = r(N, { children: [st, Vo] })),
      (Qe[36] = Vo),
      (Qe[37] = st),
      (Qe[38] = zu));
  else zu = Qe[38];
  return zu;
}
function AutoUpdaterWrapper(hm) {
  let Lo = _(13),
    {
      isUpdating: Mn,
      onChangeIsUpdating: En,
      showSuccessMessage: Vn,
      verbose: Ln,
    } = hm,
    [Qu, bm] = d(null),
    [Zu, xm] = d(null),
    tl;
  if (Lo[0] === MEMO_CACHE_SENTINEL)
    ((tl = async function Pi() {
      let ym = !hasDetectedInstallType();
      let Om = Date.now();
      let No = await detectInstallType();
      (logFeatureOk("update_detection", {
        duration_ms: Date.now() - Om,
        first_in_process: ym,
        installation_type: fromEnum(No),
      }),
        logForDebugging(`AutoUpdaterWrapper: Installation type: ${No}`),
        bm(No === "native"),
        xm(No === "package-manager"));
    }),
      (Lo[0] = tl));
  else tl = Lo[0];
  let Pi = tl,
    [vm] = d(getRemainingStartupDelay),
    nl;
  if (Lo[1] === MEMO_CACHE_SENTINEL) ((nl = () => void Pi()), (Lo[1] = nl));
  else nl = Lo[1];
  if ((useTimeout(nl, vm), Qu === null || Zu === null)) {
    return null;
  }
  if (Zu) {
    let Dr;
    if (Lo[2] !== Mn || Lo[3] !== En || Lo[4] !== Vn || Lo[5] !== Ln)
      ((Dr = e(Pr, {
        verbose: Ln,
        isUpdating: Mn,
        onChangeIsUpdating: En,
        showSuccessMessage: Vn,
      })),
        (Lo[2] = Mn),
        (Lo[3] = En),
        (Lo[4] = Vn),
        (Lo[5] = Ln),
        (Lo[6] = Dr));
    else Dr = Lo[6];
    return Dr;
  }
  let Di = Qu ? wo : Ro,
    Dr;
  if (
    Lo[7] !== Di ||
    Lo[8] !== Mn ||
    Lo[9] !== En ||
    Lo[10] !== Vn ||
    Lo[11] !== Ln
  )
    ((Dr = e(Di, {
      verbose: Ln,
      isUpdating: Mn,
      onChangeIsUpdating: En,
      showSuccessMessage: Vn,
    })),
      (Lo[7] = Di),
      (Lo[8] = Mn),
      (Lo[9] = En),
      (Lo[10] = Vn),
      (Lo[11] = Ln),
      (Lo[12] = Dr));
  else Dr = Lo[12];
  return Dr;
}
function NotificationSegments({ segments: l }) {
  return l.map((b, x) => {
    let O = e(
      Text,
      { color: b.color, dimColor: b.dim, bold: b.bold, children: b.text },
      x,
    );
    return b.url === void 0 ? O : e(Link, { url: b.url, children: O }, x);
  });
}
function rl(Am) {
  return Am.notifications.current;
}
function ol(Nm) {
  return Nm.diffPanelVisible;
}
function CurrentNotification() {
  let Po = _(12),
    De = useAppStateSelector(rl),
    Lm = useAppStateSelector(ol);
  if (!De || !shouldShowNotification(De, Lm)) {
    return null;
  }
  if ("jsx" in De) {
    let pt;
    if (Po[0] !== De.jsx || Po[1] !== De.key)
      ((pt = e(Text, { wrap: "truncate", children: De.jsx }, De.key)),
        (Po[0] = De.jsx),
        (Po[1] = De.key),
        (Po[2] = pt));
    else pt = Po[2];
    return pt;
  }
  if ("segments" in De) {
    let pt;
    if (Po[3] !== De.segments)
      ((pt = e(NotificationSegments, { segments: De.segments })),
        (Po[3] = De.segments),
        (Po[4] = pt));
    else pt = Po[4];
    let Ur;
    if (Po[5] !== De.key || Po[6] !== pt)
      ((Ur = e(Text, { wrap: "truncate", children: pt }, De.key)),
        (Po[5] = De.key),
        (Po[6] = pt),
        (Po[7] = Ur));
    else Ur = Po[7];
    return Ur;
  }
  const pt = !De.color;
  let Ur;
  if (Po[8] !== De.color || Po[9] !== De.text || Po[10] !== pt)
    ((Ur = e(Text, {
      color: De.color,
      dimColor: pt,
      wrap: "truncate",
      children: De.text,
    })),
      (Po[8] = De.color),
      (Po[9] = De.text),
      (Po[10] = pt),
      (Po[11] = Ur));
  else Ur = Po[11];
  return Ur;
}
export {
  SuggestionList,
  MemoizedSuggestionList,
  isVimModeEnabled,
  getNewlineKeyHint,
  shouldPrependSpace,
  startsWithPunctuation,
  snapOffsetOffNewline,
  useVimTextInput,
  useVimModeInput,
  buildTextLayout,
  SearchInput,
  shouldClearSelectionForKey,
  createSelectionKeyDownHandler,
  useSelectionClearKeybinding,
  buildSelectionCopiedNotification,
  useCopyOnSelect,
  useSelectionBackgroundColor,
  getLayoutModeForWidth,
  truncatePathSegments,
  getFooterInfo,
  layoutModelAndBilling,
  authStateStore,
  useLoginCompleted,
  sessionStateStore,
  useIdeAtMentionNotification,
  formatAtMention,
  useVoiceAvailable,
  useVoiceComposer,
  useVoiceKeybindings,
  VoiceStatusIndicator,
  VoiceCursorChar,
  VoiceWarmupHint,
  AutoUpdaterWrapper,
  NotificationSegments,
  CurrentNotification,
};
