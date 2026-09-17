// Merge per-slice (or per-batch) plan files into one applyable wave.
//
// A big chunk is processed as several slices, and every slice writes a plan naming the
// SAME `module`. Merging them is not just concatenation: the result must stay a
// bijection. Two slices picking the same new name for different exports would give one
// module two exports with the same name — the module then fails to parse.
//
//   node combine.mjs <plans-dir> <out.json> [drops.json]
//
// drops.json (optional) resolves a collision the bijection check found. Rather than
// invent a distinction the evidence does not support, the usual answer is to drop the
// weaker side and leave that export mangled:
//
//   [{ "drop": "s5n", "name": "resolveAutoCompactWindow", "keep": "qS",
//      "why": "s5n is plain default normalization; qS is the one that reads the env var" }]
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const dir = process.argv[2];
const out = process.argv[3];
const dropsFile = process.argv[4];
if (!dir || !out) {
  console.error("用法: node combine.mjs <plans-dir> <out.json> [drops.json]");
  process.exit(2);
}

const all = [];
for (const f of readdirSync(dir).filter((x) => x.endsWith(".json")).sort()) {
  all.push(...JSON.parse(readFileSync(join(dir, f), "utf8")));
}
if (!all.length) { console.error(`没有计划：${dir}`); process.exit(1); }

const byModule = new Map();
for (const p of all) {
  if (!byModule.has(p.module)) byModule.set(p.module, { ...p, renames: { ...p.renames } });
  else {
    const prev = byModule.get(p.module);
    for (const [o, n] of Object.entries(p.renames)) {
      if (prev.renames[o] && prev.renames[o] !== n) {
        console.log(`  同一导出名被两片改成不同名字 ${o}: ${prev.renames[o]} vs ${n}（取后者）`);
      }
      prev.renames[o] = n;
    }
    if (p.newFileName) prev.newFileName = p.newFileName;
  }
}

// 跨片撞名：按 drops.json 撤掉弱的一侧
if (dropsFile && existsSync(dropsFile)) {
  for (const d of JSON.parse(readFileSync(dropsFile, "utf8"))) {
    let hit = 0;
    for (const [, p] of byModule) {
      if (d.module && p.module !== d.module) continue;
      const key = Object.keys(p.renames).find((k) => k === d.drop && p.renames[k] === d.name);
      if (!key) continue;
      delete p.renames[key];
      p.why = (p.why ?? "") + ` | dropped ${key}->${d.name}: ${d.why}`;
      console.log(`  dropped ${d.drop} -> ${d.name}${d.keep ? ` (kept on ${d.keep})` : ""}`);
      hit++;
    }
    if (!hit) console.log(`  drops.json 条目未命中（可能已被撤或名字不符）: ${d.drop} -> ${d.name}`);
  }
}

let bad = 0;
for (const [m, p] of byModule) {
  const seen = new Map();
  for (const [o, n] of Object.entries(p.renames)) {
    if (seen.has(n)) {
      console.log(`  ✗ DUPLICATE TARGET ${m}: ${o} 与 ${seen.get(n)} 都要叫 ${n}`);
      bad++;
    } else seen.set(n, o);
  }
  if (!p.newFileName) continue;
  // 聚合 chunk 不能改名：它不是一个模块，是很多模块的容器
  console.log(`  注意：${m} 同时有 newFileName=${p.newFileName} —— 聚合 chunk 的切片不该给文件名，请确认`);
}

if (bad) {
  console.log(`\n有 ${bad} 组重复目标名。把它们写进 drops.json 撤掉弱的一侧，然后重跑。`);
  process.exit(1);
}

const merged = [...byModule.values()];
writeFileSync(out, JSON.stringify(merged, null, 1));
writeFileSync(out.replace(/\.json$/, ".modules.json"), JSON.stringify([...new Set(merged.map((p) => p.module))], null, 1));
console.log(`merged ${all.length} plan files -> ${merged.length} modules · ${merged.reduce((n, p) => n + Object.keys(p.renames).length, 0)} renames · ${merged.filter((p) => p.newFileName).length} file renames`);
