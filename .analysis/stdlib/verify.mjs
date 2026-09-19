// 收敛结果的不变式校验。任一不过 → 调用方回滚**该组**（不是整个文件）。
//
// 六条判据，第 2 条是主力：
//   1. 往返     —— 逆序 replay 每条编辑，必须逐字节还原。一次覆盖「删声明时把旁边语句
//                  一起删了」「逗号吞错但语法仍合法」「区间重叠/编辑丢失」。
//   2. 作用域形状 —— 删 ImportDeclaration / specifier 既不创建也不销毁 scope，所以
//                  `sm.scopes` 逐位稳定；逐 scope 逐名字比引用计数。这一条同时抓到
//                  「引用被改到另一个作用域的同名变量上」（嵌套 scope 计数变）、
//                  「顺手改坏无关引用」、「新名捕获了别人的自由引用」（计数多于预期）、
//                  「漏改一处」（计数少于预期）。比区间比较强，且绕过 offset 漂移。
//   3. through 名字多重集不变 —— 抓新出现的自由标识符。
//   4. 导出面 —— 有序多重集不变；且裸再导出的 local 必须有模块作用域绑定
//                  （裸再导出是链接期错误，acorn 不报）。
//   5. import 形状 —— (source, imported) 集合与 source 集合不变；default/namespace 计数不变。
//   6. 字节账本 —— 长度差恰好等于各编辑的长度差之和。
import { analyze } from "../rename/lib.mjs";
import { splice } from "../rename/engine.mjs";

/**
 * 从改后文本出发，按逆序把每条编辑换回原文，必须逐字节还原 `src`。
 *
 * 注意 **offset 漂移**：编辑在改后文本里的起点是 `start + 前面所有编辑的净增量`，
 * 不是 `start`。第一版漏了这一步，导致重建出来的文本错位——那是个假失败
 * （编辑本身是对的），但同样会掩盖真失败，所以必须算准。
 *
 * 顺带校验「每条编辑真的落在它在改后文本里的预期位置」，抓 splice 丢编辑/串位。
 */
export function roundTrip(src, next, edits) {
  const errs = [];
  const sorted = [...edits].sort((a, b) => a.start - b.start);
  let out = "";
  let ncur = 0;
  let shift = 0;
  for (const e of sorted) {
    if (e.start < ncur - shift) return [`编辑重叠：${e.start} 落在上一处之后`];
    const ns = e.start + shift;
    const ne = ns + e.text.length;
    if (next.slice(ns, ne) !== e.text) {
      return [`编辑未落在预期位置：${ns}-${ne} 处是 ${JSON.stringify(next.slice(ns, ne))}，期望 ${JSON.stringify(e.text)}`];
    }
    out += next.slice(ncur, ns) + e.was;
    ncur = ne;
    shift += e.text.length - (e.end - e.start);
  }
  out += next.slice(ncur);
  if (out !== src) {
    let i = 0;
    while (i < src.length && src[i] === out[i]) i++;
    errs.push(`往返不逐字节相同（首个差异在 ${i}：原文 ${JSON.stringify(src.slice(i, i + 40))} vs 还原 ${JSON.stringify(out.slice(i, i + 40))}）`);
  }
  return errs;
}

const throughCounts = (sm) => {
  const c = new Map();
  for (const r of sm.globalScope.through) c.set(r.identifier.name, (c.get(r.identifier.name) ?? 0) + 1);
  return c;
};

const multiDiff = (a, b, label) => {
  const names = new Set([...a.keys(), ...b.keys()]);
  const out = [];
  for (const n of names) if ((a.get(n) ?? 0) !== (b.get(n) ?? 0)) out.push(`${label} ${n}: ${a.get(n) ?? 0} → ${b.get(n) ?? 0}`);
  return out;
};

export function exportSpecs(ast) {
  const out = [];
  for (const node of ast.body) {
    if (node.type === "ExportNamedDeclaration") {
      for (const sp of node.specifiers ?? []) {
        out.push(node.source ? `${node.source.value}#${sp.exported.name}` : sp.exported.name);
      }
    } else if (node.type === "ExportDefaultDeclaration") {
      out.push("default");
    } else if (node.type === "ExportAllDeclaration") {
      out.push(`*${node.exported ? " as " + node.exported.name : ""} from ${node.source.value}`);
    }
  }
  return out;
}

/**
 * import 的形状指纹。
 *
 * source 按 **归一化** 取（`node:path` 与 `path` 是同一个内建模块，也是 plan.mjs 的分组键）。
 * 原始拼写不是语义：把 `import {sep as q7} from "node:path"` 删掉、只留同文件的
 * `import {sep} from "path"`，模块照样被 import，绑定是同一个。真实树里没有任何文件
 * 同时用两种拼写，所以这条归一化只是让判据与分组键自洽。
 */
