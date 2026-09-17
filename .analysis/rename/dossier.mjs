// Evidence dossier for one module: its own source + how each mangled export is
// actually used by importers. This is what the naming subagents read.
import { readFileSync } from "node:fs";
import { join, normalize, dirname } from "node:path";
import { ROOT, shortPath, loadTree } from "./paths.mjs";
import { buildIndex } from "./index.mjs";
import { analyze, moduleBindingRefs } from "./lib.mjs";

export function modPath(rel) { return normalize(join(ROOT, rel)); }

/**
 * target 模块 -> { 引用方文件 -> 从该 target 具名导入/再导出的名字 }。
 *
 * 一次全树扫完建好，而不是每个模块扫一遍自己那批引用方：barrel 文件常常 import
 * 十几个候选模块，按模块扫就会把同一个文件完整解析十几遍；候选池里还有引用方
 * 438 个的模块。存的只有名字集合，比缓存 AST 省得多（AST 约为源码的 10 倍，
 * 全树缓存要几个 GB）。
 */
let importNameMap = null;
function importNames() {
  if (importNameMap) return importNameMap;
  const m = new Map();
  for (const [f, s] of loadTree().src) {
    let info;
    // 第三方库里有 acorn 解析不过的文件；它们不可能是本树的引用方，直接跳过
    try { info = analyze(s); } catch { continue; }
    for (const node of info.ast.body) {
      if (node.source?.type !== "Literal") continue;
      const target = normalize(join(dirname(f), node.source.value));
      let per = m.get(target);
      if (!per) { per = new Map(); m.set(target, per); }
      let set = per.get(f);
      if (!set) { set = new Set(); per.set(f, set); }
      if (node.type === "ImportDeclaration") {
        for (const sp of node.specifiers) if (sp.type === "ImportSpecifier") set.add(sp.imported.name);
      } else if (node.type === "ExportNamedDeclaration") {
        for (const sp of node.specifiers) if (sp.local) set.add(sp.local.name);
      }
    }
  }
  importNameMap = m;
  return m;
}

function contextLines(src, start, before = 2, after = 2) {
  const ls = src.lastIndexOf("\n", start - 1) + 1;
  const le = src.indexOf("\n", start);
  const lineNo = src.slice(0, start).split("\n").length;
  const lines = src.split("\n");
  const from = Math.max(0, lineNo - 1 - before);
  const to = Math.min(lines.length, lineNo + after);
  const body = lines.slice(from, to).map((l, i) => {
    const n = from + i + 1;
    const mark = n === lineNo ? ">" : " ";
    const t = l.length > 220 ? l.slice(0, 220) + " …" : l;
    return `${mark} ${String(n).padStart(6)} | ${t}`;
  });
  return body.join("\n");
}

export function dossier(rel, idx) {
  const src = readFileSync(modPath(rel), "utf8");
  const out = [];
  out.push(`# ${rel}`);
  out.push(`bytes=${src.length}`);
  const { sm, moduleScope } = analyze(src);
  const names = [...moduleScope.set.keys()];
  out.push(`module-level bindings: ${names.join(", ")}`);
  out.push("");
  out.push("## 本模块完整源码");
  out.push("```js");
  out.push(src);
  out.push("```");
  out.push("");
  out.push("## 引用方（调用点）");
  const allEdges = idx.importers.get(modPath(rel)) ?? [];
  if (!allEdges.length) out.push("（无引用）");

  // A module can have hundreds of importers; dumping them all buries the evidence
  // and blows the context. Greedily keep the importers that cover the most
  // exported names, so every name still gets a real call site.
  const MAX_IMPORTERS = Number(process.env.MAX_IMPORTERS || 10);
  const byFile = new Map();
  {
    // 键集合仍取自 allEdges（含「导入了但一个名字都没用上」的文件），
    // 只有这样 byFile.size 才和改前一致，下面那句「另有 N 个未列」的计数才不变。
    const nameMap = importNames().get(modPath(rel)) ?? new Map();
    for (const f of new Set(allEdges.map((e) => e.from))) {
      byFile.set(f, nameMap.get(f) ?? new Set());
    }
  }
  const covered = new Set();
  const chosen = [];
  const candidates = [...byFile.entries()];
  while (chosen.length < MAX_IMPORTERS) {
    let best = null, bestGain = 0;
    for (const [f, names] of candidates) {
      if (chosen.includes(f)) continue;
      const gain = [...names].filter((n) => !covered.has(n)).length || (chosen.length < 3 ? 1 : 0);
      if (gain > bestGain) { bestGain = gain; best = [f, names]; }
    }
    if (!best) break;
    chosen.push(best[0]);
    for (const n of best[1]) covered.add(n);
  }
  const edges = allEdges.filter((e) => chosen.includes(e.from));
  const omitted = byFile.size - chosen.length;
  if (omitted > 0) {
    out.push(`（共 ${byFile.size} 个引用方，下面列 ${chosen.length} 个覆盖面最广的，另有 ${omitted} 个未列）`);
    out.push("");
  }
  const seen = new Set();
  for (const e of edges) {
    const fsrc = readFileSync(e.from, "utf8");
    const info = analyze(fsrc);
    const key = e.from + "|" + e.form;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(`### ${shortPath(e.from)}  [${e.form}]`);
    // the import line
    const ls = fsrc.lastIndexOf("\n", e.specStart) + 1;
    const le = fsrc.indexOf("\n", e.specStart);
    out.push(`import 行: \`${fsrc.slice(ls, le).trim()}\``);
    // Only the names this file actually imports FROM THIS MODULE, and only via the
    // local name that import binds. Otherwise a module-level homonym (an unrelated
    // binding that happens to share the export's short name) leaks in as noise.
    const localsHere = new Map(); // exported name -> local names bound to it
    for (const node of info.ast.body) {
      if (node.source?.type !== "Literal") continue;
      if (normalize(join(dirname(e.from), node.source.value)) !== modPath(rel)) continue;
      if (node.type === "ImportDeclaration") {
        for (const sp of node.specifiers) {
          if (sp.type !== "ImportSpecifier") continue;
          if (!localsHere.has(sp.imported.name)) localsHere.set(sp.imported.name, []);
          localsHere.get(sp.imported.name).push(sp.local.name);
        }
      } else if (node.type === "ExportNamedDeclaration") {
        for (const sp of node.specifiers) if (sp.local) localsHere.set(sp.local.name, [sp.local.name]);
      }
    }
    for (const n of names) {
      if (!/^[A-Za-z_$][\w$]*$/.test(n)) continue;
      const locals = localsHere.get(n);
      if (!locals) continue;
      const refs = locals.flatMap((ln) => moduleBindingRefs(info.moduleScope, ln, info.sm) ?? []);
      // only count refs that are NOT the import specifier itself
      const uses = refs.filter((r) => {
        const between = fsrc.slice(Math.max(0, r.range[0] - 400), r.range[0]);
        return !/from\s*["'][^"']*$/.test(between) && !/import\s*\{[^}]*$/.test(between);
      });
      if (!uses.length) continue;
      out.push(`  名称 \`${n}\` 被使用 ${uses.length} 次，样例：`);
      for (const u of uses.slice(0, 3)) {
        out.push("```js");
        out.push(contextLines(fsrc, u.range[0]));
        out.push("```");
      }
    }
    out.push("");
  }
  return out.join("\n");
}

if (process.argv[2]) {
  const idx = buildIndex();
  const rels = process.argv.slice(2);
  for (const r of rels) console.log(dossier(r, idx));
}
