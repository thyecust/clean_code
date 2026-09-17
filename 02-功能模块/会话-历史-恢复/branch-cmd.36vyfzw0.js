// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 198 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { K, he, X1 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { ge, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, z } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { iu, ft } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { getOwnJobShortId, syncJobName } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import { getProjectKey, buildHistorySuppressionEntry } from "./chunk-mkmy4cx2.js";
import {
  isTranscriptMessage,
  getMaterializedSessionFile,
  getTranscriptPathForSession,
  saveCustomTitle,
  isSessionHistorySuppressed,
  isSessionHistorySuppressedFor,
  pinSessionId,
  isPrecautionarySuppressionHeldFor,
  getCurrentSessionTitle,
  saveAgentName,
  searchSessionsByCustomTitle,
  primeSessionMessagesCache,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ll, yl } from "../Teammates团队/chunk-thxapyam.js";
import { hu } from "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import { Ohe } from "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import { me } from "../../01-核心基础设施/共享小工具-未细化/chunk-6rcgxa93.js";
import { randomUUID } from "crypto";
import { once as N } from "events";
import { createReadStream, createWriteStream } from "fs";
import { mkdir, unlink } from "fs/promises";
import { createInterface } from "readline";
import { finished } from "stream/promises";
var X = 4194304,
  q = 1e5;
