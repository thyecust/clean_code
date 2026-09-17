// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { isTainted } from "../../01-核心基础设施/核心工具-未归类/compliance-taints-store.js";
import { Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, jsonParseUntraced, streamFileLines, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { formatTruncatedText } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { BASH_STDOUT_TAG, BASH_STDERR_TAG, LOCAL_COMMAND_STDOUT_TAG, LOCAL_COMMAND_STDERR_TAG, LOCAL_COMMAND_CAVEAT_TAG, logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { listedProjectKey, getProjectsDir } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { isValidPathSegment } from "../Teammates团队/storage-keys.js";
import { BRIEF_ENFORCE_SENTINEL } from "../../01-核心基础设施/核心工具-未归类/chunk-q599wyee.js";
import {
  INTERRUPTED_BY_USER_MARKER,
  OPERATION_STOPPED_BY_HOOK_MESSAGE,
  HOOK_FEEDBACK_SUFFIX,
  HOOK_FEEDBACK_EVENT_NAMES,
  STRUCTURED_OUTPUT_ENFORCE_TAG,
  Rkn,
  INVALID_TOOL_CALL_RETRY_MESSAGE,
  MALFORMED_TOOL_CALL_RETRY_MESSAGE,
  NO_VISIBLE_OUTPUT_MESSAGE,
  PERMISSION_DENIED_RETRY_MESSAGE,
  GOAL_CHECK_IN_PREFIX,
} from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { isPolicyAllowed, policyDeniedReason, policyDenyKind } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-8sw91yn5.js";
import { DEFAULT_MAX_PAGES, runPaginatedScan, createPageBudget, classifyScanOutcome, getAdditionalTruncationCount } from "../../01-核心基础设施/核心工具-其他/paginated-scan.js";
var Te = "allow_usage_transcript_scan",
  he = "allow_skill_doctor_transcript_scan",
  Me = {
    policy: Te,
    label: "Usage patterns",
    hipaaReason:
      "Not shown for HIPAA-regulated organizations: this breakdown is built by scanning the session transcripts saved on this machine.",
  },
  Re = {
    policy: he,
    label: "Skill token counts",
    hipaaReason:
      "Not shown for HIPAA-regulated organizations: measured by scanning the session transcripts saved on this machine.",
  };
function j(e) {
  if (isPolicyAllowed(e.policy)) return { allowed: !0 };
  if (policyDenyKind(e.policy) === "org_denied" && isTainted("hipaa"))
    return { allowed: !1, reason: e.hipaaReason };
  return {
    allowed: !1,
    reason:
      policyDeniedReason(e.policy, e.label, "are") ?? `${e.label} are unavailable right now.`,
  };
}
function getUsagePatternsAccess() {
  return j(Me);
}
function getSkillTokenCountsAccess() {
  return j(Re);
}
import { readdir, stat as be } from "fs/promises";
import { extname, join as N } from "path";
var D = 4,
  te = 4194304,
  ye = te,
  oe = 604800000,
  Ce = 1e5,
  Ae = 150000,
  Ee = 3,
  Oe = 0.5,
  Le = 300000,
  we = 4,
  ke = 8,
  d = new TextEncoder(),
  se = d.encode('"type":"assistant"'),
  Ie = d.encode('"usage":{'),
  re = d.encode('"timestamp":"'),
  ve = d.encode('"sessionId":"'),
  Ne = d.encode('"model":"'),
  De = d.encode('"requestId":"'),
  z = d.encode('"id":"'),
  xe = d.encode("msg_"),
  ie = d.encode('"uuid":"'),
  Pe = d.encode('"input_tokens":'),
  Be = d.encode('"output_tokens":'),
  Ue = d.encode('"cache_creation_input_tokens":'),
  Fe = d.encode('"cache_read_input_tokens":'),
  He = d.encode('"isSidechain":true'),
  Ke = d.encode('"isSidechain": true'),
  Ge = d.encode('"attribution'),
  qe = d.encode('"attributionAgent":"'),
  $e = d.encode('"attributionSkill":"'),
  We = d.encode('"attributionPlugin":"'),
  je = d.encode('"attributionMcpServer":"'),
  Ye = d.encode('"type":"user"'),
  B = d.encode('"isMeta":true'),
  ze = d.encode('"subtype":"scheduled_task_fire"'),
  Xe = d.encode('"taskId":"'),
  U = d.encode('"scheduledTaskId":"'),
  Ve = d.encode('"scheduledFireId":"'),
  Qe = d.encode('"type":"tool_result"'),
  Je = d.encode('"turnCompanion":true'),
  Ze = d.encode(`"text":"${INTERRUPTED_BY_USER_MARKER.slice(0, -1)}`),
  X = d.encode('"content":"['),
  en = d.encode(" prior /loop wakeup"),
  nn = d.encode('"isCompactSummary":true'),
  tn = d.encode('"type":"attachment"'),
  on = d.encode('"type":"queued_command"'),
  sn = d.encode('"origin":{'),
  rn = d.encode('"origin":{"kind":"human"'),
  cn = d.encode('"promptSource":"'),
  an = d.encode('"type":"system"'),
  un = d.encode('"subtype":"local_command"'),
  w = (e) => [d.encode(`"content":"<${e}>`), d.encode(`"text":"<${e}>`)],
  V = [...w("command-message"), ...w("command-name")],
  dn = w(LOCAL_COMMAND_CAVEAT_TAG),
  Q = [...w(LOCAL_COMMAND_STDOUT_TAG), ...w(LOCAL_COMMAND_STDERR_TAG)],
  ln = [...w(BASH_STDOUT_TAG), ...w(BASH_STDERR_TAG)],
  L = (e, t, o) => t.some((s) => _(e, s, 0, o) >= 0),
  pn = [
    d.encode(`"content":${jsonStringify(OPERATION_STOPPED_BY_HOOK_MESSAGE).slice(0, -1)}`),
    d.encode(`"text":${jsonStringify(OPERATION_STOPPED_BY_HOOK_MESSAGE).slice(0, -1)}`),
  ],
  ce = (e, t = !1) => {
    let o = t ? jsonStringify(e) : jsonStringify(e).slice(0, -1);
    return [d.encode(`"content":${o}`), d.encode(`"text":${o}`)];
  },
  fn = [...HOOK_FEEDBACK_EVENT_NAMES.map((e) => `${e}${HOOK_FEEDBACK_SUFFIX}`), STRUCTURED_OUTPUT_ENFORCE_TAG, Rkn, BRIEF_ENFORCE_SENTINEL, GOAL_CHECK_IN_PREFIX]
    .filter((e) => e.length > 0)
    .flatMap((e) => ce(e)),
  mn = [INVALID_TOOL_CALL_RETRY_MESSAGE, MALFORMED_TOOL_CALL_RETRY_MESSAGE, NO_VISIBLE_OUTPUT_MESSAGE, PERMISSION_DENIED_RETRY_MESSAGE].flatMap((e) => ce(e, !0)),
  gn = d.encode('"cron":"'),
  Sn = d.encode('"prompt":"'),
  Tn = d.encode('"taskKind":"loop"'),
  hn = d.encode('"content":"'),
  Mn = d.encode('"text":"'),
  G = 34,
  Rn = 92,
  H = 48,
  ae = 57;
function _(e, t, o, s) {
  let r = e.subarray(o, s).indexOf(t);
  return r < 0 ? -1 : o + r;
}
function R(e, t, o, s) {
  let r = _(e, t, o, s);
  if (r < 0) return;
  let i = r + t.length,
    c = i;
  while (c < s && e[c] !== G) c++;
  return e.toString("utf8", i, c);
}
function x(e, t, o, s, r) {
  let i = _(e, t, o, s);
  if (i < 0) return;
  let c = i + t.length,
    a = c,
    f = Math.min(s, c + r);
  while (a < f && e[a] !== G) {
    if (e[a] === Rn) a++;
    a++;
  }
  let m = a >= f;
  if (a > f) a = f - 1;
  if (m) a = bn(e, c, a);
  let u = e.toString("utf8", c, a);
  if (m) u = u.replace(/(^|[^\\])((?:\\\\)*)\\u[0-9a-fA-F]{0,3}$/, "$1$2");
  try {
    let g = jsonParseUntraced(`"${u}"`);
    return typeof g === "string" ? g : void 0;
  } catch {
    return;
  }
}
function bn(e, t, o) {
  let s = o;
  while (s > t && (e[s - 1] & 192) === 128) s--;
  if (s === t) return t;
  let r = e[s - 1],
    i = r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
  return o - (s - 1) < i ? s - 1 : o;
}
function yn(e, t, o) {
  let s = t;
  while (!0) {
    if (((s = _(e, z, s, o)), s < 0)) return;
    let r = s + z.length;
    if (_(e, xe, r, r + 4) === r) {
      let i = r;
      while (i < o && e[i] !== G) i++;
      return e.toString("utf8", r, i);
    }
    s = r;
  }
}
function k(e, t, o, s) {
  let r = _(e, t, o, s);
  if (r < 0) return 0;
  let i = r + t.length,
    c = 0;
  while (i < s && e[i] >= H && e[i] <= ae) ((c = c * 10 + (e[i] - H)), i++);
  return c;
}
function Cn(e) {
  if (!e) return 3;
  let t = e.toLowerCase();
  if (t.includes("fable")) return 10;
  if (t.includes("opus")) return 5;
  if (t.includes("haiku")) return 1;
  return 3;
}
function An(e) {
  return (
    (e.cached + e.uncached * 10 + e.cacheCreate * 12.5 + e.output * 50) *
    e.modelTier
  );
}
async function collectRecentUsageSummary(e) {
  let t = Date.now() - oe,
    o = Date.now() - 86400000,
    s = J(),
    r = J();
  return (
    await ue(
      t,
      (i) => {
        if ((ee(r, i), i.ts >= o)) ee(s, i, o);
      },
      e,
      (i) => {
        if ((Z(r, i), i.ts >= o)) Z(s, i);
      },
    ),
    { day: ne(s), week: ne(r) }
  );
}
async function ue(e, t, o, s, r) {
  if (o) return En(o, e, t, s, r);
  let i = getProjectsDir(),
    c;
  try {
    c = await readdir(i);
  } catch (u) {
    if (Rt(u)) return;
    throw u;
  }
  let f = (await Promise.all(c.map((u) => In(N(i, u))))).flat(),
    m = de(t, s);
  for (let u = 0; u < f.length; u += D) {
    let g = f.slice(u, u + D),
      S = g.map(() => r && _e(r()));
    (await Promise.all(g.map((y, l) => vn(y, e, S[l])))).forEach((y, l) => {
      (m(y), S[l]?.end(y));
    });
  }
}
function de(e, t) {
  let o = new Set(),
    s = (r) => {
      if (!r) return !0;
      if (o.has(r)) return !1;
      return (o.add(r), !0);
    };
  return (r) => {
    for (let i of r.records) if (s(i.uuid)) e(i);
    if (t) {
      for (let i of r.fires) if (s(i.uuid)) t(i);
    }
  };
}
async function En(e, t, o, s, r) {
  let i = [],
    c = createPageBudget(),
    a = await runPaginatedScan(
      (S) =>
        e.listEntries(
          { namespace: "transcript" },
          { skipScopeStats: !0, ...(S !== void 0 && { cursor: S }) },
        ),
      (S) => {
        for (let E of S) {
          let y = listedProjectKey(E, isValidPathSegment);
          if (y !== void 0) i.push(y);
        }
      },
      { budget: c },
    );
  q("project", a, c);
  let m = (await Promise.all(i.map((S) => On(e, S, t, c)))).flat(),
    u = de(o, s);
  for (let S = 0; S < m.length; S += D) {
    let E = m.slice(S, S + D),
      y = E.map(() => r && _e(r()));
    (await Promise.all(E.map((p, T) => Ln(e, p, t, y[T])))).forEach((p, T) => {
      (u(p), y[T]?.end(p));
    });
  }
  let g = getAdditionalTruncationCount(c);
  if (g > 0)
    logForDebugging(
      `foldRecentRecords: ${g} more v5 listings were cut short after the scan's ${DEFAULT_MAX_PAGES}-page budget ran out`,
    );
}
async function On(e, t, o, s) {
  let r = [],
    i = [],
    c = await runPaginatedScan(
      (u) =>
        e.listEntries(
          { namespace: "transcript", projectKey: t },
          { skipScopeStats: !0, ...(u !== void 0 && { cursor: u }) },
        ),
      (u) => {
        for (let g of u)
          if (g.kind === "key") pe(r, g);
          else if (
            g.scope.namespace === "transcript" &&
            g.scope.sessionId !== void 0 &&
            isValidPathSegment(g.scope.sessionId)
          )
            i.push(g.scope.sessionId);
      },
      { budget: s },
    );
  q("session", c, s);
  let a = new Map();
  for (let u of r)
    if (
      u.key.namespace === "transcript" &&
      u.key.agentId === void 0 &&
      u.key.journal !== !0
    )
      a.set(u.key.sessionId, u.mtimeMs);
  let f = i.filter((u) => (a.get(u) ?? 1 / 0) >= o),
    m = await Promise.all(f.map((u) => le(e, t, u, s)));
  return r.concat(m.flat());
}
async function le(e, t, o, s, r) {
  let i = [],
    c = [],
    a = await runPaginatedScan(
      (m) =>
        e.listEntries(
          {
            namespace: "transcript",
            projectKey: t,
            sessionId: o,
            ...(r !== void 0 && { agentRelPath: r }),
          },
          { skipScopeStats: !0, ...(m !== void 0 && { cursor: m }) },
        ),
      (m) => {
        for (let u of m)
          if (u.kind === "key") {
            if (
              u.key.namespace === "transcript" &&
              (u.key.agentId !== void 0 || u.key.journal === !0)
            )
              pe(i, u);
          } else if (
            u.scope.namespace === "transcript" &&
            u.scope.agentRelPath !== void 0 &&
            u.scope.agentRelPath.length > (r?.length ?? 0)
          )
            c.push(u.scope.agentRelPath);
      },
      { budget: s },
    );
  q("subagent", a, s);
  let f = await Promise.all(c.map((m) => le(e, t, o, s, m)));
  return i.concat(f.flat());
}
function q(e, t, o) {
  let s = classifyScanOutcome(t, o);
  if (t.status === "error")
    logForDebugging(`foldRecentRecords: v5 ${e} listing failed: ${t.error.code}`);
  else if (s === "first-truncation")
    logForDebugging(
      `foldRecentRecords: v5 ${e} listing cut short (the scan's ${DEFAULT_MAX_PAGES}-page budget is spent); keeping what was listed`,
    );
}
function pe(e, t) {
  if (
    t.kind === "key" &&
    t.key.namespace === "transcript" &&
    t.size !== void 0 &&
    t.mtimeMs !== void 0
  )
    e.push({ key: t.key, size: t.size, mtimeMs: t.mtimeMs });
}
async function Ln(e, t, o, s) {
  let r = fe();
  if (t.mtimeMs >= o) await wn(e, t, me(r, o, s));
  return r;
}
async function wn(e, t, o) {
  let { key: s } = t,
    r = t.size <= te,
    i = 0,
    c = [],
    a = 0;
  while (!0) {
    let f = await e.read([r ? s : { key: s, offset: i, length: ye }]);
    if (!f.ok) {
      logForDebugging(`readRecordsFromStream: v5 read failed: ${f.error.code}`);
      return;
    }
    let m = f.value.items[0];
    if (!m.found) return;
    let u = Buffer.from(m.value.buffer, m.value.byteOffset, m.value.byteLength),
      g = 0;
    while (g < u.length) {
      let S = u.indexOf(10, g);
      if (S === -1) {
        (c.push(Buffer.from(u.subarray(g))), (a += u.length - g));
        break;
      }
      if (a === 0) o(u.subarray(g, S));
      else
        (o(Buffer.concat([...c, u.subarray(g, S)], a + (S - g))),
          (c = []),
          (a = 0));
      g = S + 1;
    }
    if (
      ((i += m.value.byteLength),
      r || m.value.byteLength === 0 || i >= m.totalBytes)
    )
      break;
  }
  if (a > 0) o(c.length === 1 ? c[0] : Buffer.concat(c, a));
}
function kn(e, t) {
  if (!t.attributionSkill) return;
  e.set(
    t.attributionSkill,
    (e.get(t.attributionSkill) ?? 0) +
      t.cached +
      t.cacheCreate +
      t.uncached +
      t.output,
  );
}
async function collectSkillTokenUsage(e) {
  let t = Date.now() - oe,
    o = new Map();
  return (await ue(t, (s) => kn(o, s), e), o);
}
async function In(e) {
  let t;
  try {
    t = await readdir(e, { withFileTypes: !0 });
  } catch (i) {
    if (Rt(i)) return [];
    throw i;
  }
  let o = [],
    s = [];
  for (let i of t)
    if (i.isFile() && extname(i.name) === ".jsonl") o.push(N(e, i.name));
    else if (i.isDirectory()) s.push(i.name);
  let r = await Promise.all(
    s.map(async (i) => {
      let c = N(e, i, "subagents");
      try {
        return (await readdir(c, { recursive: !0 }))
          .filter((f) => extname(f) === ".jsonl")
          .map((f) => N(c, f));
      } catch (a) {
        if (Rt(a)) return [];
        throw a;
      }
    }),
  );
  for (let i of r) for (let c of i) o.push(c);
  return o;
}
async function vn(e, t, o) {
  let s = fe();
  return (await Nn(e, t, me(s, t, o)), s);
}
async function Nn(e, t, o) {
  let s;
  try {
    s = await be(e);
  } catch (r) {
    if (Rt(r)) return;
    throw r;
  }
  if (!s.isFile() || s.mtimeMs < t) return;
  try {
    for await (let r of streamFileLines(e)) o(r);
  } catch (r) {
    if (Rt(r)) return;
    throw r;
  }
}
function fe() {
  return { records: [], fires: [] };
}
function me(e, t, o) {
  let s = xn(e, t);
  if (!o) return s;
  return (r) => {
    (s(r), o.line(r, e));
  };
}
function _e(e) {
  let t = !0,
    o = (s) => {
      if (!t) return;
      try {
        s();
      } catch (r) {
        ((t = !1), logError(r));
      }
    };
  return {
    line: (s, r) => o(() => e.line(s, r)),
    end: (s) => o(() => e.end(s)),
  };
}
var Dn = /<command-name>([^<]{1,200})<\/command-name>/,
  W = 200,
  K = 6 * W;
function xn(e, t) {
  let o = 0,
    s = [],
    r = [],
    i = 0,
    c = !0,
    a,
    f = () => {
      (o++, (r = []), (i = 0), (c = !1));
    },
    m = () => {
      (o++, (r = []), (i = 0), (c = !0), (S = void 0), (a = void 0));
    },
    u = () => {
      if (!a) return;
      if (((i = Math.max(0, i - 1)), a.run)) (e.fires.pop(), r.pop());
      if (a.fire && a.fire.taskId === void 0) s.unshift(a.fire);
      a = void 0;
    },
    g = () => {
      if (a?.isCommandRecord) (u(), m());
    },
    S,
    E = (l, p) => {
      let T = R(l, Ve, 0, p);
      if (T !== void 0) {
        let M = s.findIndex((A) => A.uuid === T);
        return M < 0 ? void 0 : s.splice(M, 1)[0];
      }
      let C = R(l, U, 0, p);
      if (C !== void 0) {
        let M = s.findLastIndex((P) => P.taskId === C);
        if (M < 0) return;
        let A = s[M];
        return ((s = s.filter((P) => P.taskId !== C)), A);
      }
      if (!(_(l, sn, 0, p) < 0 && (_(l, B, 0, p) >= 0 || L(l, V, p)))) {
        s = s.filter((M) => M.taskId !== void 0);
        return;
      }
      if (s[0]?.taskId === void 0) return s.shift();
      return;
    },
    y = (l, p) =>
      _(l, B, 0, p) >= 0 &&
      (fn.some((T) => _(l, T, 0, p) >= 0) ||
        mn.some((T) => _(l, T, 0, p) >= 0));
  return (l) => {
    let p = l.length;
    if (_(l, se, 0, p) >= 0) {
      let T = Hn(l, 0, p, t);
      if (((c = !0), (a = void 0), T)) {
        if (i > 1 && r.length > 0) {
          let C = 1 / i;
          T.loopShares = r.map((O) => ({ ...O, share: C }));
        } else if (r[0]) ((T.loop = r[0].loop), (T.loopFireTs = r[0].fireTs));
        e.records.push(T);
      }
      return;
    }
    if (_(l, Ye, 0, p) >= 0) {
      if (
        _(l, Qe, 0, p) >= 0 ||
        _(l, Je, 0, p) >= 0 ||
        _(l, nn, 0, p) >= 0 ||
        L(l, ln, p) ||
        Pn(l, p) ||
        y(l, p)
      )
        return;
      if (_(l, Ze, 0, p) >= 0) {
        m();
        return;
      }
      let T = _(l, B, 0, p) >= 0;
      if (T && L(l, pn, p)) {
        if ((u(), i === 0)) m();
        return;
      }
      if (L(l, Q, p)) {
        g();
        return;
      }
      let C = L(l, V, p);
      if (L(l, dn, p) || (T && !C && _(l, cn, 0, p) < 0 && _(l, U, 0, p) < 0))
        return;
      let O = _(l, rn, 0, p) >= 0 || (!T && !C && _(l, U, 0, p) < 0),
        M = E(l, p);
      if (M?.openBatch === o && !c && i > 0) m();
      if (c || O) f();
      if ((i++, (a = { fire: M, run: !1, isCommandRecord: C }), !M)) {
        S = void 0;
        return;
      }
      let A = M.loop ?? Fn(l, p);
      if (!A) return;
      if (!A.isDynamic) S = void 0;
      if (M.ts < t) return;
      (e.fires.push({ ts: M.ts, uuid: M.uuid, loop: A }),
        r.push({ loop: A, fireTs: M.ts }),
        (a.run = !0));
      return;
    }
    if (_(l, an, 0, p) >= 0 && _(l, un, 0, p) >= 0 && L(l, Q, p)) {
      g();
      return;
    }
    if (_(l, tn, 0, p) >= 0 && _(l, on, 0, p) >= 0) {
      m();
      return;
    }
    if (_(l, ze, 0, p) >= 0) {
      let T = R(l, re, 0, p),
        C = T ? Date.parse(T) : NaN;
      if (Number.isNaN(C)) return;
      let O = x(l, Sn, 0, p, K),
        M = O ? formatTruncatedText(O, W) : void 0,
        A = _(l, Tn, 0, p) >= 0;
      if (M && A) ((S ??= M), (M = S));
      s.push({
        ts: C,
        openBatch: i > 0 && !c ? o : void 0,
        uuid: R(l, ie, 0, p) ?? "",
        taskId: R(l, Xe, 0, p),
        loop: M
          ? { prompt: M, cron: Un(x(l, gn, 0, p, Bn)), isDynamic: A }
          : null,
      });
    }
  };
}
function Pn(e, t) {
  let o = _(e, X, 0, t);
  if (o < 0) return !1;
  let s = o + X.length,
    r = s;
  while (s < t && e[s] >= H && e[s] <= ae) s++;
  return s > r && _(e, en, s, t) === s;
}
var ge = 64,
  Bn = 6 * ge;
function Un(e) {
  return e === void 0 ? void 0 : formatTruncatedText(e, ge);
}
function Fn(e, t) {
  let o = x(e, hn, 0, t, K) ?? x(e, Mn, 0, t, K);
  if (!o) return null;
  let s = o.match(Dn)?.[1],
    r = formatTruncatedText(s ?? o, W);
  return r ? { prompt: r, cron: void 0, isDynamic: !1 } : null;
}
function Hn(e, t, o, s) {
  if (_(e, se, t, o) < 0) return;
  if (_(e, Ie, t, o) < 0) return;
  let r = R(e, re, t, o),
    i = R(e, ve, t, o);
  if (!r || !i) return;
  let c = Date.parse(r);
  if (Number.isNaN(c) || c < s) return;
  let a = k(e, Pe, t, o),
    f = k(e, Be, t, o),
    m = k(e, Ue, t, o),
    u = k(e, Fe, t, o);
  if (a + f + m + u === 0) return;
  let g = _(e, Ge, t, o) >= 0,
    S = R(e, Ne, t, o);
  return {
    ts: c,
    sessionId: i,
    cached: u,
    cacheCreate: m,
    uncached: a,
    output: f,
    isSubagent: _(e, He, t, o) >= 0 || _(e, Ke, t, o) >= 0,
    modelTier: Cn(S),
    model: S,
    uuid: R(e, De, t, o) ?? yn(e, t, o) ?? R(e, ie, t, o) ?? "",
    ...(g && {
      attributionAgent: R(e, qe, t, o),
      attributionSkill: R(e, $e, t, o),
      attributionPlugin: R(e, We, t, o),
      attributionMcpServer: R(e, je, t, o),
    }),
  };
}
function J() {
  return {
    totalCost: 0,
    requestCount: 0,
    cacheMissCost: 0,
    cacheMissCount: 0,
    longCtxCost: 0,
    longCtxCount: 0,
    sessions: new Map(),
    buckets: new Map(),
    byAgent: new Map(),
    bySkill: new Map(),
    byPlugin: new Map(),
    byMcpServer: new Map(),
    loops: new Map(),
  };
}
function Se(e, t) {
  let o = e.loops.get(t.prompt);
  if (!o)
    ((o = {
      prompt: t.prompt,
      cron: t.cron,
      isDynamic: t.isDynamic,
      runs: 0,
      tokens: 0,
      lastRunMs: 0,
    }),
      e.loops.set(t.prompt, o));
  return o;
}
function Z(e, t) {
  let o = Se(e, t.loop);
  if ((o.runs++, t.ts >= o.lastRunMs))
    ((o.lastRunMs = t.ts),
      (o.cron = t.loop.cron ?? o.cron),
      (o.isDynamic = t.loop.isDynamic));
}
function I(e, t, o) {
  if (t) e.set(t, (e.get(t) ?? 0) + o);
}
function ee(e, t, o = -1 / 0) {
  let s = An(t);
  if (((e.totalCost += s), e.requestCount++, t.attributionAgent))
    I(e.byAgent, t.attributionSkill ?? t.attributionAgent, s);
  else I(e.bySkill, t.attributionSkill, s);
  if (
    (I(e.byPlugin, t.attributionPlugin, s),
    I(e.byMcpServer, t.attributionMcpServer, s),
    t.loop || t.loopShares)
  ) {
    let f = t.cached + t.cacheCreate + t.uncached + t.output;
    for (let { loop: m, fireTs: u, share: g } of t.loopShares ?? [
      { loop: t.loop, fireTs: t.loopFireTs ?? t.ts, share: 1 },
    ])
      if (u >= o) Se(e, m).tokens += f * g;
  }
  let r = t.cached + t.cacheCreate + t.uncached;
  if (t.uncached > Ce) ((e.cacheMissCost += s), e.cacheMissCount++);
  if (r > Ae) ((e.longCtxCost += s), e.longCtxCount++);
  let i = e.sessions.get(t.sessionId);
  if (!i)
    ((i = { cost: 0, requests: 0, subCost: 0, subCount: 0, hours: new Set() }),
      e.sessions.set(t.sessionId, i));
  if (((i.cost += s), i.requests++, t.isSubagent))
    ((i.subCost += s), i.subCount++);
  i.hours.add(Math.floor(t.ts / 3600000));
  let c = Math.floor(t.ts / Le),
    a = e.buckets.get(c);
  if (!a) ((a = { sids: new Set(), cost: 0, count: 0 }), e.buckets.set(c, a));
  (a.sids.add(t.sessionId), (a.cost += s), a.count++);
}
function ne(e) {
  let t = 0,
    o = 0;
  for (let f of e.buckets.values())
    if (f.sids.size >= we) ((t += f.cost), (o += f.count));
  let s = 0,
    r = 0,
    i = 0,
    c = 0;
  for (let f of e.sessions.values()) {
    if (f.subCount >= Ee || (f.cost > 0 && f.subCost / f.cost > Oe))
      ((s += f.cost), r++);
    if (f.hours.size >= ke) ((i += f.cost), c++);
  }
  let a = [
    { key: "cache_miss", cost: e.cacheMissCost, count: e.cacheMissCount },
    { key: "long_context", cost: e.longCtxCost, count: e.longCtxCount },
    { key: "subagent_heavy", cost: s, count: r },
    { key: "high_parallel", cost: t, count: o },
    { key: "cron", cost: i, count: c },
  ];
  return (
    a.sort((f, m) => m.cost - f.cost),
    {
      totalCost: e.totalCost,
      requestCount: e.requestCount,
      sessionCount: e.sessions.size,
      behaviors: a,
      agents: v(e.byAgent, e.totalCost),
      skills: v(e.bySkill, e.totalCost),
      plugins: v(e.byPlugin, e.totalCost),
      mcpServers: v(e.byMcpServer, e.totalCost),
      loops: [...e.loops.values()]
        .map((f) => ({ ...f, tokens: Math.round(f.tokens) }))
        .sort((f, m) => m.tokens - f.tokens),
    }
  );
}
function v(e, t) {
  if (e.size === 0 || t === 0) return [];
  return [...e.entries()]
    .sort((o, s) => s[1] - o[1])
    .map(([o, s]) => ({ name: o, pct: Math.round((s / t) * 100) }))
    .filter((o) => o.pct > 0);
}
export { getUsagePatternsAccess, getSkillTokenCountsAccess, collectRecentUsageSummary, collectSkillTokenUsage };
