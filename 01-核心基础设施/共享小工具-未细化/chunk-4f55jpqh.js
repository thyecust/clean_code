// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Fp } from "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import { ie } from "../ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { E0 } from "../设置-配置/设置-配置.aqbb35ee.js";
function rM(r) {
  console.error(ie.red(r));
}
function un(r, e = "cli_error") {
  if (r) rM(r);
  (Fp(e), process.exit(1));
  return;
}
function Yw(r) {
  if (r)
    process.stdout.write(
      r +
        `
`,
    );
  process.exit(0);
  return;
}
async function Kb(r) {
  await new Promise((e) => {
    process.stdout.write(r, () => e());
  });
}
function Ey(r) {
  process.stderr.write(
    ie.yellow(E0(r)) +
      `
`,
  );
}
async function xle() {
  try {
    let { flushAnalyticsSinks: r } = await import("../../02-功能模块/认证-OAuth登录/registerPreFlushTask.748m7jpz.js");
    await r();
  } catch {}
}
async function ys(r) {
  (await xle(), process.exit(r));
  return;
}
async function di(r) {
  return (await xle(), un(r));
}
async function dO(r) {
  if (r)
    process.stdout.write(
      r +
        `
`,
    );
  return (await xle(), Yw());
}
export { rM, un, Yw, Kb, Ey, xle, ys, di, dO };
