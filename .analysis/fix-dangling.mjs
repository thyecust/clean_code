// 修「树内断链」：specifier 解析不到，但目标文件确实在树里（只是相对层级错了）。
//
// 2026-09-19 的实例：2763e4ac 把 `00-第三方库/_未识别/第三方库-AWSSDK/chunk-*.js` 搬到了
// `00-第三方库/@aws-sdk/`（深度 3 → 2），98% 相似度重命名 —— 内容没动，specifier 也没动，
// 于是 `../../https-proxy-agent/…` 从「指向 00-第三方库/」变成了「指向仓库根」。
// 正是记忆里那条：**移动文件时，两端只要有一端动了就要重写 specifier**；
// 目录重命名保持深度，specifier 碰巧还对，把 bug 掩盖到跨深度搬动才暴露。
//
// 修法是**算**出来的而不是写死的：拿 specifier 的 basename 在全树找唯一目标，
// 再生成从引用方目录到它的相对路径。找不到唯一目标就拒绝，绝不猜。
//
// 用法：node fix-dangling.mjs [--dry] [--include-original]
import { readFileSync, writeFileSync, existsSync, readdirSync, lstatSync } from "node:fs";
import { dirname, resolve, relative, basename, join, sep } from "node:path";
import { parseFile } from "./rename/lib.mjs";
import { ROOT, walk } from "./rename/paths.mjs";

const dry = process.argv.includes("--dry");
const includeOriginal = process.argv.includes("--include-original");
const HUB = join(ROOT, "01-核心基础设施/内嵌资源与模块互操作");

// 与 check-dangling.mjs 同一判据：经过悬空符号链接的是「外部依赖没装」，不是树内写错，
// 本工具不该去动它（也无从算起）。两处判据必须一致，否则闸门和修复器会互相打架。
const danglingLinks = [];
(function scanLinks(d) {
  let entries;
  try { entries = readdirSync(d, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    if (e.name.startsWith(".")) continue;
    const p = join(d, e.name);
    let st;
    try { st = lstatSync(p); } catch { continue; }
    if (st.isSymbolicLink()) { if (!existsSync(p)) danglingLinks.push(p); }
    else if (st.isDirectory()) scanLinks(p);
  }
})(ROOT);
const underDangling = (abs) => danglingLinks.some((l) => abs === l || abs.startsWith(l + sep));

// ── 复用 check-dangling 的判定（保持两处判据不漂） ──────────────────────────
const EXTS = ["", ".js", ".mjs", ".cjs"];
const resolvable = (base, spec) => {
  const abs = resolve(base, spec);
  for (const e of EXTS) if (existsSync(abs + e)) return true;
  return existsSync(abs + "/index.js") || existsSync(abs + "/index.mjs");
};
const REL = /^\.{1,2}\//;

function collect(ast) {
  const out = [];
  const visit = (n) => {
    if (!n || typeof n.type !== "string") return;
    if ((n.type === "ImportDeclaration" || n.type === "ExportNamedDeclaration" || n.type === "ExportAllDeclaration") && n.source)
      out.push({ spec: n.source.value, hubBase: false, node: n.source });
    if (n.type === "ImportExpression" && n.source.type === "Literal")
      out.push({ spec: n.source.value, hubBase: false, node: n.source });
    if (n.type === "CallExpression" && n.callee) {
      const c = n.callee;
      const isHub = c.type === "Identifier" && c.name === "importMetaRequire";
      const isReq = (c.type === "Identifier" && c.name === "require") ||
        (c.type === "MemberExpression" && !c.computed && c.property.name === "require" && c.object.type === "MetaProperty");
      if (isHub || isReq) {
        const a0 = n.arguments[0];
        if (a0 && a0.type === "Literal" && typeof a0.value === "string") out.push({ spec: a0.value, hubBase: isHub, node: a0 });
      }
    }
    for (const k of Object.keys(n)) {
      if (k === "type" || k === "range" || k === "start" || k === "end") continue;
      const v = n[k];
      if (Array.isArray(v)) { for (const ch of v) if (ch && typeof ch.type === "string") visit(ch); }
      else if (v && typeof v.type === "string") visit(v);
    }
  };
  visit(ast);
  return out;
}

// ── 建 basename → 路径索引（只收 .js，够用且不会撞上 _source 里的同名材料） ──
const allFiles = walk(ROOT);
const byBase = new Map();
for (const f of allFiles) {
  const b = basename(f);
  if (!byBase.has(b)) byBase.set(b, []);
  byBase.get(b).push(f);
}

// ── 找出待修项 ──────────────────────────────────────────────────────────────
const perFile = new Map(); // rel -> [{start,end,old,new}]
const refused = [];

for (const f of allFiles) {
  const rel = relative(ROOT, f);
  if (rel.endsWith(".original.js") && !includeOriginal) continue;
  const src = readFileSync(f, "utf8");
  let ast;
  try { ast = parseFile(src); } catch { continue; }
  for (const it of collect(ast)) {
    if (!it.spec || !REL.test(it.spec)) continue;
    const base = it.hubBase ? HUB : dirname(f);
    if (resolvable(base, it.spec)) continue;
    if (underDangling(resolve(base, it.spec))) continue; // 外部依赖未装，不归本工具管

    const target = basename(it.spec);
    const cands = byBase.get(target) ?? [];
    if (cands.length !== 1) { refused.push({ rel, spec: it.spec, why: `basename "${target}" 在全树有 ${cands.length} 个候选` }); continue; }
    let next = relative(dirname(f), cands[0]).split(sep).join("/");
    if (!next.startsWith(".")) next = "./" + next;
    if (!resolvable(dirname(f), next)) { refused.push({ rel, spec: it.spec, why: `算出的 "${next}" 仍不可达` }); continue; }

    if (!perFile.has(rel)) perFile.set(rel, []);
    perFile.get(rel).push({ start: it.node.start, end: it.node.end, old: it.spec, next });
  }
}

// ── 报告 ────────────────────────────────────────────────────────────────────
let edits = 0;
console.log(dry ? "【预览】\n" : "【落盘】\n");
for (const [rel, list] of perFile) {
  console.log(`  ${rel}`);
  for (const e of list) { console.log(`      ${e.old}\n    → ${e.next}`); edits++; }
}
if (refused.length) {
  console.log(`\n拒绝 ${refused.length} 处（不猜）：`);
  for (const r of refused) console.log(`  ${r.rel}: [${r.spec}] ${r.why}`);
}
console.log(`\n合计 ${edits} 处 / ${perFile.size} 个文件`);

if (dry) process.exit(refused.length ? 1 : 0);

// ── 落盘：按 range 从后往前替换，避免偏移 ──────────────────────────────────
for (const [rel, list] of perFile) {
  const abs = join(ROOT, rel);
  let src = readFileSync(abs, "utf8");
  for (const e of [...list].sort((a, b) => b.start - a.start)) {
    const lit = src.slice(e.start, e.end);
    if (!lit.includes(e.old)) throw new Error(`${rel}: range 与预期不符：${lit}`);
    src = src.slice(0, e.start) + JSON.stringify(e.next) + src.slice(e.end);
  }
  writeFileSync(abs, src);
}
console.log(`\n✅ 已改写 ${edits} 处`);
process.exit(refused.length ? 1 : 0);
