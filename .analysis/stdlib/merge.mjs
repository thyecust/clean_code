// 合并重复的命名空间 / 默认导入。
//
// 打包器按模块重命名导入绑定，于是同一个模块会被 `import * as X` / `import X from`
// 重复导入几十次（`execution-core.js` 里 `path` 出现 8 次，`pluginEvalInitHandler` 里
// 18 次，`chunk-0t0sve49.js` 里 `vm` 8 次）。本模块把它们并成一个，名字用模块名。
//
// **`import * as ns` 与 `import d` 拿到的不是同一个对象**（bun 1.3.14 实测：
// `d === ns` 为 false、`d === ns.default` 为 true、`Object.keys` 17 vs 18、
// `ns[Symbol.toStringTag]` 是 "Module" 而 d 没有）。所以合并方向不能乱选：
//
//   全是 `* as X`     → 幸存者写成 `import * as T from "src"`
//   全是默认导入       → 幸存者写成 `import T from "src"`
//   两者都有（混合组）→ 幸存者写成**默认**导入，前提是该组每个 `* as` 绑定的引用**全部**
//                       是成员表达式的对象。此时 `ns.sep === d.sep`（实测为真），
//                       改成 `T.sep` 逐位等价；而默认绑定保留成默认绑定，取值完全没变。
//                       任一处非属性引用 → 整组跳过。
//
// 删声明不能改变模块的求值位置：**幸存者取该组最早的那条声明**，其余都是更晚的重复导入，
// 模块的首次求值由最早那条决定。幸存者也保证 source 集合不变。
import { analyze } from "../rename/lib.mjs";
import { wholeDeclDelete } from "./plan.mjs";
import { exportSpecs } from "./verify.mjs";

export const normSource = (s) => (s.startsWith("node:") ? s.slice(5) : s);
const rk = (r) => r[0] + ":" + r[1];

/** `fs/promises` → `fsPromises`；`path` → `path`；`child_process` → `child_process` */
export const moduleName = (norm) =>
  norm
    .split("/")
    .map((p, i) => (i === 0 ? p : p[0].toUpperCase() + p.slice(1)))
    .join("")
    .replace(/[^\w$]/g, "_");

/** 父节点索引（acorn 默认不挂 parent），用于判定「是不是成员表达式的对象」。 */
function buildParents(ast) {
  const m = new Map();
  const stack = [ast];
  while (stack.length) {
    const n = stack.pop();
    if (!n || typeof n !== "object") continue;
    for (const k of Object.keys(n)) {
      if (k === "type" || k === "start" || k === "end" || k === "range" || k === "loc") continue;
      const v = n[k];
      if (Array.isArray(v)) {
        for (const c of v) if (c && typeof c === "object" && c.type) (m.set(c, n), stack.push(c));
      } else if (v && typeof v === "object" && v.type) {
        m.set(v, n);
        stack.push(v);
      }
    }
  }
  return m;
}

/**
 * 该绑定是否**只**被当作成员表达式的对象使用（`NS.sep` / `NS[k]` / `NS.join(...)`）。
 * 计算成员 `NS[k]` 也算 —— 两个对象的属性集合对取值而言是一样的。
 */
function isMemberObjectOnly(v, pm) {
  if (!v) return false;
  for (const r of v.references) {
    const p = pm.get(r.identifier);
    if (!p || p.type !== "MemberExpression" || p.object !== r.identifier) return false;
  }
  return true;
}

function renderDecl(specs, src, decl) {
  const rawSource = src.slice(decl.source.range[0], decl.source.range[1]);
  const semi = src[decl.range[1] - 1] === ";" ? ";" : "";
  const parts = [];
  const named = [];
  for (const s of specs) {
    if (s.kind === "default") parts.push(s.name);
    else if (s.kind === "namespace") parts.push(`* as ${s.name}`);
    else if (s.type === "ImportSpecifier") named.push(src.slice(s.range[0], s.range[1]));
    else parts.push(src.slice(s.range[0], s.range[1])); // default / namespace 原样保留
  }
  // 具名 specifier 的 `range` **只覆盖它自己**，不含花括号 —— 直接拼会写出
  // `import fsPromises, constants from "…"`（实测被 checkMerge 的解析检查拦下）。
  if (named.length) parts.push(`{ ${named.join(", ")} }`);
  return `import ${parts.join(", ")} from ${rawSource}${semi}`;
}

