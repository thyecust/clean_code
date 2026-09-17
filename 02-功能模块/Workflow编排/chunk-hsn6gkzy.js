// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Xn, j } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Z, kt } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { fromEnum as u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logFeatureOk as y, logFeatureBad as f, logFeatureSad as g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { q } from "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import { MTt } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { Y9e, lIe } from "./chunk-a5048zpn.js";
import { s, T, O, it } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { createHash as G, randomUUID as M, timingSafeEqual as V } from "crypto";
var Q = "workflow_launch_result",
  W = 4194304,
  D = "/.workflow/",
  $gr = "CLAUDE_CODE_WORKFLOW_LAUNCH_SHA256",
  ee = /^(?!\.+$)[A-Za-z0-9._-]{1,128}$/;
function C(e) {
  let t = (l) => ({ ok: !1, error: l }),
    r = e.filestore_path;
  if (typeof r !== "string" || r.length === 0)
    return t("filestore_path is missing or not a non-empty string");
  if (!r.startsWith(D) || !ee.test(r.slice(D.length)))
    return t(`filestore_path must name one object directly under ${D}`);
  let n = e.artifact_sha256;
  if (typeof n !== "string" || !/^[0-9a-f]{64}$/.test(n))
    return t("artifact_sha256 is missing or not 64 lowercase hex chars");
  let o = e.bundle_size_bytes;
  if (typeof o !== "number" || !Number.isSafeInteger(o) || o <= 0)
    return t("bundle_size_bytes is missing or not a positive integer");
  if (o > W) return t(`bundle_size_bytes exceeds ${W}`);
  return {
    ok: !0,
    pointer: {
      workflowName:
        typeof e.workflow_name === "string"
          ? e.workflow_name
              .replace(/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g, "")
              .slice(0, 200)
          : "",
      filestorePath: r,
      artifactSha256: n,
      bundleSizeBytes: o,
    },
  };
}
function te(e, t) {
  let r = G("sha256").update(e).digest(),
    n = Buffer.from(t, "hex");
  return n.length === r.length && V(r, n);
}
var F = 1;
function re(e) {
  let t = (l) => ({ ok: !1, error: l });
  if (e.length < 1) return t("bundle is empty");
  if (e[0] !== F)
    return t(`unsupported bundle format version ${e[0]} (expected ${F})`);
  let r = 1,
    n = (l, d) => {
      if (r + 8 > e.length)
        return { ok: !1, error: `bundle truncated in ${d} length frame` };
      let k = e.readBigUInt64BE(r);
      if (((r += 8), k > BigInt(l)))
        return { ok: !1, error: `${d} frame exceeds ${l} bytes` };
      let h = Number(k);
      if (r + h > e.length)
        return { ok: !1, error: `bundle truncated in ${d} frame` };
      let w = e.subarray(r, r + h);
      return ((r += h), { ok: !0, buf: w });
    },
    o = n(MTt, "script");
  if (!o.ok) return t(o.error);
  if (o.buf.length === 0) return t("script frame is empty");
  let c = n(W, "args_json");
  if (!c.ok) return t(c.error);
  if (r !== e.length) return t(`bundle has ${e.length - r} trailing bytes`);
  return {
    ok: !0,
    script: o.buf.toString("utf8"),
    argsJson: c.buf.toString("utf8"),
  };
}
function Ugr(e = null) {
  return { ledger: new Map(), firstLaunch: null, restoredRecord: e };
}
var z = 2,
  ne = m(() =>
    it({
      event_uuid: s().refine((e) => Xn(e) !== null),
      dispatched_epoch: T().int().min(0).max(Number.MAX_SAFE_INTEGER),
      attempts: T().int().min(1).max(Number.MAX_SAFE_INTEGER),
      settled: O(),
    }),
  );
function Bgr(e) {
  let t = ne().safeParse(e);
  if (!t.success) return null;
  let r = C(t.data);
  if (!r.ok) return null;
  return {
    event_uuid: t.data.event_uuid,
    filestore_path: r.pointer.filestorePath,
    artifact_sha256: r.pointer.artifactSha256,
    bundle_size_bytes: r.pointer.bundleSizeBytes,
    workflow_name: r.pointer.workflowName,
    dispatched_epoch: t.data.dispatched_epoch,
    attempts: t.data.attempts,
    settled: t.data.settled,
  };
}
class H {
  slots = new Map();
  stash(e, t) {
    this.slots.set(e, t);
  }
  take(e) {
    let t = this.slots.get(e);
    return (this.slots.delete(e), t);
  }
}
var TDt = new j(() => new H()),
  oe = 5000;
async function B(e) {
  return (
    (await kt(
      Promise.resolve()
        .then(() => e.flushRecord())
        .catch(() => !1),
      e.recordFlushBoundMs ?? oe,
    )) === !0
  );
}
var se = [1000, 3000],
  ae = 1e4;
