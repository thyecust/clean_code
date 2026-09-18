# 从一个巨型 chunk 里抽出依赖闭合的模块

`extract-closure.mjs`：给一组种子绑定名，把它们的**传递依赖闭包**整体搬到一个新文件，
chunk 侧回引仍被用到的名字。用过的三次：`bundled-cjs-libraries`（前缀）、
`createTranscriptParser.Ryr`、`hook-helper`。

```bash
OUT=new-module.js SEEDS=someFunction node .analysis/extract/extract-closure.mjs --dump   # 只出 dry 产物
OUT=new-module.js SEEDS=someFunction node .analysis/extract/extract-closure.mjs --apply  # 落盘
```

`closure-report.mjs`：只报告不落盘 —— 种子数量、闭包大小、闭包里有没有环、需要哪些外部
import、chunk 要回引多少。**先用它探路**，闭包里带环或闭包占掉大半个文件时就别抽。

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

## 静态自检不够：5 MB 级的抽取仍会在运行时坏掉

把 `dge` 的闭包（10,008 个绑定 / 5.35 MB）抽成 `execution-core.js` 后，两个文件都
解析通过、都没有新增自由标识符 —— 但 `bun cli.js --help` 从 258 行掉到 **21 行**。

原因不在引用，在**求值顺序**：新模块作为 chunk 的依赖会先求值，那 10,008 个绑定的
顶层代码因此全部提前，而它们中间有依赖 chunk 顶层副作用的（注册表、全局状态），
这类耦合**不体现为标识符引用**，静态检查看不见。

结论：本工具适合**小的、内聚的闭包**（Ryr 49 KB、hook-helper 29 KB、
bundled-cjs-libraries 913 KB 那三刀都成立）。闭包占到文件 70% 以上时会撞上顺序问题，
这时候必须先做顺序分析，不能只看静态检查。
