# 让这棵树能 `bun build --compile`：走过的六条路

**结论：两条「资源嵌入」路线虽然技术上能跑通，但设计上被否决 —— 不接受把 `.js`
当 `{ type: "file" }` 资源引入**（那是绕开模块系统，而且正是 576 MB 那份自包含
bundle 重复打包的来源）。排除它们之后，剩下的路全部撞墙，墙的位置和形状记在下面。

当前树是干净的（`45663b27`，`bun cli.js --help` md5 逐字节不变），所有实验已清空。

配套阅读：仓库根的 `BUN-COMPILE.md`（2026-09-16 那一轮，结论是
「`import.meta.require` 不是打包器的一条边」）和 `.analysis/bun_bundler.md`（bun 官方文档）。

---

## 一、要解决什么

这棵树用 `bun cli.js` 能跑，`bun build --compile` 出来的二进制**启动即失败**：

```
error: Cannot find module '../../02-功能模块/跨会话消息-UDS/udsInboxShape.dasynwyz.js'
         from '/$bunfs/root/claude'
```

根因是 `import.meta.require(...)` **不是打包器的一条边** —— 目标文件一个都不会进包，
而 `--compile` 又把所有模块内联成单文件，`/$bunfs/root/` 下根本没有那些路径。

## 二、问题的形状（普查，`census` 口径）

**相对路径**懒加载共 **455 处**，两种写法**基准不同，别混**：

| 写法 | 基准 | 处数 | 扩展名分布 |
|---|---|---:|---|
| `importMetaRequire("./x")` | **hub 目录**（`chunk-2c9tjhwd.js` 捕获的自己的 require） | 80 | `.md` 61 · `.txt` 12 · `.node` 5 · `.mjs` 2 |
| `import.meta.require("./x")` | **调用方目录** | 375 | `.js` 375 |

> 第一轮我把两者都按 hub 基准算，凭空多报 126 条。判据：
> `peer-target-guard.js` 对**同一个 specifier** 同时用了静态 import 和
> `import.meta.require`，两者都能解析 —— 只有 `importMetaRequire` 是 hub 基准。

按**求值位置**分（这决定了能怎么改）：

| 位置 | 处数 | 含义 |
|---|---:|---|
| 模块顶层 | 150 | 改静态 import **等价**（懒加载时它也是模块求值期执行的） |
| async 函数体内 | 56 | 可以改 `await import()`，不需要传染 |
| sync 函数体内 | 169 | 改动态 import 要传染 async |

另外 232 处是 `importMetaRequire("stream")` 这类**裸 specifier**（Node 内置），
编译产物里照常可用，不用管。

## 三、六条路

### ① 静态 import（418 处成功，卡在 31 条成环边）

`import.meta.require(x)` → `import * as ns from x`。

**必须用 `import * as` 而不是 `import x`** —— 实测对 `.md` / `.txt` / `.js`：
`import.meta.require(p)` 与 `import * as ns from p` 的**键集合完全一致**、
`.md`/`.txt` 的 `default` 相等、`.js` 的命名导出是**同一个对象**。
用 `import x` 只拿 default，对只有命名导出的 `.js` 会得到 `undefined`。

**418 处改完，`--help` md5 逐字节不变，五道闸门全绿。** 剩 31 条不能改，因为会成环。

### ② 动态 `import()`（async 上下文可行，sync 要传染）

`await import(x)` **不是 ESM 边** —— 不进模块图、不参与求值顺序，
所以不会成环，且在 `--compile` 里是打包器的一条边（目标会被打进产物，不需要 asset）。

56 处 async 上下文可以直接改。169 处 sync 的要么传染 async，要么放弃。

### ③ 顶层 await（TLA）（死锁）

把 sync 函数里的调用提升到模块顶层预加载：

```js
const __lazy_x = await import("./x.js");   // 模块顶层
function f() { return __lazy_x.Foo; }      // 同步使用
```

**实测在环上直接死锁** —— `bun cli.js --help` 20 秒无输出、无报错。
即便单个模块能跑，只要它在环上就会互相等待。

### ④ 资源嵌入（asset）直接嵌原文件（副本的依赖找不到）

`import p from "<abs>" with { type: "file" }` 让 bun 把文件**原样**放进产物，
落在 `/$bunfs/root/<name>`，`import.meta.require` 能按路径命中。实测三点：

- asset 路径可被 `fs.readFileSync` 读、可被 `import.meta.require` 加载
- **`.node` 连 dlopen 都能从 bunfs 做**（`url-handler.node` 实测加载成功）
- `--splitting` 在 `--compile` 下无效（静默忽略），所以只能走 asset

但**嵌原文件不行**：asset 在产物里是独立文件，它自己的 `import "./dep.js"`
会去 `/$bunfs/root/` 找，而那些依赖早被内联进主文件了：

```
Cannot find module './agent-view-feature-gates.js'
  from '/$bunfs/root/AGENT_VIEW_RELAUNCH_ENV_KEY.2qggy62y.js'
```

