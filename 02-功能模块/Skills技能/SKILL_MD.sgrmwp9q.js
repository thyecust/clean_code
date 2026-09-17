// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { readEmbeddedAssetSync } from "../../01-核心基础设施/共享小工具-未细化/embedded-text-asset.js";
import { importMetaRequire } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var e = "./component-schemas-7fabf82f.md.zst";
var t = readEmbeddedAssetSync(e, import.meta.dirname);
var n = importMetaRequire("./example-plugins-9n8v6pe1.md");
var o = importMetaRequire("./mcp-servers-chmkz450.md");
var i = importMetaRequire("./search-strategies-4qam2bp6.md");
var s = "./SKILL-0e9ec89e.md.zst";
var r = readEmbeddedAssetSync(s, import.meta.dirname);
var SKILL_MD = r,
  SKILL_FILES = {
    "references/component-schemas.md": t,
    "references/example-plugins.md": n,
    "references/mcp-servers.md": o,
    "references/search-strategies.md": i,
  };
export { SKILL_FILES, SKILL_MD };
