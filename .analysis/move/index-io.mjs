// `_index/` 两个数据文件的读写。
//
// file-map.json 是 Python dumper 写的（含 `1.0` / `15.0` 这种字面量），**绝不能**用
// `JSON.stringify` 整体重写 —— 那会把 `1.0` 写成 `1`，产生 ~170 行假差异。所以：
//   · 读：JSON.parse 照常
//   · 写：只按文本替换我们要动的那几行（见 patchFileMap）
// modules.md 是纯派生产物（内容完全由 file-map 决定），整篇重新生成。

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "./lib.mjs";

const fmPath = () => join(ROOT, "_index/file-map.json");
const mmPath = () => join(ROOT, "_index/modules.md");

export function readFileMap() {
  return JSON.parse(readFileSync(fmPath(), "utf8"));
}

/** 磁盘上 file-map.json 的原文（给「键序保留」用）。 */
export function readFileMapText() {
  return readFileSync(fmPath(), "utf8");
}

/**
 * 就地把索引里某条目的 path / module / tier 改掉。
 * 只碰这几行 —— 其余字节原样保留，键的顺序也原样保留。
 *
 * **键不动**：键是稳定的 chunk id（`chunk-0a82g62e.js` 指向的路径早就是
 * `permissions-ui.0a82g62e.js` 了，键仍保留原有的 id），这是 README 说的
 * 「交叉参照原始分析」的锚点。只有那批改名时把 hash 也去掉了的文件，
 * 键才恰好等于文件名 —— 那是历史遗留，不跟着变。
 */
