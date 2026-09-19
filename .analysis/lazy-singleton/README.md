# 惰性单例块 —— 恢复 `new j(() => new X())` 里的类名

## 这一轮解决什么

仓库里 378 处这种形状（`j` 307 处、`Gt` 71 处）：

```js
class s {                                  // ← 小括号里的混淆名：本文件内非导出
  #t = new Set();
  #e = new Map();
  claim(t) { ... }
  claimIfChanged(t, e) { ... }
}
var claimRegistriesByHost = new j(() => new s());   // 持有者变量
function getClaimRegistry() {                       // 访问器（多数已可读）
  return claimRegistriesByHost.of(B().host);
}
```

`j` / `Gt` 是同一个族里的「键控惰性单例持有者」，都从
`00-第三方库/lodash/lodash.2x3q7cfh.js` 导出（那个 chunk 是聚合产物，里面混着应用代码，
不只是 lodash）：

- `class j` —— `of(key)` 按任意 key 记忆化
- `class Gt` —— 同上，另加 `peek(root)` / `drop(root)`，按 `e.root` 记忆化
- `bi(H)` = `H.of(y.host)` —— 「取本 host 的单例」的简写

`mangle` 之后的形态就是 `new j(() => new X())`：**小括号里的 `X` 是这一轮要恢复的名字**。

## 为什么这一类值得单独做

`X` 是**本文件内非导出的模块级绑定**——改名不跨文件，是风险最低的一类改名。
而证据往往极硬：文件已经人工命名过（`host-claim-registry.js`）、
持有者变量多数已可读（`claimRegistriesByHost`）、访问器几乎总是已可读
（`getClaimRegistry`）。三处独立证据指向同一个名字。

**这一类改名对运行时是零影响**：没有导出面变化、没有依赖边变化、没有跨文件引用。

## 普查结果（2026-09-19）

| 项 | 数 |
|---|---|
| 全树 `new <Ctor>(() => …)` 命中 | 938 |
| 其中 `new Promise(…)`（噪声） | 540 |
| **`new j(…)` / `new Gt(…)`** | **378** |
| thunk 体正好是 `new X()` 的 | 330 |
| 去重后的 (文件, 体内类名) 组 | 325 |
| 其中 `X` 是本文件内**非导出**绑定 | **306** |
| `X` 是导出绑定 | 7 |
| `X` 解析不到（自由全局） | 12 |
| 涉及文件 | 139 |

文件分布头部（按**归本轮管的组数**）：`execution-core.js` 69 组、
`认证-OAuth登录.419zdfz3.js` 21 组、`核心应用-Agent循环.wmzgeczq.js` 18 组。
（`execution-core.js` 的命中是 91 处，去重成 69 组。）

## 顺带查到的一件事：`j` / `Gt` 自己永远不会被改名

`.analysis/rename/candidates.mjs` 里有这一行：

```js
if (rel.startsWith("00-第三方库/")) continue;
```

**整个第三方库目录被排除在导出名候选池之外**。`j` 和 `Gt` 是**导出名**、
378 个调用点，本来完全符合那套工具链的适用范围，却因为住在 lodash 那个聚合 chunk 里
而永远进不了候选池。它们是这一族里杠杆最大的一次改名，但属于导出名改名
（要用 `.analysis/rename/`，且得先放开那条 `00-第三方库/` 过滤），不在本轮范围内。

## 工具链

```bash
cd .analysis/lazy-singleton

node census.mjs --stats        # 1 普查全树形状          -> .work/census.json
node classify.mjs              # 2 判定体内类名是哪种绑定 -> .work/classify.json
node dossier.mjs --pilot       # 3 出证据包              -> .work/dossier/*.md
node lint-plans.mjs <plan>     # 4 计划校验 + 覆盖度报告
node apply-local.mjs <plan> <manifest> [--dry]   # 5 落盘（+ 备份 + manifest）
node check-local.mjs <plan>    # 6 本流程专属三道校验
```

