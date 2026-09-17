// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { isLoopbackHostname } from "../核心工具-路径与平台/is-loopback-hostname.js";
import h from "ws";
class i extends Error {
  name = "TestEgressBlockedError";
  code = "TestEgressBlocked";
}
var f = globalThis.fetch,
  g = h;
function getRequestMethodAndUrl(e, t) {
  if (e instanceof Request)
    return { method: (t?.method ?? e.method).toUpperCase(), url: e.url };
  return { method: (t?.method ?? "GET").toUpperCase(), url: String(e) };
}
function E() {
  return Ie(process.env.CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK);
}
function u(e, t) {
  return `[CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK] live request from a test runtime: ${e} ${t}
`;
}
function c(e) {
  let t;
  try {
    t = isLoopbackHostname(new URL(e).hostname);
  } catch {
    t = !1;
  }
  if (t) return "loopback";
  return E() ? "opted-in" : "refused";
}
function o(e, t) {
  return (
    `Blocked under test: ${e} ${t} \u2014 test runtimes must not reach the network. ` +
    "Run the file via `bun run test:file -- <path>` with this request mocked, or set CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK=1 for an intentional live probe."
  );
}
function p(e) {
  let t = at.getUri(e),
    r = (e.method ?? "get").toUpperCase();
  switch (c(t)) {
    case "loopback":
      return m(e, r);
    case "opted-in":
      return (process.stderr.write(u(r, t)), e);
    case "refused":
      throw new i(o(r, t));
  }
}
function m(e, t) {
  let r = e.beforeRedirect;
  return (
    (e.beforeRedirect = (n, a) => {
      let s = typeof n.href === "string" ? n.href : "";
      switch (c(s)) {
        case "loopback":
          break;
        case "opted-in":
          process.stderr.write(u(t, s));
          break;
        case "refused":
          throw (
            process.stderr.write(`${o(t, s)}
`),
            new i(o(t, s))
          );
      }
      r?.(n, a);
    }),
    e
  );
}
function w() {
  if (!l()) at.interceptors.request.use(p);
}
function l() {
  return (
    at.interceptors.request.handlers?.some((e) => e?.fulfilled === p) ?? !1
  );
}
function d() {
  return !1;
}
function ensureAxiosEgressGuardInstalled() {
  return;
}
function checkFetchEgress(e, t, r) {
  if (e !== f || !d()) return;
  switch (c(r)) {
    case "loopback":
      return;
    case "opted-in":
      process.stderr.write(u(t, r));
      return;
    case "refused":
      throw new i(o(t, r));
  }
}
function checkRedirectEgress(e, t, r) {
  if (e !== f || !d()) return;
  if (r.redirected && c(r.url) === "refused") throw new i(o(t, r.url));
}
var T;
function checkWebSocketEgress(e, t) {
  if (!d() || (t !== void 0 && t !== g)) return;
  switch (c(e)) {
    case "loopback":
      return;
    case "opted-in":
      process.stderr.write(u("WS", e));
      return;
    case "refused": {
      let r = new i(o("WS", e));
      throw (T?.(r), r);
    }
  }
}
async function runGuardedFetch(e, t) {
  let r = globalThis.fetch,
    { method: n, url: a } = getRequestMethodAndUrl(e, t);
  checkFetchEgress(r, n, a);
  let s = await r(e, t);
  return (checkRedirectEgress(r, n, s), s);
}
export { getRequestMethodAndUrl, ensureAxiosEgressGuardInstalled, checkFetchEgress, checkRedirectEgress, checkWebSocketEgress, runGuardedFetch };
