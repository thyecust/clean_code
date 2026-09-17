// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { qJ } from "../../01-核心基础设施/共享小工具-未细化/chunk-fcskxvsh.js";
var D = "./mermaid.min.js";
var H = `/*! mermaid v11.16.1 | MIT | Copyright (c) 2014 - 2022 Knut Sveidqvist */
`;
async function loadMermaidBundleJs() {
  return H + (await qJ(D, import.meta.dirname));
}
export { loadMermaidBundleJs };
