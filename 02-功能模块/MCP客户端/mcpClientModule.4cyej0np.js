// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 75 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { registerPreFlushTask } from "../../01-核心基础设施/共享小工具-未细化/chunk-p7jm635c.js";
import { qs } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { Ol } from "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import { xT } from "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
function emitTripwireEvent(e, t) {
  if (!Ol().claim("mcp_tree_id_tripwire")) return;
  registerPreFlushTask(
    qs("tengu_mcp_tripwire", {
      expected: fromEnum(e),
      loaded: t === "v1" || t === "v2" ? fromEnum(t) : S("other"),
    }).catch(() => {}),
  );
}
function mcpClientModule() {
  if (xT() === "v2") {
    let i = import.meta.require("./LISTEN_REOPEN_DELAYS_MS.h676bx56.js"),
      o = i.MCP_TREE_ID;
    if (o !== "v2")
      throw (
        emitTripwireEvent("v2", o),
        Error(
          "MCP runtime accessor tripwire: resolved generation is v2 but the loaded client module does not carry MCP_TREE_ID v2",
        )
      );
    return i;
  }
  let e = import.meta.require("./callMCPTool.30v8k2sq.js"),
    t = e.MCP_TREE_ID;
  if (t !== "v1")
    throw (
      emitTripwireEvent("v1", t),
      Error(
        "MCP runtime accessor tripwire: resolved generation is v1 but the loaded client module does not carry MCP_TREE_ID v1",
      )
    );
  return e;
}
function mcpAuthModule() {
  if (xT() === "v2") return import.meta.require("../认证-OAuth登录/ClaudeAuthProvider.rw5extrt.js");
  return import.meta.require("../认证-OAuth登录/ClaudeAuthProvider.163jwjev.js");
}
function mcpElicitationHandlerModule() {
  if (xT() === "v2") return import.meta.require("./registerElicitationHandler.0bnxkzrw.js");
  return import.meta.require("./registerElicitationHandler.n710jq34.js");
}
function mcpTaskWatcherModule() {
  if (xT() === "v2") return import.meta.require("./MAX_POLL_INTERVAL_MS.pjbd6km2.js");
  return import.meta.require("./MAX_POLL_INTERVAL_MS.dm2c0dwm.js");
}
function mcpSdkErrorClassificationModule() {
  if (xT() === "v2") return import.meta.require("../../01-核心基础设施/共享小工具-未细化/getMcpErrorCode.gk1snwqh.js");
  return import.meta.require("../../01-核心基础设施/共享小工具-未细化/getMcpErrorCode.zkm67jdf.js");
}
function mcpDirectoryReadModule() {
  if (xT() === "v2") return import.meta.require("./readMcpDirectory.gnvw0enw.js");
  return import.meta.require("./readMcpDirectory.8gn0ks90.js");
}
function mcpIsListAuthErrorModule() {
  if (xT() === "v2") return import.meta.require("../../01-核心基础设施/共享小工具-未细化/isListAuthError.tm2wnzn7.js");
  return import.meta.require("../../01-核心基础设施/共享小工具-未细化/isListAuthError.8jcv253h.js");
}
function mcpXaaIdpLoginModule() {
  if (xT() === "v2") return import.meta.require("../../01-核心基础设施/共享小工具-未细化/getCachedIdpIdToken.whq65fek.js");
  return import.meta.require("../../01-核心基础设施/共享小工具-未细化/getCachedIdpIdToken.x86eq6fe.js");
}
function mcpSkillsListModule() {
  return import.meta.require("../../01-核心基础设施/共享小工具-未细化/listMcpSkillPage.drxbt26x.js");
}
export {
  emitTripwireEvent,
  mcpAuthModule,
  mcpClientModule,
  mcpDirectoryReadModule,
  mcpElicitationHandlerModule,
  mcpIsListAuthErrorModule,
  mcpSdkErrorClassificationModule,
  mcpSkillsListModule,
  mcpTaskWatcherModule,
  mcpXaaIdpLoginModule,
};
