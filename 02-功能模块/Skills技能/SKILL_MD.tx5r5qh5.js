// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { readEmbeddedAssetSync } from "../../01-核心基础设施/共享小工具-未细化/embedded-text-asset.js";
import { importMetaRequire } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var e = importMetaRequire("./cli-f091jpwx.md");
var t = importMetaRequire("./server-6cyhjq09.md");
var s = "./SKILL-cf37e4b8.md.zst";
var i = readEmbeddedAssetSync(s, import.meta.dirname);
var SKILL_MD = i,
  SKILL_FILES = { "examples/cli.md": e, "examples/server.md": t };
export { SKILL_FILES, SKILL_MD };
