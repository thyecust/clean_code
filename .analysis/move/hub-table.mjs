// 拆 `01-核心基础设施/共享小工具-未细化/`（466 个 js + 109 个随行资源）的**判定表**。
//
//   node hub-table.mjs              打印表格（给人审）
//   node hub-table.mjs --emit <p>   落成 move.mjs 的计划 JSON
//
// 逐文件判定来自 `.analysis/move/hub-plan.json`（`{targets, keep}`，每条含 `why` 证据，
// `keep` 另含 `cluster` = 归属子目录，null = 证据不足进残余）。与 `rename-table.mjs` /
// `thirdparty-table.mjs` 同一套流程：判定交给人读，改写交给脚本。
//
// 三类去向：
//   targets  下沉到既有的 02/03/01 模块
//   cluster  留在 01，进具名的子模块（已有目录或新建）
//   其余     进残余目录 `核心工具-杂项` —— 证据不足；`未细化` 这个后缀取消
//
// 三条硬约束（见 README「三条解析约束」）：
//   · `chunk-2c9tjhwd.js` 捕获了 `import.meta.require`：**全树 80 处 `importMetaRequire("./x")`
//     都按它所在的目录解析**（已用实验证实：从别的目录调用，解析到的是 hub 目录里的同名文件）。
//     所以它与那 80 个目标必须同进同出 —— 一起进 `内嵌资源与模块互操作/`
//   · 另两个底座模块（数组工具、启动路径）各有 90–121 处引用，归到具名的核心工具模块
//   · 资源加载 shim（`default.*.js` 等）也放锚点目录：它们是那批资产自己的加载器

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT, displayName } from "./lib.mjs";

export const HUB = "01-核心基础设施/共享小工具-未细化";

/** 懒加载锚点：它的 80 个目标必须与它同目录。 */
export const LAZY_ANCHOR = "chunk-2c9tjhwd.js";

/** 锚点目录：hub + 80 个懒加载资产 + 资源加载 shim。 */
export const ANCHOR_DIR = "内嵌资源与模块互操作";

/** 另两个底座 → 具名归宿。 */
export const BASES = [
  ["chunk-d16fhdtx.js", "核心工具-数组与集合", "intersperse / dedupe / asStringArray，121 处引用"],
  ["chunk-h62vxw7j.js", "核心工具-路径与平台", "getNormalizedRealCwd / STARTUP_CWD，90 处引用"],
];

/** 证据不足者的落点。 */
export const RESIDUAL_DIR = "核心工具-未归类";

/** 全局 `importMetaRequire("./x")` 的目标 —— 按 hub 目录解析，必须与 hub 同进同出。 */
function lazyTargets() {
  const CALL = /importMetaRequire\(\s*["'](\.[^"']*)["']\s*\)/g;
  const out = new Set();
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      if (["node_modules", "_source", ".git", ".analysis"].includes(e.name)) continue;
      const p = join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".js")) {
        for (const m of readFileSync(p, "utf8").matchAll(CALL)) out.add(m[1].replace(/^\.\//, ""));
      }
    }
  };
  walk(ROOT);
  return out;
}

const EXISTING_01 = new Set(readdirSync(join(ROOT, "01-核心基础设施")).filter((d) => !d.startsWith(".")));

const plan = JSON.parse(readFileSync(join(ROOT, ".analysis/move/hub-plan.json"), "utf8"));
const hubAll = readdirSync(join(ROOT, HUB));
const hubSet = new Set(hubAll);

const errors = [];
const nameOf = (t) => t.file.split("/").pop();

// 校验：文件名必须真在收容所里；目标目录必须真实存在
for (const t of plan.targets) {
  if (!hubSet.has(nameOf(t))) errors.push(`收容所里没有 ${nameOf(t)}`);
  if (!existsSync(join(ROOT, t.to))) errors.push(`目标目录不存在: ${t.to}（来自 ${nameOf(t)}）`);
  if (t.to.startsWith("01-核心基础设施/") && !EXISTING_01.has(t.to.split("/")[1]))
    errors.push(`目标 01 子目录不存在: ${t.to}`);
}
const keeps = plan.keep.filter((k) => {
  if (!hubSet.has(nameOf(k))) { errors.push(`收容所里没有（keep）${nameOf(k)}`); return false; }
  return true;
});
const targets = plan.targets.filter((t) => hubSet.has(nameOf(t)));
if (errors.length) {
  console.log("判定表有问题：");
  for (const e of errors.slice(0, 40)) console.log("  ✗ " + e);
  if (errors.length > 40) console.log(`  … 另 ${errors.length - 40} 条`);
  process.exit(1);
}