function rec(g, T, status, extra = {}) {
  return {
    key: g.norm,
    source: g.source,
    target: T,
    bindings: g.items.map((it) => it.sp.local.name),
    kind: g.items.some((it) => !it.ns) ? "default" : "namespace",
    status,
    ...extra,
  };
}

/** 规划一个文件的命名空间/默认导入合并。 */
export function planMerge(src, { file, exclude = null }) {
  const { ast, sm, moduleScope } = analyze(src);
  const edits = [];
  const records = [];
  const pm = buildParents(ast);

  const exportLocals = new Map();
  for (const node of ast.body) {
    if (node.type === "ExportNamedDeclaration" && !node.source && node.specifiers) {
      for (const sp of node.specifiers) if (sp.local) exportLocals.set(rk(sp.local.range), sp);
    }
  }

  const groups = new Map();
  for (const node of ast.body) {
    if (node.type !== "ImportDeclaration") continue;
    const k = normSource(node.source.value);
    for (const sp of node.specifiers) {
      if (sp.type !== "ImportNamespaceSpecifier" && sp.type !== "ImportDefaultSpecifier") continue;
      if (!groups.has(k)) groups.set(k, { norm: k, source: node.source.value, items: [] });
      groups.get(k).items.push({ sp, decl: node, ns: sp.type === "ImportNamespaceSpecifier" });
    }
  }

  const through = new Set(sm.globalScope.through.map((r) => r.identifier.name));
  const winners = [];
  for (const g of groups.values()) {
    if (g.items.length < 2) continue;
    const T = moduleName(g.norm);
    if (exclude && exclude.has(g.norm)) {
      records.push(rec(g, T, "rolledback"));
      continue;
    }
    if (!/^[A-Za-z_$][\w$]*$/.test(T)) {
      records.push(rec(g, T, "skipped:bad-name"));
      continue;
    }
    if (moduleScope.set.has(T)) {
      records.push(rec(g, T, "skipped:top-occupied", { note: `模块作用域已有 ${T}` }));
      continue;
    }
    if (through.has(T)) {
      records.push(rec(g, T, "skipped:free-global", { note: `${T} 是文件里的自由全局引用` }));
      continue;
    }
    const hasDefault = g.items.some((it) => !it.ns);
    if (hasDefault) {
      const bad = g.items.filter((it) => it.ns).filter((it) => !isMemberObjectOnly(moduleScope.set.get(it.sp.local.name), pm));
      if (bad.length) {
        records.push(rec(g, T, "skipped:ns-non-member", { note: `${bad.map((b) => b.sp.local.name).join(",")} 有非属性引用` }));
        continue;
      }
    }
    winners.push({ g, T, kind: hasDefault ? "default" : "namespace" });
  }
  if (!winners.length) return { edits, records, ast, sm, moduleScope };

  for (const { g, T, kind } of winners) {
    const items = [...g.items].sort((a, b) => a.sp.range[0] - b.sp.range[0]);
    const survivorDecl = items[0].decl; // 最早的那条 → 求值位置不变
    const groupSpecs = new Set(g.items.map((it) => it.sp));

    // 引用改名
    for (const it of g.items) {
      const local = it.sp.local.name;
      const v = moduleScope.set.get(local);
      for (const r of v?.references ?? []) {
        const id = r.identifier;
        const exp = exportLocals.get(rk(id.range));
        if (exp && exp.exported.name === exp.local.name) {
          edits.push({ start: id.range[0], end: id.range[1], text: `${T} as ${local}` }); // 保住导出名
        } else {
          edits.push({ start: id.range[0], end: id.range[1], text: T });
        }
      }
    }

    // 声明重建 / 删除
    for (const decl of new Set(g.items.map((it) => it.decl))) {
      const rebuilt = [];
      let placed = false;
      for (const s of decl.specifiers) {
        if (!groupSpecs.has(s)) {
          rebuilt.push(s);
          continue;
        }
        if (decl === survivorDecl && !placed) {
          rebuilt.push({ kind, name: T });
          placed = true;
        }
      }
      if (!rebuilt.length) {
        edits.push(wholeDeclDelete(src, decl));
      } else {
        edits.push({ start: decl.range[0], end: decl.range[1], text: renderDecl(rebuilt, src, decl) });
      }
    }

    records.push(rec(g, T, "merged", { decls: new Set(g.items.map((it) => it.decl)).size }));
  }

  return { edits, records, ast, sm, moduleScope };
}

