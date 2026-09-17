// Build a tree-wide index: for every module file, who references it and how.
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, normalize } from "node:path";
import { ROOT, walk, loadTree } from "./paths.mjs";

export { ROOT, walk, loadTree };

/** every reference form from any file to any other file */
export function buildEdges(src) {
  const edges = []; // {from, to, specStart, specEnd, form, line}
  const SPEC = /["'](\.\.?\/[^"'\n]*\.js)["']/g;
  for (const [f, s] of src) {
    for (const m of s.matchAll(SPEC)) {
      const spec = m[1];
      const target = normalize(join(dirname(f), spec));
      const idx = m.index;
      const before = s.slice(Math.max(0, idx - 200), idx);
      const line = s.slice(0, idx).split("\n").length;
      let form = "bare";
      const tail = before.match(/(import\.meta\.require\(|import\(|from\s+|export\s*\{[^}]*\}\s*from\s+|import\s*\{[^}]*\}\s*from\s+|import\s+[A-Za-z_$][\w$]*\s*from\s+|\bimport\s*)$/);
      if (tail) {
        const t = tail[1];
        if (t.startsWith("import.meta.require")) form = "lazy";
        else if (t.startsWith("import(")) form = "dynamic";
        else if (/export\s*\{/.test(t)) form = "reexport";
        else if (/^import\s*\{/.test(t)) form = "named";
        else if (/^import\s+[A-Za-z_$]/.test(t)) form = "default";
        else if (/^from\s+$/.test(t)) form = "named-multiline";
        else form = "bare";
      } else if (/^\s*import\s*$/.test(before)) form = "bare";
      edges.push({ from: f, to: target, spec, specStart: m.index + (m[0].length - spec.length - 1), specEnd: m.index + (m[0].length - 1), form, line, before });
    }
  }
  return edges;
}

export function buildIndex() {
  const { files, src } = loadTree();
  const edges = buildEdges(src);
  const importers = new Map(); // target -> [edge]
  for (const e of edges) {
    if (!src.has(e.to)) continue;
    if (!importers.has(e.to)) importers.set(e.to, []);
    importers.get(e.to).push(e);
  }
  return { files, src, edges, importers };
}
