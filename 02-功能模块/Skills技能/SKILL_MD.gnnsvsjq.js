// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { readEmbeddedAssetSync } from "../../01-核心基础设施/共享小工具-未细化/embedded-text-asset.js";
var E = "./SKILL-2d6a1c2c.md.zst";
var t = readEmbeddedAssetSync(E, import.meta.dirname);
var L = "./template.html-af756034.txt.zst";
var i = readEmbeddedAssetSync(L, import.meta.dirname);
var a = "./board.mjs-0bf8864f.txt.zst";
var e = readEmbeddedAssetSync(a, import.meta.dirname);
var SKILL_MD = t,
  SKILL_FILES = { "template.html": i, "board.mjs": e };
export { SKILL_FILES, SKILL_MD };
