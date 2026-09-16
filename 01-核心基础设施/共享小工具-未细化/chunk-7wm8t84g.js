// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { b } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Yo } from "./chunk-1ftn6vfs.js";
var Fk = 1e6;
class p {
  loaderSide = null;
  register(e) {
    this.loaderSide = e;
  }
}
var a = new p();
function qYn(e) {
  a.register(e);
}
function JSt() {
  let e = a.loaderSide;
  if (!e)
    throw Error(
      "MCP skill builders not registered \u2014 loadSkillsDir.ts has not been evaluated yet",
    );
  return e;
}
import { createHash as m } from "crypto";
function e7e(e) {
  return (
    e.configErrorReason === "url_empty" ||
    (!e.configError && "url" in e && e.url.trim() === "")
  );
}
function lN(e) {
  let {
      scope: o,
      pluginSource: r,
      pluginPath: i,
      agentSource: s,
      declaredIn: C,
      configError: S,
      configErrorReason: M,
      expandedFromEnv: g,
      ...u
    } = e,
    t = u;
  if (
    (delete t.tools,
    delete t.discoveryCache,
    delete t.cachedInitResponse,
    delete t.cachedDiscoverResponse,
    delete t.discoverSupport,
    delete t.eligible,
    delete t.ineligibleReason,
    delete t.enterpriseManaged,
    t.type === "stdio" || (t.type === void 0 && "command" in t))
  )
    ((t.type = "stdio"), (t.args = t.args ?? []));
  if (e7e(e)) t.unconfigured = !0;
  if (s !== void 0) t.agentSource = s;
  let f = b(t, (y, n) => {
    if (n && typeof n === "object" && !Array.isArray(n)) {
      let l = n,
        c = {};
      for (let d of Object.keys(l).sort()) c[d] = l[d];
      return c;
    }
    return n;
  });
  return m("sha256").update(f).digest("hex").slice(0, 16);
}
function Jn(e, o) {
  return `${e}-${lN(o)}`;
}
function GI(e, o, r) {
  return import.meta
    .require("../../02-功能模块/MCP客户端/mcpClientModule.4cyej0np.js")
    .mcpClientModule()
    .invokeToolRaw(e.client, o, r);
}
function UNe(e, o, r) {
  return import.meta
    .require("../../02-功能模块/MCP客户端/mcpClientModule.4cyej0np.js")
    .mcpClientModule()
    .readResourceRaw(e.client, o, r);
}
function QSt(e, o) {
  return import.meta
    .require("../../02-功能模块/MCP客户端/mcpClientModule.4cyej0np.js")
    .mcpClientModule()
    .listToolsRaw(e.client, o);
}
function CH(e, o, r) {
  import.meta
    .require("../../02-功能模块/MCP客户端/mcpClientModule.4cyej0np.js")
    .mcpClientModule()
    .onMcpNotification(e, o, r);
}
function Q3(e, o) {
  Yo(e.client).onclose = o;
}
function zYn(e, o) {
  let r = Yo(e.client),
    i = r.onclose;
  r.onclose = () => {
    (i?.(), o());
  };
}
function VYn(e) {
  let o = Yo(e.client);
  return o != null && "transport" in o && o.transport === void 0;
}
function KYn(e, o) {
  return Yo(e.client).notification(o);
}
function XYn(e, o) {
  Yo(e.client)?.transport?.onmessage?.(o);
}
export { Fk, qYn, JSt, e7e, lN, Jn, GI, UNe, QSt, CH, Q3, zYn, VYn, KYn, XYn };
