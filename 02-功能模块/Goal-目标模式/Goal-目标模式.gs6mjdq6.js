// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 74 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ze, ke, YLn, JLn, Nn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { isBgSession } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { R } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { getModelProposedGoalsSettingParsed, getModelProposedGoalsSetting } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { isGoalClearKeyword, getGoalGateError } from "../Skills技能/chunk-sapykxw7.js";
import { GOAL_PROPOSAL_DIALOG } from "../../01-核心基础设施/共享小工具-未细化/goal-proposal-dialog.js";
import { sanitizePlainText } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { isProposeGoalEnabled } from "../../01-核心基础设施/共享小工具-未细化/propose-goal-feature-gate.js";
import { GoalProposalState } from "../../01-核心基础设施/共享小工具-未细化/goal-proposal-state.js";
import { collapseNewlines, truncateForDisplay } from "../../01-核心基础设施/共享小工具-未细化/text-truncation.js";
import { PROPOSE_GOAL_TOOL_NAME, PROPOSE_GOAL_MAX_CONDITION_CHARS, PROPOSE_GOAL_TOOL_DESCRIPTION, PROPOSE_GOAL_TOOL_PROMPT } from "../../01-核心基础设施/共享小工具-未细化/propose-goal-tool.js";
import { s, O, c, Qe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { randomUUID } from "crypto";
var T = createLazyValue(() =>
    Qe({
      condition: s()
        .min(1)
        .max(PROPOSE_GOAL_MAX_CONDITION_CHARS)
        .describe(
          `The completion condition to propose, written so a separate evaluator can verify it from the conversation (e.g. "all tests in test/auth pass (bun test exits 0)"). At most ${PROPOSE_GOAL_MAX_CONDITION_CHARS} characters \u2014 the user must be able to read the whole condition in the approval dialog.`,
        ),
      ask_user: O()
        .optional()
        .describe(
          "Whether to ask the user for approval before the goal is set. Defaults to true \u2014 an approval dialog is shown. Set false ONLY when the user's own words in this conversation stated this outcome as what they want; the goal is then set directly, with a visible notice in the transcript, and the user can clear it with /goal clear.",
        ),
    }),
  ),
  P = createLazyValue(() =>
    c({
      condition: s().describe(
        "The condition shown to the user for approval, or set directly when ask_user was false",
      ),
      askUser: O().describe(
        "Whether the user was asked for approval (true) or the goal was set directly (false)",
      ),
    }),
  );
function E(e) {
  if (YLn()) return;
  (JLn(), logEvent("tengu_goal_proposal_available", { setting: fromEnum(e) }));
}
var ProposeGoalTool = buildTool({
  name: PROPOSE_GOAL_TOOL_NAME,
  maxResultSizeChars: 1000,
  searchHint:
    "propose a session goal condition for the user to approve with one keypress",
  get inputSchema() {
    return T();
  },
  get outputSchema() {
    return P();
  },
  shouldDefer: !0,
  isEnabled() {
    if (ke() || Nn()) return !1;
    if (isBgSession()) return !1;
    if (!isProposeGoalEnabled()) return !1;
    let e = getModelProposedGoalsSettingParsed();
    if (e === "disabled") return !1;
    return (E(e), !0);
  },
  isConcurrencySafe() {
    return !1;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return `ask_user=${e.ask_user !== !1}: ${e.condition ?? ""}`;
  },
  async description() {
    return PROPOSE_GOAL_TOOL_DESCRIPTION;
  },
  async prompt() {
    return PROPOSE_GOAL_TOOL_PROMPT;
  },
  renderToolUseMessage(e) {
    if (!e.condition) return "";
    return `Propose goal: ${truncateForDisplay(collapseNewlines(e.condition), 200)}`;
  },
  create(e) {
    return {
      async call({ condition: r, ask_user: w }) {
        if (e.agentId)
          throw Error("ProposeGoal cannot be used in agent contexts");
        if (ke() || Nn() || isBgSession())
          throw (
            logFeatureSad("goal_propose", "session_shape"),
            Error(
              "Goal proposals are only available in interactive local sessions.",
            )
          );
        let o = sanitizePlainText(collapseNewlines(r)).trim();
        if (o === "")
          throw Error(
            "The goal condition is empty once whitespace and invisible characters are removed. Provide a visible condition.",
          );
        if (o.length > PROPOSE_GOAL_MAX_CONDITION_CHARS)
          throw new R(
            `The goal condition exceeds ${PROPOSE_GOAL_MAX_CONDITION_CHARS} characters once canonicalized for display (tabs expand to spaces). Shorten the condition \u2014 the user must be able to read all of it in the approval dialog.`,
            "goal condition exceeds the canonicalized-length cap",
          );
        if (isGoalClearKeyword(o))
          throw Error(
            "ProposeGoal only proposes a new goal; it cannot clear one. The user can clear an active goal with /goal clear.",
          );
        let n = getGoalGateError();
        if (n !== null)
          throw (
            logFeatureSad("goal_propose", n.code),
            new R(n.message, "goal evaluator blocked")
          );
        if (e.permissions().mode === "plan")
          throw (
            logFeatureSad("goal_propose", "plan_mode"),
            Error(
              "Plan mode is active, so a goal cannot be proposed yet. Keep planning; propose the goal after the plan is approved.",
            )
          );
        let _ = await getModelProposedGoalsSetting(e.storageV5);
        if (_ === "disabled")
          throw (
            logFeatureSad("goal_propose", "setting_disabled"),
            Error(
              "The user has disabled model-proposed goals in their settings. Do not propose goals; the user can set one themselves with /goal.",
            )
          );
        let l = _ === "alwaysAsk" || w !== !1,
          { messageQueue: b, requestDialog: k } = e;
        if (k === void 0)
          throw Error(
            "Goal proposals need an interactive session to render the approval prompt; none is available here.",
          );
        if (e.toolState.get(GoalProposalState).id)
          throw Error(
            "A goal proposal is already awaiting the user's decision. Keep working; if it is approved you will receive a kickoff message.",
          );
        if (
          (logEvent("tengu_goal_proposed", {
            promptLength: o.length,
            askUser: l,
            forcedAsk: l && w === !1,
          }),
          logFeatureOk("goal_propose"),
          !l)
        )
          return (
            e.recordQueuedGoalOrigin(o, "proposal_direct"),
            b.enqueue({
              agentId: ze(),
              mode: "prompt",
              value: `/goal ${o}`,
              origin: { kind: "task-notification" },
            }),
            { data: { condition: o, askUser: !1 } }
          );
        let a = e.toolState.get(GoalProposalState),
          p = randomUUID();
        return (
          (a.id = p),
          k(GOAL_PROPOSAL_DIALOG, { condition: o }, { place: "under" })
            .then((t) => {
              let d = a.id !== p,
                f = getModelProposedGoalsSettingParsed() === "disabled",
                v = e.permissions().mode === "plan";
              if (
                (logEvent("tengu_goal_proposal_decided", {
                  decision: t.approved
                    ? d
                      ? S("approved_stale")
                      : f
                        ? S("approved_disabled")
                        : v
                          ? S("approved_plan_mode")
                          : S("approved")
                    : t.explicit === !0
                      ? S("declined")
                      : S("unanswered"),
                }),
                !t.approved || d || f || v)
              ) {
                if (t.approved && !d) {
                  if (f) logFeatureSad("goal_propose", "approved_dropped_disabled");
                  else if (v) logFeatureSad("goal_propose", "approved_dropped_plan_mode");
                }
                return;
              }
              (e.recordQueuedGoalOrigin(o, "proposal_approved"),
                b.enqueue({
                  agentId: ze(),
                  mode: "prompt",
                  value: `/goal ${o}`,
                  origin: { kind: "auto-continuation" },
                }));
            })
            .catch((t) => {
              logError(t);
            })
            .finally(() => {
              if (a.id === p) a.clear();
            }),
          { data: { condition: o, askUser: !0 } }
        );
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return {
      tool_use_id: r,
      type: "tool_result",
      content:
        e.askUser === !1
          ? "Setting the goal now, without an approval dialog \u2014 the user sees it being set and can clear it with /goal clear. It becomes active at the end of this turn, when you will receive a kickoff message confirming it; until that message arrives, any previously set goal remains in effect. Continue working \u2014 do not wait for the kickoff."
          : "Shown the goal proposal to the user for approval. Continue working \u2014 do not wait for their decision. If they approve, the proposed goal is set and you will receive a kickoff message; until then, no new goal is active \u2014 any previously set goal remains in effect. If they decline you will not be notified \u2014 do not ask about the decision or re-propose the same condition.",
    };
  },
});
export { ProposeGoalTool };
