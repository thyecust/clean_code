// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 279 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { cn } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import { Aw, getOauthAccountInfo as vn, getSubscriptionType as qn, getRateLimitTier as UT, H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { formatResetTime as Au } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import {
  z9,
  LF,
  Km,
  kO,
  md,
  lVe,
  QVe,
  dde,
  Gs,
  aAe,
  tN,
  z3,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { Zle, wee, xIe, orn, R4, Jx } from "../AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import { fWe, QR, XIt, DB, LB } from "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import { Lle, rIe, B9e, j9e, W9e } from "../限流-重试/限流-重试.4mc5yc28.js";
import { oM, G9e, oIe, sIe, q9e, nnn, z9e } from "../用量额度-限额/chunk-n4zff40p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0k3bh4m8.js";
import "../认证-OAuth登录/chunk-9g86t9bp.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r2ab1bp6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1phhhgcj.js";
import "../向导(Wizard)UI/向导(Wizard)UI.7xe5wk62.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import "../Bedrock-Vertex/chunk-g6sqdw6w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8spdkj0k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../认证-OAuth登录/chunk-xvt7fc9t.js";
import "../Bedrock-Vertex/chunk-yvs1a1sd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hxt46tkz.js";
import "../../01-核心基础设施/设置-配置/chunk-tswdb9jt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-85wxphev.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-csjxh2sy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kp7erqvh.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-nvzk8dj1.js";
import "../Bridge-RemoteControl/chunk-3b6ct3yp.js";
import { lye } from "../../01-核心基础设施/共享小工具-未细化/chunk-g2gg68zp.js";
import { Qae } from "../../01-核心基础设施/共享小工具-未细化/chunk-734z18w7.js";
import "../权限系统/chunk-n5mgv42x.js";
import { mr } from "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import "../认证-OAuth登录/chunk-dtt2nn79.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1371sqbk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bg4saywz.js";
import { $n } from "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "./chunk-f1ehes3v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hyrh6kmc.js";
import { ut } from "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../认证-OAuth登录/chunk-5bg9xwqx.js";
import { E, V, C, d, At, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { L } from "../Teammates团队/chunk-mrfx53ye.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
function wi(Un) {
  return Math.max(0, Un - 1);
}
var re = 500,
  Li = 1000,
  Ci = 10000000000,
  Mi = 4000;
function Rt(m) {
  return (
    m.overageDisabledReason === "org_level_disabled_until" &&
    m.balanceMinorUnits > 0
  );
}
function Fe(m, f, y = null) {
  let B = m ?? Mi,
    u = f === 1 ? Math.floor(B / re + 1) * re : Math.ceil(B / re - 1) * re,
    ue = y === null ? re : f === 1 ? Math.ceil((y + Li) / re) * re : y;
  return Math.min(Ci, Math.max(ue, u));
}
function Ge(bn) {
  let b = _(61),
    { balance: ot, onDone: S, context: v } = bn,
    [ni, Rn] = d(null),
    [st] = cn(),
    rt = QR(),
    oi;
  if (b[0] === p) ((oi = qn()), (b[0] = oi));
  else oi = b[0];
  let si = oi,
    ri;
  if (b[1] === p) {
    let Ln = si === "max" && UT() === "default_claude_max_20x";
    ri = !Ln && z9();
    b[1] = ri;
  } else ri = b[1];
  let Cn = ri,
    j = ot.currency,
    [k, at] = d(void 0),
    [G, ye] = d(void 0),
    [J, Tt] = d(!1),
    [be, ai] = d(0),
    [lt, Y] = d(null),
    li,
    ui;
  if (b[2] !== v.credentials)
    ((li = () => {
      let Dt = Aw();
      if (Dt) {
        (at(Dt.spendLimitCents), ye(Dt.spendLimitCents));
        return;
      }
      let Pt = !1;
      return (
        kO(v.credentials)
          .then((mi) => {
            if (Pt) {
              return;
            }
            let di = mi?.extra_usage?.monthly_limit ?? null;
            let Mn = mi?.extra_usage?.used_credits ?? 0;
            let pi = di === null ? null : Math.max(di, Mn);
            (at(pi), ye(pi));
          })
          .catch(() => {
            if (Pt) {
              return;
            }
            (at(null), ye(null));
          }),
        () => {
          Pt = !0;
        }
      );
    }),
      (ui = [v.credentials]),
      (b[2] = v.credentials),
      (b[3] = li),
      (b[4] = ui));
  else ((li = b[3]), (ui = b[4]));
  E(li, ui);
  let Ut;
  bb0: {
    if (rt.resetsAt) {
      let Xe;
      if (b[5] !== rt.resetsAt)
        ((Xe = Au(rt.resetsAt, !0)), (b[5] = rt.resetsAt), (b[6] = Xe));
      else Xe = b[6];
      Ut = Xe;
      break bb0;
    }
    Ut = void 0;
  }
  let ci = Ut,
    q = G !== void 0,
    Xe;
  if (b[7] !== j || b[8] !== q || b[9] !== G)
    ((Xe = !q ? "\u2026" : G === null ? "Unlimited" : Gs(G, j, "fit")),
      (b[7] = j),
      (b[8] = q),
      (b[9] = G),
      (b[10] = Xe));
  else Xe = b[10];
  const St = `Adjust monthly spend limit: ${Xe}`,
    jt =
      k === null
        ? "\u2190 or \u2192 to set a limit"
        : "\u2190 or \u2192 to adjust \xB7 Del to remove limit";
  let mt;
  if (b[11] !== St || b[12] !== jt)
    ((mt = { id: "adjust", label: St, hint: jt }),
      (b[11] = St),
      (b[12] = jt),
      (b[13] = mt));
  else mt = b[13];
  const kt = ci ? `Resets ${ci}` : "";
  let dt;
  if (b[14] !== kt)
    ((dt = { id: "wait", label: "Wait for limit to reset", hint: kt }),
      (b[14] = kt),
      (b[15] = dt));
  else dt = b[15];
  let Nt;
  if (b[16] !== dt || b[17] !== mt) {
    Nt = [mt, dt];
    if (Cn) {
      let wn = si === "max" ? "Max 20x" : "Max";
      let $e;
      if (b[19] === p)
        (($e = {
          id: "upgrade",
          label: `Upgrade to ${wn} for higher session limits every month`,
          hint: "",
        }),
          (b[19] = $e));
      else $e = b[19];
      Nt.push($e);
    }
    ((b[16] = dt), (b[17] = mt), (b[18] = Nt));
  } else Nt = b[18];
  let se = Nt,
    $e;
  if (b[20] !== v || b[21] !== S)
    (($e = function Be() {
      (i("tengu_spend_limit_nudge_cancel", {}),
        v.prefillRateLimitAutoQueueContinue?.(),
        S(void 0, { display: "skip" }));
    }),
      (b[20] = v),
      (b[21] = S),
      (b[22] = $e));
  else $e = b[22];
  let Be = $e,
    fi;
  if (
    b[23] !== v.credentials ||
    b[24] !== j ||
    b[25] !== q ||
    b[26] !== S ||
    b[27] !== G ||
    b[28] !== k ||
    b[29] !== J ||
    b[30] !== st
  )
    ((fi = async function Ee() {
      if (!q || J) {
        return;
      }
      if (G === k) {
        Y(
          k === null
            ? "Press \u2190 or \u2192 to set a limit."
            : "Press \u2192 to raise the limit, or Del to remove it.",
        );
        return;
      }
      Tt(!0);
      let pt = G ?? null;
      let z = await QVe(pt, j, v.credentials);
      if (!z.ok) {
        (Tt(!1),
          Y(
            z.reason
              ? `Could not update your spend limit: ${z.reason}`
              : "Could not update your spend limit. Press Enter to retry.",
          ));
        return;
      }
      let It = z.disabledUntil != null ? new Date(z.disabledUntil) : null;
      let hi = It != null && (Number.isNaN(It.getTime()) || It > new Date());
      if (
        (i("tengu_spend_limit_nudge_save", {
          removed: pt === null,
          reblocked: hi,
        }),
        hi)
      ) {
        Tt(!1);
        let ct = z.usedCredits !== null ? Math.max(k ?? 0, z.usedCredits) : k;
        (at(ct ?? null),
          ye((Wt) =>
            ct !== null && ct !== void 0 && Wt !== null
              ? Math.max(Wt ?? 0, ct)
              : Wt,
          ),
          Y(
            z.usedCredits !== null
              ? `You've already used ${Gs(z.usedCredits, j, "fit")} this month \u2014 set your limit above that.`
              : "Your current spend is still over the new limit. Raise it higher or remove it.",
          ));
        return;
      }
      Y(null);
      let ft = { ...md(), isUsingOverage: !0 };
      if ((delete ft.overageDisabledReason, ft.status === "rejected"))
        ft.status = "allowed";
      if ((lVe(ft), pt === null))
        S(ut("success", st)("Removed monthly spend limit"));
      else
        S(
          ut(
            "success",
            st,
          )(`Increased monthly spend limit to ${Gs(pt, j, "fit")}`),
        );
    }),
      (b[23] = v.credentials),
      (b[24] = j),
      (b[25] = q),
      (b[26] = S),
      (b[27] = G),
      (b[28] = k),
      (b[29] = J),
      (b[30] = st),
      (b[31] = fi));
  else fi = b[31];
  let Ee = fi,
    _i;
  if (b[32] !== Ee || b[33] !== v || b[34] !== S)
    ((_i = function Qe(we) {
      if (we === "adjust" || we === "upgrade")
        v.cancelRateLimitAutoQueueContinue?.();
      else if (we === "wait") v.prefillRateLimitAutoQueueContinue?.();
      if (we === "adjust") Ee();
      else if (we === "wait")
        (i("tengu_spend_limit_nudge_wait", {}), S(void 0, { display: "skip" }));
      else if (we === "upgrade")
        (i("tengu_spend_limit_nudge_upgrade", {}),
          import("./upgrade-ui.4jn476kj.js")
            .then((ht) => {
              let { callUpgradeFromSurface: On } = ht;
              return On(S, v, "spend_limit_options_menu");
            })
            .then((gi) => {
              if (gi) Rn(gi);
            }));
    }),
      (b[32] = Ee),
      (b[33] = v),
      (b[34] = S),
      (b[35] = _i));
  else _i = b[35];
  let Qe = _i,
    ht;
  if (
    b[36] !== Qe ||
    b[37] !== q ||
    b[38] !== se ||
    b[39] !== be ||
    b[40] !== k ||
    b[41] !== J
  )
    ((ht = function Ke(x) {
      if (J) {
        return;
      }
      if (x.key === "up") {
        (x.preventDefault(), Y(null), ai(wi));
        return;
      }
      if (x.key === "down") {
        (x.preventDefault(),
          Y(null),
          ai((xn) => Math.min(se.length - 1, xn + 1)));
        return;
      }
      if (x.key === "return") {
        x.preventDefault();
        let yi = se[be];
        if (yi) Qe(yi.id);
        return;
      }
      if (se[be]?.id !== "adjust" || !q) {
        return;
      }
      if (x.key === "left")
        (x.preventDefault(),
          Y(null),
          ye((Tn) => Fe(Tn ?? null, -1, k ?? null)));
      else if (x.key === "right")
        (x.preventDefault(), Y(null), ye((Dn) => Fe(Dn ?? null, 1, k ?? null)));
      else if (x.key === "delete" || x.key === "backspace")
        (x.preventDefault(), Y(null), ye(null));
    }),
      (b[36] = Qe),
      (b[37] = q),
      (b[38] = se),
      (b[39] = be),
      (b[40] = k),
      (b[41] = J),
      (b[42] = ht));
  else ht = b[42];
  let Ke = ht;
  if (ni) {
    return ni;
  }
  let bi;
  if (b[43] !== ot.amount || b[44] !== j)
    ((bi = Gs(ot.amount, j)), (b[43] = ot.amount), (b[44] = j), (b[45] = bi));
  else bi = b[45];
  const Jt = `Usage credit balance: ${bi}`,
    Xt = !J;
  let _t;
  if (b[46] !== se || b[47] !== be)
    ((_t = e(o, {
      flexDirection: "column",
      children: se.map((gt, Pn) => {
        let Ri = Pn === be;
        return r(
          o,
          {
            justifyContent: "space-between",
            gap: 2,
            children: [
              r(t, {
                color: Ri ? "suggestion" : void 0,
                children: [Ri ? L.pointer : " ", " ", gt.label],
              }),
              gt.hint
                ? e(t, {
                    dimColor: !0,
                    wrap: "truncate-end",
                    children: gt.hint,
                  })
                : null,
            ],
          },
          gt.id,
        );
      }),
    })),
      (b[46] = se),
      (b[47] = be),
      (b[48] = _t));
  else _t = b[48];
  let yt;
  if (b[49] !== lt || b[50] !== J)
    ((yt = J
      ? e($n, { message: "Updating spend limit\u2026" })
      : lt
        ? e(o, { children: e(t, { color: "error", children: lt }) })
        : null),
      (b[49] = lt),
      (b[50] = J),
      (b[51] = yt));
  else yt = b[51];
  let bt;
  if (b[52] !== Ke || b[53] !== _t || b[54] !== yt)
    ((bt = r(mr, { gap: 1, onKeyDown: Ke, children: [_t, yt] })),
      (b[52] = Ke),
      (b[53] = _t),
      (b[54] = yt),
      (b[55] = bt));
  else bt = b[55];
  let vi;
  if (b[56] !== Be || b[57] !== Jt || b[58] !== Xt || b[59] !== bt)
    ((vi = e(de, {
      title: "What do you want to do?",
      titleEnd: Jt,
      onCancel: Be,
      isCancelActive: Xt,
      color: "suggestion",
      children: bt,
    })),
      (b[56] = Be),
      (b[57] = Jt),
      (b[58] = Xt),
      (b[59] = bt),
      (b[60] = vi));
  else vi = b[60];
  return vi;
}
function zi() {}
function Hi() {}
function Vt(m) {
  switch (m) {
    case "upgrade":
    case "extra-usage":
      return !0;
    case "cancel":
    case "auto-resume":
    case "low-priority":
    case "juniper-tide":
    case "juniper-tide-spent":
    case "cancel-auto-resume":
      return !1;
  }
}
function zt(co) {
  let l = _(101),
    { onDone: h, context: g } = co,
    [Oi, xi] = d(null),
    n = QR(),
    { storageV5: $t } = _e(),
    Ti;
  if (l[0] === p) ((Ti = qn()), (l[0] = Ti));
  else Ti = l[0];
  let Bt = Ti,
    Di;
  if (l[1] === p) ((Di = UT()), (l[1] = Di));
  else Di = l[1];
  let fo = Di,
    ho = vn()?.hasExtraUsageEnabled === !0,
    Pi = vn()?.billingType === "usage_based",
    _o = Bt === "max" && fo === "default_claude_max_20x",
    Et = Bt === "team" || Bt === "enterprise",
    go = H("tengu_jade_anvil_4", !1),
    Ye = n.upgradePaths,
    Qt = DB(n.resetsAt !== void 0 ? n.resetsAt * 1000 : null),
    Ui;
  if (l[2] !== n.resetsAt || l[3] !== Qt)
    ((Ui = Ze(n.resetsAt, Qt)), (l[2] = n.resetsAt), (l[3] = Qt), (l[4] = Ui));
  else Ui = l[4];
  let { label: Kt } = Ui,
    Oe = LB().phase,
    Si;
  if (l[5] !== Oe) ((Si = wee(Oe)), (l[5] = Oe), (l[6] = Si));
  else Si = l[6];
  let Ft = Si,
    ji;
  if (l[7] !== n) ((ji = Lle(n)), (l[7] = n), (l[8] = ji));
  else ji = l[8];
  let Re = ji,
    vt = At(G9e, oM, oM).phase,
    ki;
  if (l[9] !== n) ((ki = oIe(n)), (l[9] = n), (l[10] = ki));
  else ki = l[10];
  let X = ki,
    Ni;
  if (l[11] !== n || l[12] !== X)
    ((Ni = X ? void 0 : sIe(n)), (l[11] = n), (l[12] = X), (l[13] = Ni));
  else Ni = l[13];
  let xe = Ni,
    [yo, bo] = d(!1),
    Ai;
  if (l[14] === p) ((Ai = H(fWe, !1)), (l[14] = Ai));
  else Ai = l[14];
  let Ro = Ai,
    Ii;
  if (l[15] !== n.overageDisabledReason)
    ((Ii =
      Ro &&
      !Et &&
      n.overageDisabledReason === "org_level_disabled_until" &&
      Km() &&
      tN.isEnabled()),
      (l[15] = n.overageDisabledReason),
      (l[16] = Ii));
  else Ii = l[16];
  let Te = Ii,
    [Lt, vo] = d(null),
    Wi;
  if (
    l[17] !== n.overageDisabledReason ||
    l[18] !== g.credentials ||
    l[19] !== Te
  )
    ((Wi = () => {
      if (!Te) {
        return;
      }
      let Ji = !1;
      return (
        dde(g.credentials)
          .then((Gt) => {
            if (Ji || !Gt) {
              return;
            }
            if (
              Rt({
                overageDisabledReason: n.overageDisabledReason,
                balanceMinorUnits: Gt.amount,
              })
            )
              vo(Gt);
          })
          .catch(zi),
        () => {
          Ji = !0;
        }
      );
    }),
      (l[17] = n.overageDisabledReason),
      (l[18] = g.credentials),
      (l[19] = Te),
      (l[20] = Wi));
  else Wi = l[20];
  let Xi;
  if (l[21] !== Te) ((Xi = [Te]), (l[21] = Te), (l[22] = Xi));
  else Xi = l[22];
  E(Wi, Xi);
  let Yt;
  bb0: {
    let Z;
    if (l[23] !== Ye) {
      Z = [];
      let Lo = Ye !== void 0;
      if (XIt(Ye)) {
        let Co = Km();
        let Mo = Et && !Co;
        let $i = Pi ? "usage" : "usage credits";
        let qt;
        if (Mo) qt = "Ask your admin for more usage";
        else qt = ho ? `Add funds to continue with ${$i}` : `Switch to ${$i}`;
        let N;
        if (l[25] === p)
          ((N = { label: qt, value: "extra-usage" }), (l[25] = N));
        else N = l[25];
        Z.push(N);
      }
      if (
        Lo
          ? Ye.includes("upgrade_plan") && aAe.isEnabled()
          : !_o && !Et && aAe.isEnabled()
      ) {
        let N;
        if (l[26] === p)
          ((N = { label: "Upgrade your plan", value: "upgrade" }), (l[26] = N));
        else N = l[26];
        Z.push(N);
      }
      ((l[23] = Ye), (l[24] = Z));
    } else Z = l[24];
    let N;
    if (l[27] === p)
      ((N = {
        label: Pi ? "Stop" : "Stop and wait for limit to reset",
        value: "cancel",
      }),
        (l[27] = N));
    else N = l[27];
    let Bi = N;
    let qe;
    if (l[28] !== Kt || l[29] !== n || l[30] !== Ft)
      ((qe = Ft
        ? {
            label: "Don\u2019t continue automatically",
            value: "cancel-auto-resume",
          }
        : Zle(n)
          ? { label: Kt, value: "auto-resume" }
          : void 0),
        (l[28] = Kt),
        (l[29] = n),
        (l[30] = Ft),
        (l[31] = qe));
    else qe = l[31];
    let Ct = qe;
    let A;
    if (l[32] !== Ct || l[33] !== xe || l[34] !== X || l[35] !== Re) {
      A = [];
      if (X) {
        let R;
        if (l[37] === p)
          ((R = { label: z3().label, value: "juniper-tide" }), (l[37] = R));
        else R = l[37];
        A.push(R);
      } else if (xe !== void 0) {
        let R;
        if (l[38] !== xe)
          ((R = { label: xe, value: "juniper-tide-spent", disabled: !0 }),
            (l[38] = xe),
            (l[39] = R));
        else R = l[39];
        A.push(R);
      }
      if (Ct) A.push(Ct);
      if (Re) {
        let R;
        if (l[40] === p)
          ((R = { label: LF().label, value: "low-priority" }), (l[40] = R));
        else R = l[40];
        A.push(R);
      }
      ((l[32] = Ct), (l[33] = xe), (l[34] = X), (l[35] = Re), (l[36] = A));
    } else A = l[36];
    if (go) {
      let R;
      if (l[41] !== Z || l[42] !== A)
        ((R = [...Z, Bi, ...A]), (l[41] = Z), (l[42] = A), (l[43] = R));
      else R = l[43];
      Yt = R;
      break bb0;
    }
    let R;
    if (l[44] !== Z || l[45] !== A)
      ((R = [Bi, ...A, ...Z]), (l[44] = Z), (l[45] = A), (l[46] = R));
    else R = l[46];
    Yt = R;
  }
  let Mt = Yt,
    N,
    qe;
  if (l[47] !== n || l[48] !== Re)
    ((N = () => {
      if (Re) rIe(n, "dialog");
    }),
      (qe = [Re, n]),
      (l[47] = n),
      (l[48] = Re),
      (l[49] = N),
      (l[50] = qe));
  else ((N = l[49]), (qe = l[50]));
  E(N, qe);
  let R, Ei;
  if (l[51] !== n || l[52] !== X)
    ((R = () => {
      if (X) q9e(n, "dialog");
    }),
      (Ei = [X, n]),
      (l[51] = n),
      (l[52] = X),
      (l[53] = R),
      (l[54] = Ei));
  else ((R = l[53]), (Ei = l[54]));
  E(R, Ei);
  let Qi = C(!1),
    Ki,
    Fi;
  if (l[55] !== n || l[56] !== g.credentials || l[57] !== vt)
    ((Ki = () => {
      if (Qi.current || vt !== "failed") {
        return;
      }
      ((Qi.current = !0), nnn(n, g.credentials));
    }),
      (Fi = [vt, n, g.credentials]),
      (l[55] = n),
      (l[56] = g.credentials),
      (l[57] = vt),
      (l[58] = Ki),
      (l[59] = Fi));
  else ((Ki = l[58]), (Fi = l[59]));
  E(Ki, Fi);
  let De, Pe, Ue, Se, je, ke;
  if (
    l[60] !== Oe ||
    l[61] !== n ||
    l[62] !== g ||
    l[63] !== h ||
    l[64] !== $t
  ) {
    De = function De() {
      if (
        (i("tengu_rate_limit_options_menu_select_auto_resume", {}),
        !orn(n, Date.now(), "dialog", $t))
      ) {
        Ve();
        return;
      }
      let { confirmationPhrase: wo } = Ze(
        n.resetsAt,
        n.resetsAt !== void 0 && n.resetsAt * 1000 <= Date.now(),
      );
      h(
        `Claude Code will continue automatically ${wo}. Keep this session open; it may still pause for permission prompts. Press esc to cancel the wait.`,
      );
    };
    let ze;
    if (l[71] !== h)
      ((ze = function je() {
        i("tengu_rate_limit_options_menu_select_low_priority", {});
        let Gi = B9e("dialog");
        if (Gi === "unavailable") {
          h(W9e());
          return;
        }
        h(j9e(Gi));
      }),
        (l[71] = h),
        (l[72] = ze));
    else ze = l[72];
    je = ze;
    let M;
    if (l[73] !== g.credentials || l[74] !== h)
      ((M = function Se() {
        (i("tengu_rate_limit_options_menu_select_juniper_tide", {}),
          bo(!0),
          z9e("dialog", g.credentials)
            .then((Oo) => {
              h(Oo.text);
            })
            .catch(() => {
              h(z3().unavailableLine);
            }));
      }),
        (l[73] = g.credentials),
        (l[74] = h),
        (l[75] = M));
    else M = l[75];
    Se = M;
    let ae;
    if (l[76] !== h)
      ((ae = function Ne() {
        (Jx("dialog"),
          h(
            "Automatic continue cancelled. Your session will wait for you instead; /rate-limit-options can arm it again.",
          ));
      }),
        (l[76] = h),
        (l[77] = ae));
    else ae = l[77];
    let Ne = ae;
    let Yi;
    if (l[78] !== Ne)
      ((Yi = function Pe() {
        (i("tengu_rate_limit_options_menu_cancel_auto_resume", {}), Ne());
      }),
        (l[78] = Ne),
        (l[79] = Yi));
    else Yi = l[79];
    Pe = Yi;
    ke = function ke() {
      if (
        (i("tengu_rate_limit_options_menu_cancel", {}), xIe() || Oe === "stale")
      ) {
        Ne();
        return;
      }
      Ve();
    };
    Ue = function Ue() {
      (i("tengu_rate_limit_options_menu_cancel", {}), Ve());
    };
    function Ve() {
      (g.prefillRateLimitAutoQueueContinue?.(), h(void 0, { display: "skip" }));
    }
    ((l[60] = Oe),
      (l[61] = n),
      (l[62] = g),
      (l[63] = h),
      (l[64] = $t),
      (l[65] = De),
      (l[66] = Pe),
      (l[67] = Ue),
      (l[68] = Se),
      (l[69] = je),
      (l[70] = ke));
  } else
    ((De = l[65]),
      (Pe = l[66]),
      (Ue = l[67]),
      (Se = l[68]),
      (je = l[69]),
      (ke = l[70]));
  let ze;
  if (
    l[80] !== g ||
    l[81] !== De ||
    l[82] !== Pe ||
    l[83] !== Se ||
    l[84] !== je ||
    l[85] !== ke ||
    l[86] !== h
  )
    ((ze = function He(le) {
      if (Vt(le)) g.cancelRateLimitAutoQueueContinue?.();
      if (le === "upgrade")
        (i("tengu_rate_limit_options_menu_select_upgrade", {}),
          Qae(h, g, "rate_limit_options_menu").then((qi) => {
            if (qi) xi(qi);
          }));
      else if (le === "extra-usage")
        (i("tengu_rate_limit_options_menu_select_extra_usage", {}),
          lye(h, g).then((Vi) => {
            if (Vi) xi(Vi);
          }));
      else if (le === "auto-resume") De();
      else if (le === "cancel-auto-resume") Pe();
      else if (le === "low-priority") je();
      else if (le === "juniper-tide") Se();
      else if (le === "cancel") ke();
    }),
      (l[80] = g),
      (l[81] = De),
      (l[82] = Pe),
      (l[83] = Se),
      (l[84] = je),
      (l[85] = ke),
      (l[86] = h),
      (l[87] = ze));
  else ze = l[87];
  let He = ze;
  if (Oi) {
    return Oi;
  }
  if (yo) {
    let M;
    if (l[88] === p)
      ((M = e(de, {
        title: "What do you want to do?",
        onCancel: Hi,
        color: "suggestion",
        hideInputGuide: !0,
        children: e(t, {
          dimColor: !0,
          children:
            "Resetting your session limit\u2026 this usually takes a few seconds",
        }),
      })),
        (l[88] = M));
    else M = l[88];
    return M;
  }
  if (Lt) {
    let M;
    if (l[89] !== h) ((M = R4(h)), (l[89] = h), (l[90] = M));
    else M = l[90];
    let ae;
    if (l[91] !== g || l[92] !== Lt || l[93] !== M)
      ((ae = e(Ge, { balance: Lt, onDone: M, context: g })),
        (l[91] = g),
        (l[92] = Lt),
        (l[93] = M),
        (l[94] = ae));
    else ae = l[94];
    return ae;
  }
  let M;
  if (l[95] !== He || l[96] !== Mt)
    ((M = e(ve, { options: Mt, onChange: He, visibleOptionCount: Mt.length })),
      (l[95] = He),
      (l[96] = Mt),
      (l[97] = M));
  else M = l[97];
  let ae;
  if (l[98] !== Ue || l[99] !== M)
    ((ae = e(de, {
      title: "What do you want to do?",
      onCancel: Ue,
      color: "suggestion",
      children: M,
    })),
      (l[98] = Ue),
      (l[99] = M),
      (l[100] = ae));
  else ae = l[100];
  return ae;
}
function Ze(m, f) {
  if (f)
    return {
      label: "Wait here, then continue automatically shortly",
      confirmationPhrase: "shortly",
    };
  let y = Au(m);
  if (y)
    return {
      label: `Wait here, then continue automatically at ${y}`,
      confirmationPhrase: `at ${y}`,
    };
  return {
    label: "Wait here, then continue automatically when the limit resets",
    confirmationPhrase: "when your usage limit resets",
  };
}
async function mo(m, f) {
  return e(zt, { onDone: m, context: f });
}
export { mo as call };
