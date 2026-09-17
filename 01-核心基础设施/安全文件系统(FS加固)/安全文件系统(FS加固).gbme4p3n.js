// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { CS, Le, zn, An, XR, ac, Dr, hZ } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { O_NONBLOCK_FLAG, O_NOFOLLOW_NONBLOCK_FLAGS } from "../共享小工具-未细化/open-flags.js";
import { R, l, A, Jr, W, Kd } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { j, Gt, B, K, he, urt, Mx, Nn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../共享小工具-未细化/chunk-h62vxw7j.js";
import { getCwd } from "../共享小工具-未细化/cwd-context.js";
import { hs, Wnt, Gnt, Dur, CL, Cg, wc, Et, ae, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize, beforeFirst } from "../核心工具-字符串与文本/string-utils.js";
import { qR } from "../设置-配置/chunk-zqr5ctyf.js";
import { logError } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { GIT_HARDENED_ARGS, execFileNoThrow, execFileNoThrowWithCwd } from "../../02-功能模块/Git-Worktree/git-exec-hardening.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getProjectsDir, getProjectKey, getProjectDir, BACKUP_FILE_NAME_PATTERN_WITH_LEGACY } from "../../02-功能模块/会话-历史-恢复/chunk-mkmy4cx2.js";
import { getFileStorage } from "../共享小工具-未细化/file-storage.js";
import { isValidPathSegment, hasValidPathSegments, isJsonlFileName, getNormalizedNames, STORAGE_KEYS } from "../../02-功能模块/Teammates团队/storage-keys.js";
import { writeDiagnosticsEvent } from "../共享小工具-未细化/diagnostics-log.js";
import { GITHUB_HOST, isGitHubHost } from "../共享小工具-未细化/git-host-utils.js";
import { runPaginatedScan } from "../共享小工具-未细化/paginated-scan.js";
import { Ku } from "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { formatFileSize } from "../共享小工具-未细化/chunk-7axvc6rn.js";
import {
  closeSync,
  constants as eo,
  fstatSync,
  lstatSync as no,
  openSync,
  readlinkSync,
  readSync,
  statSync as io,
  unwatchFile,
} from "fs";
import { readdir as ao, readFile as le, stat as Mt } from "fs/promises";
import { constants as br } from "fs";
import * as T from "fs/promises";
import { randomUUID } from "crypto";
import { constants as ut } from "fs";
import {
  mkdir,
  open as ar,
  readdir as cr,
  readFile as lr,
} from "fs/promises";
import { basename as ur, dirname as dr, join as dt } from "path";
var FIRST_PARTY_MAX_IMAGE_BASE64_BYTES = 10485760;
var DEFAULT_MAX_IMAGE_RAW_BYTES = 512000;
var Ut = {
    imageMaxRawBytes: 307200,
    wholePdfMaxRawBytes: 0,
    pdfMaxPagesPerRead: 3,
  },
  Wt = {
    imageMaxRawBytes: 512000,
    wholePdfMaxRawBytes: 2500000,
    pdfMaxPagesPerRead: 6,
  };
function getAttachmentLimitsForTransport(e) {
  return e === "session" ? Wt : Ut;
}
var _e = 28;
function estimateImageTokenCount(e, t) {
  if (e <= 0 || t <= 0) return 0;
  return Math.ceil(e / _e) * Math.ceil(t / _e);
}
var DEFAULT_IMAGE_LIMITS = {
    maxWidth: 2000,
    maxHeight: 2000,
    maxBase64Size: 5242880,
    targetRawSize: 3932160,
  },
  DEFAULT_REQUEST_BYTE_LIMIT = 33554432,
  MAX_PDF_ATTACHMENT_BYTES = 20971520,
  MAX_PDF_ATTACHMENT_PAGES = 100,
  PDF_PAGE_EXTRACTION_SIZE_THRESHOLD = 3145728,
  MAX_BINARY_CONTENT_BYTES = 104857600,
  DEFAULT_MAX_PDF_PAGES_PER_READ = 20,
  MAX_PDF_PAGES_FOR_WHOLE_READ = 10,
  DEFAULT_MAX_MEDIA_BLOCKS = 100,
  LONG_CONTEXT_MAX_MEDIA_BLOCKS = 600,
  MEDIA_BLOCK_RESERVE_COUNT = 20,
  MEDIA_BYTE_CAP_FOR_OTHER_PROVIDERS = 78643200,
  MEDIA_BYTE_CAP_FOR_DEFAULT_ENDPOINT = DEFAULT_REQUEST_BYTE_LIMIT - 8388608,
  MEDIA_BYTE_CAP_SAFETY_MARGIN = 10485760;
import {
  basename as Jn,
  dirname as Zn,
  isAbsolute as Qn,
  join as pe,
  relative as er,
  sep as it,
} from "path";
import { basename as ot, dirname as st } from "path";
import { constants as Ie } from "fs";
import {
  link as Ko,
  lstat as Zt,
  open as ke,
  readlink,
  realpath as Go,
  stat as Ho,
  unlink,
} from "fs/promises";
var Vt = new Set(["ENOENT", "ENOTDIR"]),
  Yt = new Set([
    "EAGAIN",
    "EBUSY",
    "EMFILE",
    "ENFILE",
    "ENOSPC",
    "EDQUOT",
    "ENOMEM",
  ]);
function Xt(e) {
  let t = A(e);
  return t !== void 0 && Vt.has(t);
}
function isErrnoCode(e, t) {
  return A(e) === t;
}
function isRetryableFsError(e) {
  let t = A(e);
  return t !== void 0 && Yt.has(t);
}
function Jt(e) {
  return Xt(e) ? { kind: "absent" } : { kind: "fs", error: e };
}
async function ee(e) {
  try {
    return CL(await e);
  } catch (t) {
    return Cg(Jt(t));
  }
}
var DEFAULT_OPEN_FILE_MODE = 384;
async function Qt(e, t, r = DEFAULT_OPEN_FILE_MODE) {
  let o = await ee(Zt(e));
  if (!o.ok && o.error.kind !== "absent") return Cg(o.error);
  if (o.ok && !o.value.isFile()) return Cg(tn(e, o.value));
  return ee(ke(e, t | O_NOFOLLOW_NONBLOCK_FLAGS, r));
}
async function openFileReadOnlyHardened(e) {
  if (O_NOFOLLOW_NONBLOCK_FLAGS === 0) return Qt(e, Ie.O_RDONLY);
  return en(e, await ee(ke(e, Ie.O_RDONLY | O_NOFOLLOW_NONBLOCK_FLAGS)));
}
function en(e, t) {
  return !t.ok && t.error.kind === "fs" && isErrnoCode(t.error.error, "ELOOP")
    ? Cg({ kind: "fs", error: xe(e, "ELOOP") })
    : t;
}
function xe(e, t) {
  return Object.assign(nn(t), { code: t, path: e });
}
function tn(e, t) {
  return { kind: "fs", error: xe(e, t.isSymbolicLink() ? "ELOOP" : "ENXIO") };
}
function nn(e) {
  switch (e) {
    case "ELOOP":
      return Error("refusing a symlinked path");
    case "ENXIO":
      return Error("refusing a non-regular file");
    case "EISDIR":
      return Error("refusing a directory at the leaf");
    case "ENOTDIR":
      return Error("refusing a non-directory node on a write path");
    case "EFBIG":
      return Error("refusing a file over the size cap");
    case Wnt:
      return Error("refusing a value that has a second name (hard link)");
    case Gnt:
      return Error(
        "refusing a value whose opened object is no longer at its key",
      );
    case Dur:
      return Error("refusing a hardened read the host cannot verify");
  }
}
class ve {
  available = void 0;
  probing = void 0;
  procUnreadableLogged = !1;
}
var es = new j(() => new ve());
var LINK_MISDIRECTED_TELEMETRY_CODE = "LinkMisdirected",
  LINK_UNVERIFIED_TELEMETRY_CODE = "LinkUnverified";
function rn(e) {
  return hs(
    e,
    "expected a segment that is not empty or made only of dots and spaces, with no path separator, NUL or set-aside shape",
  );
}
function validateStorageKey(e) {
  if (typeof e !== "object" || e === null)
    return hs("key", "expected a key object");
  let t = mn(e);
  if (t !== void 0) return t;
  let r = Un(e);
  if (r === void 0)
    return hs("key", `${e.namespace} is not a storage namespace`);
  return je("key", r);
}
function je(e, t) {
  for (let [r, o, s] of t) {
    let i = `${e}.${r}`;
    if (o === void 0) {
      if (s !== "optional") return hs(i, "required");
    } else if (on(r)) {
      if (
        !(
          e === "scope" &&
          r === "agentRelPath" &&
          Array.isArray(o) &&
          o.length === 0
        ) &&
        (!Array.isArray(o) || !hasValidPathSegments(o))
      )
        return hs(
          i,
          "expected a non-empty array of segments, none empty or made only of dots and spaces, with no path separator, NUL or set-aside shape",
        );
    } else if (typeof o !== "string" || !isValidPathSegment(o)) return rn(i);
  }
  return;
}
function on(e) {
  return e === "relPath" || e === "agentRelPath";
}
var De = [
  "commands",
  "agents",
  "output-styles",
  "skills",
  "workflows",
  "routines",
  "themes",
  "rules",
  "session-env",
  "uploads",
  "mcp-skill-archives",
  "usage-data",
  "mcp-discovery-cache",
];
var Oe = new Set(De),
  Te = `must be one of the userConfigDir directory names (${De.join(", ")})`,
  Me = ["installed", "marketplaces", "flagged", "catalog", "inUseSweep"];
var sn = new Set(Me),
  an = `must be one of the pluginRegistry files (${Me.join(", ")})`,
  Ne = ["manifest", "catalog"];
var cn = new Set(Ne),
  ln = `must be one of the marketplaceCache forms (${Ne.join(", ")})`;
var Ke = ["world"];
var un = new Set(Ke),
  dn = `must be one of the session journal names (${Ke.join(", ")})`;
function pn(e) {
  return un.has(e);
}
function gn(e) {
  return typeof e === "string" && /^[0-9a-f]{64}$/.test(e);
}
function mn(e) {
  if (e.namespace === "transcript") return bn(e);
  if (e.namespace === "pluginAssetCache" && !gn(e.digest))
    return hs(
      "key.digest",
      "must be a SHA-256 digest: 64 lowercase hexadecimal characters",
    );
  if (e.namespace === "globalConfig" && "kind" in e) {
    if (!Ue(e.kind)) return hs("key.kind", $e);
    if (typeof e.stamp !== "string")
      return hs("key.stamp", "a recovery copy key carries its stamp");
  }
  if (e.namespace === "task") return Dn(e);
  if (e.namespace === "sidecar") {
    let t = ne("key.sessionId", e.sessionId);
    if (t !== void 0) return t;
    if (re(e.relPath)) return hs("key.relPath", Y);
    return Ye(e.relPath) ? hs("key.relPath", ze) : void 0;
  }
  if (e.namespace === "recording")
    return (
      ne("key.sessionId", e.sessionId) ??
      (Ve(e.stamp) ? void 0 : hs("key.stamp", En))
    );
  if (e.namespace === "jobsRoot") return On(e);
  if (e.namespace === "userConfigDir" && !Oe.has(e.dir))
    return hs("key.dir", Te);
  if (e.namespace === "fileHistory") return hn(e);
  if (e.namespace === "settings" && !Fn(e.layer))
    return hs("key.layer", "must be user, project or local");
  if (e.namespace === "log") return Ln(e);
  if (e.namespace === "job" && nt(e.relPath)) return hs("key.relPath", tt);
  if (e.namespace === "sessionLog")
    return (
      rt("key", e) ??
      (Gn(e.logName)
        ? void 0
        : hs(
            "key.logName",
            "must be the session-log stem <sessionId8>[-<title-slug>]: up to eight word characters, then lower-case a-z / 0-9 runs joined by single hyphens; not a bare device name",
          ))
    );
  if (e.namespace === "pluginRegistry" && !sn.has(e.file))
    return hs("key.file", an);
  if (e.namespace === "marketplaceCache") {
    if (!("relPath" in e)) return cn.has(e.form) ? void 0 : hs("key.form", ln);
    return e.form === void 0
      ? void 0
      : hs("key.form", "a tree file key carries relPath, not form");
  }
  if (e.namespace !== "agentMemory") return;
  if (!Ge(e.layer)) return hs("key.layer", "must be user, project or local");
  if (e.layer === "user" && "projectKey" in e)
    return hs("key.projectKey", "the user layer is not keyed by project");
  if (e.layer !== "user" && typeof e.projectKey !== "string")
    return hs("key.projectKey", "required for the project and local layers");
  return typeof e.agentType === "string"
    ? void 0
    : hs("key.agentType", "an agent memory key names its agent");
}
function hn(e) {
  return typeof e.backupFileName !== "string" || !BACKUP_FILE_NAME_PATTERN_WITH_LEGACY.test(e.backupFileName)
    ? hs(
        "key.backupFileName",
        "must be a backup file name the engine has ever written (hex hash @v version)",
      )
    : void 0;
}
function Ge(e) {
  return e === "user" || e === "project" || e === "local";
}
var He = ["backup", "corrupted"];
var yn = new Set(He),
  $e = `must be one of the global-config copy kinds (${He.join(", ")})`;
function Ue(e) {
  return yn.has(e);
}
function bn(e) {
  let t = ne("key.sessionId", e.sessionId);
  if (t !== void 0) return t;
  if (re(e.agentRelPath)) return hs("key.agentRelPath", Y);
  if ("sessionJournal" in e) {
    if (typeof e.sessionJournal !== "string" || !pn(e.sessionJournal))
      return hs("key.sessionJournal", dn);
    return e.agentId === void 0 &&
      e.agentRelPath === void 0 &&
      !("journal" in e)
      ? void 0
      : hs(
          "key.sessionJournal",
          "a session journal key names the session's own journal: no agentId, agentRelPath or run journal",
        );
  }
  if ("journal" in e) {
    if (e.journal !== !0) return hs("key.journal", "must be true");
    if (!Array.isArray(e.agentRelPath))
      return hs(
        "key.agentRelPath",
        "a run journal key carries its run directory",
      );
    return e.agentId === void 0
      ? void 0
      : hs(
          "key.agentId",
          "a transcript key names an agent transcript or the run journal, never both",
        );
  }
  return e.agentRelPath !== void 0 && e.agentId === void 0
    ? hs("key.agentRelPath", "requires agentId or journal")
    : void 0;
}
var CLOUD_SNAPSHOTS_DIR_NAME = "cloud-snapshots",
  ARCHIVE_SYNC_DIR_NAME = "archive-sync",
  FOLDER_SYNC_DIR_NAME = "folder-sync",
  We = new Set([
    "memory",
    "tiny_memory",
    "bagel",
    CLOUD_SNAPSHOTS_DIR_NAME,
    "bridge-pointer.json",
    ".session-aliases",
  ]),
  Sn = /^[0-9]{1,16}$/,
  En =
    "must be the recording stamp: 1 to 16 decimal digits (epoch milliseconds)",
  te = ".cast",
  ze = `<stamp>${te} inside a session's folder is that session's terminal recording stream: address it as keys.recording(projectKey, sessionId, stamp)`;
function Ve(e) {
  return typeof e === "string" && Sn.test(e);
}
function Ye(e) {
  return (
    Array.isArray(e) &&
    typeof e[0] === "string" &&
    getNormalizedNames(e[0]).some((t) => parseRecordingStampFromFileName(t) !== void 0)
  );
}
function parseRecordingStampFromFileName(e) {
  if (!e.endsWith(te)) return;
  let t = e.slice(0, -te.length);
  return Ve(t) ? t : void 0;
}
var Xe = [".ccr-tip.json", ".precompact.json", te],
  Rn = `must not end with ${Xe.join(", ")}: those name a session's project-level sibling files`;
function qe(e) {
  return getNormalizedNames(e).some((t) => Xe.some((r) => t.endsWith(r)));
}
var DIR_SYNC_RECORD_FILE_SUFFIX = ".dir-sync.json",
  wn = `must not end with ${DIR_SYNC_RECORD_FILE_SUFFIX}: that names a cloud session's directory-sync record at the project level`;
function Pn(e) {
  return getNormalizedNames(e).some((t) => t.endsWith(DIR_SYNC_RECORD_FILE_SUFFIX));
}
var In = `${[...We].join(", ")} are reserved: they name project-level entries, not sessions`;
function Je(e) {
  return getNormalizedNames(e).some((t) => We.has(t));
}
function isValidSessionName(e) {
  return !Je(e) && !isJsonlFileName(e) && !qe(e);
}
function ne(e, t) {
  if (typeof t !== "string") return;
  if (Je(t)) return hs(e, In);
  if (qe(t)) return hs(e, Rn);
  if (Pn(t)) return hs(e, wn);
  return isJsonlFileName(t) ? hs(e, Y) : void 0;
}
var kn = ".meta.json",
  xn =
    ".meta is reserved for the list metadata key, under every spelling that opens its file";
function Cn(e) {
  return vn(`${e}.json`);
}
function vn(e) {
  return getNormalizedNames(e).includes(kn);
}
var Y = "names a .jsonl stream, which only a transcript key addresses";
function re(e) {
  return Array.isArray(e) && e.some((t) => typeof t === "string" && isJsonlFileName(t));
}
function Fn(e) {
  return e === "user" || e === "project" || e === "local";
}
var Ze = "must be debug, telemetry or apiDump";
function Qe(e) {
  return e === "debug" || e === "telemetry" || e === "apiDump";
}
function Ln(e) {
  if (!Qe(e.channel)) return hs("key.channel", Ze);
  if (e.channel !== "apiDump") return;
  for (let t of ["agentId", "runId"])
    if (t in e && e[t] !== void 0)
      return hs(
        `key.${t}`,
        "an apiDump key names its dump by one id \u2014 the agent's for a subagent's requests, else the session's (today's dump-prompts/<id>.jsonl); agentId and runId nest nothing on this channel",
      );
  return;
}
function Dn(e) {
  if ("taskId" in e && ("meta" in e || "highWaterMark" in e))
    return hs(
      "key.taskId",
      "a task key names an item, the list metadata or the list high-water mark, never more than one",
    );
  if ("meta" in e && "highWaterMark" in e)
    return hs(
      "key.highWaterMark",
      "a task key names an item, the list metadata or the list high-water mark, never more than one",
    );
  if ("meta" in e && e.meta !== !0) return hs("key.meta", "must be true");
  if ("highWaterMark" in e && e.highWaterMark !== !0)
    return hs("key.highWaterMark", "must be true");
  if (typeof e.listId !== "string")
    return hs("key.listId", "a task key carries its listId");
  if ("meta" in e || "highWaterMark" in e) return;
  if (typeof e.taskId !== "string")
    return hs("key.taskId", "a task item key carries its taskId");
  if (Cn(e.taskId)) return hs("key.taskId", xn);
  return;
}
function On(e) {
  if ("file" in e && "draftKey" in e)
    return hs(
      "key.draftKey",
      "a jobs-root key names the pins file or one draft, never both",
    );
  if ("file" in e)
    return e.file === "pins" ? void 0 : hs("key.file", "must be pins");
  if (typeof e.draftKey !== "string")
    return hs("key.draftKey", "a jobs-root draft key carries its draftKey");
  return $n.test(e.draftKey)
    ? void 0
    : hs("key.draftKey", "must be 8 lowercase hex characters");
}
var et = "timeline.jsonl",
  tt = `${et} is the job's timeline stream: address it as keys.jobTimeline(jobId)`;
function nt(e) {
  return Array.isArray(e) && typeof e[0] === "string" && getNormalizedNames(e[0]).includes(et);
}
var Tn = /^\d{4}$/,
  Ae = /^\d{2}$/,
  Mn = /^[A-Za-z0-9_-]{1,8}(?:-[a-z0-9]+)*$/,
  Kn = 128,
  Bn = /^(?:con|prn|aux|nul|com\d|lpt\d)$/i;
function Gn(e) {
  return typeof e === "string" && e.length <= Kn && Mn.test(e) && !Bn.test(e);
}
function rt(e, t) {
  if (t.year !== void 0 && !fe(Tn, t.year))
    return hs(`${e}.year`, "must be four digits (YYYY)");
  if (t.month !== void 0 && !fe(Ae, t.month))
    return hs(`${e}.month`, "must be two digits (MM)");
  if (t.day !== void 0 && !fe(Ae, t.day))
    return hs(`${e}.day`, "must be two digits (DD)");
  return;
}
function fe(e, t) {
  return typeof t === "string" && e.test(t);
}
function Hn(e) {
  if (e.year !== void 0 && e.projectKey === void 0)
    return hs("scope.projectKey", "required when year is given");
  if (e.month !== void 0 && e.year === void 0)
    return hs("scope.year", "required when month is given");
  if (e.day !== void 0 && e.month === void 0)
    return hs("scope.month", "required when day is given");
  return rt("scope", e);
}
var $n = /^[0-9a-f]{8}$/;
function Un(e) {
  switch (e.namespace) {
    case "transcript":
      return [
        ["projectKey", e.projectKey],
        ["sessionId", e.sessionId],
        ["agentId", e.agentId, "optional"],
        ["agentRelPath", e.agentRelPath, "optional"],
      ];
    case "history":
    case "identity":
      return [];
    case "globalConfig":
      return "kind" in e ? [["stamp", e.stamp]] : [];
    case "settings":
      return e.layer === "user"
        ? []
        : e.layer === "project"
          ? [["projectKey", e.projectKey]]
          : [["consentRootKey", e.consentRootKey]];
    case "task":
      return "taskId" in e
        ? [
            ["listId", e.listId],
            ["taskId", e.taskId],
          ]
        : [["listId", e.listId]];
    case "memory":
      return [
        ["projectKey", e.projectKey],
        ["relPath", e.relPath],
      ];
    case "pluginRegistry":
      return [];
    case "marketplaceCache":
      return "relPath" in e
        ? [
            ["marketplace", e.marketplace],
            ["relPath", e.relPath],
          ]
        : [["marketplace", e.marketplace]];
    case "pluginCache":
      return [
        ["marketplace", e.marketplace],
        ["plugin", e.plugin],
        ["version", e.version],
        ["relPath", e.relPath],
      ];
    case "cache":
      return [
        ["store", e.store],
        ["id", e.id],
      ];
    case "paste":
      return [["id", e.id]];
    case "pluginAssetCache":
      return [["digest", e.digest]];
    case "state":
      return [["id", e.id]];
    case "plan":
      return [["name", e.name]];
    case "feedbackDraft":
      return [["draftId", e.draftId]];
    case "agentMemory":
      return [
        ...(e.layer === "user" ? [] : [["projectKey", e.projectKey]]),
        ["agentType", e.agentType],
        ["relPath", e.relPath],
      ];
    case "team":
      return [["team", e.team]];
    case "sidecar":
      return [
        ["projectKey", e.projectKey],
        ["sessionId", e.sessionId],
        ["relPath", e.relPath],
      ];
    case "scratch":
      return [
        ["sessionId", e.sessionId],
        ["relPath", e.relPath],
      ];
    case "userConfigDir":
      return [["relPath", e.relPath]];
    case "fileHistory":
      return [
        ["sessionId", e.sessionId],
        ["backupFileName", e.backupFileName],
      ];
    case "job":
      return [
        ["jobId", e.jobId],
        ["relPath", e.relPath],
      ];
    case "daemon":
      return [["relPath", e.relPath]];
    case "jobsRoot":
      return "file" in e ? [] : [["draftKey", e.draftKey]];
    case "session":
      return [["file", e.file]];
    case "bridgePointer":
    case "sessionAliases":
      return [["projectKey", e.projectKey]];
    case "dirSyncRecord":
      return [
        ["projectKey", e.projectKey],
        ["sessionId", e.sessionId],
      ];
    case "mailbox":
      return [
        ["team", e.team],
        ["teammate", e.teammate],
      ];
    case "log":
      return [
        ["sessionId", e.sessionId],
        ["agentId", e.agentId, "optional"],
        ["runId", e.runId, "optional"],
      ];
    case "jobTimeline":
      return [["jobId", e.jobId]];
    case "recording":
      return [
        ["projectKey", e.projectKey],
        ["sessionId", e.sessionId],
        ["stamp", e.stamp],
      ];
    case "sessionLog":
      return [
        ["projectKey", e.projectKey],
        ["year", e.year],
        ["month", e.month],
        ["day", e.day],
        ["logName", e.logName],
      ];
  }
  return;
}
function validateStorageScope(e) {
  if (typeof e !== "object" || e === null)
    return hs("scope", "expected a scope object");
  let t = Xn(e);
  if (t === void 0)
    return hs("scope", `${String(e.namespace)} is not a listable namespace`);
  return Vn(e) ?? je("scope", t);
}
var Wn = {
  transcript: [
    [
      "agentId",
      "names one agent transcript, a stream key, not a scope: narrow a scope with agentRelPath",
    ],
    [
      "journal",
      "names a run journal, a stream key, not a scope: narrow a scope with agentRelPath",
    ],
    [
      "sessionJournal",
      "names a session's own journal, a stream key, not a scope: the session scope lists it",
    ],
  ],
  log: [
    ["agentId", "names one log stream, a stream key, not a scope"],
    ["runId", "names one log stream, a stream key, not a scope"],
  ],
  sessionLog: [
    [
      "logName",
      "names one session's log, a stream key, not a scope: a day scope lists its logs",
    ],
  ],
  task: [
    [
      "taskId",
      "names one task value, a key, not a scope: a list scope narrows with listId only",
    ],
    [
      "meta",
      "names one task value, a key, not a scope: a list scope narrows with listId only",
    ],
    [
      "highWaterMark",
      "names one task value, a key, not a scope: a list scope narrows with listId only",
    ],
  ],
  mailbox: [["teammate", "names one inbox, a key, not a scope"]],
  cache: [
    [
      "id",
      "names one cached value, a key, not a scope: a cache scope narrows with store only",
    ],
  ],
  pluginAssetCache: [["digest", "names one cached asset, a key, not a scope"]],
  fileHistory: [
    [
      "backupFileName",
      "names one backup, a key, not a scope: a file-history scope narrows with sessionId only",
    ],
  ],
  state: [["id", "names one value, a key, not a scope"]],
  feedbackDraft: [["draftId", "names one draft, a key, not a scope"]],
  jobsRoot: [
    ["file", "names one value, a key, not a scope"],
    ["draftKey", "names one value, a key, not a scope"],
  ],
  plan: [["name", "names one plan, a key, not a scope"]],
  paste: [["id", "names one paste, a key, not a scope"]],
  session: [["file", "names one value, a key, not a scope"]],
  globalConfig: [
    [
      "stamp",
      "names one recovery copy, a key, not a scope: the scope narrows with kind only",
    ],
  ],
  marketplaceCache: [
    [
      "form",
      "names one of the marketplace's two engine-written files, a key, not a scope: the tree narrows with relPath only",
    ],
  ],
  memory: [],
  pluginCache: [],
  daemon: [],
  sidecar: [],
  agentMemory: [],
  scratch: [],
  userConfigDir: [],
  job: [],
  bridgeSpawn: [],
};
function Vn(e) {
  let t = e.namespace === "agentMemory" ? Yn(e) : void 0;
  if (t !== void 0) return t;
  if (e.namespace === "transcript" || e.namespace === "sidecar") {
    let o = ne("scope.sessionId", e.sessionId);
    if (o !== void 0) return o;
  }
  for (let [o, s] of Wn[e.namespace])
    if (o in e && e[o] !== void 0) return hs(`scope.${o}`, s);
  if (e.namespace === "sidecar" && re(e.relPath)) return hs("scope.relPath", Y);
  if (e.namespace === "sidecar" && Ye(e.relPath))
    return hs("scope.relPath", ze);
  if (e.namespace === "log" && e.channel !== void 0 && !Qe(e.channel))
    return hs("scope.channel", Ze);
  if (e.namespace === "job" && nt(e.relPath)) return hs("scope.relPath", tt);
  let r = e.namespace === "sessionLog" ? Hn(e) : void 0;
  if (r !== void 0) return r;
  if (
    e.namespace === "scratch" &&
    e.sessionId === void 0 &&
    e.relPath !== void 0
  )
    return hs(
      "scope.relPath",
      "requires scope.sessionId: a scratch relPath narrows one session directory, and no cross-session prefix filter exists",
    );
  if (e.namespace === "userConfigDir" && !Oe.has(e.dir))
    return hs("scope.dir", Te);
  if (
    e.namespace === "transcript" &&
    e.agentRelPath !== void 0 &&
    (e.projectKey === void 0 || e.sessionId === void 0)
  )
    return hs(
      "scope.agentRelPath",
      "requires scope.projectKey and scope.sessionId: an agentRelPath narrows the subagents/ tree of one session directory",
    );
  if (e.namespace === "transcript" && re(e.agentRelPath))
    return hs("scope.agentRelPath", Y);
  if (e.namespace === "pluginCache") {
    if (e.marketplace === void 0 && e.plugin !== void 0)
      return hs(
        "scope.plugin",
        "requires scope.marketplace: a plugin narrows one marketplace folder",
      );
    if (e.plugin === void 0 && e.version !== void 0)
      return hs(
        "scope.version",
        "requires scope.plugin: a version narrows one plugin folder",
      );
    if (e.version === void 0 && e.relPath !== void 0)
      return hs(
        "scope.relPath",
        "requires scope.version: a relPath narrows one version folder",
      );
  }
  if (e.namespace === "job" && e.jobId === void 0 && e.relPath !== void 0)
    return hs(
      "scope.relPath",
      "requires scope.jobId: a job relPath narrows one job directory, and no cross-job prefix filter exists",
    );
  if (
    e.namespace === "transcript" &&
    e.projectKey === void 0 &&
    e.sessionId !== void 0
  )
    return hs(
      "scope.sessionId",
      "requires scope.projectKey: a session narrows one project folder, and no cross-project session filter exists",
    );
  if (e.namespace === "globalConfig" && e.kind !== void 0 && !Ue(e.kind))
    return hs("scope.kind", $e);
  return;
}
function Yn(e) {
  if (!Ge(e.layer)) return hs("scope.layer", "must be user, project or local");
  if (e.layer === "user" && "projectKey" in e)
    return hs("scope.projectKey", "the user layer is not keyed by project");
  if (e.layer !== "user" && typeof e.projectKey !== "string")
    return hs("scope.projectKey", "required for the project and local layers");
  return e.agentType === void 0 && e.relPath !== void 0
    ? hs(
        "scope.relPath",
        "requires scope.agentType: an agent-memory relPath narrows one agent directory",
      )
    : void 0;
}
function Xn(e) {
  switch (e.namespace) {
    case "transcript":
      return [
        ["projectKey", e.projectKey, "optional"],
        ["sessionId", e.sessionId, "optional"],
        ["agentRelPath", e.agentRelPath, "optional"],
      ];
    case "task":
      return [["listId", e.listId, "optional"]];
    case "mailbox":
      return [["team", e.team, "optional"]];
    case "memory":
      return [
        ["projectKey", e.projectKey],
        ["relPath", e.relPath, "optional"],
      ];
    case "pluginCache":
      return [
        ["marketplace", e.marketplace, "optional"],
        ["plugin", e.plugin, "optional"],
        ["version", e.version, "optional"],
        ["relPath", e.relPath, "optional"],
      ];
    case "marketplaceCache":
      return [
        ["marketplace", e.marketplace],
        ["relPath", e.relPath, "optional"],
      ];
    case "cache":
      return [["store", e.store]];
    case "state":
    case "plan":
    case "paste":
    case "pluginAssetCache":
    case "feedbackDraft":
      return [];
    case "sidecar":
      return [
        ["projectKey", e.projectKey],
        ["sessionId", e.sessionId],
        ["relPath", e.relPath, "optional"],
      ];
    case "agentMemory":
      return [
        ["projectKey", e.layer === "user" ? void 0 : e.projectKey, "optional"],
        ["agentType", e.agentType, "optional"],
        ["relPath", e.relPath, "optional"],
      ];
    case "scratch":
      return [
        ["sessionId", e.sessionId, "optional"],
        ["relPath", e.relPath, "optional"],
      ];
    case "userConfigDir":
      return [["relPath", e.relPath, "optional"]];
    case "fileHistory":
      return [["sessionId", e.sessionId, "optional"]];
    case "job":
      return [
        ["jobId", e.jobId, "optional"],
        ["relPath", e.relPath, "optional"],
      ];
    case "daemon":
      return [["relPath", e.relPath, "optional"]];
    case "jobsRoot":
    case "session":
      return [];
    case "bridgeSpawn":
      return [["dir", e.dir, "optional"]];
    case "globalConfig":
      return [["kind", e.kind, "optional"]];
    case "log":
      return [["sessionId", e.sessionId, "optional"]];
    case "sessionLog":
      return [
        ["projectKey", e.projectKey, "optional"],
        ["year", e.year, "optional"],
        ["month", e.month, "optional"],
        ["day", e.day, "optional"],
      ];
  }
  return;
}
var qn = 6;
function getSidecarKeyForMetadataPath(e) {
  return e.endsWith(".meta.json") ? getSidecarKeyForPath(e) : void 0;
}
function getSidecarKeyForPath(e) {
  let t = ot(e);
  if (isJsonlFileName(t)) return;
  let r = getProjectsDir(),
    o = [t],
    s = st(e);
  while (s !== r && o.length <= qn + 1) {
    let b = st(s);
    if (b === s) return;
    (o.unshift(ot(s)), (s = b));
  }
  if (s !== r || o.length < 3) return;
  let [i, a, ...u] = o;
  if (!isValidPathSegment(i) || !isValidPathSegment(a) || u.length === 0 || !u.every(isValidPathSegment)) return;
  let m = STORAGE_KEYS.sidecar(i, a, u);
  return validateStorageKey(m) === void 0 ? m : void 0;
}
var TOOL_RESULTS_DIR_NAME = "tool-results";
function getToolResultsDirForSession(e) {
  return pe(getProjectDir(e.root.project.originalCwd), e.root.id, TOOL_RESULTS_DIR_NAME);
}
function getCurrentToolResultsDir() {
  return getToolResultsDirForSession({ root: { id: K(), project: { originalCwd: he() } } });
}
function getSidecarKeyForToolResultFile(e, t) {
  if (Jn(e) !== TOOL_RESULTS_DIR_NAME || !isValidPathSegment(t)) return;
  return getSidecarKeyForPath(pe(e, t));
}
function nr(e) {
  let t = getSidecarKeyForToolResultFile(e, "probe");
  if (t === void 0 || t.namespace !== "sidecar") return;
  return {
    namespace: "sidecar",
    projectKey: t.projectKey,
    sessionId: t.sessionId,
    relPath: t.relPath.slice(0, -1),
  };
}
async function ensureToolResultsDirectory(e, t) {
  if (isHoverRestEnabled() && t !== void 0) {
    let s = nr(e);
    if (s !== void 0)
      try {
        if ((await t.ensureScope(s)).ok) return;
      } catch {}
  }
  let r = getFileStorage(),
    o = !1;
  try {
    o = await or(r, e);
  } catch {}
  if (!o) return;
  try {
    await r.mkdir(e);
  } catch {}
}
var rr = 3;
async function or(e, t) {
  return (await at(e, t)) === void 0;
}
async function at(e, t) {
  let r = getProjectsDir(),
    o = er(r, t);
  if (o === "" || o === ".." || o.startsWith(".." + it) || Qn(o)) return;
  let s = r;
  for (let i of o.split(it)) {
    s = pe(s, i);
    let a = await e.lstat(s);
    if (a === void 0) return;
    if (a.isSymbolicLink || !a.isDirectory) return s;
  }
  return;
}
async function assertSafeDirectoryPath(e, t) {
  let r = await at(t, e);
  if (r !== void 0)
    throw new R(
      `tool-results path refused: ${r} is a link or not a directory`,
      "tool-results path refused: a directory on the way is a link or not a directory",
    );
}
async function writeBytesExclusiveHardened(e, t, r) {
  let o = getFileStorage();
  await assertSafeDirectoryPath(Zn(e), o);
  for (let s = 1; ; s++) {
    if (s > 1) await ct(o, e);
    else await removeSymlinkAtWriteTarget(e, o);
    try {
      await o.writeBytesExclusive(e, t, r);
      return;
    } catch (i) {
      if (A(i) !== "EEXIST" || s >= rr) throw i;
    }
  }
}
async function removeSymlinkAtWriteTarget(e, t) {
  if ((await t.lstat(e))?.isSymbolicLink) await ct(t, e);
}
async function ct(e, t) {
  try {
    await e.delete(t);
  } catch (r) {
    if (A(r) !== "ENOENT") throw r;
  }
}
function fr(e) {
  let { firstPage: t, lastPage: r } = e ?? {};
  if (t === void 0) return "page range";
  if (r === void 0 || r === 1 / 0) return `pages ${t}-`;
  if (t === r) return `page ${t}`;
  return `pages ${t}-${r}`;
}
async function readPdfAttachment(e) {
  try {
    let o = (await ae().stat(e)).size;
    if (o === 0)
      return {
        success: !1,
        error: { reason: "empty", message: `PDF file is empty: ${e}` },
      };
    if (o > MAX_PDF_ATTACHMENT_BYTES)
      return {
        success: !1,
        error: {
          reason: "too_large",
          message: `PDF file exceeds maximum allowed size of ${formatFileSize(MAX_PDF_ATTACHMENT_BYTES)}.`,
        },
      };
    let s = await lr(e);
    if (!s.subarray(0, 5).toString("ascii").startsWith("%PDF-"))
      return {
        success: !1,
        error: {
          reason: "corrupted",
          message: `File is not a valid PDF (missing %PDF- header): ${e}`,
        },
      };
    let a = s.toString("base64");
    return {
      success: !0,
      data: { type: "pdf", file: { filePath: e, base64: a, originalSize: o } },
    };
  } catch (t) {
    if (Kd(t)) throw t;
    return {
      success: !1,
      error: {
        reason: "unknown",
        message: l(t),
        category: ge(t),
        site: "read",
      },
    };
  }
}
async function getPdfPageCount(e) {
  let { code: t, stdout: r } = await execFileNoThrow("pdfinfo", [e], {
    timeout: 1e4,
    useCwd: !1,
  });
  if (t !== 0) return null;
  let o = /^Pages:\s+(\d+)/m.exec(r);
  if (!o) return null;
  let s = parseInt(o[1], 10);
  return isNaN(s) ? null : s;
}
function me(e) {
  let t = e === "win32" ? 0 : (ut.O_NONBLOCK ?? 0);
  return ut.O_RDONLY | t;
}
class gt {
  available = void 0;
  markAvailable() {
    this.available = !0;
  }
  reset() {
    this.available = void 0;
  }
}
var pr = new j(() => new gt());
function gr() {
  return pr.of(B().host);
}
async function mr() {
  let e = gr();
  if (e.available !== void 0) return e.available;
  let { code: t, stderr: r } = await execFileNoThrow("pdftoppm", ["-v"], {
      timeout: 5000,
      useCwd: !1,
    }),
    o = t === 0 || (t !== 127 && r.length > 0);
  if (o) e.markAvailable();
  return o;
}
async function extractPdfPageImages(e, t, r) {
  try {
    let o = await ar(e, me("darwin")),
      s = await o.stat().finally(() => o.close());
    if (!s.isFile())
      return {
        success: !1,
        error: {
          reason: "corrupted",
          message: `Path is not a regular file: ${e}`,
        },
      };
    let i = s.size;
    if (i === 0)
      return {
        success: !1,
        error: { reason: "empty", message: `PDF file is empty: ${e}` },
      };
    if (i > MAX_BINARY_CONTENT_BYTES)
      return {
        success: !1,
        error: {
          reason: "too_large",
          message: `PDF file exceeds maximum allowed size for text extraction (${formatFileSize(MAX_BINARY_CONTENT_BYTES)}).`,
        },
      };
    if (!(await mr()))
      return {
        success: !1,
        error: {
          reason: "unavailable",
          message:
            "pdftoppm is not installed. Install poppler-utils (e.g. `brew install poppler` or `apt-get install poppler-utils`) to enable PDF page rendering.",
        },
      };
    let u = randomUUID(),
      m = dt(getCurrentToolResultsDir(), `pdf-${u}`),
      b = r === void 0 ? void 0 : mt(m);
    await mkdir(m, { recursive: !0 });
    let S = dt(m, "page"),
      p = ["-jpeg", "-r", "100"];
    if (t?.firstPage) p.push("-f", String(t.firstPage));
    if (t?.lastPage && t.lastPage !== 1 / 0) p.push("-l", String(t.lastPage));
    p.push(e, S);
    let {
      code: c,
      stderr: d,
      exitCode: w,
    } = await execFileNoThrow("pdftoppm", p, { timeout: 120000, useCwd: !1 });
    if (c !== 0) {
      if (/password/i.test(d))
        return {
          success: !1,
          error: {
            reason: "password_protected",
            message:
              "PDF is password-protected. Please provide an unprotected version.",
          },
        };
      let C = /Wrong page range given.*last page \((\d+)\)/i.exec(d);
      if (C) {
        let O = Number(C[1]);
        if (O === 0)
          return {
            success: !1,
            error: {
              reason: "corrupted",
              message:
                "PDF reports 0 pages (empty page tree). The PDF may be invalid.",
            },
          };
        let $t = Math.min(O, DEFAULT_MAX_PDF_PAGES_PER_READ);
        return {
          success: !1,
          error: {
            reason: "page_out_of_range",
            message: `Requested ${fr(t)} is outside the document (PDF has ${O} ${pluralize(O, "page")}). Use a range within 1-${O}, maximum ${DEFAULT_MAX_PDF_PAGES_PER_READ} pages per request (e.g. pages: "1-${$t}").`,
          },
        };
      }
      let de =
        /Syntax Error(?: \(\d+\))?: Couldn't (?:find trailer dictionary|read xref table)/i;
      if (/damaged|corrupt|invalid/i.test(d) || de.test(d))
        return {
          success: !1,
          error: {
            reason: "corrupted",
            message: "PDF file is corrupted or invalid.",
          },
        };
      let Pe = d.split(`
`),
        Z = Pe[0] ?? "";
      if (
        ((Z.startsWith("I/O Error: ") && Z.includes(`'${e}'`)) ||
          Z.startsWith("Permission Error: ")) &&
        !Pe.some((O) =>
          /^(Command Line Error|Internal Error)(?: \(\d+\))?: /.test(O),
        )
      )
        return {
          success: !1,
          error: {
            reason: "pdftoppm_input_error",
            message: `Could not render PDF: ${Z}`,
          },
        };
      return {
        success: !1,
        error: {
          reason: "unknown",
          message: `pdftoppm failed: ${d}`,
          category: yr(d),
          site: "extract",
          exitCode: w,
        },
      };
    }
    let E;
    if (r !== void 0) {
      let C = await listExtractedPdfPageNames(r, m, b);
      if (!C.ok)
        return {
          success: !1,
          error: {
            reason: "unknown",
            message: `Failed to list extracted PDF pages: ${C.code}`,
            category: `storage_list_${C.code}`,
            site: "extract",
          },
        };
      if (C.names.length === 0 && !C.directoryExists)
        return {
          success: !1,
          error: {
            reason: "unknown",
            message: `Extraction directory missing after pdftoppm ran: ${m}`,
            category: ge({ code: "ENOENT" }),
            site: "extract",
          },
        };
      E = C.names;
    } else E = (await cr(m)).filter((de) => de.endsWith(".jpg")).sort();
    if (E.length === 0)
      return {
        success: !1,
        error: {
          reason: "corrupted",
          message: "pdftoppm produced no output pages. The PDF may be invalid.",
        },
      };
    let F = E.length;
    return {
      success: !0,
      data: {
        type: "parts",
        file: { filePath: e, originalSize: i, outputDir: m, count: F },
        ...(b !== void 0 && { v5SidecarScope: { ...b, pageNames: E } }),
      },
    };
  } catch (o) {
    let s = o && typeof o === "object" && "path" in o ? o.path : void 0;
    if (Kd(o) && (s === e || s === void 0)) throw o;
    return {
      success: !1,
      error: {
        reason: "unknown",
        message: l(o),
        category: ge(o),
        site: "extract",
      },
    };
  }
}
var hr = [
  [/^Internal Error(?: \(\d+\))?: /, "internal_error"],
  [/^Command Line Error(?: \(\d+\))?: /, "command_line_error"],
  [/^Config Error(?: \(\d+\))?: /, "config_error"],
  [/^Unimplemented Feature(?: \(\d+\))?: /, "unimplemented_feature"],
  [/^I\/O Error(?: \(\d+\))?: /, "io_output"],
  [/^Syntax (?:Error|Warning)(?: \(\d+\))?: /, "syntax_diagnostics"],
];
function yr(e) {
  if (e.trim() === "") return "empty_stderr";
  let t = e.split(`
`);
  return hr.find(([o]) => t.some((s) => o.test(s)))?.[1] ?? "other";
}
function ge(e) {
  return `fs_wrapped_${Jr(e) ?? "none"}`;
}
var pt = "ListCapExceeded";
function mt(e) {
  let t = getCurrentToolResultsDir();
  if (dr(e) !== t)
    throw new R(
      `PDF extraction directory is outside the session tool-results store: ${e}`,
      "pdf extraction dir outside tool-results",
    );
  return { projectKey: getProjectKey(he()), sessionId: K(), relPath: [TOOL_RESULTS_DIR_NAME, ur(e)] };
}
async function listExtractedPdfPageNames(e, t, r) {
  let o = r ?? mt(t),
    { projectKey: s, sessionId: i, relPath: a } = o,
    u = [],
    m = await runPaginatedScan(
      (S) =>
        e.listEntries(
          { namespace: "sidecar", projectKey: s, sessionId: i, relPath: a },
          { cursor: S, skipKeyStats: !0, skipScopeStats: !0 },
        ),
      (S) => {
        for (let p of S) {
          if (p.kind !== "key" || p.key.namespace !== "sidecar") continue;
          let c = p.key.relPath.at(-1);
          if (c === void 0 || p.key.relPath.length !== a.length + 1) continue;
          if (!c.endsWith(".jpg")) continue;
          u.push(c);
        }
      },
    );
  switch (m.status) {
    case "done":
      break;
    case "error":
      return { ok: !1, code: m.error.code };
    case "capped":
      return { ok: !1, code: pt };
  }
  u.sort();
  let b = !0;
  if (u.length === 0) {
    b = !1;
    let S = a.at(-1),
      p = await runPaginatedScan(
        (c) =>
          e.listEntries(
            {
              namespace: "sidecar",
              projectKey: s,
              sessionId: i,
              relPath: a.slice(0, -1),
            },
            { suffix: S, cursor: c, skipScopeStats: !0 },
          ),
        (c) => {
          b ||= c.some(
            (d) =>
              d.kind === "scope" &&
              d.scope.namespace === "sidecar" &&
              (d.scope.relPath ?? []).length === a.length &&
              d.scope.relPath?.at(-1) === S,
          );
        },
        { until: () => b },
      );
    switch (p.status) {
      case "done":
        break;
      case "error":
        return { ok: !1, code: p.error.code };
      case "capped":
        return { ok: !1, code: pt };
    }
  }
  return { ok: !0, names: u, directoryExists: b, scope: o };
}
async function readFileHardened(e, t, r) {
  let o = r?.fromTail === !0 ? "unreadable" : null,
    s;
  try {
    let i = r?.noFollow ? (br.O_NOFOLLOW ?? 0) : 0;
    s = await T.open(e, me("darwin") | i);
    let a = await s.stat();
    if (!a.isFile()) return o;
    if (r?.requireNlink1 && a.nlink !== 1) return o;
    if (r?.verifyHandlePath) {
      let p = null;
      if (p === null) {
        p = await T.realpath(e);
        let c = await T.stat(p);
        if (c.dev !== a.dev || c.ino !== a.ino) return o;
      }
      if (!r.verifyHandlePath(p)) return o;
    }
    if (r?.fromTail === !0) {
      let p = a.size > t ? a.size - t : 0,
        c = Buffer.alloc(a.size - p),
        d = await ht(s, c, p),
        w = ye(c.subarray(0, d), r.sniffEncoding);
      if (p === 0) return { content: w, truncated: !1 };
      let E = w.indexOf(`
`);
      return { content: E === -1 ? "" : w.slice(E + 1), truncated: !0 };
    }
    let u = Math.min(a.size, t + 1),
      m = Buffer.alloc(u),
      b = await ht(s, m, 0);
    if (r?.sniffEncoding === !0) {
      let p = a.size > t ? Math.min(b, t) : b,
        c = m.subarray(0, p),
        d = ye(c, !0),
        w = a.size > t,
        E = w
          ? `${d}
\u2026[truncated at ${t} bytes of ${a.size} bytes]`
          : d;
      return r.withBytes === !0 ? { content: E, bytes: c, truncated: w } : E;
    }
    let S = ye(m.subarray(0, b), !1);
    return S.length > t
      ? `${S.slice(0, t)}
\u2026[truncated at ${t} chars of ${a.size} bytes]`
      : S;
  } catch (i) {
    return isNotFoundError(i) ? null : o;
  } finally {
    await s?.close().catch(() => {
      return;
    });
  }
}
function isNotFoundError(e) {
  let t = A(e);
  return t === "ENOENT" || t === "ENOTDIR";
}
async function ht(e, t, r) {
  let o = 0;
  while (o < t.length) {
    let { bytesRead: s } = await e.read(t, o, t.length - o, r + o);
    if (s === 0) break;
    o += s;
  }
  return o;
}
function ye(e, t) {
  if (t !== !0) return e.toString("utf8");
  if (e.length >= 2 && e[0] === 255 && e[1] === 254)
    return e.subarray(2).toString("utf16le");
  if (e.length >= 3 && e[0] === 239 && e[1] === 187 && e[2] === 191)
    return e.subarray(3).toString("utf8");
  let r = e.subarray(0, Math.min(e.length, 512)),
    o = 0,
    s = 0;
  for (let i = 0; i < r.length; i++)
    if (r[i] === 0)
      if (i % 2 === 0) o++;
      else s++;
  if (r.length >= 8 && (o + s) * 4 > r.length)
    return e.subarray(o > s ? 1 : 0).toString("utf16le");
  return e.toString("utf8");
}
import {
  dirname as Re,
  isAbsolute as co,
  join as _,
  relative as lo,
  resolve as D,
  sep as ie,
} from "path";
var yt = {
  ccr: {
    controlChannel: !0,
    modelCatalog: !0,
    setPermissionMode: !0,
    fanout: !0,
    presence: !0,
    catchupReplay: !0,
    bashExec: !0,
    fileRead: !0,
  },
  ssh: {
    controlChannel: !0,
    modelCatalog: !0,
    setPermissionMode: !0,
    fanout: !1,
    presence: !1,
    catchupReplay: !1,
    bashExec: !1,
    fileRead: !0,
  },
  direct: {
    controlChannel: !1,
    modelCatalog: !1,
    setPermissionMode: !1,
    fanout: !1,
    presence: !1,
    catchupReplay: !1,
    bashExec: !1,
    fileRead: !1,
  },
};
var NO_REMOTE_TRANSPORT = { isRemoteMode: !1 };
function getRemoteTransport() {
  return Mx().remote;
}
var REMOTE_WAIT_STOPPED_MESSAGE =
  "Stopped waiting for the remote \u2014 the command may still complete there";
function isRemoteActive() {
  return Nn() || getRemoteTransport() !== null;
}
function hasRemoteControlChannel() {
  let e = getRemoteTransport();
  return e?.caps?.controlChannel === !0 && !e.viewerOnly;
}
function hasRemoteCapability(e) {
  return getRemoteTransport()?.caps?.[e] === !0;
}
function canCancelExternalLoading(e, t) {
  return t && !(e.isRemoteMode && e.viewerOnly);
}
function Sr(e) {
  return Promise.reject(
    Error(`sendControlRequest not yet wired for ${e} transport`),
  );
}
function createRemoteTransport(e, t, r, o) {
  if (!t.isRemoteMode) return NO_REMOTE_TRANSPORT;
  return {
    kind: e,
    isRemoteMode: !0,
    viewerOnly: r,
    caps: yt[e],
    sessionId: o,
    sendMessage: t.sendMessage,
    cancelRequest: t.cancelRequest,
    disconnect: t.disconnect,
    sendControlRequest: t.sendControlRequest ?? (() => Sr(e)),
  };
}
import { createHash } from "crypto";
import {
  accessSync,
  constants as Ar,
  lstatSync as _t,
  readFileSync,
  realpathSync,
  statSync as It,
} from "fs";
import {
  lstat as Fr,
  open as hi,
  readFile as yi,
  realpath as bi,
  stat as Si,
} from "fs/promises";
import { homedir } from "os";
import {
  basename as oe,
  dirname as G,
  isAbsolute as Se,
  join as P,
  resolve as N,
  sep as k,
} from "path";
var Er = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".bmp",
  ".ico",
  ".webp",
  ".tiff",
  ".tif",
  ".mp4",
  ".mov",
  ".avi",
  ".mkv",
  ".webm",
  ".wmv",
  ".flv",
  ".m4v",
  ".mpeg",
  ".mpg",
  ".mp3",
  ".wav",
  ".ogg",
  ".flac",
  ".aac",
  ".m4a",
  ".wma",
  ".aiff",
  ".opus",
  ".zip",
  ".tar",
  ".gz",
  ".bz2",
  ".7z",
  ".rar",
  ".xz",
  ".z",
  ".tgz",
  ".iso",
  ".exe",
  ".dll",
  ".so",
  ".dylib",
  ".bin",
  ".o",
  ".a",
  ".obj",
  ".lib",
  ".app",
  ".msi",
  ".deb",
  ".rpm",
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".ppt",
  ".pptx",
  ".odt",
  ".ods",
  ".odp",
  ".ttf",
  ".otf",
  ".woff",
  ".woff2",
  ".eot",
  ".pyc",
  ".pyo",
  ".class",
  ".jar",
  ".war",
  ".ear",
  ".node",
  ".wasm",
  ".rlib",
  ".sqlite",
  ".sqlite3",
  ".db",
  ".mdb",
  ".idx",
  ".psd",
  ".ai",
  ".eps",
  ".sketch",
  ".fig",
  ".xd",
  ".blend",
  ".3ds",
  ".max",
  ".swf",
  ".fla",
  ".lockb",
  ".dat",
  ".data",
]);
function isBinaryFileExtension(e) {
  let t = e.slice(e.lastIndexOf(".")).toLowerCase();
  return Er.has(t);
}
import { open as Rr } from "fs/promises";
import { join as wr } from "path";
async function readGitConfigFileValue(e, t, r, o) {
  try {
    let s = await Rr(wr(e, "config"), "r");
    try {
      let a = Buffer.allocUnsafe(1e6),
        u = 0;
      while (u < 1e6) {
        let { bytesRead: S } = await s.read(a, u, 1e6 - u, u);
        if (S === 0) break;
        u += S;
      }
      let m = !1;
      if (u === 1e6) {
        let S = Buffer.allocUnsafe(1),
          { bytesRead: p } = await s.read(S, 0, 1, u);
        m = p > 0;
      }
      let b = a.subarray(0, u).toString("utf-8");
      if (m) {
        let S = b.lastIndexOf(`
`);
        b = S === -1 ? "" : b.slice(0, S);
      }
      return U(b, t, r, o);
    } finally {
      await s.close();
    }
  } catch {
    return null;
  }
}
function U(e, t, r, o) {
  let s = e.split(`
`),
    i = t.toLowerCase(),
    a = o.toLowerCase(),
    u = !1;
  for (let m of s) {
    let b = m.trim();
    if (b.length === 0 || b[0] === "#" || b[0] === ";") continue;
    if (b[0] === "[") {
      u = be(b, i, r);
      continue;
    }
    if (!u) continue;
    let S = bt(b);
    if (S && S.key.toLowerCase() === a) return S.value;
  }
  return null;
}
function collectGitConfigIncludes(e) {
  let t = [],
    r = [],
    o = null;
  for (let s of e.split(`
`)) {
    let i = s.trim();
    if (i.length === 0 || i[0] === "#" || i[0] === ";") continue;
    if (i[0] === "[") {
      o =
        be(i, "include", null) || Pr.test(i)
          ? "include"
          : be(i, "core", null)
            ? "core"
            : null;
      continue;
    }
    let a = o === null ? null : bt(i);
    if (!a || a.value.length === 0) continue;
    let u = a.key.toLowerCase();
    if (o === "include" && u === "path") t.push(a.value);
    else if (o === "core" && (u === "excludesfile" || u === "attributesfile"))
      r.push(a.value);
  }
  return { includes: t, files: r };
}
var Pr = /^\[includeif[ \t]*"(?:[^"\\]|\\.)*"\]/i;
function bt(e) {
  let t = 0;
  while (t < e.length && kr(e[t])) t++;
  if (t === 0) return null;
  let r = e.slice(0, t);
  while (t < e.length && (e[t] === " " || e[t] === "\t")) t++;
  if (t >= e.length || e[t] !== "=") return null;
  t++;
  while (t < e.length && (e[t] === " " || e[t] === "\t")) t++;
  let o = _r(e, t);
  return { key: r, value: o };
}
function _r(e, t) {
  let r = "",
    o = !1,
    s = t;
  while (s < e.length) {
    let i = e[s];
    if (!o && (i === "#" || i === ";")) break;
    if (i === '"') {
      ((o = !o), s++);
      continue;
    }
    if (i === "\\" && s + 1 < e.length) {
      let a = e[s + 1];
      if (o) {
        switch (a) {
          case "n":
            r += `
`;
            break;
          case "t":
            r += "\t";
            break;
          case "b":
            r += "\b";
            break;
          case '"':
            r += '"';
            break;
          case "\\":
            r += "\\";
            break;
          default:
            r += a;
            break;
        }
        s += 2;
        continue;
      }
      if (a === "\\") {
        ((r += "\\"), (s += 2));
        continue;
      }
    }
    ((r += i), s++);
  }
  if (!o) r = Ir(r);
  return r;
}
function Ir(e) {
  let t = e.length;
  while (t > 0 && (e[t - 1] === " " || e[t - 1] === "\t")) t--;
  return e.slice(0, t);
}
function be(e, t, r) {
  let o = 1;
  while (
    o < e.length &&
    e[o] !== "]" &&
    e[o] !== " " &&
    e[o] !== "\t" &&
    e[o] !== '"'
  )
    o++;
  if (e.slice(1, o).toLowerCase() !== t) return !1;
  if (r === null) return o < e.length && e[o] === "]";
  while (o < e.length && (e[o] === " " || e[o] === "\t")) o++;
  if (o >= e.length || e[o] !== '"') return !1;
  o++;
  let i = "";
  while (o < e.length && e[o] !== '"') {
    if (e[o] === "\\" && o + 1 < e.length) {
      let a = e[o + 1];
      if (a === "\\" || a === '"') {
        ((i += a), (o += 2));
        continue;
      }
      ((i += a), (o += 2));
      continue;
    }
    ((i += e[o]), o++);
  }
  if (o >= e.length || e[o] !== '"') return !1;
  if ((o++, o >= e.length || e[o] !== "]")) return !1;
  return i === r;
}
function kr(e) {
  return (
    (e >= "a" && e <= "z") ||
    (e >= "A" && e <= "Z") ||
    (e >= "0" && e <= "9") ||
    e === "-"
  );
}
var GIT_ROOT_NEGATIVE_RESULT = Symbol("git-repo-negative-result");
class St {
  rootByPath = new Ku({ max: 50 });
  canonicalRootByRoot = new Ku({ max: 50 });
  remoteSlugByRoot = new Ku({ max: 50 });
  monorepoRuledOutByRoot = new Ku({ max: 50 });
  gitDirByCwd = new Map();
  linkedFromRootByPin = new Ku({ max: 64 });
  markersByRoot = new Ku({ max: 50 });
  repositoryByCwd = new Map();
  remoteHostByCwd = new Map();
  repoClassByCanonicalRoot = new Map();
  linguistGeneratedByPath = new Map();
  wcRootByPath = new Ku({ max: 50 });
  sessionRepoNameByCwd = new Ku({ max: 50 });
  gitExecutable = null;
  reportedHookInstallSkips = new Set();
  clear() {
    (this.rootByPath.clear(),
      this.canonicalRootByRoot.clear(),
      this.remoteSlugByRoot.clear(),
      this.monorepoRuledOutByRoot.clear(),
      this.gitDirByCwd.clear(),
      this.linkedFromRootByPin.clear(),
      this.markersByRoot.clear(),
      this.repositoryByCwd.clear(),
      this.remoteHostByCwd.clear(),
      this.repoClassByCanonicalRoot.clear(),
      this.linguistGeneratedByPath.clear(),
      this.wcRootByPath.clear(),
      this.sessionRepoNameByCwd.clear(),
      (this.gitExecutable = null),
      this.reportedHookInstallSkips.clear());
  }
}
function memoizeInMap(e, t, r) {
  let o = e.get(t);
  if (o !== void 0) return o;
  let s = r(t);
  return (e.set(t, s), s);
}
var xr = new j(() => new St());
function getGitRepoCache() {
  return xr.of(B().host);
}
function Rt(e, t) {
  try {
    let r = _t(e);
    if (r.isSymbolicLink()) {
      let o = readLinkTextSafe(e);
      if (o === null) return !1;
      if (ac(o, t)) return !1;
      if (rawPointerPathIsUnsafe(o, t)) return !1;
      let s = It(e);
      return s.isDirectory() || s.isFile();
    }
    return r.isDirectory() || r.isFile();
  } catch {
    return !1;
  }
}
function kt(e) {
  let t = Date.now();
  writeDiagnosticsEvent("info", "find_git_root_started");
  let r = N(e),
    o = r.substring(0, r.indexOf(k) + 1) || k,
    s = 0;
  while (r !== o) {
    let i = P(r, ".git");
    if ((s++, Rt(i, r)))
      return (
        writeDiagnosticsEvent("info", "find_git_root_completed", {
          duration_ms: Date.now() - t,
          stat_count: s,
          found: !0,
        }),
        zn(r)
      );
    let a = G(r);
    if (a === r) break;
    r = a;
  }
  if ((s++, Rt(P(o, ".git"), o)))
    return (
      writeDiagnosticsEvent("info", "find_git_root_completed", {
        duration_ms: Date.now() - t,
        stat_count: s,
        found: !0,
      }),
      zn(o)
    );
  return (
    writeDiagnosticsEvent("info", "find_git_root_completed", {
      duration_ms: Date.now() - t,
      stat_count: s,
      found: !1,
    }),
    GIT_ROOT_NEGATIVE_RESULT
  );
}
function findGitRoot(e) {
  let t = memoizeInMap(getGitRepoCache().rootByPath, e, kt);
  return t === GIT_ROOT_NEGATIVE_RESULT ? null : t;
}
function findGitRootUncached(e) {
  let t = kt(e);
  return t === GIT_ROOT_NEGATIVE_RESULT ? null : t;
}
async function findGitRootThroughBackendUncached(e, t) {
  let r = N(t),
    o = r.substring(0, r.indexOf(k) + 1) || k;
  for (;;) {
    let s = await e.stat(wc.workspace(P(r, ".git")), { follow: !1 });
    if (!s.ok || s.value.kind === "link") return;
    if (s.value.kind === "directory" || s.value.kind === "file")
      return { gitRoot: zn(r), entry: s.value.kind };
    if (r === o) return { gitRoot: null };
    let i = G(r);
    r = i === r ? o : i;
  }
}
function findGitRootRecheckingNegative(e) {
  let t = getGitRepoCache().rootByPath;
  if (t.peek(e) === GIT_ROOT_NEGATIVE_RESULT) t.delete(e);
  return findGitRoot(e);
}
async function findGitRootVerifyingPositive(e) {
  let t = findGitRootRecheckingNegative(e);
  if (t === null) return null;
  try {
    return (await Fr(P(t, ".git")), t);
  } catch (r) {
    let o = r?.code;
    if (o !== "ENOENT" && o !== "ENOTDIR") return t;
    return (getGitRepoCache().rootByPath.delete(e), findGitRootRecheckingNegative(e));
  }
}
function Ee(e) {
  try {
    return xt(e, readFileSync(P(e, ".git"), "utf-8"));
  } catch {
    return e;
  }
}
function xt(e, t) {
  try {
    let r = t.trim();
    if (!r.startsWith("gitdir:")) return e;
    let o = r.slice(7).trim();
    if (ac(o, e)) return e;
    if (rawPointerPathIsUnsafe(o, e)) return e;
    let s = N(e, o);
    if (pointerFileIsSuspect(P(s, "commondir"), s)) return e;
    let i = readFileSync(P(s, "commondir"), "utf-8").trim();
    if (ac(i, s)) return e;
    if (rawPointerPathIsUnsafe(i, s)) return e;
    let a = N(s, i);
    if (N(G(s)) !== P(a, "worktrees")) return e;
    if (pointerFileIsSuspect(P(s, "gitdir"), s)) return e;
    let u = readFileSync(P(s, "gitdir"), "utf-8").trim();
    if (ac(u, e)) return e;
    if (rawPointerPathIsUnsafe(u, s, e)) return e;
    if (realpathSync(N(s, u)) !== P(realpathSync(e), ".git")) return e;
    if (oe(a) !== ".git") return zn(a);
    return zn(G(a));
  } catch {
    return e;
  }
}
async function Lr(e, t) {
  let r = await e.readText(wc.workspace(P(t, ".git")));
  if (!r.ok || !r.value.found) return;
  return xt(t, r.value.value);
}
function findCanonicalGitRoot(e) {
  let t = findGitRoot(e);
  if (!t) return null;
  return memoizeInMap(getGitRepoCache().canonicalRootByRoot, t, Ee);
}
function findCanonicalGitRootUncached(e) {
  let t = findGitRootUncached(e);
  if (!t) return null;
  return Ee(t);
}
async function primeGitRootMemo(e, t) {
  if (e.hostFiles.serving("workspace") !== "host") return;
  let r = getGitRepoCache(),
    o = r.rootByPath.peek(t);
  if (o !== void 0) {
    let a = o === GIT_ROOT_NEGATIVE_RESULT ? null : o;
    return {
      gitRoot: a,
      canonicalRoot: a === null ? null : r.canonicalRootByRoot.peek(a),
    };
  }
  let s = await findGitRootThroughBackendUncached(e.hostFiles, t);
  if (s === void 0) return;
  let i =
    s.gitRoot === null
      ? { gitRoot: null, canonicalRoot: null }
      : {
          gitRoot: s.gitRoot,
          canonicalRoot:
            s.entry === "directory"
              ? s.gitRoot
              : await Lr(e.hostFiles, s.gitRoot),
        };
  return (seedGitRootMemo(t, i.gitRoot, i.canonicalRoot), i);
}
function seedGitRootMemo(e, t, r) {
  let o = getGitRepoCache(),
    s = t ?? GIT_ROOT_NEGATIVE_RESULT,
    i = o.rootByPath.peek(e);
  if (i === void 0) o.rootByPath.set(e, s);
  else if (i !== s) {
    n(
      "git root prime: findGitRoot already holds a different answer for the start path; keeping the first",
      { level: "warn" },
    );
    return;
  }
  if (t === null || r === void 0 || r === null) return;
  let a = o.canonicalRootByRoot.peek(t);
  if (a === void 0) o.canonicalRootByRoot.set(t, r);
  else if (a !== r)
    n(
      "git root prime: findCanonicalGitRoot already holds a different answer for the root; keeping the first",
      { level: "warn" },
    );
}
function isLinkedWorktree(e) {
  let t = findGitRoot(e);
  return t !== null && findCanonicalGitRoot(e) !== t;
}
function isLinkedWorktreeUncached(e) {
  let t = findGitRootUncached(e);
  return t !== null && Ee(t) !== t;
}
async function getGitWorktreeName(e) {
  if (isRemoteActive()) return null;
  let t = await resolveGitDir(e);
  if (!t || oe(t) === ".git" || oe(G(t)) !== "worktrees") return null;
  return oe(t);
}
var RAW_BLOB_DIFF_FLAGS = ["--no-ext-diff", "--no-textconv"];
function gitExe() {
  let e = getGitRepoCache();
  return ((e.gitExecutable ??= qR("git") || "git"), e.gitExecutable);
}
var Ct = new Gt(() => new Map());
async function Or() {
  let e = Date.now();
  writeDiagnosticsEvent("info", "is_git_check_started");
  let t = findGitRoot(getCwd()) !== null;
  return (
    writeDiagnosticsEvent("info", "is_git_check_completed", {
      duration_ms: Date.now() - e,
      is_git: t,
    }),
    t
  );
}
function vt() {
  return B();
}
function getIsGit() {
  let e = Ct.of(vt()),
    t = K(),
    r = e.get(t);
  if (r !== void 0) return r;
  let o = Or();
  return (e.set(t, o), o);
}
function clearIsGitMemoFor(e) {
  Ct.of(e).clear();
}
function clearIsGitMemo() {
  clearIsGitMemoFor(vt());
}
function getGitDir(e) {
  return resolveGitDir(e);
}
var dirIsInGitRepo = async (e) => findGitRoot(e) !== null,
  getHead = async () => getCachedHead(),
  getBranch = async (e) => {
    if (e === void 0) return getCachedBranch();
    let { stdout: t, code: r } = await execFileNoThrowWithCwd(
      gitExe(),
      [...GIT_HARDENED_ARGS, "rev-parse", "--abbrev-ref", "HEAD"],
      { cwd: e, preserveOutputOnError: !1 },
    );
    return r === 0 ? t.trim() || "HEAD" : "HEAD";
  };
