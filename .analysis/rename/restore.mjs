// Undo an applied batch: push content back to the pre-batch paths from BACKUP_DIR.
import { readFileSync, writeFileSync, existsSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import { ROOT, WORK } from "./paths.mjs";

const manifest = JSON.parse(readFileSync(process.argv[2], "utf8"));
const backupDir = process.argv[3] || join(WORK, "backup");

let restored = 0, removed = 0;
for (const rec of manifest.files ?? []) {
  const bp = join(backupDir, rec.path.replace(/\//g, "__"));
  if (!existsSync(bp)) { console.log(`  no backup: ${rec.path}`); continue; }
  writeFileSync(join(ROOT, rec.path), readFileSync(bp, "utf8"));
  restored++;
}
for (const [oldRel, newRel] of manifest.fileRenames) {
  const np = join(ROOT, newRel);
  if (existsSync(np)) { unlinkSync(np); removed++; }
  if (!existsSync(join(ROOT, oldRel))) {
    const bp = join(backupDir, oldRel.replace(/\//g, "__"));
    if (existsSync(bp)) { writeFileSync(join(ROOT, oldRel), readFileSync(bp, "utf8")); restored++; }
    else console.log(`  no backup for renamed-only file: ${oldRel}`);
  }
}
for (const [f, key] of [["_index/file-map.json", "_index__file-map.json"], ["_index/modules.md", "_index__modules.md"]]) {
  const bp = join(backupDir, key);
  if (existsSync(bp)) { writeFileSync(join(ROOT, f), readFileSync(bp, "utf8")); restored++; }
}
console.log(`restored ${restored} files, removed ${removed} renamed copies`);
