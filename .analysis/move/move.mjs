// 搬家：按一份移动计划把文件/目录搬走，并重写全树的相对路径。
//
//   node move.mjs <plan.json> <manifest.json> [--dry]
//
// plan.json:
//   {
//     "moves":   [ { "from": "旧路径", "to": "新路径" } ],      // 目录或文件都行
//     "modules": { "新目录": { "module": "显示名", "tier": 1 } } // 新目录的索引归属
//   }
//
// 重写分三类基准（这是本工具存在的主要理由，CI 一条都没覆盖）：
//   1 静态 import / export-from / import() / 字面 import.meta.require
//        —— 相对**引用方文件**解析
//   2 importMetaRequire("./x")
//        —— 相对**捕获 import.meta.require 的那个模块所在目录**解析（不是引用方！）
//   3 `readEmbeddedAsset*("./x", import.meta.dirname)` 之类的相对字面量
//        —— 相对**引用方文件**解析，且资源必须与加载方同目录
//
// 落盘顺序：先写新路径、再删旧路径（交给 git 的改名检测）；目录空了就删掉。

import { writeFileSync, readFileSync, existsSync, unlinkSync, rmdirSync, readdirSync, mkdirSync, statSync } from "node:fs";
import { join, dirname, normalize, relative, basename, sep } from "node:path";
import {
  ROOT, WORK, SKIP, walkAll, loadTree, buildEdges, splice, relativeSpec, snap, short,
} from "./lib.mjs";
import { readFileMap, patchEntry, writeModulesMd, checkModulesMdRoundTrips } from "./index-io.mjs";

const planFile = process.argv[2];
const manifestFile = process.argv[3];
const dry = process.argv.includes("--dry");
if (!planFile) { console.error("用法: node move.mjs <plan.json> <manifest.json> [--dry]"); process.exit(2); }

const plan = JSON.parse(readFileSync(planFile, "utf8"));
const moves = plan.moves ?? [];
const modSpec = plan.modules ?? {};

const errors = [];
const warnings = [];

// ---------- 1. 展开为逐文件映射 ----------

const allFiles = walkAll(ROOT);
const allSet = new Set(allFiles.map(normalize));

const fileMap = new Map(); // 绝对旧路径 -> 绝对新路径
const dirRemovals = [];

for (const mv of moves) {
  const from = normalize(join(ROOT, mv.from));
  const to = normalize(join(ROOT, mv.to));
  if (!existsSync(from)) { errors.push(`源不存在: ${mv.from}`); continue; }
  if (allSet.has(from)) {
    // 文件
    if (fileMap.has(from)) { errors.push(`同一源出现两次: ${mv.from}`); continue; }
    fileMap.set(from, to);
  } else {
    // 目录：递归展开
    const inner = [];
    (function rec(d) {
      for (const e of readdirSync(d, { withFileTypes: true })) {
        if (SKIP.has(e.name)) continue;
        const p = join(d, e.name);
        if (e.isDirectory()) rec(p);
        else inner.push(p);
      }
    })(from);
    if (!inner.length) { errors.push(`目录为空: ${mv.from}`); continue; }
    dirRemovals.push(from);
    for (const p of inner) fileMap.set(p, join(to, relative(from, p)));
  }
}

// ---------- 2. 校验 ----------

const targets = new Map(); // 新路径 -> 旧路径
for (const [a, b] of fileMap) {
  if (targets.has(b)) errors.push(`两个源指向同一目标: ${short(a)} 与 ${short(targets.get(b))} -> ${short(b)}`);
  targets.set(b, a);
}
for (const [b, a] of targets) {
  if (existsSync(b) && !fileMap.has(b)) errors.push(`目标已存在: ${short(b)}`);
  if (a === b) errors.push(`原地不动: ${short(a)}`);
}
// macOS 大小写不敏感：目标之间不得只差大小写
{
  const lower = new Map();
  for (const b of targets.keys()) {
    const k = b.toLowerCase();
    if (lower.has(k)) errors.push(`目标只差大小写: ${short(lower.get(k))} 与 ${short(b)}`);
    lower.set(k, b);
  }
}

const newPath = (p) => fileMap.get(p) ?? p;

