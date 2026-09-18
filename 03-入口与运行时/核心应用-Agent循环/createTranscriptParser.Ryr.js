// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { B, Gt, K, Xn, fy, he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isRecord } from "../../01-核心基础设施/核心工具-类型与数值/is-record.js";
import { Cu, Io, Zt, hm, le, nt } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { isPlainObject } from "../../01-核心基础设施/核心工具-未归类/chunk-1w1x0pyk.js";
import { MAX_LEDGER_ARTIFACTS, logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { createStore } from "../../01-核心基础设施/文件存储-原子写入/state-store.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { fromEnum, fromEnumOpt, lit as S } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { Ie, Le, rs } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isByteViewUnsupportedFailure, jsonParse, jsonParseUntraced, logForDebugging, startSlowOperationSpan } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { validateStorageKey } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { countMatching } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { closeSync as $ge, openSync as Uge, readSync as LZ } from "fs";
import { open as vj, readFile as Mj, stat as Vx } from "fs/promises";
import { isEndConversationDisabled } from "../../01-核心基础设施/核心工具-未归类/ended-by-model.js";
import { sanitizeLoneSurrogates } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { normalizeDeclaredDialogKinds } from "../../02-功能模块/远程控制-Bridge/chunk-5ne99rq3.js";
import { MAX_LISTING_PAGES, MAX_SANITIZED_LENGTH, SKIP_PRECOMPACT_THRESHOLD, dirBelongsToProject, findProjectDirs, getProjectKey, isUuidShaped, legacyDerivedProjectKey } from "../../02-功能模块/会话-历史-恢复/chunk-mkmy4cx2.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { A, Bp, Kd, Rt, l, vB } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Nge } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { createRealPathResolver, createTranscriptSource, resolveTranscriptLocator } from "../../01-核心基础设施/核心工具-未归类/hover-rest-transcript.js";
import { STORAGE_KEYS, isValidPathSegment } from "../../02-功能模块/Teammates团队/storage-keys.js";
import { basename as $Z, dirname as kv, join as Wp } from "path";
import { getProjectDir, getProjectsDir as Pl } from "../../02-功能模块/Teammates团队/transcript-paths.js";

var Vbr = new Set(["user", "assistant", "attachment", "system"]);


function fhe(e) {
  return isRecord(e) && typeof e.type === "string" && Vbr.has(e.type);
}


var Jbr = 268435456,
  WAt = Jbr;


var phe = createLazyValue(() => {
  let e = Zt().nonnegative().finite();
  return nt({
    type: Cu("cost-state"),
    sessionId: le(),
    totalCostUSD: e,
    totalAPIDuration: e,
    totalAPIDurationWithoutRetries: e,
    totalToolDuration: e,
    totalLinesAdded: e,
    totalLinesRemoved: e,
    totalDuration: e,
    startTime: e,
    modelUsage: hm(
      le().regex(/^[^\p{Cc}\p{Cf}]+$/u),
      nt({
        inputTokens: e,
        outputTokens: e,
        thinkingTokens: e.optional(),
        cacheReadInputTokens: e,
        cacheCreationInputTokens: e,
        webSearchRequests: e,
        costUSD: e,
      }),
    ),
    hasUnknownModelCost: Io().optional(),
  });
});


function lst() {
  return Object.create(null);
}


function n7(e, t, r) {
  if (!isPlainObject(e) || !Array.isArray(t)) return;
  let o,
    d = (_) => {
      if (!Object.hasOwn(e, _)) return;
      let E = e[_];
      if (!isPlainObject(E)) return;
      ((o ??= lst()), (o[_] = E));
    },
    p = [];
  for (let _ of t)
    if (isPlainObject(_) && _.type === "tool_use" && typeof _.id === "string")
      (p.push(_.id), d(_.id));
  if (Array.isArray(r))
    for (let _ of r) {
      if (!isPlainObject(_)) continue;
      let E = _.id;
      if (typeof E === "string" && p.some((C) => ZTn(C, E))) d(E);
    }
  return o;
}


var Wko = /^_\d+$/;


function ZTn(e, t) {
  return e.startsWith(t) && Wko.test(e.slice(t.length));
}


function isCompactBoundaryMessage(e) {
  return e?.type === "system" && e.subtype === "compact_boundary";
}


var lje = Buffer.from('{"type":"artifact-autoreact-ledger"'),
  dhr = Buffer.from('{"type":"artifact-autoreact-ledger","v":1,"sessionId":"'),
  fhr = 36;


function Sge(e, t, r) {
  let o = t;
  while (o < r && e[o] === 0) o++;
  return o;
}


function wge(e, t = 0, r = e.length) {
  let o = Sge(e, t, r);
  return (
    r - o >= lje.length &&
    e.compare(lje, 0, lje.length, o, o + lje.length) === 0
  );
}


function RCt(e) {
  let t = dhr.length;
  if (e.length < t + fhr || e.compare(dhr, 0, t, 0, t) !== 0) return null;
  let r = e.toString("latin1", t, t + fhr);
  return Xn(r) === null ? null : r;
}


function PCt(e, t) {
  let { artifacts: r } = e;
  if (typeof r !== "object" || r === null || Array.isArray(r)) return e;
  let o = new Map();
  for (let [d, p] of Object.entries(r)) o.set(d, ACt(p, t));
  return { ...e, artifacts: Object.fromEntries(o) };
}


function ACt(e, t) {
  return typeof e === "object" && e !== null && !Array.isArray(e)
    ? {
        ...e,
        stampHighWater: null,
        everBaselined: !1,
        threads: [],
        ...(t && { interrupted: !0 }),
      }
    : e;
}


var Iys = 300000;


function cje(e) {
  let t = e?.savedAt;
  return typeof t === "number" && Number.isFinite(t) && t <= Date.now() + Iys
    ? t
    : 0;
}


function phr(e) {
  return e?.interrupted === !0;
}


function mhr(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return 0;
  let t = e;
  if (t.interrupted === !0) return 2;
  let r =
    t.threads === void 0 ||
    (Array.isArray(t.threads) && t.threads.length === 0);
  return t.stampHighWater === null && r && t.everBaselined === !1 ? 1 : 0;
}


class fje {
  sessions = new Map();
  unnamedTornBefore = -1;
  add(e, t) {
    if (typeof e !== "object" || e === null) return;
    let r = e;
    if (
      r.type !== "artifact-autoreact-ledger" ||
      typeof r.sessionId !== "string"
    )
      return;
    let o =
        typeof r.accountUuid === "string" ? r.accountUuid.toLowerCase() : null,
      d = this.sessions.get(r.sessionId);
    if (d === void 0)
      ((d = {
        envelope: {},
        account: null,
        records: new Map(),
        tornBefore: -1,
      }),
        this.sessions.set(r.sessionId, d));
    else if (d.account !== null && o !== null && o !== d.account)
      d.records.clear();
    let { artifacts: p, ..._ } = r;
    if (
      ((d.envelope = _),
      (d.account = o ?? d.account),
      typeof p !== "object" || p === null || Array.isArray(p))
    )
      return;
    for (let [E, C] of Object.entries(p)) {
      let I = d.records.get(E);
      if (I !== void 0) {
        let D = cje(I.record),
          N = cje(C);
        if (N < D || (N === D && mhr(C) < mhr(I.record))) continue;
      }
      d.records.set(E, { record: C, src: t });
    }
  }
  torn(e, t) {
    if (e === null) {
      this.unnamedTornBefore = t;
      return;
    }
    let r = this.sessions.get(e);
    if (r !== void 0) r.tornBefore = t;
  }
  finish(e) {
    let t = new Map();
    for (let [r, o] of this.sessions) {
      let d = [...o.records.entries()]
          .sort(
            ([, _], [, E]) =>
              Number(phr(E.record)) - Number(phr(_.record)) ||
              cje(E.record) - cje(_.record),
          )
          .slice(0, MAX_LEDGER_ARTIFACTS),
        p = new Map();
      for (let [_, { record: E, src: C }] of d) {
        let I = C < Math.max(o.tornBefore, this.unnamedTornBefore);
        p.set(_, I ? ACt(E, !0) : e ? ACt(E, !1) : E);
      }
      t.set(r, {
        ...o.envelope,
        type: "artifact-autoreact-ledger",
        sessionId: r,
        accountUuid: o.account,
        artifacts: Object.fromEntries(p),
      });
    }
    return t;
  }
}


class UCt {
  failuresByFile = new Map();
  failureSeq = 0;
  abandonedPaths = new Set();
  abandonedPrefixes = new Set();
  abandonedPendingPaths = new Set();
  latchingEnabled = !0;
  liveServing = null;
  degradedStore = createStore(null);
}


function isTranscriptMessage(e) {
  return fhe(e);
}


function s_s(e) {
  return isRecord(e);
}


function Phr(e) {
  if (!Xd().claimLegacyProgressProbe(e)) return;
  logEvent("tengu_dead_probe_legacy_progress_bridge", { signal: fromEnum(e) });
}


function i_s(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "type" in e &&
    e.type === "progress" &&
    "uuid" in e &&
    typeof e.uuid === "string"
  );
}


