// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 76 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Hee } from "./chunk-5wa92x7d.js";
import { Go, Ki } from "./chunk-78r8f7dw.js";
import "../认证-OAuth登录/chunk-3wfaaze4.js";
import { logMCPDebug as J } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { t7e } from "./chunk-0mwqsv0r.js";
import { Yo } from "../../01-核心基础设施/共享小工具-未细化/chunk-1ftn6vfs.js";
import { Hl } from "../../01-核心基础设施/共享小工具-未细化/chunk-anxypace.js";
var a = 20;
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
  let t = [],
    o,
    s = 0;
  do {
    let i;
    try {
      i = await Yo(r.client).request(
        {
          method: "resources/directory/read",
          params: { uri: e, ...(o && { cursor: o }) },
        },
        Hee,
        { timeout: Hl() },
      );
    } catch (n) {
      if (s === 0 || !(n instanceof Ki && n.code === Go.InvalidParams)) throw n;
      return (
        J(
          r.name,
          `resources/directory/read ${e}: page ${s + 1} returned InvalidParams on cursor; returning ${t.length} entries from prior pages`,
        ),
        t
      );
    }
    (t.push(...i.resources), (o = i.nextCursor), s++);
  } while (o && s < a);
  if (o)
    J(
      r.name,
      `resources/directory/read ${e}: stopped at ${a} pages with more pending`,
    );
  return t;
}
export { R as readMcpDirectory, c as serverDeclaresDirectoryRead };
