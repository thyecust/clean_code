// 落盘后的本流程专属校验（在 .analysis/rename/verify.mjs 的四道之外补三道）。
//
//  [A] 引用点守恒   改名前后，该绑定在文件里的**引用行号集合**必须一致。
//                   少了 -> 漏改一处；多了 -> 撞名捕获了别的引用。
//  [B] 旧名残留     改动后的文件里不该再出现旧名这个标识符（字符串/注释里出现只提示）。
//  [C] 类名可见性   类改名会改变 `X.name` / `constructor.name` 的运行时取值。
//                   报告：该类是否 extends Error，以及全树是否有 `"<旧名>"` 字符串字面量。
//
// 用法：node check-local.mjs <plans.json> [backupDir]
import { readFileSync, existsSync } from "node:fs";
import { join, normalize, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ROOT, shortPath, walk } from "../rename/paths.mjs";
import { analyze, moduleBindingRefs } from "../rename/lib.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const WORK = process.env.LS_WORK || join(HERE, ".work");
const plans = JSON.parse(readFileSync(process.argv[2], "utf8"));
const backupDir = process.argv[3] || join(WORK, "backup");

const keyOf = (rel) => rel.replace(/\//g, "__");
let fail = 0;
const bad = (m) => { console.log("  ✗ " + m); fail++; };

/** 名字在文件里的引用行号集合 */
function refLines(src, name) {
  const { sm, moduleScope } = analyze(src);
  const refs = moduleBindingRefs(moduleScope, name, sm) ?? [];
  return [...new Set(refs.map((r) => src.slice(0, r.range[0]).split("\n").length))].sort((a, b) => a - b);
}

const allLines = new Map(); // 供 [C] 用：每个旧名 -> 命中它的文件行

console.log("[A] 引用点守恒");
let okA = 0;
for (const plan of plans) {
  const rel = plan.module;
  const bp = join(backupDir, keyOf(rel));
  if (!existsSync(bp)) { bad(`没有备份 ${rel}`); continue; }
  const before = readFileSync(bp, "utf8");
  const after = readFileSync(join(ROOT, rel), "utf8");
  for (const [oldName, newName] of Object.entries(plan.renames)) {
    const was = refLines(before, oldName);
    const now = refLines(after, newName);
    if (JSON.stringify(was) !== JSON.stringify(now)) {
      bad(`${rel}: ${oldName} -> ${newName} 引用行号变了\n      before ${JSON.stringify(was)}\n      after  ${JSON.stringify(now)}`);
    } else okA++;
  }
}
console.log(`     ${okA}/${plans.reduce((n, p) => n + Object.keys(p.renames).length, 0)} 个绑定的引用点集合不变`);

console.log("[B] 旧名残留");
let leaks = 0;
for (const plan of plans) {
  const after = readFileSync(join(ROOT, plan.module), "utf8");
  const lines = after.split("\n");
  for (const oldName of Object.keys(plan.renames)) {
    // 前后都要排除 `'` / `’` —— 否则单字母名会匹到英文里的所有格（`Anthropic's` 的 `s`）。
    // 前面还要排除 `#` —— 私有类字段 `#o` / `this.#o` 里的 `o` 不是这个绑定。
    const re = new RegExp(`(?<![A-Za-z0-9_$'’#])${oldName.replace(/\$/g, "\\$")}(?![A-Za-z0-9_$'’])`);
    lines.forEach((t, i) => {
      if (!re.test(t)) return;
      // 字符串字面量 / 注释里的出现不算残留，但要提示（可能是 name 依赖）。
      // 单字母名在散文注释里必然满天飞（`(c) Anthropic`、`a` / `I` 这种词），只报 ≥2 字符的。
      const inString = new RegExp(`["'\`][^"'\`]*${oldName}[^"'\`]*["'\`]`).test(t);
      const inComment = /^\s*(\/\/|\*|\/\*)/.test(t);
      if ((inString || inComment) && oldName.length >= 2) {
        console.log(`  · 提示 ${plan.module}:${i + 1} 旧名 ${oldName} 出现在${inString ? "字符串" : "注释"}里：${t.trim().slice(0, 100)}`);
      } else if (!inString && !inComment) {
        bad(`${plan.module}:${i + 1} 旧名 ${oldName} 作为标识符残留：${t.trim().slice(0, 100)}`);
        leaks++;
      }
    });
  }
}
if (!leaks) console.log("     无残留");

console.log("[C] 类名可见性（改名会改变 X.name / constructor.name 的取值）");
{
  // 全树扫一遍旧名字符串字面量 —— 只对长度 >= 3 的名字做（单字母会海量误报）
  const files = walk(ROOT);
  const srcs = new Map();
  const cands = new Set();
  for (const p of plans) for (const o of Object.keys(p.renames)) if (o.length >= 3) cands.add(o);
  if (cands.size) {
    for (const f of files) {
      const s = readFileSync(f, "utf8");
      for (const o of cands) {
        if (s.includes(`"${o}"`) || s.includes(`'${o}'`)) {
          if (!allLines.has(o)) allLines.set(o, []);
          allLines.get(o).push(shortPath(f));
        }
      }
    }
  }
  for (const plan of plans) {
    const src = readFileSync(join(ROOT, plan.module), "utf8");
    for (const oldName of Object.keys(plan.renames)) {
      const m = new RegExp(`class\\s+${oldName}\\s+extends\\s+([A-Za-z_$][\\w$]*)`).exec(src);
      if (m) console.log(`  · 提示 ${plan.module}: ${oldName} extends ${m[1]} —— 若父类/自身有 name 依赖需人工确认`);
      const hits = allLines.get(oldName);
      if (hits) console.log(`  · 提示 旧名 "${oldName}" 作为字符串字面量出现在 ${hits.length} 个文件：${hits.slice(0, 5).join(", ")}`);
    }
  }
  if (![...allLines.keys()].length) console.log("     未发现旧名的字符串字面量用法");
}

console.log(fail ? `\n❌ 失败项 ${fail}` : "\n✅ 本流程三道校验通过");
process.exit(fail ? 1 : 0);
