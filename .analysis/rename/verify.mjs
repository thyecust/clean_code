// Verification of an applied batch.
//
//  [1] 往返      replay every recorded edit backwards; each file must come back
//                byte-identical to its pre-batch backup. Also asserts each edit's
//                new text is actually sitting where the edit claimed it would be.
//  [2] 结构     every file parses; export surface matches the plan exactly.
//  [3] 标识符   no new undefined (free) identifier anywhere.
//  [4] 完整性   no old name survives in any position that reads it (a site missed
//                forward is missed again in reverse, so [1] cannot catch this).
import { readFileSync, existsSync } from "node:fs";
import { join, normalize, dirname } from "node:path";
import { loadTree, ROOT, WORK } from "./paths.mjs";
import { buildIndex } from "./index.mjs";
import { snap, exportNames } from "./snapshot.mjs";
import { dynamicEdits } from "./dynamic.mjs";
import { parseFile } from "./lib.mjs";
import { join as pjoin, dirname as pdirname, normalize as pnormalize } from "node:path";

/** imported (source-side) names this file pulls from `target` */
function importedNamesFrom(src, fromFile, target) {
  const out = [];
  let ast;
  try { ast = parseFile(src); } catch { return out; }
  const resolve = (v) => pnormalize(pjoin(pdirname(fromFile), v));
  for (const node of ast.body) {
    if (node.source?.type !== "Literal") continue;
    if (resolve(node.source.value) !== target) continue;
    if (node.type === "ImportDeclaration") {
      for (const sp of node.specifiers) if (sp.type === "ImportSpecifier") out.push(sp.imported);
    } else if (node.type === "ExportNamedDeclaration") {
      for (const sp of node.specifiers) if (sp.local) out.push(sp.local);
    }
  }
  return out;
}

const manifest = JSON.parse(readFileSync(process.argv[2], "utf8"));
const backupDir = process.argv[3] || join(WORK, "backup");
const beforeSnap = JSON.parse(readFileSync(manifest.beforeSnapshot ?? join(WORK, "before.json"), "utf8"));

let fail = 0;
const bad = (m) => { console.log("  ✗ " + m); fail++; };

const allPlans = manifest.allPlans ?? manifest.plans;
const planByModule = new Map(allPlans.map((p) => [p.module, p]));
const newOf = new Map();
for (const [a, b] of manifest.fileRenames) newOf.set(a, b);
for (const p of allPlans) if (!newOf.has(p.module)) newOf.set(p.module, p.module);

