// [claude-code-src shim]
// chunk-zdrvwe5r.js 的等价替换 —— @smithy/signature-v4（window 5.3.0–5.3.12，建议 5.3.12）
//
// 坑 1：原导出是 __commonJS 惰性工厂。消费者写的是
//   Ss = lhe();      new Ss.SignatureV4({...})            (chunk-7j004336, chunk-zsm689zk)
//   N  = pe(lhe(),1) __toESM(lhe())                      (chunk-9da0pmrs, chunk-wb95xgtr)
// 所以 lhe 必须保持「可调用的工厂」，返回真实的 CJS namespace。
// 写成 `export { default as lhe }` 或直接导出 namespace，会让 lhe() 静默变成空对象 —— 绝对不能。
import { createRequire } from "node:module";
const require_ = createRequire(import.meta.url);
let _ns;
export const lhe = () => (_ns ??= require_("@smithy/signature-v4"));
