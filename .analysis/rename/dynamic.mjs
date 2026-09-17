// Property-access forms a plain import-binding rename would miss:
//   (await import("./m.js")).oldName           member on the import expression
//   let { oldName: local } = await import(..)  destructuring
//   ({ oldName: x } = await import(".."))      assignment destructuring
//   X = await import("./m.js"); X.oldName      namespace binding
//   import.meta.require("./m.js").oldName      member on lazy require
import { parseFile } from "./lib.mjs";

const isImportCall = (n) =>
  n?.type === "ImportExpression" ||
  (n?.type === "CallExpression" &&
    n.callee?.type === "MetaProperty" &&
    n.callee.meta?.name === "import" &&
    n.callee.property?.name === "require");

const literalSpec = (n) => {
  const s = n.type === "ImportExpression" ? n.source : n.arguments?.[0];
  return s?.type === "Literal" ? s.value : null;
};

function walk(node, parent, cb) {
  if (!node || typeof node.type !== "string") return;
  cb(node, parent);
  for (const k of Object.keys(node)) {
    if (k === "type" || k === "start" || k === "end" || k === "range" || k === "loc") continue;
    const v = node[k];
    if (Array.isArray(v)) { for (const c of v) if (c && typeof c.type === "string") walk(c, node, cb); }
    else if (v && typeof v.type === "string") walk(v, node, cb);
  }
}

export function dynamicEdits(src, oldNames, resolveSpec) {
  const ast = parseFile(src);
  const parentOf = new Map();
  const imports = [];
  walk(ast, null, (node, parent) => {
    parentOf.set(node, parent);
    if (isImportCall(node)) imports.push(node);
  });

  const edits = [];
  const warnings = [];
  const addProp = (node) => {
    if (node && oldNames.has(node.name)) edits.push({ start: node.range[0], end: node.range[1], oldName: node.name });
  };

  const nsBindings = new Map(); // variable name -> spec
  for (const imp of imports) {
    const spec = literalSpec(imp);
    if (spec == null || !resolveSpec(spec)) continue;

    // climb out of await / parens / TS-ish wrappers
    let p = parentOf.get(imp);
    while (p && (p.type === "AwaitExpression" || p.type === "ParenthesizedExpression")) p = parentOf.get(p);

    if (p?.type === "MemberExpression" && p.object?.type !== undefined && !p.computed) {
      // make sure the member's object chain actually contains our import
      let o = p.object;
      while (o && o.type === "MemberExpression") o = o.object;
      if (o === imp || o === parentOf.get(imp) || o?.type === "AwaitExpression") addProp(p.property);
    } else if (p?.type === "VariableDeclarator" && p.id.type === "ObjectPattern") {
      for (const prop of p.id.properties) {
        if (prop.type === "RestElement") { warnings.push(`rest element in destructuring from ${spec}`); continue; }
        addProp(prop.key);
      }
    } else if (p?.type === "AssignmentExpression" && p.left.type === "ObjectPattern") {
      for (const prop of p.left.properties) {
        if (prop.type === "RestElement") { warnings.push(`rest element in destructuring from ${spec}`); continue; }
        addProp(prop.key);
      }
    } else if (p?.type === "VariableDeclarator" && p.id.type === "Identifier") {
      nsBindings.set(p.id.name, spec);
    }
  }

  // namespace binding: X.oldName
  if (nsBindings.size) {
    for (const [name] of nsBindings) {
      walk(ast, null, (node, parent) => {
        if (node.type !== "Identifier" || node.name !== name) return;
        if (parent?.type === "MemberExpression" && parent.object === node && !parent.computed) addProp(parent.property);
      });
    }
  }

  return { edits, warnings, ast };
}
