// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { readEmbeddedAssetSync } from "../../01-核心基础设施/共享小工具-未细化/embedded-text-asset.js";
import { importMetaRequire } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var t = importMetaRequire("./anti-patterns-c1rmzbdk.md");
var a = importMetaRequire("./choosing-a-form-0b6fjqkn.md");
var s = importMetaRequire("./color-formula-dc6qvg1m.md");
var r = importMetaRequire("./components-vtwwx2hf.md");
var o = importMetaRequire("./interaction-d4xwjtb3.md");
var i = importMetaRequire("./marks-and-anatomy-j3qtdh2t.md");
var n = "./palette-90f85f6c.md.zst";
var l = readEmbeddedAssetSync(n, import.meta.dirname);
var h = importMetaRequire("./SKILL-8zd8x5rj.md");
var d = (e) => (typeof e === "string" ? e : e.default),
  v = import.meta.require("../../01-核心基础设施/共享小工具-未细化/default.8z5qg1sz.js"),
  w = import.meta.require("../../01-核心基础设施/共享小工具-未细化/default.8tgnzppc.js"),
  SKILL_MD = h,
  SKILL_FILES = {
    "references/anti-patterns.md": t,
    "references/choosing-a-form.md": a,
    "references/color-formula.md": s,
    "references/components.md": r,
    "references/interaction.md": o,
    "references/marks-and-anatomy.md": i,
    "references/palette.md": l,
    "scripts/validate_palette.js": d(v),
    "scripts/validate_palette.py": d(w),
  };
export { SKILL_FILES, SKILL_MD };
