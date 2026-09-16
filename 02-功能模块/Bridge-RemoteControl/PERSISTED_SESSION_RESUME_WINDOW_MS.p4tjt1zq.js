// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _n, Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { On } from "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { We, b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import { B2e, Sc, yh } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { ykt } from "../权限系统/chunk-ynkf3yy4.js";
import { s, T, v, c, $e, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { mkdir as h, readFile as B, stat as _, unlink as E } from "fs/promises";
import { dirname as x, join as I } from "path";
var S = 50,
  R = 14400000,
  ee = 900000,
  j = 120000;
function re(e, r, t) {
  return r - e <= t && e - r <= j;
}
var F = 64,
  p = m(() => s().max(256).refine(ykt)),
  N = m(() =>
    c({
      sessionId: $e([k(""), p()]),
      environmentId: p(),
      source: X(["standalone", "repl"]),
      pid: T().optional(),
      procStart: s().optional(),
      activeSessionIds: v(p()).max(F).optional(),
      activeSessionIdsPersistedAt: T()
        .int()
        .min(0)
        .max(8640000000000000)
        .optional(),
    }),
  );
function g(e) {
  return I(Sc(), yh(e), "bridge-pointer.json");
}
function P(e) {
  let r = yh(e);
  return _n(r) ? Ce.bridgePointer(r) : null;
}
async function te(e, r, t) {
  let i = g(e),
    o = M() && t !== void 0 ? P(e) : null;
  if (M() && t !== void 0 && o) {
    let l = await t.write(o, b(r), { mode: 438 & ~process.umask() });
    if (!l.ok)
      return (
        n(`[bridge:pointer] write failed: ${We(l.error)}`, { level: "warn" }),
        !1
      );
    return (n(`[bridge:pointer] wrote ${i}`), !0);
  }
  try {
    return (
      await h(x(i), { recursive: !0 }),
      await On(i, b(r)),
      n(`[bridge:pointer] wrote ${i}`),
      !0
    );
  } catch (l) {
    return (n(`[bridge:pointer] write failed: ${l}`, { level: "warn" }), !1);
  }
}
function ne() {
  let e = Promise.resolve();
  return (r) => ((e = e.then(r, r)), e);
}
async function w(e, r, t) {
  let i = g(e),
    o,
    l,
    f = t ? P(e) : null;
  if (t && f) {
    let d = await t.read([f]);
    if (!d.ok || !d.value.items[0].found) return null;
    ((l = d.value.items[0].mtimeMs),
      (o = Buffer.from(d.value.items[0].value).toString("utf8")));
  } else
    try {
      ((l = (await _(i)).mtimeMs), (o = await B(i, "utf8")));
    } catch {
      return null;
    }
  let u = N().safeParse(O(o));
  if (!u.success) {
    if (!r?.noClear)
      (n(`[bridge:pointer] invalid schema, clearing: ${i}`), await y(e, t));
    return null;
  }
  let a = Math.max(0, Date.now() - l);
  if (a > R) {
    if (!r?.noClear)
      (n(`[bridge:pointer] stale (>4h mtime), clearing: ${i}`), await y(e, t));
    return null;
  }
  return { ...u.data, ageMs: a };
}
async function ie(e, r) {
  let t = await w(e, void 0, r);
  if (t) return { pointer: t, dir: e };
  let i = await B2e(e);
  if (i.length <= 1) return null;
  if (i.length > S)
    return (
      n(
        `[bridge:pointer] ${i.length} worktrees exceeds fanout cap ${S}, skipping`,
      ),
      null
    );
  let o = yh(e),
    l = i.filter((a) => yh(a) !== o),
    f = await Promise.all(
      l.map(async (a) => {
        let d = await w(a, void 0, r);
        return d ? { pointer: d, dir: a } : null;
      }),
    ),
    u = null;
  for (let a of f) if (a && (!u || a.pointer.ageMs < u.pointer.ageMs)) u = a;
  if (u)
    n(
      `[bridge:pointer] fanout found pointer in worktree ${u.dir} (ageMs=${u.pointer.ageMs})`,
    );
  return u;
}
async function y(e, r) {
  let t = g(e),
    i = r ? P(e) : null;
  if (r && i) {
    let o = await r.delete(i);
    if (o.ok || o.error.code === "NotFound") n(`[bridge:pointer] cleared ${t}`);
    else n(`[bridge:pointer] clear failed: ${We(o.error)}`, { level: "warn" });
    return;
  }
  try {
    (await E(t), n(`[bridge:pointer] cleared ${t}`));
  } catch (o) {
    if (!W(o)) n(`[bridge:pointer] clear failed: ${o}`, { level: "warn" });
  }
}
function O(e) {
  try {
    return z(e);
  } catch {
    return null;
  }
}
export {
  F as MAX_POINTER_ACTIVE_SESSION_IDS,
  ee as PERSISTED_SESSION_RESUME_WINDOW_MS,
  y as clearBridgePointer,
  ne as createBridgePointerWriteQueue,
  re as isPersistedStampFresh,
  w as readBridgePointer,
  ie as readBridgePointerAcrossWorktrees,
  te as writeBridgePointer,
};
