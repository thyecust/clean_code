// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { bYt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { ac } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { logFeatureOk, logFeatureBad, logFeatureSad, withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { R, l, A, Po } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getTeamsDir } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { execFileNoThrowWithCwd } from "../Git-Worktree/git-exec-hardening.js";
import { pointerFileIsSuspect, rawPointerPathIsUnsafe, gitExe } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { STORAGE_KEYS } from "./storage-keys.js";
import { Cs } from "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import { getAgentName, getTeamName, isTeammate } from "./teammate-context.js";
import { createJitteredBackoffDelay } from "../../01-核心基础设施/共享小工具-未细化/jittered-backoff-delay.js";
import { isPathSafeToRemove } from "../../01-核心基础设施/共享小工具-未细化/chunk-nfcecy7x.js";
import { TEAM_LEAD_AGENT_NAME } from "./chunk-enjekn9t.js";
import {
  mkdir,
  readFile,
  rm as _,
  writeFile,
} from "fs/promises";
import { join as k, resolve } from "path";
class SwarmPaneError extends Error {
  constructor(e) {
    super(e);
    this.name = "SwarmPaneError";
  }
}
var F = /\p{Cc}/u;
function containsControlCharacter(e) {
  return F.test(e);
}
function assertNoControlCharacters(e) {
  let t = F.exec(e);
  if (t) {
    let r = t[0].codePointAt(0);
    throw new SwarmPaneError(
      `Refusing to send command containing control character U+${r.toString(16).padStart(4, "0").toUpperCase()} to terminal pane`,
    );
  }
}
function supportsPaneKill(e) {
  return e === "tmux" || e === "iterm2";
}
function sanitizeName(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}
function sanitizeAgentName(e) {
  return e.replaceAll("@", "-");
}
function S(e) {
  return k(getTeamsDir(), sanitizeName(e));
}
function getTeamFilePath(e) {
  return k(S(e), "config.json");
}
function C(e) {
  return STORAGE_KEYS.team(sanitizeName(e));
}
function w(e) {
  let t = "failureClass" in e ? `/${e.failureClass}` : "",
    r =
      "telemetryCode" in e && e.telemetryCode !== void 0
        ? ` [${e.telemetryCode}]`
        : "";
  return `${e.code}${t}${r}`;
}
function E(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockSuspect";
}
function j(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockContended";
}
function v(e) {
  return (
    e.code === "Unavailable" ||
    e.code === "NotFound" ||
    (e.code === "Failed" &&
      (e.failureClass === "permission" ||
        e.failureClass === "resource" ||
        e.failureClass === "environment" ||
        (e.failureClass === "unknown" && Po(e.cause))))
  );
}
function x(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let t = e,
    r = Array.isArray(t.members) ? t.members.filter(U) : [];
  return Array.isArray(t.members) && r.length === t.members.length
    ? t
    : { ...t, members: r };
}
function U(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "agentId" in e &&
    typeof e.agentId === "string" &&
    "name" in e &&
    typeof e.name === "string"
  );
}
async function readTeamFileAsync(e, t) {
  if (t) {
    let r = await t.read([C(e)]);
    if (!r.ok)
      return (
        logForDebugging(`[TeammateTool] Failed to read team file for ${e}: ${r.error.code}`),
        null
      );
    let a = r.value.items[0];
    if (!a.found) return null;
    try {
      return x(jsonParse(Buffer.from(a.value).toString("utf8")));
    } catch (o) {
      return (
        logForDebugging(`[TeammateTool] Failed to read team file for ${e}: ${l(o)}`),
        null
      );
    }
  }
  try {
    let r = await readFile(getTeamFilePath(e), "utf-8");
    return x(jsonParse(r));
  } catch (r) {
    if (A(r) === "ENOENT") return null;
    return (
      logForDebugging(`[TeammateTool] Failed to read team file for ${e}: ${l(r)}`),
      null
    );
  }
}
function logTeamFileWriteFailure(e, t) {
  if (Po(t))
    logForDebugging(`[TeammateTool] Failed to write team file for ${e} (${A(t)}): ${l(t)}`, {
      level: "error",
    });
  else if (L(t))
    logForDebugging(`[TeammateTool] Failed to write team file for ${e}: ${l(t)}`, {
      level: "error",
    });
  else logError(t);
}
function L(e) {
  if (!(e instanceof Error) || e.cause === void 0 || e.cause === null)
    return !1;
  let t = e.cause;
  if (typeof t !== "object" || typeof t.code !== "string") return !1;
  return v(t);
}
var H = {
  realpath: !1,
  retries: { retries: 10, minTimeout: 5, maxTimeout: 100 },
  onCompromised: () => {},
};
function M(e) {
  return new R(
    `Internal error: team file for "${e}" not found. The session team should have been initialized at startup.`,
    "Team file missing (session team not initialized)",
  );
}
async function updateTeamFile(e, t, r, a) {
  if (a) return K(e, t, r, a);
  let o = getTeamFilePath(e),
    i;
  try {
    i = await Cs(o, { lockfilePath: `${o}.lock`, ...H });
  } catch (s) {
    if (A(s) === "ENOENT") throw M(e);
    throw s;
  }
  try {
    let s = await readTeamFileAsync(e);
    if (!s)
      throw Error("Team config file unreadable (lock acquired, read failed)");
    let c = t(s);
    if (c === !1) return;
    try {
      await writeTeamFileAsync(e, s);
    } catch (m) {
      if (!r?.bestEffortWrite) throw m;
      logTeamFileWriteFailure(e, m);
    }
    return c;
  } finally {
    try {
      await i();
    } catch (s) {
      logForDebugging(`[TeammateTool] updateTeamFile lock release failed: ${l(s)}`);
    }
  }
}
async function removeTeamMember(e, t, r) {
  try {
    await updateTeamFile(
      e,
      (a) => {
        let o = a.members.findIndex((i) => i.agentId === t);
        if (o === -1) return !1;
        a.members.splice(o, 1);
      },
      void 0,
      r,
    );
  } catch (a) {
    logForDebugging(`[TeammateTool] removeTeamMember(${t}) failed: ${l(a)}`);
  }
}
async function K(e, t, r, a) {
  let o = C(e),
    i = 5,
    s = createJitteredBackoffDelay(50),
    c,
    m = (u) => {
      if (u === void 0) return { skip: !0, result: { kind: "missing" } };
      let p;
      try {
        p = x(jsonParse(Buffer.from(u.value).toString("utf8"))) ?? void 0;
      } catch (P) {
        return { skip: !0, result: { kind: "unreadable", parseError: l(P) } };
      }
      if (!p) return { skip: !0, result: { kind: "unreadable" } };
      let T;
      try {
        T = t(p);
      } catch (P) {
        return { skip: !0, result: { kind: "threw", error: P } };
      }
      if (T === !1) return { skip: !0, result: { kind: "declined" } };
      return (
        (c = T),
        { write: jsonStringify(p, null, 2), result: { kind: "applied", result: T } }
      );
    },
    d;
  for (let u = 1; ; u++) {
    if (((d = await a.update(o, m)), !d.ok)) {
      if (E(d.error) && u < 5) {
        await s(u);
        continue;
      }
      break;
    }
    let p = d.value.result;
    if (p === void 0 || p.kind === "declined") return;
    switch (p.kind) {
      case "missing":
        throw M(e);
      case "unreadable":
        if (p.parseError !== void 0)
          logForDebugging(
            `[TeammateTool] Failed to read team file for ${e}: ${p.parseError}`,
          );
        if (u < 5) {
          await s(u);
          continue;
        }
        throw Error("Team config file unreadable (lock acquired, read failed)");
      case "threw":
        throw p.error;
      case "applied":
        return (logFeatureOk("swarm_team_file_update"), p.result);
      default:
        return p;
    }
  }
  let I = j(d.error);
  if (I) logFeatureSad("swarm_team_file_update", "lock_contended");
  if (!r?.bestEffortWrite) {
    let u = new R(
      `Team file update failed (${w(d.error)}) for ${e}`,
      "Team file update failed (storage v5)",
    );
    if (((u.cause = d.error), !I && !v(d.error)))
      logFeatureBad("swarm_team_file_update", d.error.code);
    throw u;
  }
  if (!E(d.error) && v(d.error))
    logForDebugging(`[TeammateTool] Failed to update team file for ${e} (${w(d.error)})`, {
      level: "error",
    });
  else {
    let u = new R(
      `Team file update failed (${w(d.error)}) for ${e}`,
      "Team file update failed (storage v5)",
    );
    ((u.cause = d.error), logFeatureBad("swarm_team_file_update", d.error.code), logError(u));
  }
  return c;
}
async function writeTeamFileAsync(e, t, r) {
  if (r) {
    let o = await r.write(C(e), jsonStringify(t, null, 2), {
      precondition: { type: "none" },
    });
    if (!o.ok) {
      let i = new R(
        `Team file write failed (${w(o.error)}) for ${e}`,
        "Team file write failed (storage v5)",
      );
      throw ((i.cause = o.error), i);
    }
    return;
  }
  let a = S(e);
  (await mkdir(a, { recursive: !0 }), await writeFile(getTeamFilePath(e), jsonStringify(t, null, 2)));
}
async function removeTeammateFromTeamFile(e, t, r) {
  let a = t.agentId || t.name;
  if (!a)
    return (
      logForDebugging("[TeammateTool] removeTeammateFromTeamFile called with no identifier"),
      !1
    );
  let o = !1;
  try {
    let i =
      (await updateTeamFile(
        e,
        (s) => {
          o = !1;
          let c = s.members.length;
          s.members = s.members.filter((d) => {
            if (t.agentId && d.agentId === t.agentId) return !1;
            if (t.name && d.name === t.name) return !1;
            return !0;
          });
          let m = s.members.length !== c;
          return ((o = !m), m);
        },
        { bestEffortWrite: !0 },
        r,
      )) ?? !1;
    if (i) logForDebugging(`[TeammateTool] Removed teammate from team file: ${a}`);
    else if (o)
      logForDebugging(`[TeammateTool] Teammate ${a} not found in team file for "${e}"`);
    return i;
  } catch (i) {
    return (
      logForDebugging(`[TeammateTool] Cannot remove teammate ${a} from "${e}": ${l(i)}`),
      !1
    );
  }
}
async function removeMemberByAgentId(e, t, r, a) {
  let o = !1;
  try {
    let i =
      (await updateTeamFile(
        e,
        (s) => {
          let c = s.members.findIndex((d) => d.agentId === t),
            m = s.members[c];
          if (!m) return ((o = !1), !1);
          if (
            r?.onlyIfJoinedBefore !== void 0 &&
            m.joinedAt >= r.onlyIfJoinedBefore
          )
            return ((o = !0), !1);
          return ((o = !1), s.members.splice(c, 1), !0);
        },
        { bestEffortWrite: !0 },
        a,
      )) ?? !1;
    if (i) logForDebugging(`[TeammateTool] Removed member ${t} from team ${e}`);
    else if (o)
      logForDebugging(
        `[TeammateTool] Skipped stale removal of ${t} from team ${e} (re-added after removal was initiated)`,
      );
    return i;
  } catch (i) {
    return (
      logForDebugging(
        `[TeammateTool] removeMemberByAgentId(${t}) failed for team ${e}: ${l(i)}`,
      ),
      !1
    );
  }
}
async function setMemberMode(e, t, r, a) {
  let o = "unchanged";
  try {
    if (
      (await updateTeamFile(
        e,
        (i) => {
          let s = i.members.find((c) => c.name === t);
          if (!s) return ((o = "absent"), !1);
          if (s.mode === r) return ((o = "unchanged"), !1);
          ((o = "set"), (s.mode = r));
        },
        void 0,
        a,
      ),
      o === "absent")
    )
      logForDebugging(
        `[TeammateTool] Cannot set member mode: member ${t} not found in team ${e}`,
      );
    else if (o === "set")
      logForDebugging(`[TeammateTool] Set member ${t} in team ${e} to mode: ${r}`);
  } catch (i) {
    logForDebugging(`[TeammateTool] Cannot set member mode: ${l(i)}`);
  }
}
async function syncTeammateMode(e, t, r) {
  if (!isTeammate()) return;
  let a = t ?? getTeamName(),
    o = getAgentName();
  if (a && o) await setMemberMode(a, o, e, r);
}
async function setMemberActive(e, t, r, a) {
  let o = "unchanged";
  try {
    if (
      (await updateTeamFile(
        e,
        (i) => {
          let s = i.members.find((c) => c.name === t);
          if (!s) return ((o = "absent"), !1);
          if (s.isActive === r) return ((o = "unchanged"), !1);
          ((o = "set"), (s.isActive = r));
        },
        void 0,
        a,
      ),
      o === "absent")
    )
      logForDebugging(
        `[TeammateTool] Cannot set member active: member ${t} not found in team ${e}`,
      );
    else if (o === "set")
      logForDebugging(
        `[TeammateTool] Set member ${t} in team ${e} to ${r ? "active" : "idle"}`,
      );
  } catch (i) {
    logForDebugging(`[TeammateTool] Cannot set member active: ${l(i)}`);
  }
}
async function q(e) {
  let t = k(e, ".git"),
    r = null;
  try {
    if (pointerFileIsSuspect(t, e)) throw Error(".git pointer file is a symlink");
    let o = (await readFile(t, "utf-8")).trim().match(/^gitdir:\s*(.+)$/);
    if (o && o[1] && !ac(o[1].trim(), e) && !rawPointerPathIsUnsafe(o[1].trim(), e)) {
      let i = resolve(e, o[1].trim()),
        s = k(i, "..", "..");
      r = k(s, "..");
    }
  } catch {}
  if (!(await isPathSafeToRemove(e))) {
    logForDebugging(`[TeammateTool] kept worktree \u2014 unremovable reparse point in ${e}`);
    return;
  }
  if (r) {
    let a = await execFileNoThrowWithCwd(gitExe(), ["worktree", "remove", "--force", e], { cwd: r });
    if (a.code === 0) {
      logForDebugging(`[TeammateTool] Removed worktree via git: ${e}`);
      return;
    }
    if (a.stderr?.includes("not a working tree")) {
      logForDebugging(`[TeammateTool] Worktree already removed: ${e}`);
      return;
    }
    logForDebugging(
      `[TeammateTool] git worktree remove failed, falling back to rm: ${a.stderr}`,
    );
  }
  try {
    (await _(e, { recursive: !0, force: !0 }),
      logForDebugging(`[TeammateTool] Removed worktree directory manually: ${e}`));
  } catch (a) {
    logForDebugging(`[TeammateTool] Failed to remove worktree ${e}: ${l(a)}`);
  }
}
function registerTeamForSessionCleanup(e) {
  bYt().add(e);
}
async function cleanupSessionTeams(e) {
  return withFeatureTelemetry("swarm_session_cleanup", async () => {
    let t = bYt();
    if (t.size === 0) return;
    let r = Array.from(t);
    (logForDebugging(
      `cleanupSessionTeams: removing ${r.length} orphan team dir(s): ${r.join(", ")}`,
    ),
      await Promise.allSettled(r.map((a) => J(a, e))),
      await Promise.allSettled(r.map((a) => V(a, e))),
      t.clear());
  });
}
async function J(e, t) {
  let r = await readTeamFileAsync(e, t);
  if (!r) return;
  let a = r.members.filter(
    (m) => m.name !== TEAM_LEAD_AGENT_NAME && m.tmuxPaneId && m.backendType && supportsPaneKill(m.backendType),
  );
  if (a.length === 0) return;
  let [
    { ensureBackendsRegistered: o, getBackendByType: i },
    { isInsideTmux: s },
  ] = await Promise.all([
    import("./getBackendByType.cq91cmh5.js"),
    import("../../01-核心基础设施/共享小工具-未细化/terminal-backend-detection.js"),
  ]);
  await o();
  let c = !(await s());
  await Promise.allSettled(
    a.map(async (m) => {
      if (!m.tmuxPaneId || !m.backendType || !supportsPaneKill(m.backendType)) return;
      let d = await i(m.backendType).killPane(m.tmuxPaneId, c);
      logForDebugging(
        `cleanupSessionTeams: killPane ${m.name} (${m.backendType} ${m.tmuxPaneId}) \u2192 ${d}`,
      );
    }),
  );
}
async function V(e, t) {
  return withFeatureTelemetry("swarm_team_cleanup", async () => {
    let r = await readTeamFileAsync(e, t),
      a = [];
    if (r) {
      for (let i of r.members) if (i.worktreePath) a.push(i.worktreePath);
    }
    for (let i of a) await q(i);
    let o = S(e);
    try {
      (await _(o, { recursive: !0, force: !0 }),
        logForDebugging(`[TeammateTool] Cleaned up team directory: ${o}`));
    } catch (i) {
      logForDebugging(`[TeammateTool] Failed to clean up team directory ${o}: ${l(i)}`);
    }
  });
}
export {
  SwarmPaneError,
  containsControlCharacter,
  assertNoControlCharacters,
  supportsPaneKill,
  sanitizeName,
  sanitizeAgentName,
  getTeamFilePath,
  readTeamFileAsync,
  logTeamFileWriteFailure,
  updateTeamFile,
  removeTeamMember,
  writeTeamFileAsync,
  removeTeammateFromTeamFile,
  removeMemberByAgentId,
  setMemberMode,
  syncTeammateMode,
  setMemberActive,
  registerTeamForSessionCleanup,
  cleanupSessionTeams,
};
