import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { realpathSync } from "node:fs";
import { loadTree, shortPath, ROOT, WORK } from "./paths.mjs";
import { buildIndex } from "./index.mjs";
import { analyze } from "./lib.mjs";
import { exportNames } from "./snapshot.mjs";

const { src } = loadTree();
const idx = buildIndex();

export { isMangled } from "./mangle.mjs";
import { isMangled } from "./mangle.mjs";

import { createHash } from "node:crypto";
export function scan() {
const rows = [];
const byHash = new Map();
for (const [f, s] of src) {
  const rel = shortPath(f);
  if (rel.startsWith("00-第三方库/")) continue;
  if (!rel.endsWith(".js")) continue;
  let ex;
  try { ex = exportNames(s); } catch { continue; }
  if (!ex.length || ex.includes("*")) continue;
  const mangled = ex.filter(isMangled);
  if (!mangled.length) continue;
  const importers = idx.importers.get(f) ?? [];
  const infos = [...importers].map((e) => ({ form: e.form, from: shortPath(e.from), line: e.line, spec: e.spec }));
  const hash = createHash("sha1").update(s).digest("hex");
  if (!byHash.has(hash)) byHash.set(hash, []);
  byHash.get(hash).push(rel);
  rows.push({
    path: rel,
    hash,
    bytes: s.length,
    exports: ex,
    mangled,
    readable: ex.filter((n) => !isMangled(n)),
    allMangled: mangled.length === ex.length,
    importers: infos,
    importerFiles: new Set(infos.map((i) => i.from)).size,
    dynamicOnly: infos.length > 0 && infos.every((i) => i.form === "dynamic" || i.form === "lazy"),
  });
}
// content-identical twins (the hooks-worker bundle duplicates a few chunks;
// a couple of modules are duplicated across feature dirs). They are the same
// module, so a plan for one must apply to all of them — but each is named once.
for (const r of rows) {
  r.twins = byHash.get(r.hash).filter((p) => p !== r.path && !p.endsWith(".original.js"));
  // representative: the copy outside the standalone hooks-worker bundle
  r.isTwinRep = !r.twins.length || !r.path.startsWith("src/plugins/functionHooks/hooks-worker/");
}
rows.sort((a, b) => a.bytes - b.bytes);
return rows;
}
const rows = scan();
writeFileSync(join(WORK, "candidates.json"), JSON.stringify(rows, null, 1));

const t = (f) => rows.filter(f).length;
console.log("modules with >=1 mangled export (non-third-party):", rows.length);
console.log("  all exports mangled:", t((r) => r.allMangled));
console.log("  <=4KB & all mangled:", t((r) => r.allMangled && r.bytes <= 4096));
console.log("  <=8KB & all mangled:", t((r) => r.allMangled && r.bytes <= 8192));
console.log("  <=16KB & all mangled:", t((r) => r.allMangled && r.bytes <= 16384));
console.log("  mixed (has readable too):", t((r) => !r.allMangled));
console.log("  no importer files at all (unused export):", t((r) => r.importerFiles === 0));
console.log();
console.log("total mangled export names across them:", rows.reduce((n, r) => n + r.mangled.length, 0));
