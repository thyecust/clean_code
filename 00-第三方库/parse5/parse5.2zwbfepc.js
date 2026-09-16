// [claude-code-src shim]
// ./_source/parse5.js —— chunk-2zwbfepc.js 的等价替换
// 依赖：parse5@7.2.1（或 7.2.0，二者 dist/*.js 逐字节相同），它会自带 entities@4.5.0
// 无需 __commonJS 包装：消费者直接 `rAt(html)` / `new sse(...)`，不是 `rAt().parse`
import { Tokenizer, TokenizerMode, parse, parseFragment, serialize } from "parse5";

export const ty = TokenizerMode;
export const sse = Tokenizer;
export const S4t = serialize;
export const rAt = parse;
export const _yr = parseFragment;
