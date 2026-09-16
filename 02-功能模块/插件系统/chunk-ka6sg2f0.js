// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { R, l, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { C0, Cx } from "../MCP客户端/chunk-tv3jbp8f.js";
import { A1 } from "../MCP客户端/chunk-j8556pzt.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { ac, li, jf, Oi } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { b, z, n8, hxe, Sh } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { ghe } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { Vtt } from "../../01-核心基础设施/共享小工具-未细化/chunk-fpr1vv1t.js";
import { s, O, se, v, c, $e, Ko, fe, X, k, Hb } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { createHash as de } from "crypto";
import { constants as S } from "fs";
import T from "path";
import { open as M } from "fs/promises";
import Q from "path";
var N = 120;
function B(e) {
  return e.length > N ? `${oe(e, N)}...` : e;
}
function oc(e) {
  return ghe(b(B(e)));
}
function Y0n(e) {
  if (typeof e === "string") return oc(e);
  let t = b(e) ?? String(e);
  return t.length <= N ? ghe(t) : ghe(b(B(t)));
}
async function mm(e, t, r, o = []) {
  let n = Q.resolve(e, t),
    i = oc(t),
    a = [e, ...o];
  if ((jf(t) && !li(t)) || (jf(n) && !li(n)))
    throw new R(
      `${r}: ${i} is an automounter path (macOS /Network) \u2014 refusing it (a lookup there is a network request)`,
      "plugin eval: a repo-authored path is an automounter path \u2014 refusing it",
    );
  if (ac(t, e) && o.every((d) => ac(n, d)) && !Oi(t) && !Oi(n))
    throw new R(
      `${r}: ${i} is a network-reaching path (UNC / automount) \u2014 refusing it`,
      "plugin eval: a repo-authored path is network-reaching \u2014 refusing it",
    );
  let p = await hxe(Sh, n, {
    anchors: a,
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified",
  });
  if (p === n8)
    throw new R(
      `${r}: ${i} passes through a component that cannot be examined (unreadable, a link or junction whose target does not exist, or a symlink chain too long to follow) \u2014 refusing it (it could not be vetted)`,
      "plugin eval: a repo-authored path has an unexaminable component \u2014 refusing it",
    );
  if (p !== void 0)
    throw new R(
      `${r}: ${i} passes through a symlink to a network-reaching path (or a dotted one that cannot be vetted) \u2014 refusing it`,
      "plugin eval: a repo-authored path links to a network-reaching path \u2014 refusing it",
    );
}
import C from "path";
var ee = 8192,
  H = 50000000,
  te = /^[is]*$/;
