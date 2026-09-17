// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { DEFAULT_GLOBAL_CONFIG, getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getEnabledSettingsSources } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { projectSettingsAliasesUserSettings, getSettingsForSource, updateSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
var USER_INTENT_SETTING_KEYS = [
  "theme",
  "editorMode",
  "verbose",
  "preferredNotifChannel",
  "autoCompactEnabled",
  "autoScrollEnabled",
  "fileCheckpointingEnabled",
  "showTurnDuration",
  "showMessageTimestamps",
  "terminalProgressBarEnabled",
  "todoFeatureEnabled",
  "teammateMode",
  "remoteControlAtStartup",
  "autoUploadSessions",
  "inputNeededNotifEnabled",
  "agentPushNotifEnabled",
];
function resolveSetting(n, s) {
  let o = getEnabledSettingsSources(),
    r = o.includes("userSettings") && projectSettingsAliasesUserSettings();
  for (let t = o.length - 1; t >= 0; t--) {
    let e = o[t];
    if (e === "projectSettings" && r) continue;
    let i = getSettingsForSource(e)?.[n];
    if (i !== void 0) return { value: i, source: e };
  }
  if (USER_INTENT_SETTING_KEYS.includes(n)) {
    let t = n,
      e = getGlobalConfig()[t];
    if (e !== void 0 && e !== DEFAULT_GLOBAL_CONFIG[t])
      return { value: e, source: "legacyGlobalConfig" };
  }
  return { value: s, source: "default" };
}
function saveUserIntentSetting(n, s, o) {
  updateSettingsForSource("userSettings", { [n]: s }, void 0, o);
}
export { USER_INTENT_SETTING_KEYS, resolveSetting, saveUserIntentSetting };
