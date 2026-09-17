// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 20 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { registerSuggestRolloutPinReader as _un, isPluginSkillToolEnabled as cue, isPluginSkillToolAdvertised as u_r } from "./plugin-skill-tool-gating.js";
import "../../02-功能模块/云会话-Teleport/first-party-remote-session.js";
export {
  _un as _registerSuggestRolloutPinReader,
  u_r as isPluginSkillToolAdvertised,
  cue as isPluginSkillToolEnabled,
};