var MAX_TRANSCRIPT_READ_BYTES = 52428800,
  INDEX_HEAD_SCAN_BYTES = 256,
  INDEX_BOUNDARY_SCAN_BYTES = 4096,
  INDEX_LAST_PROMPT_SCAN_BYTES = 1024,
  LAST_PROMPT_PREFIX_SCAN_BYTES = 64;


class axt {
  getSessionId;
  project = null;
  exitReStampRan = !1;
  localGcEnabled = !1;
  forkContextHydrationCache = new Map();
  forkContextHydrationsInFlight = new Map();
  warnedUnchainedSessions = new Set();
  legacyProgressProbeFired = new Set();
  relocationParkedAppends = null;
  relocationParkedPath = null;
  liveSuppressionProbe = void 0;
  writerHealth = new UCt();
  exitReStampProviders = new Set();
  foreignExitReStampProviders = new Set();
  takenForeignExitLines = new Set();
  exitDrains = new Set();
  sessionAgentNameChanged = Le();
  sessionTitleChanged = Le();
  sessionFileMaterialized = Le();
  filelessResumeUuids = void 0;
  sessionMessages = rs(
    async (e, t) => {
      let r = [];
      try {
        let { messages: p } = await gxt(e, void 0, t);
        r = p.keys();
      } catch (p) {
        logForDebugging(
          `getSessionMessages: loadSessionFile failed: ${p instanceof Error ? p.message : String(p)}`,
          { level: "error" },
        );
      }
      let o = this.filelessResumeUuids,
        d = new Set(o?.sessionId === e ? o.uuids : void 0);
      for (let p of r) d.add(p);
      return d;
    },
    (e) => e,
  );
  constructor(e) {
    this.getSessionId = e;
  }
  setLocalGcEnabled(e) {
    this.localGcEnabled = e;
  }
  claimExitReStamp() {
    if (this.exitReStampRan) return !1;
    return ((this.exitReStampRan = !0), !0);
  }
  exitReStampDone() {
    return this.exitReStampRan;
  }
  claimLegacyProgressProbe(e) {
    if (this.legacyProgressProbeFired.has(e)) return !1;
    return (this.legacyProgressProbeFired.add(e), !0);
  }
  openAppendRelocationBracket(e) {
    ((this.relocationParkedAppends ??= []), (this.relocationParkedPath = e));
  }
  closeAppendRelocationBracket() {
    let e = this.relocationParkedAppends;
    return (
      (this.relocationParkedAppends = null),
      (this.relocationParkedPath = null),
      e
    );
  }
  setLiveSuppressionProbe(e) {
    this.liveSuppressionProbe = e;
  }
  clearSessionMessagesCache() {
    this.sessionMessages.cache.clear?.();
  }
  primeSessionMessagesCache(e, t) {
    let r = this.sessionMessages.cache;
    if (!r.has(e)) r.set(e, Promise.resolve(new Set(t)));
  }
  primeFilelessResume(e, t) {
    let r = new Set(t);
    ((this.filelessResumeUuids = { sessionId: e, uuids: r }),
      this.primeSessionMessagesCache(e, r));
  }
}


var transcriptStores = new Gt(() => ({ current: new axt(() => K()) }));


function Xd() {
  return transcriptStores.of(B()).current;
}


function FZ(e) {
  return validateStorageKey(e) === void 0 ? e : void 0;
}


function b_s(e) {
  return (
    e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === "EFBIG"
  );
}


var S_s = 4194304,
  Mge = WAt;


function Lhr() {
  return Object.assign(
    Error("loadTranscriptFile: the paged transcript is too large"),
    { code: "EFBIG" },
  );
}


async function Fhr(e, t, r) {
  let o;
  try {
    o = await e.stat(t);
  } catch (C) {
    if (r !== void 0) return;
    throw C;
  }
  if (!o.ok) {
    if (o.error.code === "NotFound") return null;
    if (r !== void 0) return;
    return { failure: o.error };
  }
  if (r !== void 0 && o.value.size > r) return;
  if (o.value.size > Mge) throw Lhr();
  let d = Buffer.allocUnsafe(Math.min(o.value.size, Mge)),
    p = 0,
    _ = 0,
    E;
  for (;;) {
    let C = await e.readRecords(t, {
      order: "forward",
      maxBytes: S_s,
      ...(E !== void 0 && { fromSeq: E }),
    });
    if (!C.ok) {
      if (C.error.code === "NotFound" && E === void 0) return null;
      return { failure: C.error };
    }
    for (let D of C.value.items) {
      let N = p + D.data.byteLength;
      if (N > Mge) throw Lhr();
      if (N > d.length) {
        let F = Buffer.allocUnsafe(Math.min(Math.max(N, d.length * 2), Mge));
        (d.copy(F, 0, 0, p), (d = F));
      }
      (d.set(D.data, p), (p = N), _++);
    }
    let I = C.value.nextSeq;
    if (I === void 0) break;
    if (E !== void 0 && I <= E)
      throw Error("loadTranscriptFile: the record cursor did not advance");
    E = I;
  }
  return (
    logForDebugging(`loadTranscriptFile: read ${_} records (${p} bytes) by page`),
    {
      bytes: d.subarray(0, p),
      mtimeMs: o.value.mtimeMs,
      storedBytes: Math.max(o.value.size, p),
      tornTailBytes: o.value.tornTailBytes ?? 0,
    }
  );
}


