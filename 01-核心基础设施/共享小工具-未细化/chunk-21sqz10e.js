// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { H } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { fromEnum } from "./chunk-w76kejwn.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { i } from "./chunk-an83zrbx.js";
import { id } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
class f {
  latched = void 0;
  latch(e) {
    this.latched = e;
  }
  reset() {
    this.latched = void 0;
  }
}
var o = id(new f(), (e) => e.reset());
function xT() {
  {
    if (o.latched !== void 0) return o.latched;
    let e = a.MCP_SDK_GENERATION,
      t = e === "v1" || e === "v2" ? e : void 0;
    if (e !== void 0 && t === void 0)
      n(
        `MCP_SDK_GENERATION=${e} is invalid; expected 'v1' or 'v2' \u2014 ignoring`,
        { level: "warn" },
      );
    let d = t === void 0 && H("tengu_brindle_causeway", !1) === !0,
      r = t ?? (d ? "v2" : "v1"),
      c = t !== void 0 ? "env" : d ? "growthbook" : "default";
    return (
      o.latch(r),
      n(`mcp runtime arm: ${r} (source: ${c})`),
      i("tengu_mcp_sdk_generation", { generation: fromEnum(r), source: fromEnum(c) }),
      r
    );
  }
  return "v1";
}
export { xT };
