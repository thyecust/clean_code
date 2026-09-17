// Plan checker + rewriter for "give a module's exports readable names".
//
// A plan: { module, newFileName?, renames: { oldExport: newName } }
// Applies:  rename module-level binding in the module (incl. `export {old}`),
//           rename the imported binding in every importer (or keep it via `as` when
//           the local name is re-exported / would collide), rewrite every relative
//           specifier that points at the module when the file is renamed.
import { existsSync } from "node:fs";
import { join, dirname, normalize, basename, relative } from "node:path";
import { analyze, moduleBindingRefs } from "./lib.mjs";
import { dynamicEdits } from "./dynamic.mjs";
import { ROOT } from "./index.mjs";

const IDENT = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
export const short = (f) => (f.startsWith(ROOT) ? f.slice(ROOT.length + 1) : f);

export function relativeSpec(fromFile, toFile) {
  let r = relative(dirname(fromFile), toFile);
  if (!r.startsWith(".")) r = "./" + r;
  return r;
}

/** Splice non-overlapping edits into source text. */
export function splice(src, edits, label) {
  const sorted = [...edits].sort((a, b) => a.start - b.start);
  let out = "";
  let cursor = 0;
  for (const e of sorted) {
    if (e.start < cursor) throw new Error(`overlapping edits in ${label}: ${e.start} < ${cursor}`);
    out += src.slice(cursor, e.start) + e.text;
    cursor = e.end;
  }
  return out + src.slice(cursor);
}

function declaredNames(pick) {
  const out = new Set();
  for (const n of pick.declared) out.add(n);
  for (const n of pick.free) out.add(n);
  return out;
}

/**
 * Analyze one file once; cache per file across all plans.
 * Returns { sm, moduleScope, forbidden:Set, exportedLocals:Set }
 */
const cache = new Map();
export function clearCache() { cache.clear(); }
export function fileInfo(path, src) {
  if (cache.has(path)) return cache.get(path);
  const { ast, sm, moduleScope } = analyze(src);
  const forbidden = new Set();
  for (const sc of sm.scopes) for (const k of sc.set.keys()) forbidden.add(k);
  for (const r of sm.globalScope.through) forbidden.add(r.identifier.name);

  // module-level local names that are (re-)exported under some name
  const exportedLocals = new Set();
  for (const node of ast.body) {
    if (node.type === "ExportNamedDeclaration" && node.specifiers) {
      for (const sp of node.specifiers) if (sp.local) exportedLocals.add(sp.local.name);
    }
  }
  // import/export declarations keyed by the module they point at
  const info = { ast, sm, moduleScope, forbidden, exportedLocals };
  cache.set(path, info);
  return info;
}

function importLikeNodes(ast) {
  return ast.body.filter(
    (n) =>
      (n.type === "ImportDeclaration" && n.specifiers.length) ||
      (n.type === "ExportNamedDeclaration" && n.source),
  );
}

/** all specifiers in file that pull `name` from `targetPath` (resolved) */
function specifiersFrom(fpath, src, targetPath) {
  const info = fileInfo(fpath, src);
  const out = [];
  for (const node of importLikeNodes(info.ast)) {
    const t = normalize(join(dirname(fpath), node.source.value));
    if (t !== targetPath) continue;
    out.push({ node, sourceValue: node.source.value, sourceRange: node.source.range });
  }
  return out;
}

/**
 * Build the edit list for one plan. Pure: does not mutate the tree.
 * Returns { edits: Map<path, Edit[]>, errors: [], warnings: [], modulePath, newFile }
 */
