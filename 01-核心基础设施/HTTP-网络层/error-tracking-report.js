// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  gn,
  Lt,
  Xl,
  xu,
  XP,
  aot,
  $je,
  xae,
  Uje,
  Hae,
  Bje,
  jje,
  Wje,
  Gje,
  Ra,
  TZ,
  x_e,
  ge,
  Jr,
  hv,
  dNn,
  Po,
} from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { dl, Trt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { redactKnownPaths, sanitizeErrorMessage, getMainLoopModel, getCanonicalName, envSessionKind, getAllGrowthBookFeatures, getNonDefaultFeatureKeys, getOrCreateUserID, getOrCreateMachineID } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getEnvEntrypoint, isSdkEntrypoint } from "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import { strip1mSuffix } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { shouldReportErrors } from "../../02-功能模块/反馈-错误上报/error-reporting-eligibility.js";
import { errorTrackingClient, isErrorTrackingCapReached, enqueueErrorLog } from "../../02-功能模块/反馈-错误上报/chunk-6kad94y1.js";
import { getCurrentPlatform } from "../核心工具-路径与平台/platform-detection.js";
import { createHash } from "crypto";
import { release } from "os";
import { homedir } from "os";
import { sep as j } from "path";
var f = "<user-code>";
function H() {
  try {
    return homedir();
  } catch {
    return "";
  }
}
var k = "cli",
  b = new Set(["cli.js", k, "sdk.mjs", "browser-sdk.js", "agentSdk.js"]),
  I = /^chunk-[0-9a-z]+\.js$/;
function F(e) {
  return e[0] === "/" && I.test(e.slice(1));
}
function N(e) {
  return F(e) || (e[0] === "/" && b.has(e.slice(1)));
}
function A(e) {
  return F(e) ? "/" + k : e;
}
var z = /^(?:\/(?:\$bunfs|~BUN)|\/?[A-Za-z]:[\\/](?:\$bunfs|~BUN))[\\/]/;
function y(e) {
  let n = e.startsWith("file://") ? e.slice(7) : e;
  return z.test(n);
}
function G(e) {
  let n = e;
  if (n.startsWith("file://")) n = n.slice(7);
  if (y(n)) return C(n);
  if (n.startsWith("/snapshot/")) n = n.slice(10);
  let t = H();
  if (t && n.startsWith(t + j)) n = "~" + n.slice(t.length);
  return n;
}
var Y = ["src/", "packages/"];
function C(e) {
  let n = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
  return n === -1 ? e : e.slice(n + 1);
}
function D(e) {
  return N(e.file) || Y.some((n) => e.file.startsWith(n));
}
var K = ["node:", "bun:", "internal:"],
  V = new Set([
    "native",
    "unknown",
    "ws",
    "undici",
    "node-fetch",
    "isomorphic-fetch",
    "vercel_fetch",
    "utf-8-validate",
  ]);
