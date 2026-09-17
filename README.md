# Claude Code 2.1.263 — 目录化的打包产物

把 `chunk-*.js` 按模块重新组织成一棵可浏览的目录树。

**重组**只做两件事：按模块分目录、重写 import 路径使整棵树仍然可解析 —— 代码与实现原样保留。

**去桶**（2026-09-16）在其上又删掉了 212 个「纯转出桶」，把它们转出的名字改成在实现模块上定义，
见 [纯转出桶的移除](#纯转出桶的移除)。

**别名去混淆**（2026-09-17）把混淆的 import / export 局部名换成已写在别处的真名，
先在会话 UI 那个文件试点，再铺到全树 812 个文件，见
[全树别名去混淆](#全树别名去混淆)。

**导出名恢复**（2026-09-17）处理剩下那一层：导出名在文件内没有任何证据的模块，
靠读代码与调用点恢复 —— 284 个模块、684 条导出名、255 个文件改名，见
[为模块恢复可读导出名](#为模块恢复可读导出名)。

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

- **1430 个文件**，159 个目录，共 41.1 MB
- 文件名：**853 个是可读名字**（来自调用方实际使用的名字、斜杠命令注册表、导出别名，
  以及 2026-09-17 的导出名恢复），其余 577 个保留 `chunk-<id>.js`。
  除恢复导出的那批外，一律带 chunk id 后缀（`permissions-ui.0a82g62e.js`），便于与原始 chunk 对照。

## 完整性

import 路径按原始依赖图逐条重写并校验：

```
重写说明符   98,300 条
逐边校验     97,729 条   缺失 0 / 多出 0
```

树中的依赖关系与原始 bundle 一致（去桶之后少了 212 个纯转出节点，见下节）。

## 纯转出桶的移除

重组时为可读性把一批符号的名字放在「桶」文件里转出。桶本身没有任何实现，整个文件就是一个
`export { … } from`：

```
01-核心基础设施/共享小工具-未细化/BRIEF_PROACTIVE_SECTION.c389azz5.js
export { rbr as BRIEF_PROACTIVE_SECTION, bet as BRIEF_ENFORCE_SENTINEL, … } from "./chunk-q599wyee.js";
```

213 个这样的文件被删掉 212 个（剩的那个见下面「例外」）。做法是**把可读名字落到定义处**：

1. 在实现模块里，把被转出的混淆名就地重命名成可读名：
   `function rbr(…)` → `function BRIEF_PROACTIVE_SECTION(…)`；
2. 同一个模块里**直接**引用混淆名的文件，import 改成
   `import { BRIEF_PROACTIVE_SECTION as rbr }` —— 这些文件的调用方一行不用动；
3. 引用桶的 454 处 `import()` / `import.meta.require()` 改成指向实现模块。
   它们全是「拿命名空间再取属性」的写法，属性名本来就是可读名，所以只改路径字符串；
4. 桶的源**就是调用方自己**时（17 处），第 3 步会造出 `await import(自己)`。
   桶是个独立模块、已完成求值，自己不是 —— 所以这 17 处改成用本模块的绑定拼命名空间：
   `await import("./核心应用-Agent循环.js")` → `Promise.resolve({ executeSessionEndHooks, … })`，
   同理 `import.meta.require(自己)` → `({ builtInCommandNames })`。**这一步不能省**：
   `await import(自己)` 会等自己求值完成，而大 chunk 的顶层正跑着应用 —— 死锁，`/exit` 之后进程不退；
   同步 `require(自己)` 则拿到残缺命名空间（连 hoisted 函数都是 `undefined`）。
5. 删掉桶，并同步 `_index/file-map.json` / `_index/modules.md`。

规模：重命名 3,104 个绑定、改写 7,436 条 import 说明符、454 处动态引用（含 17 处自引用修复），
删除 212 个文件。

三类例外：

- `00-第三方库/parse5/parse5.2zwbfepc.js` 是**手写的 shim**（`import { parse } from "parse5"` 再转出
  `rAt`/`sse`…）。在它里面重命名会遮蔽 import，所以这 5 个名字保持原样，
  连带的桶 `01-核心基础设施/共享小工具-未细化/parse.4jce22r9.js` 保留。
- 4 个桶把某个符号转出成 `default`。`default` 不是合法绑定名，所以那 4 个**绑定**保持混淆名，
  只在该模块的 export 表里加一条 `M as default`；引用它们的 36 处 import 相应写成
  `import { default as M }`。
- 5 处引用同时用到同一个桶里来自**两个**实现模块的名字（例如
  `{ isProcessRunning, isSameProcessAsync } = await import(桶)`）。这类无法指向单一模块，
  就把桶的拆分就地展开成两条 import。

验证：

- **结构**：739 个改动文件里 733 个在「按同样规则反向还原」后与原件逐字节相同，证明改动只有
  重命名 / 别名 / 路径 / 自引用展开四种形状，没有顺带改到别的代码。其余 6 个是上述第三类的手工
  拆分与自引用展开（4 个）和 `_index/` 两个数据文件。
- **重命名完整性**：3,104 个名字里，旧名的每一处出现都解析到模块级绑定 ——
  0 处落在别的作用域，也没有漏改（漏改会变 ReferenceError）。
- **全树**：1,420 个文件 0 解析错误；具名 import 全部解析到真实导出；剩余 16 条无法解析的都是
  `_source/` 等**树外**目标，与改动前完全相同。
- **引用类**（逐类与改动前对比，`diff` 为空才算过）：未定义标识符 0 处新增；
  「对模块命名空间取属性」的 8 处误报改动前后完全一致；自引用 0 处（改动前 0、改动后 17，已清零）。
- **运行时**：`bun cli --help` 与改动前 md5 相同（258 行）；`--version`、`-v`、未知参数一致；
  138 个被改名的模块单独加载，导出面按映射完全对应、函数 arity 不变。
  **外加一条退出路径**：在无 key 的沙箱 HOME 里跑 `bun cli < /dev/null`，比较「进程多久退出」。
  改动前约 2–4s 退出、改动中 15s 都不退，现已回到 2–4s —— 这条正是自引用死锁的暴露点，
  只测 `--help`、`--version` 是看不见的（它们走不到 shutdown）。

## 会话 UI 的别名去混淆（试点）

`03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js`（2.5 MB、94,213 行、5,751 个模块级绑定）
里只做了 **import 别名这一层**：把混淆的局部名换成源模块导出的真名。

```
-import { fromEnum as u, logError as h } from "…";
-        i("tengu_background_spawn_failed", { via: u(Ae) }),
+import { fromEnum, logError } from "…";
+        i("tengu_background_spawn_failed", { via: fromEnum(Ae) }),
```

名字不是猜的：源模块那边去桶时已经把名字落到了定义处（`analytics-fields.js` 里就是
`function fromEnum(n)`），所以这一层的名字**可验证**，不是推断。

**为什么只做这一层。** 这个文件里能机械恢复的名字只有这么多：

| 层 | 证据 | 数量 |
|---|---|---|
| **A** | import 的源名字可读 | 551 |
| B | 对象字面量 key → 标识符值 | ~115（有噪声，抽查 `AUTO_DEFAULT_NOTICE_TITLE=>children` 就是错的） |
| C | 具名 FunctionExpression | 92（名字本身也是混淆的） |
| D | 其余模块级绑定 + 4,549 个混淆形参 | ~14,000，**文件内无任何证据** |

没有上游 ground truth：`_source/` 只覆盖第三方库，无 sourcemap，npm 包就是这份产物。
D 层只能靠读代码推断，而在这棵树里一个「看起来合理但错」的名字比混淆名更糟。

规模：551 条别名落地 506 条，**2,163 处引用改名、506 条 import 说明符去掉冗余 `as`**，
涉及 2,003 行 —— 占 94,213 行的 2.1%，占 23,961 个模块级取值位置的 9.4%。

**剩下 45 条为什么没做。** 它们落在 11 个重名组里：bundler 把同一个符号重复 import 了多次
（`randomUUID` 15 次、`basename` 6 次、`dirname`/`relative` 各 4 次、`homedir`/`resolve` 各 3 次、
`mkdir`/`unlink`/`writeSync`/`watch`/`extname` 各 2 次）。都改成裸名会撞出重复绑定，
直接 `Identifier 'randomUUID' has already been declared`。留给 A2：这些重复 import 每组源模块
相同、本来就是同一个绑定，合并成一条即可。

验证：

- **往返**：506 条改名按同一规则反向还原（别名改回混淆名 + 说明符恢复 `X as Y`）后与原件
  **逐字节相同**，证明改动只有「重命名」「去掉冗余 `as`」两种形状。
- **重命名完整性**：0 处模块级引用还指向旧名；2,212 处新名解析到模块级绑定；
  新名 0 处成为自由/全局引用（即没有被嵌套作用域捕获）。
- **外形**：73 个导出 / 2,953 条 import 说明符 / 2,340 个顶层声明，改动前后一致；
  0 个重复的模块级 import 绑定。
- **运行时**：`bun cli --help` md5 与改动前相同（`9b491334…`）；`--version`、`-v`、未知参数一致；
  单独 `import` 该模块，导出面 73 个 key 与改动前完全相同。
- **退出路径**：沙箱 HOME 里 `bun cli < /dev/null`，改动前 2.25–2.74s、改动后 1.54–2.12s
  （噪声范围内，无死锁）。
- **没验的**：只跑了 `--help`/`--version`/退出路径和一次模块加载，没交互式跑真实 REPL 会话；
  9.4% 以外的行未改动，D 层名字仍是混淆的。

一个坑记在这里：最初只查了「目标名是否已是嵌套绑定或自由引用」，漏了「两个局部名映射到
同一个目标名」—— 5 个名字的试验恰好全是唯一名，没暴露，全量跑出语法错误才发现。三类检查现在都在。

## 全树别名去混淆

把试点那套做法铺到整棵树。**两层，都不是猜的** —— 名字已经被写在文件里的某处：

| 层 | 形式 | 例子 | 改名数 | 文件数 |
|---|---|---|---|---|
| **A** | `import { 真名 as X }` | `import { fromEnum as u }` → `import { fromEnum }` | 7,910 | 724 |
| **B** | `export { X as 真名 }` | `class He …` + `export { He as BedrockClient }` | 764 | 266 |

B 层是这次查冲突时冒出来的：`export { He as BedrockClient }` 声明了 `He` 就是 `BedrockClient`，
可信度和 A 层相同。两层合计 **8,674 条改名、812 个文件**，同时去掉
7,910 条 import 与 767 条 export 的冗余 `as`。

规模对比：全树 **104,053 个模块级绑定**，这两层覆盖 **8.3%** —— 和试点的 9.6% 一个量级，
天花板相同（见下面「覆盖不到的部分」）。

**排除掉的**：1,770 条（dupTarget，bundler 把同一符号重复 import，改裸名会撞重复绑定）、
2 条（目标名已是模块级绑定）、2 条（目标名会撞嵌套绑定或自由引用）。

**为什么可以批量**：这个改造只在**单个文件内部**动局部绑定，不改任何 import 路径、不改模块边界。
唯一可能跨文件的是「被改名的局部名被再导出，对外导出名就变了」—— 全树实测：724 个待改名文件里
`export { X }` 裸再导出 **0** 条（bundler 永远把可读名留在导出侧），只有 3 条 `export { X as Y }`，
导出名 Y 保持不变。对比去桶那次要重写 7,436 条跨文件路径、还造出 17 处自引用死锁，这次一个路径都不碰。

验证：

- **逐文件**（812 个全过）：解析；按同一规则反向还原后与原件**逐字节相同**；
  0 处模块级引用还指向旧名；新名 0 处被嵌套作用域捕获；导入/导出说明符数量不变。
- **跨文件（独立脚本，不复用改造代码）**：重新计算全树「文件 → 导出名集合」的映射并对比，
  1,420 个文件**0 个变化** —— 这就是上面那条跨文件保证的直接证据。
- **运行时**：`bun cli --help` md5 与改动前相同（`9b491334…`）；`--version`、`-v`、未知参数一致；
  抽样 63 个被改文件单独 `import`，全部加载成功且导出非空。
- **退出路径**：沙箱 HOME 里 `bun cli < /dev/null`，改动前 2.25–2.74s、改动后 1.29–1.37s，
  无死锁（这条正是去桶时自引用死锁的暴露点）。
- **没验的**：没交互式跑真实 REPL 会话；8.3% 以外的行未改动。

**覆盖不到的部分。** 剩下 ~90% 的模块级绑定（约 5,200 个/文件、全树约 95,000 个）
在文件内**没有任何证据**：`_source/` 只覆盖第三方库，无 sourcemap，npm 包就是这份产物。
要恢复只能靠读代码推断，而在这棵树里一个「看起来合理但错」的名字比混淆名更糟。
另外文件里约 11% 的行是 React Compiler 的记忆化样板（`X[n] !== y` / `(X[n] = y)`），
那部分临时变量命名是白费力气。

还有 1,770 条 dupTarget 留在桌上（占这一层的 18%），集中在最大的 chunk 里 ——
`核心应用-Agent循环.wmzgeczq.js` 适用 699 条、dupTarget 却有 924 条。它们的源模块相同、
本来就是同一个绑定，合并重复 import 即可，但这会失去「按规则反向还原逐字节相同」这个性质，
所以单独留作下一步。

**这次又踩了两个坑，都出在我自己的验证工具上**（改造本身没错）：

1. `rename.mjs` 跳过 import 的 `imported` 位置（正确）却会改 export 的 `local` 位置，
   于是对「import 进来又 export 出去」的符号（如 `import { getWorkspacePersistedTrustKey as tS }`
   + `export { tS as getWorkspacePersistedTrustKey }`）反推出一个未声明的 `export { tS }`。
   改成自己写反向、一遍处理说明符与正文。
2. 反向时 import 是 `imported as local`、export 是 `local as exported`，**两侧顺序相反**，
   用同一条规则写出 267 个假失败。分类型处理后 0 失败。

两个坑都只在反向验证里，正向改造从第一次跑就是对的 —— 但如果不做往返验证，第 2 个坑会以
「267 个文件没验过」的形式蒙混过去。

## 为模块恢复可读导出名

前几轮恢复的名字在文件里**都有证据**：`import { 真名 as X }`、`export { X as 真名 }`。
这一轮处理剩下那一层 —— 模块导出的混淆名在文件内**没有任何证据**，名字只能靠读代码与调用点推断。
做法与两个示范提交一致（`01-核心基础设施/共享小工具-未细化/build-ref-name.js` 的
`getBuildRefName`、同目录 `user-agent.js` 的 `getClientUserAgent`）：

```
- 01-…/chunk-1adkzsnc.js                              + 01-…/max-serialized-array-elements.js
- var gy = 4096;                                      + var MAX_SERIALIZED_ARRAY_ELEMENTS = 4096;
- export { gy };                                      + export { MAX_SERIALIZED_ARRAY_ELEMENTS };
- import { gy } from "…/chunk-1adkzsnc.js";           + import { MAX_SERIALIZED_ARRAY_ELEMENTS } from "…/max-serialized-array-elements.js";
```

规模：**284 个模块、684 条导出名、255 个文件改名，改动 1,056 个文件**。
名字不是猜的 —— 多数有硬证据：仓库自己的 barrel/shim 文件里写着的别名
（`export { Eee as isClaudeAiBearerRejectedError }`）、源码自带的错误串
（`useSession cannot be called outside of a <SessionProvider />` ⇒ `SessionProvider` / `useSession`）、
或用 `var ia = "Monitor"` + 调用点 `{ [ia]: { renderToolResultMessage } }` 这种字面量与用法互相印证。

### 流程：判定交给人读，改写交给脚本

| 步 | 谁做 | 产物 |
|---|---|---|
| 1 候选 | 脚本 | 非第三方、导出名仍混淆的模块，按体积分档 |
| 2 证据包 | 脚本 | 每个模块一份 dossier：完整源码 + 每个引用方的 import 行 + 该导出名的真实调用点（带行号上下文） |
| 3 命名 | 子代理 | 改名计划 JSON `{module, newFileName, renames, why}` —— **不碰仓库** |
| 4 落盘 | 集中式脚本 | 作用域感知改名 + 路径重写 + 同步 `_index/` |
| 5 验证 | 独立脚本 | 见下 |

3 与 4 必须分开：判定要读代码，改写要跨文件，而多个子代理同时改
`核心应用-Agent循环.wmzgeczq.js` 会互相覆盖。子代理只产出计划，改写集中做一次。

**只在证据充分时才改名**是硬规则。看不懂、或调用点语义有歧义就跳过 ——
本仓库的原则是*一个看起来合理但错的名字比混淆名更糟*。实际跳过的包括：
两个导出函数体逐字节相同（无法区分语义）、`return e` 的恒等函数、
`async function EDt(r,o){return 0}` 空桩，以及一个同时被当默认窗口和重试间隔用的常量 `Xw`。

### 机械改写要覆盖的形态

| 形态 | 例 |
|---|---|
| 具名 import | `import { gy } from "…"` |
| 带别名 import | `import { gy as q } from "…"` |
| 再导出 | `export { gy } from "…"` |
| 纯路径（副作用导入） | `import "…"` |
| 动态导入 / 懒加载 | `import("…")`、`import.meta.require("…")` |
| 动态导入解构 | `let { gy: f } = await import("…")` |
| 命名空间绑定 | `var M = await import("…"); M.gy()` |
| 表达式取属性 | `(await import("…")).gy` |

后三类静态 import 检查**看不见**：改不到就是运行时 `undefined`，不报错。
它们由 AST 精确识别，不靠正则。

两个已踩的坑：

1. **混淆名同时是普通局部变量名。** `ia`/`gy`/`Aet`/`G8` 各自只从某一个模块导出，
   但作为函数内局部名散落在几十个别的文件里（`核心应用-Agent循环` 里就有一个无关的
   `function Aet(e,t,r)`）。所以必须解析到绑定（eslint-scope），不能文本替换。
2. **类名在类体内是另一个作用域。** `class zz { static create(){ return new zz() } }`
   里 `zz` 在 eslint-scope 模型中是两个变量（外层 + 类体），类体内的引用解析到**内层**那个。
   只改外层声明的引用，`new zz()` 就变成 `ReferenceError`。第一遍跑就中了这一条
   （`plugin-state-store.js` 的 `new QB()`），现在按「同一个声明节点」把所有同名变量一起收集。

### 验证

- **逐编辑往返**：记录每一处编辑的 `(start, end, text, 原文本)`，反向逐条还原，
  每个被改文件必须与改动前**逐字节相同**。这证明改动只有「改名 / 路径重写」两种形状。
- **导出面**：全树每个文件的导出名集合与计划逐条比对（改名的模块按映射，其余不变）。
- **未定义标识符**：全树前后各解析一遍，新增自由引用必须为 0 处。
  这条抓的是「只改了一半」的悬空引用，静态 import 检查抓不到 —— 上面那个类体内的
  `new QB()` 就是它抓出来的。
- **完整性**：往返证明「没有多改」，但证明不了「没有漏改」（漏掉的位置在反向时同样漏掉，
  正好抵消）。所以另查一遍结果树：没有任何旧名留在会读它的位置上。
- **编译期**：`bun .analysis/check-imports.mjs --runtime` 四类全过。
- **单独加载**：282 个改名模块逐个 `import`，导出面须与计划完全对应（本轮 226/227 成功，
  1 个因引用树外 `_source/` 而跳过，与改动无关）。
- **运行时**：`bun cli --help` md5 与改动前相同（`9b491334…`，258 行）；`--version`、`-v`、
  未知参数一致；沙箱 HOME 里 `bun cli < /dev/null` 的退出耗时与改动前同量级（无死锁）。

### 顺带修掉的一个真 bug

`user-agent.js` 的 `ensureClientAgentEnv()` 调的是 `getUserAgentWithSuffix("harness")`，
但上一次改名只改了声明、没改这一个调用点，于是全树在**启动第一行**就是
`ReferenceError: getUserAgentWithSuffix is not defined`（`cli.js:31`）。

CI 没拦住：`check-imports.mjs` 查的是解析 / 依赖边 / 具名 import 的导出面，
悬空的自由标识符不属于其中任何一类。上面那条「未定义标识符新增 0 处」正是为此加的。

（`AI_AGENT` 已被设成 `claude-code_*` 时这个分支被 `||` 短路，bug 不显形 ——
本地跑 CLI 要 `env -u AI_AGENT` 才看得到。）

## 怎么读

1. 先看 `_index/modules.md` —— 每个模块有哪些文件、各多大。
2. 想看某个功能，进对应目录。例如 `/permissions` 的实现在
   `02-功能模块/权限系统/`：`permissions-ui.0a82g62e.js` 是对话框 UI。
3. 文件内大部分仍是混淆代码 —— 但**字符串字面量、属性名、解构赋值都是原样的**，
   例如 `{ planContent: F, planPath: L } = fe` 直接告诉你 F 是 planContent。
   去桶改造又给被转出过的符号补上了真名：`function adoptSubagentPublishArms(…)`、
   `import { getMainLoopModel as rt } from …` —— 后者把一行里每个混淆名都标注了出来。
4. 交叉参照原始分析：`_index/file-map.json` 里有 chunk id。

## 随行资源（重要）

打包产物不只是 JS。有 **171 个数据文件**（.zst / .md / .txt / .mjs）在运行时按**相对路径**加载，
搬动文件时必须让资源跟着它的**加载方**走：

- **41 个 chunk** 用 `Ke(path, import.meta.dirname)` 读同目录的 .zst/.md
  （如 `chunk-0z426rj0.js` → `./compare.mjs-4b810a57.txt.zst`，一行 wrapper）。
- `chunk-2c9tjhwd.js` **捕获**了 `import.meta.require` 并导出为 `Ae`，
  共 80 个资源按**它所在的目录**解析 —— 即使调用方在别的 chunk 也一样。
- `cli.js` 引用 `./src/plugins/functionHooks/hooks-worker/hooks-worker.js`。这个 worker 是**自带依赖的
  独立 bundle**：目录里除入口外还有它的 10 个依赖文件（`chunk-0t0sve49.js`、`chunk-h4f48kbj.js` …），
  入口里的 `./chunk-*.js` 全部是**同目录**引用，少一个就起不来 —— 且它不在 `cli.js` 的静态依赖图上，
  漏掉时只有真去跑一次 hook 才会发现（CI 的第 4 类检查就是干这个的）。

树已把这些资源复制到各自加载方旁边。改动目录结构时需保持这一点。

## 运行时验证（bun 直接跑，与原 bundle 对比）

| 命令 | 结果 |
|---|---|
| `bun cli --version` | 一致 · `2.1.263 (Claude Code)` |
| `bun cli --help` | **258 行输出逐字节一致** |
| `bun cli --nonexistent-flag-xyz` | 一致 · exit 1 |
| `bun cli -v` | 一致 · exit 0 |

即：1410 个文件、跨 158 个目录的 97,729 条依赖边在运行时全部解析成功。

## CI（import 检查）

上面那些验证都是手工跑一次的。`.github/workflows/import-checks.yml` 把它们里**静态可判**的
那部分固化成 CI，每次 push / PR 跑一遍 —— 脚本 `.analysis/check-imports.mjs`，本地同样一条命令：

```
bun .analysis/check-imports.mjs            静态，不执行树里的代码
bun .analysis/check-imports.mjs --runtime  额外真跑一次 hooks worker
```

四类检查，都是「改动前 0 失败、改动后也必须是 0」的性质：

| # | 检查 | 抓什么 | 运行时的表现 |
|---|---|---|---|
| 1 | **解析**：每个 `.js` 过一遍 `Bun.Transpiler` | 重复绑定、括号不配 | `BuildMessage` |
| 2 | **依赖边**：相对说明符能落到真实文件（静态 / `import()` / `import.meta.require` 字面量） | 搬文件漏了随行依赖 | `ResolveMessage`，或静默挂起 |
| 3 | **导出面**：具名 import 的名字确实在被导入模块的导出里 | **改名只改了一半** | 链接期报缺导出 |
| 4 | **单独入口**（`--runtime`）：真拉起 hooks worker | 入口旁边依赖不全 | worker 起不来 |

第 1、3 类正是 2026-09-17 那次事故的形状：全树别名去混淆把同一文件里两个压缩别名
（`Mb`、`yr`）都落成了 `parseShortId`，重复声明 → 整块文件解析失败。它在运行时只表现为
**卡住不动、10 秒后一句 `Claude Code could not start: BuildMessage` 然后退出**，
`--debug-file` 里连一条 `[ERROR]` 都没有，日志最后一行还停在不相干的插件加载上。

设计上有两点是刻意的：

- **不复用树的改造代码**（沿用上面「独立脚本」的约定），所以它不依赖任何构建产物，
  也不 `import` 树里的模块 —— 检查工具自己坏掉时不会跟着一起坏。
- **导出面用「宽松」判定**：先按行首锚定的 `export {…}` / `export function …` 精确取一遍，
  再全文件兜底扫一遍 `export {…}`，两者有一个命中就算通过。宁可漏报一条坏边，
  也不让 CI 因为漏认一条导出而变红 —— 一个会误报的检查等于没有检查。

当前全绿：1430 个文件 / 40.8 MB / 17,267 条相对依赖边（其中懒加载 301 条）0 失败。
**没检查的**：`import.meta.require` 里非字面量的目标（约 60 处，静态看不见）；
`_source/` 下的第三方原始源码（树外，且部分文件不可读）；`00-第三方库/` 里
`import` 自己 `_source/` 的那种边只查文件在不在、不查导出面。CI 也不跑 `bun cli`——
启动一次要读凭据 / 起遥测，放在 CI 里不稳；这条仍按上面的「运行时验证」手工做。

## 能跑，但不能 `bun build --compile`

上面验证的是 `bun cli` **直接运行**。想把它编译成单文件二进制则**不行**，原因在 `import.meta.require`：

- `import.meta.require` 是 **Bun 专有** API（ESM 里拿 CommonJS `require`），**Node 里不存在**。
- **打包器不把它当一条边**：`bun build` 会把它原样输出，目标模块根本不进包；
  即使另外补一条静态 `import` 把模块拉进包，`--compile` 后所有模块被内联成单个文件，
  `/$bunfs/root/` 下没有对应**路径**，运行时照样 `Cannot find module`。
- 本树有 **367 个调用点**（58 个文件），其中 **528 个文件（37%）只靠懒加载入边被引用** ——
  直接 compile 会集体丢失。

原版二进制没事，是因为它的 chunk 是作为**独立文件**存在于 `/$bunfs/root/` 的。
要改造的话代价不在调用点本身，而在 **55 个 CJS 互操作 getter**（模块加载层）。

完整测量（含改造代价分类、以及一个「压缩代码上不要用正则建调用图」的方法论教训）见
[`BUN-COMPILE.md`](BUN-COMPILE.md)。

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
- **不能 `bun build --compile`。** `import.meta.require` 不是打包器的边，
  528 个文件只靠它被引用；要改造成 `await import` 得先处理 async 传染。见 [`BUN-COMPILE.md`](BUN-COMPILE.md)。
- 818 个文件仍叫 `chunk-<id>.js` —— 它们是急切路径上的混淆块，打包器没保留任何人类名字。
- 第三方库目录里是**打包后的实现**。想换成上游源码，可按版本号 `npm pack`（见 `_index/` 与主图谱）。
