// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { URL_PATTERN, stripTrailingPunctuation } from "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
import { Text, Link } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
function LinkifiedText(T) {
  let y = _(9),
    { children: o, color: f, bold: x } = T,
    r;
  if (y[0] !== o) {
    r = [];
    let s = 0;
    for (const a of o.matchAll(URL_PATTERN)) {
      let m = stripTrailingPunctuation(a[0]);
      if (a.index > s) r.push(o.slice(s, a.index));
      (r.push(e(Link, { url: m, children: m }, a.index)),
        (s = a.index + m.length));
    }
    let c;
    if (y[2] !== o || y[3] !== s)
      ((c = o.slice(s)), (y[2] = o), (y[3] = s), (y[4] = c));
    else c = y[4];
    r.push(c);
    ((y[0] = o), (y[1] = r));
  } else r = y[1];
  let c;
  if (y[5] !== x || y[6] !== f || y[7] !== r)
    ((c = e(Text, { color: f, bold: x, children: r })),
      (y[5] = x),
      (y[6] = f),
      (y[7] = r),
      (y[8] = c));
  else c = y[8];
  return c;
}
export { LinkifiedText };
