// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { oe, ln } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Ie, po } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { tl } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { yEt, SEt } from "../../01-核心基础设施/共享小工具-未细化/chunk-1w1x0pyk.js";
import { Ku } from "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { Ghe } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { normalize } from "path";
var tA = 5000,
  _ = 26214400,
  T = 4096;
function k(e) {
  return Bun.hash(e).toString(36);
}
function NG(e) {
  if ((e.offset ?? 1) > 1 || e.isPartialView) return !1;
  if (e.limit === void 0) return !0;
  return (
    e.content !== "" &&
    ln(
      e.content,
      `
`,
    ) +
      1 <
      e.limit
  );
}
function NJ(e) {
  return e !== void 0 && NG(e) && !e.contentNotInModelContext;
}
function qH(e, t) {
  if (e.contentHash !== void 0) return e.contentHash === k(t);
  return e.content === t;
}
function nA(e) {
  return e.charCodeAt(0) === 65279 ? e.slice(1) : e;
}
function qy(e) {
  return nA(e).replaceAll(
    `\r
`,
    `
`,
  );
}
function Ktr(e, t) {
  return qH(e, qy(t));
}
class F {
  cache;
  constructor(e, t) {
    this.cache = new Ku({
      max: e,
      maxSize: t,
      sizeCalculation: (r) => Math.max(1, Buffer.byteLength(r.content)),
    });
  }
  get(e) {
    return this.cache.get(normalize(e));
  }
  set(e, t) {
    let r = normalize(e),
      o = this.cache.get(r),
      i = t.keepContent ?? o?.keepContent,
      a = t.contentHash ?? k(t.content),
      s = t.contentLength ?? t.content.length,
      l =
        i && t.content === "" && a === o?.contentHash && o.content
          ? o.content
          : t.content,
      u = i || Buffer.byteLength(l) <= T ? l : "";
    return (
      this.cache.set(r, {
        ...t,
        keepContent: i,
        contentHash: a,
        contentLength: s,
        content: u,
      }),
      this
    );
  }
  has(e) {
    return this.cache.has(normalize(e));
  }
  delete(e) {
    return this.cache.delete(normalize(e));
  }
  clear() {
    this.cache.clear();
  }
  get size() {
    return this.cache.size;
  }
  get max() {
    return this.cache.max;
  }
  get maxSize() {
    return this.cache.maxSize;
  }
  get calculatedSize() {
    return this.cache.calculatedSize;
  }
  keys() {
    return this.cache.keys();
  }
  entries() {
    return this.cache.entries();
  }
  dump() {
    return this.cache.dump();
  }
  load(e) {
    this.cache.load(e);
  }
}
function DT(e, t = _) {
  return new F(e, t);
}
function _Et(e) {
  return Object.fromEntries(e.entries());
}
function r$e(e) {
  return Array.from(e.keys());
}
function Woe(e, t) {
  let r = DT(e.max, e.maxSize),
    o = e.dump();
  if (t?.stripSeededFromContext) {
    for (let i of o)
      if (i[1].value?.seededFromContext)
        i[1].value = { ...i[1].value, seededFromContext: !1 };
  }
  return (r.load(o), r);
}
function Xtr(e, t) {
  let r = Woe(e);
  for (let [o, i] of t.entries()) {
    let a = r.get(o);
    if (!a || i.timestamp > a.timestamp) r.set(o, i);
  }
  return r;
}
var R = [
    "name",
    "description",
    "model",
    "allowed-tools",
    "argument-hint",
    "arguments",
    "disable-model-invocation",
    "user-invocable",
    "effort",
    "shell",
    "version",
    "when_to_use",
    "paths",
    "hooks",
    "context",
    "agent",
    "created_by",
    "improved_by",
    "mcpServers",
    "lspServers",
    "agents",
    "outputStyles",
    "themes",
    "workflows",
    "channels",
    "monitors",
    "settings",
    "experimental",
    "commands",
    "skills",
    "dependencies",
    "userConfig",
    "metadata",
    "displayName",
    "defaultEnabled",
    "fallback",
    "evals",
    "author",
    "homepage",
    "repository",
    "license",
    "keywords",
    "compatibility",
    "tools",
    "disallowedTools",
    "color",
    "permissionMode",
    "maxTurns",
    "initialPrompt",
    "memory",
    "background",
    "isolation",
    "observer",
    "observerMessage",
    "observeSubagents",
    "keep-coding-instructions",
    "force-for-plugin",
    "type",
    "originSessionId",
    "hide-from-slash-command-tool",
  ],
  V = SEt(R);
var v = [
    "argument-hint",
    "arguments",
    "disable-model-invocation",
    "user-invocable",
    "context",
    "agent",
    "paths",
    "settings",
  ],
  q = new Set(v.map(yEt));
