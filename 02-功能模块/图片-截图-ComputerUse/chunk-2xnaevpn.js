// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { CA } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { aoe } from "../Teammates团队/chunk-g6nvp9mm.js";
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { _n, Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { We, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { mn } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import { hO, uI } from "../../01-核心基础设施/共享小工具-未细化/chunk-y2pwa8n5.js";
import { pze, Rpt, kpt, tFt, nFt, rFt } from "../跨会话消息(UDS)/chunk-qvnte9zp.js";
import { getBridgeAccessToken, getBridgeAccessTokenAsync, getBridgeBaseUrl } from "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import { Cce, gsn } from "../Bridge-RemoteControl/chunk-jpq2fv3g.js";
import { Ds, bTe, Vzn, Kzn } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { KNe, iJn } from "./chunk-0dcnsftb.js";
import { randomUUID } from "crypto";
import { mkdir, realpath, writeFile } from "fs/promises";
import { join as L } from "path";
var j = 30000;
function a(e) {
  n(`[bridge:inbound-attach] ${e}`);
}
var z = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/gif": "gif",
  "image/webp": "webp",
};
async function D(e, s, l, m, p) {
  let i = M() && p !== void 0 ? await getBridgeAccessTokenAsync(p) : getBridgeAccessToken();
  if (!i) return (a("skip: no oauth token"), { failure: "download" });
  let r;
  try {
    let o = `${getBridgeBaseUrl()}/api/oauth/files/${encodeURIComponent(e.file_uuid)}/content`;
    if (typeof e.file_size === "number" && e.file_size > hO)
      return { failure: "download" };
    let b = await at.get(o, {
      headers: { Authorization: `Bearer ${i}` },
      responseType: "arraybuffer",
      timeout: j,
      maxContentLength: hO,
      maxBodyLength: hO,
      validateStatus: () => !0,
    });
    if (b.status !== 200)
      return (
        a(`fetch ${e.file_uuid} failed: status=${b.status}`),
        { failure: "download" }
      );
    if (((r = Buffer.from(b.data)), r.length > hO))
      return (
        a(`fetch ${e.file_uuid} over size cap (${r.length} bytes)`),
        { failure: "download" }
      );
  } catch (o) {
    return (a(`fetch ${e.file_uuid} threw: ${o}`), { failure: "download" });
  }
  if (
    typeof e.sha256 === "string" &&
    !tFt(r, { sha256: e.sha256, file_size: e.file_size })
  )
    return (
      a(`fetch ${e.file_uuid} failed integrity verification`),
      { failure: "digest_mismatch" }
    );
  let u =
      l && e.is_image === !0 && e.sha256 === void 0
        ? await iJn(r, CA).catch(
            (o) => (a(`inline ${e.file_uuid} threw: ${o}`), null),
          )
        : null,
    d = u ? `image.${z[KNe(r)]}` : pze(e.file_name),
    h = (
      u ? randomUUID().slice(0, 8) : e.file_uuid.slice(0, 8) || randomUUID().slice(0, 8)
    ).replace(/[^a-zA-Z0-9_-]/g, "_"),
    k = bTe(),
    _ = Vzn(h, d),
    c = L(k, _),
    B = K();
  if (M() && m !== void 0 && _n(B) && _n(_)) {
    let o = await m.write(Ce.userConfigDir("uploads", [B, _]), r, {
      mode: 384,
    });
    if (!o.ok)
      return (a(`write ${c} failed: ${We(o.error)}`), { failure: "write" });
  } else
    try {
      (await mkdir(k, { recursive: !0, mode: 448 }), await writeFile(c, r, { mode: 384 }));
    } catch (o) {
      return (a(`write ${c} failed: ${o}`), { failure: "write" });
    }
  if (s && e.sha256 === void 0)
    try {
      Kzn(await realpath(c), mn(r));
    } catch {
      a(`registration skipped for ${c}`);
    }
  if ((a(`resolved ${e.file_uuid} \u2192 ${c} (${r.length} bytes)`), u))
    return (
      a(`inlined ${e.file_uuid} (${r.length} bytes)`),
      { imageBlock: u, path: c }
    );
  if (l && e.is_image === !0 && e.sha256 === void 0)
    return (
      a(`inline ${e.file_uuid} fell back to @path ref`),
      { path: c, inlineFellBack: !0 }
    );
  return { path: c };
}
var U = {
  download: "it could not be downloaded",
  digest_mismatch: "it failed integrity verification",
  write: "it could not be written to the uploads directory",
};
async function H(e, s, l, m, p) {
  if (e.length === 0)
    return { prefix: "", imageBlocks: [], inlinedImagePaths: [] };
  a(`resolving ${e.length} attachment(s)`);
  let i = e.filter((t) => typeof t.sha256 === "string");
  if (!(M() && p !== void 0 ? await getBridgeAccessTokenAsync(p) : getBridgeAccessToken())) {
    if (
      (a("skip: no oauth token"),
      logFeatureSad("bridge_attachment_resolve", "no_token"),
      i.length > 0)
    ) {
      let t = i.length - uI,
        I = t > 0 ? i.slice(0, uI) : i;
      nFt("bridge", I.length, 0);
      let w = t > 0 ? " " + kpt(t) : "";
      return {
        prefix:
          I.map((R) =>
            Rpt(R.file_name, "it could not be downloaded (not signed in)"),
          ).join(" ") +
          w +
          " ",
        imageBlocks: [],
        inlinedImagePaths: [],
      };
    }
    return { prefix: "", imageBlocks: [], inlinedImagePaths: [] };
  }
  let u = [],
    d = e,
    h = d.length > uI;
  if (h) {
    if (
      (a(`dropping ${d.length - uI} attachment(s) over the ${uI} cap`),
      i.length > 0)
    )
      u.push(kpt(d.length - uI));
    d = d.slice(0, uI);
  }
  let k = s && l,
    _ = Ds(4, (t) => D(t, s, k, m, p)),
    c = await Promise.all(d.map((t) => _(t))),
    B = [],
    o = [],
    b = [],
    A = 0,
    v = 0,
    F = 0,
    x = !1;
  if (
    (c.forEach((t, I) => {
      let w = d[I],
        P = typeof w.sha256 === "string";
      if (P) v++;
      if ("imageBlock" in t) (o.push(t.imageBlock), b.push(t.path));
      else if ("path" in t) {
        if ((B.push(`@"${t.path}"`), t.inlineFellBack)) A++;
        if (P) F++;
      } else {
        if (t.failure === "digest_mismatch") x = !0;
        if (P) u.push(Rpt(w.file_name, U[t.failure]));
      }
    }),
    v > 0)
  )
    nFt("bridge", v, F);
  let E = B.length + o.length;
  if (E === 0)
    logFeatureBad("bridge_attachment_resolve", x ? "digest_mismatch" : "all_failed");
  else if (E < d.length)
    logFeatureSad("bridge_attachment_resolve", x ? "digest_mismatch" : "partial_failed");
  else if (h) logFeatureSad("bridge_attachment_resolve", "over_count_cap");
  else logFeatureOk("bridge_attachment_resolve");
  if (A > 0) logFeatureSad("bridge_attachment_inline_image", "fallback_path_ref");
  else if (o.length > 0) logFeatureOk("bridge_attachment_inline_image");
  let S = [...B, ...u];
  return {
    prefix: S.length > 0 ? S.join(" ") + " " : "",
    imageBlocks: o,
    inlinedImagePaths: b,
  };
}
function X(e, s) {
  if (!s) return e;
  if (typeof e === "string") return rFt(e, s);
  let l = e.findLastIndex((m) => m.type === "text");
  if (l !== -1) {
    let m = e[l];
    if (m.type === "text")
      return [
        ...e.slice(0, l),
        { ...m, text: rFt(m.text, s) },
        ...e.slice(l + 1),
      ];
  }
  return [...e, { type: "text", text: s.trimEnd() }];
}
function G(e, s) {
  if (s.length === 0) return e;
  let l =
    typeof e === "string"
      ? e.trim() === ""
        ? []
        : [{ type: "text", text: e }]
      : gsn(e);
  return [...s, ...l];
}
async function dIt(e, s, l, m, p) {
  let i = s ?? "",
    r = Cce(e);
  if (r.length === 0) return { content: i, inlinedImagePaths: [] };
  let u = l && !(typeof i === "string" && aoe(i)),
    {
      prefix: d,
      imageBlocks: h,
      inlinedImagePaths: k,
    } = await H(r, l, u, m, p),
    _ = typeof i === "string" ? i.trim() === "" : i.length === 0;
  if (h.length === 0 && !d && _)
    return {
      content:
        typeof i === "string"
          ? "[attachment could not be downloaded]"
          : [{ type: "text", text: "[attachment could not be downloaded]" }],
      inlinedImagePaths: [],
    };
  return { content: G(X(i, d), h), inlinedImagePaths: k };
}
export { dIt };
