// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 27 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { lo } from "./chunk-dajvcsw3.js";
import { performHeapDump } from "../../02-功能模块/诊断-HeapDump/诊断-HeapDump.a3sn2876.js";
import { basename } from "path";
async function x(s, e) {
  let t = await performHeapDump(),
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
  let p = o ? basename(t.heapPath) : t.heapPath,
    r = o ? basename(t.diagPath) : t.diagPath;
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