function zH(e) {
  return Bun.YAML.parse(e);
}
function o$e(e) {
  return (
    Bun.YAML.stringify(e, null, 2) +
    `
`
  );
}
var L = /[{}[\]*&#!|>%@`]|: /;
function O(e) {
  let t = e.split(`
`),
    r = [];
  for (let o of t) {
    let i = o.match(/^([a-zA-Z_-]+):\s+(.+)$/);
    if (i) {
      let [, a, s] = i;
      if (!a || !s) {
        r.push(o);
        continue;
      }
      if (
        (s.startsWith('"') && s.endsWith('"')) ||
        (s.startsWith("'") && s.endsWith("'"))
      ) {
        r.push(o);
        continue;
      }
      if (s.startsWith("[") && s.endsWith("]"))
        try {
          if (Array.isArray(zH(s))) {
            r.push(o);
            continue;
          }
        } catch {}
      if (L.test(s)) {
        let l = s.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
        r.push(`${a}: "${l}"`);
        continue;
      }
    }
    r.push(o);
  }
  return r.join(`
`);
}
function z(e) {
  let t = [],
    r = [],
    o = e
      .split(
        `
`,
      )
      .map((i) => {
        let a = i.endsWith("\r"),
          s = a ? i.slice(0, -1) : i,
          l = s.match(/^([A-Za-z0-9_][A-Za-z0-9_.-]*):[ \t]+(.*)$/);
        if (!l) return (b(s, r), i);
        let [, u, f] = l;
        if (!u || !f) return i;
        let d = f.trimEnd();
        if (d === "") return i;
        if (/^["'|>]/.test(d)) return (b(s, r), i);
        let c;
        try {
          c = zH(d);
        } catch {
          return i;
        }
        if (typeof c !== "string" && c !== null) return (b(s, r), i);
        if (!(
          (typeof c === "string" && c !== d) ||
          (c === null && !["null", "Null", "NULL", "~"].includes(d))
        ))
          return i;
        t.push(u);
        let g = d.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
        return `${u}: "${g}"${a ? "\r" : ""}`;
      });
  return {
    text:
      t.length === 0
        ? null
        : o.join(`
`),
    quotedKeys: t,
    unprovableKeys: r,
  };
}
function b(e, t) {
  let r =
    e.match(/^("(?:[^"\\]|\\.)*"):[ \t]+(.*)$/) ??
    e.match(/^('(?:[^']|'')*'):[ \t]+(.*)$/) ??
    e.match(/^([^\s#][^:\n]*?):[ \t]+(.*)$/);
  if (r === null) return;
  let [, o, i] = r;
  if (!o || !i) return;
  let a = i.trimEnd().replace(/"(?:[^"\\]|\\.)*"|'(?:[^']|'')*'/g, "");
  if (/^#|[ \t]#/.test(a)) t.push(o);
}
var FG = 30,
  jK = 65536,
  aP = /^---\s*\n([\s\S]*?)---\s*\n?/,
  eve = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/;
function zo(e, t, r) {
  let o = e;
  e = nA(e);
  let i = e.match(aP);
  if (!i) return { frontmatter: {}, content: o };
  let a = i[1] || "",
    s = e.slice(i[0].length),
    l = (p) => p,
    u = {},
    f,
    d;
  if (r?.quoteLossyValues) {
    let p = e.match(eve),
      m = p?.[1] ?? "";
    if (a.trim() !== "" || m.trim() !== "") {
      if (p === null || m.trim() !== a.trim())
        d =
          'the closing --- is ambiguous (a value containing "---"?) \u2014 part of the block may have read as body';
    }
  }
  let c, h;
  if (r?.quoteLossyValues) {
    let p = z(a);
    if (p.unprovableKeys.length > 0)
      c = `an inline '#' in [${p.unprovableKeys.join(", ")}] cannot be preserved by a rewrite`;
    if (p.text !== null)
      try {
        let m = l(E(zH(p.text))),
          x = d ?? c ?? w(a, m);
        return {
          frontmatter: m,
          content: s,
          ...(x !== void 0 && { rewriteHazard: x }),
        };
      } catch {
        h = `quoting [${p.quotedKeys.join(", ")}] broke the document; a rewrite from the plain parse would drop their inline '#' content`;
        let m = t ? ` in ${t}` : "";
        n(`quoteLossyValues: ${h}${m}`, { level: "warn" });
      }
  }
  let g = DEn(a);
  if (g.ok) u = l(E(g.value));
  else {
    f = g.error;
    let p = t ? ` in ${t}` : "";
    n(`Failed to parse YAML frontmatter${p}: ${f}`, { level: "warn" });
  }
  let S = !r?.quoteLossyValues
    ? void 0
    : f !== void 0
      ? (d ?? `the frontmatter failed to parse: ${f}`)
      : (d ?? c ?? h ?? w(a, u));
  return {
    frontmatter: u,
    content: s,
    ...(f !== void 0 && { parseError: f }),
    ...(S !== void 0 && { rewriteHazard: S }),
  };
}
function DEn(e) {
  try {
    return { ok: !0, value: zH(e) };
  } catch {
    try {
      let t = O(e).replace(/^\t+/gm, (r) => "  ".repeat(r.length));
      return { ok: !0, value: zH(t) };
    } catch (t) {
      return { ok: !1, error: t instanceof Error ? t.message : String(t) };
    }
  }
}
function w(e, t) {
  if (e.trim() !== "" && Object.keys(t).length === 0)
    return "the frontmatter has no keys (a sequence, scalar, or comment-only document)";
  return;
}
function E(e) {
  if (e && typeof e === "object" && !Array.isArray(e)) return e;
  return {};
}
function Dzt(e) {
  return A(e, { results: M, bytes: I });
}
function A(e, t) {
  if (Array.isArray(e)) return e.flatMap((s) => A(s, t));
  if (typeof e !== "string") return [];
  let r = [],
    o = "",
    i = 0;
  for (let s = 0; s < e.length; s++) {
    let l = e[s];
    if (l === "{") (i++, (o += l));
    else if (l === "}") (i--, (o += l));
    else if (l === "," && i === 0) {
      let u = o.trim();
      if (u) r.push(u);
      o = "";
    } else o += l;
  }
  let a = o.trim();
  if (a) r.push(a);
  return r.filter((s) => s.length > 0).flatMap((s) => N(s, t));
}
var M = 1000,
  I = 4194304;
function N(e, t) {
  if (!e.includes("{")) return [e];
  let r = [],
    o = [e];
  for (let i = o.pop(); i !== void 0; i = o.pop()) {
    let a = i.match(/^([^{]*)\{([^}]+)\}(.*)$/);
    if (!a) {
      r.push(i);
      continue;
    }
    let s = a[1] || "",
      l = a[2] || "",
      u = a[3] || "",
      f = l.split(",").map((c) => c.trim());
    t.bytes -= i.length;
    let d = r.length + o.length + f.length;
    if (t.bytes < 0 || d > t.results || d * e.length > t.bytes)
      return (
        n(
          `Brace pattern expansion exceeds the budget; using it unexpanded: ${oe(e, 256)}`,
          { level: "warn" },
        ),
        [e]
      );
    for (let c = f.length - 1; c >= 0; c--) o.push(s + (f[c] ?? "") + u);
  }
  return ((t.results -= r.length), (t.bytes -= r.length * e.length), r);
}
function Lzt(e) {
  if (e === void 0 || e === null) return;
  let t = typeof e === "number" ? e : tl(String(e));
  if (Number.isInteger(t) && t > 0) return t;
  return;
}
function Mzt(e) {
  let t = e.experimental;
  if (typeof t !== "object" || t === null) return;
  let r = Object.entries(t).find(([o]) => yEt(o) === "cachettl")?.[1];
  return Ghe.find((o) => o === r);
}
function q$(e, t, r) {
  if (e == null) return null;
  if (typeof e === "string") return e.trim() || null;
  if (typeof e === "number" || typeof e === "boolean") return String(e);
  let o = r ? `${r}:${t}` : (t ?? "unknown");
  return (
    n(`Description invalid for ${o} - omitting`, { level: "warn" }),
    null
  );
}
function Nzt(e) {
  let t = (r) =>
    r != null && typeof r === "object" && !Array.isArray(r)
      ? Object.keys(r)
      : [];
  return Y([...Object.keys(e), ...t(e.experimental)]);
}
function dJe(e) {
  return $G(e) ?? !1;
}
function $G(e) {
  if (typeof e === "boolean") return e;
  if (typeof e !== "string" && typeof e !== "number") return;
  let t = String(e);
  if (Ie(t)) return !0;
  if (po(t)) return !1;
  return;
}
var C = ["bash", "powershell"];
function Fzt(e, t) {
  if (e == null) return;
  let r = String(e).trim().toLowerCase();
  if (r === "") return;
  if (C.includes(r)) return r;
  n(
    `Frontmatter 'shell: ${e}' in ${t} is not recognized. Valid values: ${C.join(", ")}. Falling back to bash.`,
    { level: "warn" },
  );
  return;
}
export {
  tA,
  NG,
  NJ,
  qH,
  nA,
  qy,
  Ktr,
  DT,
  _Et,
  r$e,
  Woe,
  Xtr,
  zH,
  o$e,
  FG,
  jK,
  aP,
  eve,
  zo,
  DEn,
  Dzt,
  Lzt,
  Mzt,
  q$,
  Nzt,
  dJe,
  $G,
  Fzt,
};