// 撞名闸门：_index/file-map.json 以「稳定 chunk id」为键、覆盖的是**主树**，
// 所以只要求主树 .js 的 basename 唯一。
// 不参与判定：`src/plugins/functionHooks/hooks-worker/`（自带依赖的独立 bundle，
// 本来就与主树重名 —— 见 README 的旁注）与 `*.original.js`（REPLACED.md 记的原件）。
{
  const MAIN = ["00-第三方库", "01-核心基础设施", "02-功能模块", "03-入口与运行时", "cli.js"];
  const inMain = (p) => MAIN.some((t) => p === join(ROOT, t) || p.startsWith(join(ROOT, t) + sep));
  const seen = new Map();
  for (const p of allFiles) {
    if (!p.endsWith(".js") || p.endsWith(".original.js")) continue;
    if (!inMain(p)) continue;
    const np = newPath(p);
    const b = basename(np);
    if (seen.has(b)) errors.push(`搬完后 basename 撞名: ${b}（${short(seen.get(b))} 与 ${short(np)}）`);
    seen.set(b, np);
  }
}

if (errors.length) {
  console.log("计划有问题 —— 什么都没写：");
  for (const e of errors) console.log("  ✗ " + e);
  process.exit(1);
}

// ---------- 3. 三类基准的路径重写 ----------

const tree = loadTree();          // 只含 .js
const src = tree.src;
const perFile = new Map();        // 绝对路径 -> edits[]
const push = (f, e) => {
  if (!perFile.has(f)) perFile.set(f, []);
  perFile.get(f).push(e);
};

const editsOf = (f) => src.get(f) ?? readFileSync(f, "utf8");

// 3.1 静态 / 动态 / 字面懒加载：相对引用方解析
let edgeRewrites = 0;
for (const e of buildEdges(src)) {
  const to = e.to;
  if (!fileMap.has(to)) continue;
  const newFrom = newPath(e.from);
  const newTo = newPath(to);
  const spec = relativeSpec(newFrom, newTo);
  if (spec === e.spec) continue;
  push(e.from, { start: e.specStart, end: e.specEnd, text: spec });
  edgeRewrites++;
}

// 3.2 `importMetaRequire("./x")`：相对 hub 目录
const HUB = /(^|\/)(chunk-2c9tjhwd)\.js$/;
const hubDirs = new Set();
for (const p of src.keys()) if (HUB.test(p)) hubDirs.add(dirname(p));
if (hubDirs.size !== 1) warnings.push(`捕获 import.meta.require 的模块有 ${hubDirs.size} 个：${[...hubDirs].map(short).join(", ")}`);
const defaultHub = [...hubDirs][0];

const IMPORTER_OF_HUB = /from\s*["']([^"']*chunk-2c9tjhwd\.js)["']/;
const CALL = /importMetaRequire\(\s*["'](\.[^"']*)["']\s*\)/g;
let lazyRewrites = 0;
for (const [f, s] of src) {
  let hub = defaultHub;
  const h = s.match(IMPORTER_OF_HUB);
  if (h) hub = dirname(normalize(join(dirname(f), h[1])));
  for (const m of s.matchAll(CALL)) {
    const spec = m[1];
    const target = normalize(join(hub, spec));
    if (!fileMap.has(target)) continue;
    const specStart = m.index + m[0].indexOf(spec);
    const next = relativeSpec(newPath(hub), newPath(target));
    if (next === spec) continue;
    push(f, { start: specStart, end: specStart + spec.length, text: next });
    lazyRewrites++;
  }
}

