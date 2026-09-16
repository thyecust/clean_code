// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "./chunk-h62vxw7j.js";
import "./chunk-510m1t2d.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "./chunk-w76kejwn.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../核心工具-字符串与文本/chunk-1wezmyx2.js";
import "./chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../设置-配置/chunk-zqr5ctyf.js";
import "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import "./chunk-0d0nn4ae.js";
import { lo } from "./chunk-dajvcsw3.js";
import "./chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "./chunk-rsr7cnyv.js";
import "../安全文件系统(FS加固)/chunk-h64ek850.js";
import "./chunk-twnwwsbr.js";
import "../核心工具-路径与平台/chunk-fx8qr1md.js";
import "../../02-功能模块/会话-历史-恢复/chunk-mkmy4cx2.js";
import { pnn } from "../../02-功能模块/诊断-HeapDump/诊断-HeapDump.a3sn2876.js";
import "./chunk-px58ry6q.js";
import "./chunk-a7cfts2d.js";
import "./chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../核心工具-路径与平台/chunk-13kdp2ag.js";
import { basename as l } from "path";
async function x(s, e) {
  let t = await pnn(),
    o = lo(e.session);
  if (!t.success) {
    if (o)
      return (
        n(`heapdump failed: ${t.error}`, { level: "error" }),
        {
          type: "text",
          value:
            "Failed to create heap dump (detail withheld on this connection)",
        }
      );
    return { type: "text", value: `Failed to create heap dump: ${t.error}` };
  }
  let p = o ? l(t.heapPath) : t.heapPath,
    r = o ? l(t.diagPath) : t.diagPath;
  if (o) n(`heapdump written: ${t.heapPath} ${t.diagPath}`);
  let i = [p, r, "", u(t.diagnostics)];
  return (
    i.push(
      "",
      "Open the .heapsnapshot in Chrome DevTools \u2192 Memory \u2192 Load to inspect retainers.",
    ),
    {
      type: "text",
      value: i.join(`
`),
    }
  );
}
function u(s) {
  let { memoryUsage: e, resourceUsage: t, analysis: o } = s,
    p = e.external - e.arrayBuffers,
    r = Math.max(0, e.rss - e.heapTotal - e.external),
    i =
      e.heapTotal > e.external + r
        ? "\u2014 most memory is JS heap (inspect the .heapsnapshot)"
        : "\u2014 most memory is native (NOT in the .heapsnapshot)",
    h = o.potentialLeaks.length
      ? o.potentialLeaks.map((c) => `  \u26A0 ${c}`).join(`
`)
      : "  (no obvious leak indicators)";
  return [
    `RSS ${a(e.rss)} (peak ${a(t.maxRSS)}) ${i}`,
    `  JS heap        ${a(e.heapTotal).padStart(8)}  in snapshot`,
    `  array buffers  ${a(e.arrayBuffers).padStart(8)}  not in snapshot`,
    `  other external ${a(p).padStart(8)}  not in snapshot`,
    `  unaccounted    ${a(r).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`,
    h,
  ].join(`
`);
}
function a(s) {
  return `${(s / 1073741824).toFixed(2)} GB`;
}
export { x as call };
