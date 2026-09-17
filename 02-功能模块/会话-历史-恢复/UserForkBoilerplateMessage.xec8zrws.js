// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 110 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { nZ, cxe } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { mS } from "../权限系统/chunk-e4pfvp7x.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var g = new RegExp(`<${nZ}>[\\s\\S]*?</${nZ}>\\n*`);
function UserForkBoilerplateMessage(L) {
  let i = _(8),
    { addMargin: b, param: A } = L,
    { text: n } = A,
    x;
  if (i[0] !== n) {
    let c = n.replace(g, "");
    x = c.startsWith(cxe) ? c.slice(cxe.length) : c;
    ((i[0] = n), (i[1] = x));
  } else x = i[1];
  let m = x;
  const d = b ? 1 : 0;
  let T;
  if (i[2] === MEMO_CACHE_SENTINEL)
    ((T = e(t, { "aria-label": "fork:", dimColor: !0, children: mS })),
      (i[2] = T));
  else T = i[2];
  let s;
  if (i[3] !== m)
    ((s = e(o, { paddingLeft: 1, children: e(t, { children: m }) })),
      (i[3] = m),
      (i[4] = s));
  else s = i[4];
  let B;
  if (i[5] !== d || i[6] !== s)
    ((B = r(o, {
      marginTop: d,
      backgroundColor: "userMessageBackground",
      paddingRight: 1,
      children: [T, s],
    })),
      (i[5] = d),
      (i[6] = s),
      (i[7] = B));
  else B = i[7];
  return B;
}
export { UserForkBoilerplateMessage };
