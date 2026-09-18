# 从一个巨型 chunk 里抽出依赖闭合的模块

`extract-closure.mjs`：给一组种子绑定名，把它们的**传递依赖闭包**整体搬到一个新文件，
源文件回引仍被用到的名字。用过的五次：`bundled-cjs-libraries`（前缀）、
`createTranscriptParser.Ryr`、`hook-helper`、`execution-core`、`standalone-tools`。

```bash
OUT=new-module.js SEEDS=someFunction node .analysis/extract/extract-closure.mjs --dump   # 只出 dry 产物
OUT=new-module.js SEEDS=someFunction node .analysis/extract/extract-closure.mjs --apply  # 落盘

# 源文件不是默认那个 chunk 时，加 SRC=<同目录下的文件名>
SRC=execution-core.js OUT=standalone-tools.js SEEDS=a,b,c node .analysis/extract/extract-closure.mjs --dump
```

`closure-report.mjs`：只报告不落盘 —— 种子数量、闭包大小、闭包里有没有环、需要哪些外部
import、chunk 要回引多少。**先用它探路**，闭包里带环或闭包占掉大半个文件时就别抽。

`cycles-report.mjs`：把整个文件的环（强连通分量）全列出来，供人工规划怎么解开。给每个环
的成员、一条最短环（带行号、代码、急切性）、内部急切边、枢纽节点、**删掉哪个节点能让这个
环解体**，以及贪心的最小反馈点集。`SRC=` 指定源文件，`REPORT=` 指定输出。

```bash
SRC=execution-core.js node .analysis/extract/cycles-report.mjs
```

## 必须知道的三件事

1. **引用要按作用域解析**，只保留 `resolved.scope === 模块作用域` 的。按名字文本匹配会把
   「局部变量与顶层绑定重名」算成边 —— 实测边数翻倍、闭包虚涨一倍。
2. **要按「语句」搬，不是按名字搬。** `var a = 1, b = a;` 是一条语句：只搬一个声明符会留下
   语法残缺，按名字逐个删则同一区间被删两次。而且**这个解析器给的声明符范围含尾部分隔符**
   （`Qxt = fbr,` 带逗号、`eAt = pbr;` 带分号），必须剥掉再接。
3. **解构声明符是原子。** `var { initialize: initializeFileWatcherHooks, … } = UAe;` 绑 4 个
   名字却只是**一个**声明符；按「名字数 vs 声明符数」判断会错走拆分路径、留下 `var ;`。
   正确做法：只要有一个绑定名要搬，整条声明符搬走，其余绑定名一并进闭包。

## 自检（这道检查救过命）

落盘前必须同时满足：两个文件都能解析，**且都不出现「改动前不存在」的自由标识符**。
判据是「新增」而不是「非全局」—— 原树里本来就有的自由名（如 `__values`）不算问题，
而 `H_` 这种「以前是 import 进来的」一变成自由名就是 bug（它是 hook-helper 那次
`--include-hook-events` 报 `H_ is not defined` 的根因）。

## 修好的一处（曾经让它漏掉 4 个名字）

多声明符语句里当一个 `var` 的若干声明符分散在闭包内外时（如 `… , Att = { … }, …`），
会留下跨文件悬空引用。根因是**不动点分析的是「整条语句」而不是「实际搬走的文本」** ——
留在 chunk 的兄弟声明符在整条语句里有定义，于是不动点认为不自由、永远不补。
现在不动点改为对 `moveTexts` 实际拼出来的文本做分析，并顺带把「直接看到但按引用方
归属没收到的 import」收进 import 列表。

## 跑起来才会暴露的三类错误（都由 5 MB 那次撞出来）

1. **`Cannot assign to import "X"`** —— 模块级可变槽：声明在一处、赋值在别处
   （`var gpt = null;` … `function set(e){ gpt = e; }`）。声明被搬走、赋值留在原地 →
   ESM 里给 import 赋值是硬错误。**修法**：变量跟赋值点一起搬 —— 扫所有 `isWrite()`
   的模块级引用，把赋值点所在的顶层声明也拉进闭包（那次拉了 50 个 setter）。
   并加了静态检查：chunk 里不许出现「给 import 赋值」。
2. **`Export named 'X' not found in module 'node:path'`** —— 命名空间导入
   （`import * as BC from "path"`）被当成具名导入生成成 `import { BC } from "path"`。
   **修法**：区分 `ns` / `def` / `named` 三种形态。