外加复用 `.analysis/rename/` 的既有闸门（见下）。

| 脚本 | 作用 |
|---|---|
| `census.mjs` | 全树找 `new <Ctor>(() => …)`，记录 callee / 体内 `new` 出的类 / thunk 体文本 |
| `classify.mjs` | 判定体内那个类名是 `local` / `export-local` / `imported` / `global` —— 只有 `local` 归本轮管 |
| `dossier.mjs` | 证据包：类声明全文 + 构造点上下文 + 该类/持有者的全部引用行 |
| `lint-plans.mjs` | 计划校验（旧名必须是本文件非导出绑定、新名形状与撞名）+ **覆盖度** |
| `apply-local.mjs` | 落盘。**复用 `engine.mjs` 的 `planEdits`/`splice`**，把 importers 传空 Map，于是走的是同一个改写器 |
| `check-local.mjs` | [A] 引用点守恒 [B] 旧名残留 [C] 类名可见性风险 |

`NAMING-RULES.md` 是给命名 agent 的规则（证据优先级、铁律、反面例子）。

## 三道专属校验为什么必须有

`apply.mjs` 的 `planEdits` 是为**导出名**改名写的：改完模块里的绑定后，它会去改导入方。
本轮改的是**非导出**绑定，导入方那边没有对应物 —— 所以
**如果计划里混进一个导出名，导入方不会被同步，树会静静地断掉**。

`apply-local.mjs` 的闸门 2 就是拦这个：旧名是导出名就直接整体拒绝落盘。
`lint-plans.mjs` 再拦一道。

另两道针对这一轮特有的失败模式：

- **[A] 引用点守恒**：改名前后该绑定的引用行号集合必须逐个相同。少了是漏改，
  多了是撞名把别的引用捕获了。比「解析通过」强得多——漏改一处通常仍然能解析。
- **[C] 类名可见性**：类改名会改 `X.name` / `constructor.name` 的运行时取值。
  实测全树的 `constructor.name` 只用于比 `"Buffer"` / `"Object"` 或拼日志，`
  .name === "<短串>"` 全是键盘/DOM 事件名，**没有一处拿混淆形状的类名做判定**。

## 验证闸门（落盘后逐条跑）

| 闸门 | 基准（2026-09-19 立） |
|---|---|
| `bun cli.js --help` | 258 行 · md5 `9b491334c31a426dd7e35393f0a9aaaa` |
| `bun .analysis/check-imports.mjs` | 解析 / 依赖边 / 导出面 3/3 |
| `node .analysis/check-undef.mjs` | 新引入悬空引用 0 |
| `node .analysis/rename/verify.mjs <manifest> <backup>` | 往返逐字节 / 解析 / 导出面 / 标识符 |
| `node check-local.mjs <plan>` | 引用点守恒 / 旧名残留 / 类名可见性 |

`verify.mjs` 能直接吃本流程的 manifest（同一种形状）。它的第 4 节「残留引用」
对本轮是空的（非导出名没有导入方），所以本轮的完整性靠 `check-local.mjs` 的 [A] 保证。

## 试点结果（2026-09-19）

试点取「≤3KB 且只有 1 组」的 22 个小文件 —— 证据最干净的一档。
命名 agent 给出 **17 个文件 / 32 个改名**，跳过 5 个：

- 证据为零（1 个）：文件是 chunk 哈希名、无导出、无访问器、持有者声明后从未被引用
- 词头无锚点（1 个）：域能确定（按 site 去重上报 dead-probe tick），但
  `…Sites` / `…Registry` / `…Probes` 三者同样合理 —— 按「错名字比混淆名更糟」跳过
- 已被冒烟计划覆盖（3 个）：`host-claim-registry.js` / `worktree-state-store.js` /
  `ink-instance-registry.js`，agent 有意不重复列入，并在文中给出了与冒烟计划一致的名字

合起来是 **20 个文件 / 36 个改名**，全部落盘。

### 闸门（逐条实跑）

