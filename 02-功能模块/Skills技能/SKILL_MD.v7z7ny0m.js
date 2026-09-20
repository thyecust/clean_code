// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { readEmbeddedAssetSync } from "../../01-核心基础设施/内嵌资源与模块互操作/embedded-text-asset.js";
import { importMetaRequire } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
import * as lazy_SKILL_8cc0kwr3 from "../../01-核心基础设施/内嵌资源与模块互操作/SKILL-8cc0kwr3.md";
import * as lazy_SKILL_5vqnvygj from "../../01-核心基础设施/内嵌资源与模块互操作/SKILL-5vqnvygj.md";
import * as lazy_SKILL_sq87gt02 from "../../01-核心基础设施/内嵌资源与模块互操作/SKILL-sq87gt02.md";
import * as lazy_template_html_j5g90adz from "../../01-核心基础设施/内嵌资源与模块互操作/template.html-j5g90adz.txt";
import * as lazy_SKILL_z3x847gz from "../../01-核心基础设施/内嵌资源与模块互操作/SKILL-z3x847gz.md";

var e = lazy_SKILL_8cc0kwr3;
var t = "./template.html-cfc12d66.txt.zst";
var a = readEmbeddedAssetSync(t, import.meta.dirname);
var r = lazy_SKILL_5vqnvygj;
var o = "./template.html-cad26093.txt.zst";
var s = readEmbeddedAssetSync(o, import.meta.dirname);
var i = lazy_SKILL_sq87gt02;
var n = lazy_template_html_j5g90adz;
var l = lazy_SKILL_z3x847gz;
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
