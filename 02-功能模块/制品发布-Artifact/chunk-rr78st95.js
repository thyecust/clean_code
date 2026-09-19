// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Gt, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { escapeHtmlAttribute } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { BASE58_SLUG_PATTERN, slugToUuid } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { matchDataIdAttribute } from "../图表-Mermaid/chunk-743atbtj.js";
import { Ku } from "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { countMatching } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { randomUUID } from "crypto";
class y {
  #e = new Map();
  #t = new Set();
  note(e, t, r) {
    if (this.#t.has(e)) return;
    let i = this.#e.get(e);
    if (i !== void 0) {
      if (i.has(t)) return;
      if (i.size >= 4) {
        this.#n(e);
        return;
      }
      i.set(t, r);
      return;
    }
    if (this.#e.size >= 256) {
      let a = 128;
      for (let o of this.#e.keys()) if ((this.#n(o), --a === 0)) break;
    }
    this.#e.set(e, new Map([[t, r]]));
  }
  #n(e) {
    (this.#e.delete(e), this.#t.add(e));
  }
  take(e, t) {
    let r = this.#e.get(e);
    return (this.#e.delete(e), r?.get(t));
  }
}
class _ {
  #e;
  #t;
  #n;
  #r = !1;
  constructor(e, t, r) {
    ((this.#e = e), (this.#t = t), (this.#n = r));
  }
  settle(e) {
    if (this.#r) return;
    if (((this.#r = !0), this.#e.get(this.#t) !== this.#n)) return;
    if ((this.#n.pending--, e.wasWatching || e.teardown !== "unsent"))
      this.#n.confirmed = !0;
    if (this.#n.pending === 0 && !this.#n.confirmed) this.#e.delete(this.#t);
  }
}
class k {
  #e = new Map();
  #t = 1;
  #n = new Set();
  #r = new y();
  isStopped(e) {
    return this.#e.has(e);
  }
  latchGeneration(e) {
    return this.#e.get(e)?.generation;
  }
  recordStop(e) {
    this.#n.delete(e);
    let t = this.#e.get(e);
    if (t === void 0)
      ((t = { pending: 0, confirmed: !1, generation: this.#t++ }),
        this.#e.set(e, t));
    else t.generation = this.#t++;
    return (t.pending++, new _(this.#e, e, t));
  }
  reaffirmStop(e) {
    this.#n.delete(e);
    let t = this.#e.get(e);
    if (t === void 0) this.confirmStop(e);
    else t.confirmed = !0;
  }
  confirmStop(e) {
    this.#n.delete(e);
    let t = this.#e.get(e);
    if (t === void 0)
      this.#e.set(e, { pending: 0, confirmed: !0, generation: this.#t++ });
    else ((t.confirmed = !0), (t.generation = this.#t++));
  }
  noteRelatchAsk(e, t) {
    this.#r.note(e, t, this.latchGeneration(t));
  }
  takeRelatchAsk(e, t) {
    return this.#r.take(e, t);
  }
  clearByApprovedRewatch(e, t) {
    let r = this.#e.get(e);
    if (r === void 0 || r.generation !== t) return;
    (this.#e.delete(e), this.#n.add(e));
  }
  noteApprovedWatch(e) {
    if (!this.#e.has(e)) this.#n.add(e);
  }
  wasClearedByRewatch(e) {
    return this.#n.has(e) && !this.#e.has(e);
  }
}
var te = {
    baseMs: 1000,
    capMs: 30000,
    minUptimeMs: 60000,
    maxConsecutiveFailures: 10,
    spreadMinMs: 1000,
    spreadMaxMs: 20000,
    seedDeferMaxMs: 180000,
    idleTtlMs: 0,
    handshakeDeadlineMs: 150000,
    stallThresholdMs: 1e4,
    stallMinMs: 30000,
    stallMaxMs: 60000,
    longStallMinMs: 120000,
    longStallMaxMs: 240000,
    maxStallMs: 1800000,
    stallOutJitterMs: 900000,
  },
  re = 30000,
  ie = 100,
  O = {
    baseMs: 1000,
    capMs: 30000,
    minUptimeMs: 60000,
    stallThresholdMs: 1e4,
    stallMinMs: 60000,
    stallMaxMs: 600000,
    maxConsecutiveRefusals: 10,
    handshakeDeadlineMs: 30000,
  },
  oe = { ...O, presenceMs: 15000 },
  se = { ...O, keepaliveMs: 25000 };
function buildAgentArtifactKey(e, t) {
  return `${e ?? "main"}
${t}`;
}
function I(e) {
  let t = [...e.codeliveredFollowups.values()];
  e.codeliveredFollowups.clear();
  for (let { revoke: r } of t) r("reset");
  (e.coordinatorEditors.clear(),
    e.editorSettleWatch?.(),
    (e.editorSettleWatch = null));
}
function revokeCodeliveredFollowups(e, t, r) {
  let i = v().current;
  if (i === void 0) return;
  for (let [a, o] of i.codeliveredFollowups)
    if (o.slug === e && o.agentId !== r?.exceptAgentId)
      (i.codeliveredFollowups.delete(a), o.revoke(t));
}
var ae = 64,
  MAX_ARTIFACT_WATCHES = 5,
  MAX_WATCH_HANDOFF_ENTRIES = 3 * MAX_ARTIFACT_WATCHES;
function le() {
  return {
    live: {
      handoffGeneration: 0,
      inFlightSubscribes: new Set(),
      inFlightWiredIntent: new Set(),
      retiredInFlightArms: new Set(),
      armSettleWaiters: new Map(),
      bootingWiredArms: new Map(),
      pendingInFlightWiring: new Map(),
      supervisors: new Map(),
      commentCensus: new Map(),
      pendingRegistrations: 0,
      rewatchTiming: { ...te },
      mostRecentPublishSlug: void 0,
      pendingSubagentArms: new Map(),
      finishedSubagentAdopters: new Set(),
      activitySenders: new Map(),
      agentActivitySinks: new Map(),
      activityRefreshTimer: void 0,
      activityOnsetTimer: void 0,
      activityClearTimer: void 0,
      activityRefreshMs: re,
      activityEdgeDebounceMs: ie,
      activityUnsubscribe: void 0,
      disposed: !1,
      activityOkReported: !1,
      summonDeclared: new Map(),
      summonArmOkReported: !1,
      armOutcomes: new Map(),
      mcpWriteSlugs: new Map(),
      announcedArmFailures: new Set(),
      nonEditorSlugs: new Set(),
      repliesConsent: {
        outstanding: new Map(),
        declined: new Map(),
        approved: new Set(),
      },
      inFlightGenerations: new Map(),
      endAll: void 0,
    },
    liveDocWatch: {
      ownSeqs: new Map(),
      rebases: new Map(),
      pendingOwnEdits: new Map(),
      watches: new Map(),
      stopCounts: new Map(),
      retiredWatches: new Map(),
      arming: new Map(),
      notLiveDoc: new Set(),
      noticeBudgets: new Map(),
      journalUnavailable: new Set(),
      journalNegotiations: new Set(),
      headSinks: new Map(),
      stopAll: void 0,
      stop: void 0,
    },
    liveEditOps: { lastOwnAck: new Map(), unansweredKeys: new Map() },
    liveReplicas: {
      replicas: new Map(),
      unavailable: new Map(),
      opening: new Map(),
      binding: new Map(),
      transport: void 0,
      engine: void 0,
      renderLevel: void 0,
      headMoved: void 0,
      workingCopyPath: void 0,
      settleFileChange: void 0,
      liveFileEnded: void 0,
      pushHeldSaves: void 0,
      heldSavesExitCleanup: void 0,
    },
    autoReact: {
      artifacts: new Map(),
      optIn: null,
      responderDispatchOptIn: null,
      userDisarmed: !1,
      enabledMemo: null,
      unattendedReplies: new Map(),
      postSeq: 0,
      probeSeq: 0,
      coalesceMsOverride: null,
      maxAutoTurnsOverride: null,
      confirmDwellMsOverride: null,
      readRetryDelaysMsOverride: null,
      fastAckFlagRefresh: null,
      fastAckFlagRefreshDeadlineMsOverride: null,
      fastAckSelectDeadlineMsOverride: null,
      pendingLedger: null,
      ledgerLastWritten: null,
      ledgerLastWriteAt: null,
      ledgerLastWriteSid: null,
      ledgerLastWriteAccount: void 0,
      ledgerFailureSeqAtWrite: null,
      ledgerDeferredSince: null,
      ledgerLastAppend: null,
      ledgerOwnerSid: null,
      ledgerRetiredSids: new Set(),
      ledgerExitCleanup: void 0,
      ledgerExitReStamp: void 0,
      ledgerTimer: void 0,
      ledgerStorageV5: void 0,
      ledgerMaxAgeMsOverride: null,
      ledgerDebounceMsOverride: null,
      composeDeadlineMsOverride: null,
    },
    summonSeeds: {
      claims: new Set(),
      readClaims: new Set(),
      graceMsOverride: null,
      open: new Map(),
      settled: new Set(),
    },
    wakes: {
      wakes: new Map(),
      stoppedSlugs: new Set(),
      sweptSlugs: new Set(),
      orphanedSweptSlugs: new Set(),
      yieldedSlugs: new Map(),
      takenFrom: new Map(),
      latchChangedAt: new Map(),
      liftedAtScanGeneration: new Map(),
      humanTurnAtScanGeneration: null,
      pendingResumeDisclosure: new Set(),
      scanGeneration: 0,
      slugEpochs: new Map(),
      stopGenerations: new Map(),
      resumeSights: new y(),
    },
    autoEditAttribution: { staged: new Map(), chainPublishIds: new Set() },
    summonAnswers: new Map(),
    pipelineReplyOrigins: new Map(),
    summonStatus: {
      sidBySlug: new Map(),
      seqBySid: new Map(),
      routeAbsentSince: null,
    },
    noticeCoalesce: new Map(),
    shareStatus: {
      bySlug: new Map(),
      filePathToSlug: new Map(),
      pendingNoticeSlugs: new Set(),
      noticeReadSights: {
        comments: new y(),
        read_db: new y(),
        read: new y(),
        verify: new y(),
      },
      shareProbesInFlight: new Map(),
      capsReadsInFlight: new Map(),
    },
    templateLanes: {
      prototypeArmed: !1,
      boundSlugs: new Map(),
      controlPlaneArmed: !1,
      controlPlaneSlugs: new Set(),
    },
    postedReplyIds: new Set(),
    frameRelay: {
      declinedUntil: new Map(),
      tunnelDeclinedUntil: new Map(),
      hopFailedUntil: new Map(),
      servedUntil: new Map(),
      vouched: new Set(),
      botContextNoted: !1,
    },
    contentHostEgressDenied: new Set(),
    contentHostEgressProbed: new Map(),
    contentHostEgressUnanswered: new Set(),
    contentHostEgressInFlight: new Map(),
    assetsOnRoster: !1,
    accountEpoch: 0,
    conversationEpoch: 0,
    ownPrincipalTokens: new Map(),
    ownPrincipalTokenAccount: null,
    ownPrincipalTokenEpoch: 0,
    authoringProgress: { slotsByBlockIndex: new Map(), failureReported: !1 },
    mintedStoredPageProbes: new WeakSet(),
    strandedMints: new Map(),
    mintedRoundTripPublishSignals: new WeakSet(),
    durable: {
      rows: new Map(),
      registrySink: null,
      registryPublished: "null",
      unwatchedSlugs: new Set(),
      orphanTriggers: new Set(),
      pendingRestoredRows: new Map(),
      slugOps: new Map(),
      stopLatches: new k(),
      liveDocArmDeclined: new Set(),
      liveDocRegrantSights: new y(),
      firstWatchAskSights: new y(),
      pendingOps: new Set(),
      originatorRefused: !1,
      subscribeForbidden: null,
      watchUrlWithheld: null,
      watchUrlGranted: !1,
      armsInFlight: new Map(),
      armOutcomes: new Map(),
      announcedArmFailures: new Set(),
    },
    room: {
      conns: new Map(),
      nonces: new Map(),
      endedOwners: new Map(),
      timing: { ...oe },
    },
    presence: { conns: new Map(), declined: new Set(), timing: { ...se } },
    commentMonitorIntent: {
      sid: null,
      bySlug: new Map(),
      pendingRestore: null,
      lastWritten: null,
      wroteCurrentLine: !1,
      failureSeqAtWrite: 0,
      storageV5: void 0,
      unsubscribeSwitch: void 0,
      unregisterExitDrain: void 0,
      transcriptPath: null,
      parked: new Map(),
      writeChain: Promise.resolve(),
      owedLines: new Map(),
      pendingLines: new Map(),
      exitStamped: !1,
      tornStops: new Set(),
      forgottenAt: new Map(),
      leftWith: null,
      unsubscribeMaterialized: void 0,
      earlySeed: void 0,
      onFile: !1,
      adoptPendingFor: null,
    },
    interactionSchemas: void 0,
    approvedRootBases: new Map(),
    commentTargets: new Map(),
    refusedPublishBodies: new Map(),
    approvedSourcePins: new Map(),
    approvedCopySources: new Map(),
    gatedThumbnailHrefs: new Map(),
    approvalStashEvicted: !1,
    publishObservationNonce: randomUUID(),
    consumedPublishApprovals: new Set(),
    readDeliveries: new Map(),
    pendingHandoverReads: new Map(),
    frozenReadPageDataSchemaNames: void 0,
    frozenWatchRail: void 0,
    frozenArtifactTypes: void 0,
    frozenCopyFrom: void 0,
    frozenArtifactPins: void 0,
    frozenMultiFile: void 0,
    createdFromType: new Map(),
    deferredSurface: new Map(),
    remoteControlSkippedSlugs: new Set(),
    typeInstanceFiles: new Map(),
    typeCapabilityReads: new Map(),
    verify: { lastPublish: void 0, reads: new Map() },
    ownPublishedSlugs: new Map(),
    roomJoinArming: new Set(),
    roomStoppedByUser: new Set(),
    roomArmAsked: new Map(),
    roomArmRefusedByUser: new Set(),
    coordinatorEditors: new Map(),
    editorSettleWatch: null,
    codeliveredFollowups: new Map(),
    prReviewComposeLatch: null,
    whiteboardVariantLatch: null,
    liveEditGateLatch: null,
    livePathsGateLatch: null,
    toolsetLatch: null,
    designGuardFired: !1,
    artifactDisabledSessionEvaluated: !1,
    artifactWithheldReasonsLogged: [],
    artifactWithheldRecoveryLogged: !1,
    artifactRegisteredSeen: !1,
    anchorSnippets: new Map(),
    marked: { plain: void 0, inertHtml: void 0, prReviewSubset: void 0 },
    bundleEmbedVerdicts: { hljs: void 0 },
    blockStripVerdicts: { hljs: void 0, mermaid: void 0 },
    prReviewTemplate: { chrome: null, parts: null },
    workshopBlessedHashes: void 0,
    rejectBreaker: new Ku({ max: ae }),
  };
}
function stopArtifactSupervisor(e) {
  if (((e.stopped = !0), e.abort.abort(), e.timer !== void 0))
    (clearTimeout(e.timer), (e.timer = void 0));
  (delete e.lease, delete e.renewable, delete e.wake);
}
class ArtifactStateStore {
  current = void 0;
}
var artifactStateStores = new Gt(() => new ArtifactStateStore());
function v() {
  return artifactStateStores.of(B());
}
function getArtifactState() {
  let e = v();
  return ((e.current ??= le()), e.current);
}
function markThreadAutoReplied(e, t) {
  let r = v().current?.autoReact.artifacts.get(e)?.threads.get(t);
  if (r !== void 0) r.lastAutoReplyAt = Date.now();
}
function rearmWatchNoticeBudgets() {
  let e = v().current;
  if (e === void 0) return;
  for (let t of e.liveDocWatch.noticeBudgets.values()) t.disclosed = !1;
}
function clearRefusedPublishBodies() {
  let e = v().current;
  if (e === void 0) return;
  (e.refusedPublishBodies.clear(), clearReadDeliveries());
}
function clearReadDeliveries() {
  let e = v().current;
  if (e === void 0) return;
  for (let t of e.pendingHandoverReads.values())
    (t.linesReturned.clear(),
      t.linesPrepared.clear(),
      t.completedBy.clear(),
      t.confirmsResendFor.clear());
  e.readDeliveries.clear();
}
function pruneRefusedPublishBodies(e) {
  let t = v().current;
  if (t === void 0) return;
  let r = t.refusedPublishBodies,
    i = buildAgentArtifactKey(void 0, "");
  for (let [a, o] of r) {
    if (!a.startsWith(i)) continue;
    if (!e.has(o.batch)) r.delete(a);
    else if (
      o.observedFrom !== void 0 &&
      o.observedFrom !== "" &&
      !e.has(o.observedFrom)
    )
      delete o.observedFrom;
  }
}
function getArtifactRoom() {
  return v().current?.room;
}
function getArtifactPresence() {
  return v().current?.presence;
}
function disposePresenceSlug(e) {
  let t = v().current?.presence;
  t?.disposeSlug?.(t, e);
}
function retirePresenceSlug(e) {
  let t = v().current?.presence;
  t?.retireSlug?.(t, e);
}
function isPresenceDeclined(e) {
  return v().current?.presence.declined.has(e) === !0;
}
function hasArtifactState() {
  return v().current !== void 0;
}
function notifyRoomConsentChanged() {
  let e = getArtifactRoom();
  e?.consentChanged?.(e);
}
function notifyRoomAccountChanged(e) {
  let t = getArtifactRoom();
  t?.accountChanged?.(t, e);
}
function disposeArtifactRoom() {
  let e = getArtifactRoom();
  e?.dispose?.(e);
}
function ue(e) {
  ce(e);
  for (let t of e.docs.values()) pe(t);
}
function ce(e) {
  ((e.journalPos = void 0), (e.journalPosOrd = void 0));
}
function pe(e) {
  ((e.journalFence = void 0), (e.journalGen += 1));
}
function ge(e) {
  let t = e.journal;
  ((e.journal = void 0), (e.journalCap = void 0), ue(e));
  for (let r of e.docs.values()) {
    if (r.batchTimer !== void 0)
      (clearTimeout(r.batchTimer), (r.batchTimer = void 0));
    ((r.batch = void 0),
      (r.batchPos = void 0),
      (r.batchHeardAt = void 0),
      (r.settling = void 0));
  }
  t?.stop({ killTask: !1 });
}
function resetOwnPrincipalTokens(e) {
  (e.ownPrincipalTokens.clear(),
    (e.ownPrincipalTokenAccount = null),
    e.ownPrincipalTokenEpoch++);
}
function handleArtifactAccountChange(e = "signed_out", t) {
  let r = v().current;
  if (r === void 0) return;
  if ((resetOwnPrincipalTokens(r), e !== "same_account")) {
    ((r.assetsOnRoster = !1),
      r.accountEpoch++,
      r.postedReplyIds.clear(),
      r.commentTargets.clear(),
      (r.verify.lastPublish = void 0),
      r.verify.reads.clear(),
      r.ownPublishedSlugs.clear(),
      r.strandedMints.clear(),
      r.roomJoinArming.clear(),
      I(r));
    for (let o of r.live.supervisors.values())
      (delete o.lease, delete o.renewable);
    (r.live.nonEditorSlugs.clear(),
      r.live.pendingSubagentArms.clear(),
      r.live.finishedSubagentAdopters.clear(),
      r.live.repliesConsent.outstanding.clear(),
      r.live.repliesConsent.declined.clear(),
      r.live.repliesConsent.approved.clear());
    for (let o of r.autoReact.artifacts.values()) {
      ((o.heldReplyDeclined = !1), (o.heldReplyChain = null));
      for (let s of o.threads.values())
        (s.ownReplyIds.clear(), (s.ownReplyIdsIncomplete = !1));
    }
    r.liveDocWatch.journalUnavailable.clear();
    for (let o of r.liveDocWatch.journalNegotiations) o.abort();
    r.liveDocWatch.journalNegotiations.clear();
    for (let o of r.liveDocWatch.arming.values())
      for (let s of o.reviving) ge(s);
    (r.liveDocWatch.stopAll?.(e), r.live.endAll?.(e));
    for (let o of r.liveReplicas.replicas.values())
      (o.watcher?.close(), clearTimeout(o.pushHold?.due));
    (r.liveReplicas.replicas.clear(),
      r.liveReplicas.unavailable.clear(),
      r.liveReplicas.opening.clear(),
      r.createdFromType.clear(),
      r.deferredSurface.clear(),
      r.remoteControlSkippedSlugs.clear(),
      r.typeInstanceFiles.clear(),
      r.typeCapabilityReads.clear(),
      r.anchorSnippets.clear(),
      (r.shareStatus.accountBoundaryAt = Date.now()));
    for (let [o, s] of r.shareStatus.bySlug)
      if (s.probeErrorCode !== void 0) {
        let { probeErrorCode: c, ...f } = s;
        r.shareStatus.bySlug.set(o, f);
      }
  }
  let { room: i, presence: a } = r;
  (i.accountChanged?.(i, t), a.accountChanged?.(a, t));
}
async function flushLiveReplicasBeforeLogout(e) {
  if (e === "same_account") return;
  let t = v().current;
  if (t === void 0 || t.liveReplicas.replicas.size === 0) return;
  let r = [],
    i = t.liveReplicas.pushHeldSaves;
  if (i !== void 0)
    r.push(
      i().then(
        () => logForDebugging("[liveReplica] held saves pushed before logout"),
        (a) => logForDebugging(`[liveReplica] held saves not pushed before logout: ${l(a)}`),
      ),
    );
  for (let [a, o] of t.liveReplicas.replicas)
    r.push(
      o.replica.sendFinalReport().then(
        (s) =>
          logForDebugging(
            `[liveReplica] final divergence report before logout ${a}: ${s ? "sent" : "nothing due"}`,
          ),
        (s) =>
          logForDebugging(
            `[liveReplica] final divergence report before logout ${a} failed: ${l(s)}`,
          ),
      ),
    );
  await Promise.race([Promise.all(r), sleep(2000)]);
}
function retireLiveDocWatches() {
  let e = v().current;
  if ((e?.liveDocWatch.stopAll?.("clear"), e !== void 0))
    for (let [t, r] of e.liveReplicas.replicas)
      r.replica.sendFinalReport().then(
        (i) =>
          logForDebugging(
            `[liveReplica] final divergence report at conversation retire ${t}: ${i ? "sent" : "nothing due"}`,
          ),
        (i) =>
          logForDebugging(
            `[liveReplica] final divergence report at conversation retire ${t} failed: ${l(i)}`,
          ),
      );
}
function resetArtifactConversationState(e) {
  let t = v().current;
  if (t === void 0) return;
  if (e?.continuesConversation !== !0)
    (t.conversationEpoch++,
      t.ownPublishedSlugs.clear(),
      t.strandedMints.clear(),
      t.roomJoinArming.clear(),
      t.roomStoppedByUser.clear(),
      t.roomArmAsked.clear(),
      t.roomArmRefusedByUser.clear(),
      I(t),
      t.live.nonEditorSlugs.clear(),
      t.live.pendingSubagentArms.clear(),
      t.live.finishedSubagentAdopters.clear(),
      t.live.repliesConsent.outstanding.clear(),
      t.live.repliesConsent.declined.clear(),
      t.live.repliesConsent.approved.clear(),
      t.deferredSurface.clear(),
      t.remoteControlSkippedSlugs.clear());
  (t.createdFromType.clear(),
    (t.verify.lastPublish = void 0),
    t.verify.reads.clear());
}
var XHTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
function asDocument(e) {
  return e;
}
function asDocumentFragment(e) {
  return e;
}
function getAttributeValue(e, t) {
  let r = t.toLowerCase();
  return e.attrs?.find((i) => i.name.toLowerCase() === r)?.value;
}
var me = "decision",
  he = "deliverables",
  Se = /(?:`{3,}|~{3,})[ \t]*(?:decision|deliverables)/,
  DECISION_ID_PATTERN = "[a-z0-9][a-z0-9-]{0,63}",
  E = new RegExp(`^${DECISION_ID_PATTERN}$`),
  be = ["id", "question", "option", "lean", "resolved", "custom", "anchor"],
  ve = new RegExp(`^(${be.join("|")}):[ \\t]?(.*)$`),
  F = new RegExp(`^(${DECISION_ID_PATTERN})(?:[ \\t]*\\|[ \\t]*(.+))?$`),
  ye = 300,
  we = 60,
  Me = 200,
  ANCHOR_VALUE_PATTERN = /^[A-Za-z0-9 ._:/@#()+-]{1,120}$/,
  U = 2,
  j = 5,
  H = 20,
  K = 280,
  V = 1120,
  Re = 1496,
  Ae =
    /[\u0000-\u001f\u007f-\u009f\u2028\u2029]|(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Cf}\p{Default_Ignorable_Code_Point}]/u,
  Ee = /[\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/gu,
  De = 8;
function q(e) {
  if (e.length === 0 || e !== e.trim() || [...e].length > K) return !1;
  if (Ae.test(e)) return !1;
  return (e.match(Ee) ?? []).length <= De;
}
var Te = /^[A-Za-z0-9+/]*={0,2}$/;
function D(e) {
  if (!q(e)) return null;
  let t = new TextEncoder().encode(e);
  if (t.length > V) return null;
  return Buffer.from(t).toString("base64");
}
function decodeBase64Text(e) {
  if (e.length === 0 || e.length % 4 !== 0 || e.length > Re || !Te.test(e))
    return null;
  let t = Buffer.from(e, "base64");
  if (t.length > V) return null;
  if (Buffer.from(t).toString("base64") !== e) return null;
  let r;
  try {
    r = new TextDecoder("utf-8", { fatal: !0 }).decode(t);
  } catch {
    return null;
  }
  return q(r) ? r : null;
}
function T(e) {
  return e.resolved !== void 0 || e.custom !== void 0;
}
var R = "get-started",
  M = ["get-started", "keep-iterating"];
function isGetStartedDecision(e) {
  if (e.id !== R || e.options.length !== 2) return !1;
  if (e.custom !== void 0) return !1;
  let t = new Set(e.options.map((r) => r.token));
  return M.every((r) => t.has(r));
}
function X(e) {
  let t = e.find(isGetStartedDecision);
  if (e.some((i) => i !== t && !T(i))) return "in-progress";
  if (t?.resolved === M[0]) return "started";
  if (t !== void 0 && t.resolved === void 0) return "ready";
  return "in-progress";
}
var DECISION_COMMENT_PATTERN =
  /^<!--ws-decision-[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}-\d+-->\s*$/;
function Pe(e) {
  let t = {},
    r = [];
  for (let u of e.split(`
`)) {
    if (u.trim() === "") continue;
    let m = u.match(ve);
    if (!m) return null;
    let g = m[1],
      h = (m[2] ?? "").trim();
    if (h === "") return null;
    if (g === "option") {
      let S = h.match(F);
      if (!S) return null;
      let d = S[1],
        p = (S[2] ?? d).trim();
      if (p === "" || p.length > we) return null;
      r.push({ token: d, label: p });
    } else {
      if (t[g] !== void 0) return null;
      t[g] = h;
    }
  }
  let { id: i, question: a, resolved: o, anchor: s, custom: c } = t;
  if (i === void 0 || !E.test(i)) return null;
  if (a === void 0 || a.length > ye) return null;
  if (r.length < U || r.length > j) return null;
  if (new Set(r.map((u) => u.token)).size !== r.length) return null;
  let f;
  if (t.lean !== void 0) {
    let u = t.lean.match(F);
    if (!u) return null;
    let m = u[1],
      g = u[2]?.trim();
    if (g !== void 0 && (g === "" || g.length > Me)) return null;
    if (!r.some((h) => h.token === m)) return null;
    f = { token: m, reason: g };
  }
  if (s !== void 0 && !ANCHOR_VALUE_PATTERN.test(s)) return null;
  if (o !== void 0 && !r.some((u) => u.token === o)) return null;
  if (c !== void 0) {
    if (o !== void 0) return null;
    if (i === R) return null;
    if (D(c) === null) return null;
  }
  return {
    id: i,
    question: a,
    options: r,
    lean: f,
    resolved: o,
    custom: c,
    anchor: s,
  };
}
function renderDecisionItem(e) {
  let t = T(e),
    r = t ? "resolved" : "open",
    i =
      e.resolved === void 0
        ? void 0
        : e.options.find((g) => g.token === e.resolved),
    a = e.custom === void 0 ? null : D(e.custom),
    o =
      `data-decision-id="${escapeHtmlAttribute(e.id)}" data-decision-state="${r}"` +
      (e.lean === void 0 ? "" : ` data-lean-choice="${escapeHtmlAttribute(e.lean.token)}"`) +
      (e.resolved === void 0
        ? ""
        : ` data-resolved-choice="${escapeHtmlAttribute(e.resolved)}"`) +
      (a === null ? "" : ` data-resolved-custom="${escapeHtmlAttribute(a)}"`) +
      (e.anchor === void 0 ? "" : ` data-anchor="${escapeHtmlAttribute(e.anchor)}"`),
    s = e.lean,
    c = e.options
      .map((g) => {
        let h = `<span class="option-label">${escapeHtmlAttribute(g.label)}</span>`,
          S = escapeHtmlAttribute(g.token),
          d = s !== void 0 && g.token === s.token,
          p =
            s !== void 0 && g.token === s.token && s.reason !== void 0
              ? `<span class="why">${escapeHtmlAttribute(s.reason)}</span>`
              : "";
        if (t) {
          let P = g.token === e.resolved ? "option chosen" : "option dim",
            A = g.token === e.resolved && d ? p : "";
          return `<span class="${P}" data-choice="${S}">${h}${A}</span>`;
        }
        return `<span class="${d ? "option recommended" : "option"}" role="button" aria-disabled="true" title="Deciding from the page needs this Artifact to be able to update itself" data-choice="${S}">${h}${d ? '<span class="badge">Recommended</span>' : ""}${p}</span>`;
      })
      .join(""),
    f =
      e.custom !== void 0
        ? `<p class="decided">Decided: ${escapeHtmlAttribute(e.custom)}</p>`
        : i === void 0
          ? ""
          : `<p class="decided">Decided: ${escapeHtmlAttribute(i.label)}</p>`,
    u =
      e.anchor === void 0
        ? ""
        : `<p class="anchor">Anchor: <code>${escapeHtmlAttribute(e.anchor)}</code></p>`,
    m =
      t || e.id === R
        ? ""
        : `<div class="custom-answer"><input class="option-input" type="text" maxlength="${K}" disabled aria-disabled="true" title="Deciding from the page needs this Artifact to be able to update itself"` +
          ' placeholder="Or type your own answer\u2026" aria-label="Your own answer"></div>';
  return (
    `<div class="call-item" ${o}>` +
    '<span class="marker" aria-hidden="true">\u25CF</span>' +
    `<div class="call-body"><p><span class="q">${escapeHtmlAttribute(e.question)}</span></p>` +
    f +
    u +
    `<div class="options">${c}${m}</div></div></div>`
  );
}
var DECISION_ISLAND_SLOT = "<!--ws-decisions-island-->",
  STATUS_BANNER_SLOT = "<!--ws-status-banner-->",
  STATUS_FOOTER_SLOT = "<!--ws-status-footer-->";
function renderDecisionIslandScript(e) {
  if (e.length === 0) return null;
  for (let i of e) if (i.custom !== void 0 && D(i.custom) === null) return null;
  let t = e.map((i) => ({
      id: i.id,
      opts: i.options.map((a) => a.token),
      state: T(i) ? "resolved" : "open",
      choice: i.resolved ?? null,
      custom: i.custom === void 0 ? null : D(i.custom),
    })),
    r = jsonStringify({ items: t });
  for (let i of ["<", ">", "&", "'", "\\"]) if (r.includes(i)) return null;
  if (parseDecisionIslandItems(r) === null) return null;
  return `<script type="application/json" id="ws-decisions">${r}</script>`;
}
function renderStatusBanner(e) {
  let t = X(e),
    r = e.find(isGetStartedDecision),
    i = countMatching(e, (o) => o !== r && !T(o)),
    a =
      t === "started"
        ? "Build started"
        : t === "ready"
          ? "Ready to build"
          : i > 0
            ? `In progress \u2014 ${i} ${pluralize(i, "decision")} open`
            : "In progress";
  return `<div class="ws-banner" data-ws-state="${t}">${a}</div>`;
}
function renderStatusFooter(e, t) {
  let r = e.resolved,
    i = r === void 0 ? "open" : "resolved",
    a =
      `data-decision-id="${escapeHtmlAttribute(e.id)}" data-decision-state="${i}"` +
      (r === void 0 ? "" : ` data-resolved-choice="${escapeHtmlAttribute(r)}"`),
    o = e.options
      .map((c) => {
        let f = `<span class="option-label">${escapeHtmlAttribute(c.label)}</span>`,
          u = escapeHtmlAttribute(c.token);
        if (r !== void 0)
          return `<span class="${c.token === r ? "option chosen" : "option dim"}" data-choice="${u}">${f}</span>`;
        return `<span class="${c.token === M[0] ? "option cta" : "option cta-quiet"}" role="button" aria-disabled="true" title="Deciding from the page needs this Artifact to be able to update itself" data-choice="${u}">${f}</span>`;
      })
      .join(""),
    s =
      r === M[0]
        ? '<span class="ws-status-note">Build started \u2014 the workshop session is on it.</span>'
        : r !== void 0
          ? '<span class="ws-status-note">Keeping at it \u2014 more to come.</span>'
          : X(t) === "ready"
            ? '<span class="ws-status-note">All decisions are in.</span>'
            : '<span class="ws-status-note">Decisions still open above.</span>';
  return `<div class="ws-status-footer" ${a}>${o}${s}</div>`;
}
var C = 10,
  J = 120,
  xe = new RegExp(`^[-*][ \\t]+\\[([^\\][\\r\\n]{1,${J}})\\]\\((\\S+)\\)$`),
  DELIVERABLE_KIND_ATTRIBUTE = "data-ws-deliverable-kind",
  ke = ["pr", "artifact", "other"],
  Ce = new RegExp(
    `/artifact/(?:[A-Za-z0-9_-]*-)?(?:[0-9a-f]{8}-|(${BASE58_SLUG_PATTERN})(?:/|$))`,
  );
function Le(e) {
  if (/\/(?:pull|pull-requests|-\/merge_requests)\/\d+/.test(e.pathname))
    return "pr";
  let t = Ce.exec(e.pathname);
  if (t && (t[1] === void 0 || slugToUuid(t[1]) !== null)) return "artifact";
  return "other";
}
function _e(e) {
  let t = [];
  for (let r of e.split(`
`)) {
    let i = r.trim();
    if (i === "") continue;
    let a = xe.exec(i);
    if (!a) return null;
    let o = a[1].trim();
    if (o.length === 0 || o.length > J) return null;
    let s;
    try {
      s = new URL(a[2]);
    } catch {
      return null;
    }
    if (s.protocol !== "https:" && s.protocol !== "http:") return null;
    if (t.length >= C) return null;
    t.push({ label: o, url: s.toString(), kind: Le(s) });
  }
  return t.length === 0 ? null : t;
}
function Oe(e) {
  return `<div class="ws-deliverables"><ul>${e.map((r) => `<li class="ws-deliverable" ${DELIVERABLE_KIND_ATTRIBUTE}="${r.kind}"><a href="${escapeHtmlAttribute(r.url)}" target="_blank" rel="noopener noreferrer">${escapeHtmlAttribute(r.label)}</a></li>`).join("")}</ul></div>`;
}
function tallyDeliverableKinds(e) {
  let t = e.slice(0, C),
    r = (i) => (ke.includes(i) ? i : "other");
  return {
    n: t.length,
    pr: countMatching(t, (i) => r(i) === "pr"),
    artifact: countMatching(t, (i) => r(i) === "artifact"),
    other: countMatching(t, (i) => r(i) === "other"),
  };
}
function extractWorkshopDecisions(e, t, r = renderDecisionItem) {
  let i = {
    md: e,
    substitute: (d) => ({ html: d, complete: !0 }),
    nonceMarker: "",
    decisions: [],
    deliverables: [],
  };
  if (!Se.test(e)) return i;
  let a;
  try {
    a = t(e);
  } catch {
    return i;
  }
  let o = [],
    s = new Set(),
    c = 0,
    f = 0;
  for (let d of a) {
    if (!e.startsWith(d.raw, c)) {
      let p = e.indexOf(d.raw, c);
      if (p === -1) break;
      c = p;
    }
    if (
      d.type === "code" &&
      "lang" in d &&
      typeof d.lang === "string" &&
      d.lang.trim() === me &&
      s.size < H
    ) {
      let p = Pe(d.text);
      if (p !== null && !s.has(p.id))
        (s.add(p.id), o.push({ offset: c, raw: d.raw, decision: p }));
    } else if (
      d.type === "code" &&
      "lang" in d &&
      typeof d.lang === "string" &&
      d.lang.trim() === he
    ) {
      let p = _e(d.text);
      if (p !== null && f + p.length <= C)
        ((f += p.length), o.push({ offset: c, raw: d.raw, deliverables: p }));
    }
    c += d.raw.length;
  }
  if (o.length === 0) return i;
  let u = randomUUID(),
    m = "",
    g = 0,
    h = [];
  for (let [d, p] of o.entries()) {
    let w = `<!--ws-decision-${u}-${d}-->`;
    ((m +=
      e.slice(g, p.offset) +
      `

${w}

`),
      (g = p.offset + p.raw.length),
      h.push({
        ph: w,
        html: "decision" in p ? r(p.decision) : Oe(p.deliverables),
      }));
  }
  m += e.slice(g);
  let S = `ws-decision-${u}`;
  return {
    md: m,
    nonceMarker: S,
    substitute: (d) => {
      let p = d,
        w = !0;
      for (let { ph: L, html: P } of h) {
        let A = p.split(L);
        if (A.length === 1) w = !1;
        p = A.join(P);
      }
      if (p.includes(S)) w = !1;
      return { html: p, complete: w };
    },
    decisions: o.flatMap((d) => ("decision" in d ? [d.decision] : [])),
    deliverables: o.flatMap((d) => ("deliverables" in d ? d.deliverables : [])),
  };
}
var DECISION_ISLAND_OPEN_TAG_END = 'id="ws-decisions">';
function findIslandOpenTagSpans(e, t) {
  let r = `id="${t}"`,
    i = [],
    a = e.indexOf(r);
  while (a !== -1) {
    let o = a + r.length,
      s = o + matchDataIdAttribute(e, o);
    if (e.charCodeAt(s) === 62) i.push([a, s + 1]);
    a = e.indexOf(r, o);
  }
  return i;
}
var Ie = 65536;
async function N(e, t) {
  try {
    let { nestingBudgetExceeded: r } = await import("../../01-核心基础设施/核心工具-未归类/RAWTEXT_MODES.4tes4m4a.js");
    if (r(e)) return null;
    return await We(e, t);
  } catch {
    return null;
  }
}
async function We(e, t) {
  let { parse: r } = await import("../../01-核心基础设施/核心工具-未归类/parse.4jce22r9.js"),
    i = asDocument(r(e, { sourceCodeLocationInfo: !0 })),
    a = [],
    o = [{ node: i, inTemplate: !1 }];
  for (;;) {
    let s = o.pop();
    if (s === void 0) break;
    let { node: c, inTemplate: f } = s;
    if (c.tagName !== void 0) {
      if (getAttributeValue(c, "id") === t) a.push({ node: c, inTemplate: f });
    }
    for (let u of c.childNodes ?? []) o.push({ node: u, inTemplate: f });
    for (let u of c.content?.childNodes ?? [])
      o.push({ node: u, inTemplate: !0 });
  }
  return a;
}
async function parseDecisionIsland(e, t) {
  if (!E.test(t)) return { ambiguous: !0 };
  let r = findIslandOpenTagSpans(e, t);
  if (r.length === 0) {
    let m = await N(e, t);
    if (m === null) return { ambiguous: !0 };
    return m.length === 0 ? null : { ambiguous: !0 };
  }
  if (r.length !== 1) return { ambiguous: !0 };
  let [i, a] = r[0],
    o = await N(e, t);
  if (o === null || o.length !== 1 || o[0].inTemplate) return { ambiguous: !0 };
  let s = o[0].node,
    c = (getAttributeValue(s, "type") ?? "").trim().toLowerCase(),
    f = s.sourceCodeLocation?.startTag,
    u = s.sourceCodeLocation?.endTag;
  if (
    (s.tagName ?? "").toLowerCase() !== "script" ||
    c !== "application/json" ||
    f === void 0 ||
    f === null ||
    u === void 0 ||
    u === null
  )
    return { ambiguous: !0 };
  if (i < f.startOffset || a !== f.endOffset) return { ambiguous: !0 };
  return { json: e.slice(f.endOffset, u.startOffset) };
}
function parseDecisionIslandItems(e) {
  if (e.length > Ie) return null;
  let t;
  try {
    t = jsonParse(e);
  } catch {
    return null;
  }
  if (t === null || typeof t !== "object" || Array.isArray(t)) return null;
  let r = Object.keys(t);
  if (r.length !== 1 || r[0] !== "items") return null;
  let i = t.items;
  if (!Array.isArray(i) || i.length > H) return null;
  let a = [],
    o = new Set();
  for (let s of i) {
    if (s === null || typeof s !== "object" || Array.isArray(s)) return null;
    let c = Object.keys(s).sort();
    if (
      c.length !== 5 ||
      c[0] !== "choice" ||
      c[1] !== "custom" ||
      c[2] !== "id" ||
      c[3] !== "opts" ||
      c[4] !== "state"
    )
      return null;
    let f = s,
      u = f.id;
    if (typeof u !== "string" || !E.test(u) || o.has(u)) return null;
    o.add(u);
    let m = f.opts;
    if (
      !Array.isArray(m) ||
      m.length < U ||
      m.length > j ||
      m.some((d) => typeof d !== "string" || !E.test(d)) ||
      new Set(m).size !== m.length
    )
      return null;
    let g = f.state;
    if (g !== "open" && g !== "resolved") return null;
    let h = f.choice;
    if (h !== null && (typeof h !== "string" || !m.includes(h))) return null;
    let S = f.custom;
    if (S !== null && (typeof S !== "string" || decodeBase64Text(S) === null)) return null;
    if (S !== null && u === R) return null;
    if (g === "open" && (h !== null || S !== null)) return null;
    if (g === "resolved" && (h !== null) === (S !== null)) return null;
    a.push({ id: u, opts: m.slice(), state: g, choice: h, custom: S });
  }
  return a;
}
function Fe(e) {
  return (
    e.id === R &&
    e.opts.length === 2 &&
    M.every((t) => e.opts.includes(t)) &&
    e.custom === null
  );
}
function deriveIslandWorkshopState(e) {
  let t = e.find(Fe);
  if (e.some((i) => i !== t && i.state === "open")) return "in-progress";
  if (t !== void 0 && t.choice === M[0]) return "started";
  if (t !== void 0 && t.state === "open") return "ready";
  return "in-progress";
}
class Y {
  gate = null;
  register(e) {
    this.gate = e;
  }
  isOpen() {
    return this.gate?.() === !0;
  }
}
var Q = new Y();
function registerWorkshopEnabledGate(e) {
  Q.register(e);
}
function isWorkshopEnabled() {
  return Q.isOpen();
}
export {
  buildAgentArtifactKey,
  revokeCodeliveredFollowups,
  MAX_ARTIFACT_WATCHES,
  MAX_WATCH_HANDOFF_ENTRIES,
  stopArtifactSupervisor,
  getArtifactState,
  markThreadAutoReplied,
  rearmWatchNoticeBudgets,
  clearRefusedPublishBodies,
  clearReadDeliveries,
  pruneRefusedPublishBodies,
  getArtifactRoom,
  getArtifactPresence,
  disposePresenceSlug,
  retirePresenceSlug,
  isPresenceDeclined,
  hasArtifactState,
  notifyRoomConsentChanged,
  notifyRoomAccountChanged,
  disposeArtifactRoom,
  resetOwnPrincipalTokens,
  handleArtifactAccountChange,
  flushLiveReplicasBeforeLogout,
  retireLiveDocWatches,
  resetArtifactConversationState,
  XHTML_NAMESPACE,
  asDocument,
  asDocumentFragment,
  getAttributeValue,
  DECISION_ID_PATTERN,
  ANCHOR_VALUE_PATTERN,
  decodeBase64Text,
  isGetStartedDecision,
  DECISION_COMMENT_PATTERN,
  renderDecisionItem,
  DECISION_ISLAND_SLOT,
  STATUS_BANNER_SLOT,
  STATUS_FOOTER_SLOT,
  renderDecisionIslandScript,
  renderStatusBanner,
  renderStatusFooter,
  DELIVERABLE_KIND_ATTRIBUTE,
  tallyDeliverableKinds,
  extractWorkshopDecisions,
  DECISION_ISLAND_OPEN_TAG_END,
  findIslandOpenTagSpans,
  parseDecisionIsland,
  parseDecisionIslandItems,
  deriveIslandWorkshopState,
  registerWorkshopEnabledGate,
  isWorkshopEnabled,
};