function T(e) {
  return V.has(e) || K.some((n) => e.startsWith(n));
}
function q(e) {
  return T(e.file);
}
function O(e) {
  let n = e.find((t) => !q(t));
  if (n === void 0) return e.length >= x;
  return n.file === f || n.file.startsWith("node_modules/");
}
function M(e) {
  return N(e.file) && (e.function == null || e.function === "<anonymous>");
}
function X(e) {
  let n = e.split(/[/\\]/),
    t = -1;
  for (let i = n.length - 1; i >= 0; i--)
    if (n[i] === "node_modules") {
      t = i;
      break;
    }
  if (t === -1 || t >= n.length - 1) return null;
  let r = n[t + 1],
    o;
  if (r.startsWith("@")) {
    if (t + 2 >= n.length) return null;
    o = `${r}/${n[t + 2]}`;
  } else o = r;
  let s = n.at(-1);
  if (!s) return null;
  return `node_modules/${o}/${s}`;
}
function Z(e) {
  let n = G(e),
    t = C(n),
    r = X(n);
  if (
    (b.has(t) && (r === null || r.startsWith("node_modules/@anthropic-ai/"))) ||
    (y(e) && I.test(t))
  )
    return "/" + t;
  let o = null;
  if (o) return o;
  if (T(n)) return n;
  if (r) return r;
  return f;
}
function J(e) {
  let n = e.trim();
  if (!n.startsWith("at ")) return null;
  let t = n.slice(3),
    r = t.indexOf(" ("),
    o,
    s;
  if (r !== -1 && t.endsWith(")"))
    ((o = t.slice(0, r).trim()), (s = t.slice(r + 2, -1)));
  else s = t.trim();
  if (o) {
    if (
      ((o = o.replace(/^async\s+/, "").replace(/^new\s+/, "")),
      (o = o.replace(/\s*\[as\s+[^\]]+\]$/, "")),
      !o)
    )
      o = void 0;
  }
  let i = s.match(/^(.*):(\d+):(\d+)$/);
  if (!i) return null;
  let [, c, u, m] = i,
    l = Z(c);
  return {
    file: l,
    line: Number(u),
    column: Number(m),
    function: l === f && o ? f : o,
  };
}
var x = 50;
function E(e, n = x) {
  let t = [];
  for (let r of Q(e).split(`
`)) {
    let o = J(r);
    if (o) {
      if ((t.push(o), t.length >= n)) break;
    }
  }
  return t;
}
function Q(e) {
  let n = typeof e.stack === "string" ? e.stack : "",
    t = typeof e.message === "string" ? e.message : "",
    r = ee(n, e.name, t);
  return r === -1 ? n : n.slice(r + 1);
}
function ee(e, n, t) {
  let r = (s) =>
    s !== "" &&
    e.startsWith(`${s}
`);
  if (t !== "") {
    let s = typeof n === "string" && n !== "" ? `${n}: ${t}` : "";
    if (s !== "" && r(s)) return s.length;
    let i = `: ${t}`,
      c = e.indexOf(`${i}
`);
    return c > 0 &&
      !e.slice(0, c).includes(`
`)
      ? c + i.length
      : n === "" && r(t)
        ? t.length
        : -1;
  }
  let o =
    n === void 0
      ? "Error"
      : typeof n === "string"
        ? n
        : typeof n === "number" ||
            typeof n === "boolean" ||
            typeof n === "bigint" ||
            n === null
          ? String(n)
          : "";
  return r(o) ? o.length : -1;
}
function v(e, n) {
  return [
    `${e.name}: ${e.message}`,
    ...n.map((t) => {
      let r = `${t.file}${t.line ? `:${t.line}` : ""}${t.column ? `:${t.column}` : ""}`;
      return t.function ? `    at ${t.function} (${r})` : `    at ${r}`;
    }),
  ].join(`
`);
}
var U = "claude-code-error-tracking";
function te(e) {
  return e
    ? {
        version: `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}_${e}`,
        sourcemapGroup: e,
      }
    : {
        version: {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
        sourcemapGroup: "none",
      };
}
var re = 30;
function oe() {
  let e = errorTrackingClient();
  if (e.cachedUserBucket !== void 0) return e.cachedUserBucket;
  let n = getOrCreateUserID(),
    t = createHash("sha256").update(n).digest("hex");
  return (
    (e.cachedUserBucket = parseInt(t.slice(0, 8), 16) % re),
    e.cachedUserBucket
  );
}
function se(e, n) {
  let t = n
    .slice(0, 3)
    .map((r) =>
      M(r)
        ? `${r.function ?? "?"}@${r.file}:${r.line ?? "?"}:${r.column ?? "?"}`
        : `${r.function ?? "?"}@${A(r.file)}`,
    )
    .join("|");
  return createHash("sha256")
    .update(
      `${e}
${t}`,
    )
    .digest("hex")
    .slice(0, 16);
}
var ie = new Set([
  "claude-fable-5-1",
  "claude-fable-5",
  "claude-mythos-5-1",
  "claude-mythos-5",
  "claude-opus-5",
  "claude-opus-4-8",
  "claude-opus-4-7",
  "claude-opus-4-6",
  "claude-opus-4-5",
  "claude-opus-4-1",
  "claude-opus-4-0",
  "claude-sonnet-5",
  "claude-sonnet-4-6",
  "claude-sonnet-4-5",
  "claude-sonnet-4-0",
  "claude-haiku-4-5",
  "claude-3-7-sonnet",
  "claude-3-5-sonnet",
  "claude-3-5-haiku",
  "claude-3-opus",
  "claude-3-sonnet",
  "claude-3-haiku",
]);
function ae() {
  try {
    let e = getMainLoopModel();
    if (!e) return;
    let n = getCanonicalName(strip1mSuffix(e), { identity: !0 });
    return ie.has(n) ? n : "other";
  } catch {
    return;
  }
}
var ce = 50;
function ue() {
  try {
    let e = getAllGrowthBookFeatures(),
      n = getNonDefaultFeatureKeys(),
      t = {},
      r = 0;
    for (let [o, s] of Object.entries(e))
      if (typeof s === "boolean" && n.has(o)) {
        if (((t[o] = s), ++r >= ce)) break;
      }
    return t;
  } catch {
    return {};
  }
}
function le(e) {
  let n = e.issues;
  if (!Array.isArray(n) || n.length === 0) return;
  let t = n
    .map((r) => r?.code)
    .filter((r) => typeof r === "string" && /^[a-z_]{1,40}$/.test(r));
  return `${n.length} issue(s): ${t.join(",")}`;
}
function de() {}
var fe = !de.name.startsWith("errorTrackingIdentifierProbe"),
  me = [
    ["APIUserAbortError", Xl],
    ["APIConnectionTimeoutError", XP],
    ["APIConnectionError", xu],
    ["BadRequestError", $je],
    ["AuthenticationError", xae],
    ["PermissionDeniedError", Uje],
    ["NotFoundError", Hae],
    ["ConflictError", Bje],
    ["UnprocessableEntityError", jje],
    ["RateLimitError", Wje],
    ["InternalServerError", Gje],
    ["APIError", Lt],
    ["RetryableError", aot],
    ["WorkloadIdentityError", Ra],
    ["AnthropicError", gn],
    ["ClaudeError", TZ],
  ],
  B = /_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS$/;
function pe(e, n = fe) {
  let t =
      typeof e.constructor?.name === "string"
        ? e.constructor.name.replace(B, "")
        : void 0,
    r = n && e instanceof TZ && e.name === t,
    i = (
      (typeof e.name === "string" && e.name !== "Error" && !r
        ? e.name
        : void 0) ||
      (!n && hv(t) !== void 0 ? t : me.find(([, c]) => e instanceof c)?.[0]) ||
      "Error"
    ).replace(B, "");
  return hv(i) ?? "Error";
}
function Ee(e, n, t) {
  let r = E(e),
    o = O(r),
    s = x_e(e),
    i =
      o && s === void 0
        ? `thrown outside the Claude Code bundle (${t})`
        : sanitizeErrorMessage(redactKnownPaths(e, s ?? le(e) ?? e.message ?? String(e))),
    c = v({ name: t, message: i }, r),
    { version: u, sourcemapGroup: m } = te(
      {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.263",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-06T01:08:56Z",
        GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
        HOOKS_WORKER_URL:
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.DD_SOURCEMAP_GROUP,
    ),
    l = se(t, r),
    g = oe(),
    d = ae(),
    w = typeof Bun < "u" && !0,
    h = Jr(e),
    _ = a.CLAUDE_CODE_ENTRYPOINT === void 0 ? "cli" : (getEnvEntrypoint() ?? "other"),
    p = envSessionKind(),
    S = Trt(),
    R = Ie(release());
  return {
    ddtags: [
      `service:${U}`,
      "team:claude-code",
      `version:${u}`,
      "env:external",
      `origin:${n}`,
      `platform:${getCurrentPlatform()}`,
      `os_release:${R}`,
      `user_bucket:${g}`,
      `entrypoint:${_}`,
      `node_version:${process.versions.node}`,
      "bun_version:1.4.1",
      `is_native_runtime:${w}`,
      ...(d ? [`model:${d}`] : []),
      ...(h ? [`error_code:${h}`] : []),
      ...(p ? [`session_kind:${p}`] : []),
      ...(p ? [`has_attacher:${dl() ? "1" : "0"}`] : []),
      ...(S ? [`renderer_mode:${S}`] : []),
    ].join(","),
    service: U,
    hostname: "claude-code",
    status: "error",
    message: `${t}: ${i}`.slice(0, 4000),
    timestamp: new Date().toISOString(),
    error: {
      kind: t,
      message: i.slice(0, 4000),
      stack: c.slice(0, 16000),
      fingerprint: l,
      handling: n === "logError" ? "handled" : "unhandled",
    },
    version: u,
    sourcemap_group: m,
    env: "external",
    user_bucket: g,
    origin: n,
    host_platform: getCurrentPlatform(),
    host_os_release: R,
    host_name_redacted: getOrCreateMachineID().slice(0, 12),
    entrypoint: _,
    node_version: process.versions.node,
    bun_version: "1.4.1",
    ...(d && { model: d }),
    error_frames: r.slice(0, 20),
    feature_flags: ue(),
  };
}
var he = new Set([
    "APIUserAbortError",
    "AuthenticationError",
    "McpSessionExpiredError",
  ]),
  _e = [
    {
      messagePrefix: "File does not exist",
      topFrameIncludes: "FileReadTool.ts",
    },
  ],
  Se = [
    { topFile: "node:net", topFunction: "internalConnectMultipleTimeout" },
    { topFile: "node:_http_server", topFunction: "#onClose" },
  ];
function Re(e) {
  let n = E(e, 20),
    t = n[0];
  if (!t || n.some(D)) return !1;
  return Se.some((r) => t.file === r.topFile && t.function === r.topFunction);
}
function ke() {
  return (
    a.CLAUDE_CODE_REMOTE === !0 ||
    Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) ||
    Boolean(a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE)
  );
}
function be(e, n) {
  if (he.has(n)) return !0;
  if (
    isSdkEntrypoint() &&
    !ke() &&
    Po(e) &&
    e.code !== void 0 &&
    dNn.has(e.code) &&
    (e.syscall === "mkdir" || e.syscall === "open") &&
    getCurrentPlatform() !== "windows"
  )
    return !0;
  let t = e.message ?? "";
  return _e.some(
    (r) =>
      t.startsWith(r.messagePrefix) &&
      (
        e.stack
          ?.split(
            `
`,
          )
          .find((o) => o.trim().startsWith("at ")) ?? ""
      ).includes(r.topFrameIncludes),
  );
}
function Ie(e) {
  let n = /^(\d+)\.(\d+)/.exec(e);
  return n ? `${n[1]}.${n[2]}` : "unknown";
}
function reportError(e, n = "logError") {
  if (!shouldReportErrors()) return;
  try {
    let t = ge(e),
      r = pe(t);
    if (n === "logError" && be(t, r)) return;
    if ((n === "unhandled_rejection" || n === "uncaught_exception") && Re(t))
      return;
    if (isErrorTrackingCapReached()) return;
    let o = Ee(t, n, r);
    enqueueErrorLog(o);
  } catch {}
}
export { reportError };