function O_s(e) {
  let t,
    r = -1,
    o = -1,
    d = new Map(),
    p = 0;
  for (let F of e.values()) {
    if ((d.set(F.uuid, p), isCompactBoundaryMessage(F))) {
      o = p;
      let U = F.compactMetadata;
      if (U?.preservedMessages || U?.preservedSegment) ((t = U), (r = p));
    }
    p++;
  }
  if (!t) return;
  let _ = r === o,
    E = _ ? D_s(t, e) : void 0;
  if (_ && !E) return;
  let C = E && E.preserved.uuids.length > 0 ? E.preserved : void 0;
  if (C?.uuids.some((F) => !e.has(F))) {
    logEvent("tengu_relink_walk_broken", {
      source: fromEnumOpt(E?.source),
      listed: C.uuids.length,
      present: countMatching(C.uuids, (F) => e.has(F)),
      anchorInTranscript: e.has(C.anchorUuid),
      transcriptSize: e.size,
    });
    return;
  }
  let I = C?.uuids ?? [],
    D = new Set(I);
  if (C) {
    let F = I.at(-1),
      U = C.anchorUuid;
    for (let V of I) {
      let re = e.get(V);
      (e.set(V, { ...re, parentUuid: U }), (U = V));
    }
    for (let [V, re] of e)
      if (re.parentUuid === C.anchorUuid && V !== I[0])
        e.set(V, { ...re, parentUuid: F });
    for (let V of I) {
      let re = e.get(V);
      if (re?.type !== "assistant") continue;
      e.set(V, {
        ...re,
        message: {
          ...re.message,
          usage: {
            ...re.message.usage,
            input_tokens: 0,
            output_tokens: 0,
            cache_creation_input_tokens: 0,
            cache_read_input_tokens: 0,
          },
        },
      });
    }
  }
  let N = [];
  for (let [F] of e) {
    let U = d.get(F);
    if (U !== void 0 && U < o && !D.has(F)) N.push(F);
  }
  for (let F of N) e.delete(F);
  if (C && N.length > 0) {
    let F = I.at(-1),
      U = new Set(N);
    for (let [V, re] of e)
      if (
        (re.type === "user" || re.type === "assistant") &&
        re.parentUuid !== null &&
        U.has(re.parentUuid)
      )
        e.set(V, { ...re, parentUuid: F });
  }
  return I.at(-1);
}


function D_s(e, t) {
  if (e.preservedMessages)
    return { preserved: e.preservedMessages, source: "list" };
  let r = e.preservedSegment;
  if (!r) return;
  let o = new Set(),
    d = [],
    p = t.get(r.tailUuid);
  while (p && !o.has(p.uuid)) {
    if ((o.add(p.uuid), d.push(p.uuid), p.uuid === r.headUuid))
      return (
        d.reverse(),
        { preserved: { anchorUuid: r.anchorUuid, uuids: d }, source: "walk" }
      );
    p = p.parentUuid ? t.get(p.parentUuid) : void 0;
  }
  logEvent("tengu_relink_walk_broken", {
    source: S("walk"),
    tailInTranscript: t.has(r.tailUuid),
    headInTranscript: t.has(r.headUuid),
    anchorInTranscript: t.has(r.anchorUuid),
    walkSteps: o.size,
    transcriptSize: t.size,
  });
  return;
}


function Q_s(e, t, r, o) {
  let C = o[0],
    I = o.length,
    D = 0,
    N = !1,
    F = !1;
  for (let U = t; U < r; U++) {
    let V = e[U];
    if (F) {
      F = !1;
      continue;
    }
    if (N) {
      if (V === 92) F = !0;
      else if (V === 34) N = !1;
      continue;
    }
    if (D === 1 && V === C && U + I <= r && e.compare(o, 0, I, U, U + I) === 0)
      return U;
    if (V === 34) N = !0;
    else if (V === 123) D++;
    else if (V === 125) D--;
  }
  return -1;
}


function vyr(e, t, r) {
  let E = 0,
    C = !1,
    I = !1,
    D = 0;
  for (let N = t; D < r.length; N++) {
    if (N === r[D]) {
      if (E === 1 && !C) return r[D];
      D++;
    }
    let F = e[N];
    if (I) I = !1;
    else if (C) {
      if (F === 92) I = !0;
      else if (F === 34) C = !1;
    } else if (F === 34) C = !0;
    else if (F === 123) E++;
    else if (F === 125) E--;
  }
  return r.at(-1);
}


function jhr(e) {
  let d = Buffer.from('{"parentUuid":'),
    p = Buffer.from('"uuid":"'),
    _ = Buffer.from('"isSidechain":true'),
    E = 36,
    C = Buffer.from('","timestamp":"'),
    I = C.length,
    D = d.length,
    N = p.length,
    F = [],
    U = [],
    V = new Map(),
    re = 0,
    ue = e.length;
  while (re < ue) {
    let Ne = e.indexOf(10, re),
      De = Ne === -1 ? ue : Ne + 1;
    if (De - re > D && e[re] === 123 && e.compare(d, 0, D, re, re + D) === 0) {
      let He = e[re + D] === 34 ? re + D + 1 : -1,
        je = -1,
        Ke = -1,
        ct,
        vt = re;
      for (;;) {
        let Wt = e.indexOf(p, vt);
        if (Wt < 0 || Wt >= De) break;
        if (je < 0) je = Wt;
        let en = Wt + N + 36;
        if (en + I <= De && e.compare(C, 0, I, en, en + I) === 0)
          if (Ke < 0) Ke = Wt;
          else (ct ??= [Ke]).push(Wt);
        vt = Wt + N;
      }
      let ut = ct ? vyr(e, re, ct) : Ke >= 0 ? Ke : je;
      if (ut >= 0) {
        let Wt = ut + N,
          en = e.toString("latin1", Wt, Wt + 36);
        (V.set(en, F.length), F.push(re, De, He));
      } else U.push(re, De);
    } else U.push(re, De);
    re = De;
  }
  let de = -1;
  for (let Ne = F.length - 3; Ne >= 0; Ne -= 3) {
    let De = e.indexOf(_, F[Ne]);
    if (De === -1 || De >= F[Ne + 1]) {
      de = Ne;
      break;
    }
  }
  if (de < 0) return e;
  let _e = new Set(),
    Se = new Set(),
    ve = 0,
    Me = de;
  while (Me !== void 0) {
    if (_e.has(Me)) break;
    (_e.add(Me), Se.add(F[Me]), (ve += F[Me + 1] - F[Me]));
    let Ne = F[Me + 2];
    if (Ne < 0) break;
    let De = e.toString("latin1", Ne, Ne + 36);
    Me = V.get(De);
  }
  if (ue - ve < ue >> 1) return e;
  let xe = [],
    Oe = 0;
  for (let Ne = 0; Ne < F.length; Ne += 3) {
    let De = F[Ne];
    while (Oe < U.length && U[Oe] < De)
      (xe.push(e.subarray(U[Oe], U[Oe + 1])), (Oe += 2));
    if (Se.has(De)) xe.push(e.subarray(De, F[Ne + 1]));
  }
  while (Oe < U.length) (xe.push(e.subarray(U[Oe], U[Oe + 1])), (Oe += 2));
  return Buffer.concat(xe);
}


