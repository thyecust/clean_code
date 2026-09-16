// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { o, t, pd } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { QP } from "../../02-功能模块/Diff引擎/chunk-p2gj9dsf.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { b8 } from "./chunk-d16fhdtx.js";
function GZ({
  hunks: i,
  dim: f,
  width: n,
  filePath: m,
  firstLine: c,
  fileContent: p,
}) {
  return b8(
    i.map((r) =>
      e(
        o,
        {
          flexDirection: "column",
          children: e(QP, {
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
        pd,
        { fromLeftEdge: !0, children: e(t, { dimColor: !0, children: "..." }) },
        `ellipsis-${r}`,
      ),
  );
}
export { GZ };
