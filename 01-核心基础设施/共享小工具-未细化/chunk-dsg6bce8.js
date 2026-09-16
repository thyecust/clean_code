// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Zd } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { H } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { L } from "../../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
var dat = {
  success: { icon: L.tick, color: "success", ariaLabel: "done:" },
  error: { icon: L.cross, color: "error", ariaLabel: "failed:" },
  warning: { icon: L.warning, color: "warning", ariaLabel: "warning:" },
  info: { icon: L.info, color: "suggestion", ariaLabel: "note:" },
  pending: { icon: L.circle, color: void 0, ariaLabel: "pending:" },
  loading: { icon: "\u2026", color: void 0, ariaLabel: "loading:" },
};
function et(m) {
  let d = _(8),
    { status: S, withSpace: u } = m,
    w = u === void 0 ? !1 : u,
    o = dat[S];
  const c = !o.color;
  let i;
  if (d[0] !== o.ariaLabel || d[1] !== o.icon)
    ((i = e(t, { "aria-label": o.ariaLabel, children: o.icon })),
      (d[0] = o.ariaLabel),
      (d[1] = o.icon),
      (d[2] = i));
  else i = d[2];
  const s = w && " ";
  let f;
  if (d[3] !== o.color || d[4] !== c || d[5] !== i || d[6] !== s)
    ((f = r(t, { color: o.color, dimColor: c, children: [i, s] })),
      (d[3] = o.color),
      (d[4] = c),
      (d[5] = i),
      (d[6] = s),
      (d[7] = f));
  else f = d[7];
  return f;
}
function cu(a) {
  if (a) return !0;
  return Zd() && H("tengu_cedar_marsh", !1);
}
export { dat, et, cu };
