// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 205 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { jsonStringify } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { readFileHardened } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { isFileReadDenied } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isNetworkPath, AutoModeSetupWriteError, writeAutoModeSetup } from "../权限系统/chunk-4wrkmv3h.js";
import { proposeAutoModeSetup, parseAutoModeProposal } from "./auto-mode-setup-proposal.js";
import "../工作树-Git/git-operations.js";
import { createHash } from "crypto";
import { realpath } from "fs/promises";
import { tmpdir } from "os";
import { isAbsolute, relative, resolve } from "path";
var C = ["user", "project"],
  A = { user: "all", project: "project" },
  n = `Usage:
  /auto-mode-setup [--request-id <uuid>] --wizard posture=<personal|open-source|enterprise|mixed> scope=<all|project> depth=<both|shell|repos|here> --propose
  /auto-mode-setup [--request-id <uuid>] [--apply-target <user|project>] --expect-sha256 <64-hex> --apply-file <absolute-path>   (reads a proposal JSON from a file under the system temp dir or the Claude config dir \u2014 the caller must have shown it to the user first; --expect-sha256 is required and the apply refuses unless the file\u2019s exact bytes hash to the given sha256)

--request-id must come first when used. The token must be a UUID (canonical 8-4-4-4-12 hex-and-dash form, either case) and is echoed verbatim as "requestId" on the command's JSON result, so a host with several commands in flight can match replies to requests.

--apply-target doesn\u2019t change where the config is written \u2014 entries always land in the user settings file. It refuses a proposal whose scope answer doesn\u2019t match the save choice (user \u2194 scope=all, project \u2194 scope=project). Flags ride in the order shown; everything after --apply-file is the path.`,
  S = /^[0-9a-fA-F]{64}$/,
  k = 1e6,
  v = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  V = async (e, t) => {
    let s = parseNonInteractiveArgs(e);
    return j(await q(s, t), s.requestId);
  };
