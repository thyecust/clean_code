// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { isTainted } from "./compliance-taints-store.js";
import { isDesktopHostSession } from "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import { isFirstPartyProvider } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { isFirstPartyRemoteSession } from "./first-party-remote-session.js";
import { PLUGIN_SKILL_DISCOVERY_TOOL_NAMES } from "./plugin-skill-tool-names.js";
class r {
  reader = void 0;
  register(e) {
    this.reader = e;
  }
  read() {
    return this.reader?.() ?? !1;
  }
}
var o = new r();
function registerSuggestRolloutPinReader(e) {
  o.register(e);
}
function isPluginSkillToolEnabled() {
  if (isTainted("hipaa")) return !1;
  if (isFirstPartyRemoteSession()) return !0;
  return isDesktopHostSession() && isFirstPartyProvider() && o.read();
}
function isPluginSkillToolAdvertised(e) {
  if (!PLUGIN_SKILL_DISCOVERY_TOOL_NAMES.includes(e)) return !0;
  return isPluginSkillToolEnabled();
}
export { registerSuggestRolloutPinReader, isPluginSkillToolEnabled, isPluginSkillToolAdvertised };