function J_s(e, t) {
  let d = Buffer.allocUnsafe(1048576),
    p = Uge(e, "r"),
    _ = Buffer.allocUnsafe(65536);
  function E(C, I) {
    let D = -1,
      N = 0;
    while (N < t) {
      let F = LZ(p, d, 0, Math.min(1048576, t - N), N);
      if (F === 0) break;
      let U = 0;
      while (U < F) {
        let V = d.indexOf(10, U);
        if (V < 0 || V >= F) break;
        if (D >= 0) {
          if (I === void 0 || I(D)) {
            let re = N + V - D;
            if (re > _.length) _ = Buffer.allocUnsafe(re);
            (LZ(p, _, 0, re, D), C(_, 0, re, D));
          }
          D = -1;
        } else if (V > U) {
          let re = N + U;
          if (I === void 0 || I(re)) C(d, U, V - U, re);
        }
        U = V + 1;
      }
      if (U < F && D < 0) D = N + U;
      N += F;
    }
    if (D >= 0 && (I === void 0 || I(D))) {
      let F = t - D;
      if (F > _.length) _ = Buffer.allocUnsafe(F);
      (LZ(p, _, 0, F, D), C(_, 0, F, D));
    }
  }
  return { scan: E, close: () => $ge(p) };
}


function Z_s(e) {
  return {
    scan(t, r) {
      let o = 0;
      while (o < e.length) {
        let d = e.indexOf(10, o);
        if (d < 0) d = e.length;
        if (d > o && (r === void 0 || r(o))) t(e, o, d - o, o);
        o = d + 1;
      }
    },
    close() {},
  };
}


function Cyr(e, t, r, o) {
  let p = Buffer.from('{"type":"attribution-snapshot"'),
    _ = Buffer.from('{"parentUuid":'),
    E = Buffer.from('"parentUuid":'),
    C = Buffer.from('"uuid":"'),
    I = Buffer.from('","timestamp":"'),
    D = Buffer.from('"isSidechain":true'),
    N = Buffer.from('"compact_boundary"'),
    F = Buffer.from('"type":"last-prompt"'),
    U = 36,
    V = _.length,
    re = C.length,
    ue = I.length,
    de = [],
    _e = [],
    Se = [],
    ve = new Map(),
    Me = [],
    xe = new Set(),
    Oe = !1,
    Ne = -1,
    De = 0,
    He = [],
    je = { offset: -1, length: 0 },
    Ke,
    ct = INDEX_HEAD_SCAN_BYTES,
    vt = INDEX_BOUNDARY_SCAN_BYTES,
    ut = INDEX_LAST_PROMPT_SCAN_BYTES;
  function Wt(tn, dn) {
    let cn = -1,
      It = -1,
      Dn,
      gn = 0;
    for (;;) {
      let Qt = tn.indexOf(C, gn);
      if (Qt < 0) break;
      if (cn < 0) cn = Qt;
      let wn = Qt + re + 36;
      if (wn + ue <= dn && tn.compare(I, 0, ue, wn, wn + ue) === 0)
        if (It < 0) It = Qt;
        else (Dn ??= [It]).push(Qt);
      gn = Qt + re;
    }
    return Dn ? vyr(tn, 0, Dn) : It >= 0 ? It : cn;
  }
  function en(tn, dn, cn, It) {
    let Dn = tn.subarray(dn, dn + cn);
    if (
      ((je.offset = It),
      (je.length = cn),
      cn >= p.length && Dn.compare(p, 0, p.length, 0, p.length) === 0)
    ) {
      ((Ne = It), (De = cn));
      return;
    }
    if (wge(Dn, 0, cn)) {
      He.push({ offset: It, length: cn });
      return;
    }
    if (cn < ut && Dn.subarray(0, Math.min(cn, LAST_PROMPT_PREFIX_SCAN_BYTES)).includes(F)) {
      let $n;
      try {
        $n = jsonParse(Dn.toString("utf8", 0, cn));
      } catch {
        return;
      }
      if ($n?.type === "last-prompt") {
        if ($n.leafUuid) Ke = $n.leafUuid;
        Me.push(It);
        return;
      }
    }
    if ((cn <= vt ? Dn : Dn.subarray(0, vt)).includes(N)) {
      let $n;
      try {
        $n = jsonParse(Dn.toString("utf8"));
      } catch {
        $n = null;
      }
      if ($n?.type === "system" && $n.subtype === "compact_boundary")
        if (
          $n.compactMetadata?.preservedSegment ||
          $n.compactMetadata?.preservedMessages
        )
          Oe = !0;
        else
          (xe.add(It),
            (de.length = 0),
            (_e.length = 0),
            (Se.length = 0),
            ve.clear(),
            (Oe = !1),
            (Ne = -1),
            (De = 0),
            (Ke = void 0));
    }
    let Qt;
    if (cn > V && Dn.compare(_, 0, V, 0, V) === 0) Qt = V;
    else {
      if (((Qt = Q_s(Dn, 0, cn, E)), Qt < 0)) {
        Me.push(It);
        return;
      }
      Qt += E.length;
    }
    let wn = Dn[Qt] === 34 ? Dn.toString("latin1", Qt + 1, Qt + 1 + 36) : null,
      un = Wt(Dn, cn);
    if (un < 0) {
      Me.push(It);
      return;
    }
    let kn = Dn.toString("latin1", un + re, un + re + 36),
      En = (cn <= ct ? Dn : Dn.subarray(0, ct)).includes(D);
    (ve.set(kn, de.length), de.push(It), _e.push(wn), Se.push(En));
  }
  try {
    e.scan(en);
    let tn = null,
      dn = -1;
    if (!o && !Oe) {
      for (let Dn = de.length - 1; Dn >= 0; Dn--)
        if (!Se[Dn]) {
          dn = Dn;
          break;
        }
    }
    if (dn >= 0) {
      tn = new Set();
      let Dn = new Set(),
        gn = !1,
        Qt = (un) => {
          let kn = un;
          while (kn !== void 0 && !Dn.has(kn)) {
            (Dn.add(kn), tn.add(de[kn]));
            let on = _e[kn];
            if (on == null) {
              kn = void 0;
              break;
            }
            let En = ve.get(on);
            if (En === void 0) {
              gn = !0;
              break;
            }
            kn = En;
          }
        };
      Qt(dn);
      let wn = Ke ? ve.get(Ke) : void 0;
      if ((Qt(wn), gn))
        (logEvent("tengu_transcript_phantom_parent", {
          total_offsets: de.length,
          walked_slots: tn.size,
        }),
          (tn = null));
    }
    let cn = tn ?? new Set(de);
    for (let Dn of Me) cn.add(Dn);
    using It = startSlowOperationSpan`transcript load pass2 (${cn.size} lines)`;
    e.scan(
      (Dn, gn, Qt, wn) => {
        if (xe.has(wn)) r();
        let un = gn,
          kn = gn + Qt;
        while (un < kn && Dn[un] === 0) un++;
        if (un === kn) return;
        let on;
        try {
          on = jsonParseUntraced(Dn.toString("utf8", un, kn));
        } catch {
          return;
        }
        if (on) t(on);
      },
      (Dn) => cn.has(Dn),
    );
  } finally {
    e.close();
  }
  return {
    lastAttributionOffset: Ne,
    lastAttributionLength: De,
    ledgerLines: He,
    finalLine: je,
  };
}


function ebs(e, t, r, o, d) {
  return Cyr(J_s(e, t), r, o, d);
}


