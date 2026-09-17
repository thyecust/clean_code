// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getClaudeConfigDir } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Po } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { r8, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getOrCompute, getHostStateStore } from "../../01-核心基础设施/共享小工具-未细化/host-state-store.js";
import { Nr } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { isCustomizationDisabled } from "../状态栏-主题/chunk-dqyc6kge.js";
import { parseWorkflowScript, isValidWorkflowScript } from "./workflow-script.js";
import { vm, $t, MEt } from "../插件系统/chunk-7s6mt1vg.js";
import { ax } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { gV, ei } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Uh } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { getBundledWorkflows } from "../../01-核心基础设施/共享小工具-未细化/bundled-workflows.js";
import { areBundledSkillsDisabled } from "../../01-核心基础设施/共享小工具-未细化/disable-bundled-skills.js";
import { DEFAULT_MAX_PAGES, runPaginatedScan } from "../../01-核心基础设施/共享小工具-未细化/paginated-scan.js";
var REMOTE_WORKFLOW_SCRIPT_ENV = "CLAUDE_REMOTE_WORKFLOW_SCRIPT",
  REMOTE_WORKFLOW_ARGS_ENV = "CLAUDE_REMOTE_WORKFLOW_ARGS",
  WORKFLOW_NAME_ONLY_ENV = "CLAUDE_WORKFLOW_NAME_ONLY";
