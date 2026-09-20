// 只嵌「非 JS 的随行资源」：.zst（zstd 压缩文本）和 .node（原生模块）。
//
// 到这一步 `.js` 已经全部静态化（apply.mjs），所以**不需要**把任何 JS 当 asset ——
// 那正是之前那套方案里体积爆炸和绕开模块系统的根源。
//
//   .zst  →  readEmbeddedAssetSync(rel, import.meta.dirname) 按**字符串字面量**读
//   .node →  Node-API 模块，不能被 import
// 两者都按「相对调用方目录」解析，而编译产物里 dirname 恒为 /$bunfs/root/，
// 所以平铺嵌入即可命中（这些文件名都带哈希后缀，basename 全局唯一）。
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, resolve, relative, join, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { ROOT } from "../rename/paths.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "__baked-assets.js");
const ENTRY = join(HERE, "bake-entry.js");
const KEEP = new Set([".zst", ".node"]);

const files = [];
(function rec(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    if (e.name === ".git" || e.name === ".analysis" || e.name === "node_modules") continue;
    const p = join(d, e.name);
    if (e.isDirectory()) rec(p);
    else if (KEEP.has(extname(e.name))) files.push(p);
  }
})(ROOT);

const byBase = new Map();
for (const f of files) {
  const b = basename(f);
  if (byBase.has(b)) { console.error(`❌ basename 冲突: ${b}`); process.exit(1); }
  byBase.set(b, f);
}
const list = [...byBase.values()].sort();
const lines = list.map((p, i) => `import a${i} from ${JSON.stringify(p)} with { type: "file" };`);
writeFileSync(OUT, `// 由 bake-assets.mjs 生成，勿手改。\n` + lines.join("\n") +
  `\n\nglobalThis.__BAKED_ASSETS__ = [${list.map((_, i) => `a${i}`).join(", ")}];\n`);
writeFileSync(ENTRY, `import "./__baked-assets.js";\nimport "../../cli.js";\n`);
const by = new Map();
for (const p of list) { const e = extname(p); by.set(e, (by.get(e) ?? 0) + 1); }
console.log(`嵌入 ${list.length} 个随行资源：${[...by].map(([e, c]) => `${e}:${c}`).join("  ")}`);
console.log(`  -> ${relative(ROOT, OUT)}\n  -> ${relative(ROOT, ENTRY)}`);