async function nbs(e, t) {
  if (t === 0) return !0;
  let r = await vj(e, "r");
  try {
    let o = Buffer.alloc(1),
      { bytesRead: d } = await r.read(o, 0, 1, t - 1);
    return d === 1 && o[0] === 10;
  } finally {
    await r.close();
  }
}


function rbs(e, t, r) {
  return obs(e, t, r);
}


function obs(e, t, r) {
  if (t < 0 || r <= 0) return null;
  let [o] = Ayr(e, [{ offset: t, length: r }]);
  return xyr(o);
}


function xyr(e) {
  if (!e) return null;
  try {
    return jsonParse(e.toString("utf8"));
  } catch {
    return null;
  }
}


function sbs(e, t, r) {
  if (t < 0 || r <= 0) return null;
  return xyr(e.subarray(t, t + r));
}


function Ayr(e, t) {
  if (t.length === 0) return [];
  let r = Uge(e, "r");
  try {
    return t.map(({ offset: o, length: d }) => {
      if (o < 0 || d <= 0) return null;
      let p = Buffer.allocUnsafe(d);
      return LZ(r, p, 0, d, o) < d ? null : p;
    });
  } finally {
    $ge(r);
  }
}


function ibs(e, t, r) {
  let o = t === null ? null : t.subarray(Sge(t, 0, t.length)),
    d = null;
  if (o !== null)
    try {
      d = jsonParse(o.toString("utf8"));
    } catch {
      d = null;
    }
  if (d !== null && typeof d === "object") {
    e.add(d, r);
    return;
  }
  e.torn(o === null ? null : RCt(o), r);
}


function hje(e, t, r) {
  let o = new fje(),
    d = 0;
  for (let p of e) ibs(o, p, d++);
  t.clear();
  for (let [p, _] of o.finish(r)) t.set(p, _);
}


function yje(e) {
  if (e === null) return !0;
  if (wge(e)) return !1;
  try {
    let t = jsonParse(e.toString("utf8", Sge(e, 0, e.length)));
    return t === null || typeof t !== "object";
  } catch {
    return !0;
  }
}


function Whr(e) {
  let t = e.length;
  while (t > 0 && e[t - 1] === 10) t--;
  let r = t === 0 ? 0 : e.lastIndexOf(10, t - 1) + 1;
  return e.subarray(r, t);
}


function* Ghr(e) {
  let t = 0;
  while (t < e.length) {
    let r = e.indexOf(10, t);
    if (r === -1) r = e.length;
    if (r > t && wge(e, t, r)) yield e.subarray(t, r);
    t = r + 1;
  }
}


function zhr(e) {
  return typeof e === "object" && e !== null;
}


function qhr(e) {
  return typeof e.writtenAtMs === "number" && Number.isFinite(e.writtenAtMs)
    ? e.writtenAtMs
    : Number.POSITIVE_INFINITY;
}


function xge(e) {
  return typeof e.writtenAtMs === "number" && Number.isFinite(e.writtenAtMs)
    ? e.writtenAtMs
    : Number.NEGATIVE_INFINITY;
}


function mergeArtifactCommentMonitorEntries(e, t) {
  let r = t.artifacts,
    o = e.artifacts;
  if (typeof r !== "object" || r === null)
    return typeof o === "object" && o !== null
      ? e.crossLineMerged === !0
        ? e
        : { ...e, crossLineMerged: !0 }
      : t;
  let d = new Map(Object.entries(r));
  if (typeof o === "object" && o !== null)
    for (let [E, C] of Object.entries(o)) {
      if (!zhr(C)) continue;
      let I = d.get(E),
        D = zhr(I);
      if (C.state !== "stopped") {
        if (
          C.state === "armed" &&
          C.holder !== void 0 &&
          D &&
          I.state === "armed" &&
          (I.holder === void 0 ? xge(I) <= xge(C) : xge(I) < xge(C))
        ) {
          let {
            holderPid: U,
            holderProcStart: V,
            holderProcStartFt: re,
            holderJob: ue,
            holderPidSpace: de,
            ..._e
          } = I;
          d.set(E, {
            ..._e,
            writtenAtMs: C.writtenAtMs,
            holder: C.holder,
            ...(C.holderPid !== void 0 && { holderPid: C.holderPid }),
            ...(C.holderProcStart !== void 0 && {
              holderProcStart: C.holderProcStart,
            }),
            ...(C.holderProcStartFt !== void 0 && {
              holderProcStartFt: C.holderProcStartFt,
            }),
            ...(C.holderJob !== void 0 && { holderJob: C.holderJob }),
            ...(C.holderPidSpace !== void 0 && {
              holderPidSpace: C.holderPidSpace,
            }),
          });
        }
        continue;
      }
      let N = qhr(C);
      if (!d.has(E) || !D) {
        d.set(E, C);
        continue;
      }
      let F =
        I.state === "stopped"
          ? qhr(I)
          : I.state === "armed"
            ? xge(I)
            : Number.NEGATIVE_INFINITY;
      if (I.state === "stopped" ? N > F : N >= F) d.set(E, C);
    }
  let p = Object.keys(r),
    _ = d.size === p.length && p.every((E) => d.get(E) === r[E]);
  if (_ && t.crossLineMerged === void 0) return t;
  return {
    ...t,
    ...(_ ? {} : { crossLineMerged: !0 }),
    artifacts: Object.fromEntries(d),
  };
}


