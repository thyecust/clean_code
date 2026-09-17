// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { vJ, HCe, xoe, ICe, PCe } from "../../02-功能模块/Artifact发布-渲染/chunk-rr78st95.js";
import { yk, Qwe, n3, Hy, Wue } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { listGoalStopHooks } from "../../02-功能模块/Skills技能/chunk-sapykxw7.js";
import { runBundledSkillSessionResets } from "../../02-功能模块/Skills技能/bundled-skills.js";
import { Jx } from "../../02-功能模块/AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import { transcriptReplacedBus } from "./transcript-replaced-bus.js";
function resetConversation(o, e, r, i) {
  (Jx("conversation_reset"),
    yk("conversation_reset"),
    Hy(n3),
    ICe(),
    xoe(),
    vJ(),
    PCe(),
    HCe(),
    runBundledSkillSessionResets());
  let s = K();
  for (let t of listGoalStopHooks(o.sessionHooksRegistry, s))
    o.sessionHooksRegistry.remove(s, "Stop", t);
  (r(),
    Wue(),
    Qwe(e),
    transcriptReplacedBus.of(i).emit(
      s,
      e.map((t) => t.uuid),
    ),
    o.applyMessageOp({ type: "replace-all", messages: e }));
}
export { resetConversation };
