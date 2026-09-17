// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { readEmbeddedAssetSync } from "../../01-核心基础设施/共享小工具-未细化/embedded-text-asset.js";
import { importMetaRequire } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var s = importMetaRequire("./SKILL-0289634t.md");
var i = "./decisions-script.html-d0ab282f.txt.zst";
var e = readEmbeddedAssetSync(i, import.meta.dirname);
var a = "./component.css-02637b0d.txt.zst";
var n = readEmbeddedAssetSync(a, import.meta.dirname);
var o = "./tokens.css-6f9090cf.txt.zst";
var r = readEmbeddedAssetSync(o, import.meta.dirname);
var c = importMetaRequire("./skeleton.html-893t268n.txt");
var t = importMetaRequire("./theme-script.html-zm5eq8m1.txt");
var SKILL_MD = s,
  DECISION_THEME_SCRIPT = t,
  DECISION_DECISIONS_SCRIPT = e,
  SKILL_FILES = {
    "decision/skeleton.html": c,
    "decision/theme-script.html": t,
    "decision/decisions-script.html": e,
    "decision/component.css": n,
    "decision/tokens.css": r,
  };
export {
  DECISION_DECISIONS_SCRIPT,
  DECISION_THEME_SCRIPT,
  SKILL_FILES,
  SKILL_MD,
};
