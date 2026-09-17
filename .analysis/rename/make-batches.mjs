// Group candidate modules into batches and write one dossier file per batch.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { WORK } from "./paths.mjs";
import { join } from "node:path";
import { buildIndex } from "./index.mjs";
import { dossier } from "./dossier.mjs";

const minBytes = Number(process.env.MIN_BYTES || 0);
const maxBytes = Number(process.env.MAX_BYTES || 8192);
const perBatch = Number(process.env.PER_BATCH || 14);
const onlyAllMangled = process.env.MIXED !== "1";
const outDir = process.env.OUT_DIR || join(WORK, "batches");

const cands = JSON.parse(readFileSync(join(WORK, "candidates.json"), "utf8"));
let pool = cands.filter((c) => c.bytes <= maxBytes && c.bytes >= minBytes && c.isTwinRep);
if (onlyAllMangled) pool = pool.filter((c) => c.allMangled);
// prefer modules that are actually imported, smallest first
pool.sort((a, b) => a.bytes - b.bytes);

mkdirSync(outDir, { recursive: true });
const idx = buildIndex();

// Pack by dossier CONTENT budget, not module count: a 3KB module with 300 importers
// produces a far bigger dossier than a 16KB module with two.
const budget = Number(process.env.BATCH_BUDGET || 110_000);
const batches = [];
let cur = [], curBytes = 0;
for (const c of pool) {
  const body = dossier(c.path, idx);
  if (cur.length && (curBytes + body.length > budget || cur.length >= perBatch)) {
    batches.push({ items: cur, body: cur.map((x) => x.body).join("\n\n---\n\n") });
    cur = []; curBytes = 0;
  }
  cur.push({ path: c.path, body });
  curBytes += body.length;
}
if (cur.length) batches.push({ items: cur, body: cur.map((x) => x.body).join("\n\n---\n\n") });

let n = 0;
for (const b of batches) {
  n++;
  const id = String(n).padStart(2, "0");
  writeFileSync(join(outDir, `batch-${id}.json`), JSON.stringify(b.items.map((x) => x.path), null, 1));
  writeFileSync(join(outDir, `batch-${id}.md`), b.body);
}
console.log(`range=${minBytes}-${maxBytes}B `);
console.log(`pool=${pool.length} batches=${n} (maxBytes=${maxBytes}, perBatch=${perBatch}, allMangled=${onlyAllMangled})`);
