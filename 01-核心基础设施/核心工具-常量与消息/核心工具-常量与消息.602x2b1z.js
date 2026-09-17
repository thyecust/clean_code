// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import {
  COWRITTEN_ARTIFACT_HTML_TAG,
  ARTIFACT_FILE_CONTENT_TAG,
  ARTIFACT_TYPE_INSTRUCTIONS_TAG,
  ARTIFACT_ORIGIN_NOTES_TAG,
  COMMAND_NAME_TAG,
  COMMAND_MESSAGE_TAG,
  COMMAND_ARGS_TAG,
  LOCAL_COMMAND_TAGS,
  TICK_TAG,
  HARNESS_ENVELOPE_TAGS,
} from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { getOauthConfig } from "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { escapeRegExp, truncateToCodePoints, truncateToCodeUnits, toWellFormed } from "../核心工具-字符串与文本/string-utils.js";
import { env as a, antEnv } from "../设置-配置/chunk-zqr5ctyf.js";
import { getComplianceTaints } from "../核心工具-未归类/compliance-taints-store.js";
import { BRIEF_ENFORCE_SENTINEL } from "../核心工具-未归类/chunk-q599wyee.js";
import { DASH_CHARS_CLASS, buildConfusableTagScrubPattern, buildChannelSourceTagPattern, buildModelLayerTagPattern, LEAD_HEX_ID_SYMBOL, LEAD_SPAN_SYMBOL, buildBracketedLeadScrubPattern } from "../核心工具-字符串与文本/chunk-3kbr3k57.js";
import { isLoopbackHostname } from "../核心工具-路径与平台/is-loopback-hostname.js";
import { countMatching, dedupe } from "../核心工具-数组与集合/chunk-d16fhdtx.js";
var DEFAULT_MAX_RESULT_SIZE_CHARS = 50000,
  OUTPUT_MAX_CHARS_FLOOR = 4000,
  OUTPUT_MAX_CHARS_CEILING = 128000,
  MAX_RESULT_SIZE_CHARS_CEILING = 500000;
var BYTES_PER_TOKEN = 4,
  DEFAULT_TOOL_RESULT_PERSIST_THRESHOLD = 400000,
  DEFAULT_AGGREGATE_TOOL_RESULT_BUDGET = 200000,
  TOOL_USE_SUMMARY_MAX_CHARS = 50,
  DEFAULT_HOOK_OUTPUT_PERSIST_THRESHOLD = 1e4,
  DEFAULT_MIDDLE_TRUNCATE_MAX_CHARS = 1e4,
  MAX_TASK_NOTIFICATION_CHARS = 1e5;
function getArtifactEnvironment() {
  return getOauthConfig().CLAUDE_AI_ORIGIN.includes("staging") ? "staging" : "prod";
}
function getClaudeAiOrigin() {
  return Q() ?? getOauthConfig().CLAUDE_AI_ORIGIN;
}
function Q() {
  return;
}
function b(t) {
  let e;
  try {
    e = new URL(t);
  } catch {
    return;
  }
  let r = isLoopbackHostname(e.hostname),
    o;
  switch (e.protocol) {
    case "https:":
    case "wss:":
      o = "https:";
      break;
    case "http:":
    case "ws:":
      if (!r) return;
      o = "http:";
      break;
    default:
      return;
  }
  if (
    e.username !== "" ||
    e.password !== "" ||
    e.pathname !== "/" ||
    e.search !== "" ||
    e.hash !== ""
  )
    return;
  return `${o}//${e.host}`;
}
function Fir() {
  return !1;
}
function getBaseApiUrl() {
  return tt() ?? getOauthConfig().BASE_API_URL;
}
function tt() {
  return;
}
function Uir() {
  return !1;
}
function getArtifactViewerOriginOverride() {
  return;
}
function formatComplianceTaintLabel(t) {
  switch (t) {
    case "hipaa":
      return "HIPAA";
    case "zdr":
      return "ZDR (Zero Data Retention)";
    default:
      return (
        logForDebugging(`Unknown compliance_taint '${t}' from policyLimits`, {
          level: "warn",
        }),
        x
      );
  }
}
var x = "Organization policy",
  L = new Set(["hipaa", "zdr"]);
function isKnownComplianceTaint(t) {
  return L.has(t);
}
function normalizeComplianceTaints(t) {
  let e = dedupe(t),
    r = e.filter((o) => L.has(o));
  if (r.length === e.length) return r;
  return (
    logForDebugging(
      `Unknown compliance_taint values from policyLimits (${e.length - r.length})`,
      { level: "warn" },
    ),
    [...r, x]
  );
}
var et = new Set(["hipaa"]);
function getNameableComplianceTaints(t) {
  return dedupe(t).filter((e) => et.has(e));
}
var POLICY_LIMITS_API_PATH = "/api/claude_code/policy_limits";
function formatPolicyDeniedMessage(t, e, r, o) {
  let i = getNameableComplianceTaints(r);
  if (i.length > 0)
    return `${t} ${e === "are" ? "aren't" : "isn't"} available for your organization due to its compliance policy (${i.map(formatComplianceTaintLabel).join(", ")}).`;
  if (o !== void 0) return o;
  return `${t} ${e} disabled by your organization's policy. Contact your organization admin to enable ${e === "are" ? "them" : "it"}.`;
}
function policyCacheMissMessage(t) {
  return `Couldn't verify your organization's policy for ${t.toLowerCase()}. Check your network connection and try again.`;
}
function policyRouteMissingMessage(t) {
  return `Couldn't load your organization's policy, which governs ${t.toLowerCase()}. The request for ${POLICY_LIMITS_API_PATH} got a 404, which usually means a proxy or gateway between you and the API isn't forwarding that path. Ask your network admin to allow it; \`claude doctor\` (or /status in a session) shows which host was asked.`;
}
function policyCacheMissRestartMessage(t) {
  return `Couldn't verify your organization's policy for ${t.toLowerCase()}. Check your network connection, then restart Claude Code and try again.`;
}
function staleCommandReason(t) {
  return `/${t} is available for your organization but wasn't when this session started. Restart Claude Code to use it.`;
}
function formatPolicyBlockedReason(t, e) {
  let r = getNameableComplianceTaints(t);
  if (r.length > 0)
    return `not available for your organization due to its compliance policy (${r.map(formatComplianceTaintLabel).join(", ")})`;
  return e ?? "disabled by your organization's policy";
}
function policyCacheMissReason() {
  return "couldn't verify your organization's policy \u2014 check your network connection and try again";
}
function policyRouteMissingReason() {
  return `your organization's policy couldn't be loaded: the request for ${POLICY_LIMITS_API_PATH} got a 404, which usually means a proxy or gateway isn't forwarding that path. Ask your network admin to allow it`;
}
var DECISION_SURFACE_BRACKET_RANGES =
  "\u02F9-\u02FC\u230C-\u230F\u231C-\u231F\u239B-\u23CC\u23DC-\u23E1\u2E00-\u2E0D\u2E1C\u2E1D\u2500-\u257F";
