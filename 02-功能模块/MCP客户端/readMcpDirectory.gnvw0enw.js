// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 76 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ListResourcesResultSchema } from "./mcp-protocol-schemas.js";
import { ErrorCode, ProtocolError } from "./chunk-78r8f7dw.js";
import "../认证-OAuth登录/pkce-challenge.js";
import { logMCPDebug } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { MCP_SKILLS_EXTENSION_ID } from "./mcp-skills-extension.js";
import { asMcpSdkClient } from "../../01-核心基础设施/共享小工具-未细化/mcp-client-type-casts.js";
import { getMcpTimeoutMs } from "../../01-核心基础设施/共享小工具-未细化/mcp-timeouts.js";
var a = 20;
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
  let t = [],
    o,
    s = 0;
  do {
    let i;
    try {
      i = await asMcpSdkClient(r.client).request(
        {
          method: "resources/directory/read",
          params: { uri: e, ...(o && { cursor: o }) },
        },
        ListResourcesResultSchema,
        { timeout: getMcpTimeoutMs() },
      );
    } catch (n) {
      if (s === 0 || !(n instanceof ProtocolError && n.code === ErrorCode.InvalidParams)) throw n;
      return (
        logMCPDebug(
          r.name,
          `resources/directory/read ${e}: page ${s + 1} returned InvalidParams on cursor; returning ${t.length} entries from prior pages`,
        ),
        t
      );
    }
    (t.push(...i.resources), (o = i.nextCursor), s++);
  } while (o && s < a);
  if (o)
    logMCPDebug(
      r.name,
      `resources/directory/read ${e}: stopped at ${a} pages with more pending`,
    );
  return t;
}
export { readMcpDirectory, serverDeclaresDirectoryRead };
