// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ls } from "./认证-OAuth登录.419zdfz3.js";
import { w } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var i = w(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  e.getMachineId = void 0;
  var d = Ls();
  async function n() {
    d.diag.debug("could not read machine-id: unsupported platform");
    return;
  }
  e.getMachineId = n;
});
export default i();
