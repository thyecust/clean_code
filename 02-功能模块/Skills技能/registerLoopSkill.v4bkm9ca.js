// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 100 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ym } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { isBgSession, isClaudeAISubscriber } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { isFirstPartyProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { markLoopStarted } from "../语音-音频/loop-wakeup-scheduler.js";
import { isPolicyAllowed } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-8sw91yn5.js";
import { ASK_USER_QUESTION_TOOL_NAME } from "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import { PUSH_NOTIFICATION_TOOL_NAME, isAgentPushNotificationEnabled } from "../远程控制-Bridge/push-notification-tool.js";
import { CRON_CREATE_TOOL_NAME, CRON_DELETE_TOOL_NAME, DEFAULT_MAX_AGE_DAYS, isKairosCronEnabled } from "../定时任务-Cron/chunk-mk3zm4ew.js";
import { registerBundledSkill } from "./bundled-skills.js";
import { SKILL_TOOL_NAME } from "../权限系统/chunk-fjrcf22x.js";
import { ALLOW_ROUTINES_POLICY } from "../../01-核心基础设施/核心工具-未归类/routines-policy.js";
import { LOOP_SKILL_NAME } from "./bundled-skill-names.js";
import { SCHEDULE_WAKEUP_TOOL_NAME, AUTONOMOUS_LOOP_SENTINEL, AUTONOMOUS_LOOP_DYNAMIC_SENTINEL, TASK_LIST_TOOL_NAME, TASK_STOP_TOOL_NAME } from "../Teammates团队/chunk-z2t8b9yc.js";
import { MONITOR_TOOL_NAME } from "../../01-核心基础设施/核心工具-未归类/monitor-tool-name.js";
import * as lazy_LOOP_FILE_DYNAMIC_SENTINEL_y675anba from "../自主会话-循环/LOOP_FILE_DYNAMIC_SENTINEL.y675anba.js";

var r = lazy_LOOP_FILE_DYNAMIC_SENTINEL_y675anba,
  b = "10m";
function y() {
  return isAgentPushNotificationEnabled()
    ? ` Before you stop, send a one-line outcome via ${PUSH_NOTIFICATION_TOOL_NAME} \u2014 the user may be away and waiting to hear it's done. Skip this if you're stopping because the user just told you to; they're already here.`
    : "";
}
var p = /^\d+[smhd]$/,
  m =
    /^every\s+(\d+)\s*(s|sec|secs|second|seconds|m|min|mins|minute|minutes|h|hr|hrs|hour|hours|d|day|days)\s*$/i;
function _(e) {
  let o = e[1],
    t = e[2].toLowerCase();
  if (t.startsWith("s")) return `${o}s`;
  if (t.startsWith("h")) return `${o}h`;
  if (t.startsWith("d")) return `${o}d`;
  return `${o}m`;
}
var N =
  "| Interval pattern      | Cron expression     | Notes                                    |\n|-----------------------|---------------------|------------------------------------------|\n| `Nm` where N \u2264 59   | `*/N * * * *`     | every N minutes                          |\n| `Nm` where N \u2265 60   | `0 */H * * *`     | round to hours (H = N/60, must divide 24)|\n| `Nh` where N \u2264 23   | `0 */N * * *`     | every N hours                            |\n| `Nd`                | `0 0 */N * *`     | every N days at midnight local           |\n| `Ns`                | treat as `ceil(N/60)m` | cron minimum granularity is 1 minute  |\n\n**If the interval doesn't cleanly divide its unit** (e.g. `7m` \u2192 `*/7 * * * *` gives uneven gaps at :56\u2192:00; `90m` \u2192 1.5h which cron can't express), pick the nearest clean interval and tell the user what you rounded to before scheduling.";
