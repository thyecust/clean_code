// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Gt, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/核心工具-日志与脱敏/diagnostics-log.js";
import { logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
class TeleportLatch {
  state = { status: "inactive" };
  fallbackSadEmitted = new Set();
  toolsBaseline = { captured: !1 };
}
var teleportLatches = new Gt(() => new TeleportLatch());
function o() {
  return teleportLatches.of(B());
}
function getTeleportCacheState() {
  return o().state;
}
function activateTeleportCache(e) {
  let t = o();
  if (t.state.status !== "inactive") return;
  t.state = e;
}
function revertTeleportCache(e, t) {
  let r = o();
  if (r.state.status === "reverted") return;
  if (r.state.status === "active") (logFeatureSad("upgrade_teleport_cache", e), l(e));
  r.state = { status: "reverted", reason: e, detail: t };
}
function logTeleportFallbackOnce(e) {
  let t = o();
  if (t.fallbackSadEmitted.has(e)) return;
  (t.fallbackSadEmitted.add(e), logFeatureSad("upgrade_teleport_cache", e), l(e));
}
function l(e) {
  writeDiagnosticsEvent("warn", "cli_teleport_relay_fallback", { reason: e });
}
function verifyPreAnchorIntact(e) {
  let t = getTeleportCacheState();
  if (t.status !== "active") return !1;
  let r = t.preAnchorLineUuids;
  if (e.length < r.length)
    return (
      revertTeleportCache(
        "context_reduced",
        `live view has ${e.length} lines before its tail; the arm snapshot guarded ${r.length}`,
      ),
      !1
    );
  for (let a = 0; a < r.length; a++)
    if (e[a] !== r[a])
      return (
        revertTeleportCache("context_reduced", `pre-anchor line ${a} changed since arm`),
        !1
      );
  return !0;
}
function verifyToolsBaselineIntact(e, t) {
  let r = o();
  if (r.state.status !== "active") return !1;
  let a = r.toolsBaseline;
  if (!a.captured)
    return ((r.toolsBaseline = { captured: !0, model: e, fingerprint: t }), !0);
  if (e !== a.model) return (logTeleportFallbackOnce("model_mismatch"), !1);
  if (a.fingerprint === t) return !0;
  return (
    revertTeleportCache(
      "tools_changed",
      a.fingerprint === null
        ? "session gained a toolset after a toolless first relay-attempted dispatch"
        : t === null
          ? "session lost its toolset after a tooled first relay-attempted dispatch"
          : "outgoing toolset diverged from the first relay-attempted dispatch baseline",
    ),
    !1
  );
}
export { TeleportLatch, teleportLatches, getTeleportCacheState, activateTeleportCache, revertTeleportCache, logTeleportFallbackOnce, verifyPreAnchorIntact, verifyToolsBaselineIntact };
