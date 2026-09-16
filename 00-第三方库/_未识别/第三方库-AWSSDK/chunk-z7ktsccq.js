// [claude-code-src shim]
// ./_source/chunk-z7ktsccq.js
// 替换：@smithy/shared-ini-file-loader 4.4.0–4.4.3（原 chunk 是它的 5 个 dist-cjs 模块被 bun 内联）
// 坑 1：消费者写的是 `pe(HA())`，HA 必须是「可调用的 __commonJS 惰性包装器」，
//       不能写成 `export { default as HA }` 或直接导出 namespace，否则 HA() 会静默变成空对象。
import { createRequire } from "node:module";
const require_ = createRequire(import.meta.url);
let _ns;
export const HA = () => (_ns ??= require_("@smithy/shared-ini-file-loader"));
