// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 76 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { St } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { ht } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Da } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { bw, Yi } from "../权限系统/chunk-1y2g140m.js";
import { xpn } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { B1e } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
var m = 1500;
async function D(r, e) {
  let c = B1e(),
    i = c ? null : (Yi() ?? bw());
  if (!c && !i?.recordCreatedPR) return;
  if (r.provider !== "github") return;
  if (St()) return;
  let d = r.prRepository.indexOf("/"),
    s = r.prRepository.slice(0, d),
    a = r.prRepository.slice(d + 1),
    p = await Da(e),
    l = p === "HEAD" ? "" : p;
  try {
    if (i?.recordCreatedPR) {
      let o = await i.recordCreatedPR(
        { owner: s, repo: a, prNumber: r.prNumber, headRef: l },
        m,
      );
      if (o.ok) u(o.status);
      else if ("skipped" in o) _(o.skipped);
      else R(o.kind, o.status);
      return;
    }
    let t = await ht.post(
      xpn,
      { owner: s, repo: a, pr_number: r.prNumber, head_ref: l },
      {
        auth: "session-jwt",
        host: "ccr-session",
        headers: { "anthropic-version": "2023-06-01" },
        timeout: m,
      },
    );
    if (!t.ok) {
      _(t.reason);
      return;
    }
    u(t.status);
  } catch (t) {
    let { kind: o, status: C } = Ps(t);
    R(o, C);
  }
}
function u(r) {
  (y("ccr_record_created_pr"),
    n(`recordCreatedPrToCcr: RecordCreatedPR -> ${r}`));
}
function _(r) {
  (g("ccr_record_created_pr", r), n(`recordCreatedPrToCcr: skipped (${r})`));
}
function R(r, e) {
  if (e === 404 || e === 501) g("ccr_record_created_pr", "not_deployed");
  else f("ccr_record_created_pr", `${r}${e ? `_${e}` : ""}`);
  n(`recordCreatedPrToCcr: RecordCreatedPR failed: ${r}${e ? ` ${e}` : ""}`);
}
export { D as recordCreatedPrToCcr };
