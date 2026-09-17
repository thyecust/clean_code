// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "./lazy-value.js";
import { fE, Clt } from "../../02-功能模块/远程工具执行/chunk-66axrkvh.js";
import { normalizeMcpName } from "./mcp-name-normalization.js";
import { s, se, c, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var DEVICE_PASSTHROUGH_META_KEY = "anthropic/devicePassthrough",
  a = ["get_device_info", "device_bash", "list_devices", "sync_files"],
  _ = "Claude_Browser__",
  n = 128,
  i = 1,
  l = createLazyValue(() => c({ v: k(i), tool: s().min(1).max(n), target: se().optional() }));
function parseDevicePassthroughMeta(t) {
  let e = l().safeParse(t);
  if (!e.success) return;
  let o = Clt(e.data.target);
  return o === void 0
    ? void 0
    : { v: e.data.v, tool: fE(e.data.tool, n), target: o };
}
function r(t) {
  return normalizeMcpName(t).toLowerCase().replace(/[-_]+/g, "_").replace(/^_|_$/g, "");
}
var p = a.map(r),
  u = `${r(_)}_`;
function d(t) {
  let e = `${r(t)}_`;
  return p.some((o) => e.startsWith(`${o}_`));
}
function E(t) {
  let e = t.lastIndexOf("__"),
    o = e === -1 ? t : t.slice(e + 2);
  return (
    o.startsWith("computer_") ||
    o === "device_request_folder_access" ||
    o === "device_request_delete_permission" ||
    `__${t}`.endsWith("__Claude_Browser__request_access")
  );
}
function isNonDeviceToolName(t) {
  return !d(t) && !`${r(t)}_`.startsWith(u) && !E(t);
}
export { DEVICE_PASSTHROUGH_META_KEY, parseDevicePassthroughMeta, isNonDeviceToolName };
