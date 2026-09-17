// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, bi } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "../核心工具-并发与缓存/async-timeout-utils.js";
async function flushAnalyticsSinks() {
  try {
    let s = t();
    if (s.length > 0)
      (await Promise.race([Promise.allSettled(s), sleep(200)]), (s.length = 0));
    let [{ shutdownDatadog: n }, { shutdownErrorTracking: i }] =
        await Promise.all([
          import("./DATADOG_CLIENT_TOKEN.kkspbfqc.js"),
          import("../../02-功能模块/反馈-错误上报/chunk-6kad94y1.js"),
        ]),
      l = [n(), i()];
    (await Promise.race([Promise.all(l), sleep(500)]), await a);
  } catch {}
}
class o {
  tasks = [];
}
var c = new j(() => new o());
function t() {
  return bi(c).tasks;
}
function registerPreFlushTask(s) {
  t().push(s.catch(() => {}));
}
export { flushAnalyticsSinks, registerPreFlushTask };
