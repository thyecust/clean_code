// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { setBgExitCause as Fp } from "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import { ie } from "../ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { E0 } from "../设置-配置/设置-配置.aqbb35ee.js";
function printCliError(r) {
  console.error(ie.red(r));
}
function cliError(r, e = "cli_error") {
  if (r) printCliError(r);
  (Fp(e), process.exit(1));
  return;
}
function cliOk(r) {
  if (r)
    process.stdout.write(
      r +
        `
`,
    );
  process.exit(0);
  return;
}
async function writeStdoutAndDrain(r) {
  await new Promise((e) => {
    process.stdout.write(r, () => e());
  });
}
function cliWarn(r) {
  process.stderr.write(
    ie.yellow(E0(r)) +
      `
`,
  );
}
async function flushAnalyticsBeforeExit() {
  try {
    let { flushAnalyticsSinks: r } = await import("./chunk-p7jm635c.js");
    await r();
  } catch {}
}
async function exitAfterAnalyticsFlush(r) {
  (await flushAnalyticsBeforeExit(), process.exit(r));
  return;
}
async function cliErrorAfterAnalyticsFlush(r) {
  return (await flushAnalyticsBeforeExit(), cliError(r));
}
async function cliOkAfterAnalyticsFlush(r) {
  if (r)
    process.stdout.write(
      r +
        `
`,
    );
  return (await flushAnalyticsBeforeExit(), cliOk());
}
export { printCliError, cliError, cliOk, writeStdoutAndDrain, cliWarn, flushAnalyticsBeforeExit, exitAfterAnalyticsFlush, cliErrorAfterAnalyticsFlush, cliOkAfterAnalyticsFlush };
