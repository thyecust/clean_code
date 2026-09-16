// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { RS } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { j, B, K, sc, ke, g8, _8 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { R, W, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { We, Yhe, Xg, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { qt } from "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { kd } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { hr } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { Ge } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { C5t, het, xU } from "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import { Uc, Qo } from "../../01-核心基础设施/共享小工具-未细化/chunk-0hk68fj9.js";
import { posix as te } from "path";
var { dirname: I, isAbsolute: ne, join: T, normalize: ie } = te,
  Ztr = "/mnt/user-data/uploads",
  gyr = T(I(Ztr), "outputs"),
  EEt = ".stage-tmp.";
function re(t) {
  if (!t) return Ztr;
  if (!ne(t)) throw Error("CLAUDE_STAGE_FILE_ROOT must be an absolute path");
  return ie(t);
}
function Goe() {
  return re(a.CLAUDE_STAGE_FILE_ROOT);
}
function i$e() {
  return T(I(Goe()), "outputs");
}
import { lstat as se, readdir as oe } from "fs/promises";
import {
  basename as v,
  dirname as A,
  join as d,
  resolve as O,
  sep as U,
} from "path";
var Wh = "ExitPlanMode",
  Jc = "ExitPlanMode";
function mJe() {
  let t = a.CLAUDE_CODE_ENVIRONMENT_KIND;
  if (t === "byoc" || t === "anthropic_cloud") return t;
  return null;
}
function AEt(t, e) {
  return Boolean(t) && (!e || e === "anthropic_cloud");
}
var le = 10,
  _ = 2000,
  ce = 8;
