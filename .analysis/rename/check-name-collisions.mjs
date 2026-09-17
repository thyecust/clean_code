// 变更前的撞名闸门：新名字是否撞上「树里本来就有的」模块级绑定。
//
//   node check-name-collisions.mjs <plans-dir-or-file> [...]
//
// 为什么需要这个 —— 现有两道检查都看不见这一种：
//
//   lint-plans.mjs  的跨模块撞名检查只在**传入的那批计划之间**比较；
//   apply.mjs       的 byText 检查只看**计划引入的编辑**，树里既有的导出名不是编辑。
//
// 于是「把 A 模块的导出改名成 B 模块早就有的导出名」溜得过去，后果是某个同时 import
// 两者的文件里出现重复声明 —— 一个 ESM 语法错误，`check-imports` 的解析检查才报，
// 那时已经落盘了。实跑中 batch-08 的 agent 自己发现并 grep 验证了这一类，说明它真实存在。
//
// 判定：对每个引用了被改模块的文件 F，设 B = F 的模块级绑定集合。
// 若计划把 old 改成 new、且 F 直接绑定了 old（local 名就是 old，不是 alias），
// 则改名后 F 的绑定变成 (B - {old}) ∪ {new}；当 new ∈ B 且 new !== old 时重复声明。
//
// 退出码非 0 表示有撞名。alias 形态（`import { old as x }`）不改 local 名，天然不冲突。
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { ROOT, shortPath } from "./paths.mjs";
import { buildIndex } from "./index.mjs";
import { analyze } from "./lib.mjs";

const args = process.argv.slice(2);
if (!args.length) {
  console.error("用法: node check-name-collisions.mjs <plans-dir-or-file> [...]");
  process.exit(2);
}

// 收计划：目录则读其中所有 .json，文件则直接读
const planFiles = [];
for (const a of args) {
  if (statSync(a).isDirectory()) {
    for (const f of readdirSync(a).filter((x) => x.endsWith(".json"))) planFiles.push(join(a, f));
  } else planFiles.push(a);
}
const plans = planFiles.flatMap((f) => JSON.parse(readFileSync(f, "utf8")));
const moduleOf = new Map(plans.map((p) => [p.module, p]));

const idx = buildIndex();
const bindingsCache = new Map();
function bindingsOf(absPath) {
  if (bindingsCache.has(absPath)) return bindingsCache.get(absPath);
  let s = null;
  try {
    const info = analyze(readFileSync(absPath, "utf8"));
    s = new Set(info.moduleScope.set.keys());
    // import 绑定：analyze 的 moduleScope 已含它们，但再扫一遍 AST 更稳妥，
    // 因为 moduleScope.set 对 `import {a as b}` 存的是 local 名 b —— 正是我们要的。
  } catch { s = new Set(); }
  bindingsCache.set(absPath, s);
  return s;
}

// 每个引用文件里，被改模块的导出名 -> 该文件实际绑定的 local 名
const hits = [];
for (const [rel, plan] of moduleOf) {
  const abs = join(ROOT, rel);
  const importers = idx.importers.get(abs) ?? [];
  const seen = new Set();
  for (const e of importers) {
    if (seen.has(e.from)) continue;
    seen.add(e.from);
    const B = bindingsOf(e.from);
    if (!B.size) continue;
    const fsrc = readFileSync(e.from, "utf8");
    const info = analyze(fsrc);
    // local 名 == 导出名 的才可能冲突（alias 不改 local 名）
    const direct = new Set();
    for (const node of info.ast.body) {
      if (node.source?.type !== "Literal") continue;
      if (node.type !== "ImportDeclaration") continue;
      for (const sp of node.specifiers) {
        if (sp.type !== "ImportSpecifier") continue;
        if (sp.local.name === sp.imported.name && sp.local.name !== undefined) direct.add(sp.imported.name);
      }
    }
    for (const [oldN, newN] of Object.entries(plan.renames)) {
      if (!direct.has(oldN)) continue;
      if (newN === oldN) continue;
      if (B.has(newN)) {
        hits.push(`  ${shortPath(e.from)}: 该文件已绑定 \`${newN}\`，而 ${rel} 的 \`${oldN}\` 要改成 \`${newN}\` -> 重复声明`);
      }
    }
  }
}

if (hits.length) {
  console.log(`撞名 ${hits.length} 处：`);
  for (const h of [...new Set(hits)]) console.log(h);
  console.log("\n要么给其中一侧换个名字，要么确认这两个模块确实不会同时被同一文件 import。");
  process.exit(1);
}
console.log(`检查 ${moduleOf.size} 个计划模块 · 无撞名`);