async function isBranchOnOrigin(e, t) {
  return (
    (
      await execFileNoThrowWithCwd(
        gitExe(),
        [...GIT_HARDENED_ARGS, "show-ref", "--verify", "--quiet", `refs/remotes/origin/${e}`],
        { cwd: t ?? getCwd(), preserveOutputOnError: !1 },
      )
    ).code === 0
  );
}
var getDefaultBranch = async (e) => {
    if (e === void 0) return getCachedDefaultBranch();
    let t = await getDefaultBranchIfKnown(e);
    if (t) return t;
    for (let r of CONVENTIONAL_DEFAULT_BRANCH_NAMES)
      if (
        (
          await execFileNoThrowWithCwd(
            gitExe(),
            [
              ...GIT_HARDENED_ARGS,
              "show-ref",
              "--verify",
              "--quiet",
              `refs/remotes/origin/${r}`,
            ],
            { cwd: e, preserveOutputOnError: !1 },
          )
        ).code === 0
      )
        return r;
    return "main";
  },
  getDefaultBranchIfKnown = async (e) => {
    let { stdout: t, code: r } = await execFileNoThrowWithCwd(
      gitExe(),
      [...GIT_HARDENED_ARGS, "symbolic-ref", "--short", "refs/remotes/origin/HEAD"],
      { cwd: e ?? getCwd(), preserveOutputOnError: !1 },
    );
    if (r !== 0) return null;
    let o = t.trim().replace(/^origin\//, "");
    if (!o) return null;
    return (
      await execFileNoThrowWithCwd(
        gitExe(),
        [...GIT_HARDENED_ARGS, "show-ref", "--verify", "--quiet", `refs/remotes/origin/${o}`],
        { cwd: e ?? getCwd(), preserveOutputOnError: !1 },
      )
    ).code === 0
      ? o
      : null;
  },
  Tr = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
async function readGitConfigValue(e) {
  let { stdout: t, code: r } = await execFileNoThrow(gitExe(), [...GIT_HARDENED_ARGS, "config", "--get", e], {
    preserveOutputOnError: !1,
    useCwd: !0,
  });
  if (r !== 0) return null;
  let o = t.trim();
  return o.length > 0 ? o : null;
}
async function Mr() {
  let { stdout: e, code: t } = await execFileNoThrow(gitExe(), [...GIT_HARDENED_ARGS, "remote"], {
    preserveOutputOnError: !1,
    useCwd: !0,
  });
  if (t !== 0) return null;
  let r = e
      .split(
        `
`,
      )
      .map((s) => s.trim())
      .filter(Boolean),
    o = await readGitConfigValue("remote.pushDefault");
  if (o && r.includes(o)) return o;
  if (r.length === 1) return r[0] ?? null;
  return null;
}
async function getGitPushShellPatterns() {
  let e = new Set(["origin"]),
    t = await Mr();
  if (t && Tr.test(t)) e.add(t);
  return [...e].flatMap((r) => [`git push ${r} *`, `git push -u ${r} *`]);
}
var getRemoteUrl = async () => getCachedRemoteUrl(),
  Nr = async () => {
    let e = findGitRoot(getCwd());
    if (e === null) return null;
    try {
      let t = homedir();
      if (t && e === zn(N(t))) return null;
    } catch {}
    return getCachedRemoteUrl();
  },
  snapshotGitEvidenceForBridge = async () => {
    let [e, t, r] = await Promise.all([getBranch(), Nr(), getCachedDefaultBranchIfKnown()]);
    return { branch: e, gitRepoUrl: t, defaultBranch: r };
  };
function redactGitRemoteCredentials(e) {
  return e == null ? e : e.replace(/:\/\/[^/]*@/, "://***@");
}
function normalizeGitRemoteUrl(e) {
  let t = e.trim();
  if (!t) return null;
  let r = t.match(/^git@([^:/@]+):(.+?)(?:\.git)?$/);
  if (r && r[1] && r[2]) return `${r[1]}/${r[2]}`.toLowerCase();
  let o = t.match(
    /^(?:https?|ssh):\/\/(?:[^@/?#]*@)?([^/?#@]+)\/(.+?)(?:\.git)?$/,
  );
  if (o && o[1] && o[2]) {
    let s = o[1],
      i = o[2];
    if (isLocalHost(s) && i.startsWith("git/")) {
      let a = i.slice(4),
        u = a.split("/");
      if (u.length >= 3 && u[0].includes(".")) return a.toLowerCase();
      return `github.com/${a}`.toLowerCase();
    }
    return `${s}/${i}`.toLowerCase();
  }
  return null;
}
function Kr(e) {
  let t = e ? beforeFirst(e, ":").toLowerCase() : null;
  if (!t) return "none";
  if (isGitHubHost(t) || t.endsWith(`.${GITHUB_HOST}`)) return "github";
  if (t.endsWith(".ghe.com") || t.includes("github")) return "ghe";
  if (t === "gitlab.com" || t.includes("gitlab")) return "gitlab";
  if (t === "bitbucket.org" || t.includes("bitbucket")) return "bitbucket";
  if (
    t === "dev.azure.com" ||
    t === "ssh.dev.azure.com" ||
    t.endsWith(".visualstudio.com") ||
    t.endsWith(".azure.com")
  )
    return "azure";
  return "other";
}
async function getGitPresenceForAnalytics() {
  if (isRemoteActive()) return null;
  let [e, t] = await Promise.all([getIsGit(), getRemoteUrl()]).catch(() => [!1, null]),
    r = t ? normalizeGitRemoteUrl(t) : null;
  return {
    is_git: e,
    has_remote: r !== null,
    remote_host_class: Kr(r ? beforeFirst(r, "/") : null),
  };
}
function Br(e) {
  for (let t of [P(e, ".git", "config"), P(e, "config")])
    try {
      if (readPositionIsUnsafe(t, e)) continue;
      return readFileSync(t, "utf-8");
    } catch {}
  return null;
}
function Gr(e) {
  let t = Br(e);
  if (!t) return GIT_ROOT_NEGATIVE_RESULT;
  let r = (o) => {
    let s = U(t, "remote", "origin", o);
    return s ? normalizeGitRemoteUrl(s) : null;
  };
  return r("pushurl") ?? r("url") ?? GIT_ROOT_NEGATIVE_RESULT;
}
function findRepoRemoteSlug(e) {
  let t = memoizeInMap(getGitRepoCache().remoteSlugByRoot, e, Gr);
  return t === GIT_ROOT_NEGATIVE_RESULT ? null : t;
}
var Hr = 128000;
function readRepoConfigText(e) {
  try {
    let t = !0;
    try {
      _t(P(e, ".git"));
    } catch (s) {
      if (!W(s)) return null;
      t = !1;
    }
    let r = t ? P(e, ".git", "config") : P(e, "config");
    if (readPositionIsUnsafe(r, e)) return null;
    let o = It(r);
    if (!o.isFile() || o.size > Hr) return null;
    return readFileSync(r, "utf-8");
  } catch {
    return null;
  }
}
async function getRepoRemoteHash() {
  let e = await getRemoteUrl();
  if (!e) return null;
  let t = normalizeGitRemoteUrl(e);
  if (!t) return null;
  return createHash("sha256").update(t).digest("hex").substring(0, 16);
}
var getIsHeadOnRemote = async () => {
    let { code: e } = await execFileNoThrow(gitExe(), [...GIT_HARDENED_ARGS, "rev-parse", "@{u}"], {
      preserveOutputOnError: !1,
    });
    return e === 0;
  },
  hasUnpushedCommits = async (e) => {
    let { stdout: t, code: r } = await execFileNoThrowWithCwd(
      gitExe(),
      [...GIT_HARDENED_ARGS, "rev-list", "--count", "@{u}..HEAD"],
      { cwd: e, preserveOutputOnError: !1 },
    );
    return r === 0 && parseInt(t.trim(), 10) > 0;
  },
  getIsClean = async (e) => {
    let t = [...GIT_HARDENED_ARGS, "--no-optional-locks", "status", "--porcelain"];
    if (e?.ignoreUntracked) t.push("-uno");
    let { stdout: r } = await execFileNoThrow(gitExe(), t, { preserveOutputOnError: !1 });
    return r.trim().length === 0;
  },
  getFileStatus = async (e) => {
    let t = [...GIT_HARDENED_ARGS, "--no-optional-locks", "status", "--porcelain"],
      { stdout: r } =
        e === void 0
          ? await execFileNoThrow(gitExe(), t, { preserveOutputOnError: !1 })
          : await execFileNoThrowWithCwd(gitExe(), t, { cwd: e, preserveOutputOnError: !1 }),
      o = [],
      s = [];
    return (
      r
        .trim()
        .split(
          `
`,
        )
        .filter((i) => i.length > 0)
        .forEach((i) => {
          let a = i.substring(0, 2),
            u = i.substring(2).trim();
          if (a === "??") s.push(u);
          else if (u) o.push(u);
        }),
      { tracked: o, untracked: s }
    );
  },
  getWorktreeCount = async () => getWorktreeCountFromFs(),
  stashToCleanState = async (e) => {
    try {
      let t = e || `Claude Code auto-stash - ${new Date().toISOString()}`,
        { untracked: r } = await getFileStatus();
      if (r.length > 0) {
        let { code: s } = await execFileNoThrow(gitExe(), [...GIT_HARDENED_ARGS, "add", "--", ...r], {
          preserveOutputOnError: !1,
        });
        if (s !== 0) return !1;
      }
      let { code: o } = await execFileNoThrow(
        gitExe(),
        [...GIT_HARDENED_ARGS, "stash", "push", "--message", t],
        { preserveOutputOnError: !1 },
      );
      return o === 0;
    } catch (t) {
      return !1;
    }
  };
async function getGitState() {
  try {
    let [e, t, r, o, s, i] = await Promise.all([
      getHead(),
      getBranch(),
      getRemoteUrl(),
      getIsHeadOnRemote(),
      getIsClean(),
      getWorktreeCount(),
    ]);
    return (
      logFeatureOk("git_status_fetch"),
      {
        commitHash: e,
        branchName: t,
        remoteUrl: r,
        isHeadOnRemote: o,
        isClean: s,
        worktreeCount: i,
      }
    );
  } catch (e) {
    return (logFeatureBad("git_status_fetch", "git_status_fetch_failed"), null);
  }
}
async function getGithubRepo() {
  let { parseGitRemote: e } = await import("../共享小工具-未细化/parseGitHubRepository.3ng6714h.js"),
    t = await getRemoteUrl();
  if (!t) return (n("Local GitHub repo: unknown"), null);
  let r = e(t);
  if (r && isGitHubHost(r.host)) {
    let o = `${r.owner}/${r.name}`;
    return (n(`Local GitHub repo: ${o}`), o);
  }
  return (n("Local GitHub repo: unknown"), null);
}
function isLocalHost(e) {
  let t = e.indexOf(":"),
    r = t === -1 ? e : e.slice(0, t),
    o = t === -1 ? "" : e.slice(t + 1);
  if (o !== "" && !/^\d+$/.test(o)) return !1;
  return r === "localhost" || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(r);
}
var Ur = 4096;
function wt(e, t, r) {
  let o = /\/+/,
    s = t.split(o),
    i = s[0] === "" ? k : s[0] + k,
    a = 0;
  for (let u = 1; u < s.length; u++) {
    let m = s[u];
    if (m === "" || m === ".") continue;
    if (m === "..") {
      i = G(i);
      continue;
    }
    let b = i.endsWith(k) ? i + m : i + k + m;
    if (r !== void 0 ? XR(b, r) : Dr(b)) return null;
    let S;
    try {
      S = e.lstatSync(b);
    } catch {
      return null;
    }
    if (!S.isSymbolicLink()) {
      i = b;
      continue;
    }
    if (++a > 64) return null;
    let p;
    try {
      p = e.readlinkSync(b);
    } catch {
      return null;
    }
    if (An(p)) return null;
    if (r !== void 0 ? XR(p, r) : Dr(p)) return null;
    let c = p.split(o);
    if (Se(p))
      (s.splice(0, u + 1, ...c), (i = c[0] === "" ? k : c[0] + k), (u = 0));
    else (s.splice(u, 1, ...c), u--);
  }
  return i;
}
function isCurrentDirectoryBareGitRepo() {
  let e = ae(),
    t = getCwd(),
    r = wt(e, t, t) ?? t;
  try {
    r = realpathSync.native(r);
  } catch {}
  r = r.normalize("NFC").toLowerCase();
  let o = r.endsWith(k) ? r : r + k,
    s = (c) => {
      let d = c.toLowerCase();
      return d === r || d.startsWith(o);
    };
  function i(c) {
    if (XR(c, t)) return null;
    if (An(c)) {
      if (!/^[\\/]{2}wsl(\$|\.localhost)[\\/]/i.test(c)) return null;
      if (!An(t)) return { canonical: c.normalize("NFC"), crossOs: !0 };
    }
    let d = wt(e, c, t);
    if (d === null) return null;
    try {
      d = realpathSync.native(d);
    } catch {
      return null;
    }
    return { canonical: d.normalize("NFC"), crossOs: !1 };
  }
  function a(c, d) {
    if (!d && s(c)) return !0;
    for (let w of c.split(d ? /[\\/]+/ : k))
      if (w.toLowerCase() === ".git") return !1;
    return !0;
  }
  function u(c) {
    try {
      let d = e.lstatSync(P(c, "HEAD"));
      if (!d.isFile() || d.size > 4096) return !1;
      let w = readFileSync(P(c, "HEAD"), "utf8").slice(0, 255);
      return (
        /^ref:[ \t]*refs\//.test(w) ||
        /^[0-9a-f]{40}([0-9a-f]{24})?[ \t\n\r]*$/.test(w)
      );
    } catch {
      return !1;
    }
  }
  function m(c) {
    try {
      let d = P(c, "HEAD"),
        w = e.lstatSync(d);
      if (!w.isFile() || w.size > 4096) return !1;
      let E = readFileSync(d, "utf8").slice(0, 255);
      if (
        !/^ref:[ \t]*refs\//.test(E) &&
        !/^[0-9a-f]{40}([0-9a-f]{24})?[ \t\n\r]*$/.test(E)
      )
        return !1;
      for (let I of ["objects", "refs"]) {
        let F = P(c, I);
        if (!e.statSync(F).isDirectory()) return !1;
        accessSync(F, Ar.X_OK);
      }
      try {
        return (e.statSync(P(c, "commondir")), !1);
      } catch {}
      return !0;
    } catch {
      return !1;
    }
  }
  function b(c) {
    try {
      let d = e.lstatSync(P(c, "HEAD"));
      if (d.isFile() || d.isSymbolicLink()) return !0;
    } catch {}
    for (let d of ["objects", "refs"])
      try {
        return (e.statSync(P(c, d)), !0);
      } catch {}
    return !1;
  }
  function S(c) {
    let d = (w) => {
      let E = i(w);
      if (E === null)
        return (
          logFeatureSad("git_bare_repo_gate", "gitdir_target_uncanonical"),
          "plantable"
        );
      if (a(E.canonical, E.crossOs))
        return (
          logFeatureSad("git_bare_repo_gate", "gitdir_target_plantable"),
          "plantable"
        );
      return u(E.canonical) ? "trusted" : "none";
    };
    try {
      let w = e.lstatSync(P(c, ".git"));
      if (w.isSymbolicLink()) {
        let E;
        try {
          E = e.readlinkSync(P(c, ".git"));
        } catch {
          return "plantable";
        }
        return d(Se(E) ? E : c + k + E);
      }
      if (w.isFile()) {
        if (w.size > Ur) return "oversized";
        try {
          let E = readFileSync(P(c, ".git"), "utf8");
          if (E.includes("\x00")) return "plantable";
          if (!E.startsWith("gitdir: ")) return "none";
          let I = E.slice(8).replace(/[\r\n]+$/, "");
          return d(Se(I) ? I : c + k + I);
        } catch {
          return "none";
        }
      }
      if (w.isDirectory()) return m(P(c, ".git")) ? "trusted" : "none";
    } catch {}
    return "none";
  }
  switch (S(t)) {
    case "plantable":
      return "gitdir-redirect-plantable";
    case "oversized":
      return "gitdir-file-oversized";
    case "trusted":
      return (logFeatureOk("git_bare_repo_gate"), !1);
    case "none":
      break;
  }
  let p = t;
  for (;;) {
    if (b(p))
      return (logFeatureSad("git_bare_repo_gate", "bare_indicators"), "bare-indicators");
    let c = G(p);
    if (c === p) break;
    switch (S(c)) {
      case "trusted":
        return (logFeatureOk("git_bare_repo_gate"), !1);
      case "plantable":
        return "gitdir-redirect-plantable";
      case "oversized":
        return "gitdir-file-oversized";
      case "none":
        break;
    }
    p = c;
  }
  return (logFeatureOk("git_bare_repo_gate"), !1);
}
import { watchFile } from "fs";
function watchFileSafely(e, t, r) {
  let o = (s, i) => {
    try {
      r(s, i);
    } catch (a) {
      logError(a);
    }
  };
  try {
    watchFile(e, t, o);
  } catch (s) {
    logError(s);
  }
  return o;
}
import { open as zr } from "fs/promises";
import { join as Vr } from "path";
var At = 65536,
  Yr = 4096,
  H = 10,
  Xr = 32,
  jt = 94,
  qr = 35,
  Zr = /^[0-9a-f]+$/;
async function Lt(e, t) {
  let r = Buffer.from(t, "utf-8"),
    o = r.length,
    s = Buffer.allocUnsafe(At + 1),
    i,
    a = 0,
    u = 0,
    m = 0,
    b = 0,
    S = 0,
    p = 0,
    c = 0,
    d = 0,
    w = 0,
    E = 0,
    I = 0,
    F = 0,
    C;
  try {
    ((i = await zr(Vr(e, "packed-refs"), "r")),
      (a = (await i.stat()).size),
      (m = a));
    while (u < m) {
      if (
        ((b = u + Math.floor((m - u) / 2)),
        (p = Math.max(u, b - Yr)),
        (c = (await i.read(s, 0, Math.min(At, a - p), p)).bytesRead),
        (S = b - p),
        S >= c)
      )
        return null;
      if (
        ((s[c] = H),
        (d = S > 0 ? s.lastIndexOf(H, S - 1) + 1 : 0),
        d > 1 && s[d] === jt)
      )
        d = s.lastIndexOf(H, d - 2) + 1;
      if (s[d] === qr) {
        ((I = s.indexOf(H, d)), (u = p + (I < 0 || I >= c ? c : I + 1)));
        continue;
      }
      if (w === 0) w = d + 40 < c && s[d + 40] === Xr ? 40 : 64;
      if (((E = d + w + 1), E >= c)) return null;
      if (((F = s.compare(r, 0, o, E, Math.min(E + o, c))), F === 0)) {
        if (E + o < c && s[E + o] !== H) {
          m = p + d;
          continue;
        }
        return ((C = s.toString("ascii", d, d + w)), Zr.test(C) ? C : null);
      }
      if (F < 0) {
        if (((I = s.indexOf(H, S)), I < 0 || I >= c)) I = c - 1;
        if (I + 1 < c && s[I + 1] === jt) {
          if (((I = s.indexOf(H, I + 1)), I < 0 || I >= c)) I = c - 1;
        }
        u = p + I + 1;
      } else m = p + d;
    }
    return null;
  } catch {
    return null;
  } finally {
    await i?.close();
  }
}
function clearResolveGitDirCache() {
  getGitRepoCache().gitDirByCwd.clear();
}
async function resolveGitDir(e) {
  let t = D(e ?? getCwd()),
    r = getGitRepoCache().gitDirByCwd,
    o = r.get(t);
  if (o !== void 0) return o;
  let s = findGitRoot(t);
  if (!s) return (r.set(t, null), null);
  let i = _(s, ".git");
  try {
    if ((await Mt(i)).isFile()) {
      let u = await readFileHardened(i, ue, { sniffEncoding: !0, withBytes: !0 });
      if (u === null || u.truncated) return (r.set(t, null), null);
      let m = u.content.trim();
      if (m.startsWith("gitdir:")) {
        let b = m.slice(7).trim();
        if (ac(b, s)) return (r.set(t, null), null);
        let S = D(s, b);
        if (V(b, s)) return (r.set(t, null), null);
        return (r.set(t, S), S);
      }
    }
    return (r.set(t, i), i);
  } catch {
    return (r.set(t, null), null);
  }
}
function Nt(e) {
  try {
    let t = no(e);
    if (t.isSymbolicLink()) return "symlink";
    return t.isFile() ? "file" : t.isDirectory() ? "dir" : "other";
  } catch (t) {
    let r = A(t);
    return r === "ENOENT" || r === "ENOTDIR" ? "absent" : "other";
  }
}
function readLinkTextSafe(e) {
  try {
    let t = readlinkSync(e, { encoding: "buffer" }),
      r = t.toString("utf-8");
    if (r.includes("\x00") || !Buffer.from(r, "utf-8").equals(t)) return null;
    return r;
  } catch {
    return null;
  }
}
function pointerFileIsSuspect(e, t) {
  if (!J(e, t)) return !0;
  let r = Nt(e);
  return r === "symlink" || r === "other";
}
function readPositionIsUnsafe(e, t) {
  let r = lo(t, e);
  if (r === "" || r.startsWith("..") || co(r)) return !0;
  return !J(e, t);
}
function uo(e, t) {
  return ac(e, t);
}
var fo = /\/+/,
  po = /\/$/,
  Kt = /^\//,
  go = /^\//;
function J(e, t, r = 40, o = t) {
  if (r <= 0) return !1;
  let s = go.exec(e),
    i = s ? s[0] : "",
    a = e.slice(i.length).split(fo);
  for (let u = 0; u < a.length; u++) {
    let m = a[u];
    if (m === "" || m === ".") continue;
    if (m === "..") {
      i = Re(i);
      continue;
    }
    if (((i = _(i, m)), XR(i, o) || hZ(i))) return !1;
    let b = Nt(i);
    if (b === "other") return !1;
    if (b === "symlink") {
      let S = readLinkTextSafe(i);
      if (S === null) return !1;
      if (uo(S, Re(i))) return !1;
      let p = Kt.test(S) ? S : Re(i) + ie + S,
        c = a.slice(u + 1).join(ie),
        d = c ? (po.test(p) ? p + c : p + ie + c) : p;
      return J(d, t, r - 1, o);
    }
  }
  return !0;
}
function V(e, t, r = t) {
  if (!J(Kt.test(e) ? e : t + ie + e, t, void 0, r)) return !0;
  return !J(D(t, e), t, void 0, r);
}
function rawPointerPathIsUnsafe(e, t, r = t) {
  return V(e, t, r);
}
function isValidGitSha(e) {
  return /^[0-9a-f]{40}$/.test(e) || /^[0-9a-f]{64}$/.test(e);
}
async function z(e) {
  try {
    if (readPositionIsUnsafe(_(e, "HEAD"), e)) return null;
    let t = (await le(_(e, "HEAD"), "utf-8")).trim();
    if (t.startsWith("ref:")) {
      let r = t.slice(4).trim();
      if (r.startsWith("refs/heads/")) {
        let s = r.slice(11);
        if (!CS(s)) return null;
        return { type: "branch", name: s };
      }
      if (!CS(r)) return null;
      let o = await resolveRef(e, r);
      return o ? { type: "detached", sha: o } : { type: "detached", sha: "" };
    }
    if (!isValidGitSha(t)) return null;
    return { type: "detached", sha: t };
  } catch {
    return null;
  }
}
async function resolveRef(e, t, r = 5) {
  if (r <= 0) return null;
  let o = await Dt(e, t, r);
  if (o) return o;
  let s = await getCommonDir(e);
  if (s && s !== e) return Dt(s, t, r);
  return null;
}
async function Dt(e, t, r) {
  try {
    if (readPositionIsUnsafe(_(e, t), e)) return null;
    let o = (await le(_(e, t), "utf-8")).trim();
    if (o.startsWith("ref:")) {
      let s = o.slice(4).trim();
      if (!CS(s)) return null;
      return resolveRef(e, s, r - 1);
    }
    if (!isValidGitSha(o)) return null;
    return o;
  } catch {}
  if (readPositionIsUnsafe(_(e, "packed-refs"), e)) return null;
  return Lt(e, t);
}
var ue = 65536;
async function getCommonDir(e) {
  try {
    if (pointerFileIsSuspect(_(e, "commondir"), e)) return null;
    let t = await readFileHardened(_(e, "commondir"), ue, {
      sniffEncoding: !0,
      withBytes: !0,
    });
    if (t === null || t.truncated) return null;
    let r = t.content.trim();
    if (ac(r, e)) return null;
    if (V(r, e)) return null;
    return D(e, r);
  } catch {
    return null;
  }
}
async function Bt(e, t, r) {
  try {
    if (readPositionIsUnsafe(_(e, t), e)) return null;
    let o = (await le(_(e, t), "utf-8")).trim();
    if (o.startsWith("ref:")) {
      let s = o.slice(4).trim();
      if (s.startsWith(r)) {
        let i = s.slice(r.length);
        if (!CS(i)) return null;
        return i;
      }
    }
  } catch {}
  return null;
}
var Ot = 1000;
class Ht {
  gitDir = null;
  commonDir = null;
  initialized = !1;
  initPromise = null;
  watchedFiles = [];
  branchRefPath = null;
  generation = 0;
  cache = new Map();
  stateChanged = Le();
  repoBranches = new Map();
  repoWatchers = new Map();
  repoBranchListeners = [];
  async ensureStarted() {
    if (this.initialized) return;
    if (this.initPromise) return this.initPromise;
    return ((this.initPromise = this.start()), this.initPromise);
  }
  cleanupHandle = null;
  async start() {
    let e = this.generation;
    if (isRemoteActive()) {
      ((this.gitDir = null), (this.initialized = !0));
      return;
    }
    let t = await resolveGitDir();
    if (e !== this.generation) return;
    if (((this.gitDir = t), (this.initialized = !0), !this.cleanupHandle))
      this.cleanupHandle = Et(async () => {
        this.stopWatching();
      });
    if (!this.gitDir) return;
    let r = await getCommonDir(this.gitDir);
    if (e !== this.generation) return;
    ((this.commonDir = r),
      this.watchPath(_(this.gitDir, "HEAD"), this.gitDir, () => {
        this.onHeadChanged();
      }),
      this.watchPath(
        _(this.commonDir ?? this.gitDir, "config"),
        this.commonDir ?? this.gitDir,
        () => {
          this.invalidate();
        },
      ),
      this.watchPath(
        _(this.commonDir ?? this.gitDir, "refs", "remotes", "origin", "HEAD"),
        this.commonDir ?? this.gitDir,
        () => {
          this.invalidate();
        },
      ),
      await this.watchCurrentBranchRef());
  }
  watchPath(e, t, r) {
    if (readPositionIsUnsafe(e, t)) return;
    let o = watchFileSafely(e, { interval: Ot }, r);
    this.watchedFiles.push({ path: e, listener: o });
  }
  async watchCurrentBranchRef() {
    if (!this.gitDir) return;
    let e = this.generation,
      t = await z(this.gitDir);
    if (e !== this.generation) return;
    let r = this.commonDir ?? this.gitDir,
      o = t?.type === "branch" ? _(r, "refs", "heads", t.name) : null;
    if (o === this.branchRefPath) return;
    if (this.branchRefPath) {
      for (let { path: s, listener: i } of this.watchedFiles)
        if (s === this.branchRefPath) unwatchFile(s, i);
      this.watchedFiles = this.watchedFiles.filter(
        (s) => s.path !== this.branchRefPath,
      );
    }
    if (((this.branchRefPath = o), !o)) return;
    this.watchPath(o, r, () => {
      this.invalidate();
    });
  }
  async onHeadChanged() {
    (this.invalidate(), await urt(), await this.watchCurrentBranchRef());
  }
  invalidate() {
    for (let e of this.cache.values()) e.dirty = !0;
    this.stateChanged.emit();
  }
  onStateChange(e) {
    return this.stateChanged.subscribe(e);
  }
  stopWatching() {
    for (let { path: e, listener: t } of this.watchedFiles) unwatchFile(e, t);
    for (let { headPath: e, listener: t } of this.repoWatchers.values())
      unwatchFile(e, t);
    ((this.watchedFiles = []), (this.branchRefPath = null));
  }
  async get(e, t) {
    for (;;) {
      let r = this.generation;
      await this.ensureStarted();
      let o = this.cache.get(e);
      if (o && !o.dirty) return o.value;
      if (o) o.dirty = !1;
      let s = await t();
      if (r !== this.generation) continue;
      let i = this.cache.get(e);
      if (i && !i.dirty) i.value = s;
      if (!i) this.cache.set(e, { value: s, dirty: !1 });
      return s;
    }
  }
  async getDefaultBranchIfKnownAnchored() {
    let e = await this.get(
      "defaultBranchIfKnown",
      this.computeDefaultBranchIfKnownAnchored,
    );
    if (e === null) return e;
    let t = this.commonDir ?? this.gitDir;
    if (t && (await resolveRef(t, `refs/remotes/origin/${e}`))) return e;
    let r = this.cache.get("defaultBranchIfKnown");
    if (r) r.dirty = !0;
    return this.get(
      "defaultBranchIfKnown",
      this.computeDefaultBranchIfKnownAnchored,
    );
  }
  computeDefaultBranchIfKnownAnchored = async () => {
    let e = this.gitDir;
    if (!e) return null;
    let t = this.commonDir ?? e,
      r = await Bt(t, "refs/remotes/origin/HEAD", "refs/remotes/origin/");
    if (r && (await resolveRef(t, `refs/remotes/origin/${r}`))) return r;
    return null;
  };
  async addRepo(e) {
    if (this.repoWatchers.has(e)) return;
    let t = await resolveGitDir(e);
    if (!t) return;
    if (this.repoWatchers.has(e)) return;
    let r = _(t, "HEAD");
    if (readPositionIsUnsafe(r, t)) return;
    let o = watchFileSafely(r, { interval: Ot }, () => {
      this.repoBranches.delete(e);
      for (let s of this.repoBranchListeners) s();
    });
    this.repoWatchers.set(e, { gitDir: t, headPath: r, listener: o });
  }
  removeRepo(e) {
    let t = this.repoWatchers.get(e);
    if (!t) return;
    (unwatchFile(t.headPath, t.listener),
      this.repoWatchers.delete(e),
      this.repoBranches.delete(e));
  }
  onRepoBranchChange(e) {
    return (
      this.repoBranchListeners.push(e),
      () => {
        let t = this.repoBranchListeners.indexOf(e);
        if (t !== -1) this.repoBranchListeners.splice(t, 1);
      }
    );
  }
  async getBranchForRepo(e) {
    if (this.repoBranches.has(e)) return this.repoBranches.get(e);
    let t = this.repoWatchers.get(e)?.gitDir;
    if (!t) return;
    let r = await z(t),
      o = r?.type === "branch" ? r.name : null;
    return (this.repoBranches.set(e, o), o);
  }
  reset() {
    (this.generation++,
      this.stopWatching(),
      this.cleanupHandle?.(),
      (this.cleanupHandle = null),
      this.cache.clear(),
      this.stateChanged.clear(),
      this.repoBranches.clear(),
      this.repoWatchers.clear(),
      (this.repoBranchListeners = []),
      (this.initialized = !1),
      (this.initPromise = null),
      (this.gitDir = null),
      (this.commonDir = null));
  }
  reanchor() {
    this.generation++;
    for (let { path: e, listener: t } of this.watchedFiles) unwatchFile(e, t);
    ((this.watchedFiles = []),
      (this.branchRefPath = null),
      this.cache.clear(),
      (this.initialized = !1),
      (this.initPromise = null),
      (this.gitDir = null),
      (this.commonDir = null));
  }
}
var mo = new j(() => new Ht());
function v() {
  return mo.of(B().host);
}
async function ho() {
  let e = await resolveGitDir();
  if (!e) return "HEAD";
  let t = await z(e);
  if (!t) return "HEAD";
  return t.type === "branch" ? t.name : "HEAD";
}
async function yo() {
  let e = await resolveGitDir();
  if (!e) return "";
  let t = await z(e);
  if (!t) return "";
  if (t.type === "branch") return (await resolveRef(e, `refs/heads/${t.name}`)) ?? "";
  return t.sha;
}
async function ce(e) {
  if (readPositionIsUnsafe(_(e, "config"), e)) return null;
  return (
    (await readGitConfigFileValue(e, "remote", "origin", "pushurl")) ||
    (await readGitConfigFileValue(e, "remote", "origin", "url"))
  );
}
async function bo() {
  let e = await resolveGitDir();
  if (!e) return null;
  let t = await ce(e);
  if (t) return t;
  let r = await getCommonDir(e);
  if (r && r !== e) return ce(r);
  return null;
}
var CONVENTIONAL_DEFAULT_BRANCH_NAMES = ["main", "master"];
async function So() {
  let e = await resolveGitDir();
  if (!e) return "main";
  let t = (await getCommonDir(e)) ?? e,
    r = await Bt(t, "refs/remotes/origin/HEAD", "refs/remotes/origin/");
  if (r && (await resolveRef(t, `refs/remotes/origin/${r}`))) return r;
  for (let o of CONVENTIONAL_DEFAULT_BRANCH_NAMES) if (await resolveRef(t, `refs/remotes/origin/${o}`)) return o;
  return "main";
}
function getCachedBranch() {
  return v().get("branch", ho);
}
function getCachedHead() {
  return v().get("head", yo);
}
function getCachedRemoteUrl() {
  return v().get("remoteUrl", bo);
}
function getCachedDefaultBranch() {
  return v().get("defaultBranch", So);
}
function getCachedDefaultBranchIfKnown() {
  return v().getDefaultBranchIfKnownAnchored();
}
function addWatchedRepo(e) {
  return v().addRepo(e);
}
function removeWatchedRepo(e) {
  v().removeRepo(e);
}
function onRepoBranchChange(e) {
  return v().onRepoBranchChange(e);
}
function onWatchedGitStateChange(e) {
  let t = v();
  return (t.ensureStarted(), t.onStateChange(e));
}
function getCachedBranchForRepo(e) {
  return v().getBranchForRepo(e);
}
function resetGitFileWatcher() {
  v().reset();
}
function reanchorGitFileWatcher() {
  v().reanchor();
}
async function getHeadForDir(e) {
  let t = await resolveGitDir(e);
  if (!t) return null;
  let r = await z(t);
  if (!r) return null;
  if (r.type === "branch") return resolveRef(t, `refs/heads/${r.name}`);
  return r.sha;
}
async function readWorktreeHeadSha(e) {
  let t;
  try {
    if (pointerFileIsSuspect(_(e, ".git"), e)) return null;
    let o = (await le(_(e, ".git"), "utf-8")).trim();
    if (!o.startsWith("gitdir:")) return null;
    let s = o.slice(7).trim();
    if (ac(s, e)) return null;
    if (V(s, e)) return null;
    t = D(e, s);
  } catch {
    return null;
  }
  let r = await z(t);
  if (!r) return null;
  if (r.type === "branch") return resolveRef(t, `refs/heads/${r.name}`);
  return r.sha;
}
async function getRemoteUrlForDir(e) {
  let t = await resolveGitDir(e);
  if (!t) return null;
  let r = await ce(t);
  if (r) return r;
  let o = await getCommonDir(t);
  if (o && o !== t) return ce(o);
  return null;
}
function getRemoteUrlForDirSync(e) {
  let t = Eo(e);
  if (!t) return null;
  let r = Tt(t);
  if (r) return r;
  let o = Ro(t);
  return o && o !== t ? Tt(o) : null;
}
function Eo(e) {
  let t = D(e),
    r = getGitRepoCache().gitDirByCwd.get(t);
  if (r !== void 0) return r;
  let o = findGitRoot(t);
  if (!o) return null;
  let s = _(o, ".git");
  try {
    if (!io(s).isFile()) return s;
    let i = we(s, ue)?.trim();
    if (i === void 0 || !i.startsWith("gitdir:"))
      return i === void 0 ? null : s;
    let a = i.slice(7).trim();
    return ac(a, o) || V(a, o) ? null : D(o, a);
  } catch {
    return null;
  }
}
function Ro(e) {
  try {
    if (pointerFileIsSuspect(_(e, "commondir"), e)) return null;
    let t = we(_(e, "commondir"), ue)?.trim();
    return t === void 0 || ac(t, e) || V(t, e) ? null : D(e, t);
  } catch {
    return null;
  }
}
var wo = 1e6;
function Tt(e) {
  let t = _(e, "config");
  if (readPositionIsUnsafe(t, e)) return null;
  let r = we(t, wo, { keepWholeLines: !0 });
  if (r === void 0) return null;
  return U(r, "remote", "origin", "pushurl") || U(r, "remote", "origin", "url");
}
function we(e, t, { keepWholeLines: r = !1 } = {}) {
  let o;
  try {
    o = openSync(e, eo.O_RDONLY | O_NONBLOCK_FLAG);
    let s = fstatSync(o);
    if (!s.isFile() || s.size > t) return;
    let i = Buffer.allocUnsafe(t),
      a = 0;
    while (a < t) {
      let m = readSync(o, i, a, t - a, a);
      if (m === 0) break;
      a += m;
    }
    let u = i.subarray(0, a).toString("utf-8");
    return r && a === t
      ? u.slice(
          0,
          Math.max(
            u.lastIndexOf(`
`),
            0,
          ),
        )
      : u;
  } catch {
    return;
  } finally {
    if (o !== void 0) closeSync(o);
  }
}
async function isShallowClone() {
  let e = await resolveGitDir();
  if (!e) return !1;
  let t = (await getCommonDir(e)) ?? e;
  try {
    if (readPositionIsUnsafe(_(t, "shallow"), t)) return !1;
    return (await Mt(_(t, "shallow")), !0);
  } catch {
    return !1;
  }
}
async function getWorktreeCountFromFs() {
  try {
    let e = await resolveGitDir();
    if (!e) return 0;
    let t = (await getCommonDir(e)) ?? e;
    if (readPositionIsUnsafe(_(t, "worktrees"), t)) return 1;
    return (await ao(_(t, "worktrees"))).length + 1;
  } catch {
    return 1;
  }
}
export {
  isErrnoCode,
  isRetryableFsError,
  DEFAULT_OPEN_FILE_MODE,
  openFileReadOnlyHardened,
  LINK_MISDIRECTED_TELEMETRY_CODE,
  LINK_UNVERIFIED_TELEMETRY_CODE,
  validateStorageKey,
  CLOUD_SNAPSHOTS_DIR_NAME,
  ARCHIVE_SYNC_DIR_NAME,
  FOLDER_SYNC_DIR_NAME,
  parseRecordingStampFromFileName,
  DIR_SYNC_RECORD_FILE_SUFFIX,
  isValidSessionName,
  validateStorageScope,
  NO_REMOTE_TRANSPORT,
  getRemoteTransport,
  REMOTE_WAIT_STOPPED_MESSAGE,
  isRemoteActive,
  hasRemoteControlChannel,
  hasRemoteCapability,
  canCancelExternalLoading,
  createRemoteTransport,
  isBinaryFileExtension,
  readGitConfigFileValue,
  collectGitConfigIncludes,
  FIRST_PARTY_MAX_IMAGE_BASE64_BYTES,
  DEFAULT_MAX_IMAGE_RAW_BYTES,
  getAttachmentLimitsForTransport,
  estimateImageTokenCount,
  DEFAULT_IMAGE_LIMITS,
  DEFAULT_REQUEST_BYTE_LIMIT,
  MAX_PDF_ATTACHMENT_BYTES,
  MAX_PDF_ATTACHMENT_PAGES,
  PDF_PAGE_EXTRACTION_SIZE_THRESHOLD,
  MAX_BINARY_CONTENT_BYTES,
  DEFAULT_MAX_PDF_PAGES_PER_READ,
  MAX_PDF_PAGES_FOR_WHOLE_READ,
  DEFAULT_MAX_MEDIA_BLOCKS,
  LONG_CONTEXT_MAX_MEDIA_BLOCKS,
  MEDIA_BLOCK_RESERVE_COUNT,
  MEDIA_BYTE_CAP_FOR_OTHER_PROVIDERS,
  MEDIA_BYTE_CAP_FOR_DEFAULT_ENDPOINT,
  MEDIA_BYTE_CAP_SAFETY_MARGIN,
  getSidecarKeyForMetadataPath,
  getSidecarKeyForPath,
  TOOL_RESULTS_DIR_NAME,
  getToolResultsDirForSession,
  getCurrentToolResultsDir,
  getSidecarKeyForToolResultFile,
  ensureToolResultsDirectory,
  assertSafeDirectoryPath,
  writeBytesExclusiveHardened,
  removeSymlinkAtWriteTarget,
  readPdfAttachment,
  getPdfPageCount,
  extractPdfPageImages,
  listExtractedPdfPageNames,
  readFileHardened,
  isNotFoundError,
  watchFileSafely,
  GIT_ROOT_NEGATIVE_RESULT,
  memoizeInMap,
  getGitRepoCache,
  clearResolveGitDirCache,
  resolveGitDir,
  readLinkTextSafe,
  pointerFileIsSuspect,
  readPositionIsUnsafe,
  rawPointerPathIsUnsafe,
  isValidGitSha,
  resolveRef,
  getCommonDir,
  CONVENTIONAL_DEFAULT_BRANCH_NAMES,
  getCachedBranch,
  getCachedHead,
  getCachedRemoteUrl,
  getCachedDefaultBranch,
  getCachedDefaultBranchIfKnown,
  addWatchedRepo,
  removeWatchedRepo,
  onRepoBranchChange,
  onWatchedGitStateChange,
  getCachedBranchForRepo,
  resetGitFileWatcher,
  reanchorGitFileWatcher,
  getHeadForDir,
  readWorktreeHeadSha,
  getRemoteUrlForDir,
  getRemoteUrlForDirSync,
  isShallowClone,
  getWorktreeCountFromFs,
  findGitRoot,
  findGitRootUncached,
  findGitRootThroughBackendUncached,
  findGitRootRecheckingNegative,
  findGitRootVerifyingPositive,
  findCanonicalGitRoot,
  findCanonicalGitRootUncached,
  primeGitRootMemo,
  seedGitRootMemo,
  isLinkedWorktree,
  isLinkedWorktreeUncached,
  getGitWorktreeName,
  RAW_BLOB_DIFF_FLAGS,
  gitExe,
  getIsGit,
  clearIsGitMemoFor,
  clearIsGitMemo,
  getGitDir,
  dirIsInGitRepo,
  getHead,
  getBranch,
  isBranchOnOrigin,
  getDefaultBranch,
  getDefaultBranchIfKnown,
  readGitConfigValue,
  getGitPushShellPatterns,
  getRemoteUrl,
  snapshotGitEvidenceForBridge,
  redactGitRemoteCredentials,
  normalizeGitRemoteUrl,
  getGitPresenceForAnalytics,
  findRepoRemoteSlug,
  readRepoConfigText,
  getRepoRemoteHash,
  getIsHeadOnRemote,
  hasUnpushedCommits,
  getIsClean,
  getFileStatus,
  getWorktreeCount,
  stashToCleanState,
  getGitState,
  getGithubRepo,
  isLocalHost,
  isCurrentDirectoryBareGitRepo,
};
