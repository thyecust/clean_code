// Dossiers for ONE large aggregate chunk, split into byte-range slices.
//
// A 7.9MB chunk with 2,400 mangled exports is not one module — the bundler merged many
// logical modules into it. Handing the whole file to one agent is useless, so:
//   1. find where each still-mangled export is DECLARED (eslint-scope gives the offset)
//   2. bucket those declarations into ~N-byte slices of the source
//   3. one dossier per slice: that slice's source + its exports + their real call sites
//
// The plan entries all name the same `module` (the whole file); the combiner merges
// them by module, which is what we want — the slices partition the export set.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, normalize, dirname } from "node:path";
import { ROOT, shortPath, WORK } from "./paths.mjs";
import { buildIndex } from "./index.mjs";
import { analyze, moduleBindingRefs } from "./lib.mjs";
import { isMangled } from "./mangle.mjs";

const rel = process.argv[2];
const sliceBytes = Number(process.argv[3] || 180_000);
const outDir = process.argv[4] || join(WORK, "bigfile");
const maxImporters = Number(process.env.MAX_IMPORTERS || 8);
// WINDOW>0：源码不按连续区间给，改成「每个名字的定义位置前后各 WINDOW 行」拼接。
// 「体积大、名字稀疏」的模块（会话UI 2.5MB 只有 68 个名字、语法高亮 872KB 只有 2 个）
// 用连续区间会切出十几片、每片 4 个名字却带 150KB 源码 —— 窗口模式把上下文集中到定义处。
// 此时切片只按名字数切，不再按字节切。
const WINDOW = Number(process.env.WINDOW || 0);
const winBefore = Number(process.env.WIN_BEFORE || 30);
const winAfter = Number(process.env.WIN_AFTER || 60);

const modulePath = normalize(join(ROOT, rel));
const src = readFileSync(modulePath, "utf8");
const idx = buildIndex();
const { sm, moduleScope } = analyze(src);

// Only names this module EXPORTS. Its non-exported module-level bindings are a much
// larger set (16,382 vs 2,423 on the biggest chunk) and renaming them has no
// cross-file effect — that is a different, lower-value job.
const exported = new Set(
  [...src.matchAll(/export\s*\{([^}]*)\}/g)].flatMap((m) =>
    m[1].split(",").map((x) => x.trim().split(/\s+as\s+/).pop()).filter(Boolean),
  ),
);

// which exported, still-mangled bindings exist, and where are they declared?
const targets = [];
for (const [name, v] of moduleScope.set) {
  if (!isMangled(name)) continue;
  if (!exported.has(name)) continue;
  if (!v.identifiers.length) continue;
  targets.push({ name, off: v.identifiers[0].range[0] });
}
targets.sort((a, b) => a.off - b.off);

// slice boundaries aligned to line starts
const maxNames = Number(process.env.MAX_NAMES || 120);
const slices = [];
let cur = [];
for (const t of targets) {
  if (cur.length && ((!WINDOW && t.off - cur[0].off > sliceBytes) || cur.length >= maxNames)) {
    slices.push(cur);
    cur = [];
  }
  cur.push(t);
}
if (cur.length) slices.push(cur);

const lineStartAtOrAfter = (o) => src.indexOf("\n", o) + 1;
const lineStartAtOrBefore = (o) => src.lastIndexOf("\n", o) + 1;

// Call-site evidence for a set of names, drawn from this module's importers.
// Parse each importer ONCE up front: the naive version re-parsed every candidate on
// every greedy iteration, which is O(files x names) parses and never finished on a
// 2,400-name chunk.
const analysisCache = new Map();
function analysisOf(f) {
  if (!analysisCache.has(f)) analysisCache.set(f, analyze(readFileSync(f, "utf8")));
  return analysisCache.get(f);
}

// The local names this file binds to THIS module's exports. Without this, a name
// lookup matches the importer's own module-level homonym — an unrelated binding that
// happens to share the short name — and the evidence is wrong.
const localCache = new Map();
function localsFrom(f, modPath) {
  const key = f;
  if (!localCache.has(key)) {
    const info = analysisOf(f);
    const map = new Map();
    for (const node of info.ast.body) {
      if (node.source?.type !== "Literal") continue;
      if (normalize(join(dirname(f), node.source.value)) !== modPath) continue;
      if (node.type === "ImportDeclaration") {
        for (const sp of node.specifiers) {
          if (sp.type !== "ImportSpecifier") continue;
          if (!map.has(sp.imported.name)) map.set(sp.imported.name, []);
          map.get(sp.imported.name).push(sp.local.name);
        }
      } else if (node.type === "ExportNamedDeclaration") {
        for (const sp of node.specifiers) if (sp.local) map.set(sp.local.name, [sp.local.name]);
      }
    }
    localCache.set(key, map);
  }
  return localCache.get(key);
}

