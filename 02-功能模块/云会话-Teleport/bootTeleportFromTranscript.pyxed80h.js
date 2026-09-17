// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 205 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { jsonParse, jsonParseUntraced, readTailBytes, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/共享小工具-未细化/diagnostics-log.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getTranscriptPathForSession, readTranscriptTailV5 } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getTeleportCacheState, activateTeleportCache } from "../../01-核心基础设施/共享小工具-未细化/chunk-qv8z365a.js";
import { getCcrSessionConfig, getCcrSessionConfigFailureReason, getCcrSessionProfile } from "../../01-核心基础设施/共享小工具-未细化/ccr-session-config.js";
import { resolveTranscriptLocator } from "../../01-核心基础设施/共享小工具-未细化/hover-rest-transcript.js";
import { s, T, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var v = 1,
  L = "upgrade_relay_marker";
function E(e) {
  return e === L;
}
var b = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  P = createLazyValue(() =>
    c({
      schema_version: T().int(),
      conversation_uuid: s().regex(b),
      anchor_line_uuid: s().regex(b),
      anthropic_version: s().regex(/^\d{4}-\d{2}-\d{2}$/),
      model: s().min(1).optional(),
    }),
  ),
  S = 16384;
function R(e) {
  if (Buffer.byteLength(e, "utf8") > S)
    return { ok: !1, reason: `marker exceeds the ${S}-byte cap` };
  let a;
  try {
    a = jsonParse(e);
  } catch {
    return { ok: !1, reason: "marker is not valid JSON" };
  }
  let t = c({ schema_version: T().int() }).loose().safeParse(a);
  if (!t.success)
    return { ok: !1, reason: "marker has no integer schema_version" };
  if (t.data.schema_version > v)
    return {
      ok: !1,
      reason: `marker schema_version ${t.data.schema_version} exceeds this consumer's ceiling ${v}`,
    };
  if (t.data.schema_version < 1)
    return {
      ok: !1,
      reason: `marker schema_version ${t.data.schema_version} is below the producer's floor of 1`,
    };
  let i = P().safeParse(a);
  if (!i.success)
    return {
      ok: !1,
      reason: `marker shape invalid: ${i.error.issues[0]?.message ?? "unknown issue"}`,
    };
  return { ok: !0, marker: i.data };
}
var O = createLazyValue(() =>
  c({
    type: s().optional(),
    subtype: s().optional(),
    uuid: s().optional(),
    content: s().optional(),
  }).loose(),
);
function d(e) {
  writeDiagnosticsEvent(e.outcome === "refused" ? "warn" : "info", "cli_teleport_arm_verdict", e);
}
var w = 67108864;
function C(e) {
  try {
    let a = jsonParseUntraced(e),
      t = O().safeParse(a);
    return t.success ? t.data : null;
  } catch {
    return null;
  }
}
function A({
  rawSeedLines: e,
  liveMessageUuids: a,
  ingressOrigin: t,
  remoteSessionId: i,
}) {
  if (getTeleportCacheState().status !== "inactive")
    return {
      armed: !1,
      code: "latch_not_inactive",
      reason: "teleport state is not inactive",
    };
  let o = null;
  for (let f = e.length - 1; f >= 0; f--) {
    let k = e[f];
    if (k.trim() === "") continue;
    let _ = C(k);
    if (_?.type === "system" && E(_.subtype)) {
      o = _;
      break;
    }
  }
  if (o === null)
    return {
      armed: !1,
      code: "no_marker_line",
      reason: "no teleport marker line in the seed transcript",
    };
  let r = o.uuid,
    l = o.content;
  if (typeof r !== "string" || typeof l !== "string")
    return {
      armed: !1,
      code: "marker_line_shape",
      reason: "marker line is missing its uuid or string content",
    };
  let u = R(l);
  if (!u.ok) return { armed: !1, code: "marker_refused", reason: u.reason };
  let p = a.indexOf(u.marker.anchor_line_uuid);
  if (p === -1)
    return {
      armed: !1,
      code: "anchor_not_in_view",
      reason: "marker anchor line uuid is not present in the hydrated view",
    };
  if (a.indexOf(u.marker.anchor_line_uuid, p + 1) !== -1)
    return {
      armed: !1,
      code: "anchor_not_unique",
      reason:
        "marker anchor line uuid occurs more than once in the hydrated view \u2014 refusing a possibly planted duplicate",
    };
  let h = a.slice(0, p + 1);
  return (
    activateTeleportCache({
      status: "active",
      marker: u.marker,
      markerLineUuid: r,
      preAnchorLineUuids: h,
      ingressOrigin: t,
      remoteSessionId: i,
    }),
    logForDebugging(
      `teleport relay armed (server-driven): marker line ${r}, anchor ${u.marker.anchor_line_uuid}, ${h.length} guarded pre-anchor lines`,
    ),
    { armed: !0 }
  );
}
function noteTeleportBootUnreached(e) {
  if (!getCcrSessionProfile()) {
    d({ outcome: "absent" });
    return;
  }
  (logFeatureSad("upgrade_teleport_cache", `boot_unreached_${e}`),
    d({ outcome: "refused", error_code: `boot_unreached_${e}` }),
    logForDebugging(
      `teleport relay carriers present but the resume lane exited before boot (${e}) \u2014 standard path`,
      { level: "warn" },
    ));
}
async function B(e, a) {
  let t = getTranscriptPathForSession(e),
    i = resolveTranscriptLocator(t, a);
  if (i !== void 0) {
    let r = await readTranscriptTailV5(i.key, w, i.backend).catch((l) => {
      logForDebugging(
        `teleport relay seed read through storage threw; falling back to the file: ${String(l)}`,
        { level: "warn" },
      );
      return;
    });
    if (r === null) throw Error("seed transcript stream not found");
    if (r?.ok) return r.content;
    if (r !== void 0) {
      let l = "telemetryCode" in r.error ? r.error.telemetryCode : void 0;
      if (l === "ELOOP" || l === "ENXIO")
        throw (
          logForDebugging(
            `teleport relay seed read refused by storage (${l}); the file is not re-read directly`,
            { level: "warn" },
          ),
          Error(
            "seed transcript refused by storage: a linked or indirect transcript file is not read",
          )
        );
      logForDebugging(
        `teleport relay seed read through storage failed (${r.error.code}); falling back to the file`,
        { level: "warn" },
      );
    }
  }
  let { content: o } = await readTailBytes(t, w);
  return o;
}
async function bootTeleportFromTranscript(e, a, t) {
  let i = getCcrSessionConfig();
  if (!i) {
    let o = getCcrSessionConfigFailureReason();
    if (o !== null)
      (logFeatureSad("upgrade_teleport_cache", "env_config_refused"),
        d({ outcome: "refused", error_code: "env_config_refused", cause: o }),
        logForDebugging(
          `teleport relay carriers present but env config refused (${o}) \u2014 standard path`,
          { level: "warn" },
        ));
    else d({ outcome: "absent" });
    return;
  }
  try {
    let o = await B(e, t),
      r = A({
        rawSeedLines: o.split(`
`),
        liveMessageUuids: a,
        ingressOrigin: i.ingressOrigin,
        remoteSessionId: i.remoteSessionId,
      });
    if (!r.armed)
      (logFeatureSad("upgrade_teleport_cache", r.code),
        d({ outcome: "refused", error_code: r.code }),
        logForDebugging(`teleport relay not armed: ${r.reason}`));
    else (logFeatureOk("upgrade_teleport_cache"), d({ outcome: "armed" }));
  } catch (o) {
    (logFeatureSad("upgrade_teleport_cache", "boot_failed"),
      d({ outcome: "refused", error_code: "boot_failed" }),
      logForDebugging(`teleport relay boot failed: ${String(o)}`, { level: "warn" }));
  }
}
export { bootTeleportFromTranscript, noteTeleportBootUnreached };
