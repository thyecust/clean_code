// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 203 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { getSessionRuntimeState } from "../权限系统/chunk-ynkf3yy4.js";
import { wa } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { CCR_SESSION_ID_RE } from "../../01-核心基础设施/共享小工具-未细化/chunk-ds47w88s.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { parsePermissionModeFromSystemMessage, trustedDeviceHeaders, httpClient } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import {
  xZ,
  iIt,
  qae,
  AFn,
  L6e,
  CFn,
  aIt,
  V_e,
  Mst,
} from "../Bridge-RemoteControl/chunk-x379yyxb.js";
import { createSystemInfoMessage } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../远程工具执行/chunk-66axrkvh.js";
import { w6e, mHe, VJt, kZ, jae } from "../../03-入口与运行时/Headless-SDK模式/chunk-ph7v431y.js";
import "../../01-核心基础设施/共享小工具-未细化/remote-autocompact-state.js";
import { createWriteStream } from "fs";
import {
  mkdir,
  readFile,
  rm as O,
  stat as x,
  unlink,
} from "fs/promises";
import { tmpdir } from "os";
import { join as b } from "path";
import { pipeline } from "stream/promises";
var w = null,
  k = CFn,
  j = 4,
  F = 500,
  C = 16000000,
  K = 30000,
  G = 3000;