function evidence(names, edges) {
  const want = new Set(names);
  const byFile = new Map();
  for (const e of edges) {
    if (!byFile.has(e.from)) byFile.set(e.from, e);
  }
  // file -> which of this slice's names it actually uses, via the name it imported
  const usesOf = new Map();
  for (const f of byFile.keys()) {
    const info = analysisOf(f);
    const locals = localsFrom(f, modulePath);
    const used = new Set();
    for (const n of want) {
      const ln = locals.get(n);
      if (!ln) continue;
      if (ln.some((x) => (moduleBindingRefs(info.moduleScope, x, info.sm) ?? []).length)) used.add(n);
    }
    if (used.size) usesOf.set(f, used);
  }
  // greedy cover: fewest importers covering the most names
  const chosen = [];
  const covered = new Set();
  while (chosen.length < maxImporters) {
    let best = null, bestGain = 0;
    for (const [f, used] of usesOf) {
      if (chosen.includes(f)) continue;
      const gain = [...used].filter((n) => !covered.has(n)).length;
      if (gain > bestGain) { bestGain = gain; best = f; }
    }
    if (!best) break;
    chosen.push(best);
    for (const n of usesOf.get(best)) covered.add(n);
  }

  const out = [];
  out.push(`（共 ${byFile.size} 个引用方；下面列 ${chosen.length} 个覆盖本切片名字最多的）`);
  out.push("");
  for (const f of chosen) {
    const fsrc = readFileSync(f, "utf8");
    const info = analysisOf(f);
    const e = byFile.get(f);
    const ls = fsrc.lastIndexOf("\n", e.specStart) + 1;
    const le = fsrc.indexOf("\n", e.specStart);
    out.push(`### ${shortPath(f)}  [${e.form}]`);
    out.push(`import 行: \`${fsrc.slice(ls, le).trim().slice(0, 300)}\``);
    const locals = localsFrom(f, modulePath);
    for (const n of usesOf.get(f)) {
      const refs = (locals.get(n) ?? []).flatMap((x) => moduleBindingRefs(info.moduleScope, x, info.sm) ?? []);
      out.push(`  名称 \`${n}\` 使用 ${refs.length} 次：`);
      for (const r of refs.slice(0, 2)) {
        const lineNo = fsrc.slice(0, r.range[0]).split("\n").length;
        const lines = fsrc.split("\n");
        const from = Math.max(0, lineNo - 3), to = Math.min(lines.length, lineNo + 2);
        out.push("```js");
        for (let i = from; i < to; i++) out.push(`${i + 1 === lineNo ? ">" : " "} ${String(i + 1).padStart(6)} | ${lines[i].slice(0, 200)}`);
        out.push("```");
      }
    }
    out.push("");
  }
  return out.join("\n");
}

const edges = idx.importers.get(modulePath) ?? [];
mkdirSync(outDir, { recursive: true });
const base = rel.split("/").pop().replace(/\.js$/, "");

let n = 0;
for (let si = 0; si < slices.length; si++) {
  const slice = slices[si];
  n++;
  const id = String(n).padStart(2, "0");
  const from = lineStartAtOrBefore(slice[0].off);
  // Extend to just before the NEXT slice's first name, so a long function body at the
  // boundary is not cut in half (one agent got a slice ending mid-`function uUt(e) {`).
  const next = slices[si + 1];
  const to = next ? lineStartAtOrBefore(next[0].off) : src.length;
  const names = slice.map((t) => t.name);
  writeFileSync(join(outDir, `${base}.slice-${id}.json`), JSON.stringify([rel], null, 1));
  const truncated = next && slice[slice.length - 1].off > to;
  // 窗口模式：每个名字只带定义位置附近的源码
  let srcBlock = src.slice(from, to);
  if (WINDOW) {
    const lines = src.split("\n");
    // 行号 -> 偏移，只为取窗口
    const offToLine = (o) => src.slice(0, o).split("\n").length - 1;
    const parts = [];
    for (const t of slice) {
      const ln = offToLine(t.off);
      const a = Math.max(0, ln - winBefore), b = Math.min(lines.length, ln + winAfter);
      parts.push(`// ───────────────── ${t.name} （第 ${ln + 1} 行起） ─────────────────`);
      parts.push(lines.slice(a, b).join("\n"));
      parts.push("");
    }
    srcBlock = parts.join("\n");
  }
  const body = [
    `# ${rel}`,
    ``,
    `这是**一个大 chunk 的切片 ${n}/${slices.length}**（字节 ${from}–${to}，共 ${src.length} 字节）。`,
    `这个文件里合进了多个逻辑模块，所以只看这一片。`,
    ``,
    `## 本切片内的仍混淆导出名（${names.length} 个）`,
    truncated ? "（注意：最后一个名字的实现可能延伸到你看到的片段之外，必要时自己去仓库读该文件）" : "",
    ``,
    names.map((x) => `- \`${x}\``).join("\n"),
    ``,
    `## 本切片源码`,
    ``,
    "```js",
    srcBlock,
    "```",
    ``,
    `## 这些名字在引用方的调用点`,
    ``,
    evidence(names, edges),
  ].join("\n");
  writeFileSync(join(outDir, `${base}.slice-${id}.md`), body);
}

console.log(`${rel}: ${targets.length} mangled exports · ${slices.length} slices of <=${sliceBytes}B`);
for (let i = 0; i < slices.length; i++) {
  const s = slices[i];
  const from = lineStartAtOrBefore(s[0].off);
  const to = slices[i + 1] ? lineStartAtOrBefore(slices[i + 1][0].off) : src.length;
  console.log(`  slice-${String(i + 1).padStart(2, "0")}: ${s.length} names · bytes ${from}-${to}${WINDOW ? " （窗口模式）" : ""}`);
}
