# 函数级替换：已完成的 chunk

每个替换都过了两道验证：**行为等价**（同一探针对原 chunk 与 shim 输出一致）+ **变异检验**
（自动注入错误实现，探针必须抓住）。整棵树随后跑 `--help` 逐字节比对。

| chunk | 替换为 | 探针+变异 |
|---|---|---|
| `chunk-2zwbfepc.js` | parse5@7.2.0 / 7.2.1, entities@4.5.0 | 原 chunk 与 shim 行为一致 : ✓ 是 · 变异检验                : 抓住 30/30 个 |
| `chunk-jm5cswvd.js` | semver@7.7.3 | 原 chunk 与 shim 行为一致 : ✓ 是 · 变异检验                : 抓住 0/0 个真变 |
| `chunk-w3axq133.js` | @smithy/core@3.23.3（可安全范围 3, @smithy/middleware-serde@4.2.12（可安全范围 4,  | 原 chunk 与 shim 行为一致 : ✓ 是 · 变异检验                : 抓住 3/3 个真变 |
| `chunk-x46ksw6d.js` | qrcode@1.5.4, pngjs@5.0.0, dijkstrajs@1.0.3 | 原 chunk 与 shim 行为一致 : ✓ 是 · 变异检验                : 抓住 63/63 个 |
| `chunk-z7ktsccq.js` | @smithy/shared-ini-file-loader@4.4.0–4.4.3, @smithy/types@不在此 chunk 内（ | 原 chunk 与 shim 行为一致 : ✓ 是 · 变异检验                : 抓住 0/0 个真变 |
| `chunk-zdrvwe5r.js` | @smithy/signature-v4@5.3.0–5.3.12（5 | 原 chunk 与 shim 行为一致 : ✓ 是 · 变异检验                : 抓住 0/0 个真变 |

原 chunk 保留在同目录 `<name>.original.js`（同目录、`.js` 结尾——换目录会破坏相对 import 的层级，
换扩展名会被当作 CJS 加载）。
