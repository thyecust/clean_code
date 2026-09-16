// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ku } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { R } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { mn } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import { hO, uI, Lpt, Mpt } from "../../01-核心基础设施/共享小工具-未细化/chunk-y2pwa8n5.js";
import { bTe } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { YNe } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { s, T, v, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { randomUUID as L } from "crypto";
import {
  lstat as I,
  mkdir as O,
  open as B,
  readdir as C,
  stat as N,
  unlink as M,
  writeFile as H,
} from "fs/promises";
import {
  basename as b,
  dirname as U,
  isAbsolute as j,
  join as F,
  resolve as X,
} from "path";
var Y = Mpt * 24 * 60 * 60 * 1000,
  k = "file-transfers";
function S(t) {
  n(`[peer-file-transfer] ${t}`);
}
function pze(t) {
  let e = b(t).replace(/[^a-zA-Z0-9._-]/g, "_") || "attachment",
    r = e.lastIndexOf("."),
    o = r > 0 && e.length - r <= 16 ? e.slice(r) : "",
    a = o ? e.slice(0, r) : e,
    l = 200 - o.length;
  return (a.length > l ? a.slice(0, l) : a) + o;
}
function Rpt(t, e) {
  return `[SendFile: "${pze(t)}" was not delivered \u2014 ${e}]`;
}
function kpt(t) {
  return `[SendFile: ${t} additional attachment(s) were dropped \u2014 max ${uI} per message]`;
}
function tFt(t, e) {
  if (typeof e.file_size === "number" && t.length !== e.file_size) return !1;
  return mn(t) === e.sha256;
}
function nFt(t, e, r) {
  if (
    (i("tengu_send_file_received", {
      transport: u(t),
      file_count: e,
      verified_count: r,
    }),
    r === e)
  )
    y("peer_file_receive");
  else if (r > 0) g("peer_file_receive", "partial_failed");
  else f("peer_file_receive", "all_failed");
}
async function xpt(t, e) {
  try {
    let o = await N(t);
    if (!o.isFile() || o.size > e) return null;
  } catch {
    return null;
  }
  let r;
  try {
    r = await B(t, "r");
  } catch {
    return null;
  }
  try {
    let o = await r.stat();
    if (!o.isFile() || o.size > e) return null;
    return await r.readFile();
  } catch {
    return null;
  } finally {
    await r.close().catch(() => {});
  }
}
function rFt(t, e) {
  if (!e) return t;
  let r = /^<cross-session-message\b[^>]*>\n?/.exec(t);
  return r ? r[0] + e + t.slice(r[0].length) : e + t;
}
function fze() {
  return F(be(), k);
}
function G() {
  return bTe();
}
var V = /^[0-9a-f]{64}$/,
  Z = m(() =>
    c({
      path: s(),
      file_name: s(),
      file_size: T().int().nonnegative(),
      sha256: s().regex(V),
      media_type: s().optional(),
    }),
  ),
  q = m(() => v(Z()));
async function Ean(t) {
  let e = await xpt(t, hO);
  if (e === null)
    throw new R(
      Lpt,
      "peer file transfer: source unreadable or over the size limit",
    );
  let r = mn(e),
    o = fze();
  await O(o, { recursive: !0, mode: 448 });
  let a = b(t),
    l = F(o, `${r.slice(0, 8)}-${L().slice(0, 8)}-${pze(a)}`);
  return (
    await H(l, e, { mode: 384 }),
    {
      path: l,
      file_name: a,
      file_size: e.length,
      sha256: r,
      media_type: YNe(a),
    }
  );
}
async function Aan() {
  let t = fze();
  try {
    let e = await C(t),
      r = Date.now() - Y;
    for (let o of e.slice(0, 200)) {
      let a = F(t, o);
      try {
        let l = await N(a);
        if (l.isFile() && l.mtimeMs < r) await M(a);
      } catch {}
    }
  } catch {}
}
var J = { prefix: "", received: 0, verified: 0 };
async function Khr(t) {
  let e = q().safeParse(t);
  if (!e.success || e.data.length === 0) {
    if (!e.success)
      S(`ignoring malformed file_attachments: ${e.error.message}`);
    return J;
  }
  let r = [],
    o = e.data;
  if (o.length > uI) (r.push(kpt(o.length - uI)), (o = o.slice(0, uI)));
  let a = G(),
    l = fze(),
    x = !1,
    z = [],
    D = 0;
  for (let p of o) {
    let d = (_) => {
      (S(`${p.file_name}: ${_}`), r.push(Rpt(p.file_name, _)));
    };
    if (ku(p.path) || !j(p.path)) {
      d("invalid transfer path");
      continue;
    }
    let h = X(p.path),
      P = U(h);
    if (ku(h) || b(P) !== k) {
      d("transfer path is outside the file-transfer spool");
      continue;
    }
    try {
      if (!(await I(P)).isDirectory() || !(await I(h)).isFile()) {
        d("the transfer copy is not a regular file");
        continue;
      }
    } catch {
      d("the transfer copy could not be read (it may have expired)");
      continue;
    }
    let w = await xpt(h, hO);
    if (w === null) {
      d("the transfer copy could not be read (it may have expired)");
      continue;
    }
    if (!tFt(w, p)) {
      d("it failed integrity verification");
      continue;
    }
    let E = F(
      a,
      `${p.sha256.slice(0, 8)}-${L().slice(0, 8)}-${pze(p.file_name)}`,
    );
    try {
      if (!x) (await O(a, { recursive: !0, mode: 448 }), (x = !0));
      await H(E, w, { mode: 384, flag: "wx" });
    } catch (_) {
      (d("it could not be written to the uploads directory"),
        S(`write ${E} failed: ${_}`));
      continue;
    }
    if ((D++, z.push(`@"${E}"`), P === l)) M(h).catch(() => {});
  }
  let A = [...z, ...r];
  return {
    prefix: A.length > 0 ? A.join(" ") + " " : "",
    received: o.length,
    verified: D,
  };
}
export { pze, Rpt, kpt, tFt, nFt, xpt, rFt, fze, Ean, Aan, Khr };
