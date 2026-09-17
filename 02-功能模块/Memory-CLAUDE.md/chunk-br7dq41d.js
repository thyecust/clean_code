// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { he, VR, ES, Dx, Aje } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { zn } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { A, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { expandPathAliases, changeWorkingDirectory, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { isWorkspacePersistedTrusted, isPathTrusted, setPathTrusted, clearProjectPathForConfigCache } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { reanchorGitFileWatcher, findCanonicalGitRootUncached, clearIsGitMemoFor } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { resolvePath, pf } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { getSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { formatPermissionRule } from "../工具Bash-Shell/permission-rule-parsing.js";
import { getReplBridgeHandle } from "../权限系统/chunk-1y2g140m.js";
import { relocateBgSessionCwd } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import { hasRepoSettingsRequiringTrust, getAlwaysAllowRules, getAlwaysDenyRules, relativePath, patternWithRoot, normalizeTrustedSymlink } from "./Memory-CLAUDE.md.vx19drc8.js";
import {
  getProjectDirsUpToHome,
  settingsChangeDetector,
  SandboxManager,
  permissionRuleSourceDisplayString,
  bumpRenderVersions,
  setSessionCwd,
  discoverDynamicSkills,
  wrapSystemReminder,
  relocateSessionTranscript,
  getGitWorktreeRoots,
  isInMainRepoOutsideWorktree,
  getSessionMemoryFiles,
  buildMemoryPromptSection,
  loadMemoryFilesForDirectory,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { updateHooksConfigSnapshot } from "../Skills技能/chunk-sapykxw7.js";
import { skillChangeDetector } from "../文件监听-Watch/skill-change-detector.js";
import { validateUntrustedPath, getUntrustedPathReason } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { escapePromptText } from "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { homedir } from "os";
import { realpath, stat as j } from "fs/promises";
import { dirname, parse } from "path";
var _ = "Cd";
function R(e, t) {
  let o = dedupe([...expandPathAliases(e.requestedPath), e.canonicalPath]),
    c = dedupe([e.canonicalPath, normalizeTrustedSymlink(e.canonicalPath)]),
    s = (r, d, m) => m.some((y) => D(r, d, y));
  for (let r of getAlwaysDenyRules(t)) {
    if (r.ruleValue.toolName !== _) continue;
    let d = r.ruleValue.ruleContent;
    if (d === void 0 || s(d, r.source, o))
      return { result: "blockedByRule", rule: r };
  }
  let l = getAlwaysAllowRules(t).filter((r) => r.ruleValue.toolName === _);
  if (l.length === 0) return { result: "allowed" };
  for (let r of l) {
    let d = r.ruleValue.ruleContent;
    if (d === void 0 || s(d, r.source, c)) return { result: "allowed" };
  }
  return {
    result: "outsideAllowedPatterns",
    allowedPatterns: l
      .map((r) => r.ruleValue.ruleContent)
      .filter((r) => r !== void 0),
  };
}
function D(e, t, o) {
  let { relativePattern: c, root: s } = patternWithRoot(e, t),
    l = relativePath(s ?? getCwd(), o);
  if (l === ".." || l.startsWith("../")) return !1;
  let r = c
    .replace(/\/{2,}/g, "/")
    .replace(/^\//, "")
    .replace(/\/$/, "");
  return x(r).test(l);
}
function x(e) {
  let t = "^";
  for (let o = 0; o < e.length; o++) {
    let c = e[o];
    if (o === 0 && c === "*" && e[1] === "*" && e[2] === "/")
      ((t += "(?:.*/)?"), (o += 2));
    else if (c === "/" && e[o + 1] === "*" && e[o + 2] === "*")
      ((t += "(/.*)?"), (o += 2));
    else if (c === "*")
      if (e[o + 1] === "*") ((t += ".*"), o++);
      else t += "[^/]+";
    else if ("\\^$.|?+()[]{}".includes(c)) t += `\\${c}`;
    else t += c;
  }
  return new RegExp(`${t}$`, "i");
}
async function recordDirectoryTrust(e, t) {
  if (await E(e)) {
    (Dx(!0), Aje(!0));
    return;
  }
  await setPathTrusted(e, t);
}
async function E(e) {
  let t = async (o) => {
    let c = o;
    try {
      c = await realpath(o);
    } catch {}
    return pf(zn(c));
  };
  return (await t(e)) === (await t(homedir()));
}
async function validateCdTarget(e, t) {
  let o = resolvePath(e);
  try {
    if (!(await j(o)).isDirectory())
      return { result: "not_a_directory", path: o, parent: dirname(o) };
  } catch (r) {
    if (!Rt(r))
      logError(Object.assign(Error("cd: unexpected stat errno"), { code: A(r) }));
    return { result: "not_found", path: o };
  }
  let c = o;
  try {
    c = await realpath(o);
  } catch {
    c = o;
  }
  let s = zn(c);
  if (s === getCwd() && s === he()) return { result: "same", directory: c };
  let l = R({ requestedPath: o, canonicalPath: c }, t);
  if (l.result !== "allowed")
    return { result: "blocked_by_rule", directory: c, check: l };
  return { result: "ok", directory: c };
}
function cdRuleRefusalMessage(e, t, o = (s) => s, c) {
  let s = c?.terminalAffordances !== !1,
    l = c?.display ?? ((r) => r);
  if (((e = l(e)), t.result === "blockedByRule")) {
    let r = l(formatPermissionRule(t.rule.ruleValue)),
      d = permissionRuleSourceDisplayString(t.rule.source);
    if (t.rule.ruleValue.ruleContent === void 0)
      return s
        ? `Can't move to ${o(e)} \u2014 /cd is turned off by the ${o(r)} rule in ${d}. Update the rule in /permissions to move between directories again.`
        : `Can't move to ${o(e)} \u2014 directory changes are turned off by the ${o(r)} permission rule in ${d}.`;
    return s
      ? `Can't move to ${o(e)} \u2014 it's excluded by the ${o(r)} rule in ${d}. Pick a directory outside that rule, or update it in /permissions.`
      : `Can't move to ${o(e)} \u2014 it's excluded by the ${o(r)} permission rule in ${d}. Pick a directory outside that rule.`;
  }
  return s
    ? `Can't move to ${o(e)} \u2014 /cd is limited to directories matching ${t.allowedPatterns.map((r) => o(l(r))).join(", ")}. Pick a matching directory, or add a Cd rule in /permissions.`
    : `Can't move to ${o(e)} \u2014 directory changes are limited to ${t.allowedPatterns.map((r) => o(l(r))).join(", ")}. Pick a matching directory.`;
}
async function N(e, t, o) {
  if (a.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return "";
  let c = new Set();
  for (let m of await getSessionMemoryFiles(e, !1, o)) c.add(pf(m.path));
  let s = [],
    l = t;
  while (l !== parse(l).root) (s.push(l), (l = dirname(l)));
  let r = getGitWorktreeRoots(t),
    d = [];
  for (let m of s.reverse())
    d.push(...(await loadMemoryFilesForDirectory(m, t, c, { skipProject: isInMainRepoOutsideWorktree(m, r) })));
  return buildMemoryPromptSection(d);
}
async function relocateSession(e, t, o, c) {
  let s = getCwd(),
    l = he(),
    r = dedupe([l, s]),
    d = dedupe(
      [
        ...(getSettingsForSource("projectSettings")?.permissions?.additionalDirectories ?? []),
        ...(getSettingsForSource("localSettings")?.permissions?.additionalDirectories ?? []),
      ].flatMap((p) => {
        try {
          return r.map((C) => resolvePath(p, C));
        } catch {
          return [];
        }
      }),
    );
  (changeWorkingDirectory(t), setSessionCwd(t), ES(getCwd()));
  let m = !0;
  try {
    await relocateSessionTranscript(c);
  } catch (p) {
    m = !1;
    let C = !1;
    try {
      (changeWorkingDirectory(s), (C = !0));
    } catch {
      logForDebugging(
        `directory move: transcript move failed and rollback chdir failed; completing the move with the transcript left in its previous home: ${p}`,
        { level: "error" },
      );
    }
    if (C) throw (setSessionCwd(s), ES(l), p);
  }
  if (m)
    try {
      await relocateBgSessionCwd(getCwd(), c);
    } catch (p) {
      logForDebugging(`directory move: bg session state rehome failed (continuing): ${p}`, {
        level: "error",
      });
    }
  clearProjectPathForConfigCache();
  try {
    await settingsChangeDetector.rehome();
  } catch (p) {
    logForDebugging(
      `directory move: re-targeting the settings watcher failed (continuing with the previous watch): ${p}`,
      { level: "error" },
    );
  }
  try {
    (updateHooksConfigSnapshot(), settingsChangeDetector.notifyChange("projectSettings", { prevCwd: l }));
  } catch (p) {
    logForDebugging(
      `directory move: re-resolving settings and hooks for the new directory failed (continuing): ${p}`,
      { level: "error" },
    );
  }
  try {
    await discoverDynamicSkills(await getProjectDirsUpToHome("skills", getCwd()));
  } catch (p) {
    logForDebugging(
      `directory move: registering the new directory's skills failed (continuing without them): ${p}`,
      { level: "error" },
    );
  }
  try {
    await skillChangeDetector.rehome();
  } catch (p) {
    logForDebugging(
      `directory move: re-targeting the skill watcher failed (continuing with the previous watch): ${p}`,
      { level: "error" },
    );
  }
  (reanchorGitFileWatcher(),
    clearIsGitMemoFor(e),
    getReplBridgeHandle()?.refreshGitBranch?.(),
    SandboxManager.refreshConfig(),
    bumpRenderVersions(),
    logEvent("tengu_cd_command", { source: fromEnum(o) }));
  let y = "";
  try {
    y = await N(e, t, c);
  } catch (p) {
    logForDebugging(
      `directory move: loading the new directory's memory context failed (continuing without it): ${p}`,
      { level: "error" },
    );
  }
  let g = escapePromptText(t),
    w = wrapSystemReminder(
      `The session's working directory has changed to ${g} (${o === "cd_command" ? "via /cd" : "by the user"}). The environment block at the start of this conversation still names the ` +
        "previous directory \u2014 that information is stale. All tool calls and " +
        `relative paths now resolve from ${g}. Project settings (permission rules, hooks), project MCP servers, and project skills now come from ${g}; its CLAUDE.md, if any, follows below. Environment variables set by the previous directory's ` +
        "settings stay in effect for this process \u2014 they cannot be unset \u2014 and " +
        "the new directory's settings env is applied on top of them.",
    ),
    v = !1;
  try {
    v = !a.CLAUDE_CODE_SANDBOXED && !VR() && !isWorkspacePersistedTrusted() && hasRepoSettingsRequiringTrust();
  } catch (p) {
    logForDebugging(
      `directory move: probing the gated project grants failed (continuing): ${p}`,
      { level: "error" },
    );
  }
  let P = v
    ? wrapSystemReminder(
        `Note: ${g} declares project permission rules and/or additional directories in its settings, but they are NOT applied \u2014 the workspace is trusted only through a parent directory's grant, and project-scoped grants require trusting this directory explicitly. Tool calls those rules would have pre-approved will ask for permission.`,
      )
    : "";
  return {
    modelMessage: [w, P, y].filter(Boolean).join(`

`),
    transcriptRelocated: m,
    projectGrantsGated: v,
    gatedNotice: P,
    departedAdditionalDirectories: d,
  };
}
function reapplyProjectSettingsAfterTrustChange() {
  (clearProjectPathForConfigCache(), updateHooksConfigSnapshot(), settingsChangeDetector.notifyChange("projectSettings", { trustFlip: !0 }));
}
function withGatedGrantsApplied(e) {
  if (e.gatedNotice === "") return e.modelMessage;
  return e.modelMessage.replace(
    e.gatedNotice,
    wrapSystemReminder(
      "The user trusted this directory explicitly: its project permission rules and additional directories are now applied.",
    ),
  );
}
var k =
  /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/u;
function safeWireMessage(e, t) {
  return k.test(e) ? t : e;
}
async function handleSetCwdControlRequest(e, t) {
  if (t.isBusy())
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "busy",
        message:
          "A turn is in progress \u2014 the working directory can only change while the session is idle. Wait for the turn to finish (or interrupt it), then retry.",
      },
    };
  if (typeof e.path !== "string" || e.path.trim() === "")
    return {
      kind: "invalid",
      message:
        "set_cwd: invalid request \u2014 path must be a non-empty string",
    };
  let o = e.trust_accepted === !0;
  if (o && typeof e.trusted_directory !== "string")
    return {
      kind: "invalid",
      message:
        "set_cwd: invalid request \u2014 trust_accepted requires trusted_directory (echo the directory from the needs_trust response)",
    };
  let c = !1;
  try {
    c = validateUntrustedPath(
      e.path,
      resolvePath(e.path),
      t.toolPermissionContext.trustedNetworkDirectories,
    ).ok;
  } catch {
    c = !1;
  }
  if (!c)
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "unsafe_path",
        message:
          "The target is a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back.",
      },
    };
  let s = await validateCdTarget(e.path.trim(), t.toolPermissionContext),
    l = "directory" in s ? s.directory : s.path;
  if (k.test(l))
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "unsafe_path",
        message:
          "The target path contains invisible or non-printing characters (control, formatting, zero-width, or non-standard space characters such as the narrow no-break space macOS puts in screenshot folder names), so it cannot safely cross the trust boundary. The path is deliberately not echoed back.",
      },
    };
  if (
    "directory" in s &&
    getUntrustedPathReason(s.directory, t.toolPermissionContext.trustedNetworkDirectories) !==
      void 0
  )
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "unsafe_path",
        message:
          "The target resolved to a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back.",
      },
    };
  if (s.result === "not_found")
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "not_found",
        message: `Couldn't find a directory at ${s.path}.`,
      },
    };
  if (s.result === "not_a_directory")
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "not_a_directory",
        message: `${s.path} is not a directory.`,
      },
    };
  if (s.result === "blocked_by_rule")
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "blocked_by_rule",
        message: safeWireMessage(
          cdRuleRefusalMessage(s.directory, s.check, void 0, { terminalAffordances: !1 }),
          "A Cd permission rule blocks this directory. The rule text contains control or invisible characters, so it is not echoed here \u2014 check the Cd(...) entries in your settings.",
        ),
      },
    };
  if (s.result === "same")
    return {
      kind: "response",
      response: {
        status: "ok",
        cwd: s.directory,
        changed: !1,
        transcript_relocated: !0,
      },
    };
  let r = s.directory;
  if (!isPathTrusted(r)) {
    let f = findCanonicalGitRootUncached(r),
      w = f != null && f !== r && !k.test(f) ? f : void 0;
    if (!o)
      return {
        kind: "response",
        response:
          w != null
            ? { status: "needs_trust", directory: r, trust_root: w }
            : { status: "needs_trust", directory: r },
      };
    if (e.trusted_directory !== r)
      return {
        kind: "response",
        response:
          w != null
            ? { status: "needs_trust", directory: r, trust_root: w }
            : { status: "needs_trust", directory: r },
      };
    await recordDirectoryTrust(r, t.storageV5);
  }
  if (t.isBusy())
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "busy",
        message:
          "A turn started while the request was being validated. Retry when the session is idle.",
      },
    };
  let {
    modelMessage: d,
    transcriptRelocated: m,
    departedAdditionalDirectories: y,
  } = await relocateSession(t.session, r, "set_cwd", t.storageV5);
  try {
    t.retireDepartedAdditionalDirectories?.(y);
  } catch (f) {
    logForDebugging(
      `set_cwd: retiring the previous project's additional directories failed (continuing): ${f}`,
      { level: "error" },
    );
  }
  try {
    t.enqueueMoveNotice(d);
  } catch (f) {
    logForDebugging(`set_cwd: enqueueing the move notice failed (continuing): ${f}`, {
      level: "error",
    });
  }
  let g = getCwd();
  return {
    kind: "response",
    response: {
      status: "ok",
      cwd: k.test(g) ? r : g,
      changed: !0,
      transcript_relocated: m,
    },
  };
}
export { recordDirectoryTrust, validateCdTarget, cdRuleRefusalMessage, relocateSession, reapplyProjectSettingsAfterTrustChange, withGatedGrantsApplied, safeWireMessage, handleSetCwdControlRequest };