function z() {
  let e = getSessionRuntimeState();
  if (e.historySpoolDir === null)
    ((e.historySpoolDir = b(tmpdir(), `cc-history-prefetch-${process.pid}`)),
      Et(() =>
        e.historySpoolDir === null
          ? void 0
          : O(e.historySpoolDir, { recursive: !0, force: !0 }).catch(() => {}),
      ));
  return e.historySpoolDir;
}
function B(e, t, s) {
  if (getAPIProvider() !== "firstParty") return;
  if (!CCR_SESSION_ID_RE.test(e)) {
    n(`[historyPrefetch] ${e} fails CCR_SESSION_ID_RE \u2014 refusing`, {
      level: "warn",
    });
    return;
  }
  let r = getSessionRuntimeState().historyPrefetchEntries,
    a = r.get(e);
  if (a && !a.settled) return;
  if (
    s?.force !== !0 &&
    a?.settledOk === !0 &&
    a.settledAt !== void 0 &&
    Date.now() - a.settledAt < G
  )
    return;
  let u = z(),
    i = b(u, `${e}.${Date.now()}.json`),
    p = performance.now(),
    d = { path: i, written: Promise.resolve(null), settled: !1, pageSize: k },
    S = (async () => {
      await mkdir(u, { recursive: !0, mode: 448 });
      let c = async (o) =>
          httpClient.get(`/v1/code/sessions/${e}/events?limit=${o}&sort_order=desc`, {
            auth: "teleport-org",
            credentials: t,
            headers: await trustedDeviceHeaders(),
            responseType: "stream",
            timeout: 15000,
            validateStatus: () => !0,
          }),
        f = await c(k);
      if (f.ok && f.status === 400)
        (n(
          `[historyPrefetch] ${e} limit=${k} rejected (400) \u2014 retrying at ${L6e}`,
        ),
          f.data.resume(),
          (d.pageSize = L6e),
          (f = await c(L6e)));
      if (!f.ok)
        return (
          n(
            `[historyPrefetch] ${e} gate=${f.reason} ${"detail" in f ? f.detail : ""}`,
          ),
          null
        );
      if (f.status !== 200)
        return (
          n(`[historyPrefetch] ${e} HTTP ${f.status}`),
          f.data.resume(),
          null
        );
      return (await pipeline(f.data, createWriteStream(i, { mode: 384 })), i);
    })().catch(
      (c) => (
        n(`[historyPrefetch] ${e} failed: ${l(c)}`),
        unlink(i).catch(() => {}),
        null
      ),
    );
  if (((d.written = S), r.set(e, d), a))
    setTimeout(
      (c) => {
        unlink(c).catch(() => {});
      },
      K,
      a.path,
    ).unref();
  S.then((c) => {
    if (
      ((d.settled = !0),
      (d.settledAt = Date.now()),
      (d.settledOk = c !== null),
      c === null && a?.settled === !0 && r.get(e) === d)
    )
      r.set(e, { ...a, settledAt: Date.now() });
    n(
      `[historyPrefetch] ${e} ${c ? `\u2192 ${c}` : "null"} +${(performance.now() - p).toFixed(0)}ms`,
    );
  });
}
async function L(e, t) {
  let s;
  try {
    s = (await x(t)).size;
  } catch (r) {
    if (!W(r)) n(`[historyPrefetch] stat ${t} failed: ${l(r)}`);
    return { skip: "gone" };
  }
  if (s > C)
    return (
      n(`[historyPrefetch] ${e} spool ${s}B exceeds cap \u2014 skipping`),
      { skip: "oversize" }
    );
  try {
    return { body: await readFile(t, "utf8") };
  } catch (r) {
    if (!W(r)) n(`[historyPrefetch] read ${t} failed: ${l(r)}`);
    return { skip: "gone" };
  }
}
async function consumePrefetchedHistory(e, t) {
  let s = getSessionRuntimeState().historyPrefetchEntries;
  if (!s.has(e)) B(e, t);
  let r = s.get(e);
  if ((s.delete(e), !r)) return null;
  let a = await r.written;
  if (a === null) return null;
  let u = await L(e, a);
  if ((await unlink(a).catch(() => {}), "skip" in u)) return null;
  let i = u.body,
    p = Y(i);
  if (p === null) return (n(`[historyPrefetch] ${e} parse failed`), null);
  if (!p.hasMore) return v(p);
  let d = await V_e(e, t).catch(() => null);
  if (d === null) return v(p);
  let S = p.events,
    c = p.firstId,
    f = 1,
    o = Date.now() + F;
  while (c !== null && f < j && Date.now() < o && !M(S)) {
    let _ = o - Date.now(),
      h = await Promise.race([
        Mst(d, c, r.pageSize, C),
        sleep(_).then(() => "budget"),
      ]);
    if (h === "budget" || h === null) break;
    (f++, S.unshift(...h.events), (c = h.hasMore ? h.firstId : null), (p = h));
  }
  let m = c !== null && M(S);
  return (
    n(
      `[historyPrefetch] ${e} walked ${f} pages, ${S.length} events, complete=${c === null || m}`,
    ),
    v({ events: S, firstId: c, hasMore: c !== null && !m })
  );
}
function Y(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return null;
  }
  if (t === null || typeof t !== "object") return null;
  let s = Array.isArray(t.data) ? t.data : [],
    r = [];
  for (let u = s.length - 1; u >= 0; u--) {
    let i = s[u];
    if (i?.payload)
      r.push({
        payload: i.payload,
        createdAt: i.created_at,
        source: i.source,
        sequenceNum: aIt(i),
      });
  }
  let a = t.next_cursor ?? null;
  return { events: r, firstId: a, hasMore: a !== null };
}
function v(e) {
  let t = J(e.events),
    s = [],
    r = 0,
    a = new Set(),
    u = new Map(),
    i = !1,
    p = new Set(),
    d,
    S,
    c,
    f;
  for (let o of t) {
    if (o.sequenceNum !== void 0 && o.sequenceNum > r) r = o.sequenceNum;
    try {
      if (!xZ(o.payload)) continue;
      if (o.source === "worker") {
        let h = jae(o.payload);
        if (h) for (let P of h.uuids) a.add(P);
        if (o.payload.type === "active_goal") {
          d = mHe(o.payload.value);
          continue;
        }
        if (o.payload.type === "autocompact_state") {
          S = VJt(o.payload.value);
          continue;
        }
        if (
          ((c = parsePermissionModeFromSystemMessage(o.payload) ?? c),
          o.payload.type === "system" && o.payload.subtype === "init")
        ) {
          let { skills: P, plugins: A } = w6e(o.payload);
          if (P !== void 0 || A !== void 0)
            f = { skills: P ?? [], plugins: A ?? [] };
        }
      }
      if (!Q(o)) continue;
      if (D(o)) {
        ((s = []), a.clear(), u.clear(), (i = !1), p.clear());
        continue;
      }
      if (w !== null) {
        if (!i) i = I(o.payload);
        X(o.payload, p);
      }
      let m = null;
      if (m !== null) {
        let h = o.payload.uuid;
        if (typeof h === "string")
          u.set(
            h,
            m.map((P) => P.uuid),
          );
        s.push(...m);
        continue;
      }
      let _ = kZ(o.payload, { convertUserTextMessages: !0 });
      if (_.type === "message") s.push(_.message);
    } catch (m) {
      n(
        `[historyPrefetch] Skipping ${o.payload.type} frame seq=${o.sequenceNum ?? "?"} \u2014 conversion threw: ${l(m)}`,
        { level: "error" },
      );
    }
  }
  if (a.size > 0) {
    let o = new Set(a);
    for (let m of a) for (let _ of u.get(m) ?? []) o.add(_);
    s = s.filter((m) => !o.has(m.uuid));
  }
  return {
    messages: s,
    maxSequenceNum: r,
    complete: !e.hasMore,
    nestedUuidAliases: [...u.entries()].filter(([, o]) => o.length > 1),
    hasReplyChannel: i,
    replyChannelToolUseIds: [...p],
    lastActiveGoal: d,
    lastAutocompactState: S,
    lastWorkerPermissionMode: c,
    lastWorkerInventory: f,
  };
}
function J(e) {
  let t = new Map();
  for (let r = 0; r < e.length; r++) {
    let a = e[r],
      u = a.payload;
    if (u.type === "control_response") {
      let i = u.response;
      if (
        typeof i === "object" &&
        i !== null &&
        "request_id" in i &&
        typeof i.request_id === "string"
      )
        t.delete(i.request_id);
    } else if (
      a.source === "worker" &&
      u.type === "control_cancel_request" &&
      typeof u.request_id === "string"
    )
      t.delete(u.request_id);
    else if (u.type === "result" && a.source === "worker") t.clear();
    else if (
      a.source === "worker" &&
      u.type === "control_request" &&
      a.sequenceNum !== void 0 &&
      typeof u.request_id === "string"
    ) {
      let i = u.request;
      if (
        typeof i === "object" &&
        i !== null &&
        "subtype" in i &&
        typeof i.subtype === "string" &&
        AFn.includes(i.subtype)
      )
        t.set(u.request_id, r);
    }
  }
  if (t.size === 0) return e;
  let s = e.length;
  for (let r of t.values()) s = Math.min(s, r);
  return e.slice(0, s);
}
function X(e, t) {
  let s = w;
  if (s === null || e.type !== "assistant") return;
  for (let r of e.message.content)
    if (r.type === "tool_use" && s.replyChannelBlockKind(r) !== void 0)
      t.add(r.id);
}
function I(e) {
  let t = w;
  if (t === null) return !1;
  if (e.type === "system" && e.subtype === "init") {
    let s = w6e(e);
    return t.hasReplyChannelInit({ mcp_servers: s.mcpServers, tools: s.tools });
  }
  return (
    e.type === "assistant" &&
    !e.parent_tool_use_id &&
    e.message.content.some((s) => t.replyChannelBlockKind(s) !== void 0)
  );
}
function D(e) {
  if (
    e.payload.type !== "conversation_reset" ||
    (e.source !== void 0 && e.source !== "worker")
  )
    return !1;
  let t = e.payload.new_conversation_id;
  return typeof t === "string" && t !== "";
}
function M(e) {
  return e.some(D);
}
function Q(e) {
  if (e.source === void 0 || e.source === "worker") return !0;
  if (e.payload.type === "user") return !qae(e.payload);
  return iIt.has(e.payload.type);
}
function reportPrefetchOutcome(e) {
  if (e === null) logFeatureSad("remote_history_prefetch", "miss");
  else if (e.maxSequenceNum === 0) logFeatureSad("remote_history_prefetch", "no_seq");
  else if (!e.complete && e.messages.length === 0)
    logFeatureSad("remote_history_prefetch", "empty_partial");
  else if (!e.complete) logFeatureSad("remote_history_prefetch", "incomplete");
  else logFeatureOk("remote_history_prefetch");
}
function gateSeed(e) {
  if (e === null || e.maxSequenceNum === 0) return null;
  if (!e.complete && e.messages.length === 0) return null;
  return e;
}
function partialSeedNotice(e) {
  return createSystemInfoMessage(
    `Showing recent messages \xB7 full history at ${wa(e, void 0, { from: "cli", m: "0" })}`,
    "notice",
  );
}
export {
  consumePrefetchedHistory,
  gateSeed,
  partialSeedNotice,
  reportPrefetchOutcome,
};
