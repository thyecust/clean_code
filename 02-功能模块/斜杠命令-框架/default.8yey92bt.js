// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 77 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ic } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Gl, kp } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { u6, KG, lb, UC } from "../Bridge-RemoteControl/chunk-9estzwf5.js";
import { Myn } from "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
function e() {
  if (lb()) return !0;
  try {
    return (
      u6() &&
      !UC() &&
      !KG() &&
      Gl().source === "none" &&
      kp({ skipRetrievingKeyFromApiKeyHelper: !0 }).source === "none" &&
      !Myn.isC4EUpsellCommandEnabled()
    );
  } catch {
    return !1;
  }
}
var r = {
    type: "local-jsx",
    name: "remote-control",
    aliases: ["rc"],
    get description() {
      return ic()
        ? "Disconnect Remote Control"
        : "Control this session from your phone or claude.ai/code";
    },
    get argumentHint() {
      return ic() ? void 0 : "[name]";
    },
    isEnabled: e,
    get isHidden() {
      return !lb();
    },
    immediate: !0,
  },
  s = r;
export { s as default };