function I(e, t, r) {
  let n = {
    type: "system",
    subtype: Q,
    artifact_line: t,
    uuid: M(),
    session_id: e.getSessionId(),
  };
  if (r.launchUuid !== void 0) n.launch_uuid = r.launchUuid;
  if (r.artifactSha256 !== void 0) n.artifact_sha256 = r.artifactSha256;
  e.postEvent(n);
}
function K(e, t, r, n) {
  (I(e, Y9e(t, r), n),
    q("warn", "workflow_launch_failed", { layer: t }),
    i("tengu_workflow_launch_event", { ok: !1, layer: u(t) }));
}
function S(e, t, r, n) {
  (K(e, t, r, n), f("workflow_event_launch", t));
}
function v(e, t, r, n, o) {
  (S(e, r, n, o),
    e.state.ledger.set(t, { eventUuid: t, outcome: "failed-final" }),
    e.ackProcessed(t));
}
async function x(e, t, r, n, o) {
  let c = t.event_uuid;
  (e.state.ledger.set(c, { eventUuid: c, outcome: "failed-final" }),
    e.persistRecord({ ...t, settled: !0 }),
    await B(e),
    S(e, r, n, o),
    e.ackProcessed(c));
}
async function Y(e, t, r, n, o) {
  let { ledger: c } = e.state,
    l = t.eventUuid,
    d = (o?.attempts ?? 0) + 1,
    k = (_) => ({
      event_uuid: l,
      filestore_path: r.filestorePath,
      artifact_sha256: r.artifactSha256,
      bundle_size_bytes: r.bundleSizeBytes,
      workflow_name: r.workflowName,
      dispatched_epoch: e.getWorkerEpoch() ?? 0,
      attempts: d,
      settled: _,
    }),
    h = () => {
      if (e.state.firstLaunch === t) e.state.firstLaunch = null;
    },
    w = async (_, A) => {
      if ((h(), o)) {
        await x(e, o, _, A, n);
        return;
      }
      v(e, l, _, A, n);
    },
    b = Date.now(),
    L = e.fetchRetryWindowMs ?? ae,
    p = await e.fetchBundle(r.filestorePath),
    U = 1;
  for (let _ of e.fetchRetryDelaysMs ?? se) {
    if (p.ok || p.gated || Date.now() - b + _ >= L) break;
    (U++,
      q("warn", "workflow_launch_bundle_fetch_retry", { attempt: U }),
      await Z(_),
      (p = await e.fetchBundle(r.filestorePath)));
  }
  if (!p.ok) {
    if (p.gated) {
      await w("bundle-fetch", `bundle fetch gated: ${p.error}`);
      return;
    }
    if ((c.delete(l), h(), o)) {
      (q("warn", "workflow_launch_rescue_fetch_failed", {}),
        g("workflow_event_launch", "rescue_fetch_transient"));
      return;
    }
    (K(e, "bundle-fetch", `bundle fetch failed: ${p.error}`, n),
      g("workflow_event_launch", "bundle_fetch_transient"));
    return;
  }
  let R = p.buf;
  if (R.byteLength > W || R.byteLength !== r.bundleSizeBytes) {
    await w(
      "payload-digest-mismatch",
      `staged bundle is ${R.byteLength} bytes, event pinned ${r.bundleSizeBytes}`,
    );
    return;
  }
  if (!te(R, r.artifactSha256)) {
    await w(
      "payload-digest-mismatch",
      "staged bundle sha256 does not match the artifact_sha256 the event pinned",
    );
    return;
  }
  let E = re(R);
  if (!E.ok) {
    await w("launch-payload", E.error);
    return;
  }
  let P;
  if (E.argsJson !== "")
    try {
      P = JSON.parse(E.argsJson);
    } catch (_) {
      await w(
        "args-parse",
        `args_json is not valid JSON: ${_ instanceof Error ? _.message : String(_)}`,
      );
      return;
    }
  ((e.state.firstLaunch = t), e.persistRecord(k(!1)));
  let X = await B(e);
  if (o && !X) {
    (c.delete(l),
      h(),
      q("warn", "workflow_launch_rescue_uncounted", {}),
      g("workflow_event_launch", "rescue_record_unconfirmed"));
    return;
  }
  let N = M();
  (TDt.of(e.host).stash(N, {
    script: E.script,
    args: P,
    postResultLine: (_) => I(e, _, n),
    onRunSettled: async (_) => {
      if (
        ((t.outcome = _ ? "executed" : "run-failed"),
        e.persistRecord(k(!0)),
        !(await B(e)))
      )
        e.persistRecord(k(!0));
    },
  }),
    e.prependUserMessage(`/workflow-launch-exec ${N}`),
    e.ackProcessed(l),
    i("tengu_workflow_launch_event", { ok: !0, attempt: d }),
    y("workflow_event_launch"),
    q("info", "workflow_launch_dispatched", { attempt: d }));
}
function J(e, t) {
  let r = { eventUuid: t.event_uuid, outcome: "failed-final" };
  (e.state.ledger.set(t.event_uuid, r),
    (e.state.firstLaunch ??= r),
    e.persistRecord({ ...t, settled: !0 }),
    e.ackProcessed(t.event_uuid),
    q("warn", "workflow_launch_attempts_spent", { attempts: t.attempts }),
    g("workflow_event_launch", "attempts_spent"));
}
async function jgr(e, t) {
  let r = typeof e.uuid === "string" ? e.uuid : void 0;
  if (!r) {
    S(t, "launch-payload", "event has no uuid", {});
    return;
  }
  let { ledger: n } = t.state,
    o = n.get(r);
  if (o) {
    if (o.outcome !== "pending") t.ackProcessed(r);
    return;
  }
  if (
    !t.isRemoteTransport() ||
    !a.CLAUDE_CODE_REMOTE ||
    !a.CLAUDE_CODE_REMOTE_SESSION_ID
  ) {
    S(
      t,
      "not-remote-session",
      "workflow_launch received outside a remote (CCR) session",
      { launchUuid: r },
    );
    return;
  }
  let c = C(e);
  if (!c.ok) {
    v(t, r, "launch-payload", c.error, { launchUuid: r });
    return;
  }
  let l = c.pointer,
    d = { launchUuid: r, artifactSha256: l.artifactSha256 },
    k = t.state.restoredRecord,
    h = k && k.event_uuid === r ? k : null;
  if (h) {
    if (h.settled) {
      let p = { eventUuid: r, outcome: "executed" };
      (n.set(r, p),
        (t.state.firstLaunch ??= p),
        t.ackProcessed(r),
        q("info", "workflow_launch_redelivery_settled", {}));
      return;
    }
    if (h.attempts >= z) {
      J(t, h);
      return;
    }
  }
  let w = lIe({ serverAuthoredCarrier: !0 });
  if (w) {
    if (h) {
      await x(t, h, "policy-gate", w, d);
      return;
    }
    v(t, r, "policy-gate", w, d);
    return;
  }
  let { firstLaunch: b } = t.state;
  if (b && b.eventUuid !== r) {
    v(
      t,
      r,
      "launch-protocol",
      "a second distinct workflow_launch event arrived in this session; at most one launch per session is permitted",
      d,
    );
    return;
  }
  let L = { eventUuid: r, outcome: "pending" };
  (n.set(r, L), (t.state.firstLaunch = L), await Y(t, L, l, d, h));
}
async function Wgr(e) {
  let t = e.state.restoredRecord;
  if (!t) return;
  if (
    !e.isRemoteTransport() ||
    !a.CLAUDE_CODE_REMOTE ||
    !a.CLAUDE_CODE_REMOTE_SESSION_ID
  )
    return;
  if (t.settled) {
    q("info", "workflow_launch_resume_skipped", { reason: "settled" });
    return;
  }
  let r = e.getWorkerEpoch();
  if (r === void 0 || t.dispatched_epoch >= r) {
    q("info", "workflow_launch_resume_skipped", {
      reason: "not_a_later_epoch",
    });
    return;
  }
  let n = e.getDispatchedDigest();
  if (n === void 0 || !/^[0-9a-f]{64}$/.test(n) || n !== t.artifact_sha256) {
    q("info", "workflow_launch_resume_skipped", {
      reason: n === void 0 ? "no_server_digest" : "digest_differs",
    });
    return;
  }
  let { ledger: o } = e.state;
  if (o.has(t.event_uuid) || e.state.firstLaunch) return;
  if (t.attempts >= z) {
    J(e, t);
    return;
  }
  let c = { launchUuid: t.event_uuid, artifactSha256: t.artifact_sha256 },
    l = lIe({ serverAuthoredCarrier: !0 });
  if (l) {
    await x(e, t, "policy-gate", l, c);
    return;
  }
  let d = { eventUuid: t.event_uuid, outcome: "pending" };
  (o.set(t.event_uuid, d),
    (e.state.firstLaunch = d),
    q("info", "workflow_launch_resuming", { attempt: t.attempts + 1 }),
    await Y(
      e,
      d,
      {
        workflowName: t.workflow_name,
        filestorePath: t.filestore_path,
        artifactSha256: t.artifact_sha256,
        bundleSizeBytes: t.bundle_size_bytes,
      },
      c,
      t,
    ));
}
export { $gr, Ugr, Bgr, TDt, jgr, Wgr };
