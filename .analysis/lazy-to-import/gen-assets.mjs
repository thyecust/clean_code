// 把「剩下的」懒加载目标以 asset 形式嵌进编译产物。
//
// apply.mjs 已经把不成环的懒加载改成了静态 import（bun 会在构建期内联它们）。
// 剩下两类没法静态化，只能作为**独立文件**存在于 /$bunfs/root/：
//
//   1. 成环边 —— `to` 本来就间接依赖 `from`，静态化会改变求值顺序。
//   2. `.node` —— Node-API 模块根本不能被 import：
//      `TypeError: To load Node-API modules, use require() or process.dlopen instead of import.`
//
// 做法：`import p from "<abs>" with { type: "file" }` 会让 bun 把文件**原样**放进
// 编译产物；配合 `--asset-naming="[name].[ext]"`（去掉内容哈希）它就落在
// `/$bunfs/root/<basename>` —— 而编译产物里模块解析的基准恒为 `/$bunfs/root/`，
// 于是原来的 `import.meta.require("./x.js")` 原封不动就能命中。
//
// 实测过的三点（见 BUN-COMPILE.md 那一轮）：
//   · asset 路径可被 `fs.readFileSync` 读、可被 `import.meta.require` 加载
//   · `.node` 连 dlopen 都能从 bunfs 做
//   · `--splitting` 在 compile 下无效，所以只能走 asset 这条路
//
// 用法：node gen-assets.mjs
import { readFileSync, writeFileSync, rmSync, mkdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, resolve, relative, basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseFile } from "../rename/lib.mjs";
import { ROOT, walk } from "../rename/paths.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const HUB = join(ROOT, "01-核心基础设施/内嵌资源与模块互操作");
const OUT = join(HERE, "__embedded-lazy-assets.js");
const STAGE = join(HERE, ".stage");

// **有静态入边的目标不能作 asset** —— bun 会把那个路径当 asset 处理，同一路径的
// 静态 import 就找不到导出了。实测：`No matching export in "04-tools/MonitorTool.js"
// for import "wsEgressDenyReason"`，而那个导出其实就在该文件第 657 行。
// 这类目标已被内联进 bundle，只能另想办法（见 README）。
const staticIn = new Set();
for (const f of walk(ROOT)) {
  let a;
  try { a = parseFile(readFileSync(f, "utf8")); } catch { continue; }
  for (const n of a.body) {
    if (n.type !== "ImportDeclaration" || !n.source || !n.source.value.startsWith(".")) continue;
    // 改写器自己加的 `lazy_` 导入**不算**「原有静态入边」—— 它们是本次改造的产物。
    // 用它们判断会让「因为被静态化才有入边」的目标被误判成「已内联」而被错误排除：
    // 工具Bash-Shell.edt8d0b4.js 就是这么被误排除的（它唯一的静态入边来自
    // processBashCommand.5n238kht.js 里那条 `lazy_` 导入）。
    if (n.specifiers.some((sp) => sp.local?.name?.startsWith("lazy_"))) continue;
    staticIn.add(resolve(dirname(f), n.source.value));
  }
}
const excluded = new Map(); // abs -> Set(引用方)

const targets = new Map(); // abs -> Set(引用它的文件)
for (const f of walk(ROOT)) {
  let ast;
  try { ast = parseFile(readFileSync(f, "utf8")); } catch { continue; }
  const visit = (n) => {
    if (!n || typeof n.type !== "string") return;
    if (n.type === "CallExpression" && n.callee) {
      const c = n.callee;
      const isHub = c.type === "Identifier" && c.name === "importMetaRequire";
      const isMeta = c.type === "MemberExpression" && !c.computed &&
        c.property.name === "require" && c.object.type === "MetaProperty";
      const a = n.arguments?.[0];
      if ((isHub || isMeta) && a && a.type === "Literal" && typeof a.value === "string" && a.value.startsWith(".")) {
        const abs = resolve(isHub ? HUB : dirname(f), a.value);
        if (staticIn.has(abs)) {
          if (!excluded.has(abs)) excluded.set(abs, new Set());
          excluded.get(abs).add(relative(ROOT, f));
          return;
        }
        if (!targets.has(abs)) targets.set(abs, new Set());
        targets.get(abs).add(relative(ROOT, f));
      }
    }
    for (const k of Object.keys(n)) {
      if (k === "type" || k === "range" || k === "start" || k === "end") continue;
      const v = n[k];
      if (Array.isArray(v)) { for (const x of v) if (x && typeof x.type === "string") visit(x); }
      else if (v && typeof v.type === "string") visit(v);
    }
  };
  visit(ast);
}

