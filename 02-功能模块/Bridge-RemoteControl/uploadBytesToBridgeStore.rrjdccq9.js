// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 69 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { Vt } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { St } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { y, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Pe } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { oG, m_, wC } from "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import { op, DD } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { hO } from "../../01-核心基础设施/共享小工具-未细化/chunk-y2pwa8n5.js";
import { s, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { randomUUID as v } from "crypto";
import { readFile as C } from "fs/promises";
import { basename as w, extname as D } from "path";
var B = hO,
  k = B / 1048576;
function x(e) {
  return `${(e / 1048576).toFixed(1)} MiB`;
}
var O = 30000,
  F = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
  };
function L(e) {
  let r = D(e).toLowerCase();
  return F[r] ?? "application/octet-stream";
}
function P(e) {
  return e
    .replace(/[\r\n]/g, "")
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"');
}
function o(e) {
  n(`[brief:upload] ${e}`);
}
function E(e) {
  if (Pe() !== "firstParty")
    return (
      g("bridge_attachment_upload", "not_first_party", e),
      {
        error:
          "upload disabled: uploading file contents to Anthropic servers is not permitted on this API provider",
      }
    );
  if (St())
    return (
      g("bridge_attachment_upload", "essential_traffic", e),
      {
        error:
          "upload disabled: uploading file contents to Anthropic servers is not permitted under this privacy configuration",
      }
    );
  let r = DD("allow_send_file");
  if (r !== null)
    return (
      g(
        "bridge_attachment_upload",
        r === "org_denied" ? "policy_denied" : `policy_${r}`,
        e,
      ),
      {
        error: "upload disabled: " + op("allow_send_file", "File upload", "is"),
      }
    );
  return null;
}
function I() {
  return oG() ?? a.ANTHROPIC_BASE_URL ?? Vt().BASE_API_URL;
}
function j(e) {
  if (e === 401 || e === 403 || e === 413) return `http_${e}`;
  if (e >= 500) return "http_5xx";
  if (e >= 400) return "http_4xx";
  return "http_other";
}
var R = m(() => c({ file_uuid: s() }));
async function H(e, r, d, l, i, A) {
  let f = E(i);
  if (f) return (o(`skip ${r}: policy/provider gate denied`), f);
  if (e.length > B)
    return (
      o(`skip ${r}: ${e.length} bytes exceeds ${B} limit`),
      g("bridge_attachment_upload", "too_large", i),
      { error: `${x(e.length)} exceeds the ${k} MiB upload limit` }
    );
  let _ = M() && A !== void 0 ? await wC(A) : m_();
  if (!_)
    return (
      o("skip: no oauth token"),
      g("bridge_attachment_upload", "no_token", i),
      { error: "upload failed: no OAuth token available" }
    );
  let T = `${I()}/api/oauth/file_upload`,
    U = `----FormBoundary${v()}`,
    S = Buffer.concat([
      Buffer.from(`--${U}\r
Content-Disposition: form-data; name="file"; filename="${P(r)}"\r
Content-Type: ${d}\r
\r
`),
      e,
      Buffer.from(`\r
--${U}--\r
`),
    ]);
  try {
    let t = await at.post(T, S, {
      headers: {
        Authorization: `Bearer ${_}`,
        "Content-Type": `multipart/form-data; boundary=${U}`,
        "Content-Length": S.length.toString(),
      },
      timeout: O,
      signal: l,
      validateStatus: () => !0,
    });
    if (t.status !== 201)
      return (
        o(
          `upload failed for ${r}: status=${t.status} body=${b(t.data).slice(0, 200)}`,
        ),
        g("bridge_attachment_upload", j(t.status), i),
        { error: `upload failed: server returned ${t.status}` }
      );
    let p = R().safeParse(t.data);
    if (!p.success)
      return (
        o(`unexpected response shape for ${r}: ${p.error.message}`),
        g("bridge_attachment_upload", "bad_response", i),
        { error: "upload failed: unexpected server response" }
      );
    return (
      o(`uploaded ${r} \u2192 ${p.data.file_uuid} (${e.length} bytes)`),
      y("bridge_attachment_upload", i),
      p.data.file_uuid
    );
  } catch (t) {
    o(`upload threw for ${r}: ${t}`);
    let p = at.isCancel(t);
    return (
      g("bridge_attachment_upload", p ? "aborted" : "network_error", i),
      {
        error: p
          ? "upload aborted"
          : `upload failed: network error (${t instanceof Error ? t.message : t})`,
      }
    );
  }
}
async function ae(e, r, d) {
  let l = { upload_lane: u(d.lane) },
    i = E(l);
  if (i) return (o(`skip ${e}: policy/provider gate denied`), i);
  if (!(M() && d.credentials !== void 0 ? await wC(d.credentials) : m_()))
    return (
      o("skip: no oauth token"),
      g("bridge_attachment_upload", "no_token", l),
      { error: "upload failed: no OAuth token available" }
    );
  if (r > B)
    return (
      o(`skip ${e}: ${r} bytes exceeds ${B} limit`),
      g("bridge_attachment_upload", "too_large", l),
      { error: `${x(r)} exceeds the ${k} MiB upload limit` }
    );
  let f;
  try {
    f = await C(e);
  } catch (h) {
    return (
      o(`read failed for ${e}: ${h}`),
      g("bridge_attachment_upload", "read_failed", l),
      {
        error: `upload failed: could not read file (${h instanceof Error ? h.message : h})`,
      }
    );
  }
  let _ = w(e);
  return H(f, _, L(_), d.signal, l, d.credentials);
}
export { ae as uploadBriefAttachment, H as uploadBytesToBridgeStore };
