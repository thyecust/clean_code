// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 14 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { isValidPathSegment, STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { writeFileAtomic } from "../../01-核心基础设施/安全文件系统(FS加固)/atomic-file-write.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { describeStorageError, jsonStringify, jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { listGitWorktrees, getProjectsDir, getProjectKey } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { isSafeBridgeId } from "../权限系统/chunk-ynkf3yy4.js";
import { s, T, v, c, $e, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { mkdir, readFile, stat as _, unlink } from "fs/promises";
import { dirname, join as I } from "path";
var S = 50,
  R = 14400000,
  PERSISTED_SESSION_RESUME_WINDOW_MS = 900000,
  j = 120000;
function isPersistedStampFresh(e, r, t) {
  return r - e <= t && e - r <= j;
}
var MAX_POINTER_ACTIVE_SESSION_IDS = 64,
  p = createLazyValue(() => s().max(256).refine(isSafeBridgeId)),
  N = createLazyValue(() =>
    c({
      sessionId: $e([k(""), p()]),
      environmentId: p(),
      source: X(["standalone", "repl"]),
      pid: T().optional(),
      procStart: s().optional(),
      activeSessionIds: v(p()).max(MAX_POINTER_ACTIVE_SESSION_IDS).optional(),
      activeSessionIdsPersistedAt: T()
        .int()
        .min(0)
        .max(8640000000000000)
        .optional(),
    }),
  );
function g(e) {
  return I(getProjectsDir(), getProjectKey(e), "bridge-pointer.json");
}
function P(e) {
  let r = getProjectKey(e);
  return isValidPathSegment(r) ? STORAGE_KEYS.bridgePointer(r) : null;
}
async function writeBridgePointer(e, r, t) {
  let i = g(e),
    o = isHoverRestEnabled() && t !== void 0 ? P(e) : null;
  if (isHoverRestEnabled() && t !== void 0 && o) {
    let l = await t.write(o, jsonStringify(r), { mode: 438 & ~process.umask() });
    if (!l.ok)
      return (
        logForDebugging(`[bridge:pointer] write failed: ${describeStorageError(l.error)}`, { level: "warn" }),
        !1
      );
    return (logForDebugging(`[bridge:pointer] wrote ${i}`), !0);
  }
  try {
    return (
      await mkdir(dirname(i), { recursive: !0 }),
      await writeFileAtomic(i, jsonStringify(r)),
      logForDebugging(`[bridge:pointer] wrote ${i}`),
      !0
    );
  } catch (l) {
    return (logForDebugging(`[bridge:pointer] write failed: ${l}`, { level: "warn" }), !1);
  }
}
function createBridgePointerWriteQueue() {
  let e = Promise.resolve();
  return (r) => ((e = e.then(r, r)), e);
}
async function readBridgePointer(e, r, t) {
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
      ((l = (await _(i)).mtimeMs), (o = await readFile(i, "utf8")));
    } catch {
      return null;
    }
  let u = N().safeParse(O(o));
  if (!u.success) {
    if (!r?.noClear)
      (logForDebugging(`[bridge:pointer] invalid schema, clearing: ${i}`), await clearBridgePointer(e, t));
    return null;
  }
  let a = Math.max(0, Date.now() - l);
  if (a > R) {
    if (!r?.noClear)
      (logForDebugging(`[bridge:pointer] stale (>4h mtime), clearing: ${i}`), await clearBridgePointer(e, t));
    return null;
  }
  return { ...u.data, ageMs: a };
}
async function readBridgePointerAcrossWorktrees(e, r) {
  let t = await readBridgePointer(e, void 0, r);
  if (t) return { pointer: t, dir: e };
  let i = await listGitWorktrees(e);
  if (i.length <= 1) return null;
  if (i.length > S)
    return (
      logForDebugging(
        `[bridge:pointer] ${i.length} worktrees exceeds fanout cap ${S}, skipping`,
      ),
      null
    );
  let o = getProjectKey(e),
    l = i.filter((a) => getProjectKey(a) !== o),
    f = await Promise.all(
      l.map(async (a) => {
        let d = await readBridgePointer(a, void 0, r);
        return d ? { pointer: d, dir: a } : null;
      }),
    ),
    u = null;
  for (let a of f) if (a && (!u || a.pointer.ageMs < u.pointer.ageMs)) u = a;
  if (u)
    logForDebugging(
      `[bridge:pointer] fanout found pointer in worktree ${u.dir} (ageMs=${u.pointer.ageMs})`,
    );
  return u;
}
async function clearBridgePointer(e, r) {
  let t = g(e),
    i = r ? P(e) : null;
  if (r && i) {
    let o = await r.delete(i);
    if (o.ok || o.error.code === "NotFound") logForDebugging(`[bridge:pointer] cleared ${t}`);
    else logForDebugging(`[bridge:pointer] clear failed: ${describeStorageError(o.error)}`, { level: "warn" });
    return;
  }
  try {
    (await unlink(t), logForDebugging(`[bridge:pointer] cleared ${t}`));
  } catch (o) {
    if (!W(o)) logForDebugging(`[bridge:pointer] clear failed: ${o}`, { level: "warn" });
  }
}
function O(e) {
  try {
    return jsonParse(e);
  } catch {
    return null;
  }
}
export {
  MAX_POINTER_ACTIVE_SESSION_IDS,
  PERSISTED_SESSION_RESUME_WINDOW_MS,
  clearBridgePointer,
  createBridgePointerWriteQueue,
  isPersistedStampFresh,
  readBridgePointer,
  readBridgePointerAcrossWorktrees,
  writeBridgePointer,
};