### ⑤ asset + 自包含 bundle（能跑，但**已否决**）

对每个 asset 目标先 `bun build <目标> --target=bun` 打成**自包含单文件**再嵌入 ——
依赖全内联，不再有运行时路径解析。

**这条技术上走通了**：二进制 576 MB，空目录跑 `--help` 与源码态 **逐字节相同**，
闸门全绿。但它把 `.js` 当资源引入，**这一条被否决**：等于绕开模块系统，
而且 21 个 bundle 各自内联一整份依赖树（lodash 之类被重复打包，`.stage/` 就有 466 MB）——
体积问题的根源正是这个引入方式本身。

### ⑥ 整树 asset 化 + `--root`（141 MB，卡在解析；同属**已否决**的路线）

**这是最有希望的一条**，思路是「自己做 `--splitting`」：把整棵树按**原目录结构**
嵌进 `/$bunfs/root/`，于是 asset 模块的 dirname 就是它在 bunfs 里的真实目录 ——
`import.meta.require` 和相对 `import` 全都能按原样解析，**一句代码都不用改**。

关键在 `--root`。文档里写着：

> If unspecified, Bun uses the **first common ancestor of all entrypoint files** as the root.

entry 放在 `.analysis/` 下时 `[dir]` 就变成 `../../`；加 `--root .` 后 asset 按原结构落位：

```
/$bunfs/root/04-tools/MonitorTool.js
/$bunfs/root/01-核心基础设施/核心工具-并发与缓存/lazy-value.js   existsSync=true
```

体积从 576 MB 降到 **141 MB**，编译 1.6 秒，零改写。

**但卡住了**：asset 模块**内部**的相对 import 解析失败。

```
Cannot find module '../01-核心基础设施/核心工具-并发与缓存/lazy-value.js'
  from '/$bunfs/root/04-tools/MonitorTool.js'
```

而同一个文件：`existsSync` 为真、**精确路径 require 成功**、
`MonitorTool.js` 的 19 个 import 目标**全部**在 asset 集合里。

## 四、可复用的实测结论

这些是 bun 的行为，和这棵树无关，以后还会用到：

- **`--asset-naming` 的 `[dir]` 是「相对 project root」**，而 project root 默认是
  所有 entrypoint 的公共祖先，可用 `--root` 覆盖。asset 有独立的 naming 模板
  （`--asset-naming` / `--chunk-naming` / `--entry-naming`）。
- **asset 在 bunfs 里有真实路径**，`fs` 和 `import.meta.require` 都能访问；
  `.node` 的 dlopen 也能从 bunfs 做。
- **asset 的模块注册是精确字符串匹配，不做路径规范化**：

  | 写法 | 结果 |
  |---|---|
  | `/$bunfs/root/01-核心基础设施/…/lazy-value.js` | ✅ |
  | `/$bunfs/root/04-tools/../01-核心基础设施/…` | ❌ |
  | `/$bunfs/root/./cli.js` | ✅ |
  | `/$bunfs/root/cli.js` | ❌ |

  根级文件的 `[dir]` 是 `.`，所以注册名带 `./` —— `cli.js` 反而不匹配。
- **`import.meta` 不跨模块共享**（实测：一个模块设 `import.meta.probe`，另一个读不到，
  各自 `url` 也不同），所以没法全局 shim `import.meta.require`。
- **ESM 分实例化/求值两阶段**：环让某个模块的模块体在对方读取它的导出时还没执行，
  读到的 `var` 是 `undefined`（不是 `ReferenceError` —— 绑定在实例化阶段就创建了）。
  实测插桩输出（崩溃版）：

  ```
  [EVAL] E=chunk-01ymf0ar: 文件开始
  [EVAL] D=记忆-CLAUDE: 文件开始
  [EVAL] B: 文件开始
  [EVAL] B: 顶层读 POWERSHELL_COMMAND_ALIASES -> undefined
  ```

  对应关系：`B` = `powershell-command-safety.js`（第 1446 行**顶层** IIFE 读它），
  `A` = `核心应用-Agent循环.wmzgeczq.js`（**模块体从未执行**）。
  `/tmp/evalorder/` 有个能跑的最小复现。
- **非 ASCII 路径本身不是问题**：中文目录的 asset 能正常 require（最小实验通过）。
- **oxlint 尊重 `.gitignore`**：`.stage/` 里 466 MB 的 bundle 一旦不被 gitignore
  覆盖，`check-undef.mjs` 会从几秒变成跑不完。
- **`git stash` 会连带存走工具脚本**（已跟踪文件），调试时反复踩 ——
  patch 完工具立刻备份到 `/tmp`。

## 五、环的分析

31 条成环边，按「`to` 回到 `from`」的路径长度分：

| 路径长 | 条数 | 处置 |
|---|---:|---|
| **1** | 7 | 两边本来就互相静态 import，**加边不改图** → 无害 |
| **2** | 16 | 环 = `from → to → X → from` |
| **3** | 8 | 更长 |

**24 条里 23 条的中间节点是同一个模块**：

