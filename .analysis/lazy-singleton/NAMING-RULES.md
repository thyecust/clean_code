# 惰性单例块命名规则

## 这一轮要恢复的是什么名字

仓库里 378 处这种形状（`j` / `Gt` 是同一个「键控惰性单例持有者」类，从 lodash 那个聚合
chunk 里导出）：

```js
class s {                         // ← 要改名的：本文件内非导出的类
  #t = new Set();
  claim(t) { ... }
}
var claimRegistriesByHost = new j(() => new s());   // ← 持有者变量（可能已可读、可能仍混淆）
function getClaimRegistry() {                       // ← 访问器（多数已可读，是主要证据）
  return claimRegistriesByHost.of(B().host);
}
export { claimRegistriesByHost, getClaimRegistry };
```

**只改本文件内、且没有导出的模块级绑定**（类和持有者变量）。导出名不归这一轮管 ——
改了导出名而不同步导入方，树会断。证据包里已经标好了哪个能改。

## 输出的 JSON

```json
[ { "module": "<仓库相对路径，与证据包标题完全一致>",
    "renames": { "<旧混淆名>": "<新可读名>" },
    "why": "<一句话，引用你实际看到的证据>" } ]
```

整份证据包（一个文件）里如果一个都没把握，**就整个跳过，不输出该文件**。

## 持有者变量怎么定（**规则修正，2026-09-19 展开时由命名 agent 逼出来的**）

原规则说「按 host/会话键控的一律 `<类名复数>ByHost`」。**这条在被切片的大文件上是错的** ——
正确的是**跟随本文件已有的可读持有者**：

```
execution-core.js 里已恢复的持有者：
  laptopDirSyncRegistries    = new j(...)   .of(B().host)    ← 键控，不带后缀
  contextBudgetTracker       = new Gt(...)  .of(B())         ← 键控，不带后缀
  promptCacheTrackerStore    = new Gt(...)  .of(B())         ← 键控，不带后缀
  narrationStateStore        = new Gt(...)  .of(e.session)   ← 键控，不带后缀

host-claim-registry.js 里已恢复的：
  claimRegistriesByHost      = new j(...)   .of(B().host)    ← 键控，**带**后缀
```

两个文件两种惯例，硬套一种会让那个文件和它自己已有的名字打架。所以：
**先看本文件已有的可读持有者怎么起名，跟着它。** 本文件一个先例都没有时，才用
`<类名复数>ByHost`（键控）/ lowerCamel 名词（进程级）。

（大文件切片后由多个 agent 命名时，这条尤其要紧 —— 4 个 agent 里只要有 1 个用全局规则，
同一个文件里就会出现两种风格。展开时的实况：`execution-core.js` 45 个持有者里
21 个带 `ByHost`、24 个不带，事后用 `normalize-holders.mjs` 归一到本文件惯例。）

## 取用的三种形态（决定「进程级 / 按 host / 按会话」）

| 形态 | 含义 |
|---|---|
| `bi(H)` | `H.of(y.host)` —— **启动期**的 host，一进程一个 → 实质是进程级单例 |
| `H.of(B().host)` | 当前**会话**的 host |
| `H.of(B())` / `H.of(e.session)` | 按会话上下文对象 |

`B()` = `C()?.session ?? y`（lodash 聚合 chunk 里）。注意 `bi(H)` 和 `.of(B().host)`
**不是同一把键**：前者是启动期的，后者跟着会话走。

## 证据从哪来（补充：别只看证据包）

**兄弟聚合 chunk 里留着调用方的可读函数名。** 执行核心被切片成
`execution-core.js` + `核心应用-Agent循环.wmzgeczq.js` 之后，后者的
`trackPendingWrite` / `recordCacheHeartbeatUserInput` / `readHistoryEntries` /
`killAllLiveShellCommands` 这些**可读的包装函数**，直接把前者里访问器的语义说了出来。
同一文件的调试串也是硬证据：`agentProcessRegistry: killing ${...} process group(s)`
一句话就定死了类名。**先 grep 本文件的字符串字面量，再去看调用方。**

## 命名怎么定

类名是**名词**（PascalCase），说的是这个单例**是什么**，不是它干什么：

| 证据 | 推出的名字 |
|---|---|
| 文件名 `host-claim-registry.js` | 类 → `HostClaimRegistry` |
| 文件名 `worktree-state-store.js` | 类 → `WorktreeStateStore` |
| 持有者 `claimRegistriesByHost` + 访问器 `getClaimRegistry` | 类 → `HostClaimRegistry` |
| 持有者 `inkInstanceRegistries` + 访问器 `getInkInstanceRegistry` | 类 → `InkInstanceRegistry` |

**证据优先级**（越靠前越硬）：

1. 文件名 —— 目录重组时已经人工命名过，几乎总对得上
2. 已可读的**访问器函数名**（`getXxxRegistry` / `getXxxStore` / `getXxxTracker`）——
   把动词去掉就是类名
3. 已可读的**持有者变量名**（`claimRegistriesByHost` 是复数集合 → 单数化成类的名字）
4. 类自己的方法名与字段名（`claim` / `has` / `claimIfChanged` → 「认领登记表」）
5. 调用点（证据包里的构造点上下文）

持有者变量**仍混淆且未导出**时一并改名：camelCase 名词，与该类的单复数关系保持一致
（类 `HostClaimRegistry` 的持有者 → `hostClaimRegistryByHost` 或沿用已可读的同族命名习惯）。

## 铁律

1. **只改证据包里标了「本文件内非导出」的名字。** 标了「已可读/已导出，不改」的绝对不碰。
2. **证据不足就不改。** 仓库自己的原则：*一个看起来合理但错的名字比混淆名更糟*。
   **跳过是正确答案，不是失败，不要凑数。**
3. 新名长度 ≥ 5、不能是混淆形状（`Foo` / `PMn` / `x`）、不能是无信息量的
   `data` / `thing` / `helper` / `manager`。
4. 新名不能与该文件里**任何**已存在的标识符重名（lint 会拒，先在证据包里自查）。
5. 同一文件内两个旧名不要改成同一个新名。
6. 类名别加 `Singleton` 后缀 —— 全树都这么写反而没信息量。
   类说的是「是什么」（`HostClaimRegistry`），单例性由 `new j(() => …)` 表达。

## 一个反面例子

类里只有 `last = null; record(s) { this.last = s; }`，文件名 `foo.js`，没有访问器、
没有已可读的持有者 —— 光凭 `record` 推不出是「记录什么的」。**这种就该跳过**，
不要看着 `record` 就写 `RecordStore`。
