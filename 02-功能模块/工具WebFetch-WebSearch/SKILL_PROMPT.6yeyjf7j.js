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
import * as lazy_claude_tag_dht2qzjm from "../../01-核心基础设施/内嵌资源与模块互操作/claude-tag-dht2qzjm.md";
import * as lazy_live_sources_pvws3ftv from "../../01-核心基础设施/内嵌资源与模块互操作/live-sources-pvws3ftv.md";
import * as lazy_recent_changes_ycb7sy2c from "../../01-核心基础设施/内嵌资源与模块互操作/recent-changes-ycb7sy2c.md";
import * as lazy_SKILL_rsyv1bsc from "../../01-核心基础设施/内嵌资源与模块互操作/SKILL-rsyv1bsc.md";

var e = lazy_claude_tag_dht2qzjm;
var t = lazy_live_sources_pvws3ftv;
var a = "./plugin-eval-b6bc95df.md.zst";
var n = readEmbeddedAssetSync(a, import.meta.dirname);
var o = lazy_recent_changes_ycb7sy2c;
var s = lazy_SKILL_rsyv1bsc;
var SKILL_PROMPT = s,
  SKILL_FILES = {
    "references/claude-tag.md": e,
    "references/live-sources.md": t,
    "references/plugin-eval-quickref.md": PLUGIN_EVAL_QUICKREF_MD,
    "references/plugin-eval.md": n,
    "references/recent-changes.md": o,
  };
export { SKILL_FILES, SKILL_PROMPT };
