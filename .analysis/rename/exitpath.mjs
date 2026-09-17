import { spawn } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
const tree = process.argv[2] || "/Users/game-netease/clean_code";
for (let i = 0; i < 3; i++) {
  const home = mkdtempSync(join(tmpdir(), "sandbox-home-"));
  const t0 = Date.now();
  const p = spawn("bun", ["cli.js"], {
    cwd: tree,
    env: { PATH: process.env.PATH, HOME: home },
    stdio: ["ignore", "ignore", "pipe"],
  });
  let err = "";
  p.stderr.on("data", (d) => (err += d));
  const code = await new Promise((done) => {
    const timer = setTimeout(() => { p.kill("SIGKILL"); done("TIMEOUT"); }, 60_000);
    p.on("exit", (c) => { clearTimeout(timer); done(c); });
  });
  const ms = Date.now() - t0;
  console.log(`  run ${i + 1}: exit=${code} in ${(ms / 1000).toFixed(2)}s${err.includes("Error") ? "  stderr有错" : ""}`);
}
