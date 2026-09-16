// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { LP } from "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import { Se } from "./chunk-mb654mj6.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { te } from "../核心工具-字符串与文本/chunk-01cse5zg.js";
import { t, jr, n9 } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
function za(I) {
  let a = _(27),
    { width: J, color: o, char: w, padding: N, title: i, titleAlign: j } = I,
    m = w === void 0 ? LP : w,
    K = N === void 0 ? 0 : N,
    L = j === void 0 ? "center" : j,
    { columns: O } = Se(),
    l = Math.max(0, (J ?? O) - K),
    q;
  if (a[0] !== o || a[1] !== i)
    ((q = i
      ? e(t, { color: o, dimColor: !o, children: e(jr, { children: i }) })
      : null),
      (a[0] = o),
      (a[1] = i),
      (a[2] = q));
  else q = a[2];
  let y = q;
  if (i) {
    let Q = te(i) + 2;
    let C = Math.max(0, l - Q);
    let u = L === "start" ? Math.min(4, C) : Math.floor(C / 2);
    let M = C - u;
    const d = !o;
    let n;
    if (a[3] !== m || a[4] !== u)
      ((n = m.repeat(u)), (a[3] = m), (a[4] = u), (a[5] = n));
    else n = a[5];
    let f;
    if (a[6] !== i)
      ((f = e(t, { dimColor: !0, children: e(jr, { children: i }) })),
        (a[6] = i),
        (a[7] = f));
    else f = a[7];
    let W;
    if (a[8] !== m || a[9] !== M)
      ((W = m.repeat(M)), (a[8] = m), (a[9] = M), (a[10] = W));
    else W = a[10];
    let g;
    if (a[11] !== o || a[12] !== d || a[13] !== n || a[14] !== f || a[15] !== W)
      ((g = r(t, { color: o, dimColor: d, children: [n, " ", f, " ", W] })),
        (a[11] = o),
        (a[12] = d),
        (a[13] = n),
        (a[14] = f),
        (a[15] = W),
        (a[16] = g));
    else g = a[16];
    let z;
    if (a[17] !== y || a[18] !== g)
      ((z = e(n9, { fallback: y, children: g })),
        (a[17] = y),
        (a[18] = g),
        (a[19] = z));
    else z = a[19];
    return z;
  }
  const d = !o;
  let n;
  if (a[20] !== m || a[21] !== l)
    ((n = m.repeat(l)), (a[20] = m), (a[21] = l), (a[22] = n));
  else n = a[22];
  let f;
  if (a[23] !== o || a[24] !== d || a[25] !== n)
    ((f = e(n9, { children: e(t, { color: o, dimColor: d, children: n }) })),
      (a[23] = o),
      (a[24] = d),
      (a[25] = n),
      (a[26] = f));
  else f = a[26];
  return f;
}
export { za };
