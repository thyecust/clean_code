// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 113 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
function renderToolResultMessage(r) {
  return e(ToolResultRow, {
    children: e(t, {
      children: r.opt_in_required
        ? r.message
        : `${r.results.length} ${pluralize(r.results.length, "connector")}`,
    }),
  });
}
export { renderToolResultMessage };
