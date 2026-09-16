// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 113 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Dyn } from "../../01-核心基础设施/共享小工具-未细化/chunk-rrrsz7e6.js";
function s(n) {
  if (!n.ended) return null;
  let l = Dyn();
  return r(o, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: "subtle",
    paddingX: 1,
    marginTop: 1,
    children: [
      e(t, { color: "text", children: n.message }),
      l !== "" && e(t, { color: "subtle", children: l }),
    ],
  });
}
export { s as renderToolResultMessage };
