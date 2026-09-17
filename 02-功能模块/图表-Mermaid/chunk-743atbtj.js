// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
var MERMAID_RUNTIME_BEGIN_PREFIX = "<!--claude-mermaid-runtime-begin:",
  MERMAID_RUNTIME_END = "<!--claude-mermaid-runtime-end-->",
  HLJS_RUNTIME_BEGIN_PREFIX = "<!--claude-hljs-runtime-begin:",
  HLJS_RUNTIME_END = "<!--claude-hljs-runtime-end-->",
  CHART_RUNTIME_BEGIN = "<!-- chart-runtime -->",
  CHART_RUNTIME_END = "<!-- /chart-runtime -->";
var MERMAID_RUNTIME_URL_PATH = "/_runtime/mermaid-11.16.1.min.js",
  MERMAID_RUNTIME_SCRIPT_TAG = '<script src="/_runtime/mermaid-11.16.1.min.js">',
  MERMAID_RUNTIME_SRC_ATTR_PATTERN =
    ' src="/_runtime/mermaid-[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.min\\.js"',
  FRAME_RUNTIME_BEGIN = "<!-- frame-runtime -->",
  FRAME_RUNTIME_END = "<!-- /frame-runtime -->";
function hasRuntimeSentinel(t) {
  return (
    t.includes("<!--claude-mermaid-runtime-begin:") ||
    t.includes("<!--claude-mermaid-runtime-end-->") ||
    t.includes("<!--claude-hljs-runtime-begin:") ||
    t.includes("<!--claude-hljs-runtime-end-->") ||
    t.includes("<!-- chart-runtime -->") ||
    t.includes("<!-- /chart-runtime -->")
  );
}
function findBundleSafetyIssue(t) {
  if (/<\/script/i.test(t)) return "bundle contains </script";
  if (hasCommentAndScriptTag(t))
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
var TAG_NAME_TERMINATOR_CHARS = new Set([
  " ",
  "\t",
  `
`,
  "\f",
  "\r",
  "/",
  ">",
]);
function trimAsciiWhitespace(t) {
  let e = 0,
    n = t.length;
  while (e < n && s(t.charCodeAt(e))) e++;
  while (n > e && s(t.charCodeAt(n - 1))) n--;
  return e === 0 && n === t.length ? t : t.slice(e, n);
}
function s(t) {
  return t === 32 || t === 9 || t === 10 || t === 12 || t === 13;
}
function removeRanges(t, e) {
  if (!e.length) return t;
  let n = "",
    r = 0;
  for (let [i, o] of e) ((n += t.slice(r, i)), (r = o));
  return n + t.slice(r);
}
function hasCommentAndScriptTag(t) {
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
function findScriptCloseTagEnd(t) {
  let e = u(t, E);
  if (!e || hasCommentAndScriptTag(t.slice(0, e.data))) return -1;
  return e.after;
}
function findStyleCloseTag(t) {
  return u(t, m);
}
var l = 16,
  a = ' data-id="',
  DATA_ID_ATTRIBUTE_LENGTH = a.length + l + 1,
  DATA_ID_VALUE_PATTERN = "(?!-)(?:(?!--)[A-Za-z0-9_-]){16}",
  _ = new RegExp(`^${DATA_ID_VALUE_PATTERN}$`),
  DATA_ID_ATTRIBUTE_PATTERN = `${a}${DATA_ID_VALUE_PATTERN}"`;
function matchDataIdAttribute(t, e) {
  if (!t.startsWith(a, e)) return 0;
  let n = e + a.length,
    r = n + l;
  return t.charCodeAt(r) === 34 && _.test(t.slice(n, r)) ? DATA_ID_ATTRIBUTE_LENGTH : 0;
}
function p(t, e, n) {
  if (t.startsWith(n, e)) return n.length;
  let r = n.length - 1;
  if (!t.startsWith(n.slice(0, r), e)) return 0;
  let i = matchDataIdAttribute(t, e + r);
  return i && t.charCodeAt(e + r + i) === 62 ? r + i + 1 : 0;
}
function matchScriptOpenTag(t, e) {
  return p(t, e, "<script>");
}
function matchStyleOpenTag(t, e) {
  return p(t, e, "<style>");
}
var c = new RegExp(
  '<script src="/_runtime/mermaid-[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.min\\.js"',
  "y",
);
function matchMermaidRuntimeScriptTag(t, e) {
  c.lastIndex = e;
  let n = c.exec(t);
  if (n === null) return null;
  let r = e + n[0].length;
  if (t.charCodeAt(r) === 62) return { len: r + 1 - e, annotated: !1 };
  let i = matchDataIdAttribute(t, r);
  return i && t.charCodeAt(r + i) === 62
    ? { len: r + i + 1 - e, annotated: !0 }
    : null;
}
function countNestedScriptTags(t) {
  let e = trimAsciiWhitespace(t);
  if (!e.length) return -1;
  let n = 0;
  while (e.length) {
    let r = matchScriptOpenTag(e, 0);
    if (!r) return -1;
    if (r > 8) n++;
    let i = findScriptCloseTagEnd(e.slice(r));
    if (i < 0) return -1;
    e = trimAsciiWhitespace(e.slice(r + i));
  }
  return n;
}
function findTagEnd(t, e) {
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
import { extname } from "path";
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
function getContentTypeForPath(t) {
  return g[f(extname(t))];
}
function f(t) {
  return t.replace(/[A-Z]/g, (e) => e.toLowerCase());
}
function normalizeContentType(t) {
  let e = t.indexOf(";");
  return f(trimAsciiWhitespace(e >= 0 ? t.slice(0, e) : t));
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
function isRenderableOrExecutableContentType(t) {
  let e = normalizeContentType(t);
  return !x.has(e) && !d.has(e);
}
var I = /[\u2028\u2029\p{Cf}\p{Default_Ignorable_Code_Point}]/u;
function sanitizeInvisibleCharacters(t) {
  return Array.from(t, (e) => {
    let n = e.codePointAt(0) ?? 0;
    return n <= 31 || (n >= 127 && n <= 159) || I.test(e) ? " " : e;
  }).join("");
}
var WORKSHOP_MARKDOWN_EXTENSION = ".workshop.md";
function isWorkshopMarkdownFile(t) {
  return t.endsWith(WORKSHOP_MARKDOWN_EXTENSION);
}
function isWorkshopHtmlFile(t) {
  return t.endsWith(".workshop.html");
}
function isWorkshopFile(t) {
  return isWorkshopHtmlFile(t) || isWorkshopMarkdownFile(t);
}
var MARKUP_CONTENT_TYPES = new Set([
    "text/html",
    "application/xhtml+xml",
    "application/xml",
    "text/xml",
    "image/svg+xml",
  ]),
  EXECUTABLE_CONTENT_TYPES = new Set([
    "text/javascript",
    "application/javascript",
    "application/wasm",
  ]);
export {
  MERMAID_RUNTIME_BEGIN_PREFIX,
  MERMAID_RUNTIME_END,
  HLJS_RUNTIME_BEGIN_PREFIX,
  HLJS_RUNTIME_END,
  CHART_RUNTIME_BEGIN,
  CHART_RUNTIME_END,
  MERMAID_RUNTIME_URL_PATH,
  MERMAID_RUNTIME_SCRIPT_TAG,
  MERMAID_RUNTIME_SRC_ATTR_PATTERN,
  FRAME_RUNTIME_BEGIN,
  FRAME_RUNTIME_END,
  hasRuntimeSentinel,
  findBundleSafetyIssue,
  TAG_NAME_TERMINATOR_CHARS,
  trimAsciiWhitespace,
  removeRanges,
  hasCommentAndScriptTag,
  findScriptCloseTagEnd,
  findStyleCloseTag,
  DATA_ID_ATTRIBUTE_LENGTH,
  DATA_ID_VALUE_PATTERN,
  DATA_ID_ATTRIBUTE_PATTERN,
  matchDataIdAttribute,
  matchScriptOpenTag,
  matchStyleOpenTag,
  matchMermaidRuntimeScriptTag,
  countNestedScriptTags,
  findTagEnd,
  getContentTypeForPath,
  normalizeContentType,
  isRenderableOrExecutableContentType,
  sanitizeInvisibleCharacters,
  WORKSHOP_MARKDOWN_EXTENSION,
  isWorkshopMarkdownFile,
  isWorkshopHtmlFile,
  isWorkshopFile,
  MARKUP_CONTENT_TYPES,
  EXECUTABLE_CONTENT_TYPES,
};
