// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ToolResultRow } from "./tool-result-row.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { formatFileSize } from "./chunk-7axvc6rn.js";
function renderWebFetchProgressMessage() {
  return e(ToolResultRow, {
    height: 1,
    children: e(Text, { dimColor: !0, children: "Fetching\u2026" }),
  });
}
function ReceivedBytesStatus(P) {
  let g = _(7),
    { bytes: u, status: R } = P,
    n;
  if (g[0] !== u) ((n = formatFileSize(u)), (g[0] = u), (g[1] = n));
  else n = g[1];
  let m;
  if (g[2] !== n)
    ((m = e(Text, { bold: !0, children: n })), (g[2] = n), (g[3] = m));
  else m = g[3];
  const i = R !== void 0 && ` (${R})`;
  let y;
  if (g[4] !== m || g[5] !== i)
    ((y = e(ToolResultRow, {
      height: 1,
      children: r(Text, { children: ["Received ", m, i] }),
    })),
      (g[4] = m),
      (g[5] = i),
      (g[6] = y));
  else y = g[6];
  return y;
}
function renderWebFetchResultMessage({ bytes: a, code: s, codeText: c, result: l }, d, { verbose: f }) {
  let p = e(ReceivedBytesStatus, { bytes: a, status: `${s} ${c}` });
  if (f)
    return r(Box, {
      flexDirection: "column",
      children: [
        p,
        e(Box, { flexDirection: "column", children: e(Text, { children: l }) }),
      ],
    });
  return p;
}
export { renderWebFetchProgressMessage, ReceivedBytesStatus, renderWebFetchResultMessage };
