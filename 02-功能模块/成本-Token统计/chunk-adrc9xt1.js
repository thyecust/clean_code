// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useTerminalSize } from "../../01-核心基础设施/UI组件-TUI/use-terminal-size.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { antEnv } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { l, cc } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { useStorageV5Context } from "../../01-核心基础设施/核心工具-未归类/storage-v5-context.js";
import { getOverageBillingOverride, getMainLoopModel, isFableFamilyOrPinnedModel, isSemverGreaterThan, isSemverString, getSanitizedShortCode, getFeatureValue_CACHED_MAY_BE_STALE, saveGlobalConfig, getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getInitialSettings } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { replaceControlChars } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { Box, Text, useIsScreenReaderEnabled, Decorative, useTimeout } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { appStateStore } from "../../01-核心基础设施/终端与时钟/terminal-focus-state.js";
import { useClock } from "../../01-核心基础设施/终端与时钟/use-clock.js";
import { useIsMountRecent, useMountTime, useSettleAfterChange, useRefusedInputWindow, Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { shouldReduceMotion } from "../../01-核心基础设施/UI组件-TUI/chunk-dsg6bce8.js";
import { DEFAULT_RECENT_WINDOW_MS, useIsKeyRecent } from "../../01-核心基础设施/核心工具-未归类/recent-window.js";
import { useKeybindings } from "../键位绑定-Keybindings/keybinding-hooks.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { DotSeparatedList } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import {
  requiresUsageCredits,
  isCreditsOnlyTierSubscription,
  recordFableOverageConsent,
  EXTRA_USAGE_HELP_URL,
  USAGE_SETTINGS_URL,
  EXTRA_USAGE_ARTICLE_URL,
  isExtraUsageEnabled,
  fetchUsageUtilization,
  getUserFacingErrorMessage,
  enableOverageBilling,
  updateOverageSpendLimit,
  updateAutoReloadSettings,
  fetchPrepaidBalance,
  DEFAULT_USD_CREDIT_BUNDLES,
  fetchAvailableBundles,
  fetchPaymentMethod,
  purchaseCredits,
  previewPurchaseTax,
  fetchCreditPurchaseStatus,
  getCurrencySymbol,
  formatCurrencyAmount,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { hn } from "../../01-核心基础设施/UI组件-TUI/chunk-tp42fv8j.js";
import { ConfirmPrompt } from "../../01-核心基础设施/UI组件-TUI/confirm-prompt.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { ReserveHeightBox } from "../../01-核心基础设施/UI组件-TUI/tool-result-row.js";
import { ClawdMascot } from "../../03-入口与运行时/会话UI-REPL/clawd-mascot.js";
import { FocusableBox } from "../../01-核心基础设施/UI组件-TUI/focusable-box.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/UI组件-TUI/spinner-message-line.js";
import { ProgressBar } from "../../01-核心基础设施/UI组件-TUI/progress-bar.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import { E, vr, C, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
import { stripVTControlCharacters } from "util";
F();
F();
function getForcedFirstLaunchOverride() {
  let s = antEnv.CLAUDE_CODE_FORCE_FIRST_LAUNCH;
  if (s === void 0) return;
  if (isSemverString(s)) return { pretendLastSeen: s };
  return Ie(s) ? { pretendLastSeen: void 0 } : void 0;
}
function isNewerVersionAvailable(
  s,
  a = {
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
  if (!isSemverString(a)) return !1;
  if (!isSemverString(s)) return !0;
  try {
    return isSemverGreaterThan(a, s);
  } catch {
    return !0;
  }
}
function ou(ys) {
  return isNewerVersionAvailable(ys.lastClawdEntranceVersion)
    ? {
        ...ys,
        lastClawdEntranceVersion: {
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
      }
    : ys;
}
var No = { dot: "\xB7", wave: "~" };
function Y(s, a, c, g) {
  return Array.from({ length: c }, () => ({ pose: s, offset: a, x: g }));
}
function Ft(s) {
  return [
    { pose: "default", offset: 1, x: s, poof: "dot" },
    { pose: "default", offset: 1, x: s, poof: "wave" },
  ];
}
var no = [
    ...Ft(),
    ...Y("arms-up", 0, 3),
    ...Y("default", 0, 1),
    ...Ft(),
    ...Y("arms-up", 0, 3),
    ...Y("default", 0, 1),
  ],
  ks = [
    ...Y("look-right", 0, 5),
    ...Y("look-left", 0, 5),
    ...Y("default", 0, 1),
  ],
  _s = [
    ...Y("default", 0, 12),
    ...Y("look-right", 0, 5),
    ...Y("look-left", 0, 5),
  ],
  So = [no, ks],
  $t = { pose: "default", offset: 0 },
  Mt = 60;
function hs(s, a) {
  if (!a || s.length === 0) return s;
  let c = s[0],
    g = c.x !== void 0 && c.x !== 0 ? c : $t,
    x = Math.max(1, Math.round(a / Mt));
  return [...Array.from({ length: x }, () => g), ...s];
}
var vs = (s) => s + 1,
  We = 3,
  At = 9,
  Gl = [...no, ...Y("default", 1, 3)],
  eu = [
    ...Y("look-left", 0, 2),
    ...Y("look-right", 0, 2),
    ...Y("look-left", 0, 2),
    ...Y("arms-up", 0, 3),
    ...Y("default", 0, 1),
  ],
  nu = [
    ...Y("default", 1, 1, -At),
    ...Y("arms-up", 0, 2, -6),
    ...Y("default", 0, 1, -6),
    ...Y("default", 1, 1, -6),
    ...Y("arms-up", 0, 2, -3),
    ...Y("default", 0, 1, -3),
    ...Y("default", 1, 1, -3),
    ...Y("arms-up", 0, 2, 0),
    ...Ft(0),
    ...Y("default", 0, 1, 0),
  ],
  Vo = { jump: no, look: ks, celebrate: Gl, skip: nu, spin: eu };
function AnimatedClawdMascot(wt) {
  let Bo = _(16),
    Tl;
  if (Bo[0] !== wt)
    ((Tl = wt === void 0 ? {} : wt), (Bo[0] = wt), (Bo[1] = Tl));
  else Tl = Bo[1];
  let {
      autoplay: Ol,
      sequence: Pd,
      delayMs: Rd,
      onComplete: Ed,
      reserveCrouchRow: Nl,
    } = Tl,
    Fd = Ol === void 0 ? !1 : Ol,
    $d = Nl === void 0 ? !1 : Nl,
    {
      pose: ss,
      bounceOffset: Zn,
      x: is,
      poof: To,
      onClick: ls,
    } = Bt(Fd, Pd, Rd, Ed);
  const us = $d ? We + 1 : We;
  let Dt;
  if (Bo[2] !== ss) ((Dt = e(ClawdMascot, { pose: ss })), (Bo[2] = ss), (Bo[3] = Dt));
  else Dt = Bo[3];
  let Pt;
  if (Bo[4] !== Zn || Bo[5] !== Dt || Bo[6] !== is)
    ((Pt = e(Box, {
      marginTop: Zn,
      marginLeft: is,
      flexShrink: 0,
      children: Dt,
    })),
      (Bo[4] = Zn),
      (Bo[5] = Dt),
      (Bo[6] = is),
      (Bo[7] = Pt));
  else Pt = Bo[7];
  let Rt;
  if (Bo[8] !== Zn || Bo[9] !== To)
    ((Rt =
      To && Zn > 0
        ? r(N, {
            children: [
              e(Box, {
                position: "absolute",
                top: We - 1,
                left: 0,
                children: e(Text, { color: "inactive", children: No[To] }),
              }),
              e(Box, {
                position: "absolute",
                top: We - 1,
                right: 0,
                children: e(Text, { color: "inactive", children: No[To] }),
              }),
            ],
          })
        : null),
      (Bo[8] = Zn),
      (Bo[9] = To),
      (Bo[10] = Rt));
  else Rt = Bo[10];
  let Sl;
  if (Bo[11] !== ls || Bo[12] !== us || Bo[13] !== Pt || Bo[14] !== Rt)
    ((Sl = e(Decorative, {
      children: r(Box, {
        height: us,
        width: At,
        flexDirection: "column",
        flexShrink: 0,
        overflow: "hidden",
        onClick: ls,
        children: [Pt, Rt],
      }),
    })),
      (Bo[11] = ls),
      (Bo[12] = us),
      (Bo[13] = Pt),
      (Bo[14] = Rt),
      (Bo[15] = Sl));
  else Sl = Bo[15];
  return Sl;
}
function Bt(be, ae, cs, ds) {
  let Oe = _(38),
    ms = useIsScreenReaderEnabled(),
    Vl;
  if (Oe[0] !== ms)
    ((Vl = () => shouldReduceMotion(getInitialSettings().prefersReducedMotion) || ms),
      (Oe[0] = ms),
      (Oe[1] = Vl));
  else Vl = Oe[1];
  let [Ne] = d(Vl),
    Md = (be || ae !== void 0) && !Ne,
    [ye, fs] = d(Md ? 0 : -1),
    jl;
  if (Oe[2] !== be || Oe[3] !== cs || Oe[4] !== ae)
    ((jl = () => hs(ae ? Vo[ae] : be ? _s : no, ae ? cs : void 0)),
      (Oe[2] = be),
      (Oe[3] = cs),
      (Oe[4] = ae),
      (Oe[5] = jl));
  else jl = Oe[5];
  let [_n, Ad] = d(jl),
    Ll;
  if (Oe[6] !== ds) ((Ll = () => ds?.()), (Oe[6] = ds), (Oe[7] = Ll));
  else Ll = Oe[7];
  let Gn = vr(Ll),
    Ul = C(!ae),
    eo = useClock(),
    Kl;
  if (Oe[8] !== Gn || Oe[9] !== Ne)
    ((Kl = () => {
      if (Ne) Gn();
    }),
      (Oe[8] = Gn),
      (Oe[9] = Ne),
      (Oe[10] = Kl));
  else Kl = Oe[10];
  let Yl;
  if (Oe[11] !== Ne) ((Yl = [Ne]), (Oe[11] = Ne), (Oe[12] = Yl));
  else Yl = Oe[12];
  E(Kl, Yl);
  let Xl;
  if (Oe[13] !== be || Oe[14] !== ye || Oe[15] !== Ne)
    ((Xl = () => {
      if (be || Ne || ye !== -1 || !Ul.current) {
        return;
      }
      (Ad(So[Math.floor(Math.random() * So.length)]), fs(0));
    }),
      (Oe[13] = be),
      (Oe[14] = ye),
      (Oe[15] = Ne),
      (Oe[16] = Xl));
  else Xl = Oe[16];
  let gs = Xl,
    Il;
  if (
    Oe[17] !== be ||
    Oe[18] !== eo ||
    Oe[19] !== Gn ||
    Oe[20] !== ye ||
    Oe[21] !== _n ||
    Oe[22] !== ae
  )
    ((Il = () => {
      if (ye === -1) {
        return;
      }
      if (ye >= _n.length) {
        ((Ul.current = !0), Gn(), fs(be && !ae ? 0 : -1));
        return;
      }
      return eo.setTimeout(() => fs(vs), Mt);
    }),
      (Oe[17] = be),
      (Oe[18] = eo),
      (Oe[19] = Gn),
      (Oe[20] = ye),
      (Oe[21] = _n),
      (Oe[22] = ae),
      (Oe[23] = Il));
  else Il = Oe[23];
  let ql;
  if (
    Oe[24] !== be ||
    Oe[25] !== eo ||
    Oe[26] !== ye ||
    Oe[27] !== _n ||
    Oe[28] !== ae
  )
    ((ql = [ye, _n, be, ae, eo]),
      (Oe[24] = be),
      (Oe[25] = eo),
      (Oe[26] = ye),
      (Oe[27] = _n),
      (Oe[28] = ae),
      (Oe[29] = ql));
  else ql = Oe[29];
  E(Il, ql);
  let Wl;
  if (Oe[30] !== ae)
    ((Wl = ae ? Vo[ae].at(-1) : $t), (Oe[30] = ae), (Oe[31] = Wl));
  else Wl = Oe[31];
  let Bd = Wl,
    Ve = ye >= 0 && ye < _n.length ? _n[ye] : Bd;
  const ps = Ve.x ?? 0;
  let Hl;
  if (
    Oe[32] !== Ve.offset ||
    Oe[33] !== Ve.poof ||
    Oe[34] !== Ve.pose ||
    Oe[35] !== gs ||
    Oe[36] !== ps
  )
    ((Hl = {
      pose: Ve.pose,
      bounceOffset: Ve.offset,
      x: ps,
      poof: Ve.poof,
      onClick: gs,
    }),
      (Oe[32] = Ve.offset),
      (Oe[33] = Ve.poof),
      (Oe[34] = Ve.pose),
      (Oe[35] = gs),
      (Oe[36] = ps),
      (Oe[37] = Hl));
  else Hl = Oe[37];
  return Hl;
}
var Cs = ["skip", "jump", "look", "spin"];
function xs() {
  if (appStateStore.clawdEntranceTaken) return;
  if (!getForcedFirstLaunchOverride() && !isNewerVersionAvailable(getGlobalConfig().lastClawdEntranceVersion)) return;
  return (
    (appStateStore.clawdEntranceTaken = !0),
    Cs[Math.floor(Math.random() * Cs.length)]
  );
}
function useClawdEntranceSequence(bs) {
  let Jl = _(6),
    { storageV5: Et } = useStorageV5Context(),
    zl;
  if (Jl[0] !== bs)
    ((zl = () => (bs ? xs() : void 0)), (Jl[0] = bs), (Jl[1] = zl));
  else zl = Jl[1];
  let [Oo] = d(zl),
    Ql,
    Zl;
  if (Jl[2] !== Oo || Jl[3] !== Et)
    ((Ql = () => {
      if (Oo === void 0 || !isNewerVersionAvailable(getGlobalConfig().lastClawdEntranceVersion)) {
        return;
      }
      saveGlobalConfig(ou, Et);
    }),
      (Zl = [Oo, Et]),
      (Jl[2] = Oo),
      (Jl[3] = Et),
      (Jl[4] = Ql),
      (Jl[5] = Zl));
  else ((Ql = Jl[4]), (Zl = Jl[5]));
  return (E(Ql, Zl), Oo);
}
function id(tf) {
  return tf === 0 ? 1 : 0;
}
function ld(rf) {
  return Math.max(0, rf - 1);
}
function ud(Ac) {
  return Ac === 0 ? 0 : Ac - 1;
}
function cd(Bc) {
  return Bc === 2 ? 2 : Bc + 1;
}
function dd(mf) {
  return Math.max(0, mf - 1);
}
function fl(s) {
  if (isFableFamilyOrPinnedModel(getMainLoopModel()) && requiresUsageCredits() && !isCreditsOnlyTierSubscription()) recordFableOverageConsent(s);
}
var z = USAGE_SETTINGS_URL,
  gl = "https://www.anthropic.com/legal/consumer-terms",
  pl = 2000,
  bl = 30,
  yl = 500,
  _t = 1000,
  _l = 1e5,
  hl = 1e6;
function yn(s) {
  let a = s.trim();
  if (a === "") return { ok: !1, error: "Enter an amount" };
  let c = /^([0-9]+)(?:\.([0-9]{1,2}))?$/.exec(a);
  if (!c) return { ok: !1, error: "Enter an amount like 20 or 20.50" };
  let g = Number(c[1]) * 100 + Number((c[2] ?? "").padEnd(2, "0"));
  if (g <= 0) return { ok: !1, error: "Enter an amount" };
  if (g > hl)
    return { ok: !1, error: `Enter an amount of ${hl / 100} or less` };
  return { ok: !0, cents: g };
}
function Hn(s) {
  return s % 100 === 0 ? String(s / 100) : (s / 100).toFixed(2);
}
function Xe(Tt) {
  let Nt = _(6),
    [ws, tu] = d(Tt),
    [Ds, Ps] = d(Tt.length),
    ru = C(!0),
    au = C(Tt),
    Ot = C(Tt.length),
    su = C(!1),
    Rs = C(null),
    Es = C(!1),
    iu;
  if (Nt[0] === MEMO_CACHE_SENTINEL)
    ((iu = () => {
      Es.current = !1;
    }),
      (Nt[0] = iu));
  else iu = Nt[0];
  E(iu);
  let lu;
  if (Nt[1] === MEMO_CACHE_SENTINEL) {
    let uu = (Cm, xm) => {
      let St = Cm.slice(xm.length);
      (tu(St),
        (Rs.current = St.length),
        (Ot.current = St.length),
        Ps(St.length));
    };
    lu = (oo) => {
      let Rn = au.current;
      if (ru.current) {
        if (
          ((ru.current = !1),
          Rn !== "" &&
            !su.current &&
            Ot.current === Rn.length &&
            oo.length > Rn.length &&
            oo.startsWith(Rn))
        ) {
          ((Es.current = !0), uu(oo, Rn));
          return;
        }
      } else if (Es.current && oo.startsWith(Rn)) {
        uu(oo, Rn);
        return;
      }
      tu(oo);
    };
    Nt[1] = lu;
  } else lu = Nt[1];
  let km = lu,
    du;
  if (Nt[2] === MEMO_CACHE_SENTINEL)
    ((du = (Fs) => {
      let $s = Rs.current;
      if ($s !== null) {
        ((Rs.current = null), (Ot.current = $s), Ps($s));
        return;
      }
      if (Fs !== au.current.length) su.current = !0;
      ((Ot.current = Fs), Ps(Fs));
    }),
      (Nt[2] = du));
  else du = Nt[2];
  let wm = du,
    mu;
  if (Nt[3] !== Ds || Nt[4] !== ws)
    ((mu = { value: ws, setValue: km, cursor: Ds, setCursor: wm }),
      (Nt[3] = Ds),
      (Nt[4] = ws),
      (Nt[5] = mu));
  else mu = Nt[5];
  return mu;
}
function WIt(Dm) {
  let fu = _(8),
    {
      onDone: Ms,
      initialStep: As,
      entryReason: Bs,
      onBeforePurchase: Ts,
      onPurchaseSuccess: Os,
    } = Dm,
    gu;
  if (fu[0] === MEMO_CACHE_SENTINEL) ((gu = { s: "loading" }), (fu[0] = gu));
  else gu = fu[0];
  let [Ns, Pm] = d(gu),
    pu;
  if (
    fu[1] !== Bs ||
    fu[2] !== As ||
    fu[3] !== Ts ||
    fu[4] !== Ms ||
    fu[5] !== Os ||
    fu[6] !== Ns
  )
    ((pu = e(ReserveHeightBox, {
      children: e(vl, {
        onDone: Ms,
        step: Ns,
        setStep: Pm,
        initialStep: As,
        entryReason: Bs,
        onBeforePurchase: Ts,
        onPurchaseSuccess: Os,
      }),
    })),
      (fu[1] = Bs),
      (fu[2] = As),
      (fu[3] = Ts),
      (fu[4] = Ms),
      (fu[5] = Os),
      (fu[6] = Ns),
      (fu[7] = pu));
  else pu = fu[7];
  return pu;
}
function vl({
  onDone: s,
  step: a,
  setStep: c,
  initialStep: g,
  entryReason: x,
  onBeforePurchase: P,
  onPurchaseSuccess: v,
}) {
  let { storageV5: k, credentials: b } = useStorageV5Context(),
    w = useIsKeyRecent(a.s),
    [M, B] = d(a.s),
    [T, X] = d(!1);
  if (M !== a.s) (X(sd(M)), B(a.s));
  let V = useTimeout(DEFAULT_RECENT_WINDOW_MS, M),
    O = T && !V && w(),
    [R, U] = d("USD"),
    [I, ie] = d([]),
    [Ee, Fe] = d(),
    [K, te] = d(null);
  async function pe(m = !0) {
    if (m) c({ s: "loading" });
    try {
      let A = getOverageBillingOverride(),
        re;
      if (A)
        re = {
          is_enabled: A.isEnabled,
          monthly_limit: A.spendLimitCents,
          used_credits: A.usedCents,
          currency: A.currency,
          utilization:
            A.spendLimitCents && A.spendLimitCents > 0
              ? (A.usedCents / A.spendLimitCents) * 100
              : 0,
        };
      let [oe, Ae, Be, Mo] = await Promise.all([
          re ? Promise.resolve(null) : fetchUsageUtilization(b),
          fetchPrepaidBalance(b),
          fetchPaymentMethod(b),
          fetchAvailableBundles(b),
        ]),
        rs = (Mo?.currency ?? Ae?.currency ?? "USD").toUpperCase();
      U(rs);
      let as = Mo?.bundles ?? [];
      (ie(as.length > 0 ? as : rs === "USD" ? DEFAULT_USD_CREDIT_BUNDLES : []),
        Fe(Mo?.stripe_product_id));
      let Ao = Mo?.expiry_policy_months ?? Ae?.expiry_policy_months ?? null;
      if ((te(Ao), getFeatureValue_CACHED_MAY_BE_STALE("tengu_satchel_banjo", !1))) {
        if (Ao !== null)
          if (Number.isInteger(Ao) && Ao > 0) logFeatureOk("extra_usage_expiry_notice");
          else logFeatureBad("extra_usage_expiry_notice", "invalid_months");
      }
      if (!re && oe === null) {
        c({
          s: "error",
          msg: "Couldn't load usage credit status \u2014 try /login if your session expired.",
        });
        return;
      }
      if (
        ((re ??= oe?.extra_usage ?? {
          is_enabled: !1,
          monthly_limit: null,
          used_credits: null,
          utilization: null,
        }),
        g === "buy_select")
      ) {
        if (!Be)
          return (
            logEvent("tengu_extra_usage_inline_dialog_fallback_browser", {
              reason: S("no_payment_method"),
            }),
            `No card on file \u2014 add a payment method at ${z}`
          );
        c({ s: "buy_select", pm: Be });
        return;
      }
      if (!isExtraUsageEnabled(re)) {
        c({ s: "not_enabled", pm: Be });
        return;
      }
      c({ s: "enabled", usage: re, balance: Ae, pm: Be });
    } catch (A) {
      (logForDebugging(`Failed to load extra usage status: ${A}`, { level: "error" }),
        c({ s: "error", msg: "Couldn't load usage credit status" }));
    }
  }
  let Q = vr(pe),
    ne = vr((m) => s(m));
  E(() => {
    (logEvent("tengu_extra_usage_inline_dialog_shown", {
      entry_reason: x ? S(x) : void 0,
    }),
      Q().then((m) => {
        if (m !== void 0) ne(m);
      }));
  }, [x]);
  function qe(m) {
    (logEvent("tengu_extra_usage_inline_dialog_cancel", { from_step: fromEnum(m) }),
      s(void 0, { display: "skip" }));
  }
  function Ro() {
    (logEvent("tengu_extra_usage_inline_dialog_enable_confirm", {}),
      c({
        s: "enabling",
        work: enableOverageBilling(b).then(async (m) => {
          if (
            (logEvent("tengu_extra_usage_inline_dialog_enable_result", { success: m }),
            !m)
          )
            return !1;
          if (!getOverageBillingOverride())
            (fl(k),
              await saveGlobalConfig((A) => {
                if (!A.oauthAccount) return A;
                if (A.oauthAccount.hasExtraUsageEnabled === !0) return A;
                return {
                  ...A,
                  oauthAccount: { ...A.oauthAccount, hasExtraUsageEnabled: !0 },
                };
              }, k));
          return (await pe(!1), !0);
        }),
      }));
  }
  function Jn(m) {
    if (!m) c({ s: "error", msg: "Couldn't turn on usage credits" });
  }
  function zn(m, A) {
    switch (m) {
      case "continue":
        s("Continuing with usage credits");
        break;
      case "buy":
        if (!A.pm)
          (logEvent("tengu_extra_usage_inline_dialog_fallback_browser", {
            reason: S("no_payment_method"),
          }),
            s(`No card on file \u2014 add a payment method at ${z}`));
        else c({ s: "buy_select", pm: A.pm });
        break;
      case "adjust":
        c({ s: "adjust_limit", current: A.usage.monthly_limit });
        break;
      case "auto_reload":
        if (!A.pm)
          (logEvent("tengu_extra_usage_inline_dialog_fallback_browser", {
            reason: S("no_payment_method"),
          }),
            s(`No card on file \u2014 add a payment method at ${z}`));
        else
          c({
            s: "auto_reload_config",
            current: A.balance?.auto_reload_settings,
            pm: A.pm,
          });
        break;
      case "manage":
        (tryOpenUrlInBrowser(z), s(`Opening ${z}`));
        break;
    }
  }
  function Eo(m, A, re) {
    logEvent("tengu_extra_usage_inline_dialog_auto_reload", {
      enabled: m,
      threshold_cents: A,
      reload_to_cents: re,
      currency: getSanitizedShortCode(R),
    });
    let oe = updateAutoReloadSettings(m, A, re, R, b),
      Ae = m
        ? oe.then(async (Be) => {
            if (Be.ok) await pe(!1);
            return Be;
          })
        : oe;
    c({ s: "auto_reload_saving", enabled: m, work: Ae });
  }
  function Qn(m, A) {
    if (!m.ok) {
      c({
        s: "error",
        msg: m.reason
          ? `Failed to update auto-reload: ${m.reason}`
          : "Failed to update auto-reload",
      });
      return;
    }
    if (!A) pe();
  }
  async function Ct(m, A) {
    if (
      (logEvent("tengu_extra_usage_inline_dialog_buy_confirm", {
        amount_cents: m,
        preset: !!A,
        currency: getSanitizedShortCode(R),
      }),
      c({ s: "buy_purchasing" }),
      P)
    ) {
      if (!(await P().catch(() => !1))) {
        c({
          s: "error",
          msg: "Couldn't turn on usage credits \u2014 no charge was made.",
        });
        return;
      }
    }
    let re = A?.local_credit_minor_units ?? m;
    try {
      let oe = await purchaseCredits(
        A?.id
          ? { kind: "bundle", bundle: A }
          : { kind: "custom", amountCents: m },
        b,
      );
      if (oe.payment_status === "success")
        (logEvent("tengu_extra_usage_inline_dialog_buy_result", {
          status: S("success"),
        }),
          c({ s: "buy_success", credit: re }));
      else if (oe.payment_status === "pending_invoice" && oe.purchase_id)
        c({ s: "buy_polling", purchaseId: oe.purchase_id, credit: re });
      else if (oe.payment_status === "requires_action")
        (logEvent("tengu_extra_usage_inline_dialog_buy_result", {
          status: S("3ds_fallback"),
        }),
          c({
            s: "error",
            msg: `Your card requires additional verification \u2014 this purchase was not completed. Try again at ${z}`,
          }));
      else c({ s: "error", msg: "Unexpected purchase state" });
    } catch (oe) {
      let Ae = getUserFacingErrorMessage(oe);
      if (cc(oe, (Be) => getUserFacingErrorMessage(Be) !== null))
        logForDebugging(`Extra usage credit purchase failed: ${Ae ?? l(oe)}`, {
          level: "error",
        });
      else logError(oe);
      (logEvent("tengu_extra_usage_inline_dialog_buy_result", { status: S("failed") }),
        c({
          s: "error",
          msg: Ae ? `Purchase failed: ${Ae}` : "Purchase failed",
        }));
    }
  }
  async function xt(m, A) {
    (logEvent("tengu_extra_usage_inline_dialog_adjust_limit", {
      old_cents: A ?? void 0,
      new_cents: m ?? void 0,
      unlimited: m === null,
      currency: getSanitizedShortCode(R),
    }),
      c({ s: "adjusting" }));
    let re = await updateOverageSpendLimit(m, R, b);
    if (!re.ok) {
      c({
        s: "error",
        msg: re.reason
          ? `Failed to update spend limit: ${re.reason}`
          : "Failed to update spend limit",
      });
      return;
    }
    s(
      m === null
        ? "Monthly limit set to unlimited"
        : `Monthly limit updated to ${formatCurrencyAmount(m, R, "fit")}`,
    );
  }
  let Fo = ad(K),
    kt = Fo !== null ? K : null;
  if (O)
    return e(Box, {
      paddingTop: 1,
      children: e(SpinnerMessageLine, { message: "Loading usage credit status\u2026" }),
    });
  switch (a.s) {
    case "loading":
      return e(Box, {
        paddingTop: 1,
        children: e(SpinnerMessageLine, { message: "Loading usage credit status\u2026" }),
      });
    case "enabling":
      return e(ts, {
        message: "Turning on usage credits\u2026",
        work: a.work,
        failure: !1,
        onDone: Jn,
      });
    case "adjusting":
      return e(Box, {
        paddingTop: 1,
        children: e(SpinnerMessageLine, { message: "Updating spend limit\u2026" }),
      });
    case "auto_reload_saving":
      return a.enabled
        ? e(ts, {
            message: "Turning on auto-reload\u2026",
            work: a.work,
            failure: { ok: !1, reason: null },
            onDone: (m) => Qn(m, !0),
          })
        : e(PlainAwait, {
            message: "Turning off auto-reload\u2026",
            work: a.work,
            failure: { ok: !1, reason: null },
            onDone: (m) => Qn(m, !1),
          });
    case "buy_purchasing":
      return e(ht, {
        message: "Processing payment\u2026 (may take a few seconds)",
      });
    case "buy_success": {
      let m = `Added ${formatCurrencyAmount(a.credit, R)} of usage credits`;
      return e(Bl, { message: m, onDone: () => (fl(k), v ? v(m) : s(m)) });
    }
    case "buy_polling":
      return e(Al, {
        purchaseId: a.purchaseId,
        onSuccess: () => c({ s: "buy_success", credit: a.credit }),
        onError: (m) => c({ s: "error", msg: m }),
      });
    case "not_enabled":
      return e(Dl, {
        pm: a.pm,
        onConfirm: Ro,
        onCancel: () => qe("not_enabled"),
      });
    case "enabled":
      return e(Pl, {
        step: a,
        currency: R,
        onAction: (m) => zn(m, a),
        onCancel: () => qe("enabled"),
      });
    case "buy_select":
      return e(Rl, {
        pm: a.pm,
        presets: I,
        currency: R,
        expiryNotice: Fo,
        onConfirm: (m) =>
          c({
            s: "buy_confirm",
            pm: a.pm,
            cents: m.local_price_minor_units,
            bundle: m,
          }),
        onCustom: () => c({ s: "buy_custom", pm: a.pm }),
        onCancel: () => (g === "buy_select" ? qe("buy_select") : void pe()),
      });
    case "buy_custom":
      return e(Fl, {
        pm: a.pm,
        initialCents: a.cents,
        currency: R,
        onConfirm: (m) => c({ s: "buy_confirm", pm: a.pm, cents: m }),
        onCancel: () => c({ s: "buy_select", pm: a.pm }),
      });
    case "buy_confirm":
      return e(El, {
        pm: a.pm,
        cents: a.cents,
        bundle: a.bundle,
        currency: R,
        stripeProductId: Ee,
        expiryMonths: kt,
        onConfirm: () => Ct(a.cents, a.bundle),
        onCancel: () =>
          c(
            a.bundle
              ? { s: "buy_select", pm: a.pm }
              : { s: "buy_custom", pm: a.pm, cents: a.cents },
          ),
      });
    case "adjust_limit":
      return e($l, {
        current: a.current,
        currency: R,
        onConfirm: (m) => xt(m, a.current),
        onCancel: () => void pe(),
      });
    case "auto_reload_config":
      return e(Ml, {
        current: a.current,
        pm: a.pm,
        currency: R,
        onSave: (m, A) => Eo(!0, m, A),
        onTurnOff: () => Eo(!1),
        onCancel: () => void pe(),
      });
    case "error":
      return e(wl, { msg: a.msg, onClose: () => qe("error") });
  }
}
function wl(Rm) {
  let jo = _(9),
    { msg: Ss, onClose: to } = Rm,
    bu;
  if (jo[0] !== to)
    ((bu = {
      "confirm:yes": () => {
        (tryOpenUrlInBrowser(z), to());
      },
    }),
      (jo[0] = to),
      (jo[1] = bu));
  else bu = jo[1];
  let yu;
  if (jo[2] === MEMO_CACHE_SENTINEL) ((yu = { context: "Confirmation" }), (jo[2] = yu));
  else yu = jo[2];
  useKeybindings(bu, yu);
  let _u;
  if (jo[3] === MEMO_CACHE_SENTINEL)
    ((_u = r(DotSeparatedList, {
      children: [
        e(KeybindingHint, { chord: "enter", action: `open ${z}` }),
        e(KeybindingHint, { chord: "escape", action: "cancel" }),
      ],
    })),
      (jo[3] = _u));
  else _u = jo[3];
  let Vt;
  if (jo[4] !== Ss)
    ((Vt = e(Box, {
      flexDirection: "column",
      gap: 1,
      children: e(Text, { color: "error", children: Ss }),
    })),
      (jo[4] = Ss),
      (jo[5] = Vt));
  else Vt = jo[5];
  let hu;
  if (jo[6] !== to || jo[7] !== Vt)
    ((hu = e(de, {
      title: "Usage credits",
      onCancel: to,
      color: "error",
      inputGuide: _u,
      children: Vt,
    })),
      (jo[6] = to),
      (jo[7] = Vt),
      (jo[8] = hu));
  else hu = jo[8];
  return hu;
}
function ke(s) {
  return `${s.brand ?? s.type} \xB7\xB7\xB7\xB7${s.last4 ?? ""}`;
}
function Dl(Em) {
  let He = _(64),
    { pm: ro, onConfirm: Vs, onCancel: jt } = Em,
    ao = useIsMountRecent(),
    { refusedWithin: so, noteRefused: io, epoch: Fm } = useRefusedInputWindow(),
    vu;
  if (He[0] !== ao || He[1] !== io || He[2] !== so)
    ((vu = function Lo() {
      if (ao() || so()) {
        return (io(), !0);
      }
      return !1;
    }),
      (He[0] = ao),
      (He[1] = io),
      (He[2] = so),
      (He[3] = vu));
  else vu = He[3];
  let Lo = vu,
    js = useMountTime(),
    Ls = useSettleAfterChange(Fm),
    Cu = C(!1),
    Lt,
    Ut,
    Kt,
    Yt,
    Xt,
    It,
    Uo,
    Ko,
    Yo,
    qt,
    Wt,
    Ht,
    Jt,
    zt,
    Qt,
    Zt,
    Gt,
    er,
    nr,
    or;
  if (
    He[4] !== ao ||
    He[5] !== Ls.remountKey ||
    He[6] !== io ||
    He[7] !== jt ||
    He[8] !== Vs ||
    He[9] !== ro ||
    He[10] !== Lo ||
    He[11] !== so ||
    He[12] !== js
  ) {
    let Xo = function Xo($m) {
      return () => {
        if (Cu.current) {
          return;
        }
        if (ao() || so()) {
          io();
          return;
        }
        ((Cu.current = !0), $m());
      };
    };
    Kt = de;
    qt = "Turn on usage credits";
    Wt = Xo(jt);
    Ht = "suggestion";
    Ut = Box;
    Xt = "column";
    It = 1;
    if (He[33] === MEMO_CACHE_SENTINEL)
      ((Uo = e(Text, { children: "Keep using Claude when you hit a limit." })),
        (He[33] = Uo));
    else Uo = He[33];
    let Je;
    if (He[34] !== ro)
      ((Je = ro
        ? `Card on file: ${ke(ro)}`
        : `No card on file \u2014 add one at ${z} before buying.`),
        (He[34] = ro),
        (He[35] = Je));
    else Je = He[35];
    if (He[36] !== Je)
      ((Ko = e(Text, { dimColor: !0, children: Je })),
        (He[36] = Je),
        (He[37] = Ko));
    else Ko = He[37];
    if (He[38] === MEMO_CACHE_SENTINEL)
      ((Yo = r(Text, {
        dimColor: !0,
        children: [
          "By turning on, you agree to turn on usage credits as defined in our Help Center article:",
          `
`,
          EXTRA_USAGE_HELP_URL,
        ],
      })),
        (He[38] = Yo));
    else Yo = He[38];
    Lt = ConfirmPrompt;
    Jt = Ls.remountKey;
    zt = Lo;
    Qt = js;
    Zt = !0;
    Gt = "Turn on";
    er = "Cancel";
    nr = "cancel";
    or = Xo(Vs);
    Yt = Xo(jt);
    ((He[4] = ao),
      (He[5] = Ls.remountKey),
      (He[6] = io),
      (He[7] = jt),
      (He[8] = Vs),
      (He[9] = ro),
      (He[10] = Lo),
      (He[11] = so),
      (He[12] = js),
      (He[13] = Lt),
      (He[14] = Ut),
      (He[15] = Kt),
      (He[16] = Yt),
      (He[17] = Xt),
      (He[18] = It),
      (He[19] = Uo),
      (He[20] = Ko),
      (He[21] = Yo),
      (He[22] = qt),
      (He[23] = Wt),
      (He[24] = Ht),
      (He[25] = Jt),
      (He[26] = zt),
      (He[27] = Qt),
      (He[28] = Zt),
      (He[29] = Gt),
      (He[30] = er),
      (He[31] = nr),
      (He[32] = or));
  } else
    ((Lt = He[13]),
      (Ut = He[14]),
      (Kt = He[15]),
      (Yt = He[16]),
      (Xt = He[17]),
      (It = He[18]),
      (Uo = He[19]),
      (Ko = He[20]),
      (Yo = He[21]),
      (qt = He[22]),
      (Wt = He[23]),
      (Ht = He[24]),
      (Jt = He[25]),
      (zt = He[26]),
      (Qt = He[27]),
      (Zt = He[28]),
      (Gt = He[29]),
      (er = He[30]),
      (nr = He[31]),
      (or = He[32]));
  let Je;
  if (
    He[39] !== Lt ||
    He[40] !== Yt ||
    He[41] !== Jt ||
    He[42] !== zt ||
    He[43] !== Qt ||
    He[44] !== Zt ||
    He[45] !== Gt ||
    He[46] !== er ||
    He[47] !== nr ||
    He[48] !== or
  )
    ((Je = e(
      Lt,
      {
        refuseInput: zt,
        openedAt: Qt,
        hideIndexes: Zt,
        confirmLabel: Gt,
        cancelLabel: er,
        focus: nr,
        onConfirm: or,
        onCancel: Yt,
      },
      Jt,
    )),
      (He[39] = Lt),
      (He[40] = Yt),
      (He[41] = Jt),
      (He[42] = zt),
      (He[43] = Qt),
      (He[44] = Zt),
      (He[45] = Gt),
      (He[46] = er),
      (He[47] = nr),
      (He[48] = or),
      (He[49] = Je));
  else Je = He[49];
  let tr;
  if (
    He[50] !== Ut ||
    He[51] !== Xt ||
    He[52] !== It ||
    He[53] !== Uo ||
    He[54] !== Ko ||
    He[55] !== Yo ||
    He[56] !== Je
  )
    ((tr = r(Ut, { flexDirection: Xt, gap: It, children: [Uo, Ko, Yo, Je] })),
      (He[50] = Ut),
      (He[51] = Xt),
      (He[52] = It),
      (He[53] = Uo),
      (He[54] = Ko),
      (He[55] = Yo),
      (He[56] = Je),
      (He[57] = tr));
  else tr = He[57];
  let xu;
  if (
    He[58] !== Kt ||
    He[59] !== qt ||
    He[60] !== Wt ||
    He[61] !== Ht ||
    He[62] !== tr
  )
    ((xu = e(Kt, { title: qt, onCancel: Wt, color: Ht, children: tr })),
      (He[58] = Kt),
      (He[59] = qt),
      (He[60] = Wt),
      (He[61] = Ht),
      (He[62] = tr),
      (He[63] = xu));
  else xu = He[63];
  return xu;
}
function Cl(s) {
  return replaceControlChars(stripVTControlCharacters(s)).trim();
}
function rd(s, a) {
  let c = (g) => new Date(g.getFullYear(), g.getMonth(), g.getDate()).getTime();
  return Math.round((c(a) - c(s)) / 86400000);
}
function xl(s, a) {
  if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_juniper_bassoon", !1)) return null;
  let c = null;
  for (let b of s?.promo_tranches ?? []) {
    let w = b.remaining_amount_minor_units,
      M = Date.parse(b.expires_at ?? "");
    if (typeof w !== "number" || w <= 0 || Number.isNaN(M)) continue;
    if (M <= a.getTime()) continue;
    let B = Cl(b.currency ?? "");
    if (!B) continue;
    if (!c || M < c.expiresMs) {
      let T = b.name ? Cl(b.name) : "";
      c = { expiresMs: M, amountMinorUnits: w, currency: B, name: T || null };
    }
  }
  if (!c) return null;
  let g = formatCurrencyAmount(c.amountMinorUnits, c.currency),
    x = c.name ? ` \xB7 ${c.name}` : "";
  if (c.expiresMs - a.getTime() < 864000000) {
    let b = rd(a, new Date(c.expiresMs)),
      w = b <= 0 ? "today" : b === 1 ? "in 1 day" : `in ${b} days`;
    return { text: `${g} of your balance expires ${w}${x}`, urgent: !0 };
  }
  let v = new Date(c.expiresMs),
    k = v.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      ...(v.getFullYear() !== a.getFullYear() && { year: "numeric" }),
    });
  return { text: `${g} expires ${k}${x}`, urgent: !1 };
}
function ad(s) {
  if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_satchel_banjo", !1)) return null;
  if (s === null || !Number.isInteger(s) || s <= 0) return null;
  return `Usage credits are valid for ${s} ${s === 1 ? "month" : "months"}. Learn more: ${EXTRA_USAGE_ARTICLE_URL}`;
}
function Pl(Mm) {
  let J = _(61),
    { step: Am, currency: ze, onAction: Us, onCancel: lo } = Mm,
    { columns: Bm } = useTerminalSize(),
    Ks = Math.min(Bm - 6, 50),
    { usage: le, balance: vn } = Am,
    ku;
  if (J[0] !== ze || J[1] !== le.used_credits)
    ((ku = le.used_credits !== null ? formatCurrencyAmount(le.used_credits, ze) : "\u2014"),
      (J[0] = ze),
      (J[1] = le.used_credits),
      (J[2] = ku));
  else ku = J[2];
  let Ys = ku,
    wu;
  if (J[3] !== ze || J[4] !== le.monthly_limit)
    ((wu =
      le.monthly_limit !== null
        ? formatCurrencyAmount(le.monthly_limit, ze, "fit")
        : "Unlimited"),
      (J[3] = ze),
      (J[4] = le.monthly_limit),
      (J[5] = wu));
  else wu = J[5];
  let Xs = wu,
    Du;
  if (J[6] !== le.utilization)
    ((Du = le.utilization !== null ? Math.round(le.utilization) : 0),
      (J[6] = le.utilization),
      (J[7] = Du));
  else Du = J[7];
  let rr = Du,
    Pu;
  if (J[8] !== vn || J[9] !== ze)
    ((Pu = vn ? formatCurrencyAmount(vn.amount, ze) : "\u2014"),
      (J[8] = vn),
      (J[9] = ze),
      (J[10] = Pu));
  else Pu = J[10];
  let Tm = Pu,
    Om = vn?.auto_reload_settings?.enabled === !0,
    ar,
    Ru;
  if (J[11] !== vn) {
    let Is = new Date();
    let Nm = new Date(Is.getFullYear(), Is.getMonth() + 1, 1);
    ar = Nm.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    Ru = xl(vn, Is);
    ((J[11] = vn), (J[12] = ar), (J[13] = Ru));
  } else ((ar = J[12]), (Ru = J[13]));
  let je = Ru,
    uo = le.is_enabled === !1;
  const qs = `${Tm} balance \xB7 auto-reload ${Om ? "on" : "off"}
`;
  let sr;
  if (J[14] !== qs)
    ((sr = { label: qs, value: "auto_reload" }), (J[14] = qs), (J[15] = sr));
  else sr = J[15];
  let Eu;
  if (J[16] === MEMO_CACHE_SENTINEL) ((Eu = { label: "Buy more", value: "buy" }), (J[16] = Eu));
  else Eu = J[16];
  let ir;
  if (J[17] !== uo)
    ((ir = uo
      ? []
      : [{ label: "Continue with usage credits", value: "continue" }]),
      (J[17] = uo),
      (J[18] = ir));
  else ir = J[18];
  let Fu, $u;
  if (J[19] === MEMO_CACHE_SENTINEL)
    ((Fu = { label: "Adjust monthly limit", value: "adjust" }),
      ($u = { label: "Manage on claude.ai", value: "manage" }),
      (J[19] = Fu),
      (J[20] = $u));
  else ((Fu = J[19]), ($u = J[20]));
  let Mu;
  if (J[21] !== sr || J[22] !== ir)
    ((Mu = [sr, Eu, ...ir, Fu, $u]), (J[21] = sr), (J[22] = ir), (J[23] = Mu));
  else Mu = J[23];
  let lr = Mu,
    ur;
  if (J[24] !== uo || J[25] !== le.disabled_reason)
    ((ur =
      uo &&
      e(Text, {
        color: "warning",
        children:
          le.disabled_reason === "out_of_credits"
            ? "Out of usage credits \u2014 buy more below to keep going."
            : "You've hit your monthly limit \u2014 raise it below, or it resets next month.",
      })),
      (J[24] = uo),
      (J[25] = le.disabled_reason),
      (J[26] = ur));
  else ur = J[26];
  let cr;
  if (J[27] !== je)
    ((cr =
      je !== null &&
      je.urgent &&
      e(Text, { color: "warning", children: je.text })),
      (J[27] = je),
      (J[28] = cr));
  else cr = J[28];
  let dr;
  if (J[29] !== Ys)
    ((dr = r(Text, { children: [Ys, " spent"] })), (J[29] = Ys), (J[30] = dr));
  else dr = J[30];
  const Ws = rr / 100;
  let fr;
  if (J[31] !== Ws || J[32] !== Ks)
    ((fr = e(ProgressBar, {
      ratio: Ws,
      width: Ks,
      fillColor: "rate_limit_fill",
      emptyColor: "rate_limit_empty",
    })),
      (J[31] = Ws),
      (J[32] = Ks),
      (J[33] = fr));
  else fr = J[33];
  let gr;
  if (J[34] !== rr)
    ((gr = r(Text, { children: [rr, "% used"] })), (J[34] = rr), (J[35] = gr));
  else gr = J[35];
  let pr;
  if (J[36] !== dr || J[37] !== fr || J[38] !== gr)
    ((pr = r(Box, { flexDirection: "row", gap: 1, children: [dr, fr, gr] })),
      (J[36] = dr),
      (J[37] = fr),
      (J[38] = gr),
      (J[39] = pr));
  else pr = J[39];
  let br;
  if (J[40] !== Xs || J[41] !== ar)
    ((br = r(Text, {
      dimColor: !0,
      children: ["Resets ", ar, " \xB7 ", Xs, " monthly limit"],
    })),
      (J[40] = Xs),
      (J[41] = ar),
      (J[42] = br));
  else br = J[42];
  let yr;
  if (J[43] !== je)
    ((yr =
      je !== null && !je.urgent && e(Text, { dimColor: !0, children: je.text })),
      (J[43] = je),
      (J[44] = yr));
  else yr = J[44];
  let _r;
  if (J[45] !== pr || J[46] !== br || J[47] !== yr)
    ((_r = r(Box, { flexDirection: "column", children: [pr, br, yr] })),
      (J[45] = pr),
      (J[46] = br),
      (J[47] = yr),
      (J[48] = _r));
  else _r = J[48];
  let hr;
  if (J[49] !== Us || J[50] !== lo || J[51] !== lr)
    ((hr = e(Select, {
      options: lr,
      onChange: Us,
      onCancel: lo,
      visibleOptionCount: lr.length,
    })),
      (J[49] = Us),
      (J[50] = lo),
      (J[51] = lr),
      (J[52] = hr));
  else hr = J[52];
  let Cr;
  if (J[53] !== ur || J[54] !== cr || J[55] !== _r || J[56] !== hr)
    ((Cr = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [ur, cr, _r, hr],
    })),
      (J[53] = ur),
      (J[54] = cr),
      (J[55] = _r),
      (J[56] = hr),
      (J[57] = Cr));
  else Cr = J[57];
  let Au;
  if (J[58] !== lo || J[59] !== Cr)
    ((Au = e(de, {
      title: "Usage credits",
      onCancel: lo,
      color: "suggestion",
      children: Cr,
    })),
      (J[58] = lo),
      (J[59] = Cr),
      (J[60] = Au));
  else Au = J[60];
  return Au;
}
function Rl(Sm) {
  let $e = _(30),
    {
      pm: Hs,
      presets: co,
      currency: Io,
      expiryNotice: xr,
      onConfirm: Js,
      onCustom: Qs,
      onCancel: Qe,
    } = Sm,
    Bu;
  if ($e[0] !== Io || $e[1] !== co) {
    let qo;
    if ($e[3] !== Io)
      ((qo = (kr, Vm) => {
        let Tu =
          kr.credit_minor_units > 0
            ? Math.round(
                (kr.discount_minor_units / kr.credit_minor_units) * 100,
              )
            : 0;
        return {
          label: formatCurrencyAmount(kr.local_credit_minor_units, Io, "fit"),
          description: Tu > 0 ? `Save ${Tu}%` : void 0,
          value: `p${Vm}`,
        };
      }),
        ($e[3] = Io),
        ($e[4] = qo));
    else qo = $e[4];
    let Fn, Mn;
    if ($e[5] === MEMO_CACHE_SENTINEL)
      ((Fn = { label: "Custom amount\u2026", value: "custom" }),
        (Mn = { label: "Cancel", value: "cancel" }),
        ($e[5] = Fn),
        ($e[6] = Mn));
    else ((Fn = $e[5]), (Mn = $e[6]));
    Bu = [...co.map(qo), Fn, Mn];
    (($e[0] = Io), ($e[1] = co), ($e[2] = Bu));
  } else Bu = $e[2];
  let wr = Bu,
    qo;
  if ($e[7] !== Qe || $e[8] !== Js || $e[9] !== Qs || $e[10] !== co)
    ((qo = function Wo(Zs) {
      if (Zs === "custom") {
        return Qs();
      }
      if (Zs === "cancel") {
        return Qe();
      }
      let jm = Number(Zs.slice(1));
      Js(co[jm]);
    }),
      ($e[7] = Qe),
      ($e[8] = Js),
      ($e[9] = Qs),
      ($e[10] = co),
      ($e[11] = qo));
  else qo = $e[11];
  let Wo = qo,
    Fn;
  if ($e[12] !== Hs) ((Fn = ke(Hs)), ($e[12] = Hs), ($e[13] = Fn));
  else Fn = $e[13];
  let Mn;
  if ($e[14] !== Fn)
    ((Mn = r(Text, { dimColor: !0, children: ["Payment: ", Fn] })),
      ($e[14] = Fn),
      ($e[15] = Mn));
  else Mn = $e[15];
  let Dr;
  if ($e[16] !== Wo || $e[17] !== Qe || $e[18] !== wr)
    ((Dr = e(Select, {
      options: wr,
      onChange: Wo,
      onCancel: Qe,
      visibleOptionCount: wr.length,
    })),
      ($e[16] = Wo),
      ($e[17] = Qe),
      ($e[18] = wr),
      ($e[19] = Dr));
  else Dr = $e[19];
  let Ou;
  if ($e[20] === MEMO_CACHE_SENTINEL)
    ((Ou = e(Text, {
      dimColor: !0,
      children:
        "By confirming, you allow Anthropic to charge your card in the amount above.",
    })),
      ($e[20] = Ou));
  else Ou = $e[20];
  let Pr;
  if ($e[21] !== xr)
    ((Pr = xr !== null && e(Text, { dimColor: !0, children: xr })),
      ($e[21] = xr),
      ($e[22] = Pr));
  else Pr = $e[22];
  let Rr;
  if ($e[23] !== Mn || $e[24] !== Dr || $e[25] !== Pr)
    ((Rr = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [Mn, Dr, Ou, Pr],
    })),
      ($e[23] = Mn),
      ($e[24] = Dr),
      ($e[25] = Pr),
      ($e[26] = Rr));
  else Rr = $e[26];
  let Nu;
  if ($e[27] !== Qe || $e[28] !== Rr)
    ((Nu = e(de, {
      title: "Buy usage credits",
      onCancel: Qe,
      color: "suggestion",
      children: Rr,
    })),
      ($e[27] = Qe),
      ($e[28] = Rr),
      ($e[29] = Nu));
  else Nu = $e[29];
  return Nu;
}
function fe(Lm) {
  let oi = _(11),
    { label: ei, value: ni, bold: mo, dim: fo } = Lm,
    Er;
  if (oi[0] !== mo || oi[1] !== fo || oi[2] !== ei)
    ((Er = e(Text, { dimColor: fo, bold: mo, children: ei })),
      (oi[0] = mo),
      (oi[1] = fo),
      (oi[2] = ei),
      (oi[3] = Er));
  else Er = oi[3];
  let Fr;
  if (oi[4] !== mo || oi[5] !== fo || oi[6] !== ni)
    ((Fr = e(Text, { dimColor: fo, bold: mo, children: ni })),
      (oi[4] = mo),
      (oi[5] = fo),
      (oi[6] = ni),
      (oi[7] = Fr));
  else Fr = oi[7];
  let Su;
  if (oi[8] !== Er || oi[9] !== Fr)
    ((Su = r(Box, { justifyContent: "space-between", children: [Er, Fr] })),
      (oi[8] = Er),
      (oi[9] = Fr),
      (oi[10] = Su));
  else Su = oi[10];
  return Su;
}
function El(Um) {
  let q = _(82),
    {
      pm: ti,
      cents: Le,
      bundle: Vu,
      currency: W,
      stripeProductId: $r,
      expiryMonths: ri,
      onConfirm: ai,
      onCancel: nn,
    } = Um,
    { credentials: Mr } = useStorageV5Context(),
    [Km, ju] = d(!1),
    Cn = Vu ? Vu.local_credit_minor_units : Le,
    xn = Cn - Le,
    Lu;
  if (q[0] !== Cn || q[1] !== xn)
    ((Lu = Cn > 0 && xn > 0 ? Math.round((xn / Cn) * 100) : 0),
      (q[0] = Cn),
      (q[1] = xn),
      (q[2] = Lu));
  else Lu = q[2];
  let Ar = Lu,
    [kn, Ym] = d("loading"),
    Uu,
    Ku;
  if (q[3] !== Le || q[4] !== Mr || q[5] !== W || q[6] !== $r)
    ((Uu = () => {
      let Yu = !0;
      return (
        previewPurchaseTax(Le, W, $r, Mr).then((Xm) => {
          if (Yu) Ym(Xm);
        }),
        () => {
          Yu = !1;
        }
      );
    }),
      (Ku = [Le, W, $r, Mr]),
      (q[3] = Le),
      (q[4] = Mr),
      (q[5] = W),
      (q[6] = $r),
      (q[7] = Uu),
      (q[8] = Ku));
  else ((Uu = q[7]), (Ku = q[8]));
  E(Uu, Ku);
  let we = kn === "loading",
    se = kn === null,
    Im = we || se ? 0 : kn.tax_minor_units,
    on = Le + Im,
    Xu;
  if (q[9] !== W || q[10] !== we || q[11] !== se || q[12] !== on)
    ((Xu = se
      ? [{ label: "Go back", value: "no" }]
      : [
          {
            label: we ? "Pay (calculating\u2026)" : `Pay ${formatCurrencyAmount(on, W)} now`,
            value: "yes",
            disabled: we,
          },
          { label: "Go back", value: "no" },
        ]),
      (q[9] = W),
      (q[10] = we),
      (q[11] = se),
      (q[12] = on),
      (q[13] = Xu));
  else Xu = q[13];
  let si = Xu,
    { columns: qm } = useTerminalSize(),
    rn = Math.max(0, Math.min(qm - 6, 44)),
    Ho = we || se ? "Tax" : (kn.tax_label ?? "Tax"),
    Br;
  if (q[14] !== rn) ((Br = "\u2500".repeat(rn)), (q[14] = rn), (q[15] = Br));
  else Br = q[15];
  let Iu;
  if (q[16] !== Br)
    ((Iu = e(Text, { dimColor: !0, children: Br })), (q[16] = Br), (q[17] = Iu));
  else Iu = q[17];
  let go = Iu;
  if (Km) {
    let po;
    if (q[18] === MEMO_CACHE_SENTINEL) ((po = () => ju(!1)), (q[18] = po));
    else po = q[18];
    let An;
    if (q[19] !== W || q[20] !== ai || q[21] !== on)
      ((An = e(Pn, {
        question: "Buy usage credits for",
        amountCents: on,
        currency: W,
        onConfirm: ai,
        onBack: po,
      })),
        (q[19] = W),
        (q[20] = ai),
        (q[21] = on),
        (q[22] = An));
    else An = q[22];
    return An;
  }
  const po =
    ri !== null
      ? `Usage credits (valid for ${ri} ${ri === 1 ? "mo" : "mos"})`
      : "Subtotal";
  let An;
  if (q[23] !== Cn || q[24] !== W)
    ((An = formatCurrencyAmount(Cn, W)), (q[23] = Cn), (q[24] = W), (q[25] = An));
  else An = q[25];
  let Tr;
  if (q[26] !== po || q[27] !== An)
    ((Tr = e(fe, { label: po, value: An })),
      (q[26] = po),
      (q[27] = An),
      (q[28] = Tr));
  else Tr = q[28];
  let Or;
  if (
    q[29] !== Le ||
    q[30] !== W ||
    q[31] !== xn ||
    q[32] !== Ar ||
    q[33] !== go
  )
    ((Or =
      xn > 0 &&
      r(N, {
        children: [
          e(fe, {
            label: `Discount${Ar > 0 ? ` (${Ar}%)` : ""}`,
            value: `\u2212${formatCurrencyAmount(xn, W)}`,
          }),
          go,
          e(fe, { label: "Subtotal after discount", value: formatCurrencyAmount(Le, W) }),
        ],
      })),
      (q[29] = Le),
      (q[30] = W),
      (q[31] = xn),
      (q[32] = Ar),
      (q[33] = go),
      (q[34] = Or));
  else Or = q[34];
  let Nr;
  if (
    q[35] !== W ||
    q[36] !== kn ||
    q[37] !== Ho ||
    q[38] !== we ||
    q[39] !== se
  )
    ((Nr = we
      ? e(fe, { label: Ho, value: "\u2026", dim: !0 })
      : se
        ? e(fe, { label: Ho, value: "\u2014", dim: !0 })
        : e(fe, {
            label: `${Ho} (${kl(kn.tax_rate_pct)})`,
            value: formatCurrencyAmount(kn.tax_minor_units, W),
          })),
      (q[35] = W),
      (q[36] = kn),
      (q[37] = Ho),
      (q[38] = we),
      (q[39] = se),
      (q[40] = Nr));
  else Nr = q[40];
  let Sr;
  if (q[41] !== W || q[42] !== we || q[43] !== se || q[44] !== on)
    ((Sr = we ? "\u2026" : se ? "\u2014" : formatCurrencyAmount(on, W)),
      (q[41] = W),
      (q[42] = we),
      (q[43] = se),
      (q[44] = on),
      (q[45] = Sr));
  else Sr = q[45];
  let Vr;
  if (q[46] !== Sr)
    ((Vr = e(fe, { label: "Total due", value: Sr, bold: !0 })),
      (q[46] = Sr),
      (q[47] = Vr));
  else Vr = q[47];
  let jr;
  if (
    q[48] !== rn ||
    q[49] !== go ||
    q[50] !== Or ||
    q[51] !== Nr ||
    q[52] !== Vr ||
    q[53] !== Tr
  )
    ((jr = r(Box, {
      flexDirection: "column",
      width: rn,
      children: [Tr, Or, Nr, go, Vr],
    })),
      (q[48] = rn),
      (q[49] = go),
      (q[50] = Or),
      (q[51] = Nr),
      (q[52] = Vr),
      (q[53] = Tr),
      (q[54] = jr));
  else jr = q[54];
  let qu;
  if (q[55] === MEMO_CACHE_SENTINEL) ((qu = e(Text, { children: "Payment " })), (q[55] = qu));
  else qu = q[55];
  let Lr;
  if (q[56] !== ti) ((Lr = ke(ti)), (q[56] = ti), (q[57] = Lr));
  else Lr = q[57];
  let Ur;
  if (q[58] !== Lr)
    ((Ur = e(Text, { dimColor: !0, children: Lr })), (q[58] = Lr), (q[59] = Ur));
  else Ur = q[59];
  let Kr;
  if (q[60] !== rn || q[61] !== Ur)
    ((Kr = r(Box, { width: rn, children: [qu, Ur] })),
      (q[60] = rn),
      (q[61] = Ur),
      (q[62] = Kr));
  else Kr = q[62];
  let Yr;
  if (q[63] !== se)
    ((Yr =
      se &&
      e(Text, {
        color: "warning",
        children: `Couldn't calculate tax. Try again, or buy at ${z}`,
      })),
      (q[63] = se),
      (q[64] = Yr));
  else Yr = q[64];
  let Xr;
  if (q[65] !== nn)
    ((Xr = (Wm) => {
      if (Wm !== "yes") {
        nn();
        return;
      }
      ju(!0);
    }),
      (q[65] = nn),
      (q[66] = Xr));
  else Xr = q[66];
  let Ir;
  if (q[67] !== nn || q[68] !== si || q[69] !== Xr)
    ((Ir = e(Select, {
      options: si,
      onChange: Xr,
      onCancel: nn,
      visibleOptionCount: 2,
    })),
      (q[67] = nn),
      (q[68] = si),
      (q[69] = Xr),
      (q[70] = Ir));
  else Ir = q[70];
  let qr;
  if (q[71] !== se)
    ((qr =
      !se &&
      e(Text, {
        dimColor: !0,
        children:
          "By confirming, you allow Anthropic to charge your card in the amount above.",
      })),
      (q[71] = se),
      (q[72] = qr));
  else qr = q[72];
  let Wr;
  if (
    q[73] !== jr ||
    q[74] !== Kr ||
    q[75] !== Yr ||
    q[76] !== Ir ||
    q[77] !== qr
  )
    ((Wr = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [jr, Kr, Yr, Ir, qr],
    })),
      (q[73] = jr),
      (q[74] = Kr),
      (q[75] = Yr),
      (q[76] = Ir),
      (q[77] = qr),
      (q[78] = Wr));
  else Wr = q[78];
  let Wu;
  if (q[79] !== nn || q[80] !== Wr)
    ((Wu = e(de, {
      title: "Buy usage credits",
      onCancel: nn,
      color: "suggestion",
      children: Wr,
    })),
      (q[79] = nn),
      (q[80] = Wr),
      (q[81] = Wu));
  else Wu = q[81];
  return Wu;
}
function kl(s) {
  return `${Number(s.toFixed(2))}%`;
}
function Fl(Hm) {
  let Ju = _(9),
    {
      pm: ii,
      initialCents: Hu,
      currency: Hr,
      onConfirm: li,
      onCancel: ci,
    } = Hm,
    zu;
  if (Ju[0] !== ii) ((zu = ke(ii)), (Ju[0] = ii), (Ju[1] = zu));
  else zu = Ju[1];
  const di = `Payment: ${zu}`,
    mi = Hu ? String(Hu / 100) : "75",
    fi = Hr === "USD" ? yl : void 0;
  let Qu;
  if (
    Ju[2] !== Hr ||
    Ju[3] !== ci ||
    Ju[4] !== li ||
    Ju[5] !== di ||
    Ju[6] !== mi ||
    Ju[7] !== fi
  )
    ((Qu = e(os, {
      title: "Buy usage credits",
      subtitle: di,
      initial: mi,
      minCents: fi,
      currency: Hr,
      footer:
        "By confirming, you allow Anthropic to charge your card in the amount above.",
      onSubmit: li,
      onCancel: ci,
    })),
      (Ju[2] = Hr),
      (Ju[3] = ci),
      (Ju[4] = li),
      (Ju[5] = di),
      (Ju[6] = mi),
      (Ju[7] = fi),
      (Ju[8] = Qu));
  else Qu = Ju[8];
  return Qu;
}
var qn = "yes";
function Pn(Jm) {
  let Ue = _(30),
    {
      question: gi,
      amountCents: pi,
      currency: bi,
      onConfirm: yi,
      onBack: an,
    } = Jm,
    { columns: _i } = useTerminalSize(),
    [Jr, Zu] = d(""),
    [hi, Gu] = d(0),
    [zm, Qm] = d(!1),
    ec = C(!1),
    nc = Jr.trim().toLowerCase() === qn,
    Jo = zm && !nc ? "error" : nc ? "success" : void 0,
    oc;
  if (Ue[0] !== an) ((oc = { "confirm:no": an }), (Ue[0] = an), (Ue[1] = oc));
  else oc = Ue[1];
  let tc;
  if (Ue[2] === MEMO_CACHE_SENTINEL) ((tc = { context: "Settings" }), (Ue[2] = tc));
  else tc = Ue[2];
  useKeybindings(oc, tc);
  let zr;
  if (Ue[3] !== pi || Ue[4] !== bi)
    ((zr = formatCurrencyAmount(pi, bi)), (Ue[3] = pi), (Ue[4] = bi), (Ue[5] = zr));
  else zr = Ue[5];
  let Qr;
  if (Ue[6] !== gi || Ue[7] !== zr)
    ((Qr = r(Text, { children: [gi, " ", zr, "."] })),
      (Ue[6] = gi),
      (Ue[7] = zr),
      (Ue[8] = Qr));
  else Qr = Ue[8];
  const vi = !Jo;
  let Zr;
  if (Ue[9] !== Jo || Ue[10] !== vi)
    ((Zr = r(Text, {
      color: Jo,
      dimColor: vi,
      children: ["Type ", qn, " to confirm."],
    })),
      (Ue[9] = Jo),
      (Ue[10] = vi),
      (Ue[11] = Zr));
  else Zr = Ue[11];
  const Ci = Jo ?? "warning";
  let ea;
  if (Ue[12] !== yi)
    ((ea = (Zm) => {
      if (Zm.trim().toLowerCase() === qn) {
        if (ec.current) {
          return;
        }
        ((ec.current = !0), yi());
      } else (Zu(""), Gu(0), Qm(!0));
    }),
      (Ue[12] = yi),
      (Ue[13] = ea));
  else ea = Ue[13];
  let na;
  if (
    Ue[14] !== _i ||
    Ue[15] !== hi ||
    Ue[16] !== an ||
    Ue[17] !== ea ||
    Ue[18] !== Jr
  )
    ((na = e(hn, {
      value: Jr,
      disableEscapeDoublePress: !0,
      onChange: Zu,
      onSubmit: ea,
      onExit: an,
      focus: !0,
      showCursor: !0,
      columns: _i,
      cursorOffset: hi,
      onChangeCursorOffset: Gu,
    })),
      (Ue[14] = _i),
      (Ue[15] = hi),
      (Ue[16] = an),
      (Ue[17] = ea),
      (Ue[18] = Jr),
      (Ue[19] = na));
  else na = Ue[19];
  let oa;
  if (Ue[20] !== Ci || Ue[21] !== na)
    ((oa = e(Box, {
      borderStyle: "single",
      borderColor: Ci,
      paddingX: 1,
      children: na,
    })),
      (Ue[20] = Ci),
      (Ue[21] = na),
      (Ue[22] = oa));
  else oa = Ue[22];
  let ta;
  if (Ue[23] !== oa || Ue[24] !== Qr || Ue[25] !== Zr)
    ((ta = r(Box, { flexDirection: "column", gap: 1, children: [Qr, Zr, oa] })),
      (Ue[23] = oa),
      (Ue[24] = Qr),
      (Ue[25] = Zr),
      (Ue[26] = ta));
  else ta = Ue[26];
  let rc;
  if (Ue[27] !== an || Ue[28] !== ta)
    ((rc = e(de, {
      title: "Confirm amount",
      onCancel: an,
      color: "warning",
      isCancelActive: !1,
      children: ta,
    })),
      (Ue[27] = an),
      (Ue[28] = ta),
      (Ue[29] = rc));
  else rc = Ue[29];
  return rc;
}
function $l(ef) {
  let ce = _(70),
    { current: ra, currency: Bn, onConfirm: zo, onCancel: aa } = ef,
    { columns: Qo } = useTerminalSize(),
    ac;
  if (ce[0] !== ra)
    ((ac = ra !== null ? Hn(ra) : "150"), (ce[0] = ra), (ce[1] = ac));
  else ac = ce[1];
  let nf = ac,
    { value: Tn, setValue: Zo, cursor: Go, setCursor: et } = Xe(nf),
    [Me, sa] = d(0),
    sc;
  if (ce[2] === MEMO_CACHE_SENTINEL) ((sc = ["set", "unlimited", "cancel"]), (ce[2] = sc));
  else sc = ce[2];
  let xi = sc,
    [On, ic] = d(0),
    [ki, lc] = d(!1),
    ia,
    la,
    ua,
    nt,
    ca,
    wi,
    da,
    ma,
    ot,
    tt,
    ga,
    pa,
    ba;
  if (
    ce[3] !== On ||
    ce[4] !== Qo ||
    ce[5] !== ki ||
    ce[6] !== Bn ||
    ce[7] !== Go ||
    ce[8] !== Me ||
    ce[9] !== aa ||
    ce[10] !== zo ||
    ce[11] !== et ||
    ce[12] !== Zo ||
    ce[13] !== Tn
  ) {
    wi = EARLY_RETURN_SENTINEL;
    bb0: {
      let Ke = yn(Tn);
      nt = !Ke.ok && (Tn.trim() !== "" || Me === 1) ? Ke.error : "";
      let Di = function Di() {
        let uc = xi[On];
        if (uc === "set") {
          if (!Ke.ok) {
            return;
          }
          if (Ke.cents > _l) {
            lc(!0);
            return;
          }
          zo(Ke.cents);
        } else if (uc === "unlimited") zo(null);
        else aa();
      };
      let Pi = function Pi(De) {
        if (De.key === "tab") {
          (De.preventDefault(), sa(id));
          return;
        }
        if (Me !== 1) {
          return;
        }
        if (De.key === "up") (De.preventDefault(), sa(0));
        else if (De.key === "down") De.preventDefault();
        else if (De.key === "left") (De.preventDefault(), ic(ld));
        else if (De.key === "right")
          (De.preventDefault(), ic((of) => Math.min(xi.length - 1, of + 1)));
        else if (De.key === "return") (De.preventDefault(), Di());
      };
      let Nn;
      if (ce[27] === MEMO_CACHE_SENTINEL)
        ((Nn = {
          set: "Set limit",
          unlimited: "Set to unlimited",
          cancel: "Cancel",
        }),
          (ce[27] = Nn));
      else Nn = ce[27];
      ua = Nn;
      if (ki && Ke.ok) {
        let sn;
        if (ce[28] === MEMO_CACHE_SENTINEL) ((sn = () => lc(!1)), (ce[28] = sn));
        else sn = ce[28];
        wi = e(Pn, {
          question: "Set your monthly spend limit to",
          amountCents: Ke.cents,
          currency: Bn,
          onConfirm: () => zo(Ke.cents),
          onBack: sn,
        });
        break bb0;
      }
      la = de;
      pa = "Set monthly spend limit";
      ba = aa;
      ca = "suggestion";
      ia = FocusableBox;
      da = 1;
      ma = Pi;
      if (ce[29] === MEMO_CACHE_SENTINEL)
        ((ot = e(Text, {
          children:
            "You can set a maximum amount you can spend on usage credits per month.",
        })),
          (ce[29] = ot));
      else ot = ce[29];
      const sn = Me === 0 ? "suggestion" : "inactive";
      let ln;
      if (ce[30] !== Bn) ((ln = getCurrencySymbol(Bn)), (ce[30] = Bn), (ce[31] = ln));
      else ln = ce[31];
      let un;
      if (ce[32] !== ln)
        ((un = e(Text, { children: ln })), (ce[32] = ln), (ce[33] = un));
      else un = ce[33];
      let at, dc;
      if (ce[34] === MEMO_CACHE_SENTINEL)
        ((at = () => sa(1)), (dc = () => sa(1)), (ce[34] = at), (ce[35] = dc));
      else ((at = ce[34]), (dc = ce[35]));
      const Ri = Me === 0;
      const Ei = Me === 0;
      let ya;
      if (
        ce[36] !== Qo ||
        ce[37] !== Go ||
        ce[38] !== et ||
        ce[39] !== Zo ||
        ce[40] !== Ri ||
        ce[41] !== Ei ||
        ce[42] !== Tn
      )
        ((ya = e(hn, {
          value: Tn,
          onChange: Zo,
          onSubmit: at,
          onHistoryDown: dc,
          disableCursorMovementForUpDownKeys: !0,
          focus: Ri,
          showCursor: Ei,
          columns: Qo,
          cursorOffset: Go,
          onChangeCursorOffset: et,
        })),
          (ce[36] = Qo),
          (ce[37] = Go),
          (ce[38] = et),
          (ce[39] = Zo),
          (ce[40] = Ri),
          (ce[41] = Ei),
          (ce[42] = Tn),
          (ce[43] = ya));
      else ya = ce[43];
      if (ce[44] !== sn || ce[45] !== un || ce[46] !== ya)
        ((tt = r(Box, {
          borderStyle: "single",
          borderColor: sn,
          paddingX: 1,
          children: [un, ya],
        })),
          (ce[44] = sn),
          (ce[45] = un),
          (ce[46] = ya),
          (ce[47] = tt));
      else tt = ce[47];
      ga =
        Ke.ok &&
        r(Text, {
          color: "success",
          children: ["Monthly limit: ", formatCurrencyAmount(Ke.cents, Bn)],
        });
    }
    ((ce[3] = On),
      (ce[4] = Qo),
      (ce[5] = ki),
      (ce[6] = Bn),
      (ce[7] = Go),
      (ce[8] = Me),
      (ce[9] = aa),
      (ce[10] = zo),
      (ce[11] = et),
      (ce[12] = Zo),
      (ce[13] = Tn),
      (ce[14] = ia),
      (ce[15] = la),
      (ce[16] = ua),
      (ce[17] = nt),
      (ce[18] = ca),
      (ce[19] = wi),
      (ce[20] = da),
      (ce[21] = ma),
      (ce[22] = ot),
      (ce[23] = tt),
      (ce[24] = ga),
      (ce[25] = pa),
      (ce[26] = ba));
  } else
    ((ia = ce[14]),
      (la = ce[15]),
      (ua = ce[16]),
      (nt = ce[17]),
      (ca = ce[18]),
      (wi = ce[19]),
      (da = ce[20]),
      (ma = ce[21]),
      (ot = ce[22]),
      (tt = ce[23]),
      (ga = ce[24]),
      (pa = ce[25]),
      (ba = ce[26]));
  if (wi !== EARLY_RETURN_SENTINEL) return wi;
  let Nn;
  if (ce[48] !== nt)
    ((Nn = nt && e(Text, { color: "error", children: nt })),
      (ce[48] = nt),
      (ce[49] = Nn));
  else Nn = ce[49];
  let sn;
  if (ce[50] === MEMO_CACHE_SENTINEL)
    ((sn = e(Text, {
      dimColor: !0,
      children: "This spend limit goes into effect immediately.",
    })),
      (ce[50] = sn));
  else sn = ce[50];
  let ln;
  if (ce[51] !== On || ce[52] !== ua || ce[53] !== Me)
    ((ln = e(Box, {
      flexDirection: "row",
      gap: 2,
      children: xi.map((mc, fc) =>
        r(
          Text,
          {
            color: Me === 1 && On === fc ? "suggestion" : void 0,
            children: [Me === 1 && On === fc ? figures.pointer : " ", " ", ua[mc]],
          },
          mc,
        ),
      ),
    })),
      (ce[51] = On),
      (ce[52] = ua),
      (ce[53] = Me),
      (ce[54] = ln));
  else ln = ce[54];
  let un;
  if (
    ce[55] !== ia ||
    ce[56] !== Nn ||
    ce[57] !== ln ||
    ce[58] !== da ||
    ce[59] !== ma ||
    ce[60] !== ot ||
    ce[61] !== tt ||
    ce[62] !== ga
  )
    ((un = r(ia, {
      gap: da,
      onKeyDown: ma,
      children: [ot, tt, ga, Nn, sn, ln],
    })),
      (ce[55] = ia),
      (ce[56] = Nn),
      (ce[57] = ln),
      (ce[58] = da),
      (ce[59] = ma),
      (ce[60] = ot),
      (ce[61] = tt),
      (ce[62] = ga),
      (ce[63] = un));
  else un = ce[63];
  let at;
  if (
    ce[64] !== la ||
    ce[65] !== ca ||
    ce[66] !== un ||
    ce[67] !== pa ||
    ce[68] !== ba
  )
    ((at = e(la, { title: pa, onCancel: ba, color: ca, children: un })),
      (ce[64] = la),
      (ce[65] = ca),
      (ce[66] = un),
      (ce[67] = pa),
      (ce[68] = ba),
      (ce[69] = at));
  else at = ce[69];
  return at;
}
function Ml(af) {
  let j = _(134),
    {
      current: cn,
      pm: wn,
      currency: he,
      onSave: Fi,
      onTurnOff: $i,
      onCancel: _a,
    } = af,
    { columns: Dn } = useTerminalSize(),
    dn = cn?.enabled === !0,
    gc;
  if (j[0] !== cn)
    ((gc =
      cn?.threshold_in_minor_units != null
        ? Hn(cn.threshold_in_minor_units)
        : "5"),
      (j[0] = cn),
      (j[1] = gc));
  else gc = j[1];
  let sf = gc,
    pc;
  if (j[2] !== cn)
    ((pc =
      cn?.reload_to_in_minor_units != null
        ? Hn(cn.reload_to_in_minor_units)
        : "15"),
      (j[2] = cn),
      (j[3] = pc));
  else pc = j[3];
  let lf = pc,
    { value: Vn, setValue: st, cursor: it, setCursor: lt } = Xe(sf),
    { value: jn, setValue: ut, cursor: ct, setCursor: dt } = Xe(lf),
    [Z, Ln] = d(0),
    bc;
  if (j[4] !== dn)
    ((bc = dn ? ["save", "off", "cancel"] : ["save", "cancel"]),
      (j[4] = dn),
      (j[5] = bc));
  else bc = j[5];
  let Pe = bc,
    [Ye, yc] = d(0),
    [Mi, _c] = d(!1),
    ha,
    va,
    Ca,
    bo,
    me,
    ge,
    xa,
    ka,
    wa,
    Da,
    Ai,
    Pa,
    Ra,
    mt,
    ft,
    Ea,
    Fa;
  if (
    j[6] !== Ye ||
    j[7] !== Pe ||
    j[8] !== Dn ||
    j[9] !== Mi ||
    j[10] !== he ||
    j[11] !== it ||
    j[12] !== ct ||
    j[13] !== Z ||
    j[14] !== dn ||
    j[15] !== _a ||
    j[16] !== Fi ||
    j[17] !== $i ||
    j[18] !== wn ||
    j[19] !== jn ||
    j[20] !== lt ||
    j[21] !== dt ||
    j[22] !== ut ||
    j[23] !== st ||
    j[24] !== Vn
  ) {
    Ai = EARLY_RETURN_SENTINEL;
    bb0: {
      ge = yn(Vn);
      me = yn(jn);
      bo = !ge.ok
        ? ge.error
        : !me.ok
          ? me.error
          : me.cents <= ge.cents
            ? "Reload-to must be above threshold"
            : he === "USD" && me.cents - ge.cents < _t
              ? `Reload must be at least ${formatCurrencyAmount(_t, he, "whole")} above threshold`
              : "";
      let hc = !bo;
      let Bi = !ge.ok && (Vn.trim() !== "" || Z !== 0) ? ge.error : "";
      let Ti = !me.ok && (jn.trim() !== "" || Z === 2) ? me.error : "";
      let gt = function gt() {
        let vc = Pe[Ye];
        if (vc === "save") {
          if (!ge.ok || !me.ok || !hc) {
            return;
          }
          _c(!0);
          return;
        } else if (vc === "off") $i();
        else _a();
      };
      let Kn;
      if (j[42] === MEMO_CACHE_SENTINEL) ((Kn = () => Ln(ud)), (j[42] = Kn));
      else Kn = j[42];
      let Cc = Kn;
      let Yn;
      if (j[43] === MEMO_CACHE_SENTINEL) ((Yn = () => Ln(cd)), (j[43] = Yn));
      else Yn = j[43];
      let uf = Yn;
      let Xn;
      if (j[44] !== gt || j[45] !== Pe.length || j[46] !== Z)
        ((Xn = function Oi(Ce) {
          if (Ce.key === "tab") {
            if ((Ce.preventDefault(), Ce.shift)) Cc();
            else uf();
            return;
          }
          if (Z !== 2) {
            return;
          }
          if (Ce.key === "up") (Ce.preventDefault(), Cc());
          else if (Ce.key === "down") Ce.preventDefault();
          else if (Ce.key === "left") (Ce.preventDefault(), yc(dd));
          else if (Ce.key === "right")
            (Ce.preventDefault(), yc((df) => Math.min(Pe.length - 1, df + 1)));
          else if (Ce.key === "return") (Ce.preventDefault(), gt());
        }),
          (j[44] = gt),
          (j[45] = Pe.length),
          (j[46] = Z),
          (j[47] = Xn));
      else Xn = j[47];
      let Oi = Xn;
      let Ni = dn ? "Agree and save" : "Agree and turn on";
      let In;
      if (j[48] !== Ni)
        ((In = { save: Ni, off: "Turn off", cancel: "Cancel" }),
          (j[48] = Ni),
          (j[49] = In));
      else In = j[49];
      Ca = In;
      if (Mi && ge.ok && me.ok) {
        let Re;
        if (j[50] === MEMO_CACHE_SENTINEL) ((Re = () => _c(!1)), (j[50] = Re));
        else Re = j[50];
        Ai = e(Pn, {
          question: "Auto-reload will top your balance up to",
          amountCents: me.cents,
          currency: he,
          onConfirm: () => Fi(ge.cents, me.cents),
          onBack: Re,
        });
        break bb0;
      }
      va = de;
      ka = "Auto-reload";
      wa = _a;
      Da = "suggestion";
      ha = FocusableBox;
      Pa = 1;
      Ra = Oi;
      let Re;
      if (j[51] !== dn)
        ((Re =
          dn && e(Text, { color: "success", children: " \xB7 Currently on" })),
          (j[51] = dn),
          (j[52] = Re));
      else Re = j[52];
      if (j[53] !== Re)
        ((mt = r(Text, {
          children: [
            "Automatically buy more usage credits when your balance is low.",
            Re,
          ],
        })),
          (j[53] = Re),
          (j[54] = mt));
      else mt = j[54];
      let mn;
      if (j[55] !== wn) ((mn = ke(wn)), (j[55] = wn), (j[56] = mn));
      else mn = j[56];
      if (j[57] !== mn)
        ((ft = r(Text, { dimColor: !0, children: ["Card on file: ", mn] })),
          (j[57] = mn),
          (j[58] = ft));
      else ft = j[58];
      let pt;
      if (j[59] === MEMO_CACHE_SENTINEL)
        ((pt = e(Text, {
          dimColor: !0,
          children: "When usage credit balance falls below:",
        })),
          (j[59] = pt));
      else pt = j[59];
      const Si = Bi ? "error" : Z === 0 ? "suggestion" : "inactive";
      let $a;
      if (j[60] !== he) (($a = getCurrencySymbol(he)), (j[60] = he), (j[61] = $a));
      else $a = j[61];
      let Ma;
      if (j[62] !== $a)
        ((Ma = e(Text, { children: $a })), (j[62] = $a), (j[63] = Ma));
      else Ma = j[63];
      let xc, kc;
      if (j[64] === MEMO_CACHE_SENTINEL)
        ((xc = () => Ln(1)), (kc = () => Ln(1)), (j[64] = xc), (j[65] = kc));
      else ((xc = j[64]), (kc = j[65]));
      const Vi = Z === 0;
      const ji = Z === 0;
      let Aa;
      if (
        j[66] !== Dn ||
        j[67] !== it ||
        j[68] !== lt ||
        j[69] !== st ||
        j[70] !== Vi ||
        j[71] !== ji ||
        j[72] !== Vn
      )
        ((Aa = e(hn, {
          value: Vn,
          onChange: st,
          onSubmit: xc,
          onHistoryDown: kc,
          disableCursorMovementForUpDownKeys: !0,
          focus: Vi,
          showCursor: ji,
          columns: Dn,
          cursorOffset: it,
          onChangeCursorOffset: lt,
        })),
          (j[66] = Dn),
          (j[67] = it),
          (j[68] = lt),
          (j[69] = st),
          (j[70] = Vi),
          (j[71] = ji),
          (j[72] = Vn),
          (j[73] = Aa));
      else Aa = j[73];
      let wc;
      if (j[74] !== Si || j[75] !== Ma || j[76] !== Aa)
        ((wc = r(Box, {
          borderStyle: "single",
          borderColor: Si,
          paddingX: 1,
          children: [Ma, Aa],
        })),
          (j[74] = Si),
          (j[75] = Ma),
          (j[76] = Aa),
          (j[77] = wc));
      else wc = j[77];
      Ea = r(Box, {
        flexDirection: "column",
        children: [pt, wc, Bi && e(Text, { color: "error", children: Bi })],
      });
      let Dc;
      if (j[78] === MEMO_CACHE_SENTINEL)
        ((Dc = e(Text, { dimColor: !0, children: "Reload balance to:" })),
          (j[78] = Dc));
      else Dc = j[78];
      const Li = Ti ? "error" : Z === 1 ? "suggestion" : "inactive";
      let Ba;
      if (j[79] !== he) ((Ba = getCurrencySymbol(he)), (j[79] = he), (j[80] = Ba));
      else Ba = j[80];
      let Ta;
      if (j[81] !== Ba)
        ((Ta = e(Text, { children: Ba })), (j[81] = Ba), (j[82] = Ta));
      else Ta = j[82];
      let Pc, Rc, Ec;
      if (j[83] === MEMO_CACHE_SENTINEL)
        ((Pc = () => Ln(2)),
          (Rc = () => Ln(0)),
          (Ec = () => Ln(2)),
          (j[83] = Pc),
          (j[84] = Rc),
          (j[85] = Ec));
      else ((Pc = j[83]), (Rc = j[84]), (Ec = j[85]));
      const Ui = Z === 1;
      const Ki = Z === 1;
      let Oa;
      if (
        j[86] !== Dn ||
        j[87] !== ct ||
        j[88] !== jn ||
        j[89] !== dt ||
        j[90] !== ut ||
        j[91] !== Ui ||
        j[92] !== Ki
      )
        ((Oa = e(hn, {
          value: jn,
          onChange: ut,
          onSubmit: Pc,
          onHistoryUp: Rc,
          onHistoryDown: Ec,
          disableCursorMovementForUpDownKeys: !0,
          focus: Ui,
          showCursor: Ki,
          columns: Dn,
          cursorOffset: ct,
          onChangeCursorOffset: dt,
        })),
          (j[86] = Dn),
          (j[87] = ct),
          (j[88] = jn),
          (j[89] = dt),
          (j[90] = ut),
          (j[91] = Ui),
          (j[92] = Ki),
          (j[93] = Oa));
      else Oa = j[93];
      let Fc;
      if (j[94] !== Li || j[95] !== Ta || j[96] !== Oa)
        ((Fc = r(Box, {
          borderStyle: "single",
          borderColor: Li,
          paddingX: 1,
          children: [Ta, Oa],
        })),
          (j[94] = Li),
          (j[95] = Ta),
          (j[96] = Oa),
          (j[97] = Fc));
      else Fc = j[97];
      Fa = r(Box, {
        flexDirection: "column",
        children: [Dc, Fc, Ti && e(Text, { color: "error", children: Ti })],
      });
      xa =
        ge.ok &&
        me.ok &&
        hc &&
        r(Text, {
          color: "success",
          children: [
            "Tops up to ",
            formatCurrencyAmount(me.cents, he),
            " when your balance falls below",
            " ",
            formatCurrencyAmount(ge.cents, he),
          ],
        });
    }
    ((j[6] = Ye),
      (j[7] = Pe),
      (j[8] = Dn),
      (j[9] = Mi),
      (j[10] = he),
      (j[11] = it),
      (j[12] = ct),
      (j[13] = Z),
      (j[14] = dn),
      (j[15] = _a),
      (j[16] = Fi),
      (j[17] = $i),
      (j[18] = wn),
      (j[19] = jn),
      (j[20] = lt),
      (j[21] = dt),
      (j[22] = ut),
      (j[23] = st),
      (j[24] = Vn),
      (j[25] = ha),
      (j[26] = va),
      (j[27] = Ca),
      (j[28] = bo),
      (j[29] = me),
      (j[30] = ge),
      (j[31] = xa),
      (j[32] = ka),
      (j[33] = wa),
      (j[34] = Da),
      (j[35] = Ai),
      (j[36] = Pa),
      (j[37] = Ra),
      (j[38] = mt),
      (j[39] = ft),
      (j[40] = Ea),
      (j[41] = Fa));
  } else
    ((ha = j[25]),
      (va = j[26]),
      (Ca = j[27]),
      (bo = j[28]),
      (me = j[29]),
      (ge = j[30]),
      (xa = j[31]),
      (ka = j[32]),
      (wa = j[33]),
      (Da = j[34]),
      (Ai = j[35]),
      (Pa = j[36]),
      (Ra = j[37]),
      (mt = j[38]),
      (ft = j[39]),
      (Ea = j[40]),
      (Fa = j[41]));
  if (Ai !== EARLY_RETURN_SENTINEL) return Ai;
  let Kn;
  if (j[98] !== wn) ((Kn = ke(wn)), (j[98] = wn), (j[99] = Kn));
  else Kn = j[99];
  let Yn;
  if (j[100] !== Kn)
    ((Yn = r(Text, {
      dimColor: !0,
      children: [
        "By selecting Agree, you authorize Anthropic to automatically charge",
        " ",
        Kn,
        " on a recurring basis whenever your balance reaches the threshold, per the Consumer Terms (",
        gl,
        "). Turn off any time here or at ",
        z,
        ".",
      ],
    })),
      (j[100] = Kn),
      (j[101] = Yn));
  else Yn = j[101];
  let Xn;
  if (j[102] !== Ye || j[103] !== Ca || j[104] !== Pe || j[105] !== Z)
    ((Xn = Pe.map(($c, Mc) =>
      r(
        Text,
        {
          color: Z === 2 && Ye === Mc ? "suggestion" : void 0,
          children: [Z === 2 && Ye === Mc ? figures.pointer : " ", " ", Ca[$c]],
        },
        $c,
      ),
    )),
      (j[102] = Ye),
      (j[103] = Ca),
      (j[104] = Pe),
      (j[105] = Z),
      (j[106] = Xn));
  else Xn = j[106];
  let In;
  if (
    j[107] !== Ye ||
    j[108] !== Pe ||
    j[109] !== bo ||
    j[110] !== Z ||
    j[111] !== me ||
    j[112] !== ge
  )
    ((In =
      bo &&
      ge.ok &&
      me.ok &&
      Z === 2 &&
      Pe[Ye] === "save" &&
      r(Text, { color: "error", children: ["\xB7 ", bo] })),
      (j[107] = Ye),
      (j[108] = Pe),
      (j[109] = bo),
      (j[110] = Z),
      (j[111] = me),
      (j[112] = ge),
      (j[113] = In));
  else In = j[113];
  let Re;
  if (j[114] !== Xn || j[115] !== In)
    ((Re = r(Box, { flexDirection: "row", gap: 2, children: [Xn, In] })),
      (j[114] = Xn),
      (j[115] = In),
      (j[116] = Re));
  else Re = j[116];
  let mn;
  if (
    j[117] !== ha ||
    j[118] !== xa ||
    j[119] !== Yn ||
    j[120] !== Re ||
    j[121] !== Pa ||
    j[122] !== Ra ||
    j[123] !== mt ||
    j[124] !== ft ||
    j[125] !== Ea ||
    j[126] !== Fa
  )
    ((mn = r(ha, {
      gap: Pa,
      onKeyDown: Ra,
      children: [mt, ft, Ea, Fa, xa, Yn, Re],
    })),
      (j[117] = ha),
      (j[118] = xa),
      (j[119] = Yn),
      (j[120] = Re),
      (j[121] = Pa),
      (j[122] = Ra),
      (j[123] = mt),
      (j[124] = ft),
      (j[125] = Ea),
      (j[126] = Fa),
      (j[127] = mn));
  else mn = j[127];
  let pt;
  if (
    j[128] !== va ||
    j[129] !== ka ||
    j[130] !== wa ||
    j[131] !== Da ||
    j[132] !== mn
  )
    ((pt = e(va, { title: ka, onCancel: wa, color: Da, children: mn })),
      (j[128] = va),
      (j[129] = ka),
      (j[130] = wa),
      (j[131] = Da),
      (j[132] = mn),
      (j[133] = pt));
  else pt = j[133];
  return pt;
}
function os(ff) {
  let xe = _(51),
    {
      title: Yi,
      subtitle: Xi,
      initial: gf,
      minCents: yo,
      currency: fn,
      footer: Na,
      onSubmit: Ii,
      onCancel: _o,
    } = ff,
    { columns: qi } = useTerminalSize(),
    { value: gn, setValue: Wi, cursor: Hi, setCursor: Ji } = Xe(gf),
    [zi, pf] = d(!1),
    Tc;
  if (xe[0] !== gn) ((Tc = yn(gn)), (xe[0] = gn), (xe[1] = Tc));
  else Tc = xe[1];
  let G = Tc,
    pn = G.ok && yo !== void 0 && G.cents < yo,
    Oc;
  if (
    xe[2] !== zi ||
    xe[3] !== pn ||
    xe[4] !== fn ||
    xe[5] !== yo ||
    xe[6] !== G.error ||
    xe[7] !== G.ok ||
    xe[8] !== gn
  )
    ((Oc =
      !G.ok && (gn.trim() !== "" || zi)
        ? G.error
        : pn && yo !== void 0
          ? `Minimum is ${formatCurrencyAmount(yo, fn, "whole")}`
          : ""),
      (xe[2] = zi),
      (xe[3] = pn),
      (xe[4] = fn),
      (xe[5] = yo),
      (xe[6] = G.error),
      (xe[7] = G.ok),
      (xe[8] = gn),
      (xe[9] = Oc));
  else Oc = xe[9];
  let Sa = Oc,
    Nc;
  if (xe[10] !== pn || xe[11] !== Ii || xe[12] !== G.cents || xe[13] !== G.ok)
    ((Nc = function bt() {
      if (!G.ok || pn) {
        pf(!0);
        return;
      }
      Ii(G.cents);
    }),
      (xe[10] = pn),
      (xe[11] = Ii),
      (xe[12] = G.cents),
      (xe[13] = G.ok),
      (xe[14] = Nc));
  else Nc = xe[14];
  let bt = Nc,
    Va;
  if (xe[15] !== Xi)
    ((Va = e(Text, { dimColor: !0, children: Xi })), (xe[15] = Xi), (xe[16] = Va));
  else Va = xe[16];
  let ja;
  if (xe[17] !== fn) ((ja = getCurrencySymbol(fn)), (xe[17] = fn), (xe[18] = ja));
  else ja = xe[18];
  let La;
  if (xe[19] !== ja)
    ((La = e(Text, { children: ja })), (xe[19] = ja), (xe[20] = La));
  else La = xe[20];
  let Ua;
  if (
    xe[21] !== qi ||
    xe[22] !== Hi ||
    xe[23] !== _o ||
    xe[24] !== Ji ||
    xe[25] !== Wi ||
    xe[26] !== bt ||
    xe[27] !== gn
  )
    ((Ua = e(hn, {
      value: gn,
      onChange: Wi,
      onSubmit: bt,
      onExit: _o,
      focus: !0,
      showCursor: !0,
      columns: qi,
      cursorOffset: Hi,
      onChangeCursorOffset: Ji,
    })),
      (xe[21] = qi),
      (xe[22] = Hi),
      (xe[23] = _o),
      (xe[24] = Ji),
      (xe[25] = Wi),
      (xe[26] = bt),
      (xe[27] = gn),
      (xe[28] = Ua));
  else Ua = xe[28];
  let Ka;
  if (xe[29] !== La || xe[30] !== Ua)
    ((Ka = r(Box, { flexDirection: "row", gap: 1, children: [La, Ua] })),
      (xe[29] = La),
      (xe[30] = Ua),
      (xe[31] = Ka));
  else Ka = xe[31];
  let Ya;
  if (xe[32] !== Na)
    ((Ya = Na && e(Text, { dimColor: !0, children: Na })),
      (xe[32] = Na),
      (xe[33] = Ya));
  else Ya = xe[33];
  let Xa;
  if (xe[34] !== pn || xe[35] !== fn || xe[36] !== G.cents || xe[37] !== G.ok)
    ((Xa =
      G.ok &&
      !pn &&
      r(Text, {
        color: "success",
        children: ["Buys ", formatCurrencyAmount(G.cents, fn), " of usage credits"],
      })),
      (xe[34] = pn),
      (xe[35] = fn),
      (xe[36] = G.cents),
      (xe[37] = G.ok),
      (xe[38] = Xa));
  else Xa = xe[38];
  let Ia;
  if (xe[39] !== Sa)
    ((Ia = Sa && e(Text, { color: "error", children: Sa })),
      (xe[39] = Sa),
      (xe[40] = Ia));
  else Ia = xe[40];
  let qa;
  if (
    xe[41] !== Xa ||
    xe[42] !== Ia ||
    xe[43] !== Va ||
    xe[44] !== Ka ||
    xe[45] !== Ya
  )
    ((qa = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [Va, Ka, Ya, Xa, Ia],
    })),
      (xe[41] = Xa),
      (xe[42] = Ia),
      (xe[43] = Va),
      (xe[44] = Ka),
      (xe[45] = Ya),
      (xe[46] = qa));
  else qa = xe[46];
  let Sc;
  if (xe[47] !== _o || xe[48] !== qa || xe[49] !== Yi)
    ((Sc = e(de, {
      title: Yi,
      onCancel: _o,
      color: "suggestion",
      children: qa,
    })),
      (xe[47] = _o),
      (xe[48] = qa),
      (xe[49] = Yi),
      (xe[50] = Sc));
  else Sc = xe[50];
  return Sc;
}
function Al(bf) {
  let Zi = _(11),
    { purchaseId: ho, onSuccess: yf, onError: _f } = bf,
    { credentials: vo } = useStorageV5Context(),
    Vc = C(0),
    Qi = vr(yf),
    Co = vr(_f),
    xo = useClock(),
    jc;
  if (
    Zi[0] !== xo ||
    Zi[1] !== vo ||
    Zi[2] !== ho ||
    Zi[3] !== Co ||
    Zi[4] !== Qi
  )
    ((jc = () => {
      let bn = !1;
      let Lc;
      let yt = function yt(hf) {
        logEvent("tengu_extra_usage_inline_dialog_buy_result", { status: fromEnum(hf) });
      };
      async function Ha() {
        if (bn) {
          return;
        }
        if (((Vc.current = Vc.current + 1), Vc.current > bl)) {
          ((bn = !0), Co(`Purchase timed out \u2014 check ${z}`));
          return;
        }
        try {
          let Gi = await fetchCreditPurchaseStatus(ho, vo);
          if (bn) {
            return;
          }
          if (Gi.status === "paid") ((bn = !0), yt("success"), Qi());
          else if (Gi.status === "failed")
            ((bn = !0), yt("failed"), Co("Payment failed"));
          else if (Gi.status === "action_needed")
            ((bn = !0),
              yt("3ds_fallback"),
              Co(
                `Your card requires additional verification \u2014 this purchase was not completed. Try again at ${z}`,
              ));
          else Lc = xo.setTimeout(Ha, pl);
        } catch (Wa) {
          let el = Wa;
          if (bn) {
            return;
          }
          if (((bn = !0), cc(el)))
            logForDebugging(`Purchase status poll failed: ${l(el)}`, { level: "error" });
          else logError(el);
          Co("Failed to check purchase status");
        }
      }
      return (
        Ha(),
        () => {
          ((bn = !0), Lc?.());
        }
      );
    }),
      (Zi[0] = xo),
      (Zi[1] = vo),
      (Zi[2] = ho),
      (Zi[3] = Co),
      (Zi[4] = Qi),
      (Zi[5] = jc));
  else jc = Zi[5];
  let Wa;
  if (Zi[6] !== xo || Zi[7] !== vo || Zi[8] !== ho)
    ((Wa = [xo, ho, vo]),
      (Zi[6] = xo),
      (Zi[7] = vo),
      (Zi[8] = ho),
      (Zi[9] = Wa));
  else Wa = Zi[9];
  E(jc, Wa);
  let Uc;
  if (Zi[10] === MEMO_CACHE_SENTINEL)
    ((Uc = e(ht, {
      message: "Confirming payment\u2026 (may take a few seconds)",
    })),
      (Zi[10] = Uc));
  else Uc = Zi[10];
  return Uc;
}
function ht(vf) {
  let Kc = _(3),
    { message: nl } = vf,
    Yc;
  if (Kc[0] === MEMO_CACHE_SENTINEL) ((Yc = e(AnimatedClawdMascot, { autoplay: !0 })), (Kc[0] = Yc));
  else Yc = Kc[0];
  let Xc;
  if (Kc[1] !== nl)
    ((Xc = r(Box, {
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      paddingTop: 2,
      children: [Yc, e(Text, { dimColor: !0, children: nl })],
    })),
      (Kc[1] = nl),
      (Kc[2] = Xc));
  else Xc = Kc[2];
  return Xc;
}
function Bl(Cf) {
  let rl = _(7),
    { message: ol, onDone: tl } = Cf,
    Ja;
  if (rl[0] !== tl)
    ((Ja = e(AnimatedClawdMascot, {
      sequence: "celebrate",
      reserveCrouchRow: !0,
      onComplete: tl,
    })),
      (rl[0] = tl),
      (rl[1] = Ja));
  else Ja = rl[1];
  let za;
  if (rl[2] !== ol)
    ((za = e(Box, {
      marginTop: 1,
      children: e(Text, { color: "success", children: ol }),
    })),
      (rl[2] = ol),
      (rl[3] = za));
  else za = rl[3];
  let Ic;
  if (rl[4] !== Ja || rl[5] !== za)
    ((Ic = r(Box, {
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      paddingTop: 1,
      children: [Ja, za],
    })),
      (rl[4] = Ja),
      (rl[5] = za),
      (rl[6] = Ic));
  else Ic = rl[6];
  return Ic;
}
function ts(xf) {
  let Do = _(15),
    { message: al, work: ko, onDone: wo, failure: sl } = xf,
    il = C(null),
    qc = C(!1),
    ll = C(!1),
    Wc;
  if (Do[0] !== sl || Do[1] !== wo)
    ((Wc = (kf) => {
      let Hc = kf ?? { value: sl };
      if (((il.current = Hc), qc.current && !ll.current)) wo(Hc.value);
    }),
      (Do[0] = sl),
      (Do[1] = wo),
      (Do[2] = Wc));
  else Wc = Do[2];
  let Qa = vr(Wc),
    Jc;
  if (Do[3] !== Qa || Do[4] !== ko)
    ((Jc = () => (
      ko
        .then((wf) => Qa({ value: wf }))
        .catch((Df) => {
          (logError(Df), Qa(null));
        }),
      () => {
        ll.current = !0;
      }
    )),
      (Do[3] = Qa),
      (Do[4] = ko),
      (Do[5] = Jc));
  else Jc = Do[5];
  let zc;
  if (Do[6] !== ko) ((zc = [ko]), (Do[6] = ko), (Do[7] = zc));
  else zc = Do[7];
  E(Jc, zc);
  let Za;
  if (Do[8] !== wo)
    ((Za = e(AnimatedClawdMascot, {
      sequence: "celebrate",
      reserveCrouchRow: !0,
      onComplete: () => {
        if (((qc.current = !0), il.current && !ll.current))
          wo(il.current.value);
      },
    })),
      (Do[8] = wo),
      (Do[9] = Za));
  else Za = Do[9];
  let Ga;
  if (Do[10] !== al)
    ((Ga = e(Box, {
      marginTop: 1,
      children: e(Text, { dimColor: !0, children: al }),
    })),
      (Do[10] = al),
      (Do[11] = Ga));
  else Ga = Do[11];
  let Qc;
  if (Do[12] !== Za || Do[13] !== Ga)
    ((Qc = r(Box, {
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      paddingTop: 1,
      children: [Za, Ga],
    })),
      (Do[12] = Za),
      (Do[13] = Ga),
      (Do[14] = Qc));
  else Qc = Do[14];
  return Qc;
}
function PlainAwait(Pf) {
  let es = _(10),
    { message: ul, work: Po, onDone: cl, failure: dl } = Pf,
    Zc;
  if (es[0] !== dl || es[1] !== cl)
    ((Zc = (Gc) => cl(Gc ? Gc.value : dl)),
      (es[0] = dl),
      (es[1] = cl),
      (es[2] = Zc));
  else Zc = es[2];
  let ns = vr(Zc),
    ed;
  if (es[3] !== ns || es[4] !== Po)
    ((ed = () => {
      let ml = !1;
      return (
        Po.then((Rf) => {
          if (!ml) ns({ value: Rf });
        }).catch((Ef) => {
          if ((logError(Ef), !ml)) ns(null);
        }),
        () => {
          ml = !0;
        }
      );
    }),
      (es[3] = ns),
      (es[4] = Po),
      (es[5] = ed));
  else ed = es[5];
  let nd;
  if (es[6] !== Po) ((nd = [Po]), (es[6] = Po), (es[7] = nd));
  else nd = es[7];
  E(ed, nd);
  let od;
  if (es[8] !== ul)
    ((od = e(Box, { paddingTop: 1, children: e(SpinnerMessageLine, { message: ul }) })),
      (es[8] = ul),
      (es[9] = od));
  else od = es[9];
  return od;
}
function sd(s) {
  switch (s) {
    case "loading":
    case "enabling":
    case "adjusting":
    case "auto_reload_saving":
    case "buy_purchasing":
    case "buy_polling":
      return !0;
    case "not_enabled":
    case "enabled":
    case "buy_select":
    case "buy_custom":
    case "buy_confirm":
    case "buy_success":
    case "adjust_limit":
    case "auto_reload_config":
    case "error":
      return !1;
  }
}
export { getForcedFirstLaunchOverride, isNewerVersionAvailable, AnimatedClawdMascot, useClawdEntranceSequence, WIt, PlainAwait };