/**
 * 校验。改 import specifier **不创建也不销毁 scope**，`sm.scopes` 逐位稳定。
 * 被合并的绑定引用数全归到目标名上，其余任何 scope 任何名字的计数都必须不变。
 */
export function checkMerge(src, next, p, { roundTrip }) {
  const errs = [];
  errs.push(...roundTrip(src, next, p.edits));

  const delta = p.edits.reduce((n, e) => n + (e.text.length - (e.end - e.start)), 0);
  if (next.length - src.length !== delta) errs.push(`字节账本：实际 ${next.length - src.length} ≠ 编辑和 ${delta}`);

  const before = analyze(src);
  let after;
  try {
    after = analyze(next);
  } catch (e) {
    errs.push(`改后解析失败：${e.message}`);
    return errs;
  }

  const gone = new Set();
  const targets = new Map();
  for (const r of p.records) {
    if (r.status !== "merged") continue;
    let sum = 0;
    for (const b of r.bindings) {
      gone.add(b);
      sum += before.moduleScope.set.get(b)?.references.length ?? 0;
    }
    targets.set(r.target, (targets.get(r.target) ?? 0) + sum);
  }

  const o = before.sm;
  const n = after.sm;
  if (o.scopes.length !== n.scopes.length) {
    errs.push(`scope 数变了 ${o.scopes.length} → ${n.scopes.length}`);
  } else {
    const modIdx = o.scopes.findIndex((s) => s.type === "module");
    for (let i = 0; i < o.scopes.length; i++) {
      if (o.scopes[i].type !== n.scopes[i].type) {
        errs.push(`scope[${i}] 类型变了`);
        continue;
      }
      for (const name of new Set([...o.scopes[i].set.keys(), ...n.scopes[i].set.keys()])) {
        const oc = o.scopes[i].set.get(name)?.references.length ?? null;
        const nc = n.scopes[i].set.get(name)?.references.length ?? null;
        if (i === modIdx && gone.has(name) && !targets.has(name)) {
          if (nc !== null) errs.push(`模块作用域：被合并的绑定 ${name} 仍在（${nc} 条引用）`);
          continue;
        }
        if (i === modIdx && targets.has(name)) {
          const want = (oc ?? 0) + targets.get(name);
          if (nc !== want) errs.push(`模块作用域：${name} 引用数 ${nc} ≠ 期望 ${want}`);
          continue;
        }
        if (oc !== nc) errs.push(`scope[${i}].${name} 引用数 ${oc} → ${nc}`);
      }
    }
  }

  const tc = (sm) => {
    const m = new Map();
    for (const r of sm.globalScope.through) m.set(r.identifier.name, (m.get(r.identifier.name) ?? 0) + 1);
    return m;
  };
  const a = tc(o);
  const b = tc(n);
  for (const name of new Set([...a.keys(), ...b.keys()]))
    if ((a.get(name) ?? 0) !== (b.get(name) ?? 0)) errs.push(`自由标识符 ${name}: ${a.get(name) ?? 0} → ${b.get(name) ?? 0}`);

  const eo = exportSpecs(before.ast).join("|");
  const en = exportSpecs(after.ast).join("|");
  if (eo !== en) errs.push(`导出面变了：${eo} → ${en}`);

  const srcSet = (ast2) => new Set(ast2.body.filter((x) => x.type === "ImportDeclaration").map((x) => normSource(x.source.value)));
  const sa = srcSet(before.ast);
  const sb = srcSet(after.ast);
  for (const s of sa) if (!sb.has(s)) errs.push(`source 丢失：${s}`);

  return errs;
}
