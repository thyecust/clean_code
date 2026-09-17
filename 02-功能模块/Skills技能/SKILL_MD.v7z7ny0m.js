// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { readEmbeddedAssetSync } from "../../01-核心基础设施/内嵌资源与模块互操作/embedded-text-asset.js";
import { importMetaRequire } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var e = importMetaRequire("./SKILL-8cc0kwr3.md");
var t = "./template.html-cfc12d66.txt.zst";
var a = readEmbeddedAssetSync(t, import.meta.dirname);
var r = importMetaRequire("./SKILL-5vqnvygj.md");
var o = "./template.html-cad26093.txt.zst";
var s = readEmbeddedAssetSync(o, import.meta.dirname);
var i = importMetaRequire("./SKILL-sq87gt02.md");
var n = importMetaRequire("./template.html-j5g90adz.txt");
var l = importMetaRequire("./SKILL-z3x847gz.md");
var h = "./template.html-4414d93a.txt.zst";
var d = readEmbeddedAssetSync(h, import.meta.dirname);
var SKILL_MD = { dashboard: e, report: l, "data-table": r, explainer: i },
  SKILL_FILES = {
    dashboard: { "template.html": a },
    report: { "template.html": d },
    "data-table": { "template.html": s },
    explainer: { "template.html": n },
  };
export { SKILL_FILES, SKILL_MD };
