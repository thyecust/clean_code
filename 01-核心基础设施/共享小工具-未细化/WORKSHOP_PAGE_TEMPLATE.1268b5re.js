// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { readEmbeddedAssetSync } from "./embedded-text-asset.js";
var L = "./SKILL-e92179a2.md.zst";
var e = readEmbeddedAssetSync(L, import.meta.dirname);
var p = "./artifact-workshop.html-c3fd3f6a.txt.zst";
var t = readEmbeddedAssetSync(p, import.meta.dirname);
var T = "./workshop-page.html-919ee91c.txt.zst";
var I = readEmbeddedAssetSync(T, import.meta.dirname);
var SKILL_MD = e,
  WORKSHOP_TEMPLATE = t,
  WORKSHOP_PAGE_TEMPLATE = I,
  SKILL_FILES = {
    "templates/artifact-workshop.html": t,
    "templates/workshop-page.html": I,
  };
export {
  SKILL_FILES,
  SKILL_MD,
  WORKSHOP_PAGE_TEMPLATE,
  WORKSHOP_TEMPLATE,
};
