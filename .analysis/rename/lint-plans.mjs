// Policy lint on agent-produced plans, before anything is written.
import { readFileSync, existsSync } from "node:fs";
import { WORK } from "./paths.mjs";
import { join } from "node:path";
import { isMangled, looksLikeManglerOutput } from "./mangle.mjs";

const cands = JSON.parse(readFileSync(join(WORK, "candidates.json"), "utf8"));
const byPath = new Map(cands.map((c) => [c.path, c]));

const plans = JSON.parse(readFileSync(process.argv[2], "utf8"));
const allowed = process.argv[3] && existsSync(process.argv[3]) ? new Set(JSON.parse(readFileSync(process.argv[3], "utf8"))) : null;

const errors = [];
const namesSeen = new Map(); // newName -> [modules]
let kept = [];

for (const p of plans) {
  const tag = p.module ?? "<no module>";
  if (!p.module || !byPath.has(p.module)) { errors.push(`${tag}: not a candidate module`); continue; }
  const c = byPath.get(p.module);
  if (allowed && !allowed.has(p.module)) { errors.push(`${tag}: not in this batch`); continue; }
  if (!p.renames || !Object.keys(p.renames).length) { errors.push(`${tag}: empty renames`); continue; }
  if (!p.why || p.why.trim().length < 12) errors.push(`${tag}: missing/short "why"`);
  for (const [oldN, newN] of Object.entries(p.renames)) {
    if (!c.mangled.includes(oldN)) errors.push(`${tag}: ${oldN} is not a mangled export (${c.exports.join(",")})`);
    if (looksLikeManglerOutput(newN)) errors.push(`${tag}: ${oldN} -> ${newN} still looks mangled`);
    if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(newN)) errors.push(`${tag}: ${oldN} -> ${newN} not an identifier`);
    if (!namesSeen.has(newN)) namesSeen.set(newN, []);
    namesSeen.get(newN).push(p.module);
  }
  if (p.newFileName) {
    if (!/^[a-z0-9][a-z0-9-]*\.js$/.test(p.newFileName)) errors.push(`${tag}: bad file name ${p.newFileName}`);
    else if (/^chunk-/.test(p.newFileName)) errors.push(`${tag}: file name still chunk-*`);
  }
  kept.push(p);
}

// A repeated new name is only a problem if one file imports both modules — that is
// what would produce `Identifier 'x' has already been declared`. Distinct modules
// sharing an export name is normal in this tree.
const dups = [...namesSeen].filter(([, mods]) => mods.length > 1);
if (dups.length) {
  const { buildIndex, ROOT } = await import("./index.mjs");
  const idx = buildIndex();
  const pathOf = (rel) => ROOT + "/" + rel;
  for (const [n, mods] of dups) {
    let conflict = 0;
    for (let i = 0; i < mods.length; i++) {
      for (let j = i + 1; j < mods.length; j++) {
        const a = new Set((idx.importers.get(pathOf(mods[i])) ?? []).map((e) => e.from));
        const b = new Set((idx.importers.get(pathOf(mods[j])) ?? []).map((e) => e.from));
        const both = [...a].filter((f) => b.has(f));
        if (both.length) {
          errors.push(`new name ${n} in ${mods[i]} and ${mods[j]} — imported together by ${both.length} file(s), e.g. ${both[0].slice(ROOT.length + 1)}`);
          conflict++;
        }
      }
    }
    if (!conflict) console.log(`  note: ${n} shared by ${mods.length} modules, no file imports both — allowed`);
  }
}

console.log(`plans=${plans.length} kept=${kept.length} errors=${errors.length}`);
for (const e of errors) console.log("  ✗ " + e);
if (!errors.length) {
  const rn = kept.reduce((n, p) => n + Object.keys(p.renames).length, 0);
  const files = kept.filter((p) => p.newFileName).length;
  console.log(`  ${rn} renames across ${kept.length} modules, ${files} file renames`);
}
process.exit(errors.length ? 1 : 0);
