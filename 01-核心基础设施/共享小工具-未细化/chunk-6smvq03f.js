// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { df, H } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { a, Wn } from "../设置-配置/chunk-zqr5ctyf.js";
import { Wf } from "../核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Pw } from "../设置-配置/设置-配置.aqbb35ee.js";
function A$e() {
  return r() !== null;
}
function r() {
  if (a.CLAUDE_CODE_DISABLE_AGENT_VIEW)
    return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
  if (Pw()?.settings.disableAgentView === !0)
    return "is disabled by the 'disableAgentView' setting";
  return null;
}
function ny() {
  return !A$e();
}
async function C$e(e = {}) {
  if (Pw() === null) {
    let { getSettingsWithErrors: t } = await import("../设置-配置/getSettingsWithErrors.2xnfq00s.js");
    t();
  }
  if (e.kickGrowthBook !== !1) df().catch(() => {});
}
function FJe() {
  return (
    Wn.CLAUDE_CODE_FLEET_PAST_SESSIONS === !0 ||
    H("tengu_fleet_past_sessions", !1)
  );
}
function Tve() {
  return ny();
}
function JK() {
  return !1;
}
function Sme() {
  return H("tengu_amber_anchor", !1);
}
function AAn() {
  return H("tengu_copper_lantern", !1);
}
function yyr() {
  return H("tengu_quiet_harbor", !1) ? "ask" : "transient";
}
function Lc() {
  return Sme() ? "daemon" : "background service";
}
function QK() {
  return Wf(Lc());
}
function zJ(e) {
  return Tve() ? ` \u2014 run 'claude daemon ${e}'` : "";
}
function bme(e, t) {
  let o = t ?? r() ?? "is not available in this environment";
  (process.stderr.write(`'${e}' ${o}.
`),
    process.exit(1));
}
var sAt = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";
function b4t() {
  return !1;
}
function Syr(e) {
  return !1;
}
function CAn() {
  return !!a.CLAUDE_AGENTS_SELECT;
}
function vAn() {
  let e = Ie(process.env[sAt]);
  return (delete process.env[sAt], e);
}
export {
  A$e,
  ny,
  C$e,
  FJe,
  Tve,
  JK,
  Sme,
  AAn,
  yyr,
  Lc,
  QK,
  zJ,
  bme,
  sAt,
  b4t,
  Syr,
  CAn,
  vAn,
};