async function q(e, t) {
  if (e.mode === "usage") {
    if (e.logCode !== void 0) logFeatureBad("auto_mode_setup_write", e.logCode);
    return { ok: !1, code: "usage", reason: e.message, usage: n };
  }
  if (e.mode === "apply-file") {
    if (e.expectedSha256 === void 0)
      return (
        logFeatureBad("auto_mode_setup_write", "missing_hash_arg"),
        {
          ok: !1,
          code: "missing_hash_arg",
          reason:
            "--expect-sha256 is required: pass the 64-character hex sha256 of the proposal file\u2019s exact bytes, before --apply-file. Every non-interactive apply is hash-bound.",
        }
      );
    if (!S.test(e.expectedSha256))
      return (
        logFeatureBad("auto_mode_setup_write", "bad_hash_arg"),
        {
          ok: !1,
          code: "bad_hash_arg",
          reason:
            "--expect-sha256 must be the 64-character hex sha256 digest of the proposal file\u2019s exact bytes.",
        }
      );
  }
  let s = getToolPermissionContext(t);
  if (e.mode === "propose") {
    let r = await proposeAutoModeSetup(
      e.answers,
      s,
      t.abortController.signal,
      void 0,
      void 0,
      t.storageV5,
      t.credentials,
    );
    if (!r.ok) return { ok: !1, code: r.code, reason: r.reason };
    return { ok: !0, proposal: r.proposal };
  }
  if (!isAbsolute(e.path) || isNetworkPath(e.path) || !(await isAllowedApplyFilePath(e.path)))
    return (
      logFeatureBad("auto_mode_setup_write", "bad_path"),
      {
        ok: !1,
        code: "bad_path",
        reason:
          "Pass an absolute path under the system temp directory or the Claude config directory \u2014 --apply-file only reads proposal files the reviewing host wrote there.",
      }
    );
  if (isFileReadDenied(e.path, { ...s, blockReadsOutsideWorkingDirectories: void 0 }))
    return (
      logFeatureBad("auto_mode_setup_write", "read_denied"),
      {
        ok: !1,
        code: "read_denied",
        reason:
          "That path is covered by a permissions.deny read rule. Write the proposal somewhere the session can read.",
      }
    );
  let o = await readFileHardened(e.path, k, {
    noFollow: !0,
    requireNlink1: !0,
    sniffEncoding: !0,
    withBytes: !0,
  });
  if (o === null)
    return (
      logFeatureBad("auto_mode_setup_write", "read_failed"),
      {
        ok: !1,
        code: "read_failed",
        reason:
          "Couldn\u2019t read the proposal file. Check the path and that it is a regular file.",
      }
    );
  let i = o.content;
  if (o.truncated)
    return (
      logFeatureBad("auto_mode_setup_write", "too_large"),
      {
        ok: !1,
        code: "too_large",
        reason:
          "The proposal file is over the 1 MB cap \u2014 a real proposal is a few KB. Regenerate it with --propose.",
      }
    );
  let d = e.expectedSha256.toLowerCase();
  if (createHash("sha256").update(o.bytes).digest("hex") !== d)
    return (
      logFeatureBad("auto_mode_setup_write", "hash_mismatch"),
      {
        ok: !1,
        code: "hash_mismatch",
        expectedSha256: d,
        reason:
          "The proposal file\u2019s bytes do not match the reviewed digest \u2014 the file changed after it was approved. Nothing was written; regenerate the proposal, re-review, and retry.",
      }
    );
  let a = parseAutoModeProposal(i);
  if (!a.ok)
    return (
      logFeatureBad("auto_mode_setup_write", a.code),
      {
        ok: !1,
        code: a.code,
        reason:
          a.code === "parse_failed"
            ? "That file doesn\u2019t contain a proposal this command can read. Regenerate it with --propose and pass that output."
            : a.reason.replace(
                /Re-run to try again\.?$/,
                "Regenerate the proposal with --propose.",
              ),
      }
    );
  if (e.target !== void 0) {
    let r = A[e.target];
    if (a.proposal.scope !== r)
      return (
        logFeatureBad("auto_mode_setup_write", "scope_mismatch"),
        {
          ok: !1,
          code: "scope_mismatch",
          reason:
            a.proposal.scope === void 0
              ? `This proposal was generated before save scope was recorded, so --apply-target ${e.target} can\u2019t confirm it matches. Regenerate the proposal with --propose, answering scope=${r}.`
              : `This proposal was generated for a different save scope (${a.proposal.scope}) than --apply-target ${e.target} expects (${r}). Regenerate the proposal with --propose, answering scope=${r}.`,
        }
      );
  }
  try {
    return {
      ok: !0,
      ...(await writeAutoModeSetup(
        {
          mode: a.proposal.mode,
          autoMode: {
            environment: a.proposal.environment,
            ...(a.proposal.allow.length > 0 && { allow: a.proposal.allow }),
            ...(a.proposal.soft_deny.length > 0 && {
              soft_deny: a.proposal.soft_deny,
            }),
            ...(a.proposal.hard_deny.length > 0 && {
              hard_deny: a.proposal.hard_deny,
            }),
          },
          removeFromPermissionsAllow: a.proposal.remove_from_permissions_allow,
        },
        t.storageV5,
      )),
      ...(e.target !== void 0 && { target: e.target }),
      ...(a.droppedUnsafeAllowCount > 0 && {
        droppedUnsafeAllowCount: a.droppedUnsafeAllowCount,
      }),
    };
  } catch (r) {
    return {
      ok: !1,
      code: r instanceof AutoModeSetupWriteError ? r.code : "write_failed",
      reason: r instanceof Error ? r.message : String(r),
    };
  }
}
async function isAllowedApplyFilePath(e) {
  let t = resolve(e),
    s = new Set();
  for (let o of [tmpdir(), getClaudeConfigDir()]) {
    s.add(resolve(o));
    try {
      s.add(await realpath(o));
    } catch {}
  }
  for (let o of s) {
    let i = relative(o, t);
    if (i !== "" && !i.startsWith("..") && !isAbsolute(i)) return !0;
  }
  return !1;
}
function extractRequestId(e) {
  let t = e.match(/^--request-id(?:=|\s+(?!--))(\S+)\s*/);
  if (!t) {
    if (/^--request-id=?(?=\s|$)/.test(e))
      return {
        ok: !1,
        message: `--request-id needs a value.
${n}`,
      };
    return { ok: !0, rest: e };
  }
  let s = t[1];
  if (!v.test(s))
    return {
      ok: !1,
      message: `--request-id must be a UUID in canonical 8-4-4-4-12 hex-and-dash form (either case) \u2014 the token is refused, not echoed.
${n}`,
    };
  return { ok: !0, rest: e.slice(t[0].length), requestId: s };
}
function parseNonInteractiveArgs(e) {
  let t = extractRequestId(e.trim());
  if (!t.ok)
    return { mode: "usage", message: t.message, logCode: "bad_flag_grammar" };
  let s = P(t.rest);
  return t.requestId === void 0 ? s : { ...s, requestId: t.requestId };
}
function P(e) {
  let t = e.trim();
  if (t === "" || t === "--help" || t === "-h")
    return { mode: "usage", message: n };
  if (/^--request-id(?:=|\s|$)/.test(t))
    return {
      mode: "usage",
      message:
        `--request-id was given more than once \u2014 pass exactly one, as the first flag.
` + n,
      logCode: "bad_flag_grammar",
    };
  let s,
    o = t,
    i = o.match(/^--apply-target(?:[= ]\s*(\S+))?(?:\s+|$)/);
  if (i) {
    if (((s = c(i[1], C)), !s))
      return {
        mode: "usage",
        message: `--apply-target must be "user" or "project".
${n}`,
        logCode: "bad_flag_grammar",
      };
    if (((o = o.slice(i[0].length)), /^--apply-target(?:[= ]|\s|$)/.test(o)))
      return {
        mode: "usage",
        message:
          `--apply-target was given more than once \u2014 pass exactly one.
` + n,
        logCode: "bad_flag_grammar",
      };
    if (/^--request-id(?:=|\s|$)/.test(o))
      return {
        mode: "usage",
        message:
          `--request-id must come first, before --apply-target and --expect-sha256.
` + n,
        logCode: "bad_flag_grammar",
      };
    if (!/^(?:--expect-sha256|--apply-file)(?:\s|$)/.test(o))
      return {
        mode: "usage",
        message: `--apply-target only applies to --apply-file.
${n}`,
        logCode: "bad_flag_grammar",
      };
  }
  let d;
  if (/^--expect-sha256=/.test(o))
    return {
      mode: "usage",
      message:
        "--expect-sha256 takes its value space-separated, not with `=`: --expect-sha256 <64-hex> --apply-file <path>.\n" +
        n,
      logCode: "bad_flag_grammar",
    };
  if (/^--expect-sha256(?:\s|$)/.test(o)) {
    let u = o.match(/^--expect-sha256\s+(\S+)\s*(.*)$/s),
      p = u?.[1];
    if (p === void 0 || p.startsWith("--"))
      return {
        mode: "usage",
        message:
          `--expect-sha256 needs the 64-character hex sha256 of the proposal file\u2019s exact bytes.
` + n,
        logCode: "bad_flag_grammar",
      };
    if (((d = p), (o = u[2]), !/^--apply-file(?:\s|$)/.test(o)))
      return {
        mode: "usage",
        message:
          `--expect-sha256 applies only to --apply-file and must come directly before it (--apply-target goes before --expect-sha256).
` + n,
        logCode: "bad_flag_grammar",
      };
  }
  if (/^--apply-file(?:\s|$)/.test(o)) {
    let u = o.match(/^--apply-file\s+(.+)$/s);
    if (u) {
      let p = u[1].trim();
      if (/(?:^|\s)--expect-sha256(?:=|\s|$)/.test(p))
        return {
          mode: "usage",
          message:
            `--expect-sha256 must come before --apply-file, not after it.
` + n,
          logCode: "bad_flag_grammar",
        };
      if (/(?:^|\s)--request-id(?:=|\s|$)/.test(p))
        return {
          mode: "usage",
          message:
            `--request-id must come first, before --expect-sha256 and --apply-file \u2014 not after --apply-file.
` + n,
          logCode: "bad_flag_grammar",
        };
      if (/(?:^|\s)--apply-target(?:=|\s|$)/.test(p))
        return {
          mode: "usage",
          message:
            `--apply-target must come before --expect-sha256 and --apply-file \u2014 not after --apply-file.
` + n,
          logCode: "bad_flag_grammar",
        };
      return {
        mode: "apply-file",
        path: E(p),
        ...(s !== void 0 && { target: s }),
        ...(d !== void 0 && { expectedSha256: d }),
      };
    }
    return {
      mode: "usage",
      message:
        `--apply-file needs a path to the reviewed proposal JSON.
` + n,
      logCode: "bad_flag_grammar",
    };
  }
  let l = o.match(
    /^--wizard posture=(\S+) scope=(\S+) depth=(\S+)\s+--propose$/,
  );
  if (!l) {
    if (/--apply\b/.test(o))
      return {
        mode: "usage",
        message:
          "One-shot --apply isn\u2019t available (it would write model output with no review). Use --propose, show the result to the user, then --apply-file <path>.",
      };
    return {
      mode: "usage",
      message: `Couldn\u2019t parse arguments.
${n}`,
    };
  }
  let a = c(l[1], ["personal", "open-source", "enterprise", "mixed"]),
    r = c(l[2], ["all", "project"]),
    m = c(l[3], ["both", "shell", "repos", "here"]);
  if (!a || !r || !m)
    return {
      mode: "usage",
      message: `Couldn\u2019t parse arguments.
${n}`,
    };
  return { mode: "propose", answers: { posture: a, scope: r, depth: m } };
}
function E(e) {
  return (e.startsWith('"') && e.endsWith('"')) ||
    (e.startsWith("'") && e.endsWith("'"))
    ? e.slice(1, -1)
    : e;
}
function c(e, t) {
  return t.find((s) => s === e);
}
function j(e, t) {
  let s = t === void 0 ? e : { ...e, requestId: t };
  return { type: "text", value: jsonStringify(s, null, 2) };
}
export {
  V as call,
  extractRequestId,
  isAllowedApplyFilePath,
  parseNonInteractiveArgs,
};
