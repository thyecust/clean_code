// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ei } from "../../02-功能模块/Hooks钩子/chunk-9em0d4k5.js";
import { a } from "../设置-配置/chunk-zqr5ctyf.js";
var o = 3,
  _ = "tengu_hazel_trellis";
function ZS() {
  let n = a.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;
  if (n !== void 0) return n;
  let t = Ei();
  if (t.maxSubagentSpawnDepthFromGrowthBook === void 0) {
    let { getFeatureValue_CACHED_MAY_BE_STALE: r } = import.meta.require(
        "./ATIS_REQUEST_HEADER.9bwp2jqb.js",
      ),
      e = r(_, o);
    t.maxSubagentSpawnDepthFromGrowthBook =
      typeof e === "number" && Number.isInteger(e) && e >= 1 ? e : o;
  }
  return t.maxSubagentSpawnDepthFromGrowthBook;
}
export { ZS };
