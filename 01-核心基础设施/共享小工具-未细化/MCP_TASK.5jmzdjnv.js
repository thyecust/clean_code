// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 25 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { U4 } from "../../02-功能模块/MCP客户端/chunk-xcbagjx9.js";
var m = {
  name: "MCP Task",
  type: "mcp_task",
  async kill(a, i, p, d, r) {
    let e = i.get(a),
      s = e?.type === "mcp_task" ? e.sidecarSessionId : void 0,
      o = e?.type === "mcp_task" ? e.sidecarProjectDir : void 0,
      c = e?.type === "mcp_task" ? e.sidecarWrite : void 0;
    if (e?.type === "mcp_task")
      (e.abortController?.abort(),
        e.driveAbortController?.abort(),
        e.sep2663Cancel?.());
    (i.update(a, (t) => {
      if (t.notified || t.status !== "running") return t;
      return {
        ...t,
        status: "killed",
        endTime: Date.now(),
        parked: void 0,
        notified: !0,
      };
    }),
      (async () => {
        (await c, await U4(a, r, s, o));
      })().catch((t) => n(`McpTask.kill deleteMcpTaskMetadata: ${String(t)}`)));
  },
};
export { m as MCP_TASK };
