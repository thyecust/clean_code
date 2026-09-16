// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { te, sB } from "../核心工具-字符串与文本/chunk-01cse5zg.js";
var p = 8;
function Hve(n, r = p) {
  if (!n.includes("\t")) return n;
  let i = sB(),
    c = i.feed(n);
  c.push(...i.flush());
  let e = "",
    s = 0;
  for (let o of c)
    if (o.type === "sequence") e += o.value;
    else {
      let l = o.value.split(/(\t|\n)/);
      for (let t of l)
        if (t === "\t") {
          let f = r - (s % r);
          ((e += " ".repeat(f)), (s += f));
        } else if (
          t ===
          `
`
        )
          ((e += t), (s = 0));
        else ((e += t), (s += te(t)));
    }
  return e;
}
export { Hve };
