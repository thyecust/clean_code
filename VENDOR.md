# 第三方库替换清单

已识别的第三方包。每个包目录下有：

- `<name>.<chunkid>.js` —— 打包后的 chunk（上层代码 import 的就是它，**内容未改动**）
- `_source/` —— 从 npm 取回的真实源码，文件名与标识符都是真的，可对照阅读

---

| 包 | 版本 | chunk | **库占比** | 字符串覆盖 | 备注 |
|---|---|---:|---:|---:|---|
| `@anthropic-ai/sdk` | — | `chunk-h4f48kbj.js` | **31%** | — | 含 /v1/messages 客户端与 MessageStream；前半还有内联加密原语 |
| `@aws-sdk/core` | 3.978.0 | `chunk-7j004336.js` | **25%** | 38.9% | AWS SDK 公共核心 |
| `@aws-sdk/nested-clients` | 3.936.0 | `chunk-5meg3znc.js` | **7%** | — | 这个 5KB chunk 只有包元数据（package.json + 构建脚本字符串），不含库实现 |
| `@azure/msal-node` | 6.0.1 | `chunk-t44yq2d3.js` | **19%** | 30.5% | 内部还有 proxy-agent（Creating new HttpProxyAgent instance） |
| `@grpc/grpc-js` | 1.14.4 | `chunk-5zkynjxh.js` | **50%** | — | chunk 内嵌完整 package.json |
| `acorn` | 8.15.0 | `chunk-pk8w19yv.js` | **56%** | 89.4% | 导出 fAe() 工厂，返回 acorn 命名空间；5/5 AST 一致，版本 8.15.0 完全吻合。 |
| `ajv` | 8.20.0 | `chunk-2q22bct4.js` | **12%** | 26.5% | ajv 代码确实在（CodeGen: 前缀），但与其它代码交织，故库占比低 |
| `axios` | 1.20.0 | `chunk-t0fczzmz.js` | **50%** | 24.1% | HTTP 客户端 |
| `gaxios` | 7.1.4 | `chunk-m2b2q6sk.js` | **31%** | — | chunk 内嵌 package.json |
| `google-auth-library` | 10.6.2 | `chunk-m2b2q6sk.js` | **31%** | — | chunk 内嵌 package.json |
| `https-proxy-agent` | 9.1.0 + 8.10.2 | `chunk-1t3vmhtr.js` | **12%** | 19.4% | 未匹配内容是 https-proxy-agent:parse-proxy-response / AgentBaseInternalState，undici 只占少数 |
| `ink` | 7.1.1 | `chunk-5rs3h07b.js` | **0%** | 17.5% | 未匹配内容是 React 内部(Minified React error #/Suspense/ForwardRef)，是两个库合并 |
| `jsonc-parser` | 3.3.1 | `chunk-aa158d2j.js` | **56%** | 74.6% | 带注释 JSON 的编辑 |
| `lodash` | 4.17.21 或更新 | `chunk-2x3q7cfh.js` | **10%** | 45.3% | lodash 只是少数子集(isEqual/baseIsEqualDeep)，主体是 Anthropic 的 UUID/session/遥测 |
| `lodash` | 4.17.21 或更新 | `chunk-207999qb.js` | **18%** | 31.7% | lodash 子集之外主要是应用代码(async_hooks/i18n/信号) |
| `lodash` | 4.17.21 或更新 | `chunk-0vqzb8ad.js` | **42%** | 63.9% | 同上 |
| `lru-cache` | 11.1.0 | `chunk-8crev50p.js` | **89%** | 86.8% | 版本扫描: 11.1.0 覆盖 86.8% > 11.5.2 的 81.6% |
| `parse5` | 8.0.1 | `chunk-2zwbfepc.js` | **83%** | 93.8% | HTML 解析 |
| `react` | — | `chunk-kwtapczy.js` | **—** | 100.0% | JSX runtime (jsx/jsxs/Fragment)，字符串 100% 命中 react |
| `react` | — | `chunk-zhnvc798.js` | **—** | — | useMemoCache —— React Compiler 运行时 |
| `turndown` | 2.1.8 | `chunk-fsc3etcb.js` | **94%** | 94.0% | **导出的是 TurndownService**（wa.prototype.turndown / options / rules / headingStyle），domino 是它内部依赖的 DOM 实现 —— 字符串覆盖 94% 命中的是 domino，所以按覆盖度会误判。5/5 行为对比一致。 |
| `which-isexe` | 7.0.0 / 4.0.0 | `chunk-knmpyrza.js` | **12%** | 32.7% | 未匹配内容是 EACCES / cygwin / .EXE;.CMD;.BAT;.COM / darwin —— PATH 解析，非 human-signals |
| `zod` | 4.4.0 | `chunk-5ef0bk11.js` | **88%** | 85.3% | 版本扫描: 4.4.0 覆盖 85.3% > 4.6.5 的 72.5% |
| `zod` | 4.4.0 | `chunk-3g334xwq.js` | **77%** | 75.4% | 同上 |

---

## 已整块替换的 chunk（函数级识别 + 行为验证）

这三个 chunk 的导出**逐个识别出了身份**，并用真实 npm 模块替换，消费者无感：

| chunk | 替换为 | 导出的真实身份 | 验证 |
|---|---|---|---|
| `chunk-kwtapczy.js` | `react` 的 jsx-runtime | `N`=Fragment · `e`=jsx · `r`=jsxs | 10/10 行为一致，Fragment 是同一个 Symbol |
| `chunk-fsc3etcb.js` | `turndown` | `default`=TurndownService | 5/5 HTML→Markdown 输出逐字一致 |
| `chunk-pk8w19yv.js` | `acorn` | `fAe`=惰性工厂，返回 acorn 命名空间 | 5/5 AST 逐字节一致，版本 8.15.0 吻合 |

原 chunk 保留在同目录 `_original/` 下。替换后整棵树仍然 `--help` 逐字节一致。

**关键点：不能只看「这个 chunk 里有多少库代码」，要知道每个导出是什么。**
`chunk-fsc3etcb` 就是这个教训——它的字符串 94% 命中 domino，但导出的是 TurndownService，
domino 只是它内部依赖的 DOM 实现。按覆盖度会把它误判成 domino。


---

## 怎么用

上层模块里看到 `import { X } from "../00-第三方库/lru-cache/lru-cache.8crev50p.js"`，
就知道这是 lru-cache；要读懂实现，打开同目录的 `_source/`，那里的 `LRUCache` 是真名字。

## 重要：这些 chunk 不是纯的库

打包器把共用一个依赖的小模块合并进了同一个 chunk。例如 `lru-cache.8crev50p.js` 里：

```
Ku  = LRUCache          ← 库的（含 allowStale / maxSize / fetchMethod / dispose）
cB, xA, lz, Jke, Ycr    ← 应用侧的小 helper，不是 lru-cache 的
```

所以**没有做整体替换**——那会删掉应用代码。做的是：把库的真实源码取回来放在旁边，
并把 chunk 改名带上包名。覆盖度一列就是「该 chunk 的字符串有多少能在包里找到」，
数值越高说明这个 chunk 越纯是那个库（domino 94%、parse5 94%、acorn 89% 就接近纯库）。

## 未识别的部分

`_未识别/` 下是还没认定的第三方 chunk。其中最大的一块是 `第三方库-AWSSDK`（16 个 chunk），
它们确实是 AWS SDK 的客户端实现，只是没有逐个定版。
