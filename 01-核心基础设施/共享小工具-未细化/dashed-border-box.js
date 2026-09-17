// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, useIsScreenReaderEnabled } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
function DashedBorderBox(R) {
  let u = _(6),
    { children: r, paddingX: b, marginTop: t, marginBottom: d } = R,
    n = b === void 0 ? 1 : b;
  const a = useIsScreenReaderEnabled() ? void 0 : "dashed";
  let l;
  if (u[0] !== r || u[1] !== d || u[2] !== t || u[3] !== n || u[4] !== a)
    ((l = e(Box, {
      borderStyle: a,
      borderColor: "subtle",
      borderLeft: !1,
      borderRight: !1,
      flexDirection: "column",
      overflow: "hidden",
      paddingX: n,
      marginTop: t,
      marginBottom: d,
      children: r,
    })),
      (u[0] = r),
      (u[1] = d),
      (u[2] = t),
      (u[3] = n),
      (u[4] = a),
      (u[5] = l));
  else l = u[5];
  return l;
}
export { DashedBorderBox };
