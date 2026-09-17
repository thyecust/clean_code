// Unit tests for the rewriter's import branches and dynamic-property handling.
import { mkdirSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { HERE } from "./paths.mjs";

// 单元测试在系统临时目录里搭一棵假树，不碰仓库
const TREE = join(tmpdir(), "rename-unit-test-tree");
rmSync(TREE, { recursive: true, force: true });
mkdirSync(TREE, { recursive: true });

const cases = {
  "short-collapse": {
    mod:   `function zz(e) { return e * 2; }\nexport { zz };\n`,
    users: { "u.js": `import { zz } from "./mod.js";\nconsole.log(zz(1));\n` },
    want:  { "u.js": `import { DOUBLE_VALUE } from "./double-value.js";\nconsole.log(DOUBLE_VALUE(1));\n` },
  },
  "short-collide": {
    mod:   `function zz(e) { return e * 2; }\nexport { zz };\n`,
    users: { "u.js": `import { zz } from "./mod.js";\nfunction f(){ let DOUBLE_VALUE = 1; return DOUBLE_VALUE; }\nconsole.log(zz(1), f());\n` },
    want:  { "u.js": `import { DOUBLE_VALUE as zz } from "./double-value.js";\nfunction f(){ let DOUBLE_VALUE = 1; return DOUBLE_VALUE; }\nconsole.log(zz(1), f());\n` },
  },
  "alias-collapse": {
    mod:   `function zz(e) { return e * 2; }\nexport { zz };\n`,
    users: { "u.js": `import { zz as q } from "./mod.js";\nconsole.log(q(1), q(2));\n` },
    want:  { "u.js": `import { DOUBLE_VALUE } from "./double-value.js";\nconsole.log(DOUBLE_VALUE(1), DOUBLE_VALUE(2));\n` },
  },
  "alias-keep": {
    mod:   `function zz(e) { return e * 2; }\nexport { zz };\n`,
    users: { "u.js": `import { zz as q } from "./mod.js";\nfunction f(){ let DOUBLE_VALUE = 1; return DOUBLE_VALUE; }\nconsole.log(q(1), f());\n` },
    want:  { "u.js": `import { DOUBLE_VALUE as q } from "./double-value.js";\nfunction f(){ let DOUBLE_VALUE = 1; return DOUBLE_VALUE; }\nconsole.log(q(1), f());\n` },
  },
  "alias-reexport": {
    mod:   `function zz(e) { return e * 2; }\nexport { zz };\n`,
    users: { "u.js": `import { zz as q } from "./mod.js";\nexport { q };\nconsole.log(q(1));\n` },
    want:  { "u.js": `import { DOUBLE_VALUE as q } from "./double-value.js";\nexport { q };\nconsole.log(q(1));\n` },
  },
  "self-referencing-class": {
    // `class zz { static create(){ return new zz() } }` declares `zz` in an inner
    // scope too; the inner reference must be renamed or it becomes a ReferenceError.
    mod:   `class zz { static create() { return new zz(); } }
export { zz };
`,
    users: { "u.js": `import { zz } from "./mod.js";
console.log(zz.create());
` },
    want:  { "u.js": `import { PluginStateStore } from "./double-value.js";
console.log(PluginStateStore.create());
` },
    rename: { zz: "PluginStateStore" },
    modWant: `class PluginStateStore { static create() { return new PluginStateStore(); } }
export { PluginStateStore };
`,
  },
  "destructure-dynamic": {
    mod:   `function zz(e) { return e * 2; }\nexport { zz };\n`,
    users: { "u.js": `let { zz: f } = await import("./mod.js");\nconsole.log(f(1));\n` },
    want:  { "u.js": `let { DOUBLE_VALUE: f } = await import("./double-value.js");\nconsole.log(f(1));\n` },
  },
  "ns-binding": {
    mod:   `function zz(e) { return e * 2; }\nexport { zz };\n`,
    users: { "u.js": `var M = await import("./mod.js");\nconsole.log(M.zz(1));\n` },
    want:  { "u.js": `var M = await import("./double-value.js");\nconsole.log(M.DOUBLE_VALUE(1));\n` },
  },
  "member-on-import": {
    mod:   `function zz(e) { return e * 2; }\nexport { zz };\n`,
    users: { "u.js": `console.log((await import("./mod.js")).zz(1));\n` },
    want:  { "u.js": `console.log((await import("./double-value.js")).DOUBLE_VALUE(1));\n` },
  },
};

let pass = 0, fail = 0;
for (const [name, c] of Object.entries(cases)) {
  const dir = join(TREE, name);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "mod.js"), c.mod);
  for (const [f, body] of Object.entries(c.users)) writeFileSync(join(dir, f), body);

  const { spawnSync } = await import("node:child_process");
  const rn = c.rename ?? { zz: "DOUBLE_VALUE" };
  writeFileSync(join(dir, "plan.json"), JSON.stringify([
    { module: `mod.js`, newFileName: "double-value.js", renames: rn, why: "unit test" },
  ]));
  const r = spawnSync("node", [join(HERE, "unit-apply.mjs"), dir], { encoding: "utf8", env: { ...process.env, TREE_ROOT: dir } });
  if (r.status !== 0) { console.log(`✗ ${name}: apply failed\n${r.stdout}${r.stderr}`); fail++; continue; }
  let ok = true;
  for (const [f, want] of Object.entries(c.want)) {
    const got = readFileSync(join(dir, f), "utf8");
    if (got !== want) { ok = false; console.log(`✗ ${name} / ${f}\n  got : ${JSON.stringify(got)}\n  want: ${JSON.stringify(want)}`); }
  }
  const modGot = readFileSync(join(dir, "double-value.js"), "utf8");
  const modWant = c.modWant ?? `function DOUBLE_VALUE(e) { return e * 2; }\nexport { DOUBLE_VALUE };\n`;
  if (modGot !== modWant) { ok = false; console.log(`✗ ${name} / module:\n  got : ${JSON.stringify(modGot)}\n  want: ${JSON.stringify(modWant)}`); }
  if (ok) { console.log(`✓ ${name}`); pass++; } else fail++;
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
