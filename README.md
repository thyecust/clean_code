# Claude Code 2.1.263 — 目录化的打包产物

把 `chunk-*.js` 按模块重新组织成一棵可浏览的目录树。**代码与实现原样保留**（包括混淆后的标识符），
只做两件事：按模块分目录、重写 import 路径使整棵树仍然可解析。

## 结构

```
00-第三方库/          第三方库（lodash / zod / React / Ink / gRPC / AWS SDK …）
01-核心基础设施/          核心基础设施（日志、路径、配置、遥测、共享小工具）
02-功能模块/          功能模块（权限、MCP、插件、Skills、Teammates、Bridge …）
03-入口与运行时/          入口与运行时（cli.js · main · Headless · 会话 UI）
_index/
  file-map.json     chunk id → 路径 / 模块 / 大小 / 置信度
  modules.md        每个模块下的文件清单
cli.js              真入口（23 KB）
```

- **1622 个文件**，158 个目录，共 40.2 MB
- 文件名：**803 个恢复了真实名字**（来自调用方实际使用的名字、斜杠命令注册表、导出别名），
  其余 818 个保留 `chunk-<id>.js`。
  一律带 chunk id 后缀（`permissions-ui.0a82g62e.js`），便于与原始 chunk 对照。

## 完整性

import 路径按原始依赖图逐条重写并校验：

```
重写说明符   98,300 条
逐边校验     97,729 条   缺失 0 / 多出 0
```

树中的依赖关系与原始 bundle 完全一致。代码内容除 import 路径外未做任何改动。

## 怎么读

1. 先看 `_index/modules.md` —— 每个模块有哪些文件、各多大。
2. 想看某个功能，进对应目录。例如 `/permissions` 的实现在
   `02-功能模块/权限系统/`：`permissions-ui.0a82g62e.js` 是对话框 UI。
3. 文件内仍是混淆代码，但**字符串字面量、属性名、解构赋值都是原样的**——
   例如 `{ planContent: F, planPath: L } = fe` 直接告诉你 F 是 planContent。
4. 交叉参照原始分析：`_index/file-map.json` 里有 chunk id。

## 随行资源（重要）

打包产物不只是 JS。有 **171 个数据文件**（.zst / .md / .txt / .mjs）在运行时按**相对路径**加载，
搬动文件时必须让资源跟着它的**加载方**走：

- **41 个 chunk** 用 `Ke(path, import.meta.dirname)` 读同目录的 .zst/.md
  （如 `chunk-0z426rj0.js` → `./compare.mjs-4b810a57.txt.zst`，一行 wrapper）。
- `chunk-2c9tjhwd.js` **捕获**了 `import.meta.require` 并导出为 `Ae`，
  共 80 个资源按**它所在的目录**解析 —— 即使调用方在别的 chunk 也一样。
- `cli.js` 引用 `./src/plugins/functionHooks/hooks-worker/hooks-worker.js`。

树已把这些资源复制到各自加载方旁边。改动目录结构时需保持这一点。

## 运行时验证（bun 直接跑，与原 bundle 对比）

| 命令 | 结果 |
|---|---|
| `bun cli --version` | 一致 · `2.1.263 (Claude Code)` |
| `bun cli --help` | **258 行输出逐字节一致** |
| `bun cli --nonexistent-flag-xyz` | 一致 · exit 1 |
| `bun cli -v` | 一致 · exit 0 |

即：1622 个文件、跨 158 个目录的 97,729 条依赖边在运行时全部解析成功。

## 聚合 chunk（一个文件里有多个模块）

打包器把共用依赖的小模块合进了同一个 chunk。下面两个文件被**多个主题分段占据**，
单看目录名会漏掉其余内容：

- `03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js` （7.55 MB，现归入「核心应用 / Agent 循环」）
  - 0.94–2.2M — 插件 / marketplace 加载
  - 4.4M 附近 — MCP 协议
  - 5.0M 附近 — 工具定义与渲染
  - 5.7–6.0M — 插件加载（第二密集区）
  - 6.6M 附近 — 斜杠命令注册表
  - 7.2M 附近 — 会话 / 转录
- `02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js` （1.11 MB，现归入「认证 / OAuth 登录」）
  - 0–230K — OpenTelemetry SDK
  - 228–285K — Statsig（功能开关）
  - 285–570K — 凭据解析 / 请求头构造
  - 570–800K — Agent SDK 协议 schemas
  - 800–1141K — 配置 / 凭据 / 网关

## 已知限制

- **一个 chunk ≠ 一个源文件。** 打包器把共用代码提升进了少数巨型 chunk，
  最典型的是 `03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js`（7.5 MB、3128 个导出），
  它内部含工具定义、插件加载、SystemPrompt 等多个模块，但只能放在一个目录里。
- 825 个文件仍叫 `chunk-<id>.js` —— 它们是急切路径上的混淆块，打包器没保留任何人类名字。
- 第三方库目录里是**打包后的实现**。想换成上游源码，可按版本号 `npm pack`（见 `_index/` 与主图谱）。
