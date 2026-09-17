// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 256 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t, bs } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { processMessagesForTeleportResume as $Ke, checkOutTeleportedSessionBranch as UKe, teleportResumeCodeSession as Wne } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { AppRoot as zm } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import { showScreen as Gx } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-cq8x5zt4.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { L } from "../Teammates团队/chunk-mrfx53ye.js";
F();
var i = ["\u25D0", "\u25D3", "\u25D1", "\u25D2"],
  b = [
    { key: "validating", label: "Validating session" },
    { key: "fetching_logs", label: "Fetching session logs" },
    { key: "fetching_branch", label: "Getting branch info" },
    { key: "checking_out", label: "Checking out branch" },
  ];
function O(N) {
  let p = _(16),
    { currentStep: W, sessionId: T } = N,
    [j, E] = bs(100),
    R = Math.floor(E / 100) % i.length,
    V;
  if (p[0] !== W) ((V = (ee) => ee.key === W), (p[0] = W), (p[1] = V));
  else V = p[1];
  let y = b.findIndex(V);
  const G = i[R];
  let P;
  if (p[2] !== G)
    ((P = e(o, {
      marginBottom: 1,
      children: r(t, {
        bold: !0,
        color: "claude",
        children: [G, " Teleporting session\u2026"],
      }),
    })),
      (p[2] = G),
      (p[3] = P));
  else P = p[3];
  let C;
  if (p[4] !== T)
    ((C =
      T &&
      e(o, { marginBottom: 1, children: e(t, { dimColor: !0, children: T }) })),
      (p[4] = T),
      (p[5] = C));
  else C = p[5];
  let x;
  if (p[6] !== y || p[7] !== R)
    ((x = b.map((X, K) => {
      let oe = K < y;
      let Y = K === y;
      let q = K > y;
      let v;
      let w;
      if (oe) ((v = L.tick), (w = "green"));
      else if (Y) ((v = i[R]), (w = "claude"));
      else ((v = L.circle), (w = void 0));
      return r(
        o,
        {
          flexDirection: "row",
          children: [
            e(o, {
              width: 2,
              children: e(t, { color: w, dimColor: q, children: v }),
            }),
            e(t, { dimColor: q, bold: Y, children: X.label }),
          ],
        },
        X.key,
      );
    })),
      (p[6] = y),
      (p[7] = R),
      (p[8] = x));
  else x = p[8];
  let B;
  if (p[9] !== x)
    ((B = e(o, { flexDirection: "column", marginLeft: 2, children: x })),
      (p[9] = x),
      (p[10] = B));
  else B = p[10];
  let z;
  if (p[11] !== j || p[12] !== P || p[13] !== C || p[14] !== B)
    ((z = r(o, {
      ref: j,
      flexDirection: "column",
      paddingX: 1,
      paddingY: 1,
      children: [P, C, B],
    })),
      (p[11] = j),
      (p[12] = P),
      (p[13] = C),
      (p[14] = B),
      (p[15] = z));
  else z = p[15];
  return z;
}
async function U(k, a, g) {
  let l = () => {};
  function m() {
    let [S, f] = d("validating");
    return ((l = f), e(O, { currentStep: S, sessionId: g }));
  }
  Gx(k, e(zm, { session: a, keybindings: !1, children: e(m, {}) }));
  let s = await Wne(g, l);
  l("checking_out");
  let { branchName: n, branchError: c } = await UKe(s.branch);
  return { messages: $Ke(s.log, c, s.environmentKind), branchName: n };
}
export { U as teleportWithProgress };
