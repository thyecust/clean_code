// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 249 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { Ub } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { isExtraUsageAllowed, Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Do } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import { policyDeniedReason } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { POST_IGNORED_NOTE, POST_DISABLED_NOTE, parseUltrareviewArgs, precheckLaunchScope, previewInstructions, checkOverageGate, launchRemoteReview, ultrareviewLaunchAcknowledgementNudge } from "../CodeReview/CodeReview.ddrd6y06.js";
import { getReviewCostNote, getReviewDurationNote, BOe, Km, q3 } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import { o, t, ct, bs } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { cu } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { Rs } from "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { l9e, o4 } from "../状态栏-主题/chunk-jrr487ty.js";
import { b6e, sst } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { Ai } from "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Dn, kn, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function qe() {
  return !ee().hasSeenUltrareviewTerms;
}
function ze() {
  return null;
}
function Qe(Pe) {
  return Pe.hasSeenUltrareviewTerms
    ? Pe
    : { ...Pe, hasSeenUltrareviewTerms: !0 };
}
function me(ho) {
  let O = _(27),
    {
      subtitle: fe,
      body: he,
      scope: pe,
      postOption: ge,
      onProceed: be,
      onCancel: x,
    } = ho;
  Rs("ultrareview-launch");
  let { storageV5: we } = _e(),
    [T] = d(qe),
    [Ce, De] = d(!1),
    [ye, po] = d(null),
    xe;
  if (O[0] === p) ((xe = new AbortController()), (O[0] = xe));
  else xe = O[0];
  let Re = C(xe),
    Ae;
  if (O[1] !== T)
    ((Ae = () => (T ? b6e().catch(ze) : null)), (O[1] = T), (O[2] = Ae));
  else Ae = O[2];
  let [Le] = d(Ae),
    q = C(!1),
    Fe;
  if (O[3] !== x || O[4] !== be || O[5] !== T || O[6] !== we)
    ((Fe = (z) => {
      if (q.current) {
        return;
      }
      if (((q.current = !0), z === "proceed" || z === "proceed-post")) {
        if (T) Te(Qe, we);
        (po(z),
          De(!0),
          be(Re.current.signal, { postToPR: z === "proceed-post" }).catch(
            () => {
              ((q.current = !1), De(!1));
            },
          ));
      } else (Re.current.abort(), x());
    }),
      (O[3] = x),
      (O[4] = be),
      (O[5] = T),
      (O[6] = we),
      (O[7] = Fe));
  else Fe = O[7];
  let Se = Fe,
    Me;
  if (O[8] !== x)
    ((Me = () => {
      ((q.current = !0), Re.current.abort(), x());
    }),
      (O[8] = x),
      (O[9] = Me));
  else Me = O[9];
  let A = Me,
    Q;
  if (O[10] !== fe)
    ((Q = fe ?? `${getReviewDurationNote()} \xB7 Est. cost ${getReviewCostNote()} USD`),
      (O[10] = fe),
      (O[11] = Q));
  else Q = O[11];
  let Ee;
  if (O[12] === p)
    ((Ee = e(t, { dimColor: !0, children: "Loading\u2026" })), (O[12] = Ee));
  else Ee = O[12];
  let Y;
  if (
    O[13] !== he ||
    O[14] !== A ||
    O[15] !== Se ||
    O[16] !== Ce ||
    O[17] !== ye ||
    O[18] !== ge ||
    O[19] !== pe ||
    O[20] !== T ||
    O[21] !== Le
  )
    ((Y = e(Dn, {
      fallback: Ee,
      children: e(ce, {
        showTerms: T,
        sourcePromise: Le,
        body: he,
        scope: pe,
        postOption: ge,
        retryFocus: ye,
        isLaunching: Ce,
        onSelect: Se,
        onCancel: A,
      }),
    })),
      (O[13] = he),
      (O[14] = A),
      (O[15] = Se),
      (O[16] = Ce),
      (O[17] = ye),
      (O[18] = ge),
      (O[19] = pe),
      (O[20] = T),
      (O[21] = Le),
      (O[22] = Y));
  else Y = O[22];
  let Ge;
  if (O[23] !== A || O[24] !== Q || O[25] !== Y)
    ((Ge = e(de, {
      title: "Run ultrareview in the cloud?",
      subtitle: Q,
      onCancel: A,
      children: Y,
    })),
      (O[23] = A),
      (O[24] = Q),
      (O[25] = Y),
      (O[26] = Ge));
  else Ge = O[26];
  return Ge;
}
function ce(go) {
  let J = _(24),
    {
      showTerms: B,
      sourcePromise: Ie,
      body: M,
      scope: a,
      postOption: D,
      retryFocus: ke,
      isLaunching: Ne,
      onSelect: j,
      onCancel: K,
    } = go,
    Z = Ie ? kn(Ie) : null,
    He;
  if (J[0] !== Z) ((He = Z && sst(Z)), (J[0] = Z), (J[1] = He));
  else He = J[1];
  let oe = He,
    E = D
      ? `When it finishes, Claude can post the findings to the PR as a single comment from your GitHub account${D.githubLogin ? ` (@${D.githubLogin})` : ""} \u2014 one plain comment, not a review or an approval, and it carries a "Generated by Claude Code" note.`
      : null,
    ne =
      a.mode === "pr"
        ? `Reviewing ${a.repo}#${a.prNumber} fetched from GitHub.`
        : a.noMergeBase === "unrelated_history"
          ? `Reviewing all files (no common history with ${a.baseBranch}).`
          : a.noMergeBase === "base_ref_missing"
            ? `Reviewing all files (no ${a.baseBranch} branch to compare against).`
            : a.headBranch === a.baseBranch
              ? `Reviewing local changes on ${a.baseBranch}.`
              : `Reviewing ${a.headBranch} against ${a.baseBranch}.`,
    G = a.mode === "branch" && a.diffStat ? a.diffStat : null,
    Je;
  if (J[2] !== a.instructions || J[3] !== a.mode)
    ((Je =
      a.mode === "branch" && a.instructions
        ? `Note for findings (not a base branch): "${previewInstructions(a.instructions)}"`
        : null),
      (J[2] = a.instructions),
      (J[3] = a.mode),
      (J[4] = Je));
  else Je = J[4];
  let I = Je,
    te =
      a.mode === "pr"
        ? "Tip: run /code-review ultra (no number) to review your current branch instead."
        : "Tip: run /code-review ultra <PR number> to fetch and review a specific GitHub PR instead.",
    re;
  if (
    J[5] !== M ||
    J[6] !== G ||
    J[7] !== I ||
    J[8] !== E ||
    J[9] !== ne ||
    J[10] !== B ||
    J[11] !== oe ||
    J[12] !== te
  )
    ((re = B
      ? r(N, {
          children: [
            r(o, {
              flexDirection: "column",
              children: [
                e(t, { dimColor: !0, children: ne }),
                G && r(t, { dimColor: !0, children: ["Scope: ", G] }),
                I && e(t, { dimColor: !0, children: I }),
                e(t, {
                  dimColor: !0,
                  children:
                    "Finds and verifies bugs using a multi-agent review fleet.",
                }),
                e(t, { dimColor: !0, children: te }),
                oe && e(t, { dimColor: !0, children: oe }),
                M && e(t, { dimColor: !0, children: M }),
                E && e(t, { dimColor: !0, children: E }),
                r(t, {
                  dimColor: !0,
                  children: [
                    "More information: ",
                    e(ct, { url: q3, children: q3 }),
                  ],
                }),
              ],
            }),
            e(t, { children: "Proceed?" }),
          ],
        })
      : r(o, {
          flexDirection: "column",
          children: [
            e(t, { dimColor: !0, children: ne }),
            G && r(t, { dimColor: !0, children: ["Scope: ", G] }),
            I && e(t, { dimColor: !0, children: I }),
            e(t, {
              dimColor: !0,
              children:
                "Finds and verifies bugs using a multi-agent review fleet.",
            }),
            e(t, { dimColor: !0, children: te }),
            M && e(t, { dimColor: !0, children: M }),
            E && e(t, { dimColor: !0, children: E }),
          ],
        })),
      (J[5] = M),
      (J[6] = G),
      (J[7] = I),
      (J[8] = E),
      (J[9] = ne),
      (J[10] = B),
      (J[11] = oe),
      (J[12] = te),
      (J[13] = re));
  else re = J[13];
  let ie;
  if (
    J[14] !== Ne ||
    J[15] !== K ||
    J[16] !== j ||
    J[17] !== D ||
    J[18] !== ke ||
    J[19] !== B
  )
    ((ie = Ne
      ? e(ue, {})
      : D
        ? e(ve, {
            options: [
              {
                label: "Run and only show findings here",
                value: "proceed",
                description: "launch in Claude Code on the web",
              },
              { label: "Cancel", value: "cancel" },
              {
                label: "Run and post the findings to the PR as me",
                value: "proceed-post",
                description: "launch in Claude Code on the web",
              },
            ],
            defaultFocusValue:
              ke ?? (D.preferPost ? "proceed-post" : "proceed"),
            onChange: j,
            onCancel: K,
          })
        : e(ve, {
            options: [
              {
                label: B ? "Yes" : "Run ultrareview",
                value: "proceed",
                description: "launch in Claude Code on the web",
              },
              { label: B ? "No" : "Not now", value: "cancel" },
            ],
            onChange: j,
            onCancel: K,
          })),
      (J[14] = Ne),
      (J[15] = K),
      (J[16] = j),
      (J[17] = D),
      (J[18] = ke),
      (J[19] = B),
      (J[20] = ie));
  else ie = J[20];
  let Xe;
  if (J[21] !== re || J[22] !== ie)
    ((Xe = r(o, { flexDirection: "column", gap: 1, children: [re, ie] })),
      (J[21] = re),
      (J[22] = ie),
      (J[23] = Xe));
  else Xe = J[23];
  return Xe;
}
function ue() {
  let ae = _(12),
    $e = Ai(),
    Ve;
  if (ae[0] !== $e.prefersReducedMotion)
    ((Ve = cu($e.prefersReducedMotion)),
      (ae[0] = $e.prefersReducedMotion),
      (ae[1] = Ve));
  else Ve = ae[1];
  let X = Ve,
    [Oe, V] = bs(X ? null : 50),
    Ue = X ? -100 : 19 - (Math.floor(V / 200) % 29),
    Be = Math.floor(V / 120),
    se;
  if (ae[2] !== Be || ae[3] !== X || ae[4] !== V)
    ((se = e(o4, {
      frame: Be,
      messageColor: "inactive",
      reducedMotion: X,
      time: V,
    })),
      (ae[2] = Be),
      (ae[3] = X),
      (ae[4] = V),
      (ae[5] = se));
  else se = ae[5];
  let le;
  if (ae[6] !== Ue)
    ((le = e(l9e, {
      message: "Launching",
      mode: "responding",
      messageColor: "inactive",
      glimmerIndex: Ue,
      flashOpacity: 0,
      shimmerColor: "subtle",
    })),
      (ae[6] = Ue),
      (ae[7] = le));
  else le = ae[7];
  let We;
  if (ae[8] !== Oe || ae[9] !== se || ae[10] !== le)
    ((We = r(o, {
      ref: Oe,
      flexDirection: "row",
      columnGap: 1,
      children: [se, le],
    })),
      (ae[8] = Oe),
      (ae[9] = se),
      (ae[10] = le),
      (ae[11] = We));
  else We = ae[11];
  return We;
}
async function Ye({
  scope: l,
  context: f,
  onDone: b,
  billingNote: n,
  applyFixes: h,
  postToPR: L,
  postDropped: P,
  signal: g,
}) {
  let c = await launchRemoteReview(l, f, n, {
    applyFixesOnComplete: h,
    postReviewToPR: L,
    signal: g,
  });
  if (g?.aborted) {
    if (c?.launched && c.taskId && l.mode === "pr")
      f.taskRegistry.update(c.taskId, (m) => ({ ...m, postReviewTo: void 0 }));
    return;
  }
  if (c) {
    let m = P && c.launched ? (P === "disabled" ? POST_DISABLED_NOTE : POST_IGNORED_NOTE) : "",
      R =
        c.blocks.map((w) => (w.type === "text" ? w.text : "")).filter(Boolean)
          .join(`
`) + m;
    b(R, {
      shouldQuery: !0,
      metaMessages: c.launched
        ? [ultrareviewLaunchAcknowledgementNudge(h, l.mode === "branch" ? l.instructions : void 0)]
        : void 0,
    });
  } else
    b(
      "Ultrareview failed to launch the cloud session. Check that this is a GitHub repo and try again.",
      { display: "system" },
    );
}
var $o = async (l, f, b, n) => {
  let h = policyDeniedReason("allow_remote_sessions", "Cloud sessions", "are");
  if (h) return (l(h, { display: "system" }), null);
  let { scopeArgs: L, applyFixes: P, postReview: g } = parseUltrareviewArgs(b),
    c = await precheckLaunchScope(L, n ? `/${n}` : "/ultrareview");
  if (!c.ok) return (l(c.error, { display: "system" }), null);
  let m = c.scope,
    R = !1,
    w = (y) => {
      if (m.mode === "branch" && m.noMergeBase)
        i("tengu_review_remote_precondition_recovery", {
          reason: S("no_merge_base"),
          method: S("empty_tree_bundle"),
          outcome: fromEnum(y),
        });
    },
    s = await checkOverageGate({
      overageConfirmed: f.isUltrareviewOverageConfirmed(),
      credentials: f.credentials,
    });
  switch (s.kind) {
    case "blocked": {
      i("tengu_review_overage_blocked", { reason: Ub(s.reason) });
      let k = s.actionUrl
          ? `
  \u2192 ${s.actionUrl}`
          : "",
        U =
          s.actionUrl?.includes("/admin-settings/") && isExtraUsageAllowed() && !Km()
            ? `
  Run /usage-credits to request this from your admin.`
            : "";
      return (l(`${s.message}${k}${U}`, { display: "system" }), null);
    }
    case "needs-confirm":
    case "proceed":
      if (s.kind === "needs-confirm")
        i("tengu_review_overage_dialog_shown", {});
      let y = !BOe(),
        v =
          m.mode === "pr" && Do(m.host) && g !== !1 && !y
            ? { githubLogin: s.githubLogin ?? null, preferPost: g === !0 }
            : null;
      return e(me, {
        subtitle: s.kind === "needs-confirm" ? getReviewDurationNote() : s.billingNote || null,
        body: s.kind === "needs-confirm" ? s.body : void 0,
        scope: m,
        postOption: v,
        onProceed: async (k, U) => {
          if (!R) ((R = !0), w("accepted"));
          if (
            (await Ye({
              scope: m,
              context: f,
              onDone: l,
              billingNote: s.billingNote,
              applyFixes: P,
              postToPR: v !== null && U.postToPR,
              postDropped:
                g === !0 && v === null ? (y ? "disabled" : "target") : void 0,
              signal: k,
            }),
            !k.aborted && s.kind === "needs-confirm")
          )
            f.markUltrareviewOverageConfirmed();
        },
        onCancel: () => {
          if (!R) w("declined");
          l("Ultrareview cancelled.", { display: "system" });
        },
      });
  }
};
export { $o as call };
