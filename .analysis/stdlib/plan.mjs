// 内建模块 import 别名的收敛规划器。
//
// 输入一个文件（源码 + AST），产出「把 `import { sep as Cgr } from "path"` 收敛成
// `import { sep } from "path"`，并把该文件内解析到 `Cgr` 的引用改名为 `sep`」的编辑集。
//
// 关键设计（都是踩过的坑，见../../../README.md 与 .analysis/rename/README.md）：
//
//  1. **跨组同名目标**：`fs.stat` 与 `fs/promises.stat` 是不同函数，同文件里两个组都想
//     落成 `stat` 会重复声明 → 整块文件解析失败。所以每个文件先算一张**目标名预留表**，
//     输的组整组保留原别名。预留表必须在**原文件**上一次算完：`groups` 的插入序就是
//     源码序，边算边改会让结果依赖遍历顺序。
//  2. **`ExportSpecifier.local` 也是一条 reference**。直接按引用改名会把 `export { i8 }`
//     变成 `export { randomUUID }`，导出面静默改变。命中时要融合成一条编辑，
//     简写形态写 `T as local`，保住导出名。
//  3. **逗号只在 specifier 列表内部吞**。跨出花括号会写出 `import D {a as X} from "m"`；
//     列表内已无逗号时，若还有 default/namespace specifier 就保留空子句 `import d, {}`。
//  4. 每个组恰有一个幸存 specifier 且必留在它自己那条声明里，所以**任何出现过的 source
//     至少被一条留存声明引用**，「删声明把 source 弄丢」结构上不可能（verify.mjs 会断言）。
import { readFileSync } from "node:fs";
import { isBuiltin } from "./builtins.mjs";
import { analyze, moduleBindingRefs } from "../rename/lib.mjs";

export const normSource = (s) => (s.startsWith("node:") ? s.slice(5) : s);
const rk = (r) => r[0] + ":" + r[1];
const segCount = (s) => s.split("/").length;

/** 组的记账行。status 见 plan() 的取值。 */
function rec(g, status, extra = {}) {
  return {
    source: g.source,
    imported: g.name,
    target: g.name,
    aliases: g.items.map((it) => it.sp.local.name),
    refs: g.items.reduce((n, it) => n + (it.refCount ?? 0), 0),
    status,
    ...extra,
  };
}

/**
 * 整条 import 声明删除。向前吃掉行首缩进、向后吃掉行尾换行——但**只在两端确实全是
 * 空白时**才吃，否则会把同一行的下一条语句一起删掉。
 */
function wholeDeclDelete(src, decl) {
  let start = decl.range[0];
  const ls = src.lastIndexOf("\n", start - 1) + 1;
  if (/^[ \t]*$/.test(src.slice(ls, start))) start = ls;
  let end = decl.range[1];
  let p = end;
  while (p < src.length && (src[p] === " " || src[p] === "\t" || src[p] === "\r")) p++;
  if (src[p] === "\n") end = p + 1;
  return { start, end, text: "" };
}

/**
 * 规划一个文件。
 * @param {string} src
 * @param {{file?: string, exclude?: Set<string>}} opts
 *        `exclude` 装 `"<归一化 source>\0<导出名>"`，用于校验失败后的逐组回滚重试。
 * @returns {{edits: Array, records: Array, groups: Array, skipped: Array}}
 */
