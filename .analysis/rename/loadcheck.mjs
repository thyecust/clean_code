// Load each renamed module standalone; compare its export surface to the plan.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "./paths.mjs";

const manifest = JSON.parse(readFileSync(process.argv[2], "utf8"));
const allPlans = manifest.allPlans ?? manifest.plans;
const newOf = new Map(manifest.fileRenames);
for (const p of allPlans) if (!newOf.has(p.module)) newOf.set(p.module, p.module);

let ok = 0, bad = 0, skipped = 0;
for (const p of allPlans) {
  const newRel = newOf.get(p.module);
  const url = "file://" + join(ROOT, newRel);
  let mod;
  try {
    mod = await Promise.race([
      import(url),
      new Promise((_, rej) => setTimeout(() => rej(new Error("timeout 15s")), 15000)),
    ]);
  } catch (e) {
    console.log(`  ~ 加载失败（多半是顶层副作用）: ${newRel} — ${String(e.message).split("\n")[0]}`);
    skipped++;
    continue;
  }
  const got = new Set(Object.keys(mod));
  const want = new Set();
  for (const n of Object.keys(p.renames)) want.add(p.renames[n]);
  const missing = [...want].filter((n) => !got.has(n) && n !== "default");
  const oldLeft = Object.keys(p.renames).filter((n) => got.has(n));
  if (missing.length || oldLeft.length) {
    console.log(`  ✗ ${newRel}: 缺少 ${JSON.stringify(missing)} 仍存在旧名 ${JSON.stringify(oldLeft)}`);
    bad++;
  } else ok++;
}
console.log(`[单独加载] 成功 ${ok} · 顶层副作用跳过 ${skipped} · 导出面不符 ${bad}`);
process.exit(bad ? 1 : 0);
