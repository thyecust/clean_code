// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { otelApiModule } from "./认证-OAuth登录.419zdfz3.js";
import { execAsyncModule } from "../../01-核心基础设施/核心工具-其他/exec-async-module.js";
import { commonJS, importMetaRequire } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var u = commonJS(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  r.getMachineId = void 0;
  var n = importMetaRequire("fs"),
    s = execAsyncModule(),
    t = otelApiModule();
  async function c() {
    try {
      return (
        await n.promises.readFile("/etc/hostid", { encoding: "utf8" })
      ).trim();
    } catch (e) {
      t.diag.debug(`error reading machine id: ${e}`);
    }
    try {
      return (
        await (0, s.execAsync)("kenv -q smbios.system.uuid")
      ).stdout.trim();
    } catch (e) {
      t.diag.debug(`error reading machine id: ${e}`);
    }
    return;
  }
  r.getMachineId = c;
});
export default u();
