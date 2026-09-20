// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 75 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { registerPreFlushTask } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-p7jm635c.js";
import { logEventAsync } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { getClaimRegistry } from "../../01-核心基础设施/核心工具-未归类/host-claim-registry.js";
import { getMcpSdkGeneration } from "./mcp-sdk-generation.js";
import * as lazy_LISTEN_REOPEN_DELAYS_MS_h676bx56 from "./LISTEN_REOPEN_DELAYS_MS.h676bx56.js";
import * as lazy_callMCPTool_30v8k2sq from "./callMCPTool.30v8k2sq.js";
import * as lazy_ClaudeAuthProvider_rw5extrt from "../认证-OAuth登录/ClaudeAuthProvider.rw5extrt.js";
import * as lazy_ClaudeAuthProvider_163jwjev from "../认证-OAuth登录/ClaudeAuthProvider.163jwjev.js";
import * as lazy_registerElicitationHandler_0bnxkzrw from "./registerElicitationHandler.0bnxkzrw.js";
import * as lazy_registerElicitationHandler_n710jq34 from "./registerElicitationHandler.n710jq34.js";
import * as lazy_MAX_POLL_INTERVAL_MS_pjbd6km2 from "./MAX_POLL_INTERVAL_MS.pjbd6km2.js";
import * as lazy_MAX_POLL_INTERVAL_MS_dm2c0dwm from "./MAX_POLL_INTERVAL_MS.dm2c0dwm.js";
import * as lazy_getMcpErrorCode_gk1snwqh from "./getMcpErrorCode.gk1snwqh.js";
import * as lazy_getMcpErrorCode_zkm67jdf from "./getMcpErrorCode.zkm67jdf.js";
import * as lazy_readMcpDirectory_gnvw0enw from "./readMcpDirectory.gnvw0enw.js";
import * as lazy_readMcpDirectory_8gn0ks90 from "./readMcpDirectory.8gn0ks90.js";
import * as lazy_isListAuthError_tm2wnzn7 from "../认证-OAuth登录/isListAuthError.tm2wnzn7.js";
import * as lazy_isListAuthError_8jcv253h from "../认证-OAuth登录/isListAuthError.8jcv253h.js";
import * as lazy_getCachedIdpIdToken_whq65fek from "../认证-OAuth登录/getCachedIdpIdToken.whq65fek.js";
import * as lazy_getCachedIdpIdToken_x86eq6fe from "../认证-OAuth登录/getCachedIdpIdToken.x86eq6fe.js";
import * as lazy_listMcpSkillPage_drxbt26x from "./listMcpSkillPage.drxbt26x.js";

function emitTripwireEvent(e, t) {
  if (!getClaimRegistry().claim("mcp_tree_id_tripwire")) return;
  registerPreFlushTask(
    logEventAsync("tengu_mcp_tripwire", {
      expected: fromEnum(e),
      loaded: t === "v1" || t === "v2" ? fromEnum(t) : S("other"),
    }).catch(() => {}),
  );
}
function mcpClientModule() {
  if (getMcpSdkGeneration() === "v2") {
    let i = lazy_LISTEN_REOPEN_DELAYS_MS_h676bx56,
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
  let e = lazy_callMCPTool_30v8k2sq,
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
  if (getMcpSdkGeneration() === "v2") return lazy_ClaudeAuthProvider_rw5extrt;
  return lazy_ClaudeAuthProvider_163jwjev;
}
function mcpElicitationHandlerModule() {
  if (getMcpSdkGeneration() === "v2") return lazy_registerElicitationHandler_0bnxkzrw;
  return lazy_registerElicitationHandler_n710jq34;
}
function mcpTaskWatcherModule() {
  if (getMcpSdkGeneration() === "v2") return lazy_MAX_POLL_INTERVAL_MS_pjbd6km2;
  return lazy_MAX_POLL_INTERVAL_MS_dm2c0dwm;
}
function mcpSdkErrorClassificationModule() {
  if (getMcpSdkGeneration() === "v2") return lazy_getMcpErrorCode_gk1snwqh;
  return lazy_getMcpErrorCode_zkm67jdf;
}
function mcpDirectoryReadModule() {
  if (getMcpSdkGeneration() === "v2") return lazy_readMcpDirectory_gnvw0enw;
  return lazy_readMcpDirectory_8gn0ks90;
}
function mcpIsListAuthErrorModule() {
  if (getMcpSdkGeneration() === "v2") return lazy_isListAuthError_tm2wnzn7;
  return lazy_isListAuthError_8jcv253h;
}
function mcpXaaIdpLoginModule() {
  if (getMcpSdkGeneration() === "v2") return lazy_getCachedIdpIdToken_whq65fek;
  return lazy_getCachedIdpIdToken_x86eq6fe;
}
function mcpSkillsListModule() {
  return lazy_listMcpSkillPage_drxbt26x;
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
