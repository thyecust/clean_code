// [claude-code-src shim]
// Drop-in replacement for chunk-w3axq133.js  (Claude Code v2.1.263)
//
//   G0n()  ->  @smithy/middleware-serde   namespace
//   Lm()   ->  @smithy/core              namespace
//
// The originals are __commonJS lazy factories (var G0n = w(function (B) {...})), so every
// consumer CALLS them:
//     var d  = Lm();   d.normalizeProvider(...)          (chunk-7j004336.js)
//     var du = G0n();  du.serializerMiddlewareOption      (chunk-7j004336.js)
//     this.middlewareStack.use(d.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {...}))
// The exports must therefore be zero-arg functions returning the namespace object.
// `export { default as Lm }` (namespace itself) would break every call site silently.
//
// Install tree expected next to this file:
//   ./_source/node_modules/@smithy/core@3.23.3
//   ./_source/node_modules/@smithy/middleware-serde@4.2.12
//   (plus their deps: @smithy/types, @smithy/protocol-http, @smithy/util-middleware, ...)
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let _serde, _core;

export const G0n = () =>
  (_serde ??= require("./_source/node_modules/@smithy/middleware-serde/dist-cjs/index.js"));
export const Lm = () =>
  (_core ??= require("./_source/node_modules/@smithy/core/dist-cjs/index.js"));
