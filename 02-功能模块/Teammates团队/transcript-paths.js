// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, K, fy, he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { isValidPathSegment } from "./storage-keys.js";
import { getClaudeConfigDir } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { getProjectKey } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { runPaginatedScan } from "../../01-核心基础设施/共享小工具-未细化/paginated-scan.js";
import { readdir } from "fs/promises";
import { basename, dirname, join as o } from "path";
function getProjectsDir() {
  return o(getClaudeConfigDir(), "projects");
}
function getProjectKeyFromDir(t) {
  return dirname(t) === getProjectsDir() ? basename(t) : void 0;
}
class c {
  projectDirCache = new Map();
  agentTranscriptSubdirs = new Map();
  cacheProjectDir(t, e) {
    this.projectDirCache.set(t, e);
  }
  clearProjectDirCache() {
    this.projectDirCache.clear();
  }
  setAgentTranscriptSubdir(t, e) {
    this.agentTranscriptSubdirs.set(t, e);
  }
  clearAgentTranscriptSubdir(t) {
    this.agentTranscriptSubdirs.delete(t);
  }
}
var g = new j(() => new c());
function getProjectDir(t) {
  let e = g.of(B().host),
    n = e.projectDirCache.get(t);
  if (n !== void 0) return n;
  let r = o(getProjectsDir(), getProjectKey(t));
  return (e.cacheProjectDir(t, r), r);
}
function getSessionTranscriptPath() {
  let t = fy() ?? getProjectDir(he());
  return o(t, `${K()}.jsonl`);
}
function setAgentTranscriptSubdir(t, e) {
  g.of(B().host).setAgentTranscriptSubdir(t, e);
}
function clearAgentTranscriptSubdir(t) {
  g.of(B().host).clearAgentTranscriptSubdir(t);
}
function getSessionSubagentsDir() {
  let t = fy() ?? getProjectDir(he());
  return o(t, K(), "subagents");
}
function getAgentTranscriptPath(t) {
  let e = g.of(B().host).agentTranscriptSubdirs.get(t),
    n = e ? o(getSessionSubagentsDir(), e) : getSessionSubagentsDir();
  return o(n, `agent-${t}.jsonl`);
}
async function listAgentIds(t) {
  let e = fy() ?? getProjectDir(he()),
    n = getProjectKeyFromDir(e);
  if (isHoverRestEnabled() && t !== void 0 && n !== void 0) return m(t, n, K());
  let r;
  try {
    r = await readdir(getSessionSubagentsDir(), { withFileTypes: !0 });
  } catch {
    return [];
  }
  return r
    .filter(
      (s) =>
        s.isFile() && s.name.startsWith("agent-") && s.name.endsWith(".jsonl"),
    )
    .map((s) => s.name.slice(6, -6));
}
async function m(t, e, n) {
  let r = [];
  try {
    return (
      await runPaginatedScan(
        (a) =>
          t.listEntries(
            { namespace: "transcript", projectKey: e, sessionId: n },
            {
              skipKeyStats: !0,
              skipScopeStats: !0,
              ...(a !== void 0 && { cursor: a }),
            },
          ),
        (a) => {
          for (let i of a)
            if (
              i.kind === "key" &&
              i.key.namespace === "transcript" &&
              i.key.agentId !== void 0 &&
              i.key.agentRelPath === void 0 &&
              isValidPathSegment(i.key.agentId)
            )
              r.push(i.key.agentId);
        },
      )
    ).status === "done"
      ? r
      : [];
  } catch {
    return [];
  }
}
function collectInProcessTeammateMessages(t, e) {
  let n = {};
  for (let r of Object.values(t)) {
    let s = e[r.id]?.messages;
    if (
      r.type === "in_process_teammate" &&
      r.identity?.agentId &&
      s &&
      s.length > 0
    )
      n[r.identity.agentId] = s;
  }
  return n;
}
export { getProjectsDir, getProjectKeyFromDir, getProjectDir, getSessionTranscriptPath, setAgentTranscriptSubdir, clearAgentTranscriptSubdir, getSessionSubagentsDir, getAgentTranscriptPath, listAgentIds, collectInProcessTeammateMessages };
