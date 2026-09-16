// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { mo } from "../共享小工具-未细化/chunk-vzqtx1mx.js";
import { Ah } from "../共享小工具-未细化/chunk-hxt46tkz.js";
import { x, ln } from "../核心工具-字符串与文本/chunk-1wezmyx2.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { jU, j5, DHn, LHn, NHn } from "./设置-配置.aqbb35ee.js";
import { o, t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { Vm } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { Ne } from "../共享小工具-未细化/chunk-eebsvd7r.js";
import { ue } from "../共享小工具-未细化/chunk-ff1hq6qq.js";
import { ui, Gm, fa, $o } from "../../02-功能模块/交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { Se } from "../共享小工具-未细化/chunk-mb654mj6.js";
import { D } from "../../02-功能模块/键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { En } from "../共享小工具-未细化/chunk-979tv7jj.js";
import { gs } from "../../02-功能模块/权限系统/chunk-n5mgv42x.js";
import { ci } from "../共享小工具-未细化/chunk-bg4saywz.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, V, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { G } from "../共享小工具-未细化/chunk-d16fhdtx.js";
import { p } from "../共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function Qt(An) {
  return An + 1;
}
function Ut(On, jn) {
  return r(
    o,
    {
      paddingLeft: 2,
      flexDirection: "row",
      children: [
        e(t, { dimColor: !0, children: "\xB7 " }),
        e(t, { children: On }),
      ],
    },
    jn,
  );
}
function Zt(zn, Dn) {
  return r(
    o,
    {
      paddingLeft: 2,
      flexDirection: "row",
      children: [
        e(t, { dimColor: !0, children: "\xB7 " }),
        e(t, { children: zn }),
      ],
    },
    `tail-${Dn}`,
  );
}
var N = 20,
  Xt = 40,
  Bt = 14,
  Vt = 4,
  Kt = 6;
function ee(n, a) {
  let l = Math.max(1, a - Kt);
  return (
    ln(
      Vm(n, l, "wrap"),
      `
`,
    ) + 1
  );
}
function lt(n, a, l) {
  let s = Bt + l.reduce((u, g) => u + ee(g, a), 0);
  return Math.min(Xt, n - s);
}
function te(n, a, l, s, u) {
  let g = l ? `(at most ${N} are listed)` : "(list trimmed to fit the screen)",
    c =
      (s > 0 ? `, ${s} executing ${x(s, "a command", "commands")}` : "") +
      (u > 0 ? `, ${u} ${x(u, "sandbox setting")}` : "");
  return a
    ? `\u22EF and ${n} more not shown ${g}${c} \u2014 choose No unless you expected every one of these settings`
    : `${n} ${x(n, "setting")} not shown ${g}${c} \u2014 choose No unless you expected every one of these settings`;
}
function ut(n, a, l) {
  if (n.length === 0) return { head: [], tail: [], elided: 0 };
  let s = n.map((b) => ee(b, a)),
    u = s.reduce((b, q) => b + q, 0),
    g = Math.max(
      ee(te(n.length, !0, !1, n.length, n.length), a),
      ee(te(n.length, !0, !0, n.length, n.length), a),
    );
  if (n.length <= N && u <= Math.max(l, g))
    return { head: n, tail: [], elided: 0 };
  let c = g,
    h = 0,
    m = n.length,
    k = (b) => c + s[b] <= l;
  if (k(0)) ((c += s[0]), (h = 1));
  while (m - 1 >= Math.max(h, n.length - Vt) && m - 1 > 0 && k(m - 1))
    (m--, (c += s[m]));
  while (h < m && h + (n.length - m) < N && k(h)) ((c += s[h]), h++);
  return { head: n.slice(0, h), tail: n.slice(m), elided: m - h };
}
function ht(n) {
  let a = G(Object.values(n.shellSettings), (g) => g !== void 0),
    l = Object.keys(n.envVars).length,
    s = [];
  if (a > 0) s.push(`${x(a, "command setting")} \xD7${a}`);
  let u = Object.keys(n.sandboxSettings).length;
  if (u > 0) s.push(`${x(u, "sandbox setting")} \xD7${u}`);
  if (l > 0) s.push(`${x(l, "env var")} \xD7${l}`);
  if (n.hasHooks) s.push("hooks");
  return s.join(", ");
}
var mt = {
    intro:
      "Your organization has configured managed settings that could allow execution of arbitrary code or interception of your prompts and responses.",
    listLabel: "Settings requiring approval:",
    advice:
      "Only accept if you trust your organization's IT administration and expect these settings to be configured.",
    risk: "these can run code or redirect traffic on this machine.",
  },
  ft = {
    intro:
      "Your organization has configured Claude Code to send telemetry to the destination below. Depending on your organization's settings, this can include the content of your prompts and responses.",
    listLabel: "Telemetry destination:",
    advice:
      "Only accept if you recognize this as your organization's telemetry collector.",
    risk: "this redirects where telemetry from this machine is sent.",
  },
  L = mo;
