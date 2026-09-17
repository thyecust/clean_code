// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { withDeadline } from "./async-timeout-utils.js";
import { isSimpleMode } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import { CREDENTIALS_SUFFIX, getKeychainServiceName, getKeychainAccountName, getKeychainState, primeKeychainCache } from "./keychain-access.js";
import { execFile } from "child_process";
var s = 1e4,
  KEYCHAIN_PREFETCH_FASTPATH_BUDGET_MS = 250,
  r = null,
  l;
function isWindowsCredManagerAvailable() {
  return l === !0;
}
function getLastKnown() {
  return getKeychainState().lastKnown;
}
function setLastKnown(e) {
  getKeychainState().lastKnown = e;
}
function a(e) {
  return new Promise((o) => {
    try {
      execFile(
        "security",
        ["find-generic-password", "-a", getKeychainAccountName(), "-w", "-s", e],
        { encoding: "utf-8", timeout: s, windowsHide: !0 },
        (t, i) => {
          let n = Boolean(t && "killed" in t && t.killed);
          o(n ? null : { stdout: t ? null : i?.trim() || null });
        },
      );
    } catch {
      o(null);
    }
  });
}
function startKeychainPrefetch() {
  if (r || isSimpleMode()) return;
  let e = getKeychainState(),
    o = e.generation;
  e.legacyApiKeyPrefetch = "pending";
  let t = a(getKeychainServiceName(CREDENTIALS_SUFFIX)).then((n) => {
      if (n) primeKeychainCache(n.stdout, o, e);
    }),
    i = a(getKeychainServiceName()).then((n) => {
      if (n && e.legacyApiKeyPrefetch === "pending") e.legacyApiKeyPrefetch = n;
    });
  r = Promise.all([t, i]).then(() => {});
}
async function ensureKeychainPrefetchCompleted(e) {
  if (!r) return;
  await (e === void 0 ? r : withDeadline(r, e));
}
function getLegacyApiKeyPrefetchResult() {
  let e = getKeychainState().legacyApiKeyPrefetch;
  return e === "pending" ? null : e;
}
function clearLegacyApiKeyPrefetch() {
  getKeychainState().legacyApiKeyPrefetch = null;
}
export { KEYCHAIN_PREFETCH_FASTPATH_BUDGET_MS, isWindowsCredManagerAvailable, getLastKnown, setLastKnown, startKeychainPrefetch, ensureKeychainPrefetchCompleted, getLegacyApiKeyPrefetchResult, clearLegacyApiKeyPrefetch };
