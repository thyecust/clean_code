// 同文件/全树命名风格归一：把这一轮新起的持有者名收敛到**这棵树自己的惯例**。
//
// 依据（2026-09-19 实测，`git archive 0b78d6b4` 解出动手前的树来数的）：
//   动手之前，全树可读的惰性单例持有者 58 个，其中**57 个不带后缀**，
//   只有 `host-claim-registry.js` 的 `claimRegistriesByHost` 一个带 `By*`。
//   所以这棵树的惯例是「不带后缀」——`ByHost` 是从单个例子推出来的错规则
//   （更糟的是 `inkInstanceRegistriesByHost` 是我自己冒烟时发明的，等于拿自己的输出当先例）。
//
// 于是展开阶段由 3 个 agent 按全局规则加上的 `ByHost` / `BySession` 要削掉。
// 只动**持有者**（小写开头的名字），类名一律不碰；撞名由 lint 兜住。
//
// 用法：node normalize-holders.mjs <in.json> <out.json> [--all | <模块路径子串>...]
import { readFileSync, writeFileSync } from "node:fs";

const [inFile, outFile, ...rest] = process.argv.slice(2);
if (!inFile || !outFile) {
  console.error("用法：node normalize-holders.mjs <in.json> <out.json> [--all | <模块路径子串>...]");
  process.exit(2);
}
const all = rest.includes("--all");
const matches = rest.filter((r) => r !== "--all");
const SUFFIXES = ["ByHost", "BySession"];

const plans = JSON.parse(readFileSync(inFile, "utf8"));
let touched = 0;
const changed = [];

for (const p of plans) {
  if (!all && !matches.some((m) => p.module.includes(m))) continue;
  for (const [oldName, newName] of Object.entries(p.renames)) {
    if (!/^[a-z]/.test(newName)) continue;                 // 只动持有者
    const suf = SUFFIXES.find((s) => newName.endsWith(s));
    if (!suf) continue;
    const stripped = newName.slice(0, -suf.length);
    if (stripped.length < 5) continue;                      // 削完太短，不动
    // 削完可能与【类名】撞（同一 renames 里的值）——撞了就不动，交给 lint 决定
    const clash = Object.values(p.renames).some((n) => n === stripped && n !== newName);
    if (clash) { console.log(`  · 跳过 ${newName}（削成 ${stripped} 会与同名条目撞）`); continue; }
    p.renames[oldName] = stripped;
    changed.push(`${newName} -> ${stripped}`);
    touched++;
  }
}
writeFileSync(outFile, JSON.stringify(plans, null, 1));
console.log(`归一 ${touched} 个持有者名（削掉 ${SUFFIXES.join("/")}）${all ? "（全树）" : `于匹配 ${matches.join(", ")}`}`);
for (const c of changed.slice(0, 30)) console.log("   " + c);
if (changed.length > 30) console.log(`   …另有 ${changed.length - 30} 条`);
console.log(`-> ${outFile}`);