class X {
  primedListing = null;
  slugMeta = new Map();
  planFileCache = null;
  planFileBackend = null;
  planFileWatches = new Map();
  primeInFlight = null;
  waitCapMs = _;
  stopReleasingOnSwitch = null;
  lastUnwatched = new Map();
  earlyObserved = new Map();
  earlyGeneration = 0;
  lastSnapshottedWorkshopDoc = null;
  snapshotChain = Promise.resolve();
  planFileCacheKeyFor(t) {
    if (this.planFileCache === null) return null;
    let e = O(t);
    if (A(e) !== P()) return null;
    return v(e);
  }
  notePlanFileWritten(t, e) {
    if (this.planFileCache === null) {
      this.noteEarly(t, e);
      return;
    }
    let i = this.planFileCacheKeyFor(t);
    if (i !== null) {
      let r = this.planFileWatches.get(i);
      if (r !== void 0) r.generation++;
      if (
        (this.planFileCache.set(i, e),
        this.primedListing !== null && this.primedListing.dir === P())
      )
        this.primedListing.listing.add(i);
    }
  }
  notePlanFileForgotten(t) {
    if (this.planFileCache === null) {
      this.noteEarly(t, void 0);
      return;
    }
    let e = this.planFileCacheKeyFor(t);
    if (e !== null) {
      let i = this.planFileWatches.get(e);
      if (i !== void 0) {
        (this.dropToUnknown(e, i), this.refreshPlanFile(e, i));
        return;
      }
      this.planFileCache.delete(e);
    }
  }
  resetPlanFileCacheToUnknown() {
    if (this.planFileCache === null) return;
    for (let t of [...this.planFileCache.keys()]) {
      let e = this.planFileWatches.get(t);
      if (e !== void 0) (this.dropToUnknown(t, e), this.refreshPlanFile(t, e));
      else this.planFileCache.delete(t);
    }
  }
  activatePlanFileCache(t) {
    if (
      ((this.planFileCache ??= new Map()),
      M() && t !== void 0 && this.planFileBackend === null)
    ) {
      ((this.planFileBackend = t),
        (this.stopReleasingOnSwitch = sc(() => this.releaseStaleWatches())));
      for (let e of new Set(_8().values())) this.watchSlug(e, !1);
      this.earlyObserved.clear();
    }
  }
  noteEarly(t, e) {
    if (!M()) return;
    let i = O(t);
    if (A(i) !== P()) return;
    if ((this.earlyGeneration++, e === void 0)) this.earlyObserved.delete(v(i));
    else this.earlyObserved.set(v(i), e);
  }
  watchSlug(t, e) {
    this.releaseStaleWatches();
    for (let i of F(t)) this.watchPlanFile(t, i, e);
    this.lastUnwatched.clear();
  }
  releaseStaleWatches() {
    if (this.planFileWatches.size === 0) return;
    let t = new Set(_8().values());
    for (let [e, i] of this.planFileWatches)
      if (!t.has(i.slug)) this.stopWatch(e, i);
  }
  watchPlanFile(t, e, i) {
    let r = this.planFileBackend;
    if (
      r === null ||
      this.planFileCache === null ||
      this.planFileWatches.has(e) ||
      !g() ||
      kd(p(y(e))) !== void 0
    )
      return;
    let s = {
      slug: t,
      generation: 0,
      seededAbsent: !1,
      subscription: void 0,
      refreshing: void 0,
      refreshAgain: !1,
      resubscribed: !1,
      stopped: !1,
    };
    this.planFileWatches.set(e, s);
    let o = this.earlyObserved.has(e)
      ? this.earlyObserved.get(e)
      : this.lastUnwatched.get(e);
    if (
      (this.earlyObserved.delete(e), this.lastUnwatched.delete(e), o !== void 0)
    )
      this.planFileCache.set(e, o);
    else if (i && !this.planFileCache.has(e))
      (this.planFileCache.set(e, null), (s.seededAbsent = !0));
    this.subscribePlanFile(r, e, s);
  }
  observePlanFile(t) {
    let e = this.planFileWatches.get(t);
    return { watch: e, generation: e?.generation ?? this.earlyGeneration };
  }
  notePlanFileObserved(t, e, i) {
    let r = this.planFileWatches.get(t);
    if (r !== void 0)
      if (i.watch === r && r.generation === i.generation)
        this.installPlanFile(t, r, e);
      else this.refreshPlanFile(t, r);
    else if (
      this.planFileBackend === null &&
      M() &&
      i.watch === void 0 &&
      this.earlyGeneration === i.generation
    )
      this.earlyObserved.set(t, e);
  }
  watchAgentPlanFile(t, e) {
    if (this.planFileBackend === null) return;
    let i = this.planFileWatches.get(e);
    if (i !== void 0) {
      (this.planFileWatches.delete(e), this.planFileWatches.set(e, i));
      return;
    }
    let r = new Set(F(t)),
      s = [...this.planFileWatches].filter(
        ([o, l]) => l.slug === t && !r.has(o),
      );
    for (let [o, l] of s.slice(0, Math.max(0, s.length - ce + 1))) {
      let u = this.planFileCache?.get(o);
      if ((this.stopWatch(o, l), typeof u === "string"))
        this.planFileCache?.set(o, u);
    }
    this.watchPlanFile(t, e, !1);
  }
  async subscribePlanFile(t, e, i) {
    let r = i.generation,
      s;
    try {
      let o = await t.subscribe(
        { target: "key", key: p(y(e)) },
        (l) => this.onPlanFileEvent(e, i, r, l),
        { maxObservationLagMs: _ },
      );
      if (o.ok) {
        if (i.stopped) o.value.unsubscribe();
        else
          ((i.subscription = o.value),
            n(
              `plans: watching ${e} through the storage interface (changes trail by at most ${o.value.observationLagMs} ms)`,
            ));
        return;
      }
      s = We(o.error);
    } catch (o) {
      s = String(o);
    }
    if (i.stopped) return;
    if (
      (n(
        `plans: watching ${e} through the storage interface failed (${s}); serving its last read and in-process writes`,
      ),
      this.planFileCache?.has(e) !== !0)
    )
      this.refreshPlanFile(e, i);
  }
  onPlanFileEvent(t, e, i, r) {
    if (e.stopped) return;
    if (!r.ok) {
      if (r.error.code === "Unavailable") {
        queueMicrotask(() => void this.refreshPlanFile(t, e));
        return;
      }
      if (((e.subscription = void 0), Yhe())) return;
      n(`plans: the watch on ${t} ended: ${We(r.error)}`);
      let o = this.planFileBackend;
      if (o !== null && !e.resubscribed)
        ((e.resubscribed = !0), this.subscribePlanFile(o, t, e));
      else this.stopWatch(t, e);
      return;
    }
    let s = r.value;
    if (s.kind === "snapshot" && e.generation === i) {
      if (!("absent" in s)) {
        this.installPlanFile(t, e, Buffer.from(s.value).toString("utf-8"));
        return;
      }
      if (e.seededAbsent && e.generation === 0) {
        this.installPlanFile(t, e, null);
        return;
      }
    }
    queueMicrotask(() => void this.refreshPlanFile(t, e));
  }
  installPlanFile(t, e, i) {
    (e.generation++, this.planFileCache?.set(t, i));
  }
  refreshPlanFile(t, e) {
    if (e.refreshing !== void 0) return ((e.refreshAgain = !0), e.refreshing);
    let i = this.planFileBackend;
    if (i === null) return Promise.resolve();
    let r = async () => {
      await Promise.resolve();
      try {
        do {
          e.refreshAgain = !1;
          let s = e.generation,
            o = await this.readPlanFileForWatch(i, t);
          if (e.stopped) return;
          if (o === void 0) {
            if (e.generation === s)
              (e.generation++, this.planFileCache?.delete(t));
            continue;
          }
          if (e.generation === s) this.installPlanFile(t, e, o);
          else e.refreshAgain = !0;
        } while (e.refreshAgain && !e.stopped);
      } finally {
        e.refreshing = void 0;
      }
    };
    return ((e.refreshing = r()), e.refreshing);
  }
  async readPlanFileForWatch(t, e) {
    try {
      let i = await t.read([p(y(e))]);
      if (i.ok) {
        let r = i.value.items[0];
        return r?.found ? Buffer.from(r.value).toString("utf-8") : null;
      }
      n(`plans: v5 read of ${e} failed: ${i.error.code}`);
    } catch (i) {
      n(`plans: v5 read of ${e} threw: ${i}`);
    }
    return;
  }
  async settlePlanFile(t) {
    let e = this.planFileWatches.get(t);
    if (e === void 0) return;
    let i =
      e.refreshing ??
      (this.planFileCache?.has(t) !== !0 ? this.refreshPlanFile(t, e) : void 0);
    if (i !== void 0 && !(await x(i, this.waitCapMs))) this.giveUpWaiting(t, e);
  }
  dropToUnknown(t, e) {
    if (e.stopped) return;
    (e.generation++, this.planFileCache?.delete(t));
  }
  giveUpWaiting(t, e) {
    if (this.planFileCache?.has(t)) this.dropToUnknown(t, e);
  }
  unwatchSlug(t) {
    for (let [e, i] of this.planFileWatches)
      if (i.slug === t) this.stopWatch(e, i);
  }
  unwatchAllPlanFiles() {
    this.lastUnwatched.clear();
    for (let [t, e] of this.planFileWatches) {
      let i = this.planFileCache?.get(t);
      if (i !== void 0) this.lastUnwatched.set(t, i);
      this.stopWatch(t, e);
    }
  }
  stopWatch(t, e) {
    ((e.stopped = !0),
      e.subscription?.unsubscribe(),
      (e.subscription = void 0),
      this.planFileWatches.delete(t),
      this.planFileCache?.delete(t));
  }
  commitPlanListing(t, e) {
    let i = new Set(e);
    this.primedListing = { dir: t, listing: i };
    let r = _8(),
      s = [...this.slugMeta].filter(([, l]) => l.validatedDir !== t),
      o = new Set(s.map(([l]) => l));
    for (let [l, u] of r) if (!o.has(l)) for (let c of F(u)) i.add(c);
    for (let [l, u] of s) {
      let c = r.get(l);
      if (c === void 0) {
        this.slugMeta.delete(l);
        continue;
      }
      if (F(c).some((f) => i.has(f))) {
        if (u.consumed) {
          (n(
            `Plan slug collision for '${c}' in ${t} detected after the plan path was already in use \u2014 keeping the slug (the pre-existing plan file may be overwritten).`,
            { level: "warn" },
          ),
            (u.validatedDir = t));
          continue;
        }
        if (
          (r.delete(l), this.slugMeta.delete(l), ![...r.values()].includes(c))
        )
          this.unwatchSlug(c);
        this.getPlanSlug(l, u.seed);
      } else {
        for (let f of F(c)) i.add(f);
        u.validatedDir = t;
      }
    }
  }
  getPlanSlug(t, e) {
    let i = _8(),
      r = i.get(t);
    if (!r) {
      let s = e ? het(e) : "",
        o = !0;
      for (let c = 0; c < le; c++)
        if (
          ((r = s ? `${s}-${xU()}` : C5t()),
          (o = F(r).some((f) => this.primedListing?.listing.has(f) === !0)),
          !o)
        )
          break;
      let l = !ke() && !g8();
      this.slugMeta.set(t, {
        validatedDir:
          l || this.primedListing === null ? null : this.primedListing.dir,
        consumed: !1,
        seed: e,
      });
      let u =
        !o && this.primedListing !== null && this.primedListing.dir === P();
      if (this.primedListing !== null)
        for (let c of F(r)) this.primedListing.listing.add(c);
      (i.set(t, r), this.lastUnwatched.clear(), this.watchSlug(r, u));
    }
    return r;
  }
  markPlanPathServed(t) {
    let e = this.slugMeta.get(t);
    if (e) e.consumed = !0;
  }
  exemptSlugFromRevalidation(t, e) {
    if ((this.slugMeta.delete(t), this.primedListing !== null))
      for (let i of F(e)) this.primedListing.listing.add(i);
    this.watchSlug(e, !1);
  }
  clearAllPlanSlugs() {
    (_8().clear(), this.slugMeta.clear(), this.unwatchAllPlanFiles());
  }
  noteWorkshopDocSnapshotted(t, e) {
    this.lastSnapshottedWorkshopDoc = { sessionId: t, doc: e };
  }
  reset() {
    ((this.primedListing = null),
      this.slugMeta.clear(),
      this.unwatchAllPlanFiles(),
      this.lastUnwatched.clear(),
      this.earlyObserved.clear(),
      (this.primeInFlight = null),
      (this.waitCapMs = _),
      this.stopReleasingOnSwitch?.(),
      (this.stopReleasingOnSwitch = null),
      (this.planFileBackend = null),
      (this.planFileCache = null),
      (this.lastSnapshottedWorkshopDoc = null),
      (this.snapshotChain = Promise.resolve()));
  }
}
var ue = new j(() => new X());
function L() {
  return B().host;
}
function Lf() {
  return ue.of(L());
}
function WK(t, e) {
  Lf().notePlanFileWritten(t, e);
}
function Cp(t) {
  Lf().notePlanFileForgotten(t);
}
function gJe() {
  Lf().resetPlanFileCacheToUnknown();
}
async function fe(t) {
  let e = [];
  try {
    let i = await Qo(
      (r) =>
        t.listEntries({ namespace: "plan" }, { cursor: r, skipKeyStats: !0 }),
      (r) => {
        for (let s of r)
          if (s.kind === "key" && s.key.namespace === "plan")
            e.push(`${s.key.name}.md`);
      },
    );
    switch (i.status) {
      case "done":
        return e;
      case "error":
        return (
          n(`primePlanSlugCollisions: v5 list failed: ${i.error.code}`),
          null
        );
      case "capped":
        return (
          n(
            `primePlanSlugCollisions: v5 list exceeded ${Uc} pages; leaving the listing unprimed`,
          ),
          null
        );
    }
  } catch (i) {
    return (n(`primePlanSlugCollisions: v5 list threw: ${i}`), null);
  }
}
async function de(t, e) {
  let i = await fe(t);
  if (e !== C()) return;
  if (i !== null) (Lf().activatePlanFileCache(t), Lf().commitPlanListing(e, i));
}
async function x(t, e) {
  let i = hr(),
    r = !1;
  return (
    await Promise.race([
      t
        .catch(() => {})
        .finally(() => {
          ((r = !0), i.abort());
        }),
      Z(e, i.signal),
    ]),
    r
  );
}
async function NEn() {
  let t = Lf();
  if (t.primeInFlight !== null) await x(t.primeInFlight, t.waitCapMs);
}
async function lh(t) {
  let e = C();
  if (t && e === P()) {
    let i = Lf(),
      r = de(t, e);
    i.primeInFlight = r;
    try {
      await r;
    } finally {
      if (i.primeInFlight === r) i.primeInFlight = null;
    }
    return;
  }
  try {
    let i = await oe(e);
    if (e !== C()) return;
    Lf().commitPlanListing(e, i);
  } catch (i) {
    if (!W(i) && !Rt(i)) h(i);
    if (e !== C()) return;
    if (W(i)) Lf().commitPlanListing(e, []);
  }
}
function C() {
  if (!ke() && !g8()) return P();
  return Ea();
}
function P() {
  return d(be(), "plans");
}
function p(t) {
  return Ce.plan(t);
}
function y(t) {
  return t.endsWith(".md") ? t.slice(0, -3) : t;
}
var w = { publishDiscipline: "inPlace" };
async function N(t) {
  try {
    let e = await se(d(Ea(), `${t}.md`));
    return { ...w, mode: e.mode & 511 };
  } catch {
    return w;
  }
}
function g() {
  return Ea() === P();
}
function F(t) {
  return [`${t}.md`, `${t}.workshop.md`];
}
function LN(t, e) {
  return Lf().getPlanSlug(t ?? K(), e);
}
function GK(t) {
  return _8().get(t ?? K());
}
function $zt(t, e) {
  (_8().set(t, e), Lf().exemptSlugFromRevalidation(t, e));
}
function FEn() {
  Lf().clearAllPlanSlugs();
}
class z {
  #e = void 0;
  directory() {
    return ((this.#e ??= this.#t()), this.#e);
  }
  #t() {
    let e = Ge().plansDirectory;
    if (e) {
      let i = Q(),
        r = O(i, e);
      if (pe(r, i)) return r;
      n(`plansDirectory must be within project root: ${e}`, { level: "error" });
    }
    return P();
  }
  reset() {
    this.#e = void 0;
  }
}
var G = new j(() => new z()),
  Ea = Object.assign(
    function () {
      return G.of(L()).directory();
    },
    {
      cache: {
        clear() {
          G.of(L()).reset();
        },
      },
    },
  );
function pe(t, e) {
  if (t !== e && !t.startsWith(e + U)) return !1;
  if (Xg(ae(), t) !== void 0) return !1;
  let i = RS(e);
  if (i === null) return !1;
  let r = t;
  for (;;) {
    let s = RS(r);
    if (s !== null) return s === i || s.startsWith(i + U);
    let o = A(r);
    if (o === r) return !1;
    r = o;
  }
}
async function m(t) {
  let e = Ea();
  try {
    await qt().mkdir(e);
  } catch (i) {
    n(`Failed to create plans directory ${e}: ${i}`, { level: "error" });
  }
  return e;
}
async function lme(t, e) {
  if (e && g()) {
    let r = `${C5t()}-ultraplan`,
      s = d(await m(e), `${r}.md`),
      o = await e.write(p(r), t, w);
    if (!o.ok)
      throw new R(
        `saveRejectedUltraplan: v5 write failed: ${o.error.code}`,
        "saveRejectedUltraplan: v5 write failed",
      );
    return s;
  }
  let i = d(await m(), `${C5t()}-ultraplan.md`);
  return (await qt().write(i, t), i);
}
async function $En(t, e, i) {
  try {
    await m(i);
    let r = v(t, ".md"),
      s =
        i !== void 0 && g() && A(t) === Ea() && kd(p(r)) === void 0
          ? p(r)
          : void 0;
    if (i !== void 0 && s !== void 0) {
      let o = await i.write(s, e, w);
      if (!o.ok) {
        H(t, o.error.code);
        return;
      }
    } else await qt().write(t, e);
    WK(t, e);
  } catch (r) {
    H(t, r instanceof Error ? r.message : String(r));
  }
}
function H(t, e) {
  (Cp(t), n(`Failed to persist plan to ${t}: ${e}`, { level: "error" }));
}
function Gh(t) {
  let e = K(),
    i = LN(e);
  if ((Lf().markPlanPathServed(e), !t)) return d(Ea(), `${i}.md`);
  return d(Ea(), `${i}-agent-${t}.md`);
}
function qoe() {
  let t = LN(K());
  return d(Ea(), `${t}.workshop.md`);
}
async function D(t, e, i) {
  let r = await t.read([p(e)]);
  if (!r.ok) return (n(`${i}: v5 read failed: ${r.error.code}`), null);
  let s = r.value.items[0];
  return s.found ? Buffer.from(s.value).toString("utf-8") : null;
}
async function UEn(t) {
  if (t && g()) return D(t, `${LN(K())}.workshop`, "getPlanWorkshopDoc");
  let e = qoe();
  try {
    return await ae().readFile(e, { encoding: "utf-8" });
  } catch (i) {
    if (W(i)) return null;
    if (Rt(i))
      return (n(`getPlanWorkshopDoc: read failed for ${e}: ${i}`), null);
    return (h(i), null);
  }
}
function CEt() {
  let t = Lf().planFileCache;
  if (t !== null && g()) {
    let e = t.get(`${LN(K())}.workshop.md`);
    if (e !== void 0) return e !== null;
  }
  try {
    return ae().existsSync(qoe());
  } catch {
    return !1;
  }
}
async function BEn(t) {
  if (t === void 0 || !g()) return CEt();
  let e = `${LN(K())}.workshop`;
  await Lf().settlePlanFile(`${e}.md`);
  let i = Lf().planFileCache?.get(`${e}.md`);
  if (i !== void 0) return i !== null;
  return (await t.statMeta(p(e))).ok;
}
function MN(t) {
  let e = Gh(t),
    i = Lf().planFileCache;
  if (i !== null && g()) {
    if (t) Lf().watchAgentPlanFile(LN(K()), v(e));
    let r = i.get(v(e));
    if (r !== void 0) return r;
  }
  return J(e);
}
async function tve(t, e) {
  if (e === void 0 || !g()) return MN(t);
  let i = q(t);
  await Lf().settlePlanFile(i);
  let r = Lf().planFileCache?.get(i);
  if (r !== void 0) return r;
  return D(e, y(i), "getPlan");
}
function q(t) {
  let e = v(Gh(t)),
    i = Lf();
  if (t && i.planFileCache !== null) i.watchAgentPlanFile(LN(K()), e);
  return e;
}
async function jEn(t, e) {
  if (e === void 0 || !g()) return MN(t) !== null;
  let i = q(t);
  await Lf().settlePlanFile(i);
  let r = Lf().planFileCache?.get(i);
  if (r !== void 0) return r !== null;
  return (await e.statMeta(p(y(i)))).ok;
}
async function WEn(t) {
  let e = Gh();
  if (M() && t !== void 0 && g()) {
    let i = v(e),
      r = Lf(),
      s = r.planFileWatches.get(i);
    if (s !== void 0) {
      if (!(await x(r.refreshPlanFile(i, s), r.waitCapMs)))
        r.giveUpWaiting(i, s);
      let o = r.planFileCache?.get(i);
      if (o !== void 0) return o;
    }
    return D(t, y(i), "readPlanFileFresh");
  }
  return J(e);
}
function J(t) {
  try {
    return ae().readFileSync(t, { encoding: "utf-8" });
  } catch (e) {
    if (W(e)) return null;
    if (Rt(e)) return (n(`getPlan: read failed for ${t}: ${e}`), null);
    return (h(e), null);
  }
}
var he = /^[a-z0-9][a-z0-9-]{0,119}$/;
function Y(t) {
  let e = t.messages.find((i) => i.slug)?.slug;
  if (e === void 0) return;
  if (!he.test(e)) {
    n(
      `getSlugFromLog: rejecting malformed transcript slug (${e.length} chars)`,
    );
    return;
  }
  return e;
}
async function V(t, e, i) {
  if (mJe() === null) return;
  if (i && g()) return ge(i, t, e).catch(h);
  let r = d(Ea(), `${e}.workshop.md`);
  try {
    await qt().read(r);
    return;
  } catch (o) {
    if (!W(o)) {
      if (Rt(o)) n(`recoverWorkshopDocForResume: read failed for ${r}: ${o}`);
      else h(o);
      return;
    }
  }
  let s = E(t.messages, "workshop");
  if (!s || s.content.length === 0 || s.content.length > hJe) return;
  try {
    (await m(),
      await qt().write(r, s.content),
      n(
        `Workshop doc recovered from file snapshot, ${s.content.length} chars`,
        { level: "info" },
      ));
  } catch (o) {
    if (Rt(o)) {
      n(`Workshop doc recovery write failed for ${r}: ${o}`);
      return;
    }
    h(o);
  } finally {
    Cp(r);
  }
}
async function ge(t, e, i) {
  let r = `${i}.workshop.md`,
    s = p(`${i}.workshop`),
    o = Lf().observePlanFile(r),
    l = await t.read([s]);
  if (!l.ok) {
    n(`recoverWorkshopDocForResume: v5 read failed for ${i}: ${l.error.code}`);
    return;
  }
  let u = l.value.items[0];
  if (
    (Lf().notePlanFileObserved(
      r,
      u?.found ? Buffer.from(u.value).toString("utf-8") : null,
      o,
    ),
    u?.found)
  )
    return;
  let c = E(e.messages, "workshop");
  if (!c || c.content.length === 0 || c.content.length > hJe) return;
  let f = d(Ea(), r),
    k = !1;
  try {
    await m(t);
    let S = await t.write(s, c.content, w);
    if (!S.ok) {
      n(`Workshop doc recovery write failed for ${i}: ${S.error.code}`);
      return;
    }
    ((k = !0),
      n(
        `Workshop doc recovered from file snapshot, ${c.content.length} chars`,
        { level: "info" },
      ));
  } finally {
    if (k) WK(f, c.content);
    else Cp(f);
  }
}
async function a$e(t, e, i) {
  let r = Y(t);
  if (!r) return !1;
  let s = e ?? K();
  if (($zt(s, r), i && g())) return Fe(i, t, r).catch((l) => (h(l), !1));
  let o = d(Ea(), `${r}.md`);
  await V(t, r).catch(h);
  try {
    return (await qt().read(o), !0);
  } catch (l) {
    if (!W(l)) {
      if (Rt(l))
        return (n(`copyPlanForResume: read failed for ${o}: ${l}`), !1);
      return (h(l), !1);
    }
    if (mJe() === null) return !1;
    n(`Plan file missing during resume: ${o}. Attempting recovery.`);
    let u = E(t.messages, "plan"),
      c = null;
    if (u && b(u.content))
      ((c = u.content),
        n(`Plan recovered from file snapshot, ${c.length} chars`, {
          level: "info",
        }));
    else if (((c = ee(t)), c))
      n(`Plan recovered from message history, ${c.length} chars`, {
        level: "info",
      });
    if (c)
      try {
        return (await m(), await qt().write(o, c), !0);
      } catch (f) {
        if (Rt(f)) return (n(`Plan recovery write failed for ${o}: ${f}`), !1);
        return (h(f), !1);
      } finally {
        Cp(o);
      }
    return (
      n(
        "Plan file recovery failed: no file snapshot or plan content found in message history",
      ),
      !1
    );
  }
}
async function me(t, e) {
  let i = `${e}.workshop.md`,
    r = Lf();
  if (r.planFileWatches.has(i)) {
    await r.settlePlanFile(i);
    return;
  }
  if (r.planFileCache?.has(i)) return;
  let s = r.observePlanFile(i),
    o = await t.read([p(`${e}.workshop`)]);
  if (!o.ok) {
    n(`copyPlanForResume: v5 read failed for ${e}.workshop: ${o.error.code}`);
    return;
  }
  let l = o.value.items[0];
  r.notePlanFileObserved(
    i,
    l?.found ? Buffer.from(l.value).toString("utf-8") : null,
    s,
  );
}
async function Fe(t, e, i) {
  await V(e, i, t).catch(h);
  let r = `${i}.md`,
    s = Lf().observePlanFile(r),
    o = await t.read([p(i)]);
  if (!o.ok)
    return (
      n(`copyPlanForResume: v5 read failed for ${i}: ${o.error.code}`),
      !1
    );
  let l = o.value.items[0];
  if (
    (Lf().notePlanFileObserved(
      r,
      l?.found ? Buffer.from(l.value).toString("utf-8") : null,
      s,
    ),
    await me(t, i),
    l?.found)
  )
    return !0;
  if (mJe() === null) return !1;
  n(`Plan file missing during resume: ${i}. Attempting recovery.`);
  let u = E(e.messages, "plan"),
    c = null;
  if (u && b(u.content))
    ((c = u.content),
      n(`Plan recovered from file snapshot, ${c.length} chars`, {
        level: "info",
      }));
  else if (((c = ee(e)), c))
    n(`Plan recovered from message history, ${c.length} chars`, {
      level: "info",
    });
  if (c) {
    let f = d(Ea(), r),
      k = !1;
    try {
      await m(t);
      let S = await t.write(p(i), c, w);
      if (!S.ok)
        return (n(`Plan recovery write failed for ${i}: ${S.error.code}`), !1);
      return ((k = !0), !0);
    } finally {
      if (k) WK(f, c);
      else Cp(f);
    }
  }
  return (
    n(
      "Plan file recovery failed: no file snapshot or plan content found in message history",
    ),
    !1
  );
}
async function GEn(t, e, i) {
  let r = Y(t);
  if (!r) return !1;
  let s = Ea(),
    o = d(s, `${r}.md`),
    l = LN(e),
    u = d(s, `${l}.md`);
  if ((Lf().exemptSlugFromRevalidation(e, l), i && g()))
    return Pe(i, r, l).catch((c) => (h(c), !1));
  await m();
  try {
    await qt().copy(d(s, `${r}.workshop.md`), d(s, `${l}.workshop.md`));
  } catch (c) {
    if (!W(c))
      if (Rt(c)) n(`copyPlanForFork: workshop sibling copy failed: ${c}`);
      else h(c);
  } finally {
    Cp(d(s, `${l}.workshop.md`));
  }
  try {
    return (await qt().copy(o, u), !0);
  } catch (c) {
    if (W(c)) return !1;
    if (Rt(c)) return (n(`copyPlanForFork: copy failed for ${o}: ${c}`), !1);
    return (h(c), !1);
  } finally {
    Cp(u);
  }
}
async function Pe(t, e, i) {
  let r = d(Ea(), `${i}.workshop.md`),
    s;
  try {
    await m(t);
    let u = await t.read([p(`${e}.workshop`)]);
    if (!u.ok)
      n(`copyPlanForFork: v5 workshop sibling read failed: ${u.error.code}`);
    else if (u.value.items[0].found) {
      let c = u.value.items[0].value,
        f = await t.write(p(`${i}.workshop`), c, await N(`${e}.workshop`));
      if (!f.ok)
        n(`copyPlanForFork: v5 workshop sibling copy failed: ${f.error.code}`);
      else s = Buffer.from(c).toString("utf-8");
    }
  } finally {
    if (s !== void 0) WK(r, s);
    else Cp(r);
  }
  let o = d(Ea(), `${i}.md`),
    l;
  try {
    let u = await t.read([p(e)]);
    if (!u.ok)
      return (
        n(`copyPlanForFork: v5 read failed for ${e}: ${u.error.code}`),
        !1
      );
    if (!u.value.items[0].found) return !1;
    let c = u.value.items[0].value,
      f = await t.write(p(i), c, await N(e));
    if (!f.ok)
      return (
        n(`copyPlanForFork: v5 write failed for ${i}: ${f.error.code}`),
        !1
      );
    return ((l = Buffer.from(c).toString("utf-8")), !0);
  } finally {
    if (l !== void 0) WK(o, l);
    else Cp(o);
  }
}
function ee(t) {
  for (let e = t.messages.length - 1; e >= 0; e--) {
    let i = t.messages[e];
    if (typeof i !== "object" || i === null) continue;
    if (i.type === "assistant") {
      let r = i.message?.content;
      if (Array.isArray(r)) {
        for (let s of r)
          if (
            typeof s === "object" &&
            s !== null &&
            s.type === "tool_use" &&
            s.name === Jc
          ) {
            let o = s.input,
              l = typeof o === "object" && o !== null ? o.plan : void 0;
            if (b(l)) return l;
          }
      }
    }
    if (i.type === "user") {
      let r = i;
      if (b(r.planContent)) return r.planContent;
    }
    if (i.type === "attachment") {
      let r = i;
      if (r.attachment?.type === "plan_file_reference") {
        let s = r.attachment.planContent;
        if (b(s)) return s;
      }
    }
  }
  return null;
}
function E(t, e) {
  for (let i = t.length - 1; i >= 0; i--) {
    let r = t[i];
    if (
      r?.type === "system" &&
      "subtype" in r &&
      r.subtype === "file_snapshot" &&
      "snapshotFiles" in r
    ) {
      let s = r.snapshotFiles;
      if (!Array.isArray(s)) continue;
      let o = s.find(
        (l) =>
          typeof l === "object" &&
          l !== null &&
          l.key === e &&
          typeof l.path === "string" &&
          typeof l.content === "string",
      );
      if (o !== void 0) return o;
    }
  }
  return;
}
var hJe = 2000000,
  Uzt = hJe;
function b(t) {
  return typeof t === "string" && t.length > 0 && t.length <= Uzt;
}
export {
  Wh,
  Jc,
  Ztr,
  gyr,
  EEt,
  Goe,
  i$e,
  mJe,
  AEt,
  Lf,
  WK,
  Cp,
  gJe,
  NEn,
  lh,
  LN,
  GK,
  $zt,
  FEn,
  Ea,
  lme,
  $En,
  Gh,
  qoe,
  UEn,
  CEt,
  BEn,
  MN,
  tve,
  jEn,
  WEn,
  a$e,
  GEn,
  hJe,
  Uzt,
};
