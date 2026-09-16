// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { wo } from "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Rzt } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { Sfe, Fwt } from "../../01-核心基础设施/共享小工具-未细化/chunk-smrdr8gc.js";
import { jy } from "../../01-核心基础设施/共享小工具-未细化/chunk-vp8yvx5r.js";
import { join as P } from "path";
import { constants as c } from "fs";
import { lstat as x, mkdir as S, open as b } from "fs/promises";
import {
  dirname as w,
  isAbsolute as C,
  join as v,
  normalize as F,
  sep as T,
} from "path";
var k = c.O_NOFOLLOW ?? 0,
  B = c.O_WRONLY | c.O_CREAT | c.O_EXCL | k;
async function E(e, o, r = 384) {
  let t = await b(e, B, r);
  try {
    if (r !== 384) await t.chmod(r);
    await t.writeFile(o, "utf8");
  } finally {
    await t.close();
  }
}
function O(e, o) {
  let r = F(o);
  if (C(r) || r.split(T).includes("..") || r.split("/").includes(".."))
    throw Error("bundled file path escapes its extraction dir");
  return v(e, r);
}
async function Nwt(e, o, r) {
  let t = new Map();
  for (let [l, g] of Object.entries(o)) {
    let a = O(e, l),
      d = w(a),
      u = [a, g, r?.mode?.(l) ?? 384],
      i = t.get(d);
    if (i) i.push(u);
    else t.set(d, [u]);
  }
  await Promise.all(
    [...t].map(async ([l, g]) => {
      (await S(l, { recursive: !0, mode: 448 }),
        await Promise.all(
          g.map(([a, d, u]) =>
            E(a, d, u).catch((i) => {
              if (r?.tolerateExisting && A(i) === "EEXIST") {
                if (r.tolerateExisting !== "verify-content")
                  return x(a).then((s) => {
                    if (!s.isFile()) throw i;
                  });
                return b(a, c.O_RDONLY | k | (c.O_NONBLOCK ?? 0))
                  .then((s) =>
                    s
                      .stat()
                      .then((p) => {
                        if (!p.isFile()) throw i;
                        return s.readFile({ encoding: "utf8" });
                      })
                      .finally(() => s.close()),
                  )
                  .then((s) => {
                    if (s !== d) throw i;
                  });
              }
              throw i;
            }),
          ),
        ));
    }),
  );
}
function uwn(e) {
  wo().bundledSkillSessionResetHooks.push(e);
}
function _fe() {
  for (let e of wo().bundledSkillSessionResetHooks)
    try {
      e();
    } catch (o) {
      n(
        `[skills] session-reset hook failed: ${o instanceof Error ? o.message : String(o)}`,
      );
    }
}
function wfr(e) {
  let { files: o } = e,
    r = typeof o === "function";
  if (!o || (!r && Object.keys(o).length === 0))
    return { skillRoot: void 0, getPromptForCommand: e.getPromptForCommand };
  let t,
    l,
    g = e.getPromptForCommand,
    a = async (d, u) => {
      l ??= (async () => ((t ??= r ? await o(u) : o), R(e.name, t)))();
      let i = l,
        m;
      try {
        m = await i;
      } catch (h) {
        if (l === i) ((l = void 0), (t = void 0));
        throw h;
      }
      if (l === i) l = void 0;
      let s = await g(d, u, m);
      if (m === null) return s;
      let p = `Base directory for this skill: ${m}

`;
      if (s.length > 0 && s[0].type === "text")
        return [{ type: "text", text: p + s[0].text }, ...s.slice(1)];
      return [{ type: "text", text: p }, ...s];
    };
  return { skillRoot: yfe(e.name), getPromptForCommand: a };
}
function eo(e) {
  let { skillRoot: o, getPromptForCommand: r } = wfr(e),
    t = {
      type: "prompt",
      name: e.name,
      description: typeof e.description === "function" ? "" : e.description,
      menuDescription: e.menuDescription,
      aliases: e.aliases,
      subcommands: e.subcommands,
      subcommandsBareOnly: e.subcommandsBareOnly,
      hasUserSpecifiedDescription: !0,
      allowedTools: e.allowedTools ?? [],
      getAllowedTools: e.getAllowedTools,
      disallowedTools: e.disallowedTools ?? [],
      argumentHint:
        typeof e.argumentHint === "function" ? void 0 : e.argumentHint,
      whenToUse: typeof e.whenToUse === "function" ? void 0 : e.whenToUse,
      model: e.model,
      disableModelInvocation:
        typeof e.disableModelInvocation === "function"
          ? !0
          : (e.disableModelInvocation ?? !1),
      disableBridgeInvocation: e.disableBridgeInvocation,
      userInvocable: e.userInvocable ?? !0,
      terminalOriented: e.terminalOriented,
      argsMayContainSlashCommands: e.argsMayContainSlashCommands,
      contentLength: 0,
      source: "bundled",
      loadedFrom: "bundled",
      hooks: e.hooks,
      skillRoot: o,
      context: e.context,
      getContext: e.getContext,
      agent: e.agent,
      background: e.background,
      isEnabled: e.isEnabled,
      policyGate: e.policyGate,
      requires: e.requires,
      isHidden: !(e.userInvocable ?? !0),
      progressMessage: e.progressMessage ?? "running",
      getPromptForCommand: r,
      getEffort: e.getEffort,
      getDefaultEffort: e.getDefaultEffort,
      onUserTypedArgs: e.onUserTypedArgs,
      getArgumentCompletions: e.getArgumentCompletions,
    };
  (Sfe(t, "description", e.description),
    Sfe(t, "argumentHint", e.argumentHint),
    Sfe(t, "whenToUse", e.whenToUse),
    Fwt(t, "disableModelInvocation", e.disableModelInvocation));
  let l = wo();
  if (e.survivesBundledKillSwitch) l.bundledSkillKillSwitchSurvivors.add(t);
  l.bundledSkills.push(t);
}
function poe() {
  let e = wo();
  if (jy())
    return e.bundledSkills.filter((o) =>
      e.bundledSkillKillSwitchSurvivors.has(o),
    );
  return [...e.bundledSkills];
}
function dwn() {
  return [...wo().bundledSkills];
}
function yfe(e) {
  return P(Rzt(), e);
}
async function R(e, o) {
  if (Object.keys(o).length === 0) return null;
  let r = yfe(e);
  try {
    return (
      await Nwt(r, o, { tolerateExisting: "verify-content" }),
      y("skill_bundled_extract"),
      r
    );
  } catch (t) {
    return (
      n(
        `Failed to extract bundled skill '${e}' to ${r}: ${t instanceof Error ? t.message : String(t)}`,
      ),
      f("skill_bundled_extract", "skill_bundled_extract_write_failed"),
      null
    );
  }
}
async function XGt(e, o) {
  if (Object.keys(o).length === 0) return null;
  let r = yfe(e);
  try {
    return (await Nwt(r, o, { tolerateExisting: !0 }), r);
  } catch (t) {
    return (
      n(
        `Failed to extract additional skill files for '${e}' to ${r}: ${t instanceof Error ? t.message : String(t)}`,
      ),
      null
    );
  }
}
export { Nwt, uwn, _fe, wfr, eo, poe, dwn, yfe, XGt };
