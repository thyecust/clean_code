// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as RT } from "./文件监听-Watch.3efypmps.js";
import { he, sn, Nm, mp } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { dt, ge, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { wc, Et, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { Vj } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import {
  clearAgentDefinitionsCache,
  Rk,
  mMe,
  _5e,
  $V,
  F8n,
  Q_t,
  evictSentSkillNames,
  clearCommandMemoizationCaches,
  clearCommandsCache,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import * as b from "path";
var re = 1000,
  oe = 500,
  se = 300,
  le = 2000,
  J = 30000,
  ce = 60000,
  x = "<skill-watcher-idle-wake>",
  Q = 1e4,
  ue = 2000,
  U = !0;
async function de(o) {
  let c = await _5e(sn(), o),
    s = he(),
    p = s !== sn() ? await _5e(s, o) : [],
    m = new Map();
  for (let g of [...c, ...p])
    m.set(g.name, g.type === "prompt" ? (g.contentHash ?? "") : "");
  return m;
}
function fe(o) {
  let c = o?.stabilityThreshold ?? re,
    s = o?.pollInterval ?? oe,
    p = o?.reloadDebounce ?? se,
    m = o?.chokidarInterval ?? le,
    g,
    D = o?.getFingerprint ?? (() => de(g)),
    T = o?.now ?? Date.now,
    A = o?.lastInteractionTime ?? Nm,
    e = Le(),
    w = Rk.subscribe(() => e.emit()),
    u = null,
    y = null,
    v = null,
    H = !1,
    C = [],
    E = 0,
    R = new Set(),
    I = null,
    N = !1,
    k = !1,
    L = null,
    F = null,
    B;
  async function V(t, r) {
    if (N || k) return;
    if (((N = !0), (B = t), (g = r), !L))
      L = F8n(() => {
        (clearCommandMemoizationCaches(), e.emit());
      });
    let d = ++E,
      a = await X(r);
    if (k || d !== E) return;
    if (((C = a), C.length === 0)) return;
    if (((I = await D().catch(() => null)), k || d !== E)) return;
    (n(`Watching for changes in skill/command directories: ${C.join(", ")}...`),
      (u = G(m)));
    let P = u;
    if ((await new Promise((f) => P.once("ready", () => f())), U))
      ((v = setInterval(W, Q)), v.unref?.());
    F = Et(j);
  }
  function G(t) {
    let r = RT.watch(C, {
      persistent: !0,
      ignoreInitial: !0,
      depth: 2,
      awaitWriteFinish: { stabilityThreshold: c, pollInterval: s },
      ignored: (d, a) => {
        if (a && !a.isFile() && !a.isDirectory() && !a.isSymbolicLink())
          return !0;
        if (d.split(/[/\\]/).some((P) => P === ".git")) return !0;
        if (a?.isFile()) return !d.endsWith(".md");
        return !1;
      },
      ignorePermissionErrors: !0,
      usePolling: U,
      interval: t,
      binaryInterval: t,
      atomic: !0,
    });
    return (
      r.on("add", z),
      r.on("change", z),
      r.on("unlink", z),
      r.on("error", (d) =>
        n(`[skills] watcher error: ${l(d)}`, { level: "warn" }),
      ),
      r
    );
  }
  function W() {
    if (k || !u) return;
    let t = T() - A() > ce;
    if (t === H) return;
    H = t;
    let r = t ? J : m;
    if (
      (n(
        `[skills] ${t ? "idle" : "active"} \u2014 switching poll interval to ${r}ms`,
      ),
      u.close(),
      (u = G(r)),
      !t)
    )
      K(x);
  }
  async function ee() {
    if (!N || k) return;
    let t = await X(g);
    if (k) return;
    let r = dedupe([...C, ...t]);
    if (r.length === C.length) return;
    let d = ++E;
    if (
      ((C = r),
      n(
        `[skills] session moved \u2014 watching skill/command directories: ${C.join(", ")}`,
      ),
      u)
    )
      u.close();
    u = G(H ? J : m);
    let a = u,
      P = new Promise((f) => a.once("ready", () => f()));
    if ((await Promise.race([P, sleep(ue, void 0, { unref: !0 })]), k || d !== E))
      return;
    if (U && v === null) ((v = setInterval(W, Q)), v.unref?.());
    F ??= Et(j);
  }
  function j() {
    if (((k = !0), F)) (F(), (F = null));
    if (L) (L(), (L = null));
    if (v) (clearInterval(v), (v = null));
    let t = Promise.resolve();
    if (u) ((t = u.close()), (u = null));
    if (y) (clearTimeout(y), (y = null));
    return (R.clear(), w(), e.clear(), t);
  }
  function z(t) {
    (n(`Detected skill change: ${t}`),
      logEvent("tengu_skill_file_changed", { source: S("chokidar") }),
      K(t));
  }
  function K(t) {
    if ((R.add(t), y)) clearTimeout(y);
    y = setTimeout(async () => {
      y = null;
      let r = [...R];
      R.clear();
      let d = r.length === 1 && r[0] === x;
      if (!d) {
        let f = r.find((_) => _ !== x) ?? r[0];
        if (await te(f)) {
          n(`ConfigChange hook blocked skill reload (${r.length} paths)`);
          return;
        }
      }
      $V();
      let a = await D().catch(() => null);
      if (a === null) {
        (clearCommandsCache(), clearAgentDefinitionsCache(), q());
        return;
      }
      let P =
        I !== null &&
        a.size === I.size &&
        [...I].every(([f, _]) => a.get(f) === _);
      if (P && d) {
        clearAgentDefinitionsCache();
        return;
      }
      if (
        (clearCommandsCache(),
        clearAgentDefinitionsCache(),
        await Q_t().catch((f) =>
          n(
            `[skills] re-reading the moved directory's skills failed: ${l(f)}`,
            { level: "warn" },
          ),
        ),
        P)
      )
        n(
          `[skills] ${r.length} fs event(s) but skill list unchanged \u2014 skipping re-announce`,
        );
      else {
        if (I !== null) {
          let f = [...I].filter(([_, ie]) => a.get(_) !== ie).map(([_]) => _);
          if (f.length > 0) evictSentSkillNames(f);
        }
        I = a;
      }
      q();
    }, p);
  }
  function te(t) {
    if (!B)
      return (
        logError(Error("skillChangeDetector: ConfigChange hook gate not wired")),
        Promise.resolve(!0)
      );
    return B("skills", t);
  }
  function q() {
    try {
      e.emit();
    } catch (t) {
      for (let r of t instanceof AggregateError ? t.errors : [t])
        logError(dt(ge(r), "skillChangeDetector: subscriber threw during reload"));
    }
  }
  function ne() {
    if (k) return;
    (w(), (w = Rk.subscribe(() => e.emit())));
  }
  return {
    initialize: V,
    dispose: j,
    rehome: ee,
    [Symbol.asyncDispose]: j,
    subscribe: e.subscribe,
    rebridgeSkillsChanged: ne,
    _checkIdleTransitionForTest: W,
  };
}
var iM = fe();
async function X(o) {
  let c = ae(),
    s = [],
    p = mMe("userSettings", "skills");
  if (p)
    try {
      (await c.stat(p), s.push(p));
    } catch {}
  if (p) {
    let e = b.join(p, Vj);
    try {
      (await c.stat(e), s.push(e));
    } catch {}
  }
  let m = mMe("userSettings", "commands");
  if (m)
    try {
      (await c.stat(m), s.push(m));
    } catch {}
  let g = mMe("projectSettings", "skills");
  if (g)
    try {
      let e = b.resolve(g);
      if (isHoverRestEnabled() && o !== void 0) {
        if (await O(o, e)) s.push(e);
      } else (await c.stat(e), s.push(e));
    } catch {}
  let D = mMe("projectSettings", "commands");
  if (D)
    try {
      let e = b.resolve(D);
      if (isHoverRestEnabled() && o !== void 0) {
        if (await O(o, e)) s.push(e);
      } else (await c.stat(e), s.push(e));
    } catch {}
  let T = mMe("userSettings", "agents");
  if (T)
    try {
      (await c.stat(T), s.push(T));
    } catch {}
  let A = mMe("projectSettings", "agents");
  if (A)
    try {
      let e = b.resolve(A);
      if (isHoverRestEnabled() && o !== void 0) {
        if (await O(o, e)) s.push(e);
      } else (await c.stat(e), s.push(e));
    } catch {}
  for (let e of mp()) {
    let w = b.join(e, ".claude", "skills");
    try {
      if (isHoverRestEnabled() && o !== void 0) {
        if (await O(o, b.resolve(w))) s.push(w);
      } else (await c.stat(w), s.push(w));
    } catch {}
  }
  return s;
}
async function O(o, c) {
  let s = await o.hostFiles.stat(wc.workspace(c));
  return s.ok && s.value.kind !== "absent";
}
export { iM };
