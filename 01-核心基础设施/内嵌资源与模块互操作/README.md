# `内嵌资源与模块互操作/`

这个目录是**一个机制的两半**，两半必须待在一起，所以没有拆开。

## 一半：模块互操作运行时

| 文件 | 导出 |
|---|---|
| `chunk-2c9tjhwd.js` | `toESM` / `commonJS` / `defineExportGetters` / `initESM` / `MEMO_CACHE_SENTINEL` / **`importMetaRequire`** |
| `chunk-d16fhdtx.js` | `intersperse` / `dedupe` / `asStringArray`（已移到 `核心工具-数组与集合/`） |
| `chunk-h62vxw7j.js` | `getNormalizedRealCwd` / `STARTUP_REAL_CWD`（已移到 `核心工具-路径与平台/`） |

## 另一半：80 个内嵌资源 + 它们的加载器

`chunk-2c9tjhwd.js` 里有一行 `importMetaRequire = import.meta.require` —— 它**捕获**了
自己模块的 `require` 再导出。于是全树任何地方写 `importMetaRequire("./x")`，
解析基准都是**这个文件所在的目录**，而不是调用方所在的目录。

实测（两个同名不同内容的文件，一个在 hub 目录、一个在调用方目录）：

```js
// a/hub.js:  export const importMetaRequire = import.meta.require;
// a/which.js: 来自 a 目录        b/which.js: 来自 b 目录
// b/caller.js:
import { importMetaRequire } from "../a/hub.js";
console.log(importMetaRequire("./which.js").default);   // → 来自 a 目录
```

所以全树 **80 处 `importMetaRequire("./…")` 的目标文件必须与 `chunk-2c9tjhwd.js` 同目录**：
61 个 `.md`（技能文档、示例、参考）、12 个 `.txt`、5 个 `.node`（原生模块）、2 个 `.mjs`。
`.analysis/move/check-lazy-base.mjs` 会逐个静态校验这 80 处仍按 hub 目录解析 ——
既有的 CI 看不见它们（它的懒加载正则是 `import\.meta\.require\(`，匹配不到 `importMetaRequire(`）。

同目录的 `default.*.js` / `RUN_EXAMPLE_FILES.*.js` / `PLAN_TEMPLATE.*.js` 等是这个机制里的
**加载器 shim**，也放在这里。

## 另一套机制不在这里

`readEmbeddedAssetSync("./x", import.meta.dirname)` 走的是**调用方自己的目录**
（`import.meta.dirname` 是调用方的），所以那类资源跟着各自的加载方走 ——
比如 `02-功能模块/Skills技能/` 和 `02-功能模块/工具WebFetch-WebSearch/` 下各有一份
`build-report-lite-f76sjj5z.mjs`，就是因为两边的加载器都要在自己目录里找到它。