function cWe(ce) {
  let bn = _(2),
    Ot;
  if (bn[0] !== ce)
    ((Ot = e(Oe, { ...ce }, ce.reveal)), (bn[0] = ce), (bn[1] = Ot));
  else Ot = bn[1];
  return Ot;
}
function Oe(wn) {
  let i = _(95),
    {
      settings: T,
      baseline: Je,
      reveal: vn,
      onAccept: We,
      onReject: Ye,
      wouldTakeAnswer: Xe,
    } = wn,
    y = vn === "login_handoff",
    { columns: de, rows: Be } = Se(),
    B,
    I,
    A,
    O,
    K,
    Ve,
    Ke,
    jt;
  if (i[0] !== Je || i[1] !== de || i[2] !== T || i[3] !== Be) {
    let zt = jU(T);
    let Q = DHn(Je, zt);
    let le = j5(Q.changed) ? Q.changed : zt;
    I = LHn(le, T) ? ft : mt;
    let Qe = le === Q.changed ? Q.unchangedCount : 0;
    let j = Q.removedCount;
    A =
      Qe > 0
        ? `\uFF0B ${Qe} other active ${x(Qe, "setting")} unchanged since your last approval`
        : null;
    let U;
    if (i[12] !== j)
      ((U =
        j > 0
          ? `\u2212 ${j} previously approved ${x(j, "setting")} no longer ${j === 1 ? "requires" : "require"} approval`
          : null),
        (i[12] = j),
        (i[13] = U));
    else U = i[13];
    O = U;
    K = `Approving applies: ${ht(le)} \u2014 ${I.risk}`;
    let xn = lt(Be, de, [
      I.intro,
      I.advice,
      K,
      ...(A ? [A] : []),
      ...(O ? [O] : []),
    ]);
    let {
      commandRows: he,
      sandboxRows: me,
      envRows: $n,
      categoryRows: Cn,
    } = NHn(le);
    B = he;
    Ke = me;
    Ve = [...B, ...Ke, ...$n, ...Cn];
    jt = ut(Ve, de, xn);
    ((i[0] = Je),
      (i[1] = de),
      (i[2] = T),
      (i[3] = Be),
      (i[4] = B),
      (i[5] = I),
      (i[6] = A),
      (i[7] = O),
      (i[8] = K),
      (i[9] = Ve),
      (i[10] = Ke),
      (i[11] = jt));
  } else
    ((B = i[4]),
      (I = i[5]),
      (A = i[6]),
      (O = i[7]),
      (K = i[8]),
      (Ve = i[9]),
      (Ke = i[10]),
      (jt = i[11]));
  let Z = jt,
    Dt = Z.head.length,
    Nt = Ve.length - Z.tail.length,
    Ue = Math.max(0, Math.min(B.length, Nt) - Dt),
    Ln = B.length + Ke.length,
    Ze = Math.max(0, Math.min(Ln, Nt) - Math.max(B.length, Dt)),
    U;
  if (
    i[14] !== I ||
    i[15] !== Ue ||
    i[16] !== Ze ||
    i[17] !== A ||
    i[18] !== O ||
    i[19] !== K ||
    i[20] !== Z
  )
    ((U = {
      ...Z,
      elidedCommandCount: Ue,
      elidedSandboxCount: Ze,
      copy: I,
      riskLine: K,
      hiddenLine: A,
      removedLine: O,
    }),
      (i[14] = I),
      (i[15] = Ue),
      (i[16] = Ze),
      (i[17] = A),
      (i[18] = O),
      (i[19] = K),
      (i[20] = Z),
      (i[21] = U));
  else U = i[21];
  let {
      head: S,
      tail: M,
      elided: fe,
      elidedCommandCount: He,
      elidedSandboxCount: et,
      copy: v,
      riskLine: tt,
      hiddenLine: ge,
      removedLine: pe,
    } = U,
    he;
  if (i[22] !== We || i[23] !== Ye)
    ((he = (kn) => (kn === "confirm" ? We() : Ye())),
      (i[22] = We),
      (i[23] = Ye),
      (i[24] = he));
  else he = i[24];
  let z = Ah(he),
    nt = ui(L),
    { refusedWithin: ot, noteRefused: rt, epoch: Rn } = $o(),
    it = Gm(),
    [Tn, In] = d(0),
    me;
  if (i[25] === p)
    ((me = () => {
      In(Qt);
    }),
      (i[25] = me));
  else me = i[25];
  let _t;
  if (i[26] !== T) ((_t = [T]), (i[26] = T), (i[27] = _t));
  else _t = i[27];
  E(me, _t);
  let Sn = fa(`${Rn}:${Tn}`, L),
    qt;
  if (i[28] !== y || i[29] !== nt || i[30] !== rt || i[31] !== ot)
    ((qt = function R() {
      if (!y) {
        return !1;
      }
      if (nt() || ot(L)) {
        return (rt(), !0);
      }
      return !1;
    }),
      (i[28] = y),
      (i[29] = nt),
      (i[30] = rt),
      (i[31] = ot),
      (i[32] = qt));
  else qt = i[32];
  let R = qt,
    Ft;
  if (i[33] !== R || i[34] !== Xe)
    ((Ft = function H() {
      if (R()) {
        return !0;
      }
      return Xe?.() === !1;
    }),
      (i[33] = R),
      (i[34] = Xe),
      (i[35] = Ft));
  else Ft = i[35];
  let H = Ft,
    Pt;
  if (i[36] !== z || i[37] !== R)
    ((Pt = function C(Mn) {
      if (R()) {
        return;
      }
      z.answer(Mn);
    }),
      (i[36] = z),
      (i[37] = R),
      (i[38] = Pt));
  else Pt = i[38];
  let C = Pt,
    Gt;
  if (i[39] !== C) ((Gt = () => C("cancel")), (i[39] = C), (i[40] = Gt));
  else Gt = i[40];
  let Jt;
  if (i[41] === p) ((Jt = { context: "Confirmation" }), (i[41] = Jt));
  else Jt = i[41];
  Ne("confirm:no", Gt, Jt);
  let ye;
  if (i[42] !== v.intro)
    ((ye = e(t, { children: v.intro })), (i[42] = v.intro), (i[43] = ye));
  else ye = i[43];
  let be;
  if (i[44] !== v.listLabel)
    ((be = e(t, { dimColor: !0, children: v.listLabel })),
      (i[44] = v.listLabel),
      (i[45] = be));
  else be = i[45];
  let we;
  if (i[46] !== S) ((we = S.map(Ut)), (i[46] = S), (i[47] = we));
  else we = i[47];
  let ve;
  if (
    i[48] !== fe ||
    i[49] !== He ||
    i[50] !== et ||
    i[51] !== S.length ||
    i[52] !== M.length
  )
    ((ve =
      fe > 0 &&
      e(o, {
        paddingLeft: 2,
        children: e(t, {
          color: "warning",
          children: te(
            fe,
            S.length + M.length > 0,
            S.length + M.length === N,
            He,
            et,
          ),
        }),
      })),
      (i[48] = fe),
      (i[49] = He),
      (i[50] = et),
      (i[51] = S.length),
      (i[52] = M.length),
      (i[53] = ve));
  else ve = i[53];
  let xe;
  if (i[54] !== M) ((xe = M.map(Zt)), (i[54] = M), (i[55] = xe));
  else xe = i[55];
  let $e;
  if (i[56] !== ge)
    (($e =
      ge &&
      e(o, { paddingLeft: 2, children: e(t, { dimColor: !0, children: ge }) })),
      (i[56] = ge),
      (i[57] = $e));
  else $e = i[57];
  let Ce;
  if (i[58] !== pe)
    ((Ce =
      pe &&
      e(o, { paddingLeft: 2, children: e(t, { dimColor: !0, children: pe }) })),
      (i[58] = pe),
      (i[59] = Ce));
  else Ce = i[59];
  let Le;
  if (
    i[60] !== be ||
    i[61] !== we ||
    i[62] !== ve ||
    i[63] !== xe ||
    i[64] !== $e ||
    i[65] !== Ce
  )
    ((Le = r(o, {
      flexDirection: "column",
      children: [be, we, ve, xe, $e, Ce],
    })),
      (i[60] = be),
      (i[61] = we),
      (i[62] = ve),
      (i[63] = xe),
      (i[64] = $e),
      (i[65] = Ce),
      (i[66] = Le));
  else Le = i[66];
  let ke;
  if (i[67] !== v.advice)
    ((ke = e(t, { children: v.advice })), (i[67] = v.advice), (i[68] = ke));
  else ke = i[68];
  let Re;
  if (i[69] !== tt)
    ((Re = e(t, { color: "warning", children: tt })),
      (i[69] = tt),
      (i[70] = Re));
  else Re = i[70];
  const st = y ? `${z.attempts}:${Sn.remountKey}` : `${z.attempts}`,
    at = y ? L : void 0,
    ct = y ? "cancel" : (z.refused ?? "confirm");
  let Te, Ie;
  if (i[71] !== C)
    ((Te = () => C("confirm")),
      (Ie = () => C("cancel")),
      (i[71] = C),
      (i[72] = Te),
      (i[73] = Ie));
  else ((Te = i[72]), (Ie = i[73]));
  let Ee;
  if (
    i[74] !== y ||
    i[75] !== H ||
    i[76] !== it ||
    i[77] !== st ||
    i[78] !== at ||
    i[79] !== ct ||
    i[80] !== Te ||
    i[81] !== Ie
  )
    ((Ee = e(
      En,
      {
        openedAt: it,
        windowMs: at,
        refuseInput: H,
        confirmLabel: "Yes, I trust these settings",
        cancelLabel: "No, exit Claude Code",
        cancelFirst: y,
        focus: ct,
        hideIndexes: y,
        onConfirm: Te,
        onCancel: Ie,
      },
      st,
    )),
      (i[74] = y),
      (i[75] = H),
      (i[76] = it),
      (i[77] = st),
      (i[78] = at),
      (i[79] = ct),
      (i[80] = Te),
      (i[81] = Ie),
      (i[82] = Ee));
  else Ee = i[82];
  const dt = y ? "select" : "confirm";
  let Me;
  if (i[83] !== dt)
    ((Me = e(D, { chord: "enter", action: dt })), (i[83] = dt), (i[84] = Me));
  else Me = i[84];
  let Wt;
  if (i[85] === p)
    ((Wt = e(D, { chord: "escape", action: "exit" })), (i[85] = Wt));
  else Wt = i[85];
  let Ae;
  if (i[86] !== Me)
    ((Ae = e(ci, { children: r(ue, { children: [Me, Wt] }) })),
      (i[86] = Me),
      (i[87] = Ae));
  else Ae = i[87];
  let Yt;
  if (
    i[88] !== ye ||
    i[89] !== Le ||
    i[90] !== ke ||
    i[91] !== Re ||
    i[92] !== Ee ||
    i[93] !== Ae
  )
    ((Yt = e(gs, {
      color: "warning",
      titleColor: "warning",
      title: "Managed settings require approval",
      children: r(o, {
        flexDirection: "column",
        gap: 1,
        paddingTop: 1,
        children: [ye, Le, ke, Re, Ee, Ae],
      }),
    })),
      (i[88] = ye),
      (i[89] = Le),
      (i[90] = ke),
      (i[91] = Re),
      (i[92] = Ee),
      (i[93] = Ae),
      (i[94] = Yt));
  else Yt = i[94];
  return Yt;
}
export { cWe };
