// 给 turndown 用的最小 DOM —— 上游要一个 `parseFromString(html, "text/html")`。
//
// ## 为什么需要它
//
// turndown 在**模块顶层**就决定用哪个 HTML 解析器：
//
//   var root = typeof window !== "undefined" ? window : {};
//   function canParseHTMLNatively() { var Parser = root.DOMParser; ... }
//   var HTMLParser = canParseHTMLNatively() ? root.DOMParser : createHTMLParser();
//                                                  ↑ 有 DOMParser 就走这条
//   function createHTMLParser() { var domino = require("@mixmark-io/domino"); ... }
//
// Bun 里 `window` 是 undefined（实测 `typeof DOMParser === "undefined"`，树里也没有任何
// DOMParser 实现），所以**必然**走右边 —— 而 `@mixmark-io/domino`（7.7 MB）没装，
// 于是整棵树里 turndown **一加载就抛**。这不是惰性分支：`createHTMLParser()` 那行就在顶层。
//
// ## 为什么是这个形状
//
// turndown 对 DOM 是**只读遍历** —— `setAttribute` / `createElement` / `appendChild`
// 一次都没出现。实际用到的成员只有下面这些（对照 domino 跑 30 个样本时逐个撞出来的，
// 两次漏项都是在这一步暴露的：先是 `parent.children`，再是 `getElementsByTagName`）：
//
//   nodeType  nodeName  nodeValue  data  childNodes  children  firstChild  parentNode
//   nextSibling  previousSibling  cloneNode  textContent  getAttribute  outerHTML
//   getElementsByTagName
//   + parentNode.removeChild / document.getElementById
//
// 但它**会写**：`Node` 构造往节点上挂 `isBlock` / `isCode` / `isBlank` /
// `flankingWhitespace`，`collapseWhitespace` 直接改 `node.data` 并 removeChild。
// 所以节点必须是可写的普通对象，不能是冻结的 AST。
//
// 解析用树里已有的 parse5（8.0.1 的打包产物，导出名还是混淆的）。
import { rAt as parseHtml } from "../parse5/parse5.2zwbfepc.js";

const ELEMENT_NODE = 1,
  TEXT_NODE = 3,
  COMMENT_NODE = 8,
  DOCUMENT_NODE = 9,
  DOCTYPE_NODE = 10;

const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