export function plan(src, { file = "", exclude = null } = {}) {
  const { ast, sm, moduleScope } = analyze(src);
  const edits = [];
  const records = [];
  const skipped = [];

  // `export { local }` / `export { local as X }` 的 local 区间 → specifier
  const exportLocals = new Map();
  for (const node of ast.body) {
    if (node.type === "ExportNamedDeclaration" && !node.source && node.specifiers) {
      for (const sp of node.specifiers) if (sp.local) exportLocals.set(rk(sp.local.range), sp);
    }
  }

  // ---- 1. 收集候选组：(归一化 source, 导出名) → 该名字在本文件里的全部混淆别名
  const groups = new Map();
  for (const node of ast.body) {
    if (node.type !== "ImportDeclaration" || !isBuiltin(node.source.value)) continue;
    for (const sp of node.specifiers) {
      if (sp.type !== "ImportSpecifier") continue;
      const T = sp.imported.name;
      if (T === "default") continue; // `import {default}` 是语法错误，零成本守卫
      if (T === sp.local.name) continue; // 已经是裸名，不是本次目标
      const k = normSource(node.source.value) + "\0" + T;
      if (!groups.has(k)) {
        groups.set(k, { source: node.source.value, norm: normSource(node.source.value), name: T, items: [] });
      }
      groups.get(k).items.push({ sp, decl: node, refCount: 0 });
    }
  }
  if (!groups.size) return { edits, records, groups: [], skipped };

  // ---- 2. 准入判定（整组跳过，基于原文件）
  const through = new Set(sm.globalScope.through.map((r) => r.identifier.name));
  const admitted = [];
  for (const g of groups.values()) {
    const T = g.name;
    if (exclude && exclude.has(g.norm + "\0" + T)) {
      g.items.forEach((it) => records.push(rec(g, "rolledback", { note: "校验未过，逐组回退" })));
      skipped.push({ file, group: `${g.norm} ${T}`, status: "rolledback" });
      continue;
    }
    const v = moduleScope.set.get(T);
    if (v) {
      // 目标名已被模块作用域的某个绑定占用。唯一放行的情形：那个绑定本身就是
      // 「同一个内建模块的同一个名字」的另一条导入路径（可合并）。
      const sameImport =
        v.defs.length > 0 &&
        v.defs.every(
          (d) =>
            d.type === "ImportBinding" &&
            d.node.type === "ImportSpecifier" &&
            d.node.imported.name === T &&
            normSource(d.parent.source.value) === g.norm,
        );
      if (!sameImport) {
        g.items.forEach((it) => records.push(rec(g, "skipped:top-occupied", { note: `模块作用域已有 ${T}` })));
        skipped.push({ file, group: g.name, status: "skipped:top-occupied" });
        continue;
      }
    }
    if (through.has(T)) {
      g.items.forEach((it) => records.push(rec(g, "skipped:free-global", { note: `${T} 是文件里的自由全局引用` })));
      skipped.push({ file, group: g.name, status: "skipped:free-global" });
      continue;
    }
    admitted.push(g);
  }

  // ---- 3. 目标名预留表
  const byTarget = new Map();
  for (const g of admitted) {
    if (!byTarget.has(g.name)) byTarget.set(g.name, []);
    byTarget.get(g.name).push(g);
  }
  const winners = [];
  for (const [T, gs] of byTarget) {
    if (gs.length === 1) {
      winners.push(gs[0]);
      continue;
    }
    gs.sort(
      (a, b) =>
        b.items.length - a.items.length ||
        segCount(a.norm) - segCount(b.norm) ||
        (a.norm < b.norm ? -1 : a.norm > b.norm ? 1 : 0),
    );
    winners.push(gs[0]);
    for (const g of gs.slice(1)) {
      g.items.forEach((it) =>
        records.push(rec(g, "skipped:loser-of-reservation", { note: `${T} 被 ${gs[0].norm} 占了` })),
      );
      skipped.push({ file, group: `${g.norm} ${T}`, status: "skipped:loser-of-reservation" });
    }
  }

  // ---- 4. 生成编辑
  const declDeletes = new Map(); // decl → Set<specifier>
  for (const g of winners) {
    const T = g.name;
    const bare = moduleScope.set.get(T); // 同源同名的裸导入（若已有，免编辑直接当幸存者）
    const items = [...g.items].sort((a, b) => a.sp.range[0] - b.sp.range[0]);
    const survivor = bare ? null : items[0];

    for (const it of items) {
      const local = it.sp.local.name;
      const ids = moduleBindingRefs(moduleScope, local, sm) ?? [];
      let n = 0;
      for (const id of ids) {
        // 跳过 specifier 自己的 local 标识符（那是声明位置，不是引用）
        if (rk(id.range) === rk(it.sp.local.range)) continue;
        n++;
        const exp = exportLocals.get(rk(id.range));
        if (exp && exp.exported.name === exp.local.name) {
          // `export { local }` —— 必须写成 `T as local` 才能保住导出名
          edits.push({ start: id.range[0], end: id.range[1], text: `${T} as ${local}` });
        } else {
          // 普通引用，或 `export { local as X }` —— 只改 local 一侧
          edits.push({ start: id.range[0], end: id.range[1], text: T });
        }
      }
      it.refCount = n;
      if (it !== survivor) {
        if (!declDeletes.has(it.decl)) declDeletes.set(it.decl, new Set());
        declDeletes.get(it.decl).add(it.sp);
      }
    }
    if (survivor) {
      edits.push({ start: survivor.sp.imported.range[0], end: survivor.sp.local.range[1], text: T });
    }
    g.items.forEach((it) => records.push(rec(g, "applied")));
  }

  // ---- 5. specifier / 整条声明的删除
  for (const [decl, delSet] of declDeletes) {
    const brace = decl.specifiers.filter((s) => s.type === "ImportSpecifier");
    const keep = brace.filter((s) => !delSet.has(s));
    if (keep.length === 0) {
      if (decl.specifiers.every((s) => s.type === "ImportSpecifier")) {
        edits.push(wholeDeclDelete(src, decl));
      } else {
        // 还有 default / namespace specifier —— 保留一个空子句 `import d, {} from "m"`
        const braceStart = src.lastIndexOf("{", brace[0].range[0]);
        const braceEnd = src.indexOf("}", brace[brace.length - 1].range[1]) + 1;
        edits.push({ start: braceStart, end: braceEnd, text: "{}" });
      }
      continue;
    }
    // 连续段一起删；只在 specifier 列表**内部**找逗号
    let i = 0;
    while (i < brace.length) {
      if (!delSet.has(brace[i])) {
        i++;
        continue;
      }
      let j = i;
      while (j + 1 < brace.length && delSet.has(brace[j + 1])) j++;
      if (j < brace.length - 1) {
        edits.push({ start: brace[i].range[0], end: brace[j + 1].range[0], text: "" });
      } else {
        edits.push({ start: brace[i - 1].range[1], end: brace[j].range[1], text: "" });
      }
      i = j + 1;
    }
  }

  return { edits, records, groups: winners, skipped, ast, sm, moduleScope };
}

export { wholeDeclDelete };
