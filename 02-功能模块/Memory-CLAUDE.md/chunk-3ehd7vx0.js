// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { isWellFormed } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { SEED_HOME_PACK_PATH, toCaseFoldKey, hasWindowsReservedPathComponent } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/共享小工具-未细化/diagnostics-log.js";
var _ =
  /^\d{4}-\d{2}-\d{2}[Tt ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[zZ]|[+-]\d{2}:?\d{2})$/;
function parseIsoTimestamp(n) {
  return _.test(n) ? Date.parse(n) : Number.NaN;
}
import { posix } from "path";
var x = posix.dirname(SEED_HOME_PACK_PATH),
  p = "/mnt/user-data/working",
  d = posix.join(p, SEED_HOME_PACK_PATH),
  MAX_HOME_SEED_FILES = 32,
  MAX_HOME_SEED_FILE_BYTES = 524288,
  MAX_HOME_SEED_TOTAL_BYTES = 2097152,
  MAX_HOME_SEED_PATH_LENGTH = 200,
  E = 237,
  f = 4,
  H = "CLAUDE.md",
  RULES_DIR_NAME = "rules",
  OUTPUT_STYLES_DIR_NAME = "output-styles",
  SETTINGS_FILE_NAME = "settings.json",
  c = ".md",
  M =
    /[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u,
  A = /^\p{M}/u;
function g(n) {
  return (
    n !== "" &&
    n === n.trim() &&
    Buffer.byteLength(n, "utf8") <= E &&
    !n.startsWith(".") &&
    !hasWindowsReservedPathComponent(n) &&
    !n.includes("\\") &&
    !M.test(n) &&
    !A.test(n) &&
    !n.endsWith("~") &&
    !n.endsWith(".swp") &&
    !n.endsWith(".tmp")
  );
}
function l(n) {
  return n.length > c.length && n.endsWith(c);
}
function normalizePathKey(n) {
  return toCaseFoldKey(n);
}
function F(n) {
  return l(normalizePathKey(n));
}
function getMemoryFileKind(n) {
  if (n.length > MAX_HOME_SEED_PATH_LENGTH || !isWellFormed(n) || n.normalize("NFC") !== n) return null;
  let e = n.split("/");
  if (!e.every(g)) return null;
  let [t, ...o] = e;
  if (o.length === 0) return t === H ? "claude_md" : null;
  let i = o.slice(0, -1),
    r = o.at(-1) ?? "";
  if (!l(r) || i.some(F)) return null;
  if (o.length > f) return null;
  return t === RULES_DIR_NAME ? "rule" : t === OUTPUT_STYLES_DIR_NAME ? "output_style" : null;
}
function isAllowedMemoryPath(n) {
  return getMemoryFileKind(n) !== null;
}
function parseMemoryDestination(n) {
  let e = getMemoryFileKind(n);
  return e === null ? null : { destination: n, kind: e };
}
var D = 8,
  MAX_ETAG_LENGTH = 256;
function createHomeSeedAnnouncer() {
  let n = [],
    e = 0,
    t = !1,
    o = !1,
    i = Le();
  return {
    noteStagedRow(r) {
      if (r.mount_path !== d) return !1;
      let u = r.content_sha256,
        s = typeof u === "string" && u.length > 0 && u.length <= MAX_ETAG_LENGTH ? u : null;
      if (s === null) {
        if (!o)
          ((o = !0), writeDiagnosticsEvent("warn", "home_seed_stage_without_usable_etag", {}));
        return !1;
      }
      e++;
      let a = { etag: s, beforeFirstCommand: !t, ordinal: e };
      n = [...n, a].slice(-D);
      try {
        i.emit(a);
      } catch {
        writeDiagnosticsEvent("error", "home_seed_announcement_listener_threw", {});
      }
      return !0;
    },
    markFirstCommandDequeued() {
      t = !0;
    },
    firstCommandDequeued() {
      return t;
    },
    announcements() {
      return n;
    },
    announcementCount() {
      return e;
    },
    announcementForEtag(r) {
      return n.findLast((u) => u.etag === r);
    },
    announced: { subscribe: i.subscribe },
  };
}
export { parseIsoTimestamp, MAX_HOME_SEED_FILES, MAX_HOME_SEED_FILE_BYTES, MAX_HOME_SEED_TOTAL_BYTES, MAX_HOME_SEED_PATH_LENGTH, RULES_DIR_NAME, OUTPUT_STYLES_DIR_NAME, SETTINGS_FILE_NAME, normalizePathKey, getMemoryFileKind, isAllowedMemoryPath, parseMemoryDestination, MAX_ETAG_LENGTH, createHomeSeedAnnouncer };
