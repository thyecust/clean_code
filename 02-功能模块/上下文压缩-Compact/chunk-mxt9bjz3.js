// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { VD, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { ms } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { projectSettingsAliasesUserSettings as zT, getSettingsForSource as ye, updateSettingsForSource as Jt } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
var v$e = [
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
function Eo(n, s) {
  let o = ms(),
    r = o.includes("userSettings") && zT();
  for (let t = o.length - 1; t >= 0; t--) {
    let e = o[t];
    if (e === "projectSettings" && r) continue;
    let i = ye(e)?.[n];
    if (i !== void 0) return { value: i, source: e };
  }
  if (v$e.includes(n)) {
    let t = n,
      e = ee()[t];
    if (e !== void 0 && e !== VD[t])
      return { value: e, source: "legacyGlobalConfig" };
  }
  return { value: s, source: "default" };
}
function XH(n, s, o) {
  Jt("userSettings", { [n]: s }, void 0, o);
}
export { v$e, Eo, XH };
