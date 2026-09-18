// Node 内建模块名单（含 `node:` 前缀的写法）。用 `node -e "require('module').builtinModules"` 生成后固化，
// 避免依赖运行时的 module 模块（本树用 bun 跑）。
export const BUILTINS = new Set([
  "_http_agent", "_http_client", "_http_common", "_http_incoming", "_http_outgoing",
  "_http_server", "_stream_duplex", "_stream_passthrough", "_stream_readable",
  "_stream_transform", "_stream_wrap", "_stream_writable", "_tls_common", "_tls_wrap",
  "assert", "assert/strict", "async_hooks", "buffer", "child_process", "cluster",
  "console", "constants", "crypto", "dgram", "diagnostics_channel", "dns",
  "dns/promises", "domain", "events", "fs", "fs/promises", "http", "http2", "https",
  "inspector", "inspector/promises", "module", "net", "os", "path", "path/posix",
  "path/win32", "perf_hooks", "process", "punycode", "querystring", "readline",
  "readline/promises", "repl", "stream", "stream/consumers", "stream/promises",
  "stream/web", "string_decoder", "sys", "timers", "timers/promises", "tls",
  "trace_events", "tty", "url", "util", "util/types", "v8", "vm", "wasi",
  "worker_threads", "zlib", "sqlite", "test", "sea",
]);

/** 去掉 `node:` 前缀后是否内建 */
export function isBuiltin(source) {
  const s = source.startsWith("node:") ? source.slice(5) : source;
  return BUILTINS.has(s);
}
