// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { t, ct } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { getClaimRegistry } from "../../01-核心基础设施/共享小工具-未细化/host-claim-registry.js";
import { uee, Tf } from "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import { useAppStateSelector } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { PM } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
function DiffStatLabel(Te) {
  let j = _(10),
    { added: T, removed: k, bold: S } = Te;
  if (T === 0 && k === 0) {
    return null;
  }
  let H;
  if (j[0] !== T || j[1] !== S)
    ((H =
      T > 0 && r(t, { color: "diffAddedWord", bold: S, children: ["+", T] })),
      (j[0] = T),
      (j[1] = S),
      (j[2] = H));
  else H = j[2];
  const z = T > 0 && k > 0 && " ";
  let Y;
  if (j[3] !== S || j[4] !== k)
    ((Y =
      k > 0 && r(t, { color: "diffRemovedWord", bold: S, children: ["-", k] })),
      (j[3] = S),
      (j[4] = k),
      (j[5] = Y));
  else Y = j[5];
  let le;
  if (j[6] !== H || j[7] !== z || j[8] !== Y)
    ((le = r(t, { children: [H, z, Y] })),
      (j[6] = H),
      (j[7] = z),
      (j[8] = Y),
      (j[9] = le));
  else le = j[9];
  return le;
}
F();
F();
var CURRENT_PR_LINK_KEY = "current-pr";
function buildPullRequestLink(o, i) {
  if (!o || !i) return null;
  let s = o.kind === "cr" && !1,
    p = o.kind === "mr";
  return {
    prefix: p ? "MR" : "PR",
    label: `${p ? "!" : "#"}${o.number}`,
    url: i,
    dedupUrl: o.url,
    color: pe(o.reviewState),
  };
}
function pe(o) {
  switch (o) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return;
  }
}
function M(o, i, s) {
  return;
}
function AZt(o, i, s) {
  E(() => {
    if (i === void 0) return;
    M(o, i, s === "cr" || s === "mr");
  }, [o, i, s]);
}
function _e(Ge) {
  return Ge.settings?.prUrlTemplate;
}
function PullRequestBadge(Ie) {
  let m = _(41),
    {
      number: C,
      url: c,
      reviewState: J,
      bold: l,
      color: Q,
      dimColor: A,
      inverse: d,
      underline: ce,
      hidePrefix: V,
      kind: de,
    } = Ie,
    Be = ce === void 0 ? !0 : ce,
    f = de === "cr" && !1,
    u = de === "mr",
    v = u ? "!" : "#",
    X = useAppStateSelector(_e),
    me;
  if (m[0] !== f || m[1] !== u || m[2] !== X || m[3] !== c)
    ((me = f || u ? c : PM(c, X)),
      (m[0] = f),
      (m[1] = u),
      (m[2] = X),
      (m[3] = c),
      (m[4] = me));
  else me = m[4];
  let R = me,
    ae,
    fe;
  if (m[5] !== f || m[6] !== u || m[7] !== c || m[8] !== R)
    ((ae = () => {
      M(R, c, f || u);
    }),
      (fe = [R, c, f, u]),
      (m[5] = f),
      (m[6] = u),
      (m[7] = c),
      (m[8] = R),
      (m[9] = ae),
      (m[10] = fe));
  else ((ae = m[9]), (fe = m[10]));
  E(ae, fe);
  let ge;
  if (m[11] !== Q || m[12] !== J)
    ((ge = Q ?? re(J)), (m[11] = Q), (m[12] = J), (m[13] = ge));
  else ge = m[13];
  let b = ge,
    h = !d && (A || (!b && !l)),
    Re;
  if (
    m[14] !== l ||
    m[15] !== h ||
    m[16] !== v ||
    m[17] !== d ||
    m[18] !== C ||
    m[19] !== b
  )
    ((Re = r(t, {
      color: b,
      dimColor: h,
      bold: l,
      inverse: d,
      children: [v, C],
    })),
      (m[14] = l),
      (m[15] = h),
      (m[16] = v),
      (m[17] = d),
      (m[18] = C),
      (m[19] = b),
      (m[20] = Re));
  else Re = m[20];
  let Z = Re,
    I;
  if (m[21] !== l || m[22] !== A || m[23] !== V || m[24] !== u)
    ((I =
      !V &&
      r(N, {
        children: [e(t, { dimColor: A || !l, children: u ? "MR" : "PR" }), " "],
      })),
      (m[21] = l),
      (m[22] = A),
      (m[23] = V),
      (m[24] = u),
      (m[25] = I));
  else I = m[25];
  const ee = !d && Be;
  let B;
  if (
    m[26] !== l ||
    m[27] !== h ||
    m[28] !== v ||
    m[29] !== d ||
    m[30] !== C ||
    m[31] !== b ||
    m[32] !== ee
  )
    ((B = r(t, {
      color: b,
      dimColor: h,
      underline: ee,
      bold: l,
      inverse: d,
      children: [v, C],
    })),
      (m[26] = l),
      (m[27] = h),
      (m[28] = v),
      (m[29] = d),
      (m[30] = C),
      (m[31] = b),
      (m[32] = ee),
      (m[33] = B));
  else B = m[33];
  let G;
  if (m[34] !== Z || m[35] !== B || m[36] !== R)
    ((G = e(ct, { url: R, fallback: Z, assumeSupport: !0, children: B })),
      (m[34] = Z),
      (m[35] = B),
      (m[36] = R),
      (m[37] = G));
  else G = m[37];
  let be;
  if (m[38] !== G || m[39] !== I)
    ((be = r(t, { children: [I, G] })), (m[38] = G), (m[39] = I), (m[40] = be));
  else be = m[40];
  return be;
}
function re(o) {
  switch (o) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return;
  }
}
export { DiffStatLabel, CURRENT_PR_LINK_KEY, buildPullRequestLink, AZt, PullRequestBadge };