function D(e) {
  let r = 0,
    o = 1,
    n = 0,
    i = !1,
    a = !1,
    p = !1;
  for (let u = 0; u < e.length; u++) {
    let f = e[u];
    if (f === "(" || f === ")" || f === "|")
      return {
        problem:
          'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead',
      };
    if (f === "^") {
      if (u !== 0)
        return {
          problem:
            'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead',
        };
      ((i = !0), (a = !1), (p = !1));
      continue;
    }
    if (f === "$") {
      if (u !== e.length - 1)
        return {
          problem:
            'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead',
        };
      continue;
    }
    let h = null;
    if (f === "*") h = { lo: 0, hi: 1 / 0 };
    else if (f === "+") h = { lo: 1, hi: 1 / 0 };
    else if (f === "?") {
      if (p) {
        p = !1;
        continue;
      }
      h = { lo: 0, hi: 1 };
    } else if (f === "{") {
      let g = /^\{(\d+)(?:,(\d*))?\}/.exec(e.slice(u));
      if (g) {
        let x = Number(g[1]),
          E = g[2] === void 0 ? x : g[2] === "" ? 1 / 0 : Number(g[2]);
        if (E < x) return { problem: `quantifier ${g[0]} has max < min` };
        ((h = { lo: x, hi: E }), (u += g[0].length - 1));
      }
    }
    if (h !== null) {
      if (!a)
        return {
          problem:
            "a quantifier must follow a single character, escape, or class",
        };
      if (((n += (h.hi === 1 / 0 ? h.lo : h.hi) - 1), h.hi === 1 / 0)) r++;
      else o *= h.hi - h.lo + 1;
      ((a = !1), (p = !0));
      continue;
    }
    if (((p = !1), f === "\\")) {
      let g = e[u + 1];
      if (g === void 0)
        return { problem: "pattern ends with a lone backslash" };
      if (/[1-9]/.test(g) || g === "k")
        return {
          problem:
            'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead',
        };
      if (((a = g !== "b" && g !== "B"), a)) n++;
      u++;
      continue;
    }
    if (f === "[") {
      u++;
      while (u < e.length && e[u] !== "]") {
        if (e[u] === "\\") u++;
        u++;
      }
      if (u >= e.length) return { problem: "unterminated character class" };
      ((a = !0), n++);
      continue;
    }
    ((a = !0), n++);
  }
  if (o > H)
    return {
      problem: "too many optional/bounded repeats for an expect: guard",
    };
  let d = (u) => {
      let f = 1;
      for (let h = 1; h <= r; h++) f = (f * (u + h)) / h;
      return (i ? 1 : Math.max(1, u)) * f * o * (u + n);
    },
    y = 0,
    w = ee;
  while (y < w) {
    let u = Math.ceil((y + w) / 2);
    if (d(u) <= H) y = u;
    else w = u - 1;
  }
  if (y < 16)
    return {
      problem:
        "this combination of repeats leaves no useful subject length under the matching budget \u2014 use fewer quantifiers",
    };
  return { maxSubject: y, problem: null };
}
var re = new Set(["string", "number", "bool", "boolean", "object", "array"]);
function j(e, t) {
  let r = e;
  for (let o of t.split(".")) {
    if (r === null || typeof r !== "object") return;
    if (Array.isArray(r)) {
      if (!/^\d+$/.test(o)) return;
      r = r[Number(o)];
      continue;
    }
    r = Object.hasOwn(r, o) ? r[o] : void 0;
  }
  return r;
}
function A2e(e, t, r = "") {
  for (let [o, n] of Object.entries(t)) {
    let i = r ? `${r}.${o}` : o,
      a = j(e, i),
      p = ne(a, n, i, e);
    if (p !== null) return p;
  }
  return null;
}
function ne(e, t, r, o) {
  if (Array.isArray(t))
    return t.some((i) => U(e, i))
      ? null
      : `${r} = ${_(e)} is not one of [${t.join(", ")}]`;
  if (typeof t === "object" && t !== null) return A2e(o, t, r);
  let n = G(t);
  if (n !== null) {
    let i =
        typeof e === "string"
          ? e
          : typeof e === "number" || typeof e === "boolean"
            ? String(e)
            : null,
      a = D(n.source);
    if (!("maxSubject" in a))
      return `${r}: ${t} is not a usable guard (${a.problem})`;
    let p = a.maxSubject;
    if (i !== null && i.length > p)
      return `${r} is ${i.length} characters, more than this /regex/ guard checks (${p})`;
    return i !== null && n.test(i)
      ? null
      : `${r} = ${_(e)} does not match ${t}`;
  }
  if (re.has(t)) {
    let i = t === "boolean" ? "bool" : t;
    return ie(e) === i ? null : `${r} = ${_(e)} is not a ${t}`;
  }
  return U(e, t) ? null : `${r} = ${_(e)} is not "${t}"`;
}
function U(e, t) {
  if (typeof e === "string") return e === t;
  if (typeof e === "number" || typeof e === "boolean") return String(e) === t;
  return !1;
}
function G(e) {
  let t = /^\/(.+)\/([a-z]*)$/s.exec(e);
  if (!t) return null;
  return new RegExp(t[1] ?? "", t[2] ?? "");
}
function ie(e) {
  if (Array.isArray(e)) return "array";
  if (e === null || e === void 0) return "missing";
  if (typeof e === "boolean") return "bool";
  return typeof e;
}
function _(e) {
  if (e === void 0) return "(missing)";
  let t = b(e);
  return t.length > 80 ? `${oe(t, 77)}...` : t;
}
var L = 32;
function J0n(e, t = "") {
  let r = [];
  if (t === "") {
    let o = q(e);
    if (o > L)
      return (
        r.push(
          `expect: ${o} guards is more than the ${L} one responder may carry \u2014 every call checks each of them; keep the ones that catch a wrong call`,
        ),
        r
      );
  }
  for (let [o, n] of Object.entries(e)) {
    let i = t ? `${t}.${o}` : o;
    if (Array.isArray(n)) {
      if (n.length === 0)
        r.push(
          `expect.${i}: an empty list of allowed values can never be satisfied \u2014 list at least one`,
        );
      continue;
    }
    if (typeof n === "object" && n !== null) {
      r.push(...J0n(n, i));
      continue;
    }
    if (/^\/.*\/[a-z]*$/s.test(n))
      try {
        let a = G(n),
          p = a ? D(a.source) : null;
        if (a && !te.test(a.flags))
          r.push(
            `expect.${i}: ${n} \u2014 only the i and s flags are supported in expect: guards`,
          );
        else if (p && p.problem !== null)
          r.push(`expect.${i}: ${n} \u2014 ${p.problem}`);
      } catch (a) {
        r.push(
          `expect.${i}: invalid regular expression ${n} (${a instanceof Error ? a.message : String(a)}) \u2014 a value written /like this/ is read as a regex; for a literal that starts and ends with a slash, write a one-element list: ["${n}"]`,
        );
      }
  }
  return r;
}
var ae = /^(?!\.{1,2}$)[A-Za-z0-9._-]+$/;
async function r7t(e, t, r, o, n = Number.POSITIVE_INFINITY) {
  let i = null,
    a = [],
    p = 0;
  for (let y of e.matchAll(
    /\{\{\s*(input\.[A-Za-z0-9_.-]+|file:(?:[^{}]|\{input\.[A-Za-z0-9_.-]+\})+?)\s*\}\}/g,
  )) {
    (a.push(e.slice(p, y.index)), (p = y.index + y[0].length));
    let w = y[1] ?? "";
    if (w.startsWith("input.")) {
      let g = j(t, w.slice(6)),
        x = g === void 0 ? "" : typeof g === "string" ? g : b(g);
      a.push(
        x.length > n
          ? `${oe(x, n)}\u2026 [${x.length - n} more characters omitted]`
          : x,
      );
      continue;
    }
    let u = w.slice(5).trim(),
      f = null;
    if (
      ((u = u.replace(/\{input\.([A-Za-z0-9_.-]+)\}/g, (g, x) => {
        let E = j(t, x),
          F = E === void 0 || E === null ? "" : String(E);
        if (!ae.test(F))
          f = `{input.${x}} = ${_(E)} is not a plain file-name segment`;
        return F;
      })),
      f !== null)
    ) {
      i ??= f;
      continue;
    }
    let h = C.resolve(r, u);
    if (!le(r, h)) {
      i ??= `{{file:${u}}} names a path outside the mock's directory`;
      continue;
    }
    a.push(
      o(h).then((g) => {
        if (typeof g !== "string")
          return ((i ??= `{{file:${u}}}: ${g.problem}`), "");
        return g;
      }),
    );
  }
  a.push(e.slice(p));
  let d = await Promise.all(a);
  if (i !== null) return { ok: !1, reason: i };
  return { ok: !0, text: d.join("") };
}
function le(e, t) {
  let r = C.relative(e, t);
  return r !== "" && !r.startsWith("..") && !C.isAbsolute(r);
}
function q(e) {
  let t = 0;
  for (let r of Object.values(e))
    if (
      ((t +=
        typeof r === "object" && r !== null && !Array.isArray(r) ? q(r) : 1),
      t > L)
    )
      break;
  return t;
}
import { createConnection as ue } from "net";
var ztt = "eval aborted by mock",
  jQ = "mock agent responder failed";