| 闸门 | 结果 |
|---|---|
| `bun cli.js --help` | 258 行 · md5 `9b491334c31a426dd7e35393f0a9aaaa` —— **与基准逐字节相同** |
| `bun .analysis/check-imports.mjs` | 解析 / 依赖边 / 导出面 3/3 |
| `node .analysis/check-undef.mjs` | 新引入 0（见下方陷阱） |
| `node .analysis/rename/verify.mjs` | 往返 20/20 逐字节还原 · 解析 1437/1437 · 导出面一致 · 新增未定义标识符 0 · 残留引用 0 |
| `node check-local.mjs` | 引用点守恒 36/36 · 旧名残留 0 · 无类名可见性风险 |
| `node .analysis/rename/exitpath.mjs` | `exit=1`（非 TIMEOUT，无自引用死锁）；A/B 中位数 1.74s vs 1.84s，噪声内 |

### 落盘时踩到的坑（**都在工具链里，不是树的问题**）

1. **`check-local.mjs` 的旧名残留扫描用文本匹配，假阳性不断**：单字母/双字母名会在
   英文所有格（`Anthropic's` 的 `s`）、版权注释（`// (c) Anthropic`、`as a Beta product`
   里的 `a`）、正则字面量（`[\da-fA-F]` 里的 `da`、`[a-z]` 里的 `z`）、属性位置
   （`et.sh` / `o.sh` / 对象键 `sh:`）里撞上。前后 lookaround 补 `'` `’` `#` 只解决了一半，
   正则与属性位置必须**用 AST 挖掉**（`blankMask`）。
   真正可靠的是 `[A] 引用点守恒` —— 它是作用域感知的，485/485 逐个守恒。
   `[B]` 只是补充层，别让它当主闸门。
2. **`verify.mjs` 的原型链下标**（第 3 个潜伏 bug，前两个见 `../rename/README.md`）：
   `plan.renames[n] ?? n` 在导出名是 `toString` 时命中 `Object.prototype.toString` ——
   `??` 兜不住函数，于是把函数当成「新名字」塞进期望值，报出一个假的导出面变化。
   lodash 那个聚合 chunk **恰好导出 `toString`**，而它第一次进计划表就是这一轮。
   同款模式在 `../rename/combine.mjs` 和本目录 `merge-plans.mjs` 里也有，三处一起改成
   `Object.hasOwn`。
3. 更正上一轮记错的一条：`check-undef.mjs` 那次「新引入」**不是**它没跳过 `.analysis`，
   而是 **oxlint 尊重 `.gitignore`** —— 给本目录加上 `.gitignore`（`.work/`）之后，
   同一份数据就报 0 处了。`.analysis/rename/.work/` 有自己的 `.gitignore`，
   这就是历轮没踩到的原因。


### 命名 agent 提出的两条可复用判据

- 树里存在 **15 处「文件名 PascalCase == 类名」**的真实配对
  （`per-class-instance-registry` → `PerClassInstanceRegistry`、
  `plugin-state-store` → `PluginStateStore`、`goal-proposal-state` → `GoalProposalState` …），
  坐实了「文件名 → 类名」这条证据链
- 持有者被改名的唯一先例 `inkInstanceRegistriesByHost` 定下了本轮的持有者风格：
  `<类名复数 lowerCamel>ByHost`（按 host/会话键控的）；非键控的（访问器走 `bi(holder)`）
  用 lowerCamel 名词（`diagnosticsLog`、`analyticsEventQueue`）

## 展开时的规模

`node dossier.mjs --all --max-groups=15 && node make-batches.mjs --max-bytes=110000`

140 片 / 134 个模块 → **11 批**，每批 ≤107KB —— 即约 11 个命名 agent。
大模块（`execution-core.js` 69 组）会被切片，同一文件的多片可能落在不同批，
所以有 `merge-plans.mjs` 合并：同文件两份计划能并，同名冲突会报错而不是静默覆盖。
