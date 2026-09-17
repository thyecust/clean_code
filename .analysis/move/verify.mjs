// 搬家之后的验证。判据独立于 move.mjs 重新实现（沿用仓库「不复用改造代码」的约定）。
//
//   node verify.mjs <manifest.json>
//
// [1] 往返     把每处路径编辑按同样的规则反向还原，文件必须与搬之前的备份**逐字节相同**。
//              这证明改动只有「路径字符串」一种形状，没有顺手改到别的代码。
// [2] 文件集合 搬之前快照里的每个文件都要在新位置出现，且没有 .js 凭空消失或增加。
// [3] 导出面   逐文件比对导出名集合 —— 搬家不该动到任何绑定。
// [4] 标识符   全树自由（未定义）标识符不得新增。
// [5] 字节核算 全树总字节的变化必须恰好等于「所有路径字符串长度差之和 + 资源复制出来的字节」。
//              这条抓的是「多写了或少写了什么」。
//
// 路径能不能解析、索引对不对，由三个独立脚本负责（它们不共享本工具链的代码）：
//   bun .analysis/check-imports.mjs --runtime
//   bun .analysis/move/check-index.mjs
//   bun .analysis/move/check-lazy-base.mjs

import { readFileSync, existsSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { ROOT, WORK, walkAll, snap, short } from "./lib.mjs";

const manifest = JSON.parse(readFileSync(process.argv[2], "utf8"));
const backupDir = join(WORK, "backup");
let fail = 0;
const bad = (m) => { console.log("  ✗ " + m); fail++; };

// ---------- [1] 往返 ----------
{
  let ok = 0, n = 0;
  for (const rec of manifest.edits) {
    n++;
    const p = join(ROOT, rec.newPath);
    if (!existsSync(p)) { bad(`搬完的文件不见了: ${rec.newPath}`); continue; }
    const cur = readFileSync(p, "utf8");
    let back = cur;
    for (let i = rec.edits.length - 1; i >= 0; i--) {
      const e = rec.edits[i];
      const shift = rec.edits.slice(0, i).reduce((s, x) => s + (x.text.length - (x.end - x.start)), 0);
      const at = e.start + shift;
      const landed = cur.slice(at, at + e.text.length);
      if (landed !== e.text) { bad(`${rec.newPath}@${e.start} 编辑没落在预期位置: 期望 ${JSON.stringify(e.text)} 实际 ${JSON.stringify(landed)}`); continue; }
      back = back.slice(0, at) + e.was + back.slice(at + e.text.length);
    }
    const bp = join(backupDir, rec.path.replace(/\//g, "__"));
    if (!existsSync(bp)) { bad(`没有前像备份: ${rec.path}`); continue; }
    if (back !== readFileSync(bp, "utf8")) {
      const orig = readFileSync(bp, "utf8");
      const i = [...back].findIndex((c, j) => c !== orig[j]);
      bad(`往返不一致: ${rec.newPath} @${i}\n      得到 ${JSON.stringify(back.slice(Math.max(0, i - 60), i + 60))}\n      期望 ${JSON.stringify(orig.slice(Math.max(0, i - 60), i + 60))}`);
    } else ok++;
  }
  console.log(`[往返]   ${ok}/${n} 个被改文件逐字节还原为原件`);
}

// ---------- [2][3][4] 与搬之前的快照比对 ----------
const before = JSON.parse(readFileSync(manifest.beforeSnapshot, "utf8"));
const after = snap();
const newOf = new Map(manifest.fileMap);

let moved = 0, missing = 0;
for (const rel of Object.keys(before)) {
  const target = newOf.get(rel) ?? rel;
  if (!after[target]) { bad(`文件消失: ${rel} -> ${target}`); missing++; } else moved++;
}
console.log(`[文件]   ${moved}/${Object.keys(before).length} 个文件在新位置就位（缺 ${missing}）`);

// 不该有新的 .js 冒出来（本次操作不创建模块）
for (const rel of Object.keys(after)) {
  const src = [...newOf.entries()].find(([, b]) => b === rel)?.[0] ?? rel;
  if (!before[src]) bad(`多出文件: ${rel}`);
}

let exOk = 0, exBad = 0, freeAdded = 0;
for (const [rel, rec] of Object.entries(before)) {
  const target = newOf.get(rel) ?? rel;
  const now = after[target];
  if (!now) continue;
  if (JSON.stringify(rec.exports) !== JSON.stringify(now.exports)) {
    bad(`导出面变了: ${target}\n      ${JSON.stringify(rec.exports)}\n   -> ${JSON.stringify(now.exports)}`);
    exBad++;
  } else exOk++;
  const wasFree = new Set(rec.free);
  for (const nm of now.free) if (!wasFree.has(nm)) { bad(`新增未定义标识符 ${target}: ${nm}`); freeAdded++; }
}
console.log(`[导出面] ${exOk} 个文件导出名不变（变了 ${exBad}）`);
console.log(`[标识符] 新增未定义标识符 ${freeAdded} 处`);

// ---------- [5] 字节核算 ----------
//
// 只核算 **.js**：`snap()` 覆盖的就是 .js，随行资源（.md/.zst/.node）不在其中，
// 所以资源搬运/复制不体现在这个差值里 —— 它们的落点由 `check-lazy-base.mjs`
// 的第 [2] 项独立验证（按加载方目录逐个解析）。
{
  let edited = 0;
  for (const rec of manifest.edits) for (const e of rec.edits) edited += e.text.length - (e.end - e.start);
  const sumOf = (m) => Object.values(m).reduce((n, r) => n + r.len, 0);
  const delta = sumOf(after) - sumOf(before);
  if (delta !== edited) bad(`字节核算对不上: .js 总字节差 ${delta}，路径改写应带来 ${edited}`);
  else console.log(`[字节]   .js 总字节变化 ${delta} = 全部路径字符串的长度差之和`);
  console.log(`        ${Object.keys(after).length} 个 .js / ${sumOf(after)} 字节 · 随行资源 ${(manifest.resources ?? []).length} 项（由 check-lazy-base 验证落点）`);
}

console.log(fail ? `\n失败 ${fail} 项` : "\n搬家验证通过");
process.exit(fail ? 1 : 0);