function Ryr(e) {
  let t = new Map(),
    r = new Map(),
    o = new Map(),
    d = new Set(),
    p = new Map(),
    _ = new Map(),
    E = new Map(),
    C = new Map(),
    I = new Map(),
    D = new Map(),
    N = new Map(),
    F = new Map(),
    U = new Map(),
    V = new Map(),
    re = new Map(),
    ue = new Map(),
    de = new Map(),
    _e = new Map(),
    Se = new Map(),
    ve = new Map(),
    Me = new Set(),
    xe = new Map(),
    Oe = new Map(),
    Ne = new Map(),
    De = new Map(),
    He = new Map(),
    je = new Map(),
    Ke = new Map(),
    ct = new Map(),
    vt = new Map(),
    ut = new Map(),
    Wt = new Map(),
    en = new Map(),
    tn = new Map(),
    dn = new Map(),
    cn = [],
    It,
    Dn = !1,
    gn,
    Qt,
    wn = "",
    un,
    kn = !1,
    on = !1,
    En = !1,
    $n = !1,
    ur = new Map();
  return {
    processEntry: (At) => {
      if (!s_s(At)) return;
      let Fn = At;
      if (i_s(Fn)) {
        Phr("seen");
        let Yn = Fn.parentUuid;
        ur.set(Fn.uuid, Yn && ur.has(Yn) ? (ur.get(Yn) ?? null) : Yn);
        return;
      }
      if (isTranscriptMessage(Fn)) {
        if (Fn.parentUuid && ur.has(Fn.parentUuid))
          (Phr("rewrote"), (Fn.parentUuid = ur.get(Fn.parentUuid) ?? null));
        if ((sanitizeLoneSurrogates(Fn), Fn.type === "assistant" && Fn.wireToolInputs !== void 0)) {
          let Yn = n7(Fn.wireToolInputs, Fn.message?.content, Fn.batchToolUses);
          if (Yn === void 0) delete Fn.wireToolInputs;
          else Fn.wireToolInputs = Yn;
        }
        if ((t.set(Fn.uuid, Fn), !Fn.isSidechain && !fbs(Fn))) {
          if (
            ((gn = Fn.uuid),
            typeof Fn.timestamp === "string" && Fn.timestamp > wn)
          )
            ((Qt = Fn.uuid), (wn = Fn.timestamp));
          ((kn = !1), (on = !1), (En = !1));
        }
        if (isCompactBoundaryMessage(Fn)) ((cn.length = 0), (It = void 0), (un = void 0), (kn = !1));
      } else if (Fn.type === "summary" && Fn.leafUuid)
        r.set(Fn.leafUuid, Fn.summary);
      else if (Fn.type === "last-prompt") {
        if (Fn.leafUuid !== void 0) $n = !0;
        if (Fn.leafUuid)
          ((kn = Fn.explicit === !0 || (kn && Fn.leafUuid === un)),
            (En = Fn.rewound === !0 || (En && Fn.leafUuid === un)),
            (un = Fn.leafUuid),
            (on = !1));
        else if (Fn.leafUuid === null && Fn.explicit === !0)
          ((on = !0), (un = void 0), (kn = !1), (En = !1));
      } else if (Fn.type === "custom-title" && Fn.sessionId)
        o.set(Fn.sessionId, Fn.customTitle);
      else if (Fn.type === "ended-by-model" && Fn.sessionId && !isEndConversationDisabled())
        d.add(Fn.sessionId);
      else if (Fn.type === "ai-title" && Fn.sessionId)
        p.set(Fn.sessionId, Fn.aiTitle);
      else if (Fn.type === "tag" && Fn.sessionId) _.set(Fn.sessionId, Fn.tag);
      else if (Fn.type === "relocated" && Fn.sessionId)
        E.set(Fn.sessionId, Fn.relocatedCwd);
      else if (Fn.type === "agent-name" && Fn.sessionId)
        C.set(Fn.sessionId, Fn.agentName);
      else if (Fn.type === "agent-color" && Fn.sessionId)
        I.set(Fn.sessionId, Fn.agentColor);
      else if (Fn.type === "agent-setting" && Fn.sessionId)
        D.set(Fn.sessionId, Fn.agentSetting);
      else if (Fn.type === "mode" && Fn.sessionId)
        xe.set(Fn.sessionId, Fn.mode);
      else if (Fn.type === "permission-mode" && Fn.sessionId)
        Oe.set(Fn.sessionId, Fn.permissionMode);
      else if (Fn.type === "isolation-latch" && Fn.sessionId)
        Ne.set(Fn.sessionId, Fn.side);
      else if (Fn.type === "atis-latch" && Fn.sessionId) {
        if (typeof Fn.atis === "string" && /^[\x21-\x7e]*$/.test(Fn.atis))
          De.set(Fn.sessionId, Fn.atis);
      } else if (Fn.type === "worktree-state" && Fn.sessionId)
        He.set(Fn.sessionId, Fn.worktreeSession);
      else if (Fn.type === "artifact-comment-monitor" && Fn.sessionId) {
        let Yn = je.get(Fn.sessionId);
        je.set(Fn.sessionId, Yn === void 0 ? Fn : mergeArtifactCommentMonitorEntries(Yn, Fn));
      } else if (Fn.type === "artifact-autoreact-ledger" && Fn.sessionId)
        Ke.set(Fn.sessionId, Fn);
      else if (Fn.type === "cost-state" && Fn.sessionId) {
        let Yn = phe().safeParse(Fn);
        if (Yn.success)
          ct.set(Fn.sessionId, { ...Yn.data, sessionId: Fn.sessionId });
      } else if (Fn.type === "pr-link" && Fn.sessionId)
        (N.set(Fn.sessionId, Fn.prNumber),
          F.set(Fn.sessionId, Fn.prUrl),
          U.set(Fn.sessionId, Fn.prRepository));
      else if (Fn.type === "bridge-session" && Fn.sessionId) {
        if (
          (V.set(Fn.sessionId, Fn.bridgeSessionId),
          re.set(Fn.sessionId, Fn.lastSequenceNum),
          Fn.sessionGroupingId)
        )
          de.set(Fn.sessionId, Fn.sessionGroupingId);
        else de.delete(Fn.sessionId);
        if (Fn.noHistoryBackfill) _e.set(Fn.sessionId, !0);
        else _e.delete(Fn.sessionId);
        {
          let { ownerAccountUuid: Qr, ownerOrganizationUuid: Br } = Fn,
            xo = (Qr !== void 0 && !isUuidShaped(Qr)) || (Br !== void 0 && !isUuidShaped(Br));
          if (!xo && Qr) Se.set(Fn.sessionId, Qr);
          else Se.delete(Fn.sessionId);
          if (!xo && Br) ve.set(Fn.sessionId, Br);
          else ve.delete(Fn.sessionId);
        }
        let Yn = normalizeDeclaredDialogKinds(Fn.declaredDialogKinds);
        if (Yn.length > 0) ue.set(Fn.sessionId, Yn);
        else ue.delete(Fn.sessionId);
      } else if (Fn.type === "history-suppression" && Fn.sessionId)
        Me.add(Fn.sessionId);
      else if (Fn.type === "file-history-snapshot") vt.set(Fn.messageId, Fn);
      else if (Fn.type === "file-history-delta") {
        let Yn = ut.get(Fn.messageId);
        if (Yn) Yn.push(Fn);
        else ut.set(Fn.messageId, [Fn]);
      } else if (Fn.type === "attribution-snapshot")
        (Wt.clear(), Wt.set(Fn.messageId, Fn));
      else if (Fn.type === "content-replacement")
        if (Fn.agentId) {
          let Yn = tn.get(Fn.agentId) ?? [];
          (tn.set(Fn.agentId, Yn), Yn.push(...Fn.replacements));
        } else {
          let Yn = en.get(Fn.sessionId) ?? [];
          (en.set(Fn.sessionId, Yn), Yn.push(...Fn.replacements));
        }
      else if (Fn.type === "fork-context-ref") dn.set(Fn.agentId, Fn);
      else if (Fn.type === "marble-origami-commit") cn.push(Fn);
      else if (Fn.type === "marble-origami-snapshot") It = Fn;
      else if (Fn.type === "marble-origami-reset") {
        if (cn.length > 0 || It)
          logForDebugging(
            `[marble-origami] reset tombstone (${Fn.reason}): discarding ${cn.length} pre-reset commit entries`,
          );
        ((cn.length = 0), (It = void 0));
      }
    },
    dropPreBoundaryEntries: () => {
      (t.clear(), vt.clear(), ut.clear(), ur.clear());
    },
    attributionSnapshots: Wt,
    artifactCommentMonitors: je,
    artifactAutoReactLedgers: Ke,
    setTailTorn: (At) => {
      Dn = At;
    },
    finish: () => Kn(O_s(t)),
  };
  function Kn(At) {
    if (Dn) for (let [Ur, Zr] of je) je.set(Ur, { ...Zr, tailTorn: !0 });
    if (!e && on) return hn(new Set());
    let Fn = new Set(),
      Yn = kn && un && t.has(un) && !t.get(un)?.isSidechain,
      Qr = (Ur) => {
        let Zr = new Map([[Ur, !0]]),
          Ir = (eo) => {
            let vr = [],
              bs = !1,
              Xs = eo;
            while (Xs) {
              let Rs = Zr.get(Xs);
              if (Rs !== void 0) {
                bs = Rs;
                break;
              }
              (Zr.set(Xs, !1),
                vr.push(Xs),
                (Xs = t.get(Xs)?.parentUuid ?? void 0));
            }
            for (let Rs of vr) Zr.set(Rs, bs);
            return bs;
          },
          as = Ur,
          So = "";
        for (let eo of t.values())
          if (
            !eo.isSidechain &&
            eo.uuid !== Ur &&
            typeof eo.timestamp === "string" &&
            eo.timestamp >= So &&
            Ir(eo.uuid)
          )
            ((as = eo.uuid), (So = eo.timestamp));
        return as;
      },
      Br = gn;
    if (!e && !$n && Br && Qt && Qt !== Br) Br = Qr(Br);
    if (!e && (!At || Yn)) {
      let Ur = un && t.has(un) ? un : void 0;
      if (Ur && !kn && gn && t.has(gn) && gn !== Ur) {
        let Zr = gn,
          Ir = new Set();
        while (Zr && !Ir.has(Zr)) {
          if (Zr === Ur) {
            Ur = gn;
            break;
          }
          (Ir.add(Zr), (Zr = t.get(Zr)?.parentUuid ?? void 0));
        }
      }
      if (!At) Ur ??= Br;
      if (Ur && t.has(Ur)) {
        let Zr = new Set(),
          Ir = t.get(Ur);
        while (Ir) {
          if (Zr.has(Ir.uuid)) {
            logEvent("tengu_transcript_parent_cycle", {});
            break;
          }
          if (
            (Zr.add(Ir.uuid), Ir.type === "user" || Ir.type === "assistant")
          ) {
            Fn.add(Ir.uuid);
            break;
          }
          Ir = Ir.parentUuid ? t.get(Ir.parentUuid) : void 0;
        }
        if (Fn.size === 1) return hn(Fn);
      }
    }
    let xo = new Set(),
      ss = new Set();
    for (let Ur of t.values())
      if (Ur.parentUuid !== null) {
        if (
          (xo.add(Ur.parentUuid), Ur.type === "user" || Ur.type === "assistant")
        )
          ss.add(Ur.parentUuid);
      }
    let qs = [];
    for (let Ur of t.values()) if (!xo.has(Ur.uuid)) qs.push(Ur);
    let ko = !1;
    for (let Ur of qs) {
      let Zr = new Set(),
        Ir = Ur;
      while (Ir) {
        if (Zr.has(Ir.uuid)) {
          ko = !0;
          break;
        }
        if ((Zr.add(Ir.uuid), Ir.type === "user" || Ir.type === "assistant")) {
          if (!ss.has(Ir.uuid)) Fn.add(Ir.uuid);
          break;
        }
        Ir = Ir.parentUuid ? t.get(Ir.parentUuid) : void 0;
      }
    }
    if (ko) logEvent("tengu_transcript_parent_cycle", {});
    if (!e && Fn.size > 1) {
      let Ur = un && Fn.has(un) ? un : gn;
      if (!Ur || !t.has(Ur)) return hn(Fn);
      let Zr = new Set(),
        Ir = t.get(Ur);
      while (Ir) {
        if (Zr.has(Ir.uuid)) break;
        if ((Zr.add(Ir.uuid), Ir.type === "user" || Ir.type === "assistant")) {
          (Fn.clear(), Fn.add(Ir.uuid));
          break;
        }
        Ir = Ir.parentUuid ? t.get(Ir.parentUuid) : void 0;
      }
    }
    return hn(Fn);
  }
  function hn(At) {
    return {
      messages: t,
      summaries: r,
      customTitles: o,
      endedSessions: d,
      aiTitles: p,
      tags: _,
      relocatedCwds: E,
      agentNames: C,
      agentColors: I,
      agentSettings: D,
      prNumbers: N,
      prUrls: F,
      prRepositories: U,
      bridgeSessionIds: V,
      bridgeLastSeqs: re,
      bridgeDialogKindsBySession: ue,
      bridgeSessionGroupingIds: de,
      bridgeNoBackfill: _e,
      bridgeOwnerAccountUuids: Se,
      bridgeOwnerOrganizationUuids: ve,
      historySuppressed: Me,
      modes: xe,
      permissionModes: Oe,
      isolationLatches: Ne,
      atisLatches: De,
      worktreeStates: He,
      artifactCommentMonitors: je,
      artifactAutoReactLedgers: Ke,
      costStates: ct,
      fileHistorySnapshots: vt,
      fileHistoryDeltas: ut,
      attributionSnapshots: Wt,
      contentReplacements: en,
      agentContentReplacements: tn,
      forkContextRefs: dn,
      contextCollapseCommits: cn,
      contextCollapseSnapshot: It,
      leafUuids: At,
      clearedToEmpty: !e && on,
      rewindAnchorUuid: En ? un : void 0,
    };
  }
}


