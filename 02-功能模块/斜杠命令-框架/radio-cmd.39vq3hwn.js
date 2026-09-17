// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 24 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
async function r() {
  if (await tryOpenUrlInBrowser("https://clau.de/radio"))
    return { type: "text", value: "Opening Claude FM in your browser\u2026" };
  return {
    type: "text",
    value: "Couldn't open the browser. Listen at: https://clau.de/radio",
  };
}
export { r as call };
