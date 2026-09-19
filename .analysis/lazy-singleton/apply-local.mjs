// 落盘：把「惰性单例块」的改名计划写进树。
//
// 计划格式（与 .analysis/rename 的 plan 同形，但 module 不必是候选池里的模块）：
//   [ { "module": "<仓库相对路径>",
//       "renames": { "<旧混淆名>": "<新可读名>" },
//       "why": "一句话" } ]
//
// 与 .analysis/rename/apply.mjs 的分工：那个走「导出名 + 文件重命名 + _index 同步」，
// 这个只做**文件内非导出的模块级绑定**改名 —— 不跨文件、不动 _index、不动文件名。
//
// 硬闸门（任一不过就整体不落盘）：
//   1 旧名必须是该文件的模块级绑定
//   2 旧名必须**不是**导出名 —— 是的话导入方不会被同步，树会断
//   3 新名不能与该文件任何作用域里的任何名字撞（复用 engine 的 forbidden 检查）
//   4 同一文件内两个旧名不能改成同一个新名
//   5 编辑不得重叠
//
// 用法：node apply-local.mjs <plans.json> <manifest.json> [--dry]
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, normalize } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { loadTree, ROOT, shortPath } from "../rename/paths.mjs";
import { planEdits, splice } from "../rename/engine.mjs";
import { analyze } from "../rename/lib.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const WORK = process.env.LS_WORK || join(HERE, ".work");

const plansFile = process.argv[2];
const manifestFileRaw = process.argv[3];
const dry = process.argv.includes("--dry");
if (!plansFile || !manifestFileRaw) {
  console.error("用法：node apply-local.mjs <plans.json> <manifest.json> [--dry]");
  process.exit(2);
}
const manifestFile = manifestFileRaw;
const plans = JSON.parse(readFileSync(plansFile, "utf8"));

const tree = loadTree();
const noImporters = { importers: new Map() };

/** 该文件的导出名集合（含 `export { a as b }` 的 local 侧与 `export const x`） */
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
    }
  }
  return out;
}

const errors = [];
const perFile = new Map();
const planOfFile = new Map();

for (const plan of plans) {
  const modulePath = normalize(join(ROOT, plan.module));
  if (!tree.src.has(modulePath)) { errors.push(`模块不存在: ${plan.module}`); continue; }
  if (plan.newFileName) errors.push(`${plan.module}: 本流程不改文件名`);
  if (planOfFile.has(modulePath)) { errors.push(`同一文件出现两份计划: ${plan.module}`); continue; }

  const src = tree.src.get(modulePath);
  const { ast } = analyze(src);
  const exp = exportedLocals(ast);

  // 闸门 2：导出名不归这里管
  for (const oldName of Object.keys(plan.renames)) {
    if (exp.has(oldName)) {
      errors.push(`${plan.module}: ${oldName} 是导出名 —— 本流程不处理导出名（改用 .analysis/rename/）`);
    }
  }
  // 闸门 4：同文件内新名不得重复
  const news = Object.values(plan.renames);
  if (new Set(news).size !== news.length) errors.push(`${plan.module}: 新名有重复`);

  const r = planEdits({ module: plan.module, renames: plan.renames }, tree, noImporters);
  errors.push(...r.errors.map((e) => `${plan.module}: ${e}`));
  if (r.errors.length) continue;

  planOfFile.set(modulePath, plan);
  const list = [];
  for (const [, es] of r.edits) list.push(...es.map((x) => ({ ...x, plan: plan.module })));
  perFile.set(modulePath, list);
}

// 闸门 5：编辑不得重叠
for (const [f, edits] of perFile) {
  const sorted = [...edits].sort((a, b) => a.start - b.start);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].start < sorted[i - 1].end)
      errors.push(`${shortPath(f)}: 编辑重叠 @${sorted[i].start}`);
  }
}

if (errors.length) {
  console.log("❌ 闸门未过，什么都没写：");
  for (const e of errors) console.log("   " + e);
  process.exit(1);
}

const beforeSnap = (await import("../rename/snapshot.mjs")).snap();
const snapPath = manifestFile.replace(/\.json$/, "") + ".before.json";
writeFileSync(snapPath, JSON.stringify(beforeSnap));

const recorded = [];
const results = [];
for (const [f, edits] of perFile) {
  const src = tree.src.get(f);
  const next = splice(src, edits, shortPath(f));
  results.push({ file: f, src, next });
  recorded.push({
    path: shortPath(f),
    edits: [...edits].sort((a, b) => a.start - b.start)
      .map((e) => ({ start: e.start, end: e.end, text: e.text, was: src.slice(e.start, e.end) })),
  });
}

const totalRenames = plans.reduce((n, p) => n + Object.keys(p.renames).length, 0);
if (dry) {
  console.log(`[dry] ${plans.length} 份计划 / ${totalRenames} 个改名 / ${results.length} 个文件`);
  for (const [f, edits] of perFile) console.log(`   ${shortPath(f)}  ${edits.length} 处编辑`);
  process.exit(0);
}

const backupDir = process.env.BACKUP_DIR || join(WORK, "backup");
mkdirSync(backupDir, { recursive: true });
for (const r of results) writeFileSync(join(backupDir, shortPath(r.file).replace(/\//g, "__")), r.src);
for (const r of results) writeFileSync(r.file, r.next);

const manifest = {
  plans,
  allPlans: plans.map((p) => ({ module: p.module, newFileName: undefined, renames: p.renames })),
  edits: recorded,
  beforeSnapshot: snapPath,
  fileRenames: [],
  files: results.map((r) => ({ path: shortPath(r.file), edits: recorded.find((x) => x.path === shortPath(r.file)).edits.length })),
};
writeFileSync(manifestFile, JSON.stringify(manifest, null, 1));
console.log(`✅ ${plans.length} 份计划 · ${totalRenames} 个改名 · ${results.length} 个文件`);
console.log(`   manifest -> ${manifestFile}`);
console.log(`   备份     -> ${backupDir}`);