const escapeText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escapeAttr = (s) => escapeText(s).replace(/"/g, "&quot;");

class DomNode {
  constructor(nodeType, nodeName) {
    this.nodeType = nodeType;
    this.nodeName = nodeName;
    this.parentNode = null;
    this.childNodes = [];
  }
  // 首尾子节点与兄弟节点全部**现算**：collapseWhitespace 会 removeChild，
  // 缓存字段就得在每个改动点同步，getter 天然正确。
  get firstChild() { return this.childNodes[0] ?? null; }
  get lastChild() { return this.childNodes[this.childNodes.length - 1] ?? null; }
  get nextSibling() {
    const p = this.parentNode;
    return p ? p.childNodes[p.childNodes.indexOf(this) + 1] ?? null : null;
  }
  get previousSibling() {
    const p = this.parentNode;
    return p ? p.childNodes[p.childNodes.indexOf(this) - 1] ?? null : null;
  }
  append(child) { child.parentNode = this; this.childNodes.push(child); return child; }
  removeChild(child) {
    const i = this.childNodes.indexOf(child);
    if (i !== -1) { this.childNodes.splice(i, 1); child.parentNode = null; }
    return child;
  }
  /** 只有元素子节点（DOM 的 HTMLCollection 语义）。`listItem` 规则靠它算有序列表序号：
   *  `Array.prototype.indexOf.call(parent.children, node)` */
  get children() { return this.childNodes.filter((c) => c.nodeType === ELEMENT_NODE); }
  // 下面这组是「元素维度」的兄弟/子节点导航。它们和 children 一样，都是为了
  // `parent.lastElementChild === node` 这类判断 —— turndown 的 rules.list 正是用它
  // 区分「嵌套在 li 里的子列表」和「顶层列表」，判错会让嵌套列表多出一个空行。
  get firstElementChild() { return this.children[0] ?? null; }
  get lastElementChild() { return this.children[this.children.length - 1] ?? null; }
  get nextElementSibling() {
    const p = this.parentNode;
    if (!p) return null;
    const sibs = p.children;
    return sibs[sibs.indexOf(this) + 1] ?? null;
  }
  get previousElementSibling() {
    const p = this.parentNode;
    if (!p) return null;
    const sibs = p.children;
    return sibs[sibs.indexOf(this) - 1] ?? null;
  }
  get parentElement() { return this.parentNode?.nodeType === ELEMENT_NODE ? this.parentNode : null; }
  /** 全部**后代**元素，不止直接子节点。`isBlank` 链路里的 `has()` 靠它查 void 元素，
   *  而且那句是 `node.getElementsByTagName && ...` —— 不实现的话判定会静默变成 undefined，
   *  与 domino 不一致。 */
  getElementsByTagName(tagName) {
    const want = String(tagName).toUpperCase();
    const out = [];
    const walk = (n) => {
      for (const c of n.childNodes) {
        if (c.nodeType !== ELEMENT_NODE) continue;
        if (want === "*" || c.nodeName === want) out.push(c);
        walk(c);
      }
    };
    walk(this);
    return out;
  }
  get textContent() {
    let out = "";
    for (const c of this.childNodes) {
      if (c.nodeType === TEXT_NODE || c.nodeType === ELEMENT_NODE) out += c.textContent;
    }
    return out;
  }
}

class DomText extends DomNode {
  constructor(data) { super(TEXT_NODE, "#text"); this.data = data; }
  get nodeValue() { return this.data; }
  set nodeValue(v) { this.data = v; }
  get textContent() { return this.data; }
  get outerHTML() { return escapeText(this.data); }
  cloneNode() { return new DomText(this.data); }
}

class DomComment extends DomNode {
  constructor(data) { super(COMMENT_NODE, "#comment"); this.data = data; }
  get nodeValue() { return this.data; }
  set nodeValue(v) { this.data = v; }
  get textContent() { return this.data; }
  get outerHTML() { return `<!--${this.data}-->`; }
  cloneNode() { return new DomComment(this.data); }
}

class DomDocumentType extends DomNode {
  constructor(name) { super(DOCTYPE_NODE, "#documentType"); this.name = name; }
  cloneNode() { return new DomDocumentType(this.name); }
}

class DomElement extends DomNode {
  constructor(tagName, attrs) {
    super(ELEMENT_NODE, tagName.toUpperCase());
    this.tagName = tagName;
    this.attributes = attrs;
  }
  getAttribute(name) {
    const a = this.attributes.find((x) => x.name === name);
    return a ? a.value : null;
  }
  hasAttribute(name) { return this.attributes.some((x) => x.name === name); }
  get id() { return this.getAttribute("id") ?? ""; }
  get className() { return this.getAttribute("class") ?? ""; }
  get outerHTML() {
    const attrs = this.attributes
      .map((a) => (a.value === "" ? ` ${a.name}` : ` ${a.name}="${escapeAttr(a.value)}"`))
      .join("");
    if (VOID_ELEMENTS.has(this.tagName)) return `<${this.tagName}${attrs}>`;
    return `<${this.tagName}${attrs}>${this.childNodes.map((c) => c.outerHTML).join("")}</${this.tagName}>`;
  }
  cloneNode(deep) {
    const copy = new DomElement(this.tagName, this.attributes.map((a) => ({ ...a })));
    if (deep) for (const c of this.childNodes) copy.append(c.cloneNode(true));
    return copy;
  }
}

class DomDocument extends DomNode {
  constructor() { super(DOCUMENT_NODE, "#document"); }
  get documentElement() { return this._find((n) => n.nodeType === ELEMENT_NODE) ?? null; }
  get body() { return this._find((n) => n.tagName === "body") ?? null; }
  getElementById(id) { return this._find((n) => n.nodeType === ELEMENT_NODE && n.getAttribute("id") === id); }
  _find(pred) {
    const walk = (n) => {
      if (pred(n)) return n;
      for (const c of n.childNodes) { const hit = walk(c); if (hit) return hit; }
      return null;
    };
    for (const c of this.childNodes) { const hit = walk(c); if (hit) return hit; }
    return null;
  }
  cloneNode() {
    const copy = new DomDocument();
    for (const c of this.childNodes) copy.append(c.cloneNode(true));
    return copy;
  }
}

/** parse5 的默认树 → 上面这套只读 DOM */
function toDom(node) {
  switch (node.nodeName) {
    case "#text": return new DomText(node.value);
    case "#comment": return new DomComment(node.data);
    case "#documentType": return new DomDocumentType(node.name ?? "");
    case "#document": {
      const doc = new DomDocument();
      for (const c of node.childNodes ?? []) doc.append(toDom(c));
      return doc;
    }
    default: {
      const el = new DomElement(node.tagName, node.attrs ?? []);
      for (const c of node.childNodes ?? []) el.append(toDom(c));
      return el;
    }
  }
}

export function parseHtmlToDom(html) {
  return toDom(parseHtml(String(html)));
}

/** turndown 只要求 `new Parser().parseFromString(x, "text/html")` 返回真值 */
export function createDomParser() {
  return class DOMParser {
    parseFromString(html) { return parseHtmlToDom(html); }
  };
}
