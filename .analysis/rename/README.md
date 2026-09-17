# rename —— 给模块恢复可读导出名的工具链

配合 `../check-imports.mjs` 使用：那个脚本负责**守住**这棵树（解析 / 依赖边 / 导出面），
这个目录负责**改造**它（把仍混淆的导出名换成可读名、改文件名、同步 `_index/`）。

改造方法见 README 的 [为模块恢复可读导出名](../../README.md#为模块恢复可读导出名) 一节。
这里的脚本就是那五轮改造用的同一套，未改逻辑，只把硬编码路径换成了相对推导。

## 依赖

`acorn` + `eslint-scope`（及其传递依赖 `esrecurse` / `estraverse`），
已放在仓库根的 `node_modules/` 下 —— 那里本来就是这棵树的依赖目录，且已被
`check-imports.mjs` 跳过。升级：`npm i acorn eslint-scope` 后在根目录装。

**不要**在本目录下装 `node_modules`：`check-imports.mjs` 的 `SKIP_DIRS` 只跳过
`node_modules` / `_source` / `.git`，不跳 `.analysis` —— 装在这里会被它当成
被检查的树的一部分，`1430 个文件` 那个基准就废了。
（本目录的脚本是 `.mjs`，而 `check-imports.mjs` 只收 `.js`，所以脚本本身不会被扫到。）

## 路径

- `ROOT` —— 仓库根，由脚本位置（`.analysis/rename/` 的上两级）推导；换一棵树跑用
  `TREE_ROOT=<path>` 覆盖。
- `WORK` —— 中间产物目录，默认 `.analysis/rename/.work/`（候选表 / 批次 / 备份 / 快照都在这里，
  不写进仓库正文）。用 `RENAME_WORK=<path>` 按轮次分开。

## 工作流

```bash
cd .analysis/rename

# 1 扫出「仍导出混淆名」的候选模块
node candidates.mjs                     # -> $WORK/candidates.json

# 2 切成批次，每批一份证据包（模块源码 + 引用方真实调用点）
MIN_BYTES=0 MAX_BYTES=4096 PER_BATCH=14 MIXED=1 \
  OUT_DIR=$WORK/batches node make-batches.mjs

#   大 chunk（聚合 chunk）走另一条：按声明偏移切片
node bigfile-batches.mjs "03-…/核心应用-Agent循环.wmzgeczq.js" 180000 $WORK/bigfile

# 3 命名（这一步是判断，交给 agent；子代理只写计划 JSON，不碰仓库）
#    规则见会话里用的 NAMING-RULES.md / SLICE-RULES.md
node lint-plans.mjs $WORK/plans/batch-01.json $WORK/batches/batch-01.json

# 4 合并 + 落盘
node apply.mjs $WORK/plans/wave.json $WORK/wave.json          # 加 --dry 只预览

# 5 验证
node verify.mjs $WORK/wave.json $WORK/backup
```

## 脚本

| 脚本 | 作用 |
|---|---|
| `paths.mjs` | `ROOT` / `WORK` / `walk` / `loadTree`。其余脚本都从这里取 |
| `lib.mjs` | 解析 + 作用域分析。`moduleBindingRefs` 处理「类名在类体内是另一个作用域」，并按 (scopeManager,name) 记忆化 —— 不做这一步，`会话UI` 那种 4 万作用域的文件每查一个名字都要全扫一遍 |
| `index.mjs` | 全树引用边索引：谁 import 谁、以什么形态（具名 / 别名 / 动态 / 懒加载 / 再导出） |
| `mangle.mjs` | `isMangled()` 判定「这名字还是不是混淆名」；`looksLikeManglerOutput()` 拦新名照抄混淆形状。**这两个判定出过错，见下** |
| `engine.mjs` | 计划 → 编辑集。作用域感知改名 + 路径重写 + 覆盖四种静态 import 看不见的取属性形态 |
| `dynamic.mjs` | `(await import(m)).x` / `let {x:y} = await import(m)` / 命名空间绑定 / `import.meta.require(m).x` |
| `dossier.mjs` | 证据包：模块源码 + 引用方真实调用点（贪心选覆盖最多名字的引用方） |
| `bigfile-batches.mjs` | 聚合 chunk 按**导出名声明偏移**切片，每片一份 dossier |
| `candidates.mjs` | 候选筛选 + 产出 `candidates.json`（lint 的 `mangled` 白名单也来自它） |
| `lint-plans.mjs` | 计划校验：名字必须是该模块当前仍混淆的导出、新名不能是混淆形状、跨模块同名要真冲突才拒 |
| `apply.mjs` | 落盘：改名 + 改文件 + 同步 `_index/`。`--dry` 只预览。备份到 `$WORK/backup` |
| `verify.mjs` | 逐编辑往返（逐字节）/ 解析 / 导出面 / 未定义标识符 / 残留引用 |
| `snapshot.mjs` | 逐文件结构快照（导出名集合、自由标识符、sha） |
| `restore.mjs` | 用备份回滚一次落盘（改错了或要重来） |
| `loadcheck.mjs` | 每个改名模块单独 `import`，导出面须与计划一致。**要用 `bun` 跑**，`node` 缺 `import.meta.require` |
| `exitpath.mjs` | 沙箱 HOME 里量 CLI 退出耗时 —— 自引用死锁只在这里暴露 |
| `unit-test.mjs` | 改写器 9 个分支的单元测试（含自引用类、别名收敛、动态解构） |

## 两个判定出过错，改名前先看这里

`mangle.mjs` 的判定是整条流水线的闸门，**它错一次，候选池就少一批模块**（不是少几条改名）：

1. `^[a-z]+[A-Z][a-z]+$`（本意放行 `fromEnum` 式 camelCase）同时匹配 3 字符的
   `uWe`/`pSe`/`kYn`；带数字的 `b9e`/`t7t`/`q0e` 一条规则都不匹配而漏判。
   实测被误判为「已可读」的名字里 2,355 个长度 ≤ 5。改成反向判定后
   候选模块 430 → 470，「导出名全混淆」49 → 400。
2. `looksLikeManglerOutput` 的 `^[a-z]{1,2}[A-Z][a-z]{0,2}$` 拦住了
   `isWsl`/`isMac` 这类带前缀的短名；后加前缀白名单（`is`/`get`/`set`/`has`/…）。

改动判定后**务必重新跑一遍 `candidates.mjs`**，否则 lint 用的还是旧白名单。

## 已知边界

- **只改导出名。** 非导出的模块级绑定（聚合 chunk 里 16,382 个 vs 导出 2,423 个）
  改了没有跨文件效果，是另一件更大事，不在范围内。
- **`_index/file-map.json` 只能按文本改**，不能用 `JSON.stringify` 重写：
  那个文件是 Python dumper 产的，含 `1.0`/`15.0`，JS 会写成 `1`/`15`，
  整文件重写会多出约 170 行假改动。`apply.mjs` 里就是这么做的。
- **文件里约 11% 的行是 React Compiler 的记忆化样板**（`X[n] !== y` / `(X[n] = y)`），
  那部分临时变量命名是白费力气。
