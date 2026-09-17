// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, RMn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "../共享小工具-未细化/async-timeout-utils.js";
import { Et, b, z, ae, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../共享小工具-未细化/lazy-value.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { writeDiagnosticsEvent } from "../共享小工具-未细化/diagnostics-log.js";
import { O_NOFOLLOW_NONBLOCK_FLAGS } from "../共享小工具-未细化/open-flags.js";
import { writeFileAtomic } from "../安全文件系统(FS加固)/atomic-file-write.js";
import { Cs, hf } from "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import { s, T, v, c, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var H = 30000;
function ce() {
  return {
    activityCallback: null,
    refcount: 0,
    mainLoopRefcount: 0,
    activeReasons: new Map(),
    oldestActivityStartedAt: null,
    heartbeatTimer: null,
    idleTimer: null,
    cleanupHandle: null,
  };
}
var P = "cli",
  ue = 1000;
class F {
  activityKey = () => P;
  mainLoopActivityListener = null;
  nestedChainDropListener = null;
  statesByKey = new Map();
  evictedKeys = new Set();
  setActivityKey(e) {
    this.activityKey = e;
  }
  currentKey() {
    return this.activityKey();
  }
  stateCount() {
    return this.statesByKey.size;
  }
  currentStateOrCreate() {
    let e = this.activityKey();
    if (this.evictedKeys.has(e)) return null;
    let t = this.statesByKey.get(e);
    if (!t) ((t = ce()), this.statesByKey.set(e, t));
    return t;
  }
  currentStateOrNull() {
    return this.statesByKey.get(this.activityKey()) ?? null;
  }
  reset() {
    for (let e of [...this.statesByKey.keys()]) this.evictKey(e);
    (this.evictedKeys.clear(),
      (this.activityKey = () => P),
      (this.mainLoopActivityListener = null),
      (this.nestedChainDropListener = null));
  }
  evictKey(e) {
    if ((this.evictedKeys.add(e), this.evictedKeys.size > ue)) {
      let r = this.evictedKeys.values().next().value;
      if (r !== void 0) this.evictedKeys.delete(r);
    }
    let t = this.statesByKey.get(e);
    if (!t) return;
    if (t.heartbeatTimer !== null) clearInterval(t.heartbeatTimer);
    if (t.idleTimer !== null) clearTimeout(t.idleTimer);
    (t.cleanupHandle?.(), this.statesByKey.delete(e));
  }
}
var le = new j(() => new F());
function p() {
  return le.of(B().host);
}
function G(e) {
  (I(e),
    (e.heartbeatTimer = setInterval(
      (t) => {
        if (
          (writeDiagnosticsEvent("debug", "session_keepalive_heartbeat", { refcount: t.refcount }),
          a.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES)
        )
          t.activityCallback?.();
      },
      H,
      e,
    )));
}
function de(e) {
  if ((I(e), e.activityCallback === null)) return;
  e.idleTimer = setTimeout(
    (t) => {
      (writeDiagnosticsEvent("info", "session_idle_30s"), (t.idleTimer = null));
    },
    H,
    e,
  );
}
function I(e) {
  if (e.idleTimer !== null) (clearTimeout(e.idleTimer), (e.idleTimer = null));
}
function setActivityCallback(e) {
  let t = p().currentStateOrCreate();
  if (!t) return;
  if (((t.activityCallback = e), t.refcount > 0 && t.heartbeatTimer === null))
    G(t);
}
function clearActivityCallback() {
  let e = p().currentStateOrNull();
  if (!e) return;
  if (((e.activityCallback = null), e.heartbeatTimer !== null))
    (clearInterval(e.heartbeatTimer), (e.heartbeatTimer = null));
  I(e);
}
function sendActivityHeartbeat() {
  let e = p().currentStateOrNull();
  if (e && a.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES) e.activityCallback?.();
}
function setMainLoopRefcountListener(e) {
  p().mainLoopActivityListener = e;
}
function setNestedChainDropListener(e) {
  p().nestedChainDropListener = e;
}
function notifyNestedChainDropped(e) {
  p().nestedChainDropListener?.(e);
}
function getMainLoopRefcount() {
  return p().currentStateOrNull()?.mainLoopRefcount ?? 0;
}
function isMainLoopActive() {
  return RMn() || getMainLoopRefcount() > 0;
}
function beginActivity(e, t) {
  let r = p(),
    i = r.currentStateOrCreate();
  if (!i) return;
  if ((i.refcount++, t === void 0))
    (i.mainLoopRefcount++, r.mainLoopActivityListener?.(i.mainLoopRefcount));
  if (
    (i.activeReasons.set(e, (i.activeReasons.get(e) ?? 0) + 1),
    i.refcount === 1)
  ) {
    if (
      ((i.oldestActivityStartedAt = Date.now()),
      i.activityCallback !== null && i.heartbeatTimer === null)
    )
      G(i);
  }
  if (i.cleanupHandle === null) {
    let o = r.activityKey();
    i.cleanupHandle = Et(async () => {
      writeDiagnosticsEvent("info", "session_activity_at_shutdown", {
        owner_key: o,
        refcount: i.refcount,
        active: Object.fromEntries(i.activeReasons),
        oldest_activity_ms:
          i.refcount > 0 && i.oldestActivityStartedAt !== null
            ? Date.now() - i.oldestActivityStartedAt
            : null,
      });
    });
  }
}
function endActivity(e, t) {
  let r = p(),
    i = r.currentStateOrNull();
  if (!i) return;
  if (i.refcount > 0) i.refcount--;
  if (t === void 0)
    if (i.mainLoopRefcount > 0)
      (i.mainLoopRefcount--, r.mainLoopActivityListener?.(i.mainLoopRefcount));
    else writeDiagnosticsEvent("warn", "session_activity_main_loop_underflow", { reason: e });
  let o = (i.activeReasons.get(e) ?? 0) - 1;
  if (o > 0) i.activeReasons.set(e, o);
  else i.activeReasons.delete(e);
  if (i.refcount === 0 && i.heartbeatTimer !== null)
    (clearInterval(i.heartbeatTimer), (i.heartbeatTimer = null), de(i));
}
function computeRetryDelayMs(e, t, r = 32000) {
  let i = Math.min(500 * Math.pow(2, e - 1), r),
    o = Math.round(i + Math.random() * 0.25 * i);
  if (t) {
    let u = parseInt(t, 10);
    if (!isNaN(u)) return Math.max(u * 1000, o);
  }
  return o;
}
import { constants } from "fs";
import { lstat, open as Re, unlink } from "fs/promises";
import { verify, X509Certificate as U } from "crypto";
var ye = { "managed-settings": 86400, "policy-limits": 86400 },
  pe = 300,
  C = 16384,
  ge = 8192,
  Se = 300000,
  ve = 3,
  he = 86400000,
  _e = /^[A-Za-z0-9_-]+$/,
  be = /^[A-Za-z0-9+/]+={0,2}$/,
  Ae = createLazyValue(() =>
    c({
      alg: k("ES256"),
      typ: k("cc-signed-cache+jws"),
      kid: s(),
      x5c: v(s().regex(be)).min(1).max(ve),
    }),
  ),
  Ee = createLazyValue(() =>
    c({
      v: k(1),
      typ: s(),
      aud: s(),
      iat: T(),
      sha: s(),
      sub: s().optional(),
      ws: s().optional(),
    }),
  );
function verifySignedCacheJws({ jws: e, ...t }) {
  if (!e) return { result: "unsigned" };
  let r = {};
  try {
    return { result: Ce(e, t, r), ...r };
  } catch {
    return { result: "malformed", ...r };
  }
}
function Ce(
  e,
  {
    kind: t,
    orgUuid: r,
    accountUuid: i,
    workspaceUuid: o,
    bodySha: u,
    highWaterIat: d,
    nowMs: L,
    roots: D,
  },
  g,
) {
  if (e.length > C) return "malformed";
  let [_, A, R, ...ie] = e.split(".");
  if (
    _ === void 0 ||
    A === void 0 ||
    R === void 0 ||
    ie.length > 0 ||
    ![_, A, R].every((f) => _e.test(f))
  )
    return "malformed";
  let N = Ae().safeParse(Y(_)),
    y = Ee().safeParse(Y(A));
  if (!N.success || !y.success) return "malformed";
  ((g.issuedAt = y.data.iat),
    (g.ageSeconds = Math.floor(L / 1000) - y.data.iat),
    (g.wsUnanchored = o === void 0 && y.data.ws !== void 0));
  let O = N.data.x5c.map((f) => Buffer.from(f, "base64"));
  if (O.some((f) => f.length > ge)) return "malformed";
  let [ne, ...re] = O,
    S = X(ne);
  if (
    ((g.certDaysLeft = Math.floor((Date.parse(S.validTo) - L) / he)),
    D.length === 0)
  )
    return "no_embedded_root";
  let h = [S, ...re.map(X)];
  for (let f = 0; f + 1 < h.length; f++)
    if (!V(h[f], h[f + 1])) return "bad_chain";
  let oe = h.at(-1),
    E;
  for (let f of D) {
    let M = new U(f.pem);
    if (V(oe, M)) {
      E = { root: f, certificate: M };
      break;
    }
  }
  if (E === void 0) return "bad_chain";
  let se = y.data.iat * 1000;
  if (![...h, E.certificate].every((f) => we(f, se))) return "cert_expired";
  if (!Te(S.subjectAltName ?? "").includes(`URI:${E.root.marker}`))
    return "no_marker";
  if (
    S.publicKey.asymmetricKeyType !== "ec" ||
    S.publicKey.asymmetricKeyDetails?.namedCurve !== "prime256v1"
  )
    return "bad_signature";
  if (
    !verify(
      "sha256",
      Buffer.from(`${_}.${A}`, "utf8"),
      { key: S.publicKey, dsaEncoding: "ieee-p1363" },
      Buffer.from(R, "base64url"),
    )
  )
    return "bad_signature";
  if (y.data.typ !== t) return "wrong_type";
  if (y.data.aud !== r) return "aud_mismatch";
  if (y.data.sub !== i) return "sub_mismatch";
  if (o !== void 0 && y.data.ws !== o) return "ws_mismatch";
  if (y.data.sha !== u) return "sha_mismatch";
  if (g.ageSeconds < -pe) return "future_iat";
  if (g.ageSeconds > ye[t]) return "stale";
  if (d !== void 0 && y.data.iat < d) return "rollback";
  return "valid";
}
function Te(e) {
  let t = [],
    r = "",
    i = !1;
  for (let o = 0; o < e.length; o++) {
    let u = e[o];
    if (i) {
      if (u === "\\" && o + 1 < e.length) {
        ((r += u + e[o + 1]), o++);
        continue;
      }
      if (((r += u), u === '"')) i = !1;
      continue;
    }
    if (u === '"') {
      ((i = !0), (r += u));
      continue;
    }
    if (u === ",") {
      (t.push(r), (r = ""));
      let d = o + 1;
      while (d < e.length && /\s/.test(e[d])) d++;
      o = d - 1;
      continue;
    }
    r += u;
  }
  if (i) return [];
  return (t.push(r), t);
}
function V(e, t) {
  return t.ca && Boolean(e.checkIssued(t)) && e.verify(t.publicKey);
}
function X(e) {
  let t = new U(e);
  if (t.raw.length !== e.length)
    throw Error("trailing bytes after x5c certificate DER");
  return t;
}
function we(e, t) {
  return t >= Date.parse(e.validFrom) - Se && t <= Date.parse(e.validTo);
}
function Y(e) {
  try {
    return z(Buffer.from(e, "base64url").toString("utf8"));
  } catch {
    return;
  }
}
var Q = "x-claude-code-signature",
  Ke = C + 256,
  xe = 3,
  ke = 2,
  Le = 15,
  De = {
    realpath: !1,
    retries: { retries: 6, factor: 2, minTimeout: 20, maxTimeout: 320 },
    stale: 1e4,
  },
  Ne = createLazyValue(() => c({ jws: s().min(1), receivedAt: T() })),
  Oe = createLazyValue(() =>
    c({
      typ: s(),
      aud: s().optional(),
      sub: s().optional(),
      ws: s().optional(),
      iat: T(),
    }),
  );
function getSignatureSidecarPath(e) {
  return `${e}.signature.json`;
}
function getSignatureIatSidecarPath(e) {
  return `${e}.signature-iat.json`;
}
function extractSignatureHeader(e) {
  let t = e && Q in e ? e[Q] : void 0;
  return typeof t === "string" && t.length > 0 && t.length <= C ? t : void 0;
}
async function writeSignatureSidecar(e, t) {
  if (t === void 0) {
    await x(getSignatureSidecarPath(e));
    return;
  }
  let r = { jws: t, receivedAt: Date.now() };
  await Pe(getSignatureSidecarPath(e), r);
}
async function deleteSignatureSidecars(e) {
  await Promise.all([x(getSignatureSidecarPath(e)), x(getSignatureIatSidecarPath(e))]);
}
async function XJe(e, t) {
  if (!t && (await ze(e))) return !1;
  return (await deleteSignatureSidecars(e), !0);
}
async function ze(e) {
  try {
    return (await lstat(e), !0);
  } catch (t) {
    return !W(t);
  }
}
async function readStoredSignature(e) {
  return He(getSignatureSidecarPath(e), Ne());
}
async function readAcceptedSignatureIat(e, t) {
  return ee(getSignatureIatSidecarPath(e), t, !1);
}
async function ee(e, t, r) {
  let i = Oe(),
    o = await w(e, i);
  for (let d = 0; o.kind === "unparsable" && d < ke; d++)
    (await sleep(Le), (o = await w(e, i)));
  if (o.kind === "unparsable" && !r) {
    let d = await te(e);
    try {
      o = await w(e, i);
    } finally {
      await hf(d, "Signed cache: accepted-iat lock");
    }
  }
  let u = o.kind === "ok" ? o.value : null;
  return u !== null &&
    u.typ === t.typ &&
    u.aud === t.aud &&
    u.sub === t.sub &&
    u.ws === t.ws
    ? u.iat
    : void 0;
}
async function te(e) {
  try {
    return await Cs(e, {
      ...De,
      onCompromised: (t) =>
        n(`Signed cache: accepted-iat lock compromised - ${l(t)}`),
    });
  } catch (t) {
    n(
      `Signed cache: accepted-iat lock unavailable, proceeding unlocked - ${l(t)}`,
    );
    return;
  }
}
async function recordAcceptedSignatureIat(e, t, r) {
  let i = getSignatureIatSidecarPath(e),
    o = await te(i);
  try {
    for (let u = 0; u < xe; u++) {
      let d = await ee(i, t, o !== void 0);
      if (d !== void 0 && d >= r) return;
      if (!(await Me(i, { ...t, iat: r }))) return;
    }
  } finally {
    await hf(o, "Signed cache: accepted-iat lock");
  }
}
async function Me(e, t) {
  try {
    return (await writeFileAtomic(e, b(t), 384), !0);
  } catch (r) {
    return (n(`Signed cache: failed to write ${e} - ${l(r)}`), !1);
  }
}
async function Pe(e, t) {
  try {
    if (O_NOFOLLOW_NONBLOCK_FLAGS === 0 && (await Be(e))) return;
    let r = await Re(e, constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | O_NOFOLLOW_NONBLOCK_FLAGS, 384);
    try {
      await r.writeFile(b(t), { encoding: "utf-8" });
    } finally {
      await r.close();
    }
  } catch (r) {
    n(`Signed cache: failed to write ${e} - ${l(r)}`);
  }
}
async function Be(e) {
  try {
    return (await lstat(e)).isSymbolicLink();
  } catch {
    return !1;
  }
}
async function x(e) {
  try {
    await unlink(e);
  } catch (t) {
    if (!W(t)) n(`Signed cache: failed to remove ${e} - ${l(t)}`);
  }
}
async function w(e, t) {
  try {
    let r = await ae().readFileFdGated(e, Ke);
    if (r === null) return { kind: "absent" };
    let i = t.safeParse(z(r.content));
    return i.success ? { kind: "ok", value: i.data } : { kind: "unparsable" };
  } catch {
    return { kind: "unparsable" };
  }
}
async function He(e, t) {
  let r = await w(e, t);
  return r.kind === "ok" ? r.value : null;
}
export {
  setActivityCallback,
  clearActivityCallback,
  sendActivityHeartbeat,
  setMainLoopRefcountListener,
  setNestedChainDropListener,
  notifyNestedChainDropped,
  getMainLoopRefcount,
  isMainLoopActive,
  beginActivity,
  endActivity,
  computeRetryDelayMs,
  verifySignedCacheJws,
  getSignatureSidecarPath,
  getSignatureIatSidecarPath,
  extractSignatureHeader,
  writeSignatureSidecar,
  deleteSignatureSidecars,
  XJe,
  readStoredSignature,
  readAcceptedSignatureIat,
  recordAcceptedSignatureIat,
};
