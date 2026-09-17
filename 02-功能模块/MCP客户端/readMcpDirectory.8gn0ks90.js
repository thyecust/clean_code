// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 76 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ErrorCode, ListResourcesResultSchema, McpError } from "./chunk-tv3jbp8f.js";
import { logMCPDebug } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { MCP_SKILLS_EXTENSION_ID } from "./mcp-skills-extension.js";
import { asMcpSdkClient } from "../../01-核心基础设施/共享小工具-未细化/mcp-client-type-casts.js";
import { getMcpTimeoutMs } from "../../01-核心基础设施/共享小工具-未细化/mcp-timeouts.js";
var n = 20;
function serverDeclaresDirectoryRead(r) {
  let e = r?.extensions?.[MCP_SKILLS_EXTENSION_ID];
  return (
    e != null &&
    typeof e === "object" &&
    "directoryRead" in e &&
    e.directoryRead === !0
  );
}
async function readMcpDirectory(r, e) {
  if (!serverDeclaresDirectoryRead(r.capabilities))
    throw Error(
      "readMcpDirectory called on a server without directoryRead capability",
    );
  let o = [],
    t,
    s = 0;
  do {
    let i;
    try {
      i = await asMcpSdkClient(r.client).request(
        {
          method: "resources/directory/read",
          params: { uri: e, ...(t && { cursor: t }) },
        },
        ListResourcesResultSchema,
        { timeout: getMcpTimeoutMs() },
      );
    } catch (a) {
      if (s === 0 || !(a instanceof McpError && a.code === ErrorCode.InvalidParams)) throw a;
      return (
        logMCPDebug(
          r.name,
          `resources/directory/read ${e}: page ${s + 1} returned InvalidParams on cursor; returning ${o.length} entries from prior pages`,
        ),
        o
      );
    }
    (o.push(...i.resources), (t = i.nextCursor), s++);
  } while (t && s < n);
  if (t)
    logMCPDebug(
      r.name,
      `resources/directory/read ${e}: stopped at ${n} pages with more pending`,
    );
  return o;
}
export { readMcpDirectory, serverDeclaresDirectoryRead };
