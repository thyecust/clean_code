// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { formatDuration as Ot } from "../核心工具-字符串与文本/chunk-01cse5zg.js";
import { vt } from "./chunk-tmxdrqem.js";
import { re, At, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
function HS(c, o, t = 1000, i = 0, m) {
  let e = vt(),
    n = () => Ot(Math.max(0, (m ?? Date.now()) - c - i)),
    a = re(
      (l) => {
        if (!o) return () => {};
        let r,
          u = () => {
            try {
              l();
            } finally {
              r = e.setTimeout(u, t);
            }
          };
        return ((r = e.setTimeout(u, t)), () => r());
      },
      [o, t, e],
    );
  return At(a, n, n);
}
export { HS };
