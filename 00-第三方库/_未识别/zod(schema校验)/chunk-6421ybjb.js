// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, rE, B } from "../../lodash/lodash.2x3q7cfh.js";
import { Le } from "../../lodash/lodash.207999qb.js";
import { logFeatureOk, logFeatureSad } from "../../lodash/lodash.0vqzb8ad.js";
import { getSanitizedToolName } from "../../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logForDebugging } from "../../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../../../02-功能模块/模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { findToolByName, isBatchToolDefinition } from "../../../02-功能模块/权限系统/chunk-qdy0h5k2.js";
var x = new j(() => new Set());
function T(e, r) {
  return `${e}_${r}`;
}
var _ = /_(\d+)$/;
function NAe(e) {
  let r = _.exec(e);
  return r ? e.slice(0, -r[0].length) : void 0;
}
function b(e, r, a) {
  let i = findToolByName(r, e.name);
  if (i === void 0 || !isBatchToolDefinition(i)) return null;
  let l = (u) => (
    logFeatureSad("batch_tools", u, { tool_name: getSanitizedToolName(i.name), isMcp: !1 }),
    [
      {
        type: "tool_use",
        id: T(e.id, 0),
        name: i.name,
        input: e.input,
        ...(e.caller !== void 0 && { caller: e.caller }),
      },
    ]
  );
  try {
    let u = i.inputSchema.safeParse(e.input);
    if (!u.success) return { synthetics: l("parse_failed"), decomposed: !1 };
    let { v1Tool: o, entries: t } = i.perEntryHookInputs(u.data);
    if (t.length === 0)
      return { synthetics: l("zero_entries"), decomposed: !1 };
    return {
      decomposed: !0,
      synthetics: t.map((s, c) => {
        let f = s;
        try {
          f = a(o, s);
        } catch (d) {
          if (d instanceof Error && d.name === "ZodError")
            logForDebugging(`batch entry normalize rejected input: ${d}`, { level: "error" });
          else logError(d);
        }
        return {
          type: "tool_use",
          id: T(e.id, c),
          name: o.name,
          input: f,
          ...(e.caller !== void 0 && { caller: e.caller }),
        };
      }),
    };
  } catch {
    return { synthetics: l("per_entry_threw"), decomposed: !1 };
  }
}
function U3t(e) {
  let r;
  for (let a of e)
    if (isBatchToolDefinition(a)) ((r ??= new Set()), r.add(a.underlyingV1ToolName));
  if (r === void 0) return e;
  return e.filter((a) => !r.has(a.name));
}
function B3t(e, r, a) {
  let i,
    l = [];
  for (let u = 0; u < e.length; u++) {
    let o = e[u];
    if (o.type !== "tool_use") {
      i?.push(o);
      continue;
    }
    let t = b(o, r, a);
    if (t === null) {
      i?.push(o);
      continue;
    }
    if (((i ??= e.slice(0, u)), i.push(...t.synthetics), t.decomposed))
      (l.push({ id: o.id, name: o.name }),
        logFeatureOk("batch_tools", { tool_name: getSanitizedToolName(o.name), isMcp: !1 }));
  }
  return { content: i ?? e, batchToolUses: l };
}
function _Jn(e, r, a) {
  if (r === void 0 || r.length === 0) return e;
  let i = new Map();
  for (let t of r) if (!i.has(t.id)) i.set(t.id, t);
  let l = new Map();
  for (let t of i.values()) {
    let s = findToolByName(a, t.name);
    if (s === void 0 || !isBatchToolDefinition(s)) continue;
    let c = [],
      f;
    for (let d of e)
      if (d.type === "tool_use" && NAe(d.id) === t.id)
        ((f ??= d), c.push(d.input));
    try {
      l.set(t.id, {
        type: "tool_use",
        id: t.id,
        name: t.name,
        input: s.reassemble(c),
        ...(f?.caller !== void 0 && { caller: f.caller }),
      });
    } catch {
      let d = x.of(B().host);
      if (!d.has(t.id))
        (d.add(t.id),
          logFeatureSad("batch_tools", "reassemble_threw", {
            tool_name: getSanitizedToolName(t.name),
            isMcp: !1,
          }));
    }
  }
  let u = new Set(),
    o = [];
  for (let t of e) {
    if (t.type === "tool_use") {
      let s = NAe(t.id);
      if (s !== void 0 && l.has(s)) {
        if (!u.has(s)) (u.add(s), o.push(l.get(s)));
        continue;
      }
    }
    o.push(t);
  }
  return o;
}
function yJn(e, r) {
  let a = !1;
  for (let o of e) {
    if (o.type === "assistant") {
      for (let t of o.message.content)
        if (t.type === "tool_use") {
          let s = findToolByName(r, t.name);
          if (s !== void 0 && isBatchToolDefinition(s)) a = !0;
        }
    }
    if (o.type === "user" && !a) {
      if (
        Array.isArray(o.message.content) &&
        o.message.content.some(
          (t) => t.type === "tool_result" && NAe(t.tool_use_id) !== void 0,
        )
      )
        a = !0;
    }
  }
  if (!a) return e;
  let i = new Map();
  for (let o of e) {
    if (o.type !== "assistant") continue;
    for (let t of o.message.content) if (t.type === "tool_use") i.set(t.id, t);
  }
  let l = new Map();
  for (let o of e) {
    if (o.type !== "user" || !Array.isArray(o.message.content)) continue;
    for (let t of o.message.content) {
      if (t.type !== "tool_result") continue;
      let s = NAe(t.tool_use_id);
      if (s === void 0 || !i.has(s)) continue;
      let c = l.get(s);
      if (c === void 0) ((c = new Map()), l.set(s, c));
      if (!c.has(t.tool_use_id)) c.set(t.tool_use_id, t);
    }
  }
  if (l.size === 0) return e;
  let u = new Set();
  return e.flatMap((o) => {
    if (o.type !== "user" || !Array.isArray(o.message.content)) return [o];
    let t = !1,
      s = [];
    for (let c of o.message.content) {
      if (c.type !== "tool_result") {
        s.push(c);
        continue;
      }
      let f = NAe(c.tool_use_id),
        d = f !== void 0 ? l.get(f) : void 0;
      if (f === void 0 || d === void 0) {
        s.push(c);
        continue;
      }
      if (((t = !0), u.has(f))) continue;
      u.add(f);
      let p = i.get(f),
        m = findToolByName(r, p.name),
        k = m !== void 0 && isBatchToolDefinition(m) ? m : void 0;
      s.push(R(k, f, E(k, p.input, f, d)));
    }
    if (!t) return [o];
    if (s.length === 0) return [];
    return [{ ...o, message: { ...o.message, content: s } }];
  });
}
function E(e, r, a, i) {
  let l;
  if (e !== void 0)
    try {
      let o = e.inputSchema.safeParse(r);
      if (o.success) l = e.perEntryHookInputs(o.data).entries;
    } catch {}
  let u = l?.length ?? 0;
  for (let o of i.keys()) {
    let t = _.exec(o);
    if (t) u = Math.max(u, Number(t[1]) + 1);
  }
  if (u > 1000) u = l?.length ?? i.size;
  return Array.from({ length: u }, (o, t) => {
    let s = i.get(T(a, t));
    return s !== void 0
      ? { input: l?.[t], result: s }
      : { input: l?.[t], error: "no result" };
  });
}
function R(e, r, a) {
  let i = [],
    l = "",
    u = !1,
    o = (s) => {
      if (s.length > 0)
        l =
          l === ""
            ? s
            : `${l}
${s}`;
    },
    t = () => {
      if (l !== "") (i.push({ type: "text", text: l }), (l = ""));
    };
  for (let [s, c] of a.entries()) {
    let f = c.result === void 0 || c.result.is_error === !0;
    if (f) u = !0;
    if (
      (o(`--- entry ${s + 1}${f ? " (error)" : ""} ---`), c.result !== void 0)
    ) {
      let d = c.result.content;
      if (typeof d === "string") o(d);
      else if (Array.isArray(d))
        for (let p of d)
          if (p.type === "text") o(p.text);
          else (t(), i.push(p));
    } else o(`[entry ${s + 1} error: ${c.error ?? "no result"}]`);
  }
  if (a.length === 1 && e !== void 0)
    o(
      `<system-reminder>Tip: ${e.name} accepts multiple entries in one call (\`${e.entryFieldName}: [{...}, {...}]\`). Batching related operations into a single call is faster than issuing them as separate or parallel calls. No action needed for this result.</system-reminder>`,
    );
  return (
    t(),
    {
      type: "tool_result",
      tool_use_id: r,
      content: i.length === 1 && i[0]?.type === "text" ? i[0].text : i,
      ...(u && { is_error: !0 }),
    }
  );
}
var S = new Map();
function Bre(e) {
  return S.get(e);
}
function mbt(e) {
  return e
    .map(Bre)
    .filter((r) => r !== void 0)
    .filter((r) => r.isEnabled());
}
function j3t(e, r) {
  return r.find((a) => a.underlyingV1ToolName === e)?.name ?? e;
}
function VY(e) {
  for (let [r, a] of S) if (a.name === e) return r;
  return;
}
var w = new j(() => Le());
function M() {
  return w.of(B().host);
}
var JNe = rE(M);
function gbt(e) {
  return {
    setMode(r) {
      JNe.emit({ kind: "agent-mode", agentId: e, mode: r });
    },
    setRetryStatus(r) {
      JNe.emit({ kind: "agent-retry-status", agentId: e, retryStatus: r });
    },
    setTurnEffort(r, a = null) {
      JNe.emit({
        kind: "agent-turn-effort",
        agentId: e,
        turnEffort: r,
        turnModel: a,
      });
    },
  };
}
var W3t = {
  setSpinnerMessage(e) {
    JNe.emit({ kind: "main-message", message: e });
  },
  setSpinnerColors(e, r) {
    JNe.emit({ kind: "main-colors", color: e, shimmerColor: r });
  },
};
export { NAe, U3t, B3t, _Jn, yJn, Bre, mbt, j3t, VY, JNe, gbt, W3t };
