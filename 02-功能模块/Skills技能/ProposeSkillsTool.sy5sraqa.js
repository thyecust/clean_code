// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 198 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { x, ln } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { sn, Nb } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { findCommand, j2, L_t, getCommands } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ot, bA } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { ZQ } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { eJ, yQn, SQn } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { NG, qH, qy } from "../MCP客户端/chunk-3kmsshb6.js";
import { collapseNewlines, truncateForDisplay } from "../../01-核心基础设施/共享小工具-未细化/text-truncation.js";
import { s, T, v, c, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { join as L } from "path";
var S = 1024,
  _ = createLazyValue(() =>
    c({
      proposals: v(
        c({
          name: s().min(1).describe("kebab-case skill slug"),
          kind: X(["new", "improvement"]),
          target: s()
            .optional()
            .describe(
              "Name of the existing skill to update. Required when kind is 'improvement'; omit for 'new'.",
            ),
          description: s()
            .max(S, {
              message: `description is longer than ${S} characters, the most a saved skill's description can hold. Call again with one short sentence saying when to use the skill.`,
            })
            .describe(
              "One short sentence saying when to use this skill: aim for under 200 characters, never more than 1024. Shown on the review card and saved as the skill's description, which is what decides when the skill is used. For an improvement, reuse the existing skill's description unless the change alters when the skill applies.",
            ),
          evidence: v(s())
            .optional()
            .describe("memory file paths where this procedure was observed"),
          skillMd: s().describe(
            "The complete SKILL.md exactly as it should be saved: frontmatter plus the full body. When the user saves, the body below the frontmatter becomes the skill's entire instructions and the name and description come from the fields above; other frontmatter keys are not kept. For an improvement this replaces the existing skill's SKILL.md entirely, so read that skill's current SKILL.md first and include everything worth keeping, not only the changes.",
          ),
        }).refine((t) => t.kind !== "improvement" || !!t.target, {
          message: "target is required when kind is 'improvement'",
          path: ["target"],
        }),
      )
        .min(1)
        .max(3),
    }),
  ),
  w = createLazyValue(() =>
    c({
      proposalCount: T().describe(
        "Number of proposals shown on the review card",
      ),
    }),
  ),
  ProposeSkillsTool = buildTool({
    name: eJ,
    maxResultSizeChars: 1000,
    searchHint:
      "propose skills from recurring procedures for the user to review and save",
    get inputSchema() {
      return _();
    },
    get outputSchema() {
      return w();
    },
    isEnabled() {
      if (a.CLAUDE_CODE_CHILD_SESSION || a.CLAUDECODE) return !1;
      if (!ZQ() && !a.CLAUDE_CODE_SKILL_PROPOSALS) return !1;
      if (!a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE) return !1;
      if (
        !a.CLAUDE_CODE_SKILL_PROPOSALS &&
        a.CLAUDE_CODE_ENVIRONMENT_KIND !== void 0
      )
        return !1;
      if (a.CLAUDE_CODE_SKILL_PROPOSALS) return !Nb();
      return a.CLAUDE_CODE_SYNC_SKILLS && !Nb();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    toAutoClassifierInput(t) {
      return (t.proposals ?? []).map((e) =>
        e.kind === "improvement" && e.target
          ? `${e.name ?? ""} (improves ${e.target}): ${e.description ?? ""}`
          : `${e.name ?? ""}: ${e.description ?? ""}`,
      ).join(`
`);
    },
    async description() {
      return yQn;
    },
    async prompt() {
      return SQn;
    },
    renderToolUseMessage(t) {
      let e = (t.proposals ?? []).filter((r) => r?.name).slice(0, 3);
      if (e.length === 0) return "";
      let u = e.map((r) => {
        let d = truncateForDisplay(collapseNewlines(r.name ?? ""), 80);
        return r.kind === "improvement" && r.target
          ? `${d} (improves ${truncateForDisplay(collapseNewlines(r.target), 80)})`
          : d;
      });
      return `Propose ${e.length} ${x(e.length, "skill")}: ${u.join(", ")}`;
    },
    async validateInput({ proposals: t }, e) {
      let u = t.flatMap((o) =>
        o.kind === "improvement" && o.target ? [o.target] : [],
      );
      if (u.length === 0) return { result: !0 };
      let r = [],
        d = [];
      try {
        let o = await getCommands(sn(), e.storageV5);
        for (let h of u) {
          let p = findCommand(h, o);
          if (
            p?.type !== "prompt" ||
            p.loadedFrom !== "syncedSkills" ||
            !p.skillRoot ||
            L_t(p)
          )
            continue;
          let f = ot(L(p.skillRoot, "SKILL.md")),
            g = await C(f, e.readFileState.get(f), p.contentLength, e);
          if (g === "unread") r.push(`${h} (${f})`);
          else if (g === "stale") d.push(`${h} (${f})`);
        }
      } catch (o) {
        return (
          n(`propose_skills: skipping the read-before-improve check: ${l(o)}`),
          { result: !0 }
        );
      }
      if (r.length > 0 || d.length > 0) {
        let o = [
            ...(r.length > 0
              ? [`Existing SKILL.md not read in full yet for ${r.join(", ")}.`]
              : []),
            ...(d.length > 0
              ? [
                  `SKILL.md on disk is newer than the copy read for ${d.join(", ")}.`,
                ]
              : []),
          ],
          h = r.length + d.length;
        return {
          result: !1,
          message: `${o.join(" ")} A saved proposal replaces a skill's SKILL.md entirely \u2014 read ${h === 1 ? "that whole file" : "those whole files"} ${r.length === 0 ? "again" : "first"}, then propose the complete updated SKILL.md.`,
          errorCode: 1,
        };
      }
      return { result: !0 };
    },
    async call({ proposals: t }, e) {
      return (
        logEvent("tengu_propose_skills", {
          proposal_count: t.length,
          improvement_count: countMatching(t, (u) => u.kind === "improvement"),
        }),
        { data: { proposalCount: t.length } }
      );
    },
    mapToolResultToToolResultBlockParam({ proposalCount: t }, e) {
      return {
        tool_use_id: e,
        type: "tool_result",
        content: `Shown ${t} skill proposal(s) to the user for review. Continue with the next phase; do not wait for them to respond.`,
      };
    },
  });
async function C(t, e, u, r) {
  if (e === void 0 || e.contentNotInModelContext || e.isPartialView)
    return "unread";
  if ((e.offset ?? 1) > 1) {
    let p = j2(),
      f = r.fileReadingLimits?.maxTokens ?? p.maxTokens,
      g = r.fileReadingLimits?.maxSizeBytes ?? p.maxSizeBytes;
    if (!(u > f || u > g)) return "unread";
    return (await k(t, e)) ? "stale" : "read";
  }
  let d = await k(t, e);
  if (NG(e)) {
    if (!d) return "read";
    let p = await y(t);
    return p === void 0 || qH(e, p) ? "read" : "stale";
  }
  let o = await y(t);
  if (o === void 0) return "unread";
  if (qH(e, o)) return "read";
  let h =
    e.limit !== void 0 &&
    ln(
      o,
      `
`,
    ) +
      1 <
      e.limit;
  return !d && h ? "read" : "unread";
}
async function k(t, e) {
  try {
    return (await bA(t)) > e.timestamp;
  } catch (u) {
    return (n(`propose_skills: cannot stat ${t}: ${l(u)}`), !1);
  }
}
async function y(t) {
  try {
    let e = await ae().readFileBytes(t);
    return qy(e.toString("utf8"));
  } catch (e) {
    n(`propose_skills: cannot read ${t}: ${l(e)}`);
    return;
  }
}
export { ProposeSkillsTool };