var pe = m(() =>
    c({
      verdict: X(["ok", "tool_error", "abort"]),
      text: s(),
      replay: X(["hit", "miss"]).optional(),
    }),
  ),
  ge = 4194304;
async function V(e, t, r) {
  try {
    let o = await me(
      e.socketPath,
      `${b({ token: e.token, ...t })}
`,
      r,
    );
    return pe().parse(z(o));
  } catch (o) {
    return (
      process.stderr.write(`eval mock stand-in: agent relay failed: ${l(o)}
`),
      {
        verdict: "abort",
        text: `${jQ} (harness_unreachable) \u2014 see the eval debug log`,
      }
    );
  }
}
function me(e, t, r) {
  return new Promise((o, n) => {
    if (r.aborted) {
      n(Error("aborted"));
      return;
    }
    let i = ue({ path: e }),
      a = Buffer.alloc(0),
      p = !1,
      d = (w, u) => {
        if (p) return;
        if (
          ((p = !0), r.removeEventListener("abort", y), i.destroy(), w !== null)
        )
          n(w);
        else o(u ?? "");
      },
      y = () => d(Error("aborted"));
    (r.addEventListener("abort", y, { once: !0 }),
      i.once("connect", () => i.write(t)),
      i.on("data", (w) => {
        if (((a = Buffer.concat([a, w])), a.length > ge)) {
          d(Error("relay response too large"));
          return;
        }
        let u = a.indexOf(10);
        if (u !== -1) d(null, a.subarray(0, u).toString("utf8"));
      }),
      i.once("error", (w) => d(w)),
      i.once("close", () =>
        d(Error("harness closed the relay without answering")),
      ));
  });
}
var he = m(() => {
    let e = Hb(() => $e([s(), v(s()), fe(s(), e)])),
      t = fe(s(), e).nullable(),
      r = Ko("kind", [
        c({
          kind: k("fixed"),
          body: s(),
          isError: O(),
          expect: t,
          baseDir: s(),
        }),
        c({
          kind: k("agent"),
          prompt: s(),
          abortWhen: s().nullable(),
          expect: t,
          baseDir: s(),
          replay: c({
            mockHash: s(),
            replayDir: s(),
            pinned: fe(s(), s()),
          }).default({ mockHash: "", replayDir: "", pinned: {} }),
        }),
      ]);
    return c({
      registeredName: s(),
      server: s(),
      nonce: s(),
      callLogPath: s(),
      tools: v(c({ name: s(), description: s(), inputSchema: fe(s(), se()) })),
      responders: fe(s(), r),
      agent: c({ socketPath: s(), token: s() }).nullable(),
    });
  }),
  Y = 1048576;
