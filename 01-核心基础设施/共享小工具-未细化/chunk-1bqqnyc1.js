// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { kt } from "./chunk-510m1t2d.js";
import { uo } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import { $5, Sx, tv, MU, Bar } from "./chunk-h3avap4w.js";
import { execFile as c } from "child_process";
var s = 1e4,
  Qxn = 250,
  r = null,
  l;
function ubr() {
  return l === !0;
}
function dbr() {
  return MU().lastKnown;
}
function pbr(e) {
  MU().lastKnown = e;
}
function a(e) {
  return new Promise((o) => {
    try {
      c(
        "security",
        ["find-generic-password", "-a", tv(), "-w", "-s", e],
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
function Zxn() {
  if (r || uo()) return;
  let e = MU(),
    o = e.generation;
  e.legacyApiKeyPrefetch = "pending";
  let t = a(Sx($5)).then((n) => {
      if (n) Bar(n.stdout, o, e);
    }),
    i = a(Sx()).then((n) => {
      if (n && e.legacyApiKeyPrefetch === "pending") e.legacyApiKeyPrefetch = n;
    });
  r = Promise.all([t, i]).then(() => {});
}
async function Bet(e) {
  if (!r) return;
  await (e === void 0 ? r : kt(r, e));
}
function Y5t() {
  let e = MU().legacyApiKeyPrefetch;
  return e === "pending" ? null : e;
}
function J5t() {
  MU().legacyApiKeyPrefetch = null;
}
export { Qxn, ubr, dbr, pbr, Zxn, Bet, Y5t, J5t };
