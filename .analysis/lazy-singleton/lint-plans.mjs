// 计划校验 + 覆盖度报告。
//
// 校验（任一不过 -> 退出码 1）：
//   · module 在树里存在
//   · 旧名是该文件的模块级绑定
//   · 旧名**不是**导出名
//   · 新名形状合格（长度 >= 5、不是混淆形状、不是无信息量词）
//   · 新名不与文件里任何作用域的任何标识符重名
//   · 同一文件内新名不重复
//
// 覆盖度（只报告，不失败）：候选清单里哪些目标计划里没提到。
//   漏读一个名字不会以任何方式报错，只会静静留在混淆状态 —— 所以这一层要有。
//
// 用法：node lint-plans.mjs <plans.json>
import { readFileSync, existsSync } from "node:fs";
import { join, normalize, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ROOT, shortPath } from "../rename/paths.mjs";
import { analyze } from "../rename/lib.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const WORK = process.env.LS_WORK || join(HERE, ".work");

const plansFile = process.argv[2];
if (!plansFile || !existsSync(plansFile)) { console.error("用法：node lint-plans.mjs <plans.json>"); process.exit(2); }
const plans = JSON.parse(readFileSync(plansFile, "utf8"));

const BAD_NAMES = new Set(["data", "thing", "helper", "manager", "value", "info", "obj", "item", "stuff", "util", "utils"]);
/** 与 .analysis/rename/mangle.mjs 同源的形状判定：混淆名是 2-4 字符 */
function looksMangled(n) {
  if (n.length < 5) return true;
  if (/^[A-Za-z]{1,4}$/.test(n)) return true;
  return false;
}

function exportedLocals(ast) {
  const out = new Set();
  for (const n of ast.body) {
    if (n.type === "ExportNamedDeclaration") {
      if (n.declaration) {
        const d = n.declaration;
        if (d.id) out.add(d.id.name);
        for (const decl of d.declarations ?? []) if (decl.id.type === "Identifier") out.add(decl.id.name);
      }
      for (const sp of n.specifiers ?? []) out.add(sp.local.name);
    } else if (n.type === "ExportDefaultDeclaration") out.add("default");
  }
  return out;
}

const errors = [];
const warnings = [];
const covered = new Map(); // file -> Set(oldName)

for (const plan of plans) {
  if (typeof plan.module !== "string" || !plan.renames || typeof plan.renames !== "object") {
    errors.push(`计划格式不对: ${JSON.stringify(plan).slice(0, 120)}`);
    continue;
  }
  const abs = normalize(join(ROOT, plan.module));
  if (!existsSync(abs)) { errors.push(`模块不存在: ${plan.module}`); continue; }

  const src = readFileSync(abs, "utf8");
  let ast, sm, moduleScope;
  try { ({ ast, sm, moduleScope } = analyze(src)); }
  catch (e) { errors.push(`${plan.module}: 解析失败 ${e.message}`); continue; }

  const exp = exportedLocals(ast);
  const moduleNames = new Set(moduleScope.set.keys());
  const allNames = new Set();
  for (const sc of sm.scopes) for (const k of sc.set.keys()) allNames.add(k);
  for (const r of sm.globalScope.through) allNames.add(r.identifier.name);

  covered.set(plan.module, new Set(Object.keys(plan.renames)));
  const newSet = new Set();

  for (const [oldName, newName] of Object.entries(plan.renames)) {
    if (!moduleNames.has(oldName)) errors.push(`${plan.module}: 旧名 ${oldName} 不是该文件的模块级绑定`);
    if (exp.has(oldName)) errors.push(`${plan.module}: 旧名 ${oldName} 是导出名 —— 本流程不处理导出名`);
    if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(newName)) errors.push(`${plan.module}: 新名 ${newName} 不是合法标识符`);
    else {
      if (looksMangled(newName)) errors.push(`${plan.module}: 新名 ${newName} 仍是混淆形状`);
      if (BAD_NAMES.has(newName.toLowerCase())) errors.push(`${plan.module}: 新名 ${newName} 无信息量`);
      if (allNames.has(newName)) errors.push(`${plan.module}: 新名 ${newName} 与文件里已有的标识符重名`);
    }
    if (newSet.has(newName)) errors.push(`${plan.module}: 新名 ${newName} 在本文件内重复`);
    newSet.add(newName);
  }
}

// ---- 覆盖度 ----
// 分母只算 kind === "local" 的组：那是本流程唯一的目标集合。
// 另两桶是噪声 —— `global` 全是 Map/Set/WeakMap；`export-local` 里 7 个类
// **全都已经是可读名**（PolicyState / TeleportLatch / AutoModeState / …），
// 即「导出名」那半早被 .analysis/rename/ 做过，剩下的正是被它范围排除的这半。
let coverageLines = [];
const classifyPath = join(WORK, "classify.json");
if (existsSync(classifyPath)) {
  const { groups } = JSON.parse(readFileSync(classifyPath, "utf8"));
  const byFile = new Map();
  for (const g of groups) {
    if (g.kind !== "local" || g.readable) continue;
    if (!byFile.has(g.file)) byFile.set(g.file, new Set());
    byFile.get(g.file).add(g.inner);
  }
  let missed = 0, total = 0;
  for (const [file, inners] of byFile) {
    const cov = covered.get(file);
    for (const inner of inners) {
      total++;
      if (!cov || !cov.has(inner)) { missed++; coverageLines.push(`${file}  ::  ${inner}`); }
    }
  }
  console.log(`[覆盖度] 目标 ${total} 组（本文件内非导出的混淆类名），计划覆盖 ${total - missed} 组，未覆盖 ${missed} 组`);
  if (missed) {
    console.log("  未覆盖（计划里没提；漏读的会静静留在混淆状态，跳过是允许的但要看得见）：");
    for (const l of coverageLines.slice(0, 25)) console.log("    " + l);
    if (coverageLines.length > 25) console.log(`    …另有 ${coverageLines.length - 25} 条`);
  }
}

for (const w of warnings) console.log("  WARN " + w);
if (errors.length) {
  console.log(`\n❌ ${errors.length} 项不合格：`);
  for (const e of errors) console.log("   " + e);
  process.exit(1);
}
console.log(`\n✅ ${plans.length} 份计划全部合格（涉及 ${plans.reduce((n, p) => n + Object.keys(p.renames).length, 0)} 个改名）`);
