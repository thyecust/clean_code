// 同文件命名风格一致性检查。
//
// 大文件切片后由多个 agent 命名，容易出现「一个文件两种惯例」。判定依据不是全局规则，
// 是**本文件已有的可读持有者**：它们是同一个人在同一个文件里起的名，是唯一可信的锚。
//
// 对每个模块：
//   1 找出所有「已可读」的 `var H = new j(...)/new Gt(...)` 持有者，记为文件惯例
//   2 找出本轮计划里改的持有者（小写开头的新名），看它们用不用后缀
//   3 两者不一致就报出来
//
// 用法：node check-holder-style.mjs <plans.json>
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ROOT } from "../rename/paths.mjs";
import { analyze } from "../rename/lib.mjs";
import { isClearlyReadable } from "../rename/mangle.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const plans = JSON.parse(readFileSync(process.argv[2], "utf8"));

/** 该文件里已可读的惰性单例持有者 -> 取用形态 */
function existingHolders(src) {
  const { ast } = analyze(src);
  const out = [];
  const lines = src.split("\n");
  for (const n of ast.body) {
    if (n.type !== "VariableDeclaration") continue;
    for (const d of n.declarations) {
      if (d.id.type !== "Identifier" || !d.init) continue;
      if (d.init.type !== "NewExpression" || d.init.callee.type !== "Identifier") continue;
      const name = d.id.name;
      // 只关心惰性单例持有者：初始化的实参是个 thunk
      if (!d.init.arguments.some((a) => a.type === "ArrowFunctionExpression")) continue;
      const line = src.slice(0, d.range[0]).split("\n").length;
      // 取用形态：文件里 `name.of(...)` 还是 `bi(name)`
      let form = "未取用";
      const q = name.replace(/\$/g, "\\$");
      for (const t of lines) {
        if (new RegExp(`\\bbi\\(${q}\\)`).test(t)) { form = "bi()"; break; }
        const m = new RegExp(`${q}\\.of\\(([^;]*)`).exec(t);
        if (m) { form = "of(" + m[1].replace(/\)+\s*[;.].*$/, "").trim() + ")"; break; }
      }
      const suffix = /ByHost$/.test(name) ? "ByHost" : /BySession$/.test(name) ? "BySession" : "";
      out.push({ name, line, form, suffix, readable: isClearlyReadable(name) });
    }
  }
  return out;
}

let flagged = 0;
for (const p of plans) {
  const src = readFileSync(join(ROOT, p.module), "utf8");
  const ex = existingHolders(src);
  const readablePrecedent = ex.filter((h) => h.readable);
  const newHolders = Object.entries(p.renames)
    .filter(([, n]) => /^[a-z]/.test(n))
    .map(([o, n]) => ({ old: o, new: n, suffix: /ByHost$/.test(n) ? "ByHost" : /BySession$/.test(n) ? "BySession" : "" }));

  if (!newHolders.length) continue;

  const precSuffix = new Set(readablePrecedent.map((h) => h.suffix));
  const newSuffix = new Set(newHolders.map((h) => h.suffix));

  // 文件里一个可读先例都没有 -> 没有锚，不判
  if (!readablePrecedent.length) continue;

  const precDesc = [...precSuffix].map((s) => s || "(无后缀)").join("/");
  const newDesc = [...newSuffix].map((s) => s || "(无后缀)").join("/");
  const mismatch = newSuffix.size > 1 || ![...newSuffix].every((s) => precSuffix.has(s));

  if (mismatch) {
    flagged++;
    console.log(`\n⚠ ${p.module}`);
    console.log(`   本文件已有可读持有者 ${readablePrecedent.length} 个，后缀惯例：${precDesc}`);
    for (const h of readablePrecedent.slice(0, 5)) console.log(`      ${h.name}  ${h.form}  ${h.suffix ? "[" + h.suffix + "]" : ""}`);
    console.log(`   本轮新起 ${newHolders.length} 个，后缀：${newDesc}`);
    const bad = newHolders.filter((h) => !precSuffix.has(h.suffix));
    console.log(`   与文件惯例不符的 ${bad.length} 个：`);
    for (const h of bad.slice(0, 25)) console.log(`      ${h.old} -> ${h.new}`);
    if (bad.length > 25) console.log(`      …另有 ${bad.length - 25} 个`);
  }
}
console.log(flagged ? `\n共 ${flagged} 个模块存在同文件风格不一致` : "\n所有模块的持有者风格与本文件已有惯例一致");