var INTERRUPTED_BY_USER_MARKER = "[Request interrupted by user]",
  INTERRUPTED_FOR_TOOL_USE_MARKER = "[Request interrupted by user for tool use]",
  TOOL_CALL_NOT_COMPLETED_MARKER =
    "[Tool call did not complete: the turn was ended to deliver the message that follows. Nothing refused it; re-run it if still needed.]",
  USER_REFUSED_ACTION_MARKER =
    "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.",
  TOOL_CALL_SKIPPED_MARKER =
    "[Tool call skipped: the turn ended to deliver the message that follows before this call ran. Nothing refused it; re-run it if still needed.]",
  USER_REJECTED_TOOL_USE_MARKER = "User rejected tool use",
  API_REQUEST_ABORTED_MESSAGE = "API Error: Request was aborted.",
  OPERATION_STOPPED_BY_HOOK_MESSAGE = "Operation stopped by hook",
  INTERRUPT_MESSAGE_PREFIXES = [INTERRUPTED_BY_USER_MARKER, INTERRUPTED_FOR_TOOL_USE_MARKER, TOOL_CALL_NOT_COMPLETED_MARKER, USER_REFUSED_ACTION_MARKER, TOOL_CALL_SKIPPED_MARKER];
function isUserRefusalOrSkipMessage(t) {
  return t.startsWith(USER_REFUSED_ACTION_MARKER) || t.startsWith(TOOL_CALL_SKIPPED_MARKER);
}
var AUTO_MEMORY_REMINDER_SUFFIX = `

Note: The user's next message may contain a correction or preference. Pay close attention \u2014 if they explain what went wrong or how they'd prefer you to work, consider saving that to memory for future sessions.`;
function isInterruptLikeUserMessage(t) {
  if (t.type !== "user") return !1;
  let e = t.message?.content;
  if (typeof e === "string") return INTERRUPT_MESSAGE_PREFIXES.some((r) => e.startsWith(r));
  if (!Array.isArray(e)) return !1;
  return (
    e.length > 0 &&
    e.every((r) => {
      let o =
        r.type === "text"
          ? r.text
          : r.type === "tool_result" && r.is_error === !0
            ? r.content
            : void 0;
      return typeof o === "string" && INTERRUPT_MESSAGE_PREFIXES.some((i) => o.startsWith(i));
    })
  );
}
function isShutdownInterruptedToolResultMessage(t) {
  if (t.type !== "user" || t.interruptedByShutdown !== !0) return !1;
  let e = t.message?.content;
  return Array.isArray(e) && e.some((r) => r.type === "tool_result");
}
var HOOK_FEEDBACK_SUFFIX = ` hook feedback:
`,
  HOOK_FEEDBACK_EVENT_NAMES = ["Stop", "TeammateIdle", "TaskCreated", "TaskCompleted"];
function formatHookFeedbackMessage(t, e) {
  return `${t}${HOOK_FEEDBACK_SUFFIX}${e}`;
}
var STRUCTURED_OUTPUT_ENFORCE_TAG = "[structured-output-enforce]",
  Rkn = "",
  INVALID_TOOL_CALL_RETRY_MESSAGE =
    "The previous response failed to produce a valid tool call. Please retry the tool call now.",
  MALFORMED_TOOL_CALL_RETRY_MESSAGE = "Your tool call was malformed and could not be parsed. Please retry.",
  NO_VISIBLE_OUTPUT_MESSAGE =
    "[Your previous response had no visible output. Please continue and produce a user-visible response.]",
  PERMISSION_DENIED_RETRY_MESSAGE = "The PermissionDenied hook indicated you may retry this tool call.",
  GOAL_CHECK_IN_PREFIX = "Goal check-in: \xAB",
  nt = [STRUCTURED_OUTPUT_ENFORCE_TAG, Rkn, BRIEF_ENFORCE_SENTINEL].filter((t) => t.length > 0),
  rt = [INVALID_TOOL_CALL_RETRY_MESSAGE, MALFORMED_TOOL_CALL_RETRY_MESSAGE, NO_VISIBLE_OUTPUT_MESSAGE, PERMISSION_DENIED_RETRY_MESSAGE];
function isSyntheticMetaUserMessage(t) {
  if (t.type !== "user" || t.isMeta !== !0) return !1;
  let e = t.message?.content,
    r = Array.isArray(e) ? e[0] : void 0,
    o =
      typeof e === "string"
        ? e
        : r?.type === "text" && typeof r.text === "string"
          ? r.text
          : void 0;
  if (typeof o !== "string") return !1;
  if (nt.some((i) => o.startsWith(i))) return !0;
  if (rt.includes(o)) return !0;
  return HOOK_FEEDBACK_EVENT_NAMES.some((i) => o.startsWith(`${i}${HOOK_FEEDBACK_SUFFIX}`));
}
var E = 58n,
  ot = (1n << 128n) - 1n,
  y = 22,
  BASE58_SLUG_PATTERN = "[1-9A-HJ-NP-Za-km-z]{22}",
  it = new RegExp("^[1-9A-HJ-NP-Za-km-z]{22}$"),
  st = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function A(t) {
  if (!st.test(t)) return null;
  let e = BigInt(`0x${t.replaceAll("-", "")}`),
    r = "";
  for (let o = 0; o < 22; o++)
    ((r =
      "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[
        Number(e % E)
      ] + r),
      (e /= E));
  return r;
}
function slugToUuid(t) {
  if (!it.test(t)) return null;
  let e = 0n;
  for (let o of t)
    e =
      e * E +
      BigInt(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(o),
      );
  if (e > ot) return null;
  let r = e.toString(16).padStart(32, "0");
  return `${r.slice(0, 8)}-${r.slice(8, 12)}-${r.slice(12, 16)}-${r.slice(16, 20)}-${r.slice(20)}`;
}
var T = null;
function setFeatureValueGetter(t) {
  let e = T;
  return ((T = t), e);
}
function h() {
  return T?.("tengu_cobalt_plinth_lovage", !1) === !0;
}
var ARTIFACT_TOOL_NAME = "Artifact",
  ARTIFACT_COMMENTS_TOOL_NAME = "ArtifactComments",
  ARTIFACT_DATA_TOOL_NAME = "ArtifactData",
  ARTIFACT_CHECK_TOOL_NAME = "ArtifactCheck",
  ARTIFACT_FAMILY_TOOL_NAMES = [ARTIFACT_TOOL_NAME, ARTIFACT_COMMENTS_TOOL_NAME, ARTIFACT_DATA_TOOL_NAME, ARTIFACT_CHECK_TOOL_NAME],
  ASSET_ID_RE = /^[0-9a-f]{32}$/,
  STALE_GUARD_CONTENT_HEADER_SUFFIX = " \u2014 live version; raw HTML follows]",
  STALE_GUARD_REJECTION_PREFIX =
    "You hadn't viewed the live version of this artifact, so the publish was refused.",
  STALE_GUARD_REJECTION_PREFIX_LEGACY =
    "This session hadn't viewed the live version of this artifact, so the publish was refused.",
  STALE_GUARD_CONTENT_HEADER = (t) => `[Artifact ${t}${STALE_GUARD_CONTENT_HEADER_SUFFIX}`,
  STALE_GUARD_CONTENT_HEADER_LINE_RE = new RegExp(`\\n\\[Artifact [\\w-]{1,64}${escapeRegExp(STALE_GUARD_CONTENT_HEADER_SUFFIX)}\\n`),
  CONFLICT_REJECTION_PREFIX = "Publish refused \u2014 nothing was merged or published:",
  PR_REVIEW_SECURITY_WALL = {
    republishForceRefused: "pr_review_republish_force_refused",
    decisionsProvenance: "pr_review_decisions_provenance",
    republishAnchor: "pr_review_republish_anchor",
    republishStamp: "pr_review_republish_stamp",
    overwriteRefused: "pr_review_overwrite_refused",
  };
