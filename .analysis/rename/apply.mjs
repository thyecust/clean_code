// Apply a batch of naming plans: rename bindings, rename files, rewrite
// importers, update _index. Writes a manifest for the reverse (round-trip) check.
import { readFileSync, writeFileSync, unlinkSync, existsSync, mkdirSync } from "node:fs";
import { join, normalize, basename, dirname, relative } from "node:path";
import { loadTree, ROOT, shortPath, WORK } from "./paths.mjs";
import { buildIndex } from "./index.mjs";
import { planEdits, splice, namespaceWarnings, short } from "./engine.mjs";

const plansFile = process.argv[2];
const manifestFile = process.argv[3];
const dry = process.argv.includes("--dry");
const plans = JSON.parse(readFileSync(plansFile, "utf8"));

const tree = loadTree();
const idx = buildIndex();

// expand each plan across content-identical twins of its module
const cands = JSON.parse(readFileSync(join(WORK, "candidates.json"), "utf8"));
const twinsOf = new Map(cands.map((c) => [c.path, c.twins ?? []]));
const expanded = [];
for (const p of plans) {
  expanded.push(p);
  for (const t of twinsOf.get(p.module) ?? []) expanded.push({ ...p, module: t, _twinOf: p.module });
}
const targetSeen = new Map();
for (const p of expanded) {
  if (targetSeen.has(p.module)) allErrors.push(`two plans target ${p.module}`);
  targetSeen.set(p.module, p);
}

const perFile = new Map(); // path -> edits[]
const fileRenames = new Map(); // old -> new
const allErrors = [];
const allWarnings = [];
const moduleByPath = new Map();

let planIdx = -1;
for (const plan of expanded) {
  planIdx++;
  const r = planEdits(plan, tree, idx);
  allErrors.push(...r.errors.map((e) => `${short(plan.module)}: ${e}`));
  allWarnings.push(...r.warnings);
  allWarnings.push(...namespaceWarnings(plan, tree, idx));
  if (r.errors.length) continue;
  moduleByPath.set(r.modulePath, plan);
  for (const [f, e] of r.edits) {
    if (!perFile.has(f)) perFile.set(f, []);
    perFile.get(f).push(...e.map((x) => ({ ...x, plan: planIdx })));
  }
  if (r.newFile && r.newFile !== r.modulePath) {
    if (fileRenames.has(r.modulePath)) allErrors.push(`duplicate file rename ${short(r.modulePath)}`);
    fileRenames.set(r.modulePath, r.newFile);
  }
}

// two different modules must not introduce the same new name into one file
{
  const byText = new Map(); // `${file}\u0000${name}` -> Set(planIndex)
  for (const [f, edits] of perFile) {
    for (const e of edits) {
      if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(e.text)) continue;
      const k = f + "\u0000" + e.text;
      if (!byText.has(k)) byText.set(k, new Set());
      byText.get(k).add(e.plan);
    }
  }
  for (const [k, planSet] of byText) {
    const [f, n] = k.split("\u0000");
    if (planSet.size > 1) allErrors.push(`${short(f)}: name ${n} introduced by ${planSet.size} different plans`);
  }
}

// overlap / conflict detection across plans
for (const [f, edits] of perFile) {
  const sorted = [...edits].sort((a, b) => a.start - b.start);
  for (let i = 1; i < sorted.length; i++) {
    const prev = sorted[i - 1], cur = sorted[i];
    if (cur.start < prev.end || (cur.start === prev.start && cur.text !== prev.text))
      allErrors.push(`overlapping edits in ${short(f)} at ${cur.start} (${JSON.stringify(prev.text)} vs ${JSON.stringify(cur.text)})`);
  }
}

if (allErrors.length) {
  console.log("ERRORS — nothing written:");
  for (const e of allErrors) console.log("  " + e);
  process.exit(1);
}

// ---- write
const results = [];
for (const [f, edits] of perFile) {
  const src = tree.src.get(f);
  const next = splice(src, edits, short(f));
  results.push({ file: f, src, next, edits: edits.length });
}

// snapshot the tree as it is right now (before this batch lands)
const beforeSnap = (await import("./snapshot.mjs")).snap();
const snapPath = manifestFile.replace(/\.json$/, "") + ".before.json";
writeFileSync(snapPath, JSON.stringify(beforeSnap));

