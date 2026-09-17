// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
function TitleWithSubtitle(x) {
  let f = _(7),
    { children: p, subtitle: c } = x,
    a;
  if (f[0] !== p)
    ((a = e(Text, { bold: !0, children: p })), (f[0] = p), (f[1] = a));
  else a = f[1];
  let R;
  if (f[2] !== c)
    ((R = c && e(Text, { dimColor: !0, children: c })), (f[2] = c), (f[3] = R));
  else R = f[3];
  let l;
  if (f[4] !== a || f[5] !== R)
    ((l = r(Box, { flexDirection: "column", children: [a, R] })),
      (f[4] = a),
      (f[5] = R),
      (f[6] = l));
  else l = f[6];
  return l;
}
export { TitleWithSubtitle };