// ── 顺带收进来的「随行资源」 ────────────────────────────────────────────────
//
// `readEmbeddedAssetSync("./x.zst", import.meta.dirname)` 按**字符串字面量**读文件，
// 不是 import —— 打包器完全看不见它。编译产物里 `import.meta.dirname` 是
// `/$bunfs/root/`，所以把这些文件平铺嵌进去正好命中。
// （`.md`/`.txt`/`.mjs` 走的是 importMetaRequire，已被 apply.mjs 静态化，不在此列。）
for (const f of walk(ROOT)) {
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(/"(\.\/[\w.\-+@]+\.zst)"/g)) {
    const abs = resolve(dirname(f), m[1]);
    if (existsSync(abs)) targets.set(abs, new Set([relative(ROOT, f)]));
  }
}

// `--asset-naming="[name].[ext]"` 是**平铺**命名空间，同名会互相覆盖。
//
// 但同名**不一定是冲突**：rewrite-paths 在每个调用方目录都放了一个转发文件，
// 它们同名却 `export * from` 指向**同一个真模块**，打包出来是一回事，只需嵌一份。
// 所以先按 basename 归并，再看它们解析到的真模块是否一致 —— 不一致才是真冲突。
const resolveForward = (abs) => {
  let src;
  try { src = readFileSync(abs, "utf8"); } catch { return abs; }
  const m = /^export \* from "([^"]+)";$/m.exec(src);
  return m ? resolve(dirname(abs), m[1]) : abs;
};
const byBase = new Map(); // base -> { abs, real }
for (const abs of targets.keys()) {
  const b = basename(abs);
  const real = resolveForward(abs);
  if (byBase.has(b)) {
    if (byBase.get(b).real !== real) {
      console.error(`❌ basename 冲突且指向不同模块：${b}`);
      console.error(`   ${relative(ROOT, byBase.get(b).real)}`);
      console.error(`   ${relative(ROOT, real)}`);
      process.exit(1);
    }
  } else byBase.set(b, { abs, real });
}

// ── 嵌入 ────────────────────────────────────────────────────────────────────
//
// `.js` 目标**必须先打成自包含单文件**再嵌入。直接嵌原文件不行：asset 在产物里是
// 独立文件，它自己的 `import "./dep.js"` 会去 `/$bunfs/root/` 找，而那些依赖早被
// 内联进主文件了。实测报错：
//   Cannot find module './agent-view-feature-gates.js'
//     from '/$bunfs/root/AGENT_VIEW_RELAUNCH_ENV_KEY.2qggy62y.js'
rmSync(STAGE, { recursive: true, force: true });
mkdirSync(STAGE, { recursive: true });

const entries = [];
for (const { abs } of [...byBase.values()].sort((a, b) => a.abs.localeCompare(b.abs))) {
  const base = basename(abs);
  const ext = base.slice(base.lastIndexOf("."));
  // `.node`（Node-API 模块）和 `.zst`（zstd 压缩的文本资源）都要**原样嵌入**：
  // 前者不是 JS，后者是二进制，都不能交给打包器。
  if (ext === ".node" || ext === ".zst") {
    entries.push({ src: abs, staged: abs, base, packed: false });
    continue;
  }
  const out = join(STAGE, base);
  // --external 那句和主 bundle 同一个原因：turndown 的 _source 里有个永不执行的
  //  死分支，打包器静态分析仍会把它当一条边。
  execFileSync("bun", ["build", abs, "--target=bun", "--external", "@mixmark-io/domino", "--outfile", out], { stdio: "pipe" });
  entries.push({ src: abs, staged: out, base, packed: true });
}

const lines = entries.map((e, i) => `import a${i} from ${JSON.stringify(e.staged)} with { type: "file" };`);
writeFileSync(
  OUT,
  `// 由 gen-assets.mjs 生成，勿手改。\n` +
    `// 这些是 apply.mjs / to-dynamic.mjs 之后仍留在 import.meta.require 上的目标。\n` +
    lines.join("\n") +
    `\n\n// 赋值到 globalThis 是为了让打包器无法把这批 import 当作无副作用而摇掉。\n` +
    `globalThis.__EMBEDDED_LAZY_ASSETS__ = [${entries.map((_, i) => `a${i}`).join(", ")}];\n`,
);

const packed = entries.filter((e) => e.packed).length;
console.log(`嵌入 ${entries.length} 个懒加载目标（basename 无冲突 ✓）`);
console.log(`  打包成自包含单文件 ${packed} 个 · 原样嵌入 ${entries.length - packed} 个（.node / .zst）`);
console.log(`  -> ${relative(ROOT, OUT)}`);
if (excluded.size) {
  console.log(`\n  ⚠️  排除 ${excluded.size} 个「已有静态入边」的目标（作 asset 会破坏导出面）：`);
  for (const [a, fs] of excluded) console.log(`    ${relative(ROOT, a)}   ← ${[...fs].join(", ")}`);
}
