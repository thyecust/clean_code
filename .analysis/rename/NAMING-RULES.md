# 命名员规则（给模块的导出名起可读名字）

仓库 `/Users/game-netease/clean_code` 是去混淆后的 Claude Code 打包产物树：代码大多仍混淆，
但**字符串字面量、属性名、解构赋值都是原样的**。

任务：把模块**仍混淆的导出名**换成可读名，并给模块文件起描述性文件名。
示范（仓库里已有的两个提交）：`01-核心基础设施/共享小工具-未细化/build-ref-name.js` 的
`getBuildRefName`、同目录 `user-agent.js` 的 `getClientUserAgent`。

## 输入

批次文件（路径由调用方给出）：每个模块一节，含
- 该模块**完整源码**
- 该模块**仍混淆的导出名**列表
- 代表性引用方的 import 行 + 真实调用点（带行号上下文）

文件通常约 100KB。**分段读**（Read 的 offset/limit），一次处理 3-4 个模块，
读完立刻记下结论再读下一段。

## 输出

JSON 数组写到调用方指定的路径：

```json
[ { "module": "<仓库相对路径，与批次文件里那一节标题完全一致>",
    "newFileName": "<kebab-case.js>",
    "renames": { "<旧的混淆导出名>": "<新的可读名>" },
    "why": "<一句话，引用你实际看到的证据>" } ]
```

## 铁律

1. **只在证据充分时才改名。** 仓库自己的原则：*一个看起来合理但错的名字比混淆名更糟*。
   看不懂、或调用点语义有歧义 —— 该名字**不放进** `renames`。
   整模块都没把握就**整个跳过**（不输出该模块）。**跳过是正确答案，不是失败，不要凑数。**

2. `renames` 的 key 必须是该模块**当前仍混淆**的导出名。
   批次里列了「哪些导出名仍混淆」—— **已经可读的导出名不要碰**
   （`getClientPlatform`、`fromEnum`、`SCREAMING_SNAKE_CASE` 常量等）。
   这类模块是「混合」的：只改混淆的那几个。

3. 命名贴合仓库既有习惯：
   - 函数：`camelCase` 动词开头 —— `getXxx` / `isXxx` / `parseXxx` / `formatXxx` /
     `shouldXxx` / `runXxx` / `buildXxx` / `createXxx` / `renderXxx`
   - 常量、魔法值、工具名字符串：`SCREAMING_SNAKE_CASE`
     （仓库里的同款：`MONITOR_TOOL_NAME`、`SEND_MESSAGE_TOOL_NAME`、`CRON_CREATE_TOOL_NAME`）
   - 类 / React Context / Provider：`PascalCase`（`PluginStateStore`、`VirtualScrollViewportContext`）
   - lint 会拒：长度 < 5、仍是混淆形状（`Foo`/`PMn`/`x`）、无信息量的 `data`/`thing`/`helper`

4. `newFileName`：kebab-case 描述模块用途（`build-ref-name.js`、`user-agent.js` 这种）。
   - 只有用途**单一且明确**时才给；一个模块塞了多个不相关的东西就**不给**这个字段（只改导出名）。
   - **如果该模块是目录入口文件**（文件名形如 `<所在目录名>.<hash>.js`，
     例如 `02-功能模块/向导(Wizard)UI/向导(Wizard)UI.7xe5wk62.js`），
     **一律不给 `newFileName`** —— 那个名字本身就是目录名。
   - 绝不能起成 `chunk-xxx.js`。

5. 同一模块内两个导出名不要改成同一个名字；不要与该模块已有的模块级绑定重名。

## 证据从哪来

- **模块源码**：常量看值（`var ia = "Monitor"`），函数看实现，类看方法名
- **调用点是主要证据**：dossier 为每个导出名给了真实使用现场。例：
  `{ [ia]: { renderToolResultMessage: HC } }` + `return e === ia` + 源码 `var ia = "Monitor"`
  ⇒ `MONITOR_TOOL_NAME`
- **仓库内的 barrel / shim 是权威**：若某文件写着 `export { X as 可读名 }`，那个名字直接用，
  不用再推断
- 需要更多上下文时自己去仓库读（Read / grep 都行）

## 禁止

**不要修改 `/Users/game-netease/clean_code/` 里的任何文件。**
只写计划 JSON。机械改写由集中式脚本统一做（避免并行写同一文件冲突），你做判断。

## 自检（必须做）

```
cd /Users/game-netease/clean_code/.analysis/rename && \
  node lint-plans.mjs <计划文件> <同编号的批次 json>
```

必须 `errors=0`。有错就改到通过再收工。

## 回报（简短）

只回：处理几个模块 / 改名几条 / 文件改名几个 / 跳过或保留的名字及一句话原因 / lint 输出。
**不要逐模块列证据。**
