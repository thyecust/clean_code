// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { readEmbeddedAssetSync } from "../../01-核心基础设施/内嵌资源与模块互操作/embedded-text-asset.js";
import { importMetaRequire } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
import * as lazy_anti_patterns_c1rmzbdk from "../../01-核心基础设施/内嵌资源与模块互操作/anti-patterns-c1rmzbdk.md";
import * as lazy_choosing_a_form_0b6fjqkn from "../../01-核心基础设施/内嵌资源与模块互操作/choosing-a-form-0b6fjqkn.md";
import * as lazy_color_formula_dc6qvg1m from "../../01-核心基础设施/内嵌资源与模块互操作/color-formula-dc6qvg1m.md";
import * as lazy_components_vtwwx2hf from "../../01-核心基础设施/内嵌资源与模块互操作/components-vtwwx2hf.md";
import * as lazy_interaction_d4xwjtb3 from "../../01-核心基础设施/内嵌资源与模块互操作/interaction-d4xwjtb3.md";
import * as lazy_marks_and_anatomy_j3qtdh2t from "../../01-核心基础设施/内嵌资源与模块互操作/marks-and-anatomy-j3qtdh2t.md";
import * as lazy_SKILL_8zd8x5rj from "../../01-核心基础设施/内嵌资源与模块互操作/SKILL-8zd8x5rj.md";
import * as lazy_default_8z5qg1sz from "../../01-核心基础设施/核心工具-未归类/default.8z5qg1sz.js";
import * as lazy_default_8tgnzppc from "../../01-核心基础设施/核心工具-未归类/default.8tgnzppc.js";

var t = lazy_anti_patterns_c1rmzbdk;
var a = lazy_choosing_a_form_0b6fjqkn;
var s = lazy_color_formula_dc6qvg1m;
var r = lazy_components_vtwwx2hf;
var o = lazy_interaction_d4xwjtb3;
var i = lazy_marks_and_anatomy_j3qtdh2t;
var n = "./palette-90f85f6c.md.zst";
var l = readEmbeddedAssetSync(n, import.meta.dirname);
var h = lazy_SKILL_8zd8x5rj;
var d = (e) => (typeof e === "string" ? e : e.default),
  v = lazy_default_8z5qg1sz,
  w = lazy_default_8tgnzppc,
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
