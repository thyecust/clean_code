// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { hashSha256 } from "../../01-核心基础设施/核心工具-路径与平台/git-host-utils.js";
import { createTempFilePath } from "../../01-核心基础设施/核心工具-路径与平台/temp-directory.js";
import { isSignalAborted, GIT_OBJECT_ID_REGEX } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { runProbeGit } from "../工作树-Git/local-divergence-probe.js";
import { parseBundleHeader, readFileWithMaxBytes, removeTemporaryBundleFile } from "../工作树-Git/dir-sync-git-repository.js";
var MAX_OVERLAY_BUNDLE_BYTES = 20971520,
  C = 60000,
  w = "HEAD",
  R = 16;
function s(e, r) {
  return { ok: !1, reason: "git_error", stage: e, detail: r };
}
function x(e, r) {
  return `${e} exited ${r ?? "with no status (killed, timed out, or not spawned)"}`;
}
async function createOverlayBundle({
  gitRoot: e,
  prerequisiteSha: r,
  maxBytes: o = MAX_OVERLAY_BUNDLE_BYTES,
  signal: t,
}) {
  let l = Date.now(),
    c = await D({
      gitRoot: e,
      prerequisiteSha: r,
      maxBytes: o,
      signal: t,
    }).catch((a) => (logError(a), s("threw", "unexpected throw")));
  return (T(c, Date.now() - l), c);
}
async function D({ gitRoot: e, prerequisiteSha: r, maxBytes: o, signal: t }) {
  if (!GIT_OBJECT_ID_REGEX.test(r)) return s("arguments", "prerequisite is not an object id");
  if (!(o > 0)) return s("arguments", "maxBytes is not a positive number");
  if (isSignalAborted(t)) return { ok: !1, reason: "aborted" };
  let l = {
      gitRoot: e,
      signal: t ?? new AbortController().signal,
      timeoutMs: C,
    },
    c = await runProbeGit(l, ["rev-parse", "-q", "--verify", "HEAD"]),
    a = c.stdout.trim();
  if (c.exitCode !== 0 || !GIT_OBJECT_ID_REGEX.test(a))
    return isSignalAborted(t)
      ? { ok: !1, reason: "aborted" }
      : s("head", "HEAD does not resolve");
  let [b, m] = await Promise.all([
    runProbeGit(l, ["rev-list", "--count", `${r}..${a}`, "--"]),
    runProbeGit(l, ["merge-base", "--is-ancestor", r, a]),
  ]);
  if (isSignalAborted(t)) return { ok: !1, reason: "aborted" };
  if (m.exitCode === 1) return { ok: !1, reason: "not_ancestor" };
  let _ = /^\d+$/.test(b.stdout.trim()) ? Number(b.stdout.trim()) : null;
  if (b.exitCode !== 0 || _ === null || m.exitCode !== 0)
    return s(
      "placement",
      `${x("rev-list", b.exitCode)}, ${x("merge-base", m.exitCode)}`,
    );
  if (_ === 0) return { ok: !1, reason: "not_diverged" };
  let p = await runProbeGit(l, [
    "rev-list",
    "--objects",
    "--disk-usage",
    a,
    `^${r}`,
    "--",
  ]);
  if (isSignalAborted(t)) return { ok: !1, reason: "aborted" };
  let v = /^\d+$/.test(p.stdout.trim()) ? Number(p.stdout.trim()) : null;
  if (p.exitCode === 0 && v !== null && v > R * o)
    return { ok: !1, reason: "too_large", sizeBytes: v, aheadCount: _ };
  let k = createTempFilePath("ccr-overlay", ".bundle");
  try {
    let O = await runProbeGit(l, ["bundle", "create", "--quiet", k, `^${r}`, w, "--"]);
    if (isSignalAborted(t)) return { ok: !1, reason: "aborted" };
    if (O.exitCode !== 0)
      return s("bundle_create", x("bundle create", O.exitCode));
    let d = await readFileWithMaxBytes(k, o);
    if (d.kind === "too_large")
      return {
        ok: !1,
        reason: "too_large",
        sizeBytes: d.sizeBytes,
        aheadCount: _,
      };
    let B = parseBundleHeader(d.content);
    if (B === null)
      return s("header", "the bundle does not open with a well-formed header");
    let [E, ...A] = B.refs;
    if (E === void 0 || A.length > 0 || E.name !== w || E.id !== a)
      return s(
        "header",
        "the bundle does not carry exactly HEAD at the id read before packing",
      );
    if (isSignalAborted(t)) return { ok: !1, reason: "aborted" };
    return {
      ok: !0,
      content: d.content,
      sizeBytes: d.content.length,
      sha256: hashSha256(d.content),
      headSha: a,
      prerequisiteSha: r,
      prerequisites: B.prerequisites,
      aheadCount: _,
    };
  } finally {
    await removeTemporaryBundleFile(k);
  }
}
function T(e, r) {
  let o = e.ok || e.reason === "too_large" ? e : null;
  if (
    (logEvent("tengu_ccr_overlay_bundle", {
      outcome: fromEnum(e.ok ? "bundle" : e.reason),
      stage: !e.ok && e.reason === "git_error" ? fromEnum(e.stage) : void 0,
      duration_ms: r,
      size_bytes: o?.sizeBytes,
      ahead: o?.aheadCount,
      prerequisite_count: e.ok ? e.prerequisites.length : void 0,
    }),
    e.ok)
  ) {
    logFeatureOk("teleport_overlay_bundle");
    return;
  }
  if (
    (logForDebugging(
      `[overlayBundle] not created: ${e.reason}${e.reason === "git_error" ? ` (${e.stage}: ${e.detail})` : ""}`,
    ),
    e.reason === "aborted" ||
      e.reason === "not_diverged" ||
      e.reason === "not_ancestor")
  )
    logFeatureSad("teleport_overlay_bundle", e.reason);
  else
    logFeatureBad("teleport_overlay_bundle", e.reason, {
      ...(e.reason === "git_error" && { stage: fromEnum(e.stage) }),
    });
}
export { MAX_OVERLAY_BUNDLE_BYTES, createOverlayBundle };
