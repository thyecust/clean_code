// Frozen structural snapshot of the tree: per file, its export names, its free
// (undefined) references, parse status and byte length. Compared before/after.
import { createHash } from "node:crypto";
import { writeFileSync, readFileSync } from "node:fs";
import { analyze } from "./lib.mjs";
import { loadTree, shortPath } from "./paths.mjs";

const EXPORT_BLOCK = /^[ \t]*export\s*\{([^}]*)\}/gm;
const EXPORT_DECL = /^[ \t]*export\s+(?:async\s+)?(?:function\s*\*?|class|const|let|var)\s+([A-Za-z_$][\w$]*)/gm;
const EXPORT_FROM = /export\s*\{([^}]*)\}\s*from/g;

function parseBlock(body) {
  const out = [];
  for (const raw of body.split(",")) {
    const p = raw.trim();
    if (!p) continue;
    const m = p.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/);
    if (m) out.push(m[2]);
    else if (/^[A-Za-z_$][\w$]*$/.test(p)) out.push(p);
  }
  return out;
}

export function exportNames(src) {
  const s = new Set();
  for (const m of src.matchAll(EXPORT_BLOCK)) for (const n of parseBlock(m[1])) s.add(n);
  for (const m of src.matchAll(EXPORT_DECL)) s.add(m[1]);
  for (const m of src.matchAll(EXPORT_FROM)) for (const n of parseBlock(m[1])) s.add(n);
  if (/^[ \t]*export\s+default\b/m.test(src)) s.add("default");
  if (/export\s*\*\s*from/.test(src)) s.add("*");
  return [...s].sort();
}

export function snap() {
  const { files, src } = loadTree();
  const out = {};
  for (const f of files) {
    const s = src.get(f);
    const rec = { exports: exportNames(s), len: s.length, sha: createHash("sha1").update(s).digest("hex").slice(0, 12) };
    try {
      const { sm } = analyze(s);
      rec.free = [...new Set(sm.globalScope.through.map((r) => r.identifier.name))].sort();
      rec.ok = true;
    } catch (e) {
      rec.ok = false; rec.err = e.message.split("\n")[0]; rec.free = [];
    }
    out[shortPath(f)] = rec;
  }
  return out;
}

import { realpathSync } from "node:fs";
if (process.argv[1] && realpathSync(process.argv[1]) === realpathSync(new URL(import.meta.url).pathname) && process.argv[2]) {
  const s = snap();
  writeFileSync(process.argv[2], JSON.stringify(s, null, 1));
  console.log("snapshot ->", process.argv[2], Object.keys(s).length, "files");
}