async function loadTranscriptFile(e, t) {
  let r = Ryr(t?.keepAllLeaves ?? !1),
    {
      processEntry: o,
      artifactCommentMonitors: d,
      artifactAutoReactLedgers: p,
    } = r,
    _ = Ie(process.env.CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP);
  if (isHoverRestEnabled() && t?.storageV5) {
    let { backend: E, key: C } = t.storageV5,
      I = await E.read([C]),
      D = I.ok
        ? void 0
        : isByteViewUnsupportedFailure(I.error)
          ? await Fhr(E, C)
          : b_s(I.error)
            ? await Fhr(E, C, Mge)
            : void 0,
      N = I.ok
        ? void 0
        : D === void 0
          ? I.error
          : D !== null && "failure" in D
            ? D.failure
            : void 0;
    if (N !== void 0) {
      if (N.code === "Failed" && N.failureClass === "permission")
        return (
          logForDebugging(
            "loadTranscriptFile: v5 read inaccessible (permission) \u2014 empty result",
          ),
          Object.assign(r.finish(), { servedBy: "inaccessible" })
        );
      logForDebugging(`loadTranscriptFile: v5 read failed (${N.code})`, { level: "error" });
      let de = vB("telemetryCode" in N ? N.telemetryCode : void 0);
      throw Object.assign(
        Error("loadTranscriptFile: transcript unreadable via storage backend", {
          cause: N,
        }),
        de === void 0 ? {} : { code: de },
      );
    }
    let F = I.ok ? I.value.items[0] : void 0,
      U = D !== void 0 && D !== null && "bytes" in D ? D : void 0,
      V = F?.found
        ? { servedBy: "v5", v5Read: { mtimeMs: F.mtimeMs } }
        : U
          ? { servedBy: "v5-records", v5Read: { mtimeMs: U.mtimeMs } }
          : { servedBy: "absent" },
      re = F?.found ? F.value : U?.bytes,
      ue = F?.found ? F.storedBytes : U?.storedBytes;
    if (re !== void 0) {
      let de = Buffer.from(re.buffer, re.byteOffset, re.byteLength),
        _e = async () => {
          if (U !== void 0) return U.tornTailBytes > 0;
          let ve = await E.stat(C);
          return ve.ok && (ve.value.tornTailBytes ?? 0) > 0;
        };
      if (!_ && (ue ?? de.length) > SKIP_PRECOMPACT_THRESHOLD) {
        let ve = Cyr(
            Z_s(de),
            o,
            r.dropPreBoundaryEntries,
            t?.keepAllLeaves ?? !1,
          ),
          Me = sbs(de, ve.lastAttributionOffset, ve.lastAttributionLength);
        if (Me) r.attributionSnapshots.set(Me.messageId, Me);
        let xe =
            ve.finalLine.offset >= 0 &&
            ve.ledgerLines.at(-1)?.offset !== ve.finalLine.offset &&
            (ve.ledgerLines.length > 0 || p.size > 0),
          Oe = (xe ? [...ve.ledgerLines, ve.finalLine] : ve.ledgerLines).map(
            ({ offset: De, length: He }) => de.subarray(De, De + He),
          ),
          Ne = xe && yje(Oe.pop() ?? null);
        if ((hje(Oe, p, Ne), d.size > 0 || p.size > 0)) {
          let De = await _e();
          if ((r.setTailTorn(De), De))
            for (let [He, je] of p) p.set(He, PCt(je, !1));
        }
        return Object.assign(r.finish(), V);
      }
      let Se = yje(Whr(de));
      if (!t?.keepAllLeaves && de.length > SKIP_PRECOMPACT_THRESHOLD) de = jhr(de);
      for (let ve of Nge(de)) o(ve);
      if ((hje(Ghr(de), p, Se), d.size > 0 || p.size > 0)) {
        let ve = await _e();
        if ((r.setTailTorn(ve), ve))
          for (let [Me, xe] of p) p.set(Me, PCt(xe, !1));
      }
    }
    return Object.assign(r.finish(), V);
  }
  try {
    if (!_) {
      let { size: I } = await Vx(e);
      if (I > SKIP_PRECOMPACT_THRESHOLD) {
        let D = ebs(e, I, o, r.dropPreBoundaryEntries, t?.keepAllLeaves ?? !1),
          N = rbs(e, D.lastAttributionOffset, D.lastAttributionLength);
        if (N) r.attributionSnapshots.set(N.messageId, N);
        let F =
            D.finalLine.offset >= 0 &&
            D.ledgerLines.at(-1)?.offset !== D.finalLine.offset &&
            (D.ledgerLines.length > 0 || p.size > 0),
          U = Ayr(e, F ? [...D.ledgerLines, D.finalLine] : D.ledgerLines),
          V = F && yje(U.pop() ?? null);
        if ((hje(U, p, V), d.size > 0)) r.setTailTorn(!(await nbs(e, I)));
        return r.finish();
      }
    }
    let E = await Mj(e),
      C = yje(Whr(E));
    if (
      (r.setTailTorn(E.length > 0 && E.at(-1) !== 10),
      !t?.keepAllLeaves && E.length > SKIP_PRECOMPACT_THRESHOLD)
    )
      E = jhr(E);
    for (let I of Nge(E)) o(I);
    hje(Ghr(E), p, C);
  } catch (E) {
    if (!Rt(E)) {
      if (Kd(E) || Bp(E))
        logForDebugging(`loadTranscriptFile: transcript unreadable (${A(E)}): ${l(E)}`, {
          level: "error",
        });
      else logError(E);
      throw E;
    }
  }
  return r.finish();
}


