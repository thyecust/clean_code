// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { chalk } from "../ANSI-样式-布局原语/chalk-ansi.js";
import { jit, BB } from "../../02-功能模块/语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
var l = new Map(
  Object.entries({
    keyword: chalk.blue,
    built_in: chalk.cyan,
    type: chalk.cyan.dim,
    literal: chalk.blue,
    number: chalk.green,
    regexp: chalk.red,
    string: chalk.red,
    subst: chalk.reset,
    symbol: chalk.reset,
    class: chalk.blue,
    function: chalk.yellow,
    title: chalk.reset,
    "title.function": chalk.yellow,
    "title.class": chalk.blue,
    params: chalk.reset,
    comment: chalk.green,
    doctag: chalk.green,
    meta: chalk.grey,
    "meta-keyword": chalk.reset,
    "meta-string": chalk.reset,
    "meta.keyword": chalk.reset,
    "meta.string": chalk.reset,
    section: chalk.reset,
    tag: chalk.grey,
    name: chalk.blue,
    attr: chalk.cyan,
    attribute: chalk.reset,
    variable: chalk.reset,
    bullet: chalk.reset,
    code: chalk.reset,
    emphasis: chalk.italic,
    strong: chalk.bold,
    link: chalk.underline,
    quote: chalk.reset,
    addition: chalk.green,
    deletion: chalk.red,
  }),
);
function a(e) {
  let t = e.replace(/^hljs-/, "");
  for (;;) {
    let r = l.get(t);
    if (r) return r;
    let n = t.lastIndexOf(".");
    if (n < 0) return;
    t = t.slice(0, n);
  }
}
function g(e) {
  if (typeof e === "string") return e;
  let t = e.children.map(g).join(""),
    r = e.scope ?? e.kind,
    n = r ? a(r) : void 0;
  return n ? n(t) : t;
}
function u(e, t) {
  let r = t?.language;
  if (!r) return e;
  try {
    let n = BB(r);
    if (!n) return e;
    let o = jit().highlight(e, { language: n, ignoreIllegals: !0 }),
      s = o._emitter ?? o.emitter,
      i = s?.rootNode ?? s?.root;
    if (!i || typeof i === "string") return e;
    return i.children.map(g).join("");
  } catch {
    return e;
  }
}
function c(e) {
  return BB(e) !== null;
}
var d = { highlight: u, supportsLanguage: c };
function getSyntaxHighlightAdapter() {
  return d;
}
export { getSyntaxHighlightAdapter };
