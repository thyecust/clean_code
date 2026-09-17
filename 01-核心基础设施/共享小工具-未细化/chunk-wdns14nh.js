// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K, jc } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { i } from "./chunk-an83zrbx.js";
import { lit as S, fromEnum } from "./analytics-fields.js";
import { logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Q$, AJe } from "../../02-功能模块/Skills技能/chunk-sapykxw7.js";
function s(l) {
  if (!l) return null;
  for (let n = l.length - 1; n >= 0; n--) {
    let e = l[n];
    if (e?.type !== "attachment" || e.attachment.type !== "goal_status")
      continue;
    if (e.attachment.met || e.attachment.failed) return null;
    let t = e.attachment.condition;
    return typeof t === "string" && t.length > 0 ? t : null;
  }
  return null;
}
function restoreGoalFromTranscript(l, n, e) {
  let t = s(l),
    a = t !== null ? AJe() : null;
  if (a !== null) logFeatureSad("goal_set", a.code, { origin: fromEnum("restored") });
  let r;
  if (t === null || a !== null) {
    if (
      (n(
        (o) => (
          (r = o.activeGoal),
          o.activeGoal === void 0 ? o : { ...o, activeGoal: void 0 }
        ),
      ),
      r !== void 0)
    )
      Q$(r, "resume_swap");
    return;
  }
  if (
    (e.add(K(), "Stop", "", { type: "prompt", prompt: t }),
    n(
      (o) => (
        (r = o.activeGoal),
        {
          ...o,
          activeGoal: {
            condition: t,
            iterations: 0,
            setAt: Date.now(),
            origin: "restored",
            tokensAtStart: jc(),
          },
        }
      ),
    ),
    r !== void 0)
  )
    Q$(r, "resume_swap");
  (i("tengu_goal_restored_on_resume", { promptLength: t.length }),
    i("tengu_stop_hook_added", {
      promptLength: t.length,
      via: S("goal"),
      origin: fromEnum("restored"),
    }));
}
export { restoreGoalFromTranscript };
