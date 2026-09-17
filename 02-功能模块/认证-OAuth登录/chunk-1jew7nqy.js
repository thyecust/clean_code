// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { otelApiModule } from "./认证-OAuth登录.419zdfz3.js";
import { execAsyncModule } from "../../01-核心基础设施/核心工具-其他/exec-async-module.js";
import { commonJS } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var o = commonJS(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  i.getMachineId = void 0;
  var s = execAsyncModule(),
    d = otelApiModule();
  async function u() {
    try {
      let t = (
        await (0, s.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')
      ).stdout
        .split(
          `
`,
        )
        .find((c) => c.includes("IOPlatformUUID"));
      if (!t) return;
      let r = t.split('" = "');
      if (r.length === 2) return r[1].slice(0, -1);
    } catch (e) {
      d.diag.debug(`error reading machine id: ${e}`);
    }
    return;
  }
  i.getMachineId = u;
});
export default o();
