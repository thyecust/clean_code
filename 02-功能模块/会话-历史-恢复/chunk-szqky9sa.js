// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { l, W, Rt, Bp } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { We, z, Is, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir, getTeamsDir } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { beforeFirst } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { logDirectories, logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { isTempFileFor, writeFileAtomicWithOptions } from "../../01-核心基础设施/安全文件系统(FS加固)/atomic-file-write.js";
import { Sl } from "../插件系统/chunk-7s6mt1vg.js";
import { isTempFileName, isValidPathSegment, getNormalizedNames, STORAGE_KEYS, createBridgeSpawnKey } from "../Teammates团队/storage-keys.js";
import { isSettingsSourceEnabled, PARENT_MANAGED_SETTINGS_LABEL, CLEANUP_PERIOD_SETTING_KEYS } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import {
  isTempScratchName,
  LOCKFILE_ACQUIRE_OPTIONS,
  HistoryFileIntegrityError,
  scanHistoryFileRange,
  pruneOldPastes,
  readFileWithLineRange,
  resolveSkillBucketId,
  verifySyncOwnedPath,
  trashDirectory,
  hasSyncMarker,
  removeSyncMarker,
  BRIDGE_SPAWN_DIR_NAME,
  getBridgeSpawnRootDir,
  AUTO_MODE_CLASSIFIER_ERROR_FILENAME,
  AUTO_MODE_DUMP_FILE_PREFIX,
  AUTO_MODE_ENV_EDIT_FILE_PREFIX,
  AUTO_MODE_BUILTINS_FILE_PREFIX,
  cleanupStaleAgentWorktrees,
  reapJobWorktreeIfSafe,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { readJobStateFreshOrNull, readPinnedJobIds, isSettled } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import { MASKED_IDS_FILE_NAME, getModelCatalogCacheDir, getFeatureValue_CACHED_MAY_BE_STALE, getMemoryBaseDir, getAutoMemPath } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isSameProcessAsync } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { LITE_READ_BUF_SIZE, extractFieldFromFirstEntryStrict, extractFieldFromLastEntryStrict, readHeadAndTail, anchorOffsetTail } from "./chunk-mkmy4cx2.js";