function artifactLinkShapeHint() {
  return h() ? "\u2026/artifact/<id>" : "\u2026/code/artifact/<uuid>";
}
function notAnArtifactUrlMessage(t) {
  return `not an artifact URL: ${t} \u2014 pass the artifact's ${artifactLinkShapeHint()} link (action: "list" shows them).`;
}
var ARTIFACT_LOGIN_REQUIRED_MESSAGE =
    'Artifacts need a claude.ai login. Run /login and select "Claude account with subscription", then retry \u2014 the "Anthropic Console account" option does not provide claude.ai credentials.',
  ARTIFACT_LOGIN_PROXIED_MESSAGE =
    'Artifacts need a claude.ai login, and this remote session authenticates through the machine that launched it, which is not signed in to claude.ai. Sign in to claude.ai on that machine (/login, "Claude account with subscription"), then reconnect this session.',
  ARTIFACT_LOGIN_HOST_MANAGED_MESSAGE =
    "Artifacts need a claude.ai login, but this session authenticates with a credential injected by its host environment, which takes precedence and cannot be changed here. Start a session that is signed in to claude.ai to publish or read artifacts.";
function artifactLoginEnvQuadMessage(t) {
  return `Artifacts need a claude.ai login. This session's API access is set up by ${t ? "your organization's managed settings" : "the ANTHROPIC_FEDERATION_RULE_ID / ANTHROPIC_ORGANIZATION_ID environment variables"}, which stays active for everything else \u2014 artifacts also use a claude.ai account. Run /login and select "Claude account with subscription", then retry.`;
}
function artifactPolicyBlockedMessage(t) {
  switch (t) {
    case "org_policy_unverifiable":
      return "Artifacts can't check the signed-in Claude account's organization settings from this session: the account belongs to a Claude organization (Team or Enterprise), and this session's API access uses a different credential that can't read those settings. Run /login with a personal Claude account (Pro or Max), then retry.";
    case "plan_unreadable":
      return "The signed-in Claude account's plan couldn't be read from this session. Run /login again to refresh the signed-in account, then retry.";
    case "org_denied":
      return formatPolicyDeniedMessage(
        "Artifacts",
        "are",
        getComplianceTaints(),
        "Artifacts are disabled by your organization's policy. Contact your organization admin to enable them, then retry.",
      );
    case "cache_miss":
      return policyCacheMissMessage("Artifacts");
    case "policy_route_missing":
      return policyRouteMissingMessage("Artifacts");
    case "policy_unavailable":
      return "Artifacts can't check the organization settings that apply to this session: the session's configuration (such as a custom ANTHROPIC_BASE_URL) prevents the policy lookup. Remove that configuration, then retry.";
  }
}
function artifactLoginBlockedByCredentialMessage(t, e) {
  return `Artifacts need a claude.ai login, and this session is authenticating with ${t}, which takes precedence over a claude.ai account. ${e} Then run /login and select "Claude account with subscription".`;
}
class ArtifactInputError extends Error {
  reasonCode;
  maxErrorChars;
  constructor(t, e, r) {
    super(t);
    ((this.name = "ArtifactInputError"),
      (this.reasonCode = e),
      (this.maxErrorChars = r?.maxErrorChars));
  }
}
var g = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
  I = "/(?:artifact|code/(?:artifact|frame))/",
  C = `${g}|${BASE58_SLUG_PATTERN}`,
  O = `${I}(?:([A-Za-z0-9_-]*)-)?(${C})(?:[/?#]|$)`,
  w = `${I}(?:[A-Za-z0-9_-]*-)?(?:${C})/([^?#]+)`;
function S(t, e = !1) {
  if (t === void 0) return null;
  if (t.length !== y) return t;
  return e ? null : slugToUuid(t);
}
var ARTIFACT_SLUG_RE = new RegExp(`^${g}$`),
  ARTIFACT_VERSION_SAFE_RE = /^[\w-]{1,64}$/,
  ARTIFACT_MAX_RESULT_SIZE_CHARS = 16000,
  ARTIFACT_PAGE_INLINE_RESULT_CAP = DEFAULT_MAX_RESULT_SIZE_CHARS,
  ARTIFACT_DB_READ_MAX_RESULT_SIZE_CHARS = 300000,
  ARTIFACT_STUB_URL_PREFIX = "eval-stub://artifact/";
function getArtifactPublishStubDir() {
  let t = antEnv.CLAUDE_CODE_EVAL_ARTIFACT_STUB_DIR;
  return typeof t === "string" && t.length > 0 ? t : null;
}
function parseArtifactUrl(t) {
  return M(t, !1);
}
function M(t, e) {
  let r = t.match(new RegExp(`^https://(?:[a-z0-9-]+\\.)?claude\\.ai${O}`)),
    o = S(r?.[2], e);
  if (o !== null) return R(t, { slug: o, env: "prod" }, r?.[1]);
  let i = t.match(
    new RegExp(
      `^https://(${g})\\.frame\\.(staging\\.)?claudeusercontent\\.com(?:[/?#]|$)`,
    ),
  );
  if (i?.[1]) return R(t, { slug: i[1], env: i[2] ? "staging" : "prod" });
  let u = getArtifactViewerOriginOverride();
  if (u) {
    let s = t.match(new RegExp(`^https?://([^/?#]+)${O}`)),
      l = S(s?.[3], e);
    if (s !== null && l !== null && s[1] === new URL(u).host)
      return R(t, { slug: l, env: getArtifactEnvironment() }, s[2]);
  }
  return null;
}
var ut = /^[A-Za-z0-9_-]{1,64}$/,
  at = /^[a-z0-9][a-z0-9-]{0,59}$/;
