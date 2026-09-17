// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K, fy, he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { isValidPathSegment, STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getProjectsDir, getProjectDir } from "../Teammates团队/transcript-paths.js";
import {
  mkdir,
  readdir,
  readFile,
  writeFile,
} from "fs/promises";
import { basename, dirname, join as p } from "path";
function P(t) {
  return p(m(), `${t}.json`);
}
function m() {
  let t = fy() ?? getProjectDir(he());
  return p(t, K(), "workflows");
}
function getWorkflowTranscriptDir(t) {
  let a = fy() ?? getProjectDir(he());
  return p(a, K(), "subagents", "workflows", t);
}
function getCurrentProjectKey() {
  let t = fy() ?? getProjectDir(he());
  return dirname(t) === getProjectsDir() ? basename(t) : void 0;
}
function W(t, a, s) {
  return STORAGE_KEYS.sidecar(t, a, ["workflows", `${s}.json`]);
}
async function writeWorkflowSnapshot(t, a, s) {
  try {
    let i = { runId: t, timestamp: new Date().toISOString(), ...a },
      l = P(t),
      e = isHoverRestEnabled() && s ? getCurrentProjectKey() : void 0,
      r = K();
    if (
      (await mkdir(dirname(l), { recursive: !0, mode: 448 }),
      isHoverRestEnabled() && s && e !== void 0 && isValidPathSegment(`${t}.json`))
    ) {
      let o = await s.write(W(e, r, t), b(i), {
        publishDiscipline: "inPlace",
        mode: 384,
      });
      if (!o.ok) n(`Failed to write workflow snapshot ${t}: ${o.error.code}`);
      return;
    }
    await writeFile(l, b(i), { encoding: "utf8", mode: 384 });
  } catch (i) {
    n(
      `Failed to write workflow snapshot ${t}: ${i instanceof Error ? i.message : i}`,
    );
  }
}
function d(t, a) {
  let s = t.runId ?? a;
  return {
    runId: s,
    taskId: t.taskId ?? s,
    timestamp: t.timestamp ?? new Date(0).toISOString(),
    script: t.script ?? "",
    scriptPath: t.scriptPath,
    args: t.args,
    result: t.result,
    agentCount: t.agentCount ?? 0,
    logs: t.logs ?? [],
    durationMs: t.durationMs ?? 0,
    error: t.error,
    summary: t.summary,
    workflowName: t.workflowName,
    title: t.title,
    status: t.status ?? (t.error ? "failed" : "completed"),
    startTime: t.startTime ?? (Date.parse(t.timestamp ?? "") || 0),
    phases: t.phases,
    defaultModel: t.defaultModel,
    workflowProgress: t.workflowProgress ?? [],
    totalTokens: t.totalTokens ?? 0,
    totalToolCalls: t.totalToolCalls ?? 0,
  };
}
async function loadWorkflowSnapshots(t) {
  let a = t ? getCurrentProjectKey() : void 0;
  if (t && a !== void 0) return j(t, a);
  let s = m(),
    i;
  try {
    i = await readdir(s);
  } catch {
    return [];
  }
  let l = (
    await Promise.all(
      i
        .filter((e) => e.endsWith(".json"))
        .map(async (e) => {
          try {
            let r = await readFile(p(s, e), "utf8"),
              o = z(r);
            return d(o, e.replace(/\.json$/, ""));
          } catch (r) {
            return (
              n(
                `Failed to parse workflow snapshot ${e}: ${r instanceof Error ? r.message : r}`,
              ),
              null
            );
          }
        }),
    )
  ).filter((e) => e !== null);
  return (l.sort((e, r) => r.startTime - e.startTime), l);
}
async function j(t, a) {
  let s = {
      namespace: "sidecar",
      projectKey: a,
      sessionId: K(),
      relPath: ["workflows"],
    },
    i = [],
    l;
  do {
    let r = await t.listEntries(s, l === void 0 ? void 0 : { cursor: l });
    if (!r.ok)
      return (n(`Failed to list workflow snapshots: ${r.error.code}`), []);
    for (let o of r.value.items) {
      if (o.kind !== "key" || o.key.namespace !== "sidecar") continue;
      if ((o.key.relPath.at(-1) ?? "").endsWith(".json")) i.push(o.key);
    }
    l = r.value.cursor;
  } while (l !== void 0);
  let e = (
    await Promise.all(
      i.map(async (r) => {
        let o = r.relPath.at(-1) ?? "";
        try {
          let f = await t.read([r]);
          if (!f.ok)
            return (
              n(`Failed to parse workflow snapshot ${o}: ${f.error.code}`),
              null
            );
          let c = f.value.items[0];
          if (!c?.found)
            return (
              n(
                `Failed to parse workflow snapshot ${o}: deleted between list and read`,
              ),
              null
            );
          let w = z(Buffer.from(c.value).toString("utf8"));
          return d(w, o.replace(/\.json$/, ""));
        } catch (f) {
          return (
            n(
              `Failed to parse workflow snapshot ${o}: ${f instanceof Error ? f.message : f}`,
            ),
            null
          );
        }
      }),
    )
  ).filter((r) => r !== null);
  return (e.sort((r, o) => o.startTime - r.startTime), e);
}
export { getWorkflowTranscriptDir, getCurrentProjectKey, writeWorkflowSnapshot, loadWorkflowSnapshots };