export function importShape(ast) {
  const pairs = new Set();
  const sources = new Set();
  let def = 0;
  let ns = 0;
  for (const node of ast.body) {
    if (node.type !== "ImportDeclaration") continue;
    const s = node.source.value.startsWith("node:") ? node.source.value.slice(5) : node.source.value;
    sources.add(s);
    for (const sp of node.specifiers) {
      if (sp.type === "ImportDefaultSpecifier") def++;
      else if (sp.type === "ImportNamespaceSpecifier") ns++;
      else pairs.add(s + "\0" + sp.imported.name);
    }
  }
  return { pairs, sources, def, ns };
}

/**
 * @param {string} src    改前源码
 * @param {string} next   改后源码
 * @param {object} p      plan() 的返回值（需要 edits / groups）
 * @returns {string[]}    失败原因，空数组表示全过
 */
export function check(src, next, p) {
  const errs = [];

  // 1. 往返
  errs.push(...roundTrip(src, next, p.edits));

  // 6. 字节账本
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

  // 2. 作用域形状
  const deletedAliases = new Set();
  const targetDeltas = new Map();
  for (const g of p.groups) {
    let sum = 0;
    for (const it of g.items) {
      deletedAliases.add(it.sp.local.name);
      sum += it.refCount ?? 0;
    }
    targetDeltas.set(g.name, (targetDeltas.get(g.name) ?? 0) + sum);
  }
  const o = before.sm;
  const n = after.sm;
  if (o.scopes.length !== n.scopes.length) {
    errs.push(`scope 数变了 ${o.scopes.length} → ${n.scopes.length}`);
  } else {
    const modIdx = o.scopes.findIndex((s) => s.type === "module");
    for (let i = 0; i < o.scopes.length; i++) {
      if (o.scopes[i].type !== n.scopes[i].type) {
        errs.push(`scope[${i}] 类型 ${o.scopes[i].type} → ${n.scopes[i].type}`);
        continue;
      }
      for (const name of new Set([...o.scopes[i].set.keys(), ...n.scopes[i].set.keys()])) {
        const oc = o.scopes[i].set.get(name)?.references.length ?? null;
        const nc = n.scopes[i].set.get(name)?.references.length ?? null;
        if (i === modIdx) {
          if (deletedAliases.has(name) && !targetDeltas.has(name)) {
            if (nc !== null) errs.push(`模块作用域：被删别名 ${name} 仍在（${nc} 条引用）`);
            continue;
          }
          if (targetDeltas.has(name)) {
            const want = (oc ?? 0) + targetDeltas.get(name);
            if (nc !== want) errs.push(`模块作用域：${name} 引用数 ${nc} ≠ 期望 ${want}`);
            continue;
          }
        }
        if (oc !== nc) errs.push(`scope[${i}].${name} 引用数 ${oc} → ${nc}`);
      }
    }
  }

  // 3. through 名字多重集
  errs.push(...multiDiff(throughCounts(o), throughCounts(n), "自由标识符"));

  // 4. 导出面
  const eo = exportSpecs(before.ast);
  const en = exportSpecs(after.ast);
  if (eo.join("|") !== en.join("|")) errs.push(`导出面变了：${eo.join(",")} → ${en.join(",")}`);
  const mod = after.moduleScope;
  for (const node of after.ast.body) {
    if (node.type === "ExportNamedDeclaration" && !node.source) {
      for (const sp of node.specifiers ?? []) {
        if (sp.local && !mod.set.has(sp.local.name)) errs.push(`裸再导出 ${sp.local.name} 在模块作用域无绑定`);
      }
    }
  }

  // 5. import 形状
  const io = importShape(before.ast);
  const inew = importShape(after.ast);
  for (const p2 of io.pairs) if (!inew.pairs.has(p2)) errs.push(`import 形状：(source, imported) 丢失 ${JSON.stringify(p2)}`);
  for (const s of io.sources) if (!inew.sources.has(s)) errs.push(`import 形状：source 丢失 ${s}`);
  if (io.def !== inew.def) errs.push(`import 形状：default specifier 数 ${io.def} → ${inew.def}`);
  if (io.ns !== inew.ns) errs.push(`import 形状：namespace specifier 数 ${io.ns} → ${inew.ns}`);

  return errs;
}

/** 应用编辑集（附带 was 字段供往返用）。**按 start 升序返回** —— 消费方（含
 *  `.analysis/rename/verify.mjs` 的往返检查）都假设编辑是按 start 排好序的：
 *  它用 `slice(0, i)` 累加前面编辑的净增量来算 offset 漂移，乱序会算出错的位移。 */
export function applyEdits(src, edits) {
  const withWas = edits.map((e) => ({ ...e, was: src.slice(e.start, e.end) })).sort((a, b) => a.start - b.start);
  return { next: splice(src, withWas, "plan"), edits: withWas };
}
