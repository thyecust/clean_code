// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 16 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { createLazyValue } from "./lazy-value.js";
import { asMcpSdkClient } from "./mcp-client-type-casts.js";
import { getMcpTimeoutMs } from "./mcp-timeouts.js";
import { s, se, v, c, it, fe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var i = createLazyValue(() =>
  c({
    skills: v(
      it({
        frontmatter: fe(s(), se()).nullish(),
        uri: s().nullish(),
        digest: s().nullish(),
      }).catch({}),
    ),
    nextCursor: s().nullish(),
  }),
);
function listMcpSkillPage(e, t) {
  return asMcpSdkClient(e.client).request(
    { method: "skills/list", params: t === void 0 ? {} : { cursor: t } },
    i(),
    { timeout: getMcpTimeoutMs() },
  );
}
export { listMcpSkillPage };
