// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { _n } from "../Teammates团队/chunk-qe04h4c5.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { R, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { LITE_READ_BUF_SIZE, validateUuid, readSessionLite } from "./chunk-mkmy4cx2.js";
import { tE } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { lP } from "../Teammates团队/chunk-thxapyam.js";
import { hu, Mh } from "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import { si } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { s, O, c, it, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { Qo } from "../../01-核心基础设施/共享小工具-未细化/chunk-0hk68fj9.js";
import { Ohe } from "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import { me } from "../../01-核心基础设施/共享小工具-未细化/chunk-6rcgxa93.js";
class Fy {
  returned;
  queue = [];
  readResolve;
  readReject;
  isDone = !1;
  hasError;
  started = !1;
  constructor(e) {
    this.returned = e;
  }
  [Symbol.asyncIterator]() {
    if (this.started) throw Error("Stream can only be iterated once");
    return ((this.started = !0), this);
  }
  next() {
    if (this.queue.length > 0)
      return Promise.resolve({ done: !1, value: this.queue.shift() });
    if (this.isDone) return Promise.resolve({ done: !0, value: void 0 });
    if (this.hasError) return Promise.reject(this.hasError);
    return new Promise((e, t) => {
      ((this.readResolve = e), (this.readReject = t));
    });
  }
  enqueue(e) {
    if (this.readResolve) {
      let t = this.readResolve;
      ((this.readResolve = void 0),
        (this.readReject = void 0),
        t({ done: !1, value: e }));
    } else this.queue.push(e);
  }
  done() {
    if (((this.isDone = !0), this.readResolve)) {
      let e = this.readResolve;
      ((this.readResolve = void 0),
        (this.readReject = void 0),
        e({ done: !0, value: void 0 }));
    }
  }
  error(e) {
    if (((this.hasError = e), this.readReject)) {
      let t = this.readReject;
      ((this.readResolve = void 0), (this.readReject = void 0), t(e));
    }
  }
  return() {
    if (((this.isDone = !0), this.returned)) this.returned();
    return Promise.resolve({ done: !0, value: void 0 });
  }
}
import { readFile } from "fs/promises";
import { dirname as E, join as D } from "path";
var C = m(() => c({ customTitle: s() }));
function LSt(e, t) {
  return D(E(e), t, "custom-title.json");
}
async function Cyn(e, t, i) {
  let n = await N(LSt(e, t), i);
  if (n === void 0) return;
  let r;
  try {
    r = JSON.parse(n);
  } catch {
    return;
  }
  let o = C().safeParse(r);
  if (!o.success) return;
  return si(o.data.customTitle) || void 0;
}
async function N(e, t) {
  if (M() && t !== void 0)
    try {
      let i = tE(e);
      if (i !== void 0) {
        let n = await t.readText([i]);
        if (!n.ok) return;
        let r = n.value.items[0];
        return r.found ? r.value : void 0;
      }
    } catch {
      return;
    }
  try {
    return await readFile(e, "utf8");
  } catch {
    return;
  }
}
import { constants as y } from "fs";
import { open as F } from "fs/promises";
import { dirname as x, join as _ } from "path";
var P = '"type":"continued-in"',
  B = m(() => it({ type: k("continued-in"), continuedInSessionId: s() })),
  L = m(() =>
    it({
      type: k("assistant"),
      isApiErrorMessage: O().optional(),
      message: it({ stop_reason: s().nullish() }).optional(),
    }),
  );
function MSt(e) {
  return e.provable
    ? `Your most recent conversation is running in the background (session ${e.sessionId}). Use \`claude agents\` to find and attach to it, or \`claude --resume\` to pick another session.`
    : `Your most recent conversation moved to a background session (${e.sessionId}) registered from another machine or container, so this one can't tell whether it is still running. Use \`claude --resume\` to pick a session, or add --fork-session to branch off a copy.`;
}
function yYn(e, t) {
  return {
    type: "continued-in",
    timestamp: new Date().toISOString(),
    sessionId: e,
    continuedInSessionId: t,
  };
}
function vyn(e) {
  if (!e.includes(P)) return;
  let t = e.length;
  while (t > 0) {
    let i = e.lastIndexOf(
        `
`,
        t - 1,
      ),
      n = e.slice(i + 1, t);
    t = i;
    let r = n.includes(P),
      o = n.includes('"type":"user"') || n.includes('"type":"assistant"');
    if (r || o)
      try {
        let u = JSON.parse(n);
        if (r) {
          let a = B().safeParse(u);
          if (a.success) return validateUuid(a.data.continuedInSessionId) ?? void 0;
        }
        if (o && z(u)) return;
      } catch {}
    if (i < 0) break;
  }
  return;
}
function z(e) {
  let t = L().safeParse(e);
  if (t.success)
    return (
      t.data.isApiErrorMessage !== !0 &&
      typeof t.data.message?.stop_reason === "string"
    );
  return me(e) && Ohe(e, { commandFallback: "" }) !== void 0;
}
async function Ryn(e, t, i) {
  let n = _(x(e), `${t}.jsonl`),
    r = await readSessionLite(n, Mh(hu(n, i)));
  return r !== null && (await kyn(n, r.head, r.tail, r.size, i));
}
var h = '"parentUuid":',
  U = 16777216,
  I = 1048576;
