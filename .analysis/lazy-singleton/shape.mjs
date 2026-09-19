// 把 census.json 里 `new j(…)` / `new Gt(…)` 那一族单独拎出来做形态统计。
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const WORK = process.env.LS_WORK || join(HERE, ".work");
const c = JSON.parse(readFileSync(join(WORK, "census.json"), "utf8"));

const t = c.hits.filter((h) => h.callee === "j" || h.callee === "Gt");
console.log(`j/Gt 命中 ${t.length}（j ${t.filter(h=>h.callee==="j").length}，Gt ${t.filter(h=>h.callee==="Gt").length}）`);

// 1) thunk 体形状（把标识符塌成 N、字符串塌成 S）
const shape = new Map();
for (const h of t) {
  const s = h.bodyText.replace(/"[^"]*"/g, "S").replace(/[A-Za-z_$][\w$]*/g, "N").replace(/\s+/g, " ");
  shape.set(s, (shape.get(s) ?? 0) + 1);
}
console.log("\n== thunk 体形状 top 20 ==");
[...shape].sort((a, b) => b[1] - a[1]).slice(0, 20).forEach(([k, v]) => console.log(String(v).padStart(4), k.slice(0, 120)));

// 2) 体内 new 出来的类
const bi = new Map();
for (const h of t) for (const x of h.innerNews) bi.set(x, (bi.get(x) ?? 0) + 1);
console.log(`\n== 体内 new 类名 ${bi.size} 个，top 40 ==`);
[...bi].sort((a, b) => b[1] - a[1]).slice(0, 40).forEach(([k, v]) => console.log(String(v).padStart(4), k));

// 3) 文件分布
const bf = new Map();
for (const h of t) bf.set(h.file, (bf.get(h.file) ?? 0) + 1);
console.log(`\n== 文件分布（${bf.size} 个文件）top 20 ==`);
[...bf].sort((a, b) => b[1] - a[1]).slice(0, 20).forEach(([k, v]) => console.log(String(v).padStart(4), k));

// 4) 有多少命中的 thunk 体只有「一个标识符」或「new 一个标识符」
const onlyIdent = t.filter((h) => /^[A-Za-z_$][\w$]*$/.test(h.bodyText.trim()));
const onlyNew = t.filter((h) => /^new [A-Za-z_$][\w$]*\(\s*\)$/.test(h.bodyText.trim()));
console.log(`\n体 = 裸标识符        : ${onlyIdent.length}`);
console.log(`体 = new X()         : ${onlyNew.length}`);
console.log(`体 = 其他            : ${t.length - onlyIdent.length - onlyNew.length}`);
console.log(`有 innerNews 的命中  : ${t.filter((h) => h.innerNews.length).length}`);
console.log(`无 innerNews 的命中  : ${t.filter((h) => !h.innerNews.length).length}`);