function R(t, e, r) {
  let o = r !== void 0 && at.test(r) ? { ...e, vanity: r } : e,
    i = t.indexOf("#"),
    u = i === -1 ? t : t.slice(0, i),
    s = u.indexOf("?");
  if (s === -1) return o;
  let c = u
    .slice(s + 1)
    .split("&")
    .find((f) => f.startsWith("sk="))
    ?.slice(3);
  return c !== void 0 && ut.test(c) ? { ...o, sk: c } : o;
}
function artifactUrlSubPath(t) {
  let e = getArtifactViewerOriginOverride(),
    r =
      t.match(new RegExp(`^https://(?:[a-z0-9-]+\\.)?claude\\.ai${w}`))?.[1] ??
      void 0 ??
      (e
        ? t.match(new RegExp(`^https?://${escapeRegExp(new URL(e).host)}${w}`))?.[1]
        : void 0);
  return r === void 0 || r === "" ? void 0 : r;
}
function canonicalizeArtifactUrlInput(t) {
  try {
    let e = new URL(t);
    if (e.protocol === "http:") e.protocol = "https:";
    if (e.hostname.endsWith(".")) e.hostname = e.hostname.slice(0, -1);
    return e.href;
  } catch {
    return t;
  }
}
function parseArtifactUrlInput(t) {
  return typeof t === "string" ? parseArtifactUrl(canonicalizeArtifactUrlInput(t)) : null;
}
function parseArtifactUrlAnyCase(t) {
  let e = canonicalizeArtifactUrlInput(t);
  return parseArtifactUrl(e) ?? M(e.toLowerCase(), !0);
}
var ct = new RegExp(`^${escapeRegExp(ARTIFACT_STUB_URL_PREFIX)}(${g})(?:[/?#]|$)`);
function parseStubArtifactUrl(t) {
  let e = t.match(ct);
  return e?.[1] ? { slug: e[1] } : null;
}
var ARTIFACT_DELETED_NOTE_TAG = "artifact-deleted",
  ARTIFACT_DELETED_NOTE_RE = new RegExp(`^<${ARTIFACT_DELETED_NOTE_TAG} url="([^"]+)"/>`);
function uuidSlugFromUrl(t) {
  let e = parseArtifactUrl(t)?.slug;
  if (e !== void 0) return e;
  return getArtifactPublishStubDir() !== null ? (parseStubArtifactUrl(t)?.slug ?? null) : null;
}
function artifactViewerPath(t) {
  if (h()) {
    let e = A(t);
    if (e !== null) return `/artifact/${e}`;
  }
  return `/code/artifact/${t}`;
}
function H(t) {
  let e = getArtifactViewerOriginOverride();
  if (e && t === getArtifactEnvironment()) return e;
  return "https://claude.ai";
}
function artifactViewerUrlFor(t) {
  return `${H(t.env)}${artifactViewerPath(t.slug)}`;
}
function artifactViewerUrlSpellings(t) {
  let e = H(t.env),
    r = A(t.slug);
  return [
    `${e}/code/artifact/${t.slug}`,
    ...(r !== null ? [`${e}/artifact/${r}`] : []),
  ];
}
function artifactContentOriginUrlFor(t) {
  return `https://${t.slug}.frame.${t.env === "staging" ? "staging." : ""}claudeusercontent.com`;
}
function canonicalArtifactTargetFor(t, e) {
  let r = typeof t === "string" ? parseArtifactUrl(t) : null;
  return r ? artifactViewerUrlFor(r) : e;
}
function isCanonicalArtifactViewerUrl(t) {
  let r = t.match(new RegExp(`^https://claude\\.ai${I}(${C})/?$`));
  return S(r?.[1]) !== null;
}
var TITLE_SCAN_CHARS = 8192,
  TITLE_SCAN_BYTES = TITLE_SCAN_CHARS * 4,
  TITLE_MAX_RUNES = 280,
  ft = /&(#x[0-9a-f]+|#\d+|[a-z]+);/gi,
  _ = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: "\xA0",
    ndash: "\u2013",
    mdash: "\u2014",
    minus: "\u2212",
    hellip: "\u2026",
    lsquo: "\u2018",
    rsquo: "\u2019",
    sbquo: "\u201A",
    ldquo: "\u201C",
    rdquo: "\u201D",
    bdquo: "\u201E",
    lsaquo: "\u2039",
    rsaquo: "\u203A",
    laquo: "\xAB",
    raquo: "\xBB",
    middot: "\xB7",
    bull: "\u2022",
    dagger: "\u2020",
    Dagger: "\u2021",
    prime: "\u2032",
    Prime: "\u2033",
    trade: "\u2122",
    copy: "\xA9",
    reg: "\xAE",
    deg: "\xB0",
    times: "\xD7",
  };