export function patchEntry(text, key, { path, module: mod, tier, confidence }) {
  const keyLine = `"${key}": {`;
  const at = text.indexOf(keyLine);
  if (at < 0) return { text, ok: false, why: "键不存在" };

  // 这条目的范围：从键行到下一个 ` },` 或结尾
  const end = text.indexOf("\n },", at);
  const stop = end < 0 ? text.length : end + 4;
  let block = text.slice(at, stop);

  const sub = (re, next, label) => {
    if (!re.test(block)) return `${label} 未匹配`;
    block = block.replace(re, next);
    return null;
  };
  const miss = [];
  if (path) { const m = sub(/^[ \t]*"path": "[^"]*",$/m, `  "path": "${path}",`, "path"); if (m) miss.push(m); }
  if (mod) { const m = sub(/^[ \t]*"module": "[^"]*",$/m, `  "module": "${mod}",`, "module"); if (m) miss.push(m); }
  if (tier !== undefined) { const m = sub(/^[ \t]*"tier": \d+,$/m, `  "tier": ${tier},`, "tier"); if (m) miss.push(m); }
  if (confidence) { const m = sub(/^[ \t]*"confidence": "[^"]*"$/m, `  "confidence": "${confidence}"`, "confidence"); if (m) miss.push(m); }

  return { text: text.slice(0, at) + block + text.slice(stop), ok: miss.length === 0, why: miss.join("；") };
}

/** 路径 → 键。索引的键不是文件名，所以要反查。 */
export function keyOfPath(fileMap, relPath) {
  for (const [k, v] of Object.entries(fileMap)) if (v.path === relPath) return k;
  return null;
}

/**
 * 模块 → 文件清单，两个索引共用。
 *
 * 次序**沿用旧 modules.md**：模块之间保持旧次序，模块内部按 kb 降序、并列时保持旧次序。
 * 为什么不去复刻原生成器的排序：实测它既不是按模块总量（0.77 MB 的「共享小工具」排在
 * 0.90 MB 的「Headless」之前），也不是按最大文件，键已不可考。沿旧序的好处是
 * 重生成**幂等**，且 diff 只反映真实的搬家，不会夹带全表重排。
 * 新出现的模块/文件排在末尾，按 kb 降序、路径升序。
 */
export function groupByModule(fileMap, prev = { moduleOrder: new Map(), fileOrder: new Map() }) {
  const mods = new Map();
  for (const [key, v] of Object.entries(fileMap)) {
    if (!mods.has(v.module)) mods.set(v.module, { top: v.path.split("/")[0], files: [] });
    mods.get(v.module).files.push({ key, ...v });
  }
  const fo = (p) => (prev.fileOrder.has(p) ? prev.fileOrder.get(p) : Number.MAX_SAFE_INTEGER);
  for (const m of mods.values()) {
    m.files.sort((a, b) => b.kb - a.kb || fo(a.path) - fo(b.path) || a.path.localeCompare(b.path));
    m.total = m.files.reduce((n, f) => n + f.kb, 0);
    // 一个模块的文件跨了顶层分区时，取文件数最多的那个分区
    const byTop = new Map();
    for (const f of m.files) byTop.set(f.path.split("/")[0], (byTop.get(f.path.split("/")[0]) ?? 0) + 1);
    m.top = [...byTop].sort((a, b) => b[1] - a[1])[0][0];
  }
  return mods;
}

/** 从旧 modules.md 里读出模块次序、文件次序，以及每个模块的总量。 */
export function readPrev(text) {
  const moduleOrder = new Map();
  const fileOrder = new Map();
  const totals = new Map();
  const members = new Map();
  const subs = new Map();
  let mi = 0, fi = 0, cur = null;
  for (const line of text.split("\n")) {
    const h = line.match(/^## (.+?)  <sub>(.*)<\/sub>$/);
    if (h) {
      cur = h[1];
      if (!moduleOrder.has(cur)) moduleOrder.set(cur, mi++);
      // 整段 <sub> 原样留住（分区、文件数、总量三者都可能与当前数据重算结果不同）
      subs.set(cur, h[2]);
      const t = h[2].match(/· (\d+) 个文件 · ([\d.]+) MB$/);
      if (t) totals.set(cur, Number(t[2]));
      members.set(cur, []);
      continue;
    }
    const b = line.match(/^- \[`([^`]+)`\]/);
    if (b) {
      if (!fileOrder.has(b[1])) fileOrder.set(b[1], fi++);
      if (cur) members.get(cur).push(b[1]);
    }
  }
  return { moduleOrder, fileOrder, totals, members, subs };
}

export function renderModulesMd(fileMap, prev) {
  const p = prev ?? readPrev(readFileSync(mmPath(), "utf8"));
  const mods = [...groupByModule(fileMap, p).entries()];
  const mo = (n) => (p.moduleOrder.has(n) ? p.moduleOrder.get(n) : Number.MAX_SAFE_INTEGER);
  mods.sort((a, b) => mo(a[0]) - mo(b[0]) || b[1].total - a[1].total || a[0].localeCompare(b[0]));
  // 空行只出现在节之间：标题 → 空行 → `## 节` → 空行 → 条目（条目之间单换行）
  let out = "# 模块文件索引\n";
  for (const [name, m] of mods) {
    const bullets = m.files.map((f) => `- [\`${f.path}\`](../${f.path}) — ${f.kb.toFixed(1)} KB`);
    // 总量：文件集合与旧表相同就沿用旧值。旧值是用**未取整**的原始大小加出来的，
    // 而 file-map 只存了取整到 0.1 的 kb，重算会差个 0.01 MB（如「设置/配置」27 个文件
    // 旧值 0.78、按取整值重算 0.77）。沿用旧值才能让「无搬运时重生成零 diff」成立。
    const old = p.members?.get(name);
    const sameSet =
      old && old.length === m.files.length && new Set(old).size === old.length &&
      old.every((x) => m.files.some((f) => f.path === x));
    // 文件集合没变就整行沿用旧头：里面的分区与总量都是原始分组数据（未取整的总量、
    // 以及「文件放在哪」与「模块归哪个分区」不一致时的历史值，如「文本编辑 / AST」
    // 的文件在 00-第三方库 下、头里写的是 02-功能模块）。这些都无法从当前数据重建。
    const sub = sameSet && p.subs?.has(name)
      ? p.subs.get(name)
      : `${m.top} · ${m.files.length} 个文件 · ${(m.total / 1024).toFixed(2)} MB`;
    out += `\n## ${name}  <sub>${sub}</sub>\n\n`;
    out += bullets.join("\n") + "\n";
  }
  return out;
}

export function writeModulesMd(fileMap) {
  writeFileSync(mmPath(), renderModulesMd(fileMap));
}

/** 自检：用当前 file-map 重新生成的 modules.md 必须与磁盘上的逐字节相同。 */
export function checkModulesMdRoundTrips() {
  const now = readFileSync(mmPath(), "utf8");
  const gen = renderModulesMd(readFileMap(), readPrev(now));
  if (now === gen) return null;
  const i = [...now].findIndex((c, j) => c !== gen[j]);
  return { at: i, disk: now.slice(Math.max(0, i - 80), i + 80), gen: gen.slice(Math.max(0, i - 80), i + 80) };
}
