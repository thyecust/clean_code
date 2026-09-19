// 全树「相对 specifier 解析不到」扫描。
//
// 为什么需要它：`.analysis/check-imports.mjs` 检查的是解析 / 依赖边 / 导出面，
// 但**一个解析不到的 specifier 根本进不了它的依赖边集合**，于是静默漏过。
// 2026-09-19 实测：18 条 `../../https-proxy-agent/…` 断链在里面藏了三天，
// 直到 `bun build` 追边才炸出来（`bun run` 只在走到那条动态 import 时才炸）。
//
// 三种基准，别混：
//   - 静态 import/export、动态 import()、require()  → 调用方所在目录
//   - importMetaRequire(...)   → **hub 目录**（它是 chunk-2c9tjhwd.js 捕获的自己的 require）
//   - import.meta.require(...) → 调用方所在目录（与静态 import 同基准）
//     2026-09-19 实测：02-功能模块/Teammates团队/peer-target-guard.js 对**同一个 specifier**
//     同时用了静态 import（第 11 行）和 import.meta.require（第 62 行），两者都能解析 ——
//     把这两种混为一谈会凭空多报 126 条。
//
// 用法：node check-dangling.mjs [--all]
import { readFileSync, existsSync, readdirSync, lstatSync, readlinkSync } from "node:fs";
import { dirname, resolve, relative, join, sep } from "node:path";
import { parseFile } from "./rename/lib.mjs";
import { ROOT, walk } from "./rename/paths.mjs";

const HUB = join(ROOT, "01-核心基础设施/内嵌资源与模块互操作");
const showAll = process.argv.includes("--all");

// ── 悬空符号链接 ────────────────────────────────────────────────────────────
// `00-第三方库/*/_source/node_modules` 指向仓库外的安装树（claude-out/claude-code-src）。
// 安装树不在时链接悬空，经过它的 specifier 全是「外部依赖没装」，不是树内写错。
// 两者必须分开报，否则闸门会被环境问题一直染红。
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

// ── 解析 ────────────────────────────────────────────────────────────────────
/** 模拟 node/bun 的相对 specifier 解析：精确 → 补扩展 → 目录 index */
const EXTS = ["", ".js", ".mjs", ".cjs"];
function resolvable(base, spec) {
  const abs = resolve(base, spec);
  for (const e of EXTS) if (existsSync(abs + e)) return true;
  for (const e of ["/index.js", "/index.mjs"]) if (existsSync(abs + e)) return true;
  return false;
}

/** 遍历 AST 收集 (specifier, kind, hubBase) —— 只认字面量 */
function collect(ast) {
  const out = [];
  const visit = (n) => {
    if (!n || typeof n.type !== "string") return;
    if ((n.type === "ImportDeclaration" || n.type === "ExportNamedDeclaration" || n.type === "ExportAllDeclaration") && n.source) {
      out.push({ spec: n.source.value, kind: "静态", hubBase: false, node: n.source });
    }
    if (n.type === "ImportExpression") {
      if (n.source.type === "Literal") out.push({ spec: n.source.value, kind: "动态 import()", hubBase: false, node: n.source });
      else out.push({ spec: null, kind: "动态 import(<非字面量>)", hubBase: false });
    }
    if (n.type === "CallExpression" && n.callee) {
      const c = n.callee;
      const isRequire = c.type === "Identifier" && c.name === "require";
      const isHub = c.type === "Identifier" && c.name === "importMetaRequire";
      const isMetaReq = c.type === "MemberExpression" && !c.computed &&
        c.property.name === "require" && c.object.type === "MetaProperty";
      if (isRequire || isHub || isMetaReq) {
        const kind = isHub ? "importMetaRequire" : isMetaReq ? "import.meta.require" : "require";
        const a0 = n.arguments[0];
        if (a0 && a0.type === "Literal" && typeof a0.value === "string")
          out.push({ spec: a0.value, kind, hubBase: isHub, node: a0 });
        else out.push({ spec: null, kind: `${kind}(<非字面量>)`, hubBase: isHub });
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

// ── 主扫描 ──────────────────────────────────────────────────────────────────
const REL = /^\.{1,2}\//;
const broken = [], external = [], nonLiteral = [], bare = new Set();
let total = 0;

for (const f of walk(ROOT)) {
  const rel = relative(ROOT, f);
  const isOriginal = rel.endsWith(".original.js");
  const src = readFileSync(f, "utf8");
  let ast;
  try { ast = parseFile(src); } catch (e) { broken.push({ f: rel, spec: `<解析失败: ${e.message}>`, kind: "-", isOriginal }); continue; }
  for (const it of collect(ast)) {
    if (it.spec === null) { nonLiteral.push({ f: rel, kind: it.kind }); continue; }
    if (!REL.test(it.spec)) { if (!it.spec.startsWith("node:")) bare.add(it.spec); continue; }
    total++;
    const base = it.hubBase ? HUB : dirname(f);
    if (resolvable(base, it.spec)) continue;
    const abs = resolve(base, it.spec);
    const rec = { f: rel, spec: it.spec, kind: it.kind, isOriginal };
    (underDangling(abs) ? external : broken).push(rec);
  }
}

console.log(`相对 specifier 共 ${total} 条`);

if (danglingLinks.length) {
  console.log(`\n悬空符号链接 ${danglingLinks.length} 个（指向仓库外的安装树，该树未准备）：`);
  for (const l of danglingLinks) console.log(`  ${relative(ROOT, l)}  ->  ${readlinkSync(l)}`);
}

if (external.length) {
  console.log(`\n外部依赖未装 ${external.length} 处（经过悬空符号链接，不计入失败）：`);
  const g = new Map();
  for (const b of external) { if (!g.has(b.spec)) g.set(b.spec, []); g.get(b.spec).push(b.f); }
  for (const [spec, fs] of g) console.log(`  [${spec}]  ${fs.length} 处  ${[...new Set(fs)].join(", ")}`);
}

console.log(`\n树内断链 ${broken.length} 条：`);
const groups = new Map();
for (const b of broken) { if (!groups.has(b.spec)) groups.set(b.spec, []); groups.get(b.spec).push(b); }
for (const [spec, list] of [...groups].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`  [${spec}]  ${list.length} 处  (${list[0].kind})`);
  for (const b of (showAll ? list : list.slice(0, 3))) console.log(`      ${b.isOriginal ? "(参考副本) " : ""}${b.f}`);
  if (!showAll && list.length > 3) console.log(`      … 另外 ${list.length - 3} 处（--all 看全）`);
}

if (nonLiteral.length) {
  console.log(`\n非字面量 specifier ${nonLiteral.length} 处（本脚本判不了，需人工/运行时确认）：`);
  const g2 = new Map();
  for (const n of nonLiteral) { if (!g2.has(n.kind)) g2.set(n.kind, []); g2.get(n.kind).push(n.f); }
  for (const [k, v] of g2) console.log(`  ${k}  ${v.length} 处  例: ${[...new Set(v)].slice(0, 3).join(", ")}`);
}
console.log(`\n裸 specifier ${bare.size} 种（交给打包器解析）：${[...bare].slice(0, 12).join(", ")}${bare.size > 12 ? " …" : ""}`);

const hardFail = broken.filter((b) => !b.isOriginal).length;
console.log(hardFail ? `\n❌ 树内断链 ${hardFail} 条（不含参考副本）` : `\n✅ 无树内断链（参考副本 ${broken.length} 条不计）`);
process.exit(hardFail ? 1 : 0);