import { CLOUD_SNAPSHOTS_DIR_NAME, ARCHIVE_SYNC_DIR_NAME, FOLDER_SYNC_DIR_NAME, parseRecordingStampFromFileName, isValidSessionName, TOOL_RESULTS_DIR_NAME } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { isDesktopHostEntrypointValue } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { getSettingsForSource, getSettings_DEPRECATED, anyAdminPolicyTierGovernsRetention, getPolicySettingsLoadErrors, getSecuritySensitiveSetting, rawSettingsKeyPresence } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { isTainted } from "../../01-核心基础设施/共享小工具-未细化/compliance-taints-store.js";
import { Cs, hf } from "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import { sweepStaleJobDrafts } from "../../01-核心基础设施/共享小工具-未细化/job-drafts.js";
import {
  MANIFEST_FILE_NAME,
  STAGING_DIR_NAME,
  isSkillBucketId,
  SYNCED_SKILLS_DIR_PATH,
  SKILLS_TRASH_DIR_PATH,
  SKILLS_STAGING_DIR_PATH,
  SYNCED_SKILLS_STAGING_DIR_PATH,
  SYNCED_PLUGINS_DIR_PATH,
  PLUGINS_TRASH_DIR_PATH,
  SYNCED_PLUGINS_STAGING_DIR_PATH,
} from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { getClaudeTempDir } from "../../01-核心基础设施/核心工具-路径与平台/temp-directory.js";
import { emitRetentionSweepEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/otel-events.js";
import { MCP_SKILL_ARCHIVES_DIR_NAME, readMcpSkillCacheMeta } from "../Skills技能/mcp-skill-cache.js";
import { MAX_FILE_READ_LINES, MAX_FILE_READ_BYTES, parseFrontmatter } from "../MCP客户端/chunk-3kmsshb6.js";
import { cleanupStaleImageCacheDirs, PUBLISHED_FLOOR_FILE_NAME, getSettingsWithMcpErrors } from "../../01-核心基础设施/设置-配置/chunk-xy3cbvd8.js";
import { getProjectsDir } from "../Teammates团队/transcript-paths.js";
import { resetPlanFileCacheToUnknown } from "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import { NON_REGULAR_PATH_ERRNOS } from "../图片-截图-ComputerUse/computer-use-lock.js";
import { RECEIVED_FILES_MAX_AGE_DAYS } from "../../01-核心基础设施/共享小工具-未细化/file-transfer-config.js";
import { peerTransferSpoolDir } from "../跨会话消息(UDS)/peer-file-transfer.js";
import { isProcessRunning } from "../../01-核心基础设施/共享小工具-未细化/process-record.js";
import { s, T, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import * as A from "fs/promises";
import { homedir, tmpdir } from "os";
import { basename, dirname, join as d } from "path";
var ce = 3,
  le = 3,
  V = 1;
import {
  lstat,
  mkdir,
  realpath,
  rename,
  rm as Yt,
} from "fs/promises";
async function K(e) {
  let t;
  try {
    t = await lstat(e, { bigint: !0 });
  } catch (a) {
    if (W(a)) return null;
    throw a;
  }
  let r = process.getuid?.();
  return t.isDirectory() && (r === void 0 || t.uid === BigInt(r)) ? t : null;
}
var tr = createLazyValue(() => c({ key: s(), integrity: s().nullable(), time: T() }));
var q = 30,
  Ee = 0,
  Oe = [
    "ccr-tip.json",
    "custom-title.json",
    "precompact.json",
    "sent-prefix.json",
    AUTO_MODE_CLASSIFIER_ERROR_FILENAME,
  ];
function ue(e) {
  let t = getNormalizedNames(e);
  return isValidPathSegment(e) && t.length === 1 && t[0] === e.toLowerCase() && isValidSessionName(e);
}
function ve(e) {
  return (
    Oe.some((t) => e === t || isTempFileFor(e, t)) ||
    (e.startsWith(AUTO_MODE_DUMP_FILE_PREFIX) && (e.endsWith(".json") || e.includes(".json.tmp."))) ||
    (e.startsWith(AUTO_MODE_ENV_EDIT_FILE_PREFIX) && e.endsWith(".md"))
  );
}
async function Ept(e) {
  if (!isSettingsSourceEnabled("userSettings") && getSettings_DEPRECATED()?.cleanupPeriodDays === void 0)
    return (
      n(
        "Skipping retention cleanup: userSettings source is disabled (--setting-sources) and no enabled source provides cleanupPeriodDays.",
      ),
      "user_source_disabled"
    );
  if (getSettingsForSource("policySettings")?.cleanupPeriodDays !== void 0) return null;
  if (
    getSettingsWithMcpErrors().errors.filter((r) => !r.mcpErrorMetadata && r.severity !== "warning")
      .length > 0
  )
    for (let r of CLEANUP_PERIOD_SETTING_KEYS) {
      let a = await rawSettingsKeyPresence(
        r,
        e,
        r === "desktopSessionCleanupPeriodDays"
          ? { presenceSources: ["userSettings", "flagSettings"] }
          : void 0,
      );
      if (a === "unknowable")
        return (
          n(
            `Skipping cleanup: a settings file could not be read or parsed, so ${r} may be set to a value that cannot be seen. Fix the settings file (see /doctor) to re-enable cleanup.`,
          ),
          "settings_unknowable"
        );
      if (a === "present")
        return (
          n(
            `Skipping cleanup: settings have validation errors but ${r} was explicitly set. Fix settings errors to enable cleanup.`,
          ),
          "settings_invalid_key_set"
        );
    }
  return null;
}
async function Vhr(e) {
  return (await Ept(e)) === null;
}
function NS(e) {
  let r = (getSettings_DEPRECATED() || {}).cleanupPeriodDays ?? q;
  if (r === 0) return null;
  if (e !== void 0 && e < r) r = e;
  let a = r * 24 * 60 * 60 * 1000;
  return new Date(Date.now() - a);
}
var X = ".desktop-released.json",
  Ie = 4096;
function te(e) {
  return e.slice(0, -6) + X;
}
var Fe = createLazyValue(() => c({ reason: s().optional() }));
async function fe(e, t, r) {
  let a = await t.readFileFdGated(e, Ie);
  if (a === null) return "none";
  let o;
  try {
    let f = Fe().safeParse(z(a.content));
    o = f.success ? f.data.reason : void 0;
  } catch {
    return "none";
  }
  if (o === "delete") return "release-now";
  if (o === "archive") return a.stats.mtime < r ? "release-now" : "grace";
  return "none";
}
function Te(e) {
  return /^[0-9A-Za-z_-]{1,64}$/.test(e);
}
function xe() {
  let e = getSecuritySensitiveSetting("desktopSessionCleanupPeriodDays")[0] ?? Ee;
  if (e === 0) return null;
  return new Date(Date.now() - e * 24 * 60 * 60 * 1000);
}
function Ae() {
  if (getSettingsForSource("policySettings")?.cleanupPeriodDays !== void 0) return !0;
  if (anyAdminPolicyTierGovernsRetention()) return !0;
  return getPolicySettingsLoadErrors().some(
    (e) =>
      e.file !== PARENT_MANAGED_SETTINGS_LABEL &&
      (CLEANUP_PERIOD_SETTING_KEYS.some((t) => t === e.path) || e.severity !== "warning"),
  );
}
function v9n() {
  return Ae() || isTainted("hipaa") || isTainted("zdr");
}
function E() {
  return { messages: 0, errors: 0, filesRetainedFresh: 0, filesPastCutoff: 0 };
}
function F(e, t) {
  return {
    messages: e.messages + t.messages,
    errors: e.errors + t.errors,
    filesRetainedFresh: e.filesRetainedFresh + t.filesRetainedFresh,
    filesPastCutoff: e.filesPastCutoff + t.filesPastCutoff,
  };
}
function Ne(e) {
  let t = beforeFirst(e, ".").replace(
    /T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/,
    "T$1:$2:$3.$4Z",
  );
  return new Date(t);
}
function Obe(e) {
  return Rt(e) || Bp(e);
}
async function pe(e, t, r) {
  let a = E();
  try {
    let o = await ae().readdir(e);
    for (let f of o)
      try {
        if (Ne(f.name) < t)
          if ((await ae().unlink(d(e, f.name)), r)) a.messages++;
          else a.errors++;
      } catch (w) {
        n(`Failed to clean up file ${f.name} in ${e}: ${w}`, {
          level: "error",
        });
      }
  } catch (o) {
    if (W(o));
    else if (Obe(o))
      n(`cleanup readdir ${e} failed: ${o.code}`, { level: "error" });
    else logError(o);
  }
  return a;
}
async function je() {
  let e = ae(),
    t = NS();
  if (t === null) return E();
  let r = logDirectories.errors(),
    a = logDirectories.baseLogs(),
    o = await pe(r, t, !1);
  try {
    let f;
    try {
      f = await e.readdir(a);
    } catch {
      return o;
    }
    let w = f
      .filter((y) => y.isDirectory() && y.name.startsWith("mcp-logs-"))
      .map((y) => d(a, y.name));
    for (let y of w) ((o = F(o, await pe(y, t, !0))), await O(y, e));
  } catch (f) {
    if (W(f));
    else if (Obe(f))
      n(`cleanup mcp-logs scan failed: ${f.code}`, { level: "error" });
    else logError(f);
  }
  return o;
}
async function x(e, t, r, a, o = t, f) {
  let w;
  try {
    w = await r.stat(e);
  } catch (y) {
    if (W(y)) return !1;
    throw y;
  }
  if (!(w.mtime < t)) return (a.filesRetainedFresh++, !1);
  if (f !== void 0 && (await f(e, w))) return !1;
  try {
    await r.unlink(e);
  } catch (y) {
    if (W(y)) return !1;
    if (w.mtime < o) a.filesPastCutoff++;
    throw y;
  }
  return !0;
}
async function O(e, t) {
  try {
    await t.rmdir(e);
  } catch {}
}
var re = [ARCHIVE_SYNC_DIR_NAME, FOLDER_SYNC_DIR_NAME];
async function Me(e, t, r, a) {
  try {
    for (let p of re) await he(d(e, p), t, r, a);
    let o = (await r.readdir(e)).filter((p) => !re.includes(p.name)),
      f = null;
    for (let p of o) {
      let g = d(e, p.name),
        D =
          (await se(p, g, r)) === "directory"
            ? await J(g, r, { requireCompleteWalk: !0 })
            : (await r.lstat(g)).mtimeMs;
      if (D !== null) f = Math.max(f ?? -1 / 0, D);
    }
    if (!((f ?? (await we(e, r))) < t.getTime())) return;
    if (
      (
        await Promise.all(
          re.map((p) =>
            r.lstat(d(e, p)).then(
              (g) => g.isDirectory(),
              (g) => {
                if (W(g)) return !1;
                throw g;
              },
            ),
          ),
        )
      ).includes(!0)
    ) {
      for (let p of o) await r.rm(d(e, p.name), { recursive: !0, force: !0 });
      if (o.length > 0) a.messages++;
      return;
    }
    (await r.rm(e, { recursive: !0, force: !0 }), a.messages++);
  } catch (o) {
    if (!W(o)) a.errors++;
  }
}
async function he(e, t, r, a) {
  if (!(await G(e, r))) return;
  let o = await r.readdir(e).catch(() => []);
  for (let f of o) {
    let w = await se(f, d(e, f.name), r).catch((p) => {
      if (!W(p)) a.errors++;
      return "other";
    });
    if (w === "file") {
      try {
        if (await x(d(e, f.name), t, r, a)) a.messages++;
      } catch {
        a.errors++;
      }
      continue;
    }
    if (w !== "directory") continue;
    let y = d(e, f.name);
    try {
      if (
        ((await J(y, r, { requireCompleteWalk: !0 })) ?? (await we(y, r))) <
        t.getTime()
      )
        (await r.rm(y, { recursive: !0, force: !0 }), a.messages++);
    } catch (p) {
      if (!W(p)) a.errors++;
    }
  }
  await O(e, r);
}
async function se(e, t, r) {
  if (e.isDirectory()) return "directory";
  if (e.isFile()) return "file";
  if (
    e.isSymbolicLink() ||
    e.isFIFO() ||
    e.isSocket() ||
    e.isBlockDevice() ||
    e.isCharacterDevice()
  )
    return "other";
  let a = await r.lstat(t);
  return a.isDirectory() ? "directory" : a.isFile() ? "file" : "other";
}
async function we(e, t) {
  return (await t.lstat(e)).mtimeMs;
}
async function G(e, t) {
  try {
    return (await t.lstat(e)).isDirectory();
  } catch {
    return !1;
  }
}
async function Z(e, t, r, a, o = {}) {
  let { entryMatcher: f } = o,
    w = await r.readdir(e).catch((y) => {
      if (o.countEnumerationFailures === !0 && !W(y)) a.errors++;
      return [];
    });
  for (let y of w) {
    let p = d(e, y.name);
    if (y.isDirectory()) await Z(p, t, r, a, o);
    else if (f !== void 0 && !f(y.name));
    else if (y.isFile())
      try {
        if (await x(p, t, r, a)) a.messages++;
      } catch {
        a.errors++;
      }
    else
      try {
        if ((await r.lstat(p)).mtime < t) (await r.unlink(p), a.messages++);
      } catch {
        a.errors++;
      }
  }
  await O(e, r);
}
async function J(e, t, { requireCompleteWalk: r = !1 } = {}) {
  let a = -1 / 0,
    o = await t.readdir(e).catch((f) => {
      if (r && !W(f)) throw f;
      return [];
    });
  for (let f of o) {
    let w = d(e, f.name),
      y = r
        ? await se(f, w, t).catch((p) => {
            if (W(p)) return "other";
            throw p;
          })
        : f.isDirectory()
          ? "directory"
          : f.isFile()
            ? "file"
            : "other";
    if (y === "directory") {
      let p = await J(w, t, { requireCompleteWalk: r });
      if (p !== null) a = Math.max(a, p);
    } else if (y === "file")
      try {
        let { mtimeMs: p } = await t.stat(w);
        a = Math.max(a, p);
      } catch (p) {
        if (r && !W(p)) throw p;
      }
  }
  return a === -1 / 0 ? null : a;
}
async function Be() {
  let e = NS(),
    t = { ...E(), transcripts: 0, transcriptsExemptedDesktop: 0 };
  if (e === null) return t;
  let r = getProjectsDir(),
    a = ae(),
    o;
  try {
    o = await a.readdir(r);
  } catch {
    return t;
  }
  let f;
  try {
    if (((f = getClaudeTempDir()), !(await a.lstat(f)).isDirectory())) f = null;
  } catch {
    f = null;
  }
  let w = v9n(),
    y = xe(),
    p = null,
    g = w
      ? void 0
      : async (D, R) => {
          if (isTainted("hipaa") || isTainted("zdr")) return !1;
          if (y !== null && R.mtime < y) return !1;
          let P = await fe(te(D), a, e);
          if (P === "release-now") return !1;
          if (P === "grace") return (t.transcriptsExemptedDesktop++, !0);
          if (R.size === 0) {
            if (
              !(await a.stat(D.slice(0, -6)).then(
                (C) => C.isDirectory(),
                () => !1,
              ))
            )
              return (t.transcriptsExemptedDesktop++, !0);
          }
          p ??= Buffer.allocUnsafe(LITE_READ_BUF_SIZE);
          let { head: b, tail: _ } = await readHeadAndTail(D, R.size, p);
          if (b === "" && R.size > 0)
            throw (
              await a.stat(D),
              Error(
                "transient read failure while classifying a transcript for the desktop retention exemption",
              )
            );
          let B = R.size > LITE_READ_BUF_SIZE ? anchorOffsetTail(_) : _,
            k = extractFieldFromFirstEntryStrict(b, "entrypoint"),
            I = extractFieldFromLastEntryStrict(B, "entrypoint");
          if (!((k !== void 0 && isDesktopHostEntrypointValue(k)) || (I !== void 0 && isDesktopHostEntrypointValue(I))))
            return !1;
          let Y = basename(D).startsWith("agent-")
            ? (extractFieldFromFirstEntryStrict(b, "sessionId") ?? extractFieldFromLastEntryStrict(B, "sessionId"))
            : void 0;
          if (Y !== void 0 && Te(Y)) {
            let L = d(dirname(D), `${Y}${X}`);
            if (L !== te(D)) {
              if ((await fe(L, a, e)) === "release-now") return !1;
            }
          }
          return (t.transcriptsExemptedDesktop++, !0);
        };
  for (let D of o) {
    if (!D.isDirectory()) continue;
    let R = d(r, D.name),
      P;
    try {
      P = await a.readdir(R);
    } catch {
      t.errors++;
      continue;
    }
    P.sort((k, I) => Number(I.isDirectory()) - Number(k.isDirectory()));
    let b = [],
      _ = null,
      B = new Set(
        P.filter((k) => k.isFile() && k.name.endsWith(".jsonl")).map((k) =>
          k.name.slice(0, -6),
        ),
      );
    for (let k of P) {
      if (_ === null && !k.isDirectory()) _ = t.errors;
      if (k.isFile()) {
        if (k.name.endsWith(X) && B.has(k.name.slice(0, -X.length))) continue;
        if (
          !k.name.endsWith(".jsonl") &&
          !k.name.endsWith(".cast") &&
          !k.name.endsWith(".ccr-tip.json") &&
          !k.name.endsWith(".precompact.json") &&
          !k.name.endsWith(X) &&
          !k.name.includes(".desktop-released.json.tmp") &&
          !k.name.endsWith(".dir-sync.json") &&
          !k.name.includes(".ccr-tip.json.tmp.") &&
          !k.name.includes(".precompact.json.tmp.") &&
          !k.name.includes(".dir-sync.json.tmp.") &&
          !k.name.includes(".jsonl.compact.tmp.") &&
          !k.name.includes(".jsonl.superseded-")
        )
          continue;
        let I = d(R, k.name);
        try {
          if (
            await x(I, e, a, t, void 0, k.name.endsWith(".jsonl") ? g : void 0)
          ) {
            if ((t.messages++, k.name.endsWith(".jsonl"))) {
              t.transcripts++;
              let N = k.name.slice(0, -6);
              if (ue(N)) {
                if (
                  (await a.unlink(d(R, `${N}.ccr-tip.json`)).catch(() => {}),
                  await a.unlink(d(R, `${N}.precompact.json`)).catch(() => {}),
                  b.push(te(I)),
                  await a
                    .rm(d(R, N), { recursive: !0, force: !0 })
                    .catch(() => {
                      t.errors++;
                    }),
                  f !== null)
                ) {
                  let Y = d(f, D.name),
                    L = await a.lstat(Y).catch(() => null);
                  if (L?.isDirectory()) {
                    if (
                      (await a
                        .rm(d(Y, N), { recursive: !0, force: !0 })
                        .catch(() => {
                          t.errors++;
                        }),
                      L.mtime < e)
                    )
                      await O(Y, a);
                  }
                }
              }
            }
          }
        } catch (N) {
          if (!W(N)) t.errors++;
        }
      } else if (k.isDirectory()) {
        let I = d(R, k.name);
        if (k.name === "bagel") {
          let C = await J(I, a);
          if (C !== null && C < e.getTime())
            try {
              (await a.rm(I, { recursive: !0, force: !0 }), t.messages++);
            } catch {
              t.errors++;
            }
          continue;
        }
        if (k.name === CLOUD_SNAPSHOTS_DIR_NAME) {
          await Me(I, e, a, t);
          continue;
        }
        if (!ue(k.name)) {
          let C = await a.lstat(I).catch(() => null);
          if (C !== null && C.mtime < e) await O(I, a);
          continue;
        }
        let N = d(I, TOOL_RESULTS_DIR_NAME);
        if (await G(N, a)) {
          let C = await a.readdir(N).catch(() => []);
          for (let U of C)
            if (U.isFile())
              try {
                if (await x(d(N, U.name), e, a, t)) t.messages++;
              } catch {
                t.errors++;
              }
            else if (U.isDirectory()) {
              let Q = d(N, U.name),
                ie;
              try {
                ie = await a.readdir(Q);
              } catch {
                continue;
              }
              for (let oe of ie) {
                if (!oe.isFile()) continue;
                try {
                  if (await x(d(Q, oe.name), e, a, t)) t.messages++;
                } catch {
                  t.errors++;
                }
              }
              await O(Q, a);
            }
          await O(N, a);
        }
        let Y = await a.readdir(I).catch(() => []);
        for (let C of Y) {
          if (!C.isFile() || !(ve(C.name) || parseRecordingStampFromFileName(C.name) !== void 0)) continue;
          if (C.name === "custom-title.json" && B.has(k.name)) continue;
          try {
            if (await x(d(I, C.name), e, a, t)) t.messages++;
          } catch {
            t.errors++;
          }
        }
        let L = d(I, "mcp-tasks");
        if (await G(L, a)) {
          for (let C of await a.readdir(L).catch(() => [])) {
            let U = C.name.endsWith(".json") || C.name.includes(".json.tmp.");
            if (!C.isFile() || !U) continue;
            try {
              if (await x(d(L, C.name), e, a, t)) t.messages++;
            } catch {
              t.errors++;
            }
          }
          await O(L, a);
        }
        if (!B.has(k.name))
          for (let C of ["subagents", "workflows", "remote-agents"]) {
            let U = d(I, C);
            if (await G(U, a)) await Z(U, e, a, t);
          }
        await O(I, a);
      }
    }
    if (_ !== null && t.errors > _) b.length = 0;
    for (let k of b) await a.unlink(k).catch(() => {});
    await O(R, a);
  }
  return t;
}
async function v(e, t, r = !0, a) {
  let o = NS(a),
    f = E();
  if (o === null) return f;
  let w = a === void 0 ? o : (NS() ?? o),
    y = typeof t === "string" ? (D) => D.endsWith(t) : t,
    p = ae(),
    g;
  try {
    g = await p.readdir(e);
  } catch {
    return f;
  }
  for (let D of g) {
    if (!D.isFile() || !y(D.name)) continue;
    try {
      if (await x(d(e, D.name), o, p, f, w)) f.messages++;
    } catch {
      f.errors++;
    }
  }
  if (r) await O(e, p);
  return f;
}
async function Le() {
  let e = E(),
    t = NS();
  if (t === null) return e;
  let r = d(getClaudeConfigDir(), "hfi-auth.json");
  try {
    if (await x(r, t, ae(), e)) e.messages++;
  } catch (a) {
    if (!W(a))
      (n(`Failed to clean up HFI auth file: ${a}`, { level: "error" }),
        e.errors++);
  }
  return e;
}
async function Ue() {
  let e = E(),
    t = NS();
  if (t === null) return e;
  let r = d(getClaudeConfigDir(), "cache", "team-discovery.json");
  try {
    if (await x(r, t, ae(), e)) e.messages++;
  } catch (a) {
    if (!W(a))
      if ((e.errors++, Obe(a)))
        n(`cleanup team-discovery-cache failed: ${a.code}`, { level: "error" });
      else logError(a);
  }
  return e;
}
async function $e() {
  return v(
    getModelCatalogCacheDir(),
    (e) =>
      e !== MASKED_IDS_FILE_NAME &&
      e !== PUBLISHED_FLOOR_FILE_NAME &&
      (e.endsWith(".json") || e.includes(".json.tmp.")),
  );
}
async function He() {
  let e = E(),
    t = NS();
  if (t === null) return e;
  let r = d(getClaudeConfigDir(), "mcp-needs-auth-cache.json");
  try {
    if (await x(r, t, ae(), e)) e.messages++;
  } catch (a) {
    if (!W(a))
      if ((e.errors++, Obe(a)))
        n(`cleanup mcp-auth-cache failed: ${a.code}`, { level: "error" });
      else logError(a);
  }
  return e;
}
async function Ye() {
  let e = E(),
    t = NS();
  if (t === null) return e;
  let r = d(getClaudeConfigDir(), "state", "device-unbound-creates.json");
  try {
    if (await x(r, t, ae(), e)) e.messages++;
  } catch (a) {
    if (!W(a))
      if ((e.errors++, Obe(a)))
        n(`cleanup device-unbound-creates failed: ${a.code}`, {
          level: "error",
        });
      else logError(a);
  }
  return e;
}
function Ge(e) {
  if (!e) return !1;
  try {
    let t = Is(e);
    if (typeof t !== "object" || t === null) return !0;
    if (!("timestamp" in t)) return !0;
    let { timestamp: r } = t;
    return typeof r !== "number" || !Number.isFinite(r);
  } catch {
    return !0;
  }
}
function ze(e, t) {
  if (!e) return !1;
  try {
    let r = Is(e);
    if (typeof r !== "object" || r === null || !("timestamp" in r)) return !1;
    let { timestamp: a } = r;
    return typeof a === "number" && Number.isFinite(a) && a < t;
  } catch {
    return !1;
  }
}
async function Ke(e, t) {
  let r;
  try {
    r = await A.readdir(e);
  } catch {
    return;
  }
  let a = t.getTime();
  await Promise.all(
    r
      .filter((o) => isTempFileFor(o, "history.jsonl") || isTempScratchName(o))
      .map(async (o) => {
        let f = d(e, o);
        try {
          let w = await A.lstat(f);
          if (w.isFile() && w.mtimeMs < a) await A.unlink(f);
        } catch {}
      }),
  );
}
async function Xe(e) {
  let t = d(getClaudeConfigDir(), "history.jsonl"),
    r = e.getTime(),
    a = (p) => ze(p, r) || Ge(p),
    o,
    f;
  try {
    if (((o = await A.lstat(t)), !o.isFile()))
      return (
        n(
          "History retention prune skipped: history.jsonl is not a regular file",
          { level: "error" },
        ),
        { entriesPruned: 0, errors: 1 }
      );
    f = await scanHistoryFileRange(t, a, {
      start: 0,
      end: o.size,
      tail: "defer",
      expect: { ino: o.ino, birthtimeMs: o.birthtimeMs },
    });
  } catch (p) {
    if (W(p)) return { entriesPruned: 0, errors: 0 };
    if (p instanceof HistoryFileIntegrityError)
      return (
        n(
          "History retention prune deferred: history.jsonl changed under the scan",
        ),
        { entriesPruned: 0, errors: 0 }
      );
    return (
      n(`History retention prune failed: ${p}`, { level: "error" }),
      { entriesPruned: 0, errors: 1 }
    );
  }
  if (f.dropped === 0 && f.consumed === o.size)
    return { entriesPruned: 0, errors: 0 };
  let w,
    y = !1;
  try {
    w = await Cs(t, {
      ...LOCKFILE_ACQUIRE_OPTIONS,
      onCompromised: (p) => {
        ((y = !0),
          n(`History retention lock compromised: ${p}`, { level: "error" }));
      },
    });
  } catch (p) {
    if (W(p)) return { entriesPruned: 0, errors: 0 };
    return (
      n(`History retention prune failed: ${p}`, { level: "error" }),
      { entriesPruned: 0, errors: 1 }
    );
  }
  try {
    let p = await A.lstat(t);
    if (
      !p.isFile() ||
      p.size < f.consumed ||
      (o.ino !== 0 && p.ino !== o.ino) ||
      p.birthtimeMs !== o.birthtimeMs
    )
      return (
        n(
          "History retention prune deferred: history.jsonl changed under the scan",
        ),
        { entriesPruned: 0, errors: 0 }
      );
    let g = await scanHistoryFileRange(t, a, {
        start: f.consumed,
        end: p.size,
        tail: "judge",
        expect: { ino: p.ino, birthtimeMs: p.birthtimeMs },
        verifiedHead: { bytes: f.consumed, digest: f.digest },
        residueBytes: o.size - f.consumed,
      }),
      D = f.dropped + g.dropped;
    if (y) throw Error("history lock compromised before the rewrite");
    if (D === 0 && g.terminated && !g.split)
      return { entriesPruned: 0, errors: 0 };
    let R = f.kept.concat(g.kept);
    return (
      await writeFileAtomicWithOptions(
        t,
        R.length
          ? `${R.join(`
`)}
`
          : "",
        { exactMode: p.mode & 511 },
      ),
      { entriesPruned: D, errors: 0 }
    );
  } catch (p) {
    if (p instanceof HistoryFileIntegrityError)
      return (
        n(
          "History retention prune deferred: history.jsonl changed under the scan",
        ),
        { entriesPruned: 0, errors: 0 }
      );
    return (
      n(`History retention prune failed: ${p}`, { level: "error" }),
      { entriesPruned: 0, errors: 1 }
    );
  } finally {
    await hf(w, "history retention");
  }
}
async function Je() {
  let e = d(getClaudeConfigDir(), "mcp-discovery-cache"),
    t = await v(e, (f) => f.endsWith(".json") || f.includes(".json.tmp."), !1),
    r = NS();
  if (r === null) return t;
  let a = ae(),
    o;
  try {
    o = await a.readdir(e);
  } catch {
    return t;
  }
  for (let f of o) {
    if (!f.isDirectory() || !f.name.endsWith(".json.lock")) continue;
    let w = d(e, f.name);
    try {
      if ((await a.stat(w)).mtime < r) (await a.rmdir(w), t.messages++);
    } catch {
      t.errors++;
    }
  }
  return (await O(e, a), t);
}
async function qe(e) {
  let t = d(getClaudeConfigDir(), "plans");
  try {
    if (e !== void 0)
      return await v(t, (r) => r.endsWith(".md") || r.includes(".md.tmp."));
    return await v(t, ".md");
  } finally {
    resetPlanFileCacheToUnknown();
  }
}
async function j(
  e,
  {
    exclude: t,
    skipIf: r,
    refuseRedirectedRoot: a = !1,
    removeEmptyBaseDir: o = !0,
    maxAgeDays: f,
    baseDir: w,
    storageV5: y,
  } = {},
) {
  let p = NS(f),
    g = E();
  if (p === null) return g;
  let D = ae(),
    R = getClaudeConfigDir(),
    P = w ?? d(R, e);
  if (a) {
    if (
      (await verifySyncOwnedPath(
        P,
        R,
        { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e },
        { storageV5: y },
      )) !== "real"
    )
      return g;
  }
  let b;
  try {
    b = await D.readdir(P);
  } catch {
    return g;
  }
  for (let _ of b) {
    if (!_.isDirectory() || t?.has(_.name)) continue;
    let B = d(P, _.name);
    try {
      if ((await D.stat(B)).mtime < p) {
        if (await r?.(B)) continue;
        (await D.rm(B, { recursive: !0, force: !0 }), g.messages++);
      }
    } catch {
      g.errors++;
    }
  }
  if (o) await O(P, D);
  return g;
}
function Ze() {
  return j("file-history");
}
function Qe() {
  return j("session-env");
}
function Ve() {
  return j("tasks");
}
function et() {
  return j("uploads");
}
async function tt(e) {
  if (isHoverRestEnabled() && e !== void 0) {
    let a = await rt(e);
    if (a !== "unaddressed") return a;
  }
  let t = getBridgeSpawnRootDir(),
    r = await K(t).catch(() => null);
  if (!r) return E();
  return j(BRIDGE_SPAWN_DIR_NAME, {
    removeEmptyBaseDir: !1,
    maxAgeDays: V,
    baseDir: t,
    skipIf: async (a) => {
      let o = await K(t);
      return (
        o?.ino !== r.ino ||
        o.dev !== r.dev ||
        (await K(a)) === null ||
        (await A.realpath(a)) !== d(await A.realpath(dirname(t)), BRIDGE_SPAWN_DIR_NAME, basename(a))
      );
    },
  });
}
async function rt(e) {
  let t = E(),
    r = createBridgeSpawnKey(),
    a = await e.scopeKind(r);
  if (!a.ok) return a.error.code === "InvalidArgument" ? "unaddressed" : t;
  if (
    a.value.kind !== "directory" ||
    a.value.object === void 0 ||
    a.value.owner === "other"
  )
    return t;
  let o = NS(V);
  if (o === null) return t;
  let f = await e.deleteScope(r, {
    olderThanMs: Math.max(0, Date.now() - o.getTime()),
  });
  if (!f.ok) return t;
  return (
    (t.messages += f.value.deleted),
    (t.errors += f.value.failed ?? 0),
    t
  );
}
function nt() {
  return v(peerTransferSpoolDir(), "", !1, RECEIVED_FILES_MAX_AGE_DAYS);
}
async function st(e) {
  return F(
    F(
      await j(SKILLS_STAGING_DIR_PATH, { refuseRedirectedRoot: !0, storageV5: e }),
      await j(SYNCED_SKILLS_STAGING_DIR_PATH, { refuseRedirectedRoot: !0, storageV5: e }),
    ),
    await ge(SYNCED_SKILLS_DIR_PATH, e),
  );
}
async function ge(e, t) {
  let r = E();
  if (NS() === null) return r;
  let a = getClaudeConfigDir(),
    o = d(a, e);
  if (
    (await verifySyncOwnedPath(
      o,
      a,
      { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e },
      { storageV5: t },
    )) !== "real"
  )
    return r;
  let w;
  try {
    w = await ae().readdir(o);
  } catch {
    return r;
  }
  for (let y of w) {
    if (!y.isDirectory() || !isSkillBucketId(y.name)) continue;
    r = F(
      r,
      await j(d(e, "*", STAGING_DIR_NAME), {
        baseDir: d(o, y.name, STAGING_DIR_NAME),
        refuseRedirectedRoot: !0,
        storageV5: t,
      }),
    );
  }
  return r;
}
function it(e) {
  return j(SKILLS_TRASH_DIR_PATH, { refuseRedirectedRoot: !0, storageV5: e });
}
async function Se(e, t, r, a) {
  let o = E(),
    f = NS();
  if (f === null) return o;
  let w = await resolveSkillBucketId().catch(() => null);
  if (w === null) return o;
  let y = getClaudeConfigDir(),
    p = d(y, e);
  if (
    (await verifySyncOwnedPath(
      p,
      y,
      { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e },
      { storageV5: a },
    )) !== "real"
  )
    return o;
  let D = ae(),
    R;
  try {
    R = await D.readdir(p);
  } catch {
    return o;
  }
  for (let P of R) {
    if (
      !P.isDirectory() ||
      !isSkillBucketId(P.name) ||
      P.name === w ||
      !(await hasSyncMarker(p, P.name))
    )
      continue;
    let b = d(p, P.name),
      _;
    try {
      _ = (await D.lstat(d(b, MANIFEST_FILE_NAME)).catch(() => D.lstat(b))).mtime;
    } catch {
      continue;
    }
    if (_ >= f) {
      o.filesRetainedFresh++;
      continue;
    }
    if (
      (o.filesPastCutoff++,
      await trashDirectory({
        dir: b,
        trashRoot: d(y, t),
        configHome: y,
        failureEvent: r,
        storageV5: a,
      }))
    )
      (await removeSyncMarker(p, P.name).catch(() => {}), o.messages++);
    else o.errors++;
  }
  return o;
}
function at(e) {
  return Se(SYNCED_PLUGINS_DIR_PATH, PLUGINS_TRASH_DIR_PATH, "plugins_sync_trash_move_failed", e);
}
function ot(e) {
  return Se(SYNCED_SKILLS_DIR_PATH, SKILLS_TRASH_DIR_PATH, "skills_sync_trash_move_failed", e);
}
function ct(e) {
  return j(PLUGINS_TRASH_DIR_PATH, { refuseRedirectedRoot: !0, storageV5: e });
}
async function lt(e) {
  return F(
    await j(SYNCED_PLUGINS_STAGING_DIR_PATH, { refuseRedirectedRoot: !0, storageV5: e }),
    await ge(SYNCED_PLUGINS_DIR_PATH, e),
  );
}
async function ut() {
  let e = d(Sl(), "store"),
    t = await v(e, (a) => a.endsWith(".json") || a.includes(".json.tmp."), !1),
    r = NS();
  if (r !== null) await he(e, r, ae(), t);
  return t;
}
async function pt() {
  let e = NS(),
    t = E();
  if (e === null) return t;
  let r = ae(),
    a = d(getClaudeConfigDir(), MCP_SKILL_ARCHIVES_DIR_NAME),
    o;
  try {
    o = await r.readdir(a);
  } catch {
    return t;
  }
  for (let f of o) {
    if (!f.isDirectory()) continue;
    let w = d(a, f.name),
      y = (await readMcpSkillCacheMeta(w))?.cacheKey ?? null,
      p;
    try {
      p = await r.readdir(w);
    } catch {
      t.errors++;
      continue;
    }
    for (let g of p) {
      if (!g.isDirectory() || g.name === y) continue;
      let D = d(w, g.name);
      try {
        if ((await r.stat(D)).mtime < e)
          (await r.rm(D, { recursive: !0, force: !0 }), t.messages++);
      } catch {
        t.errors++;
      }
    }
    try {
      if ((await r.stat(w)).mtime < e)
        (await r.rm(w, { recursive: !0, force: !0 }), t.messages++);
    } catch {
      t.errors++;
    }
  }
  return (await O(a, r), t);
}
async function dt() {
  let e = d(getClaudeConfigDir(), "usage-data"),
    t = await v(
      d(e, "facets"),
      (r) => r.endsWith(".json") || r.includes(".json.tmp."),
    );
  return (
    (t = F(
      t,
      await v(
        d(e, "session-meta"),
        (r) => r.endsWith(".json") || r.includes(".json.tmp."),
      ),
    )),
    (t = F(t, await v(e, (r) => r.endsWith(".html") || isTempFileName(r), !1))),
    await O(e, ae()),
    t
  );
}
async function mt() {
  let e = NS(),
    t = E();
  if (e === null) return t;
  let r = ae(),
    a;
  try {
    a = getClaudeTempDir();
  } catch {
    return t;
  }
  let o;
  try {
    o = await r.readdir(a);
  } catch {
    return t;
  }
  for (let f of o) {
    let w = f.name.startsWith("cc-transcript-") && f.name.endsWith(".txt"),
      y = f.name.startsWith(AUTO_MODE_BUILTINS_FILE_PREFIX) && f.name.endsWith(".md");
    if (!f.isFile() || (!w && !y)) continue;
    try {
      if (await x(d(a, f.name), e, r, t)) t.messages++;
    } catch {
      t.errors++;
    }
  }
  return t;
}
async function ht() {
  let e = E(),
    t = NS(le);
  if (t === null) return e;
  let r = ae(),
    a;
  try {
    if (((a = getClaudeTempDir()), !(await r.lstat(a)).isDirectory())) return e;
  } catch {
    return e;
  }
  let o = d(a, "speculation"),
    f;
  try {
    f = await r.lstat(o);
  } catch {
    return e;
  }
  if (!f.isDirectory()) return e;
  try {
    if (
      ((await J(o, r, { requireCompleteWalk: !0 })) ?? f.mtimeMs) < t.getTime()
    )
      return (await r.rm(o, { recursive: !0, force: !0 }), e.messages++, e);
  } catch {
    e.errors++;
  }
  return (await O(o, r), e);
}
async function wt() {
  let e = d(getClaudeConfigDir(), "shares"),
    t = await j("shares");
  return ((t = F(t, await v(e, ".zip", !1))), await O(e, ae()), t);
}
async function yt() {
  let e = d(getClaudeConfigDir(), "telemetry"),
    t = await v(e, ".json", !1),
    r = NS();
  if (r === null) return t;
  let a = d(e, "runs"),
    o = ae();
  if ((await G(e, o)) && (await G(a, o)))
    await Z(a, r, o, t, { entryMatcher: (f) => f.endsWith(".json") });
  return (await O(e, ae()), t);
}
function gt() {
  return v(d(getClaudeConfigDir(), "dump-prompts"), ".jsonl", !0, ce);
}
function St() {
  return v(d(getClaudeConfigDir(), "shell-snapshots"), ".sh");
}
async function Dt() {
  let e = NS(),
    t = E();
  if (e === null) return t;
  let r = ae(),
    a = getTeamsDir();
  for (let o of await r.readdir(a).catch(() => [])) {
    if (!o.isDirectory()) continue;
    let f = d(a, o.name, "inboxes");
    if (await G(f, r)) {
      for (let w of await r.readdir(f).catch(() => [])) {
        if (!w.isFile() || !w.name.endsWith(".json")) continue;
        try {
          if (await x(d(f, w.name), e, r, t)) t.messages++;
        } catch {
          t.errors++;
        }
      }
      await O(f, r);
    }
    await O(d(a, o.name), r);
  }
  return t;
}
async function kt(e, t = tmpdir()) {
  let r = E(),
    a = ae(),
    o = process.getuid?.(),
    f;
  try {
    f = await a.readdir(t);
  } catch (w) {
    if (!W(w)) r.errors++;
    return r;
  }
  for (let w of f) {
    if (!w.name.startsWith("cc-daemon-")) continue;
    let y = w.name.slice(10);
    if (
      /^\d+$/.test(y) ||
      (o !== void 0 && y === String(o)) ||
      /^[0-9a-f]{16}$/.test(y)
    )
      continue;
    let p = d(t, w.name);
    try {
      let g = await K(p);
      if (g === null) continue;
      let D = await a.readdir(p);
      if (D.length !== 1 || D[0].name !== "stderr.log") continue;
      let R = d(p, "stderr.log"),
        P = await a.lstat(R);
      if (!P.isFile()) continue;
      if (!(P.mtime < e)) {
        r.filesRetainedFresh++;
        continue;
      }
      let b = await K(p);
      if (b === null || b.dev !== g.dev || b.ino !== g.ino) continue;
      try {
        await a.unlink(R);
      } catch (_) {
        if (W(_)) continue;
        throw (r.filesPastCutoff++, _);
      }
      (r.messages++, await O(p, a));
    } catch (g) {
      if (!W(g)) r.errors++;
    }
  }
  return r;
}
async function Pt(e) {
  let t = getClaudeConfigDir(),
    r = await v(d(t, "jobs", "settled"), ".json");
  ((r = F(r, await v(d(t, "daemon", "dispatch", "rejected"), ".json"))),
    (r = F(r, await v(d(t, "daemon", "dispatch"), ".json", !1))),
    (r = F(r, await v(d(t, "daemon", "auth"), ".json"))));
  try {
    let p = d(t, "daemon", "host-managed"),
      g = ae(),
      D = NS();
    if (D)
      for (let R of await g.readdir(p)) {
        if (!R.isFile()) continue;
        try {
          await g.lstat(d(t, "jobs", R.name));
        } catch (P) {
          if (!W(P)) {
            r.errors++;
            continue;
          }
          try {
            if (await x(d(p, R.name), D, g, r)) r.messages++;
          } catch (b) {
            if (!W(b)) r.errors++;
          }
        }
      }
  } catch (p) {
    if (!W(p)) r.errors++;
  }
  let a = v9n(),
    o = NS(),
    f = new Set();
  if (!a) for (let p of await readPinnedJobIds(e)) f.add(p);
  let w = !1,
    y = !1;
  try {
    let p = d(t, "daemon", "roster.json"),
      g = await ae().lstat(p);
    if (!g.isFile() || g.size > 8388608) throw Error("not a regular file");
    let D = await ae().readFile(p, { encoding: "utf-8" }),
      R = z(D);
    if (R !== null && typeof R === "object" && "workers" in R) {
      let P = R.workers;
      if (P !== null && typeof P === "object") {
        w = !0;
        for (let [b, _] of Object.entries(P))
          if (
            _ !== null &&
            typeof _ === "object" &&
            "pid" in _ &&
            typeof _.pid === "number" &&
            isProcessRunning(_.pid) &&
            (await isSameProcessAsync(
              _.pid,
              "procStart" in _ && typeof _.procStart === "string"
                ? _.procStart
                : void 0,
            ))
          )
            (f.add(b), (y = !0));
      }
    }
  } catch {}
  if (
    ((r = F(
      r,
      await j("jobs", {
        exclude: f,
        skipIf: async (p) => {
          let g;
          try {
            g = await readJobStateFreshOrNull(p, e);
          } catch (D) {
            throw (
              logError(D),
              n(
                `[cleanup] jobs/${basename(p)}: job state read threw \u2014 keeping the folder (${l(D)})`,
                { level: "error" },
              ),
              D
            );
          }
          if (!a && (g === null || !isSettled(g))) return !0;
          if (g?.worktreePath && isSettled(g) && o)
            await reapJobWorktreeIfSafe({
              worktreePath: g.worktreePath,
              worktreeBranch: g.worktreeBranch,
              originCwd: g.originCwd,
              hookBased: g.worktreeHookBased,
              cutoff: o,
            }).catch(() => {});
          return !1;
        },
      }),
    )),
    o !== null)
  ) {
    r = F(r, await kt(o));
    let p = ae();
    for (let D of [d(t, "daemon.log"), d(t, "daemon.log.1")])
      try {
        if (await x(D, o, p, r)) r.messages++;
      } catch (R) {
        if (!W(R)) r.errors++;
      }
    let g = d(t, "daemon", "roster.json");
    try {
      if ((await p.lstat(g)).mtime < o && !y && (w || a))
        (await p.unlink(g), r.messages++);
    } catch (D) {
      if (!W(D)) r.errors++;
    }
    for (let D of await p.readdir(d(t, "daemon")).catch(() => [])) {
      if (!D.isFile() || !D.name.startsWith("roster.json.corrupt.")) continue;
      try {
        if (await x(d(t, "daemon", D.name), o, p, r)) r.messages++;
      } catch {
        r.errors++;
      }
    }
  }
  return (await sweepStaleJobDrafts(), r);
}
function _t() {
  return v(d(getClaudeConfigDir(), "backups"), "", !1);
}
async function Et() {
  let e = NS(),
    t = E();
  if (e === null) return t;
  let r = ae(),
    a = d(getClaudeConfigDir(), "debug"),
    o;
  try {
    o = await r.readdir(a);
  } catch {
    return t;
  }
  for (let f of o) {
    if (f.name === "latest" || !f.isFile()) continue;
    try {
      if (await x(d(a, f.name), e, r, t)) t.messages++;
    } catch {
      t.errors++;
    }
  }
  return t;
}
async function Ct() {
  return v(d(getClaudeConfigDir(), "feedback-bundles"), ".zip");
}
async function Ot() {
  return v(
    d(getClaudeConfigDir(), "feedback", "drafts"),
    (e) => e.endsWith(".json") || e.includes(".json.tmp."),
    !0,
    30,
  );
}
async function vt() {
  let e = await v(d(getClaudeConfigDir(), "traces"), ".json"),
    t = await v(d(getClaudeConfigDir(), "startup-perf"), ".txt"),
    r = await v(d(getClaudeConfigDir(), "startup-perf"), ".json");
  return F(F(e, t), r);
}
var bt = 86400000,
  De = NON_REGULAR_PATH_ERRNOS;
function It(e) {
  if (e === void 0) return S("none");
  if (!De.has(e)) return S("other");
  return e === "ELOOP" ? S("ELOOP") : e === "EISDIR" ? S("EISDIR") : S("ENXIO");
}
function Ft(e) {
  return (
    e.code === "Failed" && e.telemetryCode !== void 0 && De.has(e.telemetryCode)
  );
}
function Tt(e) {
  if (e.ok) return "removed it";
  return ("telemetryCode" in e.error ? e.error.telemetryCode : void 0) ===
    "EISDIR"
    ? "could not remove it (EISDIR): a directory at the marker path stays and the marker write will keep failing"
    : `could not remove it (${e.error.code})`;
}
async function gan(e) {
  let t = await e.statMeta(STORAGE_KEYS.state("last-cleanup"));
  if (t.ok || t.error.code === "NotFound" || !Ft(t.error)) return;
  logEvent("tengu_cleanup_throttle_marker", {
    marker: S("last-cleanup"),
    verdict: S("not_regular_rerun"),
    code: fromEnum(t.error.code),
    errno: It("telemetryCode" in t.error ? t.error.telemetryCode : void 0),
  });
  let r = await e.delete(STORAGE_KEYS.state("last-cleanup"));
  n(
    `.last-cleanup: sentinel is not a regular file (${We(t.error)}) \u2014 ${Tt(r)}; rewriting`,
    { level: "warn" },
  );
}
var xt = [
  ".npm-cache-cleanup",
  ".version-cleanup",
  ".last-cleanup",
  ".deep-link-register-failed",
];
async function han(e, t) {
  if (!t.claimStagingReap()) return;
  let r;
  try {
    r = await A.readdir(e);
  } catch {
    return;
  }
  let a = Date.now() - bt;
  await Promise.all(
    r
      .filter((o) => xt.some((f) => isTempFileFor(o, f)))
      .map(async (o) => {
        let f = d(e, o);
        try {
          let w = await A.lstat(f);
          if (w.isFile() && w.mtimeMs < a) await A.unlink(f);
        } catch {}
      }),
  );
}
async function At() {
  let e = NS(),
    t = E();
  if (e === null) return t;
  let r = ae();
  for (let a of ["todos", "statsig", "logs"]) {
    let o = d(getClaudeConfigDir(), a),
      f;
    try {
      f = await r.readdir(o);
    } catch {
      continue;
    }
    for (let w of f) {
      let y = d(o, w.name);
      try {
        if (!((await r.stat(y)).mtime < e)) continue;
        if (w.isDirectory()) await r.rm(y, { recursive: !0, force: !0 });
        else await r.unlink(y);
        t.messages++;
      } catch {
        t.errors++;
      }
    }
    await O(o, r);
  }
  return t;
}
async function Nt() {
  let e = E(),
    t = NS();
  if (t === null) return e;
  let r = d(getMemoryBaseDir(), "projects"),
    a = ae(),
    o = await a.lstat(r).catch((w) => {
      if (!W(w)) e.errors++;
      return null;
    });
  if (o === null || !o.isDirectory()) return e;
  let f = await a.readdir(r).catch((w) => {
    if (!W(w)) e.errors++;
    return [];
  });
  for (let w of f) {
    if (!w.isDirectory()) continue;
    let y = d(r, w.name, "tiny_memory"),
      p = await a.lstat(y).catch((g) => {
        if (!W(g)) e.errors++;
        return null;
      });
    if (p === null || !p.isDirectory()) continue;
    await Z(y, t, a, e, { countEnumerationFailures: !0 });
  }
  return e;
}
async function jt() {
  let t = E(),
    r = NS();
  if (r === null) return t;
  let a = d(getMemoryBaseDir(), "projects"),
    o = ae(),
    f = await o.readdir(a).catch(() => []);
  for (let w of f) {
    if (!w.isDirectory()) continue;
    t = F(t, await de(d(a, w.name, "memory", "proposals"), r, o));
  }
  return F(t, await de(d(getAutoMemPath(), "proposals"), r, o));
}
var Mt = "skill-proposal";
async function de(e, t, r) {
  let a = E();
  try {
    if ((await r.lstat(e)).isSymbolicLink()) return a;
  } catch (f) {
    if (!Rt(f)) a.errors++;
    return a;
  }
  let o = await r.readdir(e).catch((f) => {
    if (!W(f)) a.errors++;
    return [];
  });
  for (let f of o) {
    if (!f.isFile() || !f.name.endsWith(".md")) continue;
    let w = d(e, f.name);
    try {
      let { content: y, mtimeMs: p } = await readFileWithLineRange(w, 0, MAX_FILE_READ_LINES, MAX_FILE_READ_BYTES, void 0, {
        truncateOnByteLimit: !0,
      });
      if (!(p < t.getTime())) continue;
      if (parseFrontmatter(y, w).frontmatter.type !== Mt) continue;
      (await r.unlink(w), a.messages++);
    } catch (y) {
      if (!W(y)) a.errors++;
    }
  }
  return (await O(e, r), a);
}
async function _an(e) {
  await cleanupStaleImageCacheDirs();
  let t = await Ept(e),
    r = getSettings_DEPRECATED()?.cleanupPeriodDays;
  if (t !== null) {
    (logEvent("tengu_retention_sweep", { skipped: !0, skipReason: fromEnum(t) }),
      emitRetentionSweepEvent({
        result: "skipped",
        skipReason: t,
        periodDays: r ?? q,
        usedDefault: r === void 0,
      }));
    return;
  }
  (logEvent("tengu_retention_sweep", { phase: S("start") }), await je());
  let a = await Be(),
    o = [a];
  (o.push(await qe(e)),
    o.push(await Ze()),
    o.push(await Qe()),
    o.push(await Ve()),
    o.push(await et()),
    o.push(await tt(e)),
    o.push(await nt()),
    o.push(await dt()),
    o.push(await st(e)),
    o.push(await lt(e)),
    o.push(await ot(e)),
    o.push(await at(e)),
    o.push(await it(e)),
    o.push(await ct(e)),
    o.push(await ut()),
    o.push(await pt()),
    o.push(await mt()),
    o.push(await ht()),
    o.push(await wt()),
    o.push(await yt()),
    o.push(await Et()),
    o.push(await Ct()),
    o.push(await Ot()),
    o.push(await vt()),
    o.push(await gt()),
    o.push(await St()),
    o.push(await Dt()),
    o.push(await Pt(e)),
    o.push(await _t()),
    o.push(await Le()),
    o.push(await He()),
    o.push(await Ye()),
    o.push(await Je()),
    o.push(await Ue()),
    o.push(await $e()),
    o.push(await At()),
    o.push(await Nt()),
    o.push(await jt()));
  let f = { entriesPruned: 0, errors: 0 },
    w = NS();
  if (w !== null) {
    await pruneOldPastes(w, e);
    let p = await cleanupStaleAgentWorktrees(w);
    if (p > 0) logEvent("tengu_worktree_cleanup", { removed: p });
    if (
      (await Ke(getClaudeConfigDir(), w),
      isTainted("hipaa") && getFeatureValue_CACHED_MAY_BE_STALE("tengu_hipaa_history_retention_prune", !0))
    )
      ((f = await Xe(w)), o.push({ ...E(), errors: f.errors }));
  }
  let y = o.reduce(F, E());
  (logEvent("tengu_retention_sweep", {
    phase: S("complete"),
    skipped: !1,
    transcriptsDeleted: a.transcripts,
    transcriptsExemptedDesktop: a.transcriptsExemptedDesktop,
    sessionFilesDeleted: a.messages,
    artifactsDeleted: y.messages,
    filesRetainedFresh: y.filesRetainedFresh,
    filesPastCutoff: y.filesPastCutoff,
    errors: y.errors,
    historyEntriesPruned: f.entriesPruned,
    periodDays: r ?? q,
    usedDefault: r === void 0,
  }),
    emitRetentionSweepEvent({
      result: "complete",
      periodDays: r ?? q,
      usedDefault: r === void 0,
      transcriptsDeleted: a.transcripts,
      transcriptsExemptedDesktop: a.transcriptsExemptedDesktop,
      sessionFilesDeleted: a.messages,
      artifactsDeleted: y.messages,
      filesRetainedFresh: y.filesRetainedFresh,
      filesPastCutoff: y.filesPastCutoff,
      errorCount: y.errors,
      historyEntriesPruned: f.entriesPruned,
    }));
}
export { Ept, Vhr, NS, v9n, Obe, gan, han, _an };
