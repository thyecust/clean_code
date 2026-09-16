// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 85 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { gv } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Ve, yt, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { ht } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { h1, zRe, VRe } from "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import { Ei } from "../Hooks钩子/chunk-9em0d4k5.js";
import { sJ, TGt, pXe, fXe, cJ, roe } from "./chunk-ajtn749s.js";
import { Tt } from "../权限系统/chunk-qdy0h5k2.js";
import { _un, cue } from "../../01-核心基础设施/共享小工具-未细化/chunk-m9kab71c.js";
import { i4e } from "../../01-核心基础设施/共享小工具-未细化/chunk-ck2sjz96.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-t0m264jc.js";
import { IZn, PZn, OZn, DZn, LZn, MZn } from "../../01-核心基础设施/共享小工具-未细化/chunk-7wbbnp7y.js";
import { s, O, v, c, Qe, it, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var z = m(() =>
    it({
      id: s(),
      name: s(),
      description: s().nullish(),
      enabled: O().nullish(),
    }),
  ),
  Z = m(() => c({ results: v(z()) }));
class d extends Error {
  constructor(e) {
    super(e);
    this.name = "PluginSkillSearchUnavailableError";
  }
}
var ee = 15000,
  I = "/api/oauth/organizations/:orgUUID/plugins/search",
  L = "/api/oauth/organizations/:orgUUID/skills/search";
async function D(e, t, r, o, i) {
  let p = t === L ? "skill_search" : "plugin_search";
  if (!h1("allow_plugin_skill_search")) {
    let S = zRe("allow_plugin_skill_search");
    throw (
      f(
        p,
        S === "org_denied"
          ? "policy_denied"
          : S === "unregistered"
            ? "policy_mirror_unregistered"
            : S === "route_missing"
              ? "policy_route_missing"
              : "policy_cache_miss",
      ),
      new d(
        VRe("allow_plugin_skill_search", "Plugin and skill search", "is") ??
          "Plugin and skill search is unavailable right now; please try again.",
      )
    );
  }
  if (t === I) await sJ(e, o, i);
  let u = t === I && a.CLAUDE_CODE_CCR_SURFACE === "tag",
    h = await ht.post(
      t,
      u
        ? { keywords: r, included_default_marketplaces: ["claude-tag-plugins"] }
        : { keywords: r },
      { auth: "teleport-org", timeout: ee, signal: o, credentials: i },
    );
  if (!h.ok)
    throw Error(
      h.reason === "no-auth"
        ? "Not authenticated with a claude.ai account."
        : `search route unavailable: ${h.reason}`,
    );
  if (h.status >= 400) {
    let S = TGt().safeParse(h.data),
      N = S.success
        ? `search route ${h.status} ${S.data.error.type ?? "error_envelope_no_type"}${S.data.error.message ? `: ${S.data.error.message}` : ""}`
        : `search route ${h.status}`;
    if (h.status === 403 && S.success)
      return (
        n(`[plugin-skill-search] degraded to empty: ${N}`, { level: "error" }),
        g(p, "not_entitled"),
        []
      );
    throw Error(N);
  }
  let M = Z().safeParse(h.data);
  if (!M.success) throw Error("malformed search response");
  return (y(t === L ? "skill_search" : "plugin_search"), M.data.results);
}
async function G(e, t, r, o) {
  return D(e, I, t, r, o);
}
async function P(e, t, r, o) {
  return D(e, L, t, r, o);
}
function R(e, t) {
  (n(`[plugin-skill-search] ${e} failed: ${l(t)}`, { level: "error" }),
    f(e === "plugin" ? "plugin_search" : "skill_search", "fetch_failed"));
}
async function E(e, t, r) {
  if (!cJ(e)) return null;
  if (fXe()) return [];
  let o = await gv(
    roe.of(e).fetch(),
    t,
    () => new Ve("plugin manifest read aborted"),
  );
  if (!o.ok) throw (f(r, "manifest_failed"), new d(`manifest ${o.reason}`));
  return o.plugins;
}
var F = m(() =>
    v(s().min(1).max(64))
      .min(1)
      .max(8)
      .describe("Keyword phrases describing the user's intent."),
  ),
  k = m(() => c({ results: v(z()) }));
function w(e, t) {
  return { tool_use_id: t, type: "tool_result", content: b(e) };
}
function _(e) {
  return (e.keywords ?? []).join(", ");
}
function B(e) {
  return e.contextLabel ?? "";
}
var te = m(() =>
  Qe({
    keywords: v(s().min(1).max(64))
      .max(8)
      .optional()
      .describe("Optional filter; omit to list everything."),
  }),
);
function K(e, t) {
  let r = e.toLowerCase();
  return t.some((o) => r.includes(o.toLowerCase()));
}
function se(e, t) {
  if (!t?.length) return e;
  return e.filter(
    (r) => K(r.name, t) || (r.description ? K(r.description, t) : !1),
  );
}
function V(e) {
  return Tt({
    name: e.name,
    searchHint: `list ${e.subject}`,
    maxResultSizeChars: 50000,
    shouldDefer: !0,
    get inputSchema() {
      return te();
    },
    get outputSchema() {
      return k();
    },
    isEnabled: cue,
    isConcurrencySafe: () => !0,
    isReadOnly: () => !0,
    description: async () =>
      `List ${e.subject}, optionally filtered by keyword.`,
    prompt: async () => e.prompt,
    async call(t, r) {
      let o = await e.fetch(
        r.session.host,
        r.abortController.signal,
        r.credentials,
        r.session,
      );
      return { data: { results: se(o, t.keywords) } };
    },
    mapToolResultToToolResultBlockParam: w,
    renderToolUseMessage: _,
  });
}
var q =
    "the plugins enabled for this session (in a channel session, the plugins the channel has)",
  x = V({
    name: LZn,
    subject: q,
    async fetch(e, t, r, o) {
      let i = await E(o, t, "plugin_list");
      if (i !== null)
        return (
          y("plugin_list"),
          i.map((u) => ({
            id: u.id,
            name: u.name,
            description: u.description || null,
            enabled: !0,
          }))
        );
      let p = await pXe(e, { signal: t, credentials: r });
      if (!p.success) {
        if (p.status === 403)
          return (
            n(
              `[plugin-skill-list] degraded to empty: list-plugins 403 ${p.error}`,
              { level: "error" },
            ),
            g("plugin_list", "not_entitled"),
            []
          );
        throw (f("plugin_list", "fetch_failed"), new d(p.error));
      }
      return (
        y("plugin_list"),
        p.plugins.map((u) => ({
          id: u.pluginId,
          name: u.name,
          description: u.description || null,
          enabled: !0,
        }))
      );
    },
    prompt: `List ${q}. Call this when the user asks what plugins they have, or to confirm what was installed after a SuggestPluginInstall card. Pass keywords to filter to a topic; omit to list all. To suggest a plugin they do NOT have yet, use SearchPlugins, then SuggestPluginInstall when it is among your tools; otherwise relay the relevant results in text instead.`,
  }),
  C = V({
    name: MZn,
    subject: "the user's enabled claude.ai skills",
    async fetch(e, t, r) {
      let o = await i4e({ credentials: r });
      if (!o.success) {
        if (o.status === 403)
          return (
            n(
              `[plugin-skill-list] degraded to empty: list-skills 403 ${o.error}`,
              { level: "error" },
            ),
            g("skill_list", "not_entitled"),
            []
          );
        throw (f("skill_list", "fetch_failed"), new d(o.error));
      }
      return (
        y("skill_list"),
        o.skills.map((i) => ({
          id: i.skillId,
          name: i.name,
          description: i.description || null,
          enabled: !0,
        }))
      );
    },
    prompt:
      "List the user's enabled claude.ai skills. Call this when the user asks what skills they have. Pass keywords to filter to a topic; omit to list all. To recommend skills they do NOT have yet, use SuggestSkills when it is among your tools; otherwise use SearchSkills and relay the relevant results in text instead.",
  });
var re = m(() => Qe({ keywords: F() }));
function W(e) {
  return Tt({
    name: e.name,
    searchHint: `discover claude.ai ${e.noun}s by keyword`,
    maxResultSizeChars: 50000,
    shouldDefer: !0,
    get inputSchema() {
      return re();
    },
    get outputSchema() {
      return k();
    },
    isEnabled: cue,
    isConcurrencySafe: () => !0,
    isReadOnly: () => !0,
    description: async () => e.description,
    prompt: async () => e.prompt,
    async call(t, r) {
      try {
        let [o, i] = await Promise.all([
          e.run(
            r.session.host,
            t.keywords,
            r.abortController.signal,
            r.credentials,
          ),
          e.noun === "plugin"
            ? E(r.session, r.abortController.signal, "plugin_search")
            : null,
        ]);
        if (i === null) return { data: { results: o } };
        let p = new Set(i.map((u) => u.id));
        return {
          data: { results: o.map((u) => ({ ...u, enabled: p.has(u.id) })) },
        };
      } catch (o) {
        if (yt(o) || r.abortController.signal.aborted) throw o;
        if (o instanceof d) throw o;
        throw (
          R(e.noun, o),
          new d(`${e.noun} search is unavailable right now; please try again.`)
        );
      }
    },
    mapToolResultToToolResultBlockParam: w,
    renderToolUseMessage: _,
  });
}
var U = W({
    name: IZn,
    noun: "plugin",
    run: G,
    description:
      "Search the user's claude.ai plugin catalog by keyword to find plugins that might help complete the task.",
    prompt: `Search the user's claude.ai plugin catalog by keyword. Call this when a plugin (slash command, skill bundle, hook, or agent) from the user's org catalog might help complete the task.

Examples:
- "use the deploy plugin" \u2192 keywords ["deploy"]
- "is there something for linting?" \u2192 keywords ["lint", "format", "code quality"]

Returns a ranked list with id, name, description, and whether the plugin is already enabled for this session (in a channel session, whether the channel has it). When results fit and SuggestPluginInstall is among your tools, call it to render the install card; otherwise relay the relevant results in text instead. If nothing relevant, proceed without mentioning that you searched.`,
  }),
  A = W({
    name: PZn,
    noun: "skill",
    run: P,
    description:
      "Search the user's claude.ai skills by keyword to find skills that might help complete the task.",
    prompt: `Search the user's claude.ai skills by keyword. Call this when a skill (a reference document or instruction set the user has uploaded or enabled) might help complete the task.

Examples:
- "follow the team's PR guidelines" \u2192 keywords ["pr", "review", "guidelines"]
- "export this as a slide deck" \u2192 keywords ["pptx", "slides", "presentation"]

Returns a ranked list with id, name, description, and whether the skill is enabled. When results fit and SuggestSkills is among your tools, call it to render the add card; otherwise relay the relevant results in text instead. If nothing relevant, proceed without mentioning that you searched.`,
  });
var oe = m(() =>
    Qe({
      pluginId: s().min(1).max(256),
      pluginName: s().min(1).max(256),
      description: s().max(1024),
      skills: v(
        c({ name: s().max(256), description: s().max(1024).optional() }),
      )
        .max(32)
        .optional(),
    }),
  ),
  Y = m(() =>
    Qe({
      contextLabel: s()
        .max(128)
        .describe("Short header tying the suggestion to the user request."),
      plugins: v(oe())
        .min(1)
        .max(16)
        .describe("Plugins sourced from SearchPlugins results."),
    }),
  ),
  ne = m(() => Y().extend({ note: s() })),
  le =
    "Plugin card rendered. The user enables the plugin out of band \u2014 call ListPlugins on follow-up to discover what was actually installed.",
  j = Tt({
    name: OZn,
    searchHint: "render a plugin install card",
    maxResultSizeChars: 50000,
    shouldDefer: !0,
    get inputSchema() {
      return Y();
    },
    get outputSchema() {
      return ne();
    },
    isEnabled: cue,
    isConcurrencySafe: () => !0,
    isReadOnly: () => !0,
    description: async () =>
      "Render an inline plugin install card from SearchPlugins results.",
    prompt:
      async () => `Render an inline plugin install card. Call this after SearchPlugins returns relevant results \u2014 source pluginId, pluginName, description, and skills from those results. The card handles all UI; do not describe the plugins in text.

Do NOT call this if the suggestion is not relevant, you are unsure it would help, or you already rendered one this conversation and the user did not engage.`,
    async call(e) {
      return { data: { ...e, note: le } };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return { tool_use_id: t, type: "tool_result", content: b(e) };
    },
    renderToolUseMessage: B,
  }),
  ie = "tengu_saddle_lantern";
function Q() {
  return import.meta
    .require("../../01-核心基础设施/共享小工具-未细化/ATIS_REQUEST_HEADER.9bwp2jqb.js")
    .getFeatureValueWithSource_CACHED_MAY_BE_STALE(ie, !1);
}
function J() {
  let e = Ei();
  return ((e.suggestRolloutEnabled ??= Q().value), e.suggestRolloutEnabled);
}
function ae() {
  let e = Ei();
  if (e.suggestRolloutEnabled === void 0) {
    let { value: t, source: r } = Q();
    if (r === "fallback") return t;
    e.suggestRolloutEnabled = t;
  }
  return e.suggestRolloutEnabled;
}
_un(ae);
var ue = m(() =>
    Qe({
      keywords: v(s().min(1).max(64))
        .min(1)
        .max(8)
        .describe("Topic keywords from the user's request."),
      contextLabel: s().max(128).optional(),
      trigger: X(["user_asked", "proactive"])
        .optional()
        .describe("How this suggestion started: 'user_asked' or 'proactive'."),
    }),
  ),
  ce = m(() =>
    k().extend({ trigger: X(["user_asked", "proactive"]).optional() }),
  ),
  H = Tt({
    name: DZn,
    searchHint: "render addable claude.ai skills by keyword",
    maxResultSizeChars: 50000,
    get shouldDefer() {
      return !J();
    },
    get inputSchema() {
      return ue();
    },
    get outputSchema() {
      return ce();
    },
    isEnabled: cue,
    isConcurrencySafe: () => !0,
    isReadOnly: () => !0,
    description: async () =>
      "Render a card of standalone skills the user can add (not yet enabled).",
    prompt: async () =>
      J()
        ? `Render a card of standalone skills the user can add \u2014 org, shared, or Anthropic skills not yet enabled.

Call this when the task is one a skill could make repeatable \u2014 drafting in a house style, reviews against a playbook, a recurring workflow \u2014 and nothing enabled covers it; the user does not need to ask about skills. Also when they ask for recommendations, or when ListSkills returned zero matches. Use ListSkills for skills they already have.

Do NOT call this for one-off questions you can answer directly, when you are unsure a skill would help, or if you already rendered a suggestion this conversation and the user didn't engage.

Pass keywords drawn from the task itself, and set trigger ('proactive' when you initiated this from task context, 'user_asked' when they asked). If the result is empty and the trigger was proactive, continue the task without mentioning that you searched; if the user asked, tell them you found nothing new to add.`
        : `Render a card of standalone skills the user can add \u2014 org, shared, or Anthropic skills not yet enabled. Use when the user asks you to recommend skills, asks for skills for a domain they have nothing enabled for, or when ListSkills returned zero matches. Use ListSkills instead for skills they already have.

Always pass keywords from the user's request (you may set trigger: 'user_asked'). The result may be empty.`,
    async call(e, t) {
      try {
        return {
          data: {
            results: (
              await P(
                t.session.host,
                e.keywords,
                t.abortController.signal,
                t.credentials,
              )
            ).filter((i) => i.enabled !== !0),
            trigger: e.trigger,
          },
        };
      } catch (r) {
        if (yt(r) || t.abortController.signal.aborted) throw r;
        if (r instanceof d) throw r;
        throw (
          R("skill", r),
          new d("Skill search is unavailable right now; please try again.")
        );
      }
    },
    mapToolResultToToolResultBlockParam: w,
    renderToolUseMessage: _,
  });
var ft = [U.name, A.name, j.name, H.name, x.name, C.name],
  kt = [U, A, j, H, x, C];
export { ft as PLUGIN_SKILL_SAFE_TOOL_NAMES, kt as PLUGIN_SKILL_TOOLS };
