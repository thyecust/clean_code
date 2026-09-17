// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 197 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { vTe, asSystemPrompt, U3, LEe, xr, getSessionIdFromLog, getSessionFilesWithMtime, loadAllLogsFromSessionFile, UY } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Xn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { R, dt, ge, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { We, b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { oe, ft, ln } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { ixe, logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { getDefaultOpusModel, aa } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { go } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { Pl } from "../Teammates团队/chunk-thxapyam.js";
import { T$ } from "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import { mt, Vh } from "../工具Task-Agent调度/chunk-1px84m19.js";
import { s, T, O, v, c, fe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { Uc, Qo } from "../../01-核心基础设施/共享小工具-未细化/chunk-0hk68fj9.js";
import {
  mkdir,
  readdir,
  readFile,
  unlink,
  writeFile,
} from "fs/promises";
import { extname, join as q } from "path";
var Pe = new RegExp(`<(${ixe.join("|")})>[\\s\\S]*?(?:</\\1>|$)`, "g");
function Me(e) {
  return e.replace(Pe, "").trim();
}
function ye(e) {
  if (typeof e === "string") return [{ type: "text", text: e }];
  if (!Array.isArray(e)) return [];
  return e.filter(
    (t) => t !== null && typeof t === "object" && !Array.isArray(t),
  );
}
function ce(e) {
  return ye(e)
    .flatMap((t) =>
      t.type === "text" && typeof t.text === "string" ? [t.text] : [],
    )
    .map(Me)
    .filter((t) => t !== "");
}
function ve(e, t) {
  let o = [],
    i = new Set();
  for (let a of e) {
    if (
      a.type === "attachment" &&
      typeof a.attachment === "object" &&
      a.attachment !== null &&
      LEe(a)
    ) {
      let l = a.attachment.type === "queued_command" ? a.attachment.prompt : "",
        p = a.attachment.source_uuid;
      if (typeof p === "string") {
        if (i.has(p)) continue;
        i.add(p);
      }
      for (let r of ce(l)) o.push(`[User]: ${oe(r, t.userTextChars)}`);
      continue;
    }
    if (a.type === "user" && a.message) {
      if (a.isCompactSummary) {
        for (let l of ce(a.message.content))
          o.push(
            `[Summary of earlier conversation]: ${oe(l, t.userTextChars)}`,
          );
        continue;
      }
      if (!U3(a) || (typeof a.uuid === "string" && i.has(a.uuid))) continue;
      for (let l of ce(a.message.content))
        o.push(`[User]: ${oe(l, t.userTextChars)}`);
    } else if (a.type === "assistant" && a.message) {
      for (let l of ye(a.message.content))
        if (l.type === "text" && typeof l.text === "string")
          o.push(`[Assistant]: ${oe(l.text, t.assistantTextChars)}`);
        else if (l.type === "tool_use" && typeof l.name === "string")
          o.push(`[Tool: ${l.name}]`);
    }
  }
  return o;
}
function $e() {
  return getDefaultOpusModel();
}
function Le() {
  return getDefaultOpusModel();
}
var Ae = m(() =>
    c({
      session_id: s(),
      transcript_mtime: T().optional(),
      project_path: s(),
      start_time: s(),
      duration_minutes: T(),
      user_message_count: T(),
      assistant_message_count: T(),
      tool_counts: fe(s(), T()).optional(),
      languages: fe(s(), T()).optional(),
      git_commits: T(),
      git_pushes: T(),
      input_tokens: T(),
      output_tokens: T(),
      first_prompt: s(),
      summary: s().optional(),
      user_interruptions: T().optional(),
      user_response_times: v(T()).optional(),
      tool_errors: T().optional(),
      tool_error_categories: fe(s(), T()).optional(),
      uses_task_agent: O().optional(),
      uses_mcp: O().optional(),
      uses_web_search: O().optional(),
      uses_web_fetch: O().optional(),
      lines_added: T().optional(),
      lines_removed: T().optional(),
      files_modified: T().optional(),
      message_hours: v(T()).optional(),
      user_message_timestamps: v(s()).optional(),
    }),
  ),
  Ue = {
    ".ts": "TypeScript",
    ".tsx": "TypeScript",
    ".js": "JavaScript",
    ".jsx": "JavaScript",
    ".py": "Python",
    ".rb": "Ruby",
    ".go": "Go",
    ".rs": "Rust",
    ".java": "Java",
    ".c": "C",
    ".h": "C",
    ".cpp": "C++",
    ".cc": "C++",
    ".cxx": "C++",
    ".hpp": "C++",
    ".hh": "C++",
    ".hxx": "C++",
    ".ipp": "C++",
    ".md": "Markdown",
    ".json": "JSON",
    ".yaml": "YAML",
    ".yml": "YAML",
    ".sh": "Shell",
    ".css": "CSS",
    ".html": "HTML",
  },
  Be = {
    debug_investigate: "Debug/Investigate",
    implement_feature: "Implement Feature",
    fix_bug: "Fix Bug",
    write_script_tool: "Write Script/Tool",
    refactor_code: "Refactor Code",
    configure_system: "Configure System",
    create_pr_commit: "Create PR/Commit",
    analyze_data: "Analyze Data",
    understand_codebase: "Understand Codebase",
    write_tests: "Write Tests",
    write_docs: "Write Docs",
    deploy_infra: "Deploy/Infra",
    warmup_minimal: "Cache Warmup",
    fast_accurate_search: "Fast/Accurate Search",
    correct_code_edits: "Correct Code Edits",
    good_explanations: "Good Explanations",
    proactive_help: "Proactive Help",
    multi_file_changes: "Multi-file Changes",
    handled_complexity: "Multi-file Changes",
    good_debugging: "Good Debugging",
    misunderstood_request: "Misunderstood Request",
    wrong_approach: "Wrong Approach",
    buggy_code: "Buggy Code",
    user_rejected_action: "User Rejected Action",
    claude_got_blocked: "Claude Got Blocked",
    user_stopped_early: "User Stopped Early",
    wrong_file_or_location: "Wrong File/Location",
    excessive_changes: "Excessive Changes",
    slow_or_verbose: "Slow/Verbose",
    tool_failed: "Tool Failed",
    user_unclear: "User Unclear",
    external_issue: "External Issue",
    frustrated: "Frustrated",
    dissatisfied: "Dissatisfied",
    likely_satisfied: "Likely Satisfied",
    satisfied: "Satisfied",
    happy: "Happy",
    unsure: "Unsure",
    neutral: "Neutral",
    delighted: "Delighted",
    single_task: "Single Task",
    multi_task: "Multi Task",
    iterative_refinement: "Iterative Refinement",
    exploration: "Exploration",
    quick_question: "Quick Question",
    fully_achieved: "Fully Achieved",
    mostly_achieved: "Mostly Achieved",
    partially_achieved: "Partially Achieved",
    not_achieved: "Not Achieved",
    unclear_from_transcript: "Unclear",
    unhelpful: "Unhelpful",
    slightly_helpful: "Slightly Helpful",
    moderately_helpful: "Moderately Helpful",
    very_helpful: "Very Helpful",
    essential: "Essential",
  };
function se() {
  return q(be(), "usage-data");
}
function ae() {
  return q(se(), "facets");
}
function Ye() {
  return q(se(), "session-meta");
}
function ue(e) {
  return Ce.userConfigDir("usage-data", ["facets", `${e}.json`]);
}
function Ie(e) {
  return Ce.userConfigDir("usage-data", ["session-meta", `${e}.json`]);
}
function Ve(e) {
  return Ce.userConfigDir("usage-data", [e]);
}
async function Je(e, t, o) {
  let i = q(se(), `report-${t}.html`);
  if (M() && o) {
    for (let a of [`report-${t}.html`, "report.html"]) {
      let l = await o.write(Ve(a), e, { mode: 384, keepExistingMode: !0 });
      if (!l.ok)
        throw (
          n(`insights: report write failed: ${We(l.error)}`),
          Error("insights: report write through the storage backend failed")
        );
    }
    return i;
  }
  try {
    await mkdir(se(), { recursive: !0 });
  } catch {}
  return (
    await writeFile(i, e, { encoding: "utf-8", mode: 384 }),
    await writeFile(q(se(), "report.html"), e, { encoding: "utf-8", mode: 384 }),
    i
  );
}
function Ge(e) {
  if (e.code !== "Failed") return !1;
  return (
    e.failureClass === "permission" ||
    e.failureClass === "environment" ||
    e.telemetryCode === "UnexpectedAbsent" ||
    e.telemetryCode === "ENOENT"
  );
}
var xe = 50;
function we(e, t) {
  let o = [];
  for (let i = 0; i < e.length; i += t) o.push(e.slice(i, i + t));
  return o;
}
function Ee(e) {
  return T$(q(Ye(), `${e}.json`), () => Ae().nullable(), {
    defaultValue: null,
    ensureDir: !0,
    indent: 2,
    mode: 384,
  });
}
var qe = `Analyze this Claude Code session and extract structured facets.

CRITICAL GUIDELINES:

1. **goal_categories**: Count ONLY what the USER explicitly asked for.
   - DO NOT count Claude's autonomous codebase exploration
   - DO NOT count work Claude decided to do on its own
   - ONLY count when user says "can you...", "please...", "I need...", "let's..."

2. **user_satisfaction_counts**: Base ONLY on explicit user signals.
   - "Yay!", "great!", "perfect!" \u2192 happy
   - "thanks", "looks good", "that works" \u2192 satisfied
   - "ok, now let's..." (continuing without complaint) \u2192 likely_satisfied
   - "that's not right", "try again" \u2192 dissatisfied
   - "this is broken", "I give up" \u2192 frustrated

3. **friction_counts**: Be specific about what went wrong.
   - misunderstood_request: Claude interpreted incorrectly
   - wrong_approach: Right goal, wrong solution method
   - buggy_code: Code didn't work correctly
   - user_rejected_action: User said no/stop to a tool call
   - excessive_changes: Over-engineered or changed too much

4. If very short or just warmup, use warmup_minimal for goal_category

SESSION:
`;
function te(e) {
  return typeof e === "string" ? e : "";
}
var Ke = [
  [["exit code"], "Command Failed"],
  [["rejected", "doesn't want"], "User Rejected"],
  [["string to replace not found", "no changes"], "Edit Failed"],
  [["modified since read"], "File Changed"],
  [["exceeds maximum", "too large"], "File Too Large"],
  [["file not found", "does not exist"], "File Not Found"],
];
function Xe(e) {
  if (typeof e !== "string") return "Other";
  let t = e.toLowerCase();
  return Ke.find(([o]) => o.some((i) => t.includes(i)))?.[1] ?? "Other";
}
function Qe(e) {
  let t = {},
    o = {},
    i = 0,
    a = 0,
    l = 0,
    p = 0,
    r = 0,
    g = [],
    d = 0,
    f = {},
    w = !1,
    E = 0,
    x = 0,
    P = new Set(),
    j = [],
    U = [],
    H = !1,
    B = !1,
    y = !1,
    D = null;
  for (let W of e.messages) {
    let J = W.timestamp;
    if (W.type === "assistant" && W.message) {
      if (J) D = J;
      let N = W.message.usage;
      if (N) ((l += N.input_tokens || 0), (p += N.output_tokens || 0));
      let Y = W.message.content;
      if (Array.isArray(Y)) {
        for (let u of Y)
          if (u.type === "tool_use" && "name" in u) {
            let C = u.name;
            if (((t[C] = (t[C] || 0) + 1), C === mt || C === Vh)) w = !0;
            if (C.startsWith("mcp__")) H = !0;
            if (C === "WebSearch") B = !0;
            if (C === "WebFetch") y = !0;
            let S = u.input;
            if (S) {
              let Q = te(S.file_path);
              if (Q) {
                let L = Ue[extname(Q).toLowerCase()];
                if (L) o[L] = (o[L] || 0) + 1;
                if (C === "Edit" || C === "Write") P.add(Q);
              }
              if (C === "Edit") {
                let L = te(S.old_string),
                  K = te(S.new_string);
                for (let Z of vTe(L, K)) {
                  if (Z.added) E += Z.count || 0;
                  if (Z.removed) x += Z.count || 0;
                }
              }
              if (C === "Write") {
                let L = te(S.content);
                if (L)
                  E +=
                    ln(
                      L,
                      `
`,
                    ) + 1;
              }
              let ne = te(S.command);
              if (ne.includes("git commit")) i++;
              if (ne.includes("git push")) a++;
            }
          }
      }
    }
    if (W.type === "user" && W.message) {
      let N = W.message.content,
        Y = !1;
      if (typeof N === "string" && N.trim()) Y = !0;
      else if (Array.isArray(N)) {
        for (let u of N)
          if (u.type === "text" && "text" in u) {
            Y = !0;
            break;
          }
      }
      if (Y) {
        if (J) {
          let u = new Date(J);
          if (Number.isFinite(u.getTime())) {
            let C = u.getHours();
            (j.push(C), U.push(J));
          }
        }
        if (D && J) {
          let u = new Date(D).getTime(),
            S = (new Date(J).getTime() - u) / 1000;
          if (S > 2 && S < 3600) g.push(S);
        }
      }
      if (Array.isArray(N)) {
        for (let u of N)
          if (u.type === "tool_result" && "content" in u) {
            if (u.is_error) {
              d++;
              let S = Xe(u.content);
              f[S] = (f[S] || 0) + 1;
            }
          }
      }
      if (typeof N === "string") {
        if (N.includes("[Request interrupted by user")) r++;
      } else if (Array.isArray(N)) {
        for (let u of N)
          if (
            u.type === "text" &&
            "text" in u &&
            u.text.includes("[Request interrupted by user")
          ) {
            r++;
            break;
          }
      }
    }
  }
  return {
    toolCounts: t,
    languages: o,
    gitCommits: i,
    gitPushes: a,
    inputTokens: l,
    outputTokens: p,
    userInterruptions: r,
    userResponseTimes: g,
    toolErrors: d,
    toolErrorCategories: f,
    usesTaskAgent: w,
    usesMcp: H,
    usesWebSearch: B,
    usesWebFetch: y,
    linesAdded: E,
    linesRemoved: x,
    filesModified: P,
    messageHours: j,
    userMessageTimestamps: U,
  };
}
function pe(e) {
  let t = Qe(e),
    o = getSessionIdFromLog(e) || "unknown",
    i = e.created.toISOString(),
    a = Math.round((e.modified.getTime() - e.created.getTime()) / 1000 / 60),
    l = 0,
    p = 0;
  for (let r of e.messages) {
    if (r.type === "assistant") p++;
    if (r.type === "user" && r.message) {
      let g = r.message.content,
        d = !1;
      if (typeof g === "string" && g.trim()) d = !0;
      else if (Array.isArray(g)) {
        for (let f of g)
          if (f.type === "text" && "text" in f) {
            d = !0;
            break;
          }
      }
      if (d) l++;
    }
  }
  return {
    session_id: o,
    project_path: e.relocatedCwd ?? e.projectPath ?? "",
    start_time: i,
    duration_minutes: a,
    user_message_count: l,
    assistant_message_count: p,
    tool_counts: t.toolCounts,
    languages: t.languages,
    git_commits: t.gitCommits,
    git_pushes: t.gitPushes,
    input_tokens: t.inputTokens,
    output_tokens: t.outputTokens,
    first_prompt: e.firstPrompt || "",
    summary: e.summary,
    user_interruptions: t.userInterruptions,
    user_response_times: t.userResponseTimes,
    tool_errors: t.toolErrors,
    tool_error_categories: t.toolErrorCategories,
    uses_task_agent: t.usesTaskAgent,
    uses_mcp: t.usesMcp,
    uses_web_search: t.usesWebSearch,
    uses_web_fetch: t.usesWebFetch,
    lines_added: t.linesAdded,
    lines_removed: t.linesRemoved,
    files_modified: t.filesModified.size,
    message_hours: t.messageHours,
    user_message_timestamps: t.userMessageTimestamps,
  };
}
function ke(e, t) {
  if (!t) return !0;
  if (e.user_message_count !== t.user_message_count)
    return e.user_message_count > t.user_message_count;
  return e.duration_minutes > t.duration_minutes;
}
function Ze(e) {
  let t = [],
    o = pe(e);
  (t.push(`Session: ${o.session_id.slice(0, 8)}`),
    t.push(`Date: ${o.start_time}`),
    t.push(`Project: ${o.project_path}`),
    t.push(`Duration: ${o.duration_minutes} min`),
    t.push(""));
  for (let i of ve(e.messages, { userTextChars: 500, assistantTextChars: 300 }))
    t.push(i);
  return t.join(`
`);
}
var et = `Summarize this portion of a Claude Code session transcript. Focus on:
1. What the user asked for
2. What Claude did (tools used, files modified)
3. Any friction or issues
4. The outcome

Keep it concise - 3-5 sentences. Preserve specific details like file names, error messages, and user feedback.

TRANSCRIPT CHUNK:
`;
async function tt(e, t) {
  try {
    let o = await UY({
      systemPrompt: asSystemPrompt([]),
      userPrompt: et + e,
      signal: new AbortController().signal,
      options: {
        model: $e(),
        querySource: "insights",
        agents: [],
        isNonInteractiveSession: !0,
        hasAppendSystemPrompt: !1,
        mcpTools: [],
        maxOutputTokensOverride: 500,
        agentContext: aa(),
        credentials: t,
      },
    });
    if (o.isApiErrorMessage) return e.slice(0, 2000);
    return xr(o.message.content) || e.slice(0, 2000);
  } catch {
    return e.slice(0, 2000);
  }
}
async function st(e, t) {
  let o = Ze(e);
  if (o.length <= 30000) return o;
  let i = 25000,
    a = [];
  for (let g = 0; g < o.length; g += i) a.push(o.slice(g, g + i));
  let l = await Promise.all(a.map((g) => tt(g, t))),
    p = pe(e);
  return (
    [
      `Session: ${p.session_id.slice(0, 8)}`,
      `Date: ${p.start_time}`,
      `Project: ${p.project_path}`,
      `Duration: ${p.duration_minutes} min`,
      `[Long session - ${a.length} parts summarized]`,
      "",
    ].join(`
`) +
    l.join(`

---

`)
  );
}
async function ot(e, t) {
  if (t) {
    let [i] = await Re([e], t);
    return i ?? null;
  }
  let o = q(ae(), `${e}.json`);
  try {
    let i = await readFile(o, { encoding: "utf-8" }),
      a = z(i);
    if (!he(a)) {
      try {
        await unlink(o);
      } catch {}
      return null;
    }
    return a;
  } catch {
    return null;
  }
}
function Re(e, t) {
  return me(e, ue, t, async (o, i) => {
    let a;
    try {
      a = z(Buffer.from(o).toString("utf-8"));
    } catch {
      return null;
    }
    if (!he(a)) return (await t.delete(ue(i)), null);
    return a;
  });
}
async function nt(e, t) {
  try {
    await mkdir(ae(), { recursive: !0 });
  } catch {}
  if (M() && t) {
    let i = await t.write(ue(e.session_id), b(e, null, 2), {
      publishDiscipline: "inPlace",
      mode: 384,
    });
    if (!i.ok)
      throw (
        n(`saveFacets: cache write failed: ${We(i.error)}`),
        Error("saveFacets: cache write through the storage backend failed")
      );
    return;
  }
  let o = q(ae(), `${e.session_id}.json`);
  await writeFile(o, b(e, null, 2), { encoding: "utf-8", mode: 384 });
}
async function it(e, t) {
  if (t) {
    let [o] = await ze([e], t);
    return o ?? null;
  }
  try {
    let o = await Ee(e).read();
    return o === null ? null : je(o);
  } catch {
    return null;
  }
}
function ze(e, t) {
  return me(e, Ie, t, (o) => {
    try {
      let i = Ae()
        .nullable()
        .safeParse(z(Buffer.from(o).toString("utf-8")));
      return i.success && i.data !== null ? je(i.data) : null;
    } catch {
      return null;
    }
  });
}
async function me(e, t, o, i) {
  if (e.length === 0) return [];
  let a = await o.read(e.map(t));
  if (!a.ok && e.length > 1)
    return (await Promise.all(e.map((p) => me([p], t, o, i)))).map(
      ([p]) => p ?? null,
    );
  return Promise.all(
    e.map(async (l, p) => {
      let r = a.ok ? a.value.items[p] : void 0;
      return r?.found ? i(r.value, l) : null;
    }),
  );
}
function je(e) {
  return {
    ...e,
    tool_counts: e.tool_counts ?? {},
    languages: e.languages ?? {},
    tool_error_categories: e.tool_error_categories ?? {},
    user_response_times: e.user_response_times ?? [],
    message_hours: e.message_hours ?? [],
    user_message_timestamps: e.user_message_timestamps ?? [],
    user_interruptions: e.user_interruptions ?? 0,
    tool_errors: e.tool_errors ?? 0,
    lines_added: e.lines_added ?? 0,
    lines_removed: e.lines_removed ?? 0,
    files_modified: e.files_modified ?? 0,
    uses_task_agent: e.uses_task_agent ?? !1,
    uses_mcp: e.uses_mcp ?? !1,
    uses_web_search: e.uses_web_search ?? !1,
    uses_web_fetch: e.uses_web_fetch ?? !1,
  };
}
async function rt(e, t) {
  try {
    if (t) {
      let o = await t.write(Ie(e.session_id), b(e, null, 2), { mode: 384 });
      if (!o.ok) {
        let i = o.error;
        if (Ge(i)) n(`saveSessionMeta: cache write failed: ${We(i)}`);
        else
          logError(
            new R(
              `saveSessionMeta: cache write failed: ${We(i)}`,
              "insights session-meta cache write failed",
            ),
          );
      }
      return;
    }
    await Ee(e.session_id).write(e);
  } catch (o) {
    if (Rt(o)) {
      n(`saveSessionMeta: cache write failed: ${o}`);
      return;
    }
    logError(o);
  }
}
async function at(e, t, o) {
  try {
    let i = await st(e, o),
      a = `${qe}${i}

RESPOND WITH ONLY A VALID JSON OBJECT matching this schema:
{
  "underlying_goal": "What the user fundamentally wanted to achieve",
  "goal_categories": {"category_name": count, ...},
  "outcome": "fully_achieved|mostly_achieved|partially_achieved|not_achieved|unclear_from_transcript",
  "user_satisfaction_counts": {"level": count, ...},
  "claude_helpfulness": "unhelpful|slightly_helpful|moderately_helpful|very_helpful|essential",
  "session_type": "single_task|multi_task|iterative_refinement|exploration|quick_question",
  "friction_counts": {"friction_type": count, ...},
  "friction_detail": "One sentence describing friction or empty",
  "primary_success": "none|fast_accurate_search|correct_code_edits|good_explanations|proactive_help|multi_file_changes|good_debugging",
  "brief_summary": "One sentence: what user wanted and whether they got it"
}`,
      l = await UY({
        systemPrompt: asSystemPrompt([]),
        userPrompt: a,
        signal: new AbortController().signal,
        options: {
          model: $e(),
          querySource: "insights",
          agents: [],
          isNonInteractiveSession: !0,
          hasAppendSystemPrompt: !1,
          mcpTools: [],
          maxOutputTokensOverride: 4096,
          agentContext: aa(),
          credentials: o,
        },
      }),
      r = xr(l.message.content).match(/\{[\s\S]*\}/);
    if (!r) return null;
    let g = z(r[0]);
    if (!he(g)) return null;
    return { ...g, session_id: t };
  } catch (i) {
    return (
      n(`Facet extraction failed: ${ge(i).message}`, { level: "error" }),
      null
    );
  }
}
function ct(e) {
  let o = [];
  for (let g of e)
    for (let d of g.user_message_timestamps) {
      let f = new Date(d).getTime();
      if (!Number.isFinite(f)) continue;
      o.push({ ts: f, sessionId: g.session_id });
    }
  o.sort((g, d) => g.ts - d.ts);
  let i = new Set(),
    a = new Set(),
    l = 0,
    p = new Map();
  for (let g = 0; g < o.length; g++) {
    let d = o[g];
    while (l < g && d.ts - o[l].ts > 1800000) {
      let w = o[l];
      if (p.get(w.sessionId) === l) p.delete(w.sessionId);
      l++;
    }
    let f = p.get(d.sessionId);
    if (f !== void 0)
      for (let w = f + 1; w < g; w++) {
        let E = o[w];
        if (E.sessionId !== d.sessionId) {
          let x = [d.sessionId, E.sessionId].sort().join(":");
          (i.add(x),
            a.add(`${o[f].ts}:${d.sessionId}`),
            a.add(`${E.ts}:${E.sessionId}`),
            a.add(`${d.ts}:${d.sessionId}`));
          break;
        }
      }
    p.set(d.sessionId, g);
  }
  let r = new Set();
  for (let g of i) {
    let [d, f] = g.split(":");
    if (d) r.add(d);
    if (f) r.add(f);
  }
  return {
    overlap_events: i.size,
    sessions_involved: r.size,
    user_messages_during: a.size,
  };
}
function lt(e, t) {
  let o = {
      total_sessions: e.length,
      sessions_with_facets: t.size,
      date_range: { start: "", end: "" },
      total_messages: 0,
      total_duration_hours: 0,
      total_input_tokens: 0,
      total_output_tokens: 0,
      tool_counts: {},
      languages: {},
      git_commits: 0,
      git_pushes: 0,
      projects: {},
      goal_categories: {},
      outcomes: {},
      satisfaction: {},
      helpfulness: {},
      session_types: {},
      friction: {},
      success: {},
      session_summaries: [],
      total_interruptions: 0,
      total_tool_errors: 0,
      tool_error_categories: {},
      user_response_times: [],
      median_response_time: 0,
      avg_response_time: 0,
      sessions_using_task_agent: 0,
      sessions_using_mcp: 0,
      sessions_using_web_search: 0,
      sessions_using_web_fetch: 0,
      total_lines_added: 0,
      total_lines_removed: 0,
      total_files_modified: 0,
      days_active: 0,
      messages_per_day: 0,
      message_hours: [],
      multi_clauding: {
        overlap_events: 0,
        sessions_involved: 0,
        user_messages_during: 0,
      },
    },
    i = [],
    a = [],
    l = [];
  for (let r of e) {
    (i.push(r.start_time),
      (o.total_messages += r.user_message_count),
      (o.total_duration_hours += r.duration_minutes / 60),
      (o.total_input_tokens += r.input_tokens),
      (o.total_output_tokens += r.output_tokens),
      (o.git_commits += r.git_commits),
      (o.git_pushes += r.git_pushes),
      (o.total_interruptions += r.user_interruptions),
      (o.total_tool_errors += r.tool_errors));
    for (let [d, f] of Object.entries(r.tool_error_categories))
      o.tool_error_categories[d] = (o.tool_error_categories[d] || 0) + f;
    if ((a.push(...r.user_response_times), r.uses_task_agent))
      o.sessions_using_task_agent++;
    if (r.uses_mcp) o.sessions_using_mcp++;
    if (r.uses_web_search) o.sessions_using_web_search++;
    if (r.uses_web_fetch) o.sessions_using_web_fetch++;
    ((o.total_lines_added += r.lines_added),
      (o.total_lines_removed += r.lines_removed),
      (o.total_files_modified += r.files_modified),
      l.push(...r.message_hours));
    for (let [d, f] of Object.entries(r.tool_counts))
      o.tool_counts[d] = (o.tool_counts[d] || 0) + f;
    for (let [d, f] of Object.entries(r.languages))
      o.languages[d] = (o.languages[d] || 0) + f;
    if (r.project_path)
      o.projects[r.project_path] = (o.projects[r.project_path] || 0) + 1;
    let g = t.get(r.session_id);
    if (g) {
      for (let [d, f] of le(g.goal_categories))
        if (f > 0) o.goal_categories[d] = (o.goal_categories[d] || 0) + f;
      o.outcomes[g.outcome] = (o.outcomes[g.outcome] || 0) + 1;
      for (let [d, f] of le(g.user_satisfaction_counts))
        if (f > 0) o.satisfaction[d] = (o.satisfaction[d] || 0) + f;
      ((o.helpfulness[g.claude_helpfulness] =
        (o.helpfulness[g.claude_helpfulness] || 0) + 1),
        (o.session_types[g.session_type] =
          (o.session_types[g.session_type] || 0) + 1));
      for (let [d, f] of le(g.friction_counts))
        if (f > 0) o.friction[d] = (o.friction[d] || 0) + f;
      if (g.primary_success !== "none")
        o.success[g.primary_success] = (o.success[g.primary_success] || 0) + 1;
    }
    if (o.session_summaries.length < 50)
      o.session_summaries.push({
        id: r.session_id.slice(0, 8),
        date: ft(r.start_time, "T"),
        summary: r.summary || r.first_prompt.slice(0, 100),
        goal: g?.underlying_goal,
      });
  }
  if (
    (i.sort(),
    (o.date_range.start = ft(i[0] ?? "", "T")),
    (o.date_range.end = ft(i.at(-1) ?? "", "T")),
    (o.user_response_times = a),
    a.length > 0)
  ) {
    let r = [...a].sort((g, d) => g - d);
    ((o.median_response_time = r[Math.floor(r.length / 2)] || 0),
      (o.avg_response_time = a.reduce((g, d) => g + d, 0) / a.length));
  }
  let p = new Set(i.map((r) => ft(r, "T")));
  return (
    (o.days_active = p.size),
    (o.messages_per_day =
      o.days_active > 0
        ? Math.round((o.total_messages / o.days_active) * 10) / 10
        : 0),
    (o.message_hours = l),
    (o.multi_clauding = ct(e)),
    o
  );
}
var ut = [
  {
    name: "project_areas",
    prompt: `Analyze this Claude Code usage data and identify project areas.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "areas": [
    {"name": "Area name", "session_count": N, "description": "2-3 sentences about what was worked on and how Claude Code was used."}
  ]
}

Include 4-5 areas. Skip internal CC operations.`,
    maxTokens: 8192,
  },
  {
    name: "interaction_style",
    prompt: `Analyze this Claude Code usage data and describe the user's interaction style.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "narrative": "2-3 paragraphs analyzing HOW the user interacts with Claude Code. Use second person 'you'. Describe patterns: iterate quickly vs detailed upfront specs? Interrupt often or let Claude run? Include specific examples. Use **bold** for key insights.",
  "key_pattern": "One sentence summary of most distinctive interaction style"
}`,
    maxTokens: 8192,
  },
  {
    name: "what_works",
    prompt: `Analyze this Claude Code usage data and identify what's working well for this user. Use second person ("you").

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "intro": "1 sentence of context",
  "impressive_workflows": [
    {"title": "Short title (3-6 words)", "description": "2-3 sentences describing the impressive workflow or approach. Use 'you' not 'the user'."}
  ]
}

Include 3 impressive workflows.`,
    maxTokens: 8192,
  },
  {
    name: "friction_analysis",
    prompt: `Analyze this Claude Code usage data and identify friction points for this user. Use second person ("you").

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "intro": "1 sentence summarizing friction patterns",
  "categories": [
    {"category": "Concrete category name", "description": "1-2 sentences explaining this category and what could be done differently. Use 'you' not 'the user'.", "examples": ["Specific example with consequence", "Another example"]}
  ]
}

Include 3 friction categories with 2 examples each.`,
    maxTokens: 8192,
  },
  {
    name: "suggestions",
    prompt: `Analyze this Claude Code usage data and suggest improvements.

## CC FEATURES REFERENCE (pick from these for features_to_try):
1. **MCP Servers**: Connect Claude to external tools, databases, and APIs via Model Context Protocol.
   - How to use: Run \`claude mcp add <server-name> -- <command>\`
   - Good for: database queries, Slack integration, GitHub issue lookup, connecting to internal APIs

2. **Custom Skills**: Reusable prompts you define as markdown files that run with a single /command.
   - How to use: Create \`.claude/skills/commit/SKILL.md\` with instructions. Then type \`/commit\` to run it.
   - Good for: repetitive workflows - /commit, /review, /test, /deploy, /pr, or complex multi-step workflows

3. **Hooks**: Shell commands that auto-run at specific lifecycle events.
   - How to use: Add to \`.claude/settings.json\` under "hooks" key.
   - Good for: auto-formatting code, running type checks, enforcing conventions

4. **Headless Mode**: Run Claude non-interactively from scripts and CI/CD.
   - How to use: \`claude -p "fix lint errors" --allowedTools "Edit,Read,Bash"\`
   - Good for: CI/CD integration, batch code fixes, automated reviews

5. **Task Agents**: Claude spawns focused subagents for complex exploration or parallel work.
   - How to use: Claude auto-invokes when helpful, or ask "use an agent to explore X"
   - Good for: codebase exploration, understanding complex systems

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "claude_md_additions": [
    {"addition": "A specific line or block to add to CLAUDE.md based on workflow patterns. E.g., 'Always run tests after modifying auth-related files'", "why": "1 sentence explaining why this would help based on actual sessions", "prompt_scaffold": "Instructions for where to add this in CLAUDE.md. E.g., 'Add under ## Testing section'"}
  ],
  "features_to_try": [
    {"feature": "Feature name from CC FEATURES REFERENCE above", "one_liner": "What it does", "why_for_you": "Why this would help YOU based on your sessions", "example_code": "Actual command or config to copy"}
  ],
  "usage_patterns": [
    {"title": "Short title", "suggestion": "1-2 sentence summary", "detail": "3-4 sentences explaining how this applies to YOUR work", "copyable_prompt": "A specific prompt to copy and try"}
  ]
}

IMPORTANT for claude_md_additions: PRIORITIZE instructions that appear MULTIPLE TIMES in the user data. If user told Claude the same thing in 2+ sessions (e.g., 'always run tests', 'use TypeScript'), that's a PRIME candidate - they shouldn't have to repeat themselves.

IMPORTANT for features_to_try: Pick 2-3 from the CC FEATURES REFERENCE above. Include 2-3 items for each category.`,
    maxTokens: 8192,
  },
  {
    name: "on_the_horizon",
    prompt: `Analyze this Claude Code usage data and identify future opportunities.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "intro": "1 sentence about evolving AI-assisted development",
  "opportunities": [
    {"title": "Short title (4-8 words)", "whats_possible": "2-3 ambitious sentences about autonomous workflows", "how_to_try": "1-2 sentences mentioning relevant tooling", "copyable_prompt": "Detailed prompt to try"}
  ]
}

Include 3 opportunities. Think BIG - autonomous workflows, parallel agents, iterating against tests.`,
    maxTokens: 8192,
  },
  ...[],
  {
    name: "fun_ending",
    prompt: `Analyze this Claude Code usage data and find a memorable moment.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "headline": "A memorable QUALITATIVE moment from the transcripts - not a statistic. Something human, funny, or surprising.",
  "detail": "Brief context about when/where this happened"
}

Find something genuinely interesting or amusing from the session summaries.`,
    maxTokens: 8192,
  },
];
async function Se(e, t, o) {
  try {
    let i = await UY({
        systemPrompt: asSystemPrompt([]),
        userPrompt:
          e.prompt +
          `

DATA:
` +
          t,
        signal: new AbortController().signal,
        options: {
          model: Le(),
          querySource: "insights",
          agents: [],
          isNonInteractiveSession: !0,
          hasAppendSystemPrompt: !1,
          mcpTools: [],
          maxOutputTokensOverride: e.maxTokens,
          agentContext: aa(),
          credentials: o,
        },
      }),
      a = xr(i.message.content);
    if (a) {
      let l = a.match(/\{[\s\S]*\}/);
      if (l)
        try {
          return { name: e.name, result: z(l[0]) };
        } catch {
          return { name: e.name, result: null };
        }
    }
    return { name: e.name, result: null };
  } catch (i) {
    return (
      logError(
        dt(
          Error(`${e.name} failed: ${ge(i).message}`),
          "insight section query failed",
        ),
      ),
      { name: e.name, result: null }
    );
  }
}
async function pt(e, t, o) {
  let i = Array.from(t.values())
      .slice(0, 50)
      .map(
        (y) => `- ${y.brief_summary} (${y.outcome}, ${y.claude_helpfulness})`,
      ).join(`
`),
    a = Array.from(t.values())
      .filter((y) => y.friction_detail)
      .slice(0, 20)
      .map((y) => `- ${y.friction_detail}`).join(`
`),
    l = Array.from(t.values())
      .flatMap((y) => y.user_instructions_to_claude || [])
      .slice(0, 15)
      .map((y) => `- ${y}`).join(`
`),
    r =
      b(
        {
          sessions: e.total_sessions,
          analyzed: e.sessions_with_facets,
          date_range: e.date_range,
          messages: e.total_messages,
          hours: Math.round(e.total_duration_hours),
          commits: e.git_commits,
          top_tools: Object.entries(e.tool_counts)
            .sort((y, D) => D[1] - y[1])
            .slice(0, 8),
          top_goals: Object.entries(e.goal_categories)
            .sort((y, D) => D[1] - y[1])
            .slice(0, 8),
          outcomes: e.outcomes,
          satisfaction: e.satisfaction,
          friction: e.friction,
          success: e.success,
          languages: e.languages,
        },
        null,
        2,
      ) +
      `

SESSION SUMMARIES:
` +
      i +
      `

FRICTION DETAILS:
` +
      a +
      `

USER INSTRUCTIONS TO CLAUDE:
` +
      (l || "None captured"),
    g = await Promise.all(ut.map((y) => Se(y, r, o))),
    d = {};
  for (let { name: y, result: D } of g) if (D) d[y] = D;
  let f =
      d.project_areas?.areas?.map((y) => `- ${y.name}: ${y.description}`).join(`
`) || "",
    w =
      d.what_works?.impressive_workflows?.map(
        (y) => `- ${y.title}: ${y.description}`,
      ).join(`
`) || "",
    E =
      d.friction_analysis?.categories?.map(
        (y) => `- ${y.category}: ${y.description}`,
      ).join(`
`) || "",
    x =
      d.suggestions?.features_to_try?.map(
        (y) => `- ${y.feature}: ${y.one_liner}`,
      ).join(`
`) || "",
    P =
      d.suggestions?.usage_patterns?.map((y) => `- ${y.title}: ${y.suggestion}`)
        .join(`
`) || "",
    j =
      d.on_the_horizon?.opportunities?.map(
        (y) => `- ${y.title}: ${y.whats_possible}`,
      ).join(`
`) || "",
    H = {
      name: "at_a_glance",
      prompt: `You're writing an "At a Glance" summary for a Claude Code usage insights report for Claude Code users. The goal is to help them understand their usage and improve how they can use Claude better, especially as models improve.

Use this 4-part structure:

1. **What's working** - What is the user's unique style of interacting with Claude and what are some impactful things they've done? You can include one or two details, but keep it high level since things might not be fresh in the user's memory. Don't be fluffy or overly complimentary. Also, don't focus on the tool calls they use.

2. **What's hindering you** - Split into (a) Claude's fault (misunderstandings, wrong approaches, bugs) and (b) user-side friction (not providing enough context, environment issues -- ideally more general than just one project). Be honest but constructive.

3. **Quick wins to try** - Specific Claude Code features they could try from the examples below, or a workflow technique if you think it's really compelling. (Avoid stuff like "Ask Claude to confirm before taking actions" or "Type out more context up front" which are less compelling.)

4. **Ambitious workflows for better models** - As we move to much more capable models over the next 3-6 months, what should they prepare for? What workflows that seem impossible now will become possible? Draw from the appropriate section below.

Keep each section to 2-3 not-too-long sentences. Don't overwhelm the user. Don't mention specific numerical stats or underlined_categories from the session data below. Use a coaching tone.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "whats_working": "(refer to instructions above)",
  "whats_hindering": "(refer to instructions above)",
  "quick_wins": "(refer to instructions above)",
  "ambitious_workflows": "(refer to instructions above)"
}

SESSION DATA:
${r}

## Project Areas (what user works on)
${f}

## Big Wins (impressive accomplishments)
${w}

## Friction Categories (where things go wrong)
${E}

## Features to Try
${x}

## Usage Patterns to Adopt
${P}

## On the Horizon (ambitious workflows for better models)
${j}`,
      maxTokens: 8192,
    },
    B = await Se(H, "", o);
  if (B.result) d.at_a_glance = B.result;
  return d;
}
function re(e) {
  return go(e).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
var gt = [
    "frustrated",
    "dissatisfied",
    "likely_satisfied",
    "satisfied",
    "happy",
    "unsure",
  ],
  ht = [
    "not_achieved",
    "partially_achieved",
    "mostly_achieved",
    "fully_achieved",
    "unclear_from_transcript",
  ];
function G(e, t, o = 6, i) {
  let a;
  if (i)
    a = i.filter((p) => p in e && (e[p] ?? 0) > 0).map((p) => [p, e[p] ?? 0]);
  else
    a = Object.entries(e)
      .sort((p, r) => r[1] - p[1])
      .slice(0, o);
  if (a.length === 0) return '<p class="empty">No data</p>';
  let l = Math.max(...a.map((p) => p[1]));
  return a.map(([p, r]) => {
    let g = (r / l) * 100,
      d =
        Be[p] ||
        p.replaceAll("_", " ").replace(/\b\w/g, (f) => f.toUpperCase());
    return `<div class="bar-row">
        <div class="bar-label">${go(d)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${g}%;background:${t}"></div></div>
        <div class="bar-value">${r}</div>
      </div>`;
  }).join(`
`);
}
function _t(e) {
  if (e.length === 0) return '<p class="empty">No response time data</p>';
  let t = {
    "2-10s": 0,
    "10-30s": 0,
    "30s-1m": 0,
    "1-2m": 0,
    "2-5m": 0,
    "5-15m": 0,
    ">15m": 0,
  };
  for (let i of e)
    if (i < 10) t["2-10s"] = (t["2-10s"] ?? 0) + 1;
    else if (i < 30) t["10-30s"] = (t["10-30s"] ?? 0) + 1;
    else if (i < 60) t["30s-1m"] = (t["30s-1m"] ?? 0) + 1;
    else if (i < 120) t["1-2m"] = (t["1-2m"] ?? 0) + 1;
    else if (i < 300) t["2-5m"] = (t["2-5m"] ?? 0) + 1;
    else if (i < 900) t["5-15m"] = (t["5-15m"] ?? 0) + 1;
    else t[">15m"] = (t[">15m"] ?? 0) + 1;
  let o = Math.max(...Object.values(t));
  if (o === 0) return '<p class="empty">No response time data</p>';
  return Object.entries(t).map(([i, a]) => {
    let l = (a / o) * 100;
    return `<div class="bar-row">
        <div class="bar-label">${i}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${l}%;background:#6366f1"></div></div>
        <div class="bar-value">${a}</div>
      </div>`;
  }).join(`
`);
}
function bt(e) {
  if (e.length === 0) return '<p class="empty">No time data</p>';
  let t = [
      { label: "Morning (6-12)", range: [6, 7, 8, 9, 10, 11] },
      { label: "Afternoon (12-18)", range: [12, 13, 14, 15, 16, 17] },
      { label: "Evening (18-24)", range: [18, 19, 20, 21, 22, 23] },
      { label: "Night (0-6)", range: [0, 1, 2, 3, 4, 5] },
    ],
    o = {};
  for (let p of e) o[p] = (o[p] || 0) + 1;
  let i = t.map((p) => ({
      label: p.label,
      count: p.range.reduce((r, g) => r + (o[g] || 0), 0),
    })),
    a = Math.max(...i.map((p) => p.count)) || 1;
  return `<div id="hour-histogram">${i.map(
    (p) => `
      <div class="bar-row">
        <div class="bar-label">${p.label}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(p.count / a) * 100}%;background:#8b5cf6"></div></div>
        <div class="bar-value">${p.count}</div>
      </div>`,
  ).join(`
`)}</div>`;
}
function yt(e) {
  let t = {};
  for (let o of e) t[o] = (t[o] || 0) + 1;
  return b(t);
}
function vt(e, t) {
  let o = (u) => {
      if (!u) return "";
      return u
        .split(
          `

`,
        )
        .map((C) => {
          let S = go(C);
          return (
            (S = S.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")),
            (S = S.replace(/^- /gm, "\u2022 ")),
            (S = S.replaceAll(
              `
`,
              "<br>",
            )),
            `<p>${S}</p>`
          );
        }).join(`
`);
    },
    i = t.at_a_glance,
    a = i
      ? `
    <div class="at-a-glance">
      <div class="glance-title">At a Glance</div>
      <div class="glance-sections">
        ${i.whats_working ? `<div class="glance-section"><strong>What's working:</strong> ${re(i.whats_working)} <a href="#section-wins" class="see-more">Impressive Things You Did \u2192</a></div>` : ""}
        ${i.whats_hindering ? `<div class="glance-section"><strong>What's hindering you:</strong> ${re(i.whats_hindering)} <a href="#section-friction" class="see-more">Where Things Go Wrong \u2192</a></div>` : ""}
        ${i.quick_wins ? `<div class="glance-section"><strong>Quick wins to try:</strong> ${re(i.quick_wins)} <a href="#section-features" class="see-more">Features to Try \u2192</a></div>` : ""}
        ${i.ambitious_workflows ? `<div class="glance-section"><strong>Ambitious workflows:</strong> ${re(i.ambitious_workflows)} <a href="#section-horizon" class="see-more">On the Horizon \u2192</a></div>` : ""}
      </div>
    </div>
    `
      : "",
    l = t.project_areas?.areas || [],
    p =
      l.length > 0
        ? `
    <h2 id="section-work">What You Work On</h2>
    <div class="project-areas">
      ${l
        .map(
          (u) => `
        <div class="project-area">
          <div class="area-header">
            <span class="area-name">${go(u.name)}</span>
            <span class="area-count">~${u.session_count} sessions</span>
          </div>
          <div class="area-desc">${go(u.description)}</div>
        </div>
      `,
        )
        .join("")}
    </div>
    `
        : "",
    r = t.interaction_style,
    g = r?.narrative
      ? `
    <h2 id="section-usage">How You Use Claude Code</h2>
    <div class="narrative">
      ${o(r.narrative)}
      ${r.key_pattern ? `<div class="key-insight"><strong>Key pattern:</strong> ${go(r.key_pattern)}</div>` : ""}
    </div>
    `
      : "",
    d = t.what_works,
    f =
      d?.impressive_workflows && d.impressive_workflows.length > 0
        ? `
    <h2 id="section-wins">Impressive Things You Did</h2>
    ${d.intro ? `<p class="section-intro">${go(d.intro)}</p>` : ""}
    <div class="big-wins">
      ${d.impressive_workflows
        .map(
          (u) => `
        <div class="big-win">
          <div class="big-win-title">${go(u.title || "")}</div>
          <div class="big-win-desc">${go(u.description || "")}</div>
        </div>
      `,
        )
        .join("")}
    </div>
    `
        : "",
    w = t.friction_analysis,
    E =
      w?.categories && w.categories.length > 0
        ? `
    <h2 id="section-friction">Where Things Go Wrong</h2>
    ${w.intro ? `<p class="section-intro">${go(w.intro)}</p>` : ""}
    <div class="friction-categories">
      ${w.categories
        .map(
          (u) => `
        <div class="friction-category">
          <div class="friction-title">${go(u.category || "")}</div>
          <div class="friction-desc">${go(u.description || "")}</div>
          ${u.examples ? `<ul class="friction-examples">${u.examples.map((C) => `<li>${go(C)}</li>`).join("")}</ul>` : ""}
        </div>
      `,
        )
        .join("")}
    </div>
    `
        : "",
    x = t.suggestions,
    P = x
      ? `
    ${
      x.claude_md_additions && x.claude_md_additions.length > 0
        ? `
    <h2 id="section-features">Existing CC Features to Try</h2>
    <div class="claude-md-section">
      <h3>Suggested CLAUDE.md Additions</h3>
      <p style="font-size: 12px; color: #64748b; margin-bottom: 12px;">Just copy this into Claude Code to add it to your CLAUDE.md.</p>
      <div class="claude-md-actions">
        <button class="copy-all-btn" onclick="copyAllCheckedClaudeMd()">Copy All Checked</button>
      </div>
      ${x.claude_md_additions
        .map(
          (u, C) => `
        <div class="claude-md-item">
          <input type="checkbox" id="cmd-${C}" class="cmd-checkbox" checked data-text="${go(u.prompt_scaffold || u.where || "Add to CLAUDE.md")}\\n\\n${go(u.addition)}">
          <label for="cmd-${C}">
            <code class="cmd-code">${go(u.addition)}</code>
            <button class="copy-btn" onclick="copyCmdItem(${C})">Copy</button>
          </label>
          <div class="cmd-why">${go(u.why)}</div>
        </div>
      `,
        )
        .join("")}
    </div>
    `
        : ""
    }
    ${
      x.features_to_try && x.features_to_try.length > 0
        ? `
    <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Just copy this into Claude Code and it'll set it up for you.</p>
    <div class="features-section">
      ${x.features_to_try
        .map(
          (u) => `
        <div class="feature-card">
          <div class="feature-title">${go(u.feature || "")}</div>
          <div class="feature-oneliner">${go(u.one_liner || "")}</div>
          <div class="feature-why"><strong>Why for you:</strong> ${go(u.why_for_you || "")}</div>
          ${
            u.example_code
              ? `
          <div class="feature-examples">
            <div class="feature-example">
              <div class="example-code-row">
                <code class="example-code">${go(u.example_code)}</code>
                <button class="copy-btn" onclick="copyText(this)">Copy</button>
              </div>
            </div>
          </div>
          `
              : ""
          }
        </div>
      `,
        )
        .join("")}
    </div>
    `
        : ""
    }
    ${
      x.usage_patterns && x.usage_patterns.length > 0
        ? `
    <h2 id="section-patterns">New Ways to Use Claude Code</h2>
    <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Just copy this into Claude Code and it'll walk you through it.</p>
    <div class="patterns-section">
      ${x.usage_patterns
        .map(
          (u) => `
        <div class="pattern-card">
          <div class="pattern-title">${go(u.title || "")}</div>
          <div class="pattern-summary">${go(u.suggestion || "")}</div>
          ${u.detail ? `<div class="pattern-detail">${go(u.detail)}</div>` : ""}
          ${
            u.copyable_prompt
              ? `
          <div class="copyable-prompt-section">
            <div class="prompt-label">Paste into Claude Code:</div>
            <div class="copyable-prompt-row">
              <code class="copyable-prompt">${go(u.copyable_prompt)}</code>
              <button class="copy-btn" onclick="copyText(this)">Copy</button>
            </div>
          </div>
          `
              : ""
          }
        </div>
      `,
        )
        .join("")}
    </div>
    `
        : ""
    }
    `
      : "",
    j = t.on_the_horizon,
    U =
      j?.opportunities && j.opportunities.length > 0
        ? `
    <h2 id="section-horizon">On the Horizon</h2>
    ${j.intro ? `<p class="section-intro">${go(j.intro)}</p>` : ""}
    <div class="horizon-section">
      ${j.opportunities
        .map(
          (u) => `
        <div class="horizon-card">
          <div class="horizon-title">${go(u.title || "")}</div>
          <div class="horizon-possible">${go(u.whats_possible || "")}</div>
          ${u.how_to_try ? `<div class="horizon-tip"><strong>Getting started:</strong> ${go(u.how_to_try)}</div>` : ""}
          ${u.copyable_prompt ? `<div class="pattern-prompt"><div class="prompt-label">Paste into Claude Code:</div><code>${go(u.copyable_prompt)}</code><button class="copy-btn" onclick="copyText(this)">Copy</button></div>` : ""}
        </div>
      `,
        )
        .join("")}
    </div>
    `
        : "",
    H = [],
    B = [],
    y =
      H.length > 0 || B.length > 0
        ? `
    <h2 id="section-feedback" class="feedback-header">Closing the Loop: Feedback for Other Teams</h2>
    <p class="feedback-intro">Suggestions for the CC product and model teams based on your usage patterns. Click to expand.</p>
    ${
      H.length > 0
        ? `
    <div class="collapsible-section">
      <div class="collapsible-header" onclick="toggleCollapsible(this)">
        <span class="collapsible-arrow">\u25B6</span>
        <h3>Product Improvements for CC Team</h3>
      </div>
      <div class="collapsible-content">
        <div class="suggestions-section">
          ${H.map(
            (u) => `
            <div class="feedback-card team-card">
              <div class="feedback-title">${go(u.title || "")}</div>
              <div class="feedback-detail">${go(u.detail || "")}</div>
              ${u.evidence ? `<div class="feedback-evidence"><em>Evidence:</em> ${go(u.evidence)}</div>` : ""}
            </div>
          `,
          ).join("")}
        </div>
      </div>
    </div>
    `
        : ""
    }
    ${
      B.length > 0
        ? `
    <div class="collapsible-section">
      <div class="collapsible-header" onclick="toggleCollapsible(this)">
        <span class="collapsible-arrow">\u25B6</span>
        <h3>Model Behavior Improvements</h3>
      </div>
      <div class="collapsible-content">
        <div class="suggestions-section">
          ${B.map(
            (u) => `
            <div class="feedback-card model-card">
              <div class="feedback-title">${go(u.title || "")}</div>
              <div class="feedback-detail">${go(u.detail || "")}</div>
              ${u.evidence ? `<div class="feedback-evidence"><em>Evidence:</em> ${go(u.evidence)}</div>` : ""}
            </div>
          `,
          ).join("")}
        </div>
      </div>
    </div>
    `
        : ""
    }
    `
        : "",
    D = t.fun_ending,
    W = D?.headline
      ? `
    <div class="fun-ending">
      <div class="fun-headline">"${go(D.headline)}"</div>
      ${D.detail ? `<div class="fun-detail">${go(D.detail)}</div>` : ""}
    </div>
    `
      : "",
    J = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: #f8fafc; color: #334155; line-height: 1.65; padding: 48px 24px; }
    .container { max-width: 800px; margin: 0 auto; }
    h1 { font-size: 32px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
    h2 { font-size: 20px; font-weight: 600; color: #0f172a; margin-top: 48px; margin-bottom: 16px; }
    .subtitle { color: #64748b; font-size: 15px; margin-bottom: 32px; }
    .nav-toc { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0 32px 0; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0; }
    .nav-toc a { font-size: 12px; color: #64748b; text-decoration: none; padding: 6px 12px; border-radius: 6px; background: #f1f5f9; transition: all 0.15s; }
    .nav-toc a:hover { background: #e2e8f0; color: #334155; }
    .stats-row { display: flex; gap: 24px; margin-bottom: 40px; padding: 20px 0; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; flex-wrap: wrap; }
    .stat { text-align: center; }
    .stat-value { font-size: 24px; font-weight: 700; color: #0f172a; }
    .stat-label { font-size: 11px; color: #64748b; text-transform: uppercase; }
    .at-a-glance { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 1px solid #f59e0b; border-radius: 12px; padding: 20px 24px; margin-bottom: 32px; }
    .glance-title { font-size: 16px; font-weight: 700; color: #92400e; margin-bottom: 16px; }
    .glance-sections { display: flex; flex-direction: column; gap: 12px; }
    .glance-section { font-size: 14px; color: #78350f; line-height: 1.6; }
    .glance-section strong { color: #92400e; }
    .see-more { color: #b45309; text-decoration: none; font-size: 13px; white-space: nowrap; }
    .see-more:hover { text-decoration: underline; }
    .project-areas { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
    .project-area { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
    .area-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
    .area-name { font-weight: 600; font-size: 15px; color: #0f172a; }
    .area-count { font-size: 12px; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; }
    .area-desc { font-size: 14px; color: #475569; line-height: 1.5; }
    .narrative { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
    .narrative p { margin-bottom: 12px; font-size: 14px; color: #475569; line-height: 1.7; }
    .key-insight { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px 16px; margin-top: 12px; font-size: 14px; color: #166534; }
    .section-intro { font-size: 14px; color: #64748b; margin-bottom: 16px; }
    .big-wins { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
    .big-win { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; }
    .big-win-title { font-weight: 600; font-size: 15px; color: #166534; margin-bottom: 8px; }
    .big-win-desc { font-size: 14px; color: #15803d; line-height: 1.5; }
    .friction-categories { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
    .friction-category { background: #fef2f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 16px; }
    .friction-title { font-weight: 600; font-size: 15px; color: #991b1b; margin-bottom: 6px; }
    .friction-desc { font-size: 13px; color: #7f1d1d; margin-bottom: 10px; }
    .friction-examples { margin: 0 0 0 20px; font-size: 13px; color: #334155; }
    .friction-examples li { margin-bottom: 4px; }
    .claude-md-section { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 20px; }
    .claude-md-section h3 { font-size: 14px; font-weight: 600; color: #1e40af; margin: 0 0 12px 0; }
    .claude-md-actions { margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #dbeafe; }
    .copy-all-btn { background: #2563eb; color: white; border: none; border-radius: 4px; padding: 6px 12px; font-size: 12px; cursor: pointer; font-weight: 500; transition: all 0.2s; }
    .copy-all-btn:hover { background: #1d4ed8; }
    .copy-all-btn.copied { background: #16a34a; }
    .claude-md-item { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 8px; padding: 10px 0; border-bottom: 1px solid #dbeafe; }
    .claude-md-item:last-child { border-bottom: none; }
    .cmd-checkbox { margin-top: 2px; }
    .cmd-code { background: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; color: #1e40af; border: 1px solid #bfdbfe; font-family: monospace; display: block; white-space: pre-wrap; word-break: break-word; flex: 1; }
    .cmd-why { font-size: 12px; color: #64748b; width: 100%; padding-left: 24px; margin-top: 4px; }
    .features-section, .patterns-section { display: flex; flex-direction: column; gap: 12px; margin: 16px 0; }
    .feature-card { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px; }
    .pattern-card { background: #f0f9ff; border: 1px solid #7dd3fc; border-radius: 8px; padding: 16px; }
    .feature-title, .pattern-title { font-weight: 600; font-size: 15px; color: #0f172a; margin-bottom: 6px; }
    .feature-oneliner { font-size: 14px; color: #475569; margin-bottom: 8px; }
    .pattern-summary { font-size: 14px; color: #475569; margin-bottom: 8px; }
    .feature-why, .pattern-detail { font-size: 13px; color: #334155; line-height: 1.5; }
    .feature-examples { margin-top: 12px; }
    .feature-example { padding: 8px 0; border-top: 1px solid #d1fae5; }
    .feature-example:first-child { border-top: none; }
    .example-desc { font-size: 13px; color: #334155; margin-bottom: 6px; }
    .example-code-row { display: flex; align-items: flex-start; gap: 8px; }
    .example-code { flex: 1; background: #f1f5f9; padding: 8px 12px; border-radius: 4px; font-family: monospace; font-size: 12px; color: #334155; overflow-x: auto; white-space: pre-wrap; }
    .copyable-prompt-section { margin-top: 12px; padding-top: 12px; border-top: 1px solid #e2e8f0; }
    .copyable-prompt-row { display: flex; align-items: flex-start; gap: 8px; }
    .copyable-prompt { flex: 1; background: #f8fafc; padding: 10px 12px; border-radius: 4px; font-family: monospace; font-size: 12px; color: #334155; border: 1px solid #e2e8f0; white-space: pre-wrap; line-height: 1.5; }
    .feature-code { background: #f8fafc; padding: 12px; border-radius: 6px; margin-top: 12px; border: 1px solid #e2e8f0; display: flex; align-items: flex-start; gap: 8px; }
    .feature-code code { flex: 1; font-family: monospace; font-size: 12px; color: #334155; white-space: pre-wrap; }
    .pattern-prompt { background: #f8fafc; padding: 12px; border-radius: 6px; margin-top: 12px; border: 1px solid #e2e8f0; }
    .pattern-prompt code { font-family: monospace; font-size: 12px; color: #334155; display: block; white-space: pre-wrap; margin-bottom: 8px; }
    .prompt-label { font-size: 11px; font-weight: 600; text-transform: uppercase; color: #64748b; margin-bottom: 6px; }
    .copy-btn { background: #e2e8f0; border: none; border-radius: 4px; padding: 4px 8px; font-size: 11px; cursor: pointer; color: #475569; flex-shrink: 0; }
    .copy-btn:hover { background: #cbd5e1; }
    .charts-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0; }
    .chart-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
    .chart-title { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; margin-bottom: 12px; }
    .bar-row { display: flex; align-items: center; margin-bottom: 6px; }
    .bar-label { width: 100px; font-size: 11px; color: #475569; flex-shrink: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .bar-track { flex: 1; height: 6px; background: #f1f5f9; border-radius: 3px; margin: 0 8px; }
    .bar-fill { height: 100%; border-radius: 3px; }
    .bar-value { width: 28px; font-size: 11px; font-weight: 500; color: #64748b; text-align: right; }
    .empty { color: #94a3b8; font-size: 13px; }
    .horizon-section { display: flex; flex-direction: column; gap: 16px; }
    .horizon-card { background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%); border: 1px solid #c4b5fd; border-radius: 8px; padding: 16px; }
    .horizon-title { font-weight: 600; font-size: 15px; color: #5b21b6; margin-bottom: 8px; }
    .horizon-possible { font-size: 14px; color: #334155; margin-bottom: 10px; line-height: 1.5; }
    .horizon-tip { font-size: 13px; color: #6b21a8; background: rgba(255,255,255,0.6); padding: 8px 12px; border-radius: 4px; }
    .feedback-header { margin-top: 48px; color: #64748b; font-size: 16px; }
    .feedback-intro { font-size: 13px; color: #94a3b8; margin-bottom: 16px; }
    .feedback-section { margin-top: 16px; }
    .feedback-section h3 { font-size: 14px; font-weight: 600; color: #475569; margin-bottom: 12px; }
    .feedback-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 12px; }
    .feedback-card.team-card { background: #eff6ff; border-color: #bfdbfe; }
    .feedback-card.model-card { background: #faf5ff; border-color: #e9d5ff; }
    .feedback-title { font-weight: 600; font-size: 14px; color: #0f172a; margin-bottom: 6px; }
    .feedback-detail { font-size: 13px; color: #475569; line-height: 1.5; }
    .feedback-evidence { font-size: 12px; color: #64748b; margin-top: 8px; }
    .fun-ending { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 1px solid #fbbf24; border-radius: 12px; padding: 24px; margin-top: 40px; text-align: center; }
    .fun-headline { font-size: 18px; font-weight: 600; color: #78350f; margin-bottom: 8px; }
    .fun-detail { font-size: 14px; color: #92400e; }
    .collapsible-section { margin-top: 16px; }
    .collapsible-header { display: flex; align-items: center; gap: 8px; cursor: pointer; padding: 12px 0; border-bottom: 1px solid #e2e8f0; }
    .collapsible-header h3 { margin: 0; font-size: 14px; font-weight: 600; color: #475569; }
    .collapsible-arrow { font-size: 12px; color: #94a3b8; transition: transform 0.2s; }
    .collapsible-content { display: none; padding-top: 16px; }
    .collapsible-content.open { display: block; }
    .collapsible-header.open .collapsible-arrow { transform: rotate(90deg); }
    @media (max-width: 640px) { .charts-row { grid-template-columns: 1fr; } .stats-row { justify-content: center; } }
  `,
    Y = `
    function toggleCollapsible(header) {
      header.classList.toggle('open');
      const content = header.nextElementSibling;
      content.classList.toggle('open');
    }
    function copyText(btn) {
      const code = btn.previousElementSibling;
      navigator.clipboard.writeText(code.textContent).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      });
    }
    function copyCmdItem(idx) {
      const checkbox = document.getElementById('cmd-' + idx);
      if (checkbox) {
        const text = checkbox.dataset.text;
        navigator.clipboard.writeText(text).then(() => {
          const btn = checkbox.nextElementSibling.querySelector('.copy-btn');
          if (btn) { btn.textContent = 'Copied!'; setTimeout(() => { btn.textContent = 'Copy'; }, 2000); }
        });
      }
    }
    function copyAllCheckedClaudeMd() {
      const checkboxes = document.querySelectorAll('.cmd-checkbox:checked');
      const texts = [];
      checkboxes.forEach(cb => {
        if (cb.dataset.text) { texts.push(cb.dataset.text); }
      });
      const combined = texts.join('\\n');
      const btn = document.querySelector('.copy-all-btn');
      if (btn) {
        navigator.clipboard.writeText(combined).then(() => {
          btn.textContent = 'Copied ' + texts.length + ' items!';
          btn.classList.add('copied');
          setTimeout(() => { btn.textContent = 'Copy All Checked'; btn.classList.remove('copied'); }, 2000);
        });
      }
    }
    // Timezone selector for time of day chart (data is from our own analytics, not user input)
    const rawHourCounts = ${yt(e.message_hours)};
    function updateHourHistogram(offsetFromPT) {
      const periods = [
        { label: "Morning (6-12)", range: [6,7,8,9,10,11] },
        { label: "Afternoon (12-18)", range: [12,13,14,15,16,17] },
        { label: "Evening (18-24)", range: [18,19,20,21,22,23] },
        { label: "Night (0-6)", range: [0,1,2,3,4,5] }
      ];
      const adjustedCounts = {};
      for (const [hour, count] of Object.entries(rawHourCounts)) {
        const newHour = (parseInt(hour) + offsetFromPT + 24) % 24;
        adjustedCounts[newHour] = (adjustedCounts[newHour] || 0) + count;
      }
      const periodCounts = periods.map(p => ({
        label: p.label,
        count: p.range.reduce((sum, h) => sum + (adjustedCounts[h] || 0), 0)
      }));
      const maxCount = Math.max(...periodCounts.map(p => p.count)) || 1;
      const container = document.getElementById('hour-histogram');
      container.textContent = '';
      periodCounts.forEach(p => {
        const row = document.createElement('div');
        row.className = 'bar-row';
        const label = document.createElement('div');
        label.className = 'bar-label';
        label.textContent = p.label;
        const track = document.createElement('div');
        track.className = 'bar-track';
        const fill = document.createElement('div');
        fill.className = 'bar-fill';
        fill.style.width = (p.count / maxCount) * 100 + '%';
        fill.style.background = '#8b5cf6';
        track.appendChild(fill);
        const value = document.createElement('div');
        value.className = 'bar-value';
        value.textContent = p.count;
        row.appendChild(label);
        row.appendChild(track);
        row.appendChild(value);
        container.appendChild(row);
      });
    }
    document.getElementById('timezone-select').addEventListener('change', function() {
      const customInput = document.getElementById('custom-offset');
      if (this.value === 'custom') {
        customInput.style.display = 'inline-block';
        customInput.focus();
      } else {
        customInput.style.display = 'none';
        updateHourHistogram(parseInt(this.value));
      }
    });
    document.getElementById('custom-offset').addEventListener('change', function() {
      const parsed = parseInt(this.value, 10);
      if (isNaN(parsed)) return;
      updateHourHistogram(parsed + 8);
    });
  `;
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Claude Code Insights</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: #f8fafc; color: #334155; line-height: 1.65; padding: 48px 24px; }
    .container { max-width: 800px; margin: 0 auto; }
    h1 { font-size: 32px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
    h2 { font-size: 20px; font-weight: 600; color: #0f172a; margin-top: 48px; margin-bottom: 16px; }
    .subtitle { color: #64748b; font-size: 15px; margin-bottom: 32px; }
    .nav-toc { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0 32px 0; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0; }
    .nav-toc a { font-size: 12px; color: #64748b; text-decoration: none; padding: 6px 12px; border-radius: 6px; background: #f1f5f9; transition: all 0.15s; }
    .nav-toc a:hover { background: #e2e8f0; color: #334155; }
    .stats-row { display: flex; gap: 24px; margin-bottom: 40px; padding: 20px 0; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; flex-wrap: wrap; }
    .stat { text-align: center; }
    .stat-value { font-size: 24px; font-weight: 700; color: #0f172a; }
    .stat-label { font-size: 11px; color: #64748b; text-transform: uppercase; }
    .at-a-glance { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 1px solid #f59e0b; border-radius: 12px; padding: 20px 24px; margin-bottom: 32px; }
    .glance-title { font-size: 16px; font-weight: 700; color: #92400e; margin-bottom: 16px; }
    .glance-sections { display: flex; flex-direction: column; gap: 12px; }
    .glance-section { font-size: 14px; color: #78350f; line-height: 1.6; }
    .glance-section strong { color: #92400e; }
    .see-more { color: #b45309; text-decoration: none; font-size: 13px; white-space: nowrap; }
    .see-more:hover { text-decoration: underline; }
    .project-areas { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
    .project-area { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
    .area-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
    .area-name { font-weight: 600; font-size: 15px; color: #0f172a; }
    .area-count { font-size: 12px; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; }
    .area-desc { font-size: 14px; color: #475569; line-height: 1.5; }
    .narrative { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
    .narrative p { margin-bottom: 12px; font-size: 14px; color: #475569; line-height: 1.7; }
    .key-insight { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px 16px; margin-top: 12px; font-size: 14px; color: #166534; }
    .section-intro { font-size: 14px; color: #64748b; margin-bottom: 16px; }
    .big-wins { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
    .big-win { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; }
    .big-win-title { font-weight: 600; font-size: 15px; color: #166534; margin-bottom: 8px; }
    .big-win-desc { font-size: 14px; color: #15803d; line-height: 1.5; }
    .friction-categories { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
    .friction-category { background: #fef2f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 16px; }
    .friction-title { font-weight: 600; font-size: 15px; color: #991b1b; margin-bottom: 6px; }
    .friction-desc { font-size: 13px; color: #7f1d1d; margin-bottom: 10px; }
    .friction-examples { margin: 0 0 0 20px; font-size: 13px; color: #334155; }
    .friction-examples li { margin-bottom: 4px; }
    .claude-md-section { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 20px; }
    .claude-md-section h3 { font-size: 14px; font-weight: 600; color: #1e40af; margin: 0 0 12px 0; }
    .claude-md-actions { margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #dbeafe; }
    .copy-all-btn { background: #2563eb; color: white; border: none; border-radius: 4px; padding: 6px 12px; font-size: 12px; cursor: pointer; font-weight: 500; transition: all 0.2s; }
    .copy-all-btn:hover { background: #1d4ed8; }
    .copy-all-btn.copied { background: #16a34a; }
    .claude-md-item { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 8px; padding: 10px 0; border-bottom: 1px solid #dbeafe; }
    .claude-md-item:last-child { border-bottom: none; }
    .cmd-checkbox { margin-top: 2px; }
    .cmd-code { background: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; color: #1e40af; border: 1px solid #bfdbfe; font-family: monospace; display: block; white-space: pre-wrap; word-break: break-word; flex: 1; }
    .cmd-why { font-size: 12px; color: #64748b; width: 100%; padding-left: 24px; margin-top: 4px; }
    .features-section, .patterns-section { display: flex; flex-direction: column; gap: 12px; margin: 16px 0; }
    .feature-card { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px; }
    .pattern-card { background: #f0f9ff; border: 1px solid #7dd3fc; border-radius: 8px; padding: 16px; }
    .feature-title, .pattern-title { font-weight: 600; font-size: 15px; color: #0f172a; margin-bottom: 6px; }
    .feature-oneliner { font-size: 14px; color: #475569; margin-bottom: 8px; }
    .pattern-summary { font-size: 14px; color: #475569; margin-bottom: 8px; }
    .feature-why, .pattern-detail { font-size: 13px; color: #334155; line-height: 1.5; }
    .feature-examples { margin-top: 12px; }
    .feature-example { padding: 8px 0; border-top: 1px solid #d1fae5; }
    .feature-example:first-child { border-top: none; }
    .example-desc { font-size: 13px; color: #334155; margin-bottom: 6px; }
    .example-code-row { display: flex; align-items: flex-start; gap: 8px; }
    .example-code { flex: 1; background: #f1f5f9; padding: 8px 12px; border-radius: 4px; font-family: monospace; font-size: 12px; color: #334155; overflow-x: auto; white-space: pre-wrap; }
    .copyable-prompt-section { margin-top: 12px; padding-top: 12px; border-top: 1px solid #e2e8f0; }
    .copyable-prompt-row { display: flex; align-items: flex-start; gap: 8px; }
    .copyable-prompt { flex: 1; background: #f8fafc; padding: 10px 12px; border-radius: 4px; font-family: monospace; font-size: 12px; color: #334155; border: 1px solid #e2e8f0; white-space: pre-wrap; line-height: 1.5; }
    .feature-code { background: #f8fafc; padding: 12px; border-radius: 6px; margin-top: 12px; border: 1px solid #e2e8f0; display: flex; align-items: flex-start; gap: 8px; }
    .feature-code code { flex: 1; font-family: monospace; font-size: 12px; color: #334155; white-space: pre-wrap; }
    .pattern-prompt { background: #f8fafc; padding: 12px; border-radius: 6px; margin-top: 12px; border: 1px solid #e2e8f0; }
    .pattern-prompt code { font-family: monospace; font-size: 12px; color: #334155; display: block; white-space: pre-wrap; margin-bottom: 8px; }
    .prompt-label { font-size: 11px; font-weight: 600; text-transform: uppercase; color: #64748b; margin-bottom: 6px; }
    .copy-btn { background: #e2e8f0; border: none; border-radius: 4px; padding: 4px 8px; font-size: 11px; cursor: pointer; color: #475569; flex-shrink: 0; }
    .copy-btn:hover { background: #cbd5e1; }
    .charts-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0; }
    .chart-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
    .chart-title { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; margin-bottom: 12px; }
    .bar-row { display: flex; align-items: center; margin-bottom: 6px; }
    .bar-label { width: 100px; font-size: 11px; color: #475569; flex-shrink: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .bar-track { flex: 1; height: 6px; background: #f1f5f9; border-radius: 3px; margin: 0 8px; }
    .bar-fill { height: 100%; border-radius: 3px; }
    .bar-value { width: 28px; font-size: 11px; font-weight: 500; color: #64748b; text-align: right; }
    .empty { color: #94a3b8; font-size: 13px; }
    .horizon-section { display: flex; flex-direction: column; gap: 16px; }
    .horizon-card { background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%); border: 1px solid #c4b5fd; border-radius: 8px; padding: 16px; }
    .horizon-title { font-weight: 600; font-size: 15px; color: #5b21b6; margin-bottom: 8px; }
    .horizon-possible { font-size: 14px; color: #334155; margin-bottom: 10px; line-height: 1.5; }
    .horizon-tip { font-size: 13px; color: #6b21a8; background: rgba(255,255,255,0.6); padding: 8px 12px; border-radius: 4px; }
    .feedback-header { margin-top: 48px; color: #64748b; font-size: 16px; }
    .feedback-intro { font-size: 13px; color: #94a3b8; margin-bottom: 16px; }
    .feedback-section { margin-top: 16px; }
    .feedback-section h3 { font-size: 14px; font-weight: 600; color: #475569; margin-bottom: 12px; }
    .feedback-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 12px; }
    .feedback-card.team-card { background: #eff6ff; border-color: #bfdbfe; }
    .feedback-card.model-card { background: #faf5ff; border-color: #e9d5ff; }
    .feedback-title { font-weight: 600; font-size: 14px; color: #0f172a; margin-bottom: 6px; }
    .feedback-detail { font-size: 13px; color: #475569; line-height: 1.5; }
    .feedback-evidence { font-size: 12px; color: #64748b; margin-top: 8px; }
    .fun-ending { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 1px solid #fbbf24; border-radius: 12px; padding: 24px; margin-top: 40px; text-align: center; }
    .fun-headline { font-size: 18px; font-weight: 600; color: #78350f; margin-bottom: 8px; }
    .fun-detail { font-size: 14px; color: #92400e; }
    .collapsible-section { margin-top: 16px; }
    .collapsible-header { display: flex; align-items: center; gap: 8px; cursor: pointer; padding: 12px 0; border-bottom: 1px solid #e2e8f0; }
    .collapsible-header h3 { margin: 0; font-size: 14px; font-weight: 600; color: #475569; }
    .collapsible-arrow { font-size: 12px; color: #94a3b8; transition: transform 0.2s; }
    .collapsible-content { display: none; padding-top: 16px; }
    .collapsible-content.open { display: block; }
    .collapsible-header.open .collapsible-arrow { transform: rotate(90deg); }
    @media (max-width: 640px) { .charts-row { grid-template-columns: 1fr; } .stats-row { justify-content: center; } }
  </style>
</head>
<body>
  <div class="container">
    <h1>Claude Code Insights</h1>
    <p class="subtitle">${e.total_messages.toLocaleString()} messages across ${e.total_sessions} sessions${e.total_sessions_scanned && e.total_sessions_scanned > e.total_sessions ? ` (${e.total_sessions_scanned.toLocaleString()} total)` : ""} | ${e.date_range.start} to ${e.date_range.end}</p>

    ${a}

    <nav class="nav-toc">
      <a href="#section-work">What You Work On</a>
      <a href="#section-usage">How You Use CC</a>
      <a href="#section-wins">Impressive Things</a>
      <a href="#section-friction">Where Things Go Wrong</a>
      <a href="#section-features">Features to Try</a>
      <a href="#section-patterns">New Usage Patterns</a>
      <a href="#section-horizon">On the Horizon</a>
      <a href="#section-feedback">Team Feedback</a>
    </nav>

    <div class="stats-row">
      <div class="stat"><div class="stat-value">${e.total_messages.toLocaleString()}</div><div class="stat-label">Messages</div></div>
      <div class="stat"><div class="stat-value">+${e.total_lines_added.toLocaleString()}/-${e.total_lines_removed.toLocaleString()}</div><div class="stat-label">Lines</div></div>
      <div class="stat"><div class="stat-value">${e.total_files_modified}</div><div class="stat-label">Files</div></div>
      <div class="stat"><div class="stat-value">${e.days_active}</div><div class="stat-label">Days</div></div>
      <div class="stat"><div class="stat-value">${e.messages_per_day}</div><div class="stat-label">Msgs/Day</div></div>
    </div>

    ${p}

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">What You Wanted</div>
        ${G(e.goal_categories, "#2563eb")}
      </div>
      <div class="chart-card">
        <div class="chart-title">Top Tools Used</div>
        ${G(e.tool_counts, "#0891b2")}
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Languages</div>
        ${G(e.languages, "#10b981")}
      </div>
      <div class="chart-card">
        <div class="chart-title">Session Types</div>
        ${G(e.session_types || {}, "#8b5cf6")}
      </div>
    </div>

    ${g}

    <!-- Response Time Distribution -->
    <div class="chart-card" style="margin: 24px 0;">
      <div class="chart-title">User Response Time Distribution</div>
      ${_t(e.user_response_times)}
      <div style="font-size: 12px; color: #64748b; margin-top: 8px;">
        Median: ${e.median_response_time.toFixed(1)}s &bull; Average: ${e.avg_response_time.toFixed(1)}s
      </div>
    </div>

    <!-- Multi-clauding Section (matching Python reference) -->
    <div class="chart-card" style="margin: 24px 0;">
      <div class="chart-title">Multi-Clauding (Parallel Sessions)</div>
      ${
        e.multi_clauding.overlap_events === 0
          ? `
        <p style="font-size: 14px; color: #64748b; padding: 8px 0;">
          No parallel session usage detected. You typically work with one Claude Code session at a time.
        </p>
      `
          : `
        <div style="display: flex; gap: 24px; margin: 12px 0;">
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: 700; color: #7c3aed;">${e.multi_clauding.overlap_events}</div>
            <div style="font-size: 11px; color: #64748b; text-transform: uppercase;">Overlap Events</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: 700; color: #7c3aed;">${e.multi_clauding.sessions_involved}</div>
            <div style="font-size: 11px; color: #64748b; text-transform: uppercase;">Sessions Involved</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: 700; color: #7c3aed;">${e.total_messages > 0 ? Math.round((100 * e.multi_clauding.user_messages_during) / e.total_messages) : 0}%</div>
            <div style="font-size: 11px; color: #64748b; text-transform: uppercase;">Of Messages</div>
          </div>
        </div>
        <p style="font-size: 13px; color: #475569; margin-top: 12px;">
          You run multiple Claude Code sessions simultaneously. Multi-clauding is detected when sessions
          overlap in time, suggesting parallel workflows.
        </p>
      `
      }
    </div>

    <!-- Time of Day & Tool Errors -->
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title" style="display: flex; align-items: center; gap: 12px;">
          User Messages by Time of Day
          <select id="timezone-select" style="font-size: 12px; padding: 4px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">
            <option value="0">PT (UTC-8)</option>
            <option value="3">ET (UTC-5)</option>
            <option value="8">London (UTC)</option>
            <option value="9">CET (UTC+1)</option>
            <option value="17">Tokyo (UTC+9)</option>
            <option value="custom">Custom offset...</option>
          </select>
          <input type="number" id="custom-offset" placeholder="UTC offset" style="display: none; width: 80px; font-size: 12px; padding: 4px; border-radius: 4px; border: 1px solid #e2e8f0;">
        </div>
        ${bt(e.message_hours)}
      </div>
      <div class="chart-card">
        <div class="chart-title">Tool Errors Encountered</div>
        ${Object.keys(e.tool_error_categories).length > 0 ? G(e.tool_error_categories, "#dc2626") : '<p class="empty">No tool errors</p>'}
      </div>
    </div>

    ${f}

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">What Helped Most (Claude's Capabilities)</div>
        ${G(e.success, "#16a34a")}
      </div>
      <div class="chart-card">
        <div class="chart-title">Outcomes</div>
        ${G(e.outcomes, "#8b5cf6", 6, ht)}
      </div>
    </div>

    ${E}

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Primary Friction Types</div>
        ${G(e.friction, "#dc2626")}
      </div>
      <div class="chart-card">
        <div class="chart-title">Inferred Satisfaction (model-estimated)</div>
        ${G(e.satisfaction, "#eab308", 6, gt)}
      </div>
    </div>

    ${P}

    ${U}

    ${W}

    ${y}
  </div>
  <script>${Y}</script>
</body>
</html>`;
}
async function xt(e) {
  if (e) {
    let l = [];
    switch (
      (
        await Qo(
          (f) =>
            e.listEntries(
              { namespace: "transcript" },
              f ? { cursor: f } : void 0,
            ),
          (f) => {
            for (let w of f)
              if (
                w.kind === "scope" &&
                w.scope.namespace === "transcript" &&
                w.scope.projectKey !== void 0
              )
                l.push(w.scope.projectKey);
          },
        )
      ).status
    ) {
      case "done":
        break;
      case "error":
        return [];
      case "capped":
        n(
          `insights: project listing truncated at ${Uc} pages; scanning the ${l.length} projects seen`,
          { level: "warn" },
        );
        break;
    }
    let r = [],
      g = { pagesLeft: Uc },
      d = 0;
    for (let f = 0; f < l.length; f++) {
      let w = l[f];
      switch (
        (
          await Qo(
            (x) =>
              e.listEntries(
                { namespace: "transcript", projectKey: w },
                x ? { cursor: x } : void 0,
              ),
            (x) => {
              for (let P of x) {
                if (P.kind !== "key" || P.key.namespace !== "transcript")
                  continue;
                if (
                  P.key.agentId !== void 0 ||
                  P.key.journal === !0 ||
                  P.key.projectKey !== w
                )
                  continue;
                let j = Xn(P.key.sessionId);
                if (!j) continue;
                r.push({
                  sessionId: j,
                  key: Ce.transcript(w, j),
                  mtime: P.mtimeMs ?? 0,
                  size: P.size ?? 0,
                });
              }
            },
            { budget: g },
          )
        ).status
      ) {
        case "done":
          break;
        case "error":
          break;
        case "capped":
          if (d === 0)
            n(
              `insights: session listing for project ${w} truncated (the scan's ${Uc}-page session-listing budget is spent); keeping the sessions seen`,
              { level: "warn" },
            );
          d++;
          break;
      }
      if (f % 10 === 9) await new Promise((x) => setImmediate(x));
    }
    if (d > 1)
      n(
        `insights: ${d - 1} more ${d === 2 ? "project was" : "projects were"} left without a session listing after the scan's budget ran out`,
        { level: "warn" },
      );
    return (r.sort((f, w) => w.mtime - f.mtime), r);
  }
  let t = Pl(),
    o;
  try {
    o = await readdir(t, { withFileTypes: !0 });
  } catch {
    return [];
  }
  let i = o.filter((l) => l.isDirectory()).map((l) => q(t, l.name)),
    a = [];
  for (let l = 0; l < i.length; l++) {
    let p = await getSessionFilesWithMtime(i[l]);
    for (let [r, g] of p)
      a.push({ sessionId: r, path: g.path, mtime: g.mtime, size: g.size });
    if (l % 10 === 9) await new Promise((r) => setImmediate(r));
  }
  return (a.sort((l, p) => p.mtime - l.mtime), a);
}
async function wt(e) {
  let t,
    o = await xt(e?.storageV5),
    i = o.length,
    a = 200,
    l = [],
    p = [],
    r = 0,
    g = 0;
  for (let _ of we(o, xe)) {
    let A = e?.storageV5,
      F = A
        ? await ze(
            _.map((k) => k.sessionId),
            A,
          )
        : await Promise.all(_.map((k) => it(k.sessionId))),
      V = _.map((k, I) => ({ sessionInfo: k, cached: F[I] ?? null }));
    for (let { sessionInfo: k, cached: I } of V)
      if (I && (I.transcript_mtime === void 0 || I.transcript_mtime >= k.mtime))
        l.push(I);
      else if (!I) {
        if (r < a) (p.push({ sessionInfo: k, cached: I }), r++);
      } else if (g < a) (p.push({ sessionInfo: k, cached: I }), g++);
      else l.push(I);
  }
  let d = new Map(),
    f = (_) => {
      for (let A of _.messages.slice(0, 5))
        if (A.type === "user" && A.message) {
          let F = A.message.content;
          if (typeof F === "string") {
            if (
              F.includes("RESPOND WITH ONLY A VALID JSON OBJECT") ||
              F.includes("record_facets")
            )
              return !0;
          }
        }
      return !1;
    },
    w = 10;
  for (let _ = 0; _ < p.length; _ += w) {
    let A = p.slice(_, _ + w),
      F = await Promise.all(
        A.map(async ({ sessionInfo: k, cached: I }) => {
          try {
            return {
              sessionInfo: k,
              cached: I,
              logs:
                e?.storageV5 && k.key
                  ? await loadAllLogsFromSessionFile(`${k.sessionId}.jsonl`, void 0, {
                      backend: e.storageV5,
                      key: k.key,
                    })
                  : await loadAllLogsFromSessionFile(k.path ?? ""),
            };
          } catch {
            return { sessionInfo: k, cached: I, logs: [] };
          }
        }),
      ),
      V = new Map();
    for (let { sessionInfo: k, cached: I, logs: ie } of F) {
      let _e = !1;
      for (let ee of ie) {
        if (
          f(ee) ||
          Number.isNaN(ee.created.getTime()) ||
          Number.isNaN(ee.modified.getTime())
        )
          continue;
        let X = pe(ee);
        if (
          ((X.transcript_mtime = k.mtime),
          l.push(X),
          (_e = !0),
          ke(X, V.get(X.session_id)))
        )
          V.set(X.session_id, X);
        d.set(X.session_id, ee);
      }
      if (!_e && I) l.push(I);
    }
    await Promise.all([...V.values()].map((k) => rt(k, e?.storageV5)));
  }
  let E = new Map();
  for (let _ of l) if (ke(_, E.get(_.session_id))) E.set(_.session_id, _);
  let x = new Set(E.keys());
  l = [...E.values()];
  for (let _ of d.keys()) if (!x.has(_)) d.delete(_);
  l.sort((_, A) => A.start_time.localeCompare(_.start_time));
  let P = (_) => {
      if (_.user_message_count < 2) return !1;
      if (_.duration_minutes < 1) return !1;
      return !0;
    },
    j = l.filter(P),
    U = new Map(),
    H = [],
    B = 50,
    y = e?.storageV5,
    D = j.map((_) => _.session_id),
    W = y
      ? (await Promise.all(we(D, xe).map((_) => Re(_, y)))).flat()
      : await Promise.all(D.map((_) => ot(_))),
    J = j.map((_, A) => ({ sessionId: _.session_id, cached: W[A] ?? null }));
  for (let { sessionId: _, cached: A } of J)
    if (A) U.set(_, A);
    else {
      let F = d.get(_);
      if (F && H.length < B) H.push({ log: F, sessionId: _ });
    }
  let N = 50;
  for (let _ = 0; _ < H.length; _ += N) {
    let A = H.slice(_, _ + N),
      F = await Promise.all(
        A.map(async ({ log: k, sessionId: I }) => {
          let ie = await at(k, I, e?.credentials);
          return { sessionId: I, newFacets: ie };
        }),
      ),
      V = [];
    for (let { sessionId: k, newFacets: I } of F)
      if (I) (U.set(k, I), V.push(I));
    await Promise.all(V.map((k) => nt(k, e?.storageV5)));
  }
  let Y = (_) => {
      let A = U.get(_);
      if (!A) return !1;
      let F = A.goal_categories,
        V = kt(F).filter((k) => (F[k] ?? 0) > 0);
      return V.length === 1 && V[0] === "warmup_minimal";
    },
    u = j.filter((_) => !Y(_.session_id)),
    C = new Map();
  for (let [_, A] of U) if (!Y(_)) C.set(_, A);
  let S = lt(u, C);
  S.total_sessions_scanned = i;
  let Q = await pt(S, U, e?.credentials),
    ne = vt(S, Q),
    L = new Date(),
    K = (_) => String(_).padStart(2, "0"),
    Z = `${L.getFullYear()}-${K(L.getMonth() + 1)}-${K(L.getDate())}-${K(L.getHours())}${K(L.getMinutes())}${K(L.getSeconds())}`,
    Oe = await Je(ne, Z, e?.storageV5);
  return { insights: Q, htmlPath: Oe, data: S, remoteStats: t, facets: C };
}
function le(e) {
  return e ? Object.entries(e) : [];
}
function kt(e) {
  return e ? Object.keys(e) : [];
}
var Ct = {
  type: "prompt",
  name: "insights",
  description: "Generate a report analyzing your Claude Code sessions",
  contentLength: 0,
  progressMessage: "analyzing your sessions",
  source: "builtin",
  async getPromptForCommand(e, t) {
    if (t.options?.isSkillPreload)
      return [
        {
          type: "text",
          text: "The /insights report is generated only when the command is invoked directly.",
        },
      ];
    let o = !1,
      i = [],
      a = !1,
      {
        insights: l,
        htmlPath: p,
        data: r,
        remoteStats: g,
      } = await wt({
        collectRemote: o,
        storageV5: t.storageV5,
        credentials: t.credentials,
      }),
      d = `file://${p}`,
      w = [
        r.total_sessions_scanned && r.total_sessions_scanned > r.total_sessions
          ? `${r.total_sessions_scanned.toLocaleString()} sessions total \xB7 ${r.total_sessions} analyzed`
          : `${r.total_sessions} sessions`,
        `${r.total_messages.toLocaleString()} messages`,
        `${Math.round(r.total_duration_hours)}h`,
        `${r.git_commits} commits`,
      ].join(" \xB7 "),
      E = "",
      x = l.at_a_glance,
      P = x
        ? `## At a Glance

${x.whats_working ? `**What's working:** ${x.whats_working} See _Impressive Things You Did_.` : ""}

${x.whats_hindering ? `**What's hindering you:** ${x.whats_hindering} See _Where Things Go Wrong_.` : ""}

${x.quick_wins ? `**Quick wins to try:** ${x.quick_wins} See _Features to Try_.` : ""}

${x.ambitious_workflows ? `**Ambitious workflows:** ${x.ambitious_workflows} See _On the Horizon_.` : ""}`
        : "_No insights generated_",
      j = `# Claude Code Insights

${w}
${r.date_range.start} to ${r.date_range.end}
${E}
`;
    return [
      {
        type: "text",
        text: St({
          insightsJson: b(l, null, 2),
          reportUrl: d,
          htmlPath: p,
          facetsDir: ae(),
          header: j,
          summaryText: P,
        }),
      },
    ];
  },
};
function St({
  insightsJson: e,
  reportUrl: t,
  htmlPath: o,
  facetsDir: i,
  header: a,
  summaryText: l,
}) {
  return `The user just ran /insights to generate a usage report analyzing their Claude Code sessions.

Here is the full insights data:
${e}

Report URL: ${t}
HTML file: ${o}
Facets directory: ${i}

At-a-glance summary (for your context only \u2014 the user has not seen any output yet):
${a}${l}

Respond with exactly the following, and nothing else. Do not add, omit, or reword any line:

Your shareable insights report is ready:
${t}

Want to dig into any section or try one of the suggestions?`;
}
function he(e) {
  if (!e || typeof e !== "object") return !1;
  let t = e;
  return (
    typeof t.underlying_goal === "string" &&
    typeof t.outcome === "string" &&
    typeof t.brief_summary === "string" &&
    t.goal_categories !== null &&
    typeof t.goal_categories === "object" &&
    t.user_satisfaction_counts !== null &&
    typeof t.user_satisfaction_counts === "object" &&
    t.friction_counts !== null &&
    typeof t.friction_counts === "object"
  );
}
var ps = Ct;
export { ps as default };
