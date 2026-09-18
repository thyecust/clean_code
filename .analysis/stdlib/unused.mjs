// 未使用 import 的规划与校验。
//
// 候选 = 「该 specifier 的 import 绑定在本文件里零引用」。这一点两个独立实现互相印证过：
// 自研（acorn + eslint-scope）与 `oxlint -D no-unused-vars` 逐条比对，交集 2618 条，
// oxlint 无独有；自研多出的 6 条是 `_` 前缀名，oxlint 按 `^_` 惯例默认忽略。
//
// **难点不在找，在删。** 删掉一条 `import {x} from "./m.js"` 会改变 `m.js` 的求值位置，
// 而本树大量模块靠顶层 `initESM(...)` 之类做初始化。所以：
//
//   内建模块 source   → 整条删（Node 内建的加载无可观测副作用；npm 包**不**走这条，
//                        它们可能有顶层副作用，一律走下面的求值顺序判据）
//   声明删掉后仍留至少一个 specifier → 就地删（模块照旧在原来的位置被加载）
//   声明会整条变空   → 走下面的求值顺序判据
//
// 求值顺序判据：设该文件的急切 import 边按源码序为 t1…tn（求值顺序 = 依次展开 subtree(ti)），
// 目标 T 的求值时刻 = **第一个**满足 T ∈ subtree(ti) 的 ti。所以
//   ∃ ti 早于 R 使 T ∈ subtree(ti)，且 ti 本身不在此次删除之列
// ⟹ T 的求值时刻由 ti 决定，删掉 R 只是移除一次对已求值模块的重复访问，顺序逐位不变。
// 又因为 T ∈ subtree(ti) ⟹ subtree(T) ⊆ subtree(ti)，所以 R 的整棵子树都被 ti 覆盖，
// 不会有模块因为 R 被删而不再求值。
//
// 只走**急切**边（import 声明 / `export … from`），不含 `import()` 与 `import.meta.require()`
// —— 后两者写在函数体里，不是加载期求值。
import { readFileSync, existsSync } from "node:fs";
import { join, dirname, normalize } from "node:path";
import { ROOT, walk, shortPath } from "../rename/paths.mjs";
import { analyze } from "../rename/lib.mjs";
import { deleteSpecifiers } from "./plan.mjs";
import { isBuiltin } from "./builtins.mjs";

/** 一条急切边（源码序）。`node` 是 AST 节点，`target` 是解析后的绝对路径。 */
const eagerEdges = (ast) => {
  const out = [];
  for (const n of ast.body) {
    if (n.type === "ImportDeclaration" || (n.type === "ExportNamedDeclaration" && n.source) || n.type === "ExportAllDeclaration") {
      out.push({ spec: n.source.value, target: null, node: n });
    }
  }
  return out;
};

/**
 * 建立在**改动前**源码上的急切求值图。
 *
 * 「改动前」用备份目录还原：备份里存的是落盘前的原文，所以「有备份的用备份、其余用当前树」
 * 在任何批次进度下都成立（与 snapshot.mjs 同一招）。
 */
export function buildGraph(backupDir) {
  const files = walk(ROOT);
  const src = new Map();
  const ast = new Map();
  for (const f of files) {
    const rel = shortPath(f);
    const b = join(backupDir, rel.split("/").join("__"));
    let s;
    try {
      s = existsSync(b) ? readFileSync(b, "utf8") : readFileSync(f, "utf8");
    } catch {
      continue;
    }
    src.set(f, s);
    try {
      ast.set(f, analyze(s).ast);
    } catch {}
  }
  const edges = new Map();
  for (const f of ast.keys()) {
    const list = eagerEdges(ast.get(f));
    for (const e of list) e.target = normalize(join(dirname(f), e.spec));
    edges.set(f, list);
  }
  const memo = new Map();
  /** f 自己能到达的全部模块（含 f 自己） */
  function subtree(f) {
    if (memo.has(f)) return memo.get(f);
    const seen = new Set([f]);
    memo.set(f, seen);
    const stack = [];
    for (const e of edges.get(f) ?? []) if (src.has(e.target)) stack.push(e.target);
    while (stack.length) {
      const t = stack.pop();
      if (seen.has(t)) continue;
      seen.add(t);
      for (const e of edges.get(t) ?? []) if (src.has(e.target)) stack.push(e.target);
    }
    memo.set(f, seen);
    return seen;
  }
  return { files, src, edges, subtree };
}

/**
 * 判定「整条删掉」是否保持求值顺序。返回要整条删的声明集合。
 *
 * `ownEdges` 必须是**当前这棵 AST** 的急切边 —— 第一版图省事用了 graph 里的边，
 * 结果 `first.node !== d` 比较的是两次解析产生的两个不同节点对象，恒为真，
 * 于是每条声明都被判成「更早的 import 已先触发」，把真正最先触发目标求值的声明也删了。
 *
 * `removed` 的起点只放**内建模块**：Node 内建的加载没有可观测副作用，删了不改变行为。
 * npm 包不在此列 —— 它们可能有顶层副作用，必须走下面的判据（本树实测候选里零个 npm 包，
 * 但这条捷径不能默认对所有裸说明符开放）。
 *
 * 迭代到不动点：`safe` 对 `removed` 单调递减，所以第一轮之后集合只会缩小，收敛。
 * 不动点处每个 d ∈ removed 都满足「最早触发它目标的那条边不在 removed 里、也不是 d 自己」
 * —— 即那个触发者一定会活下来，目标的求值时刻因此不变。
 */
