// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getHostStateStore } from "../../01-核心基础设施/文件存储-原子写入/host-state-store.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getBundledSkillsRoot } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { defineLazyProperty, Fwt } from "../../01-核心基础设施/核心工具-类型与数值/define-lazy-property.js";
import { areBundledSkillsDisabled } from "./disable-bundled-skills.js";
import { join as P } from "path";
import { constants } from "fs";
import { lstat, mkdir, open as b } from "fs/promises";
import {
  dirname,
  isAbsolute,
  join as v,
  normalize,
  sep as T,
} from "path";
var k = constants.O_NOFOLLOW ?? 0,
  B = constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | k;
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
  let r = normalize(o);
  if (isAbsolute(r) || r.split(T).includes("..") || r.split("/").includes(".."))
    throw Error("bundled file path escapes its extraction dir");
  return v(e, r);
}
async function materializeFileMap(e, o, r) {
  let t = new Map();
  for (let [l, g] of Object.entries(o)) {
    let a = O(e, l),
      d = dirname(a),
      u = [a, g, r?.mode?.(l) ?? 384],
      i = t.get(d);
    if (i) i.push(u);
    else t.set(d, [u]);
  }
  await Promise.all(
    [...t].map(async ([l, g]) => {
      (await mkdir(l, { recursive: !0, mode: 448 }),
        await Promise.all(
          g.map(([a, d, u]) =>
            E(a, d, u).catch((i) => {
              if (r?.tolerateExisting && A(i) === "EEXIST") {
                if (r.tolerateExisting !== "verify-content")
                  return lstat(a).then((s) => {
                    if (!s.isFile()) throw i;
                  });
                return b(a, constants.O_RDONLY | k | (constants.O_NONBLOCK ?? 0))
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
function registerBundledSkillSessionReset(e) {
  getHostStateStore().bundledSkillSessionResetHooks.push(e);
}
function runBundledSkillSessionResets() {
  for (let e of getHostStateStore().bundledSkillSessionResetHooks)
    try {
      e();
    } catch (o) {
      logForDebugging(
        `[skills] session-reset hook failed: ${o instanceof Error ? o.message : String(o)}`,
      );
    }
}
function wireSkillFilesExtraction(e) {
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
  return { skillRoot: getBundledSkillExtractDir(e.name), getPromptForCommand: a };
}
function registerBundledSkill(e) {
  let { skillRoot: o, getPromptForCommand: r } = wireSkillFilesExtraction(e),
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
  (defineLazyProperty(t, "description", e.description),
    defineLazyProperty(t, "argumentHint", e.argumentHint),
    defineLazyProperty(t, "whenToUse", e.whenToUse),
    Fwt(t, "disableModelInvocation", e.disableModelInvocation));
  let l = getHostStateStore();
  if (e.survivesBundledKillSwitch) l.bundledSkillKillSwitchSurvivors.add(t);
  l.bundledSkills.push(t);
}
function getBundledSkills() {
  let e = getHostStateStore();
  if (areBundledSkillsDisabled())
    return e.bundledSkills.filter((o) =>
      e.bundledSkillKillSwitchSurvivors.has(o),
    );
  return [...e.bundledSkills];
}
function getRegisteredBundledSkillsIgnoringKillSwitch() {
  return [...getHostStateStore().bundledSkills];
}
function getBundledSkillExtractDir(e) {
  return P(getBundledSkillsRoot(), e);
}
async function R(e, o) {
  if (Object.keys(o).length === 0) return null;
  let r = getBundledSkillExtractDir(e);
  try {
    return (
      await materializeFileMap(r, o, { tolerateExisting: "verify-content" }),
      logFeatureOk("skill_bundled_extract"),
      r
    );
  } catch (t) {
    return (
      logForDebugging(
        `Failed to extract bundled skill '${e}' to ${r}: ${t instanceof Error ? t.message : String(t)}`,
      ),
      logFeatureBad("skill_bundled_extract", "skill_bundled_extract_write_failed"),
      null
    );
  }
}
async function extractAdditionalSkillFiles(e, o) {
  if (Object.keys(o).length === 0) return null;
  let r = getBundledSkillExtractDir(e);
  try {
    return (await materializeFileMap(r, o, { tolerateExisting: !0 }), r);
  } catch (t) {
    return (
      logForDebugging(
        `Failed to extract additional skill files for '${e}' to ${r}: ${t instanceof Error ? t.message : String(t)}`,
      ),
      null
    );
  }
}
export { materializeFileMap, registerBundledSkillSessionReset, runBundledSkillSessionResets, wireSkillFilesExtraction, registerBundledSkill, getBundledSkills, getRegisteredBundledSkillsIgnoringKillSwitch, getBundledSkillExtractDir, extractAdditionalSkillFiles };
