// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 143 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { En } from "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function ThirdPartyModelUpgradeDialog(k) {
  let l = _(27),
    { tierLabel: q, fromName: x, toName: a, toProviderId: y, onDone: i } = k;
  const N = `Newer ${q} model available`;
  let s;
  if (l[0] !== i) ((s = () => i(!1)), (l[0] = i), (l[1] = s));
  else s = l[1];
  let d;
  if (l[2] !== x)
    ((d = r(t, {
      children: ["Currently pinned: ", e(t, { bold: !0, children: x })],
    })),
      (l[2] = x),
      (l[3] = d));
  else d = l[3];
  let m;
  if (l[4] !== a)
    ((m = e(t, { bold: !0, children: a })), (l[4] = a), (l[5] = m));
  else m = l[5];
  let f;
  if (l[6] !== y)
    ((f = r(t, { dimColor: !0, children: ["(", y, ")"] })),
      (l[6] = y),
      (l[7] = f));
  else f = l[7];
  let c;
  if (l[8] !== m || l[9] !== f)
    ((c = r(t, { children: ["Latest available: ", m, " ", f] })),
      (l[8] = m),
      (l[9] = f),
      (l[10] = c));
  else c = l[10];
  let C;
  if (l[11] !== d || l[12] !== c)
    ((C = r(o, { flexDirection: "column", children: [d, c] })),
      (l[11] = d),
      (l[12] = c),
      (l[13] = C));
  else C = l[13];
  let L;
  if (l[14] === p)
    ((L = e(t, {
      dimColor: !0,
      children: "Claude Code will restart to apply.",
    })),
      (l[14] = L));
  else L = l[14];
  let g;
  if (l[15] !== a)
    ((g = r(t, { children: ["Update settings to use ", a, "?", " ", L] })),
      (l[15] = a),
      (l[16] = g));
  else g = l[16];
  let b;
  if (l[17] !== i)
    ((b = e(En, { onConfirm: () => i(!0), onCancel: () => i(!1) })),
      (l[17] = i),
      (l[18] = b));
  else b = l[18];
  let u;
  if (l[19] !== b || l[20] !== C || l[21] !== g)
    ((u = r(o, { flexDirection: "column", gap: 1, children: [C, g, b] })),
      (l[19] = b),
      (l[20] = C),
      (l[21] = g),
      (l[22] = u));
  else u = l[22];
  let w;
  if (l[23] !== N || l[24] !== u || l[25] !== s)
    ((w = e(de, { title: N, color: "permission", onCancel: s, children: u })),
      (l[23] = N),
      (l[24] = u),
      (l[25] = s),
      (l[26] = w));
  else w = l[26];
  return w;
}
export { ThirdPartyModelUpgradeDialog };