// 3.3 随行资源：`"./x"` 字面量解析到的非 .js 文件，与引用它的加载方同目录
const LIT = /["'](\.\.?\/[^"'\n]{1,200})["']/g;
const resourceRefs = new Map(); // 资源绝对路径 -> Set(引用方绝对路径)
for (const [f, s] of src) {
  for (const m of s.matchAll(LIT)) {
    const lit = m[1];
    const before = s.slice(Math.max(0, m.index - 24), m.index);
    if (/importMetaRequire\($/.test(before)) continue;   // 3.2 管这一族
    if (lit.endsWith(".js")) continue;
    const t = normalize(join(dirname(f), lit));
    // 必须是**文件**：`"../.."` 这类字面量会解析到存在的目录，existsSync 对它也为真，
    // 放进去会给目录造出一份同名的「资源副本」。
    if (!existsSync(t) || t.endsWith(".js") || !statSync(t).isFile()) continue;
    if (!resourceRefs.has(t)) resourceRefs.set(t, new Set());
    resourceRefs.get(t).add(f);
  }
}

// 每个资源最终必须出现在哪些目录里。
// 注意资源自己也可能被目录搬家带着走，所以基准是**搬完之后的**位置 newPath(res)。
const resourcePlacement = new Map(); // 资源 -> { existsAfterMove: bool, keepAtDest: bool, copies: Set<dir> }
for (const [res, loaders] of resourceRefs) {
  const dest = newPath(res);          // 资源搬完在哪（没搬就是原地）
  const destDir = dirname(dest);
  const needed = new Set();
  let wantedAtDest = false;
  for (const l of loaders) {
    const d = dirname(newPath(l));
    if (d === destDir) wantedAtDest = true; else needed.add(d);
  }
  if (needed.size || !wantedAtDest) {
    resourcePlacement.set(res, { dest, destDir, keepAtDest: wantedAtDest, copies: needed });
  }
}

let resourceMoves = 0, resourceCopies = 0;
for (const [, pl] of resourcePlacement) {
  if (!pl.keepAtDest) resourceMoves++;
  resourceCopies += pl.copies.size;
}

// ---------- 4. 编辑落盘 ----------

const manifest = {
  plan: planFile,
  moves,
  fileMap: [...fileMap].map(([a, b]) => [short(a), short(b)]),
  edits: [],
  resources: [],
  beforeSnapshot: null,
};

const warningsAll = warnings;
if (errors.length) { console.log(errors.join("\n")); process.exit(1); }

console.log(`计划: ${fileMap.size} 个文件移动 · 说明符重写 ${edgeRewrites + lazyRewrites} 处` +
  `（静态/动态 ${edgeRewrites} + 懒加载基准 ${lazyRewrites}）· 随行资源 ${resourceMoves} 搬 / ${resourceCopies} 复制`);
for (const w of warningsAll) console.log("  WARN " + w);

if (dry) {
  console.log("\n[dry] 抽查前 20 个移动：");
  for (const [a, b] of [...fileMap].slice(0, 20)) console.log(`   ${short(a)}\n     -> ${short(b)}`);
  process.exit(0);
}

// 前像快照（给 verify.mjs 做往返与导出面比对）
manifest.beforeSnapshot = join(WORK, "before.json");
writeFileSync(manifest.beforeSnapshot, JSON.stringify(snap()));

// 备份前像（往返验证要逐字节比）
const backupDir = join(WORK, "backup");
mkdirSync(backupDir, { recursive: true });
for (const f of perFile.keys()) {
  writeFileSync(join(backupDir, short(f).replace(/\//g, "__")), src.get(f) ?? readFileSync(f, "utf8"));
}
// 被搬但内容未改的文件也要备份（verify 要证明「内容只有路径这一种改动」）
for (const [a] of fileMap) {
  if (perFile.has(a)) continue;
  const key = short(a).replace(/\//g, "__");
  if (!existsSync(join(backupDir, key))) writeFileSync(join(backupDir, key), readFileSync(a));
}
for (const res of resourceRefs.keys()) {
  const key = short(res).replace(/\//g, "__");
  if (!existsSync(join(backupDir, key))) writeFileSync(join(backupDir, key), readFileSync(res));
}

// 记录编辑（供往返还原）
for (const [f, edits] of perFile) {
  const s = editsOf(f);
  manifest.edits.push({
    path: short(f),
    newPath: short(newPath(f)),
    edits: [...edits].sort((a, b) => a.start - b.start)
      .map((e) => ({ start: e.start, end: e.end, text: e.text, was: s.slice(e.start, e.end) })),
  });
}

// 写：新路径 + 改过的内容
for (const [a, b] of fileMap) {
  mkdirSync(dirname(b), { recursive: true });
  const edits = perFile.get(a);
  const content = edits ? splice(src.get(a) ?? readFileSync(a, "utf8"), edits, short(a)) : readFileSync(a);
  writeFileSync(b, content);
}
// 未被搬但被改的（理论上不该有：改的都是 import 它们的人，而它们自己也要搬或留在原地）
for (const f of perFile.keys()) {
  if (fileMap.has(f)) continue;
  writeFileSync(f, splice(src.get(f), perFile.get(f), short(f)));
}
// 删旧路径
for (const [a] of fileMap) if (existsSync(a)) unlinkSync(a);

// 随行资源：加载方在的每个目录里都得有一份
for (const [res, pl] of resourcePlacement) {
  const buf = readFileSync(pl.dest);
  for (const d of pl.copies) {
    mkdirSync(d, { recursive: true });
    writeFileSync(join(d, basename(res)), buf);
    manifest.resources.push({ from: short(res), to: short(join(d, basename(res))), copy: true });
  }
  if (!pl.keepAtDest) {
    // 没有加载方留在这儿了 —— 这一份是多余的，删掉
    unlinkSync(pl.dest);
    manifest.resources.push({ from: short(res), to: "(随加载方离去)", copy: false });
  }
}

// 清空目录
function prune(dir) {
  if (!existsSync(dir)) return;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory() && !SKIP.has(e.name)) prune(join(dir, e.name));
  }
  if (dir !== ROOT && readdirSync(dir).length === 0) rmdirSync(dir);
}
for (const d of dirRemovals.sort((a, b) => b.length - a.length)) prune(d);

// ---------- 5. 同步 _index ----------

const fmText0 = readFileSync(join(ROOT, "_index/file-map.json"), "utf8");
let fmText = fmText0;
const fm = readFileMap();

// 目的地目录 -> 索引归属（模块显示名 / tier）
const destSpec = new Map();
for (const [a, b] of fileMap) {
  if (!a.endsWith(".js")) continue;
  const destDir = relative(ROOT, dirname(b));
  if (destSpec.has(destDir)) continue;
  if (modSpec[destDir]) { destSpec.set(destDir, modSpec[destDir]); continue; }
  // 该目录里已有的条目占多数的是什么
  const tally = new Map();
  for (const v of Object.values(fm)) {
    if (dirname(v.path) !== destDir) continue;
    const k = `${v.module} ${v.tier}`;
    tally.set(k, (tally.get(k) ?? 0) + 1);
  }
  if (tally.size) {
    const [k] = [...tally].sort((x, y) => y[1] - x[1])[0];
    const [module, tier] = k.split(" ");
    destSpec.set(destDir, { module, tier: Number(tier) });
  } else {
    errors.push(`新目录没有索引归属，请在 plan.modules 里给出: ${destDir}`);
  }
}
if (errors.length) {
  console.log("索引归属缺失（树已搬动，先补 plan.modules 再重跑同步）：");
  for (const e of errors) console.log("  ✗ " + e);
  process.exit(1);
}

let indexPatched = 0;
const fmPaths = new Map();   // 索引里的 path -> 键
for (const [k, v] of Object.entries(fm)) fmPaths.set(v.path, k);
for (const [a, b] of fileMap) {
  if (!a.endsWith(".js")) continue;
  const oldRel = relative(ROOT, a), newRel = relative(ROOT, b);
  const key = fmPaths.get(oldRel);
  if (!key) { console.log(`  note: 索引里没有 ${oldRel}`); continue; }
  const spec = destSpec.get(relative(ROOT, dirname(b)));
  const r = patchEntry(fmText, key, { path: newRel, module: spec.module, tier: spec.tier });
  if (!r.ok) { console.log(`  note: 索引未同步 ${key}: ${r.why}`); continue; }
  fmText = r.text;
  indexPatched++;
}
writeFileSync(join(ROOT, "_index/file-map.json"), fmText);
writeModulesMd(readFileMap());

const rt = checkModulesMdRoundTrips();
if (rt) console.log(`  note: modules.md 重生成后自检不为零 diff @${rt.at}`);

manifest.indexPatched = indexPatched;
writeFileSync(manifestFile, JSON.stringify(manifest, null, 1));
console.log(`已搬 ${fileMap.size} 个文件 · 改 ${perFile.size} 个文件的路径 · 索引同步 ${indexPatched} 条 · 资源 ${manifest.resources.length} 项`);
console.log(`manifest -> ${manifestFile}`);
