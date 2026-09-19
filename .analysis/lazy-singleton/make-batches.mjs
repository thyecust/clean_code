// 把证据包打包成批次文件：小模块合批，大模块（已被 dossier.mjs 切过片）单独成批。
//
// 贪心：按路径排序后顺序装填，超过上限就开新批。装了哪些证据包记在
// batch-XX.json 里，供命名 agent 的输出回溯（也供 check-coverage 比对）。
//
// 用法：node make-batches.mjs [--max-bytes=120000] [--out=.work/batches]
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const WORK = process.env.LS_WORK || join(HERE, ".work");
const DOSSIER = join(WORK, "dossier");

const args = process.argv.slice(2);
const maxBytes = Number(args.find((a) => a.startsWith("--max-bytes="))?.slice(12)) || 120000;
const OUT = args.find((a) => a.startsWith("--out="))?.slice(6) || join(WORK, "batches");
mkdirSync(OUT, { recursive: true });

const files = readdirSync(DOSSIER).filter((f) => f.endsWith(".md")).sort();
if (!files.length) { console.error(`证据包目录是空的：${DOSSIER}`); process.exit(1); }

// 同一个模块的多片**尽量**同批（同一个文件里的命名风格要一致），但装不下时允许切开：
// 切开只会在 merge-plans 那里变成「同文件多份计划」，那是能合并的（冲突会报错），
// 而一个 280KB 的批次 agent 读不完 —— 读不完是静默失败，更糟。
const byModule = new Map();
for (const f of files) {
  const mod = f.replace(/\.part\d+\.md$/, "").replace(/\.md$/, "");
  if (!byModule.has(mod)) byModule.set(mod, []);
  byModule.get(mod).push(f);
}
const units = [];
for (const [mod, parts] of byModule) {
  parts.sort();
  if (parts.length === 1) { units.push({ mod, parts, bytes: statSync(join(DOSSIER, parts[0])).size, whole: true }); continue; }
  // 多片的模块：整块放得下就当一单元，放不下就一片一单元
  const total = parts.reduce((n, p) => n + statSync(join(DOSSIER, p)).size, 0);
  if (total <= maxBytes) units.push({ mod, parts, bytes: total, whole: true });
  else for (const p of parts) units.push({ mod, parts: [p], bytes: statSync(join(DOSSIER, p)).size, whole: false });
}
units.sort((a, b) => b.bytes - a.bytes); // 大的先放，减少碎片

const batches = [];
let cur = { files: [], bytes: 0 };
for (const m of units) {
  if (cur.files.length && cur.bytes + m.bytes > maxBytes) { batches.push(cur); cur = { files: [], bytes: 0 }; }
  cur.files.push(...m.parts);
  cur.bytes += m.bytes;
}
if (cur.files.length) batches.push(cur);

// 每个模块的片散布在哪几批 —— 写进批头，让 agent 知道自己只看到了一部分
const homeOf = new Map(); // partFile -> [batchName...]
batches.forEach((b, i) => {
  const name = `batch-${String(i + 1).padStart(2, "0")}`;
  for (const f of b.files) {
    const mod = f.replace(/\.part\d+\.md$/, "").replace(/\.md$/, "");
    if (!homeOf.has(mod)) homeOf.set(mod, []);
    if (!homeOf.get(mod).includes(name)) homeOf.get(mod).push(name);
  }
});

const index = [];
batches.forEach((b, i) => {
  const name = `batch-${String(i + 1).padStart(2, "0")}`;
  const spread = [];
  for (const f of b.files) {
    const mod = f.replace(/\.part\d+\.md$/, "").replace(/\.md$/, "");
    const homes = homeOf.get(mod);
    if (homes.length > 1 && !spread.some((s) => s.mod === mod)) spread.push({ mod, homes });
  }
  const body = b.files.map((f) => readFileSync(join(DOSSIER, f), "utf8")).join("\n\n---\n\n");
  let header = `# 批次 ${i + 1}/${batches.length}（${b.files.length} 片 / ${(b.bytes / 1024).toFixed(0)}KB）\n\n` +
    `命名规则见 /Users/game-netease/clean_code/.analysis/lazy-singleton/NAMING-RULES.md\n\n`;
  if (spread.length) {
    header += `> **注意：本批里有 ${spread.length} 个模块的其它片在别的批次**（那些片由别的 agent 判）。\n` +
      `> 它们不影响你的判断，但请把命名风格向「本文件里已经可读的名字」对齐，减少同文件内的风格漂移。\n`;
  }
  header += `\n---\n\n`;
  writeFileSync(join(OUT, name + ".md"), header + body);
  writeFileSync(join(OUT, name + ".json"), JSON.stringify({ batch: name, parts: b.files, spread }, null, 1));
  index.push({ batch: name, parts: b.files.length, kb: Math.round(b.bytes / 1024), splitModules: spread.length });
});
writeFileSync(join(OUT, "index.json"), JSON.stringify(index, null, 1));

console.log(`证据包 ${files.length} 片 / ${byModule.size} 个模块 -> ${batches.length} 批（上限 ${(maxBytes / 1024).toFixed(0)}KB）`);
for (const r of index) console.log(`  ${r.batch}  ${String(r.parts).padStart(3)} 片  ${String(r.kb).padStart(4)}KB`);
console.log(`-> ${OUT}`);