export function planEdits(plan, tree, idx) {
  const errors = [];
  const warnings = [];
  const edits = new Map();
  const push = (p, e) => {
    if (!edits.has(p)) edits.set(p, []);
    edits.get(p).push(e);
  };

  const modulePath = normalize(join(ROOT, plan.module));
  if (!tree.src.has(modulePath)) {
    errors.push(`module not found: ${plan.module}`);
    return { errors, warnings, edits, modulePath };
  }
  const moduleSrc = tree.src.get(modulePath);
  const newFile = plan.newFileName ? normalize(join(dirname(modulePath), plan.newFileName)) : modulePath;
  if (newFile !== modulePath) {
    if (!/^[a-z0-9][a-z0-9._-]*\.js$/.test(basename(newFile)))
      errors.push(`bad file name ${plan.newFileName} (want kebab-case .js)`);
    else if (existsSync(newFile)) errors.push(`target exists: ${short(newFile)}`);
  }

  const pairs = Object.entries(plan.renames);
  if (new Set(pairs.map((p) => p[1])).size !== pairs.length) errors.push(`duplicate new names in ${short(modulePath)}`);
  for (const [, n] of pairs) if (!IDENT.test(n)) errors.push(`bad identifier ${n}`);

  // ---- the module file: rename its own module-level bindings
  const minfo = fileInfo(modulePath, moduleSrc);
  const moduleForbidden = minfo.forbidden;
  for (const [oldName, newName] of pairs) {
    const refs = moduleBindingRefs(minfo.moduleScope, oldName, minfo.sm);
    if (!refs) { errors.push(`[${short(modulePath)}] no module-level binding ${oldName}`); continue; }
    if (moduleForbidden.has(newName)) errors.push(`[${short(modulePath)}] new name ${newName} already used in this file`);
    for (const r of refs) push(modulePath, { start: r.range[0], end: r.range[1], text: newName });
  }
  // keep the exported surface honest: `export { old as X }` keeps X
  if (newFile !== modulePath) {
    for (const node of minfo.ast.body) {
      if (!node.source) continue;
      const t = normalize(join(dirname(modulePath), node.source.value));
      void t;
    }
  }

  // ---- importers
  const edges = idx.importers.get(modulePath) ?? [];
  const byFile = new Map();
  for (const e of edges) {
    if (e.from === modulePath) continue;
    if (!byFile.has(e.from)) byFile.set(e.from, []);
    byFile.get(e.from).push(e);
  }

  const oldNames = new Set(pairs.map((p) => p[0]));
  const renameOf = new Map(pairs);

  for (const [fpath, fedges] of byFile) {
    const fsrc = tree.src.get(fpath);
    if (fsrc === undefined) { errors.push(`missing importer ${short(fpath)}`); continue; }
    let finfo;
    try { finfo = fileInfo(fpath, fsrc); } catch (e) { errors.push(`parse fail ${short(fpath)}: ${e.message}`); continue; }

    // (a) path rewrites for every edge into this module
    if (newFile !== modulePath) {
      for (const e of fedges) push(fpath, { start: e.specStart, end: e.specEnd, text: relativeSpec(fpath, newFile) });
    }

    // (b) name rewrites
    const specs = specifiersFrom(fpath, fsrc, modulePath);
    for (const { node } of specs) {
      const isReexport = node.type === "ExportNamedDeclaration";
      for (const sp of node.specifiers) {
        const importedName = isReexport ? sp.local.name : sp.imported.name;
        if (!oldNames.has(importedName)) continue;
        const newName = renameOf.get(importedName);
        const importedNode = isReexport ? sp.local : sp.imported;

        if (isReexport) {
          // `export { old } from "M"` / `export { old as X } from "M"` — only the source name moves.
          push(fpath, { start: importedNode.range[0], end: importedNode.range[1], text: newName });
          continue;
        }

        const shorthand = sp.imported === sp.local;
        const localName = sp.local.name;
        // Can we move the local binding onto the new name too? Only if that name is
        // not already taken anywhere in this file (a nested scope would capture it)
        // and the local name is not re-exported under its own name.
        const canRenameLocal =
          !finfo.forbidden.has(newName) && !finfo.exportedLocals.has(localName);

        if (shorthand) {
          if (canRenameLocal) {
            push(fpath, { start: sp.imported.range[0], end: sp.imported.range[1], text: newName });
            for (const r of moduleBindingRefs(finfo.moduleScope, localName, finfo.sm) ?? []) {
              if (r.range[0] === sp.imported.range[0]) continue; // the specifier itself
              push(fpath, { start: r.range[0], end: r.range[1], text: newName });
            }
          } else {
            // keep the local binding; alias the new export name onto it
            push(fpath, { start: sp.imported.range[0], end: sp.imported.range[1], text: `${newName} as ${localName}` });
          }
        } else {
          // `import { old as local }` — the source name always moves
          if (canRenameLocal) {
            // collapse to a bare import of the new name (one edit spans the alias)
            push(fpath, { start: sp.imported.range[0], end: sp.local.range[1], text: newName });
            for (const r of moduleBindingRefs(finfo.moduleScope, localName, finfo.sm) ?? []) {
              // skip the specifier's own local identifier, it is inside the collapsed span
              if (r.range[0] >= sp.imported.range[0] && r.range[1] <= sp.local.range[1]) continue;
              push(fpath, { start: r.range[0], end: r.range[1], text: newName });
            }
          } else {
            push(fpath, { start: sp.imported.range[0], end: sp.imported.range[1], text: newName });
          }
        }
      }
    }

    // (c) property access through `await import(...)` / `import.meta.require(...)`
    const hasDyn = fedges.some((e) => e.form === "dynamic" || e.form === "lazy");
    if (hasDyn && oldNames.size) {
      try {
        const res = dynamicEdits(
          fsrc,
          oldNames,
          (spec) => normalize(join(dirname(fpath), spec)) === modulePath,
        );
        const seen = new Set();
        for (const e of res.edits) {
          const k = e.start + ":" + e.end;
          if (seen.has(k)) continue;
          seen.add(k);
          push(fpath, { start: e.start, end: e.end, text: renameOf.get(e.oldName) });
        }
        for (const w of res.warnings) warnings.push(`[${short(fpath)}] ${w}`);
      } catch (e) {
        errors.push(`dynamic analysis failed in ${short(fpath)}: ${e.message}`);
      }
    }
  }

  return { errors, warnings, edits, modulePath, newFile };
}

/** Kept for the manifest: list dynamic edges whose exporters we renamed. */
export function namespaceWarnings(plan, tree, idx) {
  const out = [];
  const modulePath = normalize(join(ROOT, plan.module));
  const oldNames = Object.keys(plan.renames);
  const files = new Set((idx.importers.get(modulePath) ?? []).map((e) => e.from));
  for (const f of files) {
    const src = tree.src.get(f);
    if (!src) continue;
    for (const n of oldNames) {
      // 两处排除，都是实测告警里的噪声源：
      //  (?<!\.)      展开运算符 `...MHe(x)` 的第三个点会被 `\.\s*MHe` 匹到，
      //               而那种位置的名字是具名静态导入，引擎已按作用域改名。
      //  (?!["'`])    导入路径的扩展名：某模块导出名叫 `js` 时，`"./foo.js"` 里
      //               的 `.js` 会被匹到（`\b` 在 `js` 后遇引号也算边界）。
      // 真正的命名空间取值 `ns.MHe` 里，点前面是标识符字符、后面不是引号，不受影响。
      const re = new RegExp(`(?<!\\.)\\.\\s*${n}\\b(?!["'\`])|\\[\\s*["']${n}["']\\s*\\]`);
      if (re.test(src)) {
        const line = src.slice(0, src.search(re)).split("\n").length;
        out.push(`[${short(f)}:${line}] property access .${n} — verify it is not the module namespace`);
      }
    }
  }
  return out;
}
