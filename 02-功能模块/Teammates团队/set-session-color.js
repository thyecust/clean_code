// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isTeammate } from "./chunk-811z9z0t.js";
import { getBridgeTokenOverride, getBridgeBaseUrlOverride } from "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import { getReplBridgeHandle } from "../权限系统/chunk-1y2g140m.js";
import { getOwnJobShortId, syncJobColor } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import { AGENT_COLOR_NAMES, resolveAgentColorName } from "../../01-核心基础设施/共享小工具-未细化/agent-color-palette.js";
import { yl } from "./chunk-thxapyam.js";
import { saveAgentColor } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Vle } from "../../01-核心基础设施/共享小工具-未细化/chunk-tc59qdh4.js";
var g = ["default", "reset", "none", "gray", "grey"];
async function callSetColorCommand(n, e, t) {
  return (n(await performSetColor(t, e), { display: "system" }), null);
}
async function performSetColor(n, e) {
  if (isTeammate())
    return "Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";
  let t = n?.trim() ?? "",
    o = t === "" ? AGENT_COLOR_NAMES[Math.floor(Math.random() * AGENT_COLOR_NAMES.length)] : t.toLowerCase(),
    r = g.includes(o);
  if (!r && !AGENT_COLOR_NAMES.includes(o)) {
    let s = AGENT_COLOR_NAMES.join(", ");
    return `Invalid color "${o}". Available colors: ${s}, default`;
  }
  let m = K(),
    d = yl(),
    i = r ? "default" : o,
    l = r ? void 0 : o;
  (await saveAgentColor(m, i, d, e.storageV5), e.setAppState((s) => Vle(s, { color: l })));
  let a = e.getAppState(),
    c = a.agent
      ? a.agentDefinitions.activeAgents.find((s) => s.agentType === a.agent)
      : void 0;
  return (
    syncJobColor(
      getOwnJobShortId(),
      resolveAgentColorName({ userOverride: l, agentDefinitionColor: c?.color }),
      e.storageV5,
    ),
    f(i, e.credentials),
    r ? "Session color reset to default" : `Session color set to: ${o}`
  );
}
function f(n, e) {
  let t = getReplBridgeHandle()?.bridgeSessionId;
  if (!t) return;
  let o = getBridgeTokenOverride();
  import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js").then(({ updateBridgeSessionColorTag: r }) =>
    r(t, n, AGENT_COLOR_NAMES, {
      baseUrl: getBridgeBaseUrlOverride(),
      getAccessToken: o ? () => o : void 0,
      credentials: e,
    }).catch(() => {}),
  );
}
export { callSetColorCommand, performSetColor };
