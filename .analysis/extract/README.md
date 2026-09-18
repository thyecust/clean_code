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

## 已知没修完的一处

多声明符语句里，当一个 `var` 的若干声明符分散在闭包内外时（如 chunk 76131 行那条
`… , Att = { … }, …`），切分后仍可能留下跨文件悬空引用。不动点循环会补进大部分，
但这一类还会漏 —— 抽 5 MB 级别的闭包时必现。小闭包（Ryr / hook-helper 那个量级）不受影响。
