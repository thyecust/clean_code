// 证据包：给「惰性单例块」这一类改名任务准备输入。
//
// 目标形状（`new j(() => new X())` 那一族，j/Gt 是键控惰性单例持有者）：
//
//     class tAt { pendingWrites = new Set(); track(e) {...} hasPending() {...} }
//     var mbr = new j(() => new tAt());          // 持有者：仍混淆
//     function getPendingWriteTracker() { return bi(mbr); }   // 访问器：已可读
//
// 要改的绑定是**本文件内非导出的**那些：类 `tAt`、持有者 `mbr`。
// 导出名不归这里管（那是 .analysis/rename/ 的活）。
//
// 用法：
//   node dossier.mjs --pilot         小文件批次（<=3KB 且只有 1 组）
//   node dossier.mjs --file=<路径>   单个文件（可多次）
//   node dossier.mjs --all           全部（139 个文件）
// 产出 $WORK/dossier/<slug>.md，每个文件一份。
import { readFileSync, writeFileSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ROOT, shortPath } from "../rename/paths.mjs";
import { analyze, moduleBindingRefs } from "../rename/lib.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const WORK = process.env.LS_WORK || join(HERE, ".work");
const OUT = join(WORK, "dossier");
mkdirSync(OUT, { recursive: true });

const { groups } = JSON.parse(readFileSync(join(WORK, "classify.json"), "utf8"));

const byFile = new Map();
for (const g of groups) {
  if (!byFile.has(g.file)) byFile.set(g.file, []);
  byFile.get(g.file).push(g);
}

// ---- 选出这批要处理的文件 ----
const args = process.argv.slice(2);
const filesArg = args.filter((a) => a.startsWith("--file=")).map((a) => a.slice(7));
let targets;
if (filesArg.length) {
  targets = [...byFile.keys()].filter((f) => filesArg.some((x) => f.includes(x)));
} else if (args.includes("--all")) {
  targets = [...byFile.keys()];
} else {
  // pilot：小文件、单组 —— 证据最干净，名字大多能从文件名/持有者/访问器推出来
  targets = [...byFile.entries()]
    .filter(([f, gs]) => gs.length === 1 && statSync(join(ROOT, f)).size <= 3072)
    .map(([f]) => f);
}

/** 该文件的导出名集合 */
function exportedNames(ast) {
  const out = new Set();
  for (const n of ast.body) {
    if (n.type === "ExportNamedDeclaration") {
      if (n.declaration) {
        const d = n.declaration;
        for (const decl of d.declarations ?? []) if (decl.id.type === "Identifier") out.add(decl.id.name);
        if (d.id) out.add(d.id.name);
      }
      for (const s of n.specifiers ?? []) out.add(s.local.name);
    }
  }
  return out;
}

/** 某个模块级绑定是不是「本文件内非导出」——只有这种才归本流程管 */
function isFileLocal(name, exports, moduleNames) {
  return moduleNames.has(name) && !exports.has(name);
}

const IDENT_BODY = /^new ([A-Za-z_$][\w$]*)\(\s*\)$/;

