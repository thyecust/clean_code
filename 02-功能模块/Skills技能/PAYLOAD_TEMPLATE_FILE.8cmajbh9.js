// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 10 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { R, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { _4t, qJ, Ke } from "../../01-核心基础设施/共享小工具-未细化/chunk-fcskxvsh.js";
var D = "./SKILL-59d7da6d.md.zst";
var E = Ke(D, import.meta.dirname);
var H = "./payload.template.html.asset";
var t = "./seed-canvas.mjs-a5d6a8af.txt.zst";
var Q = Ke(t, import.meta.dirname);
var SKILL_MD = E,
  PAYLOAD_TEMPLATE_FILE = "payload.template.html",
  SEED_HELPER_FILE = "seed-canvas.mjs";
async function loadSkillFiles() {
  let d;
  try {
    d = await qJ(H, import.meta.dirname);
  } catch (P) {
    throw (
      logError(P),
      logFeatureBad("skill_bundled_extract", "design_canvas_payload_unreadable"),
      new R(
        `design canvas: editor payload unreadable at ${_4t(H, import.meta.dirname)} (${A(P) ?? "unknown"})`,
        "design canvas: editor payload unreadable",
      )
    );
  }
  return { [PAYLOAD_TEMPLATE_FILE]: d, [SEED_HELPER_FILE]: Q };
}
export {
  PAYLOAD_TEMPLATE_FILE,
  SEED_HELPER_FILE,
  SKILL_MD,
  loadSkillFiles,
};
