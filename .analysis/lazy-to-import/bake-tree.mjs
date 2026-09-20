// 「自己做 --splitting」：把整棵树按**原目录结构**嵌进编译产物，而不是改写调用点。
//
// ## 为什么这条路成立
//
// 实测（/tmp/split，见 README）：
//   · `--asset-naming="[dir]/[name].[ext]"` 里的 `[dir]` 是**相对 project root** 的路径，
//     所以 `sub/a.js` 会落在 `/$bunfs/root/sub/a.js` —— **目录结构被保留**。
//   · 这样 asset 模块内部的相对 `import "./dep/b.js"` 能正常解析，
//     `import.meta.require("./x.js")` 也一样 —— 因为**模块自己的 dirname 就是它在
//     bunfs 里的真实目录**（不再是「所有模块都挤在 /$bunfs/root/」那个困境）。
//   · 实测 `cli + B`：cli.js 被 require 出来后，它内部对 sub/dep/b.js 的 import 也通了。
//
// 于是**一句代码都不用改**：`import.meta.require` 保持原样、懒加载时机不变、
// 依赖天然共享（每个模块在 bunfs 里只有一份）。
//
// 之前那套改写（静态化 + 转发文件 + 自包含 bundle）是被
// 「编译产物里所有模块的 dirname 恒为 /$bunfs/root/」这个前提逼出来的 ——
// 而 asset 化之后这个前提根本不成立。
//
// 用法：node bake-tree.mjs
import { readdirSync, writeFileSync } from "node:fs";
import { dirname, resolve, relative, join, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { ROOT } from "../rename/paths.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "__tree-assets.js");
const ENTRY = join(HERE, "bake-entry.js");

// 先只嵌**树本身**（含随行资源）。asset 模块内部的相对 import/require 靠目录结构解析，
// 裸 specifier（`import "lodash"`）走的是主 bundle 里已打包的那份，先不嵌 node_modules ——
// 那是 17000+ 个文件，先看树够不够。
const SKIP = new Set([".git", ".analysis", "node_modules"]);
const files = [];
(function rec(d) {
  let entries;
  try { entries = readdirSync(d, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    if (SKIP.has(e.name)) continue;
    const p = join(d, e.name);
    if (e.isDirectory()) rec(p);
    else files.push(p);
  }
})(ROOT);

console.log(`整树文件 ${files.length} 个`);
const lines = files.map((p, i) => `import a${i} from ${JSON.stringify(p)} with { type: "file" };`);
writeFileSync(
  OUT,
  `// 由 bake-tree.mjs 生成，勿手改。\n` +
    lines.join("\n") +
    `\n\n// 赋值到 globalThis 阻止打包器把这批 import 当无副作用摇掉。\n` +
    `globalThis.__TREE_ASSETS__ = [${files.map((_, i) => `a${i}`).join(", ")}];\n`,
);
writeFileSync(
  ENTRY,
  `import "./__tree-assets.js";\n` +
    `import cliPath from ${JSON.stringify(join(ROOT, "cli.js"))} with { type: "file" };\n` +
    `import.meta.require(cliPath);\n`,
);
console.log(`-> ${relative(ROOT, OUT)}\n-> ${relative(ROOT, ENTRY)}`);
