// 普查：全树找出 `new <Ctor>(() => <body>)` 这种「惰性单例持有者」形状。
//
// 形状长这样：
//   var mbr = new j(() => new tAt());          // 键控惰性单例：.of(key) 按 key 记忆化
//   function getPendingWriteTracker() { return bi(mbr); }
//
// 普查产出（写到 $WORK/census.json）每一个命中：
//   file / line / callee / 持有者变量名 / thunk 体内的自由标识符 / 体内 new 出来的类名
//
// 用法：node census.mjs            （读全树）
//      node census.mjs --stats     （只打统计）
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ROOT, walk, shortPath } from "../rename/paths.mjs";
import { parseFile } from "../rename/lib.mjs";

// 中间产物落在本目录的 .work/ 下，不写进仓库正文
const HERE = dirname(fileURLToPath(import.meta.url));
export const WORK = process.env.LS_WORK || join(HERE, ".work");
mkdirSync(WORK, { recursive: true });

/** 通用 AST 遍历（只看需要的字段，避免引 estraverse） */
function walkAst(node, visit) {
  if (!node || typeof node.type !== "string") return;
  visit(node);
  for (const k of Object.keys(node)) {
    if (k === "type" || k === "range" || k === "start" || k === "end") continue;
    const v = node[k];
    if (Array.isArray(v)) { for (const c of v) if (c && typeof c.type === "string") walkAst(c, visit); }
    else if (v && typeof v.type === "string") walkAst(v, visit);
  }
}

/** 收集一棵子树里出现的所有 Identifier 名（叶子引用，不区分声明/引用） */
function namesIn(node) {
  const out = new Set();
  walkAst(node, (n) => { if (n.type === "Identifier") out.add(n.name); });
  return out;
}

/** thunk 体：() => X  或  () => { … }  —— 取「体」的表达文本范围 */
function thunkBody(fn) {
  return fn.body;
}

const files = walk(ROOT);
const hits = [];
const parseErrors = [];

for (const f of files) {
  let src;
  try {
    src = (await import("node:fs")).readFileSync(f, "utf8");
    var ast = parseFile(src);
  } catch (e) {
    parseErrors.push({ file: shortPath(f), error: String(e.message).slice(0, 120) });
    continue;
  }
  const lineOf = (off) => src.slice(0, off).split("\n").length;

  walkAst(ast, (n) => {
    if (n.type !== "NewExpression") return;
    if (n.arguments.length !== 1) return;
    const a = n.arguments[0];
    if (!a || a.type !== "ArrowFunctionExpression") return;
    const callee = n.callee.type === "Identifier" ? n.callee.name : null;
    const body = thunkBody(a);
    // 体内 `new X(...)` 的 X
    const innerNews = [];
    walkAst(body, (m) => {
      if (m.type === "NewExpression" && m.callee.type === "Identifier") innerNews.push(m.callee.name);
    });
    hits.push({
      file: shortPath(f),
      line: lineOf(n.range[0]),
      callee,
      params: a.params.length,
      bodyKind: body.type,
      bodyText: src.slice(body.range[0], body.range[1]).replace(/\s+/g, " ").slice(0, 160),
      innerNews: [...new Set(innerNews)],
      refs: [...namesIn(body)].filter((x) => x !== callee),
    });
  });
}

// 统计
const byCallee = new Map();
for (const h of hits) byCallee.set(h.callee, (byCallee.get(h.callee) ?? 0) + 1);
const byInner = new Map();
for (const h of hits) for (const x of h.innerNews) byInner.set(x, (byInner.get(x) ?? 0) + 1);

const report = {
  generatedAt: new Date().toISOString(),
  fileCount: files.length,
  hitCount: hits.length,
  byCallee: [...byCallee].sort((a, b) => b[1] - a[1]),
  byInner: [...byInner].sort((a, b) => b[1] - a[1]),
  parseErrors,
  hits,
};

writeFileSync(join(WORK, "census.json"), JSON.stringify(report, null, 2));

const stats = process.argv.includes("--stats");
console.log(`文件 ${files.length}，命中 ${hits.length}，解析失败 ${parseErrors.length}`);
console.log("\n按构造器：");
for (const [k, v] of report.byCallee.slice(0, 15)) console.log(`  ${String(v).padStart(4)}  new ${k}(`);
console.log("\n按 thunk 体内 new 出来的类（前 30）：");
for (const [k, v] of report.byInner.slice(0, 30)) console.log(`  ${String(v).padStart(4)}  ${k}`);
console.log(`\n不同的体内类名共 ${report.byInner.length} 个`);
if (parseErrors.length) console.log("解析失败：", parseErrors.slice(0, 10));
if (!stats) console.log(`\n完整结果 -> ${join(WORK, "census.json")}`);