if (process.argv.includes("--emit")) {
  const moves = [];
  const modules = {};
  const placed = new Set();
  const add = (base, toDir) => {
    if (placed.has(base)) return;
    placed.add(base);
    moves.push({ from: `${HUB}/${base}`, to: `${toDir}/${base}` });
  };

  for (const t of targets) add(nameOf(t), t.to);
  for (const [f, dir] of BASES) {
    add(f, `01-核心基础设施/${dir}`);
    if (!EXISTING_01.has(dir)) modules[`01-核心基础设施/${dir}`] ??= { module: displayName(dir), tier: 1 };
  }
  for (const k of keeps) {
    if (!k.cluster) continue;
    const dir = `01-核心基础设施/${k.cluster}`;
    add(nameOf(k), dir);
    if (!EXISTING_01.has(k.cluster)) modules[dir] ??= { module: displayName(k.cluster), tier: 1 };
  }

  // hub 与它的懒加载目标
  const lazy = lazyTargets();
  add(LAZY_ANCHOR, `01-核心基础设施/${ANCHOR_DIR}`);
  let anchored = 0;
  for (const f of hubAll) {
    if (f.endsWith(".js") || !lazy.has(f)) continue;
    add(f, `01-核心基础设施/${ANCHOR_DIR}`);
    anchored++;
  }
  modules[`01-核心基础设施/${ANCHOR_DIR}`] ??= { module: displayName(ANCHOR_DIR), tier: 1 };

  // 其余（证据不足 + 判定表没提到的）进残余目录，连随行资源一起
  let residual = 0;
  for (const f of hubAll) {
    if (placed.has(f)) continue;
    add(f, `01-核心基础设施/${RESIDUAL_DIR}`);
    if (f.endsWith(".js")) residual++;
  }
  modules[`01-核心基础设施/${RESIDUAL_DIR}`] ??= { module: displayName(RESIDUAL_DIR), tier: 1 };

  const out = process.argv[process.argv.indexOf("--emit") + 1];
  writeFileSync(out, JSON.stringify({ moves, modules }, null, 1));
  const newDirs = Object.keys(modules).filter((d) => !EXISTING_01.has(d.split("/")[1]));
  console.log(`计划已写出 -> ${out}`);
  console.log(`  下沉 ${targets.length} · 按主题 ${keeps.filter((k) => k.cluster).length} · 底座 ${BASES.length} · 锚点目录 ${anchored + 1}（含 ${anchored} 个懒加载资产）· 残余 ${residual}`);
  console.log(`  新建目录 ${newDirs.length} 个：${newDirs.map((d) => d.split("/")[1]).join("、")}`);
} else {
  console.log("# 拆收容所判定表\n");
  console.log(`共 ${hubAll.filter((f) => f.endsWith(".js")).length} 个 js + ${hubAll.filter((f) => !f.endsWith(".js")).length} 个随行资源`);
  console.log(`下沉 ${targets.length} · 留在 01 ${keeps.length}（其中 ${keeps.filter((k) => !k.cluster).length} 条证据不足）\n`);
  const byDir = new Map();
  for (const t of targets) {
    if (!byDir.has(t.to)) byDir.set(t.to, []);
    byDir.get(t.to).push(t);
  }
  console.log(`## 下沉到既有模块（${byDir.size} 个目标目录）\n`);
  for (const [d, ts] of [...byDir].sort((a, b) => b[1].length - a[1].length)) {
    console.log(`### ${d}（${ts.length}）\n`);
    for (const t of ts) console.log(`- \`${nameOf(t)}\` — ${t.why}`);
    console.log();
  }
  const byCluster = new Map();
  for (const k of keeps) byCluster.set(k.cluster ?? "（证据不足）", [...(byCluster.get(k.cluster ?? "（证据不足）") ?? []), k]);
  console.log(`## 留在 01 的具名子模块\n`);
  for (const [cl, ks] of [...byCluster].sort((a, b) => b[1].length - a[1].length)) {
    const flag = cl === "（证据不足）" ? "残余" : EXISTING_01.has(cl) ? "已有" : "新建";
    console.log(`### ${cl}（${flag}，${ks.length}）\n`);
    for (const k of ks) console.log(`- \`${nameOf(k)}\` — ${k.why}`);
    console.log();
  }
}
