// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Bc } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { St } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { ht, wu, H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Mt } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
var u = 1e4,
  a = { auth: "teleport-org", timeout: u, headers: { "anthropic-beta": Bc } };
function zSe() {
  if (St()) return !1;
  if (!Mt("allow_team_onboarding")) return !1;
  if (!wu()) return !1;
  return H("tengu_flint_harbor_share", !1);
}
function o(e) {
  if (!e.ok)
    throw Error(
      e.reason === "no-auth"
        ? e.detail
        : `Onboarding guide unavailable: ${e.reason}`,
    );
  return e.data;
}
function t() {
  if (!Mt("allow_team_onboarding"))
    throw Error("Onboarding guide unavailable: policy-disabled");
}
async function rjn(e, n, r) {
  t();
  let d = await ht.post(
      "/api/organizations/:orgUUID/claude_code/onboarding",
      { content: e, name: n },
      { ...a, credentials: r },
    ),
    s = o(d);
  return (i("tengu_team_onboarding_share_created", {}), s);
}
async function pon(e, n, r) {
  t();
  let d = await ht.put(
      `/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,
      { content: n },
      { ...a, credentials: r },
    ),
    s = o(d);
  return (i("tengu_team_onboarding_share_updated", {}), s);
}
async function ojn(e, n) {
  t();
  let r = await ht.delete(
    `/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,
    void 0,
    { ...a, credentials: n },
  );
  (o(r), i("tengu_team_onboarding_share_deleted", {}));
}
async function fon(e) {
  t();
  let n = await ht.get("/api/organizations/:orgUUID/claude_code/onboarding", {
    ...a,
    credentials: e,
  });
  return o(n).guides;
}
export { zSe, rjn, pon, ojn, fon };
