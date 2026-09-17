// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ub } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { ne, HCe, vTn, ker, PCe } from "./chunk-rr78st95.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { ARTIFACT_TOOL_NAME as _r, PR_REVIEW_SECURITY_WALL as P5, ArtifactInputError as Oe, ARTIFACT_VERSION_SAFE_RE as L6, ARTIFACT_DELETED_NOTE_TAG as oie, ARTIFACT_DELETED_NOTE_RE as Nkn, uuidSlugFromUrl as Fi, canonicalArtifactTargetFor as ls, sanitizeArtifactTitle as e_ } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { runBundledSkillSessionResets as _fe } from "../Skills技能/chunk-1zy5c8mf.js";
import { Tn, tt } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Js } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { ot } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { Cr, yw, linkPathToSlug as xCe, unlinkPath as Fj, retainPathLinks as uYe } from "./chunk-01ymf0ar.js";
import { Tce, $ee, Dv } from "../../01-核心基础设施/共享小工具-未细化/chunk-1rpyafm2.js";
import { nze, KWn } from "./chunk-p1dkvpxj.js";
var E = 3,
  I = 1024,
  P = new Set(Object.values(P5));
function h(e) {
  return typeof e === "string" ? e.slice(0, I) : "";
}
function L(e) {
  if (typeof e !== "object" || e === null) return "publish\x00\x00\x00";
  let r = "action" in e ? h(e.action) : "",
    t = "file_path" in e ? h(e.file_path) : "",
    n = "url" in e ? h(e.url) : "",
    a = "thread_id" in e ? h(e.thread_id) : "";
  return `${r || "publish"}\x00${t}\x00${n}\x00${a}`;
}
function S(e, r, t) {
  let n = ne().rejectBreaker,
    a = L(e),
    s = n.get(a),
    l = s !== void 0 && s.reason === r && s.fingerprint === t ? s.count + 1 : 1;
  if ((n.set(a, { count: l, reason: r, fingerprint: t }), l === E))
    i("tengu_artifact_reject_breaker", { reason: Ub(r) });
  return l >= E;
}
var T = `IMPORTANT: Artifact calls for this target have now been rejected ${E} or more times in this session for the same reason.`,
  _ = `${T} Do not send the same call again: either make the specific change the error describes, or stop calling Artifact for this target and tell the user what is failing and why.`,
  b = `${T} Stop calling Artifact for this target and tell the user the artifact could not be published and why \u2014 do not try to work around this refusal.`,
  Oon = Math.max(_.length, b.length) + 2;
function O(e) {
  return P.has(e) ? b : _;
}
function xut(e) {
  for (let r of [_, b])
    if (
      e.startsWith(`${r}

`)
    )
      return e.slice(r.length + 2);
  return e;
}
var N = "live_edit_conflict";
function j(e, r, t) {
  let n = xut(r),
    a = t === N ? Tn(n + U(e, n)) : Tn(n);
  return S(e, t, a)
    ? `${O(t)}

${n}`
    : n;
}
function U(e, r) {
  if (
    typeof e !== "object" ||
    e === null ||
    !("action" in e) ||
    e.action !== "live-edit" ||
    !("ops" in e) ||
    !Array.isArray(e.ops)
  )
    return "";
  let t = /\bops\[(\d+)\]/.exec(r),
    n = t === null ? e.ops : [e.ops[Number.parseInt(t[1], 10)]],
    a = new Set();
  for (let s of n) {
    if (typeof s !== "object" || s === null) continue;
    for (let l of ["target", "before", "after", "parent"])
      if (l in s) {
        let o = h(s[l]);
        if (o !== "") a.add(o);
      }
  }
  return a.size === 0 ? "" : `\x00${[...a].sort().join("\x00")}`;
}
var k = "schema";
function D(e) {
  if (e === void 0) return "";
  return e.issues
    .map((r) => {
      let t =
        r.code === "unrecognized_keys" ? [...r.keys].sort().join(",") : "";
      return `${r.code}:${r.path.map(String).join(".")}:${t}`;
    })
    .sort()
    .join("|");
}
function w(e) {
  return KWn(e.toolUseId) || nze(e.toolUseId);
}
function bjn(e) {
  let { validationErrorSteer: r, validateInput: t, call: n } = e,
    a = {
      validationErrorSteer: (s, l) => M(s, l, r?.(s, l) ?? null),
      ...(t !== void 0 && { validateInput: B(t) }),
      call: V(n),
    };
  return Object.defineProperties(
    Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)),
    Object.getOwnPropertyDescriptors(a),
  );
}
function M(e, r, t) {
  let s = [S(e, k, D(r)) ? O(k) : null, t].filter((l) => l !== null).join(`

`);
  return s === "" ? null : s;
}
function B(e) {
  return async (r, t) => {
    let n = await e(r, t);
    if (n.result || w(t)) return n;
    return { ...n, message: j(r, n.message, `ec_${n.errorCode}`) };
  };
}
function V(e) {
  return async (r, t, ...n) => {
    if (w(t)) return e(r, t, ...n);
    let a;
    try {
      a = await e(r, t, ...n);
    } catch (s) {
      if (s instanceof Oe)
        s.message = j(r, s.message, s.reasonCode ?? "unknown");
      throw s;
    }
    return (z(), a);
  };
}
function z() {
  ne().rejectBreaker.clear();
}
class C {
  order = [];
  touch(e) {
    this.order = [e, ...this.order.filter((r) => r !== e)];
  }
  forget(e) {
    this.order = this.order.filter((r) => r !== e);
  }
  refs() {
    return this.order.map((e) => ({ slug: e }));
  }
}
function NGe(e, r) {
  let t = new Set(),
    n = new Set(),
    a = new Set();
  for (let u of e) {
    if (u.type !== "assistant" || !Array.isArray(u.message.content)) continue;
    for (let c of u.message.content)
      if (c.type === "tool_use") {
        if (c.name === _r) t.add(c.id);
        else if (c.name === Cr) n.add(c.id);
        else if (c.name === tt) a.add(c.id);
      }
  }
  let s = {},
    l = {},
    o = {},
    p = new C();
  for (let u of e) {
    if (u.type !== "user") continue;
    if (u.isMeta === !0 && typeof u.message.content === "string") {
      let c = Nkn.exec(u.message.content)?.[1],
        f = c !== void 0 ? Fi(c) : null;
      if (f !== null)
        v(f, {
          frameUrls: s,
          artifactReadVersions: l,
          target: p,
          createdFromType: o,
          applyLinks: r?.applyLinks !== !1,
        });
      continue;
    }
    if (!Array.isArray(u.message.content)) continue;
    for (let c of u.message.content) {
      if (c.type !== "tool_result" || !c.tool_use_id) continue;
      let f = t.has(c.tool_use_id);
      if (f) {
        let d = c.is_error === !0 ? W(c.content) : null;
        if (d !== null) {
          v(d, {
            frameUrls: s,
            artifactReadVersions: l,
            target: p,
            createdFromType: o,
            applyLinks: r?.applyLinks !== !1,
          });
          continue;
        }
        H(u.toolUseResult, u.timestamp, s, l, p, o, r?.applyLinks !== !1);
      }
      if (f || n.has(c.tool_use_id)) X(u.toolUseResult, l, p);
      else if (a.has(c.tool_use_id)) Z(u.toolUseResult, l);
    }
  }
  return {
    frameUrls: s,
    artifactReadVersions: l,
    artifactRefs: p.refs(),
    createdFromType: o,
  };
}
var G = /^(?:<tool_use_error>)?(?:Error: )?/,
  K = new RegExp(`^<${oie} url="([^"]+)"/>`);
