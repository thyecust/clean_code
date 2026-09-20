// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { BASH_TOOL_NAME, EDIT_TOOL_NAME, READ_TOOL_NAME, WRITE_TOOL_NAME, NOTEBOOK_EDIT_TOOL_NAME, POWERSHELL_TOOL_NAME } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { AGENT_TOOL_NAME } from "../../02-功能模块/工具Task-Agent调度/agent-tool-constants.js";
import * as lazy_核心工具_常量与消息_602x2b1z from "../核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import * as lazy_renderCheckToolUseMessage_zxaexmtx from "../../02-功能模块/制品发布-Artifact/renderCheckToolUseMessage.zxaexmtx.js";
import * as lazy_renderGroupedAgentToolUse_5y53hkmt from "../../02-功能模块/工具Task-Agent调度/renderGroupedAgentToolUse.5y53hkmt.js";
import * as lazy_BackgroundHint_nne14pfp from "../../02-功能模块/工具UI渲染/BackgroundHint.nne14pfp.js";
import * as lazy_renderToolUseErrorMessage_8cb1t7h1 from "../../02-功能模块/工具文件读写编辑/renderToolUseErrorMessage.8cb1t7h1.js";
import * as lazy_isResultTruncated_y9qtnzef from "../../02-功能模块/工具UI渲染/isResultTruncated.y9qtnzef.js";
import * as lazy_renderToolUseTag_1xg51k6k from "../../02-功能模块/工具文件读写编辑/renderToolUseTag.1xg51k6k.js";
import * as lazy_Notebook_ipynb_zmx4vxzb from "../../02-功能模块/Notebook-ipynb/Notebook-ipynb.zmx4vxzb.js";
import * as lazy_renderToolUseErrorMessage_fxtssd7a from "../../02-功能模块/工具Bash-Shell/renderToolUseErrorMessage.fxtssd7a.js";

var r = null,
  s = null,
  n = null,
  e = {
    name: lazy_核心工具_常量与消息_602x2b1z.ARTIFACT_TOOL_NAME,
    names: lazy_核心工具_常量与消息_602x2b1z,
    ui: lazy_renderCheckToolUseMessage_zxaexmtx,
  },
  M = [
    AGENT_TOOL_NAME,
    BASH_TOOL_NAME,
    EDIT_TOOL_NAME,
    WRITE_TOOL_NAME,
    READ_TOOL_NAME,
    NOTEBOOK_EDIT_TOOL_NAME,
    POWERSHELL_TOOL_NAME,
    ...(r ? [r.name] : []),
    ...(s ? [s.name] : []),
    ...(n ? [n.name] : []),
    ...(e
      ? [
          e.name,
          e.names.ARTIFACT_COMMENTS_TOOL_NAME,
          e.names.ARTIFACT_DATA_TOOL_NAME,
          e.names.ARTIFACT_CHECK_TOOL_NAME,
        ]
      : []),
  ],
  T = {
    get [AGENT_TOOL_NAME]() {
      return lazy_renderGroupedAgentToolUse_5y53hkmt.renderToolUseMessage;
    },
    get [BASH_TOOL_NAME]() {
      return lazy_BackgroundHint_nne14pfp.renderToolUseMessage;
    },
    get [EDIT_TOOL_NAME]() {
      return lazy_renderToolUseErrorMessage_8cb1t7h1.renderToolUseMessage;
    },
    get [WRITE_TOOL_NAME]() {
      return lazy_isResultTruncated_y9qtnzef.renderToolUseMessage;
    },
    get [READ_TOOL_NAME]() {
      return lazy_renderToolUseTag_1xg51k6k.renderToolUseMessage;
    },
    get [NOTEBOOK_EDIT_TOOL_NAME]() {
      return lazy_Notebook_ipynb_zmx4vxzb.renderToolUseMessage;
    },
    get [POWERSHELL_TOOL_NAME]() {
      return lazy_renderToolUseErrorMessage_fxtssd7a.renderToolUseMessage;
    },
    ...(r && { [r.name]: r.ui.renderToolUseMessage }),
    ...(s && { [s.name]: s.ui.renderToolUseMessage }),
    ...(n && { [n.name]: n.ui.renderToolUseMessage }),
    ...(e && {
      [e.name]: e.ui.renderToolUseMessage,
      [e.names.ARTIFACT_COMMENTS_TOOL_NAME]: e.ui.renderCommentsToolUseMessage,
      [e.names.ARTIFACT_DATA_TOOL_NAME]: e.ui.renderDataToolUseMessage,
      [e.names.ARTIFACT_CHECK_TOOL_NAME]: e.ui.renderCheckToolUseMessage,
    }),
  };
function renderToolUseMessageForTool(o, t, l) {
  if (o.renderToolUseMessage) return o.renderToolUseMessage(t, l);
  return renderToolUseMessageByToolName(o.name, t, l);
}
function renderToolUseMessageByToolName(o, t, l) {
  if (Object.hasOwn(T, o)) return T[o]?.(t, l);
  return null;
}
export { renderToolUseMessageForTool, renderToolUseMessageByToolName };
