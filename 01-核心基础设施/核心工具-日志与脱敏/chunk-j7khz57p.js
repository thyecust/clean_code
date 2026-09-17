// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logError } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { jsonStringify, jsonParse, redactForDisplay, redactDeep, logForDebugging } from "./核心工具-日志与脱敏.38sny42z.js";
import { pluralize, truncateToCodePoints, toWellFormed } from "../核心工具-字符串与文本/string-utils.js";
import { QUOTE_HOMOGLYPHS, INVISIBLE_BLANKS, isDecisionSurfaceControl } from "../核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { getFeatureValue_CACHED_MAY_BE_STALE } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
function isHarborPermissionsEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_harbor_permissions", !1);
}
var J = "abcdefghijkmnopqrstuvwxyz",
  G = [
    "fuck",
    "shit",
    "cunt",
    "cock",
    "dick",
    "twat",
    "piss",
    "crap",
    "bitch",
    "whore",
    "ass",
    "tit",
    "cum",
    "fag",
    "dyke",
    "nig",
    "kike",
    "rape",
    "nazi",
    "damn",
    "poo",
    "pee",
    "wank",
    "anus",
  ];
function j(r) {
  let e = 2166136261;
  for (let t = 0; t < r.length; t++)
    ((e ^= r.charCodeAt(t)), (e = Math.imul(e, 16777619)));
  e = e >>> 0;
  let o = "";
  for (let t = 0; t < 5; t++) ((o += J[e % 25]), (e = Math.floor(e / 25)));
  return o;
}
function createProfanityFreeShortId(r) {
  let e = j(r);
  for (let o = 0; o < 10; o++) {
    if (!G.some((t) => e.includes(t))) return e;
    e = j(`${r}:${o}`);
  }
  return e;
}
var K = 3500,
  w = 2000,
  F = 1500,
  D = 15000,
  L = 30000;
function sanitizeAndTruncateText(r) {
  return T(d(r).replace(/\s+/g, " ").trim());
}
function T(r) {
  let e = Array.from(r);
  if (e.length <= K) return r;
  let o = e.length - w - F;
  return (
    e.slice(0, w).join("") +
    `
\u22EF ${o} ${pluralize(o, "code point")} elided \u22EF
` +
    e.slice(e.length - F).join("")
  );
}
function d(r) {
  return Array.from(toWellFormed(r), (e) => (isDecisionSurfaceControl(e.codePointAt(0) ?? 0) ? " " : e))
    .join("")
    .replace(QUOTE_HOMOGLYPHS, "\xB7")
    .replace(U, "\xB7")
    .replace(V, "\xB7")
    .replace(INVISIBLE_BLANKS, " ");
}
var U =
    /[\u2018\u2019\u201A\u201B\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02BF\u02C0\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05F3\u07F4\u07F5\u1FBD\u1FBF\u1FEF\u1FFD\u1FFE\u2032\u2035\u275B\u275C\u275F\uA78B\uA78C\uFF07\uFF40]/g,
  V = /[\u02C2\u02C3\uFE64\uFE65\uFF1C\uFF1E]/g;
function k(r) {
  return B(jsonStringify(r)).replace(/\s/g, " ");
}
function A(r, e, o) {
  let t = r,
    s = k(r);
  if (e.has(s)) {
    let i = s,
      a = o.get(i) ?? 2;
    ((t = `${r}#${a}`), (s = k(t)));
    while (e.has(s)) (a++, (t = `${r}#${a}`), (s = k(t)));
    o.set(i, a + 1);
  }
  return (e.add(s), t);
}
function C(r) {
  if (Array.isArray(r)) return r.map(C);
  if (r !== null && typeof r === "object") {
    let e = Object.create(null),
      o = new Set(),
      t = new Map();
    for (let [s, i] of Object.entries(r)) e[A(redactForDisplay(s), o, t)] = C(i);
    return e;
  }
  return r;
}
var W = 32000,
  q = 2000000;