function K(t) {
  return t.replace(/<!--[\s\S]*?(?:-->|$)/g, "");
}
function m(t) {
  let e = K(t.slice(0, TITLE_SCAN_CHARS)),
    r = e.search(/<svg/i);
  return r === -1 ? e : e.slice(0, r);
}
function decodeHtmlEntities(t) {
  return t.replace(ft, (e, r) => {
    if (r.startsWith("#")) {
      let i =
        r[1] === "x" || r[1] === "X"
          ? parseInt(r.slice(2), 16)
          : parseInt(r.slice(1), 10);
      return i <= 1114111 && (i < 55296 || i > 57343)
        ? String.fromCodePoint(i)
        : e;
    }
    if (Object.hasOwn(_, r)) return _[r] ?? e;
    let o = r.toLowerCase();
    if (Object.hasOwn(_, o)) return _[o] ?? e;
    return e;
  });
}
var lt = /<link\b[^>]*>/gi,
  pt = 2048,
  z = /<link\b[^>]{0,2048}\bartifact-thumbnail\b/gi,
  dt = new RegExp(z.source, "i"),
  _t = /([^\s"'<>\/=]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g,
  X = "artifact-thumbnail",
  gt = /^\(\s*prefers-color-scheme\s*:\s*dark\s*\)$/i,
  Et = /^(?:all|\(\s*prefers-color-scheme\s*:\s*light\s*\))$/i,
  N = /<(script|style)\b[^>]{0,2048}>[\s\S]*?(?:<\/\1\s*>|$)/gi;
function At(t) {
  let e = [];
  for (let r of t.match(lt) ?? []) {
    if (r.length > pt) {
      if (dt.test(r)) e.push({ dark: !1, oversize: !0 });
      continue;
    }
    let o, i, u;
    for (let f of r.matchAll(_t)) {
      let p = f[1].toLowerCase(),
        d = f[2] ?? f[3] ?? f[4] ?? "";
      if (p === "rel") o ??= d;
      else if (p === "href") i ??= d;
      else if (p === "media") u ??= d;
    }
    if (!(o ?? "").toLowerCase().split(/\s+/).includes(X)) continue;
    let s = decodeHtmlEntities(u ?? "").trim(),
      l = gt.test(s),
      c = s === "" || Et.test(s);
    e.push({
      ...(i !== void 0 && { href: decodeHtmlEntities(i).trim() }),
      dark: l,
      ...(!l && !c && { badMedia: s }),
    });
  }
  return e;
}
function extractThumbnailLinks(t) {
  let e = { pastWindow: !1 },
    r = m(t).replace(N, "");
  for (let { href: i, dark: u, badMedia: s, oversize: l } of At(r))
    if (l) e.oversizeTag = !0;
    else if (i === void 0) e.missingHref = !0;
    else if (s !== void 0) e.badMedia ??= s;
    else if (u) e.dark ??= i;
    else e.light ??= i;
  let o = (i) => i.match(z)?.length ?? 0;
  return ((e.pastWindow = t.includes(X) && o(K(t).replace(N, "")) > o(r)), e);
}
var FAVICON_MARKUP_RE = /[<>&"']/,
  Tt = [
    ["'", "'"],
    ['"', '"'],
    ["\u2018", "\u2019"],
    ["\u201C", "\u201D"],
    ["`", "`"],
  ];
function sanitizeFavicon(t) {
  let e = t;
  for (let r = 0; r < 4; r++) {
    let o = e.trim();
    for (let [i, u] of Tt)
      if (
        o.length > i.length + u.length - 1 &&
        o.startsWith(i) &&
        o.endsWith(u)
      ) {
        o = o.slice(i.length, o.length - u.length);
        break;
      }
    if (((o = decodeHtmlEntities(o)), o === e)) break;
    e = o;
  }
  return e;
}
var U = String.raw`\p{Extended_Pictographic}[\ufe0e\ufe0f]?\p{Emoji_Modifier}?`,
  ht = String.raw`\u{1f3f4}\u{e0067}\u{e0062}(?:\u{e0065}\u{e006e}\u{e0067}|\u{e0073}\u{e0063}\u{e0074}|\u{e0077}\u{e006c}\u{e0073})\u{e007f}`,
  Rt = String.raw`(?:[#*0-9]\ufe0f?\u20e3|\p{Regional_Indicator}{2}|${ht}|${U}(?:\u200d${U}){0,3})`,
  St = new RegExp(`^${Rt}{1,4}$`, "u"),
  It = /\p{Regional_Indicator}{2}.*\p{Regional_Indicator}/u;
function vetForeignFavicon(t) {
  if (typeof t !== "string" || t.length > 32) return;
  let e = sanitizeFavicon(t);
  return St.test(e) && !It.test(e) ? e : void 0;
}
function faviconClause(t) {
  let e = vetForeignFavicon(t);
  return e === void 0 ? "" : ` \u2014 favicon ${e}`;
}
function extractHtmlTitle(t) {
  let r = m(t).match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  if (r === void 0) return null;
  return sanitizeArtifactTitle(decodeHtmlEntities(r));
}
function sanitizeArtifactTitle(t) {
  let r = Array.from(t, (i) => {
    let u = i.codePointAt(0) ?? 0;
    return u <= 31 || (u >= 127 && u <= 159) ? " " : i;
  })
    .join("")
    .replace(/\s+/g, " ")
    .trim();
  if (r === "") return null;
  let o = Array.from(r);
  return o.length > TITLE_MAX_RUNES ? o.slice(0, TITLE_MAX_RUNES).join("") : r;
}
var QUOTE_HOMOGLYPHS =
    /[\u201C\u201D\u201E\u201F\u2E42\uFF02\u02F5\u02F6\u2033\u2034\u2036\u2037\u02BA\u02DD\u02EE\u05F4\u3003\u301D-\u301F\u275D\u275E\u2760\u{1F676}-\u{1F678}]/gu,
  SINGLE_QUOTE_RUNS =
    /['\u0060\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02BF\u02C8\u02CA\u02CB\u0374\u0384\u055A\u05F3\u07F4\u07F5\u1FBD\u1FBF\u1FEF\u1FFD\u1FFE\u2018\u2019\u201A\u201B\u2032\u2035\u275B\u275C\u275F\uA78B\uA78C\uFF07\uFF40]{2,}/g,
  INVISIBLE_BLANKS =
    /[\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]/gu;
function isDecisionSurfaceControl(t) {
  return (
    t <= 31 ||
    (t >= 127 && t <= 159) ||
    t === 173 ||
    t === 1564 ||
    (t >= 8203 && t <= 8207) ||
    t === 8232 ||
    t === 8233 ||
    (t >= 8234 && t <= 8238) ||
    (t >= 8288 && t <= 8297) ||
    (t >= 65024 && t <= 65039) ||
    t === 65279 ||
    (t >= 65529 && t <= 65531) ||
    (t >= 917504 && t <= 917999)
  );
}
var INVISIBLE_BLANK_CODE_POINT =
  /^[\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]$/u;
function Ct(t) {
  return t === 8204 || t === 8205;
}
function V(t) {
  return (t >= 65024 && t <= 65039) || (t >= 917760 && t <= 917999);
}
function isJoinerOrEmojiSelector(t) {
  return Ct(t) || V(t);
}
function isResultLineControl(t) {
  return !isJoinerOrEmojiSelector(t) && (isDecisionSurfaceControl(t) || (t > 127 && INVISIBLE_BLANK_CODE_POINT.test(String.fromCodePoint(t))));
}
var mt = /^[\p{Extended_Pictographic}\p{Emoji_Modifier}]$/u,
  bt = 8,
  F = /^[#*0-9]$/,
  xt = /^\p{Script=Han}$/u,
  Lt =
    /^[\p{Script=Arabic}\p{Script=Syriac}\p{Script=Mongolian}\p{Script=Devanagari}\p{Script=Bengali}\p{Script=Gurmukhi}\p{Script=Gujarati}\p{Script=Oriya}\p{Script=Tamil}\p{Script=Telugu}\p{Script=Kannada}\p{Script=Malayalam}\p{Script=Sinhala}\p{Script=Myanmar}\p{Script=Tibetan}\p{Script=Khmer}]$/u,
  yt = /^[\n\r\t\v\f\u0085\u2028\u2029]$/;
function rideStateAfter(t) {
  if ((t.codePointAt(0) ?? 0) < 128) return F.test(t) ? "keycap" : "plain";
  return mt.test(t)
    ? "pictograph"
    : F.test(t)
      ? "keycap"
      : xt.test(t)
        ? "han"
        : Lt.test(t)
          ? "joining"
          : "plain";
}
function selectorOrJoinerRides(t, e) {
  if (V(t)) {
    let o =
      t <= 65039
        ? e === "pictograph" || e === "han" || (e === "keycap" && t === 65039)
        : e === "han";
    return { rides: o, after: o && e === "pictograph" ? "selector" : "none" };
  }
  return {
    rides:
      t === 8205
        ? e === "pictograph" || e === "selector" || e === "joining"
        : e === "joining",
    after: "none",
  };
}
function sweepResultLine(t, e, { joiners: r } = { joiners: !0 }) {
  let o = toWellFormed(t),
    i = [],
    u = 0,
    s = !1,
    l = 0,
    c = "none";
  for (let f of o) {
    if (++u > 16 * e || i.length >= e + 1) {
      s = !0;
      break;
    }
    let p = f.codePointAt(0) ?? 0;
    if (!r && isJoinerOrEmojiSelector(p)) c = "none";
    else if (isJoinerOrEmojiSelector(p)) {
      let d = selectorOrJoinerRides(p, c);
      if (d.rides && l < bt) (i.push(f), l++, (c = d.after));
      else c = "none";
    } else if (yt.test(f)) {
      if (i.length > 0 && i.at(-1) !== " ") i.push(" ");
      c = "none";
    } else if (!isResultLineControl(p)) (i.push(f), (c = rideStateAfter(f)));
    else c = "none";
  }
  if (i.length > e) s = !0;
  return { kept: scrubArtifactEnvelopeTags(i.slice(0, s ? e - 1 : e).join("")), cut: s };
}
function revealPageInvisibles(t) {
  let e = "",
    r = "none";
  for (let o of toWellFormed(t)) {
    let i = Ot(o, r);
    ((e += i.shown), (r = i.after));
  }
  return e;
}
function Ot(t, e) {
  let r = t.codePointAt(0) ?? 0;
  if (isJoinerOrEmojiSelector(r)) {
    let o = selectorOrJoinerRides(r, e);
    return { shown: o.rides ? t : "\uFFFD", after: o.after };
  }
  if (r === 10 || r === 13 || r === 9) return { shown: t, after: "none" };
  if (isResultLineControl(r)) return { shown: "\uFFFD", after: "none" };
  return { shown: t, after: rideStateAfter(t) };
}
function sweepResultLineField(t, e) {
  let { kept: r, cut: o } = sweepResultLine(t, e);
  return o ? `${r}\u2026` : r;
}
function sweepResultLineText(t, e) {
  let { kept: r, cut: o } = sweepResultLine(t, e, { joiners: !1 });
  return o ? `${r}\u2026` : r;
}
var MAX_REFUSAL_CHARS = 500,
  MAX_SIZE_CLAUSE_CHARS = 600;
function isPublishShapedArtifactAction(t) {
  let e = t?.action;
  return (
    e === void 0 ||
    e === "publish" ||
    e === "live-edit" ||
    e === "sync" ||
    e === "version"
  );
}
var DEFAULT_LIST_LIMIT = 25,
  LIST_LIMIT_MAX = 50;
function listScopeFrom(t) {
  let e = t.scope;
  return e === "shared" || e === "all" ? e : "mine";
}
var D = [COWRITTEN_ARTIFACT_HTML_TAG, ARTIFACT_FILE_CONTENT_TAG, ARTIFACT_ORIGIN_NOTES_TAG, ARTIFACT_TYPE_INSTRUCTIONS_TAG].map((t) => t.replaceAll("-", "_"));
class W {
  #t;
  #e;
  #n;
  get lead() {
    return (
      (this.#t ??= buildBracketedLeadScrubPattern([
        ["artifact", LEAD_HEX_ID_SYMBOL],
        ["artifact", LEAD_SPAN_SYMBOL, "owned", "by", "you"],
        ["artifact", LEAD_SPAN_SYMBOL, "raw", "html", "follows"],
        ["artifact", LEAD_SPAN_SYMBOL, "summary", "below"],
        ["artifact", LEAD_SPAN_SYMBOL, "shared", "with", "you"],
        ["artifact", LEAD_SPAN_SYMBOL, "published", "from", "your"],
        ["artifact", LEAD_SPAN_SYMBOL, "live", "version"],
        ["artifact", LEAD_SPAN_SYMBOL, "published", "by", "a", "writer"],
        ["this", "version", "has", LEAD_SPAN_SYMBOL, "published", "files"],
        ["origin", "of", "this", "version"],
        ["created", "from", "the", "artifact", "type"],
        ["end", "of", "live", "content"],
        ["this", "artifact", LEAD_SPAN_SYMBOL, "ships", "an", "instructions", "file"],
        ["could", "not", "check", "whether", "this", "artifact"],
      ])),
      this.#t
    );
  }
  get page() {
    return ((this.#e ??= [buildConfusableTagScrubPattern(D), this.lead]), this.#e);
  }
  get envelopes() {
    return (
      (this.#n ??= [
        buildConfusableTagScrubPattern(
          dedupe([
            ...D,
            "system-reminder",
            "system_reminder",
            "function_results",
            "transcript",
            ...HARNESS_ENVELOPE_TAGS,
            ...LOCAL_COMMAND_TAGS,
            TICK_TAG,
            COMMAND_NAME_TAG,
            COMMAND_MESSAGE_TAG,
            COMMAND_ARGS_TAG,
          ]),
        ),
        buildChannelSourceTagPattern(),
        buildModelLayerTagPattern(),
        this.lead,
      ]),
      this.#n
    );
  }
}
var artifactTagPatterns = new j(() => new W());
function q() {
  return artifactTagPatterns.of(B().host);
}
function artifactLeadScrubPattern() {
  return q().lead;
}
var Z = [INTERRUPTED_FOR_TOOL_USE_MARKER, TOOL_CALL_NOT_COMPLETED_MARKER];
function containsInterruptLiteral(t) {
  return Z.some((e) => t.includes(e));
}
var wt = new RegExp(
  Z.map((t) => `${escapeRegExp(t.slice(0, 1))}(?=${escapeRegExp(t.slice(1))})`).join("|"),
  "g",
);
function markInterruptLiterals(t) {
  return t.replace(wt, (e) => `${e}\\`);
}
function scrubArtifactEnvelopeTags(t, e = "all") {
  let r = q(),
    o = t;
  for (let i of e === "page" ? r.page : r.envelopes)
    o = o.replace(i, (u) => `${u}\\`);
  return e === "page" ? o : markInterruptLiterals(o);
}
function scrubbedHead(t, e, r = "all") {
  let o = scrubArtifactEnvelopeTags(truncateToCodeUnits(t, e), r);
  return o.length > e ? scrubArtifactEnvelopeTags(truncateToCodeUnits(t, e - 1), r) : o;
}
function scrubServerLine(t, e) {
  return scrubArtifactEnvelopeTags(
    truncateToCodePoints(
      Array.from(truncateToCodeUnits(t, e * 4), (r) => (isDecisionSurfaceControl(r.codePointAt(0) ?? 0) ? " " : r))
        .join("")
        .replace(INVISIBLE_BLANKS, " ")
        .replace(/\s+/g, " ")
        .trim(),
      e,
    ),
  );
}
function sweepAskCopy(t) {
  return (
    Array.from(t, (e) => (isDecisionSurfaceControl(e.codePointAt(0) ?? 0) ? " " : e))
      .join("")
      .replace(INVISIBLE_BLANKS, " ")
      .replace(/"/g, "'")
      .replace(QUOTE_HOMOGLYPHS, "'")
      .replace(SINGLE_QUOTE_RUNS, "'")
      .replace(/\s+/g, " ")
      .trim() || null
  );
}
var ARROW_SHAFT_SYMBOLS = String.raw`\u002b\u003d\u005e\u007c\u007e\u00a2-\u00a5\u00a8\u00ac\u00af\u00b1\u00b4\u00b8\u00d7\u00f7\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u03f6\u058f\u0606-\u0608\u060b\u07fe\u07ff\u0888\u09f2\u09f3\u09fb\u0af1\u0bf9\u0e3f\u17db\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u2044\u2052\u207a-\u207c\u208a-\u208c\u20a0-\u20c1\u2118\u2140-\u2144\u214b\u2190-\u2194\u219a\u219b\u21a0\u21a3\u21a6\u21ae\u21ce\u21cf\u21d2\u21d4\u21f4-\u22ff\u2320\u2321\u237c\u239b-\u23b3\u23dc-\u23e1\u25b7\u25c1\u25f8-\u25ff\u266f\u27c0-\u27c4\u27c7-\u27e5\u27f0-\u27ff\u2900-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2aff\u2b30-\u2b44\u2b47-\u2b4c\u309b\u309c\ua700-\ua716\ua720\ua721\ua789\ua78a\ua838\uab5b\uab6a\uab6b\ufb29\ufbb2-\ufbc2\ufdfc\ufe62\ufe64-\ufe66\ufe69\uff04\uff0b\uff1c-\uff1e\uff3e\uff40\uff5c\uff5e\uffe0-\uffe3\uffe5\uffe6\uffe9-\uffec\u{10d8e}\u{10d8f}\u{11fdd}-\u{11fe0}\u{1cef0}\u{1d6c1}\u{1d6db}\u{1d6fb}\u{1d715}\u{1d735}\u{1d74f}\u{1d76f}\u{1d789}\u{1d7a9}\u{1d7c3}\u{1e2ff}\u{1ecb0}\u{1eef0}\u{1eef1}\u{1f3fb}-\u{1f3ff}\u{1f8d0}-\u{1f8d8}`,
  v = `[\\p{So}${ARROW_SHAFT_SYMBOLS}\\p{Pd}\\p{Pc}\\p{Mn}\\p{Me}${DASH_CHARS_CLASS}\\u02c9\\u02cd\\u2017\\u2053\\u203e\\ufe49-\\ufe4c\\u0640\\u07fa\\u1173\\u1428\\u180a\\u2e0f\\u2f00\\u3127\\u3161\\u3192\\u31d0\\u4e00\\ua4ff\\ua7f7\\ua8fb\\uffda]`,
  Nt = new RegExp(`(?<!${v})${v}+>`, "gu");
function sweepProvenanceMarker(t) {
  return t
    .replace(
      /[\u00bb\u02c2-\u02c5\u02ef-\u02ff\u1405\u1406\u1409\u1433\u1434\u1450\u1451\u15d2\u2023\u203a\u204d\u20d0-\u20ef\u2044\u2190-\u21ff\u2215\u226b\u227b\u227d\u227f\u2283\u22b1\u22b3\u22d7\u22d9\u2571\u2572\u2303-\u2304\u232a\u2344\u2348\u23e9-\u23ef\u23f5\u25b6-\u25bb\u261b\u261e\u276d\u276f\u2771\u2794-\u27bf\u27e9\u27eb\u27f0-\u27ff\u2900-\u297f\u29a8-\u29af\u2992\u2994\u29c1\u29d0\u29f5\u29f8\u29fd\u2a20\u2a7a\u2aa2\u2aa7\u2aa9\u2aab\u2aad\u2ab0\u2ab2\u2ab4\u2ab6\u2ab8\u2aba\u2abc\u2af8\u2b00-\u2bff\u3009\u300b\ue000-\uf8ff\ufe65\ufe68\uff0f\uff1e\uff3c\uffe9-\uffec\u{1f449}\u{1f599}\u{1f59b}\u{1f59d}\u{1f782}\u{1f800}-\u{1f8ff}\u{1faf1}\u{1fbc1}-\u{1fbc3}\u{1fbb0}-\u{1fbb8}\u{f0000}-\u{ffffd}\u{100000}-\u{10fffd}]/gu,
      "?",
    )
    .replace(Nt, "?");
}
var P = `(?![(){}])[\\p{Ps}\\p{Pe}${DECISION_SURFACE_BRACKET_RANGES}]`,
  DECISION_SURFACE_BRACKETS_RE = new RegExp(`(?<!\\s)\\s*${P}(?:\\s|${P})*`, "gu"),
  J =
    /[:\u02D0\u02D1\u05C3\u2D42\u2D53\u2D57\uA4FD\uA789\u{10781}\u{10782}]|(?![\p{L}\p{N}\p{Zs}])[^\x00-\x7F]/gu,
  MODEL_TEXT_PUNCT_CODE_POINT = new RegExp(`^(?:${J.source})$`, "u");
function sweepMarkerLookalikes(t) {
  return t
    .replace(DECISION_SURFACE_BRACKETS_RE, " ")
    .replace(J, " ")
    .replace(/ {2,}/g, " ")
    .replace(/sources\s+under/giu, "sources-under")
    .replace(/stored\s+connector\s+grant/giu, "stored-connector-grant")
    .replace(/published\s+by\s+this\s+session/giu, "published-by-this-session");
}
var SESSION_PUBLISHED_CLASSIFIER_MARK = " [artifact published by this session]",
  CHAIN_REPUBLISH_ALLOW_REASON =
    "Automatic edit of an Artifact this session watches, requested by a writer's comment on it; the server re-checks the writer, the thread's edit grant, single-file, size and rate limits";
function sweptAskPath(t) {
  return sweepProvenanceMarker(sweepAskCopy(t) ?? "").replace(DECISION_SURFACE_BRACKETS_RE, " ");
}
var Ut =
    /<meta[^>]+name=["']description["'][^>]+content=(["'])((?:(?!\1).)*)\1/is,
  Ft = /<title[^>]*>([\s\S]*?)<\/title>/i,
  Dt = /<h1[^>]*>([\s\S]*?)<\/h1>/i,
  k = new Set(["", "index", "untitled", "document"]);
function deriveDescription(t, e) {
  let r = m(t),
    o = (p) => sanitizeArtifactTitle(decodeHtmlEntities(p ?? "")) ?? "",
    i = o(r.match(Ut)?.[2]);
  if (i.length >= 10) return i;
  let u = (p) => o(r.match(p)?.[1]?.replace(/<[^>]+>/g, "")),
    s = u(Ft),
    l = u(Dt),
    c = s.toLowerCase();
  if (k.has(c) || c === e) s = "";
  let f = l.toLowerCase();
  if (f === s.toLowerCase() || k.has(f) || f === e) return s;
  return l;
}
function splitWatchRows(t) {
  let e = countMatching(t, (r) => "rail" in r && r.rail === "live_stopped");
  return { watching: t.length - e, stopped: e };
}
export {
  formatComplianceTaintLabel,
  isKnownComplianceTaint,
  normalizeComplianceTaints,
  getNameableComplianceTaints,
  POLICY_LIMITS_API_PATH,
  formatPolicyDeniedMessage,
  policyCacheMissMessage,
  policyRouteMissingMessage,
  policyCacheMissRestartMessage,
  staleCommandReason,
  formatPolicyBlockedReason,
  policyCacheMissReason,
  policyRouteMissingReason,
  DEFAULT_MAX_RESULT_SIZE_CHARS,
  OUTPUT_MAX_CHARS_FLOOR,
  OUTPUT_MAX_CHARS_CEILING,
  MAX_RESULT_SIZE_CHARS_CEILING,
  BYTES_PER_TOKEN,
  DEFAULT_TOOL_RESULT_PERSIST_THRESHOLD,
  DEFAULT_AGGREGATE_TOOL_RESULT_BUDGET,
  TOOL_USE_SUMMARY_MAX_CHARS,
  DEFAULT_HOOK_OUTPUT_PERSIST_THRESHOLD,
  DEFAULT_MIDDLE_TRUNCATE_MAX_CHARS,
  MAX_TASK_NOTIFICATION_CHARS,
  getArtifactEnvironment,
  getClaudeAiOrigin,
  Fir,
  getBaseApiUrl,
  Uir,
  getArtifactViewerOriginOverride,
  DECISION_SURFACE_BRACKET_RANGES,
  INTERRUPTED_BY_USER_MARKER,
  INTERRUPTED_FOR_TOOL_USE_MARKER,
  TOOL_CALL_NOT_COMPLETED_MARKER,
  USER_REFUSED_ACTION_MARKER,
  TOOL_CALL_SKIPPED_MARKER,
  USER_REJECTED_TOOL_USE_MARKER,
  API_REQUEST_ABORTED_MESSAGE,
  OPERATION_STOPPED_BY_HOOK_MESSAGE,
  INTERRUPT_MESSAGE_PREFIXES,
  isUserRefusalOrSkipMessage,
  AUTO_MEMORY_REMINDER_SUFFIX,
  isInterruptLikeUserMessage,
  isShutdownInterruptedToolResultMessage,
  HOOK_FEEDBACK_SUFFIX,
  HOOK_FEEDBACK_EVENT_NAMES,
  formatHookFeedbackMessage,
  STRUCTURED_OUTPUT_ENFORCE_TAG,
  Rkn,
  INVALID_TOOL_CALL_RETRY_MESSAGE,
  MALFORMED_TOOL_CALL_RETRY_MESSAGE,
  NO_VISIBLE_OUTPUT_MESSAGE,
  PERMISSION_DENIED_RETRY_MESSAGE,
  GOAL_CHECK_IN_PREFIX,
  isSyntheticMetaUserMessage,
  BASE58_SLUG_PATTERN,
  slugToUuid,
  setFeatureValueGetter,
  ARTIFACT_TOOL_NAME,
  ARTIFACT_COMMENTS_TOOL_NAME,
  ARTIFACT_DATA_TOOL_NAME,
  ARTIFACT_CHECK_TOOL_NAME,
  ARTIFACT_FAMILY_TOOL_NAMES,
  ASSET_ID_RE,
  STALE_GUARD_CONTENT_HEADER_SUFFIX,
  STALE_GUARD_REJECTION_PREFIX,
  STALE_GUARD_REJECTION_PREFIX_LEGACY,
  STALE_GUARD_CONTENT_HEADER,
  STALE_GUARD_CONTENT_HEADER_LINE_RE,
  CONFLICT_REJECTION_PREFIX,
  PR_REVIEW_SECURITY_WALL,
  artifactLinkShapeHint,
  notAnArtifactUrlMessage,
  ARTIFACT_LOGIN_REQUIRED_MESSAGE,
  ARTIFACT_LOGIN_PROXIED_MESSAGE,
  ARTIFACT_LOGIN_HOST_MANAGED_MESSAGE,
  artifactLoginEnvQuadMessage,
  artifactPolicyBlockedMessage,
  artifactLoginBlockedByCredentialMessage,
  ArtifactInputError,
  ARTIFACT_SLUG_RE,
  ARTIFACT_VERSION_SAFE_RE,
  ARTIFACT_MAX_RESULT_SIZE_CHARS,
  ARTIFACT_PAGE_INLINE_RESULT_CAP,
  ARTIFACT_DB_READ_MAX_RESULT_SIZE_CHARS,
  ARTIFACT_STUB_URL_PREFIX,
  getArtifactPublishStubDir,
  parseArtifactUrl,
  artifactUrlSubPath,
  canonicalizeArtifactUrlInput,
  parseArtifactUrlInput,
  parseArtifactUrlAnyCase,
  parseStubArtifactUrl,
  ARTIFACT_DELETED_NOTE_TAG,
  ARTIFACT_DELETED_NOTE_RE,
  uuidSlugFromUrl,
  artifactViewerPath,
  artifactViewerUrlFor,
  artifactViewerUrlSpellings,
  artifactContentOriginUrlFor,
  canonicalArtifactTargetFor,
  isCanonicalArtifactViewerUrl,
  TITLE_SCAN_CHARS,
  TITLE_SCAN_BYTES,
  TITLE_MAX_RUNES,
  decodeHtmlEntities,
  extractThumbnailLinks,
  FAVICON_MARKUP_RE,
  sanitizeFavicon,
  vetForeignFavicon,
  faviconClause,
  extractHtmlTitle,
  sanitizeArtifactTitle,
  QUOTE_HOMOGLYPHS,
  SINGLE_QUOTE_RUNS,
  INVISIBLE_BLANKS,
  isDecisionSurfaceControl,
  INVISIBLE_BLANK_CODE_POINT,
  isJoinerOrEmojiSelector,
  isResultLineControl,
  rideStateAfter,
  selectorOrJoinerRides,
  sweepResultLine,
  revealPageInvisibles,
  sweepResultLineField,
  sweepResultLineText,
  MAX_REFUSAL_CHARS,
  MAX_SIZE_CLAUSE_CHARS,
  isPublishShapedArtifactAction,
  DEFAULT_LIST_LIMIT,
  LIST_LIMIT_MAX,
  listScopeFrom,
  artifactTagPatterns,
  artifactLeadScrubPattern,
  containsInterruptLiteral,
  markInterruptLiterals,
  scrubArtifactEnvelopeTags,
  scrubbedHead,
  scrubServerLine,
  sweepAskCopy,
  ARROW_SHAFT_SYMBOLS,
  sweepProvenanceMarker,
  DECISION_SURFACE_BRACKETS_RE,
  MODEL_TEXT_PUNCT_CODE_POINT,
  sweepMarkerLookalikes,
  SESSION_PUBLISHED_CLASSIFIER_MARK,
  CHAIN_REPUBLISH_ALLOW_REASON,
  sweptAskPath,
  deriveDescription,
  splitWatchRows,
};