const recorded = [];
for (const [f, edits] of perFile) {
  const src = tree.src.get(f);
  recorded.push({
    path: shortPath(f),
    edits: [...edits]
      .sort((a, b) => a.start - b.start)
      .map((e) => ({ start: e.start, end: e.end, text: e.text, was: src.slice(e.start, e.end) })),
  });
}

const manifest = {
  plans,
  allPlans: expanded.map((p) => ({ module: p.module, newFileName: p.newFileName, renames: p.renames })),
  edits: recorded,
  beforeSnapshot: snapPath,
  fileRenames: [...fileRenames].map(([a, b]) => [shortPath(a), shortPath(b)]),
  files: [],
};
for (const r of results) {
  manifest.files.push({ path: shortPath(r.file), edits: r.edits, beforeSha: r.src.length, afterSha: r.next.length });
}

if (dry) {
  console.log(`[dry] would edit ${results.length} files, rename ${fileRenames.size} modules; ${allWarnings.length} warnings`);
  for (const w of allWarnings.slice(0, 20)) console.log("  WARN " + w);
  process.exit(0);
}

// backup originals so the reverse (round-trip) check can compare bytes
const backupDir = process.env.BACKUP_DIR || join(WORK, "backup");
mkdirSync(backupDir, { recursive: true });
const { createHash } = await import("node:crypto");
for (const r of results) {
  const key = shortPath(r.file).replace(/\//g, "__");
  writeFileSync(join(backupDir, key), r.src);
}
for (const [oldP] of fileRenames) {
  if (results.some((r) => r.file === oldP)) continue;
  const key = shortPath(oldP).replace(/\//g, "__");
  writeFileSync(join(backupDir, key), readFileSync(oldP, "utf8"));
}
writeFileSync(join(backupDir, "_index__file-map.json"), readFileSync(join(ROOT, "_index/file-map.json"), "utf8"));
writeFileSync(join(backupDir, "_index__modules.md"), readFileSync(join(ROOT, "_index/modules.md"), "utf8"));

for (const r of results) {
  writeFileSync(r.file, r.next);
}
// file renames last (so the edited content lands on the new path)
for (const [oldP, newP] of fileRenames) {
  const content = readFileSync(oldP, "utf8");
  writeFileSync(newP, content);
  unlinkSync(oldP);
}

// ---- _index: surgical text edits only.
// Re-serialising file-map.json with JSON.stringify would rewrite `1.0` as `1`
// (the file was produced by a Python dumper), so touch the two lines we mean.
const fmPath = join(ROOT, "_index/file-map.json");
let fm = readFileSync(fmPath, "utf8");
const mmPath = join(ROOT, "_index/modules.md");
let mm = readFileSync(mmPath, "utf8");
for (const [oldP, newP] of fileRenames) {
  const oldBase = basename(oldP), newBase = basename(newP);
  const oldRel = shortPath(oldP), newRel = shortPath(newP);
  const keyFrom = `"${oldBase}": {`;
  const pathFrom = `"path": "${oldRel}",`;
  if (fm.includes(keyFrom) && fm.includes(pathFrom)) {
    fm = fm.replace(keyFrom, `"${newBase}": {`).replace(pathFrom, `"path": "${newRel}",`);
  } else if (fm.includes(keyFrom)) {
    console.log(`  note: ${oldBase} key present but path line differs; key only`);
    fm = fm.replace(keyFrom, `"${newBase}": {`);
  } else {
    console.log(`  note: ${oldBase} not in file-map.json`);
  }
  if (mm.includes(oldRel)) mm = mm.split(oldRel).join(newRel);
  else console.log(`  note: ${oldRel} not in modules.md`);
}
writeFileSync(fmPath, fm);
writeFileSync(mmPath, mm);

writeFileSync(manifestFile, JSON.stringify(manifest, null, 1));
console.log(`applied ${expanded.length} plans (${plans.length} authored + twins) · edited ${results.length} files · renamed ${fileRenames.size} modules · ${allWarnings.length} warnings`);
for (const w of allWarnings.slice(0, 20)) console.log("  WARN " + w);