function N(r) {
  if (r === null || typeof r !== "object") return !1;
  let e = q,
    o = [{ node: r, depth: 1 }];
  while (o.length > 0) {
    let t = o.pop(),
      { depth: s, node: i } = t;
    if (s >= W) return !0;
    if (typeof i.toJSON === "function") {
      if (((e -= 1), e < 0)) return !0;
      let l;
      try {
        l = i.toJSON();
      } catch {
        return !0;
      }
      if (l === null || typeof l !== "object") continue;
      i = l;
    }
    if (Array.isArray(i)) {
      if (((e -= i.length), e < 0)) return !0;
    }
    for (let l of Object.keys(i)) {
      if (((e -= 1), e < 0)) return !0;
      let p = i[l];
      if (p !== null && typeof p === "object")
        o.push({ node: p, depth: s + 1 });
    }
  }
  return !1;
}
function truncateForPreview(r) {
  try {
    if (r !== null && typeof r === "object" && !Array.isArray(r)) {
      let s = [],
        i = 0,
        a = [],
        l = new Set(),
        p = new Map();
      for (let f of Object.keys(r)) {
        let g,
          m,
          E = !1;
        try {
          if (((g = r[f]), N(g))) E = !0;
          else m = jsonStringify(g);
        } catch {
          E = !0;
        }
        if (m === void 0) {
          if (!E) continue;
          let _ = A(redactForDisplay(f), l, p);
          logForDebugging(
            "truncateForPreview: field serialization threw (depth) \u2014 rendering a loud unserializable marker",
            { level: "error" },
          );
          let y = d(jsonStringify(_)).replace(/\s+/g, " "),
            S = truncateToCodePoints(y, 50),
            O = S.length < y.length ? S + "\u2026" : S;
          if (i >= D) {
            a.push(O);
            continue;
          }
          let R = `${O}: (value unserializable)`;
          ((i += Array.from(R).length), s.push(R));
          continue;
        }
        let c = A(redactForDisplay(f), l, p);
        if (i >= D) {
          let _ = d(jsonStringify(c)).replace(/\s+/g, " "),
            y = truncateToCodePoints(_, 50);
          a.push(y.length < _.length ? y + "\u2026" : y);
          continue;
        }
        let u,
          I = !1;
        try {
          u = jsonStringify(C(redactDeep({ [f]: jsonParse(m) }, redactForDisplay)[f]));
        } catch {
          I = !0;
        }
        if (u === void 0)
          if (I)
            logForDebugging(
              `truncateForPreview: redaction round-trip threw for field ${jsonStringify(c)} \u2014 rendering unredacted`,
              { level: "error" },
            );
          else
            (logForDebugging(
              `truncateForPreview: redaction round-trip yielded no text for field ${jsonStringify(c)} \u2014 rendering unredacted`,
              { level: "error" },
            ),
              logError(
                Error(
                  "truncateForPreview: redaction round-trip yielded no text for a field \u2014 rendering unredacted",
                ),
              ));
        let M = u === void 0 ? m : u,
          v = `${B(jsonStringify(c))}: ${B(M)}`;
        ((i += Array.from(v).length), s.push(v));
      }
      let P = "";
      if (a.length > 0) {
        let g = Math.floor(L / 10);
        if (a.length <= g) {
          let m = Math.max(8, Math.floor(L / a.length) - 2),
            E = a.map((c) => {
              let u = truncateToCodePoints(c, m);
              return u.length < c.length ? u + "\u2026" : u;
            });
          P = `
\u22EF ${a.length} ${pluralize(a.length, "field")} elided: ${E.join(", ")} \u22EF
`;
        } else
          P = `
\u22EF ${a.length} ${pluralize(a.length, "field")} elided (count exceeds the ${g}-name bound \u2014 refuse) \u22EF
`;
      }
      return `{ ${s.join(", ")} }${P}`;
    }
    let e;
    try {
      if (N(r))
        return (
          logForDebugging(
            "truncateForPreview: non-object input exceeds the serialization depth probe \u2014 rendering a loud unserializable marker",
            { level: "error" },
          ),
          "(value unserializable)"
        );
      e = jsonStringify(r);
    } catch {
      return (
        logForDebugging(
          "truncateForPreview: non-object input serialization threw \u2014 rendering a loud unserializable marker",
          { level: "error" },
        ),
        "(value unserializable)"
      );
    }
    if (e === void 0) return "(unserializable)";
    let o,
      t = !1;
    try {
      o = jsonStringify(C(redactDeep(jsonParse(e), redactForDisplay)));
    } catch {
      t = !0;
    }
    if (o === void 0) {
      if (t)
        logForDebugging(
          "truncateForPreview: non-object redaction round-trip threw \u2014 rendering unredacted",
          { level: "error" },
        );
      else
        (logForDebugging(
          "truncateForPreview: non-object redaction round-trip failed \u2014 rendering unredacted",
          { level: "error" },
        ),
          logError(
            Error(
              "truncateForPreview: non-object redaction round-trip failed \u2014 rendering unredacted",
            ),
          ));
      o = e;
    }
    return T(d(o).replace(/\s{2,}/g, " "));
  } catch {
    return "(unserializable)";
  }
}
function B(r) {
  if (r.length <= 1e5) return T(d(r).replace(/\s{2,}/g, " "));
  let e = 0;
  for (let a of r) e++;
  let o = d(truncateToCodePoints(r.slice(0, w * 2 + 1), w)).replace(/\s{2,}/g, " "),
    t = Array.from(toWellFormed(r.slice(-(F * 2 + 1)))),
    s = d(t.slice(-F).join("")).replace(/\s{2,}/g, " "),
    i = e - w - F;
  return (
    o +
    `
\u22EF ${i} ${pluralize(i, "code point")} elided \u22EF
` +
    s
  );
}
function hasExperimentalCapability(r, e) {
  return !!r?.experimental?.[e];
}
function findChannelPermissionServers(r, e, o) {
  return r.filter(
    (t) =>
      t.type === "connected" &&
      e(t.name) &&
      hasExperimentalCapability(t.capabilities, "claude/channel") &&
      hasExperimentalCapability(t.capabilities, "claude/channel/permission") &&
      o(t.name) &&
      t.protocolEra !== "modern",
  );
}
function createChannelPermissionRequestRegistry(r) {
  let e = new Map();
  return {
    isServerRegistered: r,
    onResponse(o, t) {
      let s = o.toLowerCase();
      return (
        e.set(s, t),
        () => {
          e.delete(s);
        }
      );
    },
    resolve(o, t, s) {
      let i = o.toLowerCase(),
        a = e.get(i);
      if (!a) return !1;
      return (e.delete(i), a({ behavior: t, fromServer: s }), !0);
    },
  };
}
export { isHarborPermissionsEnabled, createProfanityFreeShortId, sanitizeAndTruncateText, truncateForPreview, hasExperimentalCapability, findChannelPermissionServers, createChannelPermissionRequestRegistry };
