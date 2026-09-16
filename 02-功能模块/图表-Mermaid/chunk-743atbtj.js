// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
var yme = "<!--claude-mermaid-runtime-begin:",
  hAn = "<!--claude-mermaid-runtime-end-->",
  d4t = "<!--claude-hljs-runtime-begin:",
  _An = "<!--claude-hljs-runtime-end-->",
  QEt = "<!-- chart-runtime -->",
  p4t = "<!-- /chart-runtime -->";
var b$e = "/_runtime/mermaid-11.16.1.min.js",
  Pnr = '<script src="/_runtime/mermaid-11.16.1.min.js">',
  Onr =
    ' src="/_runtime/mermaid-[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.min\\.js"',
  VG = "<!-- frame-runtime -->",
  YK = "<!-- /frame-runtime -->";
function Dnr(t) {
  return (
    t.includes("<!--claude-mermaid-runtime-begin:") ||
    t.includes("<!--claude-mermaid-runtime-end-->") ||
    t.includes("<!--claude-hljs-runtime-begin:") ||
    t.includes("<!--claude-hljs-runtime-end-->") ||
    t.includes("<!-- chart-runtime -->") ||
    t.includes("<!-- /chart-runtime -->")
  );
}
function bve(t) {
  if (/<\/script/i.test(t)) return "bundle contains </script";
  if (m4t(t))
    return "bundle contains <!-- together with <script (double-escaped state)";
  if (/<base\s+href="\/_f\//i.test(t))
    return "bundle matches the stale /_f/ base-tag strip regex";
  if (/\sdata-frame-runtime="/i.test(t))
    return "bundle matches the stale data-frame-runtime strip regex";
  if (
    t.includes("<!--claude-mermaid-runtime-begin:") ||
    t.includes("<!--claude-mermaid-runtime-end-->")
  )
    return "bundle contains a mermaid runtime sentinel";
  if (
    t.includes("<!--claude-hljs-runtime-begin:") ||
    t.includes("<!--claude-hljs-runtime-end-->")
  )
    return "bundle contains an hljs runtime sentinel";
  if (
    t.includes("<!-- chart-runtime -->") ||
    t.includes("<!-- /chart-runtime -->")
  )
    return "bundle contains the chart-runtime sentinel";
  if (
    t.includes("<!-- frame-runtime -->") ||
    t.includes("<!-- /frame-runtime -->")
  )
    return "bundle contains a frame-runtime serve sentinel";
  return null;
}
var f4t = new Set([
  " ",
  "\t",
  `
`,
  "\f",
  "\r",
  "/",
  ">",
]);
function BN(t) {
  let e = 0,
    n = t.length;
  while (e < n && s(t.charCodeAt(e))) e++;
  while (n > e && s(t.charCodeAt(n - 1))) n--;
  return e === 0 && n === t.length ? t : t.slice(e, n);
}
function s(t) {
  return t === 32 || t === 9 || t === 10 || t === 12 || t === 13;
}
function ZEt(t, e) {
  if (!e.length) return t;
  let n = "",
    r = 0;
  for (let [i, o] of e) ((n += t.slice(r, i)), (r = o));
  return n + t.slice(r);
}
function m4t(t) {
  return t.includes("<!--") && /<script/i.test(t);
}
var E = /<\/script(?=[\t\n\f\r />])/i,
  m = /<\/style(?=[\t\n\f\r />])/i;
function u(t, e) {
  let n = t.match(e);
  if (!n) return null;
  let r = n.index ?? 0,
    i = r + n[0].length,
    o = t.indexOf(">", i);
  if (o === -1 || /['"]/.test(t.slice(i, o))) return null;
  return { data: r, after: o + 1 };
}
function yAn(t) {
  let e = u(t, E);
  if (!e || m4t(t.slice(0, e.data))) return -1;
  return e.after;
}
function Lnr(t) {
  return u(t, m);
}
var l = 16,
  a = ' data-id="',
  eAt = a.length + l + 1,
  OJe = "(?!-)(?:(?!--)[A-Za-z0-9_-]){16}",
  _ = new RegExp(`^${OJe}$`),
  tU = `${a}${OJe}"`;
function nse(t, e) {
  if (!t.startsWith(a, e)) return 0;
  let n = e + a.length,
    r = n + l;
  return t.charCodeAt(r) === 34 && _.test(t.slice(n, r)) ? eAt : 0;
}
function p(t, e, n) {
  if (t.startsWith(n, e)) return n.length;
  let r = n.length - 1;
  if (!t.startsWith(n.slice(0, r), e)) return 0;
  let i = nse(t, e + r);
  return i && t.charCodeAt(e + r + i) === 62 ? r + i + 1 : 0;
}
function tAt(t, e) {
  return p(t, e, "<script>");
}
function Mnr(t, e) {
  return p(t, e, "<style>");
}
var c = new RegExp(
  '<script src="/_runtime/mermaid-[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.min\\.js"',
  "y",
);
function Nnr(t, e) {
  c.lastIndex = e;
  let n = c.exec(t);
  if (n === null) return null;
  let r = e + n[0].length;
  if (t.charCodeAt(r) === 62) return { len: r + 1 - e, annotated: !1 };
  let i = nse(t, r);
  return i && t.charCodeAt(r + i) === 62
    ? { len: r + i + 1 - e, annotated: !0 }
    : null;
}
function DJe(t) {
  let e = BN(t);
  if (!e.length) return -1;
  let n = 0;
  while (e.length) {
    let r = tAt(e, 0);
    if (!r) return -1;
    if (r > 8) n++;
    let i = yAn(e.slice(r));
    if (i < 0) return -1;
    e = BN(e.slice(r + i));
  }
  return n;
}
function rse(t, e) {
  let n = 0,
    r = e;
  while (r < t.length) {
    let i = t.charCodeAt(r);
    if (n === 3) {
      if (i === 34 || i === 39) {
        let o = t.indexOf(i === 34 ? '"' : "'", r + 1);
        if (o < 0) return -1;
        ((r = o + 1), (n = 5));
        continue;
      }
      if (s(i)) {
        r++;
        continue;
      }
      if (i === 62) return r + 1;
      ((n = 4), r++);
      continue;
    }
    if (i === 62) return r + 1;
    if (s(i)) n = n === 1 || n === 2 ? 2 : 0;
    else if (i === 47 && n !== 4) n = 0;
    else if (i === 61 && (n === 1 || n === 2)) n = 3;
    else n = n === 4 ? 4 : 1;
    r++;
  }
  return -1;
}
import { extname as R } from "path";
var g = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".json": "application/json",
  ".map": "application/json",
  ".geojson": "application/json",
  ".webmanifest": "application/manifest+json",
  ".txt": "text/plain",
  ".md": "text/markdown",
  ".csv": "text/csv",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/vnd.microsoft.icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".pdf": "application/pdf",
  ".wasm": "application/wasm",
};
function GJ(t) {
  return g[f(R(t))];
}
function f(t) {
  return t.replace(/[A-Z]/g, (e) => e.toLowerCase());
}
function c6(t) {
  let e = t.indexOf(";");
  return f(BN(e >= 0 ? t.slice(0, e) : t));
}
var x = new Set([
    "text/markdown",
    "application/json",
    "application/manifest+json",
    "text/css",
    "text/plain",
    "text/csv",
  ]),
  d = new Set([
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "image/avif",
    "font/woff2",
    "font/woff",
    "font/ttf",
    "font/otf",
  ]);
function SAn(t) {
  let e = c6(t);
  return !x.has(e) && !d.has(e);
}
var I = /[\u2028\u2029\p{Cf}\p{Default_Ignorable_Code_Point}]/u;
function jN(t) {
  return Array.from(t, (e) => {
    let n = e.codePointAt(0) ?? 0;
    return n <= 31 || (n >= 127 && n <= 159) || I.test(e) ? " " : e;
  }).join("");
}
var g4t = ".workshop.md";
function bAn(t) {
  return t.endsWith(g4t);
}
function LJe(t) {
  return t.endsWith(".workshop.html");
}
function nAt(t) {
  return LJe(t) || bAn(t);
}
var ose = new Set([
    "text/html",
    "application/xhtml+xml",
    "application/xml",
    "text/xml",
    "image/svg+xml",
  ]),
  MJe = new Set([
    "text/javascript",
    "application/javascript",
    "application/wasm",
  ]);
export {
  yme,
  hAn,
  d4t,
  _An,
  QEt,
  p4t,
  b$e,
  Pnr,
  Onr,
  VG,
  YK,
  Dnr,
  bve,
  f4t,
  BN,
  ZEt,
  m4t,
  yAn,
  Lnr,
  eAt,
  OJe,
  tU,
  nse,
  tAt,
  Mnr,
  Nnr,
  DJe,
  rse,
  GJ,
  c6,
  SAn,
  jN,
  g4t,
  bAn,
  LJe,
  nAt,
  ose,
  MJe,
};