async function mbr(e, t) {
  if (!e) throw Error("missing spec path");
  let r = await ve(e);
  if (t !== void 0 && de("sha256").update(r).digest("hex") !== t)
    throw Error(
      "spec file does not match the hash the harness launched this stand-in with \u2014 refusing to serve it",
    );
  let o = Se(r),
    n = be(o),
    i = new Vtt();
  if (!(await Z(o.callLogPath, b({ ready: o.nonce, server: o.server }))))
    throw Error(
      "could not write the identity line to the run call log \u2014 refusing to serve unidentified",
    );
  (await n.connect(i),
    process.stdin.on("end", () => void n.close()),
    process.stdin.on("error", () => void n.close()));
}
function be(e) {
  let t = 0,
    r = new AbortController(),
    o = { spec: e, signal: r.signal },
    n = new A1(
      { name: `eval-mock/${e.server}`, version: "1" },
      { capabilities: { tools: {} } },
    );
  ((n.onclose = () => r.abort()),
    n.setRequestHandler(C0, async () => ({
      tools: e.tools.map((p) => ({
        name: p.name,
        description: p.description,
        inputSchema: { type: "object", ...p.inputSchema },
      })),
    })));
  let i = Promise.resolve();
  n.setRequestHandler(Cx, (p) => {
    let d = i.then(() => a(p.params));
    return ((i = d.catch(() => {})), d);
  });
  async function a(p) {
    let d = p.name,
      y = p.arguments ?? {},
      w = Date.now(),
      u = Object.hasOwn(e.responders, d) ? e.responders[d] : void 0,
      f =
        u === void 0
          ? { verdict: "tool_error", text: `no mock for ${e.server}/${d}` }
          : await ye(u, y, o, d),
      h = {
        nonce: e.nonce,
        seq: t++,
        server: e.server,
        tool: d,
        responder: u?.kind ?? "fixed",
        input: we(y),
        verdict: f.verdict,
        output: K(f.text),
        ms: Date.now() - w,
        ...(f.replay && { replay: f.replay }),
      };
    if (!(await Z(e.callLogPath, b(h))) && f.verdict === "abort")
      process.stderr
        .write(`eval mock stand-in: could not write the abort record to the call log
`);
    switch (f.verdict) {
      case "ok":
        return { content: [{ type: "text", text: Rkt(f.text) }] };
      case "tool_error":
        return { content: [{ type: "text", text: Rkt(f.text) }], isError: !0 };
      case "abort":
        return {
          content: [
            {
              type: "text",
              text: `${ztt} ${e.nonce}: ${e.server}/${d} \u2014 ${f.text}`,
            },
          ],
          isError: !0,
        };
    }
  }
  return n;
}
async function ye(e, t, r, o = "") {
  if (e.expect !== null) {
    let n = A2e(t, e.expect);
    if (n !== null)
      return { verdict: "abort", text: `input violates expect: ${n}` };
  }
  switch (e.kind) {
    case "agent": {
      if (!r || r.spec.agent === null)
        return {
          verdict: "tool_error",
          text: "agent mock responder called without a harness relay",
        };
      return V(
        r.spec.agent,
        { registeredName: r.spec.registeredName, tool: o, input: t },
        r.signal,
      );
    }
    case "fixed": {
      let n = await r7t(e.body, t, e.baseDir, o7t);
      if (!n.ok) return { verdict: "tool_error", text: n.reason };
      return { verdict: e.isError ? "tool_error" : "ok", text: n.text };
    }
  }
}
async function o7t(e) {
  try {
    await mm(T.dirname(e), T.basename(e), "mock fixture");
    let t = await M(e, S.O_RDONLY | (P() === "windows" ? 0 : S.O_NONBLOCK));
    try {
      let r = await t.stat();
      if (!r.isFile()) return { problem: "is not a regular file" };
      if (r.size > Y)
        return {
          problem: `is ${r.size} bytes, over the ${Y}-byte fixture limit`,
        };
      return (await J(t, r.size)).toString("utf8");
    } finally {
      await t.close();
    }
  } catch (t) {
    return {
      problem: W(t) ? "no such fixture" : `could not be read (${A(t) ?? l(t)})`,
    };
  }
}
var Q0n = 16384,
  I = 16384;
