// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 212 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { z9e } from "../用量额度-限额/chunk-n4zff40p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hyrh6kmc.js";
async function a(e, t) {
  return { type: "text", value: (await z9e("command", t.credentials)).text };
}
export { a as call };