3. **`export 'X' not found in './新模块.js'`** —— 某个绑定在两个文件里**同时消失**。
   已知特征：`SEED_CUT_AT_EXIT_MESSAGE` 是某条多声明符 `var` 的**续行声明符**
   （原文件 119778 行 `  SEED_CUT_AT_EXIT_MESSAGE =`）。**未定位**。怀疑仍在
   `build()` 的声明符拆分路径上（`isIn` 判定为真、但文本没进 `moveTexts`）。

**三道静态检查全绿、`--help` 仍然是 0 行** —— 这就是这一节的教训：5 MB 量级的搬移，
静态检查必须配一次真实运行，`bun cli.js --help` 的 md5 是最便宜的那道。

## 静态自检不够：5 MB 级的抽取仍会在运行时坏掉

把 `dge` 的闭包（10,008 个绑定 / 5.35 MB）抽成 `execution-core.js` 后，两个文件都
解析通过、都没有新增自由标识符 —— 但 `bun cli.js --help` 从 258 行掉到 **21 行**。

原因不在引用，在**求值顺序**：新模块作为 chunk 的依赖会先求值，那 10,008 个绑定的
顶层代码因此全部提前，而它们中间有依赖 chunk 顶层副作用的（注册表、全局状态），
这类耦合**不体现为标识符引用**，静态检查看不见。

结论：本工具适合**小的、内聚的闭包**（Ryr 49 KB、hook-helper 29 KB、
bundled-cjs-libraries 913 KB 那三刀都成立）。闭包占到文件 70% 以上时会撞上顺序问题，
这时候必须先做顺序分析，不能只看静态检查。

## 可变槽的方向：`pullSetters` 是反的（840 → 10204）

`execution-core.js` 里 41 处 `buildTool({…})`，量下来两极分化：15 个的独立闭包
1.65–5.09 MB（等于整个文件），另外 25 个只有 2–79 KB。中间是 20 倍的断层，
能切的只有后者那 25 个。

第一次跑，闭包直接涨到 **10204 个绑定 = 整个文件**。凶手是不动点里的 `pullSetters`：
它把闭包成员的**每一个外部赋值者**都拉进闭包，而 setter 往往是主干函数
（`shutdownLspServerManager`、`szo`、`Xqr`…），一拉就带出自己的依赖，雪崩。

方向本来就是反的。静态量一下就清楚：闭包里「被源文件赋值」的名字只有 13 个，
其中**闭包内也写它的 = 0 个**。也就是说全是「源文件写、闭包只读」的槽 ——
而 **ESM 的 import 是 live binding**，源文件那边改了，新文件读到的是新值。
所以正确做法是**把槽留在源文件、新文件 import 读**，而不是把 setter 搬过来。

现在的判据：

- 源文件写、闭包只读 → **剔除**（留在源文件，新文件 `import` 它）
- 两边都写 → 真正双向共享的可变状态，静态拆不开，直接失败退出
- 没人写 → 正常搬走

剔除带来的是**双向 import**（新文件 import 源文件的槽，源文件 import 新文件的 476
个名字）。循环依赖本身合法，唯一要守的是：**新文件顶层不能急切读被剔除的槽** ——
新文件先于源文件求值，那时 `var` 还是 `undefined`。这条已做成自检。

结果：闭包 1496 个绑定 / 815 KB / 24 个工具（`SkillTool` 因为被 `szo` 重新赋值，
按规则留在源文件），`execution-core.js` 5.49 → 4.74 MB。

**这条比「闭包大小」更重要。** 上一节说闭包超过文件 70% 会撞求值顺序问题，那没错；
但决定成败的是**方向** —— 闭包要不要回头 import 源文件。这次的闭包 815 KB（15%）
能成，正是因为它除了那 15 个只读槽之外是单向的。

## 量之前先按「声明符」取名字，别按「语句」

找 `buildTool({` 绑定的名字时，先按整条语句取「最近的外层声明」会**取错**：
`var ReadTool = buildTool({…}), GLOB_TOOL_NAME = …, …;` 是一条语句，同语句的兄弟
声明符共享同一个 `start/end`，遍历 Map 时互相覆盖，拿到的是最后一个兄弟的名字
（`INNER_TOOL_USE_ID_SUFFIX`、`EGo` 这种一眼假的），而且大小统计会重复计整条语句。
正确做法是记每个 `VariableDeclarator` 节点的范围再二分。
