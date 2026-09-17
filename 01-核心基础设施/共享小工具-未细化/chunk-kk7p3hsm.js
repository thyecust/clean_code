// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ANY_CONTROL_CHAR_REGEX } from "../核心工具-字符串与文本/string-utils.js";
import { An, jf } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { posix } from "path";
var INVISIBLE_CHAR_CLASS_SOURCE = String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`,
  c = new RegExp(`^[${INVISIBLE_CHAR_CLASS_SOURCE}]+`, "u");
function stripLeadingInvisibleChars(n) {
  return n.replace(c, "");
}
function isUnsafePath(n, r = decodePercentVariants(n)) {
  return (
    An(n) || isAbsolutePath(n) || ANY_CONTROL_CHAR_REGEX.test(r[0]) || r.map(stripLeadingInvisibleChars).some((e) => An(e) || isAbsolutePath(e))
  );
}
var u = /^\.\.\//;
function isAbsolutePath(n) {
  return jf(n) || jf(posix.normalize(n).replace(u, "/")) || (l(n) && jf("/" + n));
}
function l(n) {
  let r = posix.normalize(n);
  return r === ".." || r.startsWith("../");
}
function isUnsafeFileUrl(n) {
  let r = n.slice(7);
  return isUnsafePath(r) || isUnsafePath(r.slice(1));
}
var i = /(?:%[0-9A-Fa-f]{2}){1,512}/g,
  f = /^%[0-9A-Fa-f]{2}/;
function decodePercentVariants(n) {
  if (!n.includes("%")) return [n, n];
  let r = new TextDecoder("utf-8", { fatal: !1, ignoreBOM: !0 });
  return [
    n.replace(i, (e, t) => {
      let o = t + e.length;
      return r.decode(s(e), { stream: f.test(n.slice(o, o + 3)) });
    }),
    n.replace(i, (e) =>
      Array.from(s(e), (t) => String.fromCharCode(t)).join(""),
    ),
  ];
}
function s(n) {
  return Uint8Array.from(n.slice(1).split("%"), (r) => parseInt(r, 16));
}
export { INVISIBLE_CHAR_CLASS_SOURCE, stripLeadingInvisibleChars, isUnsafePath, isAbsolutePath, isUnsafeFileUrl, decodePercentVariants };
