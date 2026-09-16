// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Rg, K1 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { a } from "../设置-配置/chunk-zqr5ctyf.js";
import { Ge } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { Ei } from "../../02-功能模块/Hooks钩子/chunk-9em0d4k5.js";
import { Dc } from "./chunk-15vfjgmh.js";
import { so } from "../../02-功能模块/权限系统/chunk-fjrcf22x.js";
import { Kt } from "../../02-功能模块/权限系统/chunk-qdy0h5k2.js";
import { $E } from "./chunk-c822xsqz.js";
import { jy } from "./chunk-vp8yvx5r.js";
function nte(o) {
  let l = Ei();
  return (
    (l.workflowAuthoringSkillAvailable ??= e()),
    l.workflowAuthoringSkillAvailable && (o === void 0 || i(o))
  );
}
function e() {
  if (!Dc()) return !1;
  if (jy() || Rg()) return !1;
  if (a.CLAUDE_CODE_ENTRYPOINT === "local-agent") return !1;
  let o = Ge().skillOverrides?.[$E];
  if (o === "off" || o === "user-invocable-only") return !1;
  let l = K1();
  if (l !== void 0 && !l.includes($E)) return !1;
  return !0;
}
function i(o) {
  return o.some((l) => Kt(l, so));
}
export { nte };