// ---------- 1. round trip ----------
let rtOk = 0, rtBad = 0;
for (const rec of manifest.edits) {
  const cur = readFileSync(join(ROOT, newOf.get(rec.path) ?? rec.path), "utf8");
  let back = cur;
  for (let i = rec.edits.length - 1; i >= 0; i--) {
    const e = rec.edits[i];
    const shift = rec.edits.slice(0, i).reduce((n, x) => n + (x.text.length - (x.end - x.start)), 0);
    const newStart = e.start + shift;
    const landed = cur.slice(newStart, newStart + e.text.length);
    if (landed !== e.text) {
      bad(`编辑未落在预期位置 ${rec.path}@${e.start}: want ${JSON.stringify(e.text)} got ${JSON.stringify(landed)}`);
      rtBad++;
      continue;
    }
    back = back.slice(0, newStart) + e.was + back.slice(newStart + e.text.length);
  }
  const bp = join(backupDir, rec.path.replace(/\//g, "__"));
  if (!existsSync(bp)) { bad(`no backup for ${rec.path}`); rtBad++; continue; }
  const orig = readFileSync(bp, "utf8");
  if (back !== orig) {
    bad(`往返不一致: ${rec.path} (len ${back.length} vs ${orig.length})`);
    const i = [...back].findIndex((c, j) => c !== orig[j]);
    console.log(`      @${i} got  ${JSON.stringify(back.slice(Math.max(0, i - 50), i + 50))}`);
    console.log(`          want ${JSON.stringify(orig.slice(Math.max(0, i - 50), i + 50))}`);
    rtBad++;
  } else rtOk++;
}
console.log(`[往返]   ${rtOk}/${manifest.edits.length} 个被改文件逐字节还原为原件${rtBad ? `（失败 ${rtBad}）` : ""}`);
if (rtBad) bad("往返有失败项");

// ---------- 2. structural ----------
const after = snap();
let parsed = 0;
for (const [rel, rec] of Object.entries(after)) if (rec.ok) parsed++; else bad(`解析失败 ${rel}: ${rec.err}`);
console.log(`[解析]   ${parsed}/${Object.keys(after).length} 个文件可解析`);

for (const rel of Object.keys(beforeSnap)) {
  const target = newOf.get(rel) ?? rel;
  if (!after[target]) bad(`文件消失: ${rel} -> ${target}`);
}

let exOk = 0;
for (const [rel, rec] of Object.entries(beforeSnap)) {
  const target = newOf.get(rel) ?? rel;
  const now = after[target];
  if (!now) continue;
  const plan = planByModule.get(rel);
  const want = plan
    ? [...new Set(rec.exports.map((n) => plan.renames[n] ?? n))].sort()
    : rec.exports;
  if (JSON.stringify(want) !== JSON.stringify(now.exports)) {
    bad(`导出面变化 ${target}: ${JSON.stringify(rec.exports)} -> ${JSON.stringify(now.exports)}（期望 ${JSON.stringify(want)}）`);
  } else exOk++;
}
console.log(`[导出面] ${exOk} 个文件与计划一致`);

let freeAdded = 0;
for (const [rel, rec] of Object.entries(after)) {
  const src = Object.keys(beforeSnap).find((b) => (newOf.get(b) ?? b) === rel);
  if (!src) continue;
  const wasFree = new Set(beforeSnap[src].free);
  for (const n of rec.free) if (!wasFree.has(n)) { bad(`新增未定义标识符 ${rel}: ${n}`); freeAdded++; }
}
console.log(`[标识符] 新增未定义标识符 ${freeAdded} 处`);

// ---------- 4. completeness ----------
{
  const finalTree = loadTree();
  const finalIdx = buildIndex();
  let residual = 0;
  for (const p of allPlans) {
    const newRel = newOf.get(p.module) ?? p.module;
    const target = normalize(join(ROOT, newRel));
    const olds = new Set(Object.keys(p.renames));
    const mSrc = finalTree.src.get(target);
    if (mSrc) for (const o of olds) {
      if (new Set(exportNames(mSrc)).has(o)) { bad(`残留导出名 ${newRel}: ${o}`); residual++; }
    }
    for (const e of finalIdx.importers.get(target) ?? []) {
      if (e.from === target) continue;
      const fsrc = finalTree.src.get(e.from);
      if (!fsrc) continue;
      // AST-precise: only the *imported* name matters (the left of `as`).
      // `import { initSinks as jtn }` is correct; `import { jtn }` would not be.
      for (const node of importedNamesFrom(fsrc, e.from, target)) {
        for (const o of olds) {
          if (node.name === o) { bad(`残留静态引用 ${e.from.slice(ROOT.length + 1)}  ${o}`); residual++; }
        }
      }
      if (e.form === "dynamic" || e.form === "lazy") {
        const r = dynamicEdits(fsrc, olds, (spec) => normalize(join(dirname(e.from), spec)) === target);
        for (const d of r.edits) { bad(`残留动态属性访问 ${e.from.slice(ROOT.length + 1)}  ${d.oldName}`); residual++; }
      }
    }
  }
  console.log(`[完整性] 残留引用 ${residual} 处`);
}

console.log(fail ? `\n失败项 ${fail}` : "\n全部通过");
process.exit(fail ? 1 : 0);