async function kyn(e, t, i, n, r) {
  if (t.includes(h) || i.includes(h)) return !0;
  if (n <= LITE_READ_BUF_SIZE) return !1;
  if (hu(e, r) !== void 0) return !0;
  try {
    let u = await F(e, y.O_RDONLY | y.O_NOFOLLOW | y.O_NONBLOCK);
    try {
      if (!(await u.stat()).isFile()) return !1;
      let a = Buffer.allocUnsafe(I + h.length),
        p = 0,
        f = 0;
      while (f < U) {
        let { bytesRead: l } = await u.read(a, p, I, f);
        if (l === 0) return !1;
        let d = p + l;
        if (a.subarray(0, d).includes(h)) return !0;
        ((p = Math.min(h.length, d)), a.copyWithin(0, d - p, d), (f += l));
      }
      return !0;
    } finally {
      await u.close();
    }
  } catch {
    return !1;
  }
}
import { readdir as q, stat as J } from "fs/promises";
import { basename, join as b } from "path";
function X(e) {
  let t = lP(e);
  return t !== void 0 && _n(t) ? t : void 0;
}
async function SYn(e, t, i, n, r, o) {
  let u = M() && n !== void 0 ? X(e) : void 0;
  if (n !== void 0 && u !== void 0) {
    let f = new Map();
    try {
      await Qo(
        (l) =>
          n.listEntries(
            { namespace: "transcript", projectKey: u },
            {
              skipScopeStats: !0,
              ...(t ? {} : { skipKeyStats: !0 }),
              ...(l !== void 0 && { cursor: l }),
            },
          ),
        (l) => {
          for (let d of l) {
            if (d.kind !== "key" || d.key.namespace !== "transcript") continue;
            let g = validateUuid(d.key.sessionId);
            if (!g) continue;
            if (t && d.mtimeMs === void 0) continue;
            let w = t ? Math.trunc(d.mtimeMs ?? 0) : 0,
              S = f.get(g);
            if (S !== void 0) {
              if (w > S.mtime) S.mtime = w;
              continue;
            }
            f.set(g, {
              sessionId: g,
              filePath: b(e, `${d.key.sessionId}.jsonl`),
              mtime: w,
              projectPath: i,
              ownWorktrees: o,
            });
          }
        },
        r !== void 0 ? { budget: r } : void 0,
      );
    } catch {}
    return [...f.values()];
  }
  let a;
  try {
    a = await q(e);
  } catch {
    return [];
  }
  return (
    await Promise.all(
      a.map(async (f) => {
        if (!f.endsWith(".jsonl")) return null;
        let l = validateUuid(f.slice(0, -6));
        if (!l) return null;
        let d = b(e, f);
        if (!t)
          return {
            sessionId: l,
            filePath: d,
            mtime: 0,
            projectPath: i,
            ownWorktrees: o,
          };
        try {
          let g = await J(d);
          return {
            sessionId: l,
            filePath: d,
            mtime: g.mtime.getTime(),
            projectPath: i,
            ownWorktrees: o,
          };
        } catch {
          return null;
        }
      }),
    )
  ).filter((f) => f !== null);
}
import { constants as j } from "fs";
import { open as Z, readdir as ot, rm as st, stat as at } from "fs/promises";
async function bYn(e, t, i) {
  if (M() && i !== void 0) return Q(i, t);
  let n;
  try {
    n = await Z(e, j.O_WRONLY | j.O_APPEND);
  } catch (r) {
    let o = A(r);
    if (o === "ENOENT" || o === "ENOTDIR") return !1;
    throw r;
  }
  try {
    let { size: r } = await n.stat();
    if (r === 0) return !1;
    let o = void 0,
      u = Buffer.from(t, "utf8"),
      a = 0;
    while (a < u.length) {
      let { bytesWritten: p } = await n.write(u, a, u.length - a, o);
      if (p <= 0)
        throw new R(
          `tryAppend: short write to ${e} stalled with ${u.length - a} bytes remaining`,
          "tryAppend: zero-progress short write",
        );
      if (((a += p), o !== void 0)) o += p;
    }
    return !0;
  } finally {
    await n.close();
  }
}
async function Q({ backend: e, key: t }, i) {
  let n = await e.append(t, [{ data: i }], {
    precondition: { type: "ifExists", nonEmpty: !0 },
  });
  if (!n.ok) {
    if (n.error.code === "NotFound") return !1;
    throw Error("Session append: transcript not writable via storage", {
      cause: n.error,
    });
  }
  return !0;
}
export { Fy, LSt, Cyn, MSt, yYn, vyn, Ryn, kyn, SYn, bYn };
