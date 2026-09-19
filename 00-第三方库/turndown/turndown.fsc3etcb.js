// 已替换为 turndown 的真实模块 —— HTML→Markdown（见 ./README.md）
//
// 上游 turndown 在**模块顶层**挑 HTML 解析器：
//
//   var root = typeof window !== "undefined" ? window : {};
//   var HTMLParser = canParseHTMLNatively() ? root.DOMParser : createHTMLParser();
//   function createHTMLParser() { var domino = require("@mixmark-io/domino"); ... }
//
// Bun 里 `window` 是 undefined，于是必然走 createHTMLParser()，而它第一句就
// require 那个 7.7 MB 的 `@mixmark-io/domino` —— 包没装，所以**一加载就抛**。
//
// 修法：在 turndown 求值的那一小段里把 `window` 补上，让它走**上游本来就有的**
// 原生 DOMParser 分支（解析器实现见 ./dom-parser.js），求值完立刻恢复。
//
// 不能常驻：全树有 114 处 `typeof window` 的环境检测（48 个文件），常驻会把它们
// 全部翻成「运行在浏览器里」。
import { createDomParser } from "./dom-parser.js";

const savedWindow = globalThis.window;
globalThis.window = { DOMParser: createDomParser() };

let TurndownService;
try {
  // 顶层 await：本模块只有一个调用方（execution-core.js 的 iCo()），走的是
  // `import(...).then(...)`，所以异步化不影响它。
  TurndownService = (await import("./_source/lib/turndown.cjs.js")).default;
} finally {
  if (savedWindow === undefined) delete globalThis.window;
  else globalThis.window = savedWindow;
}

export default TurndownService;