function T() {
  if (
    !a.CLAUDE_CODE_REMOTE &&
    !isBgSession() &&
    isFirstPartyProvider() &&
    isClaudeAISubscriber() &&
    isPolicyAllowed("allow_remote_sessions") &&
    isPolicyAllowed(ALLOW_ROUTINES_POLICY) &&
    ym().length === 0
  )
    return `
## Offer cloud first

Before any scheduling step, check whether EITHER is true:
- the parsed interval (rule 1 or 2) is **\u226560 minutes**, or
- regardless of which rule matched, the original input uses daily phrasing ("every morning", "daily", "every day", "each night", "every weekday")

If either is true, call ${ASK_USER_QUESTION_TOOL_NAME} first:
- \`question\`: "This loop stops when you close this session. Set it up as a cloud schedule instead so it keeps running?"
- \`header\`: "Schedule"
- \`options\`: \`[{label: "Cloud schedule (recommended)", description: "Runs in Anthropic's cloud even after you close this session"}, {label: "This session only", description: "Runs in this terminal until you exit"}]\`

If they pick **Cloud schedule**: do NOT call ${CRON_CREATE_TOOL_NAME}. Invoke the \`schedule\` skill directly via the ${SKILL_TOOL_NAME} tool with \`args\` set to their original input verbatim (e.g. \`${SKILL_TOOL_NAME}({skill: "schedule", args: "every morning tell me a joke"})\`), then follow that skill's instructions to completion. Do NOT tell the user to run /schedule themselves. **Then stop \u2014 do not continue to any section below** (no ${CRON_CREATE_TOOL_NAME}, no ${SCHEDULE_WAKEUP_TOOL_NAME}, no "execute the prompt now").
If they pick **This session only**:
- If the trigger was a parsed \u226560-minute interval (rule 1 or 2): continue below with that interval.
- If the trigger was daily phrasing only (rule 3, no parsed interval): do NOT call ${CRON_CREATE_TOOL_NAME}. Explain that a daily-cadence loop won't fire before this session closes, so there's nothing useful to schedule locally \u2014 suggest they either pick Cloud schedule, or re-run \`/loop\` with an explicit shorter interval (e.g. \`/loop 1h <prompt>\`) if they want a session loop. Then stop.
If neither trigger condition was met: continue below.
`;
  return "";
}
function I() {
  if (
    !a.CLAUDE_CODE_REMOTE &&
    !isBgSession() &&
    isFirstPartyProvider() &&
    isClaudeAISubscriber() &&
    isPolicyAllowed("allow_remote_sessions") &&
    isPolicyAllowed(ALLOW_ROUTINES_POLICY)
  ) {
    if (ym().length > 0)
      return ` End the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}`;
    return ` Only if you did NOT show the cloud-offer ${ASK_USER_QUESTION_TOOL_NAME} above (i.e., neither trigger condition applied), end the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}. If the user already answered that question, omit this line.`;
  }
  return "";
}
function E() {
  return `Usage: /loop [interval] <prompt>

Run a prompt or slash command on a recurring interval \u2014 or with no interval, let the model self-pace based on the task.

Intervals: Ns, Nm, Nh, Nd (e.g. 5m, 30m, 2h, 1d). Minimum granularity is 1 minute.
If no interval is specified, the model picks a delay between iterations based on what it's doing.

Examples:
  /loop 5m /babysit-prs
  /loop 30m check the deploy
  /loop 1h /standup 1
  /loop check the deploy          (dynamic \u2014 model picks delays)
  /loop check the deploy every 20m`;
}
function A(e) {
  let o = `The user wants you to self-pace. Decide what makes the next iteration worth running \u2014 a passage of time, or an observable event.

1. **Run the parsed prompt now.** If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.
2. **If the next run is gated on an event** (CI finishing, a log line matching, a file changing, a PR comment) and no ${MONITOR_TOOL_NAME} is already running for it: arm one now with \`persistent: true\`. Its events arrive as \`<task-notification>\` messages and wake this loop immediately \u2014 you do not wait for the ${SCHEDULE_WAKEUP_TOOL_NAME} deadline. Arm once; on later iterations call ${TASK_LIST_TOOL_NAME} first and skip this step if a monitor is already running.
3. **Briefly confirm**: that you're self-pacing, whether a ${MONITOR_TOOL_NAME} is the primary wake signal, that you ran the task now, and what fallback delay you're about to pick. Write this as text *before* calling ${SCHEDULE_WAKEUP_TOOL_NAME} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, decide whether the loop continues.** If the task needs another iteration, call ${SCHEDULE_WAKEUP_TOOL_NAME} with:
   - \`delaySeconds\`: with a ${MONITOR_TOOL_NAME} armed this is the **fallback heartbeat** \u2014 how long to wait if no event fires (lean 1200\u20131800s; idle ticks more frequent than the task needs are pure overhead). Without a ${MONITOR_TOOL_NAME} this is the cadence \u2014 pick based on what you observed. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the full original /loop input verbatim, prefixed with \`/loop \` so the next firing re-enters this skill and continues the loop. For example, if the user typed \`/loop check the deploy\`, pass \`/loop check the deploy\` as the prompt.
   - \`noop\`: \`true\` if this tick changed nothing ("still waiting", "quiet hold"); \`false\` if it did something worth keeping. Consecutive \`noop: true\` ticks collapse in the terminal.
   If it doesn't need another iteration, stop instead (step 6) \u2014 re-arming is a per-turn choice, not a default.
5. **If you were woken by a \`<task-notification>\`** rather than this prompt: handle the event in the context of the loop task, then make the same decision. If the loop should continue, call ${SCHEDULE_WAKEUP_TOOL_NAME} again with the same \`prompt\` and the same 1200\u20131800s \`delaySeconds\` from step 4 (the ${MONITOR_TOOL_NAME} remains the wake signal; the new wakeup is only the fallback heartbeat). If the event means the work is finished, stop (step 6).
6. **To stop the loop** \u2014 the task is complete, further iterations can't make progress, or the user asked you to stop \u2014 call ${SCHEDULE_WAKEUP_TOOL_NAME} with \`stop: true\` (no other fields) and ${TASK_STOP_TOOL_NAME} any ${MONITOR_TOOL_NAME} you armed (use ${TASK_LIST_TOOL_NAME} to find the task ID if it is no longer in context). Stopping is the loop's normal ending \u2014 the user can restart it anytime with /loop.${y()}`;
  return `# /loop \u2014 schedule a recurring or self-paced prompt

Parse the input below into \`[interval] <prompt\u2026>\` and schedule it.

## Parsing (in priority order)

1. **Leading token**: if the first whitespace-delimited token matches \`^\\d+[smhd]$\` (e.g. \`5m\`, \`2h\`), that's the interval; the rest is the prompt.
2. **Trailing "every" clause**: otherwise, if the input ends with \`every <N><unit>\` or \`every <N> <unit-word>\` (e.g. \`every 20m\`, \`every 5 minutes\`, \`every 2 hours\`), extract that as the interval and strip it from the prompt. Only match when what follows "every" is a time expression \u2014 \`check every PR\` has no interval.
3. **No interval**: otherwise, the entire input is the prompt and you'll self-pace dynamically (see "Dynamic mode" below).

If the resulting prompt is empty, show usage \`/loop [interval] <prompt>\` and stop.

Examples:
- \`5m /babysit-prs\` \u2192 interval \`5m\`, prompt \`/babysit-prs\` (rule 1)
- \`check the deploy every 20m\` \u2192 interval \`20m\`, prompt \`check the deploy\` (rule 2)
- \`run tests every 5 minutes\` \u2192 interval \`5m\`, prompt \`run tests\` (rule 2)
- \`check the deploy\` \u2192 no interval \u2192 dynamic mode, prompt \`check the deploy\` (rule 3)
- \`check every PR\` \u2192 no interval \u2192 dynamic mode, prompt \`check every PR\` (rule 3 \u2014 "every" not followed by time)
- \`5m\` \u2192 empty prompt \u2192 show usage
${T()}
## Fixed-interval mode (rules 1 and 2)

Convert the interval to a cron expression:

${N}

Then:
1. Call ${CRON_CREATE_TOOL_NAME} with: \`cron\` (the expression above), \`prompt\` (the parsed prompt verbatim), \`recurring: true\`.
2. Briefly confirm: what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${DEFAULT_MAX_AGE_DAYS} days, and that the user can cancel sooner with ${CRON_DELETE_TOOL_NAME} (include the job ID).${I()}
3. **Then immediately execute the parsed prompt now** \u2014 don't wait for the first cron fire. If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.

## Dynamic mode (rule 3 \u2014 no interval)

${o}

## Input

${e}`;
}
var f = (e, o, t) => {
  let s = e
      ? `## Loop tasks (from ${e.path})`
      : "## Autonomous-loop instructions (for the immediate execution and every fire)",
    n;
  if (e) n = e.content;
  else (r.logAutonomousLoopActivation(), (n = r.getAutonomousLoopPreamble()));
  let h = e ? "the loop.md tasks" : "the autonomous check";
  if (o) {
    let c = e ? r.LOOP_FILE_DYNAMIC_SENTINEL : AUTONOMOUS_LOOP_DYNAMIC_SENTINEL,
      k = e
        ? `# /loop \u2014 loop.md tasks with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval and has a loop-tasks file at \`${e.path}\`. Run those tasks now, then self-pace the next iteration via ${SCHEDULE_WAKEUP_TOOL_NAME} \u2014 no cron.`
        : `# /loop \u2014 autonomous default with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval. Run the autonomous check now, then self-pace the next iteration via ${SCHEDULE_WAKEUP_TOOL_NAME} \u2014 no cron.`,
      v = e
        ? `that you're running tasks from \`${e.path}\` in dynamic-pacing mode, that you ran the first tick now`
        : "that this is the autonomous default in dynamic-pacing mode, that you ran the check now",
      O = `1. **Run ${h} now**, following the instructions inlined below.
2. **If the next tick is gated on an event** (CI finishing, a PR comment, a log line) and no ${MONITOR_TOOL_NAME} is already running for it: arm one now with \`persistent: true\`. Its events wake this loop immediately \u2014 you do not wait for the ${SCHEDULE_WAKEUP_TOOL_NAME} deadline. Arm once; on later ticks call ${TASK_LIST_TOOL_NAME} first and skip if a monitor is already running.
3. **Briefly confirm**: ${v}, whether a ${MONITOR_TOOL_NAME} is the primary wake signal, and what fallback delay you're about to pick. Write this as text *before* calling ${SCHEDULE_WAKEUP_TOOL_NAME} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, decide whether the loop continues.** If the next check is worth running, call ${SCHEDULE_WAKEUP_TOOL_NAME} with:
   - \`delaySeconds\`: with a ${MONITOR_TOOL_NAME} armed this is the fallback heartbeat (lean 1200\u20131800s). Without one, pick based on what you observed this turn \u2014 quiet branch? wait longer. Lots in flight? wait shorter. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the literal string \`${c}\` \u2014 the dynamic-mode sentinel expands at fire time to the full instructions (first fire / first fire post-compact / loop.md edited) or a dynamic-pacing-specific short reminder (subsequent fires). Do not pass the full instructions; that is handled automatically.
   - \`noop\`: \`true\` if this tick changed nothing ("still waiting", "quiet hold"); \`false\` if it did something worth keeping. Consecutive \`noop: true\` ticks collapse in the terminal.
   If it isn't, stop instead (step 6) \u2014 re-arming is a per-turn choice, not a default.
5. **If woken by a \`<task-notification>\`** rather than this prompt: handle the event, then make the same decision. If the loop should continue, call ${SCHEDULE_WAKEUP_TOOL_NAME} again with \`${c}\` and the same 1200\u20131800s \`delaySeconds\` (the ${MONITOR_TOOL_NAME} remains the wake signal; the new wakeup is only the fallback heartbeat). If the event means the work is finished, stop (step 6).
6. **To stop the loop** \u2014 the task is complete, further iterations can't make progress, or the user asked you to stop \u2014 call ${SCHEDULE_WAKEUP_TOOL_NAME} with \`stop: true\` (no other fields) and ${TASK_STOP_TOOL_NAME} any ${MONITOR_TOOL_NAME} you armed (use ${TASK_LIST_TOOL_NAME} to find the task ID if it is no longer in context). Stopping is the loop's normal ending \u2014 the user can restart it anytime with /loop.${y()}`;
    return `${k}

## Action

${O}

${s}

${n}`;
  }
  let l = e ? r.LOOP_FILE_SENTINEL : AUTONOMOUS_LOOP_SENTINEL,
    u = e
      ? `# /loop \u2014 schedule loop.md tasks

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${t}\`) and has a loop-tasks file at \`${e.path}\`. Schedule a recurring cron that runs those tasks each tick, then run the first tick immediately.`
      : `# /loop \u2014 schedule the autonomous default

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${t}\`). Schedule the autonomous-loop default and then run the first autonomous check immediately.`,
    g = e
      ? "it expands at fire time to the full loop.md contents on first delivery (and whenever loop.md has been edited since last fire), and to a short reminder on subsequent unchanged fires. The long instructions stay in the cached message-prefix."
      : "it expands at fire time to the full autonomous-loop instructions on first delivery, and to a short reminder on subsequent fires (the long instructions stay in the cached message-prefix).",
    w = e
      ? `what's scheduled, the cron expression, the human-readable cadence, that it's running tasks from \`${e.path}\`, that recurring tasks auto-expire after ${DEFAULT_MAX_AGE_DAYS} days, and that the user can cancel sooner with ${CRON_DELETE_TOOL_NAME} (include the job ID).`
      : `what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${DEFAULT_MAX_AGE_DAYS} days, and that they can cancel sooner with ${CRON_DELETE_TOOL_NAME} (include the job ID). Mention this is the autonomous default and that the autonomous-loop instructions are baked in.`;
  return `${u}

## Action

1. Convert \`${t}\` to a 5-field cron expression. Supported suffixes: \`s\` \u2192 ceil to nearest minute, \`m\` (minutes), \`h\` (hours), \`d\` (days). Examples: \`5m\` \u2192 \`*/5 * * * *\`, \`1h\` \u2192 \`0 * * * *\`, \`1d\` \u2192 \`0 0 * * *\`. If the interval doesn't cleanly divide its unit, round to the nearest clean interval and tell the user what you rounded to.
2. Call ${CRON_CREATE_TOOL_NAME} with:
   - \`cron\`: the expression from step 1
   - \`prompt\`: the literal string \`${l}\` \u2014 ${g}
   - \`recurring\`: \`true\`
3. Briefly confirm: ${w}
4. **Then immediately run ${h} now**, following the instructions inlined below. Don't wait for the first cron fire.

${s}

${n}`;
};
function registerLoopSkill() {
  registerBundledSkill({
    name: LOOP_SKILL_NAME,
    menuDescription:
      "Repeat a prompt or command on an interval (e.g. /loop 5m /foo)",
    aliases: ["proactive"],
    description:
      "Run a prompt or slash command on a recurring interval (e.g. /loop 5m /foo). Omit the interval to let the model self-pace.",
    whenToUse:
      'When the user wants to set up a recurring task, poll for status, or run something repeatedly on an interval (e.g. "check the deploy every 5 minutes", "keep running /babysit-prs"). Do NOT invoke for one-off tasks.',
    get argumentHint() {
      return "[interval] [prompt]";
    },
    userInvocable: !0,
    argsMayContainSlashCommands: !0,
    isEnabled: isKairosCronEnabled,
    async getPromptForCommand(e, o) {
      let t = e.trim();
      if (!o.options?.isSkillPreload && !o.options?.modelScheduledOrigin)
        logEvent("tengu_loop_command", {
          has_args: t.length > 0,
          is_interval_only: p.test(t) || m.test(t),
        });
      {
        let s = t.match(m),
          n = !t,
          h = p.test(t) || s !== null;
        if (n || h) {
          let l = s ? _(s) : t || b,
            u = await r.readLoopFileAsync(o.storageV5);
          if (n) {
            if (!o.options?.isSkillPreload && !o.options?.modelScheduledOrigin)
              markLoopStarted();
            return [{ type: "text", text: f(u, !0, l) }];
          }
          return [{ type: "text", text: f(u, !1, l) }];
        }
      }
      if (!t) return [{ type: "text", text: E() }];
      if (!o.options?.isSkillPreload && !o.options?.modelScheduledOrigin) markLoopStarted();
      return [{ type: "text", text: A(t) }];
    },
  });
}
export { registerLoopSkill };
