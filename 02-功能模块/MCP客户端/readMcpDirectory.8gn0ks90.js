// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 76 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ErrorCode as xo, ListResourcesResultSchema as phe, McpError as _o } from "./chunk-tv3jbp8f.js";
import { logMCPDebug as J } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { t7e } from "./chunk-0mwqsv0r.js";
import { Yo } from "../../01-核心基础设施/共享小工具-未细化/chunk-1ftn6vfs.js";
import { Hl } from "../../01-核心基础设施/共享小工具-未细化/chunk-anxypace.js";
var n = 20;
function c(r) {
  let e = r?.extensions?.[t7e];
  return (
    e != null &&
    typeof e === "object" &&
    "directoryRead" in e &&
    e.directoryRead === !0
  );
}
async function R(r, e) {
  if (!c(r.capabilities))
    throw Error(
      "readMcpDirectory called on a server without directoryRead capability",
    );
  let o = [],
    t,
    s = 0;
  do {
    let i;
    try {
      i = await Yo(r.client).request(
        {
          method: "resources/directory/read",
          params: { uri: e, ...(t && { cursor: t }) },
        },
        phe,
        { timeout: Hl() },
      );
    } catch (a) {
      if (s === 0 || !(a instanceof _o && a.code === xo.InvalidParams)) throw a;
      return (
        J(
          r.name,
          `resources/directory/read ${e}: page ${s + 1} returned InvalidParams on cursor; returning ${o.length} entries from prior pages`,
        ),
        o
      );
    }
    (o.push(...i.resources), (t = i.nextCursor), s++);
  } while (t && s < n);
  if (t)
    J(
      r.name,
      `resources/directory/read ${e}: stopped at ${n} pages with more pending`,
    );
  return o;
}
export { R as readMcpDirectory, c as serverDeclaresDirectoryRead };
