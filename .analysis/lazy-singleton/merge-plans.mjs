// 合并多份计划：大文件切片后，同一个 module 会有多个 agent 各出一份计划。
// apply-local.mjs 拒绝同文件两份计划（那是刻意的闸门：两份计划改同一个文件时，
// 编辑偏移会互相失效），所以必须先合并成一份。
//
// 冲突（两个 agent 给同一个旧名定了不同的新名）默认报错退出；
// 同一个 module 的两份计划里新名撞车也报错。
//
// 用法：node merge-plans.mjs <out.json> <in1.json> <in2.json> ...
import { readFileSync, writeFileSync } from "node:fs";

const [outFile, ...inFiles] = process.argv.slice(2);
if (!outFile || !inFiles.length) { console.error("用法：node merge-plans.mjs <out.json> <in...>"); process.exit(2); }

const merged = new Map(); // module -> { module, renames, why }
const errors = [];

for (const f of inFiles) {
  let plans;
  try { plans = JSON.parse(readFileSync(f, "utf8")); }
  catch (e) { errors.push(`${f}: 读不了/解析失败 ${e.message}`); continue; }
  if (!Array.isArray(plans)) { errors.push(`${f}: 不是数组`); continue; }

  for (const p of plans) {
    if (!p.module || !p.renames) { errors.push(`${f}: 计划条目缺 module/renames`); continue; }
    if (!merged.has(p.module)) merged.set(p.module, { module: p.module, renames: {}, why: [] });
    const m = merged.get(p.module);
    for (const [oldName, newName] of Object.entries(p.renames)) {
      // hasOwn：旧名可能是 `toString` / `constructor` 这类，普通下标会命中 Object.prototype
      if (Object.hasOwn(m.renames, oldName) && m.renames[oldName] !== newName) {
        errors.push(`${p.module}: ${oldName} 两个 agent 给了不同的新名 —— ${m.renames[oldName]} vs ${newName}`);
        continue;
      }
      m.renames[oldName] = newName;
    }
    if (p.why) m.why.push(p.why);
  }
}

// 同一 module 内新名不得撞车
for (const m of merged.values()) {
  const seen = new Map();
  for (const [oldName, newName] of Object.entries(m.renames)) {
    if (seen.has(newName)) errors.push(`${m.module}: 新名 ${newName} 被 ${seen.get(newName)} 和 ${oldName} 同时占用`);
    seen.set(newName, oldName);
  }
}

if (errors.length) {
  console.log("❌ 合并有冲突：");
  for (const e of errors) console.log("   " + e);
  process.exit(1);
}

const out = [...merged.values()]
  .filter((m) => Object.keys(m.renames).length)
  .map((m) => ({ module: m.module, renames: m.renames, why: m.why.join(" / ") }));
writeFileSync(outFile, JSON.stringify(out, null, 1));
console.log(`✅ 合并 ${inFiles.length} 份 -> ${out.length} 个模块 / ${out.reduce((n, p) => n + Object.keys(p.renames).length, 0)} 个改名`);
console.log(`   -> ${outFile}`);
