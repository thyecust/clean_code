// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 240 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { Ze } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import { Pr } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { is } from "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function oe(_e) {
  return (
    h(_e),
    { offer: !1, reason: "probe_failed", failure: "threw", line: null }
  );
}
function ie() {
  return Pr(1);
}
function re() {
  return Pr(1);
}
var q = new Set([
  "too_large",
  "untracked_too_large",
  "repository_too_large",
  "folder_too_many_files",
  "folder_unreadable",
  "folder_is_repository",
]);
function ne(ge) {
  let i = _(22),
    { decide: b, onDecided: A, onDone: B } = ge,
    I;
  if (i[0] === p) ((I = { kind: "deciding" }), (i[0] = I));
  else I = i[0];
  let [G, J] = d(I),
    K = C(!1),
    L;
  if (i[1] !== B)
    ((L = function n(ke) {
      if (K.current) {
        return;
      }
      ((K.current = !0), J({ kind: "done" }), B(ke));
    }),
      (i[1] = B),
      (i[2] = L));
  else L = i[2];
  let n = L,
    M;
  if (i[3] !== b || i[4] !== n || i[5] !== A)
    ((M = () => {
      let Q = !0;
      return (
        b()
          .catch(oe)
          .then((c) => {
            if (!Q) {
              return;
            }
            if ((A(c), !c.offer && c.line !== null && q.has(c.reason)))
              J({ kind: "notice", offer: c, line: c.line });
            else n(c);
          }),
        () => {
          Q = !1;
        }
      );
    }),
      (i[3] = b),
      (i[4] = n),
      (i[5] = A),
      (i[6] = M));
  else M = i[6];
  let U;
  if (i[7] === p) ((U = []), (i[7] = U));
  else U = i[7];
  if ((E(M, U), G.kind === "deciding")) {
    let l;
    if (i[8] === p) ((l = e(O, {})), (i[8] = l));
    else l = i[8];
    return l;
  }
  if (G.kind === "done") {
    return null;
  }
  let { offer: s, line: T } = G,
    l;
  if (i[9] !== n || i[10] !== s)
    ((l = () => n(s)), (i[9] = n), (i[10] = s), (i[11] = l));
  else l = i[11];
  let V;
  if (i[12] === p)
    ((V = e(ue, { children: e(D, { chord: "enter", action: "continue" }) })),
      (i[12] = V));
  else V = i[12];
  let R;
  if (i[13] !== T) ((R = e(t, { children: T })), (i[13] = T), (i[14] = R));
  else R = i[14];
  let S;
  if (i[15] !== n || i[16] !== s)
    ((S = e(P, { onContinue: () => n(s) })),
      (i[15] = n),
      (i[16] = s),
      (i[17] = S));
  else S = i[17];
  let W;
  if (i[18] !== l || i[19] !== R || i[20] !== S)
    ((W = r(de, {
      title: "File sync",
      onCancel: l,
      isCancelActive: !1,
      inputGuide: V,
      children: [R, S],
    })),
      (i[18] = l),
      (i[19] = R),
      (i[20] = S),
      (i[21] = W));
  else W = i[21];
  return W;
}
function O() {
  let Re = _(3),
    a = is(ie),
    X;
  if (Re[0] !== a.keyName || Re[1] !== a.pending)
    ((X = a.pending
      ? r(t, {
          dimColor: !0,
          children: ["Press ", a.keyName, " again to exit"],
        })
      : null),
      (Re[0] = a.keyName),
      (Re[1] = a.pending),
      (Re[2] = X));
  else X = Re[2];
  return X;
}
function P(Se) {
  let j = _(6),
    { onContinue: v } = Se,
    Y;
  if (j[0] !== v)
    ((Y = { "confirm:yes": v, "confirm:no": v }), (j[0] = v), (j[1] = Y));
  else Y = j[1];
  let Z;
  if (j[2] === p) ((Z = { context: "Confirmation" }), (j[2] = Z));
  else Z = j[2];
  Ze(Y, Z);
  let m = is(re),
    ee;
  if (j[3] !== m.keyName || j[4] !== m.pending)
    ((ee = m.pending
      ? r(t, {
          dimColor: !0,
          children: ["Press ", m.keyName, " again to exit"],
        })
      : null),
      (j[3] = m.keyName),
      (j[4] = m.pending),
      (j[5] = ee));
  else ee = j[5];
  return ee;
}
export { ne as SyncOfferCheck };
