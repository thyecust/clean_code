// 判断 namespaceWarnings 报出的位置是「无关属性」还是「引擎可能漏改的命名空间取值」。
//
//   node check-namespace-warnings.mjs <plans-dir>
//
// 背景：engine.mjs 能重写四种静态 import 看不见的取属性形态（见 README）——
//   `(await import(m)).x` / `let {x:y} = await import(m)` / 命名空间绑定 `import * as ns` /
//   `import.meta.require(m).x`。namespaceWarnings 只在**文本上**看到 `.名字` 就报警，
//   因此绝大多数是无关属性（`v.from === v.to`、散文里的句号空格）。
//
// 这个脚本把噪声和真风险分开：对每条告警，看那个引用方文件里是否存在
// **指向被改模块的**动态/命名空间形态。有 -> 引擎本该重写，值得人工看一眼；
// 没有 -> 该名字在此文件里是别的对象的属性，告警可忽略。
import { readFileSync, readdirSync } from "node:fs";
import { join, normalize, dirname } from "node:path";
import { ROOT, shortPath } from "./paths.mjs";
import { buildIndex } from "./index.mjs";
import { namespaceWarnings } from "./engine.mjs";
import { loadTree } from "./paths.mjs";

const plansDir = process.argv[2];
if (!plansDir) { console.error("用法: node check-namespace-warnings.mjs <plans-dir>"); process.exit(2); }

const plans = readdirSync(plansDir)
  .filter((f) => f.endsWith(".json"))
  .flatMap((f) => JSON.parse(readFileSync(join(plansDir, f), "utf8")));

const tree = loadTree();
const idx = buildIndex();

// 指向某模块的动态/命名空间形态
function dynamicFormsReaching(src, moduleAbs) {
  const out = [];
  // 相对说明符要能解析到目标模块
  const reach = (spec) => {
    if (!spec || !spec.startsWith(".")) return false;
    return normalize(join(dirname(moduleAbs), spec)) === moduleAbs;
  };
  for (const m of src.matchAll(/import\s*\(\s*["']([^"']+)["']\s*\)/g)) if (reach(m[1])) out.push("dynamic import()");
  for (const m of src.matchAll(/import\.meta\.require\(\s*["']([^"']+)["']\s*\)/g)) if (reach(m[1])) out.push("import.meta.require");
  for (const m of src.matchAll(/import\s*\*\s*as\s+[A-Za-z_$][\w$]*\s+from\s*["']([^"']+)["']/g)) if (reach(m[1])) out.push("namespace import");
  for (const m of src.matchAll(/export\s*\*\s*from\s*["']([^"']+)["']/g)) if (reach(m[1])) out.push("export * from");
  return [...new Set(out)];
}

let real = 0, noise = 0;
const interesting = [];
for (const plan of plans) {
  const moduleAbs = normalize(join(ROOT, plan.module));
  for (const w of namespaceWarnings(plan, tree, idx)) {
    const m = w.match(/^\[(.+):(\d+)\] property access \.(\S+)/);
    if (!m) continue;
    const fileRel = m[1], line = Number(m[2]), name = m[3];
    const fileAbs = normalize(join(ROOT, fileRel));
    const src = tree.src.get(fileAbs) ?? readFileSync(fileAbs, "utf8");
    const forms = dynamicFormsReaching(src, moduleAbs);
    if (forms.length) {
      real++; interesting.push(`${fileRel}:${line}  .${name}  <- ${plan.module}  [${forms.join(", ")}]`);
    } else noise++;
  }
}
console.log(`告警 ${real + noise} 条：`);
console.log(`  该文件有指向被改模块的动态/命名空间形态（值得人工看）: ${real}`);
console.log(`  纯静态具名导入（引擎按作用域改名，其余同名都是无关属性）: ${noise}`);
if (interesting.length) {
  console.log("\n值得看的：");
  for (const s of interesting) console.log("  " + s);
}
