// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { otelApiModule } from "./认证-OAuth登录.419zdfz3.js";
import { commonJS } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var i = commonJS(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  e.getMachineId = void 0;
  var d = otelApiModule();
  async function n() {
    d.diag.debug("could not read machine-id: unsupported platform");
    return;
  }
  e.getMachineId = n;
});
export default i();