function isWorkflowNameOnlyEnabled() {
  return a.CLAUDE_WORKFLOW_NAME_ONLY;
}
import { join as F } from "path";
async function _(o, s, t, i, d) {
  let c = ae(),
    e;
  try {
    e = await c.readdir(o);
  } catch {
    return [];
  }
  return (
    await Promise.all(
      e.map(async (l) => {
        if (!(l.isFile() || l.isSymbolicLink())) return null;
        if (!l.name.endsWith(".js")) return null;
        return v(F(o, l.name), s, t, i, d);
      }),
    )
  ).filter((l) => l !== null);
}
async function v(o, s, t, i, d) {
  let c = ae();
  if (r8(c, o, d)) return null;
  try {
    let e = await ax(c, o, Uh);
    if (e === null)
      return (
        n(
          `Plugin workflow ${o}: not a regular file or exceeds ${Uh} bytes \u2014 skipping`,
          { level: "warn" },
        ),
        null
      );
    let r = parseWorkflowScript(e, { validateBody: !1 });
    if ("error" in r)
      return (
        n(`Plugin workflow ${o} has invalid meta: ${r.error} \u2014 skipping`, {
          level: "warn",
        }),
        null
      );
    let l = `${s}:${r.meta.name}`;
    return {
      source: "plugin",
      plugin: t,
      pluginManifest: i,
      name: l,
      description: r.meta.description,
      whenToUse: r.meta.whenToUse,
      phases: r.meta.phases,
      script: e,
      filePath: o,
    };
  } catch (e) {
    return (
      n(`Failed to load workflow from ${o}: ${e}`, { level: "error" }),
      null
    );
  }
}
function P(o) {
  let s = $t();
  return (
    (s.workflows ??= (async () => {
      let { enabled: t, errors: i } = await ei(o),
        d = [];
      if (i.length > 0)
        n(`Plugin loading errors: ${i.map((e) => vm(e)).join(", ")}`);
      let c = null;
      for (let e of t) {
        let r = new Set(),
          l = d.length;
        if (e.workflowsPath)
          try {
            let u = await _(e.workflowsPath, e.name, e.source, e.manifest, r);
            if ((d.push(...u), u.length > 0))
              n(
                `Loaded ${u.length} workflows from plugin ${e.name} default directory`,
              );
          } catch (u) {
            ((c = "plugin_load_workflows_dir_failed"),
              n(
                `Failed to load workflows from plugin ${e.name} default directory: ${u}`,
                { level: "error" },
              ));
          }
        if (e.workflowsPaths)
          for (let u of e.workflowsPaths)
            try {
              let p = await ae().stat(u);
              if (p.isDirectory()) {
                let w = await _(u, e.name, e.source, e.manifest, r);
                if ((d.push(...w), w.length > 0))
                  n(
                    `Loaded ${w.length} workflows from plugin ${e.name} custom path: ${u}`,
                  );
              } else if (p.isFile() && u.endsWith(".js")) {
                let w = await v(u, e.name, e.source, e.manifest, r);
                if (w)
                  (d.push(w),
                    n(
                      `Loaded workflow from plugin ${e.name} custom file: ${u}`,
                    ));
              }
            } catch (m) {
              ((c = "plugin_load_workflows_path_failed"),
                n(
                  `Failed to load workflows from plugin ${e.name} custom path ${u}: ${m}`,
                  { level: "error" },
                ));
            }
        if (e.serverPluginId !== void 0)
          for (let u of d.slice(l)) u.serverPluginId = e.serverPluginId;
      }
      if ((n(`Total plugin workflows loaded: ${d.length}`), c))
        logFeatureBad("plugin_load_workflows", c);
      else logFeatureOk("plugin_load_workflows");
      return d;
    })()),
    s.workflows
  );
}
import { join as h } from "path";
function W(o, s) {
  if (!s || isValidWorkflowScript(o.script)) return !0;
  return (
    n(
      `Workflow ${o.filePath ?? o.name} (${o.source}) would override ${o.name} but does not parse \u2014 keeping the ${s.source} copy`,
      { level: "warn" },
    ),
    !1
  );
}
function S(o) {
  let s = new Map();
  for (let t of o) {
    if (!W(t, s.get(t.name))) continue;
    s.set(t.name, t);
  }
  return [...s.values()];
}
import { join as E } from "path";
function getUserWorkflowsDir() {
  return E(getClaudeConfigDir(), "workflows");
}
async function T(o, s) {
  try {
    return await gV("workflows", o);
  } catch (t) {
    if (Po(t))
      return (
        n(`loadWorkflowsDir: project-dir walk failed: ${t.code}`, {
          level: "error",
        }),
        (s.walkFailed = !0),
        []
      );
    throw t;
  }
}
async function D(o, s, t, i) {
  if (i !== void 0 && s === "userSettings") return M(i, o, t);
  let d = ae(),
    c;
  try {
    c = await d.readdir(o);
  } catch {
    return [];
  }
  return (
    await Promise.all(
      c.map(async (r) => {
        if (!(r.isFile() || r.isSymbolicLink())) return null;
        if (!r.name.endsWith(".js")) {
          if (/\.(mjs|cjs|ts)$/.test(r.name)) t.nearMissExt++;
          return null;
        }
        let l = h(o, r.name),
          u;
        try {
          u = await d.readFileBytes(l, Uh + 1);
        } catch {
          return (t.skippedUnreadable++, null);
        }
        if (u.byteLength > Uh)
          return (
            n(`Workflow ${l} exceeds ${Uh} bytes \u2014 skipping`, {
              level: "warn",
            }),
            t.skippedOversize++,
            null
          );
        let m = u.toString("utf-8"),
          p = parseWorkflowScript(m, { validateBody: !1 });
        if ("error" in p)
          return (
            n(`Workflow ${l} has invalid meta: ${p.error} \u2014 skipping`, {
              level: "warn",
            }),
            t.skippedInvalidMeta++,
            null
          );
        return {
          source: s,
          name: p.meta.name,
          description: p.meta.description,
          whenToUse: p.meta.whenToUse,
          phases: p.meta.phases,
          script: m,
          filePath: l,
        };
      }),
    )
  ).filter((r) => r !== null);
}
async function M(o, s, t) {
  let i = [];
  switch (
    (
      await runPaginatedScan(
        (e) =>
          o.listEntries(
            { namespace: "userConfigDir", dir: "workflows" },
            e === void 0 ? void 0 : { cursor: e },
          ),
        (e) => {
          for (let r of e) {
            if (r.kind !== "key" || r.key.namespace !== "userConfigDir")
              continue;
            let l = r.key.relPath.at(-1);
            if (l === void 0 || r.key.relPath.length !== 1) continue;
            if (!l.endsWith(".js")) {
              if (/\.(mjs|cjs|ts)$/.test(l)) t.nearMissExt++;
              continue;
            }
            i.push({ key: r.key, name: l });
          }
        },
      )
    ).status
  ) {
    case "done":
      break;
    case "error":
      return [];
    case "capped":
      (n(
        `User workflows listing of ${s} truncated at ${DEFAULT_MAX_PAGES} pages \u2014 loading the ${i.length} workflow files seen`,
        { level: "warn" },
      ),
        (t.userListingTruncated = !0));
      break;
  }
  return (
    await Promise.all(
      i.map(async ({ key: e, name: r }) => {
        let l = await o.read([{ key: e, offset: 0, length: Uh + 1 }]);
        if (!l.ok)
          return (
            n(
              `Workflow ${h(s, r)} could not be read through the storage backend (${l.error.code}) \u2014 skipping`,
              { level: "warn" },
            ),
            t.skippedUnreadable++,
            null
          );
        let u = l.value.items[0];
        if (u === void 0 || !u.found) return (t.skippedUnreadable++, null);
        let m = h(s, r);
        if (u.value.byteLength > Uh)
          return (
            n(`Workflow ${m} exceeds ${Uh} bytes \u2014 skipping`, {
              level: "warn",
            }),
            t.skippedOversize++,
            null
          );
        let p = Buffer.from(u.value).toString("utf-8"),
          w = parseWorkflowScript(p, { validateBody: !1 });
        if ("error" in w)
          return (
            n(`Workflow ${m} has invalid meta: ${w.error} \u2014 skipping`, {
              level: "warn",
            }),
            t.skippedInvalidMeta++,
            null
          );
        return {
          source: "userSettings",
          name: w.meta.name,
          description: w.meta.description,
          whenToUse: w.meta.whenToUse,
          phases: w.meta.phases,
          script: p,
          filePath: m,
        };
      }),
    )
  ).filter((e) => e !== null);
}
async function b(o, s) {
  let t = getUserWorkflowsDir(),
    i = {
      skippedInvalidMeta: 0,
      skippedOversize: 0,
      skippedUnreadable: 0,
      nearMissExt: 0,
      walkFailed: !1,
      userListingTruncated: !1,
    },
    d = await T(o, i),
    [c, ...e] = await Promise.all([
      Nr("userSettings") ? D(t, "userSettings", i, s) : Promise.resolve([]),
      ...(Nr("projectSettings")
        ? d.map((m) => D(m, "projectSettings", i))
        : []),
    ]),
    r = new Map();
  for (let m of c) {
    if (!W(m, r.get(m.name))) continue;
    r.set(m.name, m);
  }
  for (let m = e.length - 1; m >= 0; m--)
    for (let p of e[m]) {
      if (!W(p, r.get(p.name))) continue;
      r.set(p.name, p);
    }
  let l = i.walkFailed && Nr("projectSettings"),
    u = i.skippedInvalidMeta + i.skippedOversize + i.skippedUnreadable;
  if (l || i.userListingTruncated || u > 0 || i.nearMissExt > 0)
    logFeatureSad(
      "workflow_discover",
      l
        ? "project_dir_walk_failed"
        : i.userListingTruncated
          ? "user_listing_truncated"
          : i.skippedInvalidMeta > 0
            ? "invalid_meta"
            : i.skippedOversize > 0
              ? "oversize"
              : i.skippedUnreadable > 0
                ? "unreadable"
                : "near_miss_extension",
      {
        found: r.size,
        skipped_invalid_meta: i.skippedInvalidMeta,
        skipped_oversize: i.skippedOversize,
        skipped_unreadable: i.skippedUnreadable,
        near_miss_ext: i.nearMissExt,
        ...(i.userListingTruncated && { user_listing_truncated: !0 }),
      },
    );
  else logFeatureOk("workflow_discover", { found: r.size });
  return [...r.values()].sort((m, p) => m.name.localeCompare(p.name));
}
function getAllWorkflows(o, s) {
  return getOrCompute(getHostStateStore().allWorkflows, `${areBundledSkillsDisabled()}:${isWorkflowNameOnlyEnabled()}:${o}`, () => j(o, s));
}
async function j(o, s) {
  if (isCustomizationDisabled("workflows") || isWorkflowNameOnlyEnabled()) return [...getBundledWorkflows()];
  let [t, i] = await Promise.all([b(o, s), P(s)]),
    d = S(i),
    c = getBundledWorkflows(),
    e = new Map(c.map((k) => [k.name, k])),
    r = O(d, e);
  for (let k of r) e.set(k.name, k);
  let l = O(t, e),
    u = new Set(l.map((k) => k.name)),
    m = r.filter((k) => !u.has(k.name)),
    p = new Set([...u, ...m.map((k) => k.name)]);
  return [...c.filter((k) => !p.has(k.name)), ...m, ...l];
}
function O(o, s) {
  return o.filter((t) => W(t, s.get(t.name)));
}
async function getWorkflowByName(o, s, t) {
  return (await getAllWorkflows(s, t)).find((d) => d.name === o);
}
function clearWorkflowCaches() {
  (getHostStateStore().allWorkflows.clear(), MEt());
}
export { REMOTE_WORKFLOW_SCRIPT_ENV, REMOTE_WORKFLOW_ARGS_ENV, WORKFLOW_NAME_ONLY_ENV, isWorkflowNameOnlyEnabled, getUserWorkflowsDir, getAllWorkflows, getWorkflowByName, clearWorkflowCaches };
