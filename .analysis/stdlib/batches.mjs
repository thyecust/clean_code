// 按「别名条数」把有改动的文件切成批次，写到 .work/batches/*.txt（每行一个仓库相对路径）。
//
//   node .analysis/stdlib/batches.mjs
//
// B0 是金丝雀：强制包含**跨组同名目标**的全部文件 + 唯一一处再导出改写（lodash）——
// 预留逻辑与再导出改写这两条最危险的代码路径，先在几十条的量级上验通。
// 三个怪物各自单独一批：它们占 60% 的改动量，`--help` md5 一炸，一次二分就能定位到文件。
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { ROOT, walk } from "../rename/paths.mjs";
import { analyze } from "../rename/lib.mjs";
import { isBuiltin } from "./builtins.mjs";
import { plan } from "./plan.mjs";
import { WORK } from "./run.mjs";

const MONSTERS = ["execution-core.js", "核心应用-Agent循环.wmzgeczq.js", "standalone-tools.js"];
const FORCED = [
  "02-功能模块/文件监听-Watch/文件监听-Watch.3efypmps.js",
  "02-功能模块/自托管Runner/chunk-cgmv5fe7.js",
  "02-功能模块/自托管Runner/自托管Runner.9rwvsyx9.js",
  "02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js",
  "00-第三方库/lodash/lodash.2x3q7cfh.js",
  "02-功能模块/插件系统/pluginEvalInitHandler.sdxbyz28.js",
];

/** 一个文件里「跨组同名目标」的组数（同一名字有 >1 个来源模块候选） */
function crossGroup(f, src) {
  const { ast } = analyze(src);
  const byName = new Map();
  for (const n of ast.body) {
    if (n.type !== "ImportDeclaration" || !isBuiltin(n.source.value)) continue;
    for (const sp of n.specifiers) {
      if (sp.type !== "ImportSpecifier" || sp.imported.name === sp.local.name) continue;
      const T = sp.imported.name;
      if (!byName.has(T)) byName.set(T, new Set());
      byName.get(T).add(n.source.value.startsWith("node:") ? n.source.value.slice(5) : n.source.value);
    }
  }
  return [...byName.values()].filter((s) => s.size > 1).length;
}

const rows = [];
for (const f of walk(ROOT)) {
  const src = readFileSync(f, "utf8");
  const rel = f.slice(ROOT.length + 1);
  const p = plan(src, { file: rel });
  if (!p.edits.length) continue;
  const aliases = p.groups.reduce((n, g) => n + g.items.length, 0) + p.skipped.length;
  rows.push({ rel, aliases, edits: p.edits.length, cross: crossGroup(f, src), monster: MONSTERS.some((m) => rel.endsWith(m)) });
}

const dir = join(WORK, "batches");
mkdirSync(dir, { recursive: true });
const write = (name, list) => {
  writeFileSync(join(dir, name + ".txt"), list.map((r) => r.rel).join("\n") + "\n");
  console.log(`${name}: ${list.length} 个文件 / ${list.reduce((n, r) => n + r.edits, 0)} 处编辑`);
};

const monsters = MONSTERS.map((m) => rows.find((r) => r.rel.endsWith(m)));
const forced = FORCED.map((f) => rows.find((r) => r.rel === f) ?? { rel: f }).filter(Boolean);
const rest = rows.filter((r) => !r.monster);
console.log(`合计 ${rows.length} 个有改动的文件`);
console.log(`其中含跨组同名目标的文件 ${rows.filter((r) => r.cross).length} 个：`);
for (const r of rows.filter((r) => r.cross)) console.log(`   ${r.cross} 组冲突 · ${r.aliases} 条别名  ${r.rel}`);

write("b0-canary", forced);
write("b1-rest", rest.filter((r) => !forced.some((f) => f.rel === r.rel)).sort((a, b) => a.aliases - b.aliases));
monsters.forEach((m, i) => m && write(`b${i + 2}-monster-${m.rel.split("/").pop().replace(/\.js$/, "")}`, [m]));
