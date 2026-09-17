// Minimal apply driver for the unit tests (no _index, split module dirs).
import { readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { join, normalize } from "node:path";
import { loadTree } from "./paths.mjs";
import { buildIndex } from "./index.mjs";
import { planEdits, splice } from "./engine.mjs";

const dir = process.argv[2];
const plans = JSON.parse(readFileSync(join(dir, "plan.json"), "utf8")).map((p) => ({ ...p, module: p.module }));
const tree = loadTree();
const idx = buildIndex();
const perFile = new Map();
const renames = new Map();
for (const plan of plans) {
  const r = planEdits(plan, tree, idx);
  if (r.errors.length) { console.error(r.errors.join("\n")); process.exit(1); }
  for (const [f, e] of r.edits) { if (!perFile.has(f)) perFile.set(f, []); perFile.get(f).push(...e); }
  if (r.newFile !== r.modulePath) renames.set(r.modulePath, r.newFile);
}
for (const [f, edits] of perFile) writeFileSync(f, splice(tree.src.get(f), edits, f));
for (const [a, b] of renames) { writeFileSync(b, readFileSync(a, "utf8")); unlinkSync(a); }
