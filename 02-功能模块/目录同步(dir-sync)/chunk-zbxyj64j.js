// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ve, l, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { sleep, withDeadline } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { writeFileAtomic } from "../../01-核心基础设施/安全文件系统(FS加固)/atomic-file-write.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import {
  DEPENDENCY_DIR_NAMES,
  isUnderDependencyDir,
  readExactBytes,
  GIT_OBJECT_ID_REGEX,
  isNonZeroObjectId,
  MAX_LISTED_COMMITS,
  MAX_LISTED_SKIPPED_FILES,
  MAX_LISTED_CONFLICTED_COMMITS,
  MAX_CONFLICT_CODE_UNITS,
  MAX_LISTED_APPLIED_TURNS,
  MAX_LISTED_FAST_FORWARDS,
  MAX_REF_NAME_CODE_UNITS,
  isValidGitBranchName,
  isKnownSyncSkipReason,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { MAX_ETAG_LENGTH, HALT_REASONS, getResolvedBundleSchema, isSyncableRelativePath, getWithheldCountsSchema } from "../文件同步-Sync/sync-journal.js";
import { parseSessionSyncState, parseSessionSeedNote } from "../../01-核心基础设施/共享小工具-未细化/sync-state-schema.js";
import { STREAMING_TIMING_DEFAULTS } from "../../01-核心基础设施/共享小工具-未细化/chunk-ydn85r3t.js";
import { Ha } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { s, T, O, v, c, it, $e, Ko, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { watch } from "fs";
var ce = 50;
function Ke(e, t, r) {
  let a = watch(e, { recursive: !0, persistent: !1, encoding: "utf8" }, t);
  return (
    a.on("error", r),
    a.unref(),
    {
      close: () => {
        (a.removeAllListeners(), a.on("error", () => {}), a.close());
      },
    }
  );
}
function Je(e, t) {
  if (e === null || e === void 0) return null;
  let r = typeof e === "string" ? e : e.toString("utf8"),
    a = t === "\\" ? r.replaceAll("\\", "/") : r;
  return a === "" || a === "." ? null : a;
}
var Qe = ".claude-cloud-trash",
  Ze = ".DS_Store";
function en(e) {
  let t = e.split("/"),
    r = t.at(-1) ?? "",
    a = t.slice(0, -1);
  if (t.includes(".git") || t.includes(Qe) || isUnderDependencyDir(e) || DEPENDENCY_DIR_NAMES.has(r) || r === Ze)
    return { kind: "drop" };
  if (r.endsWith(".tmp") || r.endsWith(".swp") || r.endsWith("~"))
    return a.length === 0
      ? { kind: "unknown" }
      : { kind: "path", path: a.join("/") };
  return { kind: "path", path: e };
}
function Jpt({
  root: e,
  watch: t = Ke,
  separator: r = getCurrentPlatform() === "windows" ? "\\" : "/",
  settleMs: a = ce,
  nowMs: p = Date.now,
}) {
  let f = null,
    d = !1,
    g = 0,
    _ = 0,
    w = !1;
  function S() {
    d = !1;
    let x = f;
    f = null;
    try {
      x?.close();
    } catch {}
  }
  return {
    start(x) {
      S();
      let I = (C) => {
          try {
            x(C);
          } catch (R) {
            n(`dir-sync: change hint handler threw: ${l(R)}`);
          }
        },
        h = (C) => {
          if (!d) return;
          (S(),
            (w = !0),
            n(
              `dir-sync: directory watch lost (${C}); sync points carry on without it`,
            ),
            I({ kind: "overflow", at: p() }));
        },
        L = (C, R) => {
          if (!d) return;
          if (((g += 1), g === 1))
            n(
              `dir-sync: directory watch delivering events (first: ${C} ${R === null ? "<unnamed>" : "named"})`,
            );
          let B = Je(R, r),
            H = B === null ? { kind: "unknown" } : en(B);
          switch (H.kind) {
            case "drop":
              if (((_ += 1), _ === 1))
                n(
                  "dir-sync: directory watch dropping events for .git, dependency directories, the session trash or .DS_Store (first such event; counted from here)",
                );
              return;
            case "unknown":
              I({ kind: "unknown", at: p() });
              return;
            case "path":
              I({ kind: "paths", paths: [H.path], at: p() });
              return;
          }
        },
        N;
      try {
        ((d = !0), (N = t(e, L, (C) => h(`watcher error: ${l(C)}`))));
      } catch (C) {
        d = !1;
        let R = `watch unavailable: ${l(C)} (${A(C) ?? "no code"})`;
        return (n(`dir-sync: ${R}`), { stop() {}, started: !1, startError: R });
      }
      if (!d) {
        try {
          N.close();
        } catch {}
        return { stop() {}, started: !1, startError: "watcher error at start" };
      }
      return (
        n("dir-sync: directory watch started on the synced root"),
        (f = N),
        {
          stop() {
            if (f === N) S();
          },
          started: !0,
        }
      );
    },
    async flush() {
      if (d) await sleep(a);
    },
    stats: () => ({ events: g, dropped: _, lost: w }),
  };
}
function Te(e, t) {
  if (t === 0 || !e.includes("/")) return e;
  return t === 1 ? e.slice(0, e.lastIndexOf("/")) : e.slice(0, e.indexOf("/"));
}
var tn = 2;
function xe(e, t, r) {
  if (e.size <= r) return { paths: e, grain: t };
  if (t >= tn) return { paths: "many", grain: t };
  return xe(new Set([...e].map((a) => Te(a, t + 1))), t + 1, r);
}
var pe = {
  setTimeout: (e, t) => {
    let r = setTimeout(e, t);
    return (r.unref(), r);
  },
  clearTimeout: (e) => clearTimeout(e),
};
function Ae({
  quietMs: e,
  maxWaitMs: t,
  maxNamedPaths: r,
  onBurst: a,
  timers: p = pe,
}) {
  let f = null,
    d = 0,
    g = null,
    _ = null;
  function w() {
    if (g !== null) (p.clearTimeout(g), (g = null));
    if (_ !== null) (p.clearTimeout(_), (_ = null));
  }
  function S() {
    let x = f;
    if (((f = null), (d = 0), w(), x !== null))
      a(x === "many" ? "many" : [...x]);
  }
  return {
    touch(x) {
      if (f === null) {
        if (((f = new Set()), t !== void 0)) _ = p.setTimeout(S, t);
      }
      if (f !== "many") {
        let I = xe(f.add(Te(x, d)), d, r);
        ((f = I.paths), (d = I.grain));
      }
      if (g !== null) p.clearTimeout(g);
      g = p.setTimeout(S, e);
    },
    flush: S,
    cancel() {
      ((f = null), (d = 0), w());
    },
    pending: () => f !== null,
  };
}
var Re = 256;
function ne(e) {
  return e === "many" ? "many paths" : `${e.length} path(s)`;
}
var fe = "\x00",
  rn = 3,
  on = 5;
function d3n(e, { timers: t = pe } = {}) {
  let r = null,
    a = null,
    p = STREAMING_TIMING_DEFAULTS,
    f = null,
    d = !1,
    g = !0,
    _ = -1 / 0,
    w = null,
    S = !1,
    x = -1 / 0,
    I = null,
    h = !1,
    L = 0,
    N = 0,
    C = !1,
    R = new Set(),
    B = null,
    H = [],
    te = !1,
    D = !1,
    Se = -1 / 0,
    q = !1,
    re = !1,
    K = !0,
    U = 0,
    oe = !1,
    be = 0,
    z = {
      hints: 0,
      bursts: 0,
      ignoredBursts: 0,
      watchPasses: 0,
      ships: 0,
      overflows: 0,
      feedEvents: 0,
      feedDropped: 0,
    };
  function ie(o, y) {
    logEvent("tengu_dir_sync_watch", {
      event: fromEnum(o),
      start_error: fromEnumOpt(
        y === void 0
          ? null
          : y.includes("EMFILE")
            ? "emfile"
            : y.includes("ENOSPC")
              ? "enospc"
              : y.includes("ERR_FEATURE_UNAVAILABLE_ON_PLATFORM")
                ? "unsupported"
                : "other",
      ),
      hints: z.hints,
      bursts: z.bursts,
      ignored_bursts: z.ignoredBursts,
      watch_passes: z.watchPasses,
      ships: z.ships,
      overflows: z.overflows,
      feed_events: z.feedEvents,
      feed_dropped: z.feedDropped,
      quiet_ms: p.quietMs,
      max_wait_ms: p.maxWaitMs,
      min_gap_ms: p.minGapMs,
    });
  }
  function se() {
    let o = r,
      y = a?.stats?.();
    if (
      ((z.feedEvents += y?.events ?? 0),
      (z.feedDropped += y?.dropped ?? 0),
      (r = null),
      (a = null),
      (K = !0),
      (U += 1),
      f?.cancel(),
      (f = null),
      I !== null)
    )
      (t.clearTimeout(I), (I = null));
    if (((S = !1), (D = !1), o !== null)) (o.stop(), ie("stopped"));
  }
  let J = null;
  function Q(o) {
    if (J !== o)
      ((J = o),
        n(
          `dir-sync: change hints are not streamed just now (${o}); the tree is marked changed for the next sync point`,
        ));
  }
  function je(o) {
    if (d || e.notRunning() !== null) {
      Q(d ? "sync stopped" : `sync not running: ${e.notRunning()}`);
      return;
    }
    if (
      ((z.hints += 1),
      (_ = Math.max(_, o.at, e.nowMs())),
      (g = !0),
      (K = o.kind === "overflow"),
      o.kind === "overflow")
    )
      z.overflows += 1;
    if (q || e.nowMs() < Se) {
      Q("an install's own writes");
      return;
    }
    if (R.size > 0) {
      (Q("a command runs on this machine"), (D = !0));
      return;
    }
    if (!e.turnOpen()) {
      Q("no turn this machine sent is open");
      return;
    }
    if (J !== null) ((J = null), n("dir-sync: change hints stream again"));
    switch (o.kind) {
      case "paths":
        o.paths.forEach((y) => f?.touch(y));
        return;
      case "unknown":
      case "overflow":
        f?.touch(fe);
        return;
    }
  }
  function We(o) {
    z.bursts += 1;
    let y = U;
    Ue(o).then(
      (E) => {
        if (y !== U) {
          n(
            `dir-sync: burst of ${ne(o)} left to the sync point that ran meanwhile`,
          );
          return;
        }
        if (!E) {
          ((z.ignoredBursts += 1),
            n(
              `dir-sync: burst of ${ne(o)} touched only ignored paths; nothing to upload`,
            ));
          return;
        }
        ae(ne(o));
      },
      () => {
        if (y === U) ae(ne(o));
      },
    );
  }
  async function Ue(o) {
    if (
      e.inScope === void 0 ||
      oe ||
      o === "many" ||
      o.includes(fe) ||
      o.length > Re
    )
      return !0;
    oe = !0;
    try {
      return await e.inScope(o);
    } finally {
      oe = !1;
    }
  }
  function ae(o = "owed") {
    if (d || h || R.size > 0 || !e.turnOpen() || e.notRunning() !== null) {
      ((D ||= R.size > 0),
        (S ||= h),
        n(
          `dir-sync: burst of ${o} not uploaded now (${d ? "stopped" : h ? "paused until a sync point ships" : R.size > 0 ? "a command runs here" : !e.turnOpen() ? "no open turn" : "sync not running"})`,
        ));
      return;
    }
    if (!g) {
      ((S = !1),
        n(
          `dir-sync: burst of ${o} already carried by a pass that began after it; nothing to upload`,
        ));
      return;
    }
    if (w !== null || I !== null) {
      ((S = !0),
        n(
          `dir-sync: burst of ${o} rides the next upload (one in flight or the gap not yet passed)`,
        ));
      return;
    }
    let y = x + p.minGapMs - e.nowMs();
    if (y > 0) {
      ((S = !0),
        (I = t.setTimeout(() => {
          ((I = null), ee());
        }, y)));
      return;
    }
    if (e.mayShip?.(e.facts().gen + 1) === !1) {
      ((S = !0),
        n(
          `dir-sync: burst of ${o} held back by the barrier ledger (the peer has not taken the last generation)`,
        ));
      return;
    }
    ((z.watchPasses += 1),
      n(`dir-sync: burst of ${o} \u2192 upload pass queued (watch)`),
      (w = e
        .send("watch")
        .then(
          (E) => {
            if (
              (n(
                `dir-sync: watch-triggered pass ended: ${E.landed ? E.outcome : `not landed (${E.reason ?? E.outcome})`}, generation ${E.generation}`,
              ),
              E.landed && E.outcome === "sent" && E.trigger === "watch")
            )
              z.ships += 1;
            if (!E.landed && E.reason === "held_for_command") {
              D = !0;
              return;
            }
            if (!E.landed) {
              ((h = !0),
                n(
                  `dir-sync: a watcher-triggered upload did not land (${E.reason ?? E.outcome}); the next sync point uploads instead`,
                ));
              return;
            }
            if (!E.tookSnapshot) {
              S = r !== null;
              return;
            }
            if (
              ((L = E.outcome === "sent" || E.trigger !== "watch" ? 0 : L + 1),
              L >= rn)
            )
              ((h = !0),
                n(
                  "dir-sync: the watcher keeps firing with nothing to upload; pausing it until the next sync point ships",
                ));
            if (E.trigger === "watch" && E.outcome === "sent") {
              if (((N += 1), N >= on))
                ((C = !h),
                  (h = !0),
                  n(
                    "dir-sync: several uploads went up with no sign of life from the cloud session; pausing the watcher until the next message or sync point lands",
                  ));
            }
          },
          (E) => {
            ((h = !0),
              n(`dir-sync: a watcher-triggered upload failed: ${l(E)}`));
          },
        )
        .finally(() => {
          ((w = null), (x = e.nowMs()), ee());
        })));
  }
  function ee() {
    if (S) ((S = !1), ae());
  }
  function ye() {
    if (q || re) return;
    let o = H;
    ((H = []), o.forEach((y) => y()));
  }
  function ke() {
    let o = B === null ? 0 : e.nowMs() - B;
    if (((B = null), te)) {
      if (
        ((te = !1),
        n(
          `dir-sync: install deferred while serving a command on this machine, running now (held for ${o} ms)`,
        ),
        !d && e.notRunning() === null)
      )
        e.pull();
    }
    if (D) ((D = !1), f?.touch(fe));
  }
  function qe(o) {
    if (!o.landed) return;
    if (o.tookSnapshot) {
      if (o.trigger !== "watch" || o.outcome === "sent")
        ((h = !1), (C = !1), (L = 0));
      if (o.trigger !== "watch") N = 0;
      if (o.startedAtMs >= _) ((g = !1), (S = !1));
      if (o.trigger !== "watch") x = Math.max(x, o.endedAtMs);
    }
    if (w === null && I === null) ee();
  }
  function Xe(o) {
    let y = o.endedAtMs - o.startedAtMs;
    if (o.landed && !o.tookSnapshot)
      return { kind: "failed", reason: "no_snapshot", gen: o.generation };
    if (o.landed)
      return o.outcome === "sent"
        ? { kind: "shipped", gen: o.generation, files: o.files, ms: y }
        : { kind: "unchanged", gen: o.generation, ms: y };
    let E = e.notRunning();
    if (E !== null) return { kind: "not_running", reason: E };
    return o.kept
      ? { kind: "kept_here", reason: o.reason ?? o.outcome, gen: o.generation }
      : { kind: "failed", reason: o.reason ?? o.outcome, gen: o.generation };
  }
  function Ee(o, y) {
    return {
      trigger: "settle",
      landed: !1,
      outcome: "not_run",
      reason: o,
      kept: !1,
      generation: e.facts().gen,
      files: 0,
      tookSnapshot: !1,
      startedAtMs: y,
      endedAtMs: e.nowMs(),
    };
  }
  return {
    streaming: {
      start(o, y = STREAMING_TIMING_DEFAULTS) {
        if ((se(), d || e.notRunning() !== null)) return;
        if (
          ((p = y),
          (a = o),
          (f = Ae({
            quietMs: p.quietMs,
            maxWaitMs: p.maxWaitMs,
            maxNamedPaths: Re,
            onBurst: We,
            timers: t,
          })),
          (r = o.start(je)),
          r.started)
        ) {
          ((K = !1), ie("started"));
          return;
        }
        (ie("start_failed", r.startError),
          n(
            `dir-sync: no directory watch (${r.startError ?? "unknown"}); changes upload at sync points only`,
          ),
          (r = null),
          (a = null),
          (f = null));
      },
      async stop() {
        (se(), await w);
      },
      async settle(o, y) {
        let E = e.nowMs();
        if (a !== null)
          await a.flush().catch((de) => {
            n(`dir-sync: change feed flush failed: ${l(de)}`);
          });
        (f?.cancel(), (U += 1), (S = !1), (D = !1));
        let ve = e.notRunning(),
          le = () => _e(Ee("aborted", E)),
          _e = () => {},
          G =
            ve !== null
              ? { kind: "not_running", reason: ve }
              : Xe(
                  await (() => {
                    let de = new Promise((ue) => {
                      if (((_e = ue), y?.aborted === !0)) le();
                      else y?.addEventListener("abort", le, { once: !0 });
                    });
                    return Promise.race([
                      e
                        .send("settle")
                        .catch(
                          (ue) => (
                            n(`dir-sync: a barrier's upload failed: ${l(ue)}`),
                            Ee("unexpected", E)
                          ),
                        ),
                      de,
                    ]).finally(() => y?.removeEventListener("abort", le));
                  })(),
                );
        return (
          (x = e.nowMs()),
          logEvent("tengu_dir_sync_settle", {
            point: fromEnum(o),
            outcome: fromEnum(G.kind),
            files: G.kind === "shipped" ? G.files : 0,
            duration_ms:
              G.kind === "shipped" || G.kind === "unchanged" ? G.ms : 0,
          }),
          G
        );
      },
      holdInstalls(o) {
        if (R.size === 0) B = e.nowMs();
        if ((R.add(o), !q && !re)) return Promise.resolve();
        return new Promise((y) => {
          H.push(y);
        });
      },
      releaseInstalls(o) {
        if (R.delete(o) && R.size === 0) ke();
      },
      frame() {
        let o = e.facts();
        return (
          (be += 1),
          {
            side: "laptop",
            gen: o.gen,
            tree: o.tree,
            taken: o.taken,
            dirty: g || K || o.snapshotting || o.shipping !== null,
            shipping: o.shipping,
            takes: o.takes,
            instance: e.instance,
            seq: be,
          }
        );
      },
    },
    deferPull() {
      if (R.size === 0 || d) return !1;
      return ((te = !0), !0);
    },
    held: () => R.size > 0 && !d,
    dropHolds() {
      if (R.size === 0) return;
      (R.clear(), ke());
    },
    peerAlive() {
      if (((N = 0), C))
        ((C = !1),
          (h = !1),
          n(
            "dir-sync: the cloud session showed a sign of life; the watcher streams again",
          ),
          ee());
    },
    installing(o) {
      if (((q = o), !o)) ((Se = e.nowMs() + ce), ye());
    },
    takingIn(o) {
      if (((re = o), !o)) ye();
    },
    passEnded: qe,
    halt() {
      ((d = !0), se());
    },
  };
}
var sn = "opening";
function p3n(e, t) {
  let r = null,
    a = 0,
    p = new Set(),
    f = e.then(
      (d) => ((r = d), p.forEach((g) => void d?.holdInstalls(g)), p.clear(), d),
    );
  return {
    start(d, g) {
      f.then((_) => _?.start(d, g));
    },
    async stop() {
      await (await f)?.stop();
    },
    async settle(d, g) {
      return (
        (
          r ??
          (await new Promise((w) => {
            if (g?.aborted === !0) {
              w(null);
              return;
            }
            let S = () => w(null);
            (g?.addEventListener("abort", S, { once: !0 }),
              withDeadline(f, t).then((x) => {
                (g?.removeEventListener("abort", S), w(x));
              }));
          }))
        )?.settle(d, g) ?? { kind: "not_running", reason: "not_open" }
      );
    },
    holdInstalls(d) {
      if (r !== null) return r.holdInstalls(d);
      return (p.add(d), Promise.resolve());
    },
    releaseInstalls(d) {
      if (r !== null) {
        r.releaseInstalls(d);
        return;
      }
      p.delete(d);
    },
    frame() {
      if (r !== null) {
        let d = r.frame();
        return { ...d, seq: d.seq + a };
      }
      return (
        (a += 1),
        {
          side: "laptop",
          gen: 0,
          tree: null,
          taken: 0,
          dirty: !0,
          shipping: null,
          takes: !1,
          instance: sn,
          seq: a,
        }
      );
    },
  };
}
import { lstat, mkdir, open as dn } from "fs/promises";
import { dirname } from "path";
var j = 67108864,
  me = 384,
  cn = 448;
async function Oe(e, t) {
  if (isHoverRestEnabled() && t !== void 0)
    try {
      let r = await t.backend.read([{ key: t.key, offset: 0, length: j + 1 }]);
      if (!r.ok) return { kind: "unreadable" };
      let [a] = r.value.items;
      if (!a.found) return { kind: "absent" };
      return a.totalBytes > j
        ? { kind: "unreadable" }
        : {
            kind: "ok",
            content: Buffer.from(
              a.value.buffer,
              a.value.byteOffset,
              a.value.byteLength,
            ),
          };
    } catch {
      return { kind: "unreadable" };
    }
  try {
    let r = await lstat(e, { bigint: !0 });
    if (!r.isFile()) return { kind: "unreadable" };
    let a = await dn(e, Ha());
    try {
      let p = await a.stat({ bigint: !0 });
      if (p.dev !== r.dev || p.ino !== r.ino || !p.isFile() || p.size > j)
        return { kind: "unreadable" };
      return { kind: "ok", content: await readExactBytes(a, Number(p.size)) };
    } finally {
      await a.close();
    }
  } catch (r) {
    return W(r) ? { kind: "absent" } : { kind: "unreadable" };
  }
}
async function Fe(e, t, r) {
  if (t.length > j) throw Error("session record too large to store");
  if (isHoverRestEnabled() && r !== void 0) {
    let a = await r.backend.write(r.key, t, { mode: me });
    if (!a.ok)
      throw Error("dir-sync: session record write failed", { cause: a.error });
    return;
  }
  (await mkdir(dirname(e), { recursive: !0, mode: cn }), await writeFileAtomic(e, t, me));
}
async function Ie(e, t, r) {
  if (e.length > j) throw Error("session record too large to store");
  let a = !1;
  async function* p() {
    if ((yield e, t.aborted)) throw ((a = !0), new Ve());
  }
  let f = await r.backend.writeFromStream(r.key, p(), {
    maxBytes: j,
    mode: me,
  });
  if (f.ok) return;
  if (a) throw new Ve();
  throw Error("dir-sync: session record write failed", { cause: f.error });
}
var ze = 1,
  Ce = 2,
  Qpt = 16,
  kze = 4096,
  Ne = 4096,
  Be = 4096;
function kFt(e) {
  switch (e.kind) {
    case "clone":
      return e.origin !== "remote";
    case "seed":
      return !0;
    case "folder":
      return e.seeded !== !1;
  }
}
function xFt(e) {
  switch (e.kind) {
    case "clone":
      return [e.pin];
    case "folder":
      return e.seeded === !1 ? [] : [e.pin];
    case "seed":
      return [e.worktreeCommit, e.head];
  }
}
function f3n(e) {
  switch (e.kind) {
    case "clone":
      return [e.pin];
    case "folder":
      return e.seeded === !1 ? [] : [e.pin];
    case "seed":
      return [];
  }
}
var F = createLazyValue(() => s().regex(GIT_OBJECT_ID_REGEX).refine(isNonZeroObjectId)),
  V = createLazyValue(() => s().refine(isSyncableRelativePath)),
  De = createLazyValue(() =>
    $e([
      c({ head: F(), branch: s().max(MAX_REF_NAME_CODE_UNITS).nullable().catch(null) }),
      F().transform((e) => ({ head: e, branch: null })),
    ]),
  ),
  Ge = createLazyValue(() =>
    c({
      turn: T().int().positive(),
      notInstalled: v(
        $e([
          c({
            path: V(),
            reason: s()
              .max(64)
              .transform((e) => (isKnownSyncSkipReason(e) ? e : "other")),
          }),
          V().transform((e) => ({ path: e, reason: "other" })),
        ]),
      ).max(MAX_LISTED_SKIPPED_FILES),
      truncated: O(),
    }),
  ),
  pn = createLazyValue(() =>
    c({
      generation: T().int().positive(),
      head: F(),
      branch: s().max(MAX_REF_NAME_CODE_UNITS).refine(isValidGitBranchName).nullable().catch(null),
      indexCommit: F(),
      worktreeCommit: F(),
      indexTree: F(),
      worktreeTree: F(),
      bundle: getResolvedBundleSchema().nullable(),
      withheldCounts: getWithheldCountsSchema(),
      conflicted: v(s().max(4 * MAX_CONFLICT_CODE_UNITS))
        .max(MAX_LISTED_CONFLICTED_COMMITS)
        .optional(),
      downApplied: v(Ge()).max(MAX_LISTED_APPLIED_TURNS),
      fastForwardedTo: v(De())
        .max(MAX_LISTED_FAST_FORWARDS)
        .default(() => []),
      fastForwardedOn: v(s().max(MAX_REF_NAME_CODE_UNITS).nullable().catch(null))
        .max(MAX_LISTED_FAST_FORWARDS)
        .optional(),
      sentAtMs: T().int().nonnegative(),
    }),
  ),
  he = createLazyValue(() =>
    c({
      version: $e([k(ze), k(Ce)]),
      engine: k("git"),
      sessionId: s().min(1),
      armedAtMs: T().int().nonnegative(),
      start: Ko("kind", [
        c({
          kind: k("clone"),
          pin: F(),
          origin: X(["remote", "bundle", "overlay"])
            .optional()
            .catch(void 0),
        }),
        c({
          kind: k("seed"),
          head: F(),
          indexCommit: F(),
          worktreeCommit: F(),
        }),
        c({
          kind: k("folder"),
          pin: F(),
          seedTree: F(),
          seeded: k(!1).optional(),
        }),
      ]),
      uploadOnly: k(!0).optional(),
      sent: v(pn())
        .max(Qpt)
        .refine((e) =>
          e.every((t, r) => r === 0 || t.generation < e[r - 1].generation),
        ),
      outboundEtag: s().min(1).max(MAX_ETAG_LENGTH).nullable(),
      journalEtag: s().min(1).max(MAX_ETAG_LENGTH).nullable(),
      announcementToken: s().min(1).max(64).nullable().optional(),
      announcementEtag: s().min(1).max(MAX_ETAG_LENGTH).nullable().optional(),
      acked: v(F()).max(MAX_LISTED_COMMITS),
      received: v(
        c({ generation: T().int().positive(), worktreeCommit: F() }),
      ).max(MAX_LISTED_COMMITS),
      appliedGeneration: T().int().nonnegative(),
      installedSinceUpload: v(
        c({
          path: V(),
          blobId: F().nullable(),
          mode: T().int().nonnegative(),
          turn: T().int().positive().optional(),
        }),
      ).max(kze),
      installedEarlier: v(c({ path: V(), blobId: F() }))
        .max(Ne)
        .optional()
        .transform((e) => e ?? []),
      parkedRemovals: v(V())
        .max(Be)
        .optional()
        .transform((e) => e ?? []),
      parkedRemovalsOverflow: O()
        .optional()
        .transform((e) => e ?? !1),
      downApplied: v(Ge()).max(MAX_LISTED_APPLIED_TURNS),
      peerNeed: F().nullable(),
      peerBasedOn: F().nullable().default(null),
      fastForwardedTo: v(De())
        .max(MAX_LISTED_FAST_FORWARDS)
        .default(() => []),
      fastForwardedOn: v(s().max(MAX_REF_NAME_CODE_UNITS).nullable().catch(null))
        .max(MAX_LISTED_FAST_FORWARDS)
        .optional(),
      generationSpent: T().int().nonnegative().default(0),
      ended: c({
        reason: X(HALT_REASONS).catch("ended_earlier"),
        line: s().max(2000),
        atMs: T().int().nonnegative(),
        published: O(),
      })
        .optional()
        .catch(void 0),
    }),
  ),
  fn = createLazyValue(() => it({ engine: s().optional() }));
function mn(e) {
  return e.kind === "folder" && e.seeded === !1 ? Ce : ze;
}
function Zpt({ sessionId: e, armedAtMs: t, start: r, uploadOnly: a = !1 }) {
  return {
    version: mn(r),
    engine: "git",
    sessionId: e,
    armedAtMs: t,
    start: r,
    ...(a && { uploadOnly: !0 }),
    sent: [],
    outboundEtag: null,
    journalEtag: null,
    acked: [],
    received: [],
    appliedGeneration: 0,
    installedSinceUpload: [],
    installedEarlier: [],
    parkedRemovals: [],
    parkedRemovalsOverflow: !1,
    downApplied: [],
    peerNeed: null,
    peerBasedOn: null,
    fastForwardedTo: [],
    generationSpent: 0,
  };
}
function hn(e, t) {
  let r = he().safeParse(e);
  if (!r.success || r.data.sessionId !== t) return null;
  let { fastForwardedOn: a, sent: p, ...f } = r.data;
  return {
    ...f,
    fastForwardedTo: Pe(f.fastForwardedTo, a),
    sent: p.map(({ fastForwardedOn: d, ...g }) => ({
      ...g,
      fastForwardedTo: Pe(g.fastForwardedTo, d),
    })),
  };
}
function Pe(e, t) {
  return t === void 0
    ? [...e]
    : e.map((r, a) => ({ head: r.head, branch: r.branch ?? t[a] ?? null }));
}
function Me(e) {
  return {
    fastForwardedTo: e.map((t) => t.head),
    fastForwardedOn: e.map((t) => t.branch),
  };
}
function Le(e) {
  return Buffer.from(
    b({
      ...e,
      ...Me(e.fastForwardedTo),
      sent: e.sent.map((t) => ({ ...t, ...Me(t.fastForwardedTo) })),
    }),
  );
}
async function mte(e, t, r) {
  let a = await Oe(e, r);
  if (a.kind !== "ok") return a;
  let p = xt(a.content.toString("utf8"), !1),
    f = fn().safeParse(p);
  if (!f.success) return { kind: "unreadable" };
  switch (f.data.engine) {
    case void 0:
      return parseSessionSyncState(p, t) !== null || parseSessionSeedNote(p, t) !== null
        ? { kind: "unsupported", engine: "rows" }
        : { kind: "unreadable" };
    case "git": {
      let d = hn(p, t);
      return d === null ? { kind: "unreadable" } : { kind: "git", record: d };
    }
    default:
      return { kind: "unsupported", engine: f.data.engine };
  }
}
class eft extends Error {
  constructor() {
    super("git session record is not one its reader would accept");
    this.name = "GitSessionRecordInvalidError";
  }
}
async function Ybe(e, t, r) {
  if (!he().safeParse(t).success) throw new eft();
  await Fe(e, Le(t), r);
}
async function m3n(e, t, r) {
  if (!he().safeParse(e).success) throw new eft();
  await Ie(Le(e), t, r);
}
function ge(e) {
  return Number.isSafeInteger(e) && e > 0;
}
function gte(e) {
  return e.sent[0] ?? null;
}
function X4(e) {
  return Math.max(e.sent[0]?.generation ?? 0, e.generationSpent) + 1;
}
function tft(e, t) {
  return ge(t) && t > e.generationSpent ? { ...e, generationSpent: t } : e;
}
function g3n(e) {
  return HFt(e).length < MAX_LISTED_APPLIED_TURNS && e.installedSinceUpload.length < kze;
}
function HFt(e) {
  let t = new Map();
  for (let r of [
    ...[...e.sent].reverse().flatMap((a) => a.downApplied),
    ...e.downApplied,
  ])
    t.set(r.turn, r);
  return [...t.values()];
}
function h3n(e) {
  let t = gn(e).map((r) => r.head);
  return dedupe(t.reverse()).reverse().slice(-MAX_LISTED_FAST_FORWARDS);
}
function gn(e) {
  return [
    ...[...e.sent].reverse().flatMap((t) => t.fastForwardedTo),
    ...e.fastForwardedTo,
  ];
}
function _3n(e, t) {
  let r = (p) => p.filter((f) => f.branch === t).at(-1)?.head ?? null,
    a = r(e.fastForwardedTo);
  if (a !== null) return a;
  for (let p of e.sent) {
    if (p.branch === t) return p.head;
    let f = r(p.fastForwardedTo);
    if (f !== null) return f;
  }
  return null;
}
function y3n(e, t, r = null) {
  let a = e.fastForwardedTo.at(-1);
  if (!GIT_OBJECT_ID_REGEX.test(t) || !isNonZeroObjectId(t) || (a?.head === t && a.branch === r)) return e;
  let p = r !== null && isValidGitBranchName(r) ? r : null,
    f = e.fastForwardedTo.filter((d) => !(d.head === t && d.branch === p));
  return { ...e, fastForwardedTo: wn([...f, { head: t, branch: p }], MAX_LISTED_FAST_FORWARDS) };
}
function wn(e, t) {
  if (e.length <= t) return e;
  let r = new Map(e.map((g, _) => [g.branch, _])),
    a = new Set(r.values()),
    p = e.map((g, _) => _).filter((g) => !a.has(g)),
    f = new Set(p.slice(0, e.length - t)),
    d = e.filter((g, _) => !f.has(_));
  return d.length <= t ? d : d.slice(-t);
}
function S3n(e, t) {
  let r = dedupe(t.holds.filter((w) => GIT_OBJECT_ID_REGEX.test(w))).slice(0, MAX_LISTED_COMMITS),
    a = t.need !== null && GIT_OBJECT_ID_REGEX.test(t.need) ? t.need : null,
    p = t.basedOn != null && GIT_OBJECT_ID_REGEX.test(t.basedOn) ? t.basedOn : null,
    f = t.installsBankedThrough ?? 0,
    d = (w) => w.turn > f,
    g =
      f > 0 &&
      (e.downApplied.some((w) => !d(w)) ||
        e.sent.some((w) => w.downApplied.some((S) => !d(S))));
  if (
    r.length === e.acked.length &&
    r.every((w, S) => w === e.acked[S]) &&
    a === e.peerNeed &&
    p === e.peerBasedOn &&
    !g
  )
    return e;
  let _ = g
    ? e.sent.map((w) =>
        w.downApplied.some((S) => !d(S))
          ? { ...w, downApplied: w.downApplied.filter(d) }
          : w,
      )
    : e.sent;
  return {
    ...e,
    sent: He(_, r, p),
    acked: r,
    peerNeed: a,
    peerBasedOn: p,
    downApplied: g ? e.downApplied.filter(d) : e.downApplied,
  };
}
function b3n(e, t) {
  if (!ge(t.generation) || !GIT_OBJECT_ID_REGEX.test(t.worktreeCommit)) return e;
  let r = e.received.find((a) => a.worktreeCommit === t.worktreeCommit);
  if (r !== void 0 && r.generation >= t.generation) return e;
  return {
    ...e,
    received: [
      t,
      ...e.received.filter((a) => a.worktreeCommit !== t.worktreeCommit),
    ].slice(0, MAX_LISTED_COMMITS),
  };
}
function w3n(e, t) {
  let r = e.downApplied.find((h) => h.turn === t.turn);
  if (!ge(t.turn) || (r === void 0 && e.downApplied.length >= MAX_LISTED_APPLIED_TURNS)) return e;
  let a = t.installed.filter(
      (h) =>
        isSyncableRelativePath(h.path) &&
        (h.blobId === null || (GIT_OBJECT_ID_REGEX.test(h.blobId) && isNonZeroObjectId(h.blobId))) &&
        Number.isSafeInteger(h.mode) &&
        h.mode >= 0,
    ),
    p = new Set(a.map((h) => h.path)),
    f = new Map(e.installedSinceUpload.map((h) => [h.path, h]));
  for (let h of a) (f.delete(h.path), f.set(h.path, { ...h, turn: t.turn }));
  let d = t.notInstalled.filter((h) => isSyncableRelativePath(h.path)),
    g = t.complete,
    w = [
      ...new Map(
        [...(g ? [] : (r?.notInstalled ?? [])), ...d].map((h) => [h.path, h]),
      ).values(),
    ].filter((h) => !p.has(h.path)),
    S = {
      turn: t.turn,
      notInstalled: w.slice(0, MAX_LISTED_SKIPPED_FILES),
      truncated:
        (!g && (r?.truncated ?? !1)) ||
        t.truncated ||
        a.length !== t.installed.length ||
        d.length !== t.notInstalled.length ||
        w.length > MAX_LISTED_SKIPPED_FILES ||
        f.size > kze,
    },
    x = new Map(e.installedEarlier.map((h) => [h.path, h])),
    I = t.written === void 0 ? null : new Set(t.written);
  for (let h of a)
    if (h.blobId === null) x.delete(h.path);
    else if (I === null || I.has(h.path))
      (x.delete(h.path), x.set(h.path, { path: h.path, blobId: h.blobId }));
  return {
    ...e,
    appliedGeneration: Math.max(e.appliedGeneration, t.turn),
    installedSinceUpload: [...f.values()].slice(-kze),
    installedEarlier: [...x.values()].slice(-Ne),
    ...(t.parked !== void 0 && Sn(t.parked)),
    downApplied:
      r === void 0
        ? [...e.downApplied, S]
        : e.downApplied.map((h) => (h.turn === t.turn ? S : h)),
  };
}
function Sn(e) {
  let t = e.filter(isSyncableRelativePath).slice(0, Be);
  return { parkedRemovals: t, parkedRemovalsOverflow: t.length !== e.length };
}
function tln(e, t, r) {
  if (t.generation !== X4(e)) return e;
  let a = t.branch !== null && isValidGitBranchName(t.branch) ? t.branch : null;
  return {
    ...e,
    sent: He(
      [
        {
          ...t,
          branch: a,
          downApplied: e.downApplied,
          fastForwardedTo: e.fastForwardedTo,
        },
        ...e.sent,
      ],
      e.acked,
      e.peerBasedOn,
    ),
    outboundEtag: r ?? e.outboundEtag,
    installedSinceUpload: [],
    downApplied: [],
    fastForwardedTo: [],
    peerNeed: null,
  };
}
function He(e, t, r = null) {
  let a = e.findIndex((d) => t.includes(d.worktreeCommit)),
    p = r === null ? -1 : e.findIndex((d) => d.worktreeCommit === r),
    f = a === -1 ? Qpt : Math.max(a, p, 1) + 1;
  return e
    .slice(0, Math.min(f, Qpt))
    .map((d, g) =>
      a === -1 ||
      g < a ||
      (d.downApplied.length === 0 && d.fastForwardedTo.length === 0)
        ? d
        : { ...d, downApplied: [], fastForwardedTo: [] },
    );
}
export {
  Jpt,
  d3n,
  p3n,
  Qpt,
  kze,
  kFt,
  xFt,
  f3n,
  Zpt,
  mte,
  eft,
  Ybe,
  m3n,
  gte,
  X4,
  tft,
  g3n,
  HFt,
  h3n,
  _3n,
  y3n,
  S3n,
  b3n,
  w3n,
  tln,
};
