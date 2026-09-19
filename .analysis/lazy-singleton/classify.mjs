// 对每个 `new j(() => new X())` 命中，判定括号里的 `X` 属于哪一类绑定：
//   export-local   本文件声明且导出      —— 跨文件可见，改名要动引用方
//   local          本文件声明但未导出    —— 纯文件内改名
//   imported       从别的模块 import 进来 —— 真名在源头
//   global         解析不到（自由全局）
//   not-ident      体内不是 `new X()`，跳过
//
// 产出 $WORK/classify.json：按 (文件, 体内类名) 聚合，带该文件内的声明/导出情况。
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ROOT, walk, shortPath } from "../rename/paths.mjs";
import { parseFile, analyze } from "../rename/lib.mjs";
// 用仓库自己的「已经可读了」判定做过滤，而不是 isMangled 做包含 ——
// 方向要保守：把已是好名字的判成候选，代价是 agent 看一眼跳过；
// 把真候选判成「已可读」而丢掉，代价是它永远留在混淆状态且无人报错。
import { isClearlyReadable } from "../rename/mangle.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const WORK = process.env.LS_WORK || join(HERE, ".work");
mkdirSync(WORK, { recursive: true });

const census = JSON.parse(readFileSync(join(WORK, "census.json"), "utf8"));
const targets = census.hits.filter(
  (h) => (h.callee === "j" || h.callee === "Gt") && /^new [A-Za-z_$][\w$]*\(\s*\)$/.test(h.bodyText.trim()),
);
console.log(`待判定的命中：${targets.length}`);

const byFile = new Map();
for (const h of targets) {
  if (!byFile.has(h.file)) byFile.set(h.file, []);
  byFile.get(h.file).push(h);
}

/** 该文件的导出名集合（export { a, b as c } / export const x / export function x） */
function exportedNames(ast) {
  const out = new Set();
  for (const n of ast.body) {
    if (n.type === "ExportNamedDeclaration") {
      if (n.declaration) {
        const d = n.declaration;
        for (const decl of d.declarations ?? []) {
          if (decl.id.type === "Identifier") out.add(decl.id.name);
          else if (decl.id.type === "ObjectPattern") for (const p of decl.id.properties) out.add((p.value ?? p.key).name);
        }
        if (d.id) out.add(d.id.name); // function/class 声明
      }
      for (const s of n.specifiers ?? []) out.add(s.local.name);
    } else if (n.type === "ExportDefaultDeclaration") {
      out.add("default");
    } else if (n.type === "ExportAllDeclaration") {
      out.add("*");
    }
  }
  return out;
}

/** 该文件的 import 进来名 -> 源模块 */
function importedNames(ast) {
  const out = new Map();
  for (const n of ast.body) {
    if (n.type !== "ImportDeclaration") continue;
    for (const s of n.specifiers) out.set(s.local.name, { source: n.source.value, kind: s.type });
  }
  return out;
}

const rows = [];
for (const [file, hits] of byFile) {
  const src = readFileSync(join(ROOT, file), "utf8");
  let ast, sm, moduleScope;
  try {
    ({ ast, sm, moduleScope } = analyze(src));
  } catch (e) {
    rows.push({ file, error: String(e.message).slice(0, 150) });
    continue;
  }
  const exports = exportedNames(ast);
  const imports = importedNames(ast);
  const modNames = new Set(moduleScope.set.keys());

  for (const h of hits) {
    const m = /^new ([A-Za-z_$][\w$]*)\(\s*\)$/.exec(h.bodyText.trim());
    const inner = m[1];
    let kind;
    if (exports.has(inner)) kind = "export-local";
    else if (modNames.has(inner)) kind = "local";
    else if (imports.has(inner)) kind = "imported";
    else kind = "global";
    rows.push({
      file,
      line: h.line,
      holder: null,
      ctor: h.callee,
      inner,
      kind,
      readable: isClearlyReadable(inner),
      importFrom: imports.get(inner)?.source ?? null,
      isMangledShape: /^[A-Za-z_$]{1,3}[0-9]*[A-Za-z]?$/.test(inner) || /^_?[A-Za-z0-9]{1,4}$/.test(inner),
    });
  }
}

// 聚合：按 (file, inner)
const agg = new Map();
for (const r of rows) {
  if (r.error || !r.inner) continue;
  const k = r.file + " :: " + r.inner;
  if (!agg.has(k)) agg.set(k, { file: r.file, inner: r.inner, kind: r.kind, readable: r.readable, importFrom: r.importFrom, count: 0, lines: [] });
  const a = agg.get(k);
  a.count++;
  a.lines.push(r.line);
}
const groups = [...agg.values()];

const byKind = new Map();
for (const g of groups) byKind.set(g.kind, (byKind.get(g.kind) ?? 0) + 1);
console.log("\n== 按绑定种类（去重后的 (文件,类名) 组）==");
for (const [k, v] of [...byKind].sort((a, b) => b[1] - a[1])) console.log(String(v).padStart(4), k);

// 真正的目标集：kind === "local" 且名字**还不像人写的**
const targetGroups = groups.filter((g) => g.kind === "local" && !g.readable);
const localReadable = groups.filter((g) => g.kind === "local" && g.readable);
const localExportReadable = groups.filter((g) => g.kind === "export-local" && g.readable);
console.log(`\n== 目标集 ==`);
console.log(`  local 且仍混淆（本轮靶子）      : ${targetGroups.length}`);
console.log(`  local 但已可读（应排除）        : ${localReadable.length}`);
console.log(`  export-local 且已可读（别人的活）: ${localExportReadable.length} / ${groups.filter((g) => g.kind === "export-local").length}`);
for (const g of localReadable.slice(0, 20)) console.log(`    · local已可读 ${g.inner} @ ${g.file}`);
for (const g of localExportReadable.slice(0, 20)) console.log(`    · 导出已可读 ${g.inner} @ ${g.file}`);

const byImportSrc = new Map();
for (const g of groups) if (g.kind === "imported") byImportSrc.set(g.importFrom, (byImportSrc.get(g.importFrom) ?? 0) + 1);
console.log("\n== imported 组的来源模块 top 15 ==");
for (const [k, v] of [...byImportSrc].sort((a, b) => b[1] - a[1]).slice(0, 15)) console.log(String(v).padStart(4), k);

writeFileSync(join(WORK, "classify.json"), JSON.stringify({ rows, groups }, null, 2));
console.log(`\n组数 ${groups.length} -> ${join(WORK, "classify.json")}`);