export function classifyDeletions(file, empties, graph, ownEdges) {
  const edges = ownEdges;
  const removed = new Set(empties.filter((d) => isBuiltin(d.source.value)));
  const rest = empties.filter((d) => !isBuiltin(d.source.value));
  for (let round = 0; round < 8; round++) {
    const next = new Set(removed);
    for (const d of rest) {
      if (removed.has(d)) continue;
      const T = normalize(join(dirname(file), d.source.value));
      if (!graph.src.has(T)) continue;
      const first = edges.find((e) => e.target === T || graph.subtree(e.target).has(T));
      if (first && first.node !== d && !removed.has(first.node)) next.add(d);
    }
    if (next.size === removed.size) break;
    for (const d of removed) next.add(d);
    removed.clear();
    for (const d of next) removed.add(d);
  }
  // 自证：不动点处每条被删声明的最早触发者都必须活着且不是它自己
  for (const d of removed) {
    if (isBuiltin(d.source.value)) continue;
    const T = normalize(join(dirname(file), d.source.value));
    const first = edges.find((e) => e.target === T || graph.subtree(e.target).has(T));
    if (!first || first.node === d || removed.has(first.node)) {
      throw new Error(`${file}: ${d.source.value} 被判为可整条删，但最早触发者不成立`);
    }
  }
  return removed;
}

/**
 * 规划一个文件的未使用 import 清理。
 * @returns {{edits, records, ast, sm, moduleScope}}
 */
export function planUnused(src, { file, graph, exclude = null }) {
  const { ast, sm, moduleScope } = analyze(src);
  const edits = [];
  const records = [];

  const byDecl = new Map();
  for (const d of ast.body) {
    if (d.type !== "ImportDeclaration") continue;
    const del = new Set();
    for (const sp of d.specifiers) {
      const v = moduleScope.set.get(sp.local.name);
      if (!v || v.references.length === 0) del.add(sp);
    }
    if (del.size) byDecl.set(d, del);
  }
  if (!byDecl.size) return { edits, records, ast, sm, moduleScope };

  const empties = [];
  for (const [d, del] of byDecl) if (del.size === d.specifiers.length) empties.push(d);
  // 本文件的急切边取自**当前** AST —— 与 empties 同一棵树，节点才能按同一性比较
  const ownEdges = eagerEdges(ast).map((e) => ({ ...e, target: normalize(join(dirname(file), e.spec)) }));
  const removed = classifyDeletions(file, empties, graph, ownEdges);

  for (const [d, del] of byDecl) {
    const removedNames = [...del].map((s) => s.local.name);
    if (exclude && exclude.has(removedNames.join(","))) continue;
    const allGone = del.size === d.specifiers.length;
    let mode;
    let why;
    if (!allGone) {
      mode = "alias"; // 声明还剩别的 specifier：模块照旧被加载，就地删
      why = "声明保留";
    } else if (isBuiltin(d.source.value)) {
      mode = "unused-delete";
      why = "内建模块，加载无副作用";
    } else if (removed.has(d)) {
      mode = "unused-delete";
      why = "更早的 import 已先触发该模块求值";
    } else {
      mode = "unused-bare";
      why = "本条最早触发该模块求值 → 降级成副作用导入";
    }
    edits.push(...deleteSpecifiers(src, d, del, mode));
    records.push({
      file: shortPath(file),
      source: d.source.value,
      removed: removedNames,
      line: src.slice(0, d.range[0]).split("\n").length,
      mode,
      why,
    });
  }

  return { edits, records, ast, sm, moduleScope };
}

/**
 * 校验。删除 import specifier **不创建也不销毁 scope**，所以 `sm.scopes` 逐位稳定。
 * 被删绑定的引用数本来就是 0，所以「其余任何 scope 任何名字的引用计数不变」这一条
 * 等价于「没碰到任何别的东西」。
 */
export function checkUnused(src, next, p, { roundTrip }) {
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
  for (const r of p.records) for (const n of r.removed) gone.add(n);

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
        if (i === modIdx && gone.has(name)) {
          if (nc !== null) errs.push(`模块作用域：被删绑定 ${name} 仍在（${nc} 条引用）`);
          continue;
        }
        if (oc !== nc) errs.push(`scope[${i}].${name} 引用数 ${oc} → ${nc}`);
      }
    }
  }

  // 若某个「零引用」判定是错的，删掉后那些引用会变成自由标识符 —— 这一条立刻抓住
  const tc = (sm) => {
    const m = new Map();
    for (const r of sm.globalScope.through) m.set(r.identifier.name, (m.get(r.identifier.name) ?? 0) + 1);
    return m;
  };
  const a = tc(o);
  const b = tc(n);
  for (const name of new Set([...a.keys(), ...b.keys()]))
    if ((a.get(name) ?? 0) !== (b.get(name) ?? 0)) errs.push(`自由标识符 ${name}: ${a.get(name) ?? 0} → ${b.get(name) ?? 0}`);

  return errs;
}