const summary = [];
for (const rel of targets) {
  const abs = join(ROOT, rel);
  const src = readFileSync(abs, "utf8");
  const lines = src.split("\n");
  let ast, sm, moduleScope;
  try {
    ({ ast, sm, moduleScope } = analyze(src));
  } catch (e) {
    summary.push({ file: rel, error: String(e.message).slice(0, 120) });
    continue;
  }
  const exports = exportedNames(ast);
  const moduleNames = new Set(moduleScope.set.keys());

  const ctx = (line, before = 2, after = 6) => {
    const a = Math.max(1, line - before);
    const b = Math.min(lines.length, line + after);
    return lines.slice(a - 1, b).map((t, i) => `${String(a + i).padStart(6)}| ${t}`).join("\n");
  };
  const refsOf = (name) => {
    const refs = moduleBindingRefs(moduleScope, name, sm) ?? [];
    const byLine = new Map();
    for (const r of refs) {
      const ln = src.slice(0, r.range[0]).split("\n").length;
      byLine.set(ln, (byLine.get(ln) ?? 0) + 1);
    }
    return [...byLine.keys()].sort((a, b) => a - b);
  };

  // 每个命中：找到持有者变量名（`var H = new j(() => new X())`）
  const items = [];
  for (const g of byFile.get(rel) ?? []) {
    const classRefs = refsOf(g.inner);
    const declLine = classRefs[0];
    // 持有者：该行文本形如 `var H = <ctor>(() => new X());`
    const holderLine = g.lines[0];
    const text = lines[holderLine - 1] ?? "";
    const hm = /(?:var|let|const)\s+([A-Za-z_$][\w$]*)\s*=/.exec(text);
    const holder = hm ? hm[1] : null;
    // 找访问器：紧随其后、返回该持有者的具名函数
    const accessors = [];
    if (holder) {
      for (let i = holderLine; i < Math.min(lines.length, holderLine + 12); i++) {
        const m = /^function ([A-Za-z_$][\w$]*)\s*\(/.exec(lines[i]);
        if (m && new RegExp(`\\b${holder}\\b`).test(lines.slice(i, i + 4).join("\n"))) accessors.push(m[1]);
      }
    }
    items.push({
      class: g.inner,
      classLocal: isFileLocal(g.inner, exports, moduleNames),
      holder,
      holderLocal: holder ? isFileLocal(holder, exports, moduleNames) : null,
      ctor: g.ctor,
      count: g.count,
      classRefs,
      holderRefs: holder ? refsOf(holder) : [],
      accessors,
      declLine,
      holderLine,
    });
  }

  const eligible = items.filter((it) => it.classLocal);
  if (!eligible.length) continue;

  // 大文件要切片：execution-core.js 有 69 组 / 120KB，一份塞不进一个 agent。
  const maxGroups = Number(args.find((a) => a.startsWith("--max-groups="))?.slice(13)) || 0;
  const slices = maxGroups > 0
    ? Array.from({ length: Math.ceil(eligible.length / maxGroups) }, (_, i) => eligible.slice(i * maxGroups, (i + 1) * maxGroups))
    : [eligible];

  // ---- 生成 markdown ----
  const emit = (group, partIdx) => {
  const out = [];
  out.push(`# ${rel}`);
  out.push("");
  if (slices.length > 1) out.push(`> **本文件共 ${eligible.length} 组，这是第 ${partIdx + 1}/${slices.length} 片（${group.length} 组）。** 同文件其它片由别的 agent 处理，你只判这一片。`);
  out.push(`文件 ${(src.length / 1024).toFixed(0)}KB / ${lines.length} 行。`);
  const readableExports = [...exports].filter((n) => /^[a-z][A-Za-z0-9]{4,}$|^[A-Z][A-Za-z0-9]{3,}$/.test(n));
  out.push(`本文件已可读的导出名（供风格参考）：${readableExports.join(", ") || "（无）"}`);
  out.push(`仍混淆的导出名：${[...exports].filter((n) => !readableExports.includes(n)).join(", ") || "（无）"}`);
  out.push("");
  out.push(`## 目标：${group.length} 个（本文件内非导出的模块级绑定，改名不跨文件）`);
  out.push("");

  for (const it of group) {
    out.push(`### 类 \`${it.class}\``);
    out.push(`- 构造点 ${it.count} 处，首次声明在第 ${it.declLine} 行`);
    out.push(`- 持有者变量：${it.holder ? `\`${it.holder}\`（${it.holderLocal ? "本文件内非导出，也需改名" : "已可读/已导出，不改"}）` : "（找不到，可能是表达式内联）"}`);
    out.push(`- 紧随其后的访问器：${it.accessors.length ? it.accessors.map((a) => `\`${a}\``).join(", ") : "（无）"}`);
    out.push("");
    out.push("类声明：");
    out.push("```js");
    // 取类声明的完整文本
    const cls = [];
    for (const n of ast.body) {
      const d = n.type === "ExportNamedDeclaration" ? n.declaration : n;
      if (d && (d.type === "ClassDeclaration" || d.type === "FunctionDeclaration") && d.id?.name === it.class) {
        out.push(src.slice(d.range[0], Math.min(d.range[1], d.range[0] + 3000)));
        break;
      }
      if (n.type === "VariableDeclaration") {
        for (const decl of n.declarations) {
          if (decl.id.type === "Identifier" && decl.id.name === it.class) {
            out.push(src.slice(decl.range[0], Math.min(decl.range[1], decl.range[0] + 3000)));
          }
        }
      }
    }
    if (!cls.length && !out[out.length - 1].startsWith("class")) {
      out.push(ctx(it.declLine));
    }
    out.push("```");
    out.push("");
    out.push("构造点与访问器：");
    out.push("```js");
    out.push(ctx(it.holderLine, 3, 8));
    out.push("```");
    out.push("");
    const fmtRefs = (xs) => {
      const head = xs.slice(0, 40).join(", ");
      return xs.length > 40 ? `${head} …（共 ${xs.length} 行）` : head;
    };
    out.push(`该类的全部引用行：${fmtRefs(it.classRefs)}`);
    if (it.holder && it.holderRefs.length) out.push(`持有者的全部引用行：${fmtRefs(it.holderRefs)}`);
    out.push("");
  }

    return out.join("\n");
  };

  const slug = rel.replace(/[/.]/g, "_");
  slices.forEach((group, i) => {
    const name = slices.length > 1 ? `${slug}.part${i + 1}.md` : `${slug}.md`;
    writeFileSync(join(OUT, name), emit(group, i));
    summary.push({ file: rel, groups: group.length, bytes: readFileSync(join(OUT, name)).length, out: name });
  });
}

console.log(`生成 ${summary.filter((s) => !s.error).length} 份证据包 -> ${OUT}`);
for (const s of summary.filter((s) => !s.error).slice(0, 40)) console.log(`  ${String(s.groups).padStart(2)} 组  ${(s.bytes / 1024).toFixed(0).padStart(4)}KB  ${s.file}`);
console.log(`总计 ${summary.filter((s) => !s.error).reduce((n, s) => n + s.groups, 0)} 组`);
if (summary.some((s) => s.error)) console.log("出错：", summary.filter((s) => s.error));
