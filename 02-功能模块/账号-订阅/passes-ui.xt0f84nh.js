// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 113 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { CLAUDE_ASTERISK_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { o, t, ct } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { setClipboard } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { useGlobalExitKeybinding } from "../../01-核心基础设施/共享小工具-未细化/exit-keybinding-hooks.js";
import { fetchReferralRedemptions, formatRewardAmount, getCachedRemainingPasses, getPassesEligibility } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { FocusableBox } from "../../01-核心基础设施/共享小工具-未细化/focusable-box.js";
import { Qr } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Dn, kn, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function Se() {}
function Le(ss) {
  return ss.isAvailable;
}
function Fe(as, os) {
  return +os.isAvailable - +as.isAvailable;
}
function Be(xe) {
  return e(ie, { pass: xe }, xe.passNumber);
}
function ne(Qe) {
  let R = _(19),
    { onDone: C } = Qe,
    { storageV5: le, credentials: me } = useStorageV5Context(),
    ye;
  if (R[0] !== me || R[1] !== le)
    ((ye = () => ge(me, le)), (R[0] = me), (R[1] = le), (R[2] = ye));
  else ye = R[2];
  let [ce] = d(ye),
    Ce;
  if (R[3] !== C)
    ((Ce = () => C("Guest passes dialog dismissed", { display: "system" })),
      (R[3] = C),
      (R[4] = Ce));
  else Ce = R[4];
  let b = useGlobalExitKeybinding(Ce),
    be;
  if (R[5] !== C)
    ((be = () => {
      C("Guest passes dialog dismissed", { display: "system" });
    }),
      (R[5] = C),
      (R[6] = be));
  else be = R[6];
  let We = be,
    ve;
  if (R[7] === MEMO_CACHE_SENTINEL) ((ve = { context: "Confirmation" }), (R[7] = ve));
  else ve = R[7];
  useKeybinding("confirm:no", We, ve);
  let Re;
  if (R[8] === MEMO_CACHE_SENTINEL)
    ((Re = e(t, {
      dimColor: !0,
      children: "Loading guest pass information\u2026",
    })),
      (R[8] = Re));
  else Re = R[8];
  let I;
  if (R[9] !== b.keyName || R[10] !== b.pending)
    ((I = e(Qr, {
      children: r(o, {
        flexDirection: "column",
        gap: 1,
        tabIndex: 0,
        autoFocus: !0,
        children: [
          Re,
          e(t, {
            dimColor: !0,
            italic: !0,
            children: b.pending
              ? r(N, { children: ["Press ", b.keyName, " again to exit"] })
              : e(KeybindingHint, { chord: "escape", action: "cancel" }),
          }),
        ],
      }),
    })),
      (R[9] = b.keyName),
      (R[10] = b.pending),
      (R[11] = I));
  else I = R[11];
  let O;
  if (R[12] !== b || R[13] !== C || R[14] !== ce)
    ((O = e(re, { passesPromise: ce, onDone: C, exitState: b })),
      (R[12] = b),
      (R[13] = C),
      (R[14] = ce),
      (R[15] = O));
  else O = R[15];
  let he;
  if (R[16] !== I || R[17] !== O)
    ((he = e(Dn, { fallback: I, children: O })),
      (R[16] = I),
      (R[17] = O),
      (R[18] = he));
  else he = R[18];
  return he;
}
function re(Ye) {
  let l = _(55),
    { passesPromise: Ze, onDone: pe, exitState: u } = Ye,
    T = kn(Ze),
    h = T.available ? T.referralLink : null,
    ke;
  if (l[0] !== pe || l[1] !== h)
    ((ke = function k(U) {
      if (U.ctrl || U.meta) {
        return;
      }
      if (U.key === "return" && h)
        (U.preventDefault(),
          setClipboard(h)
            .then((Pe) => {
              if (Pe) process.stdout.write(Pe);
              (logEvent("tengu_guest_passes_link_copied", {}),
                pe("Referral link copied to clipboard!"));
            })
            .catch(Se));
    }),
      (l[0] = pe),
      (l[1] = h),
      (l[2] = ke));
  else ke = l[2];
  let k = ke;
  if (!T.available) {
    let j;
    if (l[3] === MEMO_CACHE_SENTINEL)
      ((j = e(t, { children: "Guest passes are not currently available." })),
        (l[3] = j));
    else j = l[3];
    let v;
    if (l[4] !== u.keyName || l[5] !== u.pending)
      ((v = e(t, {
        dimColor: !0,
        italic: !0,
        children: u.pending
          ? r(N, { children: ["Press ", u.keyName, " again to exit"] })
          : e(KeybindingHint, { chord: "escape", action: "cancel" }),
      })),
        (l[4] = u.keyName),
        (l[5] = u.pending),
        (l[6] = v));
    else v = l[6];
    let w;
    if (l[7] !== k || l[8] !== v)
      ((w = e(Qr, {
        children: r(FocusableBox, { gap: 1, onKeyDown: k, children: [j, v] }),
      })),
        (l[7] = k),
        (l[8] = v),
        (l[9] = w));
    else w = l[9];
    return w;
  }
  let { passStatuses: L, referrerReward: V } = T,
    j;
  if (l[10] !== L) ((j = countMatching(L, Le)), (l[10] = L), (l[11] = j));
  else j = l[11];
  let A = j,
    K,
    q,
    z,
    v,
    w,
    H,
    M,
    Q,
    E;
  if (l[12] !== A || l[13] !== k || l[14] !== L) {
    let es = [...L].sort(Fe);
    z = Qr;
    q = FocusableBox;
    M = 1;
    Q = k;
    if (l[24] !== A)
      ((E = r(t, {
        color: "permission",
        children: ["Guest passes \xB7 ", A, " left"],
      })),
        (l[24] = A),
        (l[25] = E));
    else E = l[25];
    K = o;
    v = "row";
    w = 2;
    H = es.slice(0, 3).map(Be);
    ((l[12] = A),
      (l[13] = k),
      (l[14] = L),
      (l[15] = K),
      (l[16] = q),
      (l[17] = z),
      (l[18] = v),
      (l[19] = w),
      (l[20] = H),
      (l[21] = M),
      (l[22] = Q),
      (l[23] = E));
  } else
    ((K = l[15]),
      (q = l[16]),
      (z = l[17]),
      (v = l[18]),
      (w = l[19]),
      (H = l[20]),
      (M = l[21]),
      (Q = l[22]),
      (E = l[23]));
  let W;
  if (l[26] !== K || l[27] !== v || l[28] !== w || l[29] !== H)
    ((W = e(K, { flexDirection: v, marginLeft: w, children: H })),
      (l[26] = K),
      (l[27] = v),
      (l[28] = w),
      (l[29] = H),
      (l[30] = W));
  else W = l[30];
  let Y;
  if (l[31] !== h)
    ((Y = h && e(o, { marginLeft: 2, children: e(t, { children: h }) })),
      (l[31] = h),
      (l[32] = Y));
  else Y = l[32];
  let Z;
  if (l[33] !== V)
    ((Z = V
      ? `Share a free week of Claude Code with friends. If they love it and subscribe, you'll get ${formatRewardAmount(V)} in usage credits to keep building. `
      : "Share a free week of Claude Code with friends. "),
      (l[33] = V),
      (l[34] = Z));
  else Z = l[34];
  const de = V
    ? "https://support.claude.com/en/articles/13456702-claude-code-guest-passes"
    : "https://support.claude.com/en/articles/12875061-claude-code-guest-passes";
  let se;
  if (l[35] !== de)
    ((se = e(ct, { url: de, children: "Terms apply." })),
      (l[35] = de),
      (l[36] = se));
  else se = l[36];
  let ae;
  if (l[37] !== Z || l[38] !== se)
    ((ae = e(o, {
      flexDirection: "column",
      marginLeft: 2,
      children: r(t, { dimColor: !0, children: [Z, se] }),
    })),
      (l[37] = Z),
      (l[38] = se),
      (l[39] = ae));
  else ae = l[39];
  let oe;
  if (l[40] !== u.keyName || l[41] !== u.pending)
    ((oe = e(o, {
      children: e(t, {
        dimColor: !0,
        italic: !0,
        children: u.pending
          ? r(N, { children: ["Press ", u.keyName, " again to exit"] })
          : r(DotSeparatedList, {
              children: [
                e(KeybindingHint, { chord: "enter", action: "copy link" }),
                e(KeybindingHint, { chord: "escape", action: "cancel" }),
              ],
            }),
      }),
    })),
      (l[40] = u.keyName),
      (l[41] = u.pending),
      (l[42] = oe));
  else oe = l[42];
  let te;
  if (
    l[43] !== q ||
    l[44] !== Y ||
    l[45] !== ae ||
    l[46] !== oe ||
    l[47] !== M ||
    l[48] !== Q ||
    l[49] !== E ||
    l[50] !== W
  )
    ((te = r(q, { gap: M, onKeyDown: Q, children: [E, W, Y, ae, oe] })),
      (l[43] = q),
      (l[44] = Y),
      (l[45] = ae),
      (l[46] = oe),
      (l[47] = M),
      (l[48] = Q),
      (l[49] = E),
      (l[50] = W),
      (l[51] = te));
  else te = l[51];
  let De;
  if (l[52] !== z || l[53] !== te)
    ((De = e(z, { children: te })), (l[52] = z), (l[53] = te), (l[54] = De));
  else De = l[54];
  return De;
}
function ie(ts) {
  let fe = _(3),
    { pass: rs } = ts;
  if (!rs.isAvailable) {
    let J;
    if (fe[0] === MEMO_CACHE_SENTINEL)
      ((J = r(o, {
        flexDirection: "column",
        marginRight: 1,
        children: [
          e(t, {
            dimColor: !0,
            children:
              "\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2571",
          }),
          e(t, { dimColor: !0, children: ` ) CC ${CLAUDE_ASTERISK_GLYPH} \u250A\u2571` }),
          e(t, {
            dimColor: !0,
            children: "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2571",
          }),
        ],
      })),
        (fe[0] = J));
    else J = fe[0];
    return J;
  }
  let J;
  if (fe[1] === MEMO_CACHE_SENTINEL)
    ((J = e(t, {
      children:
        "\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510",
    })),
      (fe[1] = J));
  else J = fe[1];
  let we;
  if (fe[2] === MEMO_CACHE_SENTINEL)
    ((we = r(o, {
      flexDirection: "column",
      marginRight: 1,
      children: [
        J,
        r(t, {
          children: [
            " ) CC ",
            e(t, { color: "claude", children: CLAUDE_ASTERISK_GLYPH }),
            " \u250A ( ",
          ],
        }),
        e(t, {
          children:
            "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518",
        }),
      ],
    })),
      (fe[2] = we));
  else we = fe[2];
  return we;
}
async function ge(m, g) {
  try {
    let s = await getPassesEligibility(m, g);
    if (!s || !s.eligible) return { available: !1 };
    let f = s.referral_code_details?.referral_link ?? null,
      c = s.referrer_reward,
      y = s.referral_code_details?.campaign ?? "claude_code_guest_pass",
      P;
    try {
      P = await fetchReferralRedemptions(y, m);
    } catch (a) {
      return (
        n(`Failed to fetch referral redemptions: ${a}`, { level: "error" }),
        { available: !1 }
      );
    }
    let S = P.redemptions || [],
      X = P.limit || 3,
      B = [];
    for (let a = 0; a < X; a++) {
      let x = S[a];
      B.push({ passNumber: a + 1, isAvailable: !x });
    }
    return {
      available: !0,
      passStatuses: B,
      referralLink: f,
      referrerReward: c,
    };
  } catch (s) {
    return (
      n(
        `Failed to load guest pass eligibility: ${s instanceof Error ? (s.stack ?? s.message) : s}`,
        { level: "error" },
      ),
      { available: !1 }
    );
  }
}
async function us(m, g) {
  let f = !ee().hasVisitedPasses;
  if (f) {
    let c = getCachedRemainingPasses();
    await Te(
      (y) => ({
        ...y,
        hasVisitedPasses: !0,
        passesLastSeenRemaining: c ?? y.passesLastSeenRemaining,
      }),
      g.storageV5,
    );
  }
  return (
    logEvent("tengu_guest_passes_visited", { is_first_visit: f }),
    e(ne, { onDone: m })
  );
}
export { us as call };
