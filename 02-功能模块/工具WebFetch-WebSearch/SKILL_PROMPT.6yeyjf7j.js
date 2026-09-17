// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { PLUGIN_EVAL_QUICKREF_MD } from "../插件系统/plugin-eval-quickref-asset.js";
import { readEmbeddedAssetSync } from "../../01-核心基础设施/内嵌资源与模块互操作/embedded-text-asset.js";
import { importMetaRequire } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var e = importMetaRequire("./claude-tag-dht2qzjm.md");
var t = importMetaRequire("./live-sources-pvws3ftv.md");
var a = "./plugin-eval-b6bc95df.md.zst";
var n = readEmbeddedAssetSync(a, import.meta.dirname);
var o = importMetaRequire("./recent-changes-ycb7sy2c.md");
var s = importMetaRequire("./SKILL-rsyv1bsc.md");
var SKILL_PROMPT = s,
  SKILL_FILES = {
    "references/claude-tag.md": e,
    "references/live-sources.md": t,
    "references/plugin-eval-quickref.md": PLUGIN_EVAL_QUICKREF_MD,
    "references/plugin-eval.md": n,
    "references/recent-changes.md": o,
  };
export { SKILL_FILES, SKILL_PROMPT };
