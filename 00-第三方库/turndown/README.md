# turndown

## `turndown` — `turndown.fsc3etcb.js`

- 版本：2.1.8
- 依据：HTML → Markdown

它只是个入口 shim，实现全在 `_source/lib/turndown.cjs.js`（上游原包）。

## HTML 解析器：用 parse5 顶掉 domino

上游在**模块顶层**就挑好解析器：

```js
var root = typeof window !== "undefined" ? window : {};
var HTMLParser = canParseHTMLNatively() ? root.DOMParser : createHTMLParser();
function createHTMLParser() { var domino = require("@mixmark-io/domino"); ... }
```

Bun 里 `window` 是 undefined（树里也没有任何 DOMParser 实现），于是**必然**走
`createHTMLParser()` —— 而它第一句就 require 那个 7.7 MB 的 `@mixmark-io/domino`。
包没装，所以**一加载就抛**。这不是惰性分支，那行就在顶层。

`./dom-parser.js` 用树里已有的 parse5（`00-第三方库/parse5/`）实现了最小 DOM；
`turndown.fsc3etcb.js` 在求值 turndown 的那一小段里补上 `window.DOMParser`、**立刻恢复**，
让它走**上游本来就有的**原生 DOMParser 分支。

三条约束值得记下来：

- **窗口不能常驻。** 全树有 114 处 `typeof window` 的环境检测（48 个文件），
  常驻会把它们全部翻成「运行在浏览器里」。所以只在 turndown 求值期间存在，`finally` 恢复。
- **等价性靠对照，不靠读代码。** 与真 domino（2.2.0）跑 59 个样本（嵌套列表 / 表格 /
  SVG / MathML / template / 畸形 HTML / 5000 字符 / NUL / CRLF）**逐字节相同**。
  前两轮 AST 扫描各漏一个 API —— 先是 `parent.children`，再是 `parent.lastElementChild` ——
  两个都**挂在父节点上**，不会出现在「按节点名写死的成员清单」里，只有跑对照才撞得出来。
- **它只读遍历。** `setAttribute` / `createElement` / `appendChild` 一次都没出现；
  但它**会写**（`Node` 构造往节点上挂 `isBlock`/`isCode`/`isBlank`，
  `collapseWhitespace` 直接改 `node.data` 并 removeChild），所以节点必须是可写的普通对象。

## 打包

`turndown.cjs.js` 里那句 `require("@mixmark-io/domino")` 是**死分支**（窗口期内
`window.DOMParser` 一定存在），但打包器静态分析仍会把它当一条边，所以 `bun build`
需要 `--external '@mixmark-io/domino'`。运行时不受影响。

## 真实源码

`_source/` 是从 npm 取回的原始包，可对照阅读。
