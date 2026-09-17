# `import.meta.require` 与 `bun build --compile`

**结论先说：这棵树能用 `bun cli` 直接跑（README 已验证），但不能 `bun build --compile` 成单文件二进制。**
原因不是路径写错了（342 条路径全部改写正确），而是 `import.meta.require` **不是打包器的一条边**。

## `import.meta.require` 是什么

Bun 专有 API：在 ESM 模块里拿到 CommonJS 的 `require`。**Node 里没有这个属性**。
本树共 **367 个真实调用点**，另有 11 处只在注释/字符串里被提及（不计），分布在 58 个文件。

参数全是相对路径，三种写法（都已在重组时改写正确）：

| 写法 | 数量 | 说明 |
|---|---:|---|
| `import.meta.require("./x.js")` | 301 | 字面量 |
| `import.meta.require(` + 换行 | 约 40 | 同一调用被格式化折行 |
| 裸调用、丢弃返回值 | 少量 | 纯预加载 |

它**不是 `bun build` 生成的**。实测：CJS 源码里的 `require()`，bun 输出的是 `__commonJS` 包装函数，
不会产出 `import.meta.require`。所以它来自上游源码/构建流水线，是这个分发形态表达「懒加载」的方式。

## 为什么 compile 处理不了（bun 1.3.14 / macOS arm64）

| 实验 | 结果 |
|---|---|
| `bun build ./t1.js`（文件里有字面量 `import.meta.require`） | `Bundled 1 module`，产物 **74 字节 = 源码逐字输出**，目标模块没进包 |
| 同上加 `--splitting` | 仍然 1 module，不产 chunk，一字不改 |
| 先补一条静态 `import "./tree/x.js"` 强制入图再 compile | `Bundled 3 modules` —— 模块**确实进包了**，运行时**照样** `Cannot find module './tree/x.js' from '/$bunfs/root/app'` |
| `--compile --splitting` / `--target=bun` | 同样报错 |

第三行是决定性的：**即使目标模块被内联进了包，`import.meta.require` 依然找不到它** ——
`--compile` 把所有模块内联成单个 JS 文件，`/$bunfs/root/` 下不存在 `tree/x.js` 这个**路径**，
而 `import.meta.require` 是按路径去文件系统找的。

> 一个陷阱：把源码留在 cwd 里测试会**假阳性**。二进制会在当前目录摸到那个 `.js` 文件并正常跑，
> 看起来像成功了。必须把源码挪走再测。

## 这棵树里有多少文件依赖懒加载

```
js 文件总数                 1420
无任何静态入边的文件           541
  其中只有懒加载入边的         528
  静态和懒加载入边都没有的      13
静态入边总数                 15,951 条
懒加载入边总数                1,394 条
```

即：**528 个文件（37%）只靠 `import.meta.require` 被引用**。直接 `--compile`，它们一个都不会进包。

（以上为 2026-09-16 在 1420 个 js 文件的树上实测；树在变动，引用前建议重跑 `.analysis/` 下的脚本核对。）

## 原版二进制为什么没事

原版那些 chunk 是作为**独立文件**存在于 `/$bunfs/root/` 里的，`import.meta.require("./chunk-X.js")`
按路径能摸到。上游的构建不是「单入口 + 全内联」，而是先 split 出 chunk 文件、再把这些文件当资源一起嵌进二进制。
**是分发形态的差别，不是代码的 bug。**

## 如果一定要 compile：改造代价测量

唯一验证过的修法是 `import.meta.require("X")` → `await import("X")`（实测 `Bundled 2 modules`，编译后正常）。
但这是**同步变异步**的语义改动，不能机械替换。366 个调用点逐点分类：

| 类别 | 调用点 | 需要改签名的不同函数 |
|---|---:|---:|
| A 已在 async 函数里 —— 加 `await` 即可 | 22 | 0 |
| B 模块顶层 —— ESM 顶层 await | 141 | 0 |
| C-getter 惰性模块访问器 | 62 | **55** |
| C-real 真业务函数 | 102 | **70** |
| D 类字段 / 静态块 | 1 | 1 |
| E 简洁箭头体 | 39 | 39 |
| **合计** | **367** | **125** |

- **免费 163 处（44.4%）**；需要动函数签名的 204 处（55.6%），落在 **125 个不同函数**上。
- C-real 的 70 个函数体量：`<1KB` 38 个、`1–10KB` 25 个、`10–100KB` 5 个、`>100KB` **2 个**
  （`runHeadless.p72d7p8s.js` 里有个 **294,734 字节** 的函数 `_y`，4 个调用点都在它里面）。
- E 类是 `x => import.meta.require(...)` 这种简洁箭头体：箭头本身要变 async，
  是否继续传染取决于谁消费这个箭头（`.map` / `.filter` / 回调），**静态判不了**。

### 真正的成本在那 55 个 getter

主 chunk 里那批 C 起点不是业务函数，是 **Bun 的 CJS 互操作惰性访问器**：

```js
function Tdt() { return import.meta.require(".../mcpClientModule.4cyej0np.js"); }
function e4o() { return Tdt().mcpClientErrorClassificationModule(); }
function t4o() { return Tdt().mcpClientModule(); }
function Z2n() { return Tdt().mcpDirectoryReadModule(); }
```

`Tdt` 被几十个一行包装调用，那些包装又被全树调用。**把这层改 async，等于把模块加载层改 async** ——
它们位于全树最公共的一层。所以这条路的成本不在那 341 + 312 个调用点本身。

## 附：为什么这里算不出「传染范围」

想量「改一个函数会连带牵扯多少个调用方」，需要一张函数级调用图。**在压缩代码上用名字建图不可靠**，
本次实测的伪影链：

1. 首轮全树闭包给出 **18,766 / 28,933（64.9%）**，但 23 个起点的闭包大小几乎完全相同
   （9,347–9,352）—— 真实传染不可能这么齐，这是「全部汇进同一个连通块」的伪影签名。
2. 诊断 `tls` 的「调用者」，看到的是 `bB.tls.ConnectionEnd.client`、`mA.CipherSuites` ——
   那是 **Node 内置 `tls` 模块**。标识符正则把**属性名**也当成了变量引用。
3. 排除属性名后降到 5,665，但 23 个起点**仍然**全部给出 5,661–5,665，伪影签名还在。

根因：压缩后的名字空间太挤。`p`、`tls` 这类名字同时是模块级函数名、别人的局部变量名、Node 内置模块名。
要真做闭包，得上能解析作用域的 JS 解析器，**不能用正则**。

（扫描脚本在仓库外的 `.analysis/`：`async_scope3.py` 出阶段一表格（可信）、
`c_agg.py` 按不同函数聚合、`async_diag.py` 是伪影诊断。阶段一不依赖调用图，数字可用；
阶段二/三的闭包数字**不要引用**。）

## 实操建议

- **想读代码 / 想跑起来**：用 `bun run`，不要 compile。树里路径都改写正确、文件都在磁盘上，
  `import.meta.require` 在 bun 运行时是原生支持的 —— **能跑，只是不能编译成单文件二进制**。
- **一定要 compile**：先做 `import.meta.require` → `await import` 改造，并处理 async 传染。
  建议先拿一个叶子 chunk 试点，实测 async 传染的实际范围再决定。
