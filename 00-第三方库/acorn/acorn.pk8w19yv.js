// 原 chunk 见 ./_original/acorn.pk8w19yv.js
// 已替换为 acorn 的真实模块 —— 5/5 parse() 产生的 AST 逐字节一致；acorn 版本 8.15.0 完全吻合
import acorn from "./_source/dist/acorn.js";
// 原 chunk 导出的是惰性工厂 fAe()，消费者写 `let { parse } = fAe()`
export function fAe() { return acorn; }
