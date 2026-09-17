// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Box, Text, NoSelect } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { StructuredDiff } from "../../02-功能模块/差异引擎-Diff/structured-diff.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { intersperse } from "./chunk-d16fhdtx.js";
function DiffHunks({
  hunks: i,
  dim: f,
  width: n,
  filePath: m,
  firstLine: c,
  fileContent: p,
}) {
  return intersperse(
    i.map((r) =>
      e(
        Box,
        {
          flexDirection: "column",
          children: e(StructuredDiff, {
            patch: r,
            dim: f,
            width: n,
            filePath: m,
            firstLine: c,
            fileContent: p,
          }),
        },
        r.newStart,
      ),
    ),
    (r) =>
      e(
        NoSelect,
        { fromLeftEdge: !0, children: e(Text, { dimColor: !0, children: "..." }) },
        `ellipsis-${r}`,
      ),
  );
}
export { DiffHunks };