```
23 次  03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js
 3 次  02-功能模块/编排-Workflow/workflow-registry.js
 1 次  （其余各一处）
```

而且位置固定是 `核心应用-Agent循环 → execution-core`。**理论上断这一条边，23 条环全断。**

**但这条边传 4646 个符号**：

```
核心应用-Agent循环.wmzgeczq.js  ←  import { 4646 个符号 }  ←  execution-core.js
       57,494 行                                              169,378 行
```

这是聚合 chunk 的极致形态，拆它等于把两个巨文件解耦。反方向（让 `to` 不依赖
`核心应用-Agent循环`）同样要拆那些符号（`executeShellCommand`、`killLocalShellTask`…），
会拖出巨大的依赖闭包。

**所以「拆 chunk 断环」在这一族环上不成立** —— 杠杆点太集中，而那个点恰好是
整棵树耦合最重的地方。

### 否决 asset 之后，还剩什么

排除两条资源嵌入路线，能用的手段只剩三种，而且都要求**先断环**：

| 手段 | 前提 |
|---|---|
| 静态 `import` | 不成环（成环会改求值顺序，实测顶层读成 `undefined`） |
| 动态 `import()` | 调用方是 async（sync 函数内要传染） |
| 顶层 await 预加载 | 模块不在环上（实测环上直接死锁） |

而断环的唯一杠杆点是 `核心应用-Agent循环 → execution-core`（4646 个符号）。
**所以这个方向的瓶颈不在打包器，在树的耦合度本身。**

## 六、未定位的问题（asset 路线上遇到的，供参考）

> 这条路线已被否决，所以下面这个问题**不影响当前决策**。留着是因为它很可能
> 是 bun 的一个 bug，而且我手上已经有很干净的对比：**同一个文件，精确路径
> `require` 成功、从 asset 模块内部用相对路径 `import` 失败**。
> 真要报给 bun 的话，从这里的六个「已排除」开始缩复现最省事。

**asset 模块内部的相对 import 在真树上失败，但最小复刻成功，两者路径字符串逐码点相同。**

已排除：

| 假设 | 实验 | 结果 |
|---|---|---|
| 中文路径编码 | 逐码点比较树与复刻的 specifier | **完全相同** |
| NFC/NFD 规范化 | 码点比对 | 无差异（CJK 无此问题） |
| 路径形状 | 最小复刻（深度 1→2 中文目录） | **成功** `MT(LV)` |
| asset 数量 | 逐步加到 **N=2000** | **全部成功** |
| 文件类型 | 只嵌 `.js` | 同样失败 |
| `--root` 写法 | 相对 `.` vs 绝对路径 | 同样失败 |

下一步应该做**目录子树二分**：只 asset 化 `01-核心基础设施/` 一棵子树，
require `getBootstrapEntry.4n2kvc7t.js`，成功就加子树、失败就在子树内继续切。

## 七、工具

`.analysis/lazy-to-import/` 下，都是可以重跑的：

| 脚本 | 作用 |
|---|---|
| `apply.mjs` | 静态化改写器。内含**成环判据**（见下），按「目标级」而非「边级」保留 |
| `rewrite-paths.mjs` | 把带 `../` 的 specifier 降成 `./<basename>` 并生成转发文件 |
| `to-dynamic.mjs` | 改写成 `await import()`（只对非 sync 上下文） |
| ~~`gen-assets.mjs`~~ | asset 路线（**已否决**）：生成 asset 清单，`.js` 打成自包含 bundle |
| ~~`bake-tree.mjs`~~ | asset 路线（**已否决**）：整树 asset 化 + 生成 `--root` 用的 entry |
| ~~`rewrite-paths.mjs`~~ | 只服务于 asset 路线（把 specifier 降成 basename 以便命中平铺的 asset） |
| ~~`compile-entry.js`~~ | asset 路线的编译入口 |

**排除 asset 路线后，真正还有意义的是两个**：`apply.mjs`（静态化，418 处已验证）
和 `to-dynamic.mjs`（动态 import，覆盖 async 上下文那 56 处）。后者还没实际跑过。

**`apply.mjs` 的成环判据**（这条容易写错，值得单独记）：

- 「成环」= 在**只含现有静态边**的图上，`to` 能到达 `from`。
- **判据必须是目标级**：同一个目标可能同时被一条不成环的边和一条成环的边指着。
  按边级判断会让它既被静态 import 又被 asset 嵌入，bun 会把该路径当 asset 处理，
  静态 import 那侧就找不到导出 —— 实测报
  `Import "WorkflowTool" will always be undefined`，而那个导出其实在文件里。
- **算入度要用「改写前」的图，并排除改写器自己加的 `lazy_` 导入**，
  否则「因为被静态化才有入边」的目标会被误判成「已内联」。

## 八、实验留档

所有实验已按「不接受把 `.js` 作为 `{ type: "file" }` 引入」的结论清空
（`git stash clear`）。本目录里的脚本是可重跑的，需要哪条路线重新跑一遍即可。
