import { parse } from "acorn";
import * as eslintScope from "eslint-scope";

export function parseFile(src) {
  return parse(src, { ecmaVersion: "latest", sourceType: "module", ranges: true });
}

export function analyze(src) {
  const ast = parseFile(src);
  const sm = eslintScope.analyze(ast, {
    ecmaVersion: 2022, sourceType: "module", optimistic: true, ignoreEval: true,
  });
  const moduleScope = sm.globalScope.childScopes.find((s) => s.type === "module") ?? sm.globalScope;
  return { ast, sm, moduleScope };
}

/**
 * Identifier nodes (with .range) that resolve to the module-level binding `name`.
 *
 * A `class Foo { static x() { return new Foo() } }` declares `Foo` twice in
 * eslint-scope's model: once in the enclosing scope and once in an inner scope that
 * covers the class body. References inside the body resolve to the INNER one, so
 * looking at the module binding alone misses them — and after renaming the
 * declaration they become free identifiers (`ReferenceError` at runtime). Collect
 * every variable whose definition node is the same declaration.
 */
// Memoised per (scopeManager, name): the class-scope scan below walks every scope in
// the file (41,532 of them in 会话UI), so calling it per name per importer is what made
// the first slice run take forever.
const refCache = new WeakMap();

export function moduleBindingRefs(moduleScope, name, sm) {
  if (sm) {
    let perFile = refCache.get(sm);
    if (!perFile) { perFile = new Map(); refCache.set(sm, perFile); }
    if (perFile.has(name)) return perFile.get(name);
  }
  const result = moduleBindingRefsUncached(moduleScope, name, sm);
  if (sm) refCache.get(sm).set(name, result);
  return result;
}

function moduleBindingRefsUncached(moduleScope, name, sm) {
  const v = moduleScope.set.get(name);
  if (!v) return null;
  if (sm) {
    const defNodes = new Set(v.defs.map((d) => d.node));
    const same = [];
    for (const sc of sm.scopes) {
      const w = sc.set.get(name);
      if (!w || w === v) continue;
      if (w.defs.some((d) => defNodes.has(d.node))) same.push(w);
    }
    if (same.length) {
      const byRange = new Map();
      const push = (id) => byRange.set(id.range[0] + ":" + id.range[1], id);
      for (const w of [v, ...same]) {
        for (const id of w.identifiers) push(id);
        for (const r of w.references) push(r.identifier);
      }
      return [...byRange.values()];
    }
  }
  // eslint-scope lists a `var`/`let` declaration identifier in BOTH
  // `identifiers` and (as the init reference) in `references` — dedupe by range.
  const byRange = new Map();
  for (const id of v.identifiers) byRange.set(id.range[0] + ":" + id.range[1], id);
  for (const r of v.references) byRange.set(r.identifier.range[0] + ":" + r.identifier.range[1], r.identifier);
  return [...byRange.values()];
}

/** every name declared in any scope of the file (incl. shadows) */
export function allDeclaredNames(sm) {
  const s = new Set();
  for (const sc of sm.scopes) for (const k of sc.set.keys()) s.add(k);
  return s;
}

/** names referenced but resolving to no scope (globals / undefined) */
export function freeRefs(sm) {
  return sm.globalScope.through.map((r) => r.identifier);
}