async function gxt(e, t, r) {
  if (isHoverRestEnabled() && r !== void 0)
    if (t === void 0) {
      let p = await abs(e, r);
      if (p !== void 0) {
        let _ = await loadTranscriptFile(p.path, { storageV5: { backend: r, key: p.key } });
        return Object.assign(_, { sessionFile: p.path });
      }
    } else {
      let p = resolveTranscriptLocator(t, r);
      if (p !== void 0) {
        let _ = await loadTranscriptFile(t, { storageV5: p });
        return Object.assign(_, { sessionFile: t });
      }
    }
  let o = t ?? (await lbs(e)),
    d = await loadTranscriptFile(o);
  return Object.assign(d, { sessionFile: o });
}


async function abs(e, t) {
  if (!isValidPathSegment(e)) return;
  let r = fy();
  if (r !== null) {
    let C = $Z(r);
    if (kv(r) !== Pl() || !isValidPathSegment(C)) return;
    let I = FZ(STORAGE_KEYS.transcript(C, e));
    if (I === void 0) return;
    return { key: I, path: Wp(r, `${e}.jsonl`) };
  }
  let o = he(),
    d = getProjectKey(o),
    p = [d],
    _ = legacyDerivedProjectKey(o);
  if (_ !== void 0) p.push(_);
  else if (d.length > MAX_SANITIZED_LENGTH) {
    let I = (de) => de,
      D = I(d.slice(0, MAX_SANITIZED_LENGTH) + "-"),
      N = I(d),
      F = new Set(),
      U = [],
      V,
      re = 0;
    try {
      do {
        let de = await t.listEntries(
          { namespace: "transcript" },
          { skipScopeStats: !0, ...(V !== void 0 && { cursor: V }) },
        );
        if (!de.ok) break;
        for (let _e of de.value.items)
          if (
            _e.kind === "scope" &&
            _e.scope.namespace === "transcript" &&
            _e.scope.projectKey !== void 0 &&
            I(_e.scope.projectKey).startsWith(D) &&
            I(_e.scope.projectKey) !== N &&
            isValidPathSegment(_e.scope.projectKey) &&
            !F.has(I(_e.scope.projectKey))
          )
            (F.add(I(_e.scope.projectKey)), U.push(_e.scope.projectKey));
        V = de.value.cursor;
      } while (V && ++re < MAX_LISTING_PAGES);
    } catch {}
    let ue = {
      backend: t,
      transcriptKey: STORAGE_KEYS.transcript,
      isKeySegment: isValidPathSegment,
      realWorkspacePath: createRealPathResolver(t),
    };
    for (let de of U) if (await dirBelongsToProject(Wp(Pl(), de), o, !1, createTranscriptSource(ue))) p.push(de);
  }
  for (let C of p) {
    let I = FZ(STORAGE_KEYS.transcript(C, e));
    if (I === void 0) continue;
    if ((await t.stat(I)).ok)
      return { key: I, path: Wp(Pl(), C, `${e}.jsonl`) };
  }
  let E = FZ(STORAGE_KEYS.transcript(d, e));
  return E === void 0 ? void 0 : { key: E, path: Wp(Pl(), d, `${e}.jsonl`) };
}


async function lbs(e) {
  let t = fy(),
    r = he(),
    o = `${e}.jsonl`,
    d = Wp(t ?? getProjectDir(r), o);
  if (t !== null) return d;
  for (let p of await findProjectDirs(r)) {
    let _ = Wp(p, o);
    try {
      return (await Vx(_), _);
    } catch {}
  }
  return d;
}


function fbs(e) {
  return e.type === "attachment" && e.attachment?.type === "fork_briefing";
}


export { FZ, INDEX_BOUNDARY_SCAN_BYTES, INDEX_HEAD_SCAN_BYTES, INDEX_LAST_PROMPT_SCAN_BYTES, LAST_PROMPT_PREFIX_SCAN_BYTES, MAX_TRANSCRIPT_READ_BYTES, RCt, Ryr, Sge, Xd, ZTn, axt, fhe, fje, gxt, isCompactBoundaryMessage, isTranscriptMessage, loadTranscriptFile, lst, mergeArtifactCommentMonitorEntries, n7, phe, transcriptStores, wge };
