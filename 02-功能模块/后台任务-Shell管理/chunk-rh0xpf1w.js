// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, ze, dl, PDn, yrt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, gxe, b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { replaceInvisibleChars } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { gm, i_ } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { Wi } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { renameWithRetry, writeNewFileExclusive } from "../../01-核心基础设施/安全文件系统(FS加固)/atomic-file-write.js";
import { clampColorLevelForAttacher } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { readSocketTokenFile, timingSafeStringEqual } from "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import { getReplBridgeHandle } from "../权限系统/chunk-1y2g140m.js";
import { getPromptInputStore, setPromptInputValue } from "../../01-核心基础设施/共享小工具-未细化/prompt-input-store.js";
import { writeStateAtomic, logJobWriteError, readJobState, withOwnJobStateWrite, SEED_DETAIL, IDLE_NEEDS, isOverlayNeeds, PRE_BOOT_STATES } from "./chunk-7wsy8vxb.js";
import { Du, BS, tVn, Jgt, zS } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { _ln, markDetached } from "../../01-核心基础设施/共享小工具-未细化/attach-state-tracking.js";
import { getInkInstanceRegistry } from "../../01-核心基础设施/共享小工具-未细化/ink-instance-registry.js";
import { hasEarlyInput, seedEarlyInput } from "../../01-核心基础设施/共享小工具-未细化/early-input-capture.js";
import { getDraftMode, getDraftValue } from "../../01-核心基础设施/共享小工具-未细化/bash-mode-draft-text.js";
import { setSystemTheme } from "../../01-核心基础设施/共享小工具-未细化/theme-resolution.js";
import { s, T, v, c, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { unlink } from "fs/promises";
import { createServer } from "net";
import { join as F } from "path";
import { StringDecoder } from "string_decoder";
class I {
  resolver = null;
  registerResolver(e) {
    this.resolver = e;
  }
}
var x = new j(() => new I());
function Pze(e, t) {
  x.of(e).registerResolver(t);
}
function C(e, t) {
  return x.of(e).resolver?.(t) ?? !1;
}
import { rm as _ } from "fs/promises";
import { join as L } from "path";
var U = ".prompt-stash",
  M = 262144,
  N = 256,
  ee = createLazyValue(() =>
    c({
      text: s(),
      cursorOffset: T().int().nonnegative(),
      pasteIds: v(T().int().nonnegative()).max(N),
      launchWarning: c({
        type: X(["deep-link", "prefill"]),
        prefillLength: T().int().nonnegative(),
      }).optional(),
    }),
  );
function te(e) {
  return b({
    text: e.text,
    cursorOffset: e.cursorOffset,
    pasteIds: Object.values(e.pastedContents)
      .slice(0, N)
      .map((t) => t.id),
    launchWarning: e.launchWarning,
  });
}
function D(e) {
  let t = [],
    r = "";
  for (let o of e
    .replace(
      /\r\n|\r/g,
      `
`,
    )
    .replaceAll("\t", "    ")
    .split(/\u200C+/)) {
    let i = replaceInvisibleChars(o, "", { keepNewlines: !0 });
    if (i === "") continue;
    if (r !== "" && /\S$/.test(r) && /^\S/.test(i)) t.push("\u200C");
    (t.push(i), (r = i));
  }
  return t.join("");
}
async function E(e, t) {
  await _(e, { force: !0 });
  let r = await writeNewFileExclusive(e, t, 384);
  try {
    await renameWithRetry(r, e);
  } catch (o) {
    throw (await _(r, { force: !0 }).catch(() => {}), o);
  }
}
function re(e) {
  let t;
  try {
    t = z(e);
  } catch {
    return null;
  }
  let r = ee().safeParse(t);
  if (!r.success) return null;
  let { cursorOffset: o, pasteIds: i, launchWarning: d } = r.data,
    p = D(r.data.text),
    R = new Set(i),
    u = "",
    l = 0;
  for (let S of Du(p))
    if (R.has(S.id))
      ((u += p.slice(l, S.index)), (l = S.index + S.match.length));
  if (((u += p.slice(l)), u.trim() === "")) return null;
  return {
    text: u,
    cursorOffset: truncateToCodeUnits(u, Math.min(o, u.length)).length,
    pastedContents: {},
    launchWarning: d,
  };
}
async function ne(e, t) {
  let r = L(e, U),
    o = t === null ? "" : te(t);
  if (Buffer.byteLength(o) > M)
    (n("[bg] prompt stash too large to persist; kept in memory only", {
      level: "warn",
    }),
      (o = ""));
  try {
    let i = await _(r, { force: !0 }).then(
      () => !0,
      (d) => (logJobWriteError(d), !1),
    );
    if (o === "" && i) return;
    await E(r, o);
  } catch (i) {
    if (!W(i)) logJobWriteError(i);
  }
}
async function se(e) {
  let t = await Wi(L(e, U), M);
  if (!t) return null;
  let r = re(t);
  if (r === null)
    (n("[bg] persisted prompt stash unreadable or empty", { level: "warn" }),
      logFeatureBad("bg_prompt_stash_restore", "unreadable_or_empty"));
  return r;
}
class A {
  #e;
  #t;
  #r = Promise.resolve();
  #o = !1;
  #n;
  constructor(e) {
    ((this.#e = e),
      (this.#t = e.getState().stash),
      (this.#n = e.subscribe(this.#s)));
  }
  #s = () => {
    let e = this.#e.getState().stash;
    if (e === this.#t) return;
    this.#t = e;
    let t = a.CLAUDE_JOB_DIR;
    if (!t) return;
    this.#r = this.#r.then(() => ne(t, e));
  };
  async restore() {
    let e = a.CLAUDE_JOB_DIR;
    if (this.#o || !e) return !1;
    this.#o = !0;
    let t = await se(e);
    if (t === null) return !1;
    if (this.#e.getState().stash !== null)
      return (logFeatureSad("bg_prompt_stash_restore", "slot_taken"), !1);
    return (
      (this.#t = t),
      this.#e.setState((r) => ({ ...r, stash: t })),
      logFeatureOk("bg_prompt_stash_restore"),
      !0
    );
  }
  flush() {
    return this.#r;
  }
  dispose() {
    this.#n();
  }
}
var de = 3;
class H {
  server;
  current = void 0;
  heartbeat;
  wedgeTimer = void 0;
  wedgeDisarmed = !1;
  authToken;
  currentAuthed = !1;
  unauthedDrops = 0;
  gateReported = !1;
  nativeBrowserEnv;
  pendingInteractiveMarks;
  storageV5;
  promptInput = getPromptInputStore(V());
  promptStash = new A(this.promptInput);
  constructor(e, t, r, o, i) {
    ((this.authToken = t),
      (this.storageV5 = i),
      (this.nativeBrowserEnv = r),
      (this.pendingInteractiveMarks = o),
      (this.server = createServer((d) => this.onConnection(d))),
      this.server.on("error", (d) =>
        n(`[bg-rv] server error: ${String(d)}`, { level: "warn" }),
      ),
      this.server.listen(e),
      this.server.unref(),
      (this.heartbeat = setInterval(
        () => this.send({ type: "heartbeat" }),
        30000,
      )),
      this.heartbeat.unref());
  }
  onConnection(e) {
    (this.current?.destroy(),
      (this.current = e),
      (this.currentAuthed = !1),
      yrt(!1));
    while (this.pendingInteractiveMarks.length > 0) {
      let o = this.pendingInteractiveMarks[0];
      if (o === void 0 || !this.send(o)) break;
      this.pendingInteractiveMarks.shift();
    }
    ((this.unauthedDrops = 0),
      (this.gateReported = !1),
      this.clearPreBootState().catch((o) => {
        if (!W(o)) logJobWriteError(o);
      }),
      this.restorePromptDraft().catch(() => {}),
      this.promptStash.restore().catch(logError),
      e.on("error", () => e.destroy()),
      e.once("close", () => {
        if (this.current === e) ((this.current = void 0), yrt(!1));
      }));
    let t = "",
      r = new StringDecoder("utf8");
    e.on("data", (o) => {
      if (this.current !== e) {
        e.destroy();
        return;
      }
      t += r.write(o);
      let i;
      while (
        (i = t.indexOf(`
`)) >= 0
      ) {
        let d = t.slice(0, i);
        if (((t = t.slice(i + 1)), d)) this.handleLine(d);
      }
      if (t.length > 1048576) ((t = ""), e.destroy());
    });
  }
  stop() {
    (clearInterval(this.heartbeat),
      clearTimeout(this.wedgeTimer),
      (this.wedgeTimer = void 0),
      this.current?.destroy(),
      (this.current = void 0),
      yrt(!1),
      this.restoreNativeBrowserEnv(),
      this.promptStash.dispose(),
      this.server.close());
  }
  send(e) {
    if (!this.current || this.current.destroyed) return !1;
    try {
      return (
        this.current.write(
          b(e) +
            `
`,
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  noteUnauthedRejection() {
    if ((this.unauthedDrops++, !this.gateReported && this.unauthedDrops >= de))
      ((this.gateReported = !0), logFeatureBad("bg_rv_gate", "unauthed_drops"));
  }
  restoreNativeBrowserEnv() {
    if (this.nativeBrowserEnv === void 0) delete process.env.BROWSER;
    else process.env.BROWSER = this.nativeBrowserEnv;
  }
  handleLine(e) {
    let t;
    try {
      t = z(e);
    } catch {
      return;
    }
    if (!t || typeof t !== "object") return;
    if ("role" in t) {
      if (this.authToken)
        if ("auth" in t && timingSafeStringEqual(t.auth, this.authToken)) {
          if (((this.currentAuthed = !0), !this.gateReported))
            ((this.gateReported = !0), logFeatureOk("bg_rv_gate"));
        } else {
          if (!this.currentAuthed) this.noteUnauthedRejection();
          this.send({ type: "auth-rejected" });
        }
      return;
    }
    let r = t;
    if (this.authToken && !this.currentAuthed && r.type !== "repaint") {
      if (
        (n(
          `[bg-rv] dropped ${typeof r.type === "string" ? r.type : "unknown"} from un-authed connection`,
          { level: "warn" },
        ),
        r.type !== "attacher-caps")
      )
        this.noteUnauthedRejection();
      this.send({ type: "reply-rejected" });
      return;
    }
    if (r.type === "shutdown") {
      pe(this.promptInput, this.storageV5);
      return;
    }
    if (r.type === "repaint") {
      ce();
      return;
    }
    if (r.type === "attacher-caps") {
      this.handleAttacherCaps(r);
      return;
    }
    if (r.type === "reply" && typeof r.text === "string") le(r);
  }
  handleAttacherCaps(e) {
    if ((PDn(e.caps), yrt(!0), e.caps)) _ln(Date.now());
    else markDetached();
    if ((clampColorLevelForAttacher(e.caps?.colorLevel), !e.caps)) this.restoreNativeBrowserEnv();
    else if (typeof e.caps.browser === "string")
      process.env.BROWSER = e.caps.browser;
    else delete process.env.BROWSER;
    if (e.caps?.systemTheme) setSystemTheme(e.caps.systemTheme);
  }
  async waitForInkMount(e) {
    for (let t = 0; !getInkInstanceRegistry().has(process.stdout); t++) {
      if (t >= 60 || this.current !== e) return !1;
      await sleep(500);
    }
    return !0;
  }
  async clearPreBootState() {
    let e = a.CLAUDE_JOB_DIR;
    if (!e) return;
    if (!(await this.waitForInkMount(this.current))) return;
    await withOwnJobStateWrite(async () => {
      let t = await readJobState(e, this.storageV5);
      if (!t) return;
      if (!t.forkSourceAlive) {
        let o = Jgt(a.CLAUDE_CODE_RESUME_SOURCE_ALIVE);
        if (o)
          (await writeStateAtomic(e, { ...t, ...o }, this.storageV5), Object.assign(t, o));
      }
      if (t.state === "working" && t.detail === SEED_DETAIL)
        this.armStartupWedgeWatchdog(e);
      let r = (o) => {
        let i = zS.current();
        return (
          o.tempo === "blocked" &&
          isOverlayNeeds(o) &&
          !(i?.overlay === !0 && i.text === o.needs)
        );
      };
      if (r(t)) {
        let o = (await readJobState(e, this.storageV5)) ?? t;
        if (!r(o)) return;
        (await writeStateAtomic(
          e,
          {
            ...o,
            ...(PRE_BOOT_STATES.includes(o.state) && { state: "running" }),
            tempo: "idle",
            needs: void 0,
            needsOverlay: void 0,
            block: void 0,
            updatedAt: new Date().toISOString(),
          },
          this.storageV5,
        ),
          this.send({
            type: "state",
            patch: {
              ...(PRE_BOOT_STATES.includes(o.state) && { state: "running" }),
              tempo: "idle",
              needs: "",
            },
          }));
        return;
      }
      if (!PRE_BOOT_STATES.includes(t.state)) return;
      if (t.tempo === "blocked") return;
      (await writeStateAtomic(
        e,
        {
          ...t,
          state: "running",
          tempo: "idle",
          updatedAt: new Date().toISOString(),
        },
        this.storageV5,
      ),
        this.send({
          type: "state",
          patch: { state: "running", tempo: "idle" },
        }));
    });
  }
  armStartupWedgeWatchdog(e) {
    if (this.wedgeDisarmed) return;
    clearTimeout(this.wedgeTimer);
    let t = a.CLAUDE_BG_STARTUP_WEDGE_MS || 45000;
    ((this.wedgeTimer = setTimeout((r) => this.onStartupWedgeTimeout(r), t, e)),
      this.wedgeTimer.unref());
  }
  disarmStartupWedgeWatchdog() {
    ((this.wedgeDisarmed = !0),
      clearTimeout(this.wedgeTimer),
      (this.wedgeTimer = void 0));
  }
  onStartupWedgeTimeout(e) {
    readJobState(e, this.storageV5)
      .then(async (t) => {
        if (
          this.wedgeDisarmed ||
          t?.state !== "working" ||
          t.detail !== SEED_DETAIL ||
          t.tempo === "blocked"
        )
          return;
        (await writeStateAtomic(
          e,
          {
            ...t,
            tempo: "blocked",
            detail: w,
            needs: k,
            updatedAt: new Date().toISOString(),
          },
          this.storageV5,
        ),
          this.send({
            type: "state",
            patch: { tempo: "blocked", detail: w, needs: k },
          }));
      })
      .catch((t) => {
        if (!W(t)) logJobWriteError(t);
      });
  }
  async restorePromptDraft() {
    let e = a.CLAUDE_JOB_DIR;
    if (!e) return;
    let t = F(e, Y),
      r = await Wi(t, 4 * Q);
    if (r === null) return;
    await unlink(t).catch(() => {});
    let o = D(r);
    if (!o) return;
    if (!hasEarlyInput()) seedEarlyInput(o);
    if (!(await this.waitForInkMount(this.current))) return;
    if (this.promptInput.getState().value === "") setPromptInputValue(this.promptInput, o);
  }
}
class J {
  server = void 0;
}
var ue = new j(() => new J());
function V() {
  return B();
}
function G() {
  return V().host;
}
function P() {
  return ue.of(G());
}
async function startRendezvousServer(e) {
  let t = a.CLAUDE_BG_RENDEZVOUS_SOCK,
    r = P();
  if (!t || r.server) return;
  let o = a.BROWSER,
    i = [];
  (tVn((u) => {
    let l = { type: "interactive-mark", ...u };
    if (sendRv(l)) return !0;
    return (i.push(l), !0);
  }),
    delete process.env.CLAUDE_BG_RENDEZVOUS_SOCK);
  let d = a.CLAUDE_BG_RV_AUTH;
  delete process.env.CLAUDE_BG_RV_AUTH;
  let p = a.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if ((delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, p)) {
    let u = await readSocketTokenFile(p);
    if (u?.rvAuth) d = u.rvAuth;
    await unlink(p).catch(() => {});
  }
  (await unlink(t).catch(() => {}), (r.server = new H(t, d, o, i, e)));
  let R = r.server;
  Et(() => R.promptStash.flush());
}
function sendRv(e) {
  return P().server?.send(e) ?? !1;
}
function pe(e, t) {
  sendRv({ type: "shutting-down" });
  let r = getReplBridgeHandle(),
    o = [],
    i = a.CLAUDE_JOB_DIR;
  if (i) o.push(me(e, i).catch(() => {}));
  if (r) {
    let d = r.getLastSequenceNum();
    r.teardown({ skipArchive: !0 }).catch(() => {});
    let p = a.CLAUDE_JOB_DIR;
    if (p && d > 0) o.push(fe(p, d, t).catch(() => {}));
  }
  (o.push(gxe()),
    Promise.race([Promise.all(o), sleep(5000)]).finally(() => {
      process.exit(0);
    }));
}
function ce() {
  if (dl() !== null) _ln(Date.now());
  if (!getInkInstanceRegistry().get(process.stdout)?.forceRedraw({ flushReact: !0 }))
    process.stdout.write(
      i_ +
        gm +
        `
  \x1B[2mSession can't redraw right now \u2014 Ctrl+Z to detach\x1B[0m
`,
    );
  sendRv({ type: "repaint-done" });
}
function le(e) {
  if (C(G(), e.text)) {
    n(`[bg-rv] peer reply answered question: ${e.text.slice(0, 80)}`);
    return;
  }
  let t = getDraftMode(e.text);
  (BS({
    agentId: ze(),
    mode: t,
    value: getDraftValue(e.text),
    priority: "next",
    origin: { kind: "human" },
  }),
    n(`[bg-rv] enqueued reply: ${e.text.slice(0, 80)}`));
}
var w = "stuck on a startup dialog",
  k = "open this session to continue setup";
function disarmStartupWedgeWatchdog() {
  P().server?.disarmStartupWedgeWatchdog();
}
async function q(e, t, r, o) {
  let i = await readJobState(e, o);
  if (!i) return { kind: "refused" };
  if (i.tempo === "blocked" && i.needs === t) return { kind: "already" };
  if (i.tempo === "blocked" && i.needs !== IDLE_NEEDS) return { kind: "refused" };
  return (
    await writeStateAtomic(
      e,
      {
        ...i,
        tempo: "blocked",
        detail: r,
        needs: t,
        updatedAt: new Date().toISOString(),
      },
      o,
    ),
    sendRv({ type: "state", patch: { tempo: "blocked", detail: r, needs: t } }),
    {
      kind: "wrote",
      prior: { tempo: i.tempo, needs: i.needs, detail: i.detail },
    }
  );
}
async function K(e, t, r, o) {
  let i = await readJobState(e, o);
  if (!i || i.tempo !== "blocked" || i.needs !== t) return;
  (await writeStateAtomic(e, { ...i, ...r, updatedAt: new Date().toISOString() }, o),
    sendRv({
      type: "state",
      patch: { tempo: r.tempo, needs: r.needs, detail: r.detail },
    }));
}
async function markStartupDialogBlocked(e, t) {
  let r = a.CLAUDE_JOB_DIR;
  if (!r || P().server?.wedgeDisarmed) return;
  let o = e ? `${w} (${e})` : w,
    i = await q(r, k, o, t);
  return i.kind === "wrote" ? i.prior : void 0;
}
async function clearStartupDialogBlocked(e, t) {
  let r = a.CLAUDE_JOB_DIR;
  if (!r) return;
  await K(r, k, e, t);
}
async function markCommandParkBlocked(e, t, r) {
  let o = a.CLAUDE_JOB_DIR;
  if (!o) return { kind: "refused" };
  return withOwnJobStateWrite(() => q(o, e, t, r));
}
async function clearCommandParkBlocked(e, t, r) {
  let o = a.CLAUDE_JOB_DIR;
  if (!o) return;
  await withOwnJobStateWrite(() => K(o, e, t, r));
}
async function markReplayNoOp(e) {
  let t = a.CLAUDE_JOB_DIR;
  if (!t || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  let r = await readJobState(t, e);
  if (!r || r.state !== "working" || r.tempo !== "active") return;
  (await writeStateAtomic(
    t,
    { ...r, tempo: "blocked", needs: IDLE_NEEDS, updatedAt: new Date().toISOString() },
    e,
  ),
    sendRv({ type: "state", patch: { tempo: "blocked", needs: IDLE_NEEDS } }));
}
var Y = ".prompt-draft",
  Q = 262144;
async function me(e, t) {
  let r = e.getState().value;
  if (!r) return;
  await E(F(t, Y), truncateToCodeUnits(r, Q));
}
async function fe(e, t, r) {
  let o = await readJobState(e, r);
  if (!o || o.bridgeSessionSeq === t) return;
  await writeStateAtomic(
    e,
    { ...o, bridgeSessionSeq: t, updatedAt: new Date().toISOString() },
    r,
  );
}
export { Pze, startRendezvousServer, sendRv, disarmStartupWedgeWatchdog, markStartupDialogBlocked, clearStartupDialogBlocked, markCommandParkBlocked, clearCommandParkBlocked, markReplayNoOp };