function W(e) {
  let r =
      typeof e === "string"
        ? e
        : Array.isArray(e)
          ? e.map((a) =>
              typeof a === "object" &&
              a !== null &&
              "text" in a &&
              typeof a.text === "string"
                ? a.text
                : "",
            ).join(`
`)
          : "",
    t = xut(r.replace(G, "")),
    n = K.exec(t)?.[1];
  return n !== void 0 ? Fi(n) : null;
}
function wjn(e) {
  let r = new Map();
  for (let n of e) {
    if (n.type !== "assistant" || !Array.isArray(n.message.content)) continue;
    for (let a of n.message.content) {
      if (a.type !== "tool_use") continue;
      let s = Js(a.name)?.serverName;
      if (s !== void 0) r.set(a.id, s);
    }
  }
  let t = new Set();
  for (let n of e) {
    if (n.type !== "user" || !Array.isArray(n.message.content)) continue;
    for (let a of n.message.content) {
      if (a.type !== "tool_result" || a.is_error === !0 || !a.tool_use_id)
        continue;
      let s = r.get(a.tool_use_id);
      if (s !== void 0) t.add(s);
    }
  }
  return t;
}
function v(e, r) {
  for (let [t, n] of Object.entries(r.frameUrls))
    if (Fi(n.url) === e) {
      if ((delete r.frameUrls[t], r.applyLinks && !t.includes("\x00")))
        Fj(ot(t));
    }
  for (let [t, n] of Object.entries(r.createdFromType))
    if (n.slug === e) delete r.createdFromType[t];
  (delete r.artifactReadVersions[e], r.target.forget(e));
}
function H(e, r, t, n, a, s, l) {
  let o = e,
    p = e?.artifact_delete;
  if (p !== void 0) {
    let f = p?.url,
      d = typeof f === "string" ? Fi(f) : null;
    if (d !== null)
      v(d, {
        frameUrls: t,
        artifactReadVersions: n,
        target: a,
        createdFromType: s,
        applyLinks: l,
      });
    return;
  }
  if (e?.created_from_type === !0) {
    let f = typeof o?.url === "string" ? Fi(o.url) : null,
      d = e.type?.url,
      m = typeof d === "string" ? Fi(d) : null;
    if (typeof o?.path !== "string") {
      if (f !== null && typeof o?.url === "string") {
        let R = `${Tce}${f}`,
          y = typeof o.title === "string" ? e_(o.title) : null;
        if (
          (delete t[R],
          (t[R] = {
            url: ls(o.url, o.url),
            updatedAt: Date.parse(r) || 0,
            ...(y !== null && { title: y }),
          }),
          typeof o.version === "string")
        )
          A(n, f, o.version);
        a.touch(f);
      }
      return;
    }
    if (f !== null && m !== null && !o.path.includes("\x00"))
      s[o.path] = { slug: f, typeSlug: m };
  }
  let u = typeof o?.url === "string" ? Fi(o.url) : null;
  if (e?.opened === !0) {
    if (
      typeof o?.url === "string" &&
      u !== null &&
      !Dv(t).some(([, f]) => Fi(f.url) === u)
    ) {
      let f = `${$ee}${u}`,
        d = (typeof o.title === "string" ? yw(o.title) : null) ?? t[f]?.title;
      (delete t[f],
        (t[f] = {
          url: ls(o.url, o.url),
          updatedAt: Date.parse(r) || 0,
          ...(d !== void 0 && { title: d }),
        }));
    }
    return;
  }
  if (
    typeof o?.url !== "string" ||
    u === null ||
    typeof o.path !== "string" ||
    o.path.includes("\x00")
  )
    return;
  for (let [f, d] of Object.entries(t))
    if (f !== o.path && Fi(d.url) === u) {
      if ((delete t[f], l)) Fj(ot(f));
    }
  if (l) xCe(ot(o.path), u);
  delete t[o.path];
  let c = typeof o.title === "string" ? e_(o.title) : null;
  if (
    ((t[o.path] = {
      url: o.url,
      updatedAt: Date.parse(r) || 0,
      ...(c !== null && { title: c }),
      ...(o.capabilities != null &&
        typeof o.capabilities === "object" && { capabilities: o.capabilities }),
    }),
    typeof o.version === "string")
  )
    A(n, u, o.version);
  a.touch(u);
}
function Tjn(e, r, t) {
  let n = new Set();
  for (let s of e)
    if (s.type === "assistant" && s.message.id) n.add(s.message.id);
  if ((ker(n), vTn(), !t))
    return { artifactReadVersions: {}, artifactReadObservers: {} };
  let a = NGe(e, { applyLinks: !1 }).artifactReadVersions;
  return { artifactReadVersions: a, artifactReadObservers: F(a, r) };
}
function F(e, r) {
  return r
    ? {}
    : Object.fromEntries(Object.keys(e).map((t) => [t, { main: "" }]));
}
function Y(e, r) {
  let t = Object.keys(e);
  return (
    t.length === Object.keys(r).length &&
    t.every((n) => {
      if (!(n in r)) return !1;
      let [a, s] = [e[n] ?? {}, r[n] ?? {}],
        l = Object.keys(a);
      return (
        l.length === Object.keys(s).length && l.every((o) => a[o] === s[o])
      );
    })
  );
}
function A(e, r, t) {
  if (L6.test(t)) e[r] = t;
}
function X(e, r, t) {
  let n = e?.artifactRead;
  if (
    !n ||
    typeof n.slug !== "string" ||
    Fi(`https://claude.ai/code/artifact/${n.slug}`) !== n.slug
  )
    return;
  if (n.seeded !== !1)
    if (typeof n.ver === "string") A(r, n.slug, n.ver);
    else delete r[n.slug];
  t.touch(n.slug);
}
function Z(e, r) {
  let t = e?.artifactRead;
  if (
    t &&
    typeof t.slug === "string" &&
    typeof t.ver === "string" &&
    Fi(`https://claude.ai/code/artifact/${t.slug}`) === t.slug
  )
    A(r, t.slug, t.ver);
}
function ebe(e, r, t) {
  let { legacyConflict: n, continuesConversation: a = !1 } = t,
    { frameUrls: s, artifactReadVersions: l, artifactRefs: o } = r;
  (_fe(), PCe({ continuesConversation: a }));
  let p = ne().createdFromType;
  for (let [c, f] of Object.entries(r.createdFromType)) p.set(c, f);
  if (!a) HCe();
  uYe(new Set(Object.keys(s).map((c) => ot(c))));
  let u = F(l, n);
  e((c) => {
    let f = Object.keys(c.frameUrls),
      d = Object.keys(s),
      m = Object.keys(l),
      R = c.artifactReadVersions ?? {},
      y = c.artifactRefs ?? [];
    if (
      f.length === d.length &&
      f.every(
        (g) =>
          c.frameUrls[g]?.url === s[g]?.url &&
          c.frameUrls[g]?.updatedAt === s[g]?.updatedAt,
      ) &&
      m.length === Object.keys(R).length &&
      m.every((g) => R[g] === l[g]) &&
      y.length === o.length &&
      y.every((g, x) => g.slug === o[x]?.slug && g.pin === void 0) &&
      c.frameNavPath == null &&
      !c.frameExpanded &&
      Y(c.artifactReadObservers ?? {}, u)
    )
      return c;
    return {
      ...c,
      frameUrls: s,
      artifactReadVersions: l,
      artifactReadObservers: u,
      artifactRefs: o,
      frameNavPath: null,
      frameExpanded: !1,
    };
  });
}
export { Oon, xut, bjn, NGe, wjn, Tjn, ebe };
