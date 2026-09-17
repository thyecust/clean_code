// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { qe, Bt, tt, Mn, Wl, Ut } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { AGENT_TOOL_NAME } from "../../02-功能模块/工具Task-Agent调度/agent-tool-constants.js";
var r = null,
  s = null,
  n = null,
  e = {
    name: import.meta.require("../核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js").ARTIFACT_TOOL_NAME,
    names: import.meta.require("../核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js"),
    ui: import.meta.require("../../02-功能模块/Artifact发布-渲染/renderCheckToolUseMessage.zxaexmtx.js"),
  },
  M = [
    AGENT_TOOL_NAME,
    qe,
    Bt,
    Mn,
    tt,
    Wl,
    Ut,
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
      return import.meta.require("../../02-功能模块/工具Task-Agent调度/renderGroupedAgentToolUse.5y53hkmt.js").renderToolUseMessage;
    },
    get [qe]() {
      return import.meta.require("../../02-功能模块/工具UI渲染/BackgroundHint.nne14pfp.js").renderToolUseMessage;
    },
    get [Bt]() {
      return import.meta.require("../../02-功能模块/工具文件读写编辑/renderToolUseErrorMessage.8cb1t7h1.js").renderToolUseMessage;
    },
    get [Mn]() {
      return import.meta.require("../../02-功能模块/工具UI渲染/isResultTruncated.y9qtnzef.js").renderToolUseMessage;
    },
    get [tt]() {
      return import.meta.require("../../02-功能模块/工具文件读写编辑/renderToolUseTag.1xg51k6k.js").renderToolUseMessage;
    },
    get [Wl]() {
      return import.meta.require("../../02-功能模块/Notebook(.ipynb)/Notebook(.ipynb).zmx4vxzb.js").renderToolUseMessage;
    },
    get [Ut]() {
      return import.meta.require("../../02-功能模块/工具Bash-Shell/renderToolUseErrorMessage.fxtssd7a.js").renderToolUseMessage;
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
