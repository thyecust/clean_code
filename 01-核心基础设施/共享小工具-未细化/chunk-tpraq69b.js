// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ln } from "./chunk-w76kejwn.js";
import { _n } from "../../02-功能模块/Teammates团队/chunk-qe04h4c5.js";
import { R } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { M } from "./chunk-h62vxw7j.js";
import { ou, We } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { rr } from "../../02-功能模块/后台任务-Shell管理/chunk-7wsy8vxb.js";
var a = new Set([
  "starting",
  "running",
  "resuming",
  "adopted",
  "crashed",
  "working",
  "blocked",
  "done",
  "stopped",
  "failed",
  "busy",
  "shell",
  "idle",
  "waiting",
]);
function fI(e) {
  if (e === void 0) return;
  return Ln(a.has(e) ? e : "other");
}
var d = new Set(["cold", "spare", "adopted"]);
function Ize(e) {
  return typeof e === "string" && d.has(e) ? e : void 0;
}
import { mkdir as o } from "fs/promises";
import { join as c } from "path";
async function sft(e, r) {
  if (M() && r !== void 0 && _n(e)) {
    await i(r, { namespace: "job", jobId: e });
    return;
  }
  await o(rr(e), { recursive: !0 });
}
async function eue(e, r) {
  if (M() && r !== void 0 && _n(e)) {
    await i(r, s(e));
    return;
  }
  await o(c(rr(e), "tmp"), { recursive: !0 });
}
function s(e) {
  return { namespace: "job", jobId: e, relPath: ["tmp"] };
}
async function i(e, r) {
  let t = await e.ensureScope(r);
  if (!t.ok) {
    let n = ou(t.error);
    throw Object.assign(
      new R(`job folder not made (${We(t.error)})`, "job folder not made"),
      n !== void 0 ? { code: n } : {},
    );
  }
}
export { fI, Ize, sft, eue };
