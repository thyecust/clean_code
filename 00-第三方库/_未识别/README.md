# `_未识别/` —— 还没认定身份的第三方 chunk

这里剩下 **8 个 chunk**，是 2026-09-17 那轮归位之后仍然**证据不足**的部分。
同目录另外 40 余个 chunk 已经按硬证据归到各自的包目录（见下）。

## 判据

只采硬证据，够不上的一律留在这里 —— 仓库的原则是**一个看起来合理但错的名字比没有名字更糟**：

- 它 `import` 了某个包自己的 chunk（依赖边是硬证据）
- 包名 / API 名 / 错误串出现在文件里（`ZodError`、`graceful-fs.queue`、`zipSync`）
- 仓库自己的文档（`REPLACED.md` / `VENDOR.md`）已写明

按这三条已归位的：`parse5`、`zod`、`react`、`@anthropic-ai/sdk`、`@aws-sdk`（含原先散在
`第三方库-其他` 里的 `chunk-jtb5q5xr` / `chunk-cpfawwsx`）、`@opentelemetry`、
`ajv`、`semver`、`qrcode`（+ pngjs + dijkstrajs）、`fflate`、`supports-color`、
`graceful-fs`。判定与逐条证据记在 `.analysis/move/thirdparty-table.mjs`。

原先那 14 个分组子目录（`第三方库-parse5`、`zod(schema校验)`、`Ink终端渲染器` …）是
第一遍分类的遗留，与顶层包目录**重复分组**，已撤掉，剩下的文件铺平成一层。

## 剩下的 8 个

| 文件 | 知道什么 | 为什么定不了 |
|---|---|---|
| `chunk-cq8x5zt4.js` | 导出 `runSteps` / `showScreen`；import react 与 `React运行时-JSX` | 这两个名字在 `ink` 的 `_source/` 里没有，够不上 ink |
| `chunk-hm8z9h7j.js` | 含 `hyperlink`；import react、semver 的 chunk | 同上 |
| `第三方库-加密库.z54vzq0y.js` | Node crypto 的哈希 / 密钥原语（`KeyObject`、摘要长度） | 文件内没有包名，定不到是哪个 crypto 包 |
| `chunk-e0ewk5yt.js` | 含 `Attempted to update an already finished hash.` / `Cannot hash more than 2^53 - 1 bits` | 这两句能缩小到 hash 类实现，但候选不止一个 |
| `chunk-5y6047zm.js` | 含 `Deno.customInspect`、`Invalid response body, expected a web ReadableStream` | 像 fetch 类 polyfill，但定不到具体包；它 import `chunk-10wtfjv0.js` |
| `default.wzx01n9v.js` | 12 KB，内容全是 `google-chrome` / `google-chrome-stable` / `com.google.chrome` | 是**浏览器启动器**，与所在目录名（「Azure 身份认证」）不符；真正身份待定 |
| `chunk-jd89krpb.js` | 705 B | 文件内没有任何可读字符串 |
| `chunk-10wtfjv0.js` | 只有 `ParseError` / `invalid-retry` / `unknown-field` 三个串 | 被上面那个 polyfill 引用，但自身定不到包 |

## 两条与内容无关的已知问题

- 若某个 chunk 用 `require("./_source/node_modules/…")` 加载对照源码，那么它的 `_source/`
  里那份 `node_modules` 是**指向 `/Users/game-netease/claude-out/claude-code-src/node_modules`
  的软链**，在本机不存在（入库时就是这样）。搬家时软链会原样跟随，相对层级不变。
- 有 4 个资源文件（见 `check-lazy-base.mjs` 的已知缺失清单）在本仓库里从未存在过，
  只有加载器引用它们 —— 打包产物把它们留在了外部。
