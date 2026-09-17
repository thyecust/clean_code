// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { SpinnerGlyph } from "../../02-功能模块/状态栏-主题/chunk-jrr487ty.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { MEMO_CACHE_SENTINEL } from "./chunk-2c9tjhwd.js";
function SpinnerMessageLine(S) {
  let a = _(10),
    { message: f, bold: b, dimColor: C, subtitle: i } = S,
    m = b === void 0 ? !1 : b,
    s = C === void 0 ? !1 : C,
    R;
  if (a[0] === MEMO_CACHE_SENTINEL) ((R = e(SpinnerGlyph, {})), (a[0] = R));
  else R = a[0];
  let l;
  if (a[1] !== m || a[2] !== s || a[3] !== f)
    ((l = r(Box, {
      flexDirection: "row",
      children: [R, r(Text, { bold: m, dimColor: s, children: [" ", f] })],
    })),
      (a[1] = m),
      (a[2] = s),
      (a[3] = f),
      (a[4] = l));
  else l = a[4];
  let n;
  if (a[5] !== i)
    ((n = i && e(Text, { dimColor: !0, children: i })), (a[5] = i), (a[6] = n));
  else n = a[6];
  let y;
  if (a[7] !== l || a[8] !== n)
    ((y = r(Box, { flexDirection: "column", children: [l, n] })),
      (a[7] = l),
      (a[8] = n),
      (a[9] = y));
  else y = a[9];
  return y;
}
export { SpinnerMessageLine };
