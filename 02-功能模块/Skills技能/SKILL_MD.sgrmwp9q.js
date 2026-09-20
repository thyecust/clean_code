// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { readEmbeddedAssetSync } from "../../01-核心基础设施/内嵌资源与模块互操作/embedded-text-asset.js";
import { importMetaRequire } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
import * as lazy_example_plugins_9n8v6pe1 from "../../01-核心基础设施/内嵌资源与模块互操作/example-plugins-9n8v6pe1.md";
import * as lazy_mcp_servers_chmkz450 from "../../01-核心基础设施/内嵌资源与模块互操作/mcp-servers-chmkz450.md";
import * as lazy_search_strategies_4qam2bp6 from "../../01-核心基础设施/内嵌资源与模块互操作/search-strategies-4qam2bp6.md";

var e = "./component-schemas-7fabf82f.md.zst";
var t = readEmbeddedAssetSync(e, import.meta.dirname);
var n = lazy_example_plugins_9n8v6pe1;
var o = lazy_mcp_servers_chmkz450;
var i = lazy_search_strategies_4qam2bp6;
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