function deriveFirstPrompt(t) {
  let u = { commandFallback: "" },
    d;
  for (let n of t) if (((d = Ohe(n, u)), d !== void 0)) break;
  return (
    (d ??= u.commandFallback),
    d.replace(/\s+/g, " ").trim().slice(0, 100).trimEnd() ||
      "Branched conversation"
  );
}
async function createFork(t, u, d, n) {
  let a = randomUUID(),
    p = K(),
    A = isSessionHistorySuppressed() || isSessionHistorySuppressedFor(pinSessionId(p)),
    s = X1(),
    E = ll(he()),
    l = getTranscriptPathForSession(a),
    C = getMaterializedSessionFile() ?? yl(),
    g = hu(C, n);
  if (g !== void 0)
    return Q({
      sourceV5: g,
      forkKey: Ce.transcript(getProjectKey(he()), a),
      forkSessionId: a,
      originalSessionId: p,
      sourceTaintAtEntry: A,
      atisLatchAtEntry: s,
      currentMessages: t,
      customTitle: u,
      extraMessages: d,
      forkSessionPath: l,
    });
  await mkdir(E, { recursive: !0, mode: 448 });
  let F;
  try {
    ((F = createReadStream(C, { encoding: "utf8" })), await N(F, "open"));
  } catch (e) {
    if (W(e)) throw Error("No conversation to branch");
    throw (logError(e), e);
  }
  let m = createWriteStream(l, { encoding: "utf8", mode: 384 }),
    w = null;
  m.on("error", (e) => {
    w = ge(e);
  });
  let S = createInterface({ input: F, crlfDelay: 1 / 0 }),
    U = new Set(t.map((e) => e.uuid)),
    v = new Map(),
    I = [],
    k,
    R = async () => {
      (m.destroy(), await unlink(l).catch(() => {}));
    },
    M = async (e) => {
      if (w) throw (await R(), w);
      if (!m.write(e)) await N(m, "drain").catch(() => {});
    },
    r = A,
    o = () =>
      M(
        b(buildHistorySuppressionEntry(a, "fork_inherit")) +
          `
`,
      );
  try {
    if (r) await o();
    for await (let e of S) {
      if (e.length === 0) continue;
      let f;
      try {
        f = z(e);
      } catch {
        continue;
      }
      if (!me(f)) continue;
      let c = f;
      if (
        c.type === "content-replacement" &&
        c.sessionId === p &&
        Array.isArray(c.replacements)
      ) {
        I.push(...c.replacements);
        continue;
      }
      if (
        c.type === "relocated" &&
        c.sessionId === p &&
        typeof c.relocatedCwd === "string" &&
        c.relocatedCwd !== ""
      ) {
        k = c.relocatedCwd;
        continue;
      }
      if (c.type === "history-suppression") {
        if (!r) ((r = !0), await o());
        continue;
      }
      if (!isTranscriptMessage(c) || c.isSidechain || !U.has(c.uuid)) continue;
      v.set(c.uuid, c);
    }
  } catch (e) {
    throw (await R(), e);
  } finally {
    (S.close(), F.destroy());
  }
  let y = null,
    T = null,
    P = [];
  try {
    for (let e of t) {
      let f = v.get(e.uuid);
      if (!f) continue;
      let c =
          f.type === "system" && f.subtype === "model_refusal_fallback"
            ? { neutralizedByFork: !0 }
            : void 0,
        L = {
          ...f,
          ...c,
          sessionId: a,
          parentUuid: y,
          isSidechain: !1,
          sessionKind: void 0,
          forkedFrom: { sessionId: p, messageUuid: f.uuid },
        },
        _ = { ...f, ...c, sessionId: a };
      if (
        (P.push(_),
        (T = f),
        await M(
          b(L) +
            `
`,
        ),
        f.type !== "progress")
      )
        y = f.uuid;
    }
  } catch (e) {
    throw (await R(), e);
  }
  if (T === null) throw (await R(), Error("No messages to branch"));
  if (d?.length)
    for (let e of d) {
      let f = {
          ...e,
          cwd: T.cwd,
          userType: T.userType,
          entrypoint: T.entrypoint,
          version: T.version,
          gitBranch: T.gitBranch,
          sessionId: a,
          timestamp: new Date().toISOString(),
        },
        c = { ...f, parentUuid: y, isSidechain: !1 };
      if (
        (P.push(f),
        await M(
          b(c) +
            `
`,
        ),
        e.type !== "progress")
      )
        y = e.uuid;
    }
  if (I.length > 0)
    await M(
      b({ type: "content-replacement", sessionId: a, replacements: I }) +
        `
`,
    );
  if (k)
    await M(
      b({ type: "relocated", sessionId: a, relocatedCwd: k }) +
        `
`,
    );
  if (s !== void 0)
    await M(
      b({ type: "atis-latch", sessionId: a, atis: s }) +
        `
`,
    );
  if ((m.end(), await finished(m).catch(() => {}), w)) throw (await R(), w);
  return {
    sessionId: a,
    title: u,
    forkPath: l,
    serializedMessages: P,
    contentReplacementRecords: I,
    sessionHistorySuppressed: r,
  };
}
function B(t) {
  return {
    data:
      b(t) +
      `
`,
  };
}
async function Q(t) {
  let {
      sourceV5: u,
      forkKey: d,
      forkSessionId: n,
      originalSessionId: a,
      currentMessages: p,
      customTitle: A,
      extraMessages: s,
      forkSessionPath: E,
    } = t,
    { backend: l, key: C } = u,
    g = [],
    F = new Set(p.map((r) => r.uuid)),
    m = new Map(),
    w = [],
    S,
    U = t.sourceTaintAtEntry;
  if (U) g.push(B(buildHistorySuppressionEntry(n, "fork_inherit")));
  let v;
  for (let r = 0; ; r++) {
    if (r >= q) throw Error("Conversation too long to branch through storage");
    let o = await l.readRecords(C, {
      order: "forward",
      maxBytes: X,
      ...(v !== void 0 && { fromSeq: v }),
    });
    if (!o.ok) {
      if (o.error.code === "NotFound") throw Error("No conversation to branch");
      let y = Error("Conversation unreadable through storage", {
        cause: o.error,
      });
      throw (logError(y), y);
    }
    for (let y of o.value.items) {
      let T = Buffer.from(y.data.buffer, y.data.byteOffset, y.data.byteLength)
        .toString("utf8")
        .trimEnd();
      if (T.length === 0) continue;
      let P;
      try {
        P = z(T);
      } catch {
        continue;
      }
      if (!me(P)) continue;
      let e = P;
      if (
        e.type === "content-replacement" &&
        e.sessionId === a &&
        Array.isArray(e.replacements)
      ) {
        w.push(...e.replacements);
        continue;
      }
      if (
        e.type === "relocated" &&
        e.sessionId === a &&
        typeof e.relocatedCwd === "string" &&
        e.relocatedCwd !== ""
      ) {
        S = e.relocatedCwd;
        continue;
      }
      if (e.type === "history-suppression") {
        if (!U) ((U = !0), g.push(B(buildHistorySuppressionEntry(n, "fork_inherit"))));
        continue;
      }
      if (!isTranscriptMessage(e) || e.isSidechain || !F.has(e.uuid)) continue;
      m.set(e.uuid, e);
    }
    if (((v = o.value.nextSeq), v === void 0)) break;
  }
  let I = null,
    k = null,
    R = [];
  for (let r of p) {
    let o = m.get(r.uuid);
    if (!o) continue;
    let y =
        o.type === "system" && o.subtype === "model_refusal_fallback"
          ? { neutralizedByFork: !0 }
          : void 0,
      T = {
        ...o,
        ...y,
        sessionId: n,
        parentUuid: I,
        isSidechain: !1,
        sessionKind: void 0,
        forkedFrom: { sessionId: a, messageUuid: o.uuid },
      };
    if (
      (R.push({ ...o, ...y, sessionId: n }),
      (k = o),
      g.push(B(T)),
      o.type !== "progress")
    )
      I = o.uuid;
  }
  if (k === null) throw Error("No messages to branch");
  if (s?.length)
    for (let r of s) {
      let o = {
        ...r,
        cwd: k.cwd,
        userType: k.userType,
        entrypoint: k.entrypoint,
        version: k.version,
        gitBranch: k.gitBranch,
        sessionId: n,
        timestamp: new Date().toISOString(),
      };
      if (
        (R.push(o),
        g.push(B({ ...o, parentUuid: I, isSidechain: !1 })),
        r.type !== "progress")
      )
        I = r.uuid;
    }
  if (w.length > 0) {
    let r = { type: "content-replacement", sessionId: n, replacements: w };
    g.push(B(r));
  }
  if (S) {
    let r = { type: "relocated", sessionId: n, relocatedCwd: S };
    g.push(B(r));
  }
  if (t.atisLatchAtEntry !== void 0) {
    let r = { type: "atis-latch", sessionId: n, atis: t.atisLatchAtEntry };
    g.push(B(r));
  }
  let M = await l.append(d, g);
  if (!M.ok)
    throw (
      await l.delete(d).catch(() => {
        return;
      }),
      Error("Branch could not be written through storage", { cause: M.error })
    );
  return {
    sessionId: n,
    title: A,
    forkPath: E,
    serializedMessages: R,
    contentReplacementRecords: w,
    sessionHistorySuppressed: U,
  };
}
async function Z(t, u) {
  let d = `${t} (Branch)`;
  if ((await searchSessionsByCustomTitle(d, { exact: !0 }, u)).length === 0) return d;
  let a = await searchSessionsByCustomTitle(`${t} (Branch`, void 0, u),
    p = new Set([1]),
    A = new RegExp(`^${iu(t)} \\(Branch(?: (\\d+))?\\)$`);
  for (let E of a) {
    let l = E.customTitle?.match(A);
    if (l)
      if (l[1]) p.add(parseInt(l[1], 10));
      else p.add(1);
  }
  let s = 2;
  while (p.has(s)) s++;
  return `${t} (Branch ${s})`;
}
async function branchAndResume(t, u, d = {}) {
  let n = K(),
    a = getCurrentSessionTitle(n),
    p = isSessionHistorySuppressed() || isSessionHistorySuppressedFor(pinSessionId(n)),
    A = X1();
  try {
    let {
      sessionId: s,
      title: E,
      forkPath: l,
      serializedMessages: C,
      contentReplacementRecords: g,
      sessionHistorySuppressed: F,
    } = await createFork(t.messages, d.customTitle, d.extraMessages, t.storageV5);
    primeSessionMessagesCache(
      s,
      C.map((M) => M.uuid),
    );
    let m = new Date(),
      w = deriveFirstPrompt(C),
      S = E?.replace(/\s+/g, " ").trim() ?? (await Z(w, t.storageV5)),
      U = E ? "user" : "auto";
    (await saveCustomTitle(s, S, l, U, t.storageV5),
      await saveAgentName(s, S, l, U, t.storageV5),
      i("tengu_conversation_forked", {
        message_count: C.length,
        has_custom_title: !!E,
      }));
    let v = {
        date: ft(m.toISOString(), "T"),
        messages: C,
        fullPath: l,
        value: m.getTime(),
        created: m,
        modified: m,
        firstPrompt: w,
        messageCount: C.length,
        isSidechain: !1,
        sessionId: s,
        customTitle: S,
        agentName: S,
        contentReplacements: g,
        sessionHistorySuppressed: F || p ? !0 : void 0,
        atisLatch: A,
        precautionarySuppressionHeld: isPrecautionarySuppressionHeldFor(pinSessionId(n)) ? !0 : void 0,
        forkedFromSessionId: n,
      },
      I = E ? ` "${S}"` : "",
      k = a ? ` ("${a}")` : "",
      R = `Branched conversation${I}. You are now in the new branch (session ${s}). Use /resume ${n}${k} to return to the original, or run \`claude -r ${n}\` in a new terminal.`;
    if (t.resume)
      (await t.resume(s, v, "fork"),
        syncJobName(getOwnJobShortId(), S, "user", t.storageV5),
        u(R, { display: "system" }));
    else u(`Branched conversation${I}. Resume with: /resume ${s}`);
    return !0;
  } catch (s) {
    let E = s instanceof Error ? s.message : "Unknown error occurred";
    return (u(`Failed to branch conversation: ${E}`), !1);
  }
}
async function ve(t, u, d) {
  return (await branchAndResume(u, t, { customTitle: d?.trim() || void 0 }), null);
}
export {
  branchAndResume,
  ve as call,
  createFork,
  deriveFirstPrompt,
};
