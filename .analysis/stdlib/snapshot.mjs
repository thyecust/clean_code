// 生成「改动前」的结构快照，喂给 `.analysis/rename/verify.mjs`。
//
// 思路：备份目录里存的是**改动前**的内容，所以「有备份的文件用备份、其余用当前树」
// 就等于改动前的全树快照。分批落盘时随时可以重新生成，覆盖目前所有已落盘批次。
//
//   node .analysis/stdlib/snapshot.mjs
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { ROOT, walk, shortPath } from "../rename/paths.mjs";
import { analyze } from "../rename/lib.mjs";
import { exportNames } from "../rename/snapshot.mjs";
import { WORK, BACKUP } from "./run.mjs";

const backupDir = BACKUP;
const backed = new Set();
if (existsSync(backupDir)) {
  for (const name of readdirSync(backupDir)) backed.add(name.replace(/__/g, "/"));
}

const out = {};
for (const f of walk(ROOT)) {
  const rel = shortPath(f);
  const bpath = join(backupDir, rel.split("/").join("__"));
  const s = backed.has(rel) && existsSync(bpath) ? readFileSync(bpath, "utf8") : readFileSync(f, "utf8");
  const rec = { exports: exportNames(s), len: s.length, sha: createHash("sha1").update(s).digest("hex").slice(0, 12) };
  try {
    const { sm } = analyze(s);
    rec.free = [...new Set(sm.globalScope.through.map((r) => r.identifier.name))].sort();
    rec.ok = true;
  } catch (e) {
    rec.ok = false;
    rec.err = e.message.split("\n")[0];
    rec.free = [];
  }
  out[rel] = rec;
}
const p = join(WORK, "snapshot.before.json");
writeFileSync(p, JSON.stringify(out, null, 1));
console.log(`snapshot.before -> ${p}（${Object.keys(out).length} 个文件，其中 ${backed.size} 个取自备份）`);
