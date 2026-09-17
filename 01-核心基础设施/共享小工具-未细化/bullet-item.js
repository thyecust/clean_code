// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { figures } from "../../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "./chunk-2c9tjhwd.js";
function BulletItem(R) {
  let h = _(4),
    { children: i, color: f } = R,
    m;
  if (h[0] === MEMO_CACHE_SENTINEL)
    ((m = e(o, {
      "aria-hidden": !0,
      width: 2,
      flexShrink: 0,
      children: e(t, { children: figures.bullet }),
    })),
      (h[0] = m));
  else m = h[0];
  let a;
  if (h[1] !== i || h[2] !== f)
    ((a = r(o, {
      flexDirection: "row",
      children: [
        m,
        e(o, {
          flexGrow: 1,
          flexShrink: 1,
          children: e(t, { color: f, children: i }),
        }),
      ],
    })),
      (h[1] = i),
      (h[2] = f),
      (h[3] = a));
  else a = h[3];
  return a;
}
export { BulletItem };
