// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { ie } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { lo } from "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import { Pp } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { fF, xv, s3e, hee, uSe, flt } from "./chunk-d7zajrh1.js";
import { Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function p(r) {
  if (r.length === 0) return ie.dim("  (no skills loaded)");
  let { cells: s, widths: e } = s3e(r),
    o = ie.dim(
      `  ${fF("skill", e.name)}  ${fF("source", e.source)}  ${xv("context", e.context)}  ${xv("7d tokens", e.week)}  ${xv("uses", e.uses + 1)}  last used`,
    ),
    a = r.map((i, c) => {
      let u = s[c],
        d = `  ${fF(i.name, e.name)}  ${ie.dim(fF(i.source, e.source))}  ${xv(u.context, e.context)}  ${xv(u.week, e.week)}  ${xv(String(i.usageCount), e.uses)}\xD7  ${u.lastUsed}`;
      return i.usageCount === 0 ? ie.yellow(d) : d;
    }).join(`
`);
  return `${o}
${a}`;
}
async function k(r) {
  let {
      rows: s,
      unusedOwned: e,
      unusedSynced: o,
      unusedFromPlugins: a,
      unusedFromMcp: i,
      unusedMcpServers: c,
      disusedPlugins: u,
      weekTokensNote: d,
    } = await flt(uSe(r)),
    t = [];
  if (
    (t.push(ie.bold("Skills loaded this session")),
    t.push(""),
    t.push(p(s)),
    s.length > 0)
  )
    (t.push(""),
      t.push(
        ie.dim(
          "  context = this skill's one-line listing in the system prompt, included every turn",
        ),
      ),
      t.push(
        ie.dim(
          "  (dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)",
        ),
      ),
      t.push(
        ie.dim(
          d === null
            ? "  7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine"
            : `  7d tokens: ${d}`,
        ),
      ));
  if ((t.push(""), e.length > 0))
    t.push(
      ie.yellow(
        `${e.length} ${x(e.length, "skill")} loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`,
      ),
    );
  if (o.length > 0)
    t.push(
      ie.yellow(
        `${o.length} ${x(o.length, "skill")} synced from claude.ai loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or turn ${o.length === 1 ? "it" : "them"} off on claude.ai \u2014 a deleted synced copy is re-downloaded on the next sync.`,
      ),
    );
  if (a.length > 0) {
    let n = Y(a.map((m) => m.source));
    t.push(
      ie.yellow(
        `${a.length} plugin ${x(a.length, "skill")} loaded but never invoked, from ${n.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually \u2014 disable ${n.length === 1 ? "the plugin" : "those plugins"} in /plugin.`,
      ),
    );
  }
  if (i.length > 0) {
    let n = c.length > 0 ? `, from ${c.join(", ")}` : "",
      m = c.length <= 1;
    t.push(
      ie.yellow(
        `${i.length} MCP ${x(i.length, "skill")} loaded but never invoked${n}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk \u2014 turning ${m ? "that server" : "those servers"} off in /mcp also removes ${m ? "its" : "their"} tools.`,
      ),
    );
  }
  if (s.length > 0 && s.every((n) => n.usageCount > 0))
    t.push(ie.green("All loaded skills have been used at least once."));
  if (u.length > 0) {
    (t.push(""), t.push(ie.bold("Plugins not used recently")), t.push(""));
    for (let n of u)
      t.push(
        `  ${ie.yellow(Pp(n.name))}  ${ie.dim(`last used ${n.daysSinceLastUse} days ago`)}`,
      );
    (t.push(""), t.push(ie.dim("  Manage these in /plugin")));
  }
  if (s.length === 0) logFeatureSad("cli_skill_doctor", "no_user_skills");
  else if (d !== null) logFeatureSad("cli_skill_doctor", "scan_policy_denied");
  else logFeatureOk("cli_skill_doctor");
  return t.join(`
`);
}
var ynn = async (r, s) => {
  if (lo(s.session))
    return {
      type: "text",
      value: "Skill usage reports are not available on this connection.",
    };
  try {
    let e = await k(s);
    if (lo(s.session))
      return {
        type: "text",
        value: "Skill usage reports are not available on this connection.",
      };
    return { type: "text", value: e };
  } catch (e) {
    let o = e instanceof hee ? e.cause : e;
    if (
      (logError(o),
      logFeatureBad(
        "cli_skill_doctor",
        e instanceof hee ? e.featureErrorCode : "render_failed",
      ),
      lo(s.session))
    )
      return { type: "text", value: "Couldn't compute skill usage." };
    return {
      type: "text",
      value: `Couldn't compute skill usage. Run with --debug for details. (${l(o)})`,
    };
  }
};
export { ynn };