function K(e) {
  return e.length > I ? `${oe(e, I)}\u2026[truncated]` : e;
}
function we(e) {
  let t = b(e) ?? "";
  return t.length > I ? K(t) : e;
}
async function Z(e, t) {
  try {
    let r =
        S.O_WRONLY |
        S.O_APPEND |
        S.O_CREAT |
        (P() === "windows" ? 0 : S.O_NONBLOCK),
      o = await M(e, r, 384);
    try {
      if (!(await o.stat()).isFile()) return !1;
      let n = Buffer.from(
          `${t}
`,
          "utf8",
        ),
        i = 0;
      while (i < n.length) {
        let { bytesWritten: a } = await o.write(n, i);
        if (a <= 0) return !1;
        i += a;
      }
      return !0;
    } finally {
      await o.close();
    }
  } catch {
    return !1;
  }
}
async function J(e, t) {
  let r = Buffer.alloc(t),
    o = 0;
  while (o < t) {
    let { bytesRead: n } = await e.read({ buffer: r, offset: o, position: o });
    if (n <= 0) break;
    o += n;
  }
  return r.subarray(0, o);
}
function Rkt(e) {
  return ke.test(e.trimStart()) ? `${xe}${e.trimStart()}` : e;
}
var xe = "| ",
  ke = new RegExp(
    `^(?:${ztt.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}|MCP server "|MCP error -32000: Connection closed)`,
  );
function Se(e) {
  return he().parse(z(e));
}
var Ee = 4194304;
async function ve(e) {
  await mm(T.dirname(e), T.basename(e), "mock spec");
  let t = await M(e, S.O_RDONLY | (P() === "windows" ? 0 : S.O_NONBLOCK));
  try {
    let r = await t.stat();
    if (!r.isFile())
      throw Error("spec path is not a regular file \u2014 refusing to read it");
    if (r.size > Ee)
      throw Error(
        "spec file is over the size limit the harness writes \u2014 refusing to read it",
      );
    return (await J(t, r.size)).toString("utf8");
  } finally {
    await t.close();
  }
}
export { oc, Y0n, mm, A2e, J0n, r7t, ztt, jQ, mbr, o7t, Q0n, Rkt };
